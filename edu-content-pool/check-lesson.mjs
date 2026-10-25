#!/usr/bin/env node
// 차시 자동 검사 — 정적 계약 + 실브라우저로 40분 흐름을 끝까지 풀고 제출까지 한다.
// 사용: node edu-content-pool/check-lesson.mjs <lessonId> [--hub http://localhost:8790] [--shots <dir>]
// classroom-hub.mjs가 떠 있어야 한다. 종료 코드 1 = 실패 항목 있음.
import { existsSync, mkdirSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';
import { chromium } from 'playwright-core';

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
  }
  const p = lesson.illustration?.prompt || '';
  if (!p.startsWith(PROMPT_HEAD) || !p.endsWith(PROMPT_TAIL)) fail('illustration.prompt가 지정 문장 틀과 다름');
  if (!lesson.worksheet?.items?.length) fail('worksheet.items 없음');
  if (!/[다]\.$/.test(lesson.objective || '')) fail('objective는 "~할 수 있다."로 끝나야 함');
  if (!lesson.catalog?.unit) fail('catalog.unit 없음');
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
  if (shots) await page.screenshot({ path: join(shots, `${id}-1-intro.png`) });
  await page.click('[data-next]');
  let guard = 0; let n = 0;
  while (guard++ < 40) {
    const where = await page.evaluate(() => window.__pl.lesson.stages[window.__pl.stage].id);
    if (where !== 'main') break;
    const info = await page.evaluate(() => { const S = window.__pl; const a = S.lesson.stages[S.stage].activities[S.act]; return { item: a.items[S.item], key: `${a.id}.${S.item + 1}`, hasSolve: typeof S.tool.solve === 'function' }; });
    if (!info.item.free) {
      // 처음 상태가 이미 정답이면 문항이 무의미하다
      const pre = await page.evaluate((t) => window.__pl.tool.check(t).correct, info.item.target);
      if (pre) fail(`${info.key}: 시작 상태가 이미 정답`);
      if (!info.hasSolve) { fail(`${info.key}: 교구에 solve() 없음`); break; }
      await page.evaluate((t) => window.__pl.tool.solve(t), info.item.target);
      // 오답 피드백(힌트) 경로는 solve 전에 한 번 확인해 두는 대신 check 반환 모양만 본다
    }
    if (info.item.free && !(await nudge(page, page))) fail(`${info.key}: 짝 활동 교구를 키보드로 움직일 수 없음`);
    if (shots && n < 3) await page.screenshot({ path: join(shots, `${id}-2-act-${++n}.png`) });
    await page.click('#check');
    if (!info.item.free) {
      const ok = await page.waitForSelector('#fb.is-ok', { timeout: 3000 }).then(() => true, () => false);
      if (!ok) { fail(`${info.key}: solve 뒤 확인이 정답 처리되지 않음 (${await page.textContent('#fb')})`); break; }
      await page.waitForTimeout(1300);
      await page.waitForFunction((k) => { const S = window.__pl; const s = S.lesson.stages[S.stage]; return s.id !== 'main' || `${s.activities[S.act].id}.${S.item + 1}` !== k; }, info.key, { timeout: 4000 }).catch(() => {});
    } else await page.waitForTimeout(200);
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
await browser.close();
for (const e of errors) fail(e);
console.log(JSON.stringify({ lesson: id, ok: fails.length === 0, fails, notes }, null, 1));
process.exit(fails.length ? 1 : 0);
