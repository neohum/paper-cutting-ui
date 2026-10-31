/* 5학년 창체 법정교육 — 인터넷·스마트폰 과의존 예방 (2차시). 근거: 지능정보화 기본법 제54조(학기별 1회 이상). 사이버 중독 예방(g5-cc-saf-cyber)과 연계 인정 가능(학교 결정), 그 단원과 다른 장면을 쓴다. 장면·인물은 가상(가명 한 글자).
 */
(function () {
  const G = 5, CODE = 'digital';
  const UNIT = `g${G}-창체-${CODE}`;
  const TITLE = '인터넷·스마트폰 과의존 예방';
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
  const MS = (prompt, topic, slots, cards, sort, d, more) => ({ prompt, toolOptions: { topic, slots, cards }, target: { sort }, difficulty: d, ...more });
  const MM = (prompt, topic, slots, cards, match, d, more) => ({ prompt, toolOptions: { mode: 'match', topic, slots, cards }, target: { match }, difficulty: d, ...more });
  const MP = (prompt, topic, cards, pick, d, more) => ({ prompt, toolOptions: { mode: 'pick', topic, basket: topic, cards }, target: { pick }, difficulty: d, ...more });
  const EB = (prompt, situation, choices, choice, d, more) => ({ prompt, toolOptions: { mode: 'branch', situation, choices }, target: { choice }, difficulty: d, ...more });
  const EM = (prompt, slots, cards, match, d, more) => ({ prompt, toolOptions: { mode: 'match', slots, cards }, target: { match }, difficulty: d, ...more });
  const ES = (prompt, slots, cards, sort, d, more) => ({ prompt, toolOptions: { mode: 'sort', slots, cards, weather: false }, target: { sort }, difficulty: d, ...more });
  const EP = (prompt, basket, cards, pick, d, more) => ({ prompt, toolOptions: { mode: 'pick', basket, cards, weather: false }, target: { pick }, difficulty: d, ...more });
  const SO = (prompt, title, slots, cards, order, d, more) => ({ prompt, toolOptions: { title, slots, cards }, target: { order }, difficulty: d, ...more });
  const SF = (prompt, slots, cards, fill, d, more) => ({ prompt, toolOptions: { mode: 'fill', slots, cards }, target: { fill }, difficulty: d, ...more });
  const LV = { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } };
  const LVB = { easy: { showBack: true }, base: {}, challenge: {} };
  const MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };
  // 도입 6 + 전개 27 + 정리 7 = 40분
  const LESSON = (n, o) => Object.assign(base(n), {
    title: o.title, objective: o.objective,
    illustration: { prompt: PROMPT(o.draw), scene: SCENE(o.banner, o.extra) },
    stages: [
      { id: 'intro', title: '도입', minutes: 6, teacher: o.intro.teacher, student: o.intro.student, demo: o.intro.demo },
      { id: 'main', title: '전개', minutes: 27, activities: o.acts },
      { id: 'wrapup', title: '정리', minutes: 7, teacher: o.wrap.teacher, exitTicket: o.wrap.exit },
    ],
    worksheet: o.ws, differentiation: o.diff, teacherNotes: o.notes,
  });
  const DIFF = (easy, challenge) => ({ easy, base: '모든 카드를 놓거나 보기를 고른 뒤 확인을 눌러 스스로 고쳐요.', challenge });

  PaperLessons.registerUnit({
    id: `g${G}-cc-${CODE}`, schema: 'edu-unit.v1', catalogUnit: UNIT,
    grade: G, subject: '창체', unitTitle: TITLE,
    flow: '5학년 인터넷·스마트폰 과의존 예방 단원은 스마트폰을 찾게 만드는 "마음"을 들여다보는 2차시입니다. 1차시에는 심심하거나 불안할 때 손이 먼저 스마트폰으로 가는 습관을 알아차리고, 그 마음을 달랠 다른 방법을 고릅니다. 2차시에는 단체 대화방에서 바로 답해야 할 것 같은 압박과 놓칠까 봐 불안한 마음을 다루고, 대화 시간 약속을 차례로 세웁니다. 4학년(잠들기 전 화면, 함께 있을 때 내려놓기)에서 나아가 "왜 자꾸 꺼내는지 마음 살피기"를 다루고, 6학년(AI 챗봇 의존, 디지털 균형 캠페인)으로 이어집니다. 사이버 중독 예방(g5-cc-saf-cyber) 단원과 연계해 시수 인정 가능(학교 결정)하며, 그 단원의 자가 점검·자동 재생 설계·뽑기 결제·단계별 줄이기·가족 약속과는 다른 장면을 씁니다. 근거는 「지능정보화 기본법」 제54조(학기별 1회 이상)입니다.',
    refs: {},
    lessons: [
      // ───────────────────────────── 1차시
      LESSON(1, {
        title: '심심함·불안이 올 때 스마트폰 말고 다른 방법 고르기',
        objective: '심심하거나 불안할 때 바로 스마트폰을 찾는 습관을 알아차리고, 그 마음을 달랠 다른 방법을 고를 수 있다.',
        draw: 'a paper child waiting at a bus stop, a paper phone left in a pocket while the child watches paper clouds and birds and hums, a small paper book in hand',
        banner: '잠깐, 손보다 마음 먼저', extra: [{ motif: 'bird', x: 320, y: 96 }],
        intro: {
          teacher: '"엘리베이터를 기다리는 1분 동안 무엇을 하나요?" 두세 명의 대답을 듣고(기다릴 반응: "휴대전화를 봐요", "그냥 기다려요") 시연 단추로 스마트폰을 꺼내게 하는 순간과 다른 방법이 나뉘는 모습을 보여 준다. "심심한 건 나쁜 거예요"가 나오면 "심심할 때 새로운 생각이 떠오른 적은 없나요?"라고 되묻는다. 오늘은 스마트폰을 찾게 만드는 마음을 알아차리고 다른 방법을 고른다고 밝힌다.',
          student: '스마트폰 없이 기다리는 동안 할 수 있는 일을 짝과 하나씩 말해 봅시다.',
          demo: { tool: 'mindmap', options: { topic: '손이 가는 순간', slots: ['꺼내고 싶은 마음', '다른 방법'], cards: ['줄 서서 기다려 심심해요', '창밖 구름 모양 찾기'], shuffle: false }, sequence: [{ sort: { '꺼내고 싶은 마음': ['줄 서서 기다려 심심해요'], '다른 방법': ['창밖 구름 모양 찾기'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 스마트폰을 찾게 하는 마음 알아차리기', minutes: 13, tool: 'mindmap',
            teacher: '"그때 스마트폰을 꺼낸 까닭은 무엇이었을까요?" 1번에서 상황과 마음을 이으며 심심함·불안·어색함·피하고 싶음처럼 다양한 마음이 숨어 있음을 짚는다. 2번에서 숙제가 하기 싫어 폰을 켜는 것도 "피하고 싶은 마음"임을 말한다. 3번은 마음이 신호를 보낼 때 잠깐 멈추고 이름 붙이는 것이 첫걸음이라고 알려 준다.',
            task: '스마트폰을 꺼내는 상황과 숨은 마음을 잇고, 꺼내기 전 살필 신호를 골라요.',
            levels: LV,
            items: [
              MM('상황과 그때 숨은 마음을 이어 보세요. 맞지 않는 카드는 남겨요.', '숨은 마음', [{ id: 's1', label: '병원에서 차례를 기다려요.' }, { id: 's2', label: '처음 간 모임에서 혼자예요.' }, { id: 's3', label: '어려운 숙제를 펼쳤어요.' }], ['심심함', '어색함', '피하고 싶음', '신남'], { s1: '심심함', s2: '어색함', s3: '피하고 싶음' }, 0.15),
              MS('스마트폰을 꺼낸 까닭을 필요한 일과 마음 때문으로 나누어 보세요.', '꺼낸 까닭', ['필요한 일', '마음 때문'], ['보호자 전화를 받아요', '할 일 없어 그냥 켜요', '버스 시간을 찾아봐요', '불안해서 자꾸 확인해요'], { '필요한 일': ['보호자 전화를 받아요', '버스 시간을 찾아봐요'], '마음 때문': ['할 일 없어 그냥 켜요', '불안해서 자꾸 확인해요'] }, 0.2),
              MP('꺼내기 전에 잠깐 멈추고 살필 신호만 골라 담아 보세요.', '멈춤 신호', ['이유 없이 손이 가요', '방금 보고 또 봐요', '지도 앱이 필요해요', '숙제 자료를 찾아요'], ['이유 없이 손이 가요', '방금 보고 또 봐요'], 0.25,
                { conclude: '스마트폰을 꺼내기 전 "지금 왜?"라고 물으면 숨은 마음이 보여요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 심심함과 불안을 달래는 다른 길 고르기', minutes: 14, tool: 'emotion',
            teacher: '"스마트폰 말고 이 마음을 달랠 방법은 무엇이 있을까요?" 결과 칸을 읽으며 잠깐의 재미와 오래가는 기분을 견주게 한다. 1번에서 "심심함을 참으면 손해"라는 생각에 "심심할 때 무엇을 만들어 본 적이 있나요?"라고 묻는다. 3번은 불안할 때 스마트폰으로 계속 확인할수록 불안이 더 커질 수 있다는 점을 짚는다.',
            task: '심심하거나 불안한 상황에서 어떻게 할지 고르고, 그 결과를 살펴봐요.',
            levels: LVB,
            items: [
              EB('주말 오후, 준이는 할 일이 없어 심심해요. 어떻게 할까요?', '숙제를 다 한 주말 오후, 준이는 할 일이 없어 소파에 누워 있어요.', [
                { id: 'scroll', text: '저녁까지 영상만 넘겨 봐요', result: '시간이 훌쩍 가고 눈과 머리가 지쳐요.', mood: '걱정', why: '심심함을 화면으로만 채우면 쉬어도 피곤해요.' },
                { id: 'make', text: '종이접기·그리기를 해 봐요', result: '심심하던 시간이 새 작품으로 바뀌어요.', mood: '뿌듯함' },
                { id: 'sleep', text: '짜증 내며 누워만 있어요', result: '기분이 처지고 시간만 흘러요.', mood: '속상함', why: '심심함은 새로운 것을 해 볼 기회가 될 수 있어요.' }], 'make', 0.15),
              EB('친구를 기다리는데 늦어요. 하는 어떻게 할까요?', '놀이터에서 친구를 기다리는데 10분째 오지 않아요. 하는 손이 휴대전화로 가요.', [
                { id: 'game', text: '게임을 켜고 푹 빠져요', result: '친구가 와서 불러도 못 들어요.', mood: '걱정', why: '기다림을 게임으로 채우면 멈추기 어려워요.' },
                { id: 'call', text: '연락만 하고 넣어 둬요', result: '친구 소식을 알고 주변을 둘러보며 기다려요.', mood: '편안함' },
                { id: 'check', text: '1분마다 메시지를 확인해요', result: '기다림이 더 길고 초조하게 느껴져요.', mood: '불안', why: '자꾸 확인할수록 초조함이 커져요.' }], 'call', 0.2),
              EB('발표 전날 밤, 도는 긴장돼서 자꾸 휴대전화를 봐요. 어떻게 할까요?', '내일 발표를 앞둔 도는 긴장돼서 잠자리에 누워서도 계속 휴대전화를 들여다봐요.', [
                { id: 'more', text: '잠 안 오니 더 봐요', result: '늦게 잠들어 다음 날 더 떨려요.', mood: '불안', why: '화면을 볼수록 잠이 늦어지고 긴장은 그대로예요.' },
                { id: 'breathe', text: '폰을 두고 숨을 천천히 쉬어요', result: '마음이 가라앉고 푹 자요.', mood: '안심' },
                { id: 'search', text: '실수한 영상만 찾아봐요', result: '걱정이 더 커져요.', mood: '걱정', why: '불안할 때는 화면보다 몸과 마음을 쉬게 해요.' }], 'breathe', 0.25,
                { conclude: '심심함과 불안은 화면 말고도 달랠 수 있어요. 내 마음에 맞는 방법을 골라요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"이번 주에 스마트폰 대신 해 볼 방법 하나를 정해 볼까요?" 출구 1번에서 "스마트폰은 언제나 마음을 달래 준다"를 고른 학생에게 활동 2의 결과 칸을 다시 떠올리게 한다. 2번에서 "버스 시간 찾기는 습관일까요, 필요일까요?"라고 물어 필요한 사용(길 찾기·연락)과 습관 사용을 다시 가른다.',
          exit: [
            { type: 'tool', tool: 'emotion', options: { mode: 'branch', situation: '쉬는 시간, 짝이 자리를 비워 서는 혼자 앉아 있어요. 어색해서 휴대전화를 꺼내고 싶어요.', choices: [
              { id: 'phone', text: '쉬는 시간 내내 폰만 봐요', result: '다른 친구가 말을 걸어도 못 알아채요.', mood: '외로움', why: '어색함을 화면으로 가리면 친구와 멀어질 수 있어요.' },
              { id: 'talk', text: '옆 친구에게 말을 걸어 봐요', result: '새 친구와 이야기가 이어져요.', mood: '기쁨' },
              { id: 'hide', text: '엎드려 시간만 보내요', result: '어색한 마음이 그대로 남아요.', mood: '속상함', why: '작은 시도가 어색함을 풀어 줘요.' }] }, state: { choice: null }, prompt: '어색한 쉬는 시간에 어떻게 할지 골라 보세요.', target: { choice: 'talk' }, difficulty: 0.15 },
            { type: 'choice', prompt: '스마트폰을 꺼내기 전에 스스로 물어볼 말로 알맞은 것은 무엇인가요?', options: ['"지금 왜 꺼내지?"', '"몇 개 더 볼까?"', '"아무도 안 보겠지?"'], answer: 0, difficulty: 0.1, explain: '"왜?"를 물으면 숨은 마음을 알아차릴 수 있어요.' },
            { type: 'short', prompt: '심심할 때 스마트폰 대신 해 볼 일을 한 문장으로 쓰세요.' },
            MOOD,
          ],
        },
        ws: {
          title: '손보다 마음 먼저',
          items: [
            { type: 'table', prompt: '상황에서 숨은 마음과 다른 방법을 쓰세요.', columns: ['상황', '숨은 마음 / 다른 방법'], cells: [['차례를 기다려요', ''], ['처음 간 모임에서 혼자예요', ''], ['어려운 숙제를 펼쳤어요', ''], ['발표 전날 긴장돼요', '']], answer: '심심함-주변 관찰 / 어색함-말 걸기 / 피하고 싶음-작게 나눠 시작 / 불안-숨 고르기 (예시)' },
            { type: 'choice', prompt: '필요해서 쓰는 경우에 ○ 하세요.', options: ['이유 없이 켜요', '버스 시간을 찾아봐요', '방금 본 것을 또 봐요'], answer: '버스 시간을 찾아봐요' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '불안할 때 자꾸 ___할수록 초조함이 커져요.', answer: '확인' },
            { type: 'short', prompt: '이번 주에 스마트폰 대신 해 볼 나만의 방법을 쓰세요.' },
          ],
          easy: {
            note: '"지금 꼭 필요할까?"를 먼저 물어보세요.',
            items: [
              { type: 'choice', prompt: '심심할 때 할 수 있는 다른 방법에 ○ 하세요.', options: ['그림 그리기', '영상만 계속 보기'], answer: '그림 그리기' },
              { type: 'table', prompt: '필요한 사용이면 ○, 습관이면 ×를 쓰세요.', columns: ['사용', '○ / ×'], cells: [['보호자와 통화', ''], ['그냥 켜서 넘기기', ''], ['길 찾기', '']], answer: '○, ×, ○' },
              { type: 'draw', prompt: '스마트폰 없이 즐겁게 기다리는 내 모습을 그려 보세요.' },
              { type: 'short', prompt: '긴장될 때 마음을 가라앉히는 방법을 쓰세요.' },
            ],
          },
        },
        diff: DIFF('카드는 맞는 칸에 놓으면 바로 알려 주고, 갈림길 결과가 처음부터 보여요.', '"연락만 하고 넣어 둬요"처럼 필요한 사용과 습관 사용을 가려내고, 카드 순서가 섞여 나와요.'),
        notes: '자주 보이는 어려움: ① 스마트폰 사용을 모두 나쁜 것으로 여기거나 모두 괜찮다고 여긴다 → 필요한 사용과 마음 때문에 하는 습관 사용을 구별하게 한다. ② 심심함·불안은 없애야 할 감정이라고 여긴다 → 누구나 느끼는 마음이고 다른 방법으로 달랠 수 있음을 짚는다. ③ 불안할 때 계속 확인하면 안심된다고 여긴다 → 확인이 초조함을 키울 수 있음을 말한다. 학생 개인의 사용 시간을 공개하게 하지 않는다. 사이버 중독 예방(g5-cc-saf-cyber) 단원과 연계해 시수 인정 가능(학교 결정).',
      }),

      // ───────────────────────────── 2차시
      LESSON(2, {
        title: '단체 대화방 답장 압박을 다루고 대화 시간 약속 세우기',
        objective: '단체 대화방에서 바로 답해야 한다는 압박과 놓칠까 봐 불안한 마음을 알아차리고, 대화 시간 약속을 차례대로 세울 수 있다.',
        draw: 'a paper phone with many small paper message bubbles floating out, and a paper child calmly placing the phone in a paper basket while a moon rises',
        banner: '답장은 내 속도로', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }],
        intro: {
          teacher: '"단톡방 알림이 100개 쌓였다면 어떤 기분이 드나요?" 두세 명의 대답을 듣고(기다릴 반응: "빨리 읽어야 할 것 같아요", "놓칠까 봐 불안해요") 시연 단추로 대화방 약속이 차례로 놓이는 모습을 보여 준다. "바로 답 안 하면 친구가 싫어해요"가 나오면 "친구가 늦게 답했을 때 나는 그 친구를 싫어했나요?"라고 되묻는다. 오늘은 답장 압박을 다루고 대화 시간 약속을 세운다고 밝힌다.',
          student: '친구가 답장을 늦게 하면 어떤 까닭이 있을 수 있는지 짝과 두 가지 말해 봅시다.',
          demo: { tool: 'story', options: { cards: [{ id: 'mute', text: '공부할 땐 알림을 꺼요', motif: 'star' }, { id: 'reply', text: '쉬는 시간에 답해요', motif: 'sun' }], slots: ['먼저', '다음'], shuffle: false }, sequence: [{ order: ['mute', 'reply'] }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 답장 압박 갈림길에서 내 속도 지키기', minutes: 14, tool: 'emotion',
            teacher: '"이렇게 하면 나와 친구 사이는 어떻게 될까요?" 1번에서 밤늦게까지 답하는 보기를 "의리"로 여기는 학생에게 잠과 다음 날을 떠올리게 한다. 2번은 "읽씹"이 싫어서 바로 답해야 한다는 압박에 대해, 늦는다고 미리 알리는 방법을 짚는다. 3번에서 놓칠까 봐 불안한 마음(대화에서 빠질 것 같은 마음)은 누구나 느끼지만, 중요한 일은 다시 들을 수 있다는 점을 말해 준다.',
            task: '단체 대화방에서 생긴 상황에서 어떻게 할지 고르고, 그 결과를 살펴봐요.',
            levels: LVB,
            items: [
              EB('밤 11시, 반 단톡방이 계속 울려요. 준이는 어떻게 할까요?', '잠자리에 누운 밤 11시, 반 단체 대화방에 새 메시지가 계속 올라와요.', [
                { id: 'stay', text: '끝날 때까지 다 읽고 답해요', result: '새벽에 잠들어 아침에 일어나기 힘들어요.', mood: '걱정', why: '밤늦은 대화는 내일 읽어도 괜찮아요.' },
                { id: 'mute', text: '알림을 끄고 내일 읽어요', result: '푹 자고 아침에 천천히 확인해요.', mood: '편안함' },
                { id: 'peek', text: '자는 척하며 몰래 확인해요', result: '잠을 설치고 마음도 뒤숭숭해요.', mood: '불안', why: '몰래 확인하면 쉬지도 못해요.' }], 'mute', 0.15),
              EB('수학 숙제 중에 친구가 "왜 안 읽어?"라고 보냈어요. 하는 어떻게 할까요?', '하가 수학 숙제를 하는 중에 친구에게서 "왜 안 읽어? 읽씹이야?"라는 메시지가 왔어요.', [
                { id: 'drop', text: '숙제를 멈추고 계속 대화해요', result: '숙제는 밤늦게까지 끝나지 않아요.', mood: '속상함', why: '할 일 중에는 잠깐 미뤄도 괜찮아요.' },
                { id: 'tell', text: '"숙제 끝나고 답할게" 보내요', result: '친구가 알겠다고 하고 숙제를 마쳐요.', mood: '안심' },
                { id: 'angry', text: '"귀찮게 하지 마" 보내요', result: '친구가 서운해서 다툼이 생겨요.', mood: '화남', why: '미리 사정을 알리면 서로 오해가 없어요.' }], 'tell', 0.2),
              EB('가족 여행 중이라 단톡방 대화를 못 봤어요. 도는 어떻게 할까요?', '가족 여행 첫날, 도는 친구들 단톡방에서 재밌는 이야기가 오가는 것 같아 자꾸 신경이 쓰여요.', [
                { id: 'phone', text: '여행 내내 대화방만 봐요', result: '가족과의 시간을 제대로 즐기지 못해요.', mood: '속상함', why: '놓칠까 봐 불안해도 지금 시간이 더 소중해요.' },
                { id: 'enjoy', text: '여행을 즐기고 나중에 물어봐요', result: '여행도 즐기고 친구에게 이야기도 들어요.', mood: '기쁨' },
                { id: 'leave', text: '불안해서 대화방을 나가요', result: '친구들이 무슨 일인지 걱정해요.', mood: '걱정', why: '나가기보다 잠깐 쉬었다 돌아와도 돼요.' }], 'enjoy', 0.25,
                { conclude: '답장은 내 속도로 해도 괜찮아요. 늦을 땐 미리 알리면 돼요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 우리 반 대화방 약속 차례 정하기', minutes: 13, tool: 'story',
            teacher: '"모두가 편한 대화방이 되려면 무엇부터 정해야 할까요?" 1번에서 약속 정하기의 차례(문제 찾기→규칙 제안→함께 정하기→지키기)를 놓으며 까닭을 말하게 한다. 2번은 개인이 지킬 하루 차례다 — 공부·식사 시간에는 알림을 끄는 것이 먼저임을 짚는다. 3번 말풍선은 늦게 답할 때와 친구에게 압박을 주지 않는 말을 고르게 한다.',
            task: '대화방 약속을 정하는 차례와 나의 하루 차례를 놓고, 서로 편한 말을 채워요.',
            levels: LV,
            items: [
              SO('반 단톡방 약속을 함께 정하는 차례를 놓아 보세요.', '대화방 약속 정하기', ['먼저', '다음', '그다음', '마지막'], [{ id: 'r1', text: '불편했던 점을 모아요', motif: 'cloud' }, { id: 'r2', text: '약속 안을 내요', motif: 'leaf' }, { id: 'r3', text: '함께 의논해 정해요', motif: 'house' }, { id: 'r4', text: '공지에 올리고 지켜요', motif: 'star' }], ['r1', 'r2', 'r3', 'r4'], 0.15),
              SO('저녁 시간 대화방을 쓰는 차례를 놓아 보세요.', '나의 저녁', ['먼저', '다음', '마지막'], [{ id: 'e1', text: '숙제 땐 알림을 꺼요', motif: 'tree' }, { id: 'e2', text: '쉬는 시간에 몰아 읽어요', motif: 'sun' }, { id: 'e3', text: '잠들기 전 폰을 둬요', motif: 'flower' }], ['e1', 'e2', 'e3'], 0.2),
              SF('서로 편한 대화방이 되도록 말풍선을 채워 보세요.', [{ id: 'b1', who: '하', motif: 'sun', label: '지금 숙제 중이야, ___.' }, { id: 'b2', who: '준', motif: 'leaf', label: '___, 편할 때 답해.' }], ['끝나고 답할게', '천천히 봐도 돼', '왜 안 읽어?', '빨리 답해'], { b1: '끝나고 답할게', b2: '천천히 봐도 돼' }, 0.25,
                { conclude: '대화방 약속은 함께 정하고, 서로의 속도를 존중하는 말로 지켜요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 정한 대화방 약속 가운데 내가 먼저 지킬 것은 무엇인가요?" 출구 1번에서 "늦은 밤 대화는 괜찮다"를 고른 학생에게 활동 1의 결과를 다시 짚는다. 2번에서 "읽고도 아무 답을 안 해요"를 고른 학생에게 "끝나고 답할게" 한마디가 친구의 걱정을 덜어 준다고 말해 준다.',
          exit: [
            { type: 'tool', tool: 'mindmap', options: { topic: '대화방 말', slots: ['압박하는 말', '존중하는 말'], cards: ['왜 답 안 해?', '바쁘면 나중에 봐', '1분 안에 답해', '천천히 생각해 봐'] }, state: { at: {} }, prompt: '대화방 말을 압박하는 말과 존중하는 말로 나누어 보세요.',
              target: { sort: { '압박하는 말': ['왜 답 안 해?', '1분 안에 답해'], '존중하는 말': ['바쁘면 나중에 봐', '천천히 생각해 봐'] } }, difficulty: 0.2 },
            { type: 'choice', prompt: '숙제 중에 메시지가 왔을 때 알맞은 행동은 무엇인가요?', options: ['숙제를 멈추고 바로 대화해요', '"끝나고 답할게"라고 알려요', '읽고도 아무 답을 안 해요'], answer: 1, difficulty: 0.1, explain: '늦을 때는 미리 알리면 서로 오해가 없어요.' },
            { type: 'short', prompt: '우리 반 대화방에 넣고 싶은 약속을 한 문장으로 쓰세요.' },
            MOOD,
          ],
        },
        ws: {
          title: '답장은 내 속도로',
          items: [
            { type: 'table', prompt: '상황에 알맞은 행동을 쓰세요.', columns: ['상황', '알맞은 행동'], cells: [['밤 11시에 알림이 계속 울려요', ''], ['숙제 중에 "왜 안 읽어?"', ''], ['가족 여행 중 대화가 궁금해요', ''], ['친구 답장이 늦어요', '']], answer: '알림 끄고 내일 읽기 / "끝나고 답할게" 알리기 / 여행 즐기고 나중에 묻기 / 기다리며 재촉하지 않기' },
            { type: 'choice', prompt: '존중하는 대화방 말에 ○ 하세요.', options: ['"빨리 답해"', '"편할 때 답해"', '"읽씹이야?"'], answer: '"편할 때 답해"' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '답장이 늦을 때는 미리 ___면 오해가 없어요.', answer: '알리' },
            { type: 'short', prompt: '놓칠까 봐 불안할 때 나를 안심시킬 말을 쓰세요.' },
          ],
          easy: {
            note: '"지금 꼭 답해야 할까?"를 생각해 보세요.',
            items: [
              { type: 'choice', prompt: '잠자기 전 알맞은 행동에 ○ 하세요.', options: ['알림을 끄고 자요', '끝까지 다 읽어요'], answer: '알림을 끄고 자요' },
              { type: 'table', prompt: '존중하는 말이면 ○, 압박하는 말이면 ×를 쓰세요.', columns: ['말', '○ / ×'], cells: [['천천히 봐도 돼', ''], ['왜 답 안 해?', ''], ['끝나고 답할게', '']], answer: '○, ×, ○' },
              { type: 'draw', prompt: '휴대전화를 내려놓고 쉬는 모습을 그려 보세요.' },
              { type: 'short', prompt: '숙제할 때 지킬 대화방 약속을 쓰세요.' },
            ],
          },
        },
        diff: DIFF('갈림길 결과가 처음부터 보이고, 순서 카드는 놓을 때마다 맞는지 알려 줘요.', '"대화방을 나가요"처럼 해결처럼 보이는 보기를 가려내고, 카드 순서가 섞여 나와요.'),
        notes: '자주 보이는 어려움: ① 바로 답하지 않으면 우정이 깨진다고 여긴다 → 늦을 때 미리 알리는 방법과 친구도 사정이 있다는 점을 짚는다. ② 놓칠까 봐 불안한 마음을 부끄럽게 여긴다 → 누구나 느끼는 마음이며 중요한 일은 다시 들을 수 있다고 말한다. ③ 대화방 약속을 한 사람이 정해 통보한다 → 함께 의논해 정하는 차례를 강조한다. 실제 학급 대화방 내용을 화면에 띄우거나 읽지 않는다. 사이버 중독 예방(g5-cc-saf-cyber) 단원과 연계해 시수 인정 가능(학교 결정).',
      }),
    ],
  });
})();
