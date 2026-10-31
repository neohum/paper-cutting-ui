/* 중2 창체 법정교육 — 장애인식개선 (2차시). 근거: 장애인복지법 제25조·시행령 제16조(매년 1회·1시간 이상), 범교과 기준 연 2시간.
 * 편의시설은 점자블록(선형 = 방향 안내, 점형 = 멈춤·주의), 경사로, 점자·음성 안내 승강기, 저상버스, 자막·수어 통역, 장애인 전용 주차구역처럼 일반적인 것만 다룬다. 과태료 액수·설치 기준 숫자는 쓰지 않는다. 장면·인물은 가명. */
(function () {
  const G = 8; const CODE = 'disab';
  const UNIT = `g${G}-창체-${CODE}`;
  const TITLE = '장애인식개선';
  const base = (n) => ({
    id: `g${G}-cc-${CODE}-${String(n).padStart(2, '0')}`, schema: 'edu-lesson.v1',
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
  // 활동 문항 — 한 활동은 교구 하나로만 돈다(mindmap: MS·MM·MP / emotion: EB·ES / story: SO)
  const MS = (prompt, topic, slots, cards, sort, d, more) => ({ prompt, toolOptions: { mode: 'sort', topic, slots, cards }, target: { sort }, difficulty: d, ...more });
  const MM = (prompt, topic, slots, cards, match, d, more) => ({ prompt, toolOptions: { mode: 'match', topic, slots, cards }, target: { match }, difficulty: d, ...more });
  const MP = (prompt, topic, cards, pick, d, more) => ({ prompt, toolOptions: { mode: 'pick', topic, basket: topic, cards }, target: { pick }, difficulty: d, ...more });
  const EB = (prompt, situation, choices, choice, d, more) => ({ prompt, toolOptions: { mode: 'branch', situation, choices }, target: { choice }, difficulty: d, ...more });
  const ES = (prompt, situation, feeling, level, d, more) => ({ prompt, toolOptions: { mode: 'scale', situation, feeling }, target: { level }, difficulty: d, ...more });
  const SO = (prompt, title, slots, cards, order, d, more) => ({ prompt, toolOptions: { mode: 'order', title, slots, cards }, target: { order }, difficulty: d, ...more });
  const C = (id, text, motif) => ({ id, text, motif });
  const TALK = (prompt) => ({ prompt, free: true, talk: true, difficulty: 0 });
  const LV = { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } };
  const LVB = { easy: { showBack: true }, base: {}, challenge: {} };
  // 출구 질문
  const XS = (prompt, topic, slots, cards, sort, d = 0.2) => ({ type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic, slots, cards }, state: { at: {} }, prompt, target: { sort }, difficulty: d });
  const XB = (prompt, situation, choices, choice, d = 0.2) => ({ type: 'tool', tool: 'emotion', options: { mode: 'branch', situation, choices }, state: { choice: null }, prompt, target: { choice }, difficulty: d });
  const XC = (prompt, options, answer, explain, d = 0.2) => ({ type: 'choice', prompt, options, answer, difficulty: d, explain });
  const XT = (prompt) => ({ type: 'short', prompt });
  const MOOD = { type: 'mood', prompt: '오늘 수업을 마친 내 마음은 어떤가요?' };
  // 도입 시연
  const DEMO = (topic, slots, cards, sort) => ({ tool: 'mindmap', options: { mode: 'sort', topic, slots, cards, shuffle: false }, sequence: [{ sort }] });
  const DIFF = {
    easy: '맞는 칸에 놓은 카드에 초록 테두리가 생기고, 갈림길 문항은 결과 칸이 처음부터 보여요.',
    base: '모든 카드를 놓은 뒤 확인을 눌러 스스로 고쳐요.',
    challenge: '카드 순서가 섞여 나오고, 그럴듯하지만 맞지 않는 보기를 근거를 들어 가려내요.',
  };
  // 도입 6 + 전개 27 + 정리 7 = 40분
  const LESSON = (n, o) => Object.assign(base(n), {
    title: o.title, objective: o.objective,
    illustration: { prompt: PROMPT(o.draw), scene: SCENE(o.banner, o.extra) },
    stages: [
      { id: 'intro', title: '도입', minutes: 6, teacher: o.intro.teacher, student: o.intro.student, demo: o.intro.demo },
      { id: 'main', title: '전개', minutes: 27, activities: o.acts },
      { id: 'wrapup', title: '정리', minutes: 7, teacher: o.wrap.teacher, exitTicket: o.wrap.exit },
    ],
    worksheet: o.ws, differentiation: o.diff || DIFF, teacherNotes: o.notes,
  });

  PaperLessons.registerUnit({
    id: `g${G}-cc-${CODE}`, schema: 'edu-unit.v1', catalogUnit: UNIT,
    grade: G, subject: '창체', unitTitle: TITLE,
    flow: '1학년에서 편견과 에티켓을 배운 학생들이 2학년에서는 환경과 관계로 시선을 넓힙니다. 1차시에는 점자블록·경사로·저상버스·자막 같은 편의시설의 쓰임을 알고, 그것을 막는 행동(점자블록 위 자전거, 전용 주차구역 주차)을 가려내며 이동권을 생각합니다. 2차시에는 장애가 있는 친구와 함께하는 모둠 활동에서 대신 해 주거나 빼놓는 것이 아니라 강점을 살려 동등하게 참여하는 방법을 고릅니다. 3학년(차별 판단·보편적 설계)으로 이어집니다.',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '편의시설의 쓰임 알고 막는 행동 찾기',
        objective: '여러 편의시설이 누구의 이동과 정보 접근을 돕는지 말하고, 편의시설을 막는 행동을 가려낼 수 있다.',
        draw: 'a paper city street with yellow tactile paving, a ramp to a library, a low-floor bus and a screen with captions',
        banner: '모두가 다닐 수 있는 길', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }],
        intro: {
          teacher: '"우리 학교 앞 보도의 노란 블록, 무엇을 위한 것인지 아나요?" 대답을 듣고(기다릴 반응: "시각장애인이요", "길 표시요") 시연으로 시설 카드를 나눈다. "편의시설은 장애인만 쓰는 거예요"라는 말이 나오면 "유모차를 미는 사람이나 큰 짐을 든 사람에게 경사로는 어떨까요?"라고 되묻는다. 오늘은 편의시설의 쓰임과 그것을 막는 행동을 알아본다고 밝힌다.',
          student: '학교나 동네에서 본 편의시설 하나를 떠올려 어디에 있었는지 짝에게 말해 봅시다.',
          demo: DEMO('편의시설', ['이동을 도와요', '정보를 도와요'], ['경사로', '영상 자막'], { '이동을 도와요': ['경사로'], '정보를 도와요': ['영상 자막'] }),
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 편의시설과 쓰임 잇기', minutes: 14, tool: 'mindmap',
            teacher: '"점자블록에는 줄무늬와 점무늬가 있어요. 무엇이 다를까요?" 선형 블록은 가는 방향을, 점형 블록은 멈추거나 주의할 곳을 알린다는 점을 짚는다. 자막·수어 통역은 정보를 얻을 권리와 이어진다는 점을 말해 준다. 이동과 정보에 다가갈 수 있어야 학교·일·여가에 참여할 수 있다는 것이 이동권·접근권의 뜻임을 정리한다.',
            task: '편의시설 카드와 그 쓰임을 잇고, 이동과 정보 가운데 무엇을 돕는지 나누어요.',
            levels: LV,
            items: [
              MM('편의시설과 쓰임을 이어 보세요. 맞지 않는 카드는 남겨요.', '편의시설의 쓰임', [{ id: 'f1', label: '줄무늬 점자블록' }, { id: 'f2', label: '점무늬 점자블록' }, { id: 'f3', label: '저상버스' }], ['가는 방향을 알려요', '멈춤·주의를 알려요', '계단 없이 타고 내려요', '버스를 빨리 달리게 해요'], { f1: '가는 방향을 알려요', f2: '멈춤·주의를 알려요', f3: '계단 없이 타고 내려요' }, 0.2),
              MS('편의시설을 두 가지로 나누어 보세요.', '무엇을 도울까', ['이동을 도와요', '정보를 도와요'], ['승강기 점자 버튼', '방송 수어 통역', '건물 입구 경사로', '영상 자막'], { '이동을 도와요': ['승강기 점자 버튼', '건물 입구 경사로'], '정보를 도와요': ['방송 수어 통역', '영상 자막'] }, 0.25),
              MP('경사로가 도움이 되는 사람만 골라 담아 보세요.', '경사로가 돕는 사람', ['휠체어 사용자', '유모차를 미는 보호자', '여행 가방을 끄는 사람', '아무도 없어요'], ['휠체어 사용자', '유모차를 미는 보호자', '여행 가방을 끄는 사람'], 0.3,
                { conclude: '편의시설은 장애인의 이동권을 지키고, 동시에 많은 사람의 생활을 편하게 해요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 편의시설을 막는 행동 가려내기', minutes: 13, tool: 'mindmap',
            teacher: '"잠깐 세워 둔 자전거 하나가 왜 문제일까요?" 시각장애인이 점자블록을 따라가다 부딪히거나 길을 잃을 수 있다는 점을 짚는다. 장애인 전용 주차구역은 휠체어가 오르내릴 공간이 필요해 넓게 만든다는 점을 말해 준다. "잠깐인데요"라는 말에는 그 잠깐이 누군가에게는 길이 끊기는 시간이라고 되묻는다. 3번은 짝과 말로 나눈다.',
            task: '편의시설을 막는 행동과 지키는 행동을 나누고, 우리 학교에서 할 일을 정해요.',
            levels: LV,
            items: [
              MS('행동을 두 가지로 나누어 보세요.', '편의시설 앞에서', ['지키는 행동', '막는 행동'], ['점자블록 위를 비워 둬요', '점자블록에 자전거를 세워요', '승강기는 필요한 사람 먼저', '경사로 앞에 짐을 쌓아요'], { '지키는 행동': ['점자블록 위를 비워 둬요', '승강기는 필요한 사람 먼저'], '막는 행동': ['점자블록에 자전거를 세워요', '경사로 앞에 짐을 쌓아요'] }, 0.2),
              MM('막는 행동과 그 결과를 이어 보세요. 맞지 않는 카드는 남겨요.', '막으면 생기는 일', [{ id: 'b1', label: '전용 주차구역에 일반 차 주차' }, { id: 'b2', label: '자막 없는 학교 안내 영상' }, { id: 'b3', label: '점자블록 위 입간판' }], ['휠체어를 내릴 공간이 없어요', '청각장애 학생이 내용을 몰라요', '걷다가 부딪혀요', '주차가 편해져요'], { b1: '휠체어를 내릴 공간이 없어요', b2: '청각장애 학생이 내용을 몰라요', b3: '걷다가 부딪혀요' }, 0.25,
                { conclude: '편의시설은 비어 있고 이어져 있어야 제 몫을 해요.' }),
              TALK('짝과 "우리 학교에서 편의시설이 필요하거나 막혀 있을 만한 곳 한 군데"를 떠올려 말하고 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"내일 등굣길에 점자블록을 보면 무엇을 확인해 볼 건가요?" 출구 1번에서 줄무늬와 점무늬를 헷갈린 학생에게는 줄은 가는 방향, 점은 멈춤이라는 점을 다시 짚는다.',
          exit: [
            XS('행동 카드를 두 가지로 나누어 보세요.', '지킬까 막을까', ['지키는 행동', '막는 행동'], ['자막을 켜고 영상을 틀어요', '점자블록 위에서 모여 이야기해요', '경사로를 비워 둬요', '전용 주차구역에 잠깐 세워요'], { '지키는 행동': ['자막을 켜고 영상을 틀어요', '경사로를 비워 둬요'], '막는 행동': ['점자블록 위에서 모여 이야기해요', '전용 주차구역에 잠깐 세워요'] }),
            XC('점무늬 점자블록이 알려 주는 것은 무엇인가요?', ['계속 걸어갈 방향', '멈추거나 주의할 곳', '화장실 위치'], 1, '점형 블록은 멈추거나 주의할 곳, 선형 블록은 가는 방향을 알려요.'),
            XT('편의시설이 장애인뿐 아니라 여러 사람에게 도움이 되는 예를 한 문장으로 쓰세요.'),
            MOOD,
          ],
        },
        ws: {
          title: '모두가 다닐 수 있는 길',
          items: [
            { type: 'table', prompt: '편의시설의 쓰임을 쓰세요.', columns: ['편의시설', '쓰임'], cells: [['줄무늬 점자블록', ''], ['점무늬 점자블록', ''], ['저상버스', ''], ['영상 자막', '']], answer: '가는 방향 안내, 멈춤·주의 안내, 계단 없이 타고 내림, 소리 정보를 글로 전함' },
            { type: 'choice', prompt: '편의시설을 막는 행동에 ○ 하세요.', options: ['경사로 비워 두기', '점자블록에 자전거 세우기', '자막 켜기'], answer: '점자블록에 자전거 세우기' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '장애인이 원하는 곳에 다닐 수 있는 권리를 ___권이라고 해요.', answer: '이동' },
            { type: 'draw', prompt: '우리 학교 입구를 그리고 있으면 좋을 편의시설을 표시하세요.' },
          ],
        },
        notes: '자주 보이는 어려움: ① 편의시설을 "장애인을 위한 특별한 배려"로만 본다 → 이동권·접근권이라는 권리이고, 많은 사람에게 도움이 됨을 짚는다. ② "잠깐"이면 괜찮다고 여긴다 → 그 잠깐에 길이 끊기는 결과를 장면으로 보여 준다. ③ 점자블록 종류는 선형(방향)·점형(멈춤·주의) 두 가지만 다룬다.',
      }),

      LESSON(2, {
        title: '통합학급 모둠에서 함께 참여하는 방법 고르기',
        objective: '장애가 있는 친구와 함께하는 모둠 활동에서 대신 해 주거나 빼놓지 않고, 강점을 살려 동등하게 참여하는 방법을 고를 수 있다.',
        draw: 'a group of paper-cut middle schoolers around a table making a poster together, each holding a different tool, one using a tablet with picture cards',
        banner: '함께하면 달라요', extra: [{ motif: 'flower', x: 300, y: 222, color: 'peach' }],
        intro: {
          teacher: '"모둠 과제를 할 때 가장 기분이 좋았던 순간은 언제였나요?" 대답을 듣고(기다릴 반응: "내 의견이 쓰였을 때요", "내가 맡은 일을 해냈을 때요") 시연으로 행동 카드를 나눈다. "장애가 있는 친구는 그냥 쉬게 해 주는 게 배려예요"라는 말이 나오면 "내 몫이 하나도 없는 모둠 활동은 어떤 기분일까요?"라고 되묻는다. 오늘은 모두가 참여하는 모둠을 만드는 방법을 고른다고 밝힌다.',
          student: '모둠 활동에서 내가 잘할 수 있는 역할 하나를 짝에게 말해 봅시다.',
          demo: DEMO('모둠 활동', ['함께 참여', '빼놓기'], ['잘하는 역할 나누기', '앉아만 있게 하기'], { '함께 참여': ['잘하는 역할 나누기'], '빼놓기': ['앉아만 있게 하기'] }),
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 모둠 장면에서 선택하기', minutes: 14, tool: 'emotion',
            teacher: '"이렇게 하면 그 친구는 모둠에서 어떤 사람이 될까요?" 결과 칸을 읽게 한다. 대신 다 해 주는 선택은 친절해 보여도 배울 기회를 빼앗는다는 점을 짚는다. 놀림 장면에서는 장애를 이유로 한 놀림은 학교폭력이 될 수 있고, 담임·특수교사·상담 선생님께 알릴 수 있다고 말해 준다.',
            task: '통합학급 모둠 활동 장면에서 어떻게 할지 고르고 결과를 살펴봐요.',
            levels: LVB,
            items: [
              EB('발표 자료를 만드는데 모둠 친구 준이 그림 카드로 말하는 친구예요.', '사회 모둠 발표 준비 시간, 준은 말 대신 그림 카드로 생각을 전하는 친구예요.', [
                { id: 'skip', text: '준에게는 아무 역할도 안 줘요', result: '준은 발표 내내 혼자 앉아 있어요.', mood: '외로움', why: '역할이 없으면 함께하는 모둠이 아니에요.' },
                { id: 'role', text: '준이 좋아하는 그림 그리기를 맡겨요', result: '준이 그린 지도가 발표의 중심이 돼요.', mood: '뿌듯함' },
                { id: 'do', text: '준 몫까지 내가 다 해요', result: '준은 배울 기회를 잃고 나는 지쳐요.', mood: '짜증', why: '대신 다 해 주면 친구가 참여하고 배울 기회가 사라져요.' }], 'role', 0.2),
              EB('체육 시간 팀을 짜는데 다리가 불편한 친구가 남았어요.', '체육 시간 피구 팀을 짜는데, 목발을 쓰는 하늘이 마지막까지 남았어요.', [
                { id: 'leave', text: '"넌 그냥 구경해"라고 말해요', result: '하늘은 체육 시간이 싫어져요.', mood: '슬픔', why: '참여할 방법을 함께 찾는 것이 먼저예요.' },
                { id: 'adapt', text: '규칙을 함께 바꿔 같이 할 방법을 찾자고 해요', result: '앉아서 던지는 역할을 정해 모두 즐겁게 해요.', mood: '기쁨' },
                { id: 'pity', text: '불쌍하니까 우리 팀에 넣어 준다고 해요', result: '하늘은 동정받는 느낌에 속상해요.', mood: '속상함', why: '"넣어 준다"는 말은 친구를 동등한 팀원으로 보지 않는 말이에요.' }], 'adapt', 0.25),
              EB('반 친구들이 장애가 있는 친구의 말투를 흉내 내며 웃어요.', '쉬는 시간, 몇몇이 도의 말투를 흉내 내며 웃고 있어요.', [
                { id: 'laugh', text: '분위기 맞춰 같이 웃어요', result: '도는 학교에 오기 싫어해요.', mood: '슬픔', why: '함께 웃는 것도 놀림을 키우는 행동이에요.' },
                { id: 'stop', text: '"그만해"라고 말하고 선생님께 알려요', result: '흉내가 멈추고 선생님이 반 이야기를 나눠요.', mood: '안심' },
                { id: 'later', text: '나중에 도에게만 괜찮냐고 물어요', result: '도는 고맙지만 놀림은 계속돼요.', mood: '걱정', why: '위로와 함께 놀림을 멈추게 하는 행동도 필요해요.' }], 'stop', 0.3,
                { conclude: '빼놓지도, 대신하지도, 놀리지도 않고 — 함께할 방법을 찾는 것이 통합학급의 힘이에요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 모두가 참여하는 모둠 규칙 만들기', minutes: 13, tool: 'mindmap',
            teacher: '"공정한 모둠은 모두에게 똑같은 일을 주는 모둠일까요?" 같은 일보다 각자 할 수 있는 방식으로 참여하는 것이 공정할 수 있다는 점을 짚는다. 2번은 정답이 하나뿐이 아니므로 고른 까닭을 말하게 한다. 3번은 모둠에서 말로 나눈다.',
            task: '모두가 참여하는 모둠을 위한 행동을 고르고, 우리 모둠 규칙을 정해요.',
            levels: LV,
            items: [
              MS('모둠 행동을 두 가지로 나누어 보세요.', '모둠 행동', ['함께 참여', '빼놓거나 대신하기'], ['그림·글·말 중 편한 방법 고르기', '천천히 말할 때 기다려 주기', '시간 없으니 대신 해 주기', '어려운 친구는 빼고 하기'], { '함께 참여': ['그림·글·말 중 편한 방법 고르기', '천천히 말할 때 기다려 주기'], '빼놓거나 대신하기': ['시간 없으니 대신 해 주기', '어려운 친구는 빼고 하기'] }, 0.2),
              MM('친구의 특성과 함께하는 방법을 이어 보세요. 맞지 않는 카드는 남겨요.', '함께하는 방법', [{ id: 't1', label: '글 읽기가 느린 친구' }, { id: 't2', label: '소리를 듣기 어려운 친구' }, { id: 't3', label: '손을 쓰기 어려운 친구' }], ['자료를 소리 내어 함께 읽어요', '말할 내용을 글로도 보여 줘요', '말로 아이디어를 내는 역할', '역할 없이 쉬게 해요'], { t1: '자료를 소리 내어 함께 읽어요', t2: '말할 내용을 글로도 보여 줘요', t3: '말로 아이디어를 내는 역할' }, 0.25,
                { conclude: '같은 방법이 아니라 각자 할 수 있는 방법으로 참여할 때 모두가 모둠의 주인이 돼요.' }),
              TALK('모둠에서 "모두가 참여하는 우리 모둠 규칙 한 가지"를 정해 말하고 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 정한 모둠 규칙은 장애가 있는 친구에게만 필요한 규칙일까요?" 기다려 주기·편한 방법 고르기는 모두에게 좋은 규칙이라는 점으로 정리한다. 출구 1번에서 대신 해 주기를 고른 학생에게는 친구가 배울 기회를 다시 떠올리게 한다.',
          exit: [
            XS('행동 카드를 두 가지로 나누어 보세요.', '모둠에서', ['함께 참여', '빼놓거나 대신하기'], ['친구 의견을 끝까지 들어요', '못 할 거라며 일을 안 줘요', '잘하는 일을 맡겨요', '말없이 친구 몫을 해 버려요'], { '함께 참여': ['친구 의견을 끝까지 들어요', '잘하는 일을 맡겨요'], '빼놓거나 대신하기': ['못 할 거라며 일을 안 줘요', '말없이 친구 몫을 해 버려요'] }),
            XC('장애를 이유로 친구를 놀리는 장면에서 알맞은 행동은 무엇인가요?', ['같이 웃는다', '그만하라고 말하고 선생님께 알린다', '모른 척한다'], 1, '장애를 이유로 한 놀림은 멈추게 하고 어른께 알려야 해요.'),
            XT('통합학급에서 "공정한 모둠"이란 무엇인지 한 문장으로 쓰세요.'),
          ],
        },
        ws: {
          title: '모두가 참여하는 모둠',
          items: [
            { type: 'table', prompt: '친구의 특성에 맞는 함께하는 방법을 쓰세요.', columns: ['친구의 특성', '함께하는 방법'], cells: [['글 읽기가 느림', ''], ['소리를 듣기 어려움', ''], ['손을 쓰기 어려움', '']], answer: '함께 소리 내어 읽기, 글로도 보여 주기, 말로 아이디어 내는 역할' },
            { type: 'choice', prompt: '친구를 동등한 팀원으로 대하는 말에 ○ 하세요.', options: ['불쌍하니까 넣어 줄게', '너는 그냥 구경해', '같이 할 방법을 찾아보자'], answer: '같이 할 방법을 찾아보자' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '대신 다 해 주면 친구가 ___ 기회가 사라져요.', answer: '배울(참여할)' },
            { type: 'short', prompt: '우리 모둠 규칙 한 가지와 그 규칙이 모두에게 좋은 까닭을 쓰세요.' },
          ],
        },
        notes: '자주 보이는 어려움: ① 대신 해 주기·쉬게 해 주기를 배려로 여긴다 → 참여와 배울 기회를 빼앗는 결과를 보게 한다. ② "똑같이 나누기"만 공정하다고 여긴다 → 각자 할 수 있는 방식의 참여를 함께 생각한다. ③ 우리 반 특정 학생의 장애를 예로 들거나 드러내지 않는다. 장애 관련 놀림이 실제로 있다면 수업과 별도로 담임·특수교사와 처리한다.',
      }),
    ],
  });
})();
