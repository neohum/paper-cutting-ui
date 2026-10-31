#!/usr/bin/env node
// 예술·언어·코딩 조작기 자가 시험 — 차시의 실제 문항을 세 입력(마우스·터치·키보드)으로 조작 → #check → 정답 판정을 본다.
// 사용: node persona/drivers/_selftest-arts.mjs [--tools timer,collage,...] [--lessons id,id] [--personas mouse,touch,keyboard]
//        [--levels base,easy,challenge] [--max-items N] [--hub http://localhost:8791] [--all] [--quiet]
// 자가 시험에서만 window.__pl.goto 로 문항 위치에 간다(실제 runner 에서는 단추로만 이동한다).
import { readdirSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { chromium } from 'playwright-core';
import { findChrome } from '../../check-lesson.mjs';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..', '..');
const arg = (k, d) => { const i = process.argv.indexOf(`--${k}`); return i < 0 ? d : (process.argv[i + 1] || ''); };
const flag = (k) => process.argv.includes(`--${k}`);
const hub = arg('hub', 'http://localhost:8791');
const TOOLS = arg('tools', 'timer,collage,keyboard,hangul,block-coding').split(',').filter(Boolean);
const PERSONAS = arg('personas', 'mouse,touch,keyboard').split(',').filter(Boolean);
const LEVELS = arg('levels', 'base').split(',').filter(Boolean);
const MAXI = Number(arg('max-items', '4'));
const ONLY = arg('lessons', '').split(',').filter(Boolean);
const quiet = flag('quiet');

const VIEW = {
  mouse: { viewport: { width: 1366, height: 768 } },
  keyboard: { viewport: { width: 1366, height: 768 } },
  touch: { viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true, deviceScaleFactor: 2 },
};

// 교구별 차시 목록(단원 파일에서 tool: '<id>' 를 찾는다)
const unitsDir = join(root, 'lessons', 'units');
function lessonsOf(tool) {
  const out = [];
  for (const f of readdirSync(unitsDir).filter((x) => x.endsWith('.js') && !x.startsWith('_'))) {
    const src = readFileSync(join(unitsDir, f), 'utf8');
    if (src.includes(`tool: '${tool}'`)) out.push(f.replace(/\.js$/, ''));
  }
  return out;
}
async function lessonIds(page, unit, tool) {
  // 단원 파일을 읽어 그 교구를 전개 활동에서 쓰는 차시 id 만 돌려준다
  return page.evaluate(async ({ u, tool }) => {
    const L = window.PaperLessons;
    try { await L.loadScript(`${L.base}units/${u}.js`); } catch (_) { return []; }
    const un = L.unit(u); if (!un) return [];
    return (un.lessons || []).filter((l) => (l.stages || []).some((s) => (s.activities || []).some((a) => a.tool === tool))).map((l) => l.id);
  }, { u: unit, tool });
}

const drivers = {};
async function driverFor(tool) { return (drivers[tool] ??= await import(pathToFileURL(join(here, `${tool}.mjs`)).href)); }

// 직접 실행할 때만 돈다(다른 모듈이 import 해도 검사를 시작하지 않는다)
async function main() {
let browser = await chromium.launch({ executablePath: findChrome(), headless: true });
  // 다른 레인이 크롬을 정리하면 이 브라우저도 닫힌다 — 닫혔으면 다시 띄운다
  const alive = async () => { if (!browser.isConnected()) browser = await chromium.launch({ executablePath: findChrome(), headless: true }); return browser; };
const results = [];
const rows = [];
try {
  // 차시 id 찾기
  const probeCtx = await browser.newContext();
  const probe = await probeCtx.newPage();
  await probe.goto(`${hub}/edu-content-pool/lessons/player.html`);
  const plan = [];
  for (const tool of TOOLS) {
    let ids = [];
    for (const unit of lessonsOf(tool)) for (const id of await lessonIds(probe, unit, tool)) ids.push(id);
    ids = [...new Set(ids)];
    if (ONLY.length) ids = ids.filter((x) => ONLY.includes(x));
    plan.push({ tool, ids });
  }
  await probeCtx.close();

  for (const { tool, ids } of plan) {
    const mod = await driverFor(tool);
    let lessonsDone = 0;
    for (const id of ids) {
      if (!flag('all') && !ONLY.length && lessonsDone >= Number(arg('max-lessons', '2'))) break;
      let usedHere = false;
      for (const persona of PERSONAS) for (const level of LEVELS) {
        let ctx = null;
        for (let a = 0; a < 4 && !ctx; a++) { try { ctx = await (await alive()).newContext(VIEW[persona]); } catch (_) { try { await browser.close(); } catch (__) { /* 이미 닫힘 */ } browser = await chromium.launch({ executablePath: findChrome(), headless: true }); } }
        const page = await ctx.newPage();
        const consoleErrors = [];
        page.on('pageerror', (e) => consoleErrors.push(String(e.message)));
        try {
          await page.goto(`${hub}/edu-content-pool/lessons/player.html?lesson=${id}&role=student&class=SELFTEST&seat=1&level=${level}`);
          await page.waitForSelector('#stage', { timeout: 15000 });
          await page.waitForFunction(() => window.__pl && window.__pl.lesson, null, { timeout: 15000 });
          const list = await page.evaluate((tool) => {
            const S = window.__pl; const si = S.lesson.stages.findIndex((s) => s.id === 'main'); const out = [];
            (S.lesson.stages[si].activities || []).forEach((a, ai) => { if (a.tool === tool) a.items.forEach((it, ii) => out.push({ si, ai, ii })); });
            return out;
          }, tool);
          if (list.length) usedHere = true;
          let n = 0;
          for (const { si, ai, ii } of list) {
            const info = await page.evaluate(({ si, ai, ii }) => {
              const S = window.__pl; S.goto(si, ai, ii);
              const a = S.lesson.stages[si].activities[ai]; const F = window.PaperLessons.flow;
              const it = F.itemAt(a.items[ii], S.level); const s0 = F.itemStart(it, S.level);
              const opts = Object.assign({}, a.options || {}, (a.levels || {})[S.level] || {}, s0.toolOptions || {}, it.reveal === 'after-check' ? { revealAfterCheck: true } : {});
              return { target: it.target || null, options: opts, prompt: it.prompt, free: !!it.free, predict: !!it.predict, key: `${a.id}.${ii + 1}` };
            }, { si, ai, ii });
            if (info.free || !info.target) continue;
            if (n++ >= MAXI && !flag('all')) break;
            await page.waitForSelector('#tool svg, #tool .tm-panel, #tool [role]', { timeout: 8000 }).catch(() => {});
            const readState = () => page.evaluate(() => window.__pl.tool.getState());
            const t0 = Date.now();
            let res;
            try { res = await mod.drive({ page, root: '#tool', target: info.target, options: info.options, prompt: info.prompt, toolId: tool, persona: { input: persona }, readState, log: null }); }
            catch (e) { res = { reached: false, actions: 0, problems: [{ kind: 'driver-limit', msg: `throw ${e.message}` }] }; }
            // 예상 문항이면 먼저 아무 보기나 고른다(자가 시험에서만)
            if (info.predict) await page.locator('[data-predict="0"]').click().catch(() => {});
            await page.locator('#check').click().catch(() => {});
            await page.waitForTimeout(250);
            const fb = await page.evaluate(() => { const f = document.querySelector('#fb'); return { cls: f ? f.className : '', text: (f ? f.innerText : '').trim().slice(0, 90) }; });
            const ok = /is-ok/.test(fb.cls);
            const row = { tool, lesson: id, persona, level, key: info.key, reached: res.reached, ok, actions: res.actions, ms: Date.now() - t0, problems: res.problems, fb: fb.text, errs: consoleErrors.slice(0, 1) };
            rows.push(row);
            if (!quiet || !ok) console.log(JSON.stringify(row));
          }
        } catch (e) {
          const closed = /closed|disconnected|crash/i.test(String(e.message));
          rows.push({ tool, lesson: id, persona, level, key: '(load)', reached: false, ok: false, infra: closed, problems: [{ kind: closed ? 'driver-limit' : 'ui-error', msg: String(e.message).split('\n')[0] }] });
          console.log(JSON.stringify(rows[rows.length - 1]));
        } finally { await ctx.close(); }
      }
      if (usedHere) lessonsDone++;
    }
  }
} finally { await browser.close(); }

// 요약
const by = {};
for (const r of rows) { const k = `${r.tool}/${r.persona}`; (by[k] ??= { n: 0, ok: 0, reachedNotOk: 0 }); by[k].n++; if (r.ok) by[k].ok++; else if (r.reached) by[k].reachedNotOk++; }
console.log('\n== 요약(교구/입력: 정답 판정 통과 / 시도) ==');
for (const [k, v] of Object.entries(by)) console.log(`${k}: ${v.ok}/${v.n}${v.reachedNotOk ? ` (조작기는 도달이라 했으나 오답 ${v.reachedNotOk})` : ''}`);
const kinds = {};
for (const r of rows) for (const p of r.problems || []) { const k = `${r.tool}|${p.kind}`; kinds[k] = (kinds[k] || 0) + 1; }
console.log('problems:', JSON.stringify(kinds));
process.exit(rows.every((r) => r.ok) ? 0 : 1);
}
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) await main();
