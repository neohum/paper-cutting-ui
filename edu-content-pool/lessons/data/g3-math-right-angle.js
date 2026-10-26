/* 3학년 1학기 2. 평면도형 — 각과 직각. 각도(°)는 4학년에 배우므로 숫자 없이 '직각보다 작은 각·큰 각'으로 말한다.
 * 3학년에서 생기기 쉬운 오개념 둘: 기울어진 직각은 직각이 아니라고 여긴다, 변이 길면 각이 크다고 여긴다.
 */
PaperLessons.register({
  id: 'g3-math-right-angle',
  schema: 'edu-lesson.v1',
  catalog: { unit: 'g3-수학-1학기-2', lesson: 4 },
  grade: 3, subject: '수학', unitTitle: '2. 평면도형',
  title: '각과 직각 찾기',
  objective: '각의 꼭짓점과 변을 알고, 직각을 찾거나 만들어 직각보다 작은 각과 큰 각을 구별할 수 있다.',
  standards: ['[4수03-01]', '[4수03-02]'],
  minutes: 40,
  formats: ['chromebook', 'projector', 'print'],
  safety: [
    '할핀 끝은 뾰족하니 종이 뒤에서 납작하게 접어 두어요.',
    '삼각자 모서리로 친구를 찌르지 않아요.',
  ],
  illustration: {
    prompt: "Layered paper-cut illustration of two paper strips joined by a golden brad forming a neat square corner, a paper set square fitting exactly into that corner, an open notebook and a small window frame with square corners on a child's desk, no words or numbers anywhere, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.",
    image: 'img/g3-math-right-angle.webp', size: [1200, 800],
    scene: { viewBox: [480, 270], layers: [
      { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 110, y: 50 }, { motif: 'cloud', x: 290, y: 38, s: 0.7 },
      { motif: 'hills', y: 206, colors: ['mint', 'lavender', 'buttercup'] },
      { motif: 'house', x: 110, y: 220, color: 'sky' }, { motif: 'house', x: 380, y: 224, color: 'peach', s: 0.8 },
      { motif: 'tree', x: 250, y: 216, s: 0.9 }, { motif: 'bird', x: 200, y: 96 },
      { motif: 'text', x: 240, y: 150, text: '반듯한 모서리, 직각을 찾아요', size: 22 },
    ] },
  },
  stages: [
    {
      id: 'intro', title: '도입', minutes: 6,
      teacher: '"공책 모서리, 칠판 모서리, 창틀 모서리의 모양은 어떤가요?" 종이를 두 번 접어 반듯한 모서리(직각)를 만들어 보게 한 뒤, 시연 단추로 띠 두 장이 직각이 되고 삼각자가 꼭 맞는 모습을 보여 준다.',
      student: '종이를 반으로 접고 한 번 더 접어 보세요. 접힌 모서리의 모양은 교실의 어떤 모서리와 같나요?',
      demo: { tool: 'rightangle', options: { mode: 'make', start: 30 }, sequence: [{ right: true }] },
    },
    {
      id: 'main', title: '전개', minutes: 28,
      activities: [
        {
          id: 'a1', title: '활동 1. 각의 꼭짓점과 변 알기', minutes: 6, tool: 'rightangle',
          options: { mode: 'parts', start: 60 },
          task: '종이 띠 두 장을 할핀으로 이어 각을 만들었어요. 각의 꼭짓점과 변을 찾아 눌러 봅시다.',
          teacher: '"한 점에서 그은 두 반직선으로 이루어진 도형을 각이라고 해요. 그 점이 꼭짓점, 두 반직선이 변이에요." 띠가 끝없이 뻗어 나간다고 생각하게 한다.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '각의 꼭짓점을 찾아 눌러 보세요.', target: { part: 'vertex' }, difficulty: 0.08 },
            { prompt: '각의 변을 하나 찾아 눌러 보세요.', target: { part: 'side' }, difficulty: 0.1 },
          ],
        },
        {
          id: 'a2', title: '활동 2. 직각 만들기', minutes: 9, tool: 'rightangle',
          options: { mode: 'make', start: 30 },
          task: '복숭아색 띠를 돌려 각을 만들어요. 삼각자를 대 보며 직각, 직각보다 작은 각, 직각보다 큰 각을 만들어 봅시다.',
          teacher: '"삼각자의 직각을 꼭짓점에 대고 한 변을 초록 띠에 맞추면 무엇을 알 수 있나요?" 기본·도전은 각의 이름 글자가 보이지 않으므로 삼각자를 대 보고 판단해야 한다.',
          levels: {
            easy: { step: 15, showKind: true },
            base: { step: 15 },
            challenge: { step: 5 },
          },
          items: [
            { prompt: '직각을 만들어 보세요.', target: { right: true }, difficulty: 0.14 },
            { prompt: '직각보다 작은 각을 만들어 보세요.', target: { kind: 'less' }, state: { angle: 150 }, difficulty: 0.14,
              predict: { q: '직각보다 작은 각을 만들려면 띠를 어떻게 해야 할까요?', options: ['직각보다 좁게', '직각보다 넓게'], answer: 0 } },
            { prompt: '직각보다 큰 각을 만들어 보세요.', target: { kind: 'more' }, state: { angle: 45 }, difficulty: 0.15,
              conclude: '삼각자의 직각과 견주어 안쪽이면 직각보다 작은 각, 바깥쪽이면 직각보다 큰 각이에요.' },
          ],
        },
        {
          id: 'a3', title: '활동 3. 삼각자를 대어 직각 찾기', minutes: 7, tool: 'rightangle',
          options: { mode: 'judge' },
          task: '놓여 있는 각에 삼각자를 대 보고, 직각인지 직각보다 작은지 큰지 골라 봅시다. 비스듬히 놓인 각도 있어요.',
          teacher: '"비스듬히 놓인 각도 직각일 수 있을까요?" 기울어진 직각(3번)을 "직각이 아니다"라고 고르는 학생이 많다. 놓인 방향과 관계없이 삼각자의 직각과 꼭 맞으면 직각이라는 것을 짚는다.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '이 각은 직각인가요? 삼각자를 대 보고 골라요.', state: { angle: 90 }, target: { judge: 'right' }, difficulty: 0.12 },
            { prompt: '이 각을 삼각자와 견주어 보고 골라요.', state: { angle: 75 }, target: { judge: 'less' }, difficulty: 0.24 },
            { prompt: '비스듬히 놓인 각이에요. 삼각자를 대 보고 골라요.', toolOptions: { turn: 30 }, state: { angle: 90 }, target: { judge: 'right' }, difficulty: 0.28,
              predict: { q: '비스듬히 놓인 이 각은 직각일까요?', options: ['직각일 수 있어요', '비스듬하면 직각이 아니에요'], answer: 0 },
              conclude: '놓인 방향과 관계없이 삼각자의 직각과 꼭 맞으면 직각이에요.' },
            { extra: true, prompt: '비스듬히 놓인 각이에요. 삼각자를 대 보고 골라요.', toolOptions: { turn: 50 }, state: { angle: 105 }, target: { judge: 'more' }, difficulty: 0.26 },
          ],
        },
        {
          id: 'a4', title: '활동 4. 변의 길이가 다른 두 각 견주기', minutes: 6, tool: 'rightangle', pair: true,
          options: { mode: 'compare' },
          task: '변의 길이가 다른 두 각 가와 나가 있어요. 어느 각이 더 큰지 견주어 봅시다.',
          teacher: '"변이 긴 각이 더 큰 각일까요?" 짝과 종이 띠 길이가 다른 두 각을 실제로 겹쳐 보게 한다. 각의 크기는 두 변이 벌어진 정도이고 변의 길이와 관계없다.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '가와 나 중 어느 각이 더 클까요?', toolOptions: { pair: [{ angle: 40, arm: 1 }, { angle: 70, arm: 0.45 }] }, target: { bigger: '나' }, difficulty: 0.26,
              predict: { q: '변이 긴 가가 더 큰 각일까요?', options: ['네, 가가 더 커요', '변의 길이와는 관계없어요'], answer: 1 },
              conclude: '각의 크기는 변의 길이가 아니라 두 변이 벌어진 정도로 정해져요.' },
            { prompt: '이번에는 어느 각이 더 클까요?', toolOptions: { pair: [{ angle: 60, arm: 0.5 }, { angle: 60, arm: 1 }] }, target: { bigger: 'same' }, difficulty: 0.28 },
          ],
        },
      ],
    },
    {
      id: 'wrapup', title: '정리', minutes: 6,
      teacher: '"교실에서 직각을 세 군데 찾아 삼각자를 대 보세요." 출구 질문에서 기울어진 직각과 변의 길이 문항을 틀린 학생을 확인한다.',
      exitTicket: [
        { type: 'tool', tool: 'rightangle', options: { mode: 'judge', turn: 60 }, state: { angle: 90 }, prompt: '비스듬히 놓인 이 각은 무엇일까요? 삼각자를 대 보고 골라요.', target: { judge: 'right' }, difficulty: 0.28 },
        { type: 'choice', prompt: '각에서 두 변이 만나는 점을 무엇이라고 하나요?', options: ['꼭짓점', '변', '직각'], answer: 0, difficulty: 0.08,
          explain: '각에서 두 변이 만나는 점을 꼭짓점이라고 해요.' },
        { type: 'choice', prompt: '종이 띠를 더 긴 것으로 바꾸고 벌린 정도는 그대로 두었어요. 각의 크기는 어떻게 될까요?', options: ['더 커져요', '더 작아져요', '그대로예요'], answer: 2, difficulty: 0.24,
          explain: '각의 크기는 두 변이 벌어진 정도예요. 변을 길게 해도 각의 크기는 그대로예요.' },
        { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
      ],
    },
  ],
  worksheet: {
    title: '각과 직각 찾기',
    items: [
      { type: 'figure', prompt: '각의 꼭짓점에 ○표 하고, 변을 따라 색칠해 보세요.', tool: 'rightangle', options: { mode: 'parts' }, figures: [
        { state: { angle: 60 }, caption: '' }], answer: '할핀 자리가 꼭짓점, 두 띠가 변' },
      { type: 'figure', prompt: '삼각자를 대어 보고 직각인 것에 ○표 하세요.', tool: 'rightangle', options: { mode: 'judge' }, figures: [
        { state: { angle: 90 }, caption: '가' }, { options: { turn: 30 }, state: { angle: 80 }, caption: '나' }, { options: { turn: 40 }, state: { angle: 90 }, caption: '다' }], answer: '가, 다' },
      { type: 'figure', prompt: '두 각 중 더 큰 각의 기호에 ○표 하세요.', tool: 'rightangle', options: { mode: 'compare', pair: [{ angle: 35, arm: 1 }, { angle: 75, arm: 0.45 }] }, figures: [
        { caption: '' }], answer: '나 — 변의 길이가 아니라 벌어진 정도를 본다' },
      { type: 'table', prompt: '교실에서 직각인 곳을 찾아 써 보세요.', columns: ['찾은 곳', '삼각자를 대 보았나요?'], rows: 3, answer: '공책·책·칠판·창틀·문 모서리 등' },
      { type: 'draw', prompt: '자를 사용하여 직각을 하나, 직각보다 큰 각을 하나 그려 보세요.', answer: '삼각자의 직각을 이용해 직각을 그렸는지 확인' },
    ],
    easy: { note: '각: 한 점에서 그은 두 반직선으로 이루어진 도형. 꼭짓점: 두 변이 만나는 점. 직각: 종이를 두 번 접었을 때 생기는 반듯한 각(삼각자의 모서리와 꼭 맞아요). 비스듬히 놓여 있어도 삼각자와 꼭 맞으면 직각이에요.' },
  },
  differentiation: {
    easy: '각을 만들 때 지금 각의 이름(직각, 직각보다 작은 각, 직각보다 큰 각)이 글자로 보여요. 띠는 크게 딱딱 움직여요.',
    challenge: '띠가 조금씩 움직여 직각을 정확히 맞춰야 하고, 더 많이 기울어진 각을 판단하는 추가 문항이 있어요.',
  },
  teacherNotes: '3학년은 각도(°)를 배우지 않으므로 교구도 숫자 대신 "직각보다 작은 각·큰 각"으로 말한다(예각·둔각이라는 낱말은 4학년). 오개념 1) 비스듬히 놓인 직각은 직각이 아니라고 여긴다 — 활동 3의 3번과 출구 질문에서 확인하고, 삼각자를 돌려 대어 보게 한다. 2) 변이 길면 각이 크다 — 활동 4와 활동지 3번에서 확인하고, 실제 띠를 겹쳐 보게 한다. 3) 꼭짓점이 두 개 이상인 줄 안다 — 각은 꼭짓점이 하나다. 디지털 삼각자는 늘 꼭짓점에 정확히 대어지므로, 실제 삼각자를 꼭짓점에 맞추는 연습을 함께 한다.',
});
