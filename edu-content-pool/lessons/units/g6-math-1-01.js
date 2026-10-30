/* 6학년 1학기 수학 1. 분수의 나눗셈 — 단원 파일(차시 11개, 기존 차시 없음).
 * 확인 필요: units-index 의 plan 은 6수01-10(자연수÷자연수의 몫을 분수로)과 6수01-11(분수끼리 나누는 셈) 두 주제 묶음이고,
 *   7~11차시의 카탈로그 제목은 '분수끼리 나누는 셈…'이다. 그러나 교과서 1단원 '분수의 나눗셈'은 (분수)÷(자연수)까지이고
 *   (분수)÷(분수)는 2학기 g6-math-2-01 '분수의 나눗셈'이 맡는다. 겹치지 않도록 7~11차시는 모두 (분수)÷(자연수)로 짓고
 *   성취기준 코드는 plan 그대로 6수01-11 을 달았다(코드 번호와 내용의 정확한 대응은 확인하지 못했다).
 * 교구: fraction(피자·띠로 똑같이 나누기와 분수 쓰기)·fracstrips(띠 견주기)·numberline(몫 점 놓기·읽기)·mindmap(식과 몫 짝짓기·고르기·나누기·순서)·pattern(□ 채우기).
 * 예문·자료는 이 단원을 위해 직접 지은 상황과 수다. 학생 이름 예시(민지·준호·하나)는 가명이다.
 * 흐름: 1÷n을 피자로(1) → a÷b(a<b)(2) → 그림으로 설명(3) → 수직선(4) → 몫이 1보다 큰 경우(5) → 생활 문제(6)
 *      → 분자가 나누어떨어지는 (분수)÷(자연수)(7) → 연습(8) → 나누어떨어지지 않을 때 분모에 곱하기(9) → 수직선·계산 방법 고르기(10) → 생활 문제·단원 정리(11).
 */
(function () {
  const UID = 'g6-math-1-01';
  const UNIT = 'g6-수학-1학기-1';
  const TITLE = '1. 분수의 나눗셈';
  const head = (n, standards) => ({
    id: `${UID}-${String(n).padStart(2, '0')}`, schema: 'edu-lesson.v1', catalog: { unit: UNIT, lesson: n },
    grade: 6, subject: '수학', unitTitle: TITLE, standards, minutes: 40, formats: ['chromebook', 'projector', 'print'],
  });
  const ILL = (what) => `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`;
  const scene = (text, size) => ({ viewBox: [480, 270], layers: [
    { motif: 'sun', x: 412, y: 56, s: 0.8 }, { motif: 'cloud', x: 110, y: 50 }, { motif: 'hills', y: 206, colors: ['buttercup', 'mint', 'peach'] },
    { motif: 'house', x: 90, y: 220, s: 0.9 }, { motif: 'tree', x: 400, y: 218, color: 'mint' }, { motif: 'flower', x: 300, y: 240, color: 'lavender' },
    { motif: 'text', x: 240, y: 144, text, size: size || 22 },
  ] });
  const X = (d, x) => Object.assign({ difficulty: 0.15 }, d, x || {});
  const ACT = (id, title, minutes, tool, teacher, task, levels, items) => ({ id, title, minutes, tool, teacher, task, levels, items });
  const LV_NONE = { easy: {}, base: {}, challenge: {} };
  const LV_FR = { easy: { showTerms: true }, base: {}, challenge: { hideFraction: true } };
  const LV_NL = { easy: { showValue: true }, base: {}, challenge: { labels: 'ends' } };
  const mood = { type: 'mood', prompt: '오늘 공부는 어땠나요?' };
  // 똑같이 den 조각으로 나누고 num 조각 색칠(한 명 몫)
  const pz = (prompt, den, num, o, x) => X({ prompt, toolOptions: Object.assign({ shape: 'pizza', min: 2, max: 12, startN: 2 }, o), target: { den, num } }, x);
  const st = (prompt, den, num, o, x) => X({ prompt, toolOptions: Object.assign({ shape: 'strip', min: 2, max: 12, startN: 2 }, o), target: { den, num } }, x);
  // 이미 색칠된 그림을 분수로 쓰기
  const fw = (prompt, shape, n, k, den, num, x) => X({ prompt, state: { n, colored: Array.from({ length: k }, (_, i) => i) }, toolOptions: { shape, write: true }, target: { den, num } }, x);
  // 위 띠(잠김)와 크기가 같은 띠 만들기, 띠만 보고 답 고르기
  const eq = (prompt, top, den, o, x) => X({ prompt, toolOptions: Object.assign({ top }, o), target: { equalTo: top, den } }, x);
  const ak = (prompt, top, q, choices, ask, o, x) => X({ prompt, toolOptions: Object.assign({ top, ask: { q, choices } }, o), target: { ask } }, x);
  // 수직선: 점 놓기·읽기
  const NLO = (max, den, o) => Object.assign({ mode: 'place', min: 0, max, step: 1, sub: den, format: 'frac', den, labels: 'major' }, o || {});
  const nlPlace = (prompt, nlo, points, x) => X({ prompt, toolOptions: Object.assign({}, nlo, { count: points.length }), target: { points } }, x);
  const nlPick = (prompt, nlo, mark, choices, ans, x) => X({ prompt, toolOptions: Object.assign({}, nlo, { mode: 'read', marks: [mark], choices }), target: { pick: ans } }, x);
  // 카드 판(mindmap): 짝 잇기·고르기·나누기·순서
  const MM = (mode, topic) => ({ easy: { mode, topic, live: true }, base: { mode, topic }, challenge: { mode, topic } });
  const cd = (list) => list.map(([id, text]) => ({ id, text }));
  const mt = (prompt, slots, cards, match, x) => X({ prompt, toolOptions: { mode: 'match', slots: slots.map(([id, label]) => ({ id, label })), cards: cd(cards) }, target: { match } }, x);
  const mp = (prompt, basket, cards, pick, x) => X({ prompt, toolOptions: { mode: 'pick', basket, cards: cd(cards) }, target: { pick } }, x);
  const ms = (prompt, slots, cards, sort, x) => X({ prompt, toolOptions: { mode: 'sort', slots, cards: cd(cards) }, target: { sort } }, x);
  const mo = (prompt, cards, order, x) => X({ prompt, toolOptions: { mode: 'order', cards: cd(cards), slots: order.map((_, i) => String(i + 1)) }, target: { order } }, x);
  // □ 채우기(칸 이름표가 문항의 식)
  const bl = (prompt, label, v, x) => X({ prompt, toolOptions: { seq: [null], names: [label], input: 'number' }, target: { fill: [v] } }, x);
  const LES = (n, std, s) => Object.assign(head(n, std), {
    title: s.title, objective: s.objective,
    illustration: { prompt: ILL(s.ill), scene: scene(s.scene, s.size) },
    stages: [
      { id: 'intro', title: '도입', minutes: 6, teacher: s.intro[0], student: s.intro[1], demo: s.intro[2] },
      { id: 'main', title: '전개', minutes: 27, activities: s.acts },
      { id: 'wrapup', title: '정리', minutes: 7, teacher: s.wrap[0], exitTicket: s.wrap[1].concat([mood]) },
    ],
    worksheet: s.ws, differentiation: s.diff, teacherNotes: s.notes,
  });

  const lessons = [];

  // ───────────────────────────── 1차시 (intro · 1÷n을 피자로) ─────────────────────────────
  lessons.push(LES(1, ['[6수01-10]'], {
    title: '피자 한 판을 똑같이 나누어 한 사람 몫 알아보기',
    objective: '1을 자연수로 나눈 몫이 그 수분의 1임을 피자 그림으로 확인하고, 1÷4=1/4처럼 몫을 분수로 쓸 수 있다.',
    ill: 'a round paper pizza cut into four equal slices on a table with four friends reaching for one slice each',
    scene: '한 판을 4명이 나누면?',
    intro: [
      '"피자 한 판을 4명이 똑같이 나누어 먹어요. 한 명이 몇 판씩 먹게 될까요? 식으로는 1 ÷ 4예요." 시연 단추로 피자가 4조각으로 나뉘고 한 조각이 색칠되는 모습을 보여 준다. "1을 4로 나누면 몫이 0이고 나머지가 1이니까 한 명이 0판 먹나요?"라고 되물어, 몫이 0이라고 답하는 학생에게 한 조각이 분명히 있다는 것을 짚는다. 3학년 때 배운 분수(전체를 똑같이 나눈 것 중의 얼마)를 떠올리게 한다.',
      '피자 한 판을 똑같이 나누어 먹는 모습을 그려 보고, 한 사람이 먹는 양을 어떻게 말할지 짝과 이야기해 봐요.',
      { tool: 'fraction', options: { shape: 'pizza', startN: 2 }, sequence: [{ den: 4, num: 1 }] },
    ],
    acts: [
      ACT('a1', '활동 1. 피자를 똑같이 나누어 한 명 몫 색칠하기', 9, 'fraction',
        '"피자 한 판을 2명이 먹으면 몇 조각으로 나누어야 할까요? 한 명 몫은 몇 조각일까요?" 나누는 사람 수가 곧 조각 수라는 것을 말하게 한다. 3명이 먹는데 4조각으로 나누는 학생에게는 "조각 크기가 모두 같아요? 한 명이 한 조각씩 받으면 몇 명이 받아요?"라고 되묻는다. 색칠한 뒤 "한 판의 몇 분의 몇"이라고 말해 보게 한다.',
        '피자를 먹는 사람 수만큼 똑같이 나누고, 한 명이 먹는 양만큼 색칠해요.', LV_FR, [
          pz('피자 1판을 2명이 똑같이 나누어 먹어요. 한 명이 먹는 양만큼 색칠해 보세요.', 2, 1, {}, { difficulty: 0.06,
            predict: { q: '1을 2로 나눈 몫은 어떤 모양의 수일까요?', options: ['자연수', '1보다 작은 분수'], answer: 1 }, conclude: '피자 한 판을 2명이 나누면 한 명이 2분의 1판씩 먹어요. 1 ÷ 2 = 1/2이에요.' }),
          pz('피자 1판을 4명이 똑같이 나누어 먹어요. 한 명이 먹는 양만큼 색칠해 보세요.', 4, 1, {}, { difficulty: 0.08 }),
          pz('피자 1판을 3명이 똑같이 나누어 먹어요. 한 명이 먹는 양만큼 색칠해 보세요.', 3, 1, {}, { difficulty: 0.1 }),
          pz('피자 1판을 6명이 똑같이 나누어 먹어요. 한 명이 먹는 양만큼 색칠해 보세요.', 6, 1, {}, { difficulty: 0.14, reveal: 'after-check' }),
        ]),
      ACT('a2', '활동 2. 색칠한 한 칸을 분수로 쓰기', 9, 'fraction',
        '"색종이띠 한 장을 5명이 똑같이 나누었어요. 한 명이 받은 칸은 전체의 얼마일까요?" 분모는 똑같이 나눈 칸 수, 분자는 색칠한 칸 수라는 것을 다시 짚는다. 분모와 분자를 거꾸로 쓰는 학생에게는 "5칸 가운데 1칸을 어떻게 읽었지요?"라고 물어 읽는 순서를 바로잡는다.',
        '색칠한 부분이 전체의 얼마인지 분모와 분자를 정해 분수로 써요.', LV_FR, [
          fw('색종이띠 1장을 5명이 똑같이 나누었어요. 한 명 몫을 분수로 쓰세요.', 'strip', 5, 1, 5, 1, { difficulty: 0.08 }),
          fw('피자 1판을 8명이 똑같이 나누었어요. 한 명 몫을 분수로 쓰세요.', 'pizza', 8, 1, 8, 1, { difficulty: 0.1 }),
          fw('찰흙 1덩어리를 7명이 똑같이 나누었어요. 한 명 몫을 분수로 쓰세요.', 'strip', 7, 1, 7, 1, { difficulty: 0.12 }),
          fw('주스 1통을 10명이 똑같이 나누었어요. 한 명 몫을 분수로 쓰세요.', 'strip', 10, 1, 10, 1, { difficulty: 0.15, reveal: 'after-check' }),
        ]),
      ACT('a3', '활동 3. 나눗셈식과 몫 이어 보기', 9, 'mindmap',
        '"1 ÷ 5는 5분의 1일까요, 1분의 5일까요? 피자를 5명이 나눈 그림에서 확인해 볼까요?" 나누는 수가 분모 자리에 간다는 것을 그림과 연결해 말하게 한다. 5분의 2를 고른 학생에게는 "한 명 몫이 2조각이면 몇 명이 먹는 거예요?"라고 묻는다. 모두 이은 뒤 카드 한 장을 골라 피자 그림으로 설명하게 한다.',
        '나눗셈식의 몫을 이어요. 나누는 수가 분수에서 어느 자리에 오는지 살펴봐요.', MM('match', '1 ÷ □의 몫'), [
          mt('나눗셈식과 한 명 몫을 이어 보세요.', [['q2', '1 ÷ 2'], ['q5', '1 ÷ 5']], [['c2', '2분의 1'], ['c5', '5분의 1'], ['c52', '5분의 2']], { q2: 'c2', q5: 'c5' }, { difficulty: 0.1 }),
          mt('나눗셈식과 한 명 몫을 이어 보세요.', [['q3', '1 ÷ 3'], ['q6', '1 ÷ 6'], ['q8', '1 ÷ 8']], [['c3', '3분의 1'], ['c6', '6분의 1'], ['c8', '8분의 1'], ['c63', '6분의 3']], { q3: 'c3', q6: 'c6', q8: 'c8' }, { difficulty: 0.14,
            conclude: '1을 나누는 수가 분모가 돼요. 1 ÷ 6 = 6분의 1이에요.' }),
          mp('찰흙 1덩어리를 7명이 똑같이 나눌 때 한 명 몫을 바르게 말한 카드를 골라 보세요.', '바른 말', [['p1', '7분의 1덩어리'], ['p2', '1분의 7덩어리'], ['p3', '7덩어리'], ['p4', '1덩어리의 7배']], ['p1'], { difficulty: 0.18 }),
        ]),
    ],
    wrap: [
      '"피자 한 판을 5명이 나누면 한 명이 먹는 양은 어떻게 쓸까요? 왜 5분의 1이에요?" 나누는 사람 수가 똑같이 나눈 조각 수라는 말을 이끌어 낸다. 출구 1번을 틀린 학생은 분모와 분자를 거꾸로 읽었는지 확인하고, 다음 시간 첫 문제에서 피자 그림을 먼저 그려 보게 한다.',
      [
        { type: 'choice', prompt: '1 ÷ 9의 몫을 분수로 나타낸 것은 어느 것인가요?', options: ['9분의 1', '1분의 9', '9'], answer: 0, difficulty: 0.1, explain: '1을 9로 나누면 한 명 몫은 전체를 9로 나눈 것 가운데 1이라서 9분의 1이에요.' },
        { type: 'tool', tool: 'fraction', options: { shape: 'pizza', min: 2, max: 12, startN: 2 }, prompt: '피자 1판을 12명이 똑같이 나누어 먹어요. 한 명이 먹는 양만큼 색칠하세요.', target: { den: 12, num: 1 }, difficulty: 0.15 },
        { type: 'choice', prompt: '피자 1판을 5명이 똑같이 나누면 한 명이 먹는 양은 1판보다 어떤가요?', options: ['더 많아요', '같아요', '더 적어요'], answer: 2, difficulty: 0.1, explain: '한 판을 여러 명이 나누면 한 명 몫은 한 판의 일부라서 1보다 작아요.' },
      ],
    ],
    ws: {
      title: '1 ÷ □의 몫을 분수로',
      items: [
        { type: 'figure', prompt: '피자를 똑같이 나눈 그림이에요. 한 명 몫을 ○ 하고 나눗셈식의 몫을 분수로 쓰세요.', tool: 'fraction', options: { shape: 'pizza' }, figures: [
          { state: { n: 4, colored: [0] }, caption: '1 ÷ 4 = ___' }, { state: { n: 3, colored: [0] }, caption: '1 ÷ 3 = ___' }, { state: { n: 6, colored: [0] }, caption: '1 ÷ 6 = ___' }], answer: '1/4, 1/3, 1/6' },
        { type: 'table', prompt: '나누는 사람 수에 따라 한 명 몫을 분수로 쓰세요.', columns: ['식', '1 ÷ 2', '1 ÷ 5', '1 ÷ 7', '1 ÷ 10'], cells: [['한 명 몫', '1/2', '', '', '']], answer: '1/5, 1/7, 1/10' },
        { type: 'choice', prompt: '1 ÷ 8의 몫으로 바른 것에 ○ 하세요.', options: ['8분의 1', '1분의 8', '8'], answer: '8분의 1' },
        { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '1 ÷ 3 = 3분의 ______, 1 ÷ 11 = ______분의 1', answer: '1, 11' },
        { type: 'short', prompt: '피자 한 판을 4명이 똑같이 나누면 왜 한 명이 먹는 양이 4분의 1판인지 써 보세요.' },
      ],
      easy: {
        note: '나누는 사람 수만큼 똑같이 나누고, 그중 한 조각이 한 명 몫이에요.',
        items: [
          { type: 'figure', prompt: '피자를 똑같이 나눈 그림이에요. 한 명 몫을 분수로 쓰세요.', tool: 'fraction', options: { shape: 'pizza' }, figures: [
            { state: { n: 2, colored: [0] }, caption: '1 ÷ 2 = ___' }, { state: { n: 4, colored: [0] }, caption: '1 ÷ 4 = ___' }], answer: '1/2, 1/4' },
          { type: 'table', prompt: '나누는 사람 수에 따라 한 명 몫을 분수로 쓰세요.', columns: ['식', '1 ÷ 2', '1 ÷ 3', '1 ÷ 5'], cells: [['한 명 몫', '1/2', '', '']], answer: '1/3, 1/5' },
          { type: 'choice', prompt: '1 ÷ 3의 몫에 ○ 하세요.', options: ['3분의 1', '1분의 3'], answer: '3분의 1' },
          { type: 'draw', prompt: '피자 한 판을 5명이 똑같이 나눈 그림을 그리고 한 명 몫에 색칠해 보세요.' },
        ],
      },
    },
    diff: {
      easy: '쉬움은 분모·분자의 뜻이 그림 옆에 표시되어 조각 수와 색칠한 조각 수를 읽으며 분수를 써요.',
      base: '피자를 똑같이 나누어 한 명 몫을 색칠하고 1 ÷ □의 몫을 분수로 써요.',
      challenge: '도전은 분수 읽기가 숨겨져 있어서 그림만 보고 몫을 분수로 말하고 1보다 작은 까닭을 설명해요.',
    },
    notes: '자주 보이는 어려움: ① 1 ÷ 4의 몫을 0이나 4로 말한다 → 한 판이 쪼개져 한 조각이 한 명 몫인 모습을 보여 주고 3학년 분수(전체를 똑같이 나눈 것 중의 얼마)와 이어 준다. ② 분모와 분자를 거꾸로 쓴다(1 ÷ 4를 4분의 1이 아닌 1분의 4) → 똑같이 나눈 조각 수가 분모라는 것을 그림에서 확인한다. ③ 조각의 크기를 똑같이 나누지 않은 그림을 맞다고 한다 → 조각 크기를 견주어 본다. 1이 아닌 수를 나누는 경우는 2차시에서 이어진다.',
  }));

  // ───────────────────────────── 2차시 (practice · a ÷ b, a < b) ─────────────────────────────
  lessons.push(LES(2, ['[6수01-10]'], {
    title: '2 ÷ 3처럼 작은 수를 큰 수로 나눈 몫 구하기',
    objective: '(자연수) ÷ (자연수)에서 나누는 수가 더 클 때, 몫을 (나누어지는 수)/(나누는 수)로 쓸 수 있고 나누는 수를 분자에 쓰는 실수를 가려낼 수 있다.',
    ill: 'two long paper ribbons being shared among three small children with a measuring tape, soft pastel paper layers',
    scene: '리본 2 m를 3명이',
    intro: [
      '"리본 2 m를 3명이 똑같이 나누면 한 명이 몇 m씩 가질까요? 식은 2 ÷ 3이에요." 시연 단추로 1 m 띠가 3칸으로 나뉘고 2칸이 색칠되는 모습을 보여 준다. 1차시에서는 1을 나누었는데 오늘은 나누어지는 수가 2로 바뀐 것을 짚는다. "몫이 1보다 작을까요, 클까요?"라고 예상을 묻고, 2가 3보다 작으니까 나눌 수 없다고 하는 학생에게는 분수로 나타낼 수 있다는 것을 알려 준다.',
      '리본 2 m를 3명이 똑같이 나눌 때 한 명 몫이 얼마쯤일지 어림해서 말해 봐요.',
      { tool: 'fraction', options: { shape: 'strip', min: 2, max: 12, startN: 2 }, sequence: [{ n: 3, colored: [0, 1] }] },
    ],
    acts: [
      ACT('a1', '활동 1. 1 m 띠에서 한 명 몫 색칠하기', 9, 'fraction',
        '"리본 2 m를 3명이 나누어요. 한 명 몫은 1 m 띠를 몇 칸으로 나눈 것 가운데 몇 칸일까요?" 나눈 칸 수는 사람 수, 색칠한 칸 수는 나누어지는 수와 같다는 것을 확인하게 한다. 3칸 가운데 1칸만 색칠하는 학생은 1차시의 1 ÷ 3과 섞은 것이므로 "이번엔 리본이 몇 m였지요?"라고 묻는다. 색칠한 뒤 식 2 ÷ 3과 분수를 나란히 말하게 한다.',
        '띠를 사람 수만큼 똑같이 나누고, 나누어지는 수만큼 색칠해 한 명 몫을 나타내요.', LV_FR, [
          st('리본 2 m를 3명이 똑같이 나누어요. 한 명이 갖는 길이를 1 m 띠에 색칠해 보세요.', 3, 2, {}, { difficulty: 0.08,
            predict: { q: '2 ÷ 3의 몫은 1보다 클까요, 작을까요?', options: ['1보다 커요', '1보다 작아요'], answer: 1 }, conclude: '2 m를 3명이 나누면 한 명이 1 m보다 짧아요. 2 ÷ 3 = 2/3이에요.' }),
          st('물 3 L를 4통에 똑같이 나누어 담아요. 한 통의 양을 1 L 띠에 색칠해 보세요.', 4, 3, {}, { difficulty: 0.1 }),
          st('끈 4 m를 7조각으로 똑같이 잘라요. 한 조각의 길이를 1 m 띠에 색칠해 보세요.', 7, 4, {}, { difficulty: 0.15 }),
          st('밀가루 5 kg을 8봉지에 똑같이 담아요. 한 봉지의 무게를 1 kg 띠에 색칠해 보세요.', 8, 5, {}, { difficulty: 0.18, reveal: 'after-check' }),
        ]),
      ACT('a2', '활동 2. 나누는 수는 어디에 쓸까', 9, 'mindmap',
        '"3 ÷ 4의 몫을 4분의 3이라고 쓸까요, 3분의 4라고 쓸까요?" 그림에서 4칸으로 나눈 것 가운데 3칸이라고 말하며 분모가 나누는 수임을 확인하게 한다. 3분의 4를 고른 학생은 나누는 수를 분자에 쓴 것이므로 "한 명 몫이 1보다 클까요, 작을까요?" 하고 몫의 크기로 점검하게 한다. 맞는 식과 틀린 식을 견주어 틀린 까닭을 한 문장으로 말하게 한다.',
        '나눗셈식의 몫을 바르게 쓴 분수를 골라요. 몫이 1보다 큰지 작은지도 생각해 봐요.', MM('pick', '몫을 분수로'), [
          mp('3 ÷ 4의 몫을 바르게 나타낸 분수를 모두 골라 보세요.', '바른 분수', [['a1', '4분의 3'], ['a2', '3분의 4'], ['a3', '3/4'], ['a4', '4/3']], ['a1', 'a3'], { difficulty: 0.12,
            conclude: '3 ÷ 4 = 3/4이에요. 나누는 수 4가 분모, 나누어지는 수 3이 분자예요.' }),
          mp('5 ÷ 9의 몫을 바르게 나타낸 분수를 모두 골라 보세요.', '바른 분수', [['b1', '9분의 5'], ['b2', '5분의 9'], ['b3', '5/9'], ['b4', '9/5']], ['b1', 'b3'], { difficulty: 0.15 }),
          mp('나눗셈식과 몫이 맞는 것을 모두 골라 보세요.', '맞는 식', [['c1', '2 ÷ 5 = 2/5'], ['c2', '2 ÷ 5 = 5/2'], ['c3', '6 ÷ 7 = 6/7'], ['c4', '6 ÷ 7 = 7/6']], ['c1', 'c3'], { difficulty: 0.2 }),
        ]),
      ACT('a3', '활동 3. 수직선에서 몫의 자리 읽기', 9, 'numberline',
        '"수직선의 0에서 1 사이를 똑같이 나눈 눈금에서, 점이 몇 번째 눈금에 있는지 세어 몫을 읽어 볼까요?" 눈금 한 칸이 분모를 정한다는 것을 짚는다. 점이 4번째 눈금에 있는데 4분의 1이라고 읽는 학생에게는 "1칸이 1/□일 때 4칸은 얼마지요?"라고 묻는다. 고른 뒤 그 몫이 나오는 나눗셈 이야기를 지어 보게 한다.',
        '수직선의 점이 나타내는 몫을 읽고 어느 나눗셈의 몫인지 골라요.', LV_NL, [
          nlPick('0과 1 사이를 5칸으로 나눈 수직선이에요. 점이 나타내는 수는 어느 나눗셈의 몫일까요?', NLO(1, 5), 0.6, ['3 ÷ 5', '5 ÷ 3', '1 ÷ 5'], 0, { difficulty: 0.15 }),
          nlPick('0과 1 사이를 8칸으로 나눈 수직선이에요. 점이 나타내는 수는 어느 나눗셈의 몫일까요?', NLO(1, 8), 0.375, ['8 ÷ 3', '3 ÷ 8', '3 ÷ 5'], 1, { difficulty: 0.2 }),
          nlPick('0과 1 사이를 4칸으로 나눈 수직선이에요. 점이 나타내는 수는 어느 나눗셈의 몫일까요?', NLO(1, 4), 0.75, ['3 ÷ 4', '4 ÷ 3', '1 ÷ 4'], 0, { difficulty: 0.18 }),
        ]),
    ],
    wrap: [
      '"2 ÷ 7의 몫을 쓸 때 7은 분수의 어디에 쓰나요? 2는요?" 분모에 나누는 수, 분자에 나누어지는 수를 쓴다는 말을 이끌어 낸다. 출구 2번을 틀린 학생은 수를 거꾸로 쓴 것이므로 다음 시간 첫 문제에서 몫이 1보다 큰지 작은지를 먼저 어림해 보게 한다.',
      [
        { type: 'choice', prompt: '4 ÷ 5의 몫을 분수로 나타낸 것은 어느 것인가요?', options: ['5분의 4', '4분의 5', '5분의 1'], answer: 0, difficulty: 0.1, explain: '4를 5로 나누었으므로 분모는 5, 분자는 4예요.' },
        { type: 'tool', tool: 'fraction', options: { shape: 'strip', min: 2, max: 12, startN: 2 }, prompt: '철사 5 m를 6명이 똑같이 나누어 가져요. 한 명의 길이를 1 m 띠에 색칠하세요.', target: { den: 6, num: 5 }, difficulty: 0.15 },
        { type: 'choice', prompt: '3 ÷ 8과 8 ÷ 3의 몫 가운데 1보다 작은 것은 어느 쪽인가요?', options: ['3 ÷ 8', '8 ÷ 3', '둘 다'], answer: 0, difficulty: 0.15, explain: '3 ÷ 8 = 3/8은 분자가 분모보다 작아서 1보다 작아요. 8 ÷ 3은 3/8을 거꾸로 쓴 8/3으로 1보다 커요.' },
      ],
    ],
    ws: {
      title: '(자연수) ÷ (자연수)의 몫을 분수로',
      items: [
        { type: 'figure', prompt: '1 m 띠를 똑같이 나눈 그림이에요. 색칠한 부분이 한 명 몫일 때 나눗셈식과 몫을 쓰세요.', tool: 'fraction', options: { shape: 'strip' }, figures: [
          { state: { n: 3, colored: [0, 1] }, caption: '___ ÷ ___ = ___' }, { state: { n: 5, colored: [0, 1, 2] }, caption: '___ ÷ ___ = ___' }, { state: { n: 4, colored: [0, 1, 2] }, caption: '___ ÷ ___ = ___' }], answer: '2 ÷ 3 = 2/3, 3 ÷ 5 = 3/5, 3 ÷ 4 = 3/4' },
        { type: 'table', prompt: '나눗셈의 몫을 분수로 쓰세요.', columns: ['식', '2 ÷ 7', '5 ÷ 6', '4 ÷ 9', '7 ÷ 10'], cells: [['몫', '', '', '', '']], answer: '2/7, 5/6, 4/9, 7/10' },
        { type: 'choice', prompt: '준호는 3 ÷ 5 = 5/3이라고 썼어요. 바르게 고친 몫에 ○ 하세요.', options: ['3/5', '5/3', '3/8'], answer: '3/5' },
        { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '6 ÷ 11 = ______/11, 9 ÷ 13 = 9/______', answer: '6, 13' },
        { type: 'short', prompt: '3 ÷ 4의 몫이 1보다 작은 까닭을 써 보세요.' },
      ],
      easy: {
        note: '몫의 분모는 나누는 수, 분자는 나누어지는 수예요.',
        items: [
          { type: 'figure', prompt: '1 m 띠에서 한 명 몫을 보고 몫을 분수로 쓰세요.', tool: 'fraction', options: { shape: 'strip' }, figures: [
            { state: { n: 3, colored: [0, 1] }, caption: '2 ÷ 3 = ___' }, { state: { n: 4, colored: [0, 1, 2] }, caption: '3 ÷ 4 = ___' }], answer: '2/3, 3/4' },
          { type: 'table', prompt: '나눗셈의 몫을 분수로 쓰세요.', columns: ['식', '1 ÷ 4', '2 ÷ 5', '3 ÷ 7'], cells: [['몫', '1/4', '', '']], answer: '2/5, 3/7' },
          { type: 'choice', prompt: '2 ÷ 5의 몫에 ○ 하세요.', options: ['2/5', '5/2'], answer: '2/5' },
          { type: 'short', prompt: '3 ÷ 4의 몫에서 분모에 쓰는 수는 무엇인가요?', answer: '4' },
        ],
      },
    },
    diff: {
      easy: '쉬움은 분모·분자의 뜻이 그림 옆에 표시되고 수직선의 눈금 값도 보여요.',
      base: '1 m 띠에 한 명 몫을 색칠하고 나눗셈의 몫을 나누는 수를 분모로 하는 분수로 써요.',
      challenge: '도전은 분수 읽기를 숨기고 수직선 눈금 수만 보고 어느 나눗셈의 몫인지 골라요.',
    },
    notes: '자주 보이는 어려움: ① 나누는 수를 분자에 쓴다(3 ÷ 4를 4/3으로 쓴다) → 3 ÷ 4가 1 m 띠를 4칸으로 나눈 것 가운데 3칸이라는 것을 그림으로 다시 확인하고, 몫이 1보다 작은지 어림해 점검하게 한다. ② 작은 수를 큰 수로 나눌 수 없다고 한다 → 나누어떨어지지 않아도 분수로 쓸 수 있다는 것을 리본 이야기로 보여 준다. ③ 1차시의 1 ÷ □와 섞어 분자를 항상 1로 쓴다 → 나누어지는 수가 분자에 오는 것을 두 식을 나란히 놓고 견준다.',
  }));

  // ───────────────────────────── 3차시 (core · 그림과 식으로 설명) ─────────────────────────────
  lessons.push(LES(3, ['[6수01-10]'], {
    title: '피자 2판을 3명이 나누는 과정을 그림으로 설명하기',
    objective: '(자연수) ÷ (자연수)를 똑같이 나누는 그림으로 나타내고, 한 명이 각 판에서 한 조각씩 받아 몫이 (나누어지는 수)/(나누는 수)가 되는 까닭을 설명할 수 있다.',
    ill: 'two paper pizzas each cut into three slices with one friend picking a slice from each pizza, pastel layers',
    scene: '2 ÷ 3을 그림으로',
    intro: [
      '"피자 2판을 3명이 똑같이 나누려면 어떻게 자르면 좋을까요? 판마다 3조각으로 자르고 한 명이 판에서 한 조각씩 가져가면 어떨까요?" 시연 단추로 피자 한 판이 3조각으로 나뉘고 두 조각이 색칠되는 모습을 보여 준다. 피자 2판을 모아 놓고 3명에게 나누면 2조각씩이라고 하는 학생에게는 2판이 모두 몇 조각인지 세어 보게 한다.',
      '피자 2판을 3명이 똑같이 나누는 방법을 그림으로 그리고, 한 명이 받는 조각 수를 말해 봐요.',
      { tool: 'fraction', options: { shape: 'pizza', min: 2, max: 12, startN: 2 }, sequence: [{ n: 3, colored: [0, 1] }] },
    ],
    acts: [
      ACT('a1', '활동 1. 한 명이 판마다 한 조각씩 받기', 9, 'fraction',
        '"피자 3판을 4명이 나누어요. 판마다 몇 조각으로 자를까요? 한 명이 판마다 한 조각씩 받으면 모두 몇 조각을 받아요?" 판마다 나누는 사람 수만큼 자르고, 받은 조각 수가 피자 판 수와 같다는 것을 짚는다. 4조각 가운데 1조각이라고 색칠하는 학생에게는 "판이 3판이니까 한 명이 받는 조각이 몇 개지요?"라고 묻는다. 색칠한 뒤 3/4판을 식 3 ÷ 4와 이어 말하게 한다.',
        '피자 판 수만큼 조각을 받는다고 생각하고, 한 명이 받는 양을 한 판 그림에 색칠해요.', LV_FR, [
          pz('피자 2판을 3명이 똑같이 나누어요. 한 명이 각 판에서 3분의 1씩 받아요. 한 명이 먹는 양을 색칠해 보세요.', 3, 2, {}, { difficulty: 0.1,
            predict: { q: '한 명은 모두 몇 조각을 받을까요?', options: ['1조각', '2조각', '3조각'], answer: 1 }, conclude: '판마다 한 조각씩 2판에서 2조각을 받아요. 2 ÷ 3 = 3분의 2판이에요.' }),
          pz('피자 3판을 4명이 똑같이 나누어요. 한 명이 각 판에서 4분의 1씩 받아요. 한 명이 먹는 양을 색칠해 보세요.', 4, 3, {}, { difficulty: 0.12 }),
          pz('피자 2판을 5명이 똑같이 나누어요. 한 명이 각 판에서 5분의 1씩 받아요. 한 명이 먹는 양을 색칠해 보세요.', 5, 2, {}, { difficulty: 0.15 }),
          pz('피자 3판을 8명이 똑같이 나누어요. 한 명이 각 판에서 8분의 1씩 받아요. 한 명이 먹는 양을 색칠해 보세요.', 8, 3, {}, { difficulty: 0.2, reveal: 'after-check' }),
        ]),
      ACT('a2', '활동 2. 띠 그림에서 나눗셈식 찾기', 9, 'fracstrips',
        '"위 띠에서 색칠한 부분은 어느 나눗셈의 몫일까요? 띠를 몇 칸으로 나누었고, 몇 칸을 색칠했나요?" 칸 수가 나누는 수, 색칠한 칸 수가 나누어지는 수라는 것을 짚는다. 나누는 수와 나누어지는 수를 바꾸어 고른 학생에게는 "색칠한 칸이 분자인가요, 전체 칸 수가 분자인가요?"라고 묻는다. 고른 식을 그림 이야기로 말해 보게 한다.',
        '띠 그림을 보고 색칠한 부분이 어느 나눗셈의 몫인지 골라요.', LV_NONE, [
          ak('그림 가의 위 띠에서 색칠한 부분은 어느 나눗셈의 몫일까요?', [2, 3], '색칠한 부분이 나타내는 나눗셈은?', ['2 ÷ 3', '3 ÷ 2', '1 ÷ 3'], 0, {}, { difficulty: 0.1 }),
          ak('그림 나의 위 띠에서 색칠한 부분은 어느 나눗셈의 몫일까요?', [3, 5], '색칠한 부분이 나타내는 나눗셈은?', ['5 ÷ 3', '3 ÷ 5', '3 ÷ 3'], 1, {}, { difficulty: 0.13 }),
          ak('그림 다의 위 띠에서 색칠한 부분은 어느 나눗셈의 몫일까요?', [5, 6], '색칠한 부분이 나타내는 나눗셈은?', ['5 ÷ 6', '6 ÷ 5', '1 ÷ 6'], 0, {}, { difficulty: 0.17, reveal: 'after-check' }),
          ak('그림 라의 위 띠에서 색칠한 부분은 어느 나눗셈의 몫일까요?', [4, 7], '색칠한 부분이 나타내는 나눗셈은?', ['7 ÷ 4', '4 ÷ 4', '4 ÷ 7'], 2, {}, { difficulty: 0.2 }),
        ]),
      ACT('a3', '활동 3. 그림 그리는 순서와 설명 고르기', 9, 'mindmap',
        '"나눗셈을 그림으로 나타내려면 무엇부터 그려야 할까요?" 먼저 나누어지는 수만큼 그림을 그리고, 나누는 수만큼 똑같이 나누고, 한 명 몫을 찾은 뒤 분수로 쓰는 순서를 말하게 한다. 한 명 몫을 모으지 않고 한 조각만 세는 학생에게는 "판이 몇 판이었지요? 그 판마다 받은 조각을 모두 세어요"라고 짚는다. 순서가 맞으면 짝에게 그림을 보며 설명하게 한다.',
        '2 ÷ 3과 3 ÷ 4를 그림으로 나타내는 차례를 놓고, 알맞은 설명을 골라요.', MM('order', '그림으로 나누기'), [
          mo('2 ÷ 3을 그림으로 나타내는 순서대로 카드를 놓아 보세요.', [['o1', '피자 2판을 똑같은 크기로 그려요'], ['o2', '각 판을 3조각으로 똑같이 나누어요'], ['o3', '한 명이 각 판에서 한 조각씩 가져요'], ['o4', '한 명 몫은 3분의 2판이에요']], ['o1', 'o2', 'o3', 'o4'], { difficulty: 0.12 }),
          mo('3 ÷ 4를 그림으로 나타내는 순서대로 카드를 놓아 보세요.', [['p1', '피자 3판을 똑같은 크기로 그려요'], ['p2', '각 판을 4조각으로 똑같이 나누어요'], ['p3', '한 명이 각 판에서 한 조각씩 3조각을 가져요'], ['p4', '한 명 몫은 4분의 3판이에요']], ['p1', 'p2', 'p3', 'p4'], { difficulty: 0.15 }),
          mp('2 ÷ 5를 그림으로 설명한 말 가운데 바른 것을 모두 골라 보세요.', '바른 설명', [['q1', '각 판을 5조각으로 똑같이 나누어요'], ['q2', '한 명이 각 판에서 한 조각씩 2조각을 받아요'], ['q3', '각 판을 2조각으로 나누어요'], ['q4', '한 명이 5조각을 받아요']], ['q1', 'q2'], { difficulty: 0.2 }),
        ]),
    ],
    wrap: [
      '"4 ÷ 5의 몫이 5분의 4인 까닭을 피자 그림으로 설명해 볼까요?" 판마다 5조각으로 자르고 한 명이 판마다 한 조각씩 4판에서 4조각을 받는다는 말을 이끌어 낸다. 출구 2번을 틀린 학생은 판 수와 사람 수를 바꾸어 생각한 것이므로 다음 시간에 그림을 먼저 그려 보게 한다.',
      [
        { type: 'choice', prompt: '피자 4판을 5명이 똑같이 나눌 때 그림 설명으로 알맞은 것은 무엇인가요?', options: ['각 판을 5조각으로 나누고 한 명이 판마다 한 조각씩 받아요', '각 판을 4조각으로 나누고 한 명이 5조각을 받아요', '각 판을 반으로 나누어요'], answer: 0, difficulty: 0.12, explain: '5명이 나누므로 판마다 5조각으로 나누고, 4판에서 한 조각씩 4조각을 받아요. 몫은 5분의 4예요.' },
        { type: 'tool', tool: 'fraction', options: { shape: 'pizza', min: 2, max: 12, startN: 2 }, prompt: '피자 4판을 5명이 똑같이 나누어요. 한 명이 먹는 양을 색칠하세요.', target: { den: 5, num: 4 }, difficulty: 0.15 },
        { type: 'choice', prompt: '2 ÷ 3 = 2/3에서 분자 2는 무엇을 나타낼까요?', options: ['나누어지는 피자 판 수', '나누는 사람 수', '조각 한 개의 크기'], answer: 0, difficulty: 0.15, explain: '2판을 3명이 나누었으므로 분자 2는 나누어지는 판 수, 분모 3은 나누는 사람 수예요.' },
      ],
    ],
    ws: {
      title: '그림으로 나타낸 나눗셈',
      items: [
        { type: 'figure', prompt: '피자를 똑같이 나누어 한 명 몫을 색칠한 그림이에요. 알맞은 나눗셈식과 몫을 쓰세요.', tool: 'fraction', options: { shape: 'pizza' }, figures: [
          { state: { n: 3, colored: [0, 1] }, caption: '___ ÷ ___ = ___' }, { state: { n: 4, colored: [0, 1, 2] }, caption: '___ ÷ ___ = ___' }, { state: { n: 5, colored: [0, 1] }, caption: '___ ÷ ___ = ___' }], answer: '2 ÷ 3 = 2/3, 3 ÷ 4 = 3/4, 2 ÷ 5 = 2/5' },
        { type: 'table', prompt: '피자를 나누는 이야기를 읽고 표를 채우세요.', columns: ['이야기', '나눗셈식', '한 명 몫'], cells: [['피자 2판을 3명이', '2 ÷ 3', ''], ['피자 3판을 5명이', '', ''], ['피자 4판을 7명이', '', '']], answer: '2/3, 3 ÷ 5 = 3/5, 4 ÷ 7 = 4/7' },
        { type: 'choice', prompt: '피자 3판을 8명이 똑같이 나눌 때 한 명 몫은 얼마인가요?', options: ['8분의 3판', '3분의 8판', '8분의 1판'], answer: '8분의 3판' },
        { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '피자 3판을 4명이 나눌 때 한 명은 각 판의 4분의 1씩 ______개를 받으므로 몫은 4분의 ______이에요.', answer: '3, 3' },
        { type: 'short', prompt: '피자 2판을 3명이 나눌 때 한 명 몫을 그림으로 그리고 설명해 보세요.' },
      ],
      easy: {
        note: '판마다 나누는 사람 수만큼 자르고, 한 명이 판마다 한 조각씩 받아요.',
        items: [
          { type: 'figure', prompt: '한 명 몫을 색칠한 그림이에요. 나눗셈식과 몫을 쓰세요.', tool: 'fraction', options: { shape: 'pizza' }, figures: [
            { state: { n: 3, colored: [0, 1] }, caption: '2 ÷ 3 = ___' }, { state: { n: 4, colored: [0, 1, 2] }, caption: '3 ÷ 4 = ___' }], answer: '2/3, 3/4' },
          { type: 'table', prompt: '피자를 나누는 이야기를 읽고 표를 채우세요.', columns: ['이야기', '나눗셈식', '한 명 몫'], cells: [['피자 2판을 5명이', '2 ÷ 5', ''], ['피자 3판을 7명이', '', '']], answer: '2/5, 3 ÷ 7 = 3/7' },
          { type: 'choice', prompt: '피자 2판을 3명이 나누면 한 명 몫은 얼마인가요?', options: ['2/3', '3/2'], answer: '2/3' },
          { type: 'draw', prompt: '피자 2판을 4명이 똑같이 나누는 그림을 그려 보세요.' },
        ],
      },
    },
    diff: {
      easy: '쉬움은 분모·분자의 뜻이 그림 옆에 표시되어 한 명이 받는 조각 수와 전체 조각 수를 읽을 수 있어요.',
      base: '판마다 똑같이 나누고 한 명이 받는 조각을 모아 몫을 분수로 써요.',
      challenge: '도전은 분수 읽기가 숨겨져 있어서 그림만 보고 나눗셈식과 몫을 말하고 그림 순서를 설명해요.',
    },
    notes: '자주 보이는 어려움: ① 그림에서 여러 판을 각각 나누고도 한 명 몫을 모아 세지 않는다(한 조각만 센다) → 판마다 받은 조각을 모두 색칠하게 한다. ② 판 수와 사람 수를 바꾼다(2판을 3명이 나눈 그림을 3분의 2가 아닌 2분의 3으로 읽는다) → 판 수는 분자, 사람 수는 분모라는 것을 그림 순서에서 확인한다. ③ 조각 크기가 서로 다른 그림도 맞다고 한다 → 똑같이 나누어야 한다고 짚는다. 수직선에서 몫을 찾는 활동은 4차시에서 이어진다.',
  }));

  // ───────────────────────────── 4차시 (practice · 수직선에 몫 나타내기) ─────────────────────────────
  lessons.push(LES(4, ['[6수01-10]'], {
    title: '수직선에 몫을 점으로 찍고 읽어 보기',
    objective: '(자연수) ÷ (자연수)의 몫을 수직선의 눈금에서 찾아 점으로 나타내고, 점이 나타내는 수를 분수로 읽을 수 있다.',
    ill: 'a long paper number line between zero and one with small paper flags on the tick marks and a rabbit placing a pin',
    scene: '수직선 위의 몫',
    intro: [
      '"0과 1 사이를 똑같이 5칸으로 나누었어요. 3 ÷ 5의 몫은 어디에 있을까요?" 시연 단추로 점이 눈금 3칸째로 뛰어 가는 모습을 보여 준다. "한 칸은 얼마일까요? 3칸이면 얼마일까요?" 하고 한 칸이 1 ÷ 5이고 세 칸이 3 ÷ 5라는 것을 짚는다. 5칸 가운데 5번째 눈금(1)과 헷갈리지 않도록 0에서부터 센다는 것을 말한다.',
      '0과 1 사이를 똑같이 나눈 수직선에서 한 칸이 얼마인지 말해 봐요.',
      { tool: 'numberline', options: NLO(1, 5), sequence: [{ points: [0.6] }] },
    ],
    acts: [
      ACT('a1', '활동 1. 몫이 있는 눈금에 점 찍기', 9, 'numberline',
        '"0과 1 사이가 8칸으로 나뉘었어요. 7 ÷ 8은 몇 번째 눈금일까요? 0에서 몇 칸 갔나요?" 눈금 칸 수가 분모이고 간 칸 수가 분자라는 것을 말하게 한다. 7 ÷ 8을 1에 찍는 학생에게는 "8번째 눈금은 8 ÷ 8이에요"라고 짚는다. 점을 찍은 뒤 "1까지 몇 칸이 남았나요?"라고 묻는다.',
        '몫이 되는 눈금에 점을 놓고 점이 0과 1 사이 어디쯤인지 말해요.', LV_NL, [
          nlPlace('3 ÷ 5의 몫을 수직선에 점으로 나타내 보세요.', NLO(1, 5), ['3/5'], { difficulty: 0.1,
            predict: { q: '3 ÷ 5의 몫은 수직선에서 가운데보다 왼쪽일까요, 오른쪽일까요?', options: ['왼쪽', '오른쪽'], answer: 1 }, conclude: '3/5은 5칸 가운데 3칸이라 가운데보다 조금 오른쪽에 있어요.' }),
          nlPlace('4 ÷ 9의 몫을 수직선에 점으로 나타내 보세요.', NLO(1, 9), ['4/9'], { difficulty: 0.14 }),
          nlPlace('7 ÷ 8의 몫을 수직선에 점으로 나타내 보세요.', NLO(1, 8), ['7/8'], { difficulty: 0.17, reveal: 'after-check' }),
          nlPlace('1 ÷ 4의 몫(가)과 3 ÷ 4의 몫(나)을 수직선에 점으로 나타내 보세요.', NLO(1, 4), ['1/4', '3/4'], { difficulty: 0.2 }),
        ]),
      ACT('a2', '활동 2. 점이 나타내는 몫을 분수로 읽기', 9, 'numberline',
        '"점은 0에서 몇 칸 떨어져 있고, 한 칸은 얼마인가요?" 읽는 순서를 몫 → 분수로 말하게 한다. 눈금이 4칸인데 점이 3번째 눈금이라고 4분의 4로 쓰는 학생에게는 "0에서 몇 칸째 눈금인지 다시 세어 보세요"라고 말한다. 쓴 분수가 어느 나눗셈의 몫인지 식으로도 말하게 한다.',
        '수직선의 점이 나타내는 수를 분수로 써요.', LV_NL, [
          X({ prompt: '점이 나타내는 수를 분수로 써 보세요.', toolOptions: Object.assign({}, NLO(1, 5), { mode: 'read', marks: [0.8], input: 'number', question: '점이 나타내는 수를 분수로 써요.' }), target: { value: '4/5', form: 'frac' } }, { difficulty: 0.12 }),
          X({ prompt: '0과 1 사이를 8칸으로 나눈 수직선에서 점이 나타내는 수를 분수로 써 보세요.', toolOptions: Object.assign({}, NLO(1, 8), { mode: 'read', marks: [0.625], input: 'number', question: '점이 나타내는 수를 분수로 써요.' }), target: { value: '5/8', form: 'frac' } }, { difficulty: 0.16 }),
          X({ prompt: '0과 1 사이를 10칸으로 나눈 수직선에서 점이 나타내는 수를 분수로 써 보세요.', toolOptions: Object.assign({}, NLO(1, 10), { mode: 'read', marks: [0.7], input: 'number', question: '점이 나타내는 수를 분수로 써요.' }), target: { value: '7/10', form: 'frac' } }, { difficulty: 0.2 }),
        ]),
      ACT('a3', '활동 3. 1/□씩 뛰어 몫 만들기', 9, 'numberline',
        '"3 ÷ 5의 몫은 5분의 1이 몇 개 모인 수일까요?" 1 ÷ 5가 한 칸이고 3 ÷ 5는 한 칸이 3개 모인 수라는 것을 뛰어 세기로 확인한다. 한 번에 3칸을 뛰는 학생에게는 한 칸씩 3번 뛰어 보게 한다. 도착한 수를 분수로 말하게 한다.',
        '한 칸씩 뛰어 몫에 도착해요. 한 칸이 얼마인지 말하며 뛰어요.', LV_NL, [
          X({ prompt: '3 ÷ 5의 몫은 5분의 1이 3개예요. 1/5씩 3번 뛰어 보세요.', toolOptions: { mode: 'jump', min: 0, max: 1, step: 1, sub: 5, format: 'frac', den: 5, hopStep: '1/5', hopSize: '1/5', fixedFrom: 0 }, target: { from: 0, size: '1/5', count: 3 } }, { difficulty: 0.1 }),
          X({ prompt: '5 ÷ 8의 몫은 8분의 1이 5개예요. 1/8씩 5번 뛰어 보세요.', toolOptions: { mode: 'jump', min: 0, max: 1, step: 1, sub: 8, format: 'frac', den: 8, hopStep: '1/8', hopSize: '1/8', fixedFrom: 0 }, target: { from: 0, size: '1/8', count: 5 } }, { difficulty: 0.15 }),
          X({ prompt: '2 ÷ 7의 몫은 7분의 1이 2개예요. 1/7씩 2번 뛰어 보세요.', toolOptions: { mode: 'jump', min: 0, max: 1, step: 1, sub: 7, format: 'frac', den: 7, hopStep: '1/7', hopSize: '1/7', fixedFrom: 0 }, target: { from: 0, size: '1/7', count: 2 } }, { difficulty: 0.18 }),
        ]),
    ],
    wrap: [
      '"5 ÷ 6의 몫은 수직선에서 어디쯤일까요? 0에서 몇 칸 가면 되나요?" 몫의 분모가 눈금 칸 수이고 분자가 간 칸 수라는 말을 이끌어 낸다. 출구 1번을 틀린 학생은 눈금 번호를 잘못 센 것이므로 다음 시간에 0에서부터 칸을 세는 연습을 먼저 한다.',
      [
        { type: 'choice', prompt: '0과 1 사이를 10칸으로 나눈 수직선에서 7 ÷ 10의 몫은 0에서 몇 번째 눈금일까요?', options: ['7번째', '10번째', '3번째'], answer: 0, difficulty: 0.12, explain: '7 ÷ 10 = 7/10이므로 0에서 한 칸이 10분의 1인 눈금을 7칸 가요.' },
        { type: 'tool', tool: 'numberline', options: NLO(1, 6), prompt: '5 ÷ 6의 몫을 수직선에 점으로 나타내세요.', target: { points: ['5/6'] }, difficulty: 0.15 },
        { type: 'choice', prompt: '2 ÷ 9의 몫은 9분의 1이 몇 개 모인 수일까요?', options: ['2개', '9개', '1개'], answer: 0, difficulty: 0.15, explain: '2 ÷ 9 = 2/9이고 2/9는 9분의 1이 2개 모인 수예요.' },
      ],
    ],
    ws: {
      title: '수직선 위의 몫',
      items: [
        { type: 'figure', wide: true, prompt: '수직선의 점이 나타내는 몫을 분수로 쓰세요.', tool: 'numberline', options: { mode: 'read', min: 0, max: 1, step: 1, format: 'frac', labels: 'major' }, figures: [
          { options: { sub: 4, den: 4, marks: [0.75] }, caption: '___' }, { options: { sub: 5, den: 5, marks: [0.4] }, caption: '___' }, { options: { sub: 8, den: 8, marks: [0.375] }, caption: '___' }], answer: '3/4, 2/5, 3/8' },
        { type: 'table', prompt: '나눗셈의 몫이 수직선에서 0에서 몇 칸째인지 쓰세요.', columns: ['나눗셈', '눈금 칸 수', '몫', '0에서 몇 칸'], cells: [['3 ÷ 7', '7', '', ''], ['5 ÷ 9', '9', '', ''], ['1 ÷ 6', '6', '', '']], answer: '3/7·3칸, 5/9·5칸, 1/6·1칸' },
        { type: 'choice', prompt: '수직선에서 4 ÷ 5의 몫을 나타내는 점으로 바른 것에 ○ 하세요.', options: ['0에서 4칸 간 곳 (5칸으로 나눈 수직선)', '0에서 5칸 간 곳', '0에서 1칸 간 곳'], answer: '0에서 4칸 간 곳 (5칸으로 나눈 수직선)' },
        { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '6 ÷ 11은 11분의 1이 ______개 모인 수예요.', answer: '6' },
        { type: 'short', prompt: '수직선에서 3 ÷ 4와 3 ÷ 8의 점 가운데 더 오른쪽에 있는 것은 무엇이고, 그 까닭은 무엇인가요?' },
      ],
      easy: {
        note: '0에서 한 칸씩 세면 몫의 분자를 알 수 있어요.',
        items: [
          { type: 'figure', wide: true, prompt: '수직선의 점이 나타내는 몫을 분수로 쓰세요.', tool: 'numberline', options: { mode: 'read', min: 0, max: 1, step: 1, format: 'frac', labels: 'all' }, figures: [
            { options: { sub: 4, den: 4, marks: [0.5] }, caption: '___' }, { options: { sub: 5, den: 5, marks: [0.6] }, caption: '___' }], answer: '2/4, 3/5' },
          { type: 'table', prompt: '나눗셈의 몫을 쓰세요.', columns: ['나눗셈', '몫'], cells: [['1 ÷ 5', ''], ['2 ÷ 5', ''], ['3 ÷ 5', '']], answer: '1/5, 2/5, 3/5' },
          { type: 'choice', prompt: '3 ÷ 4의 몫은 4분의 1이 몇 개일까요?', options: ['3개', '4개'], answer: '3개' },
          { type: 'draw', prompt: '0과 1 사이를 6칸으로 나눈 수직선을 그리고 5 ÷ 6의 몫에 점을 찍어 보세요.' },
        ],
      },
    },
    diff: {
      easy: '쉬움은 점을 놓으면 그 자리의 수가 바로 보이고 눈금마다 숫자가 적혀 있어요.',
      base: '수직선에서 몫의 눈금에 점을 놓고 점이 나타내는 수를 분수로 읽어요.',
      challenge: '도전은 수직선 가운데 눈금 숫자를 숨겨 두 끝의 수와 칸 수만 보고 몫을 찾아요.',
    },
    notes: '자주 보이는 어려움: ① 눈금 번호를 0이 아닌 1에서부터 세어 한 칸 어긋난다 → 점을 찍기 전에 0에서 손가락으로 칸을 세게 한다. ② 분모를 점의 번호로, 분자를 칸 수로 바꾼다 → 한 칸이 몇 분의 1인지(눈금 칸 수)부터 말하게 한다. ③ 몫이 클수록 점이 왼쪽이라고 생각한다 → 같은 분모에서 분자가 클수록 오른쪽임을 확인한다. 몫이 1보다 큰 경우는 5차시에서 다룬다.',
  }));

  // ───────────────────────────── 5차시 (core · 몫이 1보다 큰 경우) ─────────────────────────────
  lessons.push(LES(5, ['[6수01-10]'], {
    title: '5 ÷ 4처럼 몫이 1보다 큰 나눗셈을 분수로 나타내기',
    objective: '나누어지는 수가 나누는 수보다 큰 (자연수) ÷ (자연수)의 몫을 가분수와 대분수로 나타내고, 몫이 1보다 큰지 작은지 식만 보고 판단할 수 있다.',
    ill: 'five paper pizzas shared by four friends, with one friend holding one whole pizza and one extra slice, pastel layers',
    scene: '5 ÷ 4는 1보다 클까?',
    intro: [
      '"피자 5판을 4명이 똑같이 나누면 한 명이 먹는 양은 1판보다 많을까요, 적을까요?" 4판을 먼저 한 판씩 나누고 남은 1판을 4조각으로 나누어 한 조각씩 받는 방법을 그림으로 보여 준다. 5 ÷ 4의 몫이 5/4이고 5/4은 1과 4분의 1이라는 것을 연결해 말한다. 몫이 늘 1보다 작다고 생각하는 학생에게는 앞 시간의 식과 이번 식의 나누어지는 수를 견주게 한다.',
      '피자 5판을 4명이 나누면 한 명이 1판보다 많이 먹을지 적게 먹을지 어림해서 말해 봐요.',
      { tool: 'numberline', options: NLO(2, 4), sequence: [{ points: [1.25] }] },
    ],
    acts: [
      ACT('a1', '활동 1. 1보다 큰 몫을 수직선에 놓기', 9, 'numberline',
        '"5 ÷ 4의 몫은 4분의 1이 몇 개 모인 수일까요? 수직선에서 1을 넘어가나요?" 5개를 모으면 4개로 1을 채우고 1개가 남는다는 것을 짚는다. 5/4를 1과 4 사이에 놓는 학생에게는 "4분의 4는 얼마예요?"라고 묻고 1의 위치를 먼저 찾게 한다. 점을 놓은 뒤 대분수로도 읽어 보게 한다.',
        '몫이 1보다 큰지 작은지 어림하고 수직선에 몫을 점으로 나타내요.', LV_NL, [
          nlPlace('5 ÷ 4의 몫을 수직선에 점으로 나타내 보세요.', NLO(2, 4), ['5/4'], { difficulty: 0.1,
            predict: { q: '5 ÷ 4의 몫은 1보다 클까요, 작을까요?', options: ['1보다 커요', '1보다 작아요'], answer: 0 }, conclude: '5/4은 4/4가 1이고 4분의 1이 하나 더 있어서 1보다 큰 1과 4분의 1이에요.' }),
          nlPlace('4 ÷ 3의 몫을 수직선에 점으로 나타내 보세요.', NLO(2, 3), ['4/3'], { difficulty: 0.13 }),
          nlPlace('7 ÷ 5의 몫을 수직선에 점으로 나타내 보세요.', NLO(2, 5), ['7/5'], { difficulty: 0.17, reveal: 'after-check' }),
          nlPlace('5 ÷ 2의 몫을 수직선에 점으로 나타내 보세요.', NLO(3, 2), ['5/2'], { difficulty: 0.2 }),
        ]),
      ACT('a2', '활동 2. 몫이 1보다 큰지 작은지 나누기', 9, 'mindmap',
        '"나눗셈식만 보고 몫이 1보다 큰지 알 수 있을까요? 나누어지는 수와 나누는 수 중 어느 쪽이 더 큰가요?" 나누어지는 수가 크면 몫이 1보다 크고, 같으면 1이라는 것을 확인한다. 6 ÷ 6의 몫을 6이라고 하는 학생에게는 같은 양을 같은 사람 수로 나누면 한 명이 몇 판씩 받는지 물어 1임을 알게 한다.',
        '나눗셈식을 몫이 1보다 작은 것, 1인 것, 1보다 큰 것으로 나누어요.', MM('sort', '몫의 크기'), [
          ms('나눗셈식을 몫의 크기에 따라 나누어 보세요.', ['1보다 작아요', '1이에요', '1보다 커요'], [['s1', '3 ÷ 5'], ['s2', '7 ÷ 4'], ['s3', '6 ÷ 6'], ['s4', '2 ÷ 9'], ['s5', '9 ÷ 5'], ['s6', '8 ÷ 8']], { '1보다 작아요': ['s1', 's4'], '1이에요': ['s3', 's6'], '1보다 커요': ['s2', 's5'] }, { difficulty: 0.12 }),
          ms('나눗셈식을 몫의 크기에 따라 나누어 보세요.', ['1보다 작아요', '1이에요', '1보다 커요'], [['t1', '4 ÷ 7'], ['t2', '11 ÷ 6'], ['t3', '10 ÷ 10'], ['t4', '5 ÷ 12'], ['t5', '13 ÷ 9']], { '1보다 작아요': ['t1', 't4'], '1이에요': ['t3'], '1보다 커요': ['t2', 't5'] }, { difficulty: 0.18 }),
          mp('몫이 1보다 큰 나눗셈식을 모두 골라 보세요.', '몫이 1보다 큼', [['u1', '12 ÷ 7'], ['u2', '7 ÷ 12'], ['u3', '15 ÷ 8'], ['u4', '9 ÷ 9']], ['u1', 'u3'], { difficulty: 0.15 }),
        ]),
      ACT('a3', '활동 3. 가분수를 대분수로 말하기', 9, 'mindmap',
        '"5 ÷ 4의 몫 5/4을 1과 4분의 1로도 말할 수 있어요. 7 ÷ 4는 4분의 1이 7개이니 몇 판과 몇 분의 몇일까요?" 4개씩 묶어 1을 만들고 남은 수를 분자로 쓰는 방법을 말하게 한다. 7 ÷ 3을 2와 3분의 2로 쓰는 학생에게는 3개씩 묶으면 몇 개가 남는지 다시 세어 보게 한다.',
        '나눗셈의 몫을 대분수로 말한 카드를 이어요.', MM('match', '몫을 대분수로'), [
          mt('나눗셈식과 몫을 대분수로 나타낸 카드를 이어 보세요.', [['n1', '5 ÷ 4'], ['n2', '7 ÷ 4'], ['n3', '7 ÷ 3']], [['k1', '1과 4분의 1'], ['k2', '1과 4분의 3'], ['k3', '2와 3분의 1'], ['k4', '1과 3분의 4']], { n1: 'k1', n2: 'k2', n3: 'k3' }, { difficulty: 0.15 }),
          mt('나눗셈식과 몫을 대분수로 나타낸 카드를 이어 보세요.', [['m1', '9 ÷ 5'], ['m2', '11 ÷ 4'], ['m3', '8 ÷ 3']], [['j1', '1과 5분의 4'], ['j2', '2와 4분의 3'], ['j3', '2와 3분의 2'], ['j4', '2와 5분의 4']], { m1: 'j1', m2: 'j2', m3: 'j3' }, { difficulty: 0.2 }),
          mt('나눗셈식과 몫을 대분수로 나타낸 카드를 이어 보세요.', [['r1', '6 ÷ 5'], ['r2', '10 ÷ 3']], [['i1', '1과 5분의 1'], ['i2', '3과 3분의 1'], ['i3', '2과 3분의 1']], { r1: 'i1', r2: 'i2' }, { difficulty: 0.22 }),
        ]),
    ],
    wrap: [
      '"피자 7판을 5명이 나누면 한 명 몫은 1판보다 많을까요? 왜 그렇게 생각하나요?" 나누어지는 수 7이 나누는 수 5보다 크므로 몫이 1보다 크다는 말을 이끌어 낸다. 출구 2번을 틀린 학생은 5/3과 3/5을 헷갈린 것이므로 다음 시간에 수직선에서 1의 위치를 먼저 찾게 한다.',
      [
        { type: 'choice', prompt: '6 ÷ 5의 몫은 1보다 큰가요, 작은가요?', options: ['1보다 커요', '1과 같아요', '1보다 작아요'], answer: 0, difficulty: 0.1, explain: '나누어지는 수 6이 나누는 수 5보다 크므로 몫은 1보다 커요.' },
        { type: 'tool', tool: 'numberline', options: NLO(2, 3), prompt: '5 ÷ 3의 몫을 수직선에 점으로 나타내세요.', target: { points: ['5/3'] }, difficulty: 0.15 },
        { type: 'choice', prompt: '7 ÷ 3의 몫을 가분수로 나타낸 것은 어느 것인가요?', options: ['7/3', '3/7', '7/10'], answer: 0, difficulty: 0.12, explain: '7을 3으로 나눈 몫은 분모가 3이고 분자가 7인 7/3이에요.' },
      ],
    ],
    ws: {
      title: '몫이 1보다 큰 나눗셈',
      items: [
        { type: 'figure', wide: true, prompt: '수직선의 점이 나타내는 몫을 가분수로 쓰세요.', tool: 'numberline', options: { mode: 'read', min: 0, max: 2, step: 1, format: 'frac', labels: 'major' }, figures: [
          { options: { sub: 4, den: 4, marks: [1.25] }, caption: '___' }, { options: { sub: 5, den: 5, marks: [1.6] }, caption: '___' }, { options: { sub: 2, den: 2, marks: [1.5] }, caption: '___' }], answer: '5/4, 8/5, 3/2' },
        { type: 'table', prompt: '나눗셈의 몫을 가분수와 대분수로 쓰세요.', columns: ['나눗셈', '가분수', '대분수'], cells: [['5 ÷ 4', '5/4', '1과 4분의 1'], ['7 ÷ 4', '', ''], ['8 ÷ 5', '', '']], answer: '7/4·1과 4분의 3, 8/5·1과 5분의 3' },
        { type: 'choice', prompt: '몫이 1보다 작은 것에 ○ 하세요.', options: ['9 ÷ 7', '7 ÷ 9', '9 ÷ 9'], answer: '7 ÷ 9' },
        { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '7 ÷ 3 = ______/3 = 2와 3분의 ______', answer: '7, 1' },
        { type: 'short', prompt: '5 ÷ 4의 몫이 1보다 큰 까닭을 피자를 떠올리며 써 보세요.' },
      ],
      easy: {
        note: '나누어지는 수가 나누는 수보다 크면 몫이 1보다 커요.',
        items: [
          { type: 'figure', wide: true, prompt: '수직선의 점이 나타내는 몫을 가분수로 쓰세요.', tool: 'numberline', options: { mode: 'read', min: 0, max: 2, step: 1, format: 'frac', labels: 'all' }, figures: [
            { options: { sub: 4, den: 4, marks: [1.5] }, caption: '___' }, { options: { sub: 5, den: 5, marks: [1.2] }, caption: '___' }], answer: '6/4, 6/5' },
          { type: 'table', prompt: '나눗셈의 몫을 가분수로 쓰세요.', columns: ['나눗셈', '몫'], cells: [['5 ÷ 4', '5/4'], ['4 ÷ 3', ''], ['7 ÷ 5', '']], answer: '4/3, 7/5' },
          { type: 'choice', prompt: '5 ÷ 4의 몫은 1보다 큰가요?', options: ['커요', '작아요'], answer: '커요' },
          { type: 'draw', prompt: '피자 5판을 4명이 나누는 그림을 그려 보세요.' },
        ],
      },
    },
    diff: {
      easy: '쉬움은 점을 놓을 때 수가 바로 보이고 눈금에 숫자가 적혀 있어 1의 위치를 찾기 쉬워요.',
      base: '몫이 1보다 큰지 어림하고 수직선에 놓은 뒤 가분수와 대분수로 말해요.',
      challenge: '도전은 수직선에 처음과 끝 수만 보이고 식만 보고 몫의 크기를 판단해 대분수로 설명해요.',
    },
    notes: '자주 보이는 어려움: ① 몫은 항상 1보다 작다고 생각한다 → 나누어지는 수가 나누는 수보다 크면 한 명 몫이 한 판보다 많다는 것을 피자 그림으로 확인한다. ② 나머지가 있는 나눗셈으로만 답해 남는 양을 분수로 나타내지 못한다(5 ÷ 4 = 1…1) → 남은 1판을 4조각으로 나누어 4분의 1씩 받는다는 것을 그림으로 보여 준다. ③ 가분수를 대분수로 고칠 때 남은 수를 틀린다 → 분모만큼씩 묶어 1을 만들고 남은 수를 센다. 생활 속 문제 해결은 6차시에서 한다.',
  }));

  // ───────────────────────────── 6차시 (practice · 나누어 가지는 이야기 문제) ─────────────────────────────
  lessons.push(LES(6, ['[6수01-10]'], {
    title: '나누어 가지는 이야기에서 한 명 몫 구하기',
    objective: '나누어 가지는 생활 이야기를 나눗셈식으로 세우고, 한 명 몫을 분수로 나타낸 뒤 1보다 큰지 작은지 판단해 설명할 수 있다.',
    ill: 'a rabbit measuring a long paper ribbon and cutting it equally for several friends, pastel layers',
    scene: '똑같이 나누어 가져요',
    intro: [
      '"색 테이프 9 m를 4명이 똑같이 나누어 가졌어요. 한 명은 몇 m씩 가질까요? 식은 어떻게 쓸까요?" 나누어지는 양이 9 m, 나누는 사람 수가 4명임을 짚고 9 ÷ 4로 식을 세워 보게 한다. 4 ÷ 9로 쓰는 학생에게는 무엇을 나누고 있는지 물어 보고, 먼저 한 명 몫이 2 m보다 많을지 적을지 어림하게 한다.',
      '내가 아는 나누어 가지는 이야기를 하나 떠올려 보고, 무엇을 몇 명이 나누는지 말해 봐요.',
      { tool: 'mindmap', options: { mode: 'match', slots: [{ id: 'd1', label: '색 테이프 9 m를 4명이' }], cards: [{ id: 'd2', text: '9 ÷ 4' }, { id: 'd3', text: '4 ÷ 9' }] }, sequence: [{ at: { d2: 0 } }] },
    ],
    acts: [
      ACT('a1', '활동 1. 이야기에 맞는 나눗셈식 이어 보기', 9, 'mindmap',
        '"무엇을 몇 명이 나누는지 먼저 찾아볼까요? 나누어지는 양은 어느 쪽에 써요?" 이야기에서 나누어지는 양에 밑줄을, 나누는 사람 수에 동그라미를 치며 식을 세우게 한다. 5 m를 8명이 나누는 이야기를 8 ÷ 5로 연결한 학생에게는 "한 명이 가진 양은 5 m보다 많을 수 있나요?"라고 되묻는다. 식이 정해지면 몫을 분수로 쓰게 한다.',
        '이야기에서 나누어지는 양과 나누는 사람 수를 찾아 알맞은 나눗셈식과 이어요.', MM('match', '이야기와 식'), [
          mt('이야기와 알맞은 나눗셈식을 이어 보세요.', [['y1', '색 테이프 5 m를 8명이 똑같이 나누어요'], ['y2', '물 8 L를 5병에 똑같이 나누어 담아요'], ['y3', '쿠키 반죽 3 kg을 4통에 똑같이 담아요']], [['z1', '5 ÷ 8'], ['z2', '8 ÷ 5'], ['z3', '3 ÷ 4'], ['z4', '4 ÷ 3']], { y1: 'z1', y2: 'z2', y3: 'z3' }, { difficulty: 0.12 }),
          mt('이야기와 알맞은 나눗셈식을 이어 보세요.', [['v1', '밧줄 7 m를 3명이 똑같이 나누어요'], ['v2', '우유 2 L를 9잔에 똑같이 따라요']], [['w1', '7 ÷ 3'], ['w2', '3 ÷ 7'], ['w3', '2 ÷ 9'], ['w4', '9 ÷ 2']], { v1: 'w1', v2: 'w3' }, { difficulty: 0.16 }),
          mp('"모래 10 kg을 6봉지에 똑같이 나누어 담았어요"에 알맞은 식과 한 봉지 몫을 모두 골라 보세요.', '맞는 것', [['q1', '10 ÷ 6'], ['q2', '6 ÷ 10'], ['q3', '10/6 kg'], ['q4', '6/10 kg']], ['q1', 'q3'], { difficulty: 0.2 }),
        ]),
      ACT('a2', '활동 2. 한 명 몫이 1보다 많은 이야기와 적은 이야기', 9, 'mindmap',
        '"끈 4 m를 5명이 나누면 한 명이 1 m보다 길까요, 짧을까요? 식만 보고도 알 수 있을까요?" 나누어지는 수가 나누는 수보다 작으면 한 명 몫이 1보다 작다는 것을 말하게 한다. 11 ÷ 6을 1보다 작다고 분류한 학생에게는 한 명이 한 판씩 받고도 남는지 물어 본다.',
        '한 명 몫이 1 m보다 짧은 이야기와 긴 이야기로 나누어요.', MM('sort', '한 명 몫'), [
          ms('한 명 몫이 1 m보다 짧은지 긴지 나누어 보세요.', ['1 m보다 짧아요', '1 m보다 길어요'], [['c1', '끈 4 m를 5명이'], ['c2', '끈 9 m를 4명이'], ['c3', '끈 3 m를 7명이'], ['c4', '끈 11 m를 6명이']], { '1 m보다 짧아요': ['c1', 'c3'], '1 m보다 길어요': ['c2', 'c4'] }, { difficulty: 0.12 }),
          ms('한 명 몫이 1 L보다 적은지 많은지 나누어 보세요.', ['1 L보다 적어요', '1 L보다 많아요'], [['d1', '주스 5 L를 8명이'], ['d2', '주스 13 L를 9명이'], ['d3', '주스 2 L를 3명이'], ['d4', '주스 7 L를 4명이'], ['d5', '주스 6 L를 11명이']], { '1 L보다 적어요': ['d1', 'd3', 'd5'], '1 L보다 많아요': ['d2', 'd4'] }, { difficulty: 0.18 }),
          mp('한 명 몫이 1 kg보다 많은 이야기를 모두 골라 보세요.', '1 kg보다 많음', [['e1', '쌀 8 kg을 5명이'], ['e2', '쌀 5 kg을 8명이'], ['e3', '쌀 9 kg을 10명이'], ['e4', '쌀 14 kg을 6명이']], ['e1', 'e4'], { difficulty: 0.2 }),
        ]),
      ACT('a3', '활동 3. 대분수로 몫 말하기', 9, 'pattern',
        '"9 ÷ 4의 몫을 2와 몇 분의 몇이라고 말할 수 있을까요?" 4씩 2묶음이 8이고 남은 1을 4로 나눈 것이 4분의 1이라는 것을 확인한다. 2와 4분의 1에서 분모를 5로 쓰는 학생에게는 나누는 수가 분모라는 것을 다시 짚는다. 칸에 알맞은 수를 쓴 뒤 몫을 한 번 더 말하게 한다.',
        '몫을 대분수로 말할 때 □ 안에 알맞은 수를 써요.', LV_NONE, [
          bl('리본 9 m를 4명이 똑같이 나누면 한 명 몫은 2와 몇 분의 몇 m일까요?', '2와 □/4', 1, { difficulty: 0.12 }),
          bl('물 7 L를 3통에 똑같이 나누어 담으면 한 통은 2와 몇 분의 몇 L일까요?', '2와 □/3', 1, { difficulty: 0.16 }),
          bl('철사 11 m를 4명이 똑같이 나누면 한 명 몫은 2와 몇 분의 몇 m일까요?', '2와 □/4', 3, { difficulty: 0.2 }),
          bl('찰흙 13 kg을 5모둠이 똑같이 나누면 한 모둠은 2와 몇 분의 몇 kg일까요?', '2와 □/5', 3, { difficulty: 0.22, reveal: 'after-check' }),
        ]),
    ],
    wrap: [
      '"이야기를 읽고 나눗셈식을 세울 때 가장 먼저 무엇을 찾아야 하나요?" 나누어지는 양과 나누는 사람 수를 찾아 밑줄을 긋는다는 말을 이끌어 낸다. 출구 1번을 틀린 학생은 식의 순서를 바꾼 것이므로 다음 시간에 몫이 1보다 큰지 작은지 어림하며 식을 점검하게 한다.',
      [
        { type: 'choice', prompt: '"밀가루 3 kg을 8봉지에 똑같이 나누어 담았어요"에 알맞은 식은 어느 것인가요?', options: ['3 ÷ 8', '8 ÷ 3', '3 × 8'], answer: 0, difficulty: 0.12, explain: '나누어지는 양이 3 kg이고 나누는 수가 8봉지이므로 3 ÷ 8이에요. 한 봉지는 3/8 kg이에요.' },
        { type: 'choice', prompt: '"고구마 12 kg을 5명이 똑같이 나누어 가졌어요" 한 명 몫은 1 kg보다 어떤가요?', options: ['더 많아요', '같아요', '더 적어요'], answer: 0, difficulty: 0.15, explain: '12 ÷ 5에서 나누어지는 수 12가 나누는 수 5보다 크므로 몫이 1보다 커요.' },
        { type: 'tool', tool: 'pattern', options: { seq: [null], names: ['2와 □/3'], input: 'number' }, prompt: '리본 8 m를 3명이 똑같이 나누면 한 명 몫은 2와 몇 분의 몇 m일까요?', target: { fill: [2] }, difficulty: 0.18 },
      ],
    ],
    ws: {
      title: '이야기 속 나눗셈',
      items: [
        { type: 'table', prompt: '이야기에 알맞은 나눗셈식과 한 명 몫을 쓰세요.', columns: ['이야기', '나눗셈식', '한 명 몫'], cells: [['리본 3 m를 5명이', '3 ÷ 5', ''], ['주스 7 L를 4명이', '', ''], ['끈 2 m를 9명이', '', '']], answer: '3/5 m, 7 ÷ 4 = 7/4 L, 2 ÷ 9 = 2/9 m' },
        { type: 'choice', prompt: '한 명 몫이 1 m보다 짧은 이야기에 ○ 하세요.', options: ['끈 5 m를 3명이', '끈 3 m를 5명이', '끈 6 m를 6명이'], answer: '끈 3 m를 5명이' },
        { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '10 ÷ 3 = ______/3 = 3과 3분의 ______', answer: '10, 1' },
        { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '철사 11 m를 6명이 똑같이 나누면 한 명은 ______/6 m이고, 1 m보다 (길어요 / 짧아요).', answer: '11, 길어요' },
        { type: 'short', prompt: '"우유 5 L를 7명이 똑같이 나누어 마셔요"의 식과 한 명 몫을 쓰고, 1 L보다 많은지 적은지 말해 보세요.' },
      ],
      easy: {
        note: '무엇을 나누는지(나누어지는 양)와 몇 명이 나누는지(나누는 수)를 찾아 식을 세워요.',
        items: [
          { type: 'table', prompt: '이야기에 알맞은 나눗셈식과 한 명 몫을 쓰세요.', columns: ['이야기', '나눗셈식', '한 명 몫'], cells: [['리본 3 m를 5명이', '3 ÷ 5', ''], ['끈 2 m를 7명이', '', '']], answer: '3/5 m, 2 ÷ 7 = 2/7 m' },
          { type: 'choice', prompt: '끈 3 m를 5명이 똑같이 나누면 한 명 몫은 1 m보다 어떤가요?', options: ['짧아요', '길어요'], answer: '짧아요' },
          { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '5 ÷ 4 = ______/4', answer: '5' },
          { type: 'short', prompt: '리본 4 m를 9명이 나누는 식을 써 보세요.', answer: '4 ÷ 9' },
        ],
      },
    },
    diff: {
      easy: '쉬움은 이어진 카드가 맞으면 초록 테두리로 표시되고 칸 안의 말이 길지 않아요.',
      base: '이야기에서 나누어지는 양과 나누는 수를 찾아 식을 세우고 몫을 분수로 말해요.',
      challenge: '도전은 틀린 식을 고쳐 쓰고 한 명 몫이 1보다 큰지 적은지 까닭을 설명해요.',
    },
    notes: '자주 보이는 어려움: ① 나누어지는 양과 나누는 수를 바꾸어 식을 세운다(5 m를 8명이를 8 ÷ 5로 쓴다) → 무엇을 나누는지 밑줄을 긋게 하고 몫이 1보다 큰지 작은지로 점검한다. ② 나머지가 있는 나눗셈으로만 답한다(9 ÷ 4 = 2…1) → 남은 1 m도 4명이 나누어 가진다는 것을 보여 주고 몫을 분수로 쓰게 한다. ③ 단위를 빠뜨린다 → 답에 m, L, kg을 함께 쓰게 한다. 분수의 나눗셈은 7차시부터 이어진다.',
  }));

  // ───────────────────────────── 7차시 (core · 분자가 나누어떨어지는 (분수) ÷ (자연수)) ─────────────────────────────
  lessons.push(LES(7, ['[6수01-11]'], {
    title: '주스 4/5 L를 2명이 나누어 한 명 몫 구하기',
    objective: '분자가 나누는 수로 나누어떨어지는 (분수) ÷ (자연수)를 띠 그림으로 나타내고, 분자를 나누는 수로 나누어 몫을 구할 수 있다.',
    ill: 'a paper juice bottle with four fifths filled and two cups sharing it equally, pastel layers',
    scene: '4/5 L를 2명이',
    intro: [
      '"주스가 4/5 L 있어요. 2명이 똑같이 나누어 마시면 한 명은 몇 L를 마실까요?" 시연 단추로 5칸 띠에서 색칠한 4칸이 2묶음으로 나뉘어 한 묶음 2칸이 남는 모습을 보여 준다. 몫이 4/5보다 클까요, 작을까요? 하고 먼저 어림하게 한다. 4/5 ÷ 2를 2/5이 아니라 4/10이라고 쓰는 학생이 나오면 활동 3까지 두 방법을 모두 기록해 두었다가 같은 값인지 견주어 말하게 한다.',
      '주스 4/5 L를 2명이 똑같이 나누어 마시는 모습을 그려 보고, 한 명이 마시는 양이 얼마쯤일지 말해 봐요.',
      { tool: 'fraction', options: { shape: 'strip', min: 2, max: 12, startN: 2 }, sequence: [{ n: 5, colored: [0, 1] }] },
    ],
    acts: [
      ACT('a1', '활동 1. 색칠한 칸을 똑같이 나누어 한 명 몫 색칠하기', 9, 'fraction',
        '"4/5 L는 5분의 1이 몇 개일까요? 그 4개를 2명이 똑같이 나누면 한 명이 몇 개씩 받을까요?" 5분의 1이 4개를 2묶음으로 나누면 한 묶음에 2개라는 것을 짚는다. 4/5을 2로 나누고도 분모를 2로 나누어 5/2라고 쓰는 학생에게는 "한 칸의 크기가 바뀌었나요?"라고 묻는다. 색칠한 뒤 식 4/5 ÷ 2 = 2/5를 읽어 보게 한다.',
        '1 L를 똑같이 나눈 띠에서 한 명이 마시는 양만큼 색칠하고 분수로 나타내요.', LV_FR, [
          st('주스 4/5 L를 2명이 똑같이 나누어 마셔요. 1 L를 5칸으로 나눈 띠에 한 명이 마시는 양을 색칠해 보세요.', 5, 2, {}, { difficulty: 0.1,
            predict: { q: '한 명이 마시는 양은 4/5 L보다 많을까요, 적을까요?', options: ['더 많아요', '더 적어요'], answer: 1 }, conclude: '5분의 1이 4개를 2명이 나누면 한 명이 5분의 1을 2개씩 받아요. 4/5 ÷ 2 = 2/5이에요.' }),
          st('끈 6/7 m를 3명이 똑같이 나누어 가져요. 1 m를 7칸으로 나눈 띠에 한 명이 갖는 길이를 색칠해 보세요.', 7, 2, {}, { difficulty: 0.13 }),
          st('우유 3/8 L를 3컵에 똑같이 나누어 따라요. 1 L를 8칸으로 나눈 띠에 한 컵의 양을 색칠해 보세요.', 8, 1, {}, { difficulty: 0.15 }),
          st('물 8/9 L를 4통에 똑같이 나누어 담아요. 1 L를 9칸으로 나눈 띠에 한 통의 양을 색칠해 보세요.', 9, 2, {}, { difficulty: 0.2, reveal: 'after-check' }),
        ]),
      ACT('a2', '활동 2. 위 띠를 똑같이 나눈 한 묶음 고르기', 9, 'fracstrips',
        '"위 띠에서 색칠한 부분을 2묶음으로 똑같이 나누면 한 묶음은 얼마일까요?" 색칠한 칸 수를 먼저 세고 묶음 수로 나누게 한다. 8/9을 4로 나누어 8/36이라고 쓰는 학생에게는 "칸 크기는 그대로인데 몇 칸씩 받나요?"라고 묻는다. 고른 몫이 위 띠보다 짧은지도 확인하게 한다.',
        '위 띠의 색칠한 칸을 똑같이 나누어 한 묶음이 얼마인지 골라요.', LV_NONE, [
          ak('6/8를 나타낸 위 띠를 2묶음으로 똑같이 나눌 때 한 묶음은 얼마일까요?', [6, 8], '한 묶음은?', ['3/8', '6/4', '6/10'], 0, {}, { difficulty: 0.12 }),
          ak('9/11를 나타낸 위 띠를 3묶음으로 똑같이 나눌 때 한 묶음은 얼마일까요?', [9, 11], '한 묶음은?', ['9/14', '3/11', '9/33'], 1, {}, { difficulty: 0.16 }),
          ak('10/13을 나타낸 위 띠를 5묶음으로 똑같이 나눌 때 한 묶음은 얼마일까요?', [10, 13], '한 묶음은?', ['2/13', '10/18', '5/13'], 0, {}, { difficulty: 0.2, reveal: 'after-check' }),
        ]),
      ACT('a3', '활동 3. 나눗셈식과 몫 이어 보기', 9, 'mindmap',
        '"분자 8을 4로 나누면 얼마예요? 분모는 어떻게 되나요?" 분자만 나누고 분모는 그대로 둔다는 것을 확인하게 한다. 몫의 분모를 바꾸어 쓰는 학생에게는 칸 크기가 그대로라는 것을 띠로 다시 보여 준다. 다 이은 뒤 분자가 나누어떨어지는 식만 고르는 활동으로 마무리한다.',
        '(분수) ÷ (자연수)의 몫을 이어 보고, 분자가 나누어떨어지는 식을 골라요.', MM('match', '분자를 나누어요'), [
          mt('나눗셈식과 몫을 이어 보세요.', [['f1', '8/11 ÷ 4'], ['f2', '6/13 ÷ 2'], ['f3', '9/14 ÷ 3']], [['g1', '2/11'], ['g2', '3/13'], ['g3', '3/14'], ['g4', '6/13']], { f1: 'g1', f2: 'g2', f3: 'g3' }, { difficulty: 0.14 }),
          mt('나눗셈식과 몫을 이어 보세요.', [['h1', '12/17 ÷ 4'], ['h2', '15/16 ÷ 5'], ['h3', '14/15 ÷ 7']], [['i1', '3/17'], ['i2', '3/16'], ['i3', '2/15'], ['i4', '14/15']], { h1: 'i1', h2: 'i2', h3: 'i3' }, { difficulty: 0.18 }),
          mp('분자가 나누는 수로 나누어떨어지는 식을 모두 골라 보세요.', '나누어떨어짐', [['j1', '6/7 ÷ 3'], ['j2', '5/7 ÷ 3'], ['j3', '8/9 ÷ 2'], ['j4', '9/10 ÷ 4']], ['j1', 'j3'], { difficulty: 0.2 }),
        ]),
    ],
    wrap: [
      '"4/5 ÷ 2는 분자 4를 2로 나누어 2/5이에요. 왜 분모는 그대로일까요?" 칸의 크기가 그대로이고 칸 수만 나누기 때문이라는 말을 이끌어 낸다. 출구 1번을 틀린 학생은 분모까지 나눈 것이므로 다음 시간 첫 문제에서 띠의 칸 크기를 다시 확인하게 한다.',
      [
        { type: 'choice', prompt: '6/7 ÷ 2의 몫은 어느 것인가요?', options: ['3/7', '6/5', '12/7'], answer: 0, difficulty: 0.12, explain: '분자 6을 2로 나누어 3, 분모는 그대로 7이라서 3/7이에요.' },
        { type: 'tool', tool: 'fraction', options: { shape: 'strip', min: 2, max: 12, startN: 2 }, prompt: '물 10/11 L를 5통에 똑같이 나누어 담아요. 1 L를 11칸으로 나눈 띠에 한 통의 양을 색칠하세요.', target: { den: 11, num: 2 }, difficulty: 0.15 },
        { type: 'choice', prompt: '분자가 나누는 수로 나누어떨어지는 (분수) ÷ (자연수)는 어떻게 계산하나요?', options: ['분자를 나누는 수로 나누고 분모는 그대로 써요', '분모를 나누는 수로 나누어요', '분자와 분모를 모두 나누는 수로 나누어요'], answer: 0, difficulty: 0.15, explain: '칸의 크기(분모)는 그대로이고 색칠한 칸 수(분자)만 똑같이 나누어요.' },
      ],
    ],
    ws: {
      title: '분자를 나누는 수로 나누기',
      items: [
        { type: 'figure', prompt: '색칠한 띠를 똑같이 나누어요. 빈칸에 알맞은 수를 쓰세요.', tool: 'fraction', options: { shape: 'strip' }, figures: [
          { state: { n: 5, colored: [0, 1, 2, 3] }, caption: '4/5 ÷ 2 = ___/5' }, { state: { n: 7, colored: [0, 1, 2, 3, 4, 5] }, caption: '6/7 ÷ 3 = ___/7' }, { state: { n: 8, colored: [0, 1, 2] }, caption: '3/8 ÷ 3 = ___/8' }], answer: '2/5, 2/7, 1/8' },
        { type: 'table', prompt: '분자를 나누는 수로 나누어 몫을 쓰세요.', columns: ['식', '몫'], cells: [['6/11 ÷ 3', ''], ['8/9 ÷ 4', ''], ['10/13 ÷ 5', '']], answer: '2/11, 2/9, 2/13' },
        { type: 'choice', prompt: '9/10 ÷ 3의 몫으로 바른 것에 ○ 하세요.', options: ['3/10', '9/13', '3/30'], answer: '3/10' },
        { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '12/17 ÷ 4 = ______/17, 14/15 ÷ 7 = ______/15', answer: '3, 2' },
        { type: 'short', prompt: '4/5 ÷ 2에서 분모를 그대로 쓰는 까닭을 띠 그림을 떠올리며 써 보세요.' },
      ],
      easy: {
        note: '5분의 1이 4개를 2묶음으로 나누면 한 묶음에 5분의 1이 몇 개인지 세어 봐요.',
        items: [
          { type: 'figure', prompt: '색칠한 띠를 똑같이 나누어요. 빈칸에 알맞은 수를 쓰세요.', tool: 'fraction', options: { shape: 'strip' }, figures: [
            { state: { n: 5, colored: [0, 1, 2, 3] }, caption: '4/5 ÷ 2 = ___/5' }, { state: { n: 6, colored: [0, 1, 2, 3] }, caption: '4/6 ÷ 2 = ___/6' }], answer: '2/5, 2/6' },
          { type: 'table', prompt: '분자를 나누는 수로 나누어 몫을 쓰세요.', columns: ['식', '몫'], cells: [['6/7 ÷ 2', ''], ['6/9 ÷ 3', '']], answer: '3/7, 2/9' },
          { type: 'choice', prompt: '8/9 ÷ 2의 몫은 어느 것인가요?', options: ['4/9', '8/18'], answer: '4/9' },
          { type: 'short', prompt: '6/7 ÷ 3에서 분자를 3으로 나누면 얼마인가요?', answer: '2' },
        ],
      },
    },
    diff: {
      easy: '쉬움은 분모·분자의 뜻이 그림 옆에 표시되어 칸 수와 색칠한 칸 수를 읽으며 몫을 찾아요.',
      base: '띠에서 색칠한 칸을 똑같이 나누어 한 명 몫을 구하고 분자를 나누는 방법으로 계산해요.',
      challenge: '도전은 분수 읽기를 숨겨 띠 그림만 보고 몫을 분수로 말하고 분모가 그대로인 까닭을 설명해요.',
    },
    notes: '자주 보이는 어려움: ① 분모까지 나누는 수로 나눈다(6/7 ÷ 3 = 2/7이 아닌 2/ 7÷3) → 한 칸의 크기는 변하지 않고 색칠한 칸만 나눈다는 것을 띠로 보여 준다. ② 분모에 나누는 수를 곱해 8/36처럼 쓴다 → 계산이 틀린 것은 아니나 나누어떨어지면 분자를 나누는 것이 간단하다는 것을 짚는다. ③ 몫이 처음 분수보다 크다고 생각한다 → 한 명 몫이 전체 양보다 적다는 것을 이야기에서 확인한다. 나누어떨어지지 않는 경우는 9차시에서 다룬다.',
  }));

  // ───────────────────────────── 8차시 (practice · 분자를 나누어 구하는 연습) ─────────────────────────────
  lessons.push(LES(8, ['[6수01-11]'], {
    title: '수직선에서 분수를 똑같이 나눈 몫 찾기',
    objective: '분자가 나누는 수로 나누어떨어지는 (분수) ÷ (자연수)의 몫을 수직선에 나타내고, 계산 결과가 맞는지 판단하며 □ 안의 수를 구할 수 있다.',
    ill: 'a paper number line from zero to one with a small cutting knife marking a fraction in equal parts, pastel layers',
    scene: '분수를 똑같이 나누기',
    intro: [
      '"9/10 m를 3도막으로 똑같이 자르면 한 도막은 몇 m일까요? 수직선에서 9/10은 0에서 몇 칸 간 곳일까요?" 시연 단추로 9칸을 3묶음으로 나누어 한 묶음 3칸에서 점이 멈추는 모습을 보여 준다. 분자를 나누고 분모는 그대로 두는 방법을 지난 시간에 어떻게 말했는지 되묻는다. 몫이 9/10보다 오른쪽에 있다고 하는 학생에게는 한 도막이 전체보다 짧다는 것을 짚는다.',
      '9/10 m를 똑같이 세 도막으로 자르면 한 도막이 얼마쯤일지 말해 봐요.',
      { tool: 'numberline', options: NLO(1, 10), sequence: [{ points: [0.3] }] },
    ],
    acts: [
      ACT('a1', '활동 1. 수직선에 몫의 자리 찾기', 9, 'numberline',
        '"9/10 ÷ 3의 몫은 10분의 몇일까요? 수직선에서 어디쯤일까요?" 분자 9를 3으로 나눈 3을 먼저 쓰고 눈금에서 3칸째를 찾게 한다. 9/10 ÷ 3을 9/10 자리에 그대로 찍는 학생에게는 한 도막이 얼마나 짧은지 물어 본다. 점을 놓은 뒤 처음 분수와 견주어 몫이 더 작은 까닭을 말하게 한다.',
        '(분수) ÷ (자연수)의 몫을 수직선에 점으로 놓아요. 처음 분수와 견주어 보세요.', LV_NL, [
          nlPlace('끈 9/10 m를 3도막으로 똑같이 잘랐어요. 한 도막의 길이를 수직선에 점으로 나타내 보세요.', NLO(1, 10), ['3/10'], { difficulty: 0.1,
            predict: { q: '한 도막의 길이는 9/10 m보다 길까요, 짧을까요?', options: ['더 길어요', '더 짧아요'], answer: 1 }, conclude: '9/10 m를 3도막으로 자르면 한 도막은 10분의 3 m예요. 처음보다 짧아요.' }),
          nlPlace('리본 5/6 m를 5명이 똑같이 나누었어요. 한 명 몫을 수직선에 점으로 나타내 보세요.', NLO(1, 6), ['1/6'], { difficulty: 0.14 }),
          nlPlace('주스 6/11 L를 2병에 똑같이 나누어 담았어요. 한 병의 양을 수직선에 점으로 나타내 보세요.', NLO(1, 11), ['3/11'], { difficulty: 0.17 }),
          nlPlace('철사 10/13 m를 5조각으로 똑같이 잘랐어요. 한 조각의 길이를 수직선에 점으로 나타내 보세요.', NLO(1, 13), ['2/13'], { difficulty: 0.2, reveal: 'after-check' }),
        ]),
      ACT('a2', '활동 2. 바르게 계산한 식 고르기', 9, 'mindmap',
        '"분자만 나누는 방법으로 계산하면 12/13 ÷ 4는 얼마일까요?" 계산 결과가 맞는지 분자와 분모를 각각 살펴 확인하게 한다. 분모에 나누는 수를 곱해 3/52처럼 쓴 학생에게는 한 칸의 크기가 바뀌었는지 물어 본다. 틀린 식을 고르면 어디가 틀렸는지 한 문장으로 말하게 한다.',
        '계산 결과가 맞는 식을 모두 골라요. 틀린 식은 어디가 틀렸는지 말해 봐요.', MM('pick', '맞는 식'), [
          mp('9/10 ÷ 3을 바르게 계산한 식을 모두 골라 보세요.', '바른 식', [['a1', '9/10 ÷ 3 = 3/10'], ['a2', '9/10 ÷ 3 = 3/30'], ['a3', '9/10 ÷ 3 = 9/7'], ['a4', '9/10 ÷ 3 = 27/10']], ['a1'], { difficulty: 0.12 }),
          mp('12/13 ÷ 4를 바르게 계산한 식을 모두 골라 보세요.', '바른 식', [['b1', '12/13 ÷ 4 = 3/13'], ['b2', '12/13 ÷ 4 = 3/52'], ['b3', '12/13 ÷ 4 = 48/13'], ['b4', '12/13 ÷ 4 = 12/9']], ['b1'], { difficulty: 0.16 }),
          mp('바르게 계산한 식을 모두 골라 보세요.', '바른 식', [['c1', '15/16 ÷ 5 = 3/16'], ['c2', '14/15 ÷ 2 = 7/15'], ['c3', '15/16 ÷ 5 = 3/80'], ['c4', '14/15 ÷ 2 = 12/15']], ['c1', 'c2'], { difficulty: 0.2 }),
        ]),
      ACT('a3', '활동 3. □에 알맞은 수 구하기', 9, 'pattern',
        '"14/15 ÷ 7의 분자는 14를 7로 나눈 수예요. □에 알맞은 수는 무엇일까요?" 분모는 그대로이므로 분자 칸만 구하면 된다는 것을 확인한다. 20/21 ÷ 4 = □/21에서 20과 4를 곱한 80을 쓰는 학생에게는 나눗셈인지 곱셈인지 식을 읽어 보게 한다. 쓴 뒤 곱셈으로 검산해 보게 한다.',
        '분자를 나누는 수로 나누어 □ 안에 알맞은 수를 써요.', LV_NONE, [
          bl('14/15 ÷ 7 = □/15에서 □에 알맞은 수를 쓰세요.', '14/15 ÷ 7 = □/15', 2, { difficulty: 0.1 }),
          bl('12/17 ÷ 3 = □/17에서 □에 알맞은 수를 쓰세요.', '12/17 ÷ 3 = □/17', 4, { difficulty: 0.14 }),
          bl('20/21 ÷ 4 = □/21에서 □에 알맞은 수를 쓰세요.', '20/21 ÷ 4 = □/21', 5, { difficulty: 0.18 }),
          bl('18/19 ÷ 6 = □/19에서 □에 알맞은 수를 쓰세요.', '18/19 ÷ 6 = □/19', 3, { difficulty: 0.2, reveal: 'after-check' }),
        ]),
    ],
    wrap: [
      '"□/15가 14/15 ÷ 7의 몫일 때 □는 어떻게 구하나요? 검산은 어떻게 할까요?" 분자를 나누는 수로 나누고, 몫에 나누는 수를 곱하면 처음 분자가 되는지 확인한다는 말을 이끌어 낸다. 출구 2번을 틀린 학생은 점의 눈금을 잘못 센 것이므로 다음 시간에 0에서부터 칸을 세게 한다.',
      [
        { type: 'choice', prompt: '8/11 ÷ 2의 몫은 어느 것인가요?', options: ['4/11', '8/13', '16/11'], answer: 0, difficulty: 0.12, explain: '분자 8을 2로 나누면 4이고 분모는 그대로 11이라서 4/11이에요.' },
        { type: 'tool', tool: 'numberline', options: NLO(1, 7), prompt: '끈 6/7 m를 3도막으로 똑같이 잘랐어요. 한 도막의 길이를 수직선에 점으로 나타내세요.', target: { points: ['2/7'] }, difficulty: 0.15 },
        { type: 'choice', prompt: '10/17 ÷ 5의 몫에서 분자는 얼마인가요?', options: ['2', '5', '10'], answer: 0, difficulty: 0.12, explain: '분자 10을 5로 나누면 2이므로 몫은 2/17이에요.' },
      ],
    ],
    ws: {
      title: '분자를 나누어 구한 몫',
      items: [
        { type: 'figure', wide: true, prompt: '수직선의 점이 (분수) ÷ (자연수)의 몫이에요. 점이 나타내는 수를 분수로 쓰세요.', tool: 'numberline', options: { mode: 'read', min: 0, max: 1, step: 1, format: 'frac', labels: 'major' }, figures: [
          { options: { sub: 10, den: 10, marks: [0.3] }, caption: '9/10 ÷ 3 = ___' }, { options: { sub: 5, den: 5, marks: [0.4] }, caption: '4/5 ÷ 2 = ___' }, { options: { sub: 8, den: 8, marks: [0.25] }, caption: '4/8 ÷ 2 = ___' }], answer: '3/10, 2/5, 2/8' },
        { type: 'table', prompt: '분자를 나누어 몫을 구하세요.', columns: ['식', '분자 ÷ 나누는 수', '몫'], cells: [['9/14 ÷ 3', '9 ÷ 3', ''], ['15/16 ÷ 5', '', ''], ['16/21 ÷ 8', '', '']], answer: '3/14, 15 ÷ 5 = 3 → 3/16, 16 ÷ 8 = 2 → 2/21' },
        { type: 'choice', prompt: '계산이 맞는 식에 ○ 하세요.', options: ['12/13 ÷ 4 = 3/13', '12/13 ÷ 4 = 3/52', '12/13 ÷ 4 = 12/9'], answer: '12/13 ÷ 4 = 3/13' },
        { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '18/19 ÷ 6 = ______/19, 20/23 ÷ 5 = ______/23', answer: '3, 4' },
        { type: 'short', prompt: '16/21 ÷ 8의 몫이 2/21인지 곱셈으로 검산해 보세요.' },
      ],
      easy: {
        note: '분모는 그대로 두고 분자만 나누는 수로 나누어요.',
        items: [
          { type: 'figure', wide: true, prompt: '수직선의 점이 몫이에요. 점이 나타내는 수를 분수로 쓰세요.', tool: 'numberline', options: { mode: 'read', min: 0, max: 1, step: 1, format: 'frac', labels: 'all' }, figures: [
            { options: { sub: 5, den: 5, marks: [0.4] }, caption: '4/5 ÷ 2 = ___' }, { options: { sub: 10, den: 10, marks: [0.3] }, caption: '6/10 ÷ 2 = ___' }], answer: '2/5, 3/10' },
          { type: 'table', prompt: '분자를 나누어 몫을 구하세요.', columns: ['식', '몫'], cells: [['6/7 ÷ 3', ''], ['8/9 ÷ 4', '']], answer: '2/7, 2/9' },
          { type: 'choice', prompt: '9/10 ÷ 3의 몫에 ○ 하세요.', options: ['3/10', '9/7'], answer: '3/10' },
          { type: 'short', prompt: '12/13 ÷ 4에서 분자 12를 4로 나눈 수를 쓰세요.', answer: '3' },
        ],
      },
    },
    diff: {
      easy: '쉬움은 수직선의 눈금마다 숫자가 적혀 있고 점을 놓으면 수가 바로 보여요.',
      base: '분자를 나누어 몫을 구하고 수직선에 놓으며 계산이 맞는지 살펴요.',
      challenge: '도전은 수직선에 처음과 끝 수만 보이고 계산 결과를 곱셈으로 검산해 설명해요.',
    },
    notes: '자주 보이는 어려움: ① 분모에 나누는 수를 곱해 틀린 식을 맞다고 한다(12/13 ÷ 4 = 3/52) → 칸 크기(분모)가 바뀌지 않는다는 것을 수직선의 눈금 칸 수로 확인한다. ② 나눗셈과 곱셈을 혼동해 분자를 곱한다 → 몫에 나누는 수를 곱해 처음 분자가 되는지 검산하게 한다. ③ 점을 처음 분수 자리에 그대로 놓는다 → 한 도막이 전체보다 짧다는 것을 어림해 보게 한다. 나누어떨어지지 않을 때는 9차시에서 배운다.',
  }));

  // ───────────────────────────── 9차시 (core · 분자가 나누어떨어지지 않는 경우) ─────────────────────────────
  lessons.push(LES(9, ['[6수01-11]'], {
    title: '3/5 L를 2명이 나누면? 분모에 나누는 수 곱하기',
    objective: '분자가 나누는 수로 나누어떨어지지 않는 (분수) ÷ (자연수)를 크기가 같은 분수로 바꾸어 나누거나 분모에 나누는 수를 곱해 구할 수 있다.',
    ill: 'a paper juice bottle with three fifths filled being poured equally into two cups, pastel layers',
    scene: '3/5 L를 2명이',
    intro: [
      '"주스가 3/5 L 있어요. 2명이 똑같이 나누어 마시려는데, 3을 2로 나눌 수 없네요. 어떻게 하면 좋을까요?" 시연 단추로 5칸 띠를 10칸으로 다시 나누면 색칠한 3칸이 6칸이 되어 2묶음으로 똑같이 나뉘는 모습을 보여 준다. "칸을 더 잘게 나누면 분수의 크기가 변할까요?" 하고 3/5 = 6/10임을 확인한다. 3/5 ÷ 2를 3/5 × 2처럼 곱하는 학생에게는 한 명 몫이 더 많아지는지 물어 본다.',
      '3/5 L를 2명이 똑같이 나누려면 3을 2로 나눌 수 없을 때 어떻게 해야 할지 이야기해 봐요.',
      { tool: 'fracstrips', options: { top: [3, 5] }, sequence: [{ num: 6, den: 10 }] },
    ],
    acts: [
      ACT('a1', '활동 1. 칸을 잘게 나누어 같은 크기 만들기', 9, 'fracstrips',
        '"3/5를 2명이 똑같이 나누려면 칸을 몇 칸으로 다시 나누면 좋을까요?" 색칠한 칸 수가 2의 배수가 되도록 분모와 분자에 같은 수 2를 곱한다는 것을 짚는다. 분모만 10으로 바꾸고 분자는 3 그대로 두는 학생에게는 색칠한 길이가 위 띠와 같은지 겹쳐 보게 한다. 색칠한 끝이 맞으면 몇 칸이 색칠되었는지 말하게 한다.',
        '위 띠와 같은 길이가 되도록 아래 띠를 잘게 나누어 색칠해요.', { easy: { showMarks: true }, base: {}, challenge: { noCuts: true } }, [
          eq('3/5 L를 2명이 나누려고 해요. 먼저 아래 띠를 10칸으로 나누어 위 띠와 같은 길이로 색칠해 보세요.', [3, 5], 10, {}, { difficulty: 0.1,
            predict: { q: '3/5를 10칸 띠로 바꾸면 색칠한 칸은 몇 칸일까요?', options: ['3칸', '6칸', '5칸'], answer: 1 }, conclude: '분모와 분자에 같은 수 2를 곱해도 크기가 같아서 3/5 = 6/10이에요. 6칸은 2명이 나누기 쉬워요.' }),
          eq('3/4 m를 2명이 나누려고 해요. 먼저 아래 띠를 8칸으로 나누어 위 띠와 같은 길이로 색칠해 보세요.', [3, 4], 8, {}, { difficulty: 0.13 }),
          eq('5/6 kg을 2봉지에 나누려고 해요. 먼저 아래 띠를 12칸으로 나누어 위 띠와 같은 길이로 색칠해 보세요.', [5, 6], 12, {}, { difficulty: 0.17, reveal: 'after-check' }),
          eq('1/3 m를 2도막으로 자르려고 해요. 먼저 아래 띠를 6칸으로 나누어 위 띠와 같은 길이로 색칠해 보세요.', [1, 3], 6, {}, { difficulty: 0.15 }),
        ]),
      ACT('a2', '활동 2. 잘게 나눈 띠에서 한 명 몫 색칠하기', 9, 'fraction',
        '"6/10을 2명이 똑같이 나누면 한 명은 10분의 몇일까요?" 색칠한 6칸을 2묶음으로 나누어 한 묶음 3칸이라는 것을 확인하게 한다. 한 명 몫을 6칸 그대로 색칠하는 학생에게는 "2명이 나눈 한 명 몫이에요. 묶음이 몇 개로 나뉘었지요?"라고 묻는다. 식 3/5 ÷ 2 = 3/10을 함께 읽어 본다.',
        '잘게 나눈 띠에서 색칠한 칸을 똑같이 나누어 한 명 몫을 색칠해요.', LV_FR, [
          st('주스 3/5 L를 2명이 똑같이 나누어 마셔요. 1 L를 10칸으로 나눈 띠에 한 명이 마시는 양을 색칠해 보세요.', 10, 3, { max: 12 }, { difficulty: 0.12 }),
          st('끈 3/4 m를 2도막으로 똑같이 잘라요. 1 m를 8칸으로 나눈 띠에 한 도막의 길이를 색칠해 보세요.', 8, 3, {}, { difficulty: 0.15 }),
          st('밀가루 5/6 kg을 2봉지에 똑같이 나누어 담아요. 1 kg을 12칸으로 나눈 띠에 한 봉지의 양을 색칠해 보세요.', 12, 5, {}, { difficulty: 0.2, reveal: 'after-check' }),
          st('리본 1/3 m를 2명이 똑같이 나누어요. 1 m를 6칸으로 나눈 띠에 한 명 몫을 색칠해 보세요.', 6, 1, {}, { difficulty: 0.17 }),
        ]),
      ACT('a3', '활동 3. 계산 순서와 방법 설명하기', 9, 'mindmap',
        '"3/5 ÷ 2를 계산하는 순서대로 카드를 놓아 볼까요? 분모에 2를 곱해도 같은 답이 나올까요?" 잘게 나누는 방법과 분모에 나누는 수를 곱하는 방법이 같은 결과임을 확인하게 한다. 분자에도 2를 곱해 6/10으로 쓰고 끝내는 학생에게는 한 명 몫이 아직 나누어지지 않았음을 짚는다. 순서가 맞으면 두 번째 방법으로도 설명하게 한다.',
        '3/5 ÷ 2의 계산 순서를 놓고, 바른 설명을 골라요.', MM('order', '계산 순서'), [
          mo('3/5 ÷ 2를 잘게 나누어 계산하는 순서대로 카드를 놓아 보세요.', [['o1', '3/5를 분모가 10인 6/10으로 바꾸어요'], ['o2', '6/10를 2묶음으로 똑같이 나누어요'], ['o3', '한 묶음은 10분의 3이에요'], ['o4', '3/5 ÷ 2 = 3/10이에요']], ['o1', 'o2', 'o3', 'o4'], { difficulty: 0.12 }),
          mo('3/4 ÷ 2를 분모에 나누는 수를 곱해 계산하는 순서대로 카드를 놓아 보세요.', [['p1', '분자 3은 그대로 써요'], ['p2', '분모 4에 나누는 수 2를 곱해 8을 구해요'], ['p3', '3/8이 한 명 몫이에요']], ['p1', 'p2', 'p3'], { difficulty: 0.16 }),
          mp('분자가 나누어떨어지지 않는 (분수) ÷ (자연수)의 계산 설명 가운데 바른 것을 모두 골라 보세요.', '바른 설명', [['q1', '분모에 나누는 수를 곱하고 분자는 그대로 써요'], ['q2', '분자와 분모를 모두 나누는 수로 나누어요'], ['q3', '크기가 같은 분수로 바꾸어 분자를 나눌 수 있어요'], ['q4', '분자에 나누는 수를 곱해요']], ['q1', 'q3'], { difficulty: 0.2 }),
        ]),
    ],
    wrap: [
      '"3/7 ÷ 2는 분자 3을 2로 나눌 수 없어요. 어떻게 계산하나요?" 분모 7에 2를 곱해 3/14로 쓰거나 6/14로 바꾸어 나눈다는 말을 이끌어 낸다. 출구 1번을 틀린 학생은 분모에 나누는 수를 더하거나 분자에 곱한 것이므로 다음 시간에 띠 그림으로 한 칸이 더 작아진다는 것을 확인하게 한다.',
      [
        { type: 'choice', prompt: '3/7 ÷ 2의 몫은 어느 것인가요?', options: ['3/14', '3/9', '6/7'], answer: 0, difficulty: 0.12, explain: '분자 3은 그대로 두고 분모 7에 2를 곱하면 3/14예요. 6/14로 바꾸어 나눈 값과 같아요.' },
        { type: 'tool', tool: 'fraction', options: { shape: 'strip', min: 2, max: 12, startN: 2 }, prompt: '리본 1/4 m를 2명이 똑같이 나누어요. 1 m를 8칸으로 나눈 띠에 한 명 몫을 색칠하세요.', target: { den: 8, num: 1 }, difficulty: 0.15 },
        { type: 'choice', prompt: '분자가 나누는 수로 나누어떨어지지 않을 때 (분수) ÷ (자연수)는 분모에 무엇을 하나요?', options: ['나누는 수를 곱해요', '나누는 수를 더해요', '나누는 수로 나누어요'], answer: 0, difficulty: 0.15, explain: '한 칸을 나누는 수만큼 더 잘게 나누는 셈이라 분모에 나누는 수를 곱해요.' },
      ],
    ],
    ws: {
      title: '나누어떨어지지 않는 (분수) ÷ (자연수)',
      items: [
        { type: 'figure', prompt: '위 띠와 크기가 같도록 색칠한 그림이에요. 빈칸에 알맞은 수를 쓰세요.', tool: 'fracstrips', options: {}, figures: [
          { options: { top: [3, 5], start: { num: 6, den: 10 } }, caption: '3/5 = □/10' }, { options: { top: [3, 4], start: { num: 6, den: 8 } }, caption: '3/4 = □/8' }], answer: '3/5 = 6/10, 3/4 = 6/8' },
        { type: 'table', prompt: '분모에 나누는 수를 곱해 몫을 구하세요.', columns: ['식', '분모 × 나누는 수', '몫'], cells: [['3/5 ÷ 2', '5 × 2 = 10', ''], ['3/7 ÷ 2', '', ''], ['5/8 ÷ 3', '', '']], answer: '3/10, 7 × 2 = 14 → 3/14, 8 × 3 = 24 → 5/24' },
        { type: 'choice', prompt: '3/4 ÷ 2의 몫으로 바른 것에 ○ 하세요.', options: ['3/8', '3/6', '6/4'], answer: '3/8' },
        { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '5/6 ÷ 2 = 5/(6 × ______) = 5/______', answer: '2, 12' },
        { type: 'short', prompt: '3/5 ÷ 2를 계산할 때 3/5를 6/10으로 바꾸는 까닭을 써 보세요.' },
      ],
      easy: {
        note: '분자를 나눌 수 없으면 띠를 더 잘게 나누어 색칠한 칸 수를 늘려 봐요.',
        items: [
          { type: 'figure', prompt: '위 띠와 크기가 같도록 색칠한 그림이에요. 빈칸에 알맞은 수를 쓰세요.', tool: 'fracstrips', options: { showMarks: true }, figures: [
            { options: { top: [1, 3], start: { num: 2, den: 6 } }, caption: '1/3 = □/6' }], answer: '1/3 = 2/6' },
          { type: 'table', prompt: '분모에 나누는 수를 곱해 몫을 구하세요.', columns: ['식', '분모 × 나누는 수', '몫'], cells: [['3/5 ÷ 2', '5 × 2 = 10', ''], ['1/4 ÷ 2', '', '']], answer: '3/10, 4 × 2 = 8 → 1/8' },
          { type: 'choice', prompt: '1/3 ÷ 2의 몫에 ○ 하세요.', options: ['1/6', '1/5'], answer: '1/6' },
          { type: 'short', prompt: '3/4 ÷ 2에서 분모 4에 곱하는 수는 무엇인가요?', answer: '2' },
        ],
      },
    },
    diff: {
      easy: '쉬움은 위 띠의 금이 아래 띠까지 이어져 같은 자리에서 끝나는 칸을 찾기 쉬워요.',
      base: '크기가 같은 분수로 바꾸어 나누고, 분모에 나누는 수를 곱하는 방법도 말해요.',
      challenge: '도전은 위 띠의 금을 숨기고 두 방법이 같은 결과가 되는 까닭을 설명해요.',
    },
    notes: '자주 보이는 어려움: ① 분자에 나누는 수를 곱해 6/5로 쓴다(3/5 ÷ 2) → 한 명 몫이 처음 양보다 많아지는지 물어 틀림을 스스로 확인하게 한다. ② 분모에 나누는 수를 더해 3/7이 되게 한다(3/5 ÷ 2 = 3/7) → 한 칸을 2조각으로 나누면 칸 수가 2배가 되어 곱한다고 띠로 보여 준다. ③ 6/10에서 멈추고 한 명 몫을 구하지 않는다 → 6칸을 2묶음으로 나누어 한 묶음을 찾게 한다. 두 방법이 같은 답이 됨을 10차시에서 이어서 정리한다.',
  }));

  // ───────────────────────────── 10차시 (practice · 계산 방법 고르기) ─────────────────────────────
  lessons.push(LES(10, ['[6수01-11]'], {
    title: '분자를 나눌지 분모에 곱할지 골라 계산하기',
    objective: '(분수) ÷ (자연수)에서 분자가 나누어떨어지는지 살펴 알맞은 계산 방법을 고르고, 몫을 수직선에 나타내거나 □ 안에 쓸 수 있다.',
    ill: 'a paper balance of two paper choice cards labelled with a knife and a multiplication sign, pastel layers',
    scene: '어느 방법이 편할까?',
    intro: [
      '"8/9 ÷ 4와 3/7 ÷ 2는 계산 방법이 같을까요?" 8은 4로 나누어떨어지니 분자를 나누고, 3은 2로 나누어떨어지지 않으니 분모에 2를 곱한다는 것을 비교해 보게 한다. 8/9 ÷ 4를 분모에 곱해 8/36으로 계산한 학생에게는 8/36을 약분하면 2/9가 되어 같음을 보여 주되, 분자를 나누면 더 간단하다는 것을 짚는다. 두 방법을 선택하는 기준(분자가 나누어떨어지는가)을 말로 정리한다.',
      '두 가지 계산 방법 가운데 어떤 식에 어느 방법이 편할지 이야기해 봐요.',
      { tool: 'numberline', options: NLO(1, 6), sequence: [{ points: [0.1667] }] },
    ],
    acts: [
      ACT('a1', '활동 1. 분모에 곱한 몫을 수직선에 놓기', 9, 'numberline',
        '"1/2 ÷ 3은 0과 1 사이 어디쯤일까요? 반을 3도막으로 나눈 한 도막은 전체의 몇 분의 몇일까요?" 분모에 3을 곱해 1/6이 됨을 눈금으로 확인하게 한다. 1/2 ÷ 3을 1/5에 놓는 학생에게는 분모에 더하지 않고 곱하는 까닭을 반 판 그림으로 묻는다. 점을 놓은 뒤 처음 분수와 견주어 보게 한다.',
        '분모에 나누는 수를 곱해 몫을 구하고 수직선에 점으로 나타내요.', LV_NL, [
          nlPlace('피자 반 판(1/2)을 3명이 똑같이 나누어요. 한 명 몫을 수직선에 점으로 나타내 보세요.', NLO(1, 6), ['1/6'], { difficulty: 0.1 }),
          nlPlace('색종이 1/4장을 2명이 똑같이 나누어요. 한 명 몫을 수직선에 점으로 나타내 보세요.', NLO(1, 8), ['1/8'], { difficulty: 0.14 }),
          nlPlace('주스 1/3 L를 4컵에 똑같이 나누어 따라요. 한 컵의 양을 수직선에 점으로 나타내 보세요.', NLO(1, 12), ['1/12'], { difficulty: 0.18, reveal: 'after-check' }),
          nlPlace('끈 1/2 m를 4명이 나눈 몫(가)과 3/4 m를 2명이 나눈 몫(나)을 수직선에 점으로 나타내 보세요.', NLO(1, 8), ['1/8', '3/8'], { difficulty: 0.2 }),
        ]),
      ACT('a2', '활동 2. 분모에 곱할 수 구하기', 9, 'pattern',
        '"3/4 ÷ 2는 분자 3은 그대로이고 분모에는 4 × 2를 해요. □에 알맞은 수는 무엇일까요?" 분모에 나누는 수를 곱한 값이 □에 온다는 것을 확인한다. 5/6 ÷ 2 = 5/□에서 6 + 2 = 8을 쓰는 학생에게는 "한 칸이 몇 배로 잘게 나뉘었지요?"라고 묻는다. 쓴 뒤 그림으로 한 칸이 더 작아졌는지 확인하게 한다.',
        '분모에 나누는 수를 곱해 □ 안에 알맞은 수를 써요.', LV_NONE, [
          bl('3/4 ÷ 2 = 3/□에서 □에 알맞은 수를 쓰세요.', '3/4 ÷ 2 = 3/□', 8, { difficulty: 0.1 }),
          bl('5/6 ÷ 2 = 5/□에서 □에 알맞은 수를 쓰세요.', '5/6 ÷ 2 = 5/□', 12, { difficulty: 0.14 }),
          bl('2/5 ÷ 3 = 2/□에서 □에 알맞은 수를 쓰세요.', '2/5 ÷ 3 = 2/□', 15, { difficulty: 0.18 }),
          bl('4/7 ÷ 3 = 4/□에서 □에 알맞은 수를 쓰세요.', '4/7 ÷ 3 = 4/□', 21, { difficulty: 0.2, reveal: 'after-check' }),
        ]),
      ACT('a3', '활동 3. 계산 방법에 따라 식 나누기', 9, 'mindmap',
        '"식을 보고 분자를 나눌 수 있는지 먼저 살펴볼까요? 12를 4로 나누면 나누어떨어지나요?" 분자를 나누는 수로 나누어 보고 나누어떨어지면 분자를 나누고 아니면 분모에 곱한다고 말하게 한다. 5/8 ÷ 3을 분자를 나누는 칸에 넣는 학생에게는 5 ÷ 3의 나머지가 있는지 물어 본다. 나눈 뒤 칸마다 식 하나를 골라 몫을 구하게 한다.',
        '식을 분자를 나누는 방법과 분모에 곱하는 방법으로 나누어요.', MM('sort', '계산 방법'), [
          ms('식을 알맞은 계산 방법 칸으로 나누어 보세요.', ['분자를 나누어요', '분모에 곱해요'], [['s1', '12/19 ÷ 4'], ['s2', '5/8 ÷ 3'], ['s3', '14/17 ÷ 7'], ['s4', '3/10 ÷ 2'], ['s5', '16/21 ÷ 8'], ['s6', '7/9 ÷ 5']], { '분자를 나누어요': ['s1', 's3', 's5'], '분모에 곱해요': ['s2', 's4', 's6'] }, { difficulty: 0.14 }),
          ms('식을 알맞은 계산 방법 칸으로 나누어 보세요.', ['분자를 나누어요', '분모에 곱해요'], [['t1', '9/20 ÷ 3'], ['t2', '11/12 ÷ 2'], ['t3', '15/22 ÷ 5'], ['t4', '8/15 ÷ 3']], { '분자를 나누어요': ['t1', 't3'], '분모에 곱해요': ['t2', 't4'] }, { difficulty: 0.18 }),
          mp('분모에 나누는 수를 곱해서 계산해야 하는 식을 모두 골라 보세요.', '분모에 곱하기', [['u1', '7/12 ÷ 3'], ['u2', '9/16 ÷ 3'], ['u3', '10/11 ÷ 4'], ['u4', '8/15 ÷ 4']], ['u1', 'u3'], { difficulty: 0.22 }),
        ]),
    ],
    wrap: [
      '"식을 보고 어떤 방법으로 계산할지 어떻게 정하나요?" 분자가 나누는 수의 배수이면 분자를 나누고 아니면 분모에 곱한다는 말을 이끌어 낸다. 출구 2번을 틀린 학생은 분모에 나누는 수를 더한 것이므로 다음 시간에 띠 그림을 다시 그려 보게 한다.',
      [
        { type: 'choice', prompt: '7/8 ÷ 2의 몫은 어느 것인가요?', options: ['7/16', '7/4', '7/10'], answer: 0, difficulty: 0.12, explain: '분자 7은 2로 나누어떨어지지 않아 분모 8에 2를 곱하면 7/16이에요.' },
        { type: 'tool', tool: 'pattern', options: { seq: [null], names: ['4/5 ÷ 3 = 4/□'], input: 'number' }, prompt: '4/5 ÷ 3 = 4/□에서 □에 알맞은 수를 쓰세요.', target: { fill: [15] }, difficulty: 0.15 },
        { type: 'choice', prompt: '6/7 ÷ 3은 분자를 나누는 방법으로 계산할 수 있나요?', options: ['있어요', '없어요'], answer: 0, difficulty: 0.12, explain: '분자 6은 3으로 나누어떨어져 6 ÷ 3 = 2이므로 몫은 2/7이에요.' },
      ],
    ],
    ws: {
      title: '계산 방법 고르기',
      items: [
        { type: 'figure', wide: true, prompt: '수직선의 점이 (분수) ÷ (자연수)의 몫이에요. 점이 나타내는 수를 분수로 쓰세요.', tool: 'numberline', options: { mode: 'read', min: 0, max: 1, step: 1, format: 'frac', labels: 'major' }, figures: [
          { options: { sub: 6, den: 6, marks: [0.1667] }, caption: '1/2 ÷ 3 = ___' }, { options: { sub: 8, den: 8, marks: [0.375] }, caption: '3/4 ÷ 2 = ___' }, { options: { sub: 8, den: 8, marks: [0.125] }, caption: '1/4 ÷ 2 = ___' }], answer: '1/6, 3/8, 1/8' },
        { type: 'table', prompt: '계산 방법에 ○ 하고 몫을 쓰세요.', columns: ['식', '계산 방법', '몫'], cells: [['8/9 ÷ 4', '분자를 나누어요 / 분모에 곱해요', ''], ['3/7 ÷ 2', '분자를 나누어요 / 분모에 곱해요', ''], ['10/13 ÷ 5', '분자를 나누어요 / 분모에 곱해요', '']], answer: '분자를 나누어요·2/9, 분모에 곱해요·3/14, 분자를 나누어요·2/13' },
        { type: 'choice', prompt: '분모에 나누는 수를 곱해서 계산해야 하는 식에 ○ 하세요.', options: ['12/19 ÷ 4', '5/8 ÷ 3', '14/17 ÷ 7'], answer: '5/8 ÷ 3' },
        { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '2/5 ÷ 3 = 2/______, 5/9 ÷ 2 = 5/______', answer: '15, 18' },
        { type: 'short', prompt: '16/21 ÷ 8은 분자를 나누고, 5/8 ÷ 3은 분모에 곱하는 까닭을 써 보세요.' },
      ],
      easy: {
        note: '분자가 나누는 수의 배수이면 분자를 나누고 아니면 분모에 곱해요.',
        items: [
          { type: 'figure', wide: true, prompt: '수직선의 점이 몫이에요. 점이 나타내는 수를 분수로 쓰세요.', tool: 'numberline', options: { mode: 'read', min: 0, max: 1, step: 1, format: 'frac', labels: 'all' }, figures: [
            { options: { sub: 8, den: 8, marks: [0.125] }, caption: '1/4 ÷ 2 = ___' }, { options: { sub: 4, den: 4, marks: [0.25] }, caption: '1/2 ÷ 2 = ___' }], answer: '1/8, 1/4' },
          { type: 'table', prompt: '분모에 나누는 수를 곱해 몫을 구하세요.', columns: ['식', '몫'], cells: [['1/3 ÷ 2', ''], ['3/4 ÷ 2', '']], answer: '1/6, 3/8' },
          { type: 'choice', prompt: '8/9 ÷ 4는 분자를 나눌 수 있나요?', options: ['있어요', '없어요'], answer: '있어요' },
          { type: 'short', prompt: '3/5 ÷ 2의 분모에 곱하는 수는 무엇인가요?', answer: '2' },
        ],
      },
    },
    diff: {
      easy: '쉬움은 수직선의 점을 놓으면 그 자리의 수가 바로 보이고 눈금마다 숫자가 적혀 있어요.',
      base: '분자가 나누어떨어지는지 살펴 계산 방법을 고르고 몫을 구해요.',
      challenge: '도전은 눈금 숫자를 숨기고 두 방법의 결과가 같음을 약분으로 확인하며 설명해요.',
    },
    notes: '자주 보이는 어려움: ① 분자가 나누어떨어지는데도 분모에 곱해 약분하지 못한 채 답을 쓴다(8/36) → 분자를 나누는 방법이 더 간단함을 보여 주고 약분하면 같은 값임을 확인한다. ② 분자가 나누어떨어지지 않는데 분자를 나누어 소수나 이상한 수를 쓴다 → 먼저 분자를 나누는 수로 나누어 떨어지는지 어림하게 한다. ③ 분모에 더한다(5/6 ÷ 2 = 5/8) → 한 칸을 더 잘게 나누는 모습을 그려 곱해야 함을 확인한다. 이야기 문제는 11차시에서 푼다.',
  }));

  // ───────────────────────────── 11차시 (wrap · 이야기 문제와 단원 정리) ─────────────────────────────
  lessons.push(LES(11, ['[6수01-11]'], {
    title: '(분수) ÷ (자연수) 이야기 문제 풀고 단원 정리하기',
    objective: '(분수) ÷ (자연수) 이야기 문제의 식을 세워 몫을 구하고, 몫이 처음 분수보다 작은 까닭과 두 가지 계산 방법을 설명할 수 있다.',
    ill: 'a rabbit pouring juice from a bottle with a fraction label into several small cups equally, pastel layers',
    scene: '이야기로 풀어 보는 나눗셈',
    intro: [
      '"철사 3/4 m를 3도막으로 똑같이 자르면 한 도막은 몇 m일까요?" 식 3/4 ÷ 3을 세우고 분자를 나누어 3 ÷ 3 = 1이므로 1/4 m임을 확인한다. 답에 단위(m)를 붙이는 것을 짚는다. "이번 단원에서 배운 두 가지 방법을 말해 볼까요?" 하고 단원 전체를 되돌아본다. 단위 없이 숫자만 쓰는 학생과 처음 분수보다 큰 값을 쓰는 학생이 있는지 살핀다.',
      '이번 단원에서 배운 것을 떠올리고, 오늘 이야기 문제를 어떻게 풀지 짝과 말해 봐요.',
      { tool: 'fraction', options: { shape: 'strip', min: 2, max: 12, startN: 2 }, sequence: [{ n: 4, colored: [0] }] },
    ],
    acts: [
      ACT('a1', '활동 1. 이야기와 한 명 몫 이어 보기', 9, 'mindmap',
        '"이야기마다 나누어지는 양과 나누는 수를 찾아 식을 세우고 몫을 구해 볼까요? 단위도 함께 써요." 식을 세운 뒤 분자가 나누어떨어지는지 살펴 방법을 정하게 한다. 6/7 m를 3도막으로 자른 몫을 6/21 m로 고른 학생에게는 약분하면 2/7이 되는지 확인하게 한다. 이은 뒤 카드 한 장을 골라 풀이를 말하게 한다.',
        '이야기에 알맞은 한 도막(한 명)의 양을 이어요. 단위도 함께 살펴요.', MM('match', '한 명 몫'), [
          mt('이야기와 한 도막(한 명)의 양을 이어 보세요.', [['y1', '철사 6/7 m를 3도막으로 똑같이'], ['y2', '주스 5/6 L를 2병에 똑같이'], ['y3', '쌀 4/5 kg을 2봉지에 똑같이']], [['z1', '2/7 m'], ['z2', '5/12 L'], ['z3', '2/5 kg'], ['z4', '6/4 m']], { y1: 'z1', y2: 'z2', y3: 'z3' }, { difficulty: 0.14 }),
          mt('이야기와 한 도막(한 명)의 양을 이어 보세요.', [['v1', '우유 3/8 L를 2컵에 똑같이'], ['v2', '모래 9/10 kg을 3통에 똑같이'], ['v3', '물 4/5 L를 4병에 똑같이']], [['w1', '3/16 L'], ['w2', '3/10 kg'], ['w3', '1/5 L'], ['w4', '3/4 L']], { v1: 'w1', v2: 'w2', v3: 'w3' }, { difficulty: 0.2 }),
          mp('"철사 3/4 m를 3도막으로 똑같이 잘랐어요"에 알맞은 식과 한 도막의 길이를 모두 골라 보세요.', '맞는 것', [['p1', '3/4 ÷ 3'], ['p2', '3 ÷ 3/4'], ['p3', '1/4 m'], ['p4', '3/4 m']], ['p1', 'p3'], { difficulty: 0.18 }),
        ]),
      ACT('a2', '활동 2. 띠에서 한 명 몫 색칠해 확인하기', 9, 'fraction',
        '"4/9 kg을 2봉지에 나누어요. 9칸 띠에서 색칠한 4칸을 2묶음으로 나누면 한 봉지는 몇 칸일까요?" 식으로 구한 몫이 띠 그림과 일치하는지 확인하게 한다. 한 봉지를 4칸 그대로 색칠하는 학생에게는 묶음이 2개로 나뉘었는지 물어 본다. 색칠한 뒤 식과 그림이 같은 값임을 말하게 한다.',
        '식으로 구한 한 명 몫을 띠 그림에 색칠해 확인해요.', LV_FR, [
          st('찰흙 4/9 kg을 2모둠이 똑같이 나누어요. 1 kg을 9칸으로 나눈 띠에 한 모둠의 양을 색칠해 보세요.', 9, 2, {}, { difficulty: 0.12 }),
          st('색 테이프 1/6 m를 2명이 똑같이 나누어요. 1 m를 12칸으로 나눈 띠에 한 명 몫을 색칠해 보세요.', 12, 1, {}, { difficulty: 0.16 }),
          st('끈 2/3 m를 2도막으로 똑같이 잘라요. 1 m를 3칸으로 나눈 띠에 한 도막의 길이를 색칠해 보세요.', 3, 1, { min: 2, max: 6 }, { difficulty: 0.14 }),
          st('보리 9/11 kg을 3통에 똑같이 나누어 담아요. 1 kg을 11칸으로 나눈 띠에 한 통의 양을 색칠해 보세요.', 11, 3, {}, { difficulty: 0.2, reveal: 'after-check' }),
        ]),
      ACT('a3', '활동 3. 단원 정리: 맞는 말 고르고 방법 나누기', 9, 'mindmap',
        '"(분수) ÷ (자연수)의 몫은 처음 분수보다 크기가 어떻게 되나요? 이야기에서도 그런가요?" 똑같이 나누면 한 몫은 전체보다 적다는 것을 이야기와 연결해 말하게 한다. 5/6 ÷ 3 = 5/2처럼 틀린 풀이를 맞다고 하는 학생에게는 분모를 3으로 나누지 않고 곱하는 까닭을 묻는다. 마지막으로 이야기를 두 방법으로 분류하게 한다.',
        '이번 단원에서 배운 것 가운데 맞는 말을 고르고 이야기를 계산 방법으로 나누어요.', MM('pick', '맞는 말'), [
          mp('(분수) ÷ (자연수)에 대한 설명 가운데 맞는 것을 모두 골라 보세요.', '맞는 설명', [['a1', '분자가 나누는 수로 나누어떨어지면 분자를 나누어요'], ['a2', '분모에 나누는 수를 곱해도 돼요'], ['a3', '분자와 분모를 모두 나누는 수로 나누어요'], ['a4', '몫은 처음 분수보다 작아요']], ['a1', 'a2', 'a4'], { difficulty: 0.15 }),
          ms('이야기를 알맞은 계산 방법 칸으로 나누어 보세요.', ['분자를 나누어요', '분모에 곱해요'], [['b1', '물 6/7 L를 3병에'], ['b2', '끈 2/5 m를 3도막으로'], ['b3', '쌀 8/9 kg을 4봉지에'], ['b4', '주스 3/10 L를 2잔에']], { '분자를 나누어요': ['b1', 'b3'], '분모에 곱해요': ['b2', 'b4'] }, { difficulty: 0.2 }),
          mp('계산이 잘못된 식을 모두 골라 보세요.', '잘못된 식', [['c1', '4/5 ÷ 2 = 2/5'], ['c2', '5/6 ÷ 3 = 5/2'], ['c3', '3/7 ÷ 2 = 3/14'], ['c4', '2/9 ÷ 4 = 1/9']], ['c2', 'c4'], { difficulty: 0.22 }),
        ]),
    ],
    wrap: [
      '"이번 단원에서 (분수) ÷ (자연수)를 어떻게 계산했나요? 어느 방법을 어느 때 쓰나요?" 분자가 나누어떨어지면 분자를 나누고 아니면 분모에 곱한다는 말로 정리하게 한다. 출구 1번을 틀린 학생은 식은 세웠으나 분자와 분모를 바꾼 것이므로 단원 정리 활동지의 1번을 다시 풀어 보게 한다.',
      [
        { type: 'choice', prompt: '철사 3/4 m를 3도막으로 똑같이 자르면 한 도막은 몇 m인가요?', options: ['1/4 m', '3/4 m', '1 m'], answer: 0, difficulty: 0.12, explain: '3/4 ÷ 3에서 분자 3을 3으로 나누면 1이라서 한 도막은 1/4 m예요.' },
        { type: 'tool', tool: 'fraction', options: { shape: 'strip', min: 2, max: 12, startN: 2 }, prompt: '밀가루 6/11 kg을 3봉지에 똑같이 나누어 담아요. 1 kg을 11칸으로 나눈 띠에 한 봉지의 양을 색칠하세요.', target: { den: 11, num: 2 }, difficulty: 0.15 },
        { type: 'choice', prompt: '(분수) ÷ (자연수)의 몫은 처음 분수보다 어떤가요? (나누는 수는 2 이상)', options: ['더 작아요', '같아요', '더 커요'], answer: 0, difficulty: 0.12, explain: '똑같이 나눈 한 몫은 전체보다 적으므로 몫이 처음 분수보다 작아요.' },
      ],
    ],
    ws: {
      title: '단원 정리 — (분수) ÷ (자연수)',
      items: [
        { type: 'table', prompt: '이야기에 알맞은 식을 쓰고 몫을 구하세요.', columns: ['이야기', '식', '한 도막의 양'], cells: [['철사 6/7 m를 3도막으로', '6/7 ÷ 3', ''], ['주스 3/5 L를 2잔에', '', ''], ['모래 9/10 kg을 3통에', '', '']], answer: '2/7 m, 3/5 ÷ 2 = 3/10 L, 9/10 ÷ 3 = 3/10 kg' },
        { type: 'figure', prompt: '색칠한 띠를 똑같이 나누어요. 빈칸에 알맞은 수를 쓰세요.', tool: 'fraction', options: { shape: 'strip' }, figures: [
          { state: { n: 9, colored: [0, 1, 2, 3] }, caption: '4/9 ÷ 2 = ___/9' }, { state: { n: 7, colored: [0, 1, 2, 3, 4, 5] }, caption: '6/7 ÷ 3 = ___/7' }], answer: '2/9, 2/7' },
        { type: 'choice', prompt: '계산이 맞는 식에 ○ 하세요.', options: ['3/7 ÷ 2 = 3/14', '3/7 ÷ 2 = 3/5', '3/7 ÷ 2 = 6/7'], answer: '3/7 ÷ 2 = 3/14' },
        { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '8/9 ÷ 4 = ______/9, 5/6 ÷ 2 = 5/______', answer: '2, 12' },
        { type: 'short', prompt: '(분수) ÷ (자연수)를 계산하는 두 가지 방법을 쓰고 어느 때 쓰는지 써 보세요.' },
      ],
      easy: {
        note: '분자가 나누는 수로 나누어떨어지면 분자를 나누어요. 아니면 분모에 곱해요.',
        items: [
          { type: 'table', prompt: '이야기에 알맞은 식을 쓰고 몫을 구하세요.', columns: ['이야기', '식', '한 도막의 양'], cells: [['철사 6/7 m를 3도막으로', '6/7 ÷ 3', ''], ['주스 3/5 L를 2잔에', '', '']], answer: '2/7 m, 3/5 ÷ 2 = 3/10 L' },
          { type: 'figure', prompt: '색칠한 띠를 똑같이 나누어요. 빈칸에 알맞은 수를 쓰세요.', tool: 'fraction', options: { shape: 'strip' }, figures: [
            { state: { n: 9, colored: [0, 1, 2, 3] }, caption: '4/9 ÷ 2 = ___/9' }], answer: '2/9' },
          { type: 'choice', prompt: '3/7 ÷ 2의 몫에 ○ 하세요.', options: ['3/14', '3/5'], answer: '3/14' },
          { type: 'short', prompt: '6/7 ÷ 3의 몫을 쓰세요.', answer: '2/7' },
        ],
      },
    },
    diff: {
      easy: '쉬움은 분모·분자의 뜻이 그림 옆에 표시되고 이어진 카드가 맞으면 초록 테두리로 보여요.',
      base: '이야기 식을 세워 두 가지 방법 가운데 알맞은 방법으로 몫을 구하고 띠 그림으로 확인해요.',
      challenge: '도전은 틀린 풀이를 찾아 고치고, 두 방법이 같은 결과가 되는 까닭을 약분으로 설명해요.',
    },
    notes: '자주 보이는 어려움: ① 이야기에서 나누어지는 양과 나누는 수를 바꾸어 식을 세운다 → 무엇을 나누는지 밑줄을 긋게 하고 몫이 처음 양보다 작은지 확인한다. ② 분자와 분모를 모두 나누는 수로 나누거나 분모를 나눈다(5/6 ÷ 3 = 5/2) → 한 칸 크기를 띠로 보여 분모는 곱한다고 확인한다. ③ 답에 단위를 쓰지 않는다 → 답을 쓸 때 m, L, kg을 반드시 붙이게 한다. 분수로 나누는 계산은 2학기(g6-math-2-01)에서 이어서 배우므로 이 단원에서는 다루지 않는다.',
  }));

  PaperLessons.registerUnit({
    id: UID, schema: 'edu-unit.v1', catalogUnit: UNIT, grade: 6, subject: '수학', unitTitle: TITLE,
    flow: '1~2차시는 1 ÷ 4처럼 1을 자연수로 나눈 몫이 분수가 됨을 피자와 1 m 띠로 확인하고, 2 ÷ 3·3 ÷ 4처럼 나누어지는 수가 달라져도 몫이 (나누어지는 수)/(나누는 수)임을 알며 나누는 수를 분자에 쓰는 실수를 가려냅니다. 3~4차시는 한 명이 판마다 한 조각씩 받는 그림과 수직선의 눈금으로 몫을 설명하고, 5~6차시에서는 5 ÷ 4처럼 몫이 1보다 큰 경우를 가분수·대분수로 나타내 생활 이야기 문제로 옮깁니다. 7~8차시는 분자가 나누는 수로 나누어떨어지는 (분수) ÷ (자연수)를 띠와 수직선으로 나타내 분자를 나누어 구하고, 9~10차시는 나누어떨어지지 않을 때 크기가 같은 분수로 바꾸거나 분모에 나누는 수를 곱하는 방법을 정리해 알맞은 방법을 고릅니다. 11차시에서 이야기 문제와 맞고 틀린 풀이 판단으로 단원을 정리하며, 분수로 나누는 (분수) ÷ (분수)는 2학기 g6-math-2-01에서 다룹니다.',
    refs: {},
    lessons,
  });
})();
