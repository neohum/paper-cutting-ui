/* 3학년 2학기 수학 5. 들이와 무게 — 단원 파일(차시 10개, 기존 차시 없음).
 * 확인 필요: units-index 의 plan 은 1~9차시가 들이(L·mL, 관계, 덧셈·뺄셈), 10차시 하나가 무게(g·kg 재고 어림하기)뿐이다.
 *   단원 제목은 '들이와 무게'이고 성취기준은 [4수03-17]~[4수03-23] 일곱 개지만 plan 에는 t, 무게의 합과 차 차시가 없다.
 *   그래서 10차시(wrap)에서 g·kg 재기와 1 kg = 1000 g, 1 t = 1000 kg 맛보기를 함께 묶고, 무게의 합과 차는 plan 에 없어 다루지 않는다.
 *   standards 는 plan 의 topic(s4-03-17 들이 재기·어림, 18 L와 mL 관계, 19 들이 덧뺄셈, 20 g·kg)에 맞춰 달았다.
 * 예문·이야기(약병과 욕조, 종이컵 부어 채우기, 물총 놀이, 요리 계량 등)는 이 단원을 위해 직접 지은 것이다. 학생 이름 예시(민지·준호)는 가명이다.
 * 흐름: 큰 그릇은 L·작은 그릇은 mL(1) → 눈금 한 칸의 크기를 알고 읽기(2) → 눈금 없는 그릇 어림과 알맞은 단위(3)
 *      → 1 L = 1000 mL(4) → 1 L 300 mL = 1300 mL 바꾸어 쓰기(5) → 두 가지로 쓴 들이 견주기(6)
 *      → 들이의 합, 1000 mL 넘으면 받아올림(7) → 들이의 차, 1 L 에서 받아내림(8) → 이야기 문제로 합·차 설명(9) → 무게 g·kg·t(10).
 */
(function () {
  const UID = 'g3-math-2-05';
  const UNIT = 'g3-수학-2학기-5';
  const TITLE = '5. 들이와 무게';
  const head = (n, standards) => ({
    id: `${UID}-${String(n).padStart(2, '0')}`, schema: 'edu-lesson.v1', catalog: { unit: UNIT, lesson: n },
    grade: 3, subject: '수학', unitTitle: TITLE, standards, minutes: 40, formats: ['chromebook', 'projector', 'print'],
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
  const LV_AMT = { easy: { showAmount: true }, base: {}, challenge: {} };
  const mood = { type: 'mood', prompt: '오늘 공부는 어땠나요?' };
  // measure 들이 그릇: bk = 그릇 배열, sc = { step, minor } 눈금
  const vol = (bk, sc, x) => Object.assign({ mode: 'volume', beakers: bk, step: 100, minor: 2 }, sc || {}, x || {});
  const readQ = (prompt, bk, sc, read, x) => X({ prompt, toolOptions: vol(bk, sc), target: { read } }, x);
  const splitQ = (prompt, bk, sc, read, x) => X({ prompt, toolOptions: vol(bk, sc, { split: true }), target: { read } }, x);
  const fillQ = (prompt, bk, sc, fill, x) => X({ prompt, toolOptions: vol(bk, sc, { pour: true }), target: { fill } }, x);
  const numQ = (prompt, bk, sc, q, unit, num, x) => X({ prompt, toolOptions: vol(bk, sc, { readOnly: true, askNum: { q, unit } }), target: { num } }, x);
  const pickQ = (prompt, bk, sc, q, choices, pick, x) => X({ prompt, toolOptions: vol(bk, sc, { readOnly: true, ask: { q, choices } }), target: { pick } }, x);
  const unitQ = (prompt, things, units, picks, x) => X({ prompt, toolOptions: { mode: 'unit', things, units }, target: { units: picks } }, x);
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

  // ───────────────────────────── 1차시 (intro · L와 mL 단위 알기) ─────────────────────────────
  lessons.push(LES(1, ['[4수03-17]'], {
    title: '큰 그릇은 L, 작은 그릇은 mL로 들이 말하기',
    objective: '그릇에 담을 수 있는 물의 양을 들이라고 하고, 들이를 나타내는 단위 L와 mL를 물건의 크기에 맞게 고를 수 있다.',
    ill: 'a big paper bucket and a tiny medicine bottle side by side on a table with a rabbit pointing at each, and a measuring cup with a mint water level',
    scene: '들이는 L와 mL로 말해요',
    intro: [
      '"약병에 든 시럽과 욕조에 받은 물, 둘 다 물의 양인데 같은 단위로 말하면 어떨까요?" 두세 명이 말하게 한 뒤 시연 단추로 빈 그릇에 물이 차오르는 것을 보여 준다. "그릇에 담을 수 있는 물의 양을 들이라고 해요." 가득 찬 우유갑과 가득 찬 양동이를 손으로 그려 크기를 견주게 하고, "오늘은 들이를 말하는 두 가지 단위를 배워요"라고 말한다.',
      '집에서 물이나 음료를 담는 그릇을 하나 떠올려 보고, 그 그릇이 큰지 작은지 짝에게 말해 봐요.',
      { tool: 'measure', options: vol([{ v: 0, max: 1000 }]), sequence: [{ v: [700] }] },
    ],
    acts: [
      ACT('a1', '활동 1. 물건에 맞는 단위 고르기', 9, 'measure',
        '"약병 속 시럽은 숟가락 몇 번이면 다 먹어요. 욕조의 물은요?" 담긴 양이 아주 적으면 mL, 많으면 L라고 둘의 크기를 손짓으로 나타내게 한다. "150 mL의 욕조"를 고르는 학생이 있다 — "150 mL는 우유 한 컵보다 적어요. 욕조에 그 양이 들어갈까요?"라고 되묻는다.',
        '물건마다 담긴 물의 양에 알맞은 단위 mL나 L를 눌러요. 방향키로도 고를 수 있어요.', LV_NONE, [
          unitQ('들이를 말할 때 물건마다 알맞은 단위를 골라 보세요.', [{ name: '약병에 든 시럽', amount: 5 }, { name: '욕조에 받은 물', amount: 150 }, { name: '우유갑에 든 우유', amount: 200 }], ['mL', 'L'], [0, 1, 0], { difficulty: 0.1 }),
          unitQ('이번에는 어항과 숟가락, 물통이에요. 알맞은 단위를 골라 보세요.', [{ name: '어항에 담긴 물', amount: 20 }, { name: '숟가락으로 뜬 물', amount: 15 }, { name: '등산용 물통', amount: 2 }], ['mL', 'L'], [1, 0, 1], { difficulty: 0.15,
            predict: { q: '숟가락으로 뜬 물의 양은 mL와 L 중 어느 단위가 알맞을까요?', options: ['mL', 'L'], answer: 0 }, conclude: '아주 적은 양은 mL, 많은 양은 L로 말해요.' }),
          unitQ('주전자와 종이컵, 세숫대야에 든 물이에요. 알맞은 단위를 골라 보세요.', [{ name: '주전자에 끓인 물', amount: 3 }, { name: '종이컵에 따른 주스', amount: 180 }, { name: '세숫대야에 받은 물', amount: 8 }], ['mL', 'L'], [1, 0, 1], { difficulty: 0.2 }),
        ]),
      ACT('a2', '활동 2. 눈금 그릇에서 mL 읽기', 9, 'measure',
        '"물의 윗면이 닿은 눈금이 몇인가요?" 큰 눈금에 쓰인 수를 먼저 읽고 물이 그보다 위인지 아래인지 확인하게 한다. 450을 400이나 500으로 읽는 학생에게는 "400과 500 사이에 작은 눈금이 한 칸 있어요. 그 한 칸은 얼마일까요?"라고 묻는다.',
        '눈금 그릇의 물이 닿은 눈금을 읽고 답 칸에 mL 수를 써요.', LV_NONE, [
          readQ('이 컵에 든 우유는 몇 mL인가요?', [{ v: 200, max: 500 }], { step: 100, minor: 1 }, 200, { difficulty: 0.1 }),
          readQ('이 눈금 그릇에 든 물은 몇 mL인가요? 작은 눈금도 살펴봐요.', [{ v: 450, max: 500 }], { step: 100, minor: 2 }, 450, { difficulty: 0.15, reveal: 'after-check',
            conclude: '큰 눈금 400과 500 사이 작은 눈금 하나는 50이라서 450 mL예요.' }),
          readQ('큰 눈금 그릇에 든 보리차는 몇 mL인가요?', [{ v: 700, max: 1000 }], { step: 100, minor: 2 }, 700, { difficulty: 0.2 }),
        ]),
      ACT('a3', '활동 3. 1 L 만들어 보기', 9, 'measure',
        '"눈금이 1000까지 있는 그릇에 물을 가득 부으면 몇 mL일까요?" 부으면서 100씩 오르는 것을 소리 내어 세게 한다. 그릇이 가득 찼을 때 "1 L"라고 말하는 학생에게 "이 그릇은 1000 mL예요. 같은 양을 두 가지로 말할 수 있어요"라고 짚는다. 둘째 문항에서는 500 mL가 1 L의 절반임을 말하게 한다.',
        '물 덜기·붓기 단추로 물을 부어 문제에서 말한 양을 만들어요.', LV_AMT, [
          fillQ('빈 그릇에 물을 부어 1 L가 되게 해 보세요. 눈금 1000이 1 L예요.', [{ v: 0, max: 1200 }], { step: 100, minor: 2, pourStep: 100 }, 1000, { difficulty: 0.1 }),
          fillQ('물을 부어 500 mL를 만들어 보세요. 1 L의 절반이에요.', [{ v: 0, max: 1000 }], { step: 100, minor: 2, pourStep: 100 }, 500, { difficulty: 0.12, reveal: 'after-check' }),
          fillQ('2 L까지 담는 큰 통에 물을 1 L만 부어 보세요.', [{ v: 0, max: 2000 }], { step: 500, minor: 5, pourStep: 100 }, 1000, { difficulty: 0.2 }),
        ]),
    ],
    wrap: [
      '"약병과 욕조에 들어 있는 물의 양을 같은 단위로 말하지 않는 까닭은 무엇인가요?" 적은 양은 mL, 많은 양은 L라는 말을 이끌어 낸다. 칠판에 "1 L = 1000 mL"를 쓰고 4차시에서 자세히 알아본다고 말해 둔다. 출구 2번을 틀린 학생은 단위 자리에 L를 쓰고 수만 맞게 읽는지 다음 시간에 먼저 살핀다.',
      [
        { type: 'choice', prompt: '약병에 든 시럽의 양을 말할 때 알맞은 단위는 무엇인가요?', options: ['cm', 'mL', 'L'], answer: 1, difficulty: 0.1, explain: '약병에는 아주 적은 양이 들어서 mL가 알맞아요.' },
        { type: 'tool', tool: 'measure', options: vol([{ v: 350, max: 500 }]), state: {}, prompt: '눈금 그릇에 든 물은 몇 mL인가요?', target: { read: 350 }, difficulty: 0.15 },
        { type: 'choice', prompt: '들이를 나타내는 단위가 아닌 것은 무엇인가요?', options: ['mL', 'L', 'kg'], answer: 2, difficulty: 0.1, explain: 'kg은 무게를 나타내는 단위예요.' },
      ],
    ],
    ws: {
      title: '들이를 나타내는 L와 mL',
      items: [
        { type: 'figure', prompt: '눈금 그릇에 든 물의 양을 쓰세요.', tool: 'measure', options: { mode: 'volume', step: 100, minor: 2 }, figures: [
          { options: { beakers: [{ v: 150, max: 500 }] }, caption: '___ mL' }, { options: { beakers: [{ v: 300, max: 500 }] }, caption: '___ mL' }, { options: { beakers: [{ v: 850, max: 1000 }] }, caption: '___ mL' }], answer: '150 mL, 300 mL, 850 mL' },
        { type: 'table', prompt: '물건에 담긴 물의 양에 알맞은 단위(mL, L)를 쓰세요.', columns: ['물건', '알맞은 단위'], cells: [['티스푼 한 숟가락', ''], ['욕조에 받은 물', ''], ['요구르트 한 병', ''], ['큰 물탱크', '']], answer: 'mL, L, mL, L' },
        { type: 'choice', prompt: '교실 어항에 담긴 물의 양을 말할 때 알맞은 단위에 ○ 하세요.', options: ['mL', 'L', 'cm'], answer: 'L' },
        { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '그릇에 담을 수 있는 물의 양을 ______라고 하고, 많은 양은 ______, 적은 양은 ______로 말해요.', answer: '들이, L, mL' },
        { type: 'short', prompt: '집에서 L로 말하면 좋은 물건과 mL로 말하면 좋은 물건을 하나씩 써 보세요.' },
      ],
      easy: {
        note: '들이는 그릇에 담을 수 있는 물의 양이에요. 적은 양은 mL, 많은 양은 L로 말해요.',
        items: [
          { type: 'figure', prompt: '눈금 그릇에 든 물의 양을 쓰세요.', tool: 'measure', options: { mode: 'volume', step: 100, minor: 1 }, figures: [
            { options: { beakers: [{ v: 200, max: 500 }] }, caption: '___ mL' }, { options: { beakers: [{ v: 400, max: 500 }] }, caption: '___ mL' }], answer: '200 mL, 400 mL' },
          { type: 'choice', prompt: '약병 속 물약의 양에 알맞은 단위에 ○ 하세요.', options: ['mL', 'L'], answer: 'mL' },
          { type: 'draw', prompt: '1 L 물병과 종이컵을 그리고 어느 쪽이 들이가 더 큰지 써 보세요.' },
        ],
      },
    },
    diff: {
      easy: '물을 붓는 단추 옆에 지금 든 물의 양이 보여서 눈금과 수를 견주며 부어요. 교사가 눈금 읽는 법을 먼저 함께 말해요.',
      base: '물의 양이 숨겨져 있어서 눈금을 읽고 스스로 mL 수를 써요.',
      challenge: '1 L가 되는 양을 눈금 두 가지(1000 mL까지, 2000 mL까지) 그릇에서 모두 찾아 같은 양임을 설명해요.',
    },
    notes: '자주 보이는 어려움: ① 단위를 정하지 않고 수만 말한다(물 3이요) → 문장 끝에 항상 단위를 붙여 말하게 한다. ② mL와 L를 크기로 구분하지 못하고 글자 모양으로 고른다 → 우유갑과 양동이를 비교하는 손짓으로 돌아간다. ③ 작은 눈금 한 칸을 1로 읽는다 → 큰 눈금 사이를 몇 칸으로 나눈 것인지 먼저 센다. 1 L = 1000 mL는 4차시에서 정식으로 다루므로 여기서는 "같은 양을 두 가지로 말한다"까지만 짚는다.',
  }));

  // ───────────────────────────── 2차시 (core · 눈금 한 칸 읽기) ─────────────────────────────
  lessons.push(LES(2, ['[4수03-17]'], {
    title: '눈금 한 칸이 얼마인지 먼저 알고 물의 양 읽기',
    objective: '눈금 그릇에서 큰 눈금 사이 작은 눈금 한 칸의 크기를 먼저 알아보고, 물의 양을 mL 또는 몇 L 몇 mL로 읽을 수 있다.',
    ill: 'a tall paper measuring jug with small tick marks next to a smiling fox holding a pencil and a notebook, with mint colored water inside',
    scene: '눈금 한 칸은 얼마일까?',
    intro: [
      '"눈금 사이에 작은 눈금이 몇 개 있는지 세어 봤나요? 큰 눈금 두 개 사이를 몇 칸으로 나눴을까요?" 시연 단추로 물이 천천히 차오르게 하며 큰 눈금을 지날 때마다 소리 내어 읽게 한다. "작은 눈금 한 칸이 얼마인지 알아야 중간을 읽을 수 있어요"라고 하고, 지난 시간에 같은 300 mL를 읽은 방법을 떠올리게 한다.',
      '눈금 그릇의 큰 눈금 두 개를 골라서, 그 사이에 작은 눈금이 몇 칸인지 세어 보고 짝에게 말해 봐요.',
      { tool: 'measure', options: vol([{ v: 0, max: 500 }], { step: 100, minor: 5 }), sequence: [{ v: [260] }] },
    ],
    acts: [
      ACT('a1', '활동 1. 작은 눈금 한 칸은 20 mL', 9, 'measure',
        '"큰 눈금 0과 100 사이에 작은 칸이 다섯 개예요. 한 칸은 몇 mL일까요?" 100을 5로 똑같이 나누어 칠판에 20, 40, 60, 80을 써 가며 센다. 큰 눈금 200을 지난 뒤 작은 칸 세 개 위라면 200에 얼마를 더하는지 말하게 한다. 340을 "403"이나 "3.4"처럼 읽는 학생에게는 100이 세 번 지난 수부터 말하게 한다.',
        '큰 눈금과 작은 눈금 한 칸의 크기를 알아본 뒤 물의 양을 읽어요.', LV_NONE, [
          readQ('눈금 그릇의 물은 몇 mL인가요? 작은 눈금 한 칸은 20 mL예요.', [{ v: 340, max: 500 }], { step: 100, minor: 5 }, 340, { difficulty: 0.15,
            predict: { q: '물의 윗면이 큰 눈금 300과 400 사이에 있어요. 물은 몇 mL쯤일까요?', options: ['300보다 적어요', '300보다 많고 400보다 적어요', '400보다 많아요'], answer: 1 },
            conclude: '300 mL에서 작은 눈금 두 칸이 더 올라가서 340 mL예요.' }),
          readQ('이 그릇에 든 보리차는 몇 mL인가요?', [{ v: 160, max: 500 }], { step: 100, minor: 5 }, 160, { difficulty: 0.2, reveal: 'after-check' }),
          readQ('큰 눈금 400을 막 넘은 물이에요. 몇 mL인가요?', [{ v: 420, max: 500 }], { step: 100, minor: 5 }, 420, { difficulty: 0.2 }),
        ]),
      ACT('a2', '활동 2. 몇 L 몇 mL로 읽기', 9, 'measure',
        '"눈금이 1000, 즉 1 L를 넘은 물은 L 칸과 mL 칸에 어떻게 나누어 쓸까요?" 1 L 눈금을 지난 뒤 남은 만큼을 mL 칸에 쓰게 한다. 1600을 L 칸에 1, mL 칸에 600으로 쓰는 것이 맞는데, 1 L 6 mL처럼 적는 학생이 있다 — "1 L와 600 mL예요. 6 mL와 600 mL를 견주어 봐요"라고 짚는다.',
        '2 L까지 있는 눈금 그릇의 물을 읽어 L 칸과 mL 칸에 써요.', LV_NONE, [
          splitQ('물이 1 L를 넘었어요. 몇 L 몇 mL인가요?', [{ v: 1600, max: 2000 }], { step: 500, minor: 5 }, 1600, { difficulty: 0.2,
            conclude: '1 L는 1000 mL라서 1600 mL는 1 L 600 mL예요.' }),
          splitQ('이 통에 든 물은 몇 L 몇 mL인가요?', [{ v: 1200, max: 2000 }], { step: 500, minor: 5 }, 1200, { difficulty: 0.22 }),
          splitQ('큰 눈금 1500을 넘은 물이에요. 몇 L 몇 mL인가요?', [{ v: 1900, max: 2000 }], { step: 500, minor: 5 }, 1900, { difficulty: 0.25, reveal: 'after-check' }),
        ]),
      ACT('a3', '활동 3. 눈금에 맞추어 물 붓기', 9, 'measure',
        '"작은 눈금 한 칸이 10 mL예요. 180 mL는 큰 눈금 100에서 몇 칸 더 올라가야 할까요?" 물 붓는 단추 한 번에 20 mL씩 오르는 것을 확인하며 눈금에 맞추게 한다. 눈금 위쪽에 물이 넘치게 부은 학생에게는 "덜기 단추도 있어요. 윗면이 눈금선에 딱 닿았는지 보아요"라고 말한다.',
        '물을 붓거나 덜어서 말한 양에 물의 윗면이 닿게 해요.', LV_AMT, [
          fillQ('눈금 한 칸이 10 mL예요. 물을 부어 180 mL를 만들어 보세요.', [{ v: 0, max: 250 }], { step: 50, minor: 5, pourStep: 20 }, 180, { difficulty: 0.15 }),
          fillQ('같은 그릇에 물을 부어 220 mL가 되게 해 보세요.', [{ v: 40, max: 250 }], { step: 50, minor: 5, pourStep: 20 }, 220, { difficulty: 0.2, reveal: 'after-check' }),
          fillQ('물이 100 mL 들어 있어요. 넘치지 않게 부어 140 mL를 만들어 보세요.', [{ v: 100, max: 250 }], { step: 50, minor: 5, pourStep: 20 }, 140, { difficulty: 0.22 }),
        ]),
    ],
    wrap: [
      '"눈금을 읽기 전에 가장 먼저 알아볼 것은 무엇이었나요?" 큰 눈금 사이를 몇 칸으로 나눈 것인지 세어 한 칸의 크기를 구한다는 말을 이끌어 낸다. "1 L보다 많은 물은 어떻게 쓰나요?"를 물어 L 칸과 mL 칸의 뜻을 한 번 더 짚는다. 출구 2번을 틀린 학생은 큰 눈금과 작은 눈금을 섞어 읽은 것이므로 다음 시간에 눈금 세기부터 다시 한다.',
      [
        { type: 'choice', prompt: '큰 눈금 0과 100 사이에 작은 눈금이 5칸 있어요. 작은 눈금 한 칸은 몇 mL인가요?', options: ['5 mL', '20 mL', '50 mL'], answer: 1, difficulty: 0.15, explain: '100을 똑같이 5로 나누면 한 칸은 20 mL예요.' },
        { type: 'tool', tool: 'measure', options: vol([{ v: 1400, max: 2000 }], { step: 500, minor: 5, split: true }), state: {}, prompt: '그릇에 든 물은 몇 L 몇 mL인가요?', target: { read: 1400 }, difficulty: 0.2 },
        { type: 'choice', prompt: '그릇에 물이 1 L 600 mL 들어 있어요. mL 칸에 쓸 수는 무엇인가요?', options: ['6', '60', '600'], answer: 2, difficulty: 0.2, explain: '1 L를 뺀 나머지 600 mL를 mL 칸에 써요.' },
      ],
    ],
    ws: {
      title: '눈금 한 칸의 크기와 들이 읽기',
      items: [
        { type: 'figure', prompt: '눈금 그릇에 든 물의 양을 쓰세요.', tool: 'measure', options: { mode: 'volume', step: 100, minor: 5 }, figures: [
          { options: { beakers: [{ v: 260, max: 500 }] }, caption: '___ mL' }, { options: { beakers: [{ v: 380, max: 500 }] }, caption: '___ mL' }, { options: { beakers: [{ v: 140, max: 500 }] }, caption: '___ mL' }], answer: '260 mL, 380 mL, 140 mL' },
        { type: 'figure', prompt: '눈금 그릇에 든 물의 양을 몇 L 몇 mL로 쓰세요.', tool: 'measure', options: { mode: 'volume', step: 500, minor: 5 }, figures: [
          { options: { beakers: [{ v: 1300, max: 2000 }] }, caption: '___ L ___ mL' }, { options: { beakers: [{ v: 1800, max: 2000 }] }, caption: '___ L ___ mL' }], answer: '1 L 300 mL, 1 L 800 mL' },
        { type: 'choice', prompt: '큰 눈금 200과 300 사이에 작은 눈금이 5칸 있어요. 작은 눈금 한 칸은 얼마인지 ○ 하세요.', options: ['5 mL', '20 mL', '100 mL'], answer: '20 mL' },
        { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '큰 눈금 300에서 작은 눈금 두 칸(한 칸 20 mL)을 더 가면 ______ mL예요.', answer: '340' },
        { type: 'short', prompt: '눈금을 읽기 전에 먼저 확인할 것을 한 문장으로 써 보세요.', answer: '예) 큰 눈금 사이 작은 눈금 한 칸이 얼마인지 알아본다.' },
      ],
      easy: {
        note: '큰 눈금 사이를 똑같이 나눈 칸 수로 큰 눈금의 차를 나누면 작은 눈금 한 칸의 크기가 나와요.',
        items: [
          { type: 'figure', prompt: '눈금 그릇에 든 물의 양을 쓰세요.', tool: 'measure', options: { mode: 'volume', step: 100, minor: 2 }, figures: [
            { options: { beakers: [{ v: 250, max: 500 }] }, caption: '___ mL' }, { options: { beakers: [{ v: 450, max: 500 }] }, caption: '___ mL' }], answer: '250 mL, 450 mL' },
          { type: 'choice', prompt: '큰 눈금 0과 100 사이에 작은 눈금이 2칸 있어요. 작은 눈금 한 칸은 몇 mL인가요?', options: ['50 mL', '20 mL'], answer: '50 mL' },
          { type: 'short', prompt: '1 L 400 mL에서 mL 칸에 쓰는 수를 써 보세요.', answer: '400' },
        ],
      },
    },
    diff: {
      easy: '물을 붓는 단추 옆에 지금 든 물의 양이 보여서 눈금과 수를 견주며 부어요. 눈금 칸 수 세기를 교사와 함께 해요.',
      base: '물의 양이 숨겨져 있고 작은 눈금이 5칸이어서 한 칸의 크기를 스스로 구해 읽어요.',
      challenge: '작은 눈금이 10 mL, 20 mL, 50 mL로 다른 그릇을 읽고, 같은 물이 눈금마다 어떻게 읽히는지 견주어요.',
    },
    notes: '자주 보이는 어려움: ① 작은 눈금 한 칸을 1 mL로 읽는다(340을 304로 읽음) → 큰 눈금 사이 칸 수로 나눈 값을 먼저 쓰게 한다. ② 윗면이 눈금선 사이에 있을 때 위쪽 큰 눈금을 읽는다 → 물이 지나온 큰 눈금부터 읽는다. ③ 1 L 600 mL를 1 L 6 mL로 쓴다 → mL 칸에는 1000 미만의 수가 온다고 말해 둔다. 10 mL·20 mL 눈금은 실제 계량컵으로 짝 활동을 해 보면 더 잘 이해한다.',
  }));

  // ───────────────────────────── 3차시 (core · 어림과 알맞은 단위) ─────────────────────────────
  lessons.push(LES(3, ['[4수03-17]'], {
    title: '눈금이 없는 그릇의 물을 어림해 말하고 알맞은 단위 쓰기',
    objective: '기준이 되는 그릇과 견주어 눈금이 없는 그릇의 들이를 약 몇 mL로 어림하고, 생활 속 들이에 알맞은 단위를 말로 설명할 수 있다.',
    ill: 'two glass jars on a kitchen table, one with tick marks and one plain, and a paper cat looking at both with a thought bubble, with pastel water inside',
    scene: '약 몇 mL일까?',
    intro: [
      '"눈금이 없는 컵에 든 주스가 몇 mL인지 어떻게 알 수 있을까요?" 눈금이 있는 컵 옆에 같은 크기의 눈금 없는 컵을 놓은 시연 단추를 보여 주며 높이를 견주게 한다. "정확히는 모르지만 약 몇 mL인지는 말할 수 있어요." 약이라는 말이 어림이라는 뜻임을 알려 주고, 어림한 값과 정확한 값이 다를 수 있음을 먼저 말해 둔다.',
      '교실에서 눈금이 없는 컵이나 병을 하나 골라, 그 안에 약 몇 mL가 들어갈지 어림해서 짝에게 말해 봐요.',
      { tool: 'measure', options: vol([{ v: 600, max: 1000, label: '가' }, { v: 300, max: 1000, label: '나', ticks: false }]), sequence: [{ v: [600, 300] }] },
    ],
    acts: [
      ACT('a1', '활동 1. 눈금 있는 그릇과 견주어 어림하기', 9, 'measure',
        '"가 그릇은 눈금이 있어요. 나 그릇의 물 높이는 가 그릇의 물 높이의 반쯤이에요. 약 몇 mL일까요?" 두 그릇 크기가 같다는 것을 먼저 확인하게 한 뒤 높이를 견주게 한다. 그릇 크기가 다를 때는 높이만 견주면 안 된다는 것을 2학년 때 배운 말로 떠올리게 한다. 800을 모두 고르는 학생에게는 "두 그릇의 높이를 손가락으로 재어 견주어 봐요"라고 한다.',
        '눈금이 있는 가 그릇과 견주어 눈금이 없는 나 그릇의 물이 약 몇 mL인지 골라요.', LV_NONE, [
          pickQ('나 그릇은 눈금이 없어요. 가 그릇과 견주어 나 그릇의 물을 어림해 보세요.', [{ v: 600, max: 1000, label: '가' }, { v: 300, max: 1000, label: '나', ticks: false }], null, '나 그릇의 물은 약 몇 mL일까요?', ['약 150 mL', '약 300 mL', '약 600 mL'], 1, { difficulty: 0.15,
            predict: { q: '나 그릇의 물 높이는 가 그릇의 높이의 반쯤이에요. 나 그릇의 물은 가 그릇보다 많을까요?', options: ['더 많아요', '더 적어요'], answer: 1 }, conclude: '높이가 반쯤이니 물의 양도 반쯤인 약 300 mL예요.' }),
          pickQ('눈금이 없는 나 그릇의 물이 약 몇 mL인지 가 그릇을 보고 어림해 보세요.', [{ v: 800, max: 1000, label: '가' }, { v: 200, max: 1000, label: '나', ticks: false }], null, '나 그릇의 물은 약 몇 mL일까요?', ['약 200 mL', '약 400 mL', '약 800 mL'], 0, { difficulty: 0.2 }),
          pickQ('이번에는 나 그릇의 물이 더 많아요. 가 그릇과 견주어 어림해 보세요.', [{ v: 400, max: 1000, label: '가' }, { v: 800, max: 1000, label: '나', ticks: false }], null, '나 그릇의 물은 약 몇 mL일까요?', ['약 200 mL', '약 800 mL', '약 1000 mL'], 1, { difficulty: 0.22 }),
        ]),
      ACT('a2', '활동 2. 컵으로 몇 번 부으면 될까요', 9, 'measure',
        '"종이컵 한 컵이 200 mL예요. 1 L 물병을 가득 채우려면 몇 컵이 필요할까요?" 컵 하나의 들이를 눈금으로 읽은 뒤, 200씩 더해 1000이 되는 횟수를 세게 한다. 1000을 200으로 나누는 계산이 어려운 학생에게는 컵 그림을 5개까지 그려 보게 한다. 어림할 때는 "약"을 쓴다고 짚는다.',
        '컵 한 개의 들이를 보고, 1 L를 채우는 데 필요한 컵의 수를 칸에 써요.', LV_NONE, [
          numQ('종이컵 한 컵이 이만큼이에요. 1 L 물병을 채우려면 몇 컵이 필요할까요?', [{ v: 200, max: 1000, label: '컵' }], null, '컵의 수', '컵', 5, { difficulty: 0.2,
            conclude: '200 mL씩 5번이면 1000 mL, 즉 1 L예요.' }),
          numQ('물총 한 번에 이만큼 들어가요. 1 L를 채우려면 몇 번 넣어야 할까요?', [{ v: 250, max: 1000, label: '물총' }], null, '넣는 횟수', '번', 4, { difficulty: 0.22 }),
          numQ('작은 계량컵 한 개가 이만큼이에요. 1 L를 채우려면 몇 번 부어야 할까요?', [{ v: 100, max: 1000, label: '계량컵' }], null, '붓는 횟수', '번', 10, { difficulty: 0.25 }),
        ]),
      ACT('a3', '활동 3. 생활 속 들이에 알맞은 단위 말하기', 9, 'measure',
        '"이 물건의 들이를 말할 때 왜 이 단위를 골랐는지 한 문장으로 말해 볼까요?" 짝에게 "샴푸 통은 ○○ 정도라서 mL예요"처럼 근거를 붙여 말하게 한다. 양동이와 욕조를 모두 mL로 고르는 학생에게는 "수가 너무 커지면 읽기 어려워져요. 몇 mL인지 말해 볼래요?"라고 되묻는다.',
        '물건마다 알맞은 들이 단위를 골라요. 고른 까닭을 짝에게 말해 봐요.', LV_NONE, [
          unitQ('물건에 담긴 물의 양을 어림해서 알맞은 단위를 골라 보세요.', [{ name: '샴푸 통의 샴푸', amount: 500 }, { name: '양동이에 가득 담은 물', amount: 10 }, { name: '물감 통의 물감', amount: 30 }], ['mL', 'L'], [0, 1, 0], { difficulty: 0.18 }),
          unitQ('음료수병과 세탁기, 물총에 든 물이에요. 알맞은 단위를 골라 보세요.', [{ name: '비타민 음료 한 병', amount: 100 }, { name: '세탁기에 받은 물', amount: 40 }, { name: '컵라면 용기의 물', amount: 500 }], ['mL', 'L'], [0, 1, 0], { difficulty: 0.2 }),
          unitQ('빗물받이 통과 간장 종지, 생수병이에요. 알맞은 단위를 골라 보세요.', [{ name: '마당 빗물받이 통', amount: 100 }, { name: '간장 종지의 간장', amount: 20 }, { name: '큰 생수병의 물', amount: 2 }], ['mL', 'L'], [1, 0, 1], { difficulty: 0.22 }),
        ]),
    ],
    wrap: [
      '"어림한 값과 정확하게 잰 값은 항상 같을까요?" 눈금 그릇으로 확인하기 전에는 약 몇 mL라고만 말할 수 있다는 것을 이끌어 낸다. "1 L를 채우려고 컵을 몇 번 부었나요?" 하고 컵 수와 컵 들이를 곱하면 1000이 된다는 생각을 말하게 한다. 출구 1번을 틀린 학생은 어림에도 "약"이라는 말을 붙이는 이유를 다음 시간 도입에서 다시 짚는다.',
      [
        { type: 'choice', prompt: '눈금이 없는 컵의 물이 눈금이 있는 컵의 반쯤이에요. 눈금 있는 컵에 600 mL가 있다면 눈금 없는 컵의 물은 약 얼마일까요?', options: ['약 300 mL', '약 600 mL', '약 1200 mL'], answer: 0, difficulty: 0.2, explain: '반쯤이니까 600 mL의 반인 약 300 mL예요.' },
        { type: 'tool', tool: 'measure', options: vol([{ v: 500, max: 1000, label: '국그릇' }], null, { readOnly: true, askNum: { q: '1 L 냄비를 채우려면 필요한 그릇 수', unit: '그릇' } }), state: {}, prompt: '국그릇 한 개가 이만큼이에요. 1 L를 채우려면 몇 그릇이 필요한가요?', target: { num: 2 }, difficulty: 0.2 },
        { type: 'choice', prompt: '큰 양동이에 가득 담은 물의 양을 말할 때 알맞은 단위는 무엇인가요?', options: ['mL', 'L'], answer: 1, difficulty: 0.1, explain: '많은 양은 수가 너무 커지지 않도록 L로 말해요.' },
      ],
    ],
    ws: {
      title: '어림하고 알맞은 단위 쓰기',
      items: [
        { type: 'figure', prompt: '가 그릇은 눈금이 있어요. 나 그릇의 물이 약 몇 mL인지 쓰세요.', tool: 'measure', wide: true, options: { mode: 'volume', step: 100, minor: 1 }, figures: [
          { options: { beakers: [{ v: 600, max: 1000, label: '가' }, { v: 300, max: 1000, label: '나', ticks: false }] }, caption: '나: 약 ___ mL' }, { options: { beakers: [{ v: 400, max: 1000, label: '가' }, { v: 800, max: 1000, label: '나', ticks: false }] }, caption: '나: 약 ___ mL' }], answer: '약 300 mL, 약 800 mL' },
        { type: 'table', prompt: '종이컵 한 컵의 들이로 1 L를 채우는 데 필요한 컵 수를 쓰세요.', columns: ['컵 한 개의 들이', '필요한 컵 수'], cells: [['200 mL', ''], ['250 mL', ''], ['500 mL', '']], answer: '5컵, 4컵, 2컵' },
        { type: 'choice', prompt: '한 방울씩 떨어뜨려 쓰는 눈약의 양에 알맞은 단위에 ○ 하세요.', options: ['mL', 'L'], answer: 'mL' },
        { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '정확하게 재지 않고 대강 짐작하는 것을 ______이라고 하고, 수 앞에 ______를 붙여 말해요.', answer: '어림, 약' },
        { type: 'short', prompt: '우리 집에서 약 1 L쯤 담기는 그릇을 하나 찾아 이름을 써 보세요.' },
      ],
      easy: {
        note: '눈금이 있는 그릇과 높이를 견주어 어림하고, 수 앞에 "약"을 붙여 말해요.',
        items: [
          { type: 'figure', prompt: '가 그릇의 눈금을 보고 나 그릇의 물이 약 몇 mL인지 쓰세요.', tool: 'measure', wide: true, options: { mode: 'volume', step: 100, minor: 1 }, figures: [
            { options: { beakers: [{ v: 800, max: 1000, label: '가' }, { v: 400, max: 1000, label: '나', ticks: false }] }, caption: '나: 약 ___ mL' }], answer: '약 400 mL' },
          { type: 'choice', prompt: '큰 욕조의 물의 양을 말할 때 알맞은 단위에 ○ 하세요.', options: ['mL', 'L'], answer: 'L' },
          { type: 'short', prompt: '200 mL 컵 5개를 채우면 몇 L인지 써 보세요.', answer: '1 L' },
        ],
      },
    },
    diff: {
      easy: '가 그릇과 나 그릇의 크기가 같아서 높이만 견주면 돼요. 컵 수 문항은 컵 그림을 세어 확인해요.',
      base: '두 그릇의 크기가 같음을 확인한 뒤 높이를 견주어 어림하고, 필요한 컵 수를 계산해요.',
      challenge: '컵 하나의 들이가 250 mL, 100 mL처럼 나누어떨어지는 수라서 몇 번씩 붓는지 스스로 정해요. 어림한 값과 실제 값의 차이도 말해요.',
    },
    notes: '자주 보이는 어려움: ① 그릇 크기가 다른데도 물 높이만 견주어 어림한다 → 먼저 두 그릇의 크기를 확인하게 한다. ② "약"을 붙이지 않고 정확한 값처럼 말한다 → 어림 문장은 반드시 "약 ○ mL예요"로 말하게 한다. ③ 컵 수 문제에서 1000과 컵의 들이를 더하거나 빼 버린다 → 컵 그림을 한 개씩 그려 1000이 될 때까지 센다. 실제 계량컵으로 짝 활동을 하면 어림의 감각이 잘 자란다.',
  }));

  // ───────────────────────────── 4차시 (core · 1 L = 1000 mL) ─────────────────────────────
  lessons.push(LES(4, ['[4수03-18]'], {
    title: '200 mL 컵으로 채워 1 L가 몇 mL인지 알아보기',
    objective: '컵으로 물을 부어 1 L가 1000 mL임을 확인하고, 몇 L를 mL로, 몇 천 mL를 몇 L로 바꾸어 말할 수 있다.',
    ill: 'a paper rabbit pouring water from a small mint cup into a tall one liter bottle while five cups stand in a row on a wooden table',
    scene: '1 L = 1000 mL',
    intro: [
      '"1 L 물병을 채우려면 200 mL 컵으로 몇 번 부어야 할까요?" 지난 시간 3차시의 컵 문제를 떠올리게 한 뒤 시연 단추로 물이 1000 눈금까지 차오르는 것을 보여 준다. "눈금 맨 위를 읽으면 몇 mL일까요?" 하고 묻고, 1 L를 mL로 말하면 어떤 수가 나오는지 오늘 알아본다고 말한다. 1000이 아니라 100이라고 답하는 학생이 있으면 활동 1에서 직접 부어 확인하게 한다.',
      '1 L 물병과 200 mL 컵이 있다면 물병을 가득 채우는 데 컵이 몇 개나 필요할지 예상해서 짝에게 말해 봐요.',
      { tool: 'measure', options: vol([{ v: 0, max: 1000 }], { step: 100, minor: 1 }), sequence: [{ v: [1000] }] },
    ],
    acts: [
      ACT('a1', '활동 1. 컵으로 부어 1 L 채우기', 9, 'measure',
        '"컵으로 한 번 붓는 양은 200 mL예요. 물병이 가득 차려면 몇 번 부어야 할까요?" 한 번 부을 때마다 수가 어떻게 변하는지 소리 내어 세게 한다. 200, 400, 600 하고 센 뒤 마지막 눈금을 읽으면 1000 mL임을 확인한다. 2 L 통에서는 500 mL씩 부어 보며 1 L가 두 번이면 2000 mL라는 것을 짚는다.',
        '물 붓는 단추를 눌러 문제에서 말한 만큼 채워요. 한 번에 오르는 양은 문제마다 달라요.', LV_AMT, [
          fillQ('200 mL 컵으로 부어 1 L 물병의 눈금 1000까지 채워 보세요. 몇 번 부으면 될까요?', [{ v: 0, max: 1200 }], { step: 100, minor: 1, pourStep: 200 }, 1000, { difficulty: 0.1,
            predict: { q: '1 L 물병에 가득 찬 물은 몇 mL일까요?', options: ['100 mL', '1000 mL', '10000 mL'], answer: 1 }, conclude: '200 mL씩 5번 부으면 1000 mL이고, 이것이 1 L예요.' }),
          fillQ('500 mL 컵으로 부어 2 L 통의 눈금 2000까지 채워 보세요.', [{ v: 0, max: 2500 }], { step: 500, minor: 5, pourStep: 500 }, 2000, { difficulty: 0.15, reveal: 'after-check' }),
          fillQ('1 L 병 세 개의 물을 모은 큰 통이에요. 500 mL 컵으로 부어 3 L를 만들어 보세요.', [{ v: 0, max: 3500 }], { step: 500, minor: 5, pourStep: 500 }, 3000, { difficulty: 0.2 }),
        ]),
      ACT('a2', '활동 2. 몇 L를 몇 mL로 바꾸기', 9, 'measure',
        '"1 L는 1000 mL예요. 그러면 2 L는 몇 mL일까요?" 1000 mL짜리 병이 두 개 있는 그림을 그려 보며 1000 더하기 1000을 세게 한다. 2 L를 200 mL나 2100 mL라고 쓰는 학생에게는 "1 L 하나가 1000 mL였지요? 몇 개가 있나요?"라고 되묻는다.',
        '그릇에 든 물의 양을 보고 mL로 바꾸어 답 칸에 써요.', LV_NONE, [
          numQ('그릇에 물이 1 L 들어 있어요. 몇 mL일까요?', [{ v: 1000, max: 1000 }], { step: 100, minor: 1 }, '1 L는', 'mL', 1000, { difficulty: 0.1 }),
          numQ('이 큰 물통에 물이 2 L 들어 있어요. 몇 mL일까요?', [{ v: 2000, max: 2000 }], { step: 500, minor: 5 }, '2 L는', 'mL', 2000, { difficulty: 0.15,
            conclude: '1 L가 1000 mL라서 2 L는 1000 mL가 두 번, 2000 mL예요.' }),
          numQ('욕조 옆 큰 통에 물이 3 L 들어 있어요. 몇 mL일까요?', [{ v: 3000, max: 3000 }], { step: 500, minor: 5 }, '3 L는', 'mL', 3000, { difficulty: 0.2 }),
        ]),
      ACT('a3', '활동 3. 몇 mL를 몇 L로 바꾸기', 9, 'measure',
        '"4000 mL는 1000 mL가 몇 번 들어 있을까요?" 1000씩 묶어 세게 한 뒤 묶음 수가 L의 수라고 말하게 한다. 0을 하나씩 지우며 4000을 40이나 400으로 읽는 학생에게는 "1000 mL가 한 병이었지요? 병이 몇 개일까요?"라고 되묻는다. 마지막 문항은 같은 양을 두 가지로 쓰는 말하기로 마무리한다.',
        '물의 양을 보고 L로 바꾸어 답 칸에 써요. 1000 mL씩 묶어 세어 봐요.', LV_NONE, [
          numQ('이 통에 물이 4000 mL 들어 있어요. 몇 L일까요?', [{ v: 4000, max: 4000 }], { step: 1000, minor: 2 }, '4000 mL는', 'L', 4, { difficulty: 0.15 }),
          numQ('양동이 옆 물통에 2000 mL의 물이 있어요. 몇 L일까요?', [{ v: 2000, max: 2000 }], { step: 500, minor: 5 }, '2000 mL는', 'L', 2, { difficulty: 0.15, reveal: 'after-check' }),
          numQ('수영 대회 물통에 5000 mL의 물이 있어요. 몇 L일까요?', [{ v: 5000, max: 5000 }], { step: 1000, minor: 2 }, '5000 mL는', 'L', 5, { difficulty: 0.2 }),
        ]),
    ],
    wrap: [
      '"1 L는 몇 mL인가요? 2 L는요?" 칠판에 1 L = 1000 mL, 2 L = 2000 mL를 쓰고 L를 mL로 바꿀 때는 1000을 곱하는 것이 아니라 1000 mL가 몇 개인지 세는 것이라고 말한다. 출구 3번에서 5 L를 500 mL로 쓴 학생은 0의 개수를 놓친 것이므로 다음 시간 도입에서 1000을 쓰는 연습부터 한다.',
      [
        { type: 'choice', prompt: '1 L와 같은 양은 무엇인가요?', options: ['10 mL', '100 mL', '1000 mL'], answer: 2, difficulty: 0.1, explain: '1 L는 1000 mL와 같아요.' },
        { type: 'tool', tool: 'measure', options: vol([{ v: 3000, max: 3000 }], { step: 500, minor: 5, readOnly: true, askNum: { q: '3000 mL는', unit: 'L' } }), state: {}, prompt: '그릇에 물이 3000 mL 들어 있어요. 몇 L일까요?', target: { num: 3 }, difficulty: 0.15 },
        { type: 'choice', prompt: '5 L를 mL로 바르게 나타낸 것은 무엇인가요?', options: ['50 mL', '500 mL', '5000 mL'], answer: 2, difficulty: 0.18, explain: '1 L가 1000 mL이므로 5 L는 5000 mL예요.' },
      ],
    ],
    ws: {
      title: '1 L는 1000 mL',
      items: [
        { type: 'figure', prompt: '물이 가득 든 그릇의 들이를 mL로 쓰세요.', tool: 'measure', options: { mode: 'volume', step: 500, minor: 5 }, figures: [
          { options: { beakers: [{ v: 1000, max: 1000 }], step: 100, minor: 2 }, caption: '___ mL' }, { options: { beakers: [{ v: 2000, max: 2000 }] }, caption: '___ mL' }], answer: '1000 mL, 2000 mL' },
        { type: 'table', prompt: '빈칸에 알맞은 수를 쓰세요.', columns: ['L', 'mL'], cells: [['1 L', '1000 mL'], ['3 L', ''], ['', '4000 mL'], ['6 L', ''], ['', '8000 mL']], answer: '3000, 4 L, 6000, 8 L' },
        { type: 'choice', prompt: '2 L와 같은 들이를 말한 친구에 ○ 하세요.', options: ['"200 mL예요"', '"2000 mL예요"', '"20 mL예요"'], answer: '"2000 mL예요"' },
        { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '1 L = ______ mL이고, 3000 mL = ______ L예요.', answer: '1000, 3' },
        { type: 'short', prompt: '200 mL 컵으로 3 L 통을 가득 채우려면 몇 번 부어야 하는지 쓰고 까닭을 말해 보세요.', answer: '15번. 3 L는 3000 mL이고 3000 ÷ 200 = 15이기 때문이에요.' },
      ],
      easy: {
        note: '1 L = 1000 mL예요. L 수만큼 1000 mL가 있다고 생각해요.',
        items: [
          { type: 'figure', prompt: '물이 가득 든 그릇의 들이를 mL로 쓰세요.', tool: 'measure', options: { mode: 'volume', step: 100, minor: 1, beakers: [{ v: 1000, max: 1000 }] }, figures: [{ caption: '___ mL' }], answer: '1000 mL' },
          { type: 'table', prompt: '빈칸에 알맞은 수를 쓰세요.', columns: ['L', 'mL'], cells: [['1 L', '1000 mL'], ['2 L', ''], ['', '3000 mL']], answer: '2000, 3 L' },
          { type: 'choice', prompt: '1 L와 같은 것에 ○ 하세요.', options: ['100 mL', '1000 mL'], answer: '1000 mL' },
        ],
      },
    },
    diff: {
      easy: '물 붓는 양이 눈금 하나(200 mL 또는 500 mL)씩이고 지금 든 물의 양이 숫자로 보여서 1000에 닿는 것을 확인해요.',
      base: '물의 양을 숨긴 채 컵 수를 세어 부어 보고, L와 mL를 서로 바꾸어 써요.',
      challenge: '2 L, 3 L, 5 L처럼 큰 들이를 다루고 0의 개수가 맞는지 스스로 점검해 설명해요.',
    },
    notes: '자주 보이는 어려움: ① 1 L를 100 mL나 10000 mL로 쓴다 → 눈금 맨 위의 수를 직접 읽고 컵으로 부어 센다. ② L를 mL로 바꿀 때 L 수 뒤에 0을 몇 개 붙일지 헷갈린다 → 1000 mL 병이 몇 개인지 그림으로 센다. ③ mL를 L로 바꿀 때 수만 줄여 4000 mL를 400 L로 쓴다 → 1000 mL가 몇 번 들어 있는지 묶어 센다. 1 L 300 mL처럼 섞인 수는 5차시에서 다룬다.',
  }));

  // ───────────────────────────── 5차시 (core · 몇 L 몇 mL와 몇 mL) ─────────────────────────────
  lessons.push(LES(5, ['[4수03-18]'], {
    title: '1 L 300 mL와 1300 mL, 두 가지로 바꾸어 쓰기',
    objective: '들이를 몇 L 몇 mL로 쓴 것과 몇 mL로 쓴 것으로 서로 바꾸어 나타내고, 0이 들어 있는 수도 바르게 바꿀 수 있다.',
    ill: 'a paper fox writing two ways of a water amount on a cream notebook beside a tall measuring jug, with arrows connecting the two ways',
    scene: '두 가지로 쓰기',
    intro: [
      '"물이 1 L 300 mL 들어 있어요. 이것을 mL만으로 쓰면 어떻게 될까요?" 시연 단추로 물이 1000 눈금을 넘어 300 더 올라가는 것을 보여 준다. 1300이라고 예상하는 학생과 400이라고 예상하는 학생이 있다면 두 예상을 칠판에 적어 두었다가 활동 2에서 다시 판단하게 한다. "같은 양을 두 가지 방법으로 쓸 수 있어요."',
      '눈금 그릇에 든 물이 1 L를 조금 넘었을 때, 몇 L 몇 mL로도 쓸 수 있고 몇 mL로도 쓸 수 있을지 예상해 봐요.',
      { tool: 'measure', options: vol([{ v: 0, max: 2000 }], { step: 500, minor: 5 }), sequence: [{ v: [1300] }] },
    ],
    acts: [
      ACT('a1', '활동 1. 몇 mL를 몇 L 몇 mL로', 9, 'measure',
        '"물이 2300 mL 있어요. 1000 mL 병이 몇 개 나오고 남는 것은 몇 mL일까요?" 1000씩 덜어 내는 순서를 L 칸과 mL 칸에 쓰게 한다. 1050 mL를 1 L 5 mL나 1 L 500 mL로 쓰는 학생이 있다 — "1000을 덜어 내고 남은 수가 몇이에요? 050이 50이에요"라고 짚는다. 눈금 읽기로 L 칸에 쓴 수를 확인하게 한다.',
        '눈금 그릇의 물을 읽어 몇 L 몇 mL로 써요. 1000 mL씩 묶으면 L 칸의 수가 나와요.', LV_NONE, [
          splitQ('물이 2300 mL 들어 있어요. 몇 L 몇 mL로 쓸 수 있을까요?', [{ v: 2300, max: 3000 }], { step: 500, minor: 5 }, 2300, { difficulty: 0.15,
            conclude: '2300 mL에서 1000 mL가 두 번 들어 있고 300 mL가 남아요. 2 L 300 mL예요.' }),
          splitQ('물이 1050 mL 들어 있어요. 몇 L 몇 mL로 쓸 수 있을까요?', [{ v: 1050, max: 2000 }], { step: 500, minor: 10 }, 1050, { difficulty: 0.22, reveal: 'after-check' }),
          splitQ('물이 2750 mL 들어 있어요. 몇 L 몇 mL로 쓸 수 있을까요?', [{ v: 2750, max: 3000 }], { step: 500, minor: 10 }, 2750, { difficulty: 0.22 }),
        ]),
      ACT('a2', '활동 2. 몇 L 몇 mL를 몇 mL로', 9, 'measure',
        '"2 L 500 mL는 2 L와 500 mL예요. 2 L는 몇 mL였지요?" 먼저 L 부분을 mL로 바꾼 뒤 남은 mL를 더하게 한다. 1 L 70 mL를 1170 mL로 쓰는 학생이 있다 — "70 mL는 두 자리 수예요. 1000과 70을 더하면 얼마일까요?"라고 되묻는다. 3 L 40 mL처럼 0이 가운데 들어간 수는 일의 자리를 한 번 더 짚어 읽게 한다.',
        '몇 L 몇 mL로 쓴 양을 mL만으로 바꾸어 답 칸에 써요.', LV_NONE, [
          numQ('물이 2 L 500 mL 들어 있어요. mL만으로 쓰면 몇 mL일까요?', [{ v: 2500, max: 3000 }], { step: 500, minor: 5 }, '2 L 500 mL는', 'mL', 2500, { difficulty: 0.15 }),
          numQ('물이 1 L 70 mL 들어 있어요. mL만으로 쓰면 몇 mL일까요?', [{ v: 1070, max: 2000 }], { step: 500, minor: 10 }, '1 L 70 mL는', 'mL', 1070, { difficulty: 0.22,
            predict: { q: '1 L 70 mL를 1170 mL로 쓰면 맞을까요?', options: ['맞아요', '틀려요'], answer: 1 }, conclude: '1000 mL에 70 mL를 더하면 1070 mL예요.' }),
          numQ('물이 3 L 40 mL 들어 있어요. mL만으로 쓰면 몇 mL일까요?', [{ v: 3040, max: 4000 }], { step: 1000, minor: 5 }, '3 L 40 mL는', 'mL', 3040, { difficulty: 0.25, reveal: 'after-check' }),
        ]),
      ACT('a3', '활동 3. 쓴 대로 물 붓기', 9, 'measure',
        '"1 L 250 mL만큼 물을 부어 볼까요? 물은 눈금 몇까지 올라가야 하나요?" 쓴 양을 눈금 수로 바꾸어 생각한 뒤 붓게 한다. 1 L 250 mL를 1250이 아니라 1025나 125로 만드는 학생에게는 L 눈금을 지났는지 먼저 확인하게 한다. 부은 뒤에는 "mL만으로는 몇 mL예요?"라고 물어 두 가지 쓰기를 연결한다.',
        '말한 들이가 되도록 물을 부어요. 눈금에 닿았을 때 mL 수로도 말해 봐요.', LV_AMT, [
          fillQ('물을 부어 1 L 250 mL를 만들어 보세요.', [{ v: 0, max: 2000 }], { step: 500, minor: 10, pourStep: 50 }, 1250, { difficulty: 0.2 }),
          fillQ('물을 부어 2 L 100 mL를 만들어 보세요.', [{ v: 0, max: 3000 }], { step: 500, minor: 5, pourStep: 100 }, 2100, { difficulty: 0.2, reveal: 'after-check' }),
          fillQ('물을 부어 1 L 900 mL를 만들어 보세요. 2 L까지 몇 mL 남을까요?', [{ v: 0, max: 2000 }], { step: 500, minor: 5, pourStep: 100 }, 1900, { difficulty: 0.22 }),
        ]),
    ],
    wrap: [
      '"몇 L 몇 mL를 mL만으로 바꿀 때 가장 먼저 무엇을 바꾸나요?" L 부분을 먼저 mL로 바꾸어 1000이 몇 개인지 세고, 남은 mL를 더한다는 순서를 이끌어 낸다. 출구 2번에서 2 L 40 mL를 2400 mL로 쓴 학생은 40을 400으로 읽은 것이므로 일의 자리를 한 칸씩 쓰며 다시 읽게 한다.',
      [
        { type: 'choice', prompt: '1 L 800 mL와 같은 들이는 무엇인가요?', options: ['180 mL', '1080 mL', '1800 mL'], answer: 2, difficulty: 0.18, explain: '1 L는 1000 mL이므로 1000 mL와 800 mL를 더해 1800 mL예요.' },
        { type: 'choice', prompt: '2040 mL를 몇 L 몇 mL로 바르게 쓴 것은 무엇인가요?', options: ['2 L 40 mL', '2 L 400 mL', '20 L 40 mL'], answer: 0, difficulty: 0.22, explain: '1000 mL가 두 번 들어 있고 40 mL가 남아요. 2 L 40 mL예요.' },
        { type: 'tool', tool: 'measure', options: vol([{ v: 1350, max: 2000 }], { step: 500, minor: 10, split: true }), state: {}, prompt: '물이 1350 mL 들어 있어요. 몇 L 몇 mL일까요?', target: { read: 1350 }, difficulty: 0.22 },
      ],
    ],
    ws: {
      title: '두 가지로 쓰는 들이',
      items: [
        { type: 'table', prompt: '같은 들이가 되도록 빈칸에 알맞은 수를 쓰세요.', columns: ['몇 L 몇 mL', '몇 mL'], cells: [['1 L 300 mL', '1300 mL'], ['2 L 500 mL', ''], ['', '3200 mL'], ['1 L 70 mL', ''], ['', '2050 mL']], answer: '2500 mL, 3 L 200 mL, 1070 mL, 2 L 50 mL' },
        { type: 'figure', prompt: '눈금 그릇에 든 물의 양을 몇 L 몇 mL로 쓰세요.', tool: 'measure', options: { mode: 'volume', step: 500, minor: 10 }, figures: [
          { options: { beakers: [{ v: 1450, max: 2000 }] }, caption: '___ L ___ mL' }, { options: { beakers: [{ v: 2150, max: 3000 }] }, caption: '___ L ___ mL' }], answer: '1 L 450 mL, 2 L 150 mL' },
        { type: 'choice', prompt: '3 L 40 mL를 mL만으로 바르게 쓴 친구에 ○ 하세요.', options: ['"340 mL"', '"3040 mL"', '"3400 mL"'], answer: '"3040 mL"' },
        { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '1 L 600 mL = 1000 mL + ______ mL = ______ mL', answer: '600, 1600' },
        { type: 'short', prompt: '1 L 70 mL를 1170 mL라고 쓰면 안 되는 까닭을 써 보세요.', answer: '70 mL가 아니라 170 mL를 더한 것이기 때문이에요. 1000 + 70 = 1070이에요.' },
      ],
      easy: {
        note: 'L는 1000 mL씩 묶음이에요. L 수만큼 1000을 쓰고 남은 mL를 더해요.',
        items: [
          { type: 'table', prompt: '같은 들이가 되도록 빈칸에 알맞은 수를 쓰세요.', columns: ['몇 L 몇 mL', '몇 mL'], cells: [['1 L 200 mL', '1200 mL'], ['2 L 400 mL', ''], ['', '3100 mL']], answer: '2400 mL, 3 L 100 mL' },
          { type: 'choice', prompt: '1 L 500 mL와 같은 들이에 ○ 하세요.', options: ['1500 mL', '150 mL'], answer: '1500 mL' },
          { type: 'short', prompt: '1000 mL와 300 mL를 더하면 몇 mL인지 쓰세요.', answer: '1300 mL' },
        ],
      },
    },
    diff: {
      easy: '물을 부을 때 지금 든 물의 양이 숫자로 보이고, 0이 들어 있는 수(1050, 3040)는 눈금이 50 mL씩 보여요.',
      base: '물의 양이 숨겨져 있고 눈금을 읽어 몇 L 몇 mL와 몇 mL를 서로 바꾸어 써요.',
      challenge: '0이 가운데 들어 있는 수(1070, 3040, 2050)를 바꾸고, 어느 자리에 0을 써야 하는지 까닭을 써요.',
    },
    notes: '자주 보이는 어려움: ① 1 L 70 mL를 1170 mL나 1700 mL로 쓴다 → 1000과 70을 일의 자리 맞추어 더하게 한다. ② 2040 mL를 2 L 400 mL로 읽는다 → 1000을 덜어 낸 나머지가 040임을 쓰고 읽는다. ③ L 칸에 mL 수를 그대로 쓴다 → "L 칸에는 1000 mL 묶음의 개수만 써요"를 반복한다. 0이 있는 수를 어려워하면 100 mL 단위 눈금을 함께 쓰며 읽는 연습을 한다.',
  }));

  // ───────────────────────────── 6차시 (core · 두 가지로 쓴 들이 견주기) ─────────────────────────────
  const orderAmt = (prompt, cards, x) => X({ prompt, toolOptions: { axis: ['적은 들이', '많은 들이'], cards: cards.map((c) => ({ id: c[0], text: c[1] })) }, target: { order: cards.map((c) => c[0]) } }, x);
  const matchAmt = (prompt, pairs, trap, x) => X({ prompt, toolOptions: { mode: 'match', topic: '같은 들이', slots: pairs.map((p, i) => ({ id: `s${i + 1}`, label: p[0] })), cards: pairs.map((p, i) => ({ id: `c${i + 1}`, text: p[1] })).concat(trap.map((t, i) => ({ id: `x${i + 1}`, text: t }))) }, target: { match: Object.fromEntries(pairs.map((p, i) => [`s${i + 1}`, `c${i + 1}`])) } }, x);
  lessons.push(LES(6, ['[4수03-18]'], {
    title: '1 L 700 mL와 1500 mL, 두 가지로 쓴 들이 견주기',
    objective: '몇 L 몇 mL와 몇 mL로 다르게 쓴 들이를 같은 방식으로 바꾸어 누가 더 많은지 견주고 많은 순서로 놓을 수 있다.',
    ill: 'three paper jugs of different sizes lined up on a shelf with handwritten price-tag style labels showing amounts, and a paper owl pointing at the biggest one',
    scene: '누가 더 많을까?',
    intro: [
      '"가 병에는 1 L 700 mL, 나 병에는 1500 mL가 들어 있어요. 어느 쪽이 더 많을까요?" 두 병의 쓴 모양이 달라 바로 견주기 어렵다는 점을 말로 확인한다. 시연 단추로 두 병에 물이 차오르는 것을 보여 주며 높이를 견주어 보게 한 뒤, 높이 대신 수로 견주려면 같은 단위로 바꾸어야 한다고 알려 준다. "1 L 700 mL가 더 크다"고 말하는 학생에게 근거를 말하게 한다.',
      '냉장고에 있는 음료수병 두 개를 떠올려, 한 병에는 1 L 500 mL가 들어 있다면 다른 병과 견주려면 무엇을 해야 할지 짝에게 말해 봐요.',
      { tool: 'measure', options: vol([{ v: 1700, max: 2000, label: '가' }, { v: 1500, max: 2000, label: '나' }], { step: 500, minor: 5, readOnly: true }), sequence: [{ v: [1700, 1500] }] },
    ],
    acts: [
      ACT('a1', '활동 1. 들이가 많은 순서로 놓기', 9, 'timeline',
        '"980 mL와 1 L 20 mL 중 어느 쪽이 더 많을까요? 같은 단위로 바꾸어 견주어 봐요." 카드를 놓기 전에 모든 카드를 mL로 바꾸어 칠판에 쓰게 한다. 1 L 20 mL를 120으로 바꾼 학생이 있다 — "1000과 20을 더하면 몇 mL예요?"라고 되묻고 일의 자리를 맞추어 쓰게 한다. 놓은 뒤 가장 많은 것과 가장 적은 것의 차이가 몇 mL인지 물어 본다.',
        '카드를 들이가 적은 것부터 많은 것까지 순서대로 놓아요. 카드를 모두 mL로 바꾸어 견주어 봐요.', LV_NONE, [
          orderAmt('들이가 적은 것부터 많은 순서로 카드를 놓아 보세요.', [['a', '980 mL'], ['b', '1 L 20 mL'], ['c', '1100 mL'], ['d', '1 L 200 mL']], { difficulty: 0.2,
            conclude: '980 mL < 1020 mL < 1100 mL < 1200 mL 순서예요. 모두 mL로 바꾸어 견주었어요.' }),
          orderAmt('이번에는 물통 네 개예요. 적은 것부터 많은 순서로 놓아 보세요.', [['a', '1700 mL'], ['b', '2 L 50 mL'], ['c', '2100 mL'], ['d', '2 L 500 mL']], { difficulty: 0.22 }),
          orderAmt('컵 속 주스 세 개예요. 적은 것부터 많은 순서로 놓아 보세요.', [['a', '350 mL'], ['b', '800 mL'], ['c', '1 L']], { difficulty: 0.22 }),
        ]),
      ACT('a2', '활동 2. 같은 들이끼리 짝짓기', 9, 'mindmap',
        '"1 L 400 mL와 같은 양을 나타낸 카드를 찾아 이어 볼까요?" 한 장씩 mL로 바꾸어 같은지 확인한 뒤 잇게 한다. 1 L 40 mL와 1 L 400 mL를 같은 양으로 이어 버리는 학생에게는 "mL 칸의 40과 400은 같은 수인가요?"라고 묻는다. 카드에 없는 짝이 있다면 어떤 카드로 바꾸어 쓸지 물어 본다.',
        '왼쪽 칸의 들이와 같은 양을 나타낸 카드를 이어요.', LV_NONE, [
          matchAmt('같은 들이를 나타낸 카드끼리 이어 보세요.', [['1 L 400 mL', '1400 mL'], ['2 L 30 mL', '2030 mL']], ['2300 mL'], { difficulty: 0.2,
            conclude: '1 L 400 mL는 1400 mL, 2 L 30 mL는 2030 mL와 같아요.' }),
          matchAmt('같은 양끼리 이어 보세요. 짝이 없는 카드가 한 장 있어요.', [['3 L 100 mL', '3100 mL'], ['1 L 60 mL', '1060 mL'], ['2 L 500 mL', '2500 mL']], ['1600 mL'], { difficulty: 0.22 }),
          matchAmt('mL로 쓴 들이와 같은 양을 이어 보세요.', [['1250 mL', '1 L 250 mL'], ['2005 mL', '2 L 5 mL']], ['2 L 500 mL', '1 L 25 mL'], { difficulty: 0.25 }),
        ]),
      ACT('a3', '활동 3. 두 병 가운데 더 많은 병 고르기', 9, 'measure',
        '"가는 1 L 700 mL, 나는 1500 mL예요. 모두 mL로 바꾸면 얼마일까요?" 바꾼 수를 크기 비교하게 한다. 눈금 그림에서 높이가 같아 보이면 두 양이 같다고 하는 학생에게는 눈금의 수를 직접 읽게 한다. 셋째 문항의 "같아요"는 두 가지로 쓴 같은 양을 뜻한다.',
        '두 그릇에 쓰인 들이를 같은 단위로 바꾸어 견주고 더 많은 그릇을 골라요.', LV_NONE, [
          pickQ('가와 나 중 물이 더 많이 들어 있는 병을 골라 보세요.', [{ v: 1700, max: 2000, label: '가 1 L 700 mL' }, { v: 1500, max: 2000, label: '나 1500 mL' }], { step: 500, minor: 5 }, '더 많은 물이 든 병은', ['가', '나', '같아요'], 0, { difficulty: 0.2 }),
          pickQ('가는 2 L 50 mL, 나는 2500 mL가 들어 있어요. 어느 병이 더 많을까요?', [{ v: 2050, max: 3000, label: '가 2 L 50 mL' }, { v: 2500, max: 3000, label: '나 2500 mL' }], { step: 500, minor: 5 }, '더 많은 물이 든 병은', ['가', '나', '같아요'], 1, { difficulty: 0.22 }),
          pickQ('가는 1 L 400 mL, 나는 1400 mL예요. 두 병의 들이를 견주어 보세요.', [{ v: 1400, max: 2000, label: '가 1 L 400 mL' }, { v: 1400, max: 2000, label: '나 1400 mL' }], { step: 500, minor: 5 }, '두 병의 물은', ['가가 더 많아요', '나가 더 많아요', '같아요'], 2, { difficulty: 0.22,
            conclude: '쓰는 방법이 달라도 같은 양이면 같다고 말해요.' }),
        ]),
    ],
    wrap: [
      '"1 L 700 mL와 1500 mL처럼 쓰는 방법이 다른 들이를 견줄 때 무엇을 먼저 하나요?" 같은 방법(mL)으로 바꾸어 수의 크기를 견준다는 말을 이끌어 낸다. 출구 1번을 틀린 학생은 L 앞 수만 보고 판단하는 것이므로 다음 시간에 mL로 바꾸는 활동부터 다시 한다.',
      [
        { type: 'choice', prompt: '1 L 900 mL와 2000 mL 중 더 많은 것은 무엇인가요?', options: ['1 L 900 mL', '2000 mL', '같아요'], answer: 1, difficulty: 0.2, explain: '1 L 900 mL는 1900 mL이고, 2000 mL가 더 커요.' },
        { type: 'choice', prompt: '1 L 100 mL와 1100 mL를 바르게 말한 친구는 누구인가요?', options: ['"1 L 100 mL가 더 많아요"', '"1100 mL가 더 많아요"', '"같은 양이에요"'], answer: 2, difficulty: 0.2, explain: '1 L 100 mL는 1100 mL와 같은 양이에요.' },
        { type: 'tool', tool: 'timeline', options: { axis: ['적은 들이', '많은 들이'], cards: [{ id: 'a', text: '1250 mL' }, { id: 'b', text: '1 L 205 mL' }, { id: 'c', text: '1 L 20 mL' }] }, state: {}, prompt: '들이가 적은 것부터 많은 순서로 카드를 놓으세요.', target: { order: ['c', 'b', 'a'] }, difficulty: 0.25 },
      ],
    ],
    ws: {
      title: '들이 견주기',
      items: [
        { type: 'table', prompt: '두 들이를 mL로 바꾸어 쓰고 더 많은 쪽에 ○ 하세요.', columns: ['가', '나', '더 많은 쪽'], cells: [['1 L 700 mL (   mL)', '1500 mL', ''], ['2 L 50 mL (   mL)', '2500 mL', ''], ['3 L 5 mL (   mL)', '3050 mL', '']], answer: '1700 mL, 가 / 2050 mL, 나 / 3005 mL, 나' },
        { type: 'choice', prompt: '들이가 가장 많은 것에 ○ 하세요.', options: ['1 L 500 mL', '1050 mL', '1 L 5 mL'], answer: '1 L 500 mL' },
        { type: 'figure', prompt: '두 그릇의 눈금을 읽고 더 많은 그릇의 이름을 쓰세요.', tool: 'measure', wide: true, options: { mode: 'volume', step: 500, minor: 5 }, figures: [
          { options: { beakers: [{ v: 1200, max: 2000, label: '가' }, { v: 1600, max: 2000, label: '나' }] }, caption: '더 많은 그릇: ___' }], answer: '나' },
        { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '쓰는 방법이 다른 들이를 견줄 때는 모두 ______로 바꾸어 ______의 크기를 견주어요.', answer: 'mL, 수' },
        { type: 'short', prompt: '2 L 5 mL와 2050 mL 중 어느 쪽이 더 많은지 쓰고 까닭을 말해 보세요.', answer: '2050 mL가 더 많아요. 2 L 5 mL는 2005 mL이기 때문이에요.' },
      ],
      easy: {
        note: '몇 L 몇 mL와 몇 mL를 견줄 때는 모두 mL로 바꾸어 수의 크기를 견줘요.',
        items: [
          { type: 'table', prompt: '두 들이를 mL로 바꾸어 쓰고 더 많은 쪽에 ○ 하세요.', columns: ['가', '나', '더 많은 쪽'], cells: [['1 L 200 mL (   mL)', '1100 mL', ''], ['2 L 300 mL (   mL)', '2300 mL', '']], answer: '1200 mL, 가 / 2300 mL, 같아요' },
          { type: 'choice', prompt: '1 L 500 mL와 1500 mL는 같은 양일까요?', options: ['같아요', '달라요'], answer: '같아요' },
          { type: 'short', prompt: '1 L 100 mL를 mL로 바꾸어 써 보세요.', answer: '1100 mL' },
        ],
      },
    },
    diff: {
      easy: '카드가 세 장이고 눈금 그림에서 높이를 견주며 확인할 수 있어요. 교사가 mL로 바꾸는 순서를 먼저 말해 줘요.',
      base: '카드 넷을 직접 mL로 바꾸고 순서를 정한 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: 'L와 mL를 섞어 쓴 카드와 2005 mL처럼 0이 가운데 있는 수를 포함해 순서를 놓고 까닭을 말해요.',
    },
    notes: '자주 보이는 어려움: ① L 앞의 수나 mL 앞의 수만 비교한다(1 L 20 mL가 1100 mL보다 크다고 말함) → 모두 mL로 바꾸어 한 줄에 쓴다. ② 1 L 5 mL를 1500 mL로 바꾼다 → 5 mL의 자릿값을 일의 자리에 맞춘다. ③ 단위만 다르게 쓴 같은 양을 다른 양으로 본다 → 눈금 그림에서 같은 높이임을 보인다. 계산 속도보다 어느 단위로 맞추었는지 말로 설명하게 하는 것이 중요하다.',
  }));

  // ───────────────────────────── 7차시 (core · 들이의 합) ─────────────────────────────
  lessons.push(LES(7, ['[4수03-19]'], {
    title: '두 그릇의 물을 합쳐 몇 L 몇 mL인지 구하기',
    objective: '두 들이를 큰 통에 합치는 활동으로 들이의 합을 구하고, mL끼리 더해 1000 mL가 넘으면 1 L로 받아올려 몇 L 몇 mL로 쓸 수 있다.',
    ill: 'two paper pitchers pouring water into one big transparent tank at the same time with a smiling duck watching, soft pastel waves inside the tank',
    scene: '물을 합치면 얼마일까?',
    intro: [
      '"가 병에는 물 400 mL, 나 병에는 물 700 mL가 있어요. 이 물을 큰 통 하나에 모두 부으면 물이 몇 mL일까요?" 시연 단추로 두 병의 물을 큰 통에 붓는 모습을 보여 준 뒤 1100이라고 말하는 학생과 1100 mL는 1 L보다 많은지 적은지 묻는다. "합친 양이 1000 mL를 넘으면 L로 바꾸어 말해요."',
      '같은 병 두 개의 물을 한 병에 합쳤더니 병이 넘쳤던 경험이 있나요? 있다면 어떻게 했는지 짝에게 말해 봐요.',
      { tool: 'measure', options: vol([{ v: 0, max: 2000, label: '큰 통' }, { v: 400, max: 1000, label: '가' }, { v: 700, max: 1000, label: '나' }], { step: 500, minor: 5 }), sequence: [{ v: [1100, 400, 700] }] },
    ],
    acts: [
      ACT('a1', '활동 1. 큰 통에 합쳐 부어 보기', 9, 'measure',
        '"가 그릇의 물과 나 그릇의 물을 큰 통에 모두 부으면 눈금은 몇까지 올라갈까요?" 부으면서 100씩 세어 보게 한 뒤, 가 물의 눈금과 나 물의 눈금을 더한 값과 같은지 확인하게 한다. 합친 양을 400 + 700 = 1100이 아니라 1100 mL를 11 L로 읽는 학생에게는 "1000 mL가 1 L였지요? 몇 L 몇 mL일까요?"라고 되묻는다.',
        '왼쪽 큰 통에 물 붓는 단추를 눌러 가와 나의 물을 모두 합친 양을 만들어요.', LV_AMT, [
          fillQ('가 그릇의 물 300 mL와 나 그릇의 물 500 mL를 큰 통에 모두 합쳐 부어 보세요.', [{ v: 0, max: 2000, label: '큰 통' }, { v: 300, max: 1000, label: '가' }, { v: 500, max: 1000, label: '나' }], { step: 500, minor: 5, pourStep: 100 }, 800, { difficulty: 0.1 }),
          fillQ('가 600 mL, 나 700 mL를 큰 통에 합쳐 부으면 눈금이 어디까지 올라갈까요?', [{ v: 0, max: 2000, label: '큰 통' }, { v: 600, max: 1000, label: '가' }, { v: 700, max: 1000, label: '나' }], { step: 500, minor: 5, pourStep: 100 }, 1300, { difficulty: 0.18, reveal: 'after-check',
            conclude: '600 mL와 700 mL를 합치면 1300 mL이고, 1 L 300 mL와 같아요.' }),
          fillQ('가 800 mL, 나 800 mL의 물을 큰 통에 합쳐 부어 보세요.', [{ v: 0, max: 2000, label: '큰 통' }, { v: 800, max: 1000, label: '가' }, { v: 800, max: 1000, label: '나' }], { step: 500, minor: 5, pourStep: 100 }, 1600, { difficulty: 0.2 }),
        ]),
      ACT('a2', '활동 2. 몇 L 몇 mL끼리 더하기', 9, 'measure',
        '"L는 L끼리, mL는 mL끼리 더해 봐요. 1 L 200 mL와 1 L 300 mL를 합치면 어떻게 될까요?" 칠판에 L와 mL를 세로로 맞추어 쓰게 하고 mL 칸부터 더한다. 마지막 문항에서 mL 합이 1000을 넘으면 "1000 mL를 1 L로 바꾸어 L 칸에 올려요"라고 말한다. 1 L 1300 mL로 답을 쓰는 학생에게는 "mL 칸에는 1000 미만의 수만 써요"라고 짚는다.',
        '두 그릇의 물을 합친 양을 보기에서 골라요. L는 L끼리, mL는 mL끼리 더해요.', LV_NONE, [
          pickQ('가와 나의 물을 합치면 몇 L 몇 mL일까요?', [{ v: 1200, max: 2000, label: '가 1 L 200 mL' }, { v: 1300, max: 2000, label: '나 1 L 300 mL' }], { step: 500, minor: 5 }, '합친 물은', ['2 L 500 mL', '2 L 50 mL', '3 L 500 mL'], 0, { difficulty: 0.15 }),
          pickQ('가 2 L 400 mL와 나 1 L 100 mL를 합치면 몇 L 몇 mL일까요?', [{ v: 2400, max: 3000, label: '가 2 L 400 mL' }, { v: 1100, max: 3000, label: '나 1 L 100 mL' }], { step: 500, minor: 5 }, '합친 물은', ['3 L 500 mL', '3 L 50 mL', '1 L 300 mL'], 0, { difficulty: 0.18 }),
          pickQ('가 1 L 600 mL와 나 700 mL를 합치면 몇 L 몇 mL일까요?', [{ v: 1600, max: 2000, label: '가 1 L 600 mL' }, { v: 700, max: 2000, label: '나 700 mL' }], { step: 500, minor: 5 }, '합친 물은', ['1 L 1300 mL', '2 L 300 mL', '2 L 30 mL'], 1, { difficulty: 0.25,
            predict: { q: 'mL끼리 더한 수가 1000을 넘으면 어떻게 쓸까요?', options: ['그대로 mL 칸에 써요', '1000 mL를 1 L로 바꾸어 L 칸에 더해요'], answer: 1 }, conclude: '600 + 700 = 1300 mL에서 1000 mL를 1 L로 올려 2 L 300 mL예요.' }),
        ]),
      ACT('a3', '활동 3. 몇 mL끼리 더하기', 9, 'measure',
        '"우유 650 mL와 주스 450 mL를 합치면 몇 mL일까요?" 650과 450을 일의 자리부터 맞추어 쓴 뒤 더하게 한다. 백의 자리에서 받아올림을 빠뜨려 1100이 아니라 100이라고 쓰는 학생이 있다 — "50 더하기 50은 100이에요. 100을 어디에 올릴까요?"라고 되묻는다. 답을 구한 뒤 몇 L 몇 mL로도 말해 보게 한다.',
        '두 그릇의 물을 합친 양을 mL로 구해 답 칸에 써요. 합이 1000을 넘으면 몇 L 몇 mL로도 말해 봐요.', LV_NONE, [
          numQ('우유 650 mL와 주스 450 mL를 모두 합치면 몇 mL일까요?', [{ v: 650, max: 1000, label: '우유' }, { v: 450, max: 1000, label: '주스' }], { step: 500, minor: 5 }, '합친 양은', 'mL', 1100, { difficulty: 0.2 }),
          numQ('보리차 780 mL와 물 450 mL를 합치면 몇 mL일까요?', [{ v: 780, max: 1000, label: '보리차' }, { v: 450, max: 1000, label: '물' }], { step: 500, minor: 5 }, '합친 양은', 'mL', 1230, { difficulty: 0.22, reveal: 'after-check' }),
          numQ('통에 1 L 700 mL가 있어요. 600 mL를 더 부으면 몇 mL일까요?', [{ v: 1700, max: 3000, label: '통' }, { v: 600, max: 3000, label: '더 붓는 물' }], { step: 500, minor: 5 }, '합친 양은', 'mL', 2300, { difficulty: 0.25 }),
        ]),
    ],
    wrap: [
      '"들이를 더할 때 L끼리, mL끼리 더하는 까닭은 무엇인가요?" 같은 단위끼리 더해야 한다는 것과 mL 합이 1000 이상이면 L로 올려 쓴다는 말을 이끌어 낸다. 출구 2번에서 1 L 1200 mL처럼 쓴 학생은 mL 칸의 수가 1000을 넘었는지 살피지 않은 것이므로 다음 시간 도입에서 1000 mL = 1 L를 다시 말하게 한다.',
      [
        { type: 'choice', prompt: '1 L 300 mL와 1 L 400 mL를 합치면 몇 L 몇 mL일까요?', options: ['2 L 700 mL', '2 L 70 mL', '1 L 700 mL'], answer: 0, difficulty: 0.15, explain: 'L끼리 1 + 1 = 2, mL끼리 300 + 400 = 700이라서 2 L 700 mL예요.' },
        { type: 'choice', prompt: '1 L 800 mL와 400 mL를 합치면 얼마인가요?', options: ['1 L 1200 mL', '2 L 200 mL', '2 L 20 mL'], answer: 1, difficulty: 0.22, explain: '800 + 400 = 1200 mL에서 1000 mL를 1 L로 올려 2 L 200 mL예요.' },
        { type: 'tool', tool: 'measure', options: vol([{ v: 550, max: 1000, label: '가' }, { v: 650, max: 1000, label: '나' }], { step: 500, minor: 5, readOnly: true, askNum: { q: '합친 양은', unit: 'mL' } }), state: {}, prompt: '가 550 mL와 나 650 mL의 물을 합치면 몇 mL일까요?', target: { num: 1200 }, difficulty: 0.22 },
      ],
    ],
    ws: {
      title: '들이의 합',
      items: [
        { type: 'table', prompt: '두 들이의 합을 구하세요.', columns: ['식', '합'], cells: [['1 L 200 mL + 1 L 300 mL', ''], ['2 L 400 mL + 1 L 100 mL', ''], ['1 L 600 mL + 700 mL', ''], ['3 L 800 mL + 400 mL', '']], answer: '2 L 500 mL, 3 L 500 mL, 2 L 300 mL, 4 L 200 mL' },
        { type: 'figure', prompt: '두 컵의 물을 합치면 몇 mL일지 쓰세요.', tool: 'measure', wide: true, options: { mode: 'volume', step: 500, minor: 5 }, figures: [
          { options: { beakers: [{ v: 350, max: 1000, label: '가' }, { v: 500, max: 1000, label: '나' }] }, caption: '합: ___ mL' }, { options: { beakers: [{ v: 750, max: 1000, label: '가' }, { v: 600, max: 1000, label: '나' }] }, caption: '합: ___ mL' }], answer: '850 mL, 1350 mL' },
        { type: 'choice', prompt: '1 L 500 mL + 800 mL를 바르게 계산한 친구에 ○ 하세요.', options: ['"1 L 1300 mL"', '"2 L 300 mL"', '"2 L 30 mL"'], answer: '"2 L 300 mL"' },
        { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '들이를 더할 때는 ______끼리, ______끼리 더하고 mL가 1000을 넘으면 ______로 바꾸어 올려요.', answer: 'L, mL, 1 L' },
        { type: 'short', prompt: '1 L 600 mL + 700 mL = 1 L 1300 mL라고 쓰면 안 되는 까닭을 써 보세요.', answer: 'mL 칸에는 1000 미만의 수를 써야 해서 1000 mL를 1 L로 올려 2 L 300 mL로 써요.' },
      ],
      easy: {
        note: 'L는 L끼리, mL는 mL끼리 더해요. mL가 1000이 넘으면 1 L로 바꾸어 L 칸에 올려요.',
        items: [
          { type: 'table', prompt: '두 들이의 합을 구하세요.', columns: ['식', '합'], cells: [['1 L 200 mL + 1 L 100 mL', ''], ['2 L 300 mL + 1 L 400 mL', ''], ['1 L 500 mL + 600 mL', '']], answer: '2 L 300 mL, 3 L 700 mL, 2 L 100 mL' },
          { type: 'choice', prompt: '500 mL + 500 mL와 같은 양에 ○ 하세요.', options: ['1 L', '100 mL'], answer: '1 L' },
          { type: 'short', prompt: '400 mL와 700 mL를 합친 양을 mL로 써 보세요.', answer: '1100 mL' },
        ],
      },
    },
    diff: {
      easy: '큰 통에 붓는 단추 옆에 지금 든 물의 양이 숫자로 보이고, 합이 1000 mL를 넘지 않는 문항부터 시작해요.',
      base: '물의 양이 숨겨져 있고 mL 합이 1000을 넘는 문항을 L와 mL로 올려 써요.',
      challenge: '1 L 600 mL + 700 mL처럼 L와 mL가 섞인 합에서 받아올림을 스스로 설명하고 검산해요.',
    },
    notes: '자주 보이는 어려움: ① L와 mL를 섞어 더한다(1 + 200 = 201) → 세로로 L 칸과 mL 칸을 나누어 쓴다. ② mL 합이 1000이 넘는데 mL 칸에 그대로 쓴다(1 L 1300 mL) → 1000 mL는 1 L라는 말을 되풀이한다. ③ 받아올린 1 L를 L 칸에 더하지 않는다 → 올린 수를 작게 적어 둔다. 계산 결과는 눈금 그릇에 직접 부어 확인하면 오개념이 눈에 보인다.',
  }));

  // ───────────────────────────── 8차시 (core · 들이의 차) ─────────────────────────────
  lessons.push(LES(8, ['[4수03-19]'], {
    title: '쓰고 남은 물의 양을 구하며 들이의 차 알아보기',
    objective: '그릇에서 일부를 덜어 내고 남은 들이로 들이의 차를 구하고, 1 L를 1000 mL로 바꾸어 받아내림하여 계산할 수 있다.',
    ill: 'a paper kettle pouring water out into a plant pot while a small snail watches, with a measuring jug showing how much water is left',
    scene: '덜어 내고 남은 물은?',
    intro: [
      '"1 L 물병에서 300 mL를 컵에 따랐어요. 병에 남은 물은 몇 mL일까요?" 시연 단추로 1000 눈금에서 300을 덜어 내는 모습을 보여 준다. 학생들에게 몇 mL라고 예상하는지 손으로 수를 써서 들어 보게 하고, 1300 mL라고 쓰는 학생에게는 덜어 낸 것이니 물이 늘었을지 줄었을지 묻는다.',
      '화분에 물을 주고 나서 주전자에 남은 물이 줄어들었던 경험을 짝에게 말해 봐요.',
      { tool: 'measure', options: vol([{ v: 1000, max: 1000 }], { step: 100, minor: 2 }), sequence: [{ v: [700] }] },
    ],
    acts: [
      ACT('a1', '활동 1. 덜어 내고 남은 물 만들기', 9, 'measure',
        '"물병에 물이 가득 있어요. 300 mL를 덜어 내면 눈금은 어디까지 내려갈까요?" 덜기 단추를 눌러 100씩 내려가는 것을 세게 한다. 덜어 낸 만큼 눈금이 줄어드는 것이 뺄셈이라는 말을 이끌어 내고, 눈금이 1300으로 올라가려 하면 "덜어 내면 물이 늘어나요, 줄어요?"라고 되묻는다.',
        '물 덜기 단추를 눌러 문제의 양을 덜어 내고 남은 물을 눈금으로 맞추어요.', LV_AMT, [
          fillQ('물이 1 L 있어요. 300 mL를 덜어 내고 남은 물을 만들어 보세요.', [{ v: 1000, max: 1000 }], { step: 100, minor: 2, pourStep: 100 }, 700, { difficulty: 0.12 }),
          fillQ('큰 통에 물이 2 L 있어요. 600 mL를 덜어 내고 남은 물을 만들어 보세요.', [{ v: 2000, max: 2000 }], { step: 500, minor: 5, pourStep: 100 }, 1400, { difficulty: 0.18, reveal: 'after-check',
            conclude: '2000 mL에서 600 mL를 덜어 내면 1400 mL, 즉 1 L 400 mL가 남아요.' }),
          fillQ('주전자에 물이 1 L 500 mL 있어요. 900 mL를 덜어 내고 남은 물을 만들어 보세요.', [{ v: 1500, max: 2000 }], { step: 500, minor: 5, pourStep: 100 }, 600, { difficulty: 0.2 }),
        ]),
      ACT('a2', '활동 2. 몇 mL를 쓰고 남은 양 구하기', 9, 'measure',
        '"우유가 1 L 500 mL 있었는데 700 mL를 마셨어요. 남은 우유는 몇 mL일까요?" 먼저 1500이 몇 mL인지 쓴 뒤 700을 빼게 한다. 1500에서 700을 빼고 810이라고 쓰는 학생에게는 "백의 자리에서 15 - 7을 해요. 15에서 7을 빼면 얼마일까요?"라고 묻는다. 계산한 뒤 눈금 그림에서 남은 양이 맞는지 확인하게 한다.',
        '처음 들이에서 덜어 낸 양을 빼고 남은 양을 mL로 답 칸에 써요.', LV_NONE, [
          numQ('우유가 1 L 500 mL 있었는데 700 mL를 마셨어요. 남은 우유는 몇 mL일까요?', [{ v: 1500, max: 2000 }], { step: 500, minor: 5 }, '남은 양은', 'mL', 800, { difficulty: 0.18 }),
          numQ('어항에 물이 2 L 있었는데 450 mL를 퍼냈어요. 남은 물은 몇 mL일까요?', [{ v: 2000, max: 2000 }], { step: 500, minor: 5 }, '남은 양은', 'mL', 1550, { difficulty: 0.22, reveal: 'after-check' }),
          numQ('3 L 물통에서 1 L 250 mL를 썼어요. 남은 물은 몇 mL일까요?', [{ v: 3000, max: 3000 }], { step: 500, minor: 5 }, '남은 양은', 'mL', 1750, { difficulty: 0.25 }),
        ]),
      ACT('a3', '활동 3. 받아내림해서 몇 L 몇 mL로 빼기', 9, 'measure',
        '"2 L 100 mL에서 700 mL를 빼려면 mL 칸에서 100에서 700을 뺄 수 없어요. 어떻게 할까요?" L 칸에서 1 L를 1000 mL로 바꾸어 mL 칸으로 옮기는 순서를 칠판에 쓴다. 100 - 700을 700 - 100으로 바꾸어 600을 쓰는 학생이 있다 — "큰 수에서 작은 수를 빼야 해요. 1 L를 1000 mL로 바꾸면 얼마가 될까요?"라고 되묻는다.',
        '뺄셈 결과를 보기에서 골라요. mL 칸에서 뺄 수 없으면 1 L를 1000 mL로 바꾸어요.', LV_NONE, [
          pickQ('물이 2 L 100 mL 있었는데 700 mL를 덜어 냈어요. 남은 물은 얼마일까요?', [{ v: 2100, max: 3000, label: '2 L 100 mL' }], { step: 500, minor: 5 }, '남은 물은', ['1 L 400 mL', '1 L 600 mL', '2 L 600 mL'], 0, { difficulty: 0.22,
            predict: { q: '100 mL에서 700 mL를 뺄 수 있을까요?', options: ['뺄 수 있어요', '뺄 수 없어서 1 L를 1000 mL로 바꿔요'], answer: 1 }, conclude: '2 L 100 mL를 1 L 1100 mL로 바꾸면 1100 - 700 = 400이라 1 L 400 mL예요.' }),
          pickQ('3 L 200 mL에서 1 L 500 mL를 빼면 얼마일까요?', [{ v: 3200, max: 4000, label: '3 L 200 mL' }], { step: 500, minor: 5 }, '남은 물은', ['1 L 700 mL', '2 L 300 mL', '2 L 700 mL'], 0, { difficulty: 0.25 }),
          pickQ('4 L 100 mL에서 2 L 800 mL를 빼면 얼마일까요?', [{ v: 4100, max: 5000, label: '4 L 100 mL' }], { step: 1000, minor: 5 }, '남은 물은', ['1 L 300 mL', '2 L 300 mL', '1 L 700 mL'], 0, { difficulty: 0.28 }),
        ]),
    ],
    wrap: [
      '"mL 칸에서 뺄 수 없을 때는 어떻게 하나요?" L 칸에서 1 L를 가져와 1000 mL로 바꾸어 mL 칸에 더한다는 순서를 말하게 한다. 출구 3번에서 큰 수와 작은 수를 거꾸로 뺀 학생은 3 L 100 mL - 1 L 200 mL의 mL 칸을 어떻게 계산했는지 다음 시간에 먼저 물어 본다.',
      [
        { type: 'choice', prompt: '2 L에서 500 mL를 빼면 얼마인가요?', options: ['1 L 500 mL', '1 L 50 mL', '2 L 500 mL'], answer: 0, difficulty: 0.18, explain: '2 L를 1 L 1000 mL로 바꾸면 1000 - 500 = 500이라 1 L 500 mL예요.' },
        { type: 'tool', tool: 'measure', options: vol([{ v: 1800, max: 2000 }], { step: 500, minor: 5, pour: true, pourStep: 100 }), state: {}, prompt: '물이 1 L 800 mL 있어요. 700 mL를 덜어 내고 남은 물을 만들어 보세요.', target: { fill: 1100 }, difficulty: 0.2 },
        { type: 'choice', prompt: '3 L 100 mL에서 1 L 200 mL를 빼면 얼마인가요?', options: ['2 L 100 mL', '1 L 900 mL', '2 L 900 mL'], answer: 1, difficulty: 0.25, explain: '3 L 100 mL를 2 L 1100 mL로 바꾸어 빼면 1 L 900 mL예요.' },
      ],
    ],
    ws: {
      title: '들이의 차',
      items: [
        { type: 'table', prompt: '두 들이의 차를 구하세요.', columns: ['식', '차'], cells: [['2 L 700 mL - 1 L 200 mL', ''], ['3 L 500 mL - 800 mL', ''], ['2 L 100 mL - 700 mL', ''], ['4 L - 1 L 300 mL', '']], answer: '1 L 500 mL, 2 L 700 mL, 1 L 400 mL, 2 L 700 mL' },
        { type: 'figure', prompt: '물통에서 덜어 내고 남은 물이 얼마일지 쓰세요.', tool: 'measure', wide: true, options: { mode: 'volume', step: 500, minor: 5 }, figures: [
          { options: { beakers: [{ v: 1500, max: 2000, label: '처음' }, { v: 600, max: 2000, label: '덜어 냄' }] }, caption: '남은 물: ___ mL' }, { options: { beakers: [{ v: 2000, max: 2000, label: '처음' }, { v: 900, max: 2000, label: '덜어 냄' }] }, caption: '남은 물: ___ mL' }], answer: '900 mL, 1100 mL' },
        { type: 'choice', prompt: '3 L 100 mL - 1 L 400 mL를 바르게 계산한 친구에 ○ 하세요.', options: ['"2 L 300 mL"', '"1 L 700 mL"', '"1 L 300 mL"'], answer: '"1 L 700 mL"' },
        { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '2 L 100 mL = 1 L ______ mL이므로 2 L 100 mL - 700 mL = 1 L ______ mL예요.', answer: '1100, 400' },
        { type: 'short', prompt: '3 L 200 mL - 1 L 500 mL에서 mL 칸을 어떻게 계산해야 하는지 써 보세요.', answer: '200 mL에서 500 mL를 뺄 수 없어서 3 L를 2 L 1000 mL로 바꾸어 1200 - 500 = 700 mL로 계산해요.' },
      ],
      easy: {
        note: '남은 양은 처음 양에서 덜어 낸 양을 빼요. mL 칸에서 뺄 수 없으면 1 L를 1000 mL로 바꾸어요.',
        items: [
          { type: 'table', prompt: '두 들이의 차를 구하세요.', columns: ['식', '차'], cells: [['2 L 500 mL - 1 L 200 mL', ''], ['1 L 800 mL - 300 mL', ''], ['2 L - 500 mL', '']], answer: '1 L 300 mL, 1 L 500 mL, 1 L 500 mL' },
          { type: 'choice', prompt: '1000 mL에서 300 mL를 덜어 내면 남는 양에 ○ 하세요.', options: ['700 mL', '1300 mL'], answer: '700 mL' },
          { type: 'short', prompt: '1 L를 mL로 바꾸어 써 보세요.', answer: '1000 mL' },
        ],
      },
    },
    diff: {
      easy: '덜기 단추를 누르면 눈금과 지금 든 물의 양이 함께 보이고, 받아내림이 없는 뺄셈부터 해요.',
      base: '물의 양이 숨겨져 있고 받아내림이 필요한 뺄셈을 L와 mL로 풀어요.',
      challenge: '4 L 100 mL - 2 L 800 mL처럼 큰 수의 받아내림을 하고, 덧셈으로 검산한 방법을 설명해요.',
    },
    notes: '자주 보이는 어려움: ① 덜어 낸 것인데 더한다(1500 mL에서 700 mL를 덜고 2200 mL) → 눈금이 올라갈지 내려갈지 먼저 말한다. ② mL 칸에서 큰 수에서 작은 수를 거꾸로 뺀다(700 - 100 = 600) → 1 L를 1000 mL로 바꾸어 큰 수에서 뺀다. ③ 받아내림한 L 칸을 줄이지 않는다 → 3 L를 2 L로 줄인 것을 작게 적게 한다. 검산은 남은 양에 덜어 낸 양을 더해 처음 양이 나오는지 눈금에 부어 확인한다.',
  }));

  // ───────────────────────────── 9차시 (core · 이야기 문제로 설명하기) ─────────────────────────────
  lessons.push(LES(9, ['[4수03-19]'], {
    title: '이야기 문제로 들이의 합과 차를 설명하며 풀기',
    objective: '생활 속 이야기 문제에서 합과 차 가운데 필요한 셈을 골라 풀고, 풀이 과정에서 틀린 곳을 찾아 바르게 고쳐 말할 수 있다.',
    ill: 'a paper kitchen scene with a cat chef measuring water into a pot beside a notebook with a story problem, and a rabbit friend pointing at the numbers',
    scene: '이야기 속 물의 양',
    intro: [
      '"어항에 물이 2 L 있었는데 600 mL를 퍼냈어요. 이 이야기에서 구하는 것은 합일까요, 차일까요?" 두세 명에게 "퍼냈다"에서 알 수 있는 말을 말하게 하고 시연 단추로 물이 줄어드는 모습을 보여 준다. "합친다, 더 붓는다는 말이 나오면 더하고, 퍼낸다, 마신다는 말이 나오면 빼요." 낱말과 계산을 연결해 칠판에 정리한다.',
      '오늘 하루 동안 물이나 음료를 마신 양이나 따른 양을 하나 떠올려서, 그것으로 이야기 문제를 짝에게 말해 봐요.',
      { tool: 'measure', options: vol([{ v: 2000, max: 2000 }], { step: 500, minor: 5 }), sequence: [{ v: [1400] }] },
    ],
    acts: [
      ACT('a1', '활동 1. 합일까 차일까, 이야기 문제 풀기', 9, 'measure',
        '"이 이야기에서 물이 늘어났나요, 줄어들었나요?" 이야기의 낱말에 밑줄을 긋게 하고 어떤 셈을 쓸지 먼저 말하게 한다. 합치는 이야기인데 빼는 학생에게는 두 그릇을 한 그릇으로 모으는 그림을 그려 보게 한다. 풀이 뒤에는 "답이 처음 양보다 커야 하는 이야기인가요, 작아야 하는 이야기인가요?"로 답이 맞는지 점검하게 한다.',
        '이야기를 읽고 합 또는 차를 구해 답 칸에 mL로 써요.', LV_NONE, [
          numQ('민지네 모둠은 물을 1 L 200 mL, 준호네 모둠은 800 mL 받았어요. 두 모둠이 받은 물은 모두 몇 mL일까요?', [{ v: 1200, max: 2000, label: '민지네' }, { v: 800, max: 2000, label: '준호네' }], { step: 500, minor: 5 }, '모두', 'mL', 2000, { difficulty: 0.18 }),
          numQ('어항에 물이 2 L 있었는데 600 mL를 퍼냈어요. 남은 물은 몇 mL일까요?', [{ v: 2000, max: 2000 }], { step: 500, minor: 5 }, '남은 물은', 'mL', 1400, { difficulty: 0.2, reveal: 'after-check' }),
          numQ('3 L 물통에서 1 L 250 mL를 사용했어요. 남은 물은 몇 mL일까요?', [{ v: 3000, max: 3000 }], { step: 500, minor: 5 }, '남은 물은', 'mL', 1750, { difficulty: 0.22 }),
        ]),
      ACT('a2', '활동 2. 필요한 양까지 채우기', 9, 'measure',
        '"요리에 물이 1 L 400 mL 필요한데 지금 600 mL가 들어 있어요. 더 부어야 하는 물은 몇 mL일까요?" 부족한 양을 구하는 일이 필요한 양에서 지금 양을 빼는 것임을 말하게 한다. 물을 1400 mL 더 붓는 학생에게는 "지금 600 mL는 이미 들어 있어요. 눈금을 어디까지 올릴까요?"라고 묻는다. 부은 뒤에 600 + (더 부은 양)이 1400인지 검산하게 한다.',
        '이미 든 물에서 시작해 필요한 양이 되도록 물을 더 부어요.', LV_AMT, [
          fillQ('요리에 물이 1 L 400 mL 필요해요. 지금 600 mL가 들어 있어요. 필요한 양이 되도록 부어 보세요.', [{ v: 600, max: 2000 }], { step: 500, minor: 5, pourStep: 100 }, 1400, { difficulty: 0.18 }),
          fillQ('물이 2 L 100 mL 필요해요. 지금 900 mL가 들어 있어요. 필요한 양까지 부어 보세요.', [{ v: 900, max: 3000 }], { step: 500, minor: 5, pourStep: 100 }, 2100, { difficulty: 0.22, reveal: 'after-check',
            conclude: '필요한 양 2100 mL에서 지금 양 900 mL를 빼면 1200 mL를 더 부어야 해요.' }),
          fillQ('큰 냄비에 물이 2 L 필요해요. 지금 1 L 300 mL가 들어 있어요. 필요한 양까지 부어 보세요.', [{ v: 1300, max: 2500 }], { step: 500, minor: 5, pourStep: 100 }, 2000, { difficulty: 0.2 }),
        ]),
      ACT('a3', '활동 3. 틀린 풀이 찾아 고치기', 9, 'measure',
        '"준호의 풀이가 어디가 잘못되었는지 짝과 찾아볼까요?" 각 풀이를 mL로 바꾸어 다시 계산하게 하고, 어느 단계에서 어긋났는지 말하게 한다. 풀이를 보고 곧바로 맞다고 고르는 학생에게는 1000 mL를 1 L로 바꾸는 단계가 있었는지 물어 본다. 마지막 문항은 합이 통의 들이를 넘을지 어림해서 답하게 한다.',
        '각 풀이를 읽고 바르게 설명한 것을 골라요. 틀린 풀이는 왜 틀렸는지 말해 봐요.', LV_NONE, [
          pickQ('준호가 1 L 300 mL + 900 mL = 1 L 1200 mL라고 풀었어요. 바른 풀이는 무엇일까요?', [{ v: 1300, max: 3000, label: '1 L 300 mL' }, { v: 900, max: 3000, label: '900 mL' }], { step: 500, minor: 5 }, '바른 풀이는', ['맞아요, 그대로 써도 돼요', '1000 mL를 1 L로 올려 2 L 200 mL예요', '1 L 300 mL예요'], 1, { difficulty: 0.25 }),
          pickQ('민지가 3 L 100 mL - 1 L 400 mL = 2 L 300 mL라고 풀었어요. 바른 풀이는 무엇일까요?', [{ v: 3100, max: 4000, label: '3 L 100 mL' }], { step: 500, minor: 5 }, '바른 풀이는', ['맞아요', '100 mL에서 400 mL를 뺄 수 없어서 1 L를 바꾸어 1 L 700 mL예요', '2 L 500 mL예요'], 1, { difficulty: 0.28 }),
          pickQ('3 L 통에 1 L 800 mL의 우유와 1 L 300 mL의 물을 모두 담으면 어떻게 될까요?', [{ v: 1800, max: 3000, label: '우유' }, { v: 1300, max: 3000, label: '물' }], { step: 500, minor: 5 }, '통은 어떻게 될까요?', ['딱 맞아요', '넘쳐요', '1 L 남아요'], 1, { difficulty: 0.25,
            conclude: '1800 + 1300 = 3100 mL로 3 L(3000 mL)보다 100 mL 많아서 넘쳐요.' }),
        ]),
    ],
    wrap: [
      '"이야기 문제에서 더할지 뺄지는 어떤 말을 보고 정했나요?" 합친다·더 붓는다는 말은 더하기, 퍼낸다·마신다·남은은 빼기라는 말을 정리하게 한다. 출구 2번을 틀린 학생은 필요한 양에서 지금 양을 빼는 것이 아니라 더하는 것이므로 다음 시간에 필요한 양 문제를 눈금 그림으로 다시 푼다.',
      [
        { type: 'choice', prompt: '"물을 1 L 200 mL 마셨어요. 처음에 2 L가 있었다면 남은 물은?"에서 필요한 셈은 무엇인가요?', options: ['더하기', '빼기'], answer: 1, difficulty: 0.15, explain: '마신 만큼 줄어드니까 처음 양에서 빼야 해요.' },
        { type: 'tool', tool: 'measure', options: vol([{ v: 1700, max: 2000 }], { step: 500, minor: 5, readOnly: true, askNum: { q: '남은 물은', unit: 'mL' } }), state: {}, prompt: '물통에 1 L 700 mL가 있었는데 800 mL를 마셨어요. 남은 물은 몇 mL일까요?', target: { num: 900 }, difficulty: 0.22 },
        { type: 'choice', prompt: '들이의 합이나 차를 구할 때 가장 먼저 할 일은 무엇인가요?', options: ['L끼리, mL끼리 자리를 맞추어 써요', 'L 수와 mL 수를 모두 더해요', '큰 수에서 작은 수만 빼요'], answer: 0, difficulty: 0.15, explain: '같은 단위끼리 자리를 맞추어야 올바르게 계산할 수 있어요.' },
      ],
    ],
    ws: {
      title: '이야기 문제로 풀기',
      items: [
        { type: 'table', prompt: '이야기를 읽고 식과 답을 쓰세요.', columns: ['이야기', '식과 답'], cells: [['주스 1 L 500 mL와 우유 700 mL를 합쳤어요.', ''], ['물통에 3 L가 있었는데 1 L 200 mL를 썼어요.', ''], ['2 L 통에 600 mL가 있어요. 가득 채우려면?', '']], answer: '1 L 500 mL + 700 mL = 2 L 200 mL / 3 L - 1 L 200 mL = 1 L 800 mL / 2 L - 600 mL = 1 L 400 mL' },
        { type: 'figure', prompt: '두 그릇의 물을 합치면 몇 mL인지 쓰세요.', tool: 'measure', wide: true, options: { mode: 'volume', step: 500, minor: 5 }, figures: [
          { options: { beakers: [{ v: 1300, max: 2000, label: '가' }, { v: 900, max: 2000, label: '나' }] }, caption: '합: ___ mL' }], answer: '2200 mL' },
        { type: 'choice', prompt: '"1 L 700 mL + 600 mL"의 답을 바르게 쓴 친구에 ○ 하세요.', options: ['"1 L 1300 mL"', '"2 L 300 mL"', '"2 L 30 mL"'], answer: '"2 L 300 mL"' },
        { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '합치거나 더 부으면 ______를 하고, 퍼내거나 마시면 ______를 해요.', answer: '더하기, 빼기' },
        { type: 'short', prompt: '내가 만든 이야기 문제를 쓰고 식과 답도 써 보세요.' },
      ],
      easy: {
        note: '이야기에서 물이 늘면 더하고, 줄면 빼요. 합과 차는 L끼리, mL끼리 계산해요.',
        items: [
          { type: 'table', prompt: '이야기를 읽고 식과 답을 쓰세요.', columns: ['이야기', '식과 답'], cells: [['물 1 L와 물 500 mL를 합쳤어요.', ''], ['물 2 L에서 500 mL를 마셨어요.', '']], answer: '1 L 500 mL, 1 L 500 mL' },
          { type: 'choice', prompt: '물을 퍼냈을 때 물의 양은 어떻게 될까요?', options: ['늘어요', '줄어요'], answer: '줄어요' },
          { type: 'short', prompt: '300 mL와 400 mL를 합친 양을 써 보세요.', answer: '700 mL' },
        ],
      },
    },
    diff: {
      easy: '이야기 문제의 합·차 낱말이 굵게 보이고, 받아올림·받아내림이 없는 문제부터 풀어요.',
      base: '필요한 셈을 스스로 고르고 L끼리, mL끼리 계산해 풀어요.',
      challenge: '틀린 풀이를 찾아 어디에서 틀렸는지 설명하고 바르게 고쳐 쓰며, 통에 넘칠지 어림해서 확인해요.',
    },
    notes: '자주 보이는 어려움: ① 이야기에서 합과 차를 구분하지 못한다 → "늘었나요, 줄었나요?"를 먼저 말하게 한다. ② 필요한 양에서 지금 양을 빼지 않고 필요한 양만 더 붓는다 → 지금 눈금에서 시작해 목표 눈금까지 올린다. ③ 답이 말이 되는지 점검하지 않는다 → 처음보다 커야 하는지 작아야 하는지 먼저 말한다. 풀이를 말로 설명하는 일이 이 시간의 중심이므로 짝에게 풀이를 소리 내어 말하게 한다.',
  }));

  // ───────────────────────────── 10차시 (wrap · 무게 g·kg·t) ─────────────────────────────
  lessons.push(LES(10, ['[4수03-20]'], {
    title: '용수철저울 눈금을 읽어 g과 kg으로 무게 말하기',
    objective: '용수철저울의 눈금을 읽어 무게를 g으로 나타내고, 1 kg = 1000 g, 1 t = 1000 kg을 알아 g·kg·t 가운데 알맞은 단위를 고를 수 있다.',
    ill: 'a paper spring scale hanging a small notebook beside an elephant silhouette and a rice bag, with pastel shapes showing small and heavy weights',
    scene: '무게는 g, kg, t로',
    intro: [
      '"들이는 L와 mL로 말했지요. 물건이 얼마나 무거운지는 어떤 단위로 말할까요?" 시연 단추로 용수철저울에 공책을 매달아 눈금이 내려가는 모습을 보여 준다. 무게도 가벼운 것과 무거운 것에 따라 다른 단위를 쓴다는 점을 L와 mL에 견주어 말하게 한다. 학생이 kg만 말하면 달걀 한 개도 kg으로 말하면 어떨지 되묻는다.',
      '가방 속 물건 가운데 가장 가벼운 것과 가장 무거운 것을 하나씩 골라 어느 쪽이 더 무거울지 짝에게 말해 봐요.',
      { tool: 'measure', options: { mode: 'scale', kind: 'spring', objects: [{ name: '공책', w: 120 }], max: 500, step: 100, minor: 10 }, sequence: [{ hung: 0 }] },
    ],
    acts: [
      ACT('a1', '활동 1. 용수철저울 눈금 읽기', 9, 'measure',
        '"저울 바늘이 가리키는 곳을 읽어 볼까요? 큰 눈금 사이는 작은 칸이 몇 개인가요?" 작은 눈금 한 칸이 10 g임을 먼저 말하게 한 뒤 읽게 한다. 120을 큰 눈금 100과 20으로 읽는 학생은 맞다 — 그러나 12나 102로 쓰는 학생에게는 "큰 눈금 100에서 작은 칸 두 개를 더 갔어요. 한 칸이 얼마였지요?"라고 묻는다.',
        '용수철저울의 바늘이 가리키는 눈금을 읽어 답 칸에 g으로 써요.', LV_NONE, [
          X({ prompt: '공책을 용수철저울에 매달았어요. 눈금을 읽어 무게를 쓰세요.', toolOptions: { mode: 'scale', kind: 'spring', objects: [{ name: '공책', w: 120 }], max: 500, step: 100, minor: 10 }, target: { read: 120 }, difficulty: 0.12 }),
          X({ prompt: '사과를 용수철저울에 매달았어요. 눈금을 읽어 무게를 쓰세요.', toolOptions: { mode: 'scale', kind: 'spring', objects: [{ name: '사과', w: 260 }], max: 500, step: 100, minor: 10 }, target: { read: 260 }, difficulty: 0.15, reveal: 'after-check',
            conclude: '큰 눈금 200에서 작은 눈금 여섯 칸을 더 가서 260 g이에요.' }),
          X({ prompt: '지우개 상자를 용수철저울에 매달았어요. 눈금을 읽어 무게를 쓰세요.', toolOptions: { mode: 'scale', kind: 'spring', objects: [{ name: '지우개 상자', w: 430 }], max: 500, step: 100, minor: 10 }, target: { read: 430 }, difficulty: 0.2 }),
        ]),
      ACT('a2', '활동 2. 1 kg은 몇 g일까', 9, 'measure',
        '"쌀 포대의 무게를 재니 눈금이 2000 g이에요. 몇 kg일까요?" 1 kg이 1000 g이라는 것을 L와 mL의 관계와 견주어 말하게 한다. 1 kg 500 g을 150 g이라고 쓰는 학생이 있다 — "1 kg은 몇 g이었지요? 1000과 500을 더해 봐요"라고 짚는다. 3000 g은 1000 g이 세 번이므로 3 kg이라고 말하게 한다.',
        '저울에 매달린 물건의 무게를 단위를 바꾸어 답 칸에 써요. 1 kg = 1000 g이에요.', LV_NONE, [
          X({ prompt: '쌀 포대의 무게가 2 kg이에요. 몇 g일까요?', toolOptions: { mode: 'scale', kind: 'spring', readOnly: true, objects: [{ name: '쌀 포대', w: 2000 }], max: 2000, step: 500, minor: 5, askNum: { q: '2 kg은', unit: 'g' } }, target: { num: 2000 }, difficulty: 0.15 }),
          X({ prompt: '책가방의 무게가 1 kg 500 g이에요. g만으로 쓰면 몇 g일까요?', toolOptions: { mode: 'scale', kind: 'spring', readOnly: true, objects: [{ name: '책가방', w: 1500 }], max: 2000, step: 500, minor: 5, askNum: { q: '1 kg 500 g은', unit: 'g' } }, target: { num: 1500 }, difficulty: 0.2, reveal: 'after-check' }),
          X({ prompt: '감자 자루의 무게가 3000 g이에요. 몇 kg일까요?', toolOptions: { mode: 'scale', kind: 'spring', readOnly: true, objects: [{ name: '감자 자루', w: 3000 }], max: 3000, step: 500, minor: 5, askNum: { q: '3000 g은', unit: 'kg' } }, target: { num: 3 }, difficulty: 0.2 }),
        ]),
      ACT('a3', '활동 3. g, kg, t 가운데 알맞은 단위 고르기', 9, 'measure',
        '"코끼리의 무게를 g으로 쓰면 수가 얼마나 커질까요?" 아주 큰 수가 되면 읽기 어려워진다는 점을 이끌어 내고, 아주 무거운 것은 t(톤)으로 말한다고 알려 준다. 1 t은 1000 kg이라는 것을 쌀 포대 20개 정도의 무게로 짐작하게 한다. 학생이 모두 kg으로 고르면 "달걀 한 개를 kg으로 말하면 몇 kg일까요?"라고 되묻는다.',
        '물건마다 무게를 말할 때 알맞은 단위 g, kg, t를 골라요.', LV_NONE, [
          unitQ('물건의 무게를 말할 때 알맞은 단위를 골라 보세요.', [{ name: '달걀 한 개', amount: 60 }, { name: '학생 책가방', amount: 3 }, { name: '코끼리 한 마리', amount: 5 }], ['g', 'kg', 't'], [0, 1, 2], { difficulty: 0.15 }),
          unitQ('이번에는 수박과 사과, 대형 트럭의 짐이에요. 알맞은 단위를 골라 보세요.', [{ name: '수박 한 통', amount: 5 }, { name: '사과 한 개', amount: 250 }, { name: '대형 트럭의 짐', amount: 20 }], ['g', 'kg', 't'], [1, 0, 2], { difficulty: 0.2 }),
          unitQ('클립과 쌀 포대, 큰 고래의 무게에 알맞은 단위를 골라 보세요.', [{ name: '클립 한 개', amount: 1 }, { name: '쌀 포대', amount: 20 }, { name: '큰 고래', amount: 100 }], ['g', 'kg', 't'], [0, 1, 2], { difficulty: 0.22 }),
        ]),
    ],
    wrap: [
      '"무게의 단위 g, kg, t는 어떤 순서로 커지나요? 서로 몇 배일까요?" 1 kg = 1000 g, 1 t = 1000 kg을 L와 mL의 1 L = 1000 mL와 나란히 칠판에 쓰게 한다. 오늘 읽은 용수철저울의 눈금 읽기가 앞 시간의 눈금 그릇 읽기와 같은 방법임을 말하게 하며 단원을 마무리한다. 출구 2번을 틀린 학생은 눈금 한 칸의 크기를 먼저 정하는지 살핀다.',
      [
        { type: 'choice', prompt: '1 kg은 몇 g과 같은가요?', options: ['10 g', '100 g', '1000 g'], answer: 2, difficulty: 0.1, explain: '1 kg은 1000 g이에요. 1 L = 1000 mL와 같은 관계예요.' },
        { type: 'tool', tool: 'measure', options: { mode: 'scale', kind: 'spring', objects: [{ name: '감자', w: 480 }], max: 500, step: 100, minor: 10 }, state: {}, prompt: '감자를 용수철저울에 매달았어요. 눈금을 읽어 무게를 쓰세요.', target: { read: 480 }, difficulty: 0.2 },
        { type: 'choice', prompt: '갓 태어난 아기의 몸무게를 말할 때 알맞은 단위는 무엇인가요?', options: ['g', 'kg', 't'], answer: 1, difficulty: 0.15, explain: '아기의 몸무게는 약 3~4 kg이라서 kg으로 말해요.' },
      ],
    ],
    ws: {
      title: '무게를 재고 g, kg, t로 말하기',
      items: [
        { type: 'figure', prompt: '양팔저울을 보고 더 무거운 물건의 이름을 쓰세요.', tool: 'measure', options: { mode: 'scale' }, figures: [
          { options: { left: [{ name: '공책', w: 140 }], right: [{ name: '필통', w: 360 }] }, caption: '더 무거운 것: ___' }, { options: { left: [{ name: '수박', w: 5000 }], right: [{ name: '사과', w: 250 }] }, caption: '더 무거운 것: ___' }], answer: '필통, 수박' },
        { type: 'table', prompt: '용수철저울 바늘이 가리킨 곳을 읽어 무게를 쓰세요. 작은 눈금 한 칸은 10 g이에요.', columns: ['바늘의 자리', '무게'], cells: [['큰 눈금 100에서 작은 눈금 4칸 위', ''], ['큰 눈금 300에서 작은 눈금 7칸 위', ''], ['큰 눈금 400에서 작은 눈금 2칸 위', '']], answer: '140 g, 370 g, 420 g' },
        { type: 'table', prompt: '빈칸에 알맞은 수를 쓰세요.', columns: ['kg', 'g'], cells: [['1 kg', '1000 g'], ['3 kg', ''], ['', '4000 g'], ['2 kg 500 g', '']], answer: '3000 g, 4 kg, 2500 g' },
        { type: 'choice', prompt: '코끼리의 무게를 말할 때 알맞은 단위에 ○ 하세요.', options: ['g', 'kg', 't'], answer: 't' },
        { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '1 kg = ______ g이고, 1 t = ______ kg이에요.', answer: '1000, 1000' },
        { type: 'short', prompt: '집에서 g으로 말하면 좋은 물건과 kg으로 말하면 좋은 물건을 하나씩 써 보세요.' },
      ],
      easy: {
        note: '가벼운 것은 g, 무거운 것은 kg, 아주 무거운 것은 t로 말해요. 1 kg = 1000 g이에요.',
        items: [
          { type: 'figure', prompt: '양팔저울을 보고 더 무거운 물건의 이름을 쓰세요.', tool: 'measure', options: { mode: 'scale' }, figures: [{ options: { left: [{ name: '지우개', w: 50 }], right: [{ name: '책', w: 400 }] }, caption: '더 무거운 것: ___' }], answer: '책' },
          { type: 'table', prompt: '용수철저울 바늘이 가리킨 곳을 읽어 무게를 쓰세요. 작은 눈금 한 칸은 10 g이에요.', columns: ['바늘의 자리', '무게'], cells: [['큰 눈금 100에서 작은 눈금 2칸 위', ''], ['큰 눈금 200에서 작은 눈금 5칸 위', '']], answer: '120 g, 250 g' },
          { type: 'choice', prompt: '달걀 한 개의 무게에 알맞은 단위에 ○ 하세요.', options: ['g', 'kg'], answer: 'g' },
          { type: 'short', prompt: '1 kg은 몇 g인지 써 보세요.', answer: '1000 g' },
        ],
      },
    },
    diff: {
      easy: '저울 눈금이 10 g씩 보이고 읽은 값을 쓰는 칸에 단위 g이 붙어 있어서 눈금 읽기에 집중해요.',
      base: '눈금을 읽고 단위를 바꾸어 쓰며 g과 kg 가운데 알맞은 단위를 골라요.',
      challenge: 't까지 포함한 단위 고르기와 1 t = 1000 kg 설명을 하고, g·kg·t의 관계를 L와 mL의 관계에 빗대어 말해요.',
    },
    notes: '자주 보이는 어려움: ① 작은 눈금 한 칸을 1 g으로 읽는다 → 큰 눈금 사이 칸 수로 한 칸의 크기를 먼저 구한다. ② 1 kg 500 g을 150 g이나 1050 g으로 쓴다 → 1000과 500을 더한다고 말하게 한다. ③ 단위의 크기를 가늠하지 못해 아주 가벼운 것도 kg으로 고른다 → 달걀·쌀 포대 같은 기준 물건을 정해 둔다. 이 단원의 plan에는 무게의 합과 차 차시가 없으므로 이 시간에는 g·kg·t의 읽기와 관계까지만 다룬다.',
  }));

  PaperLessons.registerUnit({
    id: UID, schema: 'edu-unit.v1', catalogUnit: UNIT, grade: 3, subject: '수학', unitTitle: TITLE,
    flow: '1~3차시는 큰 그릇에 든 물은 L, 작은 그릇에 든 물은 mL로 말하는 이유를 알아보고, 눈금 한 칸의 크기를 먼저 구해 물의 양을 읽고 눈금이 없는 그릇은 기준 그릇과 견주어 약 몇 mL인지 어림합니다. 4~6차시는 200 mL 컵으로 직접 부어 1 L = 1000 mL를 확인하고, 몇 L 몇 mL와 몇 mL를 서로 바꾸어 쓰며 두 가지로 쓴 들이의 크기를 같은 단위로 바꾸어 견줍니다. 7~9차시는 두 그릇의 물을 큰 통에 합치고 덜어 내는 활동으로 들이의 합과 차를 L끼리, mL끼리 계산하고 mL 합이 1000을 넘을 때의 받아올림과 mL 칸에서 뺄 수 없을 때의 받아내림, 이야기 문제 풀이 설명까지 이어 갑니다. 마지막 10차시는 용수철저울 눈금을 읽어 g과 kg으로 무게를 말하고 1 kg = 1000 g, 1 t = 1000 kg을 L·mL의 관계와 견주며 단원을 묶습니다.',
    refs: {},
    lessons,
  });
})();
