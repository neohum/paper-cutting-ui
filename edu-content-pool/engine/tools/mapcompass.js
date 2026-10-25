/* 종이 지도와 나침반 — 가상의 '종이 마을' 지도(산·강·길·건물)를 보고 방위와 기호·범례를 익힌다.
 * 모드(o.mode)
 *  - 'direction': 출발 건물(from)에서 본 도착 건물(to)의 방위를 고른다. 방위표 바늘이나 출발 건물 위 화살표를 돌리거나,
 *                 방위표 둘레의 방위 단추를 누른다. 상태 { dir }  / target { direction:'북동', from?, to? }
 *  - 'legend'   : 기호 스티커를 끌어 범례 빈칸에 붙인다. 상태 { legend:{병원:'cross'} } / target { legend:{병원:'cross'} }
 *  - 'place'    : 범례를 보고 지도 빈 터(o.hidden)에 기호 스티커를 붙인다. 상태 { place:{병원:'cross'} } / target { place:{병원:'cross'} }
 * 옵션: points(4|8), roseLabels('all'|'main'|'north'), names(지도에 건물 이름, 기본 true), from/to(강조), blank(범례 빈칸 이름들),
 *       hidden(빈 터 이름들), extra(헷갈리게 더 줄 기호), showReadout(내 답 표시), legend(범례 보이기, 기본 true), print, wide(활동지 넓게)
 * 마을은 지어낸 곳이다(실제 주소 없음). 지도는 위쪽이 북쪽이다.
 */
(function (K) {
  'use strict';
  // 받침에 맞는 조사(경찰서는/학교는, 면 ㄱ과). 자모 글자(ㄱ~ㅎ)는 이름(기역·니은…)이 받침으로 끝난다.
  const josa = (w, withB, noB) => { const c = String(w).charCodeAt(String(w).length - 1); const has = (c >= 0x3131 && c <= 0x314E) || (c >= 0xAC00 && c <= 0xD7A3 && (c - 0xAC00) % 28 !== 0); return `${w}${has ? withB : noB}`; };
  const DIRS = ['북', '북동', '동', '남동', '남', '남서', '서', '북서'];
  // 3×3 격자 위 건물 — 학교를 가운데 두면 8방위가 정확히 45°씩 떨어진다
  const PLACES = [
    { name: '병원', sym: 'cross', x: 92, y: 82, color: 'rose' },
    { name: '시청', sym: 'dcircle', x: 182, y: 82, color: 'lavender' },
    { name: '우체국', sym: 'envelope', x: 272, y: 82, color: 'peach' },
    { name: '경찰서', sym: 'shield', x: 92, y: 172, color: 'sky' },
    { name: '학교', sym: 'flag', x: 182, y: 172, color: 'buttercup' },
    { name: '공원', sym: 'tree', x: 272, y: 172, color: 'mint' },
    { name: '소방서', sym: 'fire', x: 92, y: 262, color: 'peach' },
    { name: '도서관', sym: 'book', x: 182, y: 262, color: 'lavender' },
    { name: '기차역', sym: 'rail', x: 272, y: 262, color: 'sky' },
  ];
  const byName = Object.fromEntries(PLACES.map((p) => [p.name, p]));
  const SYM_HINT = {
    cross: '+ 모양은 아픈 사람을 돌보는 곳을 떠올리게 해요.',
    dcircle: '겹동그라미(◎)는 시청처럼 우리 지역 일을 맡아 보는 큰 관청을 나타낼 때가 많아요.',
    envelope: '편지 봉투 모양은 편지와 소포를 보내는 곳이에요.',
    shield: '방패 모양은 우리를 지켜 주는 곳을 떠올리게 해요.',
    flag: '깃발이 꽂힌 모양은 우리가 공부하러 가는 곳이에요.',
    tree: '나무 모양은 나무가 많고 쉬는 곳이에요.',
    fire: '불꽃 모양은 불을 끄러 출동하는 곳이에요.',
    book: '펼친 책 모양은 책을 빌려 읽는 곳이에요.',
    rail: '철길 모양은 기차를 타는 곳이에요.',
  };
  // 화면 낭독용 모양 이름 — 뜻(병원 등)은 말하지 않아 문제를 지킨다
  const SYM_SHAPE = { cross: '더하기(+) 모양', dcircle: '겹동그라미 모양', envelope: '편지 봉투 모양', shield: '방패 모양', flag: '깃발 모양', tree: '나무 모양', fire: '불꽃 모양', book: '펼친 책 모양', rail: '철길 모양' };
  // 사이 방위 뜻풀이(한국어 학습자가 '북동'이라는 낱말을 처음 볼 때)
  const MEAN = { 북동: '북쪽과 동쪽 사이', 남동: '남쪽과 동쪽 사이', 남서: '남쪽과 서쪽 사이', 북서: '북쪽과 서쪽 사이' };
  const dirOf = (from, to) => {
    const a = (Math.atan2(to.x - from.x, -(to.y - from.y)) * 180) / Math.PI;
    return DIRS[Math.round(K.norm(a) / 45) % 8];
  };

  // 지도 기호(잉크선). 인쇄해도 그대로 검게 보인다.
  function glyph(kit, parent, sym, s) {
    const g = kit.el('g', { class: 'mc-glyph', 'pointer-events': 'none', transform: s && s !== 1 ? `scale(${s})` : null }, parent);
    const ink = '#3D352E';
    const line = { fill: 'none', stroke: ink, 'stroke-width': 2.2, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' };
    switch (sym) {
      case 'cross': kit.el('path', { d: 'M-3 -9 h6 v6 h6 v6 h-6 v6 h-6 v-6 h-6 v-6 h6 Z', fill: '#C2414F' }, g); break;
      case 'dcircle': kit.el('circle', { r: 8.5, ...line }, g); kit.el('circle', { r: 3.6, ...line }, g); break;
      case 'envelope': kit.el('rect', { x: -9, y: -6.5, width: 18, height: 13, rx: 1.5, ...line }, g); kit.el('path', { d: 'M-9 -6 L0 1.5 L9 -6', ...line }, g); break;
      case 'shield': kit.el('path', { d: 'M0 -9.5 L8.5 -6 V0 C8.5 5 4.5 8.5 0 10 C-4.5 8.5 -8.5 5 -8.5 0 V-6 Z', fill: '#2E6A80' }, g); kit.el('path', { d: 'M-3.5 0 L-0.5 3 L4 -3', fill: 'none', stroke: '#fff', 'stroke-width': 2, 'stroke-linecap': 'round' }, g); break;
      case 'flag': kit.el('path', { d: 'M-6 10 V-10', ...line }, g); kit.el('path', { d: 'M-5 -10 L9 -5.5 L-5 -1 Z', fill: '#B5432F' }, g); kit.el('path', { d: 'M-10 10 H4', ...line }, g); break;
      case 'tree': kit.el('path', { d: 'M0 -10 L8 3 H-8 Z', fill: '#2F7A57' }, g); kit.el('path', { d: 'M0 3 V10', ...line }, g); break;
      case 'fire': kit.el('path', { d: 'M0 -10 C6 -4 8.5 0 6.5 5 A6.6 6.6 0 0 1 -6.5 5 C-8.5 0 -4.5 -3 -2 -7.5 C-1.2 -3.5 1 -2.5 0 -10 Z', fill: '#D9572B' }, g); break;
      case 'book': kit.el('path', { d: 'M0 -5 Q-5 -8.5 -10 -6.5 V7 Q-5 5 0 8 Q5 5 10 7 V-6.5 Q5 -8.5 0 -5 Z M0 -5 V8', ...line }, g); break;
      case 'rail': kit.el('path', { d: 'M-10 -3.5 H10 M-10 3.5 H10 M-6 -7 V7 M0 -7 V7 M6 -7 V7', ...line }, g); break;
      default: break;
    }
    return g;
  }

  K.registerTool('mapcompass', {
    name: '종이 지도와 나침반',
    create(box, o, kit) {
      const mode = o.mode || 'direction';
      const points = o.points === 4 ? 4 : 8;
      const withTray = mode !== 'direction' && !o.print;
      // 좁은 칸(휴대폰 375px)에서는 지도를 위에, 방위표·범례·스티커를 아래로 쌓는다. 옆으로 늘어놓으면 글자가 6~7px까지 줄어든다.
      const bw = o.print ? 0 : box.clientWidth || 0;
      const narrow = bw > 0 && bw < 460;
      const nSyms = withTray ? (mode === 'legend' ? (o.blank || PLACES) : (o.hidden || [])).length + (o.extra || []).length : 0;
      const L = narrow
        ? { W: 362, rc: [122, 487], rs: 1.35, ro: [300, 474], LX: 8, LY: 616, LW: 346, LH: 144, cols: 3, TY: 768, perRow: 5 }
        : { W: 524, rc: [440, 100], rs: 1, ro: [440, 194], LX: 364, LY: 201, LW: 152, LH: 157, cols: 2, TY: 366, perRow: 99 };
      const trayRows = Math.max(1, Math.ceil(nSyms / L.perRow));
      const trayH = narrow ? 36 + trayRows * 60 : 60;
      const H = narrow ? (withTray ? L.TY + trayH + 6 : L.LY + L.LH + 8) : (withTray ? 432 : 362);
      const st = kit.stage(box, { viewBox: [L.W, H], label: '종이 마을 지도와 방위표. 위쪽이 북쪽입니다.' });
      // 좁은 칸이나 200% 확대(칸 폭 760px 미만)에서는 화면 높이 제한(72vh)을 풀어 폭에 맞춘다 — 높이에 맞춰 줄면 글자가 9px까지 작아진다
      if (bw > 0 && bw < 760) st.svg.style.maxHeight = 'none';
      const TAG = narrow ? 1.55 : 1.1; // '여기서/어디?' 꼬리표 글자 배율
      const showNames = o.names !== false;
      const hidden = new Set(mode === 'place' ? (o.hidden || []) : []);
      const blank = new Set(mode === 'legend' ? (o.blank || PLACES.map((p) => p.name)) : []);
      let from = o.from ? byName[o.from] : null; let to = o.to ? byName[o.to] : null;

      // ---- 지도 바탕: 크림 종이 → 언덕·산 → 강 → 길 ----
      const M = st.layer('map');
      kit.piece(st, M, { shape: { type: 'rect', x: 8, y: 8, w: 346, h: 346, rx: 16 }, color: 'cream', depth: 3, texture: true, fill: '#FBF6EA' });
      kit.piece(st, M, { shape: { type: 'path', d: 'M10 54 C 22 34, 40 26, 58 34 C 66 22, 88 14, 110 24 C 124 16, 140 18, 150 30 L 150 10 L 24 10 Q 10 10 10 24 Z' }, color: 'mint', depth: 2 });
      const mtn = kit.el('g', { transform: 'translate(46 44) scale(0.42)' }, M);
      kit.piece(st, mtn, { shape: { type: 'poly', points: '-70,0 0,-82 70,0' }, color: 'lavender', depth: 2 });
      kit.piece(st, mtn, { shape: { type: 'poly', points: '-16,-63 0,-82 16,-63 7,-56 0,-63 -7,-56' }, color: 'cream', depth: 0 });
      kit.piece(st, M, { shape: { type: 'path', d: 'M314 10 C 338 70, 298 130, 320 196 S 334 300, 316 352 L 344 352 C 352 300, 340 244, 344 196 S 350 80, 340 10 Z' }, color: 'sky', depth: 2 });
      kit.el('text', { x: 330, y: 335, 'text-anchor': 'middle', 'font-size': narrow ? 16 : 13, class: 'pk-text', fill: '#204C5A' }, M).textContent = '강';
      const road = (shape) => kit.piece(st, M, { shape, color: 'buttercup', depth: 1, flat: true, fill: '#F6EBCB', stroke: 'rgba(110,83,15,0.25)' });
      road({ type: 'rect', x: 20, y: 124, w: 290, h: 10, rx: 5 });
      road({ type: 'rect', x: 20, y: 214, w: 290, h: 10, rx: 5 });
      road({ type: 'rect', x: 133, y: 30, w: 10, h: 312, rx: 5 });
      road({ type: 'rect', x: 223, y: 30, w: 10, h: 312, rx: 5 });
      // 작은 나무 장식(정적)
      [[30, 330], [150, 342], [300, 30], [24, 120]].forEach(([x, y]) => {
        kit.piece(st, M, { shape: { type: 'circle', r: 8, cx: x, cy: y - 6 }, color: 'mint', depth: 1 });
      });

      // ---- 건물 ----
      const B = st.layer('buildings');
      const siteSlot = {}; // place 모드 빈 터
      const bldG = {};
      let lotNo = 0;
      for (const p of PLACES) {
        const g = kit.el('g', { class: 'mc-bld', 'aria-label': hidden.has(p.name) ? `빈 터 ${++lotNo}` : (showNames ? p.name : '건물') }, B);
        if (hidden.has(p.name)) {
          kit.el('rect', { x: p.x - 28, y: p.y - 22, width: 56, height: 44, rx: 8, fill: 'rgba(255,253,249,0.7)', stroke: '#8C7F6E', 'stroke-dasharray': '5 4', 'stroke-width': 1.6, class: 'mc-lot' }, g);
          kit.el('circle', { cx: p.x, cy: p.y + 2, r: 15, fill: 'none', stroke: '#8C7F6E', 'stroke-dasharray': '3 3', 'stroke-width': 1.4 }, g);
          siteSlot[p.name] = { x: p.x, y: p.y + 2 };
        } else {
          kit.piece(st, g, { shape: { type: 'rect', x: p.x - 26, y: p.y - 12, w: 52, h: 34, rx: 4 }, color: p.color, depth: 2 });
          kit.piece(st, g, { shape: { type: 'poly', points: `${p.x - 31},${p.y - 11} ${p.x},${p.y - 30} ${p.x + 31},${p.y - 11}` }, color: p.color === 'rose' ? 'peach' : 'rose', depth: 2 });
          kit.piece(st, g, { shape: { type: 'circle', r: 13, cx: p.x, cy: p.y + 5 }, color: 'cream', depth: 1 });
          const gl = glyph(kit, g, p.sym, 0.95); gl.setAttribute('transform', `translate(${p.x} ${p.y + 5}) scale(0.95)`);
        }
        bldG[p.name] = g;
      }

      // ---- 강조 고리(출발·도착) ----
      const HL = st.layer('highlight');
      const ring = (p, kind) => {
        const g = kit.el('g', null, HL);
        kit.el('circle', { cx: p.x, cy: p.y, r: 39, fill: 'none', stroke: kind === 'from' ? '#275C46' : '#702830', 'stroke-width': 2.4, 'stroke-dasharray': kind === 'from' ? null : '6 4', opacity: 0.85 }, g);
        // 꼬리표: '여기서'는 왼쪽 아래, '어디?'는 오른쪽 위 — 두 건물이 붙어 있어도 겹치지 않는다
        const isFrom = kind === 'from'; const w = (isFrom ? 40 : 34) * TAG; const h = 15 * TAG;
        const tx = isFrom ? p.x - 10 - w : p.x + 8; const ty = isFrom ? p.y + 40 : p.y - 34 - h;
        kit.el('rect', { x: tx, y: ty, width: w, height: h, rx: h / 2, fill: isFrom ? '#EAF7F1' : '#FDF0F1', stroke: isFrom ? '#275C46' : '#702830', 'stroke-width': 1 }, g);
        kit.el('text', { x: tx + w / 2, y: ty + h * 0.75, 'text-anchor': 'middle', 'font-size': 10 * TAG, class: 'pk-text', fill: isFrom ? '#275C46' : '#702830' }, g).textContent = isFrom ? '여기서' : '어디?';
        return g;
      };
      const drawHighlights = () => { while (HL.firstChild) HL.removeChild(HL.firstChild); if (from) ring(from, 'from'); if (to) ring(to, 'to'); };

      // ---- 방위표 ----
      // 좁은 칸에서는 방위표를 지도 아래로 옮기고 키운다. 안쪽 그림은 늘 (440,100) 둘레에 그리고, 바깥 묶음만 옮긴다.
      const R = st.layer('rose');
      const rc = [440, 100]; const rcS = L.rc; // rc: 안쪽 좌표, rcS: 화면(무대) 좌표
      const Rin = kit.el('g', { transform: narrow ? `translate(${rcS[0]} ${rcS[1]}) scale(${L.rs}) translate(${-rc[0]} ${-rc[1]})` : null }, R);
      kit.piece(st, Rin, { shape: { type: 'circle', r: 47, cx: rc[0], cy: rc[1] }, color: 'peach', depth: 3, texture: true });
      kit.piece(st, Rin, { shape: { type: 'circle', r: 40, cx: rc[0], cy: rc[1] }, color: 'cream', depth: 1 });
      const starPts = (r1, r2, rot) => { const a = []; for (let i = 0; i < 8; i++) { const ang = ((i * 45 + rot) * Math.PI) / 180; const r = i % 2 ? r2 : r1; a.push(`${(rc[0] + Math.sin(ang) * r).toFixed(1)},${(rc[1] - Math.cos(ang) * r).toFixed(1)}`); } return a.join(' '); };
      if (points === 8) kit.piece(st, Rin, { shape: { type: 'poly', points: starPts(27, 7, 45) }, color: 'buttercup', depth: 1 });
      kit.piece(st, Rin, { shape: { type: 'poly', points: starPts(36, 8, 0) }, color: 'lavender', depth: 2 });
      // 방위 단추(누르면 그 방위로 바늘이 돈다). 라벨 수는 roseLabels로 조절한다.
      const labels = o.roseLabels || 'all';
      const showLabel = (i) => labels === 'all' || (labels === 'main' && i % 2 === 0) || (labels === 'north' && i === 0);
      // 이름이 없는 사이 방위 단추도 포커스·마우스를 올리면 이름과 뜻을 보여 준다(도전 단계 'north'는 스스로 떠올리게 숨긴다)
      const tipOn = labels !== 'north' && !o.print && mode === 'direction';
      const readout = kit.el('text', { x: L.ro[0], y: L.ro[1], 'text-anchor': 'middle', 'font-size': narrow ? 17 : 13, class: 'pk-text', fill: '#473B6B' }, R);
      const readout2 = kit.el('text', { x: L.ro[0], y: L.ro[1] + 24, 'text-anchor': 'middle', 'font-size': 16, class: 'pk-text', fill: '#473B6B' }, R);
      const showTip = (i) => {
        if (!tipOn || !MEAN[DIRS[i]]) return;
        if (narrow) { readout.textContent = DIRS[i]; readout2.textContent = MEAN[DIRS[i]]; } else { readout.textContent = `${DIRS[i]}: ${MEAN[DIRS[i]]}`; readout2.textContent = ''; }
      };
      const btns = [];
      for (let i = 0; i < 8; i++) {
        if (points === 4 && i % 2) continue;
        const ang = (i * 45 * Math.PI) / 180; const br = i % 2 ? 60 : 63;
        const x = rc[0] + Math.sin(ang) * br; const y = rc[1] - Math.cos(ang) * br;
        const g = kit.el('g', { class: 'mc-dirbtn', tabindex: o.print ? null : 0, role: o.print ? null : 'button', 'aria-label': `${DIRS[i]}쪽${MEAN[DIRS[i]] ? ` (${MEAN[DIRS[i]]})` : ''}` }, Rin);
        kit.el('circle', { cx: x, cy: y, r: 23, class: 'pk-hit' }, g);
        const pc = kit.piece(st, g, { shape: { type: 'circle', r: i % 2 ? 13.5 : 15, cx: x, cy: y }, color: i === 0 ? 'rose' : 'cream', depth: 1 });
        if (showLabel(i)) kit.el('text', { x, y: y + (i % 2 ? 3.8 : 4.6), 'text-anchor': 'middle', 'font-size': i % 2 ? 11.5 : 13, class: 'pk-text', fill: '#3D352E' }, g).textContent = DIRS[i];
        btns.push({ i, g, pc });
        if (!o.print) {
          const go = () => { if (mode !== 'direction') return; kit.tick(); pointTo(i * 45, true); };
          g.addEventListener('click', go);
          g.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } });
          if (tipOn && MEAN[DIRS[i]]) {
            g.addEventListener('focus', () => showTip(i)); g.addEventListener('pointerenter', () => showTip(i));
            g.addEventListener('blur', () => paintDir()); g.addEventListener('pointerleave', () => paintDir());
          }
        }
      }

      // ---- 바늘(방위표 가운데) + 출발 건물 위 화살표: 같은 값을 공유한다 ----
      let dirIdx = null; let lock = false;
      let stopSpin = null; // 방위 단추로 시작한 스프링 — 새로 누르거나 손으로 돌리면 멈춘다
      const halt = () => { if (stopSpin) { stopSpin(); stopSpin = null; } };
      const needleOuter = kit.el('g', { transform: `translate(${rc[0]} ${rc[1]})` }, Rin);
      const needle = kit.el('g', { class: 'mc-needle' }, needleOuter);
      kit.el('rect', { x: -22, y: -38, width: 44, height: 76, class: 'pk-hit' }, needle);
      kit.piece(st, needle, { shape: { type: 'path', d: 'M0 -34 L8 0 L-8 0 Z' }, color: 'rose', depth: 1 });
      kit.piece(st, needle, { shape: { type: 'path', d: 'M0 34 L8 0 L-8 0 Z' }, color: 'cream', depth: 1 });
      kit.piece(st, needleOuter, { shape: { type: 'circle', r: 5 }, color: 'ink', depth: 0 });
      const arrowOuter = kit.el('g', { class: 'mc-arrow-wrap' }, st.layer('arrow'));
      const arrow = kit.el('g', { class: 'mc-arrow' }, arrowOuter);
      // 화살표는 건물 둘레를 돈다(축이 건물 가운데라 건물 기호·이름을 가리지 않게 화살표는 바깥쪽에서 시작)
      kit.el('rect', { x: -22, y: -84, width: 44, height: 64, class: 'pk-hit' }, arrow);
      kit.piece(st, arrow, { shape: { type: 'path', d: 'M-4.5 -30 L-4.5 -58 L-13 -58 L0 -80 L13 -58 L4.5 -58 L4.5 -30 Z' }, color: 'mint', depth: 2 });
      // 건물 이름은 화살표보다 위 층에 흰 테두리로 쓴다 — 처음에 북쪽을 향한 화살표가 '시청' 이름을 덮지 않게
      if (showNames) {
        const NL = st.layer('names');
        for (const p of PLACES) {
          if (hidden.has(p.name)) continue;
          kit.el('text', { x: p.x, y: p.y + 36, 'text-anchor': 'middle', 'font-size': narrow ? 16 : 12, class: 'pk-text mc-name', fill: '#3D352E', stroke: '#FBF6EA', 'stroke-width': 3.5, 'stroke-linejoin': 'round', 'paint-order': 'stroke', 'pointer-events': 'none' }, NL).textContent = p.name;
        }
      }

      const step = points === 4 ? 90 : 45;
      const idxOf = (v) => Math.round(K.norm(v) / 45) % 8;
      const paintDir = () => {
        const on = dirIdx != null;
        needle.setAttribute('opacity', on ? 1 : 0.45); arrow.setAttribute('opacity', on ? 1 : 0.35);
        const show = !(o.print || o.showReadout === false || mode !== 'direction');
        readout.textContent = !show ? '' : on ? `내 답: ${DIRS[dirIdx]}쪽` : (narrow ? '단추를 누르거나' : '바늘을 돌려 보세요');
        readout2.textContent = show && !on && narrow ? '바늘을 돌려요' : '';
        btns.forEach((b) => b.g.classList.toggle('pk-ok', on && b.i === dirIdx));
      };
      const onTurn = (v, via, other) => {
        if (lock) return; lock = true; other.set(v); lock = false;
        // 단추 스프링('program')은 dirIdx를 다시 계산하지 않는다 — 빨리 다른 단추를 누르면 앞 스프링이 답을 되돌리던 문제
        if (via !== 'init' && via !== 'program') { dirIdx = idxOf(v); paintDir(); }
      };
      const done = () => { kit.recorder.log('mapcompass', state()); if (dirIdx != null) kit.announce(`${DIRS[dirIdx]}쪽을 골랐어요`); };
      const enabled = () => mode === 'direction' && !o.print;
      const nR = kit.rotate(st, needle, { center: [0, 0], step, value: 0, label: '방위표 바늘', enabled, valueText: (v) => `${DIRS[idxOf(v)]}쪽`, onChange: (v, via) => onTurn(v, via, aR), onStart: () => { halt(); kit.tick(); }, onEnd: done });
      const aR = kit.rotate(st, arrow, { center: [0, 0], step, value: 0, label: '방향 화살표', enabled, valueText: (v) => `${DIRS[idxOf(v)]}쪽`, onChange: (v, via) => onTurn(v, via, nR), onStart: () => { halt(); kit.tick(); }, onEnd: done });
      const pointTo = (deg, animate) => {
        halt();
        const cur = nR.get(); let d = deg - K.norm(cur); if (d > 180) d -= 360; if (d < -180) d += 360;
        const target = cur + d; dirIdx = idxOf(target); paintDir();
        if (animate) { stopSpin = nR.set(target, true); } else { lock = true; nR.set(target); aR.set(target); lock = false; }
        if (animate) done();
      };
      const placeArrow = () => {
        const show = mode === 'direction' && from && !o.print;
        arrowOuter.setAttribute('display', show ? 'inline' : 'none');
        if (from) arrowOuter.setAttribute('transform', `translate(${from.x} ${from.y})`);
      };
      if (mode !== 'direction' || o.print) { needle.setAttribute('display', o.print ? 'none' : 'inline'); }
      if (mode !== 'direction') { needle.setAttribute('display', 'none'); btns.forEach((b) => { b.g.removeAttribute('tabindex'); b.g.removeAttribute('role'); }); }

      // ---- 범례 ----
      const legendSlot = {};
      const legendNames = o.legendNames || PLACES.map((p) => p.name);
      if (o.legend !== false) {
        const Lg = st.layer('legend');
        kit.piece(st, Lg, { shape: { type: 'rect', x: L.LX, y: L.LY, w: L.LW, h: L.LH, rx: 12 }, color: 'lavender', depth: 2, fill: '#F4F0FA' });
        kit.el('text', { x: L.LX + L.LW / 2, y: L.LY + (narrow ? 23 : 17), 'text-anchor': 'middle', 'font-size': narrow ? 16 : 13, class: 'pk-text', fill: '#473B6B' }, Lg).textContent = '범례 (기호의 뜻)';
        const colW = narrow ? 112 : 74; const rowH = narrow ? 32 : 26.5; const fs = narrow ? 16 : 12;
        legendNames.forEach((name, k) => {
          const p = byName[name]; const col = k % L.cols; const row = Math.floor(k / L.cols);
          const x = L.LX + (narrow ? 12 : 8) + col * colW; const y = L.LY + (narrow ? 50 : 37) + row * rowH;
          if (blank.has(name)) {
            kit.el('circle', { cx: x + 12, cy: y, r: 11.5, fill: '#fff', stroke: '#8C7F6E', 'stroke-dasharray': '3 3', 'stroke-width': 1.3, role: 'img', 'aria-label': `${name} 빈칸` }, Lg);
            legendSlot[name] = { x: x + 12, y };
          } else {
            kit.piece(st, Lg, { shape: { type: 'circle', r: 11.5, cx: x + 12, cy: y }, color: 'cream', depth: 1 });
            const gl = glyph(kit, Lg, p.sym); gl.setAttribute('transform', `translate(${x + 12} ${y}) scale(0.82)`);
          }
          kit.el('text', { x: x + 28, y: y + fs * 0.38, 'font-size': fs, class: 'pk-text', fill: '#3D352E' }, Lg).textContent = name;
        });
      }

      // ---- 스티커(legend/place 모드) ----
      const slots = mode === 'legend' ? legendSlot : mode === 'place' ? siteSlot : {};
      const stickers = [];
      const assign = {}; // slotName -> sticker
      // 스티커마다 움직임 번호(anim)를 둔다. 끌기를 시작하면 번호가 바뀌어, 틀린 뒤 흔들림·튀기·제자리 이동이 손으로 옮긴 자리를 덮지 않는다.
      const moveTo = (sk, to) => { const tok = ++sk.anim; const from = Object.assign({}, sk.g.__pk || { x: 0, y: 0 }); return kit.tween(220, (p) => { if (tok === sk.anim) kit.transform(sk.g, { x: from.x + (to.x - from.x) * p, y: from.y + (to.y - from.y) * p, s: 1 }); }).then(() => tok === sk.anim); };
      if (withTray) {
        const T = st.layer('tray');
        kit.piece(st, T, { shape: { type: 'rect', x: 8, y: L.TY, w: L.W - 16, h: trayH, rx: 14 }, color: 'buttercup', depth: 2, fill: '#FFF9E8', texture: true });
        kit.el('text', { x: 20, y: L.TY + 18, 'font-size': narrow ? 16 : 12, class: 'pk-text', fill: '#6E530F' }, T).textContent = '기호 스티커';
        const syms = Object.keys(slots).map((n) => byName[n].sym).concat((o.extra || []).map((n) => byName[n] ? byName[n].sym : n));
        // 놓인 순서와 칸 순서가 같지 않게 섞는다(고정 순서: 매번 같은 화면이어야 수업이 쉽다)
        const order = syms.slice(2).concat(syms.slice(0, 2)).reverse();
        const S = st.layer('stickers');
        const gap = narrow ? 64 : Math.min(62, 420 / Math.max(1, order.length));
        order.forEach((sym, i) => {
          const home = narrow ? { x: 46 + (i % L.perRow) * gap, y: L.TY + 56 + Math.floor(i / L.perRow) * 60 } : { x: 112 + i * gap, y: 398 };
          const g = kit.el('g', { class: 'mc-sticker', 'aria-label': `${SYM_SHAPE[sym] || '기호'} 기호 스티커` }, S);
          kit.el('circle', { r: narrow ? 29 : 24, class: 'pk-hit' }, g);
          kit.piece(st, g, { shape: { type: 'circle', r: 15 }, color: 'cream', depth: 2 });
          glyph(kit, g, sym);
          kit.transform(g, home);
          const sk = { sym, g, home, at: null, anim: 0 };
          stickers.push(sk);
          const nearest = (x, y) => { let best = null; let bd = 30; for (const n in slots) { const d = Math.hypot(slots[n].x - x, slots[n].y - y); if (d < bd) { bd = d; best = n; } } return best; };
          const lotName = (slot) => (mode === 'legend' ? `${slot} 칸` : `빈 터 ${Object.keys(slots).indexOf(slot) + 1}`);
          const putAt = (slot, via) => {
            if (sk.at) delete assign[sk.at];
            if (slot) {
              const prev = assign[slot];
              if (prev && prev !== sk) { prev.at = null; moveTo(prev, prev.home); }
              assign[slot] = sk; sk.at = slot;
              moveTo(sk, slots[slot]).then((still) => { if (still && sk.at === slot) bounce(sk, slots[slot]); });
            } else { sk.at = null; moveTo(sk, home); }
            kit.tick(); kit.recorder.log('mapcompass', state());
            kit.announce(slot ? `${SYM_SHAPE[sym] || '기호'} 스티커를 ${lotName(slot)}에 붙였어요` : '스티커를 제자리에 두었어요');
            if (via === 'keyboard') g.focus();
          };
          kit.drag(st, g, {
            enabled: () => !o.print,
            onStart: () => { sk.anim++; kit.transform(g, { s: 1 }); }, // 진행 중인 흔들림·튀기기를 멈춘다
            snap: (x, y) => { const n = nearest(x, y); return n ? slots[n] : home; },
            onDrop: (x, y, via) => putAt(nearest(x, y), via),
            // 키보드: 방향키로 옮겼다면 그 자리에 놓고, 아니면 Enter마다 다음 칸으로 차례로 옮긴다
            keyActivate: () => {
              const t = g.__pk; const anchor = sk.at ? slots[sk.at] : home;
              if (Math.hypot(t.x - anchor.x, t.y - anchor.y) > 2) { putAt(nearest(t.x, t.y), 'keyboard'); return; }
              const names = Object.keys(slots); const idx = sk.at ? names.indexOf(sk.at) : -1;
              let next = null;
              for (let k = idx + 1; k < names.length; k++) if (!assign[names[k]]) { next = names[k]; break; }
              putAt(next, 'keyboard');
            },
          });
        });
      }
      function bounce(sk, at) {
        const tok = ++sk.anim;
        const stop = kit.spring(1.25, 1, { stiffness: 260, damping: 12, onUpdate: (s) => { if (tok !== sk.anim) { stop && stop(); return; } kit.transform(sk.g, { x: at.x, y: at.y, s }); }, onDone: () => { if (tok === sk.anim) kit.transform(sk.g, { x: at.x, y: at.y, s: 1 }); } });
      }
      function wobble(g, c) {
        kit.tween(500, (p) => { const r = Math.sin(p * Math.PI * 4) * 6 * (1 - p); g.setAttribute('transform', `rotate(${r.toFixed(2)} ${c[0]} ${c[1]})`); }).then(() => g.removeAttribute('transform'));
      }
      function shake(sk, at) {
        const tok = ++sk.anim;
        kit.tween(460, (p) => { if (tok === sk.anim) kit.transform(sk.g, { x: at.x + Math.sin(p * Math.PI * 5) * 5 * (1 - p), y: at.y }); }).then(() => { if (tok === sk.anim) kit.transform(sk.g, at); });
      }
      function cheer() {
        // 방위표가 통 튀고, 도착 건물도 살짝 뛴다
        kit.spring(1.18, 1, { stiffness: 240, damping: 10, onUpdate: (s) => R.setAttribute('transform', `translate(${rcS[0] * (1 - s)} ${rcS[1] * (1 - s)}) scale(${s.toFixed(3)})`), onDone: () => R.removeAttribute('transform') });
        if (to && bldG[to.name]) { const g = bldG[to.name]; kit.tween(520, (p) => g.setAttribute('transform', `translate(0 ${(-Math.sin(p * Math.PI) * 10).toFixed(2)})`)).then(() => g.removeAttribute('transform')); }
      }

      const map = (obj) => { const r = {}; for (const n in obj) r[n] = obj[n].sym; return r; };
      function state() {
        if (mode === 'direction') return { mode, dir: dirIdx == null ? null : DIRS[dirIdx], from: from ? from.name : null, to: to ? to.name : null };
        return { mode, [mode]: map(assign) };
      }
      function setState(s) {
        s = s || {};
        if (mode === 'direction') {
          if (s.from) from = byName[s.from] || from; if (s.to) to = byName[s.to] || to;
          drawHighlights(); placeArrow();
          if (s.dir) { pointTo(DIRS.indexOf(s.dir) * 45, false); } else { halt(); dirIdx = null; lock = true; nR.set(0); aR.set(0); lock = false; paintDir(); }
          return;
        }
        const want = s[mode] || {};
        for (const k in assign) delete assign[k];
        stickers.forEach((sk) => { sk.at = null; sk.anim++; kit.transform(sk.g, { ...sk.home, s: 1 }); });
        for (const n in want) {
          const sk = stickers.find((x) => x.sym === want[n] && !x.at);
          if (sk && slots[n]) { sk.at = n; assign[n] = sk; kit.transform(sk.g, slots[n]); }
        }
      }
      drawHighlights(); placeArrow(); paintDir();

      // 활동지: 그림이 한 칸(1/3)에 갇히면 글자가 너무 작아진다 → 줄 전체를 쓴다
      if (o.print && o.wide !== false) {
        const fig = box.closest('figure'); if (fig) fig.style.gridColumn = '1 / -1';
        st.svg.style.maxHeight = '96mm';
      }

      return {
        getState: state,
        setState,
        setTarget(t) {
          // 문항 데이터 검사: 지도 좌표로 계산한 방위와 정답이 다르면 저자에게 알린다
          if (t && t.direction && t.from && t.to && byName[t.from] && byName[t.to] && !(t.legend || t.place) && dirOf(byName[t.from], byName[t.to]) !== t.direction) console.warn(`mapcompass: ${t.from}→${t.to}는 ${dirOf(byName[t.from], byName[t.to])}쪽인데 정답이 ${t.direction}`);
          if (t && (t.from || t.to)) { if (t.from) from = byName[t.from]; if (t.to) to = byName[t.to]; drawHighlights(); placeArrow(); } },
        reset() { setState({}); },
        solve(t) {
          const want = t.legend || t.place;
          if (want) { const cur = map(assign); setState({ [mode]: Object.assign(cur, want) }); return; }
          if (t.direction) { if (t.from || t.to) this.setTarget(t); pointTo(DIRS.indexOf(t.direction) * 45, false); }
        },
        check(t) {
          const want = t.legend || t.place;
          if (want) {
            const cur = map(assign); const names = Object.keys(want);
            const wrong = names.filter((n) => cur[n] !== want[n]);
            if (!wrong.length) { stickers.forEach((sk) => { if (sk.at && names.includes(sk.at)) bounce(sk, slots[sk.at]); }); return { correct: true, feedback: mode === 'legend' ? '범례를 알맞게 완성했어요! 이제 지도를 읽을 수 있어요.' : '알맞은 곳에 기호를 붙였어요!' }; }
            stickers.forEach((sk) => { if (sk.at && wrong.includes(sk.at)) shake(sk, slots[sk.at]); });
            const n0 = wrong[0];
            const empty = wrong.filter((n) => !cur[n]).length;
            if (mode === 'place') {
              const hintPlace = t.from && t.direction ? `${t.from}에서 ${t.direction}쪽에 있는 빈 터를 찾아요.` : `범례에서 ${n0} 기호를 먼저 찾아요.`;
              return { correct: false, feedback: empty === wrong.length ? `${n0} 기호를 아직 붙이지 않았어요.` : '기호를 붙인 곳을 다시 확인해요.', hint: hintPlace };
            }
            return { correct: false, feedback: `${names.length - wrong.length}개 맞았어요. ${empty ? '빈칸이 남았어요.' : '자리를 바꿔 볼 기호가 있어요.'}`, hint: `${n0}: ${SYM_HINT[want[n0]] || '기호 모양을 보고 그 곳에서 하는 일을 떠올려요.'}` };
          }
          if (t.direction) {
            const f = t.from ? byName[t.from] : from; const tt = t.to ? byName[t.to] : to;
            const lead = f && tt ? `${f.name}에서 보면 ${josa(tt.name, '은', '는')}` : '';
            if (dirIdx == null) return { correct: false, feedback: '바늘이나 화살표를 돌려 방위를 골라 보세요.', hint: '방위표의 빨간 바늘 끝이 가리키는 쪽이 내가 고른 방위예요.' };
            if (DIRS[dirIdx] === t.direction) { cheer(); return { correct: true, feedback: `맞아요! ${lead ? lead + ' ' : ''}${t.direction}쪽이에요.` }; }
            wobble(R, rcS);
            const want = DIRS.indexOf(t.direction); const diff = Math.abs(((dirIdx - want) % 8 + 8) % 8);
            const hintBase = f && tt ? `${f.name}에 방위표를 올려놓았다고 생각하고, ${josa(tt.name, '이', '가')} 위(북)·아래(남)·오른쪽(동)·왼쪽(서) 중 어디로 치우쳤는지 보세요.` : '지도의 위쪽이 북쪽, 오른쪽이 동쪽이에요.';
            if (diff === 4) return { correct: false, feedback: `정반대 방향(${DIRS[dirIdx]}쪽)을 골랐어요. "여기서" 건물을 다시 확인해요.`, hint: `"어디에서 보았을 때"가 중요해요. ${hintBase}` };
            const mine = DIRS[dirIdx]; const mineSay = MEAN[mine] ? `${mine}쪽(${MEAN[mine]})` : `${mine}쪽`;
            if (diff === 1 || diff === 7) {
              // 사이 방위 이름을 풀어서 보여 준다. 예시는 정답이 아닌 사이 방위로 든다(답을 알려 주지 않게).
              const ex = ['북동', '남동', '남서', '북서'].find((d) => d !== t.direction && d !== mine);
              return { correct: false, feedback: `아주 가까워요! 지금은 ${mineSay}을 골랐어요. 바로 옆 방위를 살펴봐요.`, hint: t.direction.length === 2 ? `두 방위 사이는 북·남을 앞에 붙여 불러요. 예를 들어 ${MEAN[ex]}는 ${josa(ex, '이에요', '예요')}. ${hintBase}` : hintBase };
            }
            return { correct: false, feedback: `지금은 ${mineSay}을 골랐어요. 다시 생각해 볼까요?`, hint: hintBase };
          }
          return { correct: false, feedback: '확인할 문제가 없어요.' };
        },
        async demo(t) {
          if (t && t.direction) {
            this.setTarget(t); halt();
            const from0 = nR.get(); let d = DIRS.indexOf(t.direction) * 45 - K.norm(from0); if (d > 180) d -= 360; if (d < -180) d += 360; d += 360; // 한 바퀴 돌고 멈춘다
            await kit.tween(1500, (p) => { lock = true; nR.set(from0 + d * p); aR.set(from0 + d * p); lock = false; });
            dirIdx = idxOf(from0 + d); paintDir(); cheer();
          }
        },
      };
    },
  });
})(window.PaperKit);
