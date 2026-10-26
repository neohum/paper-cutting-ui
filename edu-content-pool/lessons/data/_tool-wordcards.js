/* 검사용 차시 — 영어 낱말 플립 카드(wordcards) 교구의 모든 모드(flip·match·listen·pick·spell·sort·order·fill)를 한 차시에서 쓴다. 카탈로그에 싣지 않는다. */
PaperLessons.register({
  id: '_tool-wordcards',
  schema: 'edu-lesson.v1',
  catalog: { unit: 'g3-영어-1학기-1', lesson: 2 },
  grade: 3, subject: '영어', unitTitle: '1. Hello, Friends',
  title: '동물과 과일 낱말을 뒤집고 듣고 철자로 만들기',
  objective: '동물과 과일을 나타내는 쉬운 영어 낱말을 듣고 그림과 짝 지으며, 알파벳 카드로 낱말의 철자를 차례대로 놓을 수 있다.',
  standards: ['[4영01-01]'],
  minutes: 40,
  formats: ['chromebook', 'projector', 'print'],
  illustration: {
    prompt: 'Layered paper-cut illustration of a cat, a dog and a basket of apples and bananas beside big alphabet blocks, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.',
    scene: { viewBox: [480, 270], layers: [
      { motif: 'sun', x: 410, y: 58, s: 0.8 }, { motif: 'cloud', x: 110, y: 52 }, { motif: 'hills', y: 200 },
      { motif: 'tree', x: 90, y: 214 }, { motif: 'house', x: 380, y: 216 }, { motif: 'flower', x: 250, y: 226, color: 'peach' },
      { motif: 'text', x: 240, y: 138, text: 'cat · dog · apple', size: 24 },
    ] },
  },
  stages: [
    {
      id: 'intro', title: '도입', minutes: 6,
      teacher: '"What is this?" 고양이 그림을 보여 주고 학생들이 아는 말로 대답하게 한 뒤, 시연 단추로 그림 카드 옆에 영어 낱말이 놓이는 모습을 보여 준다. "cat의 첫소리는 /k/예요. 글자 c가 이 소리를 내요." 알파벳 이름(씨)과 소리(/k/)를 섞어 말하는 학생에게 둘을 나누어 다시 들려준다.',
      student: '그림을 보고 아는 영어 낱말을 말해 봅시다.',
      demo: { tool: 'wordcards', options: { words: [{ en: 'cat', ko: '고양이', motif: 'cat' }, { en: 'dog', ko: '개', motif: 'dog' }], shuffle: false }, sequence: [{ match: { cat: 'cat', dog: 'dog' } }] },
    },
    {
      id: 'main', title: '전개', minutes: 27,
      activities: [
        {
          id: 'a1', title: '활동 1. 낱말 카드 뒤집고 짝 짓기', minutes: 9, tool: 'wordcards',
          teacher: '"동물 카드만 뒤집어 볼까요? 뒤집으면 소리가 나요. 따라 말해 봐요." 카드를 뒤집을 때마다 낱말을 따라 말하게 한다. 그림만 보고 모든 카드를 뒤집는 학생에게 문제의 조건(동물만)을 다시 읽게 한다. 짝 짓기에서 첫 글자만 보고 놓는 학생에게는 낱말 전체를 소리 내어 읽게 한다.',
          task: '카드를 눌러 뒤집고, 뒤집을 때 들리는 영어 낱말을 따라 말해요. 그림과 영어 낱말도 짝 지어요.',
          levels: { easy: { live: true }, base: {}, challenge: {} },
          items: [
            { prompt: '동물 카드만 뒤집어 영어 이름을 보고 따라 말해 보세요.', toolOptions: { mode: 'flip', words: [{ en: 'cat', ko: '고양이', motif: 'cat' }, { en: 'apple', ko: '사과', motif: 'apple' }, { en: 'dog', ko: '개', motif: 'dog' }, { en: 'banana', ko: '바나나', motif: 'banana' }] }, target: { flip: ['cat', 'dog'] }, difficulty: 0.1 },
            { prompt: '영어 낱말을 읽고, 먹을 수 있는 것만 뒤집어 뜻을 확인해 보세요.', toolOptions: { mode: 'flip', front: 'en', words: [{ en: 'book', ko: '책', motif: 'book' }, { en: 'apple', ko: '사과', motif: 'apple' }, { en: 'egg', ko: '달걀', motif: 'egg' }, { en: 'ball', ko: '공', motif: 'ball' }] }, target: { flip: ['apple', 'egg'] }, difficulty: 0.25 },
            { prompt: '그림 옆에 알맞은 영어 낱말 카드를 놓아 보세요.', toolOptions: { words: [{ en: 'cat', ko: '고양이', motif: 'cat' }, { en: 'dog', ko: '개', motif: 'dog' }, { en: 'fish', ko: '물고기', motif: 'fish2' }] }, target: { match: { cat: 'cat', dog: 'dog', fish: 'fish' } }, difficulty: 0.15 },
          ],
        },
        {
          id: 'a2', title: '활동 2. 듣고 고르기', minutes: 8, tool: 'wordcards',
          teacher: '"듣기 단추를 누르고 잘 들어 봐요. 무슨 소리로 시작하나요?" 첫소리를 손가락으로 표시하게 한 뒤 그림을 고르게 한다. 소리가 나지 않는 기기에서는 교사가 낱말을 두 번 읽어 준다. 비슷한 소리(dog와 duck)를 헷갈리는 학생에게 끝소리까지 듣게 한다.',
          task: '듣기 단추를 눌러 낱말을 듣고, 들은 낱말의 그림 카드를 바구니에 넣어요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '듣기 단추를 누르고, 들은 낱말의 그림을 골라 보세요.', toolOptions: { mode: 'listen', words: [{ en: 'cat', ko: '고양이', motif: 'cat' }, { en: 'dog', ko: '개', motif: 'dog' }, { en: 'fish', ko: '물고기', motif: 'fish2' }] }, target: { listen: 'dog' }, difficulty: 0.1 },
            { prompt: '듣기 단추를 누르고, 들은 과일의 그림을 골라 보세요.', toolOptions: { mode: 'listen', words: [{ en: 'apple', ko: '사과', motif: 'apple' }, { en: 'banana', ko: '바나나', motif: 'banana' }, { en: 'egg', ko: '달걀', motif: 'egg' }] }, target: { listen: 'banana' }, difficulty: 0.15 },
            { prompt: '동물을 나타내는 영어 낱말만 골라 보세요.', toolOptions: { mode: 'pick', basket: '동물 낱말', words: [{ en: 'cat' }, { en: 'book' }, { en: 'dog' }, { en: 'pencil' }] }, target: { pick: ['cat', 'dog'] }, difficulty: 0.2 },
          ],
        },
        {
          id: 'a3', title: '활동 3. 철자 카드로 낱말 만들기', minutes: 10, tool: 'wordcards',
          teacher: '"cat을 소리로 나누면 /k/ /æ/ /t/ 세 소리예요. 소리마다 글자를 하나씩 놓아 볼까요?" 손뼉으로 소리를 나누게 한 뒤 알파벳 카드를 놓게 한다. 글자 순서를 바꿔 놓는 학생(tac)에게 왼쪽에서 오른쪽으로 읽는 방향을 짚는다. 문장 순서에서는 우리말 순서대로 놓는 학생에게 "누가-한다-무엇을" 차례를 보여 준다.',
          task: '낱말을 듣고 알파벳 카드를 왼쪽 칸부터 차례로 놓아요. 낱말을 무리로 나누고 문장도 만들어요.',
          levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
          items: [
            { prompt: '낱말 듣기를 누르고, 알파벳 카드로 고양이를 영어로 써 보세요.', toolOptions: { mode: 'spell', word: 'cat', ko: '고양이', motif: 'cat' }, target: { spell: 'cat' }, difficulty: 0.15, levels: { challenge: { toolOptions: { extra: ['k', 'e'] } } } },
            { prompt: '알파벳 카드로 사과를 영어로 써 보세요. 같은 글자가 두 번 나와요.', toolOptions: { mode: 'spell', word: 'apple', ko: '사과', motif: 'apple', extra: ['b'] }, target: { spell: 'apple' }, difficulty: 0.3 },
            { prompt: '영어 낱말을 동물과 과일로 나누어 보세요.', toolOptions: { mode: 'sort', slots: ['동물', '과일'], words: [{ en: 'cat', motif: 'cat' }, { en: 'apple', motif: 'apple' }, { en: 'dog', motif: 'dog' }, { en: 'banana', motif: 'banana' }] }, target: { sort: { 동물: ['cat', 'dog'], 과일: ['apple', 'banana'] } }, difficulty: 0.1 },
            { prompt: '낱말 카드를 차례대로 놓아 인사말을 만들어 보세요.', toolOptions: { mode: 'order', cards: ['Nice', 'to', 'meet', 'you.'] }, target: { order: ['Nice', 'to', 'meet', 'you.'] }, difficulty: 0.2 },
            { prompt: '빈칸에 알맞은 낱말을 넣어 문장을 완성해 보세요.', toolOptions: { mode: 'fill', cards: ['cat', 'apple', 'book'], slots: [{ id: 'b1', label: 'I like the red ___.' }, { id: 'b2', label: 'The ___ says meow.' }] }, target: { fill: { b1: 'apple', b2: 'cat' } }, difficulty: 0.25 },
          ],
        },
      ],
    },
    {
      id: 'wrapup', title: '정리', minutes: 7,
      teacher: '"오늘 배운 낱말 가운데 가장 기억에 남는 것을 철자로 말해 볼까요? d-o-g!" 출구 질문에서 글자 순서를 바꾼 학생은 다음 시간 시작에 손뼉으로 소리를 나누는 활동을 한 번 더 한다.',
      exitTicket: [
        { type: 'tool', tool: 'wordcards', options: { mode: 'spell', word: 'dog', ko: '개', motif: 'dog' }, prompt: '알파벳 카드로 개를 영어로 써 보세요.', target: { spell: 'dog' }, difficulty: 0.1 },
        { type: 'choice', prompt: 'apple은 무엇을 뜻하나요?', options: ['바나나', '사과', '달걀'], answer: 1, explain: 'apple은 사과예요. 첫소리 /æ/를 떠올려요.' },
        { type: 'mood', prompt: '오늘 영어 공부는 어땠나요?' },
      ],
    },
  ],
  worksheet: {
    title: '영어 낱말 카드',
    items: [
      { type: 'figure', wide: true, prompt: '그림과 뜻을 보고 아래 줄에 영어 낱말을 쓰세요.', tool: 'wordcards', figures: [{ options: { mode: 'flip', words: [{ en: 'cat', ko: '고양이', motif: 'cat' }, { en: 'dog', ko: '개', motif: 'dog' }, { en: 'apple', ko: '사과', motif: 'apple' }] }, caption: '' }], answer: 'cat · dog · apple' },
      { type: 'figure', wide: true, prompt: '그림을 보고 빈칸에 알파벳을 하나씩 쓰세요.', tool: 'wordcards', figures: [{ options: { mode: 'spell', word: 'fish', ko: '물고기', motif: 'fish2', printCards: false }, caption: '' }], answer: 'f · i · s · h' },
      { type: 'choice', prompt: '동물을 나타내는 낱말에 ○ 하세요.', options: ['book', 'cat', 'apple'], answer: 'cat' },
      { type: 'blank', prompt: 'The ___ says meow. (빈칸에 알맞은 낱말을 쓰세요)' },
    ],
    easy: {
      note: '낱말을 소리 내어 읽으며 첫소리부터 글자를 하나씩 써요.',
      items: [
        { type: 'figure', wide: true, prompt: '그림을 보고 아래 줄에 영어 낱말을 쓰세요.', tool: 'wordcards', figures: [{ options: { mode: 'flip', words: [{ en: 'cat', ko: '고양이', motif: 'cat' }, { en: 'dog', ko: '개', motif: 'dog' }] }, caption: '' }], answer: 'cat · dog' },
        { type: 'choice', prompt: '고양이를 나타내는 낱말에 ○ 하세요.', options: ['cat', 'dog'], answer: 'cat' },
        { type: 'short', prompt: '오늘 배운 낱말 하나를 쓰세요.' },
      ],
    },
  },
  differentiation: {
    easy: '알파벳 카드를 맞는 칸에 놓으면 초록 테두리가 생기고, 틀린 칸에 놓으면 되돌아와요.',
    base: '모든 칸을 채운 뒤 확인을 눌러 스스로 고쳐요.',
    challenge: 'cat 철자 문항에 낱말에 없는 알파벳(k, e)이 섞여 나와요. 소리를 잘 듣고 필요한 글자만 놓아요.',
  },
  teacherNotes: '자주 보이는 어려움: ① 알파벳 이름과 소리를 섞는다(c를 "씨"로만 앎) → 첫소리 /k/를 따로 들려준다. ② 글자 순서를 바꾼다(tac) → 교구가 "이웃한 두 카드의 순서가 서로 바뀌었어요"라고 답한다. 왼쪽부터 읽는 방향을 짚는다. ③ 같은 글자가 두 번 나오는 낱말(apple)에서 한 번만 놓는다 → 소리를 천천히 나누어 다시 듣게 한다. 소리는 학생이 단추를 누를 때만 난다.',
});
