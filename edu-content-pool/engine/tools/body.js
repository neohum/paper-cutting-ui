/* 종이 몸 — 피부·근육·뼈·몸속 기관 네 겹의 종이로 만든 사람 몸. 겹 벗기기, 기관 찾기, 기관과 하는 일 잇기,
 * 음식물·공기·오줌이 지나는 차례, 팔을 굽힐 때의 뼈와 근육, 몸의 부분(체육 스트레칭·감각 기관) 고르기를 모드로 다룬다.
 *
 * 모드(o.mode)   무엇을 하나                                                  상태                                 target
 * -------------  -----------------------------------------------------------  -----------------------------------  ------------------------------------------------------------
 * 'layers'(기본) 피부 → 근육 → 뼈 → 몸속 기관 차례로 한 겹씩 벗기고 덮는다       { peeled: 0~3 }(벗긴 겹 수)            { layer: '피부'|'근육'|'뼈'|'기관' }(맨 위에 보일 겹) | { peeled: n }
 * 'find'         몸속 기관을 눌러 하나 고른다                                   { sel: '위'|null }                    { sel: '위' } | { job: '음식물의 영양소를 흡수해요' }(그 일을 하는 기관)
 * 'path'         기관을 차례로 눌러 지나는 길을 만든다(되돌리기·지우기 단추)     { path: ['입','식도',…] }              { path: [...] } | { system: '소화'|'호흡'|'배설' }
 * 'match'        기관마다 하는 일(또는 그림 번호마다 이름)을 눌러 바꿔 고른다    { match: { 기관: 고른 값|null } }       { match: { 위: '…', … } } | { match: 'auto' }(기관의 기본 일·이름)
 * 'arm'          아래팔을 끌거나 방향키로 굽히고 편다(뼈와 두 근육이 보인다)      { angle: 0~150 }(0 = 쭉 폄)            { bent: true|false } | { shorter: '안쪽'|'바깥쪽' }(짧아지는 근육) | { angle: n }
 * 'parts'        몸의 부분을 눌러 여러 곳을 고르고 다시 눌러 뺀다               { parts: ['목','무릎',…] }             { parts: [...] }(고른 곳이 정확히 이것들)
 * (모든 모드)     ask 보기 고르기를 함께 쓸 수 있다                               + pick: 번호|null                      + pick: 정답 번호 (ask만 묻는 문항은 { pick })
 *
 * 옵션
 *   organs   find·path·match에 나올 기관(기본: 모든 기관). 기관: 뇌 코 입 기관 식도 폐 심장 간 위 콩팥 작은창자 큰창자 방광 항문
 *   jobs     { 기관: '하는 일' } 기본 일 바꾸기 · matchBy 'job'(기본, 줄 = 기관 이름, 고를 것 = 일) | 'name'(줄 = 그림 번호, 고를 것 = 이름)
 *   names    고른 기관·부분 이름을 바로 보여 줌(find·parts, 기본 거짓 — 쉬움 단계용) · numbers ['간','위',…](그림에 ①② 번호 — 활동지용)
 *   parts    parts 모드에서 고를 수 있는 곳(기본: 눈 귀 코 혀 피부 목 어깨 팔꿈치 손목 허리 무릎 발목 허벅지)
 *   step     arm 한 번에 굽히는 각(기본 10) · start(처음 상태)
 *   readout  읽기 글자(겹 이름·고른 수·팔 각도) · revealAfterCheck(읽기 글자·근육 상태는 맞힌 확인 뒤에만)
 *   ask { q, choices[], why?[] } · readOnly(조작 잠금 — 그림을 보고 고르는 문항) · print(활동지: 흑백, 정답 숨김) · printAnswers(활동지에 이름 적기)
 * 키보드: 기관·부분은 Tab 뒤 Enter/Space, 팔은 ↑/→ 굽히기 ↓/← 펴기, 겹·되돌리기·잇기 단추는 교구 아래 단추(44px).
 * 예) 겹: { tool:'body', options:{ mode:'layers' }, target:{ layer:'뼈' } }
 *     차례: options:{ mode:'path' }, target:{ system:'소화' }
 *     잇기: options:{ mode:'match', organs:['심장','폐','위','콩팥'] }, target:{ match:'auto' }
 *     체육: options:{ mode:'parts', parts:['목','어깨','허리','무릎','발목'] }, target:{ parts:['목','발목'] }
 */
(function (K) {
  'use strict';
  // 무대가 화면에 그려질 배율(화면 px ÷ viewBox 단위) 어림: 상자 안쪽 폭과 무대 높이 제한(max-height)을 함께 본다. 모르면 1
  const stageScale = (box, W, H) => {
    if (!box || !(box.clientWidth > 0) || typeof getComputedStyle !== 'function') return 1;
    const cs = getComputedStyle(box); const bw = box.clientWidth - (parseFloat(cs.paddingLeft) || 0) - (parseFloat(cs.paddingRight) || 0);
    let mh = Infinity;
    try { const t = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); t.setAttribute('class', 'pk-stage'); box.appendChild(t); const v = parseFloat(getComputedStyle(t).maxHeight); t.remove(); if (Number.isFinite(v) && v > 0) mh = v; } catch (_) { /* 높이 제한 모름 */ }
    return bw > 0 ? Math.min(bw / W, H ? mh / H : Infinity) : 1;
  };
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const has = (w) => { const c = String(w).charCodeAt(String(w).length - 1); return c >= 0xac00 && c <= 0xd7a3 && (c - 0xac00) % 28 !== 0; };
  const josa = (w, a, b) => `${w}${has(w) ? a : b}`;
  const levelOf = (opts) => {
    const want = opts && Number.isInteger(opts.level) ? opts.level : 1;
    const a = opts && Number.isFinite(opts.attempts) ? opts.attempts : null;
    return Math.max(1, Math.min(3, want, a == null ? 3 : a >= 2 ? 3 : a >= 1 ? 2 : 1));
  };
  const LAYERS = ['피부', '근육', '뼈', '기관'];
  const LAYER_TEXT = { 피부: '피부', 근육: '근육', 뼈: '뼈', 기관: '몸속 기관' };
  // 기관: 누르는 자리(at, 여러 곳일 수 있다)와 기본 하는 일
  const ORG = {
    뇌: { at: [[165, 44]], job: '생각하고 몸에 명령을 내려요' },
    코: { at: [[165, 66]], job: '숨을 들이쉬고 냄새를 맡아요' },
    입: { at: [[165, 83]], job: '음식물을 잘게 부수고 침과 섞어요' },
    기관: { at: [[156, 124]], job: '들이마신 공기가 폐로 가는 길이에요' },
    식도: { at: [[176, 124]], job: '삼킨 음식물을 위로 보내요' },
    폐: { at: [[134, 165], [198, 165]], job: '몸에 산소를 받아들이고 이산화 탄소를 내보내요' },
    심장: { at: [[170, 192]], job: '펌프처럼 뛰어 피를 온몸으로 보내요' },
    간: { at: [[138, 216]], job: '쓸개즙을 만들고 영양소를 저장해요' },
    위: { at: [[196, 214]], job: '위액으로 음식물을 더 잘게 쪼개요' },
    콩팥: { at: [[124, 246], [206, 246]], job: '피 속의 노폐물을 걸러 오줌을 만들어요' },
    작은창자: { at: [[165, 254]], job: '음식물의 영양소를 흡수해요' },
    큰창자: { at: [[139, 276], [191, 276]], job: '음식물 찌꺼기의 물을 흡수해요' },
    방광: { at: [[168, 293]], job: '오줌을 모았다가 몸 밖으로 내보내요' },
    항문: { at: [[165, 316]], job: '똥을 몸 밖으로 내보내요' },
  };
  const ORG_NAMES = Object.keys(ORG);
  const SYSTEMS = { 소화: ['입', '식도', '위', '작은창자', '큰창자', '항문'], 호흡: ['코', '기관', '폐'], 배설: ['콩팥', '방광'] };
  const SYS_WHAT = { 소화: '음식물', 호흡: '공기', 배설: '오줌' };
  // 몸의 부분(겉): 누르는 자리
  const PART = {
    눈: [[152, 54], [178, 54]], 귀: [[126, 60], [204, 60]], 코: [[165, 67]], 혀: [[165, 84]], 피부: [[58, 318]],
    목: [[165, 106]], 어깨: [[110, 122], [220, 122]], 팔꿈치: [[80, 208], [250, 208]], 손목: [[64, 294], [266, 294]],
    허리: [[165, 262]], 허벅지: [[140, 330], [190, 330]], 무릎: [[140, 362], [190, 362]], 발목: [[140, 404], [190, 404]],
    가슴: [[165, 160]], 배: [[165, 220]],
  };
  const PART_DEFAULT = ['눈', '귀', '코', '혀', '피부', '목', '어깨', '팔꿈치', '손목', '허리', '허벅지', '무릎', '발목'];
  const CIRC = ['①', '②', '③', '④', '⑤', '⑥', '⑦', '⑧', '⑨', '⑩', '⑪', '⑫', '⑬', '⑭'];

  K.registerTool('body', {
    name: '종이 몸',
    create(box, o, kit) {
      const print = !!o.print; const mode = ['layers', 'find', 'path', 'match', 'arm', 'parts'].includes(o.mode) ? o.mode : 'layers';
      const readOnly = !!o.readOnly; const live = !print && !readOnly;
      const ink = print ? '#000' : '#3D352E';
      // 좁은 화면(휴대폰)과 활동지는 몸 그림 아래에 알림판을 둔다(활동지는 알림판 없이 그림만). 팔 모드는 늘 옆에 둔다
      const narrow = mode !== 'arm' && (print || (box.clientWidth > 0 && box.clientWidth < 520)); const noPane = narrow && print;
      const W = narrow ? 340 : 600; const H = narrow && !print ? 626 : 430;
      const st = kit.stage(box, { viewBox: [W, H], label: '종이 몸. 피부·근육·뼈·몸속 기관 네 겹으로 된 사람 몸이에요.' });
      if (print && o.wide) { const f = box.closest('figure'); if (f) f.style.gridColumn = '1 / -1'; st.svg.style.maxHeight = '88mm'; }
      const jobs = Object.assign({}, Object.fromEntries(ORG_NAMES.map((n) => [n, ORG[n].job])), o.jobs || {});
      const organs = (Array.isArray(o.organs) && o.organs.length ? o.organs : ORG_NAMES).filter((n) => ORG[n]);
      const partList = (Array.isArray(o.parts) && o.parts.length ? o.parts : PART_DEFAULT).filter((n) => PART[n]);
      const step = Number.isFinite(o.step) && o.step > 0 ? o.step : 10;
      const matchBy = o.matchBy === 'name' ? 'name' : 'job';
      let peeled = 0; let sel = null; let path = []; let match = {}; let angle = 0; let parts = []; let pick = null;
      let target = null; let revealed = false;

      const C = print
        ? { skin: '#FFFFFF', skinLine: '#000', muscle: '#FFFFFF', muscleLine: '#000', bone: '#FFFFFF', boneLine: '#000', base: '#FFFFFF', organ: () => '#FFFFFF', line: '#000' }
        : { skin: '#F4C9A6', skinLine: '#B98463', muscle: '#D9776B', muscleLine: '#A8473F', bone: '#FBF6E9', boneLine: '#A99E88', base: '#FFF3E8', organ: (n) => ORG_FILL[n] || '#F2B8B5', line: '#6E5A4A' };
      const ORG_FILL = { 뇌: '#F2B8C6', 코: '#F2B8B5', 입: '#E58C8A', 기관: '#A9D3E6', 식도: '#F5C49C', 폐: '#F4AFB4', 심장: '#D9534F', 간: '#A0522D', 위: '#F5B38A', 콩팥: '#B5534A', 작은창자: '#F7C9A0', 큰창자: '#E8A06E', 방광: '#F4DC7A', 항문: '#B98463' };

      // ---- 무대: 바탕 판, 오른쪽 알림판 ----
      kit.piece(st, st.layer('board'), { shape: { type: 'rect', x: 10, y: 10, w: W - 20, h: H - 20, rx: 18 }, color: 'cream', depth: 2, fill: print ? '#FFFFFF' : '#FBF7EF', texture: !print });
      const fig = st.layer('figure');
      const sil = (parent, fill, stroke, sw) => {
        const g = kit.el('g', null, parent); const a = { fill, stroke, 'stroke-width': sw, 'stroke-linejoin': 'round' };
        kit.el('path', Object.assign({ d: 'M104 120 Q86 124 80 150 L52 300 Q50 318 62 324 Q74 326 76 306 L104 190 Z' }, a), g); // 왼팔
        kit.el('path', Object.assign({ d: 'M226 120 Q244 124 250 150 L278 300 Q280 318 268 324 Q256 326 254 306 L226 190 Z' }, a), g); // 오른팔
        kit.el('path', Object.assign({ d: 'M122 300 L120 408 Q120 420 136 420 L154 420 Q160 418 158 404 L163 312 Z' }, a), g); // 왼다리
        kit.el('path', Object.assign({ d: 'M208 300 L210 408 Q210 420 194 420 L176 420 Q170 418 172 404 L167 312 Z' }, a), g); // 오른다리
        kit.el('path', Object.assign({ d: 'M150 96 L180 96 L182 116 L148 116 Z' }, a), g); // 목
        kit.el('path', Object.assign({ d: 'M112 114 Q165 104 218 114 Q232 118 230 140 L224 300 Q224 318 200 318 L130 318 Q106 318 106 300 L100 140 Q98 118 112 114 Z' }, a), g); // 몸통
        kit.el('circle', Object.assign({ cx: 165, cy: 58, r: 40 }, a), g); // 머리
        return g;
      };
      sil(fig, C.base, print ? '#000' : '#D9C3AE', 2);
      // 몸속 기관 겹
      const organL = kit.el('g', { class: 'bd-organs' }, fig);
      const drawOrgan = (n, g) => {
        const f = C.organ(n); const s = print ? '#000' : 'rgba(61,53,46,0.55)'; const a = { fill: f, stroke: s, 'stroke-width': 1.5 };
        const E = (cx, cy, rx, ry, extra) => kit.el('ellipse', Object.assign({ cx, cy, rx, ry }, a, extra || {}), g);
        if (n === '뇌') { E(165, 44, 28, 20); kit.el('path', { d: 'M145 40 Q152 32 158 42 Q164 30 172 42 Q178 32 186 42', fill: 'none', stroke: s, 'stroke-width': 1.4 }, g); }
        else if (n === '코') E(165, 66, 7, 5);
        else if (n === '입') E(165, 83, 11, 4.5);
        else if (n === '기관') { kit.el('rect', Object.assign({ x: 152, y: 92, width: 8, height: 56, rx: 3 }, a), g); kit.el('path', { d: 'M156 146 L140 160 M156 146 L184 160', stroke: print ? '#000' : '#7FB3CC', 'stroke-width': 5, 'stroke-linecap': 'round', fill: 'none' }, g); }
        else if (n === '식도') kit.el('rect', Object.assign({ x: 172, y: 88, width: 8, height: 112, rx: 3 }, a), g);
        else if (n === '폐') { E(136, 166, 22, 40); E(197, 166, 20, 38); }
        else if (n === '심장') kit.el('path', Object.assign({ d: 'M170 204 L156 190 Q150 180 160 176 Q166 175 170 182 Q174 175 180 176 Q190 180 184 190 Z' }, a), g);
        else if (n === '간') kit.el('path', Object.assign({ d: 'M110 206 Q140 196 172 206 Q170 222 150 228 Q122 230 112 220 Z' }, a), g);
        else if (n === '위') kit.el('path', Object.assign({ d: 'M180 200 Q200 196 214 206 Q220 224 202 230 Q186 232 180 222 Q190 218 186 208 Z' }, a), g);
        else if (n === '콩팥') { E(124, 246, 8, 12); E(206, 246, 8, 12); }
        else if (n === '작은창자') { kit.el('circle', Object.assign({ cx: 165, cy: 255, r: 21 }, a), g); kit.el('path', { d: 'M150 248 Q158 240 166 248 T182 248 M150 260 Q158 252 166 260 T182 260', fill: 'none', stroke: s, 'stroke-width': 1.3 }, g); }
        else if (n === '큰창자') kit.el('path', { d: 'M190 296 L190 234 Q190 228 184 228 L146 228 Q140 228 140 234 L140 290 Q140 300 160 306', fill: 'none', stroke: print ? '#000' : f, 'stroke-width': print ? 2 : 10, 'stroke-linecap': 'round' }, g);
        else if (n === '방광') E(172, 294, 10, 7);
        else if (n === '항문') kit.el('circle', Object.assign({ cx: 165, cy: 314, r: 4.5 }, a), g);
      };
      // 큰창자는 작은창자 뒤에 깔린다
      ['큰창자'].concat(ORG_NAMES.filter((n) => n !== '큰창자')).forEach((n) => { if (mode === 'layers' || organs.includes(n)) drawOrgan(n, organL); });
      // 뼈 겹
      const boneL = kit.el('g', { class: 'bd-bones' }, fig);
      (() => {
        const a = { fill: C.bone, stroke: C.boneLine, 'stroke-width': 1.6 }; const g = boneL;
        kit.el('path', Object.assign({ d: 'M130 60 Q130 22 165 20 Q200 22 200 60 Q200 80 188 86 L186 96 L144 96 L142 86 Q130 80 130 60 Z' }, a), g);
        kit.el('circle', { cx: 152, cy: 58, r: 7, fill: C.boneLine, opacity: 0.6 }, g); kit.el('circle', { cx: 178, cy: 58, r: 7, fill: C.boneLine, opacity: 0.6 }, g);
        for (let y = 100; y < 300; y += 12) kit.el('rect', Object.assign({ x: 159, y, width: 12, height: 9, rx: 2 }, a), g);
        for (let i = 0; i < 6; i++) { const y = 134 + i * 16; kit.el('path', { d: `M160 ${y} Q120 ${y - 6} 116 ${y + 14}`, fill: 'none', stroke: C.boneLine, 'stroke-width': 5, opacity: print ? 1 : 0.85 }, g); kit.el('path', { d: `M170 ${y} Q210 ${y - 6} 214 ${y + 14}`, fill: 'none', stroke: C.boneLine, 'stroke-width': 5, opacity: print ? 1 : 0.85 }, g); }
        kit.el('path', Object.assign({ d: 'M128 286 Q165 270 202 286 L196 312 Q165 300 134 312 Z' }, a), g);
        kit.el('path', { d: 'M114 118 L150 112 M216 118 L180 112', stroke: C.boneLine, 'stroke-width': 5, 'stroke-linecap': 'round' }, g);
        const bone = (x1, y1, x2, y2) => kit.el('line', { x1, y1, x2, y2, stroke: C.boneLine, 'stroke-width': 9, 'stroke-linecap': 'round' }, g);
        const boneIn = (x1, y1, x2, y2) => kit.el('line', { x1, y1, x2, y2, stroke: C.bone, 'stroke-width': 6, 'stroke-linecap': 'round' }, g);
        [[100, 130, 82, 210], [82, 210, 64, 300], [230, 130, 248, 210], [248, 210, 266, 300], [140, 310, 140, 362], [140, 362, 140, 410], [190, 310, 190, 362], [190, 362, 190, 410]].forEach((b) => { bone(...b); boneIn(...b); });
      })();
      // 근육 겹
      const muscleL = kit.el('g', { class: 'bd-muscles' }, fig);
      (() => {
        sil(muscleL, C.muscle, C.muscleLine, 1.6);
        const s = { fill: 'none', stroke: print ? '#000' : 'rgba(255,255,255,0.45)', 'stroke-width': 1.4 };
        kit.el('path', Object.assign({ d: 'M116 140 Q140 128 162 140 Q160 168 128 170 Q114 164 116 140 Z M214 140 Q190 128 168 140 Q170 168 202 170 Q216 164 214 140 Z' }, s), muscleL);
        for (let y = 186; y < 300; y += 26) kit.el('path', Object.assign({ d: `M140 ${y} L190 ${y} M165 ${y - 6} L165 ${y + 20}` }, s), muscleL);
        kit.el('path', Object.assign({ d: 'M90 160 Q84 200 86 230 M240 160 Q246 200 244 230 M136 320 Q132 360 140 400 M194 320 Q198 360 190 400' }, s), muscleL);
      })();
      // 피부 겹(얼굴 포함)
      const skinL = kit.el('g', { class: 'bd-skin' }, fig);
      sil(skinL, C.skin, C.skinLine, 2);
      kit.el('path', { d: 'M126 52 Q128 16 165 16 Q202 16 204 52 Q190 30 165 32 Q140 30 126 52 Z', fill: print ? '#FFFFFF' : '#5A4636', stroke: ink, 'stroke-width': print ? 1.5 : 0 }, skinL);
      kit.el('circle', { cx: 152, cy: 56, r: 3.5, fill: ink }, skinL); kit.el('circle', { cx: 178, cy: 56, r: 3.5, fill: ink }, skinL);
      kit.el('path', { d: 'M163 64 Q165 70 167 64', fill: 'none', stroke: ink, 'stroke-width': 1.6 }, skinL);
      kit.el('path', { d: 'M156 80 Q165 88 174 80', fill: 'none', stroke: ink, 'stroke-width': 2, 'stroke-linecap': 'round' }, skinL);
      const layerEls = [skinL, muscleL, boneL, organL];

      // ---- 고르기 표시와 누르는 자리 ----
      const markL = st.layer('marks'); markL.setAttribute('pointer-events', 'none');
      const hitL = st.layer('hits');
      const pane = st.layer('pane'); pane.setAttribute('pointer-events', 'none');
      const PX = narrow ? 16 : 330; const PY = narrow ? 432 : 26; const PW = narrow ? 308 : 244; const PH = narrow ? 176 : 378;
      const Y = (y) => PY + (y - 26) * (narrow ? 0.82 : 1);
      if (!noPane) kit.piece(st, pane, { shape: { type: 'rect', x: PX, y: PY, w: PW, h: PH, rx: 16 }, color: 'cream', depth: 1, fill: '#FFFFFF' });
      const dyn = kit.el('g', null, pane); if (noPane) pane.style.display = 'none';
      const items = mode === 'parts' ? partList : (mode === 'find' || mode === 'path' || mode === 'match') ? organs : [];
      const spots = (n) => (mode === 'parts' ? PART[n] : ORG[n].at);
      const hitG = {};
      if (items.length && !print) {
        // 몸 위 아무 데나 눌러도 가장 가까운 기관·부분이 골라진다(손가락이 작은 기관을 정확히 짚지 않아도 된다)
        const over = kit.el('rect', { x: 20, y: 12, width: 300, height: 410, fill: 'transparent', class: 'pk-hit' }, hitL);
        const nearest = (e) => {
          const p = st.point(e); let best = null; let bd = 52;
          items.forEach((n) => spots(n).forEach(([x, y]) => { const d = Math.hypot(p.x - x, p.y - y); if (d < bd) { bd = d; best = n; } }));
          return best;
        };
        if (live && mode !== 'match') over.addEventListener('click', (e) => { const best = nearest(e); if (best) act(best); });
        // 누르는 동그라미는 화면에서 지름 48px 이상(손가락 크기). 이웃 자리와 겹치면 누른 곳에서 가장 가까운 자리가 골라진다
        const scr = Math.min(stageScale(box, W, H), 2);
        const hitR = Math.min(40, Math.max(13, 24 / scr));
        // 이름을 숨긴 문항(names 거짓)에서 스크린리더가 '몸의 부분 3'처럼 번호만 읽지 않게, 답을 드러내지 않는 그림 속 자리를 함께 읽는다
        const where = ([x, y]) => {
          const v = y < 100 ? '머리' : y < 140 ? '목과 어깨 높이' : y < 240 ? '가슴과 팔 높이' : y < 300 ? '배와 손 높이' : y < 380 ? '다리 위쪽' : '다리 아래쪽';
          const h = x < 100 ? '왼쪽 바깥' : x < 158 ? '왼쪽' : x <= 172 ? '가운데' : x <= 230 ? '오른쪽' : '오른쪽 바깥';
          return `그림의 ${v}, ${h}`;
        };
        items.forEach((n, i) => {
          const [x, y] = spots(n)[0];
          const g = kit.el('g', { tabindex: live && mode !== 'match' ? 0 : null, role: live && mode !== 'match' ? 'button' : null, class: 'bd-spot' }, hitL);
          kit.el('circle', { cx: x, cy: y, r: hitR, fill: 'transparent', class: 'pk-hit' }, g);
          const label = mode === 'parts' ? (o.names ? n : `몸의 부분 ${i + 1}: ${where([x, y])}`) : (o.names ? n : `몸속 ${i + 1}번: ${where([x, y])}`);
          g.setAttribute('aria-label', label);
          if (live && mode !== 'match') {
            g.addEventListener('click', (e) => { e.stopPropagation(); act(e.detail === 0 ? n : (nearest(e) || n)); });
            g.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); act(n); } });
          }
          hitG[n] = g;
        });
      }
      const ring = (x, y, txt, strong) => {
        kit.el('circle', { cx: x, cy: y, r: 13, fill: strong ? 'rgba(255,255,255,0.35)' : 'none', stroke: print ? '#000' : '#473B6B', 'stroke-width': 3.2 }, markL);
        if (txt) { const t = kit.el('text', { x: x + (x > 165 ? 16 : -16), y: y + 6, 'text-anchor': x > 165 ? 'start' : 'end', 'font-size': print ? 20 : 14, class: 'pk-text', fill: ink, stroke: print ? 'none' : '#FFFFFF', 'stroke-width': print ? 0 : 3, 'paint-order': 'stroke' }, markL); t.textContent = txt; }
      };

      // ---- 팔(arm 모드) ----
      let armG = null; let foreG = null; const EL = { x: 470, y: 214 }; const FL = 128;
      if (mode === 'arm') {
        armG = kit.el('g', null, st.layer('arm'));
        foreG = kit.el('g', { class: 'bd-fore', tabindex: live ? 0 : null, role: live ? 'slider' : null, 'aria-label': '아래팔. 방향키로 굽히고 펴요.', 'aria-valuemin': 0, 'aria-valuemax': 150 }, st.layer('fore'));
        if (live) {
          let drag = false;
          const at = (e) => { const p = st.point(e); const a = (Math.atan2(-(p.x - EL.x), p.y - EL.y) * 180) / Math.PI; return Math.max(0, Math.min(150, Math.round(a / step) * step)); };
          foreG.addEventListener('pointerdown', (e) => { e.preventDefault(); foreG.setPointerCapture(e.pointerId); drag = true; foreG.classList.add('pk-lifted'); });
          foreG.addEventListener('pointermove', (e) => { if (!drag) return; const a = at(e); if (a !== angle) { angle = a; changed(true); } });
          const end = () => { if (!drag) return; drag = false; foreG.classList.remove('pk-lifted'); changed(); kit.announce(`팔을 ${angle}° 굽혔어요.`); };
          foreG.addEventListener('pointerup', end); foreG.addEventListener('pointercancel', end);
          foreG.addEventListener('keydown', (e) => {
            const d = e.key === 'ArrowUp' || e.key === 'ArrowRight' ? step : e.key === 'ArrowDown' || e.key === 'ArrowLeft' ? -step : 0;
            if (!d) return; e.preventDefault(); const a = Math.max(0, Math.min(150, angle + d)); if (a !== angle) { angle = a; changed(); kit.announce(`팔을 ${angle}° 굽혔어요.`); }
          });
        }
      }
      function drawArm() {
        armG.textContent = ''; foreG.textContent = '';
        const r = (angle * Math.PI) / 180; const ux = -Math.sin(r); const uy = Math.cos(r);
        const hand = { x: EL.x + ux * FL, y: EL.y + uy * FL };
        const S0 = { x: EL.x, y: 70 };
        // 위팔 살·뼈
        kit.el('line', { x1: S0.x, y1: S0.y, x2: EL.x, y2: EL.y, stroke: print ? '#FFFFFF' : '#F4C9A6', 'stroke-width': 54, 'stroke-linecap': 'round', opacity: print ? 1 : 0.55 }, armG);
        kit.el('line', { x1: S0.x, y1: S0.y, x2: EL.x, y2: EL.y, stroke: C.boneLine, 'stroke-width': 13, 'stroke-linecap': 'round' }, armG);
        kit.el('line', { x1: S0.x, y1: S0.y, x2: EL.x, y2: EL.y, stroke: C.bone, 'stroke-width': 8, 'stroke-linecap': 'round' }, armG);
        // 두 근육: 안쪽(앞)은 굽힐수록 짧고 두꺼워지고, 바깥쪽(뒤)은 늘어나 가늘어진다
        const k = angle / 150;
        const inEnd = { x: EL.x + ux * 30, y: EL.y + uy * 30 }; const inStart = { x: S0.x - 12, y: S0.y + 24 };
        const muscle = (a, b, thick, side) => {
          const mx = (a.x + b.x) / 2 + side; const my = (a.y + b.y) / 2; const len = Math.hypot(b.x - a.x, b.y - a.y) / 2; const rot = (Math.atan2(b.y - a.y, b.x - a.x) * 180) / Math.PI;
          kit.el('ellipse', { cx: mx, cy: my, rx: len, ry: thick, transform: `rotate(${rot} ${mx} ${my})`, fill: C.muscle, stroke: C.muscleLine, 'stroke-width': 1.6 }, armG);
        };
        muscle(inStart, inEnd, 8 + 9 * k, -10);
        muscle({ x: S0.x + 14, y: S0.y + 18 }, { x: EL.x + 10, y: EL.y + 6 }, 15 - 8 * k, 12);
        kit.el('circle', { cx: EL.x, cy: EL.y, r: 9, fill: C.bone, stroke: C.boneLine, 'stroke-width': 2 }, armG);
        // 아래팔(끄는 조각)
        kit.el('line', { x1: EL.x, y1: EL.y, x2: hand.x, y2: hand.y, stroke: 'transparent', 'stroke-width': 56, 'stroke-linecap': 'round', class: 'pk-hit' }, foreG);
        kit.el('line', { x1: EL.x, y1: EL.y, x2: hand.x, y2: hand.y, stroke: print ? '#FFFFFF' : '#F4C9A6', 'stroke-width': 40, 'stroke-linecap': 'round', opacity: print ? 1 : 0.55 }, foreG);
        kit.el('line', { x1: EL.x, y1: EL.y, x2: hand.x, y2: hand.y, stroke: C.boneLine, 'stroke-width': 11, 'stroke-linecap': 'round' }, foreG);
        kit.el('line', { x1: EL.x, y1: EL.y, x2: hand.x, y2: hand.y, stroke: C.bone, 'stroke-width': 6, 'stroke-linecap': 'round' }, foreG);
        kit.el('circle', { cx: hand.x, cy: hand.y, r: 17, fill: C.skin, stroke: C.skinLine, 'stroke-width': 2 }, foreG);
        if (live) foreG.setAttribute('aria-valuenow', String(angle));
        // 근육 이름은 위팔 양옆 — 아래팔과 겹치지 않게 맨 위에
        paintArmLabels();
      }
      function paintArmLabels() {
        const t1 = kit.el('text', { x: EL.x - 40, y: 60, 'text-anchor': 'end', 'font-size': 15, class: 'pk-text', fill: ink }, armG); t1.textContent = '안쪽 근육';
        const t2 = kit.el('text', { x: EL.x + 40, y: 60, 'text-anchor': 'start', 'font-size': 15, class: 'pk-text', fill: ink }, armG); t2.textContent = '바깥쪽 근육';
      }

      // ---- HTML 단추(겹 벗기기·되돌리기·잇기) ----
      const ctl = !print && (mode === 'layers' || mode === 'path' || mode === 'match') ? document.createElement('div') : null;
      if (ctl) {
        ctl.style.cssText = 'display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin-top:8px';
        box.appendChild(ctl);
        ctl.addEventListener('click', (e) => {
          const b = e.target.closest('[data-do]'); if (!b || readOnly) return;
          const d = b.dataset.do;
          if (d === 'peel' && peeled < 3) { peeled++; changed(); kit.announce('한 겹 벗겼어요.'); }
          else if (d === 'cover' && peeled > 0) { peeled--; changed(); kit.announce('한 겹 덮었어요.'); }
          else if (d === 'undo' && path.length) { path.pop(); changed(); kit.announce('하나 되돌렸어요.'); }
          else if (d === 'clear' && path.length) { path = []; changed(); kit.announce('모두 지웠어요.'); }
          else if (d === 'm') { cycleMatch(b.dataset.k, 1); }
        });
        ctl.addEventListener('keydown', (e) => { const b = e.target.closest('[data-do="m"]'); if (!b || readOnly) return; if (e.key === 'ArrowUp' || e.key === 'ArrowDown') { e.preventDefault(); cycleMatch(b.dataset.k, e.key === 'ArrowUp' ? 1 : -1); } });
      }
      const btn = (d, icon, txt, extra, css) => `<button type="button" class="pl-btn pl-btn--small" tabindex="0" data-do="${d}" style="${css || 'min-height:44px'}" ${extra || ''}>${icon ? `<i class="fi ${icon}" aria-hidden="true"></i>` : ''}${esc(txt)}</button>`;
      // 잇기 보기: 기관의 일(또는 이름). 차례는 가나다로 섞어 그림 차례와 어긋나게
      const matchOpts = () => (matchBy === 'name' ? organs.slice() : organs.map((n) => jobs[n])).slice().sort((a, b) => a.localeCompare(b, 'ko'));
      function paintCtl() {
        if (!ctl) return;
        if (mode === 'layers') ctl.innerHTML = btn('peel', 'fi-rr-layers', '한 겹 벗기기', peeled >= 3 ? 'aria-disabled="true"' : '') + btn('cover', 'fi-rr-undo', '한 겹 덮기', peeled <= 0 ? 'aria-disabled="true"' : '');
        else if (mode === 'path') ctl.innerHTML = btn('undo', 'fi-rr-undo', '하나 되돌리기') + btn('clear', 'fi-rr-eraser', '모두 지우기');
        else if (mode === 'match') {
          ctl.style.flexDirection = 'column'; ctl.style.alignItems = 'stretch';
          ctl.innerHTML = organs.map((n, i) => {
            const head = matchBy === 'name' ? CIRC[i] : n; const v = match[n];
            return `<div style="display:flex;gap:8px;align-items:center;min-width:0"><span style="font-weight:700;flex:0 0 4.5em">${esc(head)}</span>${btn('m', 'fi-rr-angle-small-down', v || '눌러서 고르기', `data-k="${esc(n)}" aria-label="${esc(head)}: ${esc(v || '아직 안 고름')}. 누르면 다음 보기"`, 'min-height:44px;flex:1 1 auto;min-width:0;white-space:normal;text-align:left;height:auto;line-height:1.35;padding-top:6px;padding-bottom:6px')}</div>`;
          }).join('');
        }
      }
      function cycleMatch(n, d) {
        const opts = [null].concat(matchOpts()); let i = opts.indexOf(match[n] == null ? null : match[n]);
        i = (i + d + opts.length) % opts.length; match[n] = opts[i];
        changed(); paintCtl(); const b = ctl && ctl.querySelector(`[data-k="${CSS.escape(n)}"]`); if (b) b.focus();
        kit.announce(match[n] || '빈칸');
      }
      let askRow = null;
      if (!print && o.ask && Array.isArray(o.ask.choices)) {
        askRow = document.createElement('div'); askRow.setAttribute('role', 'radiogroup'); askRow.setAttribute('aria-label', o.ask.q || '고르기');
        askRow.style.cssText = 'display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin-top:8px';
        askRow.innerHTML = `${o.ask.q ? `<span style="font-weight:700;flex-basis:100%">${esc(o.ask.q)}</span>` : ''}${o.ask.choices.map((c, i) => `<button type="button" class="pl-btn pl-btn--small" tabindex="0" role="radio" aria-checked="false" data-pick="${i}" style="min-height:44px">${esc(c)}</button>`).join('')}`;
        askRow.addEventListener('click', (e) => { const b = e.target.closest('[data-pick]'); if (!b) return; pick = Number(b.dataset.pick); paintPick(); changed(); kit.announce(`${o.ask.choices[pick]}을 골랐어요.`); });
        box.appendChild(askRow);
      }
      function paintPick() { if (askRow) askRow.querySelectorAll('[data-pick]').forEach((b) => b.setAttribute('aria-checked', String(Number(b.dataset.pick) === pick))); }

      // ---- 그리기 ----
      const hidden = () => o.revealAfterCheck && !revealed;
      const topLayer = () => LAYERS[peeled];
      function paint() {
        const p = mode === 'layers' ? peeled : mode === 'parts' || mode === 'arm' ? 0 : 3;
        layerEls.forEach((g, i) => { g.style.display = i >= p ? '' : 'none'; });
        markL.textContent = ''; dyn.textContent = '';
        if (mode === 'arm') drawArm();
        const title = { layers: '몸의 겹', find: '몸속 기관 찾기', path: '지나가는 차례', match: '하는 일 잇기', arm: '뼈와 근육', parts: '몸의 부분' }[mode];
        const t = kit.el('text', { x: PX + 18, y: Y(56), 'font-size': 18, 'font-weight': 700, class: 'pk-text', fill: ink }, dyn); t.textContent = mode === 'arm' ? '' : title;
        const line = (y, txt, size) => { const e = kit.el('text', { x: PX + 18, y: y == null ? PY + PH - 18 : Y(y), 'font-size': size || 16, class: 'pk-text', fill: ink }, dyn); e.textContent = txt; return e; };
        if (mode === 'layers') {
          // 벗긴 겹은 오른쪽에 쌓인다(무엇을 벗겼는지만 보여 준다 — 지금 맨 위 겹 이름은 읽기 글자로만)
          line(84, '벗긴 겹', 15);
          for (let i = 0; i < peeled; i++) {
            const y = narrow ? PY + 54 : 98 + i * 50; const cx0 = narrow ? PX + 18 + i * 96 : PX + 18; const cw = narrow ? 88 : 150;
            kit.el('rect', { x: cx0, y, width: cw, height: 40, rx: 10, fill: print ? '#FFFFFF' : [C.skin, C.muscle, C.bone][i], stroke: print ? '#000' : 'rgba(61,53,46,0.4)', 'stroke-width': 1.5, transform: `rotate(${(i % 2 ? 2 : -2)} ${cx0 + cw / 2} ${y + 20})` }, dyn);
            const e = kit.el('text', { x: cx0 + cw / 2, y: y + 26, 'text-anchor': 'middle', 'font-size': 16, class: 'pk-text', fill: ink }, dyn); e.textContent = `${i + 1}. ${LAYER_TEXT[LAYERS[i]]}`;
          }
          if (!peeled) line(110, '아직 없어요', 15).setAttribute('opacity', 0.7);
          if (o.readout && !print) line(null, hidden() ? '확인하면 보여요' : `맨 위: ${LAYER_TEXT[topLayer()]}`);
        } else if (mode === 'find') {
          if (sel) ORG[sel].at.forEach(([x, y], i) => ring(x, y, i === 0 && (o.names || o.printAnswers) && !hidden() ? sel : '', true));
          line(88, sel ? (o.names && !hidden() ? `고른 것: ${sel}` : '하나 골랐어요') : '몸속에서 하나를 눌러요', 15);
          if (sel && o.names && o.readout && !hidden()) wrapText(jobs[sel], 118);
        } else if (mode === 'path') {
          path.forEach((n, i) => { const [x, y] = ORG[n].at[0]; ring(x, y, CIRC[i] || String(i + 1)); });
          if (!path.length) line(88, '차례대로 눌러요', 15);
          const show = !(o.revealAfterCheck && !revealed);
          const per = narrow ? 3 : 6; path.forEach((n, i) => { const col = Math.floor(i / per); line(90 + (i % per) * (narrow ? 30 : 34), `${i + 1}. ${show ? n : '○'}`).setAttribute('x', PX + 18 + col * (narrow ? 96 : 120)); });
        } else if (mode === 'match') {
          if (matchBy === 'name') organs.forEach((n, i) => { const [x, y] = ORG[n].at[0]; ring(x, y, CIRC[i]); });
          line(88, matchBy === 'name' ? '번호마다 이름을' : '기관마다 하는 일을', 15); line(112, '아래에서 골라요', 15);
          const done = organs.filter((n) => match[n]).length; line(146, `${done} / ${organs.length} 골랐어요`, 15);
        } else if (mode === 'parts') {
          parts.forEach((n) => PART[n].forEach(([x, y], i) => ring(x, y, i === 0 && (o.names || o.printAnswers) && !hidden() ? n : '', true)));
          line(88, '고를 곳을 눌러요', 15); line(112, '다시 누르면 빠져요', 15);
          if (!print) line(150, `고른 곳: ${parts.length}군데`);
          if (o.names && !hidden() && parts.length) wrapText(parts.join(', '), 180);
        } else if (mode === 'arm') {
          if (o.readout && !print) line(null, hidden() ? '확인하면 보여요' : `${angle}° · 안쪽 근육 ${angle >= 60 ? '짧아짐' : angle <= 30 ? '늘어남' : '조금 짧아짐'}`);
        }
        if (o.numbers && Array.isArray(o.numbers)) o.numbers.forEach((n, i) => { if (ORG[n]) { const [x, y] = ORG[n].at[0]; ring(x, y, o.printAnswers ? `${CIRC[i]} ${n}` : CIRC[i]); } else if (PART[n]) { const [x, y] = PART[n][0]; ring(x, y, o.printAnswers ? `${CIRC[i]} ${n}` : CIRC[i]); } });
        Object.entries(hitG).forEach(([n, g]) => { const on = mode === 'parts' ? parts.includes(n) : mode === 'find' ? sel === n : mode === 'path' ? path.includes(n) : false; g.setAttribute('aria-pressed', String(on)); });
      }
      function wrapText(txt, y0) {
        const words = String(txt).split(' '); let lineTxt = ''; let y = Y(y0);
        words.forEach((w) => { if ((lineTxt + ' ' + w).trim().length > (narrow ? 19 : 13)) { const e = kit.el('text', { x: PX + 18, y, 'font-size': 15, class: 'pk-text', fill: ink }, dyn); e.textContent = lineTxt.trim(); y += narrow ? 20 : 24; lineTxt = w; } else lineTxt = `${lineTxt} ${w}`; });
        if (lineTxt.trim()) { const e = kit.el('text', { x: PX + 18, y, 'font-size': 15, class: 'pk-text', fill: ink }, dyn); e.textContent = lineTxt.trim(); }
      }
      const changed = (quiet) => { revealed = false; paint(); if (!quiet) { paintCtl(); kit.tick(); kit.recorder.log('body', state()); } };
      function act(n) {
        if (!live) return;
        if (mode === 'find') { sel = sel === n ? null : n; kit.announce(sel ? (o.names ? `${josa(n, '을', '를')} 골랐어요.` : '골랐어요.') : '고른 것을 뺐어요.'); }
        else if (mode === 'path') { path.push(n); kit.announce(`${path.length}번째로 ${n}.`); }
        else if (mode === 'parts') { parts = parts.includes(n) ? parts.filter((x) => x !== n) : parts.concat(n); kit.announce(parts.includes(n) ? (o.names ? `${josa(n, '을', '를')} 골랐어요.` : '골랐어요.') : '뺐어요.'); }
        changed();
      }

      // ---- 판정 ----
      const wantPath = (t) => (Array.isArray(t.path) ? t.path : SYSTEMS[t.system] || null);
      const wantMatch = (t) => (t.match === 'auto' || t.match === true ? Object.fromEntries(organs.map((n) => [n, matchBy === 'name' ? n : jobs[n]])) : t.match && typeof t.match === 'object' ? t.match : null);
      const wantSel = (t) => (t.sel && ORG[t.sel] ? t.sel : t.job ? ORG_NAMES.find((n) => jobs[n] === t.job) || null : null);
      const wantPeeled = (t) => (t.layer && LAYERS.includes(t.layer) ? LAYERS.indexOf(t.layer) : Number.isInteger(t.peeled) ? t.peeled : null);
      const mainTarget = (t) => wantPeeled(t) != null || wantSel(t) || wantPath(t) || wantMatch(t) || Array.isArray(t.parts) || t.bent != null || t.shorter || Number.isFinite(t.angle);
      function judgeMain(t, s) {
        const wp = wantPeeled(t);
        if (wp != null) {
          if (s.peeled === wp) return { correct: true, feedback: `맞아요! ${LAYER_TEXT[LAYERS[wp]]}${has(LAYER_TEXT[LAYERS[wp]]) ? '이' : '가'} 보여요. 몸은 피부 → 근육 → 뼈 → 몸속 기관 차례로 겹쳐 있어요.` };
          return { correct: false, feedback: s.peeled < wp ? '아직 더 벗겨야 해요.' : '너무 많이 벗겼어요.', hint: s.peeled < wp ? '‘한 겹 벗기기’를 눌러 한 겹 더 벗겨 봐요.' : '‘한 겹 덮기’를 눌러 한 겹 덮어 봐요.' };
        }
        const ws = wantSel(t);
        if (ws) {
          if (!s.sel) return { correct: false, incomplete: true, feedback: '몸속에서 하나를 눌러 골라요.', hint: '몸속 그림을 눌러요.' };
          if (s.sel === ws) return { correct: true, feedback: `맞아요! ${ws}: ${jobs[ws]}.` };
          return { correct: false, feedback: `고른 것은 ${josa(s.sel, '이에요', '예요')}. ${jobs[s.sel]}.`, hint: t.job ? '문제에 적힌 일을 하는 곳이 몸의 어디쯤인지 떠올려요.' : '그 기관이 가슴에 있는지, 배에 있는지부터 생각해요.' };
        }
        const wpath = wantPath(t);
        if (wpath) {
          const p = s.path || [];
          if (!p.length) return { correct: false, incomplete: true, feedback: '첫 번째로 지나가는 곳부터 눌러요.', hint: '몸속 그림을 차례로 눌러요.' };
          const bad = p.findIndex((n, i) => wpath[i] !== n);
          const what = t.system ? SYS_WHAT[t.system] : '그것';
          if (bad >= 0) { const swapped = bad + 1 < p.length && p[bad + 1] === wpath[bad] && wpath[bad + 1] === p[bad]; return { correct: false, feedback: swapped ? `${bad + 1}번째와 ${bad + 2}번째 차례가 바뀌었어요.` : `${bad + 1}번째가 맞지 않아요. ${what}${has(what) ? '이' : '가'} 거기를 지나가는지 다시 생각해요.`, hint: '‘하나 되돌리기’로 틀린 곳부터 다시 눌러요.' }; }
          if (p.length < wpath.length) return { correct: false, incomplete: true, feedback: `여기까지 맞아요. ${p.length + 1}번째를 이어서 눌러요.`, hint: '다음에 지나가는 곳을 떠올려요.' };
          if (p.length > wpath.length) return { correct: false, feedback: '너무 많이 눌렀어요.', hint: '‘하나 되돌리기’로 마지막을 빼요.' };
          return { correct: true, feedback: t.system ? `맞아요! ${what}${has(what) ? '은' : '는'} ${wpath.join(' → ')} 차례로 지나가요.` : '맞아요! 차례가 맞아요.' };
        }
        const wm = wantMatch(t);
        if (wm) {
          const m = s.match || {}; const keys = Object.keys(wm);
          if (keys.some((k) => !m[k])) return { correct: false, incomplete: true, feedback: '아직 고르지 않은 줄이 있어요.', hint: '줄마다 단추를 눌러 보기를 바꿔요.' };
          const wrong = keys.filter((k) => m[k] !== wm[k]);
          if (wrong.length) return { correct: false, feedback: `${wrong.length}줄이 맞지 않아요.`, hint: matchBy === 'name' ? '번호가 가리키는 곳이 가슴인지 배인지부터 생각해요.' : '하나씩 그 기관이 몸의 어디에 있는지 떠올려 봐요.' };
          return { correct: true, feedback: '맞아요! 기관마다 하는 일이 달라요.' };
        }
        if (Array.isArray(t.parts)) {
          const p = s.parts || [];
          if (!p.length) return { correct: false, incomplete: true, feedback: '몸에서 고를 곳을 눌러요.', hint: '몸 그림을 눌러요.' };
          const miss = t.parts.filter((n) => !p.includes(n)); const extra = p.filter((n) => !t.parts.includes(n));
          if (!miss.length && !extra.length) return { correct: true, feedback: `맞아요! ${t.parts.join(', ')}.` };
          return { correct: false, feedback: extra.length && miss.length ? '고르지 말아야 할 곳도 있고, 빠진 곳도 있어요.' : extra.length ? '고르지 말아야 할 곳이 섞여 있어요.' : `${miss.length}군데가 더 있어요.`, hint: '내 몸을 손으로 짚어 보며 하나씩 맞춰 봐요.' };
        }
        if (t.bent != null || t.shorter || Number.isFinite(t.angle)) {
          const a = s.angle || 0;
          if (Number.isFinite(t.angle) && Math.abs(a - t.angle) > step / 2) return { correct: false, feedback: `지금 ${a}°예요.`, hint: a < t.angle ? '조금 더 굽혀요.' : '조금 펴요.' };
          const wantBent = t.bent != null ? !!t.bent : t.shorter === '안쪽' ? true : t.shorter === '바깥쪽' ? false : null;
          if (wantBent === true && a < 90) return { correct: false, feedback: a === 0 ? '팔이 쭉 펴져 있어요.' : '조금만 굽혔어요. 더 굽혀요.', hint: '아래팔을 위로 끌어 올려요.' };
          if (wantBent === false && a > 20) return { correct: false, feedback: '팔이 굽혀져 있어요.', hint: '아래팔을 아래로 내려 쭉 펴요.' };
          return { correct: true, feedback: wantBent ? '맞아요! 팔을 굽히면 안쪽 근육이 짧아지고 바깥쪽 근육이 늘어나요.' : wantBent === false ? '맞아요! 팔을 펴면 바깥쪽 근육이 짧아지고 안쪽 근육이 늘어나요.' : '맞아요!' };
        }
        return null;
      }
      function judge(t, s) {
        t = t || target || {}; s = s || state();
        const main = mainTarget(t) ? judgeMain(t, s) : null;
        let pr = null;
        if (t.pick != null) pr = s.pick == null ? { correct: false, incomplete: true, feedback: '아래 보기에서 하나를 골라요.', hint: '그림을 보고 알맞은 보기를 골라요.' } : s.pick !== t.pick ? { correct: false, feedback: (o.ask && o.ask.why && o.ask.why[s.pick]) || '고른 보기를 그림과 다시 견주어 보세요.', hint: '그림을 자세히 봐요.' } : { correct: true, feedback: '맞아요! 그림을 잘 읽었어요.' };
        if (main && !main.correct) return main;
        if (pr && !pr.correct) return pr;
        return main || pr || { correct: false, incomplete: true, feedback: '몸 그림을 조작해 보세요.', hint: '문제를 다시 읽어요.' };
      }
      function solvedState(t) {
        t = t || target || {}; const s = state();
        const wp = wantPeeled(t); if (wp != null) s.peeled = wp;
        const ws = wantSel(t); if (ws) s.sel = ws;
        const wpath = wantPath(t); if (wpath) s.path = wpath.slice();
        const wm = wantMatch(t); if (wm) s.match = Object.assign({}, wm);
        if (Array.isArray(t.parts)) s.parts = t.parts.slice();
        if (Number.isFinite(t.angle)) s.angle = t.angle; else if (t.bent === true || t.shorter === '안쪽') s.angle = 120; else if (t.bent === false || t.shorter === '바깥쪽') s.angle = 0;
        if (t.pick != null) s.pick = t.pick;
        return s;
      }

      function state() {
        const s = {};
        if (mode === 'layers') s.peeled = peeled;
        else if (mode === 'find') s.sel = sel;
        else if (mode === 'path') s.path = path.slice();
        else if (mode === 'match') s.match = Object.fromEntries(organs.map((n) => [n, match[n] || null]));
        else if (mode === 'arm') s.angle = angle;
        else if (mode === 'parts') s.parts = partList.filter((n) => parts.includes(n));
        if (askRow || (o.ask && o.ask.choices)) s.pick = pick;
        return s;
      }
      function apply(s) {
        s = s || {};
        peeled = Number.isInteger(s.peeled) ? Math.max(0, Math.min(3, s.peeled)) : 0;
        sel = s.sel && organs.includes(s.sel) ? s.sel : null;
        path = Array.isArray(s.path) ? s.path.filter((n) => organs.includes(n)) : [];
        const mo = matchOpts(); match = {}; organs.forEach((n) => { const v = s.match && s.match[n]; match[n] = mo.includes(v) ? v : null; });
        angle = Number.isFinite(s.angle) ? Math.max(0, Math.min(150, Math.round(s.angle / step) * step)) : 0;
        parts = Array.isArray(s.parts) ? partList.filter((n) => s.parts.includes(n)) : [];
        pick = Number.isInteger(s.pick) ? s.pick : null; paintPick();
        paint(); paintCtl();
      }
      apply(o.start || {});
      const isWrong = (s, t) => { const r = judge(t, Object.assign(state(), s)); return !r.correct && !r.incomplete; };
      let wrongTurn = 0;

      return {
        getState: state,
        setState(s) { apply(s); },
        setTarget(t) { target = t || null; },
        reset() { revealed = false; apply(o.start || {}); },
        check(t, opts) {
          const quiet = !!(opts && opts.forHint);
          const r = judge(t);
          if (!quiet && r.correct) { revealed = true; paint(); }
          return r;
        },
        hint(t, opts) {
          t = t || target || {};
          const r = judge(t);
          if (r.correct) return { hint: '알맞게 했어요.', correct: true };
          const lv = levelOf(opts);
          if (lv === 1) {
            const g = mode === 'layers' ? '몸의 겉에서부터 한 겹씩 벗겨 보며 무엇이 나오는지 봐요.'
              : mode === 'find' ? '문제에서 말한 곳이 가슴에 있는지, 배에 있는지, 머리에 있는지부터 생각해요.'
                : mode === 'path' ? '몸 밖에서 들어온 것이 어디로 들어가서 어디로 나가는지 떠올리며 차례대로 눌러요.'
                  : mode === 'match' ? '하나씩 정해서 그곳이 몸의 어디에 있고 무엇과 이어져 있는지 떠올려 봐요.'
                    : mode === 'arm' ? '내 팔을 굽혔다 펴며 위팔의 앞뒤 근육이 어떻게 달라지는지 만져 봐요.'
                      : mode === 'parts' ? '내 몸을 손으로 짚어 보며 문제에서 말한 곳을 찾아요.'
                        : '그림을 자세히 봐요.';
            return { hint: mainTarget(t) ? g : '그림을 자세히 보고 보기를 견주어 봐요.', correct: false };
          }
          if (lv === 2) return { hint: r.hint || r.feedback, correct: false };
          const sol = solvedState(t);
          if (mode === 'layers' && wantPeeled(t) != null) return { hint: `맨 위에 ${LAYER_TEXT[LAYERS[sol.peeled]]}${has(LAYER_TEXT[LAYERS[sol.peeled]]) ? '이' : '가'} 보이게 해요. 벗길 겹은 ${sol.peeled}겹이에요.`, correct: false };
          if (mode === 'find' && sol.sel) return { hint: `${sol.sel}: ${jobs[sol.sel]}. 그림에서 ${sol.sel}의 자리를 찾아 눌러요.`, correct: false };
          if (mode === 'path' && sol.path) { const p = state().path; const k = p.findIndex((n, i) => sol.path[i] !== n); const i = k >= 0 ? k : p.length; return { hint: k >= 0 ? `${i + 1}번째는 ${josa(sol.path[i], '이에요', '예요')}. 되돌리기로 거기부터 다시 눌러요.` : `${i + 1}번째는 ${josa(sol.path[i] || '', '이에요', '예요')}.`, correct: false }; }
          if (mode === 'match' && sol.match) { const n = Object.keys(sol.match).find((k) => match[k] !== sol.match[k]); if (n) return { hint: `${matchBy === 'name' ? CIRC[organs.indexOf(n)] : n} → ${sol.match[n]}`, correct: false }; }
          if (mode === 'parts' && sol.parts) { const miss = sol.parts.filter((n) => !parts.includes(n)); const extra = parts.filter((n) => !sol.parts.includes(n)); return { hint: miss.length ? `${josa(miss[0], '을', '를')} 골라요.` : `${josa(extra[0], '은', '는')} 빼요.`, correct: false }; }
          if (mode === 'arm') return { hint: sol.angle >= 90 ? '아래팔을 위로 끌어 올려 팔을 직각보다 더 굽혀요.' : '아래팔을 아래로 내려 쭉 펴요.', correct: false };
          if (t.pick != null && o.ask) return { hint: `답은 ‘${o.ask.choices[t.pick]}’이에요. 그림에서 그 까닭을 찾아봐요.`, correct: false };
          return { hint: r.hint || '문제를 다시 읽어요.', correct: false };
        },
        solve(t) { apply(solvedState(t)); },
        // 그럴듯한 오개념: 겹 하나 어긋남, 이웃 기관, 차례 뒤바뀜, 일 두 개 뒤바뀜, 부분 하나 빠짐·더함, 굽힘↔폄
        wrongAnswer(t) {
          t = t || target || {};
          const good = solvedState(t); const cands = []; const v = (patch) => Object.assign({}, good, patch);
          const wp = wantPeeled(t); if (wp != null) [wp + 1, wp - 1, wp + 2, wp - 2].filter((x) => x >= 0 && x <= 3).forEach((x) => cands.push(v({ peeled: x })));
          const ws = wantSel(t);
          if (ws) { const [x0, y0] = ORG[ws].at[0]; organs.filter((n) => n !== ws).sort((a, b) => Math.hypot(ORG[a].at[0][0] - x0, ORG[a].at[0][1] - y0) - Math.hypot(ORG[b].at[0][0] - x0, ORG[b].at[0][1] - y0)).slice(0, 4).forEach((n) => cands.push(v({ sel: n }))); }
          const wpath = wantPath(t);
          if (wpath) {
            for (let i = 0; i + 1 < wpath.length; i++) { const p = wpath.slice(); [p[i], p[i + 1]] = [p[i + 1], p[i]]; cands.push(v({ path: p })); }
            organs.filter((n) => !wpath.includes(n)).slice(0, 3).forEach((n) => { const p = wpath.slice(); p[p.length - 1] = n; cands.push(v({ path: p })); });
          }
          const wm = wantMatch(t);
          if (wm) { const ks = Object.keys(wm); for (let i = 0; i + 1 < ks.length; i++) cands.push(v({ match: Object.assign({}, wm, { [ks[i]]: wm[ks[i + 1]], [ks[i + 1]]: wm[ks[i]] }) })); }
          if (Array.isArray(t.parts)) {
            t.parts.forEach((n) => { if (t.parts.length > 1) cands.push(v({ parts: t.parts.filter((x) => x !== n) })); });
            partList.filter((n) => !t.parts.includes(n)).forEach((n) => cands.push(v({ parts: t.parts.concat(n) })));
          }
          if (t.bent != null || t.shorter || Number.isFinite(t.angle)) [0, 30, 60, 120, 150].forEach((a) => cands.push(v({ angle: a })));
          if (t.pick != null && o.ask) o.ask.choices.forEach((_, i) => { if (i !== t.pick) cands.push(v({ pick: i })); });
          const canon = (s) => JSON.stringify(Object.assign(state(), s, mode === 'parts' && s.parts ? { parts: partList.filter((n) => s.parts.includes(n)) } : {}));
          const cur = JSON.stringify(state()); const n = cands.length; const from = n ? wrongTurn++ % n : 0;
          for (let i = 0; i < n; i++) { const c = cands[(from + i) % n]; if (canon(c) !== cur && isWrong(c, t)) return JSON.parse(canon(c)); }
          return null;
        },
        distance(a, b) {
          a = a || {}; b = b || {}; let d = 0;
          if ((a.peeled || 0) !== (b.peeled || 0)) d += Math.abs((a.peeled || 0) - (b.peeled || 0));
          if ((a.sel || null) !== (b.sel || null)) d += 1;
          const pa = a.path || []; const pb = b.path || []; for (let i = 0; i < Math.max(pa.length, pb.length); i++) if (pa[i] !== pb[i]) d += 1;
          const ma = a.match || {}; const mb = b.match || {}; new Set([...Object.keys(ma), ...Object.keys(mb)]).forEach((k) => { if ((ma[k] || null) !== (mb[k] || null)) d += 1; });
          if ((a.angle || 0) !== (b.angle || 0)) d += Math.ceil(Math.abs((a.angle || 0) - (b.angle || 0)) / step);
          const xa = a.parts || []; const xb = b.parts || []; d += xa.filter((n) => !xb.includes(n)).length + xb.filter((n) => !xa.includes(n)).length;
          if ((a.pick == null ? null : a.pick) !== (b.pick == null ? null : b.pick)) d += 1;
          return d;
        },
        async demo(t) {
          const sol = solvedState(t || {});
          if (mode === 'layers') { for (let i = peeled; i <= (sol.peeled != null ? sol.peeled : 3); i++) { peeled = i; paint(); kit.tick(); await kit.wait(700); } }
          else if (mode === 'path' && sol.path) { path = []; for (const n of sol.path) { path.push(n); paint(); kit.tick(); await kit.wait(600); } }
          else if (mode === 'arm') { const goal = sol.angle != null ? sol.angle : 120; while (angle !== goal) { angle += angle < goal ? step : -step; paint(); await kit.wait(60); } }
          else apply(sol);
          revealed = true; paint(); paintCtl();
        },
      };
    },
  });
})(window.PaperKit);
