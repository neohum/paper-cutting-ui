/* 1학년 1학기 3. 덧셈과 뺄셈 — 단원 파일(차시 12개 가운데 2차시는 기존 차시 g1-math-compose).
 * 흐름: 늘어나는 이야기와 더하기(1) → 모으기·가르기(2, 기존) → 줄어드는 이야기와 빼기(3) → 덧셈식 쓰고 읽기(4) → 뺄셈식 쓰고 읽기(5)
 *      → 덧셈 이야기 풀기(6) → 뺄셈 이야기 풀기(7) → 더할지 뺄지 가리기(8) → 더하는 순서를 바꾸어도 같은 합(9)
 *      → 0을 더하고 빼기·같은 수 빼기(10) → 덧셈식과 뺄셈식의 사이(11) → 식으로 이야기 짓기·단원 정리(12).
 * 확인 필요: units-index 의 9~12차시 주제는 [2수01-06](두 자리 수 덧셈·뺄셈 셈법)이지만, 1학년 1학기 단원이라 수는 9까지·한 자리끼리만 다룬다.
 *            그래서 성취기준은 [2수01-05]만 단다(두 자리 수는 2학년에서 이어짐).
 */
(function () {
const UID = 'g1-math-1-03', CU = 'g1-수학-1학기-3', UT = '3. 덧셈과 뺄셈', STD = ['[2수01-05]'];
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
// 교구 단계 묶음 — 더 놓기·덜기(count 에 more/less) / 두 색 모으기·가르기(twoColor) / 수직선 뛰기 / 카드 판
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
const CARD_LV = { easy: { live: true, instant: true }, base: {}, challenge: {} };
const more = (prompt, c, m, d) => ({ prompt, state: { count: c }, target: { count: c, more: m }, difficulty: d });
const less = (prompt, c, m, d) => ({ prompt, state: { count: c }, target: { count: c, less: m }, difficulty: d });
const jump = (prompt, from, end, d, extra) => Object.assign({ prompt, toolOptions: { fixedFrom: from }, target: { from, end }, difficulty: d }, extra || {});
const total = (prompt, a, b, d, extra) => Object.assign({ prompt, target: { parts: [a, b], ask: 'total' }, difficulty: d }, extra || {});
const apart = (prompt, t, a, d, extra) => Object.assign({ prompt, target: { total: t, parts: [a, null], ask: 'b' }, difficulty: d }, extra || {});
const pair = (id, title, minutes, task, teacher, prompts, tool, levels) => ({ id, title, minutes, tool, pair: true, task, teacher, levels, items: prompts.map((prompt) => ({ prompt, free: true, difficulty: 0 })) });
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
  title: '바구니에 사과가 더 들어오면 모두 몇 개일까',
  objective: '이미 있는 것에 더 들어오는 이야기를 이어 세어 모두 몇 개인지 말하고 "더하기"라고 읽을 수 있다.',
  desc: 'a little rabbit putting more red apples into a basket that already has some apples, an apple tree behind',
  text: '더 넣으면 몇 개?',
  layers: [{ motif: 'tree', x: 110, y: 214, s: 1.2 }, { motif: 'apple', x: 92, y: 180, s: 0.42 }, { motif: 'apple', x: 122, y: 170, s: 0.42 }, { motif: 'apple', x: 330, y: 232, s: 0.4 }, { motif: 'apple', x: 352, y: 232, s: 0.4 }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"바구니에 사과가 3개 있어요. 사과 2개가 더 들어와요. 이제 모두 몇 개일까요?" 시연 단추로 사과 3개가 놓인 판에 2개가 더 들어가는 모습을 보여 준다. "3에서 4, 5 하고 이어 세면 돼요. 이것을 더하기라고 해요." 처음부터 다시 1, 2, 3… 세는 학생이 많다 — 앞의 수에서 이어 세도 된다고 알려 준다.', '사과가 더 들어오면 모두 몇 개가 될까요?'],
  demo: { tool: 'tenframe', options: { item: 'apple', showWord: true }, sequence: [{ count: 3 }, { count: 5 }] },
  acts: [
    { id: 'a1', title: '활동 1. 사과를 더 놓고 모두 세기', minutes: 9, tool: 'tenframe',
      task: '있던 사과 옆에 더 들어온 사과를 놓아요. 앞의 수에서 이어 세어 모두 몇 개인지 알아봐요.',
      teacher: '"처음에 몇 개 있었지요? 거기에서 이어 세어 봐요." 있던 사과를 다시 1부터 세는 학생에게 손가락으로 "3 다음에 4, 5" 하고 이어 세게 한다. 더 들어온 수만 답하는 학생(2개가 더 들어와서 2)에게는 "바구니에 있는 사과는 모두 몇 개예요?" 하고 되묻는다.',
      levels: ONE('apple'),
      items: [
        more('바구니에 사과가 2개 있어요. 1개가 더 들어와요. 모두 몇 개인가요?', 2, 1, 0.05),
        more('사과가 3개 있어요. 2개가 더 들어와요. 모두 몇 개인가요?', 3, 2, 0.1,
          { predict: { q: '3개에 2개가 더 들어오면 3개보다 많아질까요?', options: ['많아져요', '적어져요', '그대로예요'], answer: 0 }, conclude: '3에서 4, 5 하고 이어 세면 모두 5개예요. 더하면 처음보다 많아져요.' }),
        more('사과가 5개 있어요. 3개가 더 들어와요. 모두 몇 개인가요?', 5, 3, 0.18),
        more('더 해 보기: 사과가 4개 있어요. 4개가 더 들어와요. 모두 몇 개인가요?', 4, 4, 0.25, { extra: true }),
      ] },
    { id: 'a2', title: '활동 2. 수직선에서 앞으로 뛰기', minutes: 11, tool: 'numberline',
      task: '수직선에서 처음 수에 서요. 더 들어온 수만큼 앞으로 한 칸씩 뛰어 몇에 닿는지 봐요.',
      teacher: '"3에 서서 2칸 앞으로 뛰어요. 어디에 닿았나요?" 출발한 자리를 1로 세는 학생이 많다 — 서 있는 자리는 세지 않고, 뛰는 칸부터 하나, 둘 하고 센다고 짚는다. 뒤로 뛰기 단추는 오늘 쓰지 않는다고 미리 말해 준다.',
      levels: NL,
      items: [
        jump('3에서 2칸 앞으로 뛰어 보세요. 어디에 닿나요?', 3, 5, 0.08),
        jump('4에서 3칸 앞으로 뛰어 보세요. 어디에 닿나요?', 4, 7, 0.12),
        jump('6에서 2칸 앞으로 뛰어 보세요. 어디에 닿나요?', 6, 8, 0.15,
          { conclude: '6에서 두 칸을 뛰면 8이에요. 사과를 2개 더 놓은 것과 같아요.' }),
        jump('더 해 보기: 1에서 5칸 앞으로 뛰어 보세요. 어디에 닿나요?', 1, 6, 0.2, { extra: true }),
      ] },
    { id: 'a3', title: '활동 3. 더 많아지는 이야기 골라내기', minutes: 6, tool: 'mindmap',
      task: '사과가 더 들어와서 모두의 수가 많아지는 이야기만 바구니에 담아요.',
      teacher: '"더 와서 많아지는 이야기는 어느 것일까요?" 먹거나 가져가서 줄어드는 이야기를 담은 학생에게는 "처음보다 많아졌나요, 적어졌나요?" 하고 되묻는다. 줄어드는 이야기는 다음 시간에 배운다고 알려 준다.',
      levels: CARD_LV,
      items: [
        pickOf('더 많아지는 이야기 카드만 골라 보세요.', '더 많아져요', ['새 3마리에 2마리가 더 왔어요.', '사탕 5개 가운데 1개를 먹었어요.', '컵 4개에 1개를 더 놓았어요.', '공 6개 가운데 2개가 굴러갔어요.'], ['새 3마리에 2마리가 더 왔어요.', '컵 4개에 1개를 더 놓았어요.'], 0.1),
        pickOf('이번에도 더 많아지는 이야기만 골라 보세요.', '더 많아져요', ['연필 2자루에 3자루를 더 샀어요.', '귤 7개 가운데 3개를 나눠 줬어요.', '꽃 1송이에 4송이를 더 심었어요.'], ['연필 2자루에 3자루를 더 샀어요.', '꽃 1송이에 4송이를 더 심었어요.'], 0.15),
        pickOf('더 해 보기: 더 많아지는 이야기를 골라 보세요.', '더 많아져요', ['풍선 4개에 2개를 더 불었어요.', '빵 8개 가운데 2개를 먹었어요.', '블록 3개에 3개를 더 올렸어요.', '구슬 9개 가운데 4개를 잃어버렸어요.'], ['풍선 4개에 2개를 더 불었어요.', '블록 3개에 3개를 더 올렸어요.'], 0.2, { extra: true }),
      ] },
  ],
  wrap: ['"사과가 더 들어오면 수가 어떻게 되나요?" 짝에게 "3개에 2개를 더하면 5개"라고 말하게 한다. 출구 2번을 틀린 학생은 더한 수만 답하거나 처음 수를 다시 세는지 다음 시간에 먼저 살핀다.', [
    { type: 'choice', prompt: '사과가 4개 있어요. 2개가 더 들어오면 모두 몇 개인가요?', options: ['5개', '6개', '7개'], answer: 1, difficulty: 0.12, explain: '4에서 5, 6 하고 이어 세면 모두 6개예요.' },
    { type: 'tool', tool: 'tenframe', options: { item: 'chip', color: 'mint', showCount: false, askNumber: true, target: { count: 6, more: 2 } }, state: { count: 6 }, prompt: '칩이 6개 있어요. 2개가 더 들어와요. 모두 몇 개인가요?', target: { count: 6, more: 2 }, difficulty: 0.2 },
    { type: 'choice', prompt: '더 많아지는 이야기에 ○ 하세요.', options: ['귤 5개에 2개를 더 땄어요.', '귤 5개 가운데 2개를 먹었어요.'], answer: 0, difficulty: 0.08, explain: '"더 땄어요"는 늘어나는 이야기예요. 먹으면 줄어요.' },
  ]],
  ws: { title: '사과가 더 들어오면', items: [
    { type: 'figure', prompt: '사과를 세어 쓰고, 더 들어온 사과를 ○ 로 그린 뒤 모두 몇 개인지 쓰세요.', tool: 'tenframe', options: { item: 'apple' }, figures: [{ state: { count: 3 }, caption: '3개에 1개 더 → ' + BLANK }, { state: { count: 4 }, caption: '4개에 2개 더 → ' + BLANK }, { state: { count: 5 }, caption: '5개에 3개 더 → ' + BLANK }], answer: '4, 6, 8' },
    { type: 'blank', prompt: '이어 세어 빈칸에 알맞은 수를 쓰세요.', text: '2에서 3칸 앞으로 → ___     6에서 2칸 앞으로 → ___     7에서 1칸 앞으로 → ___', answer: '5, 8, 8' },
    { type: 'choice', prompt: '더 들어와서 모두 7개가 되는 이야기에 ○ 하세요.', options: ['5개에 2개를 더', '5개에 1개를 더', '5개에서 2개를 덜어'], answer: '5개에 2개를 더' },
    { type: 'short', prompt: '내 이야기를 하나 지어 보세요. "( ) 개에 ( ) 개가 더 들어와서 모두 ( ) 개예요."' },
  ], easy: { note: '있던 수에서 이어 세요. 3 다음에는 4, 5 하고 세요.', items: [
    { type: 'figure', prompt: '사과를 세고, 더 들어온 수만큼 이어 세어 모두 몇 개인지 쓰세요.', tool: 'tenframe', options: { item: 'apple' }, figures: [{ state: { count: 2 }, caption: '2개에 1개 더 → ' + BLANK }, { state: { count: 3 }, caption: '3개에 2개 더 → ' + BLANK }], answer: '3, 5' },
    { type: 'blank', prompt: '이어 세어 빈칸에 알맞은 수를 쓰세요.', text: '1에서 2칸 앞으로 → ___     4에서 1칸 앞으로 → ___', answer: '3, 5' },
    { type: 'choice', prompt: '더 많아지는 이야기에 ○ 하세요.', options: ['사과 2개에 1개를 더 땄어요.', '사과 3개를 먹었어요.'], answer: '사과 2개에 1개를 더 땄어요.' },
    { type: 'draw', prompt: '사과 3개 옆에 사과 2개를 더 그려 보세요.' },
  ] } },
  diff: { easy: '칸 번호와 수 줄이 보이고, 바구니 위에 "3 → 2 더" 같은 목표가 나와요. 수직선에는 도착한 수가 보여요.', base: '수 카드가 가려져 있어요. 다 놓은 뒤 모두 몇 개인지 수를 직접 골라요.', challenge: '사과가 칸 여기저기에 흩어져 들어가서 윗줄 5칸 묶음으로 셀 수 없어요. 수직선은 양 끝의 수만 보여요.' },
  notes: '자주 보이는 어려움: ① 있던 사과를 처음부터 다시 센다 → 3 다음에 4, 5 하고 이어 센다. ② 더 들어온 수만 답한다(3개에 2개를 더했는데 2) → "바구니에 모두 몇 개?"로 묻는다. ③ 수직선에서 서 있는 자리를 1로 센다 → 뛴 칸부터 센다. "+" 기호와 식은 4차시에서 쓴다. 2차시(g1-math-compose)에서 두 수를 모으는 활동을 한다.',
}));
// ───────────────────────────── 3차시 (extend) ─────────────────────────────
L.push(lesson(3, {
  title: '접시에서 사과를 먹으면 몇 개가 남을까',
  objective: '있던 것에서 덜어 내는 이야기를 거꾸로 세어 남은 수를 말하고 "빼기"라고 읽을 수 있다.',
  desc: 'a little bear eating red apples from a plate while the apples left on the plate get fewer, a sunny kitchen window',
  text: '먹으면 몇 개 남을까?',
  layers: [{ motif: 'house', x: 120, y: 214 }, { motif: 'apple', x: 320, y: 230, s: 0.4 }, { motif: 'apple', x: 342, y: 230, s: 0.4 }, { motif: 'apple', x: 364, y: 230, s: 0.4 }, { motif: 'flower', x: 250, y: 240 }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"접시에 사과가 5개 있어요. 곰이 2개를 먹었어요. 이제 몇 개 남았을까요?" 시연 단추로 사과 5개에서 2개가 빠져 3개가 되는 모습을 보여 준다. "5에서 하나를 빼면 4, 하나 더 빼면 3. 이것을 빼기라고 해요." 먹은 수 2를 남은 수라고 답하는 학생이 있는지 살핀다.', '사과를 먹으면 몇 개가 남을까요?'],
  demo: { tool: 'tenframe', options: { item: 'apple', showWord: true }, sequence: [{ count: 5 }, { count: 3 }] },
  acts: [
    { id: 'a1', title: '활동 1. 사과를 덜어 내고 남은 수 세기', minutes: 9, tool: 'tenframe',
      task: '있던 사과에서 먹은 만큼 빼요. 판에 남은 사과가 몇 개인지 세어요.',
      teacher: '"먹은 사과는 판에서 빼요. 남은 사과를 세어 봐요." 먹은 수를 그대로 답하는 학생에게 "접시에 지금 몇 개가 있어요?" 하고 되묻는다. 5개에서 2개를 빼려고 5부터 다시 센 뒤 하나를 더 빼는 학생은 빼는 개수를 손가락으로 따로 세게 한다.',
      levels: ONE('apple'),
      items: [
        less('접시에 사과가 5개 있어요. 2개를 먹었어요. 몇 개 남았나요?', 5, 2, 0.08),
        less('접시에 사과가 7개 있어요. 3개를 먹었어요. 몇 개 남았나요?', 7, 3, 0.15,
          { predict: { q: '7개에서 3개를 먹으면 7개보다 많아질까요?', options: ['많아져요', '적어져요', '그대로예요'], answer: 1 }, conclude: '7에서 하나씩 빼 6, 5, 4 — 4개가 남아요. 빼면 처음보다 적어져요.' }),
        less('접시에 사과가 4개 있어요. 1개를 먹었어요. 몇 개 남았나요?', 4, 1, 0.05),
        less('더 해 보기: 접시에 사과가 9개 있어요. 5개를 먹었어요. 몇 개 남았나요?', 9, 5, 0.25, { extra: true }),
      ] },
    { id: 'a2', title: '활동 2. 수직선에서 뒤로 뛰기', minutes: 11, tool: 'numberline',
      task: '수직선에서 처음 수에 서요. 덜어 낸 수만큼 뒤로 한 칸씩 뛰어 몇에 닿는지 봐요.',
      teacher: '"8에서 3칸 뒤로 뛰어요. 어디에 닿았나요?" 뒤로 뛰기 단추를 눌러야 수가 작아진다고 알려 준다. 앞으로 뛰는 단추를 눌러 11이 된 학생에게는 "빼면 수가 커져요, 작아져요?" 하고 되묻는다.',
      levels: NL,
      items: [
        jump('8에서 3칸 뒤로 뛰어 보세요. 어디에 닿나요?', 8, 5, 0.1),
        jump('6에서 2칸 뒤로 뛰어 보세요. 어디에 닿나요?', 6, 4, 0.1),
        jump('9에서 4칸 뒤로 뛰어 보세요. 어디에 닿나요?', 9, 5, 0.18,
          { conclude: '9에서 네 칸을 뒤로 뛰면 5예요. 사과 4개를 덜어 낸 것과 같아요.' }),
        jump('더 해 보기: 7에서 6칸 뒤로 뛰어 보세요. 어디에 닿나요?', 7, 1, 0.22, { extra: true }),
      ] },
    { id: 'a3', title: '활동 3. 많아지는지 적어지는지 나누기', minutes: 6, tool: 'mindmap',
      task: '이야기를 읽고 "더 많아져요"와 "더 적어져요"로 나누어 놓아요.',
      teacher: '"먹었다, 줬다, 날아갔다는 많아질까요, 적어질까요?" 낱말을 보고 나누게 한다. "친구에게 4개를 받았어요"를 줄어드는 쪽에 놓은 학생에게는 "내 사과가 늘었나요?" 하고 되묻는다.',
      levels: CARD_LV,
      items: [
        sortTo('이야기를 두 곳으로 나누어 보세요.', '많아질까, 적어질까?', ['더 많아져요', '더 적어져요'], [['귤 3개에 2개를 더 땄어요.', '친구에게 연필 2자루를 받았어요.'], ['과자 6개 가운데 3개를 먹었어요.', '풍선 5개 가운데 1개가 터졌어요.']], 0.12),
        sortTo('이번에도 두 곳으로 나누어 보세요.', '많아질까, 적어질까?', ['더 많아져요', '더 적어져요'], [['블록 2개를 더 쌓았어요.', '구슬 4개를 더 주웠어요.'], ['빵 8개 가운데 2개를 나눠 줬어요.', '새 7마리 가운데 3마리가 날아갔어요.']], 0.18),
        sortTo('더 해 보기: 이야기를 두 곳으로 나누어 보세요.', '많아질까, 적어질까?', ['더 많아져요', '더 적어져요'], [['딸기 1개를 더 담았어요.', '카드 3장을 더 받았어요.'], ['색연필 9자루 가운데 4자루를 빌려줬어요.', '물고기 5마리가 도망갔어요.']], 0.22, { extra: true }),
      ] },
  ],
  wrap: ['"사과를 먹으면 수가 어떻게 되나요?" 짝에게 "5개에서 2개를 빼면 3개"라고 말하게 한다. 출구 1번에서 먹은 수(2)를 고른 학생은 남은 수와 먹은 수를 헷갈리는지 다음 시간에 먼저 살핀다.', [
    { type: 'choice', prompt: '귤이 6개 있어요. 2개를 먹었어요. 몇 개 남았나요?', options: ['2개', '4개', '8개'], answer: 1, difficulty: 0.12, explain: '6에서 5, 4 하고 뒤로 두 칸 세면 4개가 남아요.' },
    { type: 'tool', tool: 'tenframe', options: { item: 'chip', color: 'mint', showCount: false, askNumber: true, target: { count: 8, less: 3 } }, state: { count: 8 }, prompt: '칩이 8개 있어요. 3개를 덜어 내요. 몇 개 남았나요?', target: { count: 8, less: 3 }, difficulty: 0.22 },
    { type: 'choice', prompt: '더 적어지는 이야기에 ○ 하세요.', options: ['풍선 3개 가운데 1개가 터졌어요.', '풍선 3개에 1개를 더 샀어요.'], answer: 0, difficulty: 0.08, explain: '터지면 풍선이 줄어요. 줄어드는 이야기가 빼기예요.' },
  ]],
  ws: { title: '사과를 먹으면', items: [
    { type: 'figure', prompt: '먹은 사과만큼 ✕ 를 그리고, 남은 사과가 몇 개인지 쓰세요.', tool: 'tenframe', options: { item: 'apple' }, figures: [{ state: { count: 5 }, caption: '2개 먹음 → ' + BLANK }, { state: { count: 7 }, caption: '4개 먹음 → ' + BLANK }, { state: { count: 9 }, caption: '3개 먹음 → ' + BLANK }], answer: '3, 3, 6' },
    { type: 'blank', prompt: '뒤로 세어 빈칸에 알맞은 수를 쓰세요.', text: '7에서 2칸 뒤로 → ___     5에서 4칸 뒤로 → ___     9에서 1칸 뒤로 → ___', answer: '5, 1, 8' },
    { type: 'choice', prompt: '남은 것이 2개가 되는 이야기에 ○ 하세요.', options: ['4개 가운데 2개를 먹었어요.', '4개 가운데 1개를 먹었어요.', '4개에 2개를 더 받았어요.'], answer: '4개 가운데 2개를 먹었어요.' },
    { type: 'short', prompt: '더하는 이야기와 빼는 이야기는 무엇이 다른지 한 문장으로 써 보세요.' },
  ], easy: { note: '빼면 수가 작아져요. 있던 수에서 하나씩 거꾸로 세요.', items: [
    { type: 'figure', prompt: '먹은 사과만큼 ✕ 를 그리고, 남은 사과가 몇 개인지 쓰세요.', tool: 'tenframe', options: { item: 'apple' }, figures: [{ state: { count: 4 }, caption: '1개 먹음 → ' + BLANK }, { state: { count: 6 }, caption: '2개 먹음 → ' + BLANK }], answer: '3, 4' },
    { type: 'blank', prompt: '뒤로 세어 빈칸에 알맞은 수를 쓰세요.', text: '5에서 1칸 뒤로 → ___     6에서 2칸 뒤로 → ___', answer: '4, 4' },
    { type: 'choice', prompt: '더 적어지는 이야기에 ○ 하세요.', options: ['공 4개 가운데 1개가 굴러갔어요.', '공 4개에 1개를 더 샀어요.'], answer: '공 4개 가운데 1개가 굴러갔어요.' },
    { type: 'draw', prompt: '사과 5개를 그리고 2개에 ✕ 를 해 보세요.' },
  ] } },
  diff: { easy: '칸 번호와 수 줄이 보이고 바구니 위에 "5 → 2 덜기" 같은 목표가 나와요. 수직선에는 도착한 수가 보여요.', base: '수 카드가 가려져 있어요. 다 덜어 낸 뒤 몇 개가 남았는지 수를 직접 골라요.', challenge: '사과가 흩어진 칸에 있어서 윗줄 5칸 묶음으로 셀 수 없어요. 수직선은 양 끝의 수만 보여요.' },
  notes: '자주 보이는 어려움: ① 먹은 수를 남은 수로 답한다 → "접시에 지금 몇 개?"로 묻는다. ② 덜어 내면서 처음 수를 다시 센다 → 있던 수에서 하나씩 거꾸로 센다. ③ 뒤로 뛰기 대신 앞으로 뛴다 → 빼면 수가 작아지는지 먼저 말해 본다. 식 "5 − 2 = 3"은 5차시에서 쓴다.',
}));
// ───────────────────────────── 4차시 (core · representation) ─────────────────────────────
L.push(lesson(4, {
  title: '더하는 이야기를 덧셈식으로 쓰고 읽기',
  objective: '더하는 이야기를 "3 + 2 = 5"처럼 식으로 나타내고 "3 더하기 2는 5와 같습니다"라고 읽을 수 있다.',
  desc: 'two little paper birds sitting on a wire with two more birds flying in, and a big plus sign cut from paper',
  text: '3 + 2 = 5',
  layers: [{ motif: 'tree', x: 90, y: 214, s: 1.1 }, { motif: 'bird', x: 200, y: 96 }, { motif: 'bird', x: 240, y: 90 }, { motif: 'bird', x: 280, y: 96 }, { motif: 'bird', x: 340, y: 70, s: 0.8 }, { motif: 'flower', x: 400, y: 236 }],
  intro: ['"새 3마리에 2마리가 더 왔어요. 3 + 2 = 5라고 써요." 칠판에 식을 쓰고 "3 더하기 2는 5와 같습니다"라고 함께 읽는다. "+는 더한다는 표, =는 같다는 표예요." 시연 단추로 칩 4개와 1개가 한 판에 모이는 모습을 보여 준다. = 뒤에 더한 수를 쓰는 학생에게 "= 뒤에는 모두의 수를 써요"라고 말해 준다.', '이야기를 식으로 쓸 수 있을까요? + 와 = 가 무슨 뜻인지 말해 봐요.'],
  demo: { tool: 'tenframe', options: { twoColor: true, item: 'chip', showWord: true }, sequence: [{ parts: [4, 0] }, { parts: [4, 1] }] },
  acts: [
    { id: 'a1', title: '활동 1. 두 색 칩을 모아 식 완성하기', minutes: 9, tool: 'tenframe',
      task: '두 가지 색 칩을 놓고 모두 몇 개인지 알아봐요. 식의 빈칸에 들어갈 수예요.',
      teacher: '"앞의 수는 파란 칩, 뒤의 수는 노란 칩이에요. 모두 몇 개인가요?" 식 4 + 2에서 4와 2를 이어 붙여 42라고 읽는 학생에게는 칩으로 모아 보게 한다. 모은 수가 처음 두 수보다 큰지 짚는다.',
      levels: TW('chip'),
      items: [
        total('4 + 2 = ? 파란 칩 4개와 노란 칩 2개를 모아 보세요.', 4, 2, 0.08),
        total('1 + 6 = ? 파란 칩 1개와 노란 칩 6개를 모아 보세요.', 1, 6, 0.12,
          { predict: { q: '1 + 6과 6 + 1 중 어느 쪽이 더 클까요?', options: ['1 + 6', '6 + 1', '같아요'], answer: 2 }, conclude: '1과 6을 모으면 7이에요. 1 + 6 = 7이라고 써요.' }),
        total('3 + 5 = ? 파란 칩 3개와 노란 칩 5개를 모아 보세요.', 3, 5, 0.18),
        total('더 해 보기: 5 + 4 = ? 파란 칩 5개와 노란 칩 4개를 모아 보세요.', 5, 4, 0.24, { extra: true }),
      ] },
    { id: 'a2', title: '활동 2. 이야기와 덧셈식 잇기', minutes: 11, tool: 'mindmap',
      task: '이야기에 알맞은 덧셈식 카드를 이어요.',
      teacher: '"이야기에서 처음 수와 더 온 수를 찾아요. 모두의 수는 = 뒤에 와요." 식의 수만 보고 이야기를 보지 않는 학생에게 이야기를 소리 내어 읽게 한다. 이은 뒤에는 이야기와 식을 함께 "새 3마리에 2마리를 더하면 5마리"처럼 읽게 한다.',
      levels: CARD_LV,
      items: [
        match('이야기에 맞는 식을 이어 보세요.', '이야기와 식', ['새 3마리에 2마리가 더 왔어요.', '귤 4개에 4개를 더 땄어요.', '풍선 2개에 5개를 더 불었어요.'], ['3 + 2 = 5', '4 + 4 = 8', '2 + 5 = 7'], 0.12),
        match('이번에도 이야기에 맞는 식을 이어 보세요.', '이야기와 식', ['연필 6자루에 1자루를 더 샀어요.', '꽃 5송이에 3송이를 더 심었어요.', '블록 1개에 7개를 더 쌓았어요.'], ['6 + 1 = 7', '5 + 3 = 8', '1 + 7 = 8'], 0.18),
        match('더 해 보기: 이야기에 맞는 식을 이어 보세요.', '이야기와 식', ['공 7개에 2개를 더 가져왔어요.', '구슬 3개에 6개를 더 주웠어요.'], ['7 + 2 = 9', '3 + 6 = 9'], 0.22, { extra: true }),
      ] },
    { id: 'a3', title: '활동 3. 수직선에서 식 따라 뛰기', minutes: 6, tool: 'numberline',
      task: '식의 앞 수에 서서 뒤 수만큼 앞으로 뛰어요. 닿은 수가 = 뒤의 수예요.',
      teacher: '"2 + 4는 2에 서서 4칸을 뛰어요." 식의 앞 수에서 출발하는지 확인한다. 4칸이 아니라 4에 닿도록 뛰는 학생에게는 출발 자리와 뛴 칸을 따로 말하게 한다.',
      levels: NL,
      items: [
        jump('2 + 4를 수직선에서 뛰어 보세요. 어디에 닿나요?', 2, 6, 0.1),
        jump('5 + 3을 수직선에서 뛰어 보세요. 어디에 닿나요?', 5, 8, 0.15),
        jump('더 해 보기: 4 + 5를 수직선에서 뛰어 보세요. 어디에 닿나요?', 4, 9, 0.22, { extra: true }),
      ] },
  ],
  wrap: ['"3 + 2 = 5는 어떻게 읽나요?" 짝끼리 번갈아 식을 읽게 한다. 출구 1번을 틀린 학생은 = 뒤에 더하는 수를 쓰는지 다음 시간에 먼저 살핀다.', [
    { type: 'choice', prompt: '"사과 4개에 3개를 더 땄어요"를 식으로 나타낸 것은 어느 것인가요?', options: ['4 + 3 = 7', '4 − 3 = 1', '3 + 3 = 6'], answer: 0, difficulty: 0.12, explain: '4개에 3개를 더하니까 4 + 3 = 7이에요.' },
    { type: 'choice', prompt: '5 + 2 = 7을 바르게 읽은 것은 어느 것인가요?', options: ['5 더하기 2는 7과 같습니다', '5 빼기 2는 7과 같습니다'], answer: 0, difficulty: 0.1, explain: '+는 더하기라고 읽고 =는 같다고 읽어요.' },
    { type: 'tool', tool: 'tenframe', options: { twoColor: true, item: 'chip', showCount: false, askNumber: true, target: { parts: [2, 6], ask: 'total' } }, prompt: '2 + 6 = ? 하늘색 칩 2개와 주황색 칩 6개를 모아 보세요.', target: { parts: [2, 6], ask: 'total' }, difficulty: 0.2 },
  ]],
  ws: { title: '덧셈식 쓰고 읽기', items: [
    { type: 'figure', prompt: '두 가지 사과를 모으면 모두 몇 개인가요? 식을 완성하세요.', tool: 'tenframe', options: { twoColor: true, item: 'apple' }, figures: [{ state: { parts: [2, 3] }, caption: '2 + 3 = ' + BLANK }, { state: { parts: [4, 4] }, caption: '4 + 4 = ' + BLANK }, { state: { parts: [1, 7] }, caption: '1 + 7 = ' + BLANK }], answer: '5, 8, 8' },
    { type: 'table', prompt: '이야기를 읽고 식을 쓰세요.', columns: ['이야기', '식'], cells: [['새 2마리에 5마리가 더 왔어요.', ''], ['꽃 6송이에 2송이를 더 심었어요.', ''], ['귤 3개에 3개를 더 땄어요.', '']], answer: '2 + 5 = 7, 6 + 2 = 8, 3 + 3 = 6' },
    { type: 'blank', prompt: '식을 바르게 읽어 보세요.', text: '4 + 1 = 5 → 4 ______ 1은 5와 ______.', answer: '더하기, 같습니다' },
    { type: 'short', prompt: '내가 만든 이야기를 하나 쓰고 식으로 나타내 보세요.' },
  ], easy: { note: '+ 는 더하기, = 는 같다는 뜻이에요. 모두의 수는 = 뒤에 써요.', items: [
    { type: 'figure', prompt: '두 가지 사과를 모으면 모두 몇 개인가요? 식을 완성하세요.', tool: 'tenframe', options: { twoColor: true, item: 'apple' }, figures: [{ state: { parts: [2, 1] }, caption: '2 + 1 = ' + BLANK }, { state: { parts: [3, 3] }, caption: '3 + 3 = ' + BLANK }], answer: '3, 6' },
    { type: 'table', prompt: '이야기를 읽고 식을 쓰세요.', columns: ['이야기', '식'], cells: [['새 1마리에 2마리가 더 왔어요.', '1 + 2 = 3'], ['꽃 4송이에 1송이를 더 심었어요.', '']], answer: '4 + 1 = 5' },
    { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '2 + 2 = 4 → 2 ______ 2는 4와 ______.', answer: '더하기, 같습니다' },
    { type: 'draw', prompt: '사과 2개와 사과 3개를 그리고 2 + 3 = 5라고 써 보세요.' },
  ] } },
  diff: { easy: '칸 번호와 수 카드가 보여서 놓으면서 바로 셀 수 있어요. 카드 이음은 맞지 않으면 까닭을 말하고 카드가 돌아와요. 수직선에는 도착한 수가 보여요.', base: '수 카드가 가려져 있어요. 칩을 모두 놓은 뒤 모두 몇 개인지 수를 직접 골라요.', challenge: '칩이 흩어진 칸에 들어가서 5칸 묶음으로 셀 수 없어요. 수직선은 양 끝의 수만 보여요.' },
  notes: '자주 보이는 어려움: ① 4 + 2를 42로 읽는다 → 칩 4개와 2개를 모아 본다. ② = 뒤에 더하는 수를 쓴다(3 + 2 = 2) → = 뒤는 모두의 수라고 말한다. ③ +와 −를 바꿔 쓴다 → 이야기가 늘어나는지 줄어드는지 먼저 말한다. 뺄셈식은 5차시에서 같은 방법으로 배운다.',
}));
// ───────────────────────────── 5차시 (practice · representation) ─────────────────────────────
L.push(lesson(5, {
  title: '빼는 이야기를 뺄셈식으로 쓰고 읽기',
  objective: '빼는 이야기를 "5 − 2 = 3"처럼 식으로 나타내고 "5 빼기 2는 3과 같습니다"라고 읽을 수 있다.',
  desc: 'a paper squirrel with a pile of acorns giving some away to a friend, a minus sign cut from paper above them',
  text: '5 − 2 = 3',
  layers: [{ motif: 'tree', x: 380, y: 214, s: 1.2 }, { motif: 'leaf', x: 140, y: 226 }, { motif: 'leaf', x: 180, y: 232 }, { motif: 'leaf', x: 220, y: 226 }, { motif: 'flower', x: 70, y: 236 }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"도토리 5개 가운데 2개를 친구에게 주었어요. 5 − 2 = 3이라고 써요." 칠판에 식을 쓰고 "5 빼기 2는 3과 같습니다"라고 함께 읽는다. "−는 뺀다는 표예요. 식에서 큰 수가 먼저 와요." 시연 단추로 칩 5개에서 2개가 빠지는 모습을 보여 준다. 더하기와 빼기를 헷갈리는 학생에게는 "많아졌어요, 적어졌어요?"를 먼저 묻는다.', '빼는 이야기를 식으로 쓸 수 있을까요? 5 − 2 = 3은 어떻게 읽을까요?'],
  demo: { tool: 'tenframe', options: { item: 'chip', color: 'mint', showWord: true }, sequence: [{ count: 5 }, { count: 3 }] },
  acts: [
    { id: 'a1', title: '활동 1. 칩을 덜어 내 뺄셈 풀기', minutes: 9, tool: 'tenframe',
      task: '식의 앞 수만큼 칩이 놓여 있어요. 뒤 수만큼 덜어 내고 남은 칩을 세어요.',
      teacher: '"8 − 3은 칩 8개에서 3개를 덜어 내요. 몇 개가 남아요?" 식의 두 수를 더해 11이라고 답하는 학생에게 "−는 덜어 내는 표예요. 남는 칩이 많아졌나요?" 하고 묻는다.',
      levels: ONE('chip', 'mint'),
      items: [
        less('8 − 3 = ? 칩 8개에서 3개를 덜어 내 보세요.', 8, 3, 0.1),
        less('6 − 4 = ? 칩 6개에서 4개를 덜어 내 보세요.', 6, 4, 0.12,
          { predict: { q: '6 − 4는 6보다 클까요, 작을까요?', options: ['6보다 커요', '6보다 작아요', '6과 같아요'], answer: 1 }, conclude: '6에서 4개를 덜어 내면 2개가 남아요. 6 − 4 = 2라고 써요.' }),
        less('9 − 2 = ? 칩 9개에서 2개를 덜어 내 보세요.', 9, 2, 0.15),
        less('더 해 보기: 7 − 5 = ? 칩 7개에서 5개를 덜어 내 보세요.', 7, 5, 0.22, { extra: true }),
      ] },
    { id: 'a2', title: '활동 2. 이야기와 뺄셈식 잇기', minutes: 11, tool: 'mindmap',
      task: '이야기에 알맞은 뺄셈식 카드를 이어요.',
      teacher: '"처음에 몇 개 있었는지가 −의 앞에 와요." 먹은 수를 앞에 쓴 식(2 − 5)은 만들 수 없다고 말해 준다 — 더 큰 수에서 작은 수를 빼야 한다. 식 카드를 이어 놓고 이야기와 함께 소리 내어 읽게 한다.',
      levels: CARD_LV,
      items: [
        match('이야기에 맞는 식을 이어 보세요.', '이야기와 식', ['도토리 5개 가운데 2개를 주었어요.', '빵 7개 가운데 3개를 먹었어요.', '풍선 6개 가운데 1개가 터졌어요.'], ['5 − 2 = 3', '7 − 3 = 4', '6 − 1 = 5'], 0.12),
        match('이번에도 이야기에 맞는 식을 이어 보세요.', '이야기와 식', ['귤 9개 가운데 4개를 나눠 줬어요.', '새 8마리 가운데 5마리가 날아갔어요.', '공 4개 가운데 3개가 굴러갔어요.'], ['9 − 4 = 5', '8 − 5 = 3', '4 − 3 = 1'], 0.18),
        match('더 해 보기: 이야기에 맞는 식을 이어 보세요.', '이야기와 식', ['연필 7자루 가운데 6자루를 빌려줬어요.', '구슬 9개 가운데 1개를 잃어버렸어요.'], ['7 − 6 = 1', '9 − 1 = 8'], 0.22, { extra: true }),
      ] },
    { id: 'a3', title: '활동 3. 수직선에서 식 따라 뒤로 뛰기', minutes: 6, tool: 'numberline',
      task: '식의 앞 수에 서서 뒤 수만큼 뒤로 뛰어요. 닿은 수가 = 뒤의 수예요.',
      teacher: '"9 − 6은 9에 서서 6칸 뒤로 뛰어요." 뛴 칸 수를 세면서 뒤로 뛰게 한다. 3에 닿았을 때 "9 − 6 = 3"을 소리 내어 읽게 한다.',
      levels: NL,
      items: [
        jump('9 − 6을 수직선에서 뛰어 보세요. 어디에 닿나요?', 9, 3, 0.12),
        jump('5 − 2를 수직선에서 뛰어 보세요. 어디에 닿나요?', 5, 3, 0.1),
        jump('더 해 보기: 8 − 7을 수직선에서 뛰어 보세요. 어디에 닿나요?', 8, 1, 0.2, { extra: true }),
      ] },
  ],
  wrap: ['"5 − 2 = 3은 어떻게 읽나요?" 짝끼리 번갈아 식을 읽게 한다. 출구 1번에서 7 + 3을 고른 학생은 이야기가 줄어드는지 늘어나는지 다음 시간에 먼저 살핀다.', [
    { type: 'choice', prompt: '"귤 7개 가운데 3개를 먹었어요"를 식으로 나타낸 것은 어느 것인가요?', options: ['7 + 3 = 10', '7 − 3 = 4', '3 − 7 = 4'], answer: 1, difficulty: 0.12, explain: '먹어서 줄어드니까 빼기예요. 처음 수 7이 앞에 와요.' },
    { type: 'choice', prompt: '8 − 5 = 3을 바르게 읽은 것은 어느 것인가요?', options: ['8 빼기 5는 3과 같습니다', '8 더하기 5는 3과 같습니다'], answer: 0, difficulty: 0.1, explain: '−는 빼기라고 읽어요.' },
    { type: 'tool', tool: 'tenframe', options: { item: 'chip', color: 'sky', showCount: false, askNumber: true, target: { count: 7, less: 4 } }, state: { count: 7 }, prompt: '7 − 4 = ? 칩 7개에서 4개를 덜어 내 보세요.', target: { count: 7, less: 4 }, difficulty: 0.2 },
  ]],
  ws: { title: '뺄셈식 쓰고 읽기', items: [
    { type: 'figure', prompt: '사과에서 ✕ 한 만큼 빼요. 남은 사과가 몇 개인지 식을 완성하세요.', tool: 'tenframe', options: { item: 'apple' }, figures: [{ state: { count: 6 }, caption: '6 − 2 = ' + BLANK }, { state: { count: 8 }, caption: '8 − 5 = ' + BLANK }, { state: { count: 9 }, caption: '9 − 3 = ' + BLANK }], answer: '4, 3, 6' },
    { type: 'table', prompt: '이야기를 읽고 식을 쓰세요.', columns: ['이야기', '식'], cells: [['새 6마리 가운데 2마리가 날아갔어요.', ''], ['귤 8개 가운데 1개를 먹었어요.', ''], ['공 5개 가운데 4개가 굴러갔어요.', '']], answer: '6 − 2 = 4, 8 − 1 = 7, 5 − 4 = 1' },
    { type: 'blank', prompt: '식을 바르게 읽어 보세요.', text: '7 − 2 = 5 → 7 ______ 2는 5와 ______.', answer: '빼기, 같습니다' },
    { type: 'short', prompt: '5 − 2와 2 − 5 가운데 만들 수 있는 식은 무엇인지, 왜 그런지 써 보세요.' },
  ], easy: { note: '− 는 빼기예요. 처음에 있던 수가 앞에 와요.', items: [
    { type: 'figure', prompt: '사과에서 ✕ 한 만큼 빼요. 남은 사과가 몇 개인지 식을 완성하세요.', tool: 'tenframe', options: { item: 'apple' }, figures: [{ state: { count: 4 }, caption: '4 − 1 = ' + BLANK }, { state: { count: 5 }, caption: '5 − 3 = ' + BLANK }], answer: '3, 2' },
    { type: 'table', prompt: '이야기를 읽고 식을 쓰세요.', columns: ['이야기', '식'], cells: [['새 4마리 가운데 1마리가 날아갔어요.', '4 − 1 = 3'], ['귤 6개 가운데 2개를 먹었어요.', '']], answer: '6 − 2 = 4' },
    { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '4 − 3 = 1 → 4 ______ 3은 1과 ______.', answer: '빼기, 같습니다' },
    { type: 'draw', prompt: '사과 5개를 그리고 2개에 ✕ 를 한 뒤 5 − 2 = 3이라고 써 보세요.' },
  ] } },
  diff: { easy: '칸 번호와 수 줄이 보이고 바구니 위에 "8 → 3 덜기" 같은 목표가 나와요. 카드 이음은 틀리면 까닭을 말하고 돌아와요.', base: '수 카드가 가려져 있어요. 덜어 낸 뒤 몇 개가 남았는지 수를 직접 골라요.', challenge: '칩이 흩어진 칸에 있어서 5칸 묶음으로 셀 수 없어요. 수직선은 양 끝의 수만 보여요.' },
  notes: '자주 보이는 어려움: ① 8 − 3을 8 + 3으로 계산한다 → −는 덜어 내는 표라고 말하고 칩을 덜어 낸다. ② 작은 수를 앞에 쓴다(2 − 5) → 처음에 있던 큰 수가 앞에 온다. ③ 남은 수 대신 덜어 낸 수를 쓴다 → "남은 칩을 세어요"를 되짚는다. 더할지 뺄지 가리는 활동은 8차시에서 한다.',
}));
// ───────────────────────────── 6차시 (core · application) ─────────────────────────────
L.push(lesson(6, {
  title: '놀이터 이야기에서 덧셈식 만들어 풀기',
  objective: '그림이나 말로 된 더하는 이야기에서 알맞은 덧셈식을 만들고 모두의 수를 구할 수 있다.',
  desc: 'a paper playground with a slide and swings where children cut from paper are playing in two groups',
  text: '모두 몇 명일까요?',
  layers: [{ motif: 'house', x: 90, y: 214 }, { motif: 'tree', x: 380, y: 216, s: 1.1 }, { motif: 'flower', x: 230, y: 238 }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"놀이터에서 그네를 타는 어린이가 3명, 미끄럼틀을 타는 어린이가 4명이에요. 모두 몇 명일까요?" 두 모둠이 있다고 짚고 "식으로 쓰면?" 하고 묻는다. "3 + 4 = 7, 모두 7명." 어린이 수를 말할 때 단위(명)를 붙여 답하게 한다. 이야기 속 두 수 가운데 하나만 쓰는 학생이 있는지 살핀다.', '놀이터 이야기를 식으로 쓰고 모두 몇 명인지 풀어 봐요.'],
  demo: { tool: 'tenframe', options: { twoColor: true, item: 'chip', showWord: true }, sequence: [{ parts: [3, 0] }, { parts: [3, 4] }] },
  acts: [
    { id: 'a1', title: '활동 1. 두 모둠을 합쳐 모두 구하기', minutes: 9, tool: 'tenframe',
      task: '이야기에 나온 두 수를 두 가지 색 칩으로 놓고 모두 몇 명인지 알아봐요.',
      teacher: '"그네 모둠은 파란 칩, 미끄럼틀 모둠은 노란 칩이에요. 두 모둠을 합치면 몇 명일까요?" 둘 중 큰 수만 답하는 학생에게 "두 모둠이 모두 놀고 있어요. 합쳐야 해요"라고 말한다.',
      levels: TW('chip'),
      items: [
        total('그네를 3명, 미끄럼틀을 4명이 타요. 모두 몇 명인가요?', 3, 4, 0.1),
        total('모래놀이를 2명, 시소를 6명이 해요. 모두 몇 명인가요?', 2, 6, 0.15,
          { predict: { q: '2명과 6명이 모이면 6명보다 많을까요?', options: ['많아요', '적어요', '같아요'], answer: 0 }, conclude: '2 + 6 = 8이에요. 두 모둠을 합치면 어느 한 모둠보다 많아요.' }),
        total('줄넘기를 5명, 공놀이를 2명이 해요. 모두 몇 명인가요?', 5, 2, 0.15),
        total('더 해 보기: 달리기를 1명, 술래잡기를 8명이 해요. 모두 몇 명인가요?', 1, 8, 0.22, { extra: true }),
      ] },
    { id: 'a2', title: '활동 2. 이야기에 맞는 식 고르기', minutes: 11, tool: 'mindmap',
      task: '이야기를 읽고 알맞은 식 카드 하나만 골라요.',
      teacher: '"이야기의 두 수가 무엇인지 먼저 찾아요." 이야기에 없는 수가 든 식은 먼저 걸러 낸다. 3 + 5 = 8과 5 − 3 = 2를 두고 고르는 문항에서는 "더 왔어요, 먹었어요?"를 소리 내어 읽게 한다.',
      levels: CARD_LV,
      items: [
        pickOf('"도서관에 책 4권이 있어요. 3권을 더 가져왔어요." 맞는 식을 골라 보세요.', '맞는 식', ['4 + 3 = 7', '4 − 3 = 1', '3 + 3 = 6'], ['4 + 3 = 7'], 0.1),
        pickOf('"꽃병에 장미 5송이와 튤립 2송이가 있어요." 맞는 식을 골라 보세요.', '맞는 식', ['5 − 2 = 3', '5 + 2 = 7', '5 + 5 = 10'], ['5 + 2 = 7'], 0.12),
        pickOf('"주머니에 구슬 6개, 호주머니에 구슬 3개가 있어요." 모두 몇 개인지 식을 골라 보세요.', '맞는 식', ['6 + 3 = 9', '6 − 3 = 3', '6 + 6 = 12'], ['6 + 3 = 9'], 0.18),
        pickOf('더 해 보기: "과자 1봉지에 7개, 다른 봉지에 2개가 있어요." 맞는 식을 골라 보세요.', '맞는 식', ['7 − 2 = 5', '1 + 2 = 3', '7 + 2 = 9'], ['7 + 2 = 9'], 0.22, { extra: true }),
      ] },
    pair('a3', '활동 3. 짝에게 덧셈 이야기 내기', 6, '짝이 말한 덧셈 이야기를 칩으로 놓아요. 번갈아 이야기를 내요.',
      '짝끼리 "연필 3자루와 연필 2자루가 있어요. 모두 몇 자루?" 같은 이야기를 번갈아 낸다. 이야기를 낸 사람이 식을 말하고, 받은 사람은 칩으로 놓은 뒤 답한다. 이야기에 수가 하나뿐이거나 먹는 이야기로 바뀌면 "합치는 이야기로 다시 만들어요"라고 말해 준다.',
      ['짝이 낸 이야기를 칩으로 놓고 "다 했어요"를 누르세요.', '이번에는 역할을 바꾸어 내 이야기를 칩으로 놓고 "다 했어요"를 누르세요.', '두 이야기의 식을 소리 내어 읽고 "다 했어요"를 누르세요.'], 'tenframe', TW('chip')),
  ],
  wrap: ['"덧셈 이야기를 식으로 쓸 때 어떤 수를 먼저 찾나요?" 짝에게 이야기 속 두 수를 짚어 말하게 한다. 출구 1번을 틀린 학생은 이야기에서 한 수만 쓰는지 다음 시간에 먼저 살핀다.', [
    { type: 'choice', prompt: '"운동장에 2학년 5명, 1학년 3명이 있어요." 모두 몇 명인가요?', options: ['2명', '5명', '8명'], answer: 2, difficulty: 0.12, explain: '5 + 3 = 8이에요. 두 모둠을 합치면 8명이에요.' },
    { type: 'tool', tool: 'tenframe', options: { twoColor: true, item: 'chip', showCount: false, askNumber: true, target: { parts: [4, 5], ask: 'total' } }, prompt: '빵 4개와 쿠키 5개가 있어요. 모두 몇 개인가요?', target: { parts: [4, 5], ask: 'total' }, difficulty: 0.2 },
    { type: 'choice', prompt: '"사탕 2개에 사탕 6개를 더 받았어요." 맞는 식에 ○ 하세요.', options: ['2 + 6 = 8', '6 − 2 = 4'], answer: 0, difficulty: 0.1, explain: '더 받았으니 더하기예요. 2 + 6 = 8이에요.' },
  ]],
  ws: { title: '덧셈 이야기 풀기', items: [
    { type: 'figure', prompt: '두 가지 칩을 모으면 모두 몇 개인지 식을 쓰세요.', tool: 'tenframe', options: { twoColor: true, item: 'chip' }, figures: [{ state: { parts: [3, 3] }, caption: '3 + 3 = ' + BLANK }, { state: { parts: [5, 2] }, caption: '5 + 2 = ' + BLANK }, { state: { parts: [2, 7] }, caption: '2 + 7 = ' + BLANK }], answer: '6, 7, 9' },
    { type: 'table', prompt: '이야기를 읽고 식과 답을 쓰세요.', columns: ['이야기', '식', '모두'], cells: [['그네 4명, 시소 3명', '', ''], ['빨간 공 5개, 파란 공 4개', '', ''], ['연필 2자루, 지우개 6개', '', '']], answer: '4 + 3 = 7(7명), 5 + 4 = 9(9개), 2 + 6 = 8(8개)' },
    { type: 'choice', prompt: '"바구니에 감 6개와 배 2개가 있어요." 모두 몇 개인지 알아보는 식에 ○ 하세요.', options: ['6 + 2', '6 − 2', '2 − 6'], answer: '6 + 2' },
    { type: 'short', prompt: '내가 만든 덧셈 이야기를 쓰고 식으로 나타내 보세요.' },
  ], easy: { note: '두 수를 찾고 합쳐요. 합치는 이야기는 더하기예요.', items: [
    { type: 'figure', prompt: '두 가지 칩을 모으면 모두 몇 개인지 식을 쓰세요.', tool: 'tenframe', options: { twoColor: true, item: 'chip' }, figures: [{ state: { parts: [2, 2] }, caption: '2 + 2 = ' + BLANK }, { state: { parts: [4, 1] }, caption: '4 + 1 = ' + BLANK }], answer: '4, 5' },
    { type: 'table', prompt: '이야기를 읽고 식과 답을 쓰세요.', columns: ['이야기', '식', '모두'], cells: [['그네 2명, 시소 3명', '2 + 3 = 5', '5명'], ['빨간 공 3개, 파란 공 4개', '', '']], answer: '3 + 4 = 7(7개)' },
    { type: 'choice', prompt: '"감 3개와 배 1개" 모두 몇 개인지 알아보는 식에 ○ 하세요.', options: ['3 + 1', '3 − 1'], answer: '3 + 1' },
    { type: 'draw', prompt: '공 3개와 공 2개를 그리고 식을 써 보세요.' },
  ] } },
  diff: { easy: '칸 번호와 수 카드가 보이고, 카드 고르기는 틀리면 까닭을 말하고 돌아와요.', base: '수 카드가 가려져 있어요. 칩을 모두 놓은 뒤 모두 몇 개인지 수를 직접 골라요.', challenge: '칩이 흩어진 칸에 들어가서 5칸 묶음으로 셀 수 없어요. 식 카드 고르기에서는 식 카드가 한 장 더 늘어나요.' },
  notes: '자주 보이는 어려움: ① 이야기에서 수 하나만 쓴다 → 이야기 속 두 수에 밑줄을 긋게 한다. ② 이야기 문제를 보고 뺄셈을 한다 → 합치는 이야기인지 줄어드는 이야기인지 먼저 말한다. ③ 답에 단위를 쓰지 않는다 → 명·개·자루 같은 단위를 함께 말한다. 빼는 이야기는 7차시에서 풀어 본다.',
}));
// ───────────────────────────── 7차시 (practice · application) ─────────────────────────────
L.push(lesson(7, {
  title: '꽃집과 장난감 가게 이야기에서 뺄셈식 만들어 풀기',
  objective: '줄어드는 이야기에서 알맞은 뺄셈식을 만들고 남은 수를 구할 수 있다.',
  desc: 'a paper flower shop where a shopkeeper hands a few flowers to a customer and fewer flowers remain in the vase',
  text: '몇 송이 남았을까요?',
  layers: [{ motif: 'house', x: 110, y: 214 }, { motif: 'flower', x: 300, y: 232 }, { motif: 'flower', x: 340, y: 236 }, { motif: 'flower', x: 380, y: 232 }, { motif: 'tree', x: 430, y: 216, s: 0.9 }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"꽃병에 장미 7송이가 있었어요. 손님에게 2송이를 팔았어요. 몇 송이 남았을까요?" 칠판에 "7 − 2 = 5"를 쓰고 "처음 수에서 판 수를 빼요"라고 말한다. 시연 단추로 칩 7개에서 2개가 빠지는 모습을 보여 준다. 판 수 2를 답으로 말하는 학생이 있는지 살핀다.', '줄어드는 이야기를 식으로 쓰고 남은 수를 풀어 봐요.'],
  demo: { tool: 'tenframe', options: { item: 'chip', color: 'sky', showWord: true }, sequence: [{ count: 7 }, { count: 5 }] },
  acts: [
    { id: 'a1', title: '활동 1. 덜어 내고 남은 수 구하기', minutes: 9, tool: 'tenframe',
      task: '이야기에 나온 처음 수만큼 칩을 두고, 줄어든 수만큼 덜어 내요. 남은 수를 알아봐요.',
      teacher: '"처음에 몇 개 있었어요? 그중 몇 개가 없어졌어요?" 이야기 속 두 수를 짚게 한다. 처음 수와 없어진 수를 더해 답하는 학생에게 "없어지면 많아져요, 적어져요?" 하고 묻는다.',
      levels: ONE('chip', 'sky'),
      items: [
        less('장미가 7송이 있었는데 2송이를 팔았어요. 몇 송이 남았나요?', 7, 2, 0.1),
        less('로봇 장난감이 6개 있었는데 5개를 팔았어요. 몇 개 남았나요?', 6, 5, 0.15,
          { predict: { q: '6개에서 5개를 팔면 남은 것이 많을까요, 적을까요?', options: ['6개보다 많아요', '6개보다 적어요'], answer: 1 }, conclude: '6 − 5 = 1이에요. 5개를 팔면 1개가 남아요.' }),
        less('색종이가 9장 있었는데 4장을 썼어요. 몇 장 남았나요?', 9, 4, 0.18),
        less('더 해 보기: 구슬이 8개 있었는데 6개를 나눠 줬어요. 몇 개 남았나요?', 8, 6, 0.22, { extra: true }),
      ] },
    { id: 'a2', title: '활동 2. 이야기에 맞는 뺄셈식 고르기', minutes: 11, tool: 'mindmap',
      task: '이야기를 읽고 알맞은 식 카드 하나만 골라요.',
      teacher: '"처음 수가 얼마인지 찾아서 식의 맨 앞에 써요." 더하는 식을 고른 학생에게는 이야기를 다시 읽고 "줄었나요, 늘었나요?"를 말하게 한다. 수의 자리를 바꾼 식(3 − 8)은 이야기와 맞지 않다고 짚는다.',
      levels: CARD_LV,
      items: [
        pickOf('"바구니에 밤이 8개 있었어요. 3개를 꺼냈어요." 맞는 식을 골라 보세요.', '맞는 식', ['8 − 3 = 5', '8 + 3 = 11', '3 − 8 = 5'], ['8 − 3 = 5'], 0.12),
        pickOf('"접시에 떡이 5개 있었어요. 1개를 먹었어요." 맞는 식을 골라 보세요.', '맞는 식', ['5 + 1 = 6', '5 − 1 = 4', '1 − 5 = 4'], ['5 − 1 = 4'], 0.12),
        pickOf('"버스에 9명이 탔어요. 정류장에서 6명이 내렸어요." 남은 사람 수를 구하는 식을 골라 보세요.', '맞는 식', ['9 + 6 = 15', '9 − 6 = 3', '6 − 9 = 3'], ['9 − 6 = 3'], 0.2),
        pickOf('더 해 보기: "저금통에 동전 7개가 있었어요. 2개를 꺼냈어요." 맞는 식을 골라 보세요.', '맞는 식', ['7 − 2 = 5', '7 + 2 = 9', '2 − 7 = 5'], ['7 − 2 = 5'], 0.2, { extra: true }),
      ] },
    { id: 'a3', title: '활동 3. 계단을 내려오며 뒤로 뛰기', minutes: 6, tool: 'numberline',
      task: '계단 수직선의 처음 수에서 줄어든 수만큼 뒤로 뛰어요. 닿은 수가 남은 수예요.',
      teacher: '"7번째 계단에서 5칸을 내려와요. 몇 번째 계단에 서 있나요?" 처음 수에서 출발해 한 칸씩 뒤로 뛰게 한다. 0에 닿는 문항에서는 "하나도 남지 않으면 0이에요"를 말해 준다.',
      levels: NL,
      items: [
        jump('7번째 계단에서 5칸 내려와요. 몇 번째 계단에 서나요?', 7, 2, 0.12),
        jump('6번째 계단에서 3칸 내려와요. 몇 번째 계단에 서나요?', 6, 3, 0.1),
        jump('더 해 보기: 4번째 계단에서 4칸 내려와요. 몇 번째 계단에 서나요?', 4, 0, 0.22, { extra: true }),
      ] },
  ],
  wrap: ['"뺄셈 이야기에서 어느 수가 식의 맨 앞에 오나요?" 짝에게 처음 수와 없어진 수를 짚어 말하게 한다. 출구 1번에서 2를 고른 학생은 없어진 수를 남은 수로 답하는지 다음 시간에 먼저 살핀다.', [
    { type: 'choice', prompt: '"풍선이 5개 있었는데 3개가 터졌어요." 몇 개 남았나요?', options: ['2개', '3개', '8개'], answer: 0, difficulty: 0.12, explain: '5 − 3 = 2예요. 2개가 남아요.' },
    { type: 'tool', tool: 'tenframe', options: { item: 'chip', color: 'sky', showCount: false, askNumber: true, target: { count: 9, less: 5 } }, state: { count: 9 }, prompt: '사탕이 9개 있었는데 5개를 먹었어요. 몇 개 남았나요?', target: { count: 9, less: 5 }, difficulty: 0.2 },
    { type: 'choice', prompt: '"빵이 6개 있었어요. 4개를 먹었어요." 맞는 식에 ○ 하세요.', options: ['6 − 4 = 2', '6 + 4 = 10'], answer: 0, difficulty: 0.1, explain: '먹어서 줄었으니 빼기예요. 6 − 4 = 2예요.' },
  ]],
  ws: { title: '뺄셈 이야기 풀기', items: [
    { type: 'figure', prompt: '그림에서 ✕ 한 만큼 빼요. 남은 것이 몇 개인지 식을 쓰세요.', tool: 'tenframe', options: { item: 'chip' }, figures: [{ state: { count: 7 }, caption: '7 − 3 = ' + BLANK }, { state: { count: 9 }, caption: '9 − 7 = ' + BLANK }, { state: { count: 5 }, caption: '5 − 4 = ' + BLANK }], answer: '4, 2, 1' },
    { type: 'table', prompt: '이야기를 읽고 식과 남은 수를 쓰세요.', columns: ['이야기', '식', '남은 수'], cells: [['귤 8개 가운데 3개를 먹었어요.', '', ''], ['연필 6자루 가운데 2자루를 빌려줬어요.', '', ''], ['새 9마리 가운데 5마리가 날아갔어요.', '', '']], answer: '8 − 3 = 5(5개), 6 − 2 = 4(4자루), 9 − 5 = 4(4마리)' },
    { type: 'choice', prompt: '"사탕 7개 가운데 1개를 먹었어요." 몇 개 남았는지 알아보는 식에 ○ 하세요.', options: ['7 + 1', '7 − 1', '1 − 7'], answer: '7 − 1' },
    { type: 'short', prompt: '내가 만든 뺄셈 이야기를 쓰고 식으로 나타내 보세요.' },
  ], easy: { note: '처음에 있던 수가 식의 맨 앞에 와요. 없어진 만큼 빼요.', items: [
    { type: 'figure', prompt: '그림에서 ✕ 한 만큼 빼요. 남은 것이 몇 개인지 식을 쓰세요.', tool: 'tenframe', options: { item: 'chip' }, figures: [{ state: { count: 5 }, caption: '5 − 2 = ' + BLANK }, { state: { count: 6 }, caption: '6 − 5 = ' + BLANK }], answer: '3, 1' },
    { type: 'table', prompt: '이야기를 읽고 식과 남은 수를 쓰세요.', columns: ['이야기', '식', '남은 수'], cells: [['귤 5개 가운데 1개를 먹었어요.', '5 − 1 = 4', '4개'], ['연필 4자루 가운데 3자루를 빌려줬어요.', '', '']], answer: '4 − 3 = 1(1자루)' },
    { type: 'choice', prompt: '"공 6개 가운데 2개가 굴러갔어요." 알맞은 식에 ○ 하세요.', options: ['6 + 2', '6 − 2'], answer: '6 − 2' },
    { type: 'draw', prompt: '꽃 5송이를 그리고 2송이에 ✕ 를 한 뒤 식을 써 보세요.' },
  ] } },
  diff: { easy: '칸 번호와 수 줄이 보이고 바구니 위에 "7 → 2 덜기" 같은 목표가 나와요. 수직선에는 도착한 수가 보여요.', base: '수 카드가 가려져 있어요. 덜어 낸 뒤 몇 개가 남았는지 수를 직접 골라요.', challenge: '칩이 흩어진 칸에 있어서 5칸 묶음으로 셀 수 없어요. 수직선은 양 끝의 수만 보여요.' },
  notes: '자주 보이는 어려움: ① 이야기에서 두 수를 더한다 → 줄어드는 이야기인지 먼저 말한다. ② 작은 수를 앞에 쓴다(3 − 8) → 처음에 있던 수가 앞에 온다. ③ 없어진 수를 남은 수로 답한다 → "지금 몇 개 있어요?"로 묻는다. 8차시에서 더할지 뺄지 스스로 가려 본다.',
}));
// ───────────────────────────── 8차시 (extend · application) ─────────────────────────────
L.push(lesson(8, {
  title: '이야기를 읽고 더할지 뺄지 가려 풀기',
  objective: '늘어나는 이야기와 줄어드는 이야기를 가려, 더하기 또는 빼기로 풀 수 있다.',
  desc: 'a paper market stall where baskets are being filled with fruit on one side and emptied by shoppers on the other side',
  text: '더할까, 뺄까?',
  layers: [{ motif: 'house', x: 100, y: 214 }, { motif: 'apple', x: 300, y: 232, s: 0.4 }, { motif: 'apple', x: 324, y: 232, s: 0.4 }, { motif: 'tree', x: 400, y: 216 }, { motif: 'flower', x: 230, y: 240 }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"밤이 4개 있었는데 3개를 더 주웠어요." / "밤이 8개 있었는데 5개를 꺼냈어요." 두 이야기를 나란히 쓰고 "어느 이야기가 많아지나요?" 하고 묻는다. "더 주웠어요, 더 샀어요는 +, 꺼냈어요, 먹었어요는 −예요." 낱말만 보고 식을 정하는 학생에게 "이야기를 끝까지 읽어요"라고 말한다.', '이야기를 읽고 더할지 뺄지 어떻게 알 수 있을까요?'],
  demo: { tool: 'tenframe', options: { item: 'chip', color: 'mint', showWord: true }, sequence: [{ count: 4 }, { count: 7 }, { count: 2 }] },
  acts: [
    { id: 'a1', title: '활동 1. 더하기 이야기와 빼기 이야기 나누기', minutes: 9, tool: 'mindmap',
      task: '이야기를 "더하기(+)"와 "빼기(−)" 두 곳으로 나누어 놓아요.',
      teacher: '"많아지는 이야기는 더하기, 적어지는 이야기는 빼기예요." "가져왔어요"는 더하기, "가져갔어요"는 빼기처럼 한 낱말 차이로 뜻이 달라짐을 짚는다. 이야기 속 수가 큰지 작은지로 나누는 학생에게는 이야기를 소리 내어 읽게 한다.',
      levels: CARD_LV,
      items: [
        sortTo('이야기를 두 곳으로 나누어 보세요.', '더할까, 뺄까?', ['더하기(+)', '빼기(−)'], [['밤 4개에 3개를 더 주웠어요.', '귤 2개를 더 받아 모두 모았어요.'], ['상자에서 블록 5개를 꺼냈어요.', '케이크 8조각 가운데 3조각을 먹었어요.']], 0.12),
        sortTo('이번에도 두 곳으로 나누어 보세요.', '더할까, 뺄까?', ['더하기(+)', '빼기(−)'], [['물고기 6마리에 2마리를 더 넣었어요.', '쿠키 3개에 4개를 더 구웠어요.'], ['공 9개 가운데 5개를 나눠 줬어요.', '풍선 7개 가운데 2개를 날려 보냈어요.']], 0.18),
        sortTo('더 해 보기: 이야기를 두 곳으로 나누어 보세요.', '더할까, 뺄까?', ['더하기(+)', '빼기(−)'], [['책 1권에 5권을 더 빌렸어요.', '스티커 4장을 더 붙였어요.'], ['우유 6병 가운데 3병을 마셨어요.', '사탕 9개 가운데 8개를 먹었어요.']], 0.22, { extra: true }),
      ] },
    { id: 'a2', title: '활동 2. 읽고 칩으로 풀어 보기', minutes: 11, tool: 'tenframe',
      task: '이야기를 읽고 칩을 더 놓거나 덜어 내요. 지금 몇 개인지 알아봐요.',
      teacher: '"더 놓을까요, 덜어 낼까요? 먼저 말해 보고 움직여요." 더하는 이야기에서 칩을 덜어 낸 학생에게는 이야기 속 낱말에 동그라미를 치게 한다. 풀고 나서 "처음보다 많아졌나요, 적어졌나요?" 하고 결과를 이야기와 견주게 한다.',
      levels: ONE('chip', 'mint'),
      items: [
        more('바구니에 밤이 5개 있었는데 3개를 더 주웠어요. 지금 몇 개인가요?', 5, 3, 0.1),
        less('상자에 블록이 8개 있었는데 5개를 꺼냈어요. 지금 몇 개인가요?', 8, 5, 0.12,
          { predict: { q: '블록을 꺼내면 상자 속 블록이 어떻게 될까요?', options: ['많아져요', '적어져요'], answer: 1 }, conclude: '꺼내면 적어져요. 8 − 5 = 3이에요.' }),
        more('저금통에 동전이 6개 있었는데 2개를 더 넣었어요. 지금 몇 개인가요?', 6, 2, 0.15),
        less('접시에 쿠키가 9개 있었는데 6개를 먹었어요. 지금 몇 개인가요?', 9, 6, 0.2),
        more('더 해 보기: 화분에 꽃이 3개 피어 있었는데 6개가 더 피었어요. 지금 몇 개인가요?', 3, 6, 0.24, { extra: true }),
      ] },
    { id: 'a3', title: '활동 3. 이야기와 식 짝짓기', minutes: 6, tool: 'mindmap',
      task: '이야기에 맞는 식 카드를 이어요. 더하기와 빼기가 섞여 있어요.',
      teacher: '"먼저 + 일지 − 일지 정해요." 식에 있는 수만 보고 이으면 틀리기 쉽다고 알려 주고, 이야기에서 늘었는지 줄었는지 말한 뒤 이어 보게 한다. 이은 뒤에 식 하나를 골라 소리 내어 읽게 한다.',
      levels: CARD_LV,
      items: [
        match('이야기에 맞는 식을 이어 보세요.', '이야기와 식', ['새 5마리에 2마리가 더 날아왔어요.', '새 5마리 가운데 2마리가 날아갔어요.'], ['5 + 2 = 7', '5 − 2 = 3'], 0.15),
        match('이번에도 이야기에 맞는 식을 이어 보세요.', '이야기와 식', ['구슬 6개에 3개를 더 주웠어요.', '구슬 6개 가운데 3개를 잃어버렸어요.', '구슬 3개에 2개를 더 주웠어요.'], ['6 + 3 = 9', '6 − 3 = 3', '3 + 2 = 5'], 0.2),
        match('더 해 보기: 이야기에 맞는 식을 이어 보세요.', '이야기와 식', ['귤 7개에 2개를 더 땄어요.', '귤 7개 가운데 2개를 먹었어요.'], ['7 + 2 = 9', '7 − 2 = 5'], 0.2, { extra: true }),
      ] },
  ],
  wrap: ['"이야기를 읽고 +인지 −인지 어떻게 정하나요?" 짝에게 이야기가 많아지는지 적어지는지 말하게 한다. 출구 2번에서 같은 수로 다른 식을 고른 학생은 이야기의 낱말(더, 꺼냈어요)을 짚어 읽게 한다.', [
    { type: 'choice', prompt: '"사탕 4개에 5개를 더 받았어요." 모두 몇 개인가요?', options: ['1개', '9개', '10개'], answer: 1, difficulty: 0.12, explain: '더 받았으니 더하기예요. 4 + 5 = 9예요.' },
    { type: 'choice', prompt: '"사탕 9개 가운데 4개를 먹었어요." 알맞은 식은 어느 것인가요?', options: ['9 + 4 = 13', '9 − 4 = 5'], answer: 1, difficulty: 0.12, explain: '먹어서 줄었으니 빼기예요. 9 − 4 = 5예요.' },
    { type: 'tool', tool: 'tenframe', options: { item: 'chip', color: 'sky', showCount: false, askNumber: true, target: { count: 7, less: 3 } }, state: { count: 7 }, prompt: '칩이 7개 있었는데 3개를 덜어 냈어요. 지금 몇 개인가요?', target: { count: 7, less: 3 }, difficulty: 0.2 },
  ]],
  ws: { title: '더할까, 뺄까?', items: [
    { type: 'table', prompt: '이야기를 읽고 +나 −를 쓰고 답을 구하세요.', columns: ['이야기', '+ 또는 −', '답'], cells: [['귤 5개에 2개를 더 땄어요.', '', ''], ['귤 8개 가운데 2개를 먹었어요.', '', ''], ['공 3개에 4개를 더 가져왔어요.', '', ''], ['공 9개 가운데 7개를 나눠 줬어요.', '', '']], answer: '+ 7개, − 6개, + 7개, − 2개' },
    { type: 'figure', prompt: '그림을 보고 이야기에 맞는 식을 완성하세요. (더하는 이야기)', tool: 'tenframe', options: { twoColor: true, item: 'chip' }, figures: [{ state: { parts: [4, 3] }, caption: '4 ___ 3 = ' + BLANK }, { state: { parts: [2, 5] }, caption: '2 ___ 5 = ' + BLANK }], answer: '+, 7 / +, 7' },
    { type: 'choice', prompt: '"밤 6개 가운데 1개를 먹었어요." 알맞은 식에 ○ 하세요.', options: ['6 + 1 = 7', '6 − 1 = 5'], answer: '6 − 1 = 5' },
    { type: 'short', prompt: '"더 받았어요"와 "나눠 줬어요" 가운데 빼기 이야기에 쓰는 말은 무엇인가요? 까닭도 써 보세요.' },
  ], easy: { note: '많아지면 +, 적어지면 −예요. 이야기를 끝까지 읽어요.', items: [
    { type: 'table', prompt: '이야기를 읽고 +나 −를 쓰고 답을 구하세요.', columns: ['이야기', '+ 또는 −', '답'], cells: [['귤 3개에 2개를 더 땄어요.', '+', '5개'], ['귤 6개 가운데 1개를 먹었어요.', '', ''], ['공 2개에 2개를 더 가져왔어요.', '', '']], answer: '− 5개, + 4개' },
    { type: 'figure', prompt: '그림을 보고 식을 완성하세요. (더하는 이야기)', tool: 'tenframe', options: { twoColor: true, item: 'chip' }, figures: [{ state: { parts: [2, 2] }, caption: '2 + 2 = ' + BLANK }, { state: { parts: [3, 1] }, caption: '3 + 1 = ' + BLANK }], answer: '4, 4' },
    { type: 'choice', prompt: '"밤 5개 가운데 1개를 먹었어요." 알맞은 식에 ○ 하세요.', options: ['5 + 1', '5 − 1'], answer: '5 − 1' },
    { type: 'draw', prompt: '사과 4개를 그리고 1개를 더 그린 뒤 식을 써 보세요.' },
  ] } },
  diff: { easy: '칸 번호와 수 줄이 보이고 이야기 카드는 틀리면 까닭을 말하고 돌아와요.', base: '수 카드가 가려져 있어요. 더하거나 덜어 낸 뒤 지금 몇 개인지 수를 직접 골라요.', challenge: '칩이 흩어진 칸에 있어서 5칸 묶음으로 셀 수 없어요. 이야기와 식 짝짓기에서 같은 수가 나오는 이야기가 함께 나와요.' },
  notes: '자주 보이는 어려움: ① "가져왔어요/가져갔어요"를 구별하지 못한다 → 이야기 속 사과가 많아지는지 손으로 보여 준다. ② 큰 수에서 작은 수를 늘 뺀다 → 이야기 낱말을 먼저 짚는다. ③ 더하기와 빼기의 답이 둘 다 맞아 보인다 → 칩을 놓아 이야기를 확인한다. 9차시부터는 식 자체의 규칙(순서를 바꾸기)을 살핀다.',
}));
// ───────────────────────────── 9차시 (core · concept) ─────────────────────────────
L.push(lesson(9, {
  title: '더하는 순서를 바꾸어도 합이 같은지 확인하기',
  objective: '두 수를 더할 때 더하는 순서를 바꾸어도 합이 같음을 칩과 수직선으로 확인하고 말할 수 있다.',
  desc: 'two paper baskets swapped left and right, one holding blue marbles and the other yellow marbles, with the same total in both orders',
  text: '바꾸어 더해도 같아요',
  layers: [{ motif: 'house', x: 100, y: 214 }, { motif: 'star', x: 300, y: 214 }, { motif: 'star', x: 340, y: 224 }, { motif: 'tree', x: 420, y: 216, s: 0.9 }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"파란 구슬 2개와 노란 구슬 5개를 모으면? 이번에는 노란 구슬 5개와 파란 구슬 2개를 모으면?" 시연 단추로 두 순서를 차례로 보여 준다. "2 + 5와 5 + 2, 답이 같을까요 다를까요?" 먼저 짐작을 말하게 한다. 순서를 바꾸면 답도 바뀐다고 생각하는 학생이 있다 — 활동에서 직접 확인한다고 예고한다.', '더하는 순서를 바꾸면 답이 어떻게 될까요?'],
  demo: { tool: 'tenframe', options: { twoColor: true, item: 'chip', showWord: true }, sequence: [{ parts: [2, 5] }, { parts: [5, 2] }] },
  acts: [
    { id: 'a1', title: '활동 1. 순서를 바꾸어 모아 보기', minutes: 9, tool: 'tenframe',
      task: '두 가지 색 칩을 다른 순서로 모아요. 모두 몇 개인지 견주어요.',
      teacher: '"2 + 5를 해 보고, 5 + 2도 해 봐요. 모두 몇 개가 되었어요?" 두 번째 문항을 풀기 전에 "앞의 답과 같을까요?" 하고 짐작하게 한다. 답이 같은데도 "다시 센 것이라 다를 수 있다"고 하는 학생에게는 칩을 하나씩 짝지어 세게 한다.',
      levels: TW('chip'),
      items: [
        total('2 + 5 = ? 파란 칩 2개와 노란 칩 5개를 모아 보세요.', 2, 5, 0.1),
        total('5 + 2 = ? 파란 칩 5개와 노란 칩 2개를 모아 보세요.', 5, 2, 0.12,
          { predict: { q: '2 + 5와 5 + 2의 모두의 수는 어떨까요?', options: ['같아요', '달라요'], answer: 0 }, conclude: '순서를 바꾸어도 모두 7개예요. 2 + 5 = 5 + 2 = 7이에요.' }),
        total('3 + 6 = ? 파란 칩 3개와 노란 칩 6개를 모아 보세요.', 3, 6, 0.18),
        total('더 해 보기: 6 + 3 = ? 파란 칩 6개와 노란 칩 3개를 모아 보세요.', 6, 3, 0.2, { extra: true }),
      ] },
    { id: 'a2', title: '활동 2. 수직선에서 두 가지 길로 뛰기', minutes: 11, tool: 'numberline',
      task: '같은 두 수를 앞 수와 뒤 수를 바꾸어 뛰어요. 어디에 닿는지 견주어요.',
      teacher: '"3에서 4칸을 뛰어 봐요. 이번에는 4에서 3칸을 뛰어 봐요. 같은 곳에 닿았나요?" 처음 자리에서 먼저 뛰는 칸이 다를 뿐 도착한 수는 같음을 짚는다. 앞에서 뛴 칸을 합쳐 말하게 해 "3 + 4와 4 + 3이 같다"를 소리 내어 읽게 한다.',
      levels: NL,
      items: [
        jump('3 + 4를 수직선에서 뛰어 보세요. 어디에 닿나요?', 3, 7, 0.1),
        jump('4 + 3을 수직선에서 뛰어 보세요. 3 + 4와 같은 곳에 닿나요?', 4, 7, 0.12,
          { conclude: '4에서 3칸을 뛰어도 7에 닿아요. 3 + 4와 4 + 3은 같아요.' }),
        jump('1 + 7을 수직선에서 뛰어 보세요. 어디에 닿나요?', 1, 8, 0.15),
        jump('더 해 보기: 7 + 1을 수직선에서 뛰어 보세요. 어디에 닿나요?', 7, 8, 0.15, { extra: true }),
      ] },
    { id: 'a3', title: '활동 3. 합이 같은 식끼리 묶기', minutes: 6, tool: 'mindmap',
      task: '식 카드를 합이 같은 것끼리 두 곳으로 나누어 놓아요.',
      teacher: '"5 + 3과 3 + 5는 어디에 놓을까요?" 순서를 바꾼 식을 같은 곳에 놓게 한다. 한 곳에 두 식이 더 있는 문항에서는 "합이 같은 다른 식도 있어요. 2 + 6도 8이에요"처럼 새 짝을 찾게 한다.',
      levels: CARD_LV,
      items: [
        sortTo('합이 7인 식과 합이 8인 식으로 나누어 보세요.', '합이 같은 식', ['합이 7이에요', '합이 8이에요'], [['3 + 4', '6 + 1'], ['5 + 3', '2 + 6']], 0.15),
        sortTo('합이 6인 식과 합이 9인 식으로 나누어 보세요.', '합이 같은 식', ['합이 6이에요', '합이 9이에요'], [['2 + 4', '5 + 1'], ['4 + 5', '7 + 2']], 0.18),
        sortTo('더 해 보기: 합이 5인 식과 합이 9인 식으로 나누어 보세요.', '합이 같은 식', ['합이 5예요', '합이 9예요'], [['1 + 4', '3 + 2'], ['6 + 3', '8 + 1']], 0.22, { extra: true }),
      ] },
  ],
  wrap: ['"더하는 순서를 바꾸면 합이 어떻게 되나요?" 짝에게 3 + 4와 4 + 3을 말하며 확인하게 한다. 출구 1번에서 "달라요"를 고른 학생은 칩을 놓아 두 순서를 다시 견주어 보게 한다.', [
    { type: 'choice', prompt: '"4 + 5와 5 + 4의 합은 어떨까요?"', options: ['같아요', '달라요'], answer: 0, difficulty: 0.1, explain: '순서를 바꾸어도 합은 같아요. 둘 다 9예요.' },
    { type: 'choice', prompt: '3 + 6 = 9예요. 6 + 3은 얼마일까요?', options: ['6', '9', '18'], answer: 1, difficulty: 0.12, explain: '순서를 바꾸어도 합이 같아서 6 + 3 = 9예요.' },
    { type: 'tool', tool: 'tenframe', options: { twoColor: true, item: 'chip', showCount: false, askNumber: true, target: { parts: [7, 2], ask: 'total' } }, prompt: '7 + 2 = ? 하늘색 칩 7개와 주황색 칩 2개를 모아 보세요.', target: { parts: [7, 2], ask: 'total' }, difficulty: 0.2 },
  ]],
  ws: { title: '순서를 바꾸어 더하기', items: [
    { type: 'figure', prompt: '두 가지 사과를 모아 식을 완성하세요. 두 식의 답을 견주어 보세요.', tool: 'tenframe', options: { twoColor: true, item: 'apple' }, figures: [{ state: { parts: [2, 6] }, caption: '2 + 6 = ' + BLANK }, { state: { parts: [6, 2] }, caption: '6 + 2 = ' + BLANK }], answer: '8, 8' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '3 + 5 = 8 이므로 5 + 3 = ___     4 + 1 = 5 이므로 1 + 4 = ___     2 + 7 = 9 이므로 7 + 2 = ___', answer: '8, 5, 9' },
    { type: 'table', prompt: '합이 같은 식을 이어서 쓰세요.', columns: ['식', '순서를 바꾼 식', '합'], cells: [['1 + 6', '', ''], ['4 + 3', '', ''], ['2 + 5', '', '']], answer: '6 + 1 = 7, 3 + 4 = 7, 5 + 2 = 7' },
    { type: 'short', prompt: '5 + 2와 2 + 5가 같다는 것을 친구에게 어떻게 설명할지 써 보세요.' },
  ], easy: { note: '두 가지 색을 거꾸로 놓아도 모두의 수는 그대로예요.', items: [
    { type: 'figure', prompt: '두 가지 사과를 모아 식을 완성하세요.', tool: 'tenframe', options: { twoColor: true, item: 'apple' }, figures: [{ state: { parts: [1, 3] }, caption: '1 + 3 = ' + BLANK }, { state: { parts: [3, 1] }, caption: '3 + 1 = ' + BLANK }], answer: '4, 4' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '2 + 3 = 5 이므로 3 + 2 = ___     1 + 4 = 5 이므로 4 + 1 = ___', answer: '5, 5' },
    { type: 'table', prompt: '순서를 바꾸어 쓰고 합을 쓰세요.', columns: ['식', '순서를 바꾼 식', '합'], cells: [['1 + 2', '2 + 1', '3'], ['2 + 4', '', '']], answer: '4 + 2 = 6' },
    { type: 'draw', prompt: '파란 사과 2개와 빨간 사과 3개를 그리고, 순서를 바꾼 식도 써 보세요.' },
  ] } },
  diff: { easy: '칸 번호와 수 카드가 보이고 수직선에는 닿은 수가 보여요. 식 묶기에서는 틀리면 까닭을 말하고 돌아와요.', base: '수 카드가 가려져 있어요. 모은 뒤 모두 몇 개인지 수를 직접 골라요.', challenge: '칩이 흩어진 칸에 들어가서 5칸 묶음으로 셀 수 없어요. 수직선은 양 끝의 수만 보여요.' },
  notes: '자주 보이는 어려움: ① 순서를 바꾸면 답이 달라진다고 생각한다 → 칩 색만 바꾸어 놓고 모두를 센다. ② 합이 같은 식을 짝으로만 찾는다 → 1 + 6, 2 + 5, 3 + 4처럼 합이 같은 다른 식도 있음을 보여 준다. ③ 뺄셈도 순서를 바꾸어도 같다고 말한다 → 5 − 2와 2 − 5는 같지 않다고 5차시를 되짚는다. 이 규칙은 11차시에서 덧셈식과 뺄셈식의 관계로 이어진다.',
}));
// ───────────────────────────── 10차시 (practice · concept) ─────────────────────────────
L.push(lesson(10, {
  title: '아무것도 더하거나 빼지 않을 때와 모두 뺄 때 알아보기',
  objective: '어떤 수에 0을 더하거나 빼면 그 수가 그대로이고, 같은 수를 빼면 0이 됨을 말할 수 있다.',
  desc: 'an empty paper plate and a plate with apples side by side, a small rabbit looking at both, no apples added or taken',
  text: '0을 더하면? 모두 빼면?',
  layers: [{ motif: 'house', x: 100, y: 214 }, { motif: 'apple', x: 300, y: 232, s: 0.4 }, { motif: 'apple', x: 324, y: 232, s: 0.4 }, { motif: 'flower', x: 400, y: 238 }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"접시에 사과가 4개 있어요. 사과를 하나도 더 놓지 않으면 몇 개일까요?" 칠판에 "4 + 0 = 4"를 쓴다. "이번에는 사과 3개를 모두 먹으면 몇 개가 남을까요?" "3 − 3 = 0, 하나도 없어요." 0 + 4를 0이라고 답하는 학생이 있는지 살핀다 — 빈 접시에 4개를 놓은 모습을 떠올리게 한다.', '하나도 더하지 않거나 모두 빼면 몇 개가 될까요?'],
  demo: { tool: 'tenframe', options: { item: 'apple', showWord: true }, sequence: [{ count: 3 }, { count: 0 }] },
  acts: [
    { id: 'a1', title: '활동 1. 0을 더하고 빼며 칩 놓기', minutes: 9, tool: 'tenframe',
      task: '이야기를 읽고 칩을 놓아 몇 개가 되는지 알아봐요. 하나도 더하지 않거나 모두 덜어 내는 이야기예요.',
      teacher: '"빈 접시에 사과 5개를 놓아요. 0개를 먹으면 몇 개 남을까요?" 0이 들어간 이야기는 칩을 움직이지 않아도 되는 때가 있다고 알려 준다. 3 − 3을 3이라고 답하는 학생에게는 칩을 모두 덜어 내 빈 판을 보게 한다.',
      levels: ONE('chip', 'sky'),
      items: [
        { prompt: '빈 접시에 사과 4개를 놓아요. 더 놓지 않았어요(4 + 0). 접시에 모두 몇 개인가요?', state: { count: 0 }, target: { count: 4, more: 0 }, difficulty: 0.1 },
        { prompt: '빈 접시에 사과 5개를 놓아요. 먹은 사과가 없어요(5 − 0). 몇 개 남았나요?', state: { count: 0 }, target: { count: 5, less: 0 }, difficulty: 0.12,
          predict: { q: '5개에서 0개를 먹으면 몇 개 남을까요?', options: ['0개', '5개', '4개'], answer: 1 }, conclude: '아무것도 빼지 않으면 5 그대로예요. 5 − 0 = 5예요.' },
        less('접시에 사과가 3개 있어요. 3개를 모두 먹었어요(3 − 3). 몇 개 남았나요?', 3, 3, 0.18),
        less('더 해 보기: 접시에 사과가 6개 있어요. 6개를 모두 먹었어요(6 − 6). 몇 개 남았나요?', 6, 6, 0.22, { extra: true }),
      ] },
    { id: 'a2', title: '활동 2. 수직선에서 0 만나기', minutes: 11, tool: 'numberline',
      task: '수직선에서 0에서 시작해 앞으로 뛰거나, 처음 수와 같은 칸만큼 뒤로 뛰어 0에 닿아 봐요.',
      teacher: '"0에서 4칸을 뛰면 어디에 닿을까요?" 0에서 출발하는 것도 하나의 자리라고 짚는다. 모두 빼는 문항에서는 "9에서 9칸 뒤로 뛰면 어디예요?" 하고 묻고, 닿은 자리를 소리 내어 "영"이라고 읽게 한다.',
      levels: NL,
      items: [
        jump('0 + 4를 수직선에서 뛰어 보세요. 어디에 닿나요?', 0, 4, 0.1),
        jump('9 − 9를 수직선에서 뛰어 보세요. 어디에 닿나요?', 9, 0, 0.15,
          { conclude: '9에서 9칸을 뒤로 뛰면 0에 닿아요. 같은 수를 빼면 0이에요.' }),
        jump('7 − 7을 수직선에서 뛰어 보세요. 어디에 닿나요?', 7, 0, 0.15),
        jump('더 해 보기: 0 + 8을 수직선에서 뛰어 보세요. 어디에 닿나요?', 0, 8, 0.2, { extra: true }),
      ] },
    { id: 'a3', title: '활동 3. 답이 0인 식 가려내기', minutes: 6, tool: 'mindmap',
      task: '식 카드를 "답이 0이에요"와 "답이 0이 아니에요"로 나누어 놓아요.',
      teacher: '"5 − 5와 5 + 0은 답이 같을까요?" 계산해서 나누게 한다. 5 − 5와 0 + 5를 같은 칸에 놓는 학생에게는 칩을 놓아 보게 한다. 같은 수를 빼는 식은 답이 0, 0을 더하거나 빼는 식은 처음 수 그대로라는 것을 문장으로 말하게 한다.',
      levels: CARD_LV,
      items: [
        sortTo('식을 두 곳으로 나누어 보세요.', '답은 0일까?', ['답이 0이에요', '답이 0이 아니에요'], [['4 − 4', '0 + 0'], ['3 + 0', '6 − 0']], 0.15),
        sortTo('이번에도 두 곳으로 나누어 보세요.', '답은 0일까?', ['답이 0이에요', '답이 0이 아니에요'], [['8 − 8', '1 − 1'], ['0 + 7', '9 − 0']], 0.18),
        sortTo('더 해 보기: 식을 두 곳으로 나누어 보세요.', '답은 0일까?', ['답이 0이에요', '답이 0이 아니에요'], [['2 − 2', '9 − 9'], ['5 + 0', '0 + 3']], 0.22, { extra: true }),
      ] },
  ],
  wrap: ['"0을 더하거나 빼면 어떻게 되나요? 같은 수를 빼면요?" 짝에게 4 + 0과 4 − 4를 말하며 칩으로 보여 주게 한다. 출구 2번에서 9 − 0을 0이라고 답한 학생은 아무것도 빼지 않은 접시를 다시 보여 준다.', [
    { type: 'choice', prompt: '5 + 0은 얼마일까요?', options: ['0', '5', '50'], answer: 1, difficulty: 0.1, explain: '아무것도 더하지 않으면 5 그대로예요.' },
    { type: 'choice', prompt: '9 − 0은 얼마일까요?', options: ['0', '9', '10'], answer: 1, difficulty: 0.12, explain: '아무것도 빼지 않으면 9 그대로예요.' },
    { type: 'tool', tool: 'tenframe', options: { item: 'chip', color: 'sky', showCount: false, askNumber: true, target: { count: 7, less: 7 } }, state: { count: 7 }, prompt: '칩이 7개 있었는데 모두 덜어 냈어요(7 − 7). 몇 개 남았나요?', target: { count: 7, less: 7 }, difficulty: 0.2 },
  ]],
  ws: { title: '0이 들어간 덧셈과 뺄셈', items: [
    { type: 'figure', prompt: '그림을 보고 식을 완성하세요. (사과에 ✕ 를 그려 모두 먹은 것으로 생각해요)', tool: 'tenframe', options: { item: 'apple' }, figures: [{ state: { count: 4 }, caption: '4 − 4 = ' + BLANK }, { state: { count: 7 }, caption: '7 − 0 = ' + BLANK }, { state: { count: 0 }, caption: '0 + 5 = ' + BLANK }], answer: '0, 7, 5' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '6 + 0 = ___     8 − 8 = ___     0 + 9 = ___     3 − 0 = ___', answer: '6, 0, 9, 3' },
    { type: 'choice', prompt: '답이 0인 식에 ○ 하세요.', options: ['2 + 0', '5 − 5', '0 + 4'], answer: '5 − 5' },
    { type: 'short', prompt: '어떤 수에서 같은 수를 빼면 왜 0이 되는지 친구에게 말하듯 써 보세요.' },
  ], easy: { note: '아무것도 더하거나 빼지 않으면 그대로예요. 모두 빼면 0이에요.', items: [
    { type: 'figure', prompt: '그림을 보고 식을 완성하세요.', tool: 'tenframe', options: { item: 'apple' }, figures: [{ state: { count: 3 }, caption: '3 − 3 = ' + BLANK }, { state: { count: 5 }, caption: '5 + 0 = ' + BLANK }], answer: '0, 5' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '4 + 0 = ___     2 − 2 = ___', answer: '4, 0' },
    { type: 'choice', prompt: '답이 0인 식에 ○ 하세요.', options: ['1 − 1', '1 + 0'], answer: '1 − 1' },
    { type: 'draw', prompt: '빈 접시를 그리고 "접시에 사과가 몇 개일까요?" 하고 써 보세요.' },
  ] } },
  diff: { easy: '칸 번호와 수 줄이 보이고 수직선에는 닿은 수가 보여요. 식 나누기는 틀리면 까닭을 말하고 돌아와요.', base: '수 카드가 가려져 있어요. 놓은 뒤 몇 개인지 수를 직접 골라요.', challenge: '칩이 흩어진 칸에 있어서 5칸 묶음으로 셀 수 없어요. 수직선은 양 끝의 수만 보여요.' },
  notes: '자주 보이는 어려움: ① 5 + 0을 0이라고 답한다 → 접시에 5개가 있는데 더 놓지 않은 모습을 보여 준다. ② 3 − 3을 3이라고 답한다 → 칩을 모두 덜어 내 빈 판을 보게 한다. ③ 0은 "없는 것"이라 식에 쓸 수 없다고 생각한다 → 하나도 없는 것도 0이라고 쓴다고 알려 준다. 11차시에서 덧셈식과 뺄셈식의 사이를 살핀다.',
}));
// ───────────────────────────── 11차시 (core · application) ─────────────────────────────
L.push(lesson(11, {
  title: '덧셈식을 보고 짝이 되는 뺄셈식 찾기',
  objective: '모으기와 가르기를 바탕으로, 덧셈식과 짝이 되는 뺄셈식을 찾아 빈칸을 구할 수 있다.',
  desc: 'a paper seesaw with seven blue marbles balanced as three on one side and four on the other, a small paper rabbit pointing',
  text: '3 + 4 = 7, 7 − 3 = 4',
  layers: [{ motif: 'house', x: 100, y: 214 }, { motif: 'star', x: 310, y: 218 }, { motif: 'star', x: 350, y: 222 }, { motif: 'tree', x: 420, y: 216, s: 0.9 }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"사과 7개를 빨간 사과 3개와 초록 사과 몇 개로 가를 수 있을까요?" 시연 단추로 7개가 3개와 4개로 나뉘는 모습을 보여 준다. "3 + 4 = 7이면 7에서 3을 빼면 4가 돼요. 7 − 3 = 4." 덧셈식과 뺄셈식에 같은 세 수 3, 4, 7이 쓰인다는 것을 짚는다. 7 − 3의 답을 3으로 말하는 학생이 있는지 살핀다.', '3 + 4 = 7을 알면 7 − 3은 어떻게 풀 수 있을까요?'],
  demo: { tool: 'tenframe', options: { twoColor: true, item: 'apple', showWord: true }, sequence: [{ parts: [7, 0] }, { parts: [3, 4] }] },
  acts: [
    { id: 'a1', title: '활동 1. 빈칸에 들어갈 수 가르기로 찾기', minutes: 9, tool: 'tenframe',
      task: '모두의 수를 먼저 놓고, 앞의 수를 맞추어요. 남은 색 칩이 빈칸에 들어갈 수예요.',
      teacher: '"3 + □ = 8이에요. 8개를 먼저 놓고, 파란 칩 3개를 맞추면 노란 칩은 몇 개가 될까요?" 모두의 수를 고르는 학생에게는 "빈칸은 더하는 수예요. 모두의 수가 아니에요"라고 말한다. 가르기와 같은 활동임을 다시 짚는다.',
      levels: TW('chip'),
      items: [
        apart('3 + □ = 8이에요. 8개를 가르는데 파란 칩이 3개일 때, 노란 칩은 몇 개인가요?', 8, 3, 0.15),
        apart('6 + □ = 9예요. 9개를 가르는데 파란 칩이 6개일 때, 노란 칩은 몇 개인가요?', 9, 6, 0.18,
          { predict: { q: '6 + □ = 9에서 □는 6보다 클까요, 작을까요?', options: ['6보다 커요', '6보다 작아요'], answer: 1 }, conclude: '6 + 3 = 9예요. 9를 6과 3으로 가를 수 있어요.' }),
        apart('2 + □ = 7이에요. 7개를 가르는데 파란 칩이 2개일 때, 노란 칩은 몇 개인가요?', 7, 2, 0.15),
        apart('더 해 보기: 5 + □ = 6이에요. 6개를 가르는데 파란 칩이 5개일 때, 노란 칩은 몇 개인가요?', 6, 5, 0.22, { extra: true }),
      ] },
    { id: 'a2', title: '활동 2. 덧셈식과 같은 세 수로 뺄셈하기', minutes: 11, tool: 'tenframe',
      task: '덧셈식을 읽고, 모두의 수에서 한쪽 수만큼 덜어 내요. 남은 수가 다른 쪽 수예요.',
      teacher: '"4 + 5 = 9이니까 9개에서 4개를 덜어 내면 몇 개 남을까요?" 남은 수가 5가 되는 것을 보고 "더한 수가 남았네요"라고 말해 준다. 덜어 낸 수와 남은 수를 헷갈리는 학생에게는 식에서 두 수에 색연필로 표시하게 한다.',
      levels: ONE('chip', 'mint'),
      items: [
        less('3 + 4 = 7이에요. 칩 7개에서 3개를 덜어 내면 몇 개 남나요? (7 − 3)', 7, 3, 0.12),
        less('4 + 5 = 9예요. 칩 9개에서 4개를 덜어 내면 몇 개 남나요? (9 − 4)', 9, 4, 0.15),
        less('2 + 6 = 8이에요. 칩 8개에서 2개를 덜어 내면 몇 개 남나요? (8 − 2)', 8, 2, 0.15,
          { predict: { q: '8 − 2의 답은 2 + 6의 어느 수와 같을까요?', options: ['2', '6', '8'], answer: 1 }, conclude: '2 + 6 = 8이면 8 − 2 = 6이에요. 덧셈식과 뺄셈식은 같은 세 수로 이어져 있어요.' }),
        less('더 해 보기: 1 + 7 = 8이에요. 칩 8개에서 7개를 덜어 내면 몇 개 남나요? (8 − 7)', 8, 7, 0.2, { extra: true }),
      ] },
    { id: 'a3', title: '활동 3. 짝이 되는 식 잇기', minutes: 6, tool: 'mindmap',
      task: '덧셈식과 같은 세 수로 만든 뺄셈식을 이어요.',
      teacher: '"3 + 4 = 7과 짝이 되는 식은 어느 것일까요? 같은 세 수가 들어 있는지 봐요." 수가 하나라도 다르면 짝이 아니다. 이은 뒤 짝 식을 두 문장으로 "3 더하기 4는 7, 7 빼기 3은 4"처럼 읽게 한다.',
      levels: CARD_LV,
      items: [
        match('덧셈식과 짝이 되는 뺄셈식을 이어 보세요.', '짝이 되는 식', ['3 + 5 = 8', '2 + 6 = 8', '4 + 4 = 8'], ['8 − 3 = 5', '8 − 2 = 6', '8 − 4 = 4'], 0.2),
        match('이번에도 짝이 되는 식을 이어 보세요.', '짝이 되는 식', ['1 + 5 = 6', '4 + 2 = 6', '3 + 3 = 6'], ['6 − 1 = 5', '6 − 4 = 2', '6 − 3 = 3'], 0.18),
        match('더 해 보기: 짝이 되는 식을 이어 보세요.', '짝이 되는 식', ['5 + 3 = 8', '1 + 8 = 9'], ['8 − 5 = 3', '9 − 1 = 8'], 0.22, { extra: true }),
      ] },
  ],
  wrap: ['"덧셈식을 알면 뺄셈식도 풀 수 있는 까닭은?" 짝에게 3 + 4 = 7과 7 − 3 = 4를 말하게 한다. 출구 1번에서 3을 고른 학생은 칩 7개에서 4개를 덜어 내는 모습을 다시 보여 준다.', [
    { type: 'choice', prompt: '4 + 3 = 7이에요. 7 − 4는 얼마일까요?', options: ['3', '4', '11'], answer: 0, difficulty: 0.15, explain: '4와 3을 모으면 7이니까 7에서 4를 빼면 3이 남아요.' },
    { type: 'tool', tool: 'tenframe', options: { twoColor: true, item: 'chip', showCount: false, askNumber: true, target: { total: 9, parts: [5, null], ask: 'b' } }, prompt: '5 + □ = 9예요. 9개를 가르는데 하늘색 칩이 5개일 때, 주황색 칩은 몇 개인가요?', target: { total: 9, parts: [5, null], ask: 'b' }, difficulty: 0.25 },
    { type: 'choice', prompt: '8 − 3 = 5와 짝이 되는 덧셈식은 어느 것인가요?', options: ['3 + 5 = 8', '8 + 3 = 11'], answer: 0, difficulty: 0.2, explain: '3과 5를 더하면 8이 되어 같은 세 수 3, 5, 8을 써요.' },
  ]],
  ws: { title: '덧셈식과 뺄셈식의 짝', items: [
    { type: 'figure', prompt: '두 가지 칩을 모으면 모두 몇 개인지 쓰고, 짝이 되는 뺄셈식도 완성하세요.', tool: 'tenframe', options: { twoColor: true, item: 'chip' }, figures: [{ state: { parts: [2, 5] }, caption: '2 + 5 = ' + BLANK + ', 7 − 2 = ' + BLANK }, { state: { parts: [4, 4] }, caption: '4 + 4 = ' + BLANK + ', 8 − 4 = ' + BLANK }], answer: '7, 5 / 8, 4' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '3 + ___ = 9     6 + ___ = 7     ___ + 2 = 5', answer: '6, 1, 3' },
    { type: 'table', prompt: '덧셈식에 알맞은 뺄셈식을 쓰세요.', columns: ['덧셈식', '뺄셈식'], cells: [['5 + 2 = 7', ''], ['1 + 8 = 9', ''], ['4 + 2 = 6', '']], answer: '7 − 5 = 2(또는 7 − 2 = 5), 9 − 1 = 8, 6 − 4 = 2(또는 6 − 2 = 4)' },
    { type: 'short', prompt: '2 + 6 = 8을 알면 8 − 2의 답을 어떻게 구할 수 있는지 써 보세요.' },
  ], easy: { note: '모으기와 가르기를 떠올려요. 같은 세 수로 덧셈식과 뺄셈식을 만들어요.', items: [
    { type: 'figure', prompt: '두 가지 칩을 모으면 모두 몇 개인지 쓰고, 뺄셈식도 완성하세요.', tool: 'tenframe', options: { twoColor: true, item: 'chip' }, figures: [{ state: { parts: [2, 3] }, caption: '2 + 3 = ' + BLANK + ', 5 − 2 = ' + BLANK }, { state: { parts: [1, 3] }, caption: '1 + 3 = ' + BLANK + ', 4 − 1 = ' + BLANK }], answer: '5, 3 / 4, 3' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '2 + ___ = 4     1 + ___ = 3', answer: '2, 2' },
    { type: 'table', prompt: '덧셈식에 알맞은 뺄셈식을 쓰세요.', columns: ['덧셈식', '뺄셈식'], cells: [['2 + 3 = 5', '5 − 2 = 3'], ['4 + 1 = 5', '']], answer: '5 − 4 = 1(또는 5 − 1 = 4)' },
    { type: 'draw', prompt: '칩 4개와 칩 2개를 그리고 4 + 2 = 6, 6 − 4 = 2라고 써 보세요.' },
  ] } },
  diff: { easy: '칸 번호와 수 카드가 보이고 가르기 문항에서는 바구니 위에 목표 수가 나와요. 짝 잇기는 틀리면 까닭을 말하고 돌아와요.', base: '수 카드가 가려져 있어요. 가른 뒤 빈칸의 수를 직접 골라요.', challenge: '칩이 흩어진 칸에 있어서 5칸 묶음으로 셀 수 없어요. 짝 잇기에서 합이 같은 식이 여러 개 섞여 나와요.' },
  notes: '자주 보이는 어려움: ① 3 + □ = 8의 빈칸에 8을 쓴다 → 모두의 수와 더하는 수를 구별하고, 칩으로 8개를 놓아 3개를 맞춘다. ② 덧셈식과 짝이 되는 뺄셈식에서 세 수를 하나만 바꾼다 → 같은 세 수 3, 5, 8에 색연필로 표시한다. ③ 7 − 3의 답을 3이라고 한다 → 덜어 내고 남은 칩을 센다. 12차시에서 식으로 이야기를 지어 단원을 정리한다.',
}));
// ───────────────────────────── 12차시 (wrap · application) ─────────────────────────────
L.push(lesson(12, {
  title: '식을 보고 이야기를 지어 말하며 단원 정리하기',
  objective: '덧셈식과 뺄셈식을 보고 알맞은 이야기를 말하거나 고르고, 9까지의 수로 더하고 뺄 수 있다.',
  desc: 'a paper storybook open on a table with small paper animals acting out simple stories, each page showing a short equation',
  text: '식으로 이야기를 지어요',
  layers: [{ motif: 'house', x: 100, y: 214 }, { motif: 'star', x: 310, y: 218 }, { motif: 'flower', x: 350, y: 238 }, { motif: 'tree', x: 420, y: 216, s: 0.9 }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"2 + 6 = 8은 어떤 이야기가 될까요?" 한두 명에게 "연못에 오리 2마리가 있었는데 6마리가 더 왔어요. 모두 8마리예요"처럼 말하게 한다. "이번에는 7 − 4 = 3이에요." 오늘은 식으로 이야기를 지어 보고 지금까지 배운 것을 모아 본다고 말한다. 더하기 식으로 줄어드는 이야기를 말하는 학생이 있는지 살핀다.', '식을 보고 어떤 이야기가 될지 말해 봐요.'],
  demo: { tool: 'tenframe', options: { item: 'chip', color: 'mint', showWord: true }, sequence: [{ count: 2 }, { count: 8 }, { count: 4 }] },
  acts: [
    { id: 'a1', title: '활동 1. 식과 어울리는 이야기 잇기', minutes: 9, tool: 'mindmap',
      task: '식 카드와 어울리는 이야기를 이어요.',
      teacher: '"식에 +가 있으면 어떤 이야기일까요? −가 있으면요?" 이야기 속 수와 식의 수가 같은지도 확인한다. 같은 수로 +와 − 이야기가 모두 나오는 문항에서는 낱말(더 왔어요, 날아갔어요)에 밑줄을 긋게 한다.',
      levels: CARD_LV,
      items: [
        match('식과 어울리는 이야기를 이어 보세요.', '식과 이야기', ['2 + 6 = 8', '7 − 4 = 3', '5 + 3 = 8'], ['연못에 오리 2마리가 있었는데 6마리가 더 왔어요.', '사탕 7개 가운데 4개를 먹었어요.', '화분 5개에 3개를 더 가져왔어요.'], 0.15),
        match('이번에도 식과 어울리는 이야기를 이어 보세요.', '식과 이야기', ['9 − 2 = 7', '4 + 5 = 9', '6 − 6 = 0'], ['책 9권 가운데 2권을 빌려줬어요.', '구슬 4개와 구슬 5개를 한 통에 모았어요.', '풍선 6개가 모두 날아갔어요.'], 0.2),
        match('더 해 보기: 식과 어울리는 이야기를 이어 보세요.', '식과 이야기', ['8 − 5 = 3', '1 + 7 = 8'], ['빵 8개 가운데 5개를 먹었어요.', '귤 1개에 7개를 더 땄어요.'], 0.22, { extra: true }),
      ] },
    { id: 'a2', title: '활동 2. 더하기와 빼기 섞어 풀기', minutes: 11, tool: 'tenframe',
      task: '이야기를 읽고 칩을 더 놓거나 덜어 내요. 더하기와 빼기가 섞여 있어요.',
      teacher: '"먼저 이야기를 읽고 +인지 −인지 말해요." 단원 정리 활동이므로 틀린 문항은 칩을 다시 놓아 확인하게 한다. 3차시·8차시에서 헷갈린 학생이 있으면 이 활동에서 짝과 이야기를 다시 말하게 한다.',
      levels: ONE('chip', 'sky'),
      items: [
        more('연못에 오리가 3마리 있었는데 5마리가 더 왔어요. 모두 몇 마리인가요?', 3, 5, 0.12),
        less('수첩에 스티커가 9장 있었는데 3장을 친구에게 줬어요. 몇 장 남았나요?', 9, 3, 0.15),
        more('가방에 책이 4권 있었는데 4권을 더 넣었어요. 모두 몇 권인가요?', 4, 4, 0.18,
          { predict: { q: '4권에 4권을 더 넣으면 모두 몇 권쯤일까요?', options: ['4권보다 적어요', '4권이에요', '4권보다 많아요'], answer: 2 }, conclude: '같은 수를 더하면 4 + 4 = 8이에요. 8권이 되어요.' }),
        less('도시락에 김밥이 8개 있었는데 7개를 먹었어요. 몇 개 남았나요?', 8, 7, 0.2),
        more('더 해 보기: 칠판에 별이 1개 있었는데 8개를 더 붙였어요. 모두 몇 개인가요?', 1, 8, 0.24, { extra: true }),
      ] },
    pair('a3', '활동 3. 짝에게 식으로 이야기 내기', 6, '식 하나를 골라 이야기를 지어 짝에게 말해요. 짝은 칩으로 놓아 맞는지 확인해요.',
      '짝끼리 "나는 6 − 2로 이야기를 지을게. 사탕 6개 가운데 2개를 먹었어요"처럼 식과 이야기를 번갈아 낸다. 듣는 사람이 칩으로 놓아 답을 구하고 식과 같은지 확인한다. 식과 이야기의 +, −가 어긋나면 "이야기에서 많아졌나요, 적어졌나요?"를 먼저 묻는다.',
      ['식 하나를 골라 이야기를 짓고, 짝이 칩으로 놓은 뒤 "다 했어요"를 누르세요.', '역할을 바꾸어 짝의 이야기를 칩으로 놓고 "다 했어요"를 누르세요.', '오늘 배운 것 가운데 가장 어려웠던 것을 짝에게 말하고 "다 했어요"를 누르세요.'], 'tenframe', ONE('chip', 'sky')),
  ],
  wrap: ['"더하기와 빼기는 이야기에서 어떻게 달라지나요?" 짝에게 늘어나면 더하기, 줄어들면 빼기라는 말을 자기 이야기로 해 보게 한다. 출구에서 틀린 문항은 다음 단원(비교하기)에서 수를 견줄 때 먼저 되짚는다.', [
    { type: 'choice', prompt: '"새 5마리에 3마리가 더 왔어요." 모두 몇 마리인가요?', options: ['2마리', '7마리', '8마리'], answer: 2, difficulty: 0.12, explain: '5 + 3 = 8이에요. 8마리예요.' },
    { type: 'choice', prompt: '9 − 4와 어울리는 이야기에 ○ 하세요.', options: ['귤 9개 가운데 4개를 먹었어요.', '귤 9개에 4개를 더 땄어요.'], answer: 0, difficulty: 0.12, explain: '빼기 식은 줄어드는 이야기와 어울려요.' },
    { type: 'tool', tool: 'tenframe', options: { item: 'chip', color: 'mint', showCount: false, askNumber: true, target: { count: 5, more: 4 } }, state: { count: 5 }, prompt: '컵이 5개 있었는데 4개를 더 놓았어요. 모두 몇 개인가요?', target: { count: 5, more: 4 }, difficulty: 0.2 },
  ]],
  ws: { title: '덧셈과 뺄셈 정리', items: [
    { type: 'table', prompt: '식을 계산하고, 더하는 이야기인지 빼는 이야기인지 ○ 하세요.', columns: ['식', '답', '이야기'], cells: [['6 + 2', '', '더하기 / 빼기'], ['9 − 5', '', '더하기 / 빼기'], ['3 + 6', '', '더하기 / 빼기'], ['7 − 7', '', '더하기 / 빼기']], answer: '8 더하기, 4 빼기, 9 더하기, 0 빼기' },
    { type: 'figure', prompt: '그림을 보고 더하는 식을 완성하세요.', tool: 'tenframe', options: { twoColor: true, item: 'apple' }, figures: [{ state: { parts: [4, 2] }, caption: '4 + 2 = ' + BLANK }, { state: { parts: [5, 3] }, caption: '5 + 3 = ' + BLANK }], answer: '6, 8' },
    { type: 'choice', prompt: '"풍선 8개 가운데 3개가 터졌어요." 알맞은 식에 ○ 하세요.', options: ['8 + 3 = 11', '8 − 3 = 5', '3 − 8 = 5'], answer: '8 − 3 = 5' },
    { type: 'short', prompt: '식 7 − 2 = 5에 어울리는 이야기를 지어 써 보세요.' },
  ], easy: { note: '많아지면 +, 적어지면 −예요. 식을 읽고 이야기를 떠올려요.', items: [
    { type: 'table', prompt: '식을 계산하세요.', columns: ['식', '답'], cells: [['3 + 2', ''], ['5 − 1', ''], ['2 + 4', '']], answer: '5, 4, 6' },
    { type: 'figure', prompt: '그림을 보고 더하는 식을 완성하세요.', tool: 'tenframe', options: { twoColor: true, item: 'apple' }, figures: [{ state: { parts: [2, 2] }, caption: '2 + 2 = ' + BLANK }, { state: { parts: [3, 1] }, caption: '3 + 1 = ' + BLANK }], answer: '4, 4' },
    { type: 'choice', prompt: '"공 5개 가운데 2개가 굴러갔어요." 알맞은 식에 ○ 하세요.', options: ['5 + 2', '5 − 2'], answer: '5 − 2' },
    { type: 'draw', prompt: '오늘 배운 덧셈 이야기를 그림으로 그려 보세요.' },
  ] } },
  diff: { easy: '칸 번호와 수 줄이 보이고 이야기 카드는 틀리면 까닭을 말하고 돌아와요.', base: '수 카드가 가려져 있어요. 더하거나 덜어 낸 뒤 몇 개인지 수를 직접 골라요.', challenge: '칩이 흩어진 칸에 있어서 5칸 묶음으로 셀 수 없어요. 식과 이야기 잇기에 0이 든 식(6 − 6)이 나와요.' },
  notes: '자주 보이는 어려움: ① 식의 기호와 이야기의 늘고 줆이 어긋난다 → 이야기에서 많아지는지 적어지는지 먼저 말한다. ② 같은 수를 더한 이야기(4 + 4)에서 4를 그대로 답한다 → 칩을 두 번 놓아 센다. ③ 0이 든 식에서 답을 주저한다 → 10차시를 되짚는다. 다음 단원(비교하기)에서는 길이·무게·넓이·양을 견주어 본다.',
}));
// @@NEXT@@
PaperLessons.registerUnit({
  id: UID, schema: 'edu-unit.v1', catalogUnit: CU,
  grade: 1, subject: '수학', unitTitle: UT,
  flow: '1차시에서 사과가 더 들어오면 이어 세어 모두 구하는 더하기를 알고, 2차시(기존 차시)에서 두 수를 모으고 가르는 활동으로 덧셈의 뜻을 단단히 합니다. 3차시에서 사과를 먹어 남은 수를 거꾸로 세는 빼기의 뜻을 알고, 4~5차시에서 이야기를 3 + 2 = 5, 5 − 2 = 3처럼 식으로 쓰고 읽습니다. 6~8차시는 놀이터·꽃집·시장 이야기에서 식을 만들어 풀고, 늘어나는지 줄어드는지 보고 더할지 뺄지 가립니다. 9~11차시는 더하는 순서를 바꾸어도 합이 같고, 0을 더하거나 빼면 그대로이며, 같은 수를 빼면 0이 되고, 덧셈식과 같은 세 수로 뺄셈식이 짝이 됨을 칩과 수직선으로 확인합니다. 12차시에서 식으로 이야기를 짓고 더하기와 빼기를 섞어 풀며 단원을 정리합니다. 수는 모두 9까지, 한 자리끼리만 다룹니다.',
  refs: { 2: 'g1-math-compose' },
  lessons: L,
});
})();
