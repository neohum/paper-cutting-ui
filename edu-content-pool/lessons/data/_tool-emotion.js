/* 검사용 차시 — 마음 날씨 카드(emotion) 교구의 모든 모드(match·sort·fill·scale·order·branch·pick)를 한 차시에서 쓴다. 카탈로그에 싣지 않는다. */
PaperLessons.register({
  id: '_tool-emotion',
  schema: 'edu-lesson.v1',
  catalog: { unit: 'g3-도덕-1학기-3', lesson: 2 },
  grade: 3, subject: '도덕', unitTitle: '3. 함께하는 우리 가족',
  title: '가족 사이의 마음 날씨 읽고 배려하는 행동 고르기',
  objective: '가족과 함께 겪는 일에서 생기는 마음을 알아보고 그 크기를 짐작하며, 서로의 마음을 생각해 배려하는 행동을 고를 수 있다.',
  standards: ['[4도02-01]'],
  minutes: 40,
  formats: ['chromebook', 'projector', 'print'],
  illustration: {
    prompt: 'Layered paper-cut illustration of a family of four sitting together under a sky that is half sunny and half rainy with a small rainbow, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.',
    scene: { viewBox: [480, 270], layers: [
      { motif: 'sun', x: 90, y: 60, s: 0.8 }, { motif: 'cloud', x: 360, y: 56 }, { motif: 'hills', y: 200 },
      { motif: 'house', x: 240, y: 214 }, { motif: 'tree', x: 110, y: 218 }, { motif: 'flower', x: 380, y: 226, color: 'rose' },
      { motif: 'text', x: 240, y: 140, text: '오늘 내 마음의 날씨는?', size: 22 },
    ] },
  },
  stages: [
    {
      id: 'intro', title: '도입', minutes: 6,
      teacher: '"오늘 아침 여러분 마음은 맑음이었나요, 흐림이었나요?" 마음을 날씨에 빗대어 말하게 한 뒤 시연 단추로 마음 카드가 상황 옆에 놓이는 모습을 보여 준다. "동생이 내 컵을 깨뜨렸다면 화가 날 수도, 속상할 수도 있어요. 마음은 하나만 정답이 아니에요." 마음을 \'좋다/나쁘다\' 두 가지로만 말하는 학생에게 비, 천둥, 구름처럼 여러 날씨가 있다는 것을 짚는다.',
      student: '오늘 아침 내 마음은 어떤 날씨였는지 짝에게 말해 봅시다.',
      demo: { tool: 'emotion', options: { cards: ['기쁨', '속상함'], slots: [{ id: 's1', label: '동생이 생일 카드를 만들어 줬어요' }, { id: 's2', label: '아끼던 컵이 깨졌어요' }], shuffle: false }, sequence: [{ match: { s1: '기쁨', s2: '속상함' } }] },
    },
    {
      id: 'main', title: '전개', minutes: 27,
      activities: [
        {
          id: 'a1', title: '활동 1. 상황에 마음 날씨 카드 놓기', minutes: 10, tool: 'emotion',
          teacher: '"이 일을 겪은 사람은 어떤 마음일까요? 나라면 어떨까요?" 카드를 놓은 뒤 까닭을 한 문장으로 말하게 한다. 같은 상황에 \'속상함\'과 \'화남\'을 다르게 놓은 두 학생이 있으면 둘 다 될 수 있다는 것을 함께 확인한다. 마음 낱말 대신 행동(울어요, 소리쳐요)을 말하는 학생에게 "그때 마음 이름은 무엇일까?"라고 되묻는다.',
          task: '상황 글을 읽고 그 사람의 마음에 어울리는 마음 날씨 카드를 옆 칸에 놓아요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          items: [
            { prompt: '두 상황에 어울리는 마음 카드를 놓아 보세요.', toolOptions: { cards: ['기쁨', '속상함', '놀람'], slots: [{ id: 's1', label: '동생이 내 생일 카드를 만들어 줬어요' }, { id: 's2', label: '아끼던 컵을 동생이 깨뜨렸어요' }] }, target: { match: { s1: '기쁨', s2: ['속상함', '놀람'] } }, difficulty: 0.1 },
            { prompt: '가족이 해 준 일에 어울리는 마음을 놓아 보세요. 다 맞히면 할 말이 보여요.', reveal: 'after-check', toolOptions: { cards: [{ id: '고마움', text: '고마움', back: '"고마워요"' }, { id: '미안함', text: '미안함', back: '"미안해요"' }, { id: '뿌듯함', text: '뿌듯함', back: '"해냈어요"' }], slots: [{ id: 'u', label: '할머니가 학교로 우산을 가져다주셨어요' }, { id: 'p', label: '엄마와 한 약속을 잊고 늦게 왔어요' }, { id: 'd', label: '아빠가 내 그림을 냉장고에 붙이셨어요' }] }, target: { match: { u: '고마움', p: '미안함', d: '뿌듯함' } }, difficulty: 0.25 },
            { prompt: '일어난 일을 맑은 날 마음과 비 오는 날 마음으로 나누어 보세요.', toolOptions: { mode: 'sort', slots: ['맑음(기쁨)', '비(슬픔)'], cards: ['가족과 소풍을 갔어요', '키우던 금붕어가 죽었어요', '형이 놀이에 끼워 줬어요', '할아버지가 편찮으세요'] }, target: { sort: { '맑음(기쁨)': ['가족과 소풍을 갔어요', '형이 놀이에 끼워 줬어요'], '비(슬픔)': ['키우던 금붕어가 죽었어요', '할아버지가 편찮으세요'] } }, difficulty: 0.15 },
            { prompt: '마음을 전하는 말을 빈칸에 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['미안해', '고마워', '축하해'], slots: [{ id: 'f1', label: '숙제를 도와준 동생에게 "___."' }, { id: 'f2', label: '동생 장난감을 망가뜨렸을 때 "___."' }] }, target: { fill: { f1: '고마워', f2: '미안해' } }, difficulty: 0.15 },
          ],
        },
        {
          id: 'a2', title: '활동 2. 마음의 크기 재기', minutes: 8, tool: 'emotion',
          teacher: '"화가 났다면 얼마나 났을까요? 주먹을 꽉 쥘 만큼인가요, 조금 서운한 만큼인가요?" 같은 일이라도 마음의 크기는 사람마다 다를 수 있지만, 작은 일에 가장 큰 마음을 고르면 몸과 말이 지나치게 커진다는 것을 짚는다. 늘 끝 눈금만 고르는 학생에게 "그 일이 얼마나 큰 일인지"를 먼저 말하게 한다.',
          task: '상황을 읽고 마음의 크기를 눈금에서 골라요. 마음이 바뀐 차례도 놓아 봐요.',
          levels: { easy: { steps: 3 }, base: {}, challenge: {} },
          items: [
            { prompt: '동생이 내 공책에 낙서를 했어요. 화난 마음의 크기를 골라 보세요.', toolOptions: { mode: 'scale', situation: '동생이 내 공책 겉장에 낙서를 했어요.', feeling: '화남' }, target: { level: [2, 4] }, difficulty: 0.15, levels: { easy: { target: { level: [2, 3] }, prompt: '동생이 공책에 낙서를 했어요. 화난 마음의 크기를 세 칸에서 골라 보세요.' } } },
            { prompt: '기다리던 가족 여행이 미뤄졌어요. 속상한 마음의 크기를 골라 보세요.', toolOptions: { mode: 'scale', situation: '기다리던 가족 여행 날, 비가 많이 와서 여행이 미뤄졌어요.', feeling: '속상함', after: '이만큼 속상할 때는 가족에게 내 마음을 말로 전해 봐요.' }, target: { level: [3, 5] }, difficulty: 0.2, levels: { easy: { target: { level: [2, 3] }, prompt: '가족 여행이 미뤄졌어요. 속상한 마음의 크기를 세 칸에서 골라 보세요.' } } },
            { prompt: '줄넘기 대회 이야기에서 마음이 바뀐 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: '걱정', text: '대회 전날 걱정돼요' }, { id: '연습', text: '아빠와 함께 연습해요' }, { id: '뿌듯', text: '끝까지 넘어서 뿌듯해요' }] }, target: { order: ['걱정', '연습', '뿌듯'] }, difficulty: 0.15 },
          ],
        },
        {
          id: 'a3', title: '활동 3. 어떻게 할까? 골라 보기', minutes: 9, tool: 'emotion',
          teacher: '"이렇게 하면 동생 마음은 어떨까요? 그다음에 무슨 일이 생길까요?" 보기를 고를 때마다 결과 칸을 소리 내어 읽게 한다. 내 마음만 생각한 보기를 고른 학생에게 결과 칸에서 상대의 마음을 찾게 한다. 고자질하기를 \'바른 행동\'으로 고르는 학생에게는 먼저 말로 부탁하는 방법을 함께 떠올린다.',
          task: '상황에서 어떻게 할지 고르고, 그러면 어떻게 되는지 결과를 읽어 봐요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '동생이 내 장난감을 말없이 가져갔어요. 어떻게 하면 좋을까요?', toolOptions: { mode: 'branch', situation: '동생이 내 장난감을 말없이 가져가 놀고 있어요.', feeling: '속상함', choices: [
              { id: 'grab', text: '확 빼앗아 와요', result: '동생이 울고, 둘 다 마음이 상해요.', mood: '속상함', why: '빼앗으면 동생 마음이 어떨지 결과 칸을 읽어 봐요.' },
              { id: 'ask', text: '"다음엔 먼저 물어봐 줄래?" 하고 말해요', result: '동생이 미안하다며 장난감을 돌려줘요.', mood: '편안함' },
              { id: 'tell', text: '아무 말 없이 엄마에게 일러요', result: '동생은 왜 혼나는지 몰라 서운해해요.', mood: '서운함', why: '동생에게 내 마음을 먼저 말로 전해 볼 수 있어요.' }] }, target: { choice: 'ask' }, difficulty: 0.15 },
            { prompt: '엄마가 아파 누워 계세요. 어떻게 할지 골라 보세요. 맞게 고르면 결과가 보여요.', reveal: 'after-check', predict: { q: '엄마는 어떤 행동을 가장 반가워하실까요?', options: ['조용히 돕기', '혼자 놀기', '잘 모르겠어요'] }, conclude: '아픈 가족을 위해 내가 할 수 있는 일을 스스로 찾아 하면 가족 모두의 마음이 편안해져요.', toolOptions: { mode: 'branch', situation: '엄마가 감기로 누워 계세요. 집이 어질러져 있어요.', choices: [
              { id: 'tv', text: '텔레비전을 크게 틀어요', result: '엄마가 잠을 못 주무세요.', mood: '걱정', why: '큰 소리가 아픈 엄마에게 어떨지 떠올려 봐요.' },
              { id: 'clean', text: '조용히 내 방과 거실을 정리해요', result: '엄마가 고맙다며 웃으세요.', mood: '고마움' },
              { id: 'ask', text: '엄마에게 놀아 달라고 해요', result: '엄마가 더 힘들어하세요.', mood: '속상함', why: '엄마가 지금 할 수 있는 일인지 생각해 봐요.' }] }, target: { choice: 'clean' }, difficulty: 0.2 },
            { prompt: '가족을 배려하는 말만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '배려하는 말', cards: ['내가 도와줄게', '내가 먼저 할 거야', '많이 힘들었지?', '빨리 비켜'] }, target: { pick: ['내가 도와줄게', '많이 힘들었지?'] }, difficulty: 0.1 },
          ],
        },
      ],
    },
    {
      id: 'wrapup', title: '정리', minutes: 7,
      teacher: '"오늘 가족에게 해 보고 싶은 배려 행동 하나를 말해 볼까요?" 출구 질문에서 상대의 마음을 생각하지 않은 보기를 고른 학생은 다음 시간에 결과 칸을 친구와 함께 다시 읽게 한다.',
      exitTicket: [
        { type: 'tool', tool: 'emotion', options: { mode: 'branch', situation: '할머니께서 무거운 장바구니를 들고 오세요.', choices: [{ id: 'carry', text: '달려가서 함께 들어 드려요', result: '할머니가 고맙다고 하세요.', mood: '고마움' }, { id: 'game', text: '하던 게임을 계속해요', result: '할머니 혼자 힘들게 들어오세요.', mood: '서운함' }] }, prompt: '할머니께서 무거운 짐을 들고 오실 때 어떻게 할지 골라 보세요.', target: { choice: 'carry' }, difficulty: 0.1 },
        { type: 'choice', prompt: '동생이 내 연필을 부러뜨렸을 때 먼저 할 일은 무엇인가요?', options: ['소리를 지른다', '내 마음을 말로 전한다', '동생 연필도 부러뜨린다'], answer: 1, explain: '내 마음을 말로 차분히 전하면 서로의 마음을 알 수 있어요.' },
        { type: 'mood', prompt: '오늘 공부를 마친 내 마음의 날씨는 어떤가요?' },
      ],
    },
  ],
  worksheet: {
    title: '마음 날씨와 배려',
    items: [
      { type: 'figure', wide: true, prompt: '상황을 읽고 화난 마음의 크기에 ○ 하세요.', tool: 'emotion', figures: [{ options: { mode: 'scale', situation: '동생이 내 공책에 낙서를 했어요.', feeling: '화남' }, caption: '왜 그 크기를 골랐는지 까닭: ______________________' }], answer: '2~4 정도' },
      { type: 'figure', wide: true, prompt: '어떻게 할지 고른 보기 번호에 ○ 하고, 그러면 어떻게 될지 결과 칸에 쓰세요.', tool: 'emotion', figures: [{ options: { mode: 'branch', situation: '동생이 내 장난감을 말없이 가져갔어요.', choices: [{ id: 'grab', text: '확 빼앗아 와요' }, { id: 'ask', text: '먼저 물어봐 달라고 말해요' }] }, caption: '' }], answer: '2번' },
      { type: 'choice', prompt: '할머니가 우산을 가져다주셨을 때 드는 마음에 ○ 하세요.', options: ['고마움', '화남', '무서움'], answer: '고마움' },
      { type: 'short', prompt: '이번 주에 가족에게 해 줄 배려 행동 하나를 쓰세요.' },
    ],
    easy: {
      note: '마음 이름이 떠오르지 않으면 날씨(맑음, 비, 천둥)로 먼저 말해 봐요.',
      items: [
        { type: 'figure', wide: true, prompt: '화난 마음의 크기에 ○ 하세요.', tool: 'emotion', figures: [{ options: { mode: 'scale', steps: 3, situation: '동생이 내 공책에 낙서를 했어요.', feeling: '화남' }, caption: '' }], answer: '2' },
        { type: 'choice', prompt: '고마울 때 하는 말에 ○ 하세요.', options: ['고마워요', '저리 가'], answer: '고마워요' },
        { type: 'short', prompt: '가족에게 하고 싶은 말을 쓰세요.' },
      ],
    },
  },
  differentiation: {
    easy: '마음 카드를 맞는 칸에 놓으면 초록 테두리가 생기고, 마음 크기 눈금이 세 칸이에요.',
    base: '모든 칸을 채운 뒤 확인을 눌러 스스로 고쳐요. 눈금은 다섯 칸이에요.',
    challenge: '같은 상황에 될 수 있는 마음이 둘일 때 둘 다 말하고, 결과 칸을 읽기 전에 결과를 먼저 짐작해 봐요.',
  },
  teacherNotes: '자주 보이는 어려움: ① 마음을 좋다/나쁘다 두 가지로만 말한다 → 날씨 그림(비·천둥·구름)으로 여러 마음을 구별하게 한다. ② 작은 일에도 가장 큰 마음을 고른다 → 교구가 "그 일에 비해 크게 골랐어요"라고 답한다. 그 일이 얼마나 큰 일인지 먼저 말하게 한다. ③ 내 마음만 생각한 행동을 고른다 → 결과 칸에서 상대의 마음을 찾게 한다.',
});
