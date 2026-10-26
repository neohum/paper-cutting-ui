/* 1학년 1학기 수학 3. 덧셈과 뺄셈 — 9까지의 수를 모으고 가르기 */
(function () {
const BLANK = '(        )';
PaperLessons.register({
  id: 'g1-math-compose',
  schema: 'edu-lesson.v1',
  catalog: { unit: 'g1-수학-1학기-3', lesson: 2 },
  grade: 1, subject: '수학', unitTitle: '3. 덧셈과 뺄셈',
  title: '두 가지 색 사과로 모으기와 가르기',
  objective: '9까지의 수를 두 수로 모으고 가를 수 있다.',
  standards: ['[2수01-05]'],
  minutes: 40,
  formats: ['chromebook', 'projector', 'print'],
  illustration: {
    prompt: "Layered paper-cut illustration of two little paper rabbits on a sunny hill sharing seven apples between two woven baskets, four red apples in one basket and three green apples in the other, an apple tree behind them, no letters, numbers or writing anywhere, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.",
    image: 'img/g1-math-compose.webp', size: [1200, 800],
    scene: { viewBox: [480, 270], layers: [
      { motif: 'sun', x: 70, y: 56, s: 0.8 }, { motif: 'cloud', x: 250, y: 44 }, { motif: 'cloud', x: 400, y: 60, s: 0.7 },
      { motif: 'hills', y: 198, colors: ['mint', 'buttercup', 'peach'] },
      { motif: 'tree', x: 240, y: 206, s: 1.2 },
      { motif: 'apple', x: 120, y: 226, s: 0.4 }, { motif: 'apple', x: 140, y: 230, s: 0.4 }, { motif: 'apple', x: 160, y: 226, s: 0.4 }, { motif: 'apple', x: 140, y: 212, s: 0.4 },
      { motif: 'apple', x: 330, y: 228, s: 0.4, color: 'mint' }, { motif: 'apple', x: 350, y: 228, s: 0.4, color: 'mint' }, { motif: 'apple', x: 340, y: 214, s: 0.4, color: 'mint' },
      { motif: 'text', x: 240, y: 130, text: '4와 3을 모으면?', size: 22 },
    ] },
  },
  stages: [
    {
      id: 'intro', title: '도입', minutes: 6,
      teacher: '"토끼 두 마리가 사과를 바구니에 나눠 담았어요. 빨간 사과는 몇 개? 초록 사과는 몇 개? 모두 몇 개?" 그림의 사과(4개, 3개)를 짚으며 센다. 시연 단추로 빨간 사과 4개와 초록 사과 3개가 한 판에 모이는 모습을 보여 준다. "두 수를 하나로 합치는 것을 모으기, 하나를 둘로 나누는 것을 가르기라고 해요."',
      student: '빨간 사과와 초록 사과를 모으면 모두 몇 개일까요?',
      demo: { tool: 'tenframe', options: { twoColor: true, item: 'apple', showWord: true }, sequence: [{ parts: [4, 0] }, { parts: [4, 3] }] },
    },
    {
      id: 'main', title: '전개', minutes: 26,
      activities: [
        {
          id: 'a1', title: '활동 1. 두 수를 모으기', minutes: 9, tool: 'tenframe',
          task: '빨간 사과와 초록 사과를 수만큼 놓고, 모두 몇 개인지 알아봅시다.',
          teacher: '"빨간 사과를 먼저 놓고, 초록 사과는 그 뒤에 이어서 놓아요." 처음부터 다시 세지 않고 앞 수에서 이어 세기(4… 5, 6, 7)를 칭찬한다. 기본 단계는 모두 몇 개인지 수 카드가 가려져 있어 놓은 뒤 수를 고른다.',
          levels: {
            // 쉬움: 칸 번호·수 카드가 보임 / 기본: 수 카드를 가리고 모두 몇 개인지 고름 / 도전: 흩어진 칸에 들어가 5칸 묶음으로 셀 수 없음
            easy: { twoColor: true, item: 'apple', showWord: true, cellNumbers: true },
            base: { twoColor: true, item: 'apple', showCount: false, askNumber: true, showGoal: true },
            challenge: { twoColor: true, item: 'apple', showCount: false, askNumber: true, scatter: true },
          },
          items: [
            { prompt: '빨간 사과 3개, 초록 사과 2개. 모으면 모두 몇 개일까요?', target: { parts: [3, 2], ask: 'total' }, difficulty: 0.05 },
            { prompt: '빨간 사과 4개, 초록 사과 3개. 모으면 모두 몇 개일까요?', target: { parts: [4, 3], ask: 'total' }, difficulty: 0.15,
              predict: { q: '4와 3을 모으면 4보다 많아질까요, 적어질까요?', options: ['4보다 많아져요', '4보다 적어져요', '4 그대로예요'], answer: 0 },
              conclude: '4와 3을 모으면 7이에요. 4에서 5, 6, 7 하고 이어 세면 빨라요.' },
            { prompt: '빨간 사과 2개, 초록 사과 6개. 모으면 모두 몇 개일까요?', target: { parts: [2, 6], ask: 'total' }, difficulty: 0.2 },
            { prompt: '더 해 보기: 빨간 사과 5개, 초록 사과 4개. 모으면 모두 몇 개일까요?', target: { parts: [5, 4], ask: 'total' }, extra: true, difficulty: 0.25 },
          ],
        },
        {
          id: 'a2', title: '활동 2. 하나의 수를 가르기', minutes: 9, tool: 'tenframe',
          task: '모두의 수만큼 놓아요. 빨간 사과 수를 맞추고, 초록 사과는 몇 개인지 세어요.',
          teacher: '"사과 7개를 빨간 사과 3개와 초록 사과 몇 개로 가를 수 있을까요?" 모두 7개를 먼저 채우고, 빨간 사과 수를 맞춘 뒤 초록 사과만 세게 한다. 7을 다 놓지 않고 3과 4를 따로 생각하는 학생에게 "모두 몇 개인지 먼저 맞춰요"라고 말한다.',
          levels: {
            easy: { twoColor: true, item: 'apple', showWord: true, cellNumbers: true, showGoal: true },
            base: { twoColor: true, item: 'apple', showCount: false, askNumber: true, showGoal: true },
            challenge: { twoColor: true, item: 'chip', showCount: false, askNumber: true, scatter: true },
          },
          items: [
            { prompt: '6을 2와 몇으로 갈라요. 빨간 사과는 2개, 초록 사과는 몇 개?', target: { total: 6, parts: [2, null], ask: 'b' }, difficulty: 0.2 },
            { prompt: '7을 3과 몇으로 갈라요. 빨간 사과는 3개, 초록 사과는 몇 개?', target: { total: 7, parts: [3, null], ask: 'b' }, difficulty: 0.25,
              predict: { q: '7을 3과 몇으로 가를까요? 먼저 생각해 봐요.', options: ['3', '4', '7'], answer: 1 },
              conclude: '7은 3과 4로 가를 수 있어요. 3과 4를 모으면 다시 7이에요.' },
            { prompt: '8을 5와 몇으로 갈라요. 빨간 사과는 5개, 초록 사과는 몇 개?', target: { total: 8, parts: [5, null], ask: 'b' }, difficulty: 0.25 },
            { prompt: '더 해 보기: 9를 4와 몇으로 갈라요. 빨간 사과는 4개, 초록 사과는 몇 개?', target: { total: 9, parts: [4, null], ask: 'b' }, extra: true, difficulty: 0.3 },
          ],
        },
        {
          id: 'a3', title: '활동 3. 여러 가지 방법으로 가르기', minutes: 8, tool: 'tenframe', pair: true,
          task: '같은 수를 여러 가지 방법으로 갈라 봅시다. 짝과 방법을 견주어 보아요.',
          teacher: '정답이 하나가 아닌 문항이다. 짝과 서로 다른 방법을 찾았는지 견주게 하고, "빨간 사과가 하나 늘면 초록 사과는?"이라고 물어 규칙(한쪽이 1 늘면 다른 쪽이 1 준다)을 말하게 한다. 한 가지 색으로만 채우면 교구가 둘로 갈라야 한다고 알려 준다.',
          levels: {
            easy: { twoColor: true, item: 'apple', showWord: true, cellNumbers: true },
            base: { twoColor: true, item: 'apple', showWord: true },
            challenge: { twoColor: true, item: 'chip', showCount: false, scatter: true },
          },
          items: [
            { prompt: '사과 5개를 두 가지 색으로 갈라 보세요. 어떻게 가를지는 스스로 정해요.', target: { total: 5, parts: [null, null] }, difficulty: 0.1 },
            { prompt: '사과 7개를 가르는데, 3과 4는 빼고 다른 방법으로 갈라 보세요.', target: { total: 7, parts: [null, null], avoid: [[3, 4], [4, 3]] }, difficulty: 0.25,
              conclude: '7은 1과 6, 2와 5, 3과 4, 4와 3, 5와 2, 6과 1로 가를 수 있어요. 한쪽이 1 늘면 다른 쪽은 1 줄어요.' },
            { prompt: '더 해 보기: 사과 8개를 똑같은 두 수로 갈라 보세요.', target: { total: 8, parts: [4, 4] }, extra: true, difficulty: 0.25 },
          ],
        },
      ],
    },
    {
      id: 'wrapup', title: '정리', minutes: 8,
      teacher: '"7을 가르는 방법을 몇 가지 찾았나요?" 짝이 찾은 방법을 칠판에 모아 1과 6부터 차례로 늘어놓고 규칙을 함께 말한다. 출구 질문에서 가르기(2번)를 틀린 학생은 다음 시간에 사과를 직접 나눠 보게 한다.',
      exitTicket: [
        { type: 'choice', prompt: '5와 2를 모으면 몇이 될까요?', options: ['6', '7', '8'], answer: 1, difficulty: 0.15, explain: '5에서 6, 7 하고 이어 세면 7이에요.' },
        { type: 'choice', prompt: '9는 6과 몇으로 가를 수 있을까요?', options: ['2', '3', '4'], answer: 1, difficulty: 0.25, explain: '6과 3을 모으면 9예요. 그래서 9는 6과 3으로 가를 수 있어요.' },
        { type: 'tool', tool: 'tenframe', options: { twoColor: true, item: 'chip', showCount: false, askNumber: true, target: { total: 8, parts: [2, null], ask: 'b' } }, prompt: '8을 2와 몇으로 갈라요. 하늘색 칩은 2개, 주황색 칩은 몇 개?', target: { total: 8, parts: [2, null], ask: 'b' }, difficulty: 0.25 },
        { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
      ],
    },
  ],
  worksheet: {
    title: '모으기와 가르기',
    items: [
      { type: 'figure', prompt: '빨간 사과(무늬 없음)와 초록 사과(줄무늬)를 모으면 모두 몇 개인가요? 쓰세요.', tool: 'tenframe', options: { twoColor: true, item: 'apple' }, figures: [
        { state: { parts: [3, 1] }, caption: BLANK }, { state: { parts: [2, 5] }, caption: BLANK }, { state: { parts: [6, 3] }, caption: BLANK }], answer: '4, 7, 9' },
      { type: 'blank', prompt: '두 수를 모으면 몇이 될까요?', text: '4와 4 → ___     1과 7 → ___     5와 3 → ___', answer: '8, 8, 8' },
      { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '6은 1과 ___     6은 3과 ___     6은 5와 ___', answer: '5, 3, 1' },
      { type: 'short', prompt: '7을 두 수로 가르는 방법을 두 가지 쓰세요.', answer: '예: 1과 6, 2와 5, 3과 4 가운데 두 가지' },
    ],
    easy: {
      note: '모으기는 두 수를 하나로 합쳐요. 가르기는 하나의 수를 둘로 나눠요.',
      // 쉬운 판: 그림을 보고 세는 문항부터, 5까지의 수로
      items: [
        { type: 'figure', prompt: '무늬 없는 사과와 줄무늬 사과를 모으면 모두 몇 개인가요? 쓰세요.', tool: 'tenframe', options: { twoColor: true, item: 'apple' }, figures: [
          { state: { parts: [2, 1] }, caption: BLANK }, { state: { parts: [3, 2] }, caption: BLANK }], answer: '3, 5' },
        { type: 'blank', prompt: '두 수를 모으면 몇이 될까요?', text: '2와 2 → ___     4와 1 → ___', answer: '4, 5' },
        { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '5는 2와 ___     5는 4와 ___', answer: '3, 1' },
      ],
    },
  },
  differentiation: {
    easy: '칸 번호와 수 카드가 보여서 놓으면서 바로 셀 수 있어요. 가르기에서는 바구니 위에 목표 수가 보여요.',
    base: '수 카드가 가려져 있어요. 다 놓은 뒤 모두 몇 개인지(모으기)나 초록 사과가 몇 개인지(가르기) 수를 직접 골라요.',
    challenge: '사과·칩이 흩어진 칸에 들어가서 5칸 묶음으로 셀 수 없어요. 9까지의 더 해 보기와 똑같은 두 수로 가르기가 나와요.',
  },
  teacherNotes: '자주 보이는 어려움: ① 모으기에서 처음부터 다시 센다 → 앞 수에서 이어 세기(4… 5, 6, 7)를 보여 주고 칭찬한다. ② 가르기에서 모두의 수를 맞추지 않고 두 수를 따로 놓는다 → 모두 몇 개를 먼저 채운 뒤 한쪽 색을 맞추게 한다. 교구가 모두의 수부터 알려 준다. ③ 한 가지 색으로만 채우고 갈랐다고 생각한다 → 둘로 갈라야 두 가지 색이 모두 있다는 것을 짚는다. ④ 3과 4, 4와 3을 같은 방법으로 볼지 헷갈린다 → 이 차시는 색이 바뀌면 다른 방법으로 본다(빨간 3·초록 4 / 빨간 4·초록 3). ⑤ 가르기 답으로 모두의 수를 고른다(7을 3과 7로) → 남은 색만 하나씩 짚으며 세게 한다. 기본 단계의 수 고르기 보기에 모두의 수가 들어 있어 이 오개념이 기록에 남고, 교구가 "모두의 수예요. 초록 사과만 세어요"라고 짚는다. 덧셈식·뺄셈식은 다음 차시에서 모으기·가르기와 이어서 다룬다.',
});
})();
