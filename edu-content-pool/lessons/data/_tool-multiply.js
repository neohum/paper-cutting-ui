/* 검사용 차시 — 곱셈 배열판(multiply) 교구의 모든 모드(array·group·table)를 한 차시에서 쓴다. 카탈로그에 싣지 않는다. */
PaperLessons.register({
  id: '_tool-multiply',
  schema: 'edu-lesson.v1',
  catalog: { unit: 'g2-수학-2학기-2', lesson: 3 },
  grade: 2, subject: '수학', unitTitle: '2. 곱셈구구',
  title: '배열과 묶음으로 곱셈구구 만들기',
  objective: '물건을 몇 개씩 몇 줄의 배열과 똑같은 묶음으로 나타내고, 곱셈구구의 값을 구할 수 있다.',
  standards: ['[2수01-11]'],
  minutes: 40,
  formats: ['chromebook', 'projector', 'print'],
  illustration: {
    prompt: 'Layered paper-cut illustration of rows of paper candies arranged in a neat grid on a bakery shelf with small baskets holding equal groups, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.',
    scene: { viewBox: [480, 270], layers: [
      { motif: 'cloud', x: 100, y: 50 }, { motif: 'sun', x: 410, y: 58, s: 0.7 }, { motif: 'hills', y: 206 },
      { motif: 'house', x: 120, y: 214, color: 'buttercup' }, { motif: 'flower', x: 230, y: 214 }, { motif: 'flower', x: 260, y: 214, color: 'lavender' }, { motif: 'house', x: 370, y: 216, color: 'sky' },
      { motif: 'text', x: 240, y: 140, text: '몇 개씩 몇 줄일까요?', size: 22 },
    ] },
  },
  stages: [
    {
      id: 'intro', title: '도입', minutes: 6,
      teacher: '"빵집 진열대에 빵이 4개씩 3줄 있어요. 하나씩 세지 않고 빨리 세는 방법이 있을까요?" 시연 단추로 한 줄에 4개가 놓이고 줄이 하나씩 늘어나는 모습을 보여 준다. "4, 8, 12"처럼 한 줄씩 뛰어 세는 것과 4 × 3이 같은 뜻임을 짚는다.',
      student: '교실에서 줄을 맞춰 놓인 물건(책상, 창문 칸)을 찾아 몇 개씩 몇 줄인지 말해 봅시다.',
      demo: { tool: 'multiply', options: { mode: 'array', showCounts: true, showTotal: true }, sequence: [{ rows: 3, cols: 4 }] },
    },
    {
      id: 'main', title: '전개', minutes: 27,
      activities: [
        {
          id: 'a1', title: '활동 1. 배열로 곱셈 나타내기', minutes: 10, tool: 'multiply',
          teacher: '"4개씩 3줄에서 4는 어디에 있고 3은 어디에 있나요?" 가로 한 줄의 개수와 줄 수를 손가락으로 짚게 한다. 줄 수와 한 줄 개수를 바꿔 만든 학생에게는 "한 줄에 몇 개씩 놓았나요?"를 묻는다. 모두 몇 개인지 쓸 때 두 수를 더하는(4 + 5) 학생은 한 줄씩 뛰어 세게 한다.',
          task: '배열판의 칸을 누르거나 모서리 단추를 움직여 몇 개씩 몇 줄을 만들어요. 아래 −/+로도 바꿀 수 있어요.',
          levels: { easy: { showTotal: true, bands: true }, base: {}, challenge: {} },
          items: [
            { prompt: '사탕이 4개씩 3줄 있어요. 배열판에 만들어 보세요.', toolOptions: { mode: 'array' }, target: { rows: 3, cols: 4 }, difficulty: 0.08,
              conclude: '4개씩 3줄은 4 × 3이에요. 4, 8, 12로 뛰어 세면 12개예요.' },
            { prompt: '6개씩 2줄을 만들어 보세요.', toolOptions: { mode: 'array' }, target: { rows: 2, cols: 6 }, difficulty: 0.12, reveal: 'after-check' },
            { prompt: '모두 12개가 되는 배열을 만들어 보세요. 한 줄로 늘어놓지는 않아요.', toolOptions: { mode: 'array' }, target: { product: 12, minSide: 2 }, difficulty: 0.25,
              predict: { q: '12개로 만들 수 있는 배열은 몇 가지일까요?', options: ['한 가지', '여러 가지'] },
              conclude: '12개는 6개씩 2줄, 4개씩 3줄, 3개씩 4줄처럼 여러 배열로 만들 수 있어요.' },
            { prompt: '배열을 보고 모두 몇 개인지 쓰세요.', toolOptions: { mode: 'array', lock: true, total: true }, state: { rows: 4, cols: 5 }, target: { rows: 4, cols: 5, total: true }, difficulty: 0.15 },
          ],
        },
        {
          id: 'a2', title: '활동 2. 똑같이 묶어 세기', minutes: 9, tool: 'multiply',
          teacher: '"5개씩 묶으면 묶음이 몇 개 생겨요?" 묶음 수를 쓰라는 문항에서 한 묶음의 개수(5)를 쓰는 학생에게 접시를 하나씩 손가락으로 세게 한다. 접시에 나누어 담기는 한 개씩 돌아가며 놓는 것과 같다고 말해 준다.',
          task: '−/+로 몇 개씩 묶을지(또는 접시 몇 개에 나눌지) 정하고, 알맞은 수를 칸에 써요.',
          levels: { easy: { showCount: true }, base: {}, challenge: {} },
          items: [
            { prompt: '구슬 15개를 5개씩 묶으면 몇 묶음일까요?', toolOptions: { mode: 'group', count: 15, ask: 'groups' }, target: { size: 5, answer: 3 }, difficulty: 0.1 },
            { prompt: '단추 18개를 3개씩 묶고, 묶음 수를 쓰세요.', toolOptions: { mode: 'group', count: 18, ask: 'groups', shape: 'square', color: 'sky' }, target: { size: 3, answer: 6 }, difficulty: 0.15, reveal: 'after-check' },
            { prompt: '딸기 12개를 접시 4개에 똑같이 나누어 담아요. 한 접시에 몇 개일까요?', toolOptions: { mode: 'group', count: 12, by: 'plates', ask: 'size', color: 'rose', shape: 'heart' }, target: { plates: 4, answer: 3 }, difficulty: 0.2,
              conclude: '12개를 접시 4개에 똑같이 나누면 한 접시에 3개예요. 3씩 4묶음이에요.' },
            { prompt: '더 해 보기: 별 14개를 4개씩 묶으면 몇 묶음이고 몇 개가 남을까요?', toolOptions: { mode: 'group', count: 14, ask: 'groups', rest: true, shape: 'star', color: 'buttercup' }, target: { size: 4, answer: 3, rest: 2 }, extra: true, difficulty: 0.35 },
          ],
        },
        {
          id: 'a3', title: '활동 3. 곱셈구구 표 채우기', minutes: 8, tool: 'multiply',
          teacher: '"3단에서 오른쪽으로 한 칸 가면 몇씩 커지나요?" 옆 칸 값에 단의 수를 더하면 된다는 것을 찾게 한다. 옆 칸 값을 그대로 쓰는 실수가 있으면 "곱하는 수가 몇이에요?"를 다시 읽게 한다.',
          task: '빈칸을 누르고 아래 숫자 단추나 키보드 숫자로 써요.',
          levels: { easy: {}, base: {}, challenge: {} },
          items: [
            { prompt: '3단 곱셈구구의 빈칸을 채우세요.', toolOptions: { mode: 'table', rowsOf: [3], colsOf: [1, 2, 3, 4, 5, 6, 7, 8, 9], blanks: [[3, 4], [3, 7], [3, 9]] }, target: { cells: true }, difficulty: 0.12 },
            { prompt: '곱셈표의 빈칸을 채우세요. 오른쪽으로 갈수록 몇씩 커지나요?', toolOptions: { mode: 'table', rowsOf: [4, 5, 6], colsOf: [5, 6, 7, 8], blanks: [[4, 7], [5, 6], [6, 8]] }, target: { cells: true }, difficulty: 0.25, reveal: 'after-check' },
            { prompt: '더 해 보기: 7단의 빈칸을 모두 채우세요.', toolOptions: { mode: 'table', rowsOf: [7], colsOf: [1, 2, 3, 4, 5, 6, 7, 8, 9], blanks: 'row:7' }, target: { cells: true }, extra: true, difficulty: 0.35 },
          ],
        },
      ],
    },
    {
      id: 'wrapup', title: '정리', minutes: 7,
      teacher: '"5 × 3은 어떤 배열로 나타낼 수 있을까요? 묶음으로는요?" 두 가지 그림이 같은 곱셈을 나타냄을 정리한다. 출구 1번을 틀린 학생은 줄 수와 한 줄 개수를, 2번을 틀린 학생은 8단 뛰어 세기를 다음 시간에 먼저 살핀다.',
      exitTicket: [
        { type: 'tool', tool: 'multiply', options: { mode: 'array' }, prompt: '3개씩 5줄을 만드세요.', target: { rows: 5, cols: 3 }, difficulty: 0.12 },
        { type: 'tool', tool: 'multiply', options: { mode: 'table', rowsOf: [8], colsOf: [1, 2, 3, 4, 5, 6, 7, 8, 9], blanks: [[8, 6]] }, prompt: '8단 곱셈구구의 빈칸에 알맞은 수를 쓰세요.', target: { cells: true }, difficulty: 0.2 },
        { type: 'choice', prompt: '6 × 4와 값이 같은 것은 무엇인가요?', options: ['6 + 4', '6 + 6 + 6 + 6', '4 + 4 + 4'], answer: 1, difficulty: 0.15, explain: '6 × 4는 6을 4번 더한 것과 같아요.' },
        { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
      ],
    },
  ],
  worksheet: {
    title: '배열과 묶음으로 곱셈하기',
    items: [
      { type: 'figure', prompt: '배열을 보고 곱셈식으로 나타내세요.', tool: 'multiply', figures: [
        { options: { mode: 'array', lock: true, showCounts: false, maxRows: 5, maxCols: 6 }, state: { rows: 3, cols: 5 }, caption: '___ × ___ = ___' },
        { options: { mode: 'array', lock: true, showCounts: false, shape: 'star', maxRows: 5, maxCols: 6 }, state: { rows: 4, cols: 2 }, caption: '___ × ___ = ___' }], answer: '5 × 3 = 15, 2 × 4 = 8' },
      { type: 'figure', prompt: '묶음을 보고 빈칸을 채우세요.', tool: 'multiply', figures: [
        { options: { mode: 'group', count: 12 }, state: { size: 4 }, caption: '4개씩 ___묶음' },
        { options: { mode: 'group', count: 10, shape: 'square' }, state: { size: 2 }, caption: '2개씩 ___묶음' }], answer: '3묶음, 5묶음' },
      { type: 'figure', prompt: '6단 곱셈구구를 완성하세요.', tool: 'multiply', wide: true, figures: [
        { options: { mode: 'table', rowsOf: [6], colsOf: [1, 2, 3, 4, 5, 6, 7, 8, 9], blanks: 'row:6' }, caption: '6단' }], answer: '6, 12, 18, 24, 30, 36, 42, 48, 54' },
      { type: 'choice', prompt: '"3개씩 4줄"을 나타내는 곱셈식에 ○ 하세요.', options: ['3 + 4', '3 × 4', '4 − 3'], answer: '3 × 4' },
      { type: 'short', prompt: '우리 교실에서 배열 모양으로 놓인 것을 찾아 곱셈식으로 써 보세요.' },
    ],
    easy: {
      note: '한 줄에 몇 개인지 먼저 세고, 줄이 몇 줄인지 세어요. 같은 수를 여러 번 더하면 곱셈이에요.',
      items: [
        { type: 'figure', prompt: '배열을 보고 빈칸을 채우세요.', tool: 'multiply', figures: [
          { options: { mode: 'array', lock: true, showCounts: true, maxRows: 4, maxCols: 5 }, state: { rows: 2, cols: 3 }, caption: '3개씩 2줄 → ___개' },
          { options: { mode: 'array', lock: true, showCounts: true, maxRows: 4, maxCols: 5 }, state: { rows: 3, cols: 2 }, caption: '2개씩 3줄 → ___개' }], answer: '6개, 6개' },
        { type: 'figure', prompt: '묶음을 보고 빈칸을 채우세요.', tool: 'multiply', figures: [
          { options: { mode: 'group', count: 8 }, state: { size: 2 }, caption: '2개씩 ___묶음' }], answer: '4묶음' },
        { type: 'choice', prompt: '2 + 2 + 2와 같은 곱셈식에 ○ 하세요.', options: ['2 × 3', '2 × 2'], answer: '2 × 3' },
        { type: 'short', prompt: '3개씩 2줄은 모두 몇 개인가요?' },
      ],
    },
  },
  differentiation: {
    easy: '배열 옆에 곱셈식과 값이 보이고 줄마다 띠가 둘러져요. 묶어 세기에서는 묶음 수와 남은 수가 보여요.',
    base: '식이 보이지 않아요. 배열과 묶음을 보고 스스로 세어 답해요.',
    challenge: '남는 것이 있는 묶어 세기와 7단 전체 채우기(더 해 보기)까지 해요.',
  },
  teacherNotes: '자주 보이는 어려움: ① "4개씩 3줄"에서 줄 수와 한 줄 개수를 바꾼다 → 교구는 "몇 개씩은 한 줄(가로)에 놓는 수"라고 짚는다. ② 모두 몇 개인지 물을 때 두 수를 더한다(4 + 5) → 같은 수를 여러 번 더하는 것이 곱셈. ③ 묶음 수 대신 한 묶음의 개수를 쓴다. ④ 곱셈표에서 옆 칸 값을 그대로 쓴다 → 오른쪽으로 한 칸 가면 단의 수만큼 커진다. 남는 것이 있는 묶어 세기(나머지)는 3학년 나눗셈으로 이어지는 맛보기로만 쓴다.',
});
