/* 1학년 2학기 5. 규칙 찾기 — 단원 파일(차시 12개).
 * 흐름: 되풀이되는 색·모양 규칙 찾기(1) → 세 칸 묶음 규칙 이어 가기(2) → 같은 규칙을 모양·글자·수로 바꿔 나타내기(3)
 *      → 소리·몸동작으로 나타내기(4) → 1·2·5씩 커지는 수 규칙(5) → 작아지는 수와 되풀이되는 수 규칙(6)
 *      → 내가 정한 규칙으로 늘어놓기 두 칸 묶음(7) → 세 칸 묶음·정한 묶음대로(8) → 글자·수로 내 규칙 만들기(9)
 *      → 동작·수로 정한 규칙 만들기(10) → 무늬 꾸미기에 규칙 쓰기(11) → 단원 정리(12).
 * 성취기준 [2수02-01](여러 가지 물체·무늬·수의 배열에서 규칙을 찾아 여러 방법으로 나타내기), [2수02-02](자신이 정한 규칙에 따라 배열하기).
 */
(function () {
const UID = 'g1-math-2-05', CU = 'g1-수학-2학기-5', UT = '5. 규칙 찾기';
const S1 = ['[2수02-01]'], S2 = ['[2수02-02]'];
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
  title: d.title, objective: d.objective, standards: n <= 6 ? S1 : S2, minutes: 40, formats: ['chromebook', 'projector', 'print'],
  illustration: ill(d.desc, d.text, d.layers),
  stages: [
    Object.assign({ id: 'intro', title: '도입', minutes: 7, teacher: d.intro[0], student: d.intro[1] }, d.demo ? { demo: d.demo } : {}),
    { id: 'main', title: '전개', minutes: 26, activities: d.acts },
    { id: 'wrapup', title: '정리', minutes: 7, teacher: d.wrap[0], exitTicket: [...d.wrap[1], { type: 'mood', prompt: '오늘 공부는 어땠나요?' }] },
  ],
  worksheet: d.ws, differentiation: d.diff, teacherNotes: d.notes,
});
const PLV = (mode) => ({ easy: { mode }, base: { mode }, challenge: { mode, revealAfterCheck: true } });
const CARD_LV = { easy: { live: true, instant: true }, base: {}, challenge: {} };
const fill = (prompt, seq, ans, d, extra) => Object.assign({ prompt, toolOptions: { mode: 'fill', seq }, target: { fill: ans }, difficulty: d }, extra || {});
const rule = (prompt, seq, choices, k, d, extra) => Object.assign({ prompt, toolOptions: { mode: 'rule', seq, choices, question: '어떤 규칙으로 늘어놓았나요?' }, target: { pick: k }, difficulty: d }, extra || {});
const odd = (prompt, seq, k, d, extra) => Object.assign({ prompt, toolOptions: { mode: 'odd', seq }, target: { odd: k }, difficulty: d }, extra || {});
const make = (prompt, palette, length, target, d, extra, opts) => Object.assign({ prompt, toolOptions: Object.assign({ mode: 'make', palette, length }, opts || {}), target, difficulty: d }, extra || {});
const match = (prompt, topic, slots, cards, d, extra) => {
  const sl = slots.map((s, i) => ({ id: `s${i + 1}`, label: s }));
  const tg = {}; sl.forEach((s, i) => { tg[s.id] = cards[i]; });
  return Object.assign({ prompt, toolOptions: { mode: 'match', topic, slots: sl, cards: cards.slice().reverse() }, target: { match: tg }, difficulty: d }, extra || {});
};
const pickOf = (prompt, basket, cards, ok, d, extra) => Object.assign({ prompt, toolOptions: { mode: 'pick', basket, cards }, target: { pick: ok }, difficulty: d }, extra || {});
const fig = (prompt, seq, answer) => ({ type: 'figure', wide: true, prompt, tool: 'pattern', options: { seq }, figures: [{ caption: '' }], answer });
const L = [];
// ───────────────────────────── 1차시 (intro) ─────────────────────────────
L.push(lesson(1, {
  title: '구슬 목걸이에서 되풀이되는 규칙 찾기',
  objective: '구슬이나 모양이 늘어선 줄에서 같은 것이 되풀이되는 규칙을 찾아 다음에 올 것을 말할 수 있다.',
  desc: 'a long paper bead necklace laid on a table with pink and blue beads taking turns, a little cat looking at it curiously',
  text: '다음 구슬은 무슨 색?',
  layers: [{ motif: 'flower', x: 100, y: 234 }, { motif: 'flower', x: 150, y: 238, color: 'rose' }, { motif: 'tree', x: 380, y: 216 }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"구슬 목걸이에 분홍, 파랑, 분홍, 파랑… 구슬이 이어져 있어요. 다음 구슬은 무슨 색일까요?" 칠판에 구슬 여섯 개를 붙이고 빈칸 하나를 가린다. 소리 내어 "분홍, 파랑, 분홍, 파랑" 하고 읽게 한 뒤 다음을 말하게 한다. 바로 앞 구슬과 같은 색을 고르는 학생이 있다 — 두 개씩 묶어 읽으면 같은 묶음이 되풀이된다고 짚는다.', '구슬이 어떤 순서로 이어졌는지 말해 봐요.'],
  acts: [
    { id: 'a1', title: '활동 1. 번갈아 나오는 구슬의 빈칸 채우기', minutes: 9, tool: 'pattern',
      task: '구슬이 번갈아 나와요. 되풀이되는 순서를 보고 빈칸에 알맞은 구슬을 놓아요.',
      teacher: '"분홍 다음에는 무엇이 나와요? 파랑 다음에는요?" 앞에서부터 짚으며 소리 내어 읽게 한다. 마지막 구슬과 같은 것을 놓는 학생에게는 "두 개를 한 묶음으로 끊어 읽어 볼까요?" 하고 말한다.',
      levels: PLV('fill'),
      items: [
        fill('구슬이 분홍, 파랑으로 번갈아 놓여 있어요. 빈칸에 알맞은 구슬을 놓아 보세요.', ['circle:rose', 'circle:sky', 'circle:rose', 'circle:sky', 'circle:rose', null], ['circle:sky'], 0.06),
        fill('네모 단추가 초록, 노랑으로 번갈아 놓여 있어요. 빈칸 두 개를 채워 보세요.', ['square:mint', 'square:buttercup', 'square:mint', null, 'square:mint', null], ['square:buttercup', 'square:buttercup'], 0.12,
          { predict: { q: '빈칸에는 어떤 색이 들어갈까요?', options: ['초록만', '노랑만', '초록과 노랑'], answer: 1 }, conclude: '초록 다음에는 노랑, 노랑 다음에는 초록이 와요. 두 개씩 되풀이돼요.' }),
        fill('별과 하트가 번갈아 놓여 있어요. 빈칸 두 개에 알맞은 조각을 놓아 보세요.', ['star:lavender', 'heart:peach', 'star:lavender', 'heart:peach', null, null], ['star:lavender', 'heart:peach'], 0.15),
        fill('더 해 보기: 동그라미와 네모가 번갈아 놓여 있어요. 빈칸 두 개를 채워 보세요.', ['circle:rose', 'square:rose', 'circle:rose', 'square:rose', 'circle:rose', null, null], ['square:rose', 'circle:rose'], 0.2, { extra: true }),
      ] },
    { id: 'a2', title: '활동 2. 줄에 알맞은 규칙 말 고르기', minutes: 11, tool: 'pattern',
      task: '구슬이 어떻게 되풀이되는지 알맞은 말을 골라요.',
      teacher: '"처음 두 개를 읽어 볼까요? 그다음에도 같은 두 개가 나오나요?" 줄 끝까지 보며 맞는지 확인하게 한다. 첫 두 구슬만 보고 고른 학생에게는 줄 끝까지 말과 구슬을 하나씩 짚어 견주게 한다.',
      levels: PLV('rule'),
      items: [
        rule('구슬 줄을 보고 어떤 규칙인지 골라 보세요.', ['circle:rose', 'circle:sky', 'circle:rose', 'circle:sky', 'circle:rose', 'circle:sky'], ['분홍, 파랑이 번갈아 나와요', '분홍만 계속 나와요', '모양이 번갈아 나와요'], 0, 0.08),
        rule('노랑 별과 하트 줄은 어떤 규칙인지 골라 보세요.', ['star:buttercup', 'heart:buttercup', 'star:buttercup', 'heart:buttercup', 'star:buttercup', 'heart:buttercup'], ['노랑과 파랑이 번갈아 나와요', '별과 하트가 번갈아 나와요', '별만 계속 나와요'], 1, 0.12,
          { conclude: '색은 모두 노랑이에요. 모양이 별, 하트로 번갈아 나오는 것이 규칙이에요.' }),
        rule('세모와 동그라미 줄은 어떤 규칙인지 골라 보세요.', ['triangle:mint', 'circle:lavender', 'triangle:mint', 'circle:lavender', 'triangle:mint', 'circle:lavender'], ['초록 세모만 계속 나와요', '초록 세모, 보라 동그라미가 번갈아 나와요', '보라 동그라미가 두 개씩 나와요'], 1, 0.15),
        rule('더 해 보기: 이 줄은 어떤 규칙인지 골라 보세요.', ['square:peach', 'square:sky', 'square:peach', 'square:sky', 'square:peach', 'square:sky', 'square:peach', 'square:sky'], ['모양이 번갈아 나와요', '주황, 파랑이 번갈아 나와요', '파랑만 계속 나와요'], 1, 0.2, { extra: true }),
      ] },
    { id: 'a3', title: '활동 3. 규칙에서 벗어난 조각 찾기', minutes: 6, tool: 'pattern',
      task: '규칙과 다르게 놓인 조각을 하나 찾아요.',
      teacher: '"둘씩 묶어 읽어 봐요. 어디에서 다른 것이 나왔나요?" 첫 묶음과 견주어 어디서 처음 달라지는지 짚게 한다. 마지막 조각이 아니라 처음 달라진 조각을 골라야 한다고 알려 준다.',
      levels: PLV('odd'),
      items: [
        odd('분홍 동그라미와 파랑 네모 줄에서 규칙과 다른 조각 하나를 찾아 보세요.', ['circle:rose', 'square:sky', 'circle:rose', 'square:sky', 'square:sky', 'square:sky'], 4, 0.12),
        odd('하트 줄에서 규칙과 다른 조각 하나를 찾아 보세요.', ['heart:peach', 'heart:mint', 'heart:peach', 'heart:mint', 'heart:peach', 'heart:peach'], 5, 0.14),
        odd('별과 동그라미 줄에서 규칙과 다른 조각 하나를 찾아 보세요.', ['star:sky', 'circle:rose', 'star:sky', 'square:rose', 'star:sky', 'circle:rose'], 3, 0.18,
          { conclude: '별과 동그라미가 되풀이되는데 네 번째에 네모가 나왔어요.' }),
      ] },
  ],
  wrap: ['"줄에 규칙이 있다는 것을 어떻게 알았나요?" 짝에게 "같은 묶음이 되풀이돼요"라고 말하게 한다. 출구 1번에서 파랑을 고른 학생은 바로 앞 구슬을 그대로 따라 하는지 다음 시간에 먼저 살핀다.', [
    { type: 'choice', prompt: '구슬이 분홍, 파랑, 분홍, 파랑, 분홍이에요. 다음 구슬은 무슨 색일까요?', options: ['분홍', '파랑', '노랑'], answer: 1, difficulty: 0.1, explain: '분홍 다음에는 파랑이 와요. 두 개가 번갈아 되풀이돼요.' },
    { type: 'tool', tool: 'pattern', options: { mode: 'fill', seq: ['square:peach', 'circle:mint', 'square:peach', 'circle:mint', null, null] }, prompt: '네모와 동그라미가 번갈아 놓여 있어요. 빈칸 두 개를 채워 보세요.', target: { fill: ['square:peach', 'circle:mint'] }, difficulty: 0.15 },
    { type: 'choice', prompt: '"가, 나, 가, 나, 가, 나"는 어떤 규칙인가요?', options: ['가, 나가 되풀이돼요', '가만 계속 나와요', '가, 나, 나가 되풀이돼요'], answer: 0, difficulty: 0.12, explain: '가와 나가 한 묶음이 되어 되풀이돼요.' },
  ]],
  ws: { title: '번갈아 나오는 규칙', items: [
    fig('규칙을 찾아 빈칸에 알맞은 조각을 그려 넣으세요.', ['circle:rose', 'circle:sky', 'circle:rose', 'circle:sky', null, null], '분홍 동그라미, 파랑 동그라미'),
    fig('규칙을 찾아 빈칸에 알맞은 조각을 그려 넣으세요.', ['star:lavender', 'heart:peach', 'star:lavender', 'heart:peach', 'star:lavender', null], '하트'),
    { type: 'choice', prompt: '구슬이 초록, 노랑, 초록, 노랑이에요. 규칙에 ○ 하세요.', options: ['초록, 노랑이 번갈아 나와요', '초록만 나와요', '노랑이 두 번 나와요'], answer: '초록, 노랑이 번갈아 나와요' },
    { type: 'short', prompt: '우리 교실에서 번갈아 놓인 것을 하나 찾아 써 보세요.' },
  ], easy: { note: '둘씩 묶어 읽어요. 같은 묶음이 되풀이돼요.', items: [
    fig('규칙을 찾아 빈칸에 알맞은 조각을 그려 넣으세요.', ['circle:rose', 'circle:sky', 'circle:rose', null], '파랑 동그라미'),
    { type: 'choice', prompt: '구슬이 분홍, 파랑, 분홍, 파랑이에요. 다음 구슬에 ○ 하세요.', options: ['분홍', '파랑'], answer: '분홍' },
    { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '가, 나, 가, 나, ___, 나', answer: '가' },
    { type: 'draw', prompt: '동그라미와 네모를 번갈아 그려 보세요.' },
  ] } },
  diff: { easy: '틀린 칸이 어디인지 알려 줘요. 힌트로 규칙 말을 먼저 알려 줘요.', base: '틀리면 어느 칸이 틀렸는지 알려 줘요.', challenge: '확인을 눌러도 어느 칸이 틀렸는지 알려 주지 않아요. 몇 칸이 틀렸는지만 알려 줘요.' },
  notes: '자주 보이는 어려움: ① 바로 앞 조각을 그대로 따라 놓는다 → 두 개씩 묶어 읽는다. ② 첫 두 개만 보고 규칙을 말한다 → 줄 끝까지 견준다. ③ 규칙에서 벗어난 조각을 마지막 조각으로 짐작한다 → 앞에서부터 묶어 읽고 처음 달라진 곳을 고른다. 세 개 묶음 규칙은 2차시에서 한다.',
}));
// ───────────────────────────── 2차시 (practice) ─────────────────────────────
L.push(lesson(2, {
  title: '세 개씩 되풀이되는 줄 이어 가기',
  objective: '세 개가 한 묶음으로 되풀이되는 줄에서 한 묶음을 찾아 다음에 올 조각을 이어 놓을 수 있다.',
  desc: 'a paper garland on a classroom wall with three kinds of shapes repeating in groups of three, a child pointing at the next spot',
  text: '세 개씩 되풀이해요',
  layers: [{ motif: 'hills', y: 208 }, { motif: 'star', x: 90, y: 62, s: 0.5 }, { motif: 'star', x: 340, y: 50, s: 0.5 }, { motif: 'tree', x: 380, y: 216, color: 'mint' }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"교실 벽의 장식을 보니 동그라미, 네모, 네모, 동그라미, 네모, 네모… 로 이어져요. 한 묶음은 몇 개일까요?" 첫 동그라미에서 다음 동그라미까지가 한 묶음이라고 칠판에서 묶어 준다. "두 개씩 번갈아 나올 때와 어떤 점이 다를까요?" 두 개씩 묶어 읽다가 틀리는 학생이 있다 — 같은 조각이 다시 나올 때까지를 한 묶음으로 센다고 말해 준다.', '한 묶음이 몇 개씩인지 세어 볼까요?'],
  acts: [
    { id: 'a1', title: '활동 1. 세 개 묶음 이어 가기', minutes: 9, tool: 'pattern',
      task: '한 묶음이 세 개씩 되풀이돼요. 묶음을 찾아 빈칸에 알맞은 조각을 놓아요.',
      teacher: '"한 묶음은 어디에서 어디까지일까요?" 같은 조각이 다시 나오는 곳 바로 앞까지를 한 묶음으로 묶게 한다. 묶음 중간에서 읽기 시작해 틀리는 학생에게는 줄의 맨 앞 조각부터 짚게 한다.',
      levels: PLV('fill'),
      items: [
        fill('동그라미, 네모, 네모가 되풀이돼요. 빈칸에 알맞은 조각을 놓아 보세요.', ['circle:rose', 'square:sky', 'square:sky', 'circle:rose', 'square:sky', null], ['square:sky'], 0.12),
        fill('별, 별, 하트가 되풀이돼요. 빈칸 두 개를 채워 보세요.', ['star:buttercup', 'star:buttercup', 'heart:rose', 'star:buttercup', null, 'heart:rose', null], ['star:buttercup', 'star:buttercup'], 0.16,
          { predict: { q: '한 묶음에는 별이 몇 개 들어 있을까요?', options: ['한 개', '두 개', '세 개'], answer: 1 }, conclude: '별, 별, 하트가 한 묶음이에요. 묶음마다 별이 두 개, 하트가 하나예요.' }),
        fill('세모, 동그라미, 네모가 되풀이돼요. 빈칸 두 개를 채워 보세요.', ['triangle:mint', 'circle:peach', 'square:lavender', 'triangle:mint', null, null], ['circle:peach', 'square:lavender'], 0.18),
        fill('더 해 보기: 초록, 초록, 분홍이 되풀이돼요. 빈칸 세 개를 채워 보세요.', ['circle:mint', 'circle:mint', 'circle:rose', 'circle:mint', null, null, 'circle:mint', null], ['circle:mint', 'circle:rose', 'circle:mint'], 0.24, { extra: true }),
      ] },
    { id: 'a2', title: '활동 2. 한 묶음 알아내기', minutes: 11, tool: 'pattern',
      task: '줄에서 되풀이되는 한 묶음이 무엇인지 알맞은 말을 골라요.',
      teacher: '"같은 모양이 다시 나오는 곳까지가 한 묶음이에요." 두 개짜리와 세 개짜리를 헷갈리는 학생에게는 묶음마다 괄호를 쳐 보게 한다. 네모, 네모를 한 묶음이라고 고른 학생에게는 줄 끝까지 읽어 맞는지 확인하게 한다.',
      levels: PLV('rule'),
      items: [
        rule('줄에서 되풀이되는 한 묶음에 알맞은 말을 골라 보세요.', ['circle:rose', 'square:sky', 'square:sky', 'circle:rose', 'square:sky', 'square:sky'], ['동그라미, 네모가 한 묶음이에요', '동그라미, 네모, 네모가 한 묶음이에요', '네모, 네모가 한 묶음이에요'], 1, 0.14),
        rule('별과 하트 줄의 한 묶음에 알맞은 말을 골라 보세요.', ['star:peach', 'heart:mint', 'heart:mint', 'star:peach', 'heart:mint', 'heart:mint'], ['별, 하트, 하트가 한 묶음이에요', '별, 하트가 한 묶음이에요', '하트, 하트, 별이 한 묶음이에요'], 0, 0.16),
        rule('세모와 네모 줄의 한 묶음에 알맞은 말을 골라 보세요.', ['triangle:lavender', 'triangle:lavender', 'square:buttercup', 'triangle:lavender', 'triangle:lavender', 'square:buttercup'], ['세모, 네모가 한 묶음이에요', '보라 세모, 보라 세모, 노랑 네모가 한 묶음이에요', '노랑 네모만 되풀이돼요'], 1, 0.2,
          { conclude: '세모가 두 개 나오고 네모가 한 개 나와요. 세 개가 한 묶음이에요.' }),
      ] },
    { id: 'a3', title: '활동 3. 세 개 묶음에서 벗어난 조각 찾기', minutes: 6, tool: 'pattern',
      task: '세 개씩 되풀이되는 줄에서 규칙과 다르게 놓인 조각을 하나 찾아요.',
      teacher: '"세 개씩 끊어 읽어 봐요. 어느 묶음이 첫 묶음과 달라요?" 첫 묶음을 손가락으로 가리고 다음 묶음과 견주게 한다. 여러 조각이 달라 보인다고 말하는 학생에게는 처음 달라진 조각 하나만 고르게 한다.',
      levels: PLV('odd'),
      items: [
        odd('동그라미와 네모 세 개 묶음 줄에서 규칙과 다른 조각을 찾아 보세요.', ['circle:rose', 'square:sky', 'square:sky', 'circle:rose', 'circle:sky', 'square:sky'], 4, 0.16),
        odd('별과 하트 아홉 칸 줄에서 규칙과 다른 조각을 찾아 보세요.', ['star:peach', 'heart:mint', 'heart:mint', 'star:peach', 'heart:mint', 'heart:mint', 'star:peach', 'star:peach', 'heart:mint'], 7, 0.2),
        odd('세모와 네모 줄에서 규칙과 다른 조각을 찾아 보세요.', ['triangle:lavender', 'triangle:lavender', 'square:buttercup', 'triangle:lavender', 'square:buttercup', 'square:buttercup'], 4, 0.22,
          { conclude: '세모, 세모, 네모가 되풀이돼요. 다섯 번째 조각이 규칙과 달라요.' }),
      ] },
  ],
  wrap: ['"세 개씩 되풀이될 때 한 묶음은 어떻게 찾나요?" 짝에게 같은 조각이 다시 나오는 곳까지가 한 묶음이라고 말하게 한다. 출구 2번을 틀린 학생은 두 개씩 묶어 읽는지 다음 시간에 먼저 살핀다.', [
    { type: 'choice', prompt: '동그라미, 네모, 네모, 동그라미, 네모, 네모예요. 한 묶음은 몇 개인가요?', options: ['두 개', '세 개', '네 개'], answer: 1, difficulty: 0.12, explain: '동그라미, 네모, 네모가 한 묶음이라서 세 개예요.' },
    { type: 'tool', tool: 'pattern', options: { mode: 'fill', seq: ['heart:rose', 'heart:rose', 'star:sky', 'heart:rose', 'heart:rose', null] }, prompt: '하트, 하트, 별이 되풀이돼요. 빈칸에 알맞은 조각을 놓아 보세요.', target: { fill: ['star:sky'] }, difficulty: 0.18 },
    { type: 'choice', prompt: '"가, 가, 나, 가, 가, 나"에서 한 묶음에 ○ 하세요.', options: ['가, 나', '가, 가, 나', '나, 가'], answer: 1, difficulty: 0.15, explain: '가, 가, 나가 한 묶음이에요.' },
  ]],
  ws: { title: '세 개씩 되풀이되는 규칙', items: [
    fig('규칙을 찾아 빈칸에 알맞은 조각을 그려 넣으세요.', ['circle:rose', 'square:sky', 'square:sky', 'circle:rose', 'square:sky', null], '파랑 네모'),
    fig('규칙을 찾아 빈칸에 알맞은 조각을 그려 넣으세요.', ['star:buttercup', 'star:buttercup', 'heart:rose', 'star:buttercup', null, 'heart:rose'], '노랑 별'),
    { type: 'choice', prompt: '"세모, 네모, 네모, 세모, 네모, 네모"에서 한 묶음에 ○ 하세요.', options: ['세모, 네모', '세모, 네모, 네모', '네모, 네모, 세모'], answer: '세모, 네모, 네모' },
    { type: 'short', prompt: '세 개씩 되풀이되는 줄을 하나 지어서 말이나 그림으로 써 보세요.' },
  ], easy: { note: '같은 조각이 다시 나올 때까지를 한 묶음으로 묶어요.', items: [
    fig('규칙을 찾아 빈칸에 알맞은 조각을 그려 넣으세요.', ['circle:rose', 'square:sky', 'square:sky', 'circle:rose', null, 'square:sky'], '파랑 네모'),
    { type: 'choice', prompt: '"가, 나, 나, 가, 나, 나"에서 한 묶음은 몇 개인가요?', options: ['두 개', '세 개'], answer: '세 개' },
    { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '가, 가, 나, 가, 가, ___', answer: '나' },
    { type: 'draw', prompt: '동그라미, 네모, 네모를 되풀이해서 그려 보세요.' },
  ] } },
  diff: { easy: '틀린 칸이 어디인지 알려 줘요. 힌트로 묶음 말을 먼저 알려 줘요.', base: '틀리면 어느 칸이 틀렸는지 알려 줘요.', challenge: '확인을 눌러도 어느 칸이 틀렸는지 알려 주지 않아요. 몇 칸이 틀렸는지만 알려 줘요.' },
  notes: '자주 보이는 어려움: ① 두 개씩 묶어 읽는다 → 같은 조각이 다시 나오는 곳 바로 앞까지가 한 묶음이다. ② 묶음 중간에서 읽기 시작한다 → 줄의 맨 앞부터 짚는다. ③ 처음 달라진 곳이 아니라 뒤쪽 조각을 고른다 → 앞에서부터 묶음을 견준다. 규칙을 모양 말고 글자·수로 나타내는 활동은 3차시에서 한다.',
}));
// ───────────────────────────── 3차시 (core) ─────────────────────────────
L.push(lesson(3, {
  title: '같은 규칙을 모양·글자·수로 바꿔 나타내기',
  objective: '모양으로 늘어놓은 규칙을 글자나 수로 바꾸어 나타내고, 같은 규칙인지 말할 수 있다.',
  desc: 'three paper strips side by side, one made of shapes, one of letters and one of numbers, all following the same repeating rule, a small owl pointing at them',
  text: '모양, 글자, 수로 나타내요',
  layers: [{ motif: 'hills', y: 208 }, { motif: 'house', x: 100, y: 214 }, { motif: 'star', x: 330, y: 56, s: 0.5 }, { motif: 'tree', x: 390, y: 218, color: 'mint' }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"동그라미, 네모, 동그라미, 네모를 글자로 바꾸면 가, 나, 가, 나 라고 쓸 수 있어요. 수로는 1, 2, 1, 2예요. 셋은 같은 규칙일까요?" 세 줄을 나란히 칠판에 붙여 같은 자리에 같은 이름이 있음을 짚는다. 모양이 달라서 다른 규칙이라고 생각하는 학생이 있다 — 되풀이되는 방식이 같은지 보게 한다.', '모양을 글자로 바꾸어도 같은 규칙일까요?'],
  acts: [
    { id: 'a1', title: '활동 1. 글자로 바꾼 규칙의 빈칸 채우기', minutes: 9, tool: 'pattern',
      task: '모양을 글자로 바꾸어 쓴 줄이에요. 되풀이되는 순서를 보고 빈칸에 알맞은 글자를 써요.',
      teacher: '"가 다음에는 무엇이 나올까요?" 모양 줄과 글자 줄을 나란히 놓고 같은 자리에 같은 글자가 오는지 견주게 한다. 글자 줄만 보고 앞의 글자를 따라 쓰는 학생에게는 두 개씩 묶어 읽게 한다.',
      levels: PLV('fill'),
      items: [
        fill('가, 나가 번갈아 놓여 있어요. 빈칸에 알맞은 글자를 놓아 보세요.', ['가', '나', '가', '나', '가', null], ['나'], 0.1),
        fill('사과와 귤이 번갈아 놓여 있어요. 빈칸 두 개를 채워 보세요.', ['사과', '귤', '사과', null, '사과', null], ['귤', '귤'], 0.14),
        fill('가, 가, 나가 되풀이돼요. 빈칸 두 개에 알맞은 글자를 놓아 보세요.', ['가', '가', '나', '가', null, '나', '가', null], ['가', '가'], 0.18,
          { conclude: '가, 가, 나가 한 묶음이에요. 글자로 써도 규칙은 모양일 때와 같아요.' }),
      ] },
    { id: 'a2', title: '활동 2. 수로 바꾼 규칙의 빈칸 채우기', minutes: 11, tool: 'pattern',
      task: '모양을 수로 바꾸어 쓴 줄이에요. 되풀이되는 수를 보고 빈칸에 알맞은 수를 써요.',
      teacher: '"1, 2, 1, 2 다음에는 무엇일까요?" 1과 2가 번갈아 나오는 것을 소리 내어 읽게 한다. 1, 2, 3으로 이어 센다고 생각해 3을 쓰는 학생에게는 앞에서 어떤 수가 다시 나왔는지 짚어 준다.',
      levels: PLV('fill'),
      items: [
        fill('수가 1, 2로 번갈아 놓여 있어요. 빈칸에 알맞은 수를 써 보세요.', [1, 2, 1, 2, 1, null], [2], 0.1),
        fill('수가 3, 5로 번갈아 놓여 있어요. 빈칸 두 개에 알맞은 수를 써 보세요.', [3, 5, 3, null, 3, null], [5, 5], 0.16),
        fill('수가 1, 1, 2로 되풀이돼요. 빈칸 두 개에 알맞은 수를 써 보세요.', [1, 1, 2, 1, null, 2, 1, null], [1, 1], 0.2,
          { predict: { q: '1, 1, 2 다음에 올 수는 무엇일까요?', options: ['1', '2', '3'], answer: 0 }, conclude: '1, 1, 2가 한 묶음이라서 2 다음에는 다시 1이 와요.' }),
        fill('더 해 보기: 수가 4, 6, 6으로 되풀이돼요. 빈칸 세 개에 알맞은 수를 써 보세요.', [4, 6, 6, 4, null, 6, 4, null, null], [6, 6, 6], 0.24, { extra: true }),
      ] },
    { id: 'a3', title: '활동 3. 같은 규칙끼리 짝짓기', minutes: 6, tool: 'mindmap',
      task: '모양으로 말한 줄과 같은 규칙인 글자 줄을 이어 줘요.',
      teacher: '"동그라미, 네모, 동그라미, 네모는 글자로 어떻게 쓸 수 있을까요?" 처음 두 개를 가, 나로 정하고 나머지에 같은 글자를 쓰게 한다. 첫 조각과 마지막 조각을 같은 글자로 써서 규칙이 달라지는 학생에게는 한 묶음을 먼저 말하게 한다.',
      levels: CARD_LV,
      items: [
        match('모양 줄과 같은 규칙인 글자 줄을 이어 보세요.', '같은 규칙', ['동그라미 네모 동그라미 네모', '세모 세모 동그라미 세모 세모 동그라미', '별 하트 하트 별 하트 하트'], ['가 나 가 나', '가 가 나 가 가 나', '가 나 나 가 나 나'], 0.16),
        match('이번에도 같은 규칙인 글자 줄을 이어 보세요.', '같은 규칙', ['사과 귤 사과 귤', '당근 당근 무 당근 당근 무'], ['가 나 가 나', '가 가 나 가 가 나'], 0.18, { extra: true }),
        match('수 줄과 같은 규칙인 글자 줄을 이어 보세요.', '같은 규칙', ['1 2 1 2 1 2', '1 1 2 1 1 2', '1 2 2 1 2 2'], ['나 가 나 가 나 가', '나 나 가 나 나 가', '나 가 가 나 가 가'], 0.2),
      ] },
  ],
  wrap: ['"모양을 글자나 수로 바꾸어도 규칙은 같아요. 어떻게 알 수 있나요?" 짝에게 한 가지 줄을 두 가지로 나타내 말하게 한다. 출구 2번에서 다른 글자 줄을 고른 학생은 한 묶음의 개수를 세지 않았는지 다음 시간에 먼저 살핀다.', [
    { type: 'choice', prompt: '동그라미, 네모, 동그라미, 네모를 수로 바꾸면 어떻게 될까요?', options: ['1, 2, 1, 2', '1, 1, 2, 2', '1, 2, 3, 4'], answer: 0, difficulty: 0.12, explain: '동그라미를 1, 네모를 2로 바꾸면 1, 2, 1, 2예요.' },
    { type: 'tool', tool: 'pattern', options: { mode: 'fill', seq: [2, 3, 2, 3, null, null] }, prompt: '수가 2, 3으로 번갈아 놓여 있어요. 빈칸 두 개를 채워 보세요.', target: { fill: [2, 3] }, difficulty: 0.15 },
    { type: 'choice', prompt: '"세모, 세모, 네모, 세모, 세모, 네모"와 같은 규칙인 글자 줄에 ○ 하세요.', options: ['가, 나, 가, 나', '가, 가, 나, 가, 가, 나', '가, 나, 나, 가, 나, 나'], answer: 1, difficulty: 0.2, explain: '세모를 가, 네모를 나로 바꾸면 가, 가, 나가 되풀이돼요.' },
  ]],
  ws: { title: '모양과 글자와 수로 나타내기', items: [
    fig('규칙을 찾아 빈칸에 알맞은 글자를 쓰세요.', ['가', '나', '가', '나', '가', null], '나'),
    fig('규칙을 찾아 빈칸에 알맞은 수를 쓰세요.', [1, 2, 2, 1, 2, null], '2'),
    { type: 'table', prompt: '동그라미를 가, 네모를 나로 바꾸어 쓰세요.', columns: ['모양', '동그라미', '네모', '동그라미', '네모'], cells: [['글자', '가', '', '', '']], answer: '나, 가, 나' },
    { type: 'short', prompt: '모양 줄 하나를 골라 글자나 수로 바꾸어 써 보세요.' },
  ], easy: { note: '같은 모양은 같은 글자로, 다른 모양은 다른 글자로 바꾸어요.', items: [
    fig('규칙을 찾아 빈칸에 알맞은 글자를 쓰세요.', ['가', '나', '가', null], '나'),
    { type: 'table', prompt: '동그라미를 가, 네모를 나로 바꾸어 쓰세요.', columns: ['모양', '동그라미', '네모', '동그라미'], cells: [['글자', '가', '', '']], answer: '나, 가' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '1, 2, 1, 2, ___, 2', answer: '1' },
    { type: 'draw', prompt: '가, 나, 가, 나를 동그라미와 네모로 바꾸어 그려 보세요.' },
  ] } },
  diff: { easy: '틀린 칸이 어디인지 알려 줘요. 힌트로 한 묶음이 무엇인지 알려 줘요.', base: '틀리면 어느 칸이 틀렸는지 알려 줘요.', challenge: '확인을 눌러도 어느 칸이 틀렸는지 알려 주지 않아요. 몇 칸이 틀렸는지만 알려 줘요.' },
  notes: '자주 보이는 어려움: ① 글자가 달라지면 규칙도 다르다고 생각한다 → 같은 자리에 같은 이름이 오는지 견준다. ② 수 줄에서 1, 2 다음을 3이라고 이어 센다 → 되풀이와 커지는 규칙을 구별한다. ③ 한 묶음의 개수를 세지 않는다 → 같은 글자가 다시 나오는 곳까지 묶는다. 소리·몸동작으로 나타내는 활동은 4차시에서 한다.',
}));
// ───────────────────────────── 4차시 (practice) ─────────────────────────────
L.push(lesson(4, {
  title: '손뼉과 무릎 소리로 규칙 나타내기',
  objective: '소리와 몸동작으로 늘어놓은 줄에서 규칙을 찾고, 같은 규칙을 말이나 동작으로 나타낼 수 있다.',
  desc: 'two small children seated on a classroom rug, one clapping hands and one tapping knees in turns, with colorful paper note cards on the floor',
  text: '손뼉, 무릎, 손뼉, 무릎',
  layers: [{ motif: 'hills', y: 208 }, { motif: 'flower', x: 100, y: 236 }, { motif: 'flower', x: 150, y: 240, color: 'rose' }, { motif: 'star', x: 340, y: 56, s: 0.5 }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"손뼉, 무릎, 손뼉, 무릎… 다음에는 무엇을 하면 될까요?" 교사가 동작을 하며 학생이 이어 하게 한다. 몸으로 한 것을 칠판에 글자로 적어 같은 규칙이라는 것을 보여 준다. 동작 소리가 빨라지면 규칙을 놓치는 학생이 있다 — 천천히 한 묶음씩 끊어서 한다.', '손뼉과 무릎 소리가 어떤 순서로 이어졌나요?'],
  acts: [
    { id: 'a1', title: '활동 1. 동작 카드의 빈칸 채우기', minutes: 9, tool: 'pattern',
      task: '동작 카드가 되풀이되며 놓여 있어요. 빈칸에 알맞은 동작을 놓아요.',
      teacher: '"손뼉 다음은 무엇이었지요? 직접 해 보면서 이어 봐요." 몸으로 해 보고 카드를 놓게 한다. 앞의 카드만 따라 놓는 학생에게는 한 묶음을 소리 내어 말하며 다시 놓게 한다.',
      levels: PLV('fill'),
      items: [
        fill('손뼉, 무릎이 번갈아 놓여 있어요. 빈칸에 알맞은 동작을 놓아 보세요.', ['손뼉', '무릎', '손뼉', '무릎', '손뼉', null], ['무릎'], 0.1),
        fill('발 구르기, 박수, 박수가 되풀이돼요. 빈칸 두 개를 채워 보세요.', ['발 구르기', '박수', '박수', '발 구르기', null, null], ['박수', '박수'], 0.18),
        fill('점프, 앉기가 번갈아 놓여 있어요. 빈칸 두 개를 채워 보세요.', ['점프', '앉기', '점프', null, '점프', null], ['앉기', '앉기'], 0.14,
          { conclude: '동작이 되풀이되는 것도 규칙이에요. 한 묶음이 되풀이돼요.' }),
      ] },
    { id: 'a2', title: '활동 2. 동작 줄의 규칙 말 고르기', minutes: 11, tool: 'pattern',
      task: '동작 카드 줄을 보고 어떻게 되풀이되는지 알맞은 말을 골라요.',
      teacher: '"한 묶음은 무슨 동작들로 되어 있나요?" 동작을 한 묶음씩 따라 하며 말하게 한다. 처음 동작만 보고 고른 학생에게는 줄의 끝까지 하나씩 짚으며 견주게 한다.',
      levels: PLV('rule'),
      items: [
        rule('동작 줄이 어떻게 되풀이되는지 알맞은 말을 골라 보세요.', ['손뼉', '무릎', '손뼉', '무릎', '손뼉', '무릎'], ['손뼉, 무릎이 번갈아 나와요', '손뼉만 계속 나와요', '무릎, 무릎, 손뼉이 되풀이돼요'], 0, 0.1),
        rule('발 구르기와 박수 줄은 어떻게 되풀이되나요?', ['발 구르기', '박수', '박수', '발 구르기', '박수', '박수'], ['발 구르기, 박수가 번갈아 나와요', '발 구르기, 박수, 박수가 되풀이돼요', '박수만 계속 나와요'], 1, 0.16),
        rule('점프와 앉기 줄은 어떻게 되풀이되나요?', ['점프', '점프', '앉기', '점프', '점프', '앉기'], ['점프, 앉기가 번갈아 나와요', '앉기만 계속 나와요', '점프, 점프, 앉기가 되풀이돼요'], 2, 0.18,
          { conclude: '점프가 두 번 나오고 앉기가 한 번 나와요. 세 개가 한 묶음이에요.' }),
        rule('더 해 보기: 이 줄은 어떻게 되풀이되나요?', ['박수', '무릎', '발', '박수', '무릎', '발'], ['박수, 무릎이 번갈아 나와요', '박수, 무릎, 발이 되풀이돼요', '발만 계속 나와요'], 1, 0.22, { extra: true }),
      ] },
    { id: 'a3', title: '활동 3. 같은 규칙인 동작 카드 고르기', minutes: 6, tool: 'mindmap',
      task: '"가, 나, 가, 나"처럼 되풀이되는 규칙과 같은 동작 줄만 바구니에 담아요.',
      teacher: '"가, 나, 가, 나는 두 가지가 번갈아 나오는 규칙이에요. 같은 규칙인 동작 줄은 어느 것일까요?" 번갈아 나오는 줄을 소리 내어 읽어 보게 한다. 세 개씩 되풀이되는 줄을 담은 학생에게는 한 묶음이 몇 개인지 세게 한다.',
      levels: CARD_LV,
      items: [
        pickOf('두 동작이 번갈아 나오는 줄만 골라 보세요.', '번갈아 나와요', ['손뼉 무릎 손뼉 무릎', '손뼉 손뼉 무릎 손뼉', '발 구르기 박수 발 구르기 박수', '점프 점프 점프 박수'], ['손뼉 무릎 손뼉 무릎', '발 구르기 박수 발 구르기 박수'], 0.14),
        pickOf('세 동작이 한 묶음으로 되풀이되는 줄만 골라 보세요.', '세 개씩 되풀이돼요', ['손뼉 무릎 발 손뼉 무릎 발', '손뼉 무릎 손뼉 무릎', '점프 앉기 앉기 점프 앉기 앉기'], ['손뼉 무릎 발 손뼉 무릎 발', '점프 앉기 앉기 점프 앉기 앉기'], 0.18),
        pickOf('더 해 보기: 규칙이 없는 줄만 골라 보세요.', '규칙이 없어요', ['손뼉 발 무릎 점프 앉기', '손뼉 무릎 손뼉 무릎', '발 박수 발 박수'], ['손뼉 발 무릎 점프 앉기'], 0.22, { extra: true }),
      ] },
  ],
  wrap: ['"소리와 몸동작도 규칙이 있어요. 어떻게 말할 수 있나요?" 짝과 번갈아 동작을 이어 보게 한다. 출구 1번에서 손뼉을 고른 학생은 방금 한 동작을 그대로 따라 하는지 다음 시간에 먼저 살핀다.', [
    { type: 'choice', prompt: '손뼉, 무릎, 손뼉, 무릎, 손뼉이에요. 다음 동작은 무엇일까요?', options: ['손뼉', '무릎', '발'], answer: 1, difficulty: 0.1, explain: '손뼉 다음에는 무릎이 와요. 두 동작이 번갈아 나와요.' },
    { type: 'tool', tool: 'pattern', options: { mode: 'fill', seq: ['쿵', '짝', '짝', '쿵', '짝', null] }, prompt: '쿵, 짝, 짝이 되풀이돼요. 빈칸에 알맞은 소리를 놓아 보세요.', target: { fill: ['짝'] }, difficulty: 0.18 },
    { type: 'choice', prompt: '"발, 손, 발, 손"과 같은 규칙인 줄에 ○ 하세요.', options: ['점프, 앉기, 점프, 앉기', '점프, 점프, 앉기', '점프, 앉기, 앉기'], answer: 0, difficulty: 0.15, explain: '두 동작이 번갈아 나오는 규칙이라서 점프, 앉기, 점프, 앉기가 같은 규칙이에요.' },
  ]],
  ws: { title: '소리와 몸동작의 규칙', items: [
    fig('규칙을 찾아 빈칸에 알맞은 동작을 쓰세요.', ['손뼉', '무릎', '손뼉', '무릎', '손뼉', null], '무릎'),
    fig('규칙을 찾아 빈칸에 알맞은 소리를 쓰세요.', ['쿵', '짝', '짝', '쿵', null, '짝'], '짝'),
    { type: 'choice', prompt: '"박수, 발, 박수, 발"처럼 번갈아 나오는 줄에 ○ 하세요.', options: ['점프, 점프, 앉기', '점프, 앉기, 점프, 앉기', '점프, 앉기, 앉기'], answer: '점프, 앉기, 점프, 앉기' },
    { type: 'short', prompt: '내가 만든 두 동작이 번갈아 나오는 줄을 써 보세요.' },
  ], easy: { note: '동작을 직접 해 보면 다음 동작이 떠올라요.', items: [
    fig('규칙을 찾아 빈칸에 알맞은 동작을 쓰세요.', ['손뼉', '무릎', '손뼉', null], '무릎'),
    { type: 'choice', prompt: '"쿵, 짝, 쿵, 짝" 다음 소리에 ○ 하세요.', options: ['쿵', '짝'], answer: '쿵' },
    { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '점프, 앉기, 점프, ___', answer: '앉기' },
    { type: 'draw', prompt: '손뼉과 무릎 동작을 번갈아 그려 보세요.' },
  ] } },
  diff: { easy: '틀린 칸이 어디인지 알려 줘요. 힌트로 한 묶음이 무엇인지 알려 줘요.', base: '틀리면 어느 칸이 틀렸는지 알려 줘요.', challenge: '확인을 눌러도 어느 칸이 틀렸는지 알려 주지 않아요. 몇 칸이 틀렸는지만 알려 줘요.' },
  notes: '자주 보이는 어려움: ① 방금 한 동작을 그대로 따라 한다 → 한 묶음을 소리 내어 말하며 이어 간다. ② 동작 줄을 빠르게 읽어 규칙을 놓친다 → 천천히 한 묶음씩 끊어서 한다. ③ 두 개씩과 세 개씩 규칙을 구별하지 못한다 → 같은 동작이 다시 나오는 곳까지 센다. 수가 커지는 규칙은 5차시에서 한다.',
}));

// ───────────────────────────── 5차시 (core) ─────────────────────────────
L.push(lesson(5, {
  title: '1씩, 2씩, 5씩 커지는 수 규칙 찾기',
  objective: '수가 일정하게 커지며 늘어선 줄에서 얼마씩 커지는지 찾아 빈칸에 알맞은 수를 쓸 수 있다.',
  desc: 'a row of paper stairs with numbers written on each step growing by two, a little goat climbing the stairs',
  text: '2, 4, 6, 8, …',
  layers: [{ motif: 'hills', y: 208 }, { motif: 'tree', x: 90, y: 216 }, { motif: 'house', x: 390, y: 214 }, { motif: 'star', x: 330, y: 56, s: 0.5 }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"계단에 2, 4, 6, 8이 쓰여 있어요. 다음 계단에는 무슨 수가 쓰여 있을까요?" 이웃한 두 수의 차이를 세어 보게 한다. "2에서 4까지는 몇 칸을 뛰었지요?" 하고 묻고 화살표로 보여 준다. 8 다음을 9라고 쓰는 학생이 있다 — 매번 같은 수만큼 커진다는 것을 짚는다.', '계단의 수가 얼마씩 커지는지 알아볼까요?'],
  acts: [
    { id: 'a1', title: '활동 1. 일정하게 커지는 수의 빈칸 채우기', minutes: 9, tool: 'pattern',
      task: '수가 일정하게 커지고 있어요. 이웃한 두 수의 차이를 보고 빈칸에 알맞은 수를 써요.',
      teacher: '"2 다음에 4, 4 다음에 6이에요. 얼마씩 커지고 있나요?" 두 수 사이를 손가락으로 세어 보게 한다. 빈칸에 앞의 수보다 1만 큰 수를 쓰는 학생에게는 앞의 두 수 차이만큼 뛰어야 한다고 알려 준다.',
      levels: PLV('fill'),
      items: [
        fill('계단 번호가 2씩 커져요. 빈칸 두 개에 알맞은 수를 써 보세요.', [2, 4, 6, null, 10, null], [8, 12], 0.12),
        fill('줄 번호가 1씩 커져요. 빈칸 두 개에 알맞은 수를 써 보세요.', [3, 4, 5, null, 7, null], [6, 8], 0.08),
        fill('동전을 5개씩 세어요. 빈칸에 알맞은 수를 써 보세요.', [5, 10, 15, null, 25], [20], 0.14,
          { predict: { q: '15 다음 수는 16일까요?', options: ['16이에요', '20이에요', '25예요'], answer: 1 }, conclude: '5씩 커지니까 15 다음은 20이에요.' }),
        fill('더 해 보기: 상자를 10개씩 쌓아요. 빈칸 두 개에 알맞은 수를 써 보세요.', [10, 20, null, 40, null], [30, 50], 0.2, { extra: true }),
      ] },
    { id: 'a2', title: '활동 2. 얼마씩 커지는지 규칙 고르기', minutes: 11, tool: 'pattern',
      task: '수가 늘어선 줄을 보고 얼마씩 커지는지 알맞은 말을 골라요.',
      teacher: '"2에서 4, 4에서 6으로 몇씩 커졌나요?" 이웃한 두 수의 차를 네 군데에서 확인하게 한다. 처음 두 수의 차만 보고 고른 학생에게는 끝까지 같은 차이로 커지는지 하나씩 짚게 한다.',
      levels: PLV('rule'),
      items: [
        rule('2, 4, 6, 8, 10 줄은 어떤 규칙인지 골라 보세요.', [2, 4, 6, 8, 10], ['앞의 수에 2씩 더해요', '앞의 수에 1씩 더해요', '앞의 수에 3씩 더해요'], 0, 0.1),
        rule('5, 10, 15, 20, 25 줄은 어떤 규칙인지 골라 보세요.', [5, 10, 15, 20, 25], ['앞의 수에 10씩 더해요', '앞의 수에 5씩 더해요', '앞의 수에 1씩 더해요'], 1, 0.14),
        rule('1, 3, 5, 7, 9 줄은 어떤 규칙인지 골라 보세요.', [1, 3, 5, 7, 9], ['앞의 수에 1씩 더해요', '앞의 수에 2씩 더해요', '앞의 수에 3씩 더해요'], 1, 0.12,
          { conclude: '1, 3, 5처럼 2씩 커지는 수는 하나 건너뛰어 가요.' }),
        rule('더 해 보기: 10, 20, 30, 40, 50 줄은 어떤 규칙인지 골라 보세요.', [10, 20, 30, 40, 50], ['앞의 수에 5씩 더해요', '앞의 수에 10씩 더해요', '앞의 수에 20씩 더해요'], 1, 0.18, { extra: true }),
      ] },
    { id: 'a3', title: '활동 3. 규칙에서 벗어난 수 찾기', minutes: 6, tool: 'pattern',
      task: '일정하게 커지는 줄에서 규칙과 다른 수를 하나 찾아요.',
      teacher: '"2, 4, 6 다음에 9가 나왔어요. 몇씩 커졌어야 할까요?" 이웃한 두 수의 차를 하나씩 말하게 한다. 마지막 수를 고르는 학생에게는 차이가 처음 달라지는 곳을 짚게 한다.',
      levels: PLV('odd'),
      items: [
        odd('2씩 커지는 줄에서 규칙과 다른 수를 찾아 보세요.', [2, 4, 6, 9, 10, 12], 3, 0.14),
        odd('5씩 커지는 줄에서 규칙과 다른 수를 찾아 보세요.', [5, 10, 15, 20, 26, 30], 4, 0.16),
        odd('1, 3, 5로 이어지는 줄에서 규칙과 다른 수를 찾아 보세요.', [1, 3, 5, 6, 9, 11], 3, 0.18,
          { conclude: '2씩 커지면 5 다음에 7이 와야 해요. 6은 규칙과 달라요.' }),
      ] },
  ],
  wrap: ['"수가 늘어설 때 규칙은 어떻게 찾나요?" 짝에게 이웃한 수의 차이를 말하게 한다. 출구 1번에서 21을 고른 학생은 1씩 커지는 것으로 생각했는지 다음 시간에 먼저 살핀다.', [
    { type: 'choice', prompt: '5, 10, 15, 20 다음에 올 수는 무엇일까요?', options: ['21', '25', '30'], answer: 1, difficulty: 0.12, explain: '5씩 커지니까 20 다음은 25예요.' },
    { type: 'tool', tool: 'pattern', options: { mode: 'fill', seq: [4, 6, 8, null, 12, null] }, prompt: '수가 일정하게 커져요. 빈칸 두 개에 알맞은 수를 써 보세요.', target: { fill: [10, 14] }, difficulty: 0.18 },
    { type: 'choice', prompt: '3, 4, 5, 6, 7 줄은 얼마씩 커지는 규칙일까요?', options: ['1씩', '2씩', '3씩'], answer: 0, difficulty: 0.08, explain: '이웃한 수가 모두 1씩 커져요.' },
  ]],
  ws: { title: '커지는 수의 규칙', items: [
    fig('규칙을 찾아 빈칸에 알맞은 수를 쓰세요.', [2, 4, 6, 8, null, 12], '10'),
    fig('규칙을 찾아 빈칸에 알맞은 수를 쓰세요.', [5, 10, null, 20, 25, null], '15, 30'),
    { type: 'choice', prompt: '1, 3, 5, 7은 얼마씩 커지는 규칙일까요? ○ 하세요.', options: ['1씩', '2씩', '5씩'], answer: '2씩' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '10, 20, ___, 40, 50', answer: '30' },
  ], easy: { note: '이웃한 두 수 사이가 몇 칸인지 세어 보세요.', items: [
    fig('규칙을 찾아 빈칸에 알맞은 수를 쓰세요.', [1, 2, 3, null, 5], '4'),
    { type: 'choice', prompt: '2, 4, 6은 얼마씩 커지나요? ○ 하세요.', options: ['1씩', '2씩'], answer: '2씩' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '5, 10, ___, 20', answer: '15' },
    { type: 'draw', prompt: '2씩 커지는 수를 다섯 개 써 보세요.' },
  ] } },
  diff: { easy: '틀린 칸이 어디인지 알려 줘요. 힌트로 이웃한 두 수의 차이를 보는 방법을 알려 줘요.', base: '틀리면 어느 칸이 틀렸는지 알려 줘요.', challenge: '확인을 눌러도 어느 칸이 틀렸는지 알려 주지 않아요. 몇 칸이 틀렸는지만 알려 줘요.' },
  notes: '자주 보이는 어려움: ① 빈칸에 앞의 수보다 1만 큰 수를 쓴다 → 앞의 두 수의 차이만큼 커진다. ② 처음 두 수의 차이만 보고 규칙을 고른다 → 끝까지 같은 차이인지 확인한다. ③ 규칙에서 벗어난 수를 마지막 수로 짐작한다 → 차이가 처음 달라지는 곳을 찾는다. 작아지는 수 규칙은 6차시에서 한다.',
}));
// ───────────────────────────── 6차시 (practice) ─────────────────────────────
L.push(lesson(6, {
  title: '작아지는 수와 되풀이되는 수 규칙 찾기',
  objective: '일정하게 작아지거나 같은 수가 되풀이되는 수의 줄에서 규칙을 찾아 빈칸과 벗어난 수를 찾을 수 있다.',
  desc: 'a paper rocket countdown strip with numbers getting smaller along the path, and a small fox watching the countdown',
  text: '10, 9, 8, 7, …',
  layers: [{ motif: 'hills', y: 208 }, { motif: 'star', x: 90, y: 62, s: 0.5 }, { motif: 'star', x: 360, y: 56, s: 0.5 }, { motif: 'tree', x: 390, y: 216, color: 'mint' }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"로켓이 날아오르기 전에 10, 9, 8, 7… 하고 거꾸로 세어요. 다음 수는 무엇일까요?" 수가 작아지는 것도 규칙이라고 알려 준다. "한 칸씩 갈 때 얼마씩 줄어들까요?" 작아지는 줄을 보고도 커지는 규칙인 것처럼 더하려는 학생이 있다 — 거꾸로 센다는 것을 짚는다.', '수가 작아지는 줄에도 규칙이 있을까요?'],
  acts: [
    { id: 'a1', title: '활동 1. 일정하게 작아지는 수의 빈칸 채우기', minutes: 9, tool: 'pattern',
      task: '수가 일정하게 작아지고 있어요. 이웃한 두 수의 차이를 보고 빈칸에 알맞은 수를 써요.',
      teacher: '"10에서 9가 되려면 얼마를 빼면 될까요?" 거꾸로 세며 빈칸을 채우게 한다. 큰 수 쪽으로 더하는 학생에게는 숫자가 점점 줄어드는지 먼저 말하게 한다.',
      levels: PLV('fill'),
      items: [
        fill('로켓 출발 숫자가 1씩 작아져요. 빈칸 두 개에 알맞은 수를 써 보세요.', [10, 9, 8, null, 6, null], [7, 5], 0.1),
        fill('사탕이 2개씩 줄어요. 빈칸에 알맞은 수를 써 보세요.', [14, 12, 10, null, 6], [8], 0.14),
        fill('책이 5권씩 줄어요. 빈칸 두 개에 알맞은 수를 써 보세요.', [30, 25, null, 15, null], [20, 10], 0.16,
          { predict: { q: '25 다음 수는 26일까요?', options: ['26이에요', '24예요', '20이에요'], answer: 2 }, conclude: '5씩 작아지니까 25 다음은 20이에요.' }),
        fill('더 해 보기: 동전이 10개씩 줄어요. 빈칸에 알맞은 수를 써 보세요.', [50, 40, null, 20, 10], [30], 0.2, { extra: true }),
      ] },
    { id: 'a2', title: '활동 2. 줄어드는 규칙과 되풀이 규칙 고르기', minutes: 11, tool: 'pattern',
      task: '수가 늘어선 줄을 보고 규칙에 알맞은 말을 골라요.',
      teacher: '"10, 9, 8은 얼마씩 줄었나요? 1, 2, 3, 1, 2, 3은 커지고 있나요, 되풀이되고 있나요?" 커지는 줄과 되풀이되는 줄을 구별하게 한다. 1, 2, 3을 보고 1씩 커진다고 한 학생에게는 줄을 끝까지 읽게 해 다시 1이 나오는지 짚어 보게 한다.',
      levels: PLV('rule'),
      items: [
        rule('10, 9, 8, 7, 6 줄은 어떤 규칙인지 골라 보세요.', [10, 9, 8, 7, 6], ['앞의 수에서 1씩 빼요', '앞의 수에서 2씩 빼요', '앞의 수에 1씩 더해요'], 0, 0.1),
        rule('20, 18, 16, 14, 12 줄은 어떤 규칙인지 골라 보세요.', [20, 18, 16, 14, 12], ['앞의 수에서 1씩 빼요', '앞의 수에서 2씩 빼요', '앞의 수에서 4씩 빼요'], 1, 0.14),
        rule('1, 2, 3, 1, 2, 3 줄은 어떤 규칙인지 골라 보세요.', [1, 2, 3, 1, 2, 3], ['앞의 수에 1씩 더해요', '1, 2, 3이 되풀이돼요', '앞의 수에 3씩 더해요'], 1, 0.16,
          { conclude: '수가 계속 커지지 않고 1, 2, 3이 다시 나와요. 되풀이되는 규칙이에요.' }),
        rule('더 해 보기: 30, 25, 20, 15, 10 줄은 어떤 규칙인지 골라 보세요.', [30, 25, 20, 15, 10], ['앞의 수에서 5씩 빼요', '앞의 수에서 10씩 빼요', '앞의 수에 5씩 더해요'], 0, 0.2, { extra: true }),
      ] },
    { id: 'a3', title: '활동 3. 규칙과 다른 수 찾기', minutes: 6, tool: 'pattern',
      task: '작아지거나 되풀이되는 수 줄에서 규칙과 다른 수를 하나 찾아요.',
      teacher: '"10, 8, 6 다음에 5가 나왔어요. 2씩 줄었다면 얼마여야 할까요?" 이웃한 수의 차이를 말하며 어디서 달라지는지 찾게 한다. 되풀이하는 줄에서는 한 묶음을 먼저 말하게 한다.',
      levels: PLV('odd'),
      items: [
        odd('2씩 작아지는 줄에서 규칙과 다른 수를 찾아 보세요.', [10, 8, 6, 5, 2], 3, 0.16),
        odd('1, 2, 3이 되풀이되는 줄에서 규칙과 다른 수를 찾아 보세요.', [1, 2, 3, 1, 2, 3, 1, 1, 3], 7, 0.2),
        odd('5씩 작아지는 줄에서 규칙과 다른 수를 찾아 보세요.', [20, 15, 10, 7, 0], 3, 0.18,
          { conclude: '5씩 작아지면 10 다음에 5가 와야 해요. 7은 규칙과 달라요.' }),
      ] },
  ],
  wrap: ['"커지는 규칙과 작아지는 규칙은 무엇이 다른가요?" 짝에게 10, 8, 6, 4를 예로 설명하게 한다. 출구 1번에서 12를 고른 학생은 작아지는 줄에서 더했는지 다음 시간에 먼저 살핀다.', [
    { type: 'choice', prompt: '9, 8, 7, 6 다음에 올 수는 무엇일까요?', options: ['5', '7', '10'], answer: 0, difficulty: 0.1, explain: '1씩 작아지니까 6 다음은 5예요.' },
    { type: 'tool', tool: 'pattern', options: { mode: 'fill', seq: [16, 14, 12, null, 8, null] }, prompt: '수가 일정하게 작아져요. 빈칸 두 개에 알맞은 수를 써 보세요.', target: { fill: [10, 6] }, difficulty: 0.18 },
    { type: 'choice', prompt: '1, 2, 3, 1, 2, 3 다음에 올 수는 무엇일까요?', options: ['1', '3', '4'], answer: 0, difficulty: 0.15, explain: '1, 2, 3이 되풀이되니까 3 다음에는 1이 와요.' },
  ]],
  ws: { title: '작아지는 수와 되풀이되는 수', items: [
    fig('규칙을 찾아 빈칸에 알맞은 수를 쓰세요.', [10, 9, 8, null, 6, 5], '7'),
    fig('규칙을 찾아 빈칸에 알맞은 수를 쓰세요.', [20, null, 16, 14, null, 10], '18, 12'),
    { type: 'choice', prompt: '15, 10, 5는 얼마씩 작아지나요? ○ 하세요.', options: ['5씩', '10씩', '15씩'], answer: '5씩' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '1, 2, 3, 1, 2, ___', answer: '3' },
  ], easy: { note: '커지는지 작아지는지 먼저 보고, 이웃한 두 수의 차이를 세어요.', items: [
    fig('규칙을 찾아 빈칸에 알맞은 수를 쓰세요.', [6, 5, 4, null, 2], '3'),
    { type: 'choice', prompt: '8, 6, 4는 얼마씩 작아지나요? ○ 하세요.', options: ['1씩', '2씩'], answer: '2씩' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '1, 2, 1, 2, ___', answer: '1' },
    { type: 'draw', prompt: '10부터 1씩 작아지는 수를 다섯 개 써 보세요.' },
  ] } },
  diff: { easy: '틀린 칸이 어디인지 알려 줘요. 힌트로 이웃한 두 수의 차이를 보는 방법을 알려 줘요.', base: '틀리면 어느 칸이 틀렸는지 알려 줘요.', challenge: '확인을 눌러도 어느 칸이 틀렸는지 알려 주지 않아요. 몇 칸이 틀렸는지만 알려 줘요.' },
  notes: '자주 보이는 어려움: ① 작아지는 줄에서 더한다 → 숫자가 줄어드는지 먼저 말한다. ② 되풀이되는 수 줄을 커지는 규칙으로 읽는다 → 줄을 끝까지 읽어 같은 수가 다시 나오는지 본다. ③ 규칙에서 벗어난 수를 마지막 수로 짐작한다 → 차이가 처음 달라지는 곳을 찾는다. 이제부터는 내가 규칙을 정해 늘어놓는다.',
}));
// ───────────────────────────── 7차시 (core) ─────────────────────────────
L.push(lesson(7, {
  title: '내가 정한 두 가지 구슬로 번갈아 목걸이 만들기',
  objective: '두 가지 조각을 골라 한 묶음으로 정하고, 그 묶음을 되풀이하여 규칙이 있는 줄을 만들 수 있다.',
  desc: 'a child stringing paper beads in two colors onto a necklace thread on a table, an empty tray of beads beside the necklace',
  text: '내가 정한 규칙',
  layers: [{ motif: 'hills', y: 208 }, { motif: 'flower', x: 100, y: 236 }, { motif: 'flower', x: 150, y: 240, color: 'rose' }, { motif: 'tree', x: 380, y: 216 }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"오늘은 내가 목걸이의 규칙을 정해 볼 거예요. 분홍, 파랑을 한 묶음으로 정하면 어떻게 이어질까요?" 교사가 먼저 두 구슬을 한 묶음으로 정하고 되풀이해 이어 붙여 보인다. "묶음을 두 번 이상 되풀이하면 규칙이 보여요." 묶음을 정하지 않고 아무 구슬이나 붙이는 학생이 있다 — 먼저 한 묶음을 정하고 다시 처음부터 놓는다고 말한다.', '내가 한 묶음을 정해서 되풀이하면 규칙이 있는 줄이 될까요?'],
  acts: [
    { id: 'a1', title: '활동 1. 두 가지로 번갈아 놓아 줄 만들기', minutes: 9, tool: 'pattern',
      task: '두 가지 조각으로 한 묶음을 정하고, 그 묶음을 되풀이해 줄을 만들어요.',
      teacher: '"내가 정한 한 묶음은 무엇인가요? 끝까지 같은 묶음이 되풀이되나요?" 첫 두 조각을 정한 뒤 다음 칸들은 그대로 따라 놓게 한다. 마지막에 다른 조각을 놓아 규칙이 깨지는 학생에게는 첫 묶음을 손가락으로 가리고 다시 읽게 한다.',
      levels: PLV('make'),
      items: [
        make('분홍 동그라미와 파랑 동그라미로 여덟 칸 구슬 목걸이를 번갈아 놓아 만들어 보세요.', ['circle:rose', 'circle:sky'], 8, { rule: 'repeat', period: 2, uses: 2 }, 0.14),
        make('별과 하트로 여덟 칸 줄을 두 개 묶음이 되풀이되도록 만들어 보세요.', ['star:buttercup', 'heart:rose'], 8, { rule: 'repeat', period: 2, uses: 2 }, 0.16,
          { predict: { q: '두 조각을 번갈아 놓으면 여덟 칸 줄이 규칙에 맞을까요?', options: ['맞아요', '맞지 않아요'], answer: 0 }, conclude: '한 묶음을 정하고 되풀이하면 규칙이 있는 줄이 돼요.' }),
        make('세 가지 조각 가운데 두 가지를 골라 번갈아 놓아 여덟 칸 줄을 만들어 보세요.', ['triangle:mint', 'square:lavender', 'circle:peach'], 8, { rule: 'repeat', period: 2, uses: 2 }, 0.2),
        make('더 해 보기: 주황 네모와 초록 네모로 열 칸 줄을 번갈아 놓아 만들어 보세요.', ['square:peach', 'square:mint', 'square:sky'], 10, { rule: 'repeat', period: 2, uses: 2 }, 0.22, { extra: true }),
      ] },
    { id: 'a2', title: '활동 2. 규칙이 있는 줄만 골라내기', minutes: 11, tool: 'mindmap',
      task: '규칙이 있는 줄만 바구니에 담아요. 같은 묶음이 되풀이되는 줄이 규칙이 있는 줄이에요.',
      teacher: '"같은 묶음이 되풀이되고 있나요?" 줄을 소리 내어 읽으며 묶음을 찾게 한다. 모양이 다양하면 규칙이 있다고 생각하는 학생에게는 처음 두 개와 다음 두 개를 견주게 한다.',
      levels: CARD_LV,
      items: [
        pickOf('같은 묶음이 되풀이되는 줄만 골라 보세요.', '규칙이 있어요', ['동그라미 네모 동그라미 네모 동그라미 네모', '동그라미 세모 네모 하트 별 동그라미', '세모 하트 세모 하트 세모 하트', '네모 동그라미 동그라미 별 세모 네모'], ['동그라미 네모 동그라미 네모 동그라미 네모', '세모 하트 세모 하트 세모 하트'], 0.16),
        pickOf('이번에도 규칙이 있는 줄만 골라 보세요.', '규칙이 있어요', ['별 별 하트 별 별 하트', '별 하트 네모 별 세모 하트', '가 나 가 나 가 나'], ['별 별 하트 별 별 하트', '가 나 가 나 가 나'], 0.18),
        pickOf('더 해 보기: 규칙이 없는 줄만 골라 보세요.', '규칙이 없어요', ['1 2 1 2 1 2', '3 7 1 9 2 5', '손뼉 무릎 손뼉 무릎'], ['3 7 1 9 2 5'], 0.2, { extra: true }),
      ] },
    { id: 'a3', title: '활동 3. 내가 만든 규칙을 이어 가기', minutes: 6, tool: 'pattern',
      task: '앞에서 정한 규칙을 보고 이어 갈 조각을 빈칸에 놓아요.',
      teacher: '"여기까지 어떤 묶음이 되풀이되었나요?" 첫 묶음을 말한 뒤 이어 놓게 한다. 마지막 조각을 그대로 따라 놓는 학생에게는 한 묶음을 손으로 가리키며 다시 읽게 한다.',
      levels: PLV('fill'),
      items: [
        fill('세모, 동그라미가 번갈아 놓였어요. 빈칸 두 개에 이어서 놓아 보세요.', ['triangle:mint', 'circle:rose', 'triangle:mint', 'circle:rose', null, null], ['triangle:mint', 'circle:rose'], 0.12),
        fill('네모 두 가지 색이 번갈아 놓였어요. 빈칸 세 개에 이어서 놓아 보세요.', ['square:sky', 'square:peach', 'square:sky', 'square:peach', null, null, null], ['square:sky', 'square:peach', 'square:sky'], 0.18),
        fill('별, 하트가 번갈아 놓였어요. 빈칸 두 개에 이어서 놓아 보세요.', ['star:lavender', 'heart:buttercup', 'star:lavender', 'heart:buttercup', 'star:lavender', null, null], ['heart:buttercup', 'star:lavender'], 0.2,
          { conclude: '내가 정한 한 묶음을 끝까지 되풀이하면 어디서나 규칙이 지켜져요.' }),
      ] },
  ],
  wrap: ['"내가 규칙을 정하려면 무엇을 먼저 해야 하나요?" 짝에게 한 묶음을 정하고 되풀이한다고 말하게 한다. 출구 2번에서 모든 칸을 다르게 놓은 학생은 한 묶음을 정하는 것을 놓쳤는지 다음 시간에 먼저 살핀다.', [
    { type: 'choice', prompt: '규칙이 있는 줄을 만들려면 무엇을 해야 할까요?', options: ['한 묶음을 정해 되풀이해요', '모두 다른 것을 놓아요', '하나만 계속 놓아요'], answer: 0, difficulty: 0.12, explain: '한 묶음을 정해 되풀이하면 규칙이 있는 줄이 돼요.' },
    { type: 'tool', tool: 'pattern', options: { mode: 'make', palette: ['circle:mint', 'square:lavender'], length: 6 }, prompt: '초록 동그라미와 보라 네모로 여섯 칸 줄을 번갈아 놓아 만들어 보세요.', target: { rule: 'repeat', period: 2, uses: 2 }, difficulty: 0.15 },
    { type: 'choice', prompt: '규칙이 있는 줄에 ○ 하세요.', options: ['가, 나, 가, 나, 가, 나', '가, 다, 나, 라, 마, 가'], answer: 0, difficulty: 0.1, explain: '가, 나가 되풀이되니까 규칙이 있어요.' },
  ]],
  ws: { title: '내가 정한 규칙으로 늘어놓기', items: [
    fig('규칙을 찾아 빈칸에 알맞은 조각을 이어서 그려 넣으세요.', ['circle:rose', 'square:sky', 'circle:rose', 'square:sky', null, null], '분홍 동그라미, 파랑 네모'),
    { type: 'draw', prompt: '두 가지 모양을 골라 규칙이 있게 여덟 칸을 그려 보세요.' },
    { type: 'choice', prompt: '규칙이 있는 줄에 ○ 하세요.', options: ['별, 별, 하트, 별, 별, 하트', '별, 하트, 네모, 세모, 별'], answer: '별, 별, 하트, 별, 별, 하트' },
    { type: 'short', prompt: '내가 정한 규칙을 한 문장으로 써 보세요.' },
  ], easy: { note: '두 가지만 골라서 번갈아 그려요.', items: [
    fig('규칙을 찾아 빈칸에 알맞은 조각을 이어서 그려 넣으세요.', ['circle:rose', 'square:sky', 'circle:rose', null], '파랑 네모'),
    { type: 'draw', prompt: '동그라미와 네모를 번갈아 여섯 칸 그려 보세요.' },
    { type: 'choice', prompt: '규칙이 있는 줄에 ○ 하세요.', options: ['가, 나, 가, 나', '가, 다, 나, 라'], answer: '가, 나, 가, 나' },
    { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '내가 정한 한 묶음은 ___ 와 ___ 예요.', answer: '(자유롭게)' },
  ] } },
  diff: { easy: '틀린 칸이 어디인지 알려 줘요. 힌트로 한 묶음을 정하는 방법을 알려 줘요.', base: '틀리면 규칙이 어디서 깨졌는지 알려 줘요.', challenge: '확인을 눌러도 어느 칸이 틀렸는지 알려 주지 않아요.' },
  notes: '자주 보이는 어려움: ① 한 묶음을 정하지 않고 아무 조각이나 놓는다 → 처음 두 개를 한 묶음으로 정하고 되풀이한다. ② 끝에서 다른 조각을 놓아 규칙이 깨진다 → 첫 묶음을 가리고 다시 읽는다. ③ 규칙이 있는지 모양 수가 다양한 것으로 판단한다 → 같은 묶음이 되풀이되는지 견준다. 세 개 묶음은 8차시에서 한다.',
}));
// ───────────────────────────── 8차시 (practice) ─────────────────────────────
L.push(lesson(8, {
  title: '세 개 묶음을 정해 줄 이어 만들기',
  objective: '세 개를 한 묶음으로 정하고 그 묶음을 되풀이해 규칙이 있는 줄을 만들며, 정해진 묶음과 줄을 짝지을 수 있다.',
  desc: 'a paper ribbon with a repeating group of three colorful shapes being decorated by a small rabbit, a few spare shapes in a tray',
  text: '세 개씩 되풀이해요',
  layers: [{ motif: 'hills', y: 208 }, { motif: 'house', x: 100, y: 214 }, { motif: 'star', x: 330, y: 56, s: 0.5 }, { motif: 'tree', x: 390, y: 216, color: 'mint' }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"동그라미, 네모, 네모를 한 묶음으로 정해 볼까요? 이 묶음을 되풀이하면 줄이 어떻게 될까요?" 칠판에 한 묶음을 붙이고 두 번 되풀이해 이어 붙인다. 지난 시간의 두 개 묶음과 달리 이번에는 한 묶음에 세 개가 있다고 말해 준다. 한 묶음을 정하고도 두 번째 묶음에서 순서를 바꾸는 학생이 있다 — 순서까지 그대로 되풀이해야 한다고 짚는다.', '세 개가 한 묶음이면 줄이 어떻게 이어질까요?'],
  acts: [
    { id: 'a1', title: '활동 1. 정한 묶음대로 줄 만들기', minutes: 9, tool: 'pattern',
      task: '정해진 세 개 묶음을 순서대로 되풀이해 아홉 칸 줄을 만들어요.',
      teacher: '"동그라미, 네모, 네모가 한 묶음이에요. 첫 번째 묶음 다음에 어떤 조각이 와요?" 한 묶음씩 끊어서 놓게 한다. 두 번째 묶음의 순서를 바꾸는 학생에게는 첫 묶음과 손가락으로 견주게 한다.',
      levels: PLV('make'),
      items: [
        make('동그라미, 네모, 네모를 되풀이해서 아홉 칸 줄을 만들어 보세요.', ['circle:rose', 'square:sky', 'triangle:mint'], 9, { rule: 'core', core: ['circle:rose', 'square:sky', 'square:sky'] }, 0.16),
        make('별, 하트, 하트를 되풀이해서 아홉 칸 줄을 만들어 보세요.', ['star:buttercup', 'heart:rose'], 9, { rule: 'core', core: ['star:buttercup', 'heart:rose', 'heart:rose'] }, 0.18,
          { predict: { q: '한 묶음이 세 개면 아홉 칸에는 묶음이 몇 번 들어갈까요?', options: ['두 번', '세 번', '네 번'], answer: 1 }, conclude: '세 개씩 세 번 되풀이하면 아홉 칸이 돼요.' }),
        make('세 가지 조각을 모두 써서 세 개씩 되풀이되는 열두 칸 줄을 만들어 보세요.', ['circle:peach', 'square:lavender', 'heart:rose'], 12, { rule: 'repeat', period: 3, uses: 3 }, 0.22),
        make('더 해 보기: 두 가지 조각으로 세 개씩 되풀이되는 아홉 칸 줄을 만들어 보세요.', ['star:sky', 'circle:buttercup'], 9, { rule: 'repeat', period: 3, uses: 2 }, 0.24, { extra: true }),
      ] },
    { id: 'a2', title: '활동 2. 묶음과 줄 짝짓기', minutes: 11, tool: 'mindmap',
      task: '한 묶음이 무엇인지 보고, 그 묶음이 되풀이되는 줄을 이어 줘요.',
      teacher: '"동그라미, 네모, 네모를 되풀이하면 어떤 줄이 되나요?" 한 묶음을 줄에서 찾아 괄호로 묶게 한다. 별 하트를 한 묶음이라고 읽은 학생에게는 묶음의 길이가 몇 개인지 세게 한다.',
      levels: CARD_LV,
      items: [
        match('한 묶음과 되풀이되는 줄을 이어 보세요.', '묶음과 줄', ['동그라미 네모 네모', '별 하트', '세모 세모 동그라미'], ['동그라미 네모 네모 동그라미 네모 네모', '별 하트 별 하트 별 하트', '세모 세모 동그라미 세모 세모 동그라미'], 0.18),
        match('이번에도 한 묶음과 줄을 이어 보세요.', '묶음과 줄', ['사과 귤 귤', '가 나', '손뼉 무릎 발'], ['사과 귤 귤 사과 귤 귤', '가 나 가 나 가 나', '손뼉 무릎 발 손뼉 무릎 발'], 0.2),
        match('더 해 보기: 한 묶음과 줄을 이어 보세요.', '묶음과 줄', ['1 2 2', '1 1 2'], ['1 2 2 1 2 2', '1 1 2 1 1 2'], 0.24, { extra: true }),
      ] },
    { id: 'a3', title: '활동 3. 세 개 묶음 줄에서 벗어난 조각 찾기', minutes: 6, tool: 'pattern',
      task: '세 개 묶음이 되풀이되는 줄에서 규칙과 다른 조각을 하나 찾아요.',
      teacher: '"세 개씩 끊어 읽어 봐요. 어디에서 첫 묶음과 달라졌나요?" 묶음마다 괄호를 쳐서 비교하게 한다. 묶음의 순서가 바뀐 곳을 모르는 학생에게는 첫 묶음을 손으로 가리고 다음 묶음과 견주게 한다.',
      levels: PLV('odd'),
      items: [
        odd('가, 가, 나가 되풀이되는 줄에서 규칙과 다른 글자를 찾아 보세요.', ['가', '가', '나', '가', '나', '나', '가', '가', '나'], 4, 0.2),
        odd('네모, 별, 별이 되풀이되는 줄에서 규칙과 다른 조각을 찾아 보세요.', ['square:sky', 'star:buttercup', 'star:buttercup', 'square:sky', 'star:buttercup', 'star:buttercup', 'square:sky', 'square:sky', 'star:buttercup'], 7, 0.22),
        odd('손뼉, 무릎, 발이 되풀이되는 줄에서 규칙과 다른 동작을 찾아 보세요.', ['손뼉', '무릎', '발', '손뼉', '발', '발'], 4, 0.2,
          { conclude: '손뼉, 무릎, 발 다음에 손뼉이 오고 무릎이 와야 해요. 다섯 번째에 발이 나와서 규칙과 달라요.' }),
      ] },
  ],
  wrap: ['"세 개씩 되풀이되는 줄을 만들려면 어떻게 하나요?" 짝에게 한 묶음을 말하고 되풀이한다고 설명하게 한다. 출구 2번을 틀린 학생은 묶음의 순서를 바꿔 놓았는지 다음 시간에 먼저 살핀다.', [
    { type: 'choice', prompt: '한 묶음이 동그라미, 네모, 네모일 때 세 번 되풀이하면 모두 몇 칸일까요?', options: ['6칸', '9칸', '12칸'], answer: 1, difficulty: 0.15, explain: '세 개씩 세 번이라서 모두 아홉 칸이에요.' },
    { type: 'tool', tool: 'pattern', options: { mode: 'make', palette: ['heart:rose', 'star:sky', 'circle:peach'], length: 6 }, prompt: '하트, 별, 별을 되풀이해서 여섯 칸 줄을 만들어 보세요.', target: { rule: 'core', core: ['heart:rose', 'star:sky', 'star:sky'] }, difficulty: 0.2 },
    { type: 'choice', prompt: '"가, 가, 나"를 한 묶음으로 되풀이한 줄에 ○ 하세요.', options: ['가, 가, 나, 가, 가, 나', '가, 나, 가, 나, 가, 나', '가, 가, 나, 나, 가, 가'], answer: 0, difficulty: 0.12, explain: '가, 가, 나가 순서대로 되풀이된 줄이에요.' },
  ]],
  ws: { title: '세 개 묶음으로 만든 규칙', items: [
    fig('규칙을 찾아 빈칸에 알맞은 조각을 이어서 그려 넣으세요.', ['circle:rose', 'square:sky', 'square:sky', 'circle:rose', null, null], '파랑 네모, 파랑 네모'),
    { type: 'draw', prompt: '세 개를 한 묶음으로 정해 아홉 칸 줄을 그려 보세요.' },
    { type: 'choice', prompt: '"별, 하트, 하트"를 되풀이한 줄에 ○ 하세요.', options: ['별, 하트, 하트, 별, 하트, 하트', '별, 하트, 별, 하트, 별, 하트'], answer: '별, 하트, 하트, 별, 하트, 하트' },
    { type: 'short', prompt: '내가 정한 세 개 묶음을 써 보세요.' },
  ], easy: { note: '한 묶음을 먼저 정하고, 그 순서 그대로 되풀이해요.', items: [
    fig('규칙을 찾아 빈칸에 알맞은 조각을 이어서 그려 넣으세요.', ['circle:rose', 'square:sky', 'square:sky', 'circle:rose', null, 'square:sky'], '파랑 네모'),
    { type: 'draw', prompt: '동그라미, 네모, 네모를 두 번 되풀이해 그려 보세요.' },
    { type: 'choice', prompt: '"가, 가, 나"를 되풀이한 줄에 ○ 하세요.', options: ['가, 가, 나, 가, 가, 나', '가, 나, 가, 나'], answer: '가, 가, 나, 가, 가, 나' },
    { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '손뼉, 무릎, 발, 손뼉, 무릎, ___', answer: '발' },
  ] } },
  diff: { easy: '틀린 칸이 어디인지 알려 줘요. 힌트로 한 묶음을 정하는 방법을 알려 줘요.', base: '틀리면 규칙이 어디서 깨졌는지 알려 줘요.', challenge: '확인을 눌러도 어느 칸이 틀렸는지 알려 주지 않아요.' },
  notes: '자주 보이는 어려움: ① 두 번째 묶음의 순서를 바꾼다 → 첫 묶음을 손으로 가리키며 순서까지 되풀이한다. ② 한 묶음의 길이를 잘못 센다 → 같은 조각이 다시 나오는 곳 앞까지 센다. ③ 세 가지를 모두 쓰라는 조건을 놓친다 → 한 묶음 안에 서로 다른 조각이 몇 개 있어야 하는지 확인한다. 글자·수로 규칙을 만드는 활동은 9차시에서 한다.',
}));

// ───────────────────────────── 9차시 (core) ─────────────────────────────
L.push(lesson(9, {
  title: '글자와 수로 내 규칙을 만들어 늘어놓기',
  objective: '글자나 수를 써서 한 묶음을 정해 되풀이하거나 일정한 수만큼 커지게 늘어놓을 수 있다.',
  desc: 'a child writing letters and numbers on small paper cards and laying them in a repeating row on a desk, a paper pencil beside them',
  text: '글자와 수로 만들어요',
  layers: [{ motif: 'hills', y: 208 }, { motif: 'house', x: 100, y: 214 }, { motif: 'star', x: 330, y: 56, s: 0.5 }, { motif: 'tree', x: 390, y: 216 }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"이번에는 모양 대신 글자와 수로 규칙을 만들어 볼 거예요. 가, 나를 한 묶음으로 하면 어떤 줄이 되나요? 1부터 2씩 커지게 할 수도 있어요." 칠판에 두 가지를 보여 준다. 같은 글자를 두 번 연달아 쓰다가 규칙이 흐려지는 학생이 있다 — 한 묶음을 먼저 정하고 쓴다고 짚는다.', '글자나 수로도 규칙이 있는 줄을 만들 수 있을까요?'],
  acts: [
    { id: 'a1', title: '활동 1. 글자 카드로 규칙 만들기', minutes: 9, tool: 'pattern',
      task: '글자 카드로 한 묶음을 정해 되풀이해 줄을 만들어요.',
      teacher: '"어떤 글자로 한 묶음을 정했나요?" 정한 묶음을 먼저 말하게 한 뒤 놓게 한다. 같은 글자만 여러 번 놓은 학생에게는 서로 다른 글자가 두 개 이상 있어야 한다고 알려 준다.',
      levels: PLV('make'),
      items: [
        make('가, 나 두 글자로 여덟 칸 줄을 번갈아 만들어 보세요.', ['가', '나'], 8, { rule: 'repeat', period: 2, uses: 2 }, 0.14),
        make('가, 나, 다로 아홉 칸 줄을 세 개씩 되풀이되게 만들어 보세요.', ['가', '나', '다'], 9, { rule: 'repeat', period: 3, uses: 3 }, 0.2),
        make('사과와 귤로 여덟 칸 과일 줄을 번갈아 만들어 보세요.', ['사과', '귤'], 8, { rule: 'repeat', period: 2, uses: 2 }, 0.16,
          { conclude: '사과, 귤을 한 묶음으로 정하고 되풀이하면 글자로도 규칙이 생겨요.' }),
      ] },
    { id: 'a2', title: '활동 2. 정한 수만큼 커지게 수 늘어놓기', minutes: 11, tool: 'pattern',
      task: '처음 수를 정하고 일정한 수만큼 커지게 칸을 채워요.',
      teacher: '"1부터 2씩 커지면 다음 수는 무엇일까요?" 수를 놓을 때마다 앞의 수와 차이를 확인하게 한다. 3, 5, 6처럼 중간에 차이가 달라지는 학생에게는 이웃한 두 수의 차를 하나씩 말하며 고치게 한다.',
      levels: PLV('make'),
      items: [
        make('1부터 시작해서 2씩 커지는 수를 여섯 칸 써 보세요.', [], 6, { rule: 'add', step: 2 }, 0.2, null, { input: 'number', start: 1 }),
        make('5부터 시작해서 5씩 커지는 수를 여섯 칸 써 보세요.', [], 6, { rule: 'add', step: 5 }, 0.22, null, { input: 'number', start: 5 }),
        make('10부터 시작해서 10씩 커지는 수를 여섯 칸 써 보세요.', [], 6, { rule: 'add', step: 10 }, 0.24,
          { conclude: '10, 20, 30처럼 10씩 커지는 수는 낱개가 그대로이고 묶음이 하나씩 늘어요.' }, { input: 'number', start: 10 }),
        make('더 해 보기: 2부터 시작해서 2씩 커지는 수를 여덟 칸 써 보세요.', [], 8, { rule: 'add', step: 2 }, 0.26, { extra: true }, { input: 'number', start: 2 }),
      ] },
    { id: 'a3', title: '활동 3. 규칙 말과 수 줄 짝짓기', minutes: 6, tool: 'mindmap',
      task: '규칙을 나타내는 말과 알맞은 수 줄을 이어 줘요.',
      teacher: '"2씩 커지는 수 줄은 어느 것일까요?" 이웃한 두 수의 차를 말하며 줄을 고르게 한다. 5씩 작아지는 수를 5씩 커지는 수와 헷갈리는 학생에게는 수가 커지는지 작아지는지 먼저 말하게 한다.',
      levels: CARD_LV,
      items: [
        match('규칙 말과 알맞은 수 줄을 이어 보세요.', '규칙과 수 줄', ['2씩 커지는 수', '5씩 커지는 수', '1씩 작아지는 수'], ['2 4 6 8', '5 10 15 20', '9 8 7 6'], 0.16),
        match('이번에도 규칙 말과 수 줄을 이어 보세요.', '규칙과 수 줄', ['10씩 커지는 수', '1씩 커지는 수', '2씩 작아지는 수'], ['10 20 30 40', '3 4 5 6', '8 6 4 2'], 0.18),
        match('더 해 보기: 규칙 말과 수 줄을 이어 보세요.', '규칙과 수 줄', ['5씩 작아지는 수', '1, 2가 되풀이되는 수'], ['25 20 15 10', '1 2 1 2 1 2'], 0.22, { extra: true }),
      ] },
  ],
  wrap: ['"글자와 수로 규칙을 만들 때 먼저 무엇을 정하나요?" 짝에게 한 묶음이나 커지는 수를 말하게 한다. 출구 2번에서 7을 고르지 못한 학생은 처음 수에서 몇씩 더하는지 놓쳤는지 다음 시간에 먼저 살핀다.', [
    { type: 'choice', prompt: '"가, 나"를 한 묶음으로 되풀이한 줄에 ○ 하세요.', options: ['가, 나, 가, 나', '가, 가, 나, 나', '가, 다, 나, 라'], answer: 0, difficulty: 0.1, explain: '가, 나가 순서대로 되풀이되었어요.' },
    { type: 'choice', prompt: '3부터 2씩 커지는 수를 쓰면 3, 5, □ 예요. □에 알맞은 수는 무엇일까요?', options: ['6', '7', '8'], answer: 1, difficulty: 0.15, explain: '5에 2를 더하면 7이에요.' },
    { type: 'tool', tool: 'pattern', options: { mode: 'make', palette: [], length: 5, input: 'number', start: 4 }, prompt: '4부터 시작해서 1씩 커지는 수를 다섯 칸 써 보세요.', target: { rule: 'add', step: 1 }, difficulty: 0.2 },
  ]],
  ws: { title: '글자와 수로 만든 규칙', items: [
    { type: 'blank', prompt: '규칙에 맞게 빈칸에 알맞은 말을 쓰세요.', text: '가, 나, 가, ___, 가, 나', answer: '나' },
    { type: 'blank', prompt: '2씩 커지게 빈칸에 알맞은 수를 쓰세요.', text: '1, 3, ___, 7, 9', answer: '5' },
    { type: 'choice', prompt: '5씩 커지는 수 줄에 ○ 하세요.', options: ['5, 10, 15, 20', '5, 6, 7, 8', '5, 7, 9, 11'], answer: '5, 10, 15, 20' },
    { type: 'short', prompt: '내가 정한 글자 규칙이나 수 규칙을 하나 써 보세요.' },
  ], easy: { note: '이웃한 두 수의 차이가 늘 같은지 확인해요.', items: [
    { type: 'blank', prompt: '규칙에 맞게 빈칸에 알맞은 말을 쓰세요.', text: '가, 나, 가, ___', answer: '나' },
    { type: 'blank', prompt: '1씩 커지게 빈칸에 알맞은 수를 쓰세요.', text: '3, 4, ___, 6', answer: '5' },
    { type: 'choice', prompt: '2씩 커지는 수 줄에 ○ 하세요.', options: ['2, 4, 6', '2, 3, 4'], answer: '2, 4, 6' },
    { type: 'draw', prompt: '가, 나를 번갈아 여섯 칸 써 보세요.' },
  ] } },
  diff: { easy: '틀린 칸이 어디인지 알려 줘요. 힌트로 처음 수에서 얼마씩 더하는지 알려 줘요.', base: '틀리면 규칙이 어디서 깨졌는지 알려 줘요.', challenge: '확인을 눌러도 어느 칸이 틀렸는지 알려 주지 않아요.' },
  notes: '자주 보이는 어려움: ① 같은 글자를 여러 번 연달아 쓴다 → 서로 다른 글자가 한 묶음 안에 두 개 이상 있어야 한다. ② 수를 쓰다가 중간에 차이가 달라진다 → 이웃한 두 수의 차를 하나씩 말한다. ③ 5씩 작아지는 것과 커지는 것을 헷갈린다 → 커지는지 작아지는지 먼저 말한다. 동작과 수로 만드는 연습은 10차시에서 한다.',
}));
// ───────────────────────────── 10차시 (practice) ─────────────────────────────
L.push(lesson(10, {
  title: '동작 카드와 거꾸로 세는 수로 규칙 만들기',
  objective: '동작 카드를 정한 묶음대로 되풀이하고 수를 일정하게 작아지게 놓아 규칙이 있는 줄을 만들 수 있다.',
  desc: 'a row of paper movement cards laid out in a repeating order on a classroom floor, children copying the movements one by one',
  text: '동작과 수로 규칙 만들기',
  layers: [{ motif: 'hills', y: 208 }, { motif: 'flower', x: 100, y: 236 }, { motif: 'flower', x: 150, y: 240, color: 'rose' }, { motif: 'star', x: 340, y: 56, s: 0.5 }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"우리 모둠이 보여 줄 동작 줄을 만들어 볼까요? 손뼉, 무릎, 무릎을 한 묶음으로 하면 몸으로는 어떻게 될까요?" 교사가 먼저 한 묶음을 보이고 되풀이한다. 수도 이번에는 거꾸로 센다고 알려 준다. 동작 순서가 섞이면 규칙이 없어진다는 것을 학생이 직접 보게 한다.', '동작과 수로 규칙 있는 줄을 만들려면 어떻게 하나요?'],
  acts: [
    { id: 'a1', title: '활동 1. 동작 카드를 정한 대로 되풀이하기', minutes: 9, tool: 'pattern',
      task: '동작이나 소리 카드로 정해진 묶음을 되풀이해 줄을 만들어요.',
      teacher: '"정한 묶음은 무엇이었지요? 순서까지 그대로 되풀이해요." 칸마다 몸으로 동작을 해 보며 놓게 한다. 두 번째 묶음의 순서가 바뀐 학생에게는 첫 묶음과 견주게 한다.',
      levels: PLV('make'),
      items: [
        make('손뼉, 무릎, 무릎을 되풀이해서 아홉 칸 동작 줄을 만들어 보세요.', ['손뼉', '무릎', '발'], 9, { rule: 'core', core: ['손뼉', '무릎', '무릎'] }, 0.18),
        make('쿵, 짝을 번갈아 여덟 칸 소리 줄을 만들어 보세요.', ['쿵', '짝'], 8, { rule: 'repeat', period: 2, uses: 2 }, 0.14),
        make('점프, 앉기, 박수를 차례로 되풀이해 아홉 칸 동작 줄을 만들어 보세요.', ['점프', '앉기', '박수'], 9, { rule: 'core', core: ['점프', '앉기', '박수'] }, 0.2,
          { conclude: '동작 카드도 한 묶음을 정해 되풀이하면 규칙이 있는 줄이 돼요.' }),
      ] },
    { id: 'a2', title: '활동 2. 일정하게 작아지는 수 늘어놓기', minutes: 11, tool: 'pattern',
      task: '처음 수를 정하고 일정한 수만큼 작아지게 칸을 채워요.',
      teacher: '"20부터 2씩 작아지면 다음 수는 무엇일까요?" 거꾸로 세며 한 칸씩 쓰게 한다. 중간에 커지게 쓴 학생에게는 앞의 수보다 작은지 하나씩 확인하게 한다.',
      levels: PLV('make'),
      items: [
        make('20부터 시작해서 2씩 작아지는 수를 여섯 칸 써 보세요.', [], 6, { rule: 'add', step: -2 }, 0.22, null, { input: 'number', start: 20 }),
        make('30부터 시작해서 5씩 작아지는 수를 여섯 칸 써 보세요.', [], 6, { rule: 'add', step: -5 }, 0.24, null, { input: 'number', start: 30 }),
        make('9부터 시작해서 1씩 작아지는 수를 다섯 칸 써 보세요.', [], 5, { rule: 'add', step: -1 }, 0.2,
          { conclude: '9, 8, 7처럼 1씩 작아지는 수는 거꾸로 세는 것과 같아요.' }, { input: 'number', start: 9 }),
        make('더 해 보기: 50부터 시작해서 10씩 작아지는 수를 다섯 칸 써 보세요.', [], 5, { rule: 'add', step: -10 }, 0.26, { extra: true }, { input: 'number', start: 50 }),
      ] },
    { id: 'a3', title: '활동 3. 글자·동작 줄에서 벗어난 것 찾기', minutes: 6, tool: 'pattern',
      task: '내가 만든 것처럼 되풀이되는 줄에서 규칙과 다른 칸을 하나 찾아요.',
      teacher: '"묶음이 되풀이되는 줄이에요. 어디에서 규칙이 깨졌을까요?" 한 묶음을 먼저 말하고 줄과 견주게 한다. 마지막 칸이라고 짐작하는 학생에게는 처음 달라지는 칸을 찾게 한다.',
      levels: PLV('odd'),
      items: [
        odd('가, 나가 번갈아 놓인 줄에서 규칙과 다른 글자를 찾아 보세요.', ['가', '나', '가', '나', '나', '나'], 4, 0.14),
        odd('사과, 귤, 귤이 되풀이되는 줄에서 규칙과 다른 과일을 찾아 보세요.', ['사과', '귤', '귤', '사과', '귤', '귤', '사과', '사과'], 7, 0.2),
        odd('3과 5가 번갈아 나오는 줄에서 규칙과 다른 수를 찾아 보세요.', [3, 5, 3, 5, 3, 6], 5, 0.16,
          { conclude: '3, 5가 되풀이되는데 마지막에 6이 나왔어요. 5가 와야 해요.' }),
      ] },
  ],
  wrap: ['"동작이나 수로 규칙을 만들 때 가장 중요한 점은 무엇인가요?" 짝에게 한 묶음을 정해 되풀이하거나 일정하게 바꾼다고 말하게 한다. 출구 2번에서 12를 고르지 못한 학생은 작아지는 줄에서 더했는지 다음 시간에 먼저 살핀다.', [
    { type: 'choice', prompt: '"손뼉, 무릎"을 번갈아 하는 동작 줄에 ○ 하세요.', options: ['손뼉, 무릎, 손뼉, 무릎', '손뼉, 손뼉, 무릎, 무릎', '손뼉, 발, 무릎, 점프'], answer: 0, difficulty: 0.1, explain: '손뼉, 무릎이 순서대로 되풀이된 줄이에요.' },
    { type: 'choice', prompt: '20부터 2씩 작아지는 수를 쓰면 20, 18, 16, 14, □ 예요. □에 알맞은 수는 무엇일까요?', options: ['10', '12', '16'], answer: 1, difficulty: 0.18, explain: '14에서 2를 빼면 12예요.' },
    { type: 'tool', tool: 'pattern', options: { mode: 'make', palette: [], length: 5, input: 'number', start: 25 }, prompt: '25부터 시작해서 5씩 작아지는 수를 다섯 칸 써 보세요.', target: { rule: 'add', step: -5 }, difficulty: 0.22 },
  ]],
  ws: { title: '동작과 거꾸로 세는 수', items: [
    { type: 'blank', prompt: '규칙에 맞게 빈칸에 알맞은 말을 쓰세요.', text: '손뼉, 무릎, 무릎, 손뼉, ___, 무릎', answer: '무릎' },
    { type: 'blank', prompt: '2씩 작아지게 빈칸에 알맞은 수를 쓰세요.', text: '20, 18, ___, 14, 12', answer: '16' },
    { type: 'choice', prompt: '5씩 작아지는 수 줄에 ○ 하세요.', options: ['30, 25, 20, 15', '30, 35, 40, 45', '30, 29, 28, 27'], answer: '30, 25, 20, 15' },
    { type: 'short', prompt: '내가 정한 동작 한 묶음을 써 보세요.' },
  ], easy: { note: '거꾸로 센다고 생각하고 앞의 수보다 작은 수를 써요.', items: [
    { type: 'blank', prompt: '규칙에 맞게 빈칸에 알맞은 말을 쓰세요.', text: '손뼉, 무릎, 손뼉, ___', answer: '무릎' },
    { type: 'blank', prompt: '1씩 작아지게 빈칸에 알맞은 수를 쓰세요.', text: '9, 8, ___, 6', answer: '7' },
    { type: 'choice', prompt: '2씩 작아지는 수 줄에 ○ 하세요.', options: ['10, 8, 6', '10, 12, 14'], answer: '10, 8, 6' },
    { type: 'draw', prompt: '쿵, 짝을 번갈아 여섯 칸 그려 보세요.' },
  ] } },
  diff: { easy: '틀린 칸이 어디인지 알려 줘요. 힌트로 처음 수에서 얼마씩 빼는지 알려 줘요.', base: '틀리면 규칙이 어디서 깨졌는지 알려 줘요.', challenge: '확인을 눌러도 어느 칸이 틀렸는지 알려 주지 않아요.' },
  notes: '자주 보이는 어려움: ① 작아지는 줄을 쓰다가 중간에 커진다 → 앞의 수보다 작은지 하나씩 확인한다. ② 동작 묶음의 순서가 바뀐다 → 첫 묶음과 견주며 순서까지 되풀이한다. ③ 규칙에서 벗어난 칸을 마지막 칸이라고 짐작한다 → 처음 달라지는 칸을 찾는다. 규칙을 꾸미는 활동에 쓰는 것은 11차시에서 한다.',
}));
// ───────────────────────────── 11차시 (core) ─────────────────────────────
L.push(lesson(11, {
  title: '수건 띠와 책갈피 무늬에 내 규칙 넣어 꾸미기',
  objective: '수건 띠나 책갈피 같은 물건의 무늬를 내가 정한 규칙에 따라 꾸미고, 규칙을 말로 설명할 수 있다.',
  desc: 'a decorated paper towel strip and a bookmark with a repeating pattern of colorful shapes, a small child showing the pattern to a friend',
  text: '무늬에 규칙을 넣어요',
  layers: [{ motif: 'hills', y: 208 }, { motif: 'house', x: 100, y: 214 }, { motif: 'flower', x: 330, y: 238 }, { motif: 'star', x: 390, y: 70, s: 0.5 }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"우리가 쓰는 수건이나 책갈피에도 무늬가 되풀이돼요. 오늘은 내가 정한 규칙으로 수건 띠 무늬를 꾸며 볼까요?" 규칙이 있는 무늬와 없는 무늬를 하나씩 보여 주고 어느 쪽이 더 정돈되어 보이는지 묻는다. 규칙을 정하지 않고 마음대로 꾸미다가 무늬가 흐트러지는 학생이 있다 — 한 묶음을 먼저 정한다고 말해 준다.', '무늬에 규칙이 있으면 왜 더 정돈되어 보일까요?'],
  acts: [
    { id: 'a1', title: '활동 1. 규칙을 정해 무늬 띠 꾸미기', minutes: 9, tool: 'pattern',
      task: '한 묶음을 정해 되풀이하며 수건 띠, 책갈피, 타일 줄을 꾸며요.',
      teacher: '"어떤 묶음을 되풀이했나요? 말로 설명해 볼까요?" 꾸민 뒤 정한 묶음을 짝에게 소개하게 한다. 마지막 칸에서 다른 조각을 놓은 학생에게는 첫 묶음과 견주며 고치게 한다.',
      levels: PLV('make'),
      items: [
        make('수건 띠를 초록 동그라미와 노랑 동그라미로 열 칸 번갈아 꾸며 보세요.', ['circle:mint', 'circle:buttercup'], 10, { rule: 'repeat', period: 2, uses: 2 }, 0.18),
        make('책갈피를 세 가지 모양을 한 묶음으로 세 개씩 되풀이해 아홉 칸으로 꾸며 보세요.', ['circle:rose', 'square:sky', 'star:buttercup'], 9, { rule: 'repeat', period: 3, uses: 3 }, 0.22),
        make('타일 줄을 파랑, 주황, 주황 네모를 되풀이해 여섯 칸으로 꾸며 보세요.', ['square:sky', 'square:peach'], 6, { rule: 'core', core: ['square:sky', 'square:peach', 'square:peach'] }, 0.22,
          { predict: { q: '파랑, 주황, 주황을 되풀이하면 여섯 칸 가운데 파랑은 몇 칸일까요?', options: ['한 칸', '두 칸', '세 칸'], answer: 1 }, conclude: '세 개 묶음이 두 번이라 파랑은 두 칸, 주황은 네 칸이에요.' }),
      ] },
    { id: 'a2', title: '활동 2. 무늬 줄에서 규칙 찾아 말하기', minutes: 11, tool: 'pattern',
      task: '친구가 꾸민 무늬 줄을 보고 어떤 규칙인지 알맞은 말을 골라요.',
      teacher: '"이 수건 띠는 어떤 묶음이 되풀이되나요?" 한 묶음을 손가락으로 묶으며 규칙을 말하게 한다. 색과 모양을 한꺼번에 보다가 헷갈리는 학생에게는 색만 먼저, 다음에 모양만 따로 보게 한다.',
      levels: PLV('rule'),
      items: [
        rule('수건 띠 무늬는 어떤 규칙으로 꾸몄는지 골라 보세요.', ['circle:mint', 'circle:buttercup', 'circle:mint', 'circle:buttercup', 'circle:mint', 'circle:buttercup'], ['초록, 노랑이 번갈아 나와요', '초록 동그라미만 나와요', '동그라미가 두 번씩 나와요'], 0, 0.14),
        rule('책갈피 무늬는 어떤 규칙으로 꾸몄는지 골라 보세요.', ['circle:rose', 'square:sky', 'star:buttercup', 'circle:rose', 'square:sky', 'star:buttercup'], ['동그라미, 네모가 번갈아 나와요', '동그라미, 네모, 별이 되풀이돼요', '별만 되풀이돼요'], 1, 0.18),
        rule('타일 줄 무늬는 어떤 규칙으로 꾸몄는지 골라 보세요.', ['square:sky', 'square:peach', 'square:peach', 'square:sky', 'square:peach', 'square:peach'], ['파랑, 주황이 번갈아 나와요', '파랑, 주황, 주황이 되풀이돼요', '주황만 계속 나와요'], 1, 0.2,
          { conclude: '파랑 하나 뒤에 주황 둘이 나와요. 세 개가 한 묶음이에요.' }),
        rule('더 해 보기: 옷감 무늬는 어떤 규칙으로 꾸몄는지 골라 보세요.', ['heart:rose', 'heart:rose', 'star:lavender', 'heart:rose', 'heart:rose', 'star:lavender'], ['하트, 하트, 별이 되풀이돼요', '하트, 별이 번갈아 나와요', '별만 되풀이돼요'], 0, 0.22, { extra: true }),
      ] },
    { id: 'a3', title: '활동 3. 규칙이 있는 무늬 골라내기', minutes: 6, tool: 'mindmap',
      task: '규칙이 있는 무늬 줄만 바구니에 담아요.',
      teacher: '"같은 묶음이 되풀이되는 무늬는 어느 것일까요?" 줄마다 첫 묶음을 정해 끝까지 견주게 한다. 색이 많으면 규칙이 있다고 생각하는 학생에게는 묶음이 되풀이되는지 먼저 보게 한다.',
      levels: CARD_LV,
      items: [
        pickOf('규칙이 있는 무늬 줄만 골라 보세요.', '규칙이 있어요', ['빨강 파랑 빨강 파랑 빨강 파랑', '빨강 파랑 노랑 초록 보라 빨강', '노랑 초록 초록 노랑 초록 초록'], ['빨강 파랑 빨강 파랑 빨강 파랑', '노랑 초록 초록 노랑 초록 초록'], 0.16),
        pickOf('이번에도 규칙이 있는 무늬 줄만 골라 보세요.', '규칙이 있어요', ['별 하트 별 하트 별 하트', '별 하트 세모 별 네모 하트', '네모 네모 별 네모 네모 별'], ['별 하트 별 하트 별 하트', '네모 네모 별 네모 네모 별'], 0.18),
        pickOf('더 해 보기: 규칙이 없는 무늬 줄만 골라 보세요.', '규칙이 없어요', ['동그라미 세모 네모 세모 별 하트', '동그라미 네모 동그라미 네모', '세모 별 세모 별'], ['동그라미 세모 네모 세모 별 하트'], 0.2, { extra: true }),
      ] },
  ],
  wrap: ['"무늬에 규칙을 넣으면 어떤 점이 좋았나요?" 짝에게 꾸민 무늬의 규칙을 소개하게 한다. 출구 1번을 틀린 학생은 규칙 있는 줄과 없는 줄을 구별하지 못했는지 다음 시간에 먼저 살핀다.', [
    { type: 'choice', prompt: '규칙이 있는 무늬 줄에 ○ 하세요.', options: ['빨강, 파랑, 빨강, 파랑, 빨강', '빨강, 노랑, 초록, 파랑, 보라'], answer: 0, difficulty: 0.12, explain: '빨강, 파랑이 번갈아 되풀이되는 줄이 규칙이 있는 줄이에요.' },
    { type: 'tool', tool: 'pattern', options: { mode: 'make', palette: ['star:buttercup', 'heart:rose', 'circle:sky'], length: 6 }, prompt: '별, 하트, 동그라미를 되풀이해서 여섯 칸 책갈피를 꾸며 보세요.', target: { rule: 'core', core: ['star:buttercup', 'heart:rose', 'circle:sky'] }, difficulty: 0.22 },
    { type: 'choice', prompt: '"파랑, 주황, 주황"을 되풀이한 줄에 ○ 하세요.', options: ['파랑, 주황, 주황, 파랑, 주황, 주황', '파랑, 주황, 파랑, 주황, 파랑, 주황'], answer: 0, difficulty: 0.15, explain: '파랑, 주황, 주황이 순서대로 되풀이된 줄이에요.' },
  ]],
  ws: { title: '무늬에 규칙 넣기', items: [
    fig('규칙을 찾아 빈칸에 알맞은 조각을 그려 넣으세요.', ['circle:mint', 'circle:buttercup', 'circle:mint', 'circle:buttercup', null, null], '초록 동그라미, 노랑 동그라미'),
    fig('규칙을 찾아 빈칸에 알맞은 조각을 그려 넣으세요.', ['square:sky', 'square:peach', 'square:peach', 'square:sky', null, 'square:peach'], '주황 네모'),
    { type: 'draw', prompt: '내가 정한 규칙으로 수건 띠 무늬를 여덟 칸 그려 보세요.' },
    { type: 'short', prompt: '내가 꾸민 무늬의 규칙을 한 문장으로 써 보세요.' },
  ], easy: { note: '두 가지만 골라서 번갈아 꾸며요.', items: [
    fig('규칙을 찾아 빈칸에 알맞은 조각을 그려 넣으세요.', ['circle:mint', 'circle:buttercup', 'circle:mint', null], '노랑 동그라미'),
    { type: 'draw', prompt: '동그라미와 세모를 번갈아 수건 띠에 그려 보세요.' },
    { type: 'choice', prompt: '규칙이 있는 무늬에 ○ 하세요.', options: ['별, 하트, 별, 하트', '별, 세모, 하트, 네모'], answer: '별, 하트, 별, 하트' },
    { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '파랑, 주황, 주황, 파랑, 주황, ___', answer: '주황' },
  ] } },
  diff: { easy: '틀린 칸이 어디인지 알려 줘요. 힌트로 한 묶음을 정하는 방법을 알려 줘요.', base: '틀리면 규칙이 어디서 깨졌는지 알려 줘요.', challenge: '확인을 눌러도 어느 칸이 틀렸는지 알려 주지 않아요.' },
  notes: '자주 보이는 어려움: ① 규칙을 정하지 않고 마음대로 꾸민다 → 한 묶음을 먼저 정한다. ② 색과 모양을 한꺼번에 보다가 헷갈린다 → 색만, 모양만 따로 본다. ③ 색이 많으면 규칙이 있다고 생각한다 → 같은 묶음이 되풀이되는지 견준다. 단원 정리는 12차시에서 한다.',
}));
// ───────────────────────────── 12차시 (wrap) ─────────────────────────────
L.push(lesson(12, {
  title: '규칙 찾기와 규칙 만들기 단원 정리하기',
  objective: '늘어놓은 줄에서 규칙을 찾아 말하고, 내가 정한 규칙으로 줄을 만들며 규칙에서 벗어난 것을 찾을 수 있다.',
  desc: 'a bright paper board with a pattern of shapes, letters and numbers in rows, and the friendly animals of the unit looking at it together',
  text: '규칙을 찾고 만들어요',
  layers: [{ motif: 'hills', y: 208 }, { motif: 'house', x: 100, y: 214 }, { motif: 'tree', x: 390, y: 216, color: 'mint' }, { motif: 'star', x: 90, y: 56, s: 0.5 }, { motif: 'star', x: 340, y: 50, s: 0.5 }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"이 단원에서 규칙을 어떻게 찾았고 어떻게 만들었는지 떠올려 봐요. 같은 묶음이 되풀이되는 규칙, 수가 일정하게 커지거나 작아지는 규칙이 있었지요." 칠판의 줄 세 개에서 규칙을 하나씩 말하게 한다. 규칙이 헷갈리는 학생은 이웃한 조각이나 수를 짝지어 읽게 한다.', '이 단원에서 어떤 규칙들을 만났는지 말해 볼까요?'],
  acts: [
    { id: 'a1', title: '활동 1. 줄에서 규칙 찾아 말하기', minutes: 8, tool: 'pattern',
      task: '모양, 수, 동작 줄의 규칙을 골라요.',
      teacher: '"이 줄은 같은 묶음이 되풀이되나요, 아니면 수가 일정하게 변하나요?" 먼저 어느 종류의 규칙인지 말하게 한다. 되풀이되는 줄을 커지는 규칙으로 읽는 학생에게는 같은 것이 다시 나오는지 짚게 한다.',
      levels: PLV('rule'),
      items: [
        rule('분홍과 파랑 구슬 줄은 어떤 규칙인지 골라 보세요.', ['circle:rose', 'circle:sky', 'circle:rose', 'circle:sky', 'circle:rose', 'circle:sky'], ['분홍, 파랑이 번갈아 나와요', '분홍만 나와요', '파랑만 나와요'], 0, 0.1),
        rule('7, 8, 9, 10, 11 줄은 어떤 규칙인지 골라 보세요.', [7, 8, 9, 10, 11], ['앞의 수에 1씩 더해요', '앞의 수에 2씩 더해요', '앞의 수에서 1씩 빼요'], 0, 0.1),
        rule('쿵, 짝, 짝 소리 줄은 어떤 규칙인지 골라 보세요.', ['쿵', '짝', '짝', '쿵', '짝', '짝'], ['쿵, 짝이 번갈아 나와요', '쿵, 짝, 짝이 되풀이돼요', '짝만 되풀이돼요'], 1, 0.16),
        rule('더 해 보기: 40, 30, 20, 10 줄은 어떤 규칙인지 골라 보세요.', [40, 30, 20, 10], ['앞의 수에서 10씩 빼요', '앞의 수에 10씩 더해요', '앞의 수에서 20씩 빼요'], 0, 0.2, { extra: true }),
      ] },
    { id: 'a2', title: '활동 2. 내가 정한 규칙으로 줄 만들기', minutes: 11, tool: 'pattern',
      task: '모양이나 수로 내가 한 묶음을 정해 되풀이하거나 일정하게 바꾸어 줄을 만들어요.',
      teacher: '"어떤 규칙으로 만들었는지 짝에게 말해 볼까요?" 만든 뒤에 규칙을 말로 설명하게 한다. 규칙을 정하지 않고 놓은 학생에게는 처음 두 칸을 한 묶음으로 정하고 되풀이하게 한다.',
      levels: PLV('make'),
      items: [
        make('세모와 별로 여덟 칸 줄을 번갈아 만들어 보세요.', ['triangle:lavender', 'star:buttercup'], 8, { rule: 'repeat', period: 2, uses: 2 }, 0.16),
        make('세 가지 조각으로 세 개씩 되풀이되는 아홉 칸 줄을 만들어 보세요.', ['circle:peach', 'square:mint', 'heart:rose'], 9, { rule: 'repeat', period: 3, uses: 3 }, 0.22),
        make('3부터 시작해서 3씩 커지는 수를 여섯 칸 써 보세요.', [], 6, { rule: 'add', step: 3 }, 0.24,
          { conclude: '3, 6, 9, 12처럼 3씩 커지는 수도 규칙이에요.' }, { input: 'number', start: 3 }),
        make('더 해 보기: 12부터 시작해서 2씩 작아지는 수를 여섯 칸 써 보세요.', [], 6, { rule: 'add', step: -2 }, 0.26, { extra: true }, { input: 'number', start: 12 }),
      ] },
    { id: 'a3', title: '활동 3. 규칙에서 벗어난 것과 빈칸 찾기', minutes: 7, tool: 'pattern',
      task: '규칙을 보고 빈칸을 채우거나 규칙과 다른 칸을 하나 찾아요.',
      teacher: '"규칙에서 벗어난 칸을 어떻게 찾을 수 있을까요?" 한 묶음이나 이웃한 수의 차를 먼저 말하게 한다. 마지막 칸이 이상하다고 짐작하는 학생에게는 처음 달라지는 칸을 찾게 한다.',
      levels: PLV('fill'),
      items: [
        fill('하트, 별, 별이 되풀이돼요. 빈칸에 알맞은 조각을 놓아 보세요.', ['heart:rose', 'star:sky', 'star:sky', 'heart:rose', 'star:sky', null], ['star:sky'], 0.18),
        fill('수가 4씩 커져요. 빈칸 두 개에 알맞은 수를 써 보세요.', [4, 8, 12, null, 20, null], [16, 24], 0.22),
        fill('나, 가가 번갈아 놓였어요. 빈칸 두 개에 알맞은 글자를 놓아 보세요.', ['나', '가', '나', null, '나', null], ['가', '가'], 0.14,
          { conclude: '모양이든 글자든 수든 규칙을 찾는 방법은 같아요. 한 묶음이나 이웃한 수의 차를 보아요.' }),
      ] },
  ],
  wrap: ['"이 단원에서 배운 규칙에는 어떤 종류가 있었나요?" 짝에게 되풀이되는 규칙과 수가 변하는 규칙을 하나씩 말하게 한다. 출구 2번에서 규칙에 맞지 않는 줄을 고른 학생은 한 묶음을 정하지 못했는지 다음 단원에서 먼저 살핀다.', [
    { type: 'choice', prompt: '1, 3, 5, 7은 어떤 규칙인가요?', options: ['1씩 커져요', '2씩 커져요', '3씩 커져요'], answer: 1, difficulty: 0.12, explain: '이웃한 수가 모두 2씩 커져요.' },
    { type: 'choice', prompt: '정해진 묶음이 되풀이되는 줄에 ○ 하세요.', options: ['가, 나, 나, 가, 나, 나', '가, 다, 라, 나, 가, 다'], answer: 0, difficulty: 0.15, explain: '가, 나, 나가 한 묶음으로 되풀이돼요.' },
    { type: 'tool', tool: 'pattern', options: { mode: 'odd', seq: [6, 8, 10, 12, 15, 16] }, prompt: '2씩 커지는 줄에서 규칙과 다른 수를 찾아 눌러 보세요.', target: { odd: 4 }, difficulty: 0.2 },
  ]],
  ws: { title: '규칙 찾기와 만들기 정리', items: [
    fig('규칙을 찾아 빈칸에 알맞은 조각을 그려 넣으세요.', ['star:buttercup', 'heart:rose', 'heart:rose', 'star:buttercup', 'heart:rose', null], '하트'),
    fig('규칙을 찾아 빈칸에 알맞은 수를 쓰세요.', [3, 6, 9, null, 15, 18], '12'),
    { type: 'choice', prompt: '10, 8, 6, 4는 어떤 규칙일까요? ○ 하세요.', options: ['2씩 커져요', '2씩 작아져요', '4씩 작아져요'], answer: '2씩 작아져요' },
    { type: 'short', prompt: '이 단원에서 만든 규칙 가운데 가장 마음에 드는 것을 한 문장으로 써 보세요.' },
  ], easy: { note: '같은 묶음이 되풀이되는지, 수가 얼마씩 변하는지 먼저 살펴요.', items: [
    fig('규칙을 찾아 빈칸에 알맞은 조각을 그려 넣으세요.', ['star:buttercup', 'heart:rose', 'star:buttercup', null], '하트'),
    fig('규칙을 찾아 빈칸에 알맞은 수를 쓰세요.', [2, 4, 6, null], '8'),
    { type: 'choice', prompt: '"가, 나, 가, 나"는 어떤 규칙인가요?', options: ['가, 나가 되풀이돼요', '가만 나와요'], answer: '가, 나가 되풀이돼요' },
    { type: 'draw', prompt: '내가 정한 규칙으로 줄을 여섯 칸 그려 보세요.' },
  ] } },
  diff: { easy: '틀린 칸이 어디인지 알려 줘요. 힌트로 규칙을 찾는 방법을 알려 줘요.', base: '틀리면 어느 칸이 틀렸는지 알려 줘요.', challenge: '확인을 눌러도 어느 칸이 틀렸는지 알려 주지 않아요.' },
  notes: '자주 보이는 어려움: ① 되풀이되는 줄과 커지는 수 줄을 구별하지 못한다 → 같은 것이 다시 나오는지, 수가 계속 변하는지 본다. ② 규칙을 정하지 않고 줄을 만든다 → 처음 두 칸을 한 묶음으로 정하고 되풀이한다. ③ 규칙에서 벗어난 칸을 마지막 칸이라고 짐작한다 → 처음 달라지는 칸을 찾는다. 이후 2학년 규칙 찾기(수 배열표·덧셈표)에서 이어진다.',
}));
PaperLessons.registerUnit({
  id: UID, schema: 'edu-unit.v1', catalogUnit: CU,
  grade: 1, subject: '수학', unitTitle: UT,
  flow: '1~4차시에서는 구슬·모양·글자·수·소리·몸동작으로 늘어놓은 줄에서 같은 묶음이 되풀이되는 규칙을 찾습니다. 두 개씩 번갈아 나오는 줄에서 출발해 세 개 묶음으로 넓히고, 같은 규칙을 모양에서 글자와 수와 동작으로 옮겨 나타냅니다. 5~6차시에서는 1씩·2씩·5씩 커지거나 작아지는 수 줄과 1, 2, 3이 되풀이되는 수 줄을 가려내고 빈칸과 벗어난 수를 찾습니다. 7~11차시에서는 입장을 바꾸어 내가 한 묶음을 정해 되풀이하거나 일정한 수만큼 커지고 작아지게 줄을 만들고, 수건 띠·책갈피 무늬 꾸미기에 씁니다. 12차시에서 두 방향을 한꺼번에 묶어 내 규칙을 설명합니다.',
  refs: {},
  lessons: L,
});
})();
