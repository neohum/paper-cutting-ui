// 전기 회로판(circuit) 조작기 — 조각함에서 부품을 고르고 칸을 눌러 회로를 만든다.
// 학생이 머릿속으로 하는 '전기가 어디로 흐를까' 계산을 작은 풀이기로 대신해 놓을 회로를 정한 뒤, 화면 단추로만 놓는다.
import { makeCtx, answerAsk } from './_sci-common.mjs';

export const tools = ['circuit'];

const PART_NAME = { wire: '도선', bulb: '전구', battery: '전지', switch: '스위치', coil: '전자석', eraser: '지우개' };
const typeOf = (c) => (c === 'bat+' || c === 'bat-' ? 'battery' : c === 'sw0' || c === 'sw1' ? 'switch' : c);
const LIT = 0.15; const SHORT = 4; const RINT = 0.05;

// ---- 회로 풀이(전지 = 전류원 + 내부 저항, 전구·전자석 = 저항 1) ----
function solve(parts, cols, rows, off) {
  const N = cols * rows; const id = (c, r) => r * cols + c;
  const ends = (k) => { const m = /^([hv])(\d+)-(\d+)$/.exec(k); if (!m) return null; const c = +m[2]; const r = +m[3]; return m[1] === 'h' ? [id(c, r), id(c + 1, r)] : [id(c, r), id(c, r + 1)]; };
  const par = Array.from({ length: N }, (_, i) => i); const find = (x) => (par[x] === x ? x : (par[x] = find(par[x])));
  const els = [];
  for (const [k, code] of Object.entries(parts)) {
    const e = ends(k); if (!e || !code || k === off) continue;
    if (code === 'wire' || code === 'sw1') par[find(e[0])] = find(e[1]);
    else if (code === 'bulb' || code === 'coil' || code === 'bat+' || code === 'bat-') els.push({ k, code, a: e[0], b: e[1] });
  }
  const roots = [...new Set(Array.from({ length: N }, (_, i) => find(i)))]; const idx = new Map(roots.map((r, i) => [r, i]));
  const n = roots.length; const G = Array.from({ length: n }, () => new Float64Array(n + 1));
  const stamp = (a, b, g) => { G[a][a] += g; G[b][b] += g; G[a][b] -= g; G[b][a] -= g; };
  for (const e of els) {
    const a = idx.get(find(e.a)); const b = idx.get(find(e.b)); e.na = a; e.nb = b;
    if (a === b) continue;
    if (e.code === 'bulb' || e.code === 'coil') stamp(a, b, 1);
    else { stamp(a, b, 1 / RINT); const plus = e.code === 'bat+' ? b : a; const minus = e.code === 'bat+' ? a : b; G[plus][n] += 1 / RINT; G[minus][n] -= 1 / RINT; }
  }
  for (let i = 0; i < n; i++) G[i][i] += 1e-7;
  for (let c = 0; c < n; c++) {
    let p = c; for (let r = c + 1; r < n; r++) if (Math.abs(G[r][c]) > Math.abs(G[p][c])) p = r;
    [G[c], G[p]] = [G[p], G[c]];
    const d = G[c][c] || 1e-12;
    for (let r = 0; r < n; r++) { if (r === c) continue; const f = G[r][c] / d; if (!f) continue; for (let k = c; k <= n; k++) G[r][k] -= f * G[c][k]; }
  }
  const V = G.map((row, i) => row[n] / (row[i] || 1e-12));
  const cur = {}; let short = false; const batI = {};
  for (const e of els) {
    const dv = V[e.na] - V[e.nb];
    if (e.code === 'bulb' || e.code === 'coil') cur[e.k] = e.na === e.nb ? 0 : dv;
    else { const vpm = e.code === 'bat+' ? -dv : dv; const i = e.na === e.nb ? 1 / RINT : (1 - vpm) / RINT; batI[e.k] = i; if (Math.abs(i) > SHORT) short = true; }
  }
  return { cur, short, batI };
}

export async function drive({ page, target, options, readState, log, persona, root: rootSel }) {
  const ctx = makeCtx({ page, persona, readState, log, maxActions: 600 });
  const o = options || {};
  const t = target || {};
  const root = rootSel || '#tool';
  const [COLS, ROWS] = Array.isArray(o.grid) && o.grid.length === 2 ? o.grid.map((v) => Math.max(2, Math.min(6, Math.round(v)))) : [4, 3];
  const palette = (Array.isArray(o.parts) && o.parts.length ? o.parts : ['wire', 'bulb', 'battery', 'switch']).filter((p) => PART_NAME[p] && p !== 'eraser');
  const stock = Object.assign({ bulb: 3, battery: 2, switch: 1, coil: 1, wire: 99 }, o.stock || {});
  const keys = []; for (let r = 0; r < ROWS; r++) for (let c = 0; c < COLS; c++) { if (c + 1 < COLS) keys.push(`h${c}-${r}`); if (r + 1 < ROWS) keys.push(`v${c}-${r}`); }
  const start = ((await ctx.state()).parts) || {};
  const locked = new Set(o.lock === true ? Object.keys(start) : Array.isArray(o.lock) ? o.lock : []);
  let reached = true;

  const circuitKeys = ['lit', 'bulbs', 'batteries', 'connection', 'batteryLink', 'switch', 'magnet', 'strong', 'coilN'];
  if (circuitKeys.some((k) => t[k] != null)) {
    // ---- 판정(학생이 '이러면 되겠다' 하고 따져 보는 것) ----
    const bulbKeys = (p) => Object.keys(p).filter((k) => p[k] === 'bulb');
    const batKeys = (p) => Object.keys(p).filter((k) => typeOf(p[k]) === 'battery');
    const litOf = (p, r) => bulbKeys(p).filter((k) => Math.abs(r.cur[k] || 0) > LIT && !r.short);
    const linkOf = (p, list) => {
      if (list.length < 2) return null;
      let series = true; let parallel = true;
      for (const k of list) {
        const r2 = solve(p, COLS, ROWS, k); const others = bulbKeys(p).filter((x) => x !== k);
        const anyOn = others.some((x) => Math.abs(r2.cur[x] || 0) > LIT && !r2.short);
        const allOn = others.length > 0 && others.every((x) => Math.abs(r2.cur[x] || 0) > LIT && !r2.short);
        if (anyOn) series = false; if (!allOn) parallel = false;
      }
      return series ? 'series' : parallel ? 'parallel' : 'mixed';
    };
    const geoOf = (k) => { const m = /^([hv])(\d+)-(\d+)$/.exec(k); return { vert: m[1] === 'v' }; };
    const works = (p) => {
      const r = solve(p, COLS, ROWS); const bulbs = bulbKeys(p); const bats = batKeys(p); const lit = litOf(p, r);
      const coil = Object.keys(p).find((k) => p[k] === 'coil'); const coilI = coil ? r.cur[coil] || 0 : 0;
      const sw = Object.keys(p).find((k) => typeOf(p[k]) === 'switch');
      if (!bats.length || r.short) return false;
      if ((t.lit != null || t.bulbs != null || t.connection) && !bulbs.length && t.lit !== 0) return false;
      if ((t.magnet != null || t.strong || t.coilN) && !coil) return false;
      if (t.switch && (!sw || (t.switch === 'closed') !== (p[sw] === 'sw1'))) return false;
      if (t.bulbs != null && bulbs.length !== t.bulbs) return false;
      if (t.batteries != null && bats.length !== t.batteries) return false;
      if (t.lit === 'all' && (!lit.length || lit.length < bulbs.length)) return false;
      if (Number.isFinite(t.lit) && t.lit > 0 && lit.length !== t.lit) return false;
      if (t.lit === 0 && (lit.length || Math.abs(coilI) > LIT)) return false;
      if (t.connection && linkOf(p, bulbs) !== t.connection) return false;
      if (t.batteryLink) {
        if (bats.length < 2) return false;
        const base = Math.max(...Object.values(r.cur).map(Math.abs)); const r1 = solve(p, COLS, ROWS, bats[0]); const one = Math.max(0, ...Object.values(r1.cur).map(Math.abs));
        const bk = one < LIT ? 'series' : Math.abs(one - base) < 0.15 ? 'parallel' : 'mixed';
        if (bk !== t.batteryLink) return false;
      }
      if (t.magnet != null && (Math.abs(coilI) > LIT) !== !!t.magnet) return false;
      if (t.strong && Math.abs(coilI) < 1.4) return false;
      if (t.coilN) {
        const g = geoOf(coil); const nAtB = coilI > 0; const side = g.vert ? (nAtB ? 'bottom' : 'top') : (nAtB ? 'right' : 'left');
        if (side !== t.coilN) return false;
      }
      return true;
    };
    const stockOk = (p) => ['bulb', 'battery', 'switch', 'coil'].every((ty) => Object.values(p).filter((c) => typeOf(c) === ty).length <= stock[ty]);
    const need = () => {
      const coil = t.magnet != null || t.strong || t.coilN ? 1 : 0;
      const nb = t.bulbs != null ? t.bulbs : t.connection ? 2 : Number.isFinite(t.lit) && t.lit > 0 ? t.lit : (t.lit === 'all' || t.lit === 0) && !coil ? 1 : 0;
      const nbat = t.batteries != null ? t.batteries : t.strong || t.batteryLink ? 2 : 1;
      return { nb, nbat, coil, sw: t.switch ? 1 : 0 };
    };
    const lockedParts = () => Object.fromEntries([...locked].filter((k) => start[k]).map((k) => [k, start[k]]));
    const ring = () => {
      const out = [];
      for (let c = 0; c < COLS - 1; c++) out.push([`h${c}-0`, true]);
      for (let r = 0; r < ROWS - 1; r++) out.push([`v${COLS - 1}-${r}`, true]);
      for (let c = COLS - 2; c >= 0; c--) out.push([`h${c}-${ROWS - 1}`, false]);
      for (let r = ROWS - 2; r >= 0; r--) out.push([`v0-${r}`, false]);
      return out;
    };
    const seriesLayout = (flip) => {
      const R = ring(); const L = lockedParts(); const rk = new Set(R.map((x) => x[0]));
      if (Object.keys(L).some((k) => !rk.has(k) && L[k] !== 'wire')) return null;
      const n = need(); const p = Object.assign({}, L);
      const lb = R.find(([k]) => typeOf(L[k]) === 'battery');
      const fw = lb ? (L[lb[0]] === 'bat+') === lb[1] : !flip;
      const free = R.filter(([k]) => !p[k]);
      const have = (ty) => Object.values(p).filter((c) => typeOf(c) === ty).length;
      for (let i = have('battery'); i < n.nbat; i++) { const e = free.pop(); if (!e) return null; p[e[0]] = fw === e[1] ? 'bat+' : 'bat-'; }
      for (let i = have('bulb'); i < n.nb; i++) { const e = free.shift(); if (!e) return null; p[e[0]] = 'bulb'; }
      for (let i = have('coil'); i < n.coil; i++) { const e = free.shift(); if (!e) return null; p[e[0]] = 'coil'; }
      for (let i = have('switch'); i < n.sw; i++) { const e = free.shift(); if (!e) return null; p[e[0]] = 'sw1'; }
      free.forEach(([k]) => { p[k] = 'wire'; });
      const swk = Object.keys(p).find((k) => typeOf(p[k]) === 'switch'); if (swk) p[swk] = t.switch === 'open' || t.lit === 0 ? 'sw0' : 'sw1';
      if ((t.lit === 0 || t.magnet === false) && !swk) { const w = R.find(([k]) => p[k] === 'wire' && !locked.has(k)); if (w) delete p[w[0]]; }
      return p;
    };
    const ladderLayout = (flip, batPar) => {
      if (COLS < 3) return null;
      const n = need(); const L = lockedParts(); const p = {};
      const col = (c) => Array.from({ length: ROWS - 1 }, (_, r) => `v${c}-${r}`);
      for (let c = 0; c < COLS - 1; c++) { p[`h${c}-0`] = 'wire'; p[`h${c}-${ROWS - 1}`] = 'wire'; }
      col(0).forEach((k) => { p[k] = 'wire'; });
      (batPar ? [0, 1] : [0]).forEach((c) => { const ks = col(c); ks.forEach((k) => { p[k] = 'wire'; }); const cnt = batPar ? 1 : n.nbat; for (let i = 0; i < cnt && i < ks.length; i++) p[ks[i]] = flip ? 'bat+' : 'bat-'; });
      const rungs = []; for (let c = batPar ? 2 : 1; c < COLS; c++) rungs.push(c);
      const loads = []; for (let i = 0; i < n.nb; i++) loads.push('bulb'); if (n.coil) loads.push('coil');
      if (!loads.length || loads.length > rungs.length) return null;
      rungs.forEach((c, i) => { const ks = col(c); if (i < loads.length) { ks.forEach((k) => { p[k] = 'wire'; }); p[ks[0]] = loads[i]; } });
      const last = rungs[loads.length - 1];
      for (let c = last; c < COLS - 1; c++) { delete p[`h${c}-0`]; delete p[`h${c}-${ROWS - 1}`]; }
      if (n.sw) p['h0-0'] = t.switch === 'open' || t.lit === 0 ? 'sw0' : 'sw1';
      if (Object.entries(L).some(([k, c]) => !(p[k] === c || (typeOf(p[k]) === 'switch' && typeOf(c) === 'switch')))) return null;
      return p;
    };
    const wantPar = t.connection === 'parallel'; const wantBatPar = t.batteryLink === 'parallel';
    const cands = [];
    if (t.solution && typeof t.solution === 'object') cands.push(Object.assign({}, lockedParts(), t.solution));
    if (!wantPar && !wantBatPar) [false, true].forEach((f) => cands.push(seriesLayout(f)));
    [false, true].forEach((f) => cands.push(ladderLayout(f, wantBatPar)));
    [false, true].forEach((f) => cands.push(seriesLayout(f)));
    const plan = cands.find((p) => p && stockOk(p) && works(p));
    if (!plan) {
      ctx.problem('driver-limit', '판·고정 부품·남은 개수로 목표 회로를 찾지 못함(풀이기가 아는 직렬 고리·사다리 꼴 밖일 수 있음)');
      reached = false;
    } else {
      // ---- 놓기: 틀린 칸은 지우개로 비우고, 부품 종류별로 조각함을 한 번만 골라 칸을 누른다 ----
      const slotIdx = (k) => keys.indexOf(k);
      const slots = page.locator(`${root} .cc-slot`);
      const toolBtn = (name) => page.locator(`${root} button[data-tool="${name}"]`);
      const parts = async () => ((await ctx.state()).parts) || {};
      const pick = async (name) => {
        const b = toolBtn(name);
        if (!(await b.count())) { ctx.problem('control-missing', `조각함에 '${PART_NAME[name]}'이(가) 없음`); return false; }
        if ((await b.getAttribute('aria-checked')) === 'true') return true;
        return ctx.tapExpect(b, `조각함 ${PART_NAME[name]}`, async () => (await b.getAttribute('aria-checked')) === 'true');
      };
      const cur0 = await parts();
      const erase = keys.filter((k) => !locked.has(k) && cur0[k] && plan[k] !== cur0[k]);
      if (erase.length) {
        if (await pick('eraser')) for (const k of erase) await ctx.tapExpect(slots.nth(slotIdx(k)), `칸 ${k} 비우기`, async () => !(await parts())[k]);
      }
      // 고정된 스위치도 눌러서 여닫을 수 있다
      for (const k of keys) {
        if (!locked.has(k) || typeOf((await parts())[k]) !== 'switch' || !plan[k] || (await parts())[k] === plan[k]) continue;
        await ctx.tapExpect(slots.nth(slotIdx(k)), `고정 스위치 ${k} 여닫기`, async () => (await parts())[k] === plan[k]);
      }
      const byTool = {};
      for (const k of keys) {
        if (locked.has(k)) continue;
        const want = plan[k]; const have = (await parts())[k];
        if (!want || want === have) continue;
        const tl = typeOf(want); (byTool[tl] ||= []).push(k);
      }
      // 전지·부품 개수 제한 때문에 개수를 쓰는 조각(전구·전지…)부터, 도선은 마지막
      const order = Object.keys(byTool).sort((a, b) => (a === 'wire') - (b === 'wire'));
      for (const tl of order) {
        if (!(await pick(tl))) { reached = false; continue; }
        for (const k of byTool[tl]) {
          const want = plan[k];
          if (typeOf(want) === 'switch') {
            await ctx.tapExpect(slots.nth(slotIdx(k)), `칸 ${k} 스위치`, async () => typeOf((await parts())[k]) === 'switch');
            if ((await parts())[k] !== want) await ctx.tapExpect(slots.nth(slotIdx(k)), `칸 ${k} 스위치 여닫기`, async () => (await parts())[k] === want);
          } else if (tl === 'battery') {
            for (let g = 0; g < 3 && (await parts())[k] !== want; g++) await ctx.tap(slots.nth(slotIdx(k)), `칸 ${k} 전지`);
          } else {
            await ctx.tapExpect(slots.nth(slotIdx(k)), `칸 ${k} ${PART_NAME[tl]}`, async () => (await parts())[k] === want);
          }
          if (ctx.over()) break;
        }
      }
      const fin = await parts();
      const keysAll = new Set([...Object.keys(plan), ...Object.keys(fin)]);
      const diff = [...keysAll].filter((k) => (plan[k] || null) !== (fin[k] || null));
      if (diff.length) { reached = false; ctx.problem('driver-limit', `놓은 회로가 계획과 ${diff.length}칸 다름(${diff.slice(0, 3).join(',')})`); }
      else reached = works(fin);
    }
  }

  if (t.pick != null) reached = (await answerAsk(ctx, `${root} [role="radiogroup"] button[data-pick]`, t)) && reached;
  return ctx.result(reached);
}
