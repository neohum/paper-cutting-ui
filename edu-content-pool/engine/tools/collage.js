/* 색종이 콜라주 판 — 미술·즐거운 생활의 '모양·색·크기를 골라 붙이고, 옮기고, 돌리고, 겹치는' 조형 활동.
 * 가위 대신 고르기: 위에서 모양·색·크기를 고르고 '붙이기'를 누르면 판 가운데에 조각이 놓인다. 조각은 끌어 옮기고(20칸 격자),
 * 아래 단추로 돌리기(45°)·위로·아래로(겹침 순서)·떼기를 한다. 작품 전체가 상태(getState)에 남아 교사가 결과에서 다시 본다.
 *
 * target 칸(섞어 쓸 수 있다 — 모두 맞아야 정답)
 * | 칸                                   | 뜻 (판정 규칙)                                                                                   |
 * | ------------------------------------ | ------------------------------------------------------------------------------------------------ |
 * | symmetry: 'vertical' | 'horizontal'  | 가운데 접는 선(세로/가로)을 기준으로 모든 조각에 같은 모양·색·크기의 짝이 같은 거리·뒤집힌 방향에 있다 |
 * | repeat: { times, unit?, axis? }      | 왼쪽→오른쪽(axis 'y'면 위→아래) 순서로 한 묶음(unit개 이상, 기본 2)이 times번 넘게 똑같이 되풀이된다 |
 * | contrast: 'complement'|'warm-cool'|'light-dark' | 보색(빨강-초록·주황-파랑·노랑-보라)/따뜻한-차가운/밝은-어두운 색 조각이 서로 맞닿거나 겹친다 |
 * | has: [{ shape?, color?, size?, n?, min?, max? }] | 그런 조각의 개수(n = 꼭 그만큼, min/max = 범위)                                         |
 * | pieces: { n?, min?, max? }           | 전체 조각 수                                                                                     |
 * | overlap: n                           | 겹친 조각 짝이 n쌍 넘게                                                                          |
 * | match: [조각, …]                     | 보기 작품과 똑같이(모양·색·크기·자리·방향) — '보고 따라 만들기'                                   |
 * | selfCheck: ['…'], minPieces?         | 자유 작품: 조각을 minPieces(기본 1)개 넘게 붙이고 점검 목록을 모두 표시                           |
 *
 * 옵션: shapes(고르개 모양, 기본 ['circle','square','triangle','rect','semi','star','heart','leaf']), colors(기본 10색), sizes(['s','m','l']),
 *       guide(접는 선 보이기 — symmetry 문항은 기본으로 보임; 'vertical'|'horizontal'|false), bg(판 바탕색 이름), maxPieces(기본 24),
 *       rotStep(돌리기 각, 기본 45), readOnly(작품 보기만 — 활동지·감상), print
 * 모양: circle 동그라미, square 네모, rect 긴 네모, triangle 세모, semi 반원, star 별, heart 하트, leaf 나뭇잎, diamond 마름모
 * 색: 빨강 주황 노랑 초록 파랑 보라 분홍 갈색 검정 하양 / 크기: s 작게, m 보통, l 크게
 * 상태: { pieces: [{ shape, color, size, x, y, r }, …](뒤에 있을수록 위에 붙음), checks?: [true|false…] }  — 판은 560×400, 가운데 (280, 200), x·y는 20의 배수
 * revealAfterCheck: 값을 드러내는 표시가 없는 교구라 무시한다.
 * 키보드: 고르개 Tab+Enter → '붙이기'. 조각에 Tab → 방향키 = 한 칸 옮기기, R = 돌리기, PageUp/PageDown = 위로/아래로, Delete = 떼기.
 * 예: { prompt: '세로 접는 선을 기준으로 양쪽이 똑같은 나비를 꾸며 보세요.', state: { pieces: [{ shape:'heart', color:'분홍', size:'l', x:220, y:180, r:270 }] },
 *       target: { symmetry: 'vertical', pieces: { min: 4 } } }
 */
(function (K) {
  'use strict';
  // 받침 따라 조사 고르기(동그라미가 / 세모가 / 하트가 / 나뭇잎이)
  const jo = (w, a, b) => { const c = String(w).charCodeAt(String(w).length - 1) - 0xac00; return `${w}${c >= 0 && c <= 11171 && c % 28 !== 0 ? a : b}`; };
  const levelOf = (opts) => {
    const want = opts && Number.isInteger(opts.level) ? opts.level : 1;
    const a = opts && Number.isFinite(opts.attempts) ? opts.attempts : null;
    const cap = a == null ? 3 : a >= 2 ? 3 : a >= 1 ? 2 : 1;
    return Math.max(1, Math.min(3, want, cap));
  };
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const W = 560; const H = 400; const CX = 280; const CY = 200; const G = 20;
  const SHAPES = {
    circle: { name: '동그라미', period: 1 }, square: { name: '네모', period: 90 }, rect: { name: '긴 네모', period: 180 },
    triangle: { name: '세모', period: 120 }, semi: { name: '반원', period: 360 }, star: { name: '별', period: 72 },
    heart: { name: '하트', period: 360 }, leaf: { name: '나뭇잎', period: 180 }, diamond: { name: '마름모', period: 180 },
  };
  const COLORS = {
    빨강: { fill: '#E8655A', layer: '#B8463D', warm: 1, tone: 'mid' }, 주황: { fill: '#F39A4C', layer: '#C9732E', warm: 1, tone: 'mid' },
    노랑: { fill: '#F6D35B', layer: '#C9A630', warm: 1, tone: 'light' }, 초록: { fill: '#6DBE7B', layer: '#479457', warm: -1, tone: 'mid' },
    파랑: { fill: '#5E9BD6', layer: '#3F74A8', warm: -1, tone: 'mid' }, 보라: { fill: '#9C7CCB', layer: '#7656A6', warm: -1, tone: 'dark' },
    분홍: { fill: '#F3A6C0', layer: '#CF7F9B', warm: 1, tone: 'light' }, 갈색: { fill: '#A67450', layer: '#7C5236', warm: 0, tone: 'dark' },
    검정: { fill: '#3D352E', layer: '#1E1915', warm: 0, tone: 'dark' }, 하양: { fill: '#FFFDF8', layer: '#E5DCCB', warm: 0, tone: 'light' },
  };
  const COMP = { 빨강: '초록', 초록: '빨강', 주황: '파랑', 파랑: '주황', 노랑: '보라', 보라: '노랑' };
  const SIZES = { s: { name: '작게', R: 20 }, m: { name: '보통', R: 32 }, l: { name: '크게', R: 52 } };
  const SH0 = ['circle', 'square', 'triangle', 'rect', 'semi', 'star', 'heart', 'leaf'];
  const nr = (r) => ((Math.round(r) % 360) + 360) % 360;
  const sameRot = (shape, a, b) => { const p = (SHAPES[shape] || SHAPES.circle).period; return p === 1 || nr(a - b) % p === 0; };
  const R = (p) => (SIZES[p.size] || SIZES.m).R;
  const nameOf = (p) => `${p.color} ${(SHAPES[p.shape] || SHAPES.circle).name}`;
  const clampX = (x) => Math.max(40, Math.min(W - 40, Math.round(x / G) * G));
  const clampY = (y) => Math.max(40, Math.min(H - 40, Math.round(y / G) * G));
  const touching = (a, b, slack) => Math.hypot(a.x - b.x, a.y - b.y) <= R(a) + R(b) + (slack == null ? 10 : slack);
  const overlapping = (a, b) => Math.hypot(a.x - b.x, a.y - b.y) < R(a) + R(b) - 8;
  const sameKind = (a, b) => a.shape === b.shape && a.color === b.color && a.size === b.size;
  const matches = (p, q) => (!q.shape || p.shape === q.shape) && (!q.color || p.color === q.color) && (!q.size || p.size === q.size);
  const reqName = (q) => `${q.size ? `${SIZES[q.size].name} ` : ''}${q.color ? `${q.color} ` : ''}${q.shape ? SHAPES[q.shape].name : '조각'}`;
  const pairOK = (rule, a, b) => {
    if (rule === 'complement') return COMP[a.color] === b.color;
    if (rule === 'warm-cool') return COLORS[a.color].warm * COLORS[b.color].warm === -1;
    return (COLORS[a.color].tone === 'light' && COLORS[b.color].tone === 'dark') || (COLORS[a.color].tone === 'dark' && COLORS[b.color].tone === 'light');
  };
  const CONTRAST = { complement: '보색(서로 반대되는 색)', 'warm-cool': '따뜻한 색과 차가운 색', 'light-dark': '밝은 색과 어두운 색' };

  // ---- 판정 규칙 ----
  function mirror(p, axis) { return axis === 'horizontal' ? { x: p.x, y: 2 * CY - p.y, r: nr(180 - p.r) } : { x: 2 * CX - p.x, y: p.y, r: nr(-p.r) }; }
  function symmetryMiss(ps, axis) {
    const used = new Set();
    for (let i = 0; i < ps.length; i++) {
      if (used.has(i)) continue;
      const m = mirror(ps[i], axis);
      // 접는 선 위에 놓인 조각은 자기 자신이 짝이 될 수 있다(k === i)
      const j = ps.findIndex((q, k) => !used.has(k) && sameKind(q, ps[i]) && q.x === m.x && q.y === m.y && sameRot(q.shape, q.r, m.r));
      if (j < 0) return ps[i];
      used.add(i); used.add(j);
    }
    return null;
  }
  const keyOf = (p) => `${p.shape}|${p.color}|${p.size}|${nr(p.r) % ((SHAPES[p.shape] || SHAPES.circle).period === 1 ? 360 : SHAPES[p.shape].period)}`;
  function repeatInfo(ps, rule) {
    const axis = rule.axis === 'y' ? 'y' : 'x'; const other = axis === 'x' ? 'y' : 'x';
    const seq = ps.slice().sort((a, b) => a[axis] - b[axis] || a[other] - b[other]).map(keyOf);
    const min = Math.max(1, rule.unit || 2); const times = rule.times || 3;
    for (let L = min; L <= seq.length / 2; L++) {
      if (seq.length % L) continue;
      if (new Set(seq.slice(0, L)).size < Math.min(2, L)) continue;
      if (seq.every((k, i) => k === seq[i % L])) return { ok: seq.length / L >= times, L, k: seq.length / L, seq };
    }
    // 어디서 처음 어긋났는지(첫 묶음 길이를 min으로 보고)
    let bad = seq.findIndex((k, i) => i >= min && k !== seq[i % min]);
    return { ok: false, L: 0, k: 0, seq, bad: bad < 0 ? seq.length : bad };
  }
  function judge(s, t, o) {
    s = s || {}; t = t || {}; const ps = (s.pieces || []).filter((p) => SHAPES[p.shape] && COLORS[p.color]);
    const rules = ['symmetry', 'repeat', 'contrast', 'has', 'pieces', 'overlap', 'match'].filter((k) => t[k] != null);
    if (!ps.length) return { correct: false, incomplete: true, feedback: '위에서 모양·색·크기를 고르고 ‘붙이기’를 눌러 조각을 붙여 보세요.', hint: '조각을 하나 붙인 뒤 끌어서 옮겨요.' };
    if (t.match) {
      const want = t.match; const left = ps.slice(); let miss = null;
      for (const q of want) { const i = left.findIndex((p) => sameKind(p, q) && p.x === q.x && p.y === q.y && sameRot(p.shape, p.r, q.r || 0)); if (i < 0) { miss = q; break; } left.splice(i, 1); }
      if (miss) {
        const near = ps.find((p) => sameKind(p, miss));
        if (!near) return { correct: false, feedback: `보기 작품의 ${SIZES[miss.size].name} ${jo(nameOf(miss), '이', '가')} 내 작품에 없어요.`, hint: `${jo(nameOf(miss), '을', '를')} 골라 붙여요.`, rule: 'match', miss };
        if (near.x !== miss.x || near.y !== miss.y) return { correct: false, feedback: `${nameOf(miss)}의 자리가 보기와 달라요.`, hint: `${jo(nameOf(miss), '을', '를')} 보기와 같은 자리로 옮겨요. 판의 점선 칸을 세어 보세요.`, rule: 'match', miss, piece: near };
        return { correct: false, feedback: `${nameOf(miss)}의 방향이 보기와 달라요.`, hint: `${jo(nameOf(miss), '을', '를')} 골라 ‘돌리기’로 방향을 맞추어요.`, rule: 'match', miss, piece: near };
      }
      if (left.length) return { correct: false, feedback: `보기에 없는 조각이 ${left.length}개 더 있어요.`, hint: `${jo(nameOf(left[0]), '을', '를')} 떼어 내요.`, rule: 'match', piece: left[0] };
    }
    if (t.has) for (const q of t.has) {
      const n = ps.filter((p) => matches(p, q)).length;
      if (q.n != null && n !== q.n) return { correct: false, feedback: `${jo(reqName(q), '이', '가')} ${n}개예요. 문제에서 말한 개수와 달라요.`, hint: `${jo(reqName(q), '을', '를')} ${n < q.n ? '더 붙여요' : '떼어 내요'}.`, rule: 'has', q, n };
      if (q.min != null && n < q.min) return { correct: false, feedback: `${jo(reqName(q), '이', '가')} 모자라요(지금 ${n}개).`, hint: `${jo(reqName(q), '을', '를')} 더 붙여요.`, rule: 'has', q, n };
      if (q.max != null && n > q.max) return { correct: false, feedback: `${jo(reqName(q), '이', '가')} 너무 많아요(지금 ${n}개).`, hint: `${jo(reqName(q), '을', '를')} 몇 개 떼어 내요.`, rule: 'has', q, n };
    }
    if (t.pieces) {
      const q = t.pieces; const n = ps.length;
      if ((q.n != null && n !== q.n) || (q.min != null && n < q.min) || (q.max != null && n > q.max)) return { correct: false, feedback: `조각이 모두 ${n}개예요. 문제에서 말한 수에 맞지 않아요.`, hint: n < (q.n ?? q.min ?? 0) ? '조각을 더 붙여요.' : '조각을 몇 개 떼어 내요.', rule: 'pieces' };
    }
    if (t.symmetry) {
      const axis = t.symmetry === 'horizontal' ? 'horizontal' : 'vertical'; const miss = symmetryMiss(ps, axis);
      if (miss) {
        const m = mirror(miss, axis); const twin = ps.find((q) => q !== miss && sameKind(q, miss) && Math.abs(q.x - m.x) <= 60 && Math.abs(q.y - m.y) <= 60);
        const side = axis === 'vertical' ? (miss.x < CX ? '왼쪽' : miss.x > CX ? '오른쪽' : '접는 선 위') : (miss.y < CY ? '위쪽' : miss.y > CY ? '아래쪽' : '접는 선 위');
        if (twin && twin.x === m.x && twin.y === m.y) return { correct: false, feedback: `${side} ${jo(nameOf(miss), '과', '와')} 짝 조각의 방향이 거울처럼 뒤집혀 있지 않아요.`, hint: `짝 조각을 골라 ‘돌리기’로 거울에 비친 방향이 되게 해요.`, rule: 'symmetry', piece: twin, miss };
        if (twin) return { correct: false, feedback: `${side} ${nameOf(miss)}의 짝이 접는 선에서 떨어진 거리가 달라요.`, hint: '두 조각이 접는 선에서 똑같은 칸 수만큼 떨어지게 옮겨요.', rule: 'symmetry', piece: twin, miss };
        return { correct: false, feedback: `${side} ${jo(nameOf(miss), '과', '와')} 짝이 되는 조각이 반대쪽에 없어요.`, hint: `같은 ${jo(nameOf(miss), '을', '를')} 하나 더 붙여 반대쪽 같은 거리에 놓아요.`, rule: 'symmetry', miss };
      }
    }
    if (t.repeat) {
      const rp = repeatInfo(ps, t.repeat);
      if (!rp.L) return { correct: false, feedback: `조각이 놓인 차례가 일정하게 되풀이되지 않아요(${rp.bad + 1}번째 조각부터 달라요).`, hint: '맨 앞의 한 묶음을 정하고, 그 묶음과 똑같은 모양·색·방향 차례로 이어 놓아요.', rule: 'repeat', bad: rp.bad };
      if (!rp.ok) return { correct: false, feedback: `${rp.L}개 묶음이 ${rp.k}번 되풀이돼요. 더 여러 번 되풀이해 보세요.`, hint: '같은 묶음을 한 번 더 이어 붙여요.', rule: 'repeat' };
    }
    if (t.contrast) {
      const rule = CONTRAST[t.contrast] ? t.contrast : 'complement';
      let ok = false; for (let i = 0; i < ps.length && !ok; i++) for (let j = 0; j < ps.length && !ok; j++) if (i !== j && pairOK(rule, ps[i], ps[j]) && touching(ps[i], ps[j])) ok = true;
      if (!ok) {
        const has = ps.some((a) => ps.some((b) => a !== b && pairOK(rule, a, b)));
        return { correct: false, feedback: has ? `${CONTRAST[rule]} 조각이 있지만 서로 떨어져 있어요. 맞닿게 놓아야 대비가 잘 보여요.` : `${CONTRAST[rule]}이 함께 놓이지 않았어요.`, hint: has ? '대비되는 두 조각을 옆에 붙이거나 겹쳐 놓아요.' : rule === 'complement' ? '빨강-초록, 주황-파랑, 노랑-보라처럼 짝이 되는 색을 붙여요.' : rule === 'warm-cool' ? '빨강·주황·노랑·분홍(따뜻한 색) 옆에 초록·파랑·보라(차가운 색)를 놓아요.' : '하양·노랑·분홍(밝은 색) 옆에 검정·갈색·보라(어두운 색)를 놓아요.', rule: 'contrast', has };
      }
    }
    if (t.overlap) {
      let n = 0; for (let i = 0; i < ps.length; i++) for (let j = i + 1; j < ps.length; j++) if (overlapping(ps[i], ps[j])) n++;
      if (n < t.overlap) return { correct: false, feedback: `겹친 조각이 ${n}쌍이에요. 조각을 더 겹쳐 보세요.`, hint: '큰 조각 위에 작은 조각을 옮겨 놓아 겹쳐요. ‘위로·아래로’로 순서를 바꿀 수 있어요.', rule: 'overlap' };
    }
    if (t.selfCheck) {
      const need = t.minPieces || 1; const checks = s.checks || [];
      if (ps.length < need) return { correct: false, feedback: '조각을 더 붙여 작품을 만든 뒤 점검해요.', hint: '고르개에서 조각을 더 골라 붙여요.', rule: 'self' };
      const left = t.selfCheck.filter((_, i) => !checks[i]);
      if (left.length) return { correct: false, feedback: `아직 표시하지 않은 점검 항목이 ${left.length}개 있어요.`, hint: `‘${left[0]}’를 해 보았는지 살펴보고 표시해요.`, rule: 'self', left };
      return { correct: true, feedback: '작품을 완성하고 스스로 점검을 마쳤어요! 친구들에게 내 작품의 생각을 말해 보세요.' };
    }
    if (!rules.length) return { correct: false, incomplete: true, feedback: '문제에서 하라는 것을 해 보세요.' };
    const said = t.symmetry ? '접는 선 양쪽이 거울처럼 똑같아요' : t.repeat ? '같은 묶음이 차례대로 되풀이돼요' : t.contrast ? `${CONTRAST[t.contrast] || '대비되는 색'}이 맞닿아 눈에 잘 띄어요` : t.match ? '보기 작품과 똑같아요' : '조각을 알맞게 붙였어요';
    return { correct: true, feedback: `맞아요! ${said}.` };
  }

  // ---- 정답 만들기 ----
  const P0 = (shape, color, size, x, y, r) => ({ shape, color, size, x, y, r: r || 0 });
  // 대칭 문항은 학생(또는 문항)이 이미 놓은 조각을 살려 빠진 짝만 채운다 — 작품을 지우고 새로 놓지 않는다
  function solve(t, o, cur) {
    t = t || {}; o = o || {};
    if (t.symmetry && cur && cur.pieces && cur.pieces.length) {
      const axis = t.symmetry === 'horizontal' ? 'horizontal' : 'vertical';
      const s = withChecks({ pieces: cur.pieces.map((p) => Object.assign({}, p)) }, t);
      for (let k = 0; k < 40; k++) { const miss = symmetryMiss(s.pieces, axis); if (!miss) break; s.pieces.push(Object.assign({}, miss, mirror(miss, axis))); }
      if (judge(s, t, o).correct) return s;
    }
    const shapes = (o.shapes || SH0).filter((k) => SHAPES[k]); const colors = (o.colors || Object.keys(COLORS)).filter((k) => COLORS[k]);
    if (t.match) return withChecks({ pieces: t.match.map((p) => P0(p.shape, p.color, p.size || 'm', p.x, p.y, p.r || 0)) }, t);
    // 1) 재료 목록
    let base = [];
    for (const q of t.has || []) { const n = q.n != null ? q.n : q.min != null ? q.min : 1; for (let i = 0; i < n; i++) base.push(P0(q.shape || shapes[0], q.color || colors[(base.length) % colors.length], q.size || 'm', 0, 0)); }
    if (t.contrast) {
      const rule = CONTRAST[t.contrast] ? t.contrast : 'complement';
      const pick = rule === 'complement' ? ['빨강', '초록'] : rule === 'warm-cool' ? ['주황', '파랑'] : ['노랑', '보라'];
      const has = base.some((a) => base.some((b) => a !== b && pairOK(rule, a, b)));
      if (!has) { const allowed = (q) => !(t.has || []).some((h) => h.n != null && matches(q, h)); for (const c of pick) { const q = P0(shapes[0], c, 'm', 0, 0); if (allowed(q)) base.push(q); } }
    }
    const needN = Math.max(t.pieces ? (t.pieces.n ?? t.pieces.min ?? 1) : 1, t.selfCheck ? t.minPieces || 1 : 1, t.overlap ? t.overlap * 2 : 1);
    const pad = () => { const c = colors[(base.length + 2) % colors.length]; return P0(shapes[base.length % shapes.length], c, 'm', 0, 0); };
    let pieces = [];
    if (t.repeat) {
      const rp = t.repeat; const L = Math.max(rp.unit || 2, 2); const times = rp.times || 3;
      const unit = []; base.forEach((p) => { if (!unit.some((u) => sameKind(u, p))) unit.push(p); });
      while (unit.length < L) unit.push(P0(shapes[unit.length % shapes.length], colors[unit.length % colors.length], 'm', 0, 0));
      const n = unit.length * times; const axis = rp.axis === 'y' ? 'y' : 'x';
      const span = (axis === 'x' ? W : H) - 80; const step = Math.max(G, Math.floor(span / Math.max(1, n - 1) / G) * G);
      for (let i = 0; i < n; i++) { const u = unit[i % unit.length]; const v = 40 + i * Math.min(step, 60); pieces.push(P0(u.shape, u.color, n > 9 ? 's' : u.size === 'l' ? 'm' : u.size, axis === 'x' ? clampX(v) : CX, axis === 'x' ? CY : clampY(v), u.r)); }
    } else {
      while (base.length < needN) base.push(pad());
      if (t.symmetry) {
        const axis = t.symmetry === 'horizontal' ? 'horizontal' : 'vertical';
        // 같은 조각 둘은 거울 짝으로, 홀로 남은 조각은 접는 선 위에(가로 접기면 옆으로 눕혀 — 세로로 대칭인 모양이 가로로도 대칭이 된다)
        const left = base.slice(); let row = 0; let onAxis = 0; let along = 0; let prevR = 0;
        while (left.length) {
          const p = left.shift(); const j = left.findIndex((q) => sameKind(q, p));
          if (j >= 0) {
            left.splice(j, 1);
            const d = 60 + (row % 4) * 40; const y0 = 80 + Math.floor(row / 4) * 0 + (row % 3) * 100;
            const a = axis === 'vertical' ? P0(p.shape, p.color, p.size, clampX(CX - d), clampY(y0), 0) : P0(p.shape, p.color, p.size, clampX(80 + (row % 5) * 100), clampY(CY - d), 0);
            const m = mirror(a, axis); pieces.push(a, P0(p.shape, p.color, p.size, m.x, m.y, m.r)); row++;
          } else {
            // 접는 선 위 조각끼리는 맞닿게 잇는다(색 대비 조건이 함께 있어도 맞도록)
            along = onAxis ? along + Math.round((prevR + R(p)) / G) * G : (axis === 'vertical' ? 60 : 80); prevR = R(p);
            const a = axis === 'vertical' ? P0(p.shape, p.color, p.size, CX, clampY(along), 0) : P0(p.shape, p.color, p.size, clampX(along), CY, 90);
            pieces.push(a); onAxis++;
          }
        }
      } else {
        // 차례로 가까이 붙여 놓는다(대비·겹침이 맞닿게): 앞 조각 둘씩 겹쳐 놓기
        base.forEach((p, i) => { const col = i % 6; const rowI = Math.floor(i / 6); pieces.push(P0(p.shape, p.color, p.size, clampX(100 + col * 60), clampY(120 + rowI * 120), 0)); });
        if (t.overlap) for (let i = 0; i < pieces.length - 1 && i < t.overlap * 2; i += 2) { pieces[i + 1].x = pieces[i].x + 20; pieces[i + 1].y = pieces[i].y; }
      }
      if (t.overlap && t.symmetry) {
        // 접는 선 위에 큰 조각과 작은 조각을 겹쳐 더한다(대칭은 그대로)
        const axis = t.symmetry === 'horizontal' ? 'horizontal' : 'vertical';
        for (let i = 0; i < t.overlap; i++) {
          const x = axis === 'vertical' ? CX : clampX(120 + i * 140); const y = axis === 'vertical' ? clampY(300 - i * 110) : CY;
          pieces.push(P0('circle', colors[i % colors.length], 'l', x, y, 0), P0('circle', colors[(i + 3) % colors.length], 's', x, y, 0));
        }
      }
    }
    return withChecks({ pieces }, t);
  }
  const withChecks = (s, t) => (t.selfCheck ? Object.assign(s, { checks: t.selfCheck.map(() => true) }) : s);

  function wrongAnswer(t, o, cur) {
    t = t || {}; const good = solve(t, o); const ps = good.pieces; const list = [];
    const clone = () => JSON.parse(JSON.stringify(good));
    if (t.symmetry) {
      const axis = t.symmetry === 'horizontal' ? 'horizontal' : 'vertical';
      // 짝 조각을 한 칸 덜/더 떨어지게(거리를 눈으로 대충 맞추는 실수), 방향을 거울이 아니라 같은 쪽으로 돌림
      ps.forEach((p, i) => {
        const off = axis === 'vertical' ? p.x !== CX : p.y !== CY;
        if (!off) return;
        const a = clone(); if (axis === 'vertical') a.pieces[i].x += p.x > CX ? G : -G; else a.pieces[i].y += p.y > CY ? G : -G; list.push(a);
        if ((SHAPES[p.shape].period || 1) > 90) { const b = clone(); b.pieces[i].r = nr(p.r + 90); list.push(b); }
      });
      // 정답이 선 위 조각뿐이면 한쪽에만 붙이고 짝을 빠뜨린 작품을 만든다
      if (!list.length) { const a = clone(); a.pieces.push(axis === 'vertical' ? { shape: 'heart', color: '분홍', size: 'm', x: CX - 4 * G, y: CY, r: 0 } : { shape: 'heart', color: '분홍', size: 'm', x: CX, y: CY - 4 * G, r: 0 }); list.push(a); }
    }
    if (t.repeat && ps.length >= 3) { const a = clone(); const sorted = a.pieces.slice().sort((x, y) => x.x - y.x || x.y - y.y); const p1 = sorted[sorted.length - 1]; const p2 = sorted[sorted.length - 2]; [p1.color, p2.color, p1.shape, p2.shape] = [p2.color, p1.color, p2.shape, p1.shape]; list.push(a); }
    if (t.contrast) { const a = clone(); const rule = CONTRAST[t.contrast] ? t.contrast : 'complement'; a.pieces.forEach((p) => { if (rule === 'light-dark' ? COLORS[p.color].tone === 'dark' : COLORS[p.color].warm === -1 || COMP[p.color] === undefined) p.color = rule === 'light-dark' ? '빨강' : '주황'; }); list.push(a); }
    if (t.has) { for (const q of t.has) { const i = ps.findIndex((p) => matches(p, q)); if (i >= 0) { const a = clone(); if (q.n != null || q.min != null) a.pieces.splice(i, 1); else a.pieces.push(Object.assign({}, a.pieces[i], { x: clampX(a.pieces[i].x + 40) })); list.push(a); } } }
    if (t.match) ps.forEach((p, i) => { const a = clone(); a.pieces[i].x = clampX(p.x + G); list.push(a); const b = clone(); b.pieces[i].r = nr(p.r + 45); list.push(b); });
    if (t.overlap) { const a = clone(); a.pieces.forEach((p, i) => { p.x = clampX(60 + (i % 5) * 110); p.y = clampY(80 + Math.floor(i / 5) * 120); p.size = 's'; }); list.push(a); }
    if (t.pieces) { const a = clone(); if (a.pieces.length > 1) { a.pieces.pop(); list.push(a); } }
    if (t.selfCheck) { const a = clone(); a.checks[a.checks.length - 1] = false; list.push(a); }
    const curJ = JSON.stringify(cur || {});
    const cand = list.filter((x) => { const r = judge(x, t, o); return !r.correct && !r.incomplete; });
    return cand.find((x) => JSON.stringify(x) !== curJ) || cand[0] || null;
  }
  function hintFor(s, t, o, opts) {
    t = t || {}; const r = judge(s, t, o);
    if (r.correct) return { hint: '지금 작품이 문제의 조건에 맞아요.', correct: true };
    const lv = levelOf(opts);
    if (lv <= 1) {
      if (r.incomplete) return { hint: '먼저 위에서 모양·색·크기를 고르고 붙이기를 눌러요. 붙인 조각은 끌어서 옮겨요.', correct: false };
      if (t.symmetry) return { hint: '접는 선을 거울이라고 생각해요. 한쪽 조각마다 똑같은 조각이 반대쪽, 선에서 같은 거리에 거꾸로 비친 방향으로 있어야 해요.', correct: false };
      if (t.repeat) return { hint: '몇 개를 한 묶음으로 정하고, 그 묶음을 똑같은 차례로 이어 놓아요. 맨 앞부터 손가락으로 짚으며 묶음을 세어 보세요.', correct: false };
      if (t.contrast) return { hint: '서로 반대되는 느낌의 색을 맞닿게 놓으면 눈에 확 띄어요. 색의 짝을 생각해 보세요.', correct: false };
      if (t.match) return { hint: '보기 작품의 조각을 하나씩 짚으며 모양·색·크기·자리·방향을 차례로 견주어요.', correct: false };
      if (t.selfCheck && r.rule === 'self') return { hint: '작품을 다시 보고, 정말 해낸 것만 목록에서 하나씩 표시해요.', correct: false };
      return { hint: '문제에 나온 조건을 하나씩 짚으며 조각의 개수와 놓인 자리를 세어 보세요.', correct: false };
    }
    if (lv === 2) return { hint: r.hint || r.feedback, correct: false };
    if (r.rule === 'symmetry' && r.miss) {
      const m = mirror(r.miss, t.symmetry === 'horizontal' ? 'horizontal' : 'vertical');
      const dist = t.symmetry === 'horizontal' ? Math.abs(r.miss.y - CY) / G : Math.abs(r.miss.x - CX) / G;
      return { hint: `${nameOf(r.miss)}은(는) 접는 선에서 ${dist}칸 떨어져 있어요. 짝 조각도 반대쪽으로 ${dist}칸 떨어진 자리에 놓고, 방향은 ${m.r === r.miss.r ? '그대로' : '거울처럼 반대로'} 돌려요.`, correct: false };
    }
    if (r.rule === 'self' && r.left) return { hint: `점검 항목 ‘${r.left[0]}’를 해 보고, 했으면 표시해요.`, correct: false };
    return { hint: r.hint || r.feedback, correct: false };
  }
  function distance(a, b) {
    const x = (a && a.pieces) || []; const y = (b && b.pieces) || []; let d = Math.abs(x.length - y.length);
    for (let i = 0; i < Math.min(x.length, y.length); i++) {
      const p = x[i]; const q = y[i];
      d += (Math.abs(p.x - q.x) + Math.abs(p.y - q.y)) / G + (nr(p.r - q.r) ? 1 : 0) + (p.shape !== q.shape) + (p.color !== q.color) + (p.size !== q.size);
    }
    const cx = (a && a.checks) || []; const cy = (b && b.checks) || [];
    for (let i = 0; i < Math.max(cx.length, cy.length); i++) if (!!cx[i] !== !!cy[i]) d++;
    return d;
  }
  const core = { judge, solve, wrongAnswer, hint: hintFor, distance, SHAPES, COLORS };

  // ---- 조각 모양(종이 조각) ----
  function shapeOf(k, r0) {
    const r = r0;
    switch (k) {
      case 'circle': return { type: 'circle', r };
      case 'square': return { type: 'rect', w: r * 1.8, h: r * 1.8, rx: r * 0.12 };
      case 'rect': return { type: 'rect', w: r * 2.3, h: r * 1.1, rx: r * 0.1 };
      case 'triangle': return { type: 'poly', points: `0,${-r} ${(r * 0.87).toFixed(1)},${(r * 0.5).toFixed(1)} ${(-r * 0.87).toFixed(1)},${(r * 0.5).toFixed(1)}` };
      case 'semi': return { type: 'path', d: `M${-r} ${r * 0.4} A ${r} ${r} 0 0 1 ${r} ${r * 0.4} Z` };
      case 'star': { const pts = []; for (let i = 0; i < 10; i++) { const a = (Math.PI / 5) * i - Math.PI / 2; const q = i % 2 ? r * 0.45 : r; pts.push(`${(Math.cos(a) * q).toFixed(1)},${(Math.sin(a) * q).toFixed(1)}`); } return { type: 'poly', points: pts.join(' ') }; }
      case 'heart': return { type: 'path', d: `M0 ${r * 0.85} C ${-r * 1.3} ${-r * 0.1} ${-r * 0.55} ${-r * 1.05} 0 ${-r * 0.35} C ${r * 0.55} ${-r * 1.05} ${r * 1.3} ${-r * 0.1} 0 ${r * 0.85} Z` };
      case 'leaf': return { type: 'path', d: `M0 ${-r} Q ${r * 0.75} 0 0 ${r} Q ${-r * 0.75} 0 0 ${-r} Z` };
      case 'diamond': return { type: 'poly', points: `0,${-r} ${(r * 0.7).toFixed(1)},0 0,${r} ${(-r * 0.7).toFixed(1)},0` };
      default: return { type: 'circle', r };
    }
  }

  K.registerTool('collage', {
    name: '색종이 콜라주 판',
    core,
    create(box, o, kit) {
      const P = kit.palette; const print = !!o.print; const readOnly = !!o.readOnly || print;
      const shapes = (o.shapes || SH0).filter((k) => SHAPES[k]); const colors = (o.colors || Object.keys(COLORS)).filter((k) => COLORS[k]);
      const sizes = (o.sizes || ['s', 'm', 'l']).filter((k) => SIZES[k]);
      const maxPieces = Math.max(2, Math.min(40, o.maxPieces || 24)); const rotStep = o.rotStep || 45;
      let pieces = []; let checks = []; let target = null; let sel = -1;
      let pick = { shape: shapes[0], color: colors[0], size: sizes[Math.min(1, sizes.length - 1)] };
      let pal = null; let ctl = null; let msg = null; let selfBox = null;
      const say = (t) => { if (msg) msg.textContent = t; kit.announce(t); };

      if (!readOnly) {
        pal = document.createElement('div'); pal.className = 'cg-pal'; pal.setAttribute('role', 'group'); pal.setAttribute('aria-label', '색종이 고르기');
        pal.style.cssText = 'display:grid;gap:6px;margin-bottom:8px';
        const row = (k, label, list, txt, sw) => `<div role="radiogroup" aria-label="${label}" style="display:flex;flex-wrap:wrap;gap:6px;align-items:center"><b style="min-width:2.6em;font-size:15px">${label}</b>${list.map((v) => `<button type="button" class="pl-btn pl-btn--small cg-pick" data-k="${k}" data-v="${v}" role="radio" aria-checked="false" tabindex="0" style="min-height:44px;min-width:44px;padding:4px 10px">${sw ? `<span aria-hidden="true" style="display:inline-block;width:18px;height:18px;border-radius:50%;background:${COLORS[v].fill};border:1.5px solid ${COLORS[v].layer}"></span>` : ''}${txt(v)}</button>`).join('')}</div>`;
        pal.innerHTML = row('shape', '모양', shapes, (v) => SHAPES[v].name) + row('color', '색', colors, (v) => v, true) + (sizes.length > 1 ? row('size', '크기', sizes, (v) => SIZES[v].name) : '')
          + `<div><button type="button" class="pl-btn pl-btn--primary cg-add" data-cg="add" tabindex="0" style="min-height:44px"><i class="fi fi-rr-plus" aria-hidden="true"></i> 붙이기</button></div>`;
        pal.addEventListener('click', (e) => {
          const b = e.target.closest('button'); if (!b) return;
          if (b.dataset.k) { pick[b.dataset.k] = b.dataset.v; paintPal(); const f = pal.querySelector(`[data-k="${b.dataset.k}"][data-v="${b.dataset.v}"]`); if (f) f.focus(); kit.tick(); return; }
          if (b.dataset.cg === 'add') add();
        });
        pal.addEventListener('keydown', (e) => {
          const b = e.target.closest('[data-k]'); const d = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
          if (!b || !d) return;
          e.preventDefault(); const sib = [...pal.querySelectorAll(`[data-k="${b.dataset.k}"]`)]; const i = (sib.indexOf(b) + d + sib.length) % sib.length;
          sib[i].focus(); sib[i].click();
        });
        box.prepend(pal);
      }
      function paintPal() { if (pal) pal.querySelectorAll('[data-k]').forEach((b) => b.setAttribute('aria-checked', String(pick[b.dataset.k] === b.dataset.v))); }

      const st = kit.stage(box, { viewBox: [W, H], label: '색종이 콜라주 판. 조각을 붙이고 끌어 옮겨요.', background: o.bg && COLORS[o.bg] ? COLORS[o.bg].fill : '#FFF9EE' });
      const BL = st.layer('board'); const PL = st.layer('pieces');
      // 칸 점(옮길 자리 세기)과 접는 선
      for (let x = G * 2; x < W; x += G * 2) for (let y = G * 2; y < H; y += G * 2) kit.el('circle', { cx: x, cy: y, r: 1.4, fill: print ? '#999' : '#D9CEBB' }, BL);
      const guideL = kit.el('g', null, BL);
      function paintGuide() {
        guideL.textContent = '';
        const g = o.guide != null ? o.guide : target && target.symmetry ? target.symmetry : false;
        if (!g) return;
        const ink = print ? '#000' : P.lavender.dark;
        if (g === 'horizontal') kit.el('line', { x1: 10, y1: CY, x2: W - 10, y2: CY, stroke: ink, 'stroke-width': 2, 'stroke-dasharray': '10 7' }, guideL);
        else kit.el('line', { x1: CX, y1: 10, x2: CX, y2: H - 10, stroke: ink, 'stroke-width': 2, 'stroke-dasharray': '10 7' }, guideL);
        kit.el('text', { x: g === 'horizontal' ? W - 16 : CX + 8, y: g === 'horizontal' ? CY - 8 : 26, 'text-anchor': g === 'horizontal' ? 'end' : 'start', 'font-size': 14, class: 'pk-text', fill: ink }, guideL).textContent = '접는 선';
      }

      if (!readOnly) {
        ctl = document.createElement('div'); ctl.className = 'cg-ctl'; ctl.setAttribute('role', 'group'); ctl.setAttribute('aria-label', '고른 조각 다루기');
        ctl.style.cssText = 'display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin-top:8px';
        const b = (act, icon, text) => `<button type="button" class="pl-btn pl-btn--small" data-cg="${act}" tabindex="0" style="min-height:44px"><i class="fi ${icon}" aria-hidden="true"></i> ${text}</button>`;
        ctl.innerHTML = `<span class="cg-sel" style="font-weight:700;min-width:7em"></span>${b('rot', 'fi-rr-rotate-right', '돌리기')}${b('up', 'fi-rr-layer-plus', '위로')}${b('down', 'fi-rr-layer-minus', '아래로')}${b('del', 'fi-rr-trash', '떼기')}`;
        ctl.addEventListener('click', (e) => { const x = e.target.closest('[data-cg]'); if (x) act(x.dataset.cg, x); });
        box.appendChild(ctl);
        msg = document.createElement('p'); msg.className = 'cg-msg'; msg.setAttribute('aria-live', 'polite');
        msg.style.cssText = 'margin:6px 2px 0;min-height:1.4em;font-weight:700;line-height:1.45;word-break:keep-all';
        box.appendChild(msg);
      }
      function paintCtl() {
        if (!ctl) return;
        const p = pieces[sel];
        ctl.querySelector('.cg-sel').textContent = p ? `고른 조각: ${nameOf(p)}` : '조각을 눌러 골라요';
        ctl.querySelectorAll('[data-cg]').forEach((x) => x.setAttribute('aria-disabled', String(!p)));
      }
      function act(a, focusBtn) {
        const p = pieces[sel]; if (!p) { say('먼저 판에서 조각을 눌러 골라요.'); return; }
        if (a === 'rot') { p.r = nr(p.r + rotStep); changed(`${nameOf(p)}를 돌렸어요.`); }
        else if (a === 'up' && sel < pieces.length - 1) { pieces.splice(sel, 1); pieces.splice(sel + 1, 0, p); sel++; changed(`${nameOf(p)}를 한 칸 위로 올렸어요.`); }
        else if (a === 'down' && sel > 0) { pieces.splice(sel, 1); pieces.splice(sel - 1, 0, p); sel--; changed(`${nameOf(p)}를 한 칸 아래로 내렸어요.`); }
        else if (a === 'del') { pieces.splice(sel, 1); sel = Math.min(sel, pieces.length - 1); changed(`${nameOf(p)}를 떼었어요.`); }
        else return;
        if (focusBtn && focusBtn.isConnected) focusBtn.focus();
      }
      function add() {
        if (pieces.length >= maxPieces) { kit.tick('no'); say(`조각은 ${maxPieces}개까지 붙여요. 필요 없는 조각을 떼어 내요.`); return; }
        // 가운데부터 비어 있는 자리를 찾아 놓는다(같은 자리에 겹쳐 쌓이지 않게)
        let x = CX; let y = CY;
        for (let k = 0; k < 30; k++) { const cx = clampX(CX + ((k % 5) - 2) * 80); const cy = clampY(CY + (Math.floor(k / 5) % 3 - 1) * 100); if (!pieces.some((p) => p.x === cx && p.y === cy)) { x = cx; y = cy; break; } }
        pieces.push({ shape: pick.shape, color: pick.color, size: pick.size, x, y, r: 0 }); sel = pieces.length - 1;
        kit.tick(); changed(`${SIZES[pick.size].name} ${nameOf(pick)}를 붙였어요. 끌거나 방향키로 옮겨요.`);
        const g = PL.querySelectorAll('.cg-piece')[sel]; if (g) g.focus();
      }

      function draw() {
        PL.textContent = '';
        pieces.forEach((p, i) => {
          const g = kit.el('g', { class: 'cg-piece' }, PL);
          kit.el('circle', { r: Math.max(24, R(p) + 4), class: 'pk-hit' }, g);
          const inner = kit.el('g', null, g);
          const c = COLORS[p.color];
          const pc = kit.piece(st, inner, { shape: shapeOf(p.shape, R(p)), color: 'cream', depth: 2, fill: c.fill, stroke: p.color === '하양' ? '#CFC5B4' : undefined });
          pc.under.forEach((u) => u.setAttribute('fill', c.layer));
          if (p.r) kit.transform(inner, { r: p.r });
          if (i === sel && !readOnly) kit.el('circle', { r: R(p) + 8, fill: 'none', stroke: P.lavender.dark, 'stroke-width': 2.5, 'stroke-dasharray': '6 5', 'pointer-events': 'none' }, g);
          // 흑백 활동지에서도 색을 알 수 있게 색 이름을 적는다
          if (print && o.printColors !== false) kit.el('text', { x: 0, y: 5, 'text-anchor': 'middle', 'font-size': p.size === 's' ? 10 : 13, class: 'pk-text', fill: '#000' }, g).textContent = p.color;
          kit.transform(g, { x: p.x, y: p.y });
          g.setAttribute('aria-label', `${i + 1}번째 조각: ${SIZES[p.size].name} ${nameOf(p)}${p.r ? `, ${p.r}도 돌림` : ''}`);
          if (readOnly) return;
          kit.drag(st, g, {
            bounds: [40, 40, W - 40, H - 40], keyStep: G,
            onStart() { sel = i; },
            snap(x, y) { return { x: clampX(x), y: clampY(y) }; },
            onMove(x, y) { if (!g.classList.contains('pk-lifted')) { p.x = clampX(x); p.y = clampY(y); kit.transform(g, { x: p.x, y: p.y }); sel = i; kit.recorder.log('collage', state()); kit.announce(`${nameOf(p)} 옮김`); } },
            onDrop(x, y, via) { p.x = x; p.y = y; sel = i; changed(via === 'keyboard' ? '' : `${nameOf(p)}를 옮겼어요.`, true); },
            keyActivate() { sel = i; paintSel(); paintCtl(); say(`${nameOf(p)}를 골랐어요. 방향키로 옮기고, R로 돌려요.`); },
          });
          g.addEventListener('pointerdown', () => { if (sel !== i) { sel = i; paintSel(); paintCtl(); } });
          g.addEventListener('keydown', (e) => {
            const k = e.key;
            const a = k === 'r' || k === 'R' ? 'rot' : k === 'PageUp' ? 'up' : k === 'PageDown' ? 'down' : k === 'Delete' || k === 'Backspace' ? 'del' : null;
            if (!a) return;
            e.preventDefault(); sel = i; act(a);
            const f = PL.querySelectorAll('.cg-piece')[Math.max(0, sel)]; if (f) f.focus();
          });
        });
      }
      function paintSel() { PL.querySelectorAll('.cg-piece').forEach((g, i) => { const ring = g.querySelector('circle[stroke-dasharray]'); if (ring) ring.remove(); if (i === sel && pieces[i]) kit.el('circle', { r: R(pieces[i]) + 8, fill: 'none', stroke: P.lavender.dark, 'stroke-width': 2.5, 'stroke-dasharray': '6 5', 'pointer-events': 'none' }, g); }); }

      const selfItems = () => (target && target.selfCheck) || o.selfCheck || null;
      function paintSelf() {
        const items = selfItems();
        if (readOnly || !items) { if (selfBox) { selfBox.remove(); selfBox = null; } return; }
        if (!selfBox) {
          selfBox = document.createElement('div'); selfBox.className = 'cg-self'; selfBox.setAttribute('role', 'group'); selfBox.setAttribute('aria-label', '스스로 점검');
          selfBox.style.cssText = 'display:grid;gap:6px;margin-top:8px';
          selfBox.addEventListener('click', (e) => { const b = e.target.closest('[data-chk]'); if (!b) return; const i = Number(b.dataset.chk); checks[i] = !checks[i]; changed(checks[i] ? '표시했어요.' : '표시를 지웠어요.'); const f = selfBox.querySelector(`[data-chk="${i}"]`); if (f) f.focus(); });
          box.appendChild(selfBox);
        }
        selfBox.innerHTML = `<b style="font-size:15px"><i class="fi fi-rr-list-check" aria-hidden="true"></i> 스스로 점검 — 해낸 것을 눌러 표시해요</b>${items.map((x, i) => `<button type="button" class="pl-btn pl-btn--small" data-chk="${i}" role="checkbox" aria-checked="${!!checks[i]}" tabindex="0" style="justify-content:flex-start;white-space:normal;text-align:left;line-height:1.35;min-height:44px;${checks[i] ? 'font-weight:800;background:var(--pc-mint-light,#EAF7F1)' : 'font-weight:500'}"><i class="fi ${checks[i] ? 'fi-rr-checkbox' : 'fi-rr-square'}" aria-hidden="true"></i> ${esc(x)}</button>`).join('')}`;
      }
      function state() {
        const s = { pieces: pieces.map((p) => ({ shape: p.shape, color: p.color, size: p.size, x: p.x, y: p.y, r: p.r })) };
        if (selfItems()) s.checks = selfItems().map((_, i) => !!checks[i]);
        return s;
      }
      function changed(text, keepDom) {
        if (!keepDom) draw(); else { // 끌기로 맨 위에 올라간 DOM을 붙인 순서로 되돌린다
          const gs = [...PL.querySelectorAll('.cg-piece')]; draw(); const f = PL.querySelectorAll('.cg-piece')[sel]; if (f && gs.length) f.focus();
        }
        paintCtl(); paintSelf();
        if (text) say(text);
        kit.recorder.log('collage', state());
      }
      function load(s) {
        s = s || {};
        pieces = (s.pieces || []).filter((p) => SHAPES[p.shape] && COLORS[p.color]).map((p) => ({ shape: p.shape, color: p.color, size: SIZES[p.size] ? p.size : 'm', x: clampX(p.x ?? CX), y: clampY(p.y ?? CY), r: nr(p.r || 0) }));
        checks = (s.checks || []).map(Boolean); sel = -1;
        if (msg) msg.textContent = '';
        draw(); paintCtl(); paintSelf();
      }
      paintPal(); paintGuide(); load({});

      return {
        getState: state,
        setState: load,
        setTarget(t) { target = t || null; paintGuide(); paintSelf(); },
        reset() { load({}); },
        solve(t) { load(solve(t || target, o, state())); },
        check(t, opts) {
          const r = judge(state(), t || target, o);
          if (!(opts && opts.forHint) && !r.correct && r.piece) {
            const i = pieces.findIndex((p) => sameKind(p, r.piece) && p.x === r.piece.x && p.y === r.piece.y);
            const g = PL.querySelectorAll('.cg-piece')[i];
            if (g) { g.classList.add('pk-no'); setTimeout(() => g.classList.remove('pk-no'), 2200); }
          }
          return { correct: r.correct, incomplete: r.incomplete, feedback: r.feedback, hint: r.hint };
        },
        hint(t, opts) { return hintFor(state(), t || target, o, opts); },
        wrongAnswer(t) { return wrongAnswer(t || target, o, state()); },
        distance,
        async demo(t) {
          const s = solve(t || target, o); load({});
          for (const p of s.pieces) { pieces.push(Object.assign({}, p)); sel = pieces.length - 1; kit.tick(); changed(''); await kit.wait(380); }
          load(s);
        },
      };
    },
  });
})(window.PaperKit);
