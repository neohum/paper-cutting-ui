/* 종이 컴퍼스 — 침(중심)과 연필 다리를 가진 종이 컴퍼스로 원을 그리고, 원의 중심·반지름·지름을 찾는다.
 * 모드(o.mode)
 *  - 'draw'(기본): 침은 종이의 중심점에 꽂혀 있다. 연필 다리 끝을 자를 따라 끌어 벌린 폭(=반지름)을 정하고,
 *                  손잡이를 잡고 한 바퀴 돌리면 원이 그려진다. 키보드: 연필 끝에서 ←→ 0.5cm씩·Enter 내려놓기,
 *                  컴퍼스(손잡이)에서 ←→ 15°씩 돌리기·Enter 한 바퀴 돌리기.
 *                  target { radius } 또는 { diameter } (cm). 지름만큼 벌린 실수를 따로 알아본다.
 *  - 'pick'      : 다 그린 원에 선분 가·나·다와 점 두 개가 있다. 물어본 것(center|radius|diameter)을 눌러 고른다.
 *                  target { pick: 'radius'|'diameter'|'center' }
 * 옵션: mode, showWidth(벌린 폭 글자, 기본 true), revealAfterCheck(벌린 폭을 확인 뒤에만), radius(pick·print 원의 반지름 cm),
 *       marks(pick에서 그릴 것, 기본 ['radius','diameter','chord']), print(활동지: 원과 중심점, mark 선분만 — 숫자 없음),
 *       show(print에서 그릴 선분: 'radius'|'diameter'|'both'), maxCm(자 길이, 기본 6)
 * 상태: { width: 벌린 폭 cm, drawn: 다 그렸는지, radius: 그린 원의 반지름 cm|null, swept: 돌린 각도, picked }
 */
(function (K) {
  'use strict';
  const U = 26; // 1cm (6cm까지 벌려도 원이 무대 안에 든다 — 지름 6cm를 6cm 벌리는 실수를 그려 볼 수 있게)
  const LEG = 112; // 다리 길이
  // 가·나·다는 받침이 없고 ㄱ(기역)·ㄴ(니은)은 받침이 있다
  const eul = (lb) => `${lb}${'가나다라'.includes(lb) ? '를' : '을'}`;
  const cm = (v) => (Number.isInteger(v) ? String(v) : v.toFixed(1));
  const NAME = { radius: '반지름', diameter: '지름', chord: '원 위의 두 점을 이은 선분', center: '원의 중심' };
  // 힌트 단계(hint(target, { level, attempts })): 1 = 개념·전략만(늘 열림, 문항의 cm·고를 기호를 말하지 않는다), 2 = 한 번 틀린 뒤 지금 어긋난 단계, 3 = 두 번 틀린 뒤 풀이 한 걸음
  const hintLevel = (opts) => { const a = (opts && opts.attempts) || 0; const l = (opts && opts.level) || 1; return Math.max(1, Math.min(l, a >= 2 ? 3 : a >= 1 ? 2 : 1)); };
  const CONCEPT = {
    center: '원의 중심은 컴퍼스 침을 꽂는 자리예요. 원 위의 어느 점까지나 거리가 같은 점을 찾아요.',
    radius: '반지름은 원의 중심에서 원 위의 한 점까지 이은 선분이에요. 한쪽 끝이 원의 중심인지 보세요.',
    diameter: '지름은 원 위의 두 점을 이은 선분 가운데 원의 중심을 지나는 선분이에요. 원의 중심을 지나는지 보세요.',
  };

  // 무대가 작게 그려지면(휴대폰) 투명 누름 영역을 화면 HIT_PX 이상으로 넓힌다 — 보이는 그림과 넓은 화면의 누름 영역은 그대로.
  // list: 사각형 요소, 또는 [요소, { x0, x1, y0, y1 }] — 그 요소 좌표계에서 넓혀도 되는 한계(이웃 누름 영역과 겹치지 않게)
  const HIT_PX = 46;
  function fitHits(st, list) {
    const base = list.map((it) => { const [el, lim] = Array.isArray(it) ? it : [it, null]; return { el, lim, x: +el.getAttribute('x'), y: +el.getAttribute('y'), w: +el.getAttribute('width'), h: +el.getAttribute('height') }; });
    const grow = (a, len, need, lo, hi) => { const n = Math.max(len, Math.min(need, hi - lo)); const s = Math.min(Math.max(a - (n - len) / 2, lo), hi - n); const x = Math.min(a, s); return [x, Math.max(a + len, s + n) - x]; };
    const run = () => {
      const rc = st.svg.getBoundingClientRect(); if (!rc.width || !rc.height) return;
      const need = HIT_PX / Math.min(rc.width / st.width, rc.height / st.height);
      for (const b of base) {
        const L = b.lim || {};
        const [x, w] = grow(b.x, b.w, need, L.x0 ?? -Infinity, L.x1 ?? Infinity);
        const [y, h] = grow(b.y, b.h, need, L.y0 ?? -Infinity, L.y1 ?? Infinity);
        b.el.setAttribute('x', x); b.el.setAttribute('width', w); b.el.setAttribute('y', y); b.el.setAttribute('height', h);
      }
    };
    run(); if (typeof ResizeObserver === 'function') new ResizeObserver(run).observe(st.svg);
    return run;
  }

  K.registerTool('compass', {
    name: '종이 컴퍼스',
    create(box, o, kit) {
      const print = !!o.print;
      const mode = o.mode === 'pick' ? 'pick' : 'draw';
      const maxCm = o.maxCm || 6;
      const W = 420; const H = 350;
      const O = { x: 200, y: 175 };
      const st = kit.stage(box, { viewBox: [W, H], background: print ? false : undefined, label: mode === 'pick' ? '원이 그려진 종이. 물어본 것을 눌러 골라요.' : '종이 컴퍼스. 연필 다리 끝을 자를 따라 벌리고, 손잡이를 돌려 원을 그려요.' });
      if (print) st.svg.setAttribute('viewBox', '30 5 340 340');
      const revealMode = !print && mode === 'draw' && o.showWidth !== false && !!o.revealAfterCheck;
      const showWidth = !print && mode === 'draw' && o.showWidth !== false;
      let revealed = !revealMode;

      // ---- 종이와 중심점 ----
      const Pp = st.layer('paper');
      // 활동지에는 종이 조각을 그리지 않는다 — 잘린 viewBox 안에 종이 테두리의 위아래 선만 남아 그림 틀처럼 보였다
      if (!print) kit.piece(st, Pp, { shape: { type: 'rect', x: 12, y: 10, w: W - 24, h: H - 20, rx: 16 }, color: 'cream', depth: 2, texture: true, fill: '#FFFDF8' });

      // ---- 자(중심에서 오른쪽으로, 0이 중심) ----
      const R = st.layer('ruler');
      const rulerOn = mode === 'draw' && !print;
      if (rulerOn) {
        const rx0 = O.x - 12; const rx1 = O.x + maxCm * U + 36;
        kit.piece(st, R, { shape: { type: 'rect', x: rx0, y: O.y + 6, w: rx1 - rx0, h: 40, rx: 6 }, color: 'buttercup', depth: 2 });
        for (let i = 0; i <= maxCm * 2; i++) {
          const x = O.x + i * (U / 2); const big = i % 2 === 0;
          kit.el('line', { x1: x, y1: O.y + 6, x2: x, y2: O.y + (big ? 20 : 13), stroke: '#3D352E', 'stroke-width': big ? 2 : 1.2, class: 'pk-text' }, R);
          if (big) kit.el('text', { x, y: O.y + 38, 'text-anchor': 'middle', 'font-size': 15, class: 'pk-text', fill: '#3D352E' }, R).textContent = i / 2;
        }
        kit.el('text', { x: rx1 - 6, y: O.y + 38, 'text-anchor': 'end', 'font-size': 12, class: 'pk-text', fill: '#6E5A2A' }, R).textContent = 'cm';
      }

      // ---- 그려지는 원(연필 선) ----
      const C = st.layer('circle');
      const circleG = kit.el('g', null, C);
      kit.transform(circleG, { x: O.x, y: O.y });
      // pk-text를 달지 않는다: 인쇄 CSS가 .pk-text를 검게 채워 원이 검은 원판이 된다
      const arc = kit.el('path', { fill: 'none', stroke: print ? '#000' : '#3D352E', 'stroke-width': print ? 2 : 2.6, 'stroke-linecap': 'round', 'pointer-events': 'none', pathLength: 360 }, circleG);
      const setArc = (rPx) => arc.setAttribute('d', `M${rPx} 0 A${rPx} ${rPx} 0 1 1 ${-rPx} 0 A${rPx} ${rPx} 0 1 1 ${rPx} 0`);
      const marksL = st.layer('marks');
      // 중심점은 그림일 뿐이다 — pick 모드에서 그 위의 점 ㄱ 누름 영역보다 위 층이라 한가운데 누름을 가로챘다
      const centerL = st.layer('center'); centerL.setAttribute('pointer-events', 'none');
      kit.piece(st, centerL, { shape: { type: 'circle', cx: O.x, cy: O.y, r: 4.5 }, color: 'ink', depth: 0, flat: true });
      if (!print && mode === 'draw') kit.el('text', { x: O.x - 10, y: O.y + 4, 'text-anchor': 'end', 'font-size': 14, class: 'pk-text', fill: '#6B5F50' }, centerL).textContent = 'ㅇ';

      // ---- 컴퍼스 ----
      let wPx = 2 * U; // 벌린 폭(px)
      let swept = 0; let drawnR = null; let drawing = false; let dirSign = 1;
      let picked = null;
      const CL = st.layer('compass');
      const outer = kit.el('g', { class: 'cp-compass' }, CL);
      const needleLeg = kit.el('g', null, outer);
      kit.piece(st, needleLeg, { shape: { type: 'rect', x: -5, y: -LEG, w: 10, h: LEG - 8, rx: 4 }, color: 'sky', depth: 2 });
      kit.piece(st, needleLeg, { shape: { type: 'poly', points: '-3,-10 3,-10 0,0' }, color: 'ink', depth: 0 });
      const tipG = kit.el('g', { class: 'cp-tip' }, outer);
      const HIT = 32; // 누름 영역 반지름 — 휴대폰(390px) 출구 질문 무대 배율 약 0.73에서도 지름 44px를 넘게
      kit.el('circle', { r: HIT, class: 'pk-hit' }, tipG);
      const pencilLeg = kit.el('g', null, tipG);
      kit.piece(st, pencilLeg, { shape: { type: 'rect', x: -6, y: -LEG, w: 12, h: LEG - 16, rx: 4 }, color: 'peach', depth: 2 });
      kit.piece(st, pencilLeg, { shape: { type: 'poly', points: '-6,-16 6,-16 0,0' }, color: 'buttercup', depth: 1 });
      kit.piece(st, pencilLeg, { shape: { type: 'poly', points: '-2,-5 2,-5 0,0' }, color: 'ink', depth: 0, flat: true });
      const hinge = kit.el('g', null, outer);
      kit.el('circle', { r: HIT, class: 'pk-hit' }, hinge);
      kit.el('circle', { cy: -36, r: HIT, class: 'pk-hit' }, hinge); // 맨 위 동그란 손잡이(r 9)를 손가락으로 잡을 수 있게
      kit.piece(st, hinge, { shape: { type: 'rect', x: -5, y: -34, w: 10, h: 30, rx: 4 }, color: 'lavender', depth: 1 });
      kit.piece(st, hinge, { shape: { type: 'circle', r: 12 }, color: 'lavender', depth: 2 });
      kit.piece(st, hinge, { shape: { type: 'circle', cy: -36, r: 9 }, color: 'rose', depth: 2 });

      const layoutLegs = () => {
        const half = wPx / 2; const h = Math.sqrt(Math.max(0, LEG * LEG - half * half));
        const ang = (Math.asin(Math.min(1, half / LEG)) * 180) / Math.PI;
        kit.transform(needleLeg, { x: O.x, y: O.y, r: ang });
        kit.transform(tipG, { x: O.x + wPx, y: O.y });
        kit.transform(pencilLeg, { r: -ang });
        kit.transform(hinge, { x: O.x + half, y: O.y - h });
      };

      // ---- 벌린 폭 글자 ----
      const RO = st.layer('readout');
      let roText = null;
      if (showWidth) {
        kit.piece(st, RO, { shape: { type: 'rect', x: 22, y: 20, w: 118, h: 58, rx: 12 }, color: 'cream', depth: 1 });
        kit.el('text', { x: 81, y: 42, 'text-anchor': 'middle', 'font-size': 14, class: 'pk-text', fill: '#6B5F50' }, RO).textContent = '벌린 폭';
        roText = kit.el('text', { x: 81, y: 68, 'text-anchor': 'middle', 'font-size': 22, class: 'pk-text', fill: '#3D352E' }, RO);
      }
      const widthCm = () => Math.round((wPx / U) * 2) / 2;
      const paintRO = () => { if (!roText) return; RO.setAttribute('display', revealed ? 'inline' : 'none'); roText.textContent = `${cm(widthCm())}cm`; };

      const resetDrawing = () => { swept = 0; drawnR = null; arc.setAttribute('stroke-dasharray', '0 360'); R.setAttribute('opacity', 1); };
      const paintArc = () => {
        setArc(wPx);
        kit.transform(circleG, { sy: dirSign });
        const sw = Math.min(360, swept);
        arc.setAttribute('stroke-dasharray', sw >= 360 ? '360 0' : `${sw.toFixed(1)} 360`);
      };
      const state = () => ({ mode, width: widthCm(), drawn: drawnR != null, radius: drawnR, swept: Math.round(Math.min(360, swept)), picked });

      // 연필 끝 끌기(자를 따라서만)
      if (mode === 'draw' && !print) {
        kit.drag(st, tipG, {
          keyStep: U / 2, bounds: [O.x + U / 2, O.y, O.x + maxCm * U, O.y],
          enabled: () => !drawing,
          snap: (x) => ({ x: O.x + Math.round((x - O.x) / (U / 2)) * (U / 2), y: O.y }),
          onStart() { kit.tick(); },
          onMove(x) { wPx = kit.clamp(x - O.x, U / 2, maxCm * U); if (rot && rot.get() !== 0) rot.set(0); resetDrawing(); layoutLegs(); while (SH.firstChild) SH.removeChild(SH.firstChild); if (revealMode) revealed = false; paintRO(); },
          onDrop(x, y, via) {
            wPx = kit.clamp(x - O.x, U / 2, maxCm * U); layoutLegs(); paintRO();
            kit.recorder.log('compass', Object.assign({ via, act: 'open' }, state()));
            kit.announce(showWidth && revealed ? `컴퍼스를 ${cm(widthCm())}cm 벌렸어요.` : '컴퍼스를 벌렸어요. 연필 끝이 닿은 자의 눈금을 읽어요.');
          },
        });
        tipG.setAttribute('aria-label', '컴퍼스 연필 다리. 방향키로 0.5cm씩 벌리거나 좁히고 Enter로 내려놓아요.');
        // 연필 끝 조작이 컴퍼스 돌리기로 번지지 않게 한다
        tipG.addEventListener('pointerdown', (e) => e.stopPropagation());
        tipG.addEventListener('keydown', (e) => e.stopPropagation());
        // 휴대폰(390px)에서는 1cm가 약 25px라 손가락으로 연필 끝을 0.5cm 눈금에 맞추기 어렵다 — 0.5cm씩 좁히기·벌리기 단추(숫자는 보이지 않는다)
        const nudge = (d, via) => {
          if (drawing) return;
          const before = wPx;
          wPx = kit.clamp(wPx + d * (U / 2), U / 2, maxCm * U);
          if (wPx === before) { kit.tick('no'); return; }
          if (rot && rot.get() !== 0) rot.set(0); resetDrawing(); layoutLegs();
          while (SH.firstChild) SH.removeChild(SH.firstChild);
          if (revealMode) revealed = false; paintRO(); kit.tick();
          kit.recorder.log('compass', Object.assign({ via, act: 'open' }, state()));
          kit.announce(showWidth && revealed ? `컴퍼스를 ${cm(widthCm())}cm 벌렸어요.` : `컴퍼스를 0.5cm ${d > 0 ? '더 벌렸어요' : '좁혔어요'}. 연필 끝이 닿은 자의 눈금을 읽어요.`);
        };
        const NB = st.layer('nudge');
        kit.el('text', { x: 349, y: 284, 'text-anchor': 'middle', 'font-size': 13, class: 'pk-text', fill: '#6B5F50' }, NB).textContent = '0.5cm씩';
        const nbHits = [];
        [[318, -1, '−', '컴퍼스를 0.5cm 좁히기', 'lavender', [-34, 31]], [380, 1, '+', '컴퍼스를 0.5cm 벌리기', 'mint', [-31, 34]]].forEach(([x, d, label, aria, color, [x0, x1]]) => {
          const g = kit.el('g', { tabindex: 0, role: 'button', 'aria-label': aria }, NB);
          kit.transform(g, { x, y: 314 });
          // 휴대폰 출구 질문(배율 약 0.73)에서는 두 단추 사이 가운데(349)와 무대 끝까지 넓힌다
          nbHits.push([kit.el('rect', { x: -30, y: -30, width: 60, height: 60, class: 'pk-hit' }, g), { x0, x1, y0: -34, y1: H - 314 }]);
          kit.piece(st, g, { shape: { type: 'rect', x: -24, y: -20, w: 48, h: 40, rx: 12 }, color, depth: 2 });
          kit.el('text', { x: 0, y: 8, 'text-anchor': 'middle', 'font-size': 24, class: 'pk-text', fill: kit.palette[color].dark }, g).textContent = label;
          const go = (via) => { kit.spring(0.88, 1, { stiffness: 380, damping: 12, onUpdate: (v) => kit.transform(g, { s: v }) }); nudge(d, via); };
          g.addEventListener('click', () => go('pointer'));
          g.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go('keyboard'); } });
        });
        fitHits(st, nbHits);
      }

      // 컴퍼스 돌리기(중심 둘레) — 돌린 만큼 원이 그려진다
      let rot = null;
      const settleDraw = (via) => {
        if (swept >= 355) {
          swept = 360; drawnR = widthCm(); paintArc(); R.setAttribute('opacity', 0.35);
          kit.announce(`한 바퀴를 돌려 원을 그렸어요.${showWidth && revealed ? ` 반지름 ${cm(drawnR)}cm인 원이에요.` : ''}`);
        } else if (swept > 0) kit.announce('원이 아직 다 그려지지 않았어요. 계속 돌려요.');
        kit.recorder.log('compass', Object.assign({ via, act: 'turn' }, state()));
      };
      if (mode === 'draw' && !print) {
        rot = kit.rotate(st, outer, {
          center: [O.x, O.y], step: 15, value: 0,
          label: '컴퍼스 손잡이. 끌어서 돌리면 원이 그려져요. 방향키로 15도씩, Enter로 한 바퀴 돌려요.',
          enabled: () => !drawing,
          onStart() { kit.tick(); },
          onChange(v) {
            if (drawnR != null && widthCm() !== drawnR) resetDrawing();
            if (!swept && v) dirSign = v < 0 ? -1 : 1;
            swept = Math.max(swept, Math.abs(v)); paintArc();
          },
          onEnd() { settleDraw('pointer'); },
        });
        outer.addEventListener('keydown', (e) => {
          if (e.key !== 'Enter' && e.key !== ' ') return;
          e.preventDefault(); fullTurn('keyboard');
        });
      }
      async function fullTurn(via) {
        if (drawing) return; drawing = true;
        const from = rot.get(); dirSign = from < 0 ? -1 : (swept ? dirSign : 1);
        const to = dirSign * 360;
        await kit.tween(1100, (p) => rot.set(from + (to - from) * p));
        rot.set(to); swept = 360; drawing = false; settleDraw(via);
      }

      // ---- 고르기(pick) 모드: 원과 선분 가·나·다, 점 ㄱ·ㄴ ----
      const pickR = (o.radius || 4) * U;
      const pickables = []; const segHits = [];
      const pt = (deg, r) => [O.x + r * Math.cos((deg * Math.PI) / 180), O.y + r * Math.sin((deg * Math.PI) / 180)];
      const drawSeg = (layer, a, b, color, dashed) => kit.el('line', { x1: a[0], y1: a[1], x2: b[0], y2: b[1], stroke: color, 'stroke-width': 3, 'stroke-linecap': 'round', 'stroke-dasharray': dashed ? '7 5' : null, class: 'pk-text' }, layer);
      const SEGS = {
        radius: () => [[O.x, O.y], pt(-55, pickR)],
        diameter: () => [pt(160, pickR), pt(-20, pickR)],
        chord: () => [pt(60, pickR), pt(140, pickR)],
      };
      if (mode === 'pick' || print) {
        const rr = mode === 'pick' ? pickR : (o.radius || 4) * U;
        setArc(rr); arc.setAttribute('stroke-dasharray', '360 0');
        if (mode === 'pick') {
          const marks = o.marks || ['radius', 'diameter', 'chord'];
          const labels = ['가', '나', '다', '라'];
          marks.forEach((m, k) => {
            const [a, b] = SEGS[m]();
            const g = kit.el('g', { tabindex: 0, role: 'button', 'aria-label': `선분 ${labels[k]}` }, marksL);
            // 선분 둘레의 투명 띠(두께 30, 휴대폰에서는 화면 46px) — 선을 따라 비스듬한 띠라 누를 수 있는 폭이 선과 직각으로 잡힌다
            segHits.push({ el: kit.el('polygon', { class: 'pk-hit' }, g), a, b });
            const line = drawSeg(g, a, b, '#702830');
            // 글자는 선분의 70% 자리에서 옆으로 비켜 둔다(가운데에 두면 지름 글자가 중심점을 가린다)
            const tt = m === 'chord' ? 0.5 : 0.72; const mx = a[0] + (b[0] - a[0]) * tt; const my = a[1] + (b[1] - a[1]) * tt; const nx = -(b[1] - a[1]); const ny = b[0] - a[0]; const nl = Math.hypot(nx, ny) || 1;
            const lx = mx + (nx / nl) * 18; const ly = my + (ny / nl) * 18;
            const tag = kit.piece(st, g, { shape: { type: 'circle', cx: lx, cy: ly, r: 14 }, color: 'cream', depth: 1 });
            kit.el('text', { x: lx, y: ly + 5, 'text-anchor': 'middle', 'font-size': 15, class: 'pk-text', fill: '#702830' }, g).textContent = labels[k];
            pickables.push({ key: m, g, line, tag, label: labels[k], seg: [a, b] });
          });
          // 점 ㄱ(중심)·ㄴ(중심이 아닌 점)
          [['center', O.x, O.y, 'ㄱ'], ['off', O.x - 52, O.y + 70, 'ㄴ']].forEach(([key, x, y, lb]) => {
            const g = kit.el('g', { tabindex: 0, role: 'button', 'aria-label': `점 ${lb}` }, marksL);
            kit.el('circle', { cx: x, cy: y, r: 32, class: 'pk-hit' }, g); // 휴대폰 출구 질문(더 작은 무대)에서도 44px
            const tag = kit.piece(st, g, { shape: { type: 'circle', cx: x, cy: y, r: 6 }, color: 'ink', depth: 0, flat: true });
            kit.el('text', { x: x + 14, y: y - 8, 'font-size': 15, class: 'pk-text', fill: '#3D352E' }, g).textContent = lb;
            pickables.push({ key, g, tag, label: lb });
          });
          const fitSegs = () => {
            const rc = st.svg.getBoundingClientRect(); const k = rc.width && rc.height ? Math.min(rc.width / W, rc.height / H) : 1;
            const T = Math.max(30, HIT_PX / k) / 2;
            segHits.forEach(({ el, a, b }) => {
              const l = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1; const nx = (-(b[1] - a[1]) / l) * T; const ny = ((b[0] - a[0]) / l) * T;
              el.setAttribute('points', [[a[0] + nx, a[1] + ny], [b[0] + nx, b[1] + ny], [b[0] - nx, b[1] - ny], [a[0] - nx, a[1] - ny]].map((q) => q.join(',')).join(' '));
            });
          };
          fitSegs(); if (typeof ResizeObserver === 'function') new ResizeObserver(fitSegs).observe(st.svg);
          // 넓힌 띠가 겹치는 자리(반지름·지름이 만나는 중심 근처)를 누르면 누른 곳에서 가장 가까운 선분을 고른다
          const segDist = (q, [a, b]) => { const dx = b[0] - a[0]; const dy = b[1] - a[1]; const t = kit.clamp(((q.x - a[0]) * dx + (q.y - a[1]) * dy) / (dx * dx + dy * dy || 1), 0, 1); return Math.hypot(q.x - a[0] - t * dx, q.y - a[1] - t * dy); };
          const nearestSeg = (e, p) => {
            if (!p.seg || !e.target.classList.contains('pk-hit') || !e.detail) return p;
            const q = st.point(e); let best = p; let bd = Infinity;
            pickables.forEach((c) => { if (c.seg) { const d = segDist(q, c.seg); if (d < bd) { bd = d; best = c; } } });
            return best;
          };
          pickables.forEach((p) => {
            const go = (via) => {
              picked = p.key; kit.tick();
              pickables.forEach((q) => q.g.setAttribute('aria-pressed', String(q === p)));
              pickables.forEach((q) => { if (q.line) q.line.setAttribute('stroke-width', q === p ? 6 : 3); if (q.tag.setColor) q.tag.setColor(q === p ? 'buttercup' : (q.line ? 'cream' : 'ink')); });
              kit.recorder.log('compass', Object.assign({ via, act: 'pick' }, state()));
              kit.announce(`${p.line ? '선분' : '점'} ${eul(p.label)} 골랐어요.`);
            };
            p.g.addEventListener('click', (e) => { const c = nearestSeg(e, p); if (c === p) go('pointer'); else c.go('pointer'); });
            p.g.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go('keyboard'); } });
            p.go = go;
          });
        } else {
          const show = o.show || 'radius';
          if (show === 'radius' || show === 'both') drawSeg(marksL, [O.x, O.y], pt(-30, rr), '#3D352E');
          if (show === 'diameter' || show === 'both') drawSeg(marksL, pt(200, rr), pt(20, rr), '#3D352E', true);
        }
        CL.setAttribute('display', 'none');
      }

      // ---- 맞힌 뒤 보여 주기: 반지름·지름 선 ----
      const SH = st.layer('show');
      const showResult = (kind) => {
        while (SH.firstChild) SH.removeChild(SH.firstChild);
        if (print || drawnR == null) return;
        const rp = drawnR * U;
        if (kind === 'diameter') {
          drawSeg(SH, [O.x - rp, O.y - 2], [O.x + rp, O.y - 2], '#702830');
          kit.el('text', { x: O.x, y: O.y - 12, 'text-anchor': 'middle', 'font-size': 15, class: 'pk-text', fill: '#702830' }, SH).textContent = `지름 ${cm(drawnR * 2)}cm = 반지름 ${cm(drawnR)}cm × 2`;
        } else {
          drawSeg(SH, [O.x, O.y - 2], [O.x + rp, O.y - 2], '#702830');
          kit.el('text', { x: O.x + rp / 2, y: O.y - 12, 'text-anchor': 'middle', 'font-size': 15, class: 'pk-text', fill: '#702830' }, SH).textContent = `반지름 ${cm(drawnR)}cm`;
        }
      };

      const setState = (s) => {
        s = s || {};
        // 활동지 그림은 위에서 그린 원·선분 그대로 둔다(draw 상태로 다시 그리면 원이 지워졌다)
        if (print) return;
        if (mode === 'draw') {
          if (s.width != null) wPx = kit.clamp(Number(s.width) * U, U / 2, maxCm * U);
          layoutLegs();
          swept = s.drawn ? 360 : (s.swept || 0); drawnR = s.drawn ? widthCm() : null; dirSign = 1;
          if (rot) rot.set(0); kit.transform(outer, { r: 0, cx: O.x, cy: O.y }); swept = s.drawn ? 360 : (s.swept || 0);
          paintArc(); R.setAttribute('opacity', drawnR != null ? 0.35 : 1);
          while (SH.firstChild) SH.removeChild(SH.firstChild);
          if (revealMode) revealed = false; paintRO();
        } else { picked = s.picked || null; pickables.forEach((q) => { if (q.line) q.line.setAttribute('stroke-width', q.key === picked ? 6 : 3); if (q.tag.setColor) q.tag.setColor(q.key === picked ? 'buttercup' : (q.line ? 'cream' : 'ink')); }); }
      };
      const start = o.start || {};
      setState({ width: start.width ?? 2, drawn: false });

      let hinting = false;
      function celebrate() {
        if (hinting) return;
        if (print) return;
        kit.spring(0.92, 1, { stiffness: 300, damping: 9, onUpdate: (v) => kit.transform(circleG, { s: v }) });
      }
      const wantR = (t) => (t.radius != null ? t.radius : t.diameter != null ? t.diameter / 2 : 3);

      const judgeNow = (t) => {
        t = t || {};
        const no = (feedback, hint) => ({ correct: false, feedback, hint });
        if (mode === 'pick') {
          if (!picked) return { correct: false, incomplete: true, feedback: '먼저 선분이나 점을 하나 눌러 골라요.', hint: CONCEPT[t.pick] || '고른 것은 굵게 바뀌어요.' };
          if (picked === t.pick) { celebrate(); return { correct: true, feedback: `맞아요! ${t.pick === 'center' ? '원의 한가운데 점이 원의 중심이에요.' : t.pick === 'radius' ? '원의 중심과 원 위의 한 점을 이은 선분이 반지름이에요.' : '원 위의 두 점을 이은 선분이 원의 중심을 지나면 지름이에요.'}` }; }
          const why = {
            chord: '그 선분은 원 위의 두 점을 이었지만 원의 중심을 지나지 않아요.',
            diameter: '그 선분은 원의 중심을 지나 원 위의 두 점을 이었어요. 지름이에요.',
            radius: '그 선분은 원의 중심에서 원 위의 한 점까지예요. 반지름이에요.',
            center: '그 점은 원의 중심이에요.',
            off: '그 점은 원 안에 있지만 한가운데가 아니에요.',
          }[picked];
          const hint = { center: '컴퍼스의 침을 꽂았던 자리, 원 위 어느 점까지도 거리가 같은 점을 찾아요.', radius: '원의 중심에서 시작해 원까지 가는 선분을 찾아요.', diameter: '원의 중심을 지나고 양쪽 끝이 모두 원 위에 있는 선분을 찾아요.' }[t.pick];
          return no(why, hint);
        }
        const r = wantR(t); const w = widthCm();
        if (drawnR == null) {
          if (swept > 0) return no('원이 아직 다 그려지지 않았어요.', '손잡이를 잡고 한 바퀴를 끝까지 돌려요(키보드는 손잡이에서 Enter).');
          return no('컴퍼스를 벌린 다음 손잡이를 돌려 원을 그려요.', '연필 다리 끝을 자를 따라 끌어 벌리고, 손잡이를 잡고 한 바퀴 돌려요.');
        }
        if (drawnR === r) {
          celebrate(); if (!hinting) showResult(t.diameter != null ? 'diameter' : 'radius');
          return { correct: true, feedback: t.diameter != null ? `맞아요! ${cm(drawnR)}cm 벌려 그린 원의 지름은 ${cm(t.diameter)}cm예요. 지름은 반지름의 2배예요.` : `맞아요! 컴퍼스를 ${cm(r)}cm 벌려 반지름이 ${cm(r)}cm인 원을 그렸어요.` };
        }
        // 틀린 확인은 벌린 폭의 숫자를 말하지 않는다 — 숫자를 받아 가며 맞추지 않고 자의 눈금을 읽게(기본 단계는 벌린 폭 글자도 숨김)
        if (t.diameter != null && drawnR === t.diameter) return no('지름만큼 벌렸어요. 컴퍼스를 벌린 폭은 반지름이에요.', `지름은 반지름의 2배예요. 지름 ${cm(t.diameter)}cm의 반만큼 벌려요.`);
        if (t.radius != null && drawnR === t.radius * 2) return no('반지름의 2배만큼 벌렸어요. 컴퍼스를 벌린 폭이 곧 반지름이에요.', `컴퍼스를 벌린 폭이 곧 반지름이에요. ${cm(t.radius)}cm만 벌려요.`);
        const more = drawnR < r;
        return no(`목표보다 ${more ? '좁게' : '넓게'} 벌려 그렸어요. 연필 끝이 닿은 자의 눈금을 읽어 보세요.`, `자의 0(침이 꽂힌 중심)에서 연필 끝까지가 벌린 폭이에요. ${t.diameter != null ? `지름 ${cm(t.diameter)}cm의 반을 생각해 보세요.` : `${cm(r)}cm 눈금에 연필 끝을 맞춰요.`}${w !== drawnR ? ' 벌린 폭을 바꾸었다면 다시 돌려 그려요.' : ''}`);
      };
      return {
        getState: state,
        setState,
        reset() { setState({ width: start.width ?? 2, drawn: false }); },
        // 다 했지만 틀린 상태(모의 수업·검사용) — 흔한 오개념 쪽으로: 지름만큼 벌리기, 지름과 반지름 바꿔 고르기
        wrongAnswer(t) {
          t = t || {};
          if (mode === 'pick') {
            const marks = o.marks || ['radius', 'diameter', 'chord'];
            const alt = { diameter: 'chord', radius: 'diameter', center: 'off' }[t.pick];
            return { picked: alt === 'chord' && !marks.includes('chord') ? 'radius' : alt || 'center' };
          }
          const r = wantR(t);
          const w = t.diameter != null ? t.diameter : (2 * r <= maxCm ? 2 * r : r + 1);
          return { width: Math.min(maxCm, w), drawn: true };
        },
        solve(t) {
          t = t || {};
          if (mode === 'pick') { setState({ picked: t.pick }); return; }
          setState({ width: wantR(t), drawn: true });
        },
        // 확인 전 숨김(reveal:'after-check'): 맞힌 확인 뒤에만 읽기 값을 보인다. 힌트는 확인이 아니라 아무것도 드러내지 않는다
        check(t, opts) {
          const r = judgeNow(t);
          if (r.correct && !(opts && opts.forHint)) { revealed = true; paintRO(); }
          return r;
        },
        // 새 힌트 계약: 1단계는 늘 열리고 문항의 cm·고를 기호를 말하지 않는다. 지금 상태가 맞아도 '맞아요'라고 알려 주지 않는다.
        hint(t, opts) {
          t = t || {}; const lv = hintLevel(opts);
          hinting = true;
          try {
            const r = judgeNow(t);
            const concept = mode === 'pick' ? (CONCEPT[t.pick] || '') : t.diameter != null ? '컴퍼스를 벌린 폭은 반지름이에요. 지름과 반지름 사이의 관계를 먼저 떠올려요.' : '자의 0은 침(원의 중심)에 있어요. 0에서 연필 끝까지가 벌린 폭이고, 그 길이가 원의 반지름이 돼요.';
            if (lv === 1 || r.correct) return { hint: concept, level: 1 };
            if (lv === 2) return { hint: r.feedback || concept, level: 2 };
            return { hint: r.hint || r.feedback || '', level: 3 };
          } finally { hinting = false; }
        },
        async demo(t) {
          t = t || {};
          if (mode !== 'draw' || print) return;
          setState({ width: 1, drawn: false });
          const to = wantR(t) * U; const from = wPx;
          await kit.tween(900, (p) => { wPx = from + (to - from) * p; layoutLegs(); });
          wPx = to; layoutLegs(); paintRO();
          await fullTurn('demo');
          showResult(t.diameter != null ? 'diameter' : 'radius');
        },
      };
    },
  });
})(window.PaperKit);
