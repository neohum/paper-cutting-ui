/* 태양·지구·달 — 종이 태양계 모형. 자전(낮과 밤), 공전(계절과 별자리), 달의 위상(날짜별 모양), 그림자 길이·태양 고도, 행성 차례를 모드로 다룬다.
 *
 * 모드(o.mode)   무엇을 하나                                                    상태                                   target
 * -------------  -------------------------------------------------------------  -------------------------------------  ---------------------------------------------------
 * 'spin'(기본)   북극 위에서 본 지구를 돌려 우리나라의 때를 맞춘다(태양은 왼쪽)    { hour: 0~23 }                          { hour: 15 } | { time: '낮'|'밤' } | { phase: '아침'|'낮'|'저녁'|'밤' }
 * 'orbit'        지구를 태양 둘레 네 자리(봄·여름·가을·겨울)로 옮긴다             { season: '봄'|'여름'|'가을'|'겨울' }   { season: '여름' } | { night: '오리온자리' }(그 별자리가 한밤에 보이는 자리)
 * 'moon'         음력 날짜 카드마다 달 모양을 눌러 고른다                          { moon: { '3': '초승달'|null, … } }      { moon: { '3': '초승달', … } } | { moon: 'auto' }(날짜로 계산)
 * 'shadow'       태양을 끌어 올리고 내리며 막대 그림자 길이를 본다                  { alt: 0~90 }  (hours면 { hour })        { alt: 40 } | { shortest: true } | { longest: true } | { shadow: 10 }(cm)
 *                                                                                                                          hours: { hour: 12 } | { noon: true } | { shortest } | { longest }
 * 'planets'      행성 카드를 눌러 차례 칸에 하나씩 놓는다                          { order: ['수성', …] }                   { order: ['수성','금성',…] }(없으면 태양에서 가까운 차례) — 크기 차례 등 아무 차례나 된다
 * (모든 모드)     ask 보기 고르기를 함께 쓸 수 있다                                 + pick: 번호|null                        + pick: 정답 번호 (ask만 묻는 문항은 { pick })
 *
 * 옵션
 *   spin:    start(처음 시각), showSides(낮·밤 글자, 기본 참), showArrow(자전 방향 화살표, 기본 참), step(1 = 한 시간씩)
 *   orbit:   constellations { 봄:'사자자리', 여름:'백조자리', 가을:'페가수스자리', 겨울:'오리온자리' }, seasonNames(자리 이름, 기본 참), showTilt(자전축, 기본 참)
 *   moon:    days([3,7,15,22,27] 음력 날짜), shapes(['초승달','상현달','보름달','하현달','그믐달'] 고를 모양), dayLabel('음력 {d}일')
 *   shadow:  stick(막대 길이 cm, 기본 10), altStep(기본 10°), minAlt/maxAlt(태양을 옮길 수 있는 범위, 기본 10~80),
 *            hours { rise: 6, set: 18, top: 60 }(시각으로 옮기기 — 낮 12시 남중 고도 top), showGrid(그림자 눈금, 기본 참)
 *   planets: planets(['수성','금성','지구','화성','목성','토성','천왕성','해왕성'] 부분집합), tray(카드 처음 차례), slotLabels(칸 머리 글자 — 기본 '1','2',…)
 *   공통:    readout(읽기 글자 — 시각·계절·고도·그림자 길이), revealAfterCheck(읽기 글자는 맞힌 확인 뒤에만), ask { q, choices[], why?[] },
 *            readOnly(조작 잠금 — 그림을 보고 고르는 문항), print(활동지: 읽기 글자·정답 숨김)
 * 키보드: 지구·태양 — 방향키로 한 칸(한 시간·한 계절·10°)씩, 카드·칸 — Tab 뒤 Enter/Space. 모두 44px 이상 판정 영역.
 * 예) 낮밤: { tool:'earth', options:{ mode:'spin', start:{ hour: 6 } }, target:{ time:'밤' } }
 *     위상: options:{ mode:'moon', days:[3,15,27] }, target:{ moon:'auto' }
 *     그림자: options:{ mode:'shadow', readout:true }, target:{ shortest:true }, reveal:'after-check'
 */
(function (K) {
  'use strict';
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const has = (w) => { const c = String(w).charCodeAt(String(w).length - 1); return c >= 0xac00 && c <= 0xd7a3 && (c - 0xac00) % 28 !== 0; };
  const josa = (w, a, b) => `${w}${has(w) ? a : b}`;
  const levelOf = (opts) => {
    const want = opts && Number.isInteger(opts.level) ? opts.level : 1;
    const a = opts && Number.isFinite(opts.attempts) ? opts.attempts : null;
    return Math.max(1, Math.min(3, want, a == null ? 3 : a >= 2 ? 3 : a >= 1 ? 2 : 1));
  };
  const norm = (v) => ((v % 360) + 360) % 360;
  const rad = (d) => (d * Math.PI) / 180;

  // ---- 자전: 시각 ↔ 회전값(12시 방향 0°, 시계 방향 +). 태양 쪽(9시 방향, 270°)이 정오 ----
  const phaseOf = (h) => (h >= 4.5 && h < 7.5 ? '아침' : h >= 7.5 && h < 16.5 ? '낮' : h >= 16.5 && h < 19.5 ? '저녁' : '밤');
  const timeOf = (h) => { const p = phaseOf(h); return p === '낮' ? '낮' : p === '밤' ? '밤' : '경계'; };
  const clockText = (h) => (h === 0 ? '밤 12시' : h < 12 ? `오전 ${h}시` : h === 12 ? '낮 12시' : `오후 ${h - 12}시`);
  const valueOfHour = (h) => 270 - (h - 12) * 15;
  const hourOf = (v) => ((Math.round((12 + (270 - norm(v)) / 15) % 24) % 24) + 24) % 24;
  // ---- 공전: 계절 자리(수학 각도, 위가 90°). 지구는 위에서 보면 시계 반대 방향으로 돈다 ----
  const SEASONS = ['봄', '여름', '가을', '겨울'];
  const SEASON_ANGLE = { 봄: 90, 여름: 180, 가을: 270, 겨울: 0 };
  const STARS = { 봄: '사자자리', 여름: '백조자리', 가을: '페가수스자리', 겨울: '오리온자리' };
  // 별자리 점(대충 닮은 모양 — 이름은 차시가 바꿀 수 있다)
  const STAR_SHAPES = [
    [[-24, -6], [-12, -14], [0, -10], [8, 0], [20, 4], [26, 14]],
    [[0, -18], [0, -4], [0, 12], [-16, -4], [16, -4]],
    [[-16, -14], [14, -14], [14, 12], [-16, 12], [-28, 20]],
    [[-12, -18], [12, -18], [-4, 0], [4, 0], [-14, 18], [14, 18]],
  ];
  // ---- 달: 음력 날짜 → 모양 ----
  const SHAPES = ['초승달', '상현달', '보름달', '하현달', '그믐달'];
  const shapeOfDay = (d) => (d <= 5 ? '초승달' : d <= 10 ? '상현달' : d <= 19 ? '보름달' : d <= 24 ? '하현달' : '그믐달');
  const SHAPE_LIT = { 초승달: [0.18, 1], 상현달: [0.5, 1], 보름달: [1, 1], 하현달: [0.5, -1], 그믐달: [0.18, -1], 삭: [0, 1] };
  // 밝은 부분 모양(오른쪽이 밝은 꼴): f = 밝은 비율. 왼쪽이 밝은 달은 그리는 쪽에서 좌우를 뒤집는다(scale -1 1)
  function litPath(R, f) {
    if (f >= 0.999) return `M0 ${-R}A${R} ${R} 0 1 1 0 ${R}A${R} ${R} 0 1 1 0 ${-R}Z`;
    if (f <= 0.001) return '';
    const rx = Math.abs(1 - 2 * f) * R;
    return `M0 ${-R}A${R} ${R} 0 0 1 0 ${R}A${rx.toFixed(2)} ${R} 0 0 ${f < 0.5 ? 0 : 1} 0 ${-R}Z`;
  }
  // ---- 행성 ----
  const PLANETS = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성'];
  const PLANET_LOOK = { 수성: [7, '#B8A99A'], 금성: [11, '#EDC96C'], 지구: [11.5, '#5E9BD6'], 화성: [9, '#E69D7B'], 목성: [24, '#D9A877'], 토성: [20, '#F2D58A'], 천왕성: [15, '#98C8D6'], 해왕성: [14.5, '#6C8FD6'] };

  K.registerTool('earth', {
    name: '태양·지구·달',
    create(box, o, kit) {
      const P = kit.palette; const print = !!o.print; const ink = print ? '#000' : '#3D352E';
      const mode = ['spin', 'orbit', 'moon', 'shadow', 'planets'].includes(o.mode) ? o.mode : 'spin';
      const readOnly = !!o.readOnly;
      let revealed = false; let target = null; let pick = null;
      const W = 560;
      const H = { spin: 330, orbit: 344, moon: 250, shadow: 320, planets: 300 }[mode];
      const label = { spin: '북극 위에서 내려다본 지구. 돌려서 우리나라의 때를 맞춰요.', orbit: '태양 둘레를 도는 지구. 지구를 계절 자리로 옮겨요.', moon: '음력 날짜별 달 모양 카드. 눌러서 모양을 골라요.', shadow: '태양 고도와 막대 그림자. 태양을 옮겨 그림자를 봐요.', planets: '태양계 행성 카드. 차례대로 칸에 놓아요.' }[mode];
      const st = kit.stage(box, { viewBox: [W, H], label, background: mode === 'shadow' ? '#EDF7FA' : print ? '#FFFFFF' : '#2E2A45' });
      const space = mode === 'spin' || mode === 'orbit' || mode === 'moon' || mode === 'planets';
      const textOn = space && !print ? '#FFF9E8' : ink;
      // 밤하늘 작은 별(흑백 활동지에는 없음)
      if (space && !print) { const sky = st.layer('sky'); for (let i = 0; i < 40; i++) { const x = (i * 137.5) % W; const y = (i * 71.3 + 13) % H; kit.el('circle', { cx: x.toFixed(1), cy: y.toFixed(1), r: i % 5 ? 1 : 1.6, fill: '#FFF9E8', opacity: 0.35 + (i % 3) * 0.15 }, sky); } }
      // 읽기 글자 자리: 모드마다 비어 있는 모서리(휴대폰에서 글자가 1.5배까지 커져도 다른 글자와 겹치지 않게)
      const RP = { spin: [16, 28, 'start'], orbit: [16, H - 14, 'start'], shadow: [W - 16, 28, 'end'], moon: [W - 16, H - 12, 'end'], planets: [W - 16, H - 12, 'end'] }[mode];
      const readT = (o.readout && !print) ? kit.el('text', { x: RP[0], y: RP[1], 'text-anchor': RP[2], 'font-size': 17, class: 'pk-text', fill: textOn }, st.layer('readout')) : null;
      const liveRead = () => readT && !(o.revealAfterCheck && !revealed);
      const say = (t) => kit.announce(t);
      const log = () => kit.recorder.log('earth', state());
      const changed = () => { revealed = false; paintRead(); kit.tick(); log(); };

      // ================= 자전 =================
      let hour = 12; let spinCtl = null; let spinG = null; let placeMe = () => {};
      if (mode === 'spin') {
        const E = { x: 330, y: 160 }; const R = 104;
        const L = st.layer('spin');
        // 태양(왼쪽)과 빛
        const sun = kit.el('g', null, L);
        kit.piece(st, sun, { shape: { type: 'circle', r: 44 }, color: 'buttercup', depth: 2 });
        kit.piece(st, sun, { shape: { type: 'circle', r: 30 }, color: 'peach', depth: 1 });
        kit.transform(sun, { x: 20, y: E.y });
        kit.el('text', { x: 46, y: E.y + 72, 'text-anchor': 'middle', 'font-size': 16, class: 'pk-text', fill: textOn }, L).textContent = '태양';
        [-60, -20, 20, 60].forEach((dy) => kit.el('line', { x1: 86, y1: E.y + dy, x2: E.x - R - 14, y2: E.y + dy, stroke: print ? '#000' : '#FEE396', 'stroke-width': 2.5, 'stroke-dasharray': '8 8', opacity: 0.8 }, L));
        // 지구 원판(돌아간다) — 대륙 조각과 우리나라 표시
        spinG = kit.el('g', { class: 'ea-earth' }, L);
        kit.el('circle', { cx: 0, cy: 0, r: R + 6, class: 'pk-hit' }, spinG);
        kit.piece(st, spinG, { shape: { type: 'circle', r: R }, color: 'sky', depth: 2 });
        kit.piece(st, spinG, { shape: { type: 'path', d: 'M-30 -70 Q0 -96 40 -74 Q60 -40 30 -20 Q0 -30 -20 -10 Q-50 -30 -30 -70 Z' }, color: 'mint', depth: 1 });
        kit.piece(st, spinG, { shape: { type: 'path', d: 'M-80 10 Q-60 -10 -40 20 Q-30 60 -60 70 Q-90 50 -80 10 Z' }, color: 'mint', depth: 1 });
        kit.piece(st, spinG, { shape: { type: 'path', d: 'M30 30 Q70 20 76 50 Q60 80 30 70 Z' }, color: 'mint', depth: 1 });
        kit.el('circle', { r: 5, fill: '#3D352E' }, spinG);
        // 우리나라 사람(12시 방향, 원판과 함께 돈다)
        const me = kit.el('g', null, spinG);
        kit.piece(st, me, { shape: { type: 'circle', r: 9, cy: -R + 2 }, color: 'rose', depth: 1, fill: '#E8655A' });
        kit.el('rect', { x: -2, y: -R - 22, width: 4, height: 14, fill: '#3D352E' }, me);
        kit.el('circle', { cx: 0, cy: -R - 26, r: 5, fill: '#3D352E' }, me);

        const outer = kit.el('g', null, L); outer.appendChild(spinG); kit.transform(outer, { x: E.x, y: E.y });
        // '우리나라' 글자는 원판 밖에 두고 사람 곁을 따라가며 똑바로 선다(돌아간 글자는 읽기 어렵다)
        const meT = kit.el('text', { 'text-anchor': 'middle', 'font-size': 14, class: 'pk-text', fill: print ? '#000' : '#204C5A' }, L); meT.textContent = '우리나라';
        placeMe = (v) => { const a = rad(v); meT.setAttribute('x', (E.x + Math.sin(a) * (R - 34)).toFixed(1)); meT.setAttribute('y', (E.y - Math.cos(a) * (R - 34) + 5).toFixed(1)); };
        // 밤 반쪽(돌지 않는다): 태양 반대쪽 오른쪽 반원을 어둡게
        const night = kit.el('path', { d: `M0 ${-R - 2}A${R + 2} ${R + 2} 0 0 1 0 ${R + 2}Z`, fill: print ? 'none' : 'rgba(20,16,40,0.55)', 'pointer-events': 'none' }, L);
        kit.transform(night, { x: E.x, y: E.y });
        if (print) { for (let y = -R + 8; y < R; y += 12) { const w = Math.sqrt(R * R - y * y); kit.el('line', { x1: E.x + 4, y1: E.y + y, x2: E.x + w - 4, y2: E.y + y, stroke: '#000', 'stroke-width': 1 }, L); } }
        if (o.showSides !== false) {
          kit.el('text', { x: E.x - 10, y: E.y + R + 34, 'text-anchor': 'end', 'font-size': 16, class: 'pk-text', fill: textOn }, L).textContent = '빛을 받는 쪽';
          kit.el('text', { x: E.x + 10, y: E.y + R + 34, 'text-anchor': 'start', 'font-size': 16, class: 'pk-text', fill: textOn }, L).textContent = '빛을 못 받는 쪽';
        }
        if (o.showArrow !== false) {
          kit.el('path', { d: `M${E.x + R + 22} ${E.y + 40} A ${R + 22} ${R + 22} 0 0 0 ${E.x + R + 22} ${E.y - 40}`, fill: 'none', stroke: textOn, 'stroke-width': 3 }, L);
          kit.el('path', { d: `M${E.x + R + 22} ${E.y - 52} l-8 14 h16 Z`, fill: textOn }, L);
          kit.el('text', { x: E.x + R + 40, y: E.y + 6, 'font-size': 13, class: 'pk-text', fill: textOn }, L).textContent = '자전';
        }
        kit.el('text', { x: E.x, y: 24, 'text-anchor': 'middle', 'font-size': 14, class: 'pk-text', fill: textOn }, L).textContent = '북극 위에서 내려다본 지구';
        if (!print && !readOnly) {
          spinCtl = kit.rotate(st, spinG, {
            center: [0, 0], step: 15 * (o.step || 1), value: valueOfHour(hour), label: '지구. 돌려서 우리나라의 때를 바꿔요.',
            valueText: (v) => `우리나라 ${clockText(hourOf(v))}`,
            onChange(v) { placeMe(v); },
            onEnd(v) { hour = hourOf(v); placeMe(valueOfHour(hour)); changed(); say(liveRead() ? `우리나라는 ${clockText(hour)}예요.` : '지구를 돌렸어요.'); },
          });
        } else kit.transform(spinG, { r: valueOfHour(hour), cx: 0, cy: 0 });
      }
      const setHour = (h) => { hour = ((Math.round(h) % 24) + 24) % 24; if (spinCtl) spinCtl.set(valueOfHour(hour)); else if (spinG) kit.transform(spinG, { r: valueOfHour(hour), cx: 0, cy: 0 }); placeMe(valueOfHour(hour)); };

      // ================= 공전 =================
      let season = '봄'; let earthO = null; const stars = Object.assign({}, STARS, o.constellations || {});
      const O = { x: 280, y: 170, rx: 178, ry: 80 };
      const posOf = (s) => ({ x: O.x + O.rx * Math.cos(rad(SEASON_ANGLE[s])), y: O.y - O.ry * Math.sin(rad(SEASON_ANGLE[s])) });
      if (mode === 'orbit') {
        const L = st.layer('orbit');
        kit.el('ellipse', { cx: O.x, cy: O.y, rx: O.rx, ry: O.ry, fill: 'none', stroke: print ? '#000' : 'rgba(255,249,232,0.55)', 'stroke-width': 2, 'stroke-dasharray': '6 6' }, L);
        // 공전 방향 화살표(시계 반대 방향)
        kit.el('path', { d: `M${O.x + 60} ${O.y + O.ry - 2} l14 -7 l-2 14 Z`, fill: textOn, transform: `rotate(-12 ${O.x + 60} ${O.y + O.ry})` }, L);
        const sun = kit.el('g', null, L);
        kit.piece(st, sun, { shape: { type: 'circle', r: 30 }, color: 'buttercup', depth: 2 }); kit.piece(st, sun, { shape: { type: 'circle', r: 19 }, color: 'peach', depth: 1 });
        kit.transform(sun, { x: O.x, y: O.y });
        kit.el('text', { x: O.x, y: O.y + 50, 'text-anchor': 'middle', 'font-size': 14, class: 'pk-text', fill: textOn }, L).textContent = '태양';
        // 별자리(계절 자리 바깥쪽)
        SEASONS.forEach((s, i) => {
          const a = rad(SEASON_ANGLE[s]); const sx = O.x + (O.rx + 74) * Math.cos(a); const sy = O.y - (O.ry + 58) * Math.sin(a);
          const vert = SEASON_ANGLE[s] === 90 || SEASON_ANGLE[s] === 270;
          const g = kit.el('g', null, L); const pts = STAR_SHAPES[i];
          kit.el('polyline', { points: pts.map((p) => p.join(',')).join(' '), fill: 'none', stroke: print ? '#000' : 'rgba(255,249,232,0.6)', 'stroke-width': 1.5 }, g);
          pts.forEach(([x, y]) => kit.el('circle', { cx: x, cy: y, r: 3, fill: print ? '#000' : '#FEE396' }, g));
          const leftSide = SEASON_ANGLE[s] === 180;
          kit.el('text', vert ? { x: 36, y: 5, 'text-anchor': 'start', 'font-size': 13, class: 'pk-text', fill: textOn } : { x: leftSide ? -28 : 28, y: -28, 'text-anchor': leftSide ? 'start' : 'end', 'font-size': 13, class: 'pk-text', fill: textOn }, g).textContent = stars[s];
          kit.transform(g, { x: Math.max(44, Math.min(W - 44, sx)), y: Math.max(22, Math.min(H - 22, sy)) });
        });
        // 계절 자리 표시(누르면 지구가 그리로)
        SEASONS.forEach((s) => {
          const p = posOf(s);
          const g = kit.el('g', { class: 'ea-spot', 'data-season': s }, L);
          kit.el('circle', { cx: p.x, cy: p.y, r: 30, class: 'pk-hit' }, g);
          kit.el('circle', { cx: p.x, cy: p.y, r: 24, fill: 'none', stroke: print ? '#000' : 'rgba(255,249,232,0.5)', 'stroke-width': 1.5, 'stroke-dasharray': '3 4' }, g);
          const vert = SEASON_ANGLE[s] === 90 || SEASON_ANGLE[s] === 270;
          if (o.seasonNames !== false) kit.el('text', vert ? { x: p.x - 32, y: p.y + 5, 'text-anchor': 'end', 'font-size': 15, class: 'pk-text', fill: textOn } : { x: p.x, y: p.y + 44, 'text-anchor': 'middle', 'font-size': 15, class: 'pk-text', fill: textOn }, g).textContent = s;
          if (!print && !readOnly) g.addEventListener('click', () => moveSeason(s));
        });
        earthO = kit.el('g', { class: 'ea-earth', tabindex: print || readOnly ? null : 0, role: print ? null : 'slider', 'aria-label': '지구. 방향키로 다음 계절 자리로 옮겨요.' }, st.layer('earthO'));
        kit.el('circle', { r: 28, class: 'pk-hit' }, earthO);
        kit.piece(st, earthO, { shape: { type: 'circle', r: 17 }, color: 'sky', depth: 1 });
        kit.piece(st, earthO, { shape: { type: 'path', d: 'M-8 -12 Q4 -16 8 -6 Q2 0 -6 -2 Z' }, color: 'mint', depth: 0 });
        // 밤 반쪽(태양 반대쪽)은 지구 자리에 따라 돌린다
        earthO.__night = kit.el('path', { d: 'M0 -18 A18 18 0 0 1 0 18 Z', fill: print ? 'none' : 'rgba(20,16,40,0.55)', 'pointer-events': 'none' }, earthO);
        if (o.showTilt !== false) kit.el('line', { x1: -10, y1: 24, x2: 10, y2: -24, stroke: print ? '#000' : '#FFF9E8', 'stroke-width': 2.5, 'stroke-linecap': 'round' }, earthO);
        if (!print && !readOnly) {
          earthO.addEventListener('keydown', (e) => {
            const d = { ArrowRight: 1, ArrowUp: 1, Enter: 1, ' ': 1, ArrowLeft: -1, ArrowDown: -1 }[e.key];
            if (!d) return; e.preventDefault();
            moveSeason(SEASONS[(SEASONS.indexOf(season) + d + 4) % 4]);
          });
          earthO.addEventListener('click', () => moveSeason(SEASONS[(SEASONS.indexOf(season) + 1) % 4]));
        }
      }
      function placeEarth(animate) {
        if (!earthO) return;
        const p = posOf(season);
        if (animate) kit.animateTo(earthO, p); else kit.transform(earthO, p);
        // 밤 반쪽: 태양 반대쪽을 향하게(작은 경로를 따로 돌린다)
        const ang = (Math.atan2(p.y - O.y, p.x - O.x) * 180) / Math.PI; // 태양 → 지구 방향
        earthO.__night.setAttribute('transform', `rotate(${ang.toFixed(1)})`);
        earthO.setAttribute('aria-valuetext', liveRead() ? `${season} 자리` : '지구 자리');
      }
      function moveSeason(s) { season = s; placeEarth(true); changed(); say(liveRead() ? `지구가 ${season} 자리에 왔어요.` : '지구를 옮겼어요.'); }
      const nightStar = (s) => stars[s];

      // ================= 달 =================
      const days = (Array.isArray(o.days) && o.days.length ? o.days : [3, 7, 15, 22, 27]).slice(0, 6).map(Number);
      const shapeList = (Array.isArray(o.shapes) && o.shapes.length ? o.shapes : SHAPES).filter((s) => SHAPE_LIT[s]);
      let moon = {}; const moonSlots = {};
      if (mode === 'moon') {
        const L = st.layer('moon');
        const n = days.length; const cw = Math.min(104, (W - 24) / n - 8); const x0 = (W - n * (cw + 8) + 8) / 2;
        kit.el('text', { x: W / 2, y: 30, 'text-anchor': 'middle', 'font-size': 15, class: 'pk-text', fill: textOn }, L).textContent = '같은 곳에서 저녁에 본 달 — 날짜마다 모양을 골라요';
        days.forEach((d, i) => {
          const x = x0 + i * (cw + 8);
          const g = kit.el('g', { class: 'ea-moon', tabindex: print || readOnly ? null : 0, role: print ? null : 'button' }, L);
          kit.el('rect', { x, y: 44, width: cw, height: 176, class: 'pk-hit' }, g);
          kit.piece(st, g, { shape: { type: 'rect', x, y: 48, w: cw, h: 168, rx: 14 }, color: 'lavender', depth: 2, fill: print ? '#FFFFFF' : '#473B6B' });
          const dl = (o.dayLabel || '음력 {d}일').replace('{d}', d);
          kit.el('text', { x: x + cw / 2, y: 76, 'text-anchor': 'middle', 'font-size': 15, class: 'pk-text', fill: textOn }, g).textContent = dl;
          const mg = kit.el('g', null, g); kit.transform(mg, { x: x + cw / 2, y: 136 });
          kit.el('circle', { r: 34, fill: print ? '#FFFFFF' : '#2E2A45', stroke: print ? '#000' : 'rgba(255,249,232,0.35)', 'stroke-width': 1.5, 'stroke-dasharray': '4 4' }, mg);
          const lit = kit.el('path', { d: '', fill: print ? '#FFFFFF' : '#FEE396', stroke: print ? '#000' : 'none', 'stroke-width': 1.5 }, mg);
          const nameT = kit.el('text', { x: x + cw / 2, y: 200, 'text-anchor': 'middle', 'font-size': 14, class: 'pk-text', fill: textOn }, g);
          moonSlots[d] = { g, lit, nameT, disk: mg };
          if (!print && !readOnly) {
            const cyc = (k) => { const cur = moon[d] == null ? -1 : shapeList.indexOf(moon[d]); const nx = cur + k; moon[d] = nx < 0 ? (cur === -1 ? shapeList[shapeList.length - 1] : null) : nx >= shapeList.length ? null : shapeList[nx]; paintMoon(); changed(); say(`${dl}: ${moon[d] || '빈칸'}`); };
            g.addEventListener('click', () => cyc(1));
            g.addEventListener('keydown', (e) => { const k = { Enter: 1, ' ': 1, ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key]; if (k) { e.preventDefault(); cyc(k); } });
          }
        });
      }
      function paintMoon() {
        Object.entries(moonSlots).forEach(([d, s]) => {
          const v = print && !o.printAnswers ? null : moon[d];
          const shown = !print || o.printShapes || o.printAnswers ? moon[d] : null; const sp = shown ? SHAPE_LIT[shown] : null;
          s.lit.setAttribute('d', sp ? litPath(32, sp[0]) : '');
          if (sp && sp[1] < 0) s.lit.setAttribute('transform', 'scale(-1 1)'); else s.lit.removeAttribute('transform');
          // 읽고 고르는 문항(readOnly)에서는 모양 이름을 숨긴다 — 이름이 곧 답이 되므로(moonNames로 켬)
          s.nameT.textContent = readOnly && !o.moonNames ? '' : v || (print ? '' : '눌러 고르기');
          s.g.setAttribute('aria-label', `음력 ${d}일 달. 지금 ${v || '고르지 않음'}. 누르면 다음 모양으로 바뀌어요.`);
        });
      }

      // ================= 그림자 =================
      const stick = Number.isFinite(o.stick) ? o.stick : 10;
      const hrs = o.hours && typeof o.hours === 'object' ? { rise: o.hours.rise ?? 6, set: o.hours.set ?? 18, top: o.hours.top ?? 60 } : null;
      const altStep = hrs ? 0 : (o.altStep || 10);
      const minAlt = hrs ? 0 : Number.isFinite(o.minAlt) ? o.minAlt : 10; const maxAlt = hrs ? hrs.top : Number.isFinite(o.maxAlt) ? o.maxAlt : 80;
      const altOfHour = (h) => (hrs ? Math.max(0, Math.round(hrs.top * Math.sin((Math.PI * (h - hrs.rise)) / (hrs.set - hrs.rise)))) : 0);
      const shadowOf = (a) => (a <= 0 ? Infinity : Math.round((stick / Math.tan(rad(a))) * 10) / 10);
      let alt = 30; let shHour = 9; let sunG = null; let shadowP = null; let rayL = null;
      const B = { x: hrs ? 280 : 200, y: 268 }; const SR = 190; // 막대 높이 90 = stick cm
      const stickH = 90; const pxPerCm = stickH / stick;
      if (mode === 'shadow') {
        const L = st.layer('shadow');
        kit.piece(st, L, { shape: { type: 'rect', x: 0, y: B.y, w: W, h: H - B.y, rx: 0 }, color: 'mint', depth: 1, fill: print ? '#FFFFFF' : '#CFEBDD' });
        // 고도 눈금(부채꼴)
        for (let a = 0; a <= 90; a += 10) {
          const x1 = B.x - Math.cos(rad(a)) * (SR - 14); const y1 = B.y - Math.sin(rad(a)) * (SR - 14);
          const x2 = B.x - Math.cos(rad(a)) * SR; const y2 = B.y - Math.sin(rad(a)) * SR;
          kit.el('line', { x1, y1, x2, y2, stroke: print ? '#000' : 'rgba(32,76,90,0.4)', 'stroke-width': a % 30 ? 1 : 2 }, L);
        }
        kit.el('path', { d: `M${B.x - SR} ${B.y} A${SR} ${SR} 0 0 1 ${B.x} ${B.y - SR}`, fill: 'none', stroke: print ? '#000' : 'rgba(32,76,90,0.35)', 'stroke-width': 1.5, 'stroke-dasharray': '4 6' }, L);
        if (o.showGrid !== false) for (let c = 0; c <= 30; c += 5) { const x = B.x + c * pxPerCm; if (x > W - 10) break; kit.el('line', { x1: x, y1: B.y + 4, x2: x, y2: B.y + 12, stroke: ink, 'stroke-width': 1.5 }, L); kit.el('text', { x, y: B.y + 28, 'text-anchor': 'middle', 'font-size': 12, class: 'pk-text', fill: ink }, L).textContent = `${c}`; }
        if (o.showGrid !== false) kit.el('text', { x: W - 14, y: B.y + 46, 'text-anchor': 'end', 'font-size': 12, class: 'pk-text', fill: ink }, L).textContent = '그림자 길이(cm)';
        rayL = kit.el('line', { stroke: print ? '#000' : '#EDC96C', 'stroke-width': 2, 'stroke-dasharray': '6 5' }, L);
        shadowP = kit.el('path', { fill: print ? '#555' : 'rgba(46,30,20,0.55)' }, L);
        kit.piece(st, L, { shape: { type: 'rect', x: B.x - 5, y: B.y - stickH, w: 10, h: stickH, rx: 3 }, color: 'peach', depth: 1 });
        kit.el('text', { x: B.x - 12, y: B.y - stickH - 8, 'text-anchor': 'end', 'font-size': 13, class: 'pk-text', fill: ink }, L).textContent = `막대 ${stick}cm`;
        if (hrs) { kit.el('text', { x: 20, y: B.y - 8, 'font-size': 13, class: 'pk-text', fill: ink }, L).textContent = '동'; kit.el('text', { x: W - 20, y: B.y - 8, 'text-anchor': 'end', 'font-size': 13, class: 'pk-text', fill: ink }, L).textContent = '서'; }
        sunG = kit.el('g', { class: 'ea-sun pk-draggable', tabindex: print || readOnly ? null : 0, role: print ? null : 'slider', 'aria-label': '태양. 끌거나 방향키로 높이를 바꿔요.' }, st.layer('sun'));
        kit.el('circle', { r: 30, class: 'pk-hit' }, sunG);
        kit.piece(st, sunG, { shape: { type: 'circle', r: 20 }, color: 'buttercup', depth: 2 });
        kit.piece(st, sunG, { shape: { type: 'circle', r: 12 }, color: 'peach', depth: 1 });
        if (!print && !readOnly) {
          const setFrom = (e) => { const p = st.point(e); const a = (Math.atan2(B.y - p.y, B.x - p.x) * 180) / Math.PI; if (hrs) { const f = Math.max(0, Math.min(180, a)) / 180; setSunHour(hrs.rise + Math.round(f * (hrs.set - hrs.rise)), true); } else setAlt(a, true); };
          let dragging = false;
          sunG.addEventListener('pointerdown', (e) => { e.preventDefault(); dragging = true; sunG.setPointerCapture(e.pointerId); sunG.classList.add('pk-lifted'); });
          sunG.addEventListener('pointermove', (e) => { if (dragging) setFrom(e); });
          const end = () => { if (!dragging) return; dragging = false; sunG.classList.remove('pk-lifted'); changed(); announceSun(); };
          sunG.addEventListener('pointerup', end); sunG.addEventListener('pointercancel', end);
          sunG.addEventListener('keydown', (e) => {
            const d = { ArrowUp: 1, ArrowRight: 1, ArrowDown: -1, ArrowLeft: -1, Enter: 1, ' ': 1 }[e.key]; if (!d) return; e.preventDefault();
            if (hrs) setSunHour(shHour + (e.key === 'ArrowLeft' ? -1 : e.key === 'ArrowRight' ? 1 : d), true);
            else { const nx = alt + d * altStep; setAlt(nx > maxAlt && (e.key === 'Enter' || e.key === ' ') ? minAlt : nx, true); }
            changed(); announceSun();
          });
        }
      }
      function setAlt(a, snap) { alt = Math.max(minAlt, Math.min(maxAlt, snap ? Math.round(a / altStep) * altStep : a)); paintSun(); }
      function setSunHour(h, _s) { shHour = Math.max(hrs.rise, Math.min(hrs.set, Math.round(h))); alt = altOfHour(shHour); paintSun(); }
      function announceSun() { say(liveRead() ? `태양 고도 ${alt}°, 그림자 ${shadowOf(alt)}cm` : '태양을 옮겼어요.'); }
      function paintSun() {
        if (!sunG) return;
        // hours: 동(왼쪽)에서 떠 남쪽(가운데 위)을 지나 서(오른쪽)로. 아니면 왼쪽 사분원 위
        let sx; let sy;
        if (hrs) { const f = (shHour - hrs.rise) / (hrs.set - hrs.rise); sx = B.x - Math.cos(rad(f * 180)) * SR; sy = B.y - Math.max(12, Math.sin(rad(alt)) * SR); }
        else { sx = B.x - Math.cos(rad(alt)) * SR; sy = B.y - Math.sin(rad(alt)) * SR; }
        kit.transform(sunG, { x: sx, y: sy });
        const len = shadowOf(alt); const lpx = Math.min(W - B.x - 6, (Number.isFinite(len) ? len : 99) * pxPerCm);
        const toRight = !hrs || (sx <= B.x);
        const end = toRight ? B.x + lpx : B.x - Math.min(B.x - 6, (Number.isFinite(len) ? len : 99) * pxPerCm);
        shadowP.setAttribute('d', `M${B.x} ${B.y - 3}L${end} ${B.y - 3}L${end} ${B.y + 3}L${B.x} ${B.y + 3}Z`);
        rayL.setAttribute('x1', sx); rayL.setAttribute('y1', sy); rayL.setAttribute('x2', end); rayL.setAttribute('y2', B.y);
        sunG.setAttribute('aria-valuetext', liveRead() ? `태양 고도 ${alt}도` : '태양');
        paintRead();
      }

      // ================= 행성 =================
      const planets = (Array.isArray(o.planets) && o.planets.length ? o.planets : PLANETS).filter((p) => PLANET_LOOK[p]);
      const tray = Array.isArray(o.tray) ? o.tray.filter((p) => planets.includes(p)).concat(planets.filter((p) => !(o.tray || []).includes(p))) : [3, 6, 0, 5, 1, 7, 2, 4].map((i) => planets[i % planets.length]).filter((p, i, a) => a.indexOf(p) === i).concat(planets).filter((p, i, a) => a.indexOf(p) === i);
      let order = []; const pCards = {};
      const PS = { y: 96, ty: 222 }; const pn = planets.length; const pw = Math.min(62, (W - 70) / pn - 4);
      const slotX = (i) => 64 + i * (pw + 4) + pw / 2; const trayX = (i) => (W - pn * (pw + 4) + 4) / 2 + i * (pw + 4) + pw / 2;
      if (mode === 'planets') {
        const L = st.layer('planets');
        const sun = kit.el('g', null, L); kit.piece(st, sun, { shape: { type: 'circle', r: 60 }, color: 'buttercup', depth: 2 }); kit.transform(sun, { x: -22, y: PS.y });
        kit.el('text', { x: 18, y: PS.y + 80, 'text-anchor': 'middle', 'font-size': 14, class: 'pk-text', fill: textOn }, L).textContent = '태양';
        planets.forEach((_, i) => {
          kit.el('rect', { x: slotX(i) - pw / 2, y: PS.y - 46, width: pw, height: 92, rx: 10, fill: 'none', stroke: print ? '#000' : 'rgba(255,249,232,0.45)', 'stroke-width': 1.5, 'stroke-dasharray': '5 5' }, L);
          kit.el('text', { x: slotX(i), y: PS.y - 52, 'text-anchor': 'middle', 'font-size': 13, class: 'pk-text', fill: textOn }, L).textContent = (o.slotLabels && o.slotLabels[i]) || String(i + 1);
        });
        kit.el('text', { x: W / 2, y: PS.ty - 56, 'text-anchor': 'middle', 'font-size': 14, class: 'pk-text', fill: textOn }, L).textContent = '행성 카드 — 누르면 다음 빈 칸으로 가요';
        tray.forEach((p) => {
          const g = kit.el('g', { class: 'ea-planet', tabindex: print || readOnly ? null : 0, role: print ? null : 'button' }, st.layer('pcards'));
          kit.el('rect', { x: -pw / 2, y: -44, width: pw, height: 88, class: 'pk-hit' }, g);
          kit.piece(st, g, { shape: { type: 'rect', x: -pw / 2 + 2, y: -42, w: pw - 4, h: 84, rx: 10 }, color: 'lavender', depth: 1, fill: print ? '#FFFFFF' : '#5C5180' });
          const [r, col] = PLANET_LOOK[p]; const rr = Math.min(r, pw / 2 - 6);
          if (p === '토성') kit.el('ellipse', { cx: 0, cy: -8, rx: rr + 8, ry: 5, fill: 'none', stroke: print ? '#000' : '#EDC96C', 'stroke-width': 2.5 }, g);
          kit.piece(st, g, { shape: { type: 'circle', r: rr, cy: -8 }, color: 'cream', depth: 1, fill: col });
          kit.el('text', { x: 0, y: 34, 'text-anchor': 'middle', 'font-size': p.length > 2 ? 12 : 13, class: 'pk-text', fill: textOn }, g).textContent = p;
          pCards[p] = g;
          if (!print && !readOnly) {
            const act = () => { const i = order.indexOf(p); if (i >= 0) order.splice(i, 1); else if (order.length < pn) order.push(p); layoutPlanets(true); changed(); say(order.includes(p) ? `${p}를 ${order.indexOf(p) + 1}번째 칸에 놓았어요.` : `${p}를 카드 자리로 돌려놓았어요.`); };
            g.addEventListener('click', act);
            g.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); act(); } });
          }
        });
      }
      function layoutPlanets(animate) {
        const rest = tray.filter((p) => !order.includes(p));
        tray.forEach((p) => {
          const i = order.indexOf(p); const g = pCards[p]; if (!g) return;
          const to = i >= 0 ? { x: slotX(i), y: PS.y } : { x: trayX(rest.indexOf(p) + Math.floor((pn - rest.length) / 2)), y: PS.ty };
          if (animate) kit.animateTo(g, to); else kit.transform(g, to);
          g.setAttribute('aria-label', `${p} 카드. ${i >= 0 ? `${i + 1}번째 칸에 있어요. 누르면 빠져요.` : '누르면 다음 빈 칸으로 가요.'}`);
        });
      }

      // ---- 보기(HTML) ----
      let askRow = null;
      if (!print && o.ask && Array.isArray(o.ask.choices)) {
        askRow = document.createElement('div'); askRow.className = 'ea-ask'; askRow.setAttribute('role', 'radiogroup'); askRow.setAttribute('aria-label', o.ask.q || '고르기');
        askRow.style.cssText = 'display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin-top:8px';
        askRow.innerHTML = `${o.ask.q ? `<span style="font-weight:700;flex-basis:100%">${esc(o.ask.q)}</span>` : ''}${o.ask.choices.map((c, i) => `<button type="button" class="pl-btn pl-btn--small" tabindex="0" role="radio" aria-checked="false" data-pick="${i}" style="min-height:44px">${esc(c)}</button>`).join('')}`;
        askRow.addEventListener('click', (e) => { const b = e.target.closest('[data-pick]'); if (!b) return; pick = Number(b.dataset.pick); paintPick(); changed(); say(`${o.ask.choices[pick]}을 골랐어요.`); });
        box.appendChild(askRow);
      }
      function paintPick() { if (askRow) askRow.querySelectorAll('[data-pick]').forEach((b) => b.setAttribute('aria-checked', String(Number(b.dataset.pick) === pick))); }

      function paintRead() {
        if (!readT) return;
        if (!liveRead()) { readT.textContent = '확인하면 보여요'; return; }
        if (mode === 'spin') readT.textContent = `우리나라: ${clockText(hour)} · ${phaseOf(hour)}`;
        else if (mode === 'orbit') readT.textContent = `${season} · 한밤에 ${nightStar(season)}`;
        else if (mode === 'shadow') readT.textContent = `${hrs ? `${shHour}시 · ` : ''}고도 ${alt}° · 그림자 ${Number.isFinite(shadowOf(alt)) ? `${shadowOf(alt)}cm` : '아주 김'}`;
        else if (mode === 'moon') readT.textContent = `${Object.values(moon).filter(Boolean).length}장 고름`;
        else readT.textContent = `${order.length}칸 놓음`;
      }

      // ---- 판정 ----
      const wantMoon = (t) => (t.moon === 'auto' || t.moon === true ? Object.fromEntries(days.map((d) => [String(d), shapeOfDay(d)])) : t.moon);
      const altRange = () => (hrs ? Array.from({ length: hrs.set - hrs.rise + 1 }, (_, i) => altOfHour(hrs.rise + i)) : Array.from({ length: Math.floor((maxAlt - minAlt) / altStep) + 1 }, (_, i) => minAlt + i * altStep));
      const wantPlanets = (t) => (Array.isArray(t.order) ? t.order : PLANETS.filter((p) => planets.includes(p)));
      const seasonOfStar = (name) => SEASONS.find((s) => stars[s] === name) || null;
      function judge(t, quiet) {
        t = t || target || {};
        let main = null;
        if (mode === 'spin' && (Number.isFinite(t.hour) || t.time || t.phase)) {
          if (Number.isFinite(t.hour)) main = hour === t.hour ? { correct: true, feedback: `맞아요! 우리나라는 ${clockText(hour)}예요.` } : { correct: false, feedback: Math.abs(((hour - t.hour + 36) % 24) - 12) === 0 ? '반대쪽이에요. 태양 쪽과 그 반대쪽을 다시 보세요.' : '지구를 조금 더 돌려 보세요.', hint: '태양을 바로 바라보는 자리가 낮 12시, 그 반대가 밤 12시예요.' };
          else if (t.time) {
            const now = timeOf(hour);
            main = now === t.time ? { correct: true, feedback: `맞아요! 우리나라가 태양 ${t.time === '낮' ? '빛을 받는' : '빛을 못 받는'} 쪽에 있어요.` }
              : now === '경계' ? { correct: false, feedback: '우리나라가 빛을 받는 쪽과 못 받는 쪽의 경계에 있어요. 조금 더 돌려요.', hint: '경계에서 조금 더 돌려 한가운데 쪽으로 가요.' }
                : { correct: false, feedback: `지금 우리나라는 태양 ${now === '낮' ? '빛을 받는' : '빛을 못 받는'} 쪽이에요.`, hint: '태양이 있는 왼쪽과 그 반대쪽을 견주어 봐요.' };
          } else {
            const now = phaseOf(hour); const want = t.phase === '해 뜰 무렵' ? '아침' : t.phase === '해 질 무렵' ? '저녁' : t.phase === '한낮' ? '낮' : t.phase === '한밤중' ? '밤' : t.phase;
            if (now === want) main = { correct: true, feedback: `맞아요! 우리나라는 ${now}이에요.` };
            else if ((now === '아침' && want === '저녁') || (now === '저녁' && want === '아침')) main = { correct: false, feedback: '경계는 맞는데 반대쪽 경계예요. 지구가 도는 방향을 떠올려 보세요.', hint: '지구는 위에서 보면 시계 반대 방향으로 돌아요. 어두운 쪽에서 밝은 쪽으로 넘어가는 경계가 해 뜰 무렵이에요.' };
            else main = { correct: false, feedback: `지금 우리나라는 ${now}이에요.`, hint: '빛을 받는 쪽, 못 받는 쪽, 두 경계 가운데 어디인지 봐요.' };
          }
        } else if (mode === 'orbit' && (t.season || t.night)) {
          const want = t.season || seasonOfStar(t.night);
          if (season === want) main = { correct: true, feedback: t.night ? `맞아요! 이 자리에서는 한밤에 ${t.night}가 보여요.` : `맞아요! 지구가 ${want} 자리에 있어요.` };
          else {
            const opp = SEASONS[(SEASONS.indexOf(want) + 2) % 4];
            if (t.night && season === opp) main = { correct: false, feedback: '그 별자리가 태양 쪽에 있어요. 낮에 떠 있어서 밝은 햇빛 때문에 보이지 않아요.', hint: '밤에는 태양 반대쪽 하늘이 보여요. 별자리가 지구의 밤 쪽에 오게 해요.' };
            else main = { correct: false, feedback: t.night ? `지금 한밤에는 ${nightStar(season)}가 보여요.` : `지금 지구는 ${season} 자리에 있어요.`, hint: '지구를 한 자리씩 옮기며 밤 쪽에 있는 별자리를 봐요.' };
          }
        } else if (mode === 'moon' && t.moon) {
          const want = wantMoon(t); const keys = Object.keys(want).filter((d) => moonSlots[d]);
          const empty = keys.filter((d) => moon[d] == null);
          if (empty.length === keys.length) main = { correct: false, incomplete: true, feedback: '날짜 카드를 눌러 달 모양을 골라요.', hint: '카드를 누를 때마다 모양이 바뀌어요.' };
          else if (empty.length) main = { correct: false, incomplete: true, feedback: `아직 고르지 않은 카드가 ${empty.length}장 있어요.`, hint: '남은 카드도 눌러 골라요.' };
          else {
            const bad = keys.filter((d) => moon[d] !== want[d]);
            if (!bad.length) main = { correct: true, feedback: '맞아요! 달은 오른쪽부터 차올라 보름달이 되었다가 오른쪽부터 줄어들어요.' };
            else {
              if (!quiet) bad.forEach((d) => flag(moonSlots[d].g));
              const flip = bad.find((d) => (moon[d] === '상현달' && want[d] === '하현달') || (moon[d] === '하현달' && want[d] === '상현달') || (moon[d] === '초승달' && want[d] === '그믐달') || (moon[d] === '그믐달' && want[d] === '초승달'));
              main = flip ? { correct: false, feedback: `음력 ${flip}일 달의 밝은 쪽이 반대예요. 오른쪽이 밝은지 왼쪽이 밝은지 다시 보세요.`, hint: '달은 처음에 오른쪽부터 밝아지고, 보름이 지나면 오른쪽부터 어두워져요.' }
                : { correct: false, feedback: `${bad.length}장의 모양이 맞지 않아요. 흔들리는 카드를 다시 보세요.`, hint: '음력 15일 무렵이 가장 둥글어요. 그 앞과 뒤를 나누어 생각해요.' };
            }
          }
        } else if (mode === 'shadow' && (Number.isFinite(t.alt) || t.shortest || t.longest || Number.isFinite(t.shadow) || Number.isFinite(t.hour) || t.noon)) {
          const rng = altRange(); const top = Math.max(...rng); const low = Math.min(...rng.filter((a) => a > 0));
          let ok; let msg;
          if (Number.isFinite(t.hour)) { ok = shHour === t.hour; msg = '태양이 떠서 남쪽 하늘 가장 높은 곳을 지나 지는 차례를 생각해요.'; }
          else if (t.noon) { ok = alt === top; msg = '태양이 가장 높이 뜨는 때를 찾아요.'; }
          else if (Number.isFinite(t.alt)) { ok = alt === t.alt; msg = '고도 눈금은 땅에서 10°씩이에요.'; }
          else if (t.shortest) { ok = alt === top; msg = '태양이 높을수록 그림자가 어떻게 되는지 봐요.'; }
          else if (t.longest) { ok = alt === low; msg = '태양이 낮을수록 그림자가 어떻게 되는지 봐요.'; }
          else { const best = rng.slice().sort((a, b) => Math.abs(shadowOf(a) - t.shadow) - Math.abs(shadowOf(b) - t.shadow))[0]; ok = alt === best; msg = '그림자 끝을 눈금에서 읽어요.'; }
          main = ok ? { correct: true, feedback: t.longest ? '맞아요! 태양이 낮을수록 그림자가 길어요.' : t.shortest || t.noon ? '맞아요! 태양이 가장 높을 때 그림자가 가장 짧아요.' : '맞아요! 태양 고도와 그림자 길이를 잘 맞췄어요.' }
            : { correct: false, feedback: t.shortest || t.noon ? '그림자가 더 짧아질 수 있어요.' : t.longest ? '그림자가 더 길어질 수 있어요.' : '아직 맞지 않아요. 태양을 더 옮겨 보세요.', hint: msg };
        } else if (mode === 'planets' && (t.order || t.order === undefined && t.pick == null)) {
          const want = wantPlanets(t);
          if (!order.length) main = { correct: false, incomplete: true, feedback: '행성 카드를 눌러 차례 칸에 놓아요.', hint: '첫째 칸부터 차례로 채워요.' };
          else if (order.length < want.length) main = { correct: false, incomplete: true, feedback: `아직 ${want.length - order.length}칸이 비어 있어요.`, hint: '남은 카드도 차례로 놓아요.' };
          else {
            const i = want.findIndex((p, k) => order[k] !== p);
            if (i < 0) main = { correct: true, feedback: `맞아요! ${want.join(' → ')} 차례예요.` };
            else { if (!quiet) flag(pCards[order[i]]); main = { correct: false, feedback: `${i + 1}번째 칸부터 차례가 달라요.`, hint: `${i + 1}번째 칸의 카드를 빼고 다시 생각해요.` }; }
          }
        }
        let pr = null;
        if (t.pick != null) {
          if (pick == null) pr = { correct: false, incomplete: true, feedback: '아래 보기에서 하나를 골라요.', hint: '그림을 보고 알맞은 보기를 골라요.' };
          else if (pick !== t.pick) pr = { correct: false, feedback: (o.ask && o.ask.why && o.ask.why[pick]) || '고른 보기를 그림과 다시 견주어 보세요.', hint: '그림에서 찾은 것과 보기 글자를 하나씩 맞춰 봐요.' };
          else pr = { correct: true, feedback: '맞아요! 그림을 잘 읽었어요.' };
        }
        if (main && !main.correct) return main;
        if (pr && !pr.correct) return pr;
        if (main || pr) return main || pr;
        return { correct: false, incomplete: true, feedback: '교구를 움직여 문제를 풀어 보세요.', hint: '문제를 다시 읽어요.' };
      }
      function flag(g) { if (!g) return; g.classList.add('pk-no'); setTimeout(() => g.classList.remove('pk-no'), 2200); }

      function state() {
        const s = {};
        if (mode === 'spin') s.hour = hour;
        if (mode === 'orbit') s.season = season;
        if (mode === 'moon') s.moon = Object.fromEntries(days.map((d) => [String(d), moon[d] == null ? null : moon[d]]));
        if (mode === 'shadow') { if (hrs) s.hour = shHour; else s.alt = alt; }
        if (mode === 'planets') s.order = order.slice();
        if (askRow || (o.ask && o.ask.choices)) s.pick = pick;
        return s;
      }
      function apply(s) {
        s = s || {};
        if (mode === 'spin') setHour(Number.isFinite(s.hour) ? s.hour : o.start && Number.isFinite(o.start.hour) ? o.start.hour : 12);
        if (mode === 'orbit') { season = SEASONS.includes(s.season) ? s.season : SEASONS.includes(o.start) ? o.start : '봄'; placeEarth(false); }
        if (mode === 'moon') { moon = {}; days.forEach((d) => { const v = s.moon && s.moon[String(d)]; moon[d] = SHAPE_LIT[v] ? v : null; }); paintMoon(); }
        if (mode === 'shadow') { if (hrs) setSunHour(Number.isFinite(s.hour) ? s.hour : hrs.rise + 2); else setAlt(Number.isFinite(s.alt) ? s.alt : 30, false); }
        if (mode === 'planets') { order = Array.isArray(s.order) ? s.order.filter((p, i, a) => planets.includes(p) && a.indexOf(p) === i) : []; layoutPlanets(false); }
        pick = Number.isInteger(s.pick) ? s.pick : null; paintPick();
        paintRead();
      }
      function solved(t) {
        t = t || target || {};
        const s = state();
        if (mode === 'spin') {
          if (Number.isFinite(t.hour)) s.hour = t.hour;
          else if (t.time) s.hour = t.time === '낮' ? 12 : 0;
          else if (t.phase) { const w = { '해 뜰 무렵': 6, '해 질 무렵': 18, 한낮: 12, 한밤중: 0, 아침: 6, 저녁: 18, 낮: 12, 밤: 0 }[t.phase]; if (w != null) s.hour = w; }
        }
        if (mode === 'orbit') { const w = t.season || seasonOfStar(t.night); if (w) s.season = w; }
        if (mode === 'moon' && t.moon) s.moon = Object.assign({}, s.moon, wantMoon(t));
        if (mode === 'shadow') {
          const rng = altRange(); const top = Math.max(...rng); const low = Math.min(...rng.filter((a) => a > 0));
          if (hrs) {
            const hs = Array.from({ length: hrs.set - hrs.rise + 1 }, (_, i) => hrs.rise + i);
            if (Number.isFinite(t.hour)) s.hour = t.hour; else if (t.noon || t.shortest) s.hour = hs.find((h) => altOfHour(h) === top); else if (t.longest) s.hour = hs.find((h) => altOfHour(h) === low);
          } else if (Number.isFinite(t.alt)) s.alt = t.alt; else if (t.shortest) s.alt = top; else if (t.longest) s.alt = low; else if (Number.isFinite(t.shadow)) s.alt = rng.slice().sort((a, b) => Math.abs(shadowOf(a) - t.shadow) - Math.abs(shadowOf(b) - t.shadow))[0];
        }
        if (mode === 'planets') s.order = wantPlanets(t).slice();
        if (t.pick != null) s.pick = t.pick;
        return s;
      }
      const isWrong = (s, t) => { const save = state(); apply(s); const r = judge(t, true); apply(save); return !r.correct && !r.incomplete; };

      apply({});
      if (mode === 'orbit' && SEASONS.includes(o.start)) { season = o.start; placeEarth(false); }

      return {
        getState: state,
        setState(s) { apply(s); },
        setTarget(t) { target = t || null; },
        reset() { revealed = false; apply({}); },
        check(t, opts) {
          const quiet = !!(opts && opts.forHint);
          const r = judge(t, quiet);
          if (!quiet && r.correct) { revealed = true; paintRead(); if (mode === 'shadow') paintSun(); if (mode === 'orbit') placeEarth(false); }
          return r;
        },
        hint(t, opts) {
          t = t || target || {};
          const r = judge(t, true);
          if (r.correct) return { hint: '지금 상태가 알맞아요.', correct: true };
          const lv = levelOf(opts);
          if (lv === 1) {
            if (t.pick != null && !(mode === 'spin' && (Number.isFinite(t.hour) || t.time || t.phase)) && !(mode === 'orbit' && (t.season || t.night)) && !(mode === 'moon' && t.moon) && !(mode === 'planets' && t.order) && !(mode === 'shadow' && Object.keys(t).length > 1)) return { hint: '그림에서 태양·지구·달이 어디에 있는지 먼저 보고, 보기를 하나씩 견주어요.', correct: false };
            return { hint: {
              spin: '태양 빛을 받는 쪽과 받지 못하는 쪽을 먼저 나누어 봐요. 지구는 위에서 보면 시계 반대 방향으로 돌아요.',
              orbit: t.night ? '밤에는 태양 반대쪽 하늘이 보여요. 찾는 별자리가 지구의 어두운 쪽 너머에 오게 해요.' : '지구는 태양 둘레를 위에서 보면 시계 반대 방향으로 돌아요. 자리 이름을 읽어요.',
              moon: '음력 날짜가 지날수록 달의 밝은 부분이 오른쪽부터 차올랐다가, 둥글어진 뒤에는 오른쪽부터 줄어들어요.',
              shadow: '태양이 높이 뜰수록 그림자가 어떻게 되는지 생각하며 태양을 옮겨 봐요.',
              planets: '문제가 말한 차례의 기준을 먼저 정하고, 첫째 칸부터 하나씩 카드를 놓아요.',
            }[mode], correct: false };
          }
          if (lv === 2) return { hint: r.hint || r.feedback, correct: false };
          const s = solved(t);
          if (mode === 'spin' && Number.isFinite(s.hour)) return { hint: `우리나라 사람이 ${s.hour === 12 ? '태양을 바로 바라보는' : s.hour === 0 ? '태양과 정반대인' : s.hour < 12 ? '빛을 못 받는 쪽에서 빛을 받는 쪽으로 넘어가는' : '빛을 받는 쪽에서 못 받는 쪽으로 넘어가는'} 자리(${clockText(s.hour)})에 오게 돌려요.`, correct: false };
          if (mode === 'orbit' && s.season) return { hint: `지구를 ${s.season} 자리로 옮겨요. 그때 지구의 밤 쪽 너머에 ${nightStar(s.season)}가 있어요.`, correct: false };
          if (mode === 'moon') { const want = wantMoon(t) || {}; const d = Object.keys(want).find((k) => moon[k] !== want[k]); if (d) return { hint: `음력 ${d}일의 달은 ${want[d]}이에요.`, correct: false }; }
          if (mode === 'shadow') return { hint: hrs ? `태양을 ${s.hour}시 자리에 놓아요.` : `태양 고도를 ${s.alt}°에 맞춰요.`, correct: false };
          if (mode === 'planets') { const want = wantPlanets(t); const i = want.findIndex((p, k) => order[k] !== p); if (i >= 0) return { hint: `${i + 1}번째 칸에는 ${want[i]}가 와요.`, correct: false }; }
          if (t.pick != null && o.ask) return { hint: `답은 ‘${o.ask.choices[t.pick]}’이에요. 그림에서 그 까닭을 찾아봐요.`, correct: false };
          return { hint: r.hint || '문제를 다시 읽어요.', correct: false };
        },
        solve(t) { apply(solved(t)); },
        // 그럴듯한 오개념: 낮·밤 반대, 해 뜰·질 무렵 바꾸기, 별자리를 태양 쪽에서 찾기, 상현·하현 바꾸기, 그림자 반대, 행성 이웃 바꾸기
        wrongAnswer(t) {
          t = t || target || {};
          const good = solved(t); const cands = [];
          if (mode === 'spin') { if (Number.isFinite(good.hour)) [12, 6, 18, 3, 9, 15, 21].map((d) => (good.hour + d) % 24).forEach((h) => cands.push(Object.assign({}, good, { hour: h }))); }
          if (mode === 'orbit' && good.season) [2, 1, 3].forEach((k) => cands.push(Object.assign({}, good, { season: SEASONS[(SEASONS.indexOf(good.season) + k) % 4] })));
          if (mode === 'moon' && good.moon) {
            const swap = { 상현달: '하현달', 하현달: '상현달', 초승달: '그믐달', 그믐달: '초승달', 보름달: '상현달' };
            Object.keys(good.moon).forEach((d) => { if (good.moon[d] && swap[good.moon[d]]) cands.push(Object.assign({}, good, { moon: Object.assign({}, good.moon, { [d]: swap[good.moon[d]] }) })); });
            Object.keys(good.moon).forEach((d) => shapeList.forEach((v) => cands.push(Object.assign({}, good, { moon: Object.assign({}, good.moon, { [d]: v }) }))));
          }
          if (mode === 'shadow') {
            if (hrs) Array.from({ length: hrs.set - hrs.rise + 1 }, (_, i) => hrs.rise + i).forEach((h) => cands.push(Object.assign({}, good, { hour: h })));
            else { const rng = altRange(); const a = good.alt; rng.slice().sort((x, y) => Math.abs(y - a) - Math.abs(x - a)).forEach((x) => cands.push(Object.assign({}, good, { alt: x }))); }
          }
          if (mode === 'planets' && good.order) for (let i = 0; i + 1 < good.order.length; i++) { const ord = good.order.slice(); [ord[i], ord[i + 1]] = [ord[i + 1], ord[i]]; cands.push(Object.assign({}, good, { order: ord })); }
          if (t.pick != null && o.ask) o.ask.choices.forEach((_, i) => { if (i !== t.pick) cands.push(Object.assign({}, good, { pick: i })); });
          const cur = JSON.stringify(state());
          return cands.find((s) => JSON.stringify(s) !== cur && isWrong(s, t)) || null;
        },
        distance(a, b) {
          a = a || {}; b = b || {}; let d = 0;
          if ('hour' in a || 'hour' in b) { const x = Math.abs((a.hour || 0) - (b.hour || 0)); d += mode === 'spin' ? Math.min(x, 24 - x) : x; }
          if ('season' in a || 'season' in b) { const x = Math.abs(SEASONS.indexOf(a.season) - SEASONS.indexOf(b.season)); d += Math.min(x, 4 - x); }
          if (a.moon || b.moon) Object.keys(Object.assign({}, a.moon, b.moon)).forEach((k) => { if ((a.moon || {})[k] !== (b.moon || {})[k]) d += 1; });
          if ('alt' in a || 'alt' in b) d += Math.abs((a.alt || 0) - (b.alt || 0)) / (altStep || 10);
          if (a.order || b.order) { const x = a.order || []; const y = b.order || []; d += Math.abs(x.length - y.length) + x.filter((p, i) => y[i] !== undefined && y[i] !== p).length; }
          if ('pick' in a || 'pick' in b) d += a.pick === b.pick ? 0 : 1;
          return d;
        },
        async demo(t) {
          t = t || {};
          const s = solved(t);
          if (mode === 'spin' && Number.isFinite(s.hour)) { const from = hour; const steps = ((s.hour - from) + 24) % 24; for (let i = 1; i <= steps; i++) { setHour(from + i); await kit.wait(120); } paintRead(); return; }
          if (mode === 'orbit' && s.season) { while (season !== s.season) { season = SEASONS[(SEASONS.indexOf(season) + 1) % 4]; placeEarth(true); await kit.wait(500); } paintRead(); return; }
          if (mode === 'shadow' && !hrs && Number.isFinite(s.alt)) { const from = alt; await kit.tween(900, (q) => setAlt(from + (s.alt - from) * q, false)); setAlt(s.alt, true); return; }
          apply(s);
        },
      };
    },
  });
})(window.PaperKit);
