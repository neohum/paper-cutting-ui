/* 종이 각도기 — 할핀으로 이은 종이 띠 두 장과 반투명 종이 각도기.
 * 고정 띠는 각도기 밑금 위에 놓이고, 움직이는 띠를 꼭짓점(할핀) 둘레로 돌려 각을 만든다.
 * 눈금 약속(우리나라 교과서 각도기와 같음): 안쪽 눈금은 오른쪽이 0°, 바깥쪽 눈금은 왼쪽이 0°.
 *   base:'right' → 고정 띠가 오른쪽(안쪽 눈금으로 읽음), base:'left' → 고정 띠가 왼쪽(바깥쪽 눈금으로 읽음)
 * 옵션: step(1|5|15°), base, showProtractor(기본 true), showReadout(각도 글자, 기본 true), showKind(예각·직각·둔각 이름, 기본 showReadout),
 *       highlightScale(읽을 눈금만 진하게), showHints, start(처음 각도, 기본 0), tolerance, print,
 *       measure(재기: 띠는 고정되어 있고, 눈금을 읽어 각도를 단추로 정한다 — 각도 글자는 늘 숨김)
 * 상태: { angle: 0~180, kind: '예각'|'직각'|'둔각'|null, base, entry: 재기에서 정한 각도|null }
 * 목표: { angle: 60 } · { kind: '둔각', min?, max? }(min·max는 그보다 크게·작게, 경계 제외) · 둘 다
 */
(function (K) {
  const reduce = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
  const kindOf = (a) => (a > 0 && a < 90 ? '예각' : a === 90 ? '직각' : a > 90 && a < 180 ? '둔각' : null);
  const KIND_COLOR = { 예각: 'mint', 직각: 'buttercup', 둔각: 'rose' };

  K.registerTool('protractor', {
    name: '종이 각도기',
    create(box, o, kit) {
      const W = 400; const H = 290;
      const st = kit.stage(box, { viewBox: [W, H], label: '종이 각도기. 복숭아색 종이 띠를 돌려 각을 만들어요.' });
      const cx = 200; const cy = 246; const R = 158; const ARM = 178;
      const step = o.step || 5;
      const base = o.base === 'left' ? 'left' : 'right';
      const tol = o.tolerance ?? (step <= 1 ? 1 : 0);
      const showP = o.showProtractor !== false;
      const measure = !o.print && !!o.measure;
      const showR = !o.print && !measure && o.showReadout !== false;
      const showKind = !o.print && !measure && (o.showKind ?? (o.showReadout !== false));
      // 활동지에서는 빈 읽기 칸을 잘라 내 각도기를 크게 그린다
      if (o.print) st.svg.setAttribute('viewBox', `${cx - ARM - 10} ${cy - ARM - 18} ${2 * ARM + 20} ${ARM + 40}`);
      const scaleName = base === 'right' ? '안쪽' : '바깥쪽';
      const NS = (tag, a, p) => kit.el(tag, a, p);

      // 띠 층: 오른쪽 기준이면 좌우를 뒤집는다. 그러면 두 경우 모두 "돌림 값 v = 각도 − 90"이고,
      // 방향키 ↑/→가 언제나 각을 벌린다.
      const arms = st.layer('arms');
      if (base === 'right') arms.setAttribute('transform', `translate(${2 * cx} 0) scale(-1 1)`);
      // 고정 띠(지역 좌표에서 왼쪽으로 뻗음)
      const fixedBand = kit.piece(st, arms, { shape: { type: 'rect', x: cx - ARM, y: cy - 11, w: ARM + 14, h: 22, rx: 11 }, color: 'mint', depth: 2 });
      NS('line', { x1: cx - ARM + 10, y1: cy, x2: cx, y2: cy, stroke: '#275C46', 'stroke-width': 1.4, 'stroke-dasharray': '6 5', 'pointer-events': 'none' }, arms);
      kit.piece(st, arms, { shape: { type: 'circle', cx: cx - ARM + 11, cy, r: 5 }, color: 'cream', depth: 0, flat: true });

      // 각 표시 부채꼴: 위 반원으로 자른 반원판을 띠와 같이 돌린다(transform만으로 각의 크기가 보인다)
      const clipId = `pk-prot-${Math.random().toString(36).slice(2, 8)}`;
      const cp = NS('clipPath', { id: clipId }, st.defs);
      const WR = 50;
      NS('path', { d: `M${cx - WR} ${cy} A${WR} ${WR} 0 0 1 ${cx + WR} ${cy} Z` }, cp);

      // 움직이는 띠(지역 좌표에서 12시 방향으로 그리고 v만큼 돌린다)
      const mv = NS('g', { class: 'pk-arm' }, arms);
      NS('rect', { x: cx - 26, y: cy - ARM - 8, width: 52, height: ARM - 8, class: 'pk-hit' }, mv);
      const moveBand = kit.piece(st, mv, { shape: { type: 'rect', x: cx - 11, y: cy - ARM, w: 22, h: ARM + 14, rx: 11 }, color: 'peach', depth: 2 });
      // 활동지(흑백 인쇄): 띠는 윤곽선만 그려 밑의 눈금 숫자를 덮지 않는다
      if (o.print) [fixedBand, moveBand].forEach((pc) => { pc.face.setAttribute('fill', '#FFFFFF'); pc.face.setAttribute('fill-opacity', 0.15); pc.face.setAttribute('stroke', '#3D352E'); pc.face.setAttribute('stroke-width', 1.4); (pc.under || []).forEach((u) => u.setAttribute('display', 'none')); });
      NS('line', { x1: cx, y1: cy - ARM + 10, x2: cx, y2: cy, stroke: '#6E3B21', 'stroke-width': 1.4, 'stroke-dasharray': '6 5', 'pointer-events': 'none' }, mv);
      // 끝의 손잡이 탭: 각도기 밖으로 나와 있어 잡기 쉽다
      kit.piece(st, mv, { shape: { type: 'circle', cx, cy: cy - ARM + 11, r: 15 }, color: 'peach', depth: 2 });
      kit.piece(st, mv, { shape: { type: 'circle', cx, cy: cy - ARM + 11, r: 6 }, color: 'cream', depth: 0 });

      // 반투명 종이 각도기(띠 위에 얹고, 손가락은 통과)
      const P = st.layer('protractor');
      P.setAttribute('pointer-events', 'none');
      const outline = `M${cx - R} ${cy + 12} L${cx - R} ${cy} A${R} ${R} 0 0 1 ${cx + R} ${cy} L${cx + R} ${cy + 12} Z`;
      NS('path', { d: outline, fill: kit.palette.lavender.layer, 'fill-opacity': 0.35, transform: 'translate(0 2.5)', class: 'pk-under' }, P);
      NS('path', { d: outline, fill: kit.palette.lavender.base, 'fill-opacity': 0.26, stroke: '#8E7BB5', 'stroke-width': 1.5 }, P);
      NS('path', { d: `M${cx - 66} ${cy} A66 66 0 0 1 ${cx + 66} ${cy} Z`, fill: '#FFFFFF', 'fill-opacity': 0.18, stroke: '#B8A6D9', 'stroke-width': 1 }, P);
      const pt = (deg, r) => [cx + r * Math.cos((deg * Math.PI) / 180), cy - r * Math.sin((deg * Math.PI) / 180)];
      for (let d = 0; d <= 180; d++) {
        const len = d % 10 === 0 ? 14 : d % 5 === 0 ? 9 : 5;
        const [x1, y1] = pt(d, R); const [x2, y2] = pt(d, R - len);
        NS('line', { x1, y1, x2, y2, stroke: '#3D352E', 'stroke-width': d % 10 === 0 ? 1.2 : 0.7, class: 'pk-text' }, P);
        if (d % 10 === 0) { const [a1, b1] = pt(d, 66); const [a2, b2] = pt(d, 75); NS('line', { x1: a1, y1: b1, x2: a2, y2: b2, stroke: '#3D352E', 'stroke-width': 0.9, class: 'pk-text' }, P); }
      }
      const outerC = '#702830'; const innerC = '#204C5A';
      const strong = o.highlightScale ? (base === 'right' ? 'inner' : 'outer') : null;
      const num = (d, r, text, fill, ring) => {
        const [x, y] = pt(d, r);
        const dim = strong && strong !== ring;
        const t = NS('text', { x, y: y + 3.5, 'text-anchor': 'middle', 'font-size': o.print ? 10.5 : (ring === 'outer' ? 10.5 : 9.5), class: 'pk-text', fill, opacity: dim ? 0.3 : 1, transform: `rotate(${90 - d} ${x} ${y})` }, P);
        if (strong === ring) t.setAttribute('font-size', ring === 'outer' ? 12 : 11);
        t.textContent = text;
      };
      // 활동지는 그림이 작아 안쪽 눈금 숫자가 붙어 겹친다 — 안쪽은 20°마다만 쓴다(10° 눈금선은 그대로)
      for (let d = 0; d <= 180; d += 10) { num(d, R - 25, 180 - d, outerC, 'outer'); if (!o.print || d % 20 === 0) num(d, R - 45, d, innerC, 'inner'); }
      if (strong) {
        const r = strong === 'outer' ? R - 25 : R - 45;
        NS('path', { d: `M${cx - r - 9} ${cy} A${r + 9} ${r + 9} 0 0 1 ${cx + r + 9} ${cy}`, fill: 'none', stroke: strong === 'outer' ? '#DE939B' : '#98C8D6', 'stroke-width': 3, 'stroke-dasharray': '2 5', 'stroke-linecap': 'round' }, P);
      }
      NS('line', { x1: cx - R + 4, y1: cy, x2: cx + R - 4, y2: cy, stroke: '#3D352E', 'stroke-width': 1.2, class: 'pk-text' }, P);
      NS('line', { x1: cx, y1: cy - 16, x2: cx, y2: cy + 10, stroke: '#3D352E', 'stroke-width': 1, class: 'pk-text' }, P);
      if (!showP) P.setAttribute('display', 'none');

      // 각 표시 부채꼴(각도기 위, 할핀 아래): 위 반원으로 자른 반원판을 띠와 같이 돌린다 — transform만으로 각의 크기가 보인다
      const wl = st.layer('wedge');
      wl.setAttribute('pointer-events', 'none');
      if (base === 'right') wl.setAttribute('transform', `translate(${2 * cx} 0) scale(-1 1)`);
      const wedgeG = NS('g', { 'clip-path': `url(#${clipId})` }, wl);
      const wedge = NS('path', { d: `M${cx} ${cy - WR} A${WR} ${WR} 0 0 0 ${cx} ${cy + WR} Z`, fill: '#E3DCCF', 'fill-opacity': 0.75 }, wedgeG);

      // 할핀
      const brad = NS('g', { 'pointer-events': 'none' }, st.layer('brad'));
      kit.piece(st, brad, { shape: { type: 'circle', cx, cy, r: 10 }, color: 'buttercup', depth: 2 });
      kit.piece(st, brad, { shape: { type: 'circle', cx, cy, r: 5 }, color: 'peach', depth: 0 });
      NS('circle', { cx: cx - 4, cy: cy - 4, r: 2, fill: '#FFFFFF', 'fill-opacity': 0.85 }, brad);

      // 읽기 글자
      const RO = st.layer('readout');
      const roBack = kit.piece(st, RO, { shape: { type: 'rect', x: 14, y: 14, w: 104, h: 70, rx: 14 }, color: 'cream', depth: 1 });
      const roAngle = NS('text', { x: 66, y: 50, 'text-anchor': 'middle', 'font-size': 30, class: 'pk-text', fill: '#3D352E' }, RO);
      const kindPill = kit.piece(st, RO, { shape: { type: 'rect', x: 32, y: 58, w: 68, h: 20, rx: 10 }, color: 'cream', depth: 0 });
      const roKind = NS('text', { x: 66, y: 73, 'text-anchor': 'middle', 'font-size': 13, class: 'pk-text', fill: '#3D352E' }, RO);
      if (!showR) { roAngle.setAttribute('display', 'none'); }
      if (!showKind) { kindPill.g.setAttribute('display', 'none'); roKind.setAttribute('display', 'none'); }
      if (!showR && !showKind) RO.setAttribute('display', 'none');
      else if (!showR) { roBack.g.setAttribute('transform', 'translate(0 40) scale(1 0.43)'); }
      // 고정 띠 꼬리표: 처음 보는 아이도 고정 띠와 움직이는 띠를 구분하게
      if (!o.print) {
        const lx = base === 'right' ? cx + 128 : cx - 128;
        NS('text', { x: lx, y: cy + 30, 'text-anchor': 'middle', 'font-size': 12, class: 'pk-text', fill: '#275C46' }, st.layer('fixed-tag')).textContent = '▲ 고정 띠';
      }
      if (o.showHints && !o.print) {
        // 규칙(왼쪽이면 바깥쪽)이 아니라 원리(고정 띠가 맞춰진 0에서 시작하는 눈금)를 안내한다
        const hl = st.layer('hint');
        if (measure) NS('text', { x: 200, y: 284, 'text-anchor': 'middle', 'font-size': 10.5, class: 'pk-text', fill: '#6E3B21' }, hl).textContent = `고정 띠의 0부터 세어요(${scaleName})`;
        else {
          NS('text', { x: 268, y: 22, 'text-anchor': 'middle', 'font-size': 11, class: 'pk-text', fill: '#6E3B21' }, hl).textContent = '복숭아색 띠를 잡고 돌려요';
          NS('text', { x: 268, y: 38, 'text-anchor': 'middle', 'font-size': 11, class: 'pk-text', fill: '#6E3B21' }, hl).textContent = `고정 띠가 맞춰진 0부터 세어요 (지금은 ${scaleName})`;
          NS('text', { x: 268, y: 54, 'text-anchor': 'middle', 'font-size': 11, class: 'pk-text', fill: '#6E3B21' }, hl).textContent = `방향키 ${step}°씩 · PageUp·PageDown ${step * 5}°씩`;
        }
      }

      let angle = 0;
      const toAngle = (v) => kit.clamp(v + 90, 0, 180);
      const paint = () => {
        const a = Math.round(angle); const k = kindOf(a);
        roAngle.textContent = `${a}°`;
        roKind.textContent = k || (a === 0 ? '각 없음' : '일직선');
        kindPill.setColor(k ? KIND_COLOR[k] : 'cream');
        wedge.setAttribute('fill', !o.print && showKind && k ? kit.palette[KIND_COLOR[k]].base : '#E3DCCF');
        mv.setAttribute('aria-valuenow', String(a));
        mv.setAttribute('aria-valuetext', `${a}도`);
      };
      let rot = null;
      const onChange = (v) => {
        if (v < -90 || v > 90) { if (rot) rot.set(kit.clamp(v, -90, 90)); return; }
        angle = toAngle(v);
        kit.transform(wedge, { r: v, cx, cy });
        paint();
      };
      rot = kit.rotate(st, mv, {
        center: [cx, cy], step, value: (o.start || 0) - 90, label: `움직이는 종이 띠. 방향키로 ${step}도씩, PageUp·PageDown으로 ${step * 5}도씩 벌리거나 좁혀요`,
        enabled: () => !o.print && !measure,
        onChange,
        onStart() { kit.tick(); },
        onEnd() { kit.recorder.log('protractor', state()); const a = Math.round(angle); kit.announce(showR ? `${a}도${kindOf(a) ? `, ${kindOf(a)}` : ''}` : '띠를 놓았어요'); },
      });
      mv.setAttribute('aria-valuemin', '0'); mv.setAttribute('aria-valuemax', '180');
      if (o.print || measure) { mv.removeAttribute('tabindex'); mv.classList.remove('pk-rotatable'); }
      let entry = null; let entryText = null;
      const state = () => { const a = Math.round(angle); return { angle: a, kind: kindOf(a), base, entry }; };
      // 재기: 위쪽 한 줄에 [−10][−1] ?° [+1][+10] — 각도기·띠와 겹치지 않는 자리
      const paintEntry = () => { if (entryText) entryText.textContent = entry == null ? '?°' : `${entry}°`; };
      if (measure) {
        const ML = st.layer('measure');
        kit.piece(st, ML, { shape: { type: 'rect', x: 150, y: 8, w: 100, h: 44, rx: 12 }, color: 'cream', depth: 1 });
        entryText = NS('text', { x: 200, y: 40, 'text-anchor': 'middle', 'font-size': 26, class: 'pk-text', fill: '#3D352E' }, ML);
        const btn = (x, d) => {
          const g = NS('g', { tabindex: 0, role: 'button', 'aria-label': `각도 ${d > 0 ? d : -d}도 ${d > 0 ? '늘리기' : '줄이기'}`, class: 'pk-draggable' }, ML);
          kit.transform(g, { x, y: 30 });
          NS('rect', { x: -26, y: -24, width: 52, height: 48, class: 'pk-hit' }, g);
          const pc = kit.piece(st, g, { shape: { type: 'rect', x: -24, y: -20, w: 48, h: 40, rx: 12 }, color: d > 0 ? 'mint' : 'lavender', depth: 2 });
          NS('text', { x: 0, y: 6, 'text-anchor': 'middle', 'font-size': 16, class: 'pk-text', fill: kit.palette[d > 0 ? 'mint' : 'lavender'].dark }, g).textContent = d > 0 ? `+${d}` : `−${-d}`;
          const press = (via) => {
            entry = kit.clamp((entry ?? (d > 0 ? 0 : 180)) + d, 0, 180); paintEntry(); kit.tick();
            kit.spring(0.88, 1, { stiffness: 380, damping: 12, onUpdate: (v) => kit.transform(g, { s: v }) });
            kit.announce(`${entry}도`); kit.recorder.log('protractor', Object.assign({ via }, state()));
          };
          g.addEventListener('click', () => press('pointer'));
          g.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); press('keyboard'); } });
          return pc;
        };
        btn(42, -10); btn(98, -1); btn(302, 1); btn(358, 10);
        paintEntry();
      }
      const setState = (s) => { const a = kit.clamp(Math.round((s && s.angle) ?? 0), 0, 180); rot.set(a - 90); angle = a; kit.transform(wedge, { r: a - 90, cx, cy }); entry = (s && s.entry != null) ? s.entry : null; paintEntry(); paint(); };
      setState({ angle: o.start || 0 });

      function celebrate() {
        if (o.print || reduce) return;
        const v = angle - 90;
        kit.spring(v + 7, v, { stiffness: 320, damping: 7, onUpdate: (x) => kit.transform(mv, { r: x, cx, cy }) });
        kit.tween(700, (p) => kit.transform(brad, { r: p * 360, cx, cy }));
        kit.spring(0.9, 1, { stiffness: 300, damping: 8, onUpdate: (x) => kit.transform(RO, { s: x }) });
      }

      const kindTargetAngle = { 예각: 40, 직각: 90, 둔각: 130 };
      const targetAngle = (t) => (t.angle != null ? t.angle : kindTargetAngle[t.kind] ?? 60);

      return {
        getState: state,
        setState,
        reset() { setState({ angle: o.start || 0 }); },
        solve(t) {
          t = t || {};
          if (measure) { entry = targetAngle(t); paintEntry(); return; }
          let a = targetAngle(t);
          if (t.kind && t.min != null && a <= t.min) a = t.kind === '예각' ? Math.min(89, t.min + 15) : t.min + 15;
          if (t.kind && t.max != null && a >= t.max) a = t.max - 15;
          setState({ angle: a });
        },
        check(t) {
          t = t || {};
          const a = Math.round(angle); const k = kindOf(a);
          const yes = (feedback) => { celebrate(); return { correct: true, feedback }; };
          const no = (feedback, hint) => ({ correct: false, feedback, hint });
          const zeroSide = `고정 띠가 ${base === 'right' ? '오른쪽' : '왼쪽'} 0에 맞춰져 있어요. 그 0에서 시작하는 눈금(이 각도기에서는 ${scaleName} 눈금)을`;
          if (measure && t.angle != null) {
            if (entry == null) return no('눈금을 읽어 각도를 정해 주세요.', '위의 +10, +1 단추로 읽은 각도를 맞춰요.');
            if (entry === t.angle) return yes(`맞아요! ${t.angle}°예요.${kindOf(t.angle) ? ` ${kindOf(t.angle)}이에요.` : ''}`);
            if (t.angle !== 90 && entry === 180 - t.angle) return no('반대쪽 눈금을 읽은 것 같아요!', `${zeroSide} 따라 0, 10, 20 … 으로 세어요. 먼저 예각인지 둔각인지 어림해 보면 잘못 읽은 것을 알 수 있어요.`);
            return no(`${entry}°가 아니에요. 눈금을 다시 세어 봐요.`, `${zeroSide} 따라 10씩 세고, 나머지는 작은 눈금으로 1씩 세어요.`);
          }
          if (t.angle != null) {
            const d = a - t.angle;
            if (Math.abs(d) <= tol && (!t.kind || k === t.kind)) return yes(`맞아요! ${t.angle}°예요.${kindOf(t.angle) ? ` ${kindOf(t.angle)}이에요.` : ''}`);
            if (a === 0) return no('아직 띠를 벌리지 않았어요.', '복숭아색 띠를 잡고 할핀 둘레로 돌려 각을 벌려요.');
            if (t.angle !== 90 && Math.abs(a - (180 - t.angle)) <= tol) {
              return no('반대쪽 눈금을 읽은 것 같아요!', `${zeroSide} 따라 ${t.angle}까지 세어요.`);
            }
            // 15° 이상 차이면 '많이', 그보다 작으면 '조금'
            const much = Math.abs(d) >= 15 ? '많이' : '조금';
            return no(d < 0 ? `각을 ${much} 더 벌려야 해요.` : `각을 ${much} 좁혀야 해요.`, `${scaleName} 눈금의 0부터 10, 20, 30 … 으로 세어 ${t.angle}${(t.angle % 10 === 5) ? '를' : '을'} 찾아요.${t.angle < 90 ? ' 직각(90°)보다 작은 각이에요.' : t.angle > 90 ? ' 직각(90°)보다 큰 각이에요.' : ''}`);
          }
          if (t.kind) {
            const range = t.min != null ? `${t.min}°보다 큰 ` : t.max != null ? `${t.max}°보다 작은 ` : '';
            if (a === 0) return no(t.kind === '예각' ? '아직 각이 벌어지지 않았어요. 0°는 예각이 아니에요.' : '아직 각이 벌어지지 않았어요.', '복숭아색 띠를 잡고 돌려 각을 벌려요.');
            if (k === t.kind) {
              if (t.min != null && a <= t.min) return no(`${a}°는 ${k}이지만 ${t.min}°보다 커야 해요.`, `${t.min}°보다 크게 벌리되 ${k === '예각' ? '직각(90°)보다는 작게' : '180°보다는 작게'} 만들어요.`);
              if (t.max != null && a >= t.max) return no(`${a}°는 ${k}이지만 ${t.max}°보다 작아야 해요.`, `${t.max}°보다 작게 좁히되 ${k === '둔각' ? '직각(90°)보다는 크게' : '0°보다는 크게'} 만들어요.`);
              return yes(`맞아요! ${a}°는 ${range}${k}이에요.`);
            }
            if (t.kind === '예각') return no(k === '직각' ? '직각이에요. 예각은 0°보다 크고 직각보다 작은 각이에요.' : '예각은 0°보다 크고 직각(90°)보다 작은 각이에요.', `두 띠를 직각(90°)보다 좁게, 그러나 ${t.min != null ? `${t.min}°` : '0°'}보다는 크게 벌려요.`);
            if (t.kind === '직각') return no(a < 90 ? '직각보다 작아요.' : '직각보다 커요.', '직각은 90°예요. 공책 모서리처럼 반듯한 각을 만들어요.');
            return no(a === 180 ? '일직선이 되었어요. 180°는 둔각이 아니에요. 둔각은 직각보다 크고 180°보다 작은 각이에요.' : '둔각은 직각(90°)보다 크고 180°보다 작은 각이에요.', `띠를 직각(90°)보다 더 넓게 벌리되 ${t.max != null ? `${t.max}°보다 작게` : '일직선(180°)이 되기 전에'} 멈춰요.`);
          }
          return no('다시 해 볼까요?', '띠를 돌려 각을 만들어요.');
        },
        async demo(t) {
          const from = angle; const to = targetAngle(t || {});
          await kit.tween(1300, (p) => { const a = from + (to - from) * p; rot.set(a - 90); });
          setState({ angle: to });
          celebrate();
          kit.announce(`${to}도`);
        },
      };
    },
  });
})(window.PaperKit);
