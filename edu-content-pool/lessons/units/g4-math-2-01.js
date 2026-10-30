/* 4학년 2학기 1. 분수의 덧셈과 뺄셈 — 단원 파일(차시 10개 가운데 2차시는 기존 차시 g4-math-fraction-add).
 * 흐름: 단위분수 개수 세기·분모끼리 더하지 않는 까닭(1) → 분모가 같은 진분수의 덧셈(2, 기존) → 합이 1보다 큰 덧셈과 대분수(3)
 *      → 대분수의 덧셈(4) → 진분수의 뺄셈 그림(5) → 분모끼리 빼는 오개념(6) → 1·자연수에서 진분수 빼기(7)
 *      → 대분수의 뺄셈(8) → 받아내림이 있는 대분수 뺄셈(9) → 덧셈·뺄셈 이야기 문제와 정리(10).
 * 분수는 "7분의 5", 대분수는 "1과 7분의 2"로 읽어 쓴다. 정답은 모두 손으로 계산해 두었다.
 */
(function () {
  const U = { grade: 4, subject: '수학', unitTitle: '1. 분수의 덧셈과 뺄셈' };
  const CU = 'g4-수학-2학기-1';
  const UID = 'g4-math-2-01';
  const STD = ['[4수01-15]'];
  const P = (what) => `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`;
  const MOOD = { type: 'mood', prompt: '오늘 공부는 어땠나요?' };
  // 장면 하나: 종이 오린 언덕·집·나무 위에 한 줄 글
  const sc = (text, kind) => {
    const k = kind || 0;
    const sets = [
      [{ motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 110, y: 52 }, { motif: 'hills', y: 206 }, { motif: 'house', x: 120, y: 214 }, { motif: 'tree', x: 370, y: 216 }],
      [{ motif: 'cloud', x: 360, y: 50 }, { motif: 'hills', y: 208, colors: ['mint', 'lavender', 'sky'] }, { motif: 'tree', x: 110, y: 218, color: 'mint' }, { motif: 'flower', x: 250, y: 228 }, { motif: 'house', x: 380, y: 216, s: 1.1, color: 'buttercup' }],
      [{ motif: 'moon', x: 400, y: 58, s: 0.8 }, { motif: 'star', x: 320, y: 40, s: 0.5 }, { motif: 'star', x: 90, y: 60, s: 0.5 }, { motif: 'hills', y: 210 }, { motif: 'house', x: 130, y: 216 }],
      [{ motif: 'sun', x: 90, y: 60, s: 0.8 }, { motif: 'bird', x: 250, y: 80 }, { motif: 'hills', y: 208 }, { motif: 'flower', x: 150, y: 228 }, { motif: 'tree', x: 360, y: 218 }],
    ];
    return { viewBox: [480, 270], layers: sets[k % sets.length].concat([{ motif: 'text', x: 240, y: 142, text, size: 22 }]) };
  };
  // 활동 하나 — 분은 mk가 전개 27분을 나누어 채운다
  const A = (id, title, tool, task, teacher, levels, items) => ({ id, title, minutes: 0, tool, task, teacher, levels, items });
  const mk = (n, d) => {
    const acts = d.acts; const base = Math.floor(27 / acts.length);
    acts.forEach((a, i) => { a.minutes = i === acts.length - 1 ? 27 - base * (acts.length - 1) : base; });
    return Object.assign({ id: `${UID}-${String(n).padStart(2, '0')}`, schema: 'edu-lesson.v1', catalog: { unit: CU, lesson: n }, minutes: 40, formats: ['chromebook', 'projector', 'print'] }, U, {
      title: d.title, objective: d.objective, standards: STD,
      illustration: { prompt: P(d.ill), scene: sc(d.sceneText, d.kind) },
      stages: [
        { id: 'intro', title: '도입', minutes: 6, teacher: d.intro[0], student: d.intro[1] },
        { id: 'main', title: '전개', minutes: 27, activities: acts },
        { id: 'wrapup', title: '정리', minutes: 7, teacher: d.wrap, exitTicket: d.exit.concat([MOOD]) },
      ],
      worksheet: { title: d.wsTitle || d.title, items: d.ws, easy: { note: d.easyNote, items: d.easy } },
      differentiation: d.diff, teacherNotes: d.notes,
    });
  };
  // 카드 짝 잇기·고르기 단계 옵션
  const MM = (mode, topic) => ({ easy: { mode, topic, live: true }, base: { mode, topic }, challenge: { mode, topic } });
  const FR = (extraEasy, extraChallenge) => ({ easy: Object.assign({}, extraEasy), base: {}, challenge: Object.assign({}, extraChallenge) });
  const NL = (den, extra) => {
    const b = Object.assign({ mode: 'place', min: 0, max: 2, step: 1, sub: den, den, format: 'frac', mixed: true, labels: 'major' }, extra || {});
    return { easy: Object.assign({}, b, { labels: 'all', showValue: true }), base: b, challenge: Object.assign({}, b, { labels: 'ends' }) };
  };

  const lessons = [
    // ───────────────────────── 1차시 (intro · concept) ─────────────────────────
    mk(1, {
      title: '같은 크기 조각이 몇 개인지 세어 보기',
      objective: '분수를 단위분수가 몇 개 모인 것으로 읽고, 분모가 같은 두 분수를 더할 때 분모를 더하지 않는 까닭을 조각 그림으로 말할 수 있다.',
      ill: 'a round paper pizza cut into eight equal slices with one slice and two slices pulled out on two small plates, beside a child pointing at the slices',
      sceneText: '조각이 모두 몇 개일까?', kind: 0,
      intro: [
        '"피자 한 판을 똑같이 8조각으로 잘랐어요. 민지가 1조각, 준호가 2조각을 먹었어요. 둘이 먹은 것은 몇 조각일까요?" 3조각이라는 답을 확인한 뒤 "한 조각은 전체의 얼마예요?"라고 물어 8분의 1을 이끈다. "8분의 1이 1개, 또 2개니까 모두 8분의 1이 3개예요"라고 말하게 하고, 16분의 3이라는 답이 나오면 지우지 말고 칠판 구석에 적어 두었다가 활동 3에서 다시 따진다.',
        '피자 한 판을 8조각으로 잘라 민지가 1조각, 준호가 2조각 먹었어요. 먹은 조각은 모두 전체의 얼마일까요?',
      ],
      acts: [
        A('a1', '활동 1. 단위분수가 몇 개인지 세어 색칠하기', 'fraction',
          '분모는 전체를 똑같이 나눈 조각 수, 분자는 색칠한 조각 수예요. 단위분수 조각이 몇 개 모였는지 세며 색칠해요.',
          '"9분의 4는 9분의 1이 몇 개 모인 걸까요?" 색칠한 조각을 하나씩 짚으며 세게 한다. 9분의 4를 4분의 9로 거꾸로 쓰는 학생에게는 "전체를 몇 조각으로 나눴어요? 그 수는 어느 쪽에 써요?"라고 되묻는다.',
          FR({ showTerms: true }, { hideFraction: true }),
          [
            { prompt: '띠를 똑같이 9조각으로 나누었어요. 9분의 1 조각 4개를 색칠해 보세요.', toolOptions: { shape: 'strip', startN: 9, min: 9, max: 9 }, state: { n: 9 }, target: { den: 9, num: 4 }, difficulty: 0.08 },
            { prompt: '피자를 똑같이 12조각으로 나누었어요. 12분의 1 조각 7개를 색칠해 보세요.', toolOptions: { startN: 12, min: 12, max: 12 }, state: { n: 12 }, target: { den: 12, num: 7 }, difficulty: 0.12 },
            { prompt: '띠를 똑같이 7조각으로 나누었어요. 7분의 1 조각이 6개 되도록 색칠해 보세요.', toolOptions: { shape: 'strip', startN: 7, min: 7, max: 7 }, state: { n: 7 }, target: { den: 7, num: 6 }, difficulty: 0.12 },
            { prompt: '더 해 보기: 피자를 10조각으로 나누고 10분의 1 조각 10개를 모두 색칠해 보세요.', toolOptions: { startN: 10, min: 10, max: 10 }, state: { n: 10 }, target: { den: 10, num: 10 }, extra: true, difficulty: 0.2,
              conclude: '10분의 1이 10개 모이면 피자 한 판 전체, 곧 1이에요.' },
          ]),
        A('a2', '활동 2. 단위분수 개수와 분수 짝 잇기', 'mindmap',
          '"7분의 1이 3개"처럼 단위분수 개수로 읽은 말과 같은 분수 카드를 이어요.',
          '"5분의 4와 4분의 5는 같은 수일까요?" 분모는 전체를 나눈 조각 수라서 쓰는 자리가 정해져 있다고 짚는다. 단위분수의 개수를 분모 자리에 쓰는 학생에게는 조각 그림을 다시 그려 보게 한다.',
          MM('match', '단위분수 개수'),
          [
            { prompt: '단위분수 개수로 읽은 말과 같은 분수 카드를 이어 보세요.', toolOptions: { slots: [{ id: 'm1', label: '7분의 1이 3개' }, { id: 'm2', label: '7분의 1이 5개' }], cards: [{ id: 'c1', text: '7분의 3' }, { id: 'c2', text: '7분의 5' }, { id: 'c3', text: '3분의 7', why: '분모는 전체를 나눈 조각 수라서 7이에요.' }] }, target: { match: { m1: 'c1', m2: 'c2' } }, difficulty: 0.1 },
            { prompt: '8분의 1이 몇 개인지 읽은 말과 같은 분수 카드를 이어 보세요.', toolOptions: { slots: [{ id: 'n1', label: '8분의 1이 2개' }, { id: 'n2', label: '8분의 1이 6개' }, { id: 'n3', label: '8분의 1이 8개' }], cards: [{ id: 'd1', text: '8분의 2' }, { id: 'd2', text: '8분의 6' }, { id: 'd3', text: '8분의 8' }, { id: 'd4', text: '2분의 8', why: '8분의 1이므로 분모는 8이에요.' }] }, target: { match: { n1: 'd1', n2: 'd2', n3: 'd3' } }, difficulty: 0.15,
              conclude: '분모가 같은 단위분수를 8개 모으면 8분의 8, 곧 1이에요.' },
            { prompt: '분수를 단위분수 개수로 읽은 카드와 이어 보세요.', toolOptions: { slots: [{ id: 'p1', label: '5분의 4' }, { id: 'p2', label: '11분의 9' }], cards: [{ id: 'e1', text: '5분의 1이 4개' }, { id: 'e2', text: '11분의 1이 9개' }, { id: 'e3', text: '4분의 1이 5개', why: '5분의 4는 5분의 1이 모인 거예요.' }] }, target: { match: { p1: 'e1', p2: 'e2' } }, difficulty: 0.2 },
            { prompt: '더 해 보기: 6분의 1이 모인 개수와 분수를 이어 보세요. 1이 되는 것도 있어요.', toolOptions: { slots: [{ id: 'q1', label: '6분의 1이 4개' }, { id: 'q2', label: '6분의 1이 1개' }, { id: 'q3', label: '6분의 1이 6개' }], cards: [{ id: 'f1', text: '6분의 4' }, { id: 'f2', text: '단위분수 6분의 1' }, { id: 'f3', text: '1(전체)' }, { id: 'f4', text: '4분의 6' }] }, target: { match: { q1: 'f1', q2: 'f2', q3: 'f3' } }, extra: true, difficulty: 0.25 },
          ]),
        A('a3', '활동 3. 분모를 더한 계산 바로잡기', 'mindmap',
          '분모가 같으면 조각 크기가 같아서 조각 수만 더해요. 바르게 말한 카드만 바구니에 넣어요.',
          '"조각 크기가 같은데 분모를 더하면 조각이 더 작아져 버려요." 8분의 1 + 8분의 2 = 16분의 3이라고 쓴 학생에게 16조각짜리 피자 그림을 그려 보이며 "처음 피자는 몇 조각이었지요?"라고 묻는다. 바르게 고친 답은 분모는 그대로, 분자만 더한 것임을 말로 정리하게 한다.',
          MM('pick', '분수 더하기'),
          [
            { prompt: '준호는 "8분의 1 + 8분의 2 = 16분의 3"이라고 했어요. 바르게 말한 카드를 모두 골라 보세요.', toolOptions: { basket: '바른 말', cards: [{ id: 'a', text: '8분의 1이 1개와 2개를 모으면 8분의 1이 3개예요' }, { id: 'b', text: '더해도 조각 크기는 8분의 1 그대로예요' }, { id: 'c', text: '분모끼리 더해서 16이 돼요', why: '피자는 그대로 8조각이라 분모는 변하지 않아요.' }, { id: 'd', text: '합은 8분의 3이에요' }, { id: 'e', text: '합은 16분의 3이에요', why: '16분의 3이면 조각이 더 작아져요.' }] }, target: { pick: ['a', 'b', 'd'] }, difficulty: 0.15 },
            { prompt: '민지는 "5분의 3 + 5분의 1 = 10분의 4"라고 했어요. 바른 계산을 말한 카드를 모두 골라 보세요.', toolOptions: { basket: '바른 말', cards: [{ id: 'a', text: '분모 5는 그대로 둬요' }, { id: 'b', text: '분자 3과 1을 더해요' }, { id: 'c', text: '합은 5분의 4예요' }, { id: 'd', text: '분모도 5 + 5로 더해요', why: '분모는 전체를 나눈 조각 수라서 더하지 않아요.' }, { id: 'e', text: '합은 10분의 4예요', why: '분모가 10이면 전체를 10조각으로 나눈 거예요.' }] }, target: { pick: ['a', 'b', 'c'] }, difficulty: 0.2 },
            { prompt: '9분의 2 + 9분의 6을 바르게 계산한 카드를 모두 골라 보세요.', toolOptions: { basket: '바른 계산', cards: [{ id: 'a', text: '9분의 8' }, { id: 'b', text: '9분의 1이 2개와 6개를 모으면 8개예요' }, { id: 'c', text: '18분의 8', why: '분모끼리 더하면 안 돼요.' }, { id: 'd', text: '9분의 26', why: '분자 2와 6은 나란히 쓰지 않고 더해요.' }] }, target: { pick: ['a', 'b'] }, difficulty: 0.22 },
            { prompt: '더 해 보기: 분모가 같은 분수를 더할 때 분모가 그대로인 까닭을 바르게 말한 카드를 골라 보세요.', toolOptions: { basket: '바른 까닭', cards: [{ id: 'a', text: '더해도 조각 크기는 같아서 분모는 그대로예요' }, { id: 'b', text: '조각 수만 늘어나서 분자만 더해요' }, { id: 'c', text: '분모끼리 더해야 전체가 커져요', why: '전체 크기는 그대로예요.' }, { id: 'd', text: '분모가 클수록 조각이 커서 분모를 더해요', why: '분모가 클수록 조각은 작아져요.' }] }, target: { pick: ['a', 'b'] }, extra: true, difficulty: 0.25 },
          ]),
      ],
      wrap: '"분모가 같은 분수를 더할 때 분모는 어떻게 되나요? 왜 그럴까요?" 조각 크기가 변하지 않는다는 말이 나오는지 듣는다. 출구 2번에서 20분의 7을 고른 학생은 활동 3의 피자 그림을 다시 보며 분모가 무엇을 뜻하는지 짝에게 설명하게 한다.',
      exit: [
        { type: 'choice', prompt: '12분의 1이 5개 모인 분수는 무엇인가요?', options: ['5분의 12', '12분의 5', '17분의 1'], answer: 1, difficulty: 0.1, explain: '12분의 1이 5개면 분모 12, 분자 5예요.' },
        { type: 'choice', prompt: '10분의 3 + 10분의 4를 바르게 계산한 것은 무엇인가요?', options: ['10분의 7', '20분의 7', '10분의 12'], answer: 0, difficulty: 0.15, explain: '분모는 그대로 10이고 분자 3과 4를 더하면 7이에요.' },
        { type: 'short', prompt: '분모가 같은 분수를 더할 때 분모를 더하지 않는 까닭을 조각 그림을 떠올려 써 보세요.', answer: '더해도 조각의 크기가 같아서 분모는 그대로이고 조각 수만 늘어나기 때문이다.' },
      ],
      ws: [
        { type: 'figure', prompt: '색칠한 조각이 단위분수 몇 개인지 쓰고 분수로 나타내세요.', tool: 'fraction', options: { shape: 'strip', frame: true }, figures: [
          { state: { n: 6, colored: [0, 1, 2, 3] }, caption: '6분의 1이 ___개' }, { state: { n: 9, colored: [0, 1, 2, 3, 4, 5, 6] }, caption: '9분의 1이 ___개' }], answer: '4개 → 6분의 4, 7개 → 9분의 7' },
        { type: 'table', prompt: '분수를 단위분수 개수로 읽어 쓰세요.', columns: ['분수', '단위분수가 몇 개'], cells: [['7분의 3', ''], ['12분의 5', ''], ['9분의 9', '']], answer: '7분의 1이 3개, 12분의 1이 5개, 9분의 1이 9개(=1)' },
        { type: 'choice', prompt: '지호가 "6분의 2 + 6분의 3 = 12분의 5"라고 했어요. 바르게 고친 답은 무엇인가요?', options: ['12분의 5', '6분의 5', '6분의 6'], answer: '6분의 5' },
        { type: 'blank', prompt: '계산해 보세요.', text: '5분의 1 + 5분의 3 = ___ ,  11분의 4 + 11분의 6 = ___', answer: '5분의 4, 11분의 10' },
        { type: 'short', prompt: '지호의 계산이 왜 틀렸는지 조각 수를 넣어 설명해 보세요.', answer: '분모는 전체를 나눈 조각 수라서 6조각 그대로이고, 6분의 1이 2개와 3개를 모으면 5개이므로 6분의 5이다.' },
      ],
      easyNote: '분모는 전체를 똑같이 나눈 조각 수예요. 더해도 그대로 써요. 분자는 색칠한 조각 수라서 더해요.',
      easy: [
        { type: 'figure', prompt: '색칠한 조각이 몇 개인지 쓰세요.', tool: 'fraction', options: { shape: 'strip', frame: true }, figures: [{ state: { n: 5, colored: [0, 1, 2] }, caption: '5분의 1이 ___개' }], answer: '3개 → 5분의 3' },
        { type: 'choice', prompt: '8분의 1이 3개인 분수에 ○ 하세요.', options: ['3분의 8', '8분의 3'], answer: '8분의 3' },
        { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '7분의 2 + 7분의 4 = 7분의 ___', answer: '6' },
        { type: 'draw', prompt: '띠를 똑같이 6칸으로 나누고 6분의 1 조각 4개를 색칠한 뒤 분수로 쓰세요.' },
      ],
      diff: {
        easy: '분자와 분모가 무엇인지 글자로 알려 주고, 색칠할 때마다 단위분수 개수가 바로 보여요.',
        base: '조각을 직접 세어 색칠하고 단위분수 개수와 분수를 짝지어요.',
        challenge: '분수 글자 없이 조각만 보고 색칠하며, 분모를 더한 계산이 틀린 까닭을 말로 설명해요.',
      },
      notes: '자주 보이는 어려움: ① 분모끼리 더한다(8분의 1 + 8분의 2 = 16분의 3) → 처음 피자 조각 수는 그대로라고 그림으로 확인. ② 분자와 분모를 거꾸로 쓴다(9분의 4를 4분의 9) → 전체를 나눈 조각 수가 분모. ③ 단위분수의 개수를 분모에 쓴다. 출구 3번(서술)은 "조각 크기가 같다"는 까닭이 들어 있는지 본다. 분모가 같은 진분수의 덧셈 계산은 2차시(g4-math-fraction-add)에서 이어서 한다.',
    }),
    // ───────────────────────── 3차시 (extend · concept) ─────────────────────────
    mk(3, {
      title: '합이 1을 넘는 분수를 대분수로 바꾸기',
      objective: '분모가 같은 두 진분수의 합이 1보다 크면 가분수로 나타낸 뒤 대분수로 바꾸어 쓸 수 있다.',
      ill: 'two paper strips each cut into six equal parts, four parts colored on the first and three parts colored on the second sliding out beyond the end of a number line, with a child pointing at the extra part',
      sceneText: '한 판이 넘었어요!', kind: 1,
      intro: [
        '"피자 한 판을 6조각으로 잘랐어요. 민지가 6분의 4, 준호가 6분의 3을 먹었다면 한 판보다 많이 먹었을까요?" 띠 두 줄을 놓고 6분의 4와 6분의 3을 더하면 6분의 7이 된다는 것을 보여 준다. "분자가 분모보다 큰 분수를 가분수라고 해요. 한 판 하고 한 조각이 남았다고도 말할 수 있어요." 6분의 7이 1보다 크다는 것을 학생 입으로 말하게 한다.',
        '6분의 4 + 6분의 3은 한 판보다 많을까요, 적을까요? 띠를 그려 생각해 봐요.',
      ],
      acts: [
        A('a1', '활동 1. 수직선에서 합의 자리 찾기', 'numberline',
          '두 분수의 합을 수직선에 점으로 나타내요. 1을 넘으면 대분수로 읽어요.',
          '"4/6만큼 가고 3/6만큼 더 가면 1을 넘었나요?" 눈금을 하나씩 세게 한다. 1을 넘은 곳을 "1과 6분의 1"로 읽는 학생에게는 1에서 몇 칸 더 갔는지 센다. 점을 1 바로 위에 놓는 학생은 6분의 7이 6분의 6보다 한 칸 더 간 곳임을 짚는다.',
          NL(6),
          [
            { prompt: '6분의 4 + 6분의 3의 값을 수직선에 점으로 나타내 보세요.', toolOptions: { mode: 'place', min: 0, max: 2, step: 1, sub: 6, den: 6, format: 'frac', mixed: true, count: 1 }, target: { points: ['1 1/6'] }, difficulty: 0.15 },
            { prompt: '8분의 5 + 8분의 6의 값을 수직선에 점으로 나타내 보세요.', toolOptions: { mode: 'place', min: 0, max: 2, step: 1, sub: 8, den: 8, format: 'frac', mixed: true, count: 1 }, target: { points: ['1 3/8'] }, difficulty: 0.2 },
            { prompt: '9분의 7 + 9분의 5의 값을 수직선에 점으로 나타내 보세요.', toolOptions: { mode: 'place', min: 0, max: 2, step: 1, sub: 9, den: 9, format: 'frac', mixed: true, count: 1 }, target: { points: ['1 3/9'] }, difficulty: 0.22 },
            { prompt: '더 해 보기: 4분의 3 + 4분의 3의 값을 수직선에 점으로 나타내 보세요.', toolOptions: { mode: 'place', min: 0, max: 2, step: 1, sub: 4, den: 4, format: 'frac', mixed: true, count: 1 }, target: { points: ['1 2/4'] }, extra: true, difficulty: 0.25 },
          ]),
        A('a2', '활동 2. 가분수와 대분수 짝 잇기', 'mindmap',
          '분자가 분모보다 큰 분수는 1이 몇 번 들어가는지 보고 대분수로 바꿔요. 거꾸로도 해 봐요.',
          '"9분의 1이 9개면 1이에요. 7분의 9에는 1이 한 번 들어가고 7분의 1이 몇 개 남지요?" 분자에서 분모를 한 번 뺀다고 말하게 한다. 7분의 9를 "1과 7분의 9"로 쓰는 학생에게는 조각 9개 가운데 7개가 한 판이 되었다고 보여 준다.',
          MM('match', '가분수와 대분수'),
          [
            { prompt: '가분수와 같은 대분수 카드를 이어 보세요.', toolOptions: { slots: [{ id: 'p1', label: '7분의 9' }, { id: 'p2', label: '8분의 11' }], cards: [{ id: 'c1', text: '1과 7분의 2' }, { id: 'c2', text: '1과 8분의 3' }, { id: 'c3', text: '1과 8분의 11', why: '한 판을 빼고 남은 조각만 분자에 써요.' }, { id: 'c4', text: '2와 7분의 1' }] }, target: { match: { p1: 'c1', p2: 'c2' } }, difficulty: 0.15 },
            { prompt: '세 가분수와 같은 대분수 카드를 이어 보세요.', toolOptions: { slots: [{ id: 'q1', label: '5분의 8' }, { id: 'q2', label: '6분의 10' }, { id: 'q3', label: '4분의 9' }], cards: [{ id: 'd1', text: '1과 5분의 3' }, { id: 'd2', text: '1과 6분의 4' }, { id: 'd3', text: '2와 4분의 1' }, { id: 'd4', text: '1과 5분의 8' }] }, target: { match: { q1: 'd1', q2: 'd2', q3: 'd3' } }, difficulty: 0.22,
              conclude: '4분의 9는 4분의 4가 두 번 들어가서 2와 4분의 1이에요.' },
            { prompt: '대분수와 같은 가분수 카드를 이어 보세요.', toolOptions: { slots: [{ id: 'r1', label: '1과 3분의 2' }, { id: 'r2', label: '1과 4분의 1' }, { id: 'r3', label: '2와 3분의 1' }], cards: [{ id: 'e1', text: '3분의 5' }, { id: 'e2', text: '4분의 5' }, { id: 'e3', text: '3분의 7' }, { id: 'e4', text: '5분의 3', why: '분모는 전체를 나눈 조각 수라서 그대로 3이에요.' }] }, target: { match: { r1: 'e1', r2: 'e2', r3: 'e3' } }, difficulty: 0.25 },
            { prompt: '더 해 보기: 알맞은 분수 카드를 이어 보세요. 1이 되는 것도 있어요.', toolOptions: { slots: [{ id: 's1', label: '1과 6분의 5' }, { id: 's2', label: '3분의 4' }, { id: 's3', label: '12분의 12' }], cards: [{ id: 'f1', text: '6분의 11' }, { id: 'f2', text: '1과 3분의 1' }, { id: 'f3', text: '1' }, { id: 'f4', text: '6분의 7' }] }, target: { match: { s1: 'f1', s2: 'f2', s3: 'f3' } }, extra: true, difficulty: 0.3 },
          ]),
        A('a3', '활동 3. 합을 구해 바르게 쓴 답 고르기', 'mindmap',
          '분자끼리 더한 뒤 분모보다 크면 대분수로 바꿔요. 바르게 쓴 답을 모두 골라요.',
          '"분자 3과 4를 더하면 7이에요. 분모 5보다 크니 한 판이 넘었죠?" 합이 가분수로 나오면 대분수로 바꾸게 한다. 5분의 7을 1과 5분의 7로 쓰거나 분모끼리 더하는 학생에게는 활동 1의 수직선으로 돌아가 눈금을 세어 보게 한다.',
          MM('pick', '합 구하기'),
          [
            { prompt: '5분의 3 + 5분의 4를 바르게 계산한 카드를 모두 골라 보세요.', toolOptions: { basket: '바른 답', cards: [{ id: 'a', text: '5분의 7' }, { id: 'b', text: '1과 5분의 2' }, { id: 'c', text: '10분의 7', why: '분모는 더하지 않아요.' }, { id: 'd', text: '1과 5분의 7', why: '한 판을 빼고 남은 조각 수를 써야 해요.' }] }, target: { pick: ['a', 'b'] }, difficulty: 0.18 },
            { prompt: '7분의 4 + 7분의 6을 바르게 계산한 카드를 모두 골라 보세요.', toolOptions: { basket: '바른 답', cards: [{ id: 'a', text: '7분의 10' }, { id: 'b', text: '1과 7분의 3' }, { id: 'c', text: '14분의 10', why: '분모는 7 그대로예요.' }, { id: 'd', text: '1과 7분의 4', why: '7분의 10에서 7을 빼면 3이 남아요.' }] }, target: { pick: ['a', 'b'] }, difficulty: 0.22 },
            { prompt: '12분의 7 + 12분의 8을 바르게 계산한 카드를 모두 골라 보세요.', toolOptions: { basket: '바른 답', cards: [{ id: 'a', text: '12분의 15' }, { id: 'b', text: '1과 12분의 3' }, { id: 'c', text: '24분의 15', why: '분모는 12 그대로예요.' }, { id: 'd', text: '2와 12분의 3', why: '12분의 15에는 12분의 12가 한 번만 들어가요.' }] }, target: { pick: ['a', 'b'] }, difficulty: 0.26 },
            { prompt: '더 해 보기: 합이 1보다 큰 덧셈식만 골라 보세요.', toolOptions: { basket: '합이 1보다 큰 식', cards: [{ id: 'a', text: '9분의 4 + 9분의 3' }, { id: 'b', text: '9분의 5 + 9분의 6' }, { id: 'c', text: '10분의 4 + 10분의 7' }, { id: 'd', text: '8분의 3 + 8분의 4' }, { id: 'e', text: '8분의 5 + 8분의 3', why: '합이 8분의 8이면 딱 1이에요.' }] }, target: { pick: ['b', 'c'] }, extra: true, difficulty: 0.3 },
          ]),
      ],
      wrap: '"6분의 4 + 6분의 3의 답을 두 가지 모양으로 말해 볼까요?" 6분의 7과 1과 6분의 1을 모두 말하게 한다. 출구 2번에서 점을 1에 놓은 학생은 한 판을 넘은 조각이 몇 개인지 눈금을 세어 다시 보게 한다.',
      exit: [
        { type: 'choice', prompt: '3분의 2 + 3분의 2를 대분수로 바르게 쓴 것은 무엇인가요?', options: ['1과 3분의 1', '6분의 4', '1과 3분의 2'], answer: 0, difficulty: 0.18, explain: '합은 3분의 4이고, 한 판(3분의 3)을 빼면 3분의 1이 남아요.' },
        { type: 'tool', tool: 'numberline', options: { mode: 'place', min: 0, max: 2, step: 1, sub: 6, den: 6, format: 'frac', mixed: true, labels: 'major', count: 1 }, prompt: '6분의 5 + 6분의 3의 값을 수직선에 점으로 나타내 보세요.', target: { points: ['1 2/6'] }, difficulty: 0.22 },
        { type: 'short', prompt: '7분의 6 + 7분의 5를 계산하고, 답이 1보다 큰지 작은지도 말해 보세요.', answer: '7분의 11 = 1과 7분의 4. 1보다 크다.' },
      ],
      ws: [
        { type: 'table', prompt: '가분수를 대분수로 바꾸어 쓰세요.', columns: ['가분수', '대분수'], cells: [['5분의 7', ''], ['8분의 13', ''], ['6분의 9', '']], answer: '1과 5분의 2, 1과 8분의 5, 1과 6분의 3' },
        { type: 'blank', prompt: '계산하고 답을 대분수로 쓰세요.', text: '6분의 5 + 6분의 4 = 6분의 ___ = ___과 6분의 ___', answer: '9, 1, 3' },
        { type: 'choice', prompt: '10분의 6 + 10분의 7을 바르게 계산한 친구에 ○ 하세요.', options: ['"20분의 13이에요"', '"10분의 13, 1과 10분의 3이에요"', '"1과 10분의 13이에요"'], answer: '"10분의 13, 1과 10분의 3이에요"' },
        { type: 'blank', prompt: '합이 1보다 큰지 작은지 ○ 하고 계산해 보세요.', text: '9분의 5 + 9분의 3 = ___ (1보다 큼 / 작음),  9분의 6 + 9분의 7 = ___ (1보다 큼 / 작음)', answer: '9분의 8(작음), 9분의 13 = 1과 9분의 4(큼)' },
        { type: 'short', prompt: '"5분의 8"을 "1과 5분의 8"이라고 쓰면 왜 틀리는지 설명해 보세요.', answer: '5분의 8에서 한 판(5분의 5)을 빼고 남은 3조각만 분수 부분에 써야 하므로 1과 5분의 3이다.' },
      ],
      easyNote: '분자끼리 더해요. 분자가 분모보다 크면 분모만큼을 묶어 1로 바꾸고 남은 조각을 써요. 예: 6분의 7 = 1과 6분의 1',
      easy: [
        { type: 'table', prompt: '가분수를 대분수로 바꾸어 쓰세요.', columns: ['가분수', '대분수'], cells: [['4분의 5', ''], ['3분의 4', '']], answer: '1과 4분의 1, 1과 3분의 1' },
        { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '5분의 4 + 5분의 3 = 5분의 ___ = 1과 5분의 ___', answer: '7, 2' },
        { type: 'choice', prompt: '7분의 7은 얼마인가요?', options: ['0', '1', '7'], answer: '1' },
        { type: 'draw', prompt: '띠 두 줄을 똑같이 6칸으로 나누고 6분의 5와 6분의 2를 색칠한 뒤 합을 대분수로 쓰세요.' },
      ],
      diff: {
        easy: '수직선의 모든 눈금에 수가 쓰여 있고 점을 놓을 때마다 지금 수가 보여요.',
        base: '큰 눈금(0, 1, 2)만 쓰여 있어 작은 눈금을 세어 합의 자리를 찾아요.',
        challenge: '수직선 양 끝 수만 보이고, 합이 1보다 큰 식을 골라내는 문항이 더 있어요.',
      },
      notes: '자주 보이는 어려움: ① 분모끼리 더한다. ② 가분수를 대분수로 바꿀 때 분모를 그대로 두고 분자를 다 쓴다(7분의 9 → 1과 7분의 9) → 한 판을 빼고 남은 조각만. ③ 1을 넘었는지 판단하지 못한다 → 분자와 분모를 견준다. 가분수와 대분수 바꾸기는 3학년에서 배운 것을 다시 쓰는 것이므로 수직선과 띠로 확인하며 짧게 다룬다.',
    }),
    // ───────────────────────── 4차시 (extend · concept) ─────────────────────────
    mk(4, {
      title: '자연수와 분수를 따로 더해 대분수 계산하기',
      objective: '분모가 같은 대분수의 덧셈을 자연수끼리, 분수끼리 더하여 구하고, 분수 부분의 합이 가분수이면 자연수로 올려 쓸 수 있다.',
      ill: 'two paper ribbons of different lengths laid end to end on a wooden desk with small paper tags showing whole numbers and fractions, beside a child holding scissors',
      sceneText: '리본을 이어 붙이면?', kind: 3,
      intro: [
        '"리본 1과 5분의 2 m와 2와 5분의 1 m를 이어 붙이면 모두 몇 m일까요?" 칠판에 두 리본을 그려 놓고 자연수 부분과 분수 부분을 색깔을 달리해 보여 준다. "자연수끼리 모으면 얼마, 분수끼리 모으면 얼마예요?" 하고 묻고, 학생이 답을 3과 5분의 3으로 말하도록 이끈다. 자연수까지 분수로 바꿔야 한다고 생각하는 학생에게는 지금은 쪼개서 더하는 방법을 먼저 익힌다고 말해 준다.',
        '리본 두 개를 이어 붙이면 길이는 모두 몇 m일까요? 자연수와 분수로 나누어 생각해 봐요.',
      ],
      acts: [
        A('a1', '활동 1. 대분수 덧셈의 계산 차례 놓기', 'mindmap',
          '대분수의 덧셈은 자연수끼리, 분수끼리 나누어 더한 뒤 합쳐요. 계산하는 차례대로 카드를 놓아요.',
          '"자연수와 분수 중 무엇부터 더해도 되지만, 나누어서 더하면 틀리지 않아요." 차례를 놓은 뒤 카드를 소리 내어 읽게 한다. 분수 부분의 합이 분모를 넘었는데 그대로 쓰는 학생에게는 마지막 카드 앞에 "분수 부분이 1이 넘는지 살펴요"라는 단계를 하나 더 넣어 보게 한다.',
          MM('order', '계산 차례'),
          [
            { prompt: '2와 7분의 3 + 1과 7분의 2를 계산하는 차례대로 놓아 보세요.', toolOptions: { slots: 4, cards: [
              { id: 'w1', text: '식을 써요', sub: '2와 7분의 3 + 1과 7분의 2' }, { id: 'w2', text: '자연수끼리 더해요', sub: '2 + 1 = 3' },
              { id: 'w3', text: '분수끼리 더해요', sub: '7분의 3 + 7분의 2 = 7분의 5' }, { id: 'w4', text: '두 합을 이어 써요', sub: '3과 7분의 5' }] },
              target: { order: ['w1', 'w2', 'w3', 'w4'] }, difficulty: 0.12,
              hints: ['먼저 계산할 식을 쓰고, 큰 수(자연수)부터 작은 조각(분수)까지 하나씩 나누어 더한 뒤 마지막에 합쳐요.', '자연수 부분의 계산과 분수 부분의 계산 가운데 어떤 것을 먼저 해도 되지만, 합치는 일은 맨 끝이에요.', '식 쓰기 → 자연수끼리 → 분수끼리 → 합쳐서 쓰기 차례예요.'] },
            { prompt: '3과 4분의 1 + 2와 4분의 2를 계산하는 차례대로 놓아 보세요.', toolOptions: { slots: 4, cards: [
              { id: 'x1', text: '식을 써요', sub: '3과 4분의 1 + 2와 4분의 2' }, { id: 'x2', text: '자연수끼리 더해요', sub: '3 + 2 = 5' },
              { id: 'x3', text: '분수끼리 더해요', sub: '4분의 1 + 4분의 2 = 4분의 3' }, { id: 'x4', text: '두 합을 이어 써요', sub: '5와 4분의 3' }] },
              target: { order: ['x1', 'x2', 'x3', 'x4'] }, difficulty: 0.15 },
            { prompt: '1과 5분의 3 + 2와 5분의 4를 계산하는 차례대로 놓아 보세요. 올림이 한 번 있어요.', toolOptions: { slots: 5, cards: [
              { id: 'y1', text: '자연수끼리 더해요', sub: '1 + 2 = 3' }, { id: 'y2', text: '분수끼리 더해요', sub: '5분의 3 + 5분의 4 = 5분의 7' },
              { id: 'y3', text: '가분수를 대분수로 바꿔요', sub: '5분의 7 = 1과 5분의 2' }, { id: 'y4', text: '자연수에 1을 더해요', sub: '3 + 1 = 4' }, { id: 'y5', text: '답을 써요', sub: '4와 5분의 2' }] },
              target: { order: ['y1', 'y2', 'y3', 'y4', 'y5'] }, difficulty: 0.25,
              predict: { q: '분수끼리 더한 합이 분모보다 크면 어떻게 할까요?', options: ['그대로 써요', '자연수로 1 올려요'], answer: 1 },
              conclude: '분수 부분의 합이 1을 넘으면 1을 자연수에 올려 더해요.' },
          ]),
        A('a2', '활동 2. 대분수 덧셈의 답 짝짓기', 'mindmap',
          '식과 같은 답을 이어요. 분수 부분의 합이 1을 넘는 식도 있어요.',
          '"분수끼리 더했더니 7분의 9가 나왔어요. 이것을 그대로 답에 쓸 수 있을까요?" 한 판을 자연수로 올려야 한다고 말하게 한다. 3과 6분의 2처럼 분모를 더한 답(분모 6)을 고르는 학생에게는 분모가 3이었던 것을 다시 확인하게 한다.',
          MM('match', '대분수 덧셈'),
          [
            { prompt: '식과 같은 답 카드를 이어 보세요.', toolOptions: { slots: [{ id: 's1', label: '1과 3분의 1 + 2와 3분의 1' }, { id: 's2', label: '2와 8분의 3 + 3과 8분의 2' }], cards: [{ id: 'c1', text: '3과 3분의 2' }, { id: 'c2', text: '5와 8분의 5' }, { id: 'c3', text: '3과 6분의 2', why: '분모는 3 그대로 써요.' }, { id: 'c4', text: '5와 16분의 5', why: '분모는 8 그대로 써요.' }] }, target: { match: { s1: 'c1', s2: 'c2' } }, difficulty: 0.15 },
            { prompt: '분수 부분의 합이 1을 넘는 식이에요. 같은 답 카드를 이어 보세요.', toolOptions: { slots: [{ id: 't1', label: '1과 4분의 3 + 2와 4분의 2' }, { id: 't2', label: '3과 5분의 4 + 1과 5분의 3' }], cards: [{ id: 'd1', text: '4와 4분의 1' }, { id: 'd2', text: '5와 5분의 2' }, { id: 'd3', text: '3과 4분의 5', why: '4분의 5는 1과 4분의 1이라서 자연수로 올려야 해요.' }, { id: 'd4', text: '4와 5분의 7', why: '5분의 7도 1이 넘어요.' }] }, target: { match: { t1: 'd1', t2: 'd2' } }, difficulty: 0.25,
              conclude: '4분의 5는 1과 4분의 1이라서 3에 1을 올려 4와 4분의 1이 돼요.' },
            { prompt: '식과 같은 답 카드를 이어 보세요.', toolOptions: { slots: [{ id: 'u1', label: '2와 6분의 4 + 1과 6분의 3' }, { id: 'u2', label: '4와 9분의 5 + 2와 9분의 7' }], cards: [{ id: 'e1', text: '4와 6분의 1' }, { id: 'e2', text: '7과 9분의 3' }, { id: 'e3', text: '6과 9분의 12' }, { id: 'e4', text: '3과 6분의 7' }] }, target: { match: { u1: 'e1', u2: 'e2' } }, difficulty: 0.28 },
            { prompt: '더 해 보기: 식과 같은 답 카드를 이어 보세요.', toolOptions: { slots: [{ id: 'v1', label: '1과 7분의 6 + 1과 7분의 6' }, { id: 'v2', label: '3과 8분의 7 + 2와 8분의 7' }], cards: [{ id: 'f1', text: '3과 7분의 5' }, { id: 'f2', text: '6과 8분의 6' }, { id: 'f3', text: '5와 8분의 14' }, { id: 'f4', text: '5와 16분의 14' }] }, target: { match: { v1: 'f1', v2: 'f2' } }, extra: true, difficulty: 0.32 },
          ]),
        A('a3', '활동 3. 계산을 바르게 설명한 말 고르기', 'mindmap',
          '자연수끼리, 분수끼리 더하고 분수 부분이 1을 넘으면 자연수에 올려요. 바른 설명만 골라요.',
          '"민지가 4분의 6을 그대로 두었어요. 어디가 아쉬울까요?" 가분수를 대분수로 바꾸어 자연수에 올려야 답이 깔끔해짐을 말하게 한다. 분모도 더하는 학생에게는 활동 2의 1번 문항을 다시 보게 한다.',
          MM('pick', '대분수 덧셈 설명'),
          [
            { prompt: '2와 5분의 1 + 1과 5분의 3을 바르게 계산한 설명을 모두 골라 보세요.', toolOptions: { basket: '바른 설명', cards: [{ id: 'a', text: '자연수 2와 1을 더해 3이에요' }, { id: 'b', text: '5분의 1과 5분의 3을 더해 5분의 4예요' }, { id: 'c', text: '답은 3과 5분의 4예요' }, { id: 'd', text: '답은 3과 10분의 4예요', why: '분모는 더하지 않아요.' }, { id: 'e', text: '분모 5와 5도 더해 10이 돼요', why: '조각 크기는 그대로 5분의 1이에요.' }] }, target: { pick: ['a', 'b', 'c'] }, difficulty: 0.15 },
            { prompt: '4와 7분의 5 + 2와 7분의 4를 바르게 계산한 설명을 모두 골라 보세요.', toolOptions: { basket: '바른 설명', cards: [{ id: 'a', text: '7분의 9는 1과 7분의 2예요' }, { id: 'b', text: '자연수 4 + 2에 1을 더해 7이에요' }, { id: 'c', text: '답은 7과 7분의 2예요' }, { id: 'd', text: '답은 6과 7분의 9예요', why: '7분의 9는 1이 넘으니 자연수로 올려야 해요.' }, { id: 'e', text: '답은 6과 14분의 9예요', why: '분모는 7 그대로 써요.' }] }, target: { pick: ['a', 'b', 'c'] }, difficulty: 0.22 },
            { prompt: '민지는 "1과 4분의 3 + 1과 4분의 3 = 2와 4분의 6"이라고 했어요. 바르게 고친 설명을 모두 골라 보세요.', toolOptions: { basket: '바르게 고친 설명', cards: [{ id: 'a', text: '4분의 6은 1과 4분의 2로 바꿔요' }, { id: 'b', text: '2에 1을 더해 3과 4분의 2예요' }, { id: 'c', text: '2와 4분의 6 그대로 둬도 돼요', why: '분수 부분이 1이 넘으면 자연수로 올려요.' }, { id: 'd', text: '3과 4분의 6이 맞아요', why: '4분의 6에서 한 판을 빼고 4분의 2가 남아요.' }] }, target: { pick: ['a', 'b'] }, difficulty: 0.26 },
          ]),
      ],
      wrap: '"대분수 두 수를 더할 때 가장 먼저 무엇을 나누나요?" 자연수 부분과 분수 부분이라는 말이 나오는지 듣는다. 출구 2번에서 3과 5분의 2를 고르지 못한 학생은 활동 1의 마지막 문항 차례 카드를 다시 순서대로 읽게 한다.',
      exit: [
        { type: 'choice', prompt: '2와 7분의 3 + 4와 7분의 2의 계산 결과는 무엇인가요?', options: ['6과 7분의 5', '6과 14분의 5', '7과 7분의 1'], answer: 0, difficulty: 0.15, explain: '자연수 2와 4를 더해 6, 분수 7분의 3과 7분의 2를 더해 7분의 5예요.' },
        { type: 'choice', prompt: '1과 5분의 4 + 1과 5분의 3의 계산 결과는 무엇인가요?', options: ['2와 5분의 7', '3과 5분의 2', '3과 10분의 7'], answer: 1, difficulty: 0.25, explain: '5분의 4와 5분의 3의 합은 5분의 7이고, 5분의 7은 1과 5분의 2라서 자연수 부분이 3이 돼요.' },
        { type: 'short', prompt: '분수 부분의 합이 분모보다 크면 어떻게 해야 하는지 써 보세요.', answer: '분수 부분의 합을 대분수로 바꾸어 자연수 부분을 1 올려서 더한다.' },
      ],
      ws: [
        { type: 'table', prompt: '자연수끼리, 분수끼리 더해 답을 쓰세요.', columns: ['식', '자연수 합', '분수 합', '답'], cells: [['1과 5분의 2 + 3과 5분의 1', '', '', ''], ['2와 6분의 1 + 1과 6분의 4', '', '', '']], answer: '1과 5분의 2 + 3과 5분의 1: 4, 5분의 3, 4와 5분의 3 / 2와 6분의 1 + 1과 6분의 4: 3, 6분의 5, 3과 6분의 5' },
        { type: 'blank', prompt: '계산해 보세요.', text: '5와 9분의 2 + 2와 9분의 5 = ___ ,  1과 6분의 4 + 3과 6분의 5 = ___', answer: '7과 9분의 7, 5와 6분의 3' },
        { type: 'choice', prompt: '3과 8분의 5 + 2와 8분의 6의 답으로 알맞은 것에 ○ 하세요.', options: ['5와 8분의 11', '6과 8분의 3', '5와 16분의 11'], answer: '6과 8분의 3' },
        { type: 'short', prompt: '"2와 5분의 4 + 1과 5분의 3 = 3과 5분의 7"이라고 쓴 친구에게 어디가 틀렸는지 알려 주세요.', answer: '5분의 7은 1과 5분의 2이므로 자연수에 1을 올려 4와 5분의 2가 되어야 한다.' },
        { type: 'draw', prompt: '길이가 2와 4분의 3 m인 리본과 1과 4분의 3 m인 리본을 이어 붙인 길이를 그림으로 그려 구하세요.', answer: '4와 4분의 2 m' },
      ],
      easyNote: '자연수끼리 더하고, 분수끼리 더해요. 분수 부분이 분모보다 크면 1을 자연수에 올려요.',
      easy: [
        { type: 'table', prompt: '자연수끼리, 분수끼리 더해 답을 쓰세요.', columns: ['식', '자연수 합', '분수 합', '답'], cells: [['1과 5분의 1 + 2와 5분의 2', '', '', '']], answer: '3, 5분의 3, 3과 5분의 3' },
        { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '2와 7분의 3 + 1과 7분의 2 = ___과 7분의 ___', answer: '3, 5' },
        { type: 'choice', prompt: '분모는 어떻게 쓸까요? ○ 하세요.', options: ['그대로 써요', '더해요'], answer: '그대로 써요' },
        { type: 'short', prompt: '1과 4분의 1 + 1과 4분의 2를 계산해 보세요.', answer: '2와 4분의 3' },
      ],
      diff: {
        easy: '카드를 놓자마자 맞는 자리에 초록 테두리가 생기고, 같은 식을 단계별로 따라가요.',
        base: '카드를 모두 놓은 뒤 확인을 눌러 맞았는지 알아보아요.',
        challenge: '올림이 있는 식이 섞여 있고, 틀린 계산을 바르게 고친 설명을 골라요.',
      },
      notes: '자주 보이는 어려움: ① 분모도 더한다(3과 6분의 2). ② 분수 부분의 합이 가분수인데 자연수로 올리지 않는다(3과 5분의 7). ③ 자연수 부분만 더하고 분수 부분을 빠뜨린다. 대분수를 가분수로 고쳐 더하는 방법은 이 단원에서 나중에 비교로 다루어도 좋으나, 이번 차시는 자연수와 분수를 나누어 더하는 방법에 집중한다.',
    }),
    // ───────────────────────── 5차시 (core · representation) ─────────────────────────
    mk(5, {
      title: '색칠한 조각을 덜어 내고 남은 양 구하기',
      objective: '분모가 같은 두 진분수의 뺄셈을 색칠한 조각에서 덜어 낸 뒤 남은 조각 수로 구하고, 분모는 그대로 쓴다고 말할 수 있다.',
      ill: 'a paper pizza with six of eight slices left on the plate and two slices being lifted away on a spatula by a smiling child',
      sceneText: '먹고 남은 피자는?', kind: 0,
      intro: [
        '"피자 8조각 가운데 6조각이 남아 있어요. 4조각을 더 먹으면 몇 조각이 남을까요?" 칠판 피자에서 조각 4개를 지워 보인다. "남은 피자는 전체의 얼마예요?"라고 묻고 8분의 2라는 답을 이끈다. "8분의 1이 6개에서 4개를 덜어 내면 2개"라고 말하게 하고, 분모 8은 왜 그대로인지 한 명에게 말하게 한다. 0분의 2 같은 답이 나오면 활동 3에서 다시 따진다.',
        '피자 8조각 가운데 6조각이 남아 있어요. 4조각을 더 먹으면 남은 피자는 전체의 얼마일까요?',
      ],
      acts: [
        A('a1', '활동 1. 색칠한 조각 덜어 내기', 'fraction',
          '색칠된 조각을 눌러 덜어 내면 남은 양이 분수로 나와요. 남은 양만 색칠해 두어요.',
          '"7분의 5에서 7분의 2를 빼면 7분의 1이 몇 개 남지요?" 조각을 하나씩 눌러 지우며 세게 한다. 지운 조각 수(2)를 답으로 쓰는 학생에게는 "남은 조각이 어느 쪽이에요?"라고 물어 색칠이 남은 칸만 세게 한다.',
          FR({ showTerms: true }, { hideFraction: true }),
          [
            { prompt: '7분의 5가 색칠되어 있어요. 7분의 2를 덜어 내고 남은 양만 색칠해 두세요.', toolOptions: { shape: 'strip', startN: 7, min: 7, max: 7 }, state: { n: 7, colored: [0, 1, 2, 3, 4] }, target: { den: 7, num: 3 }, difficulty: 0.1 },
            { prompt: '피자 8조각 가운데 6조각이 남아 있어요. 4조각을 더 먹은 뒤 남은 양만 색칠해 두세요.', toolOptions: { startN: 8, min: 8, max: 8 }, state: { n: 8, colored: [0, 1, 2, 3, 4, 5] }, target: { den: 8, num: 2 }, difficulty: 0.12 },
            { prompt: '9분의 8이 색칠되어 있어요. 9분의 3을 덜어 내고 남은 양만 색칠해 두세요.', toolOptions: { shape: 'strip', startN: 9, min: 9, max: 9 }, state: { n: 9, colored: [0, 1, 2, 3, 4, 5, 6, 7] }, target: { den: 9, num: 5 }, difficulty: 0.15 },
            { prompt: '더 해 보기: 12분의 9가 색칠된 피자에서 12분의 5를 덜어 내고 남은 양만 색칠해 두세요.', toolOptions: { startN: 12, min: 12, max: 12 }, state: { n: 12, colored: [0, 1, 2, 3, 4, 5, 6, 7, 8] }, target: { den: 12, num: 4 }, extra: true, difficulty: 0.22 },
          ]),
        A('a2', '활동 2. 뺄셈식과 남은 양 짝 잇기', 'mindmap',
          '뺄셈식과 남은 양을 나타낸 분수 카드를 이어요. 분모는 그대로 두고 분자끼리 빼요.',
          '"분자 6에서 2를 빼면 4예요. 분모는 어떻게 쓰나요?" 빼도 조각 크기는 그대로라고 말하게 한다. 분모끼리 빼서 0분의 4를 고르는 학생에게는 "전체를 0조각으로 나눌 수 있을까요?"라고 물어 모순을 알게 한다.',
          MM('match', '분수 빼기'),
          [
            { prompt: '뺄셈식과 남은 양 카드를 이어 보세요.', toolOptions: { slots: [{ id: 's1', label: '7분의 6 − 7분의 2' }, { id: 's2', label: '9분의 8 − 9분의 5' }], cards: [{ id: 'c1', text: '7분의 4' }, { id: 'c2', text: '9분의 3' }, { id: 'c3', text: '0분의 4', why: '분모는 전체를 나눈 조각 수라서 빼지 않아요.' }] }, target: { match: { s1: 'c1', s2: 'c2' } }, difficulty: 0.12 },
            { prompt: '뺄셈식과 남은 양 카드를 이어 보세요.', toolOptions: { slots: [{ id: 't1', label: '10분의 9 − 10분의 4' }, { id: 't2', label: '11분의 7 − 11분의 6' }, { id: 't3', label: '12분의 11 − 12분의 8' }], cards: [{ id: 'd1', text: '10분의 5' }, { id: 'd2', text: '11분의 1' }, { id: 'd3', text: '12분의 3' }, { id: 'd4', text: '10분의 13', why: '뺄셈인데 분자를 더했어요.' }] }, target: { match: { t1: 'd1', t2: 'd2', t3: 'd3' } }, difficulty: 0.2 },
            { prompt: '이야기에 맞는 남은 양 카드를 이어 보세요.', toolOptions: { slots: [{ id: 'u1', label: '케이크 8분의 7 중에서 8분의 3을 먹었어요' }, { id: 'u2', label: '리본 6분의 5 m에서 6분의 2 m를 잘랐어요' }], cards: [{ id: 'e1', text: '8분의 4' }, { id: 'e2', text: '6분의 3 m' }, { id: 'e3', text: '8분의 10' }, { id: 'e4', text: '6분의 7 m' }] }, target: { match: { u1: 'e1', u2: 'e2' } }, difficulty: 0.22,
              conclude: '남은 양을 구할 때는 가진 양에서 먹은 양을 빼고, 분모는 그대로 써요.' },
            { prompt: '더 해 보기: 뺄셈식과 남은 양 카드를 이어 보세요. 분모가 서로 달라요.', toolOptions: { slots: [{ id: 'v1', label: '13분의 12 − 13분의 7' }, { id: 'v2', label: '14분의 9 − 14분의 4' }], cards: [{ id: 'f1', text: '13분의 5' }, { id: 'f2', text: '14분의 5' }, { id: 'f3', text: '27분의 5' }, { id: 'f4', text: '13분의 19' }] }, target: { match: { v1: 'f1', v2: 'f2' } }, extra: true, difficulty: 0.25 },
          ]),
        A('a3', '활동 3. 분모끼리 뺀 계산 바로잡기', 'mindmap',
          '분수의 뺄셈에서도 분모는 그대로예요. 바르게 말한 카드만 바구니에 넣어요.',
          '"분모도 같이 빼면 어떤 일이 생길까요?" 8분의 5 − 8분의 2를 0분의 3이라고 쓴 학생에게 "0조각으로 나눈 피자가 있어요?"라고 묻는다. 분모는 전체를 나눈 조각 수라서 덧셈과 마찬가지로 뺄셈에서도 그대로라고 정리한다.',
          MM('pick', '분수 빼기 설명'),
          [
            { prompt: '8분의 5 − 8분의 2를 바르게 계산한 카드를 모두 골라 보세요.', toolOptions: { basket: '바른 계산', cards: [{ id: 'a', text: '8분의 3' }, { id: 'b', text: '8분의 1이 5개에서 2개를 덜어 내면 3개예요' }, { id: 'c', text: '0분의 3', why: '분모는 빼지 않아요.' }, { id: 'd', text: '8분의 7', why: '뺄셈인데 분자를 더했어요.' }] }, target: { pick: ['a', 'b'] }, difficulty: 0.15 },
            { prompt: '준호는 "10분의 8 − 10분의 3 = 10분의 11"이라고 했어요. 바르게 말한 카드를 모두 골라 보세요.', toolOptions: { basket: '바른 말', cards: [{ id: 'a', text: '뺄셈인데 분자를 더했어요' }, { id: 'b', text: '분자는 8 − 3 = 5예요' }, { id: 'c', text: '답은 10분의 5예요' }, { id: 'd', text: '분모도 10 − 10으로 빼요', why: '분모는 그대로 써요.' }, { id: 'e', text: '답은 10분의 11이 맞아요', why: '가진 양보다 남은 양이 많아질 수 없어요.' }] }, target: { pick: ['a', 'b', 'c'] }, difficulty: 0.2 },
            { prompt: '11분의 9 − 11분의 4를 바르게 계산한 카드를 모두 골라 보세요.', toolOptions: { basket: '바른 계산', cards: [{ id: 'a', text: '11분의 5' }, { id: 'b', text: '11분의 1이 9개에서 4개를 덜어 내요' }, { id: 'c', text: '0분의 5', why: '분모는 빼지 않아요.' }, { id: 'd', text: '22분의 5', why: '분모는 11 그대로예요.' }] }, target: { pick: ['a', 'b'] }, difficulty: 0.22 },
          ]),
      ],
      wrap: '"분모가 같은 분수의 뺄셈은 어떻게 해요?" 분모는 그대로 두고 분자끼리 뺀다는 말이 나오는지 듣는다. 출구 2번에서 10분의 3을 색칠한 학생은 남은 양이 아니라 덜어 낸 양을 색칠한 것이므로 활동 1의 첫 문항 그림으로 다시 짚어 준다.',
      exit: [
        { type: 'choice', prompt: '12분의 11 − 12분의 5를 바르게 계산한 것은 무엇인가요?', options: ['12분의 6', '0분의 6', '12분의 16'], answer: 0, difficulty: 0.15, explain: '분모 12는 그대로 두고 분자 11에서 5를 빼요.' },
        { type: 'tool', tool: 'fraction', options: { shape: 'strip', startN: 10, min: 10, max: 10 }, state: { n: 10, colored: [0, 1, 2, 3, 4, 5, 6, 7, 8] }, prompt: '10분의 9가 색칠되어 있어요. 10분의 4를 덜어 내고 남은 양만 색칠해 두세요.', target: { den: 10, num: 5 }, difficulty: 0.15 },
        { type: 'short', prompt: '분모가 같은 분수의 뺄셈에서 분모를 그대로 쓰는 까닭을 써 보세요.', answer: '빼도 조각의 크기는 그대로이고 조각 수만 줄어들기 때문이다.' },
      ],
      ws: [
        { type: 'figure', prompt: '색칠한 조각 가운데 일부를 덜어 낸다고 생각하고 남은 양을 분수로 쓰세요.', tool: 'fraction', options: { shape: 'strip', frame: true }, figures: [
          { state: { n: 6, colored: [0, 1, 2, 3, 4] }, caption: '6분의 5 − 6분의 2 = (     )' }], answer: '6분의 3' },
        { type: 'table', prompt: '뺄셈식의 남은 양을 쓰세요.', columns: ['식', '분자 계산', '답'], cells: [['9분의 7 − 9분의 3', '7 − 3 =', ''], ['14분의 11 − 14분의 6', '', ''], ['8분의 8 − 8분의 5', '', '']], answer: '9분의 4, 14분의 5, 8분의 3' },
        { type: 'choice', prompt: '"15분의 13 − 15분의 6 = 0분의 7"이라고 쓴 친구에게 해 줄 말에 ○ 하세요.', options: ['"분모는 빼지 않고 그대로 15로 써요"', '"분모도 더해야 해요"', '"맞아요"'], answer: '"분모는 빼지 않고 그대로 15로 써요"' },
        { type: 'blank', prompt: '계산해 보세요.', text: '13분의 12 − 13분의 9 = ___ ,  16분의 15 − 16분의 4 = ___', answer: '13분의 3, 16분의 11' },
        { type: 'short', prompt: '남은 양을 구하는 이야기 문제를 하나 만들어 식으로 써 보세요.' },
      ],
      easyNote: '분모는 전체를 나눈 조각 수라서 빼도 그대로예요. 색칠한 조각에서 지운 만큼 빼서 남은 조각을 세어요.',
      easy: [
        { type: 'figure', prompt: '색칠한 조각이 몇 개 남는지 쓰세요.', tool: 'fraction', options: { shape: 'strip', frame: true }, figures: [{ state: { n: 5, colored: [0, 1, 2, 3] }, caption: '5분의 4 − 5분의 1 = (     )' }], answer: '5분의 3' },
        { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '7분의 6 − 7분의 2 = 7분의 ___', answer: '4' },
        { type: 'choice', prompt: '분모는 어떻게 쓸까요? ○ 하세요.', options: ['그대로 써요', '빼요'], answer: '그대로 써요' },
        { type: 'draw', prompt: '띠를 똑같이 8칸으로 나누고 8분의 6에서 8분의 3을 덜어 내는 그림을 그려 보세요.' },
      ],
      diff: {
        easy: '분자와 분모의 뜻이 글자로 보이고, 색칠한 조각 수가 바로 분수로 나타나요.',
        base: '조각을 눌러 덜어 내고 남은 분수를 스스로 읽어요.',
        challenge: '분수 글자 없이 조각만 보고 남은 양을 색칠하고, 분모가 서로 다른 식에서 같은 규칙을 적용해요.',
      },
      notes: '자주 보이는 어려움: ① 분모끼리 뺀다(0분의 3). ② 뺄셈인데 분자를 더한다. ③ 덜어 낸 조각 수를 답으로 쓴다(7분의 2) → 남은 조각이 답. 출구 3번(서술)은 "조각 크기가 그대로"라는 까닭이 있는지 본다. 같은 오개념을 덧셈에서도 짚었으므로 두 연산의 닮은 점을 한 문장으로 말하게 하면 좋다.',
    }),
    // ───────────────────────── 6차시 (practice · representation) ─────────────────────────
    mk(6, {
      title: '수직선에서 뒤로 세어 분수의 차 찾기',
      objective: '분모가 같은 진분수의 뺄셈을 수직선에서 뒤로 세어 구하고, 분모까지 빼거나 분자를 더한 계산의 잘못을 찾아 고칠 수 있다.',
      ill: 'a paper number line with small tick marks and a frog hopping backwards from one tick to another, with fraction labels on little flags beside it',
      sceneText: '뒤로 세어 볼까?', kind: 3,
      intro: [
        '"개구리가 10분의 8 지점에 있어요. 10분의 5만큼 뒤로 뛰면 어디에 닿을까요?" 수직선을 그리고 작은 눈금을 하나씩 짚으며 뒤로 세어 10분의 3에 닿는 것을 보여 준다. "뺄셈도 수직선에서 뒤로 가면 돼요." 어느 눈금에 닿았는지 말하게 하고, 이동한 칸 수와 닿은 곳을 혼동하는 학생을 눈여겨본다.',
        '개구리가 수직선의 10분의 8 지점에서 10분의 5만큼 뒤로 뛰었어요. 어디에 닿을까요?',
      ],
      acts: [
        A('a1', '활동 1. 수직선에서 뺀 값의 자리 찾기', 'numberline',
          '큰 수에서 작은 수만큼 뒤로 세어 남은 곳에 점을 놓아요. 분모는 눈금 칸 수와 같아요.',
          '"8분의 7에서 8분의 5만큼 뒤로 가면 눈금 몇 칸을 가나요?" 5칸 뒤로 가서 닿은 눈금을 읽게 한다. 뛴 칸 수(5)에 점을 놓는 학생에게는 출발점부터 다시 세어 보게 한다.',
          NL(8, { max: 1, mixed: false }),
          [
            { prompt: '8분의 7 − 8분의 5의 값을 수직선에 점으로 나타내 보세요.', toolOptions: { mode: 'place', min: 0, max: 1, step: 1, sub: 8, den: 8, format: 'frac', count: 1 }, target: { points: ['2/8'] }, difficulty: 0.12 },
            { prompt: '10분의 8 − 10분의 5의 값을 수직선에 점으로 나타내 보세요.', toolOptions: { mode: 'place', min: 0, max: 1, step: 1, sub: 10, den: 10, format: 'frac', count: 1 }, target: { points: ['3/10'] }, difficulty: 0.15 },
            { prompt: '12분의 10 − 12분의 7의 값을 수직선에 점으로 나타내 보세요.', toolOptions: { mode: 'place', min: 0, max: 1, step: 1, sub: 12, den: 12, format: 'frac', count: 1 }, target: { points: ['3/12'] }, difficulty: 0.2 },
            { prompt: '더 해 보기: 5분의 4 − 5분의 3의 값을 수직선에 점으로 나타내 보세요.', toolOptions: { mode: 'place', min: 0, max: 1, step: 1, sub: 5, den: 5, format: 'frac', count: 1 }, target: { points: ['1/5'] }, extra: true, difficulty: 0.22 },
          ]),
        A('a2', '활동 2. 틀린 식 찾아 나누기', 'mindmap',
          '계산이 틀린 식을 찾고, 어떤 실수를 했는지 이름을 붙여 나누어요.',
          '"어느 식이 이상한가요? 가진 양보다 남은 양이 더 많아질 수 있을까요?" 분자를 더한 식이나 분모를 뺀 식은 소리 내어 읽으면 어색하다고 느끼게 한다. 식을 읽을 때 분모가 0이 되는 것이 왜 안 되는지 말하게 한다.',
          MM('pick', '틀린 식'),
          [
            { prompt: '계산이 틀린 식을 모두 골라 보세요.', toolOptions: { basket: '틀린 식', cards: [{ id: 'a', text: '5분의 4 − 5분의 1 = 5분의 3' }, { id: 'b', text: '8분의 7 − 8분의 2 = 0분의 5' }, { id: 'c', text: '9분의 6 − 9분의 4 = 9분의 2' }, { id: 'd', text: '10분의 9 − 10분의 3 = 10분의 12' }] }, target: { pick: ['b', 'd'] }, difficulty: 0.12 },
            { prompt: '이번에는 분모가 더 큰 식이에요. 계산이 틀린 식을 모두 골라 보세요.', toolOptions: { basket: '틀린 식', cards: [{ id: 'a', text: '12분의 11 − 12분의 3 = 12분의 8' }, { id: 'b', text: '6분의 5 − 6분의 1 = 0분의 4' }, { id: 'c', text: '13분의 10 − 13분의 6 = 13분의 4' }, { id: 'd', text: '9분의 8 − 9분의 2 = 9분의 10' }] }, target: { pick: ['b', 'd'] }, difficulty: 0.18 },
            { prompt: '계산이 틀린 식을 모두 골라 보세요. 분모는 맞아도 분자가 틀린 식이 있어요.', toolOptions: { basket: '틀린 식', cards: [{ id: 'a', text: '10분의 7 − 10분의 2 = 10분의 5' }, { id: 'b', text: '14분의 9 − 14분의 4 = 14분의 6' }, { id: 'c', text: '8분의 5 − 8분의 3 = 8분의 2' }, { id: 'd', text: '11분의 8 − 11분의 5 = 11분의 4' }] }, target: { pick: ['b', 'd'] }, difficulty: 0.25,
              conclude: '분모는 그대로 두고 분자만 빼야 해요. 14분의 9 − 14분의 4는 14분의 5, 11분의 8 − 11분의 5는 11분의 3이에요.' },
            { prompt: '더 해 보기: 틀린 식을 어떤 실수를 했는지에 따라 나누어 보세요.', toolOptions: { mode: 'sort', slots: ['분모까지 뺐어요', '분자를 더했어요'], cards: [{ id: 'x1', text: '9분의 6 − 9분의 2 = 0분의 4' }, { id: 'x2', text: '9분의 6 − 9분의 2 = 9분의 8' }, { id: 'x3', text: '7분의 5 − 7분의 1 = 0분의 4' }, { id: 'x4', text: '7분의 5 − 7분의 1 = 7분의 6' }] }, target: { sort: { '분모까지 뺐어요': ['x1', 'x3'], '분자를 더했어요': ['x2', 'x4'] } }, extra: true, difficulty: 0.28 },
          ]),
        A('a3', '활동 3. 식의 빈칸 채워 바로잡기', 'mindmap',
          '분모는 그대로 두고 분자끼리 뺀 값을 빈칸 카드로 채워요.',
          '"분모는 이미 쓰여 있어요. 빈칸에는 분자만 들어가요." 분자 카드 가운데 분모끼리 뺀 값이나 더한 값이 섞여 있다고 알려 주고 하나씩 직접 계산해 보게 한다. 큰 수에서 작은 수를 빼야 하는데 순서를 바꿔 빼는 학생에게는 수직선의 뒤로 가기를 떠올리게 한다.',
          MM('fill', '빈칸 채우기'),
          [
            { prompt: '빈칸에 알맞은 분자를 골라 넣어 보세요.', toolOptions: { slots: [{ id: 'f1', label: '11분의 9 − 11분의 3 = 11분의 ___' }, { id: 'f2', label: '12분의 8 − 12분의 5 = 12분의 ___' }], cards: ['6', '3', '12', '13'] }, target: { fill: { f1: '6', f2: '3' } }, difficulty: 0.15 },
            { prompt: '빈칸에 알맞은 분자를 골라 넣어 보세요. 빈칸이 세 개예요.', toolOptions: { slots: [{ id: 'g1', label: '15분의 14 − 15분의 6 = 15분의 ___' }, { id: 'g2', label: '16분의 13 − 16분의 4 = 16분의 ___' }, { id: 'g3', label: '17분의 15 − 17분의 11 = 17분의 ___' }], cards: ['8', '9', '4', '29'] }, target: { fill: { g1: '8', g2: '9', g3: '4' } }, difficulty: 0.25 },
            { prompt: '빈칸에 알맞은 분자를 골라 넣어 보세요.', toolOptions: { slots: [{ id: 'h1', label: '18분의 17 − 18분의 9 = 18분의 ___' }, { id: 'h2', label: '19분의 12 − 19분의 7 = 19분의 ___' }], cards: ['8', '5', '26', '19'] }, target: { fill: { h1: '8', h2: '5' } }, difficulty: 0.22 },
          ]),
      ],
      wrap: '"분수의 뺄셈에서 자주 하는 실수 두 가지를 말해 볼까요?" 분모까지 빼는 것과 분자를 더하는 것이 나오는지 듣는다. 출구 2번에서 점의 자리를 틀린 학생은 출발점에서 몇 칸 뒤로 갔는지 손가락으로 다시 세어 보게 한다.',
      exit: [
        { type: 'choice', prompt: '13분의 12 − 13분의 8을 바르게 계산한 것은 무엇인가요?', options: ['13분의 4', '0분의 4', '13분의 20'], answer: 0, difficulty: 0.15, explain: '분모 13은 그대로 두고 분자 12에서 8을 빼요.' },
        { type: 'tool', tool: 'numberline', options: { mode: 'place', min: 0, max: 1, step: 1, sub: 10, den: 10, format: 'frac', labels: 'major', count: 1 }, prompt: '10분의 9 − 10분의 2의 값을 수직선에 점으로 나타내 보세요.', target: { points: ['7/10'] }, difficulty: 0.2 },
        { type: 'short', prompt: '"8분의 5 − 8분의 2 = 0분의 3"이라고 쓴 친구에게 하고 싶은 말을 써 보세요.', answer: '분모는 전체를 나눈 조각 수라서 빼지 않고 8 그대로 써야 하니 답은 8분의 3이라고 알려 준다.' },
      ],
      ws: [
        { type: 'table', prompt: '식이 맞으면 ○, 틀리면 바르게 고쳐 쓰세요.', columns: ['식', '○ 또는 바른 답'], cells: [['9분의 7 − 9분의 4 = 9분의 3', ''], ['11분의 8 − 11분의 3 = 0분의 5', ''], ['14분의 9 − 14분의 5 = 14분의 14', '']], answer: '○, 11분의 5, 14분의 4' },
        { type: 'blank', prompt: '계산해 보세요.', text: '18분의 17 − 18분의 11 = ___ ,  20분의 15 − 20분의 6 = ___', answer: '18분의 6, 20분의 9' },
        { type: 'choice', prompt: '7분의 6 − 7분의 4를 수직선에서 구하는 방법으로 알맞은 것에 ○ 하세요.', options: ['7분의 6에서 앞으로 4칸 가요', '7분의 6에서 뒤로 4칸 가요', '0에서 4칸 가요'], answer: '7분의 6에서 뒤로 4칸 가요' },
        { type: 'short', prompt: '분모까지 빼면 안 되는 까닭을 수직선 눈금으로 설명해 보세요.', answer: '눈금 한 칸의 크기는 분모가 정하고 뒤로 가도 눈금 간격은 그대로이므로 분모는 그대로 쓴다.' },
        { type: 'draw', prompt: '수직선에 10분의 7에서 10분의 3만큼 뒤로 가는 화살표를 그리고 도착한 곳을 분수로 쓰세요.', answer: '10분의 4' },
      ],
      easyNote: '큰 수에서 작은 수만큼 뒤로 세어요. 분모는 그대로 쓰고 분자만 빼요.',
      easy: [
        { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '9분의 7 − 9분의 4 = 9분의 ___', answer: '3' },
        { type: 'choice', prompt: '바르게 계산한 식에 ○ 하세요.', options: ['6분의 5 − 6분의 2 = 6분의 3', '6분의 5 − 6분의 2 = 0분의 3'], answer: '6분의 5 − 6분의 2 = 6분의 3' },
        { type: 'table', prompt: '뺄셈의 답을 쓰세요.', columns: ['식', '답'], cells: [['8분의 7 − 8분의 3', ''], ['10분의 9 − 10분의 6', '']], answer: '8분의 4, 10분의 3' },
        { type: 'draw', prompt: '수직선 위에 5분의 4에서 5분의 1만큼 뒤로 가는 화살표를 그려 보세요.' },
      ],
      diff: {
        easy: '수직선의 모든 눈금에 수가 쓰여 있고 점을 놓을 때마다 지금 수가 보여요.',
        base: '0과 1만 쓰여 있어 작은 눈금을 세어 점의 자리를 찾아요.',
        challenge: '양 끝 수만 보이고, 틀린 식을 어떤 실수인지에 따라 나누는 문항이 더 있어요.',
      },
      notes: '자주 보이는 어려움: ① 분모까지 뺀다(0분의 5). ② 분자를 더한다(10분의 12). ③ 수직선에서 뒤로 간 칸 수에 점을 놓는다(뛴 칸 수와 도착한 곳을 혼동) → 출발점부터 센다. ④ 큰 수와 작은 수의 순서를 바꿔 뺀다. 5차시에서 조각 그림으로 확인한 규칙을 수직선과 식으로 옮기는 연습 시간이다.',
    }),
    // ───────────────────────── 7차시 (extend · representation) ─────────────────────────
    mk(7, {
      title: '1과 자연수에서 분수를 빼는 방법 찾기',
      objective: '1이나 자연수에서 진분수를 뺄 때, 1을 분모가 같은 가분수로 바꾸거나 자연수에서 1을 받아내려 계산할 수 있다.',
      ill: 'a whole paper pizza and two more whole pizzas stacked beside it, with one slice being cut into equal parts and a child pointing at the slices that were taken away',
      sceneText: '1에서 빼 볼까?', kind: 1,
      intro: [
        '"피자 한 판에서 8분의 3을 먹었어요. 남은 피자는 얼마일까요?" 한 판은 8분의 8이라고 말하게 하고, 8분의 8에서 8분의 3을 빼서 8분의 5가 되는 것을 그림으로 보인다. "1을 분모가 8인 분수로 바꾸면 8분의 몇이에요?" 하고 묻는다. 1 − 8분의 3을 8분의 3으로 쓰거나 1분의 5로 쓰는 답이 나오면 칠판에 적어 두고 활동에서 다시 본다.',
        '피자 한 판에서 8분의 3을 먹었어요. 남은 피자는 전체의 얼마일까요?',
      ],
      acts: [
        A('a1', '활동 1. 한 판에서 일부 덜어 내기', 'fraction',
          '모두 색칠된 띠(1)에서 분수만큼 덜어 내고 남은 양을 색칠해요. 1은 분모와 같은 분수로 나타내요.',
          '"1은 8분의 몇이에요?" 8조각이 모두 색칠되었으니 8분의 8이라고 말하게 한다. 덜어 낸 3조각을 답으로 쓰는 학생에게는 "남은 조각이 어느 쪽이에요?"라고 되묻는다. 1 − 분수를 분모가 1인 분수로 계산하려는 학생에게는 조각 그림으로 돌아가 분모가 8이라는 것을 짚어 준다.',
          FR({ showTerms: true }, { hideFraction: true }),
          [
            { prompt: '띠 한 줄(1)이 모두 색칠되어 있어요. 1 − 8분의 3을 구해 남은 양만 색칠해 두세요.', toolOptions: { shape: 'strip', startN: 8, min: 8, max: 8 }, state: { n: 8, colored: [0, 1, 2, 3, 4, 5, 6, 7] }, target: { den: 8, num: 5 }, difficulty: 0.12 },
            { prompt: '피자 한 판(1)이 모두 남아 있어요. 1 − 6분의 4를 구해 남은 양만 색칠해 두세요.', toolOptions: { startN: 6, min: 6, max: 6 }, state: { n: 6, colored: [0, 1, 2, 3, 4, 5] }, target: { den: 6, num: 2 }, difficulty: 0.15 },
            { prompt: '띠 한 줄(1)이 모두 색칠되어 있어요. 1 − 9분의 7을 구해 남은 양만 색칠해 두세요.', toolOptions: { shape: 'strip', startN: 9, min: 9, max: 9 }, state: { n: 9, colored: [0, 1, 2, 3, 4, 5, 6, 7, 8] }, target: { den: 9, num: 2 }, difficulty: 0.18 },
            { prompt: '더 해 보기: 피자 한 판(1)에서 12분의 5를 덜어 내고 남은 양만 색칠해 두세요.', toolOptions: { startN: 12, min: 12, max: 12 }, state: { n: 12, colored: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] }, target: { den: 12, num: 7 }, extra: true, difficulty: 0.22 },
          ]),
        A('a2', '활동 2. 자연수에서 분수를 뺀 값 짝 잇기', 'mindmap',
          '자연수에서 1을 받아내려 분수로 바꾼 뒤 빼요. 식과 같은 값을 이어요.',
          '"3에서 5분의 2를 빼려면 3을 어떻게 나누어 생각할까요?" 3을 2와 5분의 5로 바꾼다고 말하게 한다. 자연수 부분을 그대로 3으로 두고 분수만 5분의 2로 쓰는 학생에게는 3에서 무엇을 덜어 냈는지 그림으로 묻는다.',
          MM('match', '자연수에서 빼기'),
          [
            { prompt: '1에서 분수를 뺀 식과 같은 값 카드를 이어 보세요.', toolOptions: { slots: [{ id: 's1', label: '1 − 7분의 3' }, { id: 's2', label: '1 − 9분의 4' }], cards: [{ id: 'c1', text: '7분의 4' }, { id: 'c2', text: '9분의 5' }, { id: 'c3', text: '0분의 1', why: '1은 분모가 같은 분수 7분의 7로 바꿔 분자끼리 빼요.' }] }, target: { match: { s1: 'c1', s2: 'c2' } }, difficulty: 0.15 },
            { prompt: '자연수에서 분수를 뺀 식과 같은 값 카드를 이어 보세요.', toolOptions: { slots: [{ id: 't1', label: '2 − 5분의 2' }, { id: 't2', label: '3 − 4분의 1' }], cards: [{ id: 'd1', text: '1과 5분의 3' }, { id: 'd2', text: '2와 4분의 3' }, { id: 'd3', text: '2와 5분의 3', why: '2에서 1을 받아내려 1과 5분의 5로 바꾸어야 해요.' }, { id: 'd4', text: '3과 4분의 1' }] }, target: { match: { t1: 'd1', t2: 'd2' } }, difficulty: 0.22,
              conclude: '2 = 1과 5분의 5이므로 2 − 5분의 2 = 1과 5분의 3이에요.' },
            { prompt: '식과 같은 값 카드를 이어 보세요.', toolOptions: { slots: [{ id: 'u1', label: '4 − 7분의 5' }, { id: 'u2', label: '3 − 8분의 7' }, { id: 'u3', label: '5 − 6분의 1' }], cards: [{ id: 'e1', text: '3과 7분의 2' }, { id: 'e2', text: '2와 8분의 1' }, { id: 'e3', text: '4와 6분의 5' }, { id: 'e4', text: '4와 6분의 1' }, { id: 'e5', text: '3과 7분의 5' }] }, target: { match: { u1: 'e1', u2: 'e2', u3: 'e3' } }, difficulty: 0.28 },
            { prompt: '더 해 보기: 식과 같은 값 카드를 이어 보세요.', toolOptions: { slots: [{ id: 'v1', label: '6 − 9분의 4' }, { id: 'v2', label: '10 − 3분의 2' }], cards: [{ id: 'f1', text: '5와 9분의 5' }, { id: 'f2', text: '9와 3분의 1' }, { id: 'f3', text: '5와 9분의 4' }, { id: 'f4', text: '9와 3분의 2' }] }, target: { match: { v1: 'f1', v2: 'f2' } }, extra: true, difficulty: 0.3 },
          ]),
        A('a3', '활동 3. 받아내림 계산 차례 놓기', 'mindmap',
          '자연수에서 1을 받아내려 분수로 바꾼 뒤 분수끼리 빼요. 계산하는 차례대로 카드를 놓아요.',
          '"3에서 4분의 3을 빼려고 3을 그대로 둔 채 분수끼리만 빼려고 하면 어떤 일이 생길까요?" 4분의 3에서 뺄 분수가 없다는 것을 확인하게 한다. 받아내림한 뒤 자연수 부분을 줄이는 것을 빠뜨린 학생에게는 3이 2와 4분의 4가 되었음을 그림으로 보여 준다.',
          MM('order', '받아내림 차례'),
          [
            { prompt: '3 − 4분의 3을 계산하는 차례대로 놓아 보세요.', toolOptions: { slots: 4, cards: [
              { id: 'w1', text: '식을 써요', sub: '3 − 4분의 3' }, { id: 'w2', text: '3에서 1을 받아내려요', sub: '3 = 2와 4분의 4' },
              { id: 'w3', text: '분수끼리 빼요', sub: '4분의 4 − 4분의 3 = 4분의 1' }, { id: 'w4', text: '답을 써요', sub: '2와 4분의 1' }] },
              target: { order: ['w1', 'w2', 'w3', 'w4'] }, difficulty: 0.15 },
            { prompt: '5 − 6분의 5를 계산하는 차례대로 놓아 보세요.', toolOptions: { slots: 4, cards: [
              { id: 'x1', text: '식을 써요', sub: '5 − 6분의 5' }, { id: 'x2', text: '5에서 1을 받아내려요', sub: '5 = 4와 6분의 6' },
              { id: 'x3', text: '분수끼리 빼요', sub: '6분의 6 − 6분의 5 = 6분의 1' }, { id: 'x4', text: '답을 써요', sub: '4와 6분의 1' }] },
              target: { order: ['x1', 'x2', 'x3', 'x4'] }, difficulty: 0.2,
              predict: { q: '5에서 1을 받아내리면 자연수 부분은 얼마가 될까요?', options: ['4', '5', '6'], answer: 0 },
              conclude: '1을 받아내렸으니 자연수 부분은 하나 줄어요.' },
            { prompt: '2 − 7분의 4를 계산하는 차례대로 놓아 보세요.', toolOptions: { slots: 4, cards: [
              { id: 'y1', text: '식을 써요', sub: '2 − 7분의 4' }, { id: 'y2', text: '2에서 1을 받아내려요', sub: '2 = 1과 7분의 7' },
              { id: 'y3', text: '분수끼리 빼요', sub: '7분의 7 − 7분의 4 = 7분의 3' }, { id: 'y4', text: '답을 써요', sub: '1과 7분의 3' }] },
              target: { order: ['y1', 'y2', 'y3', 'y4'] }, difficulty: 0.25 },
          ]),
      ],
      wrap: '"자연수에서 분수를 빼려면 먼저 무엇을 하나요?" 자연수에서 1을 받아내려 분모가 같은 분수로 바꾼다는 말이 나오는지 듣는다. 출구 2번에서 4와 5분의 3을 고른 학생은 활동 3의 받아내림 카드를 다시 읽으며 자연수 부분이 줄어드는 것을 짚어 준다.',
      exit: [
        { type: 'choice', prompt: '1 − 10분의 7을 바르게 계산한 것은 무엇인가요?', options: ['10분의 3', '9분의 3', '10분의 8'], answer: 0, difficulty: 0.15, explain: '1은 10분의 10이라서 10분의 10 − 10분의 7 = 10분의 3이에요.' },
        { type: 'choice', prompt: '4 − 5분의 2를 바르게 계산한 것은 무엇인가요?', options: ['3과 5분의 3', '3과 5분의 2', '4와 5분의 3'], answer: 0, difficulty: 0.25, explain: '4 = 3과 5분의 5이므로 3과 5분의 5 − 5분의 2 = 3과 5분의 3이에요.' },
        { type: 'short', prompt: '3 − 8분의 5를 계산하는 방법을 말로 써 보세요.', answer: '3에서 1을 받아내려 2와 8분의 8로 바꾸고 8분의 8 − 8분의 5 = 8분의 3이므로 답은 2와 8분의 3이다.' },
      ],
      ws: [
        { type: 'table', prompt: '1을 받아내려 계산하고 답을 쓰세요.', columns: ['식', '받아내림 한 모양', '답'], cells: [['1 − 6분의 5', '6분의 6 − 6분의 5', ''], ['3 − 7분의 3', '', ''], ['4 − 9분의 4', '', '']], answer: '6분의 1, 2와 7분의 4, 3과 9분의 5' },
        { type: 'blank', prompt: '계산해 보세요.', text: '1 − 12분의 5 = ___ ,  2 − 5분의 1 = ___', answer: '12분의 7, 1과 5분의 4' },
        { type: 'choice', prompt: '3 − 4분의 1의 답으로 알맞은 것에 ○ 하세요.', options: ['3과 4분의 1', '2와 4분의 3', '2와 4분의 1'], answer: '2와 4분의 3' },
        { type: 'short', prompt: '"2 − 5분의 3 = 2와 5분의 3"이라고 쓴 친구에게 어디가 틀렸는지 알려 주세요.', answer: '2에서 1을 받아내려 1과 5분의 5로 바꾸고 빼야 하므로 답은 1과 5분의 2이다.' },
        { type: 'draw', prompt: '띠 세 줄을 그리고 3 − 4분의 3을 그림으로 나타내 답을 쓰세요.', answer: '2와 4분의 1' },
      ],
      easyNote: '자연수에서 1을 받아내려 분모가 같은 분수로 바꾼 뒤 빼요. 예: 2 = 1과 5분의 5',
      easy: [
        { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '1 = 7분의 ___ ,  2 = 1과 7분의 ___', answer: '7, 7' },
        { type: 'choice', prompt: '1 − 4분의 1의 답에 ○ 하세요.', options: ['4분의 3', '4분의 5'], answer: '4분의 3' },
        { type: 'table', prompt: '계산해 답을 쓰세요.', columns: ['식', '답'], cells: [['1 − 5분의 2', ''], ['2 − 3분의 1', '']], answer: '5분의 3, 1과 3분의 2' },
        { type: 'draw', prompt: '띠 한 줄을 6칸으로 나누고 1 − 6분의 2를 그림으로 나타내 보세요.' },
      ],
      diff: {
        easy: '분자와 분모의 뜻이 글자로 보이고, 색칠한 조각 수가 바로 분수로 나타나요.',
        base: '조각을 눌러 덜어 내고 남은 양을 분수로 읽어요. 카드를 모두 놓은 뒤 확인해요.',
        challenge: '분수 글자 없이 조각만 보고 남은 양을 구하고, 큰 자연수에서 빼는 식을 다뤄요.',
      },
      notes: '자주 보이는 어려움: ① 1을 분모가 1인 분수로 생각한다. ② 자연수 부분을 그대로 두고 분수만 뺀다(2 − 5분의 3 = 2와 5분의 3). ③ 받아내린 뒤 자연수 부분을 줄이지 않는다(5 − 6분의 5 = 5와 6분의 1). ④ 덜어 낸 조각 수를 답으로 쓴다. 대분수의 뺄셈은 8~9차시에서 이어서 한다.',
    }),
    // ───────────────────────── 8차시 (core · application) ─────────────────────────
    mk(8, {
      title: '자연수끼리 분수끼리 빼서 대분수 계산하기',
      objective: '분모가 같은 대분수의 뺄셈에서 분수 부분끼리 뺄 수 있으면 자연수끼리, 분수끼리 빼어 계산하고 수직선에서 그 값을 찾을 수 있다.',
      ill: 'a long paper ribbon with a short piece being cut off at one end while a child measures the leftover with a paper ruler marked in whole numbers and small fractions',
      sceneText: '자르고 남은 리본은?', kind: 3,
      intro: [
        '"리본 4와 7분의 6 m에서 1과 7분의 2 m를 잘라 썼어요. 남은 리본은 몇 m일까요?" 리본 그림에서 자연수 부분 1 m와 분수 부분을 따로 잘라 내어 보인다. "자연수끼리 빼면 얼마, 분수끼리 빼면 얼마예요?"라고 묻고 3과 7분의 4를 이끈다. 덧셈과 달리 빼고 나서 자연수로 올릴 일은 없다는 것에 주목하게 하고, 분모까지 빼서 3과 0분의 4라고 쓰는 학생은 칠판에 따로 적어 둔다.',
        '리본 4와 7분의 6 m에서 1과 7분의 2 m를 잘랐어요. 남은 리본은 몇 m일까요?',
      ],
      acts: [
        A('a1', '활동 1. 대분수의 차를 수직선에 나타내기', 'numberline',
          '자연수끼리, 분수끼리 뺀 값을 수직선에 점으로 나타내요. 큰 눈금은 자연수예요.',
          '"3과 5분의 4에서 1과 5분의 1을 빼면 자연수는 얼마가 남나요?" 자연수 부분의 차와 분수 부분의 차를 따로 말하게 한다. 점을 자연수 눈금 위에만 놓는 학생에게는 작은 눈금을 몇 칸 더 가는지 세어 보게 한다.',
          NL(5, { max: 5 }),
          [
            { prompt: '3과 5분의 4 − 1과 5분의 1의 값을 수직선에 점으로 나타내 보세요.', toolOptions: { mode: 'place', min: 0, max: 5, step: 1, sub: 5, den: 5, format: 'frac', mixed: true, count: 1 }, target: { points: ['2 3/5'] }, difficulty: 0.15 },
            { prompt: '4와 8분의 7 − 2와 8분의 3의 값을 수직선에 점으로 나타내 보세요.', toolOptions: { mode: 'place', min: 0, max: 5, step: 1, sub: 8, den: 8, format: 'frac', mixed: true, count: 1 }, target: { points: ['2 4/8'] }, difficulty: 0.2 },
            { prompt: '2와 9분의 8 − 1과 9분의 5의 값을 수직선에 점으로 나타내 보세요.', toolOptions: { mode: 'place', min: 0, max: 5, step: 1, sub: 9, den: 9, format: 'frac', mixed: true, count: 1 }, target: { points: ['1 3/9'] }, difficulty: 0.22 },
            { prompt: '더 해 보기: 5와 6분의 5 − 3과 6분의 2의 값을 수직선에 점으로 나타내 보세요.', toolOptions: { mode: 'place', min: 0, max: 6, step: 1, sub: 6, den: 6, format: 'frac', mixed: true, count: 1 }, target: { points: ['2 3/6'] }, extra: true, difficulty: 0.25 },
          ]),
        A('a2', '활동 2. 대분수 뺄셈의 답 짝짓기', 'mindmap',
          '식과 같은 답 카드를 이어요. 분수 부분끼리 뺄 수 있는 식이에요.',
          '"분모가 6인 분수에서 분모가 6인 분수를 빼면 분모는 얼마예요?" 빼도 분모는 그대로라고 말하게 한다. 분모끼리 빼서 3과 0분의 4를 고르는 학생에게는 그런 분수가 존재하는지 되묻는다. 분자를 더한 카드를 고르는 학생에게는 "가진 양보다 남은 양이 많아질까요?"라고 묻는다.',
          MM('match', '대분수 뺄셈'),
          [
            { prompt: '대분수끼리 뺀 식과 같은 답 카드를 이어 보세요.', toolOptions: { slots: [{ id: 's1', label: '5와 6분의 5 − 2와 6분의 1' }, { id: 's2', label: '7과 8분의 6 − 4와 8분의 3' }], cards: [{ id: 'c1', text: '3과 6분의 4' }, { id: 'c2', text: '3과 8분의 3' }, { id: 'c3', text: '3과 0분의 4', why: '분모는 전체를 나눈 조각 수라서 빼지 않아요.' }, { id: 'c4', text: '3과 8분의 9', why: '뺄셈인데 분자를 더했어요.' }] }, target: { match: { s1: 'c1', s2: 'c2' } }, difficulty: 0.15 },
            { prompt: '식과 같은 답 카드를 이어 보세요. 분모가 10, 11이에요.', toolOptions: { slots: [{ id: 't1', label: '8과 10분의 9 − 5와 10분의 4' }, { id: 't2', label: '9와 11분의 7 − 6과 11분의 3' }], cards: [{ id: 'd1', text: '3과 10분의 5' }, { id: 'd2', text: '3과 11분의 4' }, { id: 'd3', text: '3과 11분의 10' }, { id: 'd4', text: '3과 10분의 13' }] }, target: { match: { t1: 'd1', t2: 'd2' } }, difficulty: 0.2 },
            { prompt: '식과 같은 답 카드를 이어 보세요. 자연수 부분이 같아 답에 자연수가 없는 식도 있어요.', toolOptions: { slots: [{ id: 'u1', label: '7과 9분의 8 − 7과 9분의 3' }, { id: 'u2', label: '3과 4분의 3 − 1과 4분의 1' }, { id: 'u3', label: '5와 12분의 11 − 2와 12분의 4' }], cards: [{ id: 'e1', text: '9분의 5' }, { id: 'e2', text: '2와 4분의 2' }, { id: 'e3', text: '3과 12분의 7' }, { id: 'e4', text: '0과 9분의 5' }] }, target: { match: { u1: 'e1', u2: 'e2', u3: 'e3' } }, difficulty: 0.28 },
            { prompt: '더 해 보기: 이야기와 알맞은 남은 양 카드를 이어 보세요.', toolOptions: { slots: [{ id: 'v1', label: '밀가루 4와 7분의 5 kg에서 1과 7분의 2 kg을 썼어요' }, { id: 'v2', label: '끈 6과 8분의 7 m에서 3과 8분의 4 m를 잘랐어요' }], cards: [{ id: 'f1', text: '3과 7분의 3 kg' }, { id: 'f2', text: '3과 8분의 3 m' }, { id: 'f3', text: '3과 7분의 7 kg' }, { id: 'f4', text: '3과 8분의 11 m' }] }, target: { match: { v1: 'f1', v2: 'f2' } }, extra: true, difficulty: 0.3 },
          ]),
        A('a3', '활동 3. 바르게 계산한 설명 고르기', 'mindmap',
          '자연수끼리, 분수끼리 뺀 설명이 바른 카드만 골라요.',
          '"민지가 분수끼리 8과 2를 더했어요. 어디가 이상한가요?" 뺄셈 문제에서 분자를 더하면 가진 양보다 커진다는 것을 말하게 한다. 분수 부분이 같을 때 답에 0을 쓰는지 자연수만 쓰는지 짚는다.',
          MM('pick', '대분수 뺄셈 설명'),
          [
            { prompt: '7과 8분의 7 − 2와 8분의 3을 바르게 계산한 설명을 모두 골라 보세요.', toolOptions: { basket: '바른 설명', cards: [{ id: 'a', text: '자연수 7 − 2 = 5예요' }, { id: 'b', text: '8분의 7 − 8분의 3 = 8분의 4예요' }, { id: 'c', text: '답은 5와 8분의 4예요' }, { id: 'd', text: '답은 5와 0분의 4예요', why: '분모는 빼지 않아요.' }, { id: 'e', text: '자연수끼리는 더해요', why: '뺄셈이라 자연수끼리도 빼요.' }] }, target: { pick: ['a', 'b', 'c'] }, difficulty: 0.15 },
            { prompt: '민지는 "5와 9분의 8 − 3과 9분의 2 = 2와 9분의 10"이라고 했어요. 바르게 말한 카드를 모두 골라 보세요.', toolOptions: { basket: '바른 말', cards: [{ id: 'a', text: '분수끼리는 8 − 2 = 6이에요' }, { id: 'b', text: '답은 2와 9분의 6이에요' }, { id: 'c', text: '뺄셈인데 분자를 더했어요' }, { id: 'd', text: '답은 2와 9분의 10이 맞아요', why: '뺄셈에서는 9분의 8보다 큰 수가 나올 수 없어요.' }, { id: 'e', text: '분모 9도 같이 빼요', why: '분모는 그대로 써요.' }] }, target: { pick: ['a', 'b', 'c'] }, difficulty: 0.22 },
            { prompt: '4와 6분의 5 − 1과 6분의 5를 바르게 계산한 설명을 모두 골라 보세요. 분수 부분이 같아요.', toolOptions: { basket: '바른 설명', cards: [{ id: 'a', text: '분수 부분을 빼면 0이 돼요' }, { id: 'b', text: '답은 자연수 3이에요' }, { id: 'c', text: '답은 3과 6분의 1이에요', why: '같은 수를 빼면 분수 부분이 0이에요.' }, { id: 'd', text: '답은 4와 6분의 0이에요', why: '자연수 부분도 4 − 1 = 3이에요.' }] }, target: { pick: ['a', 'b'] }, difficulty: 0.25 },
          ]),
      ],
      wrap: '"대분수의 뺄셈은 어떤 순서로 하나요?" 자연수끼리, 분수끼리 뺀 뒤 이어 쓴다는 말이 나오는지 듣는다. 출구 1번에서 분모를 0으로 쓴 학생은 활동 2의 첫 문항으로 돌아가 분모가 무엇인지 짝에게 설명하게 한다.',
      exit: [
        { type: 'choice', prompt: '6과 7분의 5 − 2와 7분의 3을 바르게 계산한 것은 무엇인가요?', options: ['4와 7분의 2', '4와 0분의 2', '8과 7분의 8'], answer: 0, difficulty: 0.15, explain: '자연수 6 − 2 = 4, 분수 7분의 5 − 7분의 3 = 7분의 2예요.' },
        { type: 'tool', tool: 'numberline', options: { mode: 'place', min: 0, max: 6, step: 1, sub: 6, den: 6, format: 'frac', mixed: true, labels: 'major', count: 1 }, prompt: '4와 6분의 5 − 1과 6분의 2의 값을 수직선에 점으로 나타내 보세요.', target: { points: ['3 3/6'] }, difficulty: 0.22 },
        { type: 'short', prompt: '4와 9분의 7 − 1과 9분의 2를 계산하는 차례를 말로 써 보세요.', answer: '자연수끼리 4 − 1 = 3, 분수끼리 9분의 7 − 9분의 2 = 9분의 5를 구해 이어 쓰면 3과 9분의 5이다.' },
      ],
      ws: [
        { type: 'table', prompt: '자연수끼리, 분수끼리 빼서 답을 쓰세요.', columns: ['식', '자연수 차', '분수 차', '답'], cells: [['5와 7분의 6 − 2와 7분의 1', '', '', ''], ['4와 9분의 8 − 1과 9분의 4', '', '', '']], answer: '3과 7분의 5, 3과 9분의 4' },
        { type: 'blank', prompt: '계산해 보세요.', text: '8과 10분의 9 − 3과 10분의 4 = ___ ,  6과 5분의 4 − 2와 5분의 4 = ___', answer: '5와 10분의 5, 4' },
        { type: 'choice', prompt: '7과 8분의 7 − 4와 8분의 2의 답에 ○ 하세요.', options: ['3과 8분의 5', '3과 0분의 5', '11과 8분의 9'], answer: '3과 8분의 5' },
        { type: 'short', prompt: '"6과 7분의 6 − 2와 7분의 3 = 4와 7분의 9"라고 쓴 친구에게 어디가 틀렸는지 알려 주세요.', answer: '뺄셈인데 분자를 더했다. 분수끼리 7분의 6 − 7분의 3 = 7분의 3이므로 답은 4와 7분의 3이다.' },
        { type: 'draw', prompt: '길이가 3과 4분의 3 m인 끈에서 1과 4분의 1 m를 자른 남은 길이를 그림으로 나타내 구하세요.', answer: '2와 4분의 2 m' },
      ],
      easyNote: '자연수끼리 빼고, 분수끼리 빼서 이어 써요. 분모는 그대로 써요.',
      easy: [
        { type: 'table', prompt: '자연수끼리, 분수끼리 빼서 답을 쓰세요.', columns: ['식', '자연수 차', '분수 차', '답'], cells: [['4와 5분의 4 − 1과 5분의 1', '', '', '']], answer: '3, 5분의 3, 3과 5분의 3' },
        { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '5와 7분의 6 − 2와 7분의 2 = ___과 7분의 ___', answer: '3, 4' },
        { type: 'choice', prompt: '분모는 어떻게 쓸까요? ○ 하세요.', options: ['그대로 써요', '빼요'], answer: '그대로 써요' },
        { type: 'short', prompt: '3과 4분의 3 − 1과 4분의 2를 계산해 보세요.', answer: '2와 4분의 1' },
      ],
      diff: {
        easy: '수직선의 모든 눈금에 수가 쓰여 있고 점을 놓을 때마다 지금 수가 보여요. 카드는 맞는 자리에 놓으면 초록 테두리가 생겨요.',
        base: '큰 눈금(자연수)만 쓰여 있어 작은 눈금을 세어 점의 자리를 찾아요.',
        challenge: '수직선 양 끝 수만 보이고, 분수 부분이 같은 식이나 이야기 문제까지 풀어요.',
      },
      notes: '자주 보이는 어려움: ① 분모까지 뺀다(3과 0분의 4). ② 분수끼리 뺄 때 분자를 더한다. ③ 분수 부분이 같을 때 0을 어떻게 쓸지 몰라 4와 6분의 0처럼 쓴다 → 분수 부분이 0이면 쓰지 않는다. 이 차시의 식은 분수 부분끼리 뺄 수 있는 것만 다룬다. 받아내림이 필요한 식은 9차시에서 이어서 한다.',
    }),
    // ───────────────────────── 9차시 (practice · application) ─────────────────────────
    mk(9, {
      title: '분수 부분이 모자랄 때 자연수에서 1 받아내리기',
      objective: '분수 부분끼리 뺄 수 없는 대분수의 뺄셈에서 자연수 1을 분수로 바꾸어 받아내려 계산하고, 답을 덧셈으로 확인할 수 있다.',
      ill: 'a paper ribbon of whole length with one whole piece being cut into equal small parts and handed over to the fraction side, while a child checks the total by adding two pieces back together',
      sceneText: '1을 빌려 올까?', kind: 2,
      intro: [
        '"물통에 3과 5분의 1 L가 있어요. 1과 5분의 3 L를 쓰면 얼마가 남을까요? 5분의 1에서 5분의 3을 뺄 수 있을까요?" 뺄 수 없다는 학생의 말을 받아 "그럴 때 어디서 빌려 올 수 있을까요?"라고 묻는다. 자연수 3에서 1을 받아내려 5분의 5로 바꾸는 방법을 그림으로 보인다. 분수끼리 큰 수에서 작은 수를 거꾸로 빼는 학생이 있으면 그대로 적어 두었다가 활동 3에서 다시 따진다.',
        '물통에 물이 3과 5분의 1 L 있었는데 1과 5분의 3 L를 썼어요. 5분의 1에서 5분의 3을 뺄 수 있을까요?',
      ],
      acts: [
        A('a1', '활동 1. 받아내림 계산 차례 놓기', 'mindmap',
          '분수 부분이 모자라면 자연수에서 1을 받아내려 분수 부분에 더해요. 계산하는 차례대로 카드를 놓아요.',
          '"분수끼리 뺄 수 없으면 어떻게 하지요?" 자연수에서 1을 받아내리는 단계를 짚게 한다. 받아내린 뒤 자연수를 그대로 두는 학생에게는 "3에서 1을 빌려 갔으니 자연수는 얼마가 됐어요?"라고 묻는다.',
          MM('order', '받아내림 차례'),
          [
            { prompt: '3과 5분의 1 − 1과 5분의 3을 계산하는 차례대로 놓아 보세요.', toolOptions: { slots: 5, cards: [
              { id: 'w1', text: '식을 써요', sub: '3과 5분의 1 − 1과 5분의 3' }, { id: 'w2', text: '뺄 수 있는지 살펴요', sub: '5분의 1은 5분의 3보다 작아요' },
              { id: 'w3', text: '자연수에서 1을 받아내려요', sub: '3과 5분의 1 = 2와 5분의 6' }, { id: 'w4', text: '자연수끼리, 분수끼리 빼요', sub: '2 − 1 = 1, 5분의 6 − 5분의 3 = 5분의 3' }, { id: 'w5', text: '답을 써요', sub: '1과 5분의 3' }] },
              target: { order: ['w1', 'w2', 'w3', 'w4', 'w5'] }, difficulty: 0.18,
              predict: { q: '3과 5분의 1에서 1을 받아내리면 자연수 부분은 얼마가 될까요?', options: ['2', '3', '4'], answer: 0 },
              conclude: '3에서 1을 받아내렸으니 자연수 부분은 2가 되고, 받은 1은 5분의 5라서 5분의 1과 합쳐 5분의 6이 돼요.' },
            { prompt: '5와 7분의 2 − 2와 7분의 5를 계산하는 차례대로 놓아 보세요.', toolOptions: { slots: 4, cards: [
              { id: 'x1', text: '식을 써요', sub: '5와 7분의 2 − 2와 7분의 5' }, { id: 'x2', text: '자연수에서 1을 받아내려요', sub: '5와 7분의 2 = 4와 7분의 9' },
              { id: 'x3', text: '자연수끼리, 분수끼리 빼요', sub: '4 − 2 = 2, 7분의 9 − 7분의 5 = 7분의 4' }, { id: 'x4', text: '답을 써요', sub: '2와 7분의 4' }] },
              target: { order: ['x1', 'x2', 'x3', 'x4'] }, difficulty: 0.22 },
            { prompt: '4와 9분의 3 − 1과 9분의 7을 계산하는 차례대로 놓아 보세요.', toolOptions: { slots: 4, cards: [
              { id: 'y1', text: '식을 써요', sub: '4와 9분의 3 − 1과 9분의 7' }, { id: 'y2', text: '자연수에서 1을 받아내려요', sub: '4와 9분의 3 = 3과 9분의 12' },
              { id: 'y3', text: '자연수끼리, 분수끼리 빼요', sub: '3 − 1 = 2, 9분의 12 − 9분의 7 = 9분의 5' }, { id: 'y4', text: '답을 써요', sub: '2와 9분의 5' }] },
              target: { order: ['y1', 'y2', 'y3', 'y4'] }, difficulty: 0.26 },
          ]),
        A('a2', '활동 2. 받아내림이 있는 식의 답 짝짓기', 'mindmap',
          '분수 부분이 모자란 식이에요. 1을 받아내려 계산한 답 카드를 이어요.',
          '"4와 6분의 1에서 1을 받아내리면 어떻게 쓰나요?" 3과 6분의 7이라고 말하게 한다. 받아내림하고 자연수를 줄이지 않은 답이나 자연수끼리 거꾸로 뺀 답이 카드에 섞여 있다고 알려 주고 어디서 틀렸는지 찾게 한다.',
          MM('match', '받아내림 뺄셈'),
          [
            { prompt: '분수 부분이 모자란 식이에요. 같은 답 카드를 이어 보세요.', toolOptions: { slots: [{ id: 's1', label: '4와 6분의 1 − 2와 6분의 4' }, { id: 's2', label: '6과 8분의 2 − 3과 8분의 5' }], cards: [{ id: 'c1', text: '1과 6분의 3' }, { id: 'c2', text: '2와 8분의 5' }, { id: 'c3', text: '2와 6분의 3', why: '1을 받아내렸으니 자연수 부분이 하나 줄어요.' }, { id: 'c4', text: '3과 8분의 3' }] }, target: { match: { s1: 'c1', s2: 'c2' } }, difficulty: 0.2 },
            { prompt: '식과 같은 답 카드를 이어 보세요. 분모가 10, 4예요.', toolOptions: { slots: [{ id: 't1', label: '7과 10분의 3 − 4와 10분의 8' }, { id: 't2', label: '3과 4분의 1 − 1과 4분의 2' }], cards: [{ id: 'd1', text: '2와 10분의 5' }, { id: 'd2', text: '1과 4분의 3' }, { id: 'd3', text: '3과 10분의 5' }, { id: 'd4', text: '2와 4분의 3' }] }, target: { match: { t1: 'd1', t2: 'd2' } }, difficulty: 0.25 },
            { prompt: '식과 같은 답 카드를 이어 보세요. 답에 자연수가 없는 식도 있어요.', toolOptions: { slots: [{ id: 'u1', label: '5와 9분의 4 − 2와 9분의 7' }, { id: 'u2', label: '8과 12분의 5 − 3과 12분의 9' }, { id: 'u3', label: '2와 5분의 1 − 1과 5분의 4' }], cards: [{ id: 'e1', text: '2와 9분의 6' }, { id: 'e2', text: '4와 12분의 8' }, { id: 'e3', text: '5분의 2' }, { id: 'e4', text: '3과 9분의 3' }] }, target: { match: { u1: 'e1', u2: 'e2', u3: 'e3' } }, difficulty: 0.3,
              conclude: '2와 5분의 1에서 1을 받아내리면 1과 5분의 6이고, 빼면 0과 5분의 2, 곧 5분의 2예요.' },
          ]),
        A('a3', '활동 3. 덧셈으로 답 확인하기', 'mindmap',
          '뺄셈의 답에 빼는 수를 더하면 처음 수가 돼요. 답을 확인하는 설명이 바른 카드를 골라요.',
          '"뺄셈의 답이 맞는지 어떻게 알 수 있을까요?" 답에 뺀 수를 다시 더하면 처음 수가 된다고 말하게 한다. 확인할 때 다시 뺄셈을 하는 학생에게는 덧셈과 뺄셈이 서로 거꾸로인 계산임을 이끈다.',
          MM('pick', '덧셈으로 확인'),
          [
            { prompt: '4와 5분의 2 − 1과 5분의 4 = 2와 5분의 3이에요. 답을 확인하는 설명을 모두 골라 보세요.', toolOptions: { basket: '바른 확인', cards: [{ id: 'a', text: '2와 5분의 3 + 1과 5분의 4를 계산해요' }, { id: 'b', text: '계산 결과가 4와 5분의 2가 되면 맞아요' }, { id: 'c', text: '2와 5분의 3 − 1과 5분의 4를 한 번 더 빼요', why: '확인은 거꾸로 더하는 계산으로 해요.' }, { id: 'd', text: '계산 결과가 5와 5분의 2가 되면 맞아요', why: '처음 수 4와 5분의 2가 나와야 맞아요.' }] }, target: { pick: ['a', 'b'] }, difficulty: 0.2 },
            { prompt: '민지는 "6과 8분의 3 − 2와 8분의 5 = 4와 8분의 2"라고 했어요. 덧셈으로 확인해 바르게 말한 카드를 모두 골라 보세요.', toolOptions: { basket: '바른 말', cards: [{ id: 'a', text: '4와 8분의 2 + 2와 8분의 5 = 6과 8분의 7이라 처음 수와 달라요' }, { id: 'b', text: '그래서 민지의 답은 틀렸어요' }, { id: 'c', text: '바른 답은 3과 8분의 6이에요' }, { id: 'd', text: '바른 답은 4와 8분의 2예요', why: '확인해 보니 처음 수가 되지 않아요.' }, { id: 'e', text: '분모를 더하면 되는 문제예요', why: '분모는 그대로 써요.' }] }, target: { pick: ['a', 'b', 'c'] }, difficulty: 0.28 },
            { prompt: '7과 9분의 4 − 3과 9분의 8을 바르게 계산한 설명을 모두 골라 보세요.', toolOptions: { basket: '바른 설명', cards: [{ id: 'a', text: '7과 9분의 4를 6과 9분의 13으로 바꿔요' }, { id: 'b', text: '9분의 13 − 9분의 8 = 9분의 5예요' }, { id: 'c', text: '6 − 3 = 3이라서 답은 3과 9분의 5예요' }, { id: 'd', text: '9분의 4에서 9분의 8을 거꾸로 빼서 9분의 4로 해요', why: '큰 수에서 작은 수를 빼야 해요.' }, { id: 'e', text: '7 − 3 = 4라서 답은 4와 9분의 4예요', why: '1을 받아내렸으니 자연수 부분이 하나 줄어요.' }] }, target: { pick: ['a', 'b', 'c'] }, difficulty: 0.3 },
          ]),
      ],
      wrap: '"분수 부분끼리 뺄 수 없을 때는 어떻게 하나요?" 자연수에서 1을 받아내려 분수로 바꾼다는 말이 나오는지 듣는다. 출구 1번에서 3과 6분의 3을 고른 학생은 활동 1의 받아내림 카드를 다시 보며 자연수 부분이 줄었는지 살핀다.',
      exit: [
        { type: 'choice', prompt: '5와 6분의 1 − 2와 6분의 4를 바르게 계산한 것은 무엇인가요?', options: ['2와 6분의 3', '3과 6분의 3', '3과 6분의 5'], answer: 0, difficulty: 0.22, explain: '5와 6분의 1 = 4와 6분의 7이라서 4 − 2 = 2, 6분의 7 − 6분의 4 = 6분의 3이에요.' },
        { type: 'choice', prompt: '3과 7분의 2 − 1과 7분의 5 = 1과 7분의 4예요. 답을 확인하는 덧셈식은 무엇인가요?', options: ['1과 7분의 4 + 1과 7분의 5', '1과 7분의 4 − 1과 7분의 5', '3과 7분의 2 + 1과 7분의 5'], answer: 0, difficulty: 0.25, explain: '답과 뺀 수를 더해 처음 수 3과 7분의 2가 되는지 봐요.' },
        { type: 'short', prompt: '분수 부분끼리 뺄 수 없을 때 어떻게 하는지 예를 하나 들어 써 보세요.', answer: '예: 4와 5분의 1 − 1과 5분의 3은 5분의 1이 5분의 3보다 작으므로 4를 3과 5분의 5로 바꾸어 3과 5분의 6 − 1과 5분의 3 = 2와 5분의 3으로 계산한다.' },
      ],
      ws: [
        { type: 'table', prompt: '1을 받아내려 계산하고 답을 쓰세요.', columns: ['식', '받아내림 한 모양', '답'], cells: [['4와 7분의 3 − 1과 7분의 5', '3과 7분의 10 − 1과 7분의 5', ''], ['6과 9분의 2 − 2와 9분의 6', '', ''], ['3과 8분의 1 − 1과 8분의 7', '', '']], answer: '2와 7분의 5, 3과 9분의 5, 1과 8분의 2' },
        { type: 'blank', prompt: '계산해 보세요.', text: '5와 6분의 1 − 3과 6분의 4 = ___ ,  7과 10분의 2 − 2와 10분의 9 = ___', answer: '1과 6분의 3, 4와 10분의 3' },
        { type: 'choice', prompt: '6과 5분의 2 − 2와 5분의 4의 답에 ○ 하세요.', options: ['4와 5분의 2', '3과 5분의 3', '3과 5분의 2'], answer: '3과 5분의 3' },
        { type: 'short', prompt: '"3과 5분의 1 − 1과 5분의 3 = 2와 5분의 2"라고 쓴 친구에게 어디가 틀렸는지 알려 주세요.', answer: '분수끼리 5분의 3에서 5분의 1을 거꾸로 뺐다. 3과 5분의 1을 2와 5분의 6으로 바꾸어 빼면 1과 5분의 3이다.' },
        { type: 'draw', prompt: '답이 맞는지 덧셈으로 확인하는 식을 써 보세요: 5와 8분의 1 − 2와 8분의 5 = 2와 8분의 4', answer: '2와 8분의 4 + 2와 8분의 5 = 5와 8분의 1' },
      ],
      easyNote: '분수 부분이 모자라면 자연수에서 1을 받아내려요. 1은 분모와 같은 수의 분수예요. 예: 3과 5분의 1 = 2와 5분의 6',
      easy: [
        { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '4와 3분의 1 = 3과 3분의 ___', answer: '4' },
        { type: 'table', prompt: '계산하고 답을 쓰세요.', columns: ['식', '답'], cells: [['3과 4분의 1 − 1과 4분의 2', ''], ['5와 6분의 2 − 2와 6분의 5', '']], answer: '1과 4분의 3, 2와 6분의 3' },
        { type: 'choice', prompt: '받아내림하면 자연수 부분은 어떻게 되나요? ○ 하세요.', options: ['하나 줄어요', '그대로예요'], answer: '하나 줄어요' },
        { type: 'short', prompt: '답이 맞는지 확인하려면 어떻게 하는지 써 보세요.', answer: '답에 뺀 수를 더해 처음 수가 되는지 본다.' },
      ],
      diff: {
        easy: '카드를 놓자마자 맞는 자리에 초록 테두리가 생겨서 계산 차례를 따라가기 쉬워요.',
        base: '카드를 모두 놓은 뒤 확인해요. 식과 답을 이어 보며 받아내림 실수를 찾아요.',
        challenge: '답에 자연수가 없는 식이 나오고, 틀린 계산을 덧셈으로 확인해 바르게 고쳐요.',
      },
      notes: '자주 보이는 어려움: ① 분수끼리 큰 수에서 작은 수를 거꾸로 뺀다(5분의 3 − 5분의 1). ② 1을 받아내리고 자연수 부분을 줄이지 않는다. ③ 받아내린 1을 분모가 아닌 1로만 더한다(5분의 1 + 1 = 5분의 2) → 1은 5분의 5. ④ 답을 확인하지 않는다 → 덧셈으로 거꾸로 확인하는 습관. 출구 3번(서술)은 "자연수에서 1을 받아내려 분수로 바꾼다"는 말이 있는지 본다.',
    }),
    // ───────────────────────── 10차시 (wrap · application) ─────────────────────────
    mk(10, {
      title: '덧셈과 뺄셈 중 알맞은 식 골라 이야기 문제 풀기',
      objective: '이야기 문제의 상황에서 덧셈과 뺄셈을 가려 식을 세우고, 분모가 같은 분수와 대분수의 계산을 바르게 하여 단원에서 배운 것을 정리할 수 있다.',
      ill: 'a paper kitchen scene with measuring cups, a bag of flour and a ribbon on a table, and a child choosing between a plus card and a minus card',
      sceneText: '더할까, 뺄까?', kind: 1,
      intro: [
        '"우유 7분의 4 L가 있는데 7분의 2 L를 더 샀어요. 모두 얼마일까요? 그럼 주스 9분의 8 L 가운데 9분의 3 L를 마셨다면요?" 두 상황의 낱말(더 샀어요, 마셨어요)에 밑줄을 긋고 어떤 계산을 하는지 말하게 한다. "합치면 덧셈, 덜어 내거나 차이를 찾으면 뺄셈"이라는 기준을 칠판에 적는다. "남은 것은?"을 보고 무조건 뺀다고 말하는 학생은 어떤 양이 처음 양인지 먼저 묻는다.',
        '우유 7분의 4 L에 7분의 2 L를 더 샀어요. 그리고 주스 9분의 8 L 가운데 9분의 3 L를 마셨어요. 어떤 계산을 해야 할까요?',
      ],
      acts: [
        A('a1', '활동 1. 덧셈 상황과 뺄셈 상황 나누기', 'mindmap',
          '합치거나 늘어난 양을 구하면 덧셈, 남은 양이나 차이를 구하면 뺄셈이에요. 상황을 두 칸으로 나눠요.',
          '"두 리본을 이어 붙인 길이는 덧셈일까요, 뺄셈일까요?" 합치는 상황이라고 말하게 한다. "얼마나 더 많은가?"를 덧셈으로 분류하는 학생에게는 두 수의 크기를 견주는 "차이"는 뺄셈이라고 짚는다.',
          MM('sort', '덧셈과 뺄셈 상황'),
          [
            { prompt: '상황을 덧셈과 뺄셈으로 나누어 보세요.', toolOptions: { slots: ['덧셈', '뺄셈'], cards: [{ id: 'p1', text: '리본 두 개를 이어 붙인 길이' }, { id: 'p2', text: '먹고 남은 케이크의 양' }, { id: 'p3', text: '두 사람이 마신 우유의 양' }, { id: 'p4', text: '쓰고 남은 색종이의 양' }] }, target: { sort: { '덧셈': ['p1', 'p3'], '뺄셈': ['p2', 'p4'] } }, difficulty: 0.1 },
            { prompt: '문제 끝에 나오는 질문을 덧셈과 뺄셈으로 나누어 보세요.', toolOptions: { slots: ['덧셈', '뺄셈'], cards: [{ id: 'q1', text: '모두 몇 m일까요?' }, { id: 'q2', text: '남은 것은 얼마일까요?' }, { id: 'q3', text: '처음보다 얼마나 더 길어졌을까요?' }, { id: 'q4', text: '두 양은 얼마나 차이가 날까요?' }] }, target: { sort: { '덧셈': ['q1'], '뺄셈': ['q2', 'q3', 'q4'] } }, difficulty: 0.2,
              conclude: '"모두"는 합치는 것이라 더하고, "더 길어졌을까요"와 "차이"는 두 길이를 견주는 것이라 큰 수에서 작은 수를 빼요.' },
            { prompt: '수가 들어간 상황을 덧셈과 뺄셈으로 나누어 보세요.', toolOptions: { slots: ['덧셈', '뺄셈'], cards: [{ id: 'r1', text: '물 3분의 2 L와 3분의 1 L를 합쳐요' }, { id: 'r2', text: '물 1 L에서 5분의 2 L를 따라 냈어요' }, { id: 'r3', text: '고구마 1과 4분의 1 kg과 감자 2와 4분의 2 kg을 합쳐요' }, { id: 'r4', text: '끈 5 m에서 1과 3분의 1 m를 잘랐어요' }] }, target: { sort: { '덧셈': ['r1', 'r3'], '뺄셈': ['r2', 'r4'] } }, difficulty: 0.25 },
          ]),
        A('a2', '활동 2. 이야기와 알맞은 식 잇기', 'mindmap',
          '이야기를 읽고 문제를 푸는 식을 이어요. 분모가 같은 분수와 대분수가 나와요.',
          '"우유가 있었는데 더 샀어요. 처음 양에 더하나요, 빼나요?" 처음 양과 바뀐 양을 구분해서 식에 놓는 것을 말하게 한다. 대분수 뺄셈에서 큰 수 자리에 작은 수를 쓰는 학생에게는 처음 가진 양이 어느 쪽인지 다시 읽게 한다.',
          MM('match', '이야기와 식'),
          [
            { prompt: '이야기와 알맞은 식을 이어 보세요.', toolOptions: { slots: [{ id: 's1', label: '우유가 7분의 4 L 있었는데 7분의 2 L를 더 샀어요' }, { id: 's2', label: '주스 9분의 8 L 가운데 9분의 3 L를 마셨어요' }], cards: [{ id: 'c1', text: '7분의 4 + 7분의 2' }, { id: 'c2', text: '9분의 8 − 9분의 3' }, { id: 'c3', text: '9분의 8 + 9분의 3', why: '마신 만큼 줄어들었으니 빼야 해요.' }] }, target: { match: { s1: 'c1', s2: 'c2' } }, difficulty: 0.1 },
            { prompt: '이야기와 알맞은 식을 이어 보세요. 대분수가 나와요.', toolOptions: { slots: [{ id: 't1', label: '밧줄 2와 5분의 3 m와 1과 5분의 4 m를 이었어요' }, { id: 't2', label: '철사 4와 7분의 1 m에서 1과 7분의 5 m를 썼어요' }], cards: [{ id: 'd1', text: '2와 5분의 3 + 1과 5분의 4' }, { id: 'd2', text: '4와 7분의 1 − 1과 7분의 5' }, { id: 'd3', text: '1과 7분의 5 − 4와 7분의 1', why: '처음 가진 양이 앞에 와야 해요.' }] }, target: { match: { t1: 'd1', t2: 'd2' } }, difficulty: 0.22 },
            { prompt: '더 해 보기: 이야기와 알맞은 식을 이어 보세요.', toolOptions: { slots: [{ id: 'u1', label: '밀가루 1 kg 중에서 6분의 5 kg을 사용했어요' }, { id: 'u2', label: '찰흙 3과 8분의 2 kg과 1과 8분의 7 kg을 합쳤어요' }], cards: [{ id: 'e1', text: '1 − 6분의 5' }, { id: 'e2', text: '3과 8분의 2 + 1과 8분의 7' }, { id: 'e3', text: '6분의 5 − 1' }, { id: 'e4', text: '3과 8분의 2 − 1과 8분의 7' }] }, target: { match: { u1: 'e1', u2: 'e2' } }, extra: true, difficulty: 0.25 },
          ]),
        A('a3', '활동 3. 이야기 문제의 답 고르기', 'mindmap',
          '식을 세워 계산하고 알맞은 답 카드를 골라요. 분모는 그대로예요.',
          '"식은 어떻게 세웠어요? 계산 결과에 단위(m, kg, L)도 써 볼까요?" 답에 단위를 붙이는지 살핀다. 뺄셈인데 더한 답이나 받아내림을 빠뜨린 답을 고르는 학생에게는 식을 다시 말로 읽어 보게 한다.',
          MM('pick', '이야기 문제 답'),
          [
            { prompt: '준호의 끈은 3과 6분의 5 m예요. 1과 6분의 4 m를 쓰고 남은 끈은 몇 m일까요?', toolOptions: { basket: '바른 답', cards: [{ id: 'a', text: '2와 6분의 1 m' }, { id: 'b', text: '5와 6분의 3 m', why: '남은 양을 구하니 빼야 해요.' }, { id: 'c', text: '2와 0분의 1 m', why: '분모는 빼지 않아요.' }, { id: 'd', text: '2와 6분의 9 m', why: '뺄셈에서는 분자를 더하지 않아요.' }] }, target: { pick: ['a'] }, difficulty: 0.2 },
            { prompt: '민지네 모둠은 찰흙을 1과 8분의 5 kg, 준호네 모둠은 2와 8분의 6 kg 썼어요. 두 모둠이 쓴 찰흙은 모두 몇 kg일까요?', toolOptions: { basket: '바른 답', cards: [{ id: 'a', text: '4와 8분의 3 kg' }, { id: 'b', text: '3과 8분의 11 kg', why: '8분의 11은 1과 8분의 3으로 바꾸어 자연수에 올려야 해요.' }, { id: 'c', text: '3과 16분의 11 kg', why: '분모는 더하지 않아요.' }, { id: 'd', text: '1과 8분의 1 kg', why: '합치는 상황이라 덧셈이에요.' }] }, target: { pick: ['a'] }, difficulty: 0.25 },
            { prompt: '물통에 물이 4 L 있어요. 7분의 3 L를 마셨다면 남은 물은 몇 L일까요?', toolOptions: { basket: '바른 답', cards: [{ id: 'a', text: '3과 7분의 4 L' }, { id: 'b', text: '4와 7분의 3 L', why: '마셨으니 4보다 적어야 해요.' }, { id: 'c', text: '3과 7분의 3 L', why: '4에서 1을 받아내려 3과 7분의 7로 바꾸어야 해요.' }, { id: 'd', text: '4와 7분의 4 L', why: '마신 만큼 줄어들어야 해요.' }] }, target: { pick: ['a'] }, difficulty: 0.28 },
          ]),
      ],
      wrap: '"이 단원에서 덧셈과 뺄셈을 할 때 분모는 어떻게 하나요?" 분모는 그대로 쓰고 분자와 자연수만 계산한다는 말이 나오는지 듣는다. 출구 3번에서 받아올림이나 받아내림을 쓰지 못한 학생은 7, 9차시 활동의 계산 차례 카드를 다시 보게 한다.',
      exit: [
        { type: 'choice', prompt: '"쿠키 반죽 7분의 6 kg 가운데 7분의 2 kg을 썼어요." 남은 양을 구하는 식은 무엇인가요?', options: ['7분의 6 − 7분의 2', '7분의 6 + 7분의 2', '7분의 2 − 7분의 6'], answer: 0, difficulty: 0.12, explain: '처음 양에서 쓴 양을 빼야 남은 양이에요.' },
        { type: 'choice', prompt: '6분의 5 + 6분의 5를 바르게 계산한 것은 무엇인가요?', options: ['1과 6분의 4', '12분의 10', '1과 6분의 10'], answer: 0, difficulty: 0.2, explain: '합은 6분의 10이고 한 판(6분의 6)을 빼면 6분의 4가 남아요.' },
        { type: 'short', prompt: '이 단원에서 배운 덧셈이나 뺄셈 중 하나를 골라 계산 방법을 쓰세요. 분모를 어떻게 하는지도 꼭 쓰세요.', answer: '예: 분모가 같은 분수의 덧셈은 분모는 그대로 쓰고 분자끼리 더한다. 합이 가분수이면 대분수로 바꾼다.' },
      ],
      ws: [
        { type: 'table', prompt: '이야기에 알맞은 식을 쓰고 계산하세요.', columns: ['이야기', '식', '답'], cells: [['주스 9분의 7 L에서 9분의 4 L를 마셨어요', '', ''], ['리본 1과 5분의 3 m와 2와 5분의 4 m를 이었어요', '', ''], ['우유 3 L에서 8분의 5 L를 따랐어요', '', '']], answer: '9분의 7 − 9분의 4 = 9분의 3 L, 1과 5분의 3 + 2와 5분의 4 = 4와 5분의 2 m, 3 − 8분의 5 = 2와 8분의 3 L' },
        { type: 'blank', prompt: '계산해 보세요.', text: '4분의 3 + 4분의 3 = ___ ,  5와 8분의 3 − 2와 8분의 7 = ___', answer: '1과 4분의 2, 2와 8분의 4' },
        { type: 'choice', prompt: '"처음 양에서 덜어 낸 양을 구해요"는 어떤 계산인가요?', options: ['덧셈', '뺄셈'], answer: '뺄셈' },
        { type: 'short', prompt: '덧셈과 뺄셈에서 분모를 그대로 쓰는 까닭을 조각 그림을 떠올려 써 보세요.', answer: '더하거나 빼도 조각의 크기는 그대로이고 조각 수만 달라지기 때문이다.' },
        { type: 'short', prompt: '분수나 대분수의 덧셈 또는 뺄셈 이야기 문제를 직접 만들어 풀어 보세요.' },
      ],
      easyNote: '합치면 덧셈, 남은 양이나 덜어 낸 양을 구하면 뺄셈이에요. 분모는 그대로 써요.',
      easy: [
        { type: 'choice', prompt: '"먹고 남은 피자는 얼마일까요?"는 어떤 계산인가요? ○ 하세요.', options: ['덧셈', '뺄셈'], answer: '뺄셈' },
        { type: 'blank', prompt: '계산해 보세요.', text: '9분의 4 + 9분의 3 = ___ ,  9분의 8 − 9분의 5 = ___', answer: '9분의 7, 9분의 3' },
        { type: 'table', prompt: '알맞은 식을 쓰세요.', columns: ['이야기', '식'], cells: [['우유 5분의 3 L에 5분의 1 L를 더 샀어요', ''], ['끈 7분의 6 m에서 7분의 2 m를 잘랐어요', '']], answer: '5분의 3 + 5분의 1, 7분의 6 − 7분의 2' },
        { type: 'draw', prompt: '이 단원에서 가장 어려웠던 계산 하나를 그림으로 그려 보세요.' },
      ],
      diff: {
        easy: '카드를 놓자마자 맞는 칸에 초록 테두리가 생기고, 틀리면 까닭을 말해 줘요.',
        base: '카드를 모두 놓은 뒤 확인해요. 이야기에서 알맞은 식을 세워요.',
        challenge: '이야기 문제의 보기에 받아올림·받아내림을 빠뜨린 답이 섞여 있어 직접 계산해 가려내요.',
      },
      notes: '자주 보이는 어려움: ① 낱말만 보고 연산을 고른다("남은"이 나오면 무조건 뺄셈, "더"가 나오면 덧셈) → 처음 양과 바뀐 양을 먼저 찾는다. ② 이야기 문제에서 받아올림·받아내림을 빠뜨린다. ③ 분모를 더하거나 뺀다. ④ 답에 단위(L, kg, m)를 쓰지 않는다. 이 차시는 단원 정리이므로 틀린 계산을 짝과 바꿔 보며 고치는 시간을 충분히 준다.',
    }),
    // @@NEXT@@
  ];

  PaperLessons.registerUnit({
    id: UID, schema: 'edu-unit.v1', catalogUnit: CU, grade: 4, subject: '수학', unitTitle: U.unitTitle,
    flow: '1차시에서 분수를 단위분수가 몇 개 모인 것으로 읽고, 분모가 같은 분수를 더하거나 뺄 때 분모는 조각의 크기라서 그대로 두고 조각 수(분자)만 계산한다는 생각을 세웁니다. 2차시(기존 차시)에서 분모가 같은 진분수의 덧셈을 띠 그림으로 익힌 뒤, 3~4차시는 합이 1보다 커서 가분수와 대분수로 바꾸어 쓰는 덧셈과, 자연수끼리 분수끼리 나누어 더하며 올림을 처리하는 대분수의 덧셈으로 넓힙니다. 5~6차시는 같은 이치를 뺄셈에 옮겨 색칠한 조각을 덜어 내고 수직선에서 뒤로 세며, 분모까지 빼거나 분자를 더하는 흔한 실수를 짚어 고칩니다. 7차시에서 1과 자연수에서 진분수를 뺄 때 1을 분모가 같은 분수로 바꾸는 받아내림을 다루고, 8~9차시에서 대분수의 뺄셈(받아내림 없는 식과 있는 식)과 덧셈으로 답 확인하기를 익힙니다. 10차시는 덧셈과 뺄셈 상황을 가려 이야기 문제를 풀며 단원을 정리합니다.',
    refs: { 2: 'g4-math-fraction-add' },
    lessons,
  });
})();
