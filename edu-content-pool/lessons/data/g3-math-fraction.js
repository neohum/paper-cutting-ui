/* 3학년 1학기 6. 분수와 소수 — 똑같이 나누기와 분수로 나타내기 */
// 장면 레이어 순서: 언덕(배경) → 위치가 있는 모티프 → 글자
const padScene = (hills, placed, texts) => [hills, ...placed, ...texts];

PaperLessons.register({
  id: 'g3-math-fraction',
  schema: 'edu-lesson.v1',
  catalog: { unit: 'g3-수학-1학기-6', lesson: 1 },
  grade: 3, subject: '수학', unitTitle: '6. 분수와 소수',
  title: '똑같이 나누고 분수로 나타내기',
  objective: '전체를 똑같이 나누어 보고, 부분이 전체의 몇 분의 몇인지 분수로 나타낼 수 있다.',
  standards: ['[4수01-09]', '[4수01-10]'],
  minutes: 40,
  formats: ['chromebook', 'projector', 'print'],
  safety: [
    '가위는 날을 닫아서 손잡이 쪽으로 친구에게 건네요.',
    '종이띠를 자를 때는 가위 날 앞에 손가락을 두지 않아요.',
    '자른 종이 조각은 바닥에 떨어지지 않게 모아 두어요.',
  ],
  illustration: {
    prompt: "Layered paper-cut illustration of a round paper pizza cut into four equal slices next to a long striped paper ribbon on a picnic blanket, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.",
    image: "img/g3-math-fraction.webp", size: [1200, 800],
    scene: { viewBox: [480, 270], layers: padScene({ motif: 'hills', y: 204, colors: ['buttercup', 'mint', 'peach'] }, [
      { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 120, y: 52 }, { motif: 'cloud', x: 290, y: 38, s: 0.6 },
      { motif: 'tree', x: 70, y: 214, color: 'mint' }, { motif: 'house', x: 400, y: 218, color: 'peach', s: 0.8 },
      { motif: 'flower', x: 150, y: 240, color: 'rose' }, { motif: 'flower', x: 330, y: 244, color: 'lavender' }, { motif: 'bird', x: 220, y: 88 },
    ], [{ motif: 'text', x: 240, y: 140, text: '피자를 똑같이 나누려면 어떻게 자를까요?', size: 20 }]) },
  },
  stages: [
    {
      id: 'intro', title: '도입', minutes: 5,
      teacher: '"피자 한 판을 4명이 싸우지 않고 나누어 먹으려면 어떻게 잘라야 할까요?" 시연 단추로 피자가 4조각으로 잘리고 한 조각이 색칠되는 모습을 보여 준다. "한 사람이 먹는 양은 전체의 얼마일까요?"',
      student: '피자를 4명이 똑같이 나누어 먹으려면 어떻게 잘라야 할지 이야기해 봅시다.',
      demo: { tool: 'fraction', options: { shape: 'pizza', showTerms: true }, sequence: [{ den: 4 }, { den: 4, num: 1 }] },
    },
    {
      id: 'main', title: '전개', minutes: 28,
      activities: [
        {
          id: 'a1', title: '활동 1. 똑같이 나누기', minutes: 9, tool: 'fraction',
          task: '피자와 종이띠를 똑같이 나누어 보고, 똑같이 나누었는지 살펴봅시다.',
          teacher: '"조각 수가 4개이면 모두 똑같이 나눈 걸까요?" 조각 수가 같아도 크기가 다르면 똑같이 나눈 것이 아님을 \'겹쳐 보기\' 단추로 확인하게 한다. 판단을 틀리면 겹쳐 보기를 해야 다시 고를 수 있다.',
          // 도전: 판단 문항에서 '똑같지 않아요'를 고르면 가장 큰 조각도 눌러 근거를 보여야 한다
          levels: { easy: { showTerms: true, max: 8 }, base: {}, challenge: { hideFraction: true, judgeWhy: true } },
          items: [
            { prompt: '피자를 똑같이 4조각으로 잘라 보세요.', toolOptions: { shape: 'pizza' }, target: { den: 4 }, difficulty: 0.05 },
            { prompt: '종이띠를 똑같이 3조각으로 잘라 보세요.', toolOptions: { shape: 'strip' }, target: { den: 3 }, difficulty: 0.05 },
            // 예시는 눈으로 바로 보이지 않을 만큼만 다르게(종이띠 0.20·0.28·0.26·0.26) — 조각 수만 세는 오개념을 가려낸다
            { prompt: '이 종이띠는 똑같이 나누었나요? 알맞은 단추를 고르세요.', toolOptions: { shape: 'strip', judge: true }, state: { cuts: [0.2, 0.48, 0.74] }, target: { equal: false }, difficulty: 0.2 },
            { prompt: '이 피자는 똑같이 나누었나요? 알맞은 단추를 고르세요.', toolOptions: { shape: 'pizza', judge: true }, state: { n: 6 }, target: { equal: true }, difficulty: 0.12 },
            { extra: true, prompt: '이 피자는 4조각이에요. 똑같이 나누었나요?', toolOptions: { shape: 'pizza', judge: true }, state: { cuts: [0, 75, 180, 270] }, target: { equal: false }, difficulty: 0.22 },
          ],
        },
        {
          id: 'a2', title: '활동 2. 부분을 분수로 나타내기', minutes: 11, tool: 'fraction',
          task: '전체를 똑같이 나눈 다음, 조각을 눌러 색칠하고 분수로 읽어 봅시다.',
          teacher: '"전체를 똑같이 4로 나눈 것 중의 3을 무엇이라고 쓰고 읽나요?" 분모(전체를 나눈 수)와 분자(부분의 수)를 손으로 짚으며 말하게 한다.',
          // 4·5번은 거꾸로(색칠된 그림 → 분수 쓰기) 문항이다. 문항 글은 단계마다 바꿀 수 없어서 모든 단계에 두고,
          // 도전은 분수 읽기 칸을 가리고 분자·분모 낱말 대신 '위 수·아래 수'로만 보여 준다.
          levels: { easy: { showTerms: true, max: 8 }, base: {}, challenge: { hideFraction: true } },
          items: [
            // 분자·분모 낱말은 출구 질문에 나오므로 첫 문항은 단계와 상관없이 설명 줄을 보인다(도전은 읽기 칸이 가려져 있음)
            { prompt: '피자를 똑같이 4조각으로 나누고 3조각을 색칠하세요.', toolOptions: { shape: 'pizza', showTerms: true }, target: { den: 4, num: 3 }, difficulty: 0.08 },
            { prompt: '종이띠의 5분의 2만큼 색칠하세요.', toolOptions: { shape: 'strip' }, target: { den: 5, num: 2 }, difficulty: 0.12 },
            { prompt: '피자의 8분의 5만큼 색칠하세요.', toolOptions: { shape: 'pizza' }, target: { den: 8, num: 5 }, difficulty: 0.15 },
            { prompt: '색칠한 부분은 종이띠 전체의 몇 분의 몇인가요? 분자와 분모를 정해 분수로 써 보세요.', toolOptions: { shape: 'strip', write: true }, state: { n: 7, colored: [0, 1, 2] }, target: { den: 7, num: 3 }, difficulty: 0.2 },
            { extra: true, prompt: '색칠한 부분은 피자 전체의 몇 분의 몇인가요? 분수로 써 보세요.', toolOptions: { shape: 'pizza', write: true }, state: { n: 6, colored: [0, 2, 3, 5] }, target: { den: 6, num: 4 }, difficulty: 0.24 },
          ],
        },
        {
          id: 'a3', title: '활동 3. 짝과 분수 만들기 놀이', minutes: 8, tool: 'fraction', pair: true,
          task: '짝이 말한 분수를 피자나 종이띠로 만들어 보여 주고, 분모와 분자가 각각 무엇을 뜻하는지 말해 봅시다.',
          teacher: '짝끼리 번갈아 "7분의 3!"처럼 분수를 말하고 만든다. 분모가 분자보다 큰 분수만 말하게 한다. 교구는 분자가 분모보다 작은지 확인하고, 만든 분수는 결과에 남는다.',
          levels: { easy: { showTerms: true, max: 8 }, base: {}, challenge: { hideFraction: true } },
          items: [
            { prompt: '짝이 말한 분수(분자가 분모보다 작은 분수)를 피자로 만들고 확인을 누르세요.', toolOptions: { shape: 'pizza' }, target: { proper: true }, difficulty: 0.1 },
            { prompt: '이번에는 내가 분수를 말하고, 짝이 말한 분수를 종이띠로 만들어 확인을 누르세요.', toolOptions: { shape: 'strip' }, target: { proper: true }, difficulty: 0.1 },
          ],
        },
      ],
    },
    {
      id: 'wrapup', title: '정리', minutes: 7,
      teacher: '"똑같이 나누지 않은 피자로는 왜 분수를 말할 수 없을까요?" 출구 질문 결과를 모아 분모·분자를 바꾸어 쓴 학생이 많으면 다시 짚는다.',
      exitTicket: [
        { type: 'choice', prompt: '전체를 똑같이 5로 나눈 것 중의 2를 무엇이라고 읽나요?', options: ['5분의 2', '2분의 5', '5분의 3'], answer: 0, difficulty: 0.12,
          explain: '전체를 나눈 수 5가 분모, 부분의 수 2가 분자이고, 분모부터 읽어 5분의 2라고 해요.' },
        { type: 'choice', prompt: '분수 4분의 3에서 분모는 무엇인가요?', options: ['3', '4', '7'], answer: 1, difficulty: 0.2,
          explain: '분모는 전체를 똑같이 나눈 수로, 분수의 아래에 써요. 4분의 3에서는 4가 분모, 3이 분자예요.' },
        { type: 'tool', tool: 'fraction', options: { shape: 'pizza', hideFraction: true }, prompt: '피자의 3분의 2만큼 색칠하세요.', target: { den: 3, num: 2 }, difficulty: 0.15 },
        { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
      ],
    },
  ],
  worksheet: {
    title: '똑같이 나누기와 분수',
    items: [
      { type: 'figure', prompt: '똑같이 나눈 것에 ○표, 똑같이 나누지 않은 것에 ×표 하세요.', tool: 'fraction', figures: [
        { options: { shape: 'pizza' }, state: { n: 4 }, caption: '(\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0)' },
        { options: { shape: 'pizza' }, state: { cuts: [0, 60, 200, 250] }, caption: '(\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0)' },
        { options: { shape: 'pizza' }, state: { n: 3 }, caption: '(\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0)' }], answer: '○, ×, ○' },
      // 분수 쓰기(분수선)와 읽기를 함께 — 그림 오른쪽 빈 틀에 분수로 쓰고, 아래에 읽는 말을 쓴다
      { type: 'figure', prompt: '색칠한 부분은 전체의 몇 분의 몇인지 오른쪽 틀에 분수로 쓰고, 아래에 읽어 쓰세요.', tool: 'fraction', answer: '3/4(4분의 3), 1/6(6분의 1), 5/8(8분의 5) — 분모를 분수선 아래에', figures: [
        { options: { shape: 'pizza', frame: true }, state: { n: 4, colored: [0, 1, 2] }, caption: '(\u00a0\u00a0\u00a0\u00a0\u00a0)분의 (\u00a0\u00a0\u00a0\u00a0\u00a0)' },
        { options: { shape: 'pizza', frame: true }, state: { n: 6, colored: [0] }, caption: '(\u00a0\u00a0\u00a0\u00a0\u00a0)분의 (\u00a0\u00a0\u00a0\u00a0\u00a0)' },
        { options: { shape: 'pizza', frame: true }, state: { n: 8, colored: [0, 1, 2, 3, 4] }, caption: '(\u00a0\u00a0\u00a0\u00a0\u00a0)분의 (\u00a0\u00a0\u00a0\u00a0\u00a0)' }] },
      { type: 'figure', prompt: '주어진 분수만큼 색칠하세요.', tool: 'fraction', figures: [
        { options: { shape: 'strip' }, state: { n: 3 }, caption: '3분의 2' },
        { options: { shape: 'strip' }, state: { n: 5 }, caption: '5분의 4' },
        { options: { shape: 'strip' }, state: { n: 4 }, caption: '4분의 1' }], answer: '3칸 중 2칸, 5칸 중 4칸, 4칸 중 1칸 색칠' },
      { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '4분의 3에서 4는 전체를 똑같이 나눈 수로 ___ 라 하고, 3은 부분의 수로 ___ 라고 합니다.', answer: '분모, 분자' },
      { type: 'draw', prompt: '"5분의 2"와 "7분의 4"를 분수선을 그어 분수로 쓰세요.', answer: '2/5, 4/7 (분모 5·7을 분수선 아래에 씀)' },
      { type: 'short', prompt: '똑같이 나누지 않은 4조각 중 1조각을 4분의 1이라 할 수 없는 까닭을 쓰세요.', answer: '조각의 크기가 서로 달라서, 전체를 똑같이 4로 나눈 것 중의 1이 아니기 때문이다.' },
    ],
    easy: { note: '분모(아래 수) = 전체를 똑같이 나눈 조각 수, 분자(위 수) = 색칠한 조각 수예요. 분수선 아래에 분모, 위에 분자를 써요.' },
  },
  differentiation: {
    easy: '분자와 분모가 무엇을 뜻하는지 옆 칸에 함께 보여 주고, 8조각까지만 잘라요.',
    challenge: '분수 읽기 칸이 가려져 있어요. 조각을 보고 분수를 스스로 말해야 하고, 똑같지 않게 나눈 그림에서는 가장 큰 조각도 찾아 근거를 보여요.',
  },
  teacherNotes: '① 조각 수만 세고 크기가 같은지는 보지 않는 오개념이 많다. 똑같이 나누지 않은 4조각 중 1조각은 4분의 1이 아니다. ② 분모와 분자를 바꾸어 쓰거나(5분의 2를 2/5가 아닌 5/2로), "4분의 3"을 "3분의 4"로 읽는 실수를 짚는다. 분모는 아래, 전체를 나눈 수다. ③ 색칠하지 않은 조각 수를 분자로 세는 경우가 있으니 "색칠한 부분은 전체의 몇 분의 몇?"과 "남은 부분은?"을 구별해 묻는다. ④ 피자(원)는 가운데를 지나도록 잘라야 똑같이 나뉘고, 종이띠는 길이를 똑같이 나누어야 함을 겹쳐 보기로 확인한다.',
});
