/* 검사용 차시 — 시장·가게 놀이판(economy) 교구의 모든 모드(sort·match·order·pay·budget·pick·fill)를 한 차시에서 쓴다. 카탈로그에 싣지 않는다. */
PaperLessons.register({
  id: '_tool-economy',
  schema: 'edu-lesson.v1',
  catalog: { unit: 'g4-사회-1학기-3', lesson: 2 },
  grade: 4, subject: '사회', unitTitle: '3. 경제활동과 지역 간 교류',
  title: '시장 놀이로 생산·소비를 나누고 예산 안에서 고르기',
  objective: '생산·소비·교환 활동을 구별하고, 물건값을 돈으로 알맞게 내며, 정해진 예산 안에서 꼭 필요한 것을 먼저 고르는 합리적 선택을 할 수 있다.',
  standards: ['[4사07-01]'],
  minutes: 40,
  formats: ['chromebook', 'projector', 'print'],
  illustration: {
    prompt: 'Layered paper-cut illustration of a small village market with fruit stalls, a bakery and children holding coins and a shopping basket, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.',
    scene: { viewBox: [480, 270], layers: [
      { motif: 'sun', x: 410, y: 58, s: 0.8 }, { motif: 'cloud', x: 120, y: 52 }, { motif: 'hills', y: 200 },
      { motif: 'house', x: 110, y: 214 }, { motif: 'house', x: 370, y: 216, color: 'buttercup' }, { motif: 'tree', x: 240, y: 214 },
      { motif: 'text', x: 240, y: 138, text: '무엇을 먼저 살까요?', size: 22 },
    ] },
  },
  stages: [
    {
      id: 'intro', title: '도입', minutes: 6,
      teacher: '"용돈이 3,000원 있어요. 사고 싶은 것은 다섯 개예요. 모두 살 수 있을까요?" 갖고 싶은 것은 많은데 돈은 한정되어 있어서 고르는 일이 생긴다는 것(희소성)을 이야기한다. 시연 단추로 활동 카드가 생산·소비·교환 칸에 나뉘는 모습을 보여 주고, "빵집 주인이 빵을 굽는 것과 내가 빵을 사 먹는 것은 어떻게 다를까요?"라고 묻는다.',
      student: '최근에 산 물건 하나와 그것을 고른 까닭을 짝에게 말해 봅시다.',
      demo: { tool: 'economy', options: { cards: ['빵을 구워요', '빵을 사 먹어요', '빵과 우유를 바꿔요'], shuffle: false }, sequence: [{ sort: { 생산: ['빵을 구워요'], 소비: ['빵을 사 먹어요'], 교환: ['빵과 우유를 바꿔요'] } }] },
    },
    {
      id: 'main', title: '전개', minutes: 27,
      activities: [
        {
          id: 'a1', title: '활동 1. 시장 사람들의 일 나누기', minutes: 9, tool: 'economy',
          teacher: '"이 사람은 물건을 만들고 있나요, 쓰고 있나요?" 카드를 놓을 때마다 누가 무엇을 하는지 말하게 한다. 물건을 파는 일을 생산으로 놓는 학생에게 \'파는 것과 사는 것이 만나는 일\'이 교환이라는 것을 짚는다. 물건이 오는 차례에서는 가게가 물건을 만든다고 생각하는 학생에게 과수원과 운송을 떠올리게 한다.',
          task: '카드를 생산·소비·교환 칸에 나누고, 가게와 하는 일을 짝 지어요. 물건이 우리에게 오는 차례도 놓아요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          items: [
            { prompt: '시장 사람들의 일을 생산·소비·교환으로 나누어 보세요.', toolOptions: { cards: ['사과를 길러요', '옷을 사 입어요', '쌀과 생선을 바꿔요', '의자를 만들어요', '미용실에서 머리를 잘라요'] }, target: { sort: { 생산: ['사과를 길러요', '의자를 만들어요'], 소비: ['옷을 사 입어요', '미용실에서 머리를 잘라요'], 교환: ['쌀과 생선을 바꿔요'] } }, difficulty: 0.2 },
            { prompt: '일하는 곳과 그곳에서 하는 일을 짝 지어 보세요.', toolOptions: { mode: 'match', slots: [{ id: 'farm', label: '과수원', motif: 'tree' }, { id: 'bakery', label: '빵집', motif: 'shop' }, { id: 'factory', label: '공장', motif: 'factory' }], cards: ['사과를 길러요', '빵을 구워 팔아요', '자동차를 만들어요'] }, target: { match: { farm: '사과를 길러요', bakery: '빵을 구워 팔아요', factory: '자동차를 만들어요' } }, difficulty: 0.1 },
            { prompt: '사과가 우리 집 식탁에 오기까지의 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: '기르기', text: '과수원에서 길러요', motif: 'tree' }, { id: '옮기기', text: '트럭으로 옮겨요', motif: 'cart' }, { id: '팔기', text: '시장에서 팔아요', motif: 'shop' }, { id: '먹기', text: '집에서 먹어요', motif: 'house' }] }, target: { order: ['기르기', '옮기기', '팔기', '먹기'] }, difficulty: 0.15 },
          ],
        },
        {
          id: 'a2', title: '활동 2. 가격표 보고 돈 내기', minutes: 9, tool: 'economy',
          teacher: '"1,300원을 내려면 어떤 돈부터 놓을까요?" 큰 돈부터 놓고 남은 값을 작은 돈으로 채우게 한다. 500원 대신 50원을 놓는 학생에게 동전에 쓰인 수를 소리 내어 읽게 한다. 거스름돈 문제에서는 물건값에서 이어 세기(300원에서 1,000원까지)를 손가락으로 해 보게 한다.',
          task: '지갑의 돈을 눌러 낸 돈 칸에 놓아요. 낸 돈 칸의 돈을 누르면 하나씩 빠져요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '공책값을 돈으로 내 보세요.', toolOptions: { mode: 'pay', item: { text: '공책', motif: 'book', price: 1300 } }, target: { pay: 1300 }, difficulty: 0.1 },
            { prompt: '연필값을 가장 적은 개수의 돈으로 내 보세요. 다 맞히면 합계가 보여요.', reveal: 'after-check', toolOptions: { mode: 'pay', item: { text: '연필', motif: 'pencil', price: 750 } }, target: { pay: 750, fewest: true }, difficulty: 0.3, levels: { easy: { prompt: '연필값을 돈으로 내 보세요. 다 맞히면 합계가 보여요.', target: { pay: 750, fewest: false } } } },
            { prompt: '1,000원을 내고 지우개를 샀어요. 거스름돈을 만들어 보세요.', toolOptions: { mode: 'pay', item: { text: '지우개', price: 300 }, paid: 1000, coins: [10, 50, 100, 500], ask: '받아야 할 거스름돈을 놓아요' }, target: { pay: 700 }, difficulty: 0.25 },
          ],
        },
        {
          id: 'a3', title: '활동 3. 예산 안에서 고르기', minutes: 9, tool: 'economy',
          teacher: '"예산 막대가 빨간 선을 넘으면 무엇을 빼야 할까요?" 꼭 필요한 것과 갖고 싶은 것을 먼저 나누어 말하게 한다. 비싼 장난감부터 담는 학생에게 문제의 조건(꼭 사야 할 공책)을 다시 읽게 한다. 마지막에는 \'희소성\' 낱말로 오늘 고민한 까닭을 한 문장으로 정리한다.',
          task: '물건을 눌러 고르고, 예산 막대가 예산 선을 넘지 않게 해요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '3,000원으로 학용품을 사요. 공책은 꼭 사고, 남는 돈으로 더 골라 보세요.', toolOptions: { mode: 'budget', budget: 3000, items: [{ id: 'pen', text: '연필', price: 500, motif: 'pencil' }, { id: 'note', text: '공책', price: 1200, motif: 'book' }, { id: 'toy', text: '장난감', price: 2500, motif: 'ball' }, { id: 'eraser', text: '지우개', price: 300 }] }, target: { budget: { must: ['note'], min: 2000 } }, difficulty: 0.2 },
            { prompt: '5,000원으로 소풍 간식 3개를 골라 보세요. 다 맞히면 쓴 돈이 보여요.', reveal: 'after-check', predict: { q: '비싼 간식부터 고르면 몇 개를 살 수 있을까요?', options: ['3개 넘게', '3개보다 적게', '잘 모르겠어요'] }, conclude: '돈은 한정되어 있어서, 값을 견주어 보며 꼭 필요한 것을 먼저 골라야 해요.', toolOptions: { mode: 'budget', budget: 5000, items: [{ id: 'water', text: '물', price: 800 }, { id: 'kimbap', text: '김밥', price: 2500, motif: 'rice' }, { id: 'cake', text: '케이크', price: 4000 }, { id: 'fruit', text: '과일', price: 1500, motif: 'fruit' }, { id: 'candy', text: '사탕', price: 1000 }] }, target: { budget: { count: 3, must: ['water'] } }, difficulty: 0.35 },
            { prompt: '갖고 싶은 것과 필요한 것을 견주어 고른 친구의 말만 골라 보세요.', toolOptions: { mode: 'pick', basket: '합리적인 선택', cards: ['값을 견주어 보고 살래', '친구가 샀으니 나도 살래', '꼭 필요한 것부터 살래', '보이는 대로 다 살래'] }, target: { pick: ['값을 견주어 보고 살래', '꼭 필요한 것부터 살래'] }, difficulty: 0.1 },
            { prompt: '빈칸에 알맞은 낱말을 넣어 문장을 완성해 보세요.', toolOptions: { mode: 'fill', cards: ['희소성', '편리함', '교환'], slots: [{ id: 'f', label: '갖고 싶은 것은 많지만 돈은 한정되어 있는 것을 ___이라고 해요.' }] }, target: { fill: { f: '희소성' } }, difficulty: 0.2 },
          ],
        },
      ],
    },
    {
      id: 'wrapup', title: '정리', minutes: 7,
      teacher: '"오늘 예산 안에서 고를 때 무엇을 먼저 생각했나요?" 출구 질문에서 돈을 더 많이 낸 학생은 다음 시간에 큰 돈부터 세는 활동을 짝과 한 번 더 한다.',
      exitTicket: [
        { type: 'tool', tool: 'economy', options: { mode: 'pay', item: { text: '빵', motif: 'bread', price: 1600 } }, prompt: '빵값을 가장 적은 개수의 돈으로 내 보세요.', target: { pay: 1600, fewest: true }, difficulty: 0.2 },
        { type: 'choice', prompt: '다음 가운데 생산 활동은 무엇인가요?', options: ['과자를 사 먹는다', '농부가 쌀을 기른다', '책을 빌려 읽는다'], answer: 1, explain: '필요한 것을 만들거나 기르는 일이 생산이에요.' },
        { type: 'mood', prompt: '오늘 사회 공부는 어땠나요?' },
      ],
    },
  ],
  worksheet: {
    title: '시장 놀이와 합리적 선택',
    items: [
      { type: 'figure', wide: true, prompt: '공책값을 내려면 어떤 돈을 몇 개 낼지 낸 돈 칸에 그리세요.', tool: 'economy', figures: [{ options: { mode: 'pay', item: { text: '공책', price: 1300 } }, caption: '' }], answer: '1000원 1개, 100원 3개' },
      { type: 'figure', wide: true, prompt: '예산 3,000원 안에서 살 물건에 ○ 하고, 쓴 돈을 쓰세요.', tool: 'economy', figures: [{ options: { mode: 'budget', budget: 3000, items: [{ id: 'pen', text: '연필', price: 500 }, { id: 'note', text: '공책', price: 1200 }, { id: 'toy', text: '장난감', price: 2500 }] }, caption: '' }], answer: '예: 연필+공책 1,700원' },
      { type: 'table', prompt: '활동을 생산·소비·교환으로 나누어 쓰세요.', columns: ['활동', '생산·소비·교환'], cells: [['어부가 물고기를 잡아요', ''], ['가게에서 신발을 사요', ''], ['쌀과 채소를 바꿔요', '']] },
      { type: 'short', prompt: '용돈으로 무엇을 살지 고를 때 지킬 나만의 약속을 쓰세요.' },
    ],
    easy: {
      note: '큰 돈부터 놓고, 남은 값을 작은 돈으로 채워요.',
      items: [
        { type: 'figure', wide: true, prompt: '지우개값을 내려면 어떤 돈을 낼지 그리세요.', tool: 'economy', figures: [{ options: { mode: 'pay', item: { text: '지우개', price: 300 }, coins: [10, 50, 100, 500] }, caption: '' }], answer: '100원 3개' },
        { type: 'choice', prompt: '생산 활동에 ○ 하세요.', options: ['사과를 길러요', '사과를 사 먹어요'], answer: '사과를 길러요' },
        { type: 'short', prompt: '꼭 필요한 물건 하나를 쓰세요.' },
      ],
    },
  },
  differentiation: {
    easy: '카드를 맞는 칸에 놓으면 초록 테두리가 생기고, 돈 내기는 가장 적은 개수가 아니어도 값만 맞으면 돼요.',
    base: '모든 칸을 채운 뒤 확인을 눌러 스스로 고쳐요. 낸 돈 합계를 보며 값을 맞춰요.',
    challenge: '합계를 보지 않고 직접 세어 가장 적은 개수로 내고, 예산 문제에서 고른 까닭을 말해요.',
  },
  teacherNotes: '자주 보이는 어려움: ① 파는 일을 생산으로 놓는다 → 사고파는 것이 만나는 일은 교환이라고 짚는다. ② 500원과 50원을 헷갈린다 → 교구 오답 예시가 이 실수다. 동전에 쓰인 수를 소리 내어 읽게 한다. ③ 비싼 것부터 담아 예산을 넘긴다 → 예산 막대가 빨간 선을 넘는 것을 보여 주고, 꼭 필요한 것부터 다시 고르게 한다.',
});
