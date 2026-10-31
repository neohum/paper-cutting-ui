/* 중3 창체 안전교육 — 응급처치 (차시 2개). 근거: 「학교 안전교육 실시 기준 등에 관한 고시」 별표 2 중학교 응급처치 3·4항. 절차는 대한심폐소생협회 일반인 과정 범위.
 * 장면·인물은 이 단원을 위해 직접 지은 것이다(가명). */
(function () {
  const G = 9; const CODE = 'saf-firstaid';
  const UNIT = `g${G}-창체-${CODE}`;
  const TITLE = '응급처치';
  const base = (n) => ({
    id: `g${G}-cc-${CODE}-0${n}`, schema: 'edu-lesson.v1',
    catalog: { unit: UNIT, lesson: n },
    grade: G, subject: '창체', unitTitle: TITLE,
    standards: [],
    minutes: 40,
    formats: ['chromebook', 'projector', 'print'],
  });
  const PROMPT = (what) => `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`;
  const SCENE = (text, extra = []) => ({ viewBox: [480, 270], layers: [
    { motif: 'sun', x: 410, y: 58, s: 0.8 }, { motif: 'cloud', x: 120, y: 52 }, { motif: 'hills', y: 204 },
    { motif: 'house', x: 96, y: 214, color: 'sky', s: 0.9 }, { motif: 'tree', x: 380, y: 214 }, ...extra,
    { motif: 'text', x: 240, y: 140, text, size: 22 },
  ] });
  const MS = (prompt, topic, slots, cards, sort, d, more) => ({ prompt, toolOptions: { mode: 'sort', topic, slots, cards }, target: { sort }, difficulty: d, ...more });
  const MM = (prompt, topic, slots, cards, match, d, more) => ({ prompt, toolOptions: { mode: 'match', topic, slots, cards }, target: { match }, difficulty: d, ...more });
  const MP = (prompt, topic, cards, pick, d, more) => ({ prompt, toolOptions: { mode: 'pick', topic, basket: topic, cards }, target: { pick }, difficulty: d, ...more });
  const EB = (prompt, situation, choices, choice, d, more) => ({ prompt, toolOptions: { mode: 'branch', situation, choices }, target: { choice }, difficulty: d, ...more });
  const SO = (prompt, title, slots, cards, order, d, more) => ({ prompt, toolOptions: { mode: 'order', title, slots, cards }, target: { order }, difficulty: d, ...more });
  const LV = { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } };
  const LVB = { easy: { showBack: true }, base: {}, challenge: {} };
  const C = (id, text, motif) => ({ id, text, motif });
  const XM = (prompt, topic, slots, cards, sort, d) => ({ type: 'tool', tool: 'mindmap', options: { topic, slots, cards }, state: { at: {} }, prompt, target: { sort }, difficulty: d });
  const XO = (prompt, title, slots, cards, order, d) => ({ type: 'tool', tool: 'story', options: { title, slots, cards }, state: { at: {} }, prompt, target: { order }, difficulty: d });
  const XB = (prompt, situation, choices, choice, d) => ({ type: 'tool', tool: 'emotion', options: { mode: 'branch', situation, choices }, state: { choice: null }, prompt, target: { choice }, difficulty: d });
  const CH = (prompt, options, answer, explain, d = 0.2) => ({ type: 'choice', prompt, options, answer, difficulty: d, explain });
  const SH = (prompt) => ({ type: 'short', prompt });
  const MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };
  const TALK = (prompt) => ({ prompt, free: true, talk: true, difficulty: 0 });
  const DIFF = (hard) => ({
    easy: '맞는 칸에 놓은 카드에 초록 테두리가 생기고, 갈림길 문항은 결과 칸이 처음부터 보여요.',
    base: '모든 카드를 놓은 뒤 확인을 눌러 스스로 고쳐요.',
    challenge: `카드 순서가 섞여 나오고, ${hard}`,
  });
  // 도입 6 + 전개 27 + 정리 7 = 40분
  // 갈림길(branch)은 emotion 교구에만 있다 — 다른 교구 활동에 놓인 갈림길 문항은 '알맞은 행동 하나 고르기'(pick)로 바꾼다
  const FIX = (a) => (a.tool === 'emotion' ? a : Object.assign({}, a, { items: a.items.map((it) => {
    const o = it.toolOptions || {};
    if (o.mode !== 'branch') return it;
    const { toolOptions, target, ...rest } = it;
    return { ...rest, toolOptions: { mode: 'pick', topic: '알맞은 행동', basket: '고른 행동', cards: o.choices.map((c) => ({ id: c.id, text: c.text, why: c.why })) }, target: { pick: [target.choice] } };
  }) }));
  const LESSON = (n, o) => Object.assign(base(n), {
    title: o.title, objective: o.objective,
    illustration: { prompt: PROMPT(o.draw), scene: SCENE(o.banner, o.extra) },
    stages: [
      { id: 'intro', title: '도입', minutes: 6, teacher: o.intro.teacher, student: o.intro.student, demo: o.intro.demo },
      { id: 'main', title: '전개', minutes: 27, activities: o.acts.map(FIX) },
      { id: 'wrapup', title: '정리', minutes: 7, teacher: o.wrap.teacher, exitTicket: o.wrap.exit },
    ],
    worksheet: o.ws, differentiation: o.diff, teacherNotes: o.notes,
  });

  PaperLessons.registerUnit({
    id: `g${G}-cc-${CODE}`, schema: 'edu-unit.v1', catalogUnit: UNIT,
    grade: G, subject: '창체', unitTitle: TITLE,
    flow: '중3 응급처치 단원은 급식실·체육 시간처럼 학교에서 실제로 자주 생기는 두 가지 응급상황을 다룹니다. 1차시에는 음식이 목에 걸린 사람의 신호를 알아보고, 기침을 할 수 있으면 기침을 돕고 못 하면 복부 밀어내기(하임리히법)를 하는 판단과 순서를 익힙니다. 2차시에는 발목을 삐거나 뼈가 부러진 것 같은 상황에서 움직이지 않게 고정하고, 차갑게 하고, 도움을 청하는 일상 응급처치를 익힙니다. 1·2학년의 신고·가슴압박·지혈·자동심장충격기와 이어지며, 고등학교에서 상황별 판단과 법·윤리로 넓어집니다. 법령상 연계 대상 단원은 없지만 체육 수업의 안전 지도와 학교 결정으로 이어 운영할 수 있습니다.',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '목에 걸린 신호 알아보고 복부 밀어내기 순서 익히기',
        objective: '기도가 막힌 사람의 신호를 알아보고, 기침 여부에 따라 기침 돕기와 복부 밀어내기(하임리히법) 중 알맞은 처치를 고를 수 있다.',
        draw: 'a student standing behind a friend and wrapping arms around the friend\'s waist with a paper fist placed above the navel in a school cafeteria',
        banner: '목 감싸 쥐면 기도 막힘', extra: [{ motif: 'flower', x: 300, y: 222, color: 'peach' }],
        intro: {
          teacher: '"급식 시간에 친구가 갑자기 두 손으로 목을 감싸 쥐고 말을 못 해요. 무슨 일일까요?" 대답을 듣고(기다릴 반응: "체했어요", "목에 걸렸어요") 목을 감싸 쥐는 몸짓은 숨길이 막혔다는 신호일 수 있다고 알린다. "등을 세게 치면 된다"는 말이 나오면 기침을 할 수 있는지부터 보아야 하고, 기침을 못 할 때 쓰는 방법이 따로 있다고 짚는다.',
          student: '떡이나 사탕처럼 목에 걸리기 쉬운 음식에는 무엇이 있을지 짝과 세 가지씩 말해 봅시다.',
          demo: { tool: 'story', options: { cards: [C('ask', '"목에 걸렸어?" 물어요', 'cloud'), C('cough', '기침하게 해요', 'leaf')], slots: ['먼저', '다음'], shuffle: false }, sequence: [{ order: ['ask', 'cough'] }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 기도가 막힌 신호와 판단', minutes: 13, tool: 'mindmap',
            teacher: '"기침을 세게 하고 있다면 우리가 끼어들어야 할까요?" 기침을 할 수 있으면 스스로 뱉어 내도록 계속 기침하게 하고 곁을 지킨다는 점을 짚는다. 숨 쉬는 소리가 거의 없고 말을 못 하는 것이 심하게 막힌 신호라는 것을 1번에서 확인하고, 2번에서 물을 먹이는 카드를 고르는 학생에게는 "막힌 길에 물이 들어가면 어떻게 될까요?"라고 묻는다.',
            task: '기도가 막힌 신호를 가려내고, 기침을 할 수 있을 때와 못 할 때 할 일을 나누어요.',
            levels: LV,
            items: [
              MP('심하게 기도가 막혔다는 신호만 골라 담으세요.', '심한 기도 막힘', ['두 손으로 목을 감싸요', '말을 못 해요', '숨소리가 거의 없어요', '세게 기침을 해요'], ['두 손으로 목을 감싸요', '말을 못 해요', '숨소리가 거의 없어요'], 0.25),
              MS('상황에 맞는 행동을 두 칸으로 나누어 보세요.', '기침이 되나요', ['기침을 할 수 있다', '기침을 못 한다'], ['계속 기침하게 해요', '곁에서 지켜봐요', '복부 밀어내기를 해요', '119에 알려요'], { '기침을 할 수 있다': ['계속 기침하게 해요', '곁에서 지켜봐요'], '기침을 못 한다': ['복부 밀어내기를 해요', '119에 알려요'] }, 0.3,
                { predict: { q: '기침 중엔?', options: ['밀어내기', '기침 돕기'], answer: 1 }, conclude: '기침을 할 수 있으면 스스로 뱉도록 돕고, 못 하면 바로 복부 밀어내기를 해요.' }),
              EB('친구가 목을 감싸 쥐고 기침도 말도 못 해요. 어떻게 할까요?', '급식실에서 친구가 떡을 먹다 목을 감싸 쥐었어요. 기침 소리도 말소리도 나지 않아요.', [
                { id: 'thrust', text: '뒤에서 감싸 복부 밀어내기를 해요', result: '몇 번 만에 떡이 튀어나와요.', mood: '안심' },
                { id: 'water', text: '물을 먹여 넘기게 해요', result: '물이 막힌 숨길로 들어갈 수 있어요.', mood: '불안', why: '기도가 막힌 사람에게 물을 먹이면 더 위험해요.' },
                { id: 'finger', text: '손가락으로 목 안을 마구 훑어요', result: '음식이 더 깊이 밀려 들어갈 수 있어요.', mood: '걱정', why: '보이지 않는 이물질을 손가락으로 훑으면 더 깊이 밀려 들어가요.' }], 'thrust', 0.3),
            ],
          },
          {
            id: 'a2', title: '활동 2. 복부 밀어내기 순서와 자세', minutes: 14, tool: 'story',
            teacher: '"주먹은 정확히 어디에 둘까요?" 배꼽과 명치 사이, 배꼽 바로 위에 주먹의 엄지 쪽을 대고 다른 손으로 감싸 위로 당기듯 밀어 올린다고 보여 준다. 명치뼈를 누르는 학생이 많다 — 뼈를 누르면 다칠 수 있어 배꼽 바로 위라고 고쳐 준다. 의식을 잃고 쓰러지면 바닥에 눕히고 119에 알린 뒤 가슴압박을 시작한다는 것까지 잇는다. 실습은 실제로 힘껏 밀지 않고 자세만 흉내 낸다.',
            task: '복부 밀어내기를 하는 차례를 놓고, 바른 자세와 의식을 잃었을 때 할 일을 골라요.',
            levels: LV,
            items: [
              SO('복부 밀어내기의 차례를 놓아 보세요.', '복부 밀어내기', ['1', '2', '3', '4'], [C('h1', '"도와줄게" 말하고 뒤에 서요', 'cloud'), C('h2', '두 팔로 허리를 감싸요', 'leaf'), C('h3', '배꼽 위에 주먹을 대요', 'sun'), C('h4', '위로 당기듯 밀어 올려요', 'star')], ['h1', 'h2', 'h3', 'h4'], 0.25),
              MS('자세 카드를 두 칸으로 나누어 보세요.', '밀어내기 자세', ['바른 자세', '고칠 자세'], ['주먹을 배꼽 바로 위에', '안쪽 위로 당겨 올려요', '주먹을 명치뼈 위에', '등을 앞으로 세게 밀어요'], { '바른 자세': ['주먹을 배꼽 바로 위에', '안쪽 위로 당겨 올려요'], '고칠 자세': ['주먹을 명치뼈 위에', '등을 앞으로 세게 밀어요'] }, 0.3),
              EB('밀어내기를 하는 중에 친구가 축 늘어지며 의식을 잃었어요. 어떻게 할까요?', '복부 밀어내기를 하던 중 친구가 의식을 잃고 몸이 늘어졌어요.', [
                { id: 'cpr', text: '눕히고 119, 가슴압박 시작', result: '구급대가 올 때까지 생명을 이어요.', mood: '안심' },
                { id: 'more', text: '세워 둔 채 밀어내기를 계속해요', result: '함께 넘어져 다칠 수 있어요.', mood: '걱정', why: '의식을 잃으면 눕히고 심폐소생술로 바꿔요.' },
                { id: 'wait', text: '깨어날 때까지 지켜봐요', result: '숨을 쉬지 못한 채 시간이 흘러요.', mood: '불안', why: '의식이 없으면 바로 119에 알리고 가슴압박을 시작해요.' }], 'cpr', 0.3,
                { conclude: '의식을 잃으면 눕히고 119에 알린 뒤 가슴압박을 시작해요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 배운 판단을 한 문장으로 말해 볼까요?" (기다릴 반응: "기침하면 지켜보고, 못 하면 밀어내기") 출구 1번에서 기침을 하는 사람에게 밀어내기를 고른 학생과 판단 기준을 다시 이야기한다. 복부 밀어내기를 받은 사람은 괜찮아 보여도 병원 진료를 받게 한다는 점으로 마무리한다.',
          exit: [
            XB('친구가 사탕을 삼키다 켁켁 세게 기침해요. 어떻게 할까요?', '쉬는 시간에 친구가 사탕을 먹다 사레가 들려 세게 기침을 해요. 말은 조금 할 수 있어요.', [
              { id: 'watch', text: '계속 기침하게 하고 곁에 있어요', result: '기침으로 사탕을 뱉어 내요.', mood: '안심' },
              { id: 'push', text: '바로 복부 밀어내기를 해요', result: '아직 필요 없는 처치예요.', mood: '걱정', why: '기침을 할 수 있으면 먼저 스스로 뱉도록 도와요.' },
              { id: 'water', text: '물을 마시게 해요', result: '사레가 더 심해질 수 있어요.', mood: '불안', why: '기침 중에 물을 먹이면 더 사레들 수 있어요.' }], 'watch', 0.25),
            CH('복부 밀어내기에서 주먹을 대는 곳은 어디인가요?', ['명치뼈 위', '배꼽 바로 위', '아랫배'], 1, '배꼽과 명치 사이, 배꼽 바로 위에 주먹을 대요.'),
            SH('복부 밀어내기로 이물질이 나온 뒤에도 병원 진료를 받게 하는 까닭을 쓰세요.'),
          ],
        },
        ws: {
          title: '기도가 막혔을 때',
          items: [
            { type: 'table', prompt: '상황에 알맞은 행동을 쓰세요.', columns: ['상황', '할 일'], cells: [['세게 기침을 해요', ''], ['기침도 말도 못 해요', ''], ['의식을 잃었어요', '']], answer: '계속 기침하게 하고 지켜보기 / 복부 밀어내기 / 눕히고 119·가슴압박' },
            { type: 'choice', prompt: '기도가 막혔다는 신호에 ○ 하세요.', options: ['두 손으로 목을 감싸 쥐어요', '하품을 해요', '크게 웃어요'], answer: '두 손으로 목을 감싸 쥐어요' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '뒤에서 허리를 감싸고 ___ 바로 위에 주먹을 대어 ___로 당기듯 밀어 올려요.', answer: '배꼽, 위' },
            { type: 'short', prompt: '급식실에서 목에 음식이 걸리는 사고를 막을 수 있는 생활 습관을 두 가지 쓰세요.' },
          ],
        },
        diff: DIFF('기침이 되는 상황과 안 되는 상황을 견주어 판단해요.'),
        notes: '자주 보이는 어려움: ① 기침을 하는데도 밀어내기를 한다 → 기침이 되면 스스로 뱉도록 돕는다. ② 물을 먹이거나 손가락으로 훑는다 → 하지 않는다. ③ 주먹을 명치뼈에 댄다 → 배꼽 바로 위. 짝 실습은 자세만 흉내 내고 실제로 밀지 않는다.',
      }),

      LESSON(2, {
        title: '삐거나 부러졌을 때 고정하고 식히고 알리기',
        objective: '염좌나 골절이 의심될 때 다친 곳을 움직이지 않게 고정하고 냉찜질하며 도움을 청하는 처치를 고를 수 있다.',
        draw: 'a student kneeling beside a friend on a sports field holding a paper splint and a towel-wrapped ice pack next to the friend\'s ankle',
        banner: '움직이지 말고, 고정하고', extra: [{ motif: 'leaf', x: 300, y: 222, color: 'mint' }],
        intro: {
          teacher: '"축구를 하다 친구가 발목을 접질려 주저앉았어요. 친구가 \'괜찮아, 계속하자\' 하면 어떻게 할까요?" 대답을 듣고 다친 곳을 계속 쓰면 더 다칠 수 있다는 점을 짚는다. "뼈를 맞춰 줘야 한다"는 말이 나오면 비뚤어진 뼈를 일반인이 맞추려 하면 더 다친다고 고쳐 준다.',
          student: '운동하다 다치기 쉬운 몸의 곳을 짝과 세 군데씩 말해 봅시다.',
          demo: { tool: 'mindmap', options: { topic: '발목을 삐었을 때', slots: ['해요', '하지 않아요'], cards: ['움직이지 않게 해요', '참고 계속 뛰어요'], shuffle: false }, sequence: [{ sort: { '해요': ['움직이지 않게 해요'], '하지 않아요': ['참고 계속 뛰어요'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 삐었을 때와 부러졌을 때', minutes: 13, tool: 'mindmap',
            teacher: '"얼음을 피부에 바로 대면 어떻게 될까요?" 얼음은 수건에 싸서 대고, 다친 곳을 심장보다 조금 높이 둔다는 점을 짚는다. 뼈가 피부 밖으로 보이는 카드에서 "밀어 넣어요"를 고르는 학생에게는 상처로 균이 들어가고 더 다칠 수 있어 깨끗한 천으로 덮고 119에 알린다고 고쳐 준다.',
            task: '삐거나 부러진 것 같을 때 할 일과 하지 말아야 할 일을 나누고, 상황과 처치를 이어요.',
            levels: LV,
            items: [
              MS('발목을 삐었을 때의 행동을 두 칸으로 나누어 보세요.', '발목 염좌', ['해요', '하지 않아요'], ['수건에 싼 얼음을 대요', '다리를 조금 높여요', '얼음을 맨살에 오래 대요', '아파도 주물러 풀어요'], { '해요': ['수건에 싼 얼음을 대요', '다리를 조금 높여요'], '하지 않아요': ['얼음을 맨살에 오래 대요', '아파도 주물러 풀어요'] }, 0.25),
              MM('상황과 알맞은 처치를 이어 보세요. 맞지 않는 카드는 남겨요.', '상황별 처치', [{ id: 'f1', label: '팔이 휘어 보이고 몹시 아픔' }, { id: 'f2', label: '뼈가 피부 밖으로 보임' }, { id: 'f3', label: '높은 곳에서 떨어져 목이 아픔' }], ['부목으로 고정해요', '깨끗한 천으로 덮고 119', '움직이지 않게 하고 119', '뼈를 밀어 넣어요'], { f1: '부목으로 고정해요', f2: '깨끗한 천으로 덮고 119', f3: '움직이지 않게 하고 119' }, 0.35,
                { conclude: '목·허리를 다친 것 같으면 함부로 옮기지 말고 그 자리에서 119를 기다려요.' }),
              MP('부목으로 쓸 수 있는 물건만 골라 담으세요.', '부목 대신 쓸 것', ['접은 두꺼운 잡지', '곧은 나무판', '돌돌 만 담요', '물에 젖은 휴지'], ['접은 두꺼운 잡지', '곧은 나무판', '돌돌 만 담요'], 0.2),
            ],
          },
          {
            id: 'a2', title: '활동 2. 부목 고정 순서', minutes: 14, tool: 'story',
            teacher: '"부목은 다친 곳만 감싸면 될까요?" 다친 곳의 위아래 관절까지 함께 고정해야 움직이지 않는다고 짚는다. 너무 꽉 묶는 학생이 있다 — 고정한 뒤 손끝·발끝 색과 감각을 살펴 피가 잘 통하는지 본다고 말해 준다. 3번은 짝과 잡지와 삼각건(또는 체육복)으로 팔 고정을 흉내 내 본다.',
            task: '팔이 부러진 것 같을 때 고정하는 차례를 놓고, 고정한 뒤 살필 것을 골라요.',
            levels: LV,
            items: [
              SO('팔이 부러진 것 같을 때 고정 차례를 놓아 보세요.', '팔 고정하기', ['1', '2', '3', '4'], [C('s1', '움직이지 않게 받쳐요', 'cloud'), C('s2', '위아래 관절까지 부목', 'leaf'), C('s3', '천으로 묶어 고정해요', 'sun'), C('s4', '손끝 색과 감각 살펴요', 'star')], ['s1', 's2', 's3', 's4'], 0.3),
              EB('부목을 묶었더니 친구 손끝이 하얗게 변하고 저리대요. 어떻게 할까요?', '팔에 부목을 대고 천으로 묶었는데 친구 손끝이 창백하고 저리다고 해요.', [
                { id: 'loose', text: '묶은 천을 조금 느슨하게 해요', result: '손끝 색이 돌아오고 저림이 줄어요.', mood: '안심' },
                { id: 'tight', text: '더 단단히 묶어요', result: '피가 더 안 통할 수 있어요.', mood: '걱정', why: '너무 꽉 묶으면 피가 통하지 않아요.' },
                { id: 'off', text: '부목을 모두 풀어 버려요', result: '다친 팔이 다시 흔들려요.', mood: '불안', why: '고정은 유지하고 묶은 세기만 조절해요.' }], 'loose', 0.3),
              TALK('짝과 두꺼운 잡지와 체육복으로 팔 고정을 흉내 내 보고, 손끝 색 살피기까지 한 뒤 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"다친 친구가 괜찮다고 하면 그냥 둘까요?" 겉으로 괜찮아 보여도 붓기나 통증이 심해지면 보건실과 병원 진료를 받게 한다는 점을 확인한다. 출구 1번에서 목을 다친 친구를 일으키는 보기를 고른 학생과 함께 그 까닭을 다시 짚는다.',
          exit: [
            XM('체육관에서 다친 상황의 행동을 두 칸으로 나누어 보세요.', '체육관 부상', ['해요', '하지 않아요'], ['손목을 받쳐 움직임 막기', '목 다친 친구 그대로 두기', '목 다친 친구 일으키기', '휜 손목 당겨 펴기'], { '해요': ['손목을 받쳐 움직임 막기', '목 다친 친구 그대로 두기'], '하지 않아요': ['목 다친 친구 일으키기', '휜 손목 당겨 펴기'] }, 0.25),
            CH('부목을 댈 때 고정할 범위로 알맞은 것은 무엇인가요?', ['다친 곳만', '다친 곳의 위아래 관절까지', '몸 전체'], 1, '위아래 관절까지 고정해야 다친 곳이 움직이지 않아요.'),
            SH('운동 전에 다치지 않으려고 할 수 있는 일을 두 가지 쓰세요.'),
          ],
        },
        ws: {
          title: '염좌·골절 응급처치',
          items: [
            { type: 'table', prompt: '안전한 행동이면 ○, 위험한 행동이면 ×를 쓰세요.', columns: ['행동', '○ / ×'], cells: [['수건에 싼 얼음을 대요', ''], ['휜 뼈를 당겨 맞춰요', ''], ['위아래 관절까지 고정해요', ''], ['목 다친 사람을 일으켜요', '']], answer: '○, ×, ○, ×' },
            { type: 'choice', prompt: '뼈가 피부 밖으로 보일 때 할 일에 ○ 하세요.', options: ['뼈를 밀어 넣어요', '깨끗한 천으로 덮고 119에 알려요', '물로 세게 씻어요'], answer: '깨끗한 천으로 덮고 119에 알려요' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '고정한 뒤에는 손끝·발끝의 ___과 감각을 살펴 너무 ___ 묶지 않았는지 봐요.', answer: '색, 꽉' },
            { type: 'short', prompt: '체육 시간에 친구가 발목을 삐었을 때 내가 할 일을 순서대로 쓰세요.' },
          ],
        },
        diff: DIFF('목·허리 부상처럼 옮기면 안 되는 상황을 가려내요.'),
        notes: '자주 보이는 어려움: ① 휜 뼈를 맞추려 한다 → 그대로 고정한다. ② 얼음을 맨살에 오래 댄다 → 수건에 싸서 댄다. ③ 목·허리를 다친 사람을 옮긴다 → 그 자리에서 움직이지 않게 하고 119. 실습에서 실제로 꽉 묶지 않는다.',
      }),
    ],
  });
})();
