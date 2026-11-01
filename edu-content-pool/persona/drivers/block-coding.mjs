// 종이 거북이 코딩판(block-coding) 조작기 — 블록 고르개를 눌러 프로그램을 쌓고(반복 수는 +/− 또는 ↑/↓), trace 문항은 거북이가 멈출 칸을 누른다.
// 길 찾기는 학생이 머릿속으로 거북이를 따라가는 것과 같다(칸 판을 읽어 가장 짧은 길 → 반복으로 묶기). 상태는 쓰지 않는다.
import { makeCtx, finish, activate, tabTo, press, sleep } from './_arts-util.mjs';

export const tools = ['block-coding'];

const DIRS = ['N', 'E', 'S', 'W']; const DX = [0, 1, 0, -1]; const DY = [-1, 0, 1, 0];
const isRep = (b) => /^rep:\d$/.test(b); const repN = (b) => Number(String(b).slice(4));
const isIf = (b) => b === 'if:right' || b === 'if:left';
const okBlock = (b) => ['fwd', 'left', 'right', 'end'].includes(b) || isIf(b) || (isRep(b) && repN(b) >= 2 && repN(b) <= 9);
const countBlocks = (p) => p.filter((b) => b !== 'end').length;
const lev = (a, b) => {
  const m = a.length; const n = b.length; const d = Array.from({ length: m + 1 }, (_, i) => [i]);
  for (let j = 1; j <= n; j++) d[0][j] = j;
  for (let i = 1; i <= m; i++) for (let j = 1; j <= n; j++) d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
  return d[m][n];
};

function cfg(o) {
  const cols = Math.max(2, Math.min(9, o.cols || 5)); const rows = Math.max(2, Math.min(8, o.rows || 5));
  const s0 = Object.assign({ x: 0, y: rows - 1, dir: 'E' }, o.start || {});
  const goal = o.goal ? { x: o.goal.x, y: o.goal.y } : { x: cols - 1, y: 0 };
  return {
    cols, rows, start: { x: s0.x, y: s0.y, d: Math.max(0, DIRS.indexOf(s0.dir)) }, goal,
    rocks: (o.rocks || []).map(([x, y]) => `${x},${y}`), stars: (o.stars || []).map(([x, y]) => `${x},${y}`),
    blocks: o.blocks || ['fwd', 'left', 'right', 'rep'], maxBlocks: Math.max(4, Math.min(30, o.maxBlocks || 16)),
  };
}
// 프로그램 실행(학생이 거북이를 따라가 보는 것)
function run(program, c) {
  const p = (program || []).filter(okBlock);
  let x = c.start.x; let y = c.start.y; let d = c.start.d; const got = new Set();
  const blocked = (nx, ny) => nx < 0 || ny < 0 || nx >= c.cols || ny >= c.rows || c.rocks.includes(`${nx},${ny}`);
  let crash = null; let n = 0;
  function exec(from, to) {
    for (let i = from; i < to && !crash; i++) {
      const b = p[i];
      if (++n > 400) { crash = { i, why: 'loop' }; return; }
      if (isRep(b)) {
        let depth = 1; let j = i + 1; for (; j < to; j++) { if (isRep(p[j])) depth++; else if (p[j] === 'end' && --depth === 0) break; }
        for (let k = 0; k < repN(b) && !crash; k++) exec(i + 1, Math.min(j, to));
        i = j; continue;
      }
      if (b === 'end') continue;
      if (b === 'left') d = (d + 3) % 4; else if (b === 'right') d = (d + 1) % 4;
      else {
        const nx = x + DX[d]; const ny = y + DY[d];
        if (isIf(b) && blocked(nx, ny)) d = b === 'if:right' ? (d + 1) % 4 : (d + 3) % 4;
        else if (blocked(nx, ny)) { crash = { i, why: 'block' }; return; }
        else { x = nx; y = ny; if (c.stars.includes(`${x},${y}`)) got.add(`${x},${y}`); }
      }
    }
  }
  exec(0, p.length);
  return { x, y, crash, stars: got, atGoal: !crash && x === c.goal.x && y === c.goal.y };
}
function path(c, needStars) {
  const key = (x, y, d, m) => `${x},${y},${d},${m}`; const full = (1 << c.stars.length) - 1;
  const q = [[c.start.x, c.start.y, c.start.d, 0, []]]; const seen = new Set([key(c.start.x, c.start.y, c.start.d, 0)]);
  while (q.length) {
    const [x, y, d, m, acts] = q.shift();
    if (x === c.goal.x && y === c.goal.y && (!needStars || m === full)) return acts;
    if (acts.length > 60) continue;
    for (const [a, nx, ny, nd] of [['fwd', x + DX[d], y + DY[d], d], ['left', x, y, (d + 3) % 4], ['right', x, y, (d + 1) % 4]]) {
      if (nx < 0 || ny < 0 || nx >= c.cols || ny >= c.rows || c.rocks.includes(`${nx},${ny}`)) continue;
      const si = c.stars.indexOf(`${nx},${ny}`); const nm = si >= 0 ? m | (1 << si) : m;
      const k = key(nx, ny, nd, nm); if (seen.has(k)) continue; seen.add(k); q.push([nx, ny, nd, nm, acts.concat(a)]);
    }
  }
  return null;
}
function compress(seq) {
  const n = seq.length; const best = Array(n + 1).fill(null); best[n] = { cost: 0, out: [] };
  for (let i = n - 1; i >= 0; i--) {
    let b = { cost: 1 + best[i + 1].cost, out: [seq[i]].concat(best[i + 1].out) };
    for (let L = 1; L <= 6 && i + L <= n; L++) for (let k = 2; k <= 9 && i + L * k <= n; k++) {
      let same = true; for (let j = 0; j < L * k && same; j++) if (seq[i + j] !== seq[i + (j % L)]) same = false;
      if (!same) break;
      const cost = 1 + L + best[i + L * k].cost;
      if (cost < b.cost) b = { cost, out: [`rep:${k}`].concat(seq.slice(i, i + L), ['end'], best[i + L * k].out) };
    }
    best[i] = b;
  }
  return best[0].out;
}

// 목표(reach·stars·maxBlocks·use·maxEdits)를 만족하는 프로그램을 찾는다
function plan(t, c, cur) {
  const ok = (p) => {
    const r = run(p, c);
    if (!r.atGoal) return false;
    if (t.stars && r.stars.size < c.stars.length) return false;
    if (t.maxBlocks && countBlocks(p) > t.maxBlocks) return false;
    if (t.use) { if (t.use.includes('rep') && !p.some(isRep)) return false; if (t.use.includes('if') && !p.some(isIf)) return false; }
    const from = t.from || cur;
    if (t.maxEdits != null && from && from.length && lev(from.filter(okBlock), p) > t.maxEdits) return false;
    return true;
  };
  const has = (b) => c.blocks.includes(b);
  const from = (t.from || cur || []).filter(okBlock);
  if (t.maxEdits != null && from.length) {
    const pool = ['fwd', 'left', 'right'].concat(has('if') ? ['if:right', 'if:left'] : []).concat(from.filter(isRep).map((b) => [`rep:${repN(b) - 1}`, `rep:${repN(b) + 1}`]).flat().filter(okBlock));
    const edits1 = (p) => {
      const out = [];
      for (let i = 0; i <= p.length; i++) {
        if (i < p.length) { out.push(p.slice(0, i).concat(p.slice(i + 1))); for (const b of pool) if (b !== p[i]) out.push(p.slice(0, i).concat([b], p.slice(i + 1))); }
        for (const b of pool) out.push(p.slice(0, i).concat([b], p.slice(i)));
      }
      return out;
    };
    if (ok(from)) return from;
    let layer = [from];
    for (let e = 1; e <= Math.min(2, t.maxEdits); e++) { const next = []; for (const p of layer) for (const q of edits1(p)) { if (ok(q)) return q; if (e < 2) next.push(q); } layer = next; }
  }
  if (t.use && t.use.includes('if') && has('if') && has('rep')) {
    for (const turn of ['if:right', 'if:left']) for (let k = 2; k <= 9; k++) for (let m = 1; m <= 3; m++) { const p = [`rep:${k}`].concat(Array(m).fill(turn), ['end']); if (ok(p)) return p; }
    for (const turn of ['if:right', 'if:left']) for (let k = 2; k <= 9; k++) for (let j = 2; j <= 9; j++) { const p = [`rep:${k}`, `rep:${j}`, turn, 'end', 'end']; if (ok(p)) return p; }
  }
  const acts = path(c, !!t.stars);
  if (!acts) return null;
  let p = has('rep') ? compress(acts) : acts;
  if (t.use && t.use.includes('rep') && !p.some(isRep) && has('rep')) {
    const i = acts.findIndex((a, k) => a === acts[k + 1]);
    if (i >= 0) { let k = 2; while (k < 9 && acts[i + k] === acts[i]) k++; p = acts.slice(0, i).concat([`rep:${k}`, acts[i], 'end'], acts.slice(i + k)); }
  }
  return ok(p) ? p : (ok(acts) ? acts : null);
}

export async function drive({ page, root: rootSel, target, options, prompt, toolId, persona, readState, log }) {
  const ctx = makeCtx({ page, persona, readState, log });
  const o = options || {}; const t = target || {}; const c = cfg(o);
  const R0 = rootSel || '#tool';
  const tool = page.locator(R0);
  try {
    let s = await ctx.read();

    // ---------- trace: 거북이가 멈출 칸 누르기 ----------
    if (t.end) {
      const r = run(o.program || [], c);
      const cell = tool.locator('g.bc-cell').nth(r.y * c.cols + r.x);
      if (!(await tool.locator('g.bc-cell').count())) ctx.stop('control-missing', '판의 칸이 화면에 없음');
      await activate(ctx, cell, `판 칸 (${r.x + 1}, ${r.y + 1})`, { measure: 'rect' });
      await sleep(80); s = await ctx.read();
      return finish(ctx, null, !!s.mark && s.mark.x === t.end.x && s.mark.y === t.end.y);
    }

    // ---------- build: 블록 쌓기 ----------
    const cur = (s.program || []).slice();
    const P = plan(t, c, cur);
    if (!P) ctx.stop('unreachable', `이 판(바위·크기)과 이 단계 블록(${c.blocks.join(',')})으로는 목표(${JSON.stringify(t)})를 이룰 프로그램을 못 찾음`);
    if (countBlocks(P) > c.maxBlocks) ctx.stop('unreachable', `필요한 블록 ${countBlocks(P)}개가 붙일 수 있는 수(${c.maxBlocks})를 넘음`);
    const palBtn = (b) => tool.locator(`button.bc-add[data-b="${b}"]`);
    for (const b of new Set(P.map((x) => (isRep(x) ? 'rep:2' : x)))) if (!(await palBtn(b).count())) ctx.stop('unreachable', `블록 고르개에 ‘${b}’ 블록이 없음`);

    let k = 0; while (k < cur.length && k < P.length && cur[k] === P[k]) k++;
    if (k < cur.length) { // 처음 프로그램이 다르면 모두 지우고 다시 쌓는다
      await activate(ctx, tool.locator('[data-bc="clear"]'), '모두 지우기 단추');
      k = 0;
    }
    for (let i = k; i < P.length; i++) {
      const b = P[i];
      await activate(ctx, palBtn(isRep(b) ? 'rep:2' : b), `블록 ‘${b}’ 단추`);
      if (isRep(b) && repN(b) > 2) {
        if (ctx.input === 'keyboard') { await tabTo(ctx, tool.locator(`[data-i="${i}"]`), `${i + 1}번째 반복 블록`); for (let n = 2; n < repN(b); n++) await press(ctx, 'ArrowUp'); }
        else for (let n = 2; n < repN(b); n++) await activate(ctx, tool.locator(`[data-rn="${i}"][data-d="1"]`), '반복 수 늘리기 단추');
      }
    }
    await sleep(80); s = await ctx.read();
    return finish(ctx, null, JSON.stringify(s.program) === JSON.stringify(P));
  } catch (e) {
    return finish(ctx, e, false);
  }
}
