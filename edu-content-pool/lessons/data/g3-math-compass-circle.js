/* 3학년 2학기 3. 원 — 원의 중심·반지름·지름, 컴퍼스로 원 그리기
 * 가장 흔한 실수: '지름 8cm인 원'을 컴퍼스를 8cm 벌려 그린다(벌린 폭 = 반지름).
 */
PaperLessons.register({
  id: 'g3-math-compass-circle',
  schema: 'edu-lesson.v1',
  catalog: { unit: 'g3-수학-2학기-3', lesson: 2 },
  grade: 3, subject: '수학', unitTitle: '3. 원',
  title: '컴퍼스로 원 그리기와 반지름·지름',
  objective: '원의 중심, 반지름, 지름을 알고 컴퍼스를 사용하여 주어진 크기의 원을 그릴 수 있다.',
  standards: ['[4수03-06]', '[4수03-07]'],
  minutes: 40,
  formats: ['chromebook', 'projector', 'print'],
  safety: [
    '컴퍼스 침은 뾰족해요. 침이 위로 가게 들고 다니지 않고, 친구 쪽으로 향하지 않아요.',
    '컴퍼스를 돌릴 때는 손잡이만 잡고, 침을 누르는 손가락을 다치지 않게 조심해요.',
    '다 쓴 컴퍼스는 다리를 오므려 필통에 넣어요.',
  ],
  illustration: {
    prompt: "Layered paper-cut illustration of a paper drawing compass seen from directly above on a sheet of paper, its metal point pressed into a small dot at the exact center of a perfectly round pencil circle and its pencil tip touching the circle line, one straight line drawn from the center dot to the circle, a plain wooden ruler lying beside it, and a few colorful paper circles of different sizes, no words or numbers anywhere, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.",
    image: 'img/g3-math-compass-circle.webp', size: [1200, 800],
    scene: { viewBox: [480, 270], layers: [
      { motif: 'sun', x: 412, y: 56, s: 0.8 }, { motif: 'cloud', x: 100, y: 48 }, { motif: 'cloud', x: 300, y: 36, s: 0.7 },
      { motif: 'hills', y: 206, colors: ['mint', 'buttercup', 'lavender'] },
      { motif: 'moon', x: 70, y: 120, s: 0.8 }, { motif: 'flower', x: 150, y: 224 }, { motif: 'flower', x: 360, y: 228, color: 'sky' },
      { motif: 'star', x: 220, y: 96, color: 'rose' }, { motif: 'star', x: 262, y: 104, color: 'sky' },
      { motif: 'tree', x: 420, y: 216, s: 0.8 },
      { motif: 'text', x: 240, y: 160, text: '컴퍼스로 원을 그려 볼까요?', size: 22 },
    ] },
  },
  stages: [
    {
      id: 'intro', title: '도입', minutes: 6,
      teacher: '"누름 못과 띠 종이로 원을 그려 본 것을 떠올려 보세요. 누름 못을 꽂은 점과 연필까지의 길이가 변하지 않았지요?" 시연 단추로 컴퍼스를 3cm 벌려 한 바퀴 돌리는 모습을 보여 주고, 침을 꽂은 점이 원의 중심, 벌린 폭이 반지름이라는 말을 처음 쓴다.',
      student: '컴퍼스의 침은 어디에 꽂고, 연필 다리는 얼마나 벌려야 할까요? 컴퍼스가 원을 그리는 모습을 보세요.',
      demo: { tool: 'compass', options: { showWidth: true }, sequence: [{ radius: 3 }] },
    },
    {
      id: 'main', title: '전개', minutes: 28,
      activities: [
        {
          id: 'a1', title: '활동 1. 원의 중심·반지름·지름 찾기', minutes: 8, tool: 'compass',
          options: { mode: 'pick', radius: 4 },
          task: '원 위에 선분 가·나·다와 점 ㄱ·ㄴ이 있어요. 물어보는 것을 찾아 눌러 봅시다.',
          teacher: '"원의 중심은 원 위의 어느 점까지나 거리가 같은 점이에요. 원의 중심과 원 위의 한 점을 이은 선분이 반지름, 원 위의 두 점을 이은 선분 가운데 원의 중심을 지나는 것이 지름이에요." 다(중심을 지나지 않는 선분)를 지름으로 고르는 학생에게 "원의 중심을 지나나요?"를 묻는다.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '원의 중심을 찾아 눌러 보세요.', target: { pick: 'center' }, difficulty: 0.1 },
            { prompt: '반지름을 찾아 눌러 보세요.', target: { pick: 'radius' }, difficulty: 0.14 },
            { prompt: '지름을 찾아 눌러 보세요.', target: { pick: 'diameter' }, difficulty: 0.2,
              // 보기에 정의 문장을 그대로 쓰면 예상이 아니라 정답 고르기가 된다
              predict: { q: '원 위의 두 점을 이은 선분은 모두 지름일까요?', options: ['네, 모두 지름이에요', '아니요, 아닌 것도 있어요'], answer: 1 },
              conclude: '원 위의 두 점을 이은 선분 가운데 원의 중심을 지나는 선분이 지름이에요.' },
          ],
        },
        {
          id: 'a2', title: '활동 2. 반지름이 주어진 원 그리기', minutes: 10, tool: 'compass',
          task: '연필 다리 끝을 자를 따라 끌어 컴퍼스를 벌리고, 손잡이를 잡고 한 바퀴 돌려 원을 그려 봅시다.',
          teacher: '"컴퍼스를 몇 cm 벌려야 반지름이 2cm인 원이 될까요?" 자의 0이 침(중심)에 맞춰져 있다는 것을 짚는다. 기본·도전은 벌린 폭 글자가 확인 뒤에만 보여 자의 눈금을 읽어야 한다.',
          options: { mode: 'draw' },
          levels: {
            easy: { showWidth: true },
            base: { showWidth: true, revealAfterCheck: true },
            challenge: { showWidth: false },
          },
          items: [
            { prompt: '반지름이 2cm인 원을 그려 보세요.', target: { radius: 2 }, state: { width: 1 }, difficulty: 0.14 },
            { prompt: '반지름이 4cm인 원을 그려 보세요.', target: { radius: 4 }, state: { width: 1 }, difficulty: 0.18,
              predict: { q: '반지름 2cm인 원과 견주면 반지름 4cm인 원은 어떨까요?', options: ['더 커요', '더 작아요', '크기가 같아요'], answer: 0 },
              conclude: '컴퍼스를 많이 벌릴수록 반지름이 길어져 더 큰 원이 그려져요.' },
            { prompt: '반지름이 3.5cm인 원을 그려 보세요. 3과 4 사이의 작은 눈금을 보세요.', target: { radius: 3.5 }, state: { width: 1 }, difficulty: 0.26, extra: true },
          ],
        },
        {
          id: 'a3', title: '활동 3. 지름이 주어진 원 그리기', minutes: 10, tool: 'compass', pair: true,
          task: '지름이 주어지면 컴퍼스를 얼마나 벌려야 할까요? 먼저 생각하고 원을 그려 봅시다.',
          teacher: '"지름은 반지름의 몇 배일까요?" 맞히면 지름 선과 "지름 = 반지름 × 2"가 나타난다. 짝과 한 사람이 지름을 말하면 다른 사람이 벌릴 폭을 말하게 한다. 끝나면 실제 컴퍼스로 공책에 반지름 3cm인 원과 지름 6cm인 원을 그려 두 원을 겹쳐 본다.',
          options: { mode: 'draw' },
          levels: {
            easy: { showWidth: true },
            base: { showWidth: true, revealAfterCheck: true },
            challenge: { showWidth: false },
          },
          items: [
            { prompt: '지름이 6cm인 원을 그려 보세요.', target: { diameter: 6 }, state: { width: 1 }, difficulty: 0.3,
              predict: { q: '지름 6cm인 원을 그리려면 컴퍼스를 몇 cm 벌려야 할까요?', options: ['6cm', '3cm', '12cm'], answer: 1 },
              conclude: '컴퍼스를 벌린 폭은 반지름이에요. 지름은 반지름의 2배라서, 지름의 반만큼 벌려요.' },
            // 자가 6cm까지라 지름 8cm에서는 '지름만큼 벌리기' 실수를 만들 수 없었다 — 기본 문항은 6cm 안쪽 지름으로
            { prompt: '지름이 5cm인 원을 그려 보세요.', target: { diameter: 5 }, state: { width: 1 }, difficulty: 0.3 },
            { prompt: '지름이 7cm인 원을 그려 보세요.', target: { diameter: 7 }, state: { width: 1 }, difficulty: 0.3, extra: true },
          ],
        },
      ],
    },
    {
      id: 'wrapup', title: '정리', minutes: 6,
      teacher: '"컴퍼스로 원을 그리는 순서는?" (① 원의 중심을 정해 침을 꽂는다 ② 반지름만큼 벌린다 ③ 손잡이를 잡고 돌린다) 출구 질문에서 지름만큼 벌린 학생을 확인하고, 한 원에서 반지름은 모두 같고 지름은 반지름의 2배라는 것을 다시 짚는다.',
      exitTicket: [
        { type: 'tool', tool: 'compass', options: { mode: 'draw', showWidth: false }, state: { width: 1 }, prompt: '지름이 4cm인 원을 그려 보세요.', target: { diameter: 4 }, difficulty: 0.28 },
        { type: 'choice', prompt: '한 원에서 반지름이 5cm이면 지름은 몇 cm인가요?', options: ['5cm', '10cm', '2.5cm'], answer: 1, difficulty: 0.15,
          explain: '지름은 반지름의 2배예요. 5cm의 2배는 10cm예요.' },
        { type: 'choice', prompt: '한 원에 반지름은 몇 개 그을 수 있을까요?', options: ['1개', '2개', '셀 수 없이 많이'], answer: 2, difficulty: 0.22,
          explain: '원의 중심에서 원 위의 어느 점으로든 그을 수 있어서 반지름은 셀 수 없이 많고, 길이는 모두 같아요.' },
        { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
      ],
    },
  ],
  worksheet: {
    title: '원의 중심·반지름·지름과 컴퍼스로 원 그리기',
    items: [
      { type: 'figure', prompt: '원의 중심에 점 ㅇ을 쓰고, 그려진 선분이 반지름인지 지름인지 쓰세요.', tool: 'compass', figures: [
        { options: { radius: 3, show: 'radius' }, caption: '(            )' }, { options: { radius: 3, show: 'diameter' }, caption: '(            )' }], answer: '반지름, 지름' },
      { type: 'blank', prompt: '알맞은 수를 써넣으세요.', text: '반지름이 4cm인 원의 지름은 ___cm입니다. 지름이 10cm인 원의 반지름은 ___cm입니다.', answer: '8, 5' },
      { type: 'choice', prompt: '지름이 6cm인 원을 그리려고 해요. 컴퍼스를 몇 cm 벌려야 하나요?', options: ['3cm', '6cm', '12cm'], answer: '3cm' },
      { type: 'check', prompt: '원에 대한 설명으로 옳은 것을 모두 골라 □에 ✓표 하세요.', options: ['한 원에서 반지름은 모두 같다', '지름은 반지름의 2배이다', '원 위의 두 점을 이은 선분은 모두 지름이다', '컴퍼스를 벌린 폭은 지름이다'], answer: '한 원에서 반지름은 모두 같다, 지름은 반지름의 2배이다' },
      { type: 'draw', prompt: '컴퍼스로 반지름이 2cm인 원과 지름이 6cm인 원을 그려 보세요. 두 원의 중심을 같은 점으로 해 보세요.', answer: '침을 같은 점에 꽂고 2cm, 3cm 벌려 그렸는지 확인' },
    ],
    easy: {
      note: '원의 중심: 원의 한가운데 점(컴퍼스 침을 꽂는 곳). 반지름: 원의 중심에서 원 위의 한 점까지. 지름: 원의 중심을 지나 원 위의 두 점을 이은 선분 = 반지름 × 2. 컴퍼스를 벌린 폭이 반지름이에요.',
    },
  },
  differentiation: {
    easy: '벌린 폭이 글자(○cm)로 늘 보이고, 자의 0이 침에 맞춰져 있어요. 지름 문항은 먼저 예상을 고르며 "반만큼 벌린다"를 생각해요.',
    challenge: '벌린 폭 글자가 없어 자의 눈금(0.5cm 작은 눈금 포함)을 직접 읽어야 하고, 3.5cm·지름 7cm처럼 작은 눈금까지 써야 하는 추가 문항이 있어요.',
  },
  teacherNotes: '가장 흔한 실수는 지름이 주어졌을 때 컴퍼스를 지름만큼 벌리는 것이다. 교구는 이 경우를 따로 알아보고 "컴퍼스를 벌린 폭은 반지름이에요"라고 알려 준다. 활동 1에서는 원 위의 두 점을 이은 선분(다)을 지름으로 착각하는지 본다 — 원의 중심을 지나야 지름이다. 디지털 교구에서는 침이 늘 원의 중심에 꽂혀 있으므로, 침을 정확히 꽂고 손잡이만 잡아 돌리는 손 기능은 실제 컴퍼스로 꼭 연습한다(활동 3 끝 3분). 이 차시는 교과서 1차시(원의 중심·반지름·지름, 누름 못과 띠 종이로 원 그리기)와 2~3차시(컴퍼스로 원 그리기)를 한 시간에 묶은 통합 차시다. 1차시를 이미 마친 반은 활동 1을 3분으로 줄여 복습으로 쓰고, 처음 배우는 반은 활동 1에 8분을 다 쓴다. 휴대폰에서는 연필 끝을 끄는 대신 아래의 −·+ 단추로 0.5cm씩 벌릴 수 있다.',
});
