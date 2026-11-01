#!/usr/bin/env node
// 카드 엔진 교구 조작기 자가 시험 — 실제 차시를 마우스·터치·키보드로 조작하고 #check 로 정답 판정을 본다.
// 사용: node persona/drivers/_selftest-cards.mjs [--tools mindmap,story,...] [--modes sort,order,...] [--persona mouse,touch,keyboard]
//        [--lessons 2] [--items 2] [--jobs 3] [--only <차시 id>] [--hub http://localhost:8791] [--json out.json] [-v]
// 자가 시험에서만 window.__pl.goto 로 문항 위치에 간다(실제 runner 에서는 금지). 상태를 쓰는 호출은 쓰지 않는다.
// 같은 차시를 여러 번 도는 차시마다 입력 변형을 번갈아 쓴다: (마우스) 끌기/누르기, (터치) 누르기/끌기, (키보드) Enter 흐름/숫자키.
import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import vm from 'node:vm';
import { chromium } from 'playwright-core';
import { findChrome } from '../../check-lesson.mjs';

const here = dirname(fileURLToPath(import.meta.url));
const pool = join(here, '..', '..');
const arg = (k, d) => { const i = process.argv.indexOf(k); return i > 0 ? process.argv[i + 1] : d; };
const hub = arg('--hub', 'http://localhost:8791');
const ALL = 'mindmap story wordcards emotion timeline kitchen economy lifecycle sortboard'.split(' ');
const tools = arg('--tools', ALL.join(',')).split(',').filter(Boolean);
const modeFilter = arg('--modes', '').split(',').filter(Boolean);
const personas = arg('--persona', 'mouse,touch,keyboard').split(',');
const perMode = Number(arg('--lessons', '2'));
const perLesson = Number(arg('--items', '2'));
const jobs = Number(arg('--jobs', '3'));
const only = arg('--only', null);
const jsonOut = arg('--json', null);
const verbose = process.argv.includes('-v');
const mutate = process.argv.includes('--mutate'); // 통제 시험: 일부러 틀린 목표로 조작해 #check 가 오답으로 판정하는지 본다
const LEVEL = arg('--level', 'base');
const DEFAULT_MODE = { mindmap: 'sort', story: 'order', timeline: 'order', lifecycle: 'order', wordcards: 'match', emotion: 'match', kitchen: 'sort', economy: 'sort', sortboard: 'sortboard' };
const VIEW = { mouse: { width: 1366, height: 768 }, touch: { width: 390, height: 844 }, keyboard: { width: 1366, height: 768 } };

// ---- 차시 색인: (교구, 모드, 정답/free) 별로 차시와 문항 위치 ----
function scan() {
  const groups = {}; // key → Map(lessonId → [{ si, ai, ii }])
  const dir = join(pool, 'lessons/units');
  for (const f of readdirSync(dir)) {
    if (f.startsWith('_')) continue;
    const found = [];
    try { vm.runInNewContext(readFileSync(join(dir, f), 'utf8'), { PaperLessons: { registerUnit(u) { found.push(...(u.lessons || [])); }, register() {} } }); } catch (_) { continue; }
    for (const l of found) {
      if (only && l.id !== only) continue;
      (l.stages || []).forEach((st, si) => (st.activities || []).forEach((a, ai) => {
        if (!tools.includes(a.tool)) return;
        (a.items || []).forEach((it, ii) => {
          if (it.talk) return;
          const o = Object.assign({}, a.options, (a.levels || {})[LEVEL], it.toolOptions, ((it.levels || {})[LEVEL] || {}).toolOptions);
          const mode = a.tool === 'sortboard' ? 'sortboard' : (o.mode || DEFAULT_MODE[a.tool]);
          if (modeFilter.length && !modeFilter.includes(mode)) return;
          const free = !!it.free || !it.target;
          const k = `${a.tool}:${mode}${free ? ':free' : ''}`;
          const m = (groups[k] ??= new Map());
          (m.get(l.id) || m.set(l.id, []).get(l.id)).push({ si, ai, ii });
        });
      }));
    }
  }
  return groups;
}
// 모드마다 차시를 perMode 개: 앞쪽·뒤쪽에서 나눠 고른다(서로 다른 학년·단원이 섞이게)
function chooseLessons(groups) {
  const plan = new Map(); // lessonId → [{ group, items:[...] }]
  const rows = [];
  for (const [g, m] of Object.entries(groups)) {
    const ids = [...m.keys()].sort();
    const n = g.endsWith(':free') ? 1 : perMode;
    const picks = []; for (let i = 0; i < Math.min(n, ids.length); i++) picks.push(ids[Math.min(ids.length - 1, Math.floor(((2 * i + 1) * ids.length) / (2 * n)))]);
    for (const id of [...new Set(picks)]) { (plan.get(id) || plan.set(id, []).get(id)).push({ group: g, items: m.get(id).slice(0, perLesson) }); rows.push(`${g} ← ${id}`); }
  }
  return { plan, rows };
}

const chrome = findChrome();
const browser = await chromium.launch({ executablePath: chrome, headless: true });
const drivers = {};
const driverFor = async (tool) => (drivers[tool] ??= await import(pathToFileURL(join(here, `${tool}.mjs`)).href));

const swap2 = (o) => { const k = Object.keys(o); if (k.length < 2) return null; const r = { ...o }; [r[k[0]], r[k[1]]] = [o[k[1]], o[k[0]]]; return JSON.stringify(r) === JSON.stringify(o) ? null : r; };
function mutateTarget(t) {
  if (!t || typeof t !== 'object') return null;
  if (Array.isArray(t.order) && t.order.length > 1 && !t.cyclic) { const r = t.order.slice().reverse(); return JSON.stringify(r) === JSON.stringify(t.order) ? null : { ...t, order: r }; }
  for (const k of ['sort', 'match', 'fill']) if (t[k] && typeof t[k] === 'object') { const r = swap2(t[k]); return r ? { ...t, [k]: r } : null; }
  return null;
}
const results = [];
async function runLesson(lessonId, entries, input, variant) {
  const ctx = await browser.newContext({ viewport: VIEW[input], hasTouch: input === 'touch', isMobile: input === 'touch' });
  const page = await ctx.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push(`pageerror ${e.message}`));
  page.on('console', (m) => { if (m.type() === 'error' && !/fonts|uicons|favicon|Failed to load resource/.test(m.text() + (m.location()?.url || ''))) errors.push(`console ${m.text().slice(0, 160)}`); });
  try {
    await page.goto(`${hub}/edu-content-pool/lessons/player.html?lesson=${lessonId}&role=student&class=ST${variant}&seat=1&level=${LEVEL}`);
    await page.waitForFunction(() => window.__pl && window.__pl.lesson, null, { timeout: 20000 });
    const persona = { input, mouseStyle: variant % 2 ? 'click' : 'drag', touchStyle: variant % 2 ? 'drag' : 'tap', keyStyle: variant % 2 ? 'digit' : 'enter' };
    for (const { group, items } of entries) {
      const [tool, mode, free] = group.split(':');
      const mod = await driverFor(tool);
      for (const { si, ai, ii } of items) {
        errors.length = 0;
        const meta = await page.evaluate(([s, a, i]) => {
          const S = window.__pl; S.goto(s, a, i);
          const act = S.lesson.stages[s].activities[a]; const F = window.PaperLessons.flow;
          const it = F.itemAt(act.items[i], S.level); const start = F.itemStart(it, S.level);
          return { target: it.target, prompt: it.prompt, free: !!it.free, options: Object.assign({}, act.options, (act.levels || {})[S.level], start.toolOptions, it.reveal === 'after-check' ? { revealAfterCheck: true } : {}) };
        }, [si, ai, ii]);
        await page.waitForSelector('#tool *', { timeout: 6000 }).catch(() => {});
        await page.waitForTimeout(120);
        const pred = page.locator('[data-predict]'); if (await pred.count()) await pred.first().click().catch(() => {});
        if (mutate) { const m = mutateTarget(meta.target); if (!m) continue; meta.target = m; }
        const readState = () => page.evaluate(() => JSON.parse(JSON.stringify(window.__pl.tool.getState())));
        const t0 = Date.now(); let r;
        try { r = await mod.drive({ page, target: meta.target, options: meta.options, prompt: meta.prompt, toolId: tool, persona, readState, log: verbose ? console.log : () => {} }); }
        catch (e) { r = { reached: false, actions: 0, problems: [{ kind: 'ui-error', msg: `조작기 예외 ${e.message.slice(0, 200)}` }] }; }
        let checked = { ok: false, no: false, fb: '' };
        try {
          const chk = page.locator('#check');
          await chk.scrollIntoViewIfNeeded().catch(() => {});
          for (let w = 0; w < 25 && (await chk.getAttribute('aria-disabled').catch(() => null)) === 'true'; w++) await page.waitForTimeout(100);
          if (input === 'keyboard') { await chk.focus(); await page.keyboard.press('Enter'); } else if (input === 'touch') { const b = await chk.boundingBox(); await page.touchscreen.tap(b.x + b.width / 2, b.y + b.height / 2); } else await chk.click({ timeout: 3000 });
          await page.waitForTimeout(250);
          checked = await page.evaluate(() => { const fb = document.querySelector('#fb'); const n = document.querySelector('#fb-note'); return { ok: !!fb?.classList.contains('is-ok'), no: !!fb?.classList.contains('is-no'), fb: ((fb?.innerText || '') + ((n && !n.hidden) ? ` / ${n.innerText}` : '')).trim().slice(0, 100) }; });
        } catch (e) { checked.fb = `check 실패 ${e.message.slice(0, 60)}`; }
        const free0 = !!free || !meta.target;
        const row = { tool, mode, free: free0, lesson: lessonId, loc: `${si}.${ai}.${ii}`, input, variant, reached: r.reached, ok: free0 ? !!r.reached : checked.ok, actions: r.actions, problems: r.problems || [], fb: checked.fb, errors: errors.slice(), ms: Date.now() - t0, prompt: (meta.prompt || '').slice(0, 50), target: JSON.stringify(meta.target || null).slice(0, 110) };
        results.push(row);
        const flag = row.ok ? 'PASS' : r.problems?.some((p) => p.kind === 'driver-limit') ? 'LIMIT' : r.problems?.some((p) => ['unreachable', 'control-missing', 'no-keyboard-path', 'touch-target-small', 'ui-error'].includes(p.kind)) ? 'DEFECT' : 'FAIL';
        row.flag = flag;
        if (flag !== 'PASS' || row.problems.length || verbose) console.log(`${flag} ${tool}:${mode} ${lessonId} #${row.loc} ${input}/v${variant} reached=${row.reached} act=${row.actions} "${row.prompt}"\n     target=${row.target}\n     fb="${row.fb}" ${row.problems.map((p) => `[${p.kind}] ${p.msg}`).join(' ')} ${errors.length ? `ERR:${errors[0]}` : ''}`);
      }
    }
  } catch (e) { console.log(`!! ${lessonId} ${input}: ${e.message.slice(0, 120)}`); }
  await ctx.close();
}

// ---- 출구 질문 교구 1건: root '#exit-tool-N' 안에서만 조작하는지 본다(채점은 제출과 같은 tool.check) ----
function findExit() {
  const dir = join(pool, 'lessons/units');
  for (const f of readdirSync(dir)) {
    if (f.startsWith('_')) continue;
    const found = [];
    try { vm.runInNewContext(readFileSync(join(dir, f), 'utf8'), { PaperLessons: { registerUnit(u) { found.push(...(u.lessons || [])); }, register() {} } }); } catch (_) { continue; }
    for (const l of found) (l.stages || []).forEach((st, si) => (st.exitTicket || []).forEach((q, qi) => { if (q.type === 'tool' && tools.includes(q.tool) && q.target && !findExit.hit) findExit.hit = { lesson: l.id, si, qi, tool: q.tool }; }));
  }
  return findExit.hit;
}
async function runExit(input) {
  const hit = findExit(); if (!hit) { console.log('출구 교구 문항 없음'); return; }
  const ctx = await browser.newContext({ viewport: VIEW[input], hasTouch: input === 'touch', isMobile: input === 'touch' });
  const page = await ctx.newPage();
  await page.goto(`${hub}/edu-content-pool/lessons/player.html?lesson=${hit.lesson}&role=student&class=EX&seat=1&level=${LEVEL}`);
  await page.waitForFunction(() => window.__pl && window.__pl.lesson, null, { timeout: 20000 });
  const meta = await page.evaluate(([s, i]) => { const S = window.__pl; S.goto(s); const F = window.PaperLessons.flow; const q = F.itemAt(S.lesson.stages[s].exitTicket[i], S.level); const st0 = F.itemStart(q, S.level); return { target: q.target, prompt: q.prompt, options: Object.assign({}, q.options || {}, st0.toolOptions) }; }, [hit.si, hit.qi]);
  await page.waitForSelector(`#exit-tool-${hit.qi} *`, { timeout: 6000 });
  const mod = await driverFor(hit.tool);
  const readState = () => page.evaluate((i) => JSON.parse(JSON.stringify(window.__pl.exitTools[i].getState())), hit.qi);
  const r = await mod.drive({ page, root: `#exit-tool-${hit.qi}`, target: meta.target, options: meta.options, prompt: meta.prompt, toolId: hit.tool, persona: { input }, readState, log: () => {} });
  const ok = await page.evaluate(([i, t]) => window.__pl.exitTools[i].check(t).correct, [hit.qi, meta.target]);
  const main = await page.evaluate(() => document.querySelectorAll('#tool *').length);
  console.log(`EXIT ${hit.tool} ${hit.lesson} exit#${hit.qi} ${input}: reached=${r.reached} correct=${ok} actions=${r.actions} problems=${JSON.stringify(r.problems)} (#tool 안 요소 ${main}개)`);
  await ctx.close();
}

const groups = scan();
const { plan, rows } = chooseLessons(groups);
console.log(`# 시험 대상 ${plan.size}개 차시\n${rows.join('\n')}`);
const queue = [];
let v = 0;
for (const [lessonId, entries] of plan) { v++; for (const input of personas) queue.push([lessonId, entries, input, v]); }
await Promise.all(Array.from({ length: jobs }, async () => { while (queue.length) { const j = queue.shift(); await runLesson(...j); } }));
for (const i of personas) await runExit(i);
await browser.close();

// ---- 요약 ----
const sum = {};
for (const r of results) { const k = `${r.tool}:${r.mode}${r.free ? ':free' : ''}/${r.input}`; const s = (sum[k] ??= { n: 0, pass: 0, reached: 0 }); s.n++; if (r.ok) s.pass++; if (r.reached) s.reached++; }
console.log('\n== 요약 (교구:모드/입력  문항 · 정답판정(자유 문항은 reached) · reached) ==');
for (const k of Object.keys(sum).sort()) { const s = sum[k]; console.log(`${k.padEnd(34)} ${String(s.n).padStart(3)} 문항  정답 ${String(s.pass).padStart(3)}  reached ${String(s.reached).padStart(3)}`); }
const tot = results.length; const okN = results.filter((r) => r.ok).length;
console.log(`\n합계: ${tot} 문항 중 정답 판정 ${okN}`);
const kinds = {};
for (const r of results) for (const p of r.problems) { const k = `${r.tool}:${r.mode}:${p.kind}`; (kinds[k] ??= new Set()).add(`${r.lesson}#${r.loc}(${r.input}) ${p.msg.slice(0, 90)}`); }
console.log('\n== 문제 종류 ==');
for (const [k, s] of Object.entries(kinds)) console.log(`${k}: ${s.size}건`, [...s].slice(0, 3));
if (jsonOut) writeFileSync(jsonOut, JSON.stringify(results, null, 1));
process.exit(0);
