/* 중2 창체 법정교육 — 인터넷·스마트폰 과의존 예방 (2차시). 근거: 지능정보화 기본법 제54조(학기별 1회 이상).
 * 안전교육 사이버 중독 예방(g8-cc-saf-cyber: 시간을 붙잡는 설계·불법 도박·대리입금·가족 약속)과 겹치지 않게 "SNS 비교"와 "관계 속 답장 압박"이라는 마음·관계 장면만 다룬다. 연구 수치는 쓰지 않는다. 장면·인물은 가명. */
(function () {
  const G = 8; const CODE = 'digital';
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
    { motif: 'moon', x: 410, y: 58, s: 0.8 }, { motif: 'cloud', x: 120, y: 52 }, { motif: 'hills', y: 204 },
    { motif: 'house', x: 96, y: 214, color: 'lavender', s: 0.9 }, { motif: 'tree', x: 380, y: 214 }, ...extra,
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
    flow: '1학년에서 집중과 잠을 지키는 환경을 익힌 학생들이 2학년에서는 스마트폰이 마음과 관계에 주는 영향을 살핍니다. 1차시에는 SNS에 골라 올린 남의 모습과 나를 견주며 생기는 마음을 알아차리고, 비교를 줄이는 사용 방법(팔로우 정리·사용 뒤 마음 점검)을 고릅니다. 2차시에는 단톡방 즉시 답장 압박과 "읽씹" 오해를 다루고, 서로의 쉬는 시간을 존중하는 단톡방 약속을 정합니다. 안전교육 사이버 중독 예방(g8-cc-saf-cyber) 단원과 연계해 시수 인정 가능(학교 결정).',
    refs: {},
    lessons: [
      LESSON(1, {
        title: 'SNS 속 골라 올린 모습과 내 마음 견주어 보기',
        objective: 'SNS 게시물이 골라 올린 모습이라는 점을 알고, 비교하며 생기는 마음을 알아차려 건강한 사용 방법을 고를 수 있다.',
        draw: 'a paper smartphone frame showing only a sunny highlight photo while behind it a fuller, ordinary paper scene of daily life is visible',
        banner: '보이는 건 일부예요', extra: [{ motif: 'cloud', x: 300, y: 96 }],
        intro: {
          teacher: '"친구 SNS에는 맛집·여행·멋진 옷이 가득한데, 그 친구의 하루는 정말 그것뿐일까요?" 대답을 듣고(기다릴 반응: "잘 나온 것만 올려요") 시연으로 게시물 카드를 나눈다. "다른 애들은 다 재밌게 사는데 나만 심심해요"라는 말이 나오면 "내 SNS에 올린 사진은 나의 하루 전부였나요?"라고 되묻는다. 오늘은 SNS 비교와 내 마음을 살펴본다고 밝힌다.',
          student: 'SNS를 보고 나서 기분이 좋아졌던 때와 가라앉았던 때를 가상으로 하나씩 떠올려 짝에게 말해 봅시다.',
          demo: DEMO('SNS 게시물', ['올라온 모습', '올라오지 않은 모습'], ['여행 사진', '숙제하며 지친 밤'], { '올라온 모습': ['여행 사진'], '올라오지 않은 모습': ['숙제하며 지친 밤'] }),
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 골라 올린 모습과 비교하는 마음', minutes: 14, tool: 'mindmap',
            teacher: '"이 게시물이 올라오기 전에 몇 장을 찍고 골랐을까요?" 보정·각도·여러 장 중 고르기를 떠올리게 한다. 비교가 늘 나쁜 것은 아니지만, 남의 가장 좋은 순간과 나의 평범한 하루를 견주면 마음이 가라앉기 쉽다는 점을 짚는다. 2번에서 학생의 실제 감정을 말하게 하지 않고 가상 인물로 다룬다.',
            task: 'SNS 게시물 뒤에 숨은 모습을 찾고, 비교할 때 생기는 마음과 생각을 나누어요.',
            levels: LV,
            items: [
              MS('하루 장면을 두 가지로 나누어 보세요.', '친구의 하루', ['SNS에 올라온 모습', '올라오지 않은 모습'], ['예쁘게 차린 브런치', '수십 장 중 고른 셀카', '시험 망쳐 속상한 오후', '늦잠 자서 허둥댄 아침'], { 'SNS에 올라온 모습': ['예쁘게 차린 브런치', '수십 장 중 고른 셀카'], '올라오지 않은 모습': ['시험 망쳐 속상한 오후', '늦잠 자서 허둥댄 아침'] }, 0.2),
              MM('비교하는 생각과 바로잡는 생각을 이어 보세요. 맞지 않는 카드는 남겨요.', '생각 바로잡기', [{ id: 'c1', label: '나만 재미없게 살아' }, { id: 'c2', label: '좋아요가 적으면 인기 없는 거야' }, { id: 'c3', label: '저 몸매가 돼야 해' }], ['남의 하이라이트만 본 거야', '좋아요는 내 가치가 아니야', '보정된 사진일 수 있어', '나도 더 꾸며서 올려야 해'], { c1: '남의 하이라이트만 본 거야', c2: '좋아요는 내 가치가 아니야', c3: '보정된 사진일 수 있어' }, 0.25),
              MP('SNS를 오래 본 뒤 마음이 가라앉을 때 나타나는 신호만 골라 담아 보세요.', '마음의 신호', ['내가 초라하게 느껴져요', '계속 새로고침을 해요', '하고 싶은 일이 생각나요', '친구 소식에 같이 기뻐요'], ['내가 초라하게 느껴져요', '계속 새로고침을 해요'], 0.3,
                { conclude: 'SNS는 하루의 일부를 골라 올린 곳이에요. 남의 하이라이트와 나의 하루 전체를 견주지 않아요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 비교를 줄이는 사용 방법 고르기', minutes: 13, tool: 'mindmap',
            teacher: '"SNS를 끊는 것만이 답일까요?" 완전히 끊기보다 무엇을, 얼마나, 어떻게 볼지 스스로 정하는 방법을 짚는다. "보고 나서 기분이 어떤가?"를 점검하는 습관, 마음을 가라앉히는 계정 정리를 예로 든다. 3번은 짝과 말로 나눈다.',
            task: '비교를 줄이고 마음을 지키는 SNS 사용 방법을 고르고, 나에게 맞는 방법을 정해요.',
            levels: LV,
            items: [
              MS('사용 방법을 두 가지로 나누어 보세요.', 'SNS 사용 방법', ['마음을 지켜요', '비교를 키워요'], ['보고 나서 기분을 점검해요', '불편한 계정은 숨김 처리해요', '좋아요 수를 계속 확인해요', '남과 내 사진을 견줘 봐요'], { '마음을 지켜요': ['보고 나서 기분을 점검해요', '불편한 계정은 숨김 처리해요'], '비교를 키워요': ['좋아요 수를 계속 확인해요', '남과 내 사진을 견줘 봐요'] }, 0.2),
              MM('상황과 알맞은 방법을 이어 보세요. 맞지 않는 카드는 남겨요.', '나에게 맞는 방법', [{ id: 'm1', label: '자기 전 SNS를 보면 우울해요' }, { id: 'm2', label: '올린 글 반응이 계속 신경 쓰여요' }, { id: 'm3', label: '보정 사진만 보면 내 몸이 싫어요' }], ['밤에는 SNS 앱을 열지 않아요', '올린 뒤 알림을 꺼 둬요', '다양한 모습의 계정을 봐요', '더 자주 들어가 확인해요'], { m1: '밤에는 SNS 앱을 열지 않아요', m2: '올린 뒤 알림을 꺼 둬요', m3: '다양한 모습의 계정을 봐요' }, 0.3,
                { conclude: '끊느냐 마느냐보다, 무엇을 언제 어떻게 볼지 내가 정하는 것이 마음을 지켜요.' }),
              TALK('짝과 "SNS를 보고 마음이 가라앉을 때 내가 해 볼 방법 하나"를 정해 말하고 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘부터 SNS를 닫을 때 스스로에게 할 질문은 무엇인가요?" 출구 1번에서 좋아요 수 확인을 마음을 지키는 행동으로 둔 학생에게는 숫자가 나의 가치가 아니라는 점을 다시 짚는다. 비교 때문에 마음이 오래 힘들면 담임·상담 선생님과 이야기할 수 있다고 덧붙인다.',
          exit: [
            XS('행동 카드를 나누어 보세요.', 'SNS와 내 마음', ['마음을 지켜요', '비교를 키워요'], ['나의 오늘을 일기로 써요', '남의 여행 사진만 계속 봐요', '볼 시간을 정해 둬요', '좋아요가 적으면 지워요'], { '마음을 지켜요': ['나의 오늘을 일기로 써요', '볼 시간을 정해 둬요'], '비교를 키워요': ['남의 여행 사진만 계속 봐요', '좋아요가 적으면 지워요'] }),
            XC('SNS 게시물을 볼 때 기억할 점으로 알맞은 것은 무엇인가요?', ['올라온 모습이 그 사람의 전부다', '골라 올린 하루의 일부다', '좋아요 수가 인기의 증거다'], 1, 'SNS에는 하루 가운데 골라 올린 일부가 보여요.'),
            XT('SNS를 보고 마음이 가라앉은 친구에게 건넬 말을 한 문장으로 쓰세요.'),
            MOOD,
          ],
        },
        ws: {
          title: 'SNS 비교와 내 마음',
          items: [
            { type: 'table', prompt: '비교하는 생각을 바로잡는 생각으로 바꾸어 쓰세요.', columns: ['비교하는 생각', '바로잡는 생각'], cells: [['나만 재미없게 살아', ''], ['좋아요가 적으면 인기 없어', ''], ['저 몸매가 돼야 해', '']], answer: '예) 남의 하이라이트만 본 거야, 좋아요는 내 가치가 아니야, 보정된 사진일 수 있어' },
            { type: 'choice', prompt: '마음을 지키는 SNS 사용에 ○ 하세요.', options: ['좋아요 수 계속 확인하기', '보고 나서 기분 점검하기', '남과 사진 견주기'], answer: '보고 나서 기분 점검하기' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: 'SNS에는 하루 가운데 ___ 올린 모습이 보여요.', answer: '골라' },
            { type: 'short', prompt: '나에게 맞는 SNS 사용 규칙 하나를 정하고 까닭을 쓰세요.' },
          ],
        },
        notes: '자주 보이는 어려움: ① SNS 속 모습을 그 사람의 전부로 여긴다 → 찍고 고르고 보정하는 과정을 떠올리게 한다. ② 끊기만이 해결이라고 여긴다 → 무엇을·언제·어떻게 볼지 정하는 방법을 고르게 한다. ③ 학생 자신의 외모·좋아요 수·실제 감정을 공개하게 하지 않는다. 몸에 대한 고민이 깊어 보이는 학생은 개별로 상담과 잇는다.',
      }),

      LESSON(2, {
        title: '답장 압박을 풀고 쉬는 시간을 지키는 단톡방 약속 정하기',
        objective: '단톡방 즉시 답장 압박과 "읽씹" 오해가 생기는 까닭을 알고, 서로의 쉬는 시간을 존중하는 단톡방 약속을 정할 수 있다.',
        draw: 'a paper group chat bubble with a small moon and a pause sign, friends waving goodnight from different windows',
        banner: '답장은 내 속도로', extra: [{ motif: 'moon', x: 300, y: 96 }],
        intro: {
          teacher: '"읽었는데 답이 없으면 어떤 생각이 드나요?" 대답을 듣고(기다릴 반응: "나 싫어하나?", "화났나?") 시연으로 행동 카드를 나눈다. "읽었으면 바로 답하는 게 예의예요"라는 말이 나오면 "샤워 중이거나 공부 중이라면 어떨까요?"라고 되묻는다. 오늘은 답장 압박을 풀고 쉬는 시간을 지키는 약속을 정한다고 밝힌다.',
          student: '단톡방 알림 때문에 하던 일을 멈춘 가상의 장면 하나를 짝에게 말해 봅시다.',
          demo: DEMO('단톡방', ['편안한 약속', '압박이 되는 행동'], ['밤엔 답 안 해도 돼', '왜 읽씹해?'], { '편안한 약속': ['밤엔 답 안 해도 돼'], '압박이 되는 행동': ['왜 읽씹해?'] }),
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 답장 압박 장면에서 선택하기', minutes: 14, tool: 'emotion',
            teacher: '"이 선택을 하면 나와 친구 관계는 어떻게 될까요?" 결과 칸을 읽게 한다. 답이 늦는 데에는 여러 까닭이 있으니 바로 서운해하기보다 물어보는 것이 낫다는 점을 짚는다. 늦은 밤 단톡방에서 빠지는 것은 친구를 싫어해서가 아니라 자기 시간을 지키는 일이라고 말해 준다.',
            task: '단톡방 답장 압박 장면에서 어떻게 할지 고르고 결과를 살펴봐요.',
            levels: LVB,
            items: [
              EB('시험 전날 밤 11시, 단톡방이 계속 울려요.', '시험 전날 밤 11시, 반 단톡방에서 게임 이야기가 이어지고 알림이 계속 울려요.', [
                { id: 'reply', text: '빠지면 서운해할까 봐 계속 답해요', result: '새벽까지 잠을 못 자 다음 날 시험이 힘들어요.', mood: '짜증', why: '답장을 이어 가느라 내 잠과 공부를 놓쳤어요.' },
                { id: 'night', text: '"나 이제 잘게!" 남기고 알림을 꺼요', result: '푹 자고 시험을 보고, 친구들은 아침에 인사해요.', mood: '편안함' },
                { id: 'leave', text: '말없이 단톡방을 나가요', result: '친구들이 무슨 일 있냐며 걱정해요.', mood: '걱정', why: '말없이 나가면 오해가 생길 수 있어요.' }], 'night', 0.2),
              EB('내가 보낸 메시지를 친구가 읽고 한 시간째 답이 없어요.', '수에게 "주말에 영화 볼래?"라고 보냈는데, 읽음 표시만 뜨고 한 시간째 답이 없어요.', [
                { id: 'angry', text: '"왜 읽씹해?" 하고 연달아 보내요', result: '수는 학원 수업 중이었고 메시지가 쌓여 부담을 느껴요.', mood: '미안함', why: '답이 늦는 데에는 여러 까닭이 있어요.' },
                { id: 'wait', text: '바쁜가 보다 하고 기다려요', result: '저녁에 수가 "학원이었어, 좋아!" 하고 답해요.', mood: '기쁨' },
                { id: 'gossip', text: '다른 친구에게 수 험담을 해요', result: '오해가 커지고 관계가 어색해져요.', mood: '속상함', why: '확인하지 않은 서운함이 관계를 상하게 해요.' }], 'wait', 0.25),
              EB('친구들이 답이 늦는 한 명을 단톡방에서 놀려요.', '단톡방에서 몇몇이 "하늘이는 맨날 늦게 답해, 무시하냐?"며 하늘을 놀려요.', [
                { id: 'join', text: '"ㅋㅋ 맞아" 하고 같이 놀려요', result: '하늘은 단톡방이 무서워져요.', mood: '슬픔', why: '답장 속도로 친구를 몰아세우면 압박이 커져요.' },
                { id: 'defend', text: '"각자 사정이 있지, 천천히 해도 돼"라고 말해요', result: '분위기가 누그러지고 하늘이 고마워해요.', mood: '고마움' },
                { id: 'ignore', text: '못 본 척 다른 이야기를 해요', result: '놀림이 계속 이어져요.', mood: '걱정', why: '짧은 한마디로 분위기를 바꿀 수 있어요.' }], 'defend', 0.3,
                { conclude: '답장은 각자의 속도로 — 빨리 답하지 않는 것이 관계를 소홀히 하는 것은 아니에요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 우리 반 단톡방 약속 만들기', minutes: 13, tool: 'mindmap',
            teacher: '"좋은 단톡방 약속은 누구에게 좋은 약속일까요?" 모두가 지킬 수 있고 쉬는 시간을 존중하는 약속을 고르게 한다. "밤에는 단톡방 금지"처럼 지나치게 강한 규칙보다 "밤 10시 뒤에는 답 안 해도 괜찮다"처럼 압박을 줄이는 약속이 지키기 쉽다는 점을 짚는다. 3번은 모둠에서 말로 나눈다.',
            task: '쉬는 시간을 존중하는 단톡방 약속을 고르고, 우리 반 약속을 정해요.',
            levels: LV,
            items: [
              MS('단톡방 약속을 두 가지로 나누어 보세요.', '단톡방 약속', ['쉬는 시간을 존중해요', '압박을 키워요'], ['밤 10시 뒤엔 답 안 해도 돼요', '급한 일은 전화로 해요', '읽으면 5분 안에 답해요', '안 읽은 사람 이름을 불러요'], { '쉬는 시간을 존중해요': ['밤 10시 뒤엔 답 안 해도 돼요', '급한 일은 전화로 해요'], '압박을 키워요': ['읽으면 5분 안에 답해요', '안 읽은 사람 이름을 불러요'] }, 0.2),
              MP('답이 늦을 때 오해를 줄이는 행동만 골라 담아 보세요.', '오해 줄이기', ['"이따 답할게" 한마디 남기기', '서운하면 직접 물어보기', '읽음 표시만 보고 판단하기', '답 없으면 다른 방에서 험담하기'], ['"이따 답할게" 한마디 남기기', '서운하면 직접 물어보기'], 0.25,
                { conclude: '"이따 답할게"와 "바쁜가 보다" — 두 마디가 단톡방 오해를 줄여요.' }),
              TALK('모둠에서 "우리 반 단톡방 약속 한 가지"를 모두가 지킬 수 있게 정해 말하고 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 밤 단톡방에서 바로 써 볼 말은 무엇인가요?" 출구 1번에서 5분 안에 답하기를 존중하는 약속으로 둔 학생에게는 그 약속이 누구의 쉬는 시간을 빼앗는지 다시 묻는다. 단톡방에서 놀림·따돌림이 생기면 학교폭력 예방 수업에서 배운 대로 담임 선생님·117에 알릴 수 있다고 덧붙인다.',
          exit: [
            XB('밤 10시 반, 친구가 "자? 내일 숙제 뭐였지?"라고 보냈어요. 나는 막 자려던 참이에요. 어떻게 할까요?', '막 자려는데 친구가 숙제를 묻는 메시지를 보냈어요.', [
              { id: 'quick', text: '숙제 사진 하나 보내고 "잘게!" 남겨요' },
              { id: 'chat', text: '답한 김에 한 시간 더 수다를 떨어요', why: '답장이 길어지면 잠을 놓쳐요.' },
              { id: 'angry', text: '"밤에 왜 연락해?" 하고 화를 내요', why: '짧게 답하고 내 시간을 지키는 방법도 있어요.' }], 'quick'),
            XC('읽고 답이 늦은 친구에게 알맞은 생각은 무엇인가요?', ['나를 무시하는 거다', '바쁜 사정이 있을 수 있다', '단톡방에서 따져야 한다'], 1, '답이 늦는 데에는 여러 사정이 있을 수 있어요.'),
            XT('늦은 밤 단톡방에서 빠져나올 때 남길 나만의 한마디를 쓰세요.'),
          ],
        },
        ws: {
          title: '답장은 내 속도로',
          items: [
            { type: 'table', prompt: '단톡방 약속이 쉬는 시간을 존중하면 ○, 압박을 키우면 ×를 쓰세요.', columns: ['약속', '○ / ×'], cells: [['밤 10시 뒤엔 답 안 해도 돼요', ''], ['읽으면 5분 안에 답해요', ''], ['급한 일은 전화로 해요', ''], ['안 읽은 사람 이름 부르기', '']], answer: '○, ×, ○, ×' },
            { type: 'choice', prompt: '답이 늦을 때 오해를 줄이는 말에 ○ 하세요.', options: ['왜 읽씹해?', '이따 답할게!', '답 안 하면 빼 버린다'], answer: '이따 답할게!' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '늦은 밤에는 "나 이제 ___!" 하고 알림을 꺼요.', answer: '잘게' },
            { type: 'short', prompt: '우리 반 단톡방 약속 한 가지와 그 약속이 필요한 까닭을 쓰세요.' },
          ],
        },
        notes: '자주 보이는 어려움: ① 즉시 답장이 예의라고 여긴다 → 각자의 사정과 쉬는 시간을 떠올리게 한다. ② "읽씹"을 무시로 단정한다 → 확인하고 묻는 습관을 연습한다. ③ 실제 반 단톡방 내용을 화면에 띄우거나 학생 대화를 공개하지 않는다. 단톡방 따돌림은 학교폭력 예방(g8-cc-bully) 단원과 학교의 절차로 다룬다.',
      }),
    ],
  });
})();
