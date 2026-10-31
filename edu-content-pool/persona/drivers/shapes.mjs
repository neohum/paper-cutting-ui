// 도형판(shapes) 조작기 — 점판 점 찍기, 칠교 끌어 맞추기, 도형 카드 칸에 넣기, 그리고 ask/askNum 답하기.
import { actor, answerAsk, nudge, svgToScreen, fitView, rt } from './_geo-lib.mjs';

export const tools = ['shapes'];

// ---- 점판: 목표를 만족하는 점 목록을 구한다(교구 판정 규칙과 같은 정의) ----
const cross = (a, b) => a[0] * b[1] - a[1] * b[0];
const sub = (a, b) => [a[0] - b[0], a[1] - b[1]];
const dot = (a, b) => a[0] * b[0] + a[1] * b[1];
const len2 = (a) => dot(a, a);
function simplify(pts) {
  let p = pts.filter((q, i) => i === 0 || q[0] !== pts[i - 1][0] || q[1] !== pts[i - 1][1]);
  if (p.length > 1 && p[0][0] === p[p.length - 1][0] && p[0][1] === p[p.length - 1][1]) p.pop();
  let changed = true;
  while (changed && p.length >= 3) {
    changed = false;
    for (let i = 0; i < p.length; i++) {
      const a = p[(i + p.length - 1) % p.length]; const b = p[i]; const c = p[(i + 1) % p.length];
      if (cross(sub(b, a), sub(c, b)) === 0) { p.splice(i, 1); changed = true; break; }
    }
  }
  return p;
}
const area2 = (p) => p.reduce((s, q, i) => s + cross(q, p[(i + 1) % p.length]), 0);
function segCross(a, b, c, d) {
  const o = (p, q, r) => Math.sign(cross(sub(q, p), sub(r, p)));
  const on = (p, q, r) => Math.min(p[0], r[0]) <= q[0] && q[0] <= Math.max(p[0], r[0]) && Math.min(p[1], r[1]) <= q[1] && q[1] <= Math.max(p[1], r[1]);
  const o1 = o(a, b, c); const o2 = o(a, b, d); const o3 = o(c, d, a); const o4 = o(c, d, b);
  if (o1 !== o2 && o3 !== o4) return true;
  return (o1 === 0 && on(a, c, b)) || (o2 === 0 && on(a, d, b)) || (o3 === 0 && on(c, a, d)) || (o4 === 0 && on(c, b, d));
}
function analyze(pts) {
  const p = simplify(pts || []); const n = p.length;
  const info = { n, valid: false, crossed: false, area: 0, right: 0, obtuse: 0, parallel: 0, equalAll: false, isosceles: false };
  if (n < 3) return info;
  for (let i = 0; i < n; i++) for (let j = i + 2; j < n; j++) { if (i === 0 && j === n - 1) continue; if (segCross(p[i], p[(i + 1) % n], p[j], p[(j + 1) % n])) info.crossed = true; }
  info.area = Math.abs(area2(p)) / 2; info.valid = !info.crossed && info.area > 0;
  const e = p.map((q, i) => sub(p[(i + 1) % n], q)); const L = e.map(len2);
  for (let i = 0; i < n; i++) {
    const a = e[(i + n - 1) % n]; const b = e[i]; const d = dot([-a[0], -a[1]], b);
    const convex = cross(a, b) * Math.sign(area2(p)) > 0;
    if (d === 0 && convex) info.right++; else if (d < 0 && convex) info.obtuse++;
  }
  for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) if (cross(e[i], e[j]) === 0) info.parallel++;
  info.equalAll = L.every((x) => x === L[0]);
  info.isosceles = n === 3 && (L[0] === L[1] || L[1] === L[2] || L[0] === L[2]);
  return info;
}
function isShape(info, name) {
  if (!info.valid) return false; const n = info.n;
  switch (name) {
    case 'polygon': return true; case 'triangle': return n === 3;
    case 'right-triangle': return n === 3 && info.right === 1; case 'obtuse-triangle': return n === 3 && info.obtuse === 1;
    case 'acute-triangle': return n === 3 && info.right === 0 && info.obtuse === 0; case 'isosceles-triangle': return n === 3 && info.isosceles;
    case 'quadrilateral': return n === 4; case 'trapezoid': return n === 4 && info.parallel >= 1;
    case 'parallelogram': return n === 4 && info.parallel === 2; case 'rhombus': return n === 4 && info.parallel === 2 && info.equalAll;
    case 'rectangle': return n === 4 && info.right === 4; case 'square': return n === 4 && info.right === 4 && info.equalAll;
    case 'pentagon': return n === 5; case 'hexagon': return n === 6; default: return false;
  }
}
function bestName(info) {
  if (!info.valid) return null;
  if (info.n === 3) return info.right ? 'right-triangle' : info.obtuse ? 'obtuse-triangle' : 'acute-triangle';
  if (info.n === 4) { for (const k of ['square', 'rectangle', 'rhombus', 'parallelogram', 'trapezoid']) if (isShape(info, k)) return k; return 'quadrilateral'; }
  return info.n === 5 ? 'pentagon' : info.n === 6 ? 'hexagon' : 'polygon';
}
const QUADS = ['quadrilateral', 'square', 'rectangle', 'rhombus', 'parallelogram', 'trapezoid'];
const geoKeys = (t) => ['sides', 'shape', 'area', 'rightAngles', 'parallel'].some((k) => t[k] != null);
function passes(info, t) {
  return (t.sides == null || (info.valid && info.n === t.sides))
    && (t.shape == null || (isShape(info, t.shape) && (!t.exact || !QUADS.includes(t.shape) || bestName(info) === t.shape || (t.shape === 'quadrilateral' && bestName(info) === 'quadrilateral'))))
    && (t.area == null || (info.valid && Math.abs(info.area - t.area) < 1e-9))
    && (t.rightAngles == null || (info.valid && info.right === t.rightAngles))
    && (t.parallel == null || (info.valid && info.parallel === t.parallel));
}
function searchGeo(m, t) {
  const n = m + 1; const all = []; for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) all.push([c, r]);
  const tryPts = (p) => passes(analyze(p), t);
  // 삼각형·사각형은 모두 훑는다(정확한 '만들 수 없음' 판정에 쓴다)
  for (let a = 0; a < all.length; a++) for (let b = a + 1; b < all.length; b++) for (let c = b + 1; c < all.length; c++) { const p = [all[a], all[b], all[c]]; if (tryPts(p)) return { pts: p, exhaustive: true }; }
  for (let a = 0; a < all.length; a++) for (let b = 0; b < all.length; b++) { if (b === a) continue; for (let c = 0; c < all.length; c++) { if (c === a || c === b) continue; for (let d = 0; d < all.length; d++) { if (d === a || d === b || d === c) continue; const p = [all[a], all[b], all[c], all[d]]; if (tryPts(p)) return { pts: p, exhaustive: true }; } } }
  // 오각형·육각형: 둘레를 따라 도는 볼록한 점 모음에서 찾는다
  const hull = (ps) => { const s = ps.slice().sort((x, y) => x[0] - y[0] || x[1] - y[1]); const lo = []; for (const p of s) { while (lo.length >= 2 && cross(sub(lo[lo.length - 1], lo[lo.length - 2]), sub(p, lo[lo.length - 1])) <= 0) lo.pop(); lo.push(p); } const up = []; for (const p of s.reverse()) { while (up.length >= 2 && cross(sub(up[up.length - 1], up[up.length - 2]), sub(p, up[up.length - 1])) <= 0) up.pop(); up.push(p); } return lo.slice(0, -1).concat(up.slice(0, -1)); };
  let seed = 7; const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
  for (let k = 0; k < 40000; k++) {
    const cnt = 5 + Math.floor(rnd() * 5); const ps = []; for (let i = 0; i < cnt; i++) ps.push(all[Math.floor(rnd() * all.length)]);
    const h = hull(ps); if (h.length >= 3 && h.length <= 8 && tryPts(h)) return { pts: h, exhaustive: false };
  }
  return { pts: null, exhaustive: t.sides === 3 || t.sides === 4 || /triangle|quadrilateral|square|rectangle|rhombus|parallelogram|trapezoid/.test(t.shape || '') };
}

// ---- 칠교 ----
const BASE = { L: [[0, 0], [4, 0], [2, 2]], M: [[4, 2], [4, 4], [2, 4]], S: [[4, 0], [4, 2], [3, 1]], Q: [[2, 2], [3, 1], [4, 2], [3, 3]], P: [[0, 4], [1, 3], [3, 3], [2, 4]] };
const KIND_KO = { L: '큰 삼각형', M: '중간 삼각형', S: '작은 삼각형', Q: '정사각형 조각', P: '평행사변형 조각' };
const centroid = (pts) => [pts.reduce((s, p) => s + p[0], 0) / pts.length, pts.reduce((s, p) => s + p[1], 0) / pts.length];
const CANON = {}; for (const k in BASE) { const c = centroid(BASE[k]); CANON[k] = BASE[k].map((p) => [p[0] - c[0], p[1] - c[1]]); }
function placed(k, x, y, r, f) { const t = (r * Math.PI) / 180; const cs = Math.cos(t); const sn = Math.sin(t); return CANON[k].map(([px, py]) => { const qx = f ? -px : px; return [qx * cs - py * sn + x, qx * sn + py * cs + y]; }); }
function sameSet(a, b, tol) { if (a.length !== b.length) return false; const used = new Array(b.length).fill(false); return a.every((p) => { const j = b.findIndex((q, i) => !used[i] && Math.hypot(p[0] - q[0], p[1] - q[1]) <= tol); if (j < 0) return false; used[j] = true; return true; }); }
function fitTo(k, pts) { const c = centroid(pts); for (let f = 0; f <= 1; f++) for (let r = 0; r < 360; r += 45) if (sameSet(placed(k, c[0], c[1], r, f), pts, 0.08)) return { x: c[0], y: c[1], r, f }; return null; }
const FIGURES = {
  square7: [['L', BASE.L], ['L', [[0, 0], [2, 2], [0, 4]]], ['M', BASE.M], ['S', BASE.S], ['Q', BASE.Q], ['S', [[1, 3], [2, 2], [3, 3]]], ['P', BASE.P]],
  square2: [['S', [[0, 1], [1, 0], [1, 2]]], ['S', [[1, 0], [2, 1], [1, 2]]]],
  triangle2: [['S', [[0, 0], [1, 1], [0, 2]]], ['S', [[0, 2], [1, 1], [2, 2]]]],
  parallelogram2: [['S', [[0, 0], [2, 0], [1, 1]]], ['S', [[2, 0], [3, 1], [1, 1]]]],
  square3: [['M', [[0, 0], [2, 2], [0, 2]]], ['S', [[0, 0], [2, 0], [1, 1]]], ['S', [[2, 0], [2, 2], [1, 1]]]],
  triangle3: [['M', [[0, 2], [2, 0], [2, 2]]], ['S', [[2, 0], [3, 1], [2, 2]]], ['S', [[3, 1], [4, 2], [2, 2]]]],
};

export async function drive({ page, root, target, options, toolId, persona, readState }) {
  page.__root = root || '#tool';
  const problems = []; const A = actor({ page, persona, problems });
  const o = options || {}; const t = target || {};
  const mode = ['tangram', 'classify'].includes(o.mode) ? o.mode : 'geoboard';
  let reached = false;
  try {
    if (!target || !Object.keys(t).length) { const ok = await nudge(A, readState, '도형판'); return { reached: ok, actions: A.n, problems }; }
    if (!o.readOnly) {
      if (mode === 'geoboard' && geoKeys(t)) reached = await geoboard(A, page, o, t, readState);
      else if (mode === 'tangram' && t.fit) reached = await tangram(A, page, o, t, readState);
      else if (mode === 'classify' && t.bins) reached = await classify(A, page, o, t, readState);
      else reached = true;
    } else reached = true;
    if (t.pick != null || t.num != null) {
      const ask = page.locator((rt(page) + ' .sh-picks[role=radiogroup] [role=radio]'));
      const r = await answerAsk(A, page, t, { radios: ask, numInput: page.locator((rt(page) + ' input.sh-in')), label: '묻기 칸' }, readState);
      reached = reached && r.ok;
    }
  } catch (e) {
    if (e.message === 'action-cap') problems.push({ kind: 'driver-limit', msg: '조작 수 제한에 닿음' });
    else problems.push({ kind: 'ui-error', msg: `조작 중 예외: ${e.message.split('\n')[0]}` });
    reached = false;
  }
  return { reached, actions: A.n, problems };
}

async function geoboard(A, page, o, t, readState) {
  const n = Math.max(3, Math.min(10, Math.round(o.size || 5))); const m = n - 1;
  const found = searchGeo(m, t);
  if (!found.pts) { A.problem(found.exhaustive ? 'unreachable' : 'driver-limit', `${n}x${n} 점판에서 목표(${JSON.stringify(t)})를 만족하는 도형을 ${found.exhaustive ? '만들 수 없음' : '찾지 못함'}`); return false; }
  // 읽기 값(꼭짓점 수 등)은 화면에 보이는 값 — 처음에 찍힌 점이 있으면 먼저 뺀다
  const cur = (await readState()).pts || [];
  const dots = page.locator((rt(page) + ' .sh-dot'));
  const dotAt = ([c, r]) => dots.nth(r * n + c);
  if (A.input === 'keyboard') {
    const board = page.locator((rt(page) + ' rect.sh-board'));
    if (!(await board.count())) { A.problem('no-keyboard-path', '점판에 키보드 초점 대상이 없음'); return false; }
    if (!(await A.focus(board, '점판'))) return false;
    for (let i = 0; i < cur.length; i++) await A.key('Backspace', 1);
    let at = [Math.floor(m / 2), Math.floor(m / 2)];
    for (const p of found.pts) {
      await A.key(p[0] > at[0] ? 'ArrowRight' : 'ArrowLeft', Math.abs(p[0] - at[0]), 15);
      await A.key(p[1] > at[1] ? 'ArrowDown' : 'ArrowUp', Math.abs(p[1] - at[1]), 15);
      at = p.slice(); await A.key('Enter', 1, 40);
    }
  } else {
    for (const p of cur) await A.tap(dotAt(p), `점 ${p}`, { hit: dotAt(p).locator('.pk-hit'), wait: 40 });
    for (const p of found.pts) {
      if (!(await A.tap(dotAt(p), `점 (${p})`, { hit: dotAt(p).locator('.pk-hit'), wait: 50 }))) return false;
    }
  }
  const got = (await readState()).pts || [];
  return passes(analyze(got), t);
}

async function tangram(A, page, o, t, readState) {
  const slots = (Array.isArray(o.slots) && o.slots.length ? o.slots.map((s) => [s.k, s.pts]) : FIGURES[o.figure] || FIGURES.square2).filter(([k, p]) => BASE[k] && Array.isArray(p));
  const polys = page.locator((rt(page) + ' .pk-layer--shadow polygon'));
  const pieces = await page.$$((rt(page) + ' .pk-layer--pieces > g.pk-piece'));
  if ((await polys.count()) < slots.length) { A.problem('control-missing', '그림자 자리가 화면에 없음'); return false; }
  const pieceKinds = [];
  for (const h of pieces) { const lab = (await h.getAttribute('aria-label')) || ''; pieceKinds.push(Object.keys(KIND_KO).find((k) => lab.startsWith(KIND_KO[k])) || '?'); }
  const used = new Set(); const plan = [];
  for (let si = 0; si < slots.length; si++) {
    const [k, pts] = slots[si];
    const pi = pieceKinds.findIndex((pk, i) => pk === k && !used.has(i));
    if (pi < 0) { A.problem('unreachable', `그림자 ${si + 1}번(${KIND_KO[k]}) 자리에 놓을 같은 조각이 쟁반에 없음`); return false; }
    const fit = fitTo(k, pts);
    if (!fit) { A.problem('unreachable', `그림자 ${si + 1}번 모양이 ${KIND_KO[k]}를 돌리고 뒤집어도 맞지 않음`); return false; }
    used.add(pi); plan.push({ si, pi, fit, k });
  }
  // 칠교 한 변 단위의 화면 길이: 그림자 첫 변으로 잰다
  const px = async (si) => { const pp = (await polys.nth(si).getAttribute('points')).trim().split(/\s+/).map((s) => s.split(',').map(Number)); return pp; };
  const p0 = await px(0); const u0 = slots[0][1];
  const sUnit = Math.hypot(p0[1][0] - p0[0][0], p0[1][1] - p0[0][1]) / Math.hypot(u0[1][0] - u0[0][0], u0[1][1] - u0[0][1]);
  for (const { si, pi, fit, k } of plan) {
    const h = pieces[pi];
    const pp = await px(si); const cx = pp.reduce((s, q) => s + q[0], 0) / pp.length; const cy = pp.reduce((s, q) => s + q[1], 0) / pp.length;
    const turns = fit.r / 45; const flips = fit.f;
    const readPk = () => h.evaluate((el) => ({ x: el.__pk.x, y: el.__pk.y }));
    if (A.input === 'keyboard') {
      A.count();
      if (!(await tabHandle(page, h))) { A.problem('no-keyboard-path', `칠교 조각(${KIND_KO[k]})에 Tab 이 닿지 않음`); return false; }
      for (let i = 0; i < turns; i++) await page.keyboard.press('r');
      if (flips) await page.keyboard.press('f');
      const cur = await readPk();
      const dx = Math.round((cx - cur.x) / (0.5 * sUnit)); const dy = Math.round((cy - cur.y) / (0.5 * sUnit));
      await A.key(dx > 0 ? 'ArrowRight' : 'ArrowLeft', Math.abs(dx), 8);
      await A.key(dy > 0 ? 'ArrowDown' : 'ArrowUp', Math.abs(dy), 8);
      await A.key('Enter', 1, 200);
    } else {
      // 조각을 눌러 고른 뒤 돌리기·뒤집기 단추, 그다음 그림자로 끌기. 조각의 무게중심이 조각 위의 점이다.
      const cur0 = await readPk();
      const [a0] = await fitView(page, async () => [await svgToScreen(page, cur0.x, cur0.y)]);
      const g = await h.boundingBox();
      if (!g) { A.problem('control-missing', `칠교 조각(${KIND_KO[k]})이 화면에 없음`); return false; }
      if (A.input === 'touch' && Math.min(g.width, g.height) < 44) A.problem('touch-target-small', `칠교 조각(${KIND_KO[k]}) ${Math.round(g.width)}x${Math.round(g.height)}px`);
      if (turns || flips) {
        await A.dragPath([a0, a0], '조각 고르기', { wait: 150 });
        const rot = page.locator((rt(page) + ' button[aria-label="고른 조각 돌리기"]')); const flip = page.locator((rt(page) + ' button[aria-label="고른 조각 뒤집기"]'));
        for (let i = 0; i < turns; i++) await A.tap(rot, '돌리기 단추', { wait: 60 });
        if (flips) await A.tap(flip, '뒤집기 단추', { wait: 60 });
      }
      const cur = await readPk();
      const [a, b] = await fitView(page, async () => [await svgToScreen(page, cur.x, cur.y), await svgToScreen(page, cx, cy)]);
      await A.drag(a, b, `칠교 조각(${KIND_KO[k]}) 끌기`);
    }
  }
  const st = (await readState()).pieces || [];
  return st.length > 0;
}

async function tabHandle(page, h) {
  const focused = () => h.evaluate((el) => el === document.activeElement).catch(() => false);
  if (await focused()) return true;
  for (let i = 0; i < 140; i++) { await page.keyboard.press('Tab'); if (await focused()) return true; }
  for (let i = 0; i < 280; i++) { await page.keyboard.press('Shift+Tab'); if (await focused()) return true; }
  return false;
}

async function classify(A, page, o, t, readState) {
  const cards = o.cards || []; const bins = o.bins || ['가', '나'];
  const bin = page.locator((rt(page) + ' .sh-bin'));
  for (const id of Object.keys(t.bins)) {
    const c = cards.find((x) => String(x.id) === id);
    const bi = t.bins[id];
    if (!c) { A.problem('unreachable', `카드 ${id} 가 화면에 없음(cards 에 없음)`); return false; }
    if (bi < 0 || bi >= bins.length) { A.problem('unreachable', `카드 ${id} 의 칸 ${bi + 1}번이 없음(칸 ${bins.length}개)`); return false; }
    const card = page.locator(`${rt(page)} .sh-card[aria-label="카드 ${c.label || c.id}"]`).first();
    if (!(await card.count())) { A.problem('control-missing', `카드 ${c.label || c.id} 가 화면에 없음`); return false; }
    if (A.input === 'keyboard') {
      if (bi > 8) { A.problem('no-keyboard-path', `칸 ${bi + 1}번은 숫자 키(1~9)로 못 넣음`); return false; }
      if (!(await A.focus(card, `카드 ${c.label || c.id}`))) return false;
      await A.key(String(bi + 1), 1, 80);
    } else {
      if (!(await A.tap(card, `카드 ${c.label || c.id}`))) return false;
      const head = bin.nth(bi).locator('button.sh-binh');
      if (!(await A.tap(head, `칸 ${bi + 1} 머리`))) return false;
    }
  }
  const pl = (await readState()).placed || {};
  return Object.keys(t.bins).every((id) => pl[id] === t.bins[id]);
}
