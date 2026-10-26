/* 4학년 2학기 1. 분수의 덧셈과 뺄셈 — 분모가 같은 진분수의 덧셈(합이 1 이하)
 * 대표 오개념: 분모끼리도 더한다(5분의 2 + 5분의 1 = 10분의 3). 원인은 '단위분수가 몇 개인가'를 보지 않는 데 있다.
 * 3학년 분수 차시(g3-math-fraction)와 같은 띠·피자 교구를 써서 그림 → 식으로 옮긴다.
 */
PaperLessons.register({
  id: 'g4-math-fraction-add',
  schema: 'edu-lesson.v1',
  catalog: { unit: 'g4-수학-2학기-1', lesson: 2 },
  grade: 4, subject: '수학', unitTitle: '1. 분수의 덧셈과 뺄셈',
  title: '분모가 같은 진분수의 덧셈',
  objective: '분모가 같은 진분수의 덧셈 원리를 띠 그림으로 이해하고, 그 계산을 할 수 있다.',
  standards: ['[4수01-15]'],
  minutes: 40,
  formats: ['chromebook', 'projector', 'print'],
  illustration: {
    prompt: "Layered paper-cut illustration of a long paper strip cut into five exactly equal rectangles on a picnic table, two rectangles colored peach and one more rectangle colored mint sliding in right next to them, the other two rectangles left plain cream, no words or numbers anywhere, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.",
    image: 'img/g4-math-fraction-add.webp', size: [1200, 800],
    scene: { viewBox: [480, 270], layers: [
      { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 104, y: 50 }, { motif: 'cloud', x: 290, y: 36, s: 0.7 },
      { motif: 'hills', y: 206, colors: ['mint', 'peach', 'buttercup'] },
      { motif: 'tree', x: 70, y: 214, s: 0.9 }, { motif: 'flower', x: 360, y: 226 }, { motif: 'flower', x: 400, y: 230, color: 'sky' },
      { motif: 'leaf', x: 200, y: 112, color: 'peach', r: -20 }, { motif: 'leaf', x: 276, y: 116, color: 'mint', r: 30 },
      { motif: 'text', x: 240, y: 156, text: '분수끼리 더해 볼까요?', size: 22 },
    ] },
  },
  stages: [
    {
      id: 'intro', title: '도입', minutes: 6,
      teacher: '"피자 5조각 중 2조각을 먹고 1조각을 더 먹었어요. 먹은 양은 전체의 얼마일까요?" 먼저 어림하게 하고 몇 명이 "10분의 3"이라고 답하는지 본다. 시연 단추로 5분의 2인 띠에 한 조각을 더 색칠하는 모습을 보여 준다.',
      student: '종이띠 5조각 중 2조각이 칠해져 있어요. 1조각을 더 칠하면 전체의 얼마가 칠해질까요?',
      demo: { tool: 'fraction', options: { shape: 'strip', startN: 5, min: 5, max: 5, locked: [0, 1], color: 'mint' }, sequence: [{ den: 5, num: 3 }] },
    },
    {
      id: 'main', title: '전개', minutes: 28,
      activities: [
        {
          id: 'a1', title: '활동 1. 띠 그림으로 더하기', minutes: 9, tool: 'fraction',
          task: '복숭아색은 처음부터 있던 분수예요. 더하는 분수만큼 조각을 더 색칠해서, 합이 얼마인지 알아봅시다.',
          teacher: '"더한 다음에도 띠를 나눈 조각 수는 그대로인가요?" 처음 분수(복숭아색)와 더한 분수(초록색)의 조각 수를 세게 하고, 단위분수가 몇 개가 되었는지로 말하게 한다.',
          options: { shape: 'strip', color: 'mint' },
          levels: {
            easy: { showTerms: true },
            base: {},
            challenge: { hideFraction: true },
          },
          items: [
            { prompt: '5분의 2 + 5분의 1을 띠에 색칠해 보세요.', toolOptions: { startN: 5, min: 5, max: 5, locked: [0, 1] }, state: { n: 5 }, target: { den: 5, num: 3 }, difficulty: 0.12,
              predict: { q: '5분의 2 + 5분의 1은 얼마일까요?', options: ['5분의 3', '10분의 3', '잘 모르겠어요'], answer: 0 },
              conclude: '5분의 1이 2개, 1개 더해 3개 — 5분의 3이에요. 분모(나눈 조각 수)는 그대로예요.' },
            { prompt: '8분의 3 + 8분의 4를 띠에 색칠해 보세요.', toolOptions: { startN: 8, min: 8, max: 8, locked: [0, 1, 2] }, state: { n: 8 }, target: { den: 8, num: 7 }, difficulty: 0.16 },
            { prompt: '6분의 1 + 6분의 5를 띠에 색칠해 보세요.', toolOptions: { startN: 6, min: 6, max: 6, locked: [0] }, state: { n: 6 }, target: { den: 6, num: 6 }, difficulty: 0.2,
              predict: { q: '6분의 1 + 6분의 5는 1보다 클까요?', options: ['1보다 커요', '1과 같아요', '1보다 작아요'], answer: 1 },
              conclude: '6분의 6은 띠 전체, 곧 1과 같아요.' },
          ],
        },
        {
          id: 'a2', title: '활동 2. 그림을 보고 덧셈식의 답 쓰기', minutes: 10, tool: 'fraction',
          task: '색칠된 띠를 보고 덧셈의 답을 분수로 써 봅시다. 분모와 분자를 단추로 정해요.',
          teacher: '"분모에는 무엇을 쓰나요? 분자에는?" 분모끼리 더한 학생(10분의 5 등)에게는 교구가 "분모를 더하면 한 조각의 크기가 바뀌어요"라고 알려 준다. 계산 방법(분모는 그대로, 분자끼리 더함)을 학생 말로 정리하게 한다.',
          options: { shape: 'strip', write: true, color: 'mint' },
          levels: { easy: { showTerms: true }, base: {}, challenge: {} },
          items: [
            { prompt: '7분의 2 + 7분의 3 = ?', toolOptions: { locked: [0, 1] }, state: { n: 7, colored: [0, 1, 2, 3, 4] }, target: { den: 7, num: 5 }, difficulty: 0.2,
              predict: { q: '답의 분모는 무엇일까요?', options: ['7', '14', '5'], answer: 0 } },
            { prompt: '9분의 4 + 9분의 4 = ?', toolOptions: { locked: [0, 1, 2, 3] }, state: { n: 9, colored: [0, 1, 2, 3, 4, 5, 6, 7] }, target: { den: 9, num: 8 }, difficulty: 0.22 },
            { prompt: '4분의 1 + 4분의 2 = ?', toolOptions: { locked: [0] }, state: { n: 4, colored: [0, 1, 2] }, target: { den: 4, num: 3 }, difficulty: 0.18,
              conclude: '분모가 같은 분수끼리 더할 때는 분모는 그대로 두고 분자끼리 더해요.' },
          ],
        },
        {
          id: 'a3', title: '활동 3. 이야기 문제를 그림으로 풀기', minutes: 9, tool: 'fraction', pair: true,
          task: '이야기를 읽고 처음 양과 더한 양을 피자에 색칠해 답을 알아봅시다.',
          teacher: '짝과 한 사람이 이야기를 덧셈식으로 말하고 다른 사람이 피자에 색칠해 확인한 뒤 역할을 바꾼다. 끝나면 공책에 식과 답을 쓰게 한다.',
          options: { shape: 'pizza', color: 'mint' },
          levels: { easy: { showTerms: true }, base: {}, challenge: { hideFraction: true } },
          items: [
            { prompt: '피자 한 판을 똑같이 8조각으로 나누었어요. 민지가 3조각, 동생이 2조각을 먹었어요. 두 사람이 먹은 피자는 전체의 얼마인지 색칠해 보세요.', toolOptions: { startN: 8, min: 8, max: 8, locked: [0, 1, 2] }, state: { n: 8 }, target: { den: 8, num: 5 }, difficulty: 0.2 },
            { prompt: '피자 한 판을 똑같이 10조각으로 나누었어요. 점심에 10분의 4, 저녁에 10분의 3을 먹었어요. 먹은 피자는 전체의 얼마인지 색칠해 보세요.', toolOptions: { startN: 10, min: 10, max: 10, locked: [0, 1, 2, 3] }, state: { n: 10 }, target: { den: 10, num: 7 }, difficulty: 0.24 },
            { extra: true, prompt: '피자 12조각 중 12분의 5를 먹었어요. 남은 피자를 모두 먹으면 먹은 피자는 모두 얼마일까요? 색칠해 보세요.', toolOptions: { startN: 12, min: 12, max: 12, locked: [0, 1, 2, 3, 4] }, state: { n: 12 }, target: { den: 12, num: 12 }, difficulty: 0.26 },
          ],
        },
      ],
    },
    {
      id: 'wrapup', title: '정리', minutes: 6,
      teacher: '"5분의 2 + 5분의 1이 10분의 3이 아닌 까닭을 그림으로 설명해 볼까요?" 출구 질문에서 분모끼리 더한 학생을 확인하고, 그 학생에게는 띠 그림을 다시 그려 보게 한다.',
      exitTicket: [
        { type: 'tool', tool: 'fraction', options: { shape: 'strip', write: true, color: 'mint', locked: [0, 1, 2] }, state: { n: 6, colored: [0, 1, 2, 3, 4] }, prompt: '6분의 3 + 6분의 2 = ?', target: { den: 6, num: 5 }, difficulty: 0.22 },
        { type: 'choice', prompt: '3분의 1 + 3분의 1을 바르게 계산한 것은 무엇인가요?', options: ['6분의 2', '3분의 2', '3분의 1'], answer: 1, difficulty: 0.2,
          explain: '3분의 1이 2개이므로 3분의 2예요. 분모를 더하면(6분의 2) 한 조각의 크기가 바뀌어 버려요.' },
        { type: 'choice', prompt: '분모가 같은 분수끼리 더할 때 분모는 어떻게 하나요?', options: ['분모끼리 더해요', '분모는 그대로 써요', '분모끼리 곱해요'], answer: 1, difficulty: 0.12,
          explain: '전체를 나눈 조각 수(분모)는 그대로이고, 색칠한 조각 수(분자)만 더해요.' },
        { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
      ],
    },
  ],
  worksheet: {
    title: '분모가 같은 진분수의 덧셈',
    items: [
      { type: 'figure', prompt: '그림을 보고 덧셈식을 완성하세요.', tool: 'fraction', options: { shape: 'strip', frame: true, locked: [0, 1] }, figures: [
        { state: { n: 5, colored: [0, 1, 2] }, caption: '5분의 2 + 5분의 1 = (     )' }], answer: '5분의 3' },
      { type: 'blank', prompt: '계산해 보세요.', text: '7분의 3 + 7분의 2 = ___ ,  9분의 4 + 9분의 5 = ___ ,  11분의 6 + 11분의 4 = ___', answer: '7분의 5, 9분의 9(=1), 11분의 10' },
      { type: 'choice', prompt: '지호는 "8분의 3 + 8분의 2 = 16분의 5"라고 계산했어요. 바르게 고친 답은 무엇인가요?', options: ['16분의 5', '8분의 5', '8분의 6'], answer: '8분의 5' },
      { type: 'short', prompt: '지호의 계산이 왜 틀렸는지 그림이나 말로 설명해 보세요.', answer: '분모끼리 더하면 조각의 크기가 달라진다. 8분의 1이 3개와 2개, 모두 5개이므로 8분의 5이다.' },
      { type: 'draw', prompt: '띠를 똑같이 6칸으로 나누고 6분의 2 + 6분의 3을 두 가지 색으로 색칠한 뒤 답을 쓰세요.', answer: '두 색으로 2칸, 3칸 — 6분의 5' },
    ],
    easy: { note: '분모 = 전체를 똑같이 나눈 조각 수(더해도 그대로), 분자 = 색칠한 조각 수(더해요). 예: 5분의 2 + 5분의 1 → 5분의 1이 2개 + 1개 = 3개 → 5분의 3.' },
  },
  differentiation: {
    easy: '분자·분모가 무엇을 뜻하는지 글자로 함께 보이고, 처음 분수(복숭아색)와 더한 분수(초록색)가 다른 색으로 칠해져 "5분의 1이 ○개"가 보여요.',
    challenge: '활동 1·3에서 분수 읽기 칸이 숨겨져 조각 수를 직접 세어야 하고, 합이 1이 되는 추가 문항이 있어요.',
  },
  teacherNotes: '가장 흔한 실수는 분모끼리도 더하는 것(5분의 2 + 5분의 1 = 10분의 3)이다. 그림에서 전체를 나눈 조각 수는 더한 뒤에도 그대로라는 것, 더한 것은 "5분의 1이 몇 개인가"라는 것을 짚는다. 교구의 쓰기 문항은 분모끼리 더한 답을 알아보고 따로 알려 준다. 처음 분수는 지울 수 없게 잠겨 있어 "처음 + 더한 양"이 색으로 나뉘어 보인다. 합이 1을 넘는 덧셈(대분수)은 다음 차시에서 다룬다. 3학년에서 배운 단위분수(분모분의 1) 개념을 먼저 떠올리게 하면 좋다.',
});
