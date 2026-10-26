/* 6학년 2학기 5. 원의 둘레와 넓이 — 원의 넓이 구하는 방법 알아보기 */
PaperLessons.register({
  id: 'g6-math-circle-area',
  schema: 'edu-lesson.v1',
  catalog: { unit: 'g6-수학-2학기-5', lesson: 5 },
  grade: 6, subject: '수학', unitTitle: '5. 원의 둘레와 넓이',
  title: '원의 넓이 구하는 방법 알아보기',
  objective: '원을 잘게 잘라 직사각형에 가까운 모양으로 바꾸어 원의 넓이를 구하는 방법을 설명하고, 반지름이나 지름을 알 때 원의 넓이를 구할 수 있다.',
  standards: ['[6수03-15]', '[6수03-16]'],
  minutes: 40,
  formats: ['chromebook', 'projector', 'print'],
  illustration: {
    prompt: "Layered paper-cut illustration of a round pastel paper pizza cut into many thin slices that are rearranged into a long rectangle on a picnic blanket in a sunny park, the whole round pizza shown on the left and on the right the same wedge slices placed alternately point-up and point-down so the crusts form the two slightly wavy long edges of the rectangle, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.",
    image: "img/g6-math-circle-area.webp", size: [1200, 600],
    scene: { viewBox: [480, 270], layers: [
      { motif: 'sun', x: 410, y: 58, s: 0.85 }, { motif: 'cloud', x: 110, y: 52 }, { motif: 'cloud', x: 290, y: 40, s: 0.6 },
      { motif: 'hills', y: 196 }, { motif: 'tree', x: 70, y: 214 }, { motif: 'tree', x: 420, y: 218, color: 'sky', s: 0.8 },
      { motif: 'flower', x: 160, y: 236 }, { motif: 'flower', x: 330, y: 240, color: 'lavender' },
      { motif: 'text', x: 240, y: 140, text: '동그란 피자를 잘라 붙이면 어떤 모양이 될까요?', size: 20 },
    ] },
  },
  stages: [
    {
      id: 'intro', title: '도입', minutes: 7,
      teacher: '"동그란 피자의 넓이는 어떻게 잴 수 있을까요? 모눈종이로 세어 보는 방법은 정확하지 않았지요." 시연 단추로 원을 8조각, 32조각으로 잘라 엇갈려 붙이는 모습을 보여 준다(이름표 없이). 시연 뒤 "어떤 도형에 가까워지나요? 그 도형의 가로와 세로는 원의 어디일까요?"를 묻고, 답은 활동에서 스스로 찾게 남겨 둔다.',
      student: '넓이를 아는 도형(직사각형)으로 원을 바꿀 수 있는 방법을 생각해 봅시다.',
      demo: { tool: 'circlearea', options: { labels: 'none', start: { r: 8 } }, sequence: [{ arranged: true, n: 8 }, { arranged: true, n: 32 }] },
    },
    {
      id: 'main', title: '전개', minutes: 26,
      activities: [
        {
          id: 'a1', title: '활동 1. 원을 잘라 직사각형 만들기', minutes: 9, tool: 'circlearea',
          task: '원을 똑같이 잘라 위아래로 엇갈려(번갈아 뒤집어) 붙여 봅시다. 붙인 모양의 가로와 세로가 원의 어느 부분인지 찾아봐요.',
          teacher: '1번은 이름표 없이 붙여 보고 "어떤 모양에 가까워지나요?"를 묻는다. 2번(세로)과 3번(가로)은 학생이 직접 고르기 전까지 이름표가 "?"로 가려진다. 색 테두리(원주)가 위와 아래로 반씩 나뉘어 가로가 되고, 조각 하나의 길이(반지름)가 세로가 되는 것을 손가락으로 짚게 한다. 정확히 직사각형이 아니라 "가까워진다"는 표현을 쓰게 한다.',
          levels: { easy: { labels: 'numbers' }, base: { labels: 'words' }, challenge: { labels: 'none' } },
          items: [
            { prompt: '원을 8조각으로 잘라 엇갈려 붙여 보세요.', target: { arranged: true, n: 8 }, toolOptions: { labels: 'none' }, difficulty: 0.05,
              predict: { q: '원을 잘게 잘라 위아래로 엇갈려 붙이면 어떤 도형에 가까워질까요?', options: ['삼각형', '직사각형', '그대로 원'], answer: 1 },
              conclude: '엇갈려 붙이면 직사각형에 가까운 모양이 돼요. 조각이 많을수록 더 가까워져요.' },
            { prompt: '16조각으로 잘라 붙여 보세요. 붙인 모양의 세로는 원의 어느 부분과 같은지 골라 보세요.', target: { arranged: true, n: 16, height: '반지름' }, toolOptions: { ask: 'height' }, difficulty: 0.2 },
            { prompt: '32조각으로 잘라 붙여 보세요. 붙인 모양의 가로는 원의 어느 부분과 같은지 골라 보세요.', target: { arranged: true, n: 32, width: '원주의 1/2' }, toolOptions: { ask: 'width' }, difficulty: 0.25,
              conclude: '가로는 원주의 1/2, 세로는 반지름이에요. 조각이 많아져도 가로 길이는 그대로이고 선이 곧아질 뿐이에요.' },
          ],
        },
        {
          id: 'a2', title: '활동 2. 원의 넓이 구하기', minutes: 12, tool: 'circlearea',
          task: '붙인 모양(직사각형)의 넓이로 원의 넓이를 구해 숫자판에 넣어요. 원주율은 3.14로 계산해요.',
          teacher: '1번에서 "직사각형의 넓이는 가로 × 세로였지요. 가로 = 원주의 1/2 = 지름 × 원주율 ÷ 2 = 반지름 × 원주율"을 거쳐 식을 스스로 고르게 한다. 공식은 맞게 고른 뒤에 처음 보여 준다. 계산은 활동지 3번 표를 계산 메모로 함께 쓴다. 4번은 지름을 주므로 먼저 반지름을 구해야 한다 — 8 × 8 × 3.14를 넣으면 교구가 "지름을 두 번 곱했어요"라고 알려 준다. 쉬움 단계는 숫자판이 ① 반지름 × 반지름 → ② × 3.14 두 칸으로 나뉜다.',
          levels: { easy: { pad: true, labels: 'numbers', steps: true, start: { n: 32, arranged: true } }, base: { pad: true, labels: 'words' }, challenge: { pad: true, labels: 'none' } },
          items: [
            { prompt: '붙인 모양의 넓이는 가로 × 세로예요. 가로(원주의 1/2)와 세로(반지름)를 넣어 원의 넓이를 구하는 식을 골라 보세요. 원주 = 지름 × 원주율이에요.', state: { n: 32, arranged: true }, toolOptions: { pad: false, ask: 'formula', labels: 'words' }, target: { formula: '반지름 × 반지름 × 원주율' }, difficulty: 0.25,
              conclude: '원의 넓이 = (원주의 1/2) × 반지름 = 반지름 × 반지름 × 원주율' },
            { prompt: '반지름이 5 cm인 원의 넓이를 구해 입력하세요.', state: { r: 5 }, target: { area: 78.5, r: 5 }, difficulty: 0.15 },
            { prompt: '반지름이 10 cm인 원의 넓이를 구해 입력하세요.', state: { r: 10 }, target: { area: 314, r: 10 }, difficulty: 0.05 },
            { prompt: '지름이 8 cm인 원의 넓이를 구해 입력하세요.', state: { r: 4 }, toolOptions: { given: 'diameter' }, target: { area: 50.24, r: 4 }, difficulty: 0.3,
              predict: { q: '지름이 8 cm예요. 넓이를 구하려면 먼저 무엇을 해야 할까요?', options: ['8 × 8을 해요', '8 ÷ 2로 반지름을 구해요', '8 × 3.14를 해요'], answer: 1 },
              conclude: '지름을 알면 먼저 2로 나누어 반지름을 구해요. 4 × 4 × 3.14 = 50.24 (cm²)' },
            { prompt: '반지름이 6 cm인 원의 넓이를 구해 입력하세요. 소수 둘째 자리까지 계산해요.', state: { r: 6 }, target: { area: 113.04, r: 6 }, difficulty: 0.3 },
            { prompt: '더 해 보기: 지름이 20 cm인 원의 넓이를 구해 입력하세요.', state: { r: 10 }, toolOptions: { given: 'diameter' }, target: { area: 314, r: 10 }, extra: true, difficulty: 0.2 },
            { prompt: '더 해 보기: 넓이가 78.5 cm²인 원이 있어요. 손잡이로 이 원의 반지름을 맞춰 보세요.', state: { r: 2 }, toolOptions: { pad: false }, target: { findR: 5, area: 78.5 }, extra: true, difficulty: 0.28,
              conclude: '78.5 ÷ 3.14 = 25이고, 5 × 5 = 25라서 반지름은 5 cm예요. 넓이에서 거꾸로 반지름을 찾을 수 있어요.' },
          ],
        },
        {
          id: 'a3', title: '활동 3. 짝과 원의 넓이 문제 내기', minutes: 5, tool: 'circlearea', pair: true,
          task: '짝에게 반지름이나 지름을 정해 문제를 내고, 짝이 구한 넓이가 맞는지 식으로 설명해 봅시다. "넓이가 ___ cm²인 까닭은 반지름 ___을 두 번 곱하고 3.14를 곱했기 때문이야."',
          teacher: '지름으로 문제를 낸 짝에게는 "반지름을 먼저 구했는지"를 확인하게 한다. 설명 문장 틀을 소리 내어 말하게 한다.',
          levels: { easy: { pad: true, labels: 'numbers', steps: true }, base: { pad: true, labels: 'words' }, challenge: { pad: true, labels: 'none' } },
          items: [{ difficulty: 0, prompt: '짝과 번갈아 문제를 내고 까닭을 말한 뒤 "다 했어요"를 누르세요.', free: true, talk: true }],
        },
      ],
    },
    {
      id: 'wrapup', title: '정리', minutes: 7,
      teacher: '"원의 넓이를 구하는 식을 말로 설명해 볼까요?" 원주를 구하는 식(지름 × 원주율)과 넓이를 구하는 식(반지름 × 반지름 × 원주율)을 나란히 써서 비교하게 한다. 4번 서술형은 다음 시간 첫머리에 두세 명의 글을 함께 읽는다.',
      exitTicket: [
        { type: 'choice', prompt: '조각 수를 8조각에서 32조각으로 늘리면, 붙인 모양의 가로 길이는 어떻게 되나요?', options: ['길어진다', '짧아진다', '거의 그대로이고, 선이 더 곧아진다'], answer: 2, difficulty: 0.2, explain: '가로는 언제나 원주의 절반이에요. 조각이 많아지면 울퉁불퉁한 테두리가 곧은 선에 가까워질 뿐이에요.' },
        { type: 'choice', prompt: '반지름이 2배가 되면 원의 넓이는 몇 배가 될까요?', options: ['2배', '4배', '8배'], answer: 1, difficulty: 0.25, explain: '넓이는 반지름을 두 번 곱하므로 2 × 2 = 4배가 돼요.' },
        { type: 'tool', tool: 'circlearea', options: { pad: true, labels: 'none', given: 'diameter' }, state: { r: 3 }, prompt: '지름이 6 cm인 원의 넓이를 구해 입력하세요.', target: { area: 28.26, r: 3 }, difficulty: 0.2, explain: '지름이 6 cm이면 반지름은 3 cm예요. 3 × 3 × 3.14 = 28.26 (cm²)예요.' },
        { type: 'short', prompt: '원을 잘게 잘라 붙인 모양을 이용해, 원의 넓이가 반지름 × 반지름 × 원주율이 되는 까닭을 쓰세요.', answer: '붙인 모양은 가로가 원주의 1/2(반지름 × 원주율), 세로가 반지름인 직사각형에 가까우므로 넓이는 반지름 × 원주율 × 반지름이다.' },
        { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
      ],
    },
  ],
  worksheet: {
    title: '원의 넓이',
    items: [
      { type: 'figure', prompt: '반지름이 10 cm인 원을 32조각으로 잘라 엇갈려 붙였어요. 붙인 모양의 가로와 세로의 길이를 쓰세요. (원주율: 3.14)', tool: 'circlearea', figures: [
        { state: { n: 32, arranged: false, r: 10 }, options: { showR: true }, caption: '반지름 10 cm인 원' },
        { state: { n: 32, arranged: true, r: 10 }, caption: '가로: ______ cm   세로: ______ cm' }], answer: '가로: 원주의 1/2 = 10 × 3.14 = 31.4 cm, 세로: 반지름 = 10 cm' },
      { type: 'blank', prompt: '알맞은 말을 쓰세요.', text: '원을 잘게 자를수록 붙인 모양은 ___에 가까워져요. 원의 넓이 = 원주의 1/2 × ___ = 반지름 × 반지름 × ___', answer: '직사각형, 반지름, 원주율(3.14)' },
      { type: 'table', prompt: '원의 넓이를 구하세요. (원주율: 3.14)  ① 반지름 4 cm   ② 반지름 7 cm   ③ 지름 12 cm', columns: ['원', '식', '넓이'], rows: 3, cells: [['① 반지름 4 cm', '', ''], ['② 반지름 7 cm', '', ''], ['③ 지름 12 cm', '', '']], answer: '① 4 × 4 × 3.14 = 50.24 cm²  ② 7 × 7 × 3.14 = 153.86 cm²  ③ 반지름 6 cm, 6 × 6 × 3.14 = 113.04 cm²' },
      { type: 'short', prompt: '지름 20 cm 피자 1판과 지름 10 cm 피자 2판 가운데 어느 쪽이 더 많을까요? 넓이를 구해 까닭을 쓰세요.', answer: '지름 20 cm 1판 — 10 × 10 × 3.14 = 314 cm²이고, 지름 10 cm 2판은 5 × 5 × 3.14 × 2 = 157 cm²예요.' },
    ],
    easy: {
      note: '원주의 1/2 = 반지름 × 원주율이에요. 넓이는 ① 반지름 × 반지름을 하고 ② 3.14를 곱해요. 지름을 주면 먼저 2로 나누어 반지름을 구해요.',
      items: [
        { type: 'figure', prompt: '반지름이 10 cm인 원을 잘라 엇갈려 붙였어요. 가로와 세로의 길이를 쓰세요. (원주율: 3.14)', tool: 'circlearea', figures: [
          { state: { n: 32, arranged: false, r: 10 }, options: { showR: true }, caption: '반지름 10 cm인 원' },
          { state: { n: 32, arranged: true, r: 10 }, caption: '가로(원주의 1/2): ____ cm  세로(반지름): ____ cm' }], answer: '가로 31.4 cm, 세로 10 cm' },
        { type: 'blank', prompt: '빈칸을 채워 넓이를 구하세요.', text: '반지름 4 cm: 4 × 4 = ___, ___ × 3.14 = ___ (cm²)   반지름 5 cm: 5 × 5 = ___, ___ × 3.14 = ___ (cm²)', answer: '16, 16, 50.24 / 25, 25, 78.5' },
        { type: 'short', prompt: '지름이 6 cm인 원의 반지름은 몇 cm인가요? 넓이도 구해 보세요.', answer: '반지름 3 cm, 3 × 3 × 3.14 = 28.26 cm²' },
      ],
    },
  },
  differentiation: {
    easy: '붙인 모양에 가로(원주의 1/2)와 세로(반지름)의 길이가 숫자와 식으로 보여요. 활동 2는 처음부터 붙인 모양으로 시작하고, 숫자판이 ① 반지름 × 반지름 → ② × 3.14 두 칸으로 나뉘어 한 단계씩 계산해요.',
    base: '활동 1의 1번은 이름표 없이 붙여 보고, 고르는 문항에서는 맞게 고르기 전까지 이름표가 "?"로 가려져요. 활동 2 첫 문항에서 넓이 식을 스스로 골라요.',
    challenge: '가로·세로 이름표가 없고, 힌트에 수를 넣은 식이 나오지 않아요. 더 해 보기(지름 20 cm, 넓이에서 반지름 거꾸로 찾기)가 나와요.',
  },
  teacherNotes: '흔한 오개념: ① 원주 식(지름 × 원주율)과 넓이 식을 섞어 반지름 × 2 × 3.14로 넓이를 구한다 — 활동 2의 식 고르기에서 "그건 둘레예요"라고 알려 주고, 계산에서도 "원주를 구했어요"라고 짚는다. ② 지름을 주었는데 지름을 두 번 곱한다 — 활동 2의 4번과 출구 3번이 이 오답을 잡는다. ③ 넓이 단위를 cm로 쓴다 — cm²로 쓰게 한다. ④ 잘라 붙인 모양이 정확히 직사각형이라고 생각한다 — 잘게 자를수록 "가까워진다"고 말하게 한다. ⑤ 조각을 많이 자르면 가로가 길어진다고 생각한다 — 출구 1번으로 확인한다. 원주율은 교과서대로 3.14를 쓰며, 실제 원주율은 끝없이 이어지는 수의 어림값임을 덧붙일 수 있다.',
});
