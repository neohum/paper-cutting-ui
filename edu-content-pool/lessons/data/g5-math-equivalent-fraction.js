/* 5학년 1학기 수학 4. 약분과 통분 — 크기가 같은 분수 만들기와 약분하기 */
PaperLessons.register({
  id: 'g5-math-equivalent-fraction',
  schema: 'edu-lesson.v1',
  catalog: { unit: 'g5-수학-1학기-4', lesson: 2 },
  grade: 5, subject: '수학', unitTitle: '4. 약분과 통분',
  title: '크기가 같은 분수 만들기와 약분하기',
  objective: '분모와 분자를 0이 아닌 같은 수로 나누어 크기가 같은 분수를 만들고 분수를 약분할 수 있다.',
  standards: ['[6수01-06]'],
  minutes: 40,
  formats: ['chromebook', 'projector', 'print'],
  illustration: {
    prompt: "Layered paper-cut illustration of two long straight pastel paper ribbons of exactly the same length laid one above the other on a classroom desk with scissors, the top ribbon cut into eight equal pieces with the first six pieces colored, the bottom ribbon cut into four equal pieces with the first three pieces colored, so that both colored parts end at exactly the same point, with no letters or numbers anywhere, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.",
    image: 'img/g5-math-equivalent-fraction.webp', size: [1200, 800],
    scene: { viewBox: [480, 270], layers: [
      { motif: 'sun', x: 412, y: 58, s: 0.8 }, { motif: 'cloud', x: 104, y: 52 }, { motif: 'cloud', x: 280, y: 40, s: 0.6 },
      { motif: 'hills', y: 210, colors: ['mint', 'buttercup', 'sky'] },
      { motif: 'house', x: 96, y: 226, color: 'peach' }, { motif: 'tree', x: 390, y: 224 },
      { motif: 'text', x: 240, y: 150, text: '조각 수가 달라도 크기는 같을 수 있을까요?', size: 20 },
    ] },
  },
  stages: [
    {
      id: 'intro', title: '도입', minutes: 6,
      teacher: '"피자 8조각 가운데 6조각을 먹은 것과, 4조각으로 자른 피자에서 3조각을 먹은 것은 누가 더 많이 먹었을까요?" 학생 생각을 들은 뒤 시연 단추로 아래 띠가 4조각, 색칠 3조각이 되어 위 띠(6/8)와 색칠한 끝이 같은 자리에서 끝나는 모습을 보여 준다. "조각 수가 달라도 크기가 같을 수 있구나"로 오늘의 물음을 연다.',
      student: '조각 수가 다른 두 분수의 크기가 같을 수 있을지 생각해 봅시다.',
      demo: { tool: 'fracstrips', options: { top: [6, 8], showEqual: true }, sequence: [{ equalTo: [6, 8], den: 4 }] },
    },
    {
      id: 'main', title: '전개', minutes: 27,
      activities: [
        {
          id: 'a1', title: '활동 1. 띠로 크기가 같은 분수 만들기', minutes: 11, tool: 'fracstrips',
          task: '아래 띠의 조각 수(분모)를 바꾸고 조각을 눌러 색칠해요. 색칠한 끝이 위 띠와 같은 자리에서 끝나면 두 분수는 크기가 같아요.',
          teacher: '"분모를 2배로 늘렸더니 분자는 어떻게 되었나요?" 곱한 수와 나눈 수를 칠판에 화살표로 적는다(2/3 → ×2 → 4/6). 3번 문항(6/8 → 4조각)은 분모를 나누는 경우라 많이 틀린다 — 분모만 바꾸고 분자 6을 그대로 두는 학생에게 띠 끝을 짚어 보게 한다. 4번은 분모와 분자에 같은 수를 "더하는" 오개념을 고르기로 확인한다.',
          levels: { easy: { showMarks: true, showEqual: true }, base: {}, challenge: { noCuts: true } },
          items: [
            { prompt: '위 띠는 1/2이에요. 아래 띠를 4조각으로 나누고, 1/2과 크기가 같게 색칠하세요.', toolOptions: { top: [1, 2] }, target: { equalTo: [1, 2], den: 4 }, difficulty: 0.02,
              predict: { q: '1/2과 크기가 같도록 4조각 띠에는 몇 조각을 색칠해야 할까요?', options: ['1조각', '2조각', '3조각'], answer: 1 },
              conclude: '1/2 = 2/4 — 분모와 분자에 똑같이 2를 곱했어요.' },
            { prompt: '위 띠는 2/3이에요. 아래 띠를 6조각으로 나누어 2/3과 크기가 같은 분수를 만드세요.', toolOptions: { top: [2, 3] }, target: { equalTo: [2, 3], den: 6 }, difficulty: 0.1, reveal: 'after-check' },
            { prompt: '위 띠는 6/8이에요. 아래 띠를 4조각으로 나누어 6/8과 크기가 같은 분수를 만드세요.', toolOptions: { top: [6, 8] }, target: { equalTo: [6, 8], den: 4 }, difficulty: 0.18, reveal: 'after-check',
              predict: { q: '분모를 8에서 4로 바꾸면 분자 6은 어떻게 해야 할까요?', options: ['그대로 6', '2로 나누어 3', '4를 빼서 2'], answer: 1 },
              conclude: '분모를 2로 나누었으니 분자도 2로 나눠요. 분모와 분자를 0이 아닌 같은 수로 곱하거나 나누면 크기가 같은 분수가 돼요.' },
            { prompt: '3/4과 9/12는 크기가 같아요. 띠를 보고 물음에 답하세요.', toolOptions: { top: [3, 4], showEqual: true,
              ask: { q: '3/4을 9/12로 만들 때 분모와 분자에 무엇을 했나요?', choices: ['분모와 분자에 똑같이 3을 곱했어요', '분모와 분자에 똑같이 6을 더했어요', '분자에만 3을 곱했어요'],
                why: [null, '3 + 6 = 9이지만 4 + 6 = 10이에요. 같은 수를 더하면 크기가 같은 분수가 되지 않아요.', '분자에만 곱하면 3/4이 9/4가 되어 1보다 커져요. 분모에도 같은 수를 곱해요.'], hint: '4 × □ = 12, 3 × □ = 9에서 □는 얼마일까요?' } },
              state: { num: 9, den: 12 }, target: { ask: 0 }, difficulty: 0.12 },
            { prompt: '더 해 보기: 위 띠는 8/12이에요. 8/12과 크기가 같은 분수 가운데 분모가 가장 작은 분수를 아래 띠로 만드세요.', toolOptions: { top: [8, 12] }, target: { equalTo: [8, 12], smallest: true }, extra: true, difficulty: 0.25, reveal: 'after-check' },
          ],
        },
        {
          id: 'a2', title: '활동 2. 약분하기', minutes: 10, tool: 'fracstrips',
          task: '분모와 분자를 공약수로 나누는 것을 약분한다고 해요. 나눌 수를 고르고, 약분한 분수의 분자와 분모를 써요.',
          teacher: '"12와 18을 모두 나누어떨어지게 하는 수에는 무엇이 있나요?" 공약수(1, 2, 3, 6)를 먼저 찾게 한다. 2로 나누면 6/9가 되어 아직 더 약분할 수 있고, 최대공약수 6으로 나누면 한 번에 기약분수 2/3이 된다는 것을 비교한다. 분모만 나누는 학생에게는 아래 띠의 색칠한 끝이 위 띠와 어긋나는 것을 보여 준다.',
          levels: { easy: { mode: 'divide', markCommon: true, showEqual: true }, base: { mode: 'divide' }, challenge: { mode: 'divide', hideStrip: true } },
          items: [
            { prompt: '12/18의 분모와 분자를 2로 나누어 약분하세요.', toolOptions: { top: [12, 18] }, target: { reduce: [12, 18], div: 2 }, difficulty: 0.08 },
            { prompt: '12/18을 기약분수(더 약분할 수 없는 분수)로 나타내세요.', toolOptions: { top: [12, 18] }, target: { reduce: [12, 18], lowest: true }, difficulty: 0.2, reveal: 'after-check',
              predict: { q: '12와 18을 모두 나누어떨어지게 하는 가장 큰 수는 무엇일까요?', options: ['2', '3', '6'], answer: 2 },
              conclude: '최대공약수 6으로 나누면 한 번에 기약분수 2/3이 돼요.' },
            { prompt: '8/20을 기약분수로 나타내세요.', toolOptions: { top: [8, 20], divisors: [2, 3, 4, 5, 8] }, target: { reduce: [8, 20], lowest: true }, difficulty: 0.2, reveal: 'after-check' },
            { prompt: '더 해 보기: 18/24을 기약분수로 나타내세요.', toolOptions: { top: [18, 24], divisors: [2, 3, 4, 6, 8] }, target: { reduce: [18, 24], lowest: true }, extra: true, difficulty: 0.25, reveal: 'after-check' },
          ],
        },
        {
          id: 'a3', title: '활동 3. 짝과 크기가 같은 분수 설명하기', minutes: 6, tool: 'fracstrips', pair: true,
          task: '한 사람이 아래 띠로 4/6과 크기가 같은 분수를 만들면, 짝은 분모와 분자에 무엇을 했는지 말해요. 번갈아 해 봅시다.',
          teacher: '말할 문장 틀을 칠판에 쓴다: "4/6과 ___/___은 크기가 같아. 분모와 분자를 똑같이 ___로 나누었기(곱했기) 때문이야." 띠의 색칠한 끝을 손가락으로 짚으며 말하게 한다.',
          levels: { easy: { showMarks: true, showEqual: true }, base: {}, challenge: { noCuts: true } },
          items: [{ prompt: '짝과 번갈아 "4/6과 ___/___은 크기가 같아. 분모와 분자를 똑같이 ___로 나누었기(곱했기) 때문이야."라고 말한 뒤 "다 했어요"를 누르세요.', free: true, talk: true, toolOptions: { top: [4, 6] }, difficulty: 0 }],
        },
      ],
    },
    {
      id: 'wrapup', title: '정리', minutes: 7,
      teacher: '"크기가 같은 분수는 어떻게 만들 수 있나요? 약분은 무엇인가요?" 같은 수를 곱하거나 나누기, 공약수로 나누기(약분), 기약분수 세 낱말을 정리한다. 출구 3번에서 2/9(분모만 나눔)를 고른 학생은 다음 시간에 띠로 다시 확인한다.',
      exitTicket: [
        { type: 'tool', tool: 'fracstrips', options: { top: [4, 10] }, prompt: '아래 띠를 5조각으로 나누어 4/10과 크기가 같은 분수를 만드세요.', target: { equalTo: [4, 10], den: 5 }, difficulty: 0.15, explain: '분모 10을 2로 나누어 5가 되었으니 분자 4도 2로 나누어 2 — 4/10 = 2/5예요.' },
        { type: 'tool', tool: 'fracstrips', options: { mode: 'divide', top: [15, 25], divisors: [2, 3, 5, 15] }, prompt: '15/25를 기약분수로 나타내세요.', target: { reduce: [15, 25], lowest: true }, difficulty: 0.18, explain: '15와 25의 최대공약수는 5예요. 15 ÷ 5 = 3, 25 ÷ 5 = 5이므로 3/5이에요.' },
        { type: 'choice', prompt: '6/9을 약분한 분수는 무엇인가요?', options: ['2/3', '2/9', '6/3'], answer: 0, difficulty: 0.1, explain: '분모와 분자를 공약수 3으로 똑같이 나눠야 해요. 6 ÷ 3 = 2, 9 ÷ 3 = 3이라 2/3이에요. 2/9는 분자만, 6/3은 분모만 나눈 것이에요.' },
        { type: 'short', prompt: '8/12과 2/3의 크기가 같은 까닭을 "분모", "분자", "같은 수"를 넣어 쓰세요.', answer: '8/12의 분모와 분자를 같은 수 4로 나누면 2/3이 되기 때문이에요.', difficulty: 0.2 },
        { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
      ],
    },
  ],
  worksheet: {
    title: '크기가 같은 분수와 약분',
    items: [
      { type: 'figure', prompt: '위 띠와 크기가 같도록 아래 띠에 색칠하고, □에 알맞은 수를 쓰세요.', tool: 'fracstrips', figures: [
        { options: { top: [2, 3], start: { den: 6 } }, caption: '2/3 = □/6' },
        { options: { top: [6, 8], start: { den: 4 } }, caption: '6/8 = □/4' }], answer: '2/3 = 4/6 (아래 띠 4칸 색칠), 6/8 = 3/4 (아래 띠 3칸 색칠)' },
      { type: 'blank', prompt: '알맞은 말을 쓰세요.', text: '분모와 분자에 0이 아닌 같은 수를 곱하거나, 분모와 분자를 0이 아닌 같은 수로 ___ 크기가 같은 분수가 돼요. 분모와 분자를 공약수로 나누는 것을 ___한다고 하고, 분모와 분자의 공약수가 1뿐인 분수를 ___라고 해요.', answer: '나누면, 약분, 기약분수' },
      { type: 'table', prompt: '세 분수 ① 12/18 ② 8/20 ③ 18/24을 기약분수로 나타내세요. 차례대로 한 줄에 하나씩 써요.', columns: ['분수', '분모와 분자의 최대공약수', '기약분수'], rows: 3, answer: '① 12/18: 6, 2/3 ② 8/20: 4, 2/5 ③ 18/24: 6, 3/4' },
      { type: 'short', prompt: '지호는 6/8을 약분해서 6/4라고 썼어요. 무엇이 잘못되었는지 고쳐 쓰세요.', answer: '분모만 2로 나누었어요. 분자도 2로 나누어야 하므로 6/8 = 3/4이에요.' },
    ],
    easy: {
      note: '분모를 나눈 수(곱한 수)로 분자도 나눠요(곱해요). 위 띠의 자른 금을 따라 내려가면 색칠한 끝을 맞추기 쉬워요.',
      items: [
        { type: 'figure', prompt: '위 띠의 점선을 따라 아래 띠에 색칠하고, □에 알맞은 수를 쓰세요.', tool: 'fracstrips', figures: [
          { options: { top: [1, 2], start: { den: 4 }, showMarks: true }, caption: '1/2 = □/4' },
          { options: { top: [6, 8], start: { den: 4 }, showMarks: true }, caption: '6/8 = □/4' }], answer: '1/2 = 2/4, 6/8 = 3/4' },
        { type: 'blank', prompt: '알맞은 수를 쓰세요.', text: '12/18의 분모와 분자를 2로 나누면 ___/9, 6으로 나누면 2/___이에요.', answer: '6, 3' },
        { type: 'short', prompt: '분모를 2로 나누면 분자는 어떻게 해야 하는지 쓰세요.', answer: '분자도 2로 나눠요.' },
      ],
    },
  },
  differentiation: {
    easy: '위 띠의 자른 금이 아래 띠까지 점선으로 이어지고, 색칠한 끝이 맞는 순간 "크기가 같아요" 선이 내려와요. 약분에서는 공약수 단추에 점(•)이 찍혀 있어요.',
    base: '자른 금 점선이 없고, "크기가 같아요" 선은 확인을 누른 뒤에 보여요. 약분할 때 공약수를 스스로 찾아요.',
    challenge: '위 띠의 자른 금이 보이지 않아 조각을 세기보다 수로 생각해요. 약분 문항은 아래 띠가 확인 뒤에만 보이고, 더 해 보기(분모가 가장 작은 분수, 18/24)가 나와요.',
  },
  teacherNotes: '흔한 오개념: ① 분모만 나누거나 곱하고 분자는 그대로 둔다(6/8 → 6/4) — 교구가 "분모만 나누었어요 — 분자도 같은 수로 나눠요"라고 짚고, 아래 띠의 색칠한 끝이 어긋난다. ② 분모와 분자에 같은 수를 더하면 크기가 같다고 생각한다(3/4 → 9/10) — 활동 1의 4번 고르기에서 다룬다. ③ 공약수가 아닌 수로 나누려 한다(8/20을 3으로) — "3으로는 모두 나누어떨어지게 할 수 없어요"로 알린다. ④ 한 번 약분한 6/9을 기약분수라고 여긴다 — 최대공약수로 나누면 한 번에 기약분수가 된다는 것을 견준다. ⑤ 조각 수가 많을수록 분수가 크다고 생각한다 — 띠 길이가 같으면 조각이 많을수록 한 조각은 작아진다. 통분(분모를 같게 하기)은 다음 차시에서 다루며, 이 차시의 "크기가 같은 분수 만들기"가 그 바탕이 된다. 띠 두 개의 전체 길이가 같아야 비교할 수 있다는 점(같은 전체)을 강조한다.',
});
