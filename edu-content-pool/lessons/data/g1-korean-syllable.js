/* 1학년 1학기 국어 — 글자를 만들어요: 자음과 모음을 모아 받침 없는 글자 만들기 */
(function () {
const BLANK = '(\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0)';
PaperLessons.register({
  id: 'g1-korean-syllable',
  schema: 'edu-lesson.v1',
  catalog: { unit: 'g1-국어-1학기-1', lesson: 6 },
  grade: 1, subject: '국어', unitTitle: '1. 글자를 만들어요',
  title: '자음과 모음을 모아 글자 만들기',
  objective: '자음과 모음을 모아 받침 없는 글자를 만들고 소리 내어 읽을 수 있다.',
  standards: ['[2국02-01]', '[2국02-05]'],
  minutes: 40,
  formats: ['chromebook', 'projector', 'print'],
  illustration: {
    prompt: 'Layered paper-cut illustration of friendly paper letter blocks stacked into a little house in a garden, with Korean consonant and vowel shapes floating like kites, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.',
    scene: { viewBox: [480, 270], layers: [
      { motif: 'sun', x: 72, y: 60, s: 0.8 }, { motif: 'cloud', x: 230, y: 48, s: 0.8 }, { motif: 'cloud', x: 390, y: 64 },
      { motif: 'hills', y: 198, colors: ['sky', 'mint', 'buttercup'] },
      { motif: 'house', x: 120, y: 218 }, { motif: 'tree', x: 382, y: 216, color: 'mint' },
      { motif: 'flower', x: 200, y: 240 }, { motif: 'flower', x: 262, y: 244, color: 'lavender' }, { motif: 'flower', x: 318, y: 238, color: 'peach' },
      { motif: 'star', x: 330, y: 110, color: 'rose' }, { motif: 'star', x: 150, y: 104, color: 'sky' },
      { motif: 'text', x: 240, y: 150, text: 'ㄴ + ㅏ = 나', size: 26 },
    ] },
  },
  stages: [
    {
      id: 'intro', title: '도입', minutes: 6,
      teacher: '"나무 그림을 보세요. 나무는 어떤 글자로 쓸까요?" 시연 단추를 눌러 ㄴ과 ㅏ가 모여 "나", ㅁ과 ㅜ가 모여 "무"가 되는 모습을 보여 준다. 모음에 따라 틀 모양이 바뀌는 것을 짚는다. 1학기 초라 도움이 많이 필요한 반은 쉬움(링크에 &level=easy)으로 시작하고, 활동 2부터 기본으로 올린다.',
      student: '자음과 모음이 만나면 글자가 돼요. 같이 보아요.',
      demo: { tool: 'hangul', options: { consonants: ['ㄴ', 'ㅁ', 'ㅇ'], vowels: ['ㅏ', 'ㅜ', 'ㅣ'], slotHints: true }, sequence: [{ syllable: '나' }, { syllable: '무' }] },
    },
    {
      id: 'main', title: '전개', minutes: 26,
      activities: [
        {
          id: 'a1', title: '활동 1. 자음 오른쪽에 모음 붙이기', minutes: 9, tool: 'hangul',
          task: 'ㅏ, ㅓ, ㅣ는 세로로 길어요. 자음 오른쪽에 붙여 글자를 만들어 봅시다.',
          teacher: '"ㄱ에 ㅏ를 붙이면?" 다 만들면 소리 듣기 단추로 읽어 보고, 따라 읽게 한다.',
          levels: {
            // 쉬움: 꼭 필요한 조각 6개, 자리 글씨, 모음이 저절로 알맞은 자리로 감
            // 기본: 조각 7개, 모음을 누른 뒤 '오른쪽'·'아래' 자리를 직접 고름 / 도전: 조각 12개(거울 모양 ㅑ·ㅕ 섞임), 소리 듣기 없음
            easy: { consonants: ['ㄱ', 'ㄴ', 'ㅁ'], vowels: ['ㅏ', 'ㅓ', 'ㅣ'], slotHints: true, autoSlot: true },
            base: { consonants: ['ㄱ', 'ㄴ', 'ㄷ', 'ㅁ'], vowels: ['ㅏ', 'ㅓ', 'ㅣ'] },
            challenge: { consonants: ['ㄱ', 'ㄴ', 'ㄷ', 'ㅁ', 'ㅂ', 'ㅇ'], vowels: ['ㅏ', 'ㅑ', 'ㅓ', 'ㅕ', 'ㅣ', 'ㅗ'], speak: false },
          },
          items: [
            { prompt: '\'가\'를 만들어 보세요.', target: { syllable: '가' }, difficulty: 0.05 },
            { prompt: '\'너\'를 만들어 보세요.', target: { syllable: '너' }, difficulty: 0.12 },
            { prompt: '\'미\'를 만들어 보세요.', target: { syllable: '미' }, difficulty: 0.05 },
          ],
        },
        {
          id: 'a2', title: '활동 2. 자음 아래에 모음 붙이기', minutes: 9, tool: 'hangul',
          task: 'ㅗ, ㅜ, ㅡ는 가로로 길어요. 자음 아래에 붙여 글자를 만들어 봅시다.',
          teacher: '"ㅗ를 자음 오른쪽에 놓으면 어떻게 될까요?" 일부러 틀린 자리에 놓아 보며 모음 자리를 확인한다.',
          levels: {
            easy: { consonants: ['ㄱ', 'ㅅ', 'ㅇ'], vowels: ['ㅗ', 'ㅜ'], slotHints: true, autoSlot: true, silentMark: true },
            base: { consonants: ['ㄱ', 'ㄷ', 'ㅅ', 'ㅇ'], vowels: ['ㅏ', 'ㅗ', 'ㅜ', 'ㅡ'] },
            challenge: { consonants: ['ㄱ', 'ㄴ', 'ㄷ', 'ㅅ', 'ㅇ', 'ㅈ'], vowels: ['ㅏ', 'ㅗ', 'ㅛ', 'ㅜ', 'ㅠ', 'ㅡ'], speak: false },
          },
          items: [
            { prompt: '음매! \'소\'를 만들어 보세요.', target: { syllable: '소' }, difficulty: 0.12 },
            { prompt: '\'구두\'의 \'구\'를 만들어 보세요.', target: { syllable: '구' }, difficulty: 0.15 },
            { prompt: '\'우유\'의 \'우\'를 만들어 보세요. ㅇ은 소리가 없어요.', target: { syllable: '우' }, difficulty: 0.25 },
          ],
        },
        {
          id: 'a3', title: '활동 3. 낱말 글자 만들기', minutes: 8, tool: 'hangul',
          task: '낱말의 글자를 하나씩 만들어 봅시다. 다 만들면 소리 내어 읽어요.',
          teacher: '"나무"는 "나"와 "무" 두 글자예요. ㅇ은 첫소리에서 소리가 나지 않아 "오", "이"처럼 모음 소리만 난다는 것을 알려 준다.',
          levels: {
            easy: { consonants: ['ㄴ', 'ㅁ', 'ㅇ'], vowels: ['ㅏ', 'ㅜ', 'ㅗ', 'ㅣ'], slotHints: true, autoSlot: true, silentMark: true },
            base: { consonants: ['ㄴ', 'ㅁ', 'ㅂ', 'ㅇ'], vowels: ['ㅏ', 'ㅓ', 'ㅣ', 'ㅗ', 'ㅜ'] },
            challenge: { consonants: ['ㄱ', 'ㄴ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅇ'], vowels: ['ㅏ', 'ㅓ', 'ㅗ', 'ㅜ', 'ㅡ', 'ㅣ'], speak: false },
          },
          items: [
            { prompt: '\'나무\'의 첫 글자 \'나\'를 만들어 보세요.', target: { syllable: '나' }, difficulty: 0.05 },
            { prompt: '\'나무\'의 둘째 글자 \'무\'를 만들어 보세요.', target: { syllable: '무' }, difficulty: 0.15 },
            { prompt: '\'오이\'의 첫 글자 \'오\'를 만들어 보세요. ㅇ은 소리가 없어요.', target: { syllable: '오' }, difficulty: 0.22 },
            { prompt: '\'오이\'의 둘째 글자 \'이\'를 만들어 보세요.', target: { syllable: '이' }, difficulty: 0.15 },
          ],
        },
      ],
    },
    {
      id: 'wrapup', title: '정리', minutes: 8,
      teacher: '"ㅏ는 어디에 붙였나요? ㅗ는요?" 손으로 오른쪽·아래를 가리키며 함께 말한다. 출구 질문에서 모음 자리를 틀린 학생을 다음 시간에 먼저 살핀다.',
      exitTicket: [
        { type: 'choice', prompt: 'ㄱ과 ㅏ를 모으면 어떤 글자가 될까요?', options: ['가', '거', '고'], answer: 0, difficulty: 0.05, explain: 'ㄱ 오른쪽에 ㅏ를 붙이면 \'가\'예요.' },
        { type: 'choice', prompt: 'ㅗ는 자음의 어디에 붙나요?', options: ['오른쪽', '아래'], answer: 1, difficulty: 0.2, explain: 'ㅗ는 가로로 길어서 자음 아래에 붙여요.' },
        { type: 'tool', tool: 'hangul', options: { consonants: ['ㄴ', 'ㅁ', 'ㅂ'], vowels: ['ㅏ', 'ㅗ', 'ㅜ'] }, prompt: '\'모\'를 만들어 보세요.', target: { syllable: '모' }, difficulty: 0.15 },
        { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
      ],
    },
  ],
  worksheet: {
    title: '자음과 모음 모으기',
    items: [
      { type: 'figure', prompt: '자음과 모음이 모이면 어떤 글자가 될까요? 아래에 쓰세요.', tool: 'hangul', figures: [
        { state: { cho: 'ㄴ', jung: 'ㅏ' }, caption: BLANK }, { state: { cho: 'ㄱ', jung: 'ㅗ' }, caption: BLANK }, { state: { cho: 'ㅁ', jung: 'ㅣ' }, caption: BLANK }], answer: '나, 고, 미' },
      { type: 'blank', prompt: '자음과 모음을 모아 글자를 쓰세요.', text: 'ㄷ + ㅏ = ___     ㅅ + ㅜ = ___     ㅇ + ㅣ = ___', answer: '다, 수, 이' },
      { type: 'check', prompt: '모음이 자음 아래에 붙은 글자를 모두 골라 □에 ✓ 하세요.', options: ['너', '도', '리', '부'], answer: '도, 부' },
      { type: 'draw', prompt: '\'나무\'를 쓰고, 나무 그림을 그려 보세요.', answer: '나무 (그림은 자유롭게)' },
    ],
    easy: {
      note: 'ㅏ ㅓ ㅣ는 자음 오른쪽에, ㅗ ㅜ ㅡ는 자음 아래에 붙여요.',
      // 쉬운 판: 글자 수를 줄이고, 새로 만들어 쓰기보다 보고 따라 쓰기를 먼저 한다
      items: [
        { type: 'figure', prompt: '두 조각이 모이면 어떤 글자일까요? 쓰세요.', tool: 'hangul', figures: [
          { state: { cho: 'ㄴ', jung: 'ㅏ' }, caption: BLANK }, { state: { cho: 'ㅁ', jung: 'ㅜ' }, caption: BLANK }], answer: '나, 무' },
        { type: 'blank', prompt: '소리 내어 읽고 따라 쓰세요.', text: '가 → ___     소 → ___     오 → ___', answer: '가, 소, 오' },
        { type: 'check', prompt: '모음이 아래에 붙은 글자에 ✓ 하세요.', options: ['나', '소'], answer: '소' },
        { type: 'draw', prompt: '\'나무\'를 따라 쓰고, 나무를 그려 보세요.', answer: '나무 (그림은 자유롭게)' },
      ],
    },
  },
  differentiation: {
    easy: '꼭 필요한 조각만 있고 틀에 "자음"·"모음" 자리가 보이며, 모음이 알맞은 자리로 저절로 가요. ㅇ 조각에 "소리 없음"이 붙어 있어요.',
    base: '모음을 누른 뒤 틀의 오른쪽·아래 자리를 직접 골라요. 맞지 않는 자리를 고르면 까닭을 말해 줘요.',
    challenge: '조각이 12개로 늘고 ㅑ·ㅕ·ㅛ·ㅠ처럼 비슷한 모음이 섞여요. 소리 듣기 없이 스스로 읽어요.',
  },
  teacherNotes: '자주 보이는 어려움: ① 모음 자리를 헷갈린다(ㅗ를 자음 오른쪽에 붙임) → 세로로 긴 모음은 오른쪽, 가로로 긴 모음은 아래라는 것을 몸으로(팔 세우기·눕히기) 익힌다. ② 모음을 먼저 쓰고 자음을 뒤에 쓴다 → 글자는 자음(첫소리)부터 쓴다. ③ ㅇ에도 소리가 있다고 생각한다 → 첫소리 ㅇ은 소리가 없어 "오", "이"는 모음 소리만 난다. ④ 자음 이름(기역, 니은)과 글자 속 소리를 섞는다 → "ㄱ의 이름은 기역, 가에서는 [ㄱ] 소리"처럼 구분해 준다. ⑤ ㅓ와 ㅏ, ㅗ와 ㅜ의 짧은 획 방향을 바꿔 쓴다 → 소리를 내며 획의 방향을 손가락으로 따라 그린다.',
});
})();
