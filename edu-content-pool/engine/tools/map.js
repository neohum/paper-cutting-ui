/* 레이어드 종이 지도 — 차시가 준 칸 지도(장소 기호·이름, 지형 층, 지역, 강·길)를 보고 핀을 놓고, 방위를 읽고, 범례를 채우고, 축척으로 거리를 잰다.
 * 고장·지역·우리나라·세계를 단순한 칸 지도로 그린다(실제 지도 그림을 쓰지 않는다). 지도는 북쪽 화살표(north)가 가리키는 쪽이 북쪽이다.
 *
 * 모드(o.mode)            무엇을 하나                                           상태                        target
 * ----------------------  ----------------------------------------------------  --------------------------  ----------------------------------------------
 * 'pin'(기본)             핀을 끌어(또는 칸을 눌러) 알맞은 칸에 꽂는다             { pin: [열, 행] | null }     { at:[열,행] } | { place:'학교' } | { region:'강원' }
 *                                                                                                            | { from:'학교', dir:'동', steps?:2 }(steps 없으면 그 방향 줄 어디든)
 *                                                                                                            | { highest:true } | { lowest:true } | { height:2 }
 *                                                                                                            | { most:true } | { least:true }(지역 value가 가장 큰/작은 지역)
 *                                                                                                            | { river:true }(강이 지나는 칸) | { sea:true }
 * 'terrain'               'pin'과 같다 — 지형 층(heights)을 꼭 그리고 높이 범례를 띄운다
 * 'compass'               방위표를 돌려 지도 북쪽에 맞추고, 출발→도착 방위를 고른다 { rose: 0~315, dir: '북동'|null } { dir?:'북동', from?:'학교', to?:'병원', align?:true }
 *                                                                                                            (dir이 없으면 from·to 자리로 계산한다. align = 방위표 북쪽을 지도 북쪽에 맞춤)
 * 'legend'                범례 빈칸을 눌러 기호의 뜻을 고른다                     { legend: { 기호: 이름|null } } { legend: { school:'학교', … } }(없으면 meanings 전부)
 * 'scale'                 출발·도착 사이 길(칸)을 세고 축척으로 거리를 넣는다      { dist: 수 | null }          { from:'학교', to:'역' } | { dist: 1500 }
 * (활동지 print)           compass 방위표는 방위 글자 없이 빈 동그라미로 찍힌다(학생이 써 넣음)
 * (모든 모드)              ask 보기 고르기를 함께 쓸 수 있다                        + pick: 번호|null            + pick: 정답 번호 (ask만 묻는 문항은 { pick } 하나)
 *
 * 옵션
 *   grid [열, 행](기본 [6,4]) · places [{ name, icon, at:[열,행], legend? }](legend = 범례에 쓸 이름 — 'field'를 '밭'으로, 'park'를 '화단'으로. meanings가 있으면 그쪽이 먼저) · names(지도에 장소 이름, 기본 참 — legend 모드 기본 거짓)
 *   heights 2차원 배열(행마다 칸 높이 0~4, -1 = 바다) · terrainView 'layers'(색 층) | 'contour'(등고선만) · heightNames ['낮은 땅','언덕','산','높은 산','아주 높은 산']
 *   regions [{ name, cells:[[열,행]…], color?, value? }] · regionNames(지역 이름 표시, 기본 참) · regionValues(이름 옆에 value 표시) · unit(value 단위 글자)
 *   choropleth(value 크기로 진하기 — 범례 함께) · rivers [[[열,행]…]…] · roads [[[열,행]…]…] · sea [[열,행]…]
 *   north(지도 북쪽 화살표의 화면 각도, 시계 방향 — 0 = 위, 90 = 오른쪽) · points 4|8(방위 단추) · roseStart(방위표 처음 각도)
 *   colLabels / rowLabels(칸 머리 글자 — 좌표·위도·경도) · scale { cell: 500, unit: 'm' }(한 칸 거리) · distStep(거리 단추 한 번에 늘어나는 값, 기본 scale.cell)
 *   showCells(scale: 길 위 칸에 1·2·3… 번호 — 쉬움) · legend(범례 보이기, 기본 참) · meanings { 기호: 이름 }(legend 모드 뜻) · extra [헷갈리게 더 줄 이름]
 *   from / to(강조할 장소 — compass·scale은 target에서도 읽는다) · readout(핀·방위표 읽기 글자 보이기) · revealAfterCheck(읽기 글자는 맞힌 확인 뒤에만)
 *   ask { q, choices[], why?[] } · readOnly(핀·방위표·빈칸 잠금 — 읽고 고르는 문항) · title(지도 제목) · print(활동지: 핀·읽기·정답 이름 숨김)
 * 기호(icon): school 학교, hospital 병원, post 우체국, police 경찰서, fire 소방서, office 시청·구청, park 공원, mountain 산, temple 절,
 *   heritage 문화유산, museum 박물관, station 기차역, bus 버스 터미널, market 시장, library 도서관, house 집, apartment 아파트, factory 공장,
 *   field 논·밭, orchard 과수원, port 항구, airport 공항, bridge 다리, beach 해수욕장, city 도시, capital 수도, island 섬, forest 숲,
 *   lighthouse 등대, castle 성, dot 장소
 * 키보드: 핀 — 방향키 한 칸씩(처음 누르면 지도 가운데로), Enter/Space 내려놓기. 방위표 — 방향키 45°(points 4면 90°). 단추 — Tab·Enter.
 * 예) 핀: { tool:'map', options:{ places:[{name:'학교',icon:'school',at:[2,1]}] }, target:{ from:'학교', dir:'동', steps:2 } }
 *     방위: options:{ mode:'compass', north:90, places:[…] }, target:{ from:'학교', to:'병원' }
 *     축척: options:{ mode:'scale', scale:{ cell:500, unit:'m' }, places:[…] }, target:{ from:'학교', to:'역' }
 */
(function (K) {
  'use strict';
  const DIRS8 = ['북', '북동', '동', '남동', '남', '남서', '서', '북서'];
  const DIRS4 = ['북', '동', '남', '서'];
  const has = (w) => { const c = String(w).charCodeAt(String(w).length - 1); return c >= 0xac00 && c <= 0xd7a3 && (c - 0xac00) % 28 !== 0; };
  const josa = (w, a, b) => `${w}${has(w) ? a : b}`;
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const levelOf = (opts) => {
    const want = opts && Number.isInteger(opts.level) ? opts.level : 1;
    const a = opts && Number.isFinite(opts.attempts) ? opts.attempts : null;
    return Math.max(1, Math.min(3, want, a == null ? 3 : a >= 2 ? 3 : a >= 1 ? 2 : 1));
  };
  const norm = (v) => ((v % 360) + 360) % 360;
  const fmt = (n) => Number(n).toLocaleString('ko-KR');

  // ---- 지도 기호: 40×40 안쪽 종이 조각. 흑백 활동지에서도 모양으로 구별된다 ----
  const ICONS = {
    school: { name: '학교', color: 'buttercup', draw: (kit, st, g) => { kit.el('rect', { x: -9, y: -14, width: 3, height: 28, fill: '#3D352E' }, g); kit.piece(st, g, { shape: { type: 'poly', points: '-6,-14 14,-8 -6,-2' }, color: 'buttercup', depth: 1 }); } },
    hospital: { name: '병원', color: 'rose', draw: (kit, st, g) => kit.piece(st, g, { shape: { type: 'path', d: 'M-5 -14 h10 v9 h9 v10 h-9 v9 h-10 v-9 h-9 v-10 h9 Z' }, color: 'rose', depth: 1 }) },
    post: { name: '우체국', color: 'peach', draw: (kit, st, g) => { kit.piece(st, g, { shape: { type: 'rect', w: 28, h: 20, rx: 2 }, color: 'peach', depth: 1 }); kit.el('path', { d: 'M-14 -10 L0 2 L14 -10', fill: 'none', stroke: '#6E3B21', 'stroke-width': 2 }, g); } },
    police: { name: '경찰서', color: 'sky', draw: (kit, st, g) => kit.piece(st, g, { shape: { type: 'path', d: 'M0 -15 L13 -9 Q13 8 0 15 Q-13 8 -13 -9 Z' }, color: 'sky', depth: 1 }) },
    fire: { name: '소방서', color: 'rose', draw: (kit, st, g) => kit.piece(st, g, { shape: { type: 'path', d: 'M0 -15 Q11 -3 9 6 Q7 14 0 14 Q-7 14 -9 6 Q-10 -2 -3 -7 Q-3 0 1 1 Q4 -7 0 -15 Z' }, color: 'peach', depth: 1 }) },
    office: { name: '시청', color: 'lavender', draw: (kit, st, g) => { kit.piece(st, g, { shape: { type: 'circle', r: 14 }, color: 'lavender', depth: 1 }); kit.el('circle', { r: 7, fill: 'none', stroke: '#473B6B', 'stroke-width': 2.5 }, g); } },
    park: { name: '공원', color: 'mint', draw: (kit, st, g) => { kit.el('rect', { x: -2, y: 2, width: 4, height: 12, fill: '#6E3B21' }, g); kit.piece(st, g, { shape: { type: 'circle', r: 11, cy: -4 }, color: 'mint', depth: 1 }); } },
    mountain: { name: '산', color: 'mint', draw: (kit, st, g) => kit.piece(st, g, { shape: { type: 'poly', points: '-15,12 0,-14 15,12' }, color: 'mint', depth: 1 }) },
    temple: { name: '절', color: 'peach', draw: (kit, st, g) => { kit.piece(st, g, { shape: { type: 'path', d: 'M-16 -2 Q0 -14 16 -2 Z' }, color: 'peach', depth: 1 }); kit.piece(st, g, { shape: { type: 'rect', x: -9, y: -2, w: 18, h: 14 }, color: 'buttercup', depth: 1 }); } },
    heritage: { name: '문화유산', color: 'buttercup', draw: (kit, st, g) => kit.piece(st, g, { shape: { type: 'path', d: 'M-14 13 V-4 Q-14 -14 0 -14 Q14 -14 14 -4 V13 H7 V-2 Q7 -7 0 -7 Q-7 -7 -7 -2 V13 Z' }, color: 'buttercup', depth: 1 }) },
    museum: { name: '박물관', color: 'lavender', draw: (kit, st, g) => { kit.piece(st, g, { shape: { type: 'poly', points: '-15,-6 0,-15 15,-6' }, color: 'lavender', depth: 1 }); [-10, -2, 6].forEach((x) => kit.el('rect', { x, y: -5, width: 4, height: 15, fill: '#473B6B' }, g)); kit.el('rect', { x: -15, y: 10, width: 30, height: 3, fill: '#473B6B' }, g); } },
    station: { name: '기차역', color: 'sky', draw: (kit, st, g) => { kit.piece(st, g, { shape: { type: 'rect', w: 28, h: 18, rx: 4, y: -12, x: -14 }, color: 'sky', depth: 1 }); [-8, 8].forEach((x) => kit.el('circle', { cx: x, cy: 10, r: 3.5, fill: '#204C5A' }, g)); kit.el('rect', { x: -9, y: -8, width: 18, height: 6, fill: '#FFFFFF', opacity: 0.8 }, g); } },
    bus: { name: '버스 터미널', color: 'buttercup', draw: (kit, st, g) => { kit.piece(st, g, { shape: { type: 'rect', w: 30, h: 16, rx: 5, x: -15, y: -11 }, color: 'buttercup', depth: 1 }); [-9, 9].forEach((x) => kit.el('circle', { cx: x, cy: 8, r: 3.5, fill: '#3D352E' }, g)); } },
    market: { name: '시장', color: 'peach', draw: (kit, st, g) => { kit.piece(st, g, { shape: { type: 'path', d: 'M-15 -6 L-11 -14 H11 L15 -6 Z' }, color: 'rose', depth: 1 }); kit.piece(st, g, { shape: { type: 'rect', x: -12, y: -6, w: 24, h: 18 }, color: 'peach', depth: 1 }); } },
    library: { name: '도서관', color: 'mint', draw: (kit, st, g) => { kit.piece(st, g, { shape: { type: 'path', d: 'M0 -9 Q-8 -14 -15 -11 V11 Q-8 8 0 12 Q8 8 15 11 V-11 Q8 -14 0 -9 Z' }, color: 'mint', depth: 1 }); kit.el('line', { x1: 0, y1: -9, x2: 0, y2: 12, stroke: '#275C46', 'stroke-width': 2 }, g); } },
    house: { name: '집', color: 'peach', draw: (kit, st, g) => { kit.piece(st, g, { shape: { type: 'rect', x: -10, y: -2, w: 20, h: 14 }, color: 'peach', depth: 1 }); kit.piece(st, g, { shape: { type: 'poly', points: '-14,-1 0,-14 14,-1' }, color: 'rose', depth: 1 }); } },
    apartment: { name: '아파트', color: 'sky', draw: (kit, st, g) => { kit.piece(st, g, { shape: { type: 'rect', x: -9, y: -15, w: 18, h: 29 }, color: 'sky', depth: 1 }); for (let r = 0; r < 3; r++) for (let c = 0; c < 2; c++) kit.el('rect', { x: -5 + c * 6, y: -11 + r * 8, width: 4, height: 4, fill: '#204C5A' }, g); } },
    factory: { name: '공장', color: 'lavender', draw: (kit, st, g) => { kit.piece(st, g, { shape: { type: 'path', d: 'M-15 13 V-2 L-7 -8 V-2 L1 -8 V-2 L9 -8 V-15 H14 V13 Z' }, color: 'lavender', depth: 1 }); } },
    field: { name: '논', color: 'buttercup', draw: (kit, st, g) => { kit.el('line', { x1: -14, y1: 6, x2: 14, y2: 6, stroke: '#6E530F', 'stroke-width': 2.5 }, g); [-8, 0, 8].forEach((x) => kit.el('line', { x1: x, y1: 6, x2: x, y2: -8, stroke: '#6E530F', 'stroke-width': 2.5 }, g)); } },
    orchard: { name: '과수원', color: 'rose', draw: (kit, st, g) => { kit.piece(st, g, { shape: { type: 'circle', r: 12, cy: 2 }, color: 'rose', depth: 1 }); kit.el('circle', { cx: 0, cy: 2, r: 3, fill: '#702830' }, g); kit.el('path', { d: 'M0 -10 Q4 -16 8 -14', fill: 'none', stroke: '#275C46', 'stroke-width': 2.5 }, g); } },
    port: { name: '항구', color: 'sky', draw: (kit, st, g) => { kit.el('path', { d: 'M0 -14 V12 M-7 -7 H7 M-13 2 Q-12 12 0 12 Q12 12 13 2', fill: 'none', stroke: '#204C5A', 'stroke-width': 3, 'stroke-linecap': 'round' }, g); kit.el('circle', { cx: 0, cy: -14, r: 3, fill: '#204C5A' }, g); } },
    airport: { name: '공항', color: 'sky', draw: (kit, st, g) => kit.piece(st, g, { shape: { type: 'path', d: 'M-2 -15 H2 V-4 L15 3 V7 L2 2 V9 L6 13 V15 L0 13 L-6 15 V13 L-2 9 V2 L-15 7 V3 L-2 -4 Z' }, color: 'sky', depth: 1 }) },
    bridge: { name: '다리', color: 'peach', draw: (kit, st, g) => { kit.el('path', { d: 'M-16 4 Q0 -14 16 4', fill: 'none', stroke: '#6E3B21', 'stroke-width': 3 }, g); kit.el('line', { x1: -16, y1: 4, x2: 16, y2: 4, stroke: '#6E3B21', 'stroke-width': 3 }, g); [-8, 0, 8].forEach((x) => kit.el('line', { x1: x, y1: 4, x2: x, y2: x ? -3 : -5, stroke: '#6E3B21', 'stroke-width': 2 }, g)); } },
    beach: { name: '해수욕장', color: 'buttercup', draw: (kit, st, g) => { kit.piece(st, g, { shape: { type: 'path', d: 'M-14 -2 Q0 -18 14 -2 Z' }, color: 'rose', depth: 1 }); kit.el('line', { x1: 0, y1: -4, x2: 0, y2: 13, stroke: '#3D352E', 'stroke-width': 2.5 }, g); } },
    city: { name: '도시', color: 'ink', draw: (kit, st, g) => { kit.el('circle', { r: 9, fill: '#FFFFFF', stroke: '#3D352E', 'stroke-width': 3 }, g); kit.el('circle', { r: 4, fill: '#3D352E' }, g); } },
    capital: { name: '수도', color: 'rose', draw: (kit, st, g) => { kit.el('circle', { r: 13, fill: '#FFFFFF', stroke: '#702830', 'stroke-width': 2.5 }, g); const pts = []; for (let i = 0; i < 10; i++) { const a = (Math.PI / 5) * i - Math.PI / 2; const r = i % 2 ? 4 : 9; pts.push(`${(Math.cos(a) * r).toFixed(1)},${(Math.sin(a) * r).toFixed(1)}`); } kit.el('polygon', { points: pts.join(' '), fill: '#DE939B', stroke: '#702830', 'stroke-width': 1 }, g); } },
    island: { name: '섬', color: 'mint', draw: (kit, st, g) => { kit.el('path', { d: 'M-16 10 Q-8 6 0 10 T16 10', fill: 'none', stroke: '#204C5A', 'stroke-width': 2 }, g); kit.piece(st, g, { shape: { type: 'path', d: 'M-12 7 Q-8 -10 0 -12 Q9 -10 12 7 Z' }, color: 'mint', depth: 1 }); } },
    forest: { name: '숲', color: 'mint', draw: (kit, st, g) => { [-7, 7].forEach((x) => kit.piece(st, g, { shape: { type: 'poly', points: `${x - 8},10 ${x},-12 ${x + 8},10` }, color: 'mint', depth: 1 })); } },
    lighthouse: { name: '등대', color: 'rose', draw: (kit, st, g) => { kit.piece(st, g, { shape: { type: 'poly', points: '-5,-10 5,-10 8,14 -8,14' }, color: 'cream', depth: 1 }); kit.el('rect', { x: -6, y: 0, width: 13, height: 5, fill: '#DE939B' }, g); kit.piece(st, g, { shape: { type: 'rect', x: -5, y: -16, w: 10, h: 6 }, color: 'buttercup', depth: 1 }); } },
    castle: { name: '성', color: 'lavender', draw: (kit, st, g) => kit.piece(st, g, { shape: { type: 'path', d: 'M-15 13 V-12 H-10 V-7 H-5 V-12 H0 V-7 H5 V-12 H10 V-7 H15 V13 H4 V4 Q0 0 -4 4 V13 Z' }, color: 'lavender', depth: 1 }) },
    dot: { name: '장소', color: 'ink', draw: (kit, st, g) => kit.piece(st, g, { shape: { type: 'circle', r: 8 }, color: 'peach', depth: 1 }) },
  };
  const LEVEL_FILL = ['#EAF7F1', '#A3D8C3', '#FEE396', '#F7BA9E', '#E69D7B'];
  const LEVEL_DEPTH = [0, 1, 2, 3, 4];
  const HEIGHT_NAMES = ['낮은 땅', '언덕', '산', '높은 산', '아주 높은 산'];
  const REGION_TINT = ['peach', 'mint', 'lavender', 'buttercup', 'sky', 'rose'];

  K.registerTool('map', {
    name: '종이 지도',
    create(box, o, kit) {
      const P = kit.palette; const print = !!o.print;
      const mode = ['pin', 'terrain', 'compass', 'legend', 'scale'].includes(o.mode) ? o.mode : 'pin';
      const pinMode = mode === 'pin' || mode === 'terrain';
      const [COLS, ROWS] = Array.isArray(o.grid) && o.grid.length === 2 ? o.grid.map((n) => Math.max(1, Math.min(14, Math.round(n)))) : [6, 4];
      const places = (o.places || []).filter((p) => p && p.name && Array.isArray(p.at)).map((p) => ({ name: String(p.name), icon: ICONS[p.icon] ? p.icon : 'dot', at: [p.at[0], p.at[1]], legend: p.legend != null && String(p.legend).trim() ? String(p.legend) : null }));
      const heights = Array.isArray(o.heights) ? o.heights : null;
      const hAt = (c, r) => (heights && heights[r] && Number.isFinite(heights[r][c]) ? heights[r][c] : null);
      const hv = (c, r) => { const h = hAt(c, r); return h == null ? -99 : h; };
      const seaSet = new Set((o.sea || []).map((x) => `${x[0]},${x[1]}`));
      if (heights) heights.forEach((row, r) => row.forEach((v, c) => { if (v < 0) seaSet.add(`${c},${r}`); }));
      const regions = (o.regions || []).filter((g) => g && g.name && Array.isArray(g.cells)).map((g, i) => ({ name: String(g.name), cells: g.cells.map((x) => [x[0], x[1]]), color: g.color || REGION_TINT[i % REGION_TINT.length], value: Number.isFinite(g.value) ? g.value : null }));
      const regionAt = (c, r) => regions.find((g) => g.cells.some((x) => x[0] === c && x[1] === r)) || null;
      const rivers = (o.rivers || []).filter(Array.isArray); const roads = (o.roads || []).filter(Array.isArray);
      const riverSet = new Set(); rivers.forEach((ln) => ln.forEach((x) => riverSet.add(`${x[0]},${x[1]}`)));
      const north = norm(Number(o.north) || 0);
      const points = o.points === 4 ? 4 : 8; const DIRS = points === 4 ? DIRS4 : DIRS8; const roseStep = 360 / points;
      const scale = o.scale && Number.isFinite(o.scale.cell) ? { cell: o.scale.cell, unit: o.scale.unit || 'm' } : (mode === 'scale' ? { cell: 100, unit: 'm' } : null);
      const distStep = Number.isFinite(o.distStep) && o.distStep > 0 ? o.distStep : scale ? scale.cell : 1;
      const showNames = o.names != null ? !!o.names : mode !== 'legend';
      const readOnly = !!o.readOnly;
      // 범례 이름: o.meanings > 장소의 legend(같은 기호 가운데 처음 것 — 'field'를 '밭'으로) > 기호 기본 이름
      const meanings = Object.assign({}, ...[...new Set(places.map((p) => p.icon))].map((k) => ({ [k]: (places.find((p) => p.icon === k && p.legend) || {}).legend || ICONS[k].name })), o.meanings || {});
      const legendKeys = (Array.isArray(o.legendIcons) ? o.legendIcons.filter((k) => ICONS[k]) : Object.keys(meanings)).slice(0, 8);
      const showLegend = o.legend !== false && (legendKeys.length > 0 || mode === 'legend');
      const terrainLegend = !!heights && (mode === 'terrain' || o.heightLegend !== false);
      const choropleth = !!o.choropleth && regions.some((g) => g.value != null);
      const hNames = Array.isArray(o.heightNames) && o.heightNames.length ? o.heightNames : HEIGHT_NAMES;
      const terrainView = o.terrainView === 'contour' ? 'contour' : 'layers';

      // ---- 치수: 왼쪽 지도, 오른쪽 띠(방위표·범례·축척·핀 자리) ----
      const LW = o.rowLabels ? 30 : 0; const TH = o.colLabels ? 24 : 0; const TT = o.title ? 30 : 0;
      const CELL = Math.max(40, Math.min(84, Math.floor(440 / Math.max(COLS, ROWS * 1.15))));
      const MX = 12 + LW; const MY = 12 + TT + TH; const MW = COLS * CELL; const MH = ROWS * CELL;
      const PW = 150; const GAP = 10;
      // 좁은 화면(휴대폰)에서는 띠를 지도 아래로 내려 지도 칸을 크게 둔다(칸·핀이 44px 가까이 남게)
      const boxW = box.clientWidth || (box.getBoundingClientRect ? box.getBoundingClientRect().width : 0) || 0;
      const side = print || !(boxW && boxW < 520);
      const panelItems = [];
      if (mode === 'compass') panelItems.push(['rose', 150]);
      if (pinMode && !print) panelItems.push(['home', 74]);
      if (showLegend) panelItems.push(['legend', 26 + Math.min(8, mode === 'legend' ? legendKeys.length : legendKeys.length) * (mode === 'legend' ? 50 : 34)]);
      if (terrainLegend) panelItems.push(['terrain', 26 + (Math.max(...heights.flat().filter((v) => v >= 0), 0) + 1) * 26]);
      if (choropleth) panelItems.push(['choro', 26 + 4 * 26]);
      if (scale) panelItems.push(['scale', 58]);
      const readoutOn = !print && (o.readout || false);
      if (readoutOn) panelItems.push(['readout', 54]);
      const pcols = side ? 1 : Math.max(1, Math.floor((MW + 12 + GAP) / (PW + GAP)));
      const ox = side ? MX + MW + 16 : MX - 6; const oy = side ? 12 : MY + MH + 16;
      const colH = Array(pcols).fill(oy); const slot = {};
      panelItems.forEach(([k, h]) => { const i = colH.indexOf(Math.min(...colH)); slot[k] = { x: ox + i * (PW + GAP), y: colH[i], h }; colH[i] += h + GAP; });
      const W = side ? ox + PW + 8 : Math.max(MX + MW + 18, ox + pcols * (PW + GAP));
      const H = side ? Math.max(MY + MH + 12, Math.max(...colH) + 6) : Math.max(MY + MH + 12, Math.max(...colH) + 6);
      const label = { pin: '종이 지도. 핀을 끌어 알맞은 칸에 꽂아요.', terrain: '지형 층이 있는 종이 지도. 핀을 알맞은 칸에 꽂아요.', compass: '종이 지도와 방위표. 방위표를 돌리고 방위를 골라요.', legend: '종이 지도와 범례. 기호의 뜻을 골라요.', scale: '종이 지도와 축척. 두 장소 사이의 거리를 구해요.' }[mode];
      const st = kit.stage(box, { viewBox: [W, H], label });
      const cx = (c) => MX + c * CELL + CELL / 2; const cy = (r) => MY + r * CELL + CELL / 2;
      const placeBy = (name) => places.find((p) => p.name === name) || null;
      const ink = print ? '#000' : '#3D352E';

      // ---- 지도 바탕: 칸 → 지형 층 → 지역 → 강·길 → 칸선 → 기호 ----
      const mapL = st.layer('map');
      const routeL = st.layer('route'); routeL.setAttribute('pointer-events', 'none');
      kit.piece(st, mapL, { shape: { type: 'rect', x: MX - 6, y: MY - 6, w: MW + 12, h: MH + 12, rx: 12 }, color: 'cream', depth: 2, fill: '#FFFDF8', texture: !print });
      const rectsPath = (cells) => cells.map(([c, r]) => `M${MX + c * CELL} ${MY + r * CELL}h${CELL}v${CELL}h${-CELL}Z`).join('');
      const allCells = []; for (let r = 0; r < ROWS; r++) for (let c = 0; c < COLS; c++) allCells.push([c, r]);
      if (seaSet.size) {
        const sc = allCells.filter(([c, r]) => seaSet.has(`${c},${r}`));
        kit.piece(st, mapL, { shape: { type: 'path', d: rectsPath(sc) }, color: 'sky', depth: 0, flat: true, stroke: 'none' });
        if (!print) sc.forEach(([c, r]) => kit.el('path', { d: `M${cx(c) - 14} ${cy(r)} q7 -6 14 0 t14 0`, fill: 'none', stroke: '#98C8D6', 'stroke-width': 2 }, mapL));
        else sc.forEach(([c, r]) => kit.el('path', { d: `M${cx(c) - 12} ${cy(r) + 10} q6 -5 12 0 t12 0`, fill: 'none', stroke: '#000', 'stroke-width': 1 }, mapL));
      }
      // 지역: 칸 색(또는 value 진하기)과 굵은 경계선
      const vals = regions.filter((g) => g.value != null).map((g) => g.value);
      const vmin = vals.length ? Math.min(...vals) : 0; const vmax = vals.length ? Math.max(...vals) : 1;
      const band = (v) => (vmax === vmin ? 3 : Math.min(3, Math.floor(((v - vmin) / (vmax - vmin)) * 4)));
      const BAND_FILL = ['#FDF1EA', '#F7BA9E', '#E69D7B', '#B86A4A'];
      regions.forEach((g) => {
        const fill = choropleth && g.value != null ? BAND_FILL[band(g.value)] : P[g.color] ? P[g.color].light : g.color;
        kit.piece(st, mapL, { shape: { type: 'path', d: rectsPath(g.cells) }, color: P[g.color] ? g.color : 'cream', depth: 1, fill, stroke: 'none', flat: true });
        if (print && choropleth && g.value != null) g.cells.forEach(([c, r]) => { for (let k = 0; k <= band(g.value); k++) kit.el('circle', { cx: MX + c * CELL + 8 + k * 7, cy: MY + r * CELL + 8, r: 2, fill: '#000' }, mapL); });
      });
      // 지형 층: 높이 k 이상인 칸을 한 장씩 겹쳐 쌓는다(높을수록 위층·진한 색)
      if (heights) {
        const top = Math.max(0, ...heights.flat().filter((v) => v >= 0));
        if (terrainView === 'layers') {
          for (let k = 0; k <= top; k++) {
            const cs = allCells.filter(([c, r]) => hv(c, r) >= k);
            if (!cs.length) continue;
            const inset = k * 3;
            const d = cs.map(([c, r]) => `M${MX + c * CELL + (hv(c - 1, r) >= k ? 0 : inset)} ${MY + r * CELL + (hv(c, r - 1) >= k ? 0 : inset)}H${MX + (c + 1) * CELL - (hv(c + 1, r) >= k ? 0 : inset)}V${MY + (r + 1) * CELL - (hv(c, r + 1) >= k ? 0 : inset)}H${MX + c * CELL + (hv(c - 1, r) >= k ? 0 : inset)}Z`).join('');
            kit.piece(st, mapL, { shape: { type: 'path', d }, color: ['mint', 'mint', 'buttercup', 'peach', 'peach'][Math.min(4, k)], fill: LEVEL_FILL[Math.min(4, k)], depth: LEVEL_DEPTH[Math.min(4, k)], stroke: 'none', flat: k === 0 });
            // 흑백 활동지: 높이만큼 점을 찍어 색 없이도 층을 읽는다
            if (print && k > 0) cs.filter(([c, r]) => hAt(c, r) === k).forEach(([c, r]) => { for (let i = 0; i < k; i++) kit.el('circle', { cx: MX + c * CELL + CELL - 9 - i * 7, cy: MY + r * CELL + CELL - 9, r: 2.2, fill: '#000' }, mapL); });
          }
        }
        // 등고선: 높이가 달라지는 칸 경계마다 선 하나(층이 바뀐 만큼 겹친다)
        const lines = kit.el('g', { class: 'mp-contour' }, mapL);
        const sw = terrainView === 'contour' ? 2.4 : 1.2; const col = terrainView === 'contour' ? ink : 'rgba(61,53,46,0.45)';
        allCells.forEach(([c, r]) => {
          const h = hAt(c, r); if (h == null) return;
          const rt = hAt(c + 1, r); const dn = hAt(c, r + 1);
          if (rt != null && rt !== h) for (let i = 0; i < Math.abs(rt - h); i++) kit.el('line', { x1: MX + (c + 1) * CELL + (i - (Math.abs(rt - h) - 1) / 2) * 4, y1: MY + r * CELL, x2: MX + (c + 1) * CELL + (i - (Math.abs(rt - h) - 1) / 2) * 4, y2: MY + (r + 1) * CELL, stroke: col, 'stroke-width': sw }, lines);
          if (dn != null && dn !== h) for (let i = 0; i < Math.abs(dn - h); i++) kit.el('line', { x1: MX + c * CELL, y1: MY + (r + 1) * CELL + (i - (Math.abs(dn - h) - 1) / 2) * 4, x2: MX + (c + 1) * CELL, y2: MY + (r + 1) * CELL + (i - (Math.abs(dn - h) - 1) / 2) * 4, stroke: col, 'stroke-width': sw }, lines);
        });
      }
      // 강(파란 굵은 선)·길(갈색 점선)
      const line = (pts) => pts.map((x, i) => `${i ? 'L' : 'M'}${cx(x[0])} ${cy(x[1])}`).join('');
      rivers.forEach((ln) => { kit.el('path', { d: line(ln), fill: 'none', stroke: print ? '#000' : '#5E9BD6', 'stroke-width': 9, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', opacity: print ? 1 : 0.85 }, mapL); if (print) kit.el('path', { d: line(ln), fill: 'none', stroke: '#fff', 'stroke-width': 6, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' }, mapL); });
      roads.forEach((ln) => kit.el('path', { d: line(ln), fill: 'none', stroke: print ? '#000' : '#B8956A', 'stroke-width': 4, 'stroke-dasharray': '10 6', 'stroke-linecap': 'round' }, mapL));
      // 지역 경계(굵은 선)
      if (regions.length) {
        const bd = kit.el('g', null, mapL);
        regions.forEach((g) => {
          const inG = (c, r) => g.cells.some((x) => x[0] === c && x[1] === r);
          g.cells.forEach(([c, r]) => {
            const x0 = MX + c * CELL; const y0 = MY + r * CELL;
            const seg = (x1, y1, x2, y2) => kit.el('line', { x1, y1, x2, y2, stroke: ink, 'stroke-width': 2.5, 'stroke-linecap': 'round' }, bd);
            if (!inG(c - 1, r)) seg(x0, y0, x0, y0 + CELL); if (!inG(c + 1, r)) seg(x0 + CELL, y0, x0 + CELL, y0 + CELL);
            if (!inG(c, r - 1)) seg(x0, y0, x0 + CELL, y0); if (!inG(c, r + 1)) seg(x0, y0 + CELL, x0 + CELL, y0 + CELL);
          });
        });
      }
      // 칸선(옅게) + 칸 머리 글자
      const grid = kit.el('g', { 'pointer-events': 'none' }, mapL);
      for (let c = 1; c < COLS; c++) kit.el('line', { x1: MX + c * CELL, y1: MY, x2: MX + c * CELL, y2: MY + MH, stroke: print ? '#999' : 'rgba(61,53,46,0.16)', 'stroke-width': 1, 'stroke-dasharray': '3 4' }, grid);
      for (let r = 1; r < ROWS; r++) kit.el('line', { x1: MX, y1: MY + r * CELL, x2: MX + MW, y2: MY + r * CELL, stroke: print ? '#999' : 'rgba(61,53,46,0.16)', 'stroke-width': 1, 'stroke-dasharray': '3 4' }, grid);
      (o.colLabels || []).slice(0, COLS).forEach((t, c) => { kit.el('text', { x: cx(c), y: MY - 8, 'text-anchor': 'middle', 'font-size': 13, class: 'pk-text', fill: ink }, mapL).textContent = String(t); });
      (o.rowLabels || []).slice(0, ROWS).forEach((t, r) => { kit.el('text', { x: MX - 10, y: cy(r) + 5, 'text-anchor': 'end', 'font-size': 13, class: 'pk-text', fill: ink }, mapL).textContent = String(t); });
      if (o.title) kit.el('text', { x: MX + MW / 2, y: 12 + 20, 'text-anchor': 'middle', 'font-size': 18, class: 'pk-text', fill: ink }, mapL).textContent = String(o.title);
      // 지역 이름(가운데에 가까운 칸)
      if (regions.length && o.regionNames !== false) regions.forEach((g) => {
        const mc = g.cells.reduce((a, x) => [a[0] + x[0] / g.cells.length, a[1] + x[1] / g.cells.length], [0, 0]);
        const best = g.cells.slice().sort((a, b) => Math.hypot(a[0] - mc[0], a[1] - mc[1]) - Math.hypot(b[0] - mc[0], b[1] - mc[1]))[0];
        const hasPlace = places.some((p) => p.at[0] === best[0] && p.at[1] === best[1]);
        const t = kit.el('text', { x: cx(best[0]), y: hasPlace ? MY + best[1] * CELL + 15 : cy(best[1]) + 5, 'text-anchor': 'middle', 'font-size': g.name.length > 4 ? 12 : 14, class: 'pk-text', fill: ink }, mapL);
        t.textContent = o.regionValues && g.value != null ? `${g.name} ${fmt(g.value)}${o.unit || ''}` : g.name;
      });
      // 북쪽 화살표(지도에 붙은 것 — 학생이 돌리지 않는다)
      const na = kit.el('g', { class: 'mp-north', 'aria-label': '지도의 북쪽 표시' }, mapL);
      kit.el('circle', { r: 17, fill: '#FFFFFF', stroke: ink, 'stroke-width': 1.5 }, na);
      kit.el('path', { d: 'M0 -15 L6 0 L0 -4 L-6 0 Z', fill: print ? '#000' : '#702830' }, na);
      kit.el('text', { x: 0, y: 13, 'text-anchor': 'middle', 'font-size': 10, class: 'pk-text', fill: ink }, na).textContent = '북';
      kit.transform(na, { x: MX + 6, y: MY + 6, r: north, cx: 0, cy: 0 });
      // 기호와 이름
      const placeL = st.layer('places'); placeL.setAttribute('pointer-events', 'none');
      const placeG = {};
      places.forEach((p) => {
        const g = kit.el('g', { class: 'mp-place', 'aria-label': showNames ? `${p.name}` : `${ICONS[p.icon].name} 기호` }, placeL);
        const ig = kit.el('g', null, g);
        ICONS[p.icon].draw(kit, st, ig);
        const s = Math.min(1, (CELL - 18) / 40);
        kit.transform(ig, { y: showNames ? -7 : 0, s });
        if (showNames) {
          const n = p.name.length;
          kit.el('text', { x: 0, y: CELL / 2 - 6, 'text-anchor': 'middle', 'font-size': Math.max(10, Math.min(13, 13 - (n - 4))), class: 'pk-text', fill: ink }, g).textContent = p.name;
        }
        kit.transform(g, { x: cx(p.at[0]), y: cy(p.at[1]) });
        placeG[p.name] = g;
      });
      // 강조 고리(출발·도착)
      const markL = st.layer('mark'); markL.setAttribute('pointer-events', 'none');
      function paintMarks(from, to) {
        markL.textContent = '';
        [[from, '출발', P.mint.dark], [to, '도착', P.rose.dark]].forEach(([nm, word, color]) => {
          const p = nm && placeBy(nm); if (!p) return;
          kit.el('rect', { x: MX + p.at[0] * CELL + 3, y: MY + p.at[1] * CELL + 3, width: CELL - 6, height: CELL - 6, rx: 10, fill: 'none', stroke: print ? '#000' : color, 'stroke-width': 3, 'stroke-dasharray': '7 5' }, markL);
          const tg = kit.el('g', null, markL);
          kit.el('rect', { x: -19, y: -10, width: 38, height: 19, rx: 9, fill: print ? '#fff' : color, stroke: print ? '#000' : 'none' }, tg);
          kit.el('text', { x: 0, y: 5, 'text-anchor': 'middle', 'font-size': 12, class: 'pk-text', fill: print ? '#000' : '#FFFFFF' }, tg).textContent = word;
          kit.transform(tg, { x: MX + p.at[0] * CELL + CELL / 2, y: MY + p.at[1] * CELL + 3 });
        });
      }

      // ---- 오른쪽 띠 ----
      const panel = st.layer('panel');
      const panelCard = (k, title) => {
        const s = slot[k]; const PX = s.x;
        kit.piece(st, panel, { shape: { type: 'rect', x: PX, y: s.y, w: PW, h: s.h, rx: 12 }, color: 'cream', depth: 1, fill: '#FFF9EE' });
        if (title) kit.el('text', { x: PX + 12, y: s.y + 19, 'font-size': 13, class: 'pk-text', fill: ink }, panel).textContent = title;
        return s;
      };
      // 범례
      const legendSlots = {};
      if (slot.legend) {
        const s = panelCard('legend', '범례'); const PX = s.x;
        legendKeys.forEach((k, i) => {
          const rowY = s.y + 28 + i * (mode === 'legend' ? 50 : 34);
          const ig = kit.el('g', null, panel); ICONS[k].draw(kit, st, ig); kit.transform(ig, { x: PX + 24, y: rowY + (mode === 'legend' ? 22 : 14), s: 0.72 });
          if (mode !== 'legend') { kit.el('text', { x: PX + 46, y: rowY + 19, 'font-size': 14, class: 'pk-text', fill: ink }, panel).textContent = meanings[k] || ICONS[k].name; return; }
          const b = kit.el('g', { class: 'mp-blank', tabindex: print || readOnly ? null : 0, role: print ? null : 'button' }, panel);
          kit.el('rect', { x: PX + 44, y: rowY, width: PW - 52, height: 44, class: 'pk-hit' }, b);
          const face = kit.piece(st, b, { shape: { type: 'rect', x: PX + 46, y: rowY + 4, w: PW - 56, h: 36, rx: 9 }, color: 'buttercup', depth: 1, fill: '#FFFFFF' });
          face.face.setAttribute('stroke', print ? '#000' : P.buttercup.layer); face.face.setAttribute('stroke-dasharray', '5 4');
          const t = kit.el('text', { x: PX + 46 + (PW - 56) / 2, y: rowY + 27, 'text-anchor': 'middle', 'font-size': 14, class: 'pk-text', fill: ink }, b);
          legendSlots[k] = { g: b, t };
          if (!print && !readOnly) {
            const next = (d) => { cycleLegend(k, d); };
            b.addEventListener('click', () => next(1));
            b.addEventListener('keydown', (e) => {
              const d = { Enter: 1, ' ': 1, ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
              if (d) { e.preventDefault(); next(d); }
            });
          }
        });
      }
      // 높이 범례
      if (slot.terrain) {
        const s = panelCard('terrain', '높이'); const PX = s.x;
        const top = Math.max(0, ...heights.flat().filter((v) => v >= 0));
        for (let k = top; k >= 0; k--) {
          const yy = s.y + 28 + (top - k) * 26;
          kit.piece(st, panel, { shape: { type: 'rect', x: PX + 12, y: yy, w: 26, h: 18, rx: 4 }, color: 'cream', depth: 0, fill: LEVEL_FILL[Math.min(4, k)], flat: true, stroke: '#3D352E' });
          if (print) for (let i = 0; i < k; i++) kit.el('circle', { cx: PX + 17 + i * 6, cy: yy + 9, r: 2, fill: '#000' }, panel);
          kit.el('text', { x: PX + 46, y: yy + 14, 'font-size': 13, class: 'pk-text', fill: ink }, panel).textContent = hNames[k] || `높이 ${k}`;
        }
      }
      if (slot.choro) {
        const s = panelCard('choro', o.valueName || '많고 적음'); const PX = s.x;
        for (let k = 3; k >= 0; k--) {
          const yy = s.y + 28 + (3 - k) * 26;
          kit.piece(st, panel, { shape: { type: 'rect', x: PX + 12, y: yy, w: 26, h: 18, rx: 4 }, color: 'cream', depth: 0, fill: BAND_FILL[k], flat: true, stroke: '#3D352E' });
          if (print) for (let i = 0; i <= k; i++) kit.el('circle', { cx: PX + 17 + i * 6, cy: yy + 9, r: 2, fill: '#000' }, panel);
          kit.el('text', { x: PX + 46, y: yy + 14, 'font-size': 12, class: 'pk-text', fill: ink }, panel).textContent = k === 3 ? '가장 많음' : k === 0 ? '가장 적음' : k === 2 ? '많음' : '적음';
        }
      }
      // 축척 막대: 한 칸 길이 = scale.cell
      if (slot.scale) {
        const s = panelCard('scale', '축척'); const PX = s.x;
        const bw = Math.min(CELL, PW - 30); const x0 = PX + 14; const yy = s.y + 38;
        kit.el('rect', { x: x0, y: yy - 5, width: bw / 2, height: 7, fill: ink }, panel);
        kit.el('rect', { x: x0 + bw / 2, y: yy - 5, width: bw / 2, height: 7, fill: '#FFFFFF', stroke: ink, 'stroke-width': 1.5 }, panel);
        kit.el('text', { x: x0, y: yy + 17, 'text-anchor': 'start', 'font-size': 12, class: 'pk-text', fill: ink }, panel).textContent = '0';
        kit.el('text', { x: x0 + bw, y: yy + 17, 'text-anchor': 'middle', 'font-size': 12, class: 'pk-text', fill: ink }, panel).textContent = `${fmt(scale.cell)}${scale.unit}`;
        if (bw < CELL - 1) kit.el('text', { x: PX + PW - 8, y: yy + 2, 'text-anchor': 'end', 'font-size': 11, class: 'pk-text', fill: ink }, panel).textContent = '(한 칸)';
      }
      // 읽기 글자(핀이 있는 곳·방위표 방향) — revealAfterCheck이면 맞힌 확인 뒤에만
      let readT = null;
      if (slot.readout) { const s = panelCard('readout', '지금'); const PX = s.x; readT = kit.el('text', { x: PX + 12, y: s.y + 42, 'font-size': 14, class: 'pk-text', fill: ink }, panel); }

      // ---- 방위표(학생이 돌린다) ----
      let rose = norm(Number.isFinite(o.roseStart) ? Math.round(o.roseStart / roseStep) * roseStep : 0); let roseCtl = null;
      if (slot.rose) {
        const s = panelCard('rose', '방위표'); const PX = s.x;
        const RX = PX + PW / 2; const RY = s.y + 86;
        const rg = kit.el('g', { class: 'mp-rose' }, panel);
        kit.el('circle', { cx: 0, cy: 0, r: 46, class: 'pk-hit' }, rg);
        kit.piece(st, rg, { shape: { type: 'circle', r: 44 }, color: 'sky', depth: 2, fill: P.sky.light });
        kit.piece(st, rg, { shape: { type: 'poly', points: '0,-24 7,-5 0,-9 -7,-5' }, color: 'rose', depth: 1, fill: print ? '#000' : '#E8655A' });
        kit.piece(st, rg, { shape: { type: 'poly', points: '0,24 7,5 0,9 -7,5' }, color: 'cream', depth: 1 });
        kit.piece(st, rg, { shape: { type: 'poly', points: '24,0 5,7 9,0 5,-7' }, color: 'cream', depth: 1 });
        kit.piece(st, rg, { shape: { type: 'poly', points: '-24,0 -5,7 -9,0 -5,-7' }, color: 'cream', depth: 1 });
        // 활동지(print)에서는 방위 글자를 빈 동그라미로 둔다 — 돌아간 지도에 '위 = 북'을 찍어 답을 주거나 틀리게 알려 주지 않게(학생이 써 넣는다)
        [['북', 0, -29], ['동', 35, 5], ['남', 0, 40], ['서', -35, 5]].forEach(([t, x, y]) => { if (print) kit.el('circle', { cx: x, cy: y - 4, r: 9, fill: '#fff', stroke: '#000', 'stroke-width': 1.2 }, rg); else kit.el('text', { x, y, 'text-anchor': 'middle', 'font-size': 13, class: 'pk-text', fill: t === '북' ? '#702830' : ink }, rg).textContent = t; });
        const outer = kit.el('g', null, panel); outer.appendChild(rg);
        kit.transform(outer, { x: RX, y: RY });
        if (!print && !readOnly) {
          roseCtl = kit.rotate(st, rg, {
            center: [0, 0], step: roseStep, value: rose, label: '방위표. 돌려서 북쪽을 지도의 북쪽에 맞춰요.',
            valueText: (v) => `방위표 북쪽이 ${josa(screenWord(norm(v)), '을', '를')} 가리켜요`,
            onEnd(v) { rose = norm(Math.round(v / roseStep) * roseStep); revealed = false; paintRead(); kit.tick(); kit.recorder.log('map', state()); kit.announce(`방위표 북쪽이 ${josa(screenWord(rose), '을', '를')} 가리켜요.`); },
          });
        } else kit.transform(rg, { r: rose, cx: 0, cy: 0 });
      }
      function screenWord(a) { return ['위쪽', '오른쪽 위', '오른쪽', '오른쪽 아래', '아래쪽', '왼쪽 아래', '왼쪽', '왼쪽 위'][Math.round(norm(a) / 45) % 8]; }

      // ---- 핀 ----
      let pin = null; let pinG = null; let homeXY = null;
      const inMap = (c, r) => c >= 0 && r >= 0 && c < COLS && r < ROWS;
      if (pinMode) {
        if (slot.home) { const s = panelCard('home', '핀 자리'); homeXY = { x: s.x + PW / 2, y: s.y + 64 }; }
        pinG = kit.el('g', { class: 'mp-pin', 'aria-label': '핀' }, st.layer('pin'));
        kit.el('rect', { x: -32, y: -48, width: 64, height: 66, class: 'pk-hit' }, pinG);
        kit.el('path', { d: 'M0 0 L-2 -16 L2 -16 Z', fill: '#3D352E' }, pinG);
        kit.el('ellipse', { cx: 0, cy: 1, rx: 6, ry: 2.5, fill: 'rgba(46,30,20,0.3)' }, pinG);
        kit.piece(st, pinG, { shape: { type: 'circle', r: 11, cy: -24 }, color: 'rose', depth: 2, fill: '#E8655A' });
        kit.el('circle', { cx: -3.5, cy: -27.5, r: 3, fill: '#FFFFFF', opacity: 0.7 }, pinG);
        if (!print && !readOnly) {
          // 방향키는 칸 단위로 옮긴다(kit.drag의 10 단위 이동보다 먼저 받는다)
          pinG.addEventListener('keydown', (e) => {
            const d = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] }[e.key];
            if (!d) return;
            e.preventDefault(); e.stopImmediatePropagation();
            const p = pin ? [Math.max(0, Math.min(COLS - 1, pin[0] + d[0])), Math.max(0, Math.min(ROWS - 1, pin[1] + d[1]))] : [Math.floor((COLS - 1) / 2), Math.floor((ROWS - 1) / 2)];
            setPin(p, 'keyboard');
          });
          kit.drag(st, pinG, {
            bounds: [MX - 10, MY, W - 10, H],
            onStart() { kit.tick(); },
            snap(x, y) {
              const c = Math.floor((x - MX) / CELL); const r = Math.floor((y - 6 - MY) / CELL);
              pin = inMap(c, r) ? [c, r] : null;
              return pinXY();
            },
            onDrop(_x, _y, via) { placedPin(via); },
          });
          // 칸을 눌러도 핀이 그 칸으로 간다(끄는 것이 어려운 학생)
          const hit = kit.el('rect', { x: MX, y: MY, width: MW, height: MH, fill: 'transparent' }, mapL);
          hit.addEventListener('click', (e) => { const p = st.point(e); const c = Math.floor((p.x - MX) / CELL); const r = Math.floor((p.y - MY) / CELL); if (inMap(c, r)) setPin([c, r], 'tap'); });
        }
      }
      function pinXY() { return pin ? { x: cx(pin[0]), y: cy(pin[1]) + 8 } : homeXY || { x: -100, y: -100 }; }
      function setPin(p, via) { pin = p && inMap(p[0], p[1]) ? [p[0], p[1]] : null; kit.animateTo(pinG, pinXY()); placedPin(via); }
      function placedPin(via) {
        revealed = false; paintRead(); kit.tick(); paintPin();
        kit.announce(pin ? `핀을 ${where(pin)}에 꽂았어요.` : '핀을 핀 자리로 돌려놓았어요.');
        kit.recorder.log('map', Object.assign({ via }, state()));
      }
      function paintPin() {
        if (!pinG) return;
        pinG.style.display = print && !pin ? 'none' : '';
        pinG.setAttribute('aria-label', pin ? `핀. 지금 ${where(pin)}. 방향키로 한 칸씩 옮겨요.` : '핀. 방향키를 누르면 지도에 놓여요.');
      }
      // 칸을 말로: 장소가 있으면 이름, 아니면 '왼쪽에서 n째, 위에서 m째 칸'(머리 글자가 있으면 그것)
      function where(p) {
        const pl = places.find((x) => x.at[0] === p[0] && x.at[1] === p[1]);
        if (pl && showNames) return pl.name;
        return cellWords(p);
      }
      function cellWords(p) {
        if (o.colLabels && o.rowLabels) return `${o.colLabels[p[0]]}·${o.rowLabels[p[1]]} 칸`;
        return `왼쪽에서 ${p[0] + 1}째, 위에서 ${p[1] + 1}째 칸`;
      }
      // 화면에서 지도의 어느 쪽인지(방위가 아니라 왼쪽·오른쪽·위·아래 — 북쪽 화살표가 돌아가 있어도 틀리지 않게)
      function areaWords(p) {
        const cols = COLS; const rows = ROWS; const fx = cols > 1 ? p[0] / (cols - 1) : 0.5; const fy = rows > 1 ? p[1] / (rows - 1) : 0.5;
        const h = fx < 0.34 ? '왼쪽' : fx > 0.66 ? '오른쪽' : ''; const v = fy < 0.34 ? '위' : fy > 0.66 ? '아래' : '';
        return h && v ? `${h} ${v}` : h || v || '가운데';
      }

      // ---- 방위 단추·거리 단추·보기(HTML, 교구 아래) ----
      let dir = null; let dist = null; let legend = {}; let pick = null; let revealed = false; let target = null;
      const ctl = !print ? document.createElement('div') : null;
      if (ctl) { ctl.className = 'mp-ctl'; ctl.style.cssText = 'display:flex;flex-direction:column;gap:8px;margin-top:8px'; box.appendChild(ctl); }
      const btn = (attrs, html) => `<button type="button" class="pl-btn pl-btn--small" tabindex="0" style="min-height:44px;min-width:44px" ${attrs}>${html}</button>`;
      let dirRow = null; let distRow = null; let askRow = null;
      if (ctl && mode === 'compass') {
        dirRow = document.createElement('div'); dirRow.setAttribute('role', 'radiogroup'); dirRow.setAttribute('aria-label', '방위 고르기');
        dirRow.style.cssText = 'display:flex;flex-wrap:wrap;gap:6px;align-items:center';
        dirRow.innerHTML = `<span style="font-weight:700;margin-right:4px">방위</span>${DIRS.map((d) => btn(`role="radio" aria-checked="false" data-dir="${d}"${readOnly ? ' disabled' : ''}`, d)).join('')}`;
        dirRow.addEventListener('click', (e) => { const b = e.target.closest('[data-dir]'); if (!b) return; dir = b.dataset.dir; revealed = false; paintDir(); paintRead(); kit.tick(); kit.recorder.log('map', state()); kit.announce(`${dir}을 골랐어요.`); });
        ctl.appendChild(dirRow);
      }
      if (ctl && mode === 'scale') {
        distRow = document.createElement('div'); distRow.setAttribute('role', 'group'); distRow.setAttribute('aria-label', '거리 넣기');
        distRow.style.cssText = 'display:flex;flex-wrap:wrap;gap:8px;align-items:center';
        distRow.innerHTML = `<span style="font-weight:700">거리</span>${btn(`data-d="-1" aria-label="${fmt(distStep)}${scale.unit} 줄이기"${readOnly ? ' disabled' : ''}`, '<i class="fi fi-rr-minus" aria-hidden="true"></i>')}<span role="spinbutton" tabindex="0" class="mp-dist" aria-label="거리" style="display:inline-block;min-width:5.5em;min-height:44px;line-height:44px;text-align:center;font-size:20px;font-weight:800;border-radius:10px;background:#FFF9EE"></span>${btn(`data-d="1" aria-label="${fmt(distStep)}${scale.unit} 늘리기"${readOnly ? ' disabled' : ''}`, '<i class="fi fi-rr-plus" aria-hidden="true"></i>')}`;
        const bump = (d) => { if (readOnly) return; dist = Math.max(0, Math.min(distStep * 40, (dist == null ? 0 : dist) + d * distStep)); revealed = false; paintDist(); kit.tick(); kit.recorder.log('map', state()); kit.announce(`${fmt(dist)}${scale.unit}`); };
        distRow.addEventListener('click', (e) => { const b = e.target.closest('[data-d]'); if (b) bump(Number(b.dataset.d)); });
        distRow.querySelector('.mp-dist').addEventListener('keydown', (e) => { const d = { ArrowUp: 1, ArrowRight: 1, Enter: 1, ArrowDown: -1, ArrowLeft: -1 }[e.key]; if (d) { e.preventDefault(); bump(d); } });
        ctl.appendChild(distRow);
      }
      if (ctl && o.ask && Array.isArray(o.ask.choices)) {
        askRow = document.createElement('div'); askRow.setAttribute('role', 'radiogroup'); askRow.setAttribute('aria-label', o.ask.q || '고르기');
        askRow.style.cssText = 'display:flex;flex-wrap:wrap;gap:6px;align-items:center';
        askRow.innerHTML = `${o.ask.q ? `<span style="font-weight:700;flex-basis:100%">${esc(o.ask.q)}</span>` : ''}${o.ask.choices.map((c, i) => btn(`role="radio" aria-checked="false" data-pick="${i}"`, esc(c))).join('')}`;
        askRow.addEventListener('click', (e) => { const b = e.target.closest('[data-pick]'); if (!b) return; pick = Number(b.dataset.pick); revealed = false; paintPick(); paintRead(); kit.tick(); kit.recorder.log('map', state()); kit.announce(`${o.ask.choices[pick]}을 골랐어요.`); });
        ctl.appendChild(askRow);
      }
      function paintDir() { if (dirRow) dirRow.querySelectorAll('[data-dir]').forEach((b) => b.setAttribute('aria-checked', String(b.dataset.dir === dir))); }
      function paintDist() { if (!distRow) return; const sp = distRow.querySelector('.mp-dist'); sp.textContent = dist == null ? '?' : `${fmt(dist)} ${scale.unit}`; if (dist == null) { sp.setAttribute('aria-valuetext', '아직 안 넣음'); sp.removeAttribute('aria-valuenow'); } else { sp.setAttribute('aria-valuenow', String(dist)); sp.setAttribute('aria-valuetext', `${fmt(dist)}${scale.unit}`); } }
      function paintPick() { if (askRow) askRow.querySelectorAll('[data-pick]').forEach((b) => b.setAttribute('aria-checked', String(Number(b.dataset.pick) === pick))); }
      const legendChoices = () => {
        const vs = [...new Set(legendKeys.map((k) => meanings[k] || ICONS[k].name).concat(o.extra || []))];
        return vs.sort((a, b) => a.localeCompare(b, 'ko'));
      };
      function cycleLegend(k, d) {
        const ch = legendChoices(); const i = legend[k] == null ? -1 : ch.indexOf(legend[k]);
        const n = i + d; legend[k] = n < 0 ? (d < 0 && i === -1 ? ch[ch.length - 1] : null) : n >= ch.length ? null : ch[n];
        revealed = false; paintLegend(); kit.tick(); kit.recorder.log('map', state());
        kit.announce(legend[k] ? `${legend[k]}` : '빈칸');
      }
      function paintLegend() {
        Object.entries(legendSlots).forEach(([k, s]) => {
          const v = print && !o.printAnswers ? null : legend[k];
          s.t.textContent = v || (print ? '' : '?');
          s.g.setAttribute('aria-label', `범례 빈칸. 지금 ${v || '비어 있음'}. 누르면 다음 이름으로 바뀌어요.`);
        });
      }
      const liveRead = () => readT && !(o.revealAfterCheck && !revealed);
      function paintRead() {
        if (!readT) return;
        if (!liveRead()) { readT.textContent = '확인하면 보여요'; return; }
        if (pinMode) readT.textContent = pin ? where(pin) : '핀이 아직 없어요';
        else if (mode === 'compass') readT.textContent = `북쪽 ${screenWord(rose)}`;
        else if (mode === 'scale') readT.textContent = dist == null ? '거리 ?' : `${fmt(dist)}${scale.unit}`;
        else readT.textContent = `${Object.values(legend).filter(Boolean).length}칸 채움`;
      }

      // ---- 판정 ----
      const DIRVEC = { 북: [0, -1], 북동: [1, -1], 동: [1, 0], 남동: [1, 1], 남: [0, 1], 남서: [-1, 1], 서: [-1, 0], 북서: [-1, -1] };
      // 지도 방위 → 화면 칸 벡터(north만큼 돌린다; 45° 배수만)
      const screenVec = (d) => { const a = ((DIRS8.indexOf(d) * 45 + north) * Math.PI) / 180; return [Math.round(Math.sin(a)), Math.round(-Math.cos(a))]; };
      const dirName = (a, b, n) => { const dx = b[0] - a[0]; const dy = b[1] - a[1]; if (!dx && !dy) return null; const sb = norm((Math.atan2(dx, -dy) * 180) / Math.PI - (n == null ? north : n)); return points === 4 ? DIRS4[Math.round(sb / 90) % 4] : DIRS8[Math.round(sb / 45) % 8]; };
      const cellsOf = (t) => {
        // pin 목표를 만족하는 칸 목록
        if (Array.isArray(t.at)) return [[t.at[0], t.at[1]]];
        if (t.place) { const p = placeBy(t.place); return p ? [p.at] : []; }
        if (t.region) { const g = regions.find((x) => x.name === t.region); return g ? g.cells : []; }
        if (t.most || t.least) { const vs = regions.filter((g) => g.value != null); if (!vs.length) return []; const v = t.most ? Math.max(...vs.map((g) => g.value)) : Math.min(...vs.map((g) => g.value)); return vs.filter((g) => g.value === v).flatMap((g) => g.cells); }
        if (t.from && t.dir && DIRVEC[t.dir]) {
          const p = placeBy(t.from); if (!p) return [];
          const v = screenVec(t.dir); const out = [];
          for (let k = 1; k < 20; k++) { const c = [p.at[0] + v[0] * k, p.at[1] + v[1] * k]; if (!inMap(c[0], c[1])) break; if (!t.steps || t.steps === k) out.push(c); }
          return out;
        }
        if (heights && (t.highest || t.lowest || Number.isFinite(t.height))) {
          const land = allCells.filter(([c, r]) => hAt(c, r) != null && hAt(c, r) >= 0);
          const want = t.highest ? Math.max(...land.map(([c, r]) => hAt(c, r))) : t.lowest ? Math.min(...land.map(([c, r]) => hAt(c, r))) : t.height;
          return land.filter(([c, r]) => hAt(c, r) === want);
        }
        if (t.river) return allCells.filter(([c, r]) => riverSet.has(`${c},${r}`));
        if (t.sea) return allCells.filter(([c, r]) => seaSet.has(`${c},${r}`));
        return [];
      };
      const pinTargetOf = (t) => t && (Array.isArray(t.at) || t.place || t.region || t.most || t.least || (t.from && t.dir) || t.highest || t.lowest || Number.isFinite(t.height) || t.river || t.sea);
      const routeOf = (t) => { const a = placeBy(t.from); const b = placeBy(t.to); return a && b ? { a, b, cells: Math.abs(a.at[0] - b.at[0]) + Math.abs(a.at[1] - b.at[1]) } : null; };
      const wantDist = (t) => (Number.isFinite(t.dist) ? t.dist : (() => { const r = routeOf(t); return r && scale ? r.cells * scale.cell : null; })());
      const wantDir = (t) => t.dir || (t.from && t.to && placeBy(t.from) && placeBy(t.to) ? dirName(placeBy(t.from).at, placeBy(t.to).at) : null);
      const nameAt = (p) => { const pl = places.find((x) => x.at[0] === p[0] && x.at[1] === p[1]); return pl ? pl.name : null; };

      function judge(t, quiet) {
        t = t || target || {};
        const pickRes = () => {
          if (t.pick == null) return null;
          if (pick == null) return { correct: false, incomplete: true, feedback: '아래 보기에서 하나를 골라요.', hint: '지도를 보고 알맞은 보기를 골라요.' };
          if (pick !== t.pick) return { correct: false, feedback: (o.ask && o.ask.why && o.ask.why[pick]) || '고른 보기를 지도와 다시 견주어 보세요.', hint: '지도에서 찾은 것과 보기 글자를 하나씩 맞춰 봐요.' };
          return { correct: true, feedback: '맞아요! 지도를 잘 읽었어요.' };
        };
        let main = null;
        if (pinMode && pinTargetOf(t)) {
          const ok = cellsOf(t);
          if (!pin) main = { correct: false, incomplete: true, feedback: '핀을 끌어 지도의 칸에 꽂아요.', hint: '핀을 눌러 끌거나, 지도의 칸을 눌러요.' };
          else if (ok.some((x) => x[0] === pin[0] && x[1] === pin[1])) main = { correct: true, feedback: t.place ? `맞아요! ${t.place}에 핀을 꽂았어요.` : t.region ? `맞아요! ${t.region} 지역이에요.` : t.from ? `맞아요! ${t.from}에서 ${t.dir}쪽이에요.` : t.highest ? '맞아요! 층이 가장 많이 쌓인 가장 높은 곳이에요.' : t.lowest ? '맞아요! 가장 낮은 곳이에요.' : '맞아요! 알맞은 칸에 꽂았어요.' };
          else {
            const here = nameAt(pin);
            if (t.from && t.dir) {
              const p = placeBy(t.from); const got = p ? dirName(p.at, pin) : null;
              const opp = DIRS8[(DIRS8.indexOf(t.dir) + 4) % 8];
              if (got === opp) main = { correct: false, feedback: `반대쪽으로 갔어요. 지금 핀은 ${t.from}의 ${got}쪽이에요.`, hint: '방위표에서 북쪽을 먼저 찾고, 그 맞은편이 남쪽, 오른쪽이 동쪽이에요.' };
              else if (got && north && dirName(p.at, pin, 0) === t.dir) main = { correct: false, feedback: '지도의 위쪽을 북쪽으로 읽었어요. 이 지도는 북쪽 화살표가 다른 쪽을 가리켜요.', hint: '북쪽 화살표가 가리키는 쪽이 북쪽이에요. 방위표를 그쪽에 맞춰 읽어요.' };
              else if (got === t.dir) main = { correct: false, feedback: `방향은 맞아요. ${t.steps ? `${t.from}에서 몇 칸 갔는지 다시 세어 보세요.` : '그 줄 위에 있는지 다시 보세요.'}`, hint: `${t.from}에서 한 칸씩 세며 가요.` };
              else main = { correct: false, feedback: got ? `지금 핀은 ${t.from}의 ${got}쪽이에요.` : `핀이 ${t.from} 위에 있어요. 출발한 곳에서 움직여요.`, hint: '출발 장소에 손가락을 두고 방위표의 방향대로 옮겨 가요.' };
            } else if (t.highest || t.lowest || Number.isFinite(t.height)) {
              const h = hAt(pin[0], pin[1]);
              main = { correct: false, feedback: h == null || h < 0 ? '핀이 바다나 높이를 모르는 곳에 있어요.' : `핀이 있는 곳은 ‘${hNames[h] || `높이 ${h}`}’이에요. 높이 범례와 다시 견주어 보세요.`, hint: terrainView === 'contour' ? '등고선이 여러 겹 둘러싼 안쪽일수록 높아요.' : '층이 많이 쌓이고 색이 진할수록 높아요.' };
            } else if (t.region) {
              const g = regionAt(pin[0], pin[1]);
              main = { correct: false, feedback: g ? `핀은 ${g.name} 지역에 있어요.` : '핀이 어느 지역에도 들어 있지 않아요.', hint: '굵은 경계선 안쪽이 한 지역이에요. 지역 이름을 찾아 그 안에 꽂아요.' };
            } else if (t.most || t.least) {
              const g = regionAt(pin[0], pin[1]);
              main = { correct: false, feedback: g ? `${g.name}보다 ${t.most ? '더 많은' : '더 적은'} 지역이 있어요.` : '핀을 지역 안에 꽂아요.', hint: '범례의 진하기와 지역의 색을 견주어 봐요.' };
            } else main = { correct: false, feedback: here ? `핀은 ${here}에 있어요. 찾는 곳이 아니에요.` : '핀이 있는 칸에는 찾는 곳이 없어요.', hint: showNames ? '지도의 이름과 기호를 하나씩 읽어 봐요.' : '범례에서 기호 모양을 보고 같은 기호를 지도에서 찾아요.' };
          }
        } else if (mode === 'compass' && (t.dir || t.align || (t.from && t.to))) {
          const want = wantDir(t);
          if (t.align && norm(rose) !== north) main = { correct: false, feedback: rose === 0 && north ? '방위표가 아직 위쪽을 북쪽으로 보고 있어요. 지도의 북쪽 화살표를 보세요.' : '방위표의 북쪽이 지도의 북쪽 화살표와 같은 쪽을 가리키지 않아요.', hint: '방위표를 돌려 빨간 바늘(북)을 지도 왼쪽 위 북쪽 화살표와 같은 쪽으로 맞춰요.' };
          else if (want) {
            if (!dir) main = { correct: false, incomplete: true, feedback: '아래 방위 단추에서 하나를 골라요.', hint: '출발 장소에서 도착 장소 쪽을 보고 방위를 골라요.' };
            else if (dir === want) main = { correct: true, feedback: t.from && t.to ? `맞아요! ${t.to}는 ${t.from}의 ${want}쪽이에요.` : `맞아요! ${want}이에요.` };
            else {
              const a = t.from && placeBy(t.from); const b = t.to && placeBy(t.to);
              const upRead = a && b && north ? dirName(a.at, b.at, 0) : null;
              const opp = DIRS8[(DIRS8.indexOf(want) + 4) % 8];
              if (upRead && dir === upRead) main = { correct: false, feedback: '지도의 위쪽을 북쪽이라고 읽었어요. 이 지도의 북쪽 화살표를 다시 보세요.', hint: '방위표를 북쪽 화살표에 맞춰 돌린 뒤 읽어요.' };
              else if (dir === opp) main = { correct: false, feedback: '반대 방향을 골랐어요. 출발과 도착을 바꿔 읽은 것 같아요.', hint: '출발 장소에 서서 도착 장소 쪽을 바라봐요.' };
              else main = { correct: false, feedback: `${dir}쪽이 아니에요. 출발에서 도착 쪽을 다시 보세요.`, hint: '북·동·남·서 사이(북동·남동·남서·북서)도 살펴봐요.' };
            }
          } else if (t.align) main = { correct: true, feedback: '맞아요! 방위표의 북쪽을 지도의 북쪽에 맞췄어요.' };
        } else if (mode === 'legend') {
          const want = t.legend || Object.fromEntries(legendKeys.map((k) => [k, meanings[k] || ICONS[k].name]));
          const keys = Object.keys(want).filter((k) => legendSlots[k]);
          const empty = keys.filter((k) => legend[k] == null);
          if (empty.length === keys.length) main = { correct: false, incomplete: true, feedback: '범례 빈칸을 눌러 기호의 뜻을 골라요.', hint: '빈칸을 누를 때마다 이름이 바뀌어요.' };
          else if (empty.length) main = { correct: false, incomplete: true, feedback: `아직 빈칸이 ${empty.length}개 있어요.`, hint: '남은 빈칸도 눌러 채워요.' };
          else {
            const bad = keys.filter((k) => legend[k] !== want[k]);
            if (!bad.length) main = { correct: true, feedback: '맞아요! 기호와 뜻을 알맞게 짝 지었어요.' };
            else {
              if (!quiet) bad.forEach((k) => flag(legendSlots[k].g));
              main = { correct: false, feedback: `${bad.length}칸의 뜻이 맞지 않아요. 흔들리는 칸의 기호 모양을 다시 보세요.`, hint: showNames ? '지도에서 같은 기호를 찾아 옆에 쓰인 이름을 읽어요.' : '그 기호가 무엇을 나타내기로 약속했는지 다시 떠올려요. 지도에서 그 기호가 놓인 자리도 살펴요.' };
            }
          }
        } else if (mode === 'scale' && (Number.isFinite(t.dist) || (t.from && t.to))) {
          const want = wantDist(t); const r = routeOf(t);
          if (dist == null) main = { correct: false, incomplete: true, feedback: '아래 단추로 거리를 넣어요.', hint: '+ 단추를 누를 때마다 거리가 늘어나요.' };
          else if (dist === want) main = { correct: true, feedback: r ? `맞아요! ${r.cells}칸 × ${fmt(scale.cell)}${scale.unit} = ${fmt(want)}${scale.unit}예요.` : `맞아요! ${fmt(want)}${scale.unit}예요.` };
          else if (r && dist === r.cells * distStep && distStep !== scale.cell) main = { correct: false, feedback: '칸 수는 맞게 셌어요. 한 칸이 얼마인지 축척을 다시 보세요.', hint: '축척 막대 한 칸의 거리를 읽어요.' };
          else if (r && scale && dist === (r.cells - 1) * scale.cell) main = { correct: false, feedback: '한 칸이 모자라요. 출발 칸에서 도착 칸까지 건너간 칸을 세어요.', hint: '출발한 칸은 세지 않고, 한 칸씩 건너갈 때마다 하나씩 세어요.' };
          else if (r && scale && dist === (r.cells + 1) * scale.cell) main = { correct: false, feedback: '한 칸이 많아요. 출발한 칸까지 센 것 같아요.', hint: '건너간 칸만 세어요.' };
          else main = { correct: false, feedback: `${dist > want ? '너무 멀어요' : '너무 가까워요'}. 길을 따라 칸 수를 다시 세어 보세요.`, hint: '길을 따라 칸을 하나씩 세고, 축척 한 칸의 거리를 곱해요.' };
        }
        const pr = pickRes();
        if (main && !main.correct) return main;
        if (pr && !pr.correct) return pr;
        if (main || pr) return main && pr ? { correct: true, feedback: `${main.feedback}` } : main || pr;
        return { correct: false, incomplete: true, feedback: '지도에서 할 일을 해 보세요.', hint: '문제를 다시 읽어요.' };
      }
      function flag(g) { g.classList.add('pk-no'); setTimeout(() => g.classList.remove('pk-no'), 2200); }

      function state() {
        const s = {};
        if (pinMode) s.pin = pin ? [pin[0], pin[1]] : null;
        if (mode === 'compass') { s.rose = rose; s.dir = dir; }
        if (mode === 'legend') s.legend = Object.fromEntries(legendKeys.map((k) => [k, legend[k] == null ? null : legend[k]]));
        if (mode === 'scale') s.dist = dist;
        if (askRow || (o.ask && o.ask.choices)) s.pick = pick;
        return s;
      }
      function apply(s, animate) {
        s = s || {};
        if (pinMode) { pin = Array.isArray(s.pin) && inMap(s.pin[0], s.pin[1]) ? [s.pin[0], s.pin[1]] : null; if (pinG) { const xy = pinXY(); if (animate) kit.animateTo(pinG, xy); else kit.transform(pinG, xy); } paintPin(); }
        if (mode === 'compass') { rose = norm(Number.isFinite(s.rose) ? Math.round(s.rose / roseStep) * roseStep : Number.isFinite(o.roseStart) ? Math.round(o.roseStart / roseStep) * roseStep : 0); if (roseCtl) roseCtl.set(rose); dir = DIRS.includes(s.dir) ? s.dir : null; paintDir(); }
        if (mode === 'legend') { legend = {}; legendKeys.forEach((k) => { legend[k] = s.legend && s.legend[k] != null ? s.legend[k] : null; }); paintLegend(); }
        if (mode === 'scale') { dist = Number.isFinite(s.dist) ? s.dist : null; paintDist(); }
        pick = Number.isInteger(s.pick) ? s.pick : null; paintPick();
        paintRead();
      }
      function marksFor(t) {
        t = t || {};
        const from = t.from || o.from; const to = t.to || o.to;
        if (mode === 'compass' || mode === 'scale') paintMarks(from, to);
        else paintMarks(o.from || (t.from && t.dir ? t.from : null), o.to);
        drawRoute(t);
      }
      function drawRoute(t) {
        routeL.textContent = '';
        if (mode !== 'scale') return;
        const r = routeOf(Object.assign({ from: o.from, to: o.to }, t || {})); if (!r) return;
        const [ax, ay] = r.a.at; const [bx, by] = r.b.at;
        kit.el('path', { d: `M${cx(ax)} ${cy(ay)}H${cx(bx)}V${cy(by)}`, fill: 'none', stroke: print ? '#000' : P.lavender.dark, 'stroke-width': 3, 'stroke-dasharray': '2 7', 'stroke-linecap': 'round' }, routeL);
        if (o.showCells) {
          const seq = []; for (let c = ax; c !== bx; c += Math.sign(bx - ax)) seq.push([c + Math.sign(bx - ax), ay]);
          for (let r2 = ay; r2 !== by; r2 += Math.sign(by - ay)) seq.push([bx, r2 + Math.sign(by - ay)]);
          seq.forEach(([c, r2], i) => { kit.el('circle', { cx: MX + c * CELL + 14, cy: MY + r2 * CELL + 14, r: 10, fill: '#FFFFFF', stroke: P.lavender.dark, 'stroke-width': 1.5 }, routeL); kit.el('text', { x: MX + c * CELL + 14, y: MY + r2 * CELL + 18, 'text-anchor': 'middle', 'font-size': 12, class: 'pk-text', fill: ink }, routeL).textContent = String(i + 1); });
        }
      }

      apply({}, false); marksFor({});

      return {
        getState: state,
        setState(s) { apply(s, false); },
        setTarget(t) { target = t || null; marksFor(target); },
        reset() { revealed = false; apply({}, true); },
        check(t, opts) {
          const quiet = !!(opts && opts.forHint);
          const r = judge(t, quiet);
          if (!quiet && r.correct) { revealed = true; paintRead(); }
          return r;
        },
        hint(t, opts) {
          t = t || target || {};
          const r = judge(t, true);
          if (r.correct) return { hint: '지도를 알맞게 읽었어요.', correct: true };
          const lv = levelOf(opts);
          if (lv === 1) {
            if (t.pick != null && !pinTargetOf(t) && mode !== 'compass' && mode !== 'legend' && mode !== 'scale') return { hint: '문제가 묻는 것을 지도에서 먼저 찾고, 보기 글자와 하나씩 견주어요.', correct: false };
            if (pinMode) {
              if (t.from && t.dir) return { hint: '지도의 북쪽 화살표를 먼저 보고, 출발 장소에서 그 방위 쪽으로 한 칸씩 세어 가요.', correct: false };
              if (t.highest || t.lowest || Number.isFinite(t.height)) return { hint: terrainView === 'contour' ? '등고선이 여러 겹 둘러쌀수록 높은 곳이에요. 높이 범례를 함께 봐요.' : '종이 층이 많이 쌓이고 색이 진할수록 높은 곳이에요. 높이 범례를 함께 봐요.', correct: false };
              if (t.region) return { hint: '굵은 경계선이 지역을 나눠요. 지역 이름을 찾아 그 선 안쪽에 꽂아요.', correct: false };
              if (t.most || t.least) return { hint: '범례에서 진하기가 무엇을 뜻하는지 먼저 읽고, 지역의 색을 견주어요.', correct: false };
              if (t.river || t.sea) return { hint: '범례와 지도 색을 보고, 파란 선과 물결 무늬를 찾아요.', correct: false };
              return { hint: showNames ? '지도의 기호와 이름을 하나씩 읽으며 찾는 곳을 찾아요.' : '범례에서 기호 모양을 먼저 보고, 지도에서 같은 모양을 찾아요.', correct: false };
            }
            if (mode === 'compass') return { hint: t.align ? '방위표의 빨간 바늘이 북쪽이에요. 지도의 북쪽 화살표와 같은 쪽을 가리키게 돌려요.' : '방위표를 지도의 북쪽 화살표에 맞춘 뒤, 출발 장소에 서서 도착 장소 쪽을 바라봐요.', correct: false };
            if (mode === 'legend') return { hint: showNames ? '지도에서 같은 기호를 찾아, 그 옆에 쓰인 이름을 읽어요.' : '기호마다 무엇을 나타내기로 약속했는지 떠올리고, 지도에서 그 기호가 놓인 자리도 함께 살펴요.', correct: false };
            if (mode === 'scale') return { hint: '두 장소 사이 길을 따라 칸을 세고, 축척 막대에서 한 칸이 얼마인지 읽어 곱해요.', correct: false };
          }
          if (lv === 2) return { hint: r.hint || r.feedback || '지금 상태에서 어긋난 곳을 찾아봐요.', correct: false };
          // 3단계: 풀이
          if (pinMode && pinTargetOf(t)) {
            const c = cellsOf(t)[0];
            // '학교 화단은 학교 화단이에요'처럼 이름을 되풀이하지 않게: 찾는 이름과 칸 이름이 같으면 자리를 말로 짚는다
            const who = t.place || t.region || (t.from ? `${t.from}에서 ${t.dir}쪽` : '찾는 곳'); let spot = where(c);
            if (spot === who || spot === t.place || spot === t.region) spot = cellWords(c);
            if (c) return { hint: `${josa(who, '은', '는')} 지도의 ${areaWords(c)}, ${spot}에 있어요. 핀을 그 칸으로 옮겨요.`, correct: false };
          }
          if (mode === 'compass') { const w = wantDir(t); if (t.align && norm(rose) !== north) return { hint: `방위표의 북쪽이 ${josa(screenWord(north), '을', '를')} 가리키게 돌려요.`, correct: false }; if (w) return { hint: `방위표를 맞추면 ${josa(t.to || '도착', '은', '는')} ${t.from || '출발'}의 ${w}쪽이에요.`, correct: false }; }
          if (mode === 'legend') { const want = t.legend || Object.fromEntries(legendKeys.map((k) => [k, meanings[k] || ICONS[k].name])); const k = Object.keys(want).find((x) => legend[x] !== want[x]); if (k) return { hint: `이 기호(${shapeWord(k)})는 ‘${want[k]}’${has(want[k]) ? '이에요' : '예요'}.`, correct: false }; }
          if (mode === 'scale') { const r2 = routeOf(t); const w = wantDist(t); if (r2) return { hint: `길이 ${r2.cells}칸이에요. ${r2.cells} × ${fmt(scale.cell)}${scale.unit} = ${fmt(w)}${scale.unit}예요.`, correct: false }; if (w != null) return { hint: `거리는 ${fmt(w)}${scale.unit}예요.`, correct: false }; }
          if (t.pick != null && o.ask) return { hint: `답은 ‘${o.ask.choices[t.pick]}’이에요. 지도에서 그 까닭을 찾아봐요.`, correct: false };
          return { hint: r.hint || '문제를 다시 읽어요.', correct: false };
        },
        solve(t) {
          t = t || target || {};
          const s = state();
          if (pinMode && pinTargetOf(t)) { const c = cellsOf(t)[0]; if (c) s.pin = c; }
          if (mode === 'compass') { if (t.align) s.rose = north; const w = wantDir(t); if (w) s.dir = w; }
          if (mode === 'legend') s.legend = Object.assign({}, s.legend, t.legend || Object.fromEntries(legendKeys.map((k) => [k, meanings[k] || ICONS[k].name])));
          if (mode === 'scale') { const w = wantDist(t); if (w != null) s.dist = w; }
          if (t.pick != null) s.pick = t.pick;
          apply(s, false);
        },
        // 그럴듯한 오개념 상태: 반대 방위·위쪽을 북쪽으로 읽기·옆 장소·두 이름 바꾸기·칸 수만 세기. 지금 상태와 같은 것은 건너뛴다.
        wrongAnswer(t) {
          t = t || target || {};
          const base = (() => { const save = state(); this.solve(t); const s = state(); apply(save, false); return s; })();
          const list = [];
          const isWrong = (s) => { const save = state(); apply(s, false); const r = judge(t, true); apply(save, false); return !r.correct && !r.incomplete; };
          if (pinMode && pinTargetOf(t)) {
            const ok = cellsOf(t);
            if (t.from && t.dir) { const p = placeBy(t.from); const opp = DIRS8[(DIRS8.indexOf(t.dir) + 4) % 8]; const v = screenVec(opp); const k = t.steps || 1; if (p) list.push([p.at[0] + v[0] * k, p.at[1] + v[1] * k]); if (p && north) { const v0 = DIRVEC[t.dir]; list.push([p.at[0] + v0[0] * k, p.at[1] + v0[1] * k]); } }
            places.forEach((p) => list.push(p.at));
            if (ok[0]) [[1, 0], [-1, 0], [0, 1], [0, -1]].forEach(([dx, dy]) => list.push([ok[0][0] + dx, ok[0][1] + dy]));
            allCells.forEach((c) => list.push(c));
            const cand = list.filter((c) => inMap(c[0], c[1])).map((c) => Object.assign({}, base, { pin: [c[0], c[1]] }));
            const cur = JSON.stringify(state());
            return cand.find((s) => JSON.stringify(s) !== cur && isWrong(s)) || null;
          }
          const cands = [];
          if (mode === 'compass') {
            const w = wantDir(t); const a = t.from && placeBy(t.from); const b = t.to && placeBy(t.to);
            if (w && a && b && north) cands.push(Object.assign({}, base, { dir: dirName(a.at, b.at, 0) }));
            if (w) { cands.push(Object.assign({}, base, { dir: DIRS8[(DIRS8.indexOf(w) + 4) % 8] })); DIRS.forEach((d) => cands.push(Object.assign({}, base, { dir: d }))); }
            if (t.align) { cands.push(Object.assign({}, base, { rose: 0 })); cands.push(Object.assign({}, base, { rose: norm(north + 180) })); }
          }
          if (mode === 'legend') {
            const ks = Object.keys(base.legend || {});
            for (let i = 0; i + 1 < ks.length; i++) { const L = Object.assign({}, base.legend); [L[ks[i]], L[ks[i + 1]]] = [L[ks[i + 1]], L[ks[i]]]; cands.push(Object.assign({}, base, { legend: L })); }
            const ch = legendChoices(); ks.forEach((k) => ch.forEach((v) => { const L = Object.assign({}, base.legend, { [k]: v }); cands.push(Object.assign({}, base, { legend: L })); }));
          }
          if (mode === 'scale') { const r = routeOf(t); const w = wantDist(t); if (r) cands.push(Object.assign({}, base, { dist: r.cells * distStep === w ? r.cells : r.cells * distStep })); if (w != null) [1, -1, 2, -2].forEach((k) => cands.push(Object.assign({}, base, { dist: Math.max(0, w + k * distStep) }))); }
          if (t.pick != null && o.ask) o.ask.choices.forEach((_, i) => { if (i !== t.pick) cands.push(Object.assign({}, base, { pick: i })); });
          const cur = JSON.stringify(state());
          return cands.find((s) => JSON.stringify(s) !== cur && isWrong(s)) || null;
        },
        distance(a, b) {
          a = a || {}; b = b || {};
          let d = 0;
          if ('pin' in a || 'pin' in b) d += a.pin && b.pin ? Math.abs(a.pin[0] - b.pin[0]) + Math.abs(a.pin[1] - b.pin[1]) : a.pin || b.pin ? 2 : 0;
          if ('rose' in a || 'rose' in b) { const x = Math.abs(norm((a.rose || 0) - (b.rose || 0))); d += Math.min(x, 360 - x) / roseStep; }
          if ('dir' in a || 'dir' in b) d += a.dir === b.dir ? 0 : 1;
          if (a.legend || b.legend) { const ks = new Set([...Object.keys(a.legend || {}), ...Object.keys(b.legend || {})]); ks.forEach((k) => { if ((a.legend || {})[k] !== (b.legend || {})[k]) d += 1; }); }
          if ('dist' in a || 'dist' in b) d += a.dist == null || b.dist == null ? (a.dist === b.dist ? 0 : 2) : Math.abs(a.dist - b.dist) / distStep;
          if ('pick' in a || 'pick' in b) d += a.pick === b.pick ? 0 : 1;
          return d;
        },
        async demo(t) {
          t = t || {};
          if (pinMode && pinTargetOf(t)) { const c = cellsOf(t)[0]; if (c) setPin(c, 'demo'); }
          else this.solve(t);
          await kit.wait(400);
        },
      };
      function shapeWord(k) { return { school: '깃발', hospital: '십자', post: '편지 봉투', police: '방패', fire: '불꽃', office: '겹동그라미', park: '나무', mountain: '세모 봉우리', temple: '지붕', heritage: '문 모양', museum: '기둥 건물', station: '기차', bus: '버스', market: '천막 가게', library: '펼친 책', house: '집', apartment: '높은 건물', factory: '톱니 지붕', field: '세로줄', orchard: '사과', port: '닻', airport: '비행기', bridge: '다리', beach: '파라솔', city: '동그라미 점', capital: '별 동그라미', island: '물 위 땅', forest: '나무 두 그루', lighthouse: '등대', castle: '성벽', dot: '점' }[k] || '기호'; }
    },
  });
})(window.PaperKit);
