import { chromium } from 'playwright-core';
import { findChrome } from './check-lesson.mjs';
const hub = 'http://localhost:10002';
const SP = 'C:/Users/user/AppData/Local/Temp/claude/D--works-all-market/d262d3b4-fda8-4d7d-8acd-e9623369ef1d/scratchpad/units/g1-int-1-02';
const cases = [
  ['easy', [['heart', '분홍', 'm', 380, 120]], '47-easy-sym'],
  ['challenge', [['heart', '분홍', 'm', 380, 120], ['circle', '빨강', 'm', 400, 300]], '47-chal-sym'],
  ['base', [['heart', '분홍', 'm', 360, 120]], '47-base-sym-off-by-one'],
];
const browser = await chromium.launch({ executablePath: findChrome() || undefined, headless: true });
const P = await browser.newPage({ viewport: { width: 1280, height: 900 } });
for (const [level, pieces, name] of cases) {
  await P.goto(`${hub}/edu-content-pool/lessons/player.html?lesson=g1-int-1-02-47&level=${level}`);
  await P.waitForTimeout(1200);
  await P.evaluate(() => window.__pl.goto(1, 1, 1)); await P.waitForTimeout(600);
  for (const [shape, color, size, tx, ty] of pieces) {
    await P.click(`#tool .cg-pick[data-v="${shape}"]`); await P.click(`#tool .cg-pick[data-v="${color}"]`); await P.click(`#tool .cg-pick[data-v="${size}"]`);
    await P.click('#tool [data-cg="add"]'); await P.waitForTimeout(100);
    for (let g = 0; g < 60; g++) {
      const p = await P.evaluate(() => { const ps = window.__pl.tool.getState().pieces; return ps[ps.length - 1]; });
      if (p.x === tx && p.y === ty) break;
      await P.keyboard.press(p.x < tx ? 'ArrowRight' : p.x > tx ? 'ArrowLeft' : p.y < ty ? 'ArrowDown' : 'ArrowUp');
    }
  }
  const st = await P.evaluate(() => JSON.stringify(window.__pl.tool.getState().pieces.map((p) => `${p.color}${p.shape}${p.size}@${p.x},${p.y}r${p.r}`)));
  for (const b of await P.$$('button')) { const t = (await b.textContent()).trim(); if ((t === '확인' || t.endsWith(' 확인')) && await b.isVisible()) { await b.click(); break; } }
  await P.waitForTimeout(700);
  const fb = await P.evaluate(() => (document.querySelector('.pl-feedback, [class*=feedback]') || {}).textContent || '');
  console.log(name, st, '\n   →', fb.trim().slice(0, 160));
  await P.screenshot({ path: `${SP}/${name}.png` });
}
await browser.close();
