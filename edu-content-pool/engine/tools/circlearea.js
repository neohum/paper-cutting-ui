/* 원 조각 다시 붙이기 — 종이 원을 8·16·32조각으로 잘라 위아래로 엇갈려 붙이면 직사각형에 가까워진다.
 * 가로 ≈ 원주의 1/2 (= 반지름 × 원주율), 세로 ≈ 반지름 → 원의 넓이 = 반지름 × 반지름 × 원주율(3.14).
 * 옵션: start({n, arranged, r}), labels('numbers'|'words'|'none'), pad(넓이 입력 숫자판), showR(반지름 표시, 기본 참), print,
 *       ask('width'|'height': 붙인 모양의 가로/세로가 원의 어느 부분인지 고르는 칸)
 * 상태: { n, arranged, r, value, pick } / check({arranged:true, n, width?, height?}) 또는 check({area, r})
 *   check({area, r})는 r(문항의 반지름)로 채점한다 — 손잡이 위치가 아니라 계산을 본다.
 */
(function (K) {
  const PI = 3.14; // 교과서 원주율
  const NS = [8, 16, 32];
  const RM = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fmt = (v) => String(Math.round(v * 100) / 100);
  const same = (a, b) => Math.round(a * 100) === Math.round(b * 100);
  const PICKS = ['반지름', '지름', '원주의 1/2', '원주'];
  const ASK = { width: { part: '가로', answer: '원주의 1/2' }, height: { part: '세로', answer: '반지름' } };

  K.registerTool('circlearea', {
    name: '원 조각 다시 붙이기',
    create(box, o, kit) {
      const R = 100;
      const controls = !o.print; const pad = !!o.pad && controls;
      // 좁은 칸(휴대폰·출구 질문 320px)에서는 단추가 44px 아래로 줄지 않게 세로로 쌓는 배치를 쓴다
      const narrow = controls && box.clientWidth > 0 && box.clientWidth < 460;
      const ask = controls && !pad && ASK[o.ask] ? o.ask : null;
      const LO = narrow
        ? { W: 360, workH: 230, C: { x: 186, y: 118 }, k: 0.62, ctlY: 236, ctlH: 114, padY: 360, askY: 358, H: pad ? 590 : ask ? 448 : 358 }
        : { W: 600, workH: 254, C: { x: 300, y: o.print ? 125 : 132 }, k: 1, ctlY: 262, ctlH: 66, padY: 336, askY: 334, H: o.print ? 250 : pad ? 446 : ask ? 432 : 340 };
      const W = LO.W; const H = LO.H;
      const labels = o.print ? 'none' : (o.labels || 'words');
      const st = kit.stage(box, { viewBox: [W, H], label: '원 조각 다시 붙이기. 원을 여러 조각으로 잘라 엇갈려 붙이고 넓이를 구해 보세요.' });
      const C = LO.C;
      const start = Object.assign({ n: 8, arranged: false, r: 4 }, o.start || {});
      let n = start.n; let arranged = !!start.arranged; let r = start.r; let entry = ''; let busy = false; let pick = null;
      const scaleOf = (rr) => (0.45 + 0.055 * rr) * LO.k; // 반지름 1~10 cm → 화면 크기

      // 바탕: 종이 도마
      kit.piece(st, st.layer('back'), { shape: { type: 'rect', x: 10, y: 10, w: W - 20, h: (o.print ? H : LO.workH) - 20, rx: 16 }, color: 'cream', fill: '#FBF6EC', depth: 2, texture: true });

      // 조각 묶음: 8·16·32 세 벌을 미리 만들고 보이기만 바꾼다(움직임은 transform만)
      const world = kit.el('g', null, st.layer('work'));
      kit.transform(world, { x: C.x, y: C.y, s: scaleOf(r) });
      const sets = {};
      NS.forEach((k) => {
        const g = kit.el('g', { display: 'none' }, world);
        const h = Math.PI / k; const sx = R * Math.sin(h); const sy = R * Math.cos(h);
        const d = `M0 0 L${(-sx).toFixed(2)} ${sy.toFixed(2)} A${R} ${R} 0 0 0 ${sx.toFixed(2)} ${sy.toFixed(2)} Z`;
        const rim = `M${(-sx).toFixed(2)} ${sy.toFixed(2)} A${R} ${R} 0 0 0 ${sx.toFixed(2)} ${sy.toFixed(2)}`;
        const items = [];
        for (let i = 0; i < k; i++) {
          const odd = i % 2 === 1;
          const p = kit.piece(st, g, { shape: { type: 'path', d }, color: odd ? 'sky' : 'peach', depth: 1, strokeWidth: 0.8 });
          kit.el('path', { d: rim, fill: 'none', stroke: odd ? '#204C5A' : '#702830', 'stroke-width': 3.2, 'stroke-linecap': 'round', class: 'ca-rim', 'pointer-events': 'none' }, p.g);
          items.push(p.g);
        }
        sets[k] = { g, items, sx, sy };
      });
      const circlePose = (k, i) => ({ x: 0, y: 0, r: (i * 360) / k, cx: 0, cy: 0, s: 1 });
      const stripPose = (k, i) => {
        const { sx, sy } = sets[k]; const x0 = -((k - 1) * sx) / 2; const yT = -sy / 2;
        const j = Math.floor(i / 2);
        return i % 2 === 0 ? { x: x0 + j * 2 * sx, y: yT, r: 0, cx: 0, cy: 0, s: 1 } : { x: x0 + sx + j * 2 * sx, y: yT + sy, r: 180, cx: 0, cy: 0, s: 1 };
      };
      const near = (from, to) => to + 360 * Math.round((from - to) / 360);
      const place = (k, on) => sets[k].items.forEach((g, i) => kit.transform(g, on ? stripPose(k, i) : circlePose(k, i)));

      // 반지름 선(원일 때)과 가로·세로 표시(붙였을 때). 숫자는 쉬움 단계에서만.
      const lab = st.layer('labels');
      const radG = kit.el('g', { 'pointer-events': 'none' }, lab);
      const radBar = kit.el('rect', { x: 0, y: -1.6, width: 1, height: 3.2, fill: '#473B6B' }, radG);
      const radTxt = kit.el('text', { 'font-size': 14, class: 'pk-text', fill: '#473B6B', 'text-anchor': 'middle' }, lab);
      const topBar = kit.el('rect', { x: 0, y: -1.6, width: 1, height: 3.2, fill: '#204C5A', 'pointer-events': 'none' }, lab);
      const topTxt = kit.el('text', { 'font-size': 14, class: 'pk-text', fill: '#204C5A', 'text-anchor': 'middle' }, lab);
      const sideBar = kit.el('rect', { x: -1.6, y: 0, width: 3.2, height: 1, fill: '#702830', 'pointer-events': 'none' }, lab);
      const sideTxt = kit.el('g', null, lab);
      const sideT1 = kit.el('text', { 'font-size': 14, class: 'pk-text', fill: '#702830', 'text-anchor': 'end' }, sideTxt);
      const sideT2 = kit.el('text', { 'font-size': 14, y: 18, class: 'pk-text', fill: '#702830', 'text-anchor': 'end' }, sideTxt);
      function paintLabels() {
        const s = scaleOf(r); const showR = o.showR !== false && !(o.print && !o.showR);
        const circ = !arranged && !busy;
        radG.setAttribute('display', circ && showR ? 'inline' : 'none');
        radTxt.setAttribute('display', circ && showR ? 'inline' : 'none');
        radG.setAttribute('transform', `translate(${C.x} ${C.y}) rotate(-20) scale(${(R * s).toFixed(2)} 1)`);
        const ex = C.x + Math.cos(-20 * Math.PI / 180) * R * s + 8; const ey = C.y + Math.sin(-20 * Math.PI / 180) * R * s - 4;
        radTxt.setAttribute('x', ex.toFixed(1)); radTxt.setAttribute('y', ey.toFixed(1)); radTxt.setAttribute('text-anchor', 'start');
        radTxt.textContent = o.print && !o.showR ? '' : `반지름 ${r} cm`;
        const strip = arranged && !busy && labels !== 'none';
        [topBar, topTxt, sideBar, sideTxt].forEach((e) => e.setAttribute('display', strip ? 'inline' : 'none'));
        if (!strip) return;
        const { sx, sy } = sets[n]; const wpx = n * sx * s; const hpx = sy * s;
        const left = C.x - wpx / 2; const topY = C.y - hpx / 2;
        topBar.setAttribute('transform', `translate(${left.toFixed(2)} ${(topY - 14).toFixed(2)}) scale(${wpx.toFixed(2)} 1)`);
        topTxt.setAttribute('x', C.x); topTxt.setAttribute('y', (topY - 22).toFixed(1));
        // 고르는 칸이 있는 문항은 맞게 고르기 전까지 그 이름표를 '?'로 둔다(쉬움의 숫자 이름표는 그대로 돕는다)
        const hideW = ask === 'width' && labels !== 'numbers' && pick !== ASK.width.answer;
        const hideH = ask === 'height' && labels !== 'numbers' && pick !== ASK.height.answer;
        topTxt.textContent = hideW ? '가로 = ?' : labels === 'numbers' ? (narrow ? `가로 ≈ 원주의 1/2 = ${fmt(r * PI)}` : `가로 ≈ 원주의 1/2 = ${r}×2×${PI}÷2 = ${fmt(r * PI)} cm`) : '가로 ≈ 원주의 1/2';
        sideBar.setAttribute('transform', `translate(${(left - 10).toFixed(2)} ${topY.toFixed(2)}) scale(1 ${hpx.toFixed(2)})`);
        sideTxt.setAttribute('transform', `translate(${(left - 18).toFixed(1)} ${(C.y - 2).toFixed(1)})`);
        sideT1.textContent = hideH ? '세로 = ?' : narrow ? '세로 ≈' : '세로 ≈ 반지름';
        sideT2.textContent = hideH ? '' : narrow ? `반지름${labels === 'numbers' ? ` ${r}` : ''}` : labels === 'numbers' ? `= ${r} cm` : '';
      }

      // ---- 조작 단추 ----
      const ui = st.layer('ui');
      const button = (x, y, w, h, color, text, onAct, label) => {
        const g = kit.el('g', { class: 'ca-btn', tabindex: 0, role: 'button', 'aria-label': label || text }, ui);
        kit.el('rect', { x: x - 2, y: y - 3, width: w + 4, height: Math.max(h + 6, 48), class: 'pk-hit' }, g);
        const p = kit.piece(st, g, { shape: { type: 'rect', x, y, w, h, rx: 10 }, color, depth: 2 });
        const t = kit.el('text', { x: x + w / 2, y: y + h / 2 + 5, 'text-anchor': 'middle', 'font-size': 15, class: 'pk-text', fill: '#3D352E' }, g);
        t.textContent = text;
        const act = (e) => { e.preventDefault(); if (busy) return; kit.tick(); bounce(g); onAct(); };
        g.addEventListener('click', act);
        g.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') act(e); });
        return { g, p, t };
      };
      const bounce = (g) => { if (RM) return; const b = g.getBBox(); kit.spring(0.9, 1, { stiffness: 260, damping: 12, onUpdate: (v) => g.setAttribute('transform', `translate(${(b.x + b.width / 2) * (1 - v)} ${(b.y + b.height / 2) * (1 - v)}) scale(${v})`) }); };
      const chips = {};
      let toggle = null; let rTxt = null; let knob = null; let valTxt = null;
      const TX0 = narrow ? 120 : 392; const TX1 = narrow ? 330 : 566; const TY = narrow ? 308 : 300;
      const rx = (rr) => TX0 + ((TX1 - TX0) * (rr - 1)) / 9;
      if (controls) {
        kit.piece(st, ui, { shape: { type: 'rect', x: 10, y: LO.ctlY, w: W - 20, h: LO.ctlH, rx: 14 }, color: 'lavender', fill: kit.palette.lavender.light, depth: 1 });
        NS.forEach((k, i) => { chips[k] = narrow ? button(18 + i * 70, 244, 64, 50, 'buttercup', `${k}조각`, () => setN(k, true), `${k}조각으로 자르기`) : button(22 + i * 72, 274, 64, 42, 'buttercup', `${k}조각`, () => setN(k, true), `${k}조각으로 자르기`); });
        toggle = narrow ? button(230, 244, 114, 50, 'mint', '', () => setArranged(!arranged, true), '엇갈려 붙이기') : button(244, 274, 120, 42, 'mint', '', () => setArranged(!arranged, true), '엇갈려 붙이기');
        rTxt = narrow ? kit.el('text', { x: 20, y: TY + 14, 'text-anchor': 'start', 'font-size': 15, class: 'pk-text', fill: '#473B6B' }, ui) : kit.el('text', { x: (TX0 + TX1) / 2, y: 286, 'text-anchor': 'middle', 'font-size': 14, class: 'pk-text', fill: '#473B6B' }, ui);
        kit.el('rect', { x: TX0, y: TY + 6, width: TX1 - TX0, height: 6, rx: 3, fill: '#B8A6D9' }, ui);
        for (let k = 1; k <= 10; k++) kit.el('circle', { cx: rx(k), cy: TY + 9, r: 2, fill: '#473B6B' }, ui);
        knob = kit.el('g', { 'aria-label': '반지름 손잡이', 'aria-valuemin': 1, 'aria-valuemax': 10 }, ui);
        kit.el('circle', { r: 24, class: 'pk-hit' }, knob);
        kit.piece(st, knob, { shape: { type: 'circle', r: 12 }, color: 'rose', depth: 2 });
        kit.transform(knob, { x: rx(r), y: TY + 9 });
        const stepPx = (TX1 - TX0) / 9;
        kit.drag(st, knob, {
          role: 'slider', bounds: [TX0, TY + 9, TX1, TY + 9], keyStep: stepPx,
          enabled: () => !busy,
          onMove(x) { const v = Math.round((x - TX0) / stepPx) + 1; if (v !== r) setR(v, false); },
          snap(x) { return { x: rx(Math.round((x - TX0) / stepPx) + 1), y: TY + 9 }; },
          onDrop(x) { setR(Math.round((x - TX0) / stepPx) + 1, true); },
        });
        // 키보드 화살표: kit.drag가 옮긴 뒤 곧바로 눈금에 맞춘다(Enter 없이도 값이 바뀌게)
        knob.addEventListener('keydown', (e) => {
          if (!/^Arrow/.test(e.key)) return;
          const x = knob.__pk.x; const v = Math.max(1, Math.min(10, Math.round((x - TX0) / stepPx) + 1));
          setR(v, true);
        });
      }
      const pickBtns = {};
      if (ask) {
        const AY = LO.askY; const q = `붙인 모양의 ${ASK[ask].part}는 원의 어느 부분과 같나요?`;
        kit.piece(st, ui, { shape: { type: 'rect', x: 10, y: AY, w: W - 20, h: H - AY - 8, rx: 14 }, color: 'sky', fill: kit.palette.sky.light, depth: 1 });
        const qt = kit.el('text', { x: narrow ? 20 : 22, y: narrow ? AY + 20 : AY + 22, 'font-size': narrow ? 13 : 14, class: 'pk-text', fill: '#204C5A' }, ui);
        qt.textContent = q;
        const grp = kit.el('g', { role: 'group', 'aria-label': q }, ui);
        PICKS.forEach((k, i) => {
          const [x, y, w, h] = narrow ? [18 + i * 82, AY + 30, 76, 46] : [22 + i * 140, AY + 34, 130, 42];
          const b = button(x, y, w, h, 'cream', k, () => { pick = k; paintLabels(); paintUI(); kit.recorder.log('circlearea', state()); kit.announce(`${ASK[ask].part}: ${k}`); }, `${ASK[ask].part}는 ${k}`);
          grp.appendChild(b.g);
          pickBtns[k] = b;
        });
      }
      if (pad) {
        const PY = LO.padY;
        kit.piece(st, ui, { shape: { type: 'rect', x: 10, y: PY, w: W - 20, h: H - PY - 8, rx: 14 }, color: 'mint', fill: kit.palette.mint.light, depth: 1 });
        if (narrow) {
          kit.piece(st, ui, { shape: { type: 'rect', x: 18, y: PY + 8, w: 182, h: 40, rx: 10 }, color: 'cream', depth: 2 });
          valTxt = kit.el('text', { x: 109, y: PY + 35, 'text-anchor': 'middle', 'font-size': 19, class: 'pk-text', fill: '#275C46' }, ui);
          kit.el('text', { x: 274, y: PY + 26, 'text-anchor': 'middle', 'font-size': 12, class: 'pk-text', fill: '#275C46' }, ui).textContent = '원주율 3.14';
        } else {
          kit.piece(st, ui, { shape: { type: 'rect', x: 22, y: PY + 10, w: 196, h: 54, rx: 10 }, color: 'cream', depth: 2 });
          valTxt = kit.el('text', { x: 120, y: PY + 45, 'text-anchor': 'middle', 'font-size': 20, class: 'pk-text', fill: '#275C46' }, ui);
          kit.el('text', { x: 120, y: PY + 80, 'text-anchor': 'middle', 'font-size': 13, class: 'pk-text', fill: '#275C46' }, ui).textContent = '원주율은 3.14로 계산해요';
        }
        const keys = narrow ? ['7', '8', '9', '←', '4', '5', '6', '.', '1', '2', '3', '0'] : ['1', '2', '3', '4', '5', '.', '6', '7', '8', '9', '0', '←'];
        const cols = narrow ? 4 : 6;
        const padKeys = keys.map((k, i) => {
          const col = i % cols; const row = Math.floor(i / cols);
          const [x, y, w, h] = narrow ? [18 + col * 82, PY + 58 + row * 56, 76, 50] : [232 + col * 59, PY + 8 + row * 48, 52, 42];
          const b = button(x, y, w, h, k === '←' ? 'rose' : k === '.' ? 'lavender' : 'buttercup', k, () => press(k), k === '←' ? '지우기' : k === '.' ? '소수점' : `${k}`);
          // 숫자판은 Tab 한 번으로 들어가고 안에서는 방향키로 옮긴다(roving tabindex)
          b.g.setAttribute('tabindex', i === 0 ? '0' : '-1');
          b.g.addEventListener('keydown', (e) => {
            const d = { ArrowLeft: -1, ArrowRight: 1, ArrowUp: -cols, ArrowDown: cols }[e.key];
            if (!d) return;
            e.preventDefault();
            const j = i + d; if (j < 0 || j >= padKeys.length) return;
            padKeys.forEach((x, m) => x.setAttribute('tabindex', m === j ? '0' : '-1'));
            padKeys[j].focus();
          });
          return b.g;
        });
        kit.el('text', narrow ? { x: 274, y: PY + 42, 'text-anchor': 'middle', 'font-size': 11, class: 'pk-text', fill: '#275C46' } : { x: 120, y: PY + 98, 'text-anchor': 'middle', 'font-size': 12, class: 'pk-text', fill: '#275C46' }, ui).textContent = '키보드 숫자로도 입력해요';
        st.svg.addEventListener('keydown', (e) => {
          if (/^[0-9.]$/.test(e.key)) { e.preventDefault(); press(e.key); } else if (e.key === 'Backspace') { e.preventDefault(); press('←'); }
        });
      }
      function press(k) {
        if (k === '←') entry = entry.slice(0, -1);
        else if (k === '.') { if (!entry.includes('.')) entry = (entry || '0') + '.'; } else if (entry.length < 7) entry = entry === '0' ? k : entry + k;
        paintUI(); kit.recorder.log('circlearea', state()); kit.announce(`넓이 ${entry || '빈칸'}`);
      }
      function paintUI() {
        if (!controls) return;
        NS.forEach((k) => { chips[k].p.setColor(k === n ? 'peach' : 'buttercup'); chips[k].g.setAttribute('aria-pressed', String(k === n)); });
        toggle.t.textContent = arranged ? '다시 원으로' : '엇갈려 붙이기';
        toggle.g.setAttribute('aria-label', arranged ? '다시 원으로 모으기' : '조각을 엇갈려 붙이기');
        Object.entries(pickBtns).forEach(([k, b]) => { b.p.setColor(k === pick ? 'peach' : 'cream'); b.g.setAttribute('aria-pressed', String(k === pick)); });
        rTxt.textContent = `반지름 ${r} cm`;
        knob.setAttribute('aria-valuenow', r); knob.setAttribute('aria-valuetext', `반지름 ${r} 센티미터`);
        if (valTxt) valTxt.textContent = `넓이 ${entry || '?'} cm²`;
      }

      function show(k) { NS.forEach((x) => sets[x].g.setAttribute('display', x === k ? 'inline' : 'none')); }
      function setN(k, animate) {
        if (k === n && animate) return;
        n = k; show(k); place(k, arranged);
        if (animate && !RM) { const items = sets[k].items; items.forEach((g, i) => { const base = arranged ? stripPose(k, i) : circlePose(k, i); kit.spring(0.6, 1, { stiffness: 200, damping: 11, onUpdate: (v) => kit.transform(g, Object.assign({}, base, { s: v })) }); }); }
        paintLabels(); paintUI();
        if (animate) { kit.recorder.log('circlearea', state()); kit.announce(`원을 ${k}조각으로 잘랐어요.`); }
      }
      async function setArranged(on, animate) {
        if (!animate || RM) { arranged = on; place(n, on); paintLabels(); paintUI(); return; }
        busy = true; arranged = on; paintLabels(); paintUI();
        const k = n; const items = sets[k].items;
        const from = items.map((g) => Object.assign({}, g.__pk));
        const to = items.map((g, i) => { const t = on ? stripPose(k, i) : circlePose(k, i); return Object.assign({}, t, { r: near(from[i].r, t.r) }); });
        const back = (t) => { const c = 1.6; return 1 + (c + 1) * Math.pow(t - 1, 3) + c * Math.pow(t - 1, 2); };
        await kit.tween(1300, (P) => {
          items.forEach((g, i) => {
            const d = 0.4 * (i / Math.max(1, k - 1));
            const q = Math.max(0, Math.min(1, (P - d) / 0.6)); const e = back(q);
            kit.transform(g, { x: from[i].x + (to[i].x - from[i].x) * e, y: from[i].y + (to[i].y - from[i].y) * e, r: from[i].r + (to[i].r - from[i].r) * Math.min(1, q * 1.15), s: 1 + 0.1 * Math.sin(Math.PI * q) });
          });
        }, { ease: (t) => t });
        place(k, on); busy = false; paintLabels();
        kit.recorder.log('circlearea', state());
        kit.announce(on ? '조각을 엇갈려 붙였더니 직사각형에 가까운 모양이 되었어요.' : '다시 원으로 모았어요.');
      }
      function setR(v, settle) {
        v = Math.max(1, Math.min(10, v));
        const from = scaleOf(r); r = v;
        if (knob && settle) kit.transform(knob, { x: rx(v), y: TY + 9 });
        if (RM) kit.transform(world, { s: scaleOf(v) });
        else kit.spring(from, scaleOf(v), { stiffness: 200, damping: 14, onUpdate: (s) => kit.transform(world, { s }) });
        paintLabels(); paintUI();
        if (settle) { kit.recorder.log('circlearea', state()); kit.announce(`반지름 ${v} 센티미터`); }
      }

      const value = () => (entry === '' || entry === '.' ? null : Number(entry));
      const state = () => ({ n, arranged, r, value: value(), pick });
      function setState(s) {
        s = s || {};
        if (s.r != null) { r = s.r; kit.transform(world, { s: scaleOf(r) }); if (knob) kit.transform(knob, { x: rx(r), y: TY + 9 }); }
        if (s.arranged != null) arranged = !!s.arranged;
        if (s.n != null) n = s.n;
        entry = s.value != null ? String(s.value) : (s.value === null ? '' : entry);
        if (s.pick !== undefined) pick = s.pick;
        show(n); place(n, arranged); paintLabels(); paintUI();
      }
      setState(start); entry = '';
      paintUI();

      return {
        getState: state,
        setState,
        reset() { entry = ''; setState(Object.assign({}, start, { value: null, pick: null })); },
        solve(t) {
          const s = {};
          if (t.n != null) s.n = t.n;
          if (t.arranged != null) s.arranged = t.arranged;
          if (t.r != null) s.r = t.r;
          if (t.area != null) s.value = t.area;
          if (t.width) s.pick = t.width; else if (t.height) s.pick = t.height;
          setState(s);
        },
        check(t) {
          const s = state();
          if (t.arranged != null) {
            if (t.n != null && s.n !== t.n) return { correct: false, feedback: `이번에는 원을 ${t.n}조각으로 잘라야 해요.`, hint: `아래의 "${t.n}조각" 단추를 누르세요.` };
            if (s.arranged !== t.arranged) return { correct: false, feedback: '조각을 아직 엇갈려 붙이지 않았어요.', hint: '"엇갈려 붙이기" 단추를 눌러 조각을 위아래로 번갈아 붙여 보세요.' };
            const want = t.width ? { part: '가로', answer: t.width } : t.height ? { part: '세로', answer: t.height } : null;
            if (want && s.pick !== want.answer) {
              const hint = want.part === '가로' ? '가로에는 색 테두리(원주)가 위와 아래로 반씩 나뉘어 놓여요.' : '세로는 조각의 뾰족한 끝(원의 중심)에서 둥근 테두리까지의 길이예요.';
              if (s.pick == null) return { correct: false, feedback: `붙인 모양의 ${want.part}가 원의 어느 부분과 같은지 아래에서 골라 보세요.`, hint };
              const why = {
                '가로:반지름': '반지름은 세로예요. 가로에는 색 테두리가 놓여 있어요.',
                '가로:지름': '지름은 반지름의 2배예요. 가로를 이루는 색 테두리는 원주의 절반이에요.',
                '가로:원주': '원주 전체가 아니라, 위와 아래에 반씩 나뉘어 놓여요.',
                '세로:원주의 1/2': '원주의 1/2은 가로예요. 세로는 조각의 길이예요.',
                '세로:지름': '조각 하나의 길이는 원의 중심에서 둘레까지, 지름의 절반이에요.',
                '세로:원주': '원주는 둘레 전체예요. 세로는 조각 하나의 길이예요.',
              }[`${want.part}:${s.pick}`] || '다시 골라 볼까요?';
              return { correct: false, feedback: why, hint };
            }
            if (want) return { correct: true, feedback: `맞아요! 붙인 모양의 ${want.part}는 ${want.answer}과 같아요. ${want.part === '가로' ? '원주의 1/2 = 반지름 × 원주율이에요.' : '세로가 반지름이니 넓이 = 원주의 1/2 × 반지름이에요.'}` };
            return { correct: true, feedback: `맞아요! ${s.n}조각으로 붙이니 ${s.n >= 32 ? '거의 직사각형이 되었어요' : '직사각형에 가까워졌어요'}.` };
          }
          // 채점은 문항의 반지름(t.r)으로 한다: 손잡이를 안 맞춰도 계산이 맞으면 정답
          const rr = t.r != null ? t.r : s.r;
          const v = s.value;
          // 도전(이름표 없음)에서는 식만 주고 수는 넣지 않는다
          const hint = labels === 'none' ? '원의 넓이 = 반지름 × 반지름 × 원주율이에요.' : `원의 넓이 = 반지름 × 반지름 × 원주율 = ${rr} × ${rr} × ${PI}`;
          if (v == null) return { correct: false, feedback: '넓이를 숫자판으로 입력해 보세요.', hint };
          if (same(v, t.area)) return { correct: true, feedback: `맞아요! ${rr} × ${rr} × ${PI} = ${fmt(t.area)} (cm²)예요.` };
          if (s.r !== rr && same(v, s.r * s.r * PI)) return { correct: false, feedback: `손잡이의 반지름 ${s.r} cm로 계산했어요. 이 문제의 반지름은 ${rr} cm예요.`, hint };
          if (same(v, 2 * rr * PI)) return { correct: false, feedback: '원주(원의 둘레)를 구했어요. 넓이는 원주의 1/2에 반지름을 곱해요.', hint };
          if (same(v, rr * PI)) return { correct: false, feedback: '직사각형의 가로(원주의 1/2)만 구했어요. 세로(반지름)도 곱해 보세요.', hint };
          if (same(v, 2 * rr * 2 * rr * PI)) return { correct: false, feedback: '지름을 두 번 곱했어요. 반지름을 두 번 곱해요.', hint };
          if (same(v, rr * rr)) return { correct: false, feedback: '반지름 × 반지름까지 했어요. 원주율 3.14도 곱해요.', hint };
          return { correct: false, feedback: '다시 계산해 볼까요?', hint };
        },
        async demo(t) {
          if (t.n != null && t.n !== n) { if (arranged) await setArranged(false, true); setN(t.n, true); await kit.wait(500); }
          if (t.r != null && t.r !== r) { setR(t.r, true); await kit.wait(500); }
          if (t.arranged != null && t.arranged !== arranged) await setArranged(t.arranged, true);
          if (t.area != null) { entry = ''; for (const ch of String(t.area)) { press(ch); await kit.wait(260); } }
        },
      };
    },
  });
})(window.PaperKit);
