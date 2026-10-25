#!/usr/bin/env node
// 학급 모의 수업 — 학생 30명이 실제 브라우저로 한 차시를 끝까지 하고 선택한 경로로 제출한다.
// 학생은 사람이 아니라 '행동 모형'이다: 프로필(정확도·힌트·단계 바꾸기·기기·키보드·오프라인)에 따라
// 맞는 조작(교구 solve) 또는 틀린 조작(교구 안 조각에 실제 키 입력)을 하고, 확인·힌트·단계 단추를 실제로 누른다.
// 사용: node edu-content-pool/simulate-class.mjs <lessonId> --class 2-3 [--route link|hub|portal|mixed] [--students 30] [--seed 7] [--difficulty 0]
//   --difficulty: 이 차시가 이 학년에게 얼마나 어려운지(-0.3 쉬움 ~ +0.3 어려움). 교사 페르소나가 판단해 넣는다.
// 출력: JSON(요약 + 학생별 기록 + 오류). classroom-hub.mjs가 떠 있어야 한다.
import { existsSync, writeFileSync } from 'node:fs';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';
import { chromium } from 'playwright-core';

const here = dirname(fileURLToPath(import.meta.url));
const id = process.argv[2];
const arg = (k, d) => { const i = process.argv.indexOf(k); return i > 0 ? process.argv[i + 1] : d; };
const hub = arg('--hub', 'http://localhost:8790');
const cls = arg('--class', `sim-${Date.now() % 10000}`);
const route = arg('--route', 'mixed');
const N = Number(arg('--students', 30));
const difficulty = Number(arg('--difficulty', 0));
const out = arg('--out', null);
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

const chrome = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
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
  const log = { seat, kind, route: rt, attempts: 0, hints: 0, levelSwitches: [], wrongKeys: 0, submitted: null, notes: [] };
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
      await page.goto(`${hub}/dist/${id}/`);
      await F.locator('input[name="class"]').fill(cls);
    } else {
      const collect = rt === 'link' ? `&collect=${encodeURIComponent(`${hub}/api/tools/edu-lesson:${id}/submissions`)}` : '';
      await page.goto(`${hub}/edu-content-pool/lessons/player.html?lesson=${id}&class=${encodeURIComponent(cls)}${collect}`);
    }
    const frameEval = async (fn, a) => (rt === 'portal' ? page.frames().find((f) => f.url().includes('player.html')).evaluate(fn, a) : page.evaluate(fn, a));
    await F.locator('input[name="seat"]').fill(String(seat));
    if (kind === 'ell' || kind === 'quick') await F.locator('input[name="nick"]').fill(pick(['별', '토끼', '구름', '하늘']));
    if (P.keyboard) { await F.locator('input[name="seat"]').press('Enter'); } else await F.locator('#join button[type="submit"]').click();
    think();
    await F.locator('[data-next]').click();
    // 처음 단계: 시작 전 느린 학생은 쉬움으로, 빠른 학생은 그대로
    if (kind === 'ell' && rnd() < 0.5) { await F.locator('.pl-level__b[data-level="easy"]').click(); log.levelSwitches.push('start→easy'); }
    let guard = 0;
    while (guard++ < 60) {
      const st = await frameEval(() => { const S = window.__pl; const s = S.lesson.stages[S.stage]; if (s.id !== 'main') return null; const a = s.activities[S.act]; return { item: a.items[S.item], level: S.level, key: `${a.id}.${S.item + 1}` }; });
      if (!st) break;
      if (st.item.free) { think(); await nudge(F, { evaluate: frameEval }); await F.locator('#check').click(); await page.waitForTimeout(250); continue; }
      let solved = false;
      for (let t = 1; t <= P.patience && !solved; t++) {
        think();
        // 문항 난도(item.difficulty, 교사가 판단해 차시 파일에 적음)를 차시 난도에 더한다 — 모든 문항이 같은 확률이 되지 않게
        const p = Math.min(0.97, Math.max(0.05, P.acc + LEVEL_MOD[st.level] - difficulty - (st.item.difficulty || 0) + (t >= 3 ? 0.15 : 0)));
        if (rnd() < p) {
          await frameEval((tg) => window.__pl.tool.solve(tg), st.item.target);
        } else {
          // 틀린 조작: 교구 안 조작 가능한 조각에 실제 키 입력
          const n = await F.locator('#tool [tabindex="0"]').count();
          if (n) { const el = F.locator('#tool [tabindex="0"]').nth(Math.floor(rnd() * n)); await el.focus(); for (let k = 0; k < 1 + Math.floor(rnd() * 3); k++) { await el.press(pick(['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'])); log.wrongKeys++; } }
        }
        if (P.keyboard) { await F.locator('#check').focus(); await page.keyboard.press('Enter'); } else await F.locator('#check').click();
        log.attempts++;
        solved = await F.locator('#fb.is-ok').waitFor({ timeout: 700 }).then(() => true, () => false);
        if (!solved) {
          if (P.mash) { await F.locator('#check').click().catch(() => {}); log.attempts++; } // 연타
          if (rnd() < P.hint) { await F.locator('#hint').click(); log.hints++; }
          // 쉬움 권유가 뜨면 내려간다
          if (P.downLevel && await F.locator('#suggest [data-level="easy"]').count()) { await F.locator('#suggest [data-level="easy"]').click(); log.levelSwitches.push(`${st.key}→easy`); break; }
        }
      }
      if (solved) {
        // 다음 문항으로 넘어갈 때까지 기다린다(1·2학년 자동 읽기면 칭찬을 다 읽고 넘어가 더 오래 걸린다)
        await page.waitForTimeout(1250);
        for (let w = 0; w < 20; w++) { const k = await frameEval(() => { const S = window.__pl; const s = S.lesson.stages[S.stage]; return s.id === 'main' ? `${s.activities[S.act].id}.${S.item + 1}` : s.id; }); if (k !== st.key) break; await page.waitForTimeout(150); }
        if (P.upLevel && await F.locator('#suggest [data-level]').count().catch(() => 0)) {
          const lv = await F.locator('#suggest [data-level]').getAttribute('data-level');
          await F.locator('#suggest [data-level]').click(); log.levelSwitches.push(`${st.key}→${lv}`);
        }
      } else if (!log.levelSwitches.at(-1)?.startsWith(st.key)) {
        // 끝내 못 풀면 선생님 도움(모형): 정답 조작 후 넘어간다 — 첫 시도 정답으로는 세지 않는다
        log.notes.push(`${st.key}: ${P.patience}번 안에 못 풀어 선생님 도움`);
        await frameEval((tg) => window.__pl.tool.solve(tg), st.item.target);
        await F.locator('#check:not([disabled])').click({ timeout: 3000 }).catch(() => log.notes.push('도움 뒤 확인 단추 비활성')); await page.waitForTimeout(1250);
        for (let w = 0; w < 20; w++) { const k = await frameEval(() => { const S = window.__pl; const s = S.lesson.stages[S.stage]; return s.id === 'main' ? `${s.activities[S.act].id}.${S.item + 1}` : s.id; }); if (k !== st.key) break; await page.waitForTimeout(150); }
      }
    }
    // 출구 질문
    await F.locator('#exit').waitFor({ timeout: 5000 });
    const exit = lesson.stages[2].exitTicket;
    let right = 0; let asked = 0;
    for (let i = 0; i < exit.length; i++) {
      const q = exit[i]; think();
      const p = Math.min(0.97, Math.max(0.05, P.acc - difficulty - (q.difficulty || 0) + 0.05));
      if (q.type === 'choice') { asked++; const ok = rnd() < p; if (ok) right++; const v = ok ? q.answer : pick(q.options.map((_, k) => k).filter((k) => k !== q.answer)); await F.locator(`input[name="q${i}"][value="${v}"]`).check(); }
      if (q.type === 'tool') { asked++; if (rnd() < p) { right++; await frameEval(([i, t]) => window.__pl.exitTools[i].solve(t), [i, q.target]); } }
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
const report = { lesson: id, classCode: cls, students: N, received: rows.length, byRoute, difficulty, summary, students_log: logs.sort((a, b) => a.seat - b.seat), errors };
if (out) writeFileSync(out, JSON.stringify(report, null, 1));
console.log(JSON.stringify({ lesson: id, classCode: cls, received: `${rows.length}/${N}`, byRoute, firstTry: summary.firstTry, avgScore: summary.avgScore, levels: summary.levels, moods: summary.moods, recommendations: summary.recommendations, stuck: logs.filter((l) => l.notes.some((n) => n.startsWith('멈춤'))).length, errors: errors.slice(0, 10) }, null, 1));
process.exit(errors.length ? 1 : 0);
