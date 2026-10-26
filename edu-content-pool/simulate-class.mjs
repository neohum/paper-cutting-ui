#!/usr/bin/env node
// 학급 모의 수업 — 학생 30명이 실제 브라우저로 한 차시를 끝까지 하고 선택한 경로로 제출한다.
// 학생은 사람이 아니라 '행동 모형'이다: 프로필(정확도·힌트·단계 바꾸기·기기·키보드·오프라인)에 따라
// 맞는 조작(교구 solve) 또는 틀린 조작을 하고, 확인·힌트·단계 단추를 실제로 누른다.
// 틀린 조작은 '다 했지만 틀린' 답이어야 한다(그래야 플레이어가 시도로 센다). 순서:
//   1) 교구의 wrongAnswer(target) — 그럴듯한 오개념 상태  2) 화면의 입력 칸에 틀린 수·고르지 않은 보기 누르기
//   3) 정답 상태의 숫자 하나를 조금 바꾼 상태(PaperLessons.flow.findWrong)  4) 그래도 안 되면 조각에 방향키(예전 방식)
// 확인을 눌렀는데 시도로 세지지 않은 경우(incomplete·바꾼 것 없음)를 문항별로 세어, 30%를 넘으면 simUnreliable로 표시한다.
// 시도 제한(items[n].maxAttempts, reveal 문항 기본 3)을 넘기면 플레이어가 문항을 닫는다 — 학생은 '다음 문제'로 넘어간다(closed).
// 힌트 사다리: 약한 학생(struggling·ell)은 틀린 뒤 힌트를 눌러 단계를 올리고(1 → 2 → 3), 힌트 단계만큼 다음 시도가 쉬워진다.
// 문항 하나가 60초(--item-timeout)를 넘으면 그 문항을 건너뛰고(timedOut) 기록한다 — solve()가 멈춘 교구가 모의 수업 전체를 붙잡지 않게.
// 사용: node edu-content-pool/simulate-class.mjs <lessonId> --class 2-3 [--route link|hub|portal|mixed] [--students 30] [--seed 7] [--difficulty 0] [--rebuild]
//   --rebuild: 허브 경로 학생이 받는 dist/<id>/ 번들이 원본보다 오래되었으면 다시 묶는다(없으면 경고만)
//   --difficulty: 이 차시가 이 학년에게 얼마나 어려운지(-0.3 쉬움 ~ +0.3 어려움). 교사 페르소나가 판단해 넣는다.
// 출력: JSON(요약 + 학생별 기록 + 오류). classroom-hub.mjs가 떠 있어야 한다.
import { existsSync, writeFileSync } from 'node:fs';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';
import { chromium } from 'playwright-core';
import { execFileSync } from 'node:child_process';
import { bundleStale } from './build-bundles.mjs';

const here = dirname(fileURLToPath(import.meta.url));
const id = process.argv[2];
const arg = (k, d) => { const i = process.argv.indexOf(k); return i > 0 ? process.argv[i + 1] : d; };
const hub = arg('--hub', 'http://localhost:8790');
const cls = arg('--class', `sim-${Date.now() % 10000}`);
const route = arg('--route', 'mixed');
const N = Number(arg('--students', 30));
const difficulty = Number(arg('--difficulty', 0));
const out = arg('--out', null);
const ITEM_MS = Number(arg('--item-timeout', 60)) * 1000;
let seed = Number(arg('--seed', 7));
const rnd = () => { seed = (seed * 1103515245 + 12345) % 2147483648; return seed / 2147483648; };
const pick = (xs) => xs[Math.floor(rnd() * xs.length)];
if (!id) { console.error('usage: simulate-class.mjs <lessonId> --class <code>'); process.exit(2); }

// 30명 구성(한 반의 흔한 분포). acc=한 번 시도에 맞을 확률(기본 단계), patience=최대 시도
const PROFILES = {
  quick: { acc: 0.9, patience: 4, hint: 0.05, upLevel: true, think: [20, 50] },
  steady: { acc: 0.75, patience: 5, hint: 0.2, think: [40, 90] },
  struggling: { acc: 0.42, patience: 6, hint: 0.7, downLevel: true, think: [70, 150] },
  clicker: { acc: 0.5, patience: 8, hint: 0, mash: true, think: [8, 25] },
  keyboard: { acc: 0.7, patience: 5, hint: 0.2, keyboard: true, think: [50, 100] },
  mobile: { acc: 0.7, patience: 5, hint: 0.2, viewport: { width: 375, height: 740 }, think: [40, 90] },
  offline: { acc: 0.72, patience: 5, hint: 0.2, offline: true, think: [40, 90] },
  ell: { acc: 0.55, patience: 6, hint: 0.5, downLevel: true, think: [70, 140] }, // 한국어가 서툰 다문화 학생
};
const ROSTER = ['quick', 'quick', 'quick', 'quick', 'quick', 'steady', 'steady', 'steady', 'steady', 'steady', 'steady', 'steady', 'steady', 'steady',
  'struggling', 'struggling', 'struggling', 'struggling', 'struggling', 'clicker', 'clicker', 'clicker', 'keyboard', 'keyboard', 'mobile', 'mobile', 'mobile', 'offline', 'offline', 'ell'];
const LEVEL_MOD = { easy: 0.18, base: 0, challenge: -0.18 };


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
let lesson;
vm.runInNewContext(readFileSync(join(here, 'lessons/data', `${id}.js`), 'utf8'), { PaperLessons: { register(l) { lesson = l; } } });
const routes = route === 'mixed' ? ['link', 'hub', 'portal'] : [route];
const warnings = [];
if (routes.includes('hub')) {
  let stale = bundleStale(id);
  if (stale && process.argv.includes('--rebuild')) { execFileSync(process.execPath, [join(here, 'build-bundles.mjs')], { stdio: 'pipe' }); stale = bundleStale(id); }
  if (stale) { const w = `dist/${id}/ 번들이 ${stale.reason === 'missing' ? '없음' : `원본보다 오래됨(${stale.newer.join(', ')})`} — 허브 경로 학생은 옛 판을 받는다(--rebuild)`; warnings.push(w); console.error(`! ${w}`); }
}

// 문항별: 확인을 몇 번 눌렀고 그중 몇 번이 시도로 세졌는지, 틀린 답을 어떻게 만들었는지
const itemStats = {};
const statOf = (k) => (itemStats[k] ??= { clicks: 0, counted: 0, incomplete: 0, unchanged: 0, wrongVia: {}, closed: 0, timedOut: 0, hintLevels: {} });
// 정한 시간 안에 끝나지 않으면 'timeout'으로 끝나는 약속
const within = (ms, p) => { let t; return Promise.race([p.finally(() => clearTimeout(t)), new Promise((res) => { t = setTimeout(() => res('timeout'), ms); })]); };

// 틀린 조작: 다 했지만 틀린 답을 만든다(위 1~4 순서). 돌려주는 값은 쓴 방법.
async function wrongMove(F, frameEval, target, key, log) {
  const seed = Math.floor(rnd() * 1e9);
  // 직전 오답과 같은 상태는 피한다(플레이어가 '바꾼 것 없음'으로 시도에서 뺀다)
  const find = (mode) => frameEval(([t, s, k, m]) => {
    const S = window.__pl; const avoid = [S.items[k] && S.items[k].lastJSON].filter(Boolean);
    const x = window.PaperLessons.flow.findWrong(S.tool, t, m === 'tool' ? { seed: s, avoid, perturb: false } : { seed: s, avoid, wrongAnswer: false });
    return x && x.via;
  }, [target, seed, key, mode]);
  // 교구 검사로 '다 했지만 틀림'인지 본다. 검사가 켠 '확인 뒤 보임'은 상태를 다시 넣어 끈다.
  const probe = () => frameEval(([t, k]) => { const S = window.__pl; const js = JSON.stringify(S.tool.getState()); if (S.items[k] && S.items[k].lastJSON === js) return false; const r = S.tool.check(t, { forHint: true }) || {}; if (S.tool.reset) S.tool.reset(); S.tool.setState(JSON.parse(js)); return !r.incomplete && r.correct === false; }, [target, key]);
  const viaTool = await find('tool');
  if (viaTool) return viaTool;
  // 화면의 칸: 보이는 입력 칸에 틀린 수, 또는 아직 고르지 않은 보기 하나
  const inputs = F.locator('#tool input:visible'); const ni = await inputs.count();
  if (ni) { await inputs.nth(Math.floor(rnd() * ni)).fill(String(1 + Math.floor(rnd() * 19))).catch(() => {}); if (await probe()) return 'ui-input'; }
  const choices = F.locator('#tool [aria-pressed="false"]:visible, #tool [role="radio"][aria-checked="false"]:visible'); const nc = await choices.count();
  if (nc) { await choices.nth(Math.floor(rnd() * nc)).click({ timeout: 1500 }).catch(() => {}); if (await probe()) return 'ui-choice'; }
  const viaNear = await find('near');
  if (viaNear) return viaNear;
  const n = await F.locator('#tool [tabindex="0"]').count();
  if (n) { const el = F.locator('#tool [tabindex="0"]').nth(Math.floor(rnd() * n)); await el.focus(); for (let k = 0; k < 1 + Math.floor(rnd() * 3); k++) { await el.press(pick(['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'])); log.wrongKeys++; } }
  return 'keys';
}

// 시스템 크롬을 쓴다(playwright 번들 브라우저가 없어도 돈다). CHROME_PATH로 덮어쓸 수 있다.
const chrome = [process.env.CHROME_PATH, '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', 'C:/Program Files/Google/Chrome/Application/chrome.exe', '/usr/bin/google-chrome'].find((p) => p && existsSync(p));
const browser = await chromium.launch({ executablePath: existsSync(chrome) ? chrome : undefined, headless: true });
const errors = []; const logs = [];

// 포털 경로를 쓰면 교사가 과제를 먼저 게시한다(교사 화면이 하는 것과 같은 요청)
let assignment = null;
if (routes.includes('portal')) {
  const m = /^(\d)-(\d{1,2})$/.exec(cls);
  const r = await fetch(`${hub}/api/portal/assignments`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({
    title: `[${lesson.grade}학년 ${lesson.subject}] ${lesson.title}`, target_grade: lesson.grade, ...(m ? { target_class_num: Number(m[2]) } : {}),
    payload_json: { activity_type: 'external', subject_tag: lesson.subject, external_links: [{ url: `${hub}/edu-content-pool/lessons/player.html?lesson=${id}&class=${encodeURIComponent(cls)}`, name: lesson.title }] },
  }) });
  assignment = await r.json();
}

async function runStudent(seat) {
  const kind = ROSTER[(seat - 1) % ROSTER.length]; const P = PROFILES[kind];
  const rt = P.offline ? 'code' : routes[(seat - 1) % routes.length];
  const ctx = await browser.newContext({ viewport: P.viewport || { width: 1366, height: 768 } });
  const page = await ctx.newPage();
  const log = { seat, kind, route: rt, attempts: 0, hints: 0, hintLevels: [], levelSwitches: [], wrongKeys: 0, predicts: [], closed: [], timedOut: [], submitted: null, notes: [] };
  page.on('pageerror', (e) => errors.push(`${seat}번 pageerror: ${e.message}`));
  page.on('console', (m) => { if (m.type() === 'error' && !/favicon|Failed to load resource: net::ERR_INTERNET_DISCONNECTED/.test(m.text())) errors.push(`${seat}번 console: ${m.text()}`); });
  let F = page; // 포털이면 iframe 안
  let modeled = 0; // 모형상 걸린 초
  const think = () => { const [a, b] = P.think; modeled += a + rnd() * (b - a); };
  try {
    if (rt === 'portal') {
      // 포털은 학년·반으로 과제를 거른다: 학년은 차시 학년, 반은 반 코드('3-2' 모양)에서
      const m = /^(\d)-(\d{1,2})$/.exec(cls);
      await page.goto(`${hub}/edu-content-pool/lessons/portal-sim.html`);
      await page.fill('input[name="g"]', String(lesson.grade)); await page.fill('input[name="c"]', m ? m[2] : '1'); await page.fill('input[name="n"]', String(seat));
      await page.click('#who button');
      await page.click(`[data-open="${assignment.id}"]`);
      F = page.frameLocator('#frame');
    } else if (rt === 'hub') {
      // 학생 입장 화면은 없다 — 런처가 반·번호를 주소로 넘긴다
      await page.goto(`${hub}/dist/${id}/?class=${encodeURIComponent(cls)}&seat=${seat}`);
    } else {
      const collect = rt === 'link' ? `&collect=${encodeURIComponent(`${hub}/api/tools/edu-lesson:${id}/submissions`)}` : '';
      await page.goto(`${hub}/edu-content-pool/lessons/player.html?lesson=${id}&class=${encodeURIComponent(cls)}&seat=${seat}${collect}`);
    }
    const frameEval = async (fn, a) => (rt === 'portal' ? page.frames().find((f) => f.url().includes('player.html')).evaluate(fn, a) : page.evaluate(fn, a));
    think();
    await F.locator('[data-next]').click();
    // 처음 단계: 시작 전 느린 학생은 쉬움으로, 빠른 학생은 그대로
    if (kind === 'ell' && rnd() < 0.5) { await F.locator('.pl-level__b[data-level="easy"]').click(); log.levelSwitches.push('start→easy'); }
    async function doItem(st) {
      if (st.item.predict && !st.picked) {
        // 예상 먼저(채점 아님). predict.answer가 있으면 빠르고 잘하는 학생일수록 그 보기를 더 자주 고른다
        const pr = st.item.predict; const right = Number.isInteger(pr.answer) ? pr.answer : null;
        const pRight = { quick: 0.75, steady: 0.55, keyboard: 0.5, mobile: 0.5, offline: 0.5 }[kind] ?? 0.35;
        const others = pr.options.map((_, k) => k).filter((k) => k !== right);
        const k = right != null && (rnd() < pRight || !others.length) ? right : pick(right != null ? others : pr.options.map((_, j) => j));
        await F.locator(`[data-predict="${k}"]`).click();
        log.predicts.push({ key: st.key, pick: k, right: right == null ? null : k === right });
      }
      const nextItem = async () => { if (st.item.predict || st.item.conclude) await F.locator('#next-item').click({ timeout: 3000 }).catch(() => log.notes.push(`${st.key}: '다음 문제' 단추 없음`)); };
      if (st.item.free) { think(); await nudge(F, { evaluate: frameEval }); await F.locator('#check').click(); await page.waitForTimeout(250); await nextItem(); return; }
      let solved = false; let closed = false; let hintBoost = 0;
      // 약한 학생은 시도 전에도 가끔 힌트를 본다(시도 전에는 언제나 1단계 — 개념만)
      if (weak && rnd() < P.hint * 0.4) hintBoost = Math.max(hintBoost, await pressHint(st.key));
      for (let t = 1; t <= P.patience && !solved && !closed; t++) {
        think();
        // 문항 난도(item.difficulty, 교사가 판단해 차시 파일에 적음)를 차시 난도에 더한다 — 모든 문항이 같은 확률이 되지 않게
        // 힌트 단계가 올라갈수록 조금 더 맞히기 쉽다(1단계 +0.04 · 2단계 +0.08 · 3단계 +0.12)
        const p = Math.min(0.97, Math.max(0.05, P.acc + LEVEL_MOD[st.level] - difficulty - (st.item.difficulty || 0) + (t >= 3 ? 0.15 : 0) + hintBoost * 0.04));
        const sx = statOf(st.key);
        if (rnd() < p) {
          await frameEval((tg) => window.__pl.tool.solve(tg), st.item.target);
        } else {
          const via = await wrongMove(F, frameEval, st.item.target, st.key, log);
          sx.wrongVia[via] = (sx.wrongVia[via] || 0) + 1;
        }
        // 틀린 직후 확인은 잠깐 잠긴다(aria-disabled) — 키보드 학생도 풀릴 때까지 기다렸다 누른다
        await F.locator('#check:not([aria-disabled="true"])').waitFor({ timeout: 3000 }).catch(() => {});
        const before = await frameEval((k) => (window.__pl.items[k] ? window.__pl.items[k].attempts : 0), st.key);
        if (P.keyboard) { await F.locator('#check').focus(); await page.keyboard.press('Enter'); } else await F.locator('#check').click();
        log.attempts++; sx.clicks++;
        solved = await F.locator('#fb.is-ok').waitFor({ timeout: 700 }).then(() => true, () => false);
        // 플레이어가 시도로 셌는가: 안 셌으면 incomplete(교구가 '아직 다 하지 않음')인지 '바꾼 것 없음'인지 안내 줄로 가른다
        const after = await frameEval((k) => (window.__pl.items[k] ? window.__pl.items[k].attempts : 0), st.key);
        if (after > before) sx.counted++;
        else if (!solved) { const nt = await F.locator('#fb-note').textContent().catch(() => ''); if (/바꾼 뒤에/.test(nt || '')) sx.unchanged++; else sx.incomplete++; }
        // 시도를 다 써서 닫혔으면(reveal 문항 기본 3번) '다음 문제'로 넘어간다
        if (!solved) closed = await frameEval((k) => window.__pl.items[k]?.closed === 'attempts', st.key);
        if (closed) { log.closed.push(st.key); statOf(st.key).closed++; break; }
        if (!solved) {
          if (P.mash) { await F.locator('#check').click().catch(() => {}); log.attempts++; } // 연타
          // 힌트 사다리: 틀린 뒤 힌트 한 칸. 약한 학생은 두 번째 틀림부터 한 칸 더(풀이 단계까지)
          if (rnd() < P.hint) { hintBoost = Math.max(hintBoost, await pressHint(st.key)); if (weak && t >= 2) hintBoost = Math.max(hintBoost, await pressHint(st.key)); }
          // 쉬움 권유가 뜨면 내려간다
          if (P.downLevel && await F.locator('#suggest [data-level="easy"]').count()) { await F.locator('#suggest [data-level="easy"]').click(); log.levelSwitches.push(`${st.key}→easy`); break; }
        }
      }
      if (closed) {
        await F.locator('#next-item').click({ timeout: 3000 }).catch(() => log.notes.push(`${st.key}: 닫힌 뒤 '다음 문제' 단추 없음`));
        await waitLeave(st.key);
      } else if (solved) {
        // 다음 문항으로 넘어갈 때까지 기다린다(예상·정리 문항은 '다음 문제'를 누른다)
        if (st.item.predict || st.item.conclude) await nextItem(); else await page.waitForTimeout(1250);
        await waitLeave(st.key);
        if (P.upLevel && await F.locator('#suggest [data-level]').count().catch(() => 0)) {
          const lv = await F.locator('#suggest [data-level]').getAttribute('data-level');
          await F.locator('#suggest [data-level]').click(); log.levelSwitches.push(`${st.key}→${lv}`);
        }
      } else if (!log.levelSwitches.at(-1)?.startsWith(st.key)) {
        // 끝내 못 풀면 선생님 도움(모형): 정답 조작 후 넘어간다 — 첫 시도 정답으로는 세지 않는다
        log.notes.push(`${st.key}: ${P.patience}번 안에 못 풀어 선생님 도움`);
        await frameEval((tg) => window.__pl.tool.solve(tg), st.item.target);
        await F.locator('#check:not([disabled]):not([aria-disabled="true"])').click({ timeout: 3000 }).catch(() => log.notes.push('도움 뒤 확인 단추 비활성'));
        if (st.item.predict || st.item.conclude) { await F.locator('#fb.is-ok').waitFor({ timeout: 2000 }).catch(() => {}); await nextItem(); } else await page.waitForTimeout(1250);
        await waitLeave(st.key);
      }
    }
    const weak = kind === 'struggling' || kind === 'ell';
    const itemKey = () => frameEval(() => { const S = window.__pl; const s = S.lesson.stages[S.stage]; return s.id === 'main' ? `${s.activities[S.act].id}.${S.item + 1}` : s.id; });
    const waitLeave = async (key) => { for (let w = 0; w < 20; w++) { if (await itemKey() !== key) return; await page.waitForTimeout(150); } };
    // 힌트 단추 한 번 = 사다리 한 칸(플레이어가 단계를 정한다). 닫힌 문항에서는 단추가 꺼져 있다
    const pressHint = async (key) => {
      const hb = F.locator('#hint:not([disabled])');
      if (!(await hb.count())) return 0;
      await hb.click(); log.hints++;
      const lv = await frameEval((k) => { const x = window.__pl.items[k]; return x && x.hintLevels ? x.hintLevels[x.hintLevels.length - 1] : 0; }, key);
      if (lv) { log.hintLevels.push(lv); const hs = statOf(key).hintLevels; hs[lv] = (hs[lv] || 0) + 1; }
      return lv || 0;
    };
    let guard = 0;
    while (guard++ < 60) {
      const st = await frameEval(() => { const S = window.__pl; const s = S.lesson.stages[S.stage]; if (s.id !== 'main') return null; const a = s.activities[S.act]; return { item: window.PaperLessons.flow.itemAt(a.items[S.item], S.level), level: S.level, key: `${a.id}.${S.item + 1}`, picked: S.items[`${a.id}.${S.item + 1}`]?.predict != null }; });
      if (!st) break;
      const done = await within(ITEM_MS, doItem(st).then(() => 'ok'));
      if (done !== 'timeout') continue;
      // 이 문항이 멈췄다: 기록하고 다음 문항으로 건너뛴다. 페이지 자체가 멈췄으면 이 학생은 여기서 끝낸다
      log.timedOut.push(st.key); statOf(st.key).timedOut++;
      const moved = await within(5000, frameEval(() => {
        const S = window.__pl; const s = S.lesson.stages[S.stage]; const a = s.activities[S.act];
        if (S.item + 1 < a.items.length) S.goto(S.stage, S.act, S.item + 1); else if (S.act + 1 < s.activities.length) S.goto(S.stage, S.act + 1, 0); else S.goto(S.stage + 1, 0, 0);
        return true;
      }));
      if (moved === 'timeout') throw new Error(`${st.key}: ${ITEM_MS / 1000}초 넘게 멈춰 이 학생을 끝냄`);
    }
    // 출구 질문
    await F.locator('#exit').waitFor({ timeout: 5000 });
    const exit = lesson.stages[2].exitTicket;
    let right = 0; let asked = 0;
    for (let i = 0; i < exit.length; i++) {
      const q = exit[i]; think();
      const p = Math.min(0.97, Math.max(0.05, P.acc - difficulty - (q.difficulty || 0) + 0.05));
      if (q.type === 'choice') { asked++; const ok = rnd() < p; if (ok) right++; const v = ok ? q.answer : pick(q.options.map((_, k) => k).filter((k) => k !== q.answer)); await F.locator(`input[name="q${i}"][value="${v}"]`).check(); }
      if (q.type === 'tool') { asked++; if (rnd() < p) { right++; await frameEval((i) => { const S = window.__pl; window.__pl.exitTools[i].solve(window.PaperLessons.flow.itemAt(S.lesson.stages[2].exitTicket[i], S.level).target); }, i); } }
      if (q.type === 'short') await F.locator(`textarea[name="q${i}"]`).fill(pick(['재미있었다', '조금 헷갈렸다', '친구랑 같이 해서 좋았다', '']));
      if (q.type === 'mood') {
        const share = asked ? right / asked : 1;
        const mood = kind === 'struggling' || kind === 'ell' ? (share < 0.5 ? 'hard' : 'ok') : share < 0.5 ? 'ok' : 'good';
        if (!(kind === 'clicker' && rnd() < 0.5)) await F.locator(`input[name="q${i}"][value="${mood}"]`).check(); // 연타 학생은 느낌을 건너뛰기도
      }
    }
    // 모형상 걸린 시간을 결과에 반영(실제 브라우저 시간은 몇 초라서)
    await frameEval((sec) => { window.__pl.started = Date.now() - sec * 1000; }, Math.round(modeled + 120));
    if (P.offline) await ctx.setOffline(true);
    await F.locator('#exit button[type="submit"]').click();
    // 손대지 않은 교구 문항이 있으면 한 번 알려 준다 — 학생은 그대로 한 번 더 누른다
    if (await F.locator('#exit-warn:not([hidden])').count()) { log.notes.push('출구 교구 문항 손대지 않음 경고'); await F.locator('#exit button[type="submit"]').click(); }
    await F.locator('.pl-done').waitFor({ timeout: 9000 });
    const last = await frameEval(() => window.__lastResult);
    log.submitted = last.sent.routes; log.score = last.result.score; log.level = last.result.level;
    // 포털은 받았다는 답을 도구에 주지 않는다 — 포털이 서버 저장을 마칠 때까지 탭을 닫지 않고 기다린다
    if (rt === 'portal') { const ok = await page.waitForFunction(() => window.__portalSubmitted >= 1, null, { timeout: 6000 }).then(() => true, () => false); if (!ok) log.notes.push('포털 저장 확인 못 함'); }
    if (!last.sent.delivered) {
      // 교사가 제출 코드를 모은다(교사 화면 '코드 넣기'와 같은 요청)
      await ctx.setOffline(false);
      const r = await fetch(`${hub}/api/results/import`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ appId: `edu-lesson:${id}`, studentKey: `${cls}-${seat}`, data: last.result }) });
      log.submitted.push(r.ok ? 'teacher-imported-code' : `import-failed-${r.status}`);
    }
    if (P.viewport) { const ov = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth); if (ov > 1) log.notes.push(`가로 넘침 ${ov}px`); }
  } catch (e) {
    log.notes.push(`멈춤: ${e.message.split('\n')[0]}`);
    errors.push(`${seat}번(${kind},${rt}) 진행 실패: ${e.message.split('\n')[0]}`);
  }
  log.modeledMin = Math.round((modeled + 120) / 6) / 10;
  logs.push(log);
  await ctx.close();
}

// 6명씩 동시에(교실 와이파이에서 한꺼번에 들어오는 상황)
const seats = Array.from({ length: N }, (_, i) => i + 1);
for (let i = 0; i < seats.length; i += 6) await Promise.all(seats.slice(i, i + 6).map(runStudent));
await browser.close();

const rows = await (await fetch(`${hub}/api/results?lesson=${id}&class=${encodeURIComponent(cls)}`)).json();
const A = {}; vm.runInNewContext(readFileSync(join(here, 'lessons/analytics.js'), 'utf8'), { window: A });
const summary = A.LessonAnalytics.summarize(rows);
const byRoute = rows.reduce((a, r) => { a[r.via] = (a[r.via] || 0) + 1; return a; }, {});
// 문항별 정직성: 확인을 눌렀는데 시도로 세지지 않은 비율이 30%를 넘으면 그 문항의 '한 번에 맞힘'은 믿을 수 없다
const items = Object.entries(itemStats).sort(([a], [b]) => a.localeCompare(b, 'en', { numeric: true })).map(([key, x]) => {
  const incompleteAttempts = x.incomplete + x.unchanged;
  return { key, clicks: x.clicks, counted: x.counted, incompleteAttempts, incomplete: x.incomplete, unchanged: x.unchanged, incompleteRate: x.clicks ? Math.round((incompleteAttempts / x.clicks) * 100) : 0, simUnreliable: x.clicks > 0 && incompleteAttempts / x.clicks > 0.3, wrongVia: x.wrongVia, closed: x.closed, timedOut: x.timedOut, hintLevels: x.hintLevels };
});
const simUnreliable = items.filter((x) => x.simUnreliable).map((x) => x.key);
const timedOut = logs.flatMap((l) => l.timedOut.map((k) => `${l.seat}번 ${k}`));
const closedByAttempts = logs.flatMap((l) => l.closed.map((k) => `${l.seat}번 ${k}`));
const report = { lesson: id, classCode: cls, students: N, received: rows.length, byRoute, difficulty, summary, items, simUnreliable, timedOut, closedByAttempts, warnings, students_log: logs.sort((a, b) => a.seat - b.seat), errors };
if (out) writeFileSync(out, JSON.stringify(report, null, 1));
console.log(JSON.stringify({ lesson: id, classCode: cls, received: `${rows.length}/${N}`, byRoute, firstTry: summary.firstTry, simUnreliable, timedOut, closedByAttempts, warnings,
  items: items.map((x) => `${x.key} 한번에 ${summary.items.find((r) => r.key === x.key)?.firstTry ?? '-'}% · 확인 ${x.clicks}(셈 ${x.counted}, 안 셈 ${x.incompleteAttempts})${x.closed ? ` · 닫힘 ${x.closed}` : ''}${x.timedOut ? ` · 시간초과 ${x.timedOut}` : ''}${Object.keys(x.hintLevels).length ? ` · 힌트단계 ${Object.entries(x.hintLevels).map(([l, n]) => `${l}:${n}`).join(' ')}` : ''} · ${Object.entries(x.wrongVia).map(([k, v]) => `${k}×${v}`).join(' ')}`), avgScore: summary.avgScore, levels: summary.levels, moods: summary.moods, recommendations: summary.recommendations, stuck: logs.filter((l) => l.notes.some((n) => n.startsWith('멈춤'))).length, errors: errors.slice(0, 10) }, null, 1));
// process.exit()는 윈도에서 남은 소켓을 닫는 중에 libuv 단언으로 죽을 수 있다 — 종료 코드만 정하고 저절로 끝나게 둔다
process.exitCode = errors.length ? 1 : 0;
