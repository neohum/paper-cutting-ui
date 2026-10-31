// 색종이 콜라주 판(collage) 조작기 — 고르개(모양·색·크기)를 골라 '붙이기', 조각을 끌어 옮기고(키보드: 방향키), '돌리기'(키보드: R), '떼기'.
// 목표(target)를 읽어 완성 작품을 머릿속으로 그린 뒤(대칭·되풀이·보색·개수·따라 만들기·점검) 화면 조작으로 만든다. 상태는 쓰지 않는다.
// 그 단계 고르개(shapes·colors·sizes)에 목표의 모양·색·크기가 없으면 만들 수 없으므로 'unreachable' 로 알린다.
import { makeCtx, finish, activate, tabTo, press, box, pointDrag, pointTap, checkTouchSize, sleep, Stop } from './_arts-util.mjs';

export const tools = ['collage'];

const W = 560; const H = 400; const CX = 280; const CY = 200; const G = 20;
const PERIOD = { circle: 1, square: 90, rect: 180, triangle: 120, semi: 360, star: 72, heart: 360, leaf: 180, diamond: 180 };
const SHAPE_NAME = { circle: '동그라미', square: '네모', rect: '긴 네모', triangle: '세모', semi: '반원', star: '별', heart: '하트', leaf: '나뭇잎', diamond: '마름모' };
const SIZE_NAME = { s: '작게', m: '보통', l: '크게' };
const COLORS = {
  빨강: { warm: 1, tone: 'mid' }, 주황: { warm: 1, tone: 'mid' }, 노랑: { warm: 1, tone: 'light' }, 초록: { warm: -1, tone: 'mid' }, 파랑: { warm: -1, tone: 'mid' },
  보라: { warm: -1, tone: 'dark' }, 분홍: { warm: 1, tone: 'light' }, 갈색: { warm: 0, tone: 'dark' }, 검정: { warm: 0, tone: 'dark' }, 하양: { warm: 0, tone: 'light' },
};
const COMP = { 빨강: '초록', 초록: '빨강', 주황: '파랑', 파랑: '주황', 노랑: '보라', 보라: '노랑' };
const RAD = { s: 20, m: 32, l: 52 };
const nr = (r) => ((Math.round(r) % 360) + 360) % 360;
const R = (p) => RAD[p.size] || 32;
const sameRot = (shape, a, b) => { const p = PERIOD[shape] || 1; return p === 1 || nr(a - b) % p === 0; };
const sameKind = (a, b) => a.shape === b.shape && a.color === b.color && a.size === b.size;
const matches = (p, q) => (!q.shape || p.shape === q.shape) && (!q.color || p.color === q.color) && (!q.size || p.size === q.size);
const mirror = (p, axis) => (axis === 'horizontal' ? { x: p.x, y: 2 * CY - p.y, r: nr(180 - p.r) } : { x: 2 * CX - p.x, y: p.y, r: nr(-p.r) });
const touching = (a, b) => Math.hypot(a.x - b.x, a.y - b.y) <= R(a) + R(b) + 10;
const overlapping = (a, b) => Math.hypot(a.x - b.x, a.y - b.y) < R(a) + R(b) - 8;
const pairOK = (rule, a, b) => {
  if (rule === 'complement') return COMP[a.color] === b.color;
  if (rule === 'warm-cool') return COLORS[a.color].warm * COLORS[b.color].warm === -1;
  return (COLORS[a.color].tone === 'light' && COLORS[b.color].tone === 'dark') || (COLORS[a.color].tone === 'dark' && COLORS[b.color].tone === 'light');
};
function symmetryMiss(ps, axis) {
  const used = new Set();
  for (let i = 0; i < ps.length; i++) {
    if (used.has(i)) continue;
    const m = mirror(ps[i], axis);
    const j = ps.findIndex((q, k) => !used.has(k) && sameKind(q, ps[i]) && q.x === m.x && q.y === m.y && sameRot(q.shape, q.r, m.r));
    if (j < 0) return ps[i];
    used.add(i); used.add(j);
  }
  return null;
}
const keyOf = (p) => `${p.shape}|${p.color}|${p.size}|${nr(p.r) % (PERIOD[p.shape] === 1 ? 360 : PERIOD[p.shape])}`;
function repeatOK(ps, rule) {
  const axis = rule.axis === 'y' ? 'y' : 'x'; const other = axis === 'x' ? 'y' : 'x';
  const seq = ps.slice().sort((a, b) => a[axis] - b[axis] || a[other] - b[other]).map(keyOf);
  const min = Math.max(1, rule.unit || 2); const times = rule.times || 3;
  for (let L = min; L <= seq.length / 2; L++) {
    if (seq.length % L) continue;
    if (new Set(seq.slice(0, L)).size < Math.min(2, L)) continue;
    if (seq.every((k, i) => k === seq[i % L])) return seq.length / L >= times;
  }
  return false;
}
// 작품이 목표를 만족하는지(조작기가 '다 만들었다'고 믿기 전의 자기 점검 — 정답 판정은 runner 가 #check 로 한다)
function satisfies(ps, T) {
  if (T.match) {
    const left = ps.slice();
    for (const q of T.match) {
      const i = left.findIndex((p) => sameKind(p, q) && p.x === q.x && p.y === q.y && sameRot(p.shape, p.r, q.r || 0));
      if (i < 0) return false; left.splice(i, 1);
    }
    if (left.length) return false;
  }
  for (const q of T.has || []) {
    const n = ps.filter((p) => matches(p, q)).length;
    if (q.n != null && n !== q.n) return false;
    if (q.min != null && n < q.min) return false;
    if (q.max != null && n > q.max) return false;
  }
  if (T.pieces) { const q = T.pieces; const n = ps.length; if ((q.n != null && n !== q.n) || (q.min != null && n < q.min) || (q.max != null && n > q.max)) return false; }
  if (T.symmetry && symmetryMiss(ps, T.symmetry === 'horizontal' ? 'horizontal' : 'vertical')) return false;
  if (T.repeat && !repeatOK(ps, T.repeat)) return false;
  if (T.contrast) {
    const rule = ['complement', 'warm-cool', 'light-dark'].includes(T.contrast) ? T.contrast : 'complement';
    let ok = false; for (let i = 0; i < ps.length && !ok; i++) for (let j = 0; j < ps.length && !ok; j++) if (i !== j && pairOK(rule, ps[i], ps[j]) && touching(ps[i], ps[j])) ok = true;
    if (!ok) return false;
  }
  if (T.overlap) { let n = 0; for (let i = 0; i < ps.length; i++) for (let j = i + 1; j < ps.length; j++) if (overlapping(ps[i], ps[j])) n++; if (n < T.overlap) return false; }
  if (T.selfCheck && ps.length < (T.minPieces || 1)) return false;
  return ps.length > 0;
}

// ---- 계획: 지금 작품(cur)에서 목표를 이루는 완성 작품 D 를 그린다 ----
function planPieces(T, cur, av, o) {
  const maxPieces = Math.max(2, Math.min(40, o.maxPieces || 24));
  const missing = [];
  const need = (q) => {
    if (q.shape && !av.shape.includes(q.shape)) missing.push(`모양 ‘${SHAPE_NAME[q.shape] || q.shape}’`);
    if (q.color && !av.color.includes(q.color)) missing.push(`색 ‘${q.color}’`);
    if (q.size && !av.size.includes(q.size)) missing.push(`크기 ‘${SIZE_NAME[q.size] || q.size}’`);
  };
  const D0 = cur.map((p) => ({ shape: p.shape, color: p.color, size: p.size, x: p.x, y: p.y, r: p.r || 0 }));
  const fail = (kind, msg) => ({ err: { kind, msg } });
  const noMiss = () => (missing.length ? fail('unreachable', `이 단계 고르개에 목표의 ${[...new Set(missing)].slice(0, 3).join(', ')}이(가) 없음`) : null);

  // 따라 만들기: 보기 작품 그대로(그 밖의 조각은 떼어 낸다)
  if (T.match) {
    for (const q of T.match) need(q);
    const m = noMiss(); if (m) return m;
    const D = T.match.map((q) => ({ shape: q.shape, color: q.color, size: q.size, x: q.x, y: q.y, r: nr(q.r || 0) }));
    return { D };
  }
  const defShape = av.shape[0]; const defColor = av.color[0]; const defSize = av.size.includes('m') ? 'm' : av.size[0];
  const attrsOf = (q) => ({ shape: q.shape || defShape, color: q.color || defColor, size: q.size || defSize });
  const constrained = (T.has || []).filter((q) => q.n != null || q.max != null);
  const filler = () => {
    for (const shape of av.shape) for (const color of av.color) for (const size of av.size) { const a = { shape, color, size }; if (!constrained.some((q) => matches(a, q))) return a; }
    return { shape: defShape, color: defColor, size: defSize };
  };

  // 되풀이: 한 묶음을 times 번 이어 놓는다(그 밖의 조각은 떼어 낸다)
  if (T.repeat) {
    const rule = T.repeat; const L0 = Math.max(2, rule.unit || 2); const times0 = rule.times || 3;
    for (const q of T.has || []) need(q);
    const m = noMiss(); if (m) return m;
    for (let times = times0; times <= 8; times++) {
      const unit = []; let okAll = true;
      for (const q of T.has || []) {
        let c = null;
        for (let k = 0; k <= 3 && c == null; k++) {
          const n = times * k;
          if ((q.n == null || n === q.n) && (q.min == null || n >= q.min) && (q.max == null || n <= q.max) && (k > 0 || q.n === 0 || (q.n == null && (q.min == null || q.min <= 0)))) c = k;
        }
        if (c == null) { okAll = false; break; }
        for (let k = 0; k < c; k++) unit.push(attrsOf(q));
      }
      if (!okAll) continue;
      while (unit.length < L0 || new Set(unit.map((a) => `${a.shape}|${a.color}|${a.size}`)).size < 2) {
        // 묶음에 다른 조각을 하나 더한다: 목표 개수에 걸리지 않는 모양·색
        let pad = null;
        for (const shape of av.shape) for (const color of av.color) for (const size of av.size) {
          const a = { shape, color, size };
          if (!pad && !constrained.some((q) => matches(a, q)) && !unit.some((u) => sameKind(u, a))) pad = a;
        }
        if (!pad) return fail('driver-limit', '되풀이 묶음에 더할 다른 조각을 못 찾음');
        unit.push(pad);
      }
      const total = unit.length * times;
      if (total > maxPieces) return fail('unreachable', `되풀이 ${times}번 × ${unit.length}개 = ${total}조각이 한 판에 붙일 수 있는 수(${maxPieces})를 넘음`);
      if (total > 12) return fail('driver-limit', '되풀이 조각이 많아 조작기 배치 한도(12)를 넘음');
      const D = []; for (let i = 0; i < total; i++) D.push(Object.assign({}, unit[i % unit.length], { x: 40 + 40 * i, y: CY, r: 0 }));
      if (!satisfies(D, T)) continue;
      return { D };
    }
    return fail('driver-limit', '되풀이 + 개수 조건을 함께 만족하는 묶음을 못 찾음');
  }

  // 그 밖: 지금 작품을 살리고 모자란 것을 더한다
  const D = D0;
  const sym = T.symmetry ? (T.symmetry === 'horizontal' ? 'horizontal' : 'vertical') : null;
  for (const q of T.has || []) { if ((q.n ?? q.min ?? 0) > 0) need(q); }
  if (T.contrast) {
    const rule = ['complement', 'warm-cool', 'light-dark'].includes(T.contrast) ? T.contrast : 'complement';
    if (!av.color.some((a) => av.color.some((b) => a !== b && pairOK(rule, { color: a }, { color: b })))) missing.push(`${{ complement: '보색', 'warm-cool': '따뜻한·차가운 색', 'light-dark': '밝은·어두운 색' }[rule]} 짝`);
  }
  const m0 = noMiss(); if (m0) return m0;

  // 놓을 자리 후보
  const slots = [];
  if (sym === 'vertical') { for (const x of [60, 140, 220]) for (const y of [80, 160, 240, 320]) slots.push({ x, y }); }
  else if (sym === 'horizontal') { for (const y of [60, 120, 160]) for (const x of [80, 160, 240, 320, 400, 480]) slots.push({ x, y }); }
  else { for (const x of [60, 140, 220, 300, 380, 460]) for (const y of [80, 160, 240, 320]) slots.push({ x, y }); }
  const free = (pt) => !D.some((p) => Math.hypot(p.x - pt.x, p.y - pt.y) < 70);
  const nextSlot = () => slots.find((s) => free(s) && (!sym || free(mirror({ x: s.x, y: s.y, r: 0 }, sym)))) || slots[D.length % slots.length];
  const axisSlot = () => {
    const cand = sym === 'vertical' ? [80, 160, 240, 320].map((y) => ({ x: CX, y })) : [80, 160, 240, 320, 400, 480].map((x) => ({ x, y: CY }));
    return cand.find(free) || cand[0];
  };
  // count 개를 더한다(대칭이면 짝으로, 홀수 하나는 접는 선 위에)
  const add = (a, count, at) => {
    while (count > 0) {
      if (sym && (count >= 2 || at)) {
        const pt = at || nextSlot(); const p = Object.assign({}, a, { x: pt.x, y: pt.y, r: 0 });
        D.push(p); D.push(Object.assign({}, a, mirror(p, sym))); count -= 2;
      } else if (sym) { const pt = axisSlot(); D.push(Object.assign({}, a, { x: pt.x, y: pt.y, r: 0 })); count -= 1; }
      else { const pt = at || nextSlot(); D.push(Object.assign({}, a, { x: pt.x, y: pt.y, r: 0 })); count -= 1; at = null; }
    }
  };
  const addAt = (a, pt) => { if (sym) { add(a, 2, pt); } else add(a, 1, pt); };

  // 1) 지금 작품의 대칭 짝 채우기
  if (sym) for (let k = 0; k < 30; k++) {
    const miss = symmetryMiss(D, sym); if (!miss) break;
    D.push({ shape: miss.shape, color: miss.color, size: miss.size, x: mirror(miss, sym).x, y: mirror(miss, sym).y, r: mirror(miss, sym).r });
  }
  // 2) 개수(has)
  for (const q of T.has || []) {
    const n = D.filter((p) => matches(p, q)).length;
    let want = n;
    if (q.n != null) want = q.n; else if (q.min != null) want = Math.max(q.min, Math.min(n, q.max ?? Infinity)); else if (q.max != null) want = Math.min(n, q.max);
    for (let k = n; k > want; k--) { const i = D.map((p, j) => (matches(p, q) ? j : -1)).filter((j) => j >= 0).pop(); D.splice(i, 1); }
    if (want > n) add(attrsOf(q), want - n);
  }
  // 3) 전체 조각 수
  if (T.pieces) {
    const q = T.pieces; const cnt = q.n ?? (q.min != null ? Math.max(D.length, q.min) : D.length);
    const upto = q.max != null ? Math.min(cnt, q.max) : cnt;
    while (D.length > upto) D.pop();
    if (D.length < upto) add(filler(), upto - D.length);
  }
  // 4) 대비 색: 맞닿은 짝 하나
  if (T.contrast) {
    const rule = ['complement', 'warm-cool', 'light-dark'].includes(T.contrast) ? T.contrast : 'complement';
    const touch = () => D.some((a, i) => D.some((b, j) => i !== j && pairOK(rule, a, b) && touching(a, b)));
    if (!touch()) {
      const small = av.size.includes('s') ? 's' : av.size[0];
      const gap = (a, b) => Math.floor((R(a) + R(b) + 10) / 20) * 20;
      let done = false;
      for (const a of D) {
        const partner = av.color.find((c) => pairOK(rule, a, { color: c }));
        if (!partner) continue;
        const b = { shape: defShape, color: partner, size: small };
        const dx = gap(a, b); const x = a.x + dx <= W - 40 ? a.x + dx : a.x - dx;
        addAt(b, { x, y: a.y }); done = true; break;
      }
      if (!done) {
        const ca = av.color.find((a) => av.color.some((b) => a !== b && pairOK(rule, { color: a }, { color: b })));
        const cb = av.color.find((b) => pairOK(rule, { color: ca }, { color: b }));
        const A = { shape: defShape, color: ca, size: small }; const B = { shape: defShape, color: cb, size: small };
        const pt = nextSlot(); addAt(A, pt); addAt(B, { x: pt.x + gap(A, B), y: pt.y });
      }
    }
  }
  // 5) 겹침
  if (T.overlap) {
    for (let k = 0; k < T.overlap; k++) { const a = filler(); const pt = nextSlot(); addAt(a, pt); addAt(a, pt); }
  }
  // 6) 자유 작품 점검: 조각 수
  if (T.selfCheck) { const need2 = T.minPieces || 1; while (D.length < need2) add(filler(), 1); }
  if (D.length > maxPieces) return fail('unreachable', `필요한 조각 ${D.length}개가 한 판에 붙일 수 있는 수(${maxPieces})를 넘음`);
  if (!satisfies(D, T)) return fail('driver-limit', '목표를 만족하는 작품을 조작기가 그리지 못함(규칙 조합 한계)');
  return { D };
}

// ---- 현재 조각 ↔ 완성 작품 짝짓기 ----
function assign(cur, D) {
  const asg = Array(D.length).fill(-1); const used = new Set();
  D.forEach((d, i) => { const j = cur.findIndex((p, k) => !used.has(k) && sameKind(p, d) && p.x === d.x && p.y === d.y && sameRot(d.shape, p.r || 0, d.r)); if (j >= 0) { asg[i] = j; used.add(j); } });
  D.forEach((d, i) => {
    if (asg[i] >= 0) return;
    let best = -1; let bd = Infinity;
    cur.forEach((p, k) => { if (used.has(k) || !sameKind(p, d)) return; const dd = Math.hypot(p.x - d.x, p.y - d.y); if (dd < bd) { bd = dd; best = k; } });
    if (best >= 0) { asg[i] = best; used.add(best); }
  });
  return { asg, extras: cur.map((_, k) => k).filter((k) => !used.has(k)) };
}
const rotClicks = (shape, from, to, step) => { for (let k = 0; k <= Math.ceil(360 / step); k++) if (sameRot(shape, nr(from + k * step), to)) return k; return null; };

export async function drive({ page, root: rootSel, target, options, prompt, toolId, persona, readState, log }) {
  const ctx = makeCtx({ page, persona, readState, log });
  const o = options || {}; const T = target || {};
  const R0 = rootSel || '#tool';
  const tool = page.locator(R0);
  const rotStep = o.rotStep || 45;
  try {
    // 이 단계 고르개(DOM 이 진실)
    const av = await page.evaluate(({ o, root }) => {
      const vals = (k) => [...document.querySelectorAll(`${root} [data-k="${k}"]`)].map((b) => b.dataset.v);
      const sizes = vals('size');
      return { shape: vals('shape'), color: vals('color'), size: sizes.length ? sizes : [((o.sizes || []).filter((x) => ['s', 'm', 'l'].includes(x))[0]) || 'm'] };
    }, { o, root: R0 });
    if (!av.shape.length || !av.color.length) ctx.stop('control-missing', '모양·색 고르개가 화면에 없음');

    let s = await ctx.read();
    const keyboard = ctx.input === 'keyboard';
    const pieceLoc = (i) => tool.locator('g.cg-piece').nth(i);

    // 1) 목표에 닿는 완성 작품 계획
    let planned = { D: [] };
    const needPieces = !!(T.match || T.has || T.pieces || T.symmetry || T.repeat || T.contrast || T.overlap || T.selfCheck);
    if (needPieces) planned = planPieces(T, s.pieces || [], av, o);
    if (planned.err) ctx.stop(planned.err.kind, planned.err.msg);
    const D = planned.D;
    // 돌리기로 닿을 수 있는지(돌리기 각 rotStep)
    for (const d of D) if (rotClicks(d.shape, 0, d.r, rotStep) == null) ctx.stop('unreachable', `조각 방향 ${d.r}° 를 ‘돌리기’(${rotStep}°씩)로 만들 수 없음`);

    // 판 좌표 → 화면 좌표
    const ctm = async () => {
      await tool.locator('svg').first().scrollIntoViewIfNeeded().catch(() => {});
      return page.evaluate((root) => { const l = document.querySelector(`${root} .pk-layer--pieces`); const m = l && l.getScreenCTM(); return m ? { a: m.a, d: m.d, e: m.e, f: m.f } : null; }, R0);
    };
    const toScreen = (m, x, y) => ({ x: m.a * x + m.e, y: m.d * y + m.f });

    // 조각 i 를 잡을 수 있는 점(그 조각이 맨 위로 눌리는 점)
    const grabPoint = async (i, p) => {
      const m = await ctm(); if (!m) ctx.stop('driver-limit', '판 좌표를 못 읽음');
      const r0 = R(p);
      const offs = [[0, 0], [r0 * 0.5, 0], [-r0 * 0.5, 0], [0, r0 * 0.5], [0, -r0 * 0.5], [r0 * 0.7, r0 * 0.7], [-r0 * 0.7, -r0 * 0.7], [r0 * 0.7, -r0 * 0.7], [-r0 * 0.7, r0 * 0.7]];
      const pts = offs.map(([dx, dy]) => toScreen(m, p.x + dx, p.y + dy));
      const k = await page.evaluate(({ pts, i, root }) => { const g = document.querySelectorAll(`${root} g.cg-piece`)[i]; return pts.findIndex((q) => { const el = document.elementFromPoint(q.x, q.y); return el && g && el.closest('g.cg-piece') === g; }); }, { pts, i, root: R0 });
      if (k < 0) ctx.stop('driver-limit', `${i + 1}번째 조각이 다른 조각에 가려 눌리는 점을 못 찾음`);
      return { pt: pts[k], m };
    };
    const select = async (i, p) => {
      if (keyboard) { await tabTo(ctx, pieceLoc(i), `${i + 1}번째 조각`); return; }
      const { pt } = await grabPoint(i, p);
      await checkTouchSize(ctx, pieceLoc(i), `${i + 1}번째 조각(${p.color} ${SHAPE_NAME[p.shape]}, ${SIZE_NAME[p.size]})`, '.pk-hit');
      await pointTap(ctx, pt.x, pt.y);
    };
    const rotateSel = async (k) => {
      for (let n = 0; n < k; n++) {
        if (keyboard) await press(ctx, 'r');
        else await activate(ctx, tool.locator('[data-cg="rot"]'), '돌리기 단추');
      }
    };
    const moveTo = async (i, p, x, y) => {
      if (p.x === x && p.y === y) return;
      if (keyboard) {
        // 조각에 초점이 있을 때 방향키로 한 칸(20)씩
        const dx = Math.round((x - p.x) / G); const dy = Math.round((y - p.y) / G);
        for (let n = 0; n < Math.abs(dx); n++) await press(ctx, dx > 0 ? 'ArrowRight' : 'ArrowLeft');
        for (let n = 0; n < Math.abs(dy); n++) await press(ctx, dy > 0 ? 'ArrowDown' : 'ArrowUp');
        return;
      }
      const { pt, m } = await grabPoint(i, p);
      const to = { x: pt.x + m.a * (x - p.x), y: pt.y + m.d * (y - p.y) };
      const vp = page.viewportSize();
      if (vp && (to.x < 2 || to.y < 2 || to.x > vp.width - 2 || to.y > vp.height - 2)) ctx.stop('driver-limit', '끌어 놓을 자리가 화면 밖');
      await pointDrag(ctx, pt, to);
    };
    const ensurePick = async (k, v) => {
      const b = tool.locator(`[data-k="${k}"][data-v="${v}"]`);
      if (!(await b.count())) { if (k === 'size') return; ctx.stop('unreachable', `고르개에 ${k === 'shape' ? '모양' : '색'} ‘${v}’ 이(가) 없음`); }
      if ((await b.getAttribute('aria-checked')) === 'true') return;
      await activate(ctx, b, `고르개 ${k === 'shape' ? '모양' : k === 'color' ? '색' : '크기'} ‘${v}’`);
    };

    // 2) 지금 작품을 완성 작품으로 바꾼다
    let last = '';
    for (let iter = 0; iter < 90 && needPieces; iter++) {
      s = await ctx.read();
      const cur = (s.pieces || []).map((p) => Object.assign({ r: 0 }, p));
      const { asg, extras } = assign(cur, D);
      const sig = JSON.stringify(cur);
      if (sig === last) ctx.stop('driver-limit', '조작했는데 작품이 바뀌지 않음(같은 자리에서 멈춤)');
      last = sig;
      if (extras.length) { // 필요 없는 조각 떼기
        const k = extras[extras.length - 1];
        await select(k, cur[k]);
        if (keyboard) await press(ctx, 'Delete'); else await activate(ctx, tool.locator('[data-cg="del"]'), '떼기 단추');
        continue;
      }
      const i = D.findIndex((d, n) => { const j = asg[n]; return j < 0 || cur[j].x !== d.x || cur[j].y !== d.y || !sameRot(d.shape, cur[j].r, d.r); });
      if (i < 0) break;
      const d = D[i]; const j = asg[i];
      if (j >= 0) { // 있는 조각을 옮기고 돌린다
        const p = cur[j];
        const k = sameRot(d.shape, p.r, d.r) ? 0 : rotClicks(d.shape, p.r, d.r, rotStep);
        if (k) { await select(j, p); await rotateSel(k); }
        if (p.x !== d.x || p.y !== d.y) {
          if (keyboard && !k) await select(j, p); // 키보드: 조각에 초점이 있어야 방향키가 듣는다(돌린 뒤에는 이미 그 조각에 있다)
          await moveTo(j, p, d.x, d.y);
        }
      } else { // 새 조각 붙이기
        if (cur.length >= Math.max(2, Math.min(40, o.maxPieces || 24))) ctx.stop('unreachable', `조각은 ${o.maxPieces || 24}개까지만 붙일 수 있음`);
        await ensurePick('shape', d.shape); await ensurePick('color', d.color); await ensurePick('size', d.size);
        await activate(ctx, tool.locator('[data-cg="add"]'), '붙이기 단추');
        await sleep(60);
        const n2 = ((await ctx.read()).pieces || []);
        const idx = n2.length - 1; if (idx < 0) ctx.stop('ui-error', '붙이기를 눌렀는데 조각이 생기지 않음');
        const p = Object.assign({ r: 0 }, n2[idx]);
        const k = rotClicks(d.shape, 0, d.r, rotStep);
        if (k) await rotateSel(k); // 방금 붙인 조각이 골라져 있다(키보드는 초점도 그 조각에)
        if (p.x !== d.x || p.y !== d.y) await moveTo(idx, p, d.x, d.y);
      }
    }

    // 3) 스스로 점검 표시
    if (T.selfCheck) {
      s = await ctx.read();
      if ((await tool.locator('[data-chk]').count()) < T.selfCheck.length) ctx.stop('control-missing', '스스로 점검 칸이 모자람');
      for (let i = 0; i < T.selfCheck.length; i++) if (!(s.checks || [])[i]) await activate(ctx, tool.locator(`[data-chk="${i}"]`), `스스로 점검 ‘${T.selfCheck[i]}’`, { key: ' ' });
    }
    await sleep(80); s = await ctx.read();
    const ps = (s.pieces || []).map((p) => Object.assign({ r: 0 }, p));
    const ok = needPieces ? satisfies(ps, T) && (!T.selfCheck || T.selfCheck.every((_, i) => (s.checks || [])[i])) : false;
    return finish(ctx, null, ok);
  } catch (e) {
    return finish(ctx, e, false);
  }
}
