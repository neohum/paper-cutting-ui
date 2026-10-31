/* 1학년 창체 안전교육 — 재난안전. 근거: 「학교 안전교육 실시 기준 등에 관한 고시」 별표 2 초등 재난안전.
 * (화재의 원인·대피·신고, 자연 재난과 안전한 행동, 재난 유형별 대비 훈련 — 화재·지진 대피 훈련 2종) 장면·인물은 이 단원을 위해 지은 것이다(가명). */
(function () {
  const ID = 'g1-cc-saf-disaster';
  const UNIT = 'g1-창체-saf-disaster';
  const TITLE = '재난안전';
  const GRADE = 1;
  const two = (n) => String(n).padStart(2, '0');
  const base = (n) => ({
    id: `${ID}-${two(n)}`, schema: 'edu-lesson.v1', catalog: { unit: UNIT, lesson: n },
    grade: GRADE, subject: '창체', unitTitle: TITLE, standards: [], minutes: 40,
    formats: ['chromebook', 'projector', 'print'],
  });
  const PROMPT = (what) => `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`;
  const SCENE = (text, extra = []) => ({ viewBox: [480, 270], layers: [
    { motif: 'sun', x: 410, y: 58, s: 0.8 }, { motif: 'cloud', x: 120, y: 52 }, { motif: 'hills', y: 204 },
    { motif: 'house', x: 96, y: 214, color: 'peach', s: 0.9 }, { motif: 'tree', x: 380, y: 214 }, ...extra,
    { motif: 'text', x: 240, y: 140, text, size: 22 },
  ] });
  const MS = (prompt, topic, slots, cards, sort, d, more) => ({ prompt, toolOptions: { mode: 'sort', topic, slots, cards }, target: { sort }, difficulty: d, ...more });
  const MM = (prompt, topic, slots, cards, match, d, more) => ({ prompt, toolOptions: { mode: 'match', topic, slots, cards }, target: { match }, difficulty: d, ...more });
  const MP = (prompt, topic, cards, pick, d, more) => ({ prompt, toolOptions: { mode: 'pick', topic, basket: topic, cards }, target: { pick }, difficulty: d, ...more });
  const EB = (prompt, situation, choices, choice, d, more) => ({ prompt, toolOptions: { mode: 'branch', situation, choices }, target: { choice }, difficulty: d, ...more });
  const SO = (prompt, title, slots, cards, order, d, more) => ({ prompt, toolOptions: { title, slots, cards }, target: { order }, difficulty: d, ...more });
  const LV = { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } };
  const LVB = { easy: { showBack: true }, base: {}, challenge: {} };
  const DIFF = {
    easy: '카드를 놓거나 보기를 고르면 맞는지 바로 알려 주고, 갈림길 문항은 결과가 처음부터 보여요.',
    base: '모두 마친 뒤 확인을 눌러 스스로 고쳐요.',
    challenge: '카드 순서가 섞여 나오고, 그럴듯하지만 위험한 보기를 가려내요.',
  };
  // 도입 6 + 전개 27(14+13) + 정리 7 = 40분
  const LESSON = (n, o) => Object.assign(base(n), {
    title: o.title, objective: o.objective,
    illustration: { prompt: PROMPT(o.draw), scene: SCENE(o.banner, o.extra) },
    stages: [
      { id: 'intro', title: '도입', minutes: 6, teacher: o.intro.teacher, student: o.intro.student, demo: o.intro.demo },
      { id: 'main', title: '전개', minutes: 27, activities: o.acts.map((a, i) => ({ minutes: i === 0 ? 14 : 13, ...a })) },
      { id: 'wrapup', title: '정리', minutes: 7, teacher: o.wrap.teacher, exitTicket: o.wrap.exit },
    ],
    worksheet: { title: o.wsTitle, items: o.ws }, differentiation: o.diff || DIFF, teacherNotes: o.notes,
  });
  const MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };

  PaperLessons.registerUnit({
    id: ID, schema: 'edu-unit.v1', catalogUnit: UNIT,
    grade: GRADE, subject: '창체', unitTitle: TITLE,
    flow: '1학년 재난안전은 불과 지진, 궂은 날씨처럼 갑자기 닥치는 일 앞에서 "멈추고, 알리고, 선생님을 따라" 몸을 지키는 행동을 익히는 단원입니다. 1~2차시에는 불이 날 수 있는 물건을 알아보고 불을 보면 "불이야!" 외쳐 알리는 차례를 익히며, 3차시는 학교 화재 대피 훈련과 묶어 코와 입을 막고 낮게 선생님을 따라 나가는 연습을 합니다. 4~5차시에는 흔들릴 때 책상 아래에서 머리를 지키는 법을 고르고, 학교 지진 대피 훈련과 묶어 흔들림이 멈춘 뒤 운동장으로 나가는 차례를 익힙니다. 6차시에는 큰비·센 바람·많은 눈·무더위 날씨의 안전한 행동을 나눕니다. 3·5차시는 학교 연간 재난 대비 훈련(유형을 달리해 연 2종 이상)과 같은 날 운영하면 좋고, 겁을 주는 장면 없이 "이렇게 하면 안전해요"로 이끕니다.',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '불이 날 수 있는 물건 찾고 만지지 않기',
        objective: '불이 날 수 있는 물건을 고르고, 만지지 않는 약속을 말할 수 있다.',
        draw: 'a child pointing at a lighter and matches placed high on a shelf out of reach, with a friendly paper flame character waving no',
        banner: '불장난은 안 해요', extra: [{ motif: 'star', x: 300, y: 96, color: 'peach' }],
        intro: {
          teacher: '"식탁 위에 라이터가 있어요. 신기하게 생겼는데 눌러 봐도 될까요?" 대답을 듣고(기다릴 반응: "안 돼요, 불이 나요") 시연 단추로 물건 카드가 나뉘는 모습을 보여 준다. "조금만 켜 보면 괜찮아요"가 나오면 "작은 불도 금방 커질 수 있어요. 어른에게 알려요"라고 말한다.',
          student: '집에서 불을 쓰는 물건을 하나 떠올려 짝에게 말해 봐요.',
          demo: { tool: 'mindmap', options: { topic: '불이 날 수 있어요', slots: ['조심해요', '괜찮아요'], cards: ['라이터', '그림책'], shuffle: false }, sequence: [{ sort: { '조심해요': ['라이터'], '괜찮아요': ['그림책'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 불이 날 수 있는 물건', tool: 'mindmap',
            teacher: '"이 물건은 불이 날 수 있을까요?" 카드를 하나씩 함께 읽는다. 콘센트에 젓가락을 넣는 것도 불·전기 사고가 될 수 있다는 것을 짚는다. 난로 옆에 옷을 두면 위험하다는 것을 모르는 학생에게 "난로는 뜨거워서 옆에 둔 것에 불이 붙을 수 있어요"라고 말한다.',
            task: '불이 날 수 있는 물건과 장면을 골라요.',
            levels: LV,
            items: [
              MS('물건을 두 가지로 나누어 보세요.', '불이 날 수 있어요', ['조심해요', '괜찮아요'], ['성냥', '색연필', '라이터', '인형'], { '조심해요': ['성냥', '라이터'], '괜찮아요': ['색연필', '인형'] }, 0.1),
              MP('불이 날 수 있는 장면만 골라 담아요.', '불조심 장면', ['난로 옆에 옷을 둬요', '책을 읽어요', '콘센트에 젓가락을 넣어요', '물을 마셔요'], ['난로 옆에 옷을 둬요', '콘센트에 젓가락을 넣어요'], 0.2),
              MS('행동을 나누어 보세요.', '불 앞에서', ['좋아요', '안 좋아요'], ['라이터를 보면 어른께 줘요', '촛불을 입으로 장난쳐요', '가스레인지는 어른이 켜요', '성냥을 그어 봐요'], { '좋아요': ['라이터를 보면 어른께 줘요', '가스레인지는 어른이 켜요'], '안 좋아요': ['촛불을 입으로 장난쳐요', '성냥을 그어 봐요'] }, 0.2,
                { conclude: '불이 날 수 있는 물건은 만지지 않고 어른에게 알려요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 우리 집 불조심 약속', tool: 'mindmap',
            teacher: '"물건과 지킬 약속을 이어 볼까요?" 맞는 약속을 고를 때마다 함께 소리 내어 말한다. 스스로 불을 끄려는 학생에게 "작은 불을 봐도 먼저 어른에게 알려요"라고 짚는다.',
            task: '물건과 불조심 약속을 이어요.',
            levels: LV,
            items: [
              MM('물건과 약속을 이어요. 맞지 않는 카드는 남겨요.', '불조심 약속', [{ id: 'f1', label: '라이터' }, { id: 'f2', label: '난로' }, { id: 'f3', label: '콘센트' }], ['만지지 않고 어른께 알려요', '가까이 가지 않아요', '손가락·젓가락을 넣지 않아요', '가지고 놀아요'], { f1: '만지지 않고 어른께 알려요', f2: '가까이 가지 않아요', f3: '손가락·젓가락을 넣지 않아요' }, 0.2),
              MP('불조심 약속만 골라 담아요.', '약속', ['불장난을 하지 않아요', '촛불 옆에서 뛰어요', '불이 보이면 어른께 알려요', '성냥을 주머니에 넣어요'], ['불장난을 하지 않아요', '불이 보이면 어른께 알려요'], 0.15),
              MS('장소를 나누어 보세요.', '불을 쓰는 곳', ['어른과 함께', '혼자 놀아도 돼요'], ['부엌 가스레인지', '캠핑 모닥불', '거실 소파', '놀이방 블록'], { '어른과 함께': ['부엌 가스레인지', '캠핑 모닥불'], '혼자 놀아도 돼요': ['거실 소파', '놀이방 블록'] }, 0.25,
                { conclude: '불을 쓰는 곳에서는 어른과 함께, 불장난은 하지 않아요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 집에 가서 불이 날 수 있는 물건이 어디 있는지 가족과 찾아볼까요?" 출구 1번에서 성냥을 고르지 못한 학생에게 다시 짚는다.',
          exit: [
            { type: 'choice', prompt: '라이터를 주웠어요. 어떻게 할까요?', options: ['어른에게 줘요', '켜 봐요', '친구에게 보여 줘요'], answer: 0, difficulty: 0.1, explain: '불이 날 수 있는 물건은 어른에게 줘요.' },
            { type: 'choice', prompt: '불이 날 수 있는 물건은 무엇인가요?', options: ['성냥', '지우개', '공책'], answer: 0, difficulty: 0.1, explain: '성냥은 불을 붙이는 물건이에요.' },
            MOOD,
          ],
        },
        wsTitle: '불이 날 수 있는 물건',
        ws: [
          { type: 'table', prompt: '불이 날 수 있으면 ○, 아니면 ×를 쓰세요.', columns: ['물건', '○ / ×'], cells: [['라이터', ''], ['연필', ''], ['난로', ''], ['인형', '']], answer: '○, ×, ○, ×' },
          { type: 'choice', prompt: '불조심 약속에 ○ 하세요.', options: ['불장난을 하지 않아요', '성냥을 그어 봐요', '난로 옆에서 놀아요'], answer: '불장난을 하지 않아요' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '라이터를 보면 만지지 않고 ___에게 알려요.', answer: '어른' },
          { type: 'draw', prompt: '불조심 약속을 지키는 내 모습을 그려요.' },
        ],
        notes: '자주 보이는 어려움: ① 작은 불은 괜찮다고 여긴다 → 작은 불도 금방 커진다는 것을 짚는다. ② 콘센트 장난을 불과 잇지 못한다 → 전기도 불을 낼 수 있음을 말한다. ③ 스스로 불을 끄려 한다 → 먼저 어른에게 알린다. 실제 불을 켜 보이지 않는다.',
      }),

      LESSON(2, {
        title: '"불이야!" 외치고 알리는 차례 놓기',
        objective: '불이나 연기를 보았을 때 큰 소리로 알리고 어른에게 말하는 차례를 놓을 수 있다.',
        draw: 'a child calling out with hands around the mouth in a school hallway while a teacher runs toward them and a small paper cloud of smoke drifts',
        banner: '"불이야!" 크게 외쳐요', extra: [{ motif: 'cloud', x: 300, y: 96, color: 'lavender' }],
        intro: {
          teacher: '"화장실에서 연기 냄새가 나요. 무섭다고 숨으면 어떻게 될까요?" 대답을 듣고(기다릴 반응: "아무도 몰라요") "불을 보면 \'불이야!\' 하고 크게 외쳐서 모두에게 알려요"라고 말한다. 다 함께 "불이야!"를 한 번 외쳐 본다. 시연 단추로 차례 카드가 놓이는 모습을 보여 준다.',
          student: '불을 보면 누구에게 알릴지 짝에게 말해 봐요.',
          demo: { tool: 'story', options: { cards: [{ id: 'd1', text: '"불이야!" 외쳐요', motif: 'sun' }, { id: 'd2', text: '선생님께 알려요', motif: 'house' }], slots: ['먼저', '다음'], shuffle: false }, sequence: [{ order: ['d1', 'd2'] }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 알리는 차례', tool: 'story',
            teacher: '"불을 보면 무엇부터 할까요?" 외치기 → 어른에게 알리기 → 선생님을 따라 나가기 차례를 놓게 한다. 숨거나 물건을 챙기러 가는 학생이 있다 — "물건은 두고 몸만 나가요"라고 짚는다.',
            task: '불을 보았을 때 할 일을 차례대로 놓아요.',
            levels: LV,
            items: [
              SO('교실에서 연기를 봤어요. 차례대로 놓아요.', '연기를 봤어요', ['먼저', '다음', '마지막'], [{ id: 'k1', text: '"불이야!" 외쳐요', motif: 'sun' }, { id: 'k2', text: '선생님께 알려요', motif: 'house' }, { id: 'k3', text: '선생님을 따라 나가요', motif: 'tree' }], ['k1', 'k2', 'k3'], 0.15),
              SO('집에서 불을 봤어요. 차례대로 놓아요.', '집에서 불이 나면', ['먼저', '다음', '마지막'], [{ id: 'h1', text: '"불이야!" 외쳐요', motif: 'star' }, { id: 'h2', text: '어른과 밖으로 나가요', motif: 'house' }, { id: 'h3', text: '밖에서 119에 알려요', motif: 'sun' }], ['h1', 'h2', 'h3'], 0.25),
              SO('불을 보고 나가기까지 차례대로 놓아요.', '나가기 전에', ['먼저', '다음', '마지막'], [{ id: 'n1', text: '하던 일을 멈춰요', motif: 'cloud' }, { id: 'n2', text: '물건은 두고 일어나요', motif: 'leaf' }, { id: 'n3', text: '줄 서서 나가요', motif: 'flower' }], ['n1', 'n2', 'n3'], 0.25,
                { conclude: '불을 보면 외치고, 알리고, 물건은 두고 나가요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 이럴 땐 이렇게', tool: 'story',
            teacher: '"화재 경보가 울리면 어떻게 할까요?" 경보 소리에 장난치지 않고 선생님 말씀을 듣는다는 것을 짚는다. 혼자 숨는 보기를 떠올리는 학생에게 "숨으면 찾기 어려워요. 꼭 밖으로 나가요"라고 말한다.',
            task: '상황마다 할 일을 차례대로 놓아요.',
            levels: LV,
            items: [
              SO('화재 경보가 울려요. 차례대로 놓아요.', '경보가 울려요', ['먼저', '다음', '마지막'], [{ id: 'b1', text: '하던 것을 멈춰요', motif: 'sun' }, { id: 'b2', text: '선생님 말씀을 들어요', motif: 'house' }, { id: 'b3', text: '함께 밖으로 나가요', motif: 'tree' }], ['b1', 'b2', 'b3'], 0.2),
              SO('친구가 불 난 줄 몰라요. 차례대로 놓아요.', '친구에게 알려요', ['먼저', '다음', '마지막'], [{ id: 'c1', text: '"불이야!" 알려요', motif: 'star' }, { id: 'c2', text: '손을 잡아요', motif: 'flower' }, { id: 'c3', text: '같이 나가요', motif: 'leaf' }], ['c1', 'c2', 'c3'], 0.25),
              SO('밖에 나온 뒤 차례대로 놓아요.', '밖에 나와서', ['먼저', '다음', '마지막'], [{ id: 'o1', text: '모이는 곳으로 가요', motif: 'tree' }, { id: 'o2', text: '선생님께 이름을 말해요', motif: 'house' }, { id: 'o3', text: '다시 들어가지 않아요', motif: 'sun' }], ['o1', 'o2', 'o3'], 0.3,
                { conclude: '밖에 나오면 모이는 곳에서 기다리고, 다시 들어가지 않아요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 배운 말을 다 함께 외쳐 볼까요? \'불이야!\'" 출구 2번에서 물건을 챙기는 보기를 고른 학생에게 몸만 나간다는 것을 다시 짚는다.',
          exit: [
            { type: 'choice', prompt: '불을 보았을 때 처음 할 말은?', options: ['"불이야!"', '"안녕!"', '"배고파!"'], answer: 0, difficulty: 0.1, explain: '"불이야!" 외쳐 모두에게 알려요.' },
            { type: 'choice', prompt: '불이 나서 나갈 때 가방은 어떻게 할까요?', options: ['두고 나가요', '꼭 챙겨요', '찾으러 가요'], answer: 0, difficulty: 0.15, explain: '물건은 두고 몸만 빨리 나가요.' },
            MOOD,
          ],
        },
        wsTitle: '불이 나면 알려요',
        ws: [
          { type: 'table', prompt: '할 일의 차례에 맞게 1~3을 쓰세요.', columns: ['할 일', '차례'], cells: [['선생님께 알려요', ''], ['"불이야!" 외쳐요', ''], ['따라 나가요', '']], answer: '2, 1, 3' },
          { type: 'choice', prompt: '밖에 나온 뒤 할 일에 ○ 하세요.', options: ['모이는 곳에서 기다려요', '가방을 가지러 가요', '집에 혼자 가요'], answer: '모이는 곳에서 기다려요' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '불을 보면 "___!" 하고 크게 외쳐요.', answer: '불이야' },
          { type: 'draw', prompt: '"불이야!" 외치는 내 모습을 그려요.' },
        ],
        notes: '자주 보이는 어려움: ① 무서워서 숨는다 → 외치고 밖으로 나가는 것이 안전하다고 되풀이한다. ② 가방·물건을 챙긴다 → 몸만 나간다. ③ 밖에서 다시 들어간다 → 모이는 곳에서 선생님을 기다린다.',
      }),

      LESSON(3, {
        title: '화재 대피 훈련 — 코·입 막고 낮게 따라가기',
        objective: '화재 대피 훈련에서 코와 입을 막고 낮은 자세로 선생님을 따라 나가는 차례를 지킬 수 있다.',
        draw: 'a line of small children crouching low with handkerchiefs over their mouths following a teacher toward a green paper exit sign',
        banner: '코와 입 막고 낮게', extra: [{ motif: 'cloud', x: 300, y: 96, color: 'sky' }],
        intro: {
          teacher: '"연기는 위로 올라갈까요, 아래로 내려갈까요?" 대답을 듣고(기다릴 반응: "위로요") "그래서 몸을 낮추고 손수건이나 옷소매로 코와 입을 막고 나가요"라고 말한다. 오늘은 실제 화재 대피 훈련 전에 차례를 익히고, 훈련 뒤에 돌아본다고 알린다. 시연 단추로 대피 차례 카드가 놓이는 모습을 보여 준다.',
          student: '연기가 나는 곳을 나갈 때 몸을 어떻게 해야 할지 짝에게 몸으로 보여 줘요.',
          demo: { tool: 'story', options: { cards: [{ id: 'd1', text: '코와 입을 막아요', motif: 'cloud' }, { id: 'd2', text: '몸을 낮춰요', motif: 'leaf' }], slots: ['먼저', '다음'], shuffle: false }, sequence: [{ order: ['d1', 'd2'] }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 훈련 전 대피 차례', tool: 'story',
            teacher: '"경보가 울리면 교실에서 운동장까지 어떻게 갈까요?" 차례를 놓은 뒤 교실에서 한 번 흉내로 연습한다. 뛰어가는 학생에게 "뛰면 넘어져 뒤 친구도 다쳐요. 빠르게 걷되 뛰지 않아요"라고 짚는다. 훈련 때 경보 소리와 대피 장소(운동장 모이는 곳)를 미리 알려 준다.',
            task: '화재 대피 차례를 놓아요.',
            levels: LV,
            items: [
              SO('화재 경보가 울렸어요. 대피 차례대로 놓아요.', '화재 대피', ['먼저', '다음', '그다음', '마지막'], [{ id: 'e1', text: '하던 일을 멈춰요', motif: 'sun' }, { id: 'e2', text: '코와 입을 막아요', motif: 'cloud' }, { id: 'e3', text: '낮게 선생님을 따라요', motif: 'leaf' }, { id: 'e4', text: '운동장에 모여요', motif: 'tree' }], ['e1', 'e2', 'e3', 'e4'], 0.2),
              SO('복도를 지날 때 차례대로 놓아요.', '복도에서', ['먼저', '다음', '마지막'], [{ id: 'r1', text: '줄을 서요', motif: 'flower' }, { id: 'r2', text: '앞 친구를 따라 걸어요', motif: 'leaf' }, { id: 'r3', text: '계단은 손잡이 잡고', motif: 'tree' }], ['r1', 'r2', 'r3'], 0.25),
              SO('운동장에 도착한 뒤 차례대로 놓아요.', '도착해서', ['먼저', '다음', '마지막'], [{ id: 'g1', text: '우리 반 자리에 앉아요', motif: 'flower' }, { id: 'g2', text: '선생님이 인원을 세요', motif: 'house' }, { id: 'g3', text: '조용히 기다려요', motif: 'sun' }], ['g1', 'g2', 'g3'], 0.25,
                { conclude: '멈추고, 코와 입을 막고, 낮게 따라가 모이는 곳에서 인원을 확인해요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 훈련 뒤 돌아보기', tool: 'story',
            teacher: '"훈련에서 잘한 점은 무엇이었나요?" 훈련을 마친 뒤 돌아보며 차례를 다시 놓는다. 친구를 밀거나 떠든 장면이 있었다면 탓하지 않고 "다음에는 어떻게 할까요?"로 묻는다. 진짜 불이 났을 때도 오늘처럼 하면 된다고 안심시킨다.',
            task: '훈련을 떠올리며 고칠 점이 생겼을 때의 차례를 놓아요.',
            levels: LV,
            items: [
              SO('줄이 엉켰을 때 차례대로 놓아요.', '줄이 엉켰어요', ['먼저', '다음', '마지막'], [{ id: 'q1', text: '멈춰 서요', motif: 'sun' }, { id: 'q2', text: '선생님 말씀을 들어요', motif: 'house' }, { id: 'q3', text: '다시 한 줄로 걸어요', motif: 'leaf' }], ['q1', 'q2', 'q3'], 0.25),
              SO('손수건이 없을 때 차례대로 놓아요.', '손수건이 없어요', ['먼저', '다음', '마지막'], [{ id: 'm1', text: '옷소매로 코·입 막아요', motif: 'cloud' }, { id: 'm2', text: '몸을 낮춰요', motif: 'leaf' }, { id: 'm3', text: '따라 나가요', motif: 'tree' }], ['m1', 'm2', 'm3'], 0.3),
              SO('친구가 넘어졌을 때 차례대로 놓아요.', '친구가 넘어졌어요', ['먼저', '다음', '마지막'], [{ id: 'f1', text: '"선생님!" 알려요', motif: 'house' }, { id: 'f2', text: '뒤 친구에게 멈추라 해요', motif: 'sun' }, { id: 'f3', text: '선생님과 함께 나가요', motif: 'flower' }], ['f1', 'f2', 'f3'], 0.3,
                { conclude: '훈련에서 익힌 차례를 지키면 진짜 불이 나도 안전하게 나갈 수 있어요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 훈련에서 가장 잘 지킨 약속은 무엇인가요?" 출구 1번에서 뛰는 보기를 고른 학생에게 까닭을 다시 짚는다.',
          exit: [
            { type: 'choice', prompt: '불이 났을 때 연기 속에서 몸은 어떻게 할까요?', options: ['낮게 숙여요', '높이 뛰어요', '그대로 서요'], answer: 0, difficulty: 0.15, explain: '연기는 위로 올라가니 몸을 낮춰요.' },
            { type: 'choice', prompt: '대피할 때 걷는 방법은?', options: ['빠르게 걷되 뛰지 않아요', '친구를 밀며 뛰어요', '천천히 놀며 가요'], answer: 0, difficulty: 0.15, explain: '뛰면 넘어져 다칠 수 있어요.' },
            MOOD,
          ],
        },
        wsTitle: '화재 대피 훈련',
        ws: [
          { type: 'table', prompt: '화재 대피 차례에 맞게 1~4를 쓰세요.', columns: ['할 일', '차례'], cells: [['운동장에 모여요', ''], ['코와 입을 막아요', ''], ['하던 일을 멈춰요', ''], ['낮게 따라가요', '']], answer: '4, 2, 1, 3' },
          { type: 'choice', prompt: '손수건이 없을 때 코와 입을 막는 것에 ○ 하세요.', options: ['옷소매', '책', '모자'], answer: '옷소매' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '연기 속에서는 몸을 ___추고 코와 입을 막아요.', answer: '낮' },
          { type: 'draw', prompt: '훈련에서 낮은 자세로 나가는 내 모습을 그려요.' },
        ],
        notes: '훈련 운영: 경보 신호 → 교사 선도·학생 대피 → 운동장 지정 장소 집결 → 인원 확인 순으로 학교 재난 대비 훈련 계획에 맞춘다(연 2종 이상 훈련 중 화재). 자주 보이는 어려움: ① 뛰어서 나간다 → 빠르게 걷는다. ② 코·입 막기를 잊는다 → 옷소매로도 막을 수 있다. ③ 훈련을 놀이로 여긴다 → 진짜처럼 조용히 한다. 실제 연기를 피우지 않는다.',
      }),

      LESSON(4, {
        title: '흔들릴 때 머리 지키는 행동 고르기',
        objective: '지진으로 흔들릴 때 책상 아래로 들어가 머리를 지키는 행동을 고를 수 있다.',
        draw: 'children curled under sturdy paper desks holding the desk legs while picture frames tilt on the wall',
        banner: '책상 아래로, 머리 보호', extra: [{ motif: 'mountain', x: 300, y: 214, color: 'lavender' }],
        intro: {
          teacher: '"땅이 흔들리는 것을 지진이라고 해요. 교실이 흔들리면 어디로 가야 할까요?" 대답을 듣고(기다릴 반응: "책상 아래요") 시연 단추로 행동 카드가 나뉘는 모습을 보여 준다. "밖으로 바로 뛰어나가요"가 나오면 "흔들릴 때 뛰면 넘어지거나 물건에 부딪힐 수 있어요. 흔들림이 멈출 때까지 책상 아래에 있어요"라고 말한다.',
          student: '흔들릴 때 몸에서 가장 먼저 지켜야 할 곳은 어디일까요? 짝에게 말해 봐요.',
          demo: { tool: 'emotion', options: { mode: 'branch', situation: '교실이 흔들려요.', choices: [{ id: 'desk', text: '책상 아래로 들어가요', result: '머리를 지켜요.', mood: '안심' }, { id: 'run', text: '복도로 뛰어요', result: '넘어질 수 있어요.', mood: '걱정' }] }, sequence: [{ choice: 'desk' }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 흔들릴 때 어떻게 할까', tool: 'emotion',
            teacher: '"이렇게 하면 어떻게 될까요?" 결과를 함께 읽는다. 창문 옆에 서 있는 보기를 고른 학생에게 "유리가 깨질 수 있어요. 창문에서 떨어져요"라고 짚는다. 책상 다리를 꼭 잡는 까닭(책상이 움직이지 않게)을 몸으로 보여 준다.',
            task: '흔들리는 장면에서 어떻게 할지 골라요.',
            levels: LVB,
            items: [
              EB('수업 중에 교실이 흔들려요. 어떻게 할까요?', '수업 중에 교실이 크게 흔들려요.', [
                { id: 'desk', text: '책상 아래로 들어가 다리를 잡아요', result: '떨어지는 물건에서 머리를 지켜요.', mood: '안심' },
                { id: 'run', text: '문으로 뛰어나가요', result: '흔들려서 넘어질 수 있어요.', mood: '걱정', why: '흔들릴 때는 뛰지 않아요.' },
                { id: 'window', text: '창문으로 밖을 봐요', result: '유리가 깨질 수 있어요.', mood: '무서움', why: '창문에서 떨어져요.' }], 'desk', 0.1),
              EB('집 거실이 흔들려요. 어떻게 할까요?', '거실에서 놀다가 집이 흔들려요.', [
                { id: 'shelf', text: '책장 옆에 서 있어요', result: '책이 떨어질 수 있어요.', mood: '걱정', why: '높은 가구 옆은 피해요.' },
                { id: 'table', text: '튼튼한 탁자 아래로 들어가요', result: '머리를 지키며 기다려요.', mood: '안심' },
                { id: 'stair', text: '계단으로 뛰어 내려가요', result: '흔들려서 굴러떨어질 수 있어요.', mood: '무서움', why: '흔들림이 멈출 때까지 기다려요.' }], 'table', 0.2),
              EB('책상이 없는 복도에서 흔들려요. 어떻게 할까요?', '복도를 걷다가 건물이 흔들려요.', [
                { id: 'bag', text: '가방이나 팔로 머리를 감싸고 낮게 앉아요', result: '머리를 지키며 기다려요.', mood: '안심' },
                { id: 'stand', text: '그대로 서 있어요', result: '넘어질 수 있어요.', mood: '걱정', why: '낮게 앉아 머리를 감싸요.' },
                { id: 'cry', text: '울면서 뛰어다녀요', result: '부딪혀 다칠 수 있어요.', mood: '무서움', why: '멈춰서 머리를 지켜요.' }], 'bag', 0.25,
                { conclude: '흔들리면 책상·탁자 아래로, 없으면 팔이나 가방으로 머리를 감싸고 낮게 있어요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 머리를 지키는 자세', tool: 'emotion',
            teacher: '"책상 아래에서 손은 어디를 잡을까요?" 다 함께 책상 아래에 들어가 다리를 잡는 자세를 연습한다. 책상 위에 올라가는 보기는 위험하다는 것을 짚는다. 흔들림이 멈추면 선생님 말씀을 듣고 나간다는 것을 미리 말한다.',
            task: '자세와 기다리는 방법을 골라요.',
            levels: LVB,
            items: [
              EB('책상 아래에 들어갔어요. 손은 어떻게 할까요?', '책상 아래에 들어가 앉았어요.', [
                { id: 'leg', text: '책상 다리를 꼭 잡아요', result: '책상이 움직여도 함께 있어요.', mood: '안심' },
                { id: 'phone', text: '손으로 휴대전화를 봐요', result: '책상이 밀려나 머리가 나와요.', mood: '걱정', why: '책상 다리를 꼭 잡아요.' },
                { id: 'clap', text: '손뼉을 쳐요', result: '책상이 밀려나 위험해요.', mood: '걱정', why: '책상 다리를 잡아요.' }], 'leg', 0.2),
              EB('흔들림이 계속돼요. 어떻게 기다릴까요?', '책상 아래에서 흔들림이 아직 계속돼요.', [
                { id: 'out', text: '궁금해서 머리를 내밀어요', result: '떨어지는 물건에 맞을 수 있어요.', mood: '걱정', why: '멈출 때까지 머리를 안에 둬요.' },
                { id: 'wait', text: '멈출 때까지 그대로 있어요', result: '안전하게 기다려요.', mood: '편안함' },
                { id: 'top', text: '책상 위로 올라가요', result: '떨어질 수 있어요.', mood: '무서움', why: '책상 아래에 있어요.' }], 'wait', 0.2),
              EB('흔들림이 멈췄어요. 어떻게 할까요?', '흔들림이 멈추고 조용해졌어요.', [
                { id: 'listen', text: '선생님 말씀을 기다려요', result: '선생님과 함께 안전하게 움직여요.', mood: '안심' },
                { id: 'alone', text: '혼자 집으로 가요', result: '길에서 위험할 수 있어요.', mood: '걱정', why: '선생님과 함께 움직여요.' },
                { id: 'play', text: '친구와 장난쳐요', result: '말씀을 듣지 못해요.', mood: '걱정', why: '조용히 선생님 말씀을 들어요.' }], 'listen', 0.25,
                { conclude: '책상 다리를 잡고 멈출 때까지 기다린 뒤, 선생님 말씀을 따라요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"흔들리면? 책상 아래! 멈추면? 선생님 말씀!" 다 함께 말해 본다. 출구 1번에서 뛰는 보기를 고른 학생에게 다시 짚는다.',
          exit: [
            { type: 'choice', prompt: '교실이 흔들리면 어디로 갈까요?', options: ['책상 아래', '창문 옆', '복도'], answer: 0, difficulty: 0.1, explain: '책상 아래에서 머리를 지켜요.' },
            { type: 'choice', prompt: '책상이 없을 때 머리는 무엇으로 지킬까요?', options: ['가방이나 팔', '종이 한 장', '아무것도 안 해요'], answer: 0, difficulty: 0.15, explain: '가방이나 팔로 머리를 감싸요.' },
            MOOD,
          ],
        },
        wsTitle: '흔들리면 머리 보호',
        ws: [
          { type: 'table', prompt: '안전하면 ○, 위험하면 ×를 쓰세요.', columns: ['행동', '○ / ×'], cells: [['책상 아래로 들어가요', ''], ['창문 옆에 서요', ''], ['가방으로 머리를 감싸요', ''], ['계단으로 뛰어요', '']], answer: '○, ×, ○, ×' },
          { type: 'choice', prompt: '책상 아래에서 손으로 잡을 것에 ○ 하세요.', options: ['책상 다리', '연필', '친구 옷'], answer: '책상 다리' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '흔들리면 책상 아래로 들어가 ___를 지켜요.', answer: '머리' },
          { type: 'draw', prompt: '책상 아래에서 머리를 지키는 모습을 그려요.' },
        ],
        notes: '근거: 행정안전부 지진 국민행동요령(흔들릴 때 탁자 아래에서 몸 보호, 흔들림이 멈추면 대피). 자주 보이는 어려움: ① 흔들릴 때 바로 뛰어나간다 → 멈출 때까지 기다린다. ② 창문·책장 옆에 있다 → 떨어진다. ③ 머리를 내민다 → 멈출 때까지 안에 있는다. 무너지는 장면을 보여 주지 않는다.',
      }),

      LESSON(5, {
        title: '지진 대피 훈련 — 멈추면 머리 가리고 운동장으로',
        objective: '지진 대피 훈련에서 흔들림이 멈춘 뒤 머리를 가리고 계단으로 운동장에 가는 차례를 지킬 수 있다.',
        draw: 'children walking in a line out of a paper school building holding books over their heads toward an open playground, with a teacher leading',
        banner: '머리 가리고 넓은 곳으로', extra: [{ motif: 'tree', x: 300, y: 214, color: 'mint' }],
        intro: {
          teacher: '"흔들림이 멈췄어요. 이제 어디로 가야 안전할까요?" 대답을 듣고(기다릴 반응: "운동장이요") "건물에서 떨어진 넓은 곳이 안전해요. 나갈 때도 머리를 가리고, 승강기 말고 계단으로 가요"라고 말한다. 오늘은 실제 지진 대피 훈련 전에 차례를 익히고 훈련 뒤 돌아본다고 알린다. 시연 단추로 차례 카드가 놓이는 모습을 보여 준다.',
          student: '우리 학교에서 지진이 나면 모일 넓은 곳은 어디일지 짝에게 말해 봐요.',
          demo: { tool: 'story', options: { cards: [{ id: 'd1', text: '책상 아래에서 기다려요', motif: 'house' }, { id: 'd2', text: '머리 가리고 나가요', motif: 'leaf' }], slots: ['먼저', '다음'], shuffle: false }, sequence: [{ order: ['d1', 'd2'] }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 훈련 전 차례 익히기', tool: 'story',
            teacher: '"흔들릴 때부터 운동장까지 차례를 놓아 볼까요?" 승강기를 타려는 학생에게 "흔들린 뒤에는 승강기가 멈출 수 있어요. 계단으로 가요"라고 짚는다. 훈련 신호(경보·방송)와 대피 장소를 미리 알려 준다. 담장·유리창 가까이 가지 않고 운동장 가운데로 간다는 것도 말한다.',
            task: '지진 대피 차례를 놓아요.',
            levels: LV,
            items: [
              SO('지진 대피 차례대로 놓아요.', '지진 대피', ['먼저', '다음', '그다음', '마지막'], [{ id: 'e1', text: '책상 아래에서 기다려요', motif: 'house' }, { id: 'e2', text: '멈추면 머리를 가려요', motif: 'leaf' }, { id: 'e3', text: '계단으로 내려가요', motif: 'tree' }, { id: 'e4', text: '운동장 가운데 모여요', motif: 'sun' }], ['e1', 'e2', 'e3', 'e4'], 0.2),
              SO('교실을 나서기 전 차례대로 놓아요.', '나서기 전', ['먼저', '다음', '마지막'], [{ id: 'p1', text: '선생님 말씀을 들어요', motif: 'house' }, { id: 'p2', text: '책이나 가방을 머리에', motif: 'leaf' }, { id: 'p3', text: '한 줄로 서요', motif: 'flower' }], ['p1', 'p2', 'p3'], 0.25),
              SO('운동장에서 차례대로 놓아요.', '운동장에서', ['먼저', '다음', '마지막'], [{ id: 'y1', text: '건물에서 멀리 가요', motif: 'tree' }, { id: 'y2', text: '반끼리 앉아요', motif: 'flower' }, { id: 'y3', text: '인원을 확인해요', motif: 'sun' }], ['y1', 'y2', 'y3'], 0.25,
                { conclude: '흔들릴 때는 책상 아래, 멈추면 머리 가리고 계단으로, 운동장 가운데 모여요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 훈련 뒤 돌아보기', tool: 'story',
            teacher: '"훈련에서 어려웠던 점은 무엇이었나요?" 훈련 뒤 장면을 떠올리며 차례를 놓는다. 다시 흔들리면(여진) 어떻게 할지 묻고, 그 자리에서 낮게 앉아 머리를 감싼다고 짚는다.',
            task: '훈련 중 생길 수 있는 일의 차례를 놓아요.',
            levels: LV,
            items: [
              SO('계단에서 다시 흔들려요. 차례대로 놓아요.', '다시 흔들려요', ['먼저', '다음', '마지막'], [{ id: 'a1', text: '멈춰 서요', motif: 'sun' }, { id: 'a2', text: '낮게 앉아 머리 감싸요', motif: 'leaf' }, { id: 'a3', text: '멈추면 다시 걸어요', motif: 'tree' }], ['a1', 'a2', 'a3'], 0.3),
              SO('승강기 앞을 지나요. 차례대로 놓아요.', '승강기 앞', ['먼저', '다음', '마지막'], [{ id: 'l1', text: '승강기를 지나쳐요', motif: 'house' }, { id: 'l2', text: '계단 손잡이를 잡아요', motif: 'tree' }, { id: 'l3', text: '한 칸씩 내려가요', motif: 'flower' }], ['l1', 'l2', 'l3'], 0.25),
              SO('운동장에 친구가 안 보여요. 차례대로 놓아요.', '친구가 안 보여요', ['먼저', '다음', '마지막'], [{ id: 'm1', text: '선생님께 알려요', motif: 'house' }, { id: 'm2', text: '내 자리에 앉아 있어요', motif: 'flower' }, { id: 'm3', text: '찾으러 들어가지 않아요', motif: 'sun' }], ['m1', 'm2', 'm3'], 0.3,
                { conclude: '다시 흔들리면 그 자리에서 머리를 지키고, 친구가 안 보이면 선생님께 알려요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 훈련에서 머리를 무엇으로 가렸나요?" 출구 1번에서 승강기를 고른 학생에게 까닭을 다시 짚는다.',
          exit: [
            { type: 'choice', prompt: '지진 뒤 건물에서 나갈 때 무엇을 이용할까요?', options: ['계단', '승강기', '창문'], answer: 0, difficulty: 0.15, explain: '흔들린 뒤 승강기는 멈출 수 있어요.' },
            { type: 'choice', prompt: '지진 뒤 모이기 좋은 곳은?', options: ['운동장 가운데', '담장 바로 옆', '건물 안 복도'], answer: 0, difficulty: 0.15, explain: '건물·담장에서 떨어진 넓은 곳이 안전해요.' },
            MOOD,
          ],
        },
        wsTitle: '지진 대피 훈련',
        ws: [
          { type: 'table', prompt: '지진 대피 차례에 맞게 1~4를 쓰세요.', columns: ['할 일', '차례'], cells: [['계단으로 내려가요', ''], ['책상 아래에서 기다려요', ''], ['운동장에 모여요', ''], ['머리를 가려요', '']], answer: '3, 1, 4, 2' },
          { type: 'choice', prompt: '머리를 가릴 때 쓸 수 있는 것에 ○ 하세요.', options: ['가방', '연필', '지우개'], answer: '가방' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '지진 뒤에는 승강기가 아니라 ___으로 내려가요.', answer: '계단' },
          { type: 'draw', prompt: '운동장에 모인 우리 반 모습을 그려요.' },
        ],
        notes: '훈련 운영: 지진 경보·방송 → 책상 아래 대기 → 흔들림 멈춤 신호 → 머리 보호·계단 대피 → 운동장 지정 장소 집결 → 인원 확인 순으로 학교 재난 대비 훈련 계획에 맞춘다(연 2종 이상 훈련 중 지진). 자주 보이는 어려움: ① 흔들리는 중에 나간다 → 멈출 때까지 기다린다. ② 승강기를 탄다 → 계단으로 간다. ③ 담장·건물 가까이 모인다 → 넓은 곳 가운데로 간다.',
      }),

      LESSON(6, {
        title: '큰비·센 바람·눈·무더위 날 안전한 행동 나누기',
        objective: '큰비·센 바람·많은 눈·무더위 날씨에 맞는 안전한 행동을 나눌 수 있다.',
        draw: 'four small paper scenes: a child with an umbrella away from a stream, a child staying indoors on a windy day, a child in boots on snow, a child drinking water in shade',
        banner: '날씨마다 안전하게', extra: [{ motif: 'snow', x: 300, y: 96, color: 'sky' }],
        intro: {
          teacher: '"비가 아주 많이 오는 날 냇가에 물 구경을 가도 될까요?" 대답을 듣고(기다릴 반응: "안 돼요, 물에 휩쓸려요") 시연 단추로 날씨와 행동 카드가 나뉘는 모습을 보여 준다. "우산 쓰면 괜찮아요"가 나오면 "물이 갑자기 불어나면 우산이 지켜 줄까요?"라고 되묻는다.',
          student: '아주 덥거나 추웠던 날 어떻게 지냈는지 짝에게 말해 봐요.',
          demo: { tool: 'mindmap', options: { topic: '큰비 오는 날', slots: ['안전해요', '위험해요'], cards: ['집 안에 있어요', '냇가에 가요'], shuffle: false }, sequence: [{ sort: { '안전해요': ['집 안에 있어요'], '위험해요': ['냇가에 가요'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 날씨마다 안전한 행동', tool: 'mindmap',
            teacher: '"이런 날씨에는 어떻게 할까요?" 날씨와 행동을 잇는다. 센 바람이 부는 날 간판·나무 아래가 위험하다는 것을 짚는다. 무더운 날 목마를 때만 물을 마시는 학생에게 "목마르기 전에 자주 마셔요"라고 말한다.',
            task: '날씨와 안전한 행동을 이어요.',
            levels: LV,
            items: [
              MM('날씨와 안전한 행동을 이어요. 맞지 않는 카드는 남겨요.', '날씨와 행동', [{ id: 'w1', label: '큰비가 와요' }, { id: 'w2', label: '센 바람이 불어요' }, { id: 'w3', label: '아주 더워요' }], ['냇가에 가지 않아요', '집 안에 있어요', '물을 자주 마셔요', '수영복을 입어요'], { w1: '냇가에 가지 않아요', w2: '집 안에 있어요', w3: '물을 자주 마셔요' }, 0.15),
              MS('눈 오는 날 행동을 나누어 보세요.', '눈 오는 날', ['안전해요', '위험해요'], ['미끄럽지 않은 신발', '빙판에서 뛰어요', '장갑과 모자를 써요', '주머니에 손 넣고 걸어요'], { '안전해요': ['미끄럽지 않은 신발', '장갑과 모자를 써요'], '위험해요': ['빙판에서 뛰어요', '주머니에 손 넣고 걸어요'] }, 0.2),
              MS('무더운 날 행동을 나누어 보세요.', '무더운 날', ['안전해요', '위험해요'], ['그늘에서 쉬어요', '한낮에 오래 뛰어요', '모자를 써요', '물을 참아요'], { '안전해요': ['그늘에서 쉬어요', '모자를 써요'], '위험해요': ['한낮에 오래 뛰어요', '물을 참아요'] }, 0.2,
                { conclude: '날씨가 궂은 날은 위험한 곳에 가지 않고, 날씨에 맞게 몸을 지켜요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 위험한 곳 피하기', tool: 'mindmap',
            teacher: '"센 바람이 불 때 가까이 가면 안 되는 곳은 어디일까요?" 간판·큰 나무·공사장 가림막을 짚는다. 큰비 때 물이 흐르는 길·지하도는 피한다는 것을 말한다. 날씨 소식을 어른과 함께 듣는 습관도 이야기한다.',
            task: '날씨마다 피할 곳을 고르고 나누어요.',
            levels: LV,
            items: [
              MP('센 바람이 불 때 피할 곳만 골라 담아요.', '바람 부는 날 피할 곳', ['흔들리는 간판 아래', '튼튼한 집 안', '큰 나무 아래', '교실 안'], ['흔들리는 간판 아래', '큰 나무 아래'], 0.2),
              MP('큰비가 올 때 피할 곳만 골라 담아요.', '비 오는 날 피할 곳', ['물이 불어난 냇가', '거실', '물이 흐르는 길', '학교 도서관'], ['물이 불어난 냇가', '물이 흐르는 길'], 0.2),
              MM('날씨와 미리 할 일을 이어요. 맞지 않는 카드는 남겨요.', '미리 준비해요', [{ id: 'p1', label: '눈이 많이 온대요' }, { id: 'p2', label: '태풍이 온대요' }, { id: 'p3', label: '아주 덥대요' }], ['따뜻한 옷을 꺼내요', '창문을 닫아 둬요', '물병을 챙겨요', '연을 날려요'], { p1: '따뜻한 옷을 꺼내요', p2: '창문을 닫아 둬요', p3: '물병을 챙겨요' }, 0.25,
                { conclude: '날씨 소식을 어른과 듣고 미리 준비하면 궂은 날도 안전해요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"내일 날씨를 가족과 함께 알아보고, 무엇을 준비할지 정해 볼까요?" 출구 1번에서 냇가를 고른 학생에게 다시 짚는다.',
          exit: [
            { type: 'choice', prompt: '큰비가 오는 날 가지 않을 곳은?', options: ['냇가', '집', '교실'], answer: 0, difficulty: 0.1, explain: '냇물은 갑자기 불어날 수 있어요.' },
            { type: 'tool', tool: 'mindmap', options: { topic: '날씨 준비', slots: ['추운 날', '더운 날'], cards: ['목도리', '물병', '두꺼운 장갑', '얇은 모자'] }, state: { at: {} }, prompt: '물건을 추운 날과 더운 날 준비물로 나누어요.', target: { sort: { '추운 날': ['목도리', '두꺼운 장갑'], '더운 날': ['물병', '얇은 모자'] } }, difficulty: 0.15 },
            MOOD,
          ],
        },
        wsTitle: '날씨마다 안전하게',
        ws: [
          { type: 'table', prompt: '날씨에 맞는 안전한 행동을 쓰세요.', columns: ['날씨', '안전한 행동'], cells: [['큰비', ''], ['센 바람', ''], ['많은 눈', ''], ['무더위', '']], answer: '예) 냇가에 가지 않아요 / 집 안에 있어요 / 미끄럽지 않은 신발 / 물을 자주 마셔요' },
          { type: 'choice', prompt: '센 바람이 불 때 피할 곳에 ○ 하세요.', options: ['간판 아래', '집 안', '교실'], answer: '간판 아래' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '무더운 날에는 목마르기 전에 ___을 자주 마셔요.', answer: '물' },
          { type: 'draw', prompt: '눈 오는 날 안전하게 걷는 내 모습을 그려요.' },
        ],
        notes: '근거: 행정안전부 자연재난 국민행동요령(호우·태풍·대설·폭염). 자주 보이는 어려움: ① 큰비에 물 구경을 간다 → 냇가·물 흐르는 길에 가지 않는다. ② 바람 부는 날 나무 아래로 피한다 → 간판·나무 아래를 피한다. ③ 더운 날 물을 참는다 → 자주 마신다.',
      }),
    ],
  });
})();
