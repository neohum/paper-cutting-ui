/* 3학년 1학기 6. 분수와 소수 — 똑같이 나누기와 분수로 나타내기 */
// 장면 레이어 순서: 언덕(배경) → 위치가 있는 모티프 → 글자
const padScene = (hills, placed, texts) => [hills, ...placed, ...texts];

const G3FRAC_READ_BLANK = '(     )분의 (     )';
const G3FRAC_WS = [
      { type: 'figure', prompt: '똑같이 나눈 것에 ○표, 똑같이 나누지 않은 것에 ×표 하세요.', tool: 'fraction', figures: [
        { options: { shape: 'pizza' }, state: { n: 4 }, caption: '(\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0)' },
        { options: { shape: 'pizza' }, state: { cuts: [0, 60, 200, 250] }, caption: '(\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0)' },
        { options: { shape: 'pizza' }, state: { n: 3 }, caption: '(\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0)' }], answer: '○, ×, ○' },
      // 기본 활동지는 분수 틀에만 쓴다(같은 답을 두 번 쓰지 않게). 읽어 쓰기는 5번 문항에서 한다. 쉬운 활동지는 '( )분의 ( )' 칸을 함께 둔다.
      { type: 'figure', prompt: '색칠한 부분은 전체의 몇 분의 몇인지 오른쪽 틀에 분수로 쓰세요.', tool: 'fraction', answer: '3/4, 1/6, 5/8 — 분모를 분수선 아래에', figures: [
        { options: { shape: 'pizza', frame: true }, state: { n: 4, colored: [0, 1, 2] }, caption: '가' },
        { options: { shape: 'pizza', frame: true }, state: { n: 6, colored: [0] }, caption: '나' },
        { options: { shape: 'pizza', frame: true }, state: { n: 8, colored: [0, 1, 2, 3, 4] }, caption: '다' }] },
      { type: 'figure', prompt: '주어진 분수만큼 색칠하세요.', tool: 'fraction', figures: [
        { options: { shape: 'strip' }, state: { n: 3 }, caption: '3분의 2' },
        { options: { shape: 'strip' }, state: { n: 5 }, caption: '5분의 4' },
        { options: { shape: 'strip' }, state: { n: 4 }, caption: '4분의 1' }], answer: '3칸 중 2칸, 5칸 중 4칸, 4칸 중 1칸 색칠' },
      { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '4분의 3에서 4는 전체를 똑같이 나눈 수로 ___ 라 하고, 3은 부분의 수로 ___ 라고 합니다.', answer: '분모, 분자' },
      { type: 'draw', prompt: '"5분의 2"와 "7분의 4"를 분수선을 그어 분수로 쓰고, 2번의 가·나·다 분수를 읽는 말로 쓰세요.', answer: '2/5, 4/7 (분모 5·7을 분수선 아래에 씀) / 가 4분의 3, 나 6분의 1, 다 8분의 5' },
      { type: 'short', prompt: '똑같이 나누지 않은 4조각 중 1조각을 4분의 1이라 할 수 없는 까닭을 쓰세요.', answer: '조각의 크기가 서로 달라서, 전체를 똑같이 4로 나눈 것 중의 1이 아니기 때문이다.' },
];

PaperLessons.register({
  id: 'g3-math-fraction',
  schema: 'edu-lesson.v1',
  catalog: { unit: 'g3-수학-1학기-6', lesson: 1 },
  grade: 3, subject: '수학', unitTitle: '6. 분수와 소수',
  title: '똑같이 나누고 분수로 나타내기',
  objective: '전체를 똑같이 나누어 보고, 부분이 전체의 몇 분의 몇인지 분수로 나타낼 수 있다.',
  // [4수01-10](단위분수·진분수…)은 이 단원의 다음 차시 내용이라 적지 않는다 — 이 차시는 등분할과 분수 읽고 쓰기([4수01-09])만 다룬다
  standards: ['[4수01-09]'],
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
          id: 'a1', title: '활동 1. 똑같이 나누기', minutes: 10, tool: 'fraction',
          task: '칼집을 직접 옮겨 피자와 종이띠를 똑같이 나누어 보고, 다른 사람이 나눈 것도 똑같이 나누었는지 살펴봅시다.',
          teacher: '먼저 실물로: "종이띠 한 장을 반으로, 다시 반으로 접어 4등분하고 접은 선을 따라 잘라 겹쳐 봅시다."(3분) 이어서 교구로 칼집을 직접 옮겨 나누게 한다. "조각 수가 4개이면 모두 똑같이 나눈 걸까요?" 조각 수가 같아도 크기가 다르면 똑같이 나눈 것이 아님을 확인한다. 판단 문항은 먼저 눈으로 어림해 고르고 확인을 누른 뒤에야 겹쳐 보기가 열린다 — 첫 판단(눈어림)은 결과에 남는다.',
          // 1·2번은 학생이 칼집을 옮긴다(freeCut). 단추가 대신 똑같이 잘라 주지 않는다. 24칸 눈금을 같은 칸 수로 묶는 것이 전략이다.
          // 도전: 눈금이 없고, 판단 문항에서 '똑같지 않아요'를 고르면 가장 큰 조각도 눌러 근거를 보여야 한다
          levels: { easy: { showTerms: true, max: 8 }, base: {}, challenge: { hideFraction: true, judgeWhy: true, ticks: false } },
          items: [
            { prompt: '보라색 손잡이를 돌려 칼집을 옮기고, 피자를 똑같이 4조각으로 나누어 보세요.', toolOptions: { shape: 'pizza', freeCut: true, cutsCount: 3 }, target: { den: 4 }, difficulty: 0.18 },
            { prompt: '칼집을 좌우로 옮겨 종이띠를 똑같이 3조각으로 나누어 보세요.', toolOptions: { shape: 'strip', freeCut: true, cutsCount: 2 }, target: { den: 3 }, difficulty: 0.22 },
            // 예시는 눈으로 바로 보이지 않을 만큼만 다르게(종이띠 0.20·0.28·0.26·0.26) — 조각 수만 세는 오개념을 가려낸다
            { prompt: '이 종이띠는 똑같이 나누었나요? 눈으로 어림해 고르고 확인을 누르세요.', toolOptions: { shape: 'strip', judge: true }, state: { cuts: [0.2, 0.48, 0.74] }, target: { equal: false }, difficulty: 0.22 },
            // 똑같이 나누었지만 12시에서 비켜 자른 피자 — '반듯한 자리에서 잘라야 똑같다'고 여기는 학생을 가려낸다
            { prompt: '이 피자는 똑같이 나누었나요? 눈으로 어림해 고르고 확인을 누르세요.', toolOptions: { shape: 'pizza', judge: true }, state: { cuts: [30, 120, 210, 300] }, target: { equal: true }, difficulty: 0.15 },
            { extra: true, prompt: '이 피자는 4조각이에요. 똑같이 나누었나요?', toolOptions: { shape: 'pizza', judge: true }, state: { cuts: [0, 75, 180, 270] }, target: { equal: false }, difficulty: 0.22 },
          ],
        },
        {
          id: 'a2', title: '활동 2. 부분을 분수로 나타내기', minutes: 10, tool: 'fraction',
          task: '전체를 똑같이 나눈 다음, 조각을 눌러 색칠하고 분수로 읽어 봅시다.',
          teacher: '"전체를 똑같이 4로 나눈 것 중의 3을 무엇이라고 쓰고 읽나요?" 분모(전체를 나눈 수)와 분자(부분의 수)를 손으로 짚으며 말하게 한다.',
          // 4·5번은 거꾸로(색칠된 그림 → 분수 쓰기) 문항이다. 문항 글은 단계마다 바꿀 수 없어서 모든 단계에 두고,
          // 도전은 분수 읽기 칸을 가리고 분자·분모 낱말 대신 '위 수·아래 수'로만 보여 준다.
          levels: { easy: { showTerms: true, max: 8 }, base: {}, challenge: { hideFraction: true } },
          items: [
            // 분자·분모 낱말은 출구 질문에 나오므로 첫 문항은 단계와 상관없이 설명 줄을 보인다(도전은 읽기 칸이 가려져 있음)
            { prompt: '피자를 똑같이 4조각으로 나누고 3조각을 색칠하세요.', toolOptions: { shape: 'pizza', showTerms: true }, target: { den: 4, num: 3 }, difficulty: 0.08 },
            // 분수 읽기 칸이 답을 대신 읽어 주지 않게 확인 뒤에만 보인다(reveal) — 분수 기호(2/5)도 함께 본다
            { prompt: '종이띠의 5분의 2(2/5)만큼 색칠하세요.', toolOptions: { shape: 'strip' }, target: { den: 5, num: 2 }, reveal: 'after-check', difficulty: 0.15 },
            { prompt: '피자의 8분의 5(5/8)만큼 색칠하세요. 분모 8과 분자 5는 각각 무엇을 정하나요?', toolOptions: { shape: 'pizza' }, target: { den: 8, num: 5 }, reveal: 'after-check', difficulty: 0.18 },
            { prompt: '색칠한 부분은 종이띠 전체의 몇 분의 몇인가요? 분자와 분모를 정해 분수로 써 보세요.', toolOptions: { shape: 'strip', write: true }, state: { n: 7, colored: [0, 1, 2] }, target: { den: 7, num: 3 }, difficulty: 0.25 },
            { extra: true, prompt: '색칠한 부분은 피자 전체의 몇 분의 몇인가요? 분수로 써 보세요.', toolOptions: { shape: 'pizza', write: true }, state: { n: 6, colored: [0, 2, 3, 5] }, target: { den: 6, num: 4 }, difficulty: 0.24 },
          ],
        },
        {
          id: 'a3', title: '활동 3. 짝과 분수 만들기 놀이', minutes: 8, tool: 'fraction', pair: true,
          task: '짝이 말한 분수를 피자나 종이띠로 만들어 보여 주고, 분모와 분자가 각각 무엇을 뜻하는지 말해 봅시다.',
          teacher: '짝끼리 번갈아 "7분의 3!"처럼 분수를 말하고 만든다. 분모가 분자보다 큰 분수만 말하게 한다. 문항마다 조건(분자가 1보다 큼, 절반보다 많음, 분모가 6보다 크고 절반보다 적음)이 붙어 있어 교구가 그 조건을 확인하고, 만든 분수는 결과에 남는다. 짝이 말한 분수와 같은지는 짝이 확인한다.',
          levels: { easy: { showTerms: true, max: 8 }, base: {}, challenge: { hideFraction: true } },
          items: [
            // 1·2번도 조건이 붙는다 — 조건 없이 '아무 진분수'면 2분의 1처럼 가장 쉬운 분수 하나로 모두 통과했다
            { prompt: '짝이 분자가 1보다 큰 분수(예: 6분의 4)를 말해요. 그 분수를 피자로 만들고 확인을 누르세요.', toolOptions: { shape: 'pizza' }, target: { proper: true, minNum: 2 }, difficulty: 0.12 },
            { prompt: '이번에는 내가 분수를 말할 차례예요. 짝이 말한, 종이띠의 절반보다 많은 분수를 종이띠로 만들어 확인을 누르세요.', toolOptions: { shape: 'strip' }, target: { proper: true, moreThanHalf: true }, difficulty: 0.16 },
            // 아무 분수나 통과하지 않는 조건 문항 — 분모(나눈 수)와 분자(색칠한 수)를 함께 따져야 한다
            { prompt: '분모가 6보다 크고, 피자의 절반보다 적은 분수를 하나 만들어 보세요. 짝은 다른 분수를 만들어 서로 견주어요.', toolOptions: { shape: 'pizza' }, target: { proper: true, minDen: 7, lessThanHalf: true }, difficulty: 0.22 },
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
        // 핵심 오개념(조각 수만 세기)을 재는 문항 — 활동 1의 띠와 다른 모양(0.22·0.28·0.25·0.25)
        { type: 'tool', tool: 'fraction', options: { shape: 'strip', judge: true }, state: { cuts: [0.22, 0.5, 0.75] }, prompt: '이 종이띠는 4조각이에요. 한 조각을 4분의 1이라고 할 수 있을까요? 먼저 똑같이 나누었는지 판단해 고르세요.', target: { equal: false }, difficulty: 0.22,
          explain: '첫 조각이 다른 조각보다 짧아요. 조각 수가 4개여도 크기가 같지 않으면 한 조각을 4분의 1이라고 할 수 없어요.' },
        { type: 'tool', tool: 'fraction', options: { shape: 'pizza', hideFraction: true }, prompt: '피자의 3분의 2만큼 색칠하세요.', target: { den: 3, num: 2 }, difficulty: 0.15 },
        { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
      ],
    },
  ],
  worksheet: {
    title: '똑같이 나누기와 분수',
    items: G3FRAC_WS,
    // 쉬운 활동지: 분수 틀 옆에 '( )분의 ( )' 읽기 칸을 함께 둔다
    easy: { items: G3FRAC_WS.map((it, i) => (i === 1 ? Object.assign({}, it, { prompt: '색칠한 부분은 전체의 몇 분의 몇인지 오른쪽 틀에 분수로 쓰고, 아래에 읽어 쓰세요.', figures: it.figures.map((f) => Object.assign({}, f, { caption: G3FRAC_READ_BLANK })) }) : it)),
      note: '분모(아래 수) = 전체를 똑같이 나눈 조각 수, 분자(위 수) = 색칠한 조각 수예요. 분수선 아래에 분모, 위에 분자를 써요.' },
  },
  differentiation: {
    easy: '분자와 분모가 무엇을 뜻하는지 옆 칸에 함께 보여 주고, 8조각까지만 잘라요.',
    challenge: '분수 읽기 칸이 가려져 있어요. 조각을 보고 분수를 스스로 말해야 하고, 똑같지 않게 나눈 그림에서는 가장 큰 조각도 찾아 근거를 보여요.',
  },
  teacherNotes: '① 조각 수만 세고 크기가 같은지는 보지 않는 오개념이 많다. 똑같이 나누지 않은 4조각 중 1조각은 4분의 1이 아니다. ② 분모와 분자를 바꾸어 쓰거나(5분의 2를 2/5가 아닌 5/2로), "4분의 3"을 "3분의 4"로 읽는 실수를 짚는다. 분모는 아래, 전체를 나눈 수다. ③ 색칠하지 않은 조각 수를 분자로 세는 경우가 있으니 "색칠한 부분은 전체의 몇 분의 몇?"과 "남은 부분은?"을 구별해 묻는다. ④ 피자(원)는 가운데를 지나도록 잘라야 똑같이 나뉘고, 종이띠는 길이를 똑같이 나누어야 함을 겹쳐 보기로 확인한다.',
});
