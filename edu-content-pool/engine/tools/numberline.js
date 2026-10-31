/* 수직선 — 눈금 범위·간격(자연수·분수·소수)을 차시 데이터로 정하고, 점 놓기·뛰어 세기 화살표·점 읽기를 한다.
 * 수학(수의 크기·덧셈뺄셈·곱셈의 뛰어 세기·분수/소수의 크기), 사회·과학(연표처럼 수 위의 자리)에 두루 쓴다.
 *
 * 옵션(toolOptions·levels)
 * | 키 | 뜻 | 기본 |
 * | min, max | 수직선 처음·끝 수 | 0, 10 |
 * | step | 큰 눈금 간격 | 1 |
 * | sub | 큰 눈금 한 칸을 몇 칸으로 나눌지(작은 눈금) — 작은 눈금 한 칸 = step ÷ sub | 1 |
 * | format | 'int' 자연수 · 'dec' 소수 · 'frac' 분수 눈금 글자 | 칸 크기가 정수면 'int', 아니면 'dec' |
 * | den | 분수 분모(format 'frac') | sub ÷ step |
 * | mixed | 분수를 대분수로 쓰기(1 1/4) | false |
 * | labels | 'major' 큰 눈금 · 'all' 모든 눈금 · 'ends' 양 끝만 · 'none' | 'major' |
 * | labelAt | 더 적을 눈금 수 배열(예 [0, 1]) | — |
 * | mode | 'place' 점 놓기 · 'jump' 뛰어 세기 · 'read' 점 읽기 | 'place' |
 * | count | place: 놓을 점 수(없으면 target.points 길이) | 1 |
 * | names | 점 이름 | ['가','나','다','라'] |
 * | showValue | 점·도착점 위에 지금 수를 보인다(쉬움) | false |
 * | marks | 미리 찍힌 점 [{ v, name? }] 또는 수 배열 — read 모드는 첫째 점(또는 target.mark 번)을 읽는다 | [] |
 * | choices | read: 고르기 보기 글 배열 | — |
 * | input | read: 'number'면 수를 직접 쓴다(3/4·0.75·1 1/2) | choices 없으면 'number' |
 * | fixedFrom | jump: 출발점을 잠근다(state.from 또는 이 값) | — |
 * | hopStep | jump: 뛰는 크기를 바꾸는 단위 | 작은 눈금 한 칸 |
 * | hopSize | jump: 처음 뛰는 크기 | hopStep |
 * | backward | jump: 뒤로 뛰기 단추(뺄셈) | true |
 * | question | read: 질문 글을 바꾼다 | '가 점이 나타내는 수를 고르세요.' |
 * | why | read: 보기마다 틀렸을 때 할 말 배열 | — |
 * | revealAfterCheck | 점 위의 수·도착점 수를 맞힌 확인 뒤에만 보인다 | — |
 * | print | 활동지 그림(조작 칸·지금 수 숨김, 놓인 점과 이름만) | — |
 *
 * 상태
 * | 모드 | 모양 |
 * | place | { points: [수|null, …] } — null은 아직 수직선 위에 놓지 않은 점(왼쪽 위 받침에 있음) |
 * | jump | { from: 수|null, hops: [뛴 크기(뒤로는 음수), …], size: 지금 뛰는 크기 } |
 * | read | { pick: 번호|null } 또는 { answer: '쓴 글'|null } |
 *
 * target
 * | 모드 | 모양 |
 * | place | { points: [수 또는 '3/4'·'1 1/2', …] } — 차례대로 가·나…의 자리 |
 * | jump | { from?, size?, count?, end? } — 하나 이상. 예 3씩 4번: { from: 0, size: 3, count: 4 }, 5+7: { from: 5, end: 12 } |
 * | read | { pick: 번호 } 또는 { value: 수, form?: 'frac'|'dec'|'int', mark?: 번호 } |
 *
 * 예) 0~1을 10칸, 0.7에 점: toolOptions { min: 0, max: 1, sub: 10, format: 'dec', labels: 'ends' }, target { points: [0.7] }
 *     분수 읽기: toolOptions { max: 2, sub: 4, format: 'frac', mode: 'read', marks: [1.25] }, target { value: '5/4', form: 'frac' }
 *     3씩 뛰어 세기: toolOptions { max: 20, mode: 'jump', hopSize: 1, fixedFrom: 0 }, target { from: 0, size: 3, count: 4 }
 * 키보드: 점에 Tab → ←/→ 작은 눈금 한 칸, Shift+←/→·PageUp/PageDown 큰 눈금 한 칸, Home/End 끝, Delete 받침으로 되돌리기.
 *         뛰어 세기·읽기는 아래 단추(Tab+Enter)로 한다.
 */
(function (K) {
  'use strict';
  const EPS = 1e-6;
  const r6 = (v) => Math.round(v * 1e6) / 1e6;
  // '3이에요'·'2예요'·'3/4이에요'(4분의 3)·'오른쪽이에요' — 끝 글자(수는 읽는 소리)의 받침을 따라
  const isIt = (w) => { const s = String(w).replace(/[’'"”)\]\s]+$/, '').replace(/(\d+)\/\d+$/, '$1'); const c = s.charCodeAt(s.length - 1); const has = c >= 0xac00 && c <= 0xd7a3 ? (c - 0xac00) % 28 > 0 : /[013678]$/.test(s); return `${w}${has ? '이에요' : '예요'}`; };
  const gcd = (a, b) => (b ? gcd(b, a % b) : Math.abs(a));
  // '3/4', '1 1/2', '0.75', 3 → 수. 못 읽으면 NaN
  function parseNum(v) {
    if (typeof v === 'number') return v;
    if (typeof v !== 'string') return NaN;
    const s = v.trim().replace(/\s+/g, ' ');
    let m = /^(-?\d+) (\d+)\/(\d+)$/.exec(s);
    if (m) return Number(m[1]) + Math.sign(Number(m[1]) || 1) * (Number(m[2]) / Number(m[3]));
    m = /^(-?\d+)\/(\d+)$/.exec(s);
    if (m) return Number(m[2]) ? Number(m[1]) / Number(m[2]) : NaN;
    if (/^-?\d*\.?\d+$/.test(s)) return Number(s);
    return NaN;
  }
  const hintLevel = (opts) => {
    const want = Math.max(1, Math.min(3, Math.floor((opts && opts.level) || 1)));
    const a = opts && Number.isInteger(opts.attempts) ? opts.attempts : null;
    return a == null ? want : Math.min(want, a >= 2 ? 3 : a >= 1 ? 2 : 1);
  };
  function ensureStyle() {
    if (document.getElementById('nl-style')) return;
    const s = document.createElement('style'); s.id = 'nl-style';
    s.textContent = `
.nl-panel{display:grid;gap:8px;margin-top:8px}
.nl-row{display:flex;flex-wrap:wrap;gap:8px;align-items:center}
.nl-q{margin:0;font-weight:700;line-height:1.45;word-break:keep-all}
.nl-picks{display:grid;grid-template-columns:repeat(auto-fit,minmax(96px,1fr));gap:8px}
.nl-b{min-height:44px;min-width:44px;padding:6px 12px;border-radius:12px;border:1px solid rgba(61,53,46,.22);background:#FFFDF9;color:#3D352E;font:inherit;font-weight:700;line-height:1.3;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;gap:6px;word-break:keep-all}
.nl-b .fi{display:inline-flex;line-height:1}
.nl-b[aria-checked="true"],.nl-b[aria-pressed="true"]{background:#EAF7F1;box-shadow:0 0 0 3px #82C2A8}
.nl-size{min-width:4.5em;min-height:44px;display:inline-flex;align-items:center;justify-content:center;font-weight:800;color:#473B6B;background:#F4F0FA;border-radius:12px;padding:0 8px}
.nl-in{min-height:44px;width:8em;box-sizing:border-box;padding:6px 10px;border-radius:10px;border:2px solid #82C2A8;font:inherit;font-size:1.1em;font-weight:800;text-align:center;color:#275C46;background:#fff}
@media print{.nl-panel{display:none}}
`;
    document.head.appendChild(s);
  }
  function button(parent, html, label, onClick) {
    const b = document.createElement('button'); b.type = 'button'; b.className = 'nl-b'; b.setAttribute('tabindex', '0');
    b.innerHTML = html; if (label) b.setAttribute('aria-label', label);
    b.addEventListener('click', onClick); parent.appendChild(b); return b;
  }

  K.registerTool('numberline', {
    name: '수직선',
    create(box, o, kit) {
      ensureStyle();
      const mode = ['place', 'jump', 'read'].includes(o.mode) ? o.mode : 'place';
      const min = Number.isFinite(parseNum(o.min)) ? parseNum(o.min) : 0;
      let max = Number.isFinite(parseNum(o.max)) ? parseNum(o.max) : 10;
      if (max <= min) max = min + 10;
      const stepV = parseNum(o.step) > 0 ? parseNum(o.step) : 1;
      const sub = Math.max(1, Math.min(20, Math.round(o.sub || 1)));
      const unit = stepV / sub;
      const N = Math.max(1, Math.min(200, Math.round((max - min) / unit)));
      const isInt = (v) => Math.abs(v - Math.round(v)) < EPS;
      const format = ['int', 'dec', 'frac'].includes(o.format) ? o.format : (isInt(unit) && isInt(min) ? 'int' : 'dec');
      const den = Math.max(1, Math.round(o.den || (isInt(stepV) ? sub / stepV : sub)));
      const controls = !o.print;
      const names = Array.isArray(o.names) && o.names.length ? o.names : ['가', '나', '다', '라', '마', '바'];
      const valOf = (k) => r6(min + k * unit);
      const tickOf = (v) => Math.round((v - min) / unit);
      const onGrid = (v) => Math.abs((v - min) / unit - tickOf(v)) < 1e-4;
      // 눈금 글자: 자연수 · 소수(필요한 자리까지) · 분수(den 기준, 약분하지 않는다 — 수직선 칸을 세게)
      function fmt(v) {
        if (format === 'frac') {
          const k = Math.round(v * den);
          if (Math.abs(v * den - k) > 1e-4) return String(r6(v));
          if (k % den === 0) return String(k / den);
          if (o.mixed && Math.abs(k) > den) { const w = Math.trunc(k / den); return `${w} ${Math.abs(k % den)}/${den}`; }
          return `${k}/${den}`;
        }
        if (format === 'int') return String(Math.round(v));
        return String(Math.round(v * 1000) / 1000);
      }
      const fmtSigned = (v) => (v < 0 ? `−${fmt(-v)}` : `+${fmt(v)}`);

      const W = 640; const H = mode === 'jump' ? 230 : 210; const LY = mode === 'jump' ? 150 : 130;
      const X0 = 44; const X1 = W - 44; const tp = (X1 - X0) / N;
      const xOf = (k) => X0 + k * tp;
      // 수직선을 누르는 띠 높이: 휴대폰(그림이 약 0.48배로 줄어듦)에서도 44px 이상
      const HIT = 96;
      const st = kit.stage(box, { viewBox: [W, H], label: `수직선. ${fmt(min)}부터 ${fmt(max)}까지${mode === 'place' ? '. 점을 알맞은 자리에 놓으세요.' : mode === 'jump' ? '. 화살표로 뛰어 세어 보세요.' : '. 점이 나타내는 수를 읽으세요.'}` });
      kit.piece(st, st.layer('back'), { shape: { type: 'rect', x: 8, y: 8, w: W - 16, h: H - 16, rx: 16 }, color: 'cream', fill: '#FBF6EC', depth: 2, texture: true });
      const lineL = st.layer('line');
      // 선과 눈금은 맨 도형(칼선 조각이 아님) — 인쇄에서도 검은 선으로 남는다
      kit.el('line', { x1: X0 - 16, y1: LY, x2: X1 + 16, y2: LY, stroke: '#3D352E', 'stroke-width': 3, 'stroke-linecap': 'round' }, lineL);
      kit.el('polygon', { points: `${X1 + 26},${LY} ${X1 + 14},${LY - 7} ${X1 + 14},${LY + 7}`, fill: '#3D352E' }, lineL);
      if (min !== 0 || o.arrowLeft) kit.el('polygon', { points: `${X0 - 26},${LY} ${X0 - 14},${LY - 7} ${X0 - 14},${LY + 7}`, fill: '#3D352E' }, lineL);
      for (let k = 0; k <= N; k++) {
        const major = k % sub === 0;
        kit.el('line', { x1: xOf(k), y1: LY - (major ? 13 : 7), x2: xOf(k), y2: LY + (major ? 13 : 7), stroke: '#3D352E', 'stroke-width': major ? 2.4 : 1.4 }, lineL);
      }
      // 눈금 글자: 겹치지 않게 큰 눈금 몇 개마다 적을지 정한다(휴대폰에서 글자가 1.5배까지 커지는 것을 셈에 넣음)
      const labL = st.layer('labels');
      const labelKind = ['major', 'all', 'ends', 'none'].includes(o.labels) ? o.labels : 'major';
      const charW = 15 * 0.62 * 1.5;
      const widthOf = (txt) => (format === 'frac' && /\//.test(txt) ? Math.max(...txt.split(/[ /]/).map((x) => x.length)) * charW + (txt.includes(' ') ? charW * 1.4 : 0) : txt.length * charW) + 8;
      const want = new Set();
      if (labelKind !== 'none') { want.add(0); want.add(N); }
      if (labelKind === 'major' || labelKind === 'all') {
        const per = labelKind === 'all' ? 1 : sub;
        let need = 0; for (let k = 0; k <= N; k += per) need = Math.max(need, widthOf(fmt(valOf(k))));
        let stride = per; while (stride * tp < need && stride < N) stride += per;
        if (labelKind === 'all' && stride > 1) { stride = sub; while (stride * tp < need && stride < N) stride += sub; }
        for (let k = 0; k <= N; k += stride) want.add(k);
        // 끝 눈금 바로 앞 글자가 끝 글자와 겹치면 뺀다
        for (const k of [...want]) if (k !== N && k !== 0 && (N - k) * tp < need) want.delete(k);
      }
      for (const v of Array.isArray(o.labelAt) ? o.labelAt : []) { const n = parseNum(v); if (Number.isFinite(n) && onGrid(n)) want.add(tickOf(n)); }
      function label(k) {
        const txt = fmt(valOf(k)); const x = xOf(k);
        const m = /^(?:(-?\d+) )?(-?\d+)\/(\d+)$/.exec(txt);
        if (!m) { kit.el('text', { x, y: LY + 36, 'text-anchor': 'middle', 'font-size': 16, class: 'pk-text', fill: '#3D352E' }, labL).textContent = txt; return; }
        const fx = m[1] ? x + 6 : x;
        if (m[1]) kit.el('text', { x: x - 8, y: LY + 44, 'text-anchor': 'middle', 'font-size': 16, class: 'pk-text', fill: '#3D352E' }, labL).textContent = m[1];
        kit.el('text', { x: fx, y: LY + 34, 'text-anchor': 'middle', 'font-size': 14, class: 'pk-text', fill: '#3D352E' }, labL).textContent = m[2];
        kit.el('rect', { x: fx - 9, y: LY + 38, width: 18, height: 1.8, fill: '#3D352E' }, labL);
        kit.el('text', { x: fx, y: LY + 54, 'text-anchor': 'middle', 'font-size': 14, class: 'pk-text', fill: '#3D352E' }, labL).textContent = m[3];
      }
      [...want].sort((a, b) => a - b).forEach(label);

      // 미리 찍힌 점(marks): read 모드가 읽는 점, place 모드의 기준점
      const marks = (Array.isArray(o.marks) ? o.marks : []).map((m, i) => (typeof m === 'object' && m ? { v: parseNum(m.v), name: m.name || (mode === 'read' ? names[i] : '') } : { v: parseNum(m), name: mode === 'read' ? names[i] : '' })).filter((m) => Number.isFinite(m.v));
      const markL = st.layer('marks');
      for (const m of marks) {
        const g = kit.el('g', null, markL);
        kit.piece(st, g, { shape: { type: 'circle', r: 8 }, color: 'rose', depth: 1 });
        if (m.name) {
          kit.el('polygon', { points: '-7,-14 7,-14 0,-4', fill: '#702830' }, g);
          kit.el('text', { x: 0, y: -22, 'text-anchor': 'middle', 'font-size': 16, class: 'pk-text', fill: '#702830' }, g).textContent = m.name;
        }
        kit.transform(g, { x: xOf(Math.max(0, Math.min(N, tickOf(m.v)))), y: LY });
      }

      let revealed = false;
      const showLive = () => o.showValue === true && !o.print && (!o.revealAfterCheck || revealed);
      const log = () => kit.recorder.log('numberline', state());
      const panel = controls ? document.createElement('div') : null; if (panel) panel.className = 'nl-panel';

      // ---- place: 끌어 놓는 점 ----
      // 점은 6개까지 미리 만들고, 놓을 점 수(count)는 o.count 또는 target.points 길이(setTarget)로 정한다
      const MAXP = 6;
      let count = mode === 'place' ? Math.max(1, Math.min(MAXP, o.count || 1)) : 0;
      let trayRect = null; let sel = [];
      const pts = []; // { g, tick|null, valTxt }
      let active = 0;
      const ptL = st.layer('points');
      const trayX = (i) => X0 + 10 + i * 46; const TRAY_Y = 70;
      if (mode === 'place') {
        if (controls) {
          trayRect = kit.el('rect', { x: X0 - 14, y: TRAY_Y - 52, width: Math.max(60, count * 46 + 8), height: 60, rx: 12, fill: 'none', stroke: '#B8A6D9', 'stroke-width': 1.6, 'stroke-dasharray': '5 4' }, st.layer('tray'));
        }
        // 수직선을 누르면 고른 점이 그 눈금으로 간다(작은 점을 끌기 어려운 터치 화면)
        const hit = kit.el('rect', { x: X0 - 20, y: LY - HIT / 2, width: X1 - X0 + 40, height: HIT, class: 'pk-hit' }, lineL);
        if (controls) hit.addEventListener('click', (e) => { const p = st.point(e); moveTo(active, Math.round((p.x - X0) / tp)); });
        const colors = ['sky', 'buttercup', 'mint', 'lavender', 'peach', 'rose'];
        for (let i = 0; i < MAXP; i++) {
          const g = kit.el('g', { class: 'nl-pt' }, ptL);
          kit.el('rect', { x: -30, y: -74, width: 60, height: 90, class: 'pk-hit' }, g);
          kit.piece(st, g, { shape: { type: 'path', d: 'M0 0 C -6 -10 -16 -18 -16 -34 A 16 16 0 1 1 16 -34 C 16 -18 6 -10 0 0 Z' }, color: colors[i % colors.length], depth: 1 });
          kit.el('text', { x: 0, y: -29, 'text-anchor': 'middle', 'font-size': 15, class: 'pk-text', fill: '#3D352E' }, g).textContent = names[i];
          const valTxt = kit.el('text', { x: 0, y: -58, 'text-anchor': 'middle', 'font-size': 14, class: 'pk-text', fill: '#204C5A' }, g);
          pts.push({ g, tick: null, valTxt });
          if (controls) wirePoint(i);
        }
      }
      function paintPoint(i) {
        const p = pts[i];
        if (i >= count) { p.g.setAttribute('display', 'none'); return; }
        if (p.tick == null) { kit.transform(p.g, { x: trayX(i), y: TRAY_Y }); p.g.setAttribute('display', o.print ? 'none' : 'inline'); }
        else { kit.transform(p.g, { x: xOf(p.tick), y: LY }); p.g.setAttribute('display', 'inline'); }
        const live = showLive() && p.tick != null;
        p.valTxt.textContent = live ? fmt(valOf(p.tick)) : '';
        p.g.setAttribute('aria-valuetext', p.tick == null ? `${names[i]} 점: 아직 놓지 않음` : `${names[i]} 점`);
      }
      function moveTo(i, k, silent) {
        const p = pts[i]; if (!p) return;
        p.tick = k == null ? null : Math.max(0, Math.min(N, k));
        revealed = false; paintPoint(i); clearMarks();
        if (!silent) { log(); kit.announce(p.tick == null ? `${names[i]} 점을 받침으로 되돌렸어요` : `${names[i]} 점을 옮겼어요`); }
      }
      function wirePoint(i) {
        const g = pts[i].g;
        g.classList.add('pk-draggable'); g.setAttribute('tabindex', '0'); g.setAttribute('role', 'slider');
        g.setAttribute('aria-label', `${names[i]} 점. 왼쪽 오른쪽 방향키로 옮겨요`);
        let dragging = false;
        g.addEventListener('pointerdown', (e) => { e.preventDefault(); active = i; dragging = true; g.parentNode.appendChild(g); g.setPointerCapture(e.pointerId); g.classList.add('pk-lifted'); });
        g.addEventListener('pointermove', (e) => { if (!dragging) return; const p = st.point(e); const k = Math.max(0, Math.min(N, Math.round((p.x - X0) / tp))); if (k !== pts[i].tick) { pts[i].tick = k; revealed = false; paintPoint(i); clearMarks(); } });
        const end = (e) => { if (!dragging) return; dragging = false; g.classList.remove('pk-lifted'); try { g.releasePointerCapture(e.pointerId); } catch (_) { /* 이미 풀림 */ } log(); kit.announce(`${names[i]} 점을 놓았어요`); };
        g.addEventListener('pointerup', end); g.addEventListener('pointercancel', end);
        g.addEventListener('focus', () => { active = i; syncActive(); });
        g.addEventListener('keydown', (e) => {
          const cur = pts[i].tick;
          const big = e.shiftKey ? sub : 1;
          let k = null;
          if (e.key === 'ArrowRight' || e.key === 'ArrowUp') k = cur == null ? 0 : cur + big;
          else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') k = cur == null ? 0 : cur - big;
          else if (e.key === 'PageUp') k = (cur == null ? 0 : cur) + sub;
          else if (e.key === 'PageDown') k = (cur == null ? 0 : cur) - sub;
          else if (e.key === 'Home') k = 0;
          else if (e.key === 'End') k = N;
          else if (e.key === 'Delete' || e.key === 'Backspace') { e.preventDefault(); moveTo(i, null); return; }
          else if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); if (cur == null) moveTo(i, 0); return; }
          else return;
          e.preventDefault(); moveTo(i, k);
        });
      }
      let syncActive = () => {};
      if (mode === 'place' && controls) {
        const row = document.createElement('div'); row.className = 'nl-row';
        names.slice(0, MAXP).forEach((n, i) => { const b = button(row, `${n} 점`, `${n} 점 고르기`, () => { active = i; syncActive(); }); sel.push(b); });
        button(row, '<i class="fi fi-rr-angle-left" aria-hidden="true"></i>왼쪽으로', '고른 점을 왼쪽으로 한 칸', () => moveTo(active, pts[active].tick == null ? 0 : pts[active].tick - 1));
        button(row, '오른쪽으로<i class="fi fi-rr-angle-right" aria-hidden="true"></i>', '고른 점을 오른쪽으로 한 칸', () => moveTo(active, pts[active].tick == null ? 0 : pts[active].tick + 1));
        syncActive = () => sel.forEach((b, i) => { b.setAttribute('aria-pressed', String(i === active)); b.hidden = count < 2 || i >= count; });
        syncActive();
        panel.appendChild(row);
      }

      // ---- jump: 출발점 + 뛰어 세기 화살표 ----
      const hopStep = parseNum(o.hopStep) > 0 ? parseNum(o.hopStep) : unit;
      const fixedFrom = o.fixedFrom != null && Number.isFinite(parseNum(o.fixedFrom)) ? parseNum(o.fixedFrom) : null;
      let from = null; let hops = []; let size = parseNum(o.hopSize) > 0 ? parseNum(o.hopSize) : hopStep;
      const MAXH = 30; const arcs = [];
      let fromG = null; let endG = null; let endTxt = null; let sizeOut = null;
      if (mode === 'jump') {
        const aL = st.layer('hops');
        for (let i = 0; i < MAXH; i++) {
          const g = kit.el('g', { display: 'none' }, aL);
          const path = kit.el('path', { fill: 'none', stroke: '#E69D7B', 'stroke-width': 3, 'stroke-linecap': 'round' }, g);
          const head = kit.el('polygon', { points: '-6,-11 6,-11 0,0', fill: '#E69D7B' }, g);
          const txt = kit.el('text', { 'text-anchor': 'middle', 'font-size': 14, class: 'pk-text', fill: '#6E3B21' }, g);
          arcs.push({ g, path, head, txt });
        }
        fromG = kit.el('g', null, st.layer('from'));
        kit.el('rect', { x: -26, y: -30, width: 52, height: 64, class: 'pk-hit' }, fromG);
        kit.piece(st, fromG, { shape: { type: 'rect', x: -9, y: -18, w: 18, h: 36, rx: 5 }, color: 'mint', depth: 1 });
        kit.el('text', { x: 0, y: -24, 'text-anchor': 'middle', 'font-size': 13, class: 'pk-text', fill: '#275C46' }, fromG).textContent = '출발';
        endG = kit.el('g', null, st.layer('end'));
        kit.el('polygon', { points: '-8,18 8,18 0,6', fill: '#702830' }, endG);
        endTxt = kit.el('text', { x: 0, y: 40, 'text-anchor': 'middle', 'font-size': 15, class: 'pk-text', fill: '#702830' }, endG);
        if (controls && fixedFrom == null) {
          fromG.classList.add('pk-draggable'); fromG.setAttribute('tabindex', '0'); fromG.setAttribute('role', 'slider'); fromG.setAttribute('aria-label', '출발점. 왼쪽 오른쪽 방향키로 옮겨요');
          let dragging = false;
          fromG.addEventListener('pointerdown', (e) => { e.preventDefault(); dragging = true; fromG.setPointerCapture(e.pointerId); fromG.classList.add('pk-lifted'); });
          fromG.addEventListener('pointermove', (e) => { if (!dragging) return; const p = st.point(e); setFrom(valOf(Math.max(0, Math.min(N, Math.round((p.x - X0) / tp)))), true); });
          const end = (e) => { if (!dragging) return; dragging = false; fromG.classList.remove('pk-lifted'); try { fromG.releasePointerCapture(e.pointerId); } catch (_) { /* 이미 풀림 */ } log(); kit.announce('출발점을 놓았어요'); };
          fromG.addEventListener('pointerup', end); fromG.addEventListener('pointercancel', end);
          fromG.addEventListener('keydown', (e) => {
            const cur = from == null ? 0 : tickOf(from); const big = e.shiftKey ? sub : 1;
            const d = { ArrowRight: big, ArrowUp: big, ArrowLeft: -big, ArrowDown: -big, PageUp: sub, PageDown: -sub }[e.key];
            if (d == null && e.key !== 'Home' && e.key !== 'End' && e.key !== 'Enter' && e.key !== ' ') return;
            e.preventDefault();
            const k = e.key === 'Home' ? 0 : e.key === 'End' ? N : d == null ? cur : (from == null ? 0 : cur + d);
            setFrom(valOf(Math.max(0, Math.min(N, k)))); log(); kit.announce('출발점을 옮겼어요');
          });
          const hit = kit.el('rect', { x: X0 - 20, y: LY - HIT / 2, width: X1 - X0 + 40, height: HIT, class: 'pk-hit' }, lineL);
          hit.addEventListener('click', (e) => { if (hops.length) return; const p = st.point(e); setFrom(valOf(Math.max(0, Math.min(N, Math.round((p.x - X0) / tp))))); log(); });
        }
        if (controls) {
          const row = document.createElement('div'); row.className = 'nl-row';
          const lab = document.createElement('span'); lab.textContent = '한 번에'; row.appendChild(lab);
          button(row, '<i class="fi fi-rr-minus" aria-hidden="true"></i>', '뛰는 크기 줄이기', () => setSize(size - hopStep));
          sizeOut = document.createElement('output'); sizeOut.className = 'nl-size'; row.appendChild(sizeOut);
          button(row, '<i class="fi fi-rr-plus" aria-hidden="true"></i>', '뛰는 크기 늘리기', () => setSize(size + hopStep));
          panel.appendChild(row);
          const row2 = document.createElement('div'); row2.className = 'nl-row';
          button(row2, '앞으로 뛰기<i class="fi fi-rr-arrow-right" aria-hidden="true"></i>', null, () => hop(1));
          if (o.backward !== false) button(row2, '<i class="fi fi-rr-arrow-left" aria-hidden="true"></i>뒤로 뛰기', null, () => hop(-1));
          button(row2, '<i class="fi fi-rr-undo" aria-hidden="true"></i>하나 지우기', '마지막 화살표 지우기', () => { if (!hops.length) return; hops.pop(); revealed = false; paintJump(); log(); kit.announce('마지막 화살표를 지웠어요'); });
          panel.appendChild(row2);
        }
      }
      const posOf = () => { let p = from; const out = []; for (const h of hops) { const q = r6(p + h); out.push([p, q, h]); p = q; } return { list: out, end: p }; };
      function setFrom(v, quiet) { if (fixedFrom != null) return; from = v; hops = []; revealed = false; paintJump(); if (!quiet) clearMarks(); }
      // 뛰는 크기는 hopStep의 몇 배인지로 다시 맞춘다 — 1/12를 다섯 번 더하면 0.416665가 되어 5/12(0.416667)와 어긋났다
      function setSize(v) { v = Math.max(hopStep, Math.min(max - min, v)); const k = v / hopStep; size = r6(Math.abs(k - Math.round(k)) < 1e-4 ? Math.round(k) * hopStep : v); if (sizeOut) sizeOut.textContent = fmt(size); log(); kit.announce(`한 번에 ${fmt(size)}씩`); }
      function hop(dir) {
        if (from == null) { kit.announce('먼저 출발점을 정해요'); return; }
        if (hops.length >= MAXH) return;
        const { end } = posOf(); const nxt = r6(end + dir * size);
        if (nxt < min - EPS || nxt > max + EPS) { kit.announce('수직선 밖으로는 뛸 수 없어요'); kit.tick('no'); return; }
        hops.push(r6(dir * size)); revealed = false; paintJump(); log(); kit.tick('ok'); kit.announce(`${hops.length}번 뛰었어요`);
      }
      function paintJump() {
        if (mode !== 'jump') return;
        fromG.setAttribute('display', from == null && o.print ? 'none' : 'inline');
        kit.transform(fromG, { x: from == null ? X0 : xOf(tickOf(from)), y: from == null ? LY + 0 : LY });
        fromG.setAttribute('opacity', from == null ? '0.55' : '1');
        if (sizeOut) sizeOut.textContent = fmt(size);
        const { list, end } = posOf();
        arcs.forEach((a, i) => {
          const h = list[i];
          if (!h) { a.g.setAttribute('display', 'none'); return; }
          a.g.setAttribute('display', 'inline');
          const x1 = xOf(tickOf(h[0])); const x2 = xOf(tickOf(h[1])); const w = Math.abs(x2 - x1);
          const ry = Math.max(16, Math.min(58, w * 0.55)); const yy = LY - 4;
          a.path.setAttribute('d', `M ${x1} ${yy} A ${w / 2} ${ry} 0 0 ${x2 > x1 ? 1 : 0} ${x2} ${yy}`);
          a.path.setAttribute('stroke-dasharray', h[2] < 0 ? '6 4' : 'none');
          kit.transform(a.head, { x: x2, y: yy });
          a.txt.setAttribute('x', (x1 + x2) / 2); a.txt.setAttribute('y', yy - ry - 6);
          a.txt.textContent = w >= 22 ? fmtSigned(h[2]) : '';
        });
        const showEnd = from != null && hops.length > 0;
        endG.setAttribute('display', showEnd ? 'inline' : 'none');
        if (showEnd) kit.transform(endG, { x: xOf(tickOf(end)), y: LY });
        endTxt.textContent = showEnd && showLive() ? fmt(end) : '';
      }

      // ---- read: 고르기 또는 직접 쓰기 ----
      let pick = null; let answer = null; let setPick = null; let inp = null;
      const useInput = mode === 'read' && !(Array.isArray(o.choices) && o.choices.length) ;
      if (mode === 'read' && controls) {
        const q = document.createElement('p'); q.className = 'nl-q';
        const nm = marks[0] && marks[0].name ? `${marks[0].name} 점이` : '점이';
        q.textContent = o.question || `${nm} 나타내는 수를 ${useInput ? '쓰세요.' : '고르세요.'}`;
        panel.appendChild(q);
        if (!useInput) {
          const row = document.createElement('div'); row.className = 'nl-picks'; row.setAttribute('role', 'radiogroup'); row.setAttribute('aria-label', q.textContent);
          const btns = o.choices.map((c, i) => {
            const b = document.createElement('button'); b.type = 'button'; b.className = 'nl-b pk-choice'; b.textContent = String(c);
            b.setAttribute('role', 'radio'); b.setAttribute('aria-checked', 'false'); b.setAttribute('tabindex', '0');
            b.addEventListener('click', () => { pick = i; setPick(i); clearMarks(); log(); kit.announce(String(c)); });
            row.appendChild(b); return b;
          });
          setPick = (k) => btns.forEach((b, i) => b.setAttribute('aria-checked', String(i === k)));
          panel.appendChild(row);
        } else {
          const row = document.createElement('div'); row.className = 'nl-row';
          inp = document.createElement('input'); inp.className = 'nl-in'; inp.type = 'text'; inp.setAttribute('tabindex', '0'); inp.setAttribute('autocomplete', 'off');
          inp.setAttribute('inputmode', format === 'frac' ? 'text' : 'decimal'); inp.setAttribute('aria-label', '점이 나타내는 수');
          inp.placeholder = format === 'frac' ? '예: 2/5' : '수를 써요';
          inp.addEventListener('input', () => { inp.value = inp.value.replace(/[^0-9./ -]/g, '').slice(0, 10); answer = inp.value.trim() === '' ? null : inp.value.trim(); log(); });
          inp.addEventListener('keydown', (e) => {
            const d = { ArrowUp: 1, ArrowDown: -1 }[e.key]; if (!d) return;
            e.preventDefault(); const cur = parseNum(answer == null ? fmt(min) : answer); const base = Number.isFinite(cur) ? cur : min;
            answer = fmt(r6(Math.max(min, Math.min(max, base + d * unit)))); inp.value = answer; log();
          });
          row.appendChild(inp);
          if (format === 'frac') { const tip = document.createElement('span'); tip.className = 'nl-q'; tip.textContent = '분수는 3/4처럼 써요'; row.appendChild(tip); }
          panel.appendChild(row);
        }
      }
      if (panel && panel.childNodes.length) box.appendChild(panel);

      // ---- 맞음·틀림 표시(확인 뒤): 점 테두리 ----
      function clearMarks() { pts.forEach((p) => p.g.classList.remove('pk-ok', 'pk-no')); }

      function state() {
        if (mode === 'place') return { points: pts.slice(0, count).map((p) => (p.tick == null ? null : valOf(p.tick))) };
        if (mode === 'jump') return { from, hops: hops.slice(), size };
        return useInput ? { answer } : { pick };
      }
      function setState(s) {
        s = s || {};
        if (mode === 'place') {
          const arr = Array.isArray(s.points) ? s.points : [];
          pts.forEach((p, i) => { const v = parseNum(arr[i]); p.tick = arr[i] == null || !Number.isFinite(v) ? null : Math.max(0, Math.min(N, tickOf(v))); });
          revealed = false; pts.forEach((_, i) => paintPoint(i)); clearMarks();
        } else if (mode === 'jump') {
          from = fixedFrom != null ? fixedFrom : (s.from == null || !Number.isFinite(parseNum(s.from)) ? null : valOf(Math.max(0, Math.min(N, tickOf(parseNum(s.from))))));
          hops = Array.isArray(s.hops) ? s.hops.map(parseNum).filter((h) => Number.isFinite(h) && h !== 0).slice(0, MAXH).map(r6) : [];
          if (parseNum(s.size) > 0) size = r6(parseNum(s.size));
          revealed = false; paintJump();
        } else if (useInput) {
          answer = s.answer == null ? null : String(s.answer); if (inp) inp.value = answer == null ? '' : answer;
        } else {
          pick = Number.isInteger(s.pick) ? s.pick : null; if (setPick) setPick(pick);
        }
      }
      const start0 = mode === 'place' ? { points: [] } : mode === 'jump' ? { from: fixedFrom, hops: [], size } : useInput ? { answer: null } : { pick: null };
      setState(start0);

      // ---- 채점(화면은 바꾸지 않는다) ----
      const tv = (v) => parseNum(v);
      const unitTxt = fmt(unit);
      function judge(t) {
        t = t || {};
        if (mode === 'place') {
          const want = (Array.isArray(t.points) ? t.points : []).map(tv);
          const s = state().points;
          for (let i = 0; i < want.length; i++) if (s[i] == null) return { correct: false, incomplete: true, feedback: `${names[i]} 점을 수직선 위에 놓아요.` };
          const bad = [];
          for (let i = 0; i < want.length; i++) { const d = tickOf(s[i]) - tickOf(want[i]); if (d) bad.push({ i, d }); }
          if (!bad.length) return { correct: true, feedback: want.length > 1 ? '맞아요! 점을 모두 알맞은 자리에 놓았어요.' : `맞아요! ${names[0]} 점이 ${fmt(want[0])}에 있어요.` };
          const b = bad[0]; const nm = names[b.i]; const dir = b.d > 0 ? '오른쪽(더 큰 쪽)' : '왼쪽(더 작은 쪽)';
          const fb = o.revealAfterCheck ? `${nm} 점이 알맞은 자리보다 ${dir}에 있어요.` : Math.abs(b.d) === 1 ? `${nm} 점이 한 칸 ${dir}에 있어요. 눈금 선이 아니라 눈금 사이 칸을 세어 보세요.` : `${nm} 점이 ${Math.abs(b.d)}칸 ${dir}에 있어요. 작은 눈금 한 칸의 크기를 다시 세어 보세요.`;
          const k = tickOf(want[b.i]);
          return { correct: false, feedback: fb, bad, hint: `${nm} 점이 ${dir}에 있어요. 큰 눈금 사이가 몇 칸으로 나뉘었는지 먼저 세어 보세요.`, h3: `작은 눈금 한 칸은 ${unitTxt}만큼이에요. ${fmt(min)}에서 오른쪽으로 ${k}칸 간 곳이 ${nm} 점 자리예요.` };
        }
        if (mode === 'jump') {
          const s = state();
          const tf = t.from != null ? tv(t.from) : null; const ts = t.size != null ? tv(t.size) : null; const te = t.end != null ? tv(t.end) : null;
          if (s.from == null) return { correct: false, incomplete: true, feedback: '먼저 출발점을 수직선 위에 놓아요.' };
          if (!s.hops.length) return { correct: false, incomplete: true, feedback: '화살표로 뛰어 세어 보세요.' };
          const { end } = posOf();
          if (tf != null && tickOf(s.from) !== tickOf(tf)) return { correct: false, feedback: '출발점이 문제와 달라요. 어디에서 시작하는지 다시 읽어 보세요.', hint: '문제에서 처음 수(출발점)를 먼저 찾아 수직선에 놓아요.', h3: `출발점은 ${isIt(fmt(tf))}.` };
          if (ts != null) {
            const diff = s.hops.find((h) => Math.abs(Math.abs(h) - ts) > EPS);
            if (diff != null) return { correct: false, feedback: `한 번에 뛴 크기가 문제와 달라요. 화살표 위의 수를 살펴보세요.`, hint: '화살표 하나가 몇만큼인지 문제와 견주어 보세요. 모든 화살표의 크기가 같아야 해요.', h3: `한 번에 ${fmt(ts)}씩 뛰어요.` };
          }
          if (t.count != null && s.hops.length !== t.count) {
            const more = s.hops.length > t.count;
            return { correct: false, feedback: more ? '화살표가 문제보다 많아요. 화살표 수를 세어 보세요.' : '화살표가 문제보다 적어요. 화살표 수를 세어 보세요.', hint: '출발점은 뛴 횟수에 넣지 않아요. 화살표 하나가 한 번이에요.', h3: `화살표를 ${t.count}개 그려요.` };
          }
          if (ts != null && t.count != null && t.size != null && s.hops.some((h) => h < 0) && te == null) return { correct: false, feedback: '뒤로 뛴 화살표가 있어요. 문제는 몇씩 커지는지 물어요.', hint: '앞으로(오른쪽으로) 뛰면 커지고, 뒤로 뛰면 작아져요.', h3: '화살표를 모두 앞으로 뛰어요.' };
          if (te != null && tickOf(end) !== tickOf(te)) {
            const d = tickOf(end) - tickOf(te);
            return { correct: false, feedback: o.revealAfterCheck ? `도착한 곳이 알맞은 수보다 ${d > 0 ? '커요' : '작아요'}.` : `도착한 곳이 알맞은 수보다 ${d > 0 ? '오른쪽' : '왼쪽'}이에요. 더하면 앞으로, 빼면 뒤로 뛰어요.`, hint: `도착한 곳이 알맞은 수보다 ${d > 0 ? '커요' : '작아요'}. 화살표의 크기와 방향을 다시 보세요.`, h3: `${fmt(s.from)}에서 ${fmtSigned(r6(te - s.from))}만큼 가면 ${isIt(fmt(te))}.` };
          }
          return { correct: true, feedback: `맞아요! ${fmt(s.from)}에서 ${s.hops.length}번 뛰어 ${fmt(end)}에 왔어요.` };
        }
        // read
        const mk = marks[Number.isInteger(t.mark) ? t.mark : 0];
        if (t.pick != null) {
          if (pick == null) return { correct: false, incomplete: true, feedback: '아래에서 하나를 골라요.' };
          if (pick !== t.pick) {
            const pv = parseNum(String(o.choices[pick]).replace(/[^0-9./ -]/g, '').trim());
            const why = mk && Number.isFinite(pv) && tickOf(pv) - tickOf(mk.v) !== 0 && Math.abs(tickOf(pv) - tickOf(mk.v)) === 1 ? '한 칸 차이가 나요. 눈금 선이 아니라 칸을 세어 보세요.' : '작은 눈금 한 칸이 얼마인지 먼저 알아보고 다시 읽어 보세요.';
            return { correct: false, feedback: (o.why && o.why[pick]) || why, hint: '큰 눈금 사이가 몇 칸으로 나뉘었는지 세고, 가까운 큰 눈금에서부터 세어 보세요.', h3: mk ? `${fmt(min)}에서 ${tickOf(mk.v)}칸 간 곳이에요. 한 칸은 ${unitTxt}만큼이에요.` : '가까운 큰 눈금에서부터 칸을 세어 보세요.' };
          }
          return { correct: true, feedback: `맞아요! ${isIt(o.choices[t.pick])}.` };
        }
        const want = tv(t.value);
        if (answer == null || answer === '') return { correct: false, incomplete: true, feedback: '점이 나타내는 수를 써요.' };
        const got = parseNum(answer);
        if (!Number.isFinite(got)) return { correct: false, feedback: format === 'frac' ? '수를 읽을 수 없어요. 분수는 3/4처럼 써요.' : '수를 읽을 수 없어요. 숫자로 써요.', hint: '숫자와 /, 소수점(.)만 써요.' };
        if (Math.abs(got - want) > 1e-6) {
          const d = Number.isFinite(got) ? Math.round((got - want) / unit) : 0;
          const fb = Math.abs(d) === 1 ? '한 칸 차이가 나요. 눈금 선이 아니라 칸을 세어 보세요.' : '작은 눈금 한 칸이 얼마인지 다시 알아보세요.';
          return { correct: false, feedback: fb, hint: `쓴 수가 점보다 ${d > 0 ? '커요' : '작아요'}. 가까운 큰 눈금에서 칸을 다시 세어 보세요.`, h3: `${fmt(min)}에서 ${tickOf(want)}칸 간 곳이에요. 한 칸은 ${unitTxt}만큼이에요.` };
        }
        if (t.form === 'frac' && !/\//.test(answer) && !isInt(want)) return { correct: false, feedback: '크기는 맞아요! 이번에는 분수로 써요.', hint: '분모는 1을 몇 칸으로 나누었는지예요.', h3: `분수로 쓰면 ${isIt(fmt(want))}.` };
        if (t.form === 'dec' && /\//.test(answer)) return { correct: false, feedback: '크기는 맞아요! 이번에는 소수로 써요.', hint: '분모가 10이면 소수 첫째 자리 수예요.', h3: `소수로 쓰면 ${isIt(String(Math.round(want * 1000) / 1000))}.` };
        return { correct: true, feedback: `맞아요! 점이 나타내는 수: ${answer}` };
      }

      function strategy(t) {
        if (mode === 'jump') return '출발점을 먼저 놓고, 한 번에 뛰는 크기를 정한 뒤 화살표를 하나씩 그려요. 출발점은 횟수에 넣지 않아요.';
        if (mode === 'read') return '큰 눈금 사이가 몇 칸으로 나뉘었는지 세어 작은 눈금 한 칸의 크기를 알고, 가까운 큰 눈금에서부터 세어요.';
        return '큰 눈금 사이가 몇 칸으로 나뉘었는지 세어 작은 눈금 한 칸의 크기를 먼저 알아요. 그다음 가까운 큰 눈금에서부터 칸을 세어요.';
      }

      const api = {
        getState: state,
        setTarget(t) { if (t && Array.isArray(t.points)) setCount(t.points.length); },
        setState,
        reset() { setState(JSON.parse(JSON.stringify(start0))); revealed = false; paintAll(); },
        check(t, opts) {
          const r = judge(t); delete r.h3; delete r.bad;
          if (!(opts && opts.forHint)) {
            clearMarks();
            if (r.correct) { revealed = true; pts.forEach((p) => p.g.classList.add('pk-ok')); kit.tick('ok'); }
            else if (!r.incomplete && !o.revealAfterCheck && mode === 'place') { const b = judge(t).bad; if (b) b.forEach((x) => pts[x.i].g.classList.add('pk-no')); }
            paintAll();
          }
          return r;
        },
        solve(t) {
          t = t || {};
          if (mode === 'place') { if (Array.isArray(t.points) && t.points.length > count) setCount(t.points.length); setState({ points: (t.points || []).map(tv) }); }
          else if (mode === 'jump') {
            const f = t.from != null ? tv(t.from) : (from != null ? from : min);
            let hs = [];
            if (t.size != null && t.count != null) hs = Array(t.count).fill(tv(t.size));
            else if (t.end != null && t.size != null) { const n = Math.round((tv(t.end) - f) / tv(t.size)); hs = Array(Math.abs(n)).fill(Math.sign(n) * tv(t.size)); }
            else if (t.end != null && t.count > 1) {
              // 크기는 자유, 화살표 수만 정함('화살표 두 개로 110까지'): 눈금(hopStep) 단위로 거의 같게 나누고 나머지는 마지막 화살표에
              const d = r6(tv(t.end) - f); const q = Math.trunc(d / t.count / hopStep) * hopStep || Math.sign(d) * hopStep;
              hs = Array(t.count - 1).fill(r6(q)); hs.push(r6(d - q * (t.count - 1)));
            }
            else if (t.end != null) hs = [r6(tv(t.end) - f)];
            else if (t.size != null) hs = [tv(t.size)];
            else if (t.count != null) hs = Array(t.count).fill(size);
            setState({ from: f, hops: hs, size: t.size != null ? tv(t.size) : size });
          } else if (t.pick != null) setState({ pick: t.pick });
          else setState({ answer: fmt(tv(t.value)) });
        },
        hint(t, opts) {
          const r = judge(t || {}); const lv = hintLevel(opts);
          if (r.correct) return { hint: strategy(t), correct: true, level: 1 };
          if (lv === 1 || r.incomplete || !r.hint) return { hint: strategy(t), correct: false, level: 1 };
          return { hint: lv >= 3 && r.h3 ? r.h3 : r.hint, correct: false, level: lv };
        },
        // 가장 흔한 실수: 눈금 '선'을 1부터 세어 한 칸 어긋난다 / 뛴 횟수에 출발점을 넣는다 / 한 칸 차이로 읽는다
        wrongAnswer(t) {
          t = t || {};
          if (mode === 'place') {
            const w = (t.points || []).map(tv);
            if (!w.length) return null;
            const k = tickOf(w[0]); const nk = k + 1 <= N ? k + 1 : k - 1;
            return { points: w.map((v, i) => (i === 0 ? valOf(nk) : v)) };
          }
          if (mode === 'jump') {
            const f = t.from != null ? tv(t.from) : min;
            const sz = t.size != null ? tv(t.size) : size;
            if (t.count != null) {
              const n = f + (t.count + 1) * sz <= max + EPS ? t.count + 1 : Math.max(1, t.count - 1);
              return { from: f, hops: Array(n).fill(sz), size: sz };
            }
            if (t.end != null) { const e = tv(t.end); const e2 = e + unit <= max + EPS ? e + unit : e - unit; return { from: f, hops: [r6(e2 - f)], size }; }
            return { from: f, hops: [r6(sz + hopStep)], size };
          }
          if (t.pick != null) { const n = (o.choices || []).length; if (n < 2) return null; return { pick: (t.pick + 1) % n }; }
          const v = tv(t.value); const v2 = v + unit <= max + EPS ? v + unit : v - unit;
          return { answer: fmt(r6(v2)) };
        },
        distance(a, b) {
          a = a || {}; b = b || {};
          if (mode === 'place') {
            const A = a.points || []; const B = b.points || []; let d = 0;
            for (let i = 0; i < Math.max(A.length, B.length); i++) {
              if (A[i] == null && B[i] == null) continue;
              if (A[i] == null || B[i] == null) { d += 1; continue; }
              d += Math.abs(tickOf(A[i]) - tickOf(B[i]));
            }
            return d;
          }
          if (mode === 'jump') {
            let d = (a.from == null) !== (b.from == null) ? 1 : (a.from == null ? 0 : Math.abs(tickOf(a.from) - tickOf(b.from)));
            const A = a.hops || []; const B = b.hops || [];
            d += Math.abs(A.length - B.length);
            for (let i = 0; i < Math.min(A.length, B.length); i++) d += Math.round(Math.abs(A[i] - B[i]) / hopStep);
            return d;
          }
          if (useInput) return a.answer === b.answer ? 0 : 1;
          return a.pick === b.pick ? 0 : 1;
        },
        async demo(t) {
          if (!t) return;
          if (mode === 'jump') {
            const target = t;
            api.solve(target); const full = state(); setState({ from: full.from, hops: [], size: full.size });
            for (const h of full.hops) { await kit.wait(450); hops.push(h); paintJump(); }
            return;
          }
          if (mode === 'place') {
            const w = (t.points || []).map(tv);
            for (let i = 0; i < w.length; i++) { const k = tickOf(w[i]); for (let j = 0; j <= k; j += Math.max(1, Math.round(k / 12))) { moveTo(i, j, true); await kit.wait(80); } moveTo(i, k, true); }
            return;
          }
          api.solve(t);
        },
      };
      return api;
      function setCount(n) {
        if (mode !== 'place' || o.count || !n) return;
        count = Math.max(1, Math.min(MAXP, n)); active = Math.min(active, count - 1);
        if (trayRect) trayRect.setAttribute('width', Math.max(60, count * 46 + 8));
        syncActive(); paintAll();
      }
      function paintAll() { if (mode === 'place') pts.forEach((_, i) => paintPoint(i)); if (mode === 'jump') paintJump(); }
    },
  });
})(window.PaperKit);
