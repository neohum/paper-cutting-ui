/* 6학년 2학기 6. 원기둥, 원뿔, 구 — 원기둥의 전개도 알아보기 */
PaperLessons.register({
  id: 'g6-math-cylinder',
  schema: 'edu-lesson.v1',
  catalog: { unit: 'g6-수학-2학기-6', lesson: 3 },
  grade: 6, subject: '수학', unitTitle: '6. 원기둥, 원뿔, 구',
  title: '원기둥의 전개도 알아보기',
  objective: '원기둥의 전개도에서 옆면의 가로는 밑면의 둘레, 세로는 원기둥의 높이와 같음을 설명하고, 옆면의 가로와 세로의 길이를 구할 수 있다.',
  standards: ['[6수03-07]', '[6수03-08]'],
  minutes: 40,
  formats: ['chromebook', 'projector', 'print'],
  illustration: {
    prompt: "Layered paper-cut illustration of a smiling paper tin can rolling across a craft table and leaving behind its striped paper label unrolled into one long flat rectangle, with exactly two identical round paper lids, one lid touching the middle of the rectangle's top edge and the other lid touching the middle of its bottom edge, no letters or numbers anywhere, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.",
    image: 'img/g6-math-cylinder.webp', size: [1200, 800],
    scene: { viewBox: [480, 270], layers: [
      { motif: 'sun', x: 410, y: 58, s: 0.8 }, { motif: 'cloud', x: 110, y: 50 }, { motif: 'cloud', x: 280, y: 38, s: 0.6 },
      { motif: 'hills', y: 206, colors: ['sky', 'mint', 'buttercup'] }, { motif: 'tree', x: 70, y: 220 }, { motif: 'flower', x: 400, y: 236, color: 'lavender' },
      { motif: 'star', x: 170, y: 104, color: 'peach' }, { motif: 'star', x: 330, y: 112, color: 'mint' },
      { motif: 'text', x: 240, y: 150, text: '통조림 상표 종이를 펼치면 어떤 모양일까요?', size: 20 },
    ] },
  },
  stages: [
    {
      id: 'intro', title: '도입', minutes: 7,
      teacher: '통조림 캔이나 두루마리 휴지 심을 보여 주며 "옆면의 상표 종이를 세로로 잘라 펼치면 어떤 모양이 될까요?"라고 묻고 예상을 두세 명에게 듣는다. 시연 단추로 원기둥이 바닥을 한 바퀴 구르며 옆면이 펼쳐지는 모습을 보여 준 뒤 "굴러간 길이는 원기둥의 어느 부분과 같을까요?"로 활동을 연다. 앞 단원의 원주(지름 × 원주율)를 떠올리게 한다.',
      student: '원기둥의 옆면을 잘라 펼치면 어떤 모양이 될지 예상해 봅시다.',
      demo: { tool: 'cylnet', options: { labels: 'none', fixed: true, start: { r: 3, h: 5 } }, sequence: [{ unrolled: true }] },
    },
    {
      id: 'main', title: '전개', minutes: 26,
      activities: [
        {
          id: 'a1', title: '활동 1. 원기둥을 굴려 전개도 만들기', minutes: 9, tool: 'cylnet',
          task: '"펼치기"를 눌러 원기둥을 한 바퀴 굴려 봐요. 펼친 옆면의 가로와 세로가 원기둥의 어느 부분과 같은지 찾아봐요.',
          teacher: '"굴러간 자국에 찍힌 분홍 선은 무엇의 길이일까요?" 밑면 테두리가 바닥에 한 바퀴 닿았으므로 가로 = 밑면의 둘레라는 것을, 서 있던 원기둥의 키가 그대로 세로가 된다는 것을 학생 말로 정리한다. 두 밑면이 옆면의 위와 아래(반대쪽)에 하나씩 붙는다는 것도 짚는다. 2·3번은 고르기 전까지 이름표가 "?"로 가려진다.',
          levels: { easy: { labels: 'numbers', fixed: true }, base: { labels: 'words', fixed: true }, challenge: { labels: 'none', fixed: true } },
          items: [
            { prompt: '원기둥을 펼쳐 보세요.', target: { unrolled: true }, toolOptions: { labels: 'none' }, difficulty: 0.05,
              predict: { q: '원기둥의 옆면을 잘라 펼치면 어떤 모양일까요?', options: ['직사각형', '원', '삼각형'], answer: 0 },
              conclude: '원기둥의 전개도는 옆면 직사각형 1개와 크기가 같은 원(밑면) 2개로 되어 있어요.' },
            { prompt: '펼친 옆면의 가로는 원기둥의 어느 부분과 길이가 같은지 고르세요. 원기둥이 굴러가는 모습을 잘 보세요.', target: { unrolled: true, width: '밑면의 둘레' }, toolOptions: { ask: 'width' }, difficulty: 0.2,
              conclude: '원기둥이 한 바퀴 구르면 밑면 테두리가 바닥에 한 번 다 닿아요. 그래서 옆면의 가로 = 밑면의 둘레예요.' },
            { prompt: '펼친 옆면의 세로는 원기둥의 어느 부분과 길이가 같은지 고르세요.', target: { unrolled: true, height: '원기둥의 높이' }, toolOptions: { ask: 'height' }, difficulty: 0.1 },
            { prompt: '더 해 보기: 밑면의 반지름을 4 cm로 늘리고 다시 펼쳐 보세요.', state: { r: 2, h: 5 }, target: { unrolled: true, r: 4 }, toolOptions: { fixed: false, rMax: 4, hMax: 6 }, extra: true, difficulty: 0.15,
              predict: { q: '반지름을 2 cm에서 4 cm로 2배 늘리면 옆면의 가로는 어떻게 될까요?', options: ['그대로예요', '2배가 돼요', '4배가 돼요'], answer: 1 },
              conclude: '지름이 2배가 되면 둘레(지름 × 3.14)도 2배라서 옆면의 가로도 2배가 돼요. 세로(높이)는 그대로예요.' },
          ],
        },
        {
          id: 'a2', title: '활동 2. 옆면의 가로 길이 구하기', minutes: 11, tool: 'cylnet',
          task: '옆면의 가로는 밑면의 둘레예요. 둘레 = 지름 × 원주율(3.14)로 옆면의 가로를 구해 칸에 써 봐요.',
          teacher: '"반지름이 주어졌을 때와 지름이 주어졌을 때 무엇이 다를까요?" 반지름 × 3.14만 하는 실수, 지름에 2를 또 곱하는 실수가 가장 많다. 교구는 두 경우를 따로 짚어 준다. 4번은 길이를 재지 않고 두 밑면의 자리·크기, 옆면의 가로를 근거로 고르게 한다. 활동지 4번 표를 계산 메모로 함께 쓴다.',
          levels: {
            easy: { pad: true, fixed: true, steps: true, labels: 'words' },
            base: { pad: true, fixed: true, labels: 'words' },
            challenge: { pad: true, fixed: true, labels: 'none' },
          },
          items: [
            { prompt: '밑면의 반지름이 3 cm, 높이가 5 cm인 원기둥이에요. 옆면의 가로를 구해 써 넣으세요.', state: { r: 3, h: 5, unrolled: true }, target: { width: 18.84, r: 3 }, difficulty: 0.15 },
            { prompt: '밑면의 지름이 10 cm, 높이가 4 cm인 원기둥이에요. 옆면의 가로를 구해 써 넣으세요.', state: { r: 5, h: 4, unrolled: true }, toolOptions: { given: 'diameter' }, target: { width: 31.4, r: 5 }, difficulty: 0.2 },
            { prompt: '밑면의 반지름이 4 cm, 높이가 7 cm인 원기둥이에요. 옆면의 가로를 구해 써 넣으세요.', state: { r: 4, h: 7, unrolled: true }, target: { width: 25.12, r: 4 }, difficulty: 0.22 },
            { prompt: '밑면의 반지름이 2 cm, 높이가 4 cm인 원기둥의 전개도를 그렸어요. 알맞은 것을 고르세요. (원주율 3.14)', toolOptions: { judge: { r: 2, h: 4, nets: ['same', 'ok', 'short'] } }, target: { judge: 1 }, difficulty: 0.2,
              conclude: '원기둥의 전개도는 두 밑면이 옆면의 위와 아래에 하나씩 있고, 두 밑면은 크기가 같고, 옆면의 가로가 밑면의 둘레와 같아요.' },
            { prompt: '더 해 보기: 옆면의 가로가 37.68 cm가 되는 원기둥을 만들려고 해요. 먼저 밑면의 지름을 구해 칸에 쓰고, 밑면의 반지름을 맞춘 뒤 확인하세요.', state: { r: 2, h: 5, unrolled: true }, toolOptions: { pad: true, padFor: 'diameter', fixed: false, rMax: 6, hMax: 5, steppers: 'r', steps: false }, target: { r: 6, findR: true }, extra: true, difficulty: 0.18,
              conclude: '37.68 ÷ 3.14 = 12(지름)이고, 반지름은 12 ÷ 2 = 6 cm예요.' },
          ],
        },
        {
          id: 'a3', title: '활동 3. 짝과 원기둥 전개도 설명하기', minutes: 6, tool: 'cylnet', pair: true,
          task: '짝에게 반지름과 높이를 정해 주고, 짝은 원기둥을 펼친 뒤 옆면의 가로와 세로를 까닭과 함께 말해 봅시다.',
          teacher: '말하기 틀을 칠판에 적어 둔다. 짝의 말에 "왜 지름에 3.14를 곱했어?"처럼 까닭을 되묻게 한다.',
          levels: { easy: { labels: 'numbers' }, base: { labels: 'words' }, challenge: { labels: 'none' } },
          items: [{ difficulty: 0, free: true, talk: true, prompt: '"옆면의 가로가 ___ cm인 까닭은 밑면의 둘레가 지름 ___ × 3.14이기 때문이야. 세로는 높이와 같아서 ___ cm야." 틀에 맞춰 번갈아 말한 뒤 "다 했어요"를 누르세요.' }],
        },
      ],
    },
    {
      id: 'wrapup', title: '정리', minutes: 7,
      teacher: '"원기둥의 전개도에서 옆면의 가로와 세로는 각각 무엇과 같았나요? 왜 그럴까요?" 출구 질문 2번(지름이 주어진 문제)과 3번을 틀린 학생은 다음 시간에 반지름·지름을 먼저 확인한다.',
      exitTicket: [
        { type: 'choice', prompt: '원기둥의 전개도에서 두 밑면은 어떻게 놓이나요?', options: ['옆면의 같은 쪽에 나란히 붙어요', '옆면의 위와 아래(서로 반대쪽)에 하나씩 붙어요', '옆면 안에 그려요'], answer: 1, difficulty: 0.1, explain: '접었을 때 한 밑면은 위를, 다른 밑면은 아래를 막아야 하므로 옆면의 반대쪽에 하나씩 붙어요.' },
        { type: 'tool', tool: 'cylnet', options: { pad: true, fixed: true, given: 'diameter', labels: 'words' }, state: { r: 2, h: 3, unrolled: true }, prompt: '밑면의 지름이 4 cm, 높이가 3 cm인 원기둥의 전개도에서 옆면의 가로를 구해 써 넣으세요.', target: { width: 12.56, r: 2 }, difficulty: 0.2, explain: '옆면의 가로 = 밑면의 둘레 = 지름 × 3.14 = 4 × 3.14 = 12.56 (cm)예요.' },
        { type: 'choice', prompt: '밑면의 반지름이 3 cm인 원기둥의 옆면 가로를 "3 × 3.14 = 9.42 cm"라고 한 친구가 있어요. 바르게 고친 식은 무엇인가요?', options: ['3 × 2 × 3.14 = 18.84 (cm)', '3 × 3 × 3.14 = 28.26 (cm)', '3 × 2 = 6 (cm)'], answer: 0, difficulty: 0.2, explain: '둘레는 지름 × 원주율이에요. 반지름 3 cm의 지름은 6 cm이므로 6 × 3.14 = 18.84 (cm)예요. 3 × 3 × 3.14는 원의 넓이예요.' },
        { type: 'short', prompt: '원기둥의 전개도에서 옆면의 가로가 밑면의 둘레와 같은 까닭을 "굴리면" 또는 "말면"을 넣어 써 보세요.', answer: '옆면을 말아 원기둥을 만들면 옆면의 가로가 밑면의 테두리를 한 바퀴 두르기 때문이에요(원기둥을 한 바퀴 굴리면 밑면 둘레만큼 나아가요).' },
        { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
      ],
    },
  ],
  worksheet: {
    title: '원기둥의 전개도',
    items: [
      { type: 'figure', prompt: '반지름이 2 cm, 높이가 6 cm인 원기둥을 펼쳤어요. 옆면의 가로와 세로를 구하세요. (원주율 3.14)', tool: 'cylnet', figures: [
        { state: { r: 2, h: 6 }, caption: '반지름 2 cm, 높이 6 cm' },
        { state: { r: 2, h: 6, unrolled: true }, caption: '가로: ______ cm   세로: ______ cm' }], answer: '가로 = 밑면의 둘레 = 4 × 3.14 = 12.56 cm, 세로 = 높이 = 6 cm' },
      { type: 'figure', wide: true, prompt: '원기둥의 전개도가 아닌 것을 모두 찾아 ×표 하고, 그 까닭을 쓰세요.', tool: 'cylnet', options: { judge: { r: 2, h: 3, nets: ['ok', 'size', 'same'] } }, figures: [
        { caption: '까닭: ______________________________' }], answer: '나 × (두 밑면의 크기가 달라요), 다 × (두 밑면이 옆면의 같은 쪽에 있어요). 가는 전개도예요.' },
      { type: 'blank', prompt: '알맞은 말을 쓰세요.', text: '원기둥의 전개도에서 옆면의 가로는 밑면의 ___와 같고, 세로는 원기둥의 ___와 같아요. 옆면의 가로 = 지름 × ___', answer: '둘레, 높이, 원주율(3.14)' },
      { type: 'table', prompt: '옆면의 가로와 세로를 구하세요.', columns: ['원기둥', '옆면의 가로 (식과 답)', '옆면의 세로'], rows: 3, cells: [['① 반지름 5 cm, 높이 4 cm', '', ''], ['② 지름 6 cm, 높이 10 cm', '', ''], ['③ 지름 14 cm, 높이 2 cm', '', '']], answer: '① 10 × 3.14 = 31.4 cm, 4 cm ② 6 × 3.14 = 18.84 cm, 10 cm ③ 14 × 3.14 = 43.96 cm, 2 cm' },
      { type: 'short', prompt: '두루마리 휴지 심을 세로로 잘라 펼쳤더니 직사각형이 되었어요. 직사각형의 가로는 휴지 심의 어느 부분과 같은지, 그렇게 생각한 까닭을 쓰세요.', answer: '휴지 심 밑면(원)의 둘레와 같아요. 펼친 종이를 다시 말면 가로가 원 테두리를 한 바퀴 두르기 때문이에요.' },
    ],
    easy: {
      note: '옆면의 가로 = 밑면의 둘레 = 지름 × 3.14 (지름 = 반지름 × 2), 옆면의 세로 = 원기둥의 높이예요.',
      items: [
        { type: 'figure', prompt: '반지름이 2 cm, 높이가 6 cm인 원기둥을 펼쳤어요. 옆면의 가로와 세로를 구하세요. (원주율 3.14)', tool: 'cylnet', figures: [
          { state: { r: 2, h: 6 }, caption: '반지름 2 cm, 높이 6 cm' },
          { state: { r: 2, h: 6, unrolled: true }, caption: '가로: 지름 ___ × 3.14 = ___ cm   세로: ___ cm' }], answer: '가로 = 4 × 3.14 = 12.56 cm, 세로 = 6 cm' },
        { type: 'blank', prompt: '알맞은 말을 쓰세요.', text: '원기둥의 전개도에서 옆면의 가로는 밑면의 ___와 같고, 세로는 원기둥의 ___와 같아요.', answer: '둘레, 높이' },
        { type: 'table', prompt: '옆면의 가로를 구하세요.', columns: ['원기둥', '지름', '옆면의 가로 (지름 × 3.14)'], rows: 2, cells: [['① 반지름 5 cm', '', ''], ['② 지름 6 cm', '', '']], answer: '① 10 cm, 31.4 cm ② 6 cm, 18.84 cm' },
        { type: 'short', prompt: '원기둥의 전개도에서 두 밑면은 어디에 붙나요?', answer: '옆면의 위와 아래에 하나씩 붙어요.' },
      ],
    },
  },
  differentiation: {
    easy: '펼친 옆면에 가로·세로의 길이가 숫자와 식으로 보이고, 길이를 구할 때 "지름 = 반지름 × 2" 도움 줄이 나와요.',
    base: '가로·세로 이름표가 낱말로만 보이고, 고르는 문항에서는 고르기 전까지 "?"로 가려져요.',
    challenge: '이름표가 없어요. 굴러가는 모습만 보고 가로·세로를 찾아 식을 세워요. 더 해 보기(가로에서 지름·반지름 거꾸로 찾기)는 지름을 먼저 써야 하고, 틀린 확인은 길고 짧음을 알려 주지 않아요.',
  },
  teacherNotes: '흔한 오개념: ① 옆면의 가로를 밑면의 지름(또는 반지름)으로 생각한다 — 원기둥을 한 바퀴 굴린 자국(교구의 분홍 선)이 밑면 테두리 한 바퀴임을 보게 한다. ② 둘레를 반지름 × 3.14로 구한다 — 둘레는 지름 × 원주율이며, 교구가 "반지름 × 3.14만 했어요"로 짚는다. 지름이 주어졌는데 2를 또 곱하는 실수도 따로 알려 준다. ③ 두 밑면을 옆면의 같은 쪽에 그려도 된다고 생각한다 — 접었을 때 위·아래를 하나씩 막아야 한다. ④ 두 밑면의 크기가 달라도 된다고 생각한다 — 원기둥의 두 밑면은 합동이다. ⑤ 밑면의 넓이(반지름 × 반지름 × 3.14)와 둘레를 헷갈린다. 원주율은 교과서대로 3.14를 쓴다. 종이컵(위아래 크기가 달라 원기둥이 아님) 대신 휴지 심처럼 위아래 크기가 같은 원통(원기둥)을 잘라 보는 활동을 곁들이면 좋다. 힌트는 1단계(개념) → 2단계(반지름인지 지름인지 짚기) → 3단계(수를 넣은 식) 순서로 열리고, 첫 오답 피드백은 정답 수가 아니라 오개념(반지름 × 3.14만 함, 지름에 2를 또 곱함 등)을 말한다.',
});
