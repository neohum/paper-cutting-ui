/* 1학년 2학기 4. 덧셈과 뺄셈(2) — 단원 파일(차시 12개).
 * 흐름: 10 만들기(1) → 10이 되는 짝 모두 찾기(2) → 10에서 빼기(3) → 10을 가른 두 수의 덧셈식·뺄셈식(4)
 *      → 9+(몇) 10 만들어 더하기(5) → 8+(몇)(6) → 7·6+(몇)(7) → 합이 같은 식 모으기(8)
 *      → 이야기에서 알맞은 식 고르기(9) → 합이 11~18인 식 정리(10) → 10에서 빼는 이야기 만들기·모르는 수 찾기(11) → 단원 정리(12).
 * 확인 필요: units-index 의 주제는 [2수01-05] 하나뿐이고 받아내림 있는 (십몇)-(몇)은 이 단원 범위에 넣지 않았다(10에서 빼기까지).
 *            십칸 판은 합 10까지만 놓을 수 있어, 합이 10을 넘는 식(5~10차시)은 수직선 두 번 뛰기와 가르기 판으로 나눠 다룬다.
 */
(function () {
const UID = 'g1-math-2-04', CU = 'g1-수학-2학기-4', UT = '4. 덧셈과 뺄셈(2)', STD = ['[2수01-05]'];
const BLANK = '(          )';
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
  grade: 1, subject: '수학', unitTitle: UT,
  title: d.title, objective: d.objective, standards: STD, minutes: 40, formats: ['chromebook', 'projector', 'print'],
  illustration: ill(d.desc, d.text, d.layers),
  stages: [
    Object.assign({ id: 'intro', title: '도입', minutes: 7, teacher: d.intro[0], student: d.intro[1] }, d.demo ? { demo: d.demo } : {}),
    { id: 'main', title: '전개', minutes: 26, activities: d.acts },
    { id: 'wrapup', title: '정리', minutes: 7, teacher: d.wrap[0], exitTicket: [...d.wrap[1], { type: 'mood', prompt: '오늘 공부는 어땠나요?' }] },
  ],
  worksheet: d.ws, differentiation: d.diff, teacherNotes: d.notes,
});
const B = (it, col) => (it === 'chip' ? { item: 'chip', color: col || 'sky' } : { item: 'apple' });
const ONE = (it, col) => ({
  easy: Object.assign(B(it, col), { showWord: true, cellNumbers: true, showGoal: true, numberLine: true, revealAfterCheck: true }),
  base: Object.assign(B(it, col), { showCount: false, askNumber: true, showGoal: true }),
  challenge: Object.assign(B(it, col), { showCount: false, askNumber: true, scatter: true, showGoal: true }),
});
const TW = (it) => ({
  easy: { twoColor: true, item: it, showWord: true, cellNumbers: true },
  base: { twoColor: true, item: it, showCount: false, askNumber: true, showGoal: true },
  challenge: { twoColor: true, item: it, showCount: false, askNumber: true, scatter: true },
});
const NL = {
  easy: { mode: 'jump', min: 0, max: 10, step: 1, labels: 'all', showValue: true },
  base: { mode: 'jump', min: 0, max: 10, step: 1, labels: 'all' },
  challenge: { mode: 'jump', min: 0, max: 10, step: 1, labels: 'ends' },
};
const NL20 = {
  easy: { mode: 'jump', min: 0, max: 20, step: 1, labels: 'all', showValue: true },
  base: { mode: 'jump', min: 0, max: 20, step: 1, labels: 'all' },
  challenge: { mode: 'jump', min: 0, max: 20, step: 1, labels: 'ends' },
};
const CARD_LV = { easy: { live: true, instant: true }, base: {}, challenge: {} };
const less = (prompt, c, m, d, extra) => Object.assign({ prompt, state: { count: c }, target: { count: c, less: m }, difficulty: d }, extra || {});
const jump = (prompt, from, end, d, extra) => Object.assign({ prompt, toolOptions: { fixedFrom: from }, target: { from, end }, difficulty: d }, extra || {});
const jump2 = (prompt, from, end, d, extra) => Object.assign({ prompt, toolOptions: { fixedFrom: from }, target: { from, end, count: 2 }, difficulty: d }, extra || {});
const total = (prompt, a, b, d, extra) => Object.assign({ prompt, target: { parts: [a, b], ask: 'total' }, difficulty: d }, extra || {});
const apart = (prompt, t, a, d, extra) => Object.assign({ prompt, target: { total: t, parts: [a, null], ask: 'b' }, difficulty: d }, extra || {});
const match = (prompt, topic, slots, cards, d, extra) => {
  const sl = slots.map((s, i) => ({ id: `s${i + 1}`, label: s }));
  const tg = {}; sl.forEach((s, i) => { tg[s.id] = cards[i]; });
  return Object.assign({ prompt, toolOptions: { mode: 'match', topic, slots: sl, cards: cards.slice().reverse() }, target: { match: tg }, difficulty: d }, extra || {});
};
const sortTo = (prompt, topic, names, groups, d, extra) => {
  const sl = names.map((s, i) => ({ id: `s${i + 1}`, label: s }));
  const tg = {}; sl.forEach((s, i) => { tg[s.id] = groups[i]; });
  const cards = [].concat(...groups);
  return Object.assign({ prompt, toolOptions: { mode: 'sort', topic, slots: sl, cards: cards.filter((_, i) => i % 2 === 0).concat(cards.filter((_, i) => i % 2 === 1)) }, target: { sort: tg }, difficulty: d }, extra || {});
};
const pickOf = (prompt, basket, cards, ok, d, extra) => Object.assign({ prompt, toolOptions: { mode: 'pick', basket, cards }, target: { pick: ok }, difficulty: d }, extra || {});
const L = [];
// ───────────────────────────── 1차시 (intro) ─────────────────────────────
L.push(lesson(1, {
  title: '사과 7개에 몇 개를 더 놓으면 10개가 될까',
  objective: '이미 있는 수에 얼마를 더 놓으면 10이 되는지 이어 세어 찾고 말할 수 있다.',
  desc: 'a little rabbit filling a ten-slot wooden tray with red apples, a few slots still empty, an apple tree behind',
  text: '몇 개 더 놓으면 10개?',
  layers: [{ motif: 'tree', x: 110, y: 214, s: 1.2 }, { motif: 'apple', x: 92, y: 180, s: 0.42 }, { motif: 'apple', x: 122, y: 170, s: 0.42 }, { motif: 'apple', x: 330, y: 232, s: 0.4 }, { motif: 'apple', x: 352, y: 232, s: 0.4 }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"상자에는 사과가 열 개 들어가요. 지금 7개가 들어 있어요. 몇 개를 더 넣으면 가득 찰까요?" 시연 단추로 7개가 놓인 십칸 판에 사과가 하나씩 더 들어가 10개가 되는 모습을 보여 준다. 빈칸을 세어 "3칸이 비었으니 3개를 더 넣어요" 하고 말한다. 처음부터 1, 2, 3… 세는 학생이 많다 — 7 다음부터 8, 9, 10 하고 이어 세게 한다.', '사과 상자를 가득 채우려면 몇 개가 더 필요할까요?'],
  demo: { tool: 'tenframe', options: { item: 'apple', showWord: true }, sequence: [{ count: 7 }, { count: 10 }] },
  acts: [
    { id: 'a1', title: '활동 1. 빨간 사과와 초록 사과로 10칸 채우기', minutes: 9, tool: 'tenframe',
      task: '빨간 사과를 놓고, 초록 사과를 몇 개 더 놓으면 10칸이 가득 차는지 알아봐요.',
      teacher: '"빨간 사과가 6개예요. 초록 사과를 몇 개 놓으면 가득 찰까요?" 빈칸을 손가락으로 짚어 세게 한다. 빈칸 수 대신 놓인 수(6)를 답하는 학생에게는 "아직 비어 있는 칸은 몇 칸이에요?" 하고 되묻는다.',
      levels: TW('apple'),
      items: [
        apart('빨간 사과가 6개 있어요. 초록 사과를 몇 개 더 놓으면 10개가 될까요?', 10, 6, 0.08),
        apart('빨간 사과가 3개 있어요. 초록 사과를 몇 개 더 놓으면 10개가 될까요?', 10, 3, 0.15,
          { predict: { q: '빨간 사과가 3개뿐이에요. 초록 사과는 3개보다 많이 필요할까요?', options: ['많이 필요해요', '3개예요', '적게 필요해요'], answer: 0 }, conclude: '3에서 4, 5, 6, 7, 8, 9, 10 — 7개를 더 놓으면 10개예요.' }),
        apart('빨간 사과가 8개 있어요. 초록 사과를 몇 개 더 놓으면 10개가 될까요?', 10, 8, 0.1),
        apart('더 해 보기: 빨간 사과가 5개 있어요. 초록 사과를 몇 개 더 놓으면 10개가 될까요?', 10, 5, 0.2, { extra: true }),
      ] },
    { id: 'a2', title: '활동 2. 수직선에서 10까지 뛰기', minutes: 11, tool: 'numberline',
      task: '수직선에서 처음 수에 서요. 10까지 몇 칸을 앞으로 뛰어야 하는지 화살표로 알아봐요.',
      teacher: '"4에서 10까지 화살표 하나로 뛰어 봐요. 몇 칸을 뛰었나요?" 서 있는 자리를 1로 세어 한 칸 많게 답하는 학생이 많다 — 뛰는 칸부터 하나, 둘 하고 센다고 짚는다. 도착한 수 10을 뛴 칸 수로 답한 학생에게는 "출발은 어디였지요?" 하고 되묻는다.',
      levels: NL,
      items: [
        jump('4에서 10까지 앞으로 뛰어 보세요. 몇 칸을 뛰나요?', 4, 10, 0.1),
        jump('7에서 10까지 앞으로 뛰어 보세요. 몇 칸을 뛰나요?', 7, 10, 0.1),
        jump('8에서 10까지 앞으로 뛰어 보세요. 몇 칸을 뛰나요?', 8, 10, 0.06,
          { conclude: '8에서 두 칸만 뛰면 10이에요. 8과 2가 짝이에요.' }),
        jump('더 해 보기: 2에서 10까지 앞으로 뛰어 보세요. 몇 칸을 뛰나요?', 2, 10, 0.22, { extra: true }),
      ] },
    { id: 'a3', title: '활동 3. 10이 되는 짝만 바구니에 담기', minutes: 6, tool: 'mindmap',
      task: '두 수를 더해서 10이 되는 짝 카드만 바구니에 담아요.',
      teacher: '"6과 4를 모으면 10일까요?" 6, 7, 8, 9, 10 하고 이어 세어 확인하게 한다. 5와 4를 담은 학생에게는 "5에서 4칸을 더 세면 어디예요?" 하고 되묻는다. 아직 식(+)은 쓰지 않고 "와", "과"로 읽는다.',
      levels: CARD_LV,
      items: [
        pickOf('10이 되는 짝 카드만 골라 보세요.', '10이 되는 짝', ['6과 4', '5와 4', '7과 3', '8과 1'], ['6과 4', '7과 3'], 0.1),
        pickOf('이번에도 10이 되는 짝만 골라 보세요.', '10이 되는 짝', ['2와 8', '3과 6', '9와 1'], ['2와 8', '9와 1'], 0.15),
        pickOf('더 해 보기: 10이 되는 짝을 골라 보세요.', '10이 되는 짝', ['4와 5', '1과 9', '7과 2', '5와 5'], ['1과 9', '5와 5'], 0.2, { extra: true }),
      ] },
  ],
  wrap: ['"7개가 있을 때 몇 개를 더 놓으면 10개예요?" 짝에게 "7과 3을 모으면 10"이라고 말하게 한다. 출구 1번에서 놓인 수(5)를 고른 학생은 빈칸 수와 놓인 수를 헷갈리는지 다음 시간에 먼저 살핀다.', [
    { type: 'choice', prompt: '구슬이 5개 있어요. 몇 개를 더 넣으면 10개가 될까요?', options: ['4개', '5개', '6개'], answer: 1, difficulty: 0.12, explain: '5에서 6, 7, 8, 9, 10 하고 이어 세면 5개를 더 넣어요.' },
    { type: 'tool', tool: 'tenframe', options: { twoColor: true, item: 'chip', showCount: false, askNumber: true, target: { total: 10, parts: [4, null], ask: 'b' } }, prompt: '하늘색 칩이 4개 있어요. 주황색 칩을 몇 개 놓으면 10개가 될까요?', target: { total: 10, parts: [4, null], ask: 'b' }, difficulty: 0.2 },
    { type: 'choice', prompt: '10이 되는 짝에 ○ 하세요.', options: ['8과 1', '8과 2', '8과 3'], answer: 1, difficulty: 0.1, explain: '8에서 9, 10 — 2칸이 모자라서 8과 2가 10이 되는 짝이에요.' },
  ]],
  ws: { title: '10칸을 가득 채우려면', items: [
    { type: 'figure', prompt: '사과가 놓인 만큼 세고, 10칸을 채우려면 몇 개가 더 필요한지 쓰세요.', tool: 'tenframe', options: { item: 'apple' }, figures: [{ state: { count: 7 }, caption: '7개 → ' + BLANK + '개 더' }, { state: { count: 4 }, caption: '4개 → ' + BLANK + '개 더' }, { state: { count: 9 }, caption: '9개 → ' + BLANK + '개 더' }], answer: '3, 6, 1' },
    { type: 'blank', prompt: '10이 되도록 빈칸에 알맞은 수를 쓰세요.', text: '8과 ___     5와 ___     2와 ___', answer: '2, 5, 8' },
    { type: 'choice', prompt: '10이 되는 짝에 ○ 하세요.', options: ['6과 3', '6과 4', '6과 5'], answer: '6과 4' },
    { type: 'short', prompt: '"3과 7을 모으면 10이에요." 같은 이야기를 하나 지어 써 보세요.' },
  ], easy: { note: '빈 칸을 세면 더 놓을 수가 나와요. 칸이 열 개예요.', items: [
    { type: 'figure', prompt: '사과를 세고, 빈 칸이 몇 칸인지 쓰세요.', tool: 'tenframe', options: { item: 'apple' }, figures: [{ state: { count: 8 }, caption: '빈 칸 ' + BLANK + '칸' }, { state: { count: 6 }, caption: '빈 칸 ' + BLANK + '칸' }], answer: '2, 4' },
    { type: 'blank', prompt: '10이 되도록 빈칸에 알맞은 수를 쓰세요.', text: '9와 ___     7과 ___', answer: '1, 3' },
    { type: 'choice', prompt: '10이 되는 짝에 ○ 하세요.', options: ['9와 1', '9와 2'], answer: '9와 1' },
    { type: 'draw', prompt: '사과 6개를 그리고, 10개가 되도록 더 그려 보세요.' },
  ] } },
  diff: { easy: '칸 번호와 수 줄이 보이고, 판 위에 "10 → 6과 ?" 같은 목표가 나와요. 수직선에는 도착한 수가 보여요.', base: '수 카드가 가려져 있어요. 다 놓은 뒤 초록 사과가 몇 개인지 수를 직접 골라요.', challenge: '사과가 흩어진 칸에 들어가서 윗줄 5칸 묶음으로 셀 수 없어요. 수직선은 양 끝의 수만 보여요.' },
  notes: '자주 보이는 어려움: ① 놓인 수를 더 놓을 수로 답한다(6개가 있는데 6) → "빈 칸은 몇 칸?"으로 묻는다. ② 뛴 칸을 셀 때 서 있는 자리를 1로 센다 → 뛰는 칸부터 센다. ③ 8과 3처럼 10을 넘는 짝을 10이 되는 짝으로 고른다 → 이어 세어 10에 닿는지 확인한다. 식(+)은 4차시에서 쓴다. 2차시에서 10이 되는 짝을 모두 찾는다.',
}));
// ───────────────────────────── 2차시 (practice) ─────────────────────────────
L.push(lesson(2, {
  title: '10이 되는 짝을 짝짓고 가르기',
  objective: '10이 되는 두 수의 짝(1과 9, 2와 8 …)을 찾아 이어 말하고, 합이 10인지 아닌지 가를 수 있다.',
  desc: 'two friendly bears each holding a card of a number, matching their cards in pairs that make ten, a small colorful sorting box',
  text: '10이 되는 짝!',
  layers: [{ motif: 'flower', x: 100, y: 234 }, { motif: 'flower', x: 150, y: 236, color: 'rose' }, { motif: 'star', x: 330, y: 70, s: 0.5 }, { motif: 'tree', x: 380, y: 216 }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"어제는 7과 3이 10이 된다는 것을 알았어요. 9와 짝이 되어 10을 만드는 수는 무엇일까요?" 시연 단추로 아홉 칸이 찬 판에 한 개가 더 들어가는 모습을 보여 준다. "9에서 한 칸이 모자라니까 1이에요." 짝을 만들 때 같은 수를 두 번 쓰면 된다고 생각하는 학생이 있다(9와 9) — 두 수를 모으면 10이 되어야 한다고 짚는다.', '9와 짝이 되어 10을 만드는 수는 무엇일까요?'],
  demo: { tool: 'tenframe', options: { twoColor: true, item: 'apple', showWord: true }, sequence: [{ parts: [9, 0] }, { parts: [9, 1] }] },
  acts: [
    { id: 'a1', title: '활동 1. 두 가지 사과로 10칸 채우기', minutes: 8, tool: 'tenframe',
      task: '한 가지 사과를 놓고, 다른 사과를 몇 개 놓으면 10칸이 찰지 찾아요.',
      teacher: '"빨간 사과 1개와 짝이 되는 초록 사과는 몇 개일까요?" 판이 거의 비어 있어서 9개나 놓아야 한다는 것을 보게 한다. 빨간 사과가 많을수록 초록 사과가 적게 필요하다는 규칙을 짝에게 말하게 한다.',
      levels: TW('apple'),
      items: [
        apart('빨간 사과 1개와 초록 사과 몇 개가 모이면 10개가 될까요?', 10, 1, 0.1),
        apart('빨간 사과 9개와 초록 사과 몇 개가 모이면 10개가 될까요?', 10, 9, 0.06,
          { predict: { q: '빨간 사과가 9개나 있어요. 초록 사과는 몇 개쯤 필요할까요?', options: ['1개', '5개', '9개'], answer: 0 }, conclude: '9개가 있으면 1칸만 비어요. 9와 1이 짝이에요.' }),
        apart('빨간 사과 4개와 초록 사과 몇 개가 모이면 10개가 될까요?', 10, 4, 0.15),
        apart('더 해 보기: 빨간 사과 7개와 초록 사과 몇 개가 모이면 10개가 될까요?', 10, 7, 0.18, { extra: true }),
      ] },
    { id: 'a2', title: '활동 2. 10을 만드는 짝 이어 주기', minutes: 11, tool: 'mindmap',
      task: '왼쪽 수와 함께 모아 10이 되는 수 카드를 골라 이어 줘요.',
      teacher: '"1과 짝이 되는 수는 몇이에요? 큰 수와 작은 수를 짝지으면 돼요." 짝을 하나 찾으면 순서를 바꾸어도 10이라고 말해 준다(2와 8, 8과 2). 같은 수끼리 이은 학생에게는 "두 수를 모으면 10이 되나요?" 하고 되묻는다.',
      levels: CARD_LV,
      items: [
        match('10이 되도록 짝이 되는 수를 이어 보세요.', '10이 되는 짝', ['1과', '2와', '4와', '5와'], ['9', '8', '6', '5'], 0.12),
        match('이번에도 10이 되도록 이어 보세요.', '10이 되는 짝', ['3과', '6과', '7과', '9와'], ['7', '4', '3', '1'], 0.15,
          { conclude: '3과 7, 6과 4, 7과 3, 9와 1 — 짝이 되는 두 수를 모으면 모두 10이에요.' }),
        match('더 해 보기: 10이 되도록 이어 보세요.', '10이 되는 짝', ['8과', '4와', '2와'], ['2', '6', '8'], 0.18, { extra: true }),
      ] },
    { id: 'a3', title: '활동 3. 10이에요, 10이 아니에요 가르기', minutes: 7, tool: 'mindmap',
      task: '식 카드를 읽고 합이 10인 것과 아닌 것으로 나누어 놓아요.',
      teacher: '"3+7은 모두 몇일까요? 3에서 7칸을 이어 세어 봐요." 10보다 큰 합(8+3)과 10보다 작은 합(5+4)이 섞여 있어서 10에 닿는지 꼭 이어 세어 보게 한다. 눈으로만 보고 큰 수가 있는 카드를 10이라고 하는 학생이 있다.',
      levels: CARD_LV,
      items: [
        sortTo('식 카드를 두 곳으로 나누어 보세요.', '합이 10일까?', ['10이에요', '10이 아니에요'], [['3+7', '6+4', '2+8'], ['5+4', '8+3', '7+2']], 0.14),
        sortTo('이번에도 두 곳으로 나누어 보세요.', '합이 10일까?', ['10이에요', '10이 아니에요'], [['1+9', '5+5', '4+6'], ['6+3', '9+2', '2+7']], 0.18),
        sortTo('더 해 보기: 식 카드를 두 곳으로 나누어 보세요.', '합이 10일까?', ['10이에요', '10이 아니에요'], [['9+1', '7+3'], ['4+4', '6+5', '3+5']], 0.22, { extra: true }),
      ] },
  ],
  wrap: ['"1과 9, 2와 8… 짝을 보면 한 수가 커질 때 짝은 어떻게 되나요?" 짝에게 말하게 한다. 출구 2번에서 5와 5를 고르지 못한 학생은 같은 수 둘로도 10이 된다는 점을 다음 시간에 먼저 살핀다.', [
    { type: 'choice', prompt: '3과 짝이 되어 10을 만드는 수는 얼마인가요?', options: ['6', '7', '8'], answer: 1, difficulty: 0.12, explain: '3에서 4, 5, 6, 7, 8, 9, 10 — 7칸을 이어 세면 10이에요.' },
    { type: 'choice', prompt: '두 수를 모으면 10이 되는 것에 ○ 하세요.', options: ['5와 4', '5와 5', '5와 6'], answer: 1, difficulty: 0.1, explain: '5와 5를 모으면 10이에요. 같은 수 둘로도 10이 돼요.' },
    { type: 'tool', tool: 'tenframe', options: { twoColor: true, item: 'chip', showCount: false, askNumber: true, target: { total: 10, parts: [2, null], ask: 'b' } }, prompt: '하늘색 칩 2개와 주황색 칩 몇 개가 모이면 10개일까요?', target: { total: 10, parts: [2, null], ask: 'b' }, difficulty: 0.2 },
  ]],
  ws: { title: '10이 되는 짝 찾기', items: [
    { type: 'table', prompt: '10이 되도록 짝이 되는 수를 쓰세요.', columns: ['한 수', '1', '3', '6', '8', '9'], cells: [['짝', '9', '', '', '', '']], answer: '7, 4, 2, 1' },
    { type: 'choice', prompt: '합이 10이 아닌 식에 ○ 하세요.', options: ['4+6', '2+8', '5+4'], answer: '5+4' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '4+___=10     ___+1=10     5+___=10', answer: '6, 9, 5' },
    { type: 'short', prompt: '10이 되는 짝을 모두 모아 쓰고 규칙을 말해 보세요.' },
  ], easy: { note: '두 수를 모으면 10이 되어야 해요. 한 수가 커지면 짝은 작아져요.', items: [
    { type: 'table', prompt: '10이 되도록 짝이 되는 수를 쓰세요.', columns: ['한 수', '2', '5', '7'], cells: [['짝', '', '', '']], answer: '8, 5, 3' },
    { type: 'choice', prompt: '합이 10인 식에 ○ 하세요.', options: ['3+6', '3+7'], answer: '3+7' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '6+___=10     ___+9=10', answer: '4, 1' },
    { type: 'draw', prompt: '사과 10개를 두 가지 색으로 나누어 그려 보세요.' },
  ] } },
  diff: { easy: '칸 번호가 보이고 판 위에 "10 → 4와 ?" 같은 목표가 나와요. 카드 판에서는 카드를 놓으면 바로 맞는지 알려 줘요.', base: '수 카드가 가려져 있어요. 다 놓은 뒤 몇 개가 필요한지 직접 골라요.', challenge: '사과가 흩어진 칸에 들어가 5칸 묶음으로 셀 수 없어요. 카드 판은 확인을 눌러야 맞는지 알려 줘요.' },
  notes: '자주 보이는 어려움: ① 같은 수를 짝으로 고른다(9와 9) → 두 수를 모으면 10인지 이어 세어 본다. ② 5와 5를 짝으로 보지 않는다 → 같은 수 둘로도 10이 된다고 알려 준다. ③ 합이 10보다 큰 식(8+3)을 10이라 한다 → 8에서 3칸을 이어 세어 확인한다. 식 읽기 연습은 4차시에서 이어진다.',
}));
// ───────────────────────────── 3차시 (extend) ─────────────────────────────
L.push(lesson(3, {
  title: '귤 10개에서 먹은 만큼 빼고 남은 수 알아보기',
  objective: '10개에서 몇 개를 덜어 내면 몇 개가 남는지 거꾸로 세어 말하고 "10에서 빼기"라고 읽을 수 있다.',
  desc: 'a little squirrel taking away some orange tangerines from a full plate of ten, a sunny kitchen window',
  text: '10개에서 먹으면?',
  layers: [{ motif: 'house', x: 120, y: 214 }, { motif: 'apple', x: 320, y: 230, s: 0.4, color: 'peach' }, { motif: 'apple', x: 342, y: 230, s: 0.4, color: 'peach' }, { motif: 'flower', x: 250, y: 240 }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"접시에 귤이 10개 있어요. 3개를 먹었어요. 몇 개 남았을까요?" 시연 단추로 가득 찬 십칸 판에서 3개가 빠지는 모습을 보여 준다. "빈칸을 세지 말고 남은 칸을 세어요. 7칸이 남았어요." 먹은 수(3)를 남은 수로 답하는 학생이 있는지 살핀다.', '귤을 먹으면 몇 개가 남을까요?'],
  demo: { tool: 'tenframe', options: { item: 'apple', showWord: true }, sequence: [{ count: 10 }, { count: 7 }] },
  acts: [
    { id: 'a1', title: '활동 1. 가득 찬 판에서 덜어 내기', minutes: 9, tool: 'tenframe',
      task: '10칸이 가득 찬 판에서 먹은 만큼 사과를 빼요. 남은 사과를 세어요.',
      teacher: '"10개에서 3개를 먹었어요. 남은 것을 세어 봐요." 먹은 수를 그대로 쓰는 학생에게 "접시에 지금 몇 개가 있어요?" 하고 되묻는다. 10에서 1을 빼면 9, 2를 빼면 8… 하고 하나씩 거꾸로 세면 된다고 보여 준다.',
      levels: ONE('apple'),
      items: [
        less('접시에 귤이 10개 있어요. 3개를 먹었어요. 몇 개 남았나요?', 10, 3, 0.08),
        less('접시에 귤이 10개 있어요. 6개를 먹었어요. 몇 개 남았나요?', 10, 6, 0.14,
          { predict: { q: '10개에서 6개를 먹으면 남은 것은 6개보다 많을까요?', options: ['많아요', '6개예요', '적어요'], answer: 2 }, conclude: '10에서 9, 8, 7, 6, 5, 4 — 6칸을 뒤로 세면 4개가 남아요.' }),
        less('접시에 귤이 10개 있어요. 1개를 먹었어요. 몇 개 남았나요?', 10, 1, 0.05),
        less('더 해 보기: 접시에 귤이 10개 있어요. 8개를 먹었어요. 몇 개 남았나요?', 10, 8, 0.2, { extra: true }),
      ] },
    { id: 'a2', title: '활동 2. 10에서 뒤로 뛰기', minutes: 11, tool: 'numberline',
      task: '수직선에서 10에 서요. 먹은 만큼 뒤로 뛰어 몇에 닿는지 봐요.',
      teacher: '"10에서 4칸 뒤로 뛰어요. 어디에 닿았나요?" 서 있는 10을 한 칸으로 세어 7이라고 답하는 학생이 있다 — 뛰는 칸부터 하나, 둘 하고 센다고 짚는다. 앞으로 뛰면 수가 커지니 뺄 때는 뒤로 뛴다고 알려 준다.',
      levels: NL,
      items: [
        jump('10에서 4칸 뒤로 뛰어 보세요. 어디에 닿나요?', 10, 6, 0.1),
        jump('10에서 7칸 뒤로 뛰어 보세요. 어디에 닿나요?', 10, 3, 0.14),
        jump('10에서 2칸 뒤로 뛰어 보세요. 어디에 닿나요?', 10, 8, 0.1,
          { conclude: '10에서 두 칸을 뒤로 뛰면 8이에요. 귤 2개를 먹으면 8개가 남는 것과 같아요.' }),
        jump('더 해 보기: 10에서 9칸 뒤로 뛰어 보세요. 어디에 닿나요?', 10, 1, 0.22, { extra: true }),
      ] },
    { id: 'a3', title: '활동 3. 10에서 빼는 이야기 골라내기', minutes: 6, tool: 'mindmap',
      task: '10개 가운데 덜어 내서 적어지는 이야기만 바구니에 담아요.',
      teacher: '"10개 가운데 4개가 터지면 풍선이 많아질까요, 적어질까요?" 줄어드는 이야기만 고르게 한다. "4개를 더 샀어요"가 들어 있는 카드를 담은 학생에게는 "풍선이 늘었나요?" 하고 되묻는다.',
      levels: CARD_LV,
      items: [
        pickOf('10에서 빼는 이야기 카드만 골라 보세요.', '10에서 빼요', ['풍선 10개 가운데 4개가 터졌어요.', '풍선 10개에 4개를 더 샀어요.', '귤 10개 가운데 7개를 나눠 줬어요.', '귤 3개에 7개를 더 땄어요.'], ['풍선 10개 가운데 4개가 터졌어요.', '귤 10개 가운데 7개를 나눠 줬어요.'], 0.12),
        pickOf('이번에도 10에서 빼는 이야기만 골라 보세요.', '10에서 빼요', ['구슬 10개 가운데 5개를 잃어버렸어요.', '구슬 5개를 더 주웠어요.', '빵 10개 가운데 2개를 먹었어요.'], ['구슬 10개 가운데 5개를 잃어버렸어요.', '빵 10개 가운데 2개를 먹었어요.'], 0.15),
        pickOf('더 해 보기: 10에서 빼는 이야기를 골라 보세요.', '10에서 빼요', ['사탕 10개 가운데 3개를 먹었어요.', '사탕 3개에 7개를 더 받았어요.', '카드 10장 가운데 6장을 선물했어요.', '카드 4장에 6장을 더 샀어요.'], ['사탕 10개 가운데 3개를 먹었어요.', '카드 10장 가운데 6장을 선물했어요.'], 0.2, { extra: true }),
      ] },
  ],
  wrap: ['"10에서 먹으면 몇 개가 남을까요?" 짝에게 "10개에서 3개를 빼면 7개"라고 말하게 한다. 출구 1번에서 먹은 수(4)를 고른 학생은 남은 수와 먹은 수를 헷갈리는지 다음 시간에 먼저 살핀다.', [
    { type: 'choice', prompt: '쿠키가 10개 있어요. 4개를 먹었어요. 몇 개 남았나요?', options: ['4개', '6개', '14개'], answer: 1, difficulty: 0.12, explain: '10에서 9, 8, 7, 6 — 4칸을 뒤로 세면 6개가 남아요.' },
    { type: 'tool', tool: 'tenframe', options: { item: 'chip', color: 'mint', showCount: false, askNumber: true, target: { count: 10, less: 5 } }, state: { count: 10 }, prompt: '칩이 10개 있어요. 5개를 덜어 내요. 몇 개 남았나요?', target: { count: 10, less: 5 }, difficulty: 0.2 },
    { type: 'choice', prompt: '10에서 빼는 이야기에 ○ 하세요.', options: ['공 10개 가운데 3개가 굴러갔어요.', '공 10개에 3개를 더 샀어요.'], answer: 0, difficulty: 0.08, explain: '굴러가면 공이 줄어요. 줄어드는 이야기가 빼기예요.' },
  ]],
  ws: { title: '10개에서 덜어 내면', items: [
    { type: 'figure', prompt: '먹은 귤만큼 ✕ 를 그리고, 남은 귤이 몇 개인지 쓰세요.', tool: 'tenframe', options: { item: 'apple' }, figures: [{ state: { count: 10 }, caption: '3개 먹음 → ' + BLANK }, { state: { count: 10 }, caption: '5개 먹음 → ' + BLANK }, { state: { count: 10 }, caption: '9개 먹음 → ' + BLANK }], answer: '7, 5, 1' },
    { type: 'blank', prompt: '뒤로 세어 빈칸에 알맞은 수를 쓰세요.', text: '10에서 2칸 뒤로 → ___     10에서 6칸 뒤로 → ___     10에서 8칸 뒤로 → ___', answer: '8, 4, 2' },
    { type: 'choice', prompt: '남은 것이 3개가 되는 이야기에 ○ 하세요.', options: ['10개 가운데 7개를 먹었어요.', '10개 가운데 3개를 먹었어요.', '10개에 3개를 더 받았어요.'], answer: '10개 가운데 7개를 먹었어요.' },
    { type: 'short', prompt: '10에서 먹은 수가 커지면 남은 수는 어떻게 되는지 써 보세요.' },
  ], easy: { note: '10에서 하나씩 거꾸로 세요. 9, 8, 7… 먹은 수만큼만 세요.', items: [
    { type: 'figure', prompt: '먹은 귤만큼 ✕ 를 그리고, 남은 귤이 몇 개인지 쓰세요.', tool: 'tenframe', options: { item: 'apple' }, figures: [{ state: { count: 10 }, caption: '1개 먹음 → ' + BLANK }, { state: { count: 10 }, caption: '4개 먹음 → ' + BLANK }], answer: '9, 6' },
    { type: 'blank', prompt: '뒤로 세어 빈칸에 알맞은 수를 쓰세요.', text: '10에서 1칸 뒤로 → ___     10에서 3칸 뒤로 → ___', answer: '9, 7' },
    { type: 'choice', prompt: '더 적어지는 이야기에 ○ 하세요.', options: ['10개 가운데 2개를 먹었어요.', '10개에 2개를 더 받았어요.'], answer: '10개 가운데 2개를 먹었어요.' },
    { type: 'draw', prompt: '귤 10개를 그리고 5개에 ✕ 를 해 보세요.' },
  ] } },
  diff: { easy: '칸 번호와 수 줄이 보이고 판 위에 "10 → 하나 빼기" 같은 목표가 나와요. 수직선에는 도착한 수가 보여요.', base: '수 카드가 가려져 있어요. 다 덜어 낸 뒤 몇 개가 남았는지 수를 직접 골라요.', challenge: '귤이 흩어진 칸에 있어서 윗줄 5칸 묶음으로 셀 수 없어요. 수직선은 양 끝의 수만 보여요.' },
  notes: '자주 보이는 어려움: ① 먹은 수를 남은 수로 답한다 → "접시에 지금 몇 개?"로 묻는다. ② 뒤로 뛸 때 서 있는 10을 한 칸으로 센다(10에서 4칸 → 7) → 뛰는 칸부터 센다. ③ 빼는 이야기에 "더 받았어요"를 섞어 고른다 → 줄어드는지 늘어나는지 먼저 말해 본다. 식 10−3=7은 4차시에서 다룬다.',
}));
// ───────────────────────────── 4차시 (extend) ─────────────────────────────
L.push(lesson(4, {
  title: '10이 되는 짝으로 덧셈식과 뺄셈식 짝짓기',
  objective: '10을 가른 두 수를 보고 6+4=10과 10−4=6처럼 덧셈식과 뺄셈식을 짝지어 읽을 수 있다.',
  desc: 'a paper seesaw with ten colorful blocks split into two groups on both sides, and a small fox pointing at them',
  text: '6+4=10, 10-4=6',
  layers: [{ motif: 'hills', y: 210 }, { motif: 'star', x: 90, y: 60, s: 0.5 }, { motif: 'star', x: 330, y: 44, s: 0.5 }, { motif: 'tree', x: 380, y: 218, color: 'mint' }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"빨간 구슬 6개와 파란 구슬 4개를 모으면 10개예요. 그런데 10개에서 파란 구슬을 4개 빼면 몇 개가 남을까요?" 시연 단추로 6개와 4개가 한 판에 모이는 모습과 다시 4개가 빠지는 모습을 보여 준다. 더하기와 빼기가 같은 판에서 거꾸로 일어난다는 것을 짚는다. 6+4=10에서 10−4가 6임을 보지 못하고 따로 외우는 학생이 많다.', '10이 되는 짝으로 덧셈과 뺄셈을 이어 볼까요?'],
  demo: { tool: 'tenframe', options: { twoColor: true, item: 'apple', showWord: true }, sequence: [{ parts: [6, 0] }, { parts: [6, 4] }] },
  acts: [
    { id: 'a1', title: '활동 1. 두 가지 칩을 모아 10 만들기', minutes: 8, tool: 'tenframe',
      task: '두 가지 칩을 판에 모아 놓고 모두 몇 개인지 수를 골라요.',
      teacher: '"하늘색 칩 6개와 주황색 칩 4개를 모두 모으면 몇 개예요?" 판을 가득 채운 모양을 보고 10이라고 말하게 한다. 한 가지 색만 세어 답하는 학생에게는 "두 색을 모두 합해서 몇 개예요?" 하고 되묻는다.',
      levels: TW('chip'),
      items: [
        total('하늘색 칩 6개와 주황색 칩 4개를 모두 모으면 몇 개일까요?', 6, 4, 0.1),
        total('하늘색 칩 2개와 주황색 칩 8개를 모두 모으면 몇 개일까요?', 2, 8, 0.12),
        total('하늘색 칩 7개와 주황색 칩 3개를 모두 모으면 몇 개일까요?', 7, 3, 0.15,
          { conclude: '7과 3, 6과 4, 2와 8을 모으면 모두 10이에요. 이 짝들을 덧셈식으로 쓸 수 있어요.' }),
        total('더 해 보기: 하늘색 칩 5개와 주황색 칩 5개를 모두 모으면 몇 개일까요?', 5, 5, 0.18, { extra: true }),
      ] },
    { id: 'a2', title: '활동 2. 덧셈식과 뺄셈식 이어 주기', minutes: 11, tool: 'mindmap',
      task: '왼쪽 덧셈식과 같은 이야기를 하는 뺄셈식 카드를 이어 줘요.',
      teacher: '"4+6=10이면 10에서 6을 빼면 얼마일까요? 4가 남지요." 더한 두 수 중 하나를 빼면 다른 한 수가 남는다고 짚는다. 뺄셈식을 10−4=6이라고 쓴 학생은 틀린 것이 아니다 — 4+6에는 10−4와 10−6이 모두 짝이라는 것을 알려 준다.',
      levels: CARD_LV,
      items: [
        match('덧셈식과 짝이 되는 뺄셈식을 이어 보세요.', '덧셈식과 뺄셈식', ['4+6=10', '7+3=10', '2+8=10'], ['10-6=4', '10-3=7', '10-8=2'], 0.12),
        match('이번에도 짝이 되는 뺄셈식을 이어 보세요.', '덧셈식과 뺄셈식', ['1+9=10', '5+5=10', '6+4=10'], ['10-9=1', '10-5=5', '10-4=6'], 0.15,
          { conclude: '더한 수 하나를 10에서 빼면 나머지 한 수가 남아요.' }),
        match('더 해 보기: 짝이 되는 뺄셈식을 이어 보세요.', '덧셈식과 뺄셈식', ['8+2=10', '3+7=10'], ['10-2=8', '10-7=3'], 0.18, { extra: true }),
      ] },
    { id: 'a3', title: '활동 3. 답이 같은 뺄셈식 고르기', minutes: 7, tool: 'mindmap',
      task: '답이 알맞은 뺄셈식만 바구니에 담아요.',
      teacher: '"답이 4인 식을 골라 봐요. 10−6은 몇일까요?" 식마다 거꾸로 세어 답을 써 보게 한다. 10−4=6인데 답이 4인 식으로 담은 학생에게는 "10에서 4를 빼면 4가 남나요, 6이 남나요?" 하고 되묻는다.',
      levels: CARD_LV,
      items: [
        pickOf('답이 4인 식만 골라 보세요.', '답이 4', ['10-6', '10-4', '8-4', '5-2'], ['10-6', '8-4'], 0.14),
        pickOf('답이 7인 식만 골라 보세요.', '답이 7', ['10-3', '10-7', '9-2', '6-1'], ['10-3', '9-2'], 0.16),
        pickOf('더 해 보기: 답이 5인 식만 골라 보세요.', '답이 5', ['10-5', '10-3', '9-4', '6-2'], ['10-5', '9-4'], 0.2, { extra: true }),
      ] },
  ],
  wrap: ['"6+4=10을 알면 10에서 4를 뺀 답도 알 수 있어요. 왜 그럴까요?" 짝에게 사과 판으로 보여 주며 말하게 한다. 출구 1번에서 10−3=3처럼 답을 쓴 학생은 먹은 수와 남은 수를 헷갈리는지 다음 시간에 먼저 살핀다.', [
    { type: 'choice', prompt: '3+7=10이에요. 10−3은 얼마인가요?', options: ['3', '7', '10'], answer: 1, difficulty: 0.12, explain: '3과 7을 모으면 10이니까 10에서 3을 빼면 7이 남아요.' },
    { type: 'choice', prompt: '9+1=10과 짝이 되는 뺄셈식에 ○ 하세요.', options: ['10−1=9', '10−1=1', '10−9=9'], answer: 0, difficulty: 0.15, explain: '10에서 1을 빼면 9가 남아요. 9+1=10과 짝이 되는 식이에요.' },
    { type: 'tool', tool: 'tenframe', options: { twoColor: true, item: 'apple', showCount: false, askNumber: true, target: { parts: [3, 7], ask: 'total' } }, prompt: '빨간 사과 3개와 초록 사과 7개를 모두 모으면 몇 개일까요?', target: { parts: [3, 7], ask: 'total' }, difficulty: 0.18 },
  ]],
  ws: { title: '덧셈식과 뺄셈식', items: [
    { type: 'figure', prompt: '두 가지 사과를 모으면 몇 개인지 식을 완성하세요.', tool: 'tenframe', options: { twoColor: true, item: 'apple' }, figures: [{ state: { parts: [3, 7] }, caption: '3 + 7 = ' + BLANK }, { state: { parts: [6, 4] }, caption: '6 + 4 = ' + BLANK }, { state: { parts: [1, 9] }, caption: '1 + 9 = ' + BLANK }], answer: '10, 10, 10' },
    { type: 'blank', prompt: '덧셈식을 보고 뺄셈식의 빈칸을 채우세요.', text: '2+8=10 → 10−8=___     5+5=10 → 10−5=___     9+1=10 → 10−9=___', answer: '2, 5, 1' },
    { type: 'choice', prompt: '4+6=10과 짝이 되는 식에 ○ 하세요.', options: ['10−6=4', '10−6=6', '10−4=4'], answer: '10−6=4' },
    { type: 'short', prompt: '7+3=10을 보고 만들 수 있는 뺄셈식을 두 개 써 보세요.' },
  ], easy: { note: '두 수를 더해 10이 되면, 10에서 한 수를 빼서 나머지를 찾을 수 있어요.', items: [
    { type: 'figure', prompt: '두 가지 사과를 모으면 몇 개인지 식을 완성하세요.', tool: 'tenframe', options: { twoColor: true, item: 'apple' }, figures: [{ state: { parts: [4, 6] }, caption: '4 + 6 = ' + BLANK }, { state: { parts: [2, 8] }, caption: '2 + 8 = ' + BLANK }], answer: '10, 10' },
    { type: 'blank', prompt: '덧셈식을 보고 뺄셈식의 빈칸을 채우세요.', text: '3+7=10 → 10−7=___     6+4=10 → 10−4=___', answer: '3, 6' },
    { type: 'choice', prompt: '8+2=10과 짝이 되는 식에 ○ 하세요.', options: ['10−2=8', '10−2=2'], answer: '10−2=8' },
    { type: 'draw', prompt: '사과 10개를 7개와 3개로 나누어 그리고 식을 써 보세요.' },
  ] } },
  diff: { easy: '칸 번호가 보이고 판 위에 "6과 4 → ?" 같은 목표가 나와요. 카드 판은 카드를 놓으면 바로 맞는지 알려 줘요.', base: '수 카드가 가려져 있어요. 다 놓은 뒤 모두 몇 개인지 수를 직접 골라요.', challenge: '칩이 흩어진 칸에 들어가 5칸 묶음으로 셀 수 없어요. 카드 판은 확인을 눌러야 맞는지 알려 줘요.' },
  notes: '자주 보이는 어려움: ① 덧셈식과 뺄셈식을 각각 따로 외운다 → 같은 판에서 모으고 덜어 내며 이어 본다. ② 10−4=6을 10−4=4로 쓴다(빼는 수를 답으로) → 남은 칸을 센다. ③ 두 수의 순서를 바꾸면 다른 식이라고 여긴다 → 6+4와 4+6이 모두 10임을 판으로 확인한다. 5차시부터는 합이 10을 넘는 덧셈을 다룬다.',
}));

// ───────────────────────────── 5차시 (core) ─────────────────────────────
L.push(lesson(5, {
  title: '9에 몇을 더할 때 먼저 10 만들기',
  objective: '9+4와 같이 합이 10을 넘는 덧셈에서 더하는 수를 가르기 하여 먼저 10을 만들고 나머지를 더해 답을 구할 수 있다.',
  desc: 'a little hedgehog with nine mint stickers on a card, moving one sticker from a small pile to make a full row of ten, and a few stickers left over',
  text: '9+4 → 10+3',
  layers: [{ motif: 'tree', x: 110, y: 216 }, { motif: 'star', x: 330, y: 62, s: 0.5 }, { motif: 'flower', x: 340, y: 236 }, { motif: 'flower', x: 380, y: 238, color: 'rose' }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"사과가 9개 있는데 4개를 더 받았어요. 모두 몇 개일까요?" 9개가 놓인 십칸 판에 사과가 하나 들어가면 가득 차고 3개가 남는 모습을 시연으로 보여 준다. "하나를 먼저 채워 10을 만들고, 남은 3개를 더해요. 10과 3이니까 13이에요." 9에서 하나씩 세다가 센 수를 잃어버리는 학생이 많다 — 10부터 시작하면 쉬워진다고 알려 준다.', '9에 4를 더할 때 쉬운 방법이 있을까요?'],
  demo: { tool: 'tenframe', options: { twoColor: true, item: 'apple', showWord: true }, sequence: [{ parts: [1, 0] }, { parts: [1, 3] }] },
  acts: [
    { id: 'a1', title: '활동 1. 더하는 수를 1과 나머지로 가르기', minutes: 9, tool: 'tenframe',
      task: '9에 1을 더하면 10이 돼요. 더하는 수를 1과 몇으로 가르는지 판에 놓아 알아봐요.',
      teacher: '"9+4에서 4를 1과 몇으로 가를까요?" 가른 한 수는 9에게 주고, 남은 수는 10에 더한다고 말로 풀어 준다. 4를 2와 2로 가른 학생은 틀린 것이 아니지만 9가 10이 되려면 1이 필요하다는 것을 짚는다.',
      levels: TW('apple'),
      items: [
        apart('9+4에서 4를 1과 몇으로 가를까요? 하늘색 1개와 주황색 몇 개가 4개가 되나요?', 4, 1, 0.1),
        apart('9+6에서 6을 1과 몇으로 가를까요? 하늘색 1개와 주황색 몇 개가 6개가 되나요?', 6, 1, 0.14,
          { predict: { q: '6을 1과 몇으로 가르면 10 뒤에 더할 수는 6보다 클까요, 작을까요?', options: ['더 커요', '더 작아요'], answer: 1 }, conclude: '6에서 1을 빼면 5가 남아요. 9+6은 10+5=15예요.' }),
        apart('9+3에서 3을 1과 몇으로 가를까요? 하늘색 1개와 주황색 몇 개가 3개가 되나요?', 3, 1, 0.1),
        apart('더 해 보기: 9+8에서 8을 1과 몇으로 가를까요? 하늘색 1개와 주황색 몇 개가 8개가 되나요?', 8, 1, 0.22, { extra: true }),
      ] },
    { id: 'a2', title: '활동 2. 수직선에서 10에서 한 번 쉬며 뛰기', minutes: 11, tool: 'numberline',
      task: '9에서 10까지 한 번 뛰고, 남은 수만큼 한 번 더 뛰어 모두 두 번에 도착해요.',
      teacher: '"9에서 10까지 한 칸 뛰고, 남은 3칸을 더 뛰어요. 어디에 도착했나요?" 화살표가 두 개 그려지면 도착한 수를 읽게 한다. 화살표를 세 번 그린 학생은 9에서 한 칸씩 뛰는 것이다 — 10에서 쉬고 남은 수를 한 번에 뛰어도 된다고 알려 준다.',
      levels: NL20,
      items: [
        jump2('9에서 두 번에 뛰어 보세요. 먼저 10, 그다음 3칸 더 가면 어디일까요?', 9, 13, 0.12),
        jump2('9에서 두 번에 뛰어 보세요. 먼저 10, 그다음 5칸 더 가면 어디일까요?', 9, 15, 0.15),
        jump2('9에서 두 번에 뛰어 보세요. 먼저 10, 그다음 2칸 더 가면 어디일까요?', 9, 12, 0.12,
          { conclude: '9에서 10까지 한 칸, 거기서 2칸 더 가면 12예요. 9+3은 12예요.' }),
        jump2('더 해 보기: 9에서 두 번에 뛰어 보세요. 먼저 10, 그다음 8칸 더 가면 어디일까요?', 9, 18, 0.22, { extra: true }),
      ] },
    { id: 'a3', title: '활동 3. 9에 더한 식을 10과 몇으로 바꾸기', minutes: 6, tool: 'mindmap',
      task: '9에 몇을 더한 식과 같은 값인 10에 몇을 더한 식을 이어 줘요.',
      teacher: '"9+4는 10에 얼마를 더한 것과 같을까요? 4에서 1을 떼어 9에 주었으니 3이 남아요." 10+4라고 이은 학생에게는 "9에게 1을 주고 나면 남은 수가 4일까요?" 하고 되묻는다.',
      levels: CARD_LV,
      items: [
        match('9에 더한 식과 같은 값인 식을 이어 보세요.', '9+몇 → 10+몇', ['9+4', '9+6', '9+2'], ['10+3', '10+5', '10+1'], 0.14),
        match('이번에도 같은 값인 식을 이어 보세요.', '9+몇 → 10+몇', ['9+5', '9+7', '9+3'], ['10+4', '10+6', '10+2'], 0.16),
        match('더 해 보기: 같은 값인 식을 이어 보세요.', '9+몇 → 10+몇', ['9+8', '9+9'], ['10+7', '10+8'], 0.22, { extra: true }),
      ] },
  ],
  wrap: ['"9+5를 어떻게 풀었는지 짝에게 말해 보세요." 9에게 1을 주어 10을 만들고 4를 더해 14라고 말하면 된다. 출구 1번에서 10+5를 고른 학생은 5에서 1을 떼지 않았는지 다음 시간에 먼저 살핀다.', [
    { type: 'choice', prompt: '9+5를 풀어요. 5를 1과 4로 가르면 10과 몇을 더하게 되나요?', options: ['10+5', '10+4', '10+1'], answer: 1, difficulty: 0.15, explain: '5에서 1을 9에게 주었으니 4가 남아요. 10+4=14예요.' },
    { type: 'tool', tool: 'tenframe', options: { twoColor: true, item: 'chip', showCount: false, askNumber: true, target: { total: 5, parts: [1, null], ask: 'b' } }, prompt: '9+5에서 5를 1과 몇으로 가를까요? 하늘색 1개와 주황색 몇 개가 5개가 되나요?', target: { total: 5, parts: [1, null], ask: 'b' }, difficulty: 0.2 },
    { type: 'choice', prompt: '9+7의 답은 얼마인가요?', options: ['15', '16', '17'], answer: 1, difficulty: 0.22, explain: '7을 1과 6으로 가르면 9+1=10, 10+6=16이에요.' },
  ]],
  ws: { title: '9에 더할 때 10 만들기', items: [
    { type: 'figure', prompt: '더하는 수를 1과 몇으로 갈랐는지 빈칸에 쓰세요.', tool: 'tenframe', options: { twoColor: true, item: 'apple' }, figures: [{ state: { parts: [1, 3] }, caption: '4 = 1 + ' + BLANK }, { state: { parts: [1, 5] }, caption: '6 = 1 + ' + BLANK }, { state: { parts: [1, 2] }, caption: '3 = 1 + ' + BLANK }], answer: '3, 5, 2' },
    { type: 'blank', prompt: '10을 먼저 만들어 빈칸에 알맞은 수를 쓰세요.', text: '9+4 → 9+1=10, 10+3=___     9+6 → 9+1=10, 10+5=___     9+2 → 9+1=10, 10+1=___', answer: '13, 15, 11' },
    { type: 'table', prompt: '9에 더한 식의 답을 쓰세요.', columns: ['식', '9+3', '9+5', '9+7'], cells: [['답', '12', '', '']], answer: '14, 16' },
    { type: 'choice', prompt: '9+6을 바르게 푼 것에 ○ 하세요.', options: ['9+1=10, 10+5=15', '9+1=10, 10+6=16', '9+1=10, 10+4=14'], answer: '9+1=10, 10+5=15' },
  ], easy: { note: '9에 1을 주면 10이에요. 남은 수를 10에 더해요.', items: [
    { type: 'figure', prompt: '더하는 수를 1과 몇으로 갈랐는지 빈칸에 쓰세요.', tool: 'tenframe', options: { twoColor: true, item: 'apple' }, figures: [{ state: { parts: [1, 2] }, caption: '3 = 1 + ' + BLANK }, { state: { parts: [1, 4] }, caption: '5 = 1 + ' + BLANK }], answer: '2, 4' },
    { type: 'blank', prompt: '10을 먼저 만들어 빈칸에 알맞은 수를 쓰세요.', text: '9+3 → 9+1=10, 10+2=___     9+5 → 9+1=10, 10+4=___', answer: '12, 14' },
    { type: 'choice', prompt: '9+4의 답에 ○ 하세요.', options: ['12', '13'], answer: '13' },
    { type: 'draw', prompt: '사과 9개 옆에 사과 3개를 그리고, 한 개를 옮겨 10을 만들어 보세요.' },
  ] } },
  diff: { easy: '칸 번호가 보이고 판 위에 "4 → 1과 ?" 같은 목표가 나와요. 수직선에는 도착한 수가 보여요.', base: '수 카드가 가려져 있어요. 다 놓은 뒤 주황색 사과가 몇 개인지 직접 골라요.', challenge: '사과가 흩어진 칸에 들어가 5칸 묶음으로 셀 수 없어요. 수직선은 양 끝의 수만 보여요.' },
  notes: '자주 보이는 어려움: ① 더하는 수를 가르지 않고 9에서 하나씩 센다 → 9에게 1을 주어 10을 만든다. ② 4를 1과 3으로 가르고도 10+4를 한다 → 가른 수 하나는 이미 9에게 주었다고 말한다. ③ 수직선에서 화살표를 세 번 그린다 → 10에서 쉬고 남은 수를 한 번에 뛴다. 8에 더하는 경우는 6차시에서 다룬다.',
}));
// ───────────────────────────── 6차시 (practice) ─────────────────────────────
L.push(lesson(6, {
  title: '8에 더할 때는 2를 떼어 10 만들기',
  objective: '8+5와 같은 덧셈에서 더하는 수에서 2를 떼어 8과 모아 10을 만들고 나머지를 더해 답을 구할 수 있다.',
  desc: 'a smiling squirrel pushing two acorns from a small pile into a box that already has eight acorns, making a full ten, with three acorns left on the side',
  text: '8+5 → 10+3',
  layers: [{ motif: 'tree', x: 390, y: 216, color: 'mint' }, { motif: 'leaf', x: 90, y: 234 }, { motif: 'leaf', x: 150, y: 238 }, { motif: 'star', x: 320, y: 60, s: 0.5 }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"8개가 있는 상자에 도토리 5개를 더 넣어요. 상자를 가득 채우려면 몇 개를 먼저 넣어야 할까요?" 시연 단추로 8개에 2개가 들어가 10이 되고 3개가 남는 모습을 보여 준다. "어제는 9였으니 1을 떼었지요. 오늘은 8이니까 2를 떼어요." 어제처럼 항상 1을 떼는 학생이 있다 — 10이 되려면 8에는 2가 필요하다고 짚는다.', '8에 5를 더할 때는 얼마를 먼저 더해 10을 만들까요?'],
  demo: { tool: 'tenframe', options: { twoColor: true, item: 'apple', showWord: true }, sequence: [{ parts: [2, 0] }, { parts: [2, 3] }] },
  acts: [
    { id: 'a1', title: '활동 1. 더하는 수를 2와 나머지로 가르기', minutes: 9, tool: 'tenframe',
      task: '8에 2를 더하면 10이 돼요. 더하는 수를 2와 몇으로 가르는지 판에 놓아 알아봐요.',
      teacher: '"8+5에서 5를 2와 몇으로 가를까요?" 8에게 줄 2는 하늘색으로, 남을 수는 주황색으로 놓게 한다. 2와 3이 아니라 1과 4로 가른 학생에게는 "8에게 1을 주면 10이 되나요?" 하고 되묻는다.',
      levels: TW('chip'),
      items: [
        apart('8+5에서 5를 2와 몇으로 가를까요? 하늘색 2개와 주황색 몇 개가 5개가 되나요?', 5, 2, 0.1),
        apart('8+7에서 7을 2와 몇으로 가를까요? 하늘색 2개와 주황색 몇 개가 7개가 되나요?', 7, 2, 0.14,
          { predict: { q: '8+7에서 8에게 주는 수는 9+7에서 9에게 주는 수보다 클까요?', options: ['더 커요', '같아요', '더 작아요'], answer: 0 }, conclude: '8은 10까지 2가 모자라서 2를 주어요. 남는 수는 7−2=5예요.' }),
        apart('8+4에서 4를 2와 몇으로 가를까요? 하늘색 2개와 주황색 몇 개가 4개가 되나요?', 4, 2, 0.1),
        apart('더 해 보기: 8+9에서 9를 2와 몇으로 가를까요? 하늘색 2개와 주황색 몇 개가 9개가 되나요?', 9, 2, 0.22, { extra: true }),
      ] },
    { id: 'a2', title: '활동 2. 8에서 10까지, 거기서 남은 수만큼 뛰기', minutes: 11, tool: 'numberline',
      task: '8에서 10까지 한 번 뛰고, 남은 수만큼 한 번 더 뛰어 모두 두 번에 도착해요.',
      teacher: '"8에서 10까지 몇 칸을 뛰었나요? 거기서 3칸을 더 뛰면 어디예요?" 첫 번째 화살표는 늘 10에서 끝나게 하자고 약속한다. 화살표 두 개를 모두 3칸으로 뛴 학생에게는 "첫 화살표가 10에 닿았나요?" 하고 되묻는다.',
      levels: NL20,
      items: [
        jump2('8에서 두 번에 뛰어 보세요. 먼저 10, 그다음 3칸 더 가면 어디일까요?', 8, 13, 0.12),
        jump2('8에서 두 번에 뛰어 보세요. 먼저 10, 그다음 5칸 더 가면 어디일까요?', 8, 15, 0.15),
        jump2('8에서 두 번에 뛰어 보세요. 먼저 10, 그다음 1칸 더 가면 어디일까요?', 8, 11, 0.1,
          { conclude: '8에서 10까지 두 칸, 거기서 1칸 더 가면 11이에요. 8+3은 11이에요.' }),
        jump2('더 해 보기: 8에서 두 번에 뛰어 보세요. 먼저 10, 그다음 7칸 더 가면 어디일까요?', 8, 17, 0.22, { extra: true }),
      ] },
    { id: 'a3', title: '활동 3. 10이 되는 가르기 고르기', minutes: 6, tool: 'mindmap',
      task: '8과 모아 10이 되도록 더하는 수를 바르게 가른 카드를 골라요.',
      teacher: '"8+7에서 7을 어떻게 가르면 8과 모아 10이 될까요?" 8과 모아 10이 되는 수는 2뿐이라고 확인하게 한다. 7을 3과 4로 가른 학생에게는 "8과 3을 모으면 10이 되나요?" 하고 되묻는다.',
      levels: CARD_LV,
      items: [
        pickOf('8+7에서 7을 가를 때 8과 모아 10이 되도록 가른 카드를 골라 보세요.', '10이 되는 가르기', ['7을 2와 5로', '7을 3과 4로', '7을 6과 1로'], ['7을 2와 5로'], 0.14),
        pickOf('8+4에서 4를 가를 때 8과 모아 10이 되도록 가른 카드를 골라 보세요.', '10이 되는 가르기', ['4를 1과 3으로', '4를 2와 2로', '4를 3과 1로'], ['4를 2와 2로'], 0.16),
        pickOf('더 해 보기: 8+9에서 9를 가를 때 8과 모아 10이 되도록 가른 카드를 골라 보세요.', '10이 되는 가르기', ['9를 1과 8로', '9를 2와 7로', '9를 3과 6으로'], ['9를 2와 7로'], 0.2, { extra: true }),
      ] },
  ],
  wrap: ['"8+6을 어떻게 풀었는지 짝에게 말해 보세요." 6을 2와 4로 갈라 8과 2로 10을 만들고 4를 더해 14라고 말하면 된다. 출구 2번에서 15를 고른 학생은 6에서 2를 떼지 않고 10+5를 한 것은 아닌지 다음 시간에 먼저 살핀다.', [
    { type: 'choice', prompt: '8+6에서 6을 2와 4로 가르면 10과 몇을 더하게 되나요?', options: ['10+6', '10+4', '10+2'], answer: 1, difficulty: 0.15, explain: '6에서 2를 8에게 주었으니 4가 남아요. 10+4=14예요.' },
    { type: 'tool', tool: 'tenframe', options: { twoColor: true, item: 'apple', showCount: false, askNumber: true, target: { total: 6, parts: [2, null], ask: 'b' } }, prompt: '8+6에서 6을 2와 몇으로 가를까요? 하늘색 2개와 주황색 몇 개가 6개가 되나요?', target: { total: 6, parts: [2, null], ask: 'b' }, difficulty: 0.2 },
    { type: 'choice', prompt: '8+9의 답은 얼마인가요?', options: ['16', '17', '18'], answer: 1, difficulty: 0.22, explain: '9를 2와 7로 가르면 8+2=10, 10+7=17이에요.' },
  ]],
  ws: { title: '8에 더할 때 10 만들기', items: [
    { type: 'figure', prompt: '더하는 수를 2와 몇으로 갈랐는지 빈칸에 쓰세요.', tool: 'tenframe', options: { twoColor: true, item: 'apple' }, figures: [{ state: { parts: [2, 3] }, caption: '5 = 2 + ' + BLANK }, { state: { parts: [2, 5] }, caption: '7 = 2 + ' + BLANK }, { state: { parts: [2, 2] }, caption: '4 = 2 + ' + BLANK }], answer: '3, 5, 2' },
    { type: 'blank', prompt: '10을 먼저 만들어 빈칸에 알맞은 수를 쓰세요.', text: '8+5 → 8+2=10, 10+3=___     8+7 → 8+2=10, 10+5=___     8+4 → 8+2=10, 10+2=___', answer: '13, 15, 12' },
    { type: 'table', prompt: '8에 더한 식의 답을 쓰세요.', columns: ['식', '8+3', '8+6', '8+9'], cells: [['답', '11', '', '']], answer: '14, 17' },
    { type: 'choice', prompt: '8+6을 바르게 푼 것에 ○ 하세요.', options: ['8+2=10, 10+4=14', '8+1=9, 9+5=14', '8+2=10, 10+6=16'], answer: '8+2=10, 10+4=14' },
  ], easy: { note: '8에는 2를 주면 10이 돼요. 남은 수를 10에 더해요.', items: [
    { type: 'figure', prompt: '더하는 수를 2와 몇으로 갈랐는지 빈칸에 쓰세요.', tool: 'tenframe', options: { twoColor: true, item: 'apple' }, figures: [{ state: { parts: [2, 1] }, caption: '3 = 2 + ' + BLANK }, { state: { parts: [2, 4] }, caption: '6 = 2 + ' + BLANK }], answer: '1, 4' },
    { type: 'blank', prompt: '10을 먼저 만들어 빈칸에 알맞은 수를 쓰세요.', text: '8+3 → 8+2=10, 10+1=___     8+5 → 8+2=10, 10+3=___', answer: '11, 13' },
    { type: 'choice', prompt: '8+4의 답에 ○ 하세요.', options: ['12', '13'], answer: '12' },
    { type: 'draw', prompt: '도토리 8개 옆에 도토리 4개를 그리고, 2개를 옮겨 10을 만들어 보세요.' },
  ] } },
  diff: { easy: '칸 번호가 보이고 판 위에 "5 → 2와 ?" 같은 목표가 나와요. 수직선에는 도착한 수가 보여요.', base: '수 카드가 가려져 있어요. 다 놓은 뒤 주황색 칩이 몇 개인지 직접 골라요.', challenge: '칩이 흩어진 칸에 들어가 5칸 묶음으로 셀 수 없어요. 수직선은 양 끝의 수만 보여요.' },
  notes: '자주 보이는 어려움: ① 9에서처럼 항상 1을 뗀다 → 8은 10까지 2가 모자란다고 먼저 말한다. ② 가른 수 가운데 8에게 준 수를 10 뒤에도 더한다(8+5에서 10+5) → 준 수는 이미 쓴 것이다. ③ 수직선의 첫 화살표가 10에 닿지 않는다 → 첫 화살표는 늘 10에서 끝난다. 7과 6에 더하는 경우는 7차시에서 다룬다.',
}));
// ───────────────────────────── 7차시 (extend) ─────────────────────────────
L.push(lesson(7, {
  title: '7과 6에 더할 때도 10 만들어 더하기',
  objective: '7+5나 6+8처럼 더해지는 수가 7이나 6일 때 10까지 모자란 수를 더하는 수에서 떼어 10을 만들고 답을 구할 수 있다.',
  desc: 'two paper kites, one with seven stars and one with six stars, and a small fox adding some stars from a pouch to fill each kite to ten',
  text: '7+5, 6+8',
  layers: [{ motif: 'hills', y: 208 }, { motif: 'tree', x: 100, y: 216 }, { motif: 'star', x: 330, y: 56, s: 0.5 }, { motif: 'star', x: 380, y: 100, s: 0.4 }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"연에 별이 7개 붙어 있어요. 별 5개를 더 붙이면 모두 몇 개일까요?" 7개가 놓인 판에 3개를 먼저 채우면 10이 되고 2개가 남는 모습을 시연으로 보여 준다. "7은 10까지 3이 모자라니 5를 3과 2로 가르면 돼요." 더해지는 수가 7일 때는 3을, 6일 때는 4를 먼저 더해 10을 만든다고 짚는다. 9와 8에서 익힌 1과 2를 그대로 쓰는 학생이 있다.', '7과 6은 10까지 얼마가 모자랄까요?'],
  demo: { tool: 'tenframe', options: { twoColor: true, item: 'apple', showWord: true }, sequence: [{ parts: [3, 0] }, { parts: [3, 2] }] },
  acts: [
    { id: 'a1', title: '활동 1. 더하는 수를 갈라 10까지 채우기', minutes: 9, tool: 'tenframe',
      task: '더해지는 수가 7이면 3, 6이면 4가 모자라요. 더하는 수를 그 수와 나머지로 갈라 놓아요.',
      teacher: '"7+5에서 7은 10까지 몇이 모자라지요? 그러면 5를 3과 몇으로 가를까요?" 모자란 수를 먼저 말한 뒤 갈라 보게 한다. 5를 1과 4로 가른 학생은 9의 방법을 그대로 쓴 것이다 — 7은 3이 모자란다고 손가락으로 세어 보게 한다.',
      levels: TW('apple'),
      items: [
        apart('7+5에서 5를 3과 몇으로 가를까요? 하늘색 3개와 주황색 몇 개가 5개가 되나요?', 5, 3, 0.12),
        apart('7+6에서 6을 3과 몇으로 가를까요? 하늘색 3개와 주황색 몇 개가 6개가 되나요?', 6, 3, 0.15),
        apart('6+7에서 7을 4와 몇으로 가를까요? 하늘색 4개와 주황색 몇 개가 7개가 되나요?', 7, 4, 0.18,
          { predict: { q: '6+7에서 6에게 주는 수는 7+6에서 7에게 주는 수보다 클까요?', options: ['더 커요', '같아요', '더 작아요'], answer: 0 }, conclude: '6은 10까지 4가 모자라서 4를 주어요. 7에서 4를 빼면 3이 남아요.' }),
        apart('더 해 보기: 6+8에서 8을 4와 몇으로 가를까요? 하늘색 4개와 주황색 몇 개가 8개가 되나요?', 8, 4, 0.22, { extra: true }),
      ] },
    { id: 'a2', title: '활동 2. 수직선에서 10에 들러 두 번에 뛰기', minutes: 11, tool: 'numberline',
      task: '처음 수에서 10까지 한 번 뛰고, 남은 수만큼 한 번 더 뛰어 모두 두 번에 도착해요.',
      teacher: '"7에서 10까지 3칸, 거기서 2칸 더 뛰면 어디예요?" 첫 화살표가 10에 닿는지 확인하게 한다. 7에서 5칸을 한 번에 뛰고 12라고 답한 학생이 있다 — 맞는 답이지만 10에 들르는 방법을 보여 준다고 말하고 두 번에 뛰게 한다.',
      levels: NL20,
      items: [
        jump2('7에서 두 번에 뛰어 보세요. 먼저 10, 그다음 2칸 더 가면 어디일까요?', 7, 12, 0.14),
        jump2('7에서 두 번에 뛰어 보세요. 먼저 10, 그다음 3칸 더 가면 어디일까요?', 7, 13, 0.14),
        jump2('6에서 두 번에 뛰어 보세요. 먼저 10, 그다음 3칸 더 가면 어디일까요?', 6, 13, 0.16,
          { conclude: '6에서 10까지 네 칸, 거기서 3칸 더 가면 13이에요. 6+7은 13이에요.' }),
        jump2('더 해 보기: 6에서 두 번에 뛰어 보세요. 먼저 10, 그다음 4칸 더 가면 어디일까요?', 6, 14, 0.2, { extra: true }),
      ] },
    { id: 'a3', title: '활동 3. 더하는 수를 알맞게 갈라 이어 주기', minutes: 6, tool: 'mindmap',
      task: '더해지는 수에서 10이 되도록 더하는 수를 어떻게 가르는지 카드를 이어 줘요.',
      teacher: '"6+8에서 6은 10까지 4가 모자라요. 8을 4와 몇으로 가를까요?" 먼저 모자란 수를 쓰고, 그 수를 더하는 수에서 떼어 내게 한다. 두 번째 수를 가를 때 모자란 수를 빼먹은 학생에게는 "가른 두 수를 모으면 8이 되나요?" 하고 되묻는다.',
      levels: CARD_LV,
      items: [
        match('더하는 수를 갈라서 10을 만들 수 있게 이어 보세요.', '10을 만드는 가르기', ['7+5에서 5를', '6+8에서 8을', '7+6에서 6을'], ['3과 2', '4와 4', '3과 3'], 0.16),
        match('이번에도 더하는 수를 갈라 이어 보세요.', '10을 만드는 가르기', ['6+5에서 5를', '7+8에서 8을', '6+9에서 9를'], ['4와 1', '3과 5', '4와 5'], 0.2),
        match('더 해 보기: 더하는 수를 갈라 이어 보세요.', '10을 만드는 가르기', ['7+9에서 9를', '6+6에서 6을'], ['3과 6', '4와 2'], 0.24, { extra: true }),
      ] },
  ],
  wrap: ['"7+6을 어떻게 풀었는지 짝에게 말해 보세요." 7에 3을 더해 10을 만들고 3을 더해 13이라고 말하면 된다. 출구 1번에서 4를 고른 학생은 9와 8의 방법을 그대로 쓰는지 다음 시간에 먼저 살핀다.', [
    { type: 'choice', prompt: '7+4에서 7을 10으로 만들려면 4를 어떻게 가르면 좋을까요?', options: ['1과 3', '2와 2', '3과 1'], answer: 2, difficulty: 0.18, explain: '7은 10까지 3이 모자라요. 4를 3과 1로 가르면 7+3=10, 10+1=11이에요.' },
    { type: 'tool', tool: 'tenframe', options: { twoColor: true, item: 'chip', showCount: false, askNumber: true, target: { total: 9, parts: [4, null], ask: 'b' } }, prompt: '6+9에서 9를 4와 몇으로 가를까요? 하늘색 4개와 주황색 몇 개가 9개가 되나요?', target: { total: 9, parts: [4, null], ask: 'b' }, difficulty: 0.22 },
    { type: 'choice', prompt: '6+8의 답은 얼마인가요?', options: ['13', '14', '15'], answer: 1, difficulty: 0.2, explain: '8을 4와 4로 가르면 6+4=10, 10+4=14예요.' },
  ]],
  ws: { title: '7과 6에 더할 때 10 만들기', items: [
    { type: 'figure', prompt: '더해지는 수와 모아 10이 되도록 갈랐어요. 빈칸에 알맞은 수를 쓰세요.', tool: 'tenframe', options: { twoColor: true, item: 'apple' }, figures: [{ state: { parts: [3, 2] }, caption: '7+5: 5 = 3 + ' + BLANK }, { state: { parts: [4, 3] }, caption: '6+7: 7 = 4 + ' + BLANK }, { state: { parts: [3, 3] }, caption: '7+6: 6 = 3 + ' + BLANK }], answer: '2, 3, 3' },
    { type: 'blank', prompt: '10을 먼저 만들어 빈칸에 알맞은 수를 쓰세요.', text: '7+5 → 7+3=10, 10+2=___     6+7 → 6+4=10, 10+3=___     6+9 → 6+4=10, 10+5=___', answer: '12, 13, 15' },
    { type: 'table', prompt: '식의 답을 쓰세요.', columns: ['식', '7+4', '7+8', '6+6'], cells: [['답', '11', '', '']], answer: '15, 12' },
    { type: 'choice', prompt: '6+5를 바르게 푼 것에 ○ 하세요.', options: ['6+4=10, 10+1=11', '6+3=9, 9+2=11', '6+4=10, 10+5=15'], answer: '6+4=10, 10+1=11' },
  ], easy: { note: '7에는 3, 6에는 4를 더하면 10이 돼요. 남은 수를 10에 더해요.', items: [
    { type: 'figure', prompt: '더하는 수를 갈랐어요. 빈칸에 알맞은 수를 쓰세요.', tool: 'tenframe', options: { twoColor: true, item: 'apple' }, figures: [{ state: { parts: [3, 1] }, caption: '7+4: 4 = 3 + ' + BLANK }, { state: { parts: [4, 1] }, caption: '6+5: 5 = 4 + ' + BLANK }], answer: '1, 1' },
    { type: 'blank', prompt: '10을 먼저 만들어 빈칸에 알맞은 수를 쓰세요.', text: '7+4 → 7+3=10, 10+1=___     6+6 → 6+4=10, 10+2=___', answer: '11, 12' },
    { type: 'choice', prompt: '7+5의 답에 ○ 하세요.', options: ['12', '13'], answer: '12' },
    { type: 'draw', prompt: '별 7개 옆에 별 4개를 그리고, 3개를 옮겨 10을 만들어 보세요.' },
  ] } },
  diff: { easy: '칸 번호가 보이고 판 위에 "5 → 3과 ?" 같은 목표가 나와요. 수직선에는 도착한 수가 보여요.', base: '수 카드가 가려져 있어요. 다 놓은 뒤 주황색 사과가 몇 개인지 직접 골라요.', challenge: '사과가 흩어진 칸에 들어가 5칸 묶음으로 셀 수 없어요. 수직선은 양 끝의 수만 보여요.' },
  notes: '자주 보이는 어려움: ① 9와 8에서 익힌 1, 2만 떼어 낸다 → 더해지는 수가 10까지 얼마나 모자란지 먼저 말한다. ② 6에 모자란 수를 3으로 센다 → 6에서 10까지 손가락으로 세어 본다. ③ 가른 두 수를 모아도 더하는 수가 되지 않는다 → 3과 2를 모으면 5인지 확인한다. 합이 같은 식은 8차시에서 모은다.',
}));
// ───────────────────────────── 8차시 (extend) ─────────────────────────────
L.push(lesson(8, {
  title: '9+4, 8+5, 7+6 합이 같은 식 모으기',
  objective: '더하는 두 수가 달라도 합이 같은 식(9+4, 8+5, 7+6)을 찾고, 더하는 순서를 바꾸어도 합이 같음을 말할 수 있다.',
  desc: 'three paper baskets with different fruit counts all adding up to thirteen, a little bear counting the totals on a paper board',
  text: '합이 13인 식',
  layers: [{ motif: 'hills', y: 208 }, { motif: 'house', x: 110, y: 214 }, { motif: 'flower', x: 340, y: 238 }, { motif: 'star', x: 90, y: 56, s: 0.5 }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"9+4와 8+5는 모두 13이에요. 왜 두 식의 합이 같을까요?" 시연 단추로 9와 4가 8과 5로 바뀌면서 한 칸이 이쪽에서 저쪽으로 옮겨 가는 모습을 보여 준다. 한 수가 하나 줄면 다른 수가 하나 늘어서 합이 그대로라고 짚는다. 합이 같은 식의 수가 모두 다르니 합도 다르다고 생각하는 학생이 있다.', '9+4와 8+5는 왜 합이 같을까요?'],
  demo: { tool: 'numberline', options: { mode: 'jump', min: 0, max: 20, step: 1, labels: 'all', showValue: true }, sequence: [{ from: 9, hops: [1, 3], size: 1 }, { from: 8, hops: [2, 3], size: 1 }] },
  acts: [
    { id: 'a1', title: '활동 1. 10에 들러 두 번에 뛰어 합 구하기', minutes: 9, tool: 'numberline',
      task: '처음 수에서 10에 들른 뒤 남은 수만큼 뛰어 합을 구해요.',
      teacher: '"9에서 10까지 한 번, 거기서 6칸 더 뛰면 어디예요?" 이번에는 더하는 수가 커져서 남은 수도 커진다고 짚는다. 도착한 수가 16인데 10+7=17이라고 말하는 학생은 첫 화살표에서 쓴 1을 빼지 않은 것이다.',
      levels: NL20,
      items: [
        jump2('9에서 두 번에 뛰어 보세요. 먼저 10, 그다음 6칸 더 가면 어디일까요?', 9, 16, 0.14),
        jump2('8에서 두 번에 뛰어 보세요. 먼저 10, 그다음 6칸 더 가면 어디일까요?', 8, 16, 0.16),
        jump2('7에서 두 번에 뛰어 보세요. 먼저 10, 그다음 5칸 더 가면 어디일까요?', 7, 15, 0.16,
          { conclude: '9+6, 8+7, 7+8은 모두 15 근처예요. 한 수가 줄면 다른 수가 늘어요.' }),
        jump2('더 해 보기: 6에서 두 번에 뛰어 보세요. 먼저 10, 그다음 5칸 더 가면 어디일까요?', 6, 15, 0.2, { extra: true }),
      ] },
    { id: 'a2', title: '활동 2. 순서를 바꾼 식 짝짓기', minutes: 11, tool: 'mindmap',
      task: '더하는 두 수의 순서를 바꾼 식을 이어 줘요. 합은 어떻게 될까요?',
      teacher: '"3+9와 9+3은 합이 같을까요?" 작은 수에서 시작해 이어 세기보다 큰 수에서 시작하는 것이 더 빠르다고 알려 준다. 3+9와 9+3의 합이 다르다고 생각하는 학생에게는 수직선으로 두 식을 모두 뛰어 보게 한다.',
      levels: CARD_LV,
      items: [
        match('더하는 두 수의 순서를 바꾼 식을 이어 보세요.', '순서를 바꾼 식', ['3+9', '4+8', '5+7'], ['9+3', '8+4', '7+5'], 0.14),
        match('이번에도 순서를 바꾼 식을 이어 보세요.', '순서를 바꾼 식', ['2+9', '6+8', '4+9'], ['9+2', '8+6', '9+4'], 0.16,
          { conclude: '더하는 수의 순서를 바꾸어도 합은 같아요. 큰 수에서 시작하면 더 쉬워요.' }),
        match('더 해 보기: 순서를 바꾼 식을 이어 보세요.', '순서를 바꾼 식', ['3+8', '5+9'], ['8+3', '9+5'], 0.2, { extra: true }),
      ] },
    { id: 'a3', title: '활동 3. 합이 같은 식끼리 모으기', minutes: 6, tool: 'mindmap',
      task: '식 카드를 읽고 합이 같은 것끼리 두 곳으로 나누어 놓아요.',
      teacher: '"9+3과 8+4의 합은 얼마예요? 그리고 7+5는요?" 먼저 10을 만들어 합을 구한 뒤 카드를 놓게 한다. 첫 수가 같은 식끼리 모은 학생(9+3과 9+4)에게는 "합은 같은가요?" 하고 되묻는다.',
      levels: CARD_LV,
      items: [
        sortTo('식 카드를 합이 같은 것끼리 두 곳으로 나누어 보세요.', '합이 같은 식', ['합이 12', '합이 13'], [['9+3', '8+4', '7+5'], ['9+4', '8+5', '7+6']], 0.16),
        sortTo('이번에도 합이 같은 것끼리 나누어 보세요.', '합이 같은 식', ['합이 14', '합이 15'], [['9+5', '8+6', '7+7'], ['9+6', '8+7', '6+9']], 0.2),
        sortTo('더 해 보기: 합이 같은 것끼리 나누어 보세요.', '합이 같은 식', ['합이 11', '합이 16'], [['9+2', '8+3', '6+5'], ['9+7', '8+8', '7+9']], 0.24, { extra: true }),
      ] },
  ],
  wrap: ['"9+4와 8+5가 같은 13인 까닭을 말해 보세요." 한 수가 하나 줄면 다른 수가 하나 늘어난다고 말하면 된다. 출구 2번에서 7+5와 합이 같다고 6+7을 고른 학생은 합을 구하지 않고 수가 비슷한 것만 본 것이다.', [
    { type: 'choice', prompt: '9+3과 합이 같은 식에 ○ 하세요.', options: ['8+4', '8+3', '9+4'], answer: 0, difficulty: 0.15, explain: '9+3은 12이고 8+4도 12예요. 한 수가 줄면 다른 수가 늘어서 합이 같아요.' },
    { type: 'choice', prompt: '7+5와 합이 같은 식에 ○ 하세요.', options: ['6+7', '8+4', '8+5'], answer: 1, difficulty: 0.18, explain: '7+5는 12이고 8+4도 12예요. 6+7은 13, 8+5는 13이에요.' },
    { type: 'tool', tool: 'numberline', options: { mode: 'jump', min: 0, max: 20, step: 1, labels: 'all', fixedFrom: 9 }, prompt: '9에서 두 번에 뛰어 보세요. 먼저 10, 그다음 5칸 더 가면 어디일까요?', target: { from: 9, end: 14, count: 2 }, difficulty: 0.2 },
  ]],
  ws: { title: '합이 같은 식 모으기', items: [
    { type: 'blank', prompt: '식의 합을 구해서 빈칸에 알맞은 수를 쓰세요.', text: '9+4=___     8+5=___     7+6=___', answer: '13, 13, 13' },
    { type: 'choice', prompt: '9+5와 합이 같은 식에 ○ 하세요.', options: ['8+6', '8+5', '7+6'], answer: '8+6' },
    { type: 'table', prompt: '순서를 바꾼 식의 합을 쓰세요.', columns: ['식', '3+9', '9+3', '4+8', '8+4'], cells: [['합', '12', '', '12', '']], answer: '12, 12' },
    { type: 'short', prompt: '합이 같은 식이 되는 까닭을 한 문장으로 써 보세요.' },
  ], easy: { note: '한 수가 하나 줄면 다른 수가 하나 늘어요. 그래서 합이 같아요.', items: [
    { type: 'blank', prompt: '식의 합을 구해서 빈칸에 알맞은 수를 쓰세요.', text: '9+3=___     8+4=___', answer: '12, 12' },
    { type: 'choice', prompt: '9+2와 합이 같은 식에 ○ 하세요.', options: ['8+3', '8+4'], answer: '8+3' },
    { type: 'table', prompt: '순서를 바꾼 식의 합을 쓰세요.', columns: ['식', '2+9', '9+2'], cells: [['합', '11', '']], answer: '11' },
    { type: 'draw', prompt: '사과 9개와 4개, 8개와 5개를 그려 보고 모두 13개인지 세어 보세요.' },
  ] } },
  diff: { easy: '수직선에 모든 눈금의 수와 도착한 수가 보여요. 카드 판은 카드를 놓으면 바로 맞는지 알려 줘요.', base: '수직선에 모든 눈금의 수가 보이고 도착한 수는 직접 읽어요. 카드 판은 확인을 눌러야 알려 줘요.', challenge: '수직선은 양 끝의 수만 보여요. 카드 판은 확인을 눌러야 맞는지 알려 줘요.' },
  notes: '자주 보이는 어려움: ① 두 번째 화살표를 더하는 수 그대로 뛴다(9+6에서 첫 화살표 1을 빼지 않음) → 쓴 수를 뺀 나머지를 뛴다. ② 순서를 바꾸면 다른 합이라고 생각한다 → 수직선에서 두 식을 모두 뛰어 본다. ③ 합이 같은 식을 수가 비슷한 것으로 고른다 → 합을 직접 구한 뒤 모은다. 이야기에서 식을 만드는 것은 9차시에서 다룬다.',
}));

// ───────────────────────────── 9차시 (core) ─────────────────────────────
L.push(lesson(9, {
  title: '이야기를 읽고 10을 만들어 합 구하기',
  objective: '합이 10을 넘는 덧셈 이야기를 읽고 알맞은 식을 만들어 10을 만들어 더하는 방법으로 답을 구할 수 있다.',
  desc: 'a small paper bus with eight children inside and six more children climbing on at a bus stop with a paper tree, a number line drawn on the road',
  text: '8명에 6명이 더 타면?',
  layers: [{ motif: 'hills', y: 208 }, { motif: 'tree', x: 90, y: 216 }, { motif: 'house', x: 380, y: 214 }, { motif: 'flower', x: 250, y: 240 }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"버스에 8명이 타고 있어요. 정류장에서 6명이 더 탔어요. 모두 몇 명일까요?" 먼저 "더 탔어요"라는 말을 짚고 8+6이라는 식을 칠판에 쓴다. 시연 단추로 8에서 10까지, 거기서 4칸 더 뛰는 모습을 보여 준다. 이야기에 나온 수를 모두 더하지 않고 앞의 수만 쓰는 학생이 있는지 살핀다.', '버스에 6명이 더 타면 모두 몇 명일까요?'],
  demo: { tool: 'numberline', options: { mode: 'jump', min: 0, max: 20, step: 1, labels: 'all', showValue: true }, sequence: [{ from: 8, hops: [2, 4], size: 1 }] },
  acts: [
    { id: 'a1', title: '활동 1. 이야기와 식 이어 주기', minutes: 9, tool: 'mindmap',
      task: '이야기를 읽고 알맞은 덧셈식을 찾아 이어 줘요.',
      teacher: '"사탕 9개에 4개를 더 받았어요. 식은 어떻게 쓸까요?" 처음에 있던 수와 더 받은 수를 짚게 한다. 처음 수와 더해진 수를 바꾸어 4+9라고 쓴 학생에게는 합이 같다고 인정하되, 이야기의 순서대로 9+4로 쓰는 것이 읽기 편하다고 말해 준다.',
      levels: CARD_LV,
      items: [
        match('이야기에 알맞은 덧셈식을 이어 보세요.', '이야기와 식', ['사탕 9개에 4개를 더 받았어요.', '딸기 8개에 5개를 더 땄어요.', '풍선 7개에 6개를 더 불었어요.'], ['9+4', '8+5', '7+6'], 0.14),
        match('이번에도 알맞은 덧셈식을 이어 보세요.', '이야기와 식', ['빵 6개에 7개를 더 구웠어요.', '공 9개에 8개를 더 샀어요.', '연필 8개에 6개를 더 받았어요.'], ['6+7', '9+8', '8+6'], 0.18,
          { conclude: '"더 받았어요", "더 샀어요"처럼 늘어나는 이야기는 더하기로 써요.' }),
        match('더 해 보기: 알맞은 덧셈식을 이어 보세요.', '이야기와 식', ['구슬 7개에 9개를 더 모았어요.', '카드 9장에 9장을 더 받았어요.'], ['7+9', '9+9'], 0.22, { extra: true }),
      ] },
    { id: 'a2', title: '활동 2. 수직선으로 이야기의 답 구하기', minutes: 11, tool: 'numberline',
      task: '이야기에 나온 처음 수에서 10까지 뛰고, 남은 수만큼 한 번 더 뛰어 모두 몇인지 찾아요.',
      teacher: '"버스에 8명이 타고 있다가 6명이 더 탔어요. 8에서 10까지 몇 칸, 거기서 몇 칸을 더 뛰어야 할까요?" 첫 화살표 2칸과 남은 4칸을 말로 이어 보게 한다. 마지막 도착한 수만 쓰고 단위(명)를 빼는 학생에게는 "모두 몇 명이에요?" 하고 문장으로 답하게 한다.',
      levels: NL20,
      items: [
        jump2('버스에 8명이 타고 있어요. 6명이 더 탔어요. 두 번에 뛰어 모두 몇 명인지 찾아요.', 8, 14, 0.16),
        jump2('벌집에 벌이 9마리 있어요. 8마리가 더 날아왔어요. 두 번에 뛰어 모두 몇 마리인지 찾아요.', 9, 17, 0.2),
        jump2('꽃밭에 꽃이 7송이 있어요. 7송이를 더 심었어요. 두 번에 뛰어 모두 몇 송이인지 찾아요.', 7, 14, 0.18,
          { conclude: '7+7은 7에서 10까지 3, 거기서 4를 더 뛰어 14예요.' }),
        jump2('더 해 보기: 책꽂이에 책이 7권 있어요. 9권을 더 꽂았어요. 두 번에 뛰어 모두 몇 권인지 찾아요.', 7, 16, 0.24, { extra: true }),
      ] },
    { id: 'a3', title: '활동 3. 답이 맞는 식 골라내기', minutes: 6, tool: 'mindmap',
      task: '답이 알맞은 식만 바구니에 담아요.',
      teacher: '"답이 13인 식을 골라 봐요. 9+4를 먼저 10을 만들어 풀어 볼까요?" 식마다 10을 만들어 합을 써 보게 한다. 눈으로 보고 큰 수가 있는 식을 담는 학생에게는 "이 식을 풀면 얼마예요?" 하고 되묻는다.',
      levels: CARD_LV,
      items: [
        pickOf('답이 13인 식만 골라 보세요.', '답이 13', ['9+4', '8+4', '7+6', '6+6'], ['9+4', '7+6'], 0.16),
        pickOf('답이 15인 식만 골라 보세요.', '답이 15', ['9+6', '8+7', '7+7', '9+5'], ['9+6', '8+7'], 0.2),
        pickOf('더 해 보기: 답이 17인 식만 골라 보세요.', '답이 17', ['9+8', '8+8', '8+9', '7+9'], ['9+8', '8+9'], 0.24, { extra: true }),
      ] },
  ],
  wrap: ['"이야기를 읽고 식을 쓰고 10을 만들어 답을 구했어요. 어떤 순서로 했나요?" 짝에게 8+6 이야기로 말하게 한다. 출구 2번에서 7+9를 7+7로 쓴 학생은 이야기 속 수를 잘못 옮겨 쓴 것은 아닌지 다음 시간에 먼저 살핀다.', [
    { type: 'choice', prompt: '귤 9개에 5개를 더 땄어요. 알맞은 식에 ○ 하세요.', options: ['9+5', '9−5', '5+5'], answer: 0, difficulty: 0.12, explain: '"더 땄어요"는 늘어나는 이야기라서 9+5로 써요.' },
    { type: 'choice', prompt: '상자에 8개가 있어요. 7개를 더 넣어요. 모두 몇 개일까요?', options: ['14개', '15개', '16개'], answer: 1, difficulty: 0.2, explain: '7을 2와 5로 가르면 8+2=10, 10+5=15예요.' },
    { type: 'tool', tool: 'numberline', options: { mode: 'jump', min: 0, max: 20, step: 1, labels: 'all', fixedFrom: 6 }, prompt: '놀이터에 아이가 6명 있어요. 8명이 더 왔어요. 두 번에 뛰어 모두 몇 명인지 찾아요.', target: { from: 6, end: 14, count: 2 }, difficulty: 0.22 },
  ]],
  ws: { title: '이야기를 읽고 합 구하기', items: [
    { type: 'blank', prompt: '이야기를 읽고 합을 구해서 빈칸에 알맞은 수를 쓰세요.', text: '사탕 9개에 5개를 더 받았어요 → 9+5=___     딸기 8개에 7개를 더 땄어요 → 8+7=___     풍선 7개에 6개를 더 불었어요 → 7+6=___', answer: '14, 15, 13' },
    { type: 'choice', prompt: '버스에 6명이 타고 있었는데 7명이 더 탔어요. 알맞은 식에 ○ 하세요.', options: ['6+7', '7−6', '6+6'], answer: '6+7' },
    { type: 'table', prompt: '식의 합을 쓰세요.', columns: ['식', '9+7', '8+9', '7+7'], cells: [['합', '16', '', '']], answer: '17, 14' },
    { type: 'short', prompt: '8+5=13이 되는 이야기를 하나 지어 써 보세요.' },
  ], easy: { note: '"더 받았어요"처럼 늘어나는 이야기는 더하기예요. 10을 먼저 만들어 더해요.', items: [
    { type: 'blank', prompt: '이야기를 읽고 합을 구해서 빈칸에 알맞은 수를 쓰세요.', text: '귤 9개에 3개를 더 땄어요 → 9+3=___     공 8개에 4개를 더 샀어요 → 8+4=___', answer: '12, 12' },
    { type: 'choice', prompt: '연필 7개에 5개를 더 받았어요. 알맞은 식에 ○ 하세요.', options: ['7+5', '7−5'], answer: '7+5' },
    { type: 'table', prompt: '식의 합을 쓰세요.', columns: ['식', '9+2', '8+3'], cells: [['합', '11', '']], answer: '11' },
    { type: 'draw', prompt: '풍선 8개 옆에 풍선 5개를 그리고 모두 몇 개인지 써 보세요.' },
  ] } },
  diff: { easy: '수직선에 모든 눈금의 수와 도착한 수가 보여요. 카드 판은 카드를 놓으면 바로 맞는지 알려 줘요.', base: '수직선에 모든 눈금의 수가 보이고 도착한 수는 직접 읽어요. 카드 판은 확인을 눌러야 알려 줘요.', challenge: '수직선은 양 끝의 수만 보여요. 카드 판은 확인을 눌러야 맞는지 알려 줘요.' },
  notes: '자주 보이는 어려움: ① 이야기에서 "더 받았어요"를 보고도 빼기를 쓴다 → 늘어나는지 줄어드는지 먼저 말한다. ② 앞의 수만 쓰거나 이야기의 수를 잘못 옮긴다 → 이야기에서 수 두 개에 밑줄을 긋는다. ③ 단위를 빼고 답한다 → "모두 몇 명인지" 문장으로 말한다. 합이 11~18인 식 정리는 10차시에서 이어진다.',
}));
// ───────────────────────────── 10차시 (practice) ─────────────────────────────
L.push(lesson(10, {
  title: '합이 11부터 18까지인 식 풀고 정리하기',
  objective: '합이 11~18인 한 자리 수끼리의 덧셈을 10을 만들어 풀고 합이 맞는 식을 가려낼 수 있다.',
  desc: 'a paper wall chart with rows of colorful number cards eleven through eighteen and a small rabbit pinning cards to the right rows',
  text: '합 11부터 18까지',
  layers: [{ motif: 'hills', y: 208 }, { motif: 'house', x: 100, y: 214 }, { motif: 'tree', x: 380, y: 216, color: 'mint' }, { motif: 'star', x: 330, y: 56, s: 0.5 }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"5+6은 얼마일까요?" 5와 6 가운데 큰 수 6에서 시작해 4를 더해 10을 만들고 1을 더한다고 시연한다. "작은 수 5가 앞에 있을 때는 순서를 바꾸어 6+5로 생각해도 돼요." 어제까지는 9, 8, 7, 6으로 시작했지만 오늘은 앞의 수가 작아도 되는지 묻는다. 5+6을 5에서 하나씩 이어 세다가 틀리는 학생이 있다.', '5+6처럼 앞의 수가 작을 때는 어떻게 할까요?'],
  demo: { tool: 'numberline', options: { mode: 'jump', min: 0, max: 20, step: 1, labels: 'all', showValue: true }, sequence: [{ from: 6, hops: [4, 1], size: 1 }] },
  acts: [
    { id: 'a1', title: '활동 1. 10을 만들어 합 구하기', minutes: 9, tool: 'numberline',
      task: '큰 수에서 시작해 10에 들른 뒤 남은 수만큼 뛰어 합을 구해요.',
      teacher: '"8+4는 8에서 시작해요. 10까지 몇 칸을 뛰고 몇 칸이 남을까요?" 큰 수에서 시작하는 습관을 갖게 한다. 4에서 8칸을 센 학생에게는 순서를 바꾸어 8에서 시작하게 한 뒤 "답이 같지요?" 하고 묻는다.',
      levels: NL20,
      items: [
        jump2('6에서 두 번에 뛰어 보세요. 먼저 10, 그다음 2칸 더 가면 어디일까요?', 6, 12, 0.14),
        jump2('8에서 두 번에 뛰어 보세요. 먼저 10, 그다음 2칸 더 가면 어디일까요?', 8, 12, 0.14),
        jump2('9에서 두 번에 뛰어 보세요. 먼저 10, 그다음 1칸 더 가면 어디일까요?', 9, 11, 0.1,
          { conclude: '9에서 10까지 1칸, 거기서 1칸 더 가면 11이에요. 9+2는 11이에요.' }),
        jump2('더 해 보기: 7에서 두 번에 뛰어 보세요. 먼저 10, 그다음 1칸 더 가면 어디일까요?', 7, 11, 0.18, { extra: true }),
      ] },
    { id: 'a2', title: '활동 2. 식과 답 이어 주기', minutes: 11, tool: 'mindmap',
      task: '왼쪽 덧셈식과 알맞은 답 카드를 이어 줘요.',
      teacher: '"5+6은 얼마일까요? 6에서 시작해 4를 더하면 10, 1이 남아요." 풀이 방법을 말하면서 카드를 놓게 한다. 답 카드가 11부터 18까지 비슷해 보여 아무 카드나 놓는 학생에게는 "이 식을 먼저 풀어 보고 놓을까요?" 하고 되묻는다.',
      levels: CARD_LV,
      items: [
        match('식과 알맞은 답을 이어 보세요.', '식과 답', ['5+6', '6+9', '8+8'], ['11', '15', '16'], 0.16),
        match('이번에도 식과 알맞은 답을 이어 보세요.', '식과 답', ['7+8', '9+9', '6+8'], ['15', '18', '14'], 0.2),
        match('더 해 보기: 식과 알맞은 답을 이어 보세요.', '식과 답', ['4+9', '7+9'], ['13', '16'], 0.24, { extra: true }),
      ] },
    { id: 'a3', title: '활동 3. 합의 크기로 식 골라내기', minutes: 6, tool: 'mindmap',
      task: '식을 풀어 보고 조건에 맞는 식만 바구니에 담아요.',
      teacher: '"합이 12보다 큰 식을 골라 봐요. 9+4는 몇이라서 12보다 클까요?" 12와 비교하려면 먼저 합을 구해야 한다고 말해 준다. 수가 큰 식을 합도 크다고 단정하는 학생에게는 "9+2와 7+6 중 어느 쪽이 클까요?" 하고 되묻는다.',
      levels: CARD_LV,
      items: [
        pickOf('합이 12보다 큰 식만 골라 보세요.', '12보다 커요', ['9+2', '9+4', '7+6', '8+3'], ['9+4', '7+6'], 0.18),
        pickOf('합이 15보다 작은 식만 골라 보세요.', '15보다 작아요', ['6+8', '9+7', '7+7', '8+8'], ['6+8', '7+7'], 0.22),
        pickOf('더 해 보기: 합이 같은 두 식만 골라 보세요.', '합이 같아요', ['9+7', '8+8', '9+8', '7+6'], ['9+7', '8+8'], 0.26, { extra: true }),
      ] },
  ],
  wrap: ['"합이 11~18인 식도 10을 만들면 쉽게 풀 수 있어요. 가장 먼저 무엇을 하나요?" 짝에게 7+4를 풀어 보게 한다. 출구 1번에서 10을 고른 학생은 합이 10을 넘는다는 것을 놓쳤는지 다음 시간에 먼저 살핀다.', [
    { type: 'choice', prompt: '7+4의 답은 얼마인가요?', options: ['10', '11', '12'], answer: 1, difficulty: 0.15, explain: '7에 3을 더하면 10이고 1이 남아요. 10+1=11이에요.' },
    { type: 'choice', prompt: '6+9와 합이 같은 식에 ○ 하세요.', options: ['7+8', '7+7', '8+8'], answer: 0, difficulty: 0.22, explain: '6+9와 7+8은 모두 15예요.' },
    { type: 'tool', tool: 'numberline', options: { mode: 'jump', min: 0, max: 20, step: 1, labels: 'all', fixedFrom: 8 }, prompt: '서로 다른 두 가지 빵을 8개와 7개 샀어요. 두 번에 뛰어 모두 몇 개인지 찾아요.', target: { from: 8, end: 15, count: 2 }, difficulty: 0.22 },
  ]],
  ws: { title: '합이 11부터 18까지', items: [
    { type: 'blank', prompt: '합을 구해서 빈칸에 알맞은 수를 쓰세요.', text: '5+6=___     6+8=___     9+9=___     7+8=___', answer: '11, 14, 18, 15' },
    { type: 'table', prompt: '식의 합을 쓰세요.', columns: ['식', '7+4', '8+7', '6+9'], cells: [['합', '11', '', '']], answer: '15, 15' },
    { type: 'choice', prompt: '합이 13인 식에 ○ 하세요.', options: ['9+5', '8+5', '7+7'], answer: '8+5' },
    { type: 'short', prompt: '합이 15가 되는 식을 두 개 써 보세요.' },
  ], easy: { note: '큰 수에서 시작해요. 10까지 몇이 모자란지 보고 남은 수를 더해요.', items: [
    { type: 'blank', prompt: '합을 구해서 빈칸에 알맞은 수를 쓰세요.', text: '8+3=___     9+4=___', answer: '11, 13' },
    { type: 'table', prompt: '식의 합을 쓰세요.', columns: ['식', '6+5', '7+6'], cells: [['합', '11', '']], answer: '13' },
    { type: 'choice', prompt: '합이 12인 식에 ○ 하세요.', options: ['8+4', '8+5'], answer: '8+4' },
    { type: 'draw', prompt: '사과 7개와 6개를 그리고 모두 몇 개인지 써 보세요.' },
  ] } },
  diff: { easy: '수직선에 모든 눈금의 수와 도착한 수가 보여요. 카드 판은 카드를 놓으면 바로 맞는지 알려 줘요.', base: '수직선에 모든 눈금의 수가 보이고 도착한 수는 직접 읽어요. 카드 판은 확인을 눌러야 알려 줘요.', challenge: '수직선은 양 끝의 수만 보여요. 카드 판은 확인을 눌러야 맞는지 알려 줘요.' },
  notes: '자주 보이는 어려움: ① 앞의 수가 작아도 앞의 수에서 시작해 이어 센다 → 큰 수에서 시작하도록 순서를 바꾼다. ② 10을 만들고 남은 수를 잘못 센다(9+2에서 10+2) → 쓴 수를 뺀 나머지를 더한다. ③ 수가 큰 식을 합도 크다고 단정한다 → 합을 구한 뒤 비교한다. 이야기 속 모르는 수 찾기는 11차시에서 다룬다.',
}));
// ───────────────────────────── 11차시 (extend) ─────────────────────────────
L.push(lesson(11, {
  title: '10개에서 먹고 남은 이야기로 먹은 수 찾기',
  objective: '10개에서 일부를 덜어 내고 남은 수를 알 때 덜어 낸 수를 찾고, 10−□ 이야기를 식으로 나타낼 수 있다.',
  desc: 'a little deer looking at a plate that had ten cookies and now has only a few left, with crumbs and a happy bear nearby',
  text: '10개에서 몇 개 먹었을까?',
  layers: [{ motif: 'house', x: 120, y: 214 }, { motif: 'flower', x: 330, y: 238 }, { motif: 'star', x: 320, y: 56, s: 0.5 }, { motif: 'tree', x: 390, y: 216 }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"쿠키가 10개 있었는데 지금은 6개가 남았어요. 몇 개를 먹었을까요?" 가득 찬 판에서 6개가 남을 때까지 사과를 빼 보며 비운 칸 수를 센다. "남은 것이 6이니까 10까지 4칸이 비어 있어요." 남은 수 6을 먹은 수로 답하는 학생이 있다 — 비어 있는 칸이 먹은 수라고 짚는다.', '10개에서 6개가 남았다면 몇 개를 먹었을까요?'],
  demo: { tool: 'tenframe', options: { item: 'apple', showWord: true }, sequence: [{ count: 10 }, { count: 6 }] },
  acts: [
    { id: 'a1', title: '활동 1. 남은 수를 보고 먹은 수 찾기', minutes: 9, tool: 'tenframe',
      task: '남은 사과가 몇 개인지 보고 10칸에서 비어 있는 칸이 몇 칸인지 세어 먹은 수를 알아봐요.',
      teacher: '"10개 가운데 몇 개를 먹었더니 7개가 남았어요. 먹은 것은 몇 개일까요?" 남은 사과를 먼저 놓고 빈칸을 세게 한다. 남은 수를 그대로 답하는 학생에게는 "10개를 처음에 다 채웠으니 빈 칸이 먹은 수예요" 하고 칸을 짚어 준다.',
      levels: TW('apple'),
      items: [
        apart('귤 10개 가운데 몇 개를 먹었더니 7개가 남았어요. 먹은 귤은 몇 개일까요?', 10, 7, 0.14),
        apart('사탕 10개 가운데 몇 개를 나눠 줬더니 2개가 남았어요. 나눠 준 사탕은 몇 개일까요?', 10, 2, 0.18,
          { predict: { q: '2개만 남았다면 나눠 준 사탕은 2개보다 많을까요?', options: ['많아요', '2개예요', '적어요'], answer: 0 }, conclude: '2에서 10까지 8칸이 비어 있어요. 8개를 나눠 줬어요.' }),
        apart('구슬 10개 가운데 몇 개를 잃어버렸더니 4개가 남았어요. 잃어버린 구슬은 몇 개일까요?', 10, 4, 0.16),
        apart('더 해 보기: 풍선 10개 가운데 몇 개가 터졌더니 9개가 남았어요. 터진 풍선은 몇 개일까요?', 10, 9, 0.2, { extra: true }),
      ] },
    { id: 'a2', title: '활동 2. 10에서 뒤로 뛰어 몇 칸인지 찾기', minutes: 11, tool: 'numberline',
      task: '10에서 뒤로 뛰어 도착한 수를 보고, 몇 칸을 뛰었는지 알아봐요.',
      teacher: '"10에서 뒤로 뛰었더니 5에 닿았어요. 몇 칸을 뛰었을까요?" 10에서 도착한 수까지 화살표를 그리고 칸을 세어 보게 한다. 도착한 수 5를 뛴 칸 수로 답하는 학생에게는 "출발이 어디였지요?" 하고 되묻는다.',
      levels: NL,
      items: [
        jump('10에서 뒤로 뛰었더니 5에 닿았어요. 5까지 뒤로 뛰어 보세요. 몇 칸을 뛰나요?', 10, 5, 0.14),
        jump('10에서 뒤로 뛰었더니 2에 닿았어요. 2까지 뒤로 뛰어 보세요. 몇 칸을 뛰나요?', 10, 2, 0.18),
        jump('10에서 뒤로 뛰었더니 7에 닿았어요. 7까지 뒤로 뛰어 보세요. 몇 칸을 뛰나요?', 10, 7, 0.1,
          { conclude: '10에서 7까지 세 칸이에요. 10−3=7예요.' }),
        jump('더 해 보기: 10에서 뒤로 뛰었더니 4에 닿았어요. 4까지 뒤로 뛰어 보세요. 몇 칸을 뛰나요?', 10, 4, 0.2, { extra: true }),
      ] },
    { id: 'a3', title: '활동 3. 이야기와 뺄셈식 이어 주기', minutes: 6, tool: 'mindmap',
      task: '10개에서 덜어 내는 이야기를 읽고 알맞은 뺄셈식을 이어 줘요.',
      teacher: '"귤 10개 가운데 3개를 먹었어요. 식은 어떻게 쓸까요?" 처음 수 10 뒤에 덜어 낸 수를 쓴다고 알려 준다. 10−7을 10+7로 이은 학생에게는 "먹으면 많아질까요, 적어질까요?" 하고 되묻는다.',
      levels: CARD_LV,
      items: [
        match('이야기에 알맞은 뺄셈식을 이어 보세요.', '이야기와 뺄셈식', ['귤 10개 가운데 3개를 먹었어요.', '풍선 10개 가운데 6개가 터졌어요.', '쿠키 10개 가운데 1개를 나눠 줬어요.'], ['10-3', '10-6', '10-1'], 0.14),
        match('이번에도 알맞은 뺄셈식을 이어 보세요.', '이야기와 뺄셈식', ['구슬 10개 가운데 5개를 잃었어요.', '빵 10개 가운데 8개를 먹었어요.', '카드 10장 가운데 4장을 줬어요.'], ['10-5', '10-8', '10-4'], 0.18),
        match('더 해 보기: 알맞은 뺄셈식을 이어 보세요.', '이야기와 뺄셈식', ['사탕 10개 가운데 7개를 먹었어요.', '공 10개 가운데 2개가 굴러갔어요.'], ['10-7', '10-2'], 0.22, { extra: true }),
      ] },
  ],
  wrap: ['"10개에서 먹고 남은 수를 알면 먹은 수도 알 수 있어요. 어떻게 알았나요?" 짝에게 10칸 판을 그려 설명하게 한다. 출구 1번에서 4를 고른 학생은 남은 수를 덜어 낸 수로 답했는지 다음 시간에 먼저 살핀다.', [
    { type: 'choice', prompt: '10에서 몇을 빼면 4가 남을까요?', options: ['5', '6', '7'], answer: 1, difficulty: 0.2, explain: '10에서 4가 남으려면 6을 덜어 내야 해요. 10−6=4예요.' },
    { type: 'tool', tool: 'tenframe', options: { item: 'chip', color: 'mint', showCount: false, askNumber: true, target: { count: 10, less: 9 } }, state: { count: 10 }, prompt: '칩이 10개 있어요. 9개를 덜어 내요. 몇 개 남았나요?', target: { count: 10, less: 9 }, difficulty: 0.2 },
    { type: 'choice', prompt: '쿠키 10개 가운데 4개를 먹었어요. 알맞은 식에 ○ 하세요.', options: ['10+4', '10−4', '4−10'], answer: 1, difficulty: 0.12, explain: '먹어서 줄어드는 이야기는 10−4로 써요.' },
  ]],
  ws: { title: '10에서 덜어 내기', items: [
    { type: 'figure', prompt: '먹은 만큼 ✕ 를 그리고, 남은 수를 쓰세요.', tool: 'tenframe', options: { item: 'apple' }, figures: [{ state: { count: 10 }, caption: '4개 먹음 → ' + BLANK }, { state: { count: 10 }, caption: '7개 먹음 → ' + BLANK }, { state: { count: 10 }, caption: '9개 먹음 → ' + BLANK }], answer: '6, 3, 1' },
    { type: 'blank', prompt: '10에서 빼서 빈칸에 알맞은 수를 쓰세요.', text: '10−4=___     10−7=___     10−9=___', answer: '6, 3, 1' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '10−___=3     10−___=8     10−___=5', answer: '7, 2, 5' },
    { type: 'short', prompt: '10−6=4가 되는 이야기를 하나 지어 써 보세요.' },
  ], easy: { note: '남은 수를 알면 빈칸이 먹은 수예요. 10칸에서 빈 칸을 세어요.', items: [
    { type: 'figure', prompt: '먹은 만큼 ✕ 를 그리고, 남은 수를 쓰세요.', tool: 'tenframe', options: { item: 'apple' }, figures: [{ state: { count: 10 }, caption: '2개 먹음 → ' + BLANK }, { state: { count: 10 }, caption: '5개 먹음 → ' + BLANK }], answer: '8, 5' },
    { type: 'blank', prompt: '10에서 빼서 빈칸에 알맞은 수를 쓰세요.', text: '10−2=___     10−6=___', answer: '8, 4' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '10−___=9     10−___=6', answer: '1, 4' },
    { type: 'draw', prompt: '사과 10개를 그리고, 몇 개에 ✕ 를 하면 7개가 남는지 해 보세요.' },
  ] } },
  diff: { easy: '칸 번호가 보이고 판 위에 "10 → 7과 ?" 같은 목표가 나와요. 수직선에는 도착한 수가 보여요.', base: '수 카드가 가려져 있어요. 다 놓은 뒤 먹은 수를 직접 골라요.', challenge: '사과가 흩어진 칸에 들어가 5칸 묶음으로 셀 수 없어요. 수직선은 양 끝의 수만 보여요.' },
  notes: '자주 보이는 어려움: ① 남은 수를 먹은 수로 답한다 → 10칸에서 비어 있는 칸이 먹은 수라고 짚는다. ② 뒤로 뛴 칸 수 대신 도착한 수를 말한다 → 출발 10에서 도착까지 칸을 센다. ③ 줄어드는 이야기를 더하기로 쓴다 → 늘어나는지 줄어드는지 먼저 말한다. 단원 정리는 12차시에서 한다.',
}));
// ───────────────────────────── 12차시 (wrap) ─────────────────────────────
L.push(lesson(12, {
  title: '10 만들기와 10에서 빼기 단원 정리하기',
  objective: '10이 되는 짝, 10에서 빼기, 10을 만들어 더하기를 한 번에 묶어 풀고 내 방법을 설명할 수 있다.',
  desc: 'a paper treasure chest with number cards inside and the animal friends of the unit gathering around to sort the cards into three piles',
  text: '10을 이용해 풀어요',
  layers: [{ motif: 'hills', y: 208 }, { motif: 'house', x: 110, y: 214 }, { motif: 'tree', x: 380, y: 216, color: 'mint' }, { motif: 'star', x: 90, y: 56, s: 0.5 }, { motif: 'star', x: 340, y: 50, s: 0.5 }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"이 단원에서 10으로 무엇을 했는지 떠올려 봐요. 10이 되는 짝, 10에서 빼기, 10을 만들어 더하기가 있었지요." 시연 단추로 6과 4가 모여 10이 되고 거기서 다시 4가 빠지는 모습을 보여 준다. 오늘은 세 가지 풀이를 한 번에 묶어 본다. 어느 풀이를 써야 할지 헷갈리는 학생은 식에 + 와 − 가 있는지 먼저 보게 한다.', '10으로 어떤 일을 할 수 있었는지 말해 볼까요?'],
  demo: { tool: 'tenframe', options: { twoColor: true, item: 'apple', showWord: true }, sequence: [{ parts: [6, 0] }, { parts: [6, 4] }] },
  acts: [
    { id: 'a1', title: '활동 1. 두 가지 칩으로 10 만들기 점검', minutes: 8, tool: 'tenframe',
      task: '두 가지 칩을 모아 놓고 모두 몇 개가 되는지 수를 골라요.',
      teacher: '"하늘색 칩 8개와 주황색 칩 2개를 모으면 몇 개일까요?" 판이 가득 차는 것을 보고 10이라고 말하게 한다. 한 가지 색만 세어 답하는 학생에게는 "두 가지 칩을 모두 합해서 몇 개예요?" 하고 되묻는다.',
      levels: TW('chip'),
      items: [
        total('하늘색 칩 8개와 주황색 칩 2개를 모두 모으면 몇 개일까요?', 8, 2, 0.1),
        total('하늘색 칩 9개와 주황색 칩 1개를 모두 모으면 몇 개일까요?', 9, 1, 0.08),
        total('하늘색 칩 4개와 주황색 칩 6개를 모두 모으면 몇 개일까요?', 4, 6, 0.12,
          { conclude: '8과 2, 9와 1, 4와 6을 모으면 모두 10이에요. 10이 되는 짝을 알면 풀이가 쉬워요.' }),
        total('더 해 보기: 하늘색 칩 3개와 주황색 칩 7개를 모두 모으면 몇 개일까요?', 3, 7, 0.14, { extra: true }),
      ] },
    { id: 'a2', title: '활동 2. 수직선에서 10에 들러 합 구하기', minutes: 11, tool: 'numberline',
      task: '처음 수에서 10까지 한 번 뛰고, 남은 수만큼 한 번 더 뛰어 이야기의 답을 찾아요.',
      teacher: '"참새 9마리에 6마리가 더 날아왔어요. 모두 몇 마리일까요?" 먼저 식(9+6)을 쓰고 10을 만들어 풀게 한다. 뛰는 칸 수와 도착한 수를 헷갈리는 학생에게는 "도착한 수가 모두의 수예요" 하고 짚는다.',
      levels: NL20,
      items: [
        jump2('참새 9마리가 앉아 있어요. 6마리가 더 날아왔어요. 두 번에 뛰어 모두 몇 마리인지 찾아요.', 9, 15, 0.18),
        jump2('운동장에 아이 8명이 있어요. 9명이 더 왔어요. 두 번에 뛰어 모두 몇 명인지 찾아요.', 8, 17, 0.22),
        jump2('동화책 7권을 읽었어요. 5권을 더 읽었어요. 두 번에 뛰어 모두 몇 권인지 찾아요.', 7, 12, 0.18,
          { conclude: '7에서 10까지 3, 거기서 2를 더 뛰어 12예요. 7+5는 12예요.' }),
        jump2('더 해 보기: 종이꽃 6개를 만들었어요. 8개를 더 만들었어요. 두 번에 뛰어 모두 몇 개인지 찾아요.', 6, 14, 0.24, { extra: true }),
      ] },
    { id: 'a3', title: '활동 3. 세 가지 풀이로 식 나누기', minutes: 7, tool: 'mindmap',
      task: '식 카드를 읽고 "합이 10이에요", "합이 10보다 커요", "10에서 빼요" 세 곳으로 나누어 놓아요.',
      teacher: '"6+4는 합이 10이에요. 9+5는요? 10−2는 어디에 놓을까요?" +와 −를 먼저 보고, 합이 10인지 10보다 큰지는 풀어서 확인하게 한다. 10−2를 합이 10보다 큰 곳에 놓은 학생에게는 "10에서 빼면 커질까요, 작아질까요?" 하고 되묻는다.',
      levels: CARD_LV,
      items: [
        sortTo('식 카드를 세 곳으로 나누어 보세요.', '어떤 식일까?', ['합이 10이에요', '합이 10보다 커요', '10에서 빼요'], [['6+4', '3+7'], ['9+5', '8+6'], ['10-2', '10-7']], 0.18),
        sortTo('이번에도 세 곳으로 나누어 보세요.', '어떤 식일까?', ['합이 10이에요', '합이 10보다 커요', '10에서 빼요'], [['2+8', '5+5'], ['7+7', '9+3'], ['10-4', '10-9']], 0.22),
        sortTo('더 해 보기: 식 카드를 세 곳으로 나누어 보세요.', '어떤 식일까?', ['합이 10이에요', '합이 10보다 커요', '10에서 빼요'], [['1+9', '4+6'], ['6+9', '8+8'], ['10-5', '10-1']], 0.26, { extra: true }),
      ] },
  ],
  wrap: ['"이 단원에서 가장 도움이 된 풀이는 무엇이고 왜 그런가요?" 짝에게 한 가지 풀이를 골라 말하게 한다. 출구 2번에서 8+7을 14로 쓴 학생은 7에서 2를 떼고 남은 수 5를 10에 더하지 못했는지 다음 단원에서 먼저 살핀다.', [
    { type: 'choice', prompt: '두 수를 모으면 10이 되는 짝에 ○ 하세요.', options: ['7과 2', '7과 3', '7과 4'], answer: 1, difficulty: 0.1, explain: '7에서 8, 9, 10 — 3칸을 더하면 10이 되어 7과 3이 짝이에요.' },
    { type: 'choice', prompt: '8+7의 답은 얼마인가요?', options: ['14', '15', '16'], answer: 1, difficulty: 0.22, explain: '7을 2와 5로 가르면 8+2=10, 10+5=15예요.' },
    { type: 'tool', tool: 'tenframe', options: { twoColor: true, item: 'apple', showCount: false, askNumber: true, target: { total: 7, parts: [1, null], ask: 'b' } }, prompt: '9+7에서 7을 1과 몇으로 가를까요? 하늘색 1개와 주황색 몇 개가 7개가 되나요?', target: { total: 7, parts: [1, null], ask: 'b' }, difficulty: 0.22 },
  ]],
  ws: { title: '10을 이용한 덧셈과 뺄셈 정리', items: [
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '6+___=10     10−3=___     9+4=___     8+6=___', answer: '4, 7, 13, 14' },
    { type: 'table', prompt: '10을 만들어 식의 답을 쓰세요.', columns: ['식', '9+3', '8+5', '7+6', '6+7'], cells: [['답', '12', '', '', '']], answer: '13, 13, 13' },
    { type: 'choice', prompt: '10에서 빼는 이야기에 ○ 하세요.', options: ['귤 10개 가운데 4개를 먹었어요.', '귤 10개에 4개를 더 땄어요.'], answer: '귤 10개 가운데 4개를 먹었어요.' },
    { type: 'short', prompt: '이 단원에서 배운 것 가운데 가장 쉬웠던 방법과 그 까닭을 써 보세요.' },
  ], easy: { note: '10이 되는 짝과 10에서 빼기를 먼저 떠올려요.', items: [
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '7+___=10     10−4=___     9+3=___', answer: '3, 6, 12' },
    { type: 'table', prompt: '10을 만들어 식의 답을 쓰세요.', columns: ['식', '9+2', '8+4'], cells: [['답', '11', '']], answer: '12' },
    { type: 'choice', prompt: '합이 10인 식에 ○ 하세요.', options: ['5+5', '5+6'], answer: '5+5' },
    { type: 'draw', prompt: '10이 되는 짝을 사과로 그려 보세요.' },
  ] } },
  diff: { easy: '칸 번호가 보이고 판 위에 "8과 2 → ?" 같은 목표가 나와요. 수직선에는 도착한 수가 보여요.', base: '수 카드가 가려져 있어요. 다 놓은 뒤 모두 몇 개인지 직접 골라요.', challenge: '칩이 흩어진 칸에 들어가 5칸 묶음으로 셀 수 없어요. 수직선은 양 끝의 수만 보여요.' },
  notes: '자주 보이는 어려움: ① 어느 풀이를 쓸지 정하지 못한다 → +인지 −인지 먼저 보고, 10을 넘는지 확인한다. ② 합이 10을 넘는 식에서 10에 들르지 않고 하나씩 센다 → 10에서 쉬고 남은 수를 한 번에 센다. ③ 10에서 빼기를 합이 큰 곳에 놓는다 → 빼면 줄어든다고 확인한다. 이후 두 자리 수의 덧셈과 뺄셈(2학년)에서 이어진다.',
}));
PaperLessons.registerUnit({
  id: UID, schema: 'edu-unit.v1', catalogUnit: CU,
  grade: 1, subject: '수학', unitTitle: UT,
  flow: '1~4차시에서는 십칸 판으로 10이 되는 짝(7과 3, 6과 4)을 모으고, 10에서 먹은 만큼 빼 남은 수를 거꾸로 세며, 덧셈식과 뺄셈식이 한 판의 두 모습임을 잇습니다. 5~8차시에서는 이 짝을 이용해 합이 10을 넘는 덧셈을 풉니다. 더하는 수를 가르기 하여 먼저 10을 만들고 남은 수를 더하며, 9·8·7·6에서 모자란 수가 1·2·3·4임을 알고 수직선에서 10에 한 번 들르는 두 번 뛰기로 확인합니다. 9~12차시에서는 이야기에서 식을 세우고 합이 11~18인 식을 풀고 가려내며, 10에서 먹고 남은 수로 먹은 수를 찾고, 마지막에 세 풀이를 한 번에 묶어 설명합니다. 십칸 판은 합 10까지만 놓을 수 있어 합이 10을 넘는 식은 수직선과 가르기 판으로 다룹니다.',
  refs: {},
  lessons: L,
});
})();
