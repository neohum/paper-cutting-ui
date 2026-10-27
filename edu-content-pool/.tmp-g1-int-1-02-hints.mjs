import { chromium } from 'playwright-core';
import { findChrome } from './check-lesson.mjs';
const hub = 'http://localhost:10002';
const browser = await chromium.launch({ executablePath: findChrome() || undefined, headless: true });
const P = await browser.newPage();
for (let n = 41; n <= 48; n++) {
  const lid = `g1-int-1-02-${n}`;
  await P.goto(`${hub}/edu-content-pool/lessons/player.html?lesson=${lid}&role=teacher`);
  await P.waitForSelector('[data-next]', { timeout: 8000 });
  const out = await P.evaluate(() => {
    const S = window.__pl; const Fl = window.PaperLessons.flow; const acts = S.lesson.stages[1].activities; const res = [];
    for (let x = 0; x < acts.length; x++) for (let y = 0; y < acts[x].items.length; y++) {
      const it0 = acts[x].items[y]; if (it0.free) continue;
      for (const lv of ['easy', 'base', 'challenge']) {
        const it = Fl.itemAt(it0, lv); delete S.items[`${acts[x].id}.${y + 1}`]; S.level = lv; S.goto(1, x, y); const T = S.tool;
        const w = T.wrongAnswer ? T.wrongAnswer(it.target) : null;
        const hs = [];
        for (let k = 1; k <= 3; k++) { if (w) T.setState(JSON.parse(JSON.stringify(w))); const h = Fl.askHint(T, it.target, { level: k, attempts: k - 1, hints: it.hints }); hs.push(h.hint); }
        const c = w ? (T.setState(JSON.parse(JSON.stringify(w))), T.check(it.target, { forHint: true })) : {};
        const ach = T.achievable ? T.achievable(it.target) : 'n/a';
        res.push(`${acts[x].id}.${y + 1} [${lv}] ach=${ach} fb=${c.feedback || ''}\n   H: ${hs.join(' | ')}`);
        if (!it0.levels && lv === 'easy') { /* still show others */ }
      }
    }
    return res;
  });
  console.log(`== ${lid}`); console.log(out.join('\n'));
}
await browser.close();
