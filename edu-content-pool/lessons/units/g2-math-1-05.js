/* 2학년 1학기 수학 5. 분류하기 — 단원 파일(차시 11개 가운데 3차시는 기존 차시 g2-math-sort).
 * 확인 필요: units-index 의 plan 은 11차시가 모두 같은 주제(정한 기준으로 사물을 나누고 개수를 세어 결과 말하기)의 '적용·개념·표현' 반복이라 role 순서(적용이 먼저)가
 *   학습 순서와 맞지 않는다. 기존 3차시(g2-math-sort)가 '분명한 기준 정하기·나누고 세기·짝의 기준 맞히기'를 이미 다루므로, 이 단원은 아래 흐름으로 짓고
 *   catalogTool 이 tenframe 으로 적힌 것은 '묶음 안 개수 세기'(2차시)에만 쓴다. 기존 차시는 고치지 않는다.
 * 예문·이야기(학용품 정리, 장난감 상자, 도형 카드, 과일 가게 등)는 이 단원을 위해 직접 지은 것이다. 학생 이름 예시(민지·준호)는 가명이다.
 * 흐름: 학용품을 종류로 나누기(1) → 도형 카드를 나누고 세기(2) → [기존 3: 분명한 기준·나누어 세기] → 결과에서 가장 많은 것·차이 말하기(4)
 *      → 빠짐없이 나누는 기준(5) → 애매한 기준 고치기(6) → 같은 자료 다른 기준, 전체 수는 같음(7) → 두 기준을 함께 써서 나누기(8)
 *      → 결과를 표로(9) → 그림으로(10) → 이름 붙여 결과 말하기·단원 정리(11).
 */
(function () {
  const UID = 'g2-math-1-05';
  const UNIT = 'g2-수학-1학기-5';
  const TITLE = '5. 분류하기';
  const head = (n) => ({
    id: `${UID}-${String(n).padStart(2, '0')}`, schema: 'edu-lesson.v1', catalog: { unit: UNIT, lesson: n },
    grade: 2, subject: '수학', unitTitle: TITLE, standards: ['[2수04-01]'], minutes: 40, formats: ['chromebook', 'projector', 'print'],
  });
  const ILL = (what) => `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`;
  const scene = (text, size) => ({ viewBox: [480, 270], layers: [
    { motif: 'sun', x: 412, y: 56, s: 0.8 }, { motif: 'cloud', x: 110, y: 50 }, { motif: 'hills', y: 206, colors: ['buttercup', 'mint', 'peach'] },
    { motif: 'house', x: 90, y: 220, s: 0.9 }, { motif: 'tree', x: 400, y: 218, color: 'mint' }, { motif: 'flower', x: 300, y: 240, color: 'rose' },
    { motif: 'text', x: 240, y: 144, text, size: size || 22 },
  ] });
  const X = (d, x) => Object.assign({ difficulty: 0.15 }, d, x || {});
  const sortQ = (prompt, topic, map, trap, x) => X({ prompt, toolOptions: { topic, slots: Object.keys(map), cards: [].concat(...Object.keys(map).map((k) => map[k]), trap || []) }, target: { sort: map } }, x);
  const pickQ = (prompt, topic, basket, good, bad, x) => X({ prompt, toolOptions: { mode: 'pick', topic, basket, cards: good.concat(bad) }, target: { pick: good } }, x);
  const matchQ = (prompt, topic, pairs, trap, x) => X({ prompt, toolOptions: { mode: 'match', topic, slots: pairs.map((p, i) => ({ id: `s${i + 1}`, label: p[0] })), cards: pairs.map((p) => p[1]).concat(trap || []) }, target: { match: Object.fromEntries(pairs.map((p, i) => [`s${i + 1}`, p[1]])) } }, x);
  // shapes 도형 카드 나누기: spec = [[카드id, 모양], …], binOf = 카드 순서대로 칸 번호, ask = 칸에 이어 묻는 수 질문
  const shapeQ = (prompt, spec, bins, binOf, ask, num, x) => X({ prompt, toolOptions: { mode: 'classify', cards: spec.map((s) => ({ id: s[0], shape: s[1] })), bins, askNum: { q: ask, unit: '개' } }, target: { bins: Object.fromEntries(spec.map((s, i) => [s[0], binOf[i]])), num } }, x);
  const shapeBin = (prompt, spec, bins, binOf, x) => X({ prompt, toolOptions: { mode: 'classify', cards: spec.map((s) => ({ id: s[0], shape: s[1] })), bins }, target: { bins: Object.fromEntries(spec.map((s, i) => [s[0], binOf[i]])) } }, x);
  // tenframe 묶음 안 개수 세기
  const tenQ = (prompt, count, opt, x) => X({ prompt, toolOptions: Object.assign({ item: 'apple' }, opt), target: { count } }, x);
  // chart(그림그래프, ○ 하나 = 1)
  const G = (title, data, unit, o) => Object.assign({ type: 'picture', title, data, unit, icon: 'circle', icons: [{ value: 1, name: `1${unit}` }], xLabel: '나눈 무리', yLabel: `${unit} 수` }, o || {});
  const rdPick = (prompt, title, data, unit, question, choices, pick, x) => X({ prompt, toolOptions: G(title, data, unit, { mode: 'read', question, choices }), target: { pick } }, x);
  const rdNum = (prompt, title, data, unit, question, value, x) => X({ prompt, toolOptions: G(title, data, unit, { mode: 'read', question }), target: { value } }, x);
  const rdTable = (prompt, title, data, unit, x) => X({ prompt, toolOptions: G(title, data, unit, { mode: 'read', tableBlanks: data.map((_, i) => i) }), target: { table: true } }, x);
  const drawQ = (prompt, title, data, unit, icon, x) => X({ prompt, toolOptions: G(title, data, unit, { icon }), target: { build: true } }, x);
  const FREE = (prompt) => ({ prompt, free: true });
  const ACT = (id, title, minutes, tool, teacher, task, levels, items) => ({ id, title, minutes, tool, teacher, task, levels, items });
  const LV_CARD = { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } };
  const LV_NONE = { easy: {}, base: {}, challenge: {} };
  const LV_GRAPH = { easy: { showValues: true }, base: {}, challenge: {} };
  const mood = { type: 'mood', prompt: '오늘 공부는 어땠나요?' };

  const lessons = [];

  // ───────────────────────────── 1차시 (intro · 종류로 나누기) ─────────────────────────────
  lessons.push(Object.assign(head(1), {
    title: '뒤죽박죽 학용품을 종류에 따라 정리하기',
    objective: '섞여 있는 물건을 쓰임새나 모양 같은 하나의 기준을 정해 나누고, 어떤 기준으로 나누었는지 말할 수 있다.',
    illustration: { prompt: ILL('a messy pile of pencils, erasers, scissors and glue sticks being sorted into three small paper trays by a little squirrel and a rabbit, with no readable letters'), scene: scene('기준을 정해 나누어요') },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"필통을 열었더니 물건이 뒤죽박죽 섞여 있어요. 필요한 것을 빨리 찾으려면 어떻게 정리하면 좋을까요?" 두세 명의 대답("비슷한 것끼리요", "쓰는 것끼리요")을 칠판에 적고, 시연 단추로 연필은 쓰는 칸, 지우개는 지우는 칸으로 가는 모습을 보여 준다. "기준을 정해야 같은 것끼리 모을 수 있어요"라고 오늘 할 일을 밝힌다.',
        student: '내 필통에서 같은 쓰임새의 물건끼리 모아 보고, 어떤 기준으로 모았는지 짝에게 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '필통 정리', slots: ['쓰는 것', '지우는 것'], cards: ['연필', '지우개'], shuffle: false }, sequence: [{ sort: { '쓰는 것': ['연필'], '지우는 것': ['지우개'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          ACT('a1', '활동 1. 기준을 정해 물건 카드 나누기', 14, 'mindmap',
            '"이 물건은 어느 칸에 어울릴까요? 왜 그렇게 생각했어요?" 칸 이름이 곧 나누는 기준임을 소리 내어 읽게 한다. 지우개와 수정테이프를 "쓰는 것"에 놓는 학생에게는 "글씨를 쓰는 물건인가요, 고치는 물건인가요?"라고 되묻는다. 셋째 문항에서는 어느 칸에도 맞지 않는 카드는 남겨 두어도 된다고 알려 준다.',
            '카드를 읽고 칸 이름에 맞는 칸으로 나누어요. 칸 이름이 나누는 기준이에요.', LV_CARD, [
              sortQ('필통 속 물건 카드를 쓰임새에 따라 나누어 보세요.', '필통 정리', { '쓰는 것': ['연필', '색연필', '사인펜'], '지우거나 고치는 것': ['지우개', '수정테이프'], '자르고 붙이는 것': ['가위', '풀'] }, [], { difficulty: 0.1 }),
              sortQ('장난감 상자 속 카드를 노는 방법에 따라 나누어 보세요.', '장난감 상자', { '굴리는 것': ['축구공', '구슬'], '쌓는 것': ['블록', '쌓기나무'], '안고 노는 것': ['곰 인형', '토끼 인형'] }, [], { difficulty: 0.15 }),
              sortQ('가방 속 물건 카드를 나누어 보세요. 어느 칸에도 맞지 않는 카드는 남겨요.', '가방 속 물건', { '공부할 때 써요': ['공책', '교과서', '연필'], '먹을 때 써요': ['수저', '도시락', '물병'] }, ['낡은 동전'], { difficulty: 0.2 }),
            ]),
          ACT('a2', '활동 2. 기준에 맞는 것만 모으기', 13, 'mindmap',
            '"기준이 ‘쓰는 학용품’이라면 지우개는 들어갈까요?" 기준을 먼저 말한 뒤 카드를 하나씩 따져 보게 한다. 눈에 띄는 카드를 모두 담는 학생에게는 "바구니 이름이 기준이에요. 이 카드가 그 이름에 맞나요?"라고 되묻는다. 책을 둥근 것에 넣는 학생에게는 모서리를 손가락으로 만져 보게 한다.',
            '바구니 이름을 기준으로 정하고, 그 기준에 맞는 카드만 골라 담아요.', LV_CARD, [
              pickQ('기준은 ‘쓰는 학용품’이에요. 기준에 맞는 카드만 골라 보세요.', '필통 속 물건', '쓰는 학용품', ['연필', '볼펜', '사인펜'], ['지우개', '가위', '풀'], { difficulty: 0.1 }),
              pickQ('기준은 ‘둥근 물건’이에요. 기준에 맞는 카드만 골라 보세요.', '교실 속 물건', '둥근 물건', ['공', '시계', '접시'], ['책', '삼각자', '상자'], { difficulty: 0.15 }),
              pickQ('기준은 ‘날아다니는 것’이에요. 기준에 맞는 카드만 골라 보세요.', '하늘과 땅', '날아다니는 것', ['참새', '나비', '비행기'], ['고양이', '자동차', '물고기'], { difficulty: 0.15 }),
            ]),
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"물건을 나눌 때 가장 먼저 해야 할 일은 무엇이었나요?" 기준을 먼저 정한다는 말을 짝에게 해 보게 한다. 출구 2번에서 기준에 맞지 않는 카드까지 담은 학생은 다음 시간(도형 카드 나누기)에서 칸 이름을 읽고 시작하게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '필통 속 물건', slots: ['쓰는 것', '자르거나 붙이는 것'], cards: ['색연필', '가위', '볼펜', '풀'] }, state: { at: {} }, prompt: '물건 카드를 쓰는 것과 자르거나 붙이는 것으로 나누어 보세요.', target: { sort: { '쓰는 것': ['색연필', '볼펜'], '자르거나 붙이는 것': ['가위', '풀'] } }, difficulty: 0.12 },
          { type: 'choice', prompt: '물건을 나누려고 해요. 가장 먼저 해야 할 일은 무엇인가요?', options: ['나눌 기준을 정해요', '아무 칸에나 넣어요', '큰 것부터 버려요'], answer: 0, difficulty: 0.1, explain: '기준을 먼저 정해야 같은 것끼리 한곳에 모을 수 있어요.' },
          { type: 'choice', prompt: '기준이 ‘먹을 때 쓰는 물건’이에요. 이 기준에 맞는 것은 무엇인가요?', options: ['수저', '가위', '공책'], answer: 0, difficulty: 0.1, explain: '수저는 밥을 먹을 때 쓰는 물건이라 기준에 맞아요.' },
          mood,
        ],
      },
    ],
    worksheet: {
      title: '기준을 정해 나누기',
      items: [
        { type: 'table', prompt: '물건을 쓰임새에 따라 알맞은 칸에 쓰세요. 칸마다 두 개씩 들어가요.', columns: ['쓰는 것', '자르거나 붙이는 것'], cells: [['', ''], ['', '']], answer: '쓰는 것: 연필·색연필 등, 자르거나 붙이는 것: 가위·풀 등' },
        { type: 'choice', prompt: '기준이 ‘둥근 것’일 때 알맞은 물건에 ○ 하세요.', options: ['시계', '책', '삼각자'], answer: '시계' },
        { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '물건을 나눌 때는 먼저 ______을 정하고, 같은 기준에 맞는 것끼리 ______.', answer: '기준, 모아요' },
        { type: 'draw', prompt: '내 필통에 있는 물건 세 가지를 그리고, 어떤 기준으로 나누면 좋을지 한 줄로 쓰세요.', answer: '예) 쓰는 것과 지우는 것으로 나눠요.' },
      ],
      easy: {
        note: '나눌 때는 기준이 있어야 해요. 기준에 맞는 것끼리 한곳에 모아요.',
        items: [
          { type: 'table', prompt: '물건을 알맞은 칸에 쓰세요.', columns: ['쓰는 것', '지우는 것'], cells: [['', ''], ['', '']], answer: '쓰는 것: 연필 등, 지우는 것: 지우개 등' },
          { type: 'choice', prompt: '쓰는 물건에 ○ 하세요.', options: ['연필', '가위'], answer: '연필' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '나눌 때는 먼저 ______을 정해요.', answer: '기준' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 놓은 카드에 초록 테두리가 생기고, 틀린 칸에 놓으면 까닭을 말하고 카드 칸으로 돌려보내요.',
      base: '카드를 모두 놓은 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '카드 순서가 섞여 나오고, 어느 칸에도 맞지 않는 카드를 가려내요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 기준을 정하지 않고 눈에 띄는 대로 놓는다 → 칸 이름을 소리 내어 읽고 그 이름에 맞는지 말하게 한다. ② 한 카드가 두 칸에 들어갈 수 있다고 망설인다 → 그때는 기준이 둘 섞이지 않았는지 살핀다. ③ 어느 칸에도 안 맞는 카드를 억지로 넣는다 → 남겨 두어도 된다고 알려 준다. 빠짐없이 나누는 기준은 5차시에서 이어서 다룬다.',
  }));

  // ───────────────────────────── 2차시 (practice · 도형 카드 나누고 세기) ─────────────────────────────
  lessons.push(Object.assign(head(2), {
    title: '도형 카드를 나누어 놓고 몇 개인지 세어 말하기',
    objective: '삼각형·사각형·원 같은 모양에 따라 도형 카드를 나누고, 칸마다 몇 개인지 세어 "사각형은 3개예요"처럼 말할 수 있다.',
    illustration: { prompt: ILL('a rabbit sorting paper triangles, squares and circles into three trays on a desk and counting them with its paw, no readable letters'), scene: scene('모양별로 나누고 세어요') },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"색종이 도형이 바구니에 섞여 있어요. 모양으로 나누면 칸마다 몇 개일까요?" 칸 하나를 손으로 짚으며 하나씩 소리 내어 세게 한다. 시연 단추로 사과를 십칸에 놓아 세는 모습을 보여 준다. "다 센 뒤에는 ‘사각형은 3개예요’처럼 이름과 수를 같이 말해요"라고 말한다.',
        student: '내 책상 위 물건 중 모양이 같은 것을 모아 몇 개인지 세어 짝에게 말해 봐요.',
        demo: { tool: 'tenframe', options: { item: 'apple' }, sequence: [{ count: 4 }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          ACT('a1', '활동 1. 도형 카드를 모양별로 나누고 세기', 14, 'shapes',
            '"세모는 변이 몇 개인가요? 네모는요?" 도형 카드를 손가락으로 따라 그리며 모양을 확인하게 한다. 직사각형을 사각형이 아닌 칸에 넣는 학생에게는 변과 꼭짓점을 세어 보게 한다. 센 수를 쓸 때는 다 나눈 뒤 칸마다 손가락으로 짚으며 세어서 한 번 센 카드를 다시 세지 않도록 한다.',
            '도형 카드를 칸에 나누어 넣고, 묻는 도형이 모두 몇 개인지 세어 칸에 써요.', LV_NONE, [
              shapeQ('도형 카드를 모양에 따라 삼각형·사각형·원 칸에 나누어 보세요.', [['a', 'triangle'], ['b', 'square'], ['c', 'circle'], ['d', 'triangle'], ['e', 'rectangle'], ['f', 'circle'], ['g', 'square']], ['삼각형', '사각형', '원'], [0, 1, 2, 0, 1, 2, 1], '사각형은 모두 몇 개일까요?', 3, { difficulty: 0.15 }),
              shapeQ('이번에는 다른 도형 카드를 나누어 보세요. 가장 적은 도형을 찾아 몇 개인지 쓰세요.', [['h', 'circle'], ['i', 'triangle'], ['j', 'rectangle'], ['k', 'circle'], ['l', 'circle'], ['m', 'triangle']], ['삼각형', '사각형', '원'], [2, 0, 1, 2, 2, 0], '가장 적은 도형은 모두 몇 개일까요?', 1, { difficulty: 0.2 }),
              shapeQ('도형 카드를 뾰족한 곳이 있는 것과 둥근 것으로 나누어 보세요.', [['n', 'triangle'], ['o', 'circle'], ['p', 'square'], ['q', 'oval'], ['r', 'triangle'], ['s', 'rectangle']], ['뾰족한 곳이 있어요', '둥글어요'], [0, 1, 0, 1, 0, 0], '둥근 도형은 모두 몇 개일까요?', 2, { difficulty: 0.2 }),
            ]),
          ACT('a2', '활동 2. 한 무리의 개수를 십칸에 놓아 세기', 13, 'tenframe',
            '"빨간 사과가 몇 개인지 십칸에 놓으면서 세어 볼까요?" 칸을 위 줄부터 채우며 5개가 되면 한 줄이 가득 찬 것을 확인하게 한다. 이미 놓은 사과를 다시 세는 학생에게는 칸마다 손가락으로 짚으며 센 것은 지워 두게 한다. 센 수는 "빨간 사과는 6개예요"처럼 이름과 함께 말하게 한다.',
            '나눈 무리의 개수만큼 십칸에 놓아요. 한 칸에 하나씩 놓고 몇 개인지 말해요.', LV_NONE, [
              tenQ('빨간 사과 6개와 초록 사과 3개를 나누었어요. 빨간 사과를 십칸에 놓아 개수를 세어 보세요.', 6, {}, { difficulty: 0.1 }),
              tenQ('노란 칩 8개와 파란 칩 2개를 나누었어요. 노란 칩을 십칸에 놓아 개수를 세어 보세요.', 8, { item: 'chip', color: 'buttercup' }, { difficulty: 0.15 }),
              tenQ('파란 칩 4개를 나누어 담았어요. 파란 칩을 십칸에 놓아 개수를 세어 보세요.', 4, { item: 'chip', color: 'sky' }, { difficulty: 0.1 }),
            ]),
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"세모 칸에는 몇 개가 들어갔나요? 어떻게 세었나요?" 이름과 수를 한 문장으로 말하게 한다. 출구 2번에서 한 번 센 도형을 다시 센 학생은 다음 시간 도입에서 센 카드를 옆으로 밀어 놓으며 세게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'shapes', options: { mode: 'classify', cards: [{ id: 'a', shape: 'circle' }, { id: 'b', shape: 'square' }, { id: 'c', shape: 'circle' }, { id: 'd', shape: 'triangle' }], bins: ['원', '네모와 세모'], askNum: { q: '원은 모두 몇 개일까요?', unit: '개' } }, state: {}, prompt: '도형 카드를 원과 네모·세모로 나누고 원이 몇 개인지 쓰세요.', target: { bins: { a: 0, b: 1, c: 0, d: 1 }, num: 2 }, difficulty: 0.15 },
          { type: 'choice', prompt: '삼각형 카드가 2개, 사각형 카드가 5개예요. 어느 도형이 더 많을까요?', options: ['삼각형', '사각형'], answer: 1, difficulty: 0.1, explain: '5가 2보다 크니까 사각형 카드가 더 많아요.' },
          { type: 'choice', prompt: '카드를 센 결과를 바르게 말한 것은 무엇인가요?', options: ['원은 3개예요', '원은 많아요', '원이에요'], answer: 0, difficulty: 0.1, explain: '무리의 이름과 센 수를 함께 말해야 어떤 결과인지 알 수 있어요.' },
          mood,
        ],
      },
    ],
    worksheet: {
      title: '모양별로 나누고 세기',
      items: [
        { type: 'figure', wide: true, prompt: '도형 카드를 보고 같은 모양에 같은 표시를 하세요(삼각형은 △, 사각형은 □, 원은 ○).', tool: 'shapes', options: { mode: 'classify' }, figures: [{ options: { cards: [{ id: 'a', shape: 'triangle' }, { id: 'b', shape: 'square' }, { id: 'c', shape: 'circle' }, { id: 'd', shape: 'rectangle' }, { id: 'e', shape: 'circle' }, { id: 'f', shape: 'triangle' }], bins: ['삼각형', '사각형', '원'] }, caption: '' }], answer: '△ 2개, □ 2개, ○ 2개 표시' },
        { type: 'table', prompt: '표시한 도형을 세어 표에 쓰세요.', columns: ['삼각형', '사각형', '원'], rows: 1, answer: '2, 2, 2' },
        { type: 'choice', prompt: '사각형이 4개, 원이 7개일 때 더 적은 것에 ○ 하세요.', options: ['사각형', '원'], answer: '사각형' },
        { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '센 결과는 이름과 수를 함께 말해요. "삼각형은 ___개예요."', answer: '2' },
      ],
      easy: {
        note: '모양이 같은 카드를 한곳에 모으고, 하나씩 짚으며 세어요.',
        items: [
          { type: 'figure', wide: true, prompt: '같은 모양에 같은 표시를 하세요(삼각형은 △, 원은 ○).', tool: 'shapes', options: { mode: 'classify' }, figures: [{ options: { cards: [{ id: 'a', shape: 'triangle' }, { id: 'b', shape: 'circle' }, { id: 'c', shape: 'triangle' }, { id: 'd', shape: 'circle' }, { id: 'e', shape: 'circle' }], bins: ['삼각형', '원'] }, caption: '' }], answer: '△ 2개, ○ 3개 표시' },
          { type: 'table', prompt: '표시한 도형을 세어 쓰세요.', columns: ['삼각형', '원'], rows: 1, answer: '2, 3' },
          { type: 'choice', prompt: '삼각형 2개, 원 3개. 더 많은 것에 ○ 하세요.', options: ['삼각형', '원'], answer: '원' },
        ],
      },
    },
    differentiation: {
      easy: '도형 카드가 줄고, 한 칸에 놓을 때마다 칸 안의 개수가 눈으로 보여요. 십칸에는 칸 번호가 보여요.',
      base: '카드를 모두 나눈 뒤 칸마다 몇 개인지 스스로 세어 써요.',
      challenge: '뾰족한 곳이 있는 것과 둥근 것처럼 이름이 다른 기준으로 나누고, 가장 적은 도형의 수를 찾아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 직사각형을 사각형이 아니라고 여긴다 → 변 4개, 꼭짓점 4개를 손가락으로 세어 본다. ② 세던 카드를 다시 세거나 빠뜨린다 → 센 카드는 옆으로 밀어 놓는다. ③ 수만 쓰고 무엇의 수인지 말하지 않는다 → "이름은 ○개예요" 한 문장으로 말하게 한다. 같은 자료를 다른 기준으로 다시 나누는 것은 7차시에서 다룬다.',
  }));

  // ───────────────────────────── 4차시 (extend · 가장 많은 것·차이 말하기) ─────────────────────────────
  lessons.push(Object.assign(head(4), {
    title: '나눈 결과에서 가장 많은 것과 몇 개 더 많은지 말하기',
    objective: '분류하여 센 결과를 보고 가장 많은 것과 가장 적은 것을 찾고, 두 무리의 차이와 전체 수를 한 문장으로 말할 수 있다.',
    illustration: { prompt: ILL('a bear and a squirrel looking at three rows of colored paper circles of different lengths on a board and pointing at the longest row, no readable letters'), scene: scene('결과를 보고 말해요') },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"우리 반이 좋아하는 색깔을 나누어 세었더니 빨강 3, 파랑 7, 노랑 4였어요. 이 결과를 보고 알 수 있는 것을 말해 볼까요?" 두세 명의 말("파랑이 가장 많아요")을 칠판에 문장으로 적고, 시연 단추로 그래프에서 가장 많은 칸을 짚는 모습을 보여 준다. "결과를 보면 ‘가장 많은 것’과 ‘몇 개 더 많은지’를 말할 수 있어요."',
        student: '오늘 우리 반 친구 중 안경을 쓴 친구와 안 쓴 친구를 나누어 세었다면 어느 쪽이 더 많을지 짝과 예상해 봐요.',
        demo: { tool: 'chart', options: G('좋아하는 색', [['빨강', 3], ['파랑', 7], ['노랑', 4]], '명', { mode: 'read', question: '가장 많은 색은?', choices: ['빨강', '파랑', '노랑'] }), sequence: [{ pick: 1 }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          ACT('a1', '활동 1. 그래프를 보고 많고 적음 말하기', 14, 'chart',
            '"○가 가장 긴 줄은 어느 줄인가요? 몇 개인가요?" 줄 끝을 손가락으로 짚으며 세게 한다. "5개 더 많아요" 대신 5개를 그대로 말하는 학생에게는 "두 줄을 나란히 놓고 남는 ○를 세어 보세요"라고 말한다. 마지막 문항에서는 전체 수를 구하기 위해 세 줄을 모두 센다는 점을 짚는다.',
            '나눈 결과를 ○ 그래프로 나타냈어요. 그래프를 보고 물음에 답해요.', LV_GRAPH, [
              rdPick('단추를 색깔로 나누어 센 그래프예요. 가장 많은 색을 골라 보세요.', '단추 색깔', [['빨강', 4], ['파랑', 7], ['노랑', 3]], '개', '가장 많은 색은 무엇일까요?', ['빨강', '파랑', '노랑'], 1, { difficulty: 0.1 }),
              rdPick('학용품을 종류로 나누어 센 그래프예요. 가장 적은 것을 골라 보세요.', '학용품 종류', [['연필', 6], ['지우개', 2], ['풀', 5]], '개', '가장 적은 것은 무엇일까요?', ['연필', '지우개', '풀'], 1, { difficulty: 0.12 }),
              rdNum('구슬을 색깔로 나누어 센 그래프예요. 파랑 구슬은 빨강 구슬보다 몇 개 더 많은가요?', '구슬 색깔', [['빨강', 3], ['파랑', 8], ['초록', 5]], '개', '파랑은 빨강보다 몇 개 더 많을까요?', 5, { difficulty: 0.2 }),
              rdNum('더 해 보기: 과일은 모두 몇 개인지 세어 보세요.', '과일 종류', [['사과', 4], ['배', 3], ['귤', 6]], '개', '과일은 모두 몇 개일까요?', 13, { extra: true, difficulty: 0.25 }),
            ]),
          ACT('a2', '활동 2. 결과를 바르게 말한 문장 고르기', 13, 'mindmap',
            '"이 문장은 센 결과와 맞을까요?" 수를 손가락으로 세어 한 문장씩 확인하게 한다. "파랑이 노랑보다 2개 많아요"를 맞다고 고르는 학생에게는 6에서 3을 뺀 값을 손으로 세어 보게 한다. 모두 합한 수를 구할 때는 세 수를 하나씩 더해 확인하게 한다.',
            '센 결과를 보고 바르게 말한 문장만 골라요.', LV_CARD, [
              pickQ('단추를 나누었더니 빨강 4개, 파랑 6개, 노랑 3개예요. 바르게 말한 문장만 골라 보세요.', '단추 결과', '바르게 말한 문장', ['파랑이 가장 많아요', '노랑이 가장 적어요', '모두 13개예요'], ['빨강이 가장 많아요', '파랑이 노랑보다 2개 많아요'], { difficulty: 0.2 }),
              pickQ('블록을 모양으로 나누었더니 동그라미 5개, 네모 2개, 세모 6개예요. 바르게 말한 문장만 골라 보세요.', '블록 결과', '바르게 말한 문장', ['세모가 가장 많아요', '네모가 가장 적어요', '동그라미가 네모보다 3개 많아요'], ['동그라미가 가장 많아요', '모두 12개예요'], { difficulty: 0.25 }),
              pickQ('책을 종류로 나누었더니 동화책 7권, 그림책 4권, 만화책 5권이에요. 바르게 말한 문장만 골라 보세요.', '책 결과', '바르게 말한 문장', ['동화책이 가장 많아요', '그림책이 가장 적어요', '모두 16권이에요'], ['만화책이 가장 많아요', '동화책이 그림책보다 2권 많아요'], { difficulty: 0.25 }),
            ]),
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"결과를 보고 알 수 있는 것을 세 가지 말해 볼까요?" 가장 많은 것, 가장 적은 것, 몇 개 더 많은지를 말하게 한다. 출구 2번에서 차이를 구해야 하는데 큰 수를 그대로 쓴 학생은 다음 시간 도입에서 두 수를 손가락으로 견주게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'chart', options: G('주머니 속 구슬', [['빨강', 2], ['파랑', 5], ['초록', 4]], '개', { mode: 'read', question: '가장 많은 색은 무엇일까요?', choices: ['빨강', '파랑', '초록'] }), state: {}, prompt: '그래프를 보고 가장 많은 구슬의 색을 고르세요.', target: { pick: 1 }, difficulty: 0.12 },
          { type: 'choice', prompt: '사과가 7개, 귤이 4개예요. 사과는 귤보다 몇 개 더 많나요?', options: ['3개', '4개', '11개'], answer: 0, difficulty: 0.15, explain: '7에서 4를 빼면 3이라서 사과가 3개 더 많아요.' },
          { type: 'choice', prompt: '빨강 3개, 파랑 5개, 노랑 2개예요. 모두 몇 개인가요?', options: ['8개', '10개', '5개'], answer: 1, difficulty: 0.15, explain: '3과 5와 2를 모두 더하면 10이라서 모두 10개예요.' },
          mood,
        ],
      },
    ],
    worksheet: {
      title: '결과를 보고 말하기',
      items: [
        { type: 'table', prompt: '단추를 색깔로 나누어 센 표예요. 알맞은 수나 말을 쓰세요.', columns: ['색깔', '빨강', '파랑', '노랑'], cells: [['개수', '5', '8', '3'], ['가장 많은 색', '', '', ''], ['가장 적은 색', '', '', '']], answer: '가장 많은 색: 파랑, 가장 적은 색: 노랑' },
        { type: 'blank', prompt: '표를 보고 빈칸에 알맞은 수를 쓰세요.', text: '파랑은 노랑보다 ___개 더 많아요. 단추는 모두 ___개예요.', answer: '5, 16' },
        { type: 'choice', prompt: '바르게 말한 문장에 ○ 하세요.', options: ['빨강은 노랑보다 2개 많아요.', '빨강은 노랑보다 3개 많아요.', '노랑이 가장 많아요.'], answer: '빨강은 노랑보다 2개 많아요.' },
        { type: 'short', prompt: '우리 반 친구들이 좋아하는 놀이를 나누어 센다면 어떤 결과를 알고 싶은지 한 문장으로 쓰세요.', answer: '예) 가장 많은 친구가 좋아하는 놀이가 무엇인지 알고 싶어요.' },
      ],
      easy: {
        note: '센 수가 가장 큰 것이 가장 많고, 가장 작은 것이 가장 적어요. 두 수의 차이는 큰 수에서 작은 수를 빼요.',
        items: [
          { type: 'table', prompt: '블록을 모양으로 나누어 센 표예요. 알맞은 말을 쓰세요.', columns: ['모양', '동그라미', '네모'], cells: [['개수', '6', '4'], ['더 많은 모양', '', '']], answer: '동그라미' },
          { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '동그라미는 네모보다 ___개 더 많아요.', answer: '2' },
          { type: 'choice', prompt: '더 적은 것에 ○ 하세요.', options: ['동그라미 6개', '네모 4개'], answer: '네모 4개' },
        ],
      },
    },
    differentiation: {
      easy: '그래프 줄 끝에 수가 보여서 세지 않고 견줄 수 있어요.',
      base: '○를 직접 세어 가장 많은 것과 차이를 구해요.',
      challenge: '세 줄을 모두 세어 전체 수를 구하고, 맞는 문장과 틀린 문장을 가려내요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 가장 많은 것을 말할 때 수가 큰 것이 아니라 이름이 앞선 것을 고른다 → ○ 줄이 가장 긴 줄을 손가락으로 짚는다. ② 차이를 구하라는데 큰 수를 그대로 쓴다 → 두 줄을 나란히 놓고 남는 ○를 세어 본다. ③ 전체 수를 구할 때 한 무리를 빼먹는다 → 무리마다 센 수를 손가락으로 하나씩 더한다. 같은 자료를 표로 나타내는 방법은 9차시에서 다룬다.',
  }));

  // ───────────────────────────── 5차시 (core · 빠짐없이 나누는 기준) ─────────────────────────────
  lessons.push(Object.assign(head(5), {
    title: '어느 칸에도 못 들어가는 카드가 없게 나누기',
    objective: '나눈 뒤 어느 칸에도 들어가지 않는 카드가 있는지 살피고, 있으면 칸을 하나 더 만들어 모든 카드를 빠짐없이 나눌 수 있다.',
    illustration: { prompt: ILL('three paper trays on a desk labeled only by small pictures of a wing, four paw prints and a question mark, and a snake card waiting outside the trays while a rabbit points at it'), scene: scene('남는 카드가 없게 나눠요') },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"동물 카드를 ‘날개가 있는 것’과 ‘다리가 네 개인 것’으로 나누고 있어요. 그런데 뱀 카드가 갈 곳이 없어요. 어떻게 하면 좋을까요?" 두세 명이 해결 방법("칸을 하나 더 만들어요")을 말하게 한 뒤 시연 단추로 카드가 칸에 들어가는 모습을 보여 준다. "다 나눈 뒤에는 남은 카드가 없는지 꼭 확인해요."',
        student: '내 책가방 속 물건을 두 칸으로 나눌 때 어느 칸에도 못 들어가는 물건이 있었는지 짝에게 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '날개와 다리', slots: ['날개가 있어요', '다리가 네 개예요'], cards: ['참새', '고양이'], shuffle: false }, sequence: [{ sort: { '날개가 있어요': ['참새'], '다리가 네 개예요': ['고양이'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          ACT('a1', '활동 1. 어느 칸에도 안 들어가는 카드 찾기', 13, 'mindmap',
            '"카드를 하나씩 두 칸에 넣어 보세요. 어디에도 넣을 수 없는 카드는 무엇인가요?" 칸 이름을 소리 내어 읽고 카드가 어울리는지 따져 보게 한다. 뱀을 "다리가 네 개예요"에 억지로 넣는 학생에게는 뱀의 다리를 세어 보게 한다. 남은 카드가 있으면 기준이 모든 카드를 담지 못한다는 뜻임을 짚는다.',
            '두 칸의 기준을 읽고, 어느 칸에도 들어가지 않는 카드만 골라 바구니에 담아요.', LV_CARD, [
              pickQ('기준은 ‘날개가 있는 것’과 ‘다리가 네 개인 것’이에요. 어느 칸에도 들어가지 않는 동물을 골라 보세요.', '날개와 다리', '어느 칸에도 안 들어가요', ['뱀'], ['참새', '고양이', '잠자리', '강아지'], { difficulty: 0.12 }),
              pickQ('기준은 ‘빨간 것’과 ‘파란 것’이에요. 어느 칸에도 들어가지 않는 물건을 골라 보세요.', '빨강과 파랑', '어느 칸에도 안 들어가요', ['노란 풍선'], ['빨간 공', '파란 모자', '빨간 신발', '파란 우산'], { difficulty: 0.15 }),
              pickQ('기준은 ‘둥근 것’과 ‘네모난 것’이에요. 어느 칸에도 들어가지 않는 물건을 골라 보세요.', '둥근 것과 네모난 것', '어느 칸에도 안 들어가요', ['세모난 삼각자'], ['둥근 시계', '네모난 책', '둥근 공', '둥근 접시'],
                { difficulty: 0.2, predict: { q: '삼각자는 둥글지도 않고 네모나지도 않아요. 어떻게 할까요?', options: ['칸을 하나 더 만들어요', '둥근 칸에 억지로 넣어요', '버려요'], answer: 0 }, conclude: '어느 칸에도 안 맞는 카드는 억지로 넣지 말고 칸을 하나 더 만들어요.' }),
            ]),
          ACT('a2', '활동 2. 그 밖의 칸을 만들어 빠짐없이 나누기', 14, 'mindmap',
            '"이번에는 ‘그 밖의 것’ 칸이 있어요. 맞는 칸이 없으면 이 칸에 넣어요." 카드마다 두 기준을 먼저 따져 본 뒤에 그 밖의 칸을 쓰게 한다. 맞는 칸이 있는데도 그 밖의 칸에 넣는 학생에게는 칸 이름과 카드를 다시 견주게 한다. 다 나눈 뒤 남은 카드가 하나도 없는지 확인하게 한다.',
            '카드를 읽고 알맞은 칸에 나누어요. 맞는 칸이 없으면 ‘그 밖의 것’ 칸에 넣어요.', LV_CARD, [
              sortQ('동물 카드를 세 칸에 빠짐없이 나누어 보세요.', '날개와 다리', { '날개가 있어요': ['참새', '잠자리'], '다리가 네 개예요': ['고양이', '강아지'], '그 밖의 것': ['뱀', '물고기'] }, [], { difficulty: 0.15 }),
              sortQ('물건 카드를 세 칸에 빠짐없이 나누어 보세요.', '색깔 나누기', { '빨간 것': ['빨간 공', '빨간 신발'], '파란 것': ['파란 모자', '파란 우산'], '그 밖의 색': ['노란 풍선', '초록 나뭇잎'] }, [], { difficulty: 0.2 }),
              sortQ('물건 카드를 모양에 따라 세 칸에 빠짐없이 나누어 보세요.', '모양 나누기', { '둥근 것': ['둥근 시계', '둥근 접시'], '네모난 것': ['네모난 책', '네모난 공책'], '그 밖의 모양': ['세모난 삼각자', '별 모양 스티커'] }, [], { difficulty: 0.2 }),
            ]),
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"나눈 다음에 꼭 확인할 것은 무엇이었나요?" 남은 카드가 없는지 확인하고, 있으면 칸을 하나 더 만든다는 말을 이끌어 낸다. 출구 2번에서 남은 카드를 버리자고 고른 학생은 다음 시간 도입에서 "버려도 될까요, 칸을 만들어도 될까요?"를 먼저 묻는다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '운동장 물건', slots: ['둥근 것', '네모난 것', '그 밖의 것'], cards: ['공', '매트', '호루라기', '훌라후프'] }, state: { at: {} }, prompt: '운동장 물건 카드를 세 칸에 빠짐없이 나누어 보세요.', target: { sort: { '둥근 것': ['공', '훌라후프'], '네모난 것': ['매트'], '그 밖의 것': ['호루라기'] } }, difficulty: 0.2 },
          { type: 'choice', prompt: '카드를 나누었더니 어느 칸에도 못 들어가는 카드가 하나 남았어요. 어떻게 할까요?', options: ['칸을 하나 더 만들어요', '그 카드를 버려요', '아무 칸에나 넣어요'], answer: 0, difficulty: 0.12, explain: '남은 카드를 버리거나 억지로 넣으면 결과가 틀려져요. 칸을 하나 더 만들어 빠짐없이 나누어요.' },
          { type: 'choice', prompt: '"빠짐없이 나누었다"는 말은 무슨 뜻일까요?', options: ['모든 카드가 어느 한 칸에 들어갔어요', '카드를 한 칸에만 모았어요', '칸이 두 개뿐이에요'], answer: 0, difficulty: 0.15, explain: '빠짐없이 나누면 남는 카드가 하나도 없어요.' },
          mood,
        ],
      },
    ],
    worksheet: {
      title: '빠짐없이 나누기',
      items: [
        { type: 'table', prompt: '카드를 칸에 나누어 쓰세요. 맞는 칸이 없으면 ‘그 밖의 것’ 칸에 쓰세요.', columns: ['날개가 있어요', '다리가 네 개예요', '그 밖의 것'], cells: [['참새 · 말 · 뱀', '', '']], answer: '날개: 참새, 다리 네 개: 말, 그 밖의 것: 뱀' },
        { type: 'choice', prompt: '기준이 ‘빨간 것’과 ‘파란 것’일 때 어느 칸에도 안 들어가는 것에 ○ 하세요.', options: ['빨간 공', '파란 모자', '노란 풍선'], answer: '노란 풍선' },
        { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '어느 칸에도 안 맞는 카드가 있으면 ______을 하나 더 만들어 ______ 나누어요.', answer: '칸, 빠짐없이' },
        { type: 'short', prompt: '우리 교실 물건을 ‘둥근 것’과 ‘네모난 것’으로 나눌 때 어느 칸에도 안 들어갈 물건 하나를 쓰세요.', answer: '예) 삼각자, 가위' },
      ],
      easy: {
        note: '카드마다 어느 칸에 맞는지 따져 보고, 맞는 칸이 없으면 그 밖의 칸에 넣어요.',
        items: [
          { type: 'table', prompt: '카드를 알맞은 칸에 쓰세요.', columns: ['빨간 것', '파란 것', '그 밖의 것'], cells: [['빨간 공 · 파란 모자 · 노란 풍선', '', '']], answer: '빨간 것: 빨간 공, 파란 것: 파란 모자, 그 밖의 것: 노란 풍선' },
          { type: 'choice', prompt: '어느 칸에도 안 맞을 때 할 일에 ○ 하세요.', options: ['칸을 하나 더 만들어요', '버려요'], answer: '칸을 하나 더 만들어요' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '남는 카드가 없게 ______ 나누어요.', answer: '빠짐없이' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 놓은 카드에 초록 테두리가 생기고, 그 밖의 칸에 넣을 카드는 까닭과 함께 알려 줘요.',
      base: '카드를 모두 놓은 뒤 확인을 눌러 남은 카드를 스스로 찾아요.',
      challenge: '카드 순서가 섞여 나오고, 칸 이름이 비슷한 문항에서 그 밖의 칸을 정확히 써야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 어느 칸에도 안 맞는 카드를 억지로 한 칸에 넣는다 → 칸 이름을 소리 내어 읽고 그 카드가 맞는지 묻는다. ② 남은 카드를 버리거나 빼 놓고 센다 → 나눈 뒤 전체 카드 수와 칸의 합이 같은지 확인하게 한다. ③ 맞는 칸이 있는데도 그 밖의 칸에 쉽게 넣는다 → 그 밖의 칸은 마지막에 쓴다고 알려 준다. 기존 3차시에서 배운 분명한 기준 위에 빠짐없는 나누기를 더하는 차시이다.',
  }));

  // ───────────────────────────── 6차시 (practice · 애매한 기준 고치기) ─────────────────────────────
  lessons.push(Object.assign(head(6), {
    title: '애매한 기준을 누가 봐도 같은 기준으로 고쳐 쓰기',
    objective: '‘예쁜’, ‘큰’, ‘맛있는’처럼 사람마다 다르게 느끼는 기준을 ‘단추가 있는’, ‘다리가 두 개인’처럼 누가 봐도 같은 기준으로 고쳐 말할 수 있다.',
    illustration: { prompt: ILL('two children holding different cards for the same pile of clothes and a paper magnifying glass helping them pick a clear rule such as a button, no readable letters'), scene: scene('누가 봐도 같은 기준으로') },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"우리 반에서 ‘귀여운 동물’ 카드를 모아 보세요. 친구와 내가 고른 카드가 같을까요?" 두 학생의 카드를 칠판에 붙여 다른 카드가 나오는지 보게 한다. 시연 단추로 애매한 기준이 분명한 기준으로 바뀌는 모습을 보여 준다. "같은 카드를 고르려면 기준을 어떻게 바꿔야 할까요?"',
        student: '친구와 내가 같은 물건을 서로 다르게 나눌 때가 있었는지 떠올려 말해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '기준 고치기', slots: [{ id: 's1', label: '귀여운 동물' }], cards: ['귀가 길게 늘어진 동물'], shuffle: false }, sequence: [{ match: { s1: '귀가 길게 늘어진 동물' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          ACT('a1', '활동 1. 애매한 말을 분명한 말로 바꾸기', 14, 'mindmap',
            '"‘맛있는 과일’은 사람마다 다를까요? 어떻게 바꾸면 누가 봐도 같은 과일을 고를까요?" 바꾼 기준을 소리 내어 읽고 나와 짝이 같은 카드를 고르는지 견주게 한다. 바꾼 말도 "귀엽게 생긴"처럼 여전히 느낌이면 눈으로 확인할 수 있는 말로 다시 바꾸게 한다. 마지막 문항의 남는 카드는 느낌만 담은 말임을 짚어 준다.',
            '애매한 기준 카드와 누가 봐도 같은 기준 카드를 이어요. 남는 카드는 이어지지 않아요.', LV_CARD, [
              matchQ('애매한 기준을 눈으로 확인할 수 있는 기준으로 바꾸어 이어 보세요.', '기준 고치기', [['맛있는 과일', '껍질이 빨간 과일'], ['귀여운 동물', '다리가 두 개인 동물'], ['예쁜 옷', '단추가 달린 옷']], ['모두가 좋아하는 것'], { difficulty: 0.15 }),
              matchQ('이번에도 애매한 기준을 확인할 수 있는 기준으로 이어 보세요.', '기준 고치기', [['큰 가방', '손잡이가 달린 가방'], ['재미있는 책', '그림이 많은 책'], ['예쁜 신발', '끈이 달린 신발']], ['마음에 드는 것'], { difficulty: 0.2 }),
              matchQ('애매한 기준을 한 번 더 바꾸어 이어 보세요.', '기준 고치기', [['귀여운 인형', '귀가 길게 달린 인형'], ['시끄러운 악기', '두드리는 악기'], ['맛있는 간식', '포장지가 있는 간식']], ['내가 좋아하는 것'], { difficulty: 0.2 }),
            ]),
          ACT('a2', '활동 2. 누가 나누어도 같은 기준 고르기', 13, 'mindmap',
            '"이 기준으로 나누면 나와 짝이 똑같이 나눌까요?" 눈으로 보고 하나하나 확인할 수 있는지 따져 보게 한다. ‘튼튼한’처럼 힘으로만 알 수 있는 기준을 고르는 학생에게는 눈으로 보고 정할 수 있는지 묻는다. 좋은 기준 두 개를 고른 뒤 다른 기준이 왜 안 되는지 한 문장으로 말하게 한다.',
            '누가 나누어도 결과가 같은 기준만 골라요.', LV_CARD, [
              pickQ('누가 나누어도 결과가 같은 기준만 골라 보세요.', '옷과 동물 나누기', '같은 결과가 나오는 기준', ['단추가 있는 옷과 없는 옷', '다리가 두 개인 동물과 아닌 동물'], ['예쁜 옷과 안 예쁜 옷', '귀여운 동물과 안 귀여운 동물'], { difficulty: 0.15 }),
              pickQ('누가 나누어도 결과가 같은 기준만 골라 보세요.', '통과 양말 나누기', '같은 결과가 나오는 기준', ['뚜껑이 있는 통과 없는 통', '줄무늬가 있는 양말과 없는 양말'], ['튼튼한 통과 약한 통', '멋진 양말과 안 멋진 양말'], { difficulty: 0.2 }),
              pickQ('누가 나누어도 결과가 같은 기준만 골라 보세요.', '탈것과 놀이 나누기', '같은 결과가 나오는 기준', ['바퀴가 있는 탈것과 없는 탈것', '날개가 있는 것과 없는 것'], ['빠른 탈것과 느린 탈것', '신나는 것과 안 신나는 것'], { difficulty: 0.2 }),
            ]),
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"좋은 기준은 어떤 모양이어야 할까요?" 눈으로 보거나 세어서 확인할 수 있고 누가 해도 같은 결과가 나온다는 말을 이끌어 낸다. 출구 1번에서 느낌을 나타내는 보기를 고른 학생은 다음 시간에 "나와 짝이 같게 나눌까요?"를 먼저 묻는다.',
        exitTicket: [
          { type: 'choice', prompt: '누가 나누어도 결과가 같은 기준은 어느 것일까요?', options: ['멋진 모자와 안 멋진 모자', '리본이 달린 모자와 없는 모자', '귀여운 모자와 안 귀여운 모자'], answer: 1, difficulty: 0.12, explain: '리본이 있는지는 눈으로 보고 누구나 똑같이 말할 수 있어요.' },
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '기준 고치기', slots: [{ id: 's1', label: '긴 연필' }, { id: 's2', label: '귀여운 필통' }], cards: ['끝이 뾰족하게 깎인 연필', '지퍼가 달린 필통', '모두가 좋아하는 필통'] }, state: { at: {} }, prompt: '애매한 기준과 눈으로 확인할 수 있는 기준을 이어 보세요.', target: { match: { s1: '끝이 뾰족하게 깎인 연필', s2: '지퍼가 달린 필통' } }, difficulty: 0.2 },
          { type: 'choice', prompt: '"큰 가방"이 기준으로 알맞지 않은 까닭은 무엇일까요?', options: ['사람마다 큰 정도가 달라요', '가방은 나눌 수 없어요', '가방은 모두 같아요'], answer: 0, difficulty: 0.15, explain: '얼마나 커야 큰지는 사람마다 달라서 나눈 결과가 달라져요.' },
          mood,
        ],
      },
    ],
    worksheet: {
      title: '애매한 기준 고치기',
      items: [
        { type: 'table', prompt: '애매한 기준을 눈으로 확인할 수 있는 기준으로 바꾸어 쓰세요.', columns: ['애매한 기준', '바꾼 기준'], cells: [['예쁜 신발', ''], ['귀여운 동물', ''], ['큰 가방', '']], answer: '예) 끈이 달린 신발, 다리가 두 개인 동물, 손잡이가 달린 가방' },
        { type: 'choice', prompt: '누가 나누어도 결과가 같은 기준에 ○ 하세요.', options: ['단추가 달린 옷과 안 달린 옷', '멋진 옷과 안 멋진 옷'], answer: '단추가 달린 옷과 안 달린 옷' },
        { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '좋은 기준은 눈으로 ______ 수 있고, 누가 나누어도 결과가 ______ 나와요.', answer: '볼, 같게' },
        { type: 'short', prompt: '친구와 다르게 나누어졌던 기준을 하나 쓰고, 어떻게 고치면 좋을지 쓰세요.', answer: '예) 예쁜 그림 → 하늘색이 들어간 그림' },
      ],
      easy: {
        note: '느낌만 말하는 기준은 사람마다 달라요. 눈으로 보고 같게 말할 수 있는 기준을 골라요.',
        items: [
          { type: 'choice', prompt: '좋은 기준에 ○ 하세요.', options: ['귀여운 동물', '다리가 네 개인 동물'], answer: '다리가 네 개인 동물' },
          { type: 'table', prompt: '바꾼 기준을 알맞게 쓰세요.', columns: ['애매한 기준', '바꾼 기준'], cells: [['예쁜 옷', ''], ['큰 상자', '']], answer: '예) 단추가 달린 옷, 뚜껑이 있는 상자' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '느낌만 말하는 기준은 사람마다 ______.', answer: '달라요' },
        ],
      },
    },
    differentiation: {
      easy: '카드가 두 장씩 줄고, 맞는 짝에 놓으면 초록 테두리가 생겨요.',
      base: '카드를 모두 이은 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '바꾼 기준 후보가 여러 개 섞여 나오고, 느낌만 담은 카드를 가려내요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 느낌 말을 그대로 기준으로 삼는다 → 나와 짝이 같게 나눌지 먼저 물어본다. ② 바꾼 기준도 여전히 느낌 말이다 → 눈으로 보거나 세어서 확인할 수 있는지 묻는다. ③ 맞는 기준에 걸리지 않는 카드를 억지로 짝짓는다 → 남는 카드가 있어도 된다고 말한다. 기존 3차시에서 ‘예쁜 것’ 기준을 만난 학생이 이번에는 직접 고쳐 쓰게 한다.',
  }));

  // ───────────────────────────── 7차시 (extend · 같은 자료, 다른 기준, 같은 전체) ─────────────────────────────
  const SET8 = ['r2c', 'b2s', 'y2t', 'r4s', 'b4c', 'y4t', 'r2t', 'b2c'];
  const LV_SB = { easy: { limit: 6, instant: true, showCount: true }, base: {}, challenge: { more: 3 } };
  lessons.push(Object.assign(head(7), {
    title: '같은 단추를 다른 기준으로 나누어도 전체 수는 그대로',
    objective: '같은 자료를 색·모양·구멍 수처럼 다른 기준으로 나누면 무리의 모양은 달라지지만, 모두 합한 수는 같음을 말할 수 있다.',
    illustration: { prompt: ILL('eight colorful paper buttons being sorted into trays first by color then by shape on a classroom table, a bear and a rabbit counting the total each time, no readable letters'), scene: scene('기준이 달라도 모두 몇 개?') },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"단추 8개를 색깔로 나누었어요. 이번에는 모양으로 나누면 단추도 달라질까요, 그대로일까요?" 손을 들어 예상하게 한 뒤 시연 단추로 같은 단추가 색깔 칸에서 모양 칸으로 다시 나뉘는 모습을 보여 준다. "나누는 기준이 바뀌면 칸의 모습은 바뀌지만 단추가 늘거나 줄지는 않아요."',
        student: '같은 단추 8개를 색깔로 나눌 때와 모양으로 나눌 때 어느 칸에 몇 개씩 들어갈지 짝과 예상해 봐요.',
        demo: { tool: 'sortboard', options: { cards: ['r2c', 'b2s', 'y2t', 'r4s'] }, sequence: [{ by: '색' }, { by: '모양' }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          ACT('a1', '활동 1. 같은 단추를 세 가지 기준으로 나누고 세기', 14, 'sortboard',
            '"같은 단추를 이번에는 다른 기준으로 나누어 볼게요. 칸마다 몇 개일까요?" 칸의 수를 센 뒤 모두 더해 단추 수와 같은지 확인하게 한다. 기준을 바꾸면 카드가 처음으로 돌아오는 것을 보고 "단추가 사라졌어요"라고 말하는 학생에게는 카드 칸의 단추를 세어 보게 한다. 칸 이름과 센 수를 한 문장으로 말하게 한다.',
            '기준을 고르고 단추 카드를 칸에 나눈 뒤, 칸마다 몇 개인지 수를 넣어요.', LV_SB, [
              X({ prompt: '단추를 모양으로 나누고, 칸마다 몇 개인지 수를 넣어 보세요.', toolOptions: { cards: SET8 }, reveal: 'after-check', target: { by: '모양', counts: true },
                predict: { q: '모양으로 나누어도 단추는 모두 8개일까요?', options: ['네, 8개예요', '아니요, 달라져요'], answer: 0 }, conclude: '모양으로 나누어도 단추는 모두 8개 그대로예요.', difficulty: 0.15 }),
              X({ prompt: '같은 단추를 이번에는 색깔에 따라 나누고, 칸마다 몇 개인지 수를 넣어 보세요.', toolOptions: { cards: SET8 }, reveal: 'after-check', target: { by: '색', counts: true }, difficulty: 0.2, conclude: '색깔로 나누면 칸이 달라져도 단추 수는 그대로예요.' }),
              X({ prompt: '단추를 구멍 수에 따라 나누고, 각 칸의 단추 수를 넣어 보세요.', toolOptions: { cards: SET8 }, reveal: 'after-check', target: { by: '구멍', counts: true }, difficulty: 0.2 }),
            ]),
          ACT('a2', '활동 2. 기준을 바꾸어도 같은 것 찾기', 13, 'mindmap',
            '"색깔로 나눈 칸의 수를 모두 더하면 몇 개일까요? 모양으로 나눈 칸을 모두 더하면요?" 두 합이 같은 이유를 말하게 한다. "기준이 달라서 전체도 달라요"를 고르는 학생에게는 단추를 한 개도 버리지 않았다는 점을 짚는다. 마지막 문항에서는 물에 사는 카드가 몇 장인지 직접 읽어 맞는지 확인하게 한다.',
            '나눈 결과를 읽고 맞게 말한 문장만 골라요.', LV_CARD, [
              pickQ('단추 8개를 색깔로 나누면 빨강 3개, 파랑 3개, 노랑 2개예요. 모양으로 나누면 동그라미 3개, 네모 2개, 세모 3개예요. 맞게 말한 문장을 골라요.', '단추 8개', '맞게 말한 문장', ['색깔로 나눈 단추를 모두 세면 8개예요', '모양으로 나눈 단추를 모두 세면 8개예요', '기준이 달라도 단추는 8개 그대로예요'], ['모양으로 나누면 단추가 더 늘어요', '기준을 바꾸면 단추 수가 달라져요'], { difficulty: 0.2 }),
              pickQ('카드 9장을 크기로 나누면 큰 카드 4장, 작은 카드 5장이에요. 색으로 나누면 파랑 6장, 노랑 3장이에요. 맞게 말한 문장을 골라요.', '카드 9장', '맞게 말한 문장', ['크기로 나누어 세면 모두 9장이에요', '색으로 나누어 세면 모두 9장이에요', '같은 카드는 기준이 달라도 9장이에요'], ['색으로 나누면 카드가 3장 줄어요', '크기로 나눈 것이 색으로 나눈 것보다 더 많아요'], { difficulty: 0.25 }),
              pickQ('동물 카드 10장을 다리 수로 나누면 2개 4장, 4개 6장이에요. 사는 곳으로 나누면 땅 7장, 물 3장이에요. 맞게 말한 문장을 골라요.', '동물 카드 10장', '맞게 말한 문장', ['다리 수로 나누어 세면 모두 10장이에요', '사는 곳으로 나누어 세면 모두 10장이에요', '기준을 바꾸어도 동물 카드는 10장이에요'], ['사는 곳으로 나누면 카드가 3장 더 많아져요', '땅에 사는 카드는 4장이에요'], { difficulty: 0.25 }),
            ]),
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"기준을 바꾸면 무엇이 바뀌고, 무엇은 그대로였나요?" 칸의 모습은 바뀌고 전체 수는 그대로라는 말을 하게 한다. 출구 2번에서 전체가 늘거나 줄었다고 고른 학생은 다음 시간 도입에서 단추를 직접 옮겨 세어 보게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'sortboard', options: { cards: ['b2c', 'y4s', 'r2t', 'b4t', 'y2c', 'r4c', 'b2s'], askCount: true }, state: {}, prompt: '단추를 색깔로 나누고, 칸마다 몇 개인지 수를 넣으세요.', target: { by: '색', counts: true }, difficulty: 0.2 },
          { type: 'choice', prompt: '단추 7개를 색깔로 나누었다가 모양으로 다시 나누었어요. 모양 칸의 단추를 모두 세면 몇 개일까요?', options: ['7개보다 적어요', '7개예요', '7개보다 많아요'], answer: 1, difficulty: 0.15, explain: '단추를 더하거나 빼지 않았으니 기준을 바꾸어도 모두 7개예요.' },
          { type: 'choice', prompt: '같은 자료를 다른 기준으로 나누면 달라지는 것은 무엇일까요?', options: ['칸에 들어가는 묶음의 모양', '자료의 전체 수', '자료의 이름'], answer: 0, difficulty: 0.15, explain: '기준이 달라지면 묶음은 달라지지만 전체 수는 그대로예요.' },
          mood,
        ],
      },
    ],
    worksheet: {
      title: '같은 자료, 다른 기준',
      items: [
        { type: 'figure', wide: true, prompt: '단추를 색깔로 나누었어요. 칸 위 (    )에는 칸 이름을, 아래 ‘기준: (    )’에는 무엇으로 나누었는지 쓰세요.', tool: 'sortboard', figures: [{ options: { by: '색', cards: SET8 }, state: { by: '색', sorted: true }, caption: '기준: (          )' }], answer: '색깔 (빨강 / 파랑 / 노랑)' },
        { type: 'table', prompt: '같은 단추 8개를 두 가지 기준으로 나눈 결과예요. 빈칸에 알맞은 수를 쓰세요.', columns: ['색깔로 나누기', '빨강', '파랑', '노랑', '모두'], cells: [['개수', '3', '3', '2', ''], ['모양으로 나누기', '동그라미 3', '네모 2', '세모 3', '']], answer: '8, 8' },
        { type: 'choice', prompt: '기준을 바꾸어도 그대로인 것에 ○ 하세요.', options: ['단추의 전체 수', '칸마다 들어가는 수'], answer: '단추의 전체 수' },
        { type: 'short', prompt: '같은 카드를 두 가지 기준으로 나누면 무엇이 달라지고 무엇이 같은지 써 보세요.', answer: '예) 칸에 들어가는 수는 달라지지만 전체 카드 수는 같아요.' },
      ],
      easy: {
        note: '기준이 바뀌면 칸의 모습이 바뀌어도 단추를 더하거나 빼지 않았으니 전체 수는 같아요.',
        items: [
          { type: 'table', prompt: '단추 6개를 색깔로 나누어 센 결과예요. 모두 몇 개인지 쓰세요.', columns: ['빨강', '파랑', '노랑', '모두'], cells: [['2', '3', '1', '']], answer: '6' },
          { type: 'choice', prompt: '같은 단추 6개를 모양으로 나누면 모두 몇 개일까요?', options: ['6개', '5개', '7개'], answer: '6개' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '기준을 바꾸어도 단추의 ______ 수는 같아요.', answer: '전체' },
        ],
      },
    },
    differentiation: {
      easy: '단추가 6개로 줄고, 칸 이름 옆에 지금 들어간 개수가 보여요. 맞지 않는 칸에 넣으면 까닭을 말하고 돌려보내요.',
      base: '단추 8개를 스스로 나누고 칸마다 세어 확인을 눌러요.',
      challenge: '단추가 3개 더 늘어난 판에서 세 가지 기준으로 나누고 세어 보아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 기준을 바꾸면 전체 수도 달라진다고 생각한다 → 카드 칸으로 돌아온 단추를 모두 세게 한다. ② 칸마다 센 수를 말할 때 칸 이름을 빼먹는다 → "동그라미는 3개예요"처럼 말하게 한다. ③ 칸의 수를 더하지 않고 전체를 어림한다 → 칸마다 센 수를 손가락으로 하나씩 더하게 한다. 기존 3차시에서 한 색깔·구멍 나누기를 다른 단추와 새 질문으로 이어 간다.',
  }));

  // ───────────────────────────── 8차시 (extend · 두 가지 기준) ─────────────────────────────
  lessons.push(Object.assign(head(8), {
    title: '두 가지 기준을 함께 써서 칸에 나누기',
    objective: '색과 모양, 사는 곳과 다리 수처럼 두 가지 기준을 함께 읽고 모두 맞는 칸에 카드를 나눌 수 있다.',
    illustration: { prompt: ILL('a paper grid with four boxes sorted by red and blue color and round or square shape, a bear placing a red ball in the red round box while a rabbit holds a blue book, no readable letters'), scene: scene('두 기준을 함께 써요') },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"빨간 공과 파란 공이 있어요. 그런데 빨간 상자도 있어요. ‘빨간색’으로만 나누면 공과 상자가 한 칸에 섞여요. 어떻게 나누면 좋을까요?" 몇 명의 대답을 듣고 시연 단추로 카드가 색과 모양 두 기준으로 나뉘는 모습을 보여 준다. "두 가지를 함께 보면 칸이 더 잘게 나뉘어요."',
        student: '내 필통의 물건을 색깔과 모양을 함께 보아 나누면 칸이 몇 개 생길지 짝과 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '빨간 것과 파란 것', slots: ['빨간 둥근 것', '파란 네모난 것'], cards: ['빨간 공', '파란 책'], shuffle: false }, sequence: [{ sort: { '빨간 둥근 것': ['빨간 공'], '파란 네모난 것': ['파란 책'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          ACT('a1', '활동 1. 두 기준에 모두 맞는 칸 찾기', 14, 'mindmap',
            '"칸 이름에 기준이 두 개 들어 있어요. 카드가 두 가지에 모두 맞나요?" 카드를 읽고 색을 먼저, 모양을 그다음에 확인하게 한다. 한 가지만 맞는 카드를 넣는 학생에게는 칸 이름의 나머지 한 가지를 짚어 준다. 한 칸에 카드가 하나만 들어가도 괜찮고 빈 칸이 생겨도 이상하지 않다고 알려 준다.',
            '칸 이름에 있는 두 가지 기준에 모두 맞는 칸에 카드를 나누어요.', LV_CARD, [
              sortQ('카드를 색깔과 모양에 모두 맞는 칸에 나누어 보세요.', '색깔과 모양', { '빨간 둥근 것': ['빨간 공', '빨간 접시'], '빨간 네모난 것': ['빨간 상자'], '파란 둥근 것': ['파란 풍선', '파란 시계'], '파란 네모난 것': ['파란 책'] }, [], { difficulty: 0.2 }),
              sortQ('동물 카드를 사는 곳과 다리 수에 모두 맞는 칸에 나누어 보세요.', '사는 곳과 다리 수', { '땅에 살고 다리 2개': ['닭', '타조'], '땅에 살고 다리 4개': ['토끼', '고양이'], '물에 살고 다리 없음': ['금붕어', '상어'] }, [], { difficulty: 0.2 }),
              sortQ('옷 카드를 색깔과 단추에 모두 맞는 칸에 나누어 보세요.', '색깔과 단추', { '단추 있고 파란색': ['단추 달린 파란 셔츠', '단추 달린 파란 코트'], '단추 없고 파란색': ['단추 없는 파란 바지'], '단추 있고 빨간색': ['단추 달린 빨간 조끼'], '단추 없고 빨간색': ['단추 없는 빨간 모자'] }, [], { difficulty: 0.25 }),
            ]),
          ACT('a2', '활동 2. 두 조건에 모두 맞는 카드만 고르기', 13, 'mindmap',
            '"두 조건을 모두 지켜야 해요. 하나만 맞으면 들어갈 수 있을까요?" 조건을 하나씩 짚어 카드마다 두 번 확인하게 한다. 빨간 상자를 "빨간색이면서 동그란 것"에 담는 학생에게는 "상자는 동그란가요?"라고 되묻는다. 남는 카드는 한 가지만 맞아서 빠졌다는 말을 해 보게 한다.',
            '두 조건을 모두 만족하는 카드만 골라 바구니에 담아요.', LV_CARD, [
              pickQ('‘빨간색이면서 동그란 것’을 모두 골라 보세요.', '두 조건 찾기', '두 조건에 모두 맞아요', ['빨간 공', '빨간 접시'], ['빨간 상자', '파란 공', '파란 시계'], { difficulty: 0.2 }),
              pickQ('‘다리가 네 개이면서 털이 있는 동물’을 모두 골라 보세요.', '두 조건 찾기', '두 조건에 모두 맞아요', ['고양이', '토끼'], ['거북', '닭', '금붕어'], { difficulty: 0.2 }),
              pickQ('‘뚜껑이 있으면서 둥근 통’을 모두 골라 보세요.', '두 조건 찾기', '두 조건에 모두 맞아요', ['뚜껑이 있는 둥근 통', '뚜껑이 있는 둥근 병'], ['뚜껑이 없는 둥근 통', '뚜껑이 있는 네모난 통', '뚜껑이 없는 네모난 통'], { difficulty: 0.25 }),
            ]),
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"기준이 두 개일 때는 카드가 어떻게 들어가야 하나요?" 두 기준을 모두 만족하는 칸이라는 말을 이끌어 낸다. 출구 1번에서 한 가지만 맞는 보기를 고른 학생은 다음 시간(결과를 표로 나타내기)에서 칸 이름을 두 번 읽게 한다.',
        exitTicket: [
          { type: 'choice', prompt: '‘파란색이면서 네모난 것’에 알맞은 카드는 무엇인가요?', options: ['파란 책', '파란 공', '빨간 책'], answer: 0, difficulty: 0.15, explain: '파란 책은 색깔도 파랗고 모양도 네모나서 두 조건에 모두 맞아요.' },
          { type: 'tool', tool: 'mindmap', options: { topic: '색깔과 모양', slots: ['빨간 둥근 것', '파란 둥근 것', '빨간 네모난 것'], cards: ['빨간 시계', '파란 공', '빨간 책', '파란 접시'] }, state: { at: {} }, prompt: '카드를 두 기준에 모두 맞는 칸에 나누어 보세요.', target: { sort: { '빨간 둥근 것': ['빨간 시계'], '파란 둥근 것': ['파란 공', '파란 접시'], '빨간 네모난 것': ['빨간 책'] } }, difficulty: 0.2 },
          { type: 'choice', prompt: '두 가지 기준으로 나눌 때 카드는 몇 가지 조건에 맞아야 칸에 들어갈 수 있나요?', options: ['한 가지', '두 가지 모두', '마음대로'], answer: 1, difficulty: 0.12, explain: '칸 이름에 두 가지 기준이 있으면 둘 다 맞아야 들어갈 수 있어요.' },
          mood,
        ],
      },
    ],
    worksheet: {
      title: '두 가지 기준으로 나누기',
      items: [
        { type: 'table', prompt: '카드를 알맞은 칸에 쓰세요. 색깔과 모양이 모두 맞아야 해요.', columns: ['빨간 둥근 것', '파란 네모난 것'], cells: [['빨간 공 · 파란 책 · 빨간 접시 · 파란 상자', '']], answer: '빨간 둥근 것: 빨간 공·빨간 접시, 파란 네모난 것: 파란 책·파란 상자' },
        { type: 'choice', prompt: '‘다리가 네 개이면서 털이 있는 동물’에 ○ 하세요.', options: ['고양이', '닭', '거북'], answer: '고양이' },
        { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '기준이 두 개일 때는 두 가지에 ______ 맞는 칸에 넣어요.', answer: '모두' },
        { type: 'short', prompt: '우리 교실 물건을 색깔과 모양의 두 기준으로 나눈다면 어떤 칸이 생길지 두 개 쓰세요.', answer: '예) 빨간 둥근 것, 파란 네모난 것' },
      ],
      easy: {
        note: '칸 이름에 기준이 두 개 있으면 두 가지를 모두 확인해요.',
        items: [
          { type: 'choice', prompt: '‘빨간색이면서 동그란 것’에 ○ 하세요.', options: ['빨간 공', '빨간 상자'], answer: '빨간 공' },
          { type: 'table', prompt: '카드를 알맞은 칸에 쓰세요.', columns: ['빨간 둥근 것', '파란 네모난 것'], cells: [['빨간 공 · 파란 책', '']], answer: '빨간 둥근 것: 빨간 공, 파란 네모난 것: 파란 책' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '두 조건에 ______ 맞아야 해요.', answer: '모두' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 놓은 카드에 초록 테두리가 생기고, 한 가지만 맞는 칸에 넣으면 어느 조건이 맞지 않는지 알려 줘요.',
      base: '카드를 모두 놓은 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '칸이 네 개로 늘고, 조건이 한 가지만 맞는 카드가 함정으로 섞여 나와요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 칸 이름의 한 가지 기준만 보고 카드를 넣는다 → 색 먼저, 모양 다음으로 두 번 읽게 한다. ② 한 칸에 카드가 하나뿐이면 틀렸다고 생각한다 → 칸마다 개수가 달라도 된다고 알려 준다. ③ 두 조건 가운데 하나만 맞는 카드를 고른다 → 조건마다 손가락으로 표시하며 확인한다. 기존 3차시에서 한 기준으로 나눈 경험을 두 기준으로 넓히는 차시다.',
  }));

  // ───────────────────────────── 9차시 (core · 결과를 표로) ─────────────────────────────
  const wfig = (prompt, title, data, unit, caption, answer, o) => ({ type: 'figure', wide: true, prompt, tool: 'chart', figures: [{ options: G(title, data, unit, o || { mode: 'read' }), caption }], answer });
  lessons.push(Object.assign(head(9), {
    title: '나눈 결과를 세어 표로 나타내고 무리에 이름 붙이기',
    objective: '분류하여 센 결과를 표의 칸마다 이름과 수로 써서 나타내고, 각 무리에 무엇으로 나누었는지 알 수 있는 이름을 붙일 수 있다.',
    illustration: { prompt: ILL('a paper table drawn on a large board with three columns of colored paper circles being counted by a bear and written as numbers by a rabbit with a pencil, no readable letters'), scene: scene('센 결과를 표에 써요') },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"단추를 세었더니 빨강 4, 파랑 6, 노랑 3이었어요. 수만 쓰면 어느 수가 무엇인지 알 수 있을까요?" 이름 없이 쓴 숫자 줄을 칠판에 적어 보이고, 시연 단추로 표의 빈칸이 채워지는 모습을 보여 준다. "무리의 이름과 센 수를 함께 쓰면 누가 봐도 알 수 있어요."',
        student: '어제 나눈 물건들의 개수를 공책에 어떻게 적었는지 짝에게 보여 주고, 이름이 빠진 곳이 있는지 살펴봐요.',
        demo: { tool: 'chart', options: G('단추 색깔', [['빨강', 4], ['파랑', 6], ['노랑', 3]], '개', { mode: 'read', tableBlanks: [0, 1, 2] }), sequence: [{ table: true }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          ACT('a1', '활동 1. ○를 세어 표에 쓰기', 14, 'chart',
            '"○가 몇 개인지 줄마다 하나씩 짚으며 세어 보세요." 센 수를 표의 알맞은 칸에 쓰고, 무리 이름과 짝이 맞는지 확인하게 한다. 한 줄에서 ○를 건너뛰는 학생에게는 센 ○를 연필로 지워 가며 세게 한다. 표 칸에 ○ 모양을 그리는 학생에게는 "표에는 수를 써요"라고 짚는다.',
            '나눈 결과를 ○로 나타냈어요. ○를 세어 표의 빈칸에 수를 써요.', LV_GRAPH, [
              rdTable('단추를 색깔로 나누어 ○로 나타냈어요. ○를 세어 표의 빈칸에 쓰세요.', '색깔별 단추', [['빨강', 4], ['파랑', 6], ['노랑', 3]], '개', { difficulty: 0.12 }),
              rdTable('학용품을 종류로 나누어 ○로 나타냈어요. ○를 세어 표의 빈칸에 쓰세요.', '종류별 학용품', [['연필', 5], ['지우개', 2], ['가위', 3], ['풀', 4]], '개', { difficulty: 0.2 }),
              rdTable('교실 책을 종류로 나누어 ○로 나타냈어요. ○를 세어 표의 빈칸에 쓰세요.', '종류별 책', [['동화책', 7], ['그림책', 3], ['만화책', 5]], '권', { difficulty: 0.2, predict: { q: '가장 긴 ○ 줄은 어느 것일까요?', options: ['동화책', '그림책', '만화책'], answer: 0 }, conclude: '동화책이 7권으로 가장 많아요.' }),
            ]),
          ACT('a2', '활동 2. 무리에 알맞은 이름 붙이기', 13, 'mindmap',
            '"이 무리에는 무엇이 들어 있나요? 한마디로 어떻게 부를까요?" 무리 안의 물건이 모두 지니는 점을 말하게 한 뒤 이름 카드를 고르게 한다. "맛있는 것"처럼 느낌 말을 이름으로 고르는 학생에게는 누가 봐도 같은 이름인지 되묻는다. 이름이 있으면 표에 쓸 때 어떤 기준으로 나눈 결과인지 알 수 있음을 짚는다.',
            '무리 안에 든 물건을 보고, 무리에 알맞은 이름 카드를 이어요. 남는 카드는 이어지지 않아요.', LV_CARD, [
              matchQ('무리에 알맞은 이름을 이어 보세요.', '무리 이름 붙이기', [['사과 · 딸기 · 토마토', '빨간 것'], ['바나나 · 레몬 · 참외', '노란 것'], ['포도 · 가지 · 자두', '보라색인 것']], ['맛있는 것'], { difficulty: 0.15 }),
              matchQ('무리에 알맞은 이름을 이어 보세요.', '무리 이름 붙이기', [['연필 · 볼펜 · 사인펜', '쓰는 것'], ['지우개 · 수정테이프', '지우거나 고치는 것'], ['가위 · 풀 · 테이프', '자르고 붙이는 것']], ['좋아하는 것'], { difficulty: 0.2 }),
              matchQ('무리에 알맞은 이름을 이어 보세요.', '무리 이름 붙이기', [['참새 · 비둘기 · 독수리', '날개가 있는 동물'], ['금붕어 · 고등어 · 상어', '물에 사는 동물'], ['개 · 고양이 · 토끼', '다리가 네 개인 동물']], ['귀여운 동물'], { difficulty: 0.25 }),
            ]),
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"표를 쓸 때 꼭 함께 쓸 것은 무엇이었나요?" 무리 이름과 센 수를 말하게 한다. 출구 2번에서 이름 없이 수만 쓴 보기를 고른 학생은 다음 시간에 표의 칸을 짚으며 이름부터 읽게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'chart', options: G('종류별 구슬', [['빨강', 2], ['파랑', 5], ['초록', 3]], '개', { mode: 'read', tableBlanks: [0, 1, 2] }), state: {}, prompt: '구슬을 센 그래프예요. ○를 세어 표의 빈칸에 쓰세요.', target: { table: true }, difficulty: 0.15 },
          { type: 'choice', prompt: '나눈 결과를 표에 바르게 쓴 것은 무엇인가요?', options: ['빨강 4개, 파랑 6개', '4개, 6개', '많아요, 적어요'], answer: 0, difficulty: 0.12, explain: '무리의 이름과 센 수를 함께 써야 누가 봐도 알 수 있어요.' },
          { type: 'choice', prompt: '무리에 ‘날개가 있는 동물’이라는 이름을 붙이면 좋은 점은 무엇인가요?', options: ['어떤 기준으로 나누었는지 알 수 있어요', '동물 수가 줄어들어요', '카드가 더 예뻐져요'], answer: 0, difficulty: 0.15, explain: '이름을 붙이면 나눈 기준이 보여서 결과를 읽는 사람이 이해할 수 있어요.' },
          mood,
        ],
      },
    ],
    worksheet: {
      title: '결과를 표로 나타내기',
      items: [
        wfig('○를 세어 아래 표의 빈칸에 쓰세요.', '색깔별 단추', [['빨강', 3], ['파랑', 5], ['노랑', 2]], '개', '', '3, 5, 2'),
        { type: 'table', prompt: '위 그래프를 보고 표를 완성하세요.', columns: ['색깔', '빨강', '파랑', '노랑', '모두'], cells: [['개수', '', '', '', '']], answer: '3, 5, 2, 10' },
        { type: 'choice', prompt: '무리에 알맞은 이름에 ○ 하세요. 연필·볼펜·사인펜', options: ['쓰는 것', '맛있는 것', '무서운 것'], answer: '쓰는 것' },
        { type: 'short', prompt: '내 필통 속 물건을 나누어 센 결과를 표 모양으로 한 줄씩 써 보세요.', answer: '예) 쓰는 것 4개, 지우는 것 1개' },
      ],
      easy: {
        note: '표에는 무리의 이름과 센 수를 함께 써요.',
        items: [
          wfig('○를 세어 쓰세요.', '모양별 카드', [['동그라미', 2], ['네모', 4]], '개', '', '2, 4'),
          { type: 'table', prompt: '표를 완성하세요.', columns: ['모양', '동그라미', '네모'], cells: [['개수', '', '']], answer: '2, 4' },
          { type: 'choice', prompt: '무리에 알맞은 이름에 ○ 하세요. 사과·딸기', options: ['빨간 것', '큰 것'], answer: '빨간 것' },
        ],
      },
    },
    differentiation: {
      easy: '그림 옆에 수가 보이고, 표의 빈칸은 두세 개만 남아요.',
      base: '○를 직접 세어 표를 모두 채우고 이름 카드를 이어요.',
      challenge: '무리가 네 개로 늘고, 이름 카드에 느낌 말이 함정으로 섞여 나와요.',
    },
    teacherNotes: '자주 보이는 어려움: ① ○를 건너뛰거나 두 번 센다 → 센 ○를 연필로 지워 가며 센다. ② 이름 없이 수만 쓴다 → "무엇의 수인가요?"를 물어 무리 이름을 함께 쓰게 한다. ③ 느낌 말로 이름을 붙인다 → 누가 봐도 같은 이름인지 6차시의 기준을 다시 떠올리게 한다. 모든 칸의 수를 더해 전체와 맞는지는 11차시에서 다시 확인한다.',
  }));

  // ───────────────────────────── 10차시 (practice · 결과를 그림으로) ─────────────────────────────
  lessons.push(Object.assign(head(10), {
    title: '표를 보고 ○ 그림으로 나타내고 칸에 나누어 놓기',
    objective: '표에 쓴 센 수를 ○ 그림으로 나타내고, 도형 카드를 변의 수나 모양에 따라 칸에 나누어 놓아 결과를 자리로 보여 줄 수 있다.',
    illustration: { prompt: ILL('a rabbit drawing rows of paper circles on a board to match numbers written in a table, a bear placing triangle and square cards into separate boxes, no readable letters'), scene: scene('결과를 그림으로 나타내요') },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"표에는 수가 있어요. 그림으로 나타내면 어떤 점이 좋을까요?" 칠판의 표 옆에 ○ 줄을 그려 가장 긴 줄이 한눈에 보인다는 점을 보여 준다. 시연 단추로 ○가 한 줄씩 채워지는 모습을 보여 주고 "표의 수만큼 ○를 그려요. 한 칸에 하나씩이에요"라고 말한다.',
        student: '우리 모둠에서 좋아하는 놀이를 나누어 센 표가 있다면 그림으로 어떻게 그릴지 짝과 말해 봐요.',
        demo: { tool: 'chart', options: G('좋아하는 놀이', [['술래잡기', 3], ['공놀이', 2]], '명', { icon: 'person' }), sequence: [{ build: true }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          ACT('a1', '활동 1. 표의 수만큼 ○ 그림 그리기', 14, 'chart',
            '"표에 3이라고 쓰여 있으면 ○를 몇 개 그릴까요?" 칸마다 표의 수와 그린 ○의 수를 손가락으로 견주게 한다. 한 줄만 길게 그리고 나머지를 빼먹는 학생에게는 표의 줄을 위에서 아래로 하나씩 짚게 한다. 그림이 다 그려졌으면 가장 긴 줄과 가장 짧은 줄을 말해 보게 한다.',
            '표의 수만큼 ○ 그림을 그려요. 줄마다 한 칸에 하나씩 놓아요.', LV_NONE, [
              drawQ('표를 보고 ○ 그림으로 나타내 보세요.', '좋아하는 색', [['빨강', 3], ['파랑', 5], ['노랑', 2]], '명', 'person', { difficulty: 0.12 }),
              drawQ('반려동물을 나누어 센 표를 ○ 그림으로 나타내 보세요.', '반려동물', [['강아지', 4], ['고양이', 3], ['물고기', 6]], '마리', 'heart', { difficulty: 0.15 }),
              drawQ('도형 카드를 나누어 센 표를 ○ 그림으로 나타내 보세요.', '도형 카드', [['삼각형', 2], ['사각형', 5], ['원', 4]], '장', 'square', { difficulty: 0.2 }),
              drawQ('더 해 보기: 학용품을 종류로 나눈 표를 그림으로 나타내 보세요.', '학용품', [['연필', 6], ['지우개', 1], ['풀', 4], ['가위', 2]], '개', 'star', { extra: true, difficulty: 0.25 }),
            ]),
          ACT('a2', '활동 2. 도형 카드를 칸에 나누어 놓기', 13, 'shapes',
            '"이 카드는 변이 몇 개일까요? 손가락으로 변을 따라 세어 보세요." 변을 하나씩 세게 한 뒤 칸에 넣게 한다. 육각형을 변이 네 개인 칸에 넣는 학생에게는 변을 다시 세어 보게 하고, 어느 칸에도 안 맞는 카드는 마지막 칸에 놓는다는 점을 짚는다. 칸에 놓인 모양을 한눈에 말해 보게 한다.',
            '도형 카드를 기준에 맞게 칸에 나누어 놓아요. 칸마다 같은 카드가 모이게 해요.', LV_NONE, [
              shapeBin('도형 카드를 변의 수에 따라 나누어 놓아 보세요.', [['a', 'triangle'], ['b', 'square'], ['c', 'triangle'], ['d', 'circle'], ['e', 'square'], ['f', 'hexagon']], ['변이 3개', '변이 4개', '그 밖의 도형'], [0, 1, 0, 2, 1, 2], { difficulty: 0.15 }),
              shapeBin('도형 카드를 곧은 변과 둥근 부분으로 나누어 놓아 보세요.', [['g', 'rectangle'], ['h', 'circle'], ['i', 'oval'], ['j', 'pentagon'], ['k', 'square'], ['l', 'circle']], ['곧은 변만 있어요', '둥근 부분이 있어요'], [0, 1, 1, 0, 0, 1], { difficulty: 0.2 }),
              shapeBin('도형 카드를 모양에 따라 삼각형·사각형·원으로 나누어 놓아 보세요.', [['m', 'circle'], ['n', 'triangle'], ['o', 'rhombus'], ['p', 'trapezoid'], ['q', 'circle'], ['r', 'triangle']], ['삼각형', '사각형', '원'], [2, 0, 1, 1, 2, 0], { difficulty: 0.25 }),
            ]),
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"표와 ○ 그림을 비교하면 무엇이 같고 무엇이 다른가요?" 같은 수를 다르게 나타냈다는 말을 이끌어 낸다. 출구 1번에서 ○ 수가 표의 수와 다른 학생은 다음 시간에 줄마다 표의 수와 ○를 손가락으로 짝지어 보게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'chart', options: G('운동장 놀이', [['줄넘기', 4], ['공놀이', 2], ['달리기', 5]], '명', { icon: 'person' }), state: {}, prompt: '표의 수만큼 ○ 그림으로 나타내 보세요.', target: { build: true }, difficulty: 0.15 },
          { type: 'choice', prompt: '표에 ‘공놀이 3명’이라고 쓰여 있어요. ○를 몇 개 그려야 할까요?', options: ['3개', '2개', '4개'], answer: 0, difficulty: 0.1, explain: '○ 하나가 한 명이라서 3명은 ○ 3개로 나타내요.' },
          { type: 'choice', prompt: '그림으로 나타내면 좋은 점은 무엇일까요?', options: ['가장 많은 것을 한눈에 볼 수 있어요', '수가 달라져요', '이름을 쓰지 않아도 돼요'], answer: 0, difficulty: 0.15, explain: '○ 줄의 길이를 견주면 가장 많은 무리가 바로 보여요.' },
          mood,
        ],
      },
    ],
    worksheet: {
      title: '표를 그림으로 나타내기',
      items: [
        wfig('표를 보고 ○ 그림으로 나타내 보세요. 한 칸에 ○ 하나를 그려요.', '좋아하는 간식', [['빵', 3], ['과일', 5], ['우유', 2]], '명', '', '빵 ○3, 과일 ○5, 우유 ○2', {}),
        { type: 'table', prompt: '위 그림을 보고 가장 많은 간식과 가장 적은 간식을 쓰세요.', columns: ['가장 많은 간식', '가장 적은 간식'], rows: 1, answer: '과일, 우유' },
        { type: 'choice', prompt: '표에 ‘사과 4개’라고 쓰여 있어요. ○를 몇 개 그려야 할까요?', options: ['3개', '4개', '5개'], answer: '4개' },
        { type: 'short', prompt: '표와 그림 중 더 마음에 드는 것은 무엇이고, 그 까닭은 무엇인지 써 보세요.', answer: '예) 그림이요. 가장 많은 것이 바로 보여서요.' },
      ],
      easy: {
        note: '표의 수만큼 ○를 그려요. ○ 하나가 하나를 나타내요.',
        items: [
          wfig('표를 보고 ○ 그림으로 나타내 보세요.', '좋아하는 과일', [['사과', 2], ['귤', 3]], '명', '', '사과 ○2, 귤 ○3', {}),
          { type: 'choice', prompt: '○ 4개로 나타내는 수는 몇일까요?', options: ['3', '4'], answer: '4' },
          { type: 'short', prompt: '○ 그림에서 가장 긴 줄은 무엇을 나타내는지 쓰세요.', answer: '가장 많은 것' },
        ],
      },
    },
    differentiation: {
      easy: '표의 수가 그림 옆에 보이고, 무리가 두세 개로 줄어요.',
      base: '표의 수를 보고 ○를 직접 그려 확인을 눌러요.',
      challenge: '무리가 네 개로 늘고, 변의 수가 많은 도형이 섞인 나누기 문항을 풀어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 표의 수보다 ○를 하나 더 그리거나 덜 그린다 → 표의 수와 ○를 손가락으로 하나씩 짝짓는다. ② 줄을 하나 빼먹는다 → 표의 줄을 위에서 아래로 짚으며 그린다. ③ 칸마다 다른 모양의 ○를 쓴다 → 한 줄에는 같은 그림을 쓰도록 한다. 도형 나누기에서는 육각형처럼 낯선 도형이 나오면 변을 세어 칸을 정한다.',
  }));

  // ───────────────────────────── 11차시 (wrap · 이름 붙여 결과 말하기, 단원 정리) ─────────────────────────────
  lessons.push(Object.assign(head(11), {
    title: '이름 붙인 무리와 개수로 결과 말하고 단원 정리하기',
    objective: '나눈 무리의 이름과 센 수로 "쓰는 것은 7개로 가장 많아요"처럼 결과를 말하고, 분류하기 과정을 기준 정하기·나누기·세어 말하기로 정리할 수 있다.',
    illustration: { prompt: ILL('a little squirrel and a rabbit standing before a board with a neat table and a row of colored paper circles, presenting their sorted results to classmates, no readable letters'), scene: scene('결과를 말해요') },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"우리 반 신발을 나누어 세었더니 끈 있는 신발 6, 찍찍이 신발 9, 슬리퍼 3이었어요. 이 결과를 친구에게 어떻게 말할까요?" 무리 이름과 수를 같이 넣은 문장을 두세 개 말하게 하고, 시연 단추로 그래프에서 가장 많은 줄을 짚는 모습을 보여 준다. "이름과 수, 그리고 알게 된 점을 함께 말해요."',
        student: '우리 반에서 나누어 세어 보고 싶은 것을 하나 정해 어떤 기준으로 나눌지 짝에게 말해 봐요.',
        demo: { tool: 'chart', options: G('종류별 신발', [['끈 있는 신발', 6], ['찍찍이 신발', 9], ['슬리퍼', 3]], '켤레', { mode: 'read', question: '가장 많은 무리는?', choices: ['끈 있는 신발', '찍찍이 신발', '슬리퍼'] }), sequence: [{ pick: 1 }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          ACT('a1', '활동 1. 결과를 읽고 말하기', 10, 'chart',
            '"가장 많은 무리는 어느 무리이고 몇 개인가요?" 무리 이름과 수를 함께 말하게 한다. "쓰는 것과 지우는 것은 모두 몇 개예요?"처럼 두 무리를 합하는 문항에서 한 무리만 읽는 학생에게는 두 줄을 함께 짚게 한다. 차이를 구하는 문항에서는 두 줄을 나란히 놓고 남는 ○를 세게 한다.',
            '그래프를 읽고 물음에 답해요. 답은 무리 이름과 수로 말해 봐요.', LV_GRAPH, [
              rdPick('우리 반 신발을 나누어 센 그래프예요. 가장 많은 무리를 골라 보세요.', '종류별 신발', [['끈 있는 신발', 6], ['찍찍이 신발', 9], ['슬리퍼', 3]], '켤레', '가장 많은 무리는 무엇일까요?', ['끈 있는 신발', '찍찍이 신발', '슬리퍼'], 1, { difficulty: 0.12 }),
              rdNum('필통 속 물건을 나누어 센 그래프예요. 쓰는 것과 지우는 것을 합하면 몇 개일까요?', '필통 속 물건', [['쓰는 것', 7], ['지우는 것', 2], ['자르고 붙이는 것', 3]], '개', '쓰는 것과 지우는 것은 모두 몇 개일까요?', 9, { difficulty: 0.2 }),
              rdNum('급식 때 쓰는 수저를 나누어 센 그래프예요. 숟가락은 젓가락보다 몇 개 더 많을까요?', '급식 수저', [['숟가락', 11], ['젓가락', 8]], '개', '숟가락은 젓가락보다 몇 개 더 많을까요?', 3, { difficulty: 0.25 }),
            ]),
          ACT('a2', '활동 2. 분류하기에서 배운 것 정리하기', 10, 'mindmap',
            '"이 말은 기준을 정할 때, 나눌 때, 세어 말할 때 중 언제 할 일일까요?" 이번 단원에서 직접 해 본 활동을 하나씩 떠올리며 카드를 놓게 한다. 세어 말하기 칸에 기준을 고치는 카드를 놓는 학생에게는 "센 뒤에 기준을 바꾸었나요, 나누기 전에 정했나요?"라고 묻는다. 마지막 문항은 바르게 정리한 말만 고르게 한다.',
            '카드에 쓴 말이 기준 정하기·나누기·세어 말하기 중 어느 때 하는 일인지 나누어요.', LV_CARD, [
              sortQ('분류하기에서 배운 말을 알맞은 칸에 나누어 보세요.', '분류하기 정리', { '기준 정하기': ['누가 봐도 같은 기준을 골라요', '기준 이름을 먼저 정해요'], 나누기: ['기준에 맞는 칸에 넣어요', '남는 카드가 없는지 살펴요'], '세어 말하기': ['칸마다 몇 개인지 세어요', '"사각형은 3개예요"처럼 말해요'] }, [], { difficulty: 0.15 }),
              sortQ('이번에는 다른 카드를 나누어 보세요.', '분류하기 정리', { '기준 정하기': ['느낌 말은 눈으로 보이는 말로 고쳐요', '칸 이름에 기준을 써요'], 나누기: ['어느 칸에도 안 맞으면 칸을 만들어요', '두 조건에 모두 맞는 칸에 넣어요'], '세어 말하기': ['모든 칸의 수를 더해 전체와 견주어요', '표나 ○ 그림으로 나타내요'] }, [], { difficulty: 0.2 }),
              pickQ('결과를 바르게 나타낸 말만 골라 보세요.', '결과 나타내기', '바르게 나타낸 말', ['표의 칸마다 무리 이름과 수를 써요', '모든 칸의 수를 더하면 전체와 같아요'], ['무리 이름 없이 수만 써요', '센 수를 더해도 전체와 달라도 괜찮아요'], { difficulty: 0.2 }),
            ]),
          ACT('a3', '활동 3. 우리 반 물건 나누고 말하기', 7, 'mindmap',
            '"기준을 먼저 말하고, 칸마다 센 수를 말해 주세요." 짝에게 이름과 수, 알게 된 점을 한 문장씩 말하게 한다. 수만 말하고 이름을 빼먹는 학생에게는 "무엇이 몇 개예요?"라고 되묻는다. 모두 했으면 "다 했어요"를 누르게 한다.',
            '우리 교실 물건을 기준을 정해 나누고, 센 결과를 짝에게 말해요. 다 했으면 "다 했어요"를 눌러요.', LV_NONE, [
              FREE('모둠 친구들의 필통 속 물건을 기준을 정해 나누고, 칸마다 몇 개인지 세어 표에 써 보세요.'),
              FREE('우리 교실에 있는 물건 열 개를 골라 색깔과 모양 두 가지 기준으로 나누고, 센 결과를 한 문장씩 짝에게 말해 보세요.'),
              FREE('나눈 결과를 ○ 그림으로 그려 보고, 가장 많은 무리와 가장 적은 무리를 말해 보세요.'),
            ]),
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"이번 단원에서 분류하기는 어떤 순서로 했나요?" 기준 정하기, 나누기, 세어 말하기의 순서를 짝에게 말하게 한다. 출구 2번에서 전체 수보다 적은 합을 고른 학생은 다음 단원 도입에서 칸의 수를 손가락으로 더해 보게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'chart', options: G('교실 안 물건', [['둥근 것', 5], ['네모난 것', 8], ['그 밖의 것', 2]], '개', { mode: 'read', question: '가장 적은 무리는 무엇일까요?', choices: ['둥근 것', '네모난 것', '그 밖의 것'] }), state: {}, prompt: '그래프를 보고 가장 적은 무리를 고르세요.', target: { pick: 2 }, difficulty: 0.12 },
          { type: 'choice', prompt: '나눈 결과가 둥근 것 5개, 네모난 것 8개, 그 밖의 것 2개예요. 모두 몇 개일까요?', options: ['13개', '15개', '10개'], answer: 1, difficulty: 0.2, explain: '5와 8과 2를 모두 더하면 15라서 모두 15개예요.' },
          { type: 'choice', prompt: '분류하기를 할 때 가장 먼저 할 일은 무엇일까요?', options: ['나눌 기준을 정해요', '칸마다 센 수를 말해요', '그림으로 나타내요'], answer: 0, difficulty: 0.1, explain: '기준을 먼저 정해야 같은 것끼리 모을 수 있어요.' },
          mood,
        ],
      },
    ],
    worksheet: {
      title: '분류한 결과 말하기',
      items: [
        wfig('그래프를 보고 가장 많은 무리와 가장 적은 무리를 쓰세요.', '종류별 신발', [['끈 있는 신발', 4], ['찍찍이 신발', 6], ['슬리퍼', 2]], '켤레', '가장 많은 무리: ______, 가장 적은 무리: ______', '찍찍이 신발, 슬리퍼'),
        { type: 'table', prompt: '위 그래프의 수를 표에 쓰고 모두 몇 켤레인지 쓰세요.', columns: ['끈 있는 신발', '찍찍이 신발', '슬리퍼', '모두'], cells: [['', '', '', '']], answer: '4, 6, 2, 12' },
        { type: 'blank', prompt: '결과를 한 문장으로 완성하세요.', text: '______ 신발이 ___켤레로 가장 많아요.', answer: '찍찍이, 6' },
        { type: 'short', prompt: '이번 단원에서 알게 된 점을 두 가지 써 보세요.', answer: '예) 기준을 먼저 정해요. 나눈 결과는 이름과 수를 함께 써요.' },
      ],
      easy: {
        note: '무리의 이름과 센 수를 함께 말해요. 가장 많은 것은 ○가 가장 긴 줄이에요.',
        items: [
          wfig('그래프를 보고 가장 많은 무리를 쓰세요.', '종류별 과일', [['사과', 3], ['귤', 5]], '개', '가장 많은 무리: ______', '귤'),
          { type: 'table', prompt: '표를 완성하세요.', columns: ['사과', '귤', '모두'], cells: [['', '', '']], answer: '3, 5, 8' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '______이 가장 많아요.', answer: '귤' },
        ],
      },
    },
    differentiation: {
      easy: '그림 옆에 수가 보이고, 문항이 두 무리로 줄어요. 맞는 칸에 놓은 카드에 초록 테두리가 생겨요.',
      base: '그래프를 스스로 읽고 합과 차이를 구해 말해요.',
      challenge: '수가 10을 넘는 그래프에서 차이를 구하고, 단원 정리 카드를 함정과 함께 나누어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 한 무리만 읽고 합을 구한다 → 두 줄을 모두 짚게 한다. ② 차이를 구할 때 두 수를 더한다 → 두 줄을 나란히 놓고 남는 ○를 센다. ③ 수만 말하고 무리 이름을 빼먹는다 → "무엇이 몇 개예요?"라고 되묻는다. 단원 정리에서는 기존 3차시의 분명한 기준과 이 단원의 빠짐없이 나누기를 함께 떠올리게 한다. 학생 이름은 가명을 쓴다.',
  }));

  PaperLessons.registerUnit({
    id: UID, schema: 'edu-unit.v1', catalogUnit: UNIT,
    grade: 2, subject: '수학', unitTitle: TITLE,
    flow: '이 단원은 정한 기준으로 사물을 나누고 개수를 세어 결과를 말하는 방법을 쌓아 갑니다. 1차시에서는 뒤죽박죽 섞인 학용품을 쓰임새 같은 기준으로 나누고, 2차시에서는 도형 카드를 모양별로 나누어 칸마다 몇 개인지 세어 이름과 수를 함께 말합니다. 3차시(기존 차시)에서 누가 나누어도 같은 분명한 기준을 정해 나누고 세어 본 뒤, 4차시에서는 센 결과를 보고 가장 많은 것과 몇 개 더 많은지, 전체가 몇 개인지를 말합니다. 5~8차시는 빠짐없이 나누는 기준, 애매한 기준 고치기, 같은 자료를 다른 기준으로 나누어도 전체 수는 같음, 두 가지 기준을 함께 쓰는 나누기로 넓힙니다. 9~11차시는 나눈 결과를 표와 그림으로 나타내고 무리마다 이름을 붙여 결과를 말하며 단원을 정리합니다.',
    refs: { 3: 'g2-math-sort' },
    lessons,
  });
})();
