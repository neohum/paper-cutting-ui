/* 종이 각도기 — 할핀으로 이은 종이 띠 두 장과 반투명 종이 각도기.
 * 고정 띠는 각도기 밑금 위에 놓이고, 움직이는 띠를 꼭짓점(할핀) 둘레로 돌려 각을 만든다.
 * 눈금 약속(우리나라 교과서 각도기와 같음): 안쪽 눈금은 오른쪽이 0°, 바깥쪽 눈금은 왼쪽이 0°.
 *   base:'right' → 고정 띠가 오른쪽(안쪽 눈금으로 읽음), base:'left' → 고정 띠가 왼쪽(바깥쪽 눈금으로 읽음)
 * 옵션: step(1|5|15°), base, showProtractor(기본 true), showReadout(각도 글자, 기본 true), showKind(예각·직각·둔각 이름, 기본 showReadout),
 *       highlightScale(읽을 눈금만 진하게), showHints, start(처음 각도, 기본 0), tolerance, print,
 *       measure(재기: 띠는 고정되어 있고, 눈금을 읽어 각도를 단추로 정한다 — 각도 글자는 늘 숨김),
 *       place(각도기 맞추기: 각이 tilt°(기본 30, 15의 배수) 기울어져 있고, 학생이 각도기를 끌어 중심을 꼭짓점에,
 *             돌리기 단추로 밑금을 고정 띠에 맞춘 뒤 재기처럼 각도를 정한다 — measure를 포함), tilt, placeStart({x,y,r}),
 *       armLength(띠 길이 배율 0.4~1.25 — 변의 길이와 각의 크기는 관계없음을 보이는 그림용. 인쇄에서는 같은 틀에 그린다)
 * 상태: { angle: 0~180, kind: '예각'|'직각'|'둔각'|null, base, entry: 재기에서 정한 각도|null, place?: {x, y, r} }
 * 목표: { angle: 60 } · { kind: '둔각', min?, max? }(min·max는 그보다 크게·작게, 경계 제외) · 둘 다
 */
(function (K) {
  const reduce = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;
  const kindOf = (a) => (a > 0 && a < 90 ? '예각' : a === 90 ? '직각' : a > 90 && a < 180 ? '둔각' : null);
  const KIND_COLOR = { 예각: 'mint', 직각: 'buttercup', 둔각: 'rose' };
  // 힌트 단계(hint(target, { level, attempts })): 1 = 개념·전략만(늘 열림 — 각도 값도, '직각보다 작은/큰 각'도 말하지 않는다: 예상 질문의 답이다),
  // 2 = 한 번 틀린 뒤 지금 어긋난 단계, 3 = 두 번 틀린 뒤 풀이 한 걸음
  const hintLevel = (opts) => { const a = (opts && opts.attempts) || 0; const l = (opts && opts.level) || 1; return Math.max(1, Math.min(l, a >= 2 ? 3 : a >= 1 ? 2 : 1)); };

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

  K.registerTool('protractor', {
    name: '종이 각도기',
    create(box, o, kit) {
      const place = !o.print && !!o.place;
      const measure = !o.print && (!!o.measure || place);
      // 만들기에는 띠 아래 한 줄에 ±단추를 둔다(휴대폰에서 띠 끝을 잡기 어려울 때). 맞추기는 그 줄에 돌리기 단추.
      const btnRow = !o.print && (!measure || place);
      const W = 400; const H = btnRow ? 330 : 290;
      // 활동지: 무대 바탕을 그리지 않는다 — 잘라 낸 viewBox 안에 바탕 사각형의 좌우 테두리가 세로줄로 남았다
      const st = kit.stage(box, { viewBox: [W, H], background: o.print ? false : undefined, label: place ? '종이 각도기. 각도기를 옮기고 돌려 각에 맞춘 뒤 각도를 재어요.' : '종이 각도기. 복숭아색 종이 띠를 돌려 각을 만들어요.' });
      const cx = 200; const cy = 246; const R = 158;
      const ARM = Math.round(178 * kit.clamp(o.armLength || 1, 0.4, 1.25));
      // 길이를 견주는 그림은 같은 틀(가장 긴 띠 기준)에 그려야 길이 차이가 보인다
      const VA = o.armLength != null ? Math.round(178 * 1.25) : ARM;
      const step = o.step || 5;
      const base = o.base === 'left' ? 'left' : 'right';
      const tol = o.tolerance ?? (step <= 1 ? 1 : 0);
      const showP = o.showProtractor !== false;
      // 맞추기: 각 전체를 기울인다. 고정 띠가 위로 들리도록 오른쪽 기준은 반시계, 왼쪽 기준은 시계 방향.
      const tilt = place ? (o.tilt ?? 30) : 0;
      const tiltRot = base === 'right' ? -tilt : tilt;
      const tiltT = tilt ? `rotate(${tiltRot} ${cx} ${cy}) ` : '';
      const showR = !o.print && !measure && o.showReadout !== false;
      const showKind = !o.print && !measure && (o.showKind ?? (o.showReadout !== false));
      // 활동지에서는 빈 읽기 칸을 잘라 내 각도기를 크게 그린다
      if (o.print) st.svg.setAttribute('viewBox', `${cx - VA - 10} ${cy - VA - 18} ${2 * VA + 20} ${VA + 40}`);
      // 활동지 wide: 눈금을 읽는 그림은 줄 하나를 다 쓰고 더 크게(세 칸에 나누면 숫자가 1mm 남짓이었다)
      // 활동지 wide: 두 칸씩 크게(세 칸이면 눈금 숫자가 1mm 남짓, 한 줄에 하나면 활동지가 3쪽이 된다)
      if (o.print && o.wide) { const grid = box.closest('.ws-figs'); if (grid) grid.style.gridTemplateColumns = '1fr 1fr'; st.svg.style.maxHeight = '62mm'; }
      const scaleName = base === 'right' ? '안쪽' : '바깥쪽';
      const NS = (tag, a, p) => kit.el(tag, a, p);

      // 띠 층: 오른쪽 기준이면 좌우를 뒤집는다. 그러면 두 경우 모두 "돌림 값 v = 각도 − 90"이고,
      // 방향키 ↑/→가 언제나 각을 벌린다.
      const arms = st.layer('arms');
      if (base === 'right' || tilt) arms.setAttribute('transform', `${tiltT}${base === 'right' ? `translate(${2 * cx} 0) scale(-1 1)` : ''}`);
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
      const armHit = NS('rect', { x: cx - 26, y: cy - ARM - 8, width: 52, height: ARM - 8, class: 'pk-hit' }, mv);
      // 휴대폰(무대 약 0.77~0.85배)에서 띠 잡는 곳 폭 52 가 화면 40~44px — 폭만 화면 46px 까지 넓힌다(길이는 그대로, 가운데 축 쪽으로 늘리지 않는다)
      if (!o.print && !measure) fitHits(st, [[armHit, { y0: cy - ARM - 8, y1: cy - 16 }]]);
      const moveBand = kit.piece(st, mv, { shape: { type: 'rect', x: cx - 11, y: cy - ARM, w: 22, h: ARM + 14, rx: 11 }, color: 'peach', depth: 2 });
      // 활동지(흑백 인쇄): 띠는 윤곽선만 그려 밑의 눈금 숫자를 덮지 않는다
      if (o.print) [fixedBand, moveBand].forEach((pc) => { pc.face.setAttribute('fill', '#FFFFFF'); pc.face.setAttribute('fill-opacity', 0.15); pc.face.setAttribute('stroke', '#3D352E'); pc.face.setAttribute('stroke-width', 1.4); (pc.under || []).forEach((u) => u.setAttribute('display', 'none')); });
      NS('line', { x1: cx, y1: cy - ARM + 10, x2: cx, y2: cy, stroke: '#6E3B21', 'stroke-width': 1.4, 'stroke-dasharray': '6 5', 'pointer-events': 'none' }, mv);
      // 끝의 손잡이 탭: 각도기 밖으로 나와 있어 잡기 쉽다
      kit.piece(st, mv, { shape: { type: 'circle', cx, cy: cy - ARM + 11, r: 15 }, color: 'peach', depth: 2 });
      kit.piece(st, mv, { shape: { type: 'circle', cx, cy: cy - ARM + 11, r: 6 }, color: 'cream', depth: 0 });

      // 반투명 종이 각도기(띠 위에 얹고, 손가락은 통과)
      // PL은 옮기기(맞추기), 그 안의 P는 돌리기 — 둘을 나누어 transform이 서로 덮지 않게 한다
      const PL = st.layer('protractor');
      const P = NS('g', null, PL);
      if (!place) PL.setAttribute('pointer-events', 'none');
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
        const t = NS('text', { x, y: y + (o.print ? 4 : 3.5), 'text-anchor': 'middle', 'font-size': o.print ? (ring === 'outer' ? 12.5 : 11) : (ring === 'outer' ? 10.5 : 9.5), class: 'pk-text', fill, opacity: dim ? 0.3 : 1, transform: `rotate(${90 - d} ${x} ${y})` }, P);
        if (strong === ring) t.setAttribute('font-size', ring === 'outer' ? 12 : 11);
        t.textContent = text;
      };
      // 활동지도 안쪽 숫자를 10°마다 쓴다(110°처럼 20의 배수가 아닌 각을 읽어야 한다) — 대신 글자를 조금 작게
      for (let d = 0; d <= 180; d += 10) { num(d, R - 25, 180 - d, outerC, 'outer'); num(d, R - 45, d, innerC, 'inner'); }
      if (strong) {
        const r = strong === 'outer' ? R - 25 : R - 45;
        NS('path', { d: `M${cx - r - 9} ${cy} A${r + 9} ${r + 9} 0 0 1 ${cx + r + 9} ${cy}`, fill: 'none', stroke: strong === 'outer' ? '#DE939B' : '#98C8D6', 'stroke-width': 3, 'stroke-dasharray': '2 5', 'stroke-linecap': 'round' }, P);
      }
      NS('line', { x1: cx - R + 4, y1: cy, x2: cx + R - 4, y2: cy, stroke: '#3D352E', 'stroke-width': 1.2, class: 'pk-text' }, P);
      NS('line', { x1: cx, y1: cy - 16, x2: cx, y2: cy + 10, stroke: '#3D352E', 'stroke-width': 1, class: 'pk-text' }, P);
      // 반대쪽 눈금을 읽었을 때 잠깐 반짝이는 표시: 고정 띠가 맞춰진 0과 그 0에서 시작하는 눈금 줄
      const ringR = base === 'right' ? R - 45 : R - 25;
      const flashG = NS('g', { display: 'none', 'pointer-events': 'none' }, P);
      NS('path', { d: `M${cx - ringR - 9} ${cy} A${ringR + 9} ${ringR + 9} 0 0 1 ${cx + ringR + 9} ${cy}`, fill: 'none', stroke: '#E8B33C', 'stroke-width': 5, 'stroke-dasharray': '3 6', 'stroke-linecap': 'round' }, flashG);
      { const [zx, zy] = pt(base === 'right' ? 0 : 180, ringR); NS('circle', { cx: zx, cy: zy, r: 11, fill: 'none', stroke: '#E8B33C', 'stroke-width': 3.5 }, flashG); }
      let flashTimer = 0;
      const flashZero = () => { if (o.print || hinting) return; flashG.setAttribute('display', 'inline'); clearTimeout(flashTimer); flashTimer = setTimeout(() => flashG.setAttribute('display', 'none'), 2600); };
      if (!showP) P.setAttribute('display', 'none');

      // 각 표시 부채꼴(각도기 위, 할핀 아래): 위 반원으로 자른 반원판을 띠와 같이 돌린다 — transform만으로 각의 크기가 보인다
      const wl = st.layer('wedge');
      wl.setAttribute('pointer-events', 'none');
      if (base === 'right' || tilt) wl.setAttribute('transform', `${tiltT}${base === 'right' ? `translate(${2 * cx} 0) scale(-1 1)` : ''}`);
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
      if (!o.print && !tilt) {
        const lx = base === 'right' ? cx + 128 : cx - 128;
        NS('text', { x: lx, y: cy + 30, 'text-anchor': 'middle', 'font-size': 12, class: 'pk-text', fill: '#275C46' }, st.layer('fixed-tag')).textContent = '▲ 고정 띠';
      }
      if (o.showHints && !o.print) {
        // 규칙(왼쪽이면 바깥쪽)이 아니라 원리(고정 띠가 맞춰진 0에서 시작하는 눈금)를 안내한다
        const hl = st.layer('hint');
        if (measure) NS('text', { x: 200, y: place ? 272 : 284, 'text-anchor': 'middle', 'font-size': 10.5, class: 'pk-text', fill: '#6E3B21' }, hl).textContent = `고정 띠의 0부터 세어요(${scaleName})`;
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
        onEnd() { settled('pointer'); },
      });
      function settled(via) { kit.recorder.log('protractor', Object.assign({ via }, state())); const a = Math.round(angle); kit.announce(showR ? `${a}도${kindOf(a) ? `, ${kindOf(a)}` : ''}` : '띠를 놓았어요'); }
      // 아래 줄 단추(크기 44 이상): 만들기는 ±각도, 맞추기는 각도기 돌리기
      // [x0, x1] = 휴대폰에서 누름 영역을 넓혀도 되는 가로 범위(이웃 단추와의 가운데까지). 세로는 각도기 밑변 아래(262)부터 무대 끝까지
      const hits = [];
      const rowBtn = (layer, x, w, label, aria, color, press, [x0, x1] = [x - w / 2 - 2, x + w / 2 + 2]) => {
        const g = NS('g', { tabindex: 0, role: 'button', 'aria-label': aria }, layer);
        kit.transform(g, { x, y: 304 });
        hits.push([NS('rect', { x: -w / 2 - 2, y: -25, width: w + 4, height: 50, class: 'pk-hit' }, g), { x0: x0 - x, x1: x1 - x, y0: 262 - 304, y1: H - 304 }]);
        kit.piece(st, g, { shape: { type: 'rect', x: -w / 2, y: -22, w, h: 44, rx: 12 }, color, depth: 2 });
        NS('text', { x: 0, y: 6, 'text-anchor': 'middle', 'font-size': 16, class: 'pk-text', fill: kit.palette[color].dark }, g).textContent = label;
        const go = (via) => { kit.spring(0.88, 1, { stiffness: 380, damping: 12, onUpdate: (v) => kit.transform(g, { s: v }) }); press(via); };
        g.addEventListener('click', () => go('pointer'));
        g.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go('keyboard'); } });
      };
      if (btnRow && !place) {
        const SB = st.layer('step-buttons');
        const ds = step === 1 ? [-10, -1, 1, 10] : [-step, step];
        const xs = ds.length === 4 ? [80, 152, 248, 320] : [140, 260];
        const lims = ds.length === 4 ? [[44, 116], [116, 200], [200, 284], [284, 356]] : [[80, 200], [200, 320]];
        ds.forEach((d, i) => rowBtn(SB, xs[i], 64, d > 0 ? `+${d}°` : `−${-d}°`, `각을 ${Math.abs(d)}도 ${d > 0 ? '벌리기' : '좁히기'}`, d > 0 ? 'mint' : 'lavender', (via) => {
          const v = kit.clamp(Math.round(rot.get() / step) * step + d, -90, 90);
          rot.set(v); kit.tick(); settled(via);
        }, lims[i]));
      }
      mv.setAttribute('aria-valuemin', '0'); mv.setAttribute('aria-valuemax', '180');
      // 재기(measure)·활동지에서는 띠가 움직이지 않는다 — 각도 값은 그대로 읽히되 조작할 수 없다고 알린다(터치 검사도 누르는 요소로 세지 않는다)
      if (o.print || measure) { mv.removeAttribute('tabindex'); mv.classList.remove('pk-rotatable'); mv.setAttribute('aria-disabled', 'true'); }
      let entry = null; let entryText = null;
      // 맞추기: 각도기의 처음 자리(어긋나 있다)와 지금 자리
      const pStart = Object.assign({ x: 40, y: -40, r: 0 }, o.placeStart || {});
      let rotP = 0;
      const r1 = (v) => Math.round(v * 10) / 10;
      const setPlace = (pl) => { kit.transform(PL, { x: pl.x, y: pl.y }); rotP = pl.r || 0; kit.transform(P, { r: rotP, cx, cy }); };
      const placeNow = () => { const t = PL.__pk || { x: 0, y: 0 }; return { x: r1(t.x), y: r1(t.y), r: rotP }; };
      const state = () => { const a = Math.round(angle); const s = { angle: a, kind: kindOf(a), base, entry }; if (place) s.place = placeNow(); return s; };
      let raise = () => {};
      if (place) {
        PL.setAttribute('aria-label', '종이 각도기. 끌거나 방향키로 옮겨 가운데 작은 금을 할핀에 맞춰요. Enter로 내려놓아요.');
        kit.drag(st, PL, {
          keyStep: 10, bounds: [-170, -200, 170, 60],
          snap: (x, y) => ({ x: Math.round(x), y: Math.round(y) }),
          onStart() { kit.tick(); },
          onDrop(x, y, via) { raise(); kit.recorder.log('protractor', Object.assign({ via, act: 'move' }, state())); const d = Math.hypot(x, y); kit.announce(d <= 6 ? '각도기 중심이 할핀에 맞았어요.' : '각도기를 옮겼어요.'); },
        });
        const PC = st.layer('place-buttons');
        const turn = (d) => (via) => {
          rotP = ((rotP + d + 540) % 360) - 180; kit.transform(P, { r: rotP, cx, cy }); kit.tick();
          kit.recorder.log('protractor', Object.assign({ via, act: 'turn' }, state()));
          kit.announce(`각도기를 ${d < 0 ? '왼쪽' : '오른쪽'}으로 15도 돌렸어요.`);
        };
        rowBtn(PC, 140, 100, '↺ 돌리기', '각도기를 왼쪽으로 15도 돌리기', 'lavender', turn(-15), [80, 200]);
        rowBtn(PC, 260, 100, '돌리기 ↻', '각도기를 오른쪽으로 15도 돌리기', 'lavender', turn(15), [200, 320]);
        raise = () => { [st.layer('measure'), PC].forEach((l) => l.parentNode.appendChild(l)); };
        setPlace(pStart);
      }
      // 재기: 위쪽 한 줄에 [−10][−1] ?° [+1][+10] — 각도기·띠와 겹치지 않는 자리
      const paintEntry = () => { if (entryText) entryText.textContent = entry == null ? '?°' : `${entry}°`; };
      if (measure) {
        const ML = st.layer('measure');
        kit.piece(st, ML, { shape: { type: 'rect', x: 150, y: 8, w: 100, h: 44, rx: 12 }, color: 'cream', depth: 1 });
        entryText = NS('text', { x: 200, y: 40, 'text-anchor': 'middle', 'font-size': 26, class: 'pk-text', fill: '#3D352E' }, ML);
        // 휴대폰에서 넓혀도 되는 가로 범위: 이웃 단추와의 가운데, 가운데 글 칸(150~250) 앞까지. 세로는 무대 위 끝부터 띠 누름 영역(60) 앞까지
        const LIM = { 42: [4, 70], 98: [70, 148], 302: [252, 330], 358: [330, 396] };
        const btn = (x, d) => {
          const g = NS('g', { tabindex: 0, role: 'button', 'aria-label': `각도 ${d > 0 ? d : -d}도 ${d > 0 ? '늘리기' : '줄이기'}` }, ML);
          kit.transform(g, { x, y: 30 });
          hits.push([NS('rect', { x: -26, y: -24, width: 52, height: 48, class: 'pk-hit' }, g), { x0: LIM[x][0] - x, x1: LIM[x][1] - x, y0: -30, y1: 30 }]);
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
      if (hits.length) fitHits(st, hits);
      const setState = (s) => { const a = kit.clamp(Math.round((s && s.angle) ?? 0), 0, 180); rot.set(a - 90); angle = a; kit.transform(wedge, { r: a - 90, cx, cy }); entry = (s && s.entry != null) ? s.entry : null; if (place && s && s.place) setPlace(s.place); paintEntry(); paint(); };
      setState({ angle: o.start || 0 });

      let hinting = false;
      function celebrate() {
        if (o.print || reduce || hinting) return;
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
        reset() { setState({ angle: place ? angle : (o.start || 0) }); if (place) setPlace(pStart); },
        solve(t) {
          t = t || {};
          if (place) setPlace({ x: 0, y: 0, r: tiltRot });
          if (measure) { entry = targetAngle(t); paintEntry(); return; }
          let a = targetAngle(t);
          if (t.kind && t.min != null && a <= t.min) a = t.kind === '예각' ? Math.min(89, t.min + 15) : t.min + 15;
          if (t.kind && t.max != null && a >= t.max) a = t.max - 15;
          setState({ angle: a });
        },
        // 새 힌트 계약: 1단계는 늘 열리고 각도 값·각의 종류를 말하지 않는다. 지금 상태가 맞아도 '맞아요'라고 알려 주지 않는다.
        hint(t, opts) {
          t = t || {}; const lv = hintLevel(opts);
          hinting = true;
          try {
            const r = this.check(t);
            const concept = place ? '각도기는 ① 중심을 꼭짓점에 ② 밑금을 한 변에 맞춘 뒤 ③ 그 변이 맞춰진 0부터 눈금을 읽어요. 지금 어느 단계인지 보세요.'
              : t.angle == null ? '각의 종류는 직각과 견주어 정해요. 두 띠가 벌어진 정도를 공책 모서리 같은 직각과 견주어 보세요.'
                : measure ? '고정 띠 끝의 0이 있는 줄을 먼저 손가락으로 짚어요. 그 줄을 따라 0, 10, 20 … 으로 세며 움직이는 띠까지 가요.'
                  : '고정 띠 끝의 0이 있는 줄을 먼저 손가락으로 짚어요. 그 줄의 숫자만 따라 0, 10, 20 … 으로 세며 띠를 돌려요.';
            if (lv === 1 || r.correct) return { hint: concept, level: 1 };
            if (lv === 2) return { hint: r.feedback || concept, level: 2 };
            return { hint: r.hint || r.feedback || '', level: 3 };
          } finally { hinting = false; }
        },
        check(t) {
          t = t || {};
          const a = Math.round(angle); const k = kindOf(a);
          const yes = (feedback) => { celebrate(); return { correct: true, feedback }; };
          const no = (feedback, hint) => ({ correct: false, feedback, hint });
          const zeroSide = `고정 띠가 ${base === 'right' ? '오른쪽' : '왼쪽'} 0에 맞춰져 있어요. 그 0에서 시작하는 눈금(이 각도기에서는 ${scaleName} 눈금)을`;
          if (place) {
            // 재기 전에 각도기부터: 중심 → 밑금 순서(교과서 재는 순서)
            const pl = placeNow(); const dr = ((rotP - tiltRot + 540) % 360) - 180;
            if (Math.hypot(pl.x, pl.y) > 6) return no('각도기의 중심이 꼭짓점(할핀)에 맞지 않았어요.', '각도기를 끌어(또는 방향키로) 밑금 가운데의 작은 금이 할핀 바로 위에 오게 놓아요.');
            if (Math.abs(Math.abs(dr) - 180) <= 3) return no('각도기가 거꾸로 놓였어요.', '돌리기 단추로 각도기를 돌려 둥근 쪽이 각이 벌어진 쪽을 향하게 해요.');
            if (Math.abs(dr) > 3) return no('중심은 맞았어요. 이제 각도기의 밑금을 고정 띠에 맞춰요.', `돌리기 단추로 각도기를 돌려 밑금(0과 0을 잇는 곧은 선)이 초록 고정 띠와 겹치게 해요. 지금은 ${Math.abs(dr)}°만큼 어긋나 있어요.`);
          }
          if (measure && t.angle != null) {
            if (entry == null) return no(place ? '각도기를 잘 맞췄어요. 이제 눈금을 읽어 각도를 정해 주세요.' : '눈금을 읽어 각도를 정해 주세요.', '위의 +10, +1 단추로 읽은 각도를 맞춰요.');
            if (entry === t.angle) return yes(`맞아요! ${t.angle}°예요.${kindOf(t.angle) ? ` ${kindOf(t.angle)}이에요.` : ''}`);
            if (t.angle !== 90 && entry === 180 - t.angle) { flashZero(); return no(`${entry}°는 다른 줄의 숫자예요. 고정 띠 끝의 0이 있는 줄(${scaleName})을 따라 0, 10, 20 … 으로 세어요.`, '반짝이는 0에서 시작해 세어요. 먼저 예각인지 둔각인지 어림해 보면 잘못 읽은 것을 알 수 있어요.'); }
            return no(`${entry}°가 아니에요. 눈금을 다시 세어 봐요.`, `${zeroSide} 따라 10씩 세고, 나머지는 작은 눈금으로 1씩 세어요.`);
          }
          if (t.angle != null) {
            const d = a - t.angle;
            if (Math.abs(d) <= tol && (!t.kind || k === t.kind)) return yes(`맞아요! ${t.angle}°예요.${kindOf(t.angle) ? ` ${kindOf(t.angle)}이에요.` : ''}`);
            if (a === 0) return no('아직 띠를 벌리지 않았어요.', '복숭아색 띠를 잡고 할핀 둘레로 돌려 각을 벌려요.');
            if (t.angle !== 90 && Math.abs(a - (180 - t.angle)) <= tol) {
              flashZero();
              return no(`지금 각은 다른 줄의 ${t.angle}에 맞춘 거예요. 고정 띠 끝의 0이 있는 줄(${scaleName})을 따라 세어요.`, `반짝이는 0에서 시작해 0, 10, 20 … 으로 ${t.angle}까지 세어요. ${t.angle < 90 ? '예각이니 직각보다 좁아야 해요.' : '둔각이니 직각보다 넓어야 해요.'}`);
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
