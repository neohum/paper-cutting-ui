/* 고3 창체 안전교육 — 사이버 중독 예방 (차시 3개). 근거: 「학교 안전교육 실시 기준 등에 관한 고시」 별표 2 고등학교 약물 및 사이버 중독 예방 3·4항.
 * 장면·인물은 이 단원을 위해 직접 지은 것이다(가명). */
(function () {
  const G = 12; const CODE = 'saf-cyber';
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
    flow: '고3 사이버 중독 예방 단원은 졸업과 함께 부모님의 관리와 학교의 일과표가 사라지는 성인기를 준비합니다. 1차시에는 만 19세가 되면 이용할 수 있게 되는 합법 사행산업과, 나이와 상관없이 언제나 불법인 온라인 도박을 구별하고 도박 문제 상담 경로(1336)를 확인합니다. 2차시에는 혼자 사는 첫해에 수면·과제·지출을 흔드는 디지털 유혹 장면에서 스스로 선택하는 연습을 하고, 3차시에는 목표·환경·점검·도움 요청을 담은 디지털 독립 계획을 세웁니다. 고1의 불법 도박 구조와 스마트폰 규칙, 고2의 게임 사용 계약을 성인의 자기 관리로 이어 붙이는 자리입니다. 디지털 소양(digital) 단원과 연계해 시수를 인정할 수 있습니다(학교 결정).',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '스무 살이 되면 열리는 문, 그래도 닫혀 있는 문',
        objective: '합법 사행산업의 연령 제한과 불법 온라인 도박을 구별하고, 도박 문제가 생겼을 때 도움을 받을 곳(1336)을 말할 수 있다.',
        draw: 'two paper doors, one with an age sign and a lottery ticket, one locked with a broken dice and a warning ribbon, a young adult choosing between them',
        banner: '성인이어도 불법은 불법', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }],
        intro: {
          teacher: '"내년이면 성인인데, 그러면 인터넷 스포츠 베팅도 해도 되는 거죠?" 하는 질문을 받은 적이 있다고 말하며 반응을 듣는다(기다릴 반응: "성인이면 괜찮아요", "그래도 불법 아닌가요?"). 나이가 바꾸는 것과 나이로도 바뀌지 않는 것을 오늘 가른다고 밝힌다. "성인이 되면 도박이 다 합법"이라는 오개념을 첫 장면에서 꺼내 둔다.',
          student: '성인이 되면 달라지는 것과 그대로인 것을 짝과 하나씩 말해 봅시다.',
          demo: { tool: 'mindmap', options: { topic: '스무 살 이후', slots: ['달라져요', '그대로예요'], cards: ['복권을 살 수 있어요', '사설 도박 사이트는 불법'], shuffle: false }, sequence: [{ sort: { '달라져요': ['복권을 살 수 있어요'], '그대로예요': ['사설 도박 사이트는 불법'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 합법과 불법 가르기', minutes: 14, tool: 'mindmap',
            teacher: '"국가가 허가한 사행산업도 위험이 없는 것일까요?" 복권·경마처럼 법이 허가한 사행산업도 미성년자는 이용할 수 없고, 허가받지 않은 온라인 도박 사이트는 나이와 관계없이 이용 자체가 불법이라는 점을 짚는다. "해외 서버라서 괜찮다"는 카드를 합법으로 놓는 학생이 많다 — 서버 위치가 불법을 지워 주지 않는다고 고쳐 준다. 합법이라도 중독 위험은 같다는 점은 3번에서 다시 짚는다.',
            task: '사례 카드를 합법 사행산업과 불법 도박으로 나누고, 불법 사이트의 신호를 골라요.',
            levels: LV,
            items: [
              MS('사례 카드를 두 칸으로 나누어 보세요.', '사행 활동', ['허가된 사행산업', '불법 도박'], ['판매점에서 산 복권', '허가된 경주장 경마', '해외 서버 스포츠 베팅', '문자로 온 카지노 링크', '친구가 연 단톡 배팅', '공식 판매처 체육복표'], { '허가된 사행산업': ['판매점에서 산 복권', '허가된 경주장 경마', '공식 판매처 체육복표'], '불법 도박': ['해외 서버 스포츠 베팅', '문자로 온 카지노 링크', '친구가 연 단톡 배팅'] }, 0.35),
              MP('불법 도박 사이트의 신호만 골라 담으세요.', '불법 사이트 신호', ['첫 충전 보너스 약속', '추천인 코드로 가입', '본인인증 없이 가입', '구매 한도 안내문', '개인 계좌로 입금'], ['첫 충전 보너스 약속', '추천인 코드로 가입', '본인인증 없이 가입', '개인 계좌로 입금'], 0.3),
              MS('말을 사실과 오해로 나누어 보세요.', '사행산업의 진실', ['사실', '오해'], ['합법도 중독될 수 있다', '미성년자는 이용 못 한다', '성인이면 사설도 괜찮다', '해외 서버면 처벌 없다'], { '사실': ['합법도 중독될 수 있다', '미성년자는 이용 못 한다'], '오해': ['성인이면 사설도 괜찮다', '해외 서버면 처벌 없다'] }, 0.3,
                { conclude: '나이는 이용할 수 있는 곳을 바꿀 뿐, 불법 도박을 합법으로 만들지 않고 중독 위험도 없애지 않아요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 도박 문제 신호와 도움 경로', minutes: 13, tool: 'mindmap',
            teacher: '"잃은 돈을 되찾으려고 다시 거는 것은 왜 위험할까요?" 손실을 쫓는 행동, 빌려서 거는 행동, 숨기는 행동이 문제의 신호라고 짚는다. 한국도박문제예방치유원 상담전화 1336은 본인뿐 아니라 가족·친구도 이용할 수 있다는 점을 알린다. "상담은 중독자만 하는 것"이라는 생각이 나오면 걱정이 드는 단계부터 이용할 수 있다고 고쳐 준다.',
            task: '도박 문제의 신호와 신호마다 할 수 있는 대응을 잇고, 모둠에서 거절의 말을 정해요.',
            levels: LV,
            items: [
              MM('신호와 알맞은 대응을 이어 보세요. 맞지 않는 카드는 남겨요.', '도박 문제 신호', [{ id: 's1', label: '잃은 돈을 찾으려 또 걸어요' }, { id: 's2', label: '생활비를 빌려 걸어요' }, { id: 's3', label: '친구가 숨기며 걸어요' }], ['그날 바로 멈추고 기록해요', '1336에 상담을 받아요', '걱정을 말하고 함께 알아봐요', '한 번만 더 걸어 본전 찾기'], { s1: '그날 바로 멈추고 기록해요', s2: '1336에 상담을 받아요', s3: '걱정을 말하고 함께 알아봐요' }, 0.3),
              EB('동아리 선배가 "성인 됐으니 같이 하자"며 사이트 링크를 보냈어요.', '졸업한 선배가 단톡방에 스포츠 베팅 사이트 링크를 올리고 가입하면 보너스를 준다고 해요.', [
                { id: 'no', text: '불법이라 안 한다고 답해요', result: '유혹을 끊고 내 돈을 지켜요.', mood: '안심' },
                { id: 'once', text: '보너스만 받고 그만둬요', result: '가입 순간부터 불법 도박에 들어가요.', mood: '걱정', why: '보너스는 계속 걸게 만드는 미끼예요.' },
                { id: 'quiet', text: '읽고 대답하지 않아요', result: '링크는 그대로 남아 다른 친구도 봐요.', mood: '불안', why: '거절과 함께 단톡 신고까지 하면 더 안전해요.' }], 'no', 0.25),
              TALK('모둠에서 도박 권유를 받았을 때 쓸 거절의 말을 두 가지 정하고 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"성인이 되어도 바뀌지 않는 것 하나를 말해 볼까요?" 출구 1번에서 해외 서버 사이트를 합법에 놓은 학생과 서버 위치와 불법의 관계를 다시 짚는다. 도박 문제는 의지가 약해서가 아니라 누구나 빠질 수 있는 구조라는 점, 1336이 언제든 열려 있다는 점으로 마무리한다.',
          exit: [
            XM('새로 본 광고 카드를 나누어 보세요.', '광고 가려보기', ['허가된 곳', '불법이에요'], ['로또 공식 판매 안내', '무료 머니 지급 카지노', '경륜장 관람 안내', 'SNS 홀짝 게임 방'], { '허가된 곳': ['로또 공식 판매 안내', '경륜장 관람 안내'], '불법이에요': ['무료 머니 지급 카지노', 'SNS 홀짝 게임 방'] }, 0.3),
            CH('불법 온라인 도박에 대한 설명으로 옳은 것은?', ['성인이 되면 이용해도 된다', '해외 서버면 처벌받지 않는다', '나이와 관계없이 이용이 불법이다'], 2, '허가받지 않은 온라인 도박은 나이·서버 위치와 관계없이 불법이에요.', 0.25),
            SH('도박 문제가 걱정될 때 이용할 수 있는 도움 경로와, 그곳을 이용할 수 있는 사람을 한 문장으로 쓰세요.'),
          ],
        },
        ws: {
          title: '합법과 불법 사이',
          items: [
            { type: 'table', prompt: '사례를 읽고 허가·불법 중 하나를 쓰세요.', columns: ['사례', '구분'], cells: [['판매점에서 산 복권', ''], ['해외 서버 스포츠 베팅', ''], ['문자로 온 카지노 링크', '']], answer: '허가, 불법, 불법' },
            { type: 'blank', prompt: '빈칸에 알맞은 숫자를 쓰세요.', text: '도박 문제 상담전화는 ______이에요.', answer: '1336' },
            { type: 'choice', prompt: '도박 문제의 신호로 알맞은 것에 ○ 하세요.', options: ['정한 금액만 쓰고 멈춰요', '잃은 돈을 찾으려 다시 걸어요', '경기를 보며 응원만 해요'], answer: '잃은 돈을 찾으려 다시 걸어요' },
            { type: 'short', prompt: '"성인이 되면 도박은 개인의 자유"라는 주장에 오늘 배운 근거를 들어 의견을 쓰세요.' },
          ],
        },
        diff: DIFF('합법·불법이 헷갈리는 광고 카드와 사실·오해를 근거로 가려요.'),
        notes: '자주 보이는 어려움: ① 성인이면 모든 도박이 합법이라고 여긴다 → 허가받지 않은 온라인 도박은 언제나 불법이다. ② 해외 서버면 괜찮다고 여긴다 → 서버 위치가 불법을 지우지 않는다. ③ 합법이면 안전하다고 여긴다 → 중독 위험은 같다. 구체적인 처벌 수위는 다루지 않고, 학생의 도박 경험을 묻지 않는다.',
      }),

      LESSON(2, {
        title: '자취 첫해, 새벽 두 시의 화면 앞에서',
        objective: '혼자 사는 성인기 생활에서 수면·과제·지출을 흔드는 디지털 유혹 상황을 판단하고 스스로를 지키는 선택을 할 수 있다.',
        draw: 'a small paper studio room at night with a glowing phone on a bed, a clock showing two, an unfinished report and a delivery bag on the floor',
        banner: '내 시간은 내가 지켜요', extra: [{ motif: 'star', x: 70, y: 110, color: 'sky', s: 0.6 }],
        intro: {
          teacher: '"지금은 부모님이 \'그만 자라\'고 하시지만, 내년에 혼자 살게 되면 누가 말해 줄까요?" 반응을 듣고(기다릴 반응: "아무도요", "알람이요") 성인기에는 일과를 지켜 주던 바깥 장치가 사라진다는 점을 짚는다. 오늘은 가상 인물 "준"의 자취 첫해 장면에서 선택을 연습한다고 밝힌다. "혼자 살면 저절로 조절하게 된다"는 생각이 나오면 환경이 바뀌면 습관이 더 흔들리기 쉽다고 말해 준다.',
          student: '혼자 살게 되면 가장 흔들릴 것 같은 생활 습관 하나를 짝과 말해 봅시다.',
          demo: { tool: 'emotion', options: { mode: 'branch', situation: '자정, 내일 9시 수업이 있는데 영상이 계속 이어져요.', choices: [{ id: 'off', text: '자동재생을 끄고 자요', result: '아침 수업에 맞춰 일어나요.', mood: '안심' }, { id: 'one', text: '하나만 더 봐요', result: '새벽까지 이어져요.', mood: '걱정' }] }, sequence: [{ choice: 'off' }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 준의 하루 갈림길', minutes: 14, tool: 'emotion',
            teacher: '"이 장면에서 준을 흔드는 것은 의지일까요, 설계일까요?" 자동재생·알림·한정 할인 같은 설계가 판단을 앞지른다는 점을 짚고, 의지 대신 환경을 바꾸는 선택이 오래간다고 말한다. 2번에서 "카드 할부로 나눠 내면 괜찮다"를 고르는 학생에게는 나눠 내도 갚을 돈이 줄지 않는다는 점을 짚어 준다.',
            task: '준의 하루 장면마다 결과를 보고 가장 알맞은 선택을 골라요.',
            levels: LV,
            items: [
              EB('새벽 1시, 과제 마감은 내일 오전이에요. 준은 어떻게 할까요?', '과제를 하려고 노트북을 켰는데 단톡방 알림과 게임 이벤트 알림이 계속 울려요.', [
                { id: 'mode', text: '방해 금지 켜고 과제부터', result: '마감 전에 과제를 끝내고 잠들어요.', mood: '안심' },
                { id: 'check', text: '알림만 잠깐 확인해요', result: '확인이 대화로 이어져 한 시간이 가요.', mood: '걱정', why: '잠깐 확인이 가장 흔한 시작이에요.' },
                { id: 'night', text: '밤새워 다 하고 놀아요', result: '아침 수업을 놓치고 몸이 지쳐요.', mood: '불안', why: '수면을 줄이면 다음 날 집중이 무너져요.' }], 'mode', 0.3),
              EB('"오늘만 반값" 알림이 밤마다 와요. 생활비가 빠듯해요.', '쇼핑 앱이 밤 11시마다 한정 할인 알림을 보내고, 준은 이번 달 생활비가 얼마 남지 않았어요.', [
                { id: 'mute', text: '앱 알림을 끄고 목록에만 담아요', result: '하루 뒤 다시 보니 필요 없던 물건이에요.', mood: '안심' },
                { id: 'split', text: '할부로 나눠서 사요', result: '다음 달 생활비까지 줄어들어요.', mood: '걱정', why: '나눠 내도 갚을 돈은 줄지 않아요.' },
                { id: 'now', text: '놓치기 싫어 바로 사요', result: '이번 달 식비가 모자라요.', mood: '불안', why: '한정 시간은 서두르게 만드는 설계예요.' }], 'mute', 0.3),
              EB('주말 내내 게임만 하고 연락도 끊긴 지 사흘째예요.', '준은 사흘째 방에서 게임만 하고, 친구가 보낸 연락에도 답하지 않았어요.', [
                { id: 'reach', text: '친구에게 답하고 밖에 나가요', result: '대화하며 생활 리듬이 돌아와요.', mood: '안심' },
                { id: 'more', text: '이번 판만 끝내고 생각해요', result: '나흘째도 같은 하루가 이어져요.', mood: '걱정', why: '끊긴 연락은 고립의 신호예요.' },
                { id: 'hide', text: '바쁘다고 둘러대요', result: '도움받을 기회가 멀어져요.', mood: '불안', why: '숨기면 문제가 더 커지기 쉬워요.' }], 'reach', 0.3),
            ],
          },
          {
            id: 'a2', title: '활동 2. 의지 말고 환경 바꾸기', minutes: 13, tool: 'mindmap',
            teacher: '"참으려고 애쓰는 것과 아예 손이 안 가게 하는 것, 무엇이 더 쉬울까요?" 휴대전화를 침대 밖에서 충전하기, 결제 수단 저장 지우기처럼 환경을 바꾸는 방법을 함께 떠올린다. "그냥 의지를 키우면 된다"는 말에는 의지는 피곤할수록 약해진다는 점을 짚는다.',
            task: '유혹마다 환경을 바꾸는 방법을 잇고, 나에게 맞는 방법을 골라요.',
            levels: LV,
            items: [
              MM('유혹과 환경 바꾸기 방법을 이어 보세요. 맞지 않는 카드는 남겨요.', '환경 바꾸기', [{ id: 'e1', label: '자기 전 영상이 길어져요' }, { id: 'e2', label: '충동 결제를 해요' }, { id: 'e3', label: '공부 중 알림이 와요' }], ['폰은 책상에서 충전해요', '저장된 카드를 지워요', '집중 모드를 예약해요', '더 참으려고 다짐해요'], { e1: '폰은 책상에서 충전해요', e2: '저장된 카드를 지워요', e3: '집중 모드를 예약해요' }, 0.3),
              MS('방법을 환경 바꾸기와 의지에만 기대기로 나누어 보세요.', '어떤 방법일까', ['환경 바꾸기', '의지에만 기대기'], ['앱을 첫 화면에서 빼요', '사용 시간 제한을 걸어요', '오늘은 꼭 참자고 해요', '피곤해도 버티기로 해요'], { '환경 바꾸기': ['앱을 첫 화면에서 빼요', '사용 시간 제한을 걸어요'], '의지에만 기대기': ['오늘은 꼭 참자고 해요', '피곤해도 버티기로 해요'] }, 0.25),
              TALK('짝과 내년에 혼자 산다면 가장 먼저 바꿀 환경 하나를 말하고 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"준에게 한 문장 조언을 한다면?" 몇 명의 답을 듣고 출구 1번에서 "잠깐 확인"을 고른 학생과 그 선택이 어떻게 길어지는지 다시 본다. 성인의 자기 관리는 강한 의지보다 잘 짜인 환경에서 나온다고 마무리한다.',
          exit: [
            XB('시험 기간, 새벽에 숏폼이 끝없이 이어져요.', '대학 첫 시험 전날 밤, 쉬려고 켠 숏폼이 한 시간째 이어지고 있어요.', [
              { id: 'stop', text: '폰을 다른 방에 두고 자요', result: '푹 자고 시험을 봐요.', mood: '안심' },
              { id: 'ten', text: '10분만 더 보고 자요', result: '10분이 또 한 시간이 돼요.', mood: '걱정' },
              { id: 'all', text: '어차피 늦어 밤을 새요', result: '시험 중 졸음이 쏟아져요.', mood: '불안' }], 'stop', 0.25),
            CH('디지털 유혹을 줄이는 방법으로 가장 오래가는 것은?', ['더 강하게 다짐하기', '손이 덜 가게 환경 바꾸기', '친구에게 감시 부탁하기'], 1, '환경을 바꾸면 피곤할 때도 덜 흔들려요.'),
            SH('혼자 살게 되었을 때 내가 지킬 디지털 생활 규칙 하나와 그 까닭을 쓰세요.'),
          ],
        },
        ws: {
          title: '자취 첫해 디지털 생활',
          items: [
            { type: 'table', prompt: '유혹마다 환경을 바꾸는 방법을 쓰세요.', columns: ['유혹', '환경 바꾸기'], cells: [['자기 전 영상', ''], ['충동 결제', ''], ['공부 중 알림', '']], answer: '폰 다른 곳 충전 / 저장 카드 지우기 / 집중 모드' },
            { type: 'choice', prompt: '한정 할인 알림이 계속 올 때 알맞은 것에 ○ 하세요.', options: ['바로 산다', '알림을 끄고 하루 뒤 다시 본다', '할부로 산다'], answer: '알림을 끄고 하루 뒤 다시 본다' },
            { type: 'check', prompt: '내 생활에서 해 볼 것에 ✓ 하세요.', options: ['폰은 침대 밖에서 충전', '앱 알림 정리', '결제 정보 저장 해제', '사용 시간 확인'] },
            { type: 'short', prompt: '연락이 끊기고 게임만 하는 친구에게 건넬 말을 쓰세요.' },
          ],
        },
        diff: DIFF('결과가 늦게 드러나는 선택을 견주어 골라요.'),
        notes: '자주 보이는 어려움: ① "잠깐 확인"을 안전한 선택으로 본다 → 가장 흔한 시작점이다. ② 할부를 절약으로 본다 → 갚을 돈은 같다. ③ 의지만 키우면 된다고 여긴다 → 환경을 바꾼다. 학생의 실제 지출·생활을 묻지 않는다.',
      }),

      LESSON(3, {
        title: '졸업 뒤 나의 디지털 생활 설계도',
        objective: '성인기의 디지털 사용 목표·환경·점검·도움 요청을 차례대로 담은 디지털 독립 계획을 세울 수 있다.',
        draw: 'a paper blueprint scroll with icons of a phone, a calendar, a checkmark and a helping hand connected by dotted paths',
        banner: '목표·환경·점검·도움', extra: [{ motif: 'leaf', x: 300, y: 96, color: 'mint' }],
        intro: {
          teacher: '"계획을 세웠는데 사흘 만에 무너진 경험은 왜 생길까요?" 반응을 듣고(기다릴 반응: "너무 거창해서요", "점검을 안 해서요") 오늘은 목표에서 끝나지 않고 환경·점검·도움 요청까지 잇는 계획을 세운다고 밝힌다. "계획은 목표만 정하면 된다"는 생각을 짚는다.',
          student: '오래 지켜진 계획과 금방 무너진 계획의 차이를 짝과 말해 봅시다.',
          demo: { tool: 'story', options: { cards: [C('d1', '목표 정하기', 'sun'), C('d2', '환경 바꾸기', 'house')], slots: ['먼저', '다음'], shuffle: false }, sequence: [{ order: ['d1', 'd2'] }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 계획의 차례 세우기', minutes: 14, tool: 'story',
            teacher: '"점검은 계획의 어디에 와야 할까요?" 한 번 세운 계획은 일주일마다 기록을 보고 고쳐야 살아남는다는 점을 짚는다. 도움 요청을 맨 마지막 실패 뒤에만 두는 학생이 많다 — 계획에 처음부터 넣어 둘 수 있다고 말해 준다.',
            task: '디지털 독립 계획을 세우는 차례와, 무너졌을 때 다시 세우는 차례를 놓아요.',
            levels: LV,
            items: [
              SO('디지털 독립 계획을 세우는 차례로 놓아 보세요.', '계획 세우기', ['1', '2', '3', '4', '5'], [C('p1', '지금 사용 기록 보기', 'sun'), C('p2', '구체적 목표 정하기', 'star'), C('p3', '환경 바꾸기', 'house'), C('p4', '일주일마다 점검', 'leaf'), C('p5', '필요하면 도움 요청', 'flower')], ['p1', 'p2', 'p3', 'p4', 'p5'], 0.35),
              SO('계획이 무너진 날 다시 일어서는 차례로 놓아 보세요.', '다시 세우기', ['1', '2', '3', '4'], [C('r1', '무너진 상황 적기', 'cloud'), C('r2', '원인 하나 찾기', 'star'), C('r3', '계획 한 줄 고치기', 'leaf'), C('r4', '다음 날 다시 시작', 'sun')], ['r1', 'r2', 'r3', 'r4'], 0.3,
                { conclude: '무너진 날은 실패가 아니라 계획을 고칠 자료예요. 적고, 원인을 찾고, 한 줄만 고쳐요.' }),
              SO('목표를 구체적으로 다듬는 차례로 놓아 보세요.', '목표 다듬기', ['1', '2', '3'], [C('g1', '"폰을 덜 쓰자"', 'cloud'), C('g2', '"밤에 덜 쓰자"', 'moon'), C('g3', '"11시 뒤 폰 끄기"', 'star')], ['g1', 'g2', 'g3'], 0.25),
            ],
          },
          {
            id: 'a2', title: '활동 2. 나의 계획 칸 채우기', minutes: 13, tool: 'mindmap',
            teacher: '"도움 요청 칸에는 누구를 적을 수 있을까요?" 친구·가족·학생상담센터, 도박 문제는 1336처럼 문제에 맞는 곳을 떠올리게 한다. 칸마다 알맞은 내용을 넣는 문항 뒤, 활동지에 자신의 계획을 직접 쓰게 한다.',
            task: '계획 카드를 목표·환경·점검·도움 칸에 나누어 넣고, 짝과 계획을 나눠요.',
            levels: LV,
            items: [
              MS('카드를 계획의 네 칸에 나누어 넣으세요.', '디지털 독립 계획', ['목표', '환경', '점검', '도움'], ['11시 뒤 폰 끄기', '폰은 책상에서 충전', '일요일에 기록 보기', '친구와 함께 확인', '앱 첫 화면 정리', '1336 같은 상담 기관'], { '목표': ['11시 뒤 폰 끄기'], '환경': ['폰은 책상에서 충전', '앱 첫 화면 정리'], '점검': ['일요일에 기록 보기'], '도움': ['친구와 함께 확인', '1336 같은 상담 기관'] }, 0.35),
              MP('잘 세운 목표만 골라 담으세요.', '좋은 목표', ['평일 게임은 1시간', '자정 전 폰 내려놓기', '폰을 적당히 쓰기', '앞으로 열심히 살기'], ['평일 게임은 1시간', '자정 전 폰 내려놓기'], 0.25),
              TALK('짝에게 내 계획의 목표와 점검 방법을 설명하고, 짝이 더 구체적으로 만들 점을 하나 말해 준 뒤 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"내 계획에서 가장 지키기 어려울 칸은 어디인가요?" 몇 명에게 듣고 그 칸을 도울 방법을 반 전체가 하나씩 보탠다. 출구 1번 차례에서 점검을 빼먹은 학생과 계획이 살아남는 조건을 다시 짚는다. 졸업 뒤에도 고칠 수 있는 계획이 좋은 계획이라고 마무리한다.',
          exit: [
            XO('새 학기 공부 앱 계획을 차례대로 놓으세요.', '새 학기 계획', ['1', '2', '3', '4'], [C('x1', '한 주 기록 살펴보기', 'sun'), C('x2', '하루 목표 정하기', 'star'), C('x3', '방해 앱 정리하기', 'house'), C('x4', '주말에 고쳐 보기', 'leaf')], ['x1', 'x2', 'x3', 'x4'], 0.25),
            CH('계획을 오래 지키는 데 가장 도움이 되는 것은?', ['목표를 크게 잡기', '정기적으로 점검하고 고치기', '실패하면 처음부터 버리기'], 1, '점검하고 고쳐야 계획이 생활에 맞게 살아남아요.'),
            SH('내 디지털 독립 계획의 목표 한 줄과 점검 방법 한 줄을 쓰세요.'),
          ],
        },
        ws: {
          title: '디지털 독립 계획서',
          items: [
            { type: 'table', prompt: '나의 디지털 독립 계획을 쓰세요.', columns: ['칸', '내 계획'], cells: [['목표', ''], ['환경', ''], ['점검', ''], ['도움', '']] },
            { type: 'choice', prompt: '구체적인 목표에 ○ 하세요.', options: ['폰을 덜 쓰자', '11시 뒤 폰 끄기', '알아서 조절하기'], answer: '11시 뒤 폰 끄기' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '계획이 무너진 날은 상황을 적고, ___을 하나 찾아 계획을 고쳐요.', answer: '원인' },
            { type: 'short', prompt: '내 계획이 흔들릴 때 도움을 요청할 사람이나 기관과 그 까닭을 쓰세요.' },
          ],
        },
        diff: DIFF('계획 카드를 네 칸에 고르게 나누며 구체적인 목표를 가려요.'),
        notes: '자주 보이는 어려움: ① 목표만 세우고 끝낸다 → 환경·점검·도움까지 잇는다. ② 막연한 목표를 쓴다 → 시간·행동이 드러나게 다듬는다. ③ 무너지면 계획을 버린다 → 한 줄만 고친다. 계획서는 학생 개인 기록이므로 걷어 점수화하지 않는다.',
      }),
    ],
  });
})();
