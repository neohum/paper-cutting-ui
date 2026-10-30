import { chromium } from 'playwright-core';
import { findChrome } from './check-lesson.mjs';
const hub = 'http://localhost:10002';
const SP = 'C:/Users/user/AppData/Local/Temp/claude/D--works-all-market/d262d3b4-fda8-4d7d-8acd-e9623369ef1d/scratchpad/units/g1-int-1-02';
// cases: [lesson, act, item, level, pieces[[shape,color,size,dx,dy]], name]
const NAMES = { circle: '동그라미', square: '네모', triangle: '세모', heart: '하트', star: '별' };
const SZ = { m: '보통', l: '크게', s: '작게' };
const cases = [
  ['g1-int-1-02-42', 1, 1, 'easy', [['circle', '빨강', 'm', -8, 0], ['circle', '노랑', 'm', -5, 0], ['circle', '빨강', 'm', -2, 0], ['circle', '노랑', 'm', 1, 0]], '42-easy-chain'],
  ['g1-int-1-02-42', 1, 1, 'challenge', [['circle', '빨강', 'm', -10, 0], ['circle', '노랑', 'm', -7, 0], ['circle', '빨강', 'm', -4, 0], ['circle', '노랑', 'm', -1, 0], ['circle', '빨강', 'm', 2, 0], ['circle', '노랑', 'm', 5, 0]], '42-chal-chain'],
  ['g1-int-1-02-47', 1, 1, 'easy', [['heart', '분홍', 'm', 5, -4]], '47-easy-sym'],
  ['g1-int-1-02-47', 1, 1, 'challenge', [['heart', '분홍', 'm', 5, -4], ['circle', '빨강', 'm', 6, 5]], '47-chal-sym'],
  ['g1-int-1-02-48', 1, 1, 'challenge', [['heart', '빨강', 'm', -5, -4], ['heart', '주황', 'm', 5, -4], ['heart', '분홍', 'm', 0, 6]], '48-chal-hearts'],
  ['g1-int-1-02-46', 0, 1, 'easy', [['circle', '주황', 'm', -6, -4], ['triangle', '주황', 'm', -9, -4], ['circle', '주황', 'm', 5, 5], ['triangle', '주황', 'm', 8, 5]], '46-easy-fish'],
  ['g1-int-1-02-43', 1, 1, 'challenge', [['circle', '초록', 'm', -2, -5], ['heart', '초록', 'm', 2, -5], ['circle', '노랑', 'm', 9, -7]], '43-chal-sprout'],
];
const browser = await chromium.launch({ executablePath: findChrome() || undefined, headless: true });
const P = await browser.newPage({ viewport: { width: 1280, height: 900 } });
for (const [lesson, act, item, level, pieces, name] of cases) {
  await P.goto(`${hub}/edu-content-pool/lessons/player.html?lesson=${lesson}&level=${level}`);
  await P.waitForTimeout(1200);
  await P.evaluate(([a, i]) => window.__pl.goto(1, a, i), [act, item]);
  await P.waitForTimeout(600);
  for (const [shape, color, size, dx, dy] of pieces) {
    await P.click(`#tool .cg-pick[data-k][data-v="${shape}"]`);
    await P.click(`#tool .cg-pick[data-v="${color}"]`);
    await P.click(`#tool .cg-pick[data-v="${size}"]`);
    await P.click('#tool [data-cg="add"]');
    await P.waitForTimeout(100);
    for (let k = 0; k < Math.abs(dx); k++) await P.keyboard.press(dx < 0 ? 'ArrowLeft' : 'ArrowRight');
    for (let k = 0; k < Math.abs(dy); k++) await P.keyboard.press(dy < 0 ? 'ArrowUp' : 'ArrowDown');
  }
  const st = await P.evaluate(() => JSON.stringify(window.__pl.tool.getState().pieces.map((p) => `${p.color}${p.shape}${p.size}@${p.x},${p.y}`)));
  const btn = await P.$$('button'); let clicked = false;
  for (const b of btn) { const t = (await b.textContent()).trim(); if (t === '확인' || t.endsWith(' 확인')) { if (await b.isVisible()) { await b.click(); clicked = true; break; } } }
  await P.waitForTimeout(700);
  const fb = await P.evaluate(() => (document.querySelector('.pl-feedback, [class*=feedback]') || {}).textContent || '');
  console.log(name, clicked, st, '\n   →', fb.trim().slice(0, 160));
  await P.screenshot({ path: `${SP}/${name}.png` });
}
await browser.close();
