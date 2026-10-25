/* 4학년 1학기 2. 각도 — 각도기로 각을 재고 그리기, 예각·직각·둔각 */
PaperLessons.register({
  id: 'g4-math-angle',
  schema: 'edu-lesson.v1',
  catalog: { unit: 'g4-수학-1학기-2', lesson: 2 },
  grade: 4, subject: '수학', unitTitle: '2. 각도',
  title: '각도기로 각을 재고 그리기, 예각과 둔각',
  objective: '각도기를 사용하여 각도를 재고 그릴 수 있으며, 예각·직각·둔각을 구분할 수 있다.',
  standards: ['[4수03-02]'],
  minutes: 40,
  formats: ['chromebook', 'projector', 'print'],
  safety: [
    '할핀 끝은 뾰족하니 종이 뒤에서 납작하게 접어 두어요.',
    '가위는 날을 닫아서 손잡이 쪽으로 친구에게 건네요.',
    '각도기와 자로 친구를 찌르거나 휘두르지 않아요.',
  ],
  illustration: {
    prompt: 'Layered paper-cut illustration of two paper strips joined by a golden brad opening wide over a translucent pastel protractor, beside a little house with a pointed roof and a slide on a hill, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.',
    scene: { viewBox: [480, 270], layers: [
      { motif: 'sun', x: 404, y: 60, s: 0.85 }, { motif: 'cloud', x: 120, y: 50 }, { motif: 'cloud', x: 300, y: 36, s: 0.7 },
      { motif: 'mountain', x: 330, y: 206, color: 'lavender' }, { motif: 'hills', y: 206, colors: ['mint', 'sky', 'buttercup'] },
      { motif: 'house', x: 110, y: 218 }, { motif: 'house', x: 390, y: 222, color: 'buttercup', s: 0.75 },
      { motif: 'tree', x: 230, y: 214 }, { motif: 'bird', x: 190, y: 92 }, { motif: 'bird', x: 220, y: 108 },
      { motif: 'text', x: 240, y: 150, text: '각의 크기를 재어 볼까요?', size: 22 },
    ] },
  },
  stages: [
    {
      id: 'intro', title: '도입', minutes: 6,
      teacher: '"지붕의 뾰족한 각과 미끄럼틀의 각 중 어느 것이 더 크게 벌어져 있을까요? 크기를 숫자로 말하려면 무엇이 필요할까요?" 시연 단추로 띠가 30°, 90°, 150°로 벌어지는 모습을 보여 주고 1°의 뜻(직각을 똑같이 90으로 나눈 하나)을 짚는다.',
      student: '종이 띠 두 장을 할핀으로 이었어요. 띠를 벌리면 각의 크기가 어떻게 달라지는지 보세요.',
      demo: { tool: 'protractor', options: { step: 5, highlightScale: true }, sequence: [{ angle: 30 }, { angle: 90 }, { angle: 150 }] },
    },
    {
      id: 'main', title: '전개', minutes: 27,
      activities: [
        {
          id: 'a1', title: '활동 1. 오른쪽 0에서 시작하는 눈금으로 각 그리기', minutes: 10, tool: 'protractor',
          task: '고정 띠가 각도기 오른쪽 0에 맞춰져 있어요. 그 0에서 시작하는 눈금(이 각도기에서는 안쪽 눈금)을 읽으며 복숭아색 띠를 돌려 각을 만들어 봅시다.',
          teacher: '"각도기의 중심은 어디에 맞추나요? 밑금은 어느 변에 맞추나요? 고정 띠가 맞춰진 0은 어느 줄의 0인가요?" 띠가 지나는 눈금을 0부터 10씩 세어 읽게 한다. 마지막 문항은 이미 벌어진 각을 재어 숫자로 답한다.',
          // 기본: 각도 숫자는 숨기고 각의 이름만 보인다(눈금을 읽어야 함). 숫자는 쉬움에만. 시작은 10°(0°이면 고정 띠가 가려진다).
          options: { base: 'right', start: 10 },
          levels: {
            easy: { step: 15, highlightScale: true, showHints: true },
            base: { step: 5, showReadout: false, showKind: true },
            challenge: { step: 1, showReadout: false, showKind: false },
          },
          items: [
            { prompt: '45°인 각을 만들어 보세요.', target: { angle: 45 }, difficulty: 0.12 },
            { prompt: '120°인 각을 만들어 보세요.', target: { angle: 120 }, difficulty: 0.18 },
            { prompt: '75°인 각을 만들어 보세요.', target: { angle: 75 }, difficulty: 0.15 },
            { extra: true, prompt: '복숭아색 띠가 만든 각을 재어 보세요. 눈금을 읽고 위의 단추로 각도를 정하세요.', toolOptions: { measure: true }, state: { angle: 70 }, target: { angle: 70 }, difficulty: 0.2 },
          ],
        },
        {
          id: 'a2', title: '활동 2. 왼쪽 0에서 시작하는 눈금으로 각 그리기', minutes: 9, tool: 'protractor',
          task: '이번에는 고정 띠가 각도기 왼쪽 0에 맞춰져 있어요. 왼쪽 0이 어느 줄의 0인지 먼저 손가락으로 짚고, 그 0에서 시작하는 눈금을 읽으며 각을 만들어 봅시다.',
          teacher: '"고정 띠가 맞춰진 0은 어느 줄의 0인가요?" 시작 전에 모두 0을 손가락으로 짚게 한다. 60°를 120°로 만드는 학생에게는 예각인지 둔각인지 먼저 어림하게 한다. 실물 각도기는 회사마다 안쪽·바깥쪽 눈금 배치가 다를 수 있으므로 "왼쪽이면 바깥쪽"처럼 외우지 않게 한다.',
          options: { base: 'left', start: 10 },
          levels: {
            easy: { step: 15, highlightScale: true, showHints: true },
            base: { step: 5, showReadout: false, showKind: true },
            challenge: { step: 1, showReadout: false, showKind: false },
          },
          items: [
            { prompt: '60°인 각을 만들어 보세요.', target: { angle: 60 }, difficulty: 0.2 },
            { prompt: '150°인 각을 만들어 보세요.', target: { angle: 150 }, difficulty: 0.18 },
            { prompt: '105°인 각을 만들어 보세요.', target: { angle: 105 }, difficulty: 0.2 },
            { extra: true, prompt: '복숭아색 띠가 만든 각을 재어 보세요. 눈금을 읽고 위의 단추로 각도를 정하세요.', toolOptions: { measure: true }, state: { angle: 130 }, target: { angle: 130 }, difficulty: 0.25 },
          ],
        },
        {
          id: 'a3', title: '활동 3. 예각·직각·둔각 만들기', minutes: 8, tool: 'protractor', pair: true,
          task: '직각(90°)을 기준으로 예각과 둔각을 만들어 봅시다. 짝과 만든 각을 비교해 보세요.',
          teacher: '"예각은 직각보다 작은 각, 둔각은 직각보다 크고 180°보다 작은 각이에요. 둘 다 몇 가지나 만들 수 있을까요?" 짝마다 서로 다른 예각·둔각을 만들었는지 확인한다.',
          // 아무 예각·둔각이나 통과하지 않게 범위 조건을 붙인다. 기본·도전은 각의 이름을 보이지 않는다(이름이 곧 답).
          // 시작은 일직선(180°) — 예각·직각·둔각 어느 것도 아니다.
          options: { base: 'right', start: 180 },
          levels: {
            easy: { step: 15, highlightScale: true, showHints: true },
            base: { step: 5, showReadout: false, showKind: false },
            challenge: { step: 1, showReadout: false, showKind: false },
          },
          items: [
            { prompt: '50°보다 큰 예각을 하나 만들어 보세요.', target: { kind: '예각', min: 50 }, difficulty: 0.15 },
            { prompt: '150°보다 작은 둔각을 하나 만들어 보세요.', target: { kind: '둔각', max: 150 }, difficulty: 0.15 },
            { prompt: '직각을 만들어 보세요.', target: { kind: '직각' }, difficulty: 0.08 },
          ],
        },
      ],
    },
    {
      id: 'wrapup', title: '정리', minutes: 7,
      teacher: '"각도기로 각을 잴 때 순서는 무엇이었나요?" (① 중심을 꼭짓점에 ② 밑금을 한 변에 ③ 0이 있는 쪽 눈금으로 나머지 변 읽기) 출구 질문에서 안쪽·바깥쪽 눈금을 헷갈린 학생을 확인한다.',
      exitTicket: [
        { type: 'choice', prompt: '각도기로 각을 잴 때 어느 쪽 눈금을 읽어야 하나요?', options: ['각의 한 변이 맞춰진 0에서 시작하는 눈금', '언제나 안쪽 눈금', '두 숫자 중 더 큰 숫자'], answer: 0, difficulty: 0.2,
          explain: '각도기마다 안쪽·바깥쪽 눈금 배치가 다를 수 있으니, 한 변이 맞춰진 0에서 시작해 10, 20, 30 … 으로 세어 읽어요.' },
        { type: 'choice', prompt: '직각보다 크고 180°보다 작은 각을 무엇이라고 하나요?', options: ['예각', '직각', '둔각'], answer: 2, difficulty: 0.1,
          explain: '둔각은 직각(90°)보다 크고 180°보다 작은 각이에요. 0°보다 크고 직각보다 작은 각은 예각이에요.' },
        { type: 'tool', tool: 'protractor', options: { step: 5, showReadout: false, showKind: false, base: 'right', start: 10 }, prompt: '140°인 각을 만들어 보세요.', target: { angle: 140 }, difficulty: 0.2 },
        { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
      ],
    },
  ],
  worksheet: {
    title: '각도 재기와 예각·둔각',
    items: [
      { type: 'figure', prompt: '각도기의 눈금을 읽어 각도를 쓰세요.', tool: 'protractor', figures: [
        { state: { angle: 40 }, caption: '(         )°' }, { state: { angle: 110 }, caption: '(         )°' }, { options: { base: 'left' }, state: { angle: 70 }, caption: '(         )°' }], answer: '40°, 110°, 70°' },
      { type: 'figure', prompt: '예각, 직각, 둔각 중 어느 것인지 쓰세요.', tool: 'protractor', options: { showProtractor: false }, figures: [
        { state: { angle: 30 }, caption: '(            )' }, { state: { angle: 90 }, caption: '(            )' }, { state: { angle: 145 }, caption: '(            )' }], answer: '예각, 직각, 둔각' },
      { type: 'check', prompt: '둔각을 모두 골라 □에 ✓표 하세요.', options: ['95°', '45°', '170°', '90°', '120°', '180°'], answer: '95°, 170°, 120° (90°는 직각, 180°는 일직선이라 둔각이 아님)' },
      { type: 'draw', prompt: '각도기와 자를 사용하여 50°인 각과 125°인 각을 그려 보세요.', answer: '50°는 예각, 125°는 둔각 — 각도기 중심을 꼭짓점에, 밑금을 한 변에 맞추고 그 0에서 시작하는 눈금으로 그렸는지 확인' },
    ],
    easy: { note: '각의 한 변이 맞춰진 0부터 10, 20, 30 … 으로 세어 가며 읽어요. 0°보다 크고 직각(90°)보다 작으면 예각, 직각보다 크고 180°보다 작으면 둔각이에요. 일직선(180°)은 둔각이 아니에요.' },
  },
  differentiation: {
    easy: '띠가 15°씩 딱딱 맞춰지고, 읽을 눈금만 진하게 보이며 각도와 각의 이름이 함께 보여요. 기본은 각도 숫자가 숨겨져 눈금을 읽어야 해요.',
    challenge: '1° 단위로 맞추고, 각도와 각의 이름이 모두 보이지 않아 눈금을 직접 읽어야 해요.',
  },
  teacherNotes: '가장 흔한 실수는 안쪽 눈금과 바깥쪽 눈금을 헷갈려 60°를 120°로 읽는 것이다. 각의 한 변이 맞춰진 쪽의 0에서 시작하는 눈금을 읽도록 하고, 읽은 값이 예각인지 둔각인지 먼저 어림해 보면(예각인데 120°라면 잘못 읽은 것) 스스로 고칠 수 있다. 교구는 반대쪽 눈금으로 만든 각을 알아보고 따로 안내한다. 각도기의 중심을 꼭짓점에, 밑금을 한 변에 맞추지 않고 재는 실수, 각의 변(띠)이 길면 각이 크다고 생각하는 오개념도 함께 짚는다(띠 길이와 각의 크기는 관계없음). 둔각은 직각보다 크고 180°보다 작은 각이므로 일직선(180°)은 둔각이 아니다. 실제 종이 각도기와 할핀 띠로 같은 활동을 하면 좋다.',
});
