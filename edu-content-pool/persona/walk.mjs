#!/usr/bin/env node
// 페르소나 화면 조작 검사 실행기 — persona/SPEC.md 를 따른다.
// 교사 3명·학생 10명 페르소나가 player.html 을 화면 단추와 조작기(drivers/<교구>.mjs)의 DOM 입력만으로 진행한다.
// 교구 상태를 쓰는 호출(setState·solve·reset·__pl.goto)은 쓰지 않는다. window.__pl 은 읽기만 한다.
//
// 사용: node edu-content-pool/persona/walk.mjs --lessons <id,id|unit:<단원 id>|all> --persona <T1..T3,S1..S10 (쉼표 여럿)|auto>
//        [--shard i/n] [--out <jsonl>] [--hub http://localhost:8791]
//   auto   차시마다 학생 페르소나를 S1→S10 돌아가며 하나씩, 단원마다 첫 차시는 T1·마지막 차시는 T2/T3(단원마다 번갈아)를 더한다.
//   --shard i/n  (차시, 페르소나) 작업 목록을 n 개로 나눠 i 번째(1부터)만 돈다. 프로세스마다 크롬 하나.
//   --out  JSONL 을 이어 쓴다(여러 shard 가 한 파일에 써도 된다). 없으면 persona/out/walk-<시각>[-i-n].jsonl
// 출력: 차시·페르소나마다 JSONL 한 줄 { lesson, persona, stage, items[], flow[], errors[], problems[] } — problems 는 문항에 묶이지 않는 것.
// 표준출력 끝에 요약 한 줄. 종료코드 1 = 실행기 자체 오류(인자·허브·크롬·실행기 예외), 결함 발견은 0.
import { appendFileSync, existsSync, mkdirSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import vm from 'node:vm';
import { chromium } from 'playwright-core';
import { findChrome, ignorableConsole, nudge } from '../check-lesson.mjs';

const here = dirname(fileURLToPath(import.meta.url));
const pool = dirname(here);
const argv = process.argv.slice(2);
const arg = (k, d) => { const i = argv.indexOf(k); return i >= 0 && argv[i + 1] != null ? argv[i + 1] : d; };
const hub = arg('--hub', 'http://localhost:8791').replace(/\/$/, '');
const lessonsArg = arg('--lessons', null);
const personaArg = arg('--persona', null);
const shardArg = arg('--shard', null);
const ITEM_MS = 60_000;
const LESSON_MS = 6 * 60_000;

function usage(msg) {
  if (msg) console.error(msg);
  console.error('usage: walk.mjs --lessons <id,id|unit:<단원 id>|all> --persona <T1..T3,S1..S10|auto> [--shard i/n] [--out file.jsonl] [--hub URL]');
  process.exit(1);
}
if (!lessonsArg || !personaArg) usage();

// ---- 페르소나 ----
const PERSONAS = {
  T1: { role: 'teacher', label: '저학년 담임·전자칠판', input: 'mouse', viewport: { width: 1920, height: 1080 } },
  T2: { role: 'teacher', label: '고학년 담임·크롬북 결과 화면', input: 'mouse', viewport: { width: 1366, height: 768 } },
  T3: { role: 'teacher', label: '지원 교사·태블릿', input: 'touch', viewport: { width: 1024, height: 768 }, hasTouch: true, isMobile: true, deviceScaleFactor: 2, level: 'easy', hints: 3, hintFirst: true, read: true },
  S1: { role: 'student', label: '크롬북·마우스·보통', input: 'mouse', viewport: { width: 1366, height: 768 } },
  S2: { role: 'student', label: '크롬북·키보드만', input: 'keyboard', viewport: { width: 1366, height: 768 } },
  S3: { role: 'student', label: '휴대폰 터치', input: 'touch', viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true, deviceScaleFactor: 3 },
  S4: { role: 'student', label: '태블릿 터치', input: 'touch', viewport: { width: 1024, height: 768 }, hasTouch: true, isMobile: true, deviceScaleFactor: 2 },
  S5: { role: 'student', label: '서두르는 학생', input: 'mouse', viewport: { width: 1366, height: 768 }, rush: true },
  S6: { role: 'student', label: '힘든 학생(쉬움+힌트)', input: 'mouse', viewport: { width: 1366, height: 768 }, level: 'easy', hints: 3, hintFirst: true, tries: 3, mood: 'hard' },
  S7: { role: 'student', label: '잘하는 학생(도전)', input: 'mouse', viewport: { width: 1366, height: 768 }, level: 'challenge' },
  S8: { role: 'student', label: '한국어가 서툰 학생(읽어 주기·쉬움)', input: 'mouse', viewport: { width: 1366, height: 768 }, level: 'easy', read: true, mood: 'ok' },
  // 브라우저 200% 확대 = CSS 화면 폭·높이 절반 + 장치 배율 2
  S9: { role: 'student', label: '저시력(200% 확대)', input: 'mouse', viewport: { width: 683, height: 384 }, deviceScaleFactor: 2 },
  S10: { role: 'student', label: '끊기는 와이파이', input: 'mouse', viewport: { width: 1366, height: 768 }, offline: true },
};
const STUDENTS = ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8', 'S9', 'S10'];
const touchy = (p) => p.input === 'touch';

// ---- 차시 목록: 허브가 서빙하는 units-index·단원 파일(없으면 이 작업 공간의 사본) ----
async function getText(rel) {
  try { const r = await fetch(`${hub}/edu-content-pool/${rel}`); if (r.ok) return await r.text(); } catch (_) { /* 사본으로 */ }
  const p = join(pool, rel); return existsSync(p) ? readFileSync(p, 'utf8') : null;
}
async function loadUnit(id) {
  const src = await getText(`lessons/units/${encodeURIComponent(id)}.js`);
  if (!src) return null;
  let unit = null;
  try { vm.runInNewContext(src, { PaperLessons: { registerUnit(u) { unit = u; }, register() {} } }); } catch (e) { console.error(`walk: 단원 ${id} 읽기 실패: ${e.message}`); return null; }
  return unit;
}
// 단원 차시 + refs(기존 data 차시)를 차시 번호 순서로
function unitLessons(unit) {
  const rows = (unit.lessons || []).map((l, i) => ({ n: Number(l.catalog?.lesson) || i + 1, id: l.id }));
  for (const [n, ref] of Object.entries(unit.refs || {})) rows.push({ n: Number(n), id: ref });
  return rows.sort((a, b) => a.n - b.n).map((r) => r.id);
}
async function resolveGroups(spec) {
  // 결과: [{ unit, lessons: [id...] }]
  if (spec === 'all' || spec.startsWith('unit:')) {
    let ids;
    if (spec === 'all') {
      const idx = JSON.parse((await getText('units-index.json')) || 'null');
      if (!idx) usage('walk: units-index.json 을 읽지 못함');
      ids = idx.units.map((u) => u.id).filter((x) => !x.startsWith('_'));
    } else ids = spec.slice(5).split(',').filter(Boolean);
    const groups = []; const missing = [];
    for (let i = 0; i < ids.length; i += 12) {
      const got = await Promise.all(ids.slice(i, i + 12).map(async (id) => ({ id, unit: await loadUnit(id) })));
      for (const g of got) { if (!g.unit) missing.push(g.id); else groups.push({ unit: g.id, lessons: unitLessons(g.unit) }); }
    }
    if (missing.length) console.error(`walk: 단원 파일 없음 ${missing.length}개 (${missing.slice(0, 5).join(', ')}${missing.length > 5 ? ' …' : ''})`);
    return groups;
  }
  const by = new Map();
  for (const id of spec.split(',').map((s) => s.trim()).filter(Boolean)) {
    const m = /^(.+)-\d{2}$/.exec(id); const u = m ? m[1] : id;
    if (!by.has(u)) by.set(u, []); by.get(u).push(id);
  }
  return [...by].map(([unit, lessons]) => ({ unit, lessons }));
}
function buildTasks(groups, personaSpec) {
  const tasks = [];
  if (personaSpec === 'auto') {
    let k = 0;
    groups.forEach((g, gi) => g.lessons.forEach((id, li) => {
      tasks.push({ lesson: id, persona: STUDENTS[k++ % STUDENTS.length], unit: g.unit });
      if (li === 0) tasks.push({ lesson: id, persona: 'T1', unit: g.unit });
      if (li === g.lessons.length - 1 && (li > 0 || g.lessons.length === 1)) tasks.push({ lesson: id, persona: gi % 2 ? 'T3' : 'T2', unit: g.unit });
    }));
    return tasks;
  }
  const ps = personaSpec.split(',').map((s) => s.trim().toUpperCase()).filter(Boolean);
  for (const p of ps) if (!PERSONAS[p]) usage(`walk: 모르는 페르소나 ${p}`);
  for (const g of groups) for (const id of g.lessons) for (const p of ps) tasks.push({ lesson: id, persona: p, unit: g.unit });
  return tasks;
}

// ---- 조작기: drivers/<교구>.mjs, 또는 다른 파일이 export const tools 로 맡은 교구 ----
const drivers = new Map(); // toolId → { mod } | { error }
async function loadDrivers() {
  const dir = join(here, 'drivers');
  if (!existsSync(dir)) return;
  // '_'로 시작하는 파일은 조작기끼리 쓰는 도움 모듈·자체 시험이다 — 불러오면 그 시험이 돌아 버린다
  for (const f of readdirSync(dir).filter((x) => x.endsWith('.mjs') && !x.startsWith('_')).sort()) {
    const id = f.slice(0, -4);
    try {
      const mod = await import(pathToFileURL(join(dir, f)).href);
      if (typeof mod.drive !== 'function') { drivers.set(id, { error: 'drive() 없음' }); continue; }
      drivers.set(id, { mod, file: f });
      for (const t of Array.isArray(mod.tools) ? mod.tools : []) if (!drivers.has(t) || drivers.get(t).error) drivers.set(t, { mod, file: f });
    } catch (e) { drivers.set(id, { error: `불러오기 실패: ${String(e.message).split('\n')[0]}` }); }
  }
}

// ---- 공통 도구 ----
class Timeout extends Error {}
function withTimeout(p, ms, label) {
  let t;
  const guard = new Promise((_, rej) => { t = setTimeout(() => rej(new Timeout(label)), ms); });
  p.catch(() => {}); // 시간 초과 뒤 뒤늦게 깨지는 작업이 처리 안 된 거부로 남지 않게
  return Promise.race([p, guard]).finally(() => clearTimeout(t));
}
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const isTimeout = (e) => e instanceof Timeout;

// 읽기 전용 조회
const posOf = (page) => page.evaluate(() => { const S = window.__pl; if (!S || !S.lesson) return 'none'; const st = S.lesson.stages[S.stage]; return st.id === 'main' ? `main:${S.stage}.${S.act}.${S.item}` : st.id; });
const stageId = (page) => page.evaluate(() => { const S = window.__pl; return S && S.lesson ? S.lesson.stages[S.stage].id : 'none'; });
const itemInfo = (page) => page.evaluate(() => {
  const S = window.__pl; const F = window.PaperLessons.flow;
  const st = S.lesson.stages[S.stage]; const a = st.activities[S.act];
  const it = F.itemAt(a.items[S.item], S.level); const s0 = F.itemStart(it, S.level);
  // 플레이어 renderActivity 와 같은 합치기: 활동 options → 활동 levels[단계] → 문항(단계) toolOptions → reveal 신호
  const options = Object.assign({}, a.options || {}, (a.levels || {})[S.level] || {}, s0.toolOptions, it.reveal === 'after-check' ? { revealAfterCheck: true } : {});
  return { key: `${a.id}.${S.item + 1}`, tool: a.tool, level: S.level, target: it.target ?? null, prompt: it.prompt || '', free: Boolean(it.free), talk: Boolean(it.talk), predict: it.predict ? it.predict.options.length : 0, options };
});
const readFb = (page) => page.evaluate(() => {
  const fb = document.querySelector('#fb'); const n = document.querySelector('#fb-note');
  return { fb: (fb?.innerText || '').trim(), ok: Boolean(fb?.classList.contains('is-ok')), no: Boolean(fb?.classList.contains('is-no')), note: n && !n.hidden ? n.innerText.trim() : '' };
});
const visible = (page, sel) => page.locator(sel).first().isVisible().catch(() => false);
const toolState = (page, root) => page.evaluate((r) => { const S = window.__pl; const t = r === '#tool' ? S.tool : S.exitTools && S.exitTools[Number(r.replace(/\D/g, ''))]; return t ? JSON.stringify(t.getState()) : null; }, root);

// ---- 한 작업(차시 × 페르소나) ----
async function runTask(browser, task) {
  const P = PERSONAS[task.persona];
  const out = { lesson: task.lesson, persona: task.persona, stage: 'none', items: [], flow: [], errors: [], problems: [] };
  const t0 = Date.now();
  const flow = (ev) => { out.flow.push(`${((Date.now() - t0) / 1000).toFixed(1)}s ${ev}`); };
  const seen = new Set();
  const lessonProblem = (kind, msg, dedupe = msg) => { if (seen.has(dedupe)) return; seen.add(dedupe); out.problems.push({ kind, msg }); };
  const ctx = await browser.newContext({ viewport: P.viewport, hasTouch: Boolean(P.hasTouch), isMobile: Boolean(P.isMobile), deviceScaleFactor: P.deviceScaleFactor || 1, locale: 'ko-KR' });
  // 읽어 주기 단추가 실제로 소리를 내려 했는지만 센다(차시·교구 상태와 무관한 계측)
  await ctx.addInitScript(() => {
    window.__speak = 0;
    const fake = { speak() { window.__speak++; }, cancel() {}, getVoices: () => [], speaking: false, pending: false };
    try {
      if ('speechSynthesis' in window) { const s = window.speechSynthesis; const orig = s.speak.bind(s); s.speak = (u) => { window.__speak++; try { orig(u); } catch (_) { /* 헤드리스 */ } }; } else Object.defineProperty(window, 'speechSynthesis', { value: fake });
      if (!('SpeechSynthesisUtterance' in window)) window.SpeechSynthesisUtterance = function (t) { this.text = t; };
    } catch (_) { /* 계측 실패는 무시 */ }
  });
  const page = await ctx.newPage();
  page.on('pageerror', (e) => out.errors.push(`pageerror: ${String(e.message).split('\n')[0]}`));
  // S10 이 일부러 끊은 동안의 '연결 끊김' 자원 오류는 결함이 아니다
  page.on('console', (m) => { if (m.type() === 'error' && !ignorableConsole(m) && !/ERR_INTERNET_DISCONNECTED/.test(m.text())) out.errors.push(`console: ${m.text().slice(0, 300)}`); });
  let cur = null; // 진행 중인 문항 기록(시간 초과를 그 문항에 붙인다)
  const body = (async () => {
    if (P.role === 'teacher' && task.persona === 'T1') return teacherBoard(page, task, P, out, flow, lessonProblem, (r) => { cur = r; });
    await studentWalk(page, task, P, out, flow, lessonProblem, (r) => { cur = r; });
    if (task.persona === 'T2' && out.stage === 'done') await teacherResults(ctx, task, out, flow, lessonProblem);
  })();
  try {
    await withTimeout(body, LESSON_MS, '차시 6분 넘김');
  } catch (e) {
    if (isTimeout(e) || e.itemTimeout) {
      const msg = e.itemTimeout ? `문항 60초 넘김(멈춤): ${e.message}` : '차시 6분 넘김(멈춤)';
      if (cur && e.itemTimeout) cur.problems.push({ kind: 'ui-error', msg }); else out.problems.push({ kind: 'ui-error', msg });
      flow(`멈춤 → 다음 차시 (${msg})`);
    } else {
      out.runnerError = String(e.stack || e.message).split('\n').slice(0, 3).join(' | ');
      flow(`실행기 오류: ${String(e.message).split('\n')[0]}`);
    }
  } finally {
    out.ms = Date.now() - t0;
    await ctx.close().catch(() => {});
  }
  return out;
}

// 페르소나 입력 방식대로 누르기. keyboard 는 Tab 으로 초점을 옮겨 Enter/Space.
function makePress(page, P, lessonProblem) {
  const tabTo = async (sel) => {
    const max = await page.evaluate(() => document.querySelectorAll('a[href],button,input,textarea,select,summary,[tabindex]').length * 2 + 10);
    for (let i = 0; i <= max; i++) {
      const hit = await page.evaluate((s) => { const a = document.activeElement; return Boolean(a && a !== document.body && a.matches(s)); }, sel);
      if (hit) return true;
      await page.keyboard.press('Tab');
    }
    return false;
  };
  return async function press(sel, label = sel, { key, target } = {}) {
    const loc = page.locator(sel).first();
    if (!(await loc.count())) return false;
    await loc.scrollIntoViewIfNeeded({ timeout: 3000 }).catch(() => {});
    if (touchy(P)) {
      // 눌리는 면: 라디오는 감싼 label
      const box = await page.evaluate((s) => { const e = document.querySelector(s); if (!e) return null; const t = e.matches('input[type=radio],input[type=checkbox]') ? (e.closest('label') || e) : e; const r = t.getBoundingClientRect(); return { w: Math.round(r.width), h: Math.round(r.height) }; }, sel);
      if (box && (box.w < 44 || box.h < 44)) lessonProblem('touch-target-small', `${label}: ${box.w}×${box.h}px`, `tts:${label}`);
    }
    if (P.input === 'keyboard') {
      if (await tabTo(target || sel)) { await page.keyboard.press(key || 'Enter'); return true; }
      lessonProblem('no-keyboard-path', `${label}: Tab 으로 초점이 가지 않음`, `kb:${label}`);
      await loc.focus().catch(() => {}); await page.keyboard.press(key || 'Enter'); return true;
    }
    const isRadio = await loc.evaluate((e) => e.matches('input[type=radio],input[type=checkbox]')).catch(() => false);
    const hit = isRadio ? page.locator(sel).first().locator('xpath=ancestor::label[1]') : loc;
    const h = (await hit.count()) ? hit : loc;
    if (touchy(P)) await h.tap({ timeout: 5000 }); else await h.click({ timeout: 5000 });
    return true;
  };
}

async function checkOverflow(page, where, lessonProblem) {
  const o = await page.evaluate(() => ({ sw: document.documentElement.scrollWidth, w: window.innerWidth })).catch(() => null);
  if (o && o.sw > o.w + 1) lessonProblem('ui-error', `가로 넘침(${where}): 문서 ${o.sw}px > 화면 ${o.w}px`, `ovf:${where}`);
}

// 교구를 한 번 움직이기(짝 활동·막혔을 때): 마우스·터치는 조작 가능한 것을 눌러 보고(카드는 '고르고 → 자리' 두 번),
// 키보드는 Tab 조각에 키를 누른다. seed 로 시작 위치를 돌려 연달아 부를 때 다른 상태가 되게 한다.
async function fumble(page, P, root, seed = 0) {
  const before = await toolState(page, root);
  const changed = async () => (await toolState(page, root)) !== before;
  if (P.input !== 'keyboard') {
    const all = page.locator(`${root} button:not([disabled]), ${root} [role="button"], ${root} [tabindex="0"], ${root} input:not([disabled]), ${root} [draggable="true"]`);
    const idx = [];
    for (let i = 0, n = Math.min(await all.count(), 16); i < n; i++) if (await all.nth(i).isVisible().catch(() => false)) idx.push(i);
    const order = idx.map((_, k) => idx[(k + seed) % idx.length]);
    // locator.click 은 겹친 칩(다른 요소가 눌림을 가로챔)에서 timeout 내내 재시도해 문항 60초를 넘긴다 —
    // 화면 좌표를 한 번 누르고 지나간다(사람이 대충 누르는 것과 같다)
    const hit = async (i) => {
      const e = all.nth(i);
      await e.scrollIntoViewIfNeeded({ timeout: 500 }).catch(() => {});
      const b = await e.boundingBox().catch(() => null);
      if (!b || b.width < 1 || b.height < 1) return;
      const x = b.x + b.width / 2; const y = b.y + b.height / 2;
      if (touchy(P)) await page.touchscreen.tap(x, y).catch(() => {}); else await page.mouse.click(x, y).catch(() => {});
      await sleep(60);
    };
    for (const i of order.slice(0, 10)) { await hit(i); if (await changed()) return true; }
    let budget = 30;
    for (const i of [...order].reverse()) {
      for (const j of order.slice(0, 6)) { if (j === i || budget-- <= 0) continue; await hit(i); await hit(j); if (await changed()) return true; }
      if (budget <= 0) break;
    }
  }
  if (root === '#tool') return nudge(page, page);
  const els = page.locator(`${root} [tabindex="0"]`); const n = Math.min(await els.count(), 6);
  for (let i = 0; i < n; i++) for (const k of ['Enter', 'ArrowRight', 'ArrowUp', ' ']) {
    await els.nth(i).focus().catch(() => {}); await els.nth(i).press(k).catch(() => {});
    if (await changed()) return true;
  }
  return false;
}

async function callDriver(page, P, persona, info, root, flow) {
  const d = drivers.get(info.tool);
  if (!d) return { missing: true, problems: [{ kind: 'driver-limit', msg: '조작기 없음' }] };
  if (d.error) return { missing: true, problems: [{ kind: 'driver-limit', msg: `조작기 ${info.tool}: ${d.error}` }] };
  let logs = 0;
  let res;
  // 조작기 예외는 조작기 결함이다 — 차시 흐름은 이어 간다
  try { res = await d.mod.drive({
    page, target: info.target, options: info.options, prompt: info.prompt, toolId: info.tool, root,
    persona: { id: persona, input: P.input, label: P.label },
    readState: () => page.evaluate((r) => { const S = window.__pl; const t = r === '#tool' ? S.tool : S.exitTools[Number(r.replace(/\D/g, ''))]; return t.getState(); }, root),
    log: (m) => { if (logs++ < 12) flow(`[${info.tool}] ${String(m).slice(0, 160)}`); },
  }); } catch (e) { return { reached: false, actions: null, problems: [{ kind: 'driver-limit', msg: `조작기 예외: ${String(e.message).split('\n')[0].slice(0, 200)}` }], file: d.file }; }
  const problems = Array.isArray(res?.problems) ? res.problems.filter((p) => p && p.kind) : [];
  return { reached: res ? Boolean(res.reached) : false, actions: res?.actions ?? null, problems, file: d.file };
}

// 확인을 누르고 화면 피드백을 읽는다
async function pressCheck(page, press) {
  await page.waitForFunction(() => { const b = document.querySelector('#check'); return b && b.getAttribute('aria-disabled') !== 'true'; }, null, { timeout: 2500 }).catch(() => {});
  const before = await readFb(page);
  if (!(await press('#check', '확인 단추'))) return null;
  await page.waitForFunction((b) => { const fb = document.querySelector('#fb'); const n = document.querySelector('#fb-note'); return (fb && (fb.innerText.trim() !== b.fb || fb.className.includes('is-ok'))) || (n && !n.hidden && n.innerText.trim() !== b.note) || !fb; }, before, { timeout: 2500 }).catch(() => {});
  const r = await readFb(page).catch(() => ({ fb: '', ok: false, no: false, note: '' }));
  return r;
}

async function waitMoved(page, from, ms = 3500) {
  const end = Date.now() + ms;
  while (Date.now() < end) { if ((await posOf(page).catch(() => from)) !== from) return true; await sleep(150); }
  return false;
}

async function setLevel(page, P, press, flow) {
  if (!P.level) return;
  const on = await page.getAttribute(`.pl-level__b[data-level="${P.level}"]`, 'aria-pressed').catch(() => null);
  if (on === 'true') return;
  if (on == null) return;
  await press(`.pl-level__b[data-level="${P.level}"]`, `난이도 ${P.level} 단추`);
  await page.waitForFunction((l) => window.__pl.level === l, P.level, { timeout: 3000 }).catch(() => {});
  flow(`난이도 → ${P.level}`);
}

async function readAloud(page, press, sel, label, lessonProblem) {
  if (!(await page.locator(sel).count())) { lessonProblem('control-missing', `${label}: 읽어 주기 단추가 없음`, `read:${label}`); return; }
  const n0 = await page.evaluate(() => window.__speak);
  await press(sel, label);
  await sleep(150);
  if ((await page.evaluate(() => window.__speak)) <= n0) lessonProblem('ui-error', `${label}: 읽어 주기를 눌러도 소리 내기를 부르지 않음`, `readx:${label}`);
}

// ---- 학생 흐름(T2·T3 도 학생 화면으로 진행) ----
async function studentWalk(page, task, P, out, flow, lessonProblem, setCur) {
  const press = makePress(page, P, lessonProblem);
  const cls = `pw${task.persona.toLowerCase()}${Date.now().toString(36).slice(-5)}`.slice(0, 12);
  const seat = 1 + Math.floor(Math.random() * 28);
  out.classCode = cls; out.seat = seat;
  await page.goto(`${hub}/edu-content-pool/lessons/player.html?lesson=${encodeURIComponent(task.lesson)}&role=student&class=${cls}&seat=${seat}&collect=1`, { waitUntil: 'domcontentloaded' });
  const opened = await page.waitForSelector('[data-next]', { timeout: 15000 }).then(() => true, () => false);
  if (!opened) { out.problems.push({ kind: 'ui-error', msg: `학생 화면이 열리지 않음: ${(await page.textContent('#app').catch(() => '') || '').trim().slice(0, 120)}` }); return; }
  out.stage = 'intro'; flow('도입');
  await checkOverflow(page, '도입', lessonProblem);
  await setLevel(page, P, press, flow);
  if (task.persona === 'T3') {
    for (const l of ['easy', 'base', 'challenge']) if (!(await page.locator(`.pl-level__b[data-level="${l}"]`).count())) lessonProblem('control-missing', `난이도 ${l} 단추가 없음`);
    if ((await page.getAttribute('.pl-level__b[data-level="easy"]', 'aria-pressed').catch(() => null)) !== 'true') lessonProblem('ui-error', '쉬움 단추를 눌러도 쉬움으로 바뀌지 않음');
  }
  if (P.read) await readAloud(page, press, '.pl-say .pl-read', '도입 글 읽어 주기', lessonProblem);
  await press('[data-next]', '활동 시작 단추');
  await page.waitForFunction(() => window.__pl.lesson.stages[window.__pl.stage].id !== 'intro', null, { timeout: 5000 }).catch(() => {});

  let guard = 0; let lastPos = ''; let samePos = 0;
  while (guard++ < 80) {
    const pos = await posOf(page);
    if (!pos.startsWith('main')) break;
    if (pos === lastPos) { if (++samePos >= 3) { lessonProblem('driver-limit', `${pos}: 같은 문항에서 더 나아가지 못해 차시를 멈춤`); return; } } else { samePos = 0; lastPos = pos; }
    out.stage = 'main';
    await setLevel(page, P, press, flow);
    const info = await itemInfo(page);
    const rec = { key: info.key, tool: info.tool, level: info.level, reached: null, checked: null, feedback: '', problems: [] };
    if (info.free) rec.free = true;
    if (!out.items.some((x) => x.key === rec.key)) out.items.push(rec); else { const old = out.items.find((x) => x.key === rec.key); Object.assign(old, rec); }
    const r = out.items.find((x) => x.key === rec.key);
    setCur(r);
    try {
      await withTimeout(walkItem(page, P, task, info, r, press, flow, lessonProblem), ITEM_MS, info.key);
    } catch (e) {
      if (isTimeout(e)) { const err = new Error(info.key); err.itemTimeout = true; throw err; }
      throw e;
    }
    if (r.stuck) return;
  }
  if ((await stageId(page)) !== 'wrapup') { lessonProblem('driver-limit', '전개를 끝내지 못함(문항 반복 한도)'); return; }
  out.stage = 'wrapup'; flow('정리');
  await walkExit(page, task, P, out, press, flow, lessonProblem, setCur);
}

async function walkItem(page, P, task, info, r, press, flow, lessonProblem) {
  const from = await posOf(page);
  await checkOverflow(page, `전개 ${info.key}`, lessonProblem);
  if (!(await page.locator('#tool *').count())) r.problems.push({ kind: 'control-missing', msg: '교구가 화면에 그려지지 않음' });
  if (info.predict) { await press('[data-predict="0"]', '예상 보기'); flow(`${info.key} 예상 고름`); }
  if (P.read) await readAloud(page, press, '#prompt .pl-read', '문항 읽어 주기', lessonProblem);

  // 짝 활동·말하기: 정답 없음
  if (info.free) {
    if (!info.talk && !(await fumble(page, P, '#tool'))) r.problems.push({ kind: 'driver-limit', msg: '짝 활동 교구를 움직이지 못함(키보드·클릭)' });
    const fb = await pressCheck(page, press);
    r.feedback = fb ? (fb.fb || fb.note) : '';
    if ((await visible(page, '#next-item'))) await press('#next-item', '다음 문제 단추');
    const moved = await waitMoved(page, from);
    r.checked = moved;
    flow(`${info.key} 다 했어요 → ${moved ? '넘어감' : '안 넘어감'}`);
    if (!moved) r.problems.push({ kind: 'driver-limit', msg: `'다 했어요' 뒤 넘어가지 않음: ${r.feedback.slice(0, 80)}` });
    return;
  }

  const hasHint = await page.locator('#hint').count();
  if (task.persona === 'T3' && !hasHint) r.problems.push({ kind: 'control-missing', msg: '힌트 단추가 없음' });
  const hints = [];
  const askHint = async () => {
    if (!hasHint || hints.length >= (P.hints || 1)) return;
    const n0 = await page.locator('#fb .pl-hint').count();
    await press('#hint', '힌트 단추');
    await sleep(150);
    const t = await page.locator('#fb .pl-hint').last().innerText().catch(() => '');
    hints.push(t.trim().slice(0, 120));
    if (task.persona === 'T3' && (await page.locator('#fb .pl-hint').count()) <= n0 && !t) r.problems.push({ kind: 'ui-error', msg: '힌트를 눌러도 힌트 글이 나오지 않음' });
  };
  if (P.hintFirst) await askHint();
  if (P.rush) {
    // 서두르는 학생: 교구를 보지 않고 먼저 확인부터 누른다
    const fb = await pressCheck(page, press);
    if (fb?.ok) { r.checked = true; r.feedback = fb.fb; flow(`${info.key} 시작 상태 그대로 맞음`); r.problems.push({ kind: 'unreachable', msg: '시작 상태가 이미 정답으로 처리됨(조작 없이 맞음)' }); return afterCorrect(page, from, r, press, flow); }
    flow(`${info.key} 서둘러 확인 → ${fb ? (fb.no ? '틀림' : '안내') : '단추 없음'}`);
  }

  const tries = P.tries || 2;
  let driven = null; let last = null;
  for (let k = 0; k < tries; k++) {
    driven = await callDriver(page, P, task.persona, info, '#tool', flow);
    if (driven.missing) break;
    r.reached = driven.reached; r.actions = (r.actions || 0) + (driven.actions || 0);
    for (const p of driven.problems) if (!r.problems.some((q) => q.kind === p.kind && q.msg === p.msg)) r.problems.push(p);
    last = await pressCheck(page, press);
    if (!last) { r.problems.push({ kind: 'control-missing', msg: '확인 단추가 없음' }); break; }
    r.feedback = last.fb || last.note; r.checked = last.ok;
    flow(`${info.key} 조작(${driven.actions ?? '?'}회, reached=${driven.reached}) → 확인 ${last.ok ? '맞음' : last.no ? '틀림' : `안내: ${last.note.slice(0, 40)}`}`);
    if (last.ok) { if (hints.length) r.hints = hints; return afterCorrect(page, from, r, press, flow); }
    if (await visible(page, '#next-item')) break; // 시도를 다 써서 닫힘
    await askHint();
  }
  if (hints.length) r.hints = hints;
  if (driven?.missing) {
    for (const p of driven.problems) r.problems.push(p);
    flow(`${info.key} ${driven.problems[0].msg}`);
  }
  await moveOn(page, P, info, r, from, press, flow, Boolean(driven?.missing));
}

async function afterCorrect(page, from, r, press, flow) {
  if (await page.locator('#next-item').first().waitFor({ state: 'visible', timeout: 1500 }).then(() => true, () => false)) await press('#next-item', '다음 문제 단추');
  if (!(await waitMoved(page, from))) r.problems.push({ kind: 'ui-error', msg: '맞힌 뒤 다음 문항으로 넘어가지 않음' });
}

// 못 푼 문항에서 넘어가기: 화면에 정상 단추(다음 문제·넘기기)가 있는지 먼저 보고, 없으면 학생처럼 교구를 조금씩 바꿔
// 확인을 눌러 플레이어가 내주는 '다음 문제로' 단추까지 간다(이 확인은 판정 기록 checked 에 넣지 않는다)
async function moveOn(page, P, info, r, from, press, flow, noDriver) {
  await sleep(1300); // 틀린 직후 잠김
  const ways = async () => ((await visible(page, '#next-item')) ? '#next-item' : (await visible(page, '#giveup')) ? '#giveup' : null);
  let way = await ways();
  if (!way && noDriver) flow(`${info.key} 확인 없이 넘어갈 단추 없음(플레이어가 막음)`);
  let n = 0;
  while (!way && n < 7) {
    n++;
    const movedTool = await fumble(page, P, '#tool', n);
    const fb = await pressCheck(page, press);
    if (fb?.ok) { r.fumbleOk = true; flow(`${info.key} 더듬다 맞음`); return afterCorrect(page, from, r, press, flow); }
    if (!movedTool && fb && !fb.no) break; // 움직일 수도 없고 시도로도 안 세짐
    way = await ways();
  }
  r.fumble = n;
  if (!way) { r.stuck = true; r.problems.push({ kind: 'driver-limit', msg: `다음 문항으로 넘어갈 길을 찾지 못함(더듬기 ${n}번)` }); flow(`${info.key} 막힘 → 차시 멈춤`); return; }
  r.gaveUp = way === '#giveup'; r.closed = way === '#next-item';
  await press(way, way === '#giveup' ? '다음 문제로(넘기기) 단추' : '다음 문제 단추');
  flow(`${info.key} ${r.gaveUp ? '넘김' : '닫힘'} → 다음`);
  if (!(await waitMoved(page, from))) { r.stuck = true; r.problems.push({ kind: 'ui-error', msg: '넘기기 단추를 눌러도 넘어가지 않음' }); }
}

// ---- 정리: 출구 질문 → 제출 → 완료 화면 ----
async function walkExit(page, task, P, out, press, flow, lessonProblem, setCur) {
  await page.waitForSelector('#exit', { timeout: 5000 }).catch(() => {});
  await checkOverflow(page, '정리', lessonProblem);
  const qs = await page.evaluate(() => { const S = window.__pl; const F = window.PaperLessons.flow; return S.lesson.stages[S.stage].exitTicket.map((q0) => { const q = F.itemAt(q0, S.level); const s0 = F.itemStart(q, S.level); return { type: q.type, n: (q.options || []).length, answer: q.answer ?? null, tool: q.tool || null, target: q.target ?? null, prompt: q.prompt || '', options: Object.assign({}, q.options && !Array.isArray(q.options) ? q.options : {}, s0.toolOptions) }; }); });
  for (let i = 0; i < qs.length; i++) {
    const q = qs[i];
    if (q.type === 'choice') {
      const v = q.answer ?? 0;
      if (P.input === 'keyboard') {
        await press(`input[name="q${i}"][value="0"]`, `출구 ${i + 1} 보기`, { key: 'Space', target: `input[name="q${i}"]` });
        for (let k = 0; k < q.n && (await page.evaluate((x) => document.querySelector(`input[name="q${x.i}"]:checked`)?.value, { i })) !== String(v); k++) await page.keyboard.press('ArrowDown');
      } else await press(`input[name="q${i}"][value="${v}"]`, `출구 ${i + 1} 보기`);
    } else if (q.type === 'short') {
      await press(`textarea[name="q${i}"]`, `출구 ${i + 1} 쓰기 칸`, { key: 'Home' });
      await page.keyboard.type('힘을 주면 물체가 움직여요');
    } else if (q.type === 'tool') {
      const root = `#exit-tool-${i}`;
      const rec = { key: `exit.${i + 1}`, tool: q.tool, level: await page.evaluate(() => window.__pl.level), reached: null, checked: null, feedback: '', problems: [] };
      out.items.push(rec); setCur(rec);
      try {
        await withTimeout((async () => {
          const d = await callDriver(page, P, task.persona, { ...q, key: rec.key }, root, flow);
          for (const p of d.problems) rec.problems.push(p);
          if (d.missing) { if (!(await fumble(page, P, root))) rec.problems.push({ kind: 'driver-limit', msg: '출구 교구를 움직이지 못함' }); flow(`${rec.key} ${d.problems[0].msg}`); } else { rec.reached = d.reached; rec.actions = d.actions; flow(`${rec.key} 조작(${d.actions ?? '?'}회, reached=${d.reached})`); }
        })(), ITEM_MS, rec.key);
      } catch (e) { if (isTimeout(e)) { const err = new Error(rec.key); err.itemTimeout = true; throw err; } throw e; }
    } else {
      const v = P.mood || 'good';
      if (P.input === 'keyboard') {
        await press(`input[name="q${i}"][value="good"]`, `출구 ${i + 1} 느낌`, { key: 'Space', target: `input[name="q${i}"]` });
        for (let k = 0; k < 3 && (await page.evaluate((x) => document.querySelector(`input[name="q${x}"]:checked`)?.value, i)) !== v; k++) await page.keyboard.press('ArrowDown');
      } else await press(`input[name="q${i}"][value="${v}"]`, `출구 ${i + 1} 느낌`);
    }
  }
  if (P.offline) { await page.context().setOffline(true); flow('오프라인으로 끊김'); }
  let done = false;
  for (let k = 0; k < 3 && !done; k++) {
    if (!(await press('#exit button[type="submit"]', '제출하기 단추'))) { out.problems.push({ kind: 'control-missing', msg: '제출하기 단추가 없음' }); return; }
    // 완료 화면 또는 제출 막힘 안내 중 먼저 나오는 것
    await page.waitForFunction(() => document.querySelector('#done .pl-done') || (document.querySelector('#exit-warn') && !document.querySelector('#exit-warn').hidden), null, { timeout: 10000 }).catch(() => {});
    done = await page.locator('#done .pl-done').count() > 0;
    if (!done) {
      const warn = await page.locator('#exit-warn').innerText().catch(() => '');
      flow(`제출 막힘: ${warn.trim().slice(0, 80)}`);
      if (/아직 고르지 않았/.test(warn)) { out.problems.push({ kind: 'driver-limit', msg: `출구 보기를 고르지 못함: ${warn.trim()}` }); return; }
    }
  }
  if (!done) { out.problems.push({ kind: 'ui-error', msg: '제출해도 완료 화면이 나오지 않음' }); return; }
  const head = (await page.locator('#done-head').innerText().catch(() => '')).trim();
  out.submitted = head;
  // 제출 뒤 출구 교구 문항의 화면 판정(다시 보기 줄)
  for (const rec of out.items.filter((x) => x.key.startsWith('exit.'))) {
    const i = Number(rec.key.split('.')[1]) - 1;
    const rv = await page.evaluate((x) => { const e = document.querySelector(`#review-${x} p`); return e ? { ok: e.classList.contains('pl-ok'), t: e.innerText.trim() } : null; }, i);
    if (rv) { rec.checked = rv.ok; rec.feedback = rv.t.slice(0, 200); }
  }
  out.stage = 'done'; flow(`제출 → ${head}`);
  if (P.offline) {
    const short = await visible(page, '.pl-short__code');
    if (!short) out.problems.push({ kind: 'control-missing', msg: '오프라인 제출 뒤 제출 코드가 보이지 않음' });
    await page.context().setOffline(false); flow('다시 연결');
    await page.reload({ waitUntil: 'domcontentloaded' });
    const toast = await page.waitForSelector('.pl-toast', { timeout: 6000 }).then((e) => e.innerText(), () => '');
    const n = await countResults(task.lesson, out.classCode);
    flow(`다시 열기 → ${toast ? `알림: ${toast.trim().slice(0, 60)}` : '알림 없음'} · 허브 결과 ${n ?? '?'}건`);
    if (n === 0) out.problems.push({ kind: 'ui-error', msg: '다시 연결해 화면을 열어도 못 보낸 결과가 허브에 가지 않음' });
  }
}

async function countResults(lesson, cls) {
  try { const r = await fetch(`${hub}/api/results?lesson=${encodeURIComponent(lesson)}&class=${encodeURIComponent(cls)}`); if (!r.ok) return null; const j = await r.json(); return Array.isArray(j) ? j.length : null; } catch (_) { return null; }
}

// ---- T2: 학생이 낸 뒤 교사 결과 화면에 보이는가 ----
async function teacherResults(ctx, task, out, flow, lessonProblem) {
  const page = await ctx.newPage();
  page.on('pageerror', (e) => out.errors.push(`teacher pageerror: ${String(e.message).split('\n')[0]}`));
  page.on('console', (m) => { if (m.type() === 'error' && !ignorableConsole(m)) out.errors.push(`teacher console: ${m.text().slice(0, 300)}`); });
  await page.goto(`${hub}/edu-content-pool/lessons/teacher.html?class=${out.classCode}`, { waitUntil: 'domcontentloaded' });
  await page.waitForSelector('#class', { timeout: 10000 });
  const pre = await page.inputValue('#class');
  if (pre !== out.classCode) flow(`결과 화면: 주소의 class 가 반 코드 칸에 채워지지 않음 → 직접 입력`);
  await page.fill('#class', ''); await page.click('#class'); await page.keyboard.type(out.classCode);
  const btn = page.locator(`[data-lesson="${task.lesson}"]`).first();
  if (!(await btn.count())) { lessonProblem('control-missing', '교사 화면 차시 목록에 이 차시가 없음'); await page.close(); return; }
  await btn.click();
  const seen = await page.waitForFunction((seat) => { const s = document.querySelector('#summary'); if (!s) return false; const first = s.querySelector('.t-stat b'); return first && /^[1-9]/.test(first.textContent) && [...s.querySelectorAll('tr td:first-child')].some((td) => td.textContent.trim().startsWith(String(seat))); }, out.seat, { timeout: 12000 }).then(() => true, () => false);
  const stat = (await page.locator('#summary .t-stats').innerText().catch(() => '')).replace(/\s+/g, ' ').trim();
  flow(`교사 결과 화면 → ${seen ? '제출 보임' : '제출 안 보임'} (${stat.slice(0, 120)})`);
  if (!seen) lessonProblem('control-missing', '학생이 제출했는데 교사 결과 화면에 그 번호가 보이지 않음');
  await page.close();
}

// ---- T1: 전자칠판 교사 화면 — 시연 단추·단계 넘기기 ----
async function teacherBoard(page, task, P, out, flow, lessonProblem, setCur) {
  const press = makePress(page, P, lessonProblem);
  await page.goto(`${hub}/edu-content-pool/lessons/player.html?lesson=${encodeURIComponent(task.lesson)}&role=teacher`, { waitUntil: 'domcontentloaded' });
  if (!(await page.waitForSelector('[data-next]', { timeout: 15000 }).then(() => true, () => false))) { out.problems.push({ kind: 'ui-error', msg: '교사 화면이 열리지 않음' }); return; }
  out.stage = 'intro'; flow('도입(교사)');
  await checkOverflow(page, '교사 도입', lessonProblem);
  if (await page.locator('#demo-play').count()) {
    // innerHTML 만 보면 입력칸의 값(value 속성이 아니라 속성값)·체크 상태 변화를 못 본다 — 그것도 함께 찍는다.
    // 시연 교구는 window.__pl 에 드러나지 않으므로(getState 를 못 읽음) 화면의 입력 상태로 대신한다.
    const snap = () => page.evaluate(() => {
      const d = document.querySelector('#demo'); if (!d) return '';
      const vals = [...d.querySelectorAll('input,textarea,select,output')].map((e) => `${e.value ?? ''}|${e.checked ? 1 : 0}`).join(';');
      const text = (d.innerText || '').replace(/\s+/g, ' ');
      return `${d.innerHTML}\u0000${vals}\u0000${text}`;
    });
    const a = await snap();
    await press('#demo-play', '시연 단추');
    let moved = false;
    for (let k = 0; k < 12 && !moved; k++) { await sleep(400); moved = (await snap()) !== a; }
    flow(`시연 → ${moved ? '교구가 움직임' : '변화 없음'}`);
    if (!moved) lessonProblem('ui-error', '시연 단추를 눌러도 시연 교구가 움직이지 않음');
  } else flow((await page.locator('#demo').count()) ? '시연 교구는 있으나 시연 단추 없음' : '시연 없음');
  await press('[data-next]', '활동 시작 단추');
  await page.waitForFunction(() => window.__pl.lesson.stages[window.__pl.stage].id !== 'intro', null, { timeout: 5000 }).catch(() => {});
  let guard = 0;
  while (guard++ < 80) {
    const pos = await posOf(page);
    if (!pos.startsWith('main')) break;
    out.stage = 'main';
    const info = await itemInfo(page);
    const rec = { key: info.key, tool: info.tool, level: info.level, reached: null, checked: null, feedback: '', problems: [] };
    out.items.push(rec); setCur(rec);
    await checkOverflow(page, `교사 전개 ${info.key}`, lessonProblem);
    if (!(await page.locator('#tool *').count())) rec.problems.push({ kind: 'control-missing', msg: '교사 화면에 교구가 그려지지 않음' });
    if (!(await page.locator('[data-skip]').count())) { rec.problems.push({ kind: 'control-missing', msg: "교사 화면에 '다음 문항' 단추가 없음" }); return; }
    await press('[data-skip]', '다음 문항 단추');
    if (!(await waitMoved(page, pos, 3000))) { rec.problems.push({ kind: 'ui-error', msg: "'다음 문항'을 눌러도 넘어가지 않음" }); return; }
  }
  if ((await stageId(page)) !== 'wrapup') return;
  out.stage = 'wrapup'; flow('정리(교사)');
  await checkOverflow(page, '교사 정리', lessonProblem);
  const exit = await page.evaluate(() => { const st = window.__pl.lesson.stages[window.__pl.stage]; return st.exitTicket.map((q, i) => ({ i, type: q.type, mounted: q.type !== 'tool' || Boolean(document.querySelector(`#exit-tool-${i} *`)) })); });
  for (const q of exit) if (!q.mounted) out.problems.push({ kind: 'control-missing', msg: `교사 화면 출구 ${q.i + 1} 교구가 그려지지 않음` });
  out.stage = 'done'; flow(`출구 질문 ${exit.length}개 확인`);
}

// ---- 실행 ----
async function main() {
  const groups = await resolveGroups(lessonsArg);
  let tasks = buildTasks(groups, personaArg === 'auto' ? 'auto' : personaArg);
  let shardTag = '';
  if (shardArg) {
    const m = /^(\d+)\/(\d+)$/.exec(shardArg); if (!m) usage('walk: --shard 는 i/n');
    const n = Number(m[2]); let i = Number(m[1]); if (i >= 1) i -= 1; if (!(n >= 1 && i < n)) usage('walk: --shard 범위');
    tasks = tasks.filter((_, k) => k % n === i); shardTag = `-${i + 1}-${n}`;
  }
  const outPath = arg('--out', null) || join(here, 'out', `walk-${new Date().toISOString().replace(/[-:]/g, '').replace(/\..*/, '').replace('T', '-')}${shardTag}.jsonl`);
  mkdirSync(dirname(outPath), { recursive: true });
  try { const r = await fetch(`${hub}/edu-content-pool/lessons/player.html`); if (!r.ok) throw new Error(`HTTP ${r.status}`); } catch (e) { console.error(`walk: 허브(${hub})에 닿지 못함: ${e.message}`); process.exit(1); }
  await loadDrivers();
  const chrome = findChrome();
  const browser = await chromium.launch({ executablePath: chrome, headless: true });
  const lessonsSeen = new Set();
  const sum = { tasks: 0, items: 0, drivenItems: 0, reached: 0, checkedItems: 0, checkedOk: 0, kinds: {}, errors: 0, runnerErrors: 0, done: 0 };
  try {
    for (const task of tasks) {
      const line = await runTask(browser, task).catch((e) => ({ lesson: task.lesson, persona: task.persona, stage: 'none', items: [], flow: [], errors: [], problems: [], runnerError: String(e.message) }));
      appendFileSync(outPath, `${JSON.stringify(line)}\n`);
      lessonsSeen.add(task.lesson); sum.tasks++;
      if (line.stage === 'done') sum.done++;
      if (line.runnerError) { sum.runnerErrors++; console.error(`walk: ${task.lesson} ${task.persona} 실행기 오류: ${line.runnerError}`); }
      sum.errors += line.errors.length;
      for (const it of line.items) {
        sum.items++;
        if (it.reached != null) { sum.drivenItems++; if (it.reached) sum.reached++; }
        if (!it.free && it.checked != null) { sum.checkedItems++; if (it.checked) sum.checkedOk++; }
        for (const p of it.problems) sum.kinds[p.kind] = (sum.kinds[p.kind] || 0) + 1;
      }
      for (const p of line.problems) sum.kinds[p.kind] = (sum.kinds[p.kind] || 0) + 1;
    }
  } finally { await browser.close().catch(() => {}); }
  const pct = (a, b) => (b ? `${Math.round((a / b) * 100)}%` : '-');
  const kinds = Object.entries(sum.kinds).sort().map(([k, v]) => `${k}=${v}`).join(',') || '없음';
  console.log(`walk: 차시 ${lessonsSeen.size} · 작업 ${sum.tasks}(완료 ${sum.done}) · 문항 ${sum.items} · reached ${sum.reached}/${sum.drivenItems} (${pct(sum.reached, sum.drivenItems)}) · checked ${sum.checkedOk}/${sum.checkedItems} (${pct(sum.checkedOk, sum.checkedItems)}) · problems ${kinds} · 콘솔오류 ${sum.errors} · 실행기오류 ${sum.runnerErrors} · ${outPath}`);
  process.exit(sum.runnerErrors ? 1 : 0);
}

main().catch((e) => { console.error(`walk: ${e.stack || e.message}`); process.exit(1); });
