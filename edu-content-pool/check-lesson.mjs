#!/usr/bin/env node
// 차시 자동 검사 — 정적 계약 + 실브라우저로 40분 흐름을 끝까지 풀고 제출까지 한다.
// 사용: node edu-content-pool/check-lesson.mjs <lessonId> [--hub http://localhost:8790] [--shots <dir>] [--rebuild]
//   --rebuild: dist/<id>/ 번들이 원본보다 오래되었으면 build-bundles.mjs로 다시 묶는다(없으면 알림만)
// classroom-hub.mjs가 떠 있어야 한다. 종료 코드 1 = 실패 항목 있음.
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';
import { chromium } from 'playwright-core';
import { bundleStale } from './build-bundles.mjs';

const here = dirname(fileURLToPath(import.meta.url));
const id = process.argv[2];
const arg = (k, d) => { const i = process.argv.indexOf(k); return i > 0 ? process.argv[i + 1] : d; };
const hub = arg('--hub', 'http://localhost:8790');
const shots = arg('--shots', null);
if (!id) { console.error('usage: check-lesson.mjs <lessonId>'); process.exit(2); }

// 짝 활동(free) 문항은 교구를 움직여야 끝난다 — 조작 가능한 조각에 실제 키를 눌러 상태를 바꾼다
async function nudge(F, E) {
  const before = await E.evaluate(() => JSON.stringify(window.__pl.tool.getState()));
  const els = F.locator('#tool [tabindex="0"]'); const n = await els.count();
  for (let i = 0; i < Math.min(n, 6); i++) {
    for (const k of ['Enter', 'ArrowRight', 'ArrowUp', ' ']) {
      await els.nth(i).focus().catch(() => {}); await els.nth(i).press(k).catch(() => {});
      if (await E.evaluate((b) => JSON.stringify(window.__pl.tool.getState()) !== b, before)) return true;
    }
  }
  return false;
}
const fails = []; const notes = [];
const fail = (m) => fails.push(m);

// ---- 1) 정적 계약 ----
// 예상 → 관찰 → 정리: items[n].predict = { q, options[, answer] }, items[n].conclude = '한 문장', items[n].reveal = 'after-check'
function itemShape(it) {
  const out = [];
  if (it.predict != null) {
    const p = it.predict;
    if (typeof p !== 'object' || Array.isArray(p)) out.push('predict는 { q, options } 객체여야 함');
    else {
      if (typeof p.q !== 'string' || !p.q.trim()) out.push('predict.q(예상 질문)가 비어 있음');
      if (!Array.isArray(p.options) || p.options.length < 2 || p.options.length > 5 || !p.options.every((o) => typeof o === 'string' && o.trim())) out.push('predict.options는 글자 보기 2~5개여야 함');
      else if (new Set(p.options.map((o) => o.trim())).size !== p.options.length) out.push('predict.options에 같은 보기가 있음');
      if (p.answer != null && !(Number.isInteger(p.answer) && p.answer >= 0 && p.answer < (p.options || []).length)) out.push('predict.answer는 options 안의 번호(0부터)여야 함');
      const extra = Object.keys(p).filter((k) => !['q', 'options', 'answer'].includes(k));
      if (extra.length) out.push(`predict에 모르는 칸: ${extra.join(', ')}`);
    }
  }
  if (it.conclude != null && (typeof it.conclude !== 'string' || !it.conclude.trim() || it.conclude.length > 120)) out.push('conclude는 120자 이하 한 문장이어야 함');
  if (it.reveal != null && it.reveal !== 'after-check') out.push(`reveal은 'after-check'만 쓸 수 있음: ${it.reveal}`);
  // 문항별 단계 시작: levels = { easy?|base?|challenge?: { state?, toolOptions? } }
  if (it.levels != null) {
    if (typeof it.levels !== 'object' || Array.isArray(it.levels)) out.push('levels는 { easy?, base?, challenge? } 객체여야 함');
    else for (const [k, v] of Object.entries(it.levels)) {
      if (!['easy', 'base', 'challenge'].includes(k)) { out.push(`levels에 모르는 단계: ${k}`); continue; }
      if (!v || typeof v !== 'object' || Array.isArray(v)) { out.push(`levels.${k}는 { state?, toolOptions? } 객체여야 함`); continue; }
      const extra = Object.keys(v).filter((x) => !['state', 'toolOptions'].includes(x));
      if (extra.length) out.push(`levels.${k}에 모르는 칸: ${extra.join(', ')}`);
      if (!('state' in v) && !('toolOptions' in v)) out.push(`levels.${k}가 비어 있음(state나 toolOptions가 있어야 함)`);
      if (v.state != null && (typeof v.state !== 'object' || Array.isArray(v.state))) out.push(`levels.${k}.state는 교구 상태 객체여야 함`);
      if (v.toolOptions != null && (typeof v.toolOptions !== 'object' || Array.isArray(v.toolOptions))) out.push(`levels.${k}.toolOptions는 객체여야 함`);
    }
  }
  return out;
}
// 활동지 표: cells = 미리 채운 칸의 2차원 배열(''는 빈칸), 줄마다 columns 수와 같아야 한다
function worksheetShape(it) {
  const out = [];
  if (it.type === 'table' && it.cells != null) {
    if (!Array.isArray(it.cells) || !it.cells.length) out.push('table.cells는 줄 배열이어야 함');
    else it.cells.forEach((row, r) => {
      if (!Array.isArray(row) || !row.every((c) => typeof c === 'string')) out.push(`table.cells[${r}]는 글자 배열이어야 함('' = 빈칸)`);
      else if (row.length !== (it.columns || []).length) out.push(`table.cells[${r}] 칸 ${row.length}개 ≠ columns ${(it.columns || []).length}개`);
    });
    if (it.rows != null && Array.isArray(it.cells) && it.rows !== it.cells.length) out.push(`table.rows ${it.rows} ≠ cells 줄 ${it.cells.length} — 하나만 쓰세요`);
  }
  return out;
}
// 성취기준: 과목 머리글자가 차시 과목과 같아야 하고, 단원 목록(units-map)에 같은 과목 코드가 있으면 그 안에 있어야 한다
const SUBJECT_MARK = { 국어: ['국'], 수학: ['수'], 과학: ['과'], 사회: ['사'], 통합교과: ['바', '슬', '즐'], 도덕: ['도'] };
function standardsCheck(l) {
  const out = []; const codes = l.standards || [];
  const marks = SUBJECT_MARK[l.subject];
  const markOf = (c) => (/^\[\d([가-힣])\d{2}-\d{2}\]$/.exec(c) || [])[1];
  if (!codes.length) out.push({ fail: true, text: 'standards 없음' });
  for (const c of codes) {
    const m = markOf(c);
    if (!m) out.push({ fail: true, text: `성취기준 형식이 아님: ${c} (예: [4수01-09])` });
    else if (marks && !marks.includes(m)) out.push({ fail: true, text: `성취기준 ${c}가 ${l.subject} 과목 코드(${marks.join('·')})가 아님` });
  }
  if (!marks) out.push({ fail: false, text: `과목 ${l.subject}의 성취기준 머리글자 규칙 없음 — 확인하지 않음` });
  let map = null;
  try { map = JSON.parse(readFileSync(join(here, 'units-map.json'), 'utf8')); } catch (_) { out.push({ fail: false, text: 'units-map.json을 읽지 못해 단원 대조를 건너뜀' }); return out; }
  const u = /^g(\d)-(.+)-(\d학기)-(\d+)$/.exec(l.catalog?.unit || '');
  const unit = u && (map.grades?.[u[1]]?.[u[2]]?.[u[3]] || []).find((x) => String(x.no) === u[4]);
  if (!unit) { out.push({ fail: false, text: `units-map에 단원 ${l.catalog?.unit} 없음 — 성취기준 단원 대조를 건너뜀` }); return out; }
  const same = (unit.standards || []).filter((c) => marks && marks.includes(markOf(c)));
  if (!same.length) { out.push({ fail: false, text: `units-map 단원 ${l.catalog.unit}에 ${l.subject} 성취기준이 아직 없음 — 대조를 건너뜀` }); return out; }
  for (const c of codes) if (markOf(c) && marks.includes(markOf(c)) && !unit.standards.includes(c)) out.push({ fail: true, text: `성취기준 ${c}가 단원 ${l.catalog.unit}(${unit.title}) 목록(${same.join(' ')})에 없음` });
  return out;
}

const PROMPT_HEAD = 'Layered paper-cut illustration of ';
const PROMPT_TAIL = ', with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.';
let lesson;
{
  const ctx = { PaperLessons: { register(l) { lesson = l; } } };
  vm.runInNewContext(readFileSync(join(here, 'lessons/data', `${id}.js`), 'utf8'), ctx);
  if (!lesson || lesson.id !== id) fail('register된 id가 파일 이름과 다름');
  const st = lesson.stages || [];
  if (st.map((s) => s.id).join() !== 'intro,main,wrapup') fail(`stages 순서가 intro,main,wrapup이 아님: ${st.map((s) => s.id)}`);
  const sum = st.reduce((a, s) => a + s.minutes, 0);
  if (sum !== 40) fail(`단계 분 합계 ${sum} ≠ 40`);
  const main = st.find((s) => s.id === 'main');
  const actSum = (main?.activities || []).reduce((a, x) => a + x.minutes, 0);
  if (main && actSum !== main.minutes) fail(`전개 활동 분 합계 ${actSum} ≠ 전개 ${main.minutes}`);
  for (const a of main?.activities || []) {
    if (!a.levels || !a.levels.easy || !a.levels.base || !a.levels.challenge) fail(`${a.id}: levels easy/base/challenge 필요`);
    if (!a.items?.length) fail(`${a.id}: items 없음`);
    for (const it of a.items || []) if (!it.free && !it.target) fail(`${a.id}: target 없는 문항 "${it.prompt}"`);
    (a.items || []).forEach((it, i) => { for (const m of itemShape(it)) fail(`${a.id}.${i + 1}: ${m}`); });
  }
  // 출구 질문이 전개 문항을 그대로 다시 내면 '배운 것을 옮겨 쓰는지'를 재지 못한다
  const norm = (t) => String(t || '').replace(/\s+/g, ' ').trim();
  const mainKeys = new Map((main?.activities || []).flatMap((a) => a.items.map((it, i) => [`${norm(it.prompt)}|${JSON.stringify(it.target ?? null)}`, `${a.id}.${i + 1}`])));
  (st.find((s) => s.id === 'wrapup')?.exitTicket || []).forEach((q, i) => {
    const same = mainKeys.get(`${norm(q.prompt)}|${JSON.stringify(q.target ?? null)}`);
    if (same) fail(`exit.${i + 1}: 전개 ${same}와 문항·정답이 똑같음 — 숫자나 상황을 바꿔 내야 함`);
  });
  for (const m of standardsCheck(lesson)) (m.fail ? fail : (x) => notes.push(x))(m.text);
  const p = lesson.illustration?.prompt || '';
  if (!p.startsWith(PROMPT_HEAD) || !p.endsWith(PROMPT_TAIL)) fail('illustration.prompt가 지정 문장 틀과 다름');
  // 생성 그림은 선택이다. 적었으면 파일이 있어야 하고, 크롬북·허브에서 가볍게 열리도록 400KB 이하
  const img = lesson.illustration?.image;
  if (img != null) {
    if (!/^img\/[a-z0-9][a-z0-9-]*\.(webp|png|jpe?g)$/.test(img)) fail(`illustration.image는 'img/<소문자-이름>.webp|png|jpg' 모양이어야 함: ${img}`);
    else if (!existsSync(join(here, 'lessons', img))) fail(`illustration.image 파일 없음: lessons/${img}`);
    else if (statSync(join(here, 'lessons', img)).size > 400 * 1024) fail(`illustration.image ${Math.round(statSync(join(here, 'lessons', img)).size / 1024)}KB > 400KB`);
    else notes.push(`그림 ${img} ${Math.round(statSync(join(here, 'lessons', img)).size / 1024)}KB`);
    const size = lesson.illustration.size;
    if (size != null && !(Array.isArray(size) && size.length === 2 && size.every((n) => Number.isInteger(n) && n > 0))) fail('illustration.size는 [가로, 세로] 정수 쌍이어야 함');
  }
  if (!lesson.worksheet?.items?.length) fail('worksheet.items 없음');
  for (const [name, list] of [['worksheet', lesson.worksheet?.items], ['worksheet.easy', lesson.worksheet?.easy?.items]]) (list || []).forEach((it, i) => { for (const m of worksheetShape(it)) fail(`${name}.${i + 1}: ${m}`); });
  if (!/[다]\.$/.test(lesson.objective || '')) fail('objective는 "~할 수 있다."로 끝나야 함');
  if (!lesson.catalog?.unit) fail('catalog.unit 없음');
}

// ---- 1.5) 허브 번들(dist/<id>/)이 원본보다 오래되었는가 — 허브 경로 학생은 번들을 받는다 ----
{
  let stale = bundleStale(id);
  if (stale && process.argv.includes('--rebuild')) {
    execFileSync(process.execPath, [join(here, 'build-bundles.mjs')], { stdio: 'pipe' });
    notes.push(`번들을 다시 묶음(${stale.reason}${stale.newer.length ? `: ${stale.newer.join(', ')}` : ''})`);
    stale = bundleStale(id);
  }
  if (stale) notes.push(`경고: dist/${id}/ 번들이 ${stale.reason === 'missing' ? '없음' : `원본보다 오래됨(${stale.newer.join(', ')})`} — 허브 학생은 옛 판을 받는다. --rebuild로 다시 묶으세요`);
}

// ---- 2) 실브라우저 ----
// 시스템 크롬을 쓴다(playwright 번들 브라우저가 없어도 돈다). CHROME_PATH로 덮어쓸 수 있다.
const chrome = [process.env.CHROME_PATH, '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', 'C:/Program Files/Google/Chrome/Application/chrome.exe', '/usr/bin/google-chrome'].find((p) => p && existsSync(p));
const browser = await chromium.launch({ executablePath: existsSync(chrome) ? chrome : undefined, headless: true });
if (shots) mkdirSync(shots, { recursive: true });
const errors = [];
const page = await browser.newPage({ viewport: { width: 1366, height: 768 } });
page.on('pageerror', (e) => errors.push(`pageerror: ${e.message}`));
page.on('console', (m) => { if (m.type() === 'error' && !/fonts|uicons|favicon/.test(m.text())) errors.push(`console: ${m.text()}`); });
const base = `${hub}/edu-content-pool/lessons/player.html?lesson=${id}`;
const classCode = `chk-${Date.now() % 100000}`;
try {
  await page.goto(`${base}&class=${classCode}&seat=1&collect=${encodeURIComponent(`${hub}/api/tools/edu-lesson:${id}/submissions`)}`);
  await page.waitForSelector('[data-next]', { timeout: 8000 });
  if (lesson.illustration?.image) {
    // 적어 둔 그림이 실제로 떴는지(못 읽으면 플레이어는 조용히 벡터로 돌아가므로 여기서 잡는다)
    const shown = await page.waitForFunction(() => { const i = document.querySelector('#art img'); return i && i.complete && i.naturalWidth > 0; }, null, { timeout: 4000 }).then(() => true, () => false);
    if (!shown) fail('illustration.image가 도입 화면에 뜨지 않음(벡터로 대체됨)');
  }
  if (shots) await page.screenshot({ path: join(shots, `${id}-1-intro.png`) });
  await page.click('[data-next]');
  let guard = 0; const shotActs = new Set();
  while (guard++ < 40) {
    const where = await page.evaluate(() => window.__pl.lesson.stages[window.__pl.stage].id);
    if (where !== 'main') break;
    const info = await page.evaluate(() => { const S = window.__pl; const a = S.lesson.stages[S.stage].activities[S.act]; return { item: a.items[S.item], act: a.id, key: `${a.id}.${S.item + 1}`, hasSolve: typeof S.tool.solve === 'function' }; });
    if (info.item.predict) {
      // 예상을 고르기 전에는 확인이 잠겨 있어야 한다
      if ((await page.getAttribute('#check', 'aria-disabled')) !== 'true') fail(`${info.key}: 예상을 고르기 전에 확인이 열려 있음`);
      await page.click('[data-predict="0"]');
    }
    if (!info.item.free) {
      // 처음 상태가 이미 정답이면 문항이 무의미하다
      const pre = await page.evaluate((t) => window.__pl.tool.check(t).correct, info.item.target);
      if (pre) fail(`${info.key}: 시작 상태가 이미 정답`);
      if (!info.hasSolve) { fail(`${info.key}: 교구에 solve() 없음`); break; }
      await page.evaluate((t) => window.__pl.tool.solve(t), info.item.target);
      // 오답 피드백(힌트) 경로는 solve 전에 한 번 확인해 두는 대신 check 반환 모양만 본다
    }
    if (info.item.free && !(await nudge(page, page))) fail(`${info.key}: 짝 활동 교구를 키보드로 움직일 수 없음`);
    // 활동마다 첫 문항 화면을 한 장씩(활동이 넷 이상인 차시도 빠짐없이)
    if (shots && !shotActs.has(info.act)) { shotActs.add(info.act); await page.screenshot({ path: join(shots, `${id}-2-act-${shotActs.size}.png`) }); }
    await page.click('#check');
    if (!info.item.free) {
      const ok = await page.waitForSelector('#fb.is-ok', { timeout: 3000 }).then(() => true, () => false);
      if (!ok) { fail(`${info.key}: solve 뒤 확인이 정답 처리되지 않음 (${await page.textContent('#fb')})`); break; }
      if (info.item.predict || info.item.conclude) await page.click('#next-item', { timeout: 3000 }).catch(() => fail(`${info.key}: 맞힌 뒤 '다음 문제' 단추가 없음`));
      else await page.waitForTimeout(1300);
      await page.waitForFunction((k) => { const S = window.__pl; const s = S.lesson.stages[S.stage]; return s.id !== 'main' || `${s.activities[S.act].id}.${S.item + 1}` !== k; }, info.key, { timeout: 4000 }).catch(() => {});
    } else if (info.item.predict || info.item.conclude) await page.click('#next-item', { timeout: 3000 }).catch(() => fail(`${info.key}: '다 했어요' 뒤 '다음 문제' 단추가 없음`));
    else await page.waitForTimeout(200);
  }
  // 정리: 출구 질문
  await page.waitForSelector('#exit', { timeout: 5000 });
  const exit = await page.evaluate(() => window.__pl.lesson.stages[2].exitTicket);
  for (let i = 0; i < exit.length; i++) {
    const q = exit[i];
    if (q.type === 'choice') await page.check(`input[name="q${i}"][value="${q.answer}"]`);
    if (q.type === 'mood') await page.check(`input[name="q${i}"][value="good"]`);
    if (q.type === 'short') await page.fill(`textarea[name="q${i}"]`, '자동 검사 답');
    if (q.type === 'tool') {
      const ok = await page.evaluate(([i, t]) => { const tl = window.__pl.exitTools[i]; if (!tl || !tl.solve) return false; tl.solve(t); return tl.check(t).correct; }, [i, q.target]);
      if (!ok) fail(`exit.${i + 1}: 교구 solve 뒤에도 정답이 아님`);
    }
  }
  if (shots) await page.screenshot({ path: join(shots, `${id}-3-exit.png`), fullPage: true });
  await page.click('#exit button[type="submit"]');
  await page.waitForSelector('.pl-done', { timeout: 8000 });
  const { sent, result } = await page.evaluate(() => window.__lastResult);
  if (result.score.correct !== result.score.total) fail(`모두 맞혔는데 점수 ${result.score.correct}/${result.score.total}`);
  if (!sent.delivered) fail(`제출 실패: ${sent.routes.join(',')}`);
  const rows = await (await fetch(`${hub}/api/results?class=${classCode}`)).json();
  if (rows.length !== 1) fail(`허브에 결과 ${rows.length}건(1건이어야 함)`);
  // 확인 전 숨김(reveal)·문항별 단계 시작(levels)·틀린 답 만들기 — 교사 화면에서 문항마다 따로 연다(제출 기록에 남지 않게)
  await probeItems();
  // 가로 넘침(크롬북 1366, 휴대폰 375)
  for (const w of [1366, 375]) {
    await page.setViewportSize({ width: w, height: 800 });
    await page.goto(`${base}&class=${classCode}&seat=2`); await page.click('[data-next]'); await page.waitForTimeout(300);
    const ov = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth);
    if (ov > 1) fail(`${w}px에서 가로 넘침 ${ov}px`);
    if (shots && w === 375) await page.screenshot({ path: join(shots, `${id}-4-mobile.png`), fullPage: true });
  }
  // 인쇄 활동지
  for (const v of ['', '&variant=easy']) {
    await page.setViewportSize({ width: 794, height: 1123 });
    await page.goto(`${base}&role=print${v}`); await page.waitForTimeout(600);
    await page.emulateMedia({ media: 'print' });
    const pdf = await page.pdf({ format: 'A4', printBackground: true, path: shots ? join(shots, `${id}-ws${v ? '-easy' : ''}.pdf`) : undefined });
    const pages = (pdf.toString('latin1').match(/\/Type\s*\/Page[^s]/g) || []).length;
    if (pages > 2) fail(`활동지${v ? '(쉬운)' : ''} ${pages}쪽 — 2쪽 이하여야 함`);
    notes.push(`활동지${v ? '(쉬운)' : ''} ${pages}쪽`);
    // 활동지에 정답 노출(그림 안 글자 중 '정답' 모양) 검사는 교구별 o.print 처리에 맡기고, 화면 캡처로 사람이 본다
    if (shots) await page.screenshot({ path: join(shots, `${id}-ws${v ? '-easy' : ''}.png`), fullPage: true });
    await page.emulateMedia({ media: 'screen' });
  }
} catch (e) {
  fail(`실행 중 오류: ${e.message.split('\n')[0]}`);
}

// 교구 안에 화면으로 보이는 글자만 모은다(숨긴 읽기 값이 드러났는지 견준다)
function visibleText() {
  const out = [];
  const walk = (n) => {
    for (const c of n.childNodes) {
      if (c.nodeType === 3) { const t = c.textContent.trim(); if (t) out.push(t); continue; }
      if (c.nodeType !== 1 || c.classList.contains('pk-sr')) continue;
      const cs = getComputedStyle(c);
      if (cs.display === 'none' || cs.visibility === 'hidden' || Number(cs.opacity) === 0) continue;
      walk(c);
    }
  };
  walk(document.querySelector('#tool'));
  return out.join(' | ');
}
async function probeItems() {
  const tp = await browser.newPage({ viewport: { width: 1366, height: 768 } });
  tp.on('pageerror', (e) => errors.push(`pageerror(교사 검사): ${e.message}`));
  await tp.goto(`${base}&role=teacher`); await tp.waitForSelector('[data-next]', { timeout: 8000 });
  const acts = lesson.stages[1].activities;
  for (let x = 0; x < acts.length; x++) {
    for (let y = 0; y < acts[x].items.length; y++) {
      const it = acts[x].items[y]; const key = `${acts[x].id}.${y + 1}`;
      if (it.free) continue;
      const open = async (level) => { await tp.evaluate(([x, y, lv]) => { window.__pl.level = lv; window.__pl.goto(1, x, y); }, [x, y, level]); await tp.waitForTimeout(120); };
      // 문항별 단계 시작: 그 단계로 열었을 때 시작 상태가 이미 정답이면 안 된다
      for (const lv of Object.keys(it.levels || {})) {
        await open(lv);
        const pre = await tp.evaluate((t) => { const r = window.__pl.tool.check(t, { forHint: true }); return r.correct && !r.incomplete; }, it.target);
        if (pre) fail(`${key}: levels.${lv} 시작 상태가 이미 정답`);
      }
      await open('base');
      // 다 했지만 틀린 답을 만들 수 있는가(모의 수업이 오답 시도를 정직하게 기록하려면 필요) — wrongAnswer(target) 또는 정답 근처 상태
      const w = await tp.evaluate((t) => { const r = window.PaperLessons.flow.findWrong(window.__pl.tool, t, { seed: 7 }); return r && { via: r.via, path: r.path || '' }; }, it.target);
      if (!w) notes.push(`${key}: 다 했지만 틀린 상태를 만들지 못함 — 교구에 wrongAnswer(target)이 필요(모의 수업 오답이 incomplete로 빠짐)`);
      if (it.reveal !== 'after-check') continue;
      await open('base');
      const hasHint = await tp.evaluate(() => typeof window.__pl.tool.hint === 'function');
      // 힌트는 숨긴 값을 드러내지 않는다: 힌트 전후 교구 글자가 같아야 한다
      const t0 = await tp.evaluate(visibleText);
      await tp.click('#hint'); await tp.waitForTimeout(150);
      const t1 = await tp.evaluate(visibleText);
      if (t0 !== t1) fail(`${key}: reveal 문항에서 힌트가 교구 표시를 바꿈(숨긴 값 노출 의심)${hasHint ? '' : ' — 교구에 hint()가 없음'}: "${t0.slice(0, 80)}" → "${t1.slice(0, 80)}"`);
      // 틀린 확인도 숨긴 값을 드러내지 않는다
      if (w) {
        await open('base');
        await tp.evaluate((t) => { window.PaperLessons.flow.findWrong(window.__pl.tool, t, { seed: 7 }); }, it.target);
        const s0 = await tp.evaluate(visibleText);
        await tp.click('#check'); await tp.waitForTimeout(200);
        const ok = await tp.evaluate(() => document.querySelector('#fb').classList.contains('is-ok'));
        const s1 = await tp.evaluate(visibleText);
        if (!ok && s0 !== s1) (hasHint ? (m) => notes.push(`확인 필요: ${m}`) : fail)(`${key}: reveal 문항에서 틀린 확인 뒤 교구 표시가 바뀜: "${s0.slice(0, 80)}" → "${s1.slice(0, 80)}"`);
      }
      if (!hasHint) notes.push(`${key}: reveal 문항 교구에 hint()가 없어 플레이어가 setState로 다시 숨김(교구에 hint()를 넣으세요)`);
    }
  }
  await tp.close();
}
await browser.close();
for (const e of errors) fail(e);
console.log(JSON.stringify({ lesson: id, ok: fails.length === 0, fails, notes }, null, 1));
process.exit(fails.length ? 1 : 0);
