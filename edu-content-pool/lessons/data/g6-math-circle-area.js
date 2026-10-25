/* 6학년 2학기 5. 원의 둘레와 넓이 — 원의 넓이 구하는 방법 알아보기 */
PaperLessons.register({
  id: 'g6-math-circle-area',
  schema: 'edu-lesson.v1',
  catalog: { unit: 'g6-수학-2학기-5', lesson: 5 },
  grade: 6, subject: '수학', unitTitle: '5. 원의 둘레와 넓이',
  title: '원의 넓이 구하는 방법 알아보기',
  objective: '원을 잘게 잘라 직사각형에 가까운 모양으로 바꾸어 원의 넓이를 구하는 방법을 설명하고, 반지름을 알 때 원의 넓이를 구할 수 있다.',
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
      teacher: '"동그란 피자의 넓이는 어떻게 잴 수 있을까요? 모눈종이 방법은 정확하지 않았지요." 시연 단추로 원을 8조각, 32조각으로 잘라 엇갈려 붙이는 모습을 보여 주고 "어떤 도형에 가까워지나요?"라고 묻는다.',
      student: '넓이를 아는 도형(직사각형)으로 원을 바꿀 수 있는 방법을 생각해 봅시다.',
      demo: { tool: 'circlearea', options: { labels: 'words', start: { r: 8 } }, sequence: [{ arranged: true, n: 8 }, { arranged: true, n: 32 }] },
    },
    {
      id: 'main', title: '전개', minutes: 26,
      activities: [
        {
          id: 'a1', title: '활동 1. 원을 잘라 직사각형 만들기', minutes: 10, tool: 'circlearea',
          task: '원을 똑같이 잘라 위아래로 엇갈려(번갈아 뒤집어) 붙여 봅시다. 조각이 많아질수록 어떤 모양에 가까워지나요? 붙인 모양의 가로와 세로가 원의 어느 부분인지도 찾아봐요.',
          teacher: '"붙인 모양의 가로는 원의 어느 부분과 같나요?" 색 테두리(원주)의 절반이 가로가 되고, 세로는 반지름이 된다는 것을 짚는다. 정확히 직사각형이 아니라 "가까워진다"는 표현을 쓰게 한다. 2·3번 문항은 붙인 뒤 세로·가로가 원의 어느 부분인지 고르게 하며, 기본 단계는 맞게 고르기 전까지 그 이름표가 "?"로 가려진다.',
          levels: { easy: { labels: 'numbers' }, base: { labels: 'words' }, challenge: { labels: 'none' } },
          items: [
            { prompt: '원을 8조각으로 잘라 엇갈려 붙여 보세요.', target: { arranged: true, n: 8 }, difficulty: 0 },
            { prompt: '이번에는 16조각으로 잘라 붙여 보세요. 붙인 모양의 세로는 원의 어느 부분과 같은지 골라 보세요.', target: { arranged: true, n: 16, height: '반지름' }, toolOptions: { ask: 'height' }, difficulty: 0.1 },
            { prompt: '32조각으로 잘라 붙여 보세요. 붙인 모양의 가로는 원의 어느 부분과 같은지 골라 보세요.', target: { arranged: true, n: 32, width: '원주의 1/2' }, toolOptions: { ask: 'width' }, difficulty: 0.2 },
          ],
        },
        {
          id: 'a2', title: '활동 2. 원의 넓이 구하기', minutes: 10, tool: 'circlearea',
          task: '원의 넓이 = 반지름 × 반지름 × 원주율(3.14)로 넓이를 구해 숫자판에 입력해 봅시다. 원주율은 원주가 지름의 몇 배인지 나타내는 수예요. 반지름은 문제에 맞춰 놓았어요.',
          teacher: '"직사각형의 넓이는 가로 × 세로였지요. 원주의 1/2 × 반지름을 다시 쓰면?" 원주 = 지름 × 원주율이므로 원주의 1/2 = 반지름 × 원주율임을 거쳐 식을 이끈다. 반지름은 문항마다 미리 맞춰 두고 계산만 채점한다. 쉬움 단계는 처음부터 32조각을 붙인 모양으로 가로·세로 길이(숫자)를 보여 주고, 도전 단계는 두 번 틀려도 식에 수를 넣어 주지 않는다.',
          levels: { easy: { pad: true, labels: 'numbers', start: { n: 32, arranged: true } }, base: { pad: true, labels: 'words' }, challenge: { pad: true, labels: 'none' } },
          items: [
            { prompt: '반지름이 5 cm인 원의 넓이를 구해 입력하세요.', state: { r: 5 }, target: { area: 78.5, r: 5 }, difficulty: 0.15 },
            { prompt: '반지름이 10 cm인 원의 넓이를 구해 입력하세요.', state: { r: 10 }, target: { area: 314, r: 10 }, difficulty: 0.1 },
            { prompt: '반지름이 6 cm인 원의 넓이를 구해 입력하세요. 소수 둘째 자리까지 계산해요.', state: { r: 6 }, target: { area: 113.04, r: 6 }, difficulty: 0.3 },
          ],
        },
        {
          id: 'a3', title: '활동 3. 짝과 원의 넓이 문제 내기', minutes: 6, tool: 'circlearea', pair: true,
          task: '짝에게 반지름을 정해 주고, 짝이 구한 넓이가 맞는지 식으로 확인해 봅시다.',
          levels: { easy: { pad: true, labels: 'numbers' }, base: { pad: true, labels: 'words' }, challenge: { pad: true, labels: 'none' } },
          items: [{ difficulty: 0, prompt: '짝이 정한 반지름으로 넓이를 구하고 "다 했어요"를 누르세요.', free: true }],
        },
      ],
    },
    {
      id: 'wrapup', title: '정리', minutes: 7,
      teacher: '"원의 넓이를 구하는 식을 말로 설명해 볼까요?" 원주를 구하는 식(지름 × 원주율)과 넓이를 구하는 식을 나란히 써서 비교하게 한다.',
      exitTicket: [
        { type: 'choice', prompt: '원의 넓이를 구하는 식으로 알맞은 것은 무엇인가요?', options: ['지름 × 원주율', '반지름 × 반지름 × 원주율', '반지름 × 2 × 원주율'], answer: 1, difficulty: 0.1, explain: '원의 넓이는 원주의 1/2(반지름 × 원주율) × 반지름이라 반지름 × 반지름 × 원주율이에요. 지름 × 원주율은 원주를 구하는 식이에요.' },
        { type: 'choice', prompt: '원을 잘라 붙여 만든 직사각형에서 가로는 원의 어느 부분과 같나요?', options: ['반지름', '원주의 1/2', '지름'], answer: 1, difficulty: 0.15, explain: '원주(색 테두리)가 위와 아래로 반씩 나뉘어 가로가 되므로 가로는 원주의 1/2이고, 세로는 반지름이에요.' },
        { type: 'tool', tool: 'circlearea', options: { pad: true, labels: 'none' }, state: { r: 3 }, prompt: '반지름이 3 cm인 원의 넓이를 구해 입력하세요.', target: { area: 28.26, r: 3 }, difficulty: 0.15, explain: '3 × 3 × 3.14 = 28.26 (cm²)예요.' },
        { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
      ],
    },
  ],
  worksheet: {
    title: '원의 넓이',
    items: [
      { type: 'figure', prompt: '원을 잘게 잘라 엇갈려 붙였어요. 그림을 보고 물음에 답하세요.', tool: 'circlearea', figures: [
        { state: { n: 16, arranged: false, r: 10 }, options: { showR: true }, caption: '반지름 10 cm인 원' },
        { state: { n: 16, arranged: true, r: 10 }, caption: '가로: ________' },
        { state: { n: 32, arranged: true, r: 10 }, caption: '세로: ________' }], answer: '가로: 원주의 1/2(10 × 3.14 = 31.4 cm), 세로: 반지름(10 cm)' },
      { type: 'blank', prompt: '알맞은 말을 쓰세요.', text: '원을 잘게 자를수록 붙인 모양은 ___에 가까워져요. 원의 넓이 = 원주의 1/2 × ___ = 반지름 × 반지름 × ___', answer: '직사각형, 반지름, 원주율(3.14)' },
      { type: 'table', prompt: '원의 넓이를 구하세요. (원주율: 3.14)', columns: ['반지름', '식', '넓이'], rows: 3, answer: '반지름 × 반지름 × 3.14로 계산하고 단위는 cm²로 써요.' },
      { type: 'short', prompt: '반지름이 2배가 되면 원의 넓이는 몇 배가 될까요? 까닭도 쓰세요.', answer: '4배 — 넓이는 반지름을 두 번 곱하므로 2 × 2 = 4배가 돼요.' },
    ],
    easy: { note: '원주의 1/2 = 반지름 × 원주율이에요. 넓이를 구할 때는 반지름을 두 번 곱하고 3.14를 곱해요.' },
  },
  differentiation: {
    easy: '붙인 모양에 가로(원주의 1/2)와 세로(반지름)의 길이가 숫자와 식으로 보여요. 활동 2는 처음부터 붙인 모양으로 시작해요.',
    base: '가로·세로 이름표가 글자로만 보이고, 고르는 문항에서는 맞게 고르기 전까지 "?"로 가려져요.',
    challenge: '가로·세로 이름표가 없고, 힌트에 수를 넣은 식이 나오지 않아요. 붙인 모양을 보고 스스로 가로와 세로를 찾아 식을 세워요.',
  },
  teacherNotes: '흔한 오개념: ① 원주 식(지름 × 원주율)과 넓이 식을 섞어 반지름 × 2 × 3.14로 넓이를 구한다 — 교구가 "원주를 구했어요"라고 알려 준다. ② 지름을 두 번 곱한다. ③ 넓이 단위를 cm로 쓴다 — cm²로 쓰게 한다. ④ 잘라 붙인 모양이 정확히 직사각형이라고 생각한다 — 잘게 자를수록 "가까워진다"고 말하게 한다. 원주율은 교과서대로 3.14를 쓰며, 실제 원주율은 끝없이 이어지는 수의 어림값임을 덧붙일 수 있다. 반지름이 2배이면 넓이는 4배라는 점을 활동지 서술형으로 확인한다.',
});
