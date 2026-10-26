/* 검사용 차시 — 수직선(numberline) 교구의 모든 모드(place·jump·read)와 자연수·분수·소수 눈금을 한 차시에서 쓴다. 카탈로그에 싣지 않는다. */
PaperLessons.register({
  id: '_tool-numberline',
  schema: 'edu-lesson.v1',
  catalog: { unit: 'g3-수학-1학기-6', lesson: 5 },
  grade: 3, subject: '수학', unitTitle: '6. 분수와 소수',
  title: '수직선에 분수와 소수를 놓고 읽기',
  objective: '수직선의 작은 눈금 한 칸의 크기를 알아내어 자연수·분수·소수를 수직선에 나타내고 읽을 수 있다.',
  standards: ['[4수01-09]', '[4수01-12]'],
  minutes: 40,
  formats: ['chromebook', 'projector', 'print'],
  illustration: {
    prompt: 'Layered paper-cut illustration of a frog hopping along a long paper number line over a pond, with small arrows above each jump, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.',
    scene: { viewBox: [480, 270], layers: [
      { motif: 'sun', x: 410, y: 58, s: 0.8 }, { motif: 'cloud', x: 110, y: 52 }, { motif: 'hills', y: 200 },
      { motif: 'wave', y: 222 }, { motif: 'leaf', x: 120, y: 206, color: 'mint' }, { motif: 'leaf', x: 240, y: 210, color: 'mint' }, { motif: 'leaf', x: 360, y: 206, color: 'mint' },
      { motif: 'text', x: 240, y: 140, text: '한 칸은 얼마일까요?', size: 22 },
    ] },
  },
  stages: [
    {
      id: 'intro', title: '도입', minutes: 7,
      teacher: '"개구리가 0에서 출발해 한 번에 3칸씩 뛰어요. 네 번 뛰면 어디에 갈까요?" 시연 단추로 화살표가 하나씩 생기는 모습을 보여 준다. 출발점은 뛴 횟수에 넣지 않는다는 것을 손가락으로 화살표를 세며 짚는다. 이어 "0과 1 사이를 10칸으로 나누면 한 칸은 얼마일까요?"로 오늘의 분수·소수 눈금으로 잇는다.',
      student: '자에서 0과 1 사이의 작은 눈금을 세어 봅시다. 몇 칸으로 나뉘어 있나요?',
      demo: { tool: 'numberline', options: { mode: 'jump', min: 0, max: 15, fixedFrom: 0, showValue: true }, sequence: [{ from: 0, size: 3, count: 4 }] },
    },
    {
      id: 'main', title: '전개', minutes: 26,
      activities: [
        {
          id: 'a1', title: '활동 1. 수직선에 점 놓기', minutes: 10, tool: 'numberline',
          teacher: '"큰 눈금 0과 1 사이가 몇 칸으로 나뉘었나요? 그럼 한 칸은 얼마예요?"를 문항마다 먼저 묻는다. 눈금 선을 1부터 세어 한 칸 오른쪽에 점을 놓는 학생에게는 0에서 첫 칸을 건너가야 1칸이라고 손가락으로 칸을 짚게 한다. 3/4을 3칸이 아니라 셋째 눈금 선으로 찾는 학생에게는 칸과 선을 따로 센다.',
          task: '점을 끌거나, 점을 고른 뒤 수직선을 눌러 알맞은 자리에 놓아요. 방향키로 한 칸씩 옮길 수도 있어요.',
          levels: { easy: { showValue: true, labels: 'all' }, base: {}, challenge: { labels: 'ends' } },
          items: [
            { prompt: '수직선에서 7을 찾아 가 점을 놓아 보세요.', toolOptions: { min: 0, max: 10 }, target: { points: [7] }, difficulty: 0.05 },
            { prompt: '0과 1 사이를 4칸으로 나누었어요. 3/4에 가 점을 놓아 보세요.', toolOptions: { min: 0, max: 2, sub: 4, format: 'frac' }, target: { points: ['3/4'] }, difficulty: 0.2, reveal: 'after-check',
              predict: { q: '3/4은 0과 1 가운데 어느 쪽에 더 가까울까요?', options: ['0', '1', '한가운데'] },
              conclude: '3/4은 0에서 1/4칸을 3번 간 곳이라 1에 더 가까워요.' },
            { prompt: '0과 1 사이를 10칸으로 나누었어요. 0.7에 가 점을 놓아 보세요.', toolOptions: { min: 0, max: 1, sub: 10, format: 'dec', labels: 'ends' }, target: { points: [0.7] }, difficulty: 0.18, reveal: 'after-check' },
            { prompt: '가 점은 1/3에, 나 점은 5/3에 놓아 보세요.', toolOptions: { min: 0, max: 2, sub: 3, format: 'frac' }, target: { points: ['1/3', '5/3'] }, difficulty: 0.3,
              conclude: '5/3은 1보다 커요. 1을 지나 1/3칸을 2번 더 간 곳이에요.' },
            { prompt: '더 해 보기: 1.4에 가 점을 놓아 보세요.', toolOptions: { min: 0, max: 2, sub: 10, format: 'dec' }, target: { points: [1.4] }, extra: true, difficulty: 0.25, reveal: 'after-check' },
          ],
        },
        {
          id: 'a2', title: '활동 2. 뛰어 세며 화살표 그리기', minutes: 9, tool: 'numberline',
          teacher: '"한 번 뛸 때 얼마씩 가요? 몇 번 뛰었어요?"를 소리 내어 세게 한다. 출발점을 한 번으로 세어 화살표를 하나 더 그리는 학생이 많다 — 화살표 개수만 센다고 짚는다. 뒤로 뛰기 문항에서는 "작아지려면 어느 쪽으로 가야 할까요?"를 묻는다.',
          task: '한 번에 뛸 크기를 −/+로 정하고 "앞으로 뛰기"나 "뒤로 뛰기"를 눌러 화살표를 그려요.',
          levels: { easy: { showValue: true }, base: {}, challenge: {} },
          items: [
            { prompt: '0에서 3씩 4번 뛰어 세어 보세요.', toolOptions: { mode: 'jump', min: 0, max: 20, fixedFrom: 0, hopSize: 1 }, target: { from: 0, size: 3, count: 4 }, difficulty: 0.1,
              conclude: '3씩 4번 뛰어 세면 12예요. 3 × 4 = 12와 같아요.' },
            { prompt: '0에서 0.2씩 3번 뛰어 세어 보세요.', toolOptions: { mode: 'jump', min: 0, max: 1, sub: 10, format: 'dec', labels: 'ends', fixedFrom: 0 }, target: { from: 0, size: 0.2, count: 3 }, difficulty: 0.25, reveal: 'after-check' },
            { prompt: '0에서 1/5씩 뛰어 4/5까지 가 보세요.', toolOptions: { mode: 'jump', min: 0, max: 1, sub: 5, format: 'frac', fixedFrom: 0 }, target: { from: 0, size: '1/5', end: '4/5' }, difficulty: 0.2 },
            { prompt: '6에서 출발해 뒤로 뛰어 2에 닿게 해 보세요.', toolOptions: { mode: 'jump', min: 0, max: 10 }, state: { from: 6, hops: [] }, target: { from: 6, end: 2 }, difficulty: 0.2,
              predict: { q: '6에서 2로 가려면 어느 쪽으로 뛰어야 할까요?', options: ['오른쪽(앞으로)', '왼쪽(뒤로)'] },
              conclude: '작은 수로 가려면 왼쪽(뒤로) 뛰어요. 6 − 4 = 2예요.' },
          ],
        },
        {
          id: 'a3', title: '활동 3. 점이 나타내는 수 읽기', minutes: 7, tool: 'numberline',
          teacher: '"가 점은 0에서 몇 칸 갔나요? 한 칸이 0.1이면 4칸은?" 0.4를 4로 읽는 학생에게 0과 1 사이에 있으니 1보다 작은 수라고 짚는다. 분수로 쓸 때 분모에 칸 수가 아니라 눈금 선 수를 쓰는지 살핀다.',
          task: '가 점이 0에서 몇 칸 떨어져 있는지 세어 수를 고르거나 써요. 분수는 3/4처럼 써요.',
          levels: { easy: { labels: 'all' }, base: {}, challenge: {} },
          items: [
            { prompt: '가 점이 나타내는 소수를 고르세요.', toolOptions: { mode: 'read', min: 0, max: 1, sub: 10, format: 'dec', labels: 'ends', marks: [0.4], choices: ['0.3', '0.4', '4'], why: ['한 칸 차이가 나요. 0에서 칸을 다시 세어 보세요.', '', '가 점은 0과 1 사이에 있어서 1보다 작아요.'] }, target: { pick: 1 }, difficulty: 0.1 },
            { prompt: '가 점이 나타내는 분수를 쓰세요.', toolOptions: { mode: 'read', min: 0, max: 1, sub: 8, format: 'frac', labels: 'ends', marks: [0.625] }, target: { value: '5/8', form: 'frac' }, difficulty: 0.3, reveal: 'after-check' },
            { prompt: '가 점이 나타내는 수를 소수로 쓰세요.', toolOptions: { mode: 'read', min: 1, max: 2, sub: 10, format: 'dec', labels: 'ends', marks: [1.6] }, target: { value: 1.6, form: 'dec' }, difficulty: 0.25,
              conclude: '1에서 0.1칸을 6번 더 갔으니 1.6이에요.' },
          ],
        },
      ],
    },
    {
      id: 'wrapup', title: '정리', minutes: 7,
      teacher: '"수직선에서 한 칸의 크기는 어떻게 알아낼까요?" 큰 눈금 사이 칸 수를 세어 나누면 된다는 말을 학생 말로 정리한다. 출구 1번(분수 놓기)을 틀린 학생은 칸과 선을 헷갈리는지, 2번(소수 읽기)을 틀린 학생은 0.9와 9를 헷갈리는지 다음 시간에 먼저 살핀다.',
      exitTicket: [
        { type: 'tool', tool: 'numberline', options: { min: 0, max: 1, sub: 5, format: 'frac' }, prompt: '0과 1 사이를 5칸으로 나눈 수직선에 2/5를 놓으세요.', target: { points: ['2/5'] }, difficulty: 0.2 },
        { type: 'tool', tool: 'numberline', options: { mode: 'read', min: 0, max: 1, sub: 10, format: 'dec', labels: 'ends', marks: [0.9], choices: ['0.8', '0.9', '9'] }, prompt: '가 점이 나타내는 수를 고르세요.', target: { pick: 1 }, difficulty: 0.15 },
        { type: 'choice', prompt: '0.1이 6개인 수는 무엇인가요?', options: ['6', '0.6', '0.06'], answer: 1, difficulty: 0.15, explain: '0.1이 6개이면 0.6이에요. 수직선에서 0에서 0.1칸을 6번 간 곳이에요.' },
        { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
      ],
    },
  ],
  worksheet: {
    title: '수직선과 분수·소수',
    items: [
      { type: 'figure', prompt: '가 점이 나타내는 수를 쓰세요.', tool: 'numberline', wide: true, figures: [
        { options: { mode: 'read', min: 0, max: 1, sub: 4, format: 'frac', labels: 'ends', marks: [0.75] }, caption: '가: ________ (분수)' },
        { options: { mode: 'read', min: 0, max: 2, sub: 10, format: 'dec', labels: 'major', marks: [1.3] }, caption: '가: ________ (소수)' }], answer: '3/4, 1.3' },
      { type: 'figure', prompt: '화살표를 보고 곱셈식을 쓰세요.', tool: 'numberline', wide: true, figures: [
        { options: { mode: 'jump', min: 0, max: 15, fixedFrom: 0 }, state: { from: 0, hops: [3, 3, 3, 3] }, caption: '___ × ___ = ___' }], answer: '3 × 4 = 12' },
      { type: 'figure', prompt: '0.6과 1.2를 수직선 위에 점으로 나타내세요.', tool: 'numberline', wide: true, figures: [
        { options: { min: 0, max: 2, sub: 10, format: 'dec', labels: 'major' }, caption: '0.6과 1.2' }], answer: '0에서 6칸, 12칸 간 곳' },
      { type: 'choice', prompt: '수직선에서 0.8은 0과 1 가운데 어디에 더 가까울까요?', options: ['0', '1'], answer: '1' },
      { type: 'short', prompt: '수직선에서 작은 눈금 한 칸의 크기를 알아내는 방법을 써 보세요.' },
    ],
    easy: {
      note: '큰 눈금 사이가 몇 칸으로 나뉘었는지 먼저 세어요. 0과 1 사이가 10칸이면 한 칸은 0.1이에요.',
      items: [
        { type: 'figure', prompt: '가 점이 나타내는 수를 쓰세요.', tool: 'numberline', wide: true, figures: [
          { options: { mode: 'read', min: 0, max: 1, sub: 10, format: 'dec', labels: 'all', marks: [0.3] }, caption: '가: ________' }], answer: '0.3' },
        { type: 'figure', prompt: '3씩 뛰어 센 화살표를 보고 빈칸을 채우세요.', tool: 'numberline', wide: true, figures: [
          { options: { mode: 'jump', min: 0, max: 15, fixedFrom: 0 }, state: { from: 0, hops: [3, 3, 3] }, caption: '3씩 3번 → ___' }], answer: '9' },
        { type: 'choice', prompt: '0.1이 4개인 수에 ○ 하세요.', options: ['4', '0.4'], answer: '0.4' },
        { type: 'short', prompt: '0과 1 사이를 10칸으로 나누면 한 칸은 얼마인가요?' },
      ],
    },
  },
  differentiation: {
    easy: '눈금마다 수가 적혀 있고 점 위에 지금 수가 보여요. 칸을 하나씩 세며 확인해요.',
    base: '큰 눈금에만 수가 적혀 있어요. 한 칸의 크기를 스스로 알아내요.',
    challenge: '양 끝에만 수가 적혀 있어요. 더 해 보기 문항(1.4)까지 풀어요.',
  },
  teacherNotes: '자주 보이는 어려움: ① 눈금 선을 1부터 세어 한 칸씩 어긋난다(0.7을 0.8 자리에) → 0에서 첫 칸을 건너가야 1칸. 교구는 한 칸 어긋난 점에 "눈금 사이 칸을 세어 보세요"라고 따로 답한다. ② 0과 1 사이 칸 수가 아니라 눈금 선 수를 분모로 쓴다(5/8을 5/9로). ③ 0.4를 4로 읽는다 → 0과 1 사이에 있으면 1보다 작다. ④ 뛰어 세기에서 출발점을 한 번으로 센다 → 화살표 개수만 센다. 수직선 위 점 자리는 학생 이름이 아니라 가·나로만 부른다.',
});
