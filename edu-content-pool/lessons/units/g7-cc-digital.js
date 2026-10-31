/* 중1 창체 법정교육 — 인터넷·스마트폰 과의존 예방 (2차시). 근거: 지능정보화 기본법 제54조(학기별 1회 이상).
 * 안전교육 사이버 중독 예방(g7-cc-saf-cyber: 과의존 신호·게임 규칙·확률형 아이템·실천 계획)과 겹치지 않게 "집중"과 "잠"이라는 생활 장면만 다룬다. 연구 수치(몇 분·몇 %)는 쓰지 않는다. 장면·인물은 가명. */
(function () {
  const G = 7; const CODE = 'digital';
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
    flow: '중학교에 올라와 스마트폰을 쓰는 시간이 늘어나는 1학년에게, 스마트폰이 생활의 두 기둥인 집중과 잠에 어떤 영향을 주는지 스스로 살피게 하는 단원입니다. 1차시에는 공부·대화 중 알림이 주의를 흩뜨리는 장면을 분석하고, 방해 금지·다른 곳에 두기 같은 집중 환경을 고릅니다. 2차시에는 잠들기 전 사용이 잠을 늦추는 까닭을 알고, 잠자리 스마트폰 정리 차례를 세웁니다. 1학기·2학기에 한 차시씩 나누어 운영할 수 있습니다. 안전교육 사이버 중독 예방(g7-cc-saf-cyber) 단원과 연계해 시수 인정 가능(학교 결정).',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '알림이 끊는 집중을 분석하고 집중 환경 고르기',
        objective: '공부·대화 중 스마트폰 알림이 주의를 흩뜨리는 장면을 분석하고, 나에게 맞는 집중 환경을 고를 수 있다.',
        draw: 'a student at a desk focusing on a book while a paper smartphone rests face down in a drawer, small notification bubbles floating away',
        banner: '집중을 지켜요', extra: [{ motif: 'star', x: 300, y: 96, color: 'lavender' }],
        intro: {
          teacher: '"숙제하다가 알림 한 번 확인하고 돌아오면 바로 숙제가 다시 손에 잡히나요?" 대답을 듣고(기다릴 반응: "다른 것도 보게 돼요", "어디까지 했는지 까먹어요") 시연으로 환경 카드를 나눈다. "알림 확인은 1초면 끝나요"라는 말이 나오면 "확인하고 다시 집중하기까지는 얼마나 걸렸나요?"라고 되묻는다. 오늘은 집중을 지키는 환경을 고른다고 밝힌다.',
          student: '공부하거나 책을 읽을 때 집중이 가장 잘 깨지는 순간 하나를 짝에게 말해 봅시다.',
          demo: DEMO('공부할 때', ['집중을 도와요', '집중을 흩뜨려요'], ['폰을 가방에 넣기', '책상 위 알림 켜 두기'], { '집중을 도와요': ['폰을 가방에 넣기'], '집중을 흩뜨려요': ['책상 위 알림 켜 두기'] }),
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 집중이 끊기는 장면 분석하기', minutes: 14, tool: 'mindmap',
            teacher: '"화면이 꺼져 있어도 책상 위에 휴대전화가 있으면 어떤가요?" 진동이나 화면이 켜지는 순간 눈과 마음이 그쪽으로 간다는 점을 짚는다. 확인하고 돌아온 뒤 다시 집중하는 데 시간이 든다는 점을 학생 경험으로 말하게 한다. "음악 들으며 하면 더 잘돼요"라는 말에는 사람마다 다를 수 있지만 영상·채팅은 다르다는 점을 구별해 준다.',
            task: '공부·대화 장면 카드를 집중을 돕는 것과 흩뜨리는 것으로 나누고, 그 까닭을 말해요.',
            levels: LV,
            items: [
              MS('공부 장면의 환경을 두 가지로 나누어 보세요.', '공부할 때', ['집중을 도와요', '집중을 흩뜨려요'], ['방해 금지 모드 켜기', '다른 방에 두고 공부하기', '단톡방 알림 켜 두기', '영상 틀어 놓고 공부하기'], { '집중을 도와요': ['방해 금지 모드 켜기', '다른 방에 두고 공부하기'], '집중을 흩뜨려요': ['단톡방 알림 켜 두기', '영상 틀어 놓고 공부하기'] }, 0.2),
              MS('대화 장면의 행동을 두 가지로 나누어 보세요.', '친구와 이야기할 때', ['대화에 집중해요', '대화가 끊겨요'], ['얼굴을 보고 들어요', '폰을 엎어 두고 말해요', '말하는 중에 화면을 넘겨요', '알림마다 답장해요'], { '대화에 집중해요': ['얼굴을 보고 들어요', '폰을 엎어 두고 말해요'], '대화가 끊겨요': ['말하는 중에 화면을 넘겨요', '알림마다 답장해요'] }, 0.25),
              MM('장면과 그때 생기는 일을 이어 보세요. 맞지 않는 카드는 남겨요.', '생기는 일', [{ id: 'n1', label: '수학 풀다 알림 확인' }, { id: 'n2', label: '책 읽다 짧은 영상 하나' }, { id: 'n3', label: '대화 중 휴대전화 보기' }], ['풀던 흐름을 놓쳐요', '영상이 줄줄이 이어져요', '친구가 무시당한 느낌', '집중이 더 잘돼요'], { n1: '풀던 흐름을 놓쳐요', n2: '영상이 줄줄이 이어져요', n3: '친구가 무시당한 느낌' }, 0.3,
                { conclude: '알림 한 번은 짧아도, 흩어진 주의를 다시 모으는 데는 시간이 들어요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 나에게 맞는 집중 환경 고르기', minutes: 13, tool: 'mindmap',
            teacher: '"모든 사람에게 같은 방법이 맞을까요?" 상황마다 쓸 수 있는 방법을 고르고, 의지보다 환경을 바꾸는 것이 쉽다는 점을 짚는다. 2번에서 "의지로 참아요"만 고르는 학생에게는 "의지는 지치지만 다른 방에 둔 휴대전화는 지치지 않아요"라고 말해 준다. 3번은 짝과 말로 나눈다.',
            task: '상황에 맞는 집중 방법을 잇고, 이번 주에 해 볼 나의 집중 환경을 정해요.',
            levels: LV,
            items: [
              MM('상황과 집중 방법을 이어 보세요. 맞지 않는 카드는 남겨요.', '집중 방법', [{ id: 'f1', label: '시험공부 1시간' }, { id: 'f2', label: '가족과 저녁 식사' }, { id: 'f3', label: '단톡방이 계속 울릴 때' }], ['다른 방에 두고 타이머 맞추기', '식탁에 휴대전화 두지 않기', '그 방만 알림 끄기', '알림 소리 키우기'], { f1: '다른 방에 두고 타이머 맞추기', f2: '식탁에 휴대전화 두지 않기', f3: '그 방만 알림 끄기' }, 0.25),
              MP('의지보다 환경을 바꾸는 방법만 골라 담아 보세요.', '환경 바꾸기', ['휴대전화를 가방 안에 넣어요', '홈 화면에서 앱을 치워요', '보고 싶어도 그냥 참아요', '열 번만 보고 그만둬요'], ['휴대전화를 가방 안에 넣어요', '홈 화면에서 앱을 치워요'], 0.3,
                { conclude: '참는 것보다 보이지 않게, 울리지 않게 환경을 바꾸는 것이 집중을 오래 지켜요.' }),
              TALK('짝과 "이번 주 숙제 시간에 해 볼 집중 환경 하나"를 정해 말하고 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 정한 집중 환경을 언제 처음 써 볼 건가요?" 출구 1번에서 영상 틀어 놓고 공부하기를 집중을 돕는다고 둔 학생에게는 화면이 움직이면 눈이 따라간다는 점을 다시 짚는다. 2학기에는 잠과 스마트폰을 다룬다고 예고한다.',
          exit: [
            XS('환경 카드를 나누어 보세요.', '집중 환경', ['집중을 도와요', '집중을 흩뜨려요'], ['책상 위를 비워요', '게임 알림을 켜 둬요', '타이머로 공부 시간을 정해요', '공부하며 채팅을 해요'], { '집중을 도와요': ['책상 위를 비워요', '타이머로 공부 시간을 정해요'], '집중을 흩뜨려요': ['게임 알림을 켜 둬요', '공부하며 채팅을 해요'] }),
            XC('집중을 오래 지키는 데 더 효과적인 방법은 무엇인가요?', ['보고 싶어도 의지로 참기', '휴대전화를 다른 곳에 두기', '알림 소리를 키우기'], 1, '보이지 않게, 울리지 않게 환경을 바꾸면 의지에 덜 기대도 돼요.'),
            XT('이번 주에 해 볼 나의 집중 환경을 한 문장으로 쓰세요.'),
            MOOD,
          ],
        },
        ws: {
          title: '집중을 지키는 환경',
          items: [
            { type: 'table', prompt: '상황에 맞는 집중 방법을 쓰세요.', columns: ['상황', '집중 방법'], cells: [['시험공부', ''], ['가족 식사', ''], ['단톡방이 울릴 때', '']], answer: '다른 방에 두기·타이머, 식탁에 두지 않기, 그 방만 알림 끄기' },
            { type: 'choice', prompt: '환경을 바꾸는 방법에 ○ 하세요.', options: ['그냥 참기', '홈 화면에서 앱 치우기', '열 번만 보기'], answer: '홈 화면에서 앱 치우기' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '알림 확인은 짧아도 다시 ___하는 데는 시간이 들어요.', answer: '집중' },
            { type: 'short', prompt: '친구와 대화할 때 내가 지킬 휴대전화 예절을 두 문장으로 쓰세요.' },
          ],
        },
        notes: '자주 보이는 어려움: ① 알림 확인은 짧으니 괜찮다고 여긴다 → 다시 집중하기까지의 시간을 경험으로 떠올리게 한다. ② 의지만으로 해결하려 한다 → 환경 바꾸기(다른 곳에 두기, 알림 끄기)를 먼저 고르게 한다. ③ 개인의 실제 사용 시간을 공개하게 하지 않는다. 과의존 신호와 게임 규칙은 안전교육 사이버 중독 예방 단원에서 다룬다.',
      }),

      LESSON(2, {
        title: '잠들기 전 스마트폰 정리 차례 세우기',
        objective: '잠들기 전 스마트폰 사용이 잠을 늦추는 까닭을 말하고, 잠자리 스마트폰 정리 차례를 세울 수 있다.',
        draw: 'a quiet paper bedroom at night with a smartphone charging outside the door, a student reading a book under a warm lamp',
        banner: '폰은 잠자리 밖에서', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }],
        intro: {
          teacher: '"\'딱 하나만 보고 자야지\' 하고 시계를 다시 봤을 때 몇 시였던 적이 있나요?" 대답을 듣고(기다릴 반응: "한 시간 지나 있었어요") 시연으로 행동 카드를 나눈다. "누워서 보면 졸려서 더 잘 자요"라는 말이 나오면 "다음 영상이 계속 나오면 잠이 오는 걸까요, 깨어 있게 될까요?"라고 되묻는다. 오늘은 잠들기 전 스마트폰 정리 차례를 세운다고 밝힌다.',
          student: '잠들기 전 30분 동안 스마트폰 대신 할 수 있는 일 하나를 짝에게 말해 봅시다.',
          demo: DEMO('잠들기 전', ['잠을 도와요', '잠을 늦춰요'], ['조용히 책 읽기', '누워서 영상 보기'], { '잠을 도와요': ['조용히 책 읽기'], '잠을 늦춰요': ['누워서 영상 보기'] }),
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 잠을 늦추는 까닭 찾기', minutes: 13, tool: 'mindmap',
            teacher: '"잠들기 전 스마트폰이 잠을 늦추는 까닭은 무엇일까요?" 밝은 화면 빛, 계속 이어지는 영상·채팅이 뇌를 깨어 있게 만든다는 점을 짚는다. 잠이 부족하면 다음 날 집중·기분·몸이 함께 힘들어진다는 점을 말해 준다. "주말에 몰아 자면 돼요"라는 말에는 매일 비슷한 시간에 자고 일어나는 것이 중요하다고 답한다.',
            task: '잠들기 전 행동이 잠에 주는 영향을 나누고, 잠이 부족할 때 생기는 일을 이어요.',
            levels: LV,
            items: [
              MS('잠들기 전 행동을 두 가지로 나누어 보세요.', '잠들기 전 30분', ['잠을 도와요', '잠을 늦춰요'], ['가볍게 스트레칭해요', '불을 어둡게 해요', '이불 속에서 채팅해요', '자동 재생 영상을 봐요'], { '잠을 도와요': ['가볍게 스트레칭해요', '불을 어둡게 해요'], '잠을 늦춰요': ['이불 속에서 채팅해요', '자동 재생 영상을 봐요'] }, 0.2),
              MP('잠들기 전 스마트폰이 잠을 늦추는 까닭만 골라 담아 보세요.', '잠을 늦추는 까닭', ['밝은 화면 빛', '끝없이 이어지는 영상', '답장해야 할 것 같은 채팅', '휴대전화의 무게'], ['밝은 화면 빛', '끝없이 이어지는 영상', '답장해야 할 것 같은 채팅'], 0.25),
              MM('잠이 부족할 때와 생기는 일을 이어 보세요. 맞지 않는 카드는 남겨요.', '잠이 부족하면', [{ id: 's1', label: '1교시 수업' }, { id: 's2', label: '친구와 대화' }, { id: 's3', label: '체육 시간' }], ['졸려서 내용이 안 들어와요', '작은 일에도 짜증이 나요', '몸이 무겁고 다치기 쉬워요', '키가 갑자기 커져요'], { s1: '졸려서 내용이 안 들어와요', s2: '작은 일에도 짜증이 나요', s3: '몸이 무겁고 다치기 쉬워요' }, 0.3,
                { conclude: '잠은 다음 날의 집중·기분·몸을 함께 지키는 시간이에요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 잠자리 정리 차례 세우기', minutes: 14, tool: 'story',
            teacher: '"알람 때문에 휴대전화를 머리맡에 둬야 해요"라는 말이 나오면 "알람만 맞춰 두고 손이 닿지 않는 곳에 두면 어떨까요?"라고 되묻는다. 차례를 정할 때 내가 실제로 할 수 있는 순서인지 따져 보게 한다. 3번은 짝과 말로 나눈다.',
            task: '잠들기 전 스마트폰 정리 카드를 차례대로 놓고, 나만의 잠자리 약속을 정해요.',
            levels: LV,
            items: [
              SO('잠들기 30분 전부터의 차례로 카드를 놓아 보세요.', '잠자리 정리', ['처음', '다음', '그다음', '끝'], [C('alarm', '알람을 맞춰요', 'sun'), C('charge', '방 밖에서 충전해요', 'house'), C('read', '책이나 스트레칭', 'leaf'), C('sleep', '불 끄고 잠들어요', 'moon')], ['alarm', 'charge', 'read', 'sleep'], 0.2),
              SO('단톡방에서 늦은 밤 대화가 이어질 때의 차례로 카드를 놓아 보세요.', '늦은 밤 단톡방', ['처음', '다음', '끝'], [C('tell', '"이제 잘게" 남겨요', 'star'), C('mute', '그 방 알림을 꺼요', 'leaf'), C('away', '휴대전화를 내려놓아요', 'moon')], ['tell', 'mute', 'away'], 0.25,
                { conclude: '"이제 잘게" 한마디와 알림 끄기로 늦은 밤 대화에서 빠져나올 수 있어요.' }),
              TALK('짝과 "이번 주 지킬 나의 잠자리 스마트폰 약속 하나"를 정해 말하고 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 밤 휴대전화를 어디에 두고 잘 건가요?" 출구 1번에서 누워서 영상 보기를 잠을 돕는다고 둔 학생에게는 자동 재생이 끝을 만들지 않는다는 점을 다시 짚는다. 1학기 집중, 2학기 잠을 묶어 "스마트폰은 내 시간을 정해서"로 정리한다.',
          exit: [
            XS('행동 카드를 나누어 보세요.', '잠과 스마트폰', ['잠을 도와요', '잠을 늦춰요'], ['머리맡 밖에서 충전해요', '자기 전 게임 한 판 더', '"이제 잘게" 남기고 끄기', '잠이 안 와서 영상을 봐요'], { '잠을 도와요': ['머리맡 밖에서 충전해요', '"이제 잘게" 남기고 끄기'], '잠을 늦춰요': ['자기 전 게임 한 판 더', '잠이 안 와서 영상을 봐요'] }),
            XC('알람 때문에 휴대전화가 필요할 때 알맞은 방법은 무엇인가요?', ['베개 옆에 두고 잔다', '알람을 맞춰 손이 닿지 않는 곳에 둔다', '알람을 쓰지 않는다'], 1, '알람만 맞춰 멀리 두면 일어날 수 있고 밤사이 보지 않게 돼요.'),
            XT('오늘 밤 지킬 나의 잠자리 약속을 한 문장으로 쓰세요.'),
          ],
        },
        ws: {
          title: '잠자리 스마트폰 정리',
          items: [
            { type: 'table', prompt: '잠들기 전 정리 차례를 쓰세요.', columns: ['차례', '할 일'], cells: [['1', ''], ['2', ''], ['3', ''], ['4', '']], answer: '알람 맞추기, 방 밖에서 충전, 책·스트레칭, 불 끄고 잠들기' },
            { type: 'choice', prompt: '잠들기 전 스마트폰이 잠을 늦추는 까닭이 아닌 것에 ○ 하세요.', options: ['밝은 화면 빛', '이어지는 영상', '휴대전화의 색깔'], answer: '휴대전화의 색깔' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '잠이 부족하면 다음 날 집중과 ___이 함께 힘들어져요.', answer: '기분' },
            { type: 'short', prompt: '늦은 밤 단톡방에서 빠져나올 때 남길 말을 쓰고, 그 까닭을 한 문장으로 쓰세요.' },
          ],
        },
        notes: '자주 보이는 어려움: ① 누워서 보면 졸려서 잘 잔다고 여긴다 → 자동 재생과 밝은 화면이 깨어 있게 하는 점을 짚는다. ② 알람 때문에 머리맡에 둬야 한다고 여긴다 → 알람만 맞춰 멀리 두는 방법을 고르게 한다. ③ 학생의 실제 취침 시각·사용 시간을 발표시키지 않는다. 잠 문제가 오래가면 보건 선생님과 상의할 수 있다고 알린다.',
      }),
    ],
  });
})();
