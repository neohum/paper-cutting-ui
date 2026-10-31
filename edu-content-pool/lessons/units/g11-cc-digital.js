/* 고2 창체 법정교육 — 인터넷·스마트폰 과의존 예방 (2차시). 근거: 지능정보화 기본법 제54조(학기별 1회 이상). 생성형 AI 의존과 실시간 방송 몰입·후원 압박을 다룬다. 고2 사이버 중독 예방(g11-cc-saf-cyber: 게임이용장애·코인 리딩방·게임 사용 계약)과 겹치지 않게 짰다.
 * 장면·인물은 이 단원을 위해 직접 지은 것이다(가명). 학생 자신의 경험을 털어놓게 하는 문항은 두지 않는다. */
(function () {
  const G = 11; const CODE = 'digital';
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
    flow: '고2 과의존 예방 단원은 새로운 형태의 디지털 의존 두 가지를 다룹니다. 1차시에는 생성형 AI를 생각을 돕는 도구로 쓰는 것과 과제·고민·판단을 통째로 맡기는 의존을 구별하고, 스스로 생각할 몫을 지키는 사용 원칙을 정합니다. 2차시에는 실시간 방송에 몰입해 밤늦게까지 시청하고 후원·결제를 하게 되는 장면에서 스스로 멈추는 선택을 갈림길로 비교합니다. 고1의 과의존 세 신호와 설계 알아차리기를 이어받으며, 고2 안전교육 사이버 중독 예방 단원과 연계해 시수 인정 가능(학교 결정)합니다.',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '생성형 AI를 도구로 쓰기와 통째로 맡기기 가르기',
        objective: '생성형 AI를 생각을 돕는 도구로 쓰는 것과 생각·판단을 통째로 맡기는 의존을 구별하고, 스스로 생각할 몫을 지키는 사용 원칙을 정할 수 있다.',
        draw: 'a student and a friendly paper-cut robot at a desk, the student holding the pencil while the robot offers a lightbulb',
        banner: '생각의 주인은 나', extra: [{ motif: 'star', x: 330, y: 100, color: 'buttercup', s: 0.6 }],
        intro: {
          teacher: '"보고서 주제를 AI에게 물어보는 것과, 보고서 전체를 AI가 쓰게 하는 것은 무엇이 다를까요?" 대답을 듣고(기다릴 반응: "결과는 같잖아요", "베끼는 거요") 시연으로 두 쓰임을 나눈다. "AI가 더 잘 쓰는데 왜 직접 해요?"라는 말에는 "과제가 노리는 것이 결과물일까요, 그 과정에서 길러지는 힘일까요?"라고 되묻는다. 오늘은 생각의 주인이 누구인지를 기준으로 쓰임을 가른다고 밝힌다.',
          student: 'AI 도구가 도움이 되었던 가상 장면과, 오히려 내 생각을 막았을 것 같은 장면을 짝과 하나씩 말해 봅시다.',
          demo: DEMO('AI의 쓰임', ['생각을 돕는 도구', '통째로 맡기기'], ['내 글의 맞춤법 점검', '독후감 전체 대신 쓰기'], { '생각을 돕는 도구': ['내 글의 맞춤법 점검'], '통째로 맡기기': ['독후감 전체 대신 쓰기'] }),
        },
        acts: [
          {
            id: 'a1', title: '활동 1. AI 쓰임을 도구와 의존으로 나누기', minutes: 14, tool: 'mindmap',
            teacher: '"이 쓰임에서 생각의 주인은 누구일까요?" 내가 먼저 생각하고 AI로 다듬는 것과, AI 답을 그대로 내 것으로 삼는 것을 구별하게 한다. 2번에서 고민 상담을 AI에게만 하는 것을 "도구"에 넣는 학생에게 "AI는 내 상황과 마음을 다 알 수 있을까요? 사람의 도움이 필요한 때는 언제일까요?"라고 묻는다. 생성형 AI는 그럴듯하지만 틀린 정보를 내놓을 수 있다는 점도 짚는다.',
            task: '생성형 AI의 쓰임을 생각을 돕는 도구와 통째로 맡기는 의존으로 나누어요.',
            levels: LV,
            items: [
              MS('과제에서 AI를 쓰는 방식을 두 가지로 나누어 보세요.', '과제와 AI', ['생각을 돕는 도구', '통째로 맡기기'], ['내 초안의 논리 점검', '모르는 개념 설명 듣기', '보고서 전체 대신 쓰기', '수학 풀이 그대로 베끼기'], { '생각을 돕는 도구': ['내 초안의 논리 점검', '모르는 개념 설명 듣기'], '통째로 맡기기': ['보고서 전체 대신 쓰기', '수학 풀이 그대로 베끼기'] }, 0.2),
              MS('생활에서 AI를 쓰는 방식을 두 가지로 나누어 보세요.', '생활과 AI', ['생각을 돕는 도구', '통째로 맡기기'], ['여행 일정 아이디어 얻기', '여러 의견 비교해 보기', '고민을 AI에게만 말하기', '진로 결정을 AI에 맡기기'], { '생각을 돕는 도구': ['여행 일정 아이디어 얻기', '여러 의견 비교해 보기'], '통째로 맡기기': ['고민을 AI에게만 말하기', '진로 결정을 AI에 맡기기'] }, 0.3),
              MP('AI 답을 쓰기 전에 꼭 할 일만 골라 담아 보세요.', 'AI 답 확인하기', ['출처를 찾아 확인해요', '내 생각과 비교해요', '틀린 곳이 없는지 봐요', '그대로 복사해 내요'], ['출처를 찾아 확인해요', '내 생각과 비교해요', '틀린 곳이 없는지 봐요'], 0.25,
                { conclude: '생성형 AI는 그럴듯하지만 틀릴 수 있어요. 내가 먼저 생각하고, 확인하고, 판단해야 생각의 주인이 돼요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. AI 의존의 신호와 사용 원칙 정하기', minutes: 13, tool: 'mindmap',
            teacher: '"AI 없이는 시작조차 못 하게 된다면 어떤 신호일까요?" 고1에서 배운 과의존 세 신호(조절 실패·현저성·문제적 결과)를 AI 사용에 적용해 보게 한다. 학교·과목마다 AI 사용 규칙이 다를 수 있으니 과제 안내를 먼저 확인하자고 말한다. 3번은 짝과 말로 나눈다.',
            task: 'AI 의존의 신호를 찾고, 스스로 생각할 몫을 지키는 사용 원칙을 골라요.',
            levels: LV,
            items: [
              MM('AI 사용 장면과 그것이 보여 주는 신호를 이어 보세요. 맞지 않는 카드는 남겨요.', 'AI 의존의 신호', [{ id: 'n1', label: '줄이려 해도 매번 먼저 물음' }, { id: 'n2', label: 'AI 없으면 아예 시작 못 함' }, { id: 'n3', label: '시험 때 실력이 안 나옴' }], ['조절 실패', '현저성', '문제적 결과', '건강한 사용'], { n1: '조절 실패', n2: '현저성', n3: '문제적 결과' }, 0.3),
              MP('생각의 주인이 되는 AI 사용 원칙만 골라 담아 보세요.', 'AI 사용 원칙', ['먼저 내 생각 적기', '쓴 부분 밝히기', '과제 규칙 확인하기', '답만 받아 내기'], ['먼저 내 생각 적기', '쓴 부분 밝히기', '과제 규칙 확인하기'], 0.25,
                { conclude: '내 생각 먼저, 확인하고, 쓴 만큼 밝히는 원칙이 AI를 도구로 남게 해요.' }),
              TALK('짝과 함께 "AI를 쓰기 전 나에게 던질 질문" 한 가지를 정해 말하고 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"다음 과제에서 AI를 쓴다면 어떤 원칙을 지키겠어요?" 출구 1번에서 고민 상담을 AI에게만 맡기는 쪽을 도구로 고른 학생에게는 마음이 힘들 때 사람과 전문 기관(Wee클래스·1388)의 도움이 필요하다는 점을 다시 말해 준다.',
          exit: [
            XS('AI 쓰임을 두 가지로 나누어 보세요.', '도구일까 의존일까', ['생각을 돕는 도구', '통째로 맡기기'], ['내 글 다듬기 제안 받기', '개념 예시 더 듣기', '발표문 전체 맡기기', '정답만 받아 적기'], { '생각을 돕는 도구': ['내 글 다듬기 제안 받기', '개념 예시 더 듣기'], '통째로 맡기기': ['발표문 전체 맡기기', '정답만 받아 적기'] }),
            XC('생성형 AI 답을 대하는 태도로 가장 알맞은 것은?', ['항상 맞으니 그대로 쓴다', '틀릴 수 있으니 확인하고 내 생각과 비교한다', '쓰지 않는 것이 유일한 방법이다'], 1, '확인과 판단은 사람의 몫이에요.'),
            XT('AI에 생각을 통째로 맡기면 잃을 수 있는 힘 한 가지를 쓰세요.'),
          ],
        },
        ws: {
          title: '생성형 AI와 생각의 주인',
          items: [
            { type: 'table', prompt: 'AI 쓰임을 나누어 예를 쓰세요.', columns: ['생각을 돕는 도구', '통째로 맡기기'], cells: [['', ''], ['', '']], answer: '예: 초안 논리 점검·개념 설명 / 보고서 대필·풀이 베끼기' },
            { type: 'choice', prompt: 'AI 답을 쓰기 전에 할 일에 ○ 하세요.', options: ['그대로 복사', '출처 확인', '더 길게 늘이기'], answer: '출처 확인' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '생성형 AI는 그럴듯하지만 ___ 정보를 내놓을 수 있다.', answer: '틀린' },
            { type: 'short', prompt: '나의 AI 사용 원칙 세 가지를 쓰세요.' },
          ],
        },
        notes: '자주 보이는 어려움: ① AI 사용 자체를 부정행위로만 본다 → 도구로 쓰는 방법과 의존을 구별하게 한다. ② AI 답을 정답으로 믿는다 → 확인의 필요를 짚는다. ③ 학교·과목의 AI 사용 규칙이 다르므로 과제 안내를 우선한다. 특정 서비스 이름을 쓰지 않는다.',
      }),
      LESSON(2, {
        title: '실시간 방송 몰입과 후원 압박 앞에서 멈추기',
        objective: '실시간 방송에 몰입해 시간과 돈을 쓰게 되는 장면에서 몰입을 키우는 장치를 알아차리고, 스스로 멈추는 선택을 할 수 있다.',
        draw: 'a glowing paper-cut live stream screen with floating hearts and coins, and a student pressing a pause button',
        banner: '멈춤 버튼은 내 손에', extra: [{ motif: 'moon', x: 80, y: 90, s: 0.7 }],
        intro: {
          teacher: '"실시간 방송은 녹화 영상보다 왜 끄기가 더 어려울까요?" 대답을 듣고(기다릴 반응: "지금 아니면 못 봐서요", "채팅이 재밌어서요") 실시간성·채팅·이름 불러 주기·후원 순위 같은 장치가 몰입을 키운다는 점을 짚는다. "후원은 내 돈이니 내 자유예요"라는 말에는 "자유로운 선택이 되려면 무엇을 알고 있어야 할까요?"라고 되묻는다. 오늘은 멈춤 버튼을 내 손에 두는 연습을 한다고 밝힌다.',
          student: '실시간 방송이 끄기 어려운 까닭 한 가지를 짝과 말해 봅시다.',
          demo: DEMO('방송의 장치', ['몰입을 키워요', '멈춤을 도와요'], ['후원 순위 발표', '시청 시간 알림'], { '몰입을 키워요': ['후원 순위 발표'], '멈춤을 도와요': ['시청 시간 알림'] }),
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 몰입을 키우는 장치 찾기', minutes: 12, tool: 'mindmap',
            teacher: '"이 장치는 나에게 무엇을 하게 만들까요?" 이름을 불러 주는 감사 인사는 "또 후원하고 싶은 마음", 한정 이벤트는 "지금 아니면 안 될 것 같은 마음"을 만든다는 점을 정리한다. 2번에서 결제 비밀번호 설정을 몰입 장치로 넣는 학생에게 "이건 내가 멈출 수 있게 돕는 장치예요"라고 바로잡는다. 방송인 개인을 비난하지 않도록 이끈다.',
            task: '실시간 방송에서 몰입을 키우는 장치와 멈춤을 돕는 장치를 가려요.',
            levels: LV,
            items: [
              MM('방송 장치와 그것이 만드는 마음을 이어 보세요. 맞지 않는 카드는 남겨요.', '장치가 만드는 마음', [{ id: 'p1', label: '후원자 이름 불러 주기' }, { id: 'p2', label: '오늘만 하는 이벤트' }, { id: 'p3', label: '후원 순위표' }], ['또 인정받고 싶은 마음', '지금 놓치기 싫은 마음', '남보다 앞서고 싶은 마음', '일찍 자고 싶은 마음'], { p1: '또 인정받고 싶은 마음', p2: '지금 놓치기 싫은 마음', p3: '남보다 앞서고 싶은 마음' }, 0.25),
              MS('장치를 두 가지로 나누어 보세요.', '몰입과 멈춤', ['몰입을 키워요', '멈춤을 도와요'], ['방송 종료 직전 이벤트', '채팅창 실시간 경쟁', '결제 비밀번호 설정', '월 결제 한도 정하기'], { '몰입을 키워요': ['방송 종료 직전 이벤트', '채팅창 실시간 경쟁'], '멈춤을 도와요': ['결제 비밀번호 설정', '월 결제 한도 정하기'] }, 0.3),
              MP('몰입이 지나쳤다는 신호만 골라 담아 보세요.', '지나친 몰입의 신호', ['용돈보다 많이 후원', '새벽까지 방송 시청', '방송 못 보면 초조', '주말에 한 편 보기'], ['용돈보다 많이 후원', '새벽까지 방송 시청', '방송 못 보면 초조'], 0.25,
                { conclude: '실시간 방송의 장치를 알아차리고, 결제 한도·시간 알림 같은 멈춤 장치를 미리 켜 두어요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 방송 앞 갈림길에서 멈추는 선택 고르기', minutes: 15, tool: 'emotion',
            teacher: '"이 선택을 하면 내일의 나는 어떨까요?" 결과 칸을 읽으며 시간과 돈, 관계에 남는 것을 말하게 한다. 3번에서 부모님 카드로 결제하는 보기를 고른 학생에게 "보호자 몰래 쓴 결제는 가족 사이의 신뢰를 다치게 하고, 미성년자 결제는 보호자와 함께 해결할 수 있어요"라고 짚는다. 이미 큰돈을 썼다면 숨기지 말고 보호자·상담 선생님과 의논하자고 말한다.',
            task: '실시간 방송 장면에서 스스로 멈추는 선택을 골라요.',
            levels: LVB,
            items: [
              EB('이 순간 어떻게 할까요?', '새벽 1시, 은호가 보던 방송에서 "10분 뒤 특별 이벤트"가 떠요.', [{ id: 'wait', text: '이벤트까지 기다려 봐요', result: '새벽 3시까지 못 자요', mood: '걱정', why: '"조금만 더"가 계속 이어지게 만드는 장치예요.' }, { id: 'off', text: '다시보기로 미루고 꺼요', result: '잠을 자고 아침에 상쾌해요', mood: '평온' }], 'off', 0.2),
              EB('어떤 선택이 좋을까요?', '좋아하는 방송인이 후원자 이름을 불러 주자 다나도 후원하고 싶어져요.', [{ id: 'more', text: '이름 불릴 때까지 계속 후원', result: '한 달 용돈이 하루에 사라져요', mood: '속상함', why: '인정받고 싶은 마음을 노린 장치예요.' }, { id: 'limit', text: '정한 한도 안에서만 응원해요', result: '부담 없이 방송을 즐겨요', mood: '평온' }, { id: 'chat', text: '후원 대신 채팅으로 응원해요', result: '돈 걱정 없이 함께해요', mood: '기쁨' }], 'limit', 0.25,
                { conclude: '응원은 정한 한도 안에서도, 돈이 들지 않는 방법으로도 할 수 있어요.' }),
              EB('어떻게 하면 좋을까요?', '용돈이 떨어진 준서에게 친구가 부모님 카드로 결제하라고 해요.', [{ id: 'card', text: '몰래 부모님 카드로 결제해요', result: '청구서를 보고 가족이 놀라요', mood: '걱정', why: '몰래 한 결제는 신뢰를 잃게 해요.' }, { id: 'stop', text: '이번 달은 멈추고 다음 달 계획해요', result: '돈과 마음 모두 지켜요', mood: '안심' }], 'stop', 0.3),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 켜 두기로 한 멈춤 장치는 무엇인가요?" 출구 1번에서 결제 한도를 몰입 장치로 넣은 학생에게는 활동 1을 다시 보게 한다. 이미 결제 문제가 생겼다면 혼자 해결하려 하지 말고 보호자·상담 선생님과 의논하자고 말해 준다.',
          exit: [
            XB('어떻게 할까요?', '시험 전날 밤, 좋아하는 방송인의 깜짝 방송 알림이 와요.', [{ id: 'later', text: '알림을 끄고 다시보기로 미뤄요', result: '시험 준비를 마치고 자요', mood: '평온' }, { id: 'join', text: '조금만 보려고 들어가요', result: '두 시간이 훌쩍 지나요', mood: '걱정', why: '"조금만"은 실시간 방송에서 지키기 어려워요.' }], 'later'),
            XC('실시간 방송 후원을 건강하게 하는 방법으로 알맞은 것은?', ['이름이 불릴 때까지 후원한다', '미리 정한 한도 안에서만 한다', '친구 카드를 빌려 한다'], 1, '미리 정한 한도가 충동을 막아 줘요.'),
            XT('실시간 방송을 볼 때 켜 둘 멈춤 장치 하나와 그 까닭을 쓰세요.'),
          ],
        },
        ws: {
          title: '실시간 방송 몰입과 멈춤',
          items: [
            { type: 'table', prompt: '장치와 그것이 만드는 마음을 쓰세요.', columns: ['장치', '만드는 마음'], cells: [['후원자 이름 불러 주기', ''], ['오늘만 하는 이벤트', ''], ['후원 순위표', '']], answer: '인정받고 싶음 / 놓치기 싫음 / 앞서고 싶음' },
            { type: 'choice', prompt: '멈춤을 돕는 장치에 ○ 하세요.', options: ['채팅창 경쟁', '월 결제 한도', '종료 직전 이벤트'], answer: '월 결제 한도' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '실시간 방송은 지금 아니면 놓칠 것 같은 마음 때문에 ___가 어렵다.', answer: '멈추기' },
            { type: 'short', prompt: '돈이 들지 않는 방법으로 좋아하는 방송인을 응원하는 방법 두 가지를 쓰세요.' },
          ],
        },
        notes: '자주 보이는 어려움: ① 후원은 개인의 자유라며 장치를 보지 않는다 → 선택을 흔드는 장치를 알아차리게 한다. ② 방송인 개인을 비난한다 → 장치와 내 선택에 초점을 둔다. ③ 학생의 실제 결제 경험을 묻지 않는다 — 장면은 모두 가상이다. 결제 문제가 있는 학생은 보호자·상담실로 잇는다.',
      }),
    ],
  });
})();
