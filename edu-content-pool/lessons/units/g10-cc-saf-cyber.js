/* 고1 창체 안전교육 — 사이버 중독 예방 (차시 3개). 근거: 「학교 안전교육 실시 기준 등에 관한 고시」 별표 2 고등학교 약물 및 사이버 중독 예방 3·4항(인터넷 게임 사용 규칙, 스마트폰의 건전한 사용).
 * 도박죄는 형법 제246조. 도움 경로는 한국도박문제예방치유원 상담전화 1336·112만 쓴다. 장면·인물은 이 단원을 위해 직접 지은 것이다(가명). */
(function () {
  const G = 10; const CODE = 'saf-cyber';
  const UNIT = `g${G}-창체-${CODE}`;
  const TITLE = '사이버 중독 예방';
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
    { motif: 'moon', x: 410, y: 58, s: 0.8 }, { motif: 'cloud', x: 120, y: 52 }, { motif: 'hills', y: 204 },
    { motif: 'house', x: 96, y: 214, color: 'lavender', s: 0.9 }, { motif: 'tree', x: 380, y: 214 }, ...extra,
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
  const TALK = (prompt) => ({ prompt, free: true, talk: true, difficulty: 0 });
  const DIFF = (hard) => ({
    easy: '맞는 칸에 놓은 카드에 초록 테두리가 생기고, 갈림길 문항은 결과 칸이 처음부터 보여요.',
    base: '모든 카드를 놓은 뒤 확인을 눌러 스스로 고쳐요.',
    challenge: `카드 순서가 섞여 나오고, ${hard}`,
  });
  // 도입 6 + 전개 27 + 정리 7 = 40분
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
    flow: '고1 사이버 중독 예방 단원은 중학교에서 배운 과의존 신호와 도박의 생각 함정을 바탕으로, 돈과 법이 얽힌 불법 온라인 도박의 구조와 자기 사용 기록에 근거한 규칙 세우기로 나아갑니다. 1차시에는 불법 도박 사이트가 청소년을 끌어들이고 빚으로 묶는 단계를 분석하고 이용자도 처벌될 수 있다는 법적 책임과 도움 경로(1336)를 확인합니다. 2차시에는 자기 사용 기록을 읽고 구체적인 스마트폰 규칙을 세워 점검하는 차례를 익히고, 3차시에는 공부·수면 시간의 숏폼과 알림 유혹 앞에서 주의력을 지키는 선택을 연습합니다. 고2에서는 게임이용장애와 사행성 투자 유인, 고3에서는 합법·불법 사행산업 구별과 디지털 독립 계획으로 이어집니다. 디지털 소양(digital) 단원과 연계해 시수 인정 가능(학교 결정)합니다.',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '도박 사이트가 사람을 묶는 단계 분석하기',
        objective: '불법 온라인 도박이 유인·입금·환전 거부·빚으로 이어지는 구조를 분석하고, 이용자도 처벌될 수 있는 법적 책임과 도움 경로를 설명할 수 있다.',
        draw: 'a paper smartphone screen showing flashing coins that turn into a chain wrapped around a student, with a paper help sign glowing beside',
        banner: '첫 충전 보너스는 미끼', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }],
        intro: {
          teacher: '"\'첫 충전 100% 보너스, 지인 소개하면 포인트\' 이런 광고가 왜 청소년에게까지 올까요?" 의견을 듣고(기다릴 반응: "돈 벌게 해 주려고요", "재미로요") 광고비를 쓰는 쪽은 결국 이용자의 돈으로 이익을 얻는다는 점을 짚는다. "조금만 하면 괜찮다"는 말이 나오면 불법 도박은 금액과 상관없이 이용 자체가 범죄가 될 수 있다는 점을 먼저 밝힌다.',
          student: '도박 광고가 "보너스"를 주는 까닭을 짝과 한 가지씩 말해 봅시다.',
          demo: { tool: 'mindmap', options: { topic: '도박 광고', slots: ['미끼', '덫'], cards: ['첫 충전 보너스', '환전이 안 돼요'], shuffle: false }, sequence: [{ sort: { '미끼': ['첫 충전 보너스'], '덫': ['환전이 안 돼요'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 유인에서 빚까지 단계 가르기', minutes: 14, tool: 'mindmap',
            teacher: '"딴 돈을 찾으려는데 \'추가 입금하면 환전해 준다\'고 하면 무슨 뜻일까요?" 불법 사이트는 돈을 돌려줄 의무를 지키지 않고, 잃은 돈을 되찾으려는 마음(손실 쫓기)이 빚과 대리입금·사채로 이어진다는 점을 짚는다. "합법 사이트처럼 보이면 괜찮다"는 학생에게는 청소년이 이용할 수 있는 온라인 도박은 없다는 점을 말해 준다.',
            task: '불법 도박이 사람을 끌어들이고 묶어 두는 단계를 나누고, 각 단계의 위험 신호를 이어요.',
            levels: LV,
            items: [
              MS('사례 카드를 단계별로 나누어 보세요.', '불법 도박의 단계', ['끌어들이기', '붙잡아 두기', '빚으로 묶기'], ['친구 초대 포인트', '무료 체험 머니', '잃으면 더 큰 판 권유', '밤새 실시간 경기', '친구에게 돈 빌리기', '고금리 대리입금'], { '끌어들이기': ['친구 초대 포인트', '무료 체험 머니'], '붙잡아 두기': ['잃으면 더 큰 판 권유', '밤새 실시간 경기'], '빚으로 묶기': ['친구에게 돈 빌리기', '고금리 대리입금'] }, 0.35),
              MM('사이트가 하는 말과 그 속뜻을 이어 보세요. 맞지 않는 카드는 남겨요.', '광고의 속뜻', [{ id: 'k1', label: '"추가 입금해야 환전"' }, { id: 'k2', label: '"오늘만 보너스 두 배"' }, { id: 'k3', label: '"지인 추천 시 적립"' }], ['돈을 더 뜯으려는 수법', '서두르게 만드는 압박', '친구까지 끌어들이기', '이용자를 위한 혜택'], { k1: '돈을 더 뜯으려는 수법', k2: '서두르게 만드는 압박', k3: '친구까지 끌어들이기' }, 0.3),
              EB('잃은 돈이 꽤 돼요. 어떻게 할까요?', '친구 권유로 시작한 스포츠 도박에서 용돈을 모두 잃었어요. 사이트는 "한 번만 더 걸면 만회"라고 해요.', [
                { id: 'stop', text: '멈추고 1336에 상담해요', result: '혼자 끌어안던 문제를 함께 풀 길이 생겨요.', mood: '안심' },
                { id: 'more', text: '빌려서라도 한 번 더 해요', result: '빚이 늘고 친구 관계도 무너져요.', mood: '불안', why: '잃은 돈을 쫓는 것이 도박을 끊지 못하게 하는 가장 큰 함정이에요.' },
                { id: 'hide', text: '아무에게도 말하지 않아요', result: '빚 독촉이 와도 도움을 못 받아요.', mood: '걱정', why: '숨길수록 문제가 커져요. 상담은 비밀이 지켜져요.' }], 'stop', 0.3),
            ],
          },
          {
            id: 'a2', title: '활동 2. 법적 책임과 도움 경로 확인하기', minutes: 13, tool: 'mindmap',
            teacher: '"도박 사이트를 이용만 한 사람도 처벌받을까요?" 형법 제246조는 도박을 한 사람을 처벌하는 규정이고, 사이트를 열거나 홍보한 사람은 더 무겁게 다룬다는 점을 짚는다. "청소년은 처벌받지 않는다"는 오개념이 많다 — 만 14세 이상이면 형사 절차나 소년보호 절차의 대상이 될 수 있다고 고쳐 준다. 형량 숫자보다 "이용도 범죄"라는 사실에 초점을 둔다.',
            task: '도박에 얽힌 행동을 책임에 따라 나누고, 상황에 맞는 도움 경로를 골라요.',
            levels: LV,
            items: [
              MS('도박과 관련된 말을 사실과 오해로 나누어 보세요.', '도박과 법', ['사실', '오해'], ['이용자도 처벌될 수 있다', '광고·홍보도 처벌된다', '청소년은 처벌 안 된다', '소액이면 괜찮다'], { '사실': ['이용자도 처벌될 수 있다', '광고·홍보도 처벌된다'], '오해': ['청소년은 처벌 안 된다', '소액이면 괜찮다'] }, 0.3),
              MM('상황과 알맞은 도움 경로를 이어 보세요. 맞지 않는 카드는 남겨요.', '도움 경로', [{ id: 'h1', label: '도박을 멈추기 힘들어요' }, { id: 'h2', label: '빚 독촉·협박을 받아요' }, { id: 'h3', label: '친구가 도박에 빠졌어요' }], ['1336 상담전화', '112 신고', '믿는 어른에게 함께 알리기', '돈을 빌려 대신 갚기'], { h1: '1336 상담전화', h2: '112 신고', h3: '믿는 어른에게 함께 알리기' }, 0.3,
                { conclude: '멈추기 힘들면 1336, 협박을 받으면 112 — 혼자 해결하려 하지 않는 것이 첫걸음이에요.' }),
              TALK('모둠에서 "불법 도박 광고를 받은 친구에게 보낼 한 줄 메시지"를 정해 말하고 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 단계 가운데 빠져나오기 가장 어려운 곳은 어디였나요?" 빚으로 묶이는 단계라는 대답이 나오면, 그래서 가장 앞 단계에서 끊는 것과 일찍 도움을 청하는 것이 중요하다고 정리한다. 출구 1번에서 환전 거부를 끌어들이기로 놓은 학생과 단계의 뜻을 다시 짚는다.',
          exit: [
            XM('게임 방송 채팅 사례를 두 칸으로 나누어 보세요.', '채팅 속 도박', ['위험 신호', '괜찮아요'], ['링크 누르면 머니 지급', '수익 인증 캡처 도배', '경기 응원 채팅', '선수 기록 이야기'], { '위험 신호': ['링크 누르면 머니 지급', '수익 인증 캡처 도배'], '괜찮아요': ['경기 응원 채팅', '선수 기록 이야기'] }, 0.3),
            CH('불법 온라인 도박에 대한 설명으로 옳은 것은?', ['이용만 하면 처벌받지 않는다', '이용자도 도박죄로 처벌될 수 있다', '청소년은 어떤 경우에도 책임이 없다'], 1, '형법은 도박한 사람을 처벌해요. 만 14세 이상 청소년도 법적 절차의 대상이 될 수 있어요.', 0.3),
            SH('잃은 돈을 되찾으려는 마음이 위험한 까닭을 한 문장으로 쓰세요.'),
          ],
        },
        ws: {
          title: '불법 도박의 구조와 책임',
          items: [
            { type: 'table', prompt: '단계마다 위험 신호를 하나씩 쓰세요.', columns: ['단계', '위험 신호'], cells: [['끌어들이기', ''], ['붙잡아 두기', ''], ['빚으로 묶기', '']], answer: '보너스·초대 포인트 / 더 큰 판 권유·밤샘 경기 / 대리입금·돈 빌리기' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '도박 문제로 상담이 필요하면 ____ 에, 협박을 받으면 ____ 에 알려요.', answer: '1336, 112' },
            { type: 'choice', prompt: '"한 번만 더 걸면 만회"라는 말에 알맞은 행동에 ○ 하세요.', options: ['돈을 빌려 한 번 더 해요', '멈추고 상담을 받아요', '친구에게 같이 하자고 해요'], answer: '멈추고 상담을 받아요' },
            { type: 'short', prompt: '"소액으로 재미 삼아 하는 도박은 괜찮다"는 주장에 오늘 배운 근거로 반론을 쓰세요.' },
          ],
        },
        diff: DIFF('광고 문구의 속뜻과 법적 사실·오해처럼 꼼꼼히 읽어야 하는 카드를 가려요.'),
        notes: '자주 보이는 어려움: ① 청소년은 처벌받지 않는다고 여긴다 → 만 14세 이상은 형사·소년보호 절차 대상이 될 수 있다. ② 잃은 돈을 되찾으면 끊겠다고 한다 → 손실 쫓기가 가장 큰 함정이다. ③ 대리입금을 친구 사이 도움으로 여긴다 → 고금리·협박 피해로 이어진다. 형량 숫자는 다루지 않고, 실제 사이트 주소나 화면은 보여 주지 않는다. 도박 경험을 묻거나 손들게 하지 않는다.',
      }),

      LESSON(2, {
        title: '내 사용 기록을 읽고 지킬 규칙 세우기',
        objective: '스마트폰 사용 기록에서 문제 시간대를 찾아 구체적이고 점검할 수 있는 사용 규칙을 세우는 차례를 설명할 수 있다.',
        draw: 'a paper bar chart of phone screen time beside a paper notebook with a checklist and a small alarm clock',
        banner: '기록 → 규칙 → 점검', extra: [{ motif: 'leaf', x: 300, y: 96, color: 'mint' }],
        intro: {
          teacher: '"하루에 스마트폰을 몇 시간 쓰는지 짐작한 값과 실제 기록, 어느 쪽이 더 클까요?" 대답을 듣고 사람은 사용 시간을 실제보다 적게 짐작하기 쉽다는 점을 짚는다. 기록 화면을 친구에게 보여 주게 하지 않는다 — 오늘은 가상 인물 "준"의 기록으로 연습하고, 자기 기록은 각자 조용히 본다고 밝힌다.',
          student: '"덜 써야지"라는 다짐이 잘 지켜지지 않는 까닭을 짝과 말해 봅시다.',
          demo: { tool: 'story', options: { cards: [C('d1', '사용 기록 보기', 'sun'), C('d2', '규칙 정하기', 'leaf')], slots: ['먼저', '다음'], shuffle: false }, sequence: [{ order: ['d1', 'd2'] }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 규칙 세우는 차례 잇기', minutes: 14, tool: 'story',
            teacher: '"규칙을 정한 다음에는 무엇이 필요할까요?" 규칙은 한 번 정하고 끝나는 것이 아니라 일주일쯤 지켜 보고 점검해 고치는 것이라는 점을 짚는다. 기록을 보기 전에 규칙부터 정하는 학생에게는 "어디가 문제인지 모르고 약을 고르는 것과 같다"고 말해 준다.',
            task: '사용 기록에서 출발해 규칙을 세우고 점검하는 차례를 놓아요.',
            levels: LV,
            items: [
              SO('준이 규칙을 세우는 차례를 놓아 보세요.', '준의 규칙 세우기', ['1', '2', '3', '4', '5'], [C('s1', '일주일 사용 기록 보기', 'sun'), C('s2', '문제 시간대 찾기', 'cloud'), C('s3', '구체적 규칙 정하기', 'leaf'), C('s4', '일주일 실천하기', 'star'), C('s5', '점검하고 고치기', 'flower')], ['s1', 's2', 's3', 's4', 's5'], 0.3),
              SO('알림을 정리하는 차례를 놓아 보세요.', '알림 정리하기', ['1', '2', '3', '4'], [C('n1', '알림 온 앱 목록 보기', 'sun'), C('n2', '꼭 필요한 앱 고르기', 'leaf'), C('n3', '나머지 알림 끄기', 'moon'), C('n4', '사흘 뒤 불편 점검', 'flower')], ['n1', 'n2', 'n3', 'n4'], 0.3),
              SO('규칙을 어겼을 때 다시 돌아오는 차례를 놓아 보세요.', '규칙을 어긴 날', ['1', '2', '3', '4'], [C('r1', '어긴 상황 적기', 'cloud'), C('r2', '방아쇠 찾기', 'star'), C('r3', '환경 바꾸기', 'house'), C('r4', '다음 날 다시 실천', 'sun')], ['r1', 'r2', 'r3', 'r4'], 0.35,
                { conclude: '어긴 날은 실패가 아니라 규칙을 고칠 자료예요 — 방아쇠를 찾아 환경을 바꿔요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 지킬 수 있는 규칙으로 고치기', minutes: 13, tool: 'mindmap',
            teacher: '"\'적당히 쓰기\'와 \'밤 11시 이후 폰은 거실에\' 가운데 지켰는지 확인하기 쉬운 것은?" 언제·어디서·얼마나가 들어가야 점검할 수 있다는 점을 짚는다. 무조건 0시간을 목표로 하는 학생에게는 지키지 못할 목표는 포기로 이어지기 쉬우니 작게 시작하라고 말해 준다.',
            task: '규칙을 점검할 수 있는 것과 막연한 것으로 나누고, 상황에 맞는 규칙을 이어요.',
            levels: LV,
            items: [
              MS('규칙 카드를 두 가지로 나누어 보세요.', '규칙 고르기', ['점검할 수 있어요', '막연해요'], ['11시 뒤 폰은 거실에', '공부 50분 뒤 10분 사용', '적당히 줄이기', '덜 보도록 노력하기'], { '점검할 수 있어요': ['11시 뒤 폰은 거실에', '공부 50분 뒤 10분 사용'], '막연해요': ['적당히 줄이기', '덜 보도록 노력하기'] }, 0.25),
              MM('준의 문제 상황과 알맞은 규칙을 이어 보세요. 맞지 않는 카드는 남겨요.', '상황별 규칙', [{ id: 'p1', label: '잠들기 전 1시간 영상' }, { id: 'p2', label: '숙제 중 메신저 확인' }, { id: 'p3', label: '등굣길 내내 게임' }], ['충전기를 책상에 두기', '숙제 동안 방해 금지', '등굣길엔 음악만', '하루 종일 전원 끄기'], { p1: '충전기를 책상에 두기', p2: '숙제 동안 방해 금지', p3: '등굣길엔 음악만' }, 0.3),
              EB('규칙을 정한 지 사흘째, 밤에 또 영상을 오래 봤어요. 어떻게 할까요?', '11시 뒤 거실에 폰을 두기로 했는데 사흘째 밤, 침대에서 영상을 1시간 넘게 봤어요.', [
                { id: 'fix', text: '까닭을 적고 규칙을 손봐요', result: '충전기를 옮기자 다음 날은 지켰어요.', mood: '뿌듯함' },
                { id: 'quit', text: '역시 안 된다며 규칙을 버려요', result: '사용 시간이 처음보다 늘어요.', mood: '속상함', why: '한 번 어긴 것으로 규칙 전체를 버리면 다시 시작하기 어려워요.' },
                { id: 'zero', text: '내일부터 폰을 아예 끊어요', result: '이틀 만에 지쳐 더 몰아서 써요.', mood: '불안', why: '지나친 목표는 오래 가지 못해요. 작게 고쳐요.' }], 'fix', 0.3),
            ],
          },
        ],
        wrap: {
          teacher: '"내가 오늘 세운 규칙 하나를 \'언제·어디서·얼마나\'로 말할 수 있나요?" 두세 명의 규칙을 듣고(개인 사용 시간은 말하지 않게 한다) 점검 가능한지 함께 따져 본다. 출구 1번에서 규칙 정하기를 기록 보기보다 앞에 둔 학생과 차례의 까닭을 다시 짚는다.',
          exit: [
            XO('주말 게임 규칙을 세우는 차례를 놓으세요.', '주말 게임 규칙', ['1', '2', '3', '4'], [C('e1', '지난 주말 기록 보기', 'sun'), C('e2', '길어진 때 찾기', 'cloud'), C('e3', '시작·끝 시각 정하기', 'leaf'), C('e4', '월요일에 점검하기', 'flower')], ['e1', 'e2', 'e3', 'e4'], 0.25),
            CH('점검하기 가장 좋은 스마트폰 규칙은?', ['스마트폰을 적당히 쓴다', '밤 11시 뒤에는 폰을 거실에 둔다', '되도록 덜 보려고 노력한다'], 1, '언제·어디서가 들어 있어야 지켰는지 확인할 수 있어요.'),
            SH('오늘 세운 내 규칙을 "언제·어디서·얼마나"가 들어가게 한 문장으로 쓰세요.'),
          ],
        },
        ws: {
          title: '나의 스마트폰 규칙',
          items: [
            { type: 'table', prompt: '막연한 규칙을 점검할 수 있는 규칙으로 고쳐 쓰세요.', columns: ['막연한 규칙', '고친 규칙'], cells: [['적당히 줄이기', ''], ['공부할 때 덜 보기', ''], ['일찍 자기', '']], answer: '예: 하루 2시간 이하 / 공부 50분 동안 방해 금지 / 11시 뒤 폰은 거실에' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '규칙은 사용 ____ 을 먼저 보고 정하고, 일주일 뒤 ____ 해서 고쳐요.', answer: '기록, 점검' },
            { type: 'choice', prompt: '규칙을 어긴 날 가장 알맞은 행동에 ○ 하세요.', options: ['규칙을 버린다', '까닭을 찾아 규칙을 손본다', '폰을 영영 끊는다'], answer: '까닭을 찾아 규칙을 손본다' },
            { type: 'check', prompt: '내 규칙에 들어 있는 것에 ✓ 하세요.', options: ['언제', '어디서', '얼마나', '어겼을 때 할 일'] },
          ],
        },
        diff: DIFF('알림 정리처럼 낯선 차례와 상황별 규칙 잇기를 해요.'),
        notes: '자주 보이는 어려움: ① 기록 없이 규칙부터 정한다 → 문제 시간대를 먼저 찾는다. ② "적당히" 같은 막연한 규칙 → 언제·어디서·얼마나를 넣는다. ③ 한 번 어기면 포기한다 → 어긴 날은 고칠 자료다. 학생의 실제 사용 시간·기록 화면을 발표하게 하거나 비교하지 않는다.',
      }),

      LESSON(3, {
        title: '숏폼과 알림 앞에서 주의력 지키는 선택',
        objective: '공부·수면 시간의 숏폼·알림 유혹 상황에서 주의력을 지키는 선택을 하고, 그 까닭을 설명할 수 있다.',
        draw: 'a student at a paper desk turning a glowing phone face down while a paper book opens and a crescent moon rises outside the window',
        banner: '폰은 뒤집고, 집중은 앞으로', extra: [{ motif: 'star', x: 300, y: 96, color: 'sky' }],
        intro: {
          teacher: '"\'딱 한 개만\' 보려던 숏폼이 30분이 된 적, 왜 그럴까요?" 대답을 듣고(기다릴 반응: "다음 영상이 자동으로 나와요", "끝이 없어요") 짧은 영상이 끝없이 이어지는 설계가 멈출 순간을 없앤다는 점을 짚는다. "의지가 약해서"라고만 말하는 학생에게는 의지보다 환경을 바꾸는 쪽이 효과적이라는 점을 오늘 함께 확인하자고 말한다.',
          student: '공부하다가 폰을 집게 되는 순간을 짝과 한 가지씩 말해 봅시다.',
          demo: { tool: 'emotion', options: { mode: 'branch', situation: '공부 중 알림이 울렸어요.', choices: [{ id: 'a', text: '공부 뒤에 확인해요', result: '흐름이 이어져요.', mood: '편안함' }, { id: 'b', text: '바로 열어요', result: '20분이 지나가요.', mood: '아쉬움' }] }, sequence: [{ choice: 'a' }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 유혹의 순간, 선택과 결과 보기', minutes: 14, tool: 'emotion',
            teacher: '"이 선택을 하면 다음 30분은 어떻게 될까요?" 2번에서 잠이 안 와 영상을 보는 보기를 고르는 학생이 있다 — 밝은 화면과 끝없는 영상은 잠을 더 늦추기 쉽다고 짚는다. 정답 보기만 외우지 않도록 "왜 그 선택이 다음 날까지 영향을 줄까?"를 한 번씩 묻는다.',
            task: '공부·수면 시간의 유혹 상황에서 어떻게 할지 고르고 결과를 살펴봐요.',
            levels: LVB,
            items: [
              EB('시험 공부 중 친구가 웃긴 숏폼 링크를 보냈어요. 어떻게 할까요?', '시험 이틀 전 밤, 문제를 풀고 있는데 친구가 "이거 꼭 봐" 하며 숏폼 링크를 보냈어요.', [
                { id: 'later', text: '"공부 끝나고 볼게" 답해요', result: '하던 문제를 끝까지 풀었어요.', mood: '뿌듯함' },
                { id: 'one', text: '하나만 보고 돌아와요', result: '추천 영상이 이어져 40분이 지나요.', mood: '아쉬움', why: '숏폼은 다음 영상이 바로 이어져 멈출 순간이 없어요.' },
                { id: 'mute', text: '친구를 차단해요', result: '친구가 서운해하고 다툼이 생겨요.', mood: '속상함', why: '관계를 끊지 않고도 시간을 미룰 수 있어요.' }], 'later', 0.25),
              EB('새벽 1시인데 잠이 안 와요. 어떻게 할까요?', '새벽 1시, 내일 1교시가 수학 시험인데 잠이 오지 않아 폰에 손이 가요.', [
                { id: 'scroll', text: '졸릴 때까지 영상을 봐요', result: '오히려 눈이 말똥해져 3시에 잠들어요.', mood: '피곤함', why: '밝은 화면과 끝없는 영상은 잠을 더 늦추기 쉬워요.' },
                { id: 'away', text: '폰을 멀리 두고 눈을 감아요', result: '조금 뒤척이다 잠들었어요.', mood: '편안함' },
                { id: 'game', text: '게임 한 판만 하고 자요', result: '한 판이 세 판이 돼요.', mood: '불안', why: '흥분되는 게임은 잠들기 전에 피해요.' }], 'away', 0.3),
              EB('모둠 과제방 알림이 쉬지 않고 울려요. 어떻게 할까요?', '혼자 보고서를 쓰는 중인데 모둠 단톡방 알림이 몇 분마다 울려 흐름이 끊겨요.', [
                { id: 'time', text: '확인 시각을 정해 알려요', result: '"30분마다 볼게"라고 하니 다들 이해해요.', mood: '안심' },
                { id: 'every', text: '울릴 때마다 바로 답해요', result: '보고서가 한 줄도 나아가지 않아요.', mood: '피곤함', why: '잦은 전환은 다시 집중하는 데 시간이 걸려요.' },
                { id: 'leave', text: '말없이 방을 나가요', result: '모둠원이 걱정하고 오해해요.', mood: '걱정', why: '알리고 시간을 정하면 관계와 집중을 함께 지켜요.' }], 'time', 0.3,
                { conclude: '유혹을 참는 것보다 시간·장소를 미리 정해 두는 것이 집중을 지켜요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 집중을 돕는 환경 만들기', minutes: 13, tool: 'mindmap',
            teacher: '"폰을 책상 위에 뒤집어 두는 것과 다른 방에 두는 것, 어느 쪽이 덜 신경 쓰일까요?" 눈에 보이기만 해도 손이 가기 쉬우니 거리를 두는 것이 효과적이라는 점을 짚는다. "음악이나 영상을 틀어 두면 더 집중된다"는 학생에게는 화면이 있는 영상은 주의를 나눈다는 점을 말해 준다.',
            task: '공부·수면 환경을 집중을 돕는 것과 방해하는 것으로 나누고, 꼭 필요한 설정을 골라요.',
            levels: LV,
            items: [
              MS('환경 카드를 두 가지로 나누어 보세요.', '공부하는 자리', ['집중을 도와요', '집중을 방해해요'], ['폰을 다른 방에 두기', '방해 금지 모드 켜기', '영상 틀어 놓고 공부', '알림 소리 켜 두기'], { '집중을 도와요': ['폰을 다른 방에 두기', '방해 금지 모드 켜기'], '집중을 방해해요': ['영상 틀어 놓고 공부', '알림 소리 켜 두기'] }, 0.2),
              MP('잠들기 전 1시간에 할 일만 골라 담으세요.', '잠들기 전 습관', ['충전기를 침대 밖에', '조명을 어둡게', '종이책 읽기', '숏폼 몰아 보기'], ['충전기를 침대 밖에', '조명을 어둡게', '종이책 읽기'], 0.25),
              MM('유혹과 그것을 막는 설정을 이어 보세요. 맞지 않는 카드는 남겨요.', '유혹 막기 설정', [{ id: 'm1', label: '자동 재생이 이어져요' }, { id: 'm2', label: '앱을 습관적으로 열어요' }, { id: 'm3', label: '밤늦게까지 화면을 봐요' }], ['자동 재생 끄기', '첫 화면에서 앱 옮기기', '취침 시간 모드 켜기', '화면 밝기 높이기'], { m1: '자동 재생 끄기', m2: '첫 화면에서 앱 옮기기', m3: '취침 시간 모드 켜기' }, 0.3),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 바꿔 볼 환경 한 가지는 무엇인가요?" 두세 명의 다짐을 듣고, 의지만 믿기보다 환경을 바꾸는 것이 작은 노력으로 오래 간다는 점으로 마무리한다. 출구 1번에서 "하나만 보고 돌아오기"를 고른 학생에게는 활동 1의 결과 칸을 다시 떠올리게 한다.',
          exit: [
            XB('독서실에서 알림이 울렸어요. 어떻게 할까요?', '독서실에서 공부 중인데 좋아하는 크리에이터의 새 영상 알림이 떴어요.', [
              { id: 'save', text: '나중에 보기에 저장해요', result: '쉬는 시간에 편하게 봐요.', mood: '편안함' },
              { id: 'now', text: '지금 바로 봐요', result: '관련 영상까지 보다 한 시간이 가요.', mood: '아쉬움', why: '바로 열면 추천 영상이 이어지기 쉬워요.' },
              { id: 'all', text: '모든 앱을 지워요', result: '연락까지 막혀 불편해져요.', mood: '걱정', why: '필요한 기능은 두고 유혹만 줄여요.' }], 'save', 0.25),
            CH('집중을 지키는 데 가장 도움이 되는 방법은?', ['폰을 책상 위에 둔다', '폰을 다른 공간에 둔다', '알림 소리를 크게 해 둔다'], 1, '눈에 보이지 않는 곳에 두면 손이 덜 가요.'),
            SH('잠들기 전 스마트폰 사용이 다음 날에 주는 영향을 한 문장으로 쓰세요.'),
          ],
        },
        ws: {
          title: '주의력 지키기 계획',
          items: [
            { type: 'table', prompt: '유혹 상황마다 바꿀 환경이나 설정을 쓰세요.', columns: ['유혹 상황', '바꿀 환경·설정'], cells: [['자동 재생이 이어져요', ''], ['자기 전 폰을 봐요', ''], ['공부 중 알림이 와요', '']], answer: '자동 재생 끄기 / 충전기를 침대 밖에 / 방해 금지 모드' },
            { type: 'choice', prompt: '새벽에 잠이 안 올 때 알맞은 행동에 ○ 하세요.', options: ['졸릴 때까지 영상 보기', '폰을 멀리 두고 눈 감기', '게임 한 판 하기'], answer: '폰을 멀리 두고 눈 감기' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '유혹을 참는 ____ 보다 ____ 을 바꾸는 것이 오래 가요.', answer: '의지, 환경' },
            { type: 'short', prompt: '숏폼이 멈추기 어렵게 만들어진 까닭을 한 가지 쓰세요.' },
          ],
        },
        diff: DIFF('갈림길 결과가 확인 뒤에야 보이고, 설정 잇기 같은 꼼꼼한 문항을 풀어요.'),
        notes: '자주 보이는 어려움: ① 의지만 탓한다 → 환경·설정을 바꾸는 쪽이 효과적이다. ② 잠이 안 오면 영상을 본다 → 밝은 화면과 끝없는 영상은 잠을 늦춘다. ③ 모든 앱 삭제처럼 극단적 해결 → 필요한 기능은 두고 유혹만 줄인다. 학생 개인의 사용 시간·수면 시간을 공개하게 하지 않는다.',
      }),
    ],
  });
})();
