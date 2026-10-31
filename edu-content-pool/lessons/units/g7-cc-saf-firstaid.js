/* 중1 창체 안전교육 — 응급처치 (차시 2개). 근거: 「학교 안전교육 실시 기준 등에 관한 고시」 별표 2 중학교 응급처치 1·2항. 절차는 대한심폐소생협회 일반인 과정(가슴압박 소생술) 범위.
 * 장면·인물은 이 단원을 위해 직접 지은 것이다(가명). */
(function () {
  const G = 7; const CODE = 'saf-firstaid';
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
    id: `g${G}-cc-saf-firstaid`, schema: 'edu-unit.v1', catalogUnit: UNIT,
    grade: G, subject: '창체', unitTitle: TITLE,
    flow: '중학교 첫해 응급처치 단원으로, 쓰러진 사람을 만났을 때 "무엇을 먼저 할지"를 몸에 익히는 두 시간입니다. 1차시에는 응급상황과 그렇지 않은 상황을 가르고, 119에 전화했을 때 위치·상황·환자 상태를 차례로 말하며 상담원 안내를 따르는 법을 익힙니다. 2차시에는 반응 확인 → 119와 자동심장충격기 요청 → 호흡 확인 → 가슴압박으로 이어지는 일반인 가슴압박 소생술 순서와 압박 요령을 익히고, 마네킹이 있으면 실습합니다. 2학년에서 지혈·자동심장충격기, 3학년에서 하임리히법·골절로 이어집니다. 중1 보건(health) 단원에 응급처치 차시가 있으면 학교 결정으로 연계해 운영할 수 있습니다.',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '응급상황 가려내고 119에 또박또박 알리기',
        objective: '응급상황과 그렇지 않은 상황을 구별하고, 119에 신고할 때 위치·상황·환자 상태를 차례로 말할 수 있다.',
        draw: 'a student kneeling beside a person sitting on a park bench while another student holds a paper phone and points to a street sign',
        banner: '어디서, 무슨 일, 지금 상태', extra: [{ motif: 'flower', x: 300, y: 222, color: 'rose' }],
        intro: {
          teacher: '"공원에서 어떤 어른이 갑자기 쓰러졌어요. 휴대전화를 꺼냈다면 119에 가장 먼저 무엇을 말해야 할까요?" 대답을 몇 개 듣고(기다릴 반응: "사람이 쓰러졌어요", "빨리 와 주세요") "구급차가 어디로 가야 하는지는 누가 알려 주나요?"라고 되묻는다. "내가 잘 모르면 가만히 있는 게 낫다"는 생각이 나오면 응급처치는 전문가가 오기 전까지 생명을 잇는 일이고, 신고만 해도 이미 응급처치의 첫 단계라는 점을 짚는다.',
          student: '응급실이나 구급차를 본 적이 있다면, 그때 어떤 상황이었을지 짝과 이야기해 봅시다(내 일이나 가족 일은 말하지 않아도 돼요).',
          demo: { tool: 'story', options: { cards: [{ id: '위치', text: '위치를 말해요', motif: 'house' }, { id: '상황', text: '무슨 일인지 말해요', motif: 'cloud' }], slots: ['먼저', '다음'], shuffle: false }, sequence: [{ order: ['위치', '상황'] }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 응급상황인지 가려내기', minutes: 13, tool: 'mindmap',
            teacher: '"지금 바로 119를 불러야 할까요, 보건실이나 어른의 도움으로 충분할까요?" 카드마다 까닭을 한 문장으로 말하게 한다. "숨을 이상하게 헐떡여요"를 덜 급한 쪽에 두는 학생이 많다 — "쓰러진 사람의 헐떡이는 숨은 정상 호흡이 아닐 수 있어요"라고 짚는다. 가벼운 찰과상까지 119로 보내는 학생에게는 응급 자원을 꼭 필요한 곳에 쓰는 것도 공동체 안전이라고 말해 준다.',
            task: '상황 카드를 바로 119에 알릴 상황과 학교·가정에서 돌볼 상황으로 나누어요.',
            levels: LV,
            items: [
              MS('상황 카드를 두 칸으로 나누어 보세요.', '119를 부를까', ['바로 119', '보건실·어른'], ['불러도 반응이 없어요', '무릎이 살짝 까졌어요', '숨을 쉬지 않아요', '모기에 물려 가려워요'], { '바로 119': ['불러도 반응이 없어요', '숨을 쉬지 않아요'], '보건실·어른': ['무릎이 살짝 까졌어요', '모기에 물려 가려워요'] }, 0.15),
              MS('이번에는 조금 헷갈리는 상황이에요. 두 칸으로 나누어 보세요.', '119를 부를까', ['바로 119', '보건실·어른'], ['쓰러져 헐떡이며 숨 쉬어요', '피가 멈추지 않고 솟아요', '코피가 조금 났어요', '손가락을 종이에 베었어요'], { '바로 119': ['쓰러져 헐떡이며 숨 쉬어요', '피가 멈추지 않고 솟아요'], '보건실·어른': ['코피가 조금 났어요', '손가락을 종이에 베었어요'] }, 0.3,
                { predict: { q: '헐떡이는 숨은?', options: ['괜찮음', '위험'], answer: 1 }, conclude: '쓰러진 사람의 헐떡이는 숨은 정상 호흡이 아닐 수 있어 바로 119에 알려요.' }),
              MP('응급처치를 하는 까닭으로 알맞은 것만 골라 담으세요.', '응급처치의 목적', ['생명을 지켜요', '상태가 나빠지지 않게 해요', '병원 치료를 대신해요', '회복을 도와요'], ['생명을 지켜요', '상태가 나빠지지 않게 해요', '회복을 도와요'], 0.2),
            ],
          },
          {
            id: 'a2', title: '활동 2. 119 신고 말하기 연습', minutes: 14, tool: 'story',
            teacher: '"상담원이 먼저 묻는 것은 무엇일까요?" 1번에서 "빨리 와 주세요"만 되풀이하는 장면이 왜 시간을 늦추는지 이야기한다. 2번은 주소를 모를 때 큰 건물·간판·전봇대 번호 같은 표지를 말하면 된다는 점을 짚는다. 3번 뒤 짝과 역할을 바꿔 신고 대화를 해 보게 하고, "상담원이 끊으라고 할 때까지 전화를 끊지 않는다"는 것을 반드시 짚어 준다.',
            task: '119에 신고할 때 말할 내용을 차례대로 놓고, 상담원의 질문에 알맞은 대답을 이어요.',
            levels: LV,
            items: [
              SO('119 신고 때 할 일을 차례대로 놓아 보세요.', '119 신고', ['먼저', '다음', '그다음', '마지막'], [{ id: 'c1', text: '어디인지 말해요', motif: 'house' }, { id: 'c2', text: '무슨 일인지 말해요', motif: 'cloud' }, { id: 'c3', text: '환자 상태를 말해요', motif: 'leaf' }, { id: 'c4', text: '안내를 따르며 기다려요', motif: 'star' }], ['c1', 'c2', 'c3', 'c4'], 0.2),
              MM('상담원의 질문과 알맞은 대답을 이어 보세요. 맞지 않는 카드는 남겨요.', '신고 대화', [{ id: 'q1', label: '어디인가요?' }, { id: 'q2', label: '무슨 일인가요?' }, { id: 'q3', label: '환자가 숨을 쉬나요?' }], ['○○공원 정문 앞이에요', '어른이 쓰러졌어요', '숨을 쉬지 않아요', '그냥 빨리 와 주세요'], { q1: '○○공원 정문 앞이에요', q2: '어른이 쓰러졌어요', q3: '숨을 쉬지 않아요' }, 0.25),
              EB('신고하다가 상담원이 "끊지 말고 기다리세요"라고 했어요. 어떻게 할까요?', '119 상담원이 가슴압박 방법을 알려 주겠다며 전화를 끊지 말라고 해요.', [
                { id: 'hold', text: '스피커를 켜고 안내를 따라요', result: '안내대로 도우며 구급대를 기다려요.', mood: '안심' },
                { id: 'hang', text: '신고했으니 끊고 기다려요', result: '도울 방법을 듣지 못해 시간이 흘러요.', mood: '걱정', why: '상담원이 끊으라고 할 때까지 전화를 들고 안내를 따라요.' },
                { id: 'call', text: '끊고 가족에게 먼저 전화해요', result: '구급대에 필요한 정보가 끊겨요.', mood: '불안', why: '119와 연결된 전화가 가장 중요해요. 다른 연락은 주변에 부탁해요.' }], 'hold', 0.2,
                { conclude: '119 신고는 위치부터 또박또박, 그리고 끊으라고 할 때까지 안내를 따르는 것이에요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 배운 신고 순서를 한 줄로 말해 볼까요?" 출구 1번에서 "가벼운 화상 물집"을 119로 보낸 학생과 이야기 나누고, 2번에서 넷째 보기를 고른 학생에게는 주소를 몰라도 주변 표지로 위치를 알릴 수 있음을 짚는다.',
          exit: [
            { type: 'tool', tool: 'mindmap', options: { topic: '학교에서 생긴 일', slots: ['바로 119', '보건실·어른'], cards: ['계단에서 넘어져 의식이 없어요', '손등에 작은 물집이 생겼어요', '갑자기 쓰러져 숨이 없어요', '체육 시간에 발목이 조금 시큰해요'] }, state: { at: {} }, prompt: '학교에서 생긴 일을 두 칸으로 나누어 보세요.',
              target: { sort: { '바로 119': ['계단에서 넘어져 의식이 없어요', '갑자기 쓰러져 숨이 없어요'], '보건실·어른': ['손등에 작은 물집이 생겼어요', '체육 시간에 발목이 조금 시큰해요'] } }, difficulty: 0.2 },
            { type: 'choice', prompt: '처음 가 본 동네에서 사람이 쓰러졌는데 주소를 몰라요. 어떻게 알릴까요?', options: ['주소를 몰라 신고하지 않아요', '보이는 큰 건물·간판 이름을 말해요', '집에 가서 주소를 찾아 신고해요'], answer: 1, difficulty: 0.2, explain: '주소를 몰라도 큰 건물·간판·버스 정류장 이름으로 위치를 알릴 수 있어요.' },
            { type: 'short', prompt: '119에 신고할 때 꼭 말해야 할 세 가지를 차례대로 쓰세요.' },
            { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' },
          ],
        },
        ws: {
          title: '응급상황과 119 신고',
          items: [
            { type: 'table', prompt: '상황을 읽고 바로 119에 알릴 상황이면 ○, 아니면 ×를 쓰세요.', columns: ['상황', '○ / ×'], cells: [['불러도 반응이 없어요', ''], ['종이에 손가락을 베었어요', ''], ['피가 멈추지 않고 솟아요', ''], ['모기에 물렸어요', '']], answer: '○, ×, ○, ×' },
            { type: 'choice', prompt: '119 신고 때 가장 먼저 말할 것에 ○ 하세요.', options: ['내 이름과 학교', '사고가 난 위치', '사고가 난 까닭'], answer: '사고가 난 위치' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '상담원이 ___라고 할 때까지 전화를 끊지 않고 ___를 따라요.', answer: '끊으, 안내' },
            { type: 'short', prompt: '우리 학교 정문에서 사고가 났다고 가정하고, 119에 말할 위치 설명을 한 문장으로 쓰세요.' },
          ],
        },
        diff: {
          easy: '맞는 칸에 놓은 카드에 초록 테두리가 생기고, 갈림길 문항은 결과 칸이 처음부터 보여요.',
          base: '모든 카드를 놓은 뒤 확인을 눌러 스스로 고쳐요.',
          challenge: '카드 순서가 섞여 나오고, 헐떡이는 숨처럼 헷갈리는 상황을 가려내요.',
        },
        notes: '자주 보이는 어려움: ① 잘 몰라서 아무것도 안 하는 것이 낫다고 여긴다 → 신고 자체가 응급처치의 시작임을 짚는다. ② 신고를 마치면 전화를 끊는다 → 상담원이 가슴압박 등 안내를 해 준다. ③ 주소를 모르면 신고를 못 한다고 여긴다 → 주변 표지로 위치를 말한다. 학생이나 가족의 실제 응급 경험을 말하게 하지 않는다.',
      }),

      LESSON(2, {
        title: '쓰러진 사람에게 가슴압박 소생술 하는 순서 익히기',
        objective: '쓰러진 사람을 보았을 때 반응 확인부터 가슴압박까지의 순서를 말하고, 바른 압박 자세와 요령을 설명할 수 있다.',
        draw: 'a student pressing with interlocked hands on the center of a paper training mannequin chest while a friend runs with a heart-shaped paper defibrillator box',
        banner: '세게, 빠르게, 멈추지 않게', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }],
        intro: {
          teacher: '"심장이 멈춘 사람을 보면 구급차가 오기 전까지 우리가 할 수 있는 일이 있을까요?" 대답을 듣고(기다릴 반응: "심폐소생술이요", "구급차만 기다려요") 구급차가 도착하기 전 곁에 있는 사람이 바로 가슴압박을 시작하는 것이 생명을 지키는 데 중요하다고 알린다. "잘못 누르면 더 다칠까 봐 못 하겠다"는 말이 나오면 일반인은 인공호흡 없이 가슴압박만 해도 되고, 119 상담원이 안내도 해 준다는 점을 먼저 안심시킨다.',
          student: '심폐소생술이라는 말을 들어 본 곳(방송·학교·체험관 등)을 짝에게 말해 봅시다.',
          demo: { tool: 'story', options: { cards: [{ id: '반응', text: '어깨 두드려 반응 확인', motif: 'sun' }, { id: '도움', text: '119와 AED 요청', motif: 'house' }], slots: ['먼저', '다음'], shuffle: false }, sequence: [{ order: ['반응', '도움'] }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 가슴압박 소생술 순서 놓기', minutes: 13, tool: 'story',
            teacher: '"왜 호흡 확인보다 119 요청이 먼저일까요?" 1번에서 가슴압박을 맨 앞에 두는 학생에게 "주변이 안전한지, 반응이 있는지 모르고 누르면 어떻게 될까요?"라고 묻는다. 2번에서 "누가 119 좀 불러 주세요"처럼 막연하게 부르면 아무도 움직이지 않을 수 있어, "빨간 옷 입은 분 119에 신고해 주세요"처럼 사람을 정해 부탁해야 한다는 점을 짚는다.',
            task: '쓰러진 사람을 보았을 때 할 일을 차례대로 놓고, 도움을 부탁하는 바른 말을 골라요.',
            levels: LV,
            items: [
              SO('쓰러진 사람을 보았을 때 할 일을 차례대로 놓아 보세요.', '가슴압박 소생술', ['1', '2', '3', '4', '5'], [{ id: 's1', text: '주변이 안전한지 봐요', motif: 'sun' }, { id: 's2', text: '어깨 두드려 반응 확인', motif: 'cloud' }, { id: 's3', text: '119와 AED를 부탁해요', motif: 'house' }, { id: 's4', text: '숨을 쉬는지 봐요', motif: 'leaf' }, { id: 's5', text: '가슴압박을 시작해요', motif: 'star' }], ['s1', 's2', 's3', 's4', 's5'], 0.3),
              MP('도움을 부탁하는 말로 알맞은 것만 골라 담으세요.', '도움 부탁하기', ['파란 모자 분, 119 불러 주세요', '누가 좀 도와주세요', '검은 가방 분, AED 가져와 주세요', '다들 사진 찍지 마세요'], ['파란 모자 분, 119 불러 주세요', '검은 가방 분, AED 가져와 주세요'], 0.25,
                { conclude: '사람을 정해 부탁해야 "누군가 하겠지" 하며 모두 머뭇거리지 않아요.' }),
              EB('어깨를 두드렸더니 반응이 없고, 숨을 가끔 헐떡여요. 어떻게 할까요?', '쓰러진 어른이 반응이 없고 가끔 헐떡이는 숨만 쉬어요. 119에는 이미 연락했어요.', [
                { id: 'push', text: '비정상 호흡이니 압박 시작해요', result: '구급대가 올 때까지 피가 돌도록 도와요.', mood: '안심' },
                { id: 'wait', text: '숨을 쉬니 구급대를 기다려요', result: '귀한 시간이 그대로 흘러가요.', mood: '걱정', why: '반응 없이 헐떡이는 숨은 정상 호흡으로 보지 않아요.' },
                { id: 'water', text: '물을 먹여 깨워 봐요', result: '물이 기도로 들어갈 수 있어요.', mood: '불안', why: '의식이 없는 사람에게는 아무것도 먹이지 않아요.' }], 'push', 0.3),
            ],
          },
          {
            id: 'a2', title: '활동 2. 바른 압박 자세와 요령', minutes: 14, tool: 'mindmap',
            teacher: '"압박할 곳은 정확히 어디일까요?" 가슴 한가운데(가슴뼈 아래쪽 절반)를 깍지 낀 손바닥 아래쪽으로 누른다는 것을 보여 준다. 팔꿈치를 굽혀 누르는 학생이 많다 — "팔을 쭉 펴고 몸무게로 수직으로 눌러요"라고 고쳐 준다. 깊이는 약 5cm, 속도는 1분에 100~120회이고, 누른 뒤 가슴이 완전히 올라오게 한다는 것을 짚는다. 마네킹이 있으면 3번 뒤 모둠별로 2분씩 돌아가며 실습한다.',
            task: '바른 압박 자세와 틀린 자세를 나누고, 압박 요령과 그 까닭을 이어요. 마네킹이 있으면 직접 눌러 봐요.',
            levels: LV,
            items: [
              MS('압박 자세 카드를 두 칸으로 나누어 보세요.', '압박 자세', ['바른 자세', '고칠 자세'], ['팔꿈치를 쭉 펴요', '가슴 한가운데를 눌러요', '팔꿈치를 굽혀 눌러요', '배 위쪽을 눌러요'], { '바른 자세': ['팔꿈치를 쭉 펴요', '가슴 한가운데를 눌러요'], '고칠 자세': ['팔꿈치를 굽혀 눌러요', '배 위쪽을 눌러요'] }, 0.2),
              MM('압박 요령과 그 까닭을 이어 보세요. 맞지 않는 카드는 남겨요.', '압박 요령', [{ id: 'm1', label: '약 5cm 깊이로 눌러요' }, { id: 'm2', label: '1분에 100~120회 빠르기' }, { id: 'm3', label: '누른 뒤 가슴이 다 올라오게' }], ['심장에서 피를 짜내요', '피가 쉬지 않고 돌아요', '심장에 피가 다시 차요', '살살 눌러야 안 아파요'], { m1: '심장에서 피를 짜내요', m2: '피가 쉬지 않고 돌아요', m3: '심장에 피가 다시 차요' }, 0.35,
                { conclude: '세게(약 5cm), 빠르게(분당 100~120회), 다 올라오게 눌러야 뇌와 심장에 피가 가요.' }),
              { prompt: '마네킹이 있으면 모둠별로 2분씩 돌아가며 가슴압박을 하고, 없으면 짝과 순서를 말로 시연한 뒤 "다 했어요"를 누르세요.', free: true, talk: true, difficulty: 0 },
            ],
          },
        ],
        wrap: {
          teacher: '"구급대가 오면 그때 멈추면 될까요?" 가슴압박은 구급대가 이어받거나 환자가 움직이거나 숨을 쉬기 시작할 때까지 계속한다는 것을 확인한다. 출구 1번 순서에서 호흡 확인을 맨 앞에 둔 학생에게는 반응 확인과 도움 요청이 먼저라는 점을 다시 짚는다.',
          exit: [
            { type: 'tool', tool: 'story', options: { title: '도서관에서 쓰러진 사람', slots: ['1', '2', '3', '4'], cards: [{ id: 'e1', text: '반응을 확인해요', motif: 'sun' }, { id: 'e2', text: '사서 선생님께 119 부탁', motif: 'house' }, { id: 'e3', text: '숨을 쉬는지 봐요', motif: 'leaf' }, { id: 'e4', text: '가슴압박을 해요', motif: 'star' }] }, state: { at: {} }, prompt: '도서관에서 사람이 쓰러졌어요. 할 일을 차례대로 놓으세요.',
              target: { order: ['e1', 'e2', 'e3', 'e4'] }, difficulty: 0.25 },
            { type: 'choice', prompt: '가슴압박은 언제까지 계속할까요?', options: ['1분만 하고 멈춰요', '구급대가 이어받거나 환자가 움직일 때까지', '팔이 조금 아플 때까지'], answer: 1, difficulty: 0.2, explain: '구급대가 이어받거나 환자가 움직이거나 숨을 쉬기 시작할 때까지 계속해요. 힘들면 다른 사람과 교대해요.' },
            { type: 'short', prompt: '가슴압박을 할 때 기억할 요령 두 가지를 쓰세요.' },
          ],
        },
        ws: {
          title: '가슴압박 소생술',
          items: [
            { type: 'table', prompt: '쓰러진 사람을 보았을 때 할 일의 차례를 번호로 쓰세요.', columns: ['할 일', '차례'], cells: [['숨을 쉬는지 봐요', ''], ['주변이 안전한지 봐요', ''], ['가슴압박을 시작해요', ''], ['어깨 두드려 반응 확인', ''], ['119와 AED를 부탁해요', '']], answer: '4, 1, 5, 2, 3' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '가슴 한가운데를 약 ___cm 깊이로, 1분에 ___~120회 빠르기로 눌러요.', answer: '5, 100' },
            { type: 'choice', prompt: '바른 압박 자세에 ○ 하세요.', options: ['팔꿈치를 굽혀요', '팔을 쭉 펴고 수직으로 눌러요', '한 손가락으로 눌러요'], answer: '팔을 쭉 펴고 수직으로 눌러요' },
            { type: 'short', prompt: '쓰러진 사람을 보고도 사람들이 머뭇거리는 까닭과, 내가 할 수 있는 첫 행동을 쓰세요.' },
          ],
        },
        diff: {
          easy: '카드를 놓으면 맞는지 바로 알려 주고, 갈림길 문항은 결과 칸이 처음부터 보여요.',
          base: '모든 카드를 놓은 뒤 확인을 눌러 스스로 고쳐요.',
          challenge: '카드 순서가 섞여 나오고, 헐떡이는 숨처럼 헷갈리는 상황에서 판단해요.',
        },
        notes: '자주 보이는 어려움: ① 헐떡이는 숨을 정상 호흡으로 본다 → 반응이 없고 비정상 호흡이면 가슴압박을 시작한다. ② 팔꿈치를 굽혀 약하게 누른다 → 팔을 펴고 몸무게로 수직으로 누른다. ③ "누가 신고해 주세요"처럼 막연히 부탁한다 → 사람을 정해 부탁한다. 마네킹 실습 때는 실제 사람 몸을 누르지 않게 한다.',
      }),
    ],
  });
})();
