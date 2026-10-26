/* 검사용 차시 — 연표(timeline) 교구의 모든 모드(order·match·sort·fill·pick)를 한 차시에서 쓴다. 카탈로그에 싣지 않는다. */
PaperLessons.register({
  id: '_tool-timeline',
  schema: 'edu-lesson.v1',
  catalog: { unit: 'g3-사회-1학기-2', lesson: 2 },
  grade: 3, subject: '사회', unitTitle: '2. 일상에서 만나는 과거',
  title: '생활 도구가 바뀐 차례를 연표에 놓기',
  objective: '생활 도구와 나의 자람을 시간의 흐름에 따라 연표에 늘어놓고, 옛날과 오늘날의 모습을 견주어 말할 수 있다.',
  standards: ['[4사02-01]'],
  minutes: 40,
  formats: ['chromebook', 'projector', 'print'],
  illustration: {
    prompt: 'Layered paper-cut illustration of a long paper ribbon timeline with an old oil lamp, a rotary telephone and a smartphone standing along it, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.',
    scene: { viewBox: [480, 270], layers: [
      { motif: 'cloud', x: 100, y: 50 }, { motif: 'sun', x: 410, y: 60, s: 0.7 }, { motif: 'hills', y: 206 },
      { motif: 'house', x: 110, y: 214, color: 'buttercup' }, { motif: 'house', x: 250, y: 214 }, { motif: 'house', x: 380, y: 216, color: 'sky' },
      { motif: 'text', x: 240, y: 140, text: '옛날에서 오늘날까지', size: 22 },
    ] },
  },
  stages: [
    {
      id: 'intro', title: '도입', minutes: 6,
      teacher: '"할머니가 어렸을 때는 밤에 무엇으로 불을 밝혔을까요?" 시연 단추로 등잔 → 전구 → 형광등이 시간 띠 위에 놓이는 모습을 보여 준다. 왼쪽이 옛날, 오른쪽이 오늘날임을 손으로 짚는다. "띠에서 더 왼쪽에 있으면 더 먼저일까요, 나중일까요?"를 묻는다.',
      student: '우리 집에서 가장 오래된 물건은 무엇인지 떠올려 봅시다.',
      demo: { tool: 'timeline', options: { cards: ['등잔', '백열전구', 'LED 전등'], axis: ['옛날', '오늘날'], shuffle: false }, sequence: [{ order: ['등잔', '백열전구', 'LED 전등'] }] },
    },
    {
      id: 'main', title: '전개', minutes: 27,
      activities: [
        {
          id: 'a1', title: '활동 1. 먼저 생긴 것부터 연표에 놓기', minutes: 10, tool: 'timeline',
          teacher: '"이 물건이 있기 전에는 무엇을 썼을까요?" 하나씩 앞으로 거슬러 가게 한다. 새것처럼 보이는 그림을 무조건 오른쪽에 두는 학생에게는 물건이 하는 일이 어떻게 나아졌는지 말하게 한다. 이웃한 두 카드를 바꾼 학생에게는 두 물건 가운데 어느 것이 먼저 있어야 다른 것이 생길 수 있는지 묻는다.',
          task: '사건 카드를 먼저 일어난 것부터 시간 띠 왼쪽에 놓아요. 카드를 끌거나, 눌러 고른 뒤 눈금을 눌러요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          items: [
            { prompt: '나의 자람을 차례대로 시간 띠에 놓아 보세요.', toolOptions: { cards: ['태어났어요', '걸음마를 했어요', '유치원에 다녔어요', '3학년이 되었어요'] }, target: { order: ['태어났어요', '걸음마를 했어요', '유치원에 다녔어요', '3학년이 되었어요'] }, difficulty: 0.08 },
            { prompt: '전화기가 바뀐 차례를 놓아 보세요. 다 맞히면 쓰던 때가 보여요.', reveal: 'after-check', toolOptions: { axis: ['옛날', '오늘날'], cards: [{ id: '교환', text: '교환원이 이어 주는 전화', back: '약 100년 전' }, { id: '다이얼', text: '다이얼 전화', back: '약 50년 전' }, { id: '휴대', text: '들고 다니는 전화', back: '약 30년 전' }, { id: '스마트', text: '스마트폰', back: '오늘날' }] },
              target: { order: ['교환', '다이얼', '휴대', '스마트'] }, difficulty: 0.2,
              predict: { q: '다이얼 전화와 스마트폰 가운데 무엇이 먼저 있었을까요?', options: ['다이얼 전화', '스마트폰', '같은 때'] },
              conclude: '전화기는 이어 주는 사람 없이, 더 작게, 들고 다니게 바뀌어 왔어요.' },
            { prompt: '빨래하는 방법이 바뀐 차례를 놓아 보세요.', toolOptions: { axis: ['옛날', '오늘날'], cards: ['냇가에서 방망이질', '빨래판에 비비기', '통돌이 세탁기', '말려 주는 세탁기'] }, target: { order: ['냇가에서 방망이질', '빨래판에 비비기', '통돌이 세탁기', '말려 주는 세탁기'] }, difficulty: 0.15,
              levels: { challenge: { toolOptions: { axis: ['옛날', '오늘날'], cards: ['냇가에서 방망이질', '빨래판에 비비기', '통돌이 세탁기', '말려 주는 세탁기', '하늘을 나는 자동차'], slots: 4 } } } },
          ],
        },
        {
          id: 'a2', title: '활동 2. 때에 맞는 사건 잇기', minutes: 9, tool: 'timeline',
          teacher: '"100년 전에는 집에 수돗물이 있었을까요?" 눈금마다 그때 사람들의 모습을 떠올리게 한다. 오늘날 물건을 옛날 눈금에 놓은 학생에게는 그 물건을 만들려면 무엇이 먼저 있어야 하는지 묻는다.',
          task: '눈금에 적힌 때를 읽고, 그때의 모습을 나타내는 카드를 눈금 위에 놓아요.',
          levels: { easy: { live: true }, base: {}, challenge: {} },
          items: [
            { prompt: '때에 맞게 물을 쓰던 모습을 놓아 보세요.', toolOptions: { mode: 'match', axis: ['옛날', '오늘날'], slots: ['100년 전', '50년 전', '오늘날'], cards: ['우물에서 길어요', '마을 공동 수도', '집집마다 수도꼭지'] }, target: { match: { '100년 전': '우물에서 길어요', '50년 전': '마을 공동 수도', 오늘날: '집집마다 수도꼭지' } }, difficulty: 0.15 },
            { prompt: '해마다 있었던 학교 행사를 연도에 맞게 놓아 보세요.', toolOptions: { mode: 'match', toScale: true, slots: [{ id: 'y1', label: '1960년', at: 1960 }, { id: 'y2', label: '1990년', at: 1990 }, { id: 'y3', label: '2024년', at: 2024 }], cards: ['학교가 처음 문을 열었어요', '새 강당을 지었어요', '태블릿으로 공부해요'] }, target: { match: { y1: '학교가 처음 문을 열었어요', y2: '새 강당을 지었어요', y3: '태블릿으로 공부해요' } }, difficulty: 0.2 },
            { prompt: '하루 가운데 언제 하는 일인지 놓아 보세요.', toolOptions: { mode: 'match', axis: ['아침', '밤'], slots: ['아침', '낮', '저녁'], cards: ['학교에서 공부해요', '일어나 세수해요', '저녁밥을 먹어요'] }, target: { match: { 아침: '일어나 세수해요', 낮: '학교에서 공부해요', 저녁: '저녁밥을 먹어요' } }, difficulty: 0.1 },
          ],
        },
        {
          id: 'a3', title: '활동 3. 옛날과 오늘날 견주기', minutes: 8, tool: 'timeline',
          teacher: '"이 물건은 지금도 쓸까요?" 옛날과 오늘날로 나눈 뒤, 문장의 빈칸을 채우고, 오늘날 쓰는 물건만 고르게 한다. 지금도 쓰는 옛 물건(맷돌을 장식으로 둔 집)은 이야기로 짚고 넘어간다.',
          task: '옛날과 오늘날의 생활 모습을 나누고, 문장을 채우고, 골라 봐요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          items: [
            { prompt: '옛날에 쓰던 것과 오늘날 쓰는 것으로 나누어 보세요.', toolOptions: { mode: 'sort', slots: ['옛날', '오늘날'], cards: ['맷돌', '믹서', '아궁이', '전기밥솥'] }, target: { sort: { 옛날: ['맷돌', '아궁이'], 오늘날: ['믹서', '전기밥솥'] } }, difficulty: 0.1 },
            { prompt: '문장의 빈칸에 알맞은 카드를 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['등잔', '세탁기', '편지'], slots: [{ id: 'f1', label: '옛날에는 ___으로 밤에 불을 밝혔어요.' }, { id: 'f2', label: '전화가 없던 때에는 ___를 써서 소식을 전했어요.' }] }, target: { fill: { f1: '등잔', f2: '편지' } }, difficulty: 0.15 },
            { prompt: '오늘날 우리 집에서 쓰는 물건만 골라 보세요.', toolOptions: { mode: 'pick', basket: '오늘날 쓰는 물건', cards: ['냉장고', '물동이', '전자레인지', '호롱불'] }, target: { pick: ['냉장고', '전자레인지'] }, difficulty: 0.1 },
          ],
        },
      ],
    },
    {
      id: 'wrapup', title: '정리', minutes: 7,
      teacher: '"연표에서 왼쪽으로 갈수록 무엇이 달라지나요?" 출구 질문을 모아 보고, 순서를 거꾸로 놓은 학생은 다음 시간에 우리 집 물건 연표를 다시 만든다.',
      exitTicket: [
        { type: 'tool', tool: 'timeline', options: { axis: ['옛날', '오늘날'], cards: ['초가집', '기와집', '아파트'] }, prompt: '집의 모습이 바뀐 차례대로 놓아 보세요.', target: { order: ['초가집', '기와집', '아파트'] }, difficulty: 0.15 },
        { type: 'choice', prompt: '연표에서 왼쪽에 있는 일은 오른쪽에 있는 일보다 어떤가요?', options: ['먼저 일어났어요', '나중에 일어났어요', '같은 때 일어났어요'], answer: 0, explain: '연표는 왼쪽에서 오른쪽으로 시간이 흘러요.' },
        { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
      ],
    },
  ],
  worksheet: {
    title: '생활 도구 연표',
    items: [
      { type: 'figure', wide: true, prompt: '빨래하는 방법을 먼저 생긴 차례대로 생각하고, 눈금 위 칸에 번호를 쓰세요.', tool: 'timeline', figures: [{ options: { axis: ['옛날', '오늘날'], cards: ['① 빨래판에 비비기', '② 말려 주는 세탁기', '③ 냇가에서 방망이질'] }, caption: '' }], answer: '③ → ① → ②' },
      { type: 'figure', wide: true, prompt: '때에 맞는 모습을 눈금 위 칸에 쓰세요.', tool: 'timeline', figures: [{ options: { mode: 'match', printCards: false, axis: ['옛날', '오늘날'], slots: ['100년 전', '오늘날'], cards: ['우물', '수도'] }, caption: '' }], answer: '100년 전: 우물에서 물을 길어요 / 오늘날: 수도꼭지' },
      { type: 'table', prompt: '옛날과 오늘날 쓰는 물건을 견주어 쓰세요.', columns: ['하는 일', '옛날', '오늘날'], cells: [['밥 짓기', '', ''], ['불 밝히기', '', ''], ['소식 전하기', '', '']] },
      { type: 'short', prompt: '우리 집에서 가장 오래된 물건과 그 물건이 하는 일을 쓰세요.' },
    ],
    easy: {
      note: '연표는 왼쪽이 옛날, 오른쪽이 오늘날이에요.',
      items: [
        { type: 'figure', wide: true, prompt: '먼저 생긴 차례대로 생각하고, 칸에 번호를 쓰세요.', tool: 'timeline', figures: [{ options: { axis: ['옛날', '오늘날'], cards: ['① 세탁기', '② 냇가에서 방망이질'] }, caption: '' }], answer: '② → ①' },
        { type: 'choice', prompt: '옛날에 쓰던 물건에 ○ 하세요.', options: ['맷돌', '믹서'], answer: '맷돌' },
        { type: 'short', prompt: '우리 집에서 가장 오래된 물건을 쓰세요.' },
      ],
    },
  },
  differentiation: {
    easy: '맞는 눈금에 놓으면 초록 테두리가 생기고, 틀린 곳에 놓으면 까닭을 말해 주고 되돌아와요.',
    base: '모두 놓은 뒤 확인을 눌러 스스로 고쳐요.',
    challenge: '활동 1 셋째 문항에 아직 없는 물건 카드가 섞여 나와요. 그 카드는 연표에 놓지 않아요.',
  },
  teacherNotes: '자주 보이는 어려움: ① 연표 방향을 거꾸로 읽는다(오른쪽을 옛날로) → 띠 끝의 "옛날·오늘날" 말을 손으로 짚게 한다. ② 이웃한 두 도구의 차례를 바꾼다 → "이것이 있어야 저것을 만들 수 있을까?"로 앞뒤를 따진다. ③ 오늘날에도 쓰는 옛 물건을 옛날 칸에만 둔다 → 지금도 쓰는지와 처음 생긴 때를 나누어 묻는다.',
});
