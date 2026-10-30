/* 2학년 2학기 3. 길이 재기 — 단원 파일(차시 11개, 기존 차시 없음).
 * 흐름: 100 cm = 1 m(1) → 줄자 눈금에서 몇 m 몇 cm 읽기(2) → 줄자로 재는 차례·알맞은 단위(3) → 몇 m 몇 cm를 cm로(4) → 두 가지로 길이 쓰기(5)
 *      → 길이 견주고 차례로 놓기(6) → 몸으로 1 m 짐작하기(7) → 약 몇 m로 어림하기(8) → 어림으로 문제 풀기(9) → 길이 더하기(10) → 길이 빼기·생활 문제·단원 정리(11).
 * 성취기준은 units-index 의 [2수03-10]~[2수03-13] 네 개. 1학기 '길이 재기'(cm·자로 재기·약 몇 cm)와 겹치지 않게 m 단위와 m·cm 합차, m 어림에 집중한다.
 * 확인 필요: 수직선 교구(numberline)는 눈금 5·10 cm 간격까지만 표시한다 — 10 cm·5 cm 단위로 떨어지는 길이만 그림으로 나타내고, 그 밖의 길이는 카드와 표로 다룬다.
 */
(function () {
const UID = 'g2-math-2-03', CU = 'g2-수학-2학기-3', UT = '3. 길이 재기', STD = ['[2수03-10]', '[2수03-11]', '[2수03-12]', '[2수03-13]'];
const two = (n) => String(n).padStart(2, '0');
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
    grade: 2, subject: '수학', unitTitle: UT,
    title: d.title, objective: d.objective, standards: STD, minutes: 40, formats: ['chromebook', 'projector', 'print'],
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
// 수직선 뛰기: from에서 size씩 count번(또는 end까지)
const jmp = (prompt, size, to, d, x, from) => Object.assign({ prompt,
  target: Object.assign({ from: from || 0 }, size != null ? { size } : {}, to.count != null ? { count: to.count } : { end: to.end }), difficulty: d }, from ? { toolOptions: { fixedFrom: from } } : {}, x || {});
// 수직선 읽기: 보기 고르기 / 숫자로 쓰기
const rd = (prompt, mark, choices, pickIdx, d, x, o) => Object.assign({ prompt, toolOptions: Object.assign({ mode: 'read', marks: [mark], choices, question: '점이 가리키는 길이를 고르세요.' }, o || {}), target: { pick: pickIdx }, difficulty: d }, x || {});
const rdn = (prompt, mark, d, x, o) => Object.assign({ prompt, toolOptions: Object.assign({ mode: 'read', marks: [mark], input: 'number', question: '점이 가리키는 길이는 몇 cm인가요?' }, o || {}), target: { value: mark }, difficulty: d }, x || {});
// 수직선에 점 놓기
const plc = (prompt, pts, d, x, o) => Object.assign({ prompt, toolOptions: Object.assign({ mode: 'place' }, pts.length > 1 ? { count: pts.length } : {}, o || {}), target: { points: pts }, difficulty: d }, x || {});
// 알맞은 단위 고르기: things = [[이름, 수, 단위번호], …]
const unit = (prompt, things, d, x) => Object.assign({ prompt, toolOptions: { things: things.map((t) => ({ name: t[0], amount: t[1] })), units: ['cm', 'm'] }, target: { units: things.map((t) => t[2]) }, difficulty: d }, x || {});
// 카드 차례 놓기: texts는 맞는 차례대로
const ord = (prompt, texts, d, hints, x) => {
  const cards = texts.map((t, i) => ({ id: `o${i + 1}`, text: t }));
  const mixed = cards.filter((_, i) => i % 2 === 1).concat(cards.filter((_, i) => i % 2 === 0));
  return Object.assign({ prompt, toolOptions: { slots: texts.length, cards: mixed }, target: { order: cards.map((c) => c.id) }, difficulty: d, hints }, x || {});
};
const match = (prompt, pairs, extra, d, hints, x) => {
  const slots = pairs.map((p, i) => ({ id: `s${i + 1}`, label: p[0] }));
  const cards = pairs.map((p, i) => ({ id: `c${i + 1}`, text: p[1] })).concat((extra || []).map((t, i) => ({ id: `x${i + 1}`, text: t })));
  const m = {}; pairs.forEach((p, i) => { m[`s${i + 1}`] = `c${i + 1}`; });
  return Object.assign({ prompt, toolOptions: { mode: 'match', slots, cards }, target: { match: m }, difficulty: d, hints }, x || {});
};
const pick = (prompt, basket, cards, d, hints, x) => Object.assign({ prompt,
  toolOptions: { mode: 'pick', basket, cards: cards.map((c, i) => ({ id: `k${i + 1}`, text: c[0] })) },
  target: { pick: cards.map((c, i) => (c[1] ? `k${i + 1}` : null)).filter(Boolean) }, difficulty: d, hints }, x || {});
const srt = (prompt, topic, groups, d, hints, x) => {
  const names = Object.keys(groups); const cards = []; const tg = {};
  names.forEach((nm, gi) => { tg[`g${gi + 1}`] = []; groups[nm].forEach((t, i) => { const id = `g${gi + 1}c${i + 1}`; tg[`g${gi + 1}`].push(id); cards.push({ id, text: t }); }); });
  const mixed = cards.filter((_, i) => i % 2 === 0).concat(cards.filter((_, i) => i % 2 === 1));
  return Object.assign({ prompt, toolOptions: { mode: 'sort', topic, slots: names.map((nm, gi) => ({ id: `g${gi + 1}`, label: nm })), cards: mixed }, target: { sort: tg }, difficulty: d, hints }, x || {});
};
const ML = (mode, topic) => ({ easy: { mode, topic, live: true }, base: { mode, topic }, challenge: { mode, topic } });
const UL = { easy: { mode: 'unit' }, base: { mode: 'unit' }, challenge: { mode: 'unit' } };
const SL = { easy: { live: true }, base: {}, challenge: {} };
// 수직선 교구 단계 묶음
const RDL = (max, step, sub) => ({
  easy: { mode: 'read', min: 0, max, step, sub, labels: 'major' },
  base: { mode: 'read', min: 0, max, step, sub, labels: 'major' },
  challenge: { mode: 'read', min: 0, max, step, sub, labels: 'ends' },
});
const PLL = (min, max, step, sub) => ({
  easy: { mode: 'place', min, max, step, sub, labels: 'major', showValue: true },
  base: { mode: 'place', min, max, step, sub, labels: 'major' },
  challenge: { mode: 'place', min, max, step, sub, labels: 'ends' },
});
const JPL = (min, max, step, sub, hopStep, easyHop, baseHop, from) => ({
  easy: { mode: 'jump', min, max, step, sub, labels: 'major', hopStep, hopSize: easyHop, showValue: true, fixedFrom: from },
  base: { mode: 'jump', min, max, step, sub, labels: 'major', hopStep, hopSize: baseHop, fixedFrom: from },
  challenge: { mode: 'jump', min, max, step, sub, labels: 'ends', hopStep, hopSize: baseHop, fixedFrom: from },
});
const wsTable = (prompt, columns, cells, answer) => ({ type: 'table', prompt, columns, cells, answer });
const L = [];

// ───────────────────────────── 1차시 (intro) ─────────────────────────────
L.push(lesson(1, {
  title: '10 cm씩 뛰어 100 cm 만들고 1 m 알아보기',
  objective: '100 cm를 1 m라고 쓰고 읽으며, 여러 크기로 뛰어 100 cm를 만들고, 물건이 1 m보다 긴지 짧은지 말할 수 있다.',
  desc: 'a long paper measuring tape stretched along a classroom floor beside a door while children hold both ends', text: '100 cm는 1 m!',
  layers: [{ motif: 'house', x: 100, y: 214, color: 'sky' }, { motif: 'tree', x: 390, y: 216 }, { motif: 'flower', x: 250, y: 226 }],
  intro: ['"1학기에 쓴 자는 한 뼘 반쯤이었어요. 그 자로 교실 긴 쪽을 재려면 몇 번이나 재야 할까요?" 짧은 자로 여러 번 재면 번거롭다는 것을 말하게 한 뒤, 100 cm를 1 m라는 더 큰 단위로 쓴다고 알려 준다. "10 cm씩 몇 번 가면 100 cm일까요?"라고 물어 활동 1의 수직선 뛰기로 이어 준다.',
    '교실에서 1 m쯤 될 것 같은 길이를 두 팔로 벌려 보고, 그만큼 되는 물건을 찾아 짝에게 말해 봐요.'],
  acts: [
    act('a1', '활동 1. 여러 크기로 뛰어 100 cm 만들기', 'numberline', '한 번에 뛰는 크기를 바꾸어 100 cm에 닿아 보아요. 100 cm를 1 m라고 해요.',
      '"10 cm씩 몇 번 가면 100 cm일까요?" 눈금 한 칸이 얼마인지 먼저 읽게 한다. 20 cm씩 5번을 5 + 20 = 25 cm로 읽는 학생에게는 한 번 뛴 크기와 뛴 횟수를 따로 짚으며 20이 5번이라고 말하게 한다.',
      JPL(0, 100, 10, 2, 5, 10, 5, 0), [
        jmp('10 cm씩 10번 뛰어 보세요. 모두 몇 cm가 될까요?', 10, { count: 10 }, 0.1, { predict: { q: '10 cm씩 10번 뛰면 어디에 닿을까요?', options: ['10 cm', '100 cm', '1000 cm'], answer: 1 }, conclude: '10 cm씩 10번 뛰면 100 cm예요. 100 cm를 1 m라고 해요.' }),
        jmp('20 cm씩 5번 뛰어 보세요. 몇 cm에 닿을까요?', 20, { count: 5 }, 0.12),
        jmp('50 cm씩 2번 뛰어 보세요. 몇 cm에 닿을까요?', 50, { count: 2 }, 0.1, { conclude: '50 cm씩 2번도 100 cm, 곧 1 m예요.' }),
        jmp('더 해 보기: 25 cm씩 4번 뛰어 보세요. 몇 cm에 닿을까요?', 25, { count: 4 }, 0.2, { extra: true }),
      ]),
    act('a2', '활동 2. cm와 m 가운데 알맞은 단위 고르기', 'measure', '물건마다 길이를 나타낼 때 알맞은 단위(cm, m)를 골라요.',
      '"교실 긴 쪽의 길이를 cm로 말하면 수가 어떻게 될까요?" 900 cm처럼 수가 너무 커지면 어색하다는 것을 말하게 한다. 연필 길이를 15 m로 고르는 학생에게는 두 팔을 벌려 1 m를 보이고 연필과 견주어 보게 한다.',
      UL, [
        unit('길이를 나타낼 때 알맞은 단위를 골라 보세요.', [['연필의 길이', 15, 0], ['교실 긴 쪽의 길이', 9, 1]], 0.1),
        unit('길이를 나타낼 때 알맞은 단위를 골라 보세요. 세 가지예요.', [['책상 높이', 70, 0], ['복도의 길이', 30, 1], ['지우개의 길이', 5, 0]], 0.15),
        unit('알맞은 단위를 골라 보세요. 몸과 거리예요.', [['내 키', 130, 0], ['교문에서 교실까지의 거리', 60, 1], ['리본 한 개의 길이', 20, 0]], 0.2, { conclude: '작은 길이는 cm, 큰 길이는 m로 나타내면 수가 알맞아요.' }),
      ]),
    act('a3', '활동 3. 1 m와 견주어 보기', 'mindmap', '1 m와 견주어 물건을 나누고, 같은 길이를 이어요.',
      '"이 물건은 1 m보다 길까요, 짧을까요? 두 팔을 벌려 보고 말해 봐요." 몸으로 1 m를 짐작해 보게 한다. 100 cm와 1 m를 다른 길이로 생각하는 학생에게는 같은 길이를 다른 단위로 쓴 것임을 같은 줄자로 보여 준다.',
      ML('sort', '1 m'), [
        srt('물건을 1 m보다 짧은 것과 1 m보다 긴 것으로 나누어 보세요.', '1 m', { '1 m보다 짧아요': ['연필', '지우개', '공책 긴 쪽'], '1 m보다 길어요': ['교실 문 높이', '칠판 긴 쪽', '복도 길이'] }, 0.12,
          ['두 팔을 벌린 길이가 1 m쯤이에요. 물건을 그 길이와 견주어 봐요.', '손바닥에 올릴 수 있는 물건과 몸보다 큰 물건을 먼저 나누어요.', '연필, 지우개, 공책 긴 쪽은 1 m보다 짧고 교실 문 높이, 칠판 긴 쪽, 복도 길이는 1 m보다 길어요.'],
          { conclude: '공책이나 연필처럼 작은 물건은 1 m보다 짧고, 문이나 복도는 1 m보다 길어요.' }),
        pick('길이가 100 cm와 같은 것을 모두 골라 보세요.', '100 cm', [['1 m', 1], ['10 cm', 0], ['100 cm', 1], ['10 m', 0]], 0.15,
          ['100 cm를 다른 단위로 쓰면 어떻게 되는지 떠올려요.', '카드마다 cm와 m가 서로 같은 길이인지 견주어 봐요. 10 cm와 10 m는 수만 닮았어요.', '1 m와 100 cm는 같은 길이예요. 10 cm와 10 m는 100 cm와 같지 않아요.']),
        match('같은 길이를 이어 보세요.', [['1 m', '100 cm'], ['2 m', '200 cm'], ['3 m', '300 cm']], ['30 cm', '2 cm'], 0.2,
          ['1 m가 100 cm라는 것을 바탕으로 m 수만큼 100 cm를 이어 붙여 봐요.', '2 m는 100 cm가 두 개예요. 함정 카드는 수가 작아서 100 cm보다 짧아요.', '1 m는 100 cm, 2 m는 200 cm, 3 m는 300 cm예요.']),
      ]),
  ],
  wrap: ['"1 m는 몇 cm였지요? 오늘 찾은 1 m쯤 되는 물건을 말해 볼까요?" 100 cm = 1 m를 짝에게 말해 보게 한다. 출구 3번을 틀린 학생은 1 m와 10 cm의 크기를 혼동하는지 다음 시간 시작에서 두 팔로 벌려 다시 보게 한다.',
    [{ type: 'choice', prompt: '1 m는 몇 cm인가요?', options: ['10 cm', '100 cm', '1000 cm'], answer: 1, difficulty: 0.1, explain: '10 cm씩 10번 뛰면 100 cm이고, 100 cm가 1 m예요.' },
      { type: 'tool', tool: 'measure', options: { mode: 'unit', things: [{ name: '운동장 긴 쪽의 길이', amount: 80 }, { name: '필통의 길이', amount: 20 }], units: ['cm', 'm'] }, prompt: '길이를 나타낼 때 알맞은 단위를 골라 보세요.', target: { units: [1, 0] }, difficulty: 0.15 },
      { type: 'choice', prompt: '1 m보다 긴 것은 무엇인가요?', options: ['공책 긴 쪽', '칠판 긴 쪽', '지우개'], answer: 1, difficulty: 0.15, explain: '칠판 긴 쪽은 1 m보다 길고, 공책과 지우개는 1 m보다 짧아요.' }]],
  ws: {
    title: '100 cm는 1 m',
    items: [
      wsTable('같은 길이가 되도록 빈칸을 채우세요.', ['m', 'cm'], [['1 m', '100 cm'], ['2 m', ''], ['', '300 cm'], ['4 m', '']], '200 cm, 3 m, 400 cm'),
      { type: 'choice', prompt: '1 m와 길이가 같은 것에 ○ 하세요.', options: ['10 cm', '100 cm', '1000 cm'], answer: '100 cm' },
      { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '10 cm씩 ____번 뛰면 100 cm, 곧 1 m예요.', answer: '10' },
      { type: 'choice', prompt: '교실 긴 쪽의 길이를 나타낼 때 알맞은 단위에 ○ 하세요.', options: ['cm', 'm'], answer: 'm' },
      { type: 'short', prompt: '우리 교실에서 1 m보다 긴 것과 짧은 것을 하나씩 써 보세요.' },
    ],
    easy: { note: '1 m는 100 cm예요. 두 팔을 벌린 길이가 1 m쯤이에요.', items: [
      wsTable('같은 길이가 되도록 빈칸을 채우세요.', ['m', 'cm'], [['1 m', '100 cm'], ['2 m', '']], '200 cm'),
      { type: 'choice', prompt: '1 m와 같은 길이에 ○ 하세요.', options: ['10 cm', '100 cm'], answer: '100 cm' },
      { type: 'choice', prompt: '연필 길이를 나타낼 때 알맞은 단위에 ○ 하세요.', options: ['cm', 'm'], answer: 'cm' },
      { type: 'short', prompt: '1 m보다 긴 물건을 하나 써 보세요.' },
    ] },
  },
  diff: {
    easy: '수직선 위에 지금 닿은 수가 보이고, 처음에 뛰는 크기가 10 cm로 맞춰져 있어요. 카드는 맞으면 바로 이어져요.',
    base: '닿은 수가 보이지 않고 한 번 뛰는 크기가 5 cm에서 시작해 스스로 바꾸어 뛰어요.',
    challenge: '수직선에 0과 100 cm만 적혀 있어요. 더 해 보기(25 cm씩 4번)까지 해요.',
  },
  notes: '자주 보이는 어려움: ① 100 cm와 1 m를 다른 길이로 생각한다 → 같은 길이를 다른 단위로 쓴 것임을 같은 줄자로 보여 준다. ② 20 cm씩 5번을 5 + 20으로 읽는다 → 한 번 뛴 크기와 횟수를 따로 짚는다. ③ 큰 길이에 cm만 쓴다(교실 긴 쪽 900 cm) → 수가 너무 커지면 m로 쓴다고 말해 준다. 1학기 cm 단원에서 가르친 자로 재는 법은 다시 가르치지 않는다.',
}));

// ───────────────────────────── 2차시 (core · representation) ─────────────────────────────
L.push(lesson(2, {
  title: '줄자 눈금을 읽어 몇 cm, 몇 m 몇 cm로 말하기',
  objective: '100 cm마다 큰 눈금이 있는 줄자(수직선)에서 점이 가리키는 길이를 몇 cm와 몇 m 몇 cm로 읽고 나타낼 수 있다.',
  desc: 'a rolled yellow paper tape measure unrolled across a wooden floor with a small marker pin at one point', text: '줄자 눈금 읽기',
  layers: [{ motif: 'tree', x: 90, y: 216, color: 'mint' }, { motif: 'house', x: 390, y: 214, color: 'peach' }, { motif: 'star', x: 250, y: 72, s: 0.6 }],
  intro: ['"긴 줄자에는 0, 100, 200처럼 100 cm마다 큰 숫자가 있어요. 100과 200 사이 점은 몇 cm일까요?" 학생이 큰 눈금 100을 지나온 만큼을 따로 세는지 살핀다. "100 cm를 지나서 30 cm 더 간 곳은 1 m 30 cm"라고 말해 주고, 이 시간에는 줄자의 점을 두 가지 방법으로 읽어 보자고 한다.',
    '줄자나 긴 자를 본 적이 있나요? 큰 숫자가 몇 걸음마다 있었는지 이야기해 봐요.'],
  acts: [
    act('a1', '활동 1. 줄자의 점을 읽어 보기', 'numberline', '큰 눈금 100, 200, 300 사이의 작은 눈금 한 칸이 10 cm예요. 점이 가리키는 길이를 골라요.',
      '"큰 눈금 100과 200 사이는 작은 눈금이 몇 칸이에요? 한 칸은 몇 cm일까요?" 10칸이고 한 칸이 10 cm임을 말하게 한다. 100을 지나서 3칸을 간 점을 103 cm로 읽는 학생에게는 한 칸이 10 cm인 것을 다시 짚는다.',
      RDL(300, 100, 10), [
        rd('줄자의 점이 가리키는 길이는 몇 cm인가요?', 130, ['103 cm', '130 cm', '13 cm'], 1, 0.12, { conclude: '100 cm를 지나 작은 눈금 3칸(30 cm)을 더 갔으니 130 cm예요.' }),
        rd('줄자의 점이 가리키는 길이는 몇 m 몇 cm인가요?', 170, ['1 m 7 cm', '1 m 70 cm', '7 m'], 1, 0.18),
        rd('큰 눈금 200을 지난 점이에요. 가리키는 길이는 몇 m 몇 cm인가요?', 210, ['2 m 1 cm', '2 m 10 cm', '21 m'], 1, 0.22, { reveal: 'after-check' }),
      ]),
    act('a2', '활동 2. 줄자에 길이 표시하기', 'numberline', '말한 길이에 알맞은 줄자 눈금에 점을 놓아요. 한 칸은 5 cm예요.',
      '"1 m 40 cm는 100 cm를 지나서 몇 cm 더 간 곳이에요?" 100을 지난 뒤 40 cm 더 간 곳에 놓게 한다. 1 m 40 cm를 140 cm가 아닌 104 cm 자리에 놓는 학생에게는 40 cm가 작은 눈금 몇 칸인지 세게 한다.',
      PLL(0, 300, 100, 20), [
        plc('줄자에서 1 m 40 cm에 점을 놓아 보세요.', [140], 0.15),
        plc('줄자에서 2 m 20 cm에 점을 놓아 보세요.', [220], 0.2, { reveal: 'after-check' }),
        plc('두 점을 놓아 보세요. 가는 90 cm, 나는 1 m 10 cm예요.', [90, 110], 0.25, { conclude: '90 cm는 1 m가 되기 10 cm 전, 1 m 10 cm는 1 m를 10 cm 지난 곳이에요.' }),
      ]),
    act('a3', '활동 3. 설명과 길이 짝짓기', 'mindmap', '줄자를 읽는 말과 알맞은 길이를 이어요.',
      '"100 cm를 한 번 지나서 20 cm 더 간 곳은 몇 m 몇 cm일까요?" 지나온 100 cm 묶음 수가 m 수가 됨을 말하게 한다. 100 cm를 두 번 지났는데 1 m라고 쓰는 학생에게는 큰 눈금 100과 200 가운데 어디를 지났는지 세게 한다.',
      ML('match', '줄자 읽기'), [
        match('줄자를 읽는 설명과 길이를 이어 보세요.', [['100 cm를 한 번 지나 20 cm 더 간 곳', '1 m 20 cm'], ['100 cm를 두 번 지나 50 cm 더 간 곳', '2 m 50 cm'], ['100 cm에 닿기 10 cm 전', '90 cm']], ['2 m 5 cm', '1 m 2 cm'], 0.2,
          ['100 cm 묶음을 몇 번 지났는지 세고, 그다음 더 간 cm를 읽어요.', '두 번 지났으면 m 앞의 수는 2예요. 마지막 설명은 100에 닿기 전이라 1 m보다 짧아요.', '한 번 지나 20 cm는 1 m 20 cm, 두 번 지나 50 cm는 2 m 50 cm, 100 cm에 닿기 10 cm 전은 90 cm예요.']),
        pick('1 m 30 cm와 같은 길이를 모두 골라 보세요.', '1 m 30 cm', [['130 cm', 1], ['1 m 3 cm', 0], ['100 cm와 30 cm를 이은 길이', 1], ['13 cm', 0], ['1030 cm', 0]], 0.25,
          ['1 m 30 cm가 100 cm보다 얼마나 더 긴지 생각해 봐요.', '1 m는 100 cm이고 거기에 30 cm를 더해요. 3 cm와 30 cm를 혼동하지 않아요.', '130 cm와 100 cm에 30 cm를 이은 길이가 1 m 30 cm예요. 1 m 3 cm는 103 cm예요.']),
        srt('길이를 1 m보다 짧은 것과 긴 것으로 나누어 보세요.', '1 m', { '1 m보다 짧아요': ['85 cm', '99 cm', '60 cm'], '1 m보다 길어요': ['1 m 20 cm', '150 cm', '2 m'] }, 0.18,
          ['모든 길이를 100 cm와 견주어 봐요. m가 들어 있는 길이는 100 cm가 몇 번인지 먼저 보세요.', '99 cm와 100 cm 중 어느 쪽이 더 길까요? 1 m 20 cm는 100 cm보다 20 cm 더 길어요.', '85 cm, 99 cm, 60 cm는 100 cm보다 짧고 1 m 20 cm, 150 cm, 2 m는 100 cm보다 길어요.']),
      ]),
  ],
  wrap: ['"줄자에서 100 cm를 지나서 40 cm 더 간 곳을 두 가지 방법으로 말해 볼까요?" 140 cm와 1 m 40 cm를 함께 말하게 한다. 출구 2번을 틀린 학생은 1 m 5 cm와 1 m 50 cm를 혼동하는지 다음 시간 시작에서 살핀다.',
    [{ type: 'tool', tool: 'numberline', options: { mode: 'read', min: 0, max: 300, step: 100, sub: 10, labels: 'major', marks: [160], choices: ['106 cm', '160 cm', '16 cm'], question: '점이 가리키는 길이를 고르세요.' }, prompt: '줄자의 점이 가리키는 길이를 고르세요.', target: { pick: 1 }, difficulty: 0.15 },
      { type: 'choice', prompt: '줄자에서 100 cm를 지나 50 cm 더 간 길이는 몇 m 몇 cm인가요?', options: ['1 m 5 cm', '1 m 50 cm', '5 m 10 cm'], answer: 1, difficulty: 0.2, explain: '100 cm는 1 m이고 거기에 50 cm를 더 갔으니 1 m 50 cm예요.' },
      { type: 'choice', prompt: '99 cm와 1 m 가운데 더 긴 길이는 무엇인가요?', options: ['99 cm', '1 m'], answer: 1, difficulty: 0.15, explain: '1 m는 100 cm라서 99 cm보다 1 cm 더 길어요.' }]],
  ws: {
    title: '줄자 눈금 읽기',
    items: [
      { type: 'figure', prompt: '줄자의 점이 가리키는 길이를 쓰세요.', tool: 'numberline', wide: true, figures: [
        { options: { mode: 'read', min: 0, max: 200, step: 100, sub: 10, labels: 'major', marks: [130] }, caption: '___ cm' },
        { options: { mode: 'read', min: 0, max: 200, step: 100, sub: 10, labels: 'major', marks: [170] }, caption: '___ m ___ cm' }], answer: '130 cm, 1 m 70 cm' },
      { type: 'choice', prompt: '100 cm를 한 번 지나 20 cm 더 간 길이에 ○ 하세요.', options: ['1 m 2 cm', '1 m 20 cm', '2 m 10 cm'], answer: '1 m 20 cm' },
      { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '100 cm를 지나 40 cm 더 가면 1 m ____ cm예요.', answer: '40' },
      { type: 'choice', prompt: '1 m보다 짧은 길이에 ○ 하세요.', options: ['99 cm', '1 m 5 cm', '150 cm'], answer: '99 cm' },
      { type: 'short', prompt: '줄자에서 100 cm를 두 번 지난 길이를 읽을 때 m 앞의 수가 왜 2인지 써 보세요.' },
    ],
    easy: { note: '큰 눈금 100 사이에 작은 눈금이 10칸 있어요. 한 칸은 10 cm예요.', items: [
      { type: 'figure', prompt: '줄자의 점이 가리키는 길이를 쓰세요.', tool: 'numberline', wide: true, figures: [
        { options: { mode: 'read', min: 0, max: 200, step: 100, sub: 10, labels: 'major', marks: [120] }, caption: '___ cm' }], answer: '120 cm' },
      { type: 'choice', prompt: '100 cm를 한 번 지나 10 cm 더 간 길이에 ○ 하세요.', options: ['1 m 10 cm', '2 m 10 cm'], answer: '1 m 10 cm' },
      { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '100 cm를 지나 30 cm 더 가면 1 m ____ cm예요.', answer: '30' },
      { type: 'short', prompt: '100 cm를 지나 50 cm 더 간 길이를 두 가지로 써 보세요.' },
    ] },
  },
  diff: {
    easy: '수직선에 큰 눈금 숫자가 모두 보이고 점을 놓으면 지금 값이 보여요. 카드는 맞으면 바로 이어져요.',
    base: '큰 눈금 숫자만 보이고 점의 값은 맞힌 뒤에야 보여요.',
    challenge: '수직선 양 끝 숫자만 보여서 눈금을 스스로 세어야 해요.',
  },
  notes: '자주 보이는 어려움: ① 1 m 30 cm를 1 m 3 cm로 읽는다 → 작은 눈금 한 칸이 10 cm임을 세어 확인한다. ② 100 cm를 몇 번 지났는지 세지 않고 m 앞의 수를 잘못 쓴다 → 큰 눈금 100, 200, 300 가운데 지난 것을 짚어 센다. ③ 99 cm를 1 m보다 길다고 생각한다 → 100 cm와 견준다. 이 차시는 10 cm·5 cm 간격으로 떨어지는 길이만 눈금에 나타낸다.',
}));

// ───────────────────────────── 3차시 (core · application) ─────────────────────────────
L.push(lesson(3, {
  title: '줄자로 교실 재는 차례와 알맞은 단위 정하기',
  objective: '줄자로 길이를 재는 차례를 알고, 재려는 물건의 크기에 맞게 cm와 m 가운데 알맞은 단위를 골라 쓸 수 있다.',
  desc: 'two children stretching a paper tape measure across a classroom floor to measure the length of a blackboard', text: '줄자로 교실 재기',
  layers: [{ motif: 'house', x: 100, y: 214, color: 'buttercup' }, { motif: 'flower', x: 250, y: 226 }, { motif: 'tree', x: 390, y: 216 }],
  intro: ['"교실 칠판 긴 쪽을 줄자로 재려고 해요. 어디서부터 어떻게 재야 할까요?" 학생 말을 들으며 줄자의 0을 칠판 한쪽 끝에 맞추는 것과 곧게 펴는 것이 나오는지 살핀다. "재고 난 뒤에는 몇 m 몇 cm인지 써서 남겨야 해요."라고 말해 활동 1의 순서 놓기로 이어 준다.',
    '친구와 함께 줄자를 들고 있다고 상상하고, 한 사람은 어디를 잡고 다른 사람은 어디를 잡을지 말해 봐요.'],
  acts: [
    act('a1', '활동 1. 줄자로 재는 차례 놓기', 'story', '줄자로 길이를 재는 일을 차례대로 놓아요.',
      '"줄자의 0을 물건의 한쪽 끝에 맞추지 않고 1에 맞추면 길이가 어떻게 될까요?" 0에 맞추는 까닭을 말하게 한다. 눈금 읽기를 맨 앞에 놓는 학생에게는 읽기 전에 해야 할 일이 무엇인지 되묻는다.',
      SL, [
        ord('줄자로 책상 긴 쪽을 재는 차례대로 놓아 보세요.', ['줄자의 0을 한쪽 끝에 맞춰요', '줄자를 곧게 펴요', '다른 쪽 끝의 눈금을 읽어요', '몇 m 몇 cm인지 써요'], 0.12,
          ['재기 전에 할 일부터 생각해요. 읽는 일과 쓰는 일은 재고 난 뒤예요.', '먼저 줄자를 놓는 자리를 정하고, 그다음 곧게 펴야 눈금이 바르게 읽혀요.', '0을 한쪽 끝에 맞추고 → 곧게 펴고 → 다른 쪽 눈금을 읽고 → 길이를 써요.'],
          { conclude: '0을 한쪽 끝에 맞추고 곧게 편 뒤 다른 쪽 끝의 눈금을 읽어요.' }),
        ord('줄자보다 긴 복도를 이어서 재는 차례대로 놓아 보세요.', ['줄자 길이만큼 재고 끝에 표시해요', '표시한 곳에 줄자의 0을 맞춰요', '이어서 남은 길이를 재요', '잰 길이를 모두 더해 써요'], 0.2,
          ['한 번에 잴 수 없을 때는 잰 곳을 표시해 두어야 이어서 잴 수 있어요.', '표시한 곳이 다음에 잴 때의 시작이에요. 더하는 일은 맨 마지막이에요.', '재고 표시하고 → 표시에 0을 맞추고 → 남은 길이를 재고 → 더해서 써요.']),
        ord('두 사람이 칠판 긴 쪽을 재는 차례대로 놓아 보세요.', ['한 사람이 줄자 끝을 칠판 왼쪽 끝에 대요', '다른 사람이 줄자를 오른쪽 끝까지 당겨요', '오른쪽 끝에 닿은 눈금을 읽어요', '칠판의 길이를 기록해요'], 0.18,
          ['혼자 잡을 수 없으면 한 사람은 시작 끝을 잡고, 다른 사람이 당겨요.', '당긴 뒤에야 눈금을 읽고, 읽은 뒤에 기록해요.', '왼쪽 끝에 대고 → 오른쪽 끝까지 당기고 → 눈금을 읽고 → 기록해요.']),
      ]),
    act('a2', '활동 2. 물건에 알맞은 단위 고르기', 'measure', '물건마다 길이를 나타낼 때 알맞은 단위(cm, m)를 골라요.',
      '"운동화 길이를 m로 말하면 어떨까요?" 0.2 m처럼 말하기 어색하다는 것을 느끼게 하고, 작은 물건은 cm로 말하는 이유를 말하게 한다. 줄넘기 줄 길이를 cm로 고른 학생에게는 두 팔을 벌려 줄을 가늠하게 한다.',
      UL, [
        unit('알맞은 단위를 골라 보세요.', [['교실 문 높이', 2, 1], ['운동화 길이', 20, 0], ['줄넘기 줄 길이', 2, 1]], 0.15),
        unit('알맞은 단위를 골라 보세요. 큰 곳과 작은 물건이에요.', [['체육관 긴 쪽', 30, 1], ['필통 길이', 20, 0], ['칠판 긴 쪽', 4, 1]], 0.2),
        unit('알맞은 단위를 골라 보세요. 네 가지예요.', [['미끄럼틀 길이', 3, 1], ['내 책상 긴 쪽', 60, 0], ['학교 건물 높이', 12, 1], ['색연필 길이', 17, 0]], 0.28, { conclude: '손으로 들 수 있는 작은 물건은 cm, 몸보다 큰 길이는 m로 나타내요.' }),
      ]),
    act('a3', '활동 3. cm로 잴 것과 m로 잴 것 가려내기', 'mindmap', '재는 길이에 맞게 물건과 도구를 나누고 이어요.',
      '"왜 운동장 긴 쪽은 m로, 지우개는 cm로 잴까요?" 수가 알맞은 크기가 되는 단위를 고른다고 말하게 한다. 철봉 높이를 cm로 분류한 학생에게는 100 cm가 몇 개 들어가는지 세어 보게 한다.',
      ML('sort', '알맞은 단위'), [
        srt('재는 물건을 cm로 재면 좋은 것과 m로 재면 좋은 것으로 나누어 보세요.', '알맞은 단위', { 'cm로 재요': ['지우개', '손바닥 너비', '필통'], 'm로 재요': ['운동장 긴 쪽', '교실 긴 쪽', '철봉 높이'] }, 0.18,
          ['물건 크기를 상상하고, 손에 쥘 수 있는지 걸어서 재야 하는지 생각해요.', '길이가 100 cm보다 훨씬 긴 것은 m로 재면 수가 작아져요.', '지우개, 손바닥 너비, 필통은 cm로, 운동장 긴 쪽, 교실 긴 쪽, 철봉 높이는 m로 재요.']),
        pick('m 단위로 재는 것이 알맞은 것을 모두 골라 보세요.', 'm로 재요', [['교문에서 교실까지', 1], ['클립 한 개', 0], ['학교 운동장 한 바퀴', 1], ['색연필 길이', 0], ['미끄럼틀 길이', 1]], 0.22,
          ['100 cm보다 훨씬 긴 길이를 재는 것을 찾아요.', '손에 쥘 수 있는 작은 물건은 cm로 재요. m로 재야 수가 알맞은 것만 골라요.', '교문에서 교실까지, 운동장 한 바퀴, 미끄럼틀 길이는 m로 재요. 클립과 색연필은 cm예요.']),
        match('재는 도구와 재기 알맞은 물건을 이어 보세요.', [['30 cm 자', '공책 긴 쪽'], ['1 m 막대자', '교실 문 높이'], ['줄자로 몇 m 재기', '복도 길이']], ['콩 한 알'], 0.25,
          ['도구의 길이와 물건의 크기가 비슷한 것끼리 이어요.', '30 cm 자로 복도를 재면 너무 여러 번이에요. 크기에 맞는 도구를 골라요.', '30 cm 자는 공책, 1 m 막대자는 문 높이, 줄자는 복도에 알맞아요.']),
      ]),
  ],
  wrap: ['"줄자로 길이를 잴 때 가장 먼저 할 일은 무엇이고, 가장 나중에 할 일은 무엇인가요?" 차례의 앞과 뒤를 말하게 한다. 출구 3번을 틀린 학생은 어떤 크기부터 m로 쓰는지 다음 시간 시작에서 두 팔로 가늠해 본다.',
    [{ type: 'tool', tool: 'story', options: { slots: 3, cards: [{ id: 'e2', text: '다른 쪽 끝의 눈금을 읽어요' }, { id: 'e1', text: '줄자의 0을 한쪽 끝에 맞춰요' }, { id: 'e3', text: '길이를 기록해요' }] }, prompt: '줄자로 재는 차례대로 놓아 보세요.', target: { order: ['e1', 'e2', 'e3'] }, difficulty: 0.12 },
      { type: 'choice', prompt: '복도의 길이를 나타낼 때 알맞은 단위는 무엇인가요?', options: ['cm', 'm'], answer: 1, difficulty: 0.1, explain: '복도처럼 긴 길이는 m로 나타내면 수가 알맞아요.' },
      { type: 'choice', prompt: '줄자로 길이를 잴 때 줄자의 0을 어디에 맞추나요?', options: ['물건의 가운데', '물건의 한쪽 끝', '물건의 다른 쪽 끝 눈금'], answer: 1, difficulty: 0.15, explain: '0을 한쪽 끝에 맞추고 다른 쪽 끝의 눈금을 읽어요.' }]],
  ws: {
    title: '줄자로 재고 단위 정하기',
    items: [
      wsTable('물건의 길이를 나타낼 때 알맞은 단위에 ○ 하세요.', ['물건', '단위'], [['연필', 'cm  m'], ['칠판 긴 쪽', 'cm  m'], ['운동장 긴 쪽', 'cm  m'], ['공책 긴 쪽', 'cm  m']], '연필 cm, 칠판 m, 운동장 m, 공책 cm'),
      { type: 'choice', prompt: '줄자로 재는 차례에서 가장 먼저 할 일에 ○ 하세요.', options: ['눈금 읽기', '줄자의 0을 한쪽 끝에 맞추기', '길이 기록하기'], answer: '줄자의 0을 한쪽 끝에 맞추기' },
      { type: 'choice', prompt: '줄자보다 긴 길이를 이어서 잴 때 필요한 것에 ○ 하세요.', options: ['잰 곳에 표시하기', '눈금을 지우기', '줄자를 접기'], answer: '잰 곳에 표시하기' },
      { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '큰 길이는 ____로, 작은 길이는 ____로 나타내요.', answer: 'm, cm' },
      { type: 'short', prompt: '줄자로 재 보고 싶은 교실 물건과 알맞은 단위를 써 보세요.' },
    ],
    easy: { note: '손에 쥘 수 있는 작은 물건은 cm, 몸보다 큰 길이는 m로 나타내요.', items: [
      wsTable('물건의 길이를 나타낼 때 알맞은 단위에 ○ 하세요.', ['물건', '단위'], [['지우개', 'cm  m'], ['복도', 'cm  m']], '지우개 cm, 복도 m'),
      { type: 'choice', prompt: '줄자의 0은 어디에 맞추나요?', options: ['물건의 한쪽 끝', '물건의 가운데'], answer: '물건의 한쪽 끝' },
      { type: 'choice', prompt: '교실 문 높이를 나타낼 때 알맞은 단위에 ○ 하세요.', options: ['cm', 'm'], answer: 'm' },
      { type: 'short', prompt: '줄자로 재는 차례 가운데 첫째와 마지막을 써 보세요.' },
    ] },
  },
  diff: {
    easy: '카드가 맞는 칸에 들어가면 바로 이어져요. 단위 고르기에는 수가 함께 보여요.',
    base: '카드를 스스로 놓아야 맞는지 알 수 있어요.',
    challenge: '네 가지를 한꺼번에 고르는 문항과, 줄자보다 긴 복도를 이어서 재는 차례까지 해요.',
  },
  notes: '자주 보이는 어려움: ① 줄자의 0이 아니라 1이나 가운데에 맞춘다 → 0에 맞추어야 끝 눈금이 길이가 되는 까닭을 말하게 한다. ② 줄자보다 긴 길이를 이어서 잴 때 표시하지 않아 겹치거나 빠뜨린다 → 잰 곳에 표시를 한다. ③ 작은 물건에도 m를 쓴다 → 수가 어색하게 작아진다. 이 차시의 줄자로 재기는 말·카드 활동이고 실제 줄자로 재는 것은 짝 활동으로 이어 갈 수 있다.',
}));

// ───────────────────────────── 4차시 (core · concept) ─────────────────────────────
L.push(lesson(4, {
  title: '몇 m 몇 cm를 cm로, cm를 m와 cm로 바꾸어 쓰기',
  objective: '몇 m 몇 cm로 쓴 길이를 몇 cm로, 몇 cm로 쓴 길이를 몇 m 몇 cm로 바꾸어 쓸 수 있다.',
  desc: 'two paper ribbons laid side by side on a table with small paper tags that show lengths written in two different ways', text: '같은 길이, 두 가지 표기',
  layers: [{ motif: 'house', x: 100, y: 214, color: 'rose' }, { motif: 'tree', x: 390, y: 216, color: 'mint' }, { motif: 'flower', x: 250, y: 226, color: 'lavender' }],
  intro: ['"리본 길이를 민지는 1 m 30 cm, 준호는 130 cm라고 썼어요. 누구 말이 맞을까요?" 두 표현이 같은 길이일 수 있는지 의견을 말하게 한다. 1 m는 100 cm이므로 1 m 30 cm는 100 cm와 30 cm를 이은 길이임을 알려 주고, 활동 1에서 수직선으로 확인해 보자고 말해 준다.',
    '키나 리본 길이를 말할 때 어떤 단위로 말하는 것이 더 편한지 이야기해 봐요.'],
  acts: [
    act('a1', '활동 1. 몇 m 몇 cm를 몇 cm로 쓰기', 'numberline', '점이 가리키는 길이가 몇 m 몇 cm인지 보고, 몇 cm로 바꾸어 숫자로 써요.',
      '"1 m 30 cm에서 1 m는 몇 cm예요? 거기에 30 cm를 더하면 몇 cm일까요?" 100 cm와 30 cm를 이어 130 cm가 됨을 말하게 한다. 1 m 30 cm를 1030 cm로 쓰는 학생에게는 1 m와 30 cm의 수를 나란히 쓰는 것이 아니라 100 cm에 30 cm를 더하는 것임을 짚는다.',
      RDL(400, 100, 10), [
        rdn('점은 1 m 30 cm에 있어요. 몇 cm인지 쓰세요.', 130, 0.15, { conclude: '1 m 30 cm는 100 cm와 30 cm를 이은 길이라서 130 cm예요.' }),
        rdn('점은 2 m 40 cm에 있어요. 몇 cm인지 쓰세요.', 240, 0.2),
        rdn('점은 1 m 50 cm에 있어요. 몇 cm인지 쓰세요.', 150, 0.2),
        rdn('더 해 보기: 점은 3 m 5 cm에 있어요. 5 cm는 작은 눈금 한 칸이에요. 몇 cm인지 쓰세요.', 305, 0.3, { extra: true }, { sub: 20 }),
      ]),
    act('a2', '활동 2. 몇 cm를 몇 m 몇 cm로 쓰기', 'numberline', '점이 가리키는 길이가 몇 cm인지 보고, 몇 m 몇 cm로 바꾸어 골라요.',
      '"230 cm에는 100 cm가 몇 번 들어 있을까요? 남는 것은 몇 cm일까요?" 100 cm가 두 번이면 2 m, 남은 30 cm가 합쳐져 2 m 30 cm임을 말하게 한다. 230 cm를 23 m나 2 m 3 cm로 쓰는 학생에게는 작은 눈금 3칸이 30 cm임을 수직선에서 센다.',
      RDL(300, 100, 10), [
        rd('점은 230 cm에 있어요. 몇 m 몇 cm인지 고르세요.', 230, ['2 m 3 cm', '2 m 30 cm', '23 m'], 1, 0.18),
        rd('점은 125 cm에 있어요. 몇 m 몇 cm인지 고르세요.', 125, ['12 m 5 cm', '1 m 25 cm', '1 m 2 cm'], 1, 0.25, { conclude: '125 cm는 100 cm와 25 cm라서 1 m 25 cm예요.' }, { sub: 20 }),
        rd('점은 180 cm에 있어요. 몇 m 몇 cm인지 고르세요.', 180, ['1 m 8 cm', '18 m', '1 m 80 cm'], 2, 0.2),
      ]),
    act('a3', '활동 3. 같은 길이 짝짓기', 'mindmap', '몇 m 몇 cm와 몇 cm로 쓴 같은 길이를 이어요.',
      '"2 m 5 cm를 250 cm로 쓰는 친구가 있어요. 맞을까요?" 5 cm는 십의 자리가 비어 있으니 05로 채워 205 cm가 됨을 말하게 한다. 25 cm나 250 cm로 쓰는 학생에게는 100 cm와 5 cm를 이어 놓은 모양을 수직선에서 보여 준다.',
      ML('match', '같은 길이'), [
        match('같은 길이를 이어 보세요. 몇 m 몇 cm로 쓴 길이가 먼저예요.', [['1 m 20 cm', '120 cm'], ['2 m 5 cm', '205 cm'], ['3 m 60 cm', '360 cm']], ['250 cm', '306 cm'], 0.2,
          ['m 앞의 수만큼 100 cm를 더하고, cm 부분을 그 뒤에 이어 붙여 생각해요.', '2 m 5 cm는 200 cm에 5 cm를 더한 길이예요. 함정 카드는 십의 자리에 숫자를 잘못 넣은 길이예요.', '1 m 20 cm는 120 cm, 2 m 5 cm는 205 cm, 3 m 60 cm는 360 cm예요.']),
        match('같은 길이를 이어 보세요. 이번에는 cm로 쓴 길이가 먼저예요.', [['150 cm', '1 m 50 cm'], ['302 cm', '3 m 2 cm'], ['410 cm', '4 m 10 cm']], ['3 m 20 cm', '4 m 1 cm'], 0.25,
          ['cm로 쓴 길이에서 100 cm가 몇 번 들어 있는지 세고, 남은 cm를 이어 써요.', '302 cm는 100 cm가 세 번 들어 있고 2 cm가 남아요. 십의 자리의 0을 놓치지 않아요.', '150 cm는 1 m 50 cm, 302 cm는 3 m 2 cm, 410 cm는 4 m 10 cm예요.']),
        pick('2 m 8 cm와 같은 길이를 모두 골라 보세요.', '2 m 8 cm', [['208 cm', 1], ['280 cm', 0], ['2 m 80 cm', 0], ['200 cm와 8 cm를 이은 길이', 1], ['28 cm', 0]], 0.3,
          ['2 m 8 cm가 200 cm에 몇 cm를 더한 길이인지 먼저 떠올려요.', '8 cm와 80 cm를 혼동하지 않아요. 십의 자리가 비어 있다는 것도 생각해요.', '208 cm와 200 cm에 8 cm를 이은 길이가 2 m 8 cm예요. 280 cm와 2 m 80 cm는 같은 길이지만 2 m 8 cm와는 달라요.']),
      ]),
  ],
  wrap: ['"3 m 20 cm를 cm로 말하면 얼마일까요? 어떻게 알았어요?" 300 cm와 20 cm를 이어 320 cm가 됨을 한 문장으로 말하게 한다. 출구 2번을 틀린 학생은 100 cm가 몇 번 들어 있는지 세는 과정을 다음 시간 시작에서 수직선으로 다시 해 본다.',
    [{ type: 'tool', tool: 'numberline', options: { mode: 'read', min: 0, max: 300, step: 100, sub: 10, labels: 'major', marks: [160], input: 'number', question: '점이 가리키는 길이는 몇 cm인가요?' }, prompt: '점은 1 m 60 cm에 있어요. 몇 cm인지 쓰세요.', target: { value: 160 }, difficulty: 0.18 },
      { type: 'choice', prompt: '3 m 20 cm는 몇 cm인가요?', options: ['32 cm', '320 cm', '302 cm'], answer: 1, difficulty: 0.22, explain: '3 m는 300 cm이고 거기에 20 cm를 더하면 320 cm예요.' },
      { type: 'choice', prompt: '245 cm는 몇 m 몇 cm인가요?', options: ['24 m 5 cm', '2 m 45 cm', '2 m 4 cm'], answer: 1, difficulty: 0.22, explain: '245 cm에는 100 cm가 두 번 들어 있고 45 cm가 남아서 2 m 45 cm예요.' }]],
  ws: {
    title: 'm와 cm 바꾸어 쓰기',
    items: [
      wsTable('같은 길이가 되도록 빈칸을 채우세요.', ['몇 m 몇 cm', '몇 cm'], [['1 m 40 cm', ''], ['2 m 5 cm', ''], ['', '310 cm'], ['', '260 cm']], '140 cm, 205 cm, 3 m 10 cm, 2 m 60 cm'),
      { type: 'figure', prompt: '줄자의 점이 가리키는 길이를 쓰세요.', tool: 'numberline', wide: true, figures: [
        { options: { mode: 'read', min: 0, max: 200, step: 100, sub: 10, labels: 'major', marks: [150] }, caption: '___ m ___ cm = ___ cm' }], answer: '1 m 50 cm = 150 cm' },
      { type: 'choice', prompt: '1 m 60 cm와 같은 길이에 ○ 하세요.', options: ['16 cm', '160 cm', '106 cm'], answer: '160 cm' },
      { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '300 cm = ____ m', answer: '3' },
      { type: 'short', prompt: '2 m 5 cm를 cm로 쓸 때 25 cm가 아닌 까닭을 써 보세요.' },
    ],
    easy: { note: '1 m는 100 cm예요. 몇 m 몇 cm는 100 cm를 몇 번 센 뒤 남는 cm를 이어요.', items: [
      wsTable('같은 길이가 되도록 빈칸을 채우세요.', ['몇 m 몇 cm', '몇 cm'], [['1 m 20 cm', ''], ['', '150 cm']], '120 cm, 1 m 50 cm'),
      { type: 'choice', prompt: '1 m 10 cm와 같은 길이에 ○ 하세요.', options: ['110 cm', '101 cm'], answer: '110 cm' },
      { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '100 cm + 20 cm = ____ cm', answer: '120' },
      { type: 'short', prompt: '2 m는 몇 cm인지 써 보세요.' },
    ] },
  },
  diff: {
    easy: '수직선에 큰 눈금 숫자가 모두 보이고, 카드는 맞으면 바로 이어져요.',
    base: '큰 눈금 숫자만 보이고, 길이를 스스로 계산해 써요.',
    challenge: '양 끝 숫자만 보이고, 3 m 5 cm처럼 십의 자리가 빈 길이(더 해 보기)까지 해요.',
  },
  notes: '자주 보이는 어려움: ① 1 m 30 cm를 1030 cm처럼 두 수를 나란히 쓴다 → 100 cm에 30 cm를 더하는 것이다. ② 2 m 5 cm를 25 cm나 250 cm로 쓴다 → 십의 자리가 비어 있으면 0으로 채워 205 cm이다. ③ 230 cm를 23 m로 읽는다 → 100 cm가 몇 번 들어 있는지 센다. 이 차시의 수직선 문항은 5 cm·10 cm 간격으로 떨어지는 길이만 나온다.',
}));

// ───────────────────────────── 5차시 (core · representation) ─────────────────────────────
L.push(lesson(5, {
  title: '수직선과 카드로 같은 길이를 두 가지로 나타내기',
  objective: '같은 길이를 몇 m 몇 cm와 몇 cm 두 가지로 나타내고, 수직선에서 100 cm에서 더 간 만큼으로 두 표기가 같음을 설명할 수 있다.',
  desc: 'a paper ribbon on a table with two paper tags clipped to it, one tag with meters and the other with centimeters', text: '같은 길이, 다른 쓰기',
  layers: [{ motif: 'house', x: 110, y: 214, color: 'mint' }, { motif: 'tree', x: 380, y: 216 }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"리본 가는 1 m 40 cm, 리본 나는 140 cm예요. 같은 길이일까요, 다른 길이일까요?" 같은 길이를 다르게 쓴 것임을 학생 말로 확인한다. "수직선에서 100 cm에서 출발해 10 cm씩 4번 가면 140 cm, 곧 1 m 40 cm예요."라고 말해 활동 1로 이어 준다.',
    '교실 문이나 책상의 길이를 짐작해서 몇 m 몇 cm로도, 몇 cm로도 말해 봐요.'],
  acts: [
    act('a1', '활동 1. 1 m에서 출발해 뛰어 보기', 'numberline', '출발점 1 m(100 cm)나 2 m(200 cm)에서 같은 크기로 뛰어, 도착한 길이를 몇 cm와 몇 m 몇 cm로 말해요.',
      '"1 m에서 10 cm씩 3번 뛰면 어디에 닿을까요?" 100 cm에 30 cm를 더해 130 cm, 곧 1 m 30 cm임을 말하게 한다. 도착한 곳을 13 cm로 읽는 학생에게는 출발점이 100 cm였음을 다시 짚는다.',
      JPL(100, 300, 20, 4, 5, 10, 5, 100), [
        jmp('1 m(100 cm)에서 출발해 10 cm씩 3번 뛰어 보세요. 몇 m 몇 cm에 닿을까요?', 10, { count: 3 }, 0.15, { conclude: '100 cm에서 10 cm씩 3번 뛰면 130 cm, 곧 1 m 30 cm예요.' }, 100),
        jmp('2 m(200 cm)에서 출발해 20 cm씩 4번 뛰어 보세요. 몇 cm에 닿을까요?', 20, { count: 4 }, 0.22, null, 200),
        jmp('1 m에서 출발해 25 cm씩 2번 뛰어 보세요. 몇 m 몇 cm에 닿을까요?', 25, { count: 2 }, 0.2, { reveal: 'after-check' }, 100),
      ]),
    act('a2', '활동 2. 같은 길이끼리 묶기', 'mindmap', '몇 m 몇 cm와 몇 cm로 쓴 길이 가운데 같은 것끼리 묶고 이어요.',
      '"140 cm와 1 m 40 cm는 왜 같은 길이일까요?" 100 cm와 40 cm를 이은 길이라서 같다고 말하게 한다. 1 m 4 cm를 140 cm와 같다고 묶는 학생에게는 4 cm와 40 cm의 차이를 수직선 눈금 칸 수로 보여 준다.',
      ML('sort', '같은 길이'), [
        srt('같은 길이끼리 묶어 보세요.', '같은 길이', { '1 m 40 cm와 같아요': ['140 cm', '100 cm와 40 cm', '1 m보다 40 cm 더 긴 길이'], '2 m 10 cm와 같아요': ['210 cm', '200 cm와 10 cm', '2 m보다 10 cm 더 긴 길이'] }, 0.2,
          ['모든 길이를 cm 하나로 바꾸어 견주면 같은 것끼리 모을 수 있어요.', '100 cm가 몇 번 들어 있는지 세어 보고, 두 가지 길이 가운데 어느 쪽과 같은지 정해요.', '140 cm, 100 cm와 40 cm, 1 m보다 40 cm 더 긴 길이가 같고, 210 cm, 200 cm와 10 cm, 2 m보다 10 cm 더 긴 길이가 같아요.'],
          { conclude: '표기가 달라도 100 cm가 몇 번 들어 있고 몇 cm가 남는지가 같으면 같은 길이예요.' }),
        match('cm로 쓴 길이를 m와 cm로 쓴 길이와 이어 보세요.', [['끈 가: 175 cm', '1 m 75 cm'], ['끈 나: 260 cm', '2 m 60 cm'], ['끈 다: 305 cm', '3 m 5 cm']], ['3 m 50 cm', '2 m 6 cm'], 0.25,
          ['cm 수에서 100 cm가 몇 번 들어 있는지 세고 남는 cm를 이어 써요.', '305 cm는 100 cm가 세 번 들어 있고 5 cm가 남아요. 함정 카드는 남는 cm의 자리가 달라요.', '175 cm는 1 m 75 cm, 260 cm는 2 m 60 cm, 305 cm는 3 m 5 cm예요.']),
        pick('1 m 45 cm와 같지 않은 길이를 모두 골라 보세요.', '다른 길이', [['145 cm', 0], ['1 m 4 cm', 1], ['100 cm와 45 cm', 0], ['154 cm', 1]], 0.28,
          ['1 m 45 cm를 먼저 cm 하나로 바꾸어 놓고 카드와 견주어 봐요.', '1 m 4 cm와 1 m 45 cm는 cm 부분이 달라요. 같지 않은 카드만 바구니에 넣어요.', '1 m 45 cm는 145 cm예요. 1 m 4 cm(104 cm)와 154 cm는 같지 않아요.']),
      ]),
    act('a3', '활동 3. 두 가지 방법으로 줄자에 표시하기', 'numberline', '말한 길이를 어떤 방법으로 쓰든 줄자의 같은 자리에 점을 놓아요. 한 칸은 10 cm예요.',
      '"1 m 60 cm와 160 cm 가운데 어느 쪽에 점을 놓아야 할까요?" 둘이 같은 길이이므로 같은 자리임을 말하게 한다. 1 m 20 cm와 190 cm를 같은 자리에 놓는 학생에게는 두 점 사이의 칸 수를 세게 한다.',
      PLL(0, 300, 100, 10), [
        plc('1 m 60 cm에 점을 놓아 보세요.', [160], 0.15),
        plc('230 cm에 점을 놓아 보세요.', [230], 0.2),
        plc('가는 1 m 20 cm, 나는 190 cm예요. 두 점을 놓아 보세요.', [120, 190], 0.25, { conclude: '1 m 20 cm는 120 cm라서 190 cm보다 70 cm 짧아요.' }),
      ]),
  ],
  wrap: ['"150 cm와 1 m 50 cm가 같은 길이라는 것을 어떻게 알 수 있나요?" 150 cm에 100 cm가 한 번 들어 있고 50 cm가 남는다고 말하게 한다. 출구 2번을 틀린 학생은 1 m 5 cm와 1 m 50 cm를 헷갈리는지 다음 시간 시작에서 눈금 칸 수로 살핀다.',
    [{ type: 'tool', tool: 'numberline', options: { mode: 'place', min: 0, max: 300, step: 100, sub: 10, labels: 'major' }, prompt: '2 m 70 cm에 점을 놓아 보세요.', target: { points: [270] }, difficulty: 0.18 },
      { type: 'choice', prompt: '150 cm와 같은 길이는 무엇인가요?', options: ['1 m 5 cm', '1 m 50 cm', '15 m'], answer: 1, difficulty: 0.2, explain: '150 cm에는 100 cm가 한 번 들어 있고 50 cm가 남아서 1 m 50 cm예요.' },
      { type: 'choice', prompt: '2 m 5 cm와 2 m 50 cm 가운데 더 긴 길이는 무엇인가요?', options: ['2 m 5 cm', '2 m 50 cm'], answer: 1, difficulty: 0.2, explain: '2 m 50 cm는 250 cm, 2 m 5 cm는 205 cm라서 2 m 50 cm가 더 길어요.' }]],
  ws: {
    title: '같은 길이 두 가지로 쓰기',
    items: [
      wsTable('같은 길이가 되도록 빈칸을 채우세요.', ['끈', '몇 m 몇 cm', '몇 cm'], [['가', '1 m 30 cm', ''], ['나', '', '215 cm'], ['다', '3 m 5 cm', '']], '130 cm, 2 m 15 cm, 305 cm'),
      { type: 'choice', prompt: '150 cm와 같은 길이를 바르게 쓴 것에 ○ 하세요.', options: ['1 m 5 cm', '1 m 50 cm', '15 m'], answer: '1 m 50 cm' },
      { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '100 cm에서 10 cm씩 ____번 뛰면 150 cm예요.', answer: '5' },
      { type: 'choice', prompt: '더 긴 길이에 ○ 하세요.', options: ['1 m 9 cm', '1 m 90 cm'], answer: '1 m 90 cm' },
      { type: 'short', prompt: '키가 1 m 25 cm인 나무 모형은 몇 cm인지 쓰고, 어떻게 알았는지 써 보세요.' },
    ],
    easy: { note: '1 m는 100 cm예요. 1 m 30 cm는 100 cm와 30 cm를 이은 길이예요.', items: [
      wsTable('같은 길이가 되도록 빈칸을 채우세요.', ['끈', '몇 m 몇 cm', '몇 cm'], [['가', '1 m 20 cm', ''], ['나', '', '150 cm']], '120 cm, 1 m 50 cm'),
      { type: 'choice', prompt: '130 cm와 같은 길이에 ○ 하세요.', options: ['1 m 30 cm', '1 m 3 cm'], answer: '1 m 30 cm' },
      { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '100 cm에서 10 cm씩 ____번 뛰면 120 cm예요.', answer: '2' },
      { type: 'short', prompt: '1 m 10 cm를 cm로 쓰면 얼마인지 써 보세요.' },
    ] },
  },
  diff: {
    easy: '출발점이 정해져 있고 뛸 때마다 닿은 수가 보여요. 점을 놓으면 지금 값이 보여요.',
    base: '닿은 수가 보이지 않고 한 번 뛰는 크기를 스스로 바꾸어 뛰어요.',
    challenge: '수직선에 양 끝 숫자만 보여서 눈금을 스스로 세어야 해요.',
  },
  notes: '자주 보이는 어려움: ① 1 m 4 cm와 140 cm를 같은 길이로 묶는다 → 4 cm와 40 cm는 눈금 칸 수가 다르다. ② 1 m에서 출발한 뛰기의 도착점을 뛴 길이만으로 읽는다(130 cm를 30 cm로) → 출발점이 100 cm였음을 짚는다. ③ 1 m 5 cm와 1 m 50 cm의 크기를 헷갈린다 → 105 cm와 150 cm로 바꾸어 견준다. 4차시의 바꾸기를 수직선 뛰기와 표기 짝짓기로 다시 쌓는 시간이다.',
}));

// ───────────────────────────── 6차시 (core · application) ─────────────────────────────
L.push(lesson(6, {
  title: '길이를 견주어 짧은 것부터 차례로 놓기',
  objective: 'm와 cm가 섞인 길이를 같은 단위로 바꾸어 어느 쪽이 더 긴지 말하고, 길이를 짧은 것부터 또는 긴 것부터 차례로 놓을 수 있다.',
  desc: 'four paper ribbons of different lengths hanging in a row from a rope across a classroom wall', text: '긴 끈, 짧은 끈',
  layers: [{ motif: 'house', x: 100, y: 214, color: 'lavender' }, { motif: 'tree', x: 390, y: 216 }, { motif: 'star', x: 250, y: 74, s: 0.6 }],
  intro: ['"끈 가는 1 m 5 cm, 끈 나는 95 cm예요. 어느 끈이 더 길까요?" m 앞의 수를 보지 않고 숫자 95가 더 크다고 말하는 학생이 있는지 살핀다. "1 m는 100 cm니까 95 cm보다 길어요. 길이를 견줄 때는 같은 단위로 맞추면 쉬워요."라고 말해 활동 1로 이어 준다.',
    '내 필통, 공책, 책상의 길이를 짐작해서 긴 것부터 차례로 짝에게 말해 봐요.'],
  acts: [
    act('a1', '활동 1. 길이 카드를 차례로 놓기', 'story', '길이가 쓰인 카드를 읽고, 짧은 것부터(또는 긴 것부터) 차례대로 칸에 놓아요.',
      '"95 cm와 1 m 5 cm 가운데 어느 쪽이 더 짧아요?" 둘을 cm로 바꾸어 95와 105로 견주게 한다. 2 m 95 cm와 3 m를 견줄 때 95가 크다고 3 m가 더 짧다고 하는 학생에게는 m 앞의 수를 먼저 견주게 한다.',
      SL, [
        ord('끈 4개를 짧은 것부터 차례로 놓아 보세요.', ['95 cm', '1 m 5 cm', '1 m 40 cm', '2 m'], 0.15,
          ['m와 cm로 섞여 있으면 모두 cm 하나로 바꾸어 견주어요.', '1 m는 100 cm예요. 95 cm가 100 cm보다 작은지 큰지 먼저 생각해요.', '95 cm → 1 m 5 cm(105 cm) → 1 m 40 cm(140 cm) → 2 m(200 cm) 차례예요.']),
        ord('끈 4개를 긴 것부터 차례로 놓아 보세요.', ['3 m 10 cm', '3 m', '2 m 95 cm', '280 cm'], 0.22,
          ['m 앞의 수를 먼저 견주고, m 앞의 수가 같으면 cm를 견주어요.', '280 cm를 m와 cm로 바꾸면 몇 m 몇 cm인지 생각해 봐요. 3 m 10 cm와 3 m는 m 앞의 수가 같아요.', '3 m 10 cm(310 cm) → 3 m(300 cm) → 2 m 95 cm(295 cm) → 280 cm 차례예요.'],
          { conclude: 'm 앞의 수가 클수록 길고, m 앞의 수가 같으면 cm가 큰 쪽이 더 길어요.' }),
        ord('나무 모형 5개를 낮은 것부터 차례로 놓아 보세요.', ['1 m 3 cm', '109 cm', '1 m 18 cm', '1 m 25 cm', '130 cm'], 0.28,
          ['5개 모두 cm로 바꾸어 앞의 수를 견주어요.', '1 m는 100 cm예요. 100에 cm를 더해 보면 103, 118, 125가 나와요. 109와 130은 이미 cm로 쓰여 있어요.', '103 cm → 109 cm → 118 cm → 125 cm → 130 cm 차례예요.']),
      ]),
    act('a2', '활동 2. 기준보다 긴지 짧은지 가르기', 'mindmap', '기준 길이와 견주어 더 긴 것, 더 짧은 것을 골라요.',
      '"1 m 50 cm보다 긴 길이는 무엇일까요? 149 cm는 어떨까요?" 149 cm가 150 cm보다 1 cm 짧음을 말하게 한다. 105 cm를 1 m 50 cm보다 길다고 하는 학생에게는 105 cm를 1 m 5 cm로 바꾸어 견주게 한다.',
      ML('pick', '기준보다 긴 길이'), [
        pick('1 m 50 cm보다 긴 길이를 모두 골라 보세요.', '1 m 50 cm보다 긴 길이', [['1 m 60 cm', 1], ['149 cm', 0], ['2 m', 1], ['1 m 5 cm', 0], ['155 cm', 1]], 0.2,
          ['모두 cm로 바꾸어 150 cm와 견주어 봐요.', '1 m 60 cm는 160 cm예요. 150 cm보다 큰 것만 골라요.', '1 m 60 cm(160 cm), 2 m(200 cm), 155 cm가 150 cm보다 길어요. 149 cm와 1 m 5 cm는 150 cm보다 짧아요.']),
        srt('길이를 2 m보다 짧은 것과 긴 것으로 나누어 보세요.', '2 m', { '2 m보다 짧아요': ['1 m 90 cm', '150 cm', '199 cm'], '2 m보다 길어요': ['2 m 10 cm', '250 cm', '201 cm'] }, 0.25,
          ['2 m는 200 cm예요. 길이마다 200 cm와 견주어 봐요.', '1 m 90 cm는 190 cm예요. 199 cm와 201 cm는 200 cm와 1 cm 차이예요.', '1 m 90 cm, 150 cm, 199 cm는 200 cm보다 짧고 2 m 10 cm, 250 cm, 201 cm는 200 cm보다 길어요.']),
        match('두 길이 중 더 긴 쪽을 이어 보세요.', [['1 m 20 cm와 105 cm 중 더 긴 것', '1 m 20 cm'], ['2 m와 190 cm 중 더 긴 것', '2 m'], ['3 m 5 cm와 350 cm 중 더 긴 것', '350 cm']], ['190 cm', '3 m 5 cm', '105 cm'], 0.28,
          ['두 길이를 모두 cm로 바꾸어 어느 쪽 수가 더 큰지 봐요.', '3 m 5 cm는 305 cm예요. 350 cm와 견주어 보세요.', '120 cm가 105 cm보다, 200 cm가 190 cm보다, 350 cm가 305 cm보다 길어요.']),
      ]),
    act('a3', '활동 3. 줄자에 놓고 견주기', 'numberline', '두 길이를 줄자에 점으로 놓고, 더 오른쪽에 있는 점이 더 긴 길이임을 확인해요.',
      '"점 두 개를 놓았어요. 어느 점이 더 긴 길이일까요?" 오른쪽에 있는 점이 더 길다고 말하게 한다. 1 m 30 cm와 125 cm를 놓을 때 두 점 사이가 5 cm밖에 되지 않는다는 것을 칸 수로 세어 보게 한다.',
      PLL(100, 300, 100, 20), [
        plc('리본 가는 1 m 20 cm, 리본 나는 140 cm예요. 두 길이를 줄자에 놓고 더 긴 것을 찾아보세요.', [120, 140], 0.2, { conclude: '오른쪽에 있는 점이 더 길어요. 140 cm가 1 m 20 cm보다 20 cm 더 길어요.' }),
        plc('민지의 나무 모형은 1 m 30 cm, 준호의 나무 모형은 125 cm예요. 두 점을 놓아 보세요.', [130, 125], 0.25, null, { names: ['민지', '준호'] }),
        plc('끈 가는 2 m 5 cm, 끈 나는 195 cm예요. 두 점을 놓아 보세요.', [205, 195], 0.3),
      ]),
  ],
  wrap: ['"길이를 견줄 때는 어떻게 하면 쉬울까요?" 같은 단위로 바꾸어 견준다는 것을 학생 말로 한 문장씩 말하게 한다. 출구 1번을 틀린 학생은 m 앞의 수와 cm의 수를 따로 보고 크기를 정하는지 다음 시간 시작에서 살핀다.',
    [{ type: 'choice', prompt: '1 m 20 cm와 105 cm 가운데 더 긴 길이는 무엇인가요?', options: ['1 m 20 cm', '105 cm'], answer: 0, difficulty: 0.2, explain: '1 m 20 cm는 120 cm라서 105 cm보다 길어요.' },
      { type: 'tool', tool: 'story', options: { slots: 3, cards: [{ id: 'g3', text: '2 m' }, { id: 'g1', text: '80 cm' }, { id: 'g2', text: '1 m 30 cm' }] }, prompt: '짧은 것부터 차례로 놓으세요.', target: { order: ['g1', 'g2', 'g3'] }, difficulty: 0.2 },
      { type: 'choice', prompt: '2 m보다 짧은 길이는 무엇인가요?', options: ['201 cm', '1 m 99 cm', '2 m 5 cm'], answer: 1, difficulty: 0.22, explain: '2 m는 200 cm예요. 1 m 99 cm는 199 cm라서 2 m보다 짧아요.' }]],
  ws: {
    title: '길이 견주기',
    items: [
      wsTable('두 길이 가운데 더 긴 길이를 빈칸에 쓰세요.', ['두 길이', '더 긴 길이'], [['1 m 10 cm / 105 cm', ''], ['2 m / 190 cm', ''], ['3 m 5 cm / 350 cm', '']], '1 m 10 cm, 2 m, 350 cm'),
      { type: 'choice', prompt: '가장 긴 길이에 ○ 하세요.', options: ['1 m 45 cm', '150 cm', '1 m 9 cm'], answer: '150 cm' },
      { type: 'blank', prompt: '빈칸에 알맞은 길이를 쓰세요.', text: '95 cm와 1 m 5 cm 가운데 더 짧은 길이는 ____예요.', answer: '95 cm' },
      { type: 'choice', prompt: '짧은 것부터 차례로 쓴 것에 ○ 하세요.', options: ['80 cm, 1 m 30 cm, 2 m', '2 m, 1 m 30 cm, 80 cm', '1 m 30 cm, 80 cm, 2 m'], answer: '80 cm, 1 m 30 cm, 2 m' },
      { type: 'short', prompt: '내 필통의 길이를 어림하고, 1 m보다 짧은지 긴지 써 보세요.' },
    ],
    easy: { note: '길이를 견줄 때는 모두 cm로 바꾸면 쉬워요. 1 m는 100 cm예요.', items: [
      wsTable('두 길이 가운데 더 긴 길이를 빈칸에 쓰세요.', ['두 길이', '더 긴 길이'], [['1 m / 90 cm', ''], ['1 m 20 cm / 110 cm', '']], '1 m, 1 m 20 cm'),
      { type: 'choice', prompt: '더 긴 길이에 ○ 하세요.', options: ['99 cm', '1 m'], answer: '1 m' },
      { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '1 m 20 cm = ____ cm', answer: '120' },
      { type: 'short', prompt: '50 cm, 1 m, 2 m를 짧은 것부터 차례로 써 보세요.' },
    ] },
  },
  diff: {
    easy: '카드가 맞게 놓이면 바로 번호가 표시되고, 줄자에는 점의 값이 보여요.',
    base: '카드를 스스로 놓고 확인한 뒤에야 차례가 맞는지 알 수 있어요.',
    challenge: '카드 5장 차례 놓기와 5 cm 차이가 나는 두 길이를 줄자에 놓아 견주기까지 해요.',
  },
  notes: '자주 보이는 어려움: ① m 앞의 수를 보지 않고 cm 숫자만 견준다(2 m 95 cm보다 3 m가 짧다고 한다) → 같은 단위로 바꾸거나 m 앞의 수를 먼저 견준다. ② 95 cm와 1 m 5 cm를 견줄 때 숫자 95가 크다고 한다 → 1 m 5 cm는 105 cm이다. ③ 5 cm밖에 차이가 나지 않는 두 길이를 같은 길이로 놓는다 → 눈금 칸 수를 센다. 길이를 어림해서 견주는 활동은 7~9차시에서 이어서 한다.',
}));

// ───────────────────────────── 7차시 (core · concept) ─────────────────────────────
L.push(lesson(7, {
  title: '한 걸음, 한 뼘으로 1 m 짐작하기',
  objective: '한 걸음이나 한 뼘 같은 몸의 길이를 기준으로 몇 번이 1 m가 되는지 말하고, 알맞은 어림과 알맞지 않은 어림을 가려낼 수 있다.',
  desc: 'children walking in a line across a classroom floor leaving paper footprints next to a one meter wooden stick', text: '내 몸으로 1 m!',
  layers: [{ motif: 'house', x: 100, y: 214, color: 'peach' }, { motif: 'flower', x: 250, y: 226, color: 'rose' }, { motif: 'tree', x: 390, y: 216 }],
  intro: ['"한 걸음이 50 cm인 친구가 걸어서 1 m를 가려면 몇 걸음을 걸어야 할까요?" 기준이 되는 길이를 정해 두면 긴 길이를 짐작할 수 있다고 말해 준다. "내 몸의 길이는 사람마다 달라서 어림한 값이에요. 그래도 1 m가 어느 정도인지 느낄 수 있어요."라고 말하고 활동 1로 이어 간다.',
    '내 한 걸음과 한 뼘이 얼마쯤인지 손으로 짐작해 보고, 1 m에 몇 번이 들어갈지 짝과 이야기해 봐요.'],
  acts: [
    act('a1', '활동 1. 걸음과 뼘으로 길이 재기', 'numberline', '한 걸음이나 한 뼘의 길이를 기준으로 같은 크기로 뛰어 1 m나 2 m에 닿아 보아요.',
      '"한 걸음이 50 cm면 2걸음은 몇 cm일까요?" 기준 길이를 몇 번 이은 것인지 말하게 한다. 한 뼘이 20 cm일 때 2 m를 재며 20 cm씩 5번에서 멈추는 학생에게는 5번이면 100 cm밖에 되지 않음을 수직선에서 보여 준다.',
      JPL(0, 300, 50, 5, 10, 50, 10, 0), [
        jmp('한 걸음이 50 cm예요. 걸음으로 1 m를 재면 몇 걸음일까요? 50 cm씩 뛰어 100 cm에 닿아 보세요.', 50, { end: 100 }, 0.12, { predict: { q: '한 걸음이 50 cm면 1 m는 몇 걸음일까요?', options: ['1걸음', '2걸음', '5걸음'], answer: 1 }, conclude: '50 cm씩 2번 가면 100 cm, 곧 1 m예요. 2걸음이에요.' }),
        jmp('한 뼘이 20 cm예요. 뼘으로 2 m를 재면 몇 뼘일까요? 20 cm씩 뛰어 200 cm에 닿아 보세요.', 20, { end: 200 }, 0.2),
        jmp('한 걸음이 50 cm일 때 5걸음은 모두 몇 m 몇 cm일까요? 50 cm씩 5번 뛰어 보세요.', 50, { count: 5 }, 0.22, { conclude: '50 cm씩 5번이면 250 cm, 곧 2 m 50 cm예요.' }),
        jmp('더 해 보기: 지우가 두 팔을 벌린 길이가 1 m예요. 3번 재면 몇 m일까요? 100 cm씩 뛰어 보세요.', 100, { count: 3 }, 0.25, { extra: true }),
      ]),
    act('a2', '활동 2. 기준 길이와 횟수 짝짓기', 'mindmap', '기준 길이를 몇 번 이어야 1 m가 되는지, 몇 번이면 몇 m가 되는지 이어요.',
      '"한 뼘이 20 cm면 몇 번이 1 m일까요?" 20, 40, 60, 80, 100으로 세어 5번이라고 말하게 한다. 손바닥 너비 10 cm로 1 m를 재며 5번이라고 답하는 학생에게는 10 cm가 한 뼘의 절반쯤임을 떠올리게 한다.',
      ML('match', '1 m 만들기'), [
        match('기준 길이로 1 m를 만들려면 몇 번이 필요한지 이어 보세요.', [['한 걸음이 50 cm', '2번'], ['한 뼘이 20 cm', '5번'], ['손바닥 너비가 10 cm', '10번']], ['4번', '20번'], 0.2,
          ['기준 길이를 몇 번 이어야 100 cm가 되는지 생각해요.', '기준 길이가 작을수록 더 여러 번 필요해요. 50 cm, 20 cm, 10 cm 순서로 횟수가 늘어나요.', '50 cm씩 2번, 20 cm씩 5번, 10 cm씩 10번이 100 cm예요.']),
        match('몇 번 재면 몇 m가 되는지 이어 보세요.', [['50 cm씩 6번', '3 m'], ['25 cm씩 8번', '2 m'], ['20 cm씩 5번', '1 m']], ['4 m', '30 cm'], 0.25,
          ['기준 길이와 횟수를 곱한 길이를 cm로 구한 뒤 m로 바꿔요.', '50 cm가 6번이면 300 cm예요. 25 cm가 4번이면 100 cm예요.', '50 cm씩 6번은 300 cm = 3 m, 25 cm씩 8번은 200 cm = 2 m, 20 cm씩 5번은 100 cm = 1 m예요.']),
        pick('길이가 1 m인 것을 모두 골라 보세요.', '1 m', [['50 cm씩 2번', 1], ['20 cm씩 5번', 1], ['10 cm씩 5번', 0], ['25 cm씩 3번', 0], ['100 cm', 1]], 0.22,
          ['기준 길이를 횟수만큼 이은 길이가 100 cm인 것만 찾아요.', '10 cm씩 5번과 25 cm씩 3번은 100 cm가 안 돼요. 얼마인지 구해 보세요.', '50 cm씩 2번, 20 cm씩 5번, 100 cm가 1 m예요. 10 cm씩 5번은 50 cm, 25 cm씩 3번은 75 cm예요.']),
      ]),
    act('a3', '활동 3. 알맞은 어림 가려내기', 'mindmap', '어림한 길이가 알맞은지 따져 나누고, 물건과 알맞은 어림을 이어요.',
      '"교실 문 높이를 약 2 m로 어림하는 것은 알맞을까요? 약 2 cm는요?" 두 팔을 벌린 1 m와 견주어 말하게 한다. 연필 길이를 약 15 m로 어림하는 학생에게는 두 팔을 벌려 15 m가 얼마나 긴지 느껴 보게 한다.',
      ML('sort', '어림한 길이'), [
        srt('어림한 길이가 알맞은 것과 알맞지 않은 것으로 나누어 보세요.', '어림한 길이', { '알맞은 어림': ['교실 문 높이는 약 2 m', '연필 길이는 약 15 cm', '복도 길이는 약 30 m'], '알맞지 않은 어림': ['공책 긴 쪽은 약 2 m', '운동장 긴 쪽은 약 10 cm', '내 키는 약 10 m'] }, 0.2,
          ['물건을 떠올려 두 팔을 벌린 1 m와 견주어 보고, 어림한 수와 단위가 어울리는지 따져요.', '너무 크거나 너무 작은 어림은 단위가 맞지 않아요. 내 키는 두 팔 벌린 길이보다 조금 더 길어요.', '교실 문 높이 약 2 m, 연필 약 15 cm, 복도 약 30 m는 알맞고 나머지 셋은 알맞지 않아요.'],
          { conclude: '물건의 크기와 어울리는 단위로 어림해야 알맞아요.' }),
        pick('길이를 알맞게 어림한 문장을 모두 골라 보세요.', '알맞은 어림', [['필통 길이는 약 20 cm', 1], ['칠판 긴 쪽은 약 4 m', 1], ['지우개 길이는 약 5 m', 0], ['교실 문 폭은 약 90 cm', 1], ['책상 높이는 약 7 m', 0]], 0.25,
          ['물건 크기를 상상하고 1 m와 견주어 어림한 길이가 어울리는지 봐요.', '손에 쥐는 작은 물건에는 cm, 큰 물건에는 m가 어울려요.', '필통 약 20 cm, 칠판 긴 쪽 약 4 m, 교실 문 폭 약 90 cm가 알맞고 지우개 약 5 m, 책상 높이 약 7 m는 알맞지 않아요.']),
        match('물건과 알맞게 어림한 길이를 이어 보세요.', [['연필', '약 15 cm'], ['교실 문 높이', '약 2 m'], ['학교 운동장 긴 쪽', '약 80 m']], ['약 2 cm', '약 800 m'], 0.25,
          ['물건 크기를 떠올려 단위와 수가 어울리는 어림을 찾아요.', '연필은 손에 쥐는 물건이라 cm, 운동장은 달려서 재는 길이라 m가 어울려요. 수가 너무 작거나 큰 것은 아니에요.', '연필은 약 15 cm, 교실 문 높이는 약 2 m, 운동장 긴 쪽은 약 80 m가 알맞아요.']),
      ]),
  ],
  wrap: ['"한 걸음이 50 cm이면 4걸음은 몇 m일까요? 어떻게 알았어요?" 50 cm씩 4번이 200 cm, 곧 2 m임을 말하게 한다. 출구 3번을 틀린 학생은 물건의 크기와 단위가 어울리는지 다음 시간 시작에서 두 팔을 벌려 가늠해 본다.',
    [{ type: 'tool', tool: 'numberline', options: { mode: 'jump', min: 0, max: 300, step: 50, sub: 5, labels: 'major', hopStep: 10, hopSize: 10, fixedFrom: 0 }, prompt: '한 걸음이 50 cm예요. 3걸음은 몇 cm일까요? 50 cm씩 뛰어 보세요.', target: { from: 0, size: 50, count: 3 }, difficulty: 0.2 },
      { type: 'choice', prompt: '한 뼘이 25 cm일 때 1 m는 몇 뼘인가요?', options: ['2뼘', '4뼘', '10뼘'], answer: 1, difficulty: 0.22, explain: '25 cm씩 4번이면 100 cm, 곧 1 m예요.' },
      { type: 'choice', prompt: '교실 문 높이를 어림할 때 알맞은 것은 무엇인가요?', options: ['약 2 cm', '약 2 m', '약 200 m'], answer: 1, difficulty: 0.15, explain: '교실 문은 두 팔을 벌린 길이보다 조금 더 높아서 약 2 m예요.' }]],
  ws: {
    title: '몸으로 1 m 짐작하기',
    items: [
      wsTable('기준 길이로 1 m를 만들려면 몇 번이 필요한지 쓰세요.', ['기준 길이', '1 m가 되는 횟수'], [['한 걸음 50 cm', '2번'], ['한 뼘 20 cm', ''], ['손바닥 너비 10 cm', ''], ['한 뼘 25 cm', '']], '5번, 10번, 4번'),
      { type: 'choice', prompt: '길이를 알맞게 어림한 것에 ○ 하세요.', options: ['연필 길이는 약 15 m', '교실 문 높이는 약 2 m', '운동장 긴 쪽은 약 10 cm'], answer: '교실 문 높이는 약 2 m' },
      { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '한 걸음이 50 cm이면 4걸음은 ____ m예요.', answer: '2' },
      { type: 'choice', prompt: '길이가 1 m인 것에 ○ 하세요.', options: ['20 cm씩 4번', '20 cm씩 5번', '20 cm씩 6번'], answer: '20 cm씩 5번' },
      { type: 'short', prompt: '내 한 걸음과 한 뼘이 몇 cm쯤인지 짐작해 쓰고, 1 m에 몇 번이 들어갈지 써 보세요.' },
    ],
    easy: { note: '1 m는 100 cm예요. 기준 길이를 이어 100 cm가 되는지 세어 보세요.', items: [
      wsTable('기준 길이로 1 m를 만들려면 몇 번이 필요한지 쓰세요.', ['기준 길이', '1 m가 되는 횟수'], [['한 걸음 50 cm', '2번'], ['손바닥 너비 10 cm', '']], '10번'),
      { type: 'choice', prompt: '교실 문 높이를 어림할 때 알맞은 단위에 ○ 하세요.', options: ['cm', 'm'], answer: 'm' },
      { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '50 cm + 50 cm = ____ cm = 1 m', answer: '100' },
      { type: 'short', prompt: '교실에서 1 m쯤 되는 것을 하나 찾아 써 보세요.' },
    ] },
  },
  diff: {
    easy: '처음 뛰는 크기가 50 cm로 맞춰져 있고 닿은 수가 보여요. 카드는 맞으면 바로 이어져요.',
    base: '한 번 뛰는 크기가 10 cm에서 시작해서 스스로 바꾸어 뛰어요.',
    challenge: '더 해 보기(100 cm씩 3번)와, 알맞은 어림 문장을 고르는 문항까지 해요.',
  },
  notes: '자주 보이는 어려움: ① 기준 길이를 몇 번 이은 것인지 세지 않고 눈대중으로 말한다 → 20, 40, 60처럼 이어 센다. ② 어림한 길이에 알맞은 단위를 고르지 못한다 → 두 팔 벌린 길이와 견준다. ③ 몸의 길이는 사람마다 다름을 잊는다 → 어림한 값은 정확한 값이 아니라 대략적인 크기임을 말해 준다. 걸음·뼘의 길이는 교사가 정해 준 값(50 cm, 20 cm)을 쓰며 실제 학생의 몸을 재어 기록하지는 않는다.',
}));

// ───────────────────────────── 8차시 (core · representation) ─────────────────────────────
L.push(lesson(8, {
  title: '수직선 점이 약 몇 m인지 어림하기',
  objective: '5 cm, 10 cm 단위로 표시된 길이가 몇 m에 가까운지 어림하여 약 몇 m로 말하고, 기준 길이의 몇 배로 긴 길이를 어림할 수 있다.',
  desc: 'a long paper measuring tape with a small bird perched near the three meter mark while children guess the length', text: '약 몇 m일까?',
  layers: [{ motif: 'house', x: 100, y: 214, color: 'sky' }, { motif: 'bird', x: 330, y: 150 }, { motif: 'tree', x: 400, y: 216 }],
  intro: ['"줄자의 점이 285 cm에 있어요. 정확히 말하지 않고 약 몇 m라고 말한다면 얼마일까요?" 285 cm가 200 cm와 300 cm 가운데 어느 쪽에 더 가까운지 말하게 한다. "가까운 큰 눈금으로 말하면 약 몇 m가 돼요."라고 알려 주고 활동 1로 이어 간다.',
    '정확히 재지 않고도 "약 몇 m"라고 말해 본 적이 있나요? 예를 들어 이야기해 봐요.'],
  acts: [
    act('a1', '활동 1. 가까운 m로 어림하기', 'numberline', '수직선의 점이 어느 큰 눈금(m)에 더 가까운지 보고 약 몇 m인지 골라요.',
      '"285 cm는 200 cm와 300 cm 가운데 어디에 더 가까워요?" 300 cm까지 15 cm, 200 cm까지 85 cm라고 거리를 견주어 말하게 한다. 140 cm를 약 2 m로 올림하는 학생에게는 100 cm와 200 cm의 한가운데(150 cm)보다 작은지 큰지 보게 한다.',
      RDL(400, 100, 20), [
        rd('점이 가리키는 길이는 약 몇 m인가요?', 285, ['약 2 m', '약 3 m', '약 4 m'], 1, 0.2, { conclude: '285 cm는 300 cm까지 15 cm, 200 cm까지 85 cm라서 약 3 m예요.' }, { question: '점이 가리키는 길이에 가장 가까운 m를 고르세요.' }),
        rd('점이 가리키는 길이는 약 몇 m인가요? 가까운 쪽으로 골라요.', 140, ['약 1 m', '약 2 m'], 0, 0.22, null, { question: '점이 가리키는 길이에 가장 가까운 m를 고르세요.' }),
        rd('점이 가리키는 길이는 약 몇 m인가요? 한가운데보다 큰지 작은지 봐요.', 175, ['약 1 m', '약 2 m'], 1, 0.25, { conclude: '175 cm는 100 cm와 200 cm의 한가운데(150 cm)보다 커서 200 cm에 더 가까워요.' }, { question: '점이 가리키는 길이에 가장 가까운 m를 고르세요.' }),
      ]),
    act('a2', '활동 2. 기준 길이의 몇 배로 어림하기', 'numberline', '문 높이(2 m)나 한 걸음(50 cm) 같은 기준 길이를 몇 번 이으면 긴 길이가 되는지 뛰어서 어림해요.',
      '"칠판 긴 쪽이 문 높이의 2배쯤이면 약 몇 m일까요?" 2 m씩 2번 이은 길이를 말하게 한다. 문 높이의 3배를 3 m로 답하는 학생에게는 기준 길이가 1 m가 아니라 2 m였음을 다시 짚는다.',
      JPL(0, 600, 100, 2, 50, 200, 100, 0), [
        jmp('칠판 긴 쪽이 교실 문 높이(2 m)의 2배쯤이에요. 2 m씩 2번 뛰어 약 몇 m인지 어림해 보세요.', 200, { count: 2 }, 0.2, { conclude: '2 m씩 2번이면 4 m예요. 칠판 긴 쪽은 약 4 m예요.' }),
        jmp('복도 폭이 교실 문 높이(2 m)의 3배쯤이에요. 2 m씩 3번 뛰어 보세요.', 200, { count: 3 }, 0.25),
        jmp('한 걸음이 약 50 cm예요. 칠판 긴 쪽을 재었더니 8걸음이었어요. 50 cm씩 8번 뛰어 보세요.', 50, { count: 8 }, 0.28, { conclude: '50 cm씩 8번이면 400 cm, 곧 약 4 m예요.' }),
      ]),
    act('a3', '활동 3. 어림한 길이 차례로 놓기', 'story', '어림한 길이를 읽고 짧은 것부터 차례대로 칸에 놓아요.',
      '"약 15 cm와 약 2 m 중 어느 쪽이 더 짧아요?" 단위가 다르면 같은 단위로 바꾸어 견주게 한다. 약 30 m와 약 200 cm를 숫자만 보고 200이 크다고 하는 학생에게는 200 cm가 2 m임을 말해 준다.',
      SL, [
        ord('물건의 길이를 짧은 것부터 차례로 놓아 보세요.', ['연필 약 15 cm', '책상 높이 약 70 cm', '교실 문 높이 약 2 m', '복도 길이 약 30 m'], 0.2,
          ['단위가 cm와 m로 섞여 있으면 먼저 같은 단위로 바꾸어 견주어요.', '1 m는 100 cm예요. 약 2 m는 약 200 cm와 같아요.', '연필(15 cm) → 책상 높이(70 cm) → 교실 문 높이(2 m) → 복도 길이(30 m) 차례예요.']),
        ord('다음 길이를 짧은 것부터 차례로 놓아 보세요.', ['칠판 긴 쪽 약 3 m', '교실 짧은 쪽 약 6 m', '운동장 건너 약 60 m', '트랙 한 바퀴 약 200 m'], 0.25,
          ['모두 m로 쓰여 있으니 수를 견주어요.', '3, 6, 60, 200의 크기를 견주어 보세요.', '칠판(3 m) → 교실 짧은 쪽(6 m) → 운동장 건너(60 m) → 트랙 한 바퀴(200 m) 차례예요.']),
        ord('몸의 기준 길이로 잰 것을 짧은 것부터 차례로 놓아 보세요.', ['한 뼘 20 cm씩 3번', '한 걸음 50 cm씩 3번', '한 걸음 50 cm씩 5번', '한 팔 1 m씩 3번'], 0.3,
          ['기준 길이와 횟수를 곱해 각각 몇 cm인지 구해요.', '20 cm가 3번이면 60 cm, 50 cm가 3번이면 150 cm예요. 나머지도 구해 견주어요.', '60 cm → 150 cm → 250 cm → 300 cm 차례예요.']),
      ]),
  ],
  wrap: ['"약 몇 m라고 어림할 때는 어느 큰 눈금에 더 가까운지 보면 돼요. 140 cm와 160 cm는 각각 약 몇 m일까요?" 한가운데(150 cm)를 기준으로 가르는 것을 말하게 한다. 출구 3번을 틀린 학생은 3 m 90 cm를 약 3 m로 말했는지 살펴 4 m에 가까움을 수직선으로 보여 준다.',
    [{ type: 'tool', tool: 'numberline', options: { mode: 'read', min: 0, max: 300, step: 100, sub: 10, labels: 'major', marks: [190], choices: ['약 1 m', '약 2 m'], question: '점이 가리키는 길이에 가장 가까운 m를 고르세요.' }, prompt: '줄자의 점은 약 몇 m에 있는지 가까운 쪽으로 골라 보세요.', target: { pick: 1 }, difficulty: 0.2 },
      { type: 'choice', prompt: '2 m 10 cm는 약 몇 m인가요?', options: ['약 1 m', '약 2 m', '약 3 m'], answer: 1, difficulty: 0.2, explain: '2 m 10 cm는 200 cm에서 10 cm 더 간 길이라서 약 2 m예요.' },
      { type: 'choice', prompt: '3 m 90 cm인 끈은 약 몇 m인가요?', options: ['약 3 m', '약 4 m'], answer: 1, difficulty: 0.25, explain: '3 m 90 cm는 400 cm에서 10 cm 모자라서 약 4 m예요.' }]],
  ws: {
    title: '약 몇 m 어림하기',
    items: [
      { type: 'figure', prompt: '점이 가리키는 길이는 약 몇 m인지 쓰세요.', tool: 'numberline', wide: true, figures: [
        { options: { mode: 'read', min: 0, max: 300, step: 100, sub: 10, labels: 'major', marks: [190] }, caption: '약 ___ m' },
        { options: { mode: 'read', min: 0, max: 300, step: 100, sub: 10, labels: 'major', marks: [270] }, caption: '약 ___ m' }], answer: '약 2 m, 약 3 m' },
      { type: 'choice', prompt: '2 m 90 cm는 약 몇 m인가요? ○ 하세요.', options: ['약 2 m', '약 3 m'], answer: '약 3 m' },
      { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '문 높이 2 m의 3배쯤이면 약 ____ m예요.', answer: '6' },
      { type: 'choice', prompt: '짧은 것부터 차례로 쓴 것에 ○ 하세요.', options: ['연필, 교실 문, 복도', '복도, 교실 문, 연필', '교실 문, 연필, 복도'], answer: '연필, 교실 문, 복도' },
      { type: 'short', prompt: '정확히 재지 않고 약 몇 m라고 어림해 본 경험을 써 보세요.' },
    ],
    easy: { note: '점이 어느 큰 눈금(100, 200, 300)에 더 가까운지 보고 약 몇 m인지 말해요.', items: [
      { type: 'figure', prompt: '점이 가리키는 길이는 약 몇 m인지 쓰세요.', tool: 'numberline', wide: true, figures: [
        { options: { mode: 'read', min: 0, max: 200, step: 100, sub: 10, labels: 'major', marks: [110] }, caption: '약 ___ m' }], answer: '약 1 m' },
      { type: 'choice', prompt: '3 m 10 cm는 약 몇 m인가요?', options: ['약 3 m', '약 4 m'], answer: '약 3 m' },
      { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '2 m씩 2번 이으면 약 ____ m예요.', answer: '4' },
      { type: 'short', prompt: '교실 문 높이는 약 몇 m인지 써 보세요.' },
    ] },
  },
  diff: {
    easy: '수직선에 큰 눈금 숫자가 모두 보이고, 처음에 뛰는 크기가 기준 길이(2 m)로 맞춰져 있어요.',
    base: '큰 눈금 숫자만 보이고 한 번 뛰는 크기를 스스로 바꾸어 뛰어요.',
    challenge: '양 끝 숫자만 보여서 어느 큰 눈금에 가까운지 스스로 세어 어림해요.',
  },
  notes: '자주 보이는 어려움: ① 140 cm처럼 한가운데보다 작은 길이를 약 2 m로 올림한다 → 100 cm와 200 cm의 한가운데(150 cm)를 기준으로 삼는다. ② 기준 길이를 1 m로 착각하고 문 높이의 3배를 3 m로 쓴다 → 기준 길이가 2 m였다. ③ 약 30 m와 약 200 cm를 숫자만 보고 견준다 → 단위를 같게 바꾼다. 어림한 값에는 약을 붙이고 정확한 값과 다르다는 것을 알게 한다.',
}));

// ───────────────────────────── 9차시 (core · application) ─────────────────────────────
L.push(lesson(9, {
  title: '기준 길이로 어림해서 생활 문제 풀기',
  objective: '기준이 되는 길이의 몇 배로 긴 길이를 어림하고, 어림해도 되는 때와 정확히 재야 하는 때를 가려 생활 속 문제를 풀 수 있다.',
  desc: 'a classroom with a tall paper door next to a long blackboard and children estimating its width with a ribbon', text: '어림해서 문제 풀기',
  layers: [{ motif: 'house', x: 110, y: 214, color: 'buttercup' }, { motif: 'flower', x: 250, y: 226 }, { motif: 'tree', x: 390, y: 216, color: 'mint' }],
  intro: ['"문 높이가 2 m라면 문 옆의 칠판 긴 쪽은 문 높이의 몇 배쯤일까요?" 눈으로 견주어 배수를 말하게 하고, 그 배수만큼 2 m를 이은 길이를 약 몇 m로 어림하게 한다. "정확한 값은 재어 봐야 알지만, 어림해도 크기가 어느 정도인지 알 수 있어요."라고 말해 준다.',
    '우리 반 칠판의 긴 쪽이 문 높이의 몇 배쯤인지 눈으로 견주어 짝에게 말해 봐요.'],
  acts: [
    act('a1', '활동 1. 기준 길이로 어림한 값 짝짓기', 'mindmap', '기준 길이를 몇 번 이은 길이가 약 몇 m인지 이어요.',
      '"문 높이 2 m의 2배는 약 몇 m일까요?" 2 m씩 두 번 이어 4 m가 됨을 말하게 한다. 한 걸음 50 cm의 10배를 50 m라고 답하는 학생에게는 50 cm씩 10번이 500 cm임을 수직선에서 이어 센다.',
      ML('match', '기준 길이로 어림하기'), [
        match('기준 길이를 몇 번 이은 길이와 어림한 값을 이어 보세요.', [['문 높이 2 m의 약 2배', '약 4 m'], ['한 걸음 50 cm의 약 10배', '약 5 m'], ['1 m 막대의 약 6개 길이', '약 6 m']], ['약 40 m', '약 3 m'], 0.22,
          ['기준 길이와 횟수를 곱한 길이를 cm로 구하고 m로 바꿔요.', '50 cm씩 10번은 500 cm예요. 100 cm가 몇 개 들어 있는지 세어 보세요.', '문 높이 2 m의 2배는 4 m, 한 걸음 50 cm의 10배는 500 cm = 5 m, 1 m 막대 6개는 6 m예요.']),
        match('상황과 어림한 길이를 이어 보세요.', [['교실 짧은 쪽이 문 높이의 약 3배', '약 6 m'], ['복도 폭이 한 걸음(50 cm)의 약 8배', '약 4 m'], ['운동장 한 바퀴가 100 m씩 약 2번', '약 200 m']], ['약 20 m', '약 16 m'], 0.28,
          ['기준 길이에 횟수를 곱해서 어림한 길이를 구해요. 단위를 바꿀 때 100 cm가 1 m임을 떠올려요.', '50 cm씩 8번은 400 cm예요. 400 cm는 몇 m일까요?', '2 m의 3배는 6 m, 50 cm의 8배는 400 cm = 4 m, 100 m씩 2번은 200 m예요.']),
        pick('길이가 3 m가 되는 것을 모두 골라 보세요.', '3 m', [['1 m 막대 3개를 이은 길이', 1], ['50 cm씩 6번', 1], ['20 cm씩 10번', 0], ['300 cm', 1], ['2 m 90 cm', 0]], 0.25,
          ['각 길이를 cm로 바꾸어 300 cm와 같은지 견주어 봐요.', '20 cm씩 10번은 200 cm예요. 2 m 90 cm는 300 cm보다 10 cm 짧아요.', '1 m 막대 3개, 50 cm씩 6번, 300 cm가 3 m예요. 20 cm씩 10번은 2 m, 2 m 90 cm는 290 cm예요.']),
      ]),
    act('a2', '활동 2. 이어 붙인 길이 어림하기', 'numberline', '같은 길이를 여러 번 이은 길이를 수직선에서 뛰어 구해요.',
      '"장난감 기차 한 칸이 50 cm인데 6칸이면 몇 m일까요?" 50 cm씩 6번이 300 cm, 곧 3 m임을 말하게 한다. 한 번에 150 cm씩 뛰는 문항에서 두 번이 아니라 한 번만 뛰고 150 cm에서 멈추는 학생에게는 필요한 횟수를 다시 읽게 한다.',
      JPL(0, 400, 100, 2, 50, 50, 50, 0), [
        jmp('장난감 기차 한 칸이 약 50 cm예요. 6칸을 이어 붙이면 몇 m일까요? 50 cm씩 6번 뛰어 보세요.', 50, { count: 6 }, 0.22),
        jmp('리본을 1 m 50 cm씩 2번 잘라 쓰려고 해요. 리본은 모두 몇 m가 필요할까요? 150 cm씩 2번 뛰어 보세요.', 150, { count: 2 }, 0.28),
        jmp('줄넘기 줄이 2 m예요. 줄 2개를 이으면 몇 m일까요? 200 cm씩 2번 뛰어 보세요.', 200, { count: 2 }, 0.25, { conclude: '2 m씩 2번 이으면 4 m예요.' }),
      ]),
    act('a3', '활동 3. 어림해도 되는 때 가려내기', 'mindmap', '어림해서 말해도 되는 때와 정확히 재야 하는 때를 나누어요.',
      '"유리창에 맞게 유리를 주문할 때도 약 몇 m라고 말해도 될까요?" 크기가 꼭 맞아야 하는 일은 정확히 재야 한다고 말하게 한다. 운동장이 몇 m쯤인지 말할 때도 꼭 재야 한다고 하는 학생에게는 어림해도 대략의 크기를 알 수 있음을 짚는다.',
      ML('sort', '어림'), [
        srt('어림해도 되는 일과 정확히 재야 하는 일로 나누어 보세요.', '어림', { '어림해도 돼요': ['교실이 몇 m쯤인지 말하기', '복도에서 달릴 거리 짐작하기', '운동장 한 바퀴가 몇 m쯤인지 말하기'], '정확히 재야 해요': ['선물 상자에 맞는 포장지 자르기', '유리창에 맞는 유리 주문하기', '책상 위에 깔 유리판 주문하기'] }, 0.22,
          ['그 일을 한 뒤에 조금 다르면 문제가 되는지 생각해 봐요.', '딱 맞아야 물건이 들어가는 일은 정확히 재야 해요. 크기가 대충 어느 정도인지만 알면 되는 일은 어림해도 돼요.', '교실 길이, 달릴 거리, 운동장 한 바퀴는 어림해도 되고 포장지, 유리창, 유리판은 정확히 재야 해요.'],
          { conclude: '꼭 맞아야 하는 일은 정확히 재고, 크기를 대강 아는 것이면 충분한 일은 어림해요.' }),
        pick('어림해서 말해도 되는 때를 모두 골라 보세요.', '어림해도 돼요', [['학교에서 집까지 거리를 말할 때', 1], ['유리창 크기에 맞춰 유리를 주문할 때', 0], ['교실 긴 쪽이 몇 m쯤인지 말할 때', 1], ['옷감을 딱 맞게 자를 때', 0], ['미끄럼틀 높이가 얼마쯤인지 말할 때', 1]], 0.25,
          ['대충 크기를 알려 주기만 하면 되는지, 꼭 맞아야 하는지 가려 봐요.', '맞추어 자르거나 주문하는 일은 조금만 달라도 안 맞아요. 크기만 말하는 일은 어림해도 돼요.', '집까지 거리, 교실 긴 쪽, 미끄럼틀 높이는 어림해도 되고 유리 주문과 옷감 자르기는 정확히 재야 해요.']),
        srt('길이에 약을 붙이는 것과 붙이지 않는 것으로 나누어 보세요.', '약', { '약을 붙여요': ['눈대중으로 짐작한 길이', '한 걸음으로 어림한 길이', '두 팔을 벌려 본 길이'], '약을 붙이지 않아요': ['줄자로 잰 길이', '눈금을 읽어 쓴 길이', '재어서 기록한 길이'] }, 0.28,
          ['재어서 알아낸 길이인지, 짐작해서 말한 길이인지 가려 봐요.', '재어서 눈금을 읽은 길이는 정확한 값이에요. 짐작한 길이에는 약이라는 말을 붙여요.', '눈대중, 한 걸음, 두 팔로 어림한 길이에는 약을 붙이고 줄자로 잰 길이는 붙이지 않아요.']),
      ]),
  ],
  wrap: ['"어림해서 말할 때는 길이 앞에 무슨 말을 붙이나요? 정확히 재야 하는 때는 언제일까요?" 약이라는 말과 꼭 맞아야 하는 일을 짝에게 말하게 한다. 출구 3번을 틀린 학생은 기준 길이가 2 m인지 1 m인지 구분했는지 다음 시간 시작에서 살핀다.',
    [{ type: 'choice', prompt: '어림한 길이를 말할 때 길이 앞에 붙이는 말은 무엇인가요?', options: ['정확히', '약', '꼭'], answer: 1, difficulty: 0.1, explain: '재지 않고 짐작한 길이는 약을 붙여 말해요.' },
      { type: 'tool', tool: 'numberline', options: { mode: 'jump', min: 0, max: 400, step: 100, sub: 2, labels: 'major', hopStep: 50, hopSize: 50, fixedFrom: 0 }, prompt: '한 걸음이 약 50 cm예요. 5걸음은 약 몇 cm일까요? 50 cm씩 뛰어 보세요.', target: { from: 0, size: 50, count: 5 }, difficulty: 0.22 },
      { type: 'choice', prompt: '문 높이 2 m의 약 3배는 약 몇 m인가요?', options: ['약 5 m', '약 6 m', '약 23 m'], answer: 1, difficulty: 0.22, explain: '2 m씩 3번 이으면 6 m예요.' }]],
  ws: {
    title: '어림해서 문제 풀기',
    items: [
      wsTable('기준 길이를 몇 번 이은 길이가 약 몇 m인지 쓰세요.', ['기준 길이', '횟수', '약 몇 m'], [['한 걸음 50 cm', '8번', ''], ['문 높이 2 m', '3번', ''], ['1 m 막대', '5번', '']], '약 4 m, 약 6 m, 약 5 m'),
      { type: 'choice', prompt: '정확히 재야 하는 일에 ○ 하세요.', options: ['교실 긴 쪽이 몇 m쯤인지 말하기', '창문에 꼭 맞는 유리 주문하기'], answer: '창문에 꼭 맞는 유리 주문하기' },
      { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '한 걸음이 50 cm일 때 6걸음은 약 ____ m예요.', answer: '3' },
      { type: 'choice', prompt: '길이가 3 m인 것에 ○ 하세요.', options: ['1 m 막대 3개를 이은 길이', '1 m 막대 2개를 이은 길이'], answer: '1 m 막대 3개를 이은 길이' },
      { type: 'short', prompt: '어림한 길이와 줄자로 잰 길이가 다르면 어떻게 하면 좋을지 써 보세요.' },
    ],
    easy: { note: '기준 길이를 몇 번 이으면 되는지 세어 보세요. 100 cm가 1 m예요.', items: [
      wsTable('기준 길이를 몇 번 이은 길이가 약 몇 m인지 쓰세요.', ['기준 길이', '횟수', '약 몇 m'], [['한 걸음 50 cm', '4번', ''], ['문 높이 2 m', '2번', '']], '약 2 m, 약 4 m'),
      { type: 'choice', prompt: '어림해도 되는 일에 ○ 하세요.', options: ['교실이 몇 m쯤인지 말하기', '유리를 꼭 맞게 주문하기'], answer: '교실이 몇 m쯤인지 말하기' },
      { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '1 m 막대 4개를 이으면 약 ____ m예요.', answer: '4' },
      { type: 'short', prompt: '어림한 길이 앞에 붙이는 말을 써 보세요.' },
    ] },
  },
  diff: {
    easy: '카드가 맞으면 바로 이어지고, 수직선에는 닿은 수가 보여요.',
    base: '카드를 스스로 이어야 맞는지 알 수 있어요. 수직선은 닿은 수가 보이지 않아요.',
    challenge: '수직선의 큰 눈금 숫자가 양 끝만 보이고, 한 번에 뛰는 크기가 150 cm처럼 큰 문항도 있어요.',
  },
  notes: '자주 보이는 어려움: ① 한 걸음 50 cm의 10배를 50 m라고 쓴다 → 50 cm씩 10번이 500 cm이다. ② 어림해도 되는 때와 정확히 재야 하는 때를 구분하지 못한다 → 꼭 맞아야 하는 일인지 묻는다. ③ 어림한 값에 약을 붙이지 않는다 → 재지 않고 짐작한 길이에는 약을 붙인다. 이 차시는 기준 길이를 학생이 직접 재어 정하지 않고 교사가 준 값(2 m, 50 cm)을 쓴다.',
}));

// ───────────────────────────── 10차시 (core · concept) ─────────────────────────────
L.push(lesson(10, {
  title: '길이를 이어 붙일 때 m는 m끼리, cm는 cm끼리 더하기',
  objective: 'm와 cm로 쓴 두 길이의 합을 m는 m끼리, cm는 cm끼리 더해 구하고, cm의 합이 100 cm를 넘으면 1 m로 바꾸어 쓸 수 있다.',
  desc: 'two paper ribbons joined end to end on a table with a long measuring tape running beneath them', text: '이어 붙이면 얼마?',
  layers: [{ motif: 'house', x: 100, y: 214, color: 'rose' }, { motif: 'tree', x: 390, y: 216 }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"리본 1 m 20 cm와 리본 30 cm를 이어 붙이면 모두 몇 cm가 될까요?" 수직선에서 120 cm에서 30 cm 더 가는 모습을 그려 보게 한다. "m는 m끼리, cm는 cm끼리 더하면 1 m 50 cm예요."라고 말해 두고, 활동 1에서 수직선으로 확인해 보자고 한다.',
    '두 개의 끈을 이어 붙여 본 적이 있나요? 이어 붙이면 길이가 어떻게 되는지 짝에게 말해 봐요.'],
  acts: [
    act('a1', '활동 1. 수직선에서 더 가기', 'numberline', '처음 길이에서 더할 길이만큼 수직선에서 앞으로 뛰어, 이어 붙인 길이를 구해요.',
      '"1 m 20 cm에서 40 cm를 더 가면 어디에 닿을까요?" 120 cm에서 160 cm까지 가는 칸 수를 세게 한다. 1 m 80 cm와 50 cm를 더해 1 m 130 cm라고 쓰는 학생에게는 cm가 100을 넘으면 1 m로 올려 2 m 30 cm가 된다고 알려 준다.',
      JPL(100, 300, 20, 2, 10, 10, 10), [
        jmp('리본이 1 m 20 cm(120 cm) 있어요. 40 cm를 더 이으면 모두 몇 cm일까요? 수직선에서 뛰어 보세요.', null, { end: 160 }, 0.2, { conclude: '120 cm에서 40 cm를 더 가면 160 cm, 곧 1 m 60 cm예요.' }, 120),
        jmp('끈이 1 m 50 cm(150 cm) 있어요. 30 cm를 더 이으면 모두 몇 cm일까요?', null, { end: 180 }, 0.22, null, 150),
        jmp('테이프가 1 m 80 cm(180 cm) 있어요. 50 cm를 더 이으면 모두 몇 m 몇 cm일까요?', null, { end: 230 }, 0.3, { conclude: '180 cm에서 50 cm를 더하면 230 cm, 곧 2 m 30 cm예요. cm의 합이 100을 넘으면 1 m로 올려요.' }, 180),
      ]),
    act('a2', '활동 2. 길이의 합 짝짓기', 'mindmap', '두 길이를 더한 길이를 이어요. m는 m끼리, cm는 cm끼리 더해요.',
      '"1 m 20 cm + 2 m 30 cm에서 m끼리는 얼마예요? cm끼리는 얼마일까요?" 1 + 2 = 3 m, 20 + 30 = 50 cm로 3 m 50 cm가 됨을 말하게 한다. 1 m 70 cm + 50 cm에서 cm끼리 더한 120 cm를 그대로 써 1 m 120 cm라고 쓰는 학생에게는 100 cm가 1 m임을 떠올리게 한다.',
      ML('match', '길이의 합'), [
        match('두 길이의 합을 이어 보세요. m는 m끼리, cm는 cm끼리 더해요.', [['1 m 20 cm + 2 m 30 cm', '3 m 50 cm'], ['2 m 15 cm + 1 m 40 cm', '3 m 55 cm'], ['1 m 10 cm + 3 m 20 cm', '4 m 30 cm']], ['3 m 35 cm', '4 m 3 cm'], 0.22,
          ['식마다 m끼리 더하고 cm끼리 더한 뒤, 두 합을 이어 써요.', '2 m 15 cm + 1 m 40 cm는 m끼리 3, cm끼리 55예요. 함정 카드는 cm 합을 잘못 구한 것이에요.', '1 m 20 cm + 2 m 30 cm = 3 m 50 cm, 2 m 15 cm + 1 m 40 cm = 3 m 55 cm, 1 m 10 cm + 3 m 20 cm = 4 m 30 cm예요.']),
        match('길이에 cm만 더해 보세요. 합을 이어 보세요.', [['1 m 40 cm + 20 cm', '1 m 60 cm'], ['2 m 5 cm + 30 cm', '2 m 35 cm'], ['3 m + 45 cm', '3 m 45 cm']], ['1 m 6 cm', '2 m 8 cm'], 0.25,
          ['m는 그대로 두고 cm끼리만 더해요.', '2 m 5 cm + 30 cm에서 5 + 30은 35예요. 함정 카드는 05와 30을 잘못 이어 쓴 거예요.', '1 m 40 cm + 20 cm = 1 m 60 cm, 2 m 5 cm + 30 cm = 2 m 35 cm, 3 m + 45 cm = 3 m 45 cm예요.']),
        match('cm의 합이 100 cm를 넘어요. 1 m로 올려서 이어 보세요.', [['1 m 70 cm + 50 cm', '2 m 20 cm'], ['2 m 80 cm + 40 cm', '3 m 20 cm'], ['1 m 60 cm + 70 cm', '2 m 30 cm']], ['2 m 120 cm', '3 m 120 cm'], 0.3,
          ['cm끼리 더한 합이 100이 넘는지 보고, 넘으면 100 cm를 1 m로 올려요.', '1 m 70 cm + 50 cm에서 70 + 50 = 120 cm예요. 120 cm는 1 m 20 cm와 같아요.', '1 m 70 cm + 50 cm = 2 m 20 cm, 2 m 80 cm + 40 cm = 3 m 20 cm, 1 m 60 cm + 70 cm = 2 m 30 cm예요.'],
          { conclude: 'cm끼리 더한 합이 100 cm를 넘으면 100 cm를 1 m로 바꾸어 m 쪽에 더해요.' }),
      ]),
    act('a3', '활동 3. 합이 같은 식 찾기', 'mindmap', '길이의 합이 정해진 값이 되는 식을 골라 나누어요.',
      '"합이 4 m인 식은 어떻게 찾을까요?" 모든 식의 합을 구해 4 m와 견주게 한다. 2 m + 1 m 90 cm를 3 m 90 cm로 구하고도 4 m라고 반올림하는 학생에게는 10 cm가 모자라 4 m가 아님을 짚는다.',
      ML('pick', '합이 같은 식'), [
        pick('합이 4 m인 식을 모두 골라 보세요.', '합이 4 m', [['1 m 50 cm + 2 m 50 cm', 1], ['2 m + 1 m 90 cm', 0], ['3 m 20 cm + 80 cm', 1], ['1 m 20 cm + 2 m 70 cm', 0], ['2 m 40 cm + 1 m 60 cm', 1]], 0.25,
          ['식마다 합을 구해 4 m(400 cm)와 견주어 봐요.', 'cm끼리 더해 100이 되면 1 m가 늘어나요. 합이 4 m보다 10 cm 모자란 식도 있어요.', '1 m 50 cm + 2 m 50 cm, 3 m 20 cm + 80 cm, 2 m 40 cm + 1 m 60 cm가 4 m예요.']),
        srt('두 길이를 더했을 때 cm의 합이 100을 넘는 식과 넘지 않는 식으로 나누어 보세요.', 'cm의 합', { 'cm의 합이 100을 넘어요': ['1 m 60 cm + 70 cm', '2 m 90 cm + 20 cm', '1 m 55 cm + 1 m 55 cm'], 'cm의 합이 100을 넘지 않아요': ['1 m 20 cm + 50 cm', '2 m 30 cm + 40 cm', '1 m 10 cm + 2 m 80 cm'] }, 0.28,
          ['식마다 cm 부분끼리만 더해서 100과 견주어 봐요.', '60 + 70처럼 cm만 더한 값이 100보다 큰지 작은지 보면 돼요.', '60+70, 90+20, 55+55는 100을 넘고 20+50, 30+40, 10+80은 100을 넘지 않아요.']),
        pick('이어 붙인 길이가 2 m 50 cm가 되는 식을 모두 골라 보세요.', '2 m 50 cm', [['1 m + 1 m 50 cm', 1], ['2 m + 30 cm', 0], ['1 m 20 cm + 1 m 30 cm', 1], ['2 m 40 cm + 20 cm', 0], ['2 m 10 cm + 40 cm', 1]], 0.3,
          ['식마다 합을 구해 2 m 50 cm(250 cm)와 견주어요.', '2 m 40 cm + 20 cm는 cm가 100을 넘는지 확인해 보세요.', '1 m + 1 m 50 cm, 1 m 20 cm + 1 m 30 cm, 2 m 10 cm + 40 cm가 2 m 50 cm예요.']),
      ]),
  ],
  wrap: ['"길이를 더할 때 m끼리, cm끼리 따로 더하는 까닭은 무엇일까요?" 같은 단위끼리만 더할 수 있다고 말하게 한다. 출구 3번을 틀린 학생은 cm의 합이 100을 넘을 때 1 m로 올리는 것을 다음 시간 시작에서 수직선 칸으로 다시 해 본다.',
    [{ type: 'tool', tool: 'numberline', options: { mode: 'jump', min: 100, max: 300, step: 20, sub: 2, labels: 'major', hopStep: 10, hopSize: 10, fixedFrom: 140 }, prompt: '1 m 40 cm에 30 cm를 더하면 모두 몇 cm일까요? 수직선에서 뛰어 보세요.', target: { from: 140, end: 170 }, difficulty: 0.22 },
      { type: 'choice', prompt: '1 m 30 cm + 45 cm는 얼마인가요?', options: ['1 m 75 cm', '1 m 15 cm', '1 m 7 cm'], answer: 0, difficulty: 0.22, explain: 'cm끼리 30 + 45 = 75라서 1 m 75 cm예요.' },
      { type: 'choice', prompt: '2 m 60 cm + 70 cm는 얼마인가요?', options: ['2 m 130 cm', '3 m 30 cm', '3 m 3 cm'], answer: 1, difficulty: 0.3, explain: '60 + 70 = 130 cm이고 130 cm는 1 m 30 cm라서 2 m + 1 m 30 cm = 3 m 30 cm예요.' }]],
  ws: {
    title: '길이 더하기',
    items: [
      wsTable('두 길이의 합을 빈칸에 쓰세요.', ['덧셈', '합'], [['1 m 20 cm + 2 m 30 cm', ''], ['2 m 5 cm + 1 m 40 cm', ''], ['1 m 70 cm + 60 cm', '']], '3 m 50 cm, 3 m 45 cm, 2 m 30 cm'),
      { type: 'choice', prompt: '1 m 50 cm + 30 cm를 바르게 구한 것에 ○ 하세요.', options: ['1 m 80 cm', '1 m 53 cm', '2 m 30 cm'], answer: '1 m 80 cm' },
      { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '1 m 80 cm + 40 cm = 2 m ____ cm', answer: '20' },
      { type: 'choice', prompt: '합이 3 m인 식에 ○ 하세요.', options: ['1 m 40 cm + 1 m 60 cm', '1 m 40 cm + 1 m 50 cm'], answer: '1 m 40 cm + 1 m 60 cm' },
      { type: 'short', prompt: '길이를 더할 때 m끼리, cm끼리 더하는 까닭을 써 보세요.' },
    ],
    easy: { note: 'm는 m끼리, cm는 cm끼리 더해요. cm의 합이 100을 넘으면 1 m로 올려요.', items: [
      wsTable('두 길이의 합을 빈칸에 쓰세요.', ['덧셈', '합'], [['1 m + 30 cm', ''], ['1 m 20 cm + 40 cm', '']], '1 m 30 cm, 1 m 60 cm'),
      { type: 'choice', prompt: '2 m 10 cm + 20 cm는 얼마인가요?', options: ['2 m 30 cm', '2 m 12 cm'], answer: '2 m 30 cm' },
      { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '100 cm + 60 cm = ____ cm', answer: '160' },
      { type: 'short', prompt: '1 m 20 cm와 30 cm를 이어 붙인 길이를 써 보세요.' },
    ] },
  },
  diff: {
    easy: '수직선에서 뛸 때마다 닿은 수가 보이고, 카드는 맞으면 바로 이어져요.',
    base: '닿은 수가 보이지 않고 스스로 합을 구해 이어요.',
    challenge: 'cm의 합이 100을 넘어 1 m로 올려야 하는 식과 합이 같은 식 찾기까지 해요.',
  },
  notes: '자주 보이는 어려움: ① m와 cm를 한꺼번에 더한다(1 m 20 cm + 2 m 30 cm를 1 + 20 + 2 + 30으로) → m는 m끼리, cm는 cm끼리 따로 더한다. ② cm의 합이 100을 넘는데 1 m로 올리지 않는다(2 m 120 cm) → 100 cm는 1 m이다. ③ 2 m 5 cm + 30 cm에서 5와 30을 나란히 써 2 m 530 cm로 쓴다 → 5 + 30 = 35이다. 수직선 문항은 10 cm 간격으로 떨어지는 길이만 나온다.',
}));

// ───────────────────────────── 11차시 (wrap) ─────────────────────────────
L.push(lesson(11, {
  title: '길이를 빼는 문제와 길이 문제 정리하기',
  objective: 'm와 cm로 쓴 두 길이의 차를 m는 m끼리, cm는 cm끼리 빼서 구하고, 더하는 문제와 빼는 문제를 가려 생활 속 길이 문제를 풀 수 있다.',
  desc: 'a paper ribbon with one end cut off and a leftover piece lying beside a measuring tape on a table', text: '잘라 내면 얼마가 남을까?',
  layers: [{ motif: 'house', x: 100, y: 214, color: 'lavender' }, { motif: 'tree', x: 390, y: 216, color: 'mint' }, { motif: 'flower', x: 250, y: 226 }],
  intro: ['"끈 2 m 50 cm에서 70 cm를 잘라 냈어요. 남은 끈은 얼마일까요?" 수직선에서 250 cm에서 뒤로 70 cm 가는 모습을 그려 보게 한다. "m는 m끼리, cm는 cm끼리 빼면 되는데, cm가 모자라면 1 m를 100 cm로 바꾸어 와요."라고 말하고 활동 1로 이어 간다.',
    '끈이나 종이 띠를 잘라 낸 뒤 남은 길이를 어떻게 알 수 있을지 짝과 이야기해 봐요.'],
  acts: [
    act('a1', '활동 1. 수직선에서 뒤로 가기', 'numberline', '처음 길이에서 뺄 길이만큼 수직선에서 뒤로 뛰어 남은 길이를 구해요.',
      '"2 m 50 cm에서 70 cm를 빼면 어디에 닿을까요?" 250 cm에서 뒤로 7칸을 가서 180 cm에 닿음을 말하게 한다. 2 m 50 cm에서 70 cm를 뺄 때 50에서 70을 뺄 수 없다고 멈추는 학생에게는 1 m를 100 cm로 바꾸어 150 cm에서 70 cm를 빼게 한다.',
      JPL(100, 300, 20, 2, 10, 10, 10), [
        jmp('끈 2 m 50 cm(250 cm)에서 70 cm를 잘랐어요. 남은 끈은 몇 cm일까요? 수직선에서 뒤로 뛰어 보세요.', null, { end: 180 }, 0.22, { conclude: '250 cm에서 70 cm를 빼면 180 cm, 곧 1 m 80 cm가 남아요.' }, 250),
        jmp('테이프 2 m 10 cm(210 cm)에서 30 cm를 썼어요. 남은 테이프는 몇 cm일까요?', null, { end: 180 }, 0.22, null, 210),
        jmp('줄 3 m(300 cm)에서 1 m 40 cm를 잘라 냈어요. 남은 줄은 몇 m 몇 cm일까요?', null, { end: 160 }, 0.3, { conclude: '300 cm에서 140 cm를 빼면 160 cm, 곧 1 m 60 cm가 남아요.' }, 300),
      ]),
    act('a2', '활동 2. 길이의 차 짝짓기', 'mindmap', '두 길이의 차를 이어요. m는 m끼리, cm는 cm끼리 빼요.',
      '"3 m 60 cm − 1 m 20 cm에서 m끼리는 얼마예요? cm끼리는 얼마일까요?" 3 − 1 = 2 m, 60 − 20 = 40 cm로 2 m 40 cm가 됨을 말하게 한다. 2 m 20 cm − 50 cm에서 20 − 50을 50 − 20으로 바꾸어 빼는 학생에게는 2 m 20 cm를 1 m 120 cm로 바꾸어 빼게 한다.',
      ML('match', '길이의 차'), [
        match('두 길이의 차를 이어 보세요. m는 m끼리, cm는 cm끼리 빼요.', [['3 m 60 cm − 1 m 20 cm', '2 m 40 cm'], ['2 m 75 cm − 1 m 30 cm', '1 m 45 cm'], ['4 m − 1 m 50 cm', '2 m 50 cm']], ['2 m 60 cm', '1 m 55 cm'], 0.25,
          ['식마다 m끼리 빼고 cm끼리 뺀 뒤 두 차를 이어 써요. 4 m는 400 cm로 바꾸어도 돼요.', '4 m − 1 m 50 cm는 400 cm − 150 cm예요. 함정 카드는 cm 차를 잘못 구한 것이에요.', '3 m 60 cm − 1 m 20 cm = 2 m 40 cm, 2 m 75 cm − 1 m 30 cm = 1 m 45 cm, 4 m − 1 m 50 cm = 2 m 50 cm예요.']),
        match('cm가 모자라서 1 m를 100 cm로 바꾸어 빼야 해요. 차를 이어 보세요.', [['2 m 20 cm − 50 cm', '1 m 70 cm'], ['3 m 10 cm − 80 cm', '2 m 30 cm'], ['1 m 30 cm − 60 cm', '70 cm']], ['1 m 30 cm', '2 m 70 cm'], 0.3,
          ['cm끼리 뺄 수 없으면 1 m를 100 cm로 바꾸어 cm에 더한 뒤 빼요.', '2 m 20 cm는 1 m 120 cm와 같아요. 120 cm에서 50 cm를 빼 보세요.', '2 m 20 cm − 50 cm = 1 m 70 cm, 3 m 10 cm − 80 cm = 2 m 30 cm, 1 m 30 cm − 60 cm = 70 cm예요.'],
          { conclude: 'cm가 모자라면 1 m를 100 cm로 바꾸어 cm에 더한 뒤 빼요.' }),
        match('문제와 알맞은 식을 이어 보세요.', [['리본 2 m 30 cm에 1 m를 더 이었어요', '2 m 30 cm + 1 m'], ['끈 3 m에서 1 m 20 cm를 잘랐어요', '3 m − 1 m 20 cm'], ['줄넘기 줄 1 m 50 cm와 2 m 10 cm를 이었어요', '1 m 50 cm + 2 m 10 cm']], ['3 m + 1 m 20 cm'], 0.25,
          ['문제에서 더하는 일인지 빼는 일인지 먼저 가려요. 이어 붙이면 더하고, 잘라 내면 빼요.', '잘라 낸 문제에는 빼기 식, 이어 붙인 문제에는 더하기 식을 이어요. 함정 카드는 3 m를 더한 식이에요.', '2 m 30 cm에 1 m를 더 이은 것은 더하기, 3 m에서 잘라 낸 것은 빼기, 두 줄을 이은 것은 더하기예요.']),
      ]),
    act('a3', '활동 3. 길이 문제 가려내기', 'mindmap', '더하는 문제와 빼는 문제를 나누고, 결과가 같은 식을 골라요.',
      '"끈을 잘라 냈어요. 더할까요, 뺄까요?" 문제 속 낱말(이어, 잘라, 남은, 더)로 계산을 정하게 한다. 짧은 쪽보다 얼마나 더 긴지 구하는 문제를 더하기로 푸는 학생에게는 두 길이의 차를 구하는 문제임을 짚는다.',
      ML('sort', '길이 문제'), [
        srt('문제를 더하는 문제와 빼는 문제로 나누어 보세요.', '길이 문제', { '더하는 문제': ['두 끈을 이어 붙여요', '리본을 더 샀어요', '두 막대를 이어요'], '빼는 문제': ['끈을 잘라 냈어요', '남은 길이를 구해요', '짧은 쪽보다 얼마나 더 긴지 알아봐요'] }, 0.2,
          ['문제 속 낱말이 길이가 늘어나는 일인지 줄어드는 일인지 살펴요.', '이어 붙이거나 더 사는 일은 길이가 늘고, 잘라 내거나 남은 것을 구하는 일은 길이가 줄어요.', '이어 붙이기, 더 사기, 이어 놓기는 더하는 문제이고 잘라 내기, 남은 길이, 얼마나 더 긴지는 빼는 문제예요.']),
        pick('계산 결과가 1 m 50 cm인 식을 모두 골라 보세요.', '1 m 50 cm', [['1 m + 50 cm', 1], ['2 m − 50 cm', 1], ['3 m − 1 m 50 cm', 1], ['1 m + 15 cm', 0], ['2 m 50 cm − 1 m', 1]], 0.28,
          ['식마다 계산해서 150 cm가 되는지 견주어 봐요.', '1 m + 15 cm는 115 cm예요. 200 cm − 50 cm나 250 cm − 100 cm는 150 cm가 돼요.', '1 m + 50 cm, 2 m − 50 cm, 3 m − 1 m 50 cm, 2 m 50 cm − 1 m가 1 m 50 cm예요. 1 m + 15 cm는 115 cm예요.']),
        pick('계산 결과가 90 cm인 식을 모두 골라 보세요.', '90 cm', [['1 m − 10 cm', 1], ['2 m − 1 m 10 cm', 1], ['1 m 20 cm − 40 cm', 0], ['40 cm + 50 cm', 1], ['1 m + 10 cm', 0]], 0.3,
          ['식마다 계산해서 90 cm가 되는지 견주어 봐요. 1 m는 100 cm로 바꿔요.', '1 m 20 cm − 40 cm는 120 cm에서 40 cm를 빼요. 2 m − 1 m 10 cm는 200 cm − 110 cm예요.', '1 m − 10 cm, 2 m − 1 m 10 cm, 40 cm + 50 cm가 90 cm예요. 1 m 20 cm − 40 cm는 80 cm예요.']),
      ]),
  ],
  wrap: ['"길이 문제를 풀 때 더할지 뺄지는 문제 속 어떤 말을 보고 정하나요? 이 단원에서 새로 알게 된 것은 무엇인가요?" 이어·더·잘라·남은 같은 말을 짝에게 말하고, 1 m = 100 cm와 m끼리 cm끼리 계산한다는 것을 한 문장씩 정리하게 한다. 출구 3번을 틀린 학생은 cm가 모자랄 때 1 m를 바꾸어 오는 과정을 다음 시간 시작에서 수직선 칸으로 다시 본다.',
    [{ type: 'choice', prompt: '1 m 40 cm + 2 m 30 cm는 얼마인가요?', options: ['3 m 10 cm', '3 m 70 cm', '4 m 10 cm'], answer: 1, difficulty: 0.22, explain: 'm끼리 1 + 2 = 3, cm끼리 40 + 30 = 70이라서 3 m 70 cm예요.' },
      { type: 'tool', tool: 'numberline', options: { mode: 'jump', min: 100, max: 300, step: 20, sub: 2, labels: 'major', hopStep: 10, hopSize: 10, fixedFrom: 220 }, prompt: '끈 2 m 20 cm에서 70 cm를 쓰면 남는 끈은 몇 cm일까요? 수직선에서 뒤로 뛰어 보세요.', target: { from: 220, end: 150 }, difficulty: 0.28 },
      { type: 'choice', prompt: '3 m 50 cm − 1 m 20 cm는 얼마인가요?', options: ['2 m 70 cm', '4 m 70 cm', '2 m 30 cm'], answer: 2, difficulty: 0.25, explain: 'm끼리 3 − 1 = 2, cm끼리 50 − 20 = 30이라서 2 m 30 cm예요.' }]],
  ws: {
    title: '길이 더하고 빼기',
    items: [
      wsTable('계산해서 빈칸에 쓰세요.', ['식', '답'], [['3 m 60 cm − 1 m 20 cm', ''], ['2 m 20 cm − 50 cm', ''], ['1 m 70 cm + 1 m 40 cm', '']], '2 m 40 cm, 1 m 70 cm, 3 m 10 cm'),
      { type: 'choice', prompt: '끈 3 m에서 1 m를 잘랐어요. 남은 끈의 길이에 ○ 하세요.', options: ['2 m', '4 m', '1 m'], answer: '2 m' },
      { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '2 m − 50 cm = 1 m ____ cm', answer: '50' },
      { type: 'choice', prompt: '더하는 문제에 ○ 하세요.', options: ['리본 두 개를 이어 붙였어요', '끈을 잘라 냈어요'], answer: '리본 두 개를 이어 붙였어요' },
      { type: 'short', prompt: '이 단원에서 배운 길이 문제를 하나 만들어 쓰고, 식과 답도 써 보세요.' },
    ],
    easy: { note: 'm는 m끼리, cm는 cm끼리 계산해요. cm가 모자라면 1 m를 100 cm로 바꿔요.', items: [
      wsTable('계산해서 빈칸에 쓰세요.', ['식', '답'], [['2 m − 1 m', ''], ['1 m 50 cm − 20 cm', '']], '1 m, 1 m 30 cm'),
      { type: 'choice', prompt: '1 m 20 cm − 10 cm는 얼마인가요?', options: ['1 m 10 cm', '1 m 30 cm'], answer: '1 m 10 cm' },
      { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '200 cm − 50 cm = ____ cm', answer: '150' },
      { type: 'short', prompt: '끈 1 m에서 30 cm를 자르면 남는 끈은 몇 cm인지 써 보세요.' },
    ] },
  },
  diff: {
    easy: '수직선에서 뛸 때마다 닿은 수가 보이고, 카드는 맞으면 바로 이어져요.',
    base: '닿은 수가 보이지 않고 스스로 차를 구해 이어요.',
    challenge: 'cm가 모자라서 1 m를 바꾸어 빼는 식과, 결과가 같은 식 고르기까지 해요.',
  },
  notes: '자주 보이는 어려움: ① cm끼리 뺄 수 없을 때 큰 수에서 작은 수를 거꾸로 뺀다(20 − 50을 50 − 20으로) → 1 m를 100 cm로 바꾸어 빌려 온다. ② 문제에서 더할지 뺄지를 가리지 못한다 → 이어·더 / 잘라·남은 같은 말을 찾는다. ③ 길이의 차를 구하는 문제(얼마나 더 긴지)를 더하기로 푼다 → 두 길이를 견주어 큰 값에서 작은 값을 뺀다. 이 차시는 새 개념 없이 더하기와 빼기를 섞어 단원을 정리하며 수직선은 10 cm 간격으로 떨어지는 길이만 쓴다.',
}));

PaperLessons.registerUnit({
  id: UID, schema: 'edu-unit.v1', catalogUnit: CU,
  grade: 2, subject: '수학', unitTitle: UT,
  flow: '1학기에 cm로 길이를 재던 경험에서 출발해, 1~3차시는 100 cm를 1 m로 쓰는 새 단위를 수직선 뛰기와 줄자 읽기로 익히고 줄자로 재는 차례와 알맞은 단위를 정합니다. 4~6차시는 몇 m 몇 cm와 몇 cm를 서로 바꾸어 쓰고, 두 가지 방법으로 같은 길이를 나타내며, 길이를 견주어 차례로 놓습니다. 7~9차시는 한 뼘·한 걸음 같은 몸의 길이를 기준으로 1 m를 짐작하고, 기준 길이의 몇 배로 약 몇 m를 어림해 문제를 풉니다. 10~11차시는 m는 m끼리, cm는 cm끼리 길이를 더하고 빼는 방법을 수직선과 카드로 익히고, 생활 속 문제로 단원을 정리합니다.',
  refs: {},
  lessons: L,
});
})();
