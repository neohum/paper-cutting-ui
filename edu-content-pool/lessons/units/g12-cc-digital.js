/* 고3 창체 법정교육 — 인터넷·스마트폰 과의존 예방 (2차시). 근거: 지능정보화 기본법 제54조(학기별 1회 이상). 디지털 디톡스 주장의 사실·의견 가르기와 과의존 친구 돕기를 다룬다. 고3 사이버 중독 예방(g12-cc-saf-cyber: 사행산업·자취 디지털 생활·디지털 독립 계획)과 겹치지 않게 짰다.
 * 장면·인물은 이 단원을 위해 직접 지은 것이다(가명). 학생 자신의 경험을 털어놓게 하는 문항은 두지 않는다. */
(function () {
  const G = 12; const CODE = 'digital';
  const UNIT = `g${G}-창체-${CODE}`;
  const TITLE = '인터넷·스마트폰 과의존 예방';
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
    { motif: 'house', x: 96, y: 214, color: 'buttercup', s: 0.9 }, { motif: 'tree', x: 380, y: 214 }, ...extra,
    { motif: 'text', x: 240, y: 140, text, size: 22 },
  ] });
  // 활동 문항 — 한 활동은 교구 하나로만 돈다(mindmap: MS·MM·MP / emotion: EB·ES / story: SO)
  const MS = (prompt, topic, slots, cards, sort, d, more) => ({ prompt, toolOptions: { mode: 'sort', topic, slots, cards }, target: { sort }, difficulty: d, ...more });
  const MM = (prompt, topic, slots, cards, match, d, more) => ({ prompt, toolOptions: { mode: 'match', topic, slots, cards }, target: { match }, difficulty: d, ...more });
  const MP = (prompt, topic, cards, pick, d, more) => ({ prompt, toolOptions: { mode: 'pick', topic, basket: topic, cards }, target: { pick }, difficulty: d, ...more });
  const EB = (prompt, situation, choices, choice, d, more) => ({ prompt, toolOptions: { mode: 'branch', situation, choices }, target: { choice }, difficulty: d, ...more });
  const ES = (prompt, situation, feeling, level, d, more) => ({ prompt, toolOptions: { mode: 'scale', situation, feeling }, target: { level }, difficulty: d, ...more });
  const SO = (prompt, title, slots, cards, order, d, more) => ({ prompt, toolOptions: { mode: 'order', title, slots, cards }, target: { order }, difficulty: d, ...more });
  const SF = (prompt, title, slots, cards, fill, d, more) => ({ prompt, toolOptions: { mode: 'fill', title, slots, cards }, target: { fill }, difficulty: d, ...more });
  const C = (id, text, motif) => ({ id, text, motif });
  const TALK = (prompt) => ({ prompt, free: true, talk: true, difficulty: 0 });
  const LV = { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } };
  const LVB = { easy: { showBack: true }, base: {}, challenge: {} };
  // 출구 질문
  const XS = (prompt, topic, slots, cards, sort, d = 0.2) => ({ type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic, slots, cards }, state: { at: {} }, prompt, target: { sort }, difficulty: d });
  const XB = (prompt, situation, choices, choice, d = 0.2) => ({ type: 'tool', tool: 'emotion', options: { mode: 'branch', situation, choices }, state: { choice: null }, prompt, target: { choice }, difficulty: d });
  const XM = (prompt, topic, slots, cards, match, d = 0.2) => ({ type: 'tool', tool: 'mindmap', options: { mode: 'match', topic, slots, cards }, state: { at: {} }, prompt, target: { match }, difficulty: d });
  const XO = (prompt, title, slots, cards, order, d = 0.2) => ({ type: 'tool', tool: 'story', options: { mode: 'order', title, slots, cards }, state: { at: {} }, prompt, target: { order }, difficulty: d });
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
    flow: '고3 과의존 예방 단원은 정보를 판단하는 힘과 친구를 돕는 힘으로 마무리합니다. 1차시에는 "디지털 디톡스만이 답이다", "스마트폰이 뇌를 망가뜨린다" 같은 주장을 사실·의견·근거 없는 과장으로 가르고, 극단적인 끊기 대신 근거 있는 균형 사용 원칙을 세웁니다. 2차시에는 과의존으로 생활이 흔들리는 친구에게 비난 대신 걱정을 전하고 스마트쉼센터·Wee클래스 같은 도움을 안내하는 대화를 갈림길로 고릅니다. 고1의 세 신호, 고2의 AI·방송 의존을 이어받으며, 고3 안전교육 사이버 중독 예방 단원과 연계해 시수 인정 가능(학교 결정)합니다.',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '디지털 디톡스 주장을 사실·의견·과장으로 가르기',
        objective: '스마트폰 사용과 디지털 디톡스에 관한 주장을 사실·의견·근거 없는 과장으로 구별하고, 근거 있는 균형 사용 원칙을 세울 수 있다.',
        draw: 'a paper-cut scale balancing a smartphone on one side and a book, plant and running shoes on the other',
        banner: '끊기보다 균형', extra: [{ motif: 'leaf', x: 330, y: 224, color: 'mint' }],
        intro: {
          teacher: '"스마트폰을 일주일 끊으면 인생이 바뀐다는 영상, 본 적 있나요? 믿을 만할까요?" 대답을 듣고(기다릴 반응: "해 보니 좋았대요", "과장 같아요") 시연으로 주장을 나눈다. "유명한 사람이 말했으니 사실이에요"라는 말에는 "말한 사람의 유명함과 근거의 유무는 같은 걸까요?"라고 되묻는다. 오늘은 과의존에 관한 주장을 가려 읽고 나에게 맞는 균형을 정한다고 밝힌다.',
          student: '스마트폰 사용에 관해 들어 본 주장 하나를 떠올리고, 그것이 사실인지 의견인지 짝과 말해 봅시다.',
          demo: DEMO('주장의 성격', ['사실', '의견'], ['잠들기 전 화면은 빛을 내요', '폰 없는 삶이 더 멋져요'], { '사실': ['잠들기 전 화면은 빛을 내요'], '의견': ['폰 없는 삶이 더 멋져요'] }),
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 주장을 사실·의견·과장으로 나누기', minutes: 14, tool: 'mindmap',
            teacher: '"이 문장은 확인할 수 있는 것인가요, 생각인가요, 근거 없이 부풀린 것인가요?" 사실은 확인할 수 있는 것, 의견은 사람마다 다를 수 있는 판단, 과장은 근거 없이 단정하거나 부풀린 것으로 정리한다. 2번에서 "모든 청소년이 중독이다"를 사실에 넣는 학생에게 "\'모든\'이라는 말이 확인될 수 있을까요?"라고 묻는다. 과장된 공포가 오히려 대처를 막을 수 있다는 점을 짚는다.',
            task: '스마트폰 사용과 디지털 디톡스에 관한 주장을 사실·의견·과장으로 나누어요.',
            levels: LV,
            items: [
              MS('주장을 사실·의견·과장으로 나누어 보세요.', '주장 가려 읽기', ['사실', '의견', '과장'], ['방해 금지 모드는 알림을 줄여요', '알림이 오면 주의가 흩어져요', '폰 없는 저녁이 더 좋아요', '독서가 SNS보다 가치 있어요', '폰을 쓰면 뇌가 망가져요', '하루만 끊어도 성적이 올라요'], { '사실': ['방해 금지 모드는 알림을 줄여요', '알림이 오면 주의가 흩어져요'], '의견': ['폰 없는 저녁이 더 좋아요', '독서가 SNS보다 가치 있어요'], '과장': ['폰을 쓰면 뇌가 망가져요', '하루만 끊어도 성적이 올라요'] }, 0.3),
              MP('과장된 주장을 알아보는 신호만 골라 담아 보세요.', '과장의 신호', ['"모든"·"반드시" 같은 단정', '출처 없는 놀라운 숫자', '한 사람의 경험만 근거', '조사 기관과 방법을 밝힘'], ['"모든"·"반드시" 같은 단정', '출처 없는 놀라운 숫자', '한 사람의 경험만 근거'], 0.25),
              MM('주장과 그것을 확인하는 방법을 이어 보세요. 맞지 않는 카드는 남겨요.', '주장 확인하기', [{ id: 'v1', label: '"청소년 과의존이 늘었다"' }, { id: 'v2', label: '"끊었더니 행복해졌다"' }, { id: 'v3', label: '"이 앱이 집중력을 키운다"' }], ['공공기관 조사 결과 찾기', '한 사람의 경험임을 알기', '광고인지 확인하기', '댓글 수 세기'], { v1: '공공기관 조사 결과 찾기', v2: '한 사람의 경험임을 알기', v3: '광고인지 확인하기' }, 0.3,
                { conclude: '과의존 정보도 출처·근거·광고 여부를 따져 읽어야 해요. 과장된 공포는 대처를 막기도 해요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 끊기 대신 근거 있는 균형 원칙 세우기', minutes: 13, tool: 'mindmap',
            teacher: '"하루아침에 완전히 끊는 것과, 상황별로 쓰임을 정하는 것 중 무엇이 오래갈까요?" 극단적 끊기는 반동이 오기 쉽고, 상황별 원칙(잠자리·공부·식사 시간)이 오래간다는 점을 짚는다. 대학·일터에서는 스마트폰이 꼭 필요한 도구라는 점도 함께 말한다. 3번은 짝과 말로 나눈다.',
            task: '상황별로 근거 있는 균형 사용 원칙을 고르고 이어요.',
            levels: LV,
            items: [
              MM('상황과 균형 사용 원칙을 이어 보세요. 맞지 않는 카드는 남겨요.', '상황별 균형 원칙', [{ id: 'u1', label: '잠자리' }, { id: 'u2', label: '집중 공부' }, { id: 'u3', label: '함께하는 식사' }], ['충전은 침대 밖에서', '폰은 다른 공간에', '화면은 엎어 두기', '알림 소리 크게'], { u1: '충전은 침대 밖에서', u2: '폰은 다른 공간에', u3: '화면은 엎어 두기' }, 0.25),
              MS('계획을 두 가지로 나누어 보세요.', '오래가는 계획', ['오래가는 계획', '반동이 오기 쉬움'], ['밤 11시 이후 알림 끄기', '주 1회 사용 기록 보기', '오늘부터 폰 완전 끊기', '앱 전부 지우고 버티기'], { '오래가는 계획': ['밤 11시 이후 알림 끄기', '주 1회 사용 기록 보기'], '반동이 오기 쉬움': ['오늘부터 폰 완전 끊기', '앱 전부 지우고 버티기'] }, 0.3,
                { conclude: '균형 사용은 끊기가 아니라 상황마다 쓰임을 정하고 꾸준히 돌아보는 거예요.' }),
              TALK('짝과 함께 졸업 뒤에도 지킬 균형 원칙 한 가지를 정해 말하고 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 가린 주장 가운데 가장 그럴듯했던 과장은 무엇이었나요?" 출구 1번에서 "뇌가 망가진다"를 사실에 넣은 학생에게는 단정의 신호를 다시 짚는다. 불안을 키우는 정보보다 실천할 수 있는 원칙이 중요하다는 말로 마무리한다.',
          exit: [
            XS('주장을 두 가지로 나누어 보세요.', '사실일까 과장일까', ['사실', '과장'], ['알림은 주의를 흩어요', '화면 빛은 밤에도 밝아요', '폰은 무조건 해로워요', '끊으면 모든 게 해결돼요'], { '사실': ['알림은 주의를 흩어요', '화면 빛은 밤에도 밝아요'], '과장': ['폰은 무조건 해로워요', '끊으면 모든 게 해결돼요'] }),
            XC('오래 지킬 수 있는 스마트폰 계획으로 가장 알맞은 것은?', ['오늘부터 완전히 끊는다', '상황별로 쓰임을 정하고 꾸준히 돌아본다', '친구가 하는 대로 한다'], 1, '상황별 원칙과 점검이 오래가는 균형을 만들어요.'),
            XT('과장된 과의존 정보를 만났을 때 확인할 것 한 가지를 쓰세요.'),
          ],
        },
        ws: {
          title: '디지털 디톡스, 사실과 의견',
          items: [
            { type: 'table', prompt: '주장을 읽고 성격을 쓰세요.', columns: ['주장', '사실·의견·과장'], cells: [['알림이 오면 주의가 흩어진다', ''], ['폰 없는 저녁이 더 좋다', ''], ['폰을 쓰면 뇌가 망가진다', '']], answer: '사실 / 의견 / 과장' },
            { type: 'choice', prompt: '과장된 주장의 신호에 ○ 하세요.', options: ['조사 방법을 밝힘', '"모든 청소년이"라고 단정', '공공기관 자료 인용'], answer: '"모든 청소년이"라고 단정' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '균형 사용은 끊기가 아니라 상황마다 ___을 정하고 돌아보는 것이다.', answer: '쓰임' },
            { type: 'short', prompt: '졸업 뒤에도 지킬 나의 균형 사용 원칙 두 가지를 쓰세요.' },
          ],
        },
        notes: '자주 보이는 어려움: ① 과장된 공포 정보를 그대로 믿거나, 반대로 모든 정보를 무시한다 → 출처·근거·광고 여부로 가려 읽게 한다. ② 끊기만이 해법이라고 여긴다 → 상황별 원칙을 제시한다. ③ 통계 숫자는 지어내지 않고, 확인할 방법만 다룬다.',
      }),
      LESSON(2, {
        title: '과의존으로 흔들리는 친구에게 걱정 전하고 도움 잇기',
        objective: '과의존으로 생활이 흔들리는 친구에게 비난 대신 걱정을 전하는 말을 고르고, 스마트쉼센터·Wee클래스 같은 도움을 함께 찾는 행동을 할 수 있다.',
        draw: 'two students sitting on a paper-cut bench at sunset, one gently offering a hand while the other holds a phone',
        banner: '걱정을 전하는 말', extra: [{ motif: 'flower', x: 300, y: 222, color: 'rose' }],
        intro: {
          teacher: '"친구가 요즘 밤새 폰을 보느라 지각이 잦아요. 뭐라고 말하겠어요?" 대답을 듣고(기다릴 반응: "폰 좀 그만해", "네 인생이지") 시연으로 말을 나눈다. "말해도 안 들을 텐데요"라는 말이 나오면 "어떤 말이면 친구가 마음을 열까요? 비난일까요, 걱정일까요?"라고 되묻는다. 오늘은 친구를 돕는 대화를 연습한다고 밝힌다.',
          student: '누군가 나를 걱정해 줄 때 듣기 좋았던 말투를 가상의 예로 짝에게 말해 봅시다.',
          demo: DEMO('친구에게 하는 말', ['걱정을 전해요', '비난해요'], ['요즘 피곤해 보여 걱정돼', '넌 폰 중독이야'], { '걱정을 전해요': ['요즘 피곤해 보여 걱정돼'], '비난해요': ['넌 폰 중독이야'] }),
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 비난하는 말과 걱정을 전하는 말 가르기', minutes: 12, tool: 'mindmap',
            teacher: '"이 말을 들은 친구는 어떤 마음이 들까요?" "너는"으로 시작해 낙인을 찍는 말과 "나는 ~해서 걱정돼"로 내가 본 것을 전하는 말을 비교한다. 2번에서 "다 너를 위해서야"를 걱정의 말로 넣는 학생에게 "이 말에 친구가 할 수 있는 대답이 있을까요?"라고 묻는다. 진단하듯 "중독"이라는 말을 쓰지 않도록 이끈다.',
            task: '과의존이 걱정되는 친구에게 하는 말을 비난과 걱정으로 나누고, 고쳐 말해요.',
            levels: LV,
            items: [
              MS('친구에게 하는 말을 두 가지로 나누어 보세요.', '친구에게 하는 말', ['걱정을 전해요', '비난해요'], ['요즘 잠을 못 자는 것 같아', '같이 산책 갈래?', '넌 완전 폰 중독이야', '그러니까 성적이 그렇지'], { '걱정을 전해요': ['요즘 잠을 못 자는 것 같아', '같이 산책 갈래?'], '비난해요': ['넌 완전 폰 중독이야', '그러니까 성적이 그렇지'] }, 0.2),
              MM('비난하는 말과 고쳐 말한 걱정을 이어 보세요. 맞지 않는 카드는 남겨요.', '고쳐 말하기', [{ id: 'z1', label: '또 폰이냐, 한심하다' }, { id: 'z2', label: '그러다 대학 못 가' }, { id: 'z3', label: '알아서 해, 난 몰라' }], ['요즘 힘든 일 있어?', '네 계획이 잘되면 좋겠어', '도움 필요하면 말해 줘', '다 너를 위해서야'], { z1: '요즘 힘든 일 있어?', z2: '네 계획이 잘되면 좋겠어', z3: '도움 필요하면 말해 줘' }, 0.25),
              MP('과의존이 걱정되는 친구와 함께 찾아볼 도움만 골라 담아 보세요.', '함께 찾을 도움', ['스마트쉼센터 상담', 'Wee클래스 상담', '보호자와 의논', '새 게임 추천'], ['스마트쉼센터 상담', 'Wee클래스 상담', '보호자와 의논'], 0.25,
                { conclude: '"너는"의 비난보다 "나는 걱정돼"의 말이 마음을 열고, 전문 도움은 함께 찾을 때 시작하기 쉬워요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 친구를 돕는 갈림길에서 고르기', minutes: 15, tool: 'emotion',
            teacher: '"이렇게 하면 친구와의 관계는 어떻게 될까요?" 결과 칸을 읽고 친구의 마음을 상상하게 한다. 3번에서 친구가 밥도 거르고 잠도 거의 자지 않으며 매우 우울해 보인다면, 과의존만의 문제가 아닐 수 있으니 바로 어른에게 알리는 것이 먼저라는 점을 짚는다. 친구를 바꾸는 것이 내 책임이 아니라, 걱정을 전하고 도움에 잇는 것이 내 몫이라고 말한다.',
            task: '과의존으로 흔들리는 친구를 돕는 장면에서 알맞은 행동을 골라요.',
            levels: LVB,
            items: [
              EB('친구에게 어떻게 할까요?', '같은 반 태오가 밤새 영상을 보느라 이번 주에만 세 번 지각했어요.', [{ id: 'blame', text: '"넌 중독이야" 하고 몰아세워요', result: '태오가 화내며 말을 끊어요', mood: '속상함', why: '낙인 찍는 말은 마음을 닫게 해요.' }, { id: 'care', text: '"요즘 피곤해 보여, 괜찮아?"', result: '태오가 잠이 안 온다고 털어놔요', mood: '고마움' }], 'care', 0.2),
              EB('다음에 무엇을 할까요?', '태오가 스스로 줄이고 싶은데 잘 안 된다고 말해요.', [{ id: 'self', text: '"의지가 약해서 그래"', result: '태오가 더 자책해요', mood: '속상함', why: '조절이 어려운 것은 의지만의 문제가 아니에요.' }, { id: 'help', text: '스마트쉼센터를 같이 찾아봐요', result: '태오가 상담을 신청해 봐요', mood: '안심' }, { id: 'swap', text: '폰을 몰래 숨겨 버려요', result: '태오가 배신감을 느껴요', mood: '화남', why: '동의 없는 행동은 신뢰를 깨요.' }], 'help', 0.25),
              EB('무엇이 먼저일까요?', '태오가 요즘 밥도 거르고 "다 의미 없다"고 자주 말해요.', [{ id: 'wait', text: '폰만 줄이면 나아질 거라 기다려요', result: '태오의 힘든 마음이 계속돼요', mood: '걱정', why: '마음이 많이 힘들어 보이면 어른에게 먼저 알려야 해요.' }, { id: 'adult', text: '담임·상담 선생님께 바로 알려요', result: '태오가 필요한 도움을 받아요', mood: '안심' }], 'adult', 0.3,
                { conclude: '걱정을 전하고, 도움을 함께 찾고, 마음이 많이 힘들어 보이면 어른에게 바로 알리는 것이 친구의 몫이에요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 연습한 말 가운데 실제로 쓸 수 있을 것 같은 말은 무엇인가요?" 출구 1번에서 폰을 숨기는 보기를 고른 학생에게는 동의 없는 행동이 신뢰를 깬다는 점을 다시 짚는다. 친구가 "다 의미 없다"처럼 말하면 109·1388이나 담임 선생님께 바로 알리자고 말해 준다.',
          exit: [
            XB('친구에게 무엇이라 할까요?', '친구가 시험 기간에도 게임 방송만 본다며 스스로 걱정해요.', [{ id: 'with', text: '"같이 상담 신청해 볼까?"', result: '친구가 용기를 내요', mood: '고마움' }, { id: 'joke', text: '"나도 그래, 괜찮아" 넘겨요', result: '친구의 걱정이 그대로 남아요', mood: '걱정', why: '친구가 걱정을 꺼냈다면 도움을 함께 찾을 때예요.' }], 'with'),
            XC('과의존이 걱정되는 친구에게 처음 건넬 말로 가장 알맞은 것은?', ['넌 폰 중독이야', '요즘 피곤해 보여서 걱정돼', '알아서 해'], 1, '내가 본 것과 걱정을 전하는 말이 대화를 열어요.'),
            XT('과의존이 걱정되는 친구에게 건넬 "나" 전달법 문장을 하나 쓰세요.'),
          ],
        },
        ws: {
          title: '과의존 친구에게 건네는 도움',
          items: [
            { type: 'table', prompt: '비난하는 말을 걱정을 전하는 말로 고쳐 쓰세요.', columns: ['비난하는 말', '걱정을 전하는 말'], cells: [['넌 폰 중독이야', ''], ['그러니까 성적이 그렇지', ''], ['알아서 해', '']], answer: '예: 요즘 잠을 못 자는 것 같아 걱정돼 / 네 계획이 잘되면 좋겠어 / 도움 필요하면 말해 줘' },
            { type: 'choice', prompt: '과의존 상담을 받을 수 있는 곳에 ○ 하세요.', options: ['스마트쉼센터', '게임 커뮤니티', '배달 앱'], answer: '스마트쉼센터' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '친구가 밥을 거르고 "다 의미 없다"고 말하면 ___에게 바로 알린다.', answer: '어른(담임·상담 선생님)' },
            { type: 'short', prompt: '친구를 돕는 사람으로서 내 몫과 내 몫이 아닌 것을 한 가지씩 쓰세요.' },
          ],
        },
        notes: '자주 보이는 어려움: ① 친구를 "중독"이라 진단하듯 부른다 → 내가 본 것과 걱정을 전하는 말로 바꾸게 한다. ② 친구를 바꾸는 것까지 내 책임으로 여긴다 → 걱정 전하기와 도움 잇기가 몫임을 짚는다. ③ 우울·위기 신호가 함께 보이면 생명존중 단원의 도움 경로(담임·Wee클래스·109·1388)로 잇는다. 장면은 모두 가상이다.',
      }),
    ],
  });
})();
