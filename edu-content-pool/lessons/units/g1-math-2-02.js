/* 1학년 2학기 2. 덧셈과 뺄셈(1) — 단원 파일(차시 12개).
 * 흐름: 더하는 이야기·빼는 이야기 가르기(1) → 사과를 더 놓고 덜어 내기(2) → 덧셈식·뺄셈식으로 쓰고 읽기(3) → 수직선에서 오른쪽·왼쪽으로 뛰기(4)
 *      → 이야기에 맞는 식 고르고 답 구하기(5) → 몇십·몇십몇에 더하고 빼기, 받아올림·받아내림 없는 범위(6)
 *      → 세 수를 더할 때 순서 바꾸기(7) → 합이 같은 세 수 묶기(8) → 세 수의 뺄셈은 앞에서부터(9) → 더하고 빼기 섞인 세 수(10)
 *      → 이야기 속 세 수 계산(11) → 두 자리 세 수까지 단원 정리(12).
 * 두 자리 수 계산은 모두 받아올림·받아내림이 없는 범위다(받아올림·받아내림은 2학년 2단원 이후).
 */
(function () {
const UID = 'g1-math-2-02', CU = 'g1-수학-2학기-2', UT = '2. 덧셈과 뺄셈(1)', STD = ['[2수01-03]', '[2수01-05]', '[2수01-08]'];
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
// 수업 하나의 공통 겉옷: 도입 7분 + 전개 26분 + 정리 7분 = 40분
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
// 사과·칩 놓기 교구 단계: 쉬움 = 칸 번호와 수 카드, 기본 = 수 카드 가림, 도전 = 흩어진 칸
const PUT = { easy: { item: 'apple', showWord: true, cellNumbers: true, revealAfterCheck: true }, base: { item: 'apple', showCount: false }, challenge: { item: 'apple', showCount: false, scatter: true } };
const PUTC = { easy: { item: 'chip', color: 'mint', showWord: true, cellNumbers: true, revealAfterCheck: true }, base: { item: 'chip', color: 'mint', showCount: false }, challenge: { item: 'chip', color: 'mint', showCount: false, scatter: true } };
// 두 색 모으기·가르기 단계
const TWO = { easy: { twoColor: true, item: 'apple', showWord: true, cellNumbers: true }, base: { twoColor: true, item: 'apple', showCount: false, askNumber: true, showGoal: true }, challenge: { twoColor: true, item: 'apple', showCount: false, askNumber: true, scatter: true } };
const TWOC = { easy: { twoColor: true, item: 'chip', showWord: true, cellNumbers: true }, base: { twoColor: true, item: 'chip', showCount: false, askNumber: true, showGoal: true }, challenge: { twoColor: true, item: 'chip', showCount: false, askNumber: true, scatter: true } };
// 카드 판 단계
const CARD = { easy: { live: true, instant: true }, base: {}, challenge: {} };
// 수직선 뛰기 단계: 눈금 글자와 도착 수가 쉬움에서 더 보인다
const JUMP = { easy: { mode: 'jump', labels: 'all', showValue: true }, base: { mode: 'jump', labels: 'all' }, challenge: { mode: 'jump', labels: 'major' } };
const more = (prompt, count, plus, d) => ({ prompt, state: { count }, target: { count, more: plus }, difficulty: d, hints: [
  '더하는 이야기예요. 처음 있던 것은 그대로 두고, 더 온 것만 하나씩 놓아요.',
  '처음 있던 것은 건드리지 않았는지, 더 놓은 것만 센 것이 맞는지 살펴봐요.',
  `${count}개에서 ${plus}개를 더 놓으면 모두 ${count + plus}개예요.`] });
const less = (prompt, count, minus, d) => ({ prompt, state: { count }, target: { count, less: minus }, difficulty: d, hints: [
  '빼는 이야기예요. 없어진 것만 하나씩 덜어 내고, 남은 것을 세어 봐요.',
  '덜어 낸 것만 센 것이 맞는지, 남은 것을 다시 세어 봐요.',
  `${count}개에서 ${minus}개를 덜어 내면 ${count - minus}개가 남아요.`] });
const add3 = (prompt, a, b, c, d) => ({ prompt, state: { count: a }, target: { count: a, more: b + c }, difficulty: d, hints: [
  '세 수를 더하는 이야기예요. 처음 있던 것에 두 번에 걸쳐 더 놓고, 마지막에 모두 세어요.',
  '처음 있던 것과 더한 것을 모두 합해 센 것이 맞는지 살펴봐요.',
  `${a}개에 ${b}개를 더하고 또 ${c}개를 더하면 모두 ${a + b + c}개예요.`] });
const mix = (prompt, a, b, c, d) => ({ prompt, state: { count: a }, target: { count: a, more: b, less: c }, difficulty: d, hints: [
  '더하는 이야기와 빼는 이야기가 함께 있어요. 이야기 차례대로 더 놓고 덜어 내요.',
  '더 놓은 것과 덜어 낸 것을 이야기 차례대로 했는지 살펴봐요.',
  `${a}개에 ${b}개를 더하면 ${a + b}개이고, 거기서 ${c}개를 덜어 내면 ${a + b - c}개예요.`] });
const join = (prompt, a, b, d) => ({ prompt, target: { parts: [a, b], ask: 'total' }, difficulty: d });
const rest = (prompt, total, a, d) => ({ prompt, target: { total, parts: [a, null], ask: 'b' }, difficulty: d });
const sortCards = (prompt, topic, slots, cards, d, extra) => ({ prompt, toolOptions: { topic, slots, cards: cards.map((c) => c[0]) },
  target: { sort: Object.fromEntries(slots.map((s) => [s, cards.filter((c) => c[1] === s).map((c) => c[0])])) }, difficulty: d, ...(extra ? { extra: true } : {}) });
const matchCards = (prompt, topic, pairs, spare, d, extra) => ({ prompt, toolOptions: { mode: 'match', topic, slots: pairs.map((p, i) => ({ id: `s${i + 1}`, label: p[0] })), cards: [...pairs.map((p) => p[1]), ...(spare || [])] },
  target: { match: Object.fromEntries(pairs.map((p, i) => [`s${i + 1}`, p[1]])) }, difficulty: d, ...(extra ? { extra: true } : {}) });
const pickCards = (prompt, topic, basket, cards, right, d) => ({ prompt, toolOptions: { mode: 'pick', topic, basket, cards }, target: { pick: right }, difficulty: d });
const orderCards = (prompt, topic, steps, d, extra) => ({ prompt, toolOptions: { mode: 'order', topic, cards: steps.map((s) => ({ id: s, text: s })) }, target: { order: steps }, difficulty: d, ...(extra ? { extra: true } : {}) });
// 수직선 뛰기: from에서 end까지 한 번에 hop씩(hop을 정하지 않으면 눈금 한 칸씩)
const jump = (prompt, from, end, o, d, extra) => ({ prompt, toolOptions: Object.assign({ min: o.min, max: o.max, step: o.step || 1, fixedFrom: from }, o.hop ? { hopStep: o.hop, hopSize: o.hop } : { hopSize: o.size || 1 }, o.sub ? { sub: o.sub } : {}), target: { from, end }, difficulty: d, ...(extra ? { extra: true } : {}) });
const pair = (id, title, minutes, task, teacher, prompts, tool, levels) => ({ id, title, minutes, tool, pair: true, task, teacher, levels, items: prompts.map((prompt) => ({ prompt, free: true, difficulty: 0 })) });
const L = [];
// ───────────────────────────── 1차시 (intro) ─────────────────────────────
L.push(lesson(1, {
  title: '이야기를 듣고 더하는 말과 빼는 말 찾기',
  objective: '이야기에서 늘어나는 이야기와 줄어드는 이야기를 가르고, 사과를 더 놓거나 덜어 내어 나타낼 수 있다.',
  desc: 'a friendly rabbit adding more carrots into a basket on one side and giving some carrots away on the other side',
  text: '더해요? 빼요?',
  layers: [{ motif: 'tree', x: 90, y: 214, s: 1.1 }, { motif: 'house', x: 390, y: 216, s: 0.9 }, { motif: 'flower', x: 250, y: 238 }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"접시에 사과가 3개 있어요. 친구가 2개를 더 가져왔어요. 사과가 늘었을까요, 줄었을까요?" 시연 단추로 사과가 3개에서 5개로 늘고 다시 2개로 줄어드는 모습을 보여 준다. 늘어나는 이야기와 줄어드는 이야기를 손짓(양팔 벌리기, 오므리기)으로 말해 보게 하고, "사과가 나오면 무조건 더한다"고 짐작하는 학생이 있는지 살핀다.', '사과가 늘어나는지 줄어드는지 이야기를 듣고 말해 봐요.'],
  demo: { tool: 'tenframe', options: { item: 'apple', showWord: true }, sequence: [{ count: 3 }, { count: 5 }, { count: 2 }] },
  acts: [
    { id: 'a1', title: '활동 1. 더하는 이야기와 빼는 이야기 나누기', minutes: 9, tool: 'mindmap',
      task: '이야기 카드를 읽고 늘어나면 "더하는 이야기", 줄어들면 "빼는 이야기"에 놓아요.',
      teacher: '"새가 더 날아왔어요. 새가 많아졌나요, 적어졌나요?" 늘면 더하는 이야기, 줄면 빼는 이야기다. "나누어 주었어요"를 더하는 말로 고르는 학생에게는 내 것이 줄었는지 물어, 받는 쪽과 주는 쪽을 가려 보게 한다.',
      levels: CARD,
      items: [
        sortCards('이야기 카드를 더하는 이야기와 빼는 이야기로 나누어 보세요.', '이야기 나누기', ['더하는 이야기', '빼는 이야기'], [
          ['새 3마리에 2마리가 더 왔어요', '더하는 이야기'], ['빵 5개 중 2개를 먹었어요', '빼는 이야기'], ['연필 4자루를 더 샀어요', '더하는 이야기'], ['풍선 6개 중 1개가 날아갔어요', '빼는 이야기']], 0.05),
        sortCards('이번에도 이야기 카드를 나누어 보세요.', '이야기 나누기', ['더하는 이야기', '빼는 이야기'], [
          ['구슬 2개를 더 받았어요', '더하는 이야기'], ['귤 7개 중 3개를 나누어 주었어요', '빼는 이야기'], ['꽃 4송이에 3송이를 더 심었어요', '더하는 이야기'], ['컵 8개 중 4개를 치웠어요', '빼는 이야기']], 0.1),
        sortCards('물고기와 과자 이야기도 나누어 보세요.', '이야기 나누기', ['더하는 이야기', '빼는 이야기'], [
          ['어항에 물고기 5마리가 더 들어왔어요', '더하는 이야기'], ['과자 9개 중 2개를 먹었어요', '빼는 이야기'], ['친구 2명이 더 놀러 왔어요', '더하는 이야기'], ['공 6개 중 1개를 잃어버렸어요', '빼는 이야기']], 0.15),
      ] },
    { id: 'a2', title: '활동 2. 사과를 더 놓거나 덜어 내기', minutes: 10, tool: 'tenframe',
      task: '이야기에 맞게 사과를 더 놓거나 덜어 내요. 마지막에 남은 사과를 세어요.',
      teacher: '"더하는 이야기는 사과를 어떻게 해요? 빼는 이야기는요?" 더 놓는 이야기에서 처음 사과를 빼고 새로 놓은 것만 세는 학생이 있다 — 처음 사과 위에 손을 얹고 "모두" 몇 개인지 다시 세게 한다.',
      levels: PUT,
      items: [more('접시에 사과 3개가 있어요. 2개를 더 놓아 보세요.', 3, 2, 0.05), less('사과 7개 중 3개를 먹었어요. 먹은 만큼 덜어 내 보세요.', 7, 3, 0.1),
        more('바구니에 사과 4개가 있어요. 4개를 더 담아 보세요.', 4, 4, 0.12), less('사과 9개 중 5개를 나누어 주었어요. 덜어 내 보세요.', 9, 5, 0.15),
        { ...more('더 해 보기: 사과 5개에 3개를 더 놓아 보세요.', 5, 3, 0.15), extra: true }] },
    pair('a3', '활동 3. 짝에게 이야기 들려주기', 7, '사과로 이야기를 만들어요. 짝은 더하는 이야기인지 빼는 이야기인지 맞혀요.',
      '짝끼리 번갈아 이야기를 만든다. "사과 6개 중 2개를 먹었어요"처럼 말하면 짝이 사과를 덜어 낸다. 이야기를 듣고 놓은 사과가 이야기와 맞는지 둘이 함께 세어 본다.',
      ['짝이 말한 이야기대로 사과를 놓고 "다 했어요"를 누르세요.', '이번에는 빼는 이야기를 만들어 사과를 덜어 내고 "다 했어요"를 누르세요.', '더하는 이야기를 만들어 사과를 더 놓고 "다 했어요"를 누르세요.'], 'tenframe', PUT),
  ],
  wrap: ['"더하는 이야기에서는 사과가 어떻게 되나요? 빼는 이야기에서는요?" 짝에게 손짓으로 보여 주게 한다. 출구 1번을 틀린 학생은 "나누어 주었다"를 더하는 말로 읽었는지 다음 시간에 먼저 살핀다.', [
    { type: 'choice', prompt: '"사탕 8개 중 3개를 먹었어요." 어떤 이야기인가요?', options: ['더하는 이야기', '빼는 이야기'], answer: 1, difficulty: 0.08, explain: '먹어서 사탕이 줄었어요. 줄어드니까 빼는 이야기예요.' },
    { type: 'tool', tool: 'tenframe', options: { item: 'chip', color: 'mint', showCount: false }, state: { count: 6 }, prompt: '칩 6개 중 2개를 덜어 내 보세요.', target: { count: 6, less: 2 }, difficulty: 0.1 },
    { type: 'choice', prompt: '"딸기 2개에 1개를 더 받았어요." 딸기는 어떻게 되었나요?', options: ['많아졌어요', '적어졌어요'], answer: 0, difficulty: 0.05, explain: '더 받았으니 딸기가 많아졌어요.' },
  ]],
  ws: { title: '더하는 이야기, 빼는 이야기', items: [
    { type: 'choice', prompt: '더하는 이야기에 ○ 하세요.', options: ['귤 5개 중 2개를 먹었어요', '귤 5개에 2개를 더 받았어요'], answer: '귤 5개에 2개를 더 받았어요' },
    { type: 'choice', prompt: '빼는 이야기에 ○ 하세요.', options: ['공 4개에 1개를 더 샀어요', '공 4개 중 1개를 잃어버렸어요'], answer: '공 4개 중 1개를 잃어버렸어요' },
    { type: 'figure', prompt: '사과는 몇 개인지 세어서 쓰세요.', tool: 'tenframe', options: { item: 'apple' }, figures: [{ state: { count: 3 }, caption: BLANK }, { state: { count: 5 }, caption: BLANK }, { state: { count: 7 }, caption: BLANK }], answer: '3, 5, 7' },
    { type: 'table', prompt: '이야기를 읽고 ○ 하세요.', columns: ['이야기', '더해요', '빼요'], cells: [['새 3마리에 1마리가 더 왔어요', '○', ''], ['풍선 6개 중 2개가 터졌어요', '', ''], ['꽃 2송이를 더 심었어요', '', '']], answer: '풍선 6개 중 2개가 터졌어요 → 빼요, 꽃 2송이를 더 심었어요 → 더해요' },
    { type: 'draw', prompt: '사과 4개에 2개를 더 그려 보세요.' },
  ], easy: { note: '늘어나면 더하는 이야기, 줄어들면 빼는 이야기예요.', items: [
    { type: 'choice', prompt: '더하는 이야기에 ○ 하세요.', options: ['빵 3개를 더 받았어요', '빵 3개를 먹었어요'], answer: '빵 3개를 더 받았어요' },
    { type: 'figure', prompt: '사과는 몇 개인지 세어서 쓰세요.', tool: 'tenframe', options: { item: 'apple' }, figures: [{ state: { count: 2 }, caption: BLANK }, { state: { count: 4 }, caption: BLANK }], answer: '2, 4' },
    { type: 'choice', prompt: '빼는 이야기에 ○ 하세요.', options: ['구슬 5개 중 1개를 잃어버렸어요', '구슬 5개를 더 샀어요'], answer: '구슬 5개 중 1개를 잃어버렸어요' },
    { type: 'draw', prompt: '사과 3개를 그리고 1개에 × 해 보세요.' },
  ] } },
  diff: { easy: '이야기 카드를 맞는 칸에 놓으면 바로 초록 테두리가 생기고, 사과 칸에 번호가 있어 하나씩 짚기 쉬워요.', base: '카드를 스스로 나누고, 사과 수 카드가 가려져 직접 세어요.', challenge: '사과가 흩어진 칸에 들어가서 묶음으로 셀 수 없어요. 더하거나 덜어 낸 뒤 처음부터 다시 세어요.' },
  notes: '자주 보이는 어려움: ① "나누어 주었어요", "잃어버렸어요" 같은 말을 더하는 말로 읽는다 → 내 것이 늘었는지 줄었는지 사과로 보여 준다. ② 더 놓는 이야기에서 새로 놓은 것만 센다 → 처음 사과와 합쳐 모두 센다. ③ 사과가 나오면 무조건 더한다고 짐작한다 → 줄어드는 이야기를 먼저 읽고 판단한다. 식으로 쓰는 것은 3차시에서 이어서 한다.',
}));
// ───────────────────────────── 2차시 (practice) ─────────────────────────────
L.push(lesson(2, {
  title: '칩을 모으고 덜어 내며 이야기하기',
  objective: '두 가지 색 칩을 모으면 모두 몇 개인지, 칩을 덜어 내면 몇 개가 남는지 놓아서 구할 수 있다.',
  desc: 'a little bear sorting mint and peach buttons into a wooden tray, with some buttons set aside in a small cup',
  text: '모으면? 덜어 내면?',
  layers: [{ motif: 'tree', x: 100, y: 214, s: 1.0 }, { motif: 'star', x: 150, y: 90, s: 0.6 }, { motif: 'star', x: 330, y: 84, s: 0.6 }, { motif: 'flower', x: 360, y: 236, color: 'lavender' }],
  intro: ['"어제는 이야기를 듣고 더하는지 빼는지 정했어요. 오늘은 칩으로 모두 몇 개인지, 몇 개가 남는지 구해 봐요." 시연 단추로 하늘색 칩 3개와 주황색 칩 2개를 모으는 모습을 보여 준다. "하늘색 3개 다음에 주황색을 이어서 세면 되겠지요?" 하고 말해 준다. 모은 뒤 처음부터 다시 세는 학생이 있는지 살핀다.', '칩 두 가지를 모으면 모두 몇 개일까요? 이어서 세어 봐요.'],
  demo: { tool: 'tenframe', options: { twoColor: true, item: 'chip', showWord: true }, sequence: [{ parts: [3, 0] }, { parts: [3, 2] }] },
  acts: [
    { id: 'a1', title: '활동 1. 칩 두 무더기를 모으기', minutes: 9, tool: 'tenframe',
      task: '하늘색 칩을 먼저 놓고 주황색 칩을 이어서 놓아요. 모두 몇 개인지 수를 골라요.',
      teacher: '"하늘색 칩 4개 다음부터 이어서 세어 봐요. 다섯, 여섯…" 처음부터 하나씩 다시 세면 시간이 오래 걸린다고 말해 주고, 앞 수에서 이어 세는 모습을 칭찬한다. 모은 칩 수를 하늘색 칩 수와 같다고 고르는 학생에게는 주황색 칩을 아직 세지 않았음을 짚어 준다.',
      levels: TWOC,
      items: [join('하늘색 칩 4개와 주황색 칩 2개를 모아요. 모두 몇 개일까요?', 4, 2, 0.08), join('하늘색 칩 3개와 주황색 칩 5개를 모아요. 모두 몇 개일까요?', 3, 5, 0.12),
        join('하늘색 칩 6개와 주황색 칩 3개를 모아요. 모두 몇 개일까요?', 6, 3, 0.18), join('더 해 보기: 하늘색 칩 2개와 주황색 칩 7개를 모아요. 모두 몇 개일까요?', 2, 7, 0.22)] },
    { id: 'a2', title: '활동 2. 칩을 덜어 내고 남은 칩 세기', minutes: 10, tool: 'tenframe',
      task: '칩을 먼저 놓고 이야기만큼 덜어 내요. 남은 칩을 세어요.',
      teacher: '"덜어 낸 칩은 몇 개예요? 남은 칩은 몇 개예요?" 덜어 낸 칩 수를 남은 수로 말하는 학생이 있다 — 바구니로 돌아간 칩과 칸에 남은 칩을 손으로 나누어 가리키게 한다.',
      levels: PUTC,
      items: [less('칩 8개 중 3개를 친구에게 주었어요. 주고 남은 칩을 놓아 보세요.', 8, 3, 0.1), less('칩 6개 중 1개를 잃어버렸어요. 잃어버린 만큼 덜어 내 보세요.', 6, 1, 0.08),
        less('칩 10개 중 4개를 썼어요. 쓴 만큼 덜어 내 보세요.', 10, 4, 0.18), less('칩 7개 중 5개를 모두 나누어 주었어요. 덜어 내 보세요.', 7, 5, 0.2)] },
    { id: 'a3', title: '활동 3. 하나의 수를 둘로 가르기', minutes: 7, tool: 'tenframe',
      task: '칩 모두를 놓아요. 한쪽 색 수를 맞추고, 다른 색은 몇 개인지 세어요.',
      teacher: '"7개 중에서 하늘색이 3개예요. 주황색은 몇 개일까요?" 빼는 이야기에서 남은 수가 어떻게 나오는지 연결한다. 모두의 수를 그대로 고르는 학생에게는 하늘색은 세지 않는다고 짚어 준다.',
      levels: TWOC,
      items: [rest('칩 7개를 하늘색 3개와 주황색 몇 개로 갈라요. 주황색은 몇 개?', 7, 3, 0.15), rest('칩 9개를 하늘색 5개와 주황색 몇 개로 갈라요. 주황색은 몇 개?', 9, 5, 0.2),
        rest('칩 6개를 하늘색 4개와 주황색 몇 개로 갈라요. 주황색은 몇 개?', 6, 4, 0.15)] },
  ],
  wrap: ['"칩을 모으면 몇 개예요? 덜어 내면요?" 짝에게 칩 이야기를 하나씩 말하게 한다. 출구 2번을 틀린 학생은 덜어 낸 수와 남은 수를 헷갈리는 것이므로 다음 시간에 칩을 가리키며 다시 세게 한다.', [
    { type: 'choice', prompt: '하늘색 칩 2개와 주황색 칩 4개를 모으면 모두 몇 개인가요?', options: ['2개', '4개', '6개'], answer: 2, difficulty: 0.1, explain: '2에서 3, 4, 5, 6 하고 이어 세면 모두 6개예요.' },
    { type: 'tool', tool: 'tenframe', options: { item: 'chip', color: 'mint', showCount: false }, state: { count: 9 }, prompt: '칩 9개 중 4개를 덜어 내 남은 칩을 놓아 보세요.', target: { count: 9, less: 4 }, difficulty: 0.15 },
    { type: 'choice', prompt: '칩 5개 중 2개를 덜어 냈어요. 남은 칩을 구하는 이야기는 무엇인가요?', options: ['더하는 이야기', '빼는 이야기'], answer: 1, difficulty: 0.08, explain: '덜어 내면 칩이 줄어요. 줄어드는 이야기는 빼는 이야기예요.' },
  ]],
  ws: { title: '칩 모으기와 덜어 내기', items: [
    { type: 'figure', prompt: '칩은 모두 몇 개인지 쓰세요.', tool: 'tenframe', options: { item: 'chip', color: 'sky', twoColor: true }, figures: [{ state: { parts: [3, 2] }, caption: BLANK }, { state: { parts: [4, 3] }, caption: BLANK }, { state: { parts: [2, 6] }, caption: BLANK }], answer: '5, 7, 8' },
    { type: 'table', prompt: '칩을 덜어 내고 남은 칩 수를 쓰세요.', columns: ['처음 칩', '덜어 낸 칩', '남은 칩'], cells: [['5', '2', ''], ['8', '3', ''], ['6', '4', '']], answer: '3, 5, 2' },
    { type: 'choice', prompt: '칩을 모으는 이야기에 ○ 하세요.', options: ['칩 3개와 칩 4개를 합했어요', '칩 7개 중 4개를 덜어 냈어요'], answer: '칩 3개와 칩 4개를 합했어요' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '칩 9개 중 4개를 덜어 내면 ___ 개가 남아요.', answer: '5' },
    { type: 'draw', prompt: '칩 6개를 그리고, 2개에 × 해서 남은 칩 수를 써 보세요.' },
  ], easy: { note: '모으면 많아지고, 덜어 내면 적어져요. 하나씩 짚으며 세어요.', items: [
    { type: 'figure', prompt: '칩은 모두 몇 개인지 쓰세요.', tool: 'tenframe', options: { item: 'chip', color: 'sky', twoColor: true }, figures: [{ state: { parts: [2, 1] }, caption: BLANK }, { state: { parts: [3, 3] }, caption: BLANK }], answer: '3, 6' },
    { type: 'table', prompt: '남은 칩 수를 쓰세요.', columns: ['처음 칩', '덜어 낸 칩', '남은 칩'], cells: [['4', '1', ''], ['6', '2', '']], answer: '3, 4' },
    { type: 'choice', prompt: '칩이 줄어드는 이야기에 ○ 하세요.', options: ['칩을 더 받았어요', '칩을 하나 덜어 냈어요'], answer: '칩을 하나 덜어 냈어요' },
    { type: 'draw', prompt: '칩 5개를 그려 보세요.' },
  ] } },
  diff: { easy: '칸 번호가 보이고, 모으기 문항에서 색마다 칸을 짚으며 이어 세기 쉬워요.', base: '수 카드가 가려져 있고 놓은 뒤 모두의 수를 직접 골라요. 가르기에서는 목표 줄(7 → 3과 ?)이 보여요.', challenge: '칩이 흩어진 칸에 들어가 5칸 묶음으로 셀 수 없어요.' },
  notes: '자주 보이는 어려움: ① 모은 칩을 처음부터 다시 센다 → 앞 색의 수에서 이어 센다. ② 덜어 낸 수를 남은 수로 말한다 → 바구니로 돌아간 칩과 칸에 남은 칩을 나누어 가리킨다. ③ 가르기에서 모두의 수를 그대로 고른다 → 한쪽 색은 세지 않음을 짚는다. 식으로 쓰는 것은 다음 시간에 한다.',
}));
// ───────────────────────────── 3차시 (core · representation) ─────────────────────────────
L.push(lesson(3, {
  title: '이야기에 맞는 덧셈식과 뺄셈식 쓰고 읽기',
  objective: '더하는 이야기는 덧셈식으로, 빼는 이야기는 뺄셈식으로 나타내고 식을 읽을 수 있다.',
  desc: 'a paper blackboard with cut-out numbers and plus and minus signs and two small birds standing on the frame',
  text: '3 + 2 = 5',
  layers: [{ motif: 'house', x: 110, y: 216, s: 0.9 }, { motif: 'tree', x: 380, y: 216 }, { motif: 'bird', x: 300, y: 84 }, { motif: 'flower', x: 250, y: 238, color: 'lavender' }],
  intro: ['"사과 3개에 2개를 더 놓으면 5개예요. 이것을 칠판에 이렇게 써요." 3 + 2 = 5를 쓰고 "삼 더하기 이는 오"라고 소리 내어 읽는다. 시연 단추로 사과가 3개에서 5개가 되는 모습을 보여 준다. 더하기 기호를 빼기 기호로 읽는 학생이 있는지 살핀다.', '사과 이야기를 식으로 써 보고 소리 내어 읽어 봐요.'],
  demo: { tool: 'tenframe', options: { twoColor: true, item: 'apple', showWord: true }, sequence: [{ parts: [3, 0] }, { parts: [3, 2] }] },
  acts: [
    { id: 'a1', title: '활동 1. 사과를 모아 덧셈식 만들기', minutes: 9, tool: 'tenframe',
      task: '빨간 사과와 초록 사과를 모아요. 식 "빨간 + 초록 = 모두"를 생각하며 모두 몇 개인지 골라요.',
      teacher: '"빨간 사과 4개 더하기 초록 사과 3개는 모두 몇 개예요?" 식의 +는 더하기, =는 같다는 뜻이라고 말해 준다. 4 + 3 = 7을 4 + 3 = 43처럼 이어 붙여 읽는 학생에게는 +를 손가락으로 짚으며 "더하기"라고 읽게 한다.',
      levels: TWO,
      items: [join('빨간 사과 2개 + 초록 사과 3개 = 모두 몇 개일까요?', 2, 3, 0.05), join('빨간 사과 4개 + 초록 사과 3개 = 모두 몇 개일까요?', 4, 3, 0.1),
        join('빨간 사과 5개 + 초록 사과 2개 = 모두 몇 개일까요?', 5, 2, 0.1), join('빨간 사과 6개 + 초록 사과 4개 = 모두 몇 개일까요?', 6, 4, 0.2)] },
    { id: 'a2', title: '활동 2. 이야기와 식 짝짓기', minutes: 10, tool: 'mindmap',
      task: '이야기 옆에 맞는 식 카드를 놓아요. 더하는 이야기는 +, 빼는 이야기는 −예요.',
      teacher: '"새 3마리에 2마리가 더 왔어요. 식에 +를 쓸까요, −를 쓸까요?" 이야기 속 수를 식에 놓는 순서도 짚는다. "7 − 3"을 "3 − 7"로 쓰는 학생에게는 처음에 있던 수가 앞에 온다고 말해 준다.',
      levels: CARD,
      items: [
        matchCards('이야기와 맞는 식 카드를 이어 보세요.', '식 짝짓기', [['새 3마리에 2마리가 더 왔어요', '3 + 2 = 5'], ['과자 5개 중 2개를 먹었어요', '5 − 2 = 3'], ['공 4개에 1개를 더 샀어요', '4 + 1 = 5']], null, 0.08),
        matchCards('이번에도 이야기와 식을 이어 보세요.', '식 짝짓기', [['귤 6개 중 4개를 먹었어요', '6 − 4 = 2'], ['풍선 2개에 5개를 더 불었어요', '2 + 5 = 7'], ['컵 8개 중 3개를 치웠어요', '8 − 3 = 5']], null, 0.12),
        matchCards('식 카드 한 장이 남아요. 이야기와 맞는 카드만 이어 보세요.', '식 짝짓기', [['연필 7개 중 2개를 잃어버렸어요', '7 − 2 = 5'], ['색종이 3장에 6장을 더 받았어요', '3 + 6 = 9']], ['7 + 2 = 9'], 0.2),
      ] },
    pair('a3', '활동 3. 식을 읽고 이야기 만들기', 7, '식을 소리 내어 읽어요. 짝과 식에 어울리는 이야기를 만들고 사과로 놓아 봐요.',
      '짝끼리 식 카드(예: 4 + 2 = 6)를 정해 읽고, 그 식에 맞는 이야기를 만들게 한다. 이야기 속 사과를 놓아 식의 결과와 같은지 센다. 식과 이야기의 +, −가 맞는지 서로 읽어 주며 따져 본다.',
      ['식 4 + 2 = 6에 맞는 이야기를 만들어 사과를 놓고 "다 했어요"를 누르세요.', '식 7 − 3 = 4에 맞는 이야기를 만들어 사과를 놓고 "다 했어요"를 누르세요.', '짝이 만든 식을 소리 내어 읽고 "다 했어요"를 누르세요.'], 'tenframe', PUT),
  ],
  wrap: ['"더하는 이야기는 어떤 식이 돼요? 빼는 이야기는요?" 칠판의 식을 손가락으로 짚으며 함께 읽는다. 출구 2번을 틀린 학생은 이야기에서 +와 −를 가리지 못한 것이므로 사과를 놓아 늘었는지 줄었는지 먼저 보게 한다.', [
    { type: 'choice', prompt: '"3 + 4 = 7"을 바르게 읽은 것은 무엇인가요?', options: ['삼 더하기 사는 칠', '삼 빼기 사는 칠', '삼 사 칠'], answer: 0, difficulty: 0.08, explain: '+는 더하기라고 읽어요. 삼 더하기 사는 칠이에요.' },
    { type: 'choice', prompt: '"달걀 6개 중 2개를 먹었어요." 알맞은 식은 무엇인가요?', options: ['6 + 2 = 8', '6 − 2 = 4', '2 − 6 = 4'], answer: 1, difficulty: 0.12, explain: '먹어서 줄었으니 빼요. 처음 수 6이 앞에 와서 6 − 2 = 4예요.' },
    { type: 'tool', tool: 'tenframe', options: { twoColor: true, item: 'apple', showCount: false, askNumber: true }, prompt: '빨간 사과 3개 + 초록 사과 3개 = 모두 몇 개일까요?', target: { parts: [3, 3], ask: 'total' }, difficulty: 0.1 },
  ]],
  ws: { title: '덧셈식과 뺄셈식', items: [
    { type: 'table', prompt: '이야기에 알맞은 식에 ○ 하세요.', columns: ['이야기', '식 ①', '식 ②'], cells: [['사과 4개에 2개를 더 땄어요', '4 + 2', '4 − 2'], ['쿠키 5개 중 3개를 먹었어요', '5 + 3', '5 − 3']], answer: '4 + 2, 5 − 3' },
    { type: 'blank', prompt: '식을 완성하세요.', text: '3 + 5 = ___ , 9 − 4 = ___', answer: '8, 5' },
    { type: 'choice', prompt: '"2 + 6 = 8"과 맞는 이야기에 ○ 하세요.', options: ['빵 2개에 6개를 더 샀어요', '빵 8개 중 6개를 먹었어요'], answer: '빵 2개에 6개를 더 샀어요' },
    { type: 'figure', prompt: '사과를 모두 세어 식에 알맞은 수를 쓰세요.', tool: 'tenframe', options: { item: 'apple', twoColor: true }, figures: [{ state: { parts: [2, 3] }, caption: '2 + 3 = ___' }, { state: { parts: [4, 3] }, caption: '4 + 3 = ___' }], answer: '5, 7' },
    { type: 'short', prompt: '"7 − 3 = 4"에 맞는 이야기를 짧게 써 보세요.' },
  ], easy: { note: '더하기(+)는 늘어나요. 빼기(−)는 줄어들어요.', items: [
    { type: 'choice', prompt: '사과 3개에 1개를 더 땄어요. 알맞은 식에 ○ 하세요.', options: ['3 + 1 = 4', '3 − 1 = 2'], answer: '3 + 1 = 4' },
    { type: 'blank', prompt: '식을 완성하세요.', text: '2 + 2 = ___ , 5 − 1 = ___', answer: '4, 4' },
    { type: 'figure', prompt: '사과를 모두 세어 쓰세요.', tool: 'tenframe', options: { item: 'apple', twoColor: true }, figures: [{ state: { parts: [2, 1] }, caption: '2 + 1 = ___' }], answer: '3' },
    { type: 'draw', prompt: '식 3 + 2 = 5에 맞게 ○를 그려 보세요.' },
  ] } },
  diff: { easy: '사과 칸에 번호가 있고, 이야기와 맞는 식 카드를 놓으면 초록 테두리가 생겨요.', base: '식 카드를 스스로 이어 보고, 모두의 수를 직접 골라요.', challenge: '남는 식 카드가 섞이고 사과가 흩어져 있어 이야기의 수와 식의 수를 하나하나 살펴야 해요.' },
  notes: '자주 보이는 어려움: ① 이야기에서 +와 −를 가리지 못한다 → 사과를 놓아 늘었는지 줄었는지 확인한다. ② 뺄셈식의 수 순서를 바꾼다(3 − 7) → 처음에 있던 수가 앞에 온다. ③ 식을 3 + 2 = 5를 "삼 이 오"로 읽는다 → 손가락으로 짚으며 "더하기", "는"까지 소리 내어 읽는다.',
}));
// ───────────────────────────── 4차시 (practice · representation) ─────────────────────────────
L.push(lesson(4, {
  title: '수직선에서 오른쪽으로, 왼쪽으로 뛰어 세기',
  objective: '수직선에서 오른쪽으로 뛰면 더하고, 왼쪽으로 뛰면 뺀다는 것을 알고 칸을 세어 답을 구할 수 있다.',
  desc: 'a small paper frog hopping along a long ruler-like path with number flags, one hop to the right and one hop back to the left',
  text: '0 1 2 3 4 5',
  layers: [{ motif: 'tree', x: 80, y: 216, s: 1.0 }, { motif: 'flower', x: 400, y: 236 }, { motif: 'bird', x: 300, y: 84 }, { motif: 'star', x: 150, y: 90, s: 0.6 }],
  intro: ['"개구리가 3에서 출발해서 오른쪽으로 두 칸을 뛰었어요. 어디에 닿았을까요?" 시연 단추로 수직선 위의 화살표가 3에서 5로 가는 모습을 보여 준다. "오른쪽으로 가면 수가 커져요. 왼쪽으로 가면요?" 하고 묻고, 출발한 칸까지 세어 한 칸을 더 가 버리는 학생이 있는지 살핀다.', '수직선 위에서 개구리가 뛰어요. 몇 칸 뛰는지 세어 봐요.'],
  demo: { tool: 'numberline', options: { mode: 'jump', min: 0, max: 10, fixedFrom: 3, hopSize: 1 }, sequence: [{ from: 3, hops: [1, 1], size: 1 }] },
  acts: [
    { id: 'a1', title: '활동 1. 오른쪽으로 뛰어 더하기', minutes: 9, tool: 'numberline',
      task: '출발점에서 오른쪽으로 칸을 세며 뛰어요. 도착한 수가 더한 값이에요.',
      teacher: '"출발한 칸은 세지 않고 뛰는 칸만 세요." 3에서 두 칸을 뛰는데 출발한 3부터 세어 6에 닿는 학생이 있다 — 화살표 하나가 한 칸이라고 짚고 화살표를 직접 그리며 세게 한다.',
      levels: JUMP,
      items: [jump('3에서 출발해 오른쪽으로 2칸 뛰어 보세요. 몇에 닿나요?', 3, 5, { min: 0, max: 10 }, 0.05), jump('4에서 출발해 오른쪽으로 4칸 뛰어 보세요. 몇에 닿나요?', 4, 8, { min: 0, max: 10 }, 0.1),
        jump('2에서 출발해 오른쪽으로 5칸 뛰어 보세요. 몇에 닿나요?', 2, 7, { min: 0, max: 10 }, 0.12), jump('6에서 출발해 오른쪽으로 3칸 뛰어 보세요. 몇에 닿나요?', 6, 9, { min: 0, max: 10 }, 0.15)] },
    { id: 'a2', title: '활동 2. 왼쪽으로 뛰어 빼기', minutes: 10, tool: 'numberline',
      task: '출발점에서 왼쪽으로 칸을 세며 뛰어요. 도착한 수가 뺀 값이에요.',
      teacher: '"왼쪽으로 뛰면 수가 커져요, 작아져요?" 8에서 세 칸을 왼쪽으로 뛰는데 오른쪽으로 뛰어 11에 가려는 학생이 있다 — 뺄셈은 줄어드는 이야기이므로 왼쪽이라고 짚어 준다.',
      levels: JUMP,
      items: [jump('8에서 출발해 왼쪽으로 3칸 뛰어 보세요. 몇에 닿나요?', 8, 5, { min: 0, max: 10 }, 0.08), jump('9에서 출발해 왼쪽으로 5칸 뛰어 보세요. 몇에 닿나요?', 9, 4, { min: 0, max: 10 }, 0.15),
        jump('6에서 출발해 왼쪽으로 4칸 뛰어 보세요. 몇에 닿나요?', 6, 2, { min: 0, max: 10 }, 0.12), jump('10에서 출발해 왼쪽으로 7칸 뛰어 보세요. 몇에 닿나요?', 10, 3, { min: 0, max: 10 }, 0.2)] },
    { id: 'a3', title: '활동 3. 이야기를 수직선 뛰기로 바꾸기', minutes: 7, tool: 'numberline',
      task: '이야기를 읽고 더하면 오른쪽, 빼면 왼쪽으로 뛰어요.',
      teacher: '"버스에 사람이 내리면 늘어나요, 줄어요?" 이야기를 읽고 뛰는 방향부터 손으로 정하게 한다. 모두 오른쪽으로만 뛰는 학생에게는 줄어드는 이야기를 다시 읽혀 방향을 바꾸게 한다.',
      levels: JUMP,
      items: [jump('버스에 5명이 타고 있었는데 3명이 내렸어요. 몇 명이 남았나요?', 5, 2, { min: 0, max: 10 }, 0.12), jump('놀이터에 친구 4명이 있었는데 4명이 더 왔어요. 모두 몇 명인가요?', 4, 8, { min: 0, max: 10 }, 0.15),
        jump('저금통에 동전 7개가 있었는데 2개를 꺼냈어요. 몇 개가 남았나요?', 7, 5, { min: 0, max: 10 }, 0.15)] },
  ],
  wrap: ['"오른쪽으로 뛰면 어떤 계산이에요? 왼쪽으로 뛰면요?" 팔을 오른쪽, 왼쪽으로 뻗으며 말하게 한다. 출구 1번을 틀린 학생은 방향을 거꾸로 알고 있는 것이므로 다음 시간에 수직선에 직접 화살표를 그려 보게 한다.', [
    { type: 'choice', prompt: '수직선에서 왼쪽으로 뛰면 어떤 계산인가요?', options: ['더하기', '빼기'], answer: 1, difficulty: 0.08, explain: '왼쪽으로 가면 수가 작아져요. 작아지는 계산은 빼기예요.' },
    { type: 'tool', tool: 'numberline', options: { mode: 'jump', min: 0, max: 10, fixedFrom: 7, hopSize: 1, labels: 'all' }, prompt: '7에서 출발해 오른쪽으로 2칸 뛰어 보세요.', target: { from: 7, end: 9 }, difficulty: 0.1 },
    { type: 'choice', prompt: '5에서 오른쪽으로 3칸 뛰면 몇에 닿나요?', options: ['2', '8', '9'], answer: 1, difficulty: 0.1, explain: '5에서 6, 7, 8 하고 세면 8에 닿아요.' },
  ]],
  ws: { title: '수직선에서 뛰기', items: [
    { type: 'table', prompt: '수직선에서 뛰어 도착하는 수를 쓰세요.', columns: ['출발', '뛰기', '도착'], cells: [['2', '오른쪽 3칸', ''], ['9', '왼쪽 4칸', ''], ['5', '오른쪽 5칸', ''], ['7', '왼쪽 6칸', '']], answer: '5, 5, 10, 1' },
    { type: 'choice', prompt: '3에서 오른쪽으로 4칸 뛰면 어디에 닿나요?', options: ['7', '1', '4'], answer: '7' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '8에서 왼쪽으로 3칸 뛰면 ___ 에 닿아요.', answer: '5' },
    { type: 'figure', prompt: '사과를 세어 오른쪽으로 뛴 값을 쓰세요.', tool: 'tenframe', options: { item: 'apple' }, figures: [{ state: { count: 4 }, caption: '4에서 2칸 → ___' }, { state: { count: 6 }, caption: '6에서 3칸 → ___' }], answer: '6, 9' },
    { type: 'draw', prompt: '0부터 10까지 수직선을 그리고 6에서 왼쪽으로 2칸 가는 화살표를 그려 보세요.' },
  ], easy: { note: '출발한 칸은 세지 않아요. 화살표 하나가 한 칸이에요.', items: [
    { type: 'table', prompt: '도착하는 수를 쓰세요.', columns: ['출발', '뛰기', '도착'], cells: [['3', '오른쪽 2칸', ''], ['6', '왼쪽 1칸', '']], answer: '5, 5' },
    { type: 'choice', prompt: '4에서 오른쪽으로 2칸 뛰면 어디에 닿나요?', options: ['6', '2'], answer: '6' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '5에서 왼쪽으로 2칸 뛰면 ___ 에 닿아요.', answer: '3' },
    { type: 'draw', prompt: '수직선에 3에서 오른쪽으로 2칸 가는 화살표를 그려 보세요.' },
  ] } },
  diff: { easy: '눈금마다 수가 모두 적혀 있고 도착한 곳의 수가 바로 보여요.', base: '눈금마다 수가 적혀 있지만 도착한 수는 스스로 읽어요.', challenge: '큰 눈금(5의 단위)에만 수가 적혀 있어 스스로 한 칸씩 세어야 해요.' },
  notes: '자주 보이는 어려움: ① 출발한 칸부터 세어 한 칸을 더 간다 → 화살표 하나가 한 칸. 출발한 칸은 세지 않는다. ② 빼기인데 오른쪽으로 뛴다 → 줄어드는 이야기는 왼쪽. ③ 뛴 칸 수를 도착한 수로 말한다 → 도착한 수는 눈금에 쓰인 수를 읽는다.',
}));
// ───────────────────────────── 5차시 (core · application) ─────────────────────────────
L.push(lesson(5, {
  title: '이야기를 읽고 알맞은 식으로 답 구하기',
  objective: '이야기에서 구하려는 것이 모두인지 남은 것인지 가려 알맞은 식을 세우고 답을 구할 수 있다.',
  desc: 'a girl and a boy sharing paper cookies at a picnic table, some cookies in a basket and a few already eaten',
  text: '모두? 남은 것?',
  layers: [{ motif: 'tree', x: 90, y: 214, s: 1.0 }, { motif: 'house', x: 390, y: 216, s: 0.9 }, { motif: 'flower', x: 250, y: 238 }, { motif: 'bird', x: 300, y: 84 }],
  intro: ['"쿠키가 5개 있었는데 2개를 먹었어요. 지금 몇 개 남았을까요?" 시연 단추로 쿠키 5개에서 2개가 줄어드는 모습을 보여 준다. "무엇을 구하는지 먼저 말해 봐요. 모두 몇 개인지, 남은 것이 몇 개인지." 낱말 "모두"만 보고 덧셈을 하는 학생이 있는지 살핀다.', '이야기에서 무엇을 구하는지 먼저 말해 봐요.'],
  demo: { tool: 'tenframe', options: { item: 'apple', showWord: true }, sequence: [{ count: 5 }, { count: 3 }] },
  acts: [
    { id: 'a1', title: '활동 1. 이야기에 맞는 식 고르기', minutes: 9, tool: 'mindmap',
      task: '이야기를 읽고 맞는 식 카드를 놓아요. 구하려는 것이 무엇인지 먼저 생각해요.',
      teacher: '"구하려는 것이 모두예요, 남은 것이에요?" 이야기의 낱말 하나만 보고 식을 고르는 학생이 있다 — "나누어 주고 남은 것은?"처럼 줄어드는 이야기에 +를 고르면 사과를 놓아 늘었는지 줄었는지 보여 준다.',
      levels: CARD,
      items: [
        matchCards('이야기에 맞는 식 카드를 이어 보세요.', '식 고르기', [['귤 4개에 3개를 더 받았어요. 모두 몇 개?', '4 + 3'], ['귤 7개 중 3개를 먹었어요. 남은 것은?', '7 − 3'], ['귤 6개에 2개를 더 받았어요. 모두 몇 개?', '6 + 2']], null, 0.12),
        matchCards('이번에도 이야기에 맞는 식 카드를 이어 보세요.', '식 고르기', [['사탕 9개 중 4개를 나누어 주었어요. 남은 것은?', '9 − 4'], ['사탕 3개에 5개를 더 샀어요. 모두 몇 개?', '3 + 5'], ['사탕 6개 중 1개를 떨어뜨렸어요. 남은 것은?', '6 − 1']], null, 0.15),
        matchCards('식 카드 한 장이 남아요. 맞는 카드만 이어 보세요.', '식 고르기', [['달걀 8개 중 5개를 썼어요. 남은 것은?', '8 − 5'], ['달걀 2개에 6개를 더 샀어요. 모두 몇 개?', '2 + 6']], ['8 + 5'], 0.2),
      ] },
    { id: 'a2', title: '활동 2. 남은 것 구하기', minutes: 9, tool: 'tenframe',
      task: '처음 쿠키를 모두 놓고 먹은 만큼 덜어 내요. 남은 쿠키를 세어요.',
      teacher: '"먹은 것이 몇 개예요? 남은 것은 몇 개예요?" 먹은 수를 답으로 쓰는 학생이 있다 — 칸에 남은 쿠키와 바구니로 돌아간 쿠키를 따로 가리키게 한다.',
      levels: PUT,
      items: [less('쿠키 9개 중 4개를 먹었어요. 먹은 만큼 덜어 내 보세요.', 9, 4, 0.12), less('쿠키 6개 중 5개를 먹었어요. 먹은 만큼 덜어 내 보세요.', 6, 5, 0.12),
        less('쿠키 10개 중 6개를 나누어 주었어요. 덜어 내 보세요.', 10, 6, 0.2), less('쿠키 8개 중 1개를 떨어뜨렸어요. 덜어 내 보세요.', 8, 1, 0.1)] },
    { id: 'a3', title: '활동 3. 모두 몇 개인지 구하기', minutes: 8, tool: 'tenframe',
      task: '두 가지 색의 쿠키를 놓고 모두 몇 개인지 수를 골라요.',
      teacher: '"초콜릿 쿠키 4개와 땅콩 쿠키 5개를 합하면 모두 몇 개예요?" 큰 수 5만 세고 작은 수 4를 빼먹는 학생이 있다 — 5에서 이어서 하나씩 짚으며 센다.',
      levels: TWO,
      items: [join('빨간 쿠키 4개와 초록 쿠키 5개를 모았어요. 모두 몇 개일까요?', 4, 5, 0.15), join('빨간 쿠키 1개와 초록 쿠키 8개를 모았어요. 모두 몇 개일까요?', 1, 8, 0.15),
        join('빨간 쿠키 3개와 초록 쿠키 6개를 모았어요. 모두 몇 개일까요?', 3, 6, 0.15)] },
  ],
  wrap: ['"이야기에서 무엇을 구하는지 어떻게 알았나요?" 모두와 남은 것 가운데 하나를 짚어 말하게 한다. 출구 2번을 틀린 학생은 사탕이 줄어든 이야기에 더하기를 고른 것이므로 다음 시간에 먼저 줄었는지 늘었는지 묻는다.', [
    { type: 'choice', prompt: '"사과 3개에 4개를 더 땄어요. 모두 몇 개?" 알맞은 식은 무엇인가요?', options: ['3 + 4', '4 − 3'], answer: 0, difficulty: 0.1, explain: '더 땄으니 늘어나요. 늘어나는 것은 3 + 4예요.' },
    { type: 'choice', prompt: '"사탕 7개 중 2개를 나누어 주었어요. 남은 것은?" 알맞은 식은 무엇인가요?', options: ['7 + 2', '7 − 2'], answer: 1, difficulty: 0.12, explain: '나누어 주면 줄어들어요. 줄어드는 것은 7 − 2예요.' },
    { type: 'tool', tool: 'tenframe', options: { item: 'apple', showCount: false }, state: { count: 8 }, prompt: '사과 8개 중 3개를 먹었어요. 먹은 만큼 덜어 내 보세요.', target: { count: 8, less: 3 }, difficulty: 0.15 },
  ]],
  ws: { title: '이야기와 식', items: [
    { type: 'table', prompt: '이야기에 알맞은 식에 ○ 하세요.', columns: ['이야기', '식 ①', '식 ②'], cells: [['풍선 5개에 3개를 더 불었어요. 모두 몇 개?', '5 + 3', '5 − 3'], ['도넛 6개 중 2개를 먹었어요. 남은 것은?', '6 + 2', '6 − 2'], ['공 4개에 5개를 더 받았어요. 모두 몇 개?', '4 + 5', '5 − 4']], answer: '5 + 3, 6 − 2, 4 + 5' },
    { type: 'blank', prompt: '식을 쓰고 답을 구하세요.', text: '귤 8개 중 3개를 먹었어요. 8 ___ 3 = ___', answer: '− , 5' },
    { type: 'blank', prompt: '식을 쓰고 답을 구하세요.', text: '연필 2자루에 6자루를 더 샀어요. 2 ___ 6 = ___', answer: '+ , 8' },
    { type: 'figure', prompt: '쿠키를 세어 모두 몇 개인지 쓰세요.', tool: 'tenframe', options: { item: 'chip', color: 'sky', twoColor: true }, figures: [{ state: { parts: [3, 4] }, caption: BLANK }, { state: { parts: [5, 4] }, caption: BLANK }], answer: '7, 9' },
    { type: 'short', prompt: '"남은 것은 몇 개?" 이야기를 하나 만들고 식을 써 보세요.' },
  ], easy: { note: '늘어나면 더하기, 줄어들면 빼기를 써요.', items: [
    { type: 'choice', prompt: '"빵 5개 중 2개를 먹었어요. 남은 것은?" 알맞은 식에 ○ 하세요.', options: ['5 + 2', '5 − 2'], answer: '5 − 2' },
    { type: 'blank', prompt: '식을 쓰고 답을 구하세요.', text: '새 2마리에 3마리가 더 왔어요. 2 ___ 3 = ___', answer: '+ , 5' },
    { type: 'figure', prompt: '쿠키는 모두 몇 개인지 쓰세요.', tool: 'tenframe', options: { item: 'chip', color: 'sky', twoColor: true }, figures: [{ state: { parts: [2, 2] }, caption: BLANK }], answer: '4' },
    { type: 'draw', prompt: '쿠키 4개를 그리고 1개에 × 하여 남은 쿠키 수를 써 보세요.' },
  ] } },
  diff: { easy: '이야기와 맞는 식을 놓으면 바로 초록 테두리가 생기고, 쿠키 칸에 번호가 있어요.', base: '식 카드를 스스로 이어요. 쿠키 수 카드가 가려져 직접 세어요.', challenge: '남는 식 카드가 섞이고 쿠키가 흩어져 있어, 이야기를 끝까지 읽고 식을 골라야 해요.' },
  notes: '자주 보이는 어려움: ① "모두"라는 말만 보고 더한다 → 늘었는지 줄었는지 먼저 판단한다. ② 먹은 수를 남은 수로 쓴다 → 구하려는 것이 남은 것임을 다시 읽는다. ③ 뺄셈식의 수 순서를 바꾼다 → 처음 수가 앞에 온다. 한 자리 수 계산은 여기까지, 두 자리 수는 6차시에서 한다.',
}));
// ───────────────────────────── 6차시 (practice · application) ─────────────────────────────
L.push(lesson(6, {
  title: '몇십과 몇십몇에 더하고 빼며 수직선에서 뛰기',
  objective: '받아올림과 받아내림이 없는 몇십 ± 몇십, 몇십몇 ± 몇을 수직선에서 뛰어 구할 수 있다.',
  desc: 'a rabbit hopping along a long paper number path in big jumps of ten and then small hops of one, with bundles of ten sticks beside it',
  text: '10씩, 1씩',
  layers: [{ motif: 'tree', x: 90, y: 216, s: 1.1 }, { motif: 'flower', x: 400, y: 236 }, { motif: 'bird', x: 300, y: 84 }, { motif: 'star', x: 150, y: 90, s: 0.6 }],
  intro: ['"막대 사탕이 10개씩 묶음 2개와 낱개 3개가 있어요. 모두 몇 개일까요?" 시연 단추로 수직선 위의 토끼가 20에서 30으로 크게 한 번, 이어서 1씩 작게 뛰는 모습을 보여 준다. "10씩 뛰면 십의 자리가 하나 늘고, 1씩 뛰면 일의 자리가 늘어요." 23 + 4를 27이 아닌 63으로 쓰는 학생이 있는지 살핀다.', '10씩 크게 뛰고 1씩 작게 뛰며 두 자리 수에 더해 봐요.'],
  demo: { tool: 'numberline', options: { mode: 'jump', min: 20, max: 30, fixedFrom: 23, hopSize: 1 }, sequence: [{ from: 23, hops: [1, 1, 1, 1], size: 1 }] },
  acts: [
    { id: 'a1', title: '활동 1. 10씩 뛰어 몇십 더하고 빼기', minutes: 8, tool: 'numberline',
      task: '10씩 뛰어요. 오른쪽으로 뛰면 더하고, 왼쪽으로 뛰면 빼요.',
      teacher: '"10씩 한 칸 뛰면 십의 자리 수가 어떻게 돼요?" 20 + 30을 20 + 3으로 읽는 학생에게는 30은 10이 3묶음임을 손가락 세 개로 보여 준다. 뺄셈은 왼쪽으로 뛰며 십의 자리 수가 줄어드는 것을 소리 내어 말하게 한다.',
      levels: { easy: { mode: 'jump', labels: 'major', showValue: true }, base: { mode: 'jump', labels: 'major' }, challenge: { mode: 'jump', labels: 'ends' } },
      items: [jump('20에서 10씩 3번 뛰어 30을 더해요. 몇에 닿나요?', 20, 50, { min: 0, max: 100, step: 10, sub: 10, hop: 10 }, 0.1), jump('40에서 10씩 5번 뛰어 50을 더해요. 몇에 닿나요?', 40, 90, { min: 0, max: 100, step: 10, sub: 10, hop: 10 }, 0.15),
        jump('80에서 10씩 왼쪽으로 3번 뛰어 30을 빼요. 몇에 닿나요?', 80, 50, { min: 0, max: 100, step: 10, sub: 10, hop: 10 }, 0.15), jump('70에서 10씩 왼쪽으로 4번 뛰어 40을 빼요. 몇에 닿나요?', 70, 30, { min: 0, max: 100, step: 10, sub: 10, hop: 10 }, 0.18)] },
    { id: 'a2', title: '활동 2. 몇십몇에 몇 더하기', minutes: 9, tool: 'numberline',
      task: '일의 자리만 늘어나요. 1씩 뛰어요. 십의 자리 수는 그대로예요.',
      teacher: '"23에 4를 더하면 십의 자리는 바뀌나요?" 일의 자리끼리만 더한다고 말해 준다. 23 + 4 = 27이 아니라 "63"이라고 쓰는 학생에게는 23의 2는 십의 자리, 4는 일의 자리임을 수 카드로 짚는다.',
      levels: JUMP,
      items: [jump('사과가 23개 있었는데 4개를 더 땄어요. 모두 몇 개인가요?', 23, 27, { min: 20, max: 30 }, 0.1), jump('색종이가 31장 있었는데 6장을 더 받았어요. 모두 몇 장인가요?', 31, 37, { min: 30, max: 40 }, 0.12),
        jump('구슬이 42개 있었는데 5개를 더 샀어요. 모두 몇 개인가요?', 42, 47, { min: 40, max: 50 }, 0.12), jump('연필이 54자루 있었는데 3자루를 더 받았어요. 모두 몇 자루인가요?', 54, 57, { min: 50, max: 60 }, 0.12)] },
    { id: 'a3', title: '활동 3. 몇십몇에서 몇 빼기', minutes: 9, tool: 'numberline',
      task: '일의 자리가 줄어요. 왼쪽으로 1씩 뛰어요. 십의 자리 수는 그대로예요.',
      teacher: '"28에서 5를 빼면 십의 자리는 바뀌나요?" 일의 자리끼리만 빼면 되는 수만 쓴다고 말해 준다. 28 − 5를 5 − 8로 바꾸어 생각하는 학생에게는 큰 수가 앞에 온다고 짚는다.',
      levels: JUMP,
      items: [jump('도토리가 28개 있었는데 5개를 먹었어요. 몇 개가 남았나요?', 28, 23, { min: 20, max: 30 }, 0.12), jump('스티커가 36장 있었는데 4장을 붙였어요. 몇 장이 남았나요?', 36, 32, { min: 30, max: 40 }, 0.12),
        jump('풍선이 49개 있었는데 6개가 터졌어요. 몇 개가 남았나요?', 49, 43, { min: 40, max: 50 }, 0.15), jump('책이 57권 있었는데 3권을 빌려 갔어요. 몇 권이 남았나요?', 57, 54, { min: 50, max: 60 }, 0.15)] },
  ],
  wrap: ['"20 + 30은 10이 몇 묶음이에요? 23 + 4는 어느 자리만 바뀌어요?" 짝에게 일의 자리와 십의 자리를 손으로 가리키며 말하게 한다. 출구 2번을 틀린 학생은 두 수의 자리를 맞추지 않은 것이므로 다음 시간에 십 모형과 낱개로 먼저 나누어 보게 한다.', [
    { type: 'choice', prompt: '30 + 20은 10이 몇 묶음인가요?', options: ['3묶음', '5묶음', '50묶음'], answer: 1, difficulty: 0.12, explain: '30은 10이 3묶음, 20은 2묶음이에요. 모두 5묶음이니 50이에요.' },
    { type: 'choice', prompt: '34 + 5의 답은 무엇인가요?', options: ['39', '84', '29'], answer: 0, difficulty: 0.15, explain: '일의 자리끼리 4 + 5 = 9, 십의 자리는 그대로 3이라서 39예요.' },
    { type: 'tool', tool: 'numberline', options: { mode: 'jump', min: 40, max: 50, fixedFrom: 48, hopSize: 1, labels: 'all' }, prompt: '48에서 왼쪽으로 3칸 뛰어 보세요.', target: { from: 48, end: 45 }, difficulty: 0.15 },
  ]],
  ws: { title: '두 자리 수 더하고 빼기', items: [
    { type: 'table', prompt: '10씩 뛰어 구한 수를 쓰세요.', columns: ['식', '답'], cells: [['20 + 40', ''], ['60 + 30', ''], ['90 − 50', ''], ['50 − 20', '']], answer: '60, 90, 40, 30' },
    { type: 'table', prompt: '일의 자리끼리 계산해 수를 쓰세요.', columns: ['식', '답'], cells: [['32 + 5', ''], ['45 + 3', ''], ['58 − 6', ''], ['67 − 4', '']], answer: '37, 48, 52, 63' },
    { type: 'choice', prompt: '26 + 3의 답에 ○ 하세요.', options: ['29', '56', '23'], answer: '29' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '10이 3묶음 + 10이 2묶음 = 10이 ___ 묶음 → ___', answer: '5, 50' },
    { type: 'short', prompt: '23 + 4를 계산할 때 어느 자리가 바뀌는지 써 보세요.' },
  ], easy: { note: '10씩 뛰면 십의 자리가 바뀌고, 1씩 뛰면 일의 자리가 바뀌어요.', items: [
    { type: 'table', prompt: '10씩 뛰어 구한 수를 쓰세요.', columns: ['식', '답'], cells: [['10 + 20', ''], ['50 − 20', '']], answer: '30, 30' },
    { type: 'table', prompt: '일의 자리끼리 계산해 쓰세요.', columns: ['식', '답'], cells: [['21 + 4', ''], ['38 − 2', '']], answer: '25, 36' },
    { type: 'choice', prompt: '22 + 3의 답에 ○ 하세요.', options: ['25', '52'], answer: '25' },
    { type: 'draw', prompt: '10개 묶음 2개와 낱개 3개를 그리고 23이라고 써 보세요.' },
  ] } },
  diff: { easy: '눈금 수가 모두 보이고, 도착한 곳의 수가 바로 나와요.', base: '눈금 수는 보이지만 도착한 수는 스스로 읽어요.', challenge: '눈금 수가 양 끝에만 있어 몇 칸을 뛰었는지 스스로 세어야 해요.' },
  notes: '자주 보이는 어려움: ① 십의 자리와 일의 자리를 섞어 더한다(23 + 4 = 63) → 십 모형과 낱개로 나누어 본다. ② 10씩 뛴 횟수를 10의 개수로 읽지 못한다 → 3번 뛰면 30임을 손가락으로 짚는다. ③ 빼기에서 작은 수를 앞에 놓는다 → 큰 수가 앞에 온다. 받아올림과 받아내림이 있는 계산은 이 단원에서 하지 않는다.',
}));
// ───────────────────────────── 7차시 (core · concept) ─────────────────────────────
L.push(lesson(7, {
  title: '세 수를 앞에서부터 차례로 더하기',
  objective: '세 수를 더할 때 앞의 두 수를 먼저 더하고 그 합에 나머지 수를 더해 모두 구할 수 있다.',
  desc: 'three small paper birds landing one after another on a wire, with a counting number flag held by each bird',
  text: '2 + 3 + 4',
  layers: [{ motif: 'tree', x: 90, y: 214, s: 1.0 }, { motif: 'house', x: 390, y: 216, s: 0.9 }, { motif: 'bird', x: 200, y: 84 }, { motif: 'bird', x: 280, y: 90 }, { motif: 'flower', x: 250, y: 238 }],
  intro: ['"참새가 전깃줄에 2마리 앉아 있어요. 3마리가 더 날아왔어요. 또 4마리가 날아왔어요. 모두 몇 마리일까요?" 시연 단추로 사과가 2개에서 5개, 9개로 늘어나는 모습을 보여 준다. "한 번에 세 수를 다 더하지 않고, 앞에서 두 수를 먼저 더해요." 2 + 3 + 4를 2 + 3 = 5에서 멈추고 답을 5라고 하는 학생이 있는지 살핀다.', '세 번에 걸쳐 늘어나는 사과를 차례로 더해 봐요.'],
  demo: { tool: 'tenframe', options: { item: 'apple', showWord: true }, sequence: [{ count: 2 }, { count: 5 }, { count: 9 }] },
  acts: [
    { id: 'a1', title: '활동 1. 사과를 두 번 더 놓기', minutes: 9, tool: 'tenframe',
      task: '처음 사과에 이야기대로 두 번 더 놓아요. 마지막에 모두 몇 개인지 세어요.',
      teacher: '"처음 2개에 3개를 더하면 몇 개예요? 거기에 또 4개를 더해요." 중간 수를 말하며 놓게 한다. 두 번째 더한 수만 세는 학생에게는 처음 사과까지 합쳐 모두 센다고 짚어 준다.',
      levels: PUT,
      items: [add3('사과 2개에 3개를 더 놓고, 또 4개를 더 놓아 보세요.', 2, 3, 4, 0.12), add3('사과 1개에 5개를 더 놓고, 또 3개를 더 놓아 보세요.', 1, 5, 3, 0.15),
        add3('사과 3개에 2개를 더 놓고, 또 5개를 더 놓아 보세요.', 3, 2, 5, 0.18), add3('사과 2개에 2개를 더 놓고, 또 2개를 더 놓아 보세요.', 2, 2, 2, 0.1)] },
    { id: 'a2', title: '활동 2. 수직선에서 두 번 뛰기', minutes: 10, tool: 'numberline',
      task: '출발점에서 오른쪽으로 두 번 뛰어요. 도착한 수가 세 수의 합이에요.',
      teacher: '"처음 4에서 1칸을 뛰면 어디예요? 거기서 3칸을 더 뛰어요." 첫 뛰기의 도착점에서 두 번째를 시작한다고 말해 준다. 두 번째 뛰기를 다시 처음 수에서 시작하는 학생에게는 화살표를 이어 그려 보게 한다.',
      levels: JUMP,
      items: [jump('4에서 오른쪽으로 1칸, 이어서 3칸 뛰어 보세요. 몇에 닿나요?', 4, 8, { min: 0, max: 10 }, 0.12), jump('1에서 오른쪽으로 6칸, 이어서 2칸 뛰어 보세요. 몇에 닿나요?', 1, 9, { min: 0, max: 10 }, 0.15),
        jump('3에서 오른쪽으로 3칸, 이어서 2칸 뛰어 보세요. 몇에 닿나요?', 3, 8, { min: 0, max: 10 }, 0.12), jump('5에서 오른쪽으로 2칸, 이어서 2칸 뛰어 보세요. 몇에 닿나요?', 5, 9, { min: 0, max: 10 }, 0.15)] },
    { id: 'a3', title: '활동 3. 계산 순서대로 식 놓기', minutes: 7, tool: 'mindmap',
      task: '세 수의 덧셈은 앞의 두 수를 먼저 더해요. 계산하는 순서대로 식 카드를 놓아요.',
      teacher: '"3 + 4 + 2에서 먼저 무엇과 무엇을 더해요?" 첫 번째 식의 답이 두 번째 식의 첫 수가 된다고 짚는다. 두 번째 식에서 처음 수 3을 다시 쓰는 학생에게는 앞에서 나온 합 7을 쓰게 한다.',
      levels: CARD,
      items: [orderCards('3 + 4 + 2를 계산하는 순서대로 식 카드를 놓아 보세요.', '계산 순서', ['3 + 4 = 7', '7 + 2 = 9'], 0.1), orderCards('2 + 5 + 1을 계산하는 순서대로 식 카드를 놓아 보세요.', '계산 순서', ['2 + 5 = 7', '7 + 1 = 8'], 0.1),
        orderCards('4 + 1 + 5를 계산하는 순서대로 식 카드를 놓아 보세요.', '계산 순서', ['4 + 1 = 5', '5 + 5 = 10'], 0.15)] },
  ],
  wrap: ['"세 수를 더할 때 먼저 어떤 두 수를 더해요?" 손가락으로 앞의 두 수를 묶어 보여 주게 한다. 출구 1번을 틀린 학생은 앞의 두 수를 먼저 더한다는 것을 모르는 것이므로 다음 시간에 수직선으로 다시 보여 준다.', [
    { type: 'choice', prompt: '6 + 2 + 1을 계산할 때 먼저 하는 계산은 무엇인가요?', options: ['6 + 2 = 8', '2 + 1 = 3'], answer: 0, difficulty: 0.1, explain: '앞의 두 수 6과 2를 먼저 더해요. 8에 1을 더하면 9예요.' },
    { type: 'tool', tool: 'tenframe', options: { item: 'chip', color: 'mint', showCount: false }, state: { count: 1 }, prompt: '칩 1개에 4개를 더 놓고, 또 2개를 더 놓아 보세요.', target: { count: 1, more: 6 }, difficulty: 0.15 },
    { type: 'choice', prompt: '3 + 3 + 3은 얼마인가요?', options: ['6', '9', '10'], answer: 1, difficulty: 0.1, explain: '3 + 3 = 6이고, 6에 3을 더하면 9예요.' },
  ]],
  ws: { title: '세 수의 덧셈', items: [
    { type: 'table', prompt: '앞에서부터 차례로 계산해 빈칸을 채우세요.', columns: ['식', '먼저', '답'], cells: [['2 + 4 + 3', '2 + 4 = 6', ''], ['5 + 1 + 2', '', ''], ['3 + 3 + 2', '', ''], ['1 + 7 + 1', '', '']], answer: '9, 8, 8, 9' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '4 + 2 + 3 → 4 + 2 = ___ , ___ + 3 = ___', answer: '6, 6, 9' },
    { type: 'choice', prompt: '5 + 1 + 3의 답에 ○ 하세요.', options: ['6', '9', '8'], answer: '9' },
    { type: 'figure', prompt: '사과를 모두 세어 쓰세요.', tool: 'tenframe', options: { item: 'apple' }, figures: [{ state: { count: 8 }, caption: '2 + 3 + 3 = ___' }, { state: { count: 9 }, caption: '4 + 2 + 3 = ___' }], answer: '8, 9' },
    { type: 'short', prompt: '1 + 2 + 5를 어떻게 계산했는지 써 보세요.' },
  ], easy: { note: '앞의 두 수를 먼저 더하고, 나온 수에 마지막 수를 더해요.', items: [
    { type: 'table', prompt: '앞에서부터 차례로 계산해 빈칸을 채우세요.', columns: ['식', '먼저', '답'], cells: [['1 + 2 + 3', '1 + 2 = 3', ''], ['2 + 2 + 2', '', '']], answer: '6, 6' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '3 + 1 + 2 → 3 + 1 = ___ , ___ + 2 = ___', answer: '4, 4, 6' },
    { type: 'choice', prompt: '2 + 2 + 1의 답에 ○ 하세요.', options: ['5', '4'], answer: '5' },
    { type: 'draw', prompt: '○ 2개, ○ 1개, ○ 3개를 이어서 그리고 모두 몇 개인지 써 보세요.' },
  ] } },
  diff: { easy: '사과 칸에 번호가 있고 수직선에 눈금 수와 도착한 수가 모두 보여요.', base: '수 카드가 가려져 있고 도착한 수는 스스로 읽어요.', challenge: '사과가 흩어진 칸에 들어가고 수직선에는 눈금 글자가 5의 단위에만 있어 더 집중해서 세어야 해요.' },
  notes: '자주 보이는 어려움: ① 앞의 두 수만 더하고 멈춘다(2 + 3 + 4 = 5) → 마지막 수까지 더해야 끝난다. ② 두 번째로 더하는 수를 처음 수에 더한다 → 먼저 나온 합에 이어서 더한다. ③ 세 수를 한꺼번에 더하려다 틀린다 → 두 수씩 나누어 계산한다. 순서를 바꾸는 것은 8차시에서 한다.',
}));
// ───────────────────────────── 8차시 (practice · concept) ─────────────────────────────
L.push(lesson(8, {
  title: '순서를 바꾸어 더해도 합이 같은 세 수 찾기',
  objective: '세 수의 덧셈은 더하는 순서를 바꾸어도 합이 같음을 알고, 합이 같은 식끼리 묶을 수 있다.',
  desc: 'three paper boxes holding red, mint, and lavender marbles being poured into one big bowl in different orders, with the same amount of marbles in the bowl each time',
  text: '순서를 바꿔도 같아요',
  layers: [{ motif: 'house', x: 110, y: 216, s: 0.9 }, { motif: 'tree', x: 380, y: 216 }, { motif: 'star', x: 150, y: 90, s: 0.6 }, { motif: 'star', x: 330, y: 84, s: 0.6 }, { motif: 'flower', x: 250, y: 238, color: 'lavender' }],
  intro: ['"구슬을 2개, 3개, 4개 순서로 그릇에 담으면 모두 9개예요. 4개, 3개, 2개 순서로 담으면 몇 개일까요?" 시연 단추로 사과가 1개에서 3개, 8개가 되는 모습을 보여 주고 순서를 거꾸로 해 본다. 순서를 바꾸면 답이 달라진다고 말하는 학생이 있는지 살핀다.', '순서를 바꾸어 담아도 모두 몇 개인지 같은지 알아봐요.'],
  demo: { tool: 'tenframe', options: { item: 'apple', showWord: true }, sequence: [{ count: 1 }, { count: 3 }, { count: 8 }] },
  acts: [
    { id: 'a1', title: '활동 1. 합이 같은 식끼리 나누기', minutes: 10, tool: 'mindmap',
      task: '식 카드를 계산해 보고 합이 같은 칸에 놓아요.',
      teacher: '"2 + 2 + 3과 3 + 2 + 2는 합이 같을까요?" 두 식에 같은 수가 있음을 짚는다. 계산해서 놓지 않고 첫 수가 크면 합도 크다고 짐작하는 학생에게는 앞에서부터 두 수씩 계산하게 한다.',
      levels: CARD,
      items: [
        sortCards('식 카드를 합이 7인 것과 9인 것으로 나누어 보세요.', '합이 같은 식', ['합이 7', '합이 9'], [['2 + 2 + 3', '합이 7'], ['4 + 3 + 2', '합이 9'], ['3 + 3 + 1', '합이 7'], ['1 + 4 + 4', '합이 9']], 0.12),
        sortCards('식 카드를 합이 8인 것과 10인 것으로 나누어 보세요.', '합이 같은 식', ['합이 8', '합이 10'], [['5 + 2 + 1', '합이 8'], ['3 + 3 + 4', '합이 10'], ['1 + 1 + 6', '합이 8'], ['2 + 6 + 2', '합이 10']], 0.15),
        sortCards('식 카드를 합이 6인 것과 9인 것으로 나누어 보세요.', '합이 같은 식', ['합이 6', '합이 9'], [['1 + 2 + 3', '합이 6'], ['5 + 3 + 1', '합이 9'], ['2 + 3 + 1', '합이 6'], ['6 + 1 + 2', '합이 9']], 0.18),
      ] },
    { id: 'a2', title: '활동 2. 순서를 바꾸어 구슬 모으기', minutes: 9, tool: 'tenframe',
      task: '같은 구슬을 순서를 바꾸어 놓아 봐요. 어떤 순서로 놓아도 모두 몇 개인지 같아요.',
      teacher: '"1개, 2개, 5개를 놓아 봐요. 이번에는 5개를 먼저 놓고 2개, 1개를 놓아 봐요. 모두 몇 개예요?" 순서를 바꾸어도 모두의 수가 같다고 직접 세어 보게 한다. 순서에 따라 개수가 달라진다고 말하는 학생에게는 두 번을 나란히 놓아 비교하게 한다.',
      levels: PUTC,
      items: [add3('구슬 1개에 2개를 더 놓고, 또 5개를 더 놓아 보세요.', 1, 2, 5, 0.12), add3('구슬 5개에 2개를 더 놓고, 또 1개를 더 놓아 보세요.', 5, 2, 1, 0.12),
        add3('구슬 4개에 4개를 더 놓고, 또 1개를 더 놓아 보세요.', 4, 4, 1, 0.15), add3('구슬 3개에 1개를 더 놓고, 또 3개를 더 놓아 보세요.', 3, 1, 3, 0.12)] },
    pair('a3', '활동 3. 짝과 순서를 바꾸어 구하기', 7, '세 수를 정해 짝과 순서를 바꾸어 더해요. 두 사람의 합이 같은지 견주어 봐요.',
      '짝끼리 칩 3, 4, 2를 정해 한 사람은 3, 4, 2 순서로, 다른 사람은 2, 4, 3 순서로 놓게 한다. 모두 몇 개인지 서로 세어 본다. "순서가 달라도 합이 같아요"를 짝에게 자기 말로 말하게 한다.',
      ['칩 3개, 4개, 2개를 3, 4, 2 순서로 놓고 "다 했어요"를 누르세요.', '같은 칩을 2, 4, 3 순서로 놓고 "다 했어요"를 누르세요.', '두 번 놓은 칩의 수가 같은지 짝과 세어 보고 "다 했어요"를 누르세요.'], 'tenframe', PUTC),
  ],
  wrap: ['"세 수를 더할 때 순서를 바꾸어도 합이 같나요? 왜 같다고 생각해요?" 칩을 놓았던 경험을 말하게 한다. 출구 1번을 틀린 학생은 앞에 큰 수를 두면 합이 커진다고 짐작한 것이므로 다음 시간에 계산해서 비교하게 한다.', [
    { type: 'choice', prompt: '2 + 5 + 1과 합이 같은 식은 무엇인가요?', options: ['1 + 5 + 2', '2 + 5 + 5'], answer: 0, difficulty: 0.1, explain: '1 + 5 + 2도 같은 수를 순서만 바꾸었으니 합이 8로 같아요.' },
    { type: 'choice', prompt: '3 + 4 + 2 = 9이면 2 + 4 + 3은 얼마인가요?', options: ['9', '7', '10'], answer: 0, difficulty: 0.12, explain: '순서를 바꾸어도 더하는 수가 같아서 합은 9로 같아요.' },
    { type: 'tool', tool: 'mindmap', options: { mode: 'order', topic: '계산 순서', cards: [{ id: '1 + 6 = 7', text: '1 + 6 = 7' }, { id: '7 + 2 = 9', text: '7 + 2 = 9' }] }, prompt: '1 + 6 + 2를 계산하는 순서대로 식 카드를 놓아 보세요.', target: { order: ['1 + 6 = 7', '7 + 2 = 9'] }, difficulty: 0.15 },
  ]],
  ws: { title: '순서를 바꾸어 더하기', items: [
    { type: 'table', prompt: '합을 구하고 같은지 ○ 하세요.', columns: ['식', '합'], cells: [['2 + 3 + 4', ''], ['4 + 3 + 2', ''], ['5 + 1 + 3', ''], ['3 + 1 + 5', '']], answer: '9, 9, 9, 9' },
    { type: 'choice', prompt: '4 + 2 + 3과 합이 같은 식에 ○ 하세요.', options: ['3 + 2 + 4', '4 + 2 + 2'], answer: '3 + 2 + 4' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '1 + 4 + 3 = ___ , 3 + 4 + 1 = ___', answer: '8, 8' },
    { type: 'figure', prompt: '칩을 모두 세어 식을 완성하세요.', tool: 'tenframe', options: { item: 'chip', color: 'sky' }, figures: [{ state: { count: 7 }, caption: '2 + 2 + 3 = ___' }, { state: { count: 9 }, caption: '5 + 1 + 3 = ___' }], answer: '7, 9' },
    { type: 'short', prompt: '세 수를 더할 때 순서를 바꾸면 합이 달라질까요? 까닭을 써 보세요.' },
  ], easy: { note: '같은 수를 순서만 바꾸어 더하면 합은 같아요.', items: [
    { type: 'table', prompt: '합을 구하세요.', columns: ['식', '합'], cells: [['1 + 2 + 3', ''], ['3 + 2 + 1', '']], answer: '6, 6' },
    { type: 'choice', prompt: '2 + 3 + 1과 합이 같은 식에 ○ 하세요.', options: ['1 + 3 + 2', '2 + 3 + 3'], answer: '1 + 3 + 2' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '2 + 2 + 1 = ___ , 1 + 2 + 2 = ___', answer: '5, 5' },
    { type: 'draw', prompt: '○ 3개, ○ 2개, ○ 1개를 그리고 모두 몇 개인지 써 보세요.' },
  ] } },
  diff: { easy: '카드를 맞는 칸에 놓으면 바로 초록 테두리가 생기고, 구슬 칸에 번호가 있어요.', base: '식 카드를 스스로 계산하여 나누어요. 구슬 수 카드는 가려져 있어요.', challenge: '구슬이 흩어진 칸에 들어가 한눈에 세기 어려워요.' },
  notes: '자주 보이는 어려움: ① 순서를 바꾸면 합이 달라진다고 생각한다 → 두 번 놓아 나란히 비교한다. ② 식의 첫 수만 보고 합이 크다고 짐작한다 → 앞에서부터 차례로 계산한다. ③ 순서를 바꿔 쓰다 한 수를 빠뜨린다 → 세 수가 모두 들어 있는지 확인한다. 뺄셈은 순서를 바꾸면 안 되므로 9차시에서 따로 한다.',
}));
// ───────────────────────────── 9차시 (core · representation) ─────────────────────────────
L.push(lesson(9, {
  title: '세 수의 뺄셈은 앞에서부터 차례로 하기',
  objective: '세 수의 뺄셈은 앞에서부터 차례로 계산해야 함을 알고, 수직선과 식 카드로 답을 구할 수 있다.',
  desc: 'a rabbit taking carrots out of a basket two times in a row, with the number flags on the basket showing fewer carrots each time',
  text: '9 − 3 − 2',
  layers: [{ motif: 'tree', x: 90, y: 214, s: 1.1 }, { motif: 'flower', x: 400, y: 236 }, { motif: 'bird', x: 300, y: 84 }, { motif: 'house', x: 390, y: 216, s: 0.9 }],
  intro: ['"사탕이 9개 있었어요. 3개를 먹고, 또 2개를 먹었어요. 몇 개가 남았을까요?" 시연 단추로 사과가 9개에서 6개, 4개로 줄어드는 모습을 보여 준다. "더하기는 순서를 바꿔도 같았어요. 빼기도 그럴까요?" 하고 물어 9 − 3 − 2를 2 − 3으로 바꾸어 계산하려는 학생이 있는지 살핀다.', '사탕을 두 번 먹으면 몇 개 남는지 차례로 빼 봐요.'],
  demo: { tool: 'tenframe', options: { item: 'apple', showWord: true }, sequence: [{ count: 9 }, { count: 6 }, { count: 4 }] },
  acts: [
    { id: 'a1', title: '활동 1. 수직선에서 왼쪽으로 두 번 뛰기', minutes: 9, tool: 'numberline',
      task: '출발점에서 왼쪽으로 두 번 뛰어요. 도착한 수가 남은 수예요.',
      teacher: '"9에서 3칸 왼쪽이면 어디예요? 거기서 또 2칸 왼쪽이에요." 두 번째 뛰기는 첫 번째 도착점에서 시작한다고 말해 준다. 두 번을 더해 5칸 뛰었다고 하는 학생은 맞다 — 5칸 뛴 것과 같음을 칭찬하고, 처음부터 5칸이 아니라 차례로 한 것도 짚는다.',
      levels: JUMP,
      items: [jump('9에서 왼쪽으로 3칸, 이어서 2칸 뛰어 보세요. 몇에 닿나요?', 9, 4, { min: 0, max: 10 }, 0.12), jump('10에서 왼쪽으로 4칸, 이어서 1칸 뛰어 보세요. 몇에 닿나요?', 10, 5, { min: 0, max: 10 }, 0.15),
        jump('8에서 왼쪽으로 2칸, 이어서 3칸 뛰어 보세요. 몇에 닿나요?', 8, 3, { min: 0, max: 10 }, 0.15), jump('7에서 왼쪽으로 1칸, 이어서 4칸 뛰어 보세요. 몇에 닿나요?', 7, 2, { min: 0, max: 10 }, 0.18)] },
    { id: 'a2', title: '활동 2. 계산하는 순서대로 식 놓기', minutes: 9, tool: 'mindmap',
      task: '세 수의 뺄셈도 앞의 두 수를 먼저 빼요. 계산하는 순서대로 식 카드를 놓아요.',
      teacher: '"8 − 3 − 2에서 먼저 빼는 두 수는 무엇이에요?" 첫 식의 답이 두 번째 식의 처음 수가 된다고 짚는다. 두 번째 식에서 처음 수 8을 다시 쓰는 학생에게는 첫 식의 답 5를 쓰게 한다.',
      levels: CARD,
      items: [orderCards('8 − 3 − 2를 계산하는 순서대로 식 카드를 놓아 보세요.', '계산 순서', ['8 − 3 = 5', '5 − 2 = 3'], 0.12), orderCards('10 − 5 − 1을 계산하는 순서대로 식 카드를 놓아 보세요.', '계산 순서', ['10 − 5 = 5', '5 − 1 = 4'], 0.15),
        orderCards('9 − 2 − 4를 계산하는 순서대로 식 카드를 놓아 보세요.', '계산 순서', ['9 − 2 = 7', '7 − 4 = 3'], 0.15)] },
    { id: 'a3', title: '활동 3. 바르게 계산한 카드 고르기', minutes: 8, tool: 'mindmap',
      task: '식 카드 가운데 앞에서부터 차례로 바르게 계산한 것만 골라요.',
      teacher: '"8 − 3 − 1 = 6은 어떻게 계산했을까요?" 틀린 카드는 뒤의 수를 빼지 않고 더한 것이다. 틀린 카드를 고르는 학생에게는 앞에서부터 한 번에 한 수씩 빼 보게 한다.',
      levels: CARD,
      items: [pickCards('바르게 계산한 카드만 골라 보세요.', '세 수의 뺄셈', '바른 계산', ['8 − 3 − 1 = 4', '8 − 3 − 1 = 6', '9 − 4 − 2 = 3', '9 − 4 − 2 = 7'], ['8 − 3 − 1 = 4', '9 − 4 − 2 = 3'], 0.18),
        pickCards('이번에도 바르게 계산한 카드만 골라 보세요.', '세 수의 뺄셈', '바른 계산', ['10 − 2 − 3 = 5', '10 − 2 − 3 = 11', '7 − 1 − 2 = 4', '7 − 1 − 2 = 8'], ['10 − 2 − 3 = 5', '7 − 1 − 2 = 4'], 0.2),
        pickCards('마지막으로 바르게 계산한 카드만 골라 보세요.', '세 수의 뺄셈', '바른 계산', ['6 − 1 − 2 = 3', '6 − 1 − 2 = 7', '9 − 5 − 1 = 3', '9 − 5 − 1 = 5'], ['6 − 1 − 2 = 3', '9 − 5 − 1 = 3'], 0.2)] },
  ],
  wrap: ['"세 수의 뺄셈은 어떤 순서로 해요?" 앞의 두 수를 먼저 빼는 모습을 손가락으로 보여 주게 한다. 출구 1번을 틀린 학생은 뒤의 두 수를 먼저 계산한 것이므로 다음 시간에 수직선으로 두 번 뛰어 보게 한다.', [
    { type: 'choice', prompt: '9 − 2 − 3을 계산할 때 먼저 하는 계산은 무엇인가요?', options: ['9 − 2 = 7', '2 − 3'], answer: 0, difficulty: 0.12, explain: '앞의 두 수 9와 2를 먼저 빼요. 7에서 3을 빼면 4예요.' },
    { type: 'choice', prompt: '7 − 2 − 1은 얼마인가요?', options: ['4', '6', '8'], answer: 0, difficulty: 0.12, explain: '7 − 2 = 5이고, 5 − 1 = 4예요.' },
    { type: 'tool', tool: 'numberline', options: { mode: 'jump', min: 0, max: 10, fixedFrom: 6, hopSize: 1, labels: 'all' }, prompt: '6에서 왼쪽으로 1칸, 이어서 3칸 뛰어 보세요.', target: { from: 6, end: 2 }, difficulty: 0.15 },
  ]],
  ws: { title: '세 수의 뺄셈', items: [
    { type: 'table', prompt: '앞에서부터 차례로 계산해 빈칸을 채우세요.', columns: ['식', '먼저', '답'], cells: [['9 − 3 − 4', '9 − 3 = 6', ''], ['8 − 2 − 1', '', ''], ['10 − 6 − 2', '', ''], ['7 − 5 − 1', '', '']], answer: '2, 5, 2, 1' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '8 − 4 − 3 → 8 − 4 = ___ , ___ − 3 = ___', answer: '4, 4, 1' },
    { type: 'choice', prompt: '10 − 3 − 5의 답에 ○ 하세요.', options: ['2', '12', '8'], answer: '2' },
    { type: 'figure', prompt: '사과가 몇 개 남았는지 세어 쓰세요.', tool: 'tenframe', options: { item: 'apple' }, figures: [{ state: { count: 4 }, caption: '9 − 3 − 2 = ___' }, { state: { count: 3 }, caption: '8 − 3 − 2 = ___' }], answer: '4, 3' },
    { type: 'short', prompt: '5 − 2 − 1을 2 − 1 = 1, 5 − 1 = 4로 계산하면 왜 안 되는지 써 보세요.' },
  ], easy: { note: '빼기는 앞에서부터 차례로 해요. 두 번째 뺄 때는 첫 번째 답에서 빼요.', items: [
    { type: 'table', prompt: '앞에서부터 차례로 계산해 빈칸을 채우세요.', columns: ['식', '먼저', '답'], cells: [['6 − 2 − 1', '6 − 2 = 4', ''], ['9 − 4 − 3', '', '']], answer: '3, 2' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '7 − 3 − 2 → 7 − 3 = ___ , ___ − 2 = ___', answer: '4, 4, 2' },
    { type: 'choice', prompt: '8 − 2 − 1의 답에 ○ 하세요.', options: ['5', '7'], answer: '5' },
    { type: 'draw', prompt: '○ 9개를 그리고 3개에 ×, 또 2개에 × 하여 남은 수를 써 보세요.' },
  ] } },
  diff: { easy: '수직선에 눈금 수와 도착한 수가 모두 보이고, 식 카드를 맞게 놓으면 초록 테두리가 생겨요.', base: '도착한 수와 식 카드의 순서를 스스로 정해요.', challenge: '수직선 눈금 글자가 줄어들고, 틀린 계산 카드가 섞여 있어 하나하나 계산해서 골라야 해요.' },
  notes: '자주 보이는 어려움: ① 뺄셈에서 순서를 바꾸어 작은 수 2에서 3을 빼려 한다 → 큰 수가 앞에 오고 앞에서부터 차례로 뺀다. ② 두 번째 뺄셈에서 처음 수를 다시 쓴다 → 첫 번째 답에서 이어서 뺀다. ③ 뒤의 수를 빼지 않고 더한다 → 줄어드는 이야기는 계속 빼는 이야기이다. 더하기는 순서를 바꿀 수 있지만 빼기는 안 된다는 것을 말로 짚는다.',
}));
// ───────────────────────────── 10차시 (practice · representation) ─────────────────────────────
L.push(lesson(10, {
  title: '더하고 빼는 세 수를 차례로 계산하기',
  objective: '더하는 수와 빼는 수가 섞인 세 수의 계산을 앞에서부터 차례로 하여 답을 구할 수 있다.',
  desc: 'a paper train station where passengers get on at the first stop and some get off at the next stop, with a small paper train and number flags',
  text: '5 + 3 − 2',
  layers: [{ motif: 'house', x: 110, y: 216, s: 0.9 }, { motif: 'tree', x: 390, y: 216 }, { motif: 'bird', x: 250, y: 84 }, { motif: 'flower', x: 250, y: 238 }],
  intro: ['"기차에 5명이 타고 있었어요. 다음 역에서 3명이 타고, 그다음 역에서 2명이 내렸어요. 지금 몇 명일까요?" 시연 단추로 사과가 5개에서 8개로 늘고, 6개로 줄어드는 모습을 보여 준다. "늘어나는 것은 더하고 줄어드는 것은 빼요. 이야기 차례대로 해요." 5 + 3 − 2에서 3 − 2를 먼저 계산하는 학생이 있는지 살핀다.', '기차에 타고 내리는 이야기를 차례대로 계산해 봐요.'],
  demo: { tool: 'tenframe', options: { item: 'apple', showWord: true }, sequence: [{ count: 5 }, { count: 8 }, { count: 6 }] },
  acts: [
    { id: 'a1', title: '활동 1. 사과를 더 놓고 덜어 내기', minutes: 9, tool: 'tenframe',
      task: '이야기 차례대로 사과를 더 놓고, 이어서 덜어 내요. 남은 사과를 세어요.',
      teacher: '"먼저 몇 개를 더 놓아요? 그다음에는 몇 개를 덜어 내요?" 이야기 차례를 손가락으로 짚어 가며 한다. 더 놓는 것과 덜어 내는 것을 한꺼번에 계산하여 틀리는 학생에게는 중간에 몇 개인지 말하게 한다.',
      levels: PUT,
      items: [mix('사과 5개에 3개를 더 놓고, 이어서 2개를 덜어 내 보세요.', 5, 3, 2, 0.15), mix('사과 4개에 4개를 더 놓고, 이어서 3개를 덜어 내 보세요.', 4, 4, 3, 0.18),
        mix('사과 6개에 2개를 더 놓고, 이어서 5개를 덜어 내 보세요.', 6, 2, 5, 0.2), mix('사과 3개에 5개를 더 놓고, 이어서 6개를 덜어 내 보세요.', 3, 5, 6, 0.22)] },
    { id: 'a2', title: '활동 2. 수직선에서 오른쪽, 왼쪽으로 이어 뛰기', minutes: 9, tool: 'numberline',
      task: '더하는 수는 오른쪽으로, 빼는 수는 왼쪽으로 이어서 뛰어요.',
      teacher: '"4에서 오른쪽으로 5칸, 이어서 왼쪽으로 3칸이에요." 첫 번째 도착점에서 두 번째를 시작한다고 말해 준다. 두 번째에도 오른쪽으로 뛰는 학생에게는 빼는 수 앞의 기호를 다시 읽게 한다.',
      levels: JUMP,
      items: [jump('4에서 오른쪽으로 5칸, 이어서 왼쪽으로 3칸 뛰어 보세요. 몇에 닿나요?', 4, 6, { min: 0, max: 10 }, 0.15), jump('7에서 오른쪽으로 2칸, 이어서 왼쪽으로 6칸 뛰어 보세요. 몇에 닿나요?', 7, 3, { min: 0, max: 10 }, 0.18),
        jump('2에서 오른쪽으로 7칸, 이어서 왼쪽으로 5칸 뛰어 보세요. 몇에 닿나요?', 2, 4, { min: 0, max: 10 }, 0.2), jump('8에서 오른쪽으로 2칸, 이어서 왼쪽으로 6칸 뛰어 보세요. 몇에 닿나요?', 8, 4, { min: 0, max: 10 }, 0.22)] },
    { id: 'a3', title: '활동 3. 계산하는 순서대로 식 놓기', minutes: 8, tool: 'mindmap',
      task: '더하고 빼는 세 수도 앞에서부터 차례로 계산해요. 순서대로 식 카드를 놓아요.',
      teacher: '"5 + 3 − 2에서 먼저 하는 계산은 어느 것이에요?" 더하기와 빼기가 섞여도 앞에서부터라고 짚는다. 3 − 2를 먼저 하는 학생에게는 식을 앞에서부터 손가락으로 읽게 한다.',
      levels: CARD,
      items: [orderCards('5 + 3 − 2를 계산하는 순서대로 식 카드를 놓아 보세요.', '계산 순서', ['5 + 3 = 8', '8 − 2 = 6'], 0.15), orderCards('9 − 4 + 3을 계산하는 순서대로 식 카드를 놓아 보세요.', '계산 순서', ['9 − 4 = 5', '5 + 3 = 8'], 0.18),
        orderCards('3 + 6 − 5를 계산하는 순서대로 식 카드를 놓아 보세요.', '계산 순서', ['3 + 6 = 9', '9 − 5 = 4'], 0.18)] },
  ],
  wrap: ['"더하기와 빼기가 섞여 있어도 어디서부터 계산해요?" 앞에서부터 읽는 모습을 짝에게 보여 주게 한다. 출구 2번을 틀린 학생은 뒤의 두 수를 먼저 계산한 것이므로 다음 시간에 식 카드를 순서대로 놓아 보게 한다.', [
    { type: 'choice', prompt: '7 + 2 − 4를 계산할 때 먼저 하는 계산은 무엇인가요?', options: ['7 + 2 = 9', '2 − 4'], answer: 0, difficulty: 0.12, explain: '앞의 두 수 7과 2를 먼저 더해 9가 돼요. 9에서 4를 빼면 5예요.' },
    { type: 'choice', prompt: '8 − 3 + 2는 얼마인가요?', options: ['7', '3', '9'], answer: 0, difficulty: 0.15, explain: '8 − 3 = 5이고, 5 + 2 = 7이에요.' },
    { type: 'tool', tool: 'tenframe', options: { item: 'chip', color: 'mint', showCount: false }, state: { count: 6 }, prompt: '칩 6개에 3개를 더 놓고, 이어서 4개를 덜어 내 보세요.', target: { count: 6, more: 3, less: 4 }, difficulty: 0.18 },
  ]],
  ws: { title: '더하고 빼기가 섞인 계산', items: [
    { type: 'table', prompt: '앞에서부터 차례로 계산해 빈칸을 채우세요.', columns: ['식', '먼저', '답'], cells: [['4 + 3 − 2', '4 + 3 = 7', ''], ['9 − 5 + 3', '', ''], ['2 + 6 − 4', '', ''], ['8 − 3 + 1', '', '']], answer: '5, 7, 4, 6' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '6 + 2 − 5 → 6 + 2 = ___ , ___ − 5 = ___', answer: '8, 8, 3' },
    { type: 'choice', prompt: '7 − 4 + 5의 답에 ○ 하세요.', options: ['8', '2', '6'], answer: '8' },
    { type: 'figure', prompt: '기차에 남은 사람 수만큼 칩이 놓여 있어요. 몇 명인지 쓰세요.', tool: 'tenframe', options: { item: 'chip', color: 'sky' }, figures: [{ state: { count: 5 }, caption: '3 + 4 − 2 = ___' }, { state: { count: 7 }, caption: '5 + 4 − 2 = ___' }], answer: '5, 7' },
    { type: 'short', prompt: '5 + 3 − 2를 어떻게 계산하는지 순서대로 써 보세요.' },
  ], easy: { note: '더하기 빼기가 섞여도 앞에서부터 차례로 해요.', items: [
    { type: 'table', prompt: '앞에서부터 차례로 계산해 빈칸을 채우세요.', columns: ['식', '먼저', '답'], cells: [['3 + 2 − 1', '3 + 2 = 5', ''], ['6 − 2 + 3', '', '']], answer: '4, 7' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '4 + 3 − 2 → 4 + 3 = ___ , ___ − 2 = ___', answer: '7, 7, 5' },
    { type: 'choice', prompt: '5 − 2 + 1의 답에 ○ 하세요.', options: ['4', '2'], answer: '4' },
    { type: 'draw', prompt: '○ 4개에 2개를 더 그리고, 3개에 × 하여 남은 수를 써 보세요.' },
  ] } },
  diff: { easy: '사과 칸에 번호가 있고 수직선에 눈금 수와 도착한 수가 모두 보여요.', base: '수 카드가 가려져 있고 도착한 수는 스스로 읽어요.', challenge: '사과가 흩어진 칸에 들어가고 수직선에는 큰 눈금 수만 있어요.' },
  notes: '자주 보이는 어려움: ① 뒤의 두 수를 먼저 계산한다(5 + 3 − 2에서 3 − 2) → 앞에서부터 차례로 읽는다. ② 빼는 수에서도 오른쪽으로 뛴다 → 기호 −를 보고 왼쪽으로 뛴다. ③ 중간에 나온 수를 잊고 처음 수로 돌아간다 → 중간 수를 큰 소리로 말하게 한다.',
}));
// ───────────────────────────── 11차시 (core · application) ─────────────────────────────
L.push(lesson(11, {
  title: '이야기 속 세 수로 식 세우고 두 자리 수까지 계산하기',
  objective: '세 수가 나오는 이야기를 식으로 나타내 계산하고, 받아올림·받아내림이 없는 두 자리 수까지 확장해 구할 수 있다.',
  desc: 'a paper school bus stopping at two stops with children getting on and off, with small number flags above the bus',
  text: '타요 내려요',
  layers: [{ motif: 'house', x: 100, y: 216, s: 0.9 }, { motif: 'tree', x: 400, y: 216 }, { motif: 'bird', x: 250, y: 84 }, { motif: 'star', x: 330, y: 84, s: 0.6 }],
  intro: ['"버스에 3명이 있었어요. 첫 정류장에서 2명이 타고, 다음 정류장에서 1명이 내렸어요. 지금 몇 명일까요?" 시연 단추로 사과가 3개에서 5개로 늘고 4개로 줄어드는 모습을 보여 준다. "이야기를 식으로 써 봐요. 3 + 2 − 1이지요." 이야기의 마지막 수만 보고 답을 쓰는 학생이 있는지 살핀다.', '이야기를 읽고 세 수의 식으로 바꾸어 계산해 봐요.'],
  demo: { tool: 'tenframe', options: { item: 'apple', showWord: true }, sequence: [{ count: 3 }, { count: 5 }, { count: 4 }] },
  acts: [
    { id: 'a1', title: '활동 1. 이야기와 세 수의 식 짝짓기', minutes: 9, tool: 'mindmap',
      task: '이야기에 맞는 세 수의 식 카드를 놓아요. 차례대로 읽고 더할지 뺄지 정해요.',
      teacher: '"처음에 몇 명이 있었어요? 그다음에 타요, 내려요?" 이야기 순서대로 식을 쓴다고 말해 준다. 내려요를 더하기로 고르는 학생에게는 사람이 줄었는지 늘었는지 먼저 말하게 한다.',
      levels: CARD,
      items: [
        matchCards('이야기에 맞는 식 카드를 이어 보세요.', '식 고르기', [['버스에 4명이 있었어요. 2명이 타고 1명이 내렸어요.', '4 + 2 − 1'], ['접시에 쿠키 7개가 있었어요. 3개를 먹고 2개를 더 담았어요.', '7 − 3 + 2'], ['연필 2자루에 3자루, 또 4자루를 더 받았어요.', '2 + 3 + 4']], null, 0.18),
        matchCards('이번에도 이야기에 맞는 식 카드를 이어 보세요.', '식 고르기', [['수영장에 8명이 있었어요. 3명이 나가고 1명이 더 나갔어요.', '8 − 3 − 1'], ['새 5마리에 1마리가 오고 2마리가 날아갔어요.', '5 + 1 − 2'], ['구슬 1개에 2개, 또 5개를 더 넣었어요.', '1 + 2 + 5']], null, 0.2),
        matchCards('식 카드 한 장이 남아요. 맞는 카드만 이어 보세요.', '식 고르기', [['엘리베이터에 6명이 있었어요. 4명이 내리고 2명이 탔어요.', '6 − 4 + 2'], ['풍선 3개에 4개를 더 불고 1개가 터졌어요.', '3 + 4 − 1']], ['6 + 4 − 2'], 0.22),
      ] },
    { id: 'a2', title: '활동 2. 이야기대로 사과 놓기', minutes: 8, tool: 'tenframe',
      task: '이야기 차례대로 사과를 더 놓거나 덜어 내요. 남은 사과를 세어요.',
      teacher: '"두 번째 정류장에서는 몇 명이 내렸어요? 사과를 덜어 내 볼까요?" 이야기의 순서가 바뀌지 않았는지 짚는다. 세 번째 수를 빠뜨리는 학생에게는 이야기를 다시 읽으며 사과를 놓게 한다.',
      levels: PUT,
      items: [mix('버스에 사과 6개가 있었어요. 3개를 더 놓고, 이어서 5개를 덜어 내 보세요.', 6, 3, 5, 0.2), mix('바구니에 사과 2개가 있었어요. 6개를 더 놓고, 이어서 4개를 덜어 내 보세요.', 2, 6, 4, 0.2),
        add3('접시에 사과 1개가 있었어요. 4개를 더 놓고, 또 3개를 더 놓아 보세요.', 1, 4, 3, 0.18)] },
    { id: 'a3', title: '활동 3. 두 자리 수로 세 수 계산하기', minutes: 9, tool: 'numberline',
      task: '일의 자리 수만 더하거나 빼요. 십의 자리 수는 그대로예요.',
      teacher: '"21에 3을 더하고 또 4를 더하면 십의 자리는 바뀌나요?" 일의 자리끼리만 계산하고 합이 10을 넘지 않는 수만 쓴다고 알려 준다. 일의 자리 합이 9인데 십의 자리를 바꾸는 학생에게는 10이 되기 전까지 1씩 센다고 짚어 준다.',
      levels: JUMP,
      items: [jump('21에서 오른쪽으로 3칸, 이어서 4칸 뛰어 보세요. 몇에 닿나요?', 21, 28, { min: 20, max: 30 }, 0.2), jump('32에서 오른쪽으로 5칸, 이어서 2칸 뛰어 보세요. 몇에 닿나요?', 32, 39, { min: 30, max: 40 }, 0.22),
        jump('48에서 왼쪽으로 3칸, 이어서 2칸 뛰어 보세요. 몇에 닿나요?', 48, 43, { min: 40, max: 50 }, 0.22), jump('36에서 오른쪽으로 3칸, 이어서 왼쪽으로 5칸 뛰어 보세요. 몇에 닿나요?', 36, 34, { min: 30, max: 40 }, 0.25)] },
  ],
  wrap: ['"이야기에서 식을 세울 때 무엇부터 해요?" 처음에 있던 수를 먼저 말하게 한다. 출구 2번을 틀린 학생은 이야기 순서를 놓친 것이므로 다음 시간에 사과를 놓으며 이야기를 다시 따라가게 한다.', [
    { type: 'choice', prompt: '"새 5마리가 있었는데 2마리가 날아가고 1마리가 더 날아갔어요." 알맞은 식은 무엇인가요?', options: ['5 − 2 − 1', '5 + 2 + 1'], answer: 0, difficulty: 0.15, explain: '날아가서 새가 줄어요. 줄어드는 것은 빼기라서 5 − 2 − 1이에요.' },
    { type: 'choice', prompt: '23 + 2 + 4는 얼마인가요?', options: ['29', '65', '27'], answer: 0, difficulty: 0.2, explain: '일의 자리끼리 3 + 2 = 5, 5 + 4 = 9이고 십의 자리는 그대로 2라서 29예요.' },
    { type: 'tool', tool: 'tenframe', options: { item: 'apple', showCount: false }, state: { count: 7 }, prompt: '사과 7개에 2개를 더 놓고, 이어서 5개를 덜어 내 보세요.', target: { count: 7, more: 2, less: 5 }, difficulty: 0.2 },
  ]],
  ws: { title: '이야기와 세 수의 계산', items: [
    { type: 'table', prompt: '이야기에 알맞은 식에 ○ 하세요.', columns: ['이야기', '식 ①', '식 ②'], cells: [['귤 4개에 2개, 또 3개를 더 받았어요', '4 + 2 + 3', '4 + 2 − 3'], ['버스에 7명이 있었는데 2명이 내리고 3명이 탔어요', '7 − 2 + 3', '7 + 2 − 3']], answer: '4 + 2 + 3, 7 − 2 + 3' },
    { type: 'table', prompt: '식을 계산해 답을 쓰세요.', columns: ['식', '답'], cells: [['5 + 3 − 4', ''], ['9 − 3 − 2', ''], ['24 + 3 + 2', ''], ['38 − 4 − 3', '']], answer: '4, 4, 29, 31' },
    { type: 'blank', prompt: '이야기를 읽고 식을 완성하세요.', text: '공 6개에 3개를 더 넣고 4개를 꺼냈어요. 6 + 3 ___ 4 = ___', answer: '− , 5' },
    { type: 'figure', prompt: '칩이 놓여 있어요. 몇 개인지 쓰세요.', tool: 'tenframe', options: { item: 'chip', color: 'sky' }, figures: [{ state: { count: 4 }, caption: '6 − 3 + 1 = ___' }, { state: { count: 8 }, caption: '2 + 5 + 1 = ___' }], answer: '4, 8' },
    { type: 'short', prompt: '세 수가 나오는 이야기를 하나 만들고 식을 써 보세요.' },
  ], easy: { note: '이야기 순서대로 더하고 빼요. 두 자리 수는 일의 자리만 계산해요.', items: [
    { type: 'table', prompt: '이야기에 알맞은 식에 ○ 하세요.', columns: ['이야기', '식 ①', '식 ②'], cells: [['새 3마리에 2마리, 또 1마리가 왔어요', '3 + 2 + 1', '3 + 2 − 1']], answer: '3 + 2 + 1' },
    { type: 'table', prompt: '식을 계산해 답을 쓰세요.', columns: ['식', '답'], cells: [['2 + 3 − 1', ''], ['21 + 2 + 1', '']], answer: '4, 24' },
    { type: 'blank', prompt: '식을 완성하세요.', text: '4 + 2 − 3 = ___', answer: '3' },
    { type: 'draw', prompt: '이야기를 하나 정해 ○와 ×로 그려 보세요.' },
  ] } },
  diff: { easy: '이야기와 맞는 식 카드를 놓으면 초록 테두리가 생기고, 수직선 눈금 수와 도착한 수가 모두 보여요.', base: '식 카드를 스스로 이어요. 사과 수 카드가 가려져 있어요.', challenge: '남는 식 카드가 섞이고 두 자리 수 수직선에는 큰 눈금 수만 있어요.' },
  notes: '자주 보이는 어려움: ① 이야기의 순서대로 식을 쓰지 않는다 → 처음 수부터 차례로 읽는다. ② "내려요", "날아가요"를 더하기로 쓴다 → 늘었는지 줄었는지 먼저 말한다. ③ 두 자리 수에서 일의 자리끼리만 계산하지 못한다 → 십의 자리는 그대로 둔다. 이 단원의 두 자리 수는 받아올림과 받아내림이 없는 경우만 쓴다.',
}));
// ───────────────────────────── 12차시 (wrap) ─────────────────────────────
L.push(lesson(12, {
  title: '배운 덧셈과 뺄셈 모아서 내가 계산해 보기',
  objective: '단원에서 배운 이야기와 식, 세 수의 계산, 몇십몇의 덧셈과 뺄셈을 묶어 말하고 스스로 계산할 수 있다.',
  desc: 'a small paper shop with a girl counting coins and apples on a counter, three little jars and a chalk board on the wall with plus and minus signs',
  text: '내가 계산해요',
  layers: [{ motif: 'house', x: 110, y: 216, s: 0.9 }, { motif: 'tree', x: 380, y: 216 }, { motif: 'bird', x: 200, y: 84 }, { motif: 'flower', x: 250, y: 238, color: 'lavender' }],
  intro: ['"이 단원에서 더하는 이야기와 빼는 이야기를 배웠어요. 세 수도 계산했어요. 오늘은 내가 아는 것을 모아 봐요." 시연 단추로 사과가 4개에서 7개로 늘고 5개로 줄어드는 모습을 보여 준다. 이야기만 읽고 더할지 뺄지 고르던 때를 떠올려 말하게 하고, 아직도 헷갈리는 것이 있는지 손을 들어 보게 한다.', '지금까지 배운 것을 떠올리며 한 번 더 계산해 봐요.'],
  demo: { tool: 'tenframe', options: { item: 'apple', showWord: true }, sequence: [{ count: 4 }, { count: 7 }, { count: 5 }] },
  acts: [
    { id: 'a1', title: '활동 1. 10과 5씩 뛰어 세 수 계산하기', minutes: 9, tool: 'numberline',
      task: '10씩, 5씩 뛰어 세 수를 계산해요. 일의 자리가 10을 넘지 않는 수만 나와요.',
      teacher: '"20에서 10을 뛰면 30이에요. 거기서 5를 더 뛰면요?" 뛰는 크기가 달라지는 것을 짚는다. 10을 뛰어야 하는데 5씩 두 번이 아니라 1칸만 뛰는 학생에게는 한 번에 10을 뛰는 단추를 눌러 보게 한다.',
      levels: { easy: { mode: 'jump', labels: 'major', showValue: true }, base: { mode: 'jump', labels: 'major' }, challenge: { mode: 'jump', labels: 'ends' } },
      items: [jump('20에서 10, 이어서 5만큼 오른쪽으로 뛰어 보세요. 몇에 닿나요?', 20, 35, { min: 20, max: 40, step: 5, sub: 5, hop: 5 }, 0.18), jump('30에서 5, 이어서 10만큼 오른쪽으로 뛰어 보세요. 몇에 닿나요?', 30, 45, { min: 30, max: 50, step: 5, sub: 5, hop: 5 }, 0.2),
        jump('45에서 10, 이어서 5만큼 왼쪽으로 뛰어 보세요. 몇에 닿나요?', 45, 30, { min: 30, max: 50, step: 5, sub: 5, hop: 5 }, 0.22), jump('60에서 20을 더하고 10을 빼 보세요. 몇에 닿나요?', 60, 70, { min: 50, max: 90, step: 10, sub: 10, hop: 10 }, 0.22)] },
    { id: 'a2', title: '활동 2. 이야기대로 사과 놓아 보기', minutes: 9, tool: 'tenframe',
      task: '이야기를 끝까지 읽고 사과를 더 놓거나 덜어 내요. 남은 사과를 세어요.',
      teacher: '"더하는 이야기일까요, 빼는 이야기일까요? 다음 이야기도 같은 순서일까요?" 각 문장마다 손짓으로 늘어나는지 줄어드는지 보여 준다. 마지막 문장만 보고 놓는 학생에게는 처음부터 다시 읽어 주며 차례대로 놓게 한다.',
      levels: PUT,
      items: [add3('접시에 사과 3개가 있어요. 1개를 더 놓고, 또 6개를 더 놓아 보세요.', 3, 1, 6, 0.2), mix('바구니에 사과 8개가 있어요. 2개를 더 놓고, 이어서 7개를 덜어 내 보세요.', 8, 2, 7, 0.25),
        less('쟁반에 사과 10개가 있어요. 7개를 덜어 내 보세요.', 10, 7, 0.2), more('상자에 사과 5개가 있어요. 5개를 더 놓아 보세요.', 5, 5, 0.15)] },
    { id: 'a3', title: '활동 3. 계산 종류별로 식 나누기', minutes: 8, tool: 'mindmap',
      task: '식 카드를 세 가지 종류로 나누어요. 더하기만, 빼기만, 더하기와 빼기가 섞인 식이에요.',
      teacher: '"식에 어떤 기호가 있어요? 더하기만 있나요, 빼기도 있나요?" 기호를 손가락으로 짚어 분류하게 한다. 합이나 답이 아니라 기호를 보는 것임을 짚고, 3 + 4 − 1을 더하기만 있는 칸에 놓는 학생에게는 빼기도 있음을 다시 보게 한다.',
      levels: CARD,
      items: [
        sortCards('식 카드를 기호에 따라 나누어 보세요.', '식 종류', ['더하기만', '빼기만', '섞인 식'], [['2 + 3 + 4', '더하기만'], ['9 − 3 − 2', '빼기만'], ['5 + 3 − 2', '섞인 식'], ['1 + 6 + 2', '더하기만'], ['8 − 1 − 4', '빼기만'], ['4 + 2 − 5', '섞인 식']], 0.18),
        sortCards('이번에도 식 카드를 기호에 따라 나누어 보세요.', '식 종류', ['더하기만', '빼기만', '섞인 식'], [['3 + 3 + 3', '더하기만'], ['10 − 4 − 5', '빼기만'], ['7 − 2 + 4', '섞인 식'], ['2 + 5 + 1', '더하기만'], ['9 − 5 − 2', '빼기만'], ['6 − 3 + 5', '섞인 식']], 0.2),
        sortCards('마지막으로 식 카드를 기호에 따라 나누어 보세요.', '식 종류', ['더하기만', '빼기만', '섞인 식'], [['1 + 1 + 5', '더하기만'], ['7 − 3 − 3', '빼기만'], ['2 + 7 − 6', '섞인 식'], ['4 + 4 + 2', '더하기만'], ['9 − 6 − 1', '빼기만'], ['8 − 2 + 3', '섞인 식']], 0.22),
      ] },
  ],
  wrap: ['"이 단원에서 새로 알게 된 것을 한 가지씩 말해 봐요." 더하는 이야기와 빼는 이야기, 앞에서부터 차례로 계산하기, 두 자리 수에서 일의 자리만 계산하기 중 하나를 말하게 한다. 출구에서 틀린 문항은 그 차시로 돌아가 다시 풀게 한다.', [
    { type: 'choice', prompt: '"풍선 9개 중 4개가 터지고 2개가 더 터졌어요." 알맞은 식은 무엇인가요?', options: ['9 − 4 − 2', '9 + 4 + 2', '9 − 4 + 2'], answer: 0, difficulty: 0.18, explain: '풍선이 계속 줄어요. 앞에서부터 9 − 4 = 5, 5 − 2 = 3이에요.' },
    { type: 'choice', prompt: '5 + 3 − 4는 얼마인가요?', options: ['4', '12', '6'], answer: 0, difficulty: 0.18, explain: '5 + 3 = 8이고, 8 − 4 = 4예요.' },
    { type: 'choice', prompt: '34 + 5는 얼마인가요?', options: ['39', '84', '29'], answer: 0, difficulty: 0.15, explain: '일의 자리끼리 4 + 5 = 9이고 십의 자리 3은 그대로라서 39예요.' },
  ]],
  ws: { title: '덧셈과 뺄셈 정리', items: [
    { type: 'table', prompt: '식을 계산해 답을 쓰세요.', columns: ['식', '답'], cells: [['4 + 5', ''], ['9 − 6', ''], ['2 + 4 + 3', ''], ['10 − 3 − 5', ''], ['6 + 3 − 4', '']], answer: '9, 3, 9, 2, 5' },
    { type: 'table', prompt: '두 자리 수의 식을 계산해 쓰세요.', columns: ['식', '답'], cells: [['40 + 30', ''], ['85 − 40', ''], ['36 + 3', ''], ['59 − 6', '']], answer: '70, 45, 39, 53' },
    { type: 'choice', prompt: '"과자 6개를 먹고 2개를 더 먹었어요." 알맞은 식에 ○ 하세요.', options: ['6 − 2', '6 + 2'], answer: '6 + 2' },
    { type: 'figure', prompt: '사과를 세어 식을 완성하세요.', tool: 'tenframe', options: { item: 'apple', twoColor: true }, figures: [{ state: { parts: [5, 4] }, caption: '5 + 4 = ___' }, { state: { parts: [3, 6] }, caption: '3 + 6 = ___' }], answer: '9, 9' },
    { type: 'short', prompt: '이 단원에서 가장 어려웠던 것과 쉬웠던 것을 한 가지씩 써 보세요.' },
  ], easy: { note: '더하면 늘어나요. 빼면 줄어요. 세 수는 앞에서부터 차례로 계산해요.', items: [
    { type: 'table', prompt: '식을 계산해 답을 쓰세요.', columns: ['식', '답'], cells: [['3 + 2', ''], ['7 − 3', ''], ['1 + 2 + 3', ''], ['20 + 30', '']], answer: '5, 4, 6, 50' },
    { type: 'choice', prompt: '"공 5개 중 2개를 잃어버렸어요." 알맞은 식에 ○ 하세요.', options: ['5 + 2', '5 − 2'], answer: '5 − 2' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '21 + 4 = ___', answer: '25' },
    { type: 'draw', prompt: '이 단원에서 배운 것을 그림으로 한 가지 그려 보세요.' },
  ] } },
  diff: { easy: '수직선에 눈금 수와 도착한 수가 모두 보이고, 식 카드를 맞게 놓으면 초록 테두리가 생겨요.', base: '눈금 수는 보이지만 도착한 수는 스스로 읽고, 식 카드는 스스로 나누어요.', challenge: '눈금 수가 양 끝에만 있고 사과가 흩어진 칸에 들어가요.' },
  notes: '자주 보이는 어려움: ① 이야기 낱말만 보고 더하기 빼기를 고른다 → 늘었는지 줄었는지 판단한다. ② 세 수의 뺄셈 순서를 바꾼다 → 앞에서부터 차례로 계산한다. ③ 두 자리 수에서 십의 자리와 일의 자리를 섞는다 → 일의 자리만 계산한다. 받아올림과 받아내림이 있는 계산은 이 단원에서 다루지 않았다.',
}));
// @@NEXT@@
PaperLessons.registerUnit({
  id: UID, schema: 'edu-unit.v1', catalogUnit: CU, grade: 1, subject: '수학', unitTitle: UT,
  flow: '1~3차시는 이야기를 듣고 더하는 이야기와 빼는 이야기를 가르고, 사과·칩을 더 놓고 덜어 내며 모두와 남은 수를 구한 뒤 이야기를 덧셈식·뺄셈식으로 쓰고 읽습니다. 4~6차시는 수직선에서 오른쪽으로 뛰면 더하고 왼쪽으로 뛰면 빼는 것을 확인하고, 이야기에서 구하려는 것이 모두인지 남은 것인지 가려 식을 고른 뒤, 받아올림과 받아내림이 없는 몇십 ± 몇십, 몇십몇 ± 몇으로 넓힙니다. 7~9차시는 세 수를 앞에서부터 차례로 더하고, 더하는 순서를 바꾸어도 합이 같음을 확인한 다음, 뺄셈은 순서를 바꾸지 않고 앞에서부터 차례로 계산해야 함을 짚습니다. 10~11차시는 더하고 빼는 수가 섞인 세 수와 이야기 속 세 수를 계산하며 두 자리 수(일의 자리만 바뀌는 경우)까지 적용하고, 12차시에서 단원 전체를 묶어 스스로 계산합니다.',
  refs: {},
  lessons: L,
});
})();
