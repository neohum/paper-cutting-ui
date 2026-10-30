/* 3학년 2학기 4. 분수와 소수 — 단원 파일(차시 11개, 기존 차시 없음).
 * 흐름: 색 테이프를 똑같이 접어 몇 분의 몇 말하기(1) → 수직선·띠에 분수 나타내기(2) → 분수만큼은 몇 cm인지, 분모·분자의 뜻(3)
 *      → 단위분수가 모여 1이 되고 1보다 커지는 모습, 진분수·가분수·대분수(4) → 가분수와 대분수를 수직선으로 오가기(5)
 *      → 남은 양을 대분수·가분수로 말하기(6) → 분모가 같은 분수·단위분수 크기 견주기(7) → 수직선에서 크기 견주고 부등호 쓰기(8)
 *      → 누가 더 많이 먹었나, 비교할 수 있는 경우(9) → 십분의 몇과 소수 한 자리 수(10) → 10칸 띠로 소수 나타내고 정리(11).
 * 1학기 g3-math-1-06(분수의 뜻·똑같이 나누기·단위분수)에서 다룬 똑같이 나누었는지 판단하기·피자 조각 놀이는 되풀이하지 않고, 이 단원은 분수 읽고 쓰기를
 * 수직선·분수만큼(몇 cm)으로 넓힌 뒤 진분수·가분수·대분수와 크기 비교, 소수 한 자리 수로 이어 간다.
 * 확인 필요: units-index 의 plan 에서 10·11차시 '십분의 몇인 분수와 이어 소수 한 자리 수'는 [4수01-12]로 달고, [4수01-14]는 단원 성취기준 목록에는 있으나 이 단원의 plan 주제가 아니라 달지 않았다.
 */
(function () {
const UID = 'g3-math-2-04', CU = 'g3-수학-2학기-4', UT = '4. 분수와 소수';
const two = (n) => String(n).padStart(2, '0');
const TAIL = ', with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.';
const ill = (desc, text, extra) => ({
  prompt: `Layered paper-cut illustration of ${desc}${TAIL}`,
  scene: { viewBox: [480, 270], layers: [
    { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 110, y: 52 }, { motif: 'hills', y: 206 },
    ...(extra || []), { motif: 'text', x: 240, y: 142, text, size: 22 },
  ] },
});
const lesson = (n, d) => ({
  id: `${UID}-${two(n)}`, schema: 'edu-lesson.v1', catalog: { unit: CU, lesson: n },
  grade: 3, subject: '수학', unitTitle: UT,
  title: d.title, objective: d.objective, standards: d.std, minutes: 40, formats: ['chromebook', 'projector', 'print'],
  illustration: ill(d.desc, d.text, d.layers),
  stages: [
    Object.assign({ id: 'intro', title: '도입', minutes: 7, teacher: d.intro[0], student: d.intro[1] }, d.demo ? { demo: d.demo } : {}),
    { id: 'main', title: '전개', minutes: 26, activities: d.acts },
    { id: 'wrapup', title: '정리', minutes: 7, teacher: d.wrap[0], exitTicket: [...d.wrap[1], { type: 'mood', prompt: '오늘 공부는 어땠나요?' }] },
  ],
  worksheet: d.ws, differentiation: d.diff, teacherNotes: d.notes,
});
const S9 = ['[4수01-09]'], S10 = ['[4수01-10]'], S11 = ['[4수01-11]'], S12 = ['[4수01-12]'];
const CARD = { easy: { live: true, instant: true }, base: {}, challenge: {} };
const FRL = { easy: { showTerms: true }, base: {}, challenge: {} };
const IT = (d, extra) => ({ difficulty: d, ...(extra ? { extra: true } : {}) });
// 분수 띠·피자 색칠 / 색칠된 그림을 보고 분수 쓰기
const fq = (prompt, shape, den, num, d, extra) => ({ prompt, toolOptions: { shape }, target: { den, num }, ...IT(d, extra) });
const fqr = (prompt, shape, den, num, d, extra) => ({ prompt, toolOptions: { shape }, target: { den, num }, reveal: 'after-check', ...IT(d, extra) });
const fw = (prompt, shape, n, colored, d, extra) => ({ prompt, toolOptions: { shape, write: true }, state: { n, colored }, target: { den: n, num: colored.length }, ...IT(d, extra) });
// 수직선: 점 놓기 / 점 읽고 고르기
const nlp = (prompt, o, points, d, extra, more) => ({ prompt, toolOptions: { names: ['가', '나', '다'], ...o }, target: { points }, ...IT(d, extra), ...(more || {}) });
const nlr = (prompt, o, mark, choices, pick, d, extra) => ({ prompt, toolOptions: { mode: 'read', marks: [mark], choices, ...o }, target: { pick }, ...IT(d, extra) });
const sortCards = (prompt, topic, slots, cards, d, extra) => ({ prompt, toolOptions: { topic, slots, cards: cards.map((c) => c[0]) },
  target: { sort: Object.fromEntries(slots.map((s) => [s, cards.filter((c) => c[1] === s).map((c) => c[0])])) }, ...IT(d, extra) });
const matchCards = (prompt, topic, pairs, spare, d, extra) => ({ prompt, toolOptions: { mode: 'match', topic, slots: pairs.map((p, i) => ({ id: `s${i + 1}`, label: p[0] })), cards: [...pairs.map((p) => p[1]), ...(spare || [])] },
  target: { match: Object.fromEntries(pairs.map((p, i) => [`s${i + 1}`, p[1]])) }, ...IT(d, extra) });
const pickCards = (prompt, topic, cards, right, d, extra) => ({ prompt, toolOptions: { mode: 'pick', topic, basket: '고른 카드', cards }, target: { pick: right }, ...IT(d, extra) });
const orderCards = (prompt, topic, steps, d, extra) => ({ prompt, toolOptions: { mode: 'order', topic, cards: steps.map((s) => ({ id: s, text: s })) }, target: { order: steps }, ...IT(d, extra) });
const askLen = (prompt, name, len, q, num, d, extra) => ({ prompt, toolOptions: { object: { name, len }, askNum: { q, unit: 'cm' } }, target: { num }, ...IT(d, extra) });
// 수직선 단계: 쉬움은 점 위에 값, 기본은 눈금 글자, 도전은 양 끝만
const NLP = { easy: { mode: 'place', labels: 'all', showValue: true }, base: { mode: 'place', labels: 'major' }, challenge: { mode: 'place', labels: 'ends' } };
const NLR = { easy: {}, base: {}, challenge: {} };
const NLD = (o) => ({ easy: { mode: 'place', ...o, labels: 'all', showValue: true }, base: { mode: 'place', ...o, labels: 'major' }, challenge: { mode: 'place', ...o, labels: 'ends' } });
const RULEL = { easy: { mode: 'ruler', mm: false, max: 20 }, base: { mode: 'ruler', mm: false, max: 20 }, challenge: { mode: 'ruler', mm: false, max: 20 } };
// 0~1(또는 0~2)을 den칸으로 나눈 분수 수직선
const F = (den, max) => ({ min: 0, max: max || 1, step: 1, sub: den, format: 'frac', ...(max && max > 1 ? { mixed: true } : {}) });
const L = [];

// ───────────────────────────── 1차시 (intro · concept) ─────────────────────────────
L.push(lesson(1, {
  std: S9,
  title: '색 테이프를 똑같이 접어 몇 분의 몇인지 말하기',
  objective: '색 테이프를 똑같이 나눈 조각의 수를 분모로, 색칠한 조각의 수를 분자로 하여 몇 분의 몇으로 읽고 쓸 수 있다.',
  desc: 'a long colorful paper tape folded evenly into equal parts with some parts colored, lying on a classroom desk beside a pair of safety scissors and a ruler',
  text: '몇 분의 몇일까요?',
  layers: [{ motif: 'house', x: 110, y: 216, s: 0.8 }, { motif: 'tree', x: 400, y: 216, s: 0.8 }, { motif: 'flower', x: 250, y: 238 }, { motif: 'bird', x: 300, y: 84 }],
  intro: ['"긴 색 테이프를 똑같이 5칸으로 접고 2칸을 칠했어요. 칠한 부분은 전체의 얼마일까요?" 시연 단추로 띠가 5칸으로 나뉘고 2칸이 칠해지는 모습을 보여 준다. 칠한 칸 수 2만 말하고 5를 빠뜨리는 학생이 있으면 전체를 몇 칸으로 나누었는지부터 묻는다.', '색칠한 부분은 전체의 몇 분의 몇일까요? 칸 수를 세어 봐요.'],
  demo: { tool: 'fraction', options: { shape: 'strip' }, sequence: [{ den: 5 }, { den: 5, num: 2 }] },
  acts: [
    { id: 'a1', title: '활동 1. 색 테이프에 분수만큼 색칠하기', minutes: 9, tool: 'fraction',
      task: '띠를 몇 칸으로 나눌지 정하고, 말한 분수만큼 칸을 눌러 색칠해요.',
      teacher: '"전체를 똑같이 몇 칸으로 나누는지가 먼저, 그다음 몇 칸을 칠하는지예요." 9분의 4를 칠할 때 4칸만 나누고 4칸을 모두 칠한 학생에게는 전체 칸 수를 센 뒤 다시 나누게 한다.',
      levels: FRL,
      items: [
        fq('색 테이프를 똑같이 5칸으로 나누고 5분의 2만큼 색칠해 보세요.', 'strip', 5, 2, 0.1),
        fqr('색 테이프를 똑같이 9칸으로 나누고 9분의 4만큼 색칠해 보세요.', 'strip', 9, 4, 0.16),
        fqr('리본을 똑같이 8칸으로 나누고 8분의 7만큼 색칠해 보세요.', 'strip', 8, 7, 0.2),
        fq('종이띠를 똑같이 10칸으로 나누고 10분의 3만큼 색칠해 보세요.', 'strip', 10, 3, 0.18, true),
      ] },
    { id: 'a2', title: '활동 2. 분수와 읽는 말 짝짓기', minutes: 8, tool: 'mindmap',
      task: '분수 기호와 읽는 말을 짝지어요. 분모부터 읽어요.',
      teacher: '"7분의 2에서 먼저 읽는 수는 아래 수일까요, 위 수일까요?" 2/7을 "이분의 칠"처럼 위 수부터 읽는 학생에게는 전체를 나눈 수를 먼저 말하게 한다.',
      levels: CARD,
      items: [
        matchCards('분수 기호에 맞는 읽는 말을 짝지어 보세요.', '분수 읽기', [['2/7', '7분의 2'], ['5/9', '9분의 5'], ['3/10', '10분의 3']], ['2분의 7'], 0.12),
        matchCards('이번에도 분수를 바르게 읽은 카드와 짝지어 보세요.', '분수 읽기', [['4/5', '5분의 4'], ['1/6', '6분의 1'], ['7/8', '8분의 7']], ['7분의 8'], 0.16),
        matchCards('마지막으로 읽는 말에 맞는 분수를 짝지어 보세요.', '분수 읽기', [['3/4', '4분의 3'], ['6/7', '7분의 6'], ['2/9', '9분의 2']], ['6분의 7', '2분의 9'], 0.2, true),
      ] },
    { id: 'a3', title: '활동 3. 색칠된 띠를 분수로 쓰기', minutes: 9, tool: 'fraction',
      task: '색칠한 부분은 전체의 몇 분의 몇인가요? 분자와 분모를 정해 분수로 써요.',
      teacher: '"전체 칸 수를 먼저 세고 분모에 쓰세요. 칠한 칸 수는 분자예요." 칠하지 않은 칸 수를 분자로 쓰는 학생에게는 색이 칠해진 칸만 세어 보게 한다.',
      levels: FRL,
      items: [
        fw('색칠한 부분은 종이띠 전체의 몇 분의 몇인가요? 분수로 써 보세요.', 'strip', 7, [0, 1, 2, 3, 4], 0.2),
        fw('색칠한 부분은 전체의 몇 분의 몇인지 분자와 분모를 정해 보세요.', 'strip', 5, [0, 1, 2], 0.18),
        fw('색칠한 칸은 전체 띠의 몇 분의 몇일까요? 분수로 써 보세요.', 'strip', 9, [0, 1, 2, 3, 4, 5], 0.24),
      ] },
  ],
  wrap: ['"분수 3/8에서 8은 무엇을 나타내고 3은 무엇을 나타내나요?" 짝에게 띠를 그리며 말하게 한다. 출구 2번을 틀린 학생은 분모와 분자를 바꾸어 읽는지 다음 시간에 먼저 짚는다.', [
    { type: 'tool', tool: 'fraction', options: { shape: 'strip', hideFraction: true }, prompt: '종이띠를 똑같이 6칸으로 나누고 6분의 5만큼 색칠해 보세요.', target: { den: 6, num: 5 }, difficulty: 0.15 },
    { type: 'choice', prompt: '"7분의 3"을 분수로 바르게 쓴 것은 무엇인가요?', options: ['3/7', '7/3', '10'], answer: 0, difficulty: 0.12, explain: '분모는 전체를 똑같이 나눈 수 7이고, 분자는 색칠한 수 3이에요. 분모를 아래에 써서 3/7이에요.' },
    { type: 'choice', prompt: '색 테이프를 똑같이 4칸으로 나누고 1칸을 칠한 부분을 분수로 읽으면 무엇인가요?', options: ['4분의 1', '1분의 4', '5분의 1'], answer: 0, difficulty: 0.1, explain: '전체를 똑같이 4로 나눈 것 중의 1이라서 4분의 1이에요.' },
  ]],
  ws: {
    title: '색 테이프와 분수',
    items: [
      { type: 'figure', prompt: '색칠한 부분은 전체의 몇 분의 몇인지 오른쪽 틀에 쓰세요.', tool: 'fraction', answer: '3/5, 1/4, 5/8', figures: [
        { options: { shape: 'strip', frame: true }, state: { n: 5, colored: [0, 1, 2] }, caption: '가' },
        { options: { shape: 'strip', frame: true }, state: { n: 4, colored: [0] }, caption: '나' },
        { options: { shape: 'strip', frame: true }, state: { n: 8, colored: [0, 1, 2, 3, 4] }, caption: '다' }] },
      { type: 'table', prompt: '분수를 읽는 말로 쓰세요.', columns: ['분수', '2/9', '5/6', '3/10'], cells: [['읽기', '', '', '']], answer: '9분의 2, 6분의 5, 10분의 3' },
      { type: 'choice', prompt: '6분의 4를 나타낸 그림에 ○ 하세요.', options: ['6칸 중 4칸 색칠', '4칸 중 6칸 색칠', '6칸 중 2칸 색칠'], answer: '6칸 중 4칸 색칠' },
      { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '4분의 3에서 4는 ______, 3은 ______예요.', answer: '분모, 분자' },
      { type: 'short', prompt: '3/8에서 8과 3은 각각 무엇인지 띠를 그려 설명해 보세요.', answer: '8은 전체를 똑같이 나눈 칸 수, 3은 색칠한 칸 수이다.' },
    ],
    easy: {
      note: '전체를 똑같이 나눈 칸 수가 분모(아래 수), 색칠한 칸 수가 분자(위 수)예요. 분모부터 읽어요.',
      items: [
        { type: 'figure', prompt: '색칠한 부분은 전체의 몇 분의 몇인지 쓰세요.', tool: 'fraction', figures: [{ options: { shape: 'strip', frame: true }, state: { n: 4, colored: [0, 1] }, caption: '가' }, { options: { shape: 'strip', frame: true }, state: { n: 6, colored: [0] }, caption: '나' }], answer: '2/4, 1/6' },
        { type: 'table', prompt: '분수를 읽는 말로 쓰세요.', columns: ['분수', '1/3', '2/5'], cells: [['읽기', '', '']], answer: '3분의 1, 5분의 2' },
        { type: 'choice', prompt: '분모는 어느 쪽 수일까요?', options: ['위에 쓰는 수', '아래에 쓰는 수'], answer: '아래에 쓰는 수' },
        { type: 'draw', prompt: '종이띠를 그려 5칸으로 나누고 2칸에 색칠한 뒤 분수로 써 보세요.' },
      ],
    },
  },
  diff: {
    easy: '분모와 분자의 이름이 화면에 보이고, 조각 수는 8칸까지만 고를 수 있어요.',
    base: '분수 읽기 칸은 맞힌 뒤에만 보여서 스스로 칸 수를 세어야 해요.',
    challenge: '분수 읽기 칸이 가려지고 색칠된 띠에서 분모·분자를 직접 정해요.',
  },
  notes: '자주 보이는 어려움: ① 칠한 칸 수만 말하고 전체 칸 수를 빠뜨린다 → 전체를 몇 칸으로 나누었는지 먼저 세기. ② 분모와 분자를 바꾸어 쓴다(칠한 칸 수를 아래에) → 아래 수는 전체를 나눈 수. ③ 위 수부터 읽는다(2/7을 이분의 칠) → 분모부터 읽는 말 카드로 소리 내어 읽기. 1학기에 나눈 똑같은 조각 판단은 되풀이하지 않고 읽고 쓰기에 집중한다.',
}));

// ───────────────────────────── 2차시 (core · representation) ─────────────────────────────
L.push(lesson(2, {
  std: S9,
  title: '수직선과 띠에 같은 분수 나타내기',
  objective: '0과 1 사이를 똑같이 나눈 수직선에서 분수의 자리를 찾아 점으로 나타내고, 같은 분수를 띠 그림으로도 나타낼 수 있다.',
  desc: 'a long ruler-like paper number line from zero to one with equally spaced tick marks and small paper flags marking fractions, with a colored paper strip lying right under it',
  text: '수직선 위의 분수',
  layers: [{ motif: 'flower', x: 100, y: 232, color: 'sky' }, { motif: 'tree', x: 400, y: 216, s: 0.8 }, { motif: 'bird', x: 290, y: 84 }, { motif: 'star', x: 170, y: 92, s: 0.6 }],
  intro: ['"0에서 1까지 가는 길을 똑같이 5칸으로 나누었어요. 두 칸 간 곳은 어떤 수일까요?" 시연 단추로 수직선 위의 점이 5분의 2 자리로 움직이는 모습을 보여 준다. 눈금 두 개를 찍고 2/5라고 하는 학생에게는 0과 1 사이를 몇 칸으로 나누었는지 세게 한다.', '수직선에서 분수는 어디에 있을까요? 칸 수를 세어 봐요.'],
  demo: { tool: 'numberline', options: { mode: 'place', ...F(5), labels: 'ends' }, sequence: [{ points: ['2/5'] }] },
  acts: [
    { id: 'a1', title: '활동 1. 수직선에 분수 점 놓기', minutes: 9, tool: 'numberline',
      task: '0과 1 사이를 똑같이 나눈 칸 수가 분모예요. 분자만큼 오른쪽으로 가서 점을 놓아요.',
      teacher: '"0에서 출발해서 한 칸이 얼마인지 먼저 알아봐요." 5분의 2를 놓을 때 눈금이 아닌 칸을 세어야 하는데 눈금 번호를 그대로 세는 학생이 있다 — 0에서 출발하는 화살표를 그려 보게 한다.',
      levels: NLP,
      items: [
        nlp('0과 1 사이가 5칸이에요. 5분의 2 자리에 점을 놓아 보세요.', F(5), ['2/5'], 0.12),
        nlp('0과 1 사이가 4칸이에요. 4분의 3 자리에 점을 놓아 보세요.', F(4), ['3/4'], 0.14),
        nlp('0과 1 사이가 6칸이에요. 6분의 1 자리에 점을 놓아 보세요.', F(6), ['1/6'], 0.16),
        nlp('0과 1 사이가 8칸이에요. 8분의 5 자리에 점을 놓아 보세요.', F(8), ['5/8'], 0.2, true),
      ] },
    { id: 'a2', title: '활동 2. 수직선의 점이 나타내는 분수 읽기', minutes: 9, tool: 'numberline',
      task: '수직선에 찍힌 점을 보고 알맞은 분수를 골라요.',
      teacher: '"점이 0에서 몇 칸 떨어져 있나요? 전체는 몇 칸인가요?" 점의 번호만 보고 분모를 쓰는 학생에게는 0과 1 사이의 전체 칸을 먼저 세게 한다.',
      levels: NLR,
      items: [
        nlr('점이 나타내는 분수를 고르세요.', F(5), 0.6, ['2/5', '3/5', '3/6'], 1, 0.14),
        nlr('이번 수직선은 8칸이에요. 점이 나타내는 분수를 고르세요.', F(8), 0.625, ['3/8', '5/8', '5/9'], 1, 0.2),
        nlr('0과 1 사이가 10칸이에요. 점이 나타내는 분수를 고르세요.', F(10), 0.7, ['7/10', '3/10', '7/7'], 0, 0.22),
      ] },
    { id: 'a3', title: '활동 3. 수직선의 수를 띠 그림으로 옮기기', minutes: 8, tool: 'fraction',
      task: '수직선에서 읽은 분수만큼 띠를 색칠해요. 같은 분수를 두 가지 그림으로 나타내 봐요.',
      teacher: '"수직선에서는 0에서 점까지의 길이가, 띠에서는 색칠한 조각이 분수를 나타내요." 수직선의 눈금 수를 띠의 칸 수로 옮기지 않고 아무 칸 수로 나누는 학생에게는 같은 칸 수인지 견주게 한다.',
      levels: FRL,
      items: [
        fq('수직선에서 점이 7분의 3 자리였어요. 같은 분수를 띠에 색칠해 보세요.', 'strip', 7, 3, 0.16),
        fq('점이 10분의 6 자리였어요. 같은 분수를 띠에 색칠해 보세요.', 'strip', 10, 6, 0.2),
        fq('점이 3분의 2 자리였어요. 같은 분수를 띠에 색칠해 보세요.', 'strip', 3, 2, 0.14),
      ] },
  ],
  wrap: ['"수직선에서 4분의 3은 어디에 있나요? 띠 그림에서는 어떻게 나타나나요?" 짝에게 두 그림을 가리키며 말하게 한다. 출구 1번을 틀린 학생은 칸 수를 세지 않는지 다음 시간에 먼저 짚는다.', [
    { type: 'tool', tool: 'numberline', options: { mode: 'place', ...F(9), labels: 'ends' }, prompt: '0과 1 사이가 9칸이에요. 9분의 4 자리에 점을 놓아 보세요.', target: { points: ['4/9'] }, difficulty: 0.2 },
    { type: 'choice', prompt: '0과 1 사이를 똑같이 6칸으로 나눈 수직선에서 점이 0에서 5칸 갔어요. 어떤 분수일까요?', options: ['6분의 5', '5분의 6', '6분의 1'], answer: 0, difficulty: 0.16, explain: '전체가 6칸이라서 분모는 6이고, 5칸 갔으니 분자는 5예요.' },
    { type: 'choice', prompt: '수직선과 띠 그림에서 모두 같은 것은 무엇인가요?', options: ['전체를 똑같이 나눈 것', '칸의 색깔', '그림의 길이'], answer: 0, difficulty: 0.14, explain: '수직선도 띠도 전체(1)를 똑같이 나눈 뒤 몇 칸인지로 분수를 나타내요.' },
  ]],
  ws: {
    title: '수직선과 띠로 나타낸 분수',
    items: [
      { type: 'figure', prompt: '수직선의 점이 나타내는 분수를 쓰세요.', tool: 'numberline', wide: true, figures: [
        { options: { mode: 'read', ...F(5), labels: 'ends', marks: [0.4] }, caption: '___' }, { options: { mode: 'read', ...F(8), labels: 'ends', marks: [0.75] }, caption: '___' }], answer: '2/5, 6/8' },
      { type: 'figure', prompt: '주어진 분수만큼 띠에 색칠하세요.', tool: 'fraction', figures: [
        { options: { shape: 'strip' }, state: { n: 6 }, caption: '6분의 4' }, { options: { shape: 'strip' }, state: { n: 9 }, caption: '9분의 2' }], answer: '6칸 중 4칸, 9칸 중 2칸' },
      { type: 'choice', prompt: '0과 1 사이가 7칸일 때 3칸 간 곳을 분수로 나타낸 것은?', options: ['7분의 3', '3분의 7', '10분의 3'], answer: '7분의 3' },
      { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '0과 1 사이를 똑같이 9칸으로 나눈 수직선에서 5칸 간 곳의 분수는 ___분의 ___이에요.', answer: '9, 5' },
      { type: 'draw', prompt: '수직선을 그어 0과 1 사이를 4칸으로 나누고 4분의 3에 점을 찍어 보세요.' },
    ],
    easy: {
      note: '0과 1 사이를 나눈 칸 수가 분모, 0에서 점까지 간 칸 수가 분자예요.',
      items: [
        { type: 'figure', prompt: '수직선의 점이 나타내는 분수를 쓰세요.', tool: 'numberline', wide: true, figures: [{ options: { mode: 'read', ...F(4), labels: 'ends', marks: [0.5] }, caption: '___' }], answer: '2/4' },
        { type: 'figure', prompt: '주어진 분수만큼 띠에 색칠하세요.', tool: 'fraction', figures: [{ options: { shape: 'strip' }, state: { n: 5 }, caption: '5분의 2' }], answer: '5칸 중 2칸' },
        { type: 'choice', prompt: '분모는 무엇을 나타낼까요?', options: ['나눈 칸 수', '간 칸 수'], answer: '나눈 칸 수' },
        { type: 'draw', prompt: '0과 1 사이를 3칸으로 나눈 수직선을 그리고 3분의 1에 점을 찍어 보세요.' },
      ],
    },
  },
  diff: {
    easy: '점 위에 지금 수가 보이고 눈금 글자가 모두 있어요.',
    base: '큰 눈금 글자만 보여서 칸 수를 스스로 세요.',
    challenge: '양 끝 0과 1만 보이고, 8칸·10칸처럼 칸이 많은 수직선이 나와요.',
  },
  notes: '자주 보이는 어려움: ① 눈금 선의 번호를 칸 수로 센다(0도 한 칸으로 센다) → 0에서 출발하는 화살표를 그려 칸 수만 센다. ② 수직선의 전체 칸 수와 다르게 분모를 쓴다 → 0과 1 사이를 먼저 센다. ③ 같은 분수를 띠와 수직선에서 다른 크기로 느낀다 → 두 그림 모두 전체가 1이라고 확인. 점 위의 값이 보이는 쉬움 단계는 점을 옮길 때마다 말로 읽어 보게 한다.',
}));

// ───────────────────────────── 3차시 (core · application) ─────────────────────────────
L.push(lesson(3, {
  std: S9,
  title: '리본의 몇 분의 몇은 몇 cm인지 구하기',
  objective: '전체를 똑같이 나눈 분수만큼이 얼마인지 그림과 길이로 구하고, 분모와 분자가 각각 무엇을 나타내는지 말할 수 있다.',
  desc: 'a long ribbon laid on a table cut into equal pieces with a few pieces lifted up, beside a measuring tape and a small paper gift box',
  text: '분수만큼은 몇 cm?',
  layers: [{ motif: 'house', x: 110, y: 216, s: 0.8 }, { motif: 'flower', x: 400, y: 232, color: 'rose' }, { motif: 'bird', x: 280, y: 84 }, { motif: 'tree', x: 60, y: 220, s: 0.8 }],
  intro: ['"리본 12cm를 똑같이 4로 나누면 한 도막은 몇 cm일까요? 그중 3도막은요?" 시연 단추로 띠가 4칸으로 나뉘고 3칸이 칠해지는 모습을 보여 준다. 4분의 3을 12cm의 4분의 3이 아니라 3cm라고 말하는 학생이 있으면 한 칸이 몇 cm인지 먼저 구하게 한다.', '전체를 똑같이 나누면 한 칸은 몇 cm일까요? 분수만큼은 몇 cm일까요?'],
  demo: { tool: 'fraction', options: { shape: 'strip' }, sequence: [{ den: 4 }, { den: 4, num: 3 }] },
  acts: [
    { id: 'a1', title: '활동 1. 먹은 양과 마신 양을 띠에 색칠하기', minutes: 8, tool: 'fraction',
      task: '이야기 속 양을 띠나 피자에 색칠해요. 전체를 몇으로 나누는지 먼저 정해요.',
      teacher: '"피자 한 판을 8조각으로 똑같이 잘랐어요. 5조각을 먹었다면 분수는 무엇일까요?" 먹고 남은 조각 수를 분자로 쓰는 학생에게는 먹은 조각만 칠하게 한다.',
      levels: FRL,
      items: [
        fq('피자 한 판을 똑같이 8조각으로 잘라 5조각을 먹었어요. 먹은 만큼 색칠해 보세요.', 'pizza', 8, 5, 0.12),
        fq('주스 병을 똑같이 6칸으로 나누어 1칸을 마셨어요. 마신 만큼 색칠해 보세요.', 'strip', 6, 1, 0.1),
        fq('초콜릿을 똑같이 7칸으로 나누어 6칸을 먹었어요. 먹은 만큼 색칠해 보세요.', 'strip', 7, 6, 0.16),
      ] },
    { id: 'a2', title: '활동 2. 분수만큼은 몇 cm인지 구하기', minutes: 10, tool: 'measure',
      task: '띠는 리본 전체의 길이예요. 리본을 똑같이 나눈 뒤 분수만큼이 몇 cm인지 써요.',
      teacher: '"전체 길이를 분모로 나누면 한 칸의 길이예요. 분자만큼 칸을 모으면 분수만큼의 길이가 돼요." 12cm의 4분의 3을 3cm로 쓰는 학생에게는 한 칸이 3cm임을 확인하고 3칸이 몇 cm인지 다시 묻는다.',
      levels: RULEL,
      items: [
        askLen('띠는 리본 전체의 길이예요. 리본의 4분의 3은 몇 cm일까요?', '리본 전체', 12, '4분의 3은 몇 cm일까요?', 9, 0.2),
        askLen('끈 전체의 길이가 띠예요. 끈의 5분의 2는 몇 cm일까요?', '끈 전체', 15, '5분의 2는 몇 cm일까요?', 6, 0.24),
        askLen('색 테이프 전체의 길이가 띠예요. 2분의 1은 몇 cm일까요?', '색 테이프 전체', 10, '2분의 1은 몇 cm일까요?', 5, 0.14),
        askLen('긴 철사 전체의 길이가 띠예요. 철사의 6분의 5는 몇 cm일까요?', '철사 전체', 18, '6분의 5는 몇 cm일까요?', 15, 0.3, true),
      ] },
    { id: 'a3', title: '활동 3. 분모와 분자가 나타내는 것 나누기', minutes: 8, tool: 'mindmap',
      task: '카드를 읽고 분모와 분자 칸에 나누어 놓아요.',
      teacher: '"5분의 3에서 아래에 쓰는 수는 무엇을 나타내나요?" 분모를 색칠한 조각 수라고 하는 학생에게는 전체를 몇 칸으로 나누었는지 말하게 한다.',
      levels: CARD,
      items: [
        sortCards('5분의 3(3/5)에서 카드가 분모인지 분자인지 나누어 보세요.', '3/5', ['분모', '분자'], [
          ['5 — 전체를 똑같이 나눈 수', '분모'], ['3 — 색칠한 부분의 수', '분자'], ['5 — 아래에 쓰는 수', '분모'], ['3 — 위에 쓰는 수', '분자']], 0.16),
        sortCards('7분의 4(4/7)에서 카드가 분모인지 분자인지 나누어 보세요.', '4/7', ['분모', '분자'], [
          ['7', '분모'], ['4', '분자'], ['똑같이 나눈 조각 수', '분모'], ['색칠한 조각 수', '분자'], ['한 조각의 크기를 정하는 수', '분모']], 0.2),
        sortCards('8분의 5(5/8)에서 카드가 분모인지 분자인지 나누어 보세요.', '5/8', ['분모', '분자'], [
          ['먹은 조각의 수', '분자'], ['한 판을 자른 조각의 수', '분모'], ['5', '분자'], ['8', '분모']], 0.22, true),
      ] },
  ],
  wrap: ['"리본 20cm의 5분의 2는 몇 cm일까요? 어떻게 구했나요?" 짝에게 한 칸의 길이를 먼저 말하게 한다. 출구 2번을 틀린 학생은 한 칸의 길이를 구하지 않고 분수만큼을 바로 세는지 다음 시간에 먼저 짚는다.', [
    { type: 'tool', tool: 'measure', options: { mode: 'ruler', mm: false, max: 20, object: { name: '리본 전체', len: 20 }, askNum: { q: '5분의 2는 몇 cm일까요?', unit: 'cm' } }, prompt: '띠는 리본 전체의 길이예요. 리본의 5분의 2는 몇 cm일까요?', target: { num: 8 }, difficulty: 0.26 },
    { type: 'choice', prompt: '길이가 16cm인 끈의 4분의 1은 몇 cm일까요?', options: ['4cm', '12cm', '16cm'], answer: 0, difficulty: 0.18, explain: '16cm를 똑같이 4로 나누면 한 칸이 4cm이고, 4분의 1은 그 한 칸이에요.' },
    { type: 'choice', prompt: '분수 2/9에서 분자는 무엇을 나타내나요?', options: ['색칠한 부분의 수', '전체를 나눈 수', '한 칸의 길이'], answer: 0, difficulty: 0.12, explain: '분자는 위에 쓰는 수로 색칠한 부분의 수예요.' },
  ]],
  ws: {
    title: '분수만큼 구하기',
    items: [
      { type: 'figure', prompt: '색칠한 부분은 전체의 몇 분의 몇인지 쓰세요.', tool: 'fraction', figures: [
        { options: { shape: 'strip', frame: true }, state: { n: 6, colored: [0, 1, 2, 3] }, caption: '가' }, { options: { shape: 'strip', frame: true }, state: { n: 10, colored: [0, 1] }, caption: '나' }], answer: '4/6, 2/10' },
      { type: 'table', prompt: '표를 완성하세요.', columns: ['전체 길이', '똑같이 나눈 수', '한 칸 길이', '분수만큼'], cells: [['12cm', '4', '3cm', '4분의 3 = ___cm'], ['20cm', '5', '', '5분의 2 = ___cm'], ['18cm', '6', '', '6분의 5 = ___cm']], answer: '9cm, 4cm, 8cm, 3cm, 15cm' },
      { type: 'choice', prompt: '14cm인 리본의 7분의 3을 구하려면 처음에 할 일은?', options: ['14를 7로 나눈다', '14에 7을 곱한다', '14에 3을 더한다'], answer: '14를 7로 나눈다' },
      { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '24cm의 8분의 3은 한 칸이 ___cm이고 3칸이니 ___cm예요.', answer: '3, 9' },
      { type: 'short', prompt: '4분의 3에서 4와 3이 각각 무엇을 나타내는지 쓰세요.', answer: '4는 전체를 똑같이 나눈 수, 3은 색칠한(고른) 부분의 수이다.' },
    ],
    easy: {
      note: '먼저 전체를 똑같이 나누어 한 칸의 길이를 구하고, 분자만큼 칸을 모아요.',
      items: [
        { type: 'figure', prompt: '색칠한 부분은 전체의 몇 분의 몇인지 쓰세요.', tool: 'fraction', figures: [{ options: { shape: 'strip', frame: true }, state: { n: 4, colored: [0, 1, 2] }, caption: '가' }], answer: '3/4' },
        { type: 'table', prompt: '표를 완성하세요.', columns: ['전체 길이', '똑같이 나눈 수', '한 칸 길이'], cells: [['12cm', '4', '___cm'], ['10cm', '5', '___cm']], answer: '3cm, 2cm' },
        { type: 'choice', prompt: '분모는 무엇일까요?', options: ['전체를 똑같이 나눈 수', '색칠한 부분의 수'], answer: '전체를 똑같이 나눈 수' },
        { type: 'draw', prompt: '10cm 띠를 5칸으로 나누고 5분의 2에 색칠한 뒤 몇 cm인지 써 보세요.' },
      ],
    },
  },
  diff: {
    easy: '피자와 띠 모두 분모와 분자의 이름이 화면에 보이고, 길이 문항은 자 눈금이 크게 보여요.',
    base: '자 눈금은 보이지만 한 칸의 길이는 스스로 구해요.',
    challenge: '전체 길이가 18cm처럼 커지고 분수가 6분의 5처럼 1에 가까워요.',
  },
  notes: '자주 보이는 어려움: ① 4분의 3을 3cm라고 쓴다(분자를 그대로 길이로) → 한 칸 길이를 먼저 구한 뒤 분자만큼 곱한다. ② 분모와 분자를 거꾸로 이해한다 → 전체를 나눈 수가 분모. ③ 나누어떨어지는 수만 다루므로 12cm·15cm·18cm처럼 분모로 나누어떨어지게 수를 정했다. 분수만큼은 1학기에 배운 똑같이 나누기를 길이로 넓힌 응용이다.',
}));

// ───────────────────────────── 4차시 (core · concept) ─────────────────────────────
L.push(lesson(4, {
  std: S10,
  title: '단위분수가 모여 1이 되고 1보다 커지는 모습 보기',
  objective: '단위분수가 분모만큼 모이면 1이 됨을 알고, 분수를 진분수, 가분수, 대분수로 나누어 이름을 붙일 수 있다.',
  desc: 'four equal paper strips stacked end to end growing past one whole length with small colored flags marking each quarter, on a classroom floor near a measuring ruler',
  text: '1이 되고 넘어가요',
  layers: [{ motif: 'flower', x: 100, y: 232, color: 'lavender' }, { motif: 'tree', x: 400, y: 216, s: 0.8 }, { motif: 'bird', x: 290, y: 84 }, { motif: 'house', x: 90, y: 214, s: 0.7 }],
  intro: ['"4분의 1 조각을 하나씩 이어 붙이면 몇 개가 모였을 때 한 장이 될까요? 하나 더 붙이면요?" 시연 단추로 수직선 위의 점이 4분의 4(1)를 지나 4분의 5로 가는 모습을 보여 준다. 4분의 5는 있을 수 없다고 말하는 학생이 있으면 한 판을 넘겨도 분수로 쓸 수 있다고 짚는다.', '1/4 조각을 계속 모으면 분수는 어떻게 커질까요?'],
  demo: { tool: 'numberline', options: { mode: 'place', ...F(4, 2), labels: 'major' }, sequence: [{ points: ['4/4'] }, { points: ['5/4'] }] },
  acts: [
    { id: 'a1', title: '활동 1. 조각을 모두 모아 1 만들기', minutes: 7, tool: 'fraction',
      task: '단위분수 조각을 모두 색칠하면 전체(1)가 돼요. 몇 조각이 모이면 1인지 알아봐요.',
      teacher: '"6분의 1 조각이 6개 모이면 얼마일까요?" 분모와 분자가 같으면 1이 된다는 것을 짚는다. 6/6을 6이라고 읽는 학생에게는 한 판을 모두 칠한 그림을 보여 준다.',
      levels: FRL,
      items: [
        fq('피자를 6조각으로 나누고 6조각을 모두 색칠해 6분의 6이 얼마인지 알아보세요.', 'pizza', 6, 6, 0.12),
        fq('띠를 4칸으로 나누고 4분의 4만큼 색칠해 보세요.', 'strip', 4, 4, 0.1),
        fq('띠를 8칸으로 나누고 8분의 8만큼 색칠해 보세요.', 'strip', 8, 8, 0.12),
      ] },
    { id: 'a2', title: '활동 2. 1을 넘는 분수를 수직선에 놓기', minutes: 9, tool: 'numberline',
      task: '0에서 2까지 눈금이 있어요. 분수만큼 오른쪽으로 가서 점을 놓아요. 1을 넘을 수 있어요.',
      teacher: '"4/4은 수직선에서 어디일까요? 5/4은 4/4보다 오른쪽일까요, 왼쪽일까요?" 5/4를 1보다 작은 곳에 놓는 학생에게는 한 칸이 4분의 1이라는 것을 확인하고 다시 세게 한다.',
      levels: NLD(F(4, 2)),
      items: [
        nlp('4분의 4는 어디일까요? 점을 놓아 보세요.', F(4, 2), ['4/4'], 0.14),
        nlp('4분의 5 자리에 점을 놓아 보세요.', F(4, 2), ['5/4'], 0.18),
        nlp('4분의 7 자리에 점을 놓아 보세요.', F(4, 2), ['7/4'], 0.22),
        nlp('4분의 2와 4분의 6 자리에 점 두 개를 차례로 놓아 보세요.', F(4, 2), ['2/4', '6/4'], 0.26, true),
      ] },
    { id: 'a3', title: '활동 3. 진분수, 가분수, 대분수로 나누기', minutes: 10, tool: 'mindmap',
      task: '분자가 분모보다 작으면 진분수, 같거나 크면 가분수, 자연수와 진분수로 쓰면 대분수예요. 카드를 나누어요.',
      teacher: '"분모와 분자 중 어느 것이 더 큰지 먼저 비교해요." 6/6을 진분수로 넣는 학생에게는 6/6이 1과 같다는 것을 띠 그림으로 떠올리게 한다. 가분수는 분수가 아니라고 말하는 학생에게는 수직선에서 1을 넘은 점이라고 짚는다.',
      levels: CARD,
      items: [
        sortCards('분수 카드를 진분수, 가분수, 대분수로 나누어 보세요.', '분수 나누기', ['진분수', '가분수', '대분수'], [
          ['3/7', '진분수'], ['9/4', '가분수'], ['1과 2/5', '대분수'], ['6/6', '가분수'], ['2/9', '진분수'], ['3과 1/2', '대분수']], 0.2),
        sortCards('이번에도 분수 카드를 세 칸으로 나누어 보세요.', '분수 나누기', ['진분수', '가분수', '대분수'], [
          ['5/3', '가분수'], ['4/11', '진분수'], ['2와 3/4', '대분수'], ['7/7', '가분수'], ['1/12', '진분수'], ['1과 1/6', '대분수']], 0.24),
        sortCards('마지막 카드들을 나누어 보세요.', '분수 나누기', ['진분수', '가분수', '대분수'], [
          ['10/9', '가분수'], ['5/8', '진분수'], ['4와 2/3', '대분수'], ['8/5', '가분수'], ['1/10', '진분수']], 0.28, true),
      ] },
  ],
  wrap: ['"분모와 분자가 같은 분수는 얼마일까요? 7/4는 1보다 클까요, 작을까요?" 수직선을 가리키며 말하게 한다. 출구 1번을 틀린 학생은 분모와 분자를 비교하지 않고 이름을 고르는지 다음 시간에 먼저 짚는다.', [
    { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '분수 이름', slots: ['진분수', '가분수', '대분수'], cards: ['4/9', '13/6', '2와 5/7', '8/8'] }, prompt: '네 카드를 진분수, 가분수, 대분수로 나누어 보세요.', target: { sort: { 진분수: ['4/9'], 가분수: ['13/6', '8/8'], 대분수: ['2와 5/7'] } }, difficulty: 0.22 },
    { type: 'choice', prompt: '분자가 분모와 같거나 분모보다 큰 분수의 이름은 무엇인가요?', options: ['진분수', '가분수', '대분수'], answer: 1, difficulty: 0.14, explain: '분자가 분모와 같거나 더 큰 분수를 가분수라고 해요.' },
    { type: 'choice', prompt: '5분의 5는 얼마와 같은가요?', options: ['0', '1', '5'], answer: 1, difficulty: 0.1, explain: '5분의 1 조각이 5개 모이면 전체인 1이에요.' },
  ]],
  ws: {
    title: '진분수, 가분수, 대분수',
    items: [
      { type: 'figure', prompt: '수직선의 점이 나타내는 분수를 가분수로 쓰세요.', tool: 'numberline', wide: true, figures: [
        { options: { mode: 'read', ...F(4, 2), labels: 'major', marks: [1.5] }, caption: '___' }, { options: { mode: 'read', ...F(3, 2), labels: 'major', marks: [1.667] }, caption: '___' }], answer: '6/4, 5/3' },
      { type: 'table', prompt: '분수 카드를 이름에 맞게 쓰세요.', columns: ['진분수', '가분수', '대분수'], cells: [['', '', ''], ['', '', '']], answer: '예: 2/5 | 7/3 | 1과 1/4' },
      { type: 'choice', prompt: '진분수에 ○ 하세요.', options: ['7/5', '3/8', '2와 1/3'], answer: '3/8' },
      { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '8분의 1이 8개 모이면 ___분의 ___이고, 이것은 ___과 같아요.', answer: '8, 8, 1' },
      { type: 'short', prompt: '5/4가 1보다 큰 까닭을 띠 그림을 떠올려 써 보세요.', answer: '4분의 1 조각이 4개면 1이고, 하나 더 있어서 1보다 크다.' },
    ],
    easy: {
      note: '진분수는 분자가 분모보다 작고(1보다 작음), 가분수는 분자가 분모와 같거나 크고(1과 같거나 큼), 대분수는 자연수와 진분수로 써요.',
      items: [
        { type: 'figure', prompt: '점이 나타내는 분수를 쓰세요.', tool: 'numberline', wide: true, figures: [{ options: { mode: 'read', ...F(4, 2), labels: 'major', marks: [1.25] }, caption: '___' }], answer: '5/4' },
        { type: 'table', prompt: '분수를 이름에 맞게 ○ 하세요.', columns: ['분수', '3/5', '6/6', '1과 1/2'], cells: [['이름', '진/가/대', '진/가/대', '진/가/대']], answer: '진분수, 가분수, 대분수' },
        { type: 'choice', prompt: '1과 같은 분수에 ○ 하세요.', options: ['4/4', '4/5'], answer: '4/4' },
        { type: 'draw', prompt: '띠를 그려 6칸으로 나누고 6칸을 모두 칠한 뒤 분수로 써 보세요.' },
      ],
    },
  },
  diff: {
    easy: '피자·띠 그림에 분모와 분자의 이름이 보이고, 수직선 점 위에 값이 보여요.',
    base: '수직선에 큰 눈금 글자만 보이고, 카드를 모두 놓은 뒤 확인해요.',
    challenge: '수직선 양 끝 눈금만 보이고, 6/6·8/8처럼 1과 같은 분수 카드가 섞여요.',
  },
  notes: '자주 보이는 어려움: ① 분수는 1보다 작은 수뿐이라고 여긴다(가분수가 분수가 아니라고 한다) → 수직선에서 1을 넘은 점으로 확인. ② 6/6처럼 분모와 분자가 같은 분수를 진분수에 넣는다 → 1과 같으므로 가분수. ③ 대분수의 자연수 부분을 곱하는지 더하는지 헷갈린다(1과 2/5 = 1 + 2/5) → 5와 6차시에서 바꾸는 방법을 따로 다룬다.',
}));

// ───────────────────────────── 5차시 (core · representation) ─────────────────────────────
L.push(lesson(5, {
  std: S10,
  title: '가분수와 대분수를 수직선에서 오가며 나타내기',
  objective: '같은 수를 가분수와 대분수로 나타내어 수직선의 같은 자리에 놓고, 두 표현이 같은 수임을 설명할 수 있다.',
  desc: 'a two-meter long paper number line with equal tick marks and two paper flags, one with an improper fraction and one with a mixed number, pointing to the same spot',
  text: '같은 자리의 두 표현',
  layers: [{ motif: 'flower', x: 100, y: 232, color: 'rose' }, { motif: 'tree', x: 400, y: 216, s: 0.8 }, { motif: 'bird', x: 280, y: 84 }, { motif: 'star', x: 180, y: 92, s: 0.6 }],
  intro: ['"한 판과 4분의 1은 4분의 5와 같은 수일까요?" 시연 단추로 수직선의 점이 1과 4분의 1 자리로 움직이는 모습을 보여 준다. 1과 1/4을 14/4라고 쓰는 학생이 있으면 한 판 안에 4분의 1이 몇 개 들어 있는지 세어 보게 한다.', '가분수와 대분수는 수직선에서 같은 자리에 있을까요?'],
  demo: { tool: 'numberline', options: { mode: 'place', ...F(4, 2), labels: 'major' }, sequence: [{ points: ['1 1/4'] }] },
  acts: [
    { id: 'a1', title: '활동 1. 대분수를 수직선에 놓기', minutes: 9, tool: 'numberline',
      task: '대분수는 1을 지나 오른쪽으로 더 간 만큼이에요. 자연수 1을 지난 뒤 분수만큼 더 가서 점을 놓아요.',
      teacher: '"1과 1/3은 1에서 시작해서 3분의 1만큼 더 간 곳이에요." 자연수 부분을 빼고 1/3 자리에 놓는 학생에게는 0에서부터 1까지 몇 칸인지 먼저 세게 한다.',
      levels: NLD(F(3, 2)),
      items: [
        nlp('1과 3분의 1 자리에 점을 놓아 보세요.', F(3, 2), ['1 1/3'], 0.16),
        nlp('1과 4분의 3 자리에 점을 놓아 보세요.', F(4, 2), ['1 3/4'], 0.2),
        nlp('1과 2분의 1 자리에 점을 놓아 보세요.', F(2, 2), ['1 1/2'], 0.14),
        nlp('1과 5분의 4 자리에 점을 놓아 보세요.', F(5, 2), ['1 4/5'], 0.26, true),
      ] },
    { id: 'a2', title: '활동 2. 같은 점을 가분수와 대분수로 읽기', minutes: 9, tool: 'numberline',
      task: '점을 보고 알맞은 말을 골라요. 같은 점이 두 가지 모양으로 쓰일 수 있어요.',
      teacher: '"7/4와 1과 3/4는 같은 점일까요?" 가분수와 대분수를 서로 다른 수라고 하는 학생에게는 4분의 1이 모두 몇 개인지 세어 두 표현으로 쓰게 한다.',
      levels: NLR,
      items: [
        nlr('점이 나타내는 수를 말한 친구 가운데 옳은 말을 고르세요.', F(4, 2), 1.75, ['7/4만 맞아요', '1과 3/4만 맞아요', '7/4와 1과 3/4 모두 맞아요'], 2, 0.2),
        nlr('점이 나타내는 수를 고르세요. 3/2와 1과 1/2를 견줘 봐요.', F(2, 2), 1.5, ['3/2만 맞아요', '1과 1/2만 맞아요', '3/2와 1과 1/2 모두 맞아요'], 2, 0.22),
        nlr('점이 5/3인지 1과 2/3인지, 알맞은 말을 고르세요.', F(3, 2), 1.667, ['5/3와 1과 2/3 모두 맞아요', '5/3만 맞아요', '둘 다 틀려요'], 0, 0.26),
      ] },
    { id: 'a3', title: '활동 3. 대분수와 가분수 짝짓기', minutes: 8, tool: 'mindmap',
      task: '같은 수를 나타내는 대분수와 가분수를 짝지어요. 자연수에 분모를 곱한 수에 분자를 더해 봐요.',
      teacher: '"1과 3/5는 5분의 1이 몇 개일까요? 한 판에 5개, 거기에 3개 더요." 1×5+3을 곱하지 않고 1+3=4로 더하는 학생에게는 한 판을 5조각으로 그려 세어 보게 한다.',
      levels: CARD,
      items: [
        matchCards('같은 수를 나타내는 대분수와 가분수를 짝지어 보세요.', '대분수와 가분수', [['1과 1/3', '4/3'], ['2와 1/2', '5/2'], ['1과 3/5', '8/5']], ['5/3'], 0.2),
        matchCards('이번에도 대분수와 같은 가분수를 짝지어 보세요.', '대분수와 가분수', [['1과 2/3', '5/3'], ['3과 1/4', '13/4'], ['2와 2/5', '12/5']], ['4/3'], 0.26),
        matchCards('마지막 대분수와 가분수를 짝지어 보세요.', '대분수와 가분수', [['1과 1/2', '3/2'], ['2와 1/3', '7/3'], ['1과 4/5', '9/5']], ['5/9', '3/1'], 0.3, true),
      ] },
  ],
  wrap: ['"2와 1/3을 가분수로 바꾸면 얼마일까요? 어떻게 알았어요?" 짝에게 한 판에 3조각씩 두 판과 한 조각이라고 말하게 한다. 출구 2번을 틀린 학생은 자연수와 분자를 그냥 더하는지 다음 시간에 먼저 짚는다.', [
    { type: 'tool', tool: 'numberline', options: { mode: 'place', ...F(6, 2), labels: 'major' }, prompt: '1과 6분의 5 자리에 점을 놓아 보세요.', target: { points: ['1 5/6'] }, difficulty: 0.24 },
    { type: 'choice', prompt: '1과 3/4와 같은 가분수는 무엇인가요?', options: ['4/3', '7/4', '13/4'], answer: 1, difficulty: 0.2, explain: '한 판에 4조각이 있고 3조각이 더 있으니 4+3=7조각이라서 7/4예요.' },
    { type: 'choice', prompt: '가분수 9/4를 대분수로 바꾸면 얼마인가요?', options: ['1과 5/4', '2와 1/4', '2와 4/1'], answer: 1, difficulty: 0.24, explain: '4조각이 두 판이고 1조각이 남으니 2와 1/4이에요.' },
  ]],
  ws: {
    title: '대분수와 가분수',
    items: [
      { type: 'figure', prompt: '수직선의 점을 가분수와 대분수로 써 보세요.', tool: 'numberline', wide: true, figures: [
        { options: { mode: 'read', ...F(4, 2), labels: 'major', marks: [1.75] }, caption: '___ = ___과 ___' }, { options: { mode: 'read', ...F(3, 2), labels: 'major', marks: [1.333] }, caption: '___ = ___과 ___' }], answer: '7/4 = 1과 3/4, 4/3 = 1과 1/3' },
      { type: 'table', prompt: '표를 완성하세요.', columns: ['대분수', '가분수'], cells: [['1과 2/5', ''], ['', '11/4'], ['2와 1/3', ''], ['', '9/2']], answer: '7/5, 2와 3/4, 7/3, 4와 1/2' },
      { type: 'choice', prompt: '2와 1/4와 같은 수는 무엇인가요?', options: ['9/4', '3/4', '8/4'], answer: '9/4' },
      { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '1과 2/3에서 1은 3/3이므로 3/3과 2/3를 더하면 ___/___이에요.', answer: '5, 3' },
      { type: 'short', prompt: '1과 3/5를 8/5로 바꾼 방법을 써 보세요.', answer: '1은 5/5이고 3/5를 더하면 8/5이다.' },
    ],
    easy: {
      note: '대분수의 자연수 부분을 분모가 같은 가분수로 바꾼 뒤 분수 부분을 더해요. 1 = 3/3, 2 = 6/3…',
      items: [
        { type: 'figure', prompt: '점을 가분수와 대분수로 써 보세요.', tool: 'numberline', wide: true, figures: [{ options: { mode: 'read', ...F(2, 2), labels: 'major', marks: [1.5] }, caption: '___ = ___과 ___' }], answer: '3/2 = 1과 1/2' },
        { type: 'table', prompt: '표를 완성하세요.', columns: ['대분수', '가분수'], cells: [['1과 1/2', ''], ['', '5/3']], answer: '3/2, 1과 2/3' },
        { type: 'choice', prompt: '1과 1/4와 같은 수는?', options: ['5/4', '2/4'], answer: '5/4' },
        { type: 'draw', prompt: '띠 그림을 그려 1과 2/3를 가분수로 나타내 보세요.' },
      ],
    },
  },
  diff: {
    easy: '점 위에 값이 보이고, 눈금 글자가 모두 있어요.',
    base: '큰 눈금 글자만 보여서 칸 수를 세어 읽어요.',
    challenge: '양 끝 눈금만 보이고 1과 4/5처럼 칸이 많은 수직선이 나와요.',
  },
  notes: '자주 보이는 어려움: ① 대분수를 가분수로 바꿀 때 자연수와 분자를 그대로 더한다(1과 3/5 → 4/5) → 자연수에 분모를 곱한 뒤 분자를 더하는 까닭을 한 판 그림으로. ② 가분수와 대분수를 서로 다른 수로 본다 → 수직선의 같은 점. ③ 대분수를 수직선에 놓을 때 자연수 부분을 무시한다 → 1까지는 몇 칸인지 세고 이어서. 곱셈 규칙은 그림으로 이해한 뒤에 말로 정리한다.',
}));

// ───────────────────────────── 6차시 (core · application) ─────────────────────────────
L.push(lesson(6, {
  std: S10,
  title: '남은 우유와 끈의 길이를 대분수와 가분수로 말하기',
  objective: '1보다 큰 양을 상황에 맞게 대분수와 가분수로 나타내고, 어느 표현이 알맞은지 까닭을 말할 수 있다.',
  desc: 'a table with a carton of milk and a measuring jug, an open bottle of juice with some left, and a piece of string longer than one arm span, with small hand-written fraction labels',
  text: '남은 양을 말해요',
  layers: [{ motif: 'house', x: 110, y: 216, s: 0.8 }, { motif: 'flower', x: 400, y: 232, color: 'lavender' }, { motif: 'bird', x: 290, y: 84 }, { motif: 'tree', x: 60, y: 220, s: 0.8 }],
  intro: ['"우유가 한 병 반 남았어요. 이 양을 분수로 어떻게 쓸까요?" 시연 단추로 수직선의 점이 3/2 자리로 움직이는 모습을 보여 준다. 1과 1/2를 2와 1/2로 읽는 학생이 있으면 한 병 전체를 먼저 세고 나머지 반을 더하게 한다.', '1보다 큰 양은 어떻게 쓰고 읽으면 좋을까요?'],
  demo: { tool: 'numberline', options: { mode: 'place', ...F(2, 2), labels: 'major' }, sequence: [{ points: ['3/2'] }] },
  acts: [
    { id: 'a1', title: '활동 1. 남은 양을 알맞은 분수로 읽기', minutes: 9, tool: 'numberline',
      task: '수직선의 점은 남은 양이에요. 알맞은 분수를 골라요.',
      teacher: '"한 병 전체와 몇 분의 몇이 더 있는지 보세요." 1과 1/4를 5/1로 쓰는 학생에게는 분모가 한 칸의 크기를 정한다고 짚는다.',
      levels: NLR,
      items: [
        nlr('남은 우유가 점이에요. 몇 병인지 가분수로 고르세요.', F(2, 2), 1.5, ['2/3', '3/2', '1/2'], 1, 0.16),
        nlr('남은 끈이 점이에요. 대분수로 알맞은 것을 고르세요.', F(4, 2), 1.25, ['1과 1/4', '1과 1/5', '5/1'], 0, 0.2),
        nlr('남은 주스가 점이에요. 알맞은 대분수를 고르세요.', F(5, 3), 2.2, ['2와 1/5', '2와 5/1', '1과 2/5'], 0, 0.24),
      ] },
    { id: 'a2', title: '활동 2. 1보다 큰 분수 골라내기', minutes: 9, tool: 'mindmap',
      task: '물음에 맞는 분수를 모두 골라요. 분모와 분자를 견주거나 자연수 부분을 살펴요.',
      teacher: '"1보다 크다는 것은 분자가 분모와 같은지, 더 큰지를 보면 알 수 있어요." 9/9를 1보다 크다고 고르는 학생에게는 9/9는 한 판을 모두 채운 1이라고 한 판 그림을 그려 말하게 한다.',
      levels: CARD,
      items: [
        pickCards('1보다 큰 수를 모두 골라 보세요.', '1보다 큰 수', ['5/6', '7/4', '1과 1/3', '3/9', '9/9'], ['7/4', '1과 1/3'], 0.2),
        pickCards('가분수를 모두 골라 보세요.', '가분수', ['6/5', '4/9', '1과 3/7', '12/8', '2/2'], ['6/5', '12/8', '2/2'], 0.24),
        pickCards('대분수를 모두 골라 보세요.', '대분수', ['2와 1/4', '7/3', '1과 5/6', '3/4', '5/5'], ['2와 1/4', '1과 5/6'], 0.22, true),
      ] },
    { id: 'a3', title: '활동 3. 어떤 표현이 알맞은지 나누기', minutes: 8, tool: 'mindmap',
      task: '상황을 읽고 대분수가 알기 쉬운지, 가분수가 알기 쉬운지 나누어 놓아요. 정답이 하나만은 아니에요.',
      teacher: '"몇 병 남았는지 말할 때는 어느 표현이 편할까요? 1/6 조각이 모두 몇 개인지 셀 때는요?" 대분수와 가분수는 같은 수라서 틀리지 않았지만 상황에 알맞은 표현을 고르는 연습이라고 짚는다.',
      levels: CARD,
      items: [
        sortCards('상황에 알맞은 표현으로 나누어 보세요.', '알맞은 표현', ['대분수가 알기 쉬워요', '가분수가 알기 쉬워요'], [
          ['주스가 몇 병 반 남았는지 말하기', '대분수가 알기 쉬워요'], ['1/5컵이 모두 11개 있다고 말하기', '가분수가 알기 쉬워요'], ['케이크 한 판과 3/8이 남았다고 말하기', '대분수가 알기 쉬워요'], ['1/6 조각이 7개 모였다고 세기', '가분수가 알기 쉬워요']], 0.22),
        sortCards('이번에도 상황에 맞게 나누어 보세요.', '알맞은 표현', ['대분수가 알기 쉬워요', '가분수가 알기 쉬워요'], [
          ['끈이 두 뼘과 4분의 1이라고 말하기', '대분수가 알기 쉬워요'], ['1/4 도막이 모두 9개라고 세기', '가분수가 알기 쉬워요'], ['쌀이 2와 1/2 kg이라고 말하기', '대분수가 알기 쉬워요'], ['1/3 조각이 5개 모였다고 말하기', '가분수가 알기 쉬워요']], 0.26),
        sortCards('마지막으로 상황에 맞게 나누어 보세요.', '알맞은 표현', ['대분수가 알기 쉬워요', '가분수가 알기 쉬워요'], [
          ['물이 1리터 반 있다고 말하기', '대분수가 알기 쉬워요'], ['1/8 조각이 모두 10개 있다고 세기', '가분수가 알기 쉬워요'], ['리본이 3과 1/3m라고 말하기', '대분수가 알기 쉬워요']], 0.28, true),
      ] },
  ],
  wrap: ['"남은 양이 한 병과 3/4라면 몇 병이라고 말하면 가장 알기 쉬울까요?" 짝에게 상황과 표현을 함께 말하게 한다. 출구 1번을 틀린 학생은 1보다 큰 수를 크기로 구분하지 않는지 다음 시간에 먼저 살핀다.', [
    { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '1보다 큰 수', basket: '고른 카드', cards: ['3/8', '9/5', '1과 2/7', '4/4'] }, prompt: '1보다 큰 수를 모두 골라 보세요.', target: { pick: ['9/5', '1과 2/7'] }, difficulty: 0.22 },
    { type: 'choice', prompt: '우유가 한 병과 4분의 3 남았어요. 가분수로 쓰면 무엇인가요?', options: ['7/4', '4/7', '3/4'], answer: 0, difficulty: 0.22, explain: '한 병은 4/4이고 3/4가 더 있으니 7/4예요.' },
    { type: 'choice', prompt: '1/5컵이 모두 12개 있어요. 몇 컵인지 대분수로 쓰면?', options: ['2와 2/5', '2와 5/2', '12/5'], answer: 0, difficulty: 0.26, explain: '5개가 한 컵이라서 12개는 두 컵과 2개, 즉 2와 2/5예요.' },
  ]],
  ws: {
    title: '남은 양을 분수로',
    items: [
      { type: 'figure', prompt: '남은 양을 대분수로 쓰세요.', tool: 'numberline', wide: true, figures: [
        { options: { mode: 'read', ...F(4, 2), labels: 'major', marks: [1.25] }, caption: '___과 ___' }, { options: { mode: 'read', ...F(5, 3), labels: 'major', marks: [2.4] }, caption: '___과 ___' }], answer: '1과 1/4, 2와 2/5' },
      { type: 'check', prompt: '1보다 큰 수에 모두 ✓ 하세요.', options: ['5/8', '8/5', '1과 1/8'], answer: '8/5, 1과 1/8' },
      { type: 'table', prompt: '상황에 알맞게 대분수나 가분수로 쓰세요.', columns: ['상황', '표현'], cells: [['주스가 한 병과 2/3 남음', ''], ['1/4 조각이 모두 9개', '']], answer: '1과 2/3, 9/4' },
      { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '분자가 분모보다 크거나 같은 분수는 ______이고, 자연수와 진분수로 나타낸 것은 ______이에요.', answer: '가분수, 대분수' },
      { type: 'short', prompt: '남은 양을 말할 때 대분수가 가분수보다 알기 쉬운 경우를 하나 써 보세요.', answer: '예: 우유가 몇 병 남았는지 말할 때 1과 1/2병이라고 하면 한눈에 알 수 있다.' },
    ],
    easy: {
      note: '1과 1/2처럼 자연수와 진분수로 쓴 것이 대분수, 3/2처럼 분자가 분모보다 크거나 같은 분수가 가분수예요.',
      items: [
        { type: 'figure', prompt: '남은 양을 대분수로 쓰세요.', tool: 'numberline', wide: true, figures: [{ options: { mode: 'read', ...F(2, 2), labels: 'major', marks: [1.5] }, caption: '___과 ___' }], answer: '1과 1/2' },
        { type: 'choice', prompt: '1보다 큰 수에 ○ 하세요.', options: ['3/4', '5/4'], answer: '5/4' },
        { type: 'table', prompt: '대분수로 쓰세요.', columns: ['가분수', '대분수'], cells: [['3/2', ''], ['5/3', '']], answer: '1과 1/2, 1과 2/3' },
        { type: 'draw', prompt: '컵 두 개를 그리고 한 컵과 반 컵의 물을 분수로 써 보세요.' },
      ],
    },
  },
  diff: {
    easy: '점 위에 값이 보이고, 카드를 놓는 칸이 맞는지 바로 알려 줘요.',
    base: '눈금 글자만 보이고 카드는 모두 놓은 뒤 확인해요.',
    challenge: '수직선이 0~3으로 길어지고, 상황 카드가 더 많이 나와요.',
  },
  notes: '자주 보이는 어려움: ① 1과 1/4를 5/1이나 1/5처럼 분모와 분자를 거꾸로 쓴다 → 한 칸의 크기가 분모. ② 상황마다 어느 표현이 알맞은지 한 가지로만 말한다 → 둘 다 같은 수지만 상황에 맞는 표현을 고르는 이유를 말로 하기. ③ 9/9처럼 1과 같은 분수를 1보다 큰 수로 고른다 → 한 판 그림으로 확인. 활동 3은 정답이 하나만이 아닌 상황도 있어 까닭을 말하는 쪽에 시간을 둔다.',
}));

// ───────────────────────────── 7차시 (core · concept) ─────────────────────────────
L.push(lesson(7, {
  std: S11,
  title: '조각 수로 분모가 같은 분수와 단위분수 견주기',
  objective: '분모가 같은 분수는 분자가 클수록 크고, 분자가 1인 단위분수는 분모가 클수록 작음을 띠 그림으로 알고 설명할 수 있다.',
  desc: 'several equal paper strips folded into different numbers of parts, laid in a row from big parts to tiny parts, on a pastel craft table with a few small flags',
  text: '누가 더 클까요?',
  layers: [{ motif: 'flower', x: 100, y: 232, color: 'sky' }, { motif: 'tree', x: 400, y: 216, s: 0.8 }, { motif: 'bird', x: 290, y: 84 }, { motif: 'star', x: 170, y: 92, s: 0.6 }],
  intro: ['"같은 크기의 종이띠를 4칸으로 나눈 한 칸과 8칸으로 나눈 한 칸은 어느 쪽이 더 클까요?" 시연 단추로 띠가 4칸, 8칸으로 나뉘고 한 칸씩 칠해지는 모습을 보여 준다. 분모가 8이니 8분의 1이 더 크다고 말하는 학생이 있으면 나눈 칸이 많을수록 한 칸이 작아진다는 것을 띠로 보여 준다.', '분모가 다른 단위분수는 어느 쪽이 더 클까요? 띠로 견주어 봐요.'],
  demo: { tool: 'fraction', options: { shape: 'strip' }, sequence: [{ den: 4, num: 1 }, { den: 8, num: 1 }] },
  acts: [
    { id: 'a1', title: '활동 1. 띠로 한 조각의 크기 견주기', minutes: 9, tool: 'fraction',
      task: '같은 길이의 띠를 다르게 나누어 한 조각씩 색칠하고 크기를 견주어요.',
      teacher: '"띠의 길이는 모두 같아요. 4칸으로 나누면 한 칸이 크고, 8칸으로 나누면 한 칸이 작아요." 분모가 클수록 크다고 하는 학생에게는 칠한 한 칸의 길이를 손가락으로 재어 보게 한다.',
      levels: FRL,
      items: [
        { prompt: '띠를 똑같이 4칸으로 나누고 4분의 1만큼 색칠해 한 조각의 크기를 보세요.', toolOptions: { shape: 'strip' }, target: { den: 4, num: 1 }, ...IT(0.12),
          predict: { q: '4분의 1과 8분의 1 중 한 조각이 더 큰 것은 어느 쪽일까요?', options: ['4분의 1', '8분의 1', '크기가 같아요'], answer: 0 },
          conclude: '같은 띠를 더 많이 나눌수록 한 조각은 작아져요.' },
        fq('같은 길이의 띠를 똑같이 8칸으로 나누고 8분의 1만큼 색칠해 보세요.', 'strip', 8, 1, 0.14),
        fq('같은 길이의 띠를 똑같이 3칸으로 나누고 3분의 1만큼 색칠해 보세요.', 'strip', 3, 1, 0.1),
        fq('8칸으로 나눈 띠에서 8분의 3과 8분의 5 중 더 큰 분수만큼 색칠해 보세요.', 'strip', 8, 5, 0.2),
      ] },
    { id: 'a2', title: '활동 2. 분수를 작은 수부터 차례로 놓기', minutes: 9, tool: 'mindmap',
      task: '분수 카드를 작은 수부터 큰 수 순서로 놓아요. 분모가 같으면 분자를 견줘요.',
      teacher: '"분모가 같으면 한 조각의 크기가 같아서 분자만 견주면 돼요." 분모가 다른 단위분수를 순서대로 놓을 때 분모가 큰 쪽이 크다고 하는 학생에게는 활동 1의 띠를 다시 떠올리게 한다.',
      levels: CARD,
      items: [
        orderCards('분모가 같은 분수 카드를 작은 수부터 차례로 놓아 보세요.', '작은 수부터', ['2/9', '5/9', '7/9'], 0.18),
        orderCards('분자만 다른 분수 카드를 작은 수부터 차례로 놓아 보세요.', '작은 수부터', ['1/7', '3/7', '4/7', '6/7'], 0.22),
        orderCards('단위분수 카드를 작은 수부터 차례로 놓아 보세요.', '단위분수 순서', ['1/8', '1/5', '1/3'], 0.26, true),
      ] },
    { id: 'a3', title: '활동 3. 가장 큰 단위분수 고르기', minutes: 8, tool: 'mindmap',
      task: '카드 중에서 가장 큰 단위분수를 골라요. 분모가 작을수록 큰 수예요.',
      teacher: '"단위분수는 1을 똑같이 나눈 것 중의 하나라서, 나눈 수가 작을수록 한 조각이 커요." 1/10이 1/3보다 크다고 말하는 학생에게는 10칸으로 나눈 띠와 3칸으로 나눈 띠를 그려 견주게 한다.',
      levels: CARD,
      items: [
        pickCards('가장 큰 단위분수를 골라 보세요.', '가장 큰 수', ['1/3', '1/5', '1/9'], ['1/3'], 0.2),
        pickCards('단위분수 가운데 가장 큰 것을 골라 보세요.', '가장 큰 수', ['1/4', '1/7', '1/2', '1/10'], ['1/2'], 0.24),
        pickCards('이번에는 가장 큰 단위분수를 찾아 보세요.', '가장 큰 수', ['1/6', '1/10', '1/8'], ['1/6'], 0.22, true),
      ] },
  ],
  wrap: ['"분모가 같은 분수는 무엇을 견주면 될까요? 단위분수는요?" 짝에게 띠를 그려 가며 말하게 한다. 출구 2번을 틀린 학생은 분모가 클수록 큰 수라고 생각하는지 다음 시간에 먼저 짚는다.', [
    { type: 'tool', tool: 'mindmap', options: { mode: 'order', topic: '작은 수부터', cards: ['4/11', '9/11', '6/11'].map((s) => ({ id: s, text: s })) }, prompt: '분수 카드를 작은 수부터 차례로 놓아 보세요.', target: { order: ['4/11', '6/11', '9/11'] }, difficulty: 0.2 },
    { type: 'choice', prompt: '1/5과 1/12 중 더 큰 수는 무엇인가요?', options: ['1/5', '1/12', '같아요'], answer: 0, difficulty: 0.22, explain: '1을 5로 나눈 한 조각이 12로 나눈 한 조각보다 커요. 분모가 작을수록 단위분수는 커요.' },
    { type: 'choice', prompt: '분모가 같은 분수 3/8과 6/8 중 어느 것이 더 큰가요?', options: ['3/8', '6/8', '같아요'], answer: 1, difficulty: 0.14, explain: '분모가 같으면 분자가 큰 분수가 더 커요.' },
  ]],
  ws: {
    title: '분수의 크기 견주기',
    items: [
      { type: 'figure', prompt: '색칠한 부분이 더 큰 쪽에 ○ 하세요.', tool: 'fraction', answer: '나', figures: [
        { options: { shape: 'strip' }, state: { n: 8, colored: [0, 1, 2] }, caption: '가' }, { options: { shape: 'strip' }, state: { n: 8, colored: [0, 1, 2, 3, 4] }, caption: '나' }] },
      { type: 'figure', prompt: '단위분수 띠를 보고 더 큰 쪽에 ○ 하세요.', tool: 'fraction', answer: '4분의 1이 더 크다', figures: [
        { options: { shape: 'strip' }, state: { n: 4, colored: [0] }, caption: '1/4' }, { options: { shape: 'strip' }, state: { n: 9, colored: [0] }, caption: '1/9' }] },
      { type: 'choice', prompt: '큰 수부터 쓴 것을 고르세요.', options: ['5/7 > 3/7 > 1/7', '1/7 > 3/7 > 5/7', '3/7 > 5/7 > 1/7'], answer: '5/7 > 3/7 > 1/7' },
      { type: 'blank', prompt: '알맞은 수나 말을 쓰세요.', text: '분모가 같은 분수는 ______가 클수록 큰 수이고, 단위분수는 분모가 ______수록 큰 수예요.', answer: '분자, 작을' },
      { type: 'short', prompt: '1/3이 1/6보다 큰 까닭을 띠 그림으로 설명해 보세요.', answer: '같은 띠를 3칸으로 나눈 한 칸이 6칸으로 나눈 한 칸보다 크기 때문이다.' },
    ],
    easy: {
      note: '같은 띠를 많이 나눌수록 한 칸은 작아져요. 분모가 같으면 분자가 큰 쪽이 더 커요.',
      items: [
        { type: 'figure', prompt: '색칠한 부분이 더 큰 쪽에 ○ 하세요.', tool: 'fraction', figures: [{ options: { shape: 'strip' }, state: { n: 6, colored: [0, 1] }, caption: '가' }, { options: { shape: 'strip' }, state: { n: 6, colored: [0, 1, 2, 3] }, caption: '나' }], answer: '나' },
        { type: 'choice', prompt: '더 큰 수에 ○ 하세요.', options: ['1/2', '1/4'], answer: '1/2' },
        { type: 'blank', prompt: '알맞은 말을 쓰세요.', text: '분모가 같으면 ______가 큰 쪽이 더 커요.', answer: '분자' },
        { type: 'draw', prompt: '같은 띠 두 개를 그려 한쪽은 2칸, 다른 쪽은 4칸으로 나누고 한 칸씩 색칠해 견주어 보세요.' },
      ],
    },
  },
  diff: {
    easy: '분모와 분자의 이름이 보이고, 카드를 놓는 순서가 맞는지 바로 알려 줘요.',
    base: '카드를 모두 놓은 뒤 확인을 눌러 알아봐요.',
    challenge: '카드가 4장으로 늘고 1/2처럼 분모가 아주 작은 단위분수가 섞여요.',
  },
  notes: '자주 보이는 어려움: ① 분모가 클수록 분수도 크다고 여긴다(1/7이 1/4보다 크다) → 같은 띠를 4칸·7칸으로 나눈 한 칸을 겹쳐 본다. ② 분모가 같을 때 분모를 견준다 → 분모가 같으면 한 칸의 크기가 같으므로 분자(칸 수)만 견준다. ③ 분모가 다르고 분자도 1이 아닌 분수는 이 시간에 다루지 않는다(분모가 같거나 단위분수만). 띠로 눈으로 확인하는 시간을 충분히 둔다.',
}));

// ───────────────────────────── 8차시 (core · representation) ─────────────────────────────
L.push(lesson(8, {
  std: S11,
  title: '수직선에 두 분수를 놓고 부등호로 크기 쓰기',
  objective: '수직선에서 오른쪽에 있는 분수가 더 크다는 것을 이용하여 두 분수의 크기를 견주고, 부등호로 나타낼 수 있다.',
  desc: 'a long number line from zero to one with two paper flags placed at different spots and a small big-mouth paper crocodile whose mouth opens toward the larger side',
  text: '수직선과 부등호',
  layers: [{ motif: 'flower', x: 100, y: 232, color: 'rose' }, { motif: 'tree', x: 400, y: 216, s: 0.8 }, { motif: 'bird', x: 280, y: 84 }, { motif: 'house', x: 90, y: 214, s: 0.7 }],
  intro: ['"수직선에서 오른쪽으로 갈수록 수는 어떻게 될까요?" 시연 단추로 점 두 개가 5분의 2와 5분의 4 자리로 가는 모습을 보여 준다. 점이 오른쪽에 있는 분수가 더 크다고 말하게 하고, 부등호의 벌어진 쪽이 큰 수를 향한다고 알려 준다.', '두 분수를 수직선에 놓으면 어느 쪽이 더 클까요?'],
  demo: { tool: 'numberline', options: { mode: 'place', ...F(5), labels: 'ends' }, sequence: [{ points: ['2/5', '4/5'] }] },
  acts: [
    { id: 'a1', title: '활동 1. 두 분수를 수직선에 놓고 견주기', minutes: 9, tool: 'numberline',
      task: '가와 나의 분수를 수직선에 놓고, 더 오른쪽에 있는 쪽이 더 큰 수예요.',
      teacher: '"0에서 더 멀리 있는 점이 더 큰 수예요." 분모가 같은데 점을 서로 가깝게 놓아 크기를 구분하기 어려워하는 학생에게는 한 칸씩 짚어 가며 세게 한다.',
      levels: NLP,
      items: [
        nlp('가는 5분의 2, 나는 5분의 4예요. 두 점을 놓고 더 큰 수를 말해 보세요.', F(5), ['2/5', '4/5'], 0.14),
        nlp('가는 8분의 6, 나는 8분의 3이에요. 두 점을 놓고 더 큰 수를 말해 보세요.', F(8), ['6/8', '3/8'], 0.2),
        nlp('가는 10분의 9, 나는 10분의 5예요. 두 점을 놓아 보세요.', F(10), ['9/10', '5/10'], 0.24),
      ] },
    { id: 'a2', title: '활동 2. 크기를 부등호로 나타내기', minutes: 9, tool: 'mindmap',
      task: '두 분수와 부등호가 바르게 쓰인 카드를 짝지어요. 큰 수 쪽이 벌어져요.',
      teacher: '"부등호는 입이 벌어진 쪽이 큰 수예요." 3/7 > 5/7처럼 방향을 거꾸로 쓴 카드를 고르는 학생에게는 수직선에서 어느 쪽이 오른쪽인지 먼저 말하게 한다.',
      levels: CARD,
      items: [
        matchCards('두 분수에 부등호가 바르게 쓰인 카드를 짝지어 보세요.', '크기 견주기', [['3/7과 5/7', '3/7 < 5/7'], ['4/9와 2/9', '4/9 > 2/9'], ['1/6과 1/4', '1/6 < 1/4']], ['3/7 > 5/7'], 0.2),
        matchCards('이번에도 부등호가 바르게 쓰인 카드를 짝지어 보세요.', '크기 견주기', [['5/11과 8/11', '5/11 < 8/11'], ['7/12와 4/12', '7/12 > 4/12'], ['1/3과 1/10', '1/3 > 1/10']], ['5/11 > 8/11'], 0.24),
        matchCards('마지막 두 분수의 크기를 부등호로 나타낸 카드를 짝지어 보세요.', '크기 견주기', [['2/5와 3/5', '2/5 < 3/5'], ['9/10과 6/10', '9/10 > 6/10'], ['1/9와 1/2', '1/9 < 1/2']], ['1/9 > 1/2'], 0.26, true),
      ] },
    { id: 'a3', title: '활동 3. 1/2보다 작은지 큰지 나누기', minutes: 8, tool: 'mindmap',
      task: '분수가 반(1/2)보다 작은지 큰지 나누어요. 분자가 분모의 반보다 작은지 살펴요.',
      teacher: '"분모가 8이면 반은 8의 반인 4칸이에요. 3칸은 4칸보다 작아요." 분자만 보고 큰 수라고 하는 학생에게는 전체를 몇 칸으로 나누었는지 다시 세어 비교하게 한다.',
      levels: CARD,
      items: [
        sortCards('분수 카드를 1/2보다 작은 것과 큰 것으로 나누어 보세요.', '반과 견주기', ['1/2보다 작아요', '1/2보다 커요'], [
          ['3/8', '1/2보다 작아요'], ['5/8', '1/2보다 커요'], ['1/6', '1/2보다 작아요'], ['5/6', '1/2보다 커요']], 0.22),
        sortCards('이번에도 반과 견주어 나누어 보세요.', '반과 견주기', ['1/2보다 작아요', '1/2보다 커요'], [
          ['3/10', '1/2보다 작아요'], ['7/10', '1/2보다 커요'], ['1/4', '1/2보다 작아요'], ['3/4', '1/2보다 커요']], 0.26),
        sortCards('마지막 카드들을 반과 견주어 나누어 보세요.', '반과 견주기', ['1/2보다 작아요', '1/2보다 커요'], [
          ['1/8', '1/2보다 작아요'], ['7/8', '1/2보다 커요'], ['2/6', '1/2보다 작아요'], ['4/6', '1/2보다 커요']], 0.28, true),
      ] },
  ],
  wrap: ['"수직선에서 어느 점이 더 큰 수일까요? 부등호는 어느 쪽이 벌어지나요?" 짝에게 수직선을 그려 가며 말하게 한다. 출구 2번을 틀린 학생은 부등호 방향을 거꾸로 쓰는지 다음 시간에 먼저 짚는다.', [
    { type: 'tool', tool: 'numberline', options: { mode: 'place', ...F(7), labels: 'ends' }, prompt: '가는 7분의 5, 나는 7분의 2예요. 두 점을 놓아 보세요.', target: { points: ['5/7', '2/7'] }, difficulty: 0.2 },
    { type: 'choice', prompt: '6/11과 9/11의 크기를 바르게 나타낸 것은 무엇인가요?', options: ['6/11 < 9/11', '6/11 > 9/11', '6/11 = 9/11'], answer: 0, difficulty: 0.18, explain: '분모가 같으니 분자가 더 큰 9/11이 더 커요. 입이 벌어진 쪽이 큰 수예요.' },
    { type: 'choice', prompt: '3/8은 1/2보다 작을까요, 클까요?', options: ['작아요', '커요', '같아요'], answer: 0, difficulty: 0.24, explain: '8칸 중 반은 4칸이에요. 3칸은 4칸보다 적어서 1/2보다 작아요.' },
  ]],
  ws: {
    title: '수직선과 부등호',
    items: [
      { type: 'figure', prompt: '수직선의 가와 나 중 더 큰 수에 ○ 하세요.', tool: 'numberline', wide: true, answer: '나', figures: [
        { options: { mode: 'read', ...F(6), labels: 'ends', marks: [0.5] }, caption: '가 = ___' }, { options: { mode: 'read', ...F(6), labels: 'ends', marks: [0.833] }, caption: '나 = ___' }] },
      { type: 'table', prompt: '두 분수의 크기를 비교해 ○ 안에 >, <를 쓰세요.', columns: ['식', '식', '식'], cells: [['2/7 ○ 5/7', '8/9 ○ 4/9', '1/5 ○ 1/8']], answer: '<, >, >' },
      { type: 'choice', prompt: '큰 수부터 차례로 쓴 것을 고르세요.', options: ['7/10 > 4/10 > 2/10', '2/10 > 4/10 > 7/10', '4/10 > 7/10 > 2/10'], answer: '7/10 > 4/10 > 2/10' },
      { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '수직선에서는 ______쪽에 있는 수가 더 큰 수예요.', answer: '오른' },
      { type: 'short', prompt: '4/9와 7/9의 크기를 수직선을 이용해 설명해 보세요.', answer: '수직선에서 7/9가 4/9보다 오른쪽에 있으므로 7/9가 더 크다.' },
    ],
    easy: {
      note: '수직선에서 오른쪽에 있는 수가 더 커요. 부등호는 벌어진 쪽이 큰 수예요.',
      items: [
        { type: 'figure', prompt: '더 큰 수에 ○ 하세요.', tool: 'numberline', wide: true, figures: [{ options: { mode: 'read', ...F(4), labels: 'ends', marks: [0.25] }, caption: '가 = ___' }, { options: { mode: 'read', ...F(4), labels: 'ends', marks: [0.75] }, caption: '나 = ___' }], answer: '나' },
        { type: 'table', prompt: '○ 안에 >, <를 쓰세요.', columns: ['식', '식'], cells: [['1/4 ○ 3/4', '4/5 ○ 2/5']], answer: '<, >' },
        { type: 'choice', prompt: '입이 벌어진 쪽은 어떤 수일까요?', options: ['큰 수', '작은 수'], answer: '큰 수' },
        { type: 'draw', prompt: '0과 1 사이를 6칸으로 나눈 수직선에 6분의 2와 6분의 5를 점으로 찍고 부등호로 써 보세요.' },
      ],
    },
  },
  diff: {
    easy: '점 위에 값이 보이고 짝짓기 카드가 맞게 놓이면 초록 테두리가 보여요.',
    base: '눈금 글자만 보이고 카드는 모두 놓은 뒤 확인해요.',
    challenge: '수직선 양 끝 숫자만 보이고, 분모가 다른 단위분수 카드가 섞여요.',
  },
  notes: '자주 보이는 어려움: ① 부등호의 방향을 거꾸로 쓴다 → 입이 벌어진 쪽이 큰 수. ② 수직선의 칸 수와 분모가 다르게 점을 놓아 크기가 어긋난다 → 0과 1 사이 칸 수를 먼저 세기. ③ 1/2와 견줄 때 분자만 보고 크다고 한다(3/8이 3/4보다 크다) → 분모가 다르면 분자만으로 비교할 수 없음. 활동 3의 반과 견주기는 분모가 짝수인 분수만 쓴다.',
}));

// ───────────────────────────── 9차시 (core · application) ─────────────────────────────
L.push(lesson(9, {
  std: S11,
  title: '케이크와 주스를 더 많이 먹은 사람 가리기',
  objective: '같은 크기의 전체에서 먹은 양을 분수로 나타내어 더 많이 먹은 사람을 가리고, 전체가 다를 때는 분수만으로 비교할 수 없음을 말할 수 있다.',
  desc: 'two children at a table with an identical round cake and a small plate each, one plate with more cake pieces than the other, plus a juice bottle and cups',
  text: '누가 더 많이?',
  layers: [{ motif: 'house', x: 110, y: 216, s: 0.8 }, { motif: 'flower', x: 400, y: 232, color: 'lavender' }, { motif: 'bird', x: 290, y: 84 }, { motif: 'tree', x: 60, y: 220, s: 0.8 }],
  intro: ['"같은 케이크를 언니는 8조각 중 3조각, 동생은 8조각 중 5조각 먹었어요. 누가 더 많이 먹었을까요?" 시연 단추로 띠가 8칸으로 나뉘고 3칸, 5칸이 차례로 칠해지는 모습을 보여 준다. 작은 케이크와 큰 케이크의 조각을 바로 견주는 학생이 있으면 전체의 크기가 같은지부터 확인하자고 말한다.', '분수로 먹은 양을 나타내면 누가 더 많이 먹었는지 알 수 있을까요?'],
  demo: { tool: 'fraction', options: { shape: 'strip' }, sequence: [{ den: 8, num: 3 }, { den: 8, num: 5 }] },
  acts: [
    { id: 'a1', title: '활동 1. 더 많이 먹은 사람 고르기', minutes: 8, tool: 'mindmap',
      task: '이야기를 읽고 더 많이 먹은 사람의 카드를 골라요. 전체의 크기는 같아요.',
      teacher: '"전체가 같으면 분모가 같을 때 분자만 견주면 돼요." 분수 카드의 수만 보고 가장 작은 수의 사람이 많이 먹었다고 하는 학생에게는 띠 그림을 그려 확인하게 한다.',
      levels: CARD,
      items: [
        pickCards('같은 케이크를 언니는 3/8, 동생은 5/8만큼 먹었어요. 더 많이 먹은 사람은?', '더 많이 먹은 사람', ['언니 — 3/8', '동생 — 5/8'], ['동생 — 5/8'], 0.12),
        pickCards('같은 병의 주스를 민지는 4/6, 준호는 1/6만큼 마셨어요. 더 많이 마신 사람은?', '더 많이 마신 사람', ['민지 — 4/6', '준호 — 1/6'], ['민지 — 4/6'], 0.14),
        pickCards('같은 빵을 아라는 1/3, 도윤은 1/5만큼 먹었어요. 더 많이 먹은 사람은?', '더 많이 먹은 사람', ['아라 — 1/3', '도윤 — 1/5'], ['아라 — 1/3'], 0.22),
      ] },
    { id: 'a2', title: '활동 2. 먹은 양을 띠에 색칠해 확인하기', minutes: 9, tool: 'fraction',
      task: '먹은 양을 띠에 색칠하고 누가 더 많이 먹었는지 그림으로 확인해요.',
      teacher: '"띠의 길이가 같으니 색칠한 칸이 많은 쪽이 더 많이 먹은 거예요." 분수의 숫자 크기만 말하고 색칠한 그림을 보지 않는 학생에게는 칠한 길이를 두 띠에서 비교하게 한다.',
      levels: FRL,
      items: [
        { prompt: '초콜릿을 6칸으로 나누어 지우는 4칸, 서아는 1칸 먹었어요. 더 많이 먹은 지우가 먹은 만큼 색칠해 보세요.', toolOptions: { shape: 'strip' }, target: { den: 6, num: 4 }, ...IT(0.14),
          predict: { q: '같은 초콜릿에서 4칸을 먹은 사람과 1칸을 먹은 사람 중 누가 더 많이 먹었을까요?', options: ['4칸 먹은 사람', '1칸 먹은 사람', '같아요'], answer: 0 },
          conclude: '같은 크기의 초콜릿을 같은 칸 수로 나눴으니 칸이 많을수록 많이 먹은 거예요.' },
        fq('케이크를 10칸으로 나누어 오빠는 7칸, 나는 2칸 먹었어요. 더 적게 먹은 내가 먹은 만큼 색칠해 보세요.', 'strip', 10, 2, 0.18),
        fq('파이를 9칸으로 나누어 하나는 5칸, 우진은 8칸 먹었어요. 더 많이 먹은 우진이 먹은 만큼 색칠해 보세요.', 'strip', 9, 8, 0.2),
        fq('피자를 12조각으로 나누어 재이는 5조각, 하린은 9조각 먹었어요. 하린이 먹은 만큼 색칠해 보세요.', 'pizza', 12, 9, 0.26, true),
      ] },
    { id: 'a3', title: '활동 3. 분수만으로 견줄 수 있는 경우 가리기', minutes: 9, tool: 'mindmap',
      task: '분수만 보고 크기를 견줄 수 있는 경우와, 전체가 달라서 견줄 수 없는 경우로 나누어요.',
      teacher: '"큰 피자의 1/4과 작은 피자의 3/4은 분수만 보고 어느 쪽이 더 많다고 말할 수 있을까요?" 분수가 크면 양도 많다고 하는 학생에게는 전체의 크기가 같은지부터 확인하게 한다.',
      levels: CARD,
      items: [
        sortCards('상황을 분수만 보고 견줄 수 있는지 나누어 보세요.', '견줄 수 있을까?', ['분수만 보고 견줄 수 있어요', '전체가 달라 견줄 수 없어요'], [
          ['같은 케이크의 3/8과 5/8', '분수만 보고 견줄 수 있어요'], ['큰 피자의 2/4와 작은 피자의 3/4', '전체가 달라 견줄 수 없어요'], ['같은 띠의 1/3과 1/7', '분수만 보고 견줄 수 있어요'], ['큰 컵의 1/2과 작은 컵의 1/2', '전체가 달라 견줄 수 없어요']], 0.22),
        sortCards('이번에도 견줄 수 있는지 나누어 보세요.', '견줄 수 있을까?', ['분수만 보고 견줄 수 있어요', '전체가 달라 견줄 수 없어요'], [
          ['같은 크기 빵의 4/9와 7/9', '분수만 보고 견줄 수 있어요'], ['큰 수박의 3/5와 작은 수박의 4/5', '전체가 달라 견줄 수 없어요'], ['같은 리본의 1/2과 1/6', '분수만 보고 견줄 수 있어요'], ['긴 끈의 1/4과 짧은 끈의 1/4', '전체가 달라 견줄 수 없어요']], 0.26),
        sortCards('마지막으로 견줄 수 있는지 나누어 보세요.', '견줄 수 있을까?', ['분수만 보고 견줄 수 있어요', '전체가 달라 견줄 수 없어요'], [
          ['같은 케이크의 5/12와 2/12', '분수만 보고 견줄 수 있어요'], ['큰 상자의 3/10과 작은 상자의 7/10', '전체가 달라 견줄 수 없어요'], ['같은 병의 1/8과 1/3', '분수만 보고 견줄 수 있어요']], 0.3, true),
      ] },
  ],
  wrap: ['"전체가 같을 때는 분수만 보고 크기를 견줄 수 있어요. 전체가 다르면 어떻게 될까요?" 짝에게 큰 피자와 작은 피자를 그려 가며 말하게 한다. 출구 3번을 틀린 학생은 분수만 크면 양도 많다고 믿는지 다음 시간에 먼저 짚는다.', [
    { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '더 많이 먹은 사람', basket: '고른 카드', cards: ['소율 — 2/9', '다온 — 7/9'] }, prompt: '같은 파이를 소율이는 2/9, 다온이는 7/9만큼 먹었어요. 더 많이 먹은 사람은?', target: { pick: ['다온 — 7/9'] }, difficulty: 0.14 },
    { type: 'choice', prompt: '같은 크기의 피자를 3/10과 8/10만큼 먹은 사람 중 더 많이 먹은 사람의 분수는?', options: ['3/10', '8/10', '비교할 수 없어요'], answer: 1, difficulty: 0.16, explain: '전체가 같고 분모도 같으니 분자가 큰 8/10이 더 많이 먹은 거예요.' },
    { type: 'choice', prompt: '큰 접시의 1/2과 작은 접시의 1/2는 같은 양일까요?', options: ['같은 양이에요', '전체가 달라서 같다고 할 수 없어요'], answer: 1, difficulty: 0.22, explain: '분수가 같아도 전체의 크기가 다르면 실제 양은 달라요.' },
  ]],
  ws: {
    title: '더 많이 먹은 사람',
    items: [
      { type: 'figure', prompt: '같은 크기의 띠에서 누가 더 많이 먹었는지 ○ 하세요.', tool: 'fraction', answer: '나', figures: [
        { options: { shape: 'strip' }, state: { n: 6, colored: [0, 1] }, caption: '가 : 6분의 2' }, { options: { shape: 'strip' }, state: { n: 6, colored: [0, 1, 2, 3, 4] }, caption: '나 : 6분의 5' }] },
      { type: 'table', prompt: '같은 케이크를 먹은 양이에요. 더 많이 먹은 사람을 쓰세요.', columns: ['언니가 먹은 양', '동생이 먹은 양', '더 많이 먹은 사람'], cells: [['3/8', '5/8', ''], ['7/10', '4/10', '']], answer: '동생, 언니' },
      { type: 'choice', prompt: '분수만 보고 크기를 견줄 수 있는 것은?', options: ['같은 케이크의 3/9와 7/9', '큰 피자의 2/4와 작은 피자의 3/4', '큰 컵의 1/2과 작은 컵의 1/2'], answer: '같은 케이크의 3/9와 7/9' },
      { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '전체의 크기가 ______ 때에만 분수의 크기로 양을 견줄 수 있어요.', answer: '같을' },
      { type: 'short', prompt: '언니는 같은 케이크의 3/8, 동생은 5/8만큼 먹었어요. 더 많이 먹은 사람과 까닭을 써 보세요.', answer: '동생이 더 많이 먹었다. 분모가 같고 분자 5가 3보다 크기 때문이다.' },
    ],
    easy: {
      note: '전체가 같고 분모도 같으면 분자(칠한 칸 수)가 큰 쪽이 더 많이 먹은 거예요.',
      items: [
        { type: 'figure', prompt: '더 많이 먹은 쪽에 ○ 하세요.', tool: 'fraction', figures: [{ options: { shape: 'strip' }, state: { n: 5, colored: [0] }, caption: '가 : 5분의 1' }, { options: { shape: 'strip' }, state: { n: 5, colored: [0, 1, 2] }, caption: '나 : 5분의 3' }], answer: '나' },
        { type: 'choice', prompt: '같은 케이크에서 4/6과 1/6 중 더 많이 먹은 양은?', options: ['4/6', '1/6'], answer: '4/6' },
        { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '분모가 같으면 ______가 클수록 많이 먹은 거예요.', answer: '분자' },
        { type: 'draw', prompt: '같은 띠 두 개를 그려 한쪽은 6칸 중 2칸, 다른 쪽은 6칸 중 4칸을 칠하고 더 큰 쪽에 ○ 하세요.' },
      ],
    },
  },
  diff: {
    easy: '띠 위에 분모·분자의 이름이 보이고, 카드를 칸에 놓으면 맞는지 바로 알려 줘요.',
    base: '카드를 모두 놓은 뒤 확인을 눌러 알아봐요.',
    challenge: '피자 12조각처럼 조각이 많고 분모가 다른 단위분수 상황이 섞여요.',
  },
  notes: '자주 보이는 어려움: ① 전체의 크기가 다른데도 분수만 견준다(큰 피자의 1/4 vs 작은 피자의 3/4) → 전체가 같은지부터 확인. ② 먹고 남은 양과 먹은 양을 헷갈린다 → 문제가 묻는 쪽(먹은 양)만 색칠. ③ 같은 분수면 양도 같다고 한다(큰 컵의 1/2과 작은 컵의 1/2) → 전체의 크기가 다르면 실제 양은 다르다. 활동 3은 분수의 크기 비교가 항상 가능한 것은 아니라는 한계를 처음 만나는 시간이다.',
}));

// ───────────────────────────── 10차시 (core · concept) ─────────────────────────────
L.push(lesson(10, {
  std: S12,
  title: '10칸으로 나눈 띠에서 십분의 몇을 소수로 나타내기',
  objective: '1을 똑같이 10칸으로 나눈 한 칸을 0.1이라 하고, 십분의 몇을 소수 한 자리 수로 읽고 쓸 수 있다.',
  desc: 'a long paper strip divided into ten equal boxes with some boxes colored, a small ruler marked with tenths beneath it, and a few flags showing numbers like zero point three',
  text: '십분의 몇은 0.몇',
  layers: [{ motif: 'flower', x: 100, y: 232, color: 'sky' }, { motif: 'tree', x: 400, y: 216, s: 0.8 }, { motif: 'bird', x: 290, y: 84 }, { motif: 'star', x: 170, y: 92, s: 0.6 }],
  intro: ['"종이띠를 똑같이 10칸으로 나누고 7칸을 칠했어요. 이것을 10분의 7이라고 했지요. 0.7이라고도 쓸 수 있어요." 시연 단추로 띠가 10칸으로 나뉘고 7칸이 칠해지는 모습을 보여 준다. 0.7을 7과 같은 크기라고 생각하는 학생이 있으면 0과 1 사이의 수라고 짚는다.', '10분의 몇은 0.몇으로도 쓸 수 있어요. 어떻게 읽고 쓸까요?'],
  demo: { tool: 'fraction', options: { shape: 'strip' }, sequence: [{ den: 10 }, { den: 10, num: 7 }] },
  acts: [
    { id: 'a1', title: '활동 1. 10칸 띠에 십분의 몇 색칠하기', minutes: 8, tool: 'fraction',
      task: '띠를 10칸으로 나누고 십분의 몇만큼 색칠해요. 한 칸은 0.1이에요.',
      teacher: '"1을 똑같이 10으로 나눈 한 칸이 10분의 1이고, 0.1이라고도 써요." 10칸 중 7칸을 칠하고 0.07이라고 하는 학생에게는 0.1이 7개라고 말하게 한다.',
      levels: FRL,
      items: [
        fqr('띠를 똑같이 10칸으로 나누고 10분의 1만큼 색칠해 한 칸의 크기를 보세요.', 'strip', 10, 1, 0.1),
        fqr('10칸으로 나눈 띠에서 10분의 7만큼 색칠해 보세요.', 'strip', 10, 7, 0.14),
        fq('10칸으로 나눈 띠에서 10분의 9만큼 색칠해 보세요.', 'strip', 10, 9, 0.16),
      ] },
    { id: 'a2', title: '활동 2. 수직선에 소수 점 놓기', minutes: 9, tool: 'numberline',
      task: '0과 1 사이를 10칸으로 나눈 수직선이에요. 소수만큼 오른쪽으로 가서 점을 놓아요.',
      teacher: '"0.4는 0에서 한 칸이 0.1인 칸을 몇 번 간 곳일까요?" 0.4를 4칸이 아니라 4가 적힌 곳으로 생각해 1보다 멀리 놓는 학생에게는 0과 1 사이가 10칸이라는 것을 다시 세게 한다.',
      levels: NLD({ min: 0, max: 1, step: 1, sub: 10, format: 'dec' }),
      items: [
        nlp('0과 1 사이가 10칸이에요. 0.4 자리에 점을 놓아 보세요.', { min: 0, max: 1, step: 1, sub: 10, format: 'dec' }, [0.4], 0.14),
        nlp('0.8 자리에 점을 놓아 보세요. 0.1이 몇 개인지 생각해요.', { min: 0, max: 1, step: 1, sub: 10, format: 'dec' }, [0.8], 0.18),
        nlp('0.1 자리에 점을 놓아 보세요.', { min: 0, max: 1, step: 1, sub: 10, format: 'dec' }, [0.1], 0.1),
        nlp('0.3과 0.6 자리에 점 두 개를 차례로 놓아 보세요.', { min: 0, max: 1, step: 1, sub: 10, format: 'dec' }, [0.3, 0.6], 0.24, true),
      ] },
    { id: 'a3', title: '활동 3. 분수와 소수 짝짓기', minutes: 9, tool: 'mindmap',
      task: '십분의 몇인 분수와 같은 크기의 소수를 짝지어요. 소수점 아래 첫째 자리가 십분의 몇이에요.',
      teacher: '"0.3은 영 점 삼이라고 읽고 10분의 3과 같은 크기예요." 0.03을 3/10과 짝짓는 학생에게는 소수점 아래 첫째 자리가 0.1이 몇 개인지 나타낸다고 짚는다.',
      levels: CARD,
      items: [
        matchCards('분수와 같은 크기의 소수를 짝지어 보세요.', '분수와 소수', [['3/10', '0.3'], ['7/10', '0.7'], ['1/10', '0.1']], ['0.03'], 0.18),
        matchCards('이번에도 같은 크기의 소수를 짝지어 보세요.', '분수와 소수', [['2/10', '0.2'], ['5/10', '0.5'], ['9/10', '0.9']], ['0.09'], 0.22),
        matchCards('마지막으로 분수와 소수를 짝지어 보세요.', '분수와 소수', [['4/10', '0.4'], ['6/10', '0.6'], ['8/10', '0.8']], ['0.04', '4.0'], 0.24, true),
      ] },
  ],
  wrap: ['"10분의 3과 0.3은 같은 크기일까요? 0.3과 3은요?" 짝에게 10칸 띠를 그려 가며 말하게 한다. 출구 2번을 틀린 학생은 0.3을 0.03처럼 쓰거나 3과 같다고 하는지 다음 시간에 먼저 짚는다.', [
    { type: 'tool', tool: 'numberline', options: { mode: 'place', min: 0, max: 1, step: 1, sub: 10, format: 'dec', labels: 'ends' }, prompt: '0과 1 사이가 10칸이에요. 0.5 자리에 점을 놓아 보세요.', target: { points: [0.5] }, difficulty: 0.14 },
    { type: 'choice', prompt: '10분의 6을 소수로 바르게 쓴 것은 무엇인가요?', options: ['0.6', '0.06', '6.0'], answer: 0, difficulty: 0.14, explain: '1을 10칸으로 나눈 한 칸이 0.1이라서 6칸은 0.6이에요.' },
    { type: 'choice', prompt: '0.9는 0.1이 몇 개 모인 수인가요?', options: ['9개', '90개', '1개'], answer: 0, difficulty: 0.16, explain: '0.9는 0.1이 9개 모인 수예요.' },
  ]],
  ws: {
    title: '십분의 몇과 소수',
    items: [
      { type: 'figure', prompt: '색칠한 부분을 분수와 소수로 쓰세요.', tool: 'fraction', answer: '4/10, 0.4 / 8/10, 0.8', figures: [
        { options: { shape: 'strip', frame: true }, state: { n: 10, colored: [0, 1, 2, 3] }, caption: '분수 ___ 소수 ___' }, { options: { shape: 'strip', frame: true }, state: { n: 10, colored: [0, 1, 2, 3, 4, 5, 6, 7] }, caption: '분수 ___ 소수 ___' }] },
      { type: 'table', prompt: '분수와 소수를 짝지어 빈칸을 채우세요.', columns: ['분수', '소수'], cells: [['3/10', ''], ['', '0.7'], ['9/10', ''], ['', '0.2']], answer: '0.3, 7/10, 0.9, 2/10' },
      { type: 'choice', prompt: '0.5와 크기가 같은 분수는 무엇인가요?', options: ['5/10', '5/100', '10/5'], answer: '5/10' },
      { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '0.1이 6개이면 ___이고, 10분의 ___과 같아요.', answer: '0.6, 6' },
      { type: 'short', prompt: '0.7과 7이 같은 크기가 아닌 까닭을 써 보세요.', answer: '0.7은 1보다 작은 수로 0.1이 7개이고, 7은 1이 7개인 수이기 때문이다.' },
    ],
    easy: {
      note: '1을 똑같이 10칸으로 나눈 한 칸은 10분의 1이고, 소수로는 0.1이에요. 10분의 3 = 0.3.',
      items: [
        { type: 'figure', prompt: '색칠한 부분을 분수와 소수로 쓰세요.', tool: 'fraction', figures: [{ options: { shape: 'strip', frame: true }, state: { n: 10, colored: [0, 1] }, caption: '분수 ___ 소수 ___' }], answer: '2/10, 0.2' },
        { type: 'table', prompt: '빈칸을 채우세요.', columns: ['분수', '소수'], cells: [['5/10', ''], ['', '0.1']], answer: '0.5, 1/10' },
        { type: 'choice', prompt: '10분의 4를 소수로 쓴 것에 ○ 하세요.', options: ['0.4', '0.04'], answer: '0.4' },
        { type: 'draw', prompt: '10칸 띠를 그리고 0.3만큼 색칠한 뒤 분수로도 써 보세요.' },
      ],
    },
  },
  diff: {
    easy: '띠에 분모·분자의 이름이 보이고, 수직선에는 모든 눈금 글자와 점 위의 값이 보여요.',
    base: '분수 읽기 칸은 맞힌 뒤에만 보이고, 수직선은 큰 눈금 글자만 보여요.',
    challenge: '수직선에 양 끝 눈금만 보이고 0.3과 0.6처럼 점 두 개를 놓아요.',
  },
  notes: '자주 보이는 어려움: ① 0.7을 7/100이나 7과 같다고 여긴다 → 0과 1 사이를 10칸으로 나눈 7칸. ② 0.03과 0.3을 구분하지 못한다 → 소수점 아래 첫째 자리가 0.1이 몇 개인지. ③ 10분의 몇에서 분모 10을 소수에 쓴다(0.10) → 소수점 아래 한 자리가 십분의 일 자리. 이 차시는 분모가 10인 분수만 다룬다.',
}));

// ───────────────────────────── 11차시 (wrap · representation) ─────────────────────────────
L.push(lesson(11, {
  std: S12,
  title: '소수만큼 색칠하고 분수와 소수로 쓰며 단원 정리하기',
  objective: '소수 한 자리 수만큼 10칸 띠에 색칠하고, 색칠한 부분을 분수와 소수로 나타내며 두 표현을 이어서 설명할 수 있다.',
  desc: 'a long paper strip divided into ten boxes with several colored in, flags above it showing both a fraction and a decimal number, and a tidy stack of unit review cards on the side',
  text: '분수와 소수 정리',
  layers: [{ motif: 'house', x: 110, y: 216, s: 0.8 }, { motif: 'flower', x: 400, y: 232, color: 'rose' }, { motif: 'bird', x: 290, y: 84 }, { motif: 'tree', x: 60, y: 220, s: 0.8 }],
  intro: ['"0.6만큼 색칠한다는 건 10칸 중 몇 칸을 칠하는 걸까요?" 시연 단추로 띠가 10칸으로 나뉘고 6칸이 칠해지는 모습을 보여 준다. 0.6을 6칸이 아니라 6/100이라고 말하는 학생이 있으면 소수점 아래 한 자리는 십분의 몇이라고 짚는다.', '소수를 그림과 분수로 바꾸어 말할 수 있을까요?'],
  demo: { tool: 'fraction', options: { shape: 'strip' }, sequence: [{ den: 10 }, { den: 10, num: 6 }] },
  acts: [
    { id: 'a1', title: '활동 1. 소수만큼 색칠하기', minutes: 8, tool: 'fraction',
      task: '말한 소수만큼 10칸 띠를 색칠해요. 0.1이 몇 개인지 먼저 생각해요.',
      teacher: '"0.6은 0.1이 몇 개 모인 수일까요? 그러면 몇 칸을 칠할까요?" 0.2를 칠하며 2칸이 아니라 20칸이 필요하다고 헷갈리는 학생에게는 10칸이 전체(1)라는 것을 다시 짚는다.',
      levels: FRL,
      items: [
        fq('10칸 띠에 0.6만큼 색칠해 보세요.', 'strip', 10, 6, 0.14),
        fq('10칸 띠에 0.2만큼 색칠해 보세요.', 'strip', 10, 2, 0.1),
        fqr('10칸 띠에 0.9만큼 색칠해 보세요.', 'strip', 10, 9, 0.16),
        fq('10칸 띠에 0.5만큼 색칠해 보세요.', 'strip', 10, 5, 0.12, true),
      ] },
    { id: 'a2', title: '활동 2. 수직선의 점을 소수로 읽기', minutes: 9, tool: 'numberline',
      task: '수직선의 점이 나타내는 소수를 골라요. 소수점 아래 첫째 자리가 칸 수예요.',
      teacher: '"점이 0에서 몇 칸 갔나요? 한 칸은 0.1이에요." 칸 수를 소수점 앞에 쓰는 학생(3칸을 3.0)에게는 0과 1 사이의 수라는 것을 다시 짚는다.',
      levels: NLR,
      items: [
        nlr('점이 나타내는 소수를 고르세요.', { min: 0, max: 1, step: 1, sub: 10, format: 'dec', labels: 'ends' }, 0.3, ['0.3', '0.03', '3.0'], 0, 0.14),
        nlr('점이 나타내는 소수를 고르세요. 0과 1 사이에 있어요.', { min: 0, max: 1, step: 1, sub: 10, format: 'dec', labels: 'ends' }, 0.9, ['9', '0.9', '0.09'], 1, 0.18),
        nlr('점이 나타내는 소수를 고르세요.', { min: 0, max: 1, step: 1, sub: 10, format: 'dec', labels: 'ends' }, 0.7, ['0.07', '0.7', '70'], 1, 0.2),
      ] },
    { id: 'a3', title: '활동 3. 소수와 분수를 섞어 정리하기', minutes: 9, tool: 'mindmap',
      task: '소수와 분수를 큰 수 순서로 놓거나 같은 수를 골라 단원을 정리해요.',
      teacher: '"0.1이 몇 개 모인 수인지로 바꾸면 소수끼리 쉽게 견줄 수 있어요." 0.7을 7이라고 생각해 큰 수라고 하는 학생에게는 0과 1 사이 수직선을 떠올리게 한다.',
      levels: CARD,
      items: [
        orderCards('소수 카드를 작은 수부터 차례로 놓아 보세요.', '작은 수부터', ['0.2', '0.5', '0.7'], 0.18),
        pickCards('6/10과 같은 수를 모두 골라 보세요.', '6/10과 같은 수', ['0.6', '0.06', '6', '0.1이 6개인 수', '0.1이 60개인 수'], ['0.6', '0.1이 6개인 수'], 0.22),
        orderCards('분수와 소수가 섞인 카드를 작은 수부터 차례로 놓아 보세요.', '분수와 소수', ['0.2', '3/10', '0.5', '7/10'], 0.26, true),
      ] },
  ],
  wrap: ['"이 단원에서 분수와 소수에 대해 새로 알게 된 것 한 가지를 짝에게 말해 보세요." 분수 읽기, 1보다 큰 분수, 크기 비교, 소수 가운데 하나를 고르게 한다. 출구 2번을 틀린 학생은 0.1이 몇 개인지로 소수를 바꾸는지 다음 단원 전에 먼저 짚는다.', [
    { type: 'tool', tool: 'fraction', options: { shape: 'strip', hideFraction: true }, prompt: '10칸 띠에 0.4만큼 색칠해 보세요.', target: { den: 10, num: 4 }, difficulty: 0.14 },
    { type: 'choice', prompt: '0.8과 크기가 같은 분수는 무엇인가요?', options: ['8/10', '8/100', '10/8'], answer: 0, difficulty: 0.16, explain: '0.8은 0.1이 8개라서 10분의 8과 같아요.' },
    { type: 'choice', prompt: '0.3, 0.9, 0.5 중 가장 큰 소수는 무엇인가요?', options: ['0.3', '0.9', '0.5'], answer: 1, difficulty: 0.14, explain: '0.1이 가장 많은 0.9가 가장 커요.' },
  ]],
  ws: {
    title: '소수와 분수 정리',
    items: [
      { type: 'figure', prompt: '색칠한 부분을 분수와 소수로 쓰세요.', tool: 'fraction', answer: '6/10, 0.6 / 3/10, 0.3', figures: [
        { options: { shape: 'strip', frame: true }, state: { n: 10, colored: [0, 1, 2, 3, 4, 5] }, caption: '분수 ___ 소수 ___' }, { options: { shape: 'strip', frame: true }, state: { n: 10, colored: [0, 1, 2] }, caption: '분수 ___ 소수 ___' }] },
      { type: 'table', prompt: '빈칸을 채우세요.', columns: ['소수', '분수', '0.1이 몇 개'], cells: [['0.4', '', ''], ['', '7/10', ''], ['0.9', '', '']], answer: '4/10 · 4개, 0.7 · 7개, 9/10 · 9개' },
      { type: 'choice', prompt: '가장 큰 수에 ○ 하세요.', options: ['0.2', '0.6', '4/10'], answer: '0.6' },
      { type: 'blank', prompt: '알맞은 수를 쓰세요.', text: '10분의 8은 소수로 ___이고, 0.1이 ___개인 수예요.', answer: '0.8, 8' },
      { type: 'short', prompt: '이 단원에서 배운 분수와 소수 가운데 가장 기억에 남는 것을 한 문장으로 써 보세요.', answer: '예: 10분의 몇은 0.몇으로도 쓸 수 있다.' },
    ],
    easy: {
      note: '10칸 띠에서 한 칸은 10분의 1이고 0.1이에요. 0.6은 0.1이 6개, 10분의 6이에요.',
      items: [
        { type: 'figure', prompt: '색칠한 부분을 분수와 소수로 쓰세요.', tool: 'fraction', figures: [{ options: { shape: 'strip', frame: true }, state: { n: 10, colored: [0, 1, 2, 3] }, caption: '분수 ___ 소수 ___' }], answer: '4/10, 0.4' },
        { type: 'table', prompt: '빈칸을 채우세요.', columns: ['소수', '분수'], cells: [['0.5', ''], ['', '2/10']], answer: '5/10, 0.2' },
        { type: 'choice', prompt: '더 큰 수에 ○ 하세요.', options: ['0.3', '0.8'], answer: '0.8' },
        { type: 'draw', prompt: '10칸 띠를 그리고 0.7만큼 색칠한 뒤 분수와 소수로 써 보세요.' },
      ],
    },
  },
  diff: {
    easy: '띠에 분모·분자의 이름이 보이고, 수직선 점에 보기가 가까운 값으로만 나와요.',
    base: '분수 읽기 칸은 맞힌 뒤에만 보이고 수직선은 양 끝 눈금만 보여요.',
    challenge: '분수와 소수가 섞인 카드를 작은 수부터 놓아야 하는 문항이 늘어요.',
  },
  notes: '자주 보이는 어려움: ① 소수를 칸 수와 연결하지 못한다(0.6을 6칸이 아니라 60칸이나 6/100으로 말한다) → 10칸이 전체(1), 한 칸이 0.1. ② 0.7과 7, 0.07을 서로 바꾸어 읽는다 → 0과 1 사이에서 점의 자리를 먼저. ③ 분수와 소수를 섞어 견줄 때 모양만 보고 판단한다 → 모두 0.1이 몇 개인지로 바꾼다. 소수 두 자리는 4학년에서 다루므로 이 단원에서는 소수 한 자리까지만 쓴다.',
}));



PaperLessons.registerUnit({
  id: UID, schema: 'edu-unit.v1', catalogUnit: CU, grade: 3, subject: '수학', unitTitle: UT,
  flow: '1~3차시는 색 테이프를 똑같이 나누어 분수를 읽고 쓰며, 수직선과 띠로 나타내고, 분수만큼이 몇 cm인지 구합니다. 4~6차시는 단위분수가 모여 1이 되고 1보다 커지는 모습을 수직선에서 보며 진분수·가분수·대분수를 나누고, 가분수와 대분수를 서로 바꾸어 남은 양을 알맞게 말합니다. 7~9차시는 분모가 같은 분수와 단위분수의 크기를 띠와 수직선으로 견주고 부등호로 쓴 뒤, 같은 크기의 전체에서 누가 더 많이 먹었는지로 활용합니다. 10~11차시는 10칸으로 나눈 띠에서 십분의 몇을 소수 한 자리 수로 읽고 쓰며 분수와 소수를 이어 단원을 정리합니다. 1학기에 배운 똑같이 나누기·단위분수는 되풀이하지 않고 이를 바탕으로 넓힙니다.',
  lessons: L,
});
})();
