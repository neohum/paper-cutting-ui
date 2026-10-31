/* 고2 창체 안전교육 — 사이버 중독 예방 (차시 3개). 근거: 「학교 안전교육 실시 기준 등에 관한 고시」 별표 2 고등학교 약물 및 사이버 중독 예방 3·4항.
 * 장면·인물은 이 단원을 위해 직접 지은 것이다(가명). */
(function () {
  const G = 11; const CODE = 'saf-cyber';
  const TITLE = '사이버 중독 예방';
  const UNIT = `g${G}-창체-${CODE}`;
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
  const MS = (prompt, topic, slots, cards, sort, d, more) => ({ prompt, toolOptions: { mode: 'sort', topic, slots, cards }, target: { sort }, difficulty: d, ...more });
  const MM = (prompt, topic, slots, cards, match, d, more) => ({ prompt, toolOptions: { mode: 'match', topic, slots, cards }, target: { match }, difficulty: d, ...more });
  const MP = (prompt, topic, cards, pick, d, more) => ({ prompt, toolOptions: { mode: 'pick', topic, basket: topic, cards }, target: { pick }, difficulty: d, ...more });
  const EB = (prompt, situation, choices, choice, d, more) => ({ prompt, toolOptions: { mode: 'branch', situation, choices }, target: { choice }, difficulty: d, ...more });
  const SO = (prompt, title, slots, cards, order, d, more) => ({ prompt, toolOptions: { mode: 'order', title, slots, cards }, target: { order }, difficulty: d, ...more });
  const LV = { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } };
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
  // 도입 6 + 전개 27 + 정리 7 = 40분. 갈림길(branch)은 emotion 교구에만 있다 — 다른 교구 활동의 갈림길 문항은 pick으로 바꾼다
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
    flow: '고2 사이버 중독 예방 단원은 중학교에서 익힌 과의존 신호·도박성 요소를 "근거를 가려 판단하고 스스로 약속을 맺는 일"로 끌어올립니다. 1차시에는 세계보건기구의 게임이용장애 등재를 둘러싼 말을 사실과 의견으로 가르고, 질병 기준이 말하는 신호로 과몰입 사례를 점검합니다. 2차시에는 고수익을 약속하는 코인 리딩방·사행성 앱의 유인 장치를 가려내고 피해를 막는 선택을 합니다. 3차시에는 목표·시간·멈춤 신호·점검을 담은 게임 사용 계약서를 써서 고시 별표 2의 "인터넷 게임 사용 규칙 만들기 및 실천"을 마무리합니다. 고1에서는 불법 사이버 도박과 사용 기록, 고3에서는 합법·불법 사행산업 구별과 디지털 독립 계획으로 이어집니다. 디지털 리터러시(digital) 단원과 연계해 시수 인정 가능(학교 결정)합니다.',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '게임이용장애 논쟁 속 사실과 의견 가르기',
        objective: '세계보건기구의 게임이용장애 등재를 둘러싼 진술을 사실과 의견으로 구분하고, 질병 기준이 말하는 신호로 과몰입 사례를 점검할 수 있다.',
        draw: 'a paper game controller on one side of a balance scale and an open paper medical book on the other, with speech bubbles marked fact and opinion',
        banner: '사실인가, 의견인가', extra: [{ motif: 'star', x: 300, y: 96, color: 'lavender' }],
        intro: {
          teacher: '"게임을 오래 하면 모두 병일까요?" 손을 들게 해 의견을 나눈 뒤(기다릴 반응: "오래 하면 중독이에요", "좋아서 하는 건 병이 아니에요") 오늘은 의견이 아니라 기준과 근거로 따져 본다고 밝힌다. "시간이 길면 곧 장애"라는 생각이 나오면 국제 기준은 시간보다 조절이 무너지고 생활에 문제가 생기는지를 본다는 점을 미리 짚어 둔다.',
          student: '게임을 많이 하는 것과 게임에 붙잡힌 것이 어떻게 다른지 짝과 한 가지씩 말해 봅시다.',
          demo: { tool: 'mindmap', options: { topic: '게임 이야기', slots: ['사실', '의견'], cards: ['WHO가 질병으로 분류했다', '게임은 해롭다'], shuffle: false }, sequence: [{ sort: { '사실': ['WHO가 질병으로 분류했다'], '의견': ['게임은 해롭다'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 등재 논쟁 속 진술 가르기', minutes: 13, tool: 'mindmap',
            teacher: '"확인할 수 있는 말과 누군가의 판단을 어떻게 구분할까요?" 세계보건기구가 국제질병분류 제11판(ICD-11)에 게임이용장애를 올렸다는 것은 확인할 수 있는 사실이고, 그것이 옳다·그르다는 평가는 의견이라고 짚는다. "산업계가 반대한다"처럼 누가 무엇을 주장했다는 진술은 사실이지만 주장 내용 자체는 의견이라는 점을 헷갈리는 학생이 많다. 2번은 양쪽 주장의 근거를 잇는 문항이다.',
            task: '게임이용장애에 관한 진술을 사실과 의견으로 나누고, 찬반 주장과 근거를 이어요.',
            levels: LV,
            items: [
              MS('진술 카드를 사실과 의견으로 나누어 보세요.', '게임이용장애', ['사실', '의견'], ['ICD-11에 올랐다', '조절 실패가 기준이다', '등재는 지나친 낙인이다', '치료 기회가 넓어진다', '진단은 전문가가 한다', '게임은 시간 낭비다'], { '사실': ['ICD-11에 올랐다', '조절 실패가 기준이다', '진단은 전문가가 한다'], '의견': ['등재는 지나친 낙인이다', '치료 기회가 넓어진다', '게임은 시간 낭비다'] }, 0.35),
              MM('주장과 그 근거를 이어 보세요. 맞지 않는 카드는 남겨요.', '찬반 주장', [{ id: 'p1', label: '등재가 필요해요' }, { id: 'p2', label: '등재가 걱정돼요' }], ['도움이 필요한 사람이 치료받아요', '즐기는 사람까지 환자로 볼까 봐요', '게임 회사가 돈을 번다'], { p1: '도움이 필요한 사람이 치료받아요', p2: '즐기는 사람까지 환자로 볼까 봐요' }, 0.3),
              TALK('짝과 "게임이용장애 등재에 나는 찬성·반대한다, 그 까닭은 ○○이다"를 근거 하나씩 붙여 말하고 "다 했어요"를 누르세요.'),
            ],
          },
          {
            id: 'a2', title: '활동 2. 기준으로 과몰입 사례 점검하기', minutes: 14, tool: 'mindmap',
            teacher: '"하루 다섯 시간 하는 프로게이머 지망생과 하루 두 시간이지만 끊지 못해 결석하는 학생, 누가 더 걱정될까요?" 국제 기준은 조절이 안 됨, 다른 일보다 게임이 먼저가 됨, 문제가 생겨도 계속함을 보고, 보통 오랜 기간(대략 1년) 이어질 때 진단을 생각한다고 짚는다. 시간만 보고 고르는 학생에게 생활 결과를 함께 보라고 말해 준다. 진단은 전문가가 하며 오늘 활동은 스스로 점검하는 연습이라는 점을 꼭 밝힌다.',
            task: '사례 카드를 기준 세 가지로 나누고, 걱정해야 할 신호만 골라요.',
            levels: LV,
            items: [
              MS('사례를 세 가지 기준으로 나누어 보세요.', '과몰입 기준', ['조절이 안 돼요', '게임이 먼저예요', '문제에도 계속해요'], ['그만하려 해도 못 멈춰요', '한 판만이 새벽까지 가요', '친구 약속을 자꾸 미뤄요', '밥보다 접속이 먼저예요', '성적이 떨어져도 그대로예요', '다툼 뒤에도 똑같이 해요'], { '조절이 안 돼요': ['그만하려 해도 못 멈춰요', '한 판만이 새벽까지 가요'], '게임이 먼저예요': ['친구 약속을 자꾸 미뤄요', '밥보다 접속이 먼저예요'], '문제에도 계속해요': ['성적이 떨어져도 그대로예요', '다툼 뒤에도 똑같이 해요'] }, 0.35),
              MP('걱정해야 할 신호만 골라 담으세요.', '걱정 신호', ['끊으면 짜증이 심해요', '주말에 친구와 즐겨요', '숙제를 계속 못 해요', '정한 시간에 꺼요'], ['끊으면 짜증이 심해요', '숙제를 계속 못 해요'], 0.25,
                { conclude: '시간이 길다는 것만으로는 장애가 아니에요. 조절이 무너지고 생활에 문제가 이어지는지가 기준이에요.' }),
              MS('같은 시간을 써도 다른 두 사례를 나누어 보세요.', '두 시간의 차이', ['스스로 조절해요', '조절이 무너졌어요'], ['정한 뒤 알람에 꺼요', '연습 계획표대로 해요', '몰래 밤새 접속해요', '못 하면 물건을 던져요'], { '스스로 조절해요': ['정한 뒤 알람에 꺼요', '연습 계획표대로 해요'], '조절이 무너졌어요': ['몰래 밤새 접속해요', '못 하면 물건을 던져요'] }, 0.3),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 가장 헷갈린 진술은 무엇이었나요?" 출구 1번에서 "누가 주장했다"와 "주장 내용"을 섞은 학생과 다시 짚는다. 스스로 점검해 걱정되면 담임·Wee클래스·청소년상담복지센터(1388)에서 상담할 수 있다고 안내하며 마무리한다.',
          exit: [
            XM('뉴스 속 진술을 사실과 의견으로 나누세요.', '뉴스 읽기', ['사실', '의견'], ['2019년 WHO 총회에서 채택', '진단은 1년 안팎을 본다', '등재는 시대에 뒤처졌다', '게임 규제가 답이다'], { '사실': ['2019년 WHO 총회에서 채택', '진단은 1년 안팎을 본다'], '의견': ['등재는 시대에 뒤처졌다', '게임 규제가 답이다'] }, 0.3),
            CH('국제 기준이 게임이용장애에서 가장 중요하게 보는 것은?', ['하루 게임 시간', '조절이 무너지고 생활에 문제가 이어지는지', '즐기는 게임의 장르'], 1, '시간보다 조절 실패·우선순위·문제가 생겨도 계속하는지를 봐요.', 0.3),
            SH('오늘 배운 기준으로 볼 때 내 게임 습관에서 지키고 싶은 점 하나를 쓰세요.'),
          ],
        },
        ws: {
          title: '게임이용장애 사실과 의견',
          items: [
            { type: 'table', prompt: '진술을 읽고 사실·의견을 쓰세요.', columns: ['진술', '사실/의견'], cells: [['WHO가 ICD-11에 올렸다', ''], ['등재는 지나친 낙인이다', ''], ['진단은 전문가가 한다', '']], answer: '사실, 의견, 사실' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '국제 기준은 게임 ___보다 ___이 무너지고 생활에 문제가 이어지는지를 본다.', answer: '시간, 조절' },
            { type: 'choice', prompt: '걱정해야 할 신호에 ○ 하세요.', options: ['정한 시간에 끈다', '숙제를 계속 못 한다', '주말에 친구와 즐긴다'], answer: '숙제를 계속 못 한다' },
            { type: 'short', prompt: '게임이용장애 등재에 대한 내 의견을 근거 두 가지를 들어 쓰세요.' },
          ],
        },
        diff: DIFF('주장한 사람과 주장 내용을 구분해야 하는 카드를 가려요.'),
        notes: '자주 보이는 어려움: ① 게임 시간이 길면 곧 장애라고 여긴다 → 조절 실패·우선순위·문제 지속을 본다. ② "○○가 반대했다"를 의견으로 분류한다 → 누가 주장했다는 것은 확인할 수 있는 사실이다. ③ 활동 결과로 자신이나 친구를 진단한다 → 진단은 전문가의 일이고 오늘은 스스로 점검이다. ICD-11 등재(2019년 세계보건총회 채택, 2022년 발효)는 세계보건기구 공식 자료로 한 번 더 확인해 읽어 준다.',
      }),

      LESSON(2, {
        title: '"원금 보장 300%" 리딩방 유인 가려내기',
        objective: '고수익을 약속하는 투자 리딩방·사행성 앱의 유인 장치를 가려내고, 권유를 받았을 때 피해를 막는 선택을 할 수 있다.',
        draw: 'a paper smartphone showing a chat room full of rocket and coin stickers, with a paper fishing hook dangling a golden coin in front of a student who steps back',
        banner: '쉬운 고수익은 없다', extra: [{ motif: 'moon', x: 70, y: 100, color: 'buttercup', s: 0.6 }],
        intro: {
          teacher: '"모르는 사람이 \'이 방에 들어오면 한 달에 용돈 열 배\'라고 한다면 무엇부터 의심해야 할까요?" 대답을 듣고(기다릴 반응: "사기 같아요", "진짜면 자기가 하겠죠") 오늘은 투자처럼 보이지만 도박과 같은 구조로 사람을 붙잡는 유인 장치를 가려낸다고 밝힌다. "투자는 어른만 하니까 상관없다"는 반응이 나오면 청소년을 노린 단톡방·앱 광고가 실제로 있다는 점을 짚는다.',
          student: '"쉽게 큰돈을 번다"는 광고를 본 적이 있다면 어떤 말로 꾀었는지 짝과 말해 봅시다(내 거래 경험은 말하지 않아요).',
          demo: { tool: 'emotion', options: { mode: 'branch', situation: '단톡방에 "무료 체험방 입장" 링크가 올라왔어요.', choices: [{ id: 'no', text: '들어가지 않고 방을 나가요', result: '권유가 더 오지 않아요.', mood: '안심' }, { id: 'in', text: '구경만 하려고 들어가요', result: '입금 권유가 쏟아져요.', mood: '걱정' }] }, sequence: [{ choice: 'no' }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 권유 앞에서 갈림길 고르기', minutes: 14, tool: 'emotion',
            teacher: '"처음에 조금 벌게 해 주는 까닭은 무엇일까요?" 처음 소액 수익은 더 큰 돈을 넣게 하는 미끼이고, 출금하려 하면 수수료·세금 명목으로 돈을 더 요구하는 일이 많다고 짚는다. 2번에서 "돈을 더 넣어 잃은 것을 되찾는다"를 고르는 학생에게는 손실을 쫓는 생각이 도박의 함정과 같다고 말해 준다. 피해를 입었다면 부끄러워하지 말고 보호자와 함께 경찰(112)·금융감독원에 알리면 된다고 덧붙인다.',
            task: '리딩방·사행성 앱 권유 상황에서 피해를 막는 선택을 골라요.',
            levels: LV,
            items: [
              EB('수익 인증 사진이 계속 올라와요. 어떻게 할까요?', '친구가 초대한 방에 "오늘도 수익 200%" 인증 사진이 계속 올라와요. 방장은 지금 들어오면 원금을 보장한대요.', [
                { id: 'leave', text: '원금 보장은 거짓 신호, 방을 나가요', result: '돈을 잃을 위험에서 벗어나요.', mood: '안심' },
                { id: 'small', text: '조금만 넣어 시험해 봐요', result: '첫 수익 뒤 더 큰 입금을 요구받아요.', mood: '걱정', why: '처음 수익은 더 큰 돈을 넣게 하는 미끼일 때가 많아요.' },
                { id: 'share', text: '다른 친구도 초대해요', result: '친구까지 피해를 입을 수 있어요.', mood: '불안', why: '초대하면 보상을 주는 구조는 피해자를 늘려요.' }], 'leave', 0.3),
              EB('출금하려니 수수료를 먼저 내래요. 어떻게 할까요?', '앱 화면에는 수익이 쌓였는데, 출금하려면 "세금" 명목으로 돈을 먼저 보내라고 해요.', [
                { id: 'stop', text: '더 보내지 않고 보호자와 신고해요', result: '추가 피해를 막고 도움을 받아요.', mood: '안심' },
                { id: 'pay', text: '수익을 찾으려 수수료를 내요', result: '또 다른 명목으로 돈을 요구해요.', mood: '불안', why: '출금을 미끼로 돈을 더 뜯어내는 전형적인 수법이에요.' },
                { id: 'loan', text: '친구에게 빌려 메워요', result: '빚까지 생겨 피해가 커져요.', mood: '걱정', why: '잃은 돈을 쫓을수록 피해가 커져요.' }], 'stop', 0.35),
              EB('친구가 잃은 돈을 되찾겠다며 앱을 다시 켰어요.', '같은 반 하나가 사행성 앱에서 잃은 돈을 "한 번만 더 하면 찾는다"며 다시 하려고 해요.', [
                { id: 'talk', text: '멈추자고 말하고 도울 곳을 알려요', result: '친구가 손실 쫓기를 멈출 기회를 얻어요.', mood: '안심' },
                { id: 'watch', text: '친구 돈이니 상관하지 않아요', result: '친구의 손실과 빚이 커져요.', mood: '걱정', why: '도박성 손실은 혼자 멈추기 어려워요.' },
                { id: 'join', text: '같이 해서 빨리 되찾아요', result: '둘 다 돈을 잃을 위험이 커져요.', mood: '불안', why: '잃은 돈을 쫓는 생각이 도박의 함정이에요.' }], 'talk', 0.3),
            ],
          },
          {
            id: 'a2', title: '활동 2. 유인 장치와 정상 정보 가르기', minutes: 13, tool: 'mindmap',
            teacher: '"정상적인 투자 정보와 유인 문구는 어디서 갈릴까요?" 원금 보장·확정 수익·지금만·비밀 정보는 사기 신호이고, 정상적인 금융 정보는 손실 가능성을 함께 알린다고 짚는다. "유명인이 광고하니 믿을 만하다"는 생각은 유명인 사진을 몰래 쓰는 사칭 광고가 있다는 점으로 바로잡는다.',
            task: '광고 문구를 사기 신호와 정상 정보로 나누고, 신호와 그 속뜻을 이어요.',
            levels: LV,
            items: [
              MS('문구를 사기 신호와 정상 정보로 나누어 보세요.', '광고 문구', ['사기 신호', '정상 정보'], ['원금 100% 보장', '오늘만 무료 입장', '손실이 날 수 있어요', '비밀 정보 공유방', '등록된 회사인지 확인', '수익은 보장 안 돼요'], { '사기 신호': ['원금 100% 보장', '오늘만 무료 입장', '비밀 정보 공유방'], '정상 정보': ['손실이 날 수 있어요', '등록된 회사인지 확인', '수익은 보장 안 돼요'] }, 0.3),
              MM('유인 장치와 그 속뜻을 이어 보세요. 맞지 않는 카드는 남겨요.', '유인 장치의 속뜻', [{ id: 'm1', label: '수익 인증 사진' }, { id: 'm2', label: '지금만 특가' }, { id: 'm3', label: '친구 초대 보상' }], ['믿게 하려는 꾸밈', '생각할 틈을 빼앗기', '피해자를 늘리는 구조', '정부가 인정한 상품'], { m1: '믿게 하려는 꾸밈', m2: '생각할 틈을 빼앗기', m3: '피해자를 늘리는 구조' }, 0.3,
                { conclude: '원금 보장·지금만·비밀·초대 보상은 모두 판단을 흐리게 하는 장치예요.' }),
              TALK('모둠에서 리딩방 권유를 받은 친구에게 보낼 답장 문장을 하나 만들고 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 본 신호 가운데 가장 그럴듯했던 것은 무엇인가요?" 출구 1번에서 "손실이 날 수 있어요"를 사기 신호로 둔 학생과, 위험을 알리는 것이 오히려 정상 정보라는 점을 다시 짚는다. 이미 돈을 보냈다면 숨기지 말고 보호자와 함께 신고하는 것이 피해를 줄이는 길이라고 마무리한다.',
          exit: [
            XM('새 광고 문구를 두 칸으로 나누세요.', '새 광고 읽기', ['의심해요', '믿을 만해요'], ['한 달 만에 열 배', '유명인 추천 비밀방', '원금 손실 가능 안내', '공식 앱에서 확인'], { '의심해요': ['한 달 만에 열 배', '유명인 추천 비밀방'], '믿을 만해요': ['원금 손실 가능 안내', '공식 앱에서 확인'] }, 0.3),
            CH('출금하려면 수수료를 먼저 보내라는 요구를 받았을 때 알맞은 행동은?', ['수익을 찾으려 수수료를 보낸다', '더 보내지 않고 보호자와 신고한다', '친구에게 빌려 보낸다'], 1, '출금을 미끼로 돈을 더 요구하는 수법이므로 멈추고 신고해요.'),
            SH('리딩방 권유를 받았을 때 내가 쓸 거절 문장을 쓰세요.'),
          ],
        },
        ws: {
          title: '리딩방·사행성 앱 유인 가려내기',
          items: [
            { type: 'table', prompt: '문구를 읽고 사기 신호·정상 정보를 쓰세요.', columns: ['문구', '판단'], cells: [['원금 100% 보장', ''], ['손실이 날 수 있어요', ''], ['오늘만 무료 입장', '']], answer: '사기 신호, 정상 정보, 사기 신호' },
            { type: 'choice', prompt: '처음에 작은 수익을 주는 까닭으로 알맞은 것에 ○ 하세요.', options: ['실력이 좋아서', '더 큰 돈을 넣게 하려고', '세금을 내게 하려고'], answer: '더 큰 돈을 넣게 하려고' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '잃은 돈을 되찾으려 계속하는 것을 손실 ___라고 하며, 도박의 함정과 같다.', answer: '쫓기' },
            { type: 'short', prompt: '친구가 리딩방에 들어가려 할 때 말려 줄 말을 근거와 함께 쓰세요.' },
          ],
        },
        diff: DIFF('사칭 광고처럼 그럴듯한 문구까지 가려요.'),
        notes: '자주 보이는 어려움: ① 처음 수익을 실력이나 행운으로 여긴다 → 큰 입금을 부르는 미끼다. ② 위험을 알리는 문구를 수상하게 본다 → 손실 가능성을 알리는 것이 정상 정보다. ③ 돈을 잃은 사실을 숨긴다 → 보호자와 함께 112·금융감독원에 알릴수록 피해가 줄어든다. 학생의 실제 거래·손실 경험은 묻지 않는다.',
      }),

      LESSON(3, {
        title: '조항을 고르고 서명하는 게임 사용 계약서',
        objective: '목표·시간·멈춤 신호·점검 방법을 담은 게임 사용 계약서를 쓰고, 계약을 실천하고 고치는 차례를 정할 수 있다.',
        draw: 'a paper contract with a pen and a small hourglass, a game controller tied with a ribbon, and a calendar with check marks',
        banner: '내가 정하고 내가 지켜요', extra: [{ motif: 'flower', x: 300, y: 100, color: 'peach' }],
        intro: {
          teacher: '"남이 정한 규칙과 내가 정한 규칙, 어느 쪽을 더 잘 지키게 될까요?" 대답을 듣고(기다릴 반응: "내가 정한 거요", "남이 정하면 몰래 해요") 오늘은 스스로 맺는 계약서를 만들고, 지키지 못했을 때 고치는 방법까지 정한다고 밝힌다. "계약은 한 번 쓰면 끝"이라는 생각이 나오면 점검하고 고치는 조항이 있어야 오래 간다는 점을 짚는다.',
          student: '내가 게임을 멈추기 가장 어려운 순간을 짝과 한 가지씩 말해 봅시다.',
          demo: { tool: 'story', options: { cards: [C('d1', '목표 정하기', 'sun'), C('d2', '시간 정하기', 'star')], slots: ['먼저', '다음'], shuffle: false }, sequence: [{ order: ['d1', 'd2'] }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 계약을 맺고 지키는 차례', minutes: 13, tool: 'story',
            teacher: '"점검 날을 왜 미리 정해 둘까요?" 한 주를 지낸 뒤 지킨 것과 못 지킨 것을 돌아보고 조항을 고쳐야 계약이 생활에 맞게 자란다고 짚는다. 서명을 맨 앞에 두는 학생이 있다 — 내용을 정한 뒤 서명해야 한다고 고쳐 준다. 2번은 멈춤 신호가 울렸을 때의 차례다.',
            task: '게임 사용 계약을 맺고 지키는 차례, 멈춤 신호 뒤의 차례를 놓아요.',
            levels: LV,
            items: [
              SO('계약서를 만들고 지키는 차례를 놓아 보세요.', '계약의 차례', ['1', '2', '3', '4', '5'], [C('c1', '게임하는 목적 쓰기', 'sun'), C('c2', '시간·장소 정하기', 'house'), C('c3', '멈춤 신호 정하기', 'star'), C('c4', '서명하고 붙이기', 'flower'), C('c5', '한 주 뒤 점검·고치기', 'leaf')], ['c1', 'c2', 'c3', 'c4', 'c5'], 0.35),
              SO('멈춤 알람이 울린 뒤의 차례를 놓아 보세요.', '알람이 울리면', ['1', '2', '3', '4'], [C('s1', '판 끝내고 저장', 'star'), C('s2', '기기를 거실에 두기', 'house'), C('s3', '정한 다른 활동 하기', 'tree'), C('s4', '기록표에 체크', 'leaf')], ['s1', 's2', 's3', 's4'], 0.3,
                { conclude: '멈춘 뒤 할 일을 미리 정해 두면 "한 판만 더"를 이기기 쉬워요.' }),
              TALK('짝과 서로의 계약서 초안을 바꿔 읽고, 지키기 어려워 보이는 조항 하나를 함께 고친 뒤 "다 했어요"를 누르세요.'),
            ],
          },
          {
            id: 'a2', title: '활동 2. 좋은 조항 고르기', minutes: 14, tool: 'mindmap',
            teacher: '"\'게임을 적당히 한다\'는 조항은 왜 지키기 어려울까요?" 적당히는 사람마다 뜻이 달라 지켰는지 확인할 수 없으므로, 시간·장소·횟수처럼 확인할 수 있는 말로 써야 한다고 짚는다. 어기면 한 달 금지처럼 지나친 벌칙을 고르는 학생에게는 지키기 어려운 벌칙이 계약을 포기하게 만든다고 말해 준다.',
            task: '계약서 항목과 알맞은 조항을 잇고, 확인할 수 있는 조항만 골라요.',
            levels: LV,
            items: [
              MM('계약서 항목과 알맞은 조항을 이어 보세요. 맞지 않는 카드는 남겨요.', '계약서 항목', [{ id: 'k1', label: '시간' }, { id: 'k2', label: '장소' }, { id: 'k3', label: '멈춤 신호' }, { id: 'k4', label: '점검' }], ['평일 하루 1시간', '거실에서만 해요', '알람 울리면 저장', '일요일 밤 돌아보기', '적당히 해요'], { k1: '평일 하루 1시간', k2: '거실에서만 해요', k3: '알람 울리면 저장', k4: '일요일 밤 돌아보기' }, 0.3),
              MP('지켰는지 확인할 수 있는 조항만 골라 담으세요.', '확인되는 조항', ['밤 11시 뒤엔 안 해요', '시험 전엔 줄여요', '숙제 끝낸 뒤 시작', '너무 많이 안 해요'], ['밤 11시 뒤엔 안 해요', '숙제 끝낸 뒤 시작'], 0.3),
              MS('조항을 지키기 쉬움과 어려움으로 나누어 보세요.', '조항 살펴보기', ['지키기 쉬워요', '고쳐야 해요'], ['못 지키면 다음 날 30분 줄이기', '친구와 하는 날 따로 정하기', '어기면 한 달 금지', '하루도 안 하기'], { '지키기 쉬워요': ['못 지키면 다음 날 30분 줄이기', '친구와 하는 날 따로 정하기'], '고쳐야 해요': ['어기면 한 달 금지', '하루도 안 하기'] }, 0.3),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 쓴 계약서에서 가장 자신 있는 조항은 무엇인가요?" 두세 명의 조항을 듣고 확인할 수 있는 말로 쓰였는지 함께 본다. 출구 1번에서 점검을 빼먹은 학생에게 한 주 뒤 돌아보는 날을 달력에 적게 하며 마무리한다.',
          exit: [
            XO('주말 게임 약속을 지키는 차례를 놓으세요.', '주말 약속', ['1', '2', '3', '4'], [C('w1', '토요일 할 시간 정하기', 'sun'), C('w2', '시작 전 알람 맞추기', 'star'), C('w3', '알람에 저장하고 끄기', 'moon'), C('w4', '일요일에 돌아보기', 'leaf')], ['w1', 'w2', 'w3', 'w4'], 0.25),
            CH('게임 사용 계약서 조항으로 가장 알맞은 것은?', ['게임을 적당히 한다', '평일에는 숙제 뒤 1시간만 한다', '앞으로 절대 하지 않는다'], 1, '시간·조건이 분명해 지켰는지 확인할 수 있는 조항이에요.'),
            SH('내 계약서에서 지키기 가장 어려울 조항과, 그것을 지키기 위한 방법을 쓰세요.'),
          ],
        },
        ws: {
          title: '나의 게임 사용 계약서',
          items: [
            { type: 'table', prompt: '항목마다 나의 조항을 쓰세요.', columns: ['항목', '나의 조항'], cells: [['목적', ''], ['시간·장소', ''], ['멈춤 신호', ''], ['점검 날', '']], answer: '예: 친구와 즐기기 / 평일 1시간·거실 / 알람 / 일요일 밤' },
            { type: 'choice', prompt: '확인할 수 있는 조항에 ○ 하세요.', options: ['너무 많이 안 한다', '밤 11시 뒤엔 안 한다', '적당히 한다'], answer: '밤 11시 뒤엔 안 한다' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '계약서는 한 주 뒤 ___하고, 지키기 어려운 조항은 ___다.', answer: '점검, 고친' },
            { type: 'short', prompt: '내가 정한 규칙이 남이 정한 규칙보다 잘 지켜지는 까닭을 쓰세요.' },
          ],
        },
        diff: DIFF('지키기 쉬운 조항과 고쳐야 할 조항을 가려요.'),
        notes: '자주 보이는 어려움: ① "적당히"처럼 확인할 수 없는 조항을 쓴다 → 시간·장소·조건으로 쓴다. ② 지나친 벌칙을 넣는다 → 지킬 수 있는 작은 조정이 오래 간다. ③ 점검 조항을 빼먹는다 → 한 주 뒤 돌아보는 날을 정한다. 계약서는 학생 본인 것이며 걷어 평가하지 않는다.',
      }),
    ],
  });
})();
