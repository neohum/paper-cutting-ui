/* 원 조각 다시 붙이기 — 종이 원을 8·16·32조각으로 잘라 위아래로 엇갈려 붙이면 직사각형에 가까워진다.
 * 가로 ≈ 원주의 1/2 (= 반지름 × 원주율), 세로 ≈ 반지름 → 원의 넓이 = 반지름 × 반지름 × 원주율(3.14).
 * 옵션: start({n, arranged, r}), labels('numbers'|'words'|'none'), pad(넓이 입력 숫자판), showR(반지름 표시, 기본 참), print,
 *       ask('width'|'height'|'formula': 붙인 모양의 가로/세로가 원의 어느 부분인지, 또는 넓이 식을 고르는 칸),
 *       given('diameter': 반지름 대신 지름을 보여 준다 — 지름·반지름 혼동 문항),
 *       steps(쉬움: 숫자판을 ① 반지름 × 반지름 → ② × 3.14 두 칸으로 나눈다),
 *       revealAfterCheck(붙인 모양의 가로·세로 이름표를 '확인'을 누른 뒤에만 보인다)
 * 상태: { n, arranged, r, value, pick, step1? }
 * check({arranged:true, n, width?, height?}) | check({formula}) | check({area, r}) | check({findR, area})
 *   check({area, r})는 r(문항의 반지름)로 채점한다 — 손잡이 위치가 아니라 계산을 본다.
 *   check({findR})는 손잡이 반지름이 findR인지 본다(넓이에서 반지름 거꾸로 찾기). 숫자판(pad)이 있으면 먼저 '넓이 ÷ 3.14 = 반지름 × 반지름'을
 *   써야 하고(padFor:'rr'), 틀린 확인은 그 반지름의 넓이를 계산해 주지도, 늘릴지 줄일지 알려 주지도 않는다.
 */
(function (K) {
  // 무대가 화면에 그려질 배율(화면 px ÷ viewBox 단위) 어림: 상자 안쪽 폭과 무대 높이 제한(max-height)을 함께 본다. 모르면 1
  const stageScale = (box, W, H) => {
    if (!box || !(box.clientWidth > 0) || typeof getComputedStyle !== 'function') return 1;
    const cs = getComputedStyle(box); const bw = box.clientWidth - (parseFloat(cs.paddingLeft) || 0) - (parseFloat(cs.paddingRight) || 0);
    let mh = Infinity;
    try { const t = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); t.setAttribute('class', 'pk-stage'); box.appendChild(t); const v = parseFloat(getComputedStyle(t).maxHeight); t.remove(); if (Number.isFinite(v) && v > 0) mh = v; } catch (_) { /* 높이 제한 모름 */ }
    return bw > 0 ? Math.min(bw / W, H ? mh / H : Infinity) : 1;
  };
  const PI = 3.14; // 교과서 원주율
  const NS = [8, 16, 32];
  const RM = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fmt = (v) => String(Math.round(v * 100) / 100);
  const same = (a, b) => Math.round(a * 100) === Math.round(b * 100);
  const PICKS = ['반지름', '지름', '원주의 1/2', '원주'];
  const FORMULAS = ['지름 × 원주율', '반지름 × 반지름 × 원주율', '반지름 × 2 × 원주율', '지름 × 지름 × 원주율'];
  const FORMULA_OK = '반지름 × 반지름 × 원주율';
  const ASK = { width: { part: '가로', answer: '원주의 1/2' }, height: { part: '세로', answer: '반지름' }, formula: { part: '넓이 식', answer: FORMULA_OK } };

  // 힌트 단계(플레이어가 { level, attempts }를 준다): 1 개념·전략만(문항의 수·자리·이름 없음), 2 틀린 단계 짚기, 3 풀이 한 단계.
  // 시도 수보다 높은 단계는 주지 않는다 — 시도 0 → 1단계, 1 → 2단계까지, 2 이상 → 3단계까지
  const hintLevel = (opts) => {
    const want = Math.max(1, Math.min(3, Math.floor((opts && opts.level) || 1)));
    const a = opts && Number.isInteger(opts.attempts) ? opts.attempts : null;
    return a == null ? want : Math.min(want, a >= 2 ? 3 : a >= 1 ? 2 : 1);
  };
  K.registerTool('circlearea', {
    name: '원 조각 다시 붙이기',
    create(box, o, kit) {
      const R = 100;
      const controls = !o.print; const pad = !!o.pad && controls;
      // 좁은 칸(휴대폰·출구 질문 320px)에서는 단추가 44px 아래로 줄지 않게 세로로 쌓는 배치를 쓴다
      const narrow = controls && box.clientWidth > 0 && box.clientWidth < 460;
      const ask = controls && !pad && ASK[o.ask] ? o.ask : null;
      const steps = pad && !!o.steps;
      const diam = o.given === 'diameter';
      const choices = ask === 'formula' ? FORMULAS : PICKS;
      // 식 고르기는 글자가 길어 단추를 두 줄(좁은 칸은 네 줄)로 놓는다
      const askH = ask === 'formula' ? (narrow ? 4 * 52 + 40 : 2 * 50 + 44) : (narrow ? 88 : 90);
      const padH = narrow ? 230 + (steps ? 48 : 0) : 110;
      const LO = narrow
        ? { W: 360, workH: 198, C: { x: 186, y: 102 }, k: 0.62, ctlY: 202, ctlH: 114, chipY: 210, TY: 274, padY: 324, askY: 324 }
        : { W: 600, workH: 254, C: { x: 300, y: o.print ? 125 : 132 }, k: 1, ctlY: 262, ctlH: 66, chipY: 274, TY: 300, padY: 336, askY: 334 };
      LO.H = o.print ? 250 : pad ? LO.padY + padH : ask ? LO.askY + askH : (narrow ? 324 : 340);
      const W = LO.W; const H = LO.H;
      const zoom = Math.max(1, 1 / stageScale(box, W, H));
      const labels = o.print ? 'none' : (o.labels || 'words');
      const st = kit.stage(box, { viewBox: [W, H], label: '원 조각 다시 붙이기. 원을 여러 조각으로 잘라 엇갈려 붙이고 넓이를 구해 보세요.' });
      const C = LO.C;
      const start = Object.assign({ n: 8, arranged: false, r: 4 }, o.start || {});
      let n = start.n; let arranged = !!start.arranged; let r = start.r; let entry = ''; let entry1 = ''; let field = 1; let busy = false; let pick = null;
      let revealed = false;
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

      // 반지름(또는 지름) 선(원일 때)과 가로·세로 표시(붙였을 때). 숫자는 쉬움 단계에서만.
      const lab = st.layer('labels');
      const radG = kit.el('g', { 'pointer-events': 'none' }, lab);
      kit.el('rect', { x: 0, y: -1.6, width: 1, height: 3.2, fill: '#473B6B' }, radG);
      const radTxt = kit.el('text', { 'font-size': o.print ? 17 : 14, class: 'pk-text', fill: '#473B6B', 'text-anchor': 'middle' }, lab);
      const topBar = kit.el('rect', { x: 0, y: -1.6, width: 1, height: 3.2, fill: '#204C5A', 'pointer-events': 'none' }, lab);
      const topTxt = kit.el('text', { 'font-size': 14, class: 'pk-text', fill: '#204C5A', 'text-anchor': 'middle' }, lab);
      const sideBar = kit.el('rect', { x: -1.6, y: 0, width: 3.2, height: 1, fill: '#702830', 'pointer-events': 'none' }, lab);
      const sideTxt = kit.el('g', null, lab);
      const sideT1 = kit.el('text', { 'font-size': 14, class: 'pk-text', fill: '#702830', 'text-anchor': 'end' }, sideTxt);
      const sideT2 = kit.el('text', { 'font-size': 14, y: 18, class: 'pk-text', fill: '#702830', 'text-anchor': 'end' }, sideTxt);
      const sizeText = () => (diam ? `지름 ${r * 2} cm` : `반지름 ${r} cm`);
      function paintLabels() {
        const s = scaleOf(r); const showR = o.showR !== false && !(o.print && !o.showR);
        const circ = !arranged && !busy;
        radG.setAttribute('display', circ && showR ? 'inline' : 'none');
        radTxt.setAttribute('display', circ && showR ? 'inline' : 'none');
        // 지름 문항은 중심을 지나 끝에서 끝까지 긋는다
        radG.setAttribute('transform', diam
          ? `translate(${(C.x - Math.cos(-20 * Math.PI / 180) * R * s).toFixed(2)} ${(C.y - Math.sin(-20 * Math.PI / 180) * R * s).toFixed(2)}) rotate(-20) scale(${(2 * R * s).toFixed(2)} 1)`
          : `translate(${C.x} ${C.y}) rotate(-20) scale(${(R * s).toFixed(2)} 1)`);
        const ex = C.x + Math.cos(-20 * Math.PI / 180) * R * s + 8; const ey = C.y + Math.sin(-20 * Math.PI / 180) * R * s - 4;
        radTxt.setAttribute('x', Math.min(ex, W - 110).toFixed(1)); radTxt.setAttribute('y', ey.toFixed(1)); radTxt.setAttribute('text-anchor', 'start');
        radTxt.textContent = o.print && !o.showR ? '' : sizeText();
        const strip = arranged && !busy && labels !== 'none' && (!o.revealAfterCheck || revealed);
        [topBar, topTxt, sideBar, sideTxt].forEach((e) => e.setAttribute('display', strip ? 'inline' : 'none'));
        if (!strip) return;
        const { sx, sy } = sets[n]; const wpx = n * sx * s; const hpx = sy * s;
        const left = C.x - wpx / 2; const topY = C.y - hpx / 2;
        topBar.setAttribute('transform', `translate(${left.toFixed(2)} ${(topY - 14).toFixed(2)}) scale(${wpx.toFixed(2)} 1)`);
        topTxt.setAttribute('x', C.x); topTxt.setAttribute('y', (topY - 22).toFixed(1));
        // 고르는 칸이 있는 문항은 맞게 고르기 전까지 그 이름표를 '?'로 둔다(쉬움의 숫자 이름표는 그대로 돕는다).
        // 세로를 묻는 문항에서는 가로 이름표도 감춘다 — 다음 문항(가로 묻기)의 답을 미리 보여 주지 않게
        const hideW = (ask === 'width' && labels !== 'numbers' && pick !== ASK.width.answer) || (ask === 'height' && labels !== 'numbers');
        const hideH = ask === 'height' && labels !== 'numbers' && pick !== ASK.height.answer;
        topTxt.textContent = hideW ? '가로 = ?' : labels === 'numbers' ? (narrow ? `가로 ≈ 원주의 1/2 = ${fmt(r * PI)}` : `가로 ≈ 원주의 1/2 = ${r}×2×${PI}÷2 = ${fmt(r * PI)} cm`) : '가로 ≈ 원주의 1/2';
        sideBar.setAttribute('transform', `translate(${(left - 10).toFixed(2)} ${topY.toFixed(2)}) scale(1 ${hpx.toFixed(2)})`);
        sideTxt.setAttribute('transform', `translate(${(left - 18).toFixed(1)} ${(C.y - 2).toFixed(1)})`);
        sideT1.textContent = hideH ? '세로 = ?' : narrow ? '세로 ≈' : '세로 ≈ 반지름';
        sideT2.textContent = hideH ? '' : narrow ? `반지름${labels === 'numbers' ? ` ${r}` : ''}` : labels === 'numbers' ? `= ${r} cm` : '';
      }

      // ---- 조작 단추 ----
      // waits: 조각이 움직이는 동안(1.3초) 기다려야 하는 단추. 기다리는 동안은 흐리게 보이고 눌러도 아무 일이 없다는 것을 알린다.
      // 고르기·숫자판 단추는 움직임과 상관없으니 언제든 눌린다(움직이는 중에 누른 답이 조용히 사라지던 문제).
      const ui = st.layer('ui');
      const waiting = [];
      const button = (x, y, w, h, color, text, onAct, label, waits) => {
        const g = kit.el('g', { class: 'ca-btn', tabindex: 0, role: 'button', 'aria-label': label || text }, ui);
        // 누르는 곳은 화면 48px 이상(태블릿에서 무대가 줄면 숫자판 단추가 40px이 되던 문제)
        const k = zoom; const hw = Math.max(w + 4, 48 * k); const hh = Math.max(h + 6, 48, 48 * k);
        kit.el('rect', { x: x + w / 2 - hw / 2, y: y + h / 2 - hh / 2, width: hw, height: hh, class: 'pk-hit' }, g);
        const p = kit.piece(st, g, { shape: { type: 'rect', x, y, w, h, rx: 10 }, color, depth: 2 });
        const t = kit.el('text', { x: x + w / 2, y: y + h / 2 + 5, 'text-anchor': 'middle', 'font-size': w < 120 && text.length > 8 ? 12 : 15, class: 'pk-text', fill: '#3D352E' }, g);
        t.textContent = text;
        const act = (e) => {
          e.preventDefault();
          if (waits && busy) { kit.tick('no'); kit.announce('조각이 움직이는 중이에요. 멈추면 다시 눌러요.'); return; }
          kit.tick(); bounce(g); onAct();
        };
        g.addEventListener('click', act);
        g.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') act(e); });
        if (waits) waiting.push(g);
        return { g, p, t };
      };
      const setBusy = (on) => {
        busy = on;
        waiting.forEach((g) => { g.style.opacity = on ? '0.45' : ''; g.setAttribute('aria-disabled', String(on)); });
        if (knob) { knob.style.opacity = on ? '0.45' : ''; knob.setAttribute('aria-disabled', String(on)); }
      };
      const bounce = (g) => { if (RM) return; const b = g.getBBox(); kit.spring(0.9, 1, { stiffness: 260, damping: 12, onUpdate: (v) => g.setAttribute('transform', `translate(${(b.x + b.width / 2) * (1 - v)} ${(b.y + b.height / 2) * (1 - v)}) scale(${v})`) }); };
      const chips = {};
      let toggle = null; let rTxt = null; let knob = null; let valTxt = null; let val1Txt = null; let fieldA = null; let fieldB = null; let mark1 = null;
      const TX0 = narrow ? 120 : 392; const TX1 = narrow ? 330 : 566; const TY = LO.TY;
      const rx = (rr) => TX0 + ((TX1 - TX0) * (rr - 1)) / 9;
      if (controls) {
        kit.piece(st, ui, { shape: { type: 'rect', x: 10, y: LO.ctlY, w: W - 20, h: LO.ctlH, rx: 14 }, color: 'lavender', fill: kit.palette.lavender.light, depth: 1 });
        NS.forEach((k, i) => { chips[k] = narrow ? button(18 + i * 70, LO.chipY, 64, 50, 'buttercup', `${k}조각`, () => setN(k, true), `${k}조각으로 자르기`, true) : button(22 + i * 72, LO.chipY, 64, 42, 'buttercup', `${k}조각`, () => setN(k, true), `${k}조각으로 자르기`, true); });
        toggle = narrow ? button(230, LO.chipY, 114, 50, 'mint', '', () => setArranged(!arranged, true), '엇갈려 붙이기', true) : button(244, LO.chipY, 120, 42, 'mint', '', () => setArranged(!arranged, true), '엇갈려 붙이기', true);
        rTxt = narrow ? kit.el('text', { x: 20, y: TY + 14, 'text-anchor': 'start', 'font-size': 15, class: 'pk-text', fill: '#473B6B' }, ui) : kit.el('text', { x: (TX0 + TX1) / 2, y: 286, 'text-anchor': 'middle', 'font-size': 14, class: 'pk-text', fill: '#473B6B' }, ui);
        kit.el('rect', { x: TX0, y: TY + 6, width: TX1 - TX0, height: 6, rx: 3, fill: '#B8A6D9' }, ui);
        for (let k = 1; k <= 10; k++) kit.el('circle', { cx: rx(k), cy: TY + 9, r: 2, fill: '#473B6B' }, ui);
        knob = kit.el('g', { 'aria-label': diam ? '지름 손잡이' : '반지름 손잡이', 'aria-valuemin': 1, 'aria-valuemax': 10 }, ui);
        kit.el('circle', { r: narrow ? 30 : 24, class: 'pk-hit' }, knob);
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
          if (!/^Arrow/.test(e.key) || busy) return;
          const x = knob.__pk.x; const v = Math.max(1, Math.min(10, Math.round((x - TX0) / stepPx) + 1));
          setR(v, true);
        });
      }
      const pickBtns = {};
      if (ask) {
        const AY = LO.askY;
        const q = ask === 'formula' ? '붙인 모양의 넓이(가로 × 세로)를 식으로 바꾸면?' : `붙인 모양의 ${ASK[ask].part}는 원의 어느 부분과 같나요?`;
        kit.piece(st, ui, { shape: { type: 'rect', x: 10, y: AY, w: W - 20, h: H - AY - 8, rx: 14 }, color: 'sky', fill: kit.palette.sky.light, depth: 1 });
        const qt = kit.el('text', { x: narrow ? 20 : 22, y: narrow ? AY + 20 : AY + 22, 'font-size': narrow ? 13 : 14, class: 'pk-text', fill: '#204C5A' }, ui);
        qt.textContent = q;
        const grp = kit.el('g', { role: 'group', 'aria-label': q }, ui);
        choices.forEach((k, i) => {
          let xywh;
          if (ask === 'formula') xywh = narrow ? [18, AY + 32 + i * 52, 324, 46] : [22 + (i % 2) * 282, AY + 34 + Math.floor(i / 2) * 50, 272, 42];
          else xywh = narrow ? [18 + i * 82, AY + 30, 76, 46] : [22 + i * 140, AY + 34, 130, 42];
          const [x, y, w, h] = xywh;
          const b = button(x, y, w, h, 'cream', k, () => { pick = k; paintLabels(); paintUI(); kit.recorder.log('circlearea', state()); kit.announce(`${ASK[ask].part}: ${k}`); }, ask === 'formula' ? `넓이 식: ${k}` : `${ASK[ask].part}는 ${k}`);
          grp.appendChild(b.g);
          pickBtns[k] = b;
        });
      }
      if (pad) {
        const PY = LO.padY;
        kit.piece(st, ui, { shape: { type: 'rect', x: 10, y: PY, w: W - 20, h: H - PY - 8, rx: 14 }, color: 'mint', fill: kit.palette.mint.light, depth: 1 });
        // 두 칸 숫자판(쉬움): 누르면 그 칸에 숫자가 들어간다
        const fieldBox = (x, y, w, h, which, label) => {
          const g = kit.el('g', { tabindex: 0, role: 'button', 'aria-label': label, class: 'ca-field' }, ui);
          kit.el('rect', { x, y: y - 2, width: w, height: Math.max(h + 4, 48), class: 'pk-hit' }, g);
          const p = kit.piece(st, g, { shape: { type: 'rect', x, y, w, h, rx: 10 }, color: 'cream', depth: 2 });
          const t = kit.el('text', { x: x + 10, y: y + h / 2 + 6, 'text-anchor': 'start', 'font-size': 14, class: 'pk-text', fill: '#275C46' }, g);
          const go = (e) => { e.preventDefault(); field = which; paintUI(); kit.announce(which === 1 ? '첫째 칸: 반지름 × 반지름' : '둘째 칸: 넓이'); };
          g.addEventListener('click', go); g.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') go(e); });
          return { g, p, t };
        };
        if (steps) {
          const fw = narrow ? 324 : 196; const fx = narrow ? 18 : 22;
          fieldA = fieldBox(fx, PY + 8, fw, 38, 1, '첫째 칸: 반지름 × 반지름');
          fieldB = fieldBox(fx, PY + 54, fw, 38, 2, '둘째 칸: 넓이');
          val1Txt = fieldA.t; valTxt = fieldB.t;
          mark1 = kit.el('text', { x: fx + fw - 12, y: PY + 34, 'text-anchor': 'end', 'font-size': 18, class: 'pk-text', fill: '#275C46' }, ui);
        } else if (narrow) {
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
        const keyY0 = narrow ? PY + (steps ? 104 : 58) : PY + 8;
        const padKeys = keys.map((k, i) => {
          const col = i % cols; const row = Math.floor(i / cols);
          const [x, y, w, h] = narrow ? [18 + col * 82, keyY0 + row * 56, 76, 50] : [232 + col * 59, keyY0 + row * 48, 52, 42];
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
        if (!steps) kit.el('text', narrow ? { x: 274, y: PY + 42, 'text-anchor': 'middle', 'font-size': 11, class: 'pk-text', fill: '#275C46' } : { x: 120, y: PY + 98, 'text-anchor': 'middle', 'font-size': 12, class: 'pk-text', fill: '#275C46' }, ui).textContent = '키보드 숫자로도 입력해요';
        st.svg.addEventListener('keydown', (e) => {
          if (/^[0-9.]$/.test(e.key)) { e.preventDefault(); press(e.key); } else if (e.key === 'Backspace') { e.preventDefault(); press('←'); }
        });
      }
      const edit = (cur, k) => {
        if (k === '←') return cur.slice(0, -1);
        if (k === '.') return cur.includes('.') ? cur : (cur || '0') + '.';
        if (cur.length >= 7) return cur;
        return cur === '0' ? k : cur + k;
      };
      function press(k) {
        if (steps && field === 1) {
          entry1 = edit(entry1, k);
          // 첫째 칸이 맞으면 둘째 칸으로 넘어간다(쉬움 단계의 받침)
          if (entry1 !== '' && same(Number(entry1), r * r)) { field = 2; kit.announce(`반지름 × 반지름 = ${entry1}. 이제 3.14를 곱해 넓이를 써요.`); }
          else kit.announce(`첫째 칸 ${entry1 || '빈칸'}`);
        } else { entry = edit(entry, k); kit.announce(`넓이 ${entry || '빈칸'}`); }
        paintUI(); kit.recorder.log('circlearea', state());
      }
      function paintUI() {
        if (!controls) return;
        NS.forEach((k) => { chips[k].p.setColor(k === n ? 'peach' : 'buttercup'); chips[k].g.setAttribute('aria-pressed', String(k === n)); });
        toggle.t.textContent = arranged ? '다시 원으로' : '엇갈려 붙이기';
        toggle.g.setAttribute('aria-label', arranged ? '다시 원으로 모으기' : '조각을 엇갈려 붙이기');
        Object.entries(pickBtns).forEach(([k, b]) => { b.p.setColor(k === pick ? 'peach' : 'cream'); b.g.setAttribute('aria-pressed', String(k === pick)); });
        rTxt.textContent = sizeText();
        knob.setAttribute('aria-valuenow', diam ? r * 2 : r); knob.setAttribute('aria-valuetext', diam ? `지름 ${r * 2} 센티미터` : `반지름 ${r} 센티미터`);
        if (steps) {
          val1Txt.textContent = `① 반지름×반지름 = ${entry1 || '?'}`;
          valTxt.textContent = `② ${entry1 || '?'} × 3.14 = ${entry || '?'} cm²`;
          fieldA.p.setColor(field === 1 ? 'buttercup' : 'cream'); fieldB.p.setColor(field === 2 ? 'buttercup' : 'cream');
          fieldA.g.setAttribute('aria-pressed', String(field === 1)); fieldB.g.setAttribute('aria-pressed', String(field === 2));
          mark1.textContent = entry1 !== '' && same(Number(entry1), r * r) ? '✓' : '';
        } else if (valTxt) valTxt.textContent = o.padFor === 'rr' ? `반지름×반지름 = ${entry || '?'}` : `넓이 ${entry || '?'} cm²`;
      }

      function show(k) { NS.forEach((x) => sets[x].g.setAttribute('display', x === k ? 'inline' : 'none')); }
      function setN(k, animate) {
        if (k === n && animate) return;
        n = k; revealed = false; show(k); place(k, arranged);
        if (animate && !RM) { const items = sets[k].items; items.forEach((g, i) => { const base = arranged ? stripPose(k, i) : circlePose(k, i); kit.spring(0.6, 1, { stiffness: 200, damping: 11, onUpdate: (v) => kit.transform(g, Object.assign({}, base, { s: v })) }); }); }
        paintLabels(); paintUI();
        if (animate) { kit.recorder.log('circlearea', state()); kit.announce(`원을 ${k}조각으로 잘랐어요.`); }
      }
      async function setArranged(on, animate) {
        revealed = false;
        if (!animate || RM) { arranged = on; place(n, on); paintLabels(); paintUI(); if (animate) kit.recorder.log('circlearea', state()); return; }
        setBusy(true); arranged = on; paintLabels(); paintUI();
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
        place(k, on); setBusy(false); paintLabels();
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
        if (settle) { kit.recorder.log('circlearea', state()); kit.announce(diam ? `지름 ${v * 2} 센티미터` : `반지름 ${v} 센티미터`); }
      }

      const value = () => (entry === '' || entry === '.' ? null : Number(entry));
      const state = () => { const s = { n, arranged, r, value: value(), pick }; if (steps) s.step1 = entry1 === '' ? null : Number(entry1); return s; };
      function setState(s) {
        s = s || {};
        if (s.r != null) { r = s.r; kit.transform(world, { s: scaleOf(r) }); if (knob) kit.transform(knob, { x: rx(r), y: TY + 9 }); }
        if (s.arranged != null) arranged = !!s.arranged;
        if (s.n != null) n = s.n;
        entry = s.value != null ? String(s.value) : (s.value === null ? '' : entry);
        if (s.step1 !== undefined) entry1 = s.step1 == null ? '' : String(s.step1);
        if (s.pick !== undefined) pick = s.pick;
        revealed = false;
        show(n); place(n, arranged); paintLabels(); paintUI();
      }
      setState(start); entry = '';
      paintUI();

      // 채점만 한다(화면은 바꾸지 않는다) — 확인·힌트·오답 만들기가 함께 쓴다
      function judge(t) {
        const s = state();
        if (t.formula) {
          if (s.pick == null) return { correct: false, incomplete: true, feedback: '아래에서 넓이 식을 하나 골라 보세요.', hint: '붙인 모양의 넓이 = 가로 × 세로 = (원주의 1/2) × 반지름이에요.' };
          const hint = '원주 = 지름 × 원주율이니까 원주의 1/2 = 반지름 × 원주율이에요. 여기에 세로(반지름)를 곱해요.';
          const why = {
            '지름 × 원주율': '지름 × 원주율은 원주(둘레)를 구하는 식이에요. 넓이는 가로(원주의 1/2) × 세로(반지름)예요.',
            '반지름 × 2 × 원주율': '반지름 × 2는 지름이라 이 식도 원주(둘레)예요. 둘레가 아니라 넓이를 구해야 해요.',
            '지름 × 지름 × 원주율': '세로는 지름이 아니라 반지름이에요. 지름을 두 번 곱하면 넓이가 4배로 커져요.',
          }[s.pick];
          if (why) return { correct: false, feedback: why, hint };
          return { correct: true, feedback: '맞아요! (원주의 1/2) × 반지름 = (반지름 × 원주율) × 반지름 = 반지름 × 반지름 × 원주율이에요.' };
        }
        if (t.arranged != null) {
          if (t.n != null && s.n !== t.n) return { correct: false, feedback: `이번에는 원을 ${t.n}조각으로 잘라야 해요.`, hint: `아래의 "${t.n}조각" 단추를 누르세요.` };
          if (s.arranged !== t.arranged) return { correct: false, feedback: '조각을 아직 엇갈려 붙이지 않았어요.', hint: '"엇갈려 붙이기" 단추를 눌러 조각을 위아래로 번갈아 붙여 보세요.' };
          const want = t.width ? { part: '가로', answer: t.width } : t.height ? { part: '세로', answer: t.height } : null;
          if (want && s.pick !== want.answer) {
            const hint = want.part === '가로' ? '가로에는 색 테두리(원주)가 위와 아래로 반씩 나뉘어 놓여요.' : '세로는 조각의 뾰족한 끝(원의 중심)에서 둥근 테두리까지의 길이예요.';
            if (s.pick == null) return { correct: false, incomplete: true, feedback: `붙인 모양의 ${want.part}가 원의 어느 부분과 같은지 아래에서 골라 보세요.`, hint };
            const why = {
              '가로:반지름': '반지름은 세로예요. 가로에는 색 테두리가 놓여 있어요.',
              '가로:지름': '지름은 반지름의 2배예요. 가로를 이루는 색 테두리는 원주의 절반이에요.',
              '가로:원주': '원주 전체가 아니라, 위와 아래에 반씩 나뉘어 놓여요.',
              '세로:원주의 1/2': '원주의 1/2은 가로예요. 세로는 조각 하나의 길이예요.',
              '세로:지름': '조각 하나의 길이는 원의 중심에서 둘레까지, 지름의 절반이에요.',
              '세로:원주': '원주는 둘레 전체예요. 세로는 조각 하나의 길이예요.',
            }[`${want.part}:${s.pick}`] || '다시 골라 볼까요?';
            return { correct: false, feedback: why, hint };
          }
          // 세로 문항의 정답 말은 다음 문항(가로)과 넓이 식을 미리 말하지 않는다
          if (want) return { correct: true, feedback: `맞아요! 붙인 모양의 ${want.part}는 ${want.answer}과 같아요.${want.part === '가로' ? ' 원주의 1/2 = 반지름 × 원주율이에요.' : ''}` };
          return { correct: true, feedback: `맞아요! ${s.n}조각으로 붙이니 ${s.n >= 32 ? '거의 직사각형이 되었어요' : '직사각형에 가까워졌어요'}. 가로와 세로는 원의 어느 부분일까요?` };
        }
        if (t.findR != null) {
          const rr2 = t.area / PI; const v = s.value;
          const h3 = `${fmt(t.area)} ÷ ${PI} = ${fmt(rr2)}이고, ${t.findR} × ${t.findR} = ${fmt(rr2)}이라 반지름은 ${t.findR} cm예요.`;
          if (pad) {
            if (v == null) return { correct: false, incomplete: true, feedback: '먼저 넓이 ÷ 3.14를 계산해 숫자판에 반지름 × 반지름을 써요.', hint: '넓이 = 반지름 × 반지름 × 3.14이니, 넓이를 3.14로 나누면 반지름 × 반지름이에요.' };
            if (!same(v, rr2)) {
              if (same(v, t.area / (2 * PI))) return { correct: false, feedback: '둘레 식(반지름 × 2 × 3.14)으로 거꾸로 풀었어요. 넓이 식에는 2가 아니라 반지름이 한 번 더 들어가요.', hint: '넓이를 3.14로만 나누면 반지름 × 반지름이 나와요.', h3 };
              if (same(v, t.area * PI)) return { correct: false, feedback: '3.14를 곱했어요. 넓이에서 거꾸로 갈 때는 3.14로 나눠요.', hint: '넓이 = 반지름 × 반지름 × 3.14 — 거꾸로 하면 곱하기가 나누기가 돼요.', h3 };
              return { correct: false, feedback: '숫자판에 쓴 수가 넓이 ÷ 3.14와 달라요. 나눗셈을 다시 해 봐요.', hint: '넓이를 3.14로 나누면 반지름 × 반지름이에요.', h3 };
            }
          }
          if (s.r === t.findR) return { correct: true, feedback: `맞아요! ${s.r} × ${s.r} × ${PI} = ${fmt(t.area)} (cm²)라 반지름은 ${s.r} cm예요.` };
          // 방향(늘려/줄여)과 그 반지름의 넓이는 말하지 않는다 — 손잡이를 한 칸씩 옮겨 확인으로 맞추지 않게
          if (pad && same(s.r * 2, rr2)) return { correct: false, feedback: '반지름 × 반지름을 2로 나누었어요. 반지름은 같은 수를 두 번 곱해 그 수가 되는 수예요.', hint: '1 × 1, 2 × 2, 3 × 3 …처럼 같은 수를 두 번 곱해 보며 찾아요.', h3 };
          return { correct: false, feedback: pad ? '손잡이의 반지름을 두 번 곱하면 숫자판에 쓴 수가 되나요? 다시 생각해 봐요.' : '그 반지름으로는 넓이가 맞지 않아요. 넓이 ÷ 3.14부터 계산해 봐요.', hint: '넓이 ÷ 3.14 = 반지름 × 반지름이에요. 같은 수를 두 번 곱해 그 수가 되는 수를 찾아요.', h3 };
        }
        // 채점은 문항의 반지름(t.r)으로 한다: 손잡이를 안 맞춰도 계산이 맞으면 정답
        const rr = t.r != null ? t.r : s.r;
        const v = s.value;
        // 도전(이름표 없음)에서는 식만 주고 수는 넣지 않는다. 지름 문항은 반지름부터 구하게 한다.
        const hint = diam ? '주어진 길이가 지름이에요. 넓이 식에는 지름이 아니라 반지름이 들어가요.' : '반지름을 두 번 곱했는지, 그다음 원주율 3.14를 곱했는지 차례로 살펴봐요.';
        const h3 = `${diam ? `반지름 = ${rr * 2} ÷ 2 = ${rr} cm, ` : ''}${rr} × ${rr} = ${rr * rr}, ${rr * rr} × ${PI}를 계산해요.`;
        if (v == null) return { correct: false, incomplete: true, feedback: steps && entry1 === '' ? '① 반지름 × 반지름부터 계산해 첫째 칸에 써요.' : '넓이를 숫자판으로 입력해 보세요.', hint };
        if (same(v, t.area)) return { correct: true, feedback: `맞아요! ${diam ? `반지름은 ${rr * 2} ÷ 2 = ${rr} cm, ` : ''}${rr} × ${rr} × ${PI} = ${fmt(t.area)} (cm²)예요.` };
        if (s.r !== rr && same(v, s.r * s.r * PI)) return { correct: false, feedback: `손잡이를 옮겨 ${s.r} cm로 계산했어요. 문제에 주어진 ${diam ? '지름' : '반지름'}으로 계산해요.`, hint, h3 };
        if (same(v, 2 * rr * 2 * rr * PI)) return { correct: false, feedback: '지름을 두 번 곱했어요. 지름의 반인 반지름을 두 번 곱해요.', hint, h3 };
        if (same(v, 2 * rr * PI)) return { correct: false, feedback: '원주(원의 둘레)를 구했어요. 넓이는 원주의 1/2에 반지름을 곱해요.', hint, h3 };
        if (same(v, rr * PI)) return { correct: false, feedback: '직사각형의 가로(원주의 1/2)만 구했어요. 세로(반지름)도 곱해 보세요.', hint, h3 };
        if (same(v, 2 * rr * 2 * rr)) return { correct: false, feedback: '지름 × 지름까지 했어요. 지름 말고 반지름을 두 번 곱하고 3.14도 곱해요.', hint, h3 };
        if (same(v, rr * rr)) return { correct: false, feedback: '반지름 × 반지름까지 했어요. 원주율 3.14도 곱해요.', hint, h3 };
        if (same(v, 2 * rr * rr * PI)) return { correct: false, feedback: '지름 × 반지름을 곱했어요. 세로도 가로의 반쪽도 반지름이라 반지름을 두 번 곱해요.', hint, h3 };
        return { correct: false, feedback: '다시 계산해 볼까요? 반지름 × 반지름을 먼저 하고 3.14를 곱해요.', hint, h3 };
      }

      return {
        getState: state,
        setState,
        reset() { entry = ''; entry1 = ''; field = 1; setState(Object.assign({}, start, { value: null, pick: null })); },
        solve(t) {
          const s = {};
          if (t.n != null) s.n = t.n;
          if (t.arranged != null) s.arranged = t.arranged;
          if (t.r != null) s.r = t.r;
          if (t.findR != null) { s.r = t.findR; if (pad) s.value = Math.round((t.area / PI) * 100) / 100; }
          if (t.area != null && t.findR == null) s.value = t.area;
          if (t.width) s.pick = t.width; else if (t.height) s.pick = t.height; else if (t.formula) s.pick = t.formula;
          setState(s);
        },
        check(t, opts) {
          const r = judge(t); delete r.h3;
          // 붙인 모양의 이름표(revealAfterCheck)는 맞힌 확인에서만 켠다 — 틀린 확인·힌트는 아무것도 드러내지 않는다
          if (r.correct && !(opts && opts.forHint)) { revealed = true; paintLabels(); }
          return r;
        },
        // 힌트 3단계: 1 개념(수 없음) / 2 틀린 단계 짚기 / 3 수를 넣은 풀이 한 단계
        hint(t, opts) {
          t = t || {};
          const r = judge(t);
          const why = t.formula ? '붙인 모양은 직사각형에 가까워요. 직사각형의 넓이는 가로 × 세로예요. 가로와 세로가 원의 어느 부분이었는지 떠올려 식으로 바꿔요.'
            : t.width || t.height ? '조각의 둥근 테두리(원주)는 위와 아래로 반씩 나뉘고, 조각 하나의 길이는 원의 중심에서 테두리까지예요.'
              : t.arranged != null ? '원을 잘게 자를수록 엇갈려 붙인 모양이 직사각형에 더 가까워져요.'
                : t.findR != null ? '넓이를 구할 때 한 계산을 거꾸로 해 보세요. 곱하기를 거꾸로 하면 나누기예요.'
                  : '원의 넓이는 붙인 직사각형의 가로 × 세로예요. 가로와 세로가 원의 어느 부분이었는지 떠올려요.';
          const lv = hintLevel(opts);
          if (r.correct) return { hint: why, correct: true, level: 1 };
          if (lv === 1 || !r.hint) return { hint: why, correct: false, level: 1 };
          if (lv >= 3) {
            const h3 = r.h3 || (t.formula ? '(원주의 1/2) × 반지름 = (반지름 × 원주율) × 반지름 = 반지름 × 반지름 × 원주율이에요.'
              : t.area != null && t.findR == null ? `${t.r} × ${t.r} = ${t.r * t.r}, ${t.r * t.r} × ${PI}를 계산해요.` : t.findR != null ? `${fmt(t.area)} ÷ ${PI} = ${fmt(t.area / PI)}이고, 같은 수를 두 번 곱해 ${fmt(t.area / PI)}이 되는 수를 찾아요.` : r.hint);
            return { hint: h3, correct: false, level: 3 };
          }
          return { hint: r.hint, correct: false, level: 2 };
        },
        wrongAnswer(t) {
          t = t || {};
          const s = state(); const v2 = (x) => Math.round(x * 100) / 100;
          // 넓이 대신 둘레(반지름 × 2 × 원주율)를 고르는 오개념
          if (t.formula) return Object.assign(s, { pick: '반지름 × 2 × 원주율' });
          if (t.arranged != null) {
            const base = Object.assign(s, { n: t.n != null ? t.n : s.n, arranged: !!t.arranged });
            if (t.r != null) base.r = t.r;
            // 가로를 원주 전체로, 세로를 지름으로 보는 오개념
            if (t.width) return Object.assign(base, { pick: '원주' });
            if (t.height) return Object.assign(base, { pick: '지름' });
            if (t.n != null) return Object.assign(base, { n: NS.find((k) => k !== t.n) });
            return Object.assign(base, { arranged: !t.arranged });
          }
          if (t.findR != null) {
            // 넓이를 둘레 식(반지름 × 2 × 3.14)으로 거꾸로 푸는 오개념
            let rr = Math.max(1, Math.min(10, Math.round(t.area / (2 * PI))));
            if (rr === t.findR) rr = t.findR < 10 ? t.findR + 1 : t.findR - 1;
            return Object.assign(s, pad ? { r: rr, value: Math.round((t.area / PI) * 100) / 100 } : { r: rr });
          }
          if (t.area != null) {
            const rr = t.r != null ? t.r : s.r;
            // 지름 문항: 지름을 두 번 곱한다 / 반지름 문항: 둘레(2 × r × 3.14)나 r × 3.14(제곱하지 않음)를 넓이로 쓴다
            const bad = diam ? 2 * rr * 2 * rr * PI : rr % 2 ? 2 * rr * PI : rr * PI;
            return Object.assign(s, { r: rr, value: v2(bad) });
          }
          return null;
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
