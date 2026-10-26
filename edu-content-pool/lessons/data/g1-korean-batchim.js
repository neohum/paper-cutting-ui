/* 1학년 1학기 국어 2. 받침이 있는 글자를 읽어요 — 글자 맨 아래에 받침을 붙여 받침 있는 글자 만들고 읽기 */
(function () {
const BLANK = '(          )';
PaperLessons.register({
  id: 'g1-korean-batchim',
  schema: 'edu-lesson.v1',
  catalog: { unit: 'g1-국어-1학기-2', lesson: 3 },
  grade: 1, subject: '국어', unitTitle: '2. 받침이 있는 글자를 읽어요',
  title: '받침을 붙여 글자를 만들고 읽기',
  objective: '받침 없는 글자에 받침을 붙여 받침 있는 글자를 만들고, 받침에 따라 바뀌는 소리를 읽을 수 있다.',
  standards: ['[2국04-01]', '[2국03-01]'],
  minutes: 40,
  formats: ['chromebook', 'projector', 'print'],
  illustration: {
    prompt: "Layered paper-cut illustration of a cheerful little paper bear on a riverbank placing one last blank pastel paper tile underneath a stack of two blank paper tiles to complete a small tower, a paper house, reeds and a gentle river behind, all tiles completely plain with no letters, numbers or writing, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.",
    image: 'img/g1-korean-batchim.webp', size: [1200, 800],
    scene: { viewBox: [480, 270], layers: [
      { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 120, y: 50 }, { motif: 'cloud', x: 300, y: 40, s: 0.7 },
      { motif: 'hills', y: 200, colors: ['mint', 'sky', 'buttercup'] },
      { motif: 'house', x: 96, y: 220 }, { motif: 'tree', x: 400, y: 216, color: 'mint' },
      { motif: 'flower', x: 190, y: 240 }, { motif: 'flower', x: 330, y: 244, color: 'lavender' },
      { motif: 'text', x: 240, y: 140, text: '가 + ㅁ = 감', size: 26 },
    ] },
  },
  stages: [
    {
      id: 'intro', title: '도입', minutes: 6,
      teacher: '"곰 그림을 보세요. \'고\'와 \'곰\'은 무엇이 다를까요?" 칠판에 \'고\'를 쓰고 아래에 ㅁ을 붙여 \'곰\'으로 바꾼다. 시연 단추로 \'가\'가 \'감\'이 되는 모습을 보여 준다. "글자 맨 아래에 붙는 자음을 받침이라고 해요. 받침이 붙으면 소리가 바뀌어요." 입을 다물며 [감], 혀를 대며 [간]을 함께 소리 낸다.',
      student: '글자 맨 아래에 자음이 하나 더 붙으면 어떻게 될까요? 같이 보아요.',
      demo: { tool: 'hangul', options: { consonants: ['ㄱ'], vowels: ['ㅏ'], batchim: ['ㅁ', 'ㅇ'], slotHints: true }, sequence: [{ syllable: '가' }, { syllable: '감' }] },
    },
    {
      id: 'main', title: '전개', minutes: 26,
      activities: [
        {
          id: 'a1', title: '활동 1. 받침 하나로 바뀌는 소리', minutes: 9, tool: 'hangul',
          task: '문제 듣기를 눌러 소리를 들어요. 받침만 골라 맨 아래에 붙여요.',
          teacher: '자음·모음은 고정되어 있고 받침 하나만 고른다. 문제 글자는 화면에 쓰지 않고 \'문제 듣기\' 소리로만 준다 — 글자 모양을 맞춰 통과하지 않고 끝소리를 듣고 고르게 하려는 것이다(소리가 나지 않는 기기에서는 글자가 보인다). 같은 \'가\'에 ㅁ과 ㅇ을 번갈아 붙이며 입을 다무는 [감]과 목에서 울리는 [강]을 견주게 한다. 받침을 글자 오른쪽에 붙이려는 학생에게는 교구가 "받침은 맨 아래"라고 알려 준다. 합친 글자는 확인 뒤에만 보인다.',
          levels: {
            // 세 단계 모두 문제 글자는 소리로만(listenTarget), 합친 글자는 확인 뒤에만 보인다(모양 맞추기로 풀지 않게).
            // 쉬움: 받침 3개, 받침마다 입 모양 낱말(입 다물기·혀 닿기·목 울림) / 기본: 받침 4개 / 도전: 받침 6개, 내 글자 듣기 없음
            easy: { lock: ['cho', 'jung'], batchim: ['ㄴ', 'ㅁ', 'ㅇ'], slotHints: true, jongMouth: true, listenTarget: true, revealAfterCheck: true },
            base: { lock: ['cho', 'jung'], batchim: ['ㄱ', 'ㄴ', 'ㅁ', 'ㅇ'], listenTarget: true, revealAfterCheck: true },
            challenge: { lock: ['cho', 'jung'], batchim: ['ㄱ', 'ㄴ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅇ'], speak: false, listenTarget: true, revealAfterCheck: true },
          },
          items: [
            { prompt: '\'가\'에 받침을 붙여요. 문제 듣기를 누르고, 들은 글자를 만들어 보세요.', state: { cho: 'ㄱ', jung: 'ㅏ' }, target: { syllable: '감' }, difficulty: 0.1,
              conclude: '받침 ㅁ을 붙이면 입을 다물며 끝나요. \'가\'가 \'감\'이 되었어요.' },
            { prompt: '이번에는 \'가\'에 ㅇ 받침을 붙여 보세요. 어떤 글자가 될까요?', state: { cho: 'ㄱ', jung: 'ㅏ' }, target: { syllable: '강' }, difficulty: 0.15,
              predict: { q: '\'가\'에 ㅇ 받침을 붙이면 어떤 소리가 날까요?', options: ['가', '감', '강'], answer: 2 },
              conclude: 'ㅁ 받침은 입을 다물고([감]), ㅇ 받침은 목에서 울려요([강]). 받침 하나로 소리가 바뀌어요.' },
            { prompt: '\'무\'에 받침을 붙여요. 문제 듣기를 누르고, 들은 글자를 만들어 보세요.', state: { cho: 'ㅁ', jung: 'ㅜ' }, target: { syllable: '문' }, difficulty: 0.22,
              conclude: '\'문\'이에요. ㅜ처럼 가로로 긴 모음이어도 받침은 맨 아래에 붙어요.' },
            { prompt: '더 해 보기: \'바\'에 받침을 붙여요. 문제 듣기를 누르고, 들은 글자를 만들어 보세요.', state: { cho: 'ㅂ', jung: 'ㅏ' }, target: { syllable: '밥' }, extra: true, difficulty: 0.25, toolOptions: { batchim: ['ㄱ', 'ㅁ', 'ㅂ', 'ㅇ'] } },
          ],
        },
        {
          id: 'a2', title: '활동 2. 받침 있는 글자 만들기', minutes: 9, tool: 'hangul',
          task: '자음, 모음, 받침을 차례로 놓아 받침 있는 글자를 만들어 봅시다.',
          teacher: '"첫소리 자음 → 모음 → 받침" 차례를 손가락으로 짚으며 말하게 한다. \'누\'와 \'눈\'처럼 받침이 있고 없을 때를 견주어 소리 내게 한다. 받침을 모음보다 먼저 놓으면 교구가 모음을 먼저 놓으라고 알려 준다.',
          levels: {
            easy: { consonants: ['ㄱ', 'ㄴ', 'ㅅ'], vowels: ['ㅏ', 'ㅗ', 'ㅜ'], batchim: ['ㄴ', 'ㅇ'], slotHints: true, slotGuide: true },
            base: { consonants: ['ㄱ', 'ㄴ', 'ㅁ', 'ㅅ'], vowels: ['ㅏ', 'ㅗ', 'ㅜ', 'ㅣ'], batchim: ['ㄱ', 'ㄴ', 'ㅁ', 'ㅇ'], revealAfterCheck: true },
            challenge: { consonants: ['ㄱ', 'ㄴ', 'ㄷ', 'ㅁ', 'ㅅ', 'ㅇ'], vowels: ['ㅏ', 'ㅓ', 'ㅗ', 'ㅜ', 'ㅡ', 'ㅣ'], batchim: ['ㄱ', 'ㄴ', 'ㄹ', 'ㅁ', 'ㅇ'], speak: false, revealAfterCheck: true },
          },
          items: [
            { prompt: '\'산\'을 만들어 보세요.', target: { syllable: '산' }, difficulty: 0.15 },
            { prompt: '\'눈\'을 만들어 보세요. \'누\'와 무엇이 다른가요?', target: { syllable: '눈' }, difficulty: 0.2,
              predict: { q: '\'눈\'에는 ㄴ이 몇 번 들어갈까요?', options: ['한 번', '두 번'], answer: 1 },
              conclude: '\'눈\'은 첫소리 ㄴ과 받침 ㄴ, ㄴ이 두 번 들어가요. 받침이 없으면 [누]예요.' },
            { prompt: '\'공\'을 만들어 보세요.', target: { syllable: '공' }, difficulty: 0.2 },
            { prompt: '더 해 보기: \'별\'을 만들어 보세요.', target: { syllable: '별' }, extra: true, difficulty: 0.25, toolOptions: { consonants: ['ㄹ', 'ㅂ', 'ㅅ'], vowels: ['ㅑ', 'ㅕ', 'ㅓ'], batchim: ['ㄴ', 'ㄹ', 'ㅇ'] } },
          ],
        },
        {
          id: 'a3', title: '활동 3. 낱말 글자 만들고 이어 읽기', minutes: 8, tool: 'hangul',
          task: '낱말의 둘째 글자를 만들고, 두 글자를 이어서 소리 내어 읽어 봅시다.',
          teacher: '카드 위에 앞 글자가 보인다("낱말: 가 + ?"). 둘째 글자를 만들면 두 글자를 이어 읽게 한다. 받침 소리가 다음 글자로 넘어가는 낱말(연음)은 이 차시에서 다루지 않는다.',
          levels: {
            easy: { consonants: ['ㄱ', 'ㅂ', 'ㅅ'], vowels: ['ㅏ', 'ㅗ', 'ㅜ'], batchim: ['ㄱ', 'ㅇ'], slotHints: true, slotGuide: true },
            base: { consonants: ['ㄱ', 'ㄹ', 'ㅂ', 'ㅅ'], vowels: ['ㅏ', 'ㅗ', 'ㅜ', 'ㅣ'], batchim: ['ㄱ', 'ㅁ', 'ㅇ'], revealAfterCheck: true },
            challenge: { consonants: ['ㄱ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅅ', 'ㅈ'], vowels: ['ㅏ', 'ㅓ', 'ㅗ', 'ㅜ', 'ㅣ'], batchim: ['ㄱ', 'ㄴ', 'ㅁ', 'ㅂ', 'ㅇ'], speak: false, revealAfterCheck: true },
          },
          items: [
            { prompt: '\'가방\'의 둘째 글자 \'방\'을 만들어 보세요.', target: { syllable: '방' }, difficulty: 0.15, toolOptions: { wordSoFar: '가' },
              conclude: '\'가\'와 \'방\'을 이어 읽으면 \'가방\'이에요.' },
            { prompt: '\'수박\'의 둘째 글자 \'박\'을 만들어 보세요.', target: { syllable: '박' }, difficulty: 0.25, toolOptions: { wordSoFar: '수' },
              conclude: '\'수\'와 \'박\'을 이어 읽으면 \'수박\'이에요. 받침 ㄱ은 [박]처럼 짧게 끊겨요.' },
            { prompt: '더 해 보기: \'사람\'의 둘째 글자 \'람\'을 만들어 보세요.', target: { syllable: '람' }, extra: true, difficulty: 0.3, toolOptions: { consonants: ['ㄹ', 'ㅁ', 'ㅅ'], vowels: ['ㅏ', 'ㅓ', 'ㅗ'], batchim: ['ㄴ', 'ㅁ', 'ㅇ'], wordSoFar: '사' } },
          ],
        },
      ],
    },
    {
      id: 'wrapup', title: '정리', minutes: 8,
      teacher: '"받침은 글자의 어디에 붙였나요?" 손바닥을 글자 틀 아래에 대며 함께 말한다. 출구 질문 1번은 선생님이 \'솜\'을 두 번 또박또박 읽어 준다(화면 글자를 보지 않고 소리로 고르는 읽기 문항). 받침 자리(2번)를 틀린 학생은 다음 시간에 받침 붙이기를 다시 해 본다.',
      exitTicket: [
        { type: 'choice', prompt: '선생님이 읽어 주는 글자를 골라요.', options: ['소', '솜', '송'], answer: 1, difficulty: 0.25, explain: '[솜]은 \'소\' 아래에 받침 ㅁ을 붙인 글자예요. 입을 다물며 끝나요.' },
        { type: 'choice', prompt: '받침은 글자의 어디에 붙이나요?', options: ['→ 오른쪽', '↓ 맨 아래', '↑ 맨 위'], answer: 1, difficulty: 0.1, explain: '받침은 모음 모양과 상관없이 글자 맨 아래에 붙여요.' },
        { type: 'choice', prompt: '\'나\'에 받침 ㅁ을 붙이면 어떤 글자가 될까요?', options: ['남', '낭', '나'], answer: 0, difficulty: 0.2, explain: '\'나\' 아래에 ㅁ을 붙이면 \'남\'이에요.' },
        { type: 'tool', tool: 'hangul', options: { consonants: ['ㄴ', 'ㄷ', 'ㅂ'], vowels: ['ㅏ', 'ㅗ', 'ㅜ'], batchim: ['ㄴ', 'ㅇ'], revealAfterCheck: true }, prompt: '\'돈\'을 만들어 보세요.', target: { syllable: '돈' }, difficulty: 0.25 },
        { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
      ],
    },
  ],
  worksheet: {
    title: '받침 있는 글자 만들기',
    items: [
      { type: 'figure', prompt: '자음, 모음, 받침이 모이면 어떤 글자가 될까요? 아래에 쓰세요.', tool: 'hangul', options: { batchim: [] }, figures: [
        { state: { cho: 'ㄱ', jung: 'ㅏ', jong: 'ㅁ' }, caption: BLANK }, { state: { cho: 'ㄴ', jung: 'ㅜ', jong: 'ㄴ' }, caption: BLANK }, { state: { cho: 'ㄱ', jung: 'ㅗ', jong: 'ㅇ' }, caption: BLANK }], answer: '감, 눈, 공' },
      { type: 'blank', prompt: '받침을 붙여 글자를 쓰세요.', text: '바 + ㅂ = ___     사 + ㄴ = ___     무 + ㄴ = ___', answer: '밥, 산, 문' },
      { type: 'check', prompt: '받침이 있는 글자를 모두 골라 □에 ✓ 하세요.', options: ['나', '강', '소', '물'], answer: '강, 물' },
      { type: 'draw', prompt: '\'공\'을 쓰고, 공 그림을 그려 보세요.', answer: '공 (그림은 자유롭게)' },
    ],
    easy: {
      note: '받침은 글자 맨 아래에 붙여요. 가 → 감, 고 → 공',
      // 쉬운 판: 받침 하나만 붙이는 문항부터, 보고 따라 쓰기를 먼저 한다
      items: [
        { type: 'figure', prompt: '어떤 글자일까요? 쓰세요.', tool: 'hangul', options: { batchim: [] }, figures: [
          { state: { cho: 'ㄱ', jung: 'ㅏ', jong: 'ㅁ' }, caption: BLANK }, { state: { cho: 'ㄱ', jung: 'ㅗ', jong: 'ㅇ' }, caption: BLANK }], answer: '감, 공' },
        { type: 'blank', prompt: '소리 내어 읽고 따라 쓰세요.', text: '산 → ___     눈 → ___', answer: '산, 눈' },
        { type: 'check', prompt: '받침이 있는 글자에 ✓ 하세요.', options: ['고', '곰'], answer: '곰' },
        { type: 'draw', prompt: '\'공\'을 따라 쓰고, 공을 그려 보세요.', answer: '공 (그림은 자유롭게)' },
      ],
    },
  },
  differentiation: {
    easy: '틀에 "자음"·"모음"·"받침" 자리 글씨가 있어요. 활동 1은 받침 3개 가운데 하나만 고르면 되고, 받침 조각마다 입 모양 낱말(입 다물기·혀 닿기·목 울림)이 붙어 있어요. 문제 글자는 소리로 듣고, 합친 글자는 확인 뒤에 보여요.',
    base: '받침 4개 가운데 골라요. 활동 1은 문제 글자를 소리로만 듣고, 합친 글자는 확인을 누른 뒤에만 보여서 끝소리를 먼저 떠올려 만들어요.',
    challenge: '받침이 5~6개로 늘고 ㄹ·ㅂ 받침도 나와요. 내 글자 듣기 없이 스스로 읽고, 더 해 보기(밥·별·사람)가 나와요.',
  },
  teacherNotes: '자주 보이는 어려움: ① 받침을 글자 오른쪽에 붙인다(가ㅁ) → 받침은 모음 모양과 상관없이 맨 아래라는 것을 손바닥을 틀 아래에 대며 익힌다. 교구도 오른쪽에 놓으면 이 까닭을 말해 준다. ② 받침을 첫소리와 같은 소리로 길게 읽는다([가므]) → 입을 다물거나(ㅁ) 혀를 대고(ㄴ) 끝내는 소리임을 거울 보며 확인한다. ③ ㄴ과 ㅇ, ㅁ과 ㅇ 받침 소리를 헷갈린다 → 감/강, 산/상처럼 받침만 다른 짝을 소리 내어 견준다(활동 1). ④ 같은 자음이 두 번 들어가는 글자(눈)에서 하나를 빠뜨린다 → 첫소리와 받침을 따로 짚는다. ⑤ 모음보다 받침을 먼저 놓는다 → 쓰는 차례(자음 → 모음 → 받침)를 말로 따라 한다. 받침 소리가 다음 글자로 넘어가는 낱말(음악[으막])은 이후 차시에서 다룬다.',
});
})();
