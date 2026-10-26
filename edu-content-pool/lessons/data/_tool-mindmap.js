/* 검사용 차시 — 생각 그물(mindmap) 교구의 모든 모드(sort·match·pick·order·fill)를 한 차시에서 쓴다. 카탈로그에 싣지 않는다. */
PaperLessons.register({
  id: '_tool-mindmap',
  schema: 'edu-lesson.v1',
  catalog: { unit: 'g4-도덕-1학기-2', lesson: 2 },
  grade: 4, subject: '도덕', unitTitle: '2. 도덕적인 나',
  title: '바른 행동을 가치별로 묶고 까닭 잇기',
  objective: '생활 속 행동을 정직·책임·배려 같은 가치에 따라 묶고, 그 행동이 바른 까닭을 근거와 함께 말할 수 있다.',
  standards: ['[4도01-04]'],
  minutes: 40,
  formats: ['chromebook', 'projector', 'print'],
  illustration: {
    prompt: 'Layered paper-cut illustration of a big paper tree whose branches hold little cards with hearts, stars and helping hands, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.',
    scene: { viewBox: [480, 270], layers: [
      { motif: 'cloud', x: 90, y: 50 }, { motif: 'sun', x: 410, y: 60, s: 0.7 }, { motif: 'hills', y: 214 },
      { motif: 'tree', x: 240, y: 214, s: 1.6 }, { motif: 'star', x: 170, y: 120 }, { motif: 'star', x: 310, y: 116, color: 'rose' },
      { motif: 'text', x: 240, y: 250, text: '바른 행동은 어느 가지에 열릴까요?', size: 18 },
    ] },
  },
  stages: [
    {
      id: 'intro', title: '도입', minutes: 6,
      teacher: '"어제 내가 한 행동 가운데 스스로 칭찬하고 싶은 것은 무엇인가요?" 시연 단추로 행동 카드가 정직·배려 가지에 열리는 모습을 보여 준다. "숙제를 끝까지 한 것은 어느 가지일까요?"를 물어 가치마다 뜻을 먼저 떠올리게 한다.',
      student: '오늘 내가 한 바른 행동 하나를 떠올려 봅시다.',
      demo: { tool: 'mindmap', options: { topic: '도덕적인 나', slots: ['정직', '배려'], cards: ['잘못을 솔직히 말해요', '넘어진 친구를 일으켜요'], shuffle: false }, sequence: [{ sort: { 정직: ['잘못을 솔직히 말해요'], 배려: ['넘어진 친구를 일으켜요'] } }] },
    },
    {
      id: 'main', title: '전개', minutes: 27,
      activities: [
        {
          id: 'a1', title: '활동 1. 행동을 가치 가지에 묶기', minutes: 10, tool: 'mindmap',
          teacher: '"이 행동은 누구를 위한 행동인가요? 나와의 약속인가요, 남을 위한 마음인가요?" 가지 이름의 뜻을 먼저 말하게 한 뒤 카드를 넣게 한다. 착해 보이는 행동을 모두 한 가지에 몰아넣는 학생에게 가지마다 뜻을 다시 묻는다.',
          task: '가운데 주제와 가지 이름을 읽고, 행동 카드를 알맞은 가지 칸에 넣어요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          items: [
            { prompt: '행동 카드를 정직과 책임 가지로 나누어 보세요.', toolOptions: { topic: '도덕적인 나', slots: ['정직', '책임'], cards: ['깨뜨린 컵을 먼저 말해요', '맡은 화분에 물을 줘요', '시험 답을 베끼지 않아요', '숙제를 끝까지 해요'] }, target: { sort: { 정직: ['깨뜨린 컵을 먼저 말해요', '시험 답을 베끼지 않아요'], 책임: ['맡은 화분에 물을 줘요', '숙제를 끝까지 해요'] } }, difficulty: 0.15 },
            { prompt: '세 가지 가치로 나누어 보세요. 다 맞히면 까닭이 보여요.', reveal: 'after-check', toolOptions: { topic: '바른 생활', slots: ['정직', '책임', '배려'], cards: [{ id: '주운돈', text: '주운 돈을 돌려줘요', back: '남의 것이니까' }, { id: '청소', text: '청소 당번을 해요', back: '맡은 일이니까' }, { id: '자리', text: '버스에서 자리를 양보해요', back: '힘든 분을 위해' }, { id: '거짓', text: '늦은 까닭을 꾸미지 않아요', back: '사실대로' }, { id: '약속', text: '친구와 한 약속을 지켜요', back: '믿음을 지키니까' }, { id: '도움', text: '짐 든 친구 문을 열어 줘요', back: '친구를 위해' }] },
              target: { sort: { 정직: ['주운돈', '거짓'], 책임: ['청소', '약속'], 배려: ['자리', '도움'] } }, difficulty: 0.3 },
            { prompt: '자연을 아끼는 행동만 자연 가지에 넣어 보세요. 상관없는 카드는 남겨요.', toolOptions: { topic: '생명 존중', slots: ['자연 사랑', '나 사랑'], cards: ['물을 아껴 써요', '쓰레기를 주워요', '밥을 골고루 먹어요', '친구 흉을 봐요'] }, target: { sort: { '자연 사랑': ['물을 아껴 써요', '쓰레기를 주워요'], '나 사랑': ['밥을 골고루 먹어요'] } }, difficulty: 0.25,
              predict: { q: '‘친구 흉을 봐요’는 어느 가지에 넣을까요?', options: ['자연 사랑', '나 사랑', '어디에도 넣지 않아요'] },
              conclude: '바르지 않은 행동은 어느 가지에도 열리지 않아요. 가지에는 실천할 행동만 넣어요.' },
          ],
        },
        {
          id: 'a2', title: '활동 2. 생각에 근거 카드 잇기', minutes: 9, tool: 'mindmap',
          teacher: '"왜 그렇게 생각하나요? 그 까닭을 뒷받침하는 일은 무엇인가요?" 가지의 생각을 읽고 근거 카드를 잇게 한다. 생각을 그대로 되풀이한 카드(“정직은 좋아요”)를 고른 학생에게는 그것이 까닭이 되는지 묻는다.',
          task: '가지에 쓰인 생각을 읽고, 그 생각을 뒷받침하는 근거 카드를 이어요.',
          levels: { easy: { live: true }, base: {}, challenge: {} },
          items: [
            { prompt: '두 생각에 알맞은 근거 카드를 이어 보세요.', toolOptions: { mode: 'match', topic: '정직해야 해요', slots: [{ id: 's1', label: '믿음을 얻어요' }, { id: 's2', label: '마음이 편해요' }], cards: ['솔직한 친구에게 비밀을 말해요', '거짓말 뒤에는 자꾸 걱정돼요', '정직은 좋은 거예요'] }, target: { match: { s1: '솔직한 친구에게 비밀을 말해요', s2: '거짓말 뒤에는 자꾸 걱정돼요' } }, difficulty: 0.25 },
            { prompt: '책임을 다하면 좋은 점과 그 근거를 이어 보세요.', toolOptions: { mode: 'match', topic: '책임', slots: [{ id: 'r1', label: '모두가 편해요' }, { id: 'r2', label: '내가 자라요' }, { id: 'r3', label: '믿고 맡겨요' }], cards: ['당번이 우유를 나르니 다 같이 먹어요', '매일 줄넘기를 하니 실력이 늘어요', '화분을 잘 키운 친구에게 또 맡겨요'] }, target: { match: { r1: '당번이 우유를 나르니 다 같이 먹어요', r2: '매일 줄넘기를 하니 실력이 늘어요', r3: '화분을 잘 키운 친구에게 또 맡겨요' } }, difficulty: 0.3 },
            { prompt: '배려가 필요한 까닭에 알맞은 근거를 이어 보세요.', toolOptions: { mode: 'match', topic: '배려', slots: [{ id: 'c1', label: '서로 기분이 좋아요' }, { id: 'c2', label: '다툼이 줄어요' }], cards: ['차례를 양보하니 웃으며 놀아요', '먼저 사과하니 싸움이 끝나요'] }, target: { match: { c1: '차례를 양보하니 웃으며 놀아요', c2: '먼저 사과하니 싸움이 끝나요' } }, difficulty: 0.15 },
          ],
        },
        {
          id: 'a3', title: '활동 3. 도덕적으로 생각하는 차례 정리하기', minutes: 8, tool: 'mindmap',
          teacher: '"어려운 일이 생겼을 때 바로 행동하나요, 먼저 생각하나요?" 주제와 이어진 카드를 고르고, 생각하는 차례를 놓고, 다짐 문장을 채우게 한다.',
          task: '주제와 이어진 카드를 고르고, 생각하는 차례를 정리하고, 다짐을 채워요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          items: [
            { prompt: '‘나를 돌아보기’와 이어지는 카드만 골라 보세요.', toolOptions: { mode: 'pick', topic: '나를 돌아보기', cards: ['오늘 한 일을 떠올려요', '잘못을 고칠 방법을 찾아요', '친구 잘못만 이야기해요', '남 탓을 해요'] }, target: { pick: ['오늘 한 일을 떠올려요', '잘못을 고칠 방법을 찾아요'] }, difficulty: 0.1 },
            { prompt: '어려운 일이 생겼을 때 생각하는 차례를 놓아 보세요.', toolOptions: { mode: 'order', cards: ['무슨 일인지 살펴요', '여러 방법을 떠올려요', '가장 바른 방법을 골라요', '실천해요'] }, target: { order: ['무슨 일인지 살펴요', '여러 방법을 떠올려요', '가장 바른 방법을 골라요', '실천해요'] }, difficulty: 0.2 },
            { prompt: '다짐 문장의 빈칸에 알맞은 카드를 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['약속', '거짓말', '양보'], slots: [{ id: 'f1', label: '친구와 한 ___은 꼭 지킬래요.' }, { id: 'f2', label: '줄을 설 때 동생에게 ___할래요.' }] }, target: { fill: { f1: '약속', f2: '양보' } }, difficulty: 0.15 },
          ],
        },
      ],
    },
    {
      id: 'wrapup', title: '정리', minutes: 7,
      teacher: '"오늘 묶은 가지 가운데 내가 가장 키우고 싶은 가지는 무엇인가요?" 출구 질문에서 가치를 섞은 학생은 다음 시간에 가지 이름의 뜻을 먼저 함께 정리한다.',
      exitTicket: [
        { type: 'tool', tool: 'mindmap', options: { topic: '우리 반 약속', slots: ['정직', '배려'], cards: ['빌린 지우개를 돌려줘요', '아픈 친구 가방을 들어 줘요', '틀린 답을 고쳐 말해요'] }, prompt: '행동 카드를 알맞은 가지에 넣어 보세요.', target: { sort: { 정직: ['빌린 지우개를 돌려줘요', '틀린 답을 고쳐 말해요'], 배려: ['아픈 친구 가방을 들어 줘요'] } }, difficulty: 0.2 },
        { type: 'choice', prompt: '‘거짓말 뒤에는 자꾸 걱정돼요’는 어떤 생각의 근거인가요?', options: ['정직하면 마음이 편해요', '책임을 지면 실력이 늘어요', '배려하면 다툼이 줄어요'], answer: 0, explain: '거짓말을 하면 마음이 불편하니, 정직하면 마음이 편하다는 생각을 뒷받침해요.' },
        { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
      ],
    },
  ],
  worksheet: {
    title: '바른 행동 생각 그물',
    items: [
      { type: 'figure', wide: true, prompt: '가지마다 어울리는 행동을 하나씩 써 넣으세요.', tool: 'mindmap', figures: [{ options: { topic: '도덕적인 나', printCards: false, slots: ['정직', '책임', '배려', '절제'], cards: ['보기'] }, caption: '' }], answer: '예: 정직 — 잘못을 솔직히 말해요 / 책임 — 숙제를 끝까지 해요' },
      { type: 'choice', prompt: '‘책임’ 가지에 들어갈 행동에 ○ 하세요.', options: ['맡은 화분에 물을 줘요', '친구 흉을 봐요', '주운 돈을 가져요'], answer: '맡은 화분에 물을 줘요' },
      { type: 'table', prompt: '내 생각과 그 근거를 쓰세요.', columns: ['내 생각', '근거'], cells: [['정직해야 해요', ''], ['', '']] },
      { type: 'short', prompt: '내가 가장 키우고 싶은 가지는 무엇이고, 왜 그런지 쓰세요.' },
    ],
    easy: {
      note: '가지 이름의 뜻을 먼저 떠올려요. 정직 = 거짓 없이, 책임 = 맡은 일을 끝까지, 배려 = 남을 생각해요.',
      items: [
        { type: 'figure', wide: true, prompt: '가지마다 어울리는 행동을 하나씩 써 넣으세요.', tool: 'mindmap', figures: [{ options: { topic: '도덕적인 나', printCards: false, slots: ['정직', '배려'], cards: ['보기'] }, caption: '' }], answer: '예: 정직 — 잘못을 솔직히 말해요' },
        { type: 'choice', prompt: '‘배려’에 들어갈 행동에 ○ 하세요.', options: ['자리를 양보해요', '새치기해요'], answer: '자리를 양보해요' },
        { type: 'short', prompt: '내가 한 바른 행동을 하나 쓰세요.' },
      ],
    },
  },
  differentiation: {
    easy: '맞는 가지에 넣으면 초록 테두리가 생기고, 틀린 가지에 넣으면 까닭을 말해 주고 되돌아와요.',
    base: '모두 넣은 뒤 확인을 눌러 스스로 고쳐요.',
    challenge: '활동 1 둘째 문항은 가지가 셋이고 카드가 여섯 장이에요. 까닭까지 말할 수 있으면 짝에게 설명해요.',
  },
  teacherNotes: '자주 보이는 어려움: ① 착해 보이는 행동을 모두 한 가지에 넣는다 → 가지 이름의 뜻(누구를 위한 행동인지)을 먼저 말하게 한다. ② 생각을 되풀이한 말을 근거로 고른다 → "그것이 왜 그런지 알려 주나요?"로 되묻는다. ③ 바르지 않은 행동 카드도 가지에 넣는다 → 가지에는 실천할 행동만 넣는다고 짚는다.',
});
