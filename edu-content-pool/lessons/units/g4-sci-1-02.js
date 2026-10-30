/* 4학년 1학기 과학 2. 물의 상태 변화 — 10차시
 * 물의 세 가지 상태(1~4) → 얼고·녹고·증발하고·끓고·응결하는 변화(5~7) → 상태 변화로 물을 얻는 장치(8~10).
 * 불·뜨거운 물·유리 도구가 드는 실험은 교사 시연이나 안전한 대체 도구로 하고, 디지털 입자 상자·자·카드로 앞뒤에서 받친다.
 */
(function () {
  const ID = 'g4-sci-1-02';
  const U = { grade: 4, subject: '과학', unitTitle: '2. 물의 상태 변화' };
  const CU = 'g4-과학-1학기-2';
  const P = (what) => `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`;
  const MOOD = { type: 'mood', prompt: '오늘 공부는 어땠나요?' };
  const SAFE = ['뜨거운 물과 김은 데일 수 있어요. 끓이는 것은 선생님이 보여 주고, 학생은 가까이 가지 않아요.', '얼음과 차가운 물을 만진 뒤에는 손을 닦아요. 유리 도구는 쓰지 않고 플라스틱 투명 컵을 써요.'];
  const CARDS_LV = { easy: { live: true, instant: true }, base: {}, challenge: {} };
  const c = (id, text, why) => (why ? { id, text, why } : { id, text });
  const L = (n, o) => Object.assign({
    id: `${ID}-${String(n).padStart(2, '0')}`, schema: 'edu-lesson.v1', catalog: { unit: CU, lesson: n },
    minutes: 40, formats: ['chromebook', 'projector', 'print'],
  }, U, {
    title: o.title, objective: o.objective, standards: o.standards, safety: o.safety || SAFE,
    illustration: { prompt: P(o.pic), scene: { viewBox: [480, 270], layers: o.layers } },
    stages: [
      { id: 'intro', title: '도입', minutes: 7, teacher: o.intro[0], student: o.intro[1] },
      { id: 'main', title: '전개', minutes: 25, activities: o.acts },
      { id: 'wrapup', title: '정리', minutes: 8, teacher: o.wrap[0], exitTicket: [...o.wrap[1], MOOD] },
    ],
    worksheet: o.ws, differentiation: o.diff, teacherNotes: o.notes,
  });
  const S1 = ['[4과10-01]'];
  const S2 = ['[4과10-02]'];
  const S3 = ['[4과10-03]'];

  const lessons = [
    // ───────────────────────── 1차시 (intro) ─────────────────────────
    L(1, {
      title: '하얀 김은 수증기일까? 물·얼음·수증기 가르기',
      standards: S1,
      objective: '물, 얼음, 수증기를 상태에 따라 가르고, 눈에 보이는 하얀 김은 수증기가 아니라 작은 물방울임을 말할 수 있다.',
      pic: 'a steaming paper cup of water on a table with a small ice cube beside it and an icicle hanging from a window frame, with a child pointing at the white steam',
      layers: [
        { motif: 'hills', y: 236, color: 'sky' }, { motif: 'sun', x: 410, y: 52, s: 0.7 }, { motif: 'cloud', x: 100, y: 52 },
        { motif: 'snow', x: 360, y: 150, s: 0.7 }, { motif: 'wave', y: 230 },
        { motif: 'text', x: 240, y: 118, text: '물은 어떤 모습일까?', size: 26 },
      ],
      intro: [
        '컵에 담긴 물, 얼음 조각, 따뜻한 국그릇 위로 오르는 하얀 김 사진을 나란히 보여 주며 "이 셋은 모두 물이 바뀐 모습이에요. 어떤 것이 어떤 모습일까요?" 하고 묻는다. 하얀 김을 수증기라고 말하는 학생이 많으니 칠판에 그대로 적어 두고, 활동 1의 마지막에 다시 견준다.',
        '물은 얼음이 되기도 하고 김이 되기도 해요. 하얀 김은 정말 수증기일까요?',
      ],
      acts: [
        {
          id: 'a1', title: '활동 1. 물·얼음·수증기 카드 가르기', minutes: 13, tool: 'mindmap',
          task: '카드를 읽고 물, 얼음, 수증기로 나누어요. 카드를 끌거나 눌러 고른 뒤 칸을 눌러요.',
          teacher: '"눈에 보이는 하얀 김은 수증기일까요?" 하고 묻는다. 수증기는 눈에 보이지 않는 기체이고, 하얗게 보이는 김은 수증기가 식어 생긴 작은 물방울이라고 알려 준다. 눈에 보이면 모두 수증기라고 말하는 학생에게는 컵 위 투명한 부분과 하얀 부분을 손가락으로 구별해 보게 한다.',
          levels: CARDS_LV,
          items: [
            { prompt: '물이 바뀐 모습 여섯 가지예요. 얼음, 물, 수증기로 나누어 보세요.',
              toolOptions: { mode: 'sort', topic: '물의 세 모습', slots: ['얼음', '물', '수증기'], cards: [
                c('고드름', '처마 끝의 고드름'), c('수돗물', '수도꼭지에서 나오는 물'), c('공기', '빨래가 마를 때 공기 속으로 간 것'),
                c('빙수', '빙수 위의 얼음 알갱이'), c('빗물', '창문을 타고 흐르는 빗물'), c('끓음', '끓는 물속에서 올라오는 투명한 기체')] },
              target: { sort: { 얼음: ['고드름', '빙수'], 물: ['수돗물', '빗물'], 수증기: ['공기', '끓음'] } }, difficulty: 0.15,
              predict: { q: '빨래가 마를 때 빨래 속 물은 어떤 모습으로 공기 속에 있을까요?', options: ['얼음', '수증기', '잘 모르겠어요'], answer: 1 },
              conclude: '물은 얼음(고체), 물(액체), 수증기(기체)의 세 가지 모습이 될 수 있어요.' },
            { prompt: '눈에 보이는 것만 모아 그 모습이 무엇인지 나누어 보세요. 눈에 보이지 않는 것은 남겨 둬요.',
              toolOptions: { mode: 'sort', topic: '눈에 보이는 것', slots: ['얼음', '물'], cards: [
                c('얼음', '컵 속 얼음 조각'), c('물', '컵 속 물'), c('김', '국에서 오르는 하얀 김', '하얀 김은 수증기가 아니라 작은 물방울이에요.'),
                c('이슬', '풀잎에 맺힌 이슬'), c('수증기', '공기 중의 수증기', '수증기는 눈에 보이지 않아요.')] },
              target: { sort: { 얼음: ['얼음'], 물: ['물', '김', '이슬'] } }, difficulty: 0.25 },
            { prompt: '수증기에 대해 바르게 말한 카드만 바구니에 넣어 보세요.',
              toolOptions: { mode: 'pick', topic: '수증기', basket: '맞는 말', cards: [
                c('안보임', '수증기는 눈에 보이지 않아요'), c('기체', '수증기는 물이 기체가 된 것이에요'),
                c('김', '국에서 오르는 하얀 김이 수증기예요', '하얀 김은 수증기가 식어 생긴 작은 물방울이에요.'), c('사라짐', '물이 수증기가 되면 물은 완전히 없어져요', '물은 없어진 것이 아니라 눈에 보이지 않는 수증기가 된 것이에요.')] },
              target: { pick: ['안보임', '기체'] }, difficulty: 0.3 },
          ],
        },
        {
          id: 'a2', title: '활동 2. 온도에 따라 달라지는 물의 모습', minutes: 12, tool: 'matter',
          task: '−/+ 단추로 온도를 바꾸며 물 입자의 모습을 살펴요. 목표 상태가 되도록 온도를 맞추어요. 이 온도들은 실험 예시 값이에요.',
          teacher: '"온도를 올리면 입자가 어떻게 달라지나요?" 하고 묻는다. 얼음일 때는 입자가 촘촘히 붙어 제자리에서 떨고, 물이 되면 서로 미끄러지며, 수증기가 되면 멀리 떨어져 빠르게 움직인다는 말이 나오게 한다. 수증기가 되면 입자가 사라진다고 말하는 학생에게는 입자 수를 세어 보게 한다.',
          levels: { easy: { mode: 'particles' }, base: { mode: 'particles' }, challenge: { mode: 'particles', showLabel: false } },
          items: [
            { prompt: '물이 얼음(고체)이 되도록 온도를 내려 보세요.', target: { phase: 'solid' }, difficulty: 0.1,
              predict: { q: '얼음일 때 물 입자는 어떻게 있을까요?', options: ['촘촘히 붙어 제자리에서 떨어요', '멀리 떨어져 빠르게 움직여요', '잘 모르겠어요'], answer: 0 },
              conclude: '얼음은 입자가 촘촘히 붙어 제자리에서 떨고 있는 모습이에요.' },
            { prompt: '물을 수증기(기체)가 되도록 온도를 올려 보세요.', target: { phase: 'gas' }, difficulty: 0.15,
              predict: { q: '수증기가 되면 입자는 어떻게 될까요?', options: ['사라져요', '멀리 떨어져 빠르게 움직여요', '더 촘촘해져요'], answer: 1 },
              conclude: '수증기가 되어도 입자는 사라지지 않고, 서로 멀리 떨어져 빠르게 움직여요.' },
            { prompt: '지금은 수증기예요. 물(액체)이 되도록 온도를 내려 보세요.', state: { temp: 110 }, target: { phase: 'liquid' }, difficulty: 0.2 },
          ],
        },
      ],
      wrap: [
        '"도입에서 칠판에 적은 하얀 김은 수증기라는 말을 어떻게 고치면 될까요?" 하고 되묻는다. 수증기는 눈에 보이지 않는 기체이고 하얀 김은 작은 물방울이라는 말을 한 문장으로 말하게 한다. 출구 2번을 틀린 학생에게는 눈에 보이는 것과 보이지 않는 것을 나누어 보게 한다.',
        [
          { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '물의 모습', slots: ['얼음', '물', '수증기'], cards: [c('a', '냉동실의 얼음'), c('b', '컵 속의 물'), c('c', '젖은 운동장이 마르며 공기 속으로 간 것')] }, prompt: '얼음, 물, 수증기로 나누어 보세요.', target: { sort: { 얼음: ['a'], 물: ['b'], 수증기: ['c'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '따뜻한 국에서 하얀 김이 올라와요. 이 하얀 김은 무엇일까요?', options: ['수증기', '작은 물방울', '얼음'], answer: 1, difficulty: 0.28, explain: '수증기는 눈에 보이지 않아요. 눈에 보이는 하얀 김은 작은 물방울이에요.' },
          { type: 'choice', prompt: '물이 수증기가 되었어요. 물의 입자는 어떻게 되었을까요?', options: ['사라졌어요', '서로 멀리 떨어져 빠르게 움직여요', '얼음 입자로 바뀌었어요'], answer: 1, difficulty: 0.25, explain: '물이 수증기가 되어도 입자는 없어지지 않고 서로 멀어져 빠르게 움직여요.' },
        ],
      ],
      ws: {
        title: '물의 세 가지 모습',
        items: [
          { type: 'table', prompt: '물의 모습을 얼음(고체), 물(액체), 수증기(기체)로 나누어 쓰세요.', columns: ['예', '모습'], cells: [['고드름', ''], ['컵 속의 물', ''], ['빨래에서 공기 속으로 간 것', ''], ['창문에 맺힌 물방울', '']], answer: '고드름 얼음(고체), 컵 속 물 액체, 빨래에서 간 것 수증기(기체), 창문 물방울 물(액체)' },
          { type: 'choice', prompt: '눈에 보이지 않는 것에 ○ 하세요.', options: ['얼음', '물', '수증기'], answer: '수증기' },
          { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '물은 ___(고체), ___(액체), 수증기(기체)의 세 가지 모습이 될 수 있어요.', answer: '얼음, 물' },
          { type: 'short', prompt: '"국에서 오르는 하얀 김이 수증기예요."라는 친구의 말을 고쳐 써 보세요.', answer: '수증기는 눈에 보이지 않는다. 눈에 보이는 하얀 김은 수증기가 식어 생긴 작은 물방울이다.' },
        ],
        easy: { note: '얼음은 단단하고, 물은 흐르고, 수증기는 눈에 보이지 않아요.', items: [
          { type: 'choice', prompt: '고드름은 어떤 모습인가요?', options: ['얼음', '수증기'], answer: '얼음' },
          { type: 'choice', prompt: '눈에 보이지 않는 것에 ○ 하세요.', options: ['수증기', '물'], answer: '수증기' },
          { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '물이 얼면 ___이 돼요.', answer: '얼음' },
          { type: 'draw', prompt: '얼음, 물, 수증기를 한 가지씩 그려 보세요.' }] },
      },
      diff: {
        easy: '맞는 칸에 놓은 카드에 초록 테두리가 생기고, 온도 조절에서는 상태 이름이 보여요.',
        base: '카드를 모두 놓은 뒤 확인하고, 온도를 바꿔 입자의 모습을 말해요.',
        challenge: '하얀 김 같은 함정 카드가 있고, 온도 조절 화면에 상태 이름이 보이지 않아요.',
      },
      notes: '준비물: 얼음, 투명 컵, 따뜻한 물(선생님 시연용), 차가운 숟가락. 자주 보이는 어려움: ① 눈에 보이는 하얀 김을 수증기라고 한다 → 수증기는 투명하고 하얀 부분이 작은 물방울이다. ② 수증기가 되면 물이 없어진다고 여긴다 → 입자가 사라지지 않고 멀어진 것임을 입자 상자로 보여 준다. 온도 값은 실험 예시 값이다.',
    }),

    // ───────────────────────── 2차시 (practice) ─────────────────────────
    L(2, {
      title: '주변에서 찾은 물의 변화, 무엇이 무엇으로 바뀌었나',
      standards: S1,
      objective: '생활 속 장면에서 물이 무엇에서 무엇으로 바뀌었는지 찾아 네 가지로 나누어 말할 수 있다.',
      pic: 'a winter window with water droplets on the glass, an icicle outside, a puddle shrinking in sunlight, and an ice cream cone melting on a plate',
      layers: [
        { motif: 'house', x: 120, y: 170, s: 0.9, color: 'peach' }, { motif: 'snow', x: 360, y: 90, s: 0.8 }, { motif: 'sun', x: 410, y: 60, s: 0.6 },
        { motif: 'hills', y: 238, color: 'mint' }, { motif: 'cloud', x: 260, y: 50 },
        { motif: 'text', x: 280, y: 190, text: '무엇이 바뀌었을까?', size: 22 },
      ],
      intro: [
        '"냉동실에 넣은 물이 얼음이 되었고, 컵 속 얼음은 시간이 지나면 물이 돼요. 우리 주변에서 물이 바뀌는 모습을 더 말해 볼까요?" 하고 묻는다. 학생이 말한 장면을 칠판에 적고, 오늘은 무엇이 무엇으로 바뀌었는지 화살표로 말해 보자고 한다.',
        '우리 주변에서 물이 얼음이 되거나 수증기가 되는 모습을 찾아봐요.',
      ],
      acts: [
        {
          id: 'a1', title: '활동 1. 장면을 변화별로 나누기', minutes: 13, tool: 'mindmap',
          task: '장면 카드를 읽고 무엇이 무엇으로 바뀌었는지에 따라 알맞은 칸에 놓아요. 카드를 눌러 고른 뒤 칸을 눌러요.',
          teacher: '"고드름이 햇볕에 짧아졌어요. 무엇이 무엇으로 바뀌었나요?" 하고 묻는다. 얼음이 물로 바뀐 것이라고 말하게 한다. 차가운 컵 겉면에 맺힌 물방울을 컵 안의 물이 새어 나온 것이라고 말하는 학생에게는 수증기가 차가운 컵에 닿아 물이 되었다고 알려 준다.',
          levels: CARDS_LV,
          items: [
            { prompt: '장면마다 물이 어떻게 바뀌었는지 나누어 보세요.',
              toolOptions: { mode: 'sort', topic: '물의 변화', slots: ['물이 얼음으로', '얼음이 물로', '물이 수증기로', '수증기가 물로'], cards: [
                c('냉동실', '냉동실에 둔 물이 단단해졌어요'), c('고드름', '고드름이 햇볕에 녹아 물이 떨어져요'), c('빨래', '젖은 빨래가 바람에 말랐어요'),
                c('창문', '겨울 아침 창문 안쪽에 물방울이 맺혔어요'), c('아이스', '아이스크림이 손에서 녹아 흘러내려요'), c('웅덩이', '비 온 뒤 웅덩이가 해에 줄어들었어요')] },
              target: { sort: { '물이 얼음으로': ['냉동실'], '얼음이 물로': ['고드름', '아이스'], '물이 수증기로': ['빨래', '웅덩이'], '수증기가 물로': ['창문'] } }, difficulty: 0.25,
              predict: { q: '비 온 뒤 웅덩이의 물이 줄어드는 것은 물이 어떻게 된 것일까요?', options: ['땅속으로만 스며들었어요', '수증기가 되어 공기 속으로 갔어요', '얼음이 되었어요'], answer: 1 },
              conclude: '젖은 것이 마르는 것은 물이 눈에 보이지 않는 수증기가 되어 공기 속으로 가는 것이에요.' },
            { prompt: '냉장고에서 꺼낸 차가운 음료 컵이에요. 컵 겉면에 물방울이 생기는 까닭을 이어 보세요.',
              toolOptions: { mode: 'match', topic: '차가운 컵 겉면', slots: [{ id: 's1', label: '컵 겉면에 물방울이 맺혀요' }, { id: 's2', label: '이 물방울의 물은 어디서 왔을까요?' }],
                cards: [c('식어', '공기 속 수증기가 차가운 컵에 닿아 물이 되었어요'), c('공기', '공기 속에 수증기가 있었어요'), c('새어', '컵 안의 음료가 컵을 뚫고 새어 나왔어요', '컵에 구멍이 없어도 물방울이 생겨요. 공기 속 수증기가 물이 된 거예요.')] },
              target: { match: { s1: '식어', s2: '공기' } }, difficulty: 0.3 },
            { prompt: '물이 얼음이 되는 장면만 바구니에 넣어 보세요.',
              toolOptions: { mode: 'pick', topic: '물이 얼음으로', basket: '물이 얼음이 되는 장면', cards: [
                c('겨울', '추운 겨울밤 물웅덩이에 살얼음이 생겼어요'), c('얼음틀', '얼음틀에 넣은 물이 냉동실에서 얼음이 되었어요'),
                c('녹음', '여름 낮 얼음이 물이 되었어요', '이것은 얼음이 물이 되는 장면이에요.'), c('말림', '빨래가 말랐어요', '이것은 물이 수증기가 되는 장면이에요.')] },
              target: { pick: ['겨울', '얼음틀'] }, difficulty: 0.2 },
          ],
        },
        {
          id: 'a2', title: '활동 2. 변화의 방향 이어 보기', minutes: 12, tool: 'story',
          task: '변화의 앞모습과 뒷모습을 알맞게 이어요. 카드를 눌러 고른 뒤 칸을 눌러요.',
          teacher: '"고드름이 녹는 것과 물이 얼어 고드름이 되는 것은 어떻게 다른가요?" 하고 묻는다. 같은 얼음과 물이어도 앞뒤가 바뀌면 다른 변화라는 점을 짚는다. 앞과 뒤를 거꾸로 이은 학생에게는 처음 모습부터 말하게 한다.',
          levels: CARDS_LV,
          items: [
            { prompt: '변화의 앞모습에 알맞은 뒷모습을 이어 보세요.',
              toolOptions: { mode: 'match', topic: '앞과 뒤', slots: [{ id: 's1', label: '얼음이 녹으면' }, { id: 's2', label: '물이 얼면' }],
                cards: [c('물', '물이 돼요'), c('얼음', '얼음이 돼요'), c('수증기', '수증기가 돼요', '얼음이 바로 수증기가 되지는 않아요. 녹으면 물이 돼요.')] },
              target: { match: { s1: '물', s2: '얼음' } }, difficulty: 0.15 },
            { prompt: '변화를 일어난 차례대로 놓아 보세요. 따뜻한 날 얼음이 든 컵이에요.',
              toolOptions: { mode: 'order', slots: ['처음', '가운데', '마지막'], cards: [
                c('얼음', '컵에 얼음이 가득해요'), c('녹는', '얼음이 작아지고 물이 생겨요'), c('물만', '얼음이 모두 물이 되었어요')] },
              target: { order: ['얼음', '녹는', '물만'] }, difficulty: 0.2 },
            { prompt: '변화의 빈칸을 채워 보세요.',
              toolOptions: { mode: 'fill', slots: [{ id: 'f1', label: '젖은 빨래가 마르면 물이 ___가 돼요.' }, { id: 'f2', label: '차가운 컵 겉면의 물방울은 수증기가 ___이 된 것이에요.' }],
                cards: [c('수증기', '수증기'), c('얼음', '얼음'), c('물', '물'), c('우유', '우유')] },
              target: { fill: { f1: '수증기', f2: '물' } }, difficulty: 0.28 },
          ],
        },
      ],
      wrap: [
        '"오늘 찾은 장면에서 물은 어떤 모습끼리 바뀌었나요?" 하고 묻는다. 얼음과 물, 물과 수증기 사이를 오갔다는 말이 나오게 한다. 출구 2번을 틀린 학생에게는 컵 겉면의 물방울이 어디서 왔는지 공기 속 수증기로 다시 이야기하게 한다.',
        [
          { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '물의 변화', slots: ['얼음이 물로', '물이 수증기로'], cards: [c('a', '여름에 얼음이 든 컵이 젖어 가요'), c('b', '젖은 수건이 햇볕에 말라요'), c('c', '눈이 녹아 길이 젖어요')] }, prompt: '물이 어떻게 바뀌었는지 나누어 보세요.', target: { sort: { '얼음이 물로': ['a', 'c'], '물이 수증기로': ['b'] } }, difficulty: 0.25 },
          { type: 'choice', prompt: '차가운 물병 겉면에 물방울이 맺혔어요. 이 물은 어디서 왔을까요?', options: ['병 속의 물이 새어 나왔어요', '공기 속 수증기가 차가운 병에 닿아 물이 되었어요', '병이 물을 만들었어요'], answer: 1, difficulty: 0.3, explain: '공기 속에는 눈에 보이지 않는 수증기가 있고, 차가운 병에 닿으면 물방울이 돼요.' },
          { type: 'choice', prompt: '물이 얼음이 되는 장면은 어느 것일까요?', options: ['겨울밤 웅덩이에 살얼음이 생겨요', '여름에 아이스크림이 흘러내려요', '빨래가 햇볕에 말라요'], answer: 0, difficulty: 0.2, explain: '추운 밤에는 물이 얼음으로 바뀌어요.' },
        ],
      ],
      ws: {
        title: '물이 바뀌는 장면 찾기',
        items: [
          { type: 'table', prompt: '장면을 읽고 물이 어떻게 바뀌었는지 쓰세요.', columns: ['장면', '무엇이 무엇으로'], cells: [['고드름이 햇볕에 짧아졌어요', ''], ['냉동실에 둔 물이 단단해졌어요', ''], ['젖은 운동장이 말랐어요', ''], ['창문 안쪽에 물방울이 맺혔어요', '']], answer: '얼음이 물로 / 물이 얼음으로 / 물이 수증기로 / 수증기가 물로' },
          { type: 'choice', prompt: '물이 수증기로 바뀌는 장면에 ○ 하세요.', options: ['젖은 빨래가 말라요', '얼음 틀의 물이 얼어요'], answer: '젖은 빨래가 말라요' },
          { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '차가운 컵 겉면의 물방울은 공기 속 ___가 차가운 컵에 닿아 ___이 된 거예요.', answer: '수증기, 물' },
          { type: 'short', prompt: '우리 집이나 학교에서 물이 얼음이나 수증기로 바뀌는 장면을 한 가지 써 보세요.' },
        ],
        easy: { note: '얼음이 물로, 물이 얼음으로, 물이 수증기로, 수증기가 물로 바뀌어요.', items: [
          { type: 'choice', prompt: '고드름이 녹으면 무엇이 되나요?', options: ['물', '수증기'], answer: '물' },
          { type: 'choice', prompt: '물이 얼면 무엇이 되나요?', options: ['얼음', '수증기'], answer: '얼음' },
          { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '젖은 빨래가 마르면 물이 ___가 돼요.', answer: '수증기' },
          { type: 'draw', prompt: '얼음이 녹는 모습을 그려 보세요.' }] },
      },
      diff: {
        easy: '맞는 칸에 놓으면 초록 테두리가 생기고, 틀리면 까닭을 말해 줘요.',
        base: '네 갈래로 장면을 스스로 나누고 변화의 앞뒤를 이어요.',
        challenge: '차가운 컵 겉면 같은 함정 장면에서 수증기가 어디서 왔는지 이어야 해요.',
      },
      notes: '준비물: 투명 컵 두 개, 얼음, 차가운 음료수(선생님 시연용). 자주 보이는 어려움: ① 컵 겉면의 물방울을 컵 안의 물이 새어 나온 것으로 본다 → 마른 컵을 차갑게 해 보아 같은 물방울이 생기는지 보여 준다. ② 변화의 앞뒤를 거꾸로 말한다 → 처음 모습부터 말하게 한다.',
    }),

    // ───────────────────────── 3차시 (core) ─────────────────────────
    L(3, {
      title: '입자 상자와 표로 물의 세 가지 상태 나타내기',
      standards: S1,
      objective: '물의 세 가지 상태를 입자 상자 그림과 이름으로 나타내고, 상태별 특징을 표로 정리할 수 있다.',
      pic: 'three paper boxes showing tiny dots, one with dots packed tightly in rows, one with dots touching loosely, and one with dots spread far apart, with labels on top of each box',
      layers: [
        { motif: 'hills', y: 240, color: 'lavender' }, { motif: 'sun', x: 62, y: 54, s: 0.7 }, { motif: 'cloud', x: 396, y: 52 },
        { motif: 'star', x: 140, y: 154, s: 0.6 }, { motif: 'star', x: 340, y: 154, s: 0.6 },
        { motif: 'text', x: 240, y: 118, text: '입자로 보면?', size: 28 },
      ],
      intro: [
        '입자 상자 세 개를 칠판에 그리고 "눈으로는 안 보이지만 물을 아주 작게 쪼개 본다면 어떻게 생겼을까요?" 하고 묻는다. 상태마다 입자 사이의 거리와 움직임이 다르다는 점을 오늘 살펴보자고 한다.',
        '얼음, 물, 수증기를 아주 작은 알갱이로 그려 본다면 어떻게 다를까요?',
      ],
      acts: [
        {
          id: 'a1', title: '활동 1. 입자 상자 보고 상태 고르기', minutes: 13, tool: 'matter',
          task: '세 상자의 입자를 보고 알맞은 상자를 골라요. 상자 이름은 가, 나, 다예요.',
          teacher: '"입자가 서로 딱 붙어 흔들리는 상자와 멀리 떨어져 빠르게 움직이는 상자는 각각 무엇일까요?" 하고 묻는다. 입자 사이가 가깝고 제자리에서 흔들리면 얼음, 서로 붙어 미끄러지면 물, 멀리 퍼져 빠르게 움직이면 수증기라고 정리한다. 수증기 상자는 입자가 더 많다고 말하는 학생에게는 입자 수는 같다는 점을 세어 보게 한다.',
          levels: { easy: { mode: 'particles' }, base: { mode: 'particles' }, challenge: { mode: 'particles' } },
          items: [
            { prompt: '세 상자의 입자를 보고 얼음(고체)인 상자를 고르세요.',
              toolOptions: { boxes: ['liquid', 'gas', 'solid'], ask: { q: '얼음은 어느 상자인가요?', choices: ['가', '나', '다'], explain: '얼음은 입자가 촘촘히 붙어 제자리에서 흔들려요.' } }, target: { pick: 2 }, difficulty: 0.15 },
            { prompt: '이번에는 수증기(기체)인 상자를 고르세요.',
              toolOptions: { boxes: ['solid', 'liquid', 'gas'], ask: { q: '수증기는 어느 상자인가요?', choices: ['가', '나', '다'], explain: '수증기는 입자가 서로 멀리 떨어져 빠르게 움직여요.' } }, target: { pick: 2 }, difficulty: 0.2,
              predict: { q: '수증기 상자의 입자는 어떤 모습일까요?', options: ['촘촘히 붙어 있어요', '멀리 떨어져 빠르게 움직여요', '잘 모르겠어요'], answer: 1 },
              conclude: '입자 사이가 멀고 빠르게 움직이면 수증기, 촘촘히 붙어 있으면 얼음이에요.' },
            { prompt: '물(액체)인 상자를 고르세요.',
              toolOptions: { boxes: ['gas', 'solid', 'liquid'], ask: { q: '물은 어느 상자인가요?', choices: ['가', '나', '다'], explain: '물은 입자가 서로 붙어 있지만 미끄러지듯 움직여요.' } }, target: { pick: 2 }, difficulty: 0.25 },
            { prompt: '세 상자 중에서 입자가 가장 멀리 떨어져 있는 상자를 고르세요.',
              toolOptions: { boxes: ['liquid', 'solid', 'gas'], ask: { q: '입자가 가장 멀리 떨어진 상자는 어느 것인가요?', choices: ['가', '나', '다'], explain: '입자가 가장 멀리 떨어져 있는 것은 수증기(기체)예요.' } }, target: { pick: 2 }, difficulty: 0.25 },
          ],
        },
        {
          id: 'a2', title: '활동 2. 상태별 특징 표 만들기', minutes: 12, tool: 'mindmap',
          task: '특징 카드를 읽고 얼음, 물, 수증기 칸에 알맞게 놓아요. 카드를 눌러 고른 뒤 칸을 눌러요.',
          teacher: '"표에 같은 종류의 특징끼리 모으면 무엇이 좋은가요?" 하고 묻는다. 한눈에 견주어 볼 수 있다는 말이 나오게 한다. 모양과 입자 이야기를 섞어 한 칸에 넣는 학생에게는 모양 이야기끼리, 입자 이야기끼리 먼저 묶게 한다.',
          levels: CARDS_LV,
          items: [
            { prompt: '특징 카드를 얼음, 물, 수증기 칸에 알맞게 놓아 표를 완성해 보세요.',
              toolOptions: { mode: 'sort', topic: '상태별 특징', slots: ['얼음', '물', '수증기'], cards: [
                c('a', '모양이 일정해요'), c('b', '담는 그릇 모양에 따라 변해요'), c('c', '눈에 보이지 않아요'), c('d', '입자가 제자리에서 흔들려요'), c('e', '흘러서 따를 수 있어요'), c('f', '입자가 멀리 퍼져 빠르게 움직여요')] },
              target: { sort: { 얼음: ['a', 'd'], 물: ['b', 'e'], 수증기: ['c', 'f'] } }, difficulty: 0.25 },
            { prompt: '표의 한 칸을 채울 말을 이어 보세요. 남는 카드는 그대로 둬요.',
              toolOptions: { mode: 'match', topic: '표 채우기', slots: [{ id: 's1', label: '얼음의 입자' }, { id: 's2', label: '수증기의 입자' }],
                cards: [c('붙음', '촘촘히 붙어 제자리에서 흔들려요'), c('퍼짐', '멀리 떨어져 빠르게 움직여요'), c('굳음', '서로 붙지 않고 가만히 있어요', '입자는 늘 움직이고 있어요.')] },
              target: { match: { s1: '붙음', s2: '퍼짐' } }, difficulty: 0.25 },
            { prompt: '표로 정리한 내용으로 맞는 말만 바구니에 넣어 보세요.',
              toolOptions: { mode: 'pick', topic: '표에서 알 수 있는 것', basket: '맞는 말', cards: [
                c('같은수', '세 상태 모두 같은 물이어서 입자는 같은 물이에요'), c('거리', '상태마다 입자 사이의 거리가 달라요'),
                c('다른물', '얼음과 수증기는 다른 물질이에요', '얼음도 수증기도 모두 물이 상태만 바뀐 것이에요.')] },
              target: { pick: ['같은수', '거리'] }, difficulty: 0.3 },
          ],
        },
      ],
      wrap: [
        '"입자 상자를 보고 물의 상태를 어떻게 알 수 있었나요?" 하고 묻는다. 입자 사이가 가깝고 제자리에서 흔들리면 얼음, 붙어 미끄러지면 물, 멀리 퍼져 빠르게 움직이면 수증기라는 말이 나오게 한다. 출구 2번을 틀린 학생에게는 입자 사이의 거리를 손가락으로 짚어 보게 한다.',
        [
          { type: 'tool', tool: 'matter', options: { mode: 'particles', boxes: ['gas', 'liquid', 'solid'], ask: { q: '물(액체)은 어느 상자인가요?', choices: ['가', '나', '다'] } }, prompt: '입자를 보고 물(액체)인 상자를 고르세요.', target: { pick: 1 }, difficulty: 0.25 },
          { type: 'choice', prompt: '입자가 서로 멀리 떨어져 빠르게 움직이는 물의 상태는 무엇일까요?', options: ['얼음', '물', '수증기'], answer: 2, difficulty: 0.2, explain: '입자 사이가 멀고 빠르게 움직이는 것은 기체인 수증기예요.' },
          { type: 'choice', prompt: '얼음과 수증기는 같은 물이 상태만 바뀐 것일까요?', options: ['네, 같은 물이 상태만 달라요', '아니요, 서로 다른 물질이에요'], answer: 0, difficulty: 0.28, explain: '얼음, 물, 수증기는 모두 물이고 입자의 배열과 움직임만 달라요.' },
        ],
      ],
      ws: {
        title: '물의 세 가지 상태 표',
        items: [
          { type: 'table', prompt: '상태마다 입자의 모습을 쓰세요.', columns: ['상태', '입자의 모습'], cells: [['얼음(고체)', ''], ['물(액체)', ''], ['수증기(기체)', '']], answer: '얼음 촘촘히 붙어 제자리에서 흔들림 / 물 붙어 있지만 미끄러지듯 움직임 / 수증기 멀리 떨어져 빠르게 움직임' },
          { type: 'figure', wide: true, prompt: '입자 상자 세 개가 있어요. 얼음에는 "얼", 물에는 "물", 수증기에는 "수증"이라고 상자 아래에 쓰세요.', tool: 'matter', options: { mode: 'particles', boxes: ['gas', 'solid', 'liquid'], wide: true }, figures: [{ options: {}, caption: '가 (      )  나 (      )  다 (      )' }], answer: '가 수증, 나 얼, 다 물' },
          { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '입자가 멀리 떨어져 빠르게 움직이는 것은 ___이고, 촘촘히 붙어 제자리에서 흔들리는 것은 ___이에요.', answer: '수증기, 얼음' },
          { type: 'short', prompt: '"수증기는 물과 다른 물질이다."라는 말을 고쳐 써 보세요.', answer: '수증기도 물이다. 물의 입자가 멀리 떨어져 빠르게 움직이는 기체 상태일 뿐이다.' },
        ],
        easy: { note: '붙어 있으면 얼음, 미끄러지면 물, 멀리 퍼져 있으면 수증기예요.', items: [
          { type: 'choice', prompt: '입자가 촘촘히 붙은 것에 ○ 하세요.', options: ['얼음', '수증기'], answer: '얼음' },
          { type: 'choice', prompt: '입자가 멀리 떨어진 것에 ○ 하세요.', options: ['물', '수증기'], answer: '수증기' },
          { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '얼음, 물, 수증기는 모두 ___이에요.', answer: '물' },
          { type: 'draw', prompt: '얼음 입자를 점으로 그려 보세요.' }] },
      },
      diff: {
        easy: '상자 문항에서 맞게 놓으면 초록 테두리가 생기고, 카드에 입자의 모습이 보여요.',
        base: '상자를 보고 상태를 고르고, 특징 표를 스스로 채워요.',
        challenge: '입자 수가 같다는 함정 카드와 표에서 알 수 있는 말만 고르는 문항이 있어요.',
      },
      notes: '준비물: 활동지, 점 스티커(입자 모형), 교실 바닥에 입자 놀이용 테이프. 몸으로 입자를 흉내 내 보게 하면 입자 거리와 움직임이 잘 기억에 남는다. 자주 보이는 어려움: ① 입자도 상태에 따라 크기가 다르다고 여긴다 → 입자 크기는 같고 간격만 다르다. ② 수증기를 다른 물질로 여긴다 → 같은 물이 상태만 다르다.',
    }),

    // ───────────────────────── 4차시 (core) ─────────────────────────
    L(4, {
      title: '얼음이 녹는 모습을 시간에 따라 관찰하고 기록하기',
      standards: S1,
      objective: '얼음을 접시에 두고 시간이 지나며 달라지는 점을 같은 방법으로 재어 기록하고, 녹은 물이 얼음에서 생겼다고 말할 수 있다.',
      pic: 'a plate with an ice cube shrinking in three stages from large to small as a puddle of water grows around it, with a small paper ruler and a clock card beside it',
      layers: [
        { motif: 'hills', y: 238, color: 'sky' }, { motif: 'sun', x: 410, y: 54, s: 0.7 }, { motif: 'cloud', x: 100, y: 52 },
        { motif: 'wave', y: 232 }, { motif: 'star', x: 200, y: 150, s: 0.6 },
        { motif: 'text', x: 240, y: 112, text: '10분마다 살펴봐요', size: 26 },
      ],
      intro: [
        '얼음 조각을 접시에 올려 보여 주고 "10분 뒤에는 어떻게 되어 있을까요? 접시에 고인 물은 어디서 왔을까요?" 하고 묻는다. 접시에 처음부터 물이 있었다고 말하는 학생이 있으면 칠판에 그대로 적어 두고 활동 끝에 다시 견준다.',
        '얼음을 접시에 올려 두면 어떻게 달라질까요? 시간마다 같은 방법으로 살펴봐요.',
      ],
      acts: [
        {
          id: 'a1', title: '활동 1. 관찰 순서와 기록 방법 정하기', minutes: 9, tool: 'story',
          task: '관찰하는 순서 카드를 차례대로 놓아요. 카드를 끌거나 눌러 고른 뒤 칸을 눌러요.',
          teacher: '"처음 얼음의 크기를 재지 않고 10분 뒤에만 재면 무엇이 아쉬울까요?" 하고 묻는다. 처음 모습과 견줄 수 있어야 달라진 점을 말할 수 있다고 정리한다. 눈대중으로만 말하고 기록을 남기지 않는 학생에게는 숫자나 그림이 왜 필요한지 되묻는다.',
          levels: CARDS_LV,
          items: [
            { prompt: '얼음이 녹는 모습을 관찰하는 순서를 차례대로 놓아 보세요.',
              toolOptions: { mode: 'order', slots: ['처음', '둘째', '셋째', '마지막'], cards: [
                c('올림', '빈 접시에 얼음을 올려요'), c('처음', '처음 얼음의 크기를 재어 적어요'), c('시간', '10분마다 같은 방법으로 살펴보고 재요'), c('비교', '기록을 견주어 달라진 점을 말해요')] },
              target: { order: ['올림', '처음', '시간', '비교'] }, difficulty: 0.2 },
            { prompt: '얼음이 녹는 모습을 시간 순서대로 놓아 보세요.',
              toolOptions: { mode: 'order', slots: ['처음', '가운데', '마지막'], cards: [
                c('큰얼음', '모서리가 뾰족한 큰 얼음이 있어요'), c('둥글', '모서리가 둥글어지고 접시에 물이 고여요'), c('작은', '얼음이 아주 작아지고 물이 많아졌어요')] },
              target: { order: ['큰얼음', '둥글', '작은'] }, difficulty: 0.22 },
            { prompt: '믿을 수 있는 관찰이 되려면 알맞은 것만 바구니에 넣어 보세요.',
              toolOptions: { mode: 'pick', topic: '관찰 방법', basket: '알맞은 방법', cards: [
                c('같은', '시간마다 같은 방법으로 재요'), c('적기', '잰 값을 그때그때 표에 적어요'),
                c('눈대중', '눈대중으로만 말하고 적지 않아요', '숫자로 적어야 나중에 견줄 수 있어요.'), c('바꾸기', '재는 방법을 시간마다 바꿔요', '방법이 같아야 결과를 견줄 수 있어요.')] },
              target: { pick: ['같은', '적기'] }, difficulty: 0.25 },
          ],
        },
        {
          id: 'a2', title: '활동 2. 자로 얼음 길이 재어 기록하기', minutes: 9, tool: 'measure',
          task: '시간마다 얼음의 길이를 자로 읽어요. 답 칸을 ↑↓ 단추로 맞춰요. 이 값들은 실험 예시 값이에요.',
          teacher: '"자의 0에서 시작하지 않으면 끝 눈금을 그대로 읽어도 될까요?" 하고 묻는다. 시작한 눈금에서 끝 눈금까지 몇 칸인지 세게 한다. 얼음 길이가 줄어드는 값을 읽으며 시간이 지날수록 얼음이 어떻게 달라지는지 말하게 한다.',
          levels: { easy: { mode: 'ruler', max: 10, mm: false }, base: { mode: 'ruler', max: 10 }, challenge: { mode: 'ruler', max: 15 } },
          items: [
            { prompt: '처음 얼음의 길이를 재었어요. 몇 cm인가요?', toolOptions: { object: { name: '처음 얼음', len: 6 } }, target: { read: 6 }, difficulty: 0.1 },
            { prompt: '10분 뒤 얼음의 길이예요. 자의 1 cm 눈금부터 재었어요. 길이는 몇 cm인가요?', toolOptions: { object: { name: '10분 뒤 얼음', len: 4, start: 1 } }, target: { read: 4 }, difficulty: 0.2,
              levels: { challenge: { toolOptions: { object: { name: '10분 뒤 얼음', len: 4.5, start: 1 } }, prompt: '10분 뒤 얼음의 길이예요. 자의 1 cm부터 재었어요. 길이는 몇 cm 몇 mm인가요?', target: { read: 4.5 } } } },
            { prompt: '20분 뒤 얼음의 길이예요. 길이는 몇 cm인가요?', toolOptions: { object: { name: '20분 뒤 얼음', len: 2 } }, target: { read: 2 }, difficulty: 0.15,
              levels: { base: { toolOptions: { object: { name: '20분 뒤 얼음', len: 2.5 } }, prompt: '20분 뒤 얼음의 길이예요. 길이는 몇 cm 몇 mm인가요?', target: { read: 2.5 } } },
              conclude: '시간이 지나면 얼음의 길이가 줄어들어요. 줄어든 만큼 물이 늘어나요.' },
          ],
        },
        {
          id: 'a3', title: '활동 3. 기록으로 말하기', minutes: 7, tool: 'mindmap',
          task: '기록을 읽고 알 수 있는 것을 골라요. 카드를 눌러 고른 뒤 칸을 눌러요.',
          teacher: '"접시에 고인 물은 처음부터 있었을까요? 기록으로 설명해 볼까요?" 하고 묻는다. 얼음이 작아진 만큼 물이 늘어났다는 기록을 근거로 말하게 한다. 접시에 처음부터 물이 있었다고 말하는 학생에게는 처음 접시가 비어 있었던 기록을 짚어 준다.',
          levels: CARDS_LV,
          items: [
            { prompt: '기록 표를 보고 알 수 있는 것만 바구니에 넣어 보세요. 처음 접시는 비어 있었어요.',
              toolOptions: { mode: 'pick', topic: '기록에서 알 수 있는 것', basket: '알 수 있는 것', cards: [
                c('줄어', '시간이 지날수록 얼음이 작아졌어요'), c('물늘', '얼음이 작아진 만큼 접시의 물이 늘어났어요'),
                c('처음물', '접시에 처음부터 물이 있었어요', '처음 접시는 비어 있었어요.'), c('커짐', '시간이 지나면 얼음이 더 커져요', '기록에서 얼음은 계속 작아졌어요.')] },
              target: { pick: ['줄어', '물늘'] }, difficulty: 0.2 },
            { prompt: '기록과 알 수 있는 말을 이어 보세요.',
              toolOptions: { mode: 'match', topic: '근거 잇기', slots: [{ id: 's1', label: '얼음의 길이: 6 cm → 4 cm → 2 cm' }, { id: 's2', label: '접시에 고인 물의 양: 조금 → 많이' }],
                cards: [c('줄어듦', '얼음이 녹으며 작아져요'), c('늘어남', '녹은 얼음이 물이 되어 늘어나요'), c('무관', '얼음과 물의 양은 서로 상관이 없어요', '얼음이 녹아 물이 되었으므로 서로 이어져 있어요.')] },
              target: { match: { s1: '줄어듦', s2: '늘어남' } }, difficulty: 0.25 },
            { prompt: '얼음의 변화를 설명하는 문장의 빈칸을 채워 보세요.',
              toolOptions: { mode: 'fill', slots: [{ id: 'f1', label: '얼음이 녹으면 ___이 돼요.' }, { id: 'f2', label: '접시의 물은 녹은 ___에서 생겼어요.' }],
                cards: [c('물', '물'), c('얼음', '얼음'), c('수증기', '수증기')] },
              target: { fill: { f1: '물', f2: '얼음' } }, difficulty: 0.28 },
          ],
        },
      ],
      wrap: [
        '"도입에서 접시의 물이 처음부터 있었다는 말이 있었어요. 기록을 보고 어떻게 말할 수 있나요?" 하고 묻는다. 처음 접시는 비어 있었고 얼음이 작아진 만큼 물이 생겼다는 말이 나오게 한다. 출구 2번을 틀린 학생에게는 활동 2의 길이 변화를 다시 읽게 한다.',
        [
          { type: 'tool', tool: 'measure', options: { mode: 'ruler', max: 10, object: { name: '30분 뒤 얼음', len: 1.3, start: 2 } }, prompt: '자의 2 cm 눈금부터 재었어요. 얼음 길이는 몇 cm 몇 mm인가요?', target: { read: 1.3 }, difficulty: 0.28 },
          { type: 'choice', prompt: '얼음이 녹으며 접시에 물이 고였어요. 이 물은 어디서 왔을까요?', options: ['접시에 처음부터 있었어요', '녹은 얼음이 물이 된 거예요', '공기가 만든 거예요'], answer: 1, difficulty: 0.22, explain: '접시는 처음에 비어 있었고, 얼음이 녹아 물이 되었어요.' },
          { type: 'choice', prompt: '관찰 기록을 남길 때 가장 알맞은 방법은 무엇인가요?', options: ['시간마다 같은 방법으로 재어 표에 적어요', '눈대중으로만 말해요', '생각날 때만 적어요'], answer: 0, difficulty: 0.2, explain: '같은 방법으로 재어 적어야 나중에 견주어 달라진 점을 말할 수 있어요.' },
        ],
      ],
      ws: {
        title: '얼음이 녹는 모습 기록',
        items: [
          { type: 'table', prompt: '얼음의 길이를 시간마다 쓰고, 보이는 모습을 한 줄로 쓰세요. 값은 예시예요.', columns: ['시간', '얼음의 길이', '보이는 모습'], cells: [['처음', '6 cm', ''], ['10분 뒤', '', ''], ['20분 뒤', '', '']], answer: '10분 뒤 4 cm 모서리 둥글어짐 / 20분 뒤 2 cm 물이 많아짐 (값은 예시)' },
          { type: 'figure', prompt: '얼음의 길이를 자로 읽어 쓰세요.', tool: 'measure', options: { mode: 'ruler', max: 10 }, figures: [
            { options: { object: { name: '얼음', len: 3.4 } }, caption: '___ cm ___ mm' }, { options: { object: { name: '얼음', len: 2, start: 3 } }, caption: '___ cm' }], answer: '3 cm 4 mm, 2 cm' },
          { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '얼음이 녹으면 ___이 되고, 시간이 지날수록 얼음은 점점 ___져요.', answer: '물, 작아' },
          { type: 'short', prompt: '"접시의 물은 처음부터 있었다."는 말을 기록을 근거로 고쳐 써 보세요.', answer: '처음 접시는 비어 있었고 얼음이 녹아 작아진 만큼 물이 생겼다.' },
        ],
        easy: { note: '얼음은 녹으면 물이 돼요. 처음과 나중의 길이를 견주어요.', items: [
          { type: 'figure', prompt: '얼음의 길이를 읽어 쓰세요.', tool: 'measure', options: { mode: 'ruler', max: 10, mm: false }, figures: [{ options: { object: { name: '얼음', len: 4 } }, caption: '___ cm' }], answer: '4 cm' },
          { type: 'choice', prompt: '시간이 지나면 얼음의 크기는 어떻게 되나요?', options: ['작아져요', '커져요'], answer: '작아져요' },
          { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '얼음이 녹으면 ___이 돼요.', answer: '물' },
          { type: 'draw', prompt: '얼음이 녹는 모습을 세 칸 그림으로 그려 보세요.' }] },
      },
      diff: {
        easy: '순서 카드에 칸 이름이 있고, 얼음 길이는 cm 눈금만 있는 자로 읽어요.',
        base: '순서를 스스로 세우고 얼음 길이를 mm까지 읽어요.',
        challenge: '자가 0이 아닌 눈금에서 시작하고, 기록에 없는 말을 가려내요.',
      },
      notes: '준비물(모둠): 얼음 한 조각, 접시, 30 cm 자, 시계, 활동지. 얼음은 같은 크기로 모둠마다 하나씩 준다. 교실이 더우면 녹는 속도가 빠르니 10분 간격이 어려우면 5분 간격으로 바꿔도 된다. 수치는 실험 예시 값이다. 자주 보이는 어려움: ① 접시의 물이 처음부터 있었다고 기록한다 → 빈 접시를 사진이나 그림으로 먼저 남긴다. ② 얼음의 길이를 눈대중으로만 말한다 → 자로 재어 적는다.',
    }),

    // ───────────────────────── 5차시 (core) ─────────────────────────
    L(5, {
      title: '증발과 끓음, 같은 점과 다른 점 가르기',
      standards: S2,
      objective: '증발과 끓음이 모두 물이 수증기로 바뀌는 변화임을 알고, 일어나는 곳과 온도에서 차이를 가려 말할 수 있다.',
      pic: 'a wet cloth hanging in the sun with tiny paper arrows rising from its surface next to a small pot with bubbles rising from deep inside the water, both with arrows pointing up to the air',
      layers: [
        { motif: 'hills', y: 238, color: 'peach' }, { motif: 'sun', x: 400, y: 56, s: 0.8 }, { motif: 'cloud', x: 120, y: 52 },
        { motif: 'wave', y: 232 }, { motif: 'bird', x: 280, y: 82 },
        { motif: 'text', x: 240, y: 118, text: '같을까, 다를까?', size: 26 },
      ],
      safety: ['뜨거운 물과 김은 데일 수 있어요. 끓이는 실험은 선생님이 보여 주고 학생은 가까이 가지 않아요.', '디지털 입자 상자의 온도는 실험 예시 값이에요. 실제로 물을 끓일 때는 선생님의 안내를 따라요.'],
      intro: [
        '젖은 수건이 마르는 사진과 주전자에서 물이 끓는 사진을 보여 주며 "둘 다 물이 줄어들어요. 같은 변화일까요?" 하고 묻는다. 마르는 것과 끓는 것이 모두 물이 수증기가 되는 변화라는 점은 맞다고 해 주고, 어디가 다른지 살펴보자고 한다.',
        '빨래가 마르는 것과 물이 끓는 것은 같은 변화일까요, 다른 변화일까요?',
      ],
      acts: [
        {
          id: 'a1', title: '활동 1. 증발과 끓음의 특징 가르기', minutes: 13, tool: 'mindmap',
          task: '특징 카드를 읽고 증발만, 끓음만, 둘 다에 알맞게 나누어요. 카드를 눌러 고른 뒤 칸을 눌러요.',
          teacher: '"증발도 물이 수증기가 되는 것일까요?" 하고 묻는다. 증발은 물의 표면에서 천천히, 끓음은 물속에서도 기포가 생기며 빠르게 일어난다고 정리한다. 증발은 물이 사라지는 것이라고 말하는 학생에게는 수증기가 되어 공기 속으로 간 것임을 다시 짚는다.',
          levels: CARDS_LV,
          items: [
            { prompt: '특징 카드를 증발만, 끓음만, 둘 다로 나누어 보세요.',
              toolOptions: { mode: 'sort', topic: '증발과 끓음', slots: ['증발만', '끓음만', '둘 다'], cards: [
                c('표면', '물의 표면에서만 일어나요'), c('기포', '물속에서도 기포가 생겨요'), c('수증기', '물이 수증기로 바뀌어요'),
                c('온도', '정해진 온도(약 100 °C)에서 활발히 일어나요'), c('낮은', '낮은 온도에서도 천천히 일어나요'), c('안보', '수증기는 눈에 보이지 않아요')] },
              target: { sort: { 증발만: ['표면', '낮은'], 끓음만: ['기포', '온도'], '둘 다': ['수증기', '안보'] } }, difficulty: 0.25,
              predict: { q: '증발과 끓음에서 물은 무엇으로 바뀔까요?', options: ['얼음', '수증기', '잘 모르겠어요'], answer: 1 },
              conclude: '증발과 끓음은 모두 물이 수증기로 바뀌는 변화지만, 일어나는 곳과 온도가 달라요.' },
            { prompt: '장면마다 증발인지 끓음인지 나누어 보세요.',
              toolOptions: { mode: 'sort', topic: '장면', slots: ['증발', '끓음'], cards: [
                c('빨래', '햇볕에 빨래가 말라요'), c('국', '국이 보글보글 끓어요'), c('웅덩이', '웅덩이 물이 줄어들어요'), c('주전자', '주전자에서 거품이 올라오며 김이 나요')] },
              target: { sort: { 증발: ['빨래', '웅덩이'], 끓음: ['국', '주전자'] } }, difficulty: 0.2 },
            { prompt: '증발과 끓음에 대해 맞게 말한 카드만 바구니에 넣어 보세요.',
              toolOptions: { mode: 'pick', topic: '증발과 끓음', basket: '맞는 말', cards: [
                c('같다', '둘 다 물이 수증기가 되는 변화예요'), c('빨래', '빨래가 마르는 것은 증발이에요'),
                c('다르다', '증발한 물은 완전히 사라져요', '증발한 물은 눈에 보이지 않는 수증기가 되어 공기 속으로 가요.'), c('끓어만', '증발은 물이 끓을 때만 일어나요', '증발은 낮은 온도에서도 일어나요.')] },
              target: { pick: ['같다', '빨래'] }, difficulty: 0.28 },
          ],
        },
        {
          id: 'a2', title: '활동 2. 온도 조절로 끓는 온도 찾기', minutes: 12, tool: 'matter',
          task: '−/+ 단추로 온도를 바꿔 물 입자를 살펴요. 이 온도들은 실험 예시 값이에요.',
          teacher: '"온도를 올리면 물 입자의 모습이 어떻게 달라지나요?" 하고 묻는다. 물이 끓어 수증기가 되는 온도를 약 100 °C라고 알려 주고, 얼음이 되는 온도는 약 0 °C라고 말한다. 100 °C보다 높아지면 더 빨리 수증기가 된다고 말하는 학생에게는 입자의 움직임이 빨라지는 것을 보게 한다.',
          levels: { easy: { mode: 'particles' }, base: { mode: 'particles' }, challenge: { mode: 'particles', showLabel: false } },
          items: [
            { prompt: '물이 얼음이 되기 시작하는 온도(약 0 °C)로 온도를 맞춰 보세요.', state: { temp: 40 }, target: { temp: 0 }, difficulty: 0.2 },
            { prompt: '물이 끓어 수증기가 되는 온도(약 100 °C)로 온도를 맞춰 보세요.', target: { temp: 100 }, difficulty: 0.25,
              predict: { q: '온도를 올려 100 °C가 되면 물은 어떻게 될까요?', options: ['얼음이 돼요', '끓어 수증기가 돼요', '아무 일도 없어요'], answer: 1 },
              conclude: '약 100 °C에서 물이 끓으며 수증기로 바뀌어요.' },
            { prompt: '온도를 높여 물이 수증기(기체)가 되도록 해 보세요.', state: { temp: 60 }, target: { phase: 'gas' }, difficulty: 0.15 },
          ],
        },
      ],
      wrap: [
        '"증발과 끓음의 같은 점과 다른 점을 한 문장씩 말해 볼까요?" 하고 묻는다. 같은 점은 물이 수증기로 바뀐다는 것, 다른 점은 증발이 표면에서 천천히, 끓음은 물속에서도 기포가 생기며 일어난다는 것이다. 출구 3번을 틀린 학생에게는 증발이 낮은 온도에서도 일어난다는 점을 다시 짚는다.',
        [
          { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '증발과 끓음', slots: ['증발', '끓음'], cards: [c('a', '물속에서 기포가 올라와요'), c('b', '물의 표면에서 조용히 일어나요'), c('c', '젖은 머리카락이 마르는 중이에요')] }, prompt: '증발인지 끓음인지 나누어 보세요.', target: { sort: { 증발: ['b', 'c'], 끓음: ['a'] } }, difficulty: 0.22 },
          { type: 'choice', prompt: '증발과 끓음의 같은 점은 무엇일까요?', options: ['물이 수증기로 바뀌어요', '물이 얼음으로 바뀌어요', '물이 사라져요'], answer: 0, difficulty: 0.2, explain: '둘 다 물이 눈에 보이지 않는 수증기로 바뀌는 변화예요.' },
          { type: 'choice', prompt: '추운 날 밖에 널어 둔 빨래도 조금씩 말라요. 이것은 어떤 변화일까요?', options: ['증발', '끓음'], answer: 0, difficulty: 0.3, explain: '증발은 낮은 온도에서도 물의 표면에서 천천히 일어나요.' },
        ],
      ],
      ws: {
        title: '증발과 끓음 견주기',
        items: [
          { type: 'table', prompt: '증발과 끓음의 특징을 쓰세요.', columns: ['견줄 점', '증발', '끓음'], cells: [['일어나는 곳', '', ''], ['기포', '', ''], ['물이 바뀌는 것', '', '']], answer: '곳: 표면 / 물속과 표면. 기포: 없음 / 생김. 바뀌는 것: 둘 다 수증기' },
          { type: 'choice', prompt: '물의 표면에서 천천히 일어나는 변화에 ○ 하세요.', options: ['증발', '끓음'], answer: '증발' },
          { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '증발과 끓음은 모두 물이 ___로 바뀌는 변화이고, 물이 끓는 온도는 약 ___ °C예요.', answer: '수증기, 100' },
          { type: 'short', prompt: '"증발한 물은 없어진 것이다."라는 말을 고쳐 써 보세요.', answer: '증발한 물은 눈에 보이지 않는 수증기가 되어 공기 속에 있다.' },
        ],
        easy: { note: '증발과 끓음 모두 물이 수증기가 돼요. 끓음은 물속에서 기포가 생겨요.', items: [
          { type: 'choice', prompt: '기포가 생기는 변화에 ○ 하세요.', options: ['끓음', '증발'], answer: '끓음' },
          { type: 'choice', prompt: '빨래가 마르는 것은 어떤 변화인가요?', options: ['증발', '끓음'], answer: '증발' },
          { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '물이 증발하면 ___가 돼요.', answer: '수증기' },
          { type: 'draw', prompt: '끓는 물과 마르는 빨래를 한 가지씩 그려 보세요.' }] },
      },
      diff: {
        easy: '맞는 칸에 놓으면 초록 테두리가 생기고, 온도 조절 화면에 상태 이름이 보여요.',
        base: '특징을 세 칸으로 스스로 나누고, 온도를 맞춰 끓는 온도를 찾아요.',
        challenge: '증발이 사라지는 것이라는 함정 카드가 있고, 온도 조절 화면에 상태 이름이 보이지 않아요.',
      },
      notes: '준비물: 젖은 수건, 투명 컵, 전기주전자(선생님 시연용, 거리를 두고 보여 줌). 끓는 물은 학생이 만지거나 가까이 가지 않는다. 온도와 끓는 온도는 실험 예시 값이며 실제 값은 높이와 대기에 따라 조금 다르다. 자주 보이는 어려움: ① 증발한 물이 사라진다고 여긴다 → 수증기가 되어 공기 속으로 갔다고 말하게 한다. ② 증발은 끓을 때만 일어난다고 여긴다 → 빨래가 마르는 장면을 예로 든다.',
    }),

    // ───────────────────────── 6차시 (core) ─────────────────────────
    L(6, {
      title: '다섯 가지 물의 변화를 화살표 그림으로 나타내기',
      standards: S2,
      objective: '물이 얼 때, 얼음이 녹을 때, 증발할 때, 수증기가 응결할 때의 변화를 앞뒤 모습을 잇는 화살표로 나타낼 수 있다.',
      pic: 'a paper diagram with an ice cube, a drop of water and a cloud of steam connected by curved arrows going both ways, with small labels beside each arrow',
      layers: [
        { motif: 'hills', y: 238, color: 'mint' }, { motif: 'sun', x: 64, y: 54, s: 0.7 }, { motif: 'cloud', x: 396, y: 52 },
        { motif: 'snow', x: 120, y: 140, s: 0.6 }, { motif: 'wave', y: 230 },
        { motif: 'text', x: 240, y: 108, text: '얼음 ↔ 물 ↔ 수증기', size: 26 },
      ],
      intro: [
        '칠판에 얼음, 물, 수증기를 적고 "화살표 하나로 이 셋의 변화를 모두 나타낼 수 있을까요?" 하고 묻는다. 화살표는 변화의 방향을 나타내므로 앞뒤를 거꾸로 그리면 다른 변화가 된다는 점을 알려 준다.',
        '물의 변화를 화살표로 그리면 어디에서 어디로 향할까요? 방향이 왜 중요할까요?',
      ],
      acts: [
        {
          id: 'a1', title: '활동 1. 변화와 화살표 이어 보기', minutes: 13, tool: 'mindmap',
          task: '변화 이름과 화살표 그림을 이어요. 알맞은 카드를 골라 칸에 놓아요.',
          teacher: '"증발과 응결의 화살표 방향이 같을까요?" 하고 묻는다. 증발은 물에서 수증기로, 응결은 수증기에서 물로 향하므로 반대라고 말하게 한다. 증발과 응결의 화살표를 서로 바꿔 그리는 학생에게는 처음 모습을 말하게 한 뒤 화살표 끝에 놓게 한다.',
          levels: CARDS_LV,
          items: [
            { prompt: '변화와 알맞은 화살표를 이어 보세요. 남는 카드는 그대로 둬요.',
              toolOptions: { mode: 'match', topic: '변화와 화살표', slots: [{ id: 's1', label: '물이 얼 때' }, { id: 's2', label: '얼음이 녹을 때' }, { id: 's3', label: '물이 증발할 때' }, { id: 's4', label: '수증기가 응결할 때' }],
                cards: [{ id: 'a', big: '물→얼음' }, { id: 'b', big: '얼음→물' }, { id: 'c', big: '물→수증기' }, { id: 'd', big: '수증기→물' }, { id: 'e', big: '수증기→얼음', why: '이 단원에서 배우는 다섯 가지 변화에는 없어요.' }] },
              target: { match: { s1: 'a', s2: 'b', s3: 'c', s4: 'd' } }, difficulty: 0.25, wide: true,
              predict: { q: '수증기가 응결하면 무엇이 될까요?', options: ['물', '얼음', '잘 모르겠어요'], answer: 0 },
              conclude: '증발은 물에서 수증기로, 응결은 수증기에서 물로 향해요. 방향이 반대예요.' },
            { prompt: '변화를 일으키는 방법과 화살표를 이어 보세요.',
              toolOptions: { mode: 'match', topic: '일으키는 방법', slots: [{ id: 's1', label: '물을 차갑게 하면' }, { id: 's2', label: '얼음을 따뜻하게 하면' }, { id: 's3', label: '물을 뜨겁게 하면' }],
                cards: [{ id: 'a', big: '물→얼음' }, { id: 'b', big: '얼음→물' }, { id: 'c', big: '물→수증기' }, { id: 'e', big: '물→물', why: '온도가 바뀌면 물의 상태도 달라져요.' }] },
              target: { match: { s1: 'a', s2: 'b', s3: 'c' } }, difficulty: 0.3 },
            { prompt: '화살표의 앞과 뒤가 서로 반대인 짝만 바구니에 넣어 보세요.',
              toolOptions: { mode: 'pick', topic: '반대 변화', basket: '서로 반대인 짝', cards: [
                c('얼녹', '물이 얼음이 되는 것과 얼음이 물이 되는 것'), c('증응', '물이 수증기가 되는 것과 수증기가 물이 되는 것'),
                c('얼증', '물이 얼음이 되는 것과 물이 수증기가 되는 것', '앞 모습이 같고 뒷모습만 다른 변화예요. 서로 반대가 아니에요.')] },
              target: { pick: ['얼녹', '증응'] }, difficulty: 0.3 },
          ],
        },
        {
          id: 'a2', title: '활동 2. 열을 주고 빼는 순서 놓기', minutes: 12, tool: 'story',
          task: '변화가 일어나는 차례대로 카드를 놓아요. 카드를 끌거나 눌러 고른 뒤 칸을 눌러요.',
          teacher: '"얼음을 계속 따뜻하게 하면 어떤 차례로 변할까요?" 하고 묻는다. 얼음, 물, 수증기의 차례를 말하게 하고 반대로 식히면 순서가 거꾸로 된다고 정리한다. 얼음이 바로 수증기가 된다고 말하는 학생에게는 이 단원에서는 물을 거쳐 변하는 것만 다룬다고 짚는다.',
          levels: CARDS_LV,
          items: [
            { prompt: '얼음을 계속 따뜻하게 할 때 변하는 차례대로 놓아 보세요.',
              toolOptions: { mode: 'order', slots: ['처음', '가운데', '마지막'], cards: [c('얼음', '얼음'), c('물', '물'), c('수증기', '수증기')] },
              target: { order: ['얼음', '물', '수증기'] }, difficulty: 0.15 },
            { prompt: '수증기를 계속 차갑게 할 때 변하는 차례대로 놓아 보세요.',
              toolOptions: { mode: 'order', slots: ['처음', '가운데', '마지막'], cards: [c('수증기', '수증기'), c('물', '물'), c('얼음', '얼음')] },
              target: { order: ['수증기', '물', '얼음'] }, difficulty: 0.2 },
            { prompt: '화살표 설명의 빈칸을 채워 보세요.',
              toolOptions: { mode: 'fill', slots: [{ id: 'f1', label: '얼음이 녹으면 얼음에서 ___로 바뀌어요.' }, { id: 'f2', label: '증발은 물에서 ___로 바뀌는 변화예요.' }, { id: 'f3', label: '응결은 ___에서 물로 바뀌는 변화예요.' }],
                cards: [c('물', '물'), c('수증기', '수증기'), c('수증기2', '수증기'), c('얼음', '얼음')] },
              target: { fill: { f1: '물', f2: '수증기', f3: '수증기2' } }, difficulty: 0.28 },
          ],
        },
      ],
      wrap: [
        '"화살표를 그릴 때 가장 조심할 것은 무엇일까요?" 하고 묻는다. 처음 모습에서 나중 모습으로 향하게 그리고 방향을 거꾸로 그리면 다른 변화가 된다는 말이 나오게 한다. 출구 2번을 틀린 학생에게는 처음 모습을 먼저 말하게 한다.',
        [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '화살표 잇기', slots: [{ id: 's1', label: '얼음이 녹을 때' }, { id: 's2', label: '수증기가 응결할 때' }], cards: [{ id: 'a', big: '얼음→물' }, { id: 'b', big: '수증기→물' }, { id: 'c', big: '물→수증기' }] }, prompt: '변화와 화살표를 이어 보세요.', target: { match: { s1: 'a', s2: 'b' } }, difficulty: 0.22 },
          { type: 'choice', prompt: '증발을 나타낸 화살표는 어느 것일까요?', options: ['물 → 수증기', '수증기 → 물', '물 → 얼음'], answer: 0, difficulty: 0.22, explain: '증발은 물이 수증기로 바뀌는 변화라서 물에서 수증기로 향해요.' },
          { type: 'choice', prompt: '"수증기 → 물"은 어떤 변화일까요?', options: ['응결', '증발', '얼음이 녹는 것'], answer: 0, difficulty: 0.28, explain: '수증기가 물이 되는 변화를 응결이라고 해요.' },
        ],
      ],
      ws: {
        title: '물의 변화 화살표 그림',
        items: [
          { type: 'table', prompt: '변화 이름과 화살표를 완성하세요.', columns: ['변화', '화살표(앞 → 뒤)'], cells: [['물이 얼 때', '물 → '], ['얼음이 녹을 때', ' → 물'], ['물이 증발하거나 끓을 때', ''], ['수증기가 응결할 때', '']], answer: '물 → 얼음 / 얼음 → 물 / 물 → 수증기 / 수증기 → 물' },
          { type: 'choice', prompt: '응결을 나타낸 화살표에 ○ 하세요.', options: ['물 → 수증기', '수증기 → 물'], answer: '수증기 → 물' },
          { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '증발은 물이 ___로 바뀌는 것이고, 응결은 수증기가 ___이 되는 것이에요.', answer: '수증기, 물' },
          { type: 'draw', prompt: '얼음, 물, 수증기를 그리고 변화의 방향을 화살표로 이어 그려 보세요.' },
        ],
        easy: { note: '화살표는 처음 모습에서 나중 모습으로 향해요.', items: [
          { type: 'choice', prompt: '물이 얼음이 되는 화살표에 ○ 하세요.', options: ['물 → 얼음', '얼음 → 물'], answer: '물 → 얼음' },
          { type: 'choice', prompt: '얼음이 녹는 화살표에 ○ 하세요.', options: ['물 → 얼음', '얼음 → 물'], answer: '얼음 → 물' },
          { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '수증기가 물이 되는 것을 ___이라고 해요.', answer: '응결' },
          { type: 'draw', prompt: '얼음이 물이 되는 모습을 화살표와 함께 그려 보세요.' }] },
      },
      diff: {
        easy: '맞는 칸에 놓으면 초록 테두리가 생기고, 틀리면 까닭을 말해 줘요.',
        base: '네 가지 변화를 화살표와 스스로 잇고 순서를 놓아요.',
        challenge: '수증기에서 바로 얼음이 되는 함정 카드와 반대 변화 짝 고르기 문항이 있어요.',
      },
      notes: '준비물: 활동지, 색연필(가열은 빨강, 냉각은 파랑 화살표). 자주 보이는 어려움: ① 증발과 응결의 화살표 방향을 서로 바꿔 그린다 → 처음 모습을 먼저 말하게 한 뒤 화살표 끝에 나중 모습을 놓게 한다. ② 화살표를 한 방향으로만 그려 되돌아가는 변화를 빠뜨린다 → 반대 방향 화살표가 있는지 찾아보게 한다.',
    }),

    // ───────────────────────── 7차시 (core) ─────────────────────────
    L(7, {
      title: '물을 얼려 높이를 표시하고 얼기 전후 재어 견주기',
      standards: S2,
      objective: '시험관 속 물의 높이를 표시한 뒤 얼린 얼음 기둥의 높이를 재어 견주고, 물이 얼면 부피가 늘어남을 근거로 말할 수 있다.',
      pic: 'two clear paper test tubes side by side, one with a pen mark on the water level and the other with an ice column rising above the same mark, with a small ruler between them',
      layers: [
        { motif: 'hills', y: 240, color: 'sky' }, { motif: 'sun', x: 62, y: 54, s: 0.7 }, { motif: 'cloud', x: 398, y: 52 },
        { motif: 'snow', x: 360, y: 150, s: 0.7 }, { motif: 'wave', y: 232 },
        { motif: 'text', x: 240, y: 108, text: '얼면 높이가 달라질까?', size: 24 },
      ],
      safety: ['유리 시험관은 얼면 깨질 수 있어요. 플라스틱 투명 컵이나 투명 통을 쓰고, 물은 가득 채우지 않아요.', '얼린 통을 꺼낸 뒤 오래 만지지 않아요. 손이 너무 차가워질 수 있어요.', '냉동실은 선생님과 함께 열고 닫아요.'],
      intro: [
        '물을 가득 담은 병을 냉동실에 넣어 둔 적이 있는지 묻고 "물이 얼면 높이가 변할까요? 무게도 변할까요?" 하고 묻는다. 부피와 무게를 섞어 말하는 학생이 있으니 두 가지를 칠판에 따로 적고 오늘은 높이, 곧 부피만 재어 본다고 알린다.',
        '물이 얼음이 되면 높이가 어떻게 달라질까요? 먼저 예상하고 재어 확인해 봐요.',
      ],
      acts: [
        {
          id: 'a1', title: '활동 1. 실험 순서와 조건 정하기', minutes: 8, tool: 'story',
          task: '실험 순서 카드를 차례대로 놓아요. 카드를 끌거나 눌러 고른 뒤 칸을 눌러요.',
          teacher: '"물의 처음 높이를 표시하지 않고 얼리면 얼린 뒤 높이를 어떻게 비교할 수 있을까요?" 하고 묻는다. 처음 높이를 펜으로 표시해야 한다는 말이 나오게 한다. 표시 없이 눈대중으로 비교하려는 학생에게는 처음 모습을 기억만으로 비교하는 일이 얼마나 믿기 어려운지 말하게 한다.',
          levels: CARDS_LV,
          items: [
            { prompt: '물이 얼 때의 높이 변화를 알아보는 실험 순서를 차례대로 놓아 보세요.',
              toolOptions: { mode: 'order', slots: ['처음', '둘째', '셋째', '마지막'], cards: [
                c('물', '투명 통에 물을 알맞게 담아요'), c('표시', '물의 높이를 펜으로 표시하고 자로 재요'), c('얼림', '냉동실에 넣어 얼려요'), c('재기', '언 뒤 높이를 재어 처음과 견줘요')] },
              target: { order: ['물', '표시', '얼림', '재기'] }, difficulty: 0.2 },
            { prompt: '실험을 믿을 수 있게 하는 조건만 바구니에 넣어 보세요.',
              toolOptions: { mode: 'pick', topic: '실험 조건', basket: '알맞은 조건', cards: [
                c('같은통', '같은 모양의 통을 써요'), c('표시', '처음 높이를 표시해요'),
                c('눈대중', '처음 높이를 기억만으로 비교해요', '표시하고 자로 재어야 믿을 수 있어요.'), c('가득', '물을 통에 가득 채워 얼려요', '가득 채우면 얼 때 통이 깨질 수 있어요.')] },
              target: { pick: ['같은통', '표시'] }, difficulty: 0.25 },
            { prompt: '결과를 기록하고 결론을 쓰는 순서예요. 차례대로 놓아 보세요.',
              toolOptions: { mode: 'order', slots: ['처음', '가운데', '마지막'], cards: [
                c('적기', '처음과 언 뒤의 높이를 표에 적어요'), c('견줘', '두 값을 견주어 높아졌는지 낮아졌는지 봐요'), c('결론', '결과를 한 문장으로 써요')] },
              target: { order: ['적기', '견줘', '결론'] }, difficulty: 0.22 },
          ],
        },
        {
          id: 'a2', title: '활동 2. 자로 얼기 전후 높이 재기', minutes: 9, tool: 'measure',
          task: '물기둥과 얼음 기둥의 높이를 자로 읽어요. 답 칸을 ↑↓ 단추로 맞춰요. 이 값들은 실험 예시 값이에요.',
          teacher: '"자의 1 cm에서 시작한 기둥은 끝 눈금을 그대로 읽어도 될까요?" 하고 묻는다. 시작한 눈금과 끝 눈금의 차를 구하게 한다. 얼기 전보다 얼은 뒤의 값이 커진 것을 직접 읽으며 높이가 달라졌다는 말이 나오게 한다.',
          levels: { easy: { mode: 'ruler', max: 15, mm: false }, base: { mode: 'ruler', max: 15 }, challenge: { mode: 'ruler', max: 15 } },
          items: [
            { prompt: '얼리기 전 투명 통의 물기둥 높이예요. 높이는 몇 cm인가요?', toolOptions: { object: { name: '물기둥', len: 11 } }, target: { read: 11 }, difficulty: 0.1 },
            { prompt: '같은 통을 얼린 뒤 얼음 기둥의 높이예요. 자의 1 cm 눈금부터 재었어요. 높이는 몇 cm인가요?', toolOptions: { object: { name: '얼음 기둥', len: 12, start: 1 } }, target: { read: 12 }, difficulty: 0.2 },
            { prompt: '다른 통에서 얼리기 전 물기둥의 높이예요. 높이는 몇 cm인가요?', toolOptions: { object: { name: '다른 통 물기둥', len: 8 } }, target: { read: 8 }, difficulty: 0.15,
              levels: { challenge: { toolOptions: { object: { name: '다른 통 물기둥', len: 8, start: 2 } }, prompt: '다른 통에서 얼리기 전 물기둥의 높이예요. 자의 2 cm부터 재었어요. 높이는 몇 cm인가요?', target: { read: 8 } } },
              conclude: '얼린 뒤의 높이가 얼리기 전보다 높아졌어요. 물이 얼면 부피가 늘어나요.' },
          ],
        },
        {
          id: 'a3', title: '활동 3. 부피와 무게 가려 말하기', minutes: 8, tool: 'mindmap',
          task: '말을 읽고 부피에 대한 것인지 무게에 대한 것인지 나누어요. 카드를 눌러 고른 뒤 칸을 눌러요.',
          teacher: '"물이 얼 때 높이가 높아졌다면 무게도 늘었을까요?" 하고 묻는다. 높이는 부피에 대한 것이고, 물이 얼어도 물의 양은 그대로이므로 무게는 변하지 않는다고 알려 준다. 부피가 늘었으니 더 무거워졌다고 말하는 학생에게는 얼음을 녹여 같은 저울에 올려 보게 한다.',
          levels: CARDS_LV,
          items: [
            { prompt: '물이 얼 때 일어나는 일을 부피와 무게로 나누어 보세요.',
              toolOptions: { mode: 'sort', topic: '얼 때 달라진 것', slots: ['달라져요(부피)', '그대로예요(무게)'], cards: [
                c('높이', '통 속 높이가 높아져요'), c('가벼', '저울 눈금은 그대로예요'), c('차지', '차지하는 공간이 커져요'), c('양', '물의 양은 변하지 않아요')] },
              target: { sort: { '달라져요(부피)': ['높이', '차지'], '그대로예요(무게)': ['가벼', '양'] } }, difficulty: 0.25 },
            { prompt: '얼음이 녹으면 어떻게 되는지 이어 보세요. 남는 카드는 그대로 둬요.',
              toolOptions: { mode: 'match', topic: '녹을 때', slots: [{ id: 's1', label: '얼음이 물이 되면 부피는' }, { id: 's2', label: '얼음이 물이 되면 무게는' }],
                cards: [c('줄어', '줄어들어요'), c('그대', '그대로예요'), c('늘어', '늘어나요', '얼음이 물이 되면 부피는 줄어들어요.')] },
              target: { match: { s1: '줄어', s2: '그대' } }, difficulty: 0.3 },
            { prompt: '물이 얼 때에 대해 맞게 말한 카드만 바구니에 넣어 보세요.',
              toolOptions: { mode: 'pick', topic: '얼 때', basket: '맞는 말', cards: [
                c('부피', '물이 얼면 부피가 늘어나요'), c('양', '물이 얼어도 물의 양은 변하지 않아요'),
                c('무거워', '부피가 늘어났으니 더 무거워져요', '무게는 그대로예요. 부피와 무게는 달라요.'), c('줄', '물이 얼면 부피가 줄어들어요', '물이 얼면 부피가 늘어나요.')] },
              target: { pick: ['부피', '양'] }, difficulty: 0.3 },
          ],
        },
      ],
      wrap: [
        '"도입에서 부피와 무게를 섞어 말한 친구가 있었어요. 오늘 실험으로 어떻게 나누어 말할 수 있나요?" 하고 묻는다. 물이 얼면 부피는 늘어나지만 양은 그대로이므로 무게는 변하지 않는다고 정리한다. 출구 3번을 틀린 학생에게는 활동 3의 두 칸을 다시 읽게 한다.',
        [
          { type: 'tool', tool: 'measure', options: { mode: 'ruler', max: 15, object: { name: '얼음 기둥', len: 9.8, start: 1 } }, prompt: '자의 1 cm 눈금부터 재었어요. 얼음 기둥의 높이는 몇 cm 몇 mm인가요?', target: { read: 9.8 }, difficulty: 0.28 },
          { type: 'choice', prompt: '물을 얼렸더니 통 속 높이가 처음 표시보다 높아졌어요. 이 일로 알 수 있는 것은 무엇일까요?', options: ['물이 얼면 부피가 늘어나요', '물이 얼면 부피가 줄어들어요', '물이 얼면 무게가 늘어나요'], answer: 0, difficulty: 0.22, explain: '높이가 높아진 것은 부피가 늘어났다는 뜻이에요. 무게는 그대로예요.' },
          { type: 'choice', prompt: '물을 얼려도 변하지 않는 것은 무엇일까요?', options: ['물의 양(무게)', '차지하는 공간', '통 속 높이'], answer: 0, difficulty: 0.3, explain: '얼어도 물의 양은 그대로라 무게는 변하지 않아요. 높이와 차지하는 공간은 달라져요.' },
        ],
      ],
      ws: {
        title: '물이 얼 때 높이 변화',
        items: [
          { type: 'table', prompt: '얼기 전과 언 뒤의 높이를 재어 적고 견주세요. 값은 예시예요.', columns: ['때', '높이', '견주기(높아짐·낮아짐·같음)'], cells: [['얼리기 전', '11 cm', ''], ['언 뒤', '', '']], answer: '언 뒤 12 cm, 높아짐 (값은 예시)' },
          { type: 'figure', prompt: '얼음 기둥의 높이를 자로 읽어 쓰세요.', tool: 'measure', options: { mode: 'ruler', max: 15 }, figures: [
            { options: { object: { name: '얼음 기둥', len: 12.4 } }, caption: '___ cm ___ mm' }, { options: { object: { name: '물기둥', len: 9, start: 2 } }, caption: '___ cm' }], answer: '12 cm 4 mm, 9 cm' },
          { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '물이 얼면 ___는 늘어나지만 물의 양은 그대로라서 ___는 변하지 않아요.', answer: '부피, 무게' },
          { type: 'short', prompt: '"물이 얼면 부피가 늘어났으니 더 무거워진다."는 말을 고쳐 써 보세요.', answer: '물이 얼면 부피는 늘어나지만 물의 양은 그대로라서 무게는 변하지 않는다.' },
        ],
        easy: { note: '얼리기 전 높이를 먼저 표시해요. 언 뒤 높이와 견주어요.', items: [
          { type: 'figure', prompt: '물기둥의 높이를 읽어 쓰세요.', tool: 'measure', options: { mode: 'ruler', max: 15, mm: false }, figures: [{ options: { object: { name: '물기둥', len: 10 } }, caption: '___ cm' }], answer: '10 cm' },
          { type: 'choice', prompt: '물이 얼면 높이는 어떻게 되나요?', options: ['높아져요', '낮아져요'], answer: '높아져요' },
          { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '물이 얼면 부피가 ___져요.', answer: '커' },
          { type: 'draw', prompt: '얼기 전과 언 뒤의 높이를 두 개의 통으로 그려 보세요.' }] },
      },
      diff: {
        easy: '순서 카드에 칸 이름이 있고, 높이는 cm 눈금만 있는 자로 읽어요.',
        base: '실험 순서를 스스로 세우고 높이는 mm까지 읽어요.',
        challenge: '자가 0이 아닌 눈금에서 시작하고, 무게와 부피를 섞은 함정 카드가 있어요.',
      },
      notes: '준비물(모둠): 플라스틱 투명 통(작은 것), 물, 네임펜, 30 cm 자, 냉동실. 유리 시험관은 얼면 깨질 수 있어 쓰지 않는다. 물은 통의 7부분쯤만 채워 얼 때 늘어날 자리를 남긴다. 수치는 실험 예시 값이다(실제로 물이 얼면 부피가 약 9% 늘어난다). 자주 보이는 어려움: ① 부피와 무게를 섞어 말한다 → 따로 적는다. ② 처음 높이를 표시하지 않아 비교하지 못한다 → 표시 뒤에 얼린다.',
    }),

    // ───────────────────────── 8차시 (core) ─────────────────────────
    L(8, {
      title: '바닷물에서 마실 물을 얻으려면 어떤 변화를 이용할까',
      standards: S3,
      objective: '바닷물에서 물을 얻는 장치에서 증발과 응결이 어떤 차례로 일어나는지 말하고, 소금은 수증기가 되지 않고 남는다는 것을 근거로 설명할 수 있다.',
      pic: 'a sunny seaside with a shallow paper bowl of seawater covered by a clear dome, tiny droplets running down the dome into a small cup, and a few white salt crystals left in the bowl',
      layers: [
        { motif: 'sun', x: 410, y: 56, s: 0.9 }, { motif: 'cloud', x: 120, y: 52 }, { motif: 'wave', y: 214 },
        { motif: 'hills', y: 240, color: 'buttercup' }, { motif: 'bird', x: 280, y: 84 },
        { motif: 'text', x: 240, y: 126, text: '바닷물이 마실 물로?', size: 24 },
      ],
      intro: [
        '"바닷물은 짜서 마실 수 없어요. 바다에서 마실 물을 얻을 수 있을까요?" 하고 묻는다. 끓이면 소금도 같이 수증기가 된다고 말하는 학생이 있으면 칠판에 적어 두고, 오늘 증발과 응결의 차례를 따져 확인하자고 한다.',
        '바닷물에서 마실 물을 얻으려면 물이 어떻게 바뀌어야 할까요?',
      ],
      acts: [
        {
          id: 'a1', title: '활동 1. 장치에서 일어나는 변화 이어 보기', minutes: 13, tool: 'mindmap',
          task: '장치의 장면과 일어나는 변화를 이어요. 알맞은 카드를 골라 칸에 놓아요.',
          teacher: '"햇빛을 받은 바닷물에서는 어떤 일이 일어날까요? 비닐랩 안쪽의 물방울은요?" 하고 묻는다. 바닷물의 물이 증발해 수증기가 되고, 수증기가 차가운 비닐랩에 닿아 응결해 물방울이 된다는 차례로 정리한다. 응결을 증발과 섞어 말하는 학생에게는 수증기가 물이 되는 쪽인지 되묻는다.',
          levels: CARDS_LV,
          items: [
            { prompt: '장치에서 일어나는 일과 그 변화를 이어 보세요. 남는 카드는 그대로 둬요.',
              toolOptions: { mode: 'match', topic: '장치 속 변화', slots: [{ id: 's1', label: '햇빛을 받은 바닷물이 줄어들어요' }, { id: 's2', label: '비닐랩 안쪽에 물방울이 맺혀요' }],
                cards: [c('증발', '물이 수증기로 바뀌는 증발'), c('응결', '수증기가 물로 바뀌는 응결'), c('얼음', '물이 얼음으로 바뀌는 어는 변화', '이 장치에서는 얼음이 만들어지지 않아요.')] },
              target: { match: { s1: '증발', s2: '응결' } }, difficulty: 0.22,
              predict: { q: '바닷물이 햇빛을 받으면 물은 어떻게 될까요?', options: ['증발해 수증기가 돼요', '얼음이 돼요', '잘 모르겠어요'], answer: 0 },
              conclude: '증발한 수증기가 차가운 곳에 닿아 응결하면 물을 모을 수 있어요.' },
            { prompt: '마실 물을 얻는 장치에서 변화가 일어나는 차례대로 놓아 보세요.',
              toolOptions: { mode: 'order', slots: ['처음', '둘째', '셋째', '마지막'], cards: [
                c('햇빛', '햇빛을 받아 바닷물이 따뜻해져요'), c('증발', '바닷물의 물이 증발해 수증기가 돼요'), c('응결', '수증기가 비닐랩에 닿아 물방울이 돼요'), c('모임', '물방울이 흘러내려 컵에 모여요')] },
              target: { order: ['햇빛', '증발', '응결', '모임'] }, difficulty: 0.28 },
            { prompt: '장치에서 물을 더 잘 모으는 방법만 바구니에 넣어 보세요.',
              toolOptions: { mode: 'pick', topic: '더 잘 모으기', basket: '좋은 방법', cards: [
                c('햇빛', '햇빛이 잘 드는 곳에 둬요'), c('차갑게', '비닐랩 위를 시원하게 해 수증기가 물이 되기 쉽게 해요'),
                c('그늘', '어두운 그늘에 두어요', '해가 안 들면 증발이 잘 일어나지 않아요.'), c('구멍', '비닐랩에 구멍을 뚫어요', '구멍으로 수증기가 빠져나가요.')] },
              target: { pick: ['햇빛', '차갑게'] }, difficulty: 0.3 },
          ],
        },
        {
          id: 'a2', title: '활동 2. 소금은 어디에 남을까', minutes: 12, tool: 'mindmap',
          task: '바닷물에 들어 있는 것이 장치에서 어떻게 되는지 알맞게 나누어요. 카드를 눌러 고른 뒤 칸을 눌러요.',
          teacher: '"증발한 수증기에도 소금이 들어 있을까요?" 하고 묻는다. 물이 수증기가 될 때 녹아 있던 소금은 함께 수증기가 되지 않고 그릇에 남는다고 알려 준다. 끓이면 소금도 수증기가 된다고 말하는 학생에게는 증발한 뒤 그릇 바닥에 하얀 알갱이가 남는 모습을 떠올리게 한다.',
          levels: CARDS_LV,
          items: [
            { prompt: '바닷물에서 물이 증발한 뒤 어디에 있는지 나누어 보세요.',
              toolOptions: { mode: 'sort', topic: '증발한 뒤', slots: ['컵에 모인 물에 있어요', '그릇 바닥에 남아요'], cards: [
                c('물방울', '비닐랩에서 흘러내린 깨끗한 물'), c('소금', '바닷물에 녹아 있던 소금'), c('수증기물', '응결해 컵에 떨어진 물방울'), c('찌꺼기', '바닷물 속에 있던 모래 알갱이')] },
              target: { sort: { '컵에 모인 물에 있어요': ['물방울', '수증기물'], '그릇 바닥에 남아요': ['소금', '찌꺼기'] } }, difficulty: 0.28 },
            { prompt: '바닷물로 마실 물을 얻는 일에 대해 맞게 말한 카드만 바구니에 넣어 보세요.',
              toolOptions: { mode: 'pick', topic: '바닷물과 소금', basket: '맞는 말', cards: [
                c('남음', '물만 수증기가 되고 소금은 그릇에 남아요'), c('깨끗', '응결해서 모은 물에는 소금이 거의 없어요'),
                c('같이', '끓이면 소금도 수증기가 되어 올라가요', '물만 수증기가 되고 소금은 남아요.'), c('얼음', '바닷물을 얼리면 마실 물이 바로 생겨요', '이 단원의 장치는 증발과 응결을 이용해요.')] },
              target: { pick: ['남음', '깨끗'] }, difficulty: 0.3 },
            { prompt: '장치의 빈칸을 채워 보세요.',
              toolOptions: { mode: 'fill', slots: [{ id: 'f1', label: '바닷물의 물이 ___해 수증기가 돼요.' }, { id: 'f2', label: '수증기가 차가운 비닐랩에서 ___해 물방울이 돼요.' }],
                cards: [c('증발', '증발'), c('응결', '응결'), c('얼음', '얼음')] },
              target: { fill: { f1: '증발', f2: '응결' } }, difficulty: 0.25 },
          ],
        },
      ],
      wrap: [
        '"바닷물로 마실 물을 얻을 때 물은 어떤 차례로 변했나요?" 하고 묻는다. 증발해 수증기가 되고 차가운 곳에서 응결해 물이 된다는 말이 나오게 한다. 출구 2번을 틀린 학생에게는 소금이 수증기가 되는지 되짚어 그릇 바닥에 남는 모습을 떠올리게 한다.',
        [
          { type: 'tool', tool: 'story', options: { mode: 'order', slots: ['처음', '가운데', '마지막'], cards: [c('a', '소금물의 물이 증발해요'), c('b', '수증기가 차가운 곳에서 응결해요'), c('c', '물이 모여 컵에 떨어져요')] }, prompt: '변화가 일어나는 차례대로 놓아 보세요.', target: { order: ['a', 'b', 'c'] }, difficulty: 0.22 },
          { type: 'choice', prompt: '소금물을 증발시켰더니 접시에 하얀 알갱이가 남았어요. 이 알갱이는 무엇일까요?', options: ['소금', '얼음', '수증기'], answer: 0, difficulty: 0.25, explain: '물만 수증기가 되고 소금은 증발하지 않고 접시에 남아요.' },
          { type: 'choice', prompt: '장치에서 모은 물에 소금이 거의 없는 까닭은 무엇일까요?', options: ['물만 수증기가 되고 소금은 남기 때문이에요', '소금이 얼음이 되기 때문이에요', '소금이 모두 사라지기 때문이에요'], answer: 0, difficulty: 0.3, explain: '소금은 수증기가 되지 않고 그릇에 남아요.' },
        ],
      ],
      ws: {
        title: '물을 얻는 장치와 상태 변화',
        items: [
          { type: 'table', prompt: '장치에서 일어나는 일과 이용한 변화를 쓰세요.', columns: ['일어나는 일', '이용한 변화'], cells: [['바닷물이 햇빛에 줄어들어요', ''], ['비닐랩 안쪽에 물방울이 맺혀요', ''], ['모인 물에는 소금이 거의 없어요', '소금은 수증기가 되지 않음']], answer: '증발 / 응결' },
          { type: 'choice', prompt: '비닐랩 안쪽에 물방울이 생기는 변화에 ○ 하세요.', options: ['증발', '응결'], answer: '응결' },
          { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '바닷물에서 물이 ___해 수증기가 되고, 수증기가 차가운 곳에서 ___해 물이 돼요.', answer: '증발, 응결' },
          { type: 'short', prompt: '"끓이면 소금도 같이 수증기가 된다."는 말을 고쳐 써 보세요.', answer: '물만 수증기가 되고 소금은 증발하지 않고 그릇에 남는다.' },
        ],
        easy: { note: '증발한 수증기가 차가운 곳에서 응결해 물이 돼요. 소금은 남아요.', items: [
          { type: 'choice', prompt: '물방울이 맺히는 변화에 ○ 하세요.', options: ['응결', '증발'], answer: '응결' },
          { type: 'choice', prompt: '소금은 어디에 남나요?', options: ['그릇', '컵'], answer: '그릇' },
          { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '물이 수증기가 되는 것을 ___이라고 해요.', answer: '증발' },
          { type: 'draw', prompt: '바닷물에서 물을 얻는 장치를 그려 보세요.' }] },
      },
      diff: {
        easy: '카드에 변화의 이름이 함께 보이고, 맞게 놓으면 초록 테두리가 생겨요.',
        base: '장치 속 변화를 스스로 잇고 소금이 어디에 남는지 나눠요.',
        challenge: '끓이면 소금도 수증기가 된다는 함정 카드와 얼음을 이용한다는 함정 카드가 있어요.',
      },
      notes: '준비물: 소금물, 접시, 투명 컵, 비닐랩, 햇빛 또는 스탠드. 소금물은 맛을 보지 않는다. 자주 보이는 어려움: ① 끓이면 소금도 같이 수증기가 된다고 여긴다 → 접시 바닥에 남은 하얀 알갱이를 보여 준다. ② 증발과 응결의 차례를 섞는다 → 먼저 물이 수증기가 되고 그다음 수증기가 물이 된다.',
    }),

    // ───────────────────────── 9차시 (core) ─────────────────────────
    L(9, {
      title: '장치 설계도에 물이 지나는 길을 화살표로 그리기',
      standards: S3,
      objective: '물을 얻는 장치의 설계도에 물이 수증기가 되었다가 다시 모이는 길을 화살표로 나타내고, 각 부분의 이름과 하는 일을 적을 수 있다.',
      pic: 'a paper design sketch of a bowl with a small cup in the middle covered by clear plastic film, curved arrows showing water rising and dripping down, and tiny name tags pointing to each part',
      layers: [
        { motif: 'hills', y: 240, color: 'rose' }, { motif: 'sun', x: 410, y: 54, s: 0.8 }, { motif: 'cloud', x: 100, y: 52 },
        { motif: 'wave', y: 232 }, { motif: 'star', x: 340, y: 150, s: 0.6 },
        { motif: 'text', x: 240, y: 112, text: '물이 지나는 길을 그려요', size: 22 },
      ],
      intro: [
        '컵과 비닐랩이 그려진 설계도를 칠판에 그리고 화살표를 일부러 빼 둔 채 "이 그림만 보고 물이 어디서 어디로 가는지 알 수 있을까요?" 하고 묻는다. 겉모습만 그린 설계도로는 물이 지나는 길을 알 수 없으므로 화살표와 이름표가 꼭 필요하다고 알려 준다.',
        '물을 얻는 장치의 설계도에 무엇을 그려야 물이 지나는 길을 알 수 있을까요?',
      ],
      acts: [
        {
          id: 'a1', title: '활동 1. 물이 지나는 길 순서 놓기', minutes: 13, tool: 'story',
          task: '물이 지나는 길의 카드를 차례대로 놓아요. 카드를 끌거나 눌러 고른 뒤 칸을 눌러요.',
          teacher: '"설계도에 화살표를 그린다면 첫 화살표는 어디에서 어디로 향할까요?" 하고 묻는다. 그릇의 물에서 위로, 비닐랩으로, 아래로 흘러 컵으로 가는 길을 따라가게 한다. 화살표를 컵에서 그릇으로 거꾸로 그리는 학생에게는 물방울이 흘러내리는 방향을 손으로 따라가게 한다.',
          levels: CARDS_LV,
          items: [
            { prompt: '장치에서 물이 지나는 길을 차례대로 놓아 보세요.',
              toolOptions: { mode: 'order', slots: ['처음', '둘째', '셋째', '마지막'], cards: [
                c('그릇', '큰 그릇의 소금물'), c('수증기', '위로 올라가는 수증기'), c('물방울', '비닐랩 안쪽의 물방울'), c('컵', '가운데 작은 컵에 모인 물')] },
              target: { order: ['그릇', '수증기', '물방울', '컵'] }, difficulty: 0.2 },
            { prompt: '화살표 방향을 이어 보세요. 남는 카드는 그대로 둬요.',
              toolOptions: { mode: 'match', topic: '화살표', slots: [{ id: 's1', label: '증발할 때의 화살표' }, { id: 's2', label: '물방울이 흘러내릴 때의 화살표' }],
                cards: [{ id: 'up', big: '↑', text: '위로 올라가요' }, { id: 'down', big: '↓', text: '아래로 내려가요' }, { id: 'side', big: '→', text: '옆으로 가요', why: '이 장치에서는 위로 올라갔다 아래로 내려와요.' }] },
              target: { match: { s1: 'up', s2: 'down' } }, difficulty: 0.22 },
            { prompt: '설계도의 화살표를 그릴 때 알맞은 것만 바구니에 넣어 보세요.',
              toolOptions: { mode: 'pick', topic: '화살표 그리기', basket: '알맞은 것', cards: [
                c('길', '물이 지나가는 길을 따라 그려요'), c('방향', '변화가 일어나는 방향으로 화살표 끝을 그려요'),
                c('멋', '화살표를 크게 그리기만 해요', '화살표는 크기가 아니라 방향이 중요해요.')] },
              target: { pick: ['길', '방향'] }, difficulty: 0.25 },
          ],
        },
        {
          id: 'a2', title: '활동 2. 부분 이름과 하는 일 이어 보기', minutes: 12, tool: 'mindmap',
          task: '장치의 부분과 하는 일을 이어요. 알맞은 카드를 골라 칸에 놓아요.',
          teacher: '"비닐랩은 어떤 일을 할까요? 컵은요?" 하고 묻는다. 비닐랩은 수증기가 모여 물방울이 되는 면, 컵은 물방울이 모이는 곳이라고 정리한다. 부분의 이름만 적고 하는 일을 적지 않는 학생에게는 그 부분이 없으면 어떻게 되는지 물어본다.',
          levels: CARDS_LV,
          items: [
            { prompt: '장치의 부분과 하는 일을 이어 보세요. 남는 카드는 그대로 둬요.',
              toolOptions: { mode: 'match', topic: '부분과 하는 일', slots: [{ id: 's1', label: '큰 그릇' }, { id: 's2', label: '비닐랩' }, { id: 's3', label: '가운데 작은 컵' }],
                cards: [c('바닷물', '소금물을 담아 햇빛에 따뜻해져요'), c('응결면', '수증기가 닿아 물방울이 되는 면이에요'), c('모으기', '흘러내린 물을 받아 모아요'), c('장식', '장치를 예쁘게 꾸며 줘요', '이 장치의 부분은 모두 물을 얻는 일을 해요.')] },
              target: { match: { s1: '바닷물', s2: '응결면', s3: '모으기' } }, difficulty: 0.25 },
            { prompt: '장치에 빠지면 물을 모을 수 없는 부분만 바구니에 넣어 보세요.',
              toolOptions: { mode: 'pick', topic: '꼭 필요한 부분', basket: '꼭 필요한 부분', cards: [
                c('그릇', '물을 담는 큰 그릇'), c('랩', '수증기가 닿아 물방울이 되는 비닐랩'), c('컵', '물방울을 받는 작은 컵'),
                c('리본', '그릇에 두른 예쁜 리본', '리본이 없어도 물을 얻을 수 있어요.')] },
              target: { pick: ['그릇', '랩', '컵'] }, difficulty: 0.25 },
            { prompt: '설계도의 이름표 빈칸을 채워 보세요.',
              toolOptions: { mode: 'fill', slots: [{ id: 'f1', label: '큰 그릇에서 물이 ___해서 수증기가 돼요.' }, { id: 'f2', label: '비닐랩에서 수증기가 ___해서 물방울이 돼요.' }],
                cards: [c('증발', '증발'), c('응결', '응결'), c('얼음', '얼음')] },
              target: { fill: { f1: '증발', f2: '응결' } }, difficulty: 0.28 },
          ],
        },
      ],
      wrap: [
        '"설계도에 화살표와 이름표를 쓰면 무엇이 좋은가요?" 하고 묻는다. 친구가 읽어도 물이 어떤 길로 가는지, 각 부분이 무슨 일을 하는지 알 수 있다는 말이 나오게 한다. 출구 2번을 틀린 학생에게는 물이 위로 올라갔다 아래로 흘러내리는 길을 손으로 따라가게 한다.',
        [
          { type: 'tool', tool: 'story', options: { mode: 'order', slots: ['처음', '가운데', '마지막'], cards: [c('a', '그릇의 물이 수증기로 올라가요'), c('b', '비닐랩에서 물방울이 돼요'), c('c', '물방울이 컵으로 떨어져요')] }, prompt: '물이 지나는 길을 차례대로 놓아 보세요.', target: { order: ['a', 'b', 'c'] }, difficulty: 0.22 },
          { type: 'choice', prompt: '설계도에서 수증기가 올라가는 길을 나타내는 화살표 방향은 어느 쪽일까요?', options: ['위쪽', '아래쪽', '옆쪽'], answer: 0, difficulty: 0.2, explain: '수증기는 위로 올라가 비닐랩에 닿아요.' },
          { type: 'choice', prompt: '비닐랩이 없다면 어떤 일이 일어날까요?', options: ['수증기가 물방울이 되지 못하고 공기 속으로 날아가요', '컵에 물이 더 많이 모여요', '소금이 컵에 떨어져요'], answer: 0, difficulty: 0.28, explain: '비닐랩이 수증기가 닿아 물방울이 되는 면이므로 없으면 물을 모을 수 없어요.' },
        ],
      ],
      ws: {
        title: '물을 얻는 장치 설계도',
        items: [
          { type: 'draw', prompt: '물을 얻는 장치의 설계도를 그리세요. 그릇, 비닐랩, 컵을 그리고 물이 지나는 길을 화살표로 나타내 보세요.' },
          { type: 'table', prompt: '각 부분이 하는 일을 쓰세요.', columns: ['부분', '하는 일'], cells: [['큰 그릇', ''], ['비닐랩', ''], ['가운데 작은 컵', '']], answer: '그릇: 소금물을 담아 햇빛에 따뜻해짐 / 비닐랩: 수증기가 닿아 물방울이 됨 / 컵: 흘러내린 물을 모음' },
          { type: 'choice', prompt: '비닐랩에서 일어나는 변화에 ○ 하세요.', options: ['증발', '응결'], answer: '응결' },
          { type: 'short', prompt: '설계도에 화살표를 그리면 좋은 점을 한 가지 써 보세요.', answer: '물이 어디서 어디로 지나가는지 한눈에 알 수 있다.' },
        ],
        easy: { note: '물은 그릇에서 위로 올라갔다가 비닐랩에서 물이 되어 컵으로 내려와요.', items: [
          { type: 'choice', prompt: '수증기가 올라가는 방향에 ○ 하세요.', options: ['위', '아래'], answer: '위' },
          { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '물방울을 받는 것은 작은 ___이에요.', answer: '컵' },
          { type: 'draw', prompt: '장치의 그릇과 컵을 그리고 화살표 한 개를 그려 보세요.' },
          { type: 'short', prompt: '비닐랩이 하는 일을 써 보세요.' }] },
      },
      diff: {
        easy: '카드에 화살표의 방향이 함께 보이고, 맞게 놓으면 초록 테두리가 생겨요.',
        base: '물의 길을 차례대로 놓고 부분의 하는 일을 스스로 이어요.',
        challenge: '필요 없는 부분을 가려내고, 이름표 빈칸에 변화 이름을 넣어야 해요.',
      },
      notes: '준비물: 설계도 종이, 색연필(수증기 화살표는 빨강, 물방울 화살표는 파랑). 자주 보이는 어려움: ① 겉모습만 그리고 물의 길을 그리지 않는다 → 물방울이 지나는 길을 손가락으로 따라가게 한다. ② 화살표 방향을 거꾸로 그린다 → 증발은 위로, 흘러내림은 아래로. ③ 부분 이름만 적고 하는 일을 적지 않는다 → 이 부분이 없으면 어떻게 되는지 묻는다. 설계도는 10차시에 이어 쓴다.',
    }),

    // ───────────────────────── 10차시 (wrap) ─────────────────────────
    L(10, {
      title: '장치를 만들어 모인 물을 확인하고 단원 정리하기',
      standards: S3,
      objective: '설계도대로 물을 모으는 장치를 만들어 햇빛 아래에 두고 모인 물의 양을 읽어 기록하며, 단원에서 배운 상태 변화를 묶어 말할 수 있다.',
      pic: 'a sunny windowsill with a paper bowl, a small cup and clear film forming a water collecting device, a measuring cup beside it showing a little water, and a child checking a notebook',
      layers: [
        { motif: 'house', x: 100, y: 170, s: 0.8, color: 'peach' }, { motif: 'sun', x: 410, y: 54, s: 0.9 }, { motif: 'cloud', x: 250, y: 50 },
        { motif: 'hills', y: 238, color: 'mint' }, { motif: 'flower', x: 340, y: 198, s: 0.7 },
        { motif: 'text', x: 280, y: 190, text: '모인 물을 확인해요', size: 22 },
      ],
      safety: ['장치를 햇빛 아래에 둘 때 손이 닿는 곳이 뜨거워질 수 있어요. 만지기 전에 선생님께 말해요.', '소금물은 마시지 않아요. 모인 물도 맛보지 않고 눈으로만 확인해요.', '깨지기 쉬운 유리 도구는 쓰지 않고 플라스틱 그릇을 써요.'],
      intro: [
        '9차시에 그린 설계도를 모둠별로 꺼내 보게 하고 "설계도대로 만들면 정말 물이 모일까요? 얼마나 모일까요?" 하고 묻는다. 만든 뒤에는 모인 물의 양을 재어 기록하고, 잘 안 모이면 설계도의 어느 부분을 고칠지 생각하자고 한다.',
        '설계도대로 장치를 만들어 햇빛에 두면 물이 얼마나 모일까요? 직접 확인해 봐요.',
      ],
      acts: [
        {
          id: 'a1', title: '활동 1. 장치 만들기 순서 세우기', minutes: 8, tool: 'story',
          task: '장치를 만드는 순서 카드를 차례대로 놓아요. 카드를 끌거나 눌러 고른 뒤 칸을 눌러요.',
          teacher: '"컵을 그릇 가운데에 먼저 놓아야 할까요, 비닐랩을 먼저 씌워야 할까요?" 하고 묻는다. 컵을 먼저 놓고 비닐랩을 씌운 뒤 가운데에 작은 돌을 올려야 물방울이 컵으로 흐른다고 정리한다. 비닐랩을 팽팽하게만 씌우는 학생에게는 물방울이 컵으로 흘러가려면 가운데가 처져야 한다고 짚는다.',
          levels: CARDS_LV,
          items: [
            { prompt: '장치를 만드는 순서를 차례대로 놓아 보세요.',
              toolOptions: { mode: 'order', slots: ['처음', '둘째', '셋째', '마지막'], cards: [
                c('물', '큰 그릇에 소금물을 담아요'), c('컵', '가운데에 빈 작은 컵을 놓아요'), c('랩', '비닐랩을 씌우고 가운데에 작은 돌을 올려요'), c('햇빛', '햇빛이 드는 곳에 두어요')] },
              target: { order: ['물', '컵', '랩', '햇빛'] }, difficulty: 0.2 },
            { prompt: '비닐랩 가운데에 작은 돌을 올리는 까닭을 이어 보세요. 남는 카드는 그대로 둬요.',
              toolOptions: { mode: 'match', topic: '작은 돌의 일', slots: [{ id: 's1', label: '비닐랩 가운데가 약간 처져요' }, { id: 's2', label: '물방울이 모여 흘러요' }],
                cards: [c('처짐', '돌의 무게로 처지게 해 물방울이 가운데로 모이게 해요'), c('컵으로', '모인 물방울이 아래 컵으로 떨어져요'), c('따뜻', '돌이 바닷물을 따뜻하게 해요', '돌은 물방울이 모이도록 비닐랩을 처지게 하는 일을 해요.')] },
              target: { match: { s1: '처짐', s2: '컵으로' } }, difficulty: 0.28 },
            { prompt: '장치가 잘 작동하도록 하는 방법만 바구니에 넣어 보세요.',
              toolOptions: { mode: 'pick', topic: '잘 작동하게', basket: '좋은 방법', cards: [
                c('틈없이', '그릇 둘레를 비닐랩으로 틈 없이 싸요'), c('햇빛', '햇빛이 잘 드는 창가에 둬요'),
                c('구멍', '비닐랩에 작은 구멍을 내요', '구멍으로 수증기가 빠져나가요.'), c('그늘', '해가 들지 않는 곳에 둬요', '해가 있어야 증발이 잘 일어나요.')] },
              target: { pick: ['틈없이', '햇빛'] }, difficulty: 0.25 },
          ],
        },
        {
          id: 'a2', title: '활동 2. 눈금 그릇으로 모인 물 읽기', minutes: 9, tool: 'measure',
          task: '장치 한 시간 뒤 컵에 모인 물의 양을 눈금 그릇에서 읽어요. 읽은 값을 답 칸에 써요. 이 값들은 실험 예시 값이에요.',
          teacher: '"눈금은 한 칸이 몇 mL일까요? 눈금 사이를 세어 볼까요?" 하고 묻는다. 눈금선의 위치가 아니라 물의 높이를 눈높이에서 읽게 한다. 모인 물이 적다고 실패라고 말하는 학생에게는 한 시간 동안 증발한 양이 적을 수 있고 더 오래 두면 늘어날 수 있다고 알려 준다.',
          levels: { easy: { mode: 'volume' }, base: { mode: 'volume' }, challenge: { mode: 'volume' } },
          items: [
            { prompt: '한 시간 뒤 모인 물이에요. 눈금 그릇의 눈금을 읽어 몇 mL인지 쓰세요.', toolOptions: { mode: 'volume', beakers: [{ v: 30, max: 100, label: '모인 물' }], step: 10, minor: 5 }, target: { read: 30 }, difficulty: 0.15 },
            { prompt: '다른 모둠이 세 시간 뒤 모은 물이에요. 눈금을 읽어 몇 mL인지 쓰세요.', toolOptions: { mode: 'volume', beakers: [{ v: 60, max: 100, label: '모인 물' }], step: 10, minor: 5 }, target: { read: 60 }, difficulty: 0.2 },
            { prompt: '비닐랩에 구멍이 났던 모둠의 물이에요. 눈금을 읽어 몇 mL인지 쓰세요.', toolOptions: { mode: 'volume', beakers: [{ v: 10, max: 100, label: '모인 물' }], step: 10, minor: 5 }, target: { read: 10 }, difficulty: 0.2,
              conclude: '더 오래 두거나 틈 없이 싸면 더 많은 물이 모여요. 값은 모둠마다 달라요.' },
          ],
        },
        {
          id: 'a3', title: '활동 3. 단원 돌아보기', minutes: 8, tool: 'mindmap',
          task: '이 단원에서 배운 것을 알맞은 가지에 놓아요. 카드를 눌러 고른 뒤 칸을 눌러요.',
          teacher: '"이 단원에서 배운 것을 세 갈래로 나누어 볼까요?" 하고 묻는다. 물의 세 가지 상태, 상태 변화, 상태 변화를 이용한 장치로 묶는다. 처음 시간에 하얀 김을 수증기라고 말했던 생각이 어떻게 달라졌는지 말하게 한다.',
          levels: CARDS_LV,
          items: [
            { prompt: '배운 것을 세 가지로 나누어 보세요.',
              toolOptions: { mode: 'sort', topic: '물의 상태 변화', slots: ['물의 세 상태', '상태 변화', '물을 얻는 장치'], cards: [
                c('수증기', '수증기는 눈에 보이지 않아요'), c('입자', '상태마다 입자 사이의 거리가 달라요'), c('증발', '증발은 물이 수증기가 되는 변화예요'), c('응결', '응결은 수증기가 물이 되는 변화예요'), c('랩', '비닐랩에서 응결한 물을 모아요'), c('소금', '소금은 증발하지 않고 남아요')] },
              target: { sort: { '물의 세 상태': ['수증기', '입자'], '상태 변화': ['증발', '응결'], '물을 얻는 장치': ['랩', '소금'] } }, difficulty: 0.28 },
            { prompt: '처음 생각을 고쳐 쓰려고 해요. 맞게 이어 보세요.',
              toolOptions: { mode: 'match', topic: '생각이 바뀌었어요', slots: [{ id: 's1', label: '하얀 김이 수증기라고 생각했어요' }, { id: 's2', label: '증발한 물은 없어진다고 생각했어요' }],
                cards: [c('작은', '하얀 김은 작은 물방울이고 수증기는 눈에 보이지 않아요'), c('남아', '증발한 물은 수증기가 되어 공기 속에 있어요'), c('얼음', '증발한 물은 얼음이 돼요', '증발한 물은 수증기가 돼요.')] },
              target: { match: { s1: '작은', s2: '남아' } }, difficulty: 0.3 },
            { prompt: '이 단원을 마치고 할 수 있게 된 일만 바구니에 넣어 보세요.',
              toolOptions: { mode: 'pick', topic: '할 수 있게 된 일', basket: '할 수 있게 된 일', cards: [
                c('가르기', '물, 얼음, 수증기를 가를 수 있어요'), c('화살표', '다섯 가지 변화를 화살표로 나타낼 수 있어요'), c('장치', '물을 얻는 장치의 길을 설명할 수 있어요'),
                c('전부', '소금도 증발해서 마실 물을 만들 수 있어요', '소금은 증발하지 않고 남아요.')] },
              target: { pick: ['가르기', '화살표', '장치'] }, difficulty: 0.3 },
          ],
        },
      ],
      wrap: [
        '"우리 모둠의 장치에서는 물이 얼마나 모였고, 더 많이 모으려면 무엇을 고치면 좋을까요?" 하고 묻는다. 비닐랩을 틈 없이 싸기, 햇빛이 잘 드는 곳에 두기, 오래 두기처럼 증발과 응결을 도와주는 방법이 나오게 한다. 출구 2번을 틀린 학생에게는 활동 1의 장치가 잘 작동하는 조건을 다시 읽게 한다.',
        [
          { type: 'tool', tool: 'measure', options: { mode: 'volume', beakers: [{ v: 45, max: 100, label: '모인 물' }], step: 10, minor: 5 }, prompt: '눈금 그릇의 눈금을 읽어 모인 물이 몇 mL인지 쓰세요.', target: { read: 45 }, difficulty: 0.28 },
          { type: 'choice', prompt: '물을 더 많이 모으는 방법으로 알맞은 것은 무엇일까요?', options: ['햇빛이 잘 드는 곳에 두고 비닐랩을 틈 없이 싸요', '그늘에 두고 비닐랩에 구멍을 내요', '그릇에서 소금물을 모두 쏟아 내요'], answer: 0, difficulty: 0.22, explain: '햇빛은 증발을 돕고 틈 없이 싸면 수증기가 새지 않아요.' },
          { type: 'short', prompt: '이 단원에서 새로 알게 된 것 한 가지를 써 보세요.' },
        ],
      ],
      ws: {
        title: '장치 결과 기록과 단원 정리',
        items: [
          { type: 'table', prompt: '장치 결과를 기록하세요. 값은 우리 모둠에서 읽은 값이에요.', columns: ['항목', '기록'], cells: [['장치를 둔 시간', ''], ['모인 물의 양', ''], ['더 모으려면 고칠 점', '']], answer: '모둠 기록에 따라 다름. 값과 고칠 점이 이어졌는지 확인' },
          { type: 'figure', prompt: '눈금 그릇의 눈금을 읽어 몇 mL인지 쓰세요.', tool: 'measure', options: { mode: 'volume', step: 10, minor: 5 }, figures: [
            { options: { beakers: [{ v: 35, max: 100, label: '모인 물' }] }, caption: '___ mL' }], answer: '35 mL' },
          { type: 'figure', wide: true, prompt: '가지마다 이 단원에서 배운 것을 한 가지씩 써 넣으세요.', tool: 'mindmap', figures: [{ options: { topic: '물의 상태 변화', printCards: false, slots: ['세 상태', '상태 변화', '장치'], cards: ['보기'] }, caption: '' }], answer: '예: 세 상태 — 얼음·물·수증기 / 상태 변화 — 증발·응결 / 장치 — 비닐랩에서 응결한 물을 모음' },
          { type: 'table', prompt: '나의 단원 점검: 할 수 있으면 ○, 아직이면 △ 하세요.', columns: ['할 수 있는 것', '○ / △'], cells: [['물의 세 가지 상태를 가를 수 있다', ''], ['증발과 응결을 화살표로 나타낼 수 있다', ''], ['물을 얻는 장치의 길을 설명할 수 있다', '']] },
        ],
        easy: { note: '장치에서 물은 증발했다가 응결해 컵에 모여요.', items: [
          { type: 'choice', prompt: '비닐랩에서 물방울이 되는 변화에 ○ 하세요.', options: ['응결', '증발'], answer: '응결' },
          { type: 'blank', prompt: '알맞은 말을 써넣으세요.', text: '물은 ___해서 수증기가 되고, ___해서 다시 물이 돼요.', answer: '증발, 응결' },
          { type: 'draw', prompt: '내가 만든 장치를 그려 보세요.' },
          { type: 'table', prompt: '나의 단원 점검: 할 수 있으면 ○ 하세요.', columns: ['할 수 있는 것', '○'], cells: [['물의 세 상태 말하기', ''], ['증발과 응결 말하기', '']] }] },
      },
      diff: {
        easy: '카드에 하는 일이 함께 보이고, 맞게 놓으면 초록 테두리가 생겨요.',
        base: '장치 제작 순서를 스스로 놓고 눈금 그릇을 읽어 단원을 세 갈래로 정리해요.',
        challenge: '구멍 난 장치 같은 함정 카드가 있고 처음 생각을 고쳐 쓰는 이음 문항이 있어요.',
      },
      notes: '준비물(모둠): 큰 플라스틱 그릇, 작은 컵, 비닐랩, 작은 돌, 소금물, 눈금 그릇, 햇빛(없으면 스탠드). 수치는 실험 예시 값이며 날씨와 시간에 따라 크게 다르다. 모인 물은 맛보지 않는다. 자주 보이는 어려움: ① 비닐랩을 팽팽하게만 씌워 물방울이 컵으로 흘러가지 않는다 → 가운데에 작은 돌을 올려 처지게 한다. ② 모인 물이 적다고 실패로 여긴다 → 오래 두면 늘어난다. 단원 점검에서 △가 많은 항목은 다음 단원 시작 전 5분 복습 거리로 쓴다.',
    }),
    // @@NEXT@@
  ];

  PaperLessons.registerUnit({
    id: ID, schema: 'edu-unit.v1', catalogUnit: CU,
    grade: 4, subject: '과학', unitTitle: '2. 물의 상태 변화',
    flow: '1~4차시는 물의 세 가지 상태다. 물·얼음·수증기를 가르고 하얀 김이 수증기가 아님을 알고(1), 주변의 변화에서 무엇이 무엇으로 바뀌었는지 찾고(2), 입자 상자와 표로 상태를 나타내며(3), 얼음이 녹는 모습을 시간에 따라 관찰·기록한다(4). 5~7차시는 상태 변화를 다룬다. 증발과 끓음의 같은 점과 다른 점을 가르고(5), 다섯 가지 변화를 화살표로 나타내며(6), 물이 얼 때 부피 변화를 자로 재어 견준다(7). 8~10차시는 상태 변화를 이용해 물을 얻는 장치다. 이용할 변화를 고르고(8), 설계도에 물이 지나는 길을 나타내고(9), 장치를 만들어 모인 물을 확인하며 단원을 정리한다(10).',
    refs: {},
    lessons,
  });
})();
