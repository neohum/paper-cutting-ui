/* 교구 검사 차시 — 도형판(shapes)의 세 모드(점판·칠교·분류)와 묻기 칸을 모두 쓴다. 4학년 2학기 6. 다각형 */
PaperLessons.register({
  id: '_tool-shapes',
  schema: 'edu-lesson.v1',
  catalog: { unit: 'g4-수학-2학기-6', lesson: 1 },
  grade: 4, subject: '수학', unitTitle: '6. 다각형',
  title: '점판과 칠교로 도형 만들고 성질로 나누기',
  objective: '점판에 조건에 맞는 다각형을 만들고, 칠교 조각을 돌리고 뒤집어 모양을 채우며, 도형을 변과 각의 성질로 나눌 수 있다.',
  standards: ['[4수03-11]', '[4수03-12]'],
  minutes: 40,
  formats: ['chromebook', 'projector', 'print'],
  illustration: {
    prompt: 'Layered paper-cut illustration of children building triangles and squares with rubber bands on a pegboard beside scattered tangram pieces, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.',
    scene: { viewBox: [480, 270], layers: [
      { motif: 'cloud', x: 110, y: 50 }, { motif: 'sun', x: 410, y: 58, s: 0.8 }, { motif: 'hills', y: 205 },
      { motif: 'house', x: 120, y: 218, color: 'sky' }, { motif: 'tree', x: 380, y: 214 }, { motif: 'star', x: 250, y: 70 },
      { motif: 'text', x: 240, y: 150, text: '점을 이으면 어떤 도형이 될까요?', size: 21 },
    ] },
  },
  stages: [
    {
      id: 'intro', title: '도입', minutes: 7,
      teacher: '"점 세 개를 이으면 어떤 도형이 생길까요? 네 개면요?" 시연 단추로 점판에 삼각형과 정사각형이 생기는 모습을 보여 준다. "곧은 선으로만 둘러싸인 도형을 다각형이라고 해요. 원은 다각형일까요?"라고 물어 굽은 선이 있으면 다각형이 아님을 짚는다. 한 줄 위에 놓인 점은 꼭짓점이 아니라는 것도 미리 말해 둔다.',
      student: '교실에서 곧은 선으로 둘러싸인 모양을 찾아 이름을 말해 봅시다.',
      demo: { tool: 'shapes', options: { mode: 'geoboard', size: 5 }, sequence: [{ shape: 'triangle' }, { shape: 'square' }] },
    },
    {
      id: 'main', title: '전개', minutes: 26,
      activities: [
        {
          id: 'a1', title: '활동 1. 점판에 조건에 맞는 도형 만들기', minutes: 10, tool: 'shapes',
          teacher: '"직사각형이 되려면 무엇이 꼭 있어야 하나요?" 네 각이 모두 직각인지를 점판의 가로줄·세로줄로 확인하게 한다. 정사각형을 만들어 "직사각형이 아니에요"라고 말하는 학생에게는 정사각형도 네 각이 직각이므로 직사각형이라고 짚는다. 오각형 문항에서 한 줄 위에 세 점을 찍은 학생에게는 가운데 점이 꼭짓점이 아님을 보여 준다.',
          task: '점판의 점을 차례로 눌러 도형을 만들어요. 찍은 점을 다시 누르면 빠져요. 방향키와 Enter로도 할 수 있어요.',
          levels: {
            easy: { mode: 'geoboard', size: 5, showRight: true },
            base: { mode: 'geoboard', size: 5 },
            challenge: { mode: 'geoboard', size: 6 },
          },
          items: [
            { prompt: '점을 이어 삼각형을 하나 만들어 보세요.', target: { shape: 'triangle' }, difficulty: 0.05 },
            { prompt: '네 각이 모두 직각인 사각형(직사각형)을 만들어 보세요.', target: { shape: 'rectangle' }, difficulty: 0.12,
              predict: { q: '정사각형도 직사각형이라고 할 수 있을까요?', options: ['네, 할 수 있어요', '아니요, 다른 도형이에요', '잘 모르겠어요'] },
              conclude: '정사각형도 네 각이 모두 직각이라서 직사각형이에요.' },
            { prompt: '변이 5개인 도형(오각형)을 만들어 보세요.', target: { sides: 5 }, difficulty: 0.15, reveal: 'after-check' },
            { prompt: '평행한 변이 한 쌍만 있는 사각형(사다리꼴)을 만들어 보세요.', target: { shape: 'trapezoid', exact: true }, difficulty: 0.25 },
            { prompt: '더 해 보기: 넓이가 6칸인 직사각형을 만들어 보세요.', target: { shape: 'rectangle', area: 6 }, toolOptions: { showArea: true }, extra: true, difficulty: 0.3, reveal: 'after-check',
              levels: { challenge: { prompt: '더 해 보기: 넓이가 8칸이고 정사각형이 아닌 직사각형을 만들어 보세요.', target: { shape: 'rectangle', area: 8 } } } },
          ],
        },
        {
          id: 'a2', title: '활동 2. 칠교 조각을 돌리고 뒤집어 채우기', minutes: 8, tool: 'shapes',
          teacher: '"조각을 돌리면 모양이 바뀔까요, 방향만 바뀔까요?" 돌리기 단추를 함께 눌러 크기와 모양은 그대로이고 방향만 바뀜을 확인한다. 평행사변형 문항에서 안 맞는다고 하는 학생에게 한 조각을 돌려 보게 한다.',
          task: '오른쪽 조각을 끌어 왼쪽 그림자 자리에 놓아요. 조각을 고른 뒤 돌리기(R)와 뒤집기(F)로 방향을 맞춰요.',
          levels: {
            easy: { mode: 'tangram', lines: true },
            base: { mode: 'tangram' },
            challenge: { mode: 'tangram' },
          },
          items: [
            { prompt: '작은 삼각형 두 조각으로 큰 삼각형 자리를 채워 보세요.', toolOptions: { figure: 'triangle2' }, target: { fit: true }, difficulty: 0.1 },
            { prompt: '작은 삼각형 두 조각으로 평행사변형을 채워 보세요. 한 조각을 돌려야 해요.', toolOptions: { figure: 'parallelogram2' }, target: { fit: true }, difficulty: 0.2 },
            { prompt: '중간 삼각형 하나와 작은 삼각형 두 개로 정사각형을 채워 보세요.', toolOptions: { figure: 'square3' }, target: { fit: true }, difficulty: 0.25 },
            { prompt: '더 해 보기: 일곱 조각으로 큰 정사각형을 채워 보세요.', toolOptions: { figure: 'square7' }, target: { fit: true }, extra: true, difficulty: 0.45 },
          ],
        },
        {
          id: 'a3', title: '활동 3. 도형 카드를 성질로 나누기', minutes: 8, tool: 'shapes',
          teacher: '"크기나 색이 아니라 무엇을 보고 나누나요?" 기울어진 정사각형 카드를 마름모라고만 하는 학생에게 네 각이 직각인지 먼저 보게 한다. 평행한 변이 없는 사각형 카드는 "사각형이지만 사다리꼴은 아니에요"라고 짚는다.',
          task: '카드를 누른 뒤 칸 이름 단추를 누르면 그 칸에 들어가요. 카드에서 Enter를 누르면 다음 칸으로 가요.',
          levels: {
            easy: { mode: 'classify' },
            base: { mode: 'classify' },
            challenge: { mode: 'classify' },
          },
          items: [
            { prompt: '변의 수에 따라 도형 카드를 나누어 보세요.', toolOptions: { cards: [{ id: 'a', shape: 'triangle' }, { id: 'b', shape: 'square', rot: 20 }, { id: 'c', shape: 'pentagon' }, { id: 'd', shape: 'right-triangle' }, { id: 'e', shape: 'trapezoid' }, { id: 'f', shape: 'hexagon' }], bins: ['변이 3개', '변이 4개', '변이 5개 이상'] },
              target: { bins: { a: 0, b: 1, c: 2, d: 0, e: 1, f: 2 } }, difficulty: 0.1 },
            { prompt: '평행한 변이 몇 쌍인지에 따라 사각형 카드를 나누어 보세요.', toolOptions: { cards: [{ id: 'p', shape: 'parallelogram' }, { id: 'r', shape: 'rectangle' }, { id: 't', shape: 'trapezoid' }, { id: 'k', pts: [[0.5, 0.05], [0.92, 0.4], [0.5, 0.95], [0.08, 0.4]] }, { id: 'm', shape: 'rhombus' }], bins: ['두 쌍', '한 쌍', '없어요'] },
              target: { bins: { p: 0, r: 0, t: 1, k: 2, m: 0 } }, difficulty: 0.3 },
            { prompt: '직각이 있는 도형과 없는 도형으로 나누어 보세요.', toolOptions: { cards: [{ id: 'q', shape: 'right-triangle', rot: 90 }, { id: 'w', shape: 'rectangle' }, { id: 'x', shape: 'obtuse-triangle' }, { id: 'y', shape: 'rhombus' }, { id: 'z', shape: 'square', rot: 45 }], bins: ['직각이 있어요', '직각이 없어요'] },
              target: { bins: { q: 0, w: 0, x: 1, y: 1, z: 0 } }, difficulty: 0.3,
              conclude: '정사각형은 기울여 놓아도 네 각이 모두 직각이에요.' },
          ],
        },
      ],
    },
    {
      id: 'wrapup', title: '정리', minutes: 7,
      teacher: '"오늘 만든 도형 가운데 이름이 둘 이상인 도형이 있었나요?" 정사각형-직사각형-사다리꼴의 포함 관계를 칠판에 그림으로 묶는다. 출구 1번(변의 수)을 틀린 학생은 한 줄 위의 점을 꼭짓점으로 셌는지 다음 시간에 먼저 확인한다.',
      exitTicket: [
        { type: 'tool', tool: 'shapes', options: { mode: 'geoboard', size: 5, readOnly: true, askNum: { q: '이 도형의 변은 몇 개인가요?', unit: '개' } }, state: { pts: [[1, 0], [3, 0], [4, 2], [3, 4], [1, 4], [0, 2]] }, prompt: '점판의 도형을 보고 변이 몇 개인지 쓰세요.', target: { num: 6 }, difficulty: 0.1 },
        { type: 'tool', tool: 'shapes', options: { mode: 'geoboard', size: 5 }, prompt: '마주 보는 두 쌍의 변이 평행하고 직각이 없는 사각형을 만드세요.', target: { shape: 'parallelogram', exact: true }, difficulty: 0.3 },
        { type: 'choice', prompt: '정사각형에 대해 바르게 말한 것은 무엇인가요?', options: ['직사각형이 아니에요', '직사각형이기도 하고 마름모이기도 해요', '변이 5개예요'], answer: 1, difficulty: 0.25, explain: '정사각형은 네 각이 직각이라 직사각형이고, 네 변이 같아 마름모이기도 해요.' },
        { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
      ],
    },
  ],
  worksheet: {
    title: '점판과 칠교',
    items: [
      { type: 'figure', prompt: '점판의 도형을 보고 변과 꼭짓점의 수를 쓰세요.', tool: 'shapes', options: { mode: 'geoboard', size: 5 }, figures: [
        { state: { pts: [[0, 0], [4, 0], [2, 3]] }, caption: '변 ___개 · 꼭짓점 ___개' }, { state: { pts: [[1, 0], [3, 0], [4, 3], [0, 3]] }, caption: '변 ___개 · 꼭짓점 ___개' }, { state: { pts: [[2, 0], [4, 1], [3, 3], [1, 3], [0, 1]] }, caption: '변 ___개 · 꼭짓점 ___개' }], answer: '3개·3개, 4개·4개, 5개·5개' },
      { type: 'figure', prompt: '칠교 조각 몇 개로 채운 모양일까요? 조각의 경계선을 그어 보세요.', tool: 'shapes', options: { mode: 'tangram' }, figures: [{ options: { figure: 'square3' }, caption: '조각 3개' }, { options: { figure: 'parallelogram2' }, caption: '조각 2개' }], answer: '정사각형: 중간 삼각형 1 + 작은 삼각형 2, 평행사변형: 작은 삼각형 2' },
      { type: 'choice', prompt: '사다리꼴을 바르게 설명한 것에 ○ 하세요.', options: ['평행한 변이 적어도 한 쌍 있는 사각형', '네 변의 길이가 모두 같은 사각형', '직각이 꼭 있는 사각형'], answer: '평행한 변이 적어도 한 쌍 있는 사각형' },
      { type: 'table', prompt: '도형의 성질을 표에 쓰세요.', columns: ['도형', '변의 수', '직각의 수'], cells: [['직사각형', '', ''], ['직각삼각형', '', ''], ['오각형(그림 3)', '', '']], answer: '4·4, 3·1, 5·0' },
      { type: 'draw', prompt: '점판 모눈에 넓이가 6칸인 직사각형을 두 가지 그려 보세요.' },
    ],
    easy: {
      note: '변은 곧은 선, 꼭짓점은 두 변이 만나는 점이에요. 한 줄 위에 놓인 점은 꼭짓점이 아니에요.',
      items: [
        { type: 'figure', prompt: '변과 꼭짓점의 수를 쓰세요.', tool: 'shapes', options: { mode: 'geoboard', size: 5 }, figures: [
          { state: { pts: [[0, 0], [4, 0], [2, 3]] }, caption: '변 ___개 · 꼭짓점 ___개' }, { state: { pts: [[0, 0], [3, 0], [3, 3], [0, 3]] }, caption: '변 ___개 · 꼭짓점 ___개' }], answer: '3개·3개, 4개·4개' },
        { type: 'choice', prompt: '곧은 선으로만 둘러싸인 도형에 ○ 하세요.', options: ['원', '삼각형', '반달 모양'], answer: '삼각형' },
        { type: 'short', prompt: '교실에서 찾은 사각형 물건 두 가지를 쓰세요.' },
      ],
    },
  },
  differentiation: {
    easy: '점판에 직각 표시가 보이고, 칠교 그림자 안에 조각 경계선이 점선으로 보여요.',
    base: '점판 5줄에서 조건에 맞는 도형을 만들고, 경계선 없이 칠교 그림자를 채워요.',
    challenge: '점판이 6줄로 넓어지고, 넓이 8칸 직사각형과 일곱 조각 칠교가 나와요.',
  },
  teacherNotes: '자주 보이는 어려움: ① 정사각형은 직사각형이 아니라고 생각한다 → 직사각형의 조건(네 각이 직각)만 확인하게 한다. ② 한 줄 위의 세 점을 모두 꼭짓점으로 센다 → 교구는 그런 점을 꼭짓점으로 세지 않는다. ③ 기울어진 정사각형을 마름모라고만 부른다 → 직각부터 확인. ④ 칠교 조각을 뒤집어야 하는 자리에서 돌리기만 되풀이한다 → 평행사변형 조각은 뒤집어야 방향이 맞을 때가 있다.',
});
