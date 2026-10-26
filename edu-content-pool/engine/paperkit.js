/* PaperKit — 움직이는 페이퍼커팅 디지털 교구 엔진.
 * 의존성 없음(크롬북·런처·file:// 오프라인에서 그대로 돈다). SVG + Pointer Events.
 * - piece(): 아래층(-layer 색) + 칼선 그림자 + 윗면(파스텔) + 종이 결 텍스처로 된 "종이 조각"
 * - drag()/rotate(): 포인터·키보드 조작, 스냅, transform 속성만 갱신(조각을 다시 그리지 않음)
 * - spring()/tween(): rAF 애니메이션, prefers-reduced-motion이면 바로 끝값
 * - scene(): "Layered paper-cut illustration" 장면 조립기(모티프 겹쳐 쌓기)
 * - registerTool()/mount(): 교구 등록과 장착, 상태 저장·채점 계약
 * - recorder: 학생 조작 기록 → 결과 수집(학생 개인정보 없음)
 * 인쇄(@media print 또는 .pk-print)에서는 그림자를 빼고 흰 바탕 검은 칼선으로 바뀐다.
 */
(function (root) {
  'use strict';
  const NS = 'http://www.w3.org/2000/svg';
  const reduceMotion = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;

  // paper-cutting-ui 토큰과 같은 값. CSS 변수 대신 상수인 것은 SVG fill을 인쇄·내보내기에서도 같게 유지하려고.
  const palette = {
    mint: { base: '#A3D8C3', layer: '#82C2A8', light: '#EAF7F1', dark: '#275C46' },
    peach: { base: '#F7BA9E', layer: '#E69D7B', light: '#FDF1EA', dark: '#6E3B21' },
    lavender: { base: '#D7CBEB', layer: '#B8A6D9', light: '#F4F0FA', dark: '#473B6B' },
    buttercup: { base: '#FEE396', layer: '#EDC96C', light: '#FFF9E8', dark: '#6E530F' },
    sky: { base: '#BDE0EA', layer: '#98C8D6', light: '#EDF7FA', dark: '#204C5A' },
    rose: { base: '#F5B8BE', layer: '#DE939B', light: '#FDF0F1', dark: '#702830' },
    cream: { base: '#FFFDF9', layer: '#EFE6D6', light: '#FFFFFF', dark: '#3D352E' },
    ink: { base: '#3D352E', layer: '#2A241F', light: '#544B42', dark: '#1E1915' },
  };
  const colorOf = (c) => palette[c] || { base: c, layer: c, light: c, dark: '#3D352E' };

  function el(tag, attrs, parent) {
    const n = document.createElementNS(NS, tag);
    if (attrs) for (const k in attrs) if (attrs[k] != null) n.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(n);
    return n;
  }

  let uid = 0;
  const nextId = (p) => `${p}-${++uid}`;

  // ---- 무대(SVG) ----
  function stage(container, opts = {}) {
    const [w, h] = opts.viewBox || [400, 300];
    const svg = el('svg', {
      viewBox: `0 0 ${w} ${h}`, class: 'pk-stage', role: 'group',
      'aria-label': opts.label || '종이 교구', preserveAspectRatio: 'xMidYMid meet',
    });
    const defs = el('defs', null, svg);
    const fid = nextId('pk');
    // 칼선 그림자: 짧은 접촉 그림자 + 넓게 들뜬 그림자(번트 엄버 46,30,20)
    const f = el('filter', { id: `${fid}-shadow`, x: '-20%', y: '-20%', width: '140%', height: '150%' }, defs);
    el('feDropShadow', { dx: 0, dy: 1.2, stdDeviation: 1, 'flood-color': 'rgb(46,30,20)', 'flood-opacity': 0.42 }, f);
    el('feDropShadow', { dx: 0, dy: 3.5, stdDeviation: 3.5, 'flood-color': 'rgb(46,30,20)', 'flood-opacity': 0.2 }, f);
    // 종이 결: 정적인 큰 조각에만 쓴다(움직이는 조각에 필터를 겹치면 크롬북에서 프레임이 떨어진다)
    const t = el('filter', { id: `${fid}-grain`, x: 0, y: 0, width: '100%', height: '100%' }, defs);
    el('feTurbulence', { type: 'fractalNoise', baseFrequency: 0.85, numOctaves: 2, seed: 7, result: 'n' }, t);
    el('feColorMatrix', { in: 'n', type: 'matrix', values: '0 0 0 0 0.18  0 0 0 0 0.12  0 0 0 0 0.08  0 0 0 0.09 0', result: 'g' }, t);
    el('feComposite', { in: 'g', in2: 'SourceGraphic', operator: 'in', result: 'gi' }, t);
    el('feMerge', null, t).append(el('feMergeNode', { in: 'SourceGraphic' }), el('feMergeNode', { in: 'gi' }));
    if (opts.background !== false) {
      el('rect', { x: 0, y: 0, width: w, height: h, rx: opts.radius ?? 18, fill: opts.background || '#F8F4EC', class: 'pk-bg' }, svg);
    }
    const layers = {};
    const s = {
      svg, defs, width: w, height: h,
      shadow: `url(#${fid}-shadow)`, grain: `url(#${fid}-grain)`,
      layer(name) { return layers[name] || (layers[name] = el('g', { class: `pk-layer pk-layer--${name}` }, svg)); },
      point(evt, ref) {
        const m = (ref || svg).getScreenCTM();
        const p = svg.createSVGPoint(); p.x = evt.clientX; p.y = evt.clientY;
        return m ? p.matrixTransform(m.inverse()) : p;
      },
    };
    // 무대는 세로 스크롤(pan-y)을 허용한다. 끄는 조각(.pk-draggable·.pk-rotatable) 위에서 움직인 터치만 스크롤을 막는다.
    // CSS touch-action은 SVG 안쪽 요소에서 무시되므로 touchmove를 취소한다 — touchstart를 취소하면 단추 조각의 탭이 click이 되지 않는다.
    svg.addEventListener('touchmove', (e) => { if (e.cancelable && e.target.closest && e.target.closest('.pk-draggable, .pk-rotatable, .pk-lifted')) e.preventDefault(); }, { passive: false });
    container.appendChild(svg);
    return s;
  }

  // ---- 종이 조각 ----
  // shape: {type:'circle',r} | {type:'rect',w,h,rx} | {type:'path',d} | {type:'poly',points} | {type:'ellipse',rx,ry}
  function shapeEl(shape, attrs, parent) {
    switch (shape.type) {
      case 'circle': return el('circle', { cx: shape.cx || 0, cy: shape.cy || 0, r: shape.r, ...attrs }, parent);
      case 'ellipse': return el('ellipse', { cx: shape.cx || 0, cy: shape.cy || 0, rx: shape.rx, ry: shape.ry, ...attrs }, parent);
      case 'rect': return el('rect', { x: shape.x ?? -shape.w / 2, y: shape.y ?? -shape.h / 2, width: shape.w, height: shape.h, rx: shape.rx || 0, ...attrs }, parent);
      case 'poly': return el('polygon', { points: shape.points, ...attrs }, parent);
      default: return el('path', { d: shape.d, ...attrs }, parent);
    }
  }

  function piece(st, parent, opts) {
    const c = colorOf(opts.color || 'cream');
    const g = el('g', { class: `pk-piece${opts.className ? ' ' + opts.className : ''}` }, parent);
    if (opts.label) { g.setAttribute('aria-label', opts.label); }
    const depth = opts.depth ?? 1;
    // 아래층: 같은 모양을 -layer 색으로 조금씩 내려 겹친다(종이 두께)
    const under = [];
    for (let i = depth; i >= 1; i--) {
      under.push(shapeEl(opts.shape, { fill: c.layer, class: 'pk-under', transform: `translate(0 ${i * 1.6})` }, g));
    }
    const face = shapeEl(opts.shape, {
      fill: opts.fill || c.base, class: 'pk-face',
      filter: opts.flat ? null : st.shadow,
      stroke: opts.stroke || 'rgba(255,255,255,0.55)', 'stroke-width': opts.strokeWidth ?? 1,
    }, g);
    if (opts.texture) {
      shapeEl(opts.shape, { fill: opts.fill || c.base, filter: st.grain, class: 'pk-grain', 'pointer-events': 'none' }, g);
    }
    if (opts.x != null || opts.y != null || opts.r != null) transform(g, { x: opts.x || 0, y: opts.y || 0, r: opts.r || 0 });
    return {
      g, face, under,
      setColor(name) { const n = colorOf(name); face.setAttribute('fill', n.base); under.forEach((u) => u.setAttribute('fill', n.layer)); },
    };
  }

  // transform만 바꾼다. 조각 DOM은 그대로라 60fps에서도 레이아웃을 다시 계산하지 않는다.
  function transform(g, t) {
    const prev = g.__pk || { x: 0, y: 0, r: 0, s: 1, cx: 0, cy: 0 };
    const n = Object.assign({}, prev, t);
    g.__pk = n;
    let v = `translate(${round(n.x)} ${round(n.y)})`;
    if (n.r) v += ` rotate(${round(n.r)} ${round(n.cx)} ${round(n.cy)})`;
    if (n.s !== 1) v += ` scale(${round(n.s)})`;
    // 한 방향 늘이기(빛줄기·막대): sx/sy가 있으면 따로 준다
    if (n.sx != null || n.sy != null) v += ` scale(${round(n.sx ?? 1)} ${round(n.sy ?? 1)})`;
    g.setAttribute('transform', v);
    return n;
  }
  const round = (v) => Math.round(v * 100) / 100;

  // ---- 조작: 끌기 ----
  // snap(x,y) → {x,y} 또는 null(놓을 수 없음 → 제자리로 되돌아감)
  function drag(st, g, opts = {}) {
    let start = null;
    g.classList.add('pk-draggable');
    g.setAttribute('tabindex', '0');
    g.setAttribute('role', opts.role || 'button');
    const cur = () => g.__pk || transform(g, {});
    const ref = () => g.parentNode;
    const commit = (x, y, via) => {
      const snapped = opts.snap ? opts.snap(x, y, g) : { x, y };
      if (snapped) {
        animateTo(g, snapped);
        opts.onDrop && opts.onDrop(snapped.x, snapped.y, via, snapped);
      } else if (start) {
        animateTo(g, { x: start.ox, y: start.oy });
        opts.onReject && opts.onReject();
      }
    };
    g.addEventListener('pointerdown', (e) => {
      if (opts.enabled && !opts.enabled()) return;
      e.preventDefault();
      // 맨 위로 올린 뒤에 포인터를 잡는다 — DOM에서 옮기면 잡아 둔 포인터가 풀려 빠른 끌기가 끊긴다
      g.parentNode.appendChild(g);
      g.setPointerCapture(e.pointerId);
      const p = st.point(e, ref());
      const t = cur();
      start = { px: p.x, py: p.y, ox: t.x, oy: t.y };
      g.classList.add('pk-lifted');
      opts.onStart && opts.onStart();
    });
    g.addEventListener('pointermove', (e) => {
      if (!start) return;
      const p = st.point(e, ref());
      let x = start.ox + p.x - start.px; let y = start.oy + p.y - start.py;
      if (opts.bounds) { x = clamp(x, opts.bounds[0], opts.bounds[2]); y = clamp(y, opts.bounds[1], opts.bounds[3]); }
      transform(g, { x, y });
      opts.onMove && opts.onMove(x, y);
    });
    const end = (e) => {
      if (!start) return;
      g.classList.remove('pk-lifted');
      try { g.releasePointerCapture(e.pointerId); } catch (_) { /* 이미 해제됨 */ }
      const t = cur();
      commit(t.x, t.y, 'pointer');
      start = null;
    };
    g.addEventListener('pointerup', end);
    g.addEventListener('pointercancel', end);
    // 키보드: 방향키로 옮기고 Enter/Space로 내려놓는다. 키보드 전용 학생도 같은 과제를 할 수 있어야 한다.
    const step = opts.keyStep || 10;
    g.addEventListener('keydown', (e) => {
      const t = cur();
      const d = { ArrowLeft: [-step, 0], ArrowRight: [step, 0], ArrowUp: [0, -step], ArrowDown: [0, step] }[e.key];
      if (d) {
        e.preventDefault();
        if (!start) start = { ox: t.x, oy: t.y };
        transform(g, { x: t.x + d[0], y: t.y + d[1] });
        opts.onMove && opts.onMove(t.x + d[0], t.y + d[1]);
      } else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (opts.keyActivate) { opts.keyActivate(); return; }
        commit(t.x, t.y, 'keyboard'); start = null;
      }
    });
  }

  // ---- 조작: 회전 ----
  // center 둘레로 끌어 돌린다. value는 0°=12시 방향, 시계 방향 +.
  function rotate(st, g, opts = {}) {
    const [cx, cy] = opts.center || [0, 0];
    const stepDeg = opts.step || 1;
    let value = opts.value || 0;
    let dragging = false; let last = null;
    g.classList.add('pk-rotatable');
    g.setAttribute('tabindex', '0');
    g.setAttribute('role', 'slider');
    if (opts.label) g.setAttribute('aria-label', opts.label);
    const set = (v, via, silent) => {
      value = v;
      transform(g, { r: v, cx, cy });
      g.setAttribute('aria-valuenow', String(Math.round(norm(v))));
      if (opts.valueText) g.setAttribute('aria-valuetext', opts.valueText(v));
      if (!silent) opts.onChange && opts.onChange(v, via);
    };
    const angleAt = (e) => {
      const p = st.point(e, g.parentNode);
      return (Math.atan2(p.x - cx, -(p.y - cy)) * 180) / Math.PI;
    };
    g.addEventListener('pointerdown', (e) => {
      if (opts.enabled && !opts.enabled()) return;
      e.preventDefault(); g.setPointerCapture(e.pointerId);
      dragging = true; last = angleAt(e);
      g.classList.add('pk-lifted'); opts.onStart && opts.onStart();
    });
    g.addEventListener('pointermove', (e) => {
      if (!dragging) return;
      const a = angleAt(e);
      let d = a - last; if (d > 180) d -= 360; if (d < -180) d += 360; // 12시를 지나도 이어서 돈다
      last = a;
      set(value + d, 'pointer');
    });
    const end = () => {
      if (!dragging) return;
      dragging = false; g.classList.remove('pk-lifted');
      const target = Math.round(value / stepDeg) * stepDeg;
      spring(value, target, { onUpdate: (v) => set(v, 'snap'), onDone: () => { set(target, 'snap'); opts.onEnd && opts.onEnd(target); } });
    };
    g.addEventListener('pointerup', end); g.addEventListener('pointercancel', end);
    g.addEventListener('keydown', (e) => {
      const k = { ArrowRight: 1, ArrowUp: 1, ArrowLeft: -1, ArrowDown: -1, PageUp: 5, PageDown: -5 }[e.key];
      if (!k) return;
      e.preventDefault();
      const target = Math.round(value / stepDeg) * stepDeg + k * stepDeg;
      set(target, 'keyboard'); opts.onEnd && opts.onEnd(target);
    });
    set(value, 'init', true);
    return { get: () => value, set: (v, animate) => (animate ? spring(value, v, { onUpdate: (x) => set(x, 'program'), onDone: () => set(v, 'program') }) : set(v, 'program')) };
  }

  const norm = (v) => ((v % 360) + 360) % 360;
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

  // ---- 애니메이션 ----
  function spring(from, to, opts = {}) {
    if (reduceMotion || from === to) { opts.onUpdate && opts.onUpdate(to); opts.onDone && opts.onDone(); return () => {}; }
    const k = opts.stiffness || 170; const c = opts.damping || 22; const m = 1;
    let x = from; let v = opts.velocity || 0; let lastT = null; let raf = 0; let stopped = false;
    const tick = (t) => {
      if (stopped) return;
      const dt = Math.min(0.032, lastT == null ? 0.016 : (t - lastT) / 1000); lastT = t;
      const a = (-k * (x - to) - c * v) / m; v += a * dt; x += v * dt;
      if (Math.abs(x - to) < 0.01 && Math.abs(v) < 0.01) { opts.onUpdate && opts.onUpdate(to); opts.onDone && opts.onDone(); return; }
      opts.onUpdate && opts.onUpdate(x); raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => { stopped = true; cancelAnimationFrame(raf); };
  }
  function tween(ms, fn, opts = {}) {
    return new Promise((res) => {
      if (reduceMotion || ms <= 0) { fn(1); res(); return; }
      const ease = opts.ease || ((t) => 1 - Math.pow(1 - t, 3));
      const t0 = performance.now();
      const tick = (t) => { const p = Math.min(1, (t - t0) / ms); fn(ease(p)); if (p < 1) requestAnimationFrame(tick); else res(); };
      requestAnimationFrame(tick);
    });
  }
  function animateTo(g, to) {
    const from = Object.assign({}, g.__pk || { x: 0, y: 0 });
    return tween(220, (p) => transform(g, { x: from.x + (to.x - from.x) * p, y: from.y + (to.y - from.y) * p }));
  }
  const wait = (ms) => new Promise((r) => setTimeout(r, reduceMotion ? 0 : ms));

  // ---- 접근성 알림 ----
  let live = null;
  function announce(text) {
    if (typeof document === 'undefined') return;
    if (!live) {
      live = document.createElement('div');
      live.className = 'pk-sr'; live.setAttribute('aria-live', 'polite'); live.setAttribute('role', 'status');
      document.body.appendChild(live);
    }
    live.textContent = ''; setTimeout(() => { live.textContent = text; }, 30);
  }

  // ---- 소리: 종이 '사각' 소리(선택). 첫 조작 뒤에만 AudioContext를 만든다(자동재생 정책). ----
  let actx = null; let soundOn = true;
  function tick(kind) {
    if (!soundOn || typeof AudioContext === 'undefined') return;
    try {
      actx = actx || new AudioContext();
      const len = 0.05; const buf = actx.createBuffer(1, actx.sampleRate * len, actx.sampleRate);
      const d = buf.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / d.length, 3);
      const src = actx.createBufferSource(); src.buffer = buf;
      const f = actx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = kind === 'ok' ? 2400 : kind === 'no' ? 600 : 1500;
      const gn = actx.createGain(); gn.gain.value = 0.25;
      src.connect(f).connect(gn).connect(actx.destination); src.start();
    } catch (_) { /* 소리는 부가 기능 */ }
  }

  // ---- 장면 조립기: Layered paper-cut illustration ----
  // spec = { viewBox, background, layers:[{motif, x, y, s, color, ...}] }
  // 모티프는 겹치는 단순 도형의 묶음이다. 같은 장면 프롬프트를 이미지 생성기로 넘길 수 있게 lesson.illustration.prompt와 함께 둔다.
  const motifs = {
    hills(st, p, o) {
      const w = st.width; const h = st.height; const y = o.y ?? h * 0.7;
      const cs = o.colors || ['mint', 'sky', 'buttercup'];
      cs.forEach((c, i) => {
        const yy = y + i * 18; const amp = 22 - i * 4;
        const d = `M0 ${yy} C ${w * 0.2} ${yy - amp}, ${w * 0.35} ${yy + amp}, ${w * 0.55} ${yy - amp * 0.4} S ${w * 0.85} ${yy - amp}, ${w} ${yy} L ${w} ${h} L 0 ${h} Z`;
        piece(st, p, { shape: { type: 'path', d }, color: c, depth: 2, texture: i === 0 });
      });
    },
    sun(st, p, o) { const g = el('g', null, p); for (let i = 0; i < 10; i++) piece(st, g, { shape: { type: 'poly', points: '-5,-32 5,-32 0,-46' }, color: 'buttercup', depth: 0, flat: true, r: i * 36 }); piece(st, g, { shape: { type: 'circle', r: 26 }, color: 'buttercup', depth: 2 }); piece(st, g, { shape: { type: 'circle', r: 17 }, color: 'peach', depth: 1 }); transform(g, { x: o.x, y: o.y, s: o.s || 1 }); return g; },
    moon(st, p, o) { const g = el('g', null, p); piece(st, g, { shape: { type: 'path', d: 'M10 -26 A26 26 0 1 0 10 26 A20 20 0 1 1 10 -26 Z' }, color: o.color || 'buttercup', depth: 2 }); transform(g, { x: o.x, y: o.y, s: o.s || 1 }); return g; },
    cloud(st, p, o) { const g = el('g', null, p); piece(st, g, { shape: { type: 'path', d: 'M-40 10 a16 16 0 0 1 8 -28 a22 22 0 0 1 40 -6 a16 16 0 0 1 30 14 a13 13 0 0 1 -4 20 Z' }, color: 'cream', depth: 1 }); transform(g, { x: o.x, y: o.y, s: o.s || 1 }); return g; },
    tree(st, p, o) { const g = el('g', null, p); piece(st, g, { shape: { type: 'rect', w: 10, h: 40, rx: 3, y: -4 }, color: 'peach', depth: 1 }); const c = o.color || 'mint'; piece(st, g, { shape: { type: 'circle', r: 26, cy: -18 }, color: c, depth: 2 }); piece(st, g, { shape: { type: 'circle', r: 17, cx: -14, cy: -6 }, color: c, depth: 1 }); piece(st, g, { shape: { type: 'circle', r: 15, cx: 15, cy: -4 }, color: c, depth: 1 }); transform(g, { x: o.x, y: o.y, s: o.s || 1 }); return g; },
    flower(st, p, o) { const g = el('g', null, p); piece(st, g, { shape: { type: 'rect', w: 3, h: 26, y: 0 }, color: 'mint', depth: 0, flat: true }); for (let i = 0; i < 5; i++) piece(st, g, { shape: { type: 'ellipse', rx: 6, ry: 10, cy: -9 }, color: o.color || 'rose', depth: 1, r: i * 72 }); piece(st, g, { shape: { type: 'circle', r: 5 }, color: 'buttercup', depth: 0 }); transform(g, { x: o.x, y: o.y, s: o.s || 1 }); return g; },
    house(st, p, o) { const g = el('g', null, p); piece(st, g, { shape: { type: 'rect', w: 56, h: 44, y: -44, x: -28, rx: 3 }, color: o.color || 'peach', depth: 2 }); piece(st, g, { shape: { type: 'poly', points: '-36,-42 0,-74 36,-42' }, color: 'rose', depth: 2 }); piece(st, g, { shape: { type: 'rect', w: 14, h: 22, x: -7, y: -22, rx: 2 }, color: 'lavender', depth: 1 }); transform(g, { x: o.x, y: o.y, s: o.s || 1 }); return g; },
    star(st, p, o) { const pts = []; for (let i = 0; i < 10; i++) { const a = (Math.PI / 5) * i - Math.PI / 2; const r = i % 2 ? 6 : 14; pts.push(`${(Math.cos(a) * r).toFixed(1)},${(Math.sin(a) * r).toFixed(1)}`); } return piece(st, p, { shape: { type: 'poly', points: pts.join(' ') }, color: o.color || 'buttercup', depth: 1, x: o.x, y: o.y }).g; },
    wave(st, p, o) { const w = st.width; const y = o.y; const d = `M0 ${y} q ${w / 16} -12 ${w / 8} 0 t ${w / 8} 0 t ${w / 8} 0 t ${w / 8} 0 t ${w / 8} 0 t ${w / 8} 0 t ${w / 8} 0 t ${w / 8} 0 L ${w} ${st.height} L 0 ${st.height} Z`; return piece(st, p, { shape: { type: 'path', d }, color: o.color || 'sky', depth: 2 }).g; },
    mountain(st, p, o) { const g = el('g', null, p); piece(st, g, { shape: { type: 'poly', points: '-70,0 0,-90 70,0' }, color: o.color || 'lavender', depth: 2 }); piece(st, g, { shape: { type: 'poly', points: '-18,-67 0,-90 18,-67 8,-60 0,-68 -8,-60' }, color: 'cream', depth: 0 }); transform(g, { x: o.x, y: o.y, s: o.s || 1 }); return g; },
    bird(st, p, o) { return piece(st, p, { shape: { type: 'path', d: 'M-14 0 Q -7 -9 0 0 Q 7 -9 14 0 Q 7 -4 0 3 Q -7 -4 -14 0 Z' }, color: o.color || 'ink', depth: 0, flat: true, x: o.x, y: o.y }).g; },
    leaf(st, p, o) { return piece(st, p, { shape: { type: 'path', d: 'M0 -14 Q 12 -4 0 14 Q -12 -4 0 -14 Z' }, color: o.color || 'peach', depth: 1, x: o.x, y: o.y, r: o.r || 0 }).g; },
    snow(st, p, o) { return piece(st, p, { shape: { type: 'circle', r: o.r || 4 }, color: 'cream', depth: 0, x: o.x, y: o.y }).g; },
    text(st, p, o) { const t = el('text', { x: o.x, y: o.y, 'text-anchor': 'middle', class: 'pk-text', 'font-size': o.size || 18, fill: o.fill || palette.ink.base }, p); t.textContent = o.text; return t; },
  };

  function scene(container, spec) {
    const st = stage(container, { viewBox: spec.viewBox || [480, 270], label: spec.label || '종이 오리기 그림', background: spec.background || '#F8F4EC' });
    const p = st.layer('scene');
    // 모티프마다 바깥 묶음(.pk-amb)을 하나 더 둔다: 흔들림 CSS 애니메이션의 transform이
    // 모티프 자체의 transform 속성(위치)을 덮어쓰지 않게 하기 위해서다.
    spec.layers.forEach((l, i) => {
      const fn = motifs[l.motif];
      if (!fn) return;
      const amb = el('g', { class: `pk-amb pk-amb--${i % 3}` }, p);
      fn(st, amb, l);
    });
    // 장면이 살아 있게: 구름·새·별은 천천히 흔들린다(움직임 줄이기 설정이면 멈춤)
    if (!reduceMotion && spec.ambient !== false) st.svg.classList.add('pk-ambient');
    return st;
  }

  // ---- 조작 기록(결과 수집용). 학생 식별자는 번호·닉네임만, 개인정보 없음 ----
  const recorder = {
    events: [], t0: Date.now(),
    log(type, data) { this.events.push({ t: Math.round((Date.now() - this.t0) / 100) / 10, type, ...(data || {}) }); if (this.events.length > 2000) this.events.shift(); },
    reset() { this.events = []; this.t0 = Date.now(); },
  };

  // ---- 교구 등록 계약 ----
  // create(container, options, kit) → { getState(), setState(s), check(target) → {correct, feedback, hint?}, setTarget?(t), reset?(), destroy?() }
  const tools = {};
  function registerTool(id, def) { tools[id] = def; }
  function mount(id, container, options = {}) {
    const def = tools[id];
    if (!def) throw new Error(`PaperKit: unknown tool "${id}"`);
    container.classList.add('pk-tool', `pk-tool--${id}`);
    const inst = def.create(container, options, api);
    inst.id = id; inst.name = def.name;
    if (!options.print) legible(container);
    return inst;
  }

  // 휴대폰 폭에서는 교구 무대가 0.5~0.6배로 줄어 viewBox 글자 13이 7px이 된다.
  // 화면 글자가 MIN_TEXT_PX 아래로 내려가면 글자만 키운다(조각 배치가 깨지지 않게 원래 크기의 MAX_BOOST배까지).
  // 교구가 font-size 속성을 바꾸면 그 값을 새 기준으로 다시 맞춘다(인라인 style만 쓰므로 속성은 그대로 남는다).
  const MIN_TEXT_PX = 12; const MAX_BOOST = 1.5;
  function legible(container) {
    if (typeof ResizeObserver === 'undefined' || typeof MutationObserver === 'undefined') return;
    const scales = new Map();
    const scaleOf = (svg) => {
      if (!svg) return 0;
      if (scales.has(svg)) return scales.get(svg);
      const vb = svg.viewBox && svg.viewBox.baseVal; const r = svg.getBoundingClientRect();
      const s = vb && vb.width && r.width ? Math.min(r.width / vb.width, r.height / vb.height) : 0;
      scales.set(svg, s); return s;
    };
    const fit = (t) => {
      const fs = parseFloat(t.getAttribute('font-size')); const s = scaleOf(t.ownerSVGElement);
      if (!fs || !s) return;
      let size = fs * s < MIN_TEXT_PX ? Math.min(MIN_TEXT_PX / s, fs * MAX_BOOST) : 0;
      if (`${size ? size.toFixed(1) : ''}` === (t.style.fontSize || '').replace('px', '')) return;
      t.style.fontSize = size ? `${size.toFixed(1)}px` : '';
      if (!size) return;
      // 키운 글자가 무대 밖으로 나가면(가운데 정렬 기준) 넘친 만큼 되돌린다 — 원래 크기보다 작게는 하지 않는다
      const rt = t.getBoundingClientRect(); const rs = t.ownerSVGElement.getBoundingClientRect();
      const over = Math.max(rs.left - rt.left, rt.right - rs.right, 0);
      if (over > 0 && rt.width > 0) {
        size = Math.max(fs, size * Math.max(0, rt.width - 2 * over) / rt.width);
        t.style.fontSize = `${size.toFixed(1)}px`;
      }
    };
    const all = () => { scales.clear(); container.querySelectorAll('text').forEach(fit); };
    new ResizeObserver(all).observe(container);
    new MutationObserver((recs) => {
      for (const m of recs) {
        if (m.type === 'attributes') { fit(m.target); continue; }
        for (const n of m.addedNodes) {
          if (n.nodeType !== 1) continue;
          if (n.tagName === 'text') fit(n); else n.querySelectorAll('text').forEach(fit);
        }
      }
    }).observe(container, { childList: true, subtree: true, attributes: true, attributeFilter: ['font-size'] });
  }

  const api = {
    version: '1.0.0', palette, colorOf, el, stage, piece, transform, drag, rotate, spring, tween, wait, animateTo,
    announce, tick, motifs, scene, recorder, registerTool, mount, tools, norm, clamp,
    setSound(on) { soundOn = !!on; },
    soundOn() { return soundOn; }, // 교구가 자체 소리(WebAudio)를 낼 때 같은 설정을 따른다
    printMode(on) { document.documentElement.classList.toggle('pk-print', !!on); },
  };
  root.PaperKit = api;
})(typeof window !== 'undefined' ? window : globalThis);
