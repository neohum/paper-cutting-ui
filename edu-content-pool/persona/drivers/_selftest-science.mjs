#!/usr/bin/env node
// 과학·몸 교구 조작기 자가 시험.
// 사용: node persona/drivers/_selftest-science.mjs [--tool matter,body,...] [--input mouse,touch,keyboard] [--lessons a,b] [--per 2] [--max 8] [--hub http://localhost:8791] [-v]
// 문항 위치로 가는 데에만 window.__pl.goto 를 쓴다(자가 시험 전용 — 실제 runner 는 금지). 조작은 조작기가 DOM 입력으로만 한다.
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import vm from 'node:vm';
import { chromium } from 'playwright-core';
import { findChrome } from '../../check-lesson.mjs';

const isMain = process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;
if (isMain) await main();
async function main() {
const here = dirname(fileURLToPath(import.meta.url));
const pool = join(here, '..', '..');
const arg = (k, d) => { const i = process.argv.indexOf(k); return i > 0 ? process.argv[i + 1] : d; };
const hub = arg('--hub', 'http://localhost:8791');
const MINE = ['matter', 'body', 'earth', 'earthspin', 'circuit', 'force', 'lightray', 'magnet', 'soundwave', 'seasons'];
const tools = (arg('--tool', MINE.join(',')) || '').split(',').filter(Boolean);
const inputs = (arg('--input', 'mouse,touch,keyboard')).split(',');
const only = arg('--lessons', '') ? arg('--lessons').split(',') : null;
const perTool = Number(arg('--per', '2'));
const maxItems = Number(arg('--max', '8'));
const verbose = process.argv.includes('-v');

// ---- 차시 읽기 ----
const lessons = [];
for (const f of readdirSync(join(pool, 'lessons/data'))) { try { vm.runInNewContext(readFileSync(join(pool, 'lessons/data', f), 'utf8'), { PaperLessons: { register(l) { lessons.push(l); }, registerUnit() {} } }); } catch (_) { /* 건너뜀 */ } }
for (const f of readdirSync(join(pool, 'lessons/units'))) { if (!/^g\d/.test(f)) continue; try { vm.runInNewContext(readFileSync(join(pool, 'lessons/units', f), 'utf8'), { PaperLessons: { registerUnit(u) { lessons.push(...u.lessons); }, register() {} } }); } catch (_) { /* 건너뜀 */ } }

const modeOf = (a, it) => (Object.assign({}, a.options, a.levels && a.levels.base, it.toolOptions).mode) || '-';
// 교구마다: 모드를 다양하게 덮도록 차시를 고른다(문항이 있는 차시만)
function pick(tool) {
  const byLesson = new Map();
  for (const l of lessons) l?.stages?.forEach((s, si) => s.activities?.forEach((a, ai) => a.items.forEach((it, ii) => {
    if (a.tool !== tool || it.free || !it.target) return;
    const e = byLesson.get(l.id) || { id: l.id, modes: new Set(), items: [] };
    e.modes.add(modeOf(a, it)); e.items.push({ si, ai, ii, mode: modeOf(a, it) }); byLesson.set(l.id, e);
  })));
  let list = [...byLesson.values()];
  if (!only && list.some((e) => !e.id.startsWith('_'))) list = list.filter((e) => !e.id.startsWith('_'));
  if (only) return list.filter((e) => only.includes(e.id));
  const chosen = []; const covered = new Set();
  list.sort((x, y) => y.modes.size - x.modes.size || x.id.localeCompare(y.id));
  for (const e of list) { if ([...e.modes].some((m) => !covered.has(m))) { chosen.push(e); e.modes.forEach((m) => covered.add(m)); } }
  for (const e of list) if (chosen.length < perTool && !chosen.includes(e)) chosen.push(e);
  return chosen;
}

const PERSONAS = {
  mouse: { input: 'mouse', viewport: { width: 1366, height: 768 }, hasTouch: false },
  touch: { input: 'touch', viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true },
  keyboard: { input: 'keyboard', viewport: { width: 1366, height: 768 }, hasTouch: false },
};

const chrome = findChrome();
const browser = await chromium.launch({ executablePath: chrome || undefined, headless: true });
const summary = [];
const defects = [];

for (const tool of tools) {
  const mod = await import(pathToFileURL(join(here, `${tool}.mjs`)).href).catch((e) => { console.log(`[${tool}] 조작기 없음: ${e.message.split('\n')[0]}`); return null; });
  if (!mod) { summary.push({ tool, error: 'no driver' }); continue; }
  const chosen = pick(tool);
  for (const e of chosen) {
    for (const inp of inputs) {
      const P = PERSONAS[inp];
      const ctxB = await browser.newContext({ viewport: P.viewport, hasTouch: P.hasTouch, isMobile: P.isMobile || false });
      const page = await ctxB.newPage();
      const errs = [];
      page.on('pageerror', (er) => errs.push(`pageerror ${er.message.slice(0, 120)}`));
      page.on('console', (m) => { if (m.type() === 'error' && !/fonts|uicons|favicon|_cards\.js|Failed to load resource/.test(m.text())) errs.push(`console ${m.text().slice(0, 120)}`); });
      await page.goto(`${hub}/edu-content-pool/lessons/player.html?lesson=${e.id}&role=student&class=SELFTEST&seat=1`);
      await page.waitForFunction(() => window.__pl && window.__pl.lesson, null, { polling: 150, timeout: 30000 }).catch(() => {});
      const items = e.items.slice(0, maxItems);
      for (const w of items) {
        errs.length = 0;
        // 문항 위치로 가는 자리(자가 시험 전용)
        await page.evaluate(([s, a, i]) => window.__pl.goto(s, a, i), [w.si, w.ai, w.ii]);
        await page.waitForSelector('#tool *', { timeout: 8000 }).catch(() => {});
        const info = await page.evaluate(() => {
          const S = window.__pl; const a = S.lesson.stages[S.stage].activities[S.act]; const it = a.items[S.item];
          const lv = (it.levels || {})[S.level] || {};
          return {
            key: `${a.id}.${S.item + 1}`, tool: a.tool, level: S.level,
            target: lv.target != null ? lv.target : it.target,
            prompt: lv.prompt != null ? lv.prompt : it.prompt,
            options: Object.assign({}, a.options, (a.levels || {})[S.level], it.toolOptions, lv.toolOptions),
          };
        });
        const readState = () => page.evaluate(() => window.__pl.tool.getState());
        const logs = [];
        const t0 = Date.now();
        let r;
        try {
          r = await mod.drive({ page, target: info.target, options: info.options, prompt: info.prompt, toolId: info.tool, persona: { input: inp, name: `selftest-${inp}` }, readState, log: (m) => logs.push(m) });
        } catch (er) { r = { reached: false, actions: 0, problems: [{ kind: 'driver-limit', msg: `예외: ${String(er.message).slice(0, 140)}` }] }; }
        // 예상 문항은 먼저 예상을 골라야 확인이 열린다(학생 화면의 규칙 — 정답과 무관한 첫 보기)
        const pr = page.locator('[data-predict]'); if (await pr.count()) { await pr.first().scrollIntoViewIfNeeded().catch(() => {}); const bx = await pr.first().boundingBox(); if (bx) await page.mouse.click(bx.x + bx.width / 2, bx.y + bx.height / 2); }
        // 판정은 화면의 '확인' 으로
        let fb = ''; let correct = null;
        try {
          await page.locator('#check').scrollIntoViewIfNeeded({ timeout: 2000 }).catch(() => {});
          const b = await page.locator('#check').boundingBox();
          await page.mouse.click(b.x + b.width / 2, b.y + b.height / 2);
          await page.waitForTimeout(400);
          const res = await page.evaluate((k) => ({ ok: Boolean(window.__pl.items[k] && window.__pl.items[k].correct), fb: ((document.querySelector('#fb')?.innerText || '') + ' ' + (document.querySelector('#fb-note')?.innerText || '')).trim().slice(0, 100) }), info.key);
          correct = res.ok; fb = res.fb;
        } catch (er) { fb = `확인 실패: ${String(er.message).slice(0, 60)}`; }
        const probs = (r.problems || []).concat(errs.map((m) => ({ kind: 'ui-error', msg: m })));
        const row = { tool, lesson: e.id, at: `${w.si}.${w.ai}.${w.ii}`, mode: w.mode, input: inp, target: JSON.stringify(info.target).slice(0, 70), reached: r.reached, correct, actions: r.actions, ms: Date.now() - t0, problems: probs.map((p) => `${p.kind}:${p.msg}`.slice(0, 160)), fb };
        summary.push(row);
        const flag = correct ? 'OK ' : 'NG ';
        console.log(`${flag}${tool}/${w.mode} ${e.id} ${w.si}.${w.ai}.${w.ii} ${inp} reached=${r.reached} acts=${r.actions} ${JSON.stringify(info.target).slice(0, 50)}${correct ? '' : ` → ${fb}`}${probs.length ? ` | ${probs.map((p) => p.kind).join(',')}` : ''}`);
        if (verbose) { for (const p of probs) console.log(`      ! ${p.kind}: ${p.msg}`); for (const l of logs.slice(-6)) console.log(`      . ${l}`); }
        if (!correct || probs.some((p) => p.kind !== 'driver-limit')) defects.push(row);
      }
      await ctxB.close();
    }
  }
}
await browser.close();
const tot = summary.filter((s) => s.input);
console.log(`\n== 요약: ${tot.length}건 중 정답 ${tot.filter((s) => s.correct).length}, 미달 ${tot.filter((s) => !s.correct).length}`);
const byKind = {};
for (const s of tot) for (const p of s.problems) { const k = p.split(':')[0]; byKind[k] = (byKind[k] || 0) + 1; }
console.log('문제 종류:', JSON.stringify(byKind));
const out = arg('--out', '');
if (out) (await import('node:fs')).writeFileSync(out, JSON.stringify(summary, null, 1));
}
