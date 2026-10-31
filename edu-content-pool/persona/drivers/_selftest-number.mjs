#!/usr/bin/env node
// 수·측정 교구 조작기 자가 시험 — 실제 차시를 세 입력으로 조작하고 #check 로 정답 판정을 본다.
// 사용: node persona/drivers/_selftest-number.mjs [--tools numberline,clock] [--persona mouse,touch,keyboard]
//        [--lessons 2] [--levels base] [--hub http://localhost:8791] [--only <차시 id>] [-v]
// 자가 시험에서만 window.__pl.goto 로 문항 위치에 간다(실제 runner 에서는 금지). 상태를 쓰는 호출은 쓰지 않는다.
import { readFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import vm from 'node:vm';
import { chromium } from 'playwright-core';
import { findChrome } from '../../check-lesson.mjs';

const isMain = process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;
async function main() {
const here = dirname(fileURLToPath(import.meta.url));
const pool = join(here, '..', '..');
const arg = (k, d) => { const i = process.argv.indexOf(k); return i > 0 ? process.argv[i + 1] : d; };
const hub = arg('--hub', 'http://localhost:8791');
const ALL = 'numberline pattern multiply tenframe fraction fracstrips clock measure ratiobar chart'.split(' ');
const tools = (arg('--tools', ALL.join(',')) || '').split(',').filter(Boolean);
const personas = arg('--persona', 'mouse,touch,keyboard').split(',');
const perTool = Number(arg('--lessons', '2'));
const levels = arg('--levels', 'base').split(',');
const only = arg('--only', null);
const verbose = process.argv.includes('-v');

const VIEW = { mouse: { width: 1366, height: 768 }, touch: { width: 390, height: 844 }, keyboard: { width: 1366, height: 768 } };

// ---- 차시 색인: 교구별로 모양(모드·target 키)이 다른 차시를 먼저 고른다 ----
function scan() {
  const idx = {};
  const dir = join(pool, 'lessons/units');
  for (const f of readdirSync(dir)) {
    if (f.startsWith('_')) continue;
    let unit = null;
    try { vm.runInNewContext(readFileSync(join(dir, f), 'utf8'), { PaperLessons: { registerUnit(u) { unit = u; }, register() {} } }); } catch (_) { continue; }
    for (const l of unit?.lessons || []) {
      for (const st of l.stages || []) for (const a of st.activities || []) {
        if (!tools.includes(a.tool)) continue;
        const rec = ((idx[a.tool] ??= {})[l.id] ??= { sigs: new Set(), items: 0 });
        for (const it of a.items || []) {
          if (it.free || !it.target) continue;
          rec.items++;
          for (const lv of levels) {
            const o = Object.assign({}, a.options, (a.levels || {})[lv], it.toolOptions, ((it.levels || {})[lv] || {}).toolOptions);
            rec.sigs.add(`${o.mode || ''}${o.type || ''}${o.kind || ''}${o.shape || ''}${o.by || ''}|${Object.keys(it.target).sort().join('+')}`);
          }
        }
      }
    }
  }
  const pick = {};
  for (const t of tools) {
    const all = Object.entries(idx[t] || {}).filter(([, r]) => r.items > 0);
    const chosen = []; const covered = new Set();
    for (let round = 0; round < perTool || (round < 12 && all.some(([id, r]) => !chosen.includes(id) && [...r.sigs].some((s) => !covered.has(s)))); round++) {
      let best = null; let bestGain = -1;
      for (const [id, r] of all) { if (chosen.includes(id)) continue; const gain = [...r.sigs].filter((s) => !covered.has(s)).length; if (gain > bestGain) { best = id; bestGain = gain; } }
      if (!best) break;
      if (bestGain === 0 && round >= perTool) break;
      chosen.push(best); idx[t][best].sigs.forEach((s) => covered.add(s));
    }
    pick[t] = only ? all.map(([id]) => id).filter((id) => id === only) : chosen;
  }
  return pick;
}

const chrome = findChrome();
const browser = await chromium.launch({ executablePath: chrome, headless: true });
const drivers = {};
async function driverFor(tool) {
  if (!drivers[tool]) drivers[tool] = await import(pathToFileURL(join(here, `${tool}.mjs`)).href);
  return drivers[tool];
}

const rows = []; const lessonPlan = scan();
for (const t of tools) console.log(`# ${t}: ${(lessonPlan[t] || []).join(', ') || '(차시 없음)'}`);
for (const tool of tools) {
  const mod = await driverFor(tool).catch((e) => { console.log(`!! ${tool}: 조작기를 읽을 수 없음 ${e.message}`); return null; });
  if (!mod) continue;
  for (const lessonId of lessonPlan[tool] || []) {
    for (const input of personas) for (const level of levels.filter((lv) => lv === 'base' || input === 'mouse')) {
      const ctx = await browser.newContext({ viewport: VIEW[input], hasTouch: input === 'touch', isMobile: input === 'touch' });
      const page = await ctx.newPage();
      const errors = [];
      page.on('pageerror', (e) => errors.push(`pageerror ${e.message}`));
      page.on('console', (m) => { if (m.type() === 'error' && !/fonts|uicons|favicon|_cards\.js|Failed to load resource/.test(m.text() + (m.location()?.url || ''))) errors.push(`console ${m.text().slice(0, 160)}`); });
      await page.goto(`${hub}/edu-content-pool/lessons/player.html?lesson=${lessonId}&role=student&class=ST&seat=1&level=${level}`);
      await page.waitForFunction(() => window.__pl && window.__pl.lesson, null, { timeout: 15000 }).catch(() => {});
      const shape = await page.evaluate((t) => { const S = window.__pl; if (!S || !S.lesson) return null; return (S.lesson.stages[1].activities || []).map((a, ai) => ({ ai, tool: a.tool, n: a.items.length })).filter((a) => a.tool === t); }, tool);
      if (!shape) { console.log(`!! ${lessonId}: 차시를 열 수 없음`); await ctx.close(); continue; }
      for (const { ai, n } of shape) for (let ii = 0; ii < n; ii++) {
        errors.length = 0;
        const meta = await page.evaluate(([a, i]) => {
          const S = window.__pl; S.goto(1, a, i);
          const act = S.lesson.stages[1].activities[a]; const F = window.PaperLessons.flow;
          const it = F.itemAt(act.items[i], S.level); const start = F.itemStart(it, S.level);
          return { free: !!it.free || !it.target, target: it.target, prompt: it.prompt, options: Object.assign({}, act.options, (act.levels || {})[S.level], start.toolOptions, it.reveal === 'after-check' ? { revealAfterCheck: true } : {}) };
        }, [ai, ii]);
        if (meta.free) continue;
        await page.waitForSelector('#tool *', { timeout: 5000 }).catch(() => {});
        await page.waitForTimeout(80);
        const pred = page.locator('[data-predict]'); if (await pred.count()) { await pred.first().click().catch(() => {}); }
        const readState = () => page.evaluate(() => JSON.parse(JSON.stringify(window.__pl.tool.getState())));
        let r; const t0 = Date.now();
        try {
          r = await mod.drive({ page, root: '#tool', target: meta.target, options: meta.options, prompt: meta.prompt, toolId: tool, persona: { input }, readState, log: verbose ? console.log : () => {} });
        } catch (e) { r = { reached: false, actions: 0, problems: [{ kind: 'ui-error', msg: `조작기 예외 ${e.message.slice(0, 200)}` }], threw: true }; }
        // 정답 판정: #check 를 눌러 화면 피드백을 본다
        let checked = null;
        try {
          const chk = page.locator('#check');
          for (let w = 0; w < 25 && (await chk.isDisabled().catch(() => false)); w++) await page.waitForTimeout(100);
          await chk.click({ timeout: 3000 });
          await page.waitForTimeout(250);
          checked = await page.evaluate(() => { const fb = document.querySelector('#fb'); const n = document.querySelector('#fb-note'); return { ok: !!fb?.classList.contains('is-ok'), no: !!fb?.classList.contains('is-no'), fb: (fb?.innerText || '').trim().slice(0, 90), note: n && !n.hidden ? n.innerText.trim().slice(0, 60) : '' }; });
        } catch (e) { checked = { ok: false, fb: `check 실패 ${e.message.slice(0, 60)}` }; }
        const row = { tool, lesson: lessonId, act: ai, item: ii, input, level, reached: r.reached, ok: checked.ok, actions: r.actions, problems: r.problems || [], fb: checked.fb, errors: errors.slice(), ms: Date.now() - t0, prompt: (meta.prompt || '').slice(0, 50), target: JSON.stringify(meta.target).slice(0, 80) };
        rows.push(row);
        const flag = row.ok ? 'PASS' : r.problems?.some((p) => p.kind === 'driver-limit') ? 'LIMIT' : r.problems?.some((p) => ['unreachable', 'control-missing', 'no-keyboard-path'].includes(p.kind)) ? 'DEFECT' : 'FAIL';
        if (flag !== 'PASS' || verbose) console.log(`${flag} ${tool} ${lessonId} a${ai}.${ii} ${input}/${level} reached=${row.reached} act=${row.actions} ${row.prompt} ${row.target}\n     fb="${row.fb}" ${row.problems.map((p) => `[${p.kind}] ${p.msg}`).join(' ; ')} ${row.errors.join(' | ')}`);
      }
      await ctx.close();
    }
  }
}
await browser.close();
// 요약
const sum = {};
for (const r of rows) { const k = `${r.tool}/${r.input}`; const s = (sum[k] ??= { n: 0, pass: 0, reached: 0 }); s.n++; if (r.ok) s.pass++; if (r.reached) s.reached++; }
console.log('\n== 요약 (교구/입력: 문항 · 정답판정 · 조작기 reached) ==');
for (const [k, s] of Object.entries(sum)) console.log(`${k.padEnd(20)} ${String(s.n).padStart(3)} 문항  정답 ${String(s.pass).padStart(3)}  reached ${String(s.reached).padStart(3)}`);
const kinds = {};
for (const r of rows) for (const p of r.problems) { const k = `${r.tool}:${p.kind}`; (kinds[k] ??= new Set()).add(`${r.lesson}#a${r.act}.${r.item}(${r.input}) ${p.msg.slice(0, 80)}`); }
console.log('\n== 문제 종류 ==');
for (const [k, v] of Object.entries(kinds)) console.log(`${k}: ${v.size}건`, [...v].slice(0, 3));
process.exit(0);
}
if (isMain) await main();
