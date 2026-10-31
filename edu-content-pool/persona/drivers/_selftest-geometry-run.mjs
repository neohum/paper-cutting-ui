// 도형·공간·지도 조작기 자가 시험.
// 사용: node persona/drivers/_selftest-geometry.mjs [--hub http://localhost:8791] [--tool shapes,map] [--input mouse,touch,phone,keyboard] [--lessons 2] [--items 12] [--verbose]
// 차시마다 교구 문항으로 __pl.goto 로 이동한다(자가 시험에서만 — 실제 runner 는 금지). 조작은 조작기가 하고, 정답 판정은 #check 로 본다.
import { chromium } from 'playwright-core';
import { findChrome } from '../../check-lesson.mjs';
import { pathToFileURL } from 'node:url';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { readdirSync, existsSync } from 'node:fs';

const here = dirname(fileURLToPath(import.meta.url));
const arg = (k, d) => { const i = process.argv.indexOf(k); return i > 0 ? process.argv[i + 1] : d; };
const hub = arg('--hub', 'http://localhost:8791');
const ALL = ['shapes', 'protractor', 'rightangle', 'compass', 'mirrorfold', 'cubenet', 'cylnet', 'circlearea', 'map', 'mapcompass'];
const toolsWanted = (arg('--tool', ALL.join(',')) || '').split(',').filter(Boolean);
const inputs = (arg('--input', 'mouse,touch,keyboard') || '').split(',').filter(Boolean);
const lessonsPerTool = Number(arg('--lessons', 2));
const itemsPerLesson = Number(arg('--items', 12));
const verbose = process.argv.includes('--verbose');
const unitsDir = join(here, '..', '..', 'lessons', 'units');

const PERSONA = {
  mouse: { input: 'mouse', viewport: { width: 1366, height: 768 }, hasTouch: false },
  touch: { input: 'touch', viewport: { width: 1024, height: 768 }, hasTouch: true, isMobile: true, deviceScaleFactor: 2 },
  phone: { input: 'touch', viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true, deviceScaleFactor: 3 },
  keyboard: { input: 'keyboard', viewport: { width: 1366, height: 768 }, hasTouch: false },
};

const launch = () => chromium.launch({ executablePath: findChrome(), headless: true });
const scanBrowser = await launch();

// 1) 이 교구를 쓰는 문항을 모두 훑는다
const scanPage = await scanBrowser.newPage();
await scanPage.goto(`${hub}/edu-content-pool/lessons/player.html?lesson=g4-math-2-02-01&role=student`);
await scanPage.waitForSelector('[data-next]');
const units = readdirSync(unitsDir).filter((f) => /^g\d/.test(f)).map((f) => f.replace('.js', ''));
const catalog = await scanPage.evaluate(async ({ units, tools }) => {
  const out = [];
  for (const u of units) for (let n = 1; n <= 24; n++) {
    const id = `${u}-${String(n).padStart(2, '0')}`; let l;
    try { l = await window.PaperLessons.load(id); } catch (_) { break; }
    l.stages.forEach((s, si) => { if (s.id !== 'main') return; s.activities.forEach((a, ai) => { if (!tools.includes(a.tool)) return;
      a.items.forEach((it, ii) => {
        const it2 = window.PaperLessons.flow.itemAt(it, 'base'); const st0 = window.PaperLessons.flow.itemStart(it2, 'base');
        const opts = Object.assign({}, a.options || {}, (a.levels || {}).base || {}, st0.toolOptions || {}, it2.reveal === 'after-check' ? { revealAfterCheck: true } : {});
        out.push({ id, si, ai, ii, tool: a.tool, mode: opts.mode || '', keys: Object.keys(it2.target || {}).sort().join(','), free: !!it2.free, talk: !!it2.talk });
      }); }); });
  }
  return out;
}, { units, tools: toolsWanted });
await scanPage.close(); await scanBrowser.close();

const results = [];
for (const tool of toolsWanted) {
  const items = catalog.filter((x) => x.tool === tool && !x.talk);
  if (!items.length) { console.log(`[${tool}] 차시 문항이 없음`); continue; }
  // 서로 다른 (모드, 목표 모양) 을 가장 많이 덮는 차시를 고른다
  const sigOf = (x) => `${x.mode}|${x.keys}|${x.free}`;
  const byLesson = {}; for (const x of items) (byLesson[x.id] ??= []).push(x);
  const covered = new Set(); const chosen = [];
  const forced = (arg('--lesson', '') || '').split(',').filter((id) => byLesson[id]);
  forced.forEach((id) => chosen.push(id));
  while (!forced.length && chosen.length < lessonsPerTool) {
    let best = null; let bestGain = -1;
    for (const [id, xs] of Object.entries(byLesson)) { if (chosen.includes(id)) continue; const gain = new Set(xs.map(sigOf).filter((s) => !covered.has(s))).size; if (gain > bestGain) { bestGain = gain; best = id; } }
    if (!best) break; chosen.push(best); byLesson[best].forEach((x) => covered.add(sigOf(x)));
  }
  for (const lessonId of chosen) {
    // 한 차시 안에서도 서로 다른 모양을 먼저 훑는다
    const xs = byLesson[lessonId]; const seen = new Set(); const pick = [];
    for (const x of xs) { const s = sigOf(x); if (!seen.has(s)) { seen.add(s); pick.push(x); } }
    for (const x of xs) if (pick.length < itemsPerLesson && !pick.includes(x)) pick.push(x);
    const todo = pick.slice(0, itemsPerLesson);
    const drv = await import(pathToFileURL(join(here, `${tool}.mjs`)).href);
    for (const inp of inputs) {
      for (let attempt = 0; attempt < 2; attempt++) {
        const before = results.length;
        let browser;
        try { browser = await launch(); await runInput(browser, inp, drv, lessonId, todo, tool); break; }
        catch (e) {
          results.length = before;
          console.log(`   (브라우저가 중간에 닫힘 — ${attempt ? '건너뜀' : '다시 시도'}: ${String(e.message).split('\n')[0].slice(0, 80)})`);
        } finally { await browser?.close().catch(() => {}); }
      }
    }
  }
}
const pass = results.filter((r) => r.ok).length;
console.log(`\n== 합계 ${pass}/${results.length} 통과`);
const byTool = {};
for (const r of results) { const k = `${r.tool}/${r.input}`; byTool[k] ??= [0, 0]; byTool[k][1]++; if (r.ok) byTool[k][0]++; }
for (const [k, v] of Object.entries(byTool)) console.log(`   ${k}: ${v[0]}/${v[1]}`);
process.exit(0);

async function runInput(browser, inp, drv, lessonId, todo, tool) {
      const P = PERSONA[inp];
      const ctx = await browser.newContext({ viewport: P.viewport, hasTouch: P.hasTouch, isMobile: !!P.isMobile, deviceScaleFactor: P.deviceScaleFactor || 1, locale: 'ko-KR' });
      const page = await ctx.newPage();
      const errors = [];
      page.on('pageerror', (e) => errors.push(`pageerror: ${e.message}`));
      page.on('console', (m) => { if (m.type() === 'error' && !/favicon|Failed to load resource/.test(m.text())) errors.push(`console: ${m.text()}`); });
      await page.goto(`${hub}/edu-content-pool/lessons/player.html?lesson=${lessonId}&role=student&class=pst${Date.now() % 100000}&seat=${1 + (Math.random() * 20 | 0)}`);
      await page.waitForSelector('[data-next]', { timeout: 10000 });
      await page.click('[data-next]');
      for (const x of todo) {
        errors.length = 0;
        await page.evaluate(([si, ai, ii]) => window.__pl.goto(si, ai, ii), [x.si, x.ai, x.ii]);
        await page.waitForSelector('#tool .pk-stage, #tool button, #tool [role=group]', { timeout: 5000 }).catch(() => {});
        await page.waitForTimeout(250);
        const info = await page.evaluate(() => {
          const S = window.__pl; const a = S.lesson.stages[S.stage].activities[S.act]; const it = window.PaperLessons.flow.itemAt(a.items[S.item], S.level);
          const st0 = window.PaperLessons.flow.itemStart(it, S.level);
          const options = Object.assign({}, a.options || {}, (a.levels || {})[S.level] || {}, st0.toolOptions || {}, it.reveal === 'after-check' ? { revealAfterCheck: true } : {});
          return { target: it.target, options, prompt: it.prompt, toolId: a.tool, free: !!it.free, predict: !!it.predict, key: `${a.id}.${S.item + 1}` };
        });
        if (info.predict) await page.click('[data-predict="0"]').catch(() => {});
        const readState = () => page.evaluate(() => window.__pl.tool.getState());
        const t0 = Date.now();
        let r;
        try { r = await drv.drive({ page, root: "#tool", target: info.free ? undefined : info.target, options: info.options, prompt: info.prompt, toolId: info.toolId, persona: P, readState, log: () => {} }); }
        catch (e) { r = { reached: false, actions: 0, problems: [{ kind: 'ui-error', msg: `조작기 예외: ${e.message}` }] }; }
        let checked = ''; let feedback = '';
        try {
          await page.click('#check', { timeout: 3000 });
          await page.waitForFunction(() => { const f = document.querySelector('#fb'); return f && f.textContent.trim().length > 0; }, null, { timeout: 2500 }).catch(() => {});
          await page.waitForTimeout(150);
          checked = await page.evaluate(() => { const f = document.querySelector('#fb'); return f.className.replace(/pl-feedback\s*/, '').trim() || 'none'; });
          feedback = (await page.textContent('#fb')).trim().slice(0, 80);
        } catch (e) { checked = 'check-error'; }
        let ok = /is-ok/.test(checked);
        if (info.free) { ok = await page.evaluate((k) => !!(window.__pl.items[k] && window.__pl.items[k].correct), info.key); checked = ok ? 'free-done' : 'free-not-done'; }
        const row = { tool, lesson: x.id, item: `${x.si}.${x.ai}.${x.ii}`, input: inp, mode: x.mode, target: info.free ? '(free)' : JSON.stringify(info.target), reached: r.reached, ok, checked, feedback, actions: r.actions, ms: Date.now() - t0, problems: r.problems, errors: errors.slice() };
        results.push(row);
        console.log(`${ok ? 'PASS' : 'FAIL'} ${tool} ${x.id} [${row.item}] ${inp} reached=${r.reached} act=${r.actions} ${row.ms}ms ${row.problems.map((p) => p.kind).join(',')}${errors.length ? ' ERR' : ''}`);
        if (!ok || verbose || row.problems.length || errors.length) console.log(`   target=${row.target.slice(0, 160)} fb="${feedback}" ${row.problems.map((p) => `${p.kind}: ${p.msg}`).join(' / ')} ${errors.slice(0, 2).join(' / ')}`);
      }
      await ctx.close();

}
