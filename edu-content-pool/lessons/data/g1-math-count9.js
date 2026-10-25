/* 1학년 1학기 1. 9까지의 수 — 0~9를 세어 나타내고 1만큼 더 큰 수·1만큼 더 작은 수 알아보기 */
(function () {
const BLANK = '(\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0)';
PaperLessons.register({
  id: 'g1-math-count9',
  schema: 'edu-lesson.v1',
  catalog: { unit: 'g1-수학-1학기-1', lesson: 5 },
  grade: 1, subject: '수학', unitTitle: '1. 9까지의 수',
  title: '수만큼 놓고 1만큼 더 큰 수, 1만큼 더 작은 수 알아보기',
  objective: '0부터 9까지의 수를 세어 나타내고, 1만큼 더 큰 수와 1만큼 더 작은 수를 말할 수 있다.',
  standards: ['[2수01-01]', '[2수01-03]'],
  minutes: 40,
  formats: ['chromebook', 'projector', 'print'],
  illustration: {
    prompt: 'Layered paper-cut illustration of a cozy apple orchard on rolling hills where a little rabbit counts red apples into a wooden ten-frame crate, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.',
    scene: { viewBox: [480, 270], layers: [
      { motif: 'sun', x: 410, y: 58, s: 0.85 }, { motif: 'cloud', x: 110, y: 52 }, { motif: 'cloud', x: 290, y: 38, s: 0.7 },
      { motif: 'hills', y: 196, colors: ['mint', 'buttercup', 'peach'] },
      { motif: 'tree', x: 92, y: 210, s: 1.25 }, { motif: 'tree', x: 388, y: 214, s: 1.1, color: 'mint' },
      // 사과: 왼쪽 나무 3개 + 오른쪽 나무 4개 = 7개(시연 3 → 7과 같은 수)
      { motif: 'apple', x: 74, y: 178, s: 0.42 }, { motif: 'apple', x: 104, y: 166, s: 0.42 }, { motif: 'apple', x: 98, y: 196, s: 0.42 },
      { motif: 'apple', x: 372, y: 182, s: 0.4 }, { motif: 'apple', x: 396, y: 170, s: 0.4 }, { motif: 'apple', x: 404, y: 198, s: 0.4 }, { motif: 'apple', x: 380, y: 204, s: 0.4 },
      { motif: 'flower', x: 180, y: 236 }, { motif: 'flower', x: 300, y: 240, color: 'lavender' }, { motif: 'bird', x: 220, y: 80 },
      { motif: 'text', x: 240, y: 132, text: '사과가 몇 개일까요?', size: 22 },
    ] },
  },
  stages: [
    {
      id: 'intro', title: '도입', minutes: 6,
      teacher: '"사과 나무에 사과가 열렸어요. 이 나무에는 몇 개? 저 나무에는 몇 개?" 그림의 사과(3개, 4개)를 손으로 짚으며 함께 센다. 시연 단추를 눌러 사과가 하나씩 칸에 들어가는 모습(3개 → 7개)을 보여 주고, 다 같이 소리 내어 센다. "마지막에 센 수가 모두의 수예요."',
      student: '나무에 사과가 몇 개 있나요? 같이 세어 봐요.',
      demo: { tool: 'tenframe', options: { item: 'apple', showWord: true }, sequence: [{ count: 3 }, { count: 7 }] },
    },
    {
      id: 'main', title: '전개', minutes: 26,
      activities: [
        {
          id: 'a1', title: '활동 1. 수만큼 사과 놓기', minutes: 9, tool: 'tenframe',
          task: '수만큼 사과를 칸에 놓아 봅시다. 윗줄부터 차례로 채워요.',
          teacher: '"사과를 놓을 때마다 소리 내어 세어 봐요." 윗줄 5칸이 다 차면 5라는 것을 짚어 준다.',
          // 쉬움: 칸 번호·수 카드·목표('일곱 · 7')가 보임 / 기본: 수 카드가 가려져 스스로 셈 / 도전: 사과 5개가 흩어진 채로 시작해 더하거나 빼서 맞춤
          levels: { easy: { item: 'apple', showWord: true, cellNumbers: true, showGoal: true }, base: { item: 'apple', showCount: false }, challenge: { item: 'apple', showCount: false, scatter: true, start: { count: 5 } } },
          items: [
            { prompt: '사과 4개를 놓아 보세요.', target: { count: 4 }, difficulty: 0 },
            { prompt: '사과 일곱 개를 놓아 보세요.', target: { count: 7 }, difficulty: 0.12 },
            { prompt: '9만큼 놓아 보세요.', target: { count: 9 }, difficulty: 0.08 },
          ],
        },
        {
          id: 'a2', title: '활동 2. 1만큼 더 큰 수, 1만큼 더 작은 수', minutes: 10, tool: 'tenframe',
          task: '하나를 더 놓거나 하나를 빼 봅시다. 수가 어떻게 바뀌나요?',
          teacher: '"하나 더 놓으면 1만큼 더 큰 수, 하나 빼면 1만큼 더 작은 수예요." 1보다 1만큼 더 작은 수에서 0(영)을 꼭 다룬다.',
          // 쉬움: 수 카드와 '5에 하나 더'·'8에서 하나 빼기' 표시 / 기본: 수 카드를 가리고 놓은 뒤 몇이 되었는지 수를 고름 / 도전: 칩이 흩어져 있어 직접 세고 수를 고름
          levels: { easy: { item: 'chip', color: 'sky', showWord: true, cellNumbers: true, showGoal: true }, base: { item: 'chip', color: 'sky', showCount: false, askNumber: true }, challenge: { item: 'chip', color: 'sky', showCount: false, askNumber: true, scatter: true } },
          items: [
            { prompt: '5보다 1만큼 더 큰 수를 만들어 보세요.', state: { count: 5 }, target: { count: 5, more: 1 }, difficulty: 0.05 },
            { prompt: '8보다 1만큼 더 작은 수를 만들어 보세요.', state: { count: 8 }, target: { count: 8, less: 1 }, difficulty: 0.15 },
            { prompt: '2보다 1만큼 더 큰 수를 만들어 보세요.', state: { count: 2 }, target: { count: 2, more: 1 }, difficulty: 0.05 },
            { prompt: '1보다 1만큼 더 작은 수를 만들어 보세요. 몇이 될까요?', state: { count: 1 }, target: { count: 1, less: 1 }, difficulty: 0.22 },
          ],
        },
        {
          id: 'a3', title: '활동 3. 짝과 수 놀이', minutes: 7, tool: 'tenframe', pair: true,
          task: '짝이 말한 수만큼 놓아 봅시다. 그리고 1만큼 더 큰 수도 말해 봐요.',
          teacher: '짝끼리 번갈아 0부터 9까지의 수를 말하게 한다. "8이요!" → 놓고 "1만큼 더 큰 수는 9예요."',
          levels: { easy: { item: 'apple', showWord: true, cellNumbers: true }, base: { item: 'apple', showWord: true }, challenge: { item: 'apple', showCount: false, scatter: true } },
          items: [{ prompt: '짝이 말한 수만큼 놓고 "다 했어요"를 누르세요.', free: true, difficulty: 0 }],
        },
      ],
    },
    {
      id: 'wrapup', title: '정리', minutes: 8,
      teacher: '"6보다 1만큼 더 큰 수는? 1만큼 더 작은 수는?" 손가락으로 함께 확인한다. 출구 질문 결과에서 0을 고르지 못한 학생을 따로 살핀다.',
      exitTicket: [
        { type: 'choice', prompt: '6보다 1만큼 더 큰 수는 무엇인가요?', options: ['5', '7', '8'], answer: 1, difficulty: 0.08, explain: '6에 하나를 더 놓으면 7이에요.' },
        { type: 'choice', prompt: '하나도 없을 때 쓰는 수는 무엇인가요?', options: ['0', '1', '9'], answer: 0, difficulty: 0.12, explain: '하나도 없으면 0(영)이라고 써요.' },
        { type: 'tool', tool: 'tenframe', options: { item: 'chip', color: 'mint', showCount: false, start: { count: 5 } }, prompt: '5보다 1만큼 더 작은 수를 만들어 보세요.', target: { count: 5, less: 1 }, difficulty: 0.12 },
        { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
      ],
    },
  ],
  worksheet: {
    title: '수만큼 놓고 세어 보기',
    items: [
      { type: 'figure', prompt: '사과는 몇 개인가요? 세어서 수를 쓰세요.', tool: 'tenframe', options: { item: 'apple' }, figures: [
        { state: { count: 3 }, caption: BLANK }, { state: { count: 6 }, caption: BLANK }, { state: { count: 8 }, caption: BLANK }], answer: '3, 6, 8' },
      { type: 'figure', prompt: '수만큼 칸에 ○를 그리세요.', tool: 'tenframe', figures: [
        { state: { count: 0 }, caption: '5' }, { state: { count: 0 }, caption: '9' }, { state: { count: 0 }, caption: '2' }], answer: '○를 5개, 9개, 2개 그려요(윗줄부터).' },
      { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '4보다 1만큼 더 큰 수: ___', answer: '5' },
      { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '4보다 1만큼 더 작은 수: ___', answer: '3' },
      { type: 'choice', prompt: '하나도 없을 때 쓰는 수에 ○ 하세요.', options: ['0', '1', '8'], answer: '0' },
    ],
    easy: {
      note: '윗줄 다섯 칸이 다 차면 5예요. 하나씩 짚으며 세어요.',
      // 쉬운 판: 수 범위를 5까지로 줄이고, 쓰기보다 세어서 ○ 하기를 먼저 한다
      items: [
        { type: 'figure', prompt: '사과가 4개인 것에 ○ 하세요.', tool: 'tenframe', options: { item: 'apple' }, figures: [
          { state: { count: 3 }, caption: '(\u00a0\u00a0\u00a0)' }, { state: { count: 4 }, caption: '(\u00a0\u00a0\u00a0)' }, { state: { count: 5 }, caption: '(\u00a0\u00a0\u00a0)' }], answer: '가운데(4개)' },
        { type: 'figure', prompt: '사과는 몇 개인가요? 수를 쓰세요.', tool: 'tenframe', options: { item: 'apple' }, figures: [
          { state: { count: 2 }, caption: BLANK }, { state: { count: 5 }, caption: BLANK }, { state: { count: 1 }, caption: BLANK }], answer: '2, 5, 1' },
        { type: 'figure', prompt: '수만큼 칸에 ○를 그리세요.', tool: 'tenframe', figures: [
          { state: { count: 0 }, caption: '3' }, { state: { count: 0 }, caption: '5' }], answer: '○를 3개, 5개 그려요.' },
        { type: 'blank', prompt: '하나 더 놓으면 몇이 될까요?', text: '3보다 1만큼 더 큰 수: ___', answer: '4' },
        { type: 'choice', prompt: '하나도 없을 때 쓰는 수에 ○ 하세요.', options: ['0', '1', '5'], answer: '0' },
      ],
    },
  },
  differentiation: {
    easy: '칸에 1~10 순서 번호와 수 카드("일곱 · 칠")가 보이고, 바구니 위에 "일곱 · 7", "5에 하나 더" 같은 목표가 나와요.',
    base: '수 카드가 가려져 스스로 세어요. 활동 2에서는 하나를 더 놓거나 뺀 뒤 몇이 되었는지 수를 직접 골라요.',
    challenge: '사과·칩이 칸 여기저기에 흩어져 들어가서 "윗줄 5칸" 묶음으로 셀 수 없어요. 활동 1은 흩어진 사과 5개에서 시작해 더하거나 빼서 맞춰요.',
  },
  teacherNotes: '자주 보이는 어려움: ① 같은 사과를 두 번 세거나 빠뜨린다 → 하나씩 칸에 옮기며 세게 한다(일대일 대응). ② 다 세고 나서 "몇 개?"에 처음부터 다시 센다 → 마지막에 센 수가 모두의 수임을 짚는다. ③ 0을 "없으니까 수가 아니다"라고 생각한다 → 1보다 1만큼 더 작은 수로 0을 만나게 한다. ④ "1만큼 더 큰 수"와 "더 작은 수"를 헷갈린다 → 하나 더 놓기/빼기 동작과 수의 순서(앞·뒤)를 함께 말한다. ⑤ 하나·둘(세기)과 일·이(읽기)를 섞어 쓴다 → 두 가지 읽기를 모두 인정한다.',
});
})();
