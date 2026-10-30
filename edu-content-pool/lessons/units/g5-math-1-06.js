/* 5학년 1학기 6. 다각형의 둘레와 넓이 — 단원 파일(차시 11개, 기존 차시 없음).
 * 흐름: 둘레가 가장자리를 한 바퀴 도는 길이임을 알고 직사각형·정사각형 둘레 구하기(1) → 변의 길이를 적어 정다각형·여러 도형 둘레 표로 정리(2)
 *      → 울타리·액자 이야기, 둘레가 같아도 넓이가 다른 직사각형(3) → 1 cm², 1 m²가 어떤 정사각형의 넓이인지, 1 m² = 10000 cm²(4)
 *      → 모눈 칸을 세어 넓이 나타내기, 반 칸 합치기(5) → 알맞은 넓이 단위 고르기, m²·cm²·km² 바꾸기(6) → 직사각형 넓이 = 가로 × 세로(7)
 *      → L자 모양을 직사각형으로 나누거나 빼서 넓이 구하기(8) → 넓이로 한 변 거꾸로 구하기, 타일 문제(9) → 평행사변형·삼각형 넓이(10) → 사다리꼴·마름모 넓이와 단원 정리(11).
 * 성취기준: 1~3차시 [6수03-11], 4~6차시 [6수03-12], 7~9차시 [6수03-13], 10~11차시 [6수03-14]. units-index plan 의 주제 순서를 따른다.
 * 교구: 도형판(shapes geoboard: 점판 한 칸 = 1 cm, 둘레·넓이 읽어 쓰기와 조건에 맞는 도형 만들기), 재기(measure unit: 알맞은 단위 고르기), 생각 그물(mindmap: 식·설명 카드 나누기·이어 보기·고르기·빈칸·순서).
 * 점판 도형의 둘레·넓이는 아래 도우미가 꼭짓점 좌표에서 직접 계산해 target 과 힌트 풀이 글을 만든다. 둘레는 축에 나란한 변(직각으로 꺾인 도형)만 쓴다.
 */
(function () {
const UID = 'g5-math-1-06', CU = 'g5-수학-1학기-6', UT = '6. 다각형의 둘레와 넓이';
const two = (n) => String(n).padStart(2, '0');
const STD_OF = (n) => (n <= 3 ? ['[6수03-11]'] : n <= 6 ? ['[6수03-12]'] : n <= 9 ? ['[6수03-13]'] : ['[6수03-14]']);
const TAIL = ', with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.';
const ill = (desc, text, extra) => ({
  prompt: `Layered paper-cut illustration of ${desc}${TAIL}`,
  scene: { viewBox: [480, 270], layers: [
    { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 110, y: 52 }, { motif: 'hills', y: 206 },
    ...(extra || []), { motif: 'text', x: 240, y: 142, text, size: 22 },
  ] },
});
const lesson = (n, d) => {
  const k = d.acts.length; const mins = k === 3 ? [9, 9, 8] : k === 2 ? [13, 13] : [26];
  d.acts.forEach((a, i) => { a.minutes = mins[i]; });
  return {
    id: `${UID}-${two(n)}`, schema: 'edu-lesson.v1', catalog: { unit: CU, lesson: n },
    grade: 5, subject: '수학', unitTitle: UT,
    title: d.title, objective: d.objective, standards: STD_OF(n), minutes: 40, formats: ['chromebook', 'projector', 'print'],
    illustration: ill(d.desc, d.text, d.layers),
    stages: [
      Object.assign({ id: 'intro', title: '도입', minutes: 7, teacher: d.intro[0], student: d.intro[1] }, d.demo ? { demo: d.demo } : {}),
      { id: 'main', title: '전개', minutes: 26, activities: d.acts },
      { id: 'wrapup', title: '정리', minutes: 7, teacher: d.wrap[0], exitTicket: [...d.wrap[1], { type: 'mood', prompt: '오늘 공부는 어땠나요?' }] },
    ],
    worksheet: d.ws, differentiation: d.diff, teacherNotes: d.notes,
  };
};
const act = (id, title, tool, task, teacher, levels, items) => ({ id, title, minutes: 0, tool, task, teacher, levels, items });
const ML = (mode, topic) => ({ easy: { mode, topic, live: true }, base: { mode, topic }, challenge: { mode, topic } });
const uniq = (arr, what) => { if (new Set(arr).size !== arr.length) throw new Error(`중복 카드: ${what} ${arr.join(' | ')}`); return arr; };
// ── 카드 교구 도우미(mindmap) ──
const match = (prompt, pairs, extra, d, hints, x) => {
  const slots = pairs.map((p, i) => ({ id: `s${i + 1}`, label: p[0] }));
  const texts = uniq(pairs.map((p) => p[1]).concat(extra || []), prompt);
  const cards = texts.map((t, i) => ({ id: i < pairs.length ? `c${i + 1}` : `x${i - pairs.length + 1}`, text: t }));
  const m = {}; pairs.forEach((p, i) => { m[`s${i + 1}`] = `c${i + 1}`; });
  return Object.assign({ prompt, toolOptions: { mode: 'match', slots, cards }, target: { match: m }, difficulty: d, hints }, x || {});
};
const pick = (prompt, basket, cards, d, hints, x) => Object.assign({ prompt,
  toolOptions: { mode: 'pick', basket, cards: uniq(cards.map((c) => c[0]), prompt).map((t, i) => ({ id: `k${i + 1}`, text: t })) },
  target: { pick: cards.map((c, i) => (c[1] ? `k${i + 1}` : null)).filter(Boolean) }, difficulty: d, hints }, x || {});
const srt = (prompt, topic, groups, d, hints, x) => {
  const names = Object.keys(groups); const cards = []; const tg = {};
  names.forEach((nm, gi) => { tg[`g${gi + 1}`] = []; groups[nm].forEach((t, i) => { const id = `g${gi + 1}c${i + 1}`; tg[`g${gi + 1}`].push(id); cards.push({ id, text: t }); }); });
  uniq(cards.map((c) => c.text), prompt);
  const mixed = cards.filter((_, i) => i % 2 === 0).concat(cards.filter((_, i) => i % 2 === 1));
  return Object.assign({ prompt, toolOptions: { mode: 'sort', topic, slots: names.map((nm, gi) => ({ id: `g${gi + 1}`, label: nm })), cards: mixed }, target: { sort: tg }, difficulty: d, hints }, x || {});
};
const fill = (prompt, pairs, extra, d, hints, x) => {
  const slots = pairs.map((p, i) => ({ id: `s${i + 1}`, label: p[0] }));
  const texts = uniq(pairs.map((p) => p[1]).concat(extra || []), prompt);
  const cards = texts.map((t, i) => ({ id: i < pairs.length ? `c${i + 1}` : `x${i - pairs.length + 1}`, text: t }));
  const m = {}; pairs.forEach((p, i) => { m[`s${i + 1}`] = `c${i + 1}`; });
  return Object.assign({ prompt, toolOptions: { mode: 'fill', slots, cards }, target: { fill: m }, difficulty: d, hints }, x || {});
};
const ord = (prompt, steps, extra, d, hints, x) => {
  const cards = steps.map((t, i) => ({ id: `o${i + 1}`, text: t })).concat((extra || []).map((t, i) => ({ id: `y${i + 1}`, text: t })));
  return Object.assign({ prompt, toolOptions: { mode: 'order', slots: steps.length, cards }, target: { order: steps.map((_, i) => `o${i + 1}`) }, difficulty: d, hints }, x || {});
};
// ── 도형 계산 도우미: 점판 도형은 꼭짓점 좌표 배열 pts = [[열, 행], …](한 칸 = 1 cm) ──
const area2 = (pts) => { let s = 0; pts.forEach((p, i) => { const q = pts[(i + 1) % pts.length]; s += p[0] * q[1] - q[0] * p[1]; }); return Math.abs(s) / 2; };
const sidesOf = (pts) => pts.map((p, i) => { const q = pts[(i + 1) % pts.length]; const dx = Math.abs(p[0] - q[0]); const dy = Math.abs(p[1] - q[1]); if (dx && dy) throw new Error('비스듬한 변은 둘레에 못 쓴다'); return dx + dy; });
const perim = (pts) => sidesOf(pts).reduce((a, b) => a + b, 0);
const rectPts = (w, h, x = 0, y = 0) => [[x, y], [x + w, y], [x + w, y + h], [x, y + h]];
const boardOf = (pts) => Math.min(10, Math.max(5, Math.max(...pts.flat()) + 1));
const GEOL = { easy: { mode: 'geoboard', showRight: true }, base: { mode: 'geoboard' }, challenge: { mode: 'geoboard' } };
const gx = (pts, ask) => ({ size: boardOf(pts), readOnly: true, showCounts: false, askNum: ask });
const gPerim = (prompt, pts, d, x) => {
  const sd = sidesOf(pts); const p = perim(pts);
  return Object.assign({ prompt, state: { pts }, toolOptions: gx(pts, { q: '둘레는 몇 cm일까요? (점판 한 칸은 1 cm)', unit: 'cm' }), target: { num: p }, difficulty: d,
    hints: ['도형의 가장자리를 따라 한 바퀴 돌며 모든 변의 길이를 더해요.', '변의 길이를 점 사이의 칸 수로 세고, 빠뜨린 변이 없는지 변의 수를 세어 확인해요.', `변의 길이를 모두 더하면 ${sd.join(' + ')} = ${p}예요.`] }, x || {});
};
const gArea = (prompt, pts, kind, d, x) => {
  const a = area2(pts); const xs = pts.map((p) => p[0]); const ys = pts.map((p) => p[1]);
  let h;
  if (kind === 'rect') { const w = Math.max(...xs) - Math.min(...xs); const hh = Math.max(...ys) - Math.min(...ys); h = ['점판의 한 칸은 가로·세로가 1 cm인 모눈이에요. 가로로 몇 칸, 세로로 몇 칸인지 세어 보세요.', '가로 칸 수와 세로 칸 수를 곱하면 모눈 전체의 칸 수가 돼요.', `가로 ${w}칸, 세로 ${hh}칸이므로 ${w} × ${hh} = ${a}예요.`]; }
  else if (kind === 'par') { const b = pts[1][0] - pts[0][0]; const hh = pts[2][1] - pts[1][1]; h = ['평행사변형의 한쪽을 잘라 옮기면 직사각형이 돼요. 밑변과 높이를 점판에서 찾아요.', '높이는 밑변에서 수직으로 잰 길이예요. 비스듬한 변의 길이가 아니에요.', `밑변 ${b} × 높이 ${hh} = ${a}예요.`]; }
  else if (kind === 'tri') { const b = pts[1][0] - pts[0][0]; const hh = Math.max(...ys); h = ['삼각형 두 개를 붙이면 평행사변형이 돼요. 밑변과 높이를 찾아요.', '밑변 × 높이는 같은 삼각형 두 개의 넓이예요. 2로 나누는 것을 잊지 않았는지 살펴요.', `밑변 ${b} × 높이 ${hh} ÷ 2 = ${a}예요.`]; }
  else if (kind === 'trap') { const bt = pts[1][0] - pts[0][0]; const tp = pts[2][0] - pts[3][0]; const hh = pts[2][1]; h = ['사다리꼴 두 개를 거꾸로 붙이면 평행사변형이 돼요. 윗변, 아랫변, 높이를 찾아요.', '(윗변 + 아랫변) × 높이는 사다리꼴 두 개의 넓이예요. 2로 나누는 것을 잊지 않았는지 살펴요.', `(${tp} + ${bt}) × ${hh} ÷ 2 = ${a}예요.`]; }
  else if (kind === 'rho') { const d1 = Math.max(...xs) - Math.min(...xs); const d2 = Math.max(...ys) - Math.min(...ys); h = ['마름모를 두 대각선으로 나누면 같은 삼각형 네 개가 생겨요. 두 대각선의 길이를 점판에서 찾아요.', '마름모를 둘러싼 직사각형의 넓이의 절반이에요. 2로 나누는 것을 잊지 않았는지 살펴요.', `${d1} × ${d2} ÷ 2 = ${a}예요.`]; }
  else { h = ['점판의 한 칸은 가로·세로가 1 cm인 모눈이에요. 모눈이 모두 몇 칸인지 어떻게 셀지 생각해요.', '직사각형으로 나누어 각각의 넓이를 구한 뒤 더하거나, 큰 직사각형에서 빈 곳을 빼 보세요.', `도형을 직사각형으로 나누어 넓이를 더하면 ${a}예요.`]; }
  return Object.assign({ prompt, state: { pts }, toolOptions: gx(pts, { q: '넓이는 몇 cm²일까요? (점판 한 칸은 가로·세로 1 cm)', unit: 'cm²' }), target: { num: a }, difficulty: d, hints: h }, x || {});
};
const gBuild = (prompt, target, size, d, hints, x) => Object.assign({ prompt, toolOptions: { size }, target, difficulty: d, hints }, x || {});
const xArea = (prompt, pts, d) => ({ type: 'tool', tool: 'shapes', options: Object.assign({ mode: 'geoboard' }, gx(pts, { q: '넓이는 몇 cm²일까요? (점판 한 칸은 가로·세로 1 cm)', unit: 'cm²' })), state: { pts }, prompt, target: { num: area2(pts) }, difficulty: d });
const xPerim = (prompt, pts, d) => ({ type: 'tool', tool: 'shapes', options: Object.assign({ mode: 'geoboard' }, gx(pts, { q: '둘레는 몇 cm일까요? (점판 한 칸은 1 cm)', unit: 'cm' })), state: { pts }, prompt, target: { num: perim(pts) }, difficulty: d });
// 식 글: 둘레·넓이
const rectP = (w, h) => `(${w} + ${h}) × 2 = ${(w + h) * 2} cm`;
const sqP = (s) => `${s} × 4 = ${s * 4} cm`;
const rectA = (w, h) => `${w} × ${h} = ${w * h} cm²`;
const rectPU = (w, h, u) => `(${w} + ${h}) × 2 = ${(w + h) * 2} ${u}`;
const sqPU = (s2, u) => `${s2} × 4 = ${s2 * 4} ${u}`;
const regP = (s2, n) => `${s2} × ${n} = ${s2 * n} cm`;
// 둘레가 target 인 직사각형을 고르는 카드: list = [[가로, 세로], …]
const rectPick = (prompt, target, list, d, hints, x) => pick(prompt, `둘레 ${target} cm`, list.map(([w, h]) => [`가로 ${w} cm, 세로 ${h} cm`, (w + h) * 2 === target ? 1 : 0]), d, hints, x);
const sqA = (s2) => `${s2} × ${s2} = ${s2 * s2} cm²`;
const parF = (b, h2) => `${b} × ${h2} = ${b * h2} cm²`;
const triF = (b, h2) => `${b} × ${h2} ÷ 2 = ${(b * h2) / 2} cm²`;
const trapF = (a, b, h2) => `(${a} + ${b}) × ${h2} ÷ 2 = ${((a + b) * h2) / 2} cm²`;
const rhoF = (a, b) => `${a} × ${b} ÷ 2 = ${(a * b) / 2} cm²`;
const compAdd = (w1, h1, w2, h2) => `${w1} × ${h1} + ${w2} × ${h2} = ${w1 * h1 + w2 * h2}`;
const compSub = (W, H, w, h2) => `${W} × ${H} − ${w} × ${h2} = ${W * H - w * h2}`;
// 단위 바꾸기 카드: list = [[앞 글, 뒤 글], …]
const conv = (a, from, to) => { const R = { 'm²>cm²': 10000, 'cm²>m²': 0.0001, 'km²>m²': 1000000, 'm²>km²': 0.000001 }; return Math.round(a * R[`${from}>${to}`] * 1e6) / 1e6; };
const convPair = (a, from, to) => [`${a} ${from}`, `${conv(a, from, to)} ${to}`];
// 단위 고르기(measure unit)
const UL3 = { easy: { mode: 'unit' }, base: { mode: 'unit' }, challenge: { mode: 'unit' } };
const unitQ = (prompt, things, units, picks, d, hints, x) => Object.assign({ prompt, toolOptions: { mode: 'unit', things, units }, target: { units: picks }, difficulty: d, hints }, x || {});
const L = [];
// ───────────────────────────── 1차시 (intro · concept) ─────────────────────────────
L.push(lesson(1, {
  title: '가장자리를 한 바퀴 돌며 직사각형과 정사각형의 둘레 구하기',
  objective: '둘레가 도형의 가장자리를 한 바퀴 돌아 잰 길이임을 알고, 직사각형과 정사각형의 둘레를 구할 수 있다.',
  desc: 'a child walking along the paper-cut edge of a rectangular school garden with a long tape measure, little paper fences standing along the border', text: '한 바퀴 돌아요',
  layers: [{ motif: 'house', x: 110, y: 214 }, { motif: 'tree', x: 370, y: 216 }, { motif: 'flower', x: 250, y: 228 }],
  intro: ['"학교 화단에 울타리를 치려고 해요. 철망이 몇 m 필요할까요? 교실 바닥에 장판을 깔려면 무엇을 알아야 할까요?" 철망은 가장자리를 따라 한 바퀴 도는 길이, 장판은 안쪽 면의 크기라고 말하게 한다. "둘레와 넓이는 같은 말일까요?" 하고 물어 두 낱말을 섞어 쓰는 대답이 나오면 지우지 말고 칠판에 적어 둔다.',
    '화단 가장자리에 철망을 두른다면 어느 길이를 알아야 할까요? 짝에게 말해 봐요.'],
  acts: [
    act('a1', '활동 1. 점판 도형의 가장자리를 한 바퀴 돌아 둘레 구하기', 'shapes', '점판의 한 칸은 1 cm예요. 도형의 가장자리를 따라 한 바퀴 돌며 모든 변의 길이를 더해 둘레를 구해요.',
      '"변이 몇 개인가요? 빠뜨린 변은 없나요?" 변의 수를 먼저 세고 길이를 더하게 한다. 가로와 세로를 한 번씩만 더해 11 cm처럼 쓰는 학생에게는 가장자리를 손가락으로 한 바퀴 따라가며 변을 모두 세게 한다.',
      GEOL, [
        gPerim('점판의 도형 ㄱ의 가장자리를 한 바퀴 도는 길이를 구해 보세요.', rectPts(4, 3), 0.1, { predict: { q: '도형 ㄱ의 둘레는 몇 cm일까요?', options: ['7 cm', '12 cm', '14 cm'], answer: 2 }, conclude: '가로 4, 세로 3인 변이 두 개씩 있어서 4 + 3 + 4 + 3 = 14 cm예요.' }),
        gPerim('점판의 도형 ㄴ의 가장자리를 한 바퀴 도는 길이를 구해 보세요.', rectPts(6, 2), 0.14),
        gPerim('점판의 도형 ㄷ은 네 변의 길이가 같아요. 둘레를 구해 보세요.', rectPts(3, 3), 0.12),
        gPerim('점판의 도형 ㄹ의 가장자리를 한 바퀴 도는 길이를 구해 보세요.', rectPts(5, 4), 0.2, { extra: true }),
      ]),
    act('a2', '활동 2. 둘레와 넓이를 구하는 일 가르기', 'mindmap', '둘레는 가장자리의 길이이고 넓이는 안쪽 면의 크기예요. 어느 것을 구하는 일인지 나누어 보아요.',
      '"철망과 장판은 각각 길이일까요, 면의 크기일까요?" 철망은 길이, 장판은 면이라고 말하게 한다. 리본이나 장판처럼 비슷해 보이는 물건을 한 칸에 넣는 학생에게는 가장자리에만 두르는지, 안쪽을 가득 채우는지 물어본다.',
      ML('sort', '둘레와 넓이'), [
        srt('구하려는 것이 둘레(길이)인지 넓이(면의 크기)인지 나누어 보세요.', '둘레와 넓이', { '둘레(길이)': ['정원에 울타리를 치는 데 필요한 철망의 길이', '액자 테두리에 두를 리본의 길이', '운동장 가장자리를 한 바퀴 달린 거리'], '넓이(면의 크기)': ['방바닥에 깔 장판의 크기', '벽에 칠할 페인트가 차지하는 곳', '도화지를 가득 채울 색칠한 곳의 크기'] }, 0.14,
          ['도형의 가장자리를 따라 재는지, 안쪽 면을 채우는지 살펴요.', '선을 따라 두르는 것은 길이이고, 면을 덮는 것은 면의 크기예요.', '철망·리본·달린 거리는 가장자리의 길이이고, 장판·페인트·색칠은 안쪽 면을 채우는 일이에요.']),
        pick('둘레를 구하는 일에 알맞은 카드를 모두 골라 보세요.', '둘레', [['운동장을 한 바퀴 달리며 센 걸음 수', 1], ['꽃밭 가장자리에 돌 울타리 놓기', 1], ['꽃밭 흙의 양 어림하기', 0], ['꽃밭 모양 종이에 색 칠하기', 0]], 0.18,
          ['가장자리를 따라 길이를 재는 일을 찾아요.', '안쪽 면을 가득 채우는 일은 둘레가 아니에요.', '운동장을 한 바퀴 달리는 것과 울타리 놓기는 가장자리를 따라가는 일이에요.'],
          { conclude: '둘레는 가장자리를 한 바퀴 돌아 잰 길이예요.' }),
        match('구하려는 것과 알맞은 낱말을 이어 보세요.', [['책상 가장자리에 테이프를 붙이는 길이', '둘레'], ['책상 윗면을 덮는 천의 크기', '넓이']], ['부피', '무게'], 0.22,
          ['"가장자리"와 "안쪽 면" 중 어느 쪽 이야기인지 먼저 정해요.', '테이프를 붙이는 길이는 가장자리 이야기예요.', '가장자리의 길이는 둘레, 안쪽 면의 크기는 넓이예요.']),
      ]),
    act('a3', '활동 3. 둘레를 구하는 식 알아보기', 'mindmap', '직사각형은 가로와 세로가 두 번씩 나와요. 정사각형은 네 변의 길이가 같아요. 둘레 식을 이어 보아요.',
      '"가로 7 cm, 세로 4 cm인 직사각형은 가로가 몇 번 나오나요?" 위와 아래에 두 번, 세로도 두 번 나온다고 말하게 한다. 7 × 4 = 28 cm로 계산하는 학생에게는 가로와 세로를 곱한 값이 가장자리 길이인지 되물어 둘레와 넓이를 구분하게 한다.',
      ML('match', '둘레 식'), [
        pick('가로 7 cm, 세로 4 cm인 직사각형의 둘레를 구하는 식을 모두 골라 보세요.', '둘레 식', [['7 + 4 + 7 + 4 = 22 cm', 1], ['(7 + 4) × 2 = 22 cm', 1], ['7 × 4 = 28 cm²', 0], ['7 + 4 = 11 cm', 0]], 0.2,
          ['직사각형은 가로와 세로가 각각 몇 번씩 나오는지 생각해요.', '가장자리를 한 바퀴 돌면 네 변의 길이를 모두 더해야 해요.', '가로와 세로를 한 번씩만 더하면 둘레의 절반이에요. 곱하면 안쪽 면의 크기예요.']),
        match('도형과 둘레를 구하는 식을 이어 보세요.', [['한 변이 6 cm인 정사각형', sqP(6)], ['가로 8 cm, 세로 3 cm인 직사각형', rectP(8, 3)], ['한 변이 10 cm인 정사각형', sqP(10)]], [rectA(8, 3)], 0.22,
          ['정사각형은 네 변의 길이가 모두 같아요.', '직사각형은 가로와 세로를 더해 2배 하면 둘레예요.', '정사각형은 한 변 × 4, 직사각형은 (가로 + 세로) × 2예요. 곱해서 cm²로 나오는 카드는 넓이예요.']),
        fill('정사각형의 둘레를 구하는 과정을 빈칸에 놓아 보세요.', [['한 변이 5 cm인 정사각형의 둘레는 5 + 5 + 5 + 5 = ___ cm', '20'], ['변이 4개이고 길이가 모두 같으니 5 × ___ = 20', '4'], ['한 변이 9 cm이면 둘레는 9 × 4 = ___ cm', '36']], ['25'], 0.18,
          ['정사각형은 네 변의 길이가 같아요. 먼저 네 변을 모두 더해 봐요.', '같은 수를 여러 번 더할 때는 곱셈으로 줄여 쓸 수 있어요.', '5를 네 번 더하면 20이고, 한 변 9 cm이면 9를 네 번 더해 36이에요.']),
      ]),
  ],
  wrap: ['"둘레는 무엇을 한 바퀴 돌아 잰 길이인가요? 직사각형의 둘레에서 가로는 몇 번 더해야 하나요?" 가장자리, 가로와 세로 두 번씩을 짝에게 말하게 한다. 출구 2번을 틀린 학생은 정사각형의 둘레를 한 변 × 한 변으로 구해 넓이와 섞는지 살펴 다음 시간 첫머리에 점판으로 다시 세어 보게 한다.',
    [xPerim('점판의 도형 ㅁ의 가장자리를 한 바퀴 도는 길이를 구해 보세요.', rectPts(5, 3), 0.14),
      { type: 'choice', prompt: '둘레를 알맞게 설명한 것은 무엇인가요?', options: ['도형의 가장자리를 한 바퀴 돌아 잰 길이', '도형 안쪽 모눈의 칸 수', '도형의 변의 개수'], answer: 0, difficulty: 0.1, explain: '둘레는 가장자리를 따라 한 바퀴 돈 길이예요. 안쪽 모눈의 칸 수는 넓이를 구할 때 써요.' },
      { type: 'choice', prompt: '한 변이 8 cm인 정사각형의 둘레는 몇 cm인가요?', options: ['32 cm', '16 cm', '64 cm'], answer: 0, difficulty: 0.16, explain: '네 변의 길이가 모두 8 cm이니 8 × 4 = 32 cm예요. 64는 8 × 8로 넓이를 구한 값이에요.' }]],
  ws: {
    title: '둘레 알아보기',
    items: [
      { type: 'figure', prompt: '점판 한 칸은 1 cm예요. 도형의 둘레를 구하세요.', tool: 'shapes', options: { mode: 'geoboard', size: 6 }, figures: [
        { state: { pts: rectPts(5, 2) }, caption: '둘레 ___ cm' }, { state: { pts: rectPts(3, 3) }, caption: '둘레 ___ cm' }], answer: '14 cm, 12 cm' },
      { type: 'table', prompt: '도형의 둘레를 구해 표를 완성하세요.', columns: ['도형', '가로(한 변)', '세로', '둘레'], cells: [['직사각형', '7 cm', '4 cm', ''], ['정사각형', '6 cm', '6 cm', ''], ['직사각형', '9 cm', '5 cm', '']], answer: '22 cm, 24 cm, 28 cm' },
      { type: 'choice', prompt: '가로 5 cm, 세로 3 cm인 직사각형의 둘레를 구하는 식에 ○ 하세요.', options: ['5 × 3', '(5 + 3) × 2', '5 + 3'], answer: '(5 + 3) × 2' },
      { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '한 변이 12 cm인 정사각형의 둘레는 12 × ___ = ___ cm예요.', answer: '4, 48' },
      { type: 'short', prompt: '민지는 가로 7 cm, 세로 4 cm인 직사각형의 둘레를 7 + 4 = 11 cm라고 했어요. 무엇이 잘못되었는지 써 보세요.', answer: '가로와 세로를 한 번씩만 더했다. 가장자리를 한 바퀴 돌면 가로와 세로가 두 번씩 나오므로 (7 + 4) × 2 = 22 cm이다.' },
    ],
    easy: { note: '둘레는 가장자리를 한 바퀴 돈 길이예요. 점판 한 칸은 1 cm예요. 모든 변의 길이를 더해요.', items: [
      { type: 'figure', prompt: '점판의 도형 둘레를 구하세요. (한 칸 1 cm)', tool: 'shapes', options: { mode: 'geoboard', size: 6 }, figures: [{ state: { pts: rectPts(4, 2) }, caption: '둘레 ___ cm' }], answer: '12 cm' },
      { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '3 + 2 + 3 + 2 = ___ cm', answer: '10' },
      { type: 'choice', prompt: '정사각형은 변이 몇 개인가요?', options: ['4개', '2개'], answer: '4개' },
      { type: 'draw', prompt: '점판에 가로 3칸, 세로 2칸인 직사각형을 그리고 둘레를 써 보세요.' },
    ] },
  },
  diff: {
    easy: '점판에 직각 표시가 보이고, 문항마다 변의 수를 세어 둘레 힌트를 받아요.',
    base: '직각 표시 없이 점판의 변을 스스로 세어 둘레를 구해요.',
    challenge: '더 큰 직사각형(5 × 4)의 둘레도 구하고 둘레 식을 말로 설명해요.',
  },
  notes: '자주 보이는 어려움: ① 가로와 세로를 한 번씩만 더해 둘레의 절반을 쓴다(7 + 4 = 11) → 가장자리를 손가락으로 한 바퀴 따라가며 변을 모두 세게 한다. ② 가로 × 세로로 둘레를 구한다 → 곱하면 모눈의 칸 수(넓이)라는 것을 점판으로 보여 준다. ③ 둘레와 넓이를 구분하지 못한다 → 울타리(길이)와 장판(면)의 예로 말하게 한다. 직사각형의 넓이는 7차시, 넓이 단위는 4차시에서 배우므로 이 시간에는 구분하는 말만 정리한다.',
}));

// ───────────────────────────── 2차시 (core · representation) ─────────────────────────────
L.push(lesson(2, {
  title: '변의 길이를 그림에 적어 정다각형과 여러 도형의 둘레 표로 정리하기',
  objective: '도형 그림에 변의 길이를 적어 정다각형과 직사각형, 꺾인 도형의 둘레를 구하고 둘레를 표로 견주어 정리할 수 있다.',
  desc: 'colorful paper-cut polygons of different shapes lined up on a classroom wall with small paper tags showing side lengths and a tidy paper table beneath them', text: '변의 길이를 적어요',
  layers: [{ motif: 'house', x: 110, y: 214, color: 'lavender' }, { motif: 'tree', x: 370, y: 216, color: 'mint' }, { motif: 'star', x: 250, y: 82 }],
  intro: ['"한 변이 5 cm인 정삼각형, 정사각형, 정오각형의 둘레를 모두 구하려면 어떤 점이 같을까요?" 정다각형은 모든 변의 길이가 같으니 한 변 × 변의 수라고 말하게 한다. 꺾인 도형은 그림에 적히지 않은 변의 길이를 어떻게 알아낼지 묻고, 마주 보는 변의 길이를 이용한다는 생각이 나오도록 이끈다.',
    '변의 길이가 모두 같은 도형에는 어떤 것이 있나요? 한 변이 5 cm이면 둘레는 어떻게 구할까요?'],
  acts: [
    act('a1', '활동 1. 꺾인 도형의 둘레 구하기', 'shapes', '꺾인 도형은 모든 변의 길이를 점판에서 세어 더해요. 변이 몇 개인지도 세어 빠뜨리지 않아요.',
      '"이 도형은 변이 몇 개인가요? 점판에서 하나씩 세어 볼까요?" L자 도형은 변이 6개라서 4개만 더하면 안 된다고 짚는다. 보이는 변만 더하는 학생에게는 빠뜨린 변을 연필로 따라 그려 보게 하고, 둘레가 감싸는 직사각형의 둘레와 같아지는 모양도 견주어 본다.',
      GEOL, [
        gPerim('점판의 L자 모양 도형 ㄱ의 둘레를 구해 보세요.', [[0, 0], [4, 0], [4, 2], [2, 2], [2, 5], [0, 5]], 0.2, { conclude: '변이 6개예요. 4 + 2 + 2 + 3 + 2 + 5 = 18 cm예요.' }),
        gPerim('점판의 L자 모양 도형 ㄴ의 둘레를 구해 보세요.', [[0, 0], [6, 0], [6, 2], [3, 2], [3, 4], [0, 4]], 0.22),
        gPerim('귀퉁이가 떨어져 나간 직사각형 도형 ㄷ의 둘레를 구해 보세요.', [[0, 0], [6, 0], [6, 4], [4, 4], [4, 3], [0, 3]], 0.26),
        gPerim('점판의 L자 모양 도형 ㄹ의 둘레를 구해 보세요.', [[0, 0], [7, 0], [7, 2], [2, 2], [2, 5], [0, 5]], 0.3, { extra: true }),
      ]),
    act('a2', '활동 2. 정다각형의 둘레 식 이어 보기', 'mindmap', '정다각형은 모든 변의 길이가 같아서 한 변의 길이에 변의 수를 곱하면 둘레예요.',
      '"정오각형은 변이 몇 개인가요? 한 변이 4 cm이면 둘레는 어떻게 구하나요?" 변의 수만큼 더하거나 곱한다고 말하게 한다. 변의 수를 헷갈려 정육각형을 7번 더하는 학생에게는 도형의 꼭짓점을 직접 세어 보게 한다.',
      ML('match', '정다각형 둘레'), [
        match('정다각형과 둘레를 구하는 식을 이어 보세요.', [['한 변이 7 cm인 정삼각형', regP(7, 3)], ['한 변이 9 cm인 정사각형', regP(9, 4)], ['한 변이 4 cm인 정오각형', regP(4, 5)]], [regP(4, 4)], 0.2,
          ['정다각형의 이름에서 변의 수를 먼저 알아봐요.', '한 변의 길이에 변의 수를 곱하면 둘레예요.', '정삼각형은 변이 3개, 정사각형은 4개, 정오각형은 5개예요.']),
        match('정다각형과 둘레를 구하는 식을 이어 보세요. 변의 수가 더 많아요.', [['한 변이 5 cm인 정육각형', regP(5, 6)], ['한 변이 12 cm인 정삼각형', regP(12, 3)], ['한 변이 8 cm인 정오각형', regP(8, 5)]], [regP(8, 6)], 0.24,
          ['정육각형은 변이 몇 개인지 세어 봐요.', '한 변의 길이 × 변의 수예요.', '정육각형은 6개, 정삼각형은 3개, 정오각형은 5개를 곱해요.']),
        match('둘레가 주어졌어요. 정다각형의 한 변의 길이를 이어 보세요.', [['둘레 24 cm인 정삼각형의 한 변', '24 ÷ 3 = 8 cm'], ['둘레 36 cm인 정사각형의 한 변', '36 ÷ 4 = 9 cm'], ['둘레 42 cm인 정육각형의 한 변', '42 ÷ 6 = 7 cm']], ['24 ÷ 4 = 6 cm'], 0.3,
          ['둘레를 변의 수로 나누면 한 변의 길이가 나와요.', '변의 수가 몇 개인지부터 정해요.', '정삼각형은 3으로, 정사각형은 4로, 정육각형은 6으로 나누어요.']),
      ]),
    act('a3', '활동 3. 여러 도형의 둘레를 견주어 표로 정리하기', 'mindmap', '여러 도형의 둘레를 구해 작은 순서로 놓거나 같은 둘레를 찾아 표로 정리해요.',
      '"도형의 모양이 달라도 둘레가 같을 수 있을까요?" 한 변이 5 cm인 정사각형과 가로 7 cm, 세로 3 cm인 직사각형이 둘레 20 cm로 같다는 것을 표로 확인하게 한다. 변이 많은 도형의 둘레가 항상 크다고 생각하는 학생에게는 한 변의 길이를 견주어 보게 한다.',
      ML('order', '둘레 견주기'), [
        ord('둘레가 작은 도형부터 차례대로 놓아 보세요.', ['한 변이 3 cm인 정육각형', '한 변이 5 cm인 정사각형', '한 변이 7 cm인 정삼각형', '가로 6 cm, 세로 5 cm인 직사각형'], [], 0.24,
          ['각 도형의 둘레를 먼저 구해 표에 써 두면 견주기 쉬워요.', '정다각형은 한 변 × 변의 수, 직사각형은 (가로 + 세로) × 2예요.', '정육각형은 18 cm, 정사각형은 20 cm, 정삼각형은 21 cm, 직사각형은 22 cm예요.']),
        ord('둘레가 작은 도형부터 차례대로 놓아 보세요. 변이 적어도 둘레가 클 수 있어요.', ['한 변이 4 cm인 정오각형', '가로 7 cm, 세로 4 cm인 직사각형', '한 변이 6 cm인 정사각형', '한 변이 9 cm인 정삼각형'], [], 0.28,
          ['도형마다 둘레를 구해 숫자로 견주어요.', '변의 수가 많다고 둘레가 큰 것은 아니에요.', '정오각형은 20 cm, 직사각형은 22 cm, 정사각형은 24 cm, 정삼각형은 27 cm예요.']),
        pick('둘레가 20 cm인 도형을 모두 골라 보세요.', '둘레 20 cm', [['한 변이 5 cm인 정사각형', 1], ['가로 7 cm, 세로 3 cm인 직사각형', 1], ['한 변이 7 cm인 정삼각형', 0], ['한 변이 4 cm인 정오각형', 1], ['가로 6 cm, 세로 5 cm인 직사각형', 0]], 0.3,
          ['도형마다 둘레를 구해 20 cm인지 견주어요.', '정다각형은 한 변 × 변의 수, 직사각형은 (가로 + 세로) × 2예요.', '정사각형은 5 × 4, 직사각형은 (7 + 3) × 2, 정오각형은 4 × 5로 모두 20 cm예요.']),
      ]),
  ],
  wrap: ['"변이 많은 도형이 둘레도 항상 클까요?" 한 변의 길이가 다르면 아니라는 것을 한 변이 9 cm인 정삼각형(27 cm)과 한 변이 4 cm인 정오각형(20 cm)으로 말하게 한다. 출구 3번을 틀린 학생은 그림에 적히지 않은 변의 길이를 어떻게 알아내는지 점판에서 다시 세어 보게 한다.',
    [xPerim('점판의 L자 모양 도형 ㅁ의 둘레를 구해 보세요.', [[0, 0], [5, 0], [5, 2], [2, 2], [2, 4], [0, 4]], 0.22),
      { type: 'choice', prompt: '한 변이 6 cm인 정오각형의 둘레는 몇 cm인가요?', options: ['30 cm', '24 cm', '36 cm'], answer: 0, difficulty: 0.14, explain: '정오각형은 변이 5개이고 길이가 모두 같으니 6 × 5 = 30 cm예요.' },
      { type: 'choice', prompt: '그림에 적히지 않은 변의 길이를 알아낼 때 알맞은 방법은 무엇인가요?', options: ['마주 보는 변의 길이를 이용해 구해요', '가장 긴 변의 길이와 같다고 해요', '적히지 않은 변은 더하지 않아요'], answer: 0, difficulty: 0.22, explain: '꺾인 도형은 마주 보는 변의 길이를 이어서 빠진 변을 찾을 수 있어요. 빠진 변을 더하지 않으면 둘레가 모자라요.' }]],
  ws: {
    title: '여러 도형의 둘레 표',
    items: [
      { type: 'figure', prompt: '점판의 도형 둘레를 구하세요. (한 칸 1 cm)', tool: 'shapes', options: { mode: 'geoboard', size: 6 }, figures: [{ state: { pts: [[0, 0], [4, 0], [4, 2], [2, 2], [2, 5], [0, 5]] }, caption: '둘레 ___ cm' }, { state: { pts: [[0, 0], [5, 0], [5, 2], [2, 2], [2, 4], [0, 4]] }, caption: '둘레 ___ cm' }], answer: '18 cm, 18 cm' },
      { type: 'table', prompt: '정다각형의 둘레를 구해 표를 완성하세요.', columns: ['도형', '한 변', '변의 수', '둘레'], cells: [['정삼각형', '5 cm', '3개', ''], ['정사각형', '5 cm', '4개', ''], ['정오각형', '5 cm', '5개', ''], ['정육각형', '5 cm', '6개', '']], answer: '15 cm, 20 cm, 25 cm, 30 cm' },
      { type: 'choice', prompt: '둘레가 36 cm인 정사각형의 한 변은 몇 cm인가요? 알맞은 것에 ○ 하세요.', options: ['9 cm', '12 cm', '4 cm'], answer: '9 cm' },
      { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '한 변이 7 cm인 정육각형의 둘레는 7 × ___ = ___ cm이에요.', answer: '6, 42' },
      { type: 'short', prompt: '한 변이 5 cm인 정사각형과 가로 7 cm, 세로 3 cm인 직사각형의 둘레를 비교해 보세요.', answer: '정사각형 5 × 4 = 20 cm, 직사각형 (7 + 3) × 2 = 20 cm로 모양은 달라도 둘레가 같다.' },
    ],
    easy: { note: '정다각형은 모든 변의 길이가 같아요. 둘레 = 한 변 × 변의 수예요.', items: [
      { type: 'table', prompt: '둘레를 구해 쓰세요.', columns: ['도형', '한 변', '변의 수', '둘레'], cells: [['정삼각형', '4 cm', '3개', ''], ['정사각형', '4 cm', '4개', '']], answer: '12 cm, 16 cm' },
      { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '한 변이 3 cm인 정오각형의 둘레는 3 × ___ = ___ cm', answer: '5, 15' },
      { type: 'choice', prompt: '정육각형의 변은 몇 개인가요?', options: ['6개', '5개'], answer: '6개' },
      { type: 'draw', prompt: '정삼각형 한 개를 그리고 각 변의 길이를 3 cm로 적은 뒤 둘레를 써 보세요.' },
    ] },
  },
  diff: {
    easy: '점판에 직각 표시가 보이고, 카드를 놓으면 맞는지 바로 알려 줘요.',
    base: '표시 없이 점판의 변을 세어 둘레를 구하고 카드를 이어요.',
    challenge: '변이 많은 L자 도형(7 × 5 안의 도형)과 둘레로 한 변을 거꾸로 구하는 문항도 풀어요.',
  },
  notes: '자주 보이는 어려움: ① 꺾인 도형에서 눈에 보이는 변만 더한다 → 변의 수를 먼저 세고 점판에서 빠진 변을 따라 그려 보게 한다. ② 정다각형의 변의 수를 잘못 센다(정육각형을 5로) → 꼭짓점을 직접 센다. ③ 변이 많을수록 둘레가 크다고 생각한다 → 한 변의 길이도 함께 견준다. 꺾인 도형의 둘레는 그것을 감싸는 직사각형의 둘레와 같다는 것을 발견하는 학생이 있으면 칭찬하고 모든 도형에서 그런지 확인해 보게 한다. 둘레가 같고 넓이가 다른 직사각형은 3차시에서 이어진다.',
}));

// ───────────────────────────── 3차시 (core · application) ─────────────────────────────
L.push(lesson(3, {
  title: '울타리와 액자 둘레 문제 풀고 둘레가 같은 직사각형의 넓이 견주기',
  objective: '둘레가 같은 직사각형의 가로와 세로를 여러 가지로 찾고, 둘레가 같아도 넓이가 다를 수 있음을 설명할 수 있다.',
  desc: 'several paper-cut garden plots of different rectangular shapes surrounded by the same length of paper fence ribbon on a table', text: '둘레는 같은데?',
  layers: [{ motif: 'tree', x: 100, y: 216 }, { motif: 'flower', x: 360, y: 228, color: 'peach' }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"긴 줄 16 m로 울타리를 쳐서 직사각형 화단을 만들어요. 가로를 5 m로 하면 세로는 몇 m일까요? 가로를 6 m로 하면요?" 둘레가 같아도 가로와 세로를 여러 가지로 정할 수 있음을 말하게 한다. "그럼 화단의 넓이도 모두 같을까요?" 하고 묻고, 같다고 하는 대답을 칠판에 적어 두었다가 활동 2에서 다시 살펴본다.',
    '길이가 같은 줄로 직사각형을 만들 때 가로와 세로를 다르게 하면 화단의 넓이는 어떻게 될까요? 짝과 생각을 말해 봐요.'],
  acts: [
    act('a1', '활동 1. 둘레가 같은 직사각형의 가로와 세로 찾기', 'mindmap', '직사각형의 둘레가 정해지면 (가로 + 세로)가 정해져요. 가로와 세로를 여러 가지로 짝지어 보아요.',
      '"둘레가 24 cm이면 가로와 세로를 더하면 몇 cm일까요?" 둘레의 절반이 가로 + 세로라고 말하게 한다. 가로와 세로를 곱해 24가 되는 쌍을 찾는 학생에게는 둘레와 넓이를 구하는 방법을 섞은 것임을 짚는다.',
      ML('pick', '둘레가 같은 직사각형'), [
        rectPick('둘레가 24 cm인 직사각형의 가로와 세로를 모두 골라 보세요.', 24, [[8, 4], [10, 2], [6, 6], [9, 4], [7, 4]], 0.2,
          ['둘레가 정해지면 가로와 세로를 더한 수가 정해져요.', '가로와 세로를 더한 값이 둘레의 절반이 되는 쌍을 찾아요.', '둘레 24 cm의 절반인 12 cm가 가로 + 세로가 되는 쌍이 알맞아요.'], { conclude: '둘레가 24 cm이면 가로 + 세로가 12 cm인 쌍이 모두 알맞아요.' }),
        rectPick('둘레가 30 cm인 직사각형의 가로와 세로를 모두 골라 보세요.', 30, [[12, 3], [10, 5], [9, 6], [11, 5], [8, 6]], 0.24,
          ['가로 + 세로가 둘레의 절반이 되는 쌍을 찾아요.', '둘레를 2로 나눈 수가 가로와 세로의 합이에요.', '둘레 30 cm의 절반인 15 cm가 가로 + 세로가 되는 쌍이 알맞아요.']),
        match('둘레와 가로를 보고 세로를 이어 보세요.', [['둘레 20 cm, 가로 6 cm', '4 cm'], ['둘레 28 cm, 가로 9 cm', '5 cm'], ['둘레 36 cm, 가로 11 cm', '7 cm']], ['14 cm'], 0.28,
          ['둘레의 절반에서 가로를 빼면 세로예요.', '(둘레 ÷ 2) − 가로를 구해요.', '20 ÷ 2 − 6, 28 ÷ 2 − 9, 36 ÷ 2 − 11을 계산해 봐요.']),
      ]),
    act('a2', '활동 2. 둘레가 같은 직사각형의 넓이 읽기', 'shapes', '모두 둘레가 16 cm인 직사각형이에요. 점판 한 칸은 가로·세로가 1 cm이니 칸 수를 세어 넓이를 구해요.',
      '"둘레가 같은 직사각형 세 개를 점판으로 만들면 넓이는 어떻게 다를까요?" 5 × 3, 6 × 2, 4 × 4의 넓이를 하나씩 구하고 표로 정리하게 한다. 둘레가 같으면 넓이도 같다고 했던 학생에게는 점판의 칸 수를 직접 세어 보게 한다.',
      GEOL, [
        gArea('둘레가 16 cm인 직사각형 ㄱ의 넓이를 구해 보세요.', rectPts(5, 3), 'rect', 0.16, { predict: { q: '둘레가 같은 직사각형의 넓이는 모두 같을까요?', options: ['모두 같아요', '다를 수 있어요'], answer: 1 } }),
        gArea('둘레가 16 cm인 직사각형 ㄴ의 넓이를 구해 보세요.', rectPts(6, 2), 'rect', 0.18),
        gArea('둘레가 16 cm인 직사각형 ㄷ의 넓이를 구해 보세요.', rectPts(4, 4), 'rect', 0.2, { conclude: '둘레가 모두 16 cm여도 넓이는 15, 12, 16 cm²로 달라요.' }),
        gArea('둘레가 16 cm인 직사각형 ㄹ의 넓이를 구해 보세요.', rectPts(7, 1), 'rect', 0.22, { extra: true }),
      ]),
    act('a3', '활동 3. 울타리·액자 문제 풀기', 'mindmap', '문제를 읽고 둘레를 구해야 하는지 넓이를 구해야 하는지 정한 다음 알맞은 식을 이어 보아요.',
      '"이 문제는 가장자리 길이를 묻나요, 안쪽 면을 묻나요?" 철망, 리본처럼 두르는 일은 둘레라고 말하게 한다. 9 × 6 = 54 m로 쓰는 학생에게는 단위가 m가 아니라 m²가 되는지 물어 넓이를 구한 식임을 알게 한다.',
      ML('match', '둘레 문제'), [
        match('문제와 둘레를 구하는 식을 이어 보세요.', [['가로 9 m, 세로 6 m인 밭에 울타리를 칠 때 필요한 길이', rectPU(9, 6, 'm')], ['한 변이 12 m인 정사각형 꽃밭을 한 바퀴 도는 길이', sqPU(12, 'm')], ['가로 20 cm, 세로 15 cm인 액자 테두리에 붙일 리본', rectPU(20, 15, 'cm')]], ['9 × 6 = 54 m²'], 0.24,
          ['울타리, 한 바퀴, 테두리는 모두 둘레를 구하는 말이에요.', '직사각형은 (가로 + 세로) × 2, 정사각형은 한 변 × 4예요.', '세 문제 모두 가장자리 길이이니 둘레 식을 골라요. 곱해서 m²로 나오는 식은 넓이예요.']),
        match('문제와 둘레를 구하는 식을 이어 보세요. 단위도 살펴요.', [['가로 15 m, 세로 8 m인 운동장 가장자리의 길', rectPU(15, 8, 'm')], ['한 변이 7 cm인 정사각형 카드 가장자리 길이', sqPU(7, 'cm')], ['가로 30 cm, 세로 12 cm인 상자 윗면 테두리', rectPU(30, 12, 'cm')]], ['15 × 8 = 120 m²'], 0.28,
          ['길이를 구하는 문제인지 먼저 정하고 단위를 살펴요.', '가장자리 길이는 m나 cm로, 면의 크기는 m²나 cm²로 나타내요.', '세 문제는 모두 가장자리 길이를 구하니 둘레 식을 골라요.']),
        srt('둘레를 구하는 문제와 넓이를 구하는 문제로 나누어 보세요.', '문제 가르기', { '둘레 문제': ['학교 담장의 길이 구하기', '도화지 가장자리에 줄 붙이기', '연못을 한 바퀴 도는 산책로의 길이'], '넓이 문제': ['운동장에 깔 잔디의 면적 구하기', '교실 벽에 붙일 포스터의 크기', '논에 심은 벼가 차지하는 땅의 크기'] }, 0.22,
          ['가장자리를 따라가는 일인지 안쪽 면을 채우는 일인지 생각해요.', '길이를 묻는 문제는 둘레이고, 면의 크기를 묻는 문제는 넓이예요.', '담장, 가장자리 줄, 산책로는 둘레 문제이고 잔디, 포스터, 땅의 크기는 넓이 문제예요.']),
      ]),
  ],
  wrap: ['"둘레가 같은 직사각형은 모양이 같을까요? 넓이는 어땠나요?" 둘레가 16 cm로 같아도 넓이는 15, 12, 16 cm²로 달랐음을 짝에게 말하게 한다. 출구 1번을 틀린 학생은 둘레가 같으면 넓이도 같다는 생각이 남아 있는지 살펴 다음 시간에 점판으로 다시 세어 보게 한다.',
    [xArea('둘레가 16 cm인 직사각형 ㅁ의 넓이를 구해 보세요.', rectPts(3, 5), 0.2),
      { type: 'choice', prompt: '둘레가 같은 직사각형의 넓이에 대해 알맞게 말한 것은 무엇인가요?', options: ['모양에 따라 달라질 수 있어요', '언제나 같아요', '언제나 정사각형이 가장 작아요'], answer: 0, difficulty: 0.16, explain: '둘레가 같아도 가로와 세로가 다르면 넓이가 달라져요. 둘레 16 cm에서 4 × 4는 16 cm², 7 × 1은 7 cm²예요.' },
      { type: 'choice', prompt: '둘레가 28 cm인 직사각형의 가로가 9 cm이면 세로는 몇 cm인가요?', options: ['5 cm', '19 cm', '10 cm'], answer: 0, difficulty: 0.22, explain: '둘레의 절반 14 cm에서 가로 9 cm를 빼면 세로는 5 cm예요.' }]],
  ws: {
    title: '둘레가 같은 직사각형',
    items: [
      { type: 'table', prompt: '둘레가 24 cm인 직사각형의 가로와 세로를 완성하세요.', columns: ['가로', '세로', '둘레'], cells: [['8 cm', '', '24 cm'], ['10 cm', '', '24 cm'], ['', '6 cm', '24 cm']], answer: '4 cm, 2 cm, 6 cm' },
      { type: 'figure', prompt: '모두 둘레가 16 cm인 직사각형이에요. 넓이를 구해 비교하세요. (한 칸 1 cm)', tool: 'shapes', options: { mode: 'geoboard', size: 8 }, figures: [{ state: { pts: rectPts(6, 2) }, caption: '넓이 ___ cm²' }, { state: { pts: rectPts(4, 4) }, caption: '넓이 ___ cm²' }], answer: '12 cm², 16 cm²' },
      { type: 'blank', prompt: '가로 15 m, 세로 8 m인 운동장 가장자리에 줄을 한 바퀴 둘러요. 필요한 줄의 길이를 구하세요.', text: '식: (15 + 8) × 2 = ___ m', answer: '46' },
      { type: 'choice', prompt: '둘레는 같지만 넓이가 가장 큰 직사각형은 어느 것인가요? (둘레 20 cm)', options: ['가로 9, 세로 1', '가로 8, 세로 2', '가로 5, 세로 5'], answer: '가로 5, 세로 5' },
      { type: 'short', prompt: '"둘레가 같으면 넓이도 같아요"라는 말이 맞는지 직사각형 두 개를 예로 들어 써 보세요.', answer: '맞지 않다. 둘레 16 cm인 5 × 3은 15 cm², 6 × 2는 12 cm²로 둘레가 같아도 넓이가 다르다.' },
    ],
    easy: { note: '가로 + 세로 = 둘레의 절반이에요. 가로를 정하면 세로가 정해져요. 둘레가 같아도 넓이는 달라질 수 있어요.', items: [
      { type: 'table', prompt: '둘레가 12 cm인 직사각형이에요. 세로를 쓰세요.', columns: ['가로', '세로', '둘레'], cells: [['4 cm', '', '12 cm'], ['5 cm', '', '12 cm']], answer: '2 cm, 1 cm' },
      { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '둘레가 20 cm이면 가로 + 세로 = ___ cm', answer: '10' },
      { type: 'choice', prompt: '울타리를 치는 문제에서 구하는 것은 무엇인가요?', options: ['둘레', '넓이'], answer: '둘레' },
      { type: 'draw', prompt: '모눈종이에 둘레가 12 cm인 직사각형을 서로 다른 모양으로 두 개 그려 보세요.' },
    ] },
  },
  diff: {
    easy: '점판에 직각 표시가 보이고, 카드를 놓으면 맞는지 바로 알려 줘요.',
    base: '표시 없이 점판의 칸을 세어 넓이를 구하고 둘레 식을 골라요.',
    challenge: '가로 7, 세로 1인 가느다란 직사각형까지 견주고, 둘레가 같은 직사각형 가운데 넓이가 가장 큰 것을 찾아 까닭을 설명해요.',
  },
  notes: '자주 보이는 어려움: ① 둘레가 같으면 넓이도 같다고 생각한다 → 점판으로 5 × 3, 6 × 2, 4 × 4의 넓이를 직접 세어 표로 견주게 한다. ② 둘레가 주어졌을 때 가로 × 세로가 둘레라고 생각한다 → 둘레의 절반이 가로 + 세로임을 알려 준다. ③ 울타리·리본 문제에서 넓이 식을 쓴다 → 단위가 m인지 m²인지 확인하게 한다. 같은 둘레에서 정사각형일 때 넓이가 가장 크다는 것은 발견하는 학생이 있으면 이야기하되, 이 시간의 필수 내용은 아니다.',
}));
// ───────────────────────────── 4차시 (core · concept) ─────────────────────────────
L.push(lesson(4, {
  title: '1 cm²와 1 m²는 어떤 정사각형의 넓이일까? 넓이 단위 알아보기',
  objective: '1 cm²와 1 m²가 각각 한 변이 1 cm, 1 m인 정사각형의 넓이임을 알고 1 m²는 1 cm²의 10000배임을 설명할 수 있다.',
  desc: 'a tiny paper square sticker and a huge paper square sheet on a classroom floor with a child lying a ruler across the big sheet', text: '넓이를 재는 단위',
  layers: [{ motif: 'house', x: 110, y: 214 }, { motif: 'tree', x: 370, y: 216, color: 'mint' }, { motif: 'flower', x: 250, y: 228 }],
  intro: ['"한 변이 1 cm인 정사각형 한 칸이 차지하는 넓이를 1 cm²라고 읽어요. 한 변이 1 m인 정사각형 안에는 1 cm² 한 칸이 모두 몇 개 들어갈까요?" 먼저 어림해 보게 하고 "100개요"처럼 한 줄의 개수만 말하는 대답이 나오면 칠판에 적어 둔다. 1 m = 100 cm이니 가로로 100칸, 세로로도 100줄이 놓인다는 것을 활동 2에서 확인하자고 말한다.',
    '1 cm는 길이이고 1 cm²는 넓이예요. 한 변이 1 m인 정사각형 안에 1 cm² 정사각형이 몇 개 들어갈까요? 짝과 어림해 봐요.'],
  acts: [
    act('a1', '활동 1. 모눈 한 칸이 1 cm²일 때 넓이 세기', 'shapes', '모눈 한 칸은 한 변이 1 cm인 정사각형이고 넓이는 1 cm²예요. 칸이 모두 몇 개인지 세어 넓이를 구해요.',
      '"모눈 한 칸의 넓이를 1 cm²라고 부르면 이 도형에는 몇 칸이 들어 있나요?" 직사각형 두 개로 나누어 세는 방법을 말하게 한다. 둘레의 단위 cm와 섞어 12 cm로 쓰는 학생에게는 칸의 수는 면의 크기이므로 cm²라고 짚는다.',
      GEOL, [
        gArea('모눈 한 칸이 1 cm²예요. 도형 ㄱ의 넓이를 구해 보세요.', [[0, 0], [3, 0], [3, 1], [1, 1], [1, 3], [0, 3]], 'poly', 0.14),
        gArea('모눈 한 칸이 1 cm²예요. 도형 ㄴ의 넓이를 구해 보세요.', [[0, 0], [4, 0], [4, 2], [2, 2], [2, 3], [0, 3]], 'poly', 0.18),
        gArea('모눈 한 칸이 1 cm²예요. 도형 ㄷ의 넓이를 구해 보세요.', [[0, 0], [5, 0], [5, 2], [2, 2], [2, 4], [0, 4]], 'poly', 0.22, { conclude: '모눈이 모두 14칸이면 넓이는 14 cm²예요. 넓이의 단위는 cm²예요.' }),
        gArea('모눈 한 칸이 1 cm²예요. 도형 ㄹ의 넓이를 구해 보세요.', [[0, 0], [6, 0], [6, 3], [3, 3], [3, 5], [0, 5]], 'poly', 0.26, { extra: true }),
      ]),
    act('a2', '활동 2. 1 cm², 1 m², 1 km²와 단위 사이의 관계', 'mindmap', '한 변이 1 cm, 1 m, 1 km인 정사각형의 넓이를 각각 1 cm², 1 m², 1 km²라고 해요. 1 m = 100 cm임을 이용해 1 m²가 1 cm²의 몇 배인지 알아봐요.',
      '"1 m는 몇 cm인가요? 한 변이 100 cm인 정사각형에는 1 cm² 정사각형이 가로로 몇 개, 세로로 몇 줄 들어가나요?" 100 × 100을 계산하게 한다. 한 변이 100배가 되면 넓이도 100배라고 생각하는 학생에게는 가로와 세로가 모두 100배가 되어 곱해진다는 점을 칠판의 그림으로 보인다.',
      ML('fill', '넓이 단위'), [
        match('정사각형과 그 넓이의 단위를 이어 보세요.', [['한 변이 1 cm인 정사각형의 넓이', '1 cm²'], ['한 변이 1 m인 정사각형의 넓이', '1 m²'], ['한 변이 1 km인 정사각형의 넓이', '1 km²']], ['1 cm³'], 0.12,
          ['한 변의 길이 단위를 두 번 곱한 단위가 넓이의 단위예요.', '변의 길이가 cm이면 넓이는 cm², m이면 m²예요.', '1 cm, 1 m, 1 km를 한 변으로 하는 정사각형의 넓이를 각각 1 cm², 1 m², 1 km²라고 해요.']),
        fill('1 m²가 1 cm²의 몇 배인지 알아보는 과정을 빈칸에 놓아 보세요.', [['1 m는 ___ cm예요', '100'], ['한 변이 1 m인 정사각형은 100 cm × 100 cm이므로 1 m² = ___ cm²', '10000'], ['한 변이 2 m인 정사각형의 넓이는 1 m²의 ___ 배예요', '4']], ['200', '1000'], 0.22,
          ['먼저 1 m가 몇 cm인지 떠올려요.', '가로로 놓이는 칸 수와 세로로 놓이는 줄 수를 곱해요.', '가로 100칸, 세로 100줄이라서 100 × 100 = 10000이에요. 한 변이 2배면 넓이는 2 × 2 = 4배예요.']),
        pick('1 m²를 바르게 설명한 카드를 모두 골라 보세요.', '1 m²', [['한 변이 1 m인 정사각형의 넓이', 1], ['1 cm²의 10000배', 1], ['1 cm²의 100배', 0], ['한 변이 100 cm인 정사각형의 넓이', 1]], 0.26,
          ['1 m를 cm로 바꾸어 정사각형의 한 변을 나타내 봐요.', '가로와 세로가 모두 100배가 되었으니 넓이는 곱셈으로 늘어나요.', '한 변이 100 cm이면 넓이는 100 × 100 = 10000 cm²이므로 100배가 아니라 10000배예요.'],
          { conclude: '한 변이 100배이면 넓이는 100 × 100 = 10000배가 돼요.' }),
      ]),
    act('a3', '활동 3. 알맞은 넓이 단위 고르기(cm², m²)', 'measure', '작은 물건의 넓이는 cm², 큰 장소의 넓이는 m²로 나타내요. 물건의 크기를 떠올려 알맞은 단위를 골라요.',
      '"우표의 넓이를 m²로 나타내면 어떤 수가 될까요?" 아주 작은 수가 되어 불편하다는 말이 나오게 한다. 교실 바닥을 cm²로 쓰는 학생에게는 아주 큰 수가 되어 읽기 어렵다는 점을 짚어 알맞은 크기를 고르게 한다.',
      UL3, [
        unitQ('알맞은 넓이 단위를 골라 보세요. 작은 것부터 있어요.', [{ name: '우표 한 장의 넓이', amount: 4 }, { name: '교실 바닥의 넓이', amount: 48 }, { name: '공책 표지의 넓이', amount: 300 }], ['cm²', 'm²'], [0, 1, 0], 0.12,
          ['물건이 손바닥보다 작은지, 방보다 큰지 크기를 떠올려요.', '작은 물건은 cm², 큰 장소는 m²로 나타내요.', '우표와 공책 표지는 cm², 교실 바닥은 m²가 알맞아요.']),
        unitQ('알맞은 넓이 단위를 골라 보세요. 큰 곳이 앞에 있어요.', [{ name: '체육관 바닥의 넓이', amount: 600 }, { name: '손바닥의 넓이', amount: 80 }, { name: '교과서 한 쪽의 넓이', amount: 400 }], ['cm²', 'm²'], [1, 0, 0], 0.16,
          ['이 크기를 책상 위에 올려놓을 수 있는지 생각해요.', '책상 위에 놓을 수 있는 크기는 cm², 건물 안 장소는 m²예요.', '체육관 바닥은 m², 손바닥과 교과서 한 쪽은 cm²가 알맞아요.']),
        unitQ('알맞은 넓이 단위를 골라 보세요. 약간 헷갈려요.', [{ name: '농구 코트의 넓이', amount: 420 }, { name: '스마트폰 화면의 넓이', amount: 90 }, { name: '칠판의 넓이', amount: 4 }], ['cm²', 'm²'], [1, 0, 1], 0.24,
          ['수의 크기와 물건의 크기를 함께 견주어 봐요.', '칠판은 책상보다 훨씬 커서 m²를 써요.', '농구 코트와 칠판은 m², 스마트폰 화면은 cm²가 알맞아요.']),
      ]),
  ],
  wrap: ['"1 m²는 1 cm²의 몇 배인가요? 100배라고 생각한 친구는 무엇을 놓쳤나요?" 가로와 세로가 모두 100배가 되어 100 × 100 = 10000배라고 짝에게 말하게 한다. 출구 2번을 틀린 학생은 한 변의 길이가 100배일 때 넓이도 100배가 된다고 생각하는지 살펴 다음 시간에 모눈 그림으로 다시 보여 준다.',
    [xArea('모눈 한 칸이 1 cm²예요. 도형 ㅁ의 넓이를 구해 보세요.', [[0, 0], [4, 0], [4, 3], [1, 3], [1, 1], [0, 1]], 0.24),
      { type: 'choice', prompt: '1 m²는 1 cm²의 몇 배인가요?', options: ['10000배', '100배', '1000배'], answer: 0, difficulty: 0.2, explain: '1 m = 100 cm이므로 가로 100칸, 세로 100줄이 놓여 100 × 100 = 10000배예요.' },
      { type: 'choice', prompt: '운동장의 넓이를 나타내기에 알맞은 단위는 무엇인가요?', options: ['m²', 'cm²', 'mm'], answer: 0, difficulty: 0.12, explain: '운동장은 크기가 커서 m²로 나타내요. cm²로 쓰면 수가 지나치게 커지고 mm는 길이 단위예요.' }]],
  ws: {
    title: '넓이의 단위',
    items: [
      { type: 'figure', prompt: '모눈 한 칸이 1 cm²예요. 도형의 넓이를 구하세요.', tool: 'shapes', options: { mode: 'geoboard', size: 6 }, figures: [{ state: { pts: [[0, 0], [3, 0], [3, 1], [1, 1], [1, 3], [0, 3]] }, caption: '넓이 ___ cm²' }, { state: { pts: [[0, 0], [4, 0], [4, 2], [2, 2], [2, 3], [0, 3]] }, caption: '넓이 ___ cm²' }], answer: '5 cm², 10 cm²' },
      { type: 'table', prompt: '정사각형의 한 변과 넓이의 단위를 이어 쓰세요.', columns: ['한 변의 길이', '넓이의 단위'], cells: [['1 cm', '1 ___'], ['1 m', '1 ___'], ['1 km', '1 ___']], answer: 'cm², m², km²' },
      { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '1 m = ___ cm이므로 1 m² = ___ × ___ = ___ cm²', answer: '100, 100, 100, 10000' },
      { type: 'choice', prompt: '교실 바닥의 넓이를 나타내기에 알맞은 단위에 ○ 하세요.', options: ['cm²', 'm²'], answer: 'm²' },
      { type: 'short', prompt: '1 m²를 100 cm²라고 하면 왜 틀렸는지 써 보세요.', answer: '1 m²는 한 변이 100 cm인 정사각형이라서 가로 100칸, 세로 100줄의 100 × 100 = 10000 cm²이다.' },
    ],
    easy: { note: '모눈 한 칸의 넓이가 1 cm²예요. 칸의 수가 곧 넓이(cm²)예요. 1 m = 100 cm예요.', items: [
      { type: 'figure', prompt: '모눈 한 칸이 1 cm²예요. 넓이를 구하세요.', tool: 'shapes', options: { mode: 'geoboard', size: 6 }, figures: [{ state: { pts: rectPts(3, 2) }, caption: '넓이 ___ cm²' }], answer: '6 cm²' },
      { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '1 m = ___ cm', answer: '100' },
      { type: 'choice', prompt: '넓이의 단위는 어느 것인가요?', options: ['cm²', 'cm'], answer: 'cm²' },
      { type: 'draw', prompt: '한 변이 1 cm인 정사각형을 그리고 넓이를 써 보세요.' },
    ] },
  },
  diff: {
    easy: '점판에 직각 표시가 보이고, 문항마다 칸 세기 힌트를 받아요.',
    base: '표시 없이 모눈 칸을 직접 세어 넓이를 구해요.',
    challenge: '더 큰 도형(ㄹ)의 넓이를 구하고 1 m²와 1 cm²의 관계를 식으로 설명해요.',
  },
  notes: '자주 보이는 어려움: ① 한 변이 100배이면 넓이도 100배가 된다고 생각한다 → 100 cm × 100 cm의 칸 수를 그림으로 보여 10000배임을 알려 준다. ② 넓이에 cm를 쓴다(12 cm) → 길이의 단위와 넓이의 단위(cm²)를 다시 나눈다. ③ 단위의 크기를 고려하지 않고 아무 단위나 고른다 → 물건의 크기를 떠올려 알맞은 단위를 말하게 한다. km²는 6차시에서 다루고 이 시간에는 이름과 뜻만 가볍게 짚는다.',
}));

// ───────────────────────────── 5차시 (core · representation) ─────────────────────────────
L.push(lesson(5, {
  title: '모눈 칸을 세어 넓이를 나타내고 반 칸은 짝지어 세기',
  objective: '단위넓이(1 cm²)가 몇 개 들어가는지 세어 도형의 넓이를 나타내고, 반 칸씩 걸친 부분은 두 개를 합쳐 한 칸으로 세어 구할 수 있다.',
  desc: 'colorful cut-paper polygons of different shapes placed on a large squared grid sheet with a child coloring one square at a time with a paper brush', text: '칸을 세어 봐요',
  layers: [{ motif: 'tree', x: 90, y: 214 }, { motif: 'flower', x: 380, y: 226 }, { motif: 'leaf', x: 250, y: 90, color: 'peach' }],
  intro: ['"모눈 위에 넓이가 12 cm²인 도형을 그려 보세요. 모양이 달라도 괜찮아요." 몇 명이 직사각형이 아닌 도형을 그렸는지 살펴보고 칠판에 서로 다른 모양 세 개를 붙인다. "반 칸만 걸친 곳은 한 칸으로 셀까요?"라고 물어 반 칸 한 개를 한 칸으로 세는 대답이 나오는지 살핀다.',
    '모눈 한 칸이 1 cm²일 때 넓이가 12 cm²인 도형은 직사각형 말고도 있을까요? 짝과 이야기해 봐요.'],
  acts: [
    act('a1', '활동 1. 넓이가 정해진 도형 점판에 만들기', 'shapes', '넓이가 정해지면 모눈 칸 수가 정해져요. 점을 찍어 조건에 맞는 도형을 만들어요. 점판 한 칸은 1 cm²예요.',
      '"넓이가 12 cm²인 직사각형은 가로와 세로가 어떻게 될 수 있나요?" 3 × 4, 2 × 6 등 여러 쌍을 말하게 한다. 직각삼각형을 만들 때 모눈 칸이 반만 걸친 곳이 생기는 것을 짚고, 칸을 세어 확인하게 한다.',
      GEOL, [
        gBuild('넓이가 12 cm²인 직사각형을 점판에 만들어 보세요.', { shape: 'rectangle', area: 12 }, 7, 0.14, ['직사각형은 가로와 세로의 칸 수를 곱하면 모눈 칸 수가 돼요.', '곱해서 원하는 넓이가 되는 가로와 세로를 찾아봐요.', '가로 3칸, 세로 4칸(또는 가로 2칸, 세로 6칸)이면 곱이 12예요.']),
        gBuild('넓이가 6 cm²인 직각삼각형을 만들어 보세요.', { shape: 'right-triangle', area: 6 }, 6, 0.24, ['직각삼각형은 같은 직각삼각형 두 개로 직사각형을 만들 수 있어요.', '만들려는 직사각형의 넓이의 반이 직각삼각형의 넓이예요.', '가로 3칸, 세로 4칸인 직사각형의 반을 잘라 낸 모양이면 6이에요.']),
        gBuild('넓이가 8 cm²인 직사각형을 만들어 보세요.', { shape: 'rectangle', area: 8 }, 7, 0.18, ['가로와 세로의 칸 수를 곱했을 때 원하는 넓이가 되어야 해요.', '1칸이나 2칸인 가느다란 모양도 가능해요.', '가로 2칸, 세로 4칸이면 곱이 8이에요.']),
        gBuild('넓이가 9 cm²인 정사각형을 만들어 보세요.', { shape: 'square', area: 9 }, 5, 0.2, ['정사각형은 가로와 세로의 칸 수가 같아요.', '같은 수를 두 번 곱해서 원하는 넓이가 되는 수를 찾아봐요.', '한 변이 3칸이면 3 × 3 = 9예요.'], { extra: true }),
      ]),
    act('a2', '활동 2. 반 칸을 합쳐 세어 넓이 구하기', 'shapes', '완전한 칸과 반 칸이 섞여 있어요. 반 칸 두 개를 합치면 한 칸이에요.',
      '"반 칸 두 개를 합치면 몇 칸이 되나요?" 직각삼각형은 직사각형의 반이라서 가로·세로 곱의 반이라고 말하게 한다. 반 칸을 한 칸으로 세어 크게 구하는 학생에게는 반 칸 두 개를 직접 짝지어 보게 한다.',
      GEOL, [
        gArea('도형 ㄱ은 직각삼각형이에요. 반 칸은 합쳐서 세고 넓이를 구해 보세요.', [[0, 0], [4, 0], [0, 3]], 'tri', 0.2, { hints: ['반 칸은 두 개를 합쳐 한 칸으로 세어요.', '완전한 칸의 수와 반 칸을 합친 칸의 수를 따로 세어 더해요.', '이 직각삼각형은 가로 4칸, 세로 3칸인 직사각형의 반이라서 12 ÷ 2 = 6이에요.'], predict: { q: '이 직각삼각형의 넓이는 직사각형 넓이의 얼마일까요?', options: ['같아요', '반이에요'], answer: 1 } }),
        gArea('도형 ㄴ은 직각삼각형이에요. 반 칸을 합쳐 넓이를 구해 보세요.', [[0, 0], [3, 0], [0, 3]], 'tri', 0.24, { hints: ['반 칸 두 개는 한 칸으로 셀 수 있어요.', '정사각형의 반이니 가로·세로의 곱의 반을 구해요.', '가로 3칸, 세로 3칸인 정사각형 넓이 9의 반이라서 4.5예요.'], conclude: '완전한 칸이 4개이고 반 칸이 1개라서 4와 반, 4.5 cm²예요.' }),
        gArea('도형 ㄷ의 넓이를 구해 보세요. 모눈이 반 칸씩 걸쳐 있어요.', [[0, 0], [4, 0], [5, 2], [1, 2]], 'par', 0.26, { hints: ['반 칸 두 개를 합쳐 한 칸으로 세어요.', '왼쪽과 오른쪽 끝의 반 칸 두 개는 합쳐 한 칸이 돼요.', '이 모양은 세로 2칸, 밑변 4칸이라서 4 × 2 = 8이에요.'] }),
        gArea('도형 ㄹ은 직각삼각형이에요. 넓이를 구해 보세요.', [[0, 0], [5, 0], [0, 4]], 'tri', 0.3, { extra: true, hints: ['직사각형의 반이라는 것을 이용해 봐요.', '가로 칸 수와 세로 칸 수의 곱을 구한 뒤 반으로 나누어요.', '5 × 4 = 20의 반이라서 10이에요.'] }),
      ]),
    act('a3', '활동 3. 넓이가 같은지 견주기', 'mindmap', '모양이 달라도 넓이가 같을 수 있어요. 카드를 보고 넓이가 12 cm²인 것과 아닌 것으로 나누어 보아요.',
      '"3 × 4와 2 × 6은 모양이 다른데 넓이는 어떤가요?" 곱이 같으면 넓이가 같다고 말하게 한다. 둘레가 큰 쪽이 넓이도 크다고 생각하는 학생에게는 둘레와 넓이를 따로 구해 표로 견주게 한다.',
      ML('sort', '넓이 견주기'), [
        srt('넓이가 12 cm²인 도형과 아닌 도형으로 나누어 보세요.', '넓이 견주기', { '넓이가 12 cm²예요': ['가로 3 cm, 세로 4 cm인 직사각형', '가로 2 cm, 세로 6 cm인 직사각형'], '12 cm²가 아니에요': ['한 변이 4 cm인 정사각형', '가로 5 cm, 세로 3 cm인 직사각형'] }, 0.2,
          ['도형마다 가로 × 세로를 계산해 넓이가 12인지 살펴요.', '곱해서 12가 나오는 두 수를 찾아봐요.', '3 × 4와 2 × 6은 12이고, 4 × 4는 16, 5 × 3은 15예요.']),
        pick('반 칸이 섞인 모눈의 넓이를 바르게 센 카드를 모두 골라 보세요.', '바르게 센 것', [['반 칸 두 개를 합쳐 한 칸으로 세어요', 1], ['반 칸도 한 칸으로 세어요', 0], ['완전한 칸 3개와 반 칸 2개는 4 cm²예요', 1], ['완전한 칸 3개와 반 칸 2개는 5 cm²예요', 0]], 0.24,
          ['반 칸이 한 칸의 얼마인지 생각해요.', '반 칸 두 개는 한 칸이에요.', '완전한 칸 3개에 반 칸 2개를 합친 1칸을 더하면 4 cm²예요.'],
          { conclude: '반 칸 두 개는 한 칸이에요. 반 칸을 한 칸으로 세면 넓이를 크게 구해요.' }),
        fill('직각삼각형의 넓이를 구하는 과정을 빈칸에 놓아 보세요.', [['가로 4칸, 세로 3칸인 직사각형의 넓이는 ___ cm²', '12'], ['직각삼각형은 직사각형의 ___이에요', '반'], ['따라서 직각삼각형의 넓이는 ___ cm²', '6']], ['24', '3'], 0.26,
          ['먼저 직사각형의 넓이를 구해요.', '직각삼각형 두 개를 붙이면 직사각형이 돼요.', '직사각형의 넓이 12의 반인 6이 직각삼각형의 넓이예요.']),
      ]),
  ],
  wrap: ['"반 칸이 있는 도형의 넓이는 어떻게 세었나요?" 반 칸 두 개를 합쳐 한 칸으로 셌다고 짝에게 말하게 한다. 출구 3번을 틀린 학생은 반 칸을 한 칸으로 세는지 살펴 다음 시간에 점판으로 짝을 지어 다시 세어 보게 한다.',
    [xArea('모눈 한 칸이 1 cm²예요. 도형 ㅁ의 넓이를 구해 보세요.', [[0, 0], [3, 0], [4, 2], [1, 2]], 0.26),
      { type: 'choice', prompt: '완전한 칸 5개와 반 칸 4개가 있어요. 넓이는 몇 cm²인가요?', options: ['7 cm²', '9 cm²', '5 cm²'], answer: 0, difficulty: 0.2, explain: '반 칸 4개는 두 개씩 합쳐 2칸이 되어 5 + 2 = 7 cm²예요.' },
      { type: 'choice', prompt: '모눈에서 1 cm²를 알맞게 설명한 것은 무엇인가요?', options: ['한 변이 1 cm인 정사각형 한 칸의 넓이', '길이가 1 cm인 선분', '한 변이 2 cm인 정사각형의 넓이'], answer: 0, difficulty: 0.1, explain: '1 cm²는 한 변이 1 cm인 정사각형의 넓이예요. 선분의 길이는 cm로 나타내요.' }]],
  ws: {
    title: '모눈 칸 세어 넓이 나타내기',
    items: [
      { type: 'figure', prompt: '모눈 한 칸이 1 cm²예요. 넓이를 구하세요. 반 칸은 합쳐서 세요.', tool: 'shapes', options: { mode: 'geoboard', size: 6 }, figures: [{ state: { pts: [[0, 0], [4, 0], [0, 3]] }, caption: '넓이 ___ cm²' }, { state: { pts: [[0, 0], [4, 0], [5, 2], [1, 2]] }, caption: '넓이 ___ cm²' }], answer: '6 cm², 8 cm²' },
      { type: 'table', prompt: '넓이가 12 cm²인 직사각형의 가로와 세로를 찾아 쓰세요.', columns: ['가로', '세로', '넓이'], cells: [['3 cm', '', '12 cm²'], ['2 cm', '', '12 cm²'], ['', '1 cm', '12 cm²']], answer: '4 cm, 6 cm, 12 cm' },
      { type: 'choice', prompt: '완전한 칸 6개와 반 칸 4개의 넓이에 ○ 하세요.', options: ['8 cm²', '10 cm²', '12 cm²'], answer: '8 cm²' },
      { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '가로 5칸, 세로 4칸인 직각삼각형은 직사각형의 반이므로 5 × 4 ÷ 2 = ___ cm²', answer: '10' },
      { type: 'short', prompt: '반 칸 세 개를 한 칸 세 개로 세면 왜 틀리는지 써 보세요.', answer: '반 칸은 한 칸의 반이라서 두 개를 합쳐야 한 칸이 된다. 반 칸 세 개는 한 칸 반이다.' },
    ],
    easy: { note: '반 칸 두 개는 한 칸이에요. 직각삼각형은 직사각형의 반이에요.', items: [
      { type: 'figure', prompt: '모눈 한 칸이 1 cm²예요. 넓이를 구하세요.', tool: 'shapes', options: { mode: 'geoboard', size: 6 }, figures: [{ state: { pts: [[0, 0], [2, 0], [0, 2]] }, caption: '넓이 ___ cm²' }], answer: '2 cm²' },
      { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '반 칸 2개 = ___칸', answer: '1' },
      { type: 'choice', prompt: '직사각형 한 개의 넓이가 8 cm²이면 반으로 나눈 직각삼각형의 넓이는?', options: ['4 cm²', '16 cm²'], answer: '4 cm²' },
      { type: 'draw', prompt: '모눈종이에 넓이가 6 cm²인 도형을 서로 다른 모양으로 두 개 그려 보세요.' },
    ] },
  },
  diff: {
    easy: '점판에 직각 표시가 보이고, 문항마다 칸 세기 힌트를 받아요.',
    base: '표시 없이 칸을 세어 넓이를 구하고 조건에 맞는 도형을 만들어요.',
    challenge: '직각삼각형(5 × 4의 반)의 넓이를 구하고, 같은 넓이의 서로 다른 도형을 설명해요.',
  },
  notes: '자주 보이는 어려움: ① 반 칸을 한 칸으로 센다 → 반 칸 두 개를 직접 짝지어 한 칸을 만든다. ② 완전한 칸만 세고 반 칸을 빼먹는다 → 반 칸에 색을 칠해 따로 센다. ③ 모양이 다르면 넓이도 다르다고 생각한다 → 3 × 4와 2 × 6처럼 다른 모양의 넓이가 같은 경우를 점판으로 만들어 본다. 직각삼각형의 반 칸 세기는 10차시 삼각형 넓이로 이어진다.',
}));

// ───────────────────────────── 6차시 (core · application) ─────────────────────────────
L.push(lesson(6, {
  title: '알맞은 넓이 단위를 고르고 m²·cm²·km² 바꾸어 보기',
  objective: '넓이를 재는 대상의 크기에 알맞은 단위(cm², m², km²)를 고르고, m²와 cm², km²와 m²의 관계를 이용해 단위를 바꿀 수 있다.',
  desc: 'three paper-cut objects of very different sizes lined up from a tiny stamp to a gym floor to a huge map of a country with paper ruler tags of different units', text: '단위를 골라요',
  layers: [{ motif: 'house', x: 110, y: 214, color: 'peach' }, { motif: 'mountain', x: 370, y: 190 }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"공책 표지, 교실 바닥, 우리 시의 넓이를 모두 같은 단위로 나타내면 어떻게 될까요?" 공책 표지를 km²로, 우리 시를 cm²로 나타내면 수가 얼마나 이상해지는지 어림하게 한다. 크기에 맞는 단위를 골라야 읽기 쉽다는 말이 나오도록 하고, 1 km² = 1000000 m²를 오늘 확인하자고 말한다.',
    '아주 작은 것과 아주 큰 곳의 넓이를 같은 단위로 쓰면 어떻게 될까요? 짝에게 말해 봐요.'],
  acts: [
    act('a1', '활동 1. 크기에 맞는 단위 고르기(cm², m², km²)', 'measure', '아주 작은 것은 cm², 방이나 운동장은 m², 도시나 나라처럼 아주 넓은 곳은 km²로 나타내요.',
      '"우리 시의 넓이를 m²로 나타내면 수가 어떻게 될까요?" 수가 너무 커져서 읽기 어렵다는 점을 말하게 한다. 넓은 장소를 cm²로 쓰는 학생에게는 1 cm²가 한 변 1 cm인 아주 작은 정사각형임을 떠올리게 한다.',
      UL3, [
        unitQ('물건의 넓이에 알맞은 단위를 골라 보세요.', [{ name: '공책 표지의 넓이', amount: 300 }, { name: '교실 바닥의 넓이', amount: 50 }, { name: '우리 시 전체의 넓이', amount: 120 }], ['cm²', 'm²', 'km²'], [0, 1, 2], 0.16,
          ['물건이나 장소가 책상 위, 건물 안, 도시 가운데 어디에 가까운지 떠올려요.', '책상 위는 cm², 건물 안은 m², 도시나 나라는 km²예요.', '공책 표지는 cm², 교실 바닥은 m², 시 전체는 km²가 알맞아요.']),
        unitQ('넓이에 알맞은 단위를 골라 보세요. 순서가 섞여 있어요.', [{ name: '제주도의 넓이', amount: 1850 }, { name: '교과서 한 쪽의 넓이', amount: 400 }, { name: '운동장의 넓이', amount: 6000 }], ['cm²', 'm²', 'km²'], [2, 0, 1], 0.22,
          ['수가 아무리 커도 장소의 크기를 먼저 생각해요.', '섬 하나는 도시처럼 아주 넓은 곳이에요.', '제주도는 km², 교과서 한 쪽은 cm², 운동장은 m²가 알맞아요.']),
        unitQ('넓이에 알맞은 단위를 골라 보세요. 다시 한 번 살펴요.', [{ name: '우리나라 전체의 넓이', amount: 100000 }, { name: '스마트폰 화면의 넓이', amount: 90 }, { name: '농구장의 넓이', amount: 420 }], ['cm²', 'm²', 'km²'], [2, 0, 1], 0.26,
          ['장소의 크기를 단위의 크기와 견주어 봐요.', '나라 전체는 가장 큰 단위를 써요.', '우리나라는 km², 스마트폰 화면은 cm², 농구장은 m²가 알맞아요.']),
      ]),
    act('a2', '활동 2. 같은 넓이를 다른 단위로 바꾸어 이어 보기', 'mindmap', '1 m²는 10000 cm², 1 km²는 1000000 m²예요. 같은 넓이를 다른 단위로 나타낸 카드를 이어 보아요.',
      '"3 m²를 cm²로 바꾸려면 몇을 곱해야 하나요?" 10000을 곱한다고 말하게 한다. 100을 곱해 300 cm²로 쓰는 학생에게는 1 m²가 몇 cm²인지 활동 2의 지난 시간 내용을 떠올리게 한다.',
      ML('match', '단위 바꾸기'), [
        match('m²를 cm²로 바꾼 값을 이어 보세요.', [convPair(3, 'm²', 'cm²'), convPair(7, 'm²', 'cm²'), convPair(12, 'm²', 'cm²')], ['300 cm²'], 0.22,
          ['1 m²는 몇 cm²인지 떠올려요.', 'm²를 cm²로 바꿀 때는 10000을 곱해요.', '3 m²는 3 × 10000, 7 m²는 7 × 10000, 12 m²는 12 × 10000이에요.']),
        match('cm²를 m²로 바꾼 값을 이어 보세요.', [convPair(40000, 'cm²', 'm²'), convPair(90000, 'cm²', 'm²'), convPair(250000, 'cm²', 'm²')], ['400 m²'], 0.26,
          ['cm²를 m²로 바꿀 때는 10000으로 나누어요.', '1 m²가 10000 cm²라는 것을 거꾸로 이용해요.', '40000 ÷ 10000, 90000 ÷ 10000, 250000 ÷ 10000을 계산해요.']),
        match('km²와 m²를 바꾼 값을 이어 보세요.', [convPair(1, 'km²', 'm²'), convPair(3, 'km²', 'm²'), convPair(5000000, 'm²', 'km²')], ['1000 m²'], 0.3,
          ['1 km²는 1000000 m²예요.', 'km²를 m²로 바꿀 때는 1000000을 곱하고, 거꾸로는 나누어요.', '1 km² = 1000000 m²이고, 5000000 m²는 5000000 ÷ 1000000 = 5 km²예요.']),
      ]),
    act('a3', '활동 3. 단위를 바꾸어 쓰고 넓이 순서 놓기', 'mindmap', '알맞은 문장을 고르고 단위 바꾸기 빈칸을 채워요. 마지막으로 넓이가 작은 것부터 차례로 놓아요.',
      '"우리 시의 넓이를 cm²로 쓴 문장은 왜 이상한가요?" 크기에 비해 단위가 너무 작아 수가 커진다고 말하게 한다. 단위가 달라 크기를 견주기 어려울 때는 같은 단위로 바꾸어 견주게 한다.',
      ML('fill', '단위와 크기'), [
        pick('알맞은 단위를 쓴 문장을 모두 골라 보세요.', '알맞은 문장', [['교실 바닥의 넓이는 약 50 m²예요', 1], ['우리 시의 넓이는 약 120 cm²예요', 0], ['공책 표지의 넓이는 약 300 cm²예요', 1], ['제주도의 넓이는 약 1850 m²예요', 0]], 0.2,
          ['문장 속 장소의 크기와 단위의 크기가 어울리는지 살펴요.', '아주 넓은 곳은 km², 책상 위 물건은 cm²가 알맞아요.', '시와 섬은 km²를 써야 하고, 교실 바닥은 m², 공책 표지는 cm²가 알맞아요.'],
          { conclude: '크기에 알맞은 단위를 써야 수가 읽기 쉬워요.' }),
        fill('같은 넓이를 다른 단위로 바꾸어 빈칸에 놓아 보세요.', [['5 m² = ___ cm²', '50000'], ['60000 cm² = ___ m²', '6'], ['2 km² = ___ m²', '2000000']], ['500', '600'], 0.28,
          ['m²와 cm²의 관계, km²와 m²의 관계를 먼저 떠올려요.', 'm²를 cm²로 바꿀 때는 곱하고, cm²를 m²로 바꿀 때는 나누어요.', '5 × 10000, 60000 ÷ 10000, 2 × 1000000을 계산해 봐요.']),
        ord('넓이가 작은 것부터 차례대로 놓아 보세요.', ['우표 한 장 약 4 cm²', '공책 표지 약 300 cm²', '교실 바닥 약 50 m²', '우리 시 약 120 km²'], [], 0.24,
          ['단위가 cm², m², km² 순서로 커져요.', '같은 단위끼리는 수를 견주고, 다른 단위는 단위의 크기로 견주어요.', '우표 < 공책 표지 < 교실 바닥 < 우리 시 순서예요.']),
      ]),
  ],
  wrap: ['"넓이를 나타낼 때 단위는 어떻게 골라야 하나요?" 대상의 크기를 떠올려 알맞은 단위를 고르고 필요하면 바꾸어 쓴다고 짝에게 말하게 한다. 출구 2번을 틀린 학생은 m²를 cm²로 바꿀 때 100을 곱하는지 살펴 다음 시간에 1 m²의 모눈 그림으로 다시 보여 준다.',
    [{ type: 'tool', tool: 'measure', options: { mode: 'unit', things: [{ name: '우리 학교 운동장의 넓이', amount: 7000 }, { name: '우표 한 장의 넓이', amount: 6 }, { name: '서울시의 넓이', amount: 605 }], units: ['cm²', 'm²', 'km²'] }, prompt: '넓이에 알맞은 단위를 골라 보세요.', target: { units: [1, 0, 2] }, difficulty: 0.24 },
      { type: 'choice', prompt: '4 m²를 cm²로 바꾼 것은 무엇인가요?', options: ['40000 cm²', '400 cm²', '4000 cm²'], answer: 0, difficulty: 0.24, explain: '1 m²가 10000 cm²이니 4 m² = 4 × 10000 = 40000 cm²예요.' },
      { type: 'choice', prompt: '3 km²는 몇 m²인가요?', options: ['3000000 m²', '3000 m²', '300000 m²'], answer: 0, difficulty: 0.26, explain: '1 km²가 1000000 m²이니 3 km² = 3000000 m²예요.' }]],
  ws: {
    title: '넓이 단위 고르고 바꾸기',
    items: [
      { type: 'table', prompt: '알맞은 넓이 단위를 쓰세요. (cm², m², km²)', columns: ['대상', '단위'], cells: [['우리 반 교실 바닥', ''], ['손수건', ''], ['경기도 전체', ''], ['운동장', '']], answer: 'm², cm², km², m²' },
      { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '8 m² = ___ cm²,  30000 cm² = ___ m²,  4 km² = ___ m²', answer: '80000, 3, 4000000' },
      { type: 'choice', prompt: '1 m²와 같은 넓이에 ○ 하세요.', options: ['100 cm²', '10000 cm²', '1000 cm²'], answer: '10000 cm²' },
      { type: 'blank', prompt: '넓이가 작은 것부터 차례대로 쓰세요. (2 km², 5 m², 900 cm²)', text: '① ______  ② ______  ③ ______', answer: '900 cm², 5 m², 2 km²' },
      { type: 'short', prompt: '"우리 학교의 넓이는 약 8000 cm²예요"라는 말이 이상한 까닭을 써 보세요.', answer: '학교는 아주 넓은 곳인데 cm²는 아주 작은 단위라서 수가 너무 작다. m²나 km²가 알맞다.' },
    ],
    easy: { note: '작은 것은 cm², 방이나 운동장은 m², 도시나 나라는 km²예요. 1 m² = 10000 cm²예요.', items: [
      { type: 'table', prompt: '알맞은 단위에 ○ 하세요.', columns: ['대상', 'cm²', 'm²', 'km²'], cells: [['공책 표지', '', '', ''], ['교실 바닥', '', '', ''], ['우리나라', '', '', '']], answer: '공책 표지 cm², 교실 바닥 m², 우리나라 km²' },
      { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '1 m² = ___ cm²', answer: '10000' },
      { type: 'choice', prompt: '더 큰 단위는 무엇인가요?', options: ['m²', 'cm²'], answer: 'm²' },
      { type: 'draw', prompt: '우리 집에서 m²로 나타내면 좋은 곳과 cm²로 나타내면 좋은 것을 한 가지씩 써 보세요.' },
    ] },
  },
  diff: {
    easy: '단위 고르기에서 물건의 크기를 알려 주는 그림 힌트를 받고, 단위 사이 관계 카드가 함께 보여요.',
    base: '단위 관계를 스스로 떠올려 단위를 고르고 바꾸어요.',
    challenge: 'km²와 m²를 오가는 문항과 넓이 순서 놓기까지 풀어요.',
  },
  notes: '자주 보이는 어려움: ① 넓은 장소를 cm²로 나타낸다 → 1 cm²가 얼마나 작은 정사각형인지 떠올려 수가 지나치게 커진다고 짚는다. ② m²를 cm²로 바꿀 때 100을 곱한다 → 1 m² = 100 × 100 = 10000 cm²임을 다시 보여 준다. ③ km²와 m²의 관계를 1000으로 안다 → 한 변이 1000 m이니 1000 × 1000 = 1000000임을 확인한다. 단위를 바꾸어 넓이를 견주는 활동은 단위 순서 놓기에서 한 번 더 연습한다.',
}));

// ───────────────────────────── 7차시 (core · concept) ─────────────────────────────
L.push(lesson(7, {
  title: '모눈 칸으로 확인하며 직사각형과 정사각형 넓이 구하기',
  objective: '직사각형의 넓이를 가로와 세로의 곱으로 구할 수 있는 까닭을 모눈으로 설명하고, 정사각형의 넓이도 구할 수 있다.',
  desc: 'a neat paper-cut rectangle drawn on squared paper with rows of small squares counted by a child using a long wooden pointer', text: '가로 곱하기 세로',
  layers: [{ motif: 'tree', x: 100, y: 216 }, { motif: 'flower', x: 370, y: 228 }, { motif: 'bird', x: 250, y: 82 }],
  intro: ['"모눈 위에 가로 5칸, 세로 3칸인 직사각형을 그렸어요. 칸은 모두 몇 칸일까요? 하나씩 세지 않고 빨리 구할 방법이 있을까요?" 한 줄에 5칸씩 3줄이라는 대답이 나오게 하고 5 × 3 = 15를 칠판에 쓴다. "가로와 세로를 더하면 안 될까요?"라고 물어 둘레와 섞는 대답이 나오는지 살핀다.',
    '한 줄에 몇 칸씩 몇 줄이 있는지 알면 모눈 전체 칸 수를 쉽게 구할 수 있을까요? 짝과 말해 봐요.'],
  acts: [
    act('a1', '활동 1. 모눈 칸 세어 직사각형의 넓이 구하기', 'shapes', '점판 한 칸은 1 cm²예요. 가로로 몇 칸, 세로로 몇 칸인지 보고 직사각형의 넓이를 구해요.',
      '"가로로 몇 칸이고 세로로 몇 줄인가요?" 한 줄의 칸 수 × 줄의 수가 전체 칸 수라고 말하게 한다. 5 + 3 = 8로 쓰는 학생에게는 점판의 칸을 한 줄씩 세어 15칸이 나오는 것을 직접 보게 한다.',
      GEOL, [
        gArea('점판의 직사각형 ㄱ의 넓이를 구해 보세요.', rectPts(5, 3), 'rect', 0.12, { predict: { q: '가로 5칸, 세로 3칸이면 모눈은 모두 몇 칸일까요?', options: ['8칸', '15칸', '16칸'], answer: 1 }, conclude: '한 줄에 5칸씩 3줄이라서 5 × 3 = 15 cm²예요.' }),
        gArea('점판의 직사각형 ㄴ의 넓이를 구해 보세요.', rectPts(6, 4), 'rect', 0.16),
        gArea('점판의 직사각형 ㄷ의 넓이를 구해 보세요.', rectPts(7, 2), 'rect', 0.16),
        gArea('점판의 정사각형 ㄹ의 넓이를 구해 보세요.', rectPts(5, 5), 'rect', 0.2, { extra: true }),
      ]),
    act('a2', '활동 2. 넓이가 정해진 직사각형과 정사각형 만들기', 'shapes', '넓이가 정해지면 가로와 세로의 곱이 정해져요. 조건에 맞는 직사각형과 정사각형을 점판에 만들어요.',
      '"넓이가 18 cm²인 직사각형의 가로와 세로는 몇 cm와 몇 cm가 될 수 있나요?" 곱이 18인 쌍을 말하게 한다. 둘레가 18이 되는 도형을 만드는 학생에게는 모눈 칸 수와 가장자리 길이를 구분해 보게 한다.',
      GEOL, [
        gBuild('넓이가 18 cm²인 직사각형을 점판에 만들어 보세요.', { shape: 'rectangle', area: 18 }, 8, 0.18, ['직사각형의 넓이는 가로 × 세로이니 곱이 원하는 넓이가 되는 두 수를 찾아요.', '곱셈구구에서 곱이 원하는 수가 되는 두 수를 떠올려 봐요.', '가로 3칸, 세로 6칸(또는 가로 2칸, 세로 9칸)이면 곱이 18이에요.']),
        gBuild('넓이가 16 cm²인 정사각형을 점판에 만들어 보세요.', { shape: 'square', area: 16 }, 6, 0.2, ['정사각형은 가로와 세로의 길이가 같아요.', '같은 수를 두 번 곱해서 원하는 넓이가 되는 수를 찾아요.', '한 변이 4칸이면 4 × 4 = 16이에요.']),
        gBuild('넓이가 20 cm²인 직사각형을 점판에 만들어 보세요.', { shape: 'rectangle', area: 20 }, 8, 0.22, ['가로와 세로의 곱이 원하는 넓이가 되어야 해요.', '곱이 20인 두 수의 짝을 모두 떠올려 봐요.', '가로 4칸, 세로 5칸이면 곱이 20이에요.']),
        gBuild('넓이가 25 cm²인 정사각형을 점판에 만들어 보세요.', { shape: 'square', area: 25 }, 7, 0.24, ['정사각형이라 가로와 세로가 같아요.', '같은 수를 두 번 곱해 원하는 넓이가 되는 수를 찾아요.', '한 변이 5칸이면 5 × 5 = 25예요.'], { extra: true }),
      ]),
    act('a3', '활동 3. 넓이 식과 둘레 식 가르고 이어 보기', 'mindmap', '넓이는 곱해서, 둘레는 더해서 구해요. 식을 넓이와 둘레로 나누고 도형과 넓이 식을 이어 보아요.',
      '"가로 8 cm, 세로 5 cm인 직사각형의 넓이와 둘레를 모두 구해 볼까요?" 8 × 5 = 40 cm², (8 + 5) × 2 = 26 cm라고 단위를 붙여 말하게 한다. 두 값을 섞어 쓰는 학생에게는 단위가 cm인지 cm²인지 먼저 묻는다.',
      ML('match', '넓이 식'), [
        srt('식을 넓이를 구하는 식과 둘레를 구하는 식으로 나누어 보세요.', '식 가르기', { '넓이를 구하는 식': ['8 × 5 = 40 cm²', '6 × 6 = 36 cm²', '9 × 3 = 27 cm²'], '둘레를 구하는 식': ['(8 + 5) × 2 = 26 cm', '6 × 4 = 24 cm', '9 + 3 + 9 + 3 = 24 cm'] }, 0.18,
          ['식의 오른쪽 단위가 cm인지 cm²인지 살펴요.', '곱해서 면의 크기를 나타내면 cm², 더해서 가장자리 길이를 나타내면 cm예요.', '가로 × 세로는 넓이이고, 변의 길이를 더하거나 (가로 + 세로) × 2는 둘레예요.']),
        match('도형과 넓이를 구하는 식을 이어 보세요.', [['가로 8 cm, 세로 5 cm인 직사각형', rectA(8, 5)], ['한 변이 6 cm인 정사각형', sqA(6)], ['가로 9 cm, 세로 3 cm인 직사각형', rectA(9, 3)]], [rectP(8, 5)], 0.22,
          ['넓이는 가로 × 세로로 구해요.', '정사각형은 가로와 세로가 같으니 한 변 × 한 변이에요.', '곱해서 cm²가 되는 식을 골라요. 더해서 cm로 나온 식은 둘레예요.']),
        fill('넓이 구하는 방법을 빈칸에 놓아 보세요.', [['직사각형의 넓이 = 가로 × ___', '세로'], ['정사각형의 넓이 = 한 변 × ___', '한 변'], ['둘레의 단위는 cm이고 넓이의 단위는 ___이에요', 'cm²']], ['cm³'], 0.2,
          ['모눈의 한 줄 칸 수에 줄의 수를 곱했던 것을 떠올려요.', '정사각형은 가로와 세로가 같아요.', '직사각형은 가로 × 세로, 정사각형은 한 변 × 한 변이고 넓이의 단위는 cm²예요.']),
      ]),
  ],
  wrap: ['"직사각형의 넓이는 왜 가로 × 세로로 구할 수 있나요?" 한 줄에 가로의 칸 수만큼, 그런 줄이 세로의 수만큼 있기 때문이라고 짝에게 말하게 한다. 출구 2번을 틀린 학생은 11 cm²처럼 가로 + 세로를 하는지 살펴 다음 시간에 점판에서 한 줄씩 칸을 세어 다시 보여 준다.',
    [xArea('점판의 직사각형 ㅁ의 넓이를 구해 보세요.', rectPts(8, 3), 0.16),
      { type: 'choice', prompt: '가로 7 cm, 세로 4 cm인 직사각형의 넓이는 얼마인가요?', options: ['28 cm²', '22 cm²', '11 cm²'], answer: 0, difficulty: 0.14, explain: '가로 × 세로 = 7 × 4 = 28 cm²예요. 22는 둘레 (7 + 4) × 2이고 11은 가로와 세로를 더한 값이에요.' },
      { type: 'choice', prompt: '한 변이 9 cm인 정사각형의 넓이는 얼마인가요?', options: ['81 cm²', '36 cm²', '18 cm²'], answer: 0, difficulty: 0.14, explain: '정사각형은 한 변 × 한 변이라서 9 × 9 = 81 cm²예요. 36은 둘레이고 18은 9 + 9예요.' }]],
  ws: {
    title: '직사각형과 정사각형의 넓이',
    items: [
      { type: 'figure', prompt: '점판 한 칸은 1 cm²예요. 넓이를 구하세요.', tool: 'shapes', options: { mode: 'geoboard', size: 8 }, figures: [{ state: { pts: rectPts(6, 3) }, caption: '넓이 ___ cm²' }, { state: { pts: rectPts(4, 4) }, caption: '넓이 ___ cm²' }], answer: '18 cm², 16 cm²' },
      { type: 'table', prompt: '넓이와 둘레를 구해 표를 완성하세요.', columns: ['도형', '가로(한 변)', '세로', '넓이', '둘레'], cells: [['직사각형', '8 cm', '5 cm', '', ''], ['정사각형', '6 cm', '6 cm', '', ''], ['직사각형', '10 cm', '4 cm', '', '']], answer: '40 cm², 26 cm / 36 cm², 24 cm / 40 cm², 28 cm' },
      { type: 'choice', prompt: '가로 9 cm, 세로 6 cm인 직사각형의 넓이를 구하는 식에 ○ 하세요.', options: ['9 × 6', '(9 + 6) × 2', '9 + 6'], answer: '9 × 6' },
      { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '한 변이 7 cm인 정사각형의 넓이는 7 × ___ = ___ cm²', answer: '7, 49' },
      { type: 'short', prompt: '지호는 가로 8 cm, 세로 5 cm인 직사각형의 넓이를 13 cm²라고 했어요. 무엇이 잘못되었는지 써 보세요.', answer: '가로와 세로를 더했다. 넓이는 가로 × 세로이므로 8 × 5 = 40 cm²이다.' },
    ],
    easy: { note: '직사각형의 넓이 = 가로 × 세로, 정사각형의 넓이 = 한 변 × 한 변이에요. 단위는 cm²예요.', items: [
      { type: 'figure', prompt: '점판 한 칸은 1 cm²예요. 넓이를 구하세요.', tool: 'shapes', options: { mode: 'geoboard', size: 6 }, figures: [{ state: { pts: rectPts(4, 3) }, caption: '넓이 ___ cm²' }], answer: '12 cm²' },
      { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '가로 5 cm, 세로 2 cm인 직사각형의 넓이는 5 × 2 = ___ cm²', answer: '10' },
      { type: 'choice', prompt: '넓이의 단위는 어느 것인가요?', options: ['cm²', 'cm'], answer: 'cm²' },
      { type: 'draw', prompt: '가로 4칸, 세로 3칸인 직사각형을 모눈종이에 그리고 넓이를 써 보세요.' },
    ] },
  },
  diff: {
    easy: '점판에 직각 표시가 보이고, 문항마다 칸 세기 힌트를 받아요.',
    base: '표시 없이 칸을 세어 넓이를 구하고 조건에 맞는 도형을 만들어요.',
    challenge: '더 큰 정사각형(5 × 5, 한 변 5칸)을 만들고 넓이 식과 둘레 식을 구별해 설명해요.',
  },
  notes: '자주 보이는 어려움: ① 가로와 세로를 더해 넓이를 구한다(8 + 5 = 13) → 모눈 한 줄의 칸 수 × 줄의 수가 넓이라고 점판으로 보여 준다. ② 넓이와 둘레를 섞어 쓴다 → 단위가 cm인지 cm²인지 확인하게 한다. ③ 정사각형의 넓이를 한 변 × 4로 구한다 → 한 변 × 한 변이고 × 4는 둘레라고 짚는다. 곱하여 구하는 이유는 활동 1의 모눈 줄 수 세기로 설명한다.',
}));
// ───────────────────────────── 8차시 (core · representation) ─────────────────────────────
L.push(lesson(8, {
  title: 'L자 모양을 직사각형으로 나누거나 큰 직사각형에서 빼서 넓이 구하기',
  objective: '직사각형이 아닌 모양을 직사각형 여러 개로 나누어 더하거나 큰 직사각형에서 빈 곳을 빼서 넓이를 구하고 식으로 나타낼 수 있다.',
  desc: 'an L-shaped paper-cut garden bed split by a dotted line into two rectangles with a child holding a ruler beside it', text: '나누어서 구해요',
  layers: [{ motif: 'house', x: 110, y: 214, color: 'lavender' }, { motif: 'flower', x: 360, y: 228 }, { motif: 'leaf', x: 250, y: 90, color: 'mint' }],
  intro: ['"L자 모양 꽃밭의 넓이는 어떻게 구할 수 있을까요? 직사각형이 아닌데 가로 × 세로를 쓸 수 있을까요?" 직사각형 두 개로 나누어 더하는 방법과 큰 직사각형에서 빈 곳을 빼는 방법이 모두 나오도록 하고, 같은 L자를 두 가지 방법으로 구한 값이 같은지 살펴보게 한다. 나눈 두 직사각형이 겹치는 곳을 두 번 세는 대답이 나오면 그대로 적어 두었다가 활동 3에서 다시 본다.',
    'L자 모양을 직사각형 두 개로 나누는 방법은 한 가지만 있을까요? 짝과 선을 그어 보며 이야기해 봐요.'],
  acts: [
    act('a1', '활동 1. L자 도형의 넓이 구하기', 'shapes', '점판 한 칸은 1 cm²예요. 도형을 직사각형으로 나누거나 큰 직사각형에서 빈 곳을 빼서 넓이를 구해요.',
      '"이 도형을 직사각형 몇 개로 나눌 수 있나요? 다른 방법은 없나요?" 위아래로 나누기, 좌우로 나누기, 빼기를 모두 말하게 한다. 가로와 세로의 가장 긴 길이를 곱하는 학생에게는 비어 있는 부분이 있음을 점판에서 보여 준다.',
      GEOL, [
        gArea('점판의 L자 도형 ㄱ의 넓이를 구해 보세요.', [[0, 0], [4, 0], [4, 2], [2, 2], [2, 5], [0, 5]], 'poly', 0.2, { conclude: '직사각형 4 × 2와 2 × 3으로 나누면 8 + 6 = 14 cm²예요.' }),
        gArea('점판의 L자 도형 ㄴ의 넓이를 구해 보세요.', [[0, 0], [6, 0], [6, 2], [3, 2], [3, 4], [0, 4]], 'poly', 0.24),
        gArea('점판의 귀퉁이가 떨어져 나간 직사각형 ㄷ의 넓이를 구해 보세요.', [[0, 0], [6, 0], [6, 4], [4, 4], [4, 3], [0, 3]], 'poly', 0.28),
        gArea('점판의 L자 도형 ㄹ의 넓이를 구해 보세요.', [[0, 0], [5, 0], [5, 5], [3, 5], [3, 2], [0, 2]], 'poly', 0.3, { extra: true }),
      ]),
    act('a2', '활동 2. 나누는 방법과 식 이어 보기', 'mindmap', '직사각형으로 나누어 더하는 방법과 큰 직사각형에서 빼는 방법이 있어요. 방법에 알맞은 식을 이어 보아요.',
      '"더하는 방법과 빼는 방법은 어떤 점이 같고 다른가요?" 같은 L자의 넓이가 같다는 것을 식으로 확인하게 한다. 4 × 2 + 2 × 5처럼 겹치는 곳을 두 번 세는 식을 고르는 학생에게는 가로 2칸, 세로 2칸이 겹쳐 있음을 그림으로 짚는다.',
      ML('match', '나누는 방법'), [
        match('나누는 방법과 넓이를 구하는 식을 이어 보세요.', [['위아래 두 직사각형(가로 4·세로 2, 가로 2·세로 3)을 더한다', compAdd(4, 2, 2, 3)], ['큰 직사각형(가로 4·세로 5)에서 빈 곳(가로 2·세로 3)을 뺀다', compSub(4, 5, 2, 3)], ['아래 직사각형(가로 6·세로 2)과 위 직사각형(가로 3·세로 2)을 더한다', compAdd(6, 2, 3, 2)]], [`4 × 2 + 2 × 5 = ${4 * 2 + 2 * 5}`], 0.26,
          ['나눈 직사각형의 가로와 세로를 곱해 더하거나, 큰 직사각형에서 빈 곳의 넓이를 빼요.', '식에 나오는 수가 설명 속 가로와 세로와 같은지 하나씩 맞춰 보세요.', '더하는 방법은 각 직사각형의 넓이를 더하고, 빼는 방법은 큰 직사각형 넓이에서 빈 곳의 넓이를 빼요.']),
        match('나누는 방법과 넓이를 구하는 식을 이어 보세요. 귀퉁이가 떨어진 모양도 있어요.', [['가로 6·세로 3인 직사각형과 가로 2·세로 1인 직사각형을 더한다', compAdd(6, 3, 2, 1)], ['가로 6·세로 4인 큰 직사각형에서 가로 4·세로 1인 직사각형을 뺀다', compSub(6, 4, 4, 1)], ['가로 5·세로 2인 직사각형과 가로 2·세로 3인 직사각형을 더한다', compAdd(5, 2, 2, 3)]], [`6 × 4 + 4 × 1 = ${6 * 4 + 4 * 1}`], 0.3,
          ['설명 속 가로와 세로의 수를 식에 그대로 옮겨 곱해요.', '더한다고 했는지 뺀다고 했는지 부호를 살펴요.', '더하는 방법은 + , 빼는 방법은 − 부호를 써서 직사각형의 넓이끼리 계산해요.']),
        match('꽃밭의 모양과 넓이를 구하는 식을 이어 보세요.', [['가로 8 m, 세로 6 m 직사각형에서 가로 3 m, 세로 2 m를 뺀 모양의 꽃밭', `${compSub(8, 6, 3, 2)} m²`], ['가로 7 m, 세로 3 m와 가로 4 m, 세로 2 m 직사각형을 붙인 모양의 운동 코너', `${compAdd(7, 3, 4, 2)} m²`], ['가로 10 m, 세로 5 m 직사각형에서 가로 4 m, 세로 3 m를 뺀 모양의 정원', `${compSub(10, 5, 4, 3)} m²`]], [`8 × 6 + 3 × 2 = ${8 * 6 + 3 * 2} m²`], 0.32,
          ['붙이는 것은 더하기, 잘라 내는 것은 빼기예요.', '가로와 세로를 곱해 각 직사각형의 넓이를 구한 뒤 부호에 맞게 계산해요.', '빼는 모양은 큰 직사각형 넓이에서 빈 곳의 넓이를 빼고, 붙인 모양은 두 직사각형의 넓이를 더해요.'], { extra: true }),
      ]),
    act('a3', '활동 3. 알맞은 식 고르고 꽃밭 넓이 구하기', 'mindmap', '겹치는 부분을 두 번 세지 않는 식을 골라요. 빼는 방법으로 꽃밭의 넓이를 구해 보아요.',
      '"이 식에서 겹치는 곳을 두 번 센 식은 어느 것인가요?" 나눈 두 직사각형이 서로 겹치지 않아야 한다고 말하게 한다. 더하기와 빼기를 헷갈려 큰 직사각형에 빈 곳의 넓이를 더하는 학생에게는 빈 곳은 도형에 없는 부분임을 짚는다.',
      ML('pick', '넓이 식 고르기'), [
        pick('한 변이 5 cm인 정사각형에서 오른쪽 아래 가로 2 cm, 세로 3 cm를 잘라 낸 모양의 넓이를 구하는 식을 모두 골라 보세요.', '알맞은 식', [[`${compAdd(3, 3, 5, 2)} (cm²)`, 1], [`${compSub(5, 5, 2, 3)} (cm²)`, 1], [`${compAdd(3, 5, 5, 2)} (cm²)`, 0], [`${compAdd(5, 5, 2, 3)} (cm²)`, 0]], 0.26,
          ['나눈 직사각형이 겹치지 않는지, 잘라 낸 부분을 더하지 않았는지 살펴요.', '큰 정사각형의 넓이에서 잘라 낸 부분의 넓이를 빼거나, 겹치지 않게 나누어 더해요.', '큰 정사각형 25에서 잘라 낸 6을 빼거나, 아래 3 × 3과 위쪽 5 × 2를 더해요.'],
          { conclude: '겹치지 않게 나누어 더하거나, 큰 직사각형에서 빈 곳을 빼면 같은 넓이가 나와요.' }),
        pick('가로 6 cm, 세로 4 cm인 직사각형에서 왼쪽 위의 가로 3 cm, 세로 2 cm를 잘라 낸 모양의 넓이를 구하는 식을 모두 골라 보세요.', '알맞은 식', [[`${compAdd(6, 2, 3, 2)} (cm²)`, 1], [`${compSub(6, 4, 3, 2)} (cm²)`, 1], [`${compAdd(6, 4, 3, 2)} (cm²)`, 0], [`${compAdd(6, 2, 3, 4)} (cm²)`, 0]], 0.3,
          ['큰 직사각형에서 잘라 낸 곳은 도형에 포함되지 않아요.', '나눌 때는 겹치는 곳이 없도록 해요.', '큰 직사각형 24에서 잘라 낸 6을 빼거나, 아래 6 × 2와 위쪽 오른쪽 3 × 2를 더해요.']),
        fill('빼는 방법으로 꽃밭의 넓이를 구하는 과정을 빈칸에 놓아 보세요.', [['가로 9 m, 세로 5 m인 큰 직사각형의 넓이는 9 × 5 = ___ m²', '45'], ['빼는 가로 4 m, 세로 2 m인 직사각형의 넓이는 4 × 2 = ___ m²', '8'], ['꽃밭의 넓이는 45 − 8 = ___ m²', '37']], ['53', '13'], 0.28,
          ['먼저 큰 직사각형의 넓이를 구해요.', '잘라 낸 곳의 넓이를 큰 직사각형의 넓이에서 빼요.', '45에서 8을 빼면 꽃밭의 넓이예요. 더하면 도형보다 커져요.']),
      ]),
  ],
  wrap: ['"L자 모양의 넓이를 구하는 방법을 두 가지 말해 볼까요?" 나누어 더하기, 큰 직사각형에서 빼기를 말하게 하고 두 방법의 값이 같다는 것을 식으로 짝에게 보여 주게 한다. 출구 2번을 틀린 학생은 겹치는 곳을 두 번 세는지, 큰 직사각형에 빈 곳을 더하는지 살펴 다음 시간에 그림에 선을 그어 다시 세어 보게 한다.',
    [xArea('점판의 L자 도형 ㅁ의 넓이를 구해 보세요.', [[0, 0], [4, 0], [4, 3], [2, 3], [2, 5], [0, 5]], 0.28),
      { type: 'choice', prompt: '가로 6 cm, 세로 4 cm인 직사각형에서 가로 2 cm, 세로 1 cm를 잘라 낸 모양의 넓이는 얼마인가요?', options: ['22 cm²', '26 cm²', '10 cm²'], answer: 0, difficulty: 0.24, explain: '큰 직사각형 6 × 4 = 24에서 잘라 낸 2 × 1 = 2를 빼서 22 cm²예요. 26은 더한 값이에요.' },
      { type: 'choice', prompt: 'L자 모양의 넓이를 구하는 방법으로 알맞지 않은 것은 무엇인가요?', options: ['나눈 직사각형이 겹치는 곳을 두 번 세어 더해요', '겹치지 않는 직사각형 두 개로 나누어 넓이를 더해요', '큰 직사각형의 넓이에서 빈 곳의 넓이를 빼요'], answer: 0, difficulty: 0.2, explain: '겹치는 곳을 두 번 세면 실제보다 넓이가 커져요. 겹치지 않게 나누거나 큰 직사각형에서 빼야 해요.' }]],
  ws: {
    title: '복잡한 모양의 넓이',
    items: [
      { type: 'figure', prompt: '점판 한 칸은 1 cm²예요. 직사각형으로 나누거나 빼서 넓이를 구하세요.', tool: 'shapes', options: { mode: 'geoboard', size: 6 }, figures: [{ state: { pts: [[0, 0], [4, 0], [4, 2], [2, 2], [2, 5], [0, 5]] }, caption: '넓이 ___ cm²' }, { state: { pts: [[0, 0], [5, 0], [5, 5], [3, 5], [3, 2], [0, 2]] }, caption: '넓이 ___ cm²' }], answer: '14 cm², 16 cm²' },
      { type: 'table', prompt: '두 가지 방법으로 넓이를 구해 표를 완성하세요.', columns: ['도형', '나누어 더하기', '빼기', '넓이'], cells: [['L자 ㄱ', '4 × 2 + 2 × 3', '4 × 5 − 2 × 3', ''], ['L자 ㄴ', '6 × 2 + 3 × 2', '6 × 4 − 3 × 2', ''], ['L자 ㄷ (정사각형 5 cm에서 가로 2, 세로 3 cm를 뺀 모양)', '', '', '']], answer: '14 cm², 18 cm², 3 × 3 + 5 × 2 = 19 또는 5 × 5 − 2 × 3 = 19, 19 cm²' },
      { type: 'blank', prompt: '가로 10 m, 세로 6 m인 큰 직사각형에서 가로 4 m, 세로 3 m를 뺀 꽃밭의 넓이를 구하세요.', text: '식: 10 × 6 − 4 × 3 = ___ − ___ = ___ m²', answer: '60, 12, 48' },
      { type: 'choice', prompt: '넓이를 구하는 방법으로 알맞지 않은 것에 ○ 하세요.', options: ['겹치지 않게 직사각형으로 나누어 더해요', '겹치는 부분을 두 번 더해요', '큰 직사각형에서 빈 곳을 빼요'], answer: '겹치는 부분을 두 번 더해요' },
      { type: 'short', prompt: '같은 L자 도형을 더하는 방법과 빼는 방법으로 구했더니 모두 14 cm²가 나왔어요. 이 결과가 같은 까닭을 써 보세요.', answer: '나누어 더하든 큰 직사각형에서 빈 곳을 빼든 같은 도형의 넓이를 구하는 방법이라서 결과가 같다.' },
    ],
    easy: { note: '직사각형이 아닌 모양은 직사각형으로 나누어 더하거나, 큰 직사각형에서 빈 곳을 빼서 구해요.', items: [
      { type: 'figure', prompt: '점판 한 칸은 1 cm²예요. 넓이를 구하세요.', tool: 'shapes', options: { mode: 'geoboard', size: 6 }, figures: [{ state: { pts: [[0, 0], [3, 0], [3, 1], [1, 1], [1, 3], [0, 3]] }, caption: '넓이 ___ cm²' }], answer: '5 cm²' },
      { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '3 × 1 + 1 × 2 = ___ + ___ = ___ cm²', answer: '3, 2, 5' },
      { type: 'choice', prompt: '큰 직사각형에서 빈 곳을 어떻게 하나요?', options: ['빼요', '더해요'], answer: '빼요' },
      { type: 'draw', prompt: 'L자 모양을 그리고 직사각형 두 개로 나누는 선을 그어 보세요.' },
    ] },
  },
  diff: {
    easy: '점판에 직각 표시가 보이고, 나누는 방법을 힌트로 받아요.',
    base: '표시 없이 스스로 직사각형으로 나누거나 빼서 넓이를 구해요.',
    challenge: '귀퉁이가 떨어진 모양과 더 큰 L자(ㄹ)를 풀고, 식이 맞는지 점판으로 확인해요.',
  },
  notes: '자주 보이는 어려움: ① 나눈 직사각형이 겹치는 곳을 두 번 센다(4 × 2 + 2 × 5) → 그림에 겹친 곳을 색칠해 보여 준다. ② 가장 긴 가로와 세로를 곱한다 → 빈 곳이 있는 모양임을 점판으로 확인한다. ③ 빼는 방법에서 빈 곳을 더한다 → 빈 곳은 도형에 없는 부분이라고 짚는다. 같은 도형을 두 가지 방법으로 구해 값이 같음을 확인하는 활동이 이 차시의 핵심이다.',
}));

// ───────────────────────────── 9차시 (core · application) ─────────────────────────────
L.push(lesson(9, {
  title: '넓이와 한 변을 알 때 다른 변 구하고 방바닥 타일 수 세어 보기',
  objective: '직사각형의 넓이와 한 변의 길이를 알 때 나눗셈으로 다른 변의 길이를 구하고, 방바닥 타일 같은 실생활 문제에 직사각형의 넓이를 적용할 수 있다.',
  desc: 'a paper-cut room floor being covered with square paper tiles by a child, with a few empty spaces still showing the cream floor', text: '타일은 몇 장?',
  layers: [{ motif: 'house', x: 110, y: 214, color: 'peach' }, { motif: 'tree', x: 370, y: 216 }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"넓이가 48 cm²이고 가로가 8 cm인 직사각형의 세로는 몇 cm일까요?" 8 × □ = 48에서 □를 구하는 문제로 바꾸어 생각하게 한다. 48 − 8 = 40처럼 빼서 구하는 대답이 나오면 칠판에 적어 두고, 40 cm를 세로로 하면 넓이가 얼마가 되는지 직접 계산해 보게 한다.',
    '직사각형의 넓이는 가로 × 세로예요. 넓이와 가로를 알면 세로는 어떻게 구할 수 있을까요? 짝과 말해 봐요.'],
  acts: [
    act('a1', '활동 1. 넓이에서 변의 길이 거꾸로 구하기', 'mindmap', '가로 × 세로 = 넓이이므로 넓이를 아는 한 변으로 나누면 다른 변을 알 수 있어요.',
      '"8 × □ = 48의 □는 어떻게 구하나요?" 곱셈의 역이 나눗셈이라고 말하게 한다. 48에서 8을 빼 40 cm로 쓰는 학생에게는 가로 8 cm, 세로 40 cm인 직사각형의 넓이를 구해 보게 하여 48 cm²와 다름을 확인하게 한다.',
      ML('match', '변의 길이'), [
        match('넓이와 한 변을 보고 다른 변의 길이를 이어 보세요.', [['넓이 48 cm², 가로 8 cm', `${48 / 8} cm`], ['넓이 72 cm², 가로 9 cm', `${72 / 9} cm`], ['넓이 45 cm², 세로 5 cm', `${45 / 5} cm`]], [`${48 - 8} cm`], 0.2,
          ['넓이 = 가로 × 세로이니 거꾸로 생각해요.', '넓이를 알고 있는 변으로 나누면 다른 변의 길이예요.', '48 ÷ 8, 72 ÷ 9, 45 ÷ 5를 각각 계산해 봐요. 빼면 넓이가 맞지 않아요.']),
        match('넓이와 한 변을 보고 다른 변의 길이를 이어 보세요. 수가 더 커졌어요.', [['넓이 63 cm², 가로 7 cm', `${63 / 7} cm`], ['넓이 96 cm², 세로 8 cm', `${96 / 8} cm`], ['넓이 84 cm², 가로 12 cm', `${84 / 12} cm`]], [`${63 - 7} cm`], 0.26,
          ['곱셈구구와 나눗셈의 관계를 이용해요.', '넓이를 아는 변의 길이로 나누어요.', '63 ÷ 7, 96 ÷ 8, 84 ÷ 12를 계산해요.']),
        match('밭의 넓이와 한 변을 보고 다른 변의 길이를 이어 보세요.', [['넓이 120 m², 가로 12 m인 밭', `${120 / 12} m`], ['넓이 135 m², 세로 9 m인 밭', `${135 / 9} m`], ['넓이 96 m², 가로 16 m인 밭', `${96 / 16} m`]], [`${120 - 12} m`], 0.3,
          ['단위가 m²이니 넓이를 아는 변으로 나누면 m 단위의 길이가 나와요.', '나눗셈이 어려우면 곱셈으로 □를 찾아봐요.', '120 ÷ 12, 135 ÷ 9, 96 ÷ 16을 계산해요.'], { extra: true }),
      ]),
    act('a2', '활동 2. 방바닥에 필요한 타일 수 구하기', 'mindmap', '방바닥의 넓이를 구한 뒤 타일 한 장의 넓이로 나누면 필요한 타일의 수를 알 수 있어요.',
      '"타일 한 장이 2 m²이면 24 m²를 덮는 데 몇 장이 필요한가요?" 전체 넓이를 한 장의 넓이로 나눈다고 말하게 한다. 24 × 2로 곱하는 학생에게는 타일이 클수록 필요한 장 수가 줄어드는지 물어 어림하게 한다.',
      ML('fill', '타일 수'), [
        fill('가로 6 m, 세로 4 m인 방바닥에 타일을 까는 과정을 빈칸에 놓아 보세요.', [['방바닥의 넓이는 6 × 4 = ___ m²', '24'], ['타일 한 장이 2 m²이면 필요한 타일은 24 ÷ 2 = ___장', '12'], ['타일 한 장이 4 m²이면 필요한 타일은 24 ÷ 4 = ___장', '6']], ['48', '10'], 0.22,
          ['먼저 방바닥의 넓이를 구해요.', '전체 넓이를 타일 한 장의 넓이로 나누어요.', '타일이 클수록 필요한 장 수는 줄어들어요.']),
        fill('가로 8 m, 세로 5 m인 방바닥에 타일을 까는 과정을 빈칸에 놓아 보세요.', [['방바닥의 넓이는 8 × 5 = ___ m²', '40'], ['타일 한 장이 4 m²이면 필요한 타일은 40 ÷ 4 = ___장', '10'], ['타일 한 장이 10 m²이면 필요한 타일은 40 ÷ 10 = ___장', '4']], ['80', '20'], 0.26,
          ['넓이를 구한 뒤 타일 한 장의 넓이로 나누어요.', '타일의 크기와 필요한 장 수는 반대로 움직여요.', '40 ÷ 4와 40 ÷ 10을 계산해요.']),
        fill('가로 9 m, 세로 6 m인 방바닥에 타일을 까는 과정을 빈칸에 놓아 보세요.', [['방바닥의 넓이는 9 × 6 = ___ m²', '54'], ['타일 한 장이 3 m²이면 필요한 타일은 54 ÷ 3 = ___장', '18'], ['타일 한 장이 6 m²이면 필요한 타일은 54 ÷ 6 = ___장', '9']], ['27', '15'], 0.3,
          ['넓이를 먼저 구하고 한 장의 넓이로 나누어요.', '곱셈구구를 거꾸로 이용하면 쉬워요.', '54 ÷ 3과 54 ÷ 6을 계산해요.']),
      ]),
    act('a3', '활동 3. 알맞은 식 고르기와 문제 유형 가르기', 'mindmap', '넓이, 둘레, 한 변을 구하는 문제를 구별하고 알맞은 식을 골라 보아요.',
      '"이 문제는 둘레를 묻나요, 넓이를 묻나요, 한 변을 묻나요?" 구하려는 것을 먼저 밝히고 식을 고르게 한다. 한 변을 구하는데 곱하는 학생에게는 넓이가 이미 주어졌는지 되묻는다.',
      ML('pick', '알맞은 식'), [
        pick('넓이가 48 cm²이고 가로가 8 cm인 직사각형의 세로를 구하는 식을 모두 골라 보세요.', '알맞은 식', [['48 ÷ 8 = 6 (cm)', 1], ['8 × □ = 48에서 □를 구해요', 1], ['48 − 8 = 40 (cm)', 0], ['48 × 8 = 384 (cm)', 0]], 0.2,
          ['가로 × 세로 = 넓이에서 모르는 수를 구하는 문제예요.', '곱셈식의 모르는 수는 나눗셈으로 구해요.', '48을 가로 8로 나누면 세로예요. 빼거나 곱하면 넓이가 맞지 않아요.'],
          { conclude: '넓이를 아는 변으로 나누면 다른 변의 길이가 나와요.' }),
        pick('넓이가 54 cm²이고 세로가 6 cm인 직사각형의 가로를 구하는 식을 모두 골라 보세요.', '알맞은 식', [['54 ÷ 6 = 9 (cm)', 1], ['6 × □ = 54에서 □를 구해요', 1], ['54 − 6 = 48 (cm)', 0], ['(54 + 6) × 2 = 120 (cm)', 0]], 0.24,
          ['넓이와 한 변을 알 때 다른 변을 구하는 문제예요.', '모르는 수를 □로 놓고 곱셈식을 세워요.', '54를 세로 6으로 나누어 가로를 구해요.']),
        srt('문제를 넓이, 한 변, 둘레를 구하는 것으로 나누어 보세요.', '문제 가르기', { '넓이를 구해요': ['가로 7 cm, 세로 4 cm → 7 × 4 = 28 cm²', '한 변 6 cm 정사각형 → 6 × 6 = 36 cm²'], '변의 길이를 구해요': ['넓이 56 cm², 가로 8 cm → 56 ÷ 8 = 7 cm', '넓이 81 cm² 정사각형 → 9 cm (9 × 9 = 81)'], '둘레를 구해요': ['가로 7 cm, 세로 4 cm → (7 + 4) × 2 = 22 cm', '한 변 6 cm 정사각형 → 6 × 4 = 24 cm'] }, 0.28,
          ['식의 단위가 cm인지 cm²인지 살피고, 나눗셈이 있는지 보세요.', '곱해서 cm²가 나오면 넓이, 나눗셈으로 cm가 나오면 변의 길이, 더해서 cm가 나오면 둘레예요.', '넓이를 구하는 식은 가로 × 세로, 변을 구하는 식은 넓이 ÷ 변, 둘레는 (가로 + 세로) × 2예요.']),
      ]),
  ],
  wrap: ['"넓이와 가로를 알면 세로는 어떻게 구하나요? 타일이 몇 장 필요한지는 어떻게 구하나요?" 나눗셈으로 구한다는 점을 두 경우 모두 말하게 한다. 출구 2번을 틀린 학생은 넓이와 둘레를 섞는지 살펴 다음 시간에 점판 직사각형으로 다시 구해 보게 한다.',
    [xArea('점판의 직사각형 ㅁ의 넓이를 구해 보세요.', rectPts(9, 2), 0.16),
      { type: 'choice', prompt: '넓이가 63 cm²이고 가로가 9 cm인 직사각형의 세로는 몇 cm인가요?', options: ['7 cm', '54 cm', '72 cm'], answer: 0, difficulty: 0.22, explain: '63 ÷ 9 = 7이라서 세로는 7 cm예요. 63 − 9 = 54처럼 빼면 넓이가 맞지 않아요.' },
      { type: 'choice', prompt: '가로 10 m, 세로 6 m인 방바닥에 한 장이 1 m²인 타일을 깔려면 몇 장이 필요한가요?', options: ['60장', '32장', '16장'], answer: 0, difficulty: 0.22, explain: '방바닥의 넓이가 10 × 6 = 60 m²이고 타일 한 장이 1 m²이니 60장이에요. 32는 둘레, 16은 10 + 6이에요.' }]],
  ws: {
    title: '넓이로 변의 길이 구하기',
    items: [
      { type: 'table', prompt: '넓이와 한 변을 보고 다른 변의 길이를 구하세요.', columns: ['넓이', '한 변', '다른 변', '식'], cells: [['48 cm²', '가로 8 cm', '', '48 ÷ 8'], ['72 cm²', '가로 9 cm', '', ''], ['45 cm²', '세로 5 cm', '', '']], answer: '6 cm, 8 cm, 9 cm' },
      { type: 'blank', prompt: '가로 8 m, 세로 5 m인 방바닥에 한 장이 2 m²인 타일을 깔아요. 필요한 타일 수를 구하세요.', text: '방바닥의 넓이 8 × 5 = ___ m², 타일 수 ___ ÷ 2 = ___장', answer: '40, 40, 20' },
      { type: 'choice', prompt: '넓이가 56 cm²이고 가로가 8 cm인 직사각형의 세로를 구하는 식에 ○ 하세요.', options: ['56 ÷ 8', '56 − 8', '56 × 8'], answer: '56 ÷ 8' },
      { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '넓이가 81 cm²인 정사각형의 한 변은 ___ cm예요. (___ × ___ = 81)', answer: '9, 9, 9' },
      { type: 'short', prompt: '지호는 넓이가 48 cm²이고 가로가 8 cm인 직사각형의 세로를 48 − 8 = 40 cm라고 했어요. 틀린 까닭을 써 보세요.', answer: '넓이는 가로 × 세로이므로 빼는 것이 아니라 나누어 구해야 한다. 48 ÷ 8 = 6 cm이다.' },
    ],
    easy: { note: '가로 × 세로 = 넓이예요. 모르는 변은 넓이를 아는 변으로 나누어요. 예: 6 × □ = 24 → 24 ÷ 6 = 4', items: [
      { type: 'table', prompt: '모르는 변의 길이를 구하세요.', columns: ['넓이', '한 변', '다른 변'], cells: [['24 cm²', '가로 6 cm', ''], ['35 cm²', '세로 5 cm', '']], answer: '4 cm, 7 cm' },
      { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '3 × □ = 12이면 □ = 12 ÷ 3 = ___', answer: '4' },
      { type: 'choice', prompt: '모르는 변을 구할 때 쓰는 계산은?', options: ['나눗셈', '뺄셈'], answer: '나눗셈' },
      { type: 'draw', prompt: '넓이가 12 cm²인 직사각형을 모눈종이에 서로 다른 모양으로 두 개 그려 보세요.' },
    ] },
  },
  diff: {
    easy: '각 문제에서 곱셈식 8 × □ = 48 모양을 먼저 세우도록 힌트를 받아요.',
    base: '스스로 나눗셈을 세워 변의 길이와 타일 수를 구해요.',
    challenge: '밭의 넓이(m²)처럼 단위가 바뀐 문제와 세 가지 문제 유형 가르기도 풀어요.',
  },
  notes: '자주 보이는 어려움: ① 넓이에서 한 변을 빼서 구한다(48 − 8 = 40) → 가로 8, 세로 40인 직사각형의 넓이를 직접 구해 48이 아님을 확인한다. ② 타일 수를 구할 때 곱한다 → 타일이 크면 필요한 장 수가 줄어든다는 어림으로 점검한다. ③ 넓이, 둘레, 한 변 구하는 문제를 섞는다 → 구하려는 것과 단위부터 말하게 한다. 이 차시의 나눗셈은 곱셈식에서 모르는 수를 구하는 방법으로 설명한다.',
}));

// ───────────────────────────── 10차시 (core · concept) ─────────────────────────────
L.push(lesson(10, {
  title: '평행사변형을 직사각형으로 바꾸고 삼각형을 두 개 붙여 넓이 구하기',
  objective: '평행사변형을 직사각형으로 바꾸어 밑변 × 높이로 구하고, 삼각형은 같은 삼각형 두 개를 붙여 평행사변형으로 만들어 밑변 × 높이 ÷ 2로 구할 수 있다.',
  desc: 'a paper-cut parallelogram with one small triangle piece being slid from one side to the other to turn it into a rectangle, with a child watching and a second triangle waiting beside it', text: '잘라 옮기면 직사각형',
  layers: [{ motif: 'tree', x: 90, y: 214 }, { motif: 'flower', x: 380, y: 226 }, { motif: 'star', x: 250, y: 84 }],
  intro: ['"비스듬하게 기울어진 평행사변형 색종이를 한 번만 잘라 직사각형으로 바꿀 수 있을까요?" 한쪽 끝의 삼각형을 잘라 반대쪽으로 옮기는 방법을 직접 해 보게 한다. "그럼 평행사변형의 넓이는 어떻게 구할 수 있을까요?" 하고 묻고 높이를 비스듬한 변의 길이로 쓰는 대답이 나오는지 살핀다.',
    '평행사변형 한쪽을 잘라 옮겨 직사각형을 만들면 넓이는 어떻게 될까요? 가로와 세로는 평행사변형의 어느 부분일까요?'],
  acts: [
    act('a1', '활동 1. 평행사변형의 넓이 구하기', 'shapes', '점판 한 칸은 1 cm²예요. 평행사변형의 밑변과 높이를 찾아 넓이를 구해요. 높이는 밑변에서 수직으로 잰 길이예요.',
      '"밑변이 5칸일 때 높이는 어디에서 어디까지인가요?" 밑변에서 수직으로 올라간 칸 수라고 말하게 한다. 비스듬한 변의 길이를 높이로 쓰는 학생에게는 직각이 보이는 선을 따라 칸을 다시 세어 보게 한다.',
      GEOL, [
        gArea('점판의 평행사변형 ㄱ의 넓이를 구해 보세요.', [[0, 0], [5, 0], [7, 3], [2, 3]], 'par', 0.2, { conclude: '밑변 5칸, 높이 3칸이라서 5 × 3 = 15 cm²예요. 높이는 비스듬한 변이 아니에요.' }),
        gArea('점판의 평행사변형 ㄴ의 넓이를 구해 보세요.', [[0, 0], [6, 0], [8, 2], [2, 2]], 'par', 0.24),
        gArea('점판의 평행사변형 ㄷ의 넓이를 구해 보세요.', [[0, 0], [4, 0], [5, 4], [1, 4]], 'par', 0.26),
        gArea('점판의 평행사변형 ㄹ의 넓이를 구해 보세요.', [[0, 0], [3, 0], [6, 3], [3, 3]], 'par', 0.3, { extra: true }),
      ]),
    act('a2', '활동 2. 삼각형의 넓이 구하기', 'shapes', '같은 삼각형 두 개를 붙이면 평행사변형이 돼요. 삼각형의 넓이는 밑변 × 높이를 2로 나눈 값이에요.',
      '"삼각형 두 개를 붙이면 어떤 도형이 되나요? 삼각형 하나의 넓이는 그 도형의 몇 분의 몇인가요?" 평행사변형의 반이라고 말하게 한다. 밑변 × 높이로 끝내는 학생에게는 평행사변형 한 개와 삼각형 한 개의 넓이를 견주게 한다.',
      GEOL, [
        gArea('점판의 삼각형 ㄱ의 넓이를 구해 보세요.', [[0, 0], [6, 0], [2, 4]], 'tri', 0.22, { predict: { q: '밑변 6칸, 높이 4칸인 삼각형의 넓이는 6 × 4와 비교해 어떨까요?', options: ['같아요', '반이에요'], answer: 1 } }),
        gArea('점판의 삼각형 ㄴ의 넓이를 구해 보세요.', [[0, 0], [5, 0], [1, 4]], 'tri', 0.26),
        gArea('점판의 삼각형 ㄷ의 넓이를 구해 보세요.', [[0, 0], [7, 0], [3, 2]], 'tri', 0.28),
        gArea('점판의 삼각형 ㄹ의 넓이를 구해 보세요.', [[0, 0], [8, 0], [5, 3]], 'tri', 0.32, { extra: true }),
      ]),
    act('a3', '활동 3. 높이의 뜻과 넓이 식 이어 보기', 'mindmap', '평행사변형은 밑변 × 높이, 삼각형은 밑변 × 높이 ÷ 2예요. 비스듬한 변이 아니라 높이를 곱한다는 점을 확인해요.',
      '"비스듬한 변의 길이 6 cm를 곱하면 넓이가 얼마가 되나요?" 8 × 6 = 48 cm²가 실제보다 큼을 밑변 8 cm, 높이 5 cm인 직사각형과 견주어 보게 한다. 삼각형의 넓이를 밑변 × 높이로만 쓰는 학생에게는 2로 나누지 않으면 평행사변형의 넓이가 됨을 짚는다.',
      ML('match', '넓이 식'), [
        match('평행사변형과 삼각형의 넓이를 구하는 식을 이어 보세요. 높이를 조심해요.', [['평행사변형: 밑변 8 cm, 높이 5 cm, 비스듬한 변 6 cm', parF(8, 5)], ['삼각형: 밑변 8 cm, 높이 5 cm', triF(8, 5)], ['평행사변형: 밑변 6 cm, 높이 7 cm, 비스듬한 변 9 cm', parF(6, 7)]], ['8 × 6 = 48 cm²'], 0.26,
          ['평행사변형은 밑변 × 높이, 삼각형은 밑변 × 높이 ÷ 2예요.', '높이는 밑변에서 수직으로 잰 길이이니 비스듬한 변의 길이는 쓰지 않아요.', '평행사변형은 8 × 5, 6 × 7, 삼각형은 8 × 5 ÷ 2를 계산해요.']),
        pick('밑변 10 cm, 높이 6 cm인 삼각형의 넓이를 구하는 식을 모두 골라 보세요.', '알맞은 식', [['10 × 6 ÷ 2 = 30 cm²', 1], ['(10 × 6) ÷ 2 = 30 cm²', 1], ['10 × 6 = 60 cm²', 0], ['10 + 6 = 16 cm²', 0]], 0.28,
          ['삼각형은 같은 삼각형 두 개로 평행사변형을 만들 수 있어요.', '밑변 × 높이는 삼각형 두 개의 넓이예요.', '삼각형 하나의 넓이는 밑변 × 높이를 2로 나눈 값이에요.'],
          { conclude: '삼각형의 넓이는 밑변 × 높이 ÷ 2예요.' }),
        fill('평행사변형을 직사각형으로 바꾸어 넓이 구하는 방법을 빈칸에 놓아 보세요.', [['평행사변형의 한쪽 삼각형 부분을 잘라 옮기면 ___이 돼요', '직사각형'], ['직사각형의 가로는 평행사변형의 ___과 같아요', '밑변'], ['직사각형의 세로는 평행사변형의 ___와 같아요', '높이']], ['비스듬한 변'], 0.24,
          ['잘라서 옮기면 넓이는 그대로이고 모양만 바뀌어요.', '직사각형의 가로와 세로가 평행사변형의 어느 부분인지 찾아요.', '밑변은 가로가 되고 높이는 세로가 돼요. 비스듬한 변은 쓰지 않아요.']),
      ]),
  ],
  wrap: ['"삼각형의 넓이를 구할 때 왜 2로 나누나요?" 같은 삼각형 두 개를 붙이면 평행사변형이 되고 삼각형은 그 반이기 때문이라고 짝에게 말하게 한다. 출구 3번을 틀린 학생은 높이를 비스듬한 변으로 쓰는지 살펴 다음 시간에 점판의 직각 표시로 다시 높이를 찾아보게 한다.',
    [xArea('점판의 평행사변형 ㅁ의 넓이를 구해 보세요.', [[0, 0], [6, 0], [8, 3], [2, 3]], 0.26),
      { type: 'choice', prompt: '밑변이 12 cm, 높이가 5 cm인 삼각형의 넓이는 얼마인가요?', options: ['30 cm²', '60 cm²', '17 cm²'], answer: 0, difficulty: 0.24, explain: '12 × 5 ÷ 2 = 30 cm²예요. 60은 2로 나누지 않은 값이고 17은 12 + 5예요.' },
      { type: 'choice', prompt: '평행사변형의 높이를 알맞게 설명한 것은 무엇인가요?', options: ['밑변에서 수직으로 잰 길이', '비스듬한 변의 길이', '가장 긴 변의 길이'], answer: 0, difficulty: 0.2, explain: '높이는 밑변에서 반대쪽 변까지 수직으로 잰 길이예요. 비스듬한 변을 쓰면 넓이를 크게 구해요.' }]],
  ws: {
    title: '평행사변형과 삼각형의 넓이',
    items: [
      { type: 'figure', prompt: '점판 한 칸은 1 cm²예요. 넓이를 구하세요.', tool: 'shapes', options: { mode: 'geoboard', size: 9 }, figures: [{ state: { pts: [[0, 0], [5, 0], [7, 3], [2, 3]] }, caption: '넓이 ___ cm²' }, { state: { pts: [[0, 0], [6, 0], [2, 4]] }, caption: '넓이 ___ cm²' }], answer: '15 cm², 12 cm²' },
      { type: 'table', prompt: '넓이를 구해 표를 완성하세요.', columns: ['도형', '밑변', '높이', '넓이'], cells: [['평행사변형', '8 cm', '5 cm', ''], ['삼각형', '8 cm', '5 cm', ''], ['평행사변형', '6 cm', '7 cm', '']], answer: '40 cm², 20 cm², 42 cm²' },
      { type: 'choice', prompt: '평행사변형의 높이를 나타내는 것에 ○ 하세요.', options: ['밑변에서 수직으로 잰 길이', '비스듬한 변의 길이'], answer: '밑변에서 수직으로 잰 길이' },
      { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '밑변 10 cm, 높이 6 cm인 삼각형의 넓이는 10 × 6 ÷ ___ = ___ cm²', answer: '2, 30' },
      { type: 'short', prompt: '삼각형의 넓이를 구할 때 왜 2로 나누는지 같은 삼각형 두 개를 붙인 그림을 떠올려 써 보세요.', answer: '같은 삼각형 두 개를 붙이면 밑변과 높이가 같은 평행사변형이 되므로 삼각형은 평행사변형의 반이다.' },
    ],
    easy: { note: '평행사변형의 넓이 = 밑변 × 높이, 삼각형의 넓이 = 밑변 × 높이 ÷ 2예요. 높이는 밑변에서 수직으로 잰 길이예요.', items: [
      { type: 'figure', prompt: '점판 한 칸은 1 cm²예요. 넓이를 구하세요.', tool: 'shapes', options: { mode: 'geoboard', size: 6 }, figures: [{ state: { pts: [[0, 0], [4, 0], [5, 2], [1, 2]] }, caption: '넓이 ___ cm²' }], answer: '8 cm²' },
      { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '밑변 6 cm, 높이 4 cm인 평행사변형의 넓이는 6 × 4 = ___ cm²', answer: '24' },
      { type: 'choice', prompt: '삼각형은 같은 삼각형 몇 개를 붙이면 평행사변형이 되나요?', options: ['2개', '3개'], answer: '2개' },
      { type: 'draw', prompt: '평행사변형을 그리고 밑변과 높이를 표시해 보세요.' },
    ] },
  },
  diff: {
    easy: '점판에 직각 표시가 보여 높이를 찾기 쉽고, 문항마다 힌트를 받아요.',
    base: '표시 없이 밑변과 높이를 스스로 찾아 넓이를 구해요.',
    challenge: '더 큰 삼각형(ㄹ)과 밑변이 길고 높이가 낮은 삼각형도 풀고, 식을 말로 설명해요.',
  },
  notes: '자주 보이는 어려움: ① 높이를 비스듬한 변의 길이로 잡는다 → 밑변에서 수직으로 잰 길이라고 직각 표시를 짚는다. ② 삼각형의 넓이를 밑변 × 높이로 구한다 → 같은 삼각형 두 개를 붙인 평행사변형의 반이라고 설명한다. ③ 평행사변형의 넓이를 이웃한 두 변의 곱으로 구한다 → 직사각형으로 바꾸는 그림에서 가로와 세로가 어느 길이인지 짚는다. 점판에서 비스듬한 변이 있어도 높이는 점의 칸 수로 쉽게 읽힌다는 점을 활용한다.',
}));

// ───────────────────────────── 11차시 (wrap · representation) ─────────────────────────────
L.push(lesson(11, {
  title: '사다리꼴과 마름모의 넓이 추론하고 둘레와 넓이 구하는 식 정리하기',
  objective: '사다리꼴은 (윗변 + 아랫변) × 높이 ÷ 2로, 마름모는 두 대각선의 곱 ÷ 2로 넓이를 구하는 방법을 설명하고, 여러 도형의 둘레와 넓이 식을 구별할 수 있다.',
  desc: 'a paper-cut trapezoid and rhombus laid out beside two copies of themselves rotated and joined into a parallelogram and a rectangle on a classroom table', text: '붙이면 보이는 식',
  layers: [{ motif: 'house', x: 110, y: 214 }, { motif: 'tree', x: 370, y: 216, color: 'mint' }, { motif: 'star', x: 250, y: 84 }],
  intro: ['"사다리꼴을 똑같이 두 개 만들어 한 개를 거꾸로 돌려 붙이면 어떤 도형이 될까요?" 평행사변형이 되고 그 밑변이 윗변 + 아랫변이라는 점을 말하게 한다. "그럼 사다리꼴 하나의 넓이는 어떻게 구하나요?" 하고 묻고 2로 나누는 것을 빼먹는 대답이 나오는지 살핀다. 오늘은 마름모까지 알아본 뒤 이 단원의 식을 정리한다고 말한다.',
    '똑같은 사다리꼴 두 개를 붙이면 어떤 도형이 될까요? 그 도형의 밑변은 무엇과 무엇을 더한 길이일까요?'],
  acts: [
    act('a1', '활동 1. 사다리꼴의 넓이 구하기', 'shapes', '점판 한 칸은 1 cm²예요. 사다리꼴의 윗변, 아랫변, 높이를 찾아 넓이를 구해요.',
      '"윗변과 아랫변을 더한 길이는 얼마인가요? 높이는 얼마인가요?" 같은 사다리꼴 두 개를 붙인 평행사변형의 밑변이 윗변 + 아랫변이라고 말하게 한다. 2로 나누지 않고 끝내는 학생에게는 평행사변형 하나와 사다리꼴 하나의 크기를 견주게 한다.',
      GEOL, [
        gArea('점판의 사다리꼴 ㄱ의 넓이를 구해 보세요.', [[0, 0], [7, 0], [5, 3], [2, 3]], 'trap', 0.24, { conclude: '(3 + 7) × 3 ÷ 2 = 15 cm²예요. 사다리꼴 두 개를 붙이면 밑변이 3 + 7인 평행사변형이에요.' }),
        gArea('점판의 사다리꼴 ㄴ의 넓이를 구해 보세요.', [[0, 0], [8, 0], [6, 4], [1, 4]], 'trap', 0.28),
        gArea('점판의 사다리꼴 ㄷ의 넓이를 구해 보세요.', [[0, 0], [6, 0], [5, 2], [2, 2]], 'trap', 0.28),
        gArea('점판의 사다리꼴 ㄹ의 넓이를 구해 보세요.', [[0, 0], [8, 0], [6, 3], [2, 3]], 'trap', 0.32, { extra: true }),
      ]),
    act('a2', '활동 2. 마름모의 넓이 구하기', 'shapes', '마름모를 두 대각선으로 나누면 같은 삼각형 네 개가 생겨요. 두 대각선의 길이를 찾아 넓이를 구해요.',
      '"마름모를 둘러싼 직사각형의 가로와 세로는 두 대각선의 길이와 같아요. 마름모는 그 직사각형의 얼마일까요?" 반이라고 말하게 한다. 대각선을 곱해 2로 나누지 않는 학생에게는 둘러싼 직사각형과 마름모의 크기를 겹쳐 견주게 한다.',
      GEOL, [
        gArea('점판의 마름모 ㄱ의 넓이를 구해 보세요.', [[3, 0], [6, 2], [3, 4], [0, 2]], 'rho', 0.26),
        gArea('점판의 마름모 ㄴ의 넓이를 구해 보세요.', [[4, 0], [8, 3], [4, 6], [0, 3]], 'rho', 0.3),
        gArea('점판의 마름모 ㄷ의 넓이를 구해 보세요.', [[5, 0], [9, 2], [5, 4], [1, 2]], 'rho', 0.3),
        gArea('점판의 마름모 ㄹ의 넓이를 구해 보세요.', [[3, 0], [6, 3], [3, 6], [0, 3]], 'rho', 0.34, { extra: true }),
      ]),
    act('a3', '활동 3. 도형과 넓이 식 정리하기', 'mindmap', '직사각형, 평행사변형, 삼각형, 사다리꼴, 마름모의 넓이 식과 둘레 식을 정리해요.',
      '"다섯 도형의 넓이 식에서 같은 점과 다른 점은 무엇인가요?" 밑변 × 높이를 바탕으로 2로 나누는 도형이 어떤 도형인지 말하게 한다. 둘레 식과 넓이 식을 섞는 학생에게는 단위가 cm인지 cm²인지 먼저 확인하게 한다.',
      ML('match', '넓이 식 정리'), [
        match('도형과 넓이를 구하는 식을 이어 보세요.', [['직사각형', '가로 × 세로'], ['평행사변형', '밑변 × 높이'], ['삼각형', '밑변 × 높이 ÷ 2'], ['사다리꼴', '(윗변 + 아랫변) × 높이 ÷ 2'], ['마름모', '한 대각선 × 다른 대각선 ÷ 2']], [], 0.26,
          ['직사각형에서 시작해 평행사변형, 삼각형 순서로 어떻게 달라지는지 떠올려요.', '같은 도형 두 개를 붙여 평행사변형을 만드는 도형은 2로 나누어요.', '삼각형, 사다리꼴, 마름모는 두 개를 붙이면 평행사변형이나 직사각형이 되어 2로 나누어요.']),
        srt('식을 둘레를 구하는 식과 넓이를 구하는 식으로 나누어 보세요.', '둘레와 넓이', { '둘레를 구하는 식': ['(가로 + 세로) × 2', '한 변 × 4 (정사각형)', '한 변 × 변의 수 (정다각형)'], '넓이를 구하는 식': ['가로 × 세로', '밑변 × 높이 ÷ 2', '(윗변 + 아랫변) × 높이 ÷ 2'] }, 0.22,
          ['변의 길이를 더하거나 변의 수를 곱하는 식은 가장자리를 따라간 길이예요.', '높이나 대각선이 나오면 면의 크기를 구하는 식이에요.', '가로·세로를 더해 2배 하거나 한 변에 변의 수를 곱하면 둘레이고, 높이를 곱하면 넓이예요.']),
        match('도형과 넓이를 구하는 식을 이어 보세요. 값도 확인해요.', [['윗변 4 cm, 아랫변 8 cm, 높이 3 cm인 사다리꼴', trapF(4, 8, 3)], ['두 대각선이 10 cm, 6 cm인 마름모', rhoF(10, 6)], ['밑변 9 cm, 높이 4 cm인 삼각형', triF(9, 4)]], ['(4 + 8) × 3 = 36 cm²'], 0.3,
          ['도형마다 알맞은 식을 먼저 떠올리고 수를 넣어 봐요.', '사다리꼴은 (윗변 + 아랫변) × 높이 ÷ 2, 마름모는 두 대각선의 곱 ÷ 2예요.', '2로 나누는 것을 빠뜨린 카드는 알맞지 않아요.'], { extra: true }),
      ]),
  ],
  wrap: ['"이 단원에서 배운 도형의 넓이 식을 하나씩 말해 볼까요? 둘레 식과 어떻게 다른가요?" 직사각형, 평행사변형, 삼각형, 사다리꼴, 마름모를 짝에게 차례로 말하게 한다. 출구 3번을 틀린 학생은 땅을 덮는 일을 둘레로 생각하는지 살펴 다음 수업 전에 울타리와 장판 이야기로 다시 구별하게 한다.',
    [xArea('점판의 사다리꼴 ㅁ의 넓이를 구해 보세요.', [[0, 0], [6, 0], [5, 3], [1, 3]], 0.28),
      { type: 'choice', prompt: '두 대각선이 8 cm, 5 cm인 마름모의 넓이는 얼마인가요?', options: ['20 cm²', '40 cm²', '13 cm²'], answer: 0, difficulty: 0.26, explain: '마름모의 넓이는 두 대각선의 곱을 2로 나누어 8 × 5 ÷ 2 = 20 cm²예요. 40은 2로 나누지 않았고 13은 더한 값이에요.' },
      { type: 'choice', prompt: '교실 바닥에 장판을 까는 데 필요한 양을 구할 때 구하는 것은 무엇인가요?', options: ['넓이', '둘레', '높이'], answer: 0, difficulty: 0.14, explain: '바닥 전체를 덮는 양은 안쪽 면의 크기인 넓이예요. 둘레는 가장자리를 도는 길이예요.' }]],
  ws: {
    title: '다각형의 둘레와 넓이 정리',
    items: [
      { type: 'figure', prompt: '점판 한 칸은 1 cm²예요. 넓이를 구하세요.', tool: 'shapes', options: { mode: 'geoboard', size: 9 }, figures: [{ state: { pts: [[0, 0], [7, 0], [5, 3], [2, 3]] }, caption: '넓이 ___ cm²' }, { state: { pts: [[3, 0], [6, 2], [3, 4], [0, 2]] }, caption: '넓이 ___ cm²' }], answer: '15 cm², 12 cm²' },
      { type: 'table', prompt: '도형의 넓이를 구하는 식을 완성하세요.', columns: ['도형', '넓이를 구하는 식'], cells: [['직사각형', '가로 × ___'], ['삼각형', '밑변 × 높이 ÷ ___'], ['사다리꼴', '(___ + 아랫변) × 높이 ÷ 2'], ['마름모', '한 대각선 × ___ ÷ 2']], answer: '세로, 2, 윗변, 다른 대각선' },
      { type: 'blank', prompt: '윗변 5 cm, 아랫변 9 cm, 높이 4 cm인 사다리꼴의 넓이를 구하세요.', text: '(5 + 9) × 4 ÷ 2 = ___ cm²', answer: '28' },
      { type: 'choice', prompt: '울타리를 치는 길이를 구할 때 구하는 것에 ○ 하세요.', options: ['둘레', '넓이'], answer: '둘레' },
      { type: 'short', prompt: '둘레와 넓이를 구하는 일의 차이를 예를 들어 써 보세요.', answer: '둘레는 울타리처럼 가장자리를 도는 길이이고, 넓이는 장판처럼 안쪽 면의 크기이다. 단위도 둘레는 cm, 넓이는 cm²이다.' },
    ],
    easy: { note: '넓이 식을 하나씩 외우기보다 도형을 자르고 붙이는 그림을 떠올려요. 삼각형, 사다리꼴, 마름모는 2로 나누어요.', items: [
      { type: 'figure', prompt: '점판 한 칸은 1 cm²예요. 넓이를 구하세요.', tool: 'shapes', options: { mode: 'geoboard', size: 6 }, figures: [{ state: { pts: [[0, 0], [5, 0], [4, 2], [1, 2]] }, caption: '넓이 ___ cm²' }], answer: '8 cm²' },
      { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '두 대각선이 6 cm, 4 cm인 마름모: 6 × 4 ÷ 2 = ___ cm²', answer: '12' },
      { type: 'choice', prompt: '둘레의 단위는 어느 것인가요?', options: ['cm', 'cm²'], answer: 'cm' },
      { type: 'draw', prompt: '이 단원에서 가장 헷갈렸던 도형 하나를 그리고 넓이 식을 써 보세요.' },
    ] },
  },
  diff: {
    easy: '점판에 직각 표시가 보여 높이와 대각선을 찾기 쉽고, 식 카드가 함께 보여요.',
    base: '표시 없이 높이와 대각선을 스스로 찾아 넓이를 구해요.',
    challenge: '더 큰 사다리꼴(ㄹ)·마름모(ㄹ)를 풀고 둘레와 넓이의 식을 모두 구별해 설명해요.',
  },
  notes: '자주 보이는 어려움: ① 사다리꼴의 넓이를 (윗변 + 아랫변) × 높이로 구해 2로 나누지 않는다 → 같은 사다리꼴 두 개를 붙인 평행사변형의 반임을 보인다. ② 마름모의 넓이를 한 변 × 높이처럼 구해야 한다고 생각하거나 대각선을 곱한 채 둔다 → 마름모를 둘러싼 직사각형의 반임을 그림으로 보인다. ③ 둘레와 넓이를 섞는다 → 울타리와 장판의 예와 단위(cm, cm²)로 구별한다. 이 차시에서 단원 전체의 식을 정리했으므로 출구 결과를 보고 어려워한 도형을 다음 수업 앞부분에서 한 번 더 다룬다.',
}));
// @@END@@
PaperLessons.registerUnit({
  id: UID, schema: 'edu-unit.v1', catalogUnit: CU, grade: 5, subject: '수학', unitTitle: UT,
  flow: '이 단원은 둘레와 넓이를 구분하는 데서 출발합니다. 1~3차시에서는 둘레가 가장자리를 한 바퀴 돌아 잰 길이임을 점판으로 알고, 정다각형과 꺾인 도형의 둘레를 구하며 둘레가 같아도 넓이가 다를 수 있음을 확인합니다. 4~6차시는 1 cm²가 한 변이 1 cm인 정사각형의 넓이임을 알고 1 m² = 10000 cm², 1 km² = 1000000 m²의 관계와 알맞은 단위 고르기를 익히며 모눈 칸과 반 칸을 세어 넓이를 나타냅니다. 7~9차시는 직사각형의 넓이 = 가로 × 세로를 모눈으로 확인하고 L자 모양의 넓이를 나누고 빼서 구하며 넓이에서 한 변을 거꾸로 구합니다. 10~11차시는 평행사변형을 직사각형으로, 삼각형을 평행사변형의 반으로 바꾸어 넓이를 추론하고 사다리꼴과 마름모까지 이어 둘레와 넓이의 식을 정리합니다.',
  refs: {},
  lessons: L,
});
})();
