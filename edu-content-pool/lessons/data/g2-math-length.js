/* 2학년 1학기 수학 4. 길이 재기 — 자의 눈금 0에 맞추어 길이를 재고 몇 cm로 나타내기(부러진 자·'약 몇 cm' 포함) */
(function () {
const CM = '(        )cm';
PaperLessons.register({
  id: 'g2-math-length',
  schema: 'edu-lesson.v1',
  catalog: { unit: 'g2-수학-1학기-4', lesson: 5 },
  grade: 2, subject: '수학', unitTitle: '4. 길이 재기',
  title: '자로 길이를 재어 몇 cm인지 나타내기',
  objective: '자의 눈금 0을 물건의 한쪽 끝에 맞추어 길이를 재고, 몇 cm로 나타낼 수 있다.',
  standards: ['[2수03-10]', '[2수03-12]'],
  minutes: 40,
  formats: ['chromebook', 'projector', 'print'],
  illustration: {
    prompt: "Layered paper-cut illustration of a little bear and a rabbit at a sunny classroom table measuring a yellow pencil with a long paper ruler that has plain tick marks and no numbers or letters, the left end of the pencil lined up exactly with the first tick of the ruler, crayons, an eraser and a ribbon waiting in a row nearby, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.",
    image: 'img/g2-math-length.webp', size: [1200, 800],
    scene: { viewBox: [480, 270], layers: [
      { motif: 'sun', x: 70, y: 56, s: 0.75 }, { motif: 'cloud', x: 220, y: 46, s: 0.8 }, { motif: 'cloud', x: 400, y: 60 },
      { motif: 'hills', y: 206, colors: ['buttercup', 'mint', 'peach'] },
      { motif: 'house', x: 96, y: 222, s: 0.9 }, { motif: 'tree', x: 400, y: 220, color: 'mint' },
      { motif: 'flower', x: 300, y: 242, color: 'lavender' }, { motif: 'bird', x: 300, y: 84 },
      { motif: 'text', x: 240, y: 146, text: '0에 맞추고 몇 cm인지 재어 봐요', size: 21 },
    ] },
  },
  stages: [
    {
      id: 'intro', title: '도입', minutes: 6,
      teacher: '"지난 시간에 1cm를 배웠어요. 오늘은 자로 길이를 재어요." 연필 두 자루를 보여 주며 묻는다. "한 친구는 1에 맞추고 8이라고 했고, 다른 친구는 0에 맞추고 7이라고 했어요. 누구 말이 맞을까요?" 바로 답하지 않고 시연 단추로 연필이 0으로 미끄러져 가며 1cm 칸이 하나씩 세어지는 모습을 보여 준다.',
      student: '연필의 길이를 자로 재려면 어디에 맞추어야 할까요? 같이 보아요.',
      demo: { tool: 'ruler', options: { item: 'pencil', len: 7, start: 1, countAid: true, guides: true }, sequence: [{ length: 7 }] },
    },
    {
      id: 'main', title: '전개', minutes: 26,
      activities: [
        {
          id: 'a1', title: '활동 1. 눈금 0에 맞추어 재기', minutes: 9, tool: 'ruler',
          task: '물건의 왼쪽 끝을 자의 눈금 0에 맞추고, 몇 cm인지 골라 봅시다.',
          teacher: '"왜 0에 맞출까요? 1에 맞추면 어떻게 될까요?" 예측을 고른 뒤 직접 1에 둔 채 읽어 보게 하고, 0에 옮겨 다시 읽게 한다. 끝 눈금을 손가락으로 짚어 읽게 한다.',
          // 쉬움: 양 끝 점선 + 1cm 칸마다 점(번호는 맞힌 뒤) / 기본: 도움 없음 / 도전: 보기가 하나 더 늘어남
          levels: { easy: { guides: true, countAid: true }, base: {}, challenge: { moreChoices: true } },
          items: [
            { prompt: '크레파스의 길이를 재어 보세요. 왼쪽 끝을 0에 맞추고 몇 cm인지 골라요.', reveal: 'after-check', difficulty: 0.08,
              predict: { q: '자를 대기 전에 눈으로 어림해 보세요. 크레파스는 몇 cm쯤일까요?', options: ['3cm쯤', '6cm쯤', '12cm쯤'] },
              toolOptions: { item: 'crayon', len: 6 }, state: { start: 3 }, target: { length: 6, zero: true },
              conclude: '0에 맞추면 끝 눈금의 수가 바로 길이예요.' },
            { prompt: '지우개가 1에 맞추어져 있어요. 0으로 옮겨 다시 재어 보세요.', reveal: 'after-check', difficulty: 0.15,
              predict: { q: '지금처럼 1에 맞춘 채 끝 눈금을 읽으면 몇 cm라고 말하게 될까요?', options: ['4cm', '5cm', '3cm'], answer: 1 },
              toolOptions: { item: 'eraser', len: 4 }, state: { start: 1 }, target: { length: 4, zero: true },
              conclude: '1에 맞추면 끝 눈금은 실제 길이보다 1 커요. 그래서 0에 맞추어요.' },
            { prompt: '연필의 길이를 재어 보세요.', reveal: 'after-check', difficulty: 0.12,
              toolOptions: { item: 'pencil', len: 9 }, state: { start: 5 }, target: { length: 9, zero: true } },
            { prompt: '더 해 보기: 긴 리본을 재어 보세요. 끝 눈금이 어디에 닿나요?', extra: true, reveal: 'after-check', difficulty: 0.12,
              toolOptions: { item: 'ribbon', len: 11 }, state: { start: 2 }, target: { length: 11, zero: true } },
          ],
        },
        {
          id: 'a2', title: '활동 2. 부러진 자로 재기', minutes: 10, tool: 'ruler',
          task: '자가 부러져서 0이 없어요. 1cm가 몇 번 들어가는지 세어 길이를 재어 봅시다.',
          teacher: '"0이 없으면 잴 수 없을까요?" 3에 맞추고 끝 눈금(8)을 그대로 읽는 학생에게 "3에서 8까지 1cm 칸이 몇 개예요?"라고 되묻는다. 칸을 손가락으로 하나씩 짚으며 세게 한다. 활동 끝에 "길이는 1cm가 몇 번인지"라고 함께 말한다.',
          levels: { easy: { brokenFrom: 3, guides: true, countAid: true }, base: { brokenFrom: 3 }, challenge: { brokenFrom: 4, moreChoices: true } },
          items: [
            { prompt: '크레파스의 왼쪽 끝을 자의 첫 눈금에 맞추고, 몇 cm인지 골라요.', reveal: 'after-check', difficulty: 0.22,
              predict: { q: '부러진 자의 4에 연필을 맞추었더니 끝이 10에 닿았어요. 연필은 몇 cm일까요?', options: ['10cm', '6cm', '14cm'], answer: 1 },
              toolOptions: { item: 'crayon', len: 5 }, state: { start: 7 }, target: { length: 5 },
              conclude: '첫 눈금이 0이 아니면 끝 숫자를 읽지 말고 1cm 칸을 세어요.' },
            { prompt: '지우개를 자 위 아무 곳에 놓고, 1cm가 몇 번인지 세어 길이를 골라요.', reveal: 'after-check', difficulty: 0.15,
              toolOptions: { item: 'eraser', len: 3 }, state: { start: 10 }, target: { length: 3 },
              conclude: '어디에 놓아도 1cm 칸의 수는 같아요. 그것이 길이예요.' },
            { prompt: '연필이 자 위에 놓여 있어요. 연필은 몇 cm인가요?', difficulty: 0.22,
              toolOptions: { item: 'pencil', len: 7, readOnly: true, start: 5, brokenFrom: 3 }, state: { start: 5 }, target: { length: 7 } },
            { prompt: '더 해 보기: 막대를 두 곳에 놓고 재어 보세요. 길이가 같게 나오나요? 한 곳에서 잰 길이를 골라요.', extra: true, reveal: 'after-check', difficulty: 0.15,
              toolOptions: { item: 'stick', len: 8 }, state: { start: 6 }, target: { length: 8 } },
          ],
        },
        {
          id: 'a3', title: '활동 3. 약 몇 cm', minutes: 7, tool: 'ruler',
          task: '끝이 눈금과 눈금 사이에 있으면, 더 가까운 눈금의 수를 읽고 앞에 "약"을 붙여요.',
          teacher: '"리본 끝이 5와 6 사이에 있어요. 어느 쪽에 더 가까워요?" 짧은 0.5cm 눈금을 기준으로 가까운 쪽을 정하게 한다. 짝 활동에서는 한 사람이 띠를 놓고, 다른 사람이 "약 몇 cm"로 말한다.',
          levels: { easy: { approx: true, guides: true, countAid: true }, base: { approx: true }, challenge: { approx: true, moreChoices: true } },
          items: [
            { prompt: '리본을 0에 맞추고, 약 몇 cm인지 골라요.', reveal: 'after-check', difficulty: 0.2,
              predict: { q: '리본 끝이 두 눈금 사이에 있으면 어떻게 말할까요?', options: ['더 가까운 눈금의 수를 읽어요', '항상 작은 수를 읽어요', '잴 수 없어요'] },
              toolOptions: { item: 'ribbon', len: 5.8 }, state: { start: 2 }, target: { length: 6, zero: true, approx: true },
              conclude: '끝이 눈금 사이에 있으면 가까운 눈금을 읽고 "약"을 붙여요.' },
            { prompt: '막대를 0에 맞추고, 약 몇 cm인지 골라요.', reveal: 'after-check', difficulty: 0.18,
              toolOptions: { item: 'stick', len: 8.3 }, state: { start: 4 }, target: { length: 8, zero: true, approx: true } },
            { prompt: '짝이 고른 물건을 자 위에 놓고 "약 몇 cm"로 말해 주세요. 다 했으면 "다 했어요"를 누르세요.', free: true, difficulty: 0,
              toolOptions: { item: 'crayon', len: 4.7 }, state: { start: 6 } },
          ],
        },
      ],
    },
    {
      id: 'wrapup', title: '정리', minutes: 8,
      teacher: '"1에 맞추고 끝이 8이면 몇 cm예요?" 출구 질문 1번을 함께 짚는다. 결과에서 끝 눈금을 그대로 고른 학생(1번 8cm, 2번 13cm)을 다음 시간에 먼저 살핀다.',
      exitTicket: [
        { type: 'choice', prompt: '연필의 왼쪽 끝을 자의 1에 맞추었더니 오른쪽 끝이 8에 닿았어요. 연필은 몇 cm인가요?', options: ['8cm', '7cm', '9cm'], answer: 1, difficulty: 0.2, explain: '1에서 8까지 1cm 칸이 7개예요. 1에 맞추면 끝 눈금은 길이보다 1 커요.' },
        { type: 'tool', tool: 'ruler', options: { item: 'ribbon', len: 10, readOnly: true, start: 3, choices: [7, 10, 11, 13] }, state: { start: 3 }, prompt: '자 위에 놓인 리본은 몇 cm인가요? 알맞은 길이를 고르세요.', target: { length: 10 }, difficulty: 0.22, explain: '3에서 13까지 1cm 칸이 10개라서 10cm예요.' },
        { type: 'tool', tool: 'ruler', options: { item: 'stick', len: 12 }, state: { start: 1 }, prompt: '막대의 왼쪽 끝을 0에 맞추고 몇 cm인지 골라요.', target: { length: 12, zero: true }, difficulty: 0.15 },
        { type: 'choice', prompt: '0에 맞추어 재었더니 크레파스 끝이 4와 5 사이에서 5에 더 가까워요. 어떻게 말할까요?', options: ['약 4cm', '약 5cm', '5cm'], answer: 1, difficulty: 0.15, explain: '더 가까운 눈금 5를 읽고 "약"을 붙여 약 5cm라고 해요.' },
        { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
      ],
    },
  ],
  worksheet: {
    title: '자로 길이 재기',
    items: [
      { type: 'figure', wide: true, prompt: '물건의 길이는 몇 cm인가요? 쓰세요.', tool: 'ruler', figures: [
        { options: { item: 'pencil', len: 6 }, state: { start: 0 }, caption: `연필: ${CM}` },
        { options: { item: 'eraser', len: 4, brokenFrom: 3 }, state: { start: 5 }, caption: `지우개(부러진 자): ${CM}` },
        { options: { item: 'ribbon', len: 7.8 }, state: { start: 0 }, caption: `리본: 약 ${CM}` }], answer: '6cm, 4cm, 약 8cm' },
      { type: 'choice', prompt: '길이를 바르게 잰 친구에 ○ 하세요.', options: ['물건 왼쪽 끝을 1에 맞추고 끝 눈금을 읽었어요.', '물건 왼쪽 끝을 0에 맞추고 끝 눈금을 읽었어요.'], answer: '둘째(0에 맞춤)' },
      { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '자의 2에 맞추었더니 끝이 9에 닿았어요. 길이는 ___cm예요.', answer: '7' },
      { type: 'draw', prompt: '자를 대고 길이가 5cm인 선을 그어 보세요. 어디에서 시작했는지 ○ 하세요.', answer: '0(또는 어느 눈금)에서 시작해 1cm 칸 5개만큼 그은 선' },
    ],
    easy: {
      note: '물건의 왼쪽 끝을 0에 맞추면 끝 눈금의 수가 길이예요. 0이 없으면 1cm 칸을 하나씩 세어요.',
      items: [
        { type: 'figure', wide: true, prompt: '0에 맞추어 재었어요. 몇 cm인가요?', tool: 'ruler', figures: [
          { options: { item: 'crayon', len: 5 }, state: { start: 0 }, caption: `크레파스: ${CM}` },
          { options: { item: 'pencil', len: 8 }, state: { start: 0 }, caption: `연필: ${CM}` }], answer: '5cm, 8cm' },
        { type: 'blank', prompt: '1cm 칸을 세어 쓰세요.', text: '3에서 6까지 1cm 칸은 ___개, 길이는 ___cm예요.', answer: '3, 3' },
        { type: 'draw', prompt: '자를 대고 0에서 시작해 길이가 4cm인 선을 그어 보세요.', answer: '0에서 4까지 그은 선' },
      ],
    },
  },
  differentiation: {
    easy: '띠 양 끝에서 눈금까지 점선이 내려오고, 띠 아래 1cm 칸마다 점이 보여 하나씩 짚으며 셀 수 있어요. 점의 번호와 길이는 맞힌 뒤에만 보여요.',
    base: '도움 없이 끝 눈금을 직접 읽고 길이를 골라요. 길이 표시는 확인을 누른 뒤에만 보여요.',
    challenge: '부러진 자가 4부터 시작하고, 고를 수 있는 길이가 하나 더 늘어나요.',
  },
  teacherNotes: '자주 보이는 어려움: ① 자의 끝(또는 1)에 맞추고 끝 눈금을 읽는다 → 1에 맞춘 채 읽어 보고 0으로 옮겨 다시 읽어 차이(1)를 직접 보게 한다. 교구는 0에 맞추지 않은 확인에 까닭을 말해 준다. ② 시작이 0이 아닌 자에서 끝 숫자를 길이로 읽는다 → "길이는 1cm가 몇 번인가"로 되돌아가 칸을 센다(활동 2). ③ 눈금 선을 세어 하나 더 많게 말한다 → 선이 아니라 선과 선 사이의 칸을 센다. 교구는 이 경우를 따로 짚는다. ④ 끝이 눈금 사이에 있을 때 무조건 작은 수를 읽거나 "약"을 빼먹는다 → 0.5cm 짧은 눈금을 기준으로 가까운 쪽을 정한다(활동 3). ⑤ 물건을 자와 비스듬히 놓는다 → 화면 교구는 띠가 자와 나란히 움직이지만, 실물 재기에서는 자와 나란히 놓는 것을 꼭 확인한다.',
});
})();
