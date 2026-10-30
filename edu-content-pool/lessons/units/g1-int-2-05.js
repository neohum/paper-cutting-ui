/* 1학년 2학기 통합교과 5. 하루 — 48차시
 * 1~4차시 하루 동안 지키는 몸 습관(손 씻기·바르게 앉기·잠자리 시간) → 5~8차시 오늘 나를 칭찬할 일 찾기
 * 9~20차시 하루의 흐름(아침·낮·저녁, 되풀이되는 일) → 마음에 남는 때 → 한 주를 돌아보고 내일 할 일 정하기
 * 21~28차시 건강에 좋은 일·해로운 일, 길 안전 → 한 주 지킨 습관 세어 돌아보기
 * 29~40차시 학교의 하루(아침 등교·쉬는 시간·급식·정리) → 붙임 딱지로 돌아보기
 * 41~48차시 내가 좋아하는 것·잘하는 것, 나를 아끼는 말 → 단원 정리
 * 성취기준: units-map 단원 목록이 비어 있고 미확인(standardsVerified:false)이라 모든 차시 standards: [] (지어내지 않는다).
 * 이야기·예문은 모두 직접 지었다. 학생 이름은 가명(민지·준호·하준·서아·도윤)만 쓴다.
 */
(function () {
  var UNIT = 'g1-통합교과-2학기-5';
  var TITLE = '5. 하루';
  var HEAD = 'Layered paper-cut illustration of ';
  var TAIL = ', with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.';
  function two(n) { return (n < 10 ? '0' : '') + n; }
  // 차시 머리(같은 칸)를 채운다 — 차시마다 다른 내용은 x에 그대로 적는다
  function L(n, x) {
    var out = {
      id: 'g1-int-2-05-' + two(n), schema: 'edu-lesson.v1', catalog: { unit: UNIT, lesson: n },
      grade: 1, subject: '통합교과', unitTitle: TITLE, title: x.title, objective: x.objective,
      standards: [], minutes: 40, formats: ['chromebook', 'projector', 'print'],
    };
    for (var k in x) if (!(k in out)) out[k] = x[k];
    return out;
  }
  // 그림: prompt 틀 + 벡터 장면(배경 + 차시 모티프 + 한 줄 글). night면 해 대신 달
  function ART(what, text, more, night) {
    return {
      prompt: HEAD + what + TAIL,
      scene: { viewBox: [480, 270], layers: [
        night ? { motif: 'moon', x: 410, y: 56, s: 0.8 } : { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 110, y: 52 }, { motif: 'hills', y: 204 },
      ].concat(more || []).concat([{ motif: 'text', x: 240, y: 140, text: text, size: 22 }]) },
    };
  }
  var MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };
  // 카드 판 교구 단계: 쉬움은 맞는 칸에 초록 테두리·틀린 칸은 바로 되돌림, 도전은 문항마다 함정 카드나 조건을 더한다
  var CARD_LV = { easy: { live: true, instant: true }, base: {}, challenge: {} };
  // 점검표(kitchen checklist)·마음(emotion scale·branch)처럼 칸이 없는 교구 단계: 쉬움은 문항마다 항목 수를 줄이고, 도전은 함정 항목을 더한다
  var PLAIN_LV = { easy: {}, base: {}, challenge: {} };

  var lessons = [];

  // ───────────────────────── 1~4차시: 하루 동안 지키는 몸 습관(안전한 신체 활동과 습관 실천) ─────────────────────────

  lessons.push(L(1, {
    title: '하루 동안 손을 씻어야 할 때 찾기',
    objective: '하루 가운데 손을 꼭 씻어야 할 때를 고르고, 손 씻는 차례를 바르게 놓을 수 있다.',
    illustration: ART('a paper child washing hands with soap bubbles at a small sink, with a sun, a lunch box and a playground ball around to show the times of a day', '손은 언제 씻을까요?', [
      { motif: 'house', x: 110, y: 214 }, { motif: 'tree', x: 370, y: 214 }, { motif: 'flower', x: 250, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 7,
        teacher: '"이번 단원 이름은 \'하루\'예요. 아침에 눈을 떠서 밤에 잠들 때까지 우리는 무엇을 할까요?" 두세 명의 대답을 듣고 시연 단추로 아침·낮·밤 그림이 차례대로 놓이는 모습을 보여 준다. 이어서 "오늘 아침부터 지금까지 내 손이 만진 것을 세 가지 말해 볼까요?" 하고 묻는다. 문고리, 공, 연필처럼 여러 가지가 나오면 "손이 깨끗해 보이면 안 씻어도 될까요?"를 던지고 대답은 활동 뒤로 미룬다.',
        student: '오늘 아침부터 지금까지 내 손이 만진 것을 세 가지 말해 봐요.',
        demo: { tool: 'story', options: { cards: [{ id: 'wake', text: '아침에 일어나요', motif: 'sun' }, { id: 'play', text: '낮에 친구와 놀아요', motif: 'tree' }, { id: 'sleep', text: '밤에 잠을 자요', motif: 'moon' }], slots: ['아침', '낮', '밤'], shuffle: false }, sequence: [{ order: ['wake', 'play', 'sleep'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 손을 꼭 씻어야 할 때 고르기', minutes: 12, tool: 'mindmap',
            teacher: '"이 일을 하기 전이나 한 뒤에 손을 씻지 않으면 손에 있던 것이 어디로 갈까요?" 카드를 하나씩 소리 내어 읽고 손으로 입·코를 만지는 흉내를 내 보게 한다. "손이 깨끗해 보이는데요?"라고 말하는 학생에게 "세균은 너무 작아서 눈으로 볼 수 없어요. 깨끗해 보여도 밥 먹기 전에는 씻어요"라고 짚는다(손은 더러워 보일 때만 씻으면 된다는 생각).',
            task: '하루 동안 일어나는 일 카드를 읽고, 손을 꼭 씻어야 할 때만 바구니에 넣어요.',
            levels: CARD_LV,
            items: [
              { prompt: '손을 꼭 씻어야 할 때만 골라 보세요.', toolOptions: { mode: 'pick', basket: '손을 꼭 씻어요', cards: ['밥을 먹기 전', '화장실에 다녀온 뒤', '노래를 부르기 전', '그림책을 볼 때'] },
                target: { pick: ['밥을 먹기 전', '화장실에 다녀온 뒤'] }, difficulty: 0.05,
                levels: { challenge: { toolOptions: { cards: ['밥을 먹기 전', '화장실에 다녀온 뒤', '노래를 부르기 전', '그림책을 볼 때', '창밖을 볼 때'] } } } },
              { prompt: '밖에서 돌아왔을 때예요. 손을 꼭 씻어야 할 때만 골라 보세요.', toolOptions: { mode: 'pick', basket: '손을 꼭 씻어요', cards: ['운동장에서 놀고 들어온 뒤', '코를 푼 뒤', '자리에 앉아 쉴 때', '친구와 이야기할 때'] },
                target: { pick: ['운동장에서 놀고 들어온 뒤', '코를 푼 뒤'] }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['운동장에서 놀고 들어온 뒤', '코를 푼 뒤', '자리에 앉아 쉴 때', '친구와 이야기할 때', '하늘을 올려다볼 때'] } } } },
              { prompt: '손이 깨끗해 보여도 씻어야 할 때가 있어요. 손을 꼭 씻어야 할 때만 골라 보세요.', toolOptions: { mode: 'pick', basket: '손을 꼭 씻어요', cards: ['강아지를 쓰다듬은 뒤', '손이 깨끗해 보이는 점심 전', '줄넘기를 하기 전', '텔레비전을 볼 때'] },
                target: { pick: ['강아지를 쓰다듬은 뒤', '손이 깨끗해 보이는 점심 전'] }, difficulty: 0.2,
                predict: { q: '손이 깨끗해 보이면 밥 먹기 전에 안 씻어도 될까요?', options: ['안 씻어도 돼요', '그래도 씻어요'], answer: 1 },
                conclude: '손에 붙은 세균은 눈에 보이지 않아서, 깨끗해 보여도 밥 먹기 전에는 씻어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 손 씻는 차례 익히고 직접 씻기', minutes: 14, tool: 'kitchen',
            teacher: '"비누 없이 물로만 헹구면 손에 붙은 것이 잘 떨어질까요?" 카드를 차례대로 놓은 뒤 빈손으로 손바닥·손등·손톱 밑을 문지르는 흉내를 함께 낸다. 문지르는 동안 "생일 축하 노래를 두 번 부를 만큼" 오래 문지른다고 알려 준다. 그다음 모둠별로 차례를 정해 교실 세면대(또는 가까운 화장실)에서 실제로 비누로 씻고 오게 한다. 기다리는 모둠은 자리에서 빈손 연습을 한다.',
            task: '손 씻는 차례를 놓고 문지를 곳을 표시한 뒤, 모둠 차례가 되면 세면대에서 비누로 손을 씻고 와요.',
            levels: CARD_LV,
            items: [
              { prompt: '손 씻는 차례대로 카드를 놓아 보세요.', toolOptions: { mode: 'order', cards: ['손에 물을 묻혀요', '비누로 거품을 내요', '물로 헹궈요', '수건으로 닦아요'] },
                target: { order: ['손에 물을 묻혀요', '비누로 거품을 내요', '물로 헹궈요', '수건으로 닦아요'] }, difficulty: 0.1,
                levels: {
                  easy: { prompt: '손 씻는 차례대로 카드 세 장을 놓아 보세요.', toolOptions: { cards: ['손에 물을 묻혀요', '비누로 거품을 내요', '물로 헹궈요'] }, target: { order: ['손에 물을 묻혀요', '비누로 거품을 내요', '물로 헹궈요'] } },
                  challenge: { prompt: '손 씻는 차례대로 카드 다섯 장을 놓아 보세요.', toolOptions: { cards: ['손에 물을 묻혀요', '비누로 거품을 내요', '거품으로 구석구석 문질러요', '물로 헹궈요', '수건으로 닦아요'] }, target: { order: ['손에 물을 묻혀요', '비누로 거품을 내요', '거품으로 구석구석 문질러요', '물로 헹궈요', '수건으로 닦아요'] } },
                } },
              { prompt: '거품으로 문지를 곳만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '구석구석 문질러요', items: [{ id: 'palm', text: '손바닥' }, { id: 'back', text: '손등' }, { id: 'thumb', text: '엄지손가락' }, { id: 'nail', text: '손톱 밑' }, { id: 'knee', text: '무릎' }] },
                target: { checklist: ['palm', 'back', 'thumb', 'nail'] }, difficulty: 0.1,
                levels: {
                  easy: { prompt: '거품으로 문지를 곳만 표시해 보세요. 세 가지 가운데 두 가지예요.', toolOptions: { items: [{ id: 'palm', text: '손바닥' }, { id: 'back', text: '손등' }, { id: 'knee', text: '무릎' }] }, target: { checklist: ['palm', 'back'] } },
                  challenge: { toolOptions: { items: [{ id: 'palm', text: '손바닥' }, { id: 'back', text: '손등' }, { id: 'thumb', text: '엄지손가락' }, { id: 'nail', text: '손톱 밑' }, { id: 'knee', text: '무릎' }, { id: 'hair', text: '머리카락' }] } },
                } },
              { prompt: '모둠 차례가 되면 세면대에서 비누로 손을 씻고 와서 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"오늘 손을 씻으니 손에서 어떤 냄새가 났나요?" 두세 명의 느낌을 듣는다. 출구 질문을 마친 뒤 "오늘 집에 가서 손을 씻을 때마다 손가락을 하나씩 접어 세어 보고, 내일 몇 번이었는지 알려 줘요"라고 숙제를 낸다. 1번에서 만화 보기까지 표시한 학생은 "만화를 보기 전과 본 뒤에 손이 무엇을 만졌을까요?"를 다시 묻는다.',
        exitTicket: [
          { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '집에서 손 씻기', items: [{ id: 'out', text: '놀이터에서 돌아왔을 때' }, { id: 'cough', text: '손으로 입을 막고 기침한 뒤' }, { id: 'tv', text: '만화를 볼 때' }] }, prompt: '집에서 손을 꼭 씻어야 할 때만 표시해 보세요.', target: { checklist: ['out', 'cough'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '손에 붙은 세균은 눈에 보일까요?', options: ['잘 보여요', '너무 작아서 보이지 않아요'], answer: 1, difficulty: 0.1, explain: '세균은 아주 작아서, 깨끗해 보이는 손에도 붙어 있을 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '손은 언제 씻을까요',
      items: [
        { type: 'figure', wide: true, prompt: '손 씻는 차례대로 1, 2, 3, 4를 쓰세요.', tool: 'kitchen', figures: [{ options: { mode: 'order', cards: ['물로 헹궈요', '손에 물을 묻혀요', '수건으로 닦아요', '비누로 거품을 내요'], shuffle: false }, caption: '' }], answer: '물 묻히기 → 거품 내기 → 헹구기 → 닦기' },
        { type: 'check', prompt: '손을 꼭 씻어야 할 때에 모두 ✓ 하세요.', options: ['밥을 먹기 전', '화장실에 다녀온 뒤', '그림책을 볼 때', '코를 푼 뒤'] },
        { type: 'table', prompt: '오늘 손을 씻은 때를 써 보세요.', columns: ['언제', '씻었어요(○)'], rows: 3 },
        { type: 'draw', prompt: '비누로 손을 씻는 내 모습을 그려 보세요.' },
      ],
      easy: {
        note: '밥 먹기 전, 화장실 다녀온 뒤, 밖에서 놀고 온 뒤!',
        items: [
          { type: 'choice', prompt: '손을 꼭 씻어야 할 때에 ○ 하세요.', options: ['밥을 먹기 전', '노래를 부를 때'], answer: '밥을 먹기 전' },
          { type: 'choice', prompt: '손을 씻을 때 함께 쓰는 것에 ○ 하세요.', options: ['비누', '크레파스'], answer: '비누' },
          { type: 'draw', prompt: '손을 씻는 내 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 카드에 초록 테두리가 생기고, 틀린 카드는 바로 돌아와요. 손 씻는 차례는 세 장, 문지를 곳은 세 가지예요.',
      base: '카드 네 장을 모두 놓은 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '손을 씻을 때와 상관없는 함정 카드가 하나 더 있고, 차례 카드가 다섯 장이에요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 손이 더러워 보일 때만 씻으면 된다고 여긴다(이 차시의 핵심 오개념) → 세균은 눈에 보이지 않는다는 것을 되풀이한다. ② 물로만 헹구고 끝낸다 → 비누 거품을 낸 뒤 문지르는 시간을 노래 두 번으로 정해 준다. ③ 세면대에서 장난친다 → 모둠별로 4~5명씩만 보내고, 기다리는 모둠은 자리에서 빈손 연습을 한다. 숙제(집에서 씻은 횟수 세기)는 4차시 지킴표로 이어진다.',
  }));

  lessons.push(L(2, {
    title: '바르게 앉는 자세를 몸으로 익히기',
    objective: '바르게 앉을 때 살펴야 할 몸의 곳을 고르고, 의자에 바르게 앉아 짝과 서로 점검할 수 있다.',
    illustration: ART('a paper child sitting upright on a small chair at a desk with a straight back and both feet on the floor, a crooked chair shadow behind for contrast', '바르게 앉아요', [
      { motif: 'house', x: 110, y: 214, color: 'sky' }, { motif: 'tree', x: 380, y: 214 }, { motif: 'leaf', x: 250, y: 226 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"어제 집에서 손을 몇 번 씻었나요?" 손가락으로 세어 온 수를 두세 명에게 듣고 칭찬한다. 이어서 "우리는 하루에 몇 시간이나 의자에 앉아 있을까요?" 하고 묻는다. 모두 일부러 등을 구부리고 고개를 숙여 30초 동안 앉아 보게 한 뒤 "어디가 불편했나요?"를 묻는다. 시연 단추로 종이 몸에서 등을 곧게 세우는 곳이 골라지는 모습을 보여 준다.',
        student: '등을 구부리고 앉아 보고, 몸의 어디가 불편한지 말해 봐요.',
        demo: { tool: 'body', options: { mode: 'parts', parts: ['목', '어깨', '허리', '무릎', '발목'], names: true }, sequence: [{ parts: ['허리'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 바르게 앉을 때 살필 몸의 곳 찾기', minutes: 13, tool: 'body',
            teacher: '"내 몸을 손으로 짚어 보세요. 의자 등받이에 닿는 곳은 어디인가요?" 학생이 자기 몸을 짚은 다음 종이 몸에서 고르게 한다. 고개를 숙였다 들었다 하며 "지금 움직이는 곳의 이름은?"을 묻는다. 마지막 문항은 그림을 보고 고르는 것이라 몸을 누르지 않아도 된다고 알려 준다. 문항을 마친 뒤 짝끼리 실제로 바르게 앉고 서로 살펴 준다.',
            task: '내 몸을 손으로 짚어 본 뒤 종이 몸에서 그곳을 눌러 골라요. 다 하면 짝과 바르게 앉아 서로 살펴요.',
            levels: {
              easy: { parts: ['목', '어깨', '허리', '무릎', '발목'], names: true },
              base: { parts: ['눈', '목', '어깨', '손목', '허리', '무릎', '발목'] },
              challenge: {},
            },
            items: [
              { prompt: '바르게 앉을 때 의자 등받이에 붙여 곧게 펴는 곳을 골라 보세요.', toolOptions: { mode: 'parts' }, target: { parts: ['허리'] }, difficulty: 0.1 },
              { prompt: '고개를 숙였다 들 때 움직이는 곳을 골라 보세요. 바르게 앉으면 이곳을 곧게 세워요.', toolOptions: { mode: 'parts' }, target: { parts: ['목'] }, difficulty: 0.15 },
              { prompt: '그림을 보고 고르세요. 바르게 앉을 때 두 발은 어디에 둘까요?', toolOptions: { mode: 'parts', readOnly: true, ask: { q: '두 발은 어디에 둘까요?', choices: ['바닥에 붙여요', '의자 위에 올려요', '앞으로 쭉 뻗어요'], why: [null, '의자 위에 발을 올리면 몸이 기울어요.', '발을 뻗으면 엉덩이가 앞으로 미끄러져요.'] } }, target: { pick: 0 }, hints: ['의자에 앉은 내 발이 지금 어디에 있는지 내려다봐요.', '발을 올리거나 뻗으면 몸이 기울거나 미끄러져요.', '두 발은 바닥에 붙여요.'], difficulty: 0.1 },
              { prompt: '짝과 바르게 앉아 서로 허리와 발을 살펴 준 뒤 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 바른 자세 점검표 만들기', minutes: 13, tool: 'kitchen',
            teacher: '"다리를 꼬고 앉으면 처음에는 편한데, 오래 앉으면 어떻게 될까요?" 학생에게 다리를 꼬고 1분 앉아 보게 한 뒤 느낌을 묻는다. 글씨 쓰기 문항에서는 공책과 눈 사이를 한 뼘 띄워 보게 한다. "선생님이 볼 때만 바르게 앉으면 될까요?"라고 물어, 자세는 앉아 있는 동안 늘 지키는 습관이라는 것을 짚는다.',
            task: '바른 자세 점검표에서 알맞은 모습만 표시해요.',
            levels: PLAIN_LV,
            items: [
              { prompt: '바르게 앉은 모습만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '바르게 앉기', items: [{ id: 'back', text: '등을 등받이에 붙여요' }, { id: 'feet', text: '두 발을 바닥에 붙여요' }, { id: 'cross', text: '다리를 꼬아요' }, { id: 'chin', text: '턱을 괴어요' }] },
                target: { checklist: ['back', 'feet'] }, difficulty: 0.1,
                levels: {
                  easy: { toolOptions: { items: [{ id: 'back', text: '등을 등받이에 붙여요' }, { id: 'feet', text: '두 발을 바닥에 붙여요' }, { id: 'cross', text: '다리를 꼬아요' }] } },
                  challenge: { toolOptions: { items: [{ id: 'back', text: '등을 등받이에 붙여요' }, { id: 'feet', text: '두 발을 바닥에 붙여요' }, { id: 'cross', text: '다리를 꼬아요' }, { id: 'chin', text: '턱을 괴어요' }, { id: 'lean', text: '의자를 뒤로 젖혀요' }] } },
                } },
              { prompt: '글씨를 쓸 때 바른 모습만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '바르게 쓰기', items: [{ id: 'hold', text: '다른 손으로 공책을 잡아요' }, { id: 'near', text: '눈을 공책에 바짝 대요' }, { id: 'gap', text: '눈과 공책 사이를 한 뼘 띄워요' }, { id: 'lie', text: '책상에 엎드려 써요' }] },
                target: { checklist: ['hold', 'gap'] }, difficulty: 0.15,
                levels: {
                  easy: { toolOptions: { items: [{ id: 'hold', text: '다른 손으로 공책을 잡아요' }, { id: 'gap', text: '눈과 공책 사이를 한 뼘 띄워요' }, { id: 'lie', text: '책상에 엎드려 써요' }] } },
                  challenge: { toolOptions: { items: [{ id: 'hold', text: '다른 손으로 공책을 잡아요' }, { id: 'near', text: '눈을 공책에 바짝 대요' }, { id: 'gap', text: '눈과 공책 사이를 한 뼘 띄워요' }, { id: 'lie', text: '책상에 엎드려 써요' }, { id: 'tilt', text: '고개를 옆으로 꺾어요' }] } },
                } },
              { prompt: '오래 앉아 있다가 쉬는 시간이 되었어요. 몸을 위해 할 일만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '쉬는 시간에', items: [{ id: 'stretch', text: '일어나서 기지개를 켜요' }, { id: 'walk', text: '복도를 천천히 걸어요' }, { id: 'stay', text: '계속 엎드려 있어요' }, { id: 'run', text: '복도를 뛰어다녀요' }] },
                target: { checklist: ['stretch', 'walk'] }, difficulty: 0.15,
                levels: {
                  easy: { toolOptions: { items: [{ id: 'stretch', text: '일어나서 기지개를 켜요' }, { id: 'walk', text: '복도를 천천히 걸어요' }, { id: 'stay', text: '계속 엎드려 있어요' }] } },
                  challenge: { toolOptions: { items: [{ id: 'stretch', text: '일어나서 기지개를 켜요' }, { id: 'walk', text: '복도를 천천히 걸어요' }, { id: 'stay', text: '계속 엎드려 있어요' }, { id: 'run', text: '복도를 뛰어다녀요' }, { id: 'jump', text: '책상 위로 올라가요' }] } },
                } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"지금 내 자세를 점검표로 살펴볼까요?" 모두 활동지 점검표를 보며 스스로 자세를 고친다. 짝이 서로 "허리가 곧아요", "발이 바닥에 있어요"처럼 본 것을 말해 주게 한다. 출구 2번에서 "검사받을 때만"을 고른 학생에게는 바르게 앉기를 하루 가운데 언제 했는지 떠올리게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'body', options: { mode: 'parts', parts: ['눈', '귀', '목', '허리', '무릎'] }, prompt: '텔레비전 바로 앞에 붙어 앉아 오래 보면 힘든 곳을 골라 보세요.', target: { parts: ['눈'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '바르게 앉기는 언제 하면 좋을까요?', options: ['선생님이 볼 때만', '앉아 있는 동안 늘'], answer: 1, difficulty: 0.1, explain: '바른 자세는 누가 보든 안 보든 앉아 있는 동안 지키는 습관이에요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '바르게 앉아요',
      items: [
        { type: 'figure', prompt: '바르게 앉을 때 등받이에 붙여 곧게 펴는 곳에 ○ 하세요.', tool: 'body', figures: [{ options: { mode: 'parts', parts: ['목', '어깨', '허리', '무릎', '발목'] }, caption: '' }], answer: '허리' },
        { type: 'check', prompt: '바르게 앉은 모습에 모두 ✓ 하세요.', options: ['등을 등받이에 붙여요', '다리를 꼬아요', '두 발을 바닥에 붙여요', '턱을 괴어요'] },
        { type: 'choice', prompt: '글씨를 쓸 때 눈과 공책 사이는 얼마나 띄울까요?', options: ['바짝 붙여요', '한 뼘쯤 띄워요', '팔 길이만큼 멀리 해요'], answer: '한 뼘쯤 띄워요' },
        { type: 'draw', prompt: '의자에 바르게 앉은 내 모습을 그려 보세요.' },
      ],
      easy: {
        note: '등은 곧게, 발은 바닥에!',
        items: [
          { type: 'choice', prompt: '바르게 앉은 모습에 ○ 하세요.', options: ['등을 곧게 펴요', '턱을 괴어요'], answer: '등을 곧게 펴요' },
          { type: 'choice', prompt: '두 발은 어디에 둘까요?', options: ['바닥에 붙여요', '의자 위에 올려요'], answer: '바닥에 붙여요' },
          { type: 'draw', prompt: '바르게 앉은 내 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '고를 수 있는 몸의 곳이 다섯 군데이고, 누르면 이름이 보여요. 점검표 항목이 세 개예요.',
      base: '몸의 곳 일곱 군데에서 골라요. 점검표 항목이 네 개예요.',
      challenge: '몸의 곳 열세 군데에서 골라요. 점검표에 함정 항목이 하나 더 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 바른 자세를 선생님이 볼 때만 한다 → "앉아 있는 동안 늘"을 되풀이하고, 수업 중 한 번씩 "자세 점검!" 신호를 정해 둔다. ② 허리와 배를 헷갈린다 → 등 쪽 허리를 손으로 짚게 한다. ③ 다리를 꼬는 것이 편하다고 말한다 → 오래 앉으면 몸이 한쪽으로 기운다는 것을 1분 체험으로 느끼게 한다. 키에 맞지 않는 의자는 발판이나 의자 높이를 함께 맞춘다.',
  }));

  lessons.push(L(3, {
    title: '잠자리 시간 정하고 잠잘 준비하기',
    objective: '잠자리에 들 시간을 스스로 정하고, 잠자기 전에 할 일을 차례대로 놓을 수 있다.',
    illustration: ART('a paper bedroom at night with a child in pajamas brushing teeth, a small bed with a blanket and a window showing the moon and stars', '잘 시간이에요', [
      { motif: 'house', x: 120, y: 214, color: 'lavender' }, { motif: 'star', x: 300, y: 70, s: 0.5 }, { motif: 'star', x: 200, y: 92, s: 0.4 }], true),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"어젯밤 늦게 잔 날, 아침에 일어날 때 몸이 어땠나요?" 두세 명의 경험을 듣는다. "몸은 잠을 자는 동안 쑥쑥 자라고 힘을 다시 모아요"라고 말해 준다. 시연 단추로 잠자기 전 할 일이 차례대로 놓이는 모습을 보여 준다. "오늘은 내가 잠자리에 들 시간을 스스로 정해 볼 거예요"라고 예고한다.',
        student: '늦게 잔 다음 날 아침에 몸이 어땠는지 말해 봐요.',
        demo: { tool: 'kitchen', options: { mode: 'order', cards: ['잠옷을 입어요', '이불을 덮고 누워요'], shuffle: false }, sequence: [{ order: ['잠옷을 입어요', '이불을 덮고 누워요'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 잠자기 전에 할 일 차례 짓기', minutes: 13, tool: 'kitchen',
            teacher: '"불을 먼저 끄면 이를 닦을 수 있을까요?" 차례가 바뀌면 생기는 일을 묻는다. 이 닦기와 잠옷 입기처럼 어느 것을 먼저 해도 되는 일은 앞뒤 자리 어디에 놓아도 맞다고 알려 준다. 활동 뒤에 "내가 집에서 잠자기 전에 하는 일은 무엇인가요?"를 짝과 나누게 한다.',
            task: '잠자기 전에 할 일 카드를 먼저 할 일부터 차례대로 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '잠자기 전에 할 일을 차례대로 놓아 보세요. 앞의 두 일은 어느 것을 먼저 해도 돼요.', toolOptions: { mode: 'order', cards: ['이를 닦아요', '잠옷으로 갈아입어요', '불을 끄고 누워요'] },
                target: { order: [['이를 닦아요', '잠옷으로 갈아입어요'], '불을 끄고 누워요'] }, hints: ['잠들기 바로 전에 하는 일을 먼저 찾아 맨 끝에 놓아요.', '불을 끈 뒤에도 할 수 있는 일인지 카드마다 따져 봐요.', '이 닦기와 잠옷 입기는 앞의 두 칸에 아무 차례로, 불 끄고 눕기는 맨 끝이에요.'], difficulty: 0.1,
                levels: { challenge: { prompt: '잠자기 전에 할 일을 차례대로 놓아 보세요. 잠자기와 상관없는 카드는 남겨요.', toolOptions: { cards: ['이를 닦아요', '잠옷으로 갈아입어요', '불을 끄고 누워요', '줄넘기를 해요'], slots: 3 } } } },
              { prompt: '내일 아침이 바빠지지 않게 잠자기 전에 할 일을 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['알림장을 보며 준비물을 찾아요', '준비물을 가방에 넣어요', '가방을 현관에 두어요'] },
                target: { order: ['알림장을 보며 준비물을 찾아요', '준비물을 가방에 넣어요', '가방을 현관에 두어요'] }, hints: ['무엇을 챙길지 알아야 가방에 넣을 수 있어요. 맨 처음 할 일을 찾아요.', '흔들리는 카드 앞에 꼭 먼저 해야 할 일이 있는지 생각해요. 가방 챙기기와 상관없는 카드는 남겨요.', '알림장 보기 → 가방에 넣기 → 현관에 두기 차례예요.'], difficulty: 0.15,
                levels: { challenge: { prompt: '잠자기 전에 가방을 챙기는 차례대로 놓아 보세요. 상관없는 카드는 남겨요.', toolOptions: { cards: ['알림장을 보며 준비물을 찾아요', '준비물을 가방에 넣어요', '가방을 현관에 두어요', '과자를 먹어요'], slots: 3, autoMotif: false } } } },
              { prompt: '잠자리 시간과 그때 할 일을 이어 보세요.', toolOptions: { mode: 'match', slots: [{ id: 's1', label: '저녁 8시' }, { id: 's2', label: '저녁 8시 30분' }, { id: 's3', label: '저녁 9시' }], cards: ['씻고 잠옷을 입어요', '그림책을 한 권 읽어요', '불을 끄고 잠들어요'] },
                target: { match: { s1: '씻고 잠옷을 입어요', s2: '그림책을 한 권 읽어요', s3: '불을 끄고 잠들어요' } }, difficulty: 0.2,
                hints: ['시간이 빠른 것부터 읽고, 잠들기 바로 전에 하는 일은 맨 늦은 시간에 놓아요.', '불을 끈 뒤에는 그림책을 읽을 수 없어요. 읽는 일은 끄기 전이에요.', '8시 씻기 → 8시 30분 그림책 → 9시 잠들기예요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 잠자리 시간을 지키는 마음', minutes: 13, tool: 'emotion',
            teacher: '"만화가 아직 끝나지 않았는데 잘 시간이 되었어요. 서아는 어떻게 하면 좋을까요?" 보기를 하나씩 읽고 그렇게 했을 때 내일 아침이 어떨지 떠올리게 한다. 마음 크기 문항은 정답이 하나가 아니라 범위라고 알려 준다. 활동을 마치면 활동지에 내가 잠자리에 들 시간을 쓰고, 오늘부터 사흘 동안 지켜 보자고 약속한다.',
            task: '이야기를 읽고 잠자리 시간을 지키는 방법과 그때의 마음을 골라요.',
            levels: { easy: { steps: 3 }, base: {}, challenge: {} },
            items: [
              { prompt: '만화가 끝나지 않았는데 잘 시간이 되었어요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '서아', situation: '서아가 만화를 보는데 잘 시간이 되었어요.', choices: [
                { id: 'more', text: '끝까지 다 보고 늦게 자요', result: '다음 날 아침에 일어나기 힘들었어요.', mood: '속상함', why: '늦게 자면 다음 날 아침이 어떨지 떠올려 봐요.' },
                { id: 'stop', text: '내일 보기로 하고 텔레비전을 꺼요', result: '푹 자고 아침에 상쾌하게 일어났어요.', mood: '편안함' },
                { id: 'hide', text: '이불 속에서 몰래 휴대폰으로 봐요', result: '눈이 아프고 잠이 오지 않았어요.', mood: '걱정', why: '잘 시간에 화면을 보면 잠이 쉽게 오지 않아요.' }] }, target: { choice: 'stop' }, difficulty: 0.1,
                levels: { easy: { toolOptions: { choices: [
                  { id: 'more', text: '끝까지 다 보고 늦게 자요', result: '다음 날 아침에 일어나기 힘들었어요.', mood: '속상함', why: '늦게 자면 다음 날 아침이 어떨지 떠올려 봐요.' },
                  { id: 'stop', text: '내일 보기로 하고 텔레비전을 꺼요', result: '푹 자고 아침에 상쾌하게 일어났어요.', mood: '편안함' }] } } } },
              { prompt: '밤늦게까지 놀다가 아침에 늦잠을 잤어요. 피곤한 마음의 크기를 골라 보세요.', toolOptions: { mode: 'scale', situation: '어젯밤 늦게 자서 아침에 눈이 잘 떠지지 않아요.', feeling: '걱정', after: '이렇게 피곤하지 않으려면 잠자리 시간을 지켜요.' }, target: { level: [3, 5] }, difficulty: 0.15,
                levels: { easy: { prompt: '밤늦게 놀다가 늦잠을 잤어요. 피곤한 마음을 세 칸에서 골라 보세요.', target: { level: [2, 3] } } } },
              { prompt: '동생이 더 놀자고 졸라요. 잠자리 시간이 되었을 때 어떻게 할까요?', toolOptions: { mode: 'branch', who: '준호', situation: '잘 시간인데 동생이 블록 놀이를 더 하자고 졸라요.', choices: [
                { id: 'tomorrow', text: '"내일 아침에 또 하자" 하고 정리해요', result: '둘 다 제시간에 잠들었어요.', mood: '편안함' },
                { id: 'late', text: '한 시간 더 놀아요', result: '엄마가 걱정하시고 둘 다 늦게 잠들었어요.', mood: '걱정', why: '한 시간 더 놀면 잠자리 시간은 어떻게 될까요?' }] }, target: { choice: 'tomorrow' }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { choices: [
                  { id: 'tomorrow', text: '"내일 아침에 또 하자" 하고 정리해요', result: '둘 다 제시간에 잠들었어요.', mood: '편안함' },
                  { id: 'late', text: '한 시간 더 놀아요', result: '엄마가 걱정하시고 둘 다 늦게 잠들었어요.', mood: '걱정', why: '한 시간 더 놀면 잠자리 시간은 어떻게 될까요?' },
                  { id: 'leave', text: '블록을 그대로 두고 먼저 자러 가요', result: '아침에 블록을 밟아 발이 아팠어요.', mood: '속상함', why: '놀던 것을 그대로 두면 아침에 어떤 일이 생길까요?' }] } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"내가 정한 잠자리 시간은 몇 시인가요?" 활동지에 쓴 시간을 짝에게 말하게 한다. 9시보다 훨씬 늦게 쓴 학생에게는 아침에 일어나는 시간을 함께 떠올려 보게 한다. 오늘부터 사흘 동안 지킨 날마다 활동지 칸에 ○를 그려 오자고 한다.',
        exitTicket: [
          { type: 'tool', tool: 'kitchen', options: { mode: 'order', cards: ['양치를 해요', '물을 한 모금 마셔요', '불을 끄고 잠들어요'] }, prompt: '잠자기 전에 할 일을 차례대로 놓아 보세요. 양치를 한 뒤에 물을 마셔요.', target: { order: ['양치를 해요', '물을 한 모금 마셔요', '불을 끄고 잠들어요'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '잠자리 시간을 지키면 다음 날 아침은 어떨까요?', options: ['일어나기 힘들어요', '상쾌하게 일어나요'], answer: 1, difficulty: 0.05, explain: '제시간에 자면 몸이 푹 쉬어 아침에 상쾌해요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '나의 잠자리 시간',
      items: [
        { type: 'blank', prompt: '나는 저녁 ____시에 잠자리에 들어요.' },
        { type: 'table', prompt: '잠자리 시간을 지킨 날에 ○ 하세요.', columns: ['날', '지켰어요(○)'], cells: [['첫째 날', ''], ['둘째 날', ''], ['셋째 날', '']] },
        { type: 'choice', prompt: '잠자기 전에 하면 좋은 일에 ○ 하세요.', options: ['이를 닦아요', '휴대폰 게임을 해요', '사탕을 먹어요'], answer: '이를 닦아요' },
        { type: 'draw', prompt: '잠자기 전에 내가 하는 일을 그려 보세요.' },
      ],
      easy: {
        note: '씻고, 잠옷 입고, 불 끄고 잠들어요.',
        items: [
          { type: 'blank', prompt: '나는 저녁 ____시에 자요.' },
          { type: 'choice', prompt: '잠자기 전에 하는 일에 ○ 하세요.', options: ['이를 닦아요', '줄넘기를 해요'], answer: '이를 닦아요' },
          { type: 'draw', prompt: '잠옷을 입은 내 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '차례 카드는 맞는 자리에 초록 테두리가 생겨요. 마음 크기는 세 칸이에요.',
      base: '카드를 모두 놓고 확인해요. 마음 크기는 다섯 칸이에요.',
      challenge: '잠자기와 상관없는 카드가 섞여 있어 남겨 두어야 하고, 고를 행동이 하나 더 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 늦게 자도 괜찮다고 여긴다 → 다음 날 아침의 내 몸을 떠올리게 한다. ② 집마다 잠자리 시간이 다르다 → 정답 시간을 정하지 않고, 아침에 일어나는 시간에서 거꾸로 생각하게 한다. ③ 잠자기 전 화면 보기를 당연하게 여긴다 → 화면은 잠을 쫓는다는 것을 알려 준다. 가정에 사흘 지킴표를 보내 함께 살펴 달라고 부탁하면 좋다(가정 형편을 탓하는 말은 하지 않는다).',
  }));

  lessons.push(L(4, {
    title: '하루 몸 습관 지킴표로 실천하기',
    objective: '하루의 때마다 지킬 몸 습관을 짝 짓고, 하루 동안 지킴표에 스스로 표시하며 실천할 수 있다.',
    illustration: ART('a paper habit chart on a fridge door with small stickers next to pictures of washing hands, sitting straight and sleeping, morning sun and night moon at both ends', '하루 지킴표', [
      { motif: 'house', x: 110, y: 214, color: 'peach' }, { motif: 'star', x: 330, y: 84, s: 0.5 }, { motif: 'tree', x: 380, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"사흘 동안 잠자리 시간을 지킨 날이 며칠인가요?" 활동지 ○를 손가락으로 세어 보게 한다. 지키지 못한 학생에게는 "무엇 때문에 어려웠나요?"를 묻고 탓하지 않는다. "오늘은 손 씻기, 바르게 앉기, 잠자리 시간을 한 장에 모은 하루 지킴표를 만들어요." 시연 단추로 아침·점심·저녁 칸에 습관 카드가 놓이는 모습을 보여 준다.',
        student: '사흘 동안 잠자리 시간을 지킨 날을 세어 말해 봐요.',
        demo: { tool: 'kitchen', options: { mode: 'match', slots: [{ id: 'm', label: '아침밥 먹기 전' }, { id: 'n', label: '밤 9시' }], cards: ['손을 씻어요', '잠자리에 들어요'], shuffle: false }, sequence: [{ match: { m: '손을 씻어요', n: '잠자리에 들어요' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 하루의 때와 지킬 습관 짝 짓기', minutes: 12, tool: 'kitchen',
            teacher: '"공부 시간에 지킬 습관은 무엇이었지요?" 1~3차시에 배운 세 습관을 떠올리게 한 뒤 하루의 때와 잇는다. 같은 습관이 하루에 여러 번 나온다는 것(손 씻기는 아침·점심·놀이 뒤)을 짚는다. "하루에 한 번만 하면 될까요?" 하고 물어 습관은 그때마다 하는 것임을 알게 한다.',
            task: '하루의 때마다 알맞은 습관 카드를 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '하루의 때와 그때 지킬 습관을 이어 보세요.', toolOptions: { mode: 'match', slots: [{ id: 's1', label: '점심 먹기 전' }, { id: 's2', label: '국어 공부 시간' }, { id: 's3', label: '밤 9시' }], cards: ['손을 비누로 씻어요', '허리를 펴고 앉아요', '불을 끄고 잠들어요'] },
                target: { match: { s1: '손을 비누로 씻어요', s2: '허리를 펴고 앉아요', s3: '불을 끄고 잠들어요' } }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['손을 비누로 씻어요', '허리를 펴고 앉아요', '불을 끄고 잠들어요', '복도를 뛰어요'] } } } },
              { prompt: '손을 씻어야 하는 때를 모두 골라 보세요.', toolOptions: { mode: 'pick', autoMotif: false, basket: '손을 씻는 때', cards: ['아침밥 먹기 전', '쉬는 시간에 공놀이한 뒤', '점심 먹기 전', '책을 펼 때'] },
                target: { pick: ['아침밥 먹기 전', '쉬는 시간에 공놀이한 뒤', '점심 먹기 전'] }, difficulty: 0.15,
                predict: { q: '손 씻기는 하루에 몇 번 할까요?', options: ['한 번', '여러 번'], answer: 1 },
                conclude: '손 씻기는 하루에 한 번이 아니라 씻어야 할 때마다 여러 번 해요.',
                levels: { challenge: { toolOptions: { cards: ['아침밥 먹기 전', '쉬는 시간에 공놀이한 뒤', '점심 먹기 전', '책을 펼 때', '노래를 들을 때'] } } } },
              { prompt: '하루 지킴표에 넣을 습관만 골라 보세요.', toolOptions: { mode: 'pick', autoMotif: false, basket: '하루 지킴표', cards: ['밥 먹기 전에 손 씻기', '바르게 앉기', '정한 시간에 잠자기', '사탕 많이 먹기'] },
                target: { pick: ['밥 먹기 전에 손 씻기', '바르게 앉기', '정한 시간에 잠자기'] }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['밥 먹기 전에 손 씻기', '바르게 앉기', '정한 시간에 잠자기', '사탕 많이 먹기', '늦게까지 게임하기'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 지킴표 만들고 오늘 돌아보기', minutes: 14, tool: 'emotion',
            teacher: '먼저 활동지 지킴표의 칸을 함께 읽고, 오늘 아침부터 지금까지 지킨 칸에 스스로 ○를 그리게 한다. "지키지 못한 칸은 비워 두어도 괜찮아요. 남은 하루 동안 채우면 돼요"라고 말한다. 그다음 화면에서 오늘 지킨 만큼 마음 크기를 고르게 한다. 이 문항은 정답이 없고 내 마음을 솔직하게 고르는 것이라고 알려 준다. 습관을 하루만 지키면 다 된 것이라고 말하는 학생에게 "내일도, 모레도 하면 그때 습관이 돼요"라고 짚는다.',
            task: '활동지 지킴표에 오늘 지킨 칸을 ○ 하고, 오늘 내가 지킨 만큼 마음 크기를 골라요.',
            levels: { easy: { steps: 3 }, base: {}, challenge: {} },
            items: [
              { prompt: '활동지 지킴표에 오늘 지킨 칸을 ○ 했으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '하준이는 아침과 점심에 손 씻기를 모두 지켰어요. 하준이의 뿌듯한 마음 크기를 골라 보세요.', toolOptions: { mode: 'scale', who: '하준', situation: '하준이는 아침밥과 점심밥을 먹기 전에 손을 비누로 씻었어요.', feeling: '뿌듯함', after: '나도 지킨 칸을 떠올리며 ○를 그려 봐요.' }, target: { level: [3, 5] }, difficulty: 0.05,
                levels: { easy: { prompt: '하준이는 아침과 점심에 손을 씻었어요. 뿌듯한 마음을 세 칸에서 골라 보세요.', target: { level: [2, 3] } } } },
              { prompt: '친구가 "오늘 다 지켰으니 내일은 안 해도 돼" 하고 말해요. 어떻게 말해 줄까요?', toolOptions: { mode: 'branch', who: '도윤', situation: '도윤이가 오늘 습관을 다 지켰으니 내일은 안 해도 된다고 해요.', choices: [
                { id: 'again', text: '"내일도 하면 습관이 돼" 하고 말해요', result: '도윤이가 내일도 지킴표에 ○를 그렸어요.', mood: '뿌듯함' },
                { id: 'ok', text: '"맞아, 하루면 충분해" 하고 말해요', result: '다음 날 도윤이는 손 씻기를 잊었어요.', mood: '속상함', why: '하루만 하고 그만두면 습관이 될까요?' }] }, target: { choice: 'again' }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { choices: [
                  { id: 'again', text: '"내일도 하면 습관이 돼" 하고 말해요', result: '도윤이가 내일도 지킴표에 ○를 그렸어요.', mood: '뿌듯함' },
                  { id: 'ok', text: '"맞아, 하루면 충분해" 하고 말해요', result: '다음 날 도윤이는 손 씻기를 잊었어요.', mood: '속상함', why: '하루만 하고 그만두면 습관이 될까요?' },
                  { id: 'week', text: '"일주일만 하고 그만하자" 하고 말해요', result: '다음 주에 도윤이는 다시 잊어버렸어요.', mood: '걱정', why: '습관은 정한 날까지만 하는 것일까요?' }] } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"내 지킴표에서 가장 많이 ○를 그린 습관은 무엇인가요?" 두세 명이 말하게 한다. 지킴표는 집에 가져가 냉장고나 책상처럼 잘 보이는 곳에 붙이고, 남은 하루와 내일도 채워 오자고 한다. 출구 1번에서 짝을 바꾸어 놓은 학생은 다음 시간 시작에 지킴표를 보며 다시 견주어 보게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'kitchen', options: { mode: 'match', slots: [{ id: 'e1', label: '화장실에 다녀온 뒤' }, { id: 'e2', label: '그림을 그릴 때' }], cards: ['비누로 손을 씻어요', '두 발을 바닥에 붙여 앉아요'] }, prompt: '때와 지킬 습관을 이어 보세요.', target: { match: { e1: '비누로 손을 씻어요', e2: '두 발을 바닥에 붙여 앉아요' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '습관이 되려면 어떻게 해야 할까요?', options: ['하루만 잘 지켜요', '날마다 되풀이해요'], answer: 1, difficulty: 0.1, explain: '날마다 되풀이해서 지켜야 습관이 돼요.' },
          { type: 'tool', tool: 'emotion', options: { mode: 'scale', steps: 3, situation: '오늘 아침부터 지금까지 몸 습관을 지켜 보았어요.', feeling: '뿌듯함', ask: '오늘 내가 지킨 만큼 마음은 얼마나 뿌듯한가요?' }, prompt: '오늘 몸 습관을 지킨 만큼 내 마음을 솔직하게 골라 보세요. 정답은 없어요.', target: { level: 'any' }, difficulty: 0.05 },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '하루 몸 습관 지킴표',
      items: [
        { type: 'table', prompt: '오늘 지킨 칸에 ○ 하세요.', columns: ['습관', '아침', '낮', '저녁'], cells: [['손 씻기', '', '', ''], ['바르게 앉기', '', '', ''], ['정한 시간에 자기', '-', '-', '']] },
        { type: 'check', prompt: '손을 씻어야 하는 때에 모두 ✓ 하세요.', options: ['아침밥 먹기 전', '공놀이한 뒤', '책을 펼 때', '점심 먹기 전'] },
        { type: 'choice', prompt: '습관이 되려면 어떻게 할까요?', options: ['하루만 해요', '날마다 해요'], answer: '날마다 해요' },
        { type: 'short', prompt: '내일 더 잘 지키고 싶은 습관 하나를 쓰세요.' },
      ],
      easy: {
        note: '손 씻기, 바르게 앉기, 일찍 자기!',
        items: [
          { type: 'table', prompt: '오늘 지킨 습관에 ○ 하세요.', columns: ['습관', '○'], cells: [['손 씻기', ''], ['바르게 앉기', ''], ['일찍 자기', '']] },
          { type: 'choice', prompt: '손 씻기는 하루에 몇 번 할까요?', options: ['한 번', '여러 번'], answer: '여러 번' },
          { type: 'draw', prompt: '내가 잘 지킨 습관을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞게 놓으면 초록 테두리가 생겨요. 마음 크기는 세 칸이고, 지킴표는 습관 세 줄만 채워요.',
      base: '카드를 모두 놓고 확인해요. 지킴표의 아침·낮·저녁 칸을 채워요.',
      challenge: '함정 카드와 함정 행동이 하나씩 더 있어요. 내일 더 지킬 습관과 그 방법까지 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 하루만 지키면 습관이 된 것이라고 여긴다 → 25~28차시(일주일 돌아보기)에서 이 지킴표를 다시 쓴다고 미리 말해 둔다. ② 지키지 못한 칸을 숨기려 한다 → 마음 크기 문항은 정답이 없다는 것을 분명히 하고, 빈칸은 "아직"이라고 부른다. ③ 같은 습관이 하루에 여러 번 나오는 것을 헷갈린다 → 손 씻기 카드를 여러 장 만들어 칠판 하루 띠에 붙여 본다.',
  }));

  // ───────────────────────── 5~8차시: 오늘 나를 칭찬할 일 찾기(자기 이해 — 성찰과 습관화) ─────────────────────────

  lessons.push(L(5, {
    title: '오늘 하루 나를 칭찬할 작은 일 찾기',
    objective: '오늘 하루 가운데 나를 칭찬할 일을 골라 말하고, 그 일을 칭찬 카드에 한 문장으로 쓸 수 있다.',
    illustration: ART('a paper praise box decorated with stars on a classroom desk, small folded paper cards going into the slot, a child smiling proudly', '나를 칭찬해요', [
      { motif: 'star', x: 120, y: 84, s: 0.6 }, { motif: 'house', x: 370, y: 214, color: 'buttercup' }, { motif: 'flower', x: 240, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '교탁 위에 별을 붙인 빈 상자를 보여 준다. "이 상자 이름은 칭찬 상자예요. 오늘부터 나를 칭찬할 일을 카드에 써서 여기에 모을 거예요." "칭찬받을 일은 어떤 일일까요?" 하고 묻는다. "달리기 1등", "상 받기"처럼 큰일만 나오면 "아침에 혼자 일어난 것은 칭찬할 일이 아닐까요?"라고 되묻고 대답은 활동에서 찾게 한다. 시연 단추로 칭찬할 일 카드가 바구니에 들어가는 모습을 보여 준다.',
        student: '칭찬받았던 일을 하나 떠올려 짝에게 말해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'pick', basket: '칭찬할 일', cards: ['혼자 일어났어요', '친구를 밀었어요'], shuffle: false }, sequence: [{ pick: ['혼자 일어났어요'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 칭찬할 일 고르기', minutes: 12, tool: 'mindmap',
            teacher: '"신발을 가지런히 벗은 것도 칭찬할 일일까요?" 예상을 고르게 한 뒤 함께 확인한다. 작은 일이라도 스스로 했거나 남을 도왔으면 칭찬할 일이라는 것을 짚는다(칭찬받을 일은 큰일을 해냈을 때만 생긴다는 생각). 친구를 놀린 일처럼 칭찬할 수 없는 일은 "다시 해 볼 일"이라고 부르고 혼내는 말투는 쓰지 않는다.',
            task: '하루 동안 한 일 카드를 읽고, 나를 칭찬할 일과 다시 해 볼 일을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '나를 칭찬할 일만 골라 보세요.', toolOptions: { mode: 'pick', basket: '칭찬할 일', cards: ['아침에 혼자 일어났어요', '동생에게 장난감을 빌려줬어요', '친구 필통을 몰래 숨겼어요', '줄을 설 때 새치기했어요'] },
                target: { pick: ['아침에 혼자 일어났어요', '동생에게 장난감을 빌려줬어요'] }, difficulty: 0.05,
                levels: { challenge: { toolOptions: { cards: ['아침에 혼자 일어났어요', '동생에게 장난감을 빌려줬어요', '친구 필통을 몰래 숨겼어요', '줄을 설 때 새치기했어요', '급식 반찬을 바닥에 버렸어요'] } } } },
              { prompt: '작은 일도 칭찬할 수 있어요. 칭찬할 일을 모두 골라 보세요.', toolOptions: { mode: 'pick', basket: '칭찬할 일', cards: ['신발을 가지런히 벗었어요', '급식을 남기지 않았어요', '달리기에서 1등을 했어요', '복도에서 뛰었어요'] },
                target: { pick: ['신발을 가지런히 벗었어요', '급식을 남기지 않았어요', '달리기에서 1등을 했어요'] }, difficulty: 0.15,
                predict: { q: '신발 정리처럼 작은 일도 칭찬할 일일까요?', options: ['큰일만 돼요', '작은 일도 돼요'], answer: 1 },
                conclude: '스스로 해낸 작은 일도 나를 칭찬할 일이에요.' },
              { prompt: '칭찬할 일과 다시 해 볼 일로 나누어 보세요.', toolOptions: { topic: '오늘 내가 한 일', slots: ['칭찬할 일', '다시 해 볼 일'], cards: ['숙제를 끝까지 했어요', '손 씻는 동안 물을 잠갔어요', '친구에게 소리쳤어요', '장난감을 치우지 않았어요'] },
                target: { sort: { '칭찬할 일': ['숙제를 끝까지 했어요', '손 씻는 동안 물을 잠갔어요'], '다시 해 볼 일': ['친구에게 소리쳤어요', '장난감을 치우지 않았어요'] } }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['숙제를 끝까지 했어요', '손 씻는 동안 물을 잠갔어요', '친구에게 소리쳤어요', '장난감을 치우지 않았어요', '오늘은 비가 왔어요'] }, prompt: '칭찬할 일과 다시 해 볼 일로 나누어 보세요. 내가 한 일이 아닌 카드는 남겨요.' } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 칭찬 카드 써서 상자에 넣기', minutes: 14, tool: 'emotion',
            teacher: '"칭찬할 일을 했을 때 마음은 어떤 날씨일까요?" 마음 카드를 짝 지은 뒤, 학생마다 빈 칭찬 카드(손바닥만 한 종이)를 한 장씩 받아 "나는 오늘 ○○을 해서 나를 칭찬해요."라고 쓰게 한다. 쓸 것이 없다는 학생에게 "오늘 아침에 일어나서 학교에 오기까지 혼자 한 일은?"을 묻는다. 다 쓴 카드는 접어서 칭찬 상자에 넣는다.',
            task: '칭찬할 일과 마음을 짝 짓고, 칭찬 카드를 써서 칭찬 상자에 넣어요.',
            levels: { easy: { live: true, instant: true, steps: 3 }, base: {}, challenge: {} },
            items: [
              { prompt: '일과 그때 마음을 이어 보세요.', toolOptions: { cards: ['뿌듯함', '고마움', '편안함'], slots: [{ id: 's1', label: '혼자 신발 끈을 맸어요' }, { id: 's2', label: '친구가 내 짐을 들어 줬어요' }, { id: 's3', label: '푹 자고 일어났어요' }] },
                target: { match: { s1: '뿌듯함', s2: '고마움', s3: '편안함' } }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['뿌듯함', '고마움', '편안함', '화남'] } } } },
              { prompt: '처음으로 혼자 머리를 감았어요. 뿌듯한 마음의 크기를 골라 보세요.', toolOptions: { mode: 'scale', situation: '처음으로 혼자 머리를 감고 말렸어요.', feeling: '뿌듯함', after: '작은 일을 해낸 나도 칭찬해요.' }, target: { level: [3, 5] }, difficulty: 0.1,
                levels: { easy: { prompt: '처음으로 혼자 머리를 감았어요. 뿌듯한 마음을 세 칸에서 골라 보세요.', target: { level: [2, 3] } } } },
              { prompt: '칭찬 카드를 한 장 써서 칭찬 상자에 넣었으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '칭찬 상자에서 카드 세 장을 꺼내(이름은 읽지 않는다) 소리 내어 읽어 준다. "이 일들이 큰일이었나요, 작은 일이었나요?" 하고 묻는다. 내일도 하루를 마치기 전에 칭찬할 일을 한 가지 찾아 카드에 써 오자고 한다. 출구 2번에서 "큰일을 해냈을 때만"을 고른 학생에게는 상자에서 읽은 카드를 다시 떠올려 보게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', basket: '칭찬할 일', cards: ['할머니 어깨를 주물러 드렸어요', '읽은 책을 제자리에 꽂았어요', '동생 과자를 뺏어 먹었어요'] }, prompt: '집에서 한 일이에요. 나를 칭찬할 일만 골라 보세요.', target: { pick: ['할머니 어깨를 주물러 드렸어요', '읽은 책을 제자리에 꽂았어요'] }, difficulty: 0.05 },
          { type: 'choice', prompt: '나를 칭찬할 일은 언제 생길까요?', options: ['큰일을 해냈을 때만', '작은 일을 잘했을 때도'], answer: 1, difficulty: 0.1, explain: '스스로 해낸 작은 일도 칭찬할 일이에요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '나를 칭찬해요',
      items: [
        { type: 'check', prompt: '칭찬할 일에 모두 ✓ 하세요.', options: ['혼자 일어났어요', '친구를 놀렸어요', '신발을 가지런히 벗었어요', '물을 잠갔어요'] },
        { type: 'choice', prompt: '혼자 신발 끈을 맸을 때 마음에 ○ 하세요.', options: ['뿌듯함', '화남', '무서움'], answer: '뿌듯함' },
        { type: 'blank', prompt: '나는 오늘 ______________을(를) 해서 나를 칭찬해요.' },
        { type: 'draw', prompt: '오늘 칭찬할 일을 한 내 모습을 그려 보세요.' },
      ],
      easy: {
        note: '작은 일도 칭찬할 일이에요.',
        items: [
          { type: 'choice', prompt: '칭찬할 일에 ○ 하세요.', options: ['혼자 일어났어요', '친구를 놀렸어요'], answer: '혼자 일어났어요' },
          { type: 'blank', prompt: '나는 오늘 ________을(를) 했어요.' },
          { type: 'draw', prompt: '칭찬할 일을 한 내 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 카드에 초록 테두리가 생기고 틀린 카드는 돌아와요. 마음 크기는 세 칸이에요. 칭찬 카드는 그림으로 그려도 돼요.',
      base: '카드를 모두 고르고 확인해요. 칭찬 카드에 한 문장을 써요.',
      challenge: '함정 카드(칭찬할 수 없는 일, 내가 한 일이 아닌 것)가 섞여 있어요. 칭찬 카드를 두 장 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 칭찬은 큰일을 했을 때만 받는다고 여긴다(핵심 오개념) → 상자에서 읽어 준 작은 일 카드로 되짚는다. ② 칭찬할 일이 없다고 한다 → 아침에 혼자 한 일부터 차례로 떠올리게 한다. ③ 친구 카드를 읽고 놀린다 → 카드는 이름 없이 읽고, 칭찬 상자의 카드는 놀리지 않는다는 약속을 먼저 정한다. 칭찬 상자는 7차시에 다시 연다.',
  }));

  lessons.push(L(6, {
    title: '내가 한 일을 넣어 칭찬하는 말 만들기',
    objective: '“잘했어”처럼 짧은 말 대신 내가 한 일을 넣어 나를 칭찬하는 말을 고르고, 그 말을 칭찬 카드에 쓸 수 있다.',
    illustration: ART('a paper child holding a speech-bubble card that shows a watering can and a flower pot, with small star stickers floating around', '무엇을 잘했나요?', [
      { motif: 'flower', x: 130, y: 226, color: 'rose' }, { motif: 'tree', x: 380, y: 214 }, { motif: 'star', x: 300, y: 80, s: 0.5 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"어제 칭찬 상자에 넣은 카드를 떠올려 볼까요?" 두세 명이 자기 카드를 말하게 한다. 이어서 두 말을 들려준다. "잘했어!" / "화분에 물을 꼬박꼬박 준 내가 멋져!" "어느 말이 무엇을 잘했는지 더 잘 알려 줄까요?" 시연 단추로 한 일과 칭찬 말이 짝 지어지는 모습을 보여 준다.',
        student: '두 칭찬 말 가운데 무엇을 잘했는지 더 잘 알 수 있는 말을 골라 말해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '칭찬하는 말', slots: [{ id: 's1', label: '화분에 물을 주었어요' }], cards: ['식물을 돌본 내가 멋져'], shuffle: false }, sequence: [{ match: { s1: '식물을 돌본 내가 멋져' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 한 일이 들어간 칭찬 말 고르기', minutes: 13, tool: 'mindmap',
            teacher: '"이 칭찬 말에는 무엇을 했는지가 들어 있나요?" 카드를 읽으며 한 일 낱말에 손가락을 짚게 한다. "최고야"처럼 짧은 말도 기분은 좋지만 무엇을 잘했는지는 알려 주지 않는다는 것을 짚는다. 나에게 하는 말과 친구에게 하는 말은 "나는"과 "너는"으로 구별하게 한다.',
            task: '한 일과 칭찬 말을 잇고, 한 일이 들어간 칭찬 말을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '한 일과 어울리는 칭찬 말을 이어 보세요.', toolOptions: { mode: 'match', topic: '나를 칭찬해요', slots: [{ id: 's1', label: '친구가 떨어뜨린 연필을 주웠어요' }, { id: 's2', label: '받아쓰기를 세 번 연습했어요' }, { id: 's3', label: '화분에 물을 주었어요' }], cards: ['친구를 도운 내가 멋져', '끝까지 연습한 내가 대단해', '식물을 돌본 내가 자랑스러워'] },
                target: { match: { s1: '친구를 도운 내가 멋져', s2: '끝까지 연습한 내가 대단해', s3: '식물을 돌본 내가 자랑스러워' } }, difficulty: 0.1,
                hints: ['칭찬 말 안에 들어 있는 한 일 낱말(돕기, 연습, 돌보기)을 먼저 찾아요.', '흔들리는 카드의 한 일 낱말이 왼쪽 일과 같은지 견주어 봐요.', '연필 줍기는 친구를 도운 일, 받아쓰기는 연습한 일, 물 주기는 식물을 돌본 일이에요.'],
                levels: { challenge: { toolOptions: { cards: ['친구를 도운 내가 멋져', '끝까지 연습한 내가 대단해', '식물을 돌본 내가 자랑스러워', '일찍 잔 내가 멋져'] } } } },
              { prompt: '무엇을 잘했는지 들어 있는 칭찬 말만 골라 보세요.', toolOptions: { mode: 'pick', basket: '또렷한 칭찬 말', cards: ['그림을 끝까지 색칠한 내가 멋져', '그냥 잘했어', '우유를 흘리지 않고 나른 내가 대단해', '최고야'] },
                target: { pick: ['그림을 끝까지 색칠한 내가 멋져', '우유를 흘리지 않고 나른 내가 대단해'] }, difficulty: 0.15,
                predict: { q: '"최고야"에는 무엇을 잘했는지 들어 있을까요?', options: ['들어 있어요', '들어 있지 않아요'], answer: 1 },
                conclude: '한 일을 넣어 칭찬하면 무엇을 잘했는지 또렷하게 알 수 있어요.' },
              { prompt: '나에게 하는 칭찬과 친구에게 하는 칭찬으로 나누어 보세요.', toolOptions: { topic: '칭찬하는 말', slots: ['나에게 하는 말', '친구에게 하는 말'], cards: ['나는 오늘 줄을 잘 섰어', '너는 그림을 정말 꼼꼼히 그렸어', '나는 혼자 단추를 채웠어', '너는 노래를 끝까지 불렀어'] },
                target: { sort: { '나에게 하는 말': ['나는 오늘 줄을 잘 섰어', '나는 혼자 단추를 채웠어'], '친구에게 하는 말': ['너는 그림을 정말 꼼꼼히 그렸어', '너는 노래를 끝까지 불렀어'] } }, difficulty: 0.1,
                hints: ['카드 첫 낱말이 "나는"인지 "너는"인지 먼저 읽어요.', '흔들리는 카드의 첫 낱말을 다시 읽어 봐요.', '"나는"으로 시작하면 나에게, "너는"으로 시작하면 친구에게 하는 말이에요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 칭찬 말 완성하고 카드 쓰기', minutes: 13, tool: 'emotion',
            teacher: '"숙제를 혼자 다 했을 때 마음은 어떤 마음일까요?" 문장을 처음부터 소리 내어 읽고 빈칸에 마음 낱말을 넣게 한다. 그다음 빈 칭찬 카드에 "나는 ○○을 한 내가 ○○해."처럼 한 일과 마음을 함께 써 칭찬 상자에 넣는다. 친구가 "그게 무슨 칭찬할 일이야"라고 할 때는 어떻게 할지 함께 고른다.',
            task: '문장 빈칸에 알맞은 마음 낱말을 넣고, 한 일이 들어간 칭찬 카드를 써요.',
            levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
            items: [
              { prompt: '빈칸에 알맞은 마음 낱말을 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['뿌듯해요', '고마워요', '미안해요'], slots: [{ id: 'b1', label: '숙제를 혼자 다 해서 ___.' }, { id: 'b2', label: '친구가 우산을 씌워 줘서 ___.' }, { id: 'b3', label: '친구 발을 밟아서 ___.' }] },
                target: { fill: { b1: '뿌듯해요', b2: '고마워요', b3: '미안해요' } }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['뿌듯해요', '고마워요', '미안해요', '심심해요'] } } } },
              { prompt: '친구가 "그게 무슨 칭찬할 일이야" 하고 말해요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '민지', situation: '민지가 "혼자 신발 정리를 했어" 하고 말하자 친구가 "그게 무슨 칭찬할 일이야" 해요.', choices: [
                { id: 'keep', text: '"작은 일도 해내면 칭찬할 일이야" 하고 말해요', result: '민지는 칭찬 카드를 상자에 넣었어요.', mood: '뿌듯함' },
                { id: 'tear', text: '칭찬 카드를 찢어 버려요', result: '민지는 해낸 일을 잊어버렸어요.', mood: '속상함', why: '작은 일을 해낸 것은 정말 칭찬할 일이 아닐까요?' },
                { id: 'fight', text: '친구에게 소리를 질러요', result: '둘 다 기분이 나빠졌어요.', mood: '화남', why: '소리를 지르면 친구와 나의 마음은 어떨까요?' }] }, target: { choice: 'keep' }, difficulty: 0.15,
                levels: { easy: { toolOptions: { choices: [
                  { id: 'keep', text: '"작은 일도 해내면 칭찬할 일이야" 하고 말해요', result: '민지는 칭찬 카드를 상자에 넣었어요.', mood: '뿌듯함' },
                  { id: 'tear', text: '칭찬 카드를 찢어 버려요', result: '민지는 해낸 일을 잊어버렸어요.', mood: '속상함', why: '작은 일을 해낸 것은 정말 칭찬할 일이 아닐까요?' }] } } } },
              { prompt: '한 일이 들어간 칭찬 카드를 써서 상자에 넣었으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 쓴 칭찬 카드를 짝에게 읽어 주세요. 짝은 그 카드에 한 일이 들어 있는지 들어 봐요." 짝 확인을 마친 뒤 한 일이 빠진 카드는 한 낱말을 더해 고치게 한다. 출구 1번을 바꾸어 놓은 학생은 칭찬 말 속 한 일 낱말을 다시 찾아보게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '나를 칭찬해요', slots: [{ id: 'e1', label: '동생에게 그림책을 읽어 주었어요' }, { id: 'e2', label: '줄넘기를 열 번 넘었어요' }], cards: ['동생을 챙긴 내가 멋져', '줄넘기를 해낸 내가 대단해'] }, prompt: '한 일과 칭찬 말을 이어 보세요.', target: { match: { e1: '동생을 챙긴 내가 멋져', e2: '줄넘기를 해낸 내가 대단해' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '무엇을 잘했는지 더 잘 알 수 있는 칭찬 말은?', options: ['정말 잘했어', '방을 깨끗이 치운 내가 멋져'], answer: 1, difficulty: 0.1, explain: '한 일이 들어 있어야 무엇을 잘했는지 알 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '한 일을 넣어 칭찬해요',
      items: [
        { type: 'figure', wide: true, prompt: '한 일과 칭찬 말을 선으로 이으세요.', tool: 'mindmap', figures: [{ options: { mode: 'match', topic: '나를 칭찬해요', slots: [{ id: 's1', label: '화분에 물을 주었어요' }, { id: 's2', label: '연필을 주워 주었어요' }], cards: ['식물을 돌본 내가 멋져', '친구를 도운 내가 멋져'] }, caption: '' }], answer: '물 주기-식물을 돌본, 연필 줍기-친구를 도운' },
        { type: 'choice', prompt: '한 일이 들어 있는 칭찬 말에 ○ 하세요.', options: ['최고야', '우유를 흘리지 않고 나른 내가 대단해', '그냥 잘했어'], answer: '우유를 흘리지 않고 나른 내가 대단해' },
        { type: 'blank', prompt: '나는 ______________한 내가 ________.' },
        { type: 'draw', prompt: '칭찬 카드에 넣은 일을 그려 보세요.' },
      ],
      easy: {
        note: '"무엇을" 했는지 넣어요.',
        items: [
          { type: 'choice', prompt: '무엇을 잘했는지 알 수 있는 말에 ○ 하세요.', options: ['최고야', '물을 준 내가 멋져'], answer: '물을 준 내가 멋져' },
          { type: 'blank', prompt: '나는 ________한 내가 멋져.' },
          { type: 'draw', prompt: '내가 잘한 일을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞게 놓으면 초록 테두리가 생겨요. 고를 행동이 두 가지예요. 칭찬 카드는 "나는 ○○한 내가 멋져" 틀에 한 낱말만 넣어요.',
      base: '모두 놓은 뒤 확인을 눌러요. 칭찬 카드에 한 일과 마음을 함께 써요.',
      challenge: '맞지 않는 함정 카드가 하나 더 있어요. 친구에게 하는 칭찬 카드도 한 장 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① "최고야", "잘했어"만 쓴다 → "무엇을?"이라고 되물어 한 일을 한 낱말 더하게 한다. ② 나에게 하는 말과 친구에게 하는 말을 섞는다 → 첫 낱말 "나는/너는"을 짚는다. ③ 칭찬할 일이 작다고 부끄러워한다 → 5차시 결론(작은 일도 칭찬할 일)을 되풀이한다. 친구 칭찬 카드는 41~44차시(친구와 다른 점)로 이어 쓸 수 있다.',
  }));

  lessons.push(L(7, {
    title: '칭찬 상자 카드를 세 갈래로 모아 읽기',
    objective: '칭찬 상자에 모인 카드를 나를 돌본 일, 다른 사람을 도운 일, 함께 쓰는 것을 아낀 일로 나누고, 어느 갈래가 많은지 말할 수 있다.',
    illustration: ART('three small paper baskets labeled with a toothbrush, a helping hand and a water drop, colorful folded praise cards being sorted into them', '칭찬을 모아요', [
      { motif: 'star', x: 110, y: 90, s: 0.5 }, { motif: 'house', x: 380, y: 214, color: 'mint' }, { motif: 'leaf', x: 240, y: 226 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '칭찬 상자를 흔들어 소리를 들려준다. "이틀 동안 카드가 이만큼 모였어요. 어떤 칭찬이 많을까요?" 카드 몇 장을 이름 없이 읽어 준 뒤 "이를 혼자 닦은 일과 친구 짐을 들어 준 일은 무엇이 다를까요?"를 묻는다. 시연 단추로 칭찬 카드가 갈래 칸에 들어가는 모습을 보여 준다.',
        student: '칭찬 상자에 어떤 칭찬이 가장 많을지 생각해 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '칭찬 상자', slots: ['나를 돌본 일', '남을 도운 일'], cards: ['혼자 이를 닦았어요', '친구 짐을 들어 줬어요'], shuffle: false }, sequence: [{ sort: { '나를 돌본 일': ['혼자 이를 닦았어요'], '남을 도운 일': ['친구 짐을 들어 줬어요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 칭찬 카드를 세 갈래로 나누기', minutes: 13, tool: 'mindmap',
            teacher: '"이 일로 누가 좋아졌나요? 나인가요, 다른 사람인가요, 우리 모두가 쓰는 물건인가요?" 카드마다 이 질문을 하며 갈래를 정하게 한다. 갈래를 헷갈리는 학생에게 "물과 불, 교실 물건처럼 모두가 함께 쓰는 것을 아낀 일은 셋째 갈래예요"라고 기준을 다시 말해 준다.',
            task: '칭찬 카드를 읽고 누가 좋아졌는지 생각해 세 갈래로 나눈 뒤, 모둠 칭찬 카드를 세 바구니에 직접 나누어 넣어요.',
            levels: CARD_LV,
            items: [
              { prompt: '칭찬 카드를 세 갈래로 나누어 보세요.', toolOptions: { topic: '칭찬 상자', slots: ['나를 돌본 일', '남을 도운 일', '함께 쓰는 것을 아낀 일'], cards: ['혼자 이를 닦았어요', '할머니 짐을 들어 드렸어요', '빈 교실 불을 껐어요'] },
                target: { sort: { '나를 돌본 일': ['혼자 이를 닦았어요'], '남을 도운 일': ['할머니 짐을 들어 드렸어요'], '함께 쓰는 것을 아낀 일': ['빈 교실 불을 껐어요'] } }, difficulty: 0.1,
                hints: ['카드마다 "이 일로 누가 좋아졌나?"를 물어요. 나, 다른 사람, 모두가 쓰는 것 가운데 하나예요.', '흔들리는 카드에서 좋아진 사람이나 물건을 다시 찾아요.', '이 닦기는 나를, 짐 들기는 할머니를, 불 끄기는 모두가 쓰는 전기를 위한 일이에요.'] },
              { prompt: '새로 모인 칭찬 카드도 나누어 보세요.', toolOptions: { topic: '칭찬 상자', slots: ['나를 돌본 일', '남을 도운 일', '함께 쓰는 것을 아낀 일'], cards: ['일찍 잠자리에 들었어요', '넘어진 친구를 일으켜 줬어요', '이 닦는 동안 물을 잠갔어요', '아침밥을 골고루 먹었어요'] },
                target: { sort: { '나를 돌본 일': ['일찍 잠자리에 들었어요', '아침밥을 골고루 먹었어요'], '남을 도운 일': ['넘어진 친구를 일으켜 줬어요'], '함께 쓰는 것을 아낀 일': ['이 닦는 동안 물을 잠갔어요'] } }, difficulty: 0.15,
                hints: ['카드마다 "이 일로 누가 좋아졌나?"를 물어요.', '흔들리는 카드에서 좋아진 사람이나 물건을 다시 찾아요.', '잠자기·밥 먹기는 나를, 일으켜 주기는 친구를, 물 잠그기는 모두가 쓰는 물을 위한 일이에요.'],
                levels: { challenge: { toolOptions: { cards: ['일찍 잠자리에 들었어요', '넘어진 친구를 일으켜 줬어요', '이 닦는 동안 물을 잠갔어요', '아침밥을 골고루 먹었어요', '친구 연필을 부러뜨렸어요'] }, prompt: '새로 모인 카드를 나누어 보세요. 칭찬할 일이 아닌 카드는 남겨요.' } } },
              { prompt: '함께 쓰는 것을 아낀 일만 골라 보세요.', toolOptions: { mode: 'pick', basket: '함께 쓰는 것을 아꼈어요', cards: ['색종이를 반으로 나누어 썼어요', '도서관 책을 깨끗이 봤어요', '혼자 옷을 갈아입었어요', '친구에게 지우개를 빌려줬어요'] },
                target: { pick: ['색종이를 반으로 나누어 썼어요', '도서관 책을 깨끗이 봤어요'] }, difficulty: 0.2,
                hints: ['모두가 함께 쓰는 물건을 아낀 일인지 따져요. 나만 쓰는 것은 아니에요.', '흔들리는 카드의 물건이 반 친구 모두가 쓰는 것인지 다시 생각해요.', '색종이와 도서관 책은 모두가 함께 쓰는 거예요.'] },
              { prompt: '모둠 칭찬 카드를 세 바구니에 나누어 넣었으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 어느 칭찬이 많은지 세어 보기', minutes: 13, tool: 'chart',
            teacher: '활동 1 끝에 모둠마다 칭찬 상자 카드를 세 갈래 바구니(종이 상자 셋)에 직접 나누어 넣었다. 이제 화면의 우리 반 칭찬 그림표를 함께 본다. "별 하나가 카드 한 장이에요. 어느 갈래에 별이 가장 많나요?" 손가락으로 하나씩 세게 한다. 가장 적은 갈래를 찾은 뒤 "다음 주에는 이 갈래의 칭찬도 모아 볼까요?"라고 묻는다.',
            task: '칭찬 그림표의 별을 하나씩 세어 보며 물음에 답해요.',
            levels: { easy: { showValues: true }, base: {}, challenge: {} },
            items: [
              { prompt: '칭찬 그림표를 보고 고르세요. 카드가 가장 많은 갈래는?', toolOptions: { type: 'picture', mode: 'read', title: '우리 반 칭찬 상자', unit: '장', data: [['나를 돌본 일', 7], ['남을 도운 일', 5], ['아낀 일', 3]], icons: [{ value: 1, name: '1장' }], icon: 'star', question: '카드가 가장 많은 갈래는?', choices: ['나를 돌본 일', '남을 도운 일', '아낀 일'] }, target: { pick: 0 }, difficulty: 0.1,
                levels: { challenge: { prompt: '칭찬 그림표를 보고 고르세요. 가장 많은 갈래는 가장 적은 갈래보다 몇 장 더 많나요?', toolOptions: { question: '몇 장 더 많나요?', choices: ['2장', '4장', '7장'] }, target: { pick: 1 } } } },
              { prompt: '칭찬 그림표를 보고 고르세요. 카드가 가장 적은 갈래는?', toolOptions: { type: 'picture', mode: 'read', title: '우리 반 칭찬 상자', unit: '장', data: [['나를 돌본 일', 6], ['남을 도운 일', 2], ['아낀 일', 4]], icons: [{ value: 1, name: '1장' }], icon: 'star', question: '카드가 가장 적은 갈래는?', choices: ['나를 돌본 일', '남을 도운 일', '아낀 일'] }, target: { pick: 1 }, difficulty: 0.15,
                levels: { challenge: { prompt: '칭찬 그림표를 보고 고르세요. 나를 돌본 일과 아낀 일을 모으면 몇 장인가요?', toolOptions: { question: '두 갈래를 모으면 몇 장?', choices: ['8장', '10장', '12장'] }, target: { pick: 1 } } } },
              { prompt: '칭찬 그림표를 보고 고르세요. 남을 도운 일 카드는 몇 장인가요?', toolOptions: { type: 'picture', mode: 'read', title: '우리 반 칭찬 상자', unit: '장', data: [['나를 돌본 일', 5], ['남을 도운 일', 4], ['아낀 일', 2]], icons: [{ value: 1, name: '1장' }], icon: 'star', question: '남을 도운 일 카드는 몇 장?', choices: ['2장', '4장', '5장'] }, target: { pick: 1 }, difficulty: 0.2,
                levels: { challenge: { prompt: '칭찬 그림표를 보고 고르세요. 칭찬 카드는 모두 몇 장인가요?', toolOptions: { question: '모두 몇 장?', choices: ['9장', '11장', '13장'] }, target: { pick: 1 } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"우리 반은 어느 칭찬이 가장 많았나요? 가장 적은 갈래의 칭찬을 내일 하나 해 볼 사람?" 손을 든 학생에게 무엇을 할지 한 문장으로 말하게 한다. 칭찬 카드는 갈래별로 고무줄로 묶어 상자에 다시 넣어 둔다(8차시와 단원 끝에 다시 읽는다).',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '칭찬 상자', slots: ['나를 돌본 일', '남을 도운 일', '함께 쓰는 것을 아낀 일'], cards: ['스스로 머리를 빗었어요', '동생 숙제를 도와줬어요', '크레파스를 아껴 썼어요'] }, prompt: '집에서 쓴 칭찬 카드를 세 갈래로 나누어 보세요.', target: { sort: { '나를 돌본 일': ['스스로 머리를 빗었어요'], '남을 도운 일': ['동생 숙제를 도와줬어요'], '함께 쓰는 것을 아낀 일': ['크레파스를 아껴 썼어요'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '"빈 교실 불을 껐어요"는 누구에게 좋은 일일까요?', options: ['나에게만', '전기를 함께 쓰는 모두에게'], answer: 1, difficulty: 0.15, explain: '전기는 모두가 함께 쓰는 것이라 아끼면 모두에게 좋아요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '칭찬을 세 갈래로',
      items: [
        { type: 'table', prompt: '칭찬 카드를 알맞은 칸에 쓰세요: 혼자 이를 닦았어요 / 친구를 일으켜 줬어요 / 물을 잠갔어요', columns: ['나를 돌본 일', '남을 도운 일', '아낀 일'], rows: 1 },
        { type: 'figure', prompt: '그림표에서 가장 많은 갈래에 ○ 하세요.', tool: 'chart', figures: [{ options: { type: 'picture', mode: 'read', title: '칭찬 상자', unit: '장', data: [['나를 돌본 일', 4], ['남을 도운 일', 6], ['아낀 일', 2]], icons: [{ value: 1, name: '1장' }], icon: 'star' }, caption: '' }], answer: '남을 도운 일' },
        { type: 'choice', prompt: '함께 쓰는 것을 아낀 일에 ○ 하세요.', options: ['혼자 옷을 입었어요', '색종이를 나누어 썼어요', '친구를 도왔어요'], answer: '색종이를 나누어 썼어요' },
        { type: 'short', prompt: '내일 해 보고 싶은 칭찬할 일을 쓰세요.' },
      ],
      easy: {
        note: '누가 좋아졌는지 생각해요.',
        items: [
          { type: 'choice', prompt: '"할머니 짐을 들어 드렸어요"는 어느 갈래일까요?', options: ['나를 돌본 일', '남을 도운 일'], answer: '남을 도운 일' },
          { type: 'choice', prompt: '"혼자 이를 닦았어요"는 어느 갈래일까요?', options: ['나를 돌본 일', '남을 도운 일'], answer: '나를 돌본 일' },
          { type: 'draw', prompt: '내일 하고 싶은 칭찬할 일을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '갈래 칸에 맞게 넣으면 초록 테두리가 생겨요. 그림표에 수가 함께 보여요.',
      base: '카드를 모두 나눈 뒤 확인해요. 그림표의 별을 하나씩 세어요.',
      challenge: '칭찬할 일이 아닌 함정 카드가 섞여 있어요. 그림표에서 몇 장 더 많은지, 모두 몇 장인지 셈해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① "물 잠그기"를 나를 돌본 일로 넣는다 → "물은 누가 함께 쓰나요?"로 기준을 다시 세운다. ② 그림표에서 줄 길이만 보고 세지 않는다 → 별을 손가락으로 하나씩 짚어 세게 한다. ③ 칭찬 카드 수를 친구와 견주며 속상해한다 → 이 그림표는 우리 반 전체의 것이고 누가 많이 썼는지는 세지 않는다고 말한다. 실제 카드 수로 그림표를 다시 그려 교실에 붙여도 좋다.',
  }));

  lessons.push(L(8, {
    title: '어려웠지만 끝까지 해낸 나 칭찬하기',
    objective: '처음에는 어려웠지만 다시 해 보아 해낸 일을 차례대로 말하고, 애쓴 나를 칭찬하는 말을 고를 수 있다.',
    illustration: ART('a paper child jumping rope in a schoolyard, with three small panels behind showing tripping, practicing and finally jumping happily', '끝까지 해냈어요', [
      { motif: 'tree', x: 110, y: 214 }, { motif: 'star', x: 330, y: 80, s: 0.6 }, { motif: 'flower', x: 380, y: 228, color: 'rose' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"처음에는 못 했는데 지금은 할 수 있는 일이 있나요?" 자전거 타기, 젓가락질, 신발 끈 매기 같은 경험을 두세 명에게 듣는다. "그 일을 해낼 때까지 무엇을 했나요?" 하고 물어 연습한 과정을 말하게 한다. 시연 단추로 줄넘기 장면이 차례대로 놓이는 모습을 보여 주고 "오늘은 결과뿐 아니라 애쓴 과정도 칭찬해요"라고 말한다.',
        student: '처음에는 못 했지만 지금은 할 수 있는 일을 하나 말해 봐요.',
        demo: { tool: 'story', options: { cards: [{ id: 'fail', text: '줄에 자꾸 걸렸어요', motif: 'cloud' }, { id: 'try', text: '날마다 연습했어요', motif: 'sun' }, { id: 'done', text: '다섯 번 넘었어요', motif: 'star' }], slots: ['처음', '가운데', '끝'], shuffle: false }, sequence: [{ order: ['fail', 'try', 'done'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 해낸 이야기를 차례대로 놓기', minutes: 12, tool: 'story',
            teacher: '"처음에 어땠는지, 그다음 무엇을 했는지, 마지막에 어떻게 되었는지 찾아요." 장면을 놓은 뒤 "가운데 장면이 없었다면 끝 장면이 생겼을까요?" 하고 묻는다. 칭찬할 일은 해낸 결과만이 아니라 다시 해 본 가운데 장면에도 있다는 것을 짚는다.',
            task: '해낸 이야기 장면을 처음·가운데·끝 차례로 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '도윤이가 젓가락질을 해낸 이야기를 차례대로 놓아 보세요.', toolOptions: { cards: [{ id: 'drop', text: '콩을 자꾸 떨어뜨렸어요', motif: 'cloud' }, { id: 'practice', text: '밤마다 콩 옮기기를 했어요', motif: 'moon' }, { id: 'eat', text: '젓가락으로 반찬을 집었어요', motif: 'star' }], slots: ['처음', '가운데', '끝'] },
                target: { order: ['drop', 'practice', 'eat'] }, difficulty: 0.1,
                levels: { challenge: { prompt: '도윤이가 젓가락질을 해낸 이야기를 차례대로 놓아 보세요. 이야기와 상관없는 장면은 남겨요.', toolOptions: { cards: [{ id: 'drop', text: '콩을 자꾸 떨어뜨렸어요', motif: 'cloud' }, { id: 'practice', text: '밤마다 콩 옮기기를 했어요', motif: 'moon' }, { id: 'eat', text: '젓가락으로 반찬을 집었어요', motif: 'star' }, { id: 'swim', text: '바다에서 수영했어요', motif: 'wave' }] } } } },
              { prompt: '서아가 혼자 머리를 묶게 된 이야기를 차례대로 놓아 보세요.', toolOptions: { cards: [{ id: 'mess', text: '머리가 자꾸 삐져나왔어요', motif: 'cloud' }, { id: 'mirror', text: '거울을 보며 다시 묶었어요', motif: 'sun' }, { id: 'neat', text: '머리를 깔끔하게 묶었어요', motif: 'flower' }], slots: ['처음', '가운데', '끝'] },
                target: { order: ['mess', 'mirror', 'neat'] }, difficulty: 0.15,
                levels: { challenge: { prompt: '서아가 혼자 머리를 묶게 된 이야기를 차례대로 놓아 보세요. 이야기와 상관없는 장면은 남겨요.', toolOptions: { cards: [{ id: 'mess', text: '머리가 자꾸 삐져나왔어요', motif: 'cloud' }, { id: 'mirror', text: '거울을 보며 다시 묶었어요', motif: 'sun' }, { id: 'neat', text: '머리를 깔끔하게 묶었어요', motif: 'flower' }, { id: 'cake', text: '생일 케이크를 먹었어요', motif: 'star' }] } } } },
              { prompt: '장면과 그때 마음을 이어 보세요.', toolOptions: { mode: 'match', slots: [{ id: 's1', label: '줄에 자꾸 걸렸을 때' }, { id: 's2', label: '다섯 번을 이어 넘었을 때' }], cards: ['속상함', '뿌듯함'] },
                target: { match: { s1: '속상함', s2: '뿌듯함' } }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { slots: [{ id: 's1', label: '줄에 자꾸 걸렸을 때' }, { id: 's2', label: '다섯 번을 이어 넘었을 때' }, { id: 's3', label: '친구가 연습을 도와줬을 때' }], cards: ['속상함', '뿌듯함', '고마움'] }, target: { match: { s1: '속상함', s2: '뿌듯함', s3: '고마움' } }, prompt: '세 장면과 그때 마음을 이어 보세요.' } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 애쓴 나에게 하는 말 고르기', minutes: 14, tool: 'emotion',
            teacher: '"줄에 걸렸을 때 나에게 어떤 말을 해 주면 다시 해 볼 힘이 날까요?" 보기를 하나씩 소리 내어 읽고, "나는 원래 못해"라는 말을 들은 내 마음은 어떨지 묻는다. 활동이 끝나면 짝에게 내가 끝까지 해낸 일을 처음·가운데·끝으로 말하고, 짝은 "가운데에서 애쓴 것이 멋져"처럼 칭찬해 준다.',
            task: '어려울 때 나에게 하는 말을 고르고, 짝에게 내가 해낸 일을 차례대로 말해요.',
            levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
            items: [
              { prompt: '줄넘기에 또 걸렸어요. 나에게 어떤 말을 해 줄까요?', toolOptions: { mode: 'branch', who: '하준', situation: '하준이가 줄넘기를 하다가 또 줄에 걸렸어요.', choices: [
                { id: 'again', text: '"한 번 더 해 보자" 하고 말해요', result: '하준이는 다시 넘어 보았고 세 번을 넘었어요.', mood: '뿌듯함' },
                { id: 'never', text: '"나는 원래 못해" 하고 말해요', result: '하준이는 줄을 내려놓고 다시 하지 않았어요.', mood: '속상함', why: '"원래 못해"라고 하면 다시 해 볼 힘이 날까요?' },
                { id: 'throw', text: '줄넘기를 던져요', result: '줄이 엉켜 친구가 놀랐어요.', mood: '놀람', why: '줄을 던지면 나와 친구에게 어떤 일이 생길까요?' }] }, target: { choice: 'again' }, difficulty: 0.1,
                levels: { easy: { toolOptions: { choices: [
                  { id: 'again', text: '"한 번 더 해 보자" 하고 말해요', result: '하준이는 다시 넘어 보았고 세 번을 넘었어요.', mood: '뿌듯함' },
                  { id: 'never', text: '"나는 원래 못해" 하고 말해요', result: '하준이는 줄을 내려놓고 다시 하지 않았어요.', mood: '속상함', why: '"원래 못해"라고 하면 다시 해 볼 힘이 날까요?' }] } } } },
              { prompt: '애쓴 과정을 칭찬하는 말만 골라 보세요.', toolOptions: { mode: 'pick', basket: '애쓴 나를 칭찬해요', cards: ['날마다 연습한 내가 멋져', '포기하지 않은 내가 대단해', '나는 원래 잘해', '한 번에 못 하면 끝이야'] },
                target: { pick: ['날마다 연습한 내가 멋져', '포기하지 않은 내가 대단해'] }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['날마다 연습한 내가 멋져', '포기하지 않은 내가 대단해', '나는 원래 잘해', '한 번에 못 하면 끝이야', '다른 사람이 해 주면 돼'] } } } },
              { prompt: '짝에게 내가 끝까지 해낸 일을 처음·가운데·끝으로 말하고 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"짝이 해낸 이야기에서 가운데 장면은 무엇이었나요?" 두세 명이 짝의 애쓴 과정을 소개하게 한다. 오늘 칭찬 카드에는 결과 대신 애쓴 과정을 써서 칭찬 상자에 넣는다. 출구 2번에서 "한 번에 해냈을 때만"을 고른 학생에게는 짝의 가운데 장면을 다시 떠올리게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { cards: [{ id: 'tear', text: '종이가 자꾸 찢어졌어요', motif: 'cloud' }, { id: 'slow', text: '천천히 다시 접었어요', motif: 'sun' }, { id: 'frog', text: '종이 개구리가 뛰었어요', motif: 'star' }], slots: ['처음', '가운데', '끝'] }, prompt: '종이 개구리를 접은 이야기를 차례대로 놓아 보세요.', target: { order: ['tear', 'slow', 'frog'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '나를 칭찬할 수 있는 때는 언제일까요?', options: ['한 번에 해냈을 때만', '어려워도 다시 해 보았을 때도'], answer: 1, difficulty: 0.1, explain: '포기하지 않고 다시 해 본 것도 칭찬할 일이에요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '끝까지 해냈어요',
      items: [
        { type: 'table', prompt: '내가 해낸 일을 차례대로 쓰세요.', columns: ['처음', '가운데', '끝'], rows: 1 },
        { type: 'choice', prompt: '어려울 때 나에게 하면 좋은 말에 ○ 하세요.', options: ['나는 원래 못해', '한 번 더 해 보자', '그만할래'], answer: '한 번 더 해 보자' },
        { type: 'blank', prompt: '____________을(를) 포기하지 않은 내가 대단해.' },
        { type: 'draw', prompt: '끝까지 해낸 내 모습을 그려 보세요.' },
      ],
      easy: {
        note: '처음에 어땠는지, 무엇을 했는지 떠올려요.',
        items: [
          { type: 'choice', prompt: '다시 해 볼 힘이 나는 말에 ○ 하세요.', options: ['한 번 더 해 보자', '나는 원래 못해'], answer: '한 번 더 해 보자' },
          { type: 'blank', prompt: '나는 ________을(를) 해냈어요.' },
          { type: 'draw', prompt: '끝까지 해낸 내 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 초록 테두리가 생기고, 고를 말이 두 가지예요. 활동지는 해낸 일 하나만 써요.',
      base: '장면을 모두 놓은 뒤 확인해요. 처음·가운데·끝 표를 채워요.',
      challenge: '이야기와 상관없는 함정 장면이 섞여 있고, 마음 짝이 세 개예요. 짝의 이야기도 표에 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 결과(해냈다)만 칭찬하고 애쓴 과정은 지나친다 → "가운데 장면이 없었다면?"을 되묻는다. ② "나는 원래 못해"를 자주 쓴다 → 교실 말로 "아직 못해"를 정해 두고 되풀이한다. ③ 해낸 일이 없다고 한다 → 젓가락질·옷 입기처럼 1학년이 된 뒤 익힌 일을 예로 건넨다. 칭찬 상자 카드는 48차시 단원 정리에서 다시 읽는다.',
  }));

  // ───────────────────────── 9~12차시: 하루의 흐름(아침·낮·저녁, 되풀이되는 일, 사람마다 다른 하루) ─────────────────────────

  // 콜라주 하늘 꾸미기 단계: 쉬움은 필요한 모양·색만, 기본은 조금 더, 도전은 모든 모양·색·크기
  var SKY_LV = {
    easy: { shapes: ['circle', 'semi', 'star', 'triangle'], colors: ['노랑', '하양', '주황', '빨강', '초록'], sizes: ['m', 'l'] },
    base: { shapes: ['circle', 'semi', 'star', 'triangle', 'rect', 'leaf'], colors: ['빨강', '주황', '노랑', '초록', '파랑', '하양', '검정'] },
    challenge: {},
  };

  lessons.push(L(9, {
    title: '하루에 하는 일을 아침·낮·저녁으로 나누기',
    objective: '하루에 하는 일을 아침·낮·저녁으로 나누어 놓고, 그때의 하늘을 색종이 조각으로 꾸밀 수 있다.',
    illustration: ART('a paper strip divided into three skies: a pale yellow morning with a rising sun, a bright blue midday and an orange evening with a setting sun, small children doing daily activities under each', '아침·낮·저녁', [
      { motif: 'house', x: 110, y: 214 }, { motif: 'tree', x: 240, y: 214 }, { motif: 'house', x: 370, y: 216, color: 'peach' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"창밖을 보세요. 지금 하늘은 아침 하늘일까요, 낮 하늘일까요?" 해의 높이와 밝기를 이야기한다. "오늘 아침에 일어나서 가장 먼저 한 일은?", "어젯밤 잠들기 전에 마지막으로 한 일은?"을 묻는다. 시연 단추로 하루 일이 아침·저녁 가지에 나뉘어 들어가는 모습을 보여 준다.',
        student: '오늘 아침에 가장 먼저 한 일과 어젯밤 마지막으로 한 일을 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '나의 하루', slots: [{ id: '아침', label: '아침', motif: 'sun' }, { id: '저녁', label: '저녁', motif: 'moon' }], cards: ['해가 뜨면 일어나요', '해가 지면 잠옷을 입어요'], shuffle: false }, sequence: [{ sort: { 아침: ['해가 뜨면 일어나요'], 저녁: ['해가 지면 잠옷을 입어요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 하루 일을 세 때로 나누기', minutes: 12, tool: 'mindmap',
            teacher: '"이 일은 해가 뜰 무렵에 할까요, 해가 높이 떴을 때 할까요, 해가 질 무렵에 할까요?" 카드 속 단서(아침밥, 점심, 해가 져요)에 손가락을 짚게 한다. 하루와 상관없는 함정 카드(생일, 여름 방학)는 날마다의 하루가 아니라는 것을 짚는다.',
            task: '하루 일 카드를 읽고 아침·낮·저녁 가지에 나누어 넣어요.',
            levels: CARD_LV,
            items: [
              { prompt: '하루 일을 아침·낮·저녁으로 나누어 보세요.', toolOptions: { topic: '나의 하루', slots: [{ id: '아침', label: '아침', motif: 'sun' }, { id: '낮', label: '낮', motif: 'cloud' }, { id: '저녁', label: '저녁', motif: 'moon' }], cards: ['아침밥을 먹어요', '점심밥을 먹어요', '저녁밥을 먹어요'] },
                target: { sort: { 아침: ['아침밥을 먹어요'], 낮: ['점심밥을 먹어요'], 저녁: ['저녁밥을 먹어요'] } }, difficulty: 0.05,
                hints: ['카드에서 언제인지 알려 주는 낱말을 찾아요.', '흔들리는 카드의 밥 이름을 다시 읽어요.', '아침밥은 아침, 점심밥은 낮, 저녁밥은 저녁이에요.'] },
              { prompt: '해의 모습을 보고 아침·낮·저녁으로 나누어 보세요.', toolOptions: { topic: '해를 보고', slots: [{ id: '아침', label: '아침', motif: 'sun' }, { id: '낮', label: '낮', motif: 'cloud' }, { id: '저녁', label: '저녁', motif: 'moon' }], cards: ['해가 떠오를 때 세수해요', '해가 머리 위에 있을 때 운동장에서 놀아요', '해가 질 때 집으로 돌아와요', '깜깜해지면 잠자리에 들어요'] },
                target: { sort: { 아침: ['해가 떠오를 때 세수해요'], 낮: ['해가 머리 위에 있을 때 운동장에서 놀아요'], 저녁: ['해가 질 때 집으로 돌아와요', '깜깜해지면 잠자리에 들어요'] } }, difficulty: 0.15,
                hints: ['카드에서 해가 어디에 있는지 알려 주는 말을 찾아요.', '흔들리는 카드의 해 모습을 다시 읽어요. 떠오를 때, 머리 위, 질 때 가운데 무엇인가요?', '떠오를 때는 아침, 머리 위는 낮, 해가 지고 깜깜해지면 저녁이에요.'] },
              { prompt: '하루 일만 나누어 보세요. 날마다의 하루가 아닌 카드는 남겨요.', toolOptions: { topic: '나의 하루', slots: [{ id: '아침', label: '아침', motif: 'sun' }, { id: '낮', label: '낮', motif: 'cloud' }, { id: '저녁', label: '저녁', motif: 'moon' }], cards: ['일어나서 이불을 개요', '학교에서 점심 놀이를 해요', '저녁에 일기를 써요', '여름 방학에 바다에 가요'] },
                target: { sort: { 아침: ['일어나서 이불을 개요'], 낮: ['학교에서 점심 놀이를 해요'], 저녁: ['저녁에 일기를 써요'] } }, difficulty: 0.2,
                hints: ['카드마다 날마다 하는 일인지 먼저 생각하고, 그다음 언제 하는지 찾아요.', '흔들리는 카드가 날마다 하는 일인지 다시 생각해요.', '여름 방학 바다는 날마다 하는 일이 아니라서 남겨요.'],
                levels: { challenge: { toolOptions: { cards: ['일어나서 이불을 개요', '학교에서 점심 놀이를 해요', '저녁에 일기를 써요', '여름 방학에 바다에 가요', '생일에 케이크를 먹어요'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 아침·낮·저녁 하늘 꾸미기', minutes: 14, tool: 'collage',
            teacher: '"아침 해와 저녁 해는 색이 어떻게 다를까요?" 해 질 무렵 하늘을 떠올리게 한다. 화면에서 조각을 붙이며 \'붙이기·옮기기·돌리기\' 단추를 함께 눌러 본다. 문항을 마친 뒤 활동지 세 칸에 아침·낮·저녁에 내가 하는 일을 하나씩 크레파스로 그리게 한다. 그리기가 끝나지 않은 학생은 정리 시간 뒤에 이어서 그려도 된다고 알려 준다.',
            task: '색종이 조각으로 때마다 다른 하늘을 꾸미고, 활동지 세 칸에 내 하루를 그려요.',
            levels: SKY_LV,
            items: [
              { prompt: '아침 하늘을 꾸며요. 노랑 동그라미 해를 하나, 하양 동그라미 구름을 두 개 이상 붙여 보세요.', target: { has: [{ shape: 'circle', color: '노랑', n: 1 }, { shape: 'circle', color: '하양', min: 2 }] }, difficulty: 0.1,
                levels: { challenge: { prompt: '아침 하늘을 꾸며요. 노랑 동그라미 해 하나, 하양 동그라미 구름 둘 이상, 초록 세모 나무 하나를 붙여 보세요.', target: { has: [{ shape: 'circle', color: '노랑', n: 1 }, { shape: 'circle', color: '하양', min: 2 }, { shape: 'triangle', color: '초록', n: 1 }] } } } },
              { prompt: '밤하늘을 꾸며요. 노랑 반원 달을 하나, 노랑 별을 세 개 이상 붙여 보세요.', toolOptions: { bg: '파랑' }, target: { has: [{ shape: 'semi', color: '노랑', n: 1 }, { shape: 'star', color: '노랑', min: 3 }] }, difficulty: 0.15,
                levels: { challenge: { prompt: '밤하늘을 꾸며요. 노랑 반원 달 하나와 작은 크기의 노랑 별을 세 개 이상 붙여 보세요.', target: { has: [{ shape: 'semi', color: '노랑', n: 1 }, { shape: 'star', color: '노랑', size: 's', min: 3 }] } } } },
              { prompt: '저녁 하늘을 꾸며요. 주황 동그라미 해를 하나, 노을을 나타내는 빨강 조각을 두 개 이상 붙여 보세요.', target: { has: [{ shape: 'circle', color: '주황', n: 1 }, { color: '빨강', min: 2 }] }, difficulty: 0.15,
                levels: { challenge: { prompt: '저녁 하늘을 꾸며요. 주황 동그라미 해 하나, 빨강 노을 조각 둘 이상, 검정 세모 산 하나를 붙여 보세요.', target: { has: [{ shape: 'circle', color: '주황', n: 1 }, { color: '빨강', min: 2 }, { shape: 'triangle', color: '검정', n: 1 }] } } } },
              { prompt: '활동지 세 칸에 아침·낮·저녁에 내가 하는 일을 하나씩 그렸으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"짝의 활동지 세 칸 그림을 보고, 짝과 내가 똑같이 하는 일을 찾아볼까요?" 두세 짝이 찾은 것을 말하게 한다. 날마다 하는 일은 다음 시간에 더 살펴본다고 예고한다. 출구 1번에서 카드를 다른 때에 넣은 학생은 카드 속 때를 알려 주는 말(세수, 점심, 목욕)을 다시 찾아보게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '쉬는 날 하루', slots: [{ id: '아침', label: '아침', motif: 'sun' }, { id: '낮', label: '낮', motif: 'cloud' }, { id: '저녁', label: '저녁', motif: 'moon' }], cards: ['일어나서 세수해요', '점심 먹고 놀이터에 가요', '해가 지면 목욕해요'] }, prompt: '쉬는 날 하루 일을 아침·낮·저녁으로 나누어 보세요.', target: { sort: { 아침: ['일어나서 세수해요'], 낮: ['점심 먹고 놀이터에 가요'], 저녁: ['해가 지면 목욕해요'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '해가 질 무렵 하늘은 어떤 색에 가까울까요?', options: ['주황색과 빨간색', '깜깜한 검은색'], answer: 0, difficulty: 0.15, explain: '해가 질 때는 하늘이 주황빛, 붉은빛으로 물들어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '나의 하루 세 칸',
      items: [
        { type: 'table', prompt: '아침·낮·저녁에 하는 일을 하나씩 쓰세요.', columns: ['아침', '낮', '저녁'], rows: 1 },
        { type: 'choice', prompt: '저녁에 하는 일에 ○ 하세요.', options: ['아침밥을 먹어요', '점심 놀이를 해요', '잠자리에 들어요'], answer: '잠자리에 들어요' },
        { type: 'choice', prompt: '날마다 하는 하루 일이 아닌 것에 ○ 하세요.', options: ['이불을 개요', '여름 방학에 바다에 가요', '저녁밥을 먹어요'], answer: '여름 방학에 바다에 가요' },
        { type: 'draw', prompt: '아침·낮·저녁에 내가 하는 일을 세 칸으로 나누어 그려 보세요.' },
      ],
      easy: {
        note: '해가 뜰 때, 머리 위에 있을 때, 질 때!',
        items: [
          { type: 'choice', prompt: '아침에 하는 일에 ○ 하세요.', options: ['일어나요', '잠옷을 입어요'], answer: '일어나요' },
          { type: 'choice', prompt: '저녁에 하는 일에 ○ 하세요.', options: ['아침밥을 먹어요', '잠자리에 들어요'], answer: '잠자리에 들어요' },
          { type: 'draw', prompt: '아침과 저녁에 하는 일을 하나씩 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 가지에 초록 테두리가 생겨요. 하늘 꾸미기는 필요한 모양 네 가지, 색 다섯 가지만 나와요.',
      base: '카드를 모두 나누고 확인해요. 모양 여섯 가지, 색 일곱 가지로 꾸며요.',
      challenge: '날마다의 하루가 아닌 함정 카드가 더 있고, 하늘에 나무·산을 더하거나 작은 별만 쓰는 조건이 붙어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① "학교에서 공부해요"처럼 아침과 낮에 걸친 일을 어디에 넣을지 헷갈린다 → 화면 카드에는 그런 카드를 넣지 않았고, 활동지에서 나오면 둘 다 맞다고 말해 준다. ② 저녁과 밤을 구별하지 못한다 → 이 단원에서는 해가 진 뒤를 모두 "저녁"으로 묶는다. ③ 하늘 꾸미기에서 조각을 계속 붙이기만 한다 → 문항의 조각 수를 손가락으로 세게 한다. 활동지 세 칸 그림은 17차시(한 주 그림 이어 보기)에 다시 쓰니 모아 둔다.',
  }));

  lessons.push(L(10, {
    title: '날마다 되풀이되는 일 찾기',
    objective: '하루에 하는 일 가운데 날마다 되풀이되는 일과 가끔 하는 일을 나누고, 낮과 밤이 되풀이되는 모습을 무늬로 나타낼 수 있다.',
    illustration: ART('a paper calendar strip where each day shows the same little sun and moon pair repeating, a toothbrush and a bowl drawn under every day, and a birthday cake under only one day', '날마다 되풀이돼요', [
      { motif: 'star', x: 120, y: 84, s: 0.5 }, { motif: 'house', x: 380, y: 214, color: 'sky' }, { motif: 'tree', x: 240, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"어제도 하고, 오늘도 하고, 내일도 할 일은 무엇일까요?" 몸짓으로 하나를 흉내 내고(이 닦기) 학생이 맞히게 한다. 이어서 "생일잔치는 어제도, 오늘도, 내일도 할까요?" 하고 묻는다. 시연 단추로 날마다 하는 일과 가끔 하는 일이 나뉘는 모습을 보여 준다.',
        student: '어제도 하고 오늘도 한 일을 몸짓으로 짝에게 보여 주고 맞혀 봐요.',
        demo: { tool: 'mindmap', options: { topic: '내가 하는 일', slots: ['날마다 해요', '가끔 해요'], cards: ['이를 닦아요', '생일잔치를 해요'], shuffle: false }, sequence: [{ sort: { '날마다 해요': ['이를 닦아요'], '가끔 해요': ['생일잔치를 해요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 날마다 하는 일과 가끔 하는 일', minutes: 13, tool: 'mindmap',
            teacher: '"이 일을 어제도 했나요? 그제도 했나요?" 카드마다 손가락을 접어 가며 세게 한다. 날마다 되풀이되는 일은 하루를 받쳐 주는 기둥이라는 것을 짚는다. 활동을 마친 뒤 짝과 몸짓 퀴즈를 한다: 한 사람이 날마다 하는 일을 몸짓으로 보이면 다른 사람이 맞힌다.',
            task: '카드를 날마다 하는 일과 가끔 하는 일로 나누고, 짝과 몸짓 퀴즈를 해요.',
            levels: CARD_LV,
            items: [
              { prompt: '날마다 하는 일과 가끔 하는 일로 나누어 보세요.', toolOptions: { topic: '내가 하는 일', slots: ['날마다 해요', '가끔 해요'], cards: ['밥을 먹어요', '잠을 자요', '소풍을 가요', '할머니 댁에 가요'] },
                target: { sort: { '날마다 해요': ['밥을 먹어요', '잠을 자요'], '가끔 해요': ['소풍을 가요', '할머니 댁에 가요'] } }, difficulty: 0.05,
                hints: ['카드마다 "어제도, 오늘도 했나?"를 물어요.', '흔들리는 카드를 어제도 했는지 다시 떠올려 봐요.', '밥 먹기와 잠자기는 날마다, 소풍과 할머니 댁은 가끔 해요.'] },
              { prompt: '아침에 날마다 하는 일과 가끔 하는 일로 나누어 보세요.', toolOptions: { topic: '나의 아침', slots: ['날마다 해요', '가끔 해요'], cards: ['세수를 해요', '옷을 입어요', '운동회에 가요', '치과에 가요'] },
                target: { sort: { '날마다 해요': ['세수를 해요', '옷을 입어요'], '가끔 해요': ['운동회에 가요', '치과에 가요'] } }, difficulty: 0.1,
                levels: { challenge: { prompt: '아침에 하는 일을 나누어 보세요. 사람이 하는 일이 아닌 카드는 남겨요.', toolOptions: { cards: ['세수를 해요', '옷을 입어요', '운동회에 가요', '치과에 가요', '해가 떠요'] } } } },
              { prompt: '날마다 되풀이되는 일만 골라 보세요.', toolOptions: { mode: 'pick', basket: '날마다 되풀이돼요', cards: ['해가 떴다가 져요', '이를 닦아요', '눈이 펑펑 와요', '입학식을 해요'] },
                target: { pick: ['해가 떴다가 져요', '이를 닦아요'] }, difficulty: 0.2,
                predict: { q: '해가 뜨고 지는 것도 날마다 되풀이될까요?', options: ['날마다 돼요', '가끔 돼요'], answer: 0 },
                conclude: '해가 뜨고 지는 것처럼 하루는 날마다 되풀이되고, 그 속에서 우리도 날마다 하는 일이 있어요.' },
              { prompt: '짝과 날마다 하는 일 몸짓 퀴즈를 세 번 했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 낮과 밤이 되풀이되는 무늬 만들기', minutes: 13, tool: 'collage',
            teacher: '"해 다음에 달, 또 해 다음에 달… 이렇게 되풀이되는 것을 무늬로 만들어 볼까요?" 판 왼쪽부터 오른쪽으로 묶음을 이어 놓게 한다. 묶음이 몇 번 되풀이되었는지 손가락으로 세게 한다. "하루가 지나면 해와 달이 한 번씩 지나가요"라고 말해 묶음 하나가 하루라는 것을 짚는다.',
            task: '해와 달 조각을 왼쪽부터 같은 차례로 이어 붙여 되풀이되는 무늬를 만들어요.',
            levels: {
              easy: { shapes: ['circle', 'semi', 'star'], colors: ['노랑', '주황', '하양'], sizes: ['m'] },
              base: { shapes: ['circle', 'semi', 'star', 'square', 'heart'], colors: ['빨강', '주황', '노랑', '초록', '파랑', '하양'], sizes: ['m', 'l'] },
              challenge: {},
            },
            items: [
              { prompt: '해(동그라미)와 달(반원)을 한 묶음으로 왼쪽부터 세 번 넘게 되풀이해 붙여 보세요.', target: { repeat: { times: 3, unit: 2 }, has: [{ shape: 'circle', min: 3 }, { shape: 'semi', min: 3 }] }, difficulty: 0.15,
                levels: { challenge: { prompt: '해(동그라미)·달(반원)·별을 한 묶음으로 왼쪽부터 세 번 넘게 되풀이해 붙여 보세요.', target: { repeat: { times: 3, unit: 3 }, has: [{ shape: 'circle', min: 3 }, { shape: 'semi', min: 3 }, { shape: 'star', min: 3 }] } } } },
              { prompt: '보기 무늬가 시작되어 있어요. 같은 묶음을 이어 붙여 네 번 넘게 되풀이해 보세요.', state: { pieces: [{ shape: 'circle', color: '주황', size: 'm', x: 60, y: 200, r: 0 }, { shape: 'semi', color: '노랑', size: 'm', x: 120, y: 200, r: 0 }] }, target: { repeat: { times: 4, unit: 2 } }, difficulty: 0.2 },
              { prompt: '세로로 해와 달을 되풀이해요. 위에서 아래로 해·달 묶음을 세 번 넘게 붙여 보세요.', target: { repeat: { times: 3, unit: 2, axis: 'y' }, has: [{ shape: 'circle', min: 3 }, { shape: 'semi', min: 3 }] }, difficulty: 0.2 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"우리 반이 날마다 되풀이하는 일은 무엇이 있을까요?" 아침 인사, 급식 먹기처럼 학교의 일을 말하게 한다. "날마다 되풀이하는 일을 잘하면 하루가 편해져요"라고 말한다. 출구 1번에서 외식이나 불꽃놀이를 날마다 하는 일에 넣은 학생은 어제와 그제 저녁을 떠올려 보게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '나의 저녁', slots: ['날마다 해요', '가끔 해요'], cards: ['저녁밥을 먹어요', '잠옷으로 갈아입어요', '외식을 해요', '불꽃놀이를 봐요'] }, prompt: '저녁에 하는 일을 날마다 하는 일과 가끔 하는 일로 나누어 보세요.', target: { sort: { '날마다 해요': ['저녁밥을 먹어요', '잠옷으로 갈아입어요'], '가끔 해요': ['외식을 해요', '불꽃놀이를 봐요'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '"아침에 세수하기"는 어떤 일일까요?', options: ['날마다 되풀이하는 일', '가끔 하는 일'], answer: 0, difficulty: 0.05, explain: '세수는 아침마다 되풀이하는 일이에요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '날마다 되풀이되는 일',
      items: [
        { type: 'figure', wide: true, prompt: '카드를 날마다 하는 일과 가끔 하는 일로 나누어 선으로 이으세요.', tool: 'mindmap', figures: [{ options: { topic: '내가 하는 일', slots: ['날마다 해요', '가끔 해요'], cards: ['이를 닦아요', '소풍을 가요', '잠을 자요'] }, caption: '' }], answer: '날마다: 이 닦기·잠자기, 가끔: 소풍' },
        { type: 'check', prompt: '날마다 하는 일에 모두 ✓ 하세요.', options: ['밥을 먹어요', '운동회에 가요', '옷을 입어요', '입학식을 해요'] },
        { type: 'short', prompt: '내가 날마다 되풀이하는 일을 하나 쓰세요.' },
        { type: 'draw', prompt: '해와 달이 되풀이되는 무늬를 그려 보세요.' },
      ],
      easy: {
        note: '어제도, 오늘도, 내일도 하는 일!',
        items: [
          { type: 'choice', prompt: '날마다 하는 일에 ○ 하세요.', options: ['이를 닦아요', '소풍을 가요'], answer: '이를 닦아요' },
          { type: 'choice', prompt: '가끔 하는 일에 ○ 하세요.', options: ['밥을 먹어요', '운동회에 가요'], answer: '운동회에 가요' },
          { type: 'draw', prompt: '해와 달을 번갈아 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 가지에 초록 테두리가 생겨요. 무늬는 동그라미·반원·별과 색 세 가지만 나와요.',
      base: '카드를 모두 나누고 확인해요. 무늬를 가로와 세로로 이어 붙여요.',
      challenge: '사람이 하는 일이 아닌 함정 카드가 있고, 무늬 묶음이 세 조각으로 늘어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 좋아하는 일을 날마다 하는 일로 넣는다(게임, 놀이터) → "어제도, 그제도 했나?"를 손가락으로 세게 한다. ② 무늬에서 묶음 차례가 중간에 바뀐다 → 맨 앞 묶음을 손가락으로 덮고 같은 차례를 찾게 한다. ③ 해가 뜨고 지는 것을 사람이 하는 일과 섞는다 → 둘 다 날마다 되풀이된다는 것은 맞고, 함정 카드 문항(도전)에서는 "사람이 하는 일"만 고른다는 조건을 다시 읽게 한다.',
  }));

  lessons.push(L(11, {
    title: '사람마다 다른 하루 살펴보기',
    objective: '같은 시각에도 사람마다 하는 일이 다르다는 것을 알고, 다른 하루를 사는 사람이 하는 일과 고마운 까닭을 이을 수 있다.',
    illustration: ART('a paper town at night where most houses are dark and sleeping, while a hospital window, a bakery oven and a street sweeper glow warmly', '같은 시각, 다른 하루', [
      { motif: 'house', x: 110, y: 214, color: 'lavender' }, { motif: 'house', x: 370, y: 216, color: 'peach' }, { motif: 'star', x: 250, y: 80, s: 0.5 }], true),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"밤 10시, 여러분은 무엇을 하고 있나요?" 대부분 "자요"라고 답하면 "그 시각에 병원에서는 누가 무엇을 하고 있을까요?"를 묻는다. 하루는 누구에게나 똑같이 흘러가지 않고, 사람마다 일하는 때와 쉬는 때가 다르다는 것을 짚는다(하루는 모두에게 똑같다는 생각). 시연 단추로 같은 시각의 두 사람에게 다른 일이 이어지는 모습을 보여 준다.',
        student: '밤 10시에 깨어 일하는 사람을 한 사람 떠올려 말해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '밤 10시', slots: [{ id: 's1', label: '1학년 민지' }, { id: 's2', label: '병원 간호사' }], cards: ['이불을 덮고 자요', '아픈 사람을 돌봐요'], shuffle: false }, sequence: [{ match: { s1: '이불을 덮고 자요', s2: '아픈 사람을 돌봐요' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 같은 시각, 누가 무엇을 할까', minutes: 13, tool: 'mindmap',
            teacher: '"새벽 4시에 빵집 주인은 왜 벌써 일어났을까요?" 아침에 사람들이 빵을 사 가려면 미리 구워야 한다는 까닭을 함께 찾는다. 사람마다 일하는 때가 다른 까닭을 말하게 한다. 밤에 일하고 낮에 자는 이웃 이야기에서는 그 이웃을 위해 낮에 내가 할 수 있는 일을 고르게 한다.',
            task: '시각과 사람을 보고 그 사람이 하는 일을 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '시각과 사람을 보고 하는 일을 이어 보세요.', toolOptions: { mode: 'match', topic: '사람마다 다른 하루', slots: [{ id: 's1', label: '새벽 4시, 빵집 주인' }, { id: 's2', label: '밤 10시, 1학년 준호' }, { id: 's3', label: '밤 10시, 소방관' }], cards: ['아침에 팔 빵을 구워요', '잠을 자요', '불이 나면 바로 출동해요'] },
                target: { match: { s1: '아침에 팔 빵을 구워요', s2: '잠을 자요', s3: '불이 나면 바로 출동해요' } }, difficulty: 0.1,
                hints: ['사람이 하는 일을 먼저 떠올리고, 그 시각에 깨어 있는지 생각해요.', '흔들리는 카드가 그 사람이 하는 일인지 다시 읽어요.', '빵집 주인은 빵 굽기, 1학년은 잠자기, 소방관은 출동 준비예요.'],
                levels: { challenge: { toolOptions: { cards: ['아침에 팔 빵을 구워요', '잠을 자요', '불이 나면 바로 출동해요', '운동장에서 점심 놀이를 해요'] } } } },
              { prompt: '우리가 잠든 밤에도 깨어 일하는 사람만 골라 보세요.', toolOptions: { mode: 'pick', basket: '밤에도 일해요', cards: ['병원 간호사', '소방관', '1학년 동생', '우리 반 짝'] },
                target: { pick: ['병원 간호사', '소방관'] }, difficulty: 0.15,
                predict: { q: '밤 11시에는 모든 사람이 잠을 잘까요?', options: ['모두 자요', '깨어 일하는 사람도 있어요'], answer: 1 },
                conclude: '같은 밤에도 깨어 일하는 사람이 있어요. 하루는 사람마다 다르게 흘러가요.',
                hints: ['그 사람이 밤에도 꼭 있어야 하는 일을 하는지 생각해요.', '흔들리는 카드의 사람이 밤에 깨어 있어야 할 까닭이 있는지 다시 생각해요.', '아픈 사람과 불은 밤에도 생기니 간호사와 소방관은 밤에도 일해요.'] },
              { prompt: '아랫집 아저씨는 밤에 일하고 낮에 자요. 쉬는 날 낮에 할 일만 골라 보세요.', toolOptions: { mode: 'pick', basket: '낮에 자는 이웃을 위해', cards: ['집 안에서는 살금살금 걸어요', '뛰고 싶으면 놀이터에 나가요', '거실에서 쿵쿵 뛰어요', '창문을 열고 노래를 크게 틀어요'] },
                target: { pick: ['집 안에서는 살금살금 걸어요', '뛰고 싶으면 놀이터에 나가요'] }, difficulty: 0.15,
                hints: ['아저씨가 언제 잠을 자는지 먼저 읽고, 그때 들리는 소리를 떠올려요.', '흔들리는 카드의 행동이 아랫집까지 소리를 내는지 다시 생각해요.', '살금살금 걷기와 놀이터에 나가기는 아랫집 아저씨의 잠을 깨우지 않아요.'],
                levels: { challenge: { toolOptions: { cards: ['집 안에서는 살금살금 걸어요', '뛰고 싶으면 놀이터에 나가요', '거실에서 쿵쿵 뛰어요', '창문을 열고 노래를 크게 틀어요', '현관문을 쾅 닫아요'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 다른 하루를 사는 사람에게 고마운 마음', minutes: 13, tool: 'mindmap',
            teacher: '"우리가 아침에 깨끗한 길로 학교에 올 수 있는 것은 누구 덕분일까요?" 새벽에 일하는 사람들을 떠올리게 한다. 문항을 마치면 짝과 "우리 가족은 몇 시에 일어나고 몇 시에 자는지" 서로 말해 보고, 같은 집 안에서도 하루가 다를 수 있다는 것을 찾게 한다. 활동지에 고마운 사람에게 한 줄 편지를 쓴다.',
            task: '다른 하루를 사는 사람과 고마운 까닭을 잇고, 짝과 우리 가족의 하루를 견주어요.',
            levels: CARD_LV,
            items: [
              { prompt: '사람과 고마운 까닭을 이어 보세요.', toolOptions: { mode: 'match', topic: '고마운 사람들', slots: [{ id: 's1', label: '밤에 일하는 간호사' }, { id: 's2', label: '새벽에 길을 쓰는 환경미화원' }, { id: 's3', label: '아침 일찍 빵을 굽는 제빵사' }], cards: ['아플 때 돌봐 줘서 고마워요', '길을 깨끗하게 해 줘서 고마워요', '아침 빵을 만들어 줘서 고마워요'] },
                target: { match: { s1: '아플 때 돌봐 줘서 고마워요', s2: '길을 깨끗하게 해 줘서 고마워요', s3: '아침 빵을 만들어 줘서 고마워요' } }, difficulty: 0.1,
                hints: ['사람이 하는 일을 먼저 읽고, 그 일 덕분에 내가 무엇이 좋아졌는지 찾아요.', '흔들리는 카드의 고마운 까닭이 그 사람의 일과 이어지는지 다시 읽어요.', '간호사는 돌봄, 환경미화원은 깨끗한 길, 제빵사는 빵이에요.'],
                levels: { challenge: { toolOptions: { cards: ['아플 때 돌봐 줘서 고마워요', '길을 깨끗하게 해 줘서 고마워요', '아침 빵을 만들어 줘서 고마워요', '숙제를 대신 해 줘서 고마워요'] } } } },
              { prompt: '우리 집 하루예요. 시각과 그때 일하는 사람을 이어 보세요.', toolOptions: { mode: 'match', topic: '우리 집 하루', slots: [{ id: 's1', label: '아침 6시에 출근하는 엄마' }, { id: 's2', label: '저녁 7시에 퇴근하는 아빠' }], cards: ['내가 일어나기 전에 집을 나서요', '저녁밥 먹을 때 집에 와요'] },
                target: { match: { s1: '내가 일어나기 전에 집을 나서요', s2: '저녁밥 먹을 때 집에 와요' } }, difficulty: 0.15,
                hints: ['시각이 내 하루의 언제쯤인지 먼저 생각해요.', '흔들리는 카드의 때가 아침인지 저녁인지 다시 읽어요.', '아침 6시는 내가 일어나기 전, 저녁 7시는 저녁밥 때예요.'],
                levels: { challenge: { prompt: '우리 집 하루예요. 시각과 그때의 일을 이어 보세요.', toolOptions: { slots: [{ id: 's1', label: '아침 6시에 출근하는 엄마' }, { id: 's2', label: '저녁 7시에 퇴근하는 아빠' }, { id: 's3', label: '낮 2시에 학교에서 돌아오는 나' }], cards: ['내가 일어나기 전에 집을 나서요', '저녁밥 먹을 때 집에 와요', '점심 먹고 집에 와요'] }, target: { match: { s1: '내가 일어나기 전에 집을 나서요', s2: '저녁밥 먹을 때 집에 와요', s3: '점심 먹고 집에 와요' } } } } },
              { prompt: '짝과 우리 가족이 일어나는 시각과 자는 시각을 견주어 말했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"짝네 가족과 우리 가족의 하루가 똑같았나요?" 두세 명이 다른 점을 말하게 한다. 활동지에 쓴 한 줄 편지는 학교 보안관, 급식실 조리사처럼 학교에서 우리보다 일찍 일하는 분께 전해도 좋다고 안내한다. 출구 2번에서 "모두 똑같아요"를 고른 학생에게는 밤에 일하는 사람을 다시 떠올리게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '새벽 5시', slots: [{ id: 'e1', label: '우유 배달하는 아저씨' }, { id: 'e2', label: '1학년 서아' }], cards: ['집집마다 우유를 놓아요', '아직 꿈나라에 있어요'] }, prompt: '새벽 5시에 두 사람이 하는 일을 이어 보세요.', target: { match: { e1: '집집마다 우유를 놓아요', e2: '아직 꿈나라에 있어요' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '하루는 모든 사람에게 똑같이 흘러갈까요?', options: ['모두 똑같아요', '사람마다 일하고 쉬는 때가 달라요'], answer: 1, difficulty: 0.1, explain: '밤에 일하고 낮에 자는 사람처럼 하루는 사람마다 달라요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '사람마다 다른 하루',
      items: [
        { type: 'figure', wide: true, prompt: '사람과 하는 일을 선으로 이으세요.', tool: 'mindmap', figures: [{ options: { mode: 'match', topic: '밤 10시', slots: [{ id: 's1', label: '병원 간호사' }, { id: 's2', label: '1학년 준호' }], cards: ['잠을 자요', '아픈 사람을 돌봐요'] }, caption: '' }], answer: '간호사-돌봐요, 준호-잠을 자요' },
        { type: 'table', prompt: '우리 가족이 일어나는 시각을 써 보세요.', columns: ['가족', '일어나는 시각'], rows: 3 },
        { type: 'choice', prompt: '밤에 일하고 낮에 자는 이웃을 위해 할 일에 ○ 하세요.', options: ['낮에 쿵쿵 뛰어요', '낮에 집 안에서 살금살금 걸어요'], answer: '낮에 집 안에서 살금살금 걸어요' },
        { type: 'short', prompt: '우리보다 일찍 일어나 일하는 분께 한 줄 편지를 쓰세요.' },
      ],
      easy: {
        note: '같은 시각에도 하는 일이 달라요.',
        items: [
          { type: 'choice', prompt: '밤에도 일하는 사람에 ○ 하세요.', options: ['소방관', '1학년 동생'], answer: '소방관' },
          { type: 'choice', prompt: '새벽에 빵을 굽는 사람에 ○ 하세요.', options: ['제빵사', '우체부'], answer: '제빵사' },
          { type: 'draw', prompt: '고마운 사람을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞게 이으면 초록 테두리가 생겨요. 우리 집 하루는 두 줄만 이어요.',
      base: '모두 이은 뒤 확인을 눌러요. 우리 가족 일어나는 시각을 세 줄 써요.',
      challenge: '함정 카드가 하나씩 더 있고, 우리 집 하루가 세 줄이에요. 한 줄 편지에 고마운 까닭까지 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 하루는 누구에게나 똑같이 흐른다고 여긴다(핵심 오개념) → 밤 10시에 깨어 일하는 사람을 여럿 떠올리게 한다. ② 가족 이야기를 하기 어려워하는 학생이 있다 → 가족 대신 "우리 집 근처에서 일하는 분"으로 바꾸어 말해도 된다고 미리 알린다. ③ 밤에 일하는 직업을 무섭거나 이상하게 여긴다 → 그 덕분에 우리가 편하게 지낸다는 고마움으로 마무리한다.',
  }));

  lessons.push(L(12, {
    title: '학교 가는 날과 쉬는 날의 하루 견주기',
    objective: '학교 가는 날과 쉬는 날에 하는 일을 견주어 나누고, 쉬는 날에도 지킬 습관을 넣어 하루 계획을 세울 수 있다.',
    illustration: ART('two paper calendar pages side by side: a school day with a school bag and lunch tray, and a weekend day with a picnic basket and a kite, both sharing a toothbrush in the corner', '학교 가는 날, 쉬는 날', [
      { motif: 'house', x: 110, y: 214, color: 'buttercup' }, { motif: 'tree', x: 380, y: 214 }, { motif: 'bird', x: 220, y: 84 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"지난 토요일 아침에는 몇 시에 일어났나요? 학교 가는 날과 같았나요?" 두세 명의 대답을 듣는다. "학교 가는 날과 쉬는 날은 무엇이 다르고 무엇이 같을까요?" 시연 단추로 두 날에 하는 일이 갈래에 나뉘는 모습을 보여 준다. 두 날 모두 하는 일이 있다는 것에 주목하게 한다.',
        student: '지난 토요일에 한 일 하나와 어제 한 일 하나를 짝에게 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '두 날 견주기', slots: ['학교 가는 날', '두 날 모두'], cards: ['급식을 먹어요', '이를 닦아요'], shuffle: false }, sequence: [{ sort: { '학교 가는 날': ['급식을 먹어요'], '두 날 모두': ['이를 닦아요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 두 날에 하는 일 나누기', minutes: 13, tool: 'mindmap',
            teacher: '"이 일은 학교에 가야만 할 수 있나요?" "쉬는 날에도 하나요?" 두 질문을 차례로 던지게 한다. 두 날 모두 하는 일은 날마다 되풀이되는 일(10차시)과 이어진다는 것을 짚는다. 쉬는 날에는 습관을 지키지 않아도 된다고 말하는 학생에게 "쉬는 날에도 밥 먹기 전에 손을 씻나요?"를 묻는다.',
            task: '카드를 학교 가는 날, 쉬는 날, 두 날 모두로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '카드를 세 갈래로 나누어 보세요.', toolOptions: { topic: '두 날 견주기', slots: ['학교 가는 날', '쉬는 날', '두 날 모두'], cards: ['알림장을 써요', '하루 종일 가족과 나들이해요', '잠을 자요'] },
                target: { sort: { '학교 가는 날': ['알림장을 써요'], '쉬는 날': ['하루 종일 가족과 나들이해요'], '두 날 모두': ['잠을 자요'] } }, difficulty: 0.1,
                hints: ['카드마다 "학교에 가야만 하나?", "쉬는 날에도 하나?"를 차례로 물어요.', '흔들리는 카드를 쉬는 날에도 하는지 다시 생각해요.', '알림장은 학교 가는 날, 하루 종일 나들이는 쉬는 날, 잠자기는 두 날 모두예요.'] },
              { prompt: '새 카드도 세 갈래로 나누어 보세요.', toolOptions: { topic: '두 날 견주기', slots: ['학교 가는 날', '쉬는 날', '두 날 모두'], cards: ['교실에서 받아쓰기를 해요', '급식실에서 점심을 먹어요', '밥 먹기 전에 손을 씻어요', '이를 닦아요'] },
                target: { sort: { '학교 가는 날': ['교실에서 받아쓰기를 해요', '급식실에서 점심을 먹어요'], '두 날 모두': ['밥 먹기 전에 손을 씻어요', '이를 닦아요'] } }, difficulty: 0.15,
                hints: ['카드마다 학교에서만 하는 일인지, 집에서도 하는 일인지 따져요.', '흔들리는 카드를 쉬는 날에도 하는지 다시 생각해요.', '받아쓰기·급식실은 학교 가는 날, 손 씻기·이 닦기는 두 날 모두예요.'],
                levels: { challenge: { prompt: '새 카드를 나누어 보세요. 사람이 하는 일이 아닌 카드는 남겨요.', toolOptions: { cards: ['교실에서 받아쓰기를 해요', '급식실에서 점심을 먹어요', '밥 먹기 전에 손을 씻어요', '이를 닦아요', '달이 떠요'] } } } },
              { prompt: '쉬는 날에도 지킬 습관만 골라 보세요.', toolOptions: { mode: 'pick', basket: '쉬는 날에도 지켜요', cards: ['밥 먹기 전에 손 씻기', '정한 시간에 잠자기', '하루 종일 게임하기', '밤늦게 만화 보기'] },
                target: { pick: ['밥 먹기 전에 손 씻기', '정한 시간에 잠자기'] }, difficulty: 0.15,
                predict: { q: '쉬는 날에는 몸 습관을 쉬어도 될까요?', options: ['쉬어도 돼요', '쉬는 날에도 지켜요'], answer: 1 },
                conclude: '손 씻기와 잠자리 시간 같은 몸 습관은 쉬는 날에도 지켜요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 쉬는 날 하루 계획 세우기', minutes: 13, tool: 'kitchen',
            teacher: '"쉬는 날에 하고 싶은 일을 아침·낮·저녁에 하나씩 넣어 볼까요?" 화면 문항으로 계획표 짜는 방법을 익힌 뒤, 활동지 계획표에 내 쉬는 날 계획을 쓰게 한다. 놀이만 가득 넣는 학생에게 "그날 손은 언제 씻나요? 몇 시에 자나요?"라고 물어 습관 칸을 채우게 한다.',
            task: '쉬는 날 계획표의 때와 할 일을 잇고, 활동지에 내 쉬는 날 계획을 써요.',
            levels: CARD_LV,
            items: [
              { prompt: '토요일 계획표예요. 때와 할 일을 이어 보세요.', toolOptions: { mode: 'match', slots: [{ id: 's1', label: '아침 9시' }, { id: 's2', label: '낮 12시' }, { id: 's3', label: '밤 9시' }], cards: ['아침밥을 먹고 공원을 걸어요', '손을 씻고 점심밥을 먹어요', '양치하고 잠자리에 들어요'] },
                target: { match: { s1: '아침밥을 먹고 공원을 걸어요', s2: '손을 씻고 점심밥을 먹어요', s3: '양치하고 잠자리에 들어요' } }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['아침밥을 먹고 공원을 걸어요', '손을 씻고 점심밥을 먹어요', '양치하고 잠자리에 들어요', '밤새도록 게임을 해요'] } } } },
              { prompt: '일요일 저녁 할 일을 차례대로 놓아 보세요. 앞의 두 일은 어느 것을 먼저 해도 돼요.', toolOptions: { mode: 'order', cards: ['알림장을 보고 가방을 챙겨요', '씻고 잠옷을 입어요', '정한 시간에 잠자리에 들어요'] },
                target: { order: [['알림장을 보고 가방을 챙겨요', '씻고 잠옷을 입어요'], '정한 시간에 잠자리에 들어요'] }, difficulty: 0.15,
                hints: ['맨 마지막에 하는 일을 먼저 찾아요.', '흔들리는 카드가 잠들기 전에 할 수 있는 일인지 생각해요.', '가방 챙기기와 씻기는 어느 것을 먼저 해도 되고, 잠자리에 드는 것이 마지막이에요.'],
                levels: { challenge: { prompt: '일요일 저녁 할 일을 차례대로 놓아 보세요. 내일 학교 준비와 상관없는 카드는 남겨요.', toolOptions: { cards: ['알림장을 보고 가방을 챙겨요', '씻고 잠옷을 입어요', '정한 시간에 잠자리에 들어요', '밤늦게 과자를 먹어요'], slots: 3 } } } },
              { prompt: '활동지에 내 쉬는 날 계획표를 썼으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"짝의 쉬는 날 계획에 몸 습관이 들어 있나요?" 짝끼리 계획표를 바꿔 보고 습관 칸에 별을 그려 준다. 다음 쉬는 날 계획대로 지내 보고 이야기해 주자고 한다. 출구 1번에서 세수를 학교 가는 날에만 넣은 학생은 쉬는 날 아침을 떠올려 보게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '두 날 견주기', slots: ['학교 가는 날', '쉬는 날', '두 날 모두'], cards: ['아침 조회에 줄을 서요', '하루 종일 할머니 댁에서 지내요', '세수를 해요'] }, prompt: '카드를 세 갈래로 나누어 보세요.', target: { sort: { '학교 가는 날': ['아침 조회에 줄을 서요'], '쉬는 날': ['하루 종일 할머니 댁에서 지내요'], '두 날 모두': ['세수를 해요'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '쉬는 날에도 지킬 일은 무엇일까요?', options: ['정한 시간에 잠자기', '알림장 쓰기'], answer: 0, difficulty: 0.1, explain: '잠자리 시간 같은 몸 습관은 쉬는 날에도 지켜요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '나의 쉬는 날 계획',
      items: [
        { type: 'table', prompt: '쉬는 날 계획표를 쓰세요.', columns: ['때', '할 일', '지킬 습관'], cells: [['아침', '', ''], ['낮', '', ''], ['저녁', '', '']] },
        { type: 'check', prompt: '두 날 모두 하는 일에 모두 ✓ 하세요.', options: ['이를 닦아요', '알림장을 써요', '잠을 자요', '급식을 먹어요'] },
        { type: 'choice', prompt: '쉬는 날에도 지킬 습관에 ○ 하세요.', options: ['밤새 게임하기', '밥 먹기 전에 손 씻기'], answer: '밥 먹기 전에 손 씻기' },
        { type: 'draw', prompt: '쉬는 날 가장 하고 싶은 일을 그려 보세요.' },
      ],
      easy: {
        note: '쉬는 날에도 손 씻기, 일찍 자기!',
        items: [
          { type: 'choice', prompt: '학교 가는 날에만 하는 일에 ○ 하세요.', options: ['알림장 쓰기', '이 닦기'], answer: '알림장 쓰기' },
          { type: 'choice', prompt: '두 날 모두 하는 일에 ○ 하세요.', options: ['잠자기', '받아쓰기'], answer: '잠자기' },
          { type: 'draw', prompt: '쉬는 날 하고 싶은 일을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 갈래에 초록 테두리가 생겨요. 계획표는 할 일 칸만 채워요.',
      base: '모두 나눈 뒤 확인해요. 계획표에 할 일과 지킬 습관을 함께 써요.',
      challenge: '함정 카드가 하나씩 더 있어요. 계획표에 몇 시인지까지 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 쉬는 날에는 습관도 쉬어도 된다고 여긴다 → 손 씻기·잠자리 시간을 콕 집어 묻는다. ② 집마다 쉬는 날 모습이 달라 비교하며 부러워한다 → 계획표의 할 일은 집에서 할 수 있는 작은 일(책 읽기, 산책)도 좋다고 말한다. ③ 두 날 모두 하는 일을 한쪽에만 넣는다 → "쉬는 날에도 하나?"를 꼭 두 번째로 묻게 한다.',
  }));

  // ───────────────────────── 13~16차시: 마음에 남는 때(하루의 가치 — 바른 생활 실천) ─────────────────────────

  // 콜라주 장면 꾸미기 단계: 쉬움은 모양·색을 줄이고 큰 조각만, 도전은 모든 모양·색·크기
  var SCENE_LV = {
    easy: { shapes: ['circle', 'square', 'triangle', 'heart', 'star'], colors: ['빨강', '노랑', '초록', '파랑', '갈색', '분홍'], sizes: ['m', 'l'] },
    base: { shapes: ['circle', 'square', 'rect', 'triangle', 'semi', 'heart', 'star', 'leaf'], colors: ['빨강', '주황', '노랑', '초록', '파랑', '분홍', '갈색', '하양'] },
    challenge: {},
  };

  lessons.push(L(13, {
    title: '오늘 마음에 남는 때를 골라 꾸미기',
    objective: '오늘 하루 가운데 마음에 남는 때를 하나 골라 그때의 마음을 말하고, 색종이 조각과 그림으로 나타낼 수 있다.',
    illustration: ART('a paper memory frame showing an ordinary school day moment: two friends sharing an umbrella on the way home, small raindrops and a warm glow around them', '마음에 남는 때', [
      { motif: 'cloud', x: 300, y: 64 }, { motif: 'house', x: 110, y: 214, color: 'mint' }, { motif: 'flower', x: 380, y: 228, color: 'rose' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '눈을 감고 오늘 아침부터 지금까지를 떠올리게 한다. "오늘 가장 마음에 남는 때는 언제였나요?" "특별한 일이 없었어요"라고 말하는 학생에게 "아침에 누가 인사해 주었나요? 점심에 맛있는 것이 있었나요?"처럼 작은 장면을 건넨다. 특별한 일이 없는 날에도 마음에 남는 때가 있다는 것을 짚는다(특별한 일이 없는 날은 기억할 것이 없다는 생각). 시연 단추로 하루 장면에 마음 카드가 놓이는 모습을 보여 준다.',
        student: '오늘 하루에서 마음에 남는 때를 하나 떠올려 짝에게 말해 봐요.',
        demo: { tool: 'emotion', options: { cards: ['기쁨', '고마움'], slots: [{ id: 's1', label: '급식에 좋아하는 반찬이 나왔어요' }, { id: 's2', label: '짝이 연필을 빌려줬어요' }], shuffle: false }, sequence: [{ match: { s1: '기쁨', s2: '고마움' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 하루 장면과 그때 마음 잇기', minutes: 12, tool: 'emotion',
            teacher: '"이 장면에서 내 마음은 어떤 날씨였을까요?" 카드마다 내가 그 자리에 있다고 떠올리게 한다. 마음 낱말이 비슷해 헷갈리면 "누가 나에게 해 준 일이면 고마움, 내가 해낸 일이면 뿌듯함"처럼 구별을 도와준다. 마지막 문항은 평범한 날의 작은 장면도 마음을 크게 움직일 수 있다는 것을 보여 준다.',
            task: '하루 장면을 읽고 그때의 마음 카드를 놓거나 마음의 크기를 골라요.',
            levels: { easy: { live: true, instant: true, steps: 3 }, base: {}, challenge: {} },
            items: [
              { prompt: '하루 장면과 그때 마음을 이어 보세요.', toolOptions: { cards: ['고마움', '뿌듯함', '편안함'], slots: [{ id: 's1', label: '짝이 우산을 같이 씌워 줬어요' }, { id: 's2', label: '혼자 신발장 정리를 끝냈어요' }, { id: 's3', label: '할머니 무릎에 누워 쉬었어요' }] },
                target: { match: { s1: '고마움', s2: '뿌듯함', s3: '편안함' } }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['고마움', '뿌듯함', '편안함', '무서움'] } } } },
              { prompt: '새 장면과 그때 마음을 이어 보세요.', toolOptions: { cards: ['기쁨', '미안함', '놀람'], slots: [{ id: 's1', label: '비 온 뒤 무지개를 봤어요' }, { id: 's2', label: '친구 그림에 물을 쏟았어요' }, { id: 's3', label: '교실 문 뒤에서 친구가 "왁!" 했어요' }] },
                target: { match: { s1: '기쁨', s2: '미안함', s3: '놀람' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['기쁨', '미안함', '놀람', '외로움'] } } } },
              { prompt: '특별한 일이 없던 날, 집에 오는 길에 예쁜 낙엽을 주웠어요. 기쁜 마음의 크기를 골라 보세요.', toolOptions: { mode: 'scale', situation: '특별한 일이 없던 날, 집에 오는 길에 빨간 낙엽을 주웠어요.', feeling: '기쁨', after: '평범한 날에도 마음에 남는 때가 있어요.' }, target: { level: [2, 5] }, difficulty: 0.1,
                predict: { q: '특별한 일이 없는 날에도 마음에 남는 때가 있을까요?', options: ['없어요', '있어요'], answer: 1 },
                conclude: '특별한 일이 없는 날에도 작은 장면이 마음에 남을 수 있어요.',
                levels: { easy: { prompt: '집에 오는 길에 예쁜 낙엽을 주웠어요. 기쁜 마음을 세 칸에서 골라 보세요.', target: { level: [2, 3] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 마음에 남는 때 꾸미기', minutes: 14, tool: 'collage',
            teacher: '"그때 누가 있었나요? 어디였나요? 날씨는 어땠나요?" 세 질문으로 장면을 떠올리게 한 뒤 조각으로 꾸민다. 앞의 두 문항은 보기 장면을 따라 꾸미는 연습이고, 마지막 문항은 내 장면을 꾸민다. 화면 작품을 마치면 활동지에 같은 장면을 크레파스로 그리고, 그때가 소중한 까닭을 짝에게 한 문장으로 말한다.',
            task: '보기 장면을 조각으로 꾸며 보고, 내가 고른 마음에 남는 때를 꾸민 뒤 활동지에 그려요.',
            levels: SCENE_LV,
            items: [
              { prompt: '친구와 우산을 같이 쓴 때예요. 사람 얼굴 동그라미 두 개와 파랑 반원 우산 하나를 붙여 보세요.', target: { has: [{ shape: 'circle', min: 2 }, { shape: 'semi', color: '파랑', n: 1 }] }, difficulty: 0.15,
                levels: { easy: { prompt: '친구와 비 오는 길을 걸은 때예요. 사람 얼굴 동그라미 두 개와 파랑 네모 우산 하나를 붙여 보세요.', target: { has: [{ shape: 'circle', min: 2 }, { shape: 'square', color: '파랑', n: 1 }] } },
                  challenge: { prompt: '친구와 우산을 같이 쓴 때예요. 얼굴 동그라미 둘, 파랑 반원 우산 하나, 작은 파랑 빗방울 세 개 이상을 붙여 보세요.', target: { has: [{ shape: 'circle', size: 'm', min: 2 }, { shape: 'semi', color: '파랑', n: 1 }, { color: '파랑', size: 's', min: 3 }] } } } },
              { prompt: '가족과 저녁밥을 먹은 때예요. 갈색 긴 네모 밥상 하나와 사람 얼굴 동그라미 세 개 이상을 붙여 보세요.', target: { has: [{ shape: 'rect', color: '갈색', n: 1 }, { shape: 'circle', min: 3 }] }, difficulty: 0.15,
                levels: { easy: { prompt: '가족과 저녁밥을 먹은 때예요. 갈색 네모 밥상 하나와 사람 얼굴 동그라미 세 개 이상을 붙여 보세요.', target: { has: [{ shape: 'square', color: '갈색', n: 1 }, { shape: 'circle', min: 3 }] } } } },
              { prompt: '오늘 내 마음에 남는 때를 조각 네 개 넘게 붙여 꾸미고 점검해 보세요.', target: { selfCheck: ['그때 있었던 사람이나 물건을 붙였어요', '그때의 장소나 날씨가 보여요', '짝에게 그때를 말했어요'], minPieces: 4 }, difficulty: 0.1 },
              { prompt: '활동지에 마음에 남는 때를 그리고, 짝에게 소중한 까닭을 말했으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"짝이 고른 때는 특별한 날이었나요, 평범한 날이었나요?" 두세 명이 짝의 장면을 소개하게 한다. 작품은 교실 뒤 \'마음에 남는 때\' 판에 붙인다. 오늘 저녁에도 잠들기 전에 마음에 남는 때를 하나 떠올려 보자고 한다. 출구 1번을 바꾸어 놓은 학생에게는 누가 나에게 해 준 일인지, 내가 한 일인지 먼저 따지게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { cards: ['고마움', '기쁨'], slots: [{ id: 'e1', label: '아빠가 업어 줬어요' }, { id: 'e2', label: '하늘에 커다란 무지개가 떴어요' }] }, prompt: '장면과 그때 마음을 이어 보세요.', target: { match: { e1: ['고마움', '기쁨'], e2: '기쁨' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '특별한 일이 없는 날에도 마음에 남는 때가 있을까요?', options: ['없어요', '작은 일도 마음에 남아요'], answer: 1, difficulty: 0.1, explain: '인사, 웃음, 무지개 같은 작은 일도 마음에 남아요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '마음에 남는 때',
      items: [
        { type: 'draw', prompt: '오늘 마음에 남는 때를 그려 보세요.' },
        { type: 'choice', prompt: '그때 내 마음에 ○ 하세요.', options: ['기쁨', '고마움', '뿌듯함', '편안함'] },
        { type: 'blank', prompt: '그때가 소중한 까닭: ______________________' },
        { type: 'check', prompt: '내 그림에 들어간 것에 ✓ 하세요.', options: ['그때 있었던 사람', '그때의 장소', '그때의 날씨'] },
      ],
      easy: {
        note: '누가, 어디서, 무엇을 했나요?',
        items: [
          { type: 'draw', prompt: '오늘 마음에 남는 때를 그려 보세요.' },
          { type: 'choice', prompt: '그때 내 마음에 ○ 하세요.', options: ['기쁨', '고마움'] },
          { type: 'blank', prompt: '그때 함께 있던 사람: __________' },
        ],
      },
    },
    differentiation: {
      easy: '맞게 놓으면 초록 테두리가 생겨요. 마음 크기는 세 칸이에요. 조각은 모양 다섯 가지, 색 여섯 가지, 큰 조각만 나와요.',
      base: '카드를 모두 놓고 확인해요. 모양·색 여덟 가지로 꾸며요.',
      challenge: '맞지 않는 함정 마음 카드가 있어요. 우산 장면에 작은 빗방울까지 붙여요.',
    },
    teacherNotes: '자주 보이는 어려움: ① "오늘은 특별한 일이 없었어요"라고 한다(핵심 오개념) → 인사·급식·쉬는 시간처럼 하루의 작은 장면을 하나씩 건넨다. ② 마음 낱말이 "좋았어요" 하나뿐이다 → 기쁨·고마움·뿌듯함·편안함 카드를 칠판에 붙여 고르게 한다. ③ 그리기를 어려워한다 → 화면 콜라주 작품을 보고 따라 그려도 된다고 말한다. 이 차시 그림은 17차시 한 주 그림 이어 보기에 쓴다.',
  }));

  lessons.push(L(14, {
    title: '평범한 때가 소중한 까닭 말하기',
    objective: '평범한 하루의 한 장면이 왜 소중한지 까닭을 골라 잇고, 내가 고른 때가 소중한 까닭을 짧은 말로 말할 수 있다.',
    illustration: ART('a paper family sitting around a small round dinner table under a warm lamp, sharing rice bowls and laughing, a window showing an evening sky', '왜 소중할까요?', [
      { motif: 'house', x: 110, y: 214, color: 'peach' }, { motif: 'tree', x: 380, y: 214 }, { motif: 'star', x: 300, y: 76, s: 0.5 }], true),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '교실 뒤 \'마음에 남는 때\' 판의 작품 두세 개를 가리킨다. "이 친구는 왜 이 때를 골랐을까요?" 까닭을 짐작해 보게 한다. "소중한 까닭은 \'함께 있어서\', \'내가 해내서\', \'도움을 받아서\'처럼 말할 수 있어요." 시연 단추로 장면과 까닭이 이어지는 모습을 보여 준다.',
        student: '어제 고른 마음에 남는 때를 다시 떠올려 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '왜 소중할까', slots: [{ id: 's1', label: '가족과 저녁밥을 먹었어요' }], cards: ['함께 이야기해서 즐거웠어요'], shuffle: false }, sequence: [{ match: { s1: '함께 이야기해서 즐거웠어요' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 장면과 소중한 까닭 잇기', minutes: 13, tool: 'mindmap',
            teacher: '"이 장면이 소중한 까닭은 함께여서일까요, 해내서일까요, 도움을 받아서일까요?" 세 갈래로 까닭을 찾게 한다. "그냥 좋아서요"라고 말하는 학생에게 "무엇 때문에 좋았나요?"를 한 번 더 묻는다. 날마다 있는 일(저녁밥, 인사)도 소중한 까닭이 있다는 것을 짚는다.',
            task: '장면 가지에 소중한 까닭 카드를 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '장면과 소중한 까닭을 이어 보세요.', toolOptions: { mode: 'match', topic: '왜 소중할까', slots: [{ id: 's1', label: '가족과 저녁밥을 먹었어요' }, { id: 's2', label: '넘어진 나를 짝이 일으켜 줬어요' }, { id: 's3', label: '혼자 책 한 권을 다 읽었어요' }], cards: ['함께 이야기해서 즐거웠어요', '친구가 나를 아껴 줬어요', '내가 해냈어요'] },
                target: { match: { s1: '함께 이야기해서 즐거웠어요', s2: '친구가 나를 아껴 줬어요', s3: '내가 해냈어요' } }, difficulty: 0.1,
                hints: ['장면마다 누가 무엇을 했는지 먼저 읽어요.', '흔들리는 카드가 그 장면의 사람과 일에 어울리는지 다시 봐요.', '가족 저녁은 함께 이야기, 짝은 나를 아껴 줌, 책은 내가 해낸 일이에요.'],
                levels: { challenge: { toolOptions: { cards: ['함께 이야기해서 즐거웠어요', '친구가 나를 아껴 줬어요', '내가 해냈어요', '숙제를 안 해도 됐어요'] } } } },
              { prompt: '새 장면과 소중한 까닭을 이어 보세요.', toolOptions: { mode: 'match', topic: '왜 소중할까', slots: [{ id: 's1', label: '아침에 경비 아저씨가 인사해 줬어요' }, { id: 's2', label: '줄넘기를 처음 열 번 넘었어요' }], cards: ['반겨 주는 사람이 있어서 따뜻했어요', '연습한 만큼 늘었어요'] },
                target: { match: { s1: '반겨 주는 사람이 있어서 따뜻했어요', s2: '연습한 만큼 늘었어요' } }, difficulty: 0.15,
                hints: ['장면에서 다른 사람이 해 준 일인지, 내가 한 일인지 먼저 가려요.', '흔들리는 카드가 그 장면과 이어지는지 다시 읽어요.', '인사는 반겨 준 사람, 줄넘기는 연습한 나와 이어져요.'] },
              { prompt: '소중한 때가 될 수 있는 장면만 골라 보세요.', toolOptions: { mode: 'pick', basket: '소중한 때', cards: ['동생과 이불 속에서 웃었어요', '날마다 먹는 저녁밥을 함께 먹었어요', '친구를 놀려서 울렸어요', '복도에서 뛰다가 부딪쳤어요'] },
                target: { pick: ['동생과 이불 속에서 웃었어요', '날마다 먹는 저녁밥을 함께 먹었어요'] }, difficulty: 0.15,
                predict: { q: '날마다 먹는 저녁밥도 소중한 때가 될까요?', options: ['안 돼요', '될 수 있어요'], answer: 1 },
                conclude: '날마다 하는 일도 함께 하는 사람과 마음이 있어 소중해요.',
                hints: ['장면마다 그때 마음이 따뜻했는지 떠올려요.', '흔들리는 카드의 장면에서 누가 속상했는지 다시 생각해요.', '동생과 웃은 때, 함께 먹은 저녁밥은 마음이 따뜻한 소중한 때예요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 소중한 까닭을 한 문장으로 말하기', minutes: 13, tool: 'story',
            teacher: '"○○ 때가 소중해요. 왜냐하면 ○○ 때문이에요." 칠판에 문장 틀을 붙인다. 말풍선 빈칸에 까닭 카드를 넣어 문장을 완성해 본 뒤, 짝과 내가 고른 때를 같은 틀로 말한다. 까닭에 "그냥"만 들어가면 활동 1의 세 갈래(함께, 해냄, 도움)를 떠올리게 한다.',
            task: '말풍선 빈칸에 알맞은 까닭 카드를 넣고, 짝에게 내 소중한 때를 같은 틀로 말해요.',
            levels: CARD_LV,
            items: [
              { prompt: '말풍선 빈칸에 알맞은 까닭을 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['할머니 목소리를 들어서', '처음으로 혼자 해내서'], slots: [{ id: 'b1', who: '서아', motif: 'house', label: '할머니와 통화한 때가 소중해요. ___ 따뜻했어요.' }, { id: 'b2', who: '도윤', motif: 'star', label: '혼자 머리를 감은 때가 소중해요. ___ 뿌듯했어요.' }] },
                target: { fill: { b1: '할머니 목소리를 들어서', b2: '처음으로 혼자 해내서' } }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['할머니 목소리를 들어서', '처음으로 혼자 해내서', '숙제를 깜빡해서'] } } } },
              { prompt: '말풍선 빈칸에 알맞은 까닭을 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['함께 웃어서', '내 짐을 들어 줘서', '꽃이 활짝 피어서'], slots: [{ id: 'b1', who: '민지', motif: 'tree', label: '짝과 그네를 탄 때가 소중해요. ___ 즐거웠어요.' }, { id: 'b2', who: '준호', motif: 'house', label: '형이 도와준 때가 소중해요. ___ 고마웠어요.' }, { id: 'b3', who: '하준', motif: 'flower', label: '화분을 들여다본 때가 소중해요. ___ 기뻤어요.' }] },
                target: { fill: { b1: '함께 웃어서', b2: '내 짐을 들어 줘서', b3: '꽃이 활짝 피어서' } }, difficulty: 0.15,
                levels: { easy: { prompt: '말풍선 빈칸에 알맞은 까닭을 넣어 보세요. 두 칸이에요.', toolOptions: { cards: ['함께 웃어서', '내 짐을 들어 줘서'], slots: [{ id: 'b1', who: '민지', motif: 'tree', label: '짝과 그네를 탄 때가 소중해요. ___ 즐거웠어요.' }, { id: 'b2', who: '준호', motif: 'house', label: '형이 도와준 때가 소중해요. ___ 고마웠어요.' }] }, target: { fill: { b1: '함께 웃어서', b2: '내 짐을 들어 줘서' } } } } },
              { prompt: '짝에게 "○○ 때가 소중해요. 왜냐하면 ○○" 하고 말했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"짝의 소중한 까닭 가운데 기억에 남는 말이 있나요?" 두세 명이 소개하게 한다. 소중한 까닭을 알면 그때를 더 아끼게 된다는 것을 말하고, 오늘 저녁에 가족에게 "오늘 소중한 때"를 물어보는 숙제를 낸다. 출구 1번의 까닭을 바꾸어 놓은 학생은 장면에서 누가 무엇을 했는지 다시 읽게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '왜 소중할까', slots: [{ id: 'e1', label: '아빠와 공원을 걸었어요' }, { id: 'e2', label: '혼자 신발 끈을 맸어요' }], cards: ['아빠와 함께여서 즐거웠어요', '내가 해냈어요'] }, prompt: '장면과 소중한 까닭을 이어 보세요.', target: { match: { e1: '아빠와 함께여서 즐거웠어요', e2: '내가 해냈어요' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '"그냥 좋아서"보다 더 잘 알려 주는 까닭은?', options: ['그냥 좋았어요', '친구와 함께 웃어서 좋았어요'], answer: 1, difficulty: 0.1, explain: '무엇 때문에 좋았는지 말하면 소중한 까닭이 또렷해져요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '왜 소중할까요',
      items: [
        { type: 'figure', wide: true, prompt: '장면과 소중한 까닭을 선으로 이으세요.', tool: 'mindmap', figures: [{ options: { mode: 'match', topic: '왜 소중할까', slots: [{ id: 's1', label: '가족과 저녁밥' }, { id: 's2', label: '혼자 책 읽기' }], cards: ['내가 해냈어요', '함께 이야기했어요'] }, caption: '' }], answer: '저녁밥-함께, 책-해냈어요' },
        { type: 'choice', prompt: '소중한 때가 될 수 있는 장면에 ○ 하세요.', options: ['친구를 놀렸어요', '동생과 함께 웃었어요', '복도에서 뛰었어요'], answer: '동생과 함께 웃었어요' },
        { type: 'blank', prompt: '_________ 때가 소중해요. 왜냐하면 _______________ 때문이에요.' },
        { type: 'short', prompt: '가족이 말해 준 "오늘 소중한 때"를 쓰세요.' },
      ],
      easy: {
        note: '함께여서, 해내서, 도움을 받아서!',
        items: [
          { type: 'choice', prompt: '가족과 저녁밥을 먹은 때가 소중한 까닭에 ○ 하세요.', options: ['함께 이야기해서', '혼자 해내서'], answer: '함께 이야기해서' },
          { type: 'blank', prompt: '_________ 때가 소중해요.' },
          { type: 'draw', prompt: '내가 소중하게 여기는 때를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞게 놓으면 초록 테두리가 생겨요. 말풍선 빈칸은 두 칸이에요.',
      base: '모두 놓고 확인해요. 말풍선 세 칸을 채워요.',
      challenge: '어울리지 않는 함정 까닭 카드가 섞여 있어요. 짝에게 말할 때 까닭을 두 가지 들어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 까닭을 "그냥", "좋아서"로만 말한다 → "무엇 때문에?"를 한 번 더 묻는다. ② 날마다 하는 일은 소중하지 않다고 여긴다 → 날마다 함께 먹는 저녁밥의 예로 되짚는다. ③ 가족 숙제가 어려운 가정이 있다 → 가족 대신 돌봄교실 선생님, 이웃처럼 함께 지내는 사람에게 물어도 된다고 안내한다.',
  }));

  lessons.push(L(15, {
    title: '소중한 하루를 그림일기로 남기기',
    objective: '그림일기를 쓰는 차례를 알고, 마음에 남는 때와 그때의 마음이 드러나게 그림일기를 쓸 수 있다.',
    illustration: ART('an open paper picture diary with a date line, a weather icon, a crayon drawing of a child on a swing and a few handwritten lines below', '그림일기를 써요', [
      { motif: 'sun', x: 120, y: 80, s: 0.5 }, { motif: 'tree', x: 380, y: 214 }, { motif: 'flower', x: 250, y: 228, color: 'buttercup' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '빈 그림일기 공책을 펼쳐 보인다. "어제 가족에게 물어 온 \'오늘 소중한 때\'를 말해 볼까요?" 두세 명의 대답을 듣는다. "소중한 때를 잊지 않으려면 어떻게 하면 좋을까요?" 사진, 그림, 일기 같은 대답을 모은 뒤 오늘은 그림일기로 남긴다고 말한다. 시연 단추로 그림일기 쓰는 차례가 놓이는 모습을 보여 준다.',
        student: '가족에게 들은 "오늘 소중한 때"를 짝에게 말해 봐요.',
        demo: { tool: 'story', options: { cards: [{ id: 'pick', text: '쓸 때를 골라요', motif: 'star' }, { id: 'draw', text: '그림을 그려요', motif: 'flower' }], slots: ['1', '2'], shuffle: false }, sequence: [{ order: ['pick', 'draw'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 그림일기 쓰는 차례와 문장 익히기', minutes: 12, tool: 'story',
            teacher: '"쓸 때를 고르지 않고 그림부터 그리면 어떻게 될까요?" 차례의 까닭을 묻는다. 그림과 글은 어느 것을 먼저 해도 된다고 알려 준다. 문장 빈칸 문항에서는 \'어디서\', \'무엇을\', \'마음\' 자리를 손가락으로 짚게 한다. 마음이 드러난 문장 고르기에서는 "오늘은 화요일이다"처럼 사실만 있는 문장과 견주어 본다.',
            task: '그림일기 쓰는 차례를 놓고, 일기 문장 빈칸을 채우고, 마음이 드러난 문장을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '그림일기 쓰는 차례대로 놓아 보세요. 그림과 글은 어느 것을 먼저 해도 돼요.', toolOptions: { cards: [{ id: 'date', text: '날짜와 날씨를 써요', motif: 'sun' }, { id: 'draw', text: '그때를 그림으로 그려요', motif: 'flower' }, { id: 'write', text: '그때 마음을 글로 써요', motif: 'leaf' }], slots: ['1', '2', '3'] },
                target: { order: ['date', ['draw', 'write']] }, difficulty: 0.1,
                hints: ['일기장 맨 위 칸에 무엇을 먼저 쓰는지 떠올려요.', '흔들리는 카드가 맨 처음에 할 일인지 다시 생각해요.', '날짜와 날씨를 맨 먼저 쓰고, 그림과 글은 어느 것을 먼저 해도 돼요.'],
                levels: { challenge: { prompt: '그림일기 쓰는 차례대로 놓아 보세요. 일기와 상관없는 카드는 남겨요.', toolOptions: { cards: [{ id: 'date', text: '날짜와 날씨를 써요', motif: 'sun' }, { id: 'draw', text: '그때를 그림으로 그려요', motif: 'flower' }, { id: 'write', text: '그때 마음을 글로 써요', motif: 'leaf' }, { id: 'tv', text: '만화를 봐요', motif: 'house' }] } } } },
              { prompt: '그림일기 문장의 빈칸에 알맞은 말을 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['놀이터', '그네를 탔다', '즐거웠다'], slots: [{ id: 'b1', who: '민지', motif: 'tree', label: '오늘 ___에서 놀았다.' }, { id: 'b2', who: '민지', motif: 'tree', label: '짝과 함께 ___.' }, { id: 'b3', who: '민지', motif: 'tree', label: '바람이 시원해서 참 ___.' }] },
                target: { fill: { b1: '놀이터', b2: '그네를 탔다', b3: '즐거웠다' } }, difficulty: 0.15,
                hints: ['빈칸 앞뒤 낱말을 읽고 장소, 한 일, 마음 가운데 무엇이 들어갈지 생각해요.', '흔들리는 카드를 넣고 문장을 소리 내어 읽어 봐요.', '"___에서"에는 장소, "함께 ___"에는 한 일, "참 ___"에는 마음이 들어가요.'] },
              { prompt: '그림일기 글에서 마음이 드러난 문장만 골라 보세요.', toolOptions: { mode: 'pick', basket: '마음이 드러난 문장', cards: ['동생이 웃어서 나도 기뻤다', '오늘은 화요일이다', '할머니 목소리를 들으니 따뜻했다', '점심은 밥과 국이었다'] },
                target: { pick: ['동생이 웃어서 나도 기뻤다', '할머니 목소리를 들으니 따뜻했다'] }, difficulty: 0.2,
                hints: ['문장 끝에 마음을 나타내는 말(기뻤다, 슬펐다…)이 있는지 찾아요.', '흔들리는 카드에 마음 낱말이 있는지 다시 읽어요.', '"기뻤다", "따뜻했다"가 있는 문장에 마음이 드러나요.'],
                levels: { challenge: { toolOptions: { cards: ['동생이 웃어서 나도 기뻤다', '오늘은 화요일이다', '할머니 목소리를 들으니 따뜻했다', '점심은 밥과 국이었다', '버스를 타고 집에 왔다'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 그림일기 그림 칸 꾸미고 쓰기', minutes: 14, tool: 'collage',
            teacher: '"그림 칸에는 마음에 남는 때의 가장 중요한 장면 하나만 크게 담아요." 화면에서 그림 칸 장면을 조각으로 먼저 꾸며 본 뒤, 그림일기 공책(활동지)에 날짜·날씨·그림·글을 쓴다. 글이 한 줄에서 멈추는 학생에게 "그때 마음은?"을 묻는다. 다 쓴 일기는 짝과 바꾸어 읽는다.',
            task: '화면에서 그림 칸 장면을 꾸미고, 활동지 그림일기를 날짜·날씨·그림·글 차례로 써요.',
            levels: SCENE_LV,
            items: [
              { prompt: '해가 쨍쨍한 날 놀이터 장면이에요. 노랑 동그라미 해 하나와 분홍 동그라미 얼굴 둘 이상을 붙여 보세요.', target: { has: [{ shape: 'circle', color: '노랑', n: 1 }, { shape: 'circle', color: '분홍', min: 2 }] }, difficulty: 0.15,
                levels: { challenge: { prompt: '해가 쨍쨍한 날 놀이터예요. 노랑 동그라미 해 하나, 분홍 동그라미 얼굴 둘 이상, 갈색 긴 네모 그네 기둥 둘을 붙여 보세요.', target: { has: [{ shape: 'circle', color: '노랑', n: 1 }, { shape: 'circle', color: '분홍', min: 2 }, { shape: 'rect', color: '갈색', n: 2 }] } } } },
              { prompt: '내 그림일기 그림 칸을 조각 다섯 개 넘게 붙여 꾸미고 점검해 보세요.', target: { selfCheck: ['가장 중요한 장면이 크게 보여요', '그때 함께 있던 사람이 있어요', '날씨가 드러나요'], minPieces: 5 }, difficulty: 0.1 },
              { prompt: '활동지에 날짜·날씨·그림·글을 모두 쓴 그림일기를 짝과 바꾸어 읽었으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"짝의 그림일기에서 마음이 드러난 문장을 찾아 읽어 줄까요?" 두세 짝이 발표한다. 그림일기는 일주일 동안 날마다 한 편씩 쓰기로 하고, 17차시에 모아서 함께 본다고 알린다. 출구 1번에서 마음 낱말 없이 날씨만 넣은 학생은 문장 끝 "참 ___" 자리를 다시 짚게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { mode: 'fill', cards: ['고마웠다', '수요일'], slots: [{ id: 'e1', who: '준호', motif: 'house', label: '오늘은 ___이다.' }, { id: 'e2', who: '준호', motif: 'house', label: '형이 숙제를 도와줘서 참 ___.' }] }, prompt: '그림일기 문장의 빈칸을 채워 보세요.', target: { fill: { e1: '수요일', e2: '고마웠다' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '그림일기에서 맨 먼저 쓰는 것은?', options: ['날짜와 날씨', '그때 마음'], answer: 0, difficulty: 0.1, explain: '날짜와 날씨를 먼저 쓰고 그림과 글을 써요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '나의 그림일기',
      items: [
        { type: 'table', prompt: '날짜와 날씨를 쓰세요.', columns: ['날짜', '날씨'], rows: 1 },
        { type: 'draw', prompt: '오늘 마음에 남는 때를 그리세요.' },
        { type: 'short', prompt: '그때 있었던 일과 내 마음을 쓰세요.' },
        { type: 'check', prompt: '내 그림일기를 점검해 ✓ 하세요.', options: ['날짜와 날씨를 썼어요', '그림이 크게 보여요', '마음이 드러난 문장이 있어요'] },
      ],
      easy: {
        note: '날짜·날씨 → 그림 → 한 줄 글!',
        items: [
          { type: 'blank', prompt: '날짜: ____월 ____일   날씨: ________' },
          { type: 'draw', prompt: '오늘 마음에 남는 때를 그리세요.' },
          { type: 'blank', prompt: '오늘 ________ 해서 참 ________.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 초록 테두리가 생겨요. 그림일기 글은 "오늘 ○○ 해서 참 ○○." 한 줄 틀을 써요.',
      base: '모두 놓고 확인해요. 그림일기 글을 두 줄 넘게 써요.',
      challenge: '일기와 상관없는 함정 카드가 있고, 그림 칸에 그네 기둥까지 꾸며요. 글에 마음과 까닭을 함께 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 하루 동안 한 일을 모두 나열한다(일어나서, 밥 먹고, 학교 가고…) → 마음에 남는 때 하나만 고르게 한다. ② 마음 문장이 빠진다 → "참 ___"으로 끝나는 문장 틀을 준다. ③ 그림이 작다 → 가장 중요한 장면을 칸 가득 그리게 한다. 쓰기가 느린 학생은 그림 아래 한 줄만 써도 되고, 나머지는 말로 하게 한다.',
  }));

  lessons.push(L(16, {
    title: '친구의 소중한 때를 듣고 마음 알아주기',
    objective: '친구가 말하는 소중한 때를 끝까지 듣고 그때 친구의 마음을 짐작하며, 마음을 알아주는 말을 골라 할 수 있다.',
    illustration: ART('two paper children sitting face to face on cushions, one holding a picture diary and talking, the other leaning in and listening with a warm smile, small hearts floating between them', '친구 이야기를 들어요', [
      { motif: 'flower', x: 110, y: 228, color: 'rose' }, { motif: 'tree', x: 380, y: 214 }, { motif: 'star', x: 250, y: 78, s: 0.5 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"선생님이 어제 소중했던 때를 말할게요. 듣고 나서 선생님 마음을 맞혀 볼까요?" 짧게 이야기한 뒤(예: 아침에 화분에 꽃이 핀 것을 보았다) 마음을 짐작하게 한다. "친구 이야기를 들을 때 무엇을 하면 친구가 기분이 좋을까요?" 시연 단추로 친구 이야기에 마음 카드가 놓이는 모습을 보여 준다.',
        student: '선생님이 소중했던 때를 말할 때 선생님 마음을 짐작해 말해 봐요.',
        demo: { tool: 'emotion', options: { cards: ['기쁨'], slots: [{ id: 's1', label: '화분에 꽃이 피었어요' }], shuffle: false }, sequence: [{ match: { s1: '기쁨' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 친구의 소중한 때와 마음 짐작하기', minutes: 12, tool: 'emotion',
            teacher: '"민지가 이 이야기를 할 때 얼굴이 어땠을까요?" 친구의 자리에 서서 마음을 짐작하게 한다. 내 마음과 친구 마음이 다를 수 있다는 것을 짚는다(나는 무지개가 별로여도 친구는 기쁠 수 있다). 짐작한 마음은 "기뻤구나?"처럼 물어서 확인하는 것이 좋다고 알려 준다.',
            task: '친구의 소중한 때를 읽고 그때 친구의 마음 카드를 놓아요.',
            levels: { easy: { live: true, instant: true, steps: 3 }, base: {}, challenge: {} },
            items: [
              { prompt: '친구들의 소중한 때와 그때 마음을 이어 보세요.', toolOptions: { cards: ['뿌듯함', '고마움', '설렘'], slots: [{ id: 's1', label: '민지: 처음으로 혼자 버스를 탔어요' }, { id: 's2', label: '준호: 아픈 날 친구가 전화해 줬어요' }, { id: 's3', label: '서아: 내일 사촌이 놀러 와요' }] },
                target: { match: { s1: '뿌듯함', s2: '고마움', s3: '설렘' } }, difficulty: 0.15,
                levels: { easy: { prompt: '친구들의 소중한 때와 그때 마음을 이어 보세요. 두 줄이에요.', toolOptions: { cards: ['뿌듯함', '고마움'], slots: [{ id: 's1', label: '민지: 처음으로 혼자 버스를 탔어요' }, { id: 's2', label: '준호: 아픈 날 친구가 전화해 줬어요' }] }, target: { match: { s1: '뿌듯함', s2: '고마움' } } },
                  challenge: { toolOptions: { cards: ['뿌듯함', '고마움', '설렘', '짜증'] } } } },
              { prompt: '도윤이가 할아버지 댁에서 고구마를 캔 이야기를 해요. 즐거운 마음의 크기를 골라 보세요.', toolOptions: { mode: 'scale', who: '도윤', situation: '도윤이는 할아버지와 밭에서 커다란 고구마를 캤어요.', feeling: '기쁨', after: '친구가 기뻤던 만큼 "정말 신났겠다!" 하고 말해 줘요.' }, target: { level: [3, 5] }, difficulty: 0.1,
                levels: { easy: { prompt: '도윤이가 할아버지와 고구마를 캤어요. 즐거운 마음을 세 칸에서 골라 보세요.', target: { level: [2, 3] } } } },
              { prompt: '하준이가 "강아지와 산책한 때가 소중해요"라고 말해요. 나는 강아지를 무서워해요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '하준', situation: '하준이는 강아지와 산책한 때가 소중하대요. 나는 강아지가 무서워요.', choices: [
                { id: 'listen', text: '"너는 그때 행복했구나" 하고 들어 줘요', result: '하준이가 더 신나게 이야기했어요.', mood: '기쁨' },
                { id: 'deny', text: '"강아지는 무서운데 뭐가 좋아" 하고 말해요', result: '하준이가 이야기를 멈추고 시무룩해졌어요.', mood: '속상함', why: '내 마음과 친구 마음이 같아야 할까요?' }] }, target: { choice: 'listen' }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { choices: [
                  { id: 'listen', text: '"너는 그때 행복했구나" 하고 들어 줘요', result: '하준이가 더 신나게 이야기했어요.', mood: '기쁨' },
                  { id: 'deny', text: '"강아지는 무서운데 뭐가 좋아" 하고 말해요', result: '하준이가 이야기를 멈추고 시무룩해졌어요.', mood: '속상함', why: '내 마음과 친구 마음이 같아야 할까요?' },
                  { id: 'away', text: '대답하지 않고 딴 곳을 봐요', result: '하준이가 혼자 말하는 것 같아 쓸쓸했어요.', mood: '외로움', why: '듣는 사람이 딴 곳을 보면 말하는 친구 마음은 어떨까요?' }] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 마음을 알아주는 말로 짝 인터뷰하기', minutes: 14, tool: 'emotion',
            teacher: '"친구 이야기에 어떤 말로 대답하면 \'내 마음을 알아주는구나\' 하고 느낄까요?" 알아주는 말과 아닌 말을 견준다. 그다음 짝 인터뷰를 한다: 한 사람이 그림일기 한 편을 읽어 주면, 다른 사람은 끝까지 듣고 "그때 ○○했구나"로 대답한 뒤 질문 하나를 한다. 역할을 바꾸어 한 번 더 한다.',
            task: '마음을 알아주는 말을 고르고, 짝의 그림일기를 듣고 "○○했구나"로 대답해요.',
            levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
            items: [
              { prompt: '친구 마음을 알아주는 말만 골라 보세요.', toolOptions: { mode: 'pick', basket: '마음을 알아주는 말', cards: ['그때 정말 기뻤겠다', '와, 혼자 해냈구나', '그게 뭐가 소중해', '내 얘기 먼저 들어'] },
                target: { pick: ['그때 정말 기뻤겠다', '와, 혼자 해냈구나'] }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['그때 정말 기뻤겠다', '와, 혼자 해냈구나', '그게 뭐가 소중해', '내 얘기 먼저 들어', '그건 나도 해 봤어, 별거 아니야'] } } } },
              { prompt: '친구 이야기와 알아주는 말을 이어 보세요.', toolOptions: { mode: 'match', cards: ['많이 아팠겠다', '정말 뿌듯했겠다'], slots: [{ id: 's1', label: '넘어져서 무릎이 까졌어' }, { id: 's2', label: '혼자 그림책을 다 읽었어' }] },
                target: { match: { s1: '많이 아팠겠다', s2: '정말 뿌듯했겠다' } }, difficulty: 0.1,
                levels: { challenge: { prompt: '친구 이야기와 알아주는 말을 이어 보세요. 세 줄이에요.', toolOptions: { cards: ['많이 아팠겠다', '정말 뿌듯했겠다', '정말 고마웠겠다'], slots: [{ id: 's1', label: '넘어져서 무릎이 까졌어' }, { id: 's2', label: '혼자 그림책을 다 읽었어' }, { id: 's3', label: '형이 우산을 갖다줬어' }] }, target: { match: { s1: '많이 아팠겠다', s2: '정말 뿌듯했겠다', s3: '정말 고마웠겠다' } } } } },
              { prompt: '짝과 역할을 바꾸어 그림일기를 읽어 주고 "○○했구나"로 대답했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"짝이 내 이야기를 들어 줄 때 내 마음은 어땠나요?" 두세 명의 느낌을 듣는다. "친구 마음을 알아주면 친구의 소중한 때가 나에게도 소중해져요"라고 말한다. 출구 2번에서 "내 생각을 먼저 말해요"를 고른 학생에게는 짝 인터뷰에서 들은 이야기를 다시 떠올리게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'pick', basket: '마음을 알아주는 말', cards: ['정말 설렜겠다', '그건 재미없어', '나도 듣고 싶어, 더 말해 줘'] }, prompt: '친구가 "내일 바다에 가!" 하고 말해요. 마음을 알아주는 말만 골라 보세요.', target: { pick: ['정말 설렜겠다', '나도 듣고 싶어, 더 말해 줘'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '친구가 소중한 때를 말할 때 먼저 할 일은?', options: ['끝까지 듣고 마음을 알아줘요', '내 생각을 먼저 말해요'], answer: 0, difficulty: 0.1, explain: '끝까지 듣고 친구 마음을 알아주면 친구가 기뻐요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '친구 마음 알아주기',
      items: [
        { type: 'blank', prompt: '짝의 소중한 때: ______________________' },
        { type: 'choice', prompt: '그때 짝의 마음에 ○ 하세요.', options: ['기쁨', '고마움', '뿌듯함', '설렘'] },
        { type: 'blank', prompt: '내가 짝에게 해 준 말: "그때 __________했구나."' },
        { type: 'check', prompt: '짝 이야기를 들을 때 한 일에 ✓ 하세요.', options: ['짝을 바라봤어요', '끝까지 들었어요', '"○○했구나" 하고 말했어요'] },
      ],
      easy: {
        note: '끝까지 듣고, "○○했구나!"',
        items: [
          { type: 'choice', prompt: '마음을 알아주는 말에 ○ 하세요.', options: ['그때 정말 기뻤겠다', '그게 뭐가 소중해'], answer: '그때 정말 기뻤겠다' },
          { type: 'blank', prompt: '짝의 소중한 때: ______________' },
          { type: 'draw', prompt: '짝의 소중한 때를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞게 놓으면 초록 테두리가 생겨요. 마음 잇기는 두 줄, 마음 크기는 세 칸이에요.',
      base: '모두 놓고 확인해요. 짝 인터뷰에서 질문을 하나 더 해요.',
      challenge: '함정 마음 카드와 함정 말이 섞여 있고, 알아주는 말 잇기가 세 줄이에요. 짝에게 질문을 두 개 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 친구 이야기를 듣다가 자기 이야기로 넘어간다 → 짝 인터뷰에서 듣는 사람은 "○○했구나"와 질문 하나만 하게 한다. ② 내 마음과 다르면 친구 마음을 부정한다 → 사람마다 소중한 때가 다르다는 것을 11차시(사람마다 다른 하루)와 이어 말한다. ③ 이야기하기를 부끄러워한다 → 그림일기를 그대로 읽어도 된다고 말한다.',
  }));

  // ───────────────────────── 17~20차시: 한 주를 돌아보고 내일을 정하기(하루의 가치 — 성찰과 습관화) ─────────────────────────

  lessons.push(L(17, {
    title: '한 주 그림일기를 이어 보며 달라진 점 찾기',
    objective: '일주일 동안의 그림과 기록을 차례대로 이어 놓고, 날마다 조금씩 달라진 점을 찾아 말할 수 있다.',
    illustration: ART('five small paper picture-diary pages pinned in a row on a string, showing a bean seed in a pot growing day by day into a leafy sprout', '날마다 조금씩', [
      { motif: 'leaf', x: 120, y: 226 }, { motif: 'flower', x: 380, y: 228, color: 'buttercup' }, { motif: 'tree', x: 250, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '한 주 동안 쓴 그림일기(9·13·15차시 그림 포함)를 책상 위에 펼치게 한다. "월요일 그림과 오늘 그림을 나란히 놓아 볼까요? 무엇이 달라졌나요?" "어제와 오늘은 똑같아요"라고 말하는 학생에게 교실 화분이나 손톱처럼 날마다 조금씩 자라는 것을 보여 준다(어제와 오늘은 아무것도 달라지지 않는다는 생각). 시연 단추로 강낭콩 그림이 차례대로 놓이는 모습을 보여 준다.',
        student: '내 그림일기 두 장을 나란히 놓고 달라진 점을 하나 찾아 말해 봐요.',
        demo: { tool: 'timeline', options: { cards: [{ id: 'seed', text: '강낭콩을 심었어요', motif: 'leaf' }, { id: 'sprout', text: '싹이 났어요', motif: 'flower' }], axis: ['먼저', '나중'], shuffle: false }, sequence: [{ order: ['seed', 'sprout'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 한 주 그림을 차례대로 잇기', minutes: 13, tool: 'timeline',
            teacher: '"월요일 그림이 어느 것일까요? 아직 자라지 않은 것이 먼저예요." 띠 왼쪽이 먼저, 오른쪽이 나중이라는 것을 짚는다. 그림을 다 이은 뒤 "날마다 아주 조금씩 달라져서 하루만 보면 모르지만, 이어 보면 보여요"라고 말한다.',
            task: '한 주 동안의 그림 카드를 먼저 일어난 것부터 왼쪽에 이어 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '강낭콩 관찰 그림을 먼저 그린 것부터 차례대로 놓아 보세요.', toolOptions: { cards: [{ id: 'plant', text: '흙에 강낭콩을 심었어요', motif: 'hills' }, { id: 'sprout', text: '흙 위로 싹이 올라왔어요', motif: 'leaf' }, { id: 'two', text: '떡잎 두 장이 벌어졌어요', motif: 'leaf' }, { id: 'many', text: '잎이 여러 장 났어요', motif: 'tree' }], slots: ['월', '화', '수', '목'], axis: ['먼저', '나중'] },
                target: { order: ['plant', 'sprout', 'two', 'many'] }, difficulty: 0.15,
                hints: ['아직 자라지 않은 그림이 먼저, 가장 많이 자란 그림이 나중이에요.', '흔들리는 카드의 강낭콩이 앞 카드보다 더 자랐는지 견주어 봐요.', '심기 → 싹 → 떡잎 두 장 → 잎 여러 장 차례예요.'],
                levels: { easy: { prompt: '강낭콩 관찰 그림을 먼저 그린 것부터 세 장 놓아 보세요.', toolOptions: { cards: [{ id: 'plant', text: '흙에 강낭콩을 심었어요', motif: 'hills' }, { id: 'sprout', text: '흙 위로 싹이 올라왔어요', motif: 'leaf' }, { id: 'many', text: '잎이 여러 장 났어요', motif: 'tree' }], slots: ['월', '수', '금'] }, target: { order: ['plant', 'sprout', 'many'] } } } },
              { prompt: '서아의 줄넘기 기록은 날마다 조금씩 늘었어요. 먼저 쓴 기록부터 놓아 보세요.', toolOptions: { cards: [{ id: 'one', text: '한 번 넘었어요', big: '1' }, { id: 'three', text: '세 번 넘었어요', big: '3' }, { id: 'six', text: '여섯 번 넘었어요', big: '6' }], slots: ['월', '수', '금'], axis: ['먼저', '나중'] },
                target: { order: ['one', 'three', 'six'] }, difficulty: 0.1,
                hints: ['날마다 늘었다면 가장 적은 기록이 맨 먼저예요.', '흔들리는 카드의 수가 앞 카드보다 큰지 견주어 봐요.', '1번 → 3번 → 6번 차례예요.'],
                levels: { challenge: { prompt: '서아의 줄넘기 기록은 날마다 조금씩 늘었어요. 다섯 날의 기록을 차례대로 놓아 보세요.', toolOptions: { cards: [{ id: 'one', text: '한 번 넘었어요', big: '1' }, { id: 'two', text: '두 번 넘었어요', big: '2' }, { id: 'three', text: '세 번 넘었어요', big: '3' }, { id: 'five', text: '다섯 번 넘었어요', big: '5' }, { id: 'six', text: '여섯 번 넘었어요', big: '6' }], slots: ['월', '화', '수', '목', '금'] }, target: { order: ['one', 'two', 'three', 'five', 'six'] } } } },
              { prompt: '준호가 반 친구 이름을 외운 기록이에요. 월요일과 금요일에 알맞은 카드를 놓아 보세요.', toolOptions: { mode: 'match', cards: ['친구 이름을 세 명 알았어요', '친구 이름을 열 명 알았어요'], slots: [{ id: 'mon', label: '월요일' }, { id: 'fri', label: '금요일' }], axis: ['먼저', '나중'] },
                target: { match: { mon: '친구 이름을 세 명 알았어요', fri: '친구 이름을 열 명 알았어요' } }, difficulty: 0.1,
                predict: { q: '월요일과 금요일의 준호는 똑같을까요?', options: ['똑같아요', '조금 달라졌어요'], answer: 1 },
                conclude: '날마다 조금씩 달라져서, 며칠을 이어 보면 달라진 점이 보여요.',
                hints: ['날마다 친구를 더 알게 되었다면 먼저는 적고 나중은 많아요.', '흔들리는 카드의 수가 그 요일에 맞는지 다시 봐요.', '월요일은 세 명, 금요일은 열 명이에요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 달라진 점을 더해 오늘 그림 꾸미기', minutes: 13, tool: 'collage',
            teacher: '"월요일 그림이 판에 놓여 있어요. 금요일에는 무엇이 더 생겼을까요?" 달라진 점만 더해 오늘 그림을 만들게 한다. 화면 문항을 마치면 내 그림일기 다섯 장을 차례대로 테이프로 이어 붙이고, 짝에게 "월요일에는 ○○였는데 금요일에는 ○○가 되었어요"로 말한다.',
            task: '앞날 그림에 달라진 점을 더해 오늘 그림을 꾸미고, 내 그림일기를 이어 붙여 짝에게 달라진 점을 말해요.',
            levels: SCENE_LV,
            items: [
              { prompt: '월요일 화분 그림이에요. 금요일에는 싹이 자랐어요. 초록 나뭇잎을 두 장 이상 더해 보세요.', state: { pieces: [{ shape: 'rect', color: '갈색', size: 'l', x: 280, y: 300, r: 0 }] }, target: { has: [{ shape: 'rect', color: '갈색', n: 1 }, { shape: 'leaf', color: '초록', min: 2 }] }, difficulty: 0.1,
                levels: { easy: { prompt: '월요일 화분 그림이에요. 금요일에는 싹이 자랐어요. 초록 세모 싹을 두 개 이상 더해 보세요.', toolOptions: { shapes: ['circle', 'square', 'rect', 'triangle', 'heart', 'star'] }, target: { has: [{ shape: 'rect', color: '갈색', n: 1 }, { shape: 'triangle', color: '초록', min: 2 }] } },
                  challenge: { prompt: '월요일 화분 그림이에요. 금요일에는 잎 네 장과 꽃봉오리 하나가 생겼어요. 초록 나뭇잎 넷과 분홍 하트 하나를 더해 보세요.', target: { has: [{ shape: 'rect', color: '갈색', n: 1 }, { shape: 'leaf', color: '초록', n: 4 }, { shape: 'heart', color: '분홍', n: 1 }] } } } },
              { prompt: '월요일 교실 게시판에 별 딱지가 하나 있어요. 금요일까지 날마다 하나씩 늘었어요. 노랑 별이 다섯 개가 되게 해 보세요.', state: { pieces: [{ shape: 'star', color: '노랑', size: 'm', x: 120, y: 200, r: 0 }] }, target: { has: [{ shape: 'star', color: '노랑', n: 5 }] }, difficulty: 0.15 },
              { prompt: '내 그림일기 다섯 장을 차례대로 이어 붙이고 짝에게 달라진 점을 말했으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"짝의 그림일기에서 달라진 점은 무엇이었나요?" 두세 명이 소개하게 한다. "어제와 오늘이 똑같아 보여도 이어 보면 달라진 점이 있어요"라고 정리한다. 이어 붙인 그림일기는 교실 뒤 줄에 걸어 둔다. 출구 1번에서 카드를 거꾸로 놓은 학생에게는 머리카락처럼 날마다 자라는 것을 떠올리게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'timeline', options: { cards: [{ id: 's', text: '손톱이 짧아요', motif: 'leaf' }, { id: 'm', text: '손톱이 조금 자랐어요', motif: 'leaf' }, { id: 'l', text: '손톱을 깎을 만큼 자랐어요', motif: 'tree' }], axis: ['먼저', '나중'] }, prompt: '손톱을 깎은 날부터 일주일 동안의 그림을 먼저 그린 것부터 놓아 보세요.', target: { order: ['s', 'm', 'l'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '어제와 오늘의 나는 어떨까요?', options: ['아무것도 달라지지 않아요', '조금씩 달라져요'], answer: 1, difficulty: 0.1, explain: '날마다 조금씩 자라고 배워서, 이어 보면 달라진 점이 보여요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '날마다 조금씩 달라져요',
      items: [
        { type: 'figure', wide: true, prompt: '먼저 그린 그림부터 1, 2, 3을 쓰세요.', tool: 'timeline', figures: [{ options: { cards: [{ id: 'two', text: '떡잎 두 장', motif: 'leaf' }, { id: 'plant', text: '강낭콩 심기', motif: 'hills' }, { id: 'many', text: '잎 여러 장', motif: 'tree' }], axis: ['먼저', '나중'], shuffle: false }, caption: '' }], answer: '심기 → 떡잎 두 장 → 잎 여러 장' },
        { type: 'table', prompt: '내 그림일기에서 달라진 점을 쓰세요.', columns: ['월요일에는', '금요일에는'], rows: 1 },
        { type: 'choice', prompt: '하루만 보면 잘 모르지만 며칠을 이어 보면 보이는 것에 ○ 하세요.', options: ['강낭콩이 자라요', '교실 칠판 색'], answer: '강낭콩이 자라요' },
        { type: 'short', prompt: '이번 주에 내가 달라진 점을 한 문장으로 쓰세요.' },
      ],
      easy: {
        note: '먼저 그린 그림과 나중 그림을 나란히 놓아요.',
        items: [
          { type: 'choice', prompt: '먼저 그린 그림에 ○ 하세요.', options: ['강낭콩을 심었어요', '잎이 여러 장 났어요'], answer: '강낭콩을 심었어요' },
          { type: 'blank', prompt: '월요일에는 ________, 금요일에는 ________.' },
          { type: 'draw', prompt: '이번 주에 달라진 것을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 초록 테두리가 생겨요. 강낭콩 그림은 세 장이고, 싹은 세모로 붙여요.',
      base: '카드를 모두 놓고 확인해요. 나뭇잎 조각으로 싹을 붙여요.',
      challenge: '줄넘기 기록이 다섯 날로 늘고, 화분에 잎 넷과 꽃봉오리를 정확히 더해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 어제와 오늘은 똑같다고 여긴다(핵심 오개념) → 며칠 떨어진 그림을 나란히 놓게 한다. ② 그림일기를 날짜 순서로 놓지 못한다 → 날짜를 먼저 확인하게 한다. ③ 달라진 점을 "그냥 달라요"로만 말한다 → "무엇이 더 생겼나요, 무엇이 늘었나요?"로 묻는다. 교실 강낭콩을 실제로 기르고 있다면 그 관찰 그림을 써도 좋다.',
  }));

  lessons.push(L(18, {
    title: '어제와 오늘 달라진 나 찾아 기록하기',
    objective: '어제보다 오늘 할 수 있게 된 일을 찾아 말하고, 한 주의 기록을 그림그래프로 나타내 달라진 점을 읽을 수 있다.',
    illustration: ART('a paper child standing next to a height chart on a wall, with small sticker circles growing in rows on a weekly record sheet beside', '어제보다 오늘', [
      { motif: 'star', x: 120, y: 84, s: 0.5 }, { motif: 'house', x: 380, y: 214, color: 'mint' }, { motif: 'flower', x: 250, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"1학년이 되어 처음 학교에 온 날과 지금, 무엇이 달라졌나요?" 급식 먹기, 혼자 화장실 가기, 글자 읽기 같은 대답을 모은다. "그럼 어제와 오늘은요?"라고 묻고 아주 작은 달라짐도 찾을 수 있다고 말한다. 시연 단추로 어제와 오늘의 카드가 짝 지어지는 모습을 보여 준다.',
        student: '1학년이 되어 할 수 있게 된 일을 하나 말해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '달라진 나', slots: [{ id: 'y', label: '어제' }, { id: 't', label: '오늘' }], cards: ['단추를 반만 채웠어요', '단추를 다 채웠어요'], shuffle: false }, sequence: [{ match: { y: '단추를 반만 채웠어요', t: '단추를 다 채웠어요' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 어제와 오늘의 나 견주기', minutes: 12, tool: 'mindmap',
            teacher: '"민지는 날마다 조금씩 나아졌어요. 그럼 어제의 민지는 어느 카드일까요?" 문항의 단서(조금씩 나아졌어요)를 먼저 읽게 한다. 달라진 나를 찾는 문장은 "어제보다", "처음으로" 같은 말로 시작하면 쉽다고 알려 준다. "나는 늘 똑같아요"라고 말하는 학생에게 오늘 아침 한 일 가운데 처음 해 본 것이 있는지 묻는다.',
            task: '어제와 오늘의 카드를 견주어 잇고, 달라진 점을 말한 문장을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '민지는 날마다 조금씩 나아졌어요. 어제와 오늘에 알맞은 카드를 놓아 보세요.', toolOptions: { mode: 'match', topic: '달라진 민지', slots: [{ id: 'y', label: '어제' }, { id: 't', label: '오늘' }], cards: ['신발 끈을 반만 맸어요', '신발 끈을 끝까지 맸어요'] },
                target: { match: { y: '신발 끈을 반만 맸어요', t: '신발 끈을 끝까지 맸어요' } }, difficulty: 0.05,
                hints: ['날마다 나아졌다면 어제가 덜 하고 오늘이 더 해요.', '흔들리는 카드가 더 잘한 쪽인지 덜 한 쪽인지 다시 봐요.', '어제는 반만, 오늘은 끝까지예요.'],
                levels: { challenge: { prompt: '민지는 날마다 조금씩 나아졌어요. 그제·어제·오늘에 알맞은 카드를 놓아 보세요.', toolOptions: { slots: [{ id: 'b', label: '그제' }, { id: 'y', label: '어제' }, { id: 't', label: '오늘' }], cards: ['신발 끈을 못 맸어요', '신발 끈을 반만 맸어요', '신발 끈을 끝까지 맸어요'] }, target: { match: { b: '신발 끈을 못 맸어요', y: '신발 끈을 반만 맸어요', t: '신발 끈을 끝까지 맸어요' } } } } },
              { prompt: '오늘 달라진 점을 말한 문장만 골라 보세요.', toolOptions: { mode: 'pick', basket: '달라진 나', cards: ['어제보다 일찍 일어났어요', '처음으로 우유갑을 혼자 열었어요', '나는 늘 똑같아요', '오늘도 아무 일 없었어요'] },
                target: { pick: ['어제보다 일찍 일어났어요', '처음으로 우유갑을 혼자 열었어요'] }, difficulty: 0.15,
                predict: { q: '"나는 늘 똑같아요"는 맞는 말일까요?', options: ['맞아요', '찾아보면 달라진 점이 있어요'], answer: 1 },
                conclude: '"어제보다", "처음으로"를 넣어 보면 달라진 나를 찾을 수 있어요.' },
              { prompt: '달라진 나를 두 갈래로 나누어 보세요.', toolOptions: { topic: '달라진 나', slots: ['몸이 자랐어요', '할 수 있게 되었어요'], cards: ['키가 1센티미터 컸어요', '앞니가 새로 났어요', '혼자 머리를 묶어요', '두발자전거를 타요'] },
                target: { sort: { '몸이 자랐어요': ['키가 1센티미터 컸어요', '앞니가 새로 났어요'], '할 수 있게 되었어요': ['혼자 머리를 묶어요', '두발자전거를 타요'] } }, difficulty: 0.15,
                hints: ['카드가 몸의 크기·모습에 관한 것인지, 내가 하는 일에 관한 것인지 따져요.', '흔들리는 카드가 몸이 저절로 자란 것인지, 연습해서 하게 된 것인지 생각해요.', '키와 앞니는 몸, 머리 묶기와 자전거는 할 수 있게 된 일이에요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 한 주 기록을 그림그래프로 나타내기', minutes: 14, tool: 'chart',
            teacher: '"서아가 날마다 줄넘기 기록을 붙임 딱지로 남겼어요. 표의 수만큼 동그라미를 놓아 볼까요?" 한 칸씩 손가락으로 세며 동그라미를 늘리게 한다. 다 만든 뒤 "가장 많이 넘은 날은? 처음과 끝은 얼마나 달라졌나요?"를 묻는다. 문항을 마치면 활동지에 내 한 주 기록(줄넘기, 책 읽은 쪽수 가운데 하나)을 동그라미로 그리게 한다.',
            task: '표의 수만큼 동그라미를 놓아 한 주 기록을 그림그래프로 만들고, 달라진 점을 읽어요.',
            levels: { easy: { showValues: true }, base: {}, challenge: {} },
            items: [
              { prompt: '서아의 줄넘기 기록이에요. 표를 보고 날마다 동그라미를 놓아 보세요.', toolOptions: { type: 'picture', title: '서아의 줄넘기', unit: '번', data: [['월', 2], ['화', 3], ['수', 5]], icons: [{ value: 1, name: '1번' }], icon: 'circle', given: [0] }, target: { build: true }, difficulty: 0.15,
                levels: { easy: { toolOptions: { given: [0, 1] } }, challenge: { prompt: '서아의 줄넘기 기록이에요. 표를 보고 다섯 날의 동그라미를 놓아 보세요.', toolOptions: { data: [['월', 2], ['화', 3], ['수', 5], ['목', 4], ['금', 7]], given: [] } } } },
              { prompt: '그래프를 보고 고르세요. 준호가 책을 가장 많이 읽은 날은?', toolOptions: { type: 'picture', mode: 'read', title: '준호가 읽은 책', unit: '권', data: [['월', 1], ['화', 2], ['수', 4], ['목', 3]], icons: [{ value: 1, name: '1권' }], icon: 'circle', question: '가장 많이 읽은 날은?', choices: ['월', '화', '수', '목'] }, target: { pick: 2 }, difficulty: 0.15,
                levels: { challenge: { prompt: '그래프를 보고 고르세요. 준호는 수요일에 월요일보다 몇 권 더 읽었나요?', toolOptions: { question: '몇 권 더 읽었나요?', choices: ['1권', '3권', '4권'] }, target: { pick: 1 } } } },
              { prompt: '그래프를 보고 고르세요. 민지의 기록은 월요일부터 어떻게 달라졌나요?', toolOptions: { type: 'picture', mode: 'read', title: '민지의 줄넘기', unit: '번', data: [['월', 1], ['화', 3], ['수', 4], ['목', 6]], icons: [{ value: 1, name: '1번' }], icon: 'circle', question: '기록은 어떻게 달라졌나요?', choices: ['점점 늘었어요', '점점 줄었어요', '그대로예요'] }, target: { pick: 0 }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"내 활동지 그래프에서 처음과 끝은 얼마나 달라졌나요?" 두세 명이 발표한다. 기록이 줄어든 날이 있는 학생에게는 "그런 날도 있어요. 다음 날 다시 해 보면 돼요"라고 말해 준다. 출구 1번을 바꾸어 놓은 학생은 "점점 나아졌어요"라는 단서를 다시 읽게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '달라진 하준', slots: [{ id: 'y', label: '지난주' }, { id: 't', label: '이번 주' }], cards: ['받아쓰기 다섯 개를 맞혔어요', '받아쓰기 여덟 개를 맞혔어요'] }, prompt: '하준이는 점점 나아졌어요. 지난주와 이번 주에 알맞은 카드를 놓아 보세요.', target: { match: { y: '받아쓰기 다섯 개를 맞혔어요', t: '받아쓰기 여덟 개를 맞혔어요' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '달라진 나를 찾을 때 쓰기 좋은 말은?', options: ['어제보다, 처음으로', '늘, 언제나 똑같이'], answer: 0, difficulty: 0.1, explain: '"어제보다", "처음으로"를 넣으면 달라진 점이 잘 보여요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '어제보다 오늘',
      items: [
        { type: 'table', prompt: '내 한 주 기록을 쓰세요(줄넘기 횟수나 읽은 책 수).', columns: ['월', '화', '수', '목', '금'], rows: 1 },
        { type: 'draw', prompt: '위 기록만큼 날마다 동그라미를 그려 그림그래프를 만드세요.' },
        { type: 'blank', prompt: '어제보다 오늘 ______________________.' },
        { type: 'choice', prompt: '달라진 점을 말한 문장에 ○ 하세요.', options: ['나는 늘 똑같아요', '처음으로 혼자 우유갑을 열었어요'], answer: '처음으로 혼자 우유갑을 열었어요' },
      ],
      easy: {
        note: '"어제보다", "처음으로"로 시작해요.',
        items: [
          { type: 'choice', prompt: '달라진 점을 말한 문장에 ○ 하세요.', options: ['어제보다 일찍 일어났어요', '오늘도 아무 일 없었어요'], answer: '어제보다 일찍 일어났어요' },
          { type: 'blank', prompt: '처음으로 ______________ 했어요.' },
          { type: 'draw', prompt: '할 수 있게 된 일을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞게 놓으면 초록 테두리가 생겨요. 그래프는 두 날이 미리 그려져 있고 수가 함께 보여요.',
      base: '모두 놓고 확인해요. 그래프는 첫날만 그려져 있어요.',
      challenge: '그제·어제·오늘 세 칸을 잇고, 다섯 날 그래프를 처음부터 만들어요. 몇 권 더 읽었는지 셈해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① "나는 늘 똑같아요"라고 한다 → "처음으로"를 넣은 문장을 함께 만든다. ② 그림그래프에서 동그라미를 한꺼번에 많이 놓는다 → 표의 수를 소리 내어 세며 하나씩 놓게 한다. ③ 기록이 줄어든 날을 부끄러워한다 → 들쭉날쭉해도 길게 보면 달라진다는 것을 그래프로 보여 준다. 활동지 기록은 25차시(한 주 습관 세기)에도 같은 방법으로 쓴다.',
  }));

  lessons.push(L(19, {
    title: '내일 꼭 하고 싶은 일 하나 정하기',
    objective: '내일 할 수 있는 일 가운데 꼭 하고 싶은 일을 하나 정하고, 잊지 않도록 종이에 적어 붙이는 차례를 알 수 있다.',
    illustration: ART('a paper sticky note on a bedroom door saying tomorrow with a small drawing of a child watering a plant, the morning sun peeking through a window', '내일 할 일', [
      { motif: 'sun', x: 120, y: 84, s: 0.6 }, { motif: 'house', x: 380, y: 214, color: 'buttercup' }, { motif: 'flower', x: 250, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"내일 아침에 일어나면 꼭 하고 싶은 일이 있나요?" 두세 명의 대답을 듣는다. "하늘 날기"처럼 할 수 없는 일이 나오면 웃으며 "멋진 꿈이네요. 그런데 내일 정말 할 수 있을까요?"라고 되묻는다. 시연 단추로 내일 할 수 있는 일이 바구니에 들어가는 모습을 보여 준다.',
        student: '내일 꼭 하고 싶은 일을 하나 떠올려 짝에게 말해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'pick', basket: '내일 할 수 있어요', cards: ['화분에 물 주기', '하늘을 날기'], shuffle: false }, sequence: [{ pick: ['화분에 물 주기'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 내일 할 수 있는 일 고르기', minutes: 13, tool: 'mindmap',
            teacher: '"내일 하루 안에, 내 힘으로 할 수 있는 일인가요?" 두 질문으로 카드를 따져 보게 한다. "많이 하기"처럼 흐릿한 다짐보다 "열 쪽 읽기"처럼 얼마나 할지 정한 다짐이 지키기 쉽다는 것을 짚는다. 하고 싶은 일을 언제 할지 정하면 잊지 않는다고 말한다.',
            task: '내일 할 수 있는 일을 고르고, 하고 싶은 일을 언제 할지 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '내일 하루 안에 내 힘으로 할 수 있는 일만 골라 보세요.', toolOptions: { mode: 'pick', basket: '내일 할 수 있어요', cards: ['동생에게 그림책 읽어 주기', '아침에 이불 개기', '하루 만에 키 10센티미터 크기', '하늘을 날아서 학교 가기'] },
                target: { pick: ['동생에게 그림책 읽어 주기', '아침에 이불 개기'] }, difficulty: 0.05,
                levels: { challenge: { toolOptions: { cards: ['동생에게 그림책 읽어 주기', '아침에 이불 개기', '하루 만에 키 10센티미터 크기', '하늘을 날아서 학교 가기', '내일 생일 만들기'] } } } },
              { prompt: '얼마나 할지 또렷하게 정한 다짐만 골라 보세요.', toolOptions: { mode: 'pick', basket: '또렷한 다짐', cards: ['그림책 열 쪽 읽기', '줄넘기 다섯 번 넘기', '책 많이 읽기', '운동 열심히 하기'] },
                target: { pick: ['그림책 열 쪽 읽기', '줄넘기 다섯 번 넘기'] }, difficulty: 0.2,
                predict: { q: '"책 많이 읽기"와 "열 쪽 읽기" 가운데 지켰는지 알기 쉬운 것은?', options: ['많이 읽기', '열 쪽 읽기'], answer: 1 },
                conclude: '얼마나 할지 정한 다짐은 지켰는지 알기 쉬워요.' },
              { prompt: '다짐 속 말을 보고 언제 할 일인지 이어 보세요.', toolOptions: { mode: 'match', topic: '언제 할까', slots: [{ id: 's1', label: '해가 뜨면 화분에 물 주기' }, { id: 's2', label: '학교 끝나고 집에 와서 할머니께 전화하기' }, { id: 's3', label: '잠옷 입고 동생에게 그림책 읽어 주기' }], cards: ['아침', '오후', '밤'] },
                target: { match: { s1: '아침', s2: '오후', s3: '밤' } }, difficulty: 0.1,
                conclude: '언제 할지 정해 두면 잊지 않고 할 수 있어요.',
                hints: ['다짐 속에 때를 알려 주는 말(해가 뜨면, 학교 끝나고, 잠옷 입고)이 있어요.', '흔들리는 카드의 때와 다짐 속 말이 맞는지 다시 읽어요.', '해가 뜨면은 아침, 학교 끝나고는 오후, 잠옷 입고는 밤이에요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 내일 다짐 쪽지 만들기', minutes: 13, tool: 'kitchen',
            teacher: '"다짐을 정하고 그냥 두면 내일 아침에 기억날까요?" 쪽지에 적어 잘 보이는 곳에 붙이는 차례를 익힌다. 그다음 손바닥만 한 쪽지에 "내일 ○○에 ○○을 할 거예요"를 쓰고 그림을 하나 그린다. 쪽지는 집에 가서 방문이나 책상에 붙이게 한다.',
            task: '다짐 쪽지 만드는 차례를 놓고, 내 다짐 쪽지를 써서 그려요.',
            levels: CARD_LV,
            items: [
              { prompt: '다짐 쪽지를 만들어 지키는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['내일 할 일 하나를 정해요', '쪽지에 적고 그림을 그려요', '잘 보이는 곳에 붙여요', '다음 날 해 보고 ○ 해요'] },
                target: { order: ['내일 할 일 하나를 정해요', '쪽지에 적고 그림을 그려요', '잘 보이는 곳에 붙여요', '다음 날 해 보고 ○ 해요'] }, difficulty: 0.15,
                hints: ['무엇을 할지 모르면 쪽지에 쓸 수 없어요. 맨 처음은 무엇일까요?', '흔들리는 카드 앞에 꼭 해야 할 일이 있는지 생각해요.', '정하기 → 적기 → 붙이기 → 해 보고 ○ 차례예요.'],
                levels: { easy: { prompt: '다짐 쪽지를 만드는 차례대로 세 장을 놓아 보세요.', toolOptions: { cards: ['내일 할 일 하나를 정해요', '쪽지에 적고 그림을 그려요', '잘 보이는 곳에 붙여요'] }, target: { order: ['내일 할 일 하나를 정해요', '쪽지에 적고 그림을 그려요', '잘 보이는 곳에 붙여요'] } } } },
              { prompt: '다짐 쪽지에 꼭 들어갈 것만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '다짐 쪽지', items: [{ id: 'what', text: '무엇을 할지' }, { id: 'when', text: '언제 할지' }, { id: 'pic', text: '할 일을 그린 그림' }, { id: 'friend', text: '친구 전화번호' }] },
                target: { checklist: ['what', 'when', 'pic'] }, difficulty: 0.15,
                levels: { easy: { prompt: '다짐 쪽지에 꼭 들어갈 것만 표시해 보세요. 세 가지 가운데 두 가지예요.', toolOptions: { items: [{ id: 'what', text: '무엇을 할지' }, { id: 'when', text: '언제 할지' }, { id: 'friend', text: '친구 전화번호' }] }, target: { checklist: ['what', 'when'] } },
                  challenge: { toolOptions: { items: [{ id: 'what', text: '무엇을 할지' }, { id: 'when', text: '언제 할지' }, { id: 'pic', text: '할 일을 그린 그림' }, { id: 'friend', text: '친구 전화번호' }, { id: 'pw', text: '집 비밀번호' }] } } } },
              { prompt: '내 다짐 쪽지에 "내일 ○○에 ○○을 할 거예요"를 쓰고 그림을 그렸으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"짝의 다짐 쪽지에 무엇을, 언제가 모두 들어 있나요?" 짝끼리 쪽지를 바꾸어 보고 빠진 것을 말해 준다. 내일 아침 첫 시간에 "다짐을 해 보았나요?"를 물을 것이라고 알린다. 출구 1번에서 할 수 없는 일을 고른 학생은 "내일 하루 안에, 내 힘으로?"를 다시 물어보게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', basket: '내일 할 수 있어요', cards: ['신발장 정리하기', '공룡 만나러 가기', '친구에게 먼저 인사하기'] }, prompt: '내일 하루 안에 내 힘으로 할 수 있는 일만 골라 보세요.', target: { pick: ['신발장 정리하기', '친구에게 먼저 인사하기'] }, difficulty: 0.05 },
          { type: 'choice', prompt: '지켰는지 알기 쉬운 다짐은?', options: ['줄넘기 열심히 하기', '줄넘기 다섯 번 넘기'], answer: 1, difficulty: 0.15, explain: '얼마나 할지 정하면 지켰는지 알 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '내일 다짐 쪽지',
      items: [
        { type: 'blank', prompt: '내일 ______(언제)에 __________________을(를) 할 거예요.' },
        { type: 'draw', prompt: '내일 할 일을 그려 보세요.' },
        { type: 'check', prompt: '내 다짐 쪽지를 점검해 ✓ 하세요.', options: ['무엇을 할지 썼어요', '언제 할지 썼어요', '얼마나 할지 정했어요'] },
        { type: 'table', prompt: '내일 해 본 뒤 ○ 하세요.', columns: ['내 다짐', '해 봤어요(○)'], rows: 1 },
      ],
      easy: {
        note: '내일, 내 힘으로 할 수 있는 일 하나!',
        items: [
          { type: 'choice', prompt: '내일 할 수 있는 일에 ○ 하세요.', options: ['이불 개기', '하늘 날기'], answer: '이불 개기' },
          { type: 'blank', prompt: '내일 ________을(를) 할 거예요.' },
          { type: 'draw', prompt: '내일 할 일을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞게 놓으면 초록 테두리가 생겨요. 차례 카드는 세 장, 쪽지 점검은 세 가지예요.',
      base: '모두 놓고 확인해요. 다짐 쪽지에 무엇과 언제를 써요.',
      challenge: '할 수 없는 함정 카드와 함정 항목이 더 있어요. 다짐에 얼마나 할지까지 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 할 수 없는 큰 꿈을 다짐으로 고른다 → "내일 하루 안에, 내 힘으로?" 두 질문을 붙여 둔다. ② "열심히 하기"처럼 흐릿하게 쓴다 → "얼마나?"를 되묻는다. ③ 쪽지를 집에 가져가지 않는다 → 알림장 사이에 끼워 보낸다. 쪽지에는 전화번호·비밀번호 같은 개인 정보를 쓰지 않는다는 것도 함께 알려 준다(도전 함정 항목).',
  }));

  lessons.push(L(20, {
    title: '한 주의 마음 날씨를 돌아보고 다음 주 다짐 꾸미기',
    objective: '한 주 동안의 일과 그때의 마음 날씨를 이어 돌아보고, 다음 주에 지킬 다짐을 하나 골라 꾸밀 수 있다.',
    illustration: ART('a paper weekly weather chart for feelings: five boxes with a sun, a cloud, a rainbow, a rain cloud and a star, a child pinning a small promise badge below', '한 주 마음 날씨', [
      { motif: 'cloud', x: 300, y: 64 }, { motif: 'house', x: 110, y: 214, color: 'sky' }, { motif: 'star', x: 380, y: 96, s: 0.5 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"어제 쓴 다짐 쪽지, 해 본 사람?" 손을 든 학생에게 어땠는지 묻고, 못 한 학생에게는 "무엇이 어려웠나요?"를 탓하지 않고 묻는다. "이번 주 내 마음 날씨는 어땠을까요? 날마다 같았나요?" 시연 단추로 요일과 마음 날씨가 이어지는 모습을 보여 준다.',
        student: '이번 주에 마음이 가장 맑았던 날을 떠올려 말해 봐요.',
        demo: { tool: 'emotion', options: { cards: ['기쁨', '속상함'], slots: [{ id: 's1', label: '월: 짝이 생겼어요' }, { id: 's2', label: '화: 우유를 쏟았어요' }], shuffle: false }, sequence: [{ match: { s1: '기쁨', s2: '속상함' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 한 주의 일과 마음 날씨 잇기', minutes: 13, tool: 'emotion',
            teacher: '"하준이의 한 주예요. 날마다 마음 날씨가 같았나요?" 요일별 일을 읽고 마음 카드를 놓게 한다. 속상한 날이 있어도 한 주 안에 맑은 날이 다시 온다는 것을 짚는다. 마음이 바뀐 차례 문항에서는 무엇 때문에 바뀌었는지 까닭을 찾게 한다.',
            task: '한 주 동안의 일과 그날 마음을 잇고, 마음이 바뀐 차례를 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '하준이의 한 주예요. 요일마다 그날 마음을 이어 보세요.', toolOptions: { cards: ['기쁨', '속상함', '뿌듯함'], slots: [{ id: 'mon', label: '월: 짝과 같이 웃었어요' }, { id: 'tue', label: '화: 넘어져 무릎이 까졌어요' }, { id: 'wed', label: '수: 받아쓰기를 다 맞혔어요' }] },
                target: { match: { mon: '기쁨', tue: '속상함', wed: '뿌듯함' } }, difficulty: 0.1,
                levels: { challenge: { prompt: '하준이의 한 주예요. 다섯 요일의 마음을 이어 보세요.', toolOptions: { cards: ['기쁨', '속상함', '뿌듯함', '고마움', '설렘'], slots: [{ id: 'mon', label: '월: 짝과 같이 웃었어요' }, { id: 'tue', label: '화: 넘어져 무릎이 까졌어요' }, { id: 'wed', label: '수: 받아쓰기를 다 맞혔어요' }, { id: 'thu', label: '목: 친구가 밴드를 붙여 줬어요' }, { id: 'fri', label: '금: 내일 소풍을 가요' }] }, target: { match: { mon: '기쁨', tue: '속상함', wed: '뿌듯함', thu: '고마움', fri: '설렘' } } } } },
              { prompt: '서아의 마음이 바뀐 차례대로 놓아 보세요. 그림을 망쳐 속상했다가, 다시 그려 보고, 다 그려서 뿌듯했어요.', toolOptions: { mode: 'order', cards: ['속상함', '다시 해 봄', '뿌듯함'], slots: ['처음', '가운데', '끝'] },
                target: { order: ['속상함', '다시 해 봄', '뿌듯함'] }, difficulty: 0.1 },
              { prompt: '이번 주 가장 속상했던 날, 다음에 마음이 맑아지게 할 수 있는 일만 골라 보세요.', toolOptions: { mode: 'pick', basket: '마음이 맑아지는 일', cards: ['선생님께 이야기해요', '숨을 크게 쉬어요', '물건을 던져요', '혼자 꾹 참고 울어요'] },
                target: { pick: ['선생님께 이야기해요', '숨을 크게 쉬어요'] }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['선생님께 이야기해요', '숨을 크게 쉬어요', '물건을 던져요', '혼자 꾹 참고 울어요', '친구에게 화풀이해요'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 다음 주 다짐 배지 꾸미기', minutes: 13, tool: 'collage',
            teacher: '"다음 주에 지킬 다짐을 하나 고르세요. 배지에 그 다짐이 보이게 꾸며요." 이 단원에서 정한 습관(손 씻기, 일찍 자기, 칭찬 카드 쓰기, 그림일기 쓰기) 가운데 하나를 골라도 좋다고 안내한다. 화면 배지를 꾸민 뒤 활동지 동그라미 배지에 같은 그림을 그려 오려 가슴에 붙인다(가위는 앉아서 쓰고 다 쓰면 날을 닫아 둔다).',
            task: '화면에서 다짐 배지를 꾸미고, 활동지 배지를 그려 오려 가슴에 붙여요.',
            levels: SCENE_LV,
            items: [
              { prompt: '"일찍 자기" 다짐 배지예요. 노랑 반원 달 하나와 노랑 별 두 개 이상을 붙여 보세요.', target: { has: [{ shape: 'semi', color: '노랑', n: 1 }, { shape: 'star', color: '노랑', min: 2 }] }, difficulty: 0.1,
                levels: { easy: { prompt: '"일찍 자기" 다짐 배지예요. 노랑 별 두 개 이상과 파랑 네모 이불 하나를 붙여 보세요.', target: { has: [{ shape: 'star', color: '노랑', min: 2 }, { shape: 'square', color: '파랑', n: 1 }] } } } },
              { prompt: '내가 고른 다음 주 다짐 배지를 조각 세 개 넘게 붙여 꾸미고 점검해 보세요.', target: { selfCheck: ['다짐이 무엇인지 그림으로 보여요', '가장 중요한 모양이 크게 있어요', '짝이 내 다짐을 맞혔어요'], minPieces: 3 }, difficulty: 0.1 },
              { prompt: '활동지 배지를 그려 오려서 가슴에 붙였으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"짝의 배지를 보고 다짐을 맞혀 볼까요?" 두세 짝이 서로 맞히게 한다. 한 주 동안 하루를 그리고, 마음에 남는 때를 찾고, 달라진 점을 보고, 다짐을 세운 과정을 칠판에 차례로 적어 돌아본다. 다음 주에는 몸의 건강과 안전을 알아본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { cards: ['고마움', '속상함'], slots: [{ id: 'e1', label: '목: 아끼던 연필을 잃어버렸어요' }, { id: 'e2', label: '금: 친구가 연필을 찾아 줬어요' }] }, prompt: '한 주의 일과 그날 마음을 이어 보세요.', target: { match: { e1: '속상함', e2: '고마움' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '한 주의 마음 날씨는 어땠을까요?', options: ['날마다 똑같아요', '날마다 다를 수 있어요'], answer: 1, difficulty: 0.05, explain: '하루마다 있었던 일이 달라 마음 날씨도 달라져요.' },
          { type: 'tool', tool: 'emotion', options: { mode: 'scale', steps: 3, situation: '이번 주 내 하루들을 떠올려 보아요.', feeling: '기쁨', ask: '이번 주는 나에게 얼마나 즐거웠나요?' }, prompt: '이번 주 내 마음을 솔직하게 골라 보세요. 정답은 없어요.', target: { level: 'any' }, difficulty: 0.05 },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '한 주 마음 날씨와 다짐',
      items: [
        { type: 'table', prompt: '이번 주 요일마다 마음 날씨를 그리세요(해·구름·비·무지개).', columns: ['월', '화', '수', '목', '금'], rows: 1 },
        { type: 'short', prompt: '마음이 가장 맑았던 날과 그 까닭을 쓰세요.' },
        { type: 'choice', prompt: '속상할 때 마음이 맑아지게 하는 일에 ○ 하세요.', options: ['물건을 던져요', '선생님께 이야기해요'], answer: '선생님께 이야기해요' },
        { type: 'draw', prompt: '다음 주 다짐 배지를 동그라미 안에 그려 오리세요.' },
      ],
      easy: {
        note: '해·구름·비 그림으로 그려도 돼요.',
        items: [
          { type: 'table', prompt: '이번 주 마음 날씨를 그리세요.', columns: ['월', '수', '금'], rows: 1 },
          { type: 'choice', prompt: '속상할 때 할 일에 ○ 하세요.', options: ['숨을 크게 쉬어요', '물건을 던져요'], answer: '숨을 크게 쉬어요' },
          { type: 'draw', prompt: '다음 주 다짐 배지를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞게 놓으면 초록 테두리가 생겨요. 배지는 별과 네모 이불로 꾸며요.',
      base: '모두 놓고 확인해요. 배지에 달과 별을 붙여요.',
      challenge: '다섯 요일의 마음을 모두 잇고, 함정 행동이 하나 더 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 속상한 날을 숨기려 한다 → 마음 날씨는 날마다 바뀌는 것이고 비 오는 날도 괜찮다고 말한다. 출구의 마음 크기 문항은 정답이 없다. ② 다짐을 여러 개 적는다 → 배지에는 하나만 담게 한다. ③ 가위질이 서툴다 → 배지 동그라미를 크게 그리고, 앉아서 오리게 한다. 배지 다짐은 25차시(한 주 습관 세기)에 다시 확인한다.',
  }));

  // ───────────────────────── 21~24차시: 몸에 좋은 일·해로운 일, 안전한 길(건강한 하루 — 개념) ─────────────────────────

  var BODY_LV = {
    easy: { parts: ['눈', '귀', '피부', '허리', '무릎'], names: true },
    base: { parts: ['눈', '귀', '코', '피부', '목', '허리', '무릎'] },
    challenge: {},
  };

  lessons.push(L(21, {
    title: '몸에 좋은 일과 해로운 일 나누기',
    objective: '하루 동안 하는 일을 몸에 좋은 일과 해로운 일로 나누고, 재미있는 일도 지나치면 몸에 해롭다는 것을 말할 수 있다.',
    illustration: ART('a paper child skipping rope next to a bowl of fruit on one side, and a tilted tablet screen with a pile of candy wrappers on the other side', '몸에 좋은 일', [
      { motif: 'sun', x: 120, y: 84, s: 0.6 }, { motif: 'tree', x: 390, y: 214 }, { motif: 'flower', x: 250, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"어제 집에 가서 한 일 가운데 가장 재미있었던 일은?" 게임, 사탕, 유튜브 같은 대답을 칠판에 적는다. "재미있는 일은 몸에도 다 좋을까요?"라고 묻고 손을 들게 한다(재미있는 일은 몸에 해롭지 않다는 생각). 오늘은 몸이 좋아하는 일과 몸이 힘들어하는 일을 나누어 본다고 안내한다. 시연 단추로 카드가 두 갈래로 나뉘는 모습을 보여 준다.',
        student: '어제 한 일 가운데 몸이 좋아했을 것 같은 일을 하나 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '내 몸', slots: ['몸에 좋아요', '몸에 해로워요'], cards: ['채소 먹기', '밤늦게까지 깨어 있기'], shuffle: false }, sequence: [{ sort: { '몸에 좋아요': ['채소 먹기'], '몸에 해로워요': ['밤늦게까지 깨어 있기'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 좋은 일과 해로운 일 나누기', minutes: 13, tool: 'mindmap',
            teacher: '"이 일을 하고 나면 내 몸은 어떻게 될까요?" 카드마다 하고 난 뒤의 몸을 떠올리게 한다. 사탕·게임 카드에서 "재미있으니까 좋아요"라고 하면 "그럼 하루 종일 하면 몸은 어떨까요?"라고 되묻는다. 재미있어도 지나치면 몸에 해로울 수 있다는 것을 짚는다.',
            task: '하고 난 뒤의 몸을 떠올리며 카드를 몸에 좋은 일과 해로운 일로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '카드를 몸에 좋은 일과 해로운 일로 나누어 보세요.', toolOptions: { topic: '내 몸', slots: ['몸에 좋아요', '몸에 해로워요'], cards: ['밥을 골고루 먹기', '밖에서 뛰어놀기', '잠자기 전 사탕 먹기', '잠도 안 자고 게임하기'] },
                target: { sort: { '몸에 좋아요': ['밥을 골고루 먹기', '밖에서 뛰어놀기'], '몸에 해로워요': ['잠자기 전 사탕 먹기', '잠도 안 자고 게임하기'] } }, difficulty: 0.1,
                hints: ['이 일을 하고 난 뒤 내 몸이 튼튼해질지, 힘들어질지 떠올려 봐요.', '흔들리는 카드를 하루 종일 한다면 몸이 어떨지 생각해요.', '골고루 먹기와 뛰어놀기는 좋아요. 자기 전 사탕과 밤샘 게임은 해로워요.'],
                levels: { challenge: { prompt: '카드를 몸에 좋은 일과 해로운 일로 나누어 보세요. 여섯 장이에요.', toolOptions: { cards: ['밥을 골고루 먹기', '밖에서 뛰어놀기', '물 자주 마시기', '잠자기 전 사탕 먹기', '잠도 안 자고 게임하기', '탄산음료만 마시기'] }, target: { sort: { '몸에 좋아요': ['밥을 골고루 먹기', '밖에서 뛰어놀기', '물 자주 마시기'], '몸에 해로워요': ['잠자기 전 사탕 먹기', '잠도 안 자고 게임하기', '탄산음료만 마시기'] } } } } },
              { prompt: '재미있지만 지나치면 몸에 해로운 일만 골라 보세요.', toolOptions: { mode: 'pick', basket: '재미있지만 조심', cards: ['만화 영화 오래 보기', '과자 한 봉지 다 먹기', '손 씻기', '일찍 잠자기'] },
                target: { pick: ['만화 영화 오래 보기', '과자 한 봉지 다 먹기'] }, difficulty: 0.15,
                predict: { q: '재미있는 일은 몸에 늘 좋을까요?', options: ['늘 좋아요', '지나치면 해로울 수 있어요'], answer: 1 },
                conclude: '재미있는 일도 너무 오래, 너무 많이 하면 몸이 힘들어요.' },
              { prompt: '해로운 일을 좋은 일로 바꾸는 말을 이어 보세요.', toolOptions: { mode: 'match', topic: '이렇게 바꿔요', slots: [{ id: 'tv', label: '만화 영화 오래 보기' }, { id: 'snack', label: '과자 한 봉지 다 먹기' }, { id: 'late', label: '밤늦게까지 놀기' }], cards: ['한 편만 보고 끄기', '과자는 조금, 과일을 함께', '아홉 시에 잠자리에 들기'] },
                target: { match: { tv: '한 편만 보고 끄기', snack: '과자는 조금, 과일을 함께', late: '아홉 시에 잠자리에 들기' } }, difficulty: 0.15,
                hints: ['해로운 일마다 줄이거나 바꾸는 방법이 하나씩 있어요.', '흔들리는 카드가 그 일과 같은 이야기(영화·과자·잠)인지 봐요.', '영화는 한 편만, 과자는 조금, 늦게 놀기는 아홉 시 잠자리예요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 지나치면 힘들어지는 몸의 곳 찾기', minutes: 13, tool: 'body',
            teacher: '"화면을 오래 보고 나면 어디가 뻑뻑하고 아팠나요?" 학생이 자기 몸을 손으로 짚게 한 다음 종이 몸에서 고르게 한다. 고른 뒤에는 "그럼 그곳을 지키려면 어떻게 할까요?"를 묻는다. 문항을 마치면 모두 일어나 눈을 감고 열까지 세며 쉬기, 어깨 돌리기를 함께 해 본다.',
            task: '지나치게 하면 힘들어지는 몸의 곳을 내 몸에서 짚어 본 뒤 종이 몸에서 골라요.',
            levels: BODY_LV,
            items: [
              { prompt: '휴대 전화 화면을 가까이 오래 보면 가장 먼저 힘든 곳을 골라 보세요.', toolOptions: { mode: 'parts' }, target: { parts: ['눈'] }, difficulty: 0.05,
                hints: ['화면을 볼 때 쓰는 곳이에요. 내 얼굴을 짚어 봐요.', '화면을 오래 보면 뻑뻑하고 따가운 곳이에요.', '눈을 골라요.'] },
              { prompt: '이어폰으로 아주 큰 소리를 오래 들으면 힘든 곳을 골라 보세요.', toolOptions: { mode: 'parts' }, target: { parts: ['귀'] }, difficulty: 0.05,
                hints: ['소리를 들을 때 쓰는 곳이에요. 내 얼굴 옆을 짚어 봐요.', '이어폰을 꽂는 곳이에요.', '귀를 골라요.'] },
              { prompt: '한여름 햇볕 아래에서 모자도 없이 오래 놀면 빨갛게 타는 곳을 골라 보세요.', toolOptions: { mode: 'parts' }, target: { parts: ['피부'] }, difficulty: 0.15,
                hints: ['햇볕이 닿는 몸의 겉을 생각해요. 팔을 손으로 쓸어 봐요.', '몸 전체를 감싸고 있는 곳이에요.', '피부를 골라요.'] },
              { prompt: '모두 일어나 눈 쉬기와 어깨 돌리기를 해 보았으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"도입에서 적은 재미있는 일 가운데 지나치면 몸이 힘든 일은 무엇인가요?" 칠판의 낱말에 표시하게 한다. 재미있는 일을 아예 하지 말자는 것이 아니라 알맞게 하자는 것임을 짚는다. 다음 시간에는 알맞게 하는 방법을 정해 본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '내 몸', slots: ['몸에 좋아요', '몸에 해로워요'], cards: ['줄넘기하기', '이 닦기', '사탕 열 개 먹기'] }, prompt: '카드를 몸에 좋은 일과 해로운 일로 나누어 보세요.', target: { sort: { '몸에 좋아요': ['줄넘기하기', '이 닦기'], '몸에 해로워요': ['사탕 열 개 먹기'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '재미있는 게임은 몸에 어떨까요?', options: ['재미있으니 오래 해도 괜찮아요', '너무 오래 하면 몸이 힘들어요'], answer: 1, difficulty: 0.1, explain: '재미있는 일도 지나치면 눈과 몸이 힘들어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '몸이 좋아하는 일',
      items: [
        { type: 'table', prompt: '내가 하루에 하는 일을 나누어 쓰세요.', columns: ['몸에 좋은 일', '지나치면 해로운 일'], rows: 3 },
        { type: 'figure', prompt: '화면을 오래 보면 힘든 곳에 ○ 하세요.', tool: 'body', figures: [{ options: { mode: 'parts', parts: ['눈', '귀', '피부', '허리', '무릎'] }, caption: '' }], answer: '눈' },
        { type: 'choice', prompt: '재미있지만 지나치면 해로운 일에 ○ 하세요.', options: ['과자 한 봉지 다 먹기', '손 씻기'], answer: '과자 한 봉지 다 먹기' },
        { type: 'short', prompt: '내가 줄여야 할 일 하나와 줄이는 방법을 쓰세요.' },
      ],
      easy: {
        note: '하고 난 뒤 몸이 어떨지 떠올려요.',
        items: [
          { type: 'choice', prompt: '몸에 좋은 일에 ○ 하세요.', options: ['밖에서 뛰어놀기', '잠도 안 자고 게임하기'], answer: '밖에서 뛰어놀기' },
          { type: 'choice', prompt: '큰 소리를 오래 들으면 힘든 곳에 ○ 하세요.', options: ['귀', '무릎'], answer: '귀' },
          { type: 'draw', prompt: '몸이 좋아하는 일을 하는 나를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞게 놓으면 초록 테두리가 생겨요. 종이 몸은 다섯 곳이고 고르면 이름이 보여요.',
      base: '모두 놓고 확인해요. 종이 몸은 일곱 곳이에요.',
      challenge: '좋은 일과 해로운 일이 여섯 장이에요. 종이 몸은 열세 곳 모두 나와요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 재미있는 일은 몸에도 좋다고 여긴다(핵심 오개념) → "하루 종일 하면?"으로 되묻는다. ② 게임·간식을 무조건 나쁜 것으로 여겨 죄책감을 느낀다 → 알맞게 하면 괜찮다는 것을 함께 말한다. ③ 피부를 몸의 곳으로 떠올리지 못한다 → 팔을 쓸어 보며 "몸을 감싸는 옷 같은 곳"이라고 알려 준다. 가정마다 화면 사용 규칙이 다르므로 특정 가정을 탓하지 않는다.',
  }));

  lessons.push(L(22, {
    title: '재미있는 일을 알맞게 하는 방법 정하기',
    objective: '화면 보기나 간식처럼 재미있는 일을 알맞게 하는 방법을 고르고, 시간을 정해 지키는 차례를 말할 수 있다.',
    illustration: ART('a paper kitchen timer shaped like a tomato beside a tablet with a small paper sign saying one episode, a child stretching arms nearby', '알맞게 해요', [
      { motif: 'sun', x: 120, y: 84, s: 0.5 }, { motif: 'house', x: 380, y: 214, color: 'peach' }, { motif: 'flower', x: 250, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"지난 시간에 재미있는 일도 지나치면 몸이 힘들다고 했지요. 그럼 얼마나 하면 알맞을까요?" 학생들의 생각을 듣는다. 모래시계나 타이머를 보여 주며 "시간을 정해 두면 그만할 때를 알 수 있어요"라고 말한다. 시연 단추로 알맞게 하는 방법이 바구니에 담기는 모습을 보여 준다.',
        student: '집에서 화면을 볼 때 우리 집 약속이 있는지 짝에게 말해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'pick', basket: '알맞게 해요', cards: ['한 편만 보고 끄기', '끝없이 다음 편 보기'], shuffle: false }, sequence: [{ pick: ['한 편만 보고 끄기'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 알맞게 하는 방법 고르기', minutes: 12, tool: 'mindmap',
            teacher: '"이 방법대로 하면 몸이 덜 힘들까요?" 카드마다 따져 보게 한다. "조금만 더"는 끝을 정하지 않은 말이라 알맞게 하는 방법이 아니라는 것을 짚는다. 놀이마다 쉬는 방법이 다르다는 것도 함께 이야기한다.',
            task: '재미있는 일을 알맞게 하는 방법을 고르고, 놀이마다 쉬는 방법을 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '화면을 알맞게 보는 방법만 골라 보세요.', toolOptions: { mode: 'pick', basket: '알맞게 봐요', cards: ['타이머를 맞추고 보기', '팔을 뻗은 만큼 떨어져 보기', '"조금만 더" 하며 계속 보기', '누워서 얼굴 가까이 보기'] },
                target: { pick: ['타이머를 맞추고 보기', '팔을 뻗은 만큼 떨어져 보기'] }, difficulty: 0.15,
                hints: ['이 방법이면 눈이 덜 힘들지, 언제 끝낼지 알 수 있는지 따져요.', '흔들리는 카드는 끝이 정해져 있나요? 눈과 화면이 멀리 떨어져 있나요?', '타이머 맞추기와 팔 뻗은 만큼 떨어지기를 골라요.'],
                levels: { challenge: { toolOptions: { cards: ['타이머를 맞추고 보기', '팔을 뻗은 만큼 떨어져 보기', '"조금만 더" 하며 계속 보기', '누워서 얼굴 가까이 보기', '밥 먹으면서 보기'] } } } },
              { prompt: '놀이를 하고 난 뒤 쉬는 방법을 이어 보세요.', toolOptions: { mode: 'match', topic: '이렇게 쉬어요', slots: [{ id: 'screen', label: '화면을 보고 난 뒤' }, { id: 'run', label: '땀 나게 뛰고 난 뒤' }, { id: 'snack', label: '간식을 먹고 난 뒤' }], cards: ['먼 곳을 바라봐요', '물을 마시고 쉬어요', '이를 닦아요'] },
                target: { match: { screen: '먼 곳을 바라봐요', run: '물을 마시고 쉬어요', snack: '이를 닦아요' } }, difficulty: 0.15,
                hints: ['놀이마다 힘들어진 몸의 곳이 달라요(눈·온몸·이).', '흔들리는 카드가 그 놀이로 힘들어진 곳을 돌보는지 봐요.', '화면은 먼 곳 보기, 뛰기는 물 마시기, 간식은 이 닦기예요.'] },
              { prompt: '서아는 "조금만 더" 하다가 만화 영화를 두 시간 봤어요. 눈이 따가워요. 서아에게 알맞은 다음 약속만 골라 보세요.', toolOptions: { mode: 'pick', basket: '서아의 약속', cards: ['다음에는 한 편만 보고 끄기', '보기 전에 그만볼 때를 정하기', '눈을 비비며 더 보기'] },
                target: { pick: ['다음에는 한 편만 보고 끄기', '보기 전에 그만볼 때를 정하기'] }, difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 화면 보기 약속 지키는 차례 익히기', minutes: 14, tool: 'kitchen',
            teacher: '"보기 전에 정하고, 보다가 알림이 울리면 끄고, 끈 뒤에 쉬어요." 칠판에 세 낱말을 적고 차례를 함께 말해 본다. 활동을 마치면 짝끼리 타이머 역할 놀이를 한다(한 사람은 보는 사람, 한 사람은 "삐삐, 시간이 됐어요" 알림). 활동지에 우리 집 화면 약속을 쓴다.',
            task: '화면 보기 약속을 지키는 차례를 놓고, 짝과 타이머 역할 놀이를 해요.',
            levels: CARD_LV,
            items: [
              { prompt: '화면 보기 약속을 지키는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['볼 시간을 정해요', '타이머를 맞춰요', '알림이 울리면 꺼요', '먼 곳을 보며 쉬어요'] },
                target: { order: ['볼 시간을 정해요', '타이머를 맞춰요', '알림이 울리면 꺼요', '먼 곳을 보며 쉬어요'] }, difficulty: 0.15,
                hints: ['보기 전에 해야 할 일이 맨 앞이에요.', '흔들리는 카드는 보기 전, 보는 중, 본 뒤 가운데 언제 하는 일일까요?', '정하기 → 타이머 → 끄기 → 쉬기 차례예요.'],
                levels: { easy: { prompt: '화면 보기 약속을 지키는 차례대로 세 장을 놓아 보세요.', toolOptions: { cards: ['볼 시간을 정해요', '알림이 울리면 꺼요', '먼 곳을 보며 쉬어요'] }, target: { order: ['볼 시간을 정해요', '알림이 울리면 꺼요', '먼 곳을 보며 쉬어요'] } },
                  challenge: { prompt: '화면 보기 약속을 지키는 차례대로 놓아 보세요. 약속에 맞지 않는 카드는 빼요.', toolOptions: { cards: ['볼 시간을 정해요', '타이머를 맞춰요', '알림이 울리면 꺼요', '먼 곳을 보며 쉬어요', '알림을 끄고 더 봐요'], slots: 4 } } } },
              { prompt: '간식을 알맞게 먹을 때 지킬 것만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '간식 약속', items: [{ id: 'bowl', text: '그릇에 조금 덜어 먹기' }, { id: 'fruit', text: '과일도 함께 먹기' }, { id: 'brush', text: '먹고 나서 이 닦기' }, { id: 'bed', text: '누워서 먹기' }] },
                target: { checklist: ['bowl', 'fruit', 'brush'] }, difficulty: 0.1,
                levels: { easy: { prompt: '간식을 알맞게 먹을 때 지킬 것만 표시해 보세요. 두 가지예요.', toolOptions: { items: [{ id: 'bowl', text: '그릇에 조금 덜어 먹기' }, { id: 'brush', text: '먹고 나서 이 닦기' }, { id: 'bed', text: '누워서 먹기' }] }, target: { checklist: ['bowl', 'brush'] } },
                  challenge: { toolOptions: { items: [{ id: 'bowl', text: '그릇에 조금 덜어 먹기' }, { id: 'fruit', text: '과일도 함께 먹기' }, { id: 'brush', text: '먹고 나서 이 닦기' }, { id: 'bed', text: '누워서 먹기' }, { id: 'meal', text: '밥 대신 과자 먹기' }] } } } },
              { prompt: '짝과 타이머 역할 놀이를 하고 활동지에 우리 집 화면 약속을 썼으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"역할 놀이에서 알림이 울렸을 때 바로 끄기가 쉬웠나요?" 어려웠다는 학생에게 "끄기 전에 마지막 장면만 보고 끄자고 미리 정해도 좋아요"라고 말해 준다. 활동지의 약속은 집에 가져가 가족과 함께 정하게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'kitchen', options: { mode: 'order', cards: ['볼 시간을 정해요', '알림이 울리면 꺼요', '먼 곳을 보며 쉬어요'] }, prompt: '화면 보기 약속을 지키는 차례대로 놓아 보세요.', target: { order: ['볼 시간을 정해요', '알림이 울리면 꺼요', '먼 곳을 보며 쉬어요'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '알맞게 하는 방법이 아닌 것은?', options: ['타이머를 맞추고 보기', '"조금만 더" 하며 계속 보기'], answer: 1, difficulty: 0.1, explain: '"조금만 더"는 끝이 없어서 알맞게 할 수 없어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '우리 집 화면 약속',
      items: [
        { type: 'blank', prompt: '나는 화면을 하루에 ______분만 볼 거예요.' },
        { type: 'check', prompt: '화면을 알맞게 보는 방법에 모두 ✓ 하세요.', options: ['타이머를 맞추고 보기', '누워서 얼굴 가까이 보기', '팔을 뻗은 만큼 떨어져 보기', '"조금만 더" 하며 계속 보기'] },
        { type: 'table', prompt: '놀이를 한 뒤 쉬는 방법을 쓰세요.', columns: ['놀이', '쉬는 방법'], rows: 2 },
        { type: 'short', prompt: '가족과 함께 정한 약속을 쓰고, 가족 확인을 받으세요.' },
      ],
      easy: {
        note: '보기 전에 정하고, 알림이 울리면 꺼요.',
        items: [
          { type: 'choice', prompt: '화면을 볼 때 알맞은 것에 ○ 하세요.', options: ['타이머 맞추기', '누워서 가까이 보기'], answer: '타이머 맞추기' },
          { type: 'blank', prompt: '나는 화면을 ______분만 볼 거예요.' },
          { type: 'draw', prompt: '화면을 끄고 쉬는 나를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞게 놓으면 초록 테두리가 생겨요. 차례 카드는 세 장, 간식 약속은 세 가지예요.',
      base: '모두 놓고 확인해요. 차례 카드는 네 장이에요.',
      challenge: '약속에 맞지 않는 함정 카드를 빼고 차례를 놓아요. 함정 행동이 더 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① "조금만 더"를 알맞은 방법으로 여긴다 → 끝이 정해져 있는지를 기준으로 삼게 한다. ② 화면 시간을 정할 수 없는 가정 환경이 있다 → 분 단위 대신 "한 편", "한 판"처럼 쓸 수 있게 한다. ③ 간식을 아예 먹지 말아야 한다고 여긴다 → 알맞게 먹는 방법을 정하는 것이 목표임을 말한다. 가족 확인란은 가정과 연계하되 제출을 강요하지 않는다.',
  }));

  lessons.push(L(23, {
    title: '찻길을 안전하게 건너는 차례 익히기',
    objective: '횡단보도에서 서기·보기·건너기의 차례를 말하고, 교실 바닥 횡단보도에서 바르게 건너 볼 수 있다.',
    illustration: ART('a paper crosswalk with white stripes, a child standing at the curb raising one hand, a green walking signal light and a paper car stopped behind the line', '서고, 보고, 건너요', [
      { motif: 'house', x: 110, y: 214, color: 'mint' }, { motif: 'tree', x: 390, y: 214 }, { motif: 'cloud', x: 300, y: 64 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"학교 오는 길에 찻길을 건너는 사람?" 손을 들게 한다. "초록불이 켜지면 바로 뛰어가도 될까요?" 학생들의 생각을 듣고, 초록불에도 멈추지 않는 차가 있을 수 있다고 말한다. 시연 단추로 서기·보기·건너기 카드가 차례로 놓이는 모습을 보여 준다.',
        student: '내가 건너는 횡단보도에 무엇이 있는지 떠올려 말해 봐요.',
        demo: { tool: 'kitchen', options: { mode: 'order', cards: ['멈추어 서요', '좌우를 살펴요', '손을 들고 건너요'], shuffle: false }, sequence: [{ order: ['멈추어 서요', '좌우를 살펴요', '손을 들고 건너요'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 횡단보도 건너는 차례 놓기', minutes: 13, tool: 'kitchen',
            teacher: '"서요, 봐요, 건너요." 세 낱말을 손동작과 함께 소리 내어 말하게 한다. 초록불이 켜져도 좌우를 살핀다는 것, 건널 때는 뛰지 않고 걷는다는 것을 짚는다. 차례를 놓은 뒤 교실 바닥에 마스킹 테이프로 만든 횡단보도에서 모둠별로 직접 건너 본다(선생님이 신호등 판을 든다).',
            task: '찻길을 건너는 차례를 놓고, 교실 바닥 횡단보도에서 직접 건너 봐요.',
            levels: CARD_LV,
            items: [
              { prompt: '횡단보도를 건너는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['보도 끝에서 멈추어 서요', '초록불인지 봐요', '왼쪽·오른쪽 차를 살펴요', '손을 들고 걸어서 건너요'] },
                target: { order: ['보도 끝에서 멈추어 서요', '초록불인지 봐요', '왼쪽·오른쪽 차를 살펴요', '손을 들고 걸어서 건너요'] }, difficulty: 0.2,
                hints: ['건너기 전에 먼저 멈추어야 해요.', '흔들리는 카드는 서기·보기·건너기 가운데 어디에 들어갈까요? 신호를 본 다음에 차를 살펴요.', '서요 → 초록불 봐요 → 차 살펴요 → 손 들고 건너요 차례예요.'],
                levels: { easy: { prompt: '횡단보도를 건너는 차례대로 세 장을 놓아 보세요.', toolOptions: { cards: ['멈추어 서요', '좌우를 살펴요', '손을 들고 건너요'] }, target: { order: ['멈추어 서요', '좌우를 살펴요', '손을 들고 건너요'] } },
                  challenge: { prompt: '횡단보도를 건너는 차례대로 놓아 보세요. 위험한 카드는 빼요.', toolOptions: { cards: ['보도 끝에서 멈추어 서요', '초록불인지 봐요', '왼쪽·오른쪽 차를 살펴요', '손을 들고 걸어서 건너요', '초록불이 깜빡이면 뛰어가요'], slots: 4 } } } },
              { prompt: '찻길을 건널 때 지켜야 할 것만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '건널 때 약속', items: [{ id: 'walk', text: '뛰지 않고 걸어요' }, { id: 'hand', text: '손을 들어요' }, { id: 'look', text: '차를 보며 건너요' }, { id: 'phone', text: '휴대 전화를 보며 건너요' }] },
                target: { checklist: ['walk', 'hand', 'look'] }, difficulty: 0.1,
                levels: { easy: { prompt: '찻길을 건널 때 지켜야 할 것만 표시해 보세요. 두 가지예요.', toolOptions: { items: [{ id: 'walk', text: '뛰지 않고 걸어요' }, { id: 'hand', text: '손을 들어요' }, { id: 'phone', text: '휴대 전화를 보며 건너요' }] }, target: { checklist: ['walk', 'hand'] } },
                  challenge: { toolOptions: { items: [{ id: 'walk', text: '뛰지 않고 걸어요' }, { id: 'hand', text: '손을 들어요' }, { id: 'look', text: '차를 보며 건너요' }, { id: 'phone', text: '휴대 전화를 보며 건너요' }, { id: 'ball', text: '굴러간 공을 따라 뛰어들어요' }] } } } },
              { prompt: '교실 바닥 횡단보도에서 서요·봐요·건너요를 하며 건너 보았으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 길에서 안전한 행동과 위험한 행동 나누기', minutes: 13, tool: 'mindmap',
            teacher: '"공이 찻길로 굴러가면 어떻게 할까요?" 바로 따라가고 싶은 마음을 알아주고, 멈춘 뒤 어른을 부른다고 알려 준다. 신호가 없는 곳에서는 더 오래 살펴야 한다는 것을 짚는다. 카드를 나누며 "재미있어도 길에서는 위험한 놀이"가 있다는 것을 이야기한다.',
            task: '길에서 하는 행동을 안전한 행동과 위험한 행동으로 나누고, 이럴 때 할 일을 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '길에서 하는 행동을 안전한 것과 위험한 것으로 나누어 보세요.', toolOptions: { topic: '길에서', slots: ['안전해요', '위험해요'], cards: ['보도 안쪽으로 걸어요', '어른 손을 잡고 걸어요', '차 뒤에서 숨바꼭질해요', '찻길에서 공을 차요'] },
                target: { sort: { '안전해요': ['보도 안쪽으로 걸어요', '어른 손을 잡고 걸어요'], '위험해요': ['차 뒤에서 숨바꼭질해요', '찻길에서 공을 차요'] } }, difficulty: 0.1,
                hints: ['그 행동을 할 때 차가 나를 볼 수 있는지, 나와 차 사이가 먼지 따져요.', '흔들리는 카드가 재미있어도 차와 가까운 곳에서 하는 일인지 봐요.', '보도 안쪽 걷기와 어른 손 잡기가 안전해요.'],
                levels: { challenge: { prompt: '길에서 하는 행동을 안전한 것과 위험한 것으로 나누어 보세요. 여섯 장이에요.', toolOptions: { cards: ['보도 안쪽으로 걸어요', '어른 손을 잡고 걸어요', '밝은 색 옷을 입어요', '차 뒤에서 숨바꼭질해요', '찻길에서 공을 차요', '이어폰을 끼고 건너요'] }, target: { sort: { '안전해요': ['보도 안쪽으로 걸어요', '어른 손을 잡고 걸어요', '밝은 색 옷을 입어요'], '위험해요': ['차 뒤에서 숨바꼭질해요', '찻길에서 공을 차요', '이어폰을 끼고 건너요'] } } } } },
              { prompt: '길에서 이런 일이 생기면 할 일을 이어 보세요.', toolOptions: { mode: 'match', topic: '이럴 때는', slots: [{ id: 'ball', label: '공이 찻길로 굴러갔어요' }, { id: 'blink', label: '초록불이 깜빡이기 시작했어요' }, { id: 'nolight', label: '신호등이 없는 길이에요' }], cards: ['멈추고 어른을 불러요', '건너지 말고 다음 신호를 기다려요', '더 오래 좌우를 살펴요'] },
                target: { match: { ball: '멈추고 어른을 불러요', blink: '건너지 말고 다음 신호를 기다려요', nolight: '더 오래 좌우를 살펴요' } }, difficulty: 0.2,
                hints: ['서두르면 위험해요. 세 가지 모두 서두르지 않는 방법이 있어요.', '흔들리는 카드가 그 일(공·깜빡이는 불·신호 없음)과 맞는지 다시 읽어요.', '공은 어른 부르기, 깜빡이는 불은 기다리기, 신호 없음은 오래 살피기예요.'] },
              { prompt: '재미있지만 길에서는 위험한 놀이만 골라 보세요.', toolOptions: { mode: 'pick', basket: '길에서는 안 돼요', cards: ['킥보드 타고 찻길 건너기', '주차된 차 사이로 뛰어나오기', '놀이터에서 그네 타기'] },
                target: { pick: ['킥보드 타고 찻길 건너기', '주차된 차 사이로 뛰어나오기'] }, difficulty: 0.15 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"교실 횡단보도를 건널 때 친구가 잘한 점은?" 두세 명이 칭찬하게 한다. 오늘 하교길에 실제로 "서요, 봐요, 건너요"를 해 보자고 약속한다. 출구 1번에서 차례를 바꾼 학생은 손동작과 함께 다시 말하게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'kitchen', options: { mode: 'order', cards: ['멈추어 서요', '좌우를 살펴요', '손을 들고 건너요'] }, prompt: '횡단보도를 건너는 차례대로 놓아 보세요.', target: { order: ['멈추어 서요', '좌우를 살펴요', '손을 들고 건너요'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '초록불이 깜빡이기 시작하면?', options: ['뛰어서 건너요', '다음 신호를 기다려요'], answer: 1, difficulty: 0.15, explain: '깜빡이면 곧 빨간불이 되니 다음 신호를 기다려요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '서요, 봐요, 건너요',
      items: [
        { type: 'figure', wide: true, prompt: '찻길을 건너는 차례대로 1, 2, 3을 쓰세요.', tool: 'kitchen', figures: [{ options: { mode: 'order', cards: ['손을 들고 건너요', '멈추어 서요', '좌우를 살펴요'], shuffle: false }, caption: '' }], answer: '서요 → 살펴요 → 건너요' },
        { type: 'check', prompt: '길에서 안전한 행동에 모두 ✓ 하세요.', options: ['보도 안쪽으로 걸어요', '차 뒤에서 숨바꼭질해요', '어른 손을 잡고 걸어요', '찻길에서 공을 차요'] },
        { type: 'choice', prompt: '공이 찻길로 굴러가면?', options: ['바로 따라가요', '멈추고 어른을 불러요'], answer: '멈추고 어른을 불러요' },
        { type: 'draw', prompt: '횡단보도에서 손을 들고 건너는 나를 그려 보세요.' },
      ],
      easy: {
        note: '서요, 봐요, 건너요! 손동작과 함께 말해요.',
        items: [
          { type: 'choice', prompt: '가장 먼저 할 일에 ○ 하세요.', options: ['멈추어 서요', '뛰어가요'], answer: '멈추어 서요' },
          { type: 'choice', prompt: '안전한 행동에 ○ 하세요.', options: ['어른 손을 잡고 걸어요', '찻길에서 공을 차요'], answer: '어른 손을 잡고 걸어요' },
          { type: 'draw', prompt: '손을 들고 건너는 나를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞게 놓으면 초록 테두리가 생겨요. 차례 카드는 세 장이에요.',
      base: '모두 놓고 확인해요. 차례 카드는 네 장이에요.',
      challenge: '위험한 함정 카드를 빼고 차례를 놓아요. 길 행동 카드가 여섯 장이에요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 초록불이면 바로 뛰어간다 → 초록불에도 좌우를 살핀다는 것을 몸동작으로 반복한다. ② 깜빡이는 불에 서두른다 → 다음 신호를 기다리는 것이 더 빠르고 안전하다고 말한다. ③ 재미있는 놀이는 어디서나 괜찮다고 여긴다(단원 오개념과 이어짐) → 놀이터와 찻길을 나누어 생각하게 한다. 교실 횡단보도 연습 때는 책상을 밀어 넉넉한 공간을 만들고, 뛰지 않게 한다.',
  }));

  lessons.push(L(24, {
    title: '건강하고 안전한 하루 차례 짜 보기',
    objective: '하루 동안 몸에 좋은 일과 안전한 행동을 차례대로 넣어 건강한 하루를 짜고, 해로운 일을 뺄 수 있다.',
    illustration: ART('a paper day strip from sunrise to moon with small cards: breakfast, crossing a crosswalk, playing outside, washing hands, and sleeping, a child placing the last card', '건강한 하루', [
      { motif: 'sun', x: 110, y: 84, s: 0.6 }, { motif: 'moon', x: 390, y: 84, s: 0.5 }, { motif: 'tree', x: 250, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"지금까지 배운 몸에 좋은 일과 안전한 행동을 한 줄로 이으면 건강한 하루가 돼요." 21~23차시에서 배운 것(골고루 먹기, 화면 약속, 서요·봐요·건너요)을 칠판에 다시 적는다. 시연 단추로 아침부터 밤까지 카드가 놓이는 모습을 보여 준다.',
        student: '내 하루에서 몸에 좋은 일을 아침·낮·밤에 하나씩 떠올려 봐요.',
        demo: { tool: 'timeline', options: { cards: [{ id: 'b', text: '아침밥을 먹어요', motif: 'sun' }, { id: 's', text: '일찍 잠자리에 들어요', motif: 'moon' }], axis: ['아침', '밤'], shuffle: false }, sequence: [{ order: ['b', 's'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 건강한 하루를 차례대로 짜기', minutes: 14, tool: 'timeline',
            teacher: '"하준이의 건강한 하루를 아침부터 밤까지 놓아 볼까요?" 띠 왼쪽이 아침, 오른쪽이 밤이라는 것을 짚는다. 도전 단계의 해로운 카드는 하루에 넣지 않고 남겨 둔다고 알려 준다. 다 놓은 뒤 "이 가운데 내 하루에도 있는 것은?"을 묻는다.',
            task: '건강하고 안전한 하루를 아침부터 밤까지 차례대로 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '하준이의 건강한 하루를 아침부터 차례대로 놓아 보세요.', toolOptions: { cards: [{ id: 'b', text: '아침밥을 골고루 먹어요', motif: 'sun' }, { id: 'c', text: '횡단보도를 손 들고 건너요', motif: 'house' }, { id: 'p', text: '점심 먹고 밖에서 뛰어놀아요', motif: 'tree' }, { id: 's', text: '아홉 시에 잠자리에 들어요', motif: 'moon' }], axis: ['아침', '밤'] },
                target: { order: ['b', 'c', 'p', 's'] }, difficulty: 0.15,
                hints: ['카드 속 때를 알려 주는 말(아침밥, 점심, 아홉 시)을 먼저 찾아요.', '흔들리는 카드가 앞 카드보다 나중에 하는 일인지 봐요.', '아침밥 → 학교 가는 길 → 점심 뒤 놀이 → 잠자리 차례예요.'],
                levels: { easy: { prompt: '하준이의 건강한 하루를 아침부터 세 장 놓아 보세요.', toolOptions: { cards: [{ id: 'b', text: '아침밥을 골고루 먹어요', motif: 'sun' }, { id: 'p', text: '점심 먹고 밖에서 뛰어놀아요', motif: 'tree' }, { id: 's', text: '아홉 시에 잠자리에 들어요', motif: 'moon' }] }, target: { order: ['b', 'p', 's'] } },
                  challenge: { prompt: '하준이의 건강한 하루를 아침부터 차례대로 놓아 보세요. 몸에 해로운 카드는 빼요.', toolOptions: { cards: [{ id: 'b', text: '아침밥을 골고루 먹어요', motif: 'sun' }, { id: 'c', text: '횡단보도를 손 들고 건너요', motif: 'house' }, { id: 'p', text: '점심 먹고 밖에서 뛰어놀아요', motif: 'tree' }, { id: 's', text: '아홉 시에 잠자리에 들어요', motif: 'moon' }, { id: 'x', text: '밤 열두 시까지 게임해요', motif: 'star' }], slots: 4 } } } },
              { prompt: '서아의 저녁이에요. 먼저 하는 일부터 놓아 보세요..', toolOptions: { cards: [{ id: 'h', text: '집에 와서 손을 씻어요', motif: 'house' }, { id: 'd', text: '저녁밥을 먹어요', motif: 'sun' }, { id: 't', text: '이를 닦아요', motif: 'star' }, { id: 'z', text: '잠을 자요', motif: 'moon' }], axis: ['먼저', '나중'] },
                target: { order: ['h', 'd', 't', 'z'] }, difficulty: 0.15,
                hints: ['집에 오자마자 하는 일이 맨 앞이에요.', '흔들리는 카드 앞에 꼭 해야 할 일이 있는지 생각해요. 이는 밥을 먹은 뒤에 닦아요.', '손 씻기 → 저녁밥 → 이 닦기 → 잠 차례예요.'] },
              { prompt: '민지의 아침이에요. 먼저 하는 일부터 놓아 보세요. 세수와 옷 입기는 어느 것을 먼저 해도 돼요.', toolOptions: { cards: [{ id: 'w', text: '세수를 해요', motif: 'sun' }, { id: 'o', text: '옷을 입어요', motif: 'house' }, { id: 'm', text: '아침밥을 먹어요', motif: 'flower' }, { id: 'g', text: '신호를 보고 찻길을 건너 학교에 가요', motif: 'tree' }], axis: ['먼저', '나중'] },
                target: { order: [['w', 'o'], 'm', 'g'] }, difficulty: 0.15,
                hints: ['일어나서 집에서 하는 일이 앞, 집을 나서는 일이 맨 끝이에요.', '흔들리는 카드가 집 안에서 하는 일인지, 집 밖에서 하는 일인지 봐요.', '세수와 옷 입기(어느 것이 먼저든) → 아침밥 → 학교 가기 차례예요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 내 건강한 하루 점검하기', minutes: 12, tool: 'kitchen',
            teacher: '"오늘 내 하루에는 몸에 좋은 일이 몇 개 있었나요?" 점검표 문항을 마친 뒤 활동지 하루 띠에 내 하루를 그림으로 그린다. 해로운 일이 있었던 학생에게 "내일은 무엇으로 바꿀까요?"라고 묻고 바꿀 일에 동그라미를 치게 한다.',
            task: '건강한 하루 점검표에서 알맞은 것을 표시하고, 활동지에 내 하루 띠를 그려요.',
            levels: CARD_LV,
            items: [
              { prompt: '건강하고 안전한 하루에 들어갈 것만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '건강한 하루', items: [{ id: 'eat', text: '골고루 먹기' }, { id: 'play', text: '밖에서 뛰어놀기' }, { id: 'cross', text: '손 들고 건너기' }, { id: 'late', text: '늦게까지 화면 보기' }] },
                target: { checklist: ['eat', 'play', 'cross'] }, difficulty: 0.1,
                levels: { easy: { prompt: '건강하고 안전한 하루에 들어갈 것만 표시해 보세요. 두 가지예요.', toolOptions: { items: [{ id: 'eat', text: '골고루 먹기' }, { id: 'cross', text: '손 들고 건너기' }, { id: 'late', text: '늦게까지 화면 보기' }] }, target: { checklist: ['eat', 'cross'] } },
                  challenge: { toolOptions: { items: [{ id: 'eat', text: '골고루 먹기' }, { id: 'play', text: '밖에서 뛰어놀기' }, { id: 'cross', text: '손 들고 건너기' }, { id: 'late', text: '늦게까지 화면 보기' }, { id: 'soda', text: '물 대신 탄산음료 마시기' }] } } } },
              { prompt: '해로운 일을 건강한 일로 바꾸는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['해로운 일을 찾아요', '바꿀 일을 정해요', '내일 해 봐요'] },
                target: { order: ['해로운 일을 찾아요', '바꿀 일을 정해요', '내일 해 봐요'] }, hints: ['무엇이 해로운지 알아야 바꿀 수 있어요. 맨 처음 할 일을 찾아요.', '흔들리는 카드 앞에 꼭 먼저 해야 할 일이 있는지 생각해요.', '해로운 일 찾기 → 바꿀 일 정하기 → 내일 해 보기 차례예요.'], difficulty: 0.1 },
              { prompt: '활동지 하루 띠에 내 하루를 그리고 바꿀 일에 동그라미를 쳤으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"내 하루 띠에서 내일 바꿀 일은 무엇인가요?" 두세 명이 발표한다. 다음 시간부터는 한 주 동안 건강 습관을 지켰는지 세어 보며 습관을 만들어 간다고 예고한다. 활동지 하루 띠는 다음 시간에 다시 쓰므로 파일에 넣어 둔다.',
        exitTicket: [
          { type: 'tool', tool: 'timeline', options: { cards: [{ id: 'b', text: '아침밥을 먹어요', motif: 'sun' }, { id: 'p', text: '밖에서 뛰어놀아요', motif: 'tree' }, { id: 's', text: '일찍 잠자요', motif: 'moon' }], axis: ['아침', '밤'] }, prompt: '건강한 하루를 아침부터 차례대로 놓아 보세요. 놀이는 낮에 해요.', target: { order: ['b', 'p', 's'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '건강한 하루에 넣지 않을 일은?', options: ['손 씻기', '밤늦게까지 게임하기'], answer: 1, difficulty: 0.05, explain: '밤늦은 게임은 재미있어도 잠을 줄여 몸에 해로워요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '내 건강한 하루 띠',
      items: [
        { type: 'table', prompt: '내 하루를 그림이나 글로 쓰세요.', columns: ['아침', '낮', '저녁', '밤'], rows: 1 },
        { type: 'check', prompt: '건강한 하루에 들어갈 것에 모두 ✓ 하세요.', options: ['골고루 먹기', '늦게까지 화면 보기', '손 들고 건너기', '밖에서 뛰어놀기'] },
        { type: 'short', prompt: '내일 바꿀 일 하나와 무엇으로 바꿀지 쓰세요.' },
        { type: 'draw', prompt: '건강한 하루를 보내는 나를 그려 보세요.' },
      ],
      easy: {
        note: '아침·낮·밤에 하나씩!',
        items: [
          { type: 'table', prompt: '내 하루를 그림으로 그리세요.', columns: ['아침', '낮', '밤'], rows: 1 },
          { type: 'choice', prompt: '건강한 하루에 들어갈 것에 ○ 하세요.', options: ['일찍 잠자기', '밤늦게 게임하기'], answer: '일찍 잠자기' },
          { type: 'blank', prompt: '내일은 ________을(를) 할 거예요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞게 놓으면 초록 테두리가 생겨요. 하루 카드는 세 장, 점검표는 세 가지예요.',
      base: '모두 놓고 확인해요. 하루 카드는 네 장이에요.',
      challenge: '해로운 함정 카드를 빼고 하루를 짜요. 점검표에도 함정 항목이 더 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 하루 차례를 때를 알려 주는 말 없이 놓는다 → 카드 속 때 낱말에 밑줄을 긋게 한다. ② 해로운 일을 하루에서 뺄 때 아쉬워한다 → 빼는 것이 아니라 알맞게 바꾸는 것이라고 말한다. ③ 하루 띠 그리기에 시간을 많이 쓴다 → 칸마다 그림 하나만 그리게 한다. 이 하루 띠는 25차시 한 주 습관 세기의 출발점으로 쓴다.',
  }));

  // ───────────────────────── 25~28차시: 한 주 건강 습관을 세고 다음 주 목표 정하기(건강한 하루 — 성찰) ─────────────────────────

  var HABIT_LV = {
    easy: { shapes: ['circle', 'square', 'star', 'heart'], colors: ['초록', '빨강', '노랑', '파랑'], sizes: ['m', 'l'] },
    base: { shapes: ['circle', 'square', 'rect', 'star', 'heart', 'triangle'], colors: ['빨강', '주황', '노랑', '초록', '파랑', '하양'] },
    challenge: {},
  };

  lessons.push(L(25, {
    title: '한 주 동안 지킨 건강 습관 세어 그래프로 나타내기',
    objective: '한 주 동안 건강 습관을 지킨 날을 세어 그림그래프로 나타내고, 가장 많이 지킨 습관과 적게 지킨 습관을 찾을 수 있다.',
    illustration: ART('a paper weekly habit chart with rows for hand washing, early sleep and eating vegetables, green circle stickers filling some boxes, a child counting with a finger', '한 주 습관 세기', [
      { motif: 'star', x: 120, y: 84, s: 0.5 }, { motif: 'house', x: 380, y: 214, color: 'mint' }, { motif: 'flower', x: 250, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"24차시에 그린 건강한 하루 띠를 꺼내 보세요. 그 뒤로 한 주 동안 손 씻기, 일찍 자기, 채소 먹기를 몇 번 지켰나요?" 지킴표(4차시·20차시 다짐 배지)를 함께 꺼낸다. "월요일 하루만 지켰으면 습관이 된 걸까요?"라고 묻고 생각을 듣는다(하루만 지키면 습관이 된다는 생각). 시연 단추로 표의 수만큼 그림이 놓이는 모습을 보여 준다.',
        student: '내 지킴표에서 동그라미가 가장 많은 줄을 찾아 손가락으로 짚어 봐요.',
        demo: { tool: 'chart', options: { type: 'picture', title: '하준이의 손 씻기', unit: '날', data: [['손 씻기', 3]], icons: [{ value: 1, name: '1날' }], icon: 'circle' }, sequence: [{ icons: [[3]] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 지킨 날을 세어 그림그래프 만들기', minutes: 14, tool: 'chart',
            teacher: '"표를 보고 지킨 날만큼 동그라미를 놓아요. 한 칸씩 손가락으로 세며 놓아요." 다 만든 뒤 "가장 많이 지킨 습관은? 가장 적게 지킨 습관은?"을 묻는다. 문항을 마치면 활동지 표에 내 한 주 지킴 수를 쓰고 동그라미를 그린다.',
            task: '표의 수만큼 동그라미를 놓아 한 주 습관 그래프를 만들고, 많이 지킨 것과 적게 지킨 것을 읽어요.',
            levels: { easy: { showValues: true }, base: {}, challenge: {} },
            items: [
              { prompt: '하준이가 한 주 동안 습관을 지킨 날이에요. 표를 보고 동그라미를 놓아 보세요.', toolOptions: { type: 'picture', title: '하준이의 한 주 습관', unit: '날', data: [['손 씻기', 5], ['일찍 자기', 2], ['채소 먹기', 4]], icons: [{ value: 1, name: '1날' }], icon: 'circle', given: [0] }, target: { build: true }, difficulty: 0.15,
                levels: { easy: { toolOptions: { given: [0, 1] } }, challenge: { prompt: '하준이가 한 주 동안 습관을 지킨 날이에요. 표를 보고 네 습관의 동그라미를 모두 놓아 보세요.', toolOptions: { data: [['손 씻기', 5], ['일찍 자기', 2], ['채소 먹기', 4], ['바르게 앉기', 3]], given: [] } } } },
              { prompt: '그래프를 보고 고르세요. 서아가 가장 적게 지킨 습관은?', toolOptions: { type: 'picture', mode: 'read', title: '서아의 한 주 습관', unit: '날', data: [['손 씻기', 6], ['일찍 자기', 1], ['채소 먹기', 3]], icons: [{ value: 1, name: '1날' }], icon: 'circle', question: '가장 적게 지킨 습관은?', choices: ['손 씻기', '일찍 자기', '채소 먹기'] }, target: { pick: 1 }, difficulty: 0.1,
                levels: { challenge: { prompt: '그래프를 보고 고르세요. 서아가 손 씻기를 일찍 자기보다 며칠 더 지켰나요?', toolOptions: { question: '며칠 더 지켰나요?', choices: ['4날', '5날', '6날'] }, target: { pick: 1 } } } },
              { prompt: '그래프를 보고 표의 빈칸을 채워 보세요.', toolOptions: { type: 'picture', mode: 'read', title: '민지의 한 주 습관', unit: '날', data: [['손 씻기', 4], ['일찍 자기', 5], ['채소 먹기', 2]], icons: [{ value: 1, name: '1날' }], icon: 'circle', tableBlanks: [1] }, target: { table: true }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { tableBlanks: [0, 1, 2] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 하루만 지킨 것과 습관 나누기', minutes: 12, tool: 'mindmap',
            teacher: '"월요일에 한 번 일찍 잤어요. 그럼 일찍 자는 습관이 생긴 걸까요?" 습관은 날마다 되풀이해 저절로 하게 된 것이라는 것을 짚는다. 한 주에 한두 번만 한 일은 아직 연습 중이라고 말해 준다.',
            task: '날마다 지킨 습관과 하루만 해 본 일을 나누고, 습관이 되는 까닭을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '한 주 기록을 보고 습관이 된 것과 아직 연습 중인 것으로 나누어 보세요.', toolOptions: { topic: '한 주 기록', slots: ['습관이 되었어요', '아직 연습 중이에요'], cards: ['다섯 날 모두 손을 씻었어요', '다섯 날 모두 이를 닦았어요', '월요일 하루만 일찍 잤어요', '수요일 하루만 채소를 먹었어요'] },
                target: { sort: { '습관이 되었어요': ['다섯 날 모두 손을 씻었어요', '다섯 날 모두 이를 닦았어요'], '아직 연습 중이에요': ['월요일 하루만 일찍 잤어요', '수요일 하루만 채소를 먹었어요'] } }, difficulty: 0.15,
                hints: ['카드에서 몇 날 했는지 알려 주는 말(다섯 날 모두, 하루만)을 찾아요.', '흔들리는 카드는 날마다 했나요, 한 번만 했나요?', '"다섯 날 모두"는 습관, "하루만"은 아직 연습 중이에요.'],
                levels: { challenge: { prompt: '한 주 기록을 보고 나누어 보세요. 다섯 날 가운데 네 날이나 다섯 날 했으면 습관으로 쳐요.', toolOptions: { cards: ['다섯 날 모두 손을 씻었어요', '네 날 이를 닦았어요', '월요일 하루만 일찍 잤어요', '두 날 채소를 먹었어요', '다섯 날 모두 바르게 앉았어요'] }, target: { sort: { '습관이 되었어요': ['다섯 날 모두 손을 씻었어요', '네 날 이를 닦았어요', '다섯 날 모두 바르게 앉았어요'], '아직 연습 중이에요': ['월요일 하루만 일찍 잤어요', '두 날 채소를 먹었어요'] } } } } },
              { prompt: '습관이 되려면 어떻게 해야 하는지 알맞은 말만 골라 보세요.', toolOptions: { mode: 'pick', basket: '습관이 되려면', cards: ['날마다 되풀이해요', '같은 때에 해요', '하루만 하면 돼요', '생각날 때만 해요'] },
                target: { pick: ['날마다 되풀이해요', '같은 때에 해요'] }, difficulty: 0.15,
                predict: { q: '하루만 일찍 자면 일찍 자는 습관이 생길까요?', options: ['생겨요', '날마다 해야 생겨요'], answer: 1 },
                conclude: '날마다, 같은 때에 되풀이하면 저절로 하게 되는 습관이 돼요.' },
              { prompt: '그래프에서 가장 적게 지킨 습관을 더 잘 지키는 방법을 이어 보세요.', toolOptions: { mode: 'match', topic: '이렇게 해 봐요', slots: [{ id: 'sleep', label: '일찍 자기' }, { id: 'veg', label: '채소 먹기' }, { id: 'hand', label: '손 씻기' }], cards: ['아홉 시 알람 맞추기', '채소 한 가지 먼저 먹기', '세면대 앞에 그림 붙이기'] },
                target: { match: { sleep: '아홉 시 알람 맞추기', veg: '채소 한 가지 먼저 먹기', hand: '세면대 앞에 그림 붙이기' } }, difficulty: 0.15,
                hints: ['습관마다 그 습관과 이어지는 방법이 하나씩 있어요.', '흔들리는 카드가 그 습관(잠·채소·손)과 같은 이야기인지 봐요.', '잠은 알람, 채소는 먼저 먹기, 손은 세면대 그림이에요.'] },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"내 그래프에서 가장 적게 지킨 습관은 무엇인가요?" 두세 명이 발표하고, 친구가 더 잘 지키는 방법을 하나씩 알려 준다. 적게 지킨 습관이 있어도 괜찮고, 그것이 다음 주 목표가 될 수 있다고 말한다. 출구 1번에서 수를 잘못 놓은 학생은 표를 손가락으로 다시 세게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'chart', options: { type: 'picture', mode: 'read', title: '준호의 한 주 습관', unit: '날', data: [['손 씻기', 3], ['일찍 자기', 5], ['채소 먹기', 2]], icons: [{ value: 1, name: '1날' }], icon: 'circle', question: '가장 많이 지킨 습관은?', choices: ['손 씻기', '일찍 자기', '채소 먹기'] }, prompt: '그래프를 보고 준호가 가장 많이 지킨 습관을 고르세요.', target: { pick: 1 }, difficulty: 0.1 },
          { type: 'choice', prompt: '습관이 되려면?', options: ['하루만 하면 돼요', '날마다 되풀이해요'], answer: 1, difficulty: 0.1, explain: '날마다 되풀이해야 저절로 하게 되는 습관이 돼요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '내 한 주 습관 그래프',
      items: [
        { type: 'table', prompt: '한 주 동안 지킨 날을 세어 쓰세요.', columns: ['손 씻기', '일찍 자기', '채소 먹기'], rows: 1 },
        { type: 'draw', prompt: '위 수만큼 습관마다 동그라미를 그려 그림그래프를 만드세요.' },
        { type: 'blank', prompt: '내가 가장 많이 지킨 습관은 __________, 가장 적게 지킨 습관은 __________예요.' },
        { type: 'choice', prompt: '습관이 된 것에 ○ 하세요.', options: ['다섯 날 모두 손을 씻었어요', '월요일 하루만 일찍 잤어요'], answer: '다섯 날 모두 손을 씻었어요' },
      ],
      easy: {
        note: '한 칸씩 손가락으로 세며 그려요.',
        items: [
          { type: 'table', prompt: '지킨 날을 세어 쓰세요.', columns: ['손 씻기', '일찍 자기'], rows: 1 },
          { type: 'draw', prompt: '지킨 날만큼 동그라미를 그리세요.' },
          { type: 'choice', prompt: '습관이 되려면?', options: ['날마다 해요', '하루만 해요'], answer: '날마다 해요' },
        ],
      },
    },
    differentiation: {
      easy: '그래프는 두 줄이 미리 그려져 있고 수가 함께 보여요. 맞게 놓으면 초록 테두리가 생겨요.',
      base: '그래프는 첫 줄만 그려져 있어요. 표 빈칸 하나를 채워요.',
      challenge: '네 습관 그래프를 처음부터 만들고, 며칠 더 지켰는지 셈하며, 표 빈칸 세 개를 모두 채워요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 하루만 지켜도 습관이 생겼다고 여긴다(핵심 오개념) → "다섯 날 모두"와 "하루만"을 견주게 한다. ② 그림그래프에서 그림 수를 잘못 센다 → 표의 수를 소리 내어 세며 하나씩 놓게 한다. ③ 지킴표를 잃어버렸다 → 기억나는 대로 쓰게 하고 정확한 수를 고집하지 않는다. 가정 사정으로 지키기 어려운 습관이 있을 수 있으니 수를 친구와 견주어 평가하지 않는다.',
  }));

  lessons.push(L(26, {
    title: '습관 지킴표를 색칠하며 되풀이 읽기',
    objective: '지킨 날마다 지킴표 칸을 색칠해 되풀이되는 모습을 만들고, 지킨 날이 이어진 줄과 끊긴 줄을 견주어 말할 수 있다.',
    illustration: ART('a paper habit tracker strip with seven boxes, five coloured green in a row and two blank, crayons scattered and a small star sticker at the end', '날마다 색칠해요', [
      { motif: 'star', x: 390, y: 84, s: 0.5 }, { motif: 'house', x: 110, y: 214, color: 'sky' }, { motif: 'leaf', x: 250, y: 226 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"지난 시간 그래프에서 동그라미 수는 알았어요. 그런데 지킨 날이 이어졌는지, 띄엄띄엄인지도 알 수 있을까요?" 일주일 칸이 그려진 지킴표 두 장(이어진 것, 끊긴 것)을 보여 준다. 시연 단추로 지킨 날마다 초록 칸이 하나씩 붙는 모습을 보여 준다.',
        student: '두 지킴표 가운데 습관이 더 잘 되어 가는 쪽을 골라 말해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'pick', basket: '이어서 지켰어요', cards: ['월·화·수·목·금 모두 ○', '월만 ○, 나머지는 빈칸'], shuffle: false }, sequence: [{ pick: ['월·화·수·목·금 모두 ○'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 지킨 날마다 칸을 붙여 지킴표 만들기', minutes: 13, tool: 'collage',
            teacher: '"지킨 날마다 초록 네모를 왼쪽부터 하나씩 붙여요." 판 왼쪽이 월요일이라는 것을 짚는다. 같은 칸이 줄줄이 이어지면 그것이 되풀이, 곧 습관이 되어 가는 모습이라고 말한다. 화면 문항을 마치면 활동지 지킴표에 내 한 주를 색연필로 색칠한다.',
            task: '지킨 날마다 칸을 붙여 지킴표를 만들고, 활동지 지킴표에 내 한 주를 색칠해요.',
            levels: HABIT_LV,
            items: [
              { prompt: '하준이는 다섯 날 모두 손을 씻었어요. 초록 네모를 다섯 개 붙여 지킴표를 만들어 보세요.', target: { has: [{ shape: 'square', color: '초록', n: 5 }] }, difficulty: 0.1,
                hints: ['지킨 날마다 네모 하나예요. 월요일부터 세며 붙여요.', '붙인 초록 네모를 손가락으로 세어 다섯인지 봐요.', '초록 네모를 꼭 다섯 개 붙여요. 더 많거나 적으면 안 돼요.'],
                levels: { challenge: { prompt: '하준이는 다섯 날 손을 씻고, 두 날은 빠뜨렸어요. 초록 네모 다섯 개와 하양 네모 두 개를 붙여 보세요.', target: { has: [{ shape: 'square', color: '초록', n: 5 }, { shape: 'square', color: '하양', n: 2 }] } } } },
              { prompt: '지킨 날(초록 네모)과 별 딱지(노랑 별)를 한 묶음으로 왼쪽부터 세 번 넘게 되풀이해 붙여 보세요.', target: { repeat: { times: 3, unit: 2 }, has: [{ shape: 'square', min: 3 }, { shape: 'star', min: 3 }] }, difficulty: 0.2,
                hints: ['네모 하나, 별 하나가 한 묶음이에요. 왼쪽부터 같은 차례로 붙여요.', '묶음마다 네모 다음에 별이 오는지 봐요.', '네모·별, 네모·별, 네모·별로 세 번 넘게 이어 붙여요.'] },
              { prompt: '활동지 지킴표에 내 한 주를 색칠했으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 지킴표를 견주어 읽기', minutes: 13, tool: 'mindmap',
            teacher: '"두 친구 모두 세 날을 지켰어요. 그런데 지킴표 모양은 같나요?" 세 날이 이어진 줄과 띄엄띄엄인 줄을 견주게 한다. 끊긴 날이 있어도 다시 이어 가면 된다는 것을 짚는다. "지킴표에 빈칸이 있으면 실패한 걸까요?"라고 물어 다시 시작하면 된다고 말한다.',
            task: '지킴표를 읽고 이어진 것과 끊긴 것을 나누고, 끊긴 뒤에 할 일을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '지킴표를 읽고 날마다 이어진 것과 끊긴 것으로 나누어 보세요.', toolOptions: { topic: '지킴표 읽기', slots: ['날마다 이어졌어요', '중간에 끊겼어요'], cards: ['○○○○○', '○○○○○○○', '○ ○ ○', '○○  ○'] },
                target: { sort: { '날마다 이어졌어요': ['○○○○○', '○○○○○○○'], '중간에 끊겼어요': ['○ ○ ○', '○○  ○'] } }, difficulty: 0.15,
                hints: ['동그라미 사이에 빈칸(띄어 쓴 곳)이 있는지 봐요.', '흔들리는 카드의 동그라미 사이를 손가락으로 따라가 봐요.', '빈칸 없이 붙은 것은 이어졌고, 띄어진 것은 끊겼어요.'] },
              { prompt: '지킴표가 중간에 끊겼을 때 할 일만 골라 보세요.', toolOptions: { mode: 'pick', basket: '다시 이어요', cards: ['다음 날 다시 시작해요', '왜 못 했는지 생각해요', '지킴표를 버려요', '이제 안 해도 돼요'] },
                target: { pick: ['다음 날 다시 시작해요', '왜 못 했는지 생각해요'] }, difficulty: 0.1,
                predict: { q: '지킴표에 빈칸이 하나 생기면 습관 만들기는 끝일까요?', options: ['끝이에요', '다시 이어 가면 돼요'], answer: 1 },
                conclude: '빈칸이 생겨도 다음 날 다시 이어 가면 습관이 자라요.' },
              { prompt: '지킴표 세 장을 지킨 날이 많은 것부터 차례대로 놓아 보세요.', toolOptions: { mode: 'order', topic: '많이 지킨 차례', cards: ['○○○○○○', '○○○○', '○○'], slots: ['가장 많이', '가운데', '가장 적게'] },
                target: { order: ['○○○○○○', '○○○○', '○○'] }, difficulty: 0.1,
                levels: { challenge: { prompt: '지킴표 네 장을 지킨 날이 많은 것부터 차례대로 놓아 보세요.', toolOptions: { cards: ['○○○○○○', '○○○○○', '○○○○', '○○'], slots: ['가장 많이', '둘째', '셋째', '가장 적게'] }, target: { order: ['○○○○○○', '○○○○○', '○○○○', '○○'] } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"내 지킴표에서 가장 길게 이어진 날은 며칠인가요?" 두세 명이 활동지를 보여 준다. 끊긴 곳이 있는 학생에게 "다음 날 다시 시작했나요?"를 묻고 다시 시작한 것을 칭찬한다. 지킴표는 다음 주에도 이어서 쓰므로 집에 붙여 둔다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', basket: '날마다 이어졌어요', cards: ['○○○○○', '○ ○  ○', '○○○○○○'] }, prompt: '날마다 이어진 지킴표만 골라 보세요.', target: { pick: ['○○○○○', '○○○○○○'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '지킴표가 중간에 끊기면?', options: ['다음 날 다시 시작해요', '이제 그만해요'], answer: 0, difficulty: 0.05, explain: '빈칸이 생겨도 다시 이어 가면 습관이 돼요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '내 습관 지킴표',
      items: [
        { type: 'table', prompt: '지킨 날 칸에 색칠하세요.', columns: ['습관', '월', '화', '수', '목', '금'], rows: 3 },
        { type: 'blank', prompt: '가장 길게 이어서 지킨 습관은 ________이고, ____날 이어졌어요.' },
        { type: 'choice', prompt: '날마다 이어진 지킴표에 ○ 하세요.', options: ['○○○○○', '○ ○ ○'], answer: '○○○○○' },
        { type: 'short', prompt: '끊긴 날이 있다면 왜 못 했는지, 다음에는 어떻게 할지 쓰세요.' },
      ],
      easy: {
        note: '지킨 날마다 한 칸씩 색칠해요.',
        items: [
          { type: 'table', prompt: '손 씻기를 한 날에 색칠하세요.', columns: ['월', '화', '수', '목', '금'], rows: 1 },
          { type: 'choice', prompt: '끊겼을 때 할 일에 ○ 하세요.', options: ['다시 시작해요', '버려요'], answer: '다시 시작해요' },
          { type: 'draw', prompt: '습관을 지키는 나를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '조각 모양과 색이 적어 고르기 쉬워요. 맞게 놓으면 초록 테두리가 생겨요.',
      base: '초록 네모 다섯 개를 정확히 붙여요. 지킴표 세 장을 차례대로 놓아요.',
      challenge: '지킨 날과 빠뜨린 날을 다른 색으로 붙이고, 지킴표 네 장을 차례대로 놓아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 빈칸이 생기면 실패라고 여겨 포기한다 → 다시 시작한 것이 더 중요하다고 말한다. ② 하루만 지킨 것도 습관이라고 여긴다(단원 오개념) → 이어진 줄과 끊긴 줄을 나란히 보여 준다. ③ 색칠에 시간을 많이 쓴다 → 칸마다 빗금 하나만 그어도 된다고 안내한다. 친구의 지킴표와 견주어 경쟁하지 않도록 내 지킴표만 읽게 한다.',
  }));

  lessons.push(L(27, {
    title: '습관을 이어 가게 돕는 방법 찾기',
    objective: '습관을 지키기 어려웠던 까닭을 찾고, 같은 때·같은 곳에서 하기처럼 습관을 이어 가게 돕는 방법을 고를 수 있다.',
    illustration: ART('a paper bathroom sink with a small picture card of hand washing taped above it, a paper alarm clock showing nine, and a child giving a thumbs-up', '습관을 도와요', [
      { motif: 'moon', x: 390, y: 84, s: 0.5 }, { motif: 'house', x: 110, y: 214, color: 'peach' }, { motif: 'star', x: 250, y: 96, s: 0.4 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"지킴표가 끊긴 날, 왜 못 지켰나요?" 깜빡해서, 늦게 와서, 하기 싫어서 같은 까닭을 칠판에 적는다. "까닭을 알면 도울 방법도 찾을 수 있어요"라고 말한다. 시연 단추로 까닭과 돕는 방법이 이어지는 모습을 보여 준다.',
        student: '내 지킴표가 끊긴 날의 까닭을 하나 떠올려 짝에게 말해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '까닭과 방법', slots: [{ id: 'f', label: '깜빡했어요' }], cards: ['보이는 곳에 그림 붙이기'], shuffle: false }, sequence: [{ match: { f: '보이는 곳에 그림 붙이기' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 못 지킨 까닭과 돕는 방법 잇기', minutes: 13, tool: 'mindmap',
            teacher: '"깜빡하는 사람에게는 무엇이 도움이 될까요? 하기 싫은 사람에게는요?" 까닭마다 맞는 방법이 다르다는 것을 짚는다. 습관은 같은 때, 같은 곳에서 하면 저절로 떠오른다는 것을 알려 준다.',
            task: '습관을 못 지킨 까닭과 돕는 방법을 잇고, 습관을 이어 가게 돕는 방법을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '습관을 못 지킨 까닭과 알맞은 돕는 방법을 이어 보세요.', toolOptions: { mode: 'match', topic: '까닭과 방법', slots: [{ id: 'forget', label: '깜빡 잊었어요' }, { id: 'late', label: '자기 전에 할 시간이 없었어요' }, { id: 'boring', label: '혼자 하니 심심했어요' }], cards: ['세면대에 그림 쪽지 붙이기', '저녁을 일찍 먹고 준비하기', '가족과 함께 하기'] },
                target: { match: { forget: '세면대에 그림 쪽지 붙이기', late: '저녁을 일찍 먹고 준비하기', boring: '가족과 함께 하기' } }, difficulty: 0.15,
                hints: ['까닭마다 그 까닭을 없애 주는 방법이 하나씩 있어요.', '흔들리는 카드가 그 까닭(잊음·시간·심심함)을 풀어 주는지 봐요.', '잊음은 쪽지, 시간은 일찍 준비, 심심함은 가족과 함께예요.'],
                levels: { challenge: { prompt: '습관을 못 지킨 까닭과 알맞은 돕는 방법을 이어 보세요. 네 가지예요.', toolOptions: { slots: [{ id: 'forget', label: '깜빡 잊었어요' }, { id: 'late', label: '자기 전에 할 시간이 없었어요' }, { id: 'boring', label: '혼자 하니 심심했어요' }, { id: 'far', label: '칫솔이 높은 곳에 있어 꺼내기 힘들었어요' }], cards: ['세면대에 그림 쪽지 붙이기', '저녁을 일찍 먹고 준비하기', '가족과 함께 하기', '칫솔을 손 닿는 곳에 두기'] }, target: { match: { forget: '세면대에 그림 쪽지 붙이기', late: '저녁을 일찍 먹고 준비하기', boring: '가족과 함께 하기', far: '칫솔을 손 닿는 곳에 두기' } } } } },
              { prompt: '습관을 이어 가게 돕는 방법만 골라 보세요.', toolOptions: { mode: 'pick', basket: '습관 돕기', cards: ['날마다 같은 때에 하기', '날마다 같은 곳에서 하기', '생각날 때만 하기', '하기 싫으면 미루기'] },
                target: { pick: ['날마다 같은 때에 하기', '날마다 같은 곳에서 하기'] }, difficulty: 0.15,
                predict: { q: '이 닦기를 날마다 다른 때에 하면 잊지 않을까요?', options: ['잊지 않아요', '같은 때에 해야 잊지 않아요'], answer: 1 },
                conclude: '같은 때, 같은 곳에서 되풀이하면 습관이 저절로 떠올라요.',
                levels: { challenge: { toolOptions: { cards: ['날마다 같은 때에 하기', '날마다 같은 곳에서 하기', '생각날 때만 하기', '하기 싫으면 미루기', '한 번 하면 그만하기'] } } } },
              { prompt: '습관 이어 가기를 친구와 함께 하는 방법만 골라 보세요.', toolOptions: { mode: 'pick', basket: '함께 해요', cards: ['짝과 "손 씻었니?" 물어 주기', '지킨 친구에게 칭찬해 주기', '못 지킨 친구 놀리기'] },
                target: { pick: ['짝과 "손 씻었니?" 물어 주기', '지킨 친구에게 칭찬해 주기'] }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 습관 도우미 쪽지 만들기', minutes: 13, tool: 'kitchen',
            teacher: '"습관이 저절로 떠오르게 하려면 쪽지를 어디에 붙일까요?" 습관을 하는 바로 그곳(세면대, 침대 옆, 식탁)에 붙인다는 것을 짚는다. 쪽지 만드는 차례를 익힌 뒤 손바닥만 한 종이에 습관 그림을 그려 도우미 쪽지를 만든다. 쪽지는 집에 가져가 붙인다.',
            task: '도우미 쪽지를 만드는 차례를 놓고, 내 습관 도우미 쪽지를 그려 만들어요.',
            levels: CARD_LV,
            items: [
              { prompt: '습관 도우미 쪽지를 만들어 쓰는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['더 잘 지킬 습관을 골라요', '쪽지에 습관 그림을 그려요', '습관을 하는 곳에 붙여요', '쪽지를 보면 바로 해요'] },
                target: { order: ['더 잘 지킬 습관을 골라요', '쪽지에 습관 그림을 그려요', '습관을 하는 곳에 붙여요', '쪽지를 보면 바로 해요'] }, difficulty: 0.15,
                hints: ['무엇을 도울지 정해야 그림을 그릴 수 있어요.', '흔들리는 카드 앞에 꼭 먼저 해야 할 일이 있는지 생각해요.', '고르기 → 그리기 → 붙이기 → 보면 바로 하기 차례예요.'],
                levels: { easy: { prompt: '습관 도우미 쪽지를 만드는 차례대로 세 장을 놓아 보세요.', toolOptions: { cards: ['더 잘 지킬 습관을 골라요', '쪽지에 습관 그림을 그려요', '습관을 하는 곳에 붙여요'] }, target: { order: ['더 잘 지킬 습관을 골라요', '쪽지에 습관 그림을 그려요', '습관을 하는 곳에 붙여요'] } } } },
              { prompt: '습관과 도우미 쪽지를 붙일 곳을 이어 보세요.', toolOptions: { mode: 'match', slots: [{ id: 'hand', label: '손 씻기' }, { id: 'sleep', label: '일찍 자기' }, { id: 'veg', label: '채소 먹기' }], cards: ['세면대 거울', '침대 옆 벽', '식탁 위'] },
                target: { match: { hand: '세면대 거울', sleep: '침대 옆 벽', veg: '식탁 위' } }, difficulty: 0.1,
                hints: ['습관을 하는 바로 그곳에 붙여야 저절로 떠올라요.', '흔들리는 카드의 곳에서 그 습관을 하는지 생각해요.', '손 씻기는 세면대, 잠은 침대 옆, 채소는 식탁이에요.'] },
              { prompt: '내 습관 도우미 쪽지를 그려 만들었으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"내 쪽지는 어디에 붙일 건가요?" 두세 명이 쪽지를 보여 주며 말한다. 쪽지를 붙이고 한 주 동안 지킴표가 어떻게 달라지는지 다음 시간에 견주어 본다고 예고한다. 출구 1번에서 함께 하는 방법을 잘못 고른 학생에게는 친구를 놀리면 어떤 마음일지 묻는다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', slots: [{ id: 'forget', label: '깜빡 잊었어요' }, { id: 'boring', label: '혼자 하니 심심했어요' }], cards: ['가족과 함께 하기', '보이는 곳에 쪽지 붙이기'] }, prompt: '못 지킨 까닭과 돕는 방법을 이어 보세요.', target: { match: { forget: '보이는 곳에 쪽지 붙이기', boring: '가족과 함께 하기' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '습관을 잊지 않으려면?', options: ['생각날 때만 해요', '같은 때, 같은 곳에서 해요'], answer: 1, difficulty: 0.1, explain: '같은 때, 같은 곳에서 하면 저절로 떠올라요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '습관 도우미 쪽지',
      items: [
        { type: 'blank', prompt: '내가 더 잘 지킬 습관은 ______________예요.' },
        { type: 'blank', prompt: '못 지킨 까닭은 ______________이고, ______________(으)로 도울 거예요.' },
        { type: 'draw', prompt: '도우미 쪽지에 들어갈 습관 그림을 그리세요.' },
        { type: 'choice', prompt: '손 씻기 쪽지를 붙일 곳에 ○ 하세요.', options: ['세면대 거울', '현관 신발장'], answer: '세면대 거울' },
      ],
      easy: {
        note: '습관을 하는 곳에 붙여요.',
        items: [
          { type: 'choice', prompt: '습관을 돕는 방법에 ○ 하세요.', options: ['같은 때에 하기', '하기 싫으면 미루기'], answer: '같은 때에 하기' },
          { type: 'blank', prompt: '나는 ________ 쪽지를 만들 거예요.' },
          { type: 'draw', prompt: '도우미 쪽지를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞게 놓으면 초록 테두리가 생겨요. 쪽지 차례 카드는 세 장이에요.',
      base: '모두 놓고 확인해요. 까닭 세 가지와 방법을 이어요.',
      challenge: '까닭 네 가지를 잇고, 함정 카드가 더 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 까닭을 "그냥요"로만 말한다 → "깜빡했나요, 시간이 없었나요, 하기 싫었나요?" 세 가지로 좁혀 묻는다. ② 쪽지를 아무 곳에나 붙인다 → 습관을 하는 바로 그곳에 붙이게 한다. ③ 못 지킨 친구를 탓한다 → 함께 하는 방법은 물어 주기와 칭찬이라는 것을 강조한다. 가정마다 공간이 다르므로 붙일 곳은 학생이 정하게 한다.',
  }));

  lessons.push(L(28, {
    title: '다음 주 건강 목표 하나 고르고 다짐하기',
    objective: '한 주 그래프와 지킴표를 돌아보고 다음 주에 더 잘 지킬 건강 목표 하나를 골라, 얼마나 지킬지 정해 다짐할 수 있다.',
    illustration: ART('a paper goal ladder with three steps, a child placing a green circle sticker on the top step labelled next week, a small paper trophy beside', '다음 주 목표', [
      { motif: 'star', x: 120, y: 84, s: 0.5 }, { motif: 'sun', x: 390, y: 84, s: 0.5 }, { motif: 'tree', x: 250, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"25차시 그래프와 26차시 지킴표를 다시 보세요. 가장 적게 지킨 습관은 무엇이었나요?" 이번 주 잘 지킨 습관부터 먼저 칭찬한다. "다음 주 목표는 몇 개가 좋을까요?" 많이 고르면 다 지키기 어렵다는 것을 짚고 하나만 고르자고 말한다. 시연 단추로 목표 카드 하나가 바구니에 담기는 모습을 보여 준다.',
        student: '이번 주 내가 잘 지킨 습관을 하나 말해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'pick', basket: '다음 주 목표', cards: ['일찍 자기 다섯 날', '모든 습관 다 하기'], shuffle: false }, sequence: [{ pick: ['일찍 자기 다섯 날'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 그래프를 보고 목표 고르기', minutes: 13, tool: 'chart',
            teacher: '"서아의 그래프에서 가장 적게 지킨 습관이 다음 주 목표가 되면 좋겠지요?" 그래프를 읽어 목표를 고르게 한다. 목표에는 "몇 날"까지 정하면 지켰는지 알기 쉽다는 것(19차시 또렷한 다짐)을 떠올리게 한다.',
            task: '그래프를 읽고 다음 주에 더 잘 지킬 습관과 알맞은 목표 수를 골라요.',
            levels: { easy: { showValues: true }, base: {}, challenge: {} },
            items: [
              { prompt: '그래프를 보고 고르세요. 서아가 다음 주에 더 잘 지킬 습관은?', toolOptions: { type: 'picture', mode: 'read', title: '서아의 한 주 습관', unit: '날', data: [['손 씻기', 5], ['일찍 자기', 4], ['채소 먹기', 1]], icons: [{ value: 1, name: '1날' }], icon: 'circle', question: '가장 적게 지킨 습관은?', choices: ['손 씻기', '일찍 자기', '채소 먹기'] }, target: { pick: 2 }, difficulty: 0.1 },
              { prompt: '그래프를 보고 고르세요. 준호는 이번 주 일찍 자기를 두 날 지켰어요. 다음 주에 한 걸음 더 나아간 목표는?', toolOptions: { type: 'picture', mode: 'read', title: '준호의 한 주 습관', unit: '날', data: [['손 씻기', 5], ['일찍 자기', 2]], icons: [{ value: 1, name: '1날' }], icon: 'circle', question: '다음 주 일찍 자기 목표는?', choices: ['한 날', '세 날', '열 날'], why: ['이번 주보다 적어요.', null, '한 주는 일곱 날이라 열 날은 할 수 없어요.'] }, target: { pick: 1 }, difficulty: 0.2 },
              { prompt: '하준이의 그래프에서 동그라미를 세어, 목표를 정하기 전 지킴 수 표의 빈칸을 채워 보세요.', toolOptions: { type: 'picture', mode: 'read', title: '하준이의 한 주 습관', unit: '날', data: [['손 씻기', 3], ['일찍 자기', 5], ['채소 먹기', 2]], icons: [{ value: 1, name: '1날' }], icon: 'circle', tableBlanks: [2] }, target: { table: true }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { tableBlanks: [0, 2] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 다음 주 목표 다짐하기', minutes: 13, tool: 'mindmap',
            teacher: '"한 걸음 더 나아간 목표는 이번 주보다 조금 더 많이, 그러나 할 수 있을 만큼이에요." 지킬 수 있는 목표를 고르게 한다. 문항을 마치면 활동지에 내 다음 주 목표와 도우미 방법을 쓰고 짝에게 다짐 말을 한다.',
            task: '지킬 수 있는 목표를 고르고, 내 다음 주 목표를 써서 짝에게 다짐해요.',
            levels: CARD_LV,
            items: [
              { prompt: '다음 주 목표로 알맞은 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '다음 주 목표', cards: ['채소 먹기 세 날', '손 씻기 날마다', '모든 습관 열 날씩', '한 번도 안 빠뜨리기 백 날'] },
                target: { pick: ['채소 먹기 세 날', '손 씻기 날마다'] }, difficulty: 0.15,
                hints: ['한 주(일곱 날) 안에 내가 할 수 있는 목표인지 따져요.', '흔들리는 카드는 한 주 안에 지킬 수 있나요?', '세 날과 날마다는 할 수 있어요. 열 날, 백 날은 한 주를 넘어요.'],
                levels: { challenge: { toolOptions: { cards: ['채소 먹기 세 날', '손 씻기 날마다', '모든 습관 열 날씩', '한 번도 안 빠뜨리기 백 날', '하루만 일찍 자기'] } } } },
              { prompt: '목표를 정하고 지키는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', topic: '목표 지키기', cards: ['그래프를 돌아봐요', '목표 하나를 골라요', '날마다 지킴표에 ○ 해요', '한 주 뒤 다시 세어 봐요'] },
                target: { order: ['그래프를 돌아봐요', '목표 하나를 골라요', '날마다 지킴표에 ○ 해요', '한 주 뒤 다시 세어 봐요'] }, difficulty: 0.15,
                levels: { easy: { prompt: '목표를 정하고 지키는 차례대로 세 장을 놓아 보세요.', toolOptions: { cards: ['목표 하나를 골라요', '날마다 지킴표에 ○ 해요', '한 주 뒤 다시 세어 봐요'] }, target: { order: ['목표 하나를 골라요', '날마다 지킴표에 ○ 해요', '한 주 뒤 다시 세어 봐요'] } } } },
              { prompt: '활동지에 내 다음 주 목표를 쓰고 짝에게 다짐 말을 했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"내 다음 주 목표는 몇 날인가요?" 두세 명이 발표한다. 목표를 다 못 지켜도 지난주보다 하나 더 늘면 잘한 것이라고 말해 준다. 이번 주 건강한 하루 공부를 돌아보며 마음을 골라 보게 한다. 다음 시간부터는 학교에서의 하루와 약속을 알아본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', basket: '다음 주 목표', cards: ['줄넘기 네 날', '줄넘기 스무 날'] }, prompt: '한 주 안에 지킬 수 있는 목표를 골라 보세요.', target: { pick: ['줄넘기 네 날'] }, difficulty: 0.05 },
          { type: 'choice', prompt: '다음 주 목표는 몇 개가 좋을까요?', options: ['하나', '모든 습관 다'], answer: 0, difficulty: 0.1, explain: '목표를 하나만 고르면 끝까지 지키기 쉬워요.' },
          { type: 'tool', tool: 'emotion', options: { mode: 'scale', steps: 3, situation: '이번 주 건강 습관을 지켜 온 나를 떠올려 보아요.', feeling: '뿌듯함', ask: '나는 얼마나 뿌듯한가요?' }, prompt: '내 마음을 솔직하게 골라 보세요. 정답은 없어요.', target: { level: 'any' }, difficulty: 0.05 },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '다음 주 건강 목표',
      items: [
        { type: 'blank', prompt: '이번 주에 가장 적게 지킨 습관은 ______________예요.' },
        { type: 'blank', prompt: '다음 주에는 ______________을(를) ____날 지킬 거예요.' },
        { type: 'blank', prompt: '나를 도울 방법은 ______________예요.' },
        { type: 'choice', prompt: '한 주 안에 지킬 수 있는 목표에 ○ 하세요.', options: ['채소 먹기 세 날', '채소 먹기 백 날'], answer: '채소 먹기 세 날' },
        { type: 'table', prompt: '다음 주에 지킨 날에 ○ 하세요.', columns: ['월', '화', '수', '목', '금'], rows: 1 },
      ],
      easy: {
        note: '목표는 하나! 할 수 있을 만큼!',
        items: [
          { type: 'blank', prompt: '다음 주에는 ______________을(를) 할 거예요.' },
          { type: 'choice', prompt: '알맞은 목표에 ○ 하세요.', options: ['손 씻기 날마다', '모든 습관 열 날씩'], answer: '손 씻기 날마다' },
          { type: 'table', prompt: '지킨 날에 ○ 하세요.', columns: ['월', '화', '수', '목', '금'], rows: 1 },
        ],
      },
    },
    differentiation: {
      easy: '그래프에 수가 함께 보여요. 목표 차례 카드는 세 장이에요.',
      base: '그래프를 읽고 목표를 골라요. 표 빈칸 하나를 채워요.',
      challenge: '표 빈칸 두 개를 채우고, 함정 목표 카드가 더 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 목표를 여러 개 고르거나 너무 크게 잡는다 → 한 주(일곱 날) 안에 할 수 있는지 묻는다. ② 이번 주보다 적은 목표를 고른다 → "한 걸음 더"를 손가락 하나 더로 보여 준다. ③ 못 지킨 습관을 부끄러워한다 → 잘 지킨 습관부터 칭찬하고 시작한다. 출구의 뿌듯함 크기 문항은 정답이 없다.',
  }));

  // ───────────────────────── 29~32차시: 학교의 하루와 교실·복도 약속(학교에서의 하루 — 개념) ─────────────────────────

  lessons.push(L(29, {
    title: '학교에 와서 하는 일을 차례대로 놓기',
    objective: '아침에 학교에 와서 하는 일(실내화 갈아신기·인사·가방 걸기·알림장 내기)을 차례대로 말하고 그대로 해 볼 수 있다.',
    illustration: ART('a paper school entrance with a shoe cubby, a child changing into indoor shoes, and a classroom door with a teacher waving good morning', '학교에 왔어요', [
      { motif: 'sun', x: 120, y: 84, s: 0.6 }, { motif: 'house', x: 380, y: 214, color: 'sky' }, { motif: 'tree', x: 250, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"오늘 아침 교문을 지나서 교실에 들어오기까지 무엇을 했나요?" 학생이 말한 일을 칠판에 순서 없이 적는다. "실내화를 갈아신기 전에 교실에 들어가면 어떻게 될까요?"라고 물어 차례가 왜 필요한지 이야기한다. 시연 단추로 장면 카드가 차례로 놓이는 모습을 보여 준다.',
        student: '오늘 아침 교실에 들어오기 전에 한 일을 하나 말해 봐요.',
        demo: { tool: 'story', options: { cards: [{ id: 'shoe', text: '실내화로 갈아신어요', motif: 'house' }, { id: 'hello', text: '선생님께 인사해요', motif: 'sun' }], slots: ['먼저', '다음'], shuffle: false }, sequence: [{ order: ['shoe', 'hello'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 아침에 학교에서 하는 일 차례 놓기', minutes: 14, tool: 'story',
            teacher: '"신발장 → 교실 문 → 내 자리" 순서로 걸어가는 길을 떠올리게 한다. 가방 걸기와 알림장 내기처럼 어느 것을 먼저 해도 되는 일도 있다고 알려 준다. 차례를 다 놓으면 모두 복도로 나가 신발장부터 내 자리까지 차례대로 걸어 들어와 본다.',
            task: '아침에 학교에서 하는 일을 차례대로 놓고, 복도에서 교실까지 그대로 해 봐요.',
            levels: CARD_LV,
            items: [
              { prompt: '서아가 아침에 학교에 와서 하는 일을 차례대로 놓아 보세요.', toolOptions: { cards: [{ id: 'shoe', text: '실내화로 갈아신어요', motif: 'house' }, { id: 'hello', text: '교실에서 인사해요', motif: 'sun' }, { id: 'bag', text: '가방을 걸어요', motif: 'star' }, { id: 'read', text: '아침 책 읽기를 해요', motif: 'leaf' }], slots: ['처음', '둘째', '셋째', '끝'] },
                target: { order: ['shoe', 'hello', 'bag', 'read'] }, difficulty: 0.15,
                hints: ['교문에서 내 자리까지 걸어가는 길을 떠올려요. 신발장이 가장 먼저예요.', '흔들리는 카드는 교실 밖에서 하나요, 교실 안에서 하나요?', '실내화 → 인사 → 가방 → 책 읽기 차례예요.'],
                levels: { easy: { prompt: '서아가 아침에 학교에 와서 하는 일을 차례대로 세 장 놓아 보세요.', toolOptions: { cards: [{ id: 'shoe', text: '실내화로 갈아신어요', motif: 'house' }, { id: 'hello', text: '교실에서 인사해요', motif: 'sun' }, { id: 'read', text: '아침 책 읽기를 해요', motif: 'leaf' }], slots: ['처음', '가운데', '끝'] }, target: { order: ['shoe', 'hello', 'read'] } },
                  challenge: { prompt: '서아가 아침에 학교에 와서 하는 일을 차례대로 놓아 보세요. 아침에 하지 않는 일은 빼요.', toolOptions: { cards: [{ id: 'shoe', text: '실내화로 갈아신어요', motif: 'house' }, { id: 'hello', text: '교실에서 인사해요', motif: 'sun' }, { id: 'bag', text: '가방을 걸어요', motif: 'star' }, { id: 'read', text: '아침 책 읽기를 해요', motif: 'leaf' }, { id: 'home', text: '알림장을 들고 집에 가요', motif: 'moon' }], slots: ['처음', '둘째', '셋째', '끝'] } } } },
              { prompt: '자리에 와서 하는 일이에요. 가방 걸기와 알림장 내기는 어느 것을 먼저 해도 돼요. 차례대로 놓아 보세요.', toolOptions: { cards: [{ id: 'bag', text: '가방을 걸어요', motif: 'star' }, { id: 'note', text: '알림장을 내요', motif: 'leaf' }, { id: 'sit', text: '자리에 앉아 책을 펴요', motif: 'sun' }], slots: ['처음', '가운데', '끝'] },
                target: { order: [['bag', 'note'], 'sit'] }, difficulty: 0.1 },
              { prompt: '모두 복도로 나가 신발장부터 내 자리까지 차례대로 해 보았으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 교실 약속과 복도 약속 나누기', minutes: 12, tool: 'mindmap',
            teacher: '"교실과 복도는 하는 일이 달라요. 그래서 약속도 달라요." 교실에서는 함께 공부하고, 복도는 여러 반이 함께 지나간다는 것을 짚는다. 카드를 나눈 뒤 "이 약속은 왜 있을까요?"를 한두 개 묻는다.',
            task: '학교 약속 카드를 교실 약속과 복도 약속으로 나누고, 약속이 있는 까닭을 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '약속 카드를 교실 약속과 복도 약속으로 나누어 보세요.', toolOptions: { topic: '학교 약속', slots: ['교실에서', '복도에서'], cards: ['손을 들고 말해요', '친구 물건은 물어보고 써요', '오른쪽으로 걸어요', '뛰지 않고 걸어요'] },
                target: { sort: { '교실에서': ['손을 들고 말해요', '친구 물건은 물어보고 써요'], '복도에서': ['오른쪽으로 걸어요', '뛰지 않고 걸어요'] } }, difficulty: 0.15,
                hints: ['그 약속을 지키는 곳이 앉아서 공부하는 곳인지, 걸어서 지나가는 곳인지 생각해요.', '흔들리는 카드의 일을 교실 자리에서 하나요, 지나가는 길에서 하나요?', '손 들기와 물건 물어보기는 교실, 오른쪽·걷기는 복도예요.'],
                levels: { challenge: { prompt: '약속 카드를 교실 약속과 복도 약속으로 나누어 보세요. 여섯 장이에요.', toolOptions: { cards: ['손을 들고 말해요', '친구 물건은 물어보고 써요', '친구가 말할 때 들어요', '오른쪽으로 걸어요', '뛰지 않고 걸어요', '모퉁이에서 천천히 걸어요'] }, target: { sort: { '교실에서': ['손을 들고 말해요', '친구 물건은 물어보고 써요', '친구가 말할 때 들어요'], '복도에서': ['오른쪽으로 걸어요', '뛰지 않고 걸어요', '모퉁이에서 천천히 걸어요'] } } } } },
              { prompt: '약속과 그 약속이 있는 까닭을 이어 보세요.', toolOptions: { mode: 'match', topic: '왜 있을까', slots: [{ id: 'run', label: '복도에서 뛰지 않아요' }, { id: 'hand', label: '손을 들고 말해요' }, { id: 'right', label: '복도 오른쪽으로 걸어요' }], cards: ['부딪혀 다치지 않게', '모두 차례대로 말하게', '오고 가는 사람이 엇갈리지 않게'] },
                target: { match: { run: '부딪혀 다치지 않게', hand: '모두 차례대로 말하게', right: '오고 가는 사람이 엇갈리지 않게' } }, difficulty: 0.2,
                hints: ['약속을 지키지 않으면 어떤 일이 생길지 떠올리면 까닭이 보여요.', '흔들리는 카드가 그 약속을 어겼을 때 생기는 일과 이어지는지 봐요.', '뛰기는 다침, 손 들기는 차례, 오른쪽은 엇갈림이에요.'] },
              { prompt: '복도에서 지키는 약속만 골라 보세요.', toolOptions: { mode: 'pick', basket: '복도 약속', cards: ['오른쪽으로 걸어요', '작은 목소리로 말해요', '복도에서 술래잡기해요'] },
                target: { pick: ['오른쪽으로 걸어요', '작은 목소리로 말해요'] }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"복도에서 교실까지 걸어 들어올 때 친구가 잘 지킨 차례는?" 두세 명이 말한다. 내일 아침에도 오늘 놓은 차례대로 해 보자고 약속한다. 출구 1번에서 순서를 바꾼 학생에게는 신발장이 교실 밖에 있다는 것을 짚어 준다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { cards: [{ id: 'shoe', text: '실내화로 갈아신어요', motif: 'house' }, { id: 'hello', text: '교실에서 인사해요', motif: 'sun' }, { id: 'sit', text: '자리에 앉아요', motif: 'star' }], slots: ['처음', '가운데', '끝'] }, prompt: '아침에 학교에 와서 하는 일을 차례대로 놓아 보세요.', target: { order: ['shoe', 'hello', 'sit'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '복도에서 지키는 약속은?', options: ['오른쪽으로 걸어요', '손을 들고 말해요'], answer: 0, difficulty: 0.1, explain: '복도는 여러 사람이 오가는 곳이라 오른쪽으로 걸어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '학교에 와서 하는 일',
      items: [
        { type: 'figure', wide: true, prompt: '아침에 하는 차례대로 1, 2, 3을 쓰세요.', tool: 'story', figures: [{ options: { cards: [{ id: 'hello', text: '교실에서 인사해요', motif: 'sun' }, { id: 'shoe', text: '실내화로 갈아신어요', motif: 'house' }, { id: 'read', text: '아침 책 읽기를 해요', motif: 'leaf' }], slots: ['', '', ''], shuffle: false }, caption: '' }], answer: '실내화 → 인사 → 책 읽기' },
        { type: 'table', prompt: '약속을 나누어 쓰세요.', columns: ['교실 약속', '복도 약속'], rows: 2 },
        { type: 'choice', prompt: '복도에서 뛰지 않는 까닭에 ○ 하세요.', options: ['부딪혀 다치지 않게', '빨리 가려고'], answer: '부딪혀 다치지 않게' },
        { type: 'draw', prompt: '아침에 학교에 와서 하는 내 모습을 그려 보세요.' },
      ],
      easy: {
        note: '신발장 → 교실 문 → 내 자리 길을 떠올려요.',
        items: [
          { type: 'choice', prompt: '가장 먼저 하는 일에 ○ 하세요.', options: ['실내화로 갈아신어요', '책 읽기를 해요'], answer: '실내화로 갈아신어요' },
          { type: 'choice', prompt: '복도 약속에 ○ 하세요.', options: ['오른쪽으로 걸어요', '복도에서 뛰어요'], answer: '오른쪽으로 걸어요' },
          { type: 'draw', prompt: '교실에 들어오는 나를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞게 놓으면 초록 테두리가 생겨요. 아침 차례 카드는 세 장이에요.',
      base: '모두 놓고 확인해요. 아침 차례 카드는 네 장이에요.',
      challenge: '아침에 하지 않는 함정 카드를 빼고, 약속 카드 여섯 장을 나누어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 실내화를 갈아신는 차례를 빠뜨린다 → 신발장 앞에서 실제로 해 보게 한다. ② 교실 약속과 복도 약속을 섞는다 → "앉아서 하나요, 걸어가며 하나요?"로 묻는다. ③ 학교마다 아침 일과가 다르다 → 우리 반 아침 일과(아침 책 읽기, 아침 활동 등)에 맞게 카드를 말로 바꾸어 읽어 준다. 복도 연습 때는 다른 반 수업에 방해가 되지 않게 조용히 걷는다.',
  }));

  lessons.push(L(30, {
    title: '교실과 복도에서 지킬 약속 두 가지 정하기',
    objective: '교실과 복도에서 꼭 지킬 약속을 하나씩 골라 까닭과 함께 말하고, 그 약속을 지키는 말과 행동을 할 수 있다.',
    illustration: ART('a paper school corridor with an arrow on the floor pointing right, two children walking on the right side, a classroom door with a small promise poster', '우리 반 약속', [
      { motif: 'house', x: 110, y: 214, color: 'mint' }, { motif: 'star', x: 390, y: 84, s: 0.5 }, { motif: 'flower', x: 250, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"지난 시간에 교실 약속과 복도 약속을 나누어 보았지요. 그 가운데 우리 반이 꼭 지킬 약속을 하나씩만 고른다면?" 학생들의 생각을 듣는다. 약속은 많이 정하는 것보다 꼭 지킬 것을 고르는 것이 중요하다고 말한다. 시연 단추로 친구의 말풍선에 알맞은 약속 말이 들어가는 모습을 보여 준다.',
        student: '교실에서 가장 지키기 어려운 약속을 하나 떠올려 말해 봐요.',
        demo: { tool: 'story', options: { mode: 'fill', cards: ['손을 들고', '소리를 지르며'], slots: [{ id: 'b1', who: '준호', motif: 'sun', label: '___ 말할게요.' }], shuffle: false }, sequence: [{ fill: { b1: '손을 들고' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 약속을 지키는 말 넣기', minutes: 13, tool: 'story',
            teacher: '"친구가 약속을 지키려면 어떤 말을 할까요?" 말풍선에 알맞은 말을 넣게 한다. 말풍선 문장을 다 만들면 짝과 한 사람씩 소리 내어 읽고 몸짓으로 해 본다. 복도에서 친구와 마주쳤을 때 "먼저 지나가" 하고 오른쪽으로 비켜 주는 것도 약속을 지키는 말이라고 알려 준다.',
            task: '친구의 말풍선에 약속을 지키는 말을 넣고, 짝과 소리 내어 해 봐요.',
            levels: CARD_LV,
            items: [
              { prompt: '교실에서 약속을 지키는 말을 말풍선에 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['빌려줄래', '말해도 돼요', '그냥 가져갈게'], slots: [{ id: 'b1', who: '서아', motif: 'flower', label: '지우개 좀 ___?' }, { id: 'b2', who: '하준', motif: 'sun', label: '(손을 들고) 선생님, ___?' }] },
                target: { fill: { b1: '빌려줄래', b2: '말해도 돼요' } }, difficulty: 0.15,
                hints: ['친구 물건은 물어보고, 말할 때는 손을 들고 허락을 받아요.', '흔들리는 말풍선을 소리 내어 읽어 보고 약속에 맞는지 들어 봐요.', '지우개는 "빌려줄래?", 손 들기는 "말해도 돼요?"예요.'],
                levels: { easy: { prompt: '교실에서 약속을 지키는 말을 말풍선에 넣어 보세요.', toolOptions: { cards: ['빌려줄래', '그냥 가져갈게'], slots: [{ id: 'b1', who: '서아', motif: 'flower', label: '지우개 좀 ___?' }] }, target: { fill: { b1: '빌려줄래' } } } } },
              { prompt: '복도에서 약속을 지키는 말을 말풍선에 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['오른쪽으로', '천천히', '빨리 뛰어서'], slots: [{ id: 'b1', who: '민지', motif: 'house', label: '친구야, 우리 ___ 걷자.' }, { id: 'b2', who: '준호', motif: 'tree', label: '모퉁이니까 ___ 가자.' }] },
                target: { fill: { b1: '오른쪽으로', b2: '천천히' } }, difficulty: 0.15,
                hints: ['복도에서는 오가는 사람이 부딪히지 않게 걸어요.', '흔들리는 말풍선 속 곳(복도·모퉁이)을 다시 읽어요.', '복도는 "오른쪽으로", 모퉁이는 "천천히"예요.'] },
              { prompt: '짝과 말풍선 말을 소리 내어 읽고 몸짓으로 해 보았으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 우리 반 약속 두 가지 고르기', minutes: 13, tool: 'kitchen',
            teacher: '"꼭 지킬 약속은 우리가 지킬 수 있고, 지키면 모두에게 좋은 것이에요." 점검표로 약속을 따져 보게 한다. 마지막에 반 전체가 손을 들어 교실 약속 하나, 복도 약속 하나를 정하고 칠판에 적는다(활동지에도 옮겨 쓴다).',
            task: '좋은 약속인지 점검하고, 우리 반이 꼭 지킬 약속 두 가지를 정해 활동지에 써요.',
            levels: CARD_LV,
            items: [
              { prompt: '좋은 약속이 되려면 어떤지, 알맞은 것만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '좋은 약속', items: [{ id: 'can', text: '우리가 지킬 수 있어요' }, { id: 'all', text: '지키면 모두에게 좋아요' }, { id: 'short', text: '짧고 쉽게 말할 수 있어요' }, { id: 'one', text: '한 사람만 좋아요' }] },
                target: { checklist: ['can', 'all', 'short'] }, difficulty: 0.15,
                levels: { easy: { prompt: '좋은 약속이 되려면 어떤지, 알맞은 것만 표시해 보세요. 두 가지예요.', toolOptions: { items: [{ id: 'can', text: '우리가 지킬 수 있어요' }, { id: 'all', text: '지키면 모두에게 좋아요' }, { id: 'one', text: '한 사람만 좋아요' }] }, target: { checklist: ['can', 'all'] } },
                  challenge: { toolOptions: { items: [{ id: 'can', text: '우리가 지킬 수 있어요' }, { id: 'all', text: '지키면 모두에게 좋아요' }, { id: 'short', text: '짧고 쉽게 말할 수 있어요' }, { id: 'one', text: '한 사람만 좋아요' }, { id: 'hard', text: '아무도 지킬 수 없어요' }] } } } },
              { prompt: '약속을 정하는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['약속거리를 말해요', '좋은 약속인지 따져요', '손을 들어 정해요', '약속판에 써 붙여요'] },
                target: { order: ['약속거리를 말해요', '좋은 약속인지 따져요', '손을 들어 정해요', '약속판에 써 붙여요'] }, difficulty: 0.15,
                hints: ['무엇을 약속할지 먼저 말해야 따질 수 있어요.', '흔들리는 카드 앞에 꼭 먼저 해야 할 일이 있는지 생각해요.', '말하기 → 따지기 → 정하기 → 써 붙이기 차례예요.'],
                levels: { easy: { prompt: '약속을 정하는 차례대로 세 장을 놓아 보세요.', toolOptions: { cards: ['약속거리를 말해요', '손을 들어 정해요', '약속판에 써 붙여요'] }, target: { order: ['약속거리를 말해요', '손을 들어 정해요', '약속판에 써 붙여요'] } } } },
              { prompt: '우리 반이 정한 교실 약속과 복도 약속을 활동지에 썼으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"우리 반 약속 두 가지를 함께 소리 내어 읽어 볼까요?" 칠판의 약속을 모두 읽는다. 다음 시간에는 이 약속을 언제, 어떻게 지킬지 더 생각해 본다고 예고한다. 출구 1번에서 그냥 가져간다는 말을 넣은 학생에게는 친구가 어떤 마음일지 묻는다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { mode: 'fill', cards: ['빌려줄래', '내 거야'], slots: [{ id: 'b1', who: '하준', motif: 'sun', label: '색연필 좀 ___?' }] }, prompt: '친구 물건을 쓸 때 약속을 지키는 말을 넣어 보세요.', target: { fill: { b1: '빌려줄래' } }, difficulty: 0.05 },
          { type: 'choice', prompt: '좋은 약속은?', options: ['우리가 지킬 수 있는 약속', '아무도 지킬 수 없는 약속'], answer: 0, difficulty: 0.05, explain: '좋은 약속은 우리가 지킬 수 있고 모두에게 좋아요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '우리 반 약속 두 가지',
      items: [
        { type: 'blank', prompt: '우리 반 교실 약속: ______________________' },
        { type: 'blank', prompt: '우리 반 복도 약속: ______________________' },
        { type: 'short', prompt: '이 약속이 있으면 무엇이 좋은지 쓰세요.' },
        { type: 'check', prompt: '좋은 약속인지 ✓ 하세요.', options: ['우리가 지킬 수 있어요', '지키면 모두에게 좋아요', '짧고 쉽게 말할 수 있어요'] },
      ],
      easy: {
        note: '선생님이 칠판에 쓴 약속을 보고 따라 써요.',
        items: [
          { type: 'blank', prompt: '교실 약속: ______________' },
          { type: 'blank', prompt: '복도 약속: ______________' },
          { type: 'draw', prompt: '약속을 지키는 나를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞게 넣으면 초록 테두리가 생겨요. 말풍선은 하나, 점검은 세 가지예요.',
      base: '모두 넣고 확인해요. 말풍선이 두 개예요.',
      challenge: '함정 항목이 더 있는 점검표를 따져요. 약속의 까닭까지 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 약속을 많이 정하려 한다 → 꼭 지킬 것 두 가지로 줄인다. ② "하지 마요"로만 약속을 만든다 → "~해요"로 바꾸어 말하게 한다(뛰지 마요 → 걸어요). ③ 말풍선의 빈칸 위치를 헷갈린다 → 문장을 소리 내어 읽게 한다. 정한 약속은 31~32차시에서 계속 쓰므로 약속판으로 크게 만들어 둔다.',
  }));

  lessons.push(L(31, {
    title: '선생님이 안 볼 때도 약속 지키기',
    objective: '선생님이 보지 않을 때에도 약속을 지켜야 하는 까닭을 말하고, 그런 상황에서 약속을 지키는 행동을 고를 수 있다.',
    illustration: ART('a paper empty corridor during break time, a child walking slowly on the right side while a teacher door is closed in the background', '아무도 안 볼 때', [
      { motif: 'house', x: 110, y: 214, color: 'peach' }, { motif: 'cloud', x: 300, y: 64 }, { motif: 'tree', x: 390, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"쉬는 시간에 선생님이 교실에 안 계실 때 복도를 뛰는 친구를 본 적이 있나요?" 학생들의 경험을 이름 없이 듣는다. "선생님이 볼 때만 약속을 지키면 될까요?"라고 묻고 손을 들게 한다(선생님이 볼 때만 지키면 된다는 생각). 약속은 혼나지 않으려고가 아니라 나와 친구를 지키려고 있다는 것을 짚는다. 시연 단추로 마음 카드가 상황에 이어지는 모습을 보여 준다.',
        student: '선생님이 안 계실 때 약속을 지킨 적이 있는지 떠올려 봐요.',
        demo: { tool: 'emotion', options: { cards: ['뿌듯함', '걱정'], slots: [{ id: 's1', label: '아무도 안 볼 때 줄을 섰어요' }, { id: 's2', label: '복도를 뛰다 친구와 부딪힐 뻔했어요' }], shuffle: false }, sequence: [{ match: { s1: '뿌듯함', s2: '걱정' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 아무도 안 볼 때 어떻게 할까', minutes: 14, tool: 'emotion',
            teacher: '"하준이는 어떻게 하면 좋을까요?" 보기를 하나씩 읽고 그렇게 했을 때 어떤 일이 생길지 떠올리게 한다. 선생님이 보지 않아도 다치는 일은 똑같이 생긴다는 것을 짚는다. 결과를 본 뒤 "그때 하준이의 마음은?"을 묻는다.',
            task: '이야기를 읽고 아무도 안 볼 때 약속을 지키는 행동을 고르고, 그때의 마음을 이어요.',
            levels: { easy: { steps: 3 }, base: {}, challenge: {} },
            items: [
              { prompt: '쉬는 시간, 선생님이 안 계세요. 하준이는 화장실에 빨리 가고 싶어요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '하준', situation: '선생님이 교무실에 가셨고, 하준이는 화장실에 빨리 가고 싶어요.', choices: [
                { id: 'walk', text: '복도 오른쪽으로 걸어가요', result: '친구와 부딪히지 않고 화장실에 잘 다녀왔어요.', mood: '편안함' },
                { id: 'run', text: '아무도 안 보니 뛰어가요', result: '모퉁이에서 친구와 부딪혀 둘 다 넘어졌어요.', mood: '속상함', why: '선생님이 안 봐도 뛰면 부딪히는 일은 똑같이 생겨요.' }] }, target: { choice: 'walk' }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { choices: [
                  { id: 'walk', text: '복도 오른쪽으로 걸어가요', result: '친구와 부딪히지 않고 화장실에 잘 다녀왔어요.', mood: '편안함' },
                  { id: 'run', text: '아무도 안 보니 뛰어가요', result: '모퉁이에서 친구와 부딪혀 둘 다 넘어졌어요.', mood: '속상함', why: '선생님이 안 봐도 뛰면 부딪히는 일은 똑같이 생겨요.' },
                  { id: 'slide', text: '실내화로 미끄럼 타며 가요', result: '미끄러져 엉덩방아를 찧었어요.', mood: '속상함', why: '복도에서 미끄럼을 타면 넘어질 수 있어요.' }] } } } },
              { prompt: '선생님이 안 계실 때 서아는 짝의 색연필이 쓰고 싶어요. 짝은 화장실에 갔어요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '서아', situation: '짝이 자리에 없고, 선생님도 안 계세요. 짝의 새 색연필이 책상 위에 있어요.', choices: [
                { id: 'wait', text: '짝이 오면 "빌려줄래?" 하고 물어봐요', result: '짝이 웃으며 빌려주었어요.', mood: '고마움' },
                { id: 'take', text: '아무도 안 보니 그냥 써요', result: '짝이 돌아와 깜짝 놀라고 속상해했어요.', mood: '걱정', why: '물어보지 않고 쓰면 짝의 마음은 어떨까요?' }] }, target: { choice: 'wait' }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { choices: [
                  { id: 'wait', text: '짝이 오면 "빌려줄래?" 하고 물어봐요', result: '짝이 웃으며 빌려주었어요.', mood: '고마움' },
                  { id: 'take', text: '아무도 안 보니 그냥 써요', result: '짝이 돌아와 깜짝 놀라고 속상해했어요.', mood: '걱정', why: '물어보지 않고 쓰면 짝의 마음은 어떨까요?' },
                  { id: 'hide', text: '내 필통에 넣어 두어요', result: '짝이 색연필을 찾느라 울었어요.', mood: '속상함', why: '친구 물건을 내 필통에 넣으면 친구는 어떻게 될까요?' }] } } } },
              { prompt: '아무도 안 볼 때 약속을 지킨 일과 그때의 마음을 이어 보세요.', toolOptions: { cards: ['뿌듯함', '편안함', '고마움'], slots: [{ id: 'e1', label: '혼자서도 줄을 바르게 섰어요' }, { id: 'e2', label: '천천히 걸어서 안 다쳤어요' }, { id: 'e3', label: '짝이 물어봐 줘서 기분이 좋았어요' }] },
                target: { match: { e1: '뿌듯함', e2: '편안함', e3: '고마움' } }, difficulty: 0.15,
                hints: ['스스로 해낸 일, 무사한 일, 남이 해 준 일에 따라 마음이 달라요.', '흔들리는 카드의 마음이 그 일을 겪은 사람의 마음과 같은지 생각해요.', '혼자 줄서기는 뿌듯함, 안 다침은 편안함, 짝이 물어봐 줌은 고마움이에요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 약속을 지키는 까닭 찾기', minutes: 12, tool: 'mindmap',
            teacher: '"약속은 왜 지킬까요?" 혼나지 않으려고, 칭찬받으려고 같은 대답이 나오면 받아 주고, "그럼 아무도 안 보면?"이라고 되묻는다. 나와 친구가 안전하고 편하게 지내려고 지킨다는 것을 짚는다. 문항을 마친 뒤 쉬는 시간에 실제로 약속을 지키는지 스스로 살펴보자고 한다.',
            task: '약속을 지키는 까닭을 나누고, 누가 보지 않아도 지킬 행동을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '약속을 지키는 까닭 카드를 나누어 보세요.', toolOptions: { topic: '약속을 지키는 까닭', slots: ['진짜 까닭', '아쉬운 까닭'], cards: ['내가 다치지 않으려고', '친구가 편하게 지내려고', '선생님한테 안 혼나려고', '누가 볼 때만 칭찬받으려고'] },
                target: { sort: { '진짜 까닭': ['내가 다치지 않으려고', '친구가 편하게 지내려고'], '아쉬운 까닭': ['선생님한테 안 혼나려고', '누가 볼 때만 칭찬받으려고'] } }, difficulty: 0.2,
                hints: ['아무도 안 볼 때에도 그 까닭이 남아 있는지 생각해요.', '흔들리는 카드는 선생님이 안 계시면 사라지는 까닭인가요?', '다치지 않기와 친구가 편하기는 늘 남아 있는 진짜 까닭이에요.'] },
              { prompt: '선생님이 안 계실 때도 지킬 행동만 골라 보세요.', toolOptions: { mode: 'pick', basket: '언제나 지켜요', cards: ['복도에서 걸어요', '차례를 기다려요', '선생님이 오시면 그때 줄을 서요', '아무도 없으면 새치기해요'] },
                target: { pick: ['복도에서 걸어요', '차례를 기다려요'] }, difficulty: 0.15,
                predict: { q: '선생님이 안 계시면 약속을 안 지켜도 될까요?', options: ['안 지켜도 돼요', '언제나 지켜요'], answer: 1 },
                conclude: '약속은 누가 보든 안 보든 나와 친구를 지키려고 있어요.',
                levels: { challenge: { toolOptions: { cards: ['복도에서 걸어요', '차례를 기다려요', '선생님이 오시면 그때 줄을 서요', '아무도 없으면 새치기해요', '혼날 것 같을 때만 조용히 해요'] } } } },
              { prompt: '약속을 어긴 친구에게 해 줄 말을 이어 보세요.', toolOptions: { mode: 'match', topic: '친구에게', slots: [{ id: 'run', label: '복도를 뛰는 친구' }, { id: 'cut', label: '줄에 끼어드는 친구' }], cards: ['"부딪힐 수 있으니 걷자"', '"우리 뒤에 서 줄래?"'] },
                target: { match: { run: '"부딪힐 수 있으니 걷자"', cut: '"우리 뒤에 서 줄래?"' } }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"약속을 지키는 진짜 까닭은 무엇이었나요?" 두세 명이 말한다. 다음 쉬는 시간에 선생님이 교실 밖에 있어도 약속을 지켜 보자고 하고, 다음 시간에 스스로 어땠는지 돌아본다고 예고한다. 친구에게 해 줄 말은 놀리는 말이 아니라 돕는 말이라는 것을 다시 짚는다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'branch', who: '민지', situation: '선생님이 안 계신 사이 급식 줄이 길어요.', choices: [
            { id: 'wait', text: '차례를 기다려요', result: '모두 차례대로 급식을 받았어요.', mood: '편안함' },
            { id: 'cut', text: '앞으로 몰래 끼어들어요', result: '뒤의 친구들이 속상해했어요.', mood: '걱정', why: '끼어들면 기다리던 친구의 마음은 어떨까요?' }] }, prompt: '아무도 안 볼 때 민지는 어떻게 할까요?', target: { choice: 'wait' }, difficulty: 0.05 },
          { type: 'choice', prompt: '약속은 언제 지킬까요?', options: ['선생님이 볼 때만', '누가 보든 안 보든 언제나'], answer: 1, difficulty: 0.1, explain: '약속은 나와 친구를 지키려고 있어서 언제나 지켜요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '아무도 안 볼 때도',
      items: [
        { type: 'choice', prompt: '선생님이 안 계실 때 하준이가 할 행동에 ○ 하세요.', options: ['복도 오른쪽으로 걸어가요', '아무도 안 보니 뛰어가요'], answer: '복도 오른쪽으로 걸어가요' },
        { type: 'check', prompt: '약속을 지키는 진짜 까닭에 모두 ✓ 하세요.', options: ['내가 다치지 않으려고', '선생님한테 안 혼나려고', '친구가 편하게 지내려고'] },
        { type: 'short', prompt: '아무도 안 볼 때 내가 지킨 약속을 쓰세요.' },
        { type: 'draw', prompt: '아무도 안 볼 때도 약속을 지키는 나를 그려 보세요.' },
      ],
      easy: {
        note: '선생님이 안 계셔도 다치는 일은 똑같아요.',
        items: [
          { type: 'choice', prompt: '약속은 언제 지킬까요? ○ 하세요.', options: ['언제나', '선생님이 볼 때만'], answer: '언제나' },
          { type: 'choice', prompt: '친구 색연필을 쓰고 싶을 때 ○ 하세요.', options: ['물어보고 써요', '그냥 써요'], answer: '물어보고 써요' },
          { type: 'draw', prompt: '약속을 지키는 나를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '고르기가 두 가지이고, 마음 크기는 세 칸이에요. 맞게 놓으면 초록 테두리가 생겨요.',
      base: '보기 두 가지 가운데 고르고 까닭 카드를 나누어요.',
      challenge: '함정 보기가 하나 더 있고, 함정 행동 카드가 더 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 약속은 선생님이 볼 때만 지키면 된다고 여긴다(핵심 오개념) → "선생님이 안 봐도 부딪히면 아플까요?"로 되묻는다. ② 혼나지 않으려고 지킨다는 대답을 부끄러워한다 → 그 마음도 받아 주고, 더 좋은 까닭을 함께 찾는다. ③ 약속을 어긴 친구를 고자질하는 것으로 여긴다 → 돕는 말로 알려 주는 것과 놀리는 것을 구별한다. 실제 친구의 이름이나 사건을 들지 않는다.',
  }));

  lessons.push(L(32, {
    title: '우리 반 약속판을 꾸미고 지킬 때를 정하기',
    objective: '우리 반이 정한 약속을 약속판에 그림으로 꾸미고, 하루 가운데 그 약속을 지킬 때를 짝지어 말할 수 있다.',
    illustration: ART('a paper classroom promise board decorated with a big walking footprint arrow and a raised hand, children adding paper stars around it', '우리 반 약속판', [
      { motif: 'star', x: 120, y: 84, s: 0.5 }, { motif: 'house', x: 380, y: 214, color: 'buttercup' }, { motif: 'flower', x: 250, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"30차시에 정한 우리 반 약속 두 가지, 기억나나요?" 함께 소리 내어 말한다. "지난 쉬는 시간에 선생님이 없을 때도 지켰나요?" 스스로 돌아보게 한다. 오늘은 약속판을 꾸며 교실 앞에 붙이고, 하루 가운데 약속을 지킬 때를 정한다고 안내한다. 시연 단추로 약속과 때가 이어지는 모습을 보여 준다.',
        student: '지난 쉬는 시간에 내가 지킨 약속을 하나 말해 봐요.',
        demo: { tool: 'timeline', options: { cards: [{ id: 'm', text: '아침: 실내화 갈아신기', motif: 'sun' }, { id: 'b', text: '쉬는 시간: 복도에서 걷기', motif: 'house' }], axis: ['아침', '오후'], shuffle: false }, sequence: [{ order: ['m', 'b'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 약속판 그림 꾸미기', minutes: 13, tool: 'collage',
            teacher: '"글을 못 읽는 동생이 봐도 알 수 있게 그림으로 꾸며요." 복도 약속은 화살표, 교실 약속은 손 그림처럼 한눈에 보이는 모양을 고르게 한다. 화면 약속판을 꾸민 뒤 모둠별로 큰 종이 약속판에 같은 그림을 그려 교실 앞에 붙인다.',
            task: '약속이 한눈에 보이게 약속판을 꾸미고, 모둠 약속판을 그려 붙여요.',
            levels: SCENE_LV,
            items: [
              { prompt: '"복도에서는 오른쪽으로 걸어요" 약속판이에요. 파랑 세모(화살표 끝) 하나와 노랑 네모 길 두 개 이상을 붙여 보세요.', target: { has: [{ shape: 'triangle', color: '파랑', n: 1 }, { shape: 'square', color: '노랑', min: 2 }] }, difficulty: 0.1,
                levels: { challenge: { prompt: '"복도에서는 오른쪽으로 걸어요" 약속판이에요. 파랑 세모 하나, 노랑 네모 길 셋, 빨강 하트 하나(친구를 아끼는 마음)를 붙여 보세요.', target: { has: [{ shape: 'triangle', color: '파랑', n: 1 }, { shape: 'square', color: '노랑', n: 3 }, { shape: 'heart', color: '빨강', n: 1 }] } } } },
              { prompt: '"손을 들고 말해요" 약속판을 조각 세 개 넘게 붙여 꾸미고 점검해 보세요.', target: { selfCheck: ['그림만 보아도 약속이 무엇인지 알 수 있어요', '가장 중요한 모양이 크게 있어요', '짝이 약속을 맞혔어요'], minPieces: 3 }, difficulty: 0.1 },
              { prompt: '모둠 약속판을 그려 교실 앞에 붙였으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 하루 가운데 약속을 지킬 때 정하기', minutes: 13, tool: 'timeline',
            teacher: '"복도 약속은 하루 가운데 언제 지킬까요?" 아침에 교실에 올 때, 쉬는 시간, 급식 가는 길, 집에 갈 때처럼 복도를 지나는 때를 떠올리게 한다. 띠 왼쪽이 아침, 오른쪽이 집에 갈 때라는 것을 짚는다.',
            task: '학교의 하루 가운데 약속을 지키는 때를 차례대로 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '학교의 하루에서 복도 약속을 지키는 때를 차례대로 놓아 보세요.', toolOptions: { cards: [{ id: 'come', text: '아침에 교실로 갈 때', motif: 'sun' }, { id: 'break', text: '첫 쉬는 시간 화장실 갈 때', motif: 'house' }, { id: 'lunch', text: '점심 먹으러 급식실 갈 때', motif: 'flower' }, { id: 'home', text: '집에 가려고 신발장 갈 때', motif: 'tree' }], axis: ['아침', '집에 갈 때'] },
                target: { order: ['come', 'break', 'lunch', 'home'] }, difficulty: 0.15,
                hints: ['카드 속 때를 알려 주는 말(아침, 첫 쉬는 시간, 점심, 집에 갈 때)을 찾아요.', '흔들리는 카드의 때가 앞 카드보다 나중인지 생각해요.', '아침 → 첫 쉬는 시간 → 점심 → 집에 갈 때 차례예요.'],
                levels: { easy: { prompt: '학교의 하루에서 복도 약속을 지키는 때를 차례대로 세 장 놓아 보세요.', toolOptions: { cards: [{ id: 'come', text: '아침에 교실로 갈 때', motif: 'sun' }, { id: 'lunch', text: '점심 먹으러 급식실 갈 때', motif: 'flower' }, { id: 'home', text: '집에 가려고 신발장 갈 때', motif: 'tree' }] }, target: { order: ['come', 'lunch', 'home'] } },
                  challenge: { prompt: '학교의 하루에서 복도 약속을 지키는 때를 차례대로 놓아 보세요. 복도를 지나지 않는 때는 빼요.', toolOptions: { cards: [{ id: 'come', text: '아침에 교실로 갈 때', motif: 'sun' }, { id: 'break', text: '첫 쉬는 시간 화장실 갈 때', motif: 'house' }, { id: 'lunch', text: '점심 먹으러 급식실 갈 때', motif: 'flower' }, { id: 'home', text: '집에 가려고 신발장 갈 때', motif: 'tree' }, { id: 'seat', text: '자리에 앉아 받아쓰기할 때', motif: 'leaf' }], slots: 4 } } } },
              { prompt: '교실 약속(손 들고 말하기)을 지키는 때를 차례대로 놓아 보세요.', toolOptions: { cards: [{ id: 'morning', text: '아침 모임에서 발표할 때', motif: 'sun' }, { id: 'math', text: '수학 시간에 답을 말할 때', motif: 'star' }, { id: 'end', text: '마침 모임에서 하루를 말할 때', motif: 'moon' }], axis: ['아침', '집에 갈 때'] },
                target: { order: ['morning', 'math', 'end'] }, difficulty: 0.1,
                hints: ['모임과 수업의 때(아침, 수업 시간, 마칠 때)를 떠올려요.', '흔들리는 카드가 하루의 처음·가운데·끝 가운데 어디인지 봐요.', '아침 모임 → 수학 시간 → 마침 모임 차례예요.'] },
              { prompt: '서아가 하루 동안 약속을 지킨 일과 그때를 이어 보세요.', toolOptions: { mode: 'match', slots: [{ id: 'm1', label: '아침' }, { id: 'm2', label: '점심' }, { id: 'm3', label: '집에 갈 때' }], cards: ['실내화로 갈아신고 교실에 갔어요', '급식실까지 오른쪽으로 걸었어요', '신발장 앞에서 차례를 기다렸어요'] },
                target: { match: { m1: '실내화로 갈아신고 교실에 갔어요', m2: '급식실까지 오른쪽으로 걸었어요', m3: '신발장 앞에서 차례를 기다렸어요' } }, difficulty: 0.15,
                hints: ['카드 속 곳(교실, 급식실, 신발장)이 하루 가운데 언제 가는 곳인지 떠올려요.', '흔들리는 카드에서 무엇을 했는지(갈아신고 교실로, 급식실로, 신발장 앞 차례) 다시 읽어요.', '아침은 실내화, 점심은 급식실, 집에 갈 때는 신발장 차례예요.'] },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"교실 앞에 붙인 약속판을 보며 함께 읽어 볼까요?" 모둠마다 약속판을 소개한다. 다음 시간부터는 내 물건 정리와 복도 오른쪽 걷기를 직접 해 보며 익힌다고 예고한다. 출구 1번에서 순서를 바꾼 학생에게는 하루 시간표를 함께 보게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'timeline', options: { cards: [{ id: 'a', text: '아침에 교실로 갈 때', motif: 'sun' }, { id: 'l', text: '점심 먹으러 갈 때', motif: 'flower' }, { id: 'h', text: '집에 갈 때', motif: 'tree' }], axis: ['아침', '집에 갈 때'] }, prompt: '복도 약속을 지키는 때를 차례대로 놓아 보세요.', target: { order: ['a', 'l', 'h'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '약속판을 그림으로 꾸미는 까닭은?', options: ['한눈에 알아볼 수 있게', '예쁘기만 하게'], answer: 0, difficulty: 0.1, explain: '그림으로 꾸미면 글을 몰라도 약속을 알 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '우리 반 약속판',
      items: [
        { type: 'draw', prompt: '우리 반 약속 하나를 그림으로 나타내세요.' },
        { type: 'table', prompt: '약속을 지키는 때를 쓰세요.', columns: ['약속', '지키는 때'], rows: 2 },
        { type: 'choice', prompt: '복도 약속을 지키는 때에 ○ 하세요.', options: ['급식실 갈 때', '자리에 앉아 받아쓰기할 때'], answer: '급식실 갈 때' },
        { type: 'short', prompt: '오늘 내가 약속을 지킨 때를 한 가지 쓰세요.' },
      ],
      easy: {
        note: '약속판 그림을 보고 따라 그려도 돼요.',
        items: [
          { type: 'draw', prompt: '복도 약속을 그림으로 그리세요.' },
          { type: 'choice', prompt: '복도를 지나는 때에 ○ 하세요.', options: ['점심 먹으러 갈 때', '자리에 앉아 있을 때'], answer: '점심 먹으러 갈 때' },
          { type: 'blank', prompt: '나는 ________ 때 약속을 지켰어요.' },
        ],
      },
    },
    differentiation: {
      easy: '조각 색과 모양이 적어요. 하루 카드는 세 장이고 맞게 놓으면 초록 테두리가 생겨요.',
      base: '약속판에 화살표와 길을 붙여요. 하루 카드는 네 장이에요.',
      challenge: '약속판에 길 셋과 하트를 정확히 붙이고, 복도를 지나지 않는 함정 카드를 빼요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 약속판을 꾸미는 데만 열중해 약속이 안 보인다 → 짝이 약속을 맞힐 수 있는지 점검하게 한다. ② 하루 가운데 복도를 지나는 때를 떠올리지 못한다 → 시간표를 보며 교실 밖으로 나가는 때를 찾는다. ③ 약속판을 붙인 뒤 다시 보지 않는다 → 아침 모임에서 약속판을 함께 읽는 것을 일과로 넣는다.',
  }));

  // ───────────────────────── 33~36차시: 내 물건 정리·복도 걷기·쉬는 시간·하교 정리(학교에서의 하루 — 바른 생활 실천) ─────────────────────────

  lessons.push(L(33, {
    title: '가방과 사물함을 정한 자리에 스스로 정리하기',
    objective: '가방과 사물함의 물건을 정한 자리에 넣는 차례를 말하고, 내 서랍과 사물함을 스스로 정리할 수 있다.',
    illustration: ART('a paper classroom with a row of small lockers, a child standing big books upright in a locker and a school bag hanging on a hook beside a desk', '내 물건은 내가', [
      { motif: 'house', x: 110, y: 214, color: 'sky' }, { motif: 'star', x: 330, y: 84, s: 0.5 }, { motif: 'tree', x: 390, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"오늘 아침 가방은 누가 쌌나요? 사물함은 누가 정리하나요?" 손을 들게 한다. "정리는 엄마나 선생님이 해 주는 일일까요?"라고 묻고 생각을 듣는다(정리는 어른이 대신 해 주는 일이라는 생각). "내 물건이 어디 있는지 가장 잘 아는 사람은 나예요"라고 짚는다. 시연 단추로 정리 차례 카드가 놓이는 모습을 보여 준다.',
        student: '내 사물함 안에 무엇이 들어 있는지 하나 말해 봐요.',
        demo: { tool: 'story', options: { cards: [{ id: 'out', text: '물건을 모두 꺼내요', motif: 'house' }, { id: 'in', text: '자리에 다시 넣어요', motif: 'star' }], slots: ['먼저', '다음'], shuffle: false }, sequence: [{ order: ['out', 'in'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 정리하는 차례 놓고 직접 정리하기', minutes: 14, tool: 'story',
            teacher: '"사물함에 큰 책을 나중에 넣으면 어떻게 될까요?" 작은 물건 위에 큰 책이 쓰러지는 모습을 실제 사물함에서 보여 준다. 차례를 다 놓으면 모두 자기 서랍과 사물함을 차례대로 정리하고, 짝이 "책이 서 있나요? 문이 닫히나요?"를 살펴 준다(6분).',
            task: '가방과 사물함을 정리하는 차례를 놓고, 내 서랍과 사물함을 직접 정리해요.',
            levels: CARD_LV,
            items: [
              { prompt: '서아네 반 약속이에요. "꺼낸 물건을 서랍에 먼저 넣고, 가방은 맨 끝에 걸어요." 아침 가방 정리를 차례대로 놓아 보세요.', toolOptions: { cards: [{ id: 'out', text: '필통과 책을 꺼내요', motif: 'star' }, { id: 'drawer', text: '서랍에 넣어요', motif: 'house' }, { id: 'hang', text: '가방을 고리에 걸어요', motif: 'tree' }], slots: ['처음', '가운데', '끝'] },
                target: { order: ['out', 'drawer', 'hang'] }, difficulty: 0.1,
                hints: ['가방에서 물건을 꺼내야 넣을 수 있어요. 반 약속을 다시 읽어요.', '흔들리는 카드는 약속에서 "먼저"인가요, "맨 끝"인가요?', '꺼내요 → 서랍에 넣어요 → 가방을 걸어요 차례예요.'],
                levels: { challenge: { prompt: '서아네 반 약속이에요. "꺼낸 물건을 서랍에 먼저 넣고, 가방은 맨 끝에 걸어요." 차례대로 놓고, 스스로 하지 않는 카드는 빼요.', toolOptions: { cards: [{ id: 'out', text: '필통과 책을 꺼내요', motif: 'star' }, { id: 'drawer', text: '서랍에 넣어요', motif: 'house' }, { id: 'hang', text: '가방을 고리에 걸어요', motif: 'tree' }, { id: 'mom', text: '엄마가 꺼내 줄 때까지 기다려요', motif: 'cloud' }] } } } },
              { prompt: '사물함은 큰 것을 먼저, 작은 것을 나중에 넣어요. 준호의 사물함 정리를 차례대로 놓아 보세요.', toolOptions: { cards: [{ id: 'all', text: '물건을 모두 꺼내요', motif: 'house' }, { id: 'big', text: '큰 책을 세워 넣어요', motif: 'star' }, { id: 'small', text: '크레파스를 바구니에 담아요', motif: 'flower' }, { id: 'shut', text: '사물함 문을 닫아요', motif: 'leaf' }], slots: ['처음', '둘째', '셋째', '끝'] },
                target: { order: ['all', 'big', 'small', 'shut'] }, difficulty: 0.15,
                hints: ['다 꺼낸 뒤 큰 것 → 작은 것 차례로 넣고, 다 넣어야 문을 닫아요.', '흔들리는 카드의 물건이 큰가요, 작은가요?', '모두 꺼내요 → 큰 책 → 크레파스 → 문 닫기 차례예요.'],
                levels: { easy: { prompt: '사물함은 큰 것을 먼저, 작은 것을 나중에 넣어요. 준호의 사물함 정리를 세 장 차례대로 놓아 보세요.', toolOptions: { cards: [{ id: 'big', text: '큰 책을 세워 넣어요', motif: 'star' }, { id: 'small', text: '크레파스를 바구니에 담아요', motif: 'flower' }, { id: 'shut', text: '사물함 문을 닫아요', motif: 'leaf' }], slots: ['처음', '가운데', '끝'] }, target: { order: ['big', 'small', 'shut'] } } } },
              { prompt: '내 서랍과 사물함을 차례대로 정리하고 짝이 살펴 주었으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 내가 하는 정리와 도움이 필요한 정리', minutes: 12, tool: 'mindmap',
            teacher: '"이 가운데 1학년인 내가 할 수 있는 정리는?" 거의 모든 정리는 스스로 할 수 있고, 높은 곳이나 깨진 물건처럼 다칠 수 있는 일만 어른의 도움을 받는다는 것을 짚는다. 어질러진 모습을 고치는 방법을 이은 뒤 "고치는 데 몇 초 걸릴까요?" 하고 함께 세어 본다.',
            task: '스스로 할 정리와 도움이 필요한 정리를 나누고, 어질러진 모습을 고치는 방법을 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '정리 카드를 내가 하는 것과 어른의 도움이 필요한 것으로 나누어 보세요.', toolOptions: { topic: '교실 정리', slots: ['내가 해요', '어른이 도와요'], cards: ['가방을 고리에 걸어요', '사물함 책을 세워요', '높은 선반 상자를 내려요', '깨진 컵 조각을 치워요'] },
                target: { sort: { '내가 해요': ['가방을 고리에 걸어요', '사물함 책을 세워요'], '어른이 도와요': ['높은 선반 상자를 내려요', '깨진 컵 조각을 치워요'] } }, difficulty: 0.15,
                hints: ['손이 닿고 다칠 일이 없으면 스스로 해요.', '흔들리는 카드는 손이 닿지 않거나 다칠 수 있는 일인가요?', '가방 걸기·책 세우기는 내가, 높은 선반·깨진 컵은 어른이 도와요.'],
                levels: { challenge: { prompt: '정리 카드를 나누어 보세요. 여섯 장이에요.', toolOptions: { cards: ['가방을 고리에 걸어요', '사물함 책을 세워요', '서랍 속 쓰레기를 버려요', '높은 선반 상자를 내려요', '깨진 컵 조각을 치워요', '무거운 책장을 옮겨요'] }, target: { sort: { '내가 해요': ['가방을 고리에 걸어요', '사물함 책을 세워요', '서랍 속 쓰레기를 버려요'], '어른이 도와요': ['높은 선반 상자를 내려요', '깨진 컵 조각을 치워요', '무거운 책장을 옮겨요'] } } } } },
              { prompt: '어질러진 모습과 고치는 방법을 이어 보세요.', toolOptions: { mode: 'match', topic: '이렇게 고쳐요', slots: [{ id: 'dust', label: '서랍에 지우개 가루가 있어요' }, { id: 'fall', label: '사물함 책이 쓰러졌어요' }, { id: 'floor', label: '가방이 바닥에 있어요' }], cards: ['휴지로 모아 버려요', '큰 책부터 세워요', '고리에 걸어요'] },
                target: { match: { dust: '휴지로 모아 버려요', fall: '큰 책부터 세워요', floor: '고리에 걸어요' } }, difficulty: 0.1,
                hints: ['어질러진 물건(가루·책·가방)이 원래 있어야 할 모습을 떠올려요.', '흔들리는 카드가 그 물건을 고치는 방법인지 봐요.', '가루는 휴지로, 책은 세우기, 가방은 고리예요.'] },
              { prompt: '스스로 정리하는 마음이 담긴 말만 골라 보세요.', toolOptions: { mode: 'pick', basket: '내가 할게요', cards: ['내 물건은 내가 챙길게', '쓴 건 제자리에 둘게', '엄마가 다 싸 줄 거야', '선생님이 치워 주세요'] },
                target: { pick: ['내 물건은 내가 챙길게', '쓴 건 제자리에 둘게'] }, difficulty: 0.1,
                predict: { q: '사물함 정리는 누가 하는 일일까요?', options: ['어른이 해요', '내가 해요'], answer: 1 },
                conclude: '내 물건이 어디 있는지 가장 잘 아는 나는 내 물건을 스스로 정리할 수 있어요.' },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"정리한 사물함을 열어 보세요. 무엇이 달라졌나요?" 두세 명이 말한다. 내일 아침부터 가방 정리를 스스로 하고, 잘한 날에 학교생활 딱지판에 붙임 딱지를 붙인다고 안내한다(37차시에 함께 센다). 출구 1번을 틀린 학생은 실제 서랍 앞에서 다시 해 보게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { cards: [{ id: 'out', text: '서랍 물건을 모두 꺼내요', motif: 'house' }, { id: 'trash', text: '쓰레기를 골라 버려요', motif: 'leaf' }, { id: 'back', text: '가지런히 다시 넣어요', motif: 'star' }], slots: ['처음', '가운데', '끝'] }, prompt: '책상 서랍을 정리하는 차례대로 놓아 보세요.', target: { order: ['out', 'trash', 'back'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '내 사물함 정리는 누가 할까요?', options: ['엄마나 선생님', '나'], answer: 1, difficulty: 0.05, explain: '내 물건은 내가 가장 잘 알아서 스스로 정리할 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '내 물건은 내가 정리해요',
      items: [
        { type: 'figure', wide: true, prompt: '사물함 정리 차례대로 1, 2, 3을 쓰세요.', tool: 'story', figures: [{ options: { cards: [{ id: 'shut', text: '사물함 문을 닫아요', motif: 'leaf' }, { id: 'big', text: '큰 책을 세워 넣어요', motif: 'star' }, { id: 'small', text: '크레파스를 바구니에 담아요', motif: 'flower' }], slots: ['', '', ''], shuffle: false }, caption: '' }], answer: '큰 책 → 크레파스 → 문 닫기' },
        { type: 'check', prompt: '내가 스스로 하는 정리에 모두 ✓ 하세요.', options: ['가방을 고리에 걸어요', '높은 선반 상자를 내려요', '사물함 책을 세워요'] },
        { type: 'table', prompt: '오늘 정리한 곳에 ○ 하세요.', columns: ['서랍', '사물함', '가방'], rows: 1 },
        { type: 'draw', prompt: '정리한 내 사물함을 그려 보세요.' },
      ],
      easy: {
        note: '큰 것을 먼저, 작은 것을 나중에 넣어요.',
        items: [
          { type: 'choice', prompt: '사물함에 먼저 넣을 것에 ○ 하세요.', options: ['큰 책', '크레파스'], answer: '큰 책' },
          { type: 'choice', prompt: '내 가방 정리는 누가 할까요?', options: ['나', '엄마'], answer: '나' },
          { type: 'draw', prompt: '정리한 내 서랍을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞게 놓으면 초록 테두리가 생겨요. 사물함 차례 카드는 세 장이에요.',
      base: '모두 놓고 확인해요. 사물함 차례 카드는 네 장이에요.',
      challenge: '스스로 하지 않는 함정 카드를 빼고, 정리 카드 여섯 장을 나누어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 정리는 어른이 대신 해 주는 일이라고 여긴다(핵심 오개념) → "내 물건이 어디 있는지 누가 가장 잘 알까요?"로 되묻는다. ② 사물함에 물건을 눕혀 쌓는다 → 큰 책을 책등이 보이게 세우는 모습을 직접 보여 준다. ③ 정리가 느린 학생을 짝이 대신 해 준다 → 짝은 말로만 도와준다고 미리 약속한다. 37차시에 쓸 학교생활 딱지판(가방 정리·복도 걷기·쉬는 시간 준비·하교 정리 네 줄)을 이 시간에 나누어 준다.',
  }));

  lessons.push(L(34, {
    title: '복도와 계단에서 오른쪽으로 걸어 도서실 다녀오기',
    objective: '줄을 서서 복도와 계단의 오른쪽으로 걸어 다른 교실에 가는 차례를 말하고, 뛰지 않고 그대로 걸을 수 있다.',
    illustration: ART('a paper school staircase with a handrail, a line of small children walking down on the right side holding the rail, a library door with books at the bottom', '오른쪽으로 걸어요', [
      { motif: 'house', x: 110, y: 214, color: 'lavender' }, { motif: 'star', x: 330, y: 84, s: 0.5 }, { motif: 'tree', x: 390, y: 214 }]),
    safety: ['계단은 난간을 잡고 한 칸씩 걸어요.', '앞 친구와 한 걸음 떨어져 걸어요.', '복도 걷기 연습 때 다른 반 수업을 방해하지 않게 작은 목소리로 말해요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"도서실은 몇 층에 있나요? 교실에서 도서실까지 어떤 길로 가나요?" 학교 안내도나 칠판 그림으로 길을 함께 짚는다. "계단에서 두 칸씩 뛰어 내려가면 어떻게 될까요?" 하고 묻는다. 오늘은 차례를 익힌 뒤 실제로 줄을 서서 도서실에 다녀온다고 안내한다. 시연 단추로 걷는 차례가 놓이는 모습을 보여 준다.',
        student: '교실에서 도서실까지 가는 길에 무엇이 있는지 말해 봐요.',
        demo: { tool: 'story', options: { cards: [{ id: 'line', text: '두 줄로 서요', motif: 'house' }, { id: 'walk', text: '오른쪽으로 걸어요', motif: 'tree' }], slots: ['먼저', '다음'], shuffle: false }, sequence: [{ order: ['line', 'walk'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 도서실 가는 차례 익히고 걸어 보기', minutes: 15, tool: 'story',
            teacher: '"도서실은 아래층이라 복도를 지나 계단을 내려가요." 차례를 놓은 뒤 계단 앞에서 할 일을 몸짓으로 해 본다(난간 잡는 손, 한 칸씩 내딛는 발). 문항을 마치면 모두 두 줄로 서서 실제로 도서실 앞까지 다녀온다(8분). 교사는 앞에, 짝 도우미는 맨 뒤에 선다.',
            task: '도서실 가는 차례와 계단에서 지킬 말을 익히고, 줄을 서서 실제로 다녀와요.',
            levels: CARD_LV,
            items: [
              { prompt: '도서실은 아래층이에요. 교실에서 나와 복도를 지나 계단을 내려가요. 가는 차례대로 놓아 보세요.', toolOptions: { cards: [{ id: 'line', text: '교실 앞에 두 줄로 서요', motif: 'house' }, { id: 'hall', text: '복도 오른쪽으로 걸어요', motif: 'tree' }, { id: 'stair', text: '난간 잡고 계단을 내려가요', motif: 'mountain' }, { id: 'wait', text: '도서실 앞에서 멈춰 기다려요', motif: 'star' }], slots: ['처음', '둘째', '셋째', '끝'] },
                target: { order: ['line', 'hall', 'stair', 'wait'] }, difficulty: 0.15,
                hints: ['교실 → 복도 → 계단 → 도서실, 걸어가는 길을 따라가요.', '흔들리는 카드의 곳(교실 앞·복도·계단·도서실 앞)이 길에서 어디쯤인지 봐요.', '줄 서기 → 복도 → 계단 → 도서실 앞 차례예요.'],
                levels: { easy: { prompt: '도서실은 아래층이에요. 가는 차례대로 세 장 놓아 보세요.', toolOptions: { cards: [{ id: 'line', text: '교실 앞에 두 줄로 서요', motif: 'house' }, { id: 'stair', text: '난간 잡고 계단을 내려가요', motif: 'mountain' }, { id: 'wait', text: '도서실 앞에서 멈춰 기다려요', motif: 'star' }], slots: ['처음', '가운데', '끝'] }, target: { order: ['line', 'stair', 'wait'] } },
                  challenge: { prompt: '도서실은 아래층이에요. 가는 차례대로 놓고, 위험한 카드는 빼요.', toolOptions: { cards: [{ id: 'line', text: '교실 앞에 두 줄로 서요', motif: 'house' }, { id: 'hall', text: '복도 오른쪽으로 걸어요', motif: 'tree' }, { id: 'stair', text: '난간 잡고 계단을 내려가요', motif: 'mountain' }, { id: 'wait', text: '도서실 앞에서 멈춰 기다려요', motif: 'star' }, { id: 'jump', text: '계단 두 칸씩 뛰어 내려가요', motif: 'cloud' }] } } } },
              { prompt: '계단에서 지킬 말을 말풍선에 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['난간', '한 칸씩', '두 칸씩'], slots: [{ id: 'b1', who: '도윤', motif: 'mountain', label: '계단에서는 ___을 잡아요.' }, { id: 'b2', who: '민지', motif: 'house', label: '계단은 ___ 내려가요.' }] },
                target: { fill: { b1: '난간', b2: '한 칸씩' } }, difficulty: 0.15,
                hints: ['계단에서 넘어지지 않게 손과 발이 할 일을 떠올려요.', '흔들리는 말풍선을 소리 내어 읽고 안전한 말인지 들어 봐요.', '손은 "난간", 발은 "한 칸씩"이에요.'],
                levels: { easy: { prompt: '계단에서 지킬 말을 말풍선에 넣어 보세요.', toolOptions: { cards: ['한 칸씩', '두 칸씩'], slots: [{ id: 'b2', who: '민지', motif: 'house', label: '계단은 ___ 내려가요.' }] }, target: { fill: { b2: '한 칸씩' } } } } },
              { prompt: '줄을 서서 복도와 계단 오른쪽으로 도서실에 다녀왔으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 복도에서 이럴 땐 어떻게 할까', minutes: 12, tool: 'emotion',
            teacher: '다녀온 길에서 있었던 일을 떠올리며 보기를 하나씩 읽는다. "앞 친구가 느리게 걸으면 앞질러도 될까요?" 결과를 본 뒤 그때의 마음을 묻는다. 맞은편에서 오는 친구와 부딪히지 않는 까닭이 오른쪽으로 걷기 때문이라는 것을 다시 짚는다.',
            task: '복도와 계단에서 생길 수 있는 일을 읽고 안전한 행동을 골라요.',
            levels: { easy: { steps: 3 }, base: {}, challenge: {} },
            items: [
              { prompt: '복도 맞은편에서 다른 반 줄이 걸어와요. 준호는 어떻게 할까요?', toolOptions: { mode: 'branch', who: '준호', situation: '도서실 가는 복도, 맞은편에서 다른 반 친구들이 줄을 서서 와요.', choices: [
                { id: 'right', text: '내 오른쪽으로 붙어 걸어요', result: '두 줄이 부딪히지 않고 지나갔어요.', mood: '편안함' },
                { id: 'middle', text: '복도 가운데로 걸어요', result: '맞은편 친구와 어깨가 부딪혔어요.', mood: '놀람', why: '가운데로 걸으면 맞은편 줄과 어떻게 될까요?' }] }, target: { choice: 'right' }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { choices: [
                  { id: 'right', text: '내 오른쪽으로 붙어 걸어요', result: '두 줄이 부딪히지 않고 지나갔어요.', mood: '편안함' },
                  { id: 'middle', text: '복도 가운데로 걸어요', result: '맞은편 친구와 어깨가 부딪혔어요.', mood: '놀람', why: '가운데로 걸으면 맞은편 줄과 어떻게 될까요?' },
                  { id: 'dash', text: '부딪히기 전에 뛰어서 지나가요', result: '뛰다가 모퉁이에서 미끄러졌어요.', mood: '속상함', why: '빨리 지나가려고 뛰면 어떤 일이 생길까요?' }] } } } },
              { prompt: '앞에 선 친구가 천천히 걸어요. 서아는 어떻게 할까요?', toolOptions: { mode: 'branch', who: '서아', situation: '계단을 내려가는데 앞 친구가 난간을 잡고 천천히 걸어요.', choices: [
                { id: 'keep', text: '한 걸음 떨어져 따라가요', result: '모두 안전하게 계단을 내려왔어요.', mood: '편안함' },
                { id: 'pass', text: '옆으로 앞질러 내려가요', result: '앞 친구와 부딪혀 둘 다 휘청했어요.', mood: '무서움', why: '계단에서 앞지르면 앞 친구는 어떻게 될까요?' }] }, target: { choice: 'keep' }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { choices: [
                  { id: 'keep', text: '한 걸음 떨어져 따라가요', result: '모두 안전하게 계단을 내려왔어요.', mood: '편안함' },
                  { id: 'pass', text: '옆으로 앞질러 내려가요', result: '앞 친구와 부딪혀 둘 다 휘청했어요.', mood: '무서움', why: '계단에서 앞지르면 앞 친구는 어떻게 될까요?' },
                  { id: 'push', text: '"빨리 가" 하고 등을 밀어요', result: '앞 친구가 계단에서 넘어질 뻔했어요.', mood: '놀람', why: '계단에서 등을 밀면 친구가 어떻게 될까요?' }] } } } },
              { prompt: '복도와 계단에서 안전한 행동만 골라 보세요.', toolOptions: { mode: 'pick', basket: '안전하게 걸어요', cards: ['난간을 잡아요', '앞 친구와 떨어져 걸어요', '계단에서 술래잡기해요', '난간에 매달려요'] },
                target: { pick: ['난간을 잡아요', '앞 친구와 떨어져 걸어요'] }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['난간을 잡아요', '앞 친구와 떨어져 걸어요', '계단에서 술래잡기해요', '난간에 매달려요', '계단에 앉아 놀아요'] } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"도서실에 다녀올 때 우리 줄이 잘한 점은 무엇이었나요?" 두세 명이 말한다. 오늘부터 복도를 바르게 걸은 날에 딱지판 둘째 줄에 붙임 딱지를 붙인다고 안내한다. 출구 1번을 틀린 학생에게는 오늘 걸어간 길을 손가락으로 다시 그리게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { cards: [{ id: 'line', text: '두 줄로 서요', motif: 'house' }, { id: 'hall', text: '복도 오른쪽으로 걸어요', motif: 'tree' }, { id: 'wash', text: '급식실 앞에서 손을 씻어요', motif: 'flower' }], slots: ['처음', '가운데', '끝'] }, prompt: '급식실에 가는 차례대로 놓아 보세요.', target: { order: ['line', 'hall', 'wash'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '계단을 내려갈 때 바른 것은?', options: ['두 칸씩 뛰어요', '난간을 잡고 한 칸씩 걸어요'], answer: 1, difficulty: 0.05, explain: '난간을 잡고 한 칸씩 걸어야 넘어지지 않아요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '복도와 계단 걷기',
      items: [
        { type: 'choice', prompt: '복도에서 맞은편 줄이 오면 어떻게 할까요?', options: ['내 오른쪽으로 붙어 걸어요', '복도 가운데로 걸어요'], answer: '내 오른쪽으로 붙어 걸어요' },
        { type: 'blank', prompt: '계단에서는 ________을 잡고 ________ 내려가요.' },
        { type: 'check', prompt: '오늘 도서실에 다녀올 때 내가 지킨 것에 ✓ 하세요.', options: ['두 줄로 섰어요', '오른쪽으로 걸었어요', '난간을 잡았어요', '앞 친구와 떨어져 걸었어요'] },
        { type: 'draw', prompt: '계단을 안전하게 내려가는 나를 그려 보세요.' },
      ],
      easy: {
        note: '손은 난간, 발은 한 칸씩이에요.',
        items: [
          { type: 'choice', prompt: '계단에서 바른 것에 ○ 하세요.', options: ['난간을 잡아요', '뛰어 내려가요'], answer: '난간을 잡아요' },
          { type: 'choice', prompt: '복도에서는 어느 쪽으로 걸을까요?', options: ['오른쪽', '가운데'], answer: '오른쪽' },
          { type: 'draw', prompt: '복도를 걷는 나를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '차례 카드는 세 장이고 맞게 놓으면 초록 테두리가 생겨요. 말풍선은 하나예요.',
      base: '차례 카드 네 장과 말풍선 두 개를 채워요.',
      challenge: '위험한 함정 카드를 빼고, 보기 세 가지 가운데 안전한 행동을 골라요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 오른쪽과 왼쪽을 헷갈린다 → 밥 먹는 손(또는 오른손에 붙인 스티커) 쪽이 오른쪽이라고 정해 준다. 왼손잡이 학생을 위해 스티커로 짚는다. ② 계단에서 앞 친구를 앞지른다 → 한 걸음 거리를 손바닥 하나로 보여 준다. ③ 복도 연습이 놀이처럼 들뜬다 → 다녀오기 전에 "도서실 앞에서 멈춰 기다리기"를 먼저 약속한다. 학교마다 도서실 위치가 다르니 차례 카드를 우리 학교 길(위층·같은 층)에 맞게 말로 바꾸어 읽어 준다.',
  }));

  lessons.push(L(35, {
    title: '쉬는 시간에 할 일을 먼저 하고 놀기',
    objective: '쉬는 시간에 앞 시간 정리와 다음 시간 준비를 먼저 하고 화장실·놀이를 하는 차례를 정해, 스스로 그대로 할 수 있다.',
    illustration: ART('a paper classroom at break time, a child putting a math book away and taking out crayons for the next class while other children go to the restroom', '쉬는 시간', [
      { motif: 'sun', x: 120, y: 84, s: 0.6 }, { motif: 'house', x: 380, y: 214, color: 'mint' }, { motif: 'flower', x: 250, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"종이 울려 수업이 시작됐는데 책이 없어서 사물함까지 다녀온 적이 있나요?" 경험을 이름 없이 듣는다. "다음 시간 책은 누가 챙겨 줄까요?" 하고 물어 스스로 챙기는 일이라는 것을 짚는다(정리와 준비는 어른이 해 준다는 생각). 시연 단추로 쉬는 시간 차례가 띠에 놓이는 모습을 보여 준다.',
        student: '쉬는 시간에 내가 가장 먼저 하는 일을 말해 봐요.',
        demo: { tool: 'timeline', options: { cards: [{ id: 'ready', text: '다음 시간 책 꺼내기', motif: 'star' }, { id: 'play', text: '친구와 놀기', motif: 'sun' }], axis: ['쉬는 시간 시작', '종이 울려요'], shuffle: false }, sequence: [{ order: ['ready', 'play'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 쉬는 시간 차례 정하기', minutes: 13, tool: 'timeline',
            teacher: '"할 일을 먼저 하고 노는 것과, 놀고 나서 할 일을 하는 것은 무엇이 다를까요?" 종이 울린 뒤 허둥대는 모습을 몸짓으로 보여 준다. 띠 왼쪽이 쉬는 시간 시작, 오른쪽이 종이 울릴 때라는 것을 짚는다. 화장실과 놀이처럼 어느 것을 먼저 해도 되는 일은 같은 묶음에 놓으면 된다고 알려 준다.',
            task: '쉬는 시간과 점심시간에 할 일을 차례대로 띠에 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '우리 반 쉬는 시간 약속이에요. "책상 정리와 다음 시간 준비를 먼저 해요. 화장실과 놀이는 그다음이에요." 차례대로 놓아 보세요.', toolOptions: { cards: [{ id: 'put', text: '앞 시간 책을 넣어요', motif: 'house' }, { id: 'take', text: '다음 시간 책을 꺼내요', motif: 'star' }, { id: 'toilet', text: '화장실에 다녀와요', motif: 'leaf' }, { id: 'play', text: '친구와 놀아요', motif: 'sun' }, { id: 'sit', text: '종이 울리면 자리에 앉아요', motif: 'moon' }], axis: ['쉬는 시간 시작', '종이 울려요'] },
                target: { order: [['put', 'take'], ['toilet', 'play'], 'sit'] }, difficulty: 0.2,
                hints: ['할 일(정리·준비)과 하고 싶은 일(화장실·놀이), 종소리를 세 묶음으로 나누어 생각해요.', '흔들리는 카드는 할 일인가요, 하고 싶은 일인가요? 종소리 뒤에 하는 일인가요?', '책 넣기·꺼내기 → 화장실·놀이 → 자리에 앉기 차례예요. 묶음 안에서는 어느 것을 먼저 해도 돼요.'],
                levels: { easy: { prompt: '쉬는 시간 약속이에요. "다음 시간 준비를 먼저 하고 놀아요." 차례대로 세 장 놓아 보세요.', toolOptions: { cards: [{ id: 'take', text: '다음 시간 책을 꺼내요', motif: 'star' }, { id: 'play', text: '친구와 놀아요', motif: 'sun' }, { id: 'sit', text: '종이 울리면 자리에 앉아요', motif: 'moon' }] }, target: { order: ['take', 'play', 'sit'] } } } },
              { prompt: '점심을 먹은 뒤에도 할 일을 먼저 하고 놀아요. 차례대로 놓아 보세요.', toolOptions: { cards: [{ id: 'tray', text: '식판을 정리해요', motif: 'flower' }, { id: 'brush', text: '이를 닦아요', motif: 'star' }, { id: 'yard', text: '운동장에서 놀아요', motif: 'sun' }, { id: 'back', text: '종이 울리면 교실로 와요', motif: 'house' }], axis: ['점심 다 먹음', '종이 울려요'] },
                target: { order: ['tray', 'brush', 'yard', 'back'] }, difficulty: 0.15,
                hints: ['다 먹은 자리에서 먼저 할 일, 그다음 몸을 깨끗이 할 일, 그다음 놀이예요.', '흔들리는 카드는 할 일인가요, 놀이인가요?', '식판 → 이 닦기 → 운동장 → 교실로 차례예요.'],
                levels: { challenge: { prompt: '점심을 먹은 뒤에도 할 일을 먼저 하고 놀아요. 차례대로 놓고, 하면 안 되는 카드는 빼요.', toolOptions: { cards: [{ id: 'tray', text: '식판을 정리해요', motif: 'flower' }, { id: 'brush', text: '이를 닦아요', motif: 'star' }, { id: 'yard', text: '운동장에서 놀아요', motif: 'sun' }, { id: 'back', text: '종이 울리면 교실로 와요', motif: 'house' }, { id: 'leave', text: '식판을 자리에 두고 나가요', motif: 'cloud' }], slots: 4 } } } },
              { prompt: '선생님과 연습 쉬는 시간(3분)에 할 일을 먼저 하고 놀아 보았으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 다음 시간 준비물 챙기기', minutes: 13, tool: 'kitchen',
            teacher: '"다음 시간 준비물은 무엇을 보면 알 수 있을까요?" 교실 앞 시간표를 함께 본다. 점검표를 마치면 실제로 다음 시간(시간표에 맞게) 준비물을 책상 위에 꺼내 놓고, 짝이 시간표와 견주어 확인해 준다.',
            task: '시간표를 보고 다음 시간 준비물만 골라 표시하고, 실제로 꺼내 놓아요.',
            levels: PLAIN_LV,
            items: [
              { prompt: '다음은 미술 시간이에요. 오늘은 색종이로 꾸미기를 해요. 챙길 것만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '미술 시간 준비', items: [{ id: 'paper', text: '색종이' }, { id: 'glue', text: '풀' }, { id: 'scissor', text: '가위' }, { id: 'rope', text: '줄넘기' }] },
                target: { checklist: ['paper', 'glue', 'scissor'] }, difficulty: 0.1,
                levels: { easy: { prompt: '다음은 미술 시간이에요. 색종이를 붙여 꾸며요. 챙길 것만 표시해 보세요.', toolOptions: { items: [{ id: 'paper', text: '색종이' }, { id: 'glue', text: '풀' }, { id: 'rope', text: '줄넘기' }] }, target: { checklist: ['paper', 'glue'] } },
                  challenge: { toolOptions: { items: [{ id: 'paper', text: '색종이' }, { id: 'glue', text: '풀' }, { id: 'scissor', text: '가위' }, { id: 'rope', text: '줄넘기' }, { id: 'recorder', text: '리코더' }, { id: 'mathbook', text: '수학책' }] } } } },
              { prompt: '다음은 수학 시간이에요. 수학책에 답을 쓰고 고쳐요. 챙길 것만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '수학 시간 준비', items: [{ id: 'book', text: '수학책' }, { id: 'pencil', text: '연필' }, { id: 'eraser', text: '지우개' }, { id: 'crayon', text: '크레파스' }] },
                target: { checklist: ['book', 'pencil', 'eraser'] }, difficulty: 0.1,
                levels: { easy: { prompt: '다음은 수학 시간이에요. 수학책에 답을 써요. 챙길 것만 표시해 보세요.', toolOptions: { items: [{ id: 'book', text: '수학책' }, { id: 'pencil', text: '연필' }, { id: 'crayon', text: '크레파스' }] }, target: { checklist: ['book', 'pencil'] } },
                  challenge: { toolOptions: { items: [{ id: 'book', text: '수학책' }, { id: 'pencil', text: '연필' }, { id: 'eraser', text: '지우개' }, { id: 'crayon', text: '크레파스' }, { id: 'ball', text: '공' }, { id: 'glue', text: '풀' }] } } } },
              { prompt: '시간표를 보고 다음 시간 준비물을 책상 위에 꺼내 놓고 짝이 확인해 주었으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"연습 쉬는 시간에 할 일을 먼저 하니 종이 울렸을 때 어땠나요?" 두세 명이 말한다. 오늘부터 쉬는 시간마다 다음 시간 준비를 먼저 하고, 잘한 날에 딱지판 셋째 줄에 딱지를 붙인다고 안내한다. 출구 1번을 틀린 학생에게는 오늘 쉬는 시간 약속을 다시 소리 내어 읽게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'timeline', options: { cards: [{ id: 'ready', text: '다음 시간 책을 꺼내요', motif: 'star' }, { id: 'toilet', text: '화장실에 다녀와요', motif: 'leaf' }, { id: 'sit', text: '종이 울리면 자리에 앉아요', motif: 'moon' }], axis: ['쉬는 시간 시작', '종이 울려요'] }, prompt: '할 일을 먼저 하는 쉬는 시간 차례대로 놓아 보세요.', target: { order: ['ready', 'toilet', 'sit'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '다음 시간 준비물은 누가 챙길까요?', options: ['내가 시간표를 보고 챙겨요', '선생님이 챙겨 주세요'], answer: 0, difficulty: 0.05, explain: '시간표를 보면 내가 스스로 챙길 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '쉬는 시간 차례',
      items: [
        { type: 'table', prompt: '쉬는 시간에 할 일을 차례대로 쓰세요.', columns: ['먼저', '그다음', '종이 울리면'], rows: 1 },
        { type: 'check', prompt: '미술 시간(색종이 꾸미기) 준비물에 ✓ 하세요.', options: ['색종이', '풀', '줄넘기', '가위'] },
        { type: 'choice', prompt: '점심을 먹고 먼저 할 일에 ○ 하세요.', options: ['식판 정리하기', '운동장에서 놀기'], answer: '식판 정리하기' },
        { type: 'short', prompt: '오늘 쉬는 시간에 내가 먼저 한 일을 쓰세요.' },
      ],
      easy: {
        note: '할 일 먼저, 놀이는 그다음이에요.',
        items: [
          { type: 'choice', prompt: '쉬는 시간에 먼저 할 일에 ○ 하세요.', options: ['다음 시간 책 꺼내기', '친구와 놀기'], answer: '다음 시간 책 꺼내기' },
          { type: 'check', prompt: '수학 시간 준비물에 ✓ 하세요.', options: ['수학책', '연필', '줄넘기'] },
          { type: 'draw', prompt: '다음 시간 준비를 하는 나를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '쉬는 시간 카드는 세 장이고 맞게 놓으면 초록 테두리가 생겨요. 준비물 보기가 세 가지예요.',
      base: '다섯 장을 세 묶음 차례로 놓고, 준비물 네 가지 가운데 골라요.',
      challenge: '하면 안 되는 함정 카드를 빼고, 준비물 보기 여섯 가지 가운데 골라요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 놀이부터 하고 종이 울린 뒤 책을 찾는다 → 쉬는 시간 시작 종이 울리면 "준비 먼저!"를 반 전체가 함께 말하는 신호를 정한다. ② 시간표를 읽지 못한다 → 과목마다 그림 표시(붓·숫자·공)를 붙인 시간표를 둔다. ③ 화장실과 놀이의 차례를 꼭 정해야 하는지 묻는다 → 그 둘은 어느 것을 먼저 해도 된다고 말해 준다. 준비물이 집에 없는 학생이 있을 수 있으니 교실 공용 바구니를 둔다.',
  }));

  lessons.push(L(36, {
    title: '집에 가기 전 내 자리와 교실 함께 정리하기',
    objective: '집에 가기 전 내 자리를 정리하는 차례를 지키고, 1인 1역 도우미가 되어 함께 쓰는 곳을 정리할 수 있다.',
    illustration: ART('a paper classroom at the end of the day, chairs pushed under desks, one child wiping the board and another arranging the class bookshelf, school bags on backs', '함께 정리해요', [
      { motif: 'sun', x: 120, y: 84, s: 0.6 }, { motif: 'house', x: 380, y: 214, color: 'peach' }, { motif: 'tree', x: 250, y: 214 }], false),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"어제 집에 간 뒤 교실은 어떤 모습이었을까요?" 의자가 나와 있고 바닥에 종이가 떨어진 교실 사진(또는 그림)을 보여 준다. "이 교실은 누가 정리해야 할까요?" 하고 물어 함께 쓰는 곳은 함께 정리한다는 것을 짚는다. 시연 단추로 내 자리 정리 차례가 놓이는 모습을 보여 준다.',
        student: '집에 가기 전에 내가 하는 일을 하나 말해 봐요.',
        demo: { tool: 'kitchen', options: { mode: 'order', cards: ['가방을 싸요', '의자를 넣어요'], shuffle: false }, sequence: [{ order: ['가방을 싸요', '의자를 넣어요'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 내 자리 정리 차례와 점검', minutes: 13, tool: 'kitchen',
            teacher: '"알림장을 가방에 먼저 넣으면 무엇을 쓸 수 없을까요?" 차례가 왜 필요한지 묻는다. 점검표는 정리가 잘된 모습만 표시하는 것이라는 것을 알려 준다. 문항을 마치면 모두 실제로 내 자리를 정리하고 짝이 점검표 말로 살펴 준다.',
            task: '집에 가기 전 내 자리 정리 차례를 놓고, 잘 정리된 모습을 점검해요.',
            levels: CARD_LV,
            items: [
              { prompt: '집에 가기 전 내 자리 정리 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['알림장을 써요', '책과 필통을 가방에 넣어요', '의자를 책상 밑에 넣어요', '선생님께 인사해요'] },
                target: { order: ['알림장을 써요', '책과 필통을 가방에 넣어요', '의자를 책상 밑에 넣어요', '선생님께 인사해요'] }, difficulty: 0.15,
                hints: ['자리에 앉아서 하는 일이 먼저, 일어나서 하는 일이 나중이에요.', '흔들리는 카드는 앉아서 하나요, 일어나서 하나요?', '알림장 → 가방 싸기 → 의자 넣기 → 인사 차례예요.'],
                levels: { easy: { prompt: '집에 가기 전 내 자리 정리 차례대로 세 장 놓아 보세요.', toolOptions: { cards: ['알림장을 써요', '책과 필통을 가방에 넣어요', '선생님께 인사해요'] }, target: { order: ['알림장을 써요', '책과 필통을 가방에 넣어요', '선생님께 인사해요'] } } } },
              { prompt: '하준이의 자리를 살펴요. 잘 정리된 모습만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '하준이 자리 점검', items: [{ id: 'trash', text: '서랍에 쓰레기가 없어요' }, { id: 'chair', text: '의자가 책상 밑에 있어요' }, { id: 'note', text: '알림장이 가방에 있어요' }, { id: 'book', text: '교과서가 바닥에 있어요' }] },
                target: { checklist: ['trash', 'chair', 'note'] }, difficulty: 0.15,
                levels: { easy: { prompt: '하준이의 자리를 살펴요. 잘 정리된 모습만 표시해 보세요. 두 가지예요.', toolOptions: { items: [{ id: 'trash', text: '서랍에 쓰레기가 없어요' }, { id: 'chair', text: '의자가 책상 밑에 있어요' }, { id: 'book', text: '교과서가 바닥에 있어요' }] }, target: { checklist: ['trash', 'chair'] } },
                  challenge: { toolOptions: { items: [{ id: 'trash', text: '서랍에 쓰레기가 없어요' }, { id: 'chair', text: '의자가 책상 밑에 있어요' }, { id: 'note', text: '알림장이 가방에 있어요' }, { id: 'book', text: '교과서가 바닥에 있어요' }, { id: 'cup', text: '물통이 책상 위에 남았어요' }] } } } },
              { prompt: '내 자리를 차례대로 정리하고 짝이 살펴 주었으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 1인 1역 도우미로 함께 정리하기', minutes: 13, tool: 'mindmap',
            teacher: '"내 자리 말고 우리가 함께 쓰는 곳은 어디일까요?" 칠판·창문·학급 문고·바닥을 짚는다. 도우미마다 하는 일을 이은 뒤 이번 주 도우미를 정하고, 2분 동안 모두 맡은 일을 해 본다. 친구 자리 쓰레기를 보았을 때는 탓하는 말 대신 함께 하자는 말을 쓴다고 짚는다.',
            task: '내 자리 정리와 함께 쓰는 곳 정리를 나누고, 도우미가 하는 일을 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '정리 카드를 내 자리 정리와 함께 쓰는 곳 정리로 나누어 보세요.', toolOptions: { topic: '집에 가기 전 정리', slots: ['내 자리', '함께 쓰는 곳'], cards: ['내 서랍 정리하기', '내 의자 넣기', '학급 문고 꽂기', '칠판 지우기'] },
                target: { sort: { '내 자리': ['내 서랍 정리하기', '내 의자 넣기'], '함께 쓰는 곳': ['학급 문고 꽂기', '칠판 지우기'] } }, difficulty: 0.1,
                hints: ['그곳을 나 혼자 쓰는지, 반 친구 모두가 쓰는지 생각해요.', '흔들리는 카드 속 곳은 "내" 것인가요, 우리 모두의 것인가요?', '서랍·의자는 내 자리, 문고·칠판은 함께 쓰는 곳이에요.'],
                levels: { challenge: { prompt: '정리 카드를 나누어 보세요. 여섯 장이에요.', toolOptions: { cards: ['내 서랍 정리하기', '내 의자 넣기', '내 사물함 문 닫기', '학급 문고 꽂기', '칠판 지우기', '창문 닫기'] }, target: { sort: { '내 자리': ['내 서랍 정리하기', '내 의자 넣기', '내 사물함 문 닫기'], '함께 쓰는 곳': ['학급 문고 꽂기', '칠판 지우기', '창문 닫기'] } } } } },
              { prompt: '도우미와 하는 일을 이어 보세요.', toolOptions: { mode: 'match', topic: '1인 1역', slots: [{ id: 'board', label: '칠판 도우미' }, { id: 'window', label: '창문 도우미' }, { id: 'shelf', label: '책꽂이 도우미' }], cards: ['칠판을 지워요', '창문을 닫아요', '책을 바르게 꽂아요'] },
                target: { match: { board: '칠판을 지워요', window: '창문을 닫아요', shelf: '책을 바르게 꽂아요' } }, difficulty: 0.05 },
              { prompt: '친구 자리 밑에 종이가 떨어져 있어요. 할 말만 골라 보세요.', toolOptions: { mode: 'pick', basket: '함께 정리해요', cards: ['같이 주울까?', '종이가 떨어졌어. 내가 도와줄게', '네가 어질렀잖아', '내 것 아니니까 몰라'] },
                target: { pick: ['같이 주울까?', '종이가 떨어졌어. 내가 도와줄게'] }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"정리를 마친 교실을 둘러보세요. 무엇이 달라졌나요?" 두세 명이 말한다. 오늘부터 하교 정리를 잘한 날 딱지판 넷째 줄에 딱지를 붙이고, 다음 시간에 한 주 딱지를 함께 센다고 예고한다. 출구 1번을 틀린 학생에게는 앉아서 하는 일과 일어나서 하는 일을 다시 나누어 보게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'kitchen', options: { mode: 'order', cards: ['가방을 싸요', '의자를 넣어요', '인사하고 나가요'] }, prompt: '집에 가기 전 차례대로 놓아 보세요.', target: { order: ['가방을 싸요', '의자를 넣어요', '인사하고 나가요'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '함께 쓰는 곳은 누가 정리할까요?', options: ['우리 모두 함께', '청소하시는 분만'], answer: 0, difficulty: 0.05, explain: '함께 쓰는 곳은 함께 쓰는 우리가 함께 정리해요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '집에 가기 전 정리',
      items: [
        { type: 'figure', wide: true, prompt: '집에 가기 전 차례대로 1, 2, 3을 쓰세요.', tool: 'kitchen', figures: [{ options: { mode: 'order', cards: ['의자를 책상 밑에 넣어요', '알림장을 써요', '책과 필통을 가방에 넣어요'], slots: ['', '', ''], shuffle: false }, caption: '' }], answer: '알림장 → 가방 → 의자' },
        { type: 'table', prompt: '정리할 곳을 나누어 쓰세요.', columns: ['내 자리', '함께 쓰는 곳'], rows: 2 },
        { type: 'blank', prompt: '이번 주 나는 ____________ 도우미예요.' },
        { type: 'short', prompt: '친구 자리에 쓰레기가 있을 때 할 말을 쓰세요.' },
      ],
      easy: {
        note: '앉아서 하는 일 먼저, 일어나서 하는 일 나중이에요.',
        items: [
          { type: 'choice', prompt: '집에 가기 전 먼저 할 일에 ○ 하세요.', options: ['알림장 쓰기', '인사하기'], answer: '알림장 쓰기' },
          { type: 'choice', prompt: '함께 쓰는 곳에 ○ 하세요.', options: ['학급 문고', '내 서랍'], answer: '학급 문고' },
          { type: 'draw', prompt: '도우미 일을 하는 나를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '정리 차례 카드는 세 장이고 맞게 놓으면 초록 테두리가 생겨요. 점검 항목은 세 가지예요.',
      base: '정리 차례 네 장과 점검 항목 네 가지를 해요.',
      challenge: '함정 점검 항목이 더 있고, 정리 카드 여섯 장을 나누어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 함께 쓰는 곳은 내 일이 아니라고 여긴다 → 도우미 일을 돌아가며 맡아 모두가 함께 쓰는 곳을 정리해 보게 한다. ② 알림장을 쓰기 전에 가방을 싼다 → 알림장과 연필을 책상 위에 남겨 두는 약속을 한다. ③ 친구 자리 쓰레기를 보고 탓한다 → "같이 주울까?" 말을 반 전체가 연습한다. 1인 1역은 한 주마다 바꾸어 모든 학생이 여러 역할을 해 보게 한다.',
  }));

  // ───────────────────────── 37~40차시: 학교생활 딱지판 돌아보기(학교에서의 하루 — 성찰과 습관화) ─────────────────────────

  lessons.push(L(37, {
    title: '한 주 붙임 딱지를 세어 가장 잘한 일 말하기',
    objective: '한 주 동안 학교생활 딱지판에 붙인 딱지를 세어 가장 잘한 일을 말하고, 더 잘하고 싶은 일 하나를 그림으로 나타낼 수 있다.',
    illustration: ART('a paper sticker board with four rows for bag tidying, hallway walking, break-time ready and going-home tidy, yellow star stickers in each row, a child pointing at the longest row', '내 딱지판', [
      { motif: 'star', x: 120, y: 84, s: 0.6 }, { motif: 'house', x: 380, y: 214, color: 'buttercup' }, { motif: 'flower', x: 250, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"33차시부터 붙인 학교생활 딱지판을 꺼내 보세요. 어느 줄이 가장 길어요?" 손가락으로 짚게 한다. "딱지를 다섯 장 다 모은 일은 다음 주에는 안 해도 될까요?" 하고 묻고 생각을 듣는다(딱지를 많이 받으면 다음 주에는 안 해도 된다는 생각). 오늘은 세어 보고 다음 시간에 그 질문을 더 생각한다고 안내한다. 시연 단추로 딱지 수만큼 별이 놓이는 모습을 보여 준다.',
        student: '내 딱지판에서 딱지가 가장 많은 줄을 손가락으로 짚어 봐요.',
        demo: { tool: 'chart', options: { type: 'picture', title: '하준이의 가방 정리', unit: '장', data: [['가방 정리', 4]], icons: [{ value: 1, name: '1장' }], icon: 'star' }, sequence: [{ icons: [[4]] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 딱지를 세어 그래프로 나타내고 읽기', minutes: 14, tool: 'chart',
            teacher: '"딱지 한 장에 별 하나예요. 한 장씩 손가락으로 짚으며 놓아요." 그래프를 다 만든 뒤 "가장 잘한 일은? 그렇게 생각한 까닭은?"을 묻는다. 문항을 마치면 내 딱지판을 세어 활동지 표에 수를 쓴다.',
            task: '딱지판의 수만큼 별을 놓아 그래프를 만들고, 가장 잘한 일을 찾아요.',
            levels: { easy: { showValues: true }, base: {}, challenge: {} },
            items: [
              { prompt: '도윤이의 한 주 딱지판이에요. 표를 보고 별을 놓아 보세요.', toolOptions: { type: 'picture', title: '도윤이의 학교생활 딱지', unit: '장', data: [['가방 정리', 5], ['복도 걷기', 3], ['쉬는 시간 준비', 4]], icons: [{ value: 1, name: '1장' }], icon: 'star', given: [0] }, target: { build: true }, difficulty: 0.15,
                levels: { easy: { toolOptions: { given: [0, 1] } }, challenge: { prompt: '도윤이의 한 주 딱지판이에요. 표를 보고 네 줄의 별을 모두 놓아 보세요.', toolOptions: { data: [['가방 정리', 5], ['복도 걷기', 3], ['쉬는 시간 준비', 4], ['하교 정리', 2]], given: [] } } } },
              { prompt: '민지의 딱지 그래프예요. 민지가 가장 잘한 일(딱지가 가장 많은 일)을 고르세요.', toolOptions: { type: 'picture', mode: 'read', title: '민지의 학교생활 딱지', unit: '장', data: [['가방 정리', 2], ['복도 걷기', 5], ['쉬는 시간 준비', 3], ['하교 정리', 4]], icons: [{ value: 1, name: '1장' }], icon: 'star', question: '딱지가 가장 많은 일은?', choices: ['가방 정리', '복도 걷기', '쉬는 시간 준비', '하교 정리'] }, target: { pick: 1 }, difficulty: 0.1,
                levels: { challenge: { prompt: '민지의 딱지 그래프예요. 민지가 다음 주에 더 잘하고 싶은 일(딱지가 가장 적은 일)을 고르세요.', toolOptions: { question: '딱지가 가장 적은 일은?' }, target: { pick: 0 } } } },
              { prompt: '준호의 딱지 그래프를 보고 표의 빈칸을 채워 보세요.', toolOptions: { type: 'picture', mode: 'read', title: '준호의 학교생활 딱지', unit: '장', data: [['가방 정리', 4], ['복도 걷기', 2], ['쉬는 시간 준비', 5], ['하교 정리', 3]], icons: [{ value: 1, name: '1장' }], icon: 'star', tableBlanks: [1] }, target: { table: true }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { tableBlanks: [0, 1, 3] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 내 딱지판 꾸미고 더 잘하고 싶은 일 그리기', minutes: 12, tool: 'collage',
            teacher: '"가장 잘한 일은 크게 칭찬하고, 딱지가 적은 일은 다음 주에 더 해 볼 일이에요." 딱지가 적은 것은 부끄러운 것이 아니라 연습할 일이 보인 것이라고 말한다. 그림을 다 꾸미면 짝에게 "나는 ○○을 가장 잘했고, ○○을 더 잘하고 싶어"라고 말한다.',
            task: '딱지판 한 줄을 별로 꾸미고, 더 잘하고 싶은 일을 그림으로 나타내 짝에게 말해요.',
            levels: HABIT_LV,
            items: [
              { prompt: '서아는 이번 주 가방 정리를 네 번 했어요. 가방 정리 줄에 노랑 별 네 개를 붙여 보세요.', target: { has: [{ shape: 'star', color: '노랑', n: 4 }] }, difficulty: 0.1,
                levels: { challenge: { prompt: '서아는 이번 주 가방 정리를 네 번, 복도 걷기를 세 번 했어요. 노랑 별 넷과 초록 동그라미 셋을 붙여 보세요.', target: { has: [{ shape: 'star', color: '노랑', n: 4 }, { shape: 'circle', color: '초록', n: 3 }] } } } },
              { prompt: '다음 주에 더 잘하고 싶은 일을 조각 세 개 넘게 붙여 그리고 점검해 보세요.', target: { selfCheck: ['더 잘하고 싶은 일이 그림으로 보여요', '그 일을 하는 내 모습이 있어요', '짝에게 가장 잘한 일과 더 잘하고 싶은 일을 말했어요'], minPieces: 3 }, difficulty: 0.1 },
              { prompt: '내 진짜 딱지판을 세어 활동지 표에 수를 썼으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"짝이 가장 잘한 일은 무엇이었나요?" 두세 명이 짝을 소개한다. 딱지 수는 친구와 견주는 것이 아니라 지난 나와 견주는 것이라고 말한다. 다음 시간에는 "딱지를 다 모으면 그만해도 될까?"를 함께 생각한다고 예고한다. 출구 1번을 틀린 학생에게는 별을 손가락으로 다시 세게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'chart', options: { type: 'picture', mode: 'read', title: '서아의 학교생활 딱지', unit: '장', data: [['가방 정리', 3], ['복도 걷기', 4], ['하교 정리', 5]], icons: [{ value: 1, name: '1장' }], icon: 'star', question: '딱지가 가장 많은 일은?', choices: ['가방 정리', '복도 걷기', '하교 정리'] }, prompt: '그래프를 보고 서아가 가장 잘한 일을 고르세요.', target: { pick: 2 }, difficulty: 0.1 },
          { type: 'choice', prompt: '딱지가 가장 적은 일은 무엇이 될까요?', options: ['다음 주에 더 해 볼 일', '그만둘 일'], answer: 0, difficulty: 0.1, explain: '딱지가 적은 일은 다음 주에 더 연습할 일이에요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '내 한 주 딱지판',
      items: [
        { type: 'table', prompt: '내 딱지판의 딱지 수를 세어 쓰세요.', columns: ['가방 정리', '복도 걷기', '쉬는 시간 준비', '하교 정리'], rows: 1 },
        { type: 'blank', prompt: '내가 가장 잘한 일은 ______________예요.' },
        { type: 'blank', prompt: '다음 주에 더 잘하고 싶은 일은 ______________예요.' },
        { type: 'draw', prompt: '더 잘하고 싶은 일을 하는 나를 그려 보세요.' },
      ],
      easy: {
        note: '딱지를 손가락으로 한 장씩 짚으며 세어요.',
        items: [
          { type: 'table', prompt: '딱지 수를 세어 쓰세요.', columns: ['가방 정리', '복도 걷기'], rows: 1 },
          { type: 'blank', prompt: '나는 ____________을 가장 잘했어요.' },
          { type: 'draw', prompt: '더 잘하고 싶은 일을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '그래프 두 줄이 미리 그려져 있고 수가 함께 보여요. 별 네 개만 붙여요.',
      base: '그래프 첫 줄만 그려져 있어요. 표 빈칸 하나를 채워요.',
      challenge: '네 줄 그래프를 처음부터 만들고, 가장 적은 일을 찾으며, 표 빈칸 세 개를 채워요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 딱지 수를 친구와 견주며 속상해한다 → 지난주 나와 견주게 하고, 반 전체 앞에서 수를 말하게 하지 않는다. ② 딱지를 많이 받으면 다음 주에는 안 해도 된다고 여긴다(핵심 오개념) → 38차시에서 이어서 다룬다. 오늘은 질문을 칠판 구석에 남겨 둔다. ③ 별을 한꺼번에 세다 틀린다 → 한 장씩 짚으며 놓게 한다. 딱지판을 잃어버린 학생은 기억나는 만큼 쓰게 하고 정확한 수를 고집하지 않는다.',
  }));

  lessons.push(L(38, {
    title: '딱지를 다 모은 뒤에도 계속하는 까닭 알기',
    objective: '딱지를 다 모으거나 딱지판이 없어도 좋은 습관을 계속하는 까닭을 말하고, 습관이 되어 가는 차례를 놓을 수 있다.',
    illustration: ART('a paper child tidying a school bag on a hook without any sticker board around, a faded sticker board rolled up on the shelf behind, small hearts floating', '딱지가 없어도', [
      { motif: 'star', x: 120, y: 84, s: 0.5 }, { motif: 'house', x: 380, y: 214, color: 'rose' }, { motif: 'leaf', x: 250, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"지난 시간 칠판에 남긴 질문이에요. 딱지를 다섯 장 다 모으면 다음 주에는 안 해도 될까요?" 손을 들게 하고 두 쪽의 생각을 모두 듣는다. "가방을 정리하는 까닭이 딱지였나요, 물건을 쉽게 찾는 것이었나요?" 하고 되묻는다. 시연 단추로 딱지판 없이 계속한 이야기 장면이 놓이는 모습을 보여 준다.',
        student: '딱지를 받지 않아도 내가 날마다 하는 일을 하나 말해 봐요.',
        demo: { tool: 'timeline', options: { cards: [{ id: 'board', text: '딱지판을 보고 해요', motif: 'star' }, { id: 'self', text: '딱지판 없이도 해요', motif: 'sun' }], axis: ['처음', '나중'], shuffle: false }, sequence: [{ order: ['board', 'self'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 딱지를 다 모은 다음 날', minutes: 13, tool: 'emotion',
            teacher: '보기를 하나씩 읽고 "그렇게 하면 다음 날 어떤 일이 생길까요?"를 묻는다. 결과를 본 뒤 "딱지를 다 모으면 물건이 저절로 정리될까요?"라고 되묻는다. 습관은 딱지를 받으려고가 아니라 나에게 좋아서 하는 것이라는 것을 짚는다.',
            task: '딱지를 다 모았거나 딱지판이 없는 날의 이야기를 읽고, 습관을 이어 가는 행동을 골라요.',
            levels: { easy: { steps: 3 }, base: {}, challenge: {} },
            items: [
              { prompt: '준호는 가방 정리 딱지를 다섯 장 다 모았어요. 새로운 월요일 아침, 준호는 어떻게 할까요?', toolOptions: { mode: 'branch', who: '준호', situation: '가방 정리 딱지를 다 모은 다음 주 월요일 아침이에요.', choices: [
                { id: 'keep', text: '오늘도 가방을 정리해요', result: '수업 시간에 필통을 바로 찾았어요.', mood: '뿌듯함' },
                { id: 'stop', text: '다 모았으니 이제 안 해요', result: '필통을 못 찾아 수업에 늦었어요.', mood: '속상함', why: '딱지를 다 모으면 물건이 저절로 정리될까요?' }] }, target: { choice: 'keep' }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { choices: [
                  { id: 'keep', text: '오늘도 가방을 정리해요', result: '수업 시간에 필통을 바로 찾았어요.', mood: '뿌듯함' },
                  { id: 'stop', text: '다 모았으니 이제 안 해요', result: '필통을 못 찾아 수업에 늦었어요.', mood: '속상함', why: '딱지를 다 모으면 물건이 저절로 정리될까요?' },
                  { id: 'more', text: '딱지를 또 주면 하겠다고 해요', result: '딱지가 없는 날에는 서랍이 다시 어질러졌어요.', mood: '걱정', why: '딱지가 있을 때만 하면 딱지가 없는 날은 어떻게 될까요?' }] } } } },
              { prompt: '서아가 딱지판을 집에 두고 왔어요. 쉬는 시간에 서아는 어떻게 할까요?', toolOptions: { mode: 'branch', who: '서아', situation: '오늘은 딱지판이 없어요. 쉬는 시간에 화장실에 가요.', choices: [
                { id: 'walk', text: '딱지판이 없어도 오른쪽으로 걸어요', result: '모퉁이에서 친구와 부딪히지 않았어요.', mood: '편안함' },
                { id: 'run', text: '오늘은 딱지가 없으니 뛰어가요', result: '모퉁이에서 친구와 부딪혔어요.', mood: '속상함', why: '딱지판이 없는 날에도 뛰면 부딪힐 수 있을까요?' }] }, target: { choice: 'walk' }, difficulty: 0.1 },
              { prompt: '딱지가 없어도 습관을 이어 가는 까닭만 골라 보세요.', toolOptions: { mode: 'pick', basket: '계속하는 까닭', cards: ['물건을 쉽게 찾을 수 있어요', '친구와 부딪히지 않아요', '딱지를 받을 수 있어요', '딱지판이 있을 때만 해요'] },
                target: { pick: ['물건을 쉽게 찾을 수 있어요', '친구와 부딪히지 않아요'] }, difficulty: 0.15,
                predict: { q: '딱지를 다 모으면 그만해도 될까요?', options: ['그만해도 돼요', '계속해요'], answer: 1 },
                conclude: '습관은 딱지 때문이 아니라 나와 친구에게 좋아서 계속해요.',
                levels: { challenge: { toolOptions: { cards: ['물건을 쉽게 찾을 수 있어요', '친구와 부딪히지 않아요', '딱지를 받을 수 있어요', '딱지판이 있을 때만 해요', '선생님이 볼 때만 칭찬받아요'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 습관이 되어 가는 차례', minutes: 13, tool: 'timeline',
            teacher: '"처음에는 누가 알려 줘야 했고, 그다음에는 딱지판을 보고 했고, 나중에는?" 습관은 알려 줌 → 스스로 떠올림 → 저절로 함 차례로 자란다는 것을 손가락 세 개로 보여 준다. 띠 왼쪽이 처음, 오른쪽이 나중이라는 것을 짚는다.',
            task: '친구가 습관을 들여 간 이야기를 처음부터 나중까지 차례대로 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '도윤이가 가방 정리 습관을 들인 이야기예요. 처음부터 나중까지 차례대로 놓아 보세요.', toolOptions: { cards: [{ id: 'told', text: '선생님이 알려 주셔서 했어요', motif: 'house' }, { id: 'board', text: '딱지판을 보고 생각나서 했어요', motif: 'star' }, { id: 'self', text: '딱지판 없이도 저절로 해요', motif: 'sun' }], axis: ['처음', '나중'] },
                target: { order: ['told', 'board', 'self'] }, difficulty: 0.15,
                hints: ['처음에는 누가 도와주고, 갈수록 내가 스스로 하게 돼요.', '흔들리는 카드에서 도와주는 것(선생님·딱지판·없음)이 무엇인지 봐요.', '선생님이 알려 줌 → 딱지판 보고 → 저절로 차례예요.'],
                levels: { challenge: { prompt: '도윤이가 가방 정리 습관을 들인 이야기예요. 차례대로 놓고, 이야기와 맞지 않는 카드는 빼요.', toolOptions: { cards: [{ id: 'told', text: '선생님이 알려 주셔서 했어요', motif: 'house' }, { id: 'board', text: '딱지판을 보고 생각나서 했어요', motif: 'star' }, { id: 'self', text: '딱지판 없이도 저절로 해요', motif: 'sun' }, { id: 'quit', text: '딱지를 다 모아서 그만뒀어요', motif: 'cloud' }], slots: 3 } } } },
              { prompt: '민지가 의자 넣기 습관을 들인 이야기예요. 처음부터 나중까지 차례대로 놓아 보세요.', toolOptions: { cards: [{ id: 'forget', text: '의자 넣기를 자꾸 잊었어요', motif: 'cloud' }, { id: 'friend', text: '짝이 "의자!" 하고 알려 줬어요', motif: 'flower' }, { id: 'auto', text: '일어나면 저절로 의자를 넣어요', motif: 'sun' }], axis: ['처음', '나중'] },
                target: { order: ['forget', 'friend', 'auto'] }, difficulty: 0.15,
                hints: ['잊는 때 → 도움받는 때 → 스스로 하는 때로 자라요.', '흔들리는 카드는 아직 잊나요, 도움을 받나요, 스스로 하나요?', '잊었어요 → 짝이 알려 줬어요 → 저절로 해요 차례예요.'] },
              { prompt: '딱지판 없이 스스로 할 일 하나를 짝에게 말하고, 다음 쉬는 시간에 해 보기로 약속했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"딱지판이 없어도 내가 계속할 일은?" 두세 명이 말한다. 이번 주부터 딱지판은 한 줄씩 줄여 가고, 저절로 하게 된 일에는 딱지 대신 스스로 ✓만 한다고 안내한다. 출구 1번에서 그만둔다를 고른 학생에게는 준호의 필통 이야기를 다시 떠올리게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'branch', who: '도윤', situation: '하교 정리 딱지를 다 모았어요. 오늘도 집에 갈 시간이에요.', choices: [
            { id: 'keep', text: '오늘도 의자를 넣고 가요', result: '다음 날 아침 교실이 깨끗했어요.', mood: '편안함' },
            { id: 'stop', text: '다 모았으니 그냥 가요', result: '의자에 걸려 친구가 넘어질 뻔했어요.', mood: '걱정', why: '딱지를 다 모으면 의자가 저절로 들어갈까요?' }] }, prompt: '딱지를 다 모은 도윤이는 어떻게 할까요?', target: { choice: 'keep' }, difficulty: 0.05 },
          { type: 'choice', prompt: '좋은 습관은 언제까지 할까요?', options: ['딱지를 다 모을 때까지', '딱지가 없어도 계속'], answer: 1, difficulty: 0.1, explain: '습관은 나와 친구에게 좋아서 딱지가 없어도 계속해요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '딱지가 없어도 계속해요',
      items: [
        { type: 'choice', prompt: '딱지를 다 모은 준호가 할 일에 ○ 하세요.', options: ['오늘도 가방을 정리해요', '이제 안 해요'], answer: '오늘도 가방을 정리해요' },
        { type: 'check', prompt: '습관을 계속하는 까닭에 모두 ✓ 하세요.', options: ['물건을 쉽게 찾아요', '딱지를 받으려고만', '친구와 부딪히지 않아요'] },
        { type: 'table', prompt: '습관이 되어 가는 차례를 쓰세요.', columns: ['처음', '그다음', '나중'], rows: 1 },
        { type: 'short', prompt: '딱지판 없이도 내가 계속할 일을 쓰세요.' },
      ],
      easy: {
        note: '딱지가 없어도 물건은 정리해야 찾을 수 있어요.',
        items: [
          { type: 'choice', prompt: '딱지판이 없는 날 복도에서 ○ 하세요.', options: ['걸어요', '뛰어요'], answer: '걸어요' },
          { type: 'choice', prompt: '습관은 언제까지 할까요?', options: ['계속해요', '딱지를 다 모을 때까지'], answer: '계속해요' },
          { type: 'draw', prompt: '딱지판 없이 스스로 하는 나를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '고를 보기가 두 가지예요. 습관 이야기 카드는 맞게 놓으면 초록 테두리가 생겨요.',
      base: '보기 두 가지 가운데 골라요. 습관 이야기 세 장을 차례대로 놓아요.',
      challenge: '함정 보기와 함정 카드가 하나씩 더 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 딱지를 다 모으면 그만해도 된다고 여긴다(핵심 오개념) → "딱지를 다 모으면 필통이 저절로 서랍에 들어갈까요?"로 되묻는다. ② 딱지가 없으면 하기 싫다고 솔직히 말한다 → 그 마음을 받아 주고, 습관이 생기면 저절로 하게 된다는 것을 친구의 이야기로 보여 준다. ③ 습관이 되어 가는 차례를 시간 차례로만 본다 → 도와주는 것이 줄어드는 차례라는 것을 짚는다. 딱지판은 갑자기 없애지 말고 한 줄씩 스스로 ✓로 바꾼다.',
  }));

  lessons.push(L(39, {
    title: '모둠 딱지 그래프로 서로 돕는 방법 찾기',
    objective: '모둠별 딱지 그림그래프를 읽어 많이 붙인 모둠과 적게 붙인 모둠을 찾고, 정리가 늦은 친구를 대신해 주지 않고 돕는 말과 행동을 고를 수 있다.',
    illustration: ART('a paper class board with four small group sticker charts side by side, children of one group high-fiving and helping a friend put a chair under a desk', '함께 해요', [
      { motif: 'star', x: 120, y: 84, s: 0.5 }, { motif: 'house', x: 380, y: 214, color: 'sky' }, { motif: 'flower', x: 250, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"이번 주에는 모둠 딱지판도 붙였지요. 우리 모둠은 몇 장인지 세어 볼까요?" 모둠마다 센 수를 칠판에 적는다. "딱지가 적은 모둠은 친구 한 명 때문일까요?" 하고 물어, 모둠 딱지는 탓할 것이 아니라 함께 늘릴 것이라는 것을 짚는다. 시연 단추로 모둠 수만큼 그림이 놓이는 모습을 보여 준다.',
        student: '우리 모둠이 이번 주에 잘한 일을 하나 말해 봐요.',
        demo: { tool: 'chart', options: { type: 'picture', title: '1모둠 복도 걷기', unit: '장', data: [['1모둠', 6]], icons: [{ value: 1, name: '1장' }], icon: 'heart' }, sequence: [{ icons: [[6]] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 모둠 딱지 그래프 만들고 읽기', minutes: 13, tool: 'chart',
            teacher: '"하트 하나가 딱지 한 장이에요. 여섯 장이면 하트 몇 개를 놓을까요?" 다 만든 뒤 "가장 많은 모둠과 가장 적은 모둠은 몇 장 차이가 날까요?"를 묻는다. 그래프로 나타내면 한눈에 견줄 수 있다는 것을 짚는다.',
            task: '모둠 딱지 수만큼 하트를 놓아 그래프를 만들고, 많은 모둠과 적은 모둠을 찾아요.',
            levels: { easy: { showValues: true }, base: {}, challenge: {} },
            items: [
              { prompt: '모둠별 복도 걷기 딱지예요. 표를 보고 하트를 놓아 보세요.', toolOptions: { type: 'picture', title: '모둠별 복도 걷기 딱지', unit: '장', data: [['1모둠', 6], ['2모둠', 4], ['3모둠', 7], ['4모둠', 5]], icons: [{ value: 1, name: '1장' }], icon: 'heart', given: [0, 1] }, target: { build: true }, difficulty: 0.15,
                levels: { easy: { toolOptions: { given: [0, 1, 2] } }, challenge: { toolOptions: { given: [] } } } },
              { prompt: '모둠별 가방 정리 딱지 그래프예요. 딱지가 가장 많은 모둠을 고르세요.', toolOptions: { type: 'picture', mode: 'read', title: '모둠별 가방 정리 딱지', unit: '장', data: [['1모둠', 5], ['2모둠', 8], ['3모둠', 6], ['4모둠', 3]], icons: [{ value: 1, name: '1장' }], icon: 'heart', question: '딱지가 가장 많은 모둠은?', choices: ['1모둠', '2모둠', '3모둠', '4모둠'] }, target: { pick: 1 }, difficulty: 0.1,
                levels: { challenge: { prompt: '모둠별 가방 정리 딱지 그래프예요. 2모둠은 4모둠보다 딱지가 몇 장 더 많을까요?', toolOptions: { question: '몇 장 더 많을까요?', choices: ['4장', '5장', '6장'] }, target: { pick: 1 } } } },
              { prompt: '모둠별 쉬는 시간 준비 딱지 그래프를 보고 표의 빈칸을 채워 보세요.', toolOptions: { type: 'picture', mode: 'read', title: '모둠별 쉬는 시간 준비 딱지', unit: '장', data: [['1모둠', 7], ['2모둠', 5], ['3모둠', 4], ['4모둠', 6]], icons: [{ value: 1, name: '1장' }], icon: 'heart', tableBlanks: [2] }, target: { table: true }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { tableBlanks: [0, 2, 3] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 정리가 늦은 친구를 돕는 방법', minutes: 13, tool: 'emotion',
            teacher: '"친구 정리를 내가 다 대신 해 주면 친구는 언제 연습할까요?" 대신 해 주기와 옆에서 알려 주기의 다른 점을 짚는다(정리는 남이 대신 해 주는 일이라는 생각). 문항을 마치면 모둠끼리 다음 주에 함께 더 잘할 일 하나를 정해 모둠마다 30초씩 말한다.',
            task: '정리가 늦은 친구를 돕는 행동과 응원하는 말을 고르고, 모둠의 다음 주 약속을 정해요.',
            levels: { easy: { steps: 3 }, base: {}, challenge: {} },
            items: [
              { prompt: '하준이는 집에 갈 때 가방 싸기가 늦어요. 모둠 친구 서아는 어떻게 할까요?', toolOptions: { mode: 'branch', who: '서아', situation: '모두 줄을 섰는데 하준이는 아직 가방을 싸고 있어요.', choices: [
                { id: 'help', text: '"알림장부터 넣자" 하고 옆에서 알려 줘요', result: '하준이가 스스로 가방을 다 쌌어요.', mood: '뿌듯함' },
                { id: 'do', text: '하준이 가방을 대신 다 싸 줘요', result: '다음 날 하준이는 또 혼자 싸지 못했어요.', mood: '걱정', why: '대신 다 해 주면 하준이는 언제 연습할까요?' }] }, target: { choice: 'help' }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { choices: [
                  { id: 'help', text: '"알림장부터 넣자" 하고 옆에서 알려 줘요', result: '하준이가 스스로 가방을 다 쌌어요.', mood: '뿌듯함' },
                  { id: 'do', text: '하준이 가방을 대신 다 싸 줘요', result: '다음 날 하준이는 또 혼자 싸지 못했어요.', mood: '걱정', why: '대신 다 해 주면 하준이는 언제 연습할까요?' },
                  { id: 'rush', text: '"너 때문에 늦잖아!" 하고 소리쳐요', result: '하준이가 울먹이며 더 허둥댔어요.', mood: '속상함', why: '소리치는 말을 들은 하준이는 더 빨리 쌀 수 있을까요?' }] } } } },
              { prompt: '모둠 친구를 응원하는 말만 골라 보세요.', toolOptions: { mode: 'pick', basket: '응원해요', cards: ['조금만 더 하면 돼', '어제보다 빨라졌어', '너 때문에 딱지가 적어', '또 늦었네'] },
                target: { pick: ['조금만 더 하면 돼', '어제보다 빨라졌어'] }, difficulty: 0.1,
                levels: { challenge: { prompt: '모둠 친구를 응원하는 말만 골라 보세요. 세 가지예요.', toolOptions: { cards: ['조금만 더 하면 돼', '어제보다 빨라졌어', '같이 해 볼까', '너 때문에 딱지가 적어', '또 늦었네'] }, target: { pick: ['조금만 더 하면 돼', '어제보다 빨라졌어', '같이 해 볼까'] } } } },
              { prompt: '모둠끼리 다음 주에 함께 더 잘할 일 하나를 정해 말했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"다른 모둠이 정한 약속 가운데 우리 모둠도 해 보고 싶은 것은?" 두세 명이 말한다. 모둠 딱지는 이긴 모둠을 가리는 것이 아니라 함께 늘리는 것이라고 다시 말한다. 출구 1번을 틀린 학생에게는 하트를 손가락으로 짚어 다시 세게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'chart', options: { type: 'picture', mode: 'read', title: '모둠별 하교 정리 딱지', unit: '장', data: [['1모둠', 6], ['2모둠', 3], ['3모둠', 5]], icons: [{ value: 1, name: '1장' }], icon: 'heart', question: '딱지가 가장 적은 모둠은?', choices: ['1모둠', '2모둠', '3모둠'] }, prompt: '그래프를 보고 하교 정리 딱지가 가장 적은 모둠을 고르세요.', target: { pick: 1 }, difficulty: 0.1 },
          { type: 'choice', prompt: '친구가 정리를 늦게 할 때 좋은 도움은?', options: ['대신 다 해 줘요', '옆에서 알려 줘요'], answer: 1, difficulty: 0.1, explain: '옆에서 알려 주면 친구가 스스로 연습할 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '우리 모둠 딱지',
      items: [
        { type: 'table', prompt: '우리 모둠 딱지 수를 세어 쓰세요.', columns: ['가방 정리', '복도 걷기', '쉬는 시간 준비', '하교 정리'], rows: 1 },
        { type: 'choice', prompt: '정리가 늦은 친구를 돕는 행동에 ○ 하세요.', options: ['옆에서 알려 줘요', '대신 다 해 줘요'], answer: '옆에서 알려 줘요' },
        { type: 'short', prompt: '모둠 친구에게 해 줄 응원의 말을 쓰세요.' },
        { type: 'blank', prompt: '우리 모둠이 다음 주에 함께 더 잘할 일: ______________' },
      ],
      easy: {
        note: '하트 하나가 딱지 한 장이에요.',
        items: [
          { type: 'choice', prompt: '응원하는 말에 ○ 하세요.', options: ['조금만 더 하면 돼', '또 늦었네'], answer: '조금만 더 하면 돼' },
          { type: 'choice', prompt: '친구를 돕는 행동에 ○ 하세요.', options: ['옆에서 알려 줘요', '소리쳐요'], answer: '옆에서 알려 줘요' },
          { type: 'draw', prompt: '모둠 친구를 돕는 나를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '그래프 세 줄이 미리 그려져 있고 수가 함께 보여요. 고를 보기가 두 가지예요.',
      base: '그래프 두 줄을 놓고, 표 빈칸 하나를 채워요.',
      challenge: '그래프 네 줄을 모두 놓고, 몇 장 더 많은지 셈하며, 함정 보기가 하나 더 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 딱지가 적은 모둠의 친구를 탓한다 → 모둠 딱지는 함께 늘리는 것이라고 말하고, 누구 때문인지는 묻지 않는다. ② 도와준다며 친구 일을 대신 다 해 준다(정리는 남이 대신 해 준다는 생각) → "말로만 도와요" 약속을 한다. ③ 몇 장 더 많은지 셈을 어려워한다 → 두 줄의 하트를 하나씩 짝 지어 남는 하트를 세게 한다. 모둠별 수를 반 전체 순위처럼 발표하지 않는다.',
  }));

  lessons.push(L(40, {
    title: '더 잘하고 싶은 일을 작은 걸음으로 정하기',
    objective: '더 잘하고 싶은 학교생활 습관 하나를 골라 내일부터 할 수 있는 작은 걸음 하나로 정하고, 걸음 카드로 나타낼 수 있다.',
    illustration: ART('a paper staircase of three small blue steps with a child climbing toward a yellow star at the top, a classroom tree with step cards hanging on its branches', '한 걸음씩', [
      { motif: 'tree', x: 110, y: 214 }, { motif: 'star', x: 330, y: 84, s: 0.6 }, { motif: 'flower', x: 390, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"계단을 한 번에 다섯 칸 뛰어오를 수 있나요? 한 칸씩 오르면요?" 교실 앞에서 한 걸음씩 걷는 모습을 보여 준다. "더 잘하고 싶은 일도 한 번에 다 잘하려 하면 어려워요. 오늘 할 수 있는 작은 걸음 하나로 바꾸어 봐요." 시연 단추로 어려운 일과 작은 걸음이 이어지는 모습을 보여 준다.',
        student: '37차시에 고른 더 잘하고 싶은 일을 다시 말해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '작은 걸음', slots: [{ id: 'g', label: '복도에서 자꾸 뛰어요' }], cards: ['교실 문 앞에서 멈췄다 걸어요'], shuffle: false }, sequence: [{ match: { g: '교실 문 앞에서 멈췄다 걸어요' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 어려운 일에 맞는 작은 걸음 찾기', minutes: 12, tool: 'mindmap',
            teacher: '"작은 걸음은 내일 바로 할 수 있고, 한 번에 하나만 하는 것이에요." 어려운 일과 작은 걸음을 이은 뒤 "하루 만에 모두 잘하기는 왜 작은 걸음이 아닐까요?"를 묻는다. 문항을 마치면 짝에게 내 걸음을 말한다.',
            task: '어려운 일에 맞는 작은 걸음을 잇고, 내일 할 수 있는 걸음만 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '어려운 일과 그 일을 돕는 작은 걸음을 이어 보세요.', toolOptions: { mode: 'match', topic: '작은 걸음', slots: [{ id: 'ready', label: '쉬는 시간 준비를 자꾸 잊어요' }, { id: 'run', label: '복도에서 자꾸 뛰어요' }, { id: 'mess', label: '사물함이 금방 어질러져요' }], cards: ['종이 울리면 시간표를 봐요', '교실 문 앞에서 멈췄다 걸어요', '쓴 물건을 바로 제자리에 둬요'] },
                target: { match: { ready: '종이 울리면 시간표를 봐요', run: '교실 문 앞에서 멈췄다 걸어요', mess: '쓴 물건을 바로 제자리에 둬요' } }, difficulty: 0.15,
                hints: ['어려운 일과 같은 곳·같은 물건이 나오는 걸음을 찾아요.', '흔들리는 카드가 그 어려운 일(준비·복도·사물함)을 돕는지 봐요.', '준비는 시간표 보기, 복도는 문 앞에서 멈추기, 사물함은 바로 제자리예요.'],
                levels: { easy: { prompt: '어려운 일과 그 일을 돕는 작은 걸음을 이어 보세요. 두 짝이에요.', toolOptions: { slots: [{ id: 'ready', label: '쉬는 시간 준비를 자꾸 잊어요' }, { id: 'run', label: '복도에서 자꾸 뛰어요' }], cards: ['종이 울리면 시간표를 봐요', '교실 문 앞에서 멈췄다 걸어요'] }, target: { match: { ready: '종이 울리면 시간표를 봐요', run: '교실 문 앞에서 멈췄다 걸어요' } } } } },
              { prompt: '내일 바로 할 수 있는 작은 걸음만 골라 보세요.', toolOptions: { mode: 'pick', basket: '내일 할 걸음', cards: ['쉬는 시간마다 다음 책 꺼내기', '집에 가기 전 서랍 한 번 보기', '하루 만에 모두 잘하기', '딱지 열 장 한꺼번에 받기'] },
                target: { pick: ['쉬는 시간마다 다음 책 꺼내기', '집에 가기 전 서랍 한 번 보기'] }, difficulty: 0.15,
                predict: { q: '더 잘하고 싶은 일은 어떻게 시작할까요?', options: ['한 번에 다', '작은 걸음 하나'], answer: 1 },
                conclude: '내일 바로 할 수 있는 작은 걸음 하나부터 시작하면 조금씩 잘하게 돼요.',
                levels: { challenge: { toolOptions: { cards: ['쉬는 시간마다 다음 책 꺼내기', '집에 가기 전 서랍 한 번 보기', '하루 만에 모두 잘하기', '딱지 열 장 한꺼번에 받기', '내일부터 한 번도 안 틀리기'] } } } },
              { prompt: '내가 더 잘하고 싶은 일과 작은 걸음 하나를 짝에게 말했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 걸음 카드 만들어 걸음 나무에 붙이기', minutes: 14, tool: 'collage',
            teacher: '"계단 맨 위의 별이 더 잘하고 싶은 일, 계단 한 칸이 작은 걸음이에요." 걸음 계단을 붙인 뒤 내 걸음 카드를 꾸미게 한다. 다 만든 카드는 종이에도 그려 교실 뒤 걸음 나무에 붙이고, 걸음을 해낸 날마다 계단 한 칸에 색을 칠한다.',
            task: '걸음 계단을 붙이고, 내 작은 걸음 카드를 꾸며 걸음 나무에 붙여요.',
            levels: HABIT_LV,
            items: [
              { prompt: '걸음 계단을 만들어요. 파랑 네모 세 개를 계단처럼 붙이고, 맨 위에 노랑 별 하나를 붙여 보세요.', target: { has: [{ shape: 'square', color: '파랑', n: 3 }, { shape: 'star', color: '노랑', n: 1 }] }, difficulty: 0.1,
                levels: { challenge: { prompt: '걸음 계단을 만들어요. 파랑 네모 다섯 개를 계단처럼 붙이고, 맨 위에 노랑 별 하나, 응원하는 빨강 하트 하나를 붙여 보세요.', target: { has: [{ shape: 'square', color: '파랑', n: 5 }, { shape: 'star', color: '노랑', n: 1 }, { shape: 'heart', color: '빨강', n: 1 }] } } } },
              { prompt: '내 작은 걸음 카드를 조각 세 개 넘게 붙여 꾸미고 점검해 보세요.', target: { selfCheck: ['더 잘하고 싶은 일이 그림으로 보여요', '내일 할 작은 걸음 하나가 보여요', '짝이 내 걸음을 알아맞혔어요'], minPieces: 3 }, difficulty: 0.1 },
              { prompt: '걸음 카드를 종이에 그려 교실 뒤 걸음 나무에 붙였으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"걸음 나무에 붙은 친구의 걸음 가운데 나도 해 보고 싶은 것은?" 두세 명이 말한다. 내일부터 걸음을 해낸 날 계단에 색을 칠하고, 다섯 칸이 모두 칠해지면 다음 걸음을 정한다고 안내한다. 출구 1번을 틀린 학생에게는 어려운 일과 같은 곳이 나오는 걸음을 찾게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '작은 걸음', slots: [{ id: 'chair', label: '의자 넣기를 자꾸 잊어요' }, { id: 'note', label: '알림장을 자주 두고 가요' }], cards: ['일어나면 의자부터 봐요', '알림장을 쓰면 바로 가방에 넣어요'] }, prompt: '어려운 일과 돕는 작은 걸음을 이어 보세요.', target: { match: { chair: '일어나면 의자부터 봐요', note: '알림장을 쓰면 바로 가방에 넣어요' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '작은 걸음은 어느 것일까요?', options: ['내일부터 모두 완벽하게 하기', '쉬는 시간마다 다음 책 꺼내기'], answer: 1, difficulty: 0.1, explain: '작은 걸음은 내일 바로 할 수 있는 한 가지예요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '나의 작은 걸음',
      items: [
        { type: 'blank', prompt: '내가 더 잘하고 싶은 일: ______________' },
        { type: 'blank', prompt: '내일 할 작은 걸음: ______________' },
        { type: 'table', prompt: '걸음을 해낸 날에 ○ 하세요.', columns: ['월', '화', '수', '목', '금'], rows: 1 },
        { type: 'draw', prompt: '작은 걸음을 하는 나를 그려 보세요.' },
      ],
      easy: {
        note: '작은 걸음은 내일 바로 할 수 있는 한 가지예요.',
        items: [
          { type: 'choice', prompt: '작은 걸음에 ○ 하세요.', options: ['다음 책 꺼내기', '하루 만에 모두 잘하기'], answer: '다음 책 꺼내기' },
          { type: 'blank', prompt: '내일 나는 ____________을 해요.' },
          { type: 'draw', prompt: '걸음 계단을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '이을 짝이 두 개이고 맞게 놓으면 초록 테두리가 생겨요. 조각 색과 모양이 적어요.',
      base: '이을 짝 세 개, 계단 네모 세 개를 붙여요.',
      challenge: '함정 걸음 카드가 하나 더 있고, 계단 다섯 칸과 하트까지 붙여요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 걸음을 크게 잡는다("내일부터 다 잘할게요") → "내일 아침에 바로 할 수 있나요?"로 줄이게 한다. ② 여러 걸음을 한꺼번에 정한다 → 걸음 카드에는 하나만 담는다. ③ 걸음을 해내지 못한 날을 속상해한다 → 그날은 칠하지 않고 다음 날 다시 하면 된다고 말한다. 걸음 나무는 48차시 단원 정리 때 다시 함께 본다.',
  }));

  // ───────────────────────── 41~44차시: 내가 좋아하는 것·잘하는 것, 친구와 다른 점(나를 알기 — 생활 맥락 이해) ─────────────────────────

  lessons.push(L(41, {
    title: '내가 좋아하는 것과 잘하는 것 나누어 나타내기',
    objective: '좋아하는 것(마음이 끌리는 것)과 잘하는 것(해낼 수 있는 것)을 나누고, 나의 것을 하나씩 그림으로 나타내 짝에게 말할 수 있다.',
    illustration: ART('a paper child standing beside a little tree whose branches hold a dinosaur book, a strawberry, a jump rope and a paper boat, with a heart and stars around', '나를 알아요', [
      { motif: 'tree', x: 110, y: 214 }, { motif: 'star', x: 330, y: 84, s: 0.6 }, { motif: 'flower', x: 390, y: 228, color: 'rose' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"선생님은 비 오는 날을 좋아해요. 그리고 종이학을 잘 접어요." 교사 자신의 예로 시작한다. "좋아하는 것과 잘하는 것은 같은 말일까요?" 하고 묻는다. 좋아하는 것은 마음이 끌리는 것, 잘하는 것은 내가 해낼 수 있는 것이라고 짚는다. "친구가 나와 다른 것을 좋아하면 이상한 걸까요?"도 물어 생각을 들어 둔다(좋아하는 것이 친구와 다르면 이상하다는 생각). 시연 단추로 카드가 두 갈래로 나뉘는 모습을 보여 준다.',
        student: '내가 좋아하는 것 하나를 떠올려 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '선생님', slots: ['좋아하는 것', '잘하는 것'], cards: ['비 오는 날이 좋아요', '종이학을 잘 접어요'], shuffle: false }, sequence: [{ sort: { '좋아하는 것': ['비 오는 날이 좋아요'], '잘하는 것': ['종이학을 잘 접어요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 좋아하는 것과 잘하는 것 나누기', minutes: 12, tool: 'mindmap',
            teacher: '"이 카드는 마음이 끌리는 이야기인가요, 해낼 수 있다는 이야기인가요?" 카드마다 묻는다. 좋아하지만 아직 잘 못하는 것, 잘하지만 아주 좋아하지는 않는 것도 있을 수 있다고 말해 준다. 문항을 마치면 짝에게 내가 좋아하는 것 하나, 잘하는 것 하나를 말한다.',
            task: '친구의 이야기 카드를 좋아하는 것과 잘하는 것으로 나누고, 내 것을 짝에게 말해요.',
            levels: CARD_LV,
            items: [
              { prompt: '준호의 이야기 카드를 좋아하는 것과 잘하는 것으로 나누어 보세요.', toolOptions: { topic: '준호', slots: ['좋아하는 것', '잘하는 것'], cards: ['공룡 책이 좋아요', '비 오는 날이 좋아요', '줄넘기를 스무 번 넘어요', '종이배를 혼자 접어요'] },
                target: { sort: { '좋아하는 것': ['공룡 책이 좋아요', '비 오는 날이 좋아요'], '잘하는 것': ['줄넘기를 스무 번 넘어요', '종이배를 혼자 접어요'] } }, difficulty: 0.15,
                hints: ['마음이 끌리는 이야기인지, 해낼 수 있다는 이야기인지 나누어요.', '흔들리는 카드는 "좋아요"라는 마음인가요, 내가 해내는 일인가요?', '공룡 책·비 오는 날은 좋아하는 것, 줄넘기·종이배는 잘하는 것이에요.'],
                levels: { challenge: { prompt: '준호의 이야기 카드를 나누어 보세요. 여섯 장이에요.', toolOptions: { cards: ['공룡 책이 좋아요', '비 오는 날이 좋아요', '딸기를 가장 좋아해요', '줄넘기를 스무 번 넘어요', '종이배를 혼자 접어요', '신발 끈을 혼자 묶어요'] }, target: { sort: { '좋아하는 것': ['공룡 책이 좋아요', '비 오는 날이 좋아요', '딸기를 가장 좋아해요'], '잘하는 것': ['줄넘기를 스무 번 넘어요', '종이배를 혼자 접어요', '신발 끈을 혼자 묶어요'] } } } } },
              { prompt: '서아의 이야기에서 서아가 잘하는 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '서아가 잘하는 것', cards: ['노래를 끝까지 외워 불러요', '블록으로 높은 탑을 쌓아요', '고양이가 좋아요', '분홍색이 좋아요'] },
                target: { pick: ['노래를 끝까지 외워 불러요', '블록으로 높은 탑을 쌓아요'] }, difficulty: 0.15,
                hints: ['서아가 해낼 수 있는 일을 찾아요.', '흔들리는 카드는 할 수 있는 일인가요, 마음이 끌리는 것인가요?', '노래 외워 부르기와 블록 탑 쌓기가 잘하는 것이에요.'],
                levels: { challenge: { toolOptions: { cards: ['노래를 끝까지 외워 불러요', '블록으로 높은 탑을 쌓아요', '고양이가 좋아요', '분홍색이 좋아요', '그림책 읽기를 좋아해요'] } } } },
              { prompt: '짝에게 내가 좋아하는 것 하나와 잘하는 것 하나를 말했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 나를 나타내는 그림 꾸미기', minutes: 14, tool: 'collage',
            teacher: '"별은 좋아하는 것, 하트는 가장 좋아하는 것이에요." 색과 모양이 무엇을 뜻하는지 정하고 붙이게 한다. 그림을 다 꾸미면 짝 그림과 나란히 놓고 "나랑 다른 점을 하나 찾아볼까?"를 말한다. 다른 점을 찾으면 "달라서 재미있다"고 말해 준다.',
            task: '좋아하는 것과 잘하는 것이 보이게 나를 나타내는 그림을 꾸미고, 짝 그림과 다른 점을 찾아요.',
            levels: SCENE_LV,
            items: [
              { prompt: '나의 좋아요 나무를 만들어요. 좋아하는 것 세 가지는 노랑 별 셋, 가장 좋아하는 것은 빨강 하트 하나로 붙여 보세요.', target: { has: [{ shape: 'star', color: '노랑', n: 3 }, { shape: 'heart', color: '빨강', n: 1 }] }, difficulty: 0.1,
                levels: { challenge: { prompt: '나의 좋아요 나무를 만들어요. 좋아하는 것은 노랑 별 셋, 가장 좋아하는 것은 빨강 하트 하나, 잘하는 것 두 가지는 파랑 동그라미 둘로 붙여 보세요.', target: { has: [{ shape: 'star', color: '노랑', n: 3 }, { shape: 'heart', color: '빨강', n: 1 }, { shape: 'circle', color: '파랑', n: 2 }] } } } },
              { prompt: '나를 나타내는 그림을 조각 네 개 넘게 붙여 꾸미고 점검해 보세요.', target: { selfCheck: ['내가 좋아하는 것이 하나 있어요', '내가 잘하는 것이 하나 있어요', '짝 그림과 다른 점을 하나 찾아 말했어요'], minPieces: 4 }, difficulty: 0.1 },
              { prompt: '활동지에 내가 좋아하는 것과 잘하는 것을 그렸으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"짝과 나의 다른 점은 무엇이었나요?" 두세 짝이 말한다. 다른 점을 말한 짝에게 "달라서 서로 새로운 것을 알려 줄 수 있겠네요"라고 말해 준다. 출구 1번을 틀린 학생에게는 카드가 마음 이야기인지 해내는 일 이야기인지 다시 묻는다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '도윤', slots: ['좋아하는 것', '잘하는 것'], cards: ['수박이 좋아요', '훌라후프를 열 번 돌려요'] }, prompt: '도윤이의 카드를 좋아하는 것과 잘하는 것으로 나누어 보세요.', target: { sort: { '좋아하는 것': ['수박이 좋아요'], '잘하는 것': ['훌라후프를 열 번 돌려요'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '친구가 나와 다른 것을 좋아하면?', options: ['이상해요', '서로 달라도 괜찮아요'], answer: 1, difficulty: 0.05, explain: '사람마다 좋아하는 것이 달라요. 달라도 괜찮아요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '나를 알아요',
      items: [
        { type: 'table', prompt: '나의 것을 쓰세요.', columns: ['좋아하는 것', '잘하는 것'], rows: 2 },
        { type: 'draw', prompt: '내가 가장 좋아하는 것을 그려 보세요.' },
        { type: 'choice', prompt: '잘하는 것에 ○ 하세요.', options: ['신발 끈을 혼자 묶어요', '딸기가 좋아요'], answer: '신발 끈을 혼자 묶어요' },
        { type: 'blank', prompt: '짝과 나의 다른 점: 짝은 ________을 좋아하고, 나는 ________을 좋아해요.' },
      ],
      easy: {
        note: '좋아하는 것은 마음, 잘하는 것은 해내는 일이에요.',
        items: [
          { type: 'blank', prompt: '나는 ____________이 좋아요.' },
          { type: 'blank', prompt: '나는 ____________을 잘해요.' },
          { type: 'draw', prompt: '좋아하는 것을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞게 놓으면 초록 테두리가 생겨요. 조각 색과 모양이 적어요.',
      base: '카드 네 장을 나누고, 별과 하트로 좋아요 나무를 만들어요.',
      challenge: '카드 여섯 장을 나누고, 함정 카드를 빼며, 잘하는 것 동그라미까지 붙여요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 좋아하는 것과 잘하는 것을 같은 것으로 여긴다 → "좋아하지만 아직 잘 못하는 것도 있나요?"로 묻는다. ② 잘하는 것이 없다고 말한다 → 신발 끈 묶기, 혼자 옷 입기처럼 날마다 해내는 작은 일도 잘하는 것이라고 짚어 준다. ③ 좋아하는 것이 친구와 다르면 이상하다고 여긴다(핵심 오개념) → 42차시에서 짝과 견주며 이어 다룬다. 가정 형편이 드러나는 것(여행·장난감)을 견주지 않게 한다.',
  }));

  lessons.push(L(42, {
    title: '짝과 내가 같은 점과 다른 점 찾기',
    objective: '두 친구가 좋아하는 것과 잘하는 것을 같은 점과 다른 점으로 나누고, 친구의 다른 점을 존중하는 말을 할 수 있다.',
    illustration: ART('two paper children sitting face to face with two overlapping circles between them, an apple in the middle overlap, a paintbrush on one side and a soccer ball on the other', '같고 달라요', [
      { motif: 'flower', x: 110, y: 228 }, { motif: 'star', x: 330, y: 84, s: 0.5 }, { motif: 'tree', x: 390, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"지난 시간 짝 그림과 다른 점을 찾았지요. 같은 점도 있었나요?" 두 짝을 앞으로 불러 좋아하는 과일을 물어본다. 같은 것은 가운데, 다른 것은 각자 쪽에 칠판에 적는다. "서로 다른 것을 좋아하면 함께 지낼 수 없을까요?" 하고 묻는다. 시연 단추로 카드가 세 칸으로 나뉘는 모습을 보여 준다.',
        student: '짝이 좋아하는 과일을 물어보고 나와 같은지 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '민지와 준호', slots: ['둘 다', '민지만', '준호만'], cards: ['사과', '그림 그리기', '축구'], shuffle: false }, sequence: [{ sort: { '둘 다': ['사과'], '민지만': ['그림 그리기'], '준호만': ['축구'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 같은 점과 다른 점 나누기', minutes: 14, tool: 'mindmap',
            teacher: '"둘 다 좋아하는 것은 가운데 칸, 한 사람만 좋아하는 것은 그 사람 칸이에요." 문항 글을 손가락으로 짚으며 함께 읽는다. 문항을 마치면 짝끼리 좋아하는 음식·놀이·색을 묻고 답해 같은 점 하나, 다른 점 하나를 활동지에 쓴다(6분).',
            task: '두 친구의 이야기를 읽고 같은 점과 다른 점으로 나누고, 짝과 인터뷰해요.',
            levels: CARD_LV,
            items: [
              { prompt: '민지는 사과와 그림 그리기를 좋아해요. 준호는 사과와 축구를 좋아해요. 카드를 나누어 보세요.', toolOptions: { topic: '좋아하는 것', slots: ['둘 다', '민지만', '준호만'], cards: ['사과', '그림 그리기', '축구'] },
                target: { sort: { '둘 다': ['사과'], '민지만': ['그림 그리기'], '준호만': ['축구'] } }, difficulty: 0.15,
                hints: ['문항 글에서 두 사람 이름 뒤에 나오는 것을 손가락으로 짚어 견주어요.', '흔들리는 카드가 두 사람 글에 모두 나오는지, 한 사람 글에만 나오는지 봐요.', '사과는 둘 다, 그림 그리기는 민지만, 축구는 준호만이에요.'],
                levels: { challenge: { prompt: '민지는 사과·고양이·그림 그리기를, 준호는 사과·고양이·축구를 좋아해요. 카드를 나누어 보세요.', toolOptions: { cards: ['사과', '고양이', '그림 그리기', '축구'] }, target: { sort: { '둘 다': ['사과', '고양이'], '민지만': ['그림 그리기'], '준호만': ['축구'] } } } } },
              { prompt: '서아는 줄넘기와 종이접기를 잘해요. 도윤이는 줄넘기와 달리기를 잘해요. 카드를 나누어 보세요.', toolOptions: { topic: '잘하는 것', slots: ['둘 다', '서아만', '도윤만'], cards: ['줄넘기', '종이접기', '달리기'] },
                target: { sort: { '둘 다': ['줄넘기'], '서아만': ['종이접기'], '도윤만': ['달리기'] } }, difficulty: 0.15,
                hints: ['두 사람이 잘하는 것을 하나씩 견주어요.', '흔들리는 카드가 두 사람 글에 모두 있나요?', '줄넘기는 둘 다, 종이접기는 서아만, 달리기는 도윤만이에요.'],
                levels: { challenge: { prompt: '서아는 줄넘기·종이접기·노래를, 도윤이는 줄넘기·달리기·노래를 잘해요. 카드를 나누어 보세요.', toolOptions: { cards: ['줄넘기', '노래', '종이접기', '달리기'] }, target: { sort: { '둘 다': ['줄넘기', '노래'], '서아만': ['종이접기'], '도윤만': ['달리기'] } } } } },
              { prompt: '짝과 좋아하는 것을 묻고 답해 같은 점 하나, 다른 점 하나를 활동지에 썼으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 다른 점을 존중하는 말', minutes: 12, tool: 'emotion',
            teacher: '"친구가 나와 다른 것을 좋아할 때 어떤 말을 하면 좋을까요?" 보기를 읽고 결과를 본다. "이상해"라는 말을 들은 친구의 마음을 묻는다. 다른 것을 좋아하는 친구에게는 "왜 좋아? 알려 줘"처럼 물어보면 새로운 것을 알게 된다고 짚는다.',
            task: '좋아하는 것이 다를 때 할 말을 고르고, 다른 점을 존중하는 말을 골라요.',
            levels: { easy: { steps: 3 }, base: {}, challenge: {} },
            items: [
              { prompt: '반 친구들이 축구 이야기를 해요. 도윤이는 꽃 기르기를 좋아해요. 한 친구가 "꽃이 좋다고? 이상해"라고 해요. 도윤이는 어떻게 할까요?', toolOptions: { mode: 'branch', who: '도윤', situation: '친구가 "꽃 기르기가 좋다고? 이상해"라고 했어요.', choices: [
                { id: 'say', text: '"나는 꽃이 좋아. 너는 축구가 좋구나" 해요', result: '친구가 "꽃은 어떻게 길러?" 하고 물었어요.', mood: '편안함' },
                { id: 'lie', text: '"나도 축구가 더 좋아" 하고 거짓말해요', result: '도윤이는 하루 내내 마음이 불편했어요.', mood: '걱정', why: '내가 좋아하는 것을 숨기면 내 마음은 어떨까요?' }] }, target: { choice: 'say' }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { choices: [
                  { id: 'say', text: '"나는 꽃이 좋아. 너는 축구가 좋구나" 해요', result: '친구가 "꽃은 어떻게 길러?" 하고 물었어요.', mood: '편안함' },
                  { id: 'lie', text: '"나도 축구가 더 좋아" 하고 거짓말해요', result: '도윤이는 하루 내내 마음이 불편했어요.', mood: '걱정', why: '내가 좋아하는 것을 숨기면 내 마음은 어떨까요?' },
                  { id: 'back', text: '"축구가 더 이상해" 하고 되받아쳐요', result: '둘 다 기분이 상해 말을 하지 않았어요.', mood: '화남', why: '되받아치는 말을 들은 친구의 마음은 어떨까요?' }] } } } },
              { prompt: '짝 서아는 비 오는 날이 좋대요. 맑은 날을 좋아하는 준호는 어떻게 말할까요?', toolOptions: { mode: 'branch', who: '준호', situation: '서아가 "나는 비 오는 날이 제일 좋아"라고 말했어요.', choices: [
                { id: 'ask', text: '"왜 좋아? 알려 줘" 하고 물어요', result: '서아가 웅덩이 첨벙 놀이 이야기를 신나게 해 주었어요.', mood: '기쁨' },
                { id: 'odd', text: '"비 오는 날이 좋다니 이상해" 해요', result: '서아가 고개를 숙이고 말을 멈췄어요.', mood: '속상함', why: '"이상해"를 들은 서아의 마음은 어떨까요?' }] }, target: { choice: 'ask' }, difficulty: 0.1 },
              { prompt: '다른 점을 존중하는 말만 골라 보세요.', toolOptions: { mode: 'pick', basket: '존중하는 말', cards: ['너는 그게 좋구나', '달라서 재미있다', '그런 걸 왜 좋아해', '나랑 같은 걸 좋아해야지'] },
                target: { pick: ['너는 그게 좋구나', '달라서 재미있다'] }, difficulty: 0.1,
                predict: { q: '좋아하는 것이 친구와 다르면 이상한 걸까요?', options: ['이상해요', '달라도 괜찮아요'], answer: 1 },
                conclude: '사람마다 좋아하는 것이 달라요. 달라서 서로 새로운 것을 알려 줄 수 있어요.',
                levels: { challenge: { toolOptions: { cards: ['너는 그게 좋구나', '달라서 재미있다', '그런 걸 왜 좋아해', '나랑 같은 걸 좋아해야지', '너만 이상하게 좋아해'] } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"짝과 나의 같은 점과 다른 점은 무엇이었나요?" 두세 짝이 말한다. 다른 점을 말할 때 "달라서 재미있다"를 함께 붙여 말하게 한다. 출구 1번을 틀린 학생에게는 두 사람 글에서 같은 낱말에 동그라미를 치게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '좋아하는 음식', slots: ['둘 다', '하준만', '서아만'], cards: ['김밥', '떡볶이', '국수'] }, prompt: '하준이는 김밥과 떡볶이를, 서아는 김밥과 국수를 좋아해요. 카드를 나누어 보세요.', target: { sort: { '둘 다': ['김밥'], '하준만': ['떡볶이'], '서아만': ['국수'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '짝이 나와 다른 것을 좋아할 때 할 말은?', options: ['"이상해"', '"왜 좋아? 알려 줘"'], answer: 1, difficulty: 0.05, explain: '물어보면 친구가 좋아하는 까닭을 알게 돼요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '짝과 나',
      items: [
        { type: 'table', prompt: '짝과 인터뷰한 것을 쓰세요.', columns: ['물어본 것', '짝', '나'], cells: [['좋아하는 음식', '', ''], ['좋아하는 놀이', '', ''], ['좋아하는 색', '', '']] },
        { type: 'blank', prompt: '같은 점: 우리는 둘 다 ____________을 좋아해요.' },
        { type: 'blank', prompt: '다른 점: 짝은 ________, 나는 ________을 좋아해요.' },
        { type: 'choice', prompt: '다른 점을 존중하는 말에 ○ 하세요.', options: ['달라서 재미있다', '그런 걸 왜 좋아해'], answer: '달라서 재미있다' },
      ],
      easy: {
        note: '짝에게 "무엇을 좋아해?" 하고 물어봐요.',
        items: [
          { type: 'blank', prompt: '짝은 ____________을 좋아해요.' },
          { type: 'choice', prompt: '좋은 말에 ○ 하세요.', options: ['너는 그게 좋구나', '이상해'], answer: '너는 그게 좋구나' },
          { type: 'draw', prompt: '짝과 나를 함께 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞게 놓으면 초록 테두리가 생겨요. 카드는 세 장, 고를 보기는 두 가지예요.',
      base: '카드 세 장을 세 칸으로 나누고, 보기 두 가지 가운데 골라요.',
      challenge: '같은 것이 두 장인 카드 네 장을 나누고, 함정 보기와 함정 카드가 더 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 좋아하는 것이 친구와 다르면 이상하다고 여긴다(핵심 오개념) → "선생님과 여러분이 좋아하는 것이 같을까요?"로 다른 것이 당연하다는 것을 보여 준다. ② 같은 점 칸에 한 사람만 좋아하는 것을 놓는다 → 두 사람 글에 모두 나오는 낱말에 동그라미를 치게 한다. ③ 인터뷰 때 짝의 말을 끊는다 → 묻고, 듣고, 쓰는 차례를 칠판에 적는다. 활동지 표에 짝의 답을 먼저 쓰고 내 답을 쓴다.',
  }));

  lessons.push(L(43, {
    title: '좋아하는 놀이가 다른 친구와 함께 놀이 정하기',
    objective: '좋아하는 놀이가 다를 때 번갈아 하기·섞어 하기처럼 함께 정하는 방법을 고르고, 짝과 차례대로 놀이를 정해 함께 놀 수 있다.',
    illustration: ART('two paper children at a classroom table, one holding building blocks and the other holding crayons, building a block house together and drawing it, a small sun above', '함께 정해요', [
      { motif: 'house', x: 110, y: 214, color: 'mint' }, { motif: 'star', x: 330, y: 84, s: 0.5 }, { motif: 'flower', x: 390, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"쉬는 시간에 친구와 하고 싶은 놀이가 달라서 다툰 적이 있나요?" 이름 없이 경험을 듣는다. "그럴 때 누가 이겨야 할까요?" 하고 묻는다. 좋아하는 것이 다른 것은 괜찮고, 함께 놀 방법을 같이 찾으면 된다고 짚는다. 시연 단추로 놀이를 정하는 차례가 놓이는 모습을 보여 준다.',
        student: '친구와 하고 싶은 놀이가 달랐던 때를 떠올려 봐요.',
        demo: { tool: 'story', options: { cards: [{ id: 'say', text: '하고 싶은 놀이를 말해요', motif: 'sun' }, { id: 'decide', text: '함께 정해요', motif: 'star' }], slots: ['먼저', '다음'], shuffle: false }, sequence: [{ order: ['say', 'decide'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 좋아하는 놀이가 다를 때', minutes: 12, tool: 'emotion',
            teacher: '보기를 하나씩 읽고 "그렇게 하면 두 친구 마음은 어떨까요?"를 묻는다. 번갈아 하기, 두 놀이 섞기, 가위바위보로 정하고 다음에 바꾸기처럼 둘 다 즐거운 방법을 칠판에 모은다. 우기거나 혼자 가 버리면 놀이가 끝난다는 것을 짚는다.',
            task: '좋아하는 놀이가 다른 이야기를 읽고 함께 즐거운 방법을 골라요.',
            levels: { easy: { steps: 3 }, base: {}, challenge: {} },
            items: [
              { prompt: '쉬는 시간, 서아는 블록 놀이를, 민지는 그림 그리기를 하고 싶어요. 서아는 어떻게 할까요?', toolOptions: { mode: 'branch', who: '서아', situation: '서아는 블록, 민지는 그림 그리기를 하고 싶어요.', choices: [
                { id: 'turn', text: '"오늘은 블록, 내일은 그림 하자" 해요', result: '이틀 동안 둘 다 즐겁게 놀았어요.', mood: '기쁨' },
                { id: 'mine', text: '"블록만 할 거야" 하고 우겨요', result: '민지가 혼자 자리로 돌아갔어요.', mood: '속상함', why: '내 놀이만 하자고 우기면 민지의 마음은 어떨까요?' }] }, target: { choice: 'turn' }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { choices: [
                  { id: 'turn', text: '"오늘은 블록, 내일은 그림 하자" 해요', result: '이틀 동안 둘 다 즐겁게 놀았어요.', mood: '기쁨' },
                  { id: 'mine', text: '"블록만 할 거야" 하고 우겨요', result: '민지가 혼자 자리로 돌아갔어요.', mood: '속상함', why: '내 놀이만 하자고 우기면 민지의 마음은 어떨까요?' },
                  { id: 'leave', text: '화가 나서 말없이 가 버려요', result: '둘 다 쉬는 시간 내내 놀지 못했어요.', mood: '화남', why: '말없이 가 버리면 함께 놀 방법을 찾을 수 있을까요?' }] } } } },
              { prompt: '모둠 네 친구가 하고 싶은 놀이가 모두 달라요. 하준이는 어떻게 할까요?', toolOptions: { mode: 'branch', who: '하준', situation: '공기, 끝말잇기, 실뜨기, 수수께끼 — 네 친구가 하고 싶은 놀이가 모두 달라요.', choices: [
                { id: 'rps', text: '가위바위보로 정하고 다음엔 다른 놀이를 해요', result: '돌아가며 네 놀이를 모두 해 보았어요.', mood: '신남' },
                { id: 'loud', text: '목소리가 가장 큰 친구 놀이로 해요', result: '세 친구는 하고 싶은 말을 못 했어요.', mood: '속상함', why: '큰 소리로 정하면 다른 친구들의 마음은 어떨까요?' }] }, target: { choice: 'rps' }, difficulty: 0.15 },
              { prompt: '함께 놀이를 정하는 좋은 방법만 골라 보세요.', toolOptions: { mode: 'pick', basket: '함께 정해요', cards: ['번갈아 해요', '두 놀이를 섞어요', '내 놀이만 해요', '큰 소리로 우겨요'] },
                target: { pick: ['번갈아 해요', '두 놀이를 섞어요'] }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['번갈아 해요', '두 놀이를 섞어요', '내 놀이만 해요', '큰 소리로 우겨요', '안 놀아 주겠다고 해요'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 짝과 놀이를 정해 함께 놀기', minutes: 14, tool: 'story',
            teacher: '"놀이를 정할 때도 차례가 있어요. 먼저 서로 말하고, 함께 정하고, 정한 대로 놀아요." 차례를 놓고 말풍선을 채운 뒤, 짝과 실제로 놀이를 정해 교실 놀이(공기·끝말잇기·실뜨기 가운데) 하나를 6분 동안 해 본다. 정한 방법(번갈아·섞어)을 활동지에 쓴다.',
            task: '놀이를 정하는 차례와 말을 익히고, 짝과 실제로 정해 함께 놀아요.',
            levels: CARD_LV,
            items: [
              { prompt: '친구와 놀이를 정하는 차례대로 놓아 보세요.', toolOptions: { cards: [{ id: 'say', text: '하고 싶은 놀이를 서로 말해요', motif: 'sun' }, { id: 'decide', text: '어떻게 할지 함께 정해요', motif: 'star' }, { id: 'play', text: '정한 대로 즐겁게 놀아요', motif: 'flower' }], slots: ['처음', '가운데', '끝'] },
                target: { order: ['say', 'decide', 'play'] }, difficulty: 0.1,
                hints: ['서로의 생각을 알아야 함께 정할 수 있어요.', '흔들리는 카드 앞에 꼭 먼저 해야 할 일이 있나요?', '말해요 → 정해요 → 놀아요 차례예요.'],
                levels: { challenge: { prompt: '친구와 놀이를 정하는 차례대로 놓아 보세요. 함께 정하는 방법이 아닌 카드는 빼요.', toolOptions: { cards: [{ id: 'say', text: '하고 싶은 놀이를 서로 말해요', motif: 'sun' }, { id: 'decide', text: '어떻게 할지 함께 정해요', motif: 'star' }, { id: 'play', text: '정한 대로 즐겁게 놀아요', motif: 'flower' }, { id: 'boss', text: '먼저 고른 사람 마음대로 해요', motif: 'cloud' }], slots: ['처음', '가운데', '끝'] } } } },
              { prompt: '준호와 서아가 놀이를 정해요. 말풍선에 알맞은 말을 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['번갈아', '고마워', '줄넘기만'], slots: [{ id: 'b1', who: '준호', motif: 'sun', label: '우리 좋아하는 놀이가 다르네. ___ 해 볼까?' }, { id: 'b2', who: '서아', motif: 'flower', label: '좋아! 내 놀이부터 해 줘서 ___.' }] },
                target: { fill: { b1: '번갈아', b2: '고마워' } }, difficulty: 0.15,
                hints: ['두 친구가 모두 즐거운 방법과, 양보를 받았을 때 하는 말을 떠올려요.', '흔들리는 말풍선을 소리 내어 읽고 두 친구가 모두 즐거운지 들어 봐요.', '준호는 "번갈아", 서아는 "고마워"예요.'],
                levels: { easy: { prompt: '준호가 놀이를 정해요. 말풍선에 알맞은 말을 넣어 보세요.', toolOptions: { cards: ['번갈아', '줄넘기만'], slots: [{ id: 'b1', who: '준호', motif: 'sun', label: '우리 좋아하는 놀이가 다르네. ___ 해 볼까?' }] }, target: { fill: { b1: '번갈아' } } } } },
              { prompt: '짝과 차례대로 놀이를 정해 함께 놀아 보았으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"짝과 어떤 방법으로 놀이를 정했나요?" 번갈아 한 짝, 섞어 한 짝을 한 쌍씩 소개한다. 좋아하는 것이 달라서 오히려 새 놀이를 해 볼 수 있었다는 것을 짚는다. 출구 1번에서 우기기를 고른 학생에게는 상대 친구의 마음을 다시 묻는다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'branch', who: '도윤', situation: '점심시간, 도윤이는 미끄럼틀을, 하준이는 모래 놀이를 하고 싶어요.', choices: [
            { id: 'turn', text: '"미끄럼틀 세 번 타고 모래 놀이 하자" 해요', result: '둘 다 두 가지 놀이를 즐겁게 했어요.', mood: '기쁨' },
            { id: 'mine', text: '"미끄럼틀만 타자" 하고 우겨요', result: '하준이가 혼자 모래 놀이를 하러 갔어요.', mood: '속상함', why: '내 놀이만 우기면 하준이의 마음은 어떨까요?' }] }, prompt: '도윤이는 어떻게 할까요?', target: { choice: 'turn' }, difficulty: 0.05 },
          { type: 'choice', prompt: '놀이를 정할 때 가장 먼저 할 일은?', options: ['하고 싶은 놀이를 서로 말해요', '먼저 놀이를 시작해요'], answer: 0, difficulty: 0.1, explain: '서로의 생각을 먼저 말해야 함께 정할 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '함께 놀이 정하기',
      items: [
        { type: 'table', prompt: '짝과 놀이를 정한 것을 쓰세요.', columns: ['내가 하고 싶은 놀이', '짝이 하고 싶은 놀이', '정한 방법'], rows: 1 },
        { type: 'check', prompt: '함께 정하는 좋은 방법에 모두 ✓ 하세요.', options: ['번갈아 해요', '내 놀이만 해요', '두 놀이를 섞어요'] },
        { type: 'blank', prompt: '놀이를 정하는 차례: 서로 ________ → 함께 ________ → 즐겁게 놀아요.' },
        { type: 'draw', prompt: '짝과 함께 논 모습을 그려 보세요.' },
      ],
      easy: {
        note: '번갈아 하면 둘 다 즐거워요.',
        items: [
          { type: 'choice', prompt: '좋은 방법에 ○ 하세요.', options: ['번갈아 해요', '우겨요'], answer: '번갈아 해요' },
          { type: 'blank', prompt: '우리는 ____________ 놀이를 했어요.' },
          { type: 'draw', prompt: '짝과 노는 나를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '보기가 두 가지이고, 말풍선 하나를 채워요. 맞게 놓으면 초록 테두리가 생겨요.',
      base: '보기 두 가지 가운데 고르고, 말풍선 두 개를 채워요.',
      challenge: '함정 보기·함정 카드가 하나씩 더 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 가위바위보에서 진 친구가 속상해한다 → 진 친구의 놀이를 다음 차례에 꼭 한다는 약속을 함께 정한다. ② 좋아하는 놀이가 다르면 함께 못 논다고 여긴다 → 두 놀이를 섞은 예(블록 집을 짓고 그 집을 그리기)를 보여 준다. ③ 놀이 시간이 들떠 소란해진다 → 앉아서 하는 교실 놀이만 고르게 하고, 6분 타이머를 보이게 둔다.',
  }));

  lessons.push(L(44, {
    title: '내가 잘하는 것으로 친구 돕기',
    objective: '친구가 어려워하는 일과 그 일을 잘하는 친구를 잇고, 내가 잘하는 것으로 도울 수 있는 때를 넣어 나를 소개할 수 있다.',
    illustration: ART('a paper child showing a friend how to fold a paper airplane, another child helping a classmate tie a shoelace, small hearts between them', '도와줄게', [
      { motif: 'sun', x: 120, y: 84, s: 0.6 }, { motif: 'tree', x: 380, y: 214 }, { motif: 'flower', x: 250, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"41차시에 찾은 내가 잘하는 것, 기억나나요?" 두세 명에게 듣는다. "내가 잘하는 것은 나만 좋은 걸까요?" 하고 물어, 잘하는 것으로 친구를 도울 수 있다는 것을 끌어낸다. 돕는 것은 대신 해 주는 것이 아니라 친구가 할 수 있게 알려 주는 것이라고 짚는다. 시연 단추로 어려운 일과 돕는 친구가 이어지는 모습을 보여 준다.',
        student: '내가 잘하는 것 하나를 다시 말해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '도와줄게', slots: [{ id: 'a', label: '종이비행기를 못 접는 친구' }], cards: ['종이접기를 잘하는 서아'], shuffle: false }, sequence: [{ match: { a: '종이접기를 잘하는 서아' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 누가 도와줄 수 있을까', minutes: 12, tool: 'mindmap',
            teacher: '"이 친구가 어려워하는 일을 잘하는 사람은 누구일까요?" 이은 뒤 "어떻게 도와주면 좋을까요?"를 묻는다. 대신 접어 주거나 대신 써 주면 친구가 언제 배울지 묻고, 옆에서 보여 주고 함께 해 보는 것이 돕는 것이라고 짚는다.',
            task: '어려워하는 친구와 그 일을 잘하는 친구를 잇고, 돕는 말을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '어려워하는 친구와 그 일을 잘하는 친구를 이어 보세요.', toolOptions: { mode: 'match', topic: '도와줄게', slots: [{ id: 'plane', label: '종이비행기를 못 접는 친구' }, { id: 'rope', label: '줄넘기가 자꾸 걸리는 친구' }, { id: 'write', label: '글씨 쓰기가 어려운 친구' }], cards: ['종이접기를 잘하는 서아', '줄넘기를 잘하는 준호', '글씨를 또박또박 쓰는 민지'] },
                target: { match: { plane: '종이접기를 잘하는 서아', rope: '줄넘기를 잘하는 준호', write: '글씨를 또박또박 쓰는 민지' } }, difficulty: 0.1,
                hints: ['어려운 일과 같은 일을 잘하는 친구를 찾아요.', '흔들리는 카드의 친구가 잘하는 일이 그 어려운 일과 같은지 봐요.', '비행기는 서아, 줄넘기는 준호, 글씨는 민지예요.'],
                levels: { easy: { prompt: '어려워하는 친구와 그 일을 잘하는 친구를 이어 보세요. 두 짝이에요.', toolOptions: { slots: [{ id: 'plane', label: '종이비행기를 못 접는 친구' }, { id: 'rope', label: '줄넘기가 자꾸 걸리는 친구' }], cards: ['종이접기를 잘하는 서아', '줄넘기를 잘하는 준호'] }, target: { match: { plane: '종이접기를 잘하는 서아', rope: '줄넘기를 잘하는 준호' } } } } },
              { prompt: '친구를 돕는 말만 골라 보세요.', toolOptions: { mode: 'pick', basket: '돕는 말', cards: ['같이 해 볼까?', '이렇게 접어 봐', '그것도 못 해?', '내가 다 해 줄게'] },
                target: { pick: ['같이 해 볼까?', '이렇게 접어 봐'] }, difficulty: 0.15,
                predict: { q: '친구를 돕는다는 것은 무엇일까요?', options: ['대신 해 줘요', '할 수 있게 알려 줘요'], answer: 1 },
                conclude: '돕는 것은 대신 해 주는 것이 아니라 친구가 스스로 할 수 있게 알려 주는 것이에요.',
                levels: { challenge: { toolOptions: { cards: ['같이 해 볼까?', '이렇게 접어 봐', '그것도 못 해?', '내가 다 해 줄게', '느려서 답답해'] } } } },
              { prompt: '짝에게 내가 잘하는 것으로 무엇을 도와줄 수 있는지 말했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 잘하는 것을 넣어 나를 소개하기', minutes: 14, tool: 'story',
            teacher: '"좋아하는 것과 잘하는 것은 다를 수 있어요. 소개에는 잘하는 것을 넣어요." 문항 글을 함께 읽고 말풍선을 채운다. 문항을 마치면 활동지의 \'도와줄게 쿠폰\'에 내가 잘하는 것과 도울 수 있는 때를 써서 짝에게 주고, 짝 앞에서 소개 말을 한다.',
            task: '친구의 소개 말을 완성하고, 내 도와줄게 쿠폰을 만들어 짝에게 소개해요.',
            levels: CARD_LV,
            items: [
              { prompt: '서아는 노래를 좋아하지만 아직 잘 못 불러요. 종이접기는 잘해요. 서아의 소개 말을 완성해 보세요.', toolOptions: { mode: 'fill', cards: ['종이접기', '노래', '종이비행기를 못 접을', '노래를 못 외울'], slots: [{ id: 'b1', who: '서아', motif: 'star', label: '나는 ___를 잘해요.' }, { id: 'b2', who: '서아', motif: 'flower', label: '친구가 ___ 때 도와줄 수 있어요.' }] },
                target: { fill: { b1: '종이접기', b2: '종이비행기를 못 접을' } }, difficulty: 0.2,
                hints: ['좋아하는 것과 잘하는 것을 문항 글에서 나누어 찾아요. 소개에는 잘하는 것을 넣어요.', '흔들리는 말풍선에 넣은 것이 서아가 잘하는 일과 이어지나요?', '"종이접기"를 잘하고, "종이비행기를 못 접을" 때 도와줄 수 있어요.'],
                levels: { easy: { prompt: '서아는 종이접기를 잘해요. 서아의 소개 말을 완성해 보세요.', toolOptions: { cards: ['종이접기', '노래'], slots: [{ id: 'b1', who: '서아', motif: 'star', label: '나는 ___를 잘해요.' }] }, target: { fill: { b1: '종이접기' } } } } },
              { prompt: '준호는 달리기를 좋아하지만 느려요. 신발 끈 묶기는 잘해요. 준호의 소개 말을 완성해 보세요.', toolOptions: { mode: 'fill', cards: ['신발 끈 묶기', '달리기', '신발 끈이 풀렸을', '달리기에서 졌을'], slots: [{ id: 'b1', who: '준호', motif: 'sun', label: '나는 ___를 잘해요.' }, { id: 'b2', who: '준호', motif: 'tree', label: '친구가 ___ 때 도와줄 수 있어요.' }] },
                target: { fill: { b1: '신발 끈 묶기', b2: '신발 끈이 풀렸을' } }, difficulty: 0.2,
                hints: ['준호가 좋아하는 것과 잘하는 것을 문항 글에서 나누어 찾아요.', '흔들리는 말풍선이 준호가 잘하는 일과 이어지나요?', '"신발 끈 묶기"를 잘하고, "신발 끈이 풀렸을" 때 도와줄 수 있어요.'] },
              { prompt: '도와줄게 쿠폰을 써서 짝에게 주고 소개 말을 했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"짝이 준 도와줄게 쿠폰에는 무엇이 적혀 있나요?" 두세 명이 짝의 쿠폰을 소개한다. 쿠폰은 쉬는 시간에 실제로 쓸 수 있다고 안내하고, 도울 때는 대신 해 주지 않고 함께 한다는 것을 다시 짚는다. 출구 1번에서 좋아하는 것을 넣은 학생에게는 문항 글을 다시 읽게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { mode: 'fill', cards: ['블록 쌓기', '그림 그리기'], slots: [{ id: 'b1', who: '도윤', motif: 'house', label: '나는 ___를 잘해요.' }] }, prompt: '도윤이는 그림 그리기를 좋아하지만 블록 쌓기를 더 잘해요. 소개 말을 완성해 보세요.', target: { fill: { b1: '블록 쌓기' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '친구가 종이접기를 어려워할 때 좋은 도움은?', options: ['대신 다 접어 줘요', '옆에서 함께 접으며 알려 줘요'], answer: 1, difficulty: 0.05, explain: '함께 하며 알려 주면 친구가 스스로 할 수 있게 돼요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '도와줄게 쿠폰',
      items: [
        { type: 'blank', prompt: '나는 ____________을 잘해요.' },
        { type: 'blank', prompt: '친구가 ____________ 때 도와줄 수 있어요.' },
        { type: 'check', prompt: '돕는 말에 모두 ✓ 하세요.', options: ['같이 해 볼까?', '그것도 못 해?', '이렇게 해 봐'] },
        { type: 'draw', prompt: '도와줄게 쿠폰을 꾸며 보세요.' },
      ],
      easy: {
        note: '소개에는 내가 잘하는 것을 넣어요.',
        items: [
          { type: 'blank', prompt: '나는 ____________을 잘해요.' },
          { type: 'choice', prompt: '돕는 말에 ○ 하세요.', options: ['같이 해 볼까?', '그것도 못 해?'], answer: '같이 해 볼까?' },
          { type: 'draw', prompt: '친구를 돕는 나를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '이을 짝이 두 개, 말풍선이 하나예요. 맞게 놓으면 초록 테두리가 생겨요.',
      base: '이을 짝 세 개, 말풍선 두 개를 채워요.',
      challenge: '함정 말 카드가 하나 더 있어요. 좋아하는 것과 잘하는 것을 구별해 소개 말을 완성해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 좋아하는 것과 잘하는 것을 섞어 소개한다 → 문항 글에서 "좋아하지만"과 "잘해요"에 밑줄을 긋게 한다. ② 돕는다며 대신 다 해 준다 → 도울 때는 "보여 주고, 함께 하고, 친구가 해 보게" 세 걸음으로 한다고 약속한다. ③ 잘하는 것이 없다고 쿠폰을 비운다 → 41차시 활동지를 함께 보며 작은 잘하는 일(정리, 인사, 기다리기)도 쿠폰이 된다고 알려 준다.',
  }));

  // ───────────────────────── 45~48차시: 나를 아끼는 말과 행동(자기 존중 — 바른 생활 실천) → 단원 정리 ─────────────────────────

  // 거울 속 나에게서 마음에 드는 곳 고르기: 쉬움은 다섯 곳에 이름이 보이고, 도전은 몸의 모든 곳에서 고른다
  var SELF_LV = {
    easy: { parts: ['눈', '귀', '코', '무릎', '발목'], names: true },
    base: { parts: ['눈', '귀', '코', '어깨', '손목', '무릎', '발목'] },
    challenge: {},
  };

  lessons.push(L(45, {
    title: '거울 속 나에게서 마음에 드는 곳 찾고 아끼는 말 하기',
    objective: '거울을 보며 내 몸에서 마음에 드는 곳을 짚어 까닭과 함께 말하고, 나를 아끼는 말을 골라 소리 내어 말할 수 있다.',
    illustration: ART('a paper child holding a round hand mirror and smiling at the reflection, small hearts and an empty speech bubble floating near the mirror', '나는 소중해', [
      { motif: 'flower', x: 110, y: 228, color: 'rose' }, { motif: 'star', x: 330, y: 84, s: 0.5 }, { motif: 'tree', x: 390, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '손거울을 한 사람에 하나씩 나누어 준다(모자라면 짝과 하나를 함께 쓴다). "거울 속 친구에게 손을 흔들어 인사해 볼까요?" 다 같이 인사한 뒤 "거울 속 나에게서 마음에 드는 곳이 있나요?" 하고 묻고 잠깐 기다린다. "없어요"라는 대답이 나오면 "잘생겼는지가 아니라, 나를 위해 일해 주는 곳을 찾아봐요. 그림책을 보는 눈, 친구 말을 듣는 귀처럼요" 하고 이끈다. 시연 단추로 종이 몸에서 눈이 골라지는 모습을 보여 준다.',
        student: '거울 속 나에게 손을 흔들어 인사해 봐요.',
        demo: { tool: 'body', options: { mode: 'parts', parts: ['눈', '귀', '코', '무릎', '발목'], names: true }, sequence: [{ parts: ['눈'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 거울 속 나에게서 마음에 드는 곳 짚기', minutes: 13, tool: 'body',
            teacher: '"준호는 어디가 마음에 든다고 했나요? 준호가 한 말에서 몸의 곳 이름을 찾아 손가락으로 짚어 보세요." 문항 글을 함께 읽고 종이 몸에서 고른다. 다 고르면 손거울로 내 얼굴과 몸을 보며 마음에 드는 곳 두 곳을 실제로 손으로 짚고, 짝에게 "나는 내 ○○이 좋아. ○○를 잘하거든"처럼 까닭을 붙여 말한다. "내 눈이 짝보다 커"처럼 견주는 말이 나오면 "친구와 견주지 않고, 내 몸이 해 주는 일을 말해 봐요"라고 고쳐 준다.',
            task: '친구가 마음에 든다고 한 곳을 종이 몸에서 고르고, 거울로 내 마음에 드는 곳 두 곳을 짚어 짝에게 말해요.',
            levels: SELF_LV,
            items: [
              { prompt: '준호는 거울을 보며 "그림책을 잘 보는 내 눈과 친구 말을 잘 들어 주는 내 귀가 좋아"라고 했어요. 준호가 짚은 곳을 모두 골라 보세요.', toolOptions: { mode: 'parts' },
                target: { parts: ['눈', '귀'] }, difficulty: 0.1,
                hints: ['준호가 한 말에서 몸의 곳 이름을 손가락으로 짚어 찾아요.', '고른 곳이 준호의 말에 나오는 곳인지 다시 읽어 봐요. 빠진 곳은 없나요?', '준호는 보는 눈과 듣는 귀를 짚었어요.'],
                levels: { challenge: { prompt: '준호는 거울을 보며 "그림책을 잘 보는 내 눈, 친구 말을 잘 들어 주는 내 귀, 꽃 냄새를 잘 맡는 내 코가 좋아"라고 했어요. 준호가 짚은 곳을 모두 골라 보세요.', target: { parts: ['눈', '귀', '코'] } } } },
              { prompt: '서아는 거울 앞에서 "줄넘기를 잘 뛰는 튼튼한 내 무릎과 발목이 좋아"라고 했어요. 서아가 짚은 곳을 모두 골라 보세요.', toolOptions: { mode: 'parts' },
                target: { parts: ['무릎', '발목'] }, difficulty: 0.15,
                hints: ['줄넘기를 뛸 때 굽혔다 펴는 곳을 서아의 말에서 찾아요.', '고른 곳이 서아의 말에 나오는 곳인지 다시 읽어 봐요. 서아가 말한 곳은 몇 곳인지 세어 봐요.', '서아는 무릎과 발목을 짚었어요.'],
                levels: { challenge: { prompt: '서아는 거울 앞에서 "줄넘기를 잘 뛰는 내 무릎과 발목, 공을 멀리 던지는 내 어깨가 좋아"라고 했어요. 서아가 짚은 곳을 모두 골라 보세요.', target: { parts: ['무릎', '발목', '어깨'] } } } },
              { prompt: '손거울을 보며 마음에 드는 곳 두 곳을 손으로 짚고, 짝에게 까닭을 붙여 말했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 나를 아끼는 말 골라 소리 내어 말하기', minutes: 13, tool: 'emotion',
            teacher: '"나에게 하는 말에도 따뜻한 말과 아픈 말이 있어요." 카드를 하나씩 읽고, 그 말을 들은 거울 속 내 얼굴이 어떨지 흉내 내 보게 한다. 남을 깎아내리는 말("나만 최고야, 너희는 별로야")은 나를 아끼는 말이 아니라고 짚는다. 두 번째 문항 전에 "\'나는 소중해\'라고 말하면 부끄러운 걸까요?"를 묻고 손을 들게 한다(자기를 아끼는 말은 부끄러워서 하면 안 된다는 생각). 나를 아끼는 말은 뽐내는 말이 아니라 나에게 주는 고마운 말이라고 짚는다. 문항을 마치면 손거울을 보며 고른 말을 먼저 작은 소리로, 다음에는 모두 함께 큰 소리로 말한다.',
            task: '나를 아끼는 말을 고르고, 거울 속 나에게 소리 내어 말해요.',
            levels: CARD_LV,
            items: [
              { prompt: '나를 아끼는 말만 골라 보세요.', toolOptions: { mode: 'pick', basket: '나를 아끼는 말', cards: ['나는 소중해', '오늘도 힘내 보자', '나는 아무것도 못 해', '나는 왜 이렇게 생겼지'] },
                target: { pick: ['나는 소중해', '오늘도 힘내 보자'] }, difficulty: 0.1,
                hints: ['그 말을 들은 거울 속 내 얼굴이 웃을지 찡그릴지 떠올려요.', '바구니에 넣은 말을 나에게 해 주면 마음이 따뜻해지나요?', '"나는 소중해"와 "오늘도 힘내 보자"가 나를 아끼는 말이에요.'],
                levels: { challenge: { toolOptions: { cards: ['나는 소중해', '오늘도 힘내 보자', '나는 아무것도 못 해', '나는 왜 이렇게 생겼지', '나만 최고야, 너희는 별로야'] } } } },
              { prompt: '민지는 거울 앞에서 "나는 소중해"라고 말하려니 얼굴이 빨개졌어요. 민지는 어떻게 할까요?', toolOptions: { mode: 'branch', who: '민지', situation: '거울 앞에서 "나는 소중해"라고 말하려니 부끄러워요.', choices: [
                { id: 'say', text: '작은 목소리로라도 거울 속 나에게 말해요', result: '말하고 나니 마음이 따뜻하고 든든해졌어요.', mood: '편안함' },
                { id: 'skip', text: '부끄러운 말이라며 말하지 않아요', result: '나에게 따뜻한 말을 해 줄 때를 놓쳤어요.', mood: '속상함', why: '나를 아끼는 말은 부끄러운 말일까요? 나에게 주는 고마운 말이에요.' }] }, target: { choice: 'say' }, difficulty: 0.15,
                predict: { q: '"나는 소중해"라고 나에게 말하는 것은 부끄러운 일일까요?', options: ['부끄러워서 하면 안 돼요', '나를 아끼는 좋은 말이에요'], answer: 1 },
                conclude: '나를 아끼는 말은 부끄러운 말이 아니라 나에게 주는 고마운 말이에요.',
                levels: { challenge: { toolOptions: { choices: [
                  { id: 'say', text: '작은 목소리로라도 거울 속 나에게 말해요', result: '말하고 나니 마음이 따뜻하고 든든해졌어요.', mood: '편안함' },
                  { id: 'skip', text: '부끄러운 말이라며 말하지 않아요', result: '나에게 따뜻한 말을 해 줄 때를 놓쳤어요.', mood: '속상함', why: '나를 아끼는 말은 부끄러운 말일까요? 나에게 주는 고마운 말이에요.' },
                  { id: 'tease', text: '부끄러워서 말하는 대신, 먼저 말한 짝을 보고 킥킥 웃어요', result: '짝이 고개를 숙이고 다시는 말하지 않았어요.', mood: '속상함', why: '웃음을 들은 짝은 다시 말할 수 있을까요?' }] } } } },
              { prompt: '나를 아끼는 말이 되게 거울 속 나에게 해 줄 말을 완성해 보세요.', toolOptions: { mode: 'fill', cards: ['소중해', '힘내서', '못났어', '포기해'], slots: [{ id: 'b1', label: '거울 속 나야, 너는 정말 ___.' }, { id: 'b2', label: '오늘도 ___ 해 보자!' }] },
                target: { fill: { b1: '소중해', b2: '힘내서' } }, difficulty: 0.15,
                hints: ['빈칸에 넣고 소리 내어 읽었을 때 내 마음이 따뜻해지는 말을 골라요.', '넣은 말을 거울 속 나에게 한다고 생각하고 다시 읽어 봐요. 말이 자연스러운가요?', '"너는 정말 소중해", "오늘도 힘내서 해 보자"예요.'],
                levels: { easy: { prompt: '나를 아끼는 말이 되게 거울 속 나에게 해 줄 말을 완성해 보세요. 빈칸은 하나예요.', toolOptions: { cards: ['소중해', '못났어'], slots: [{ id: 'b1', label: '거울 속 나야, 너는 정말 ___.' }] }, target: { fill: { b1: '소중해' } } } } },
              { prompt: '손거울을 보며 고른 말을 거울 속 나에게 소리 내어 말했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"거울 속 나에게 말해 보니 마음이 어땠나요?" 두세 명에게 듣는다. 부끄러웠다는 대답도 "처음에는 누구나 그래요. 자꾸 말하면 편해져요"라고 받아 준다. 집에서 세수할 때 거울을 보며 오늘 고른 말을 한 번 해 보자고 안내한다. 출구 1번에서 아픈 말을 넣은 학생에게는 그 말을 들은 거울 속 내 얼굴을 떠올리게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'pick', basket: '나를 아끼는 말', cards: ['나는 웃는 내 얼굴이 좋아', '나는 하나도 쓸모없어', '나는 나를 응원해'] }, prompt: '나를 아끼는 말만 골라 보세요.', target: { pick: ['나는 웃는 내 얼굴이 좋아', '나는 나를 응원해'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '도윤이는 거울 앞에서 무릎이 마음에 든대요. 도윤이가 할 알맞은 말은?', options: ['"달리기를 하는 내 무릎이 튼튼해서 좋아"', '"내 무릎은 친구 무릎보다 못생겼어"'], answer: 0, difficulty: 0.1, explain: '친구와 견주지 않고, 내 몸이 해 주는 일을 떠올리며 아끼는 말을 해요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '거울 속 나',
      items: [
        { type: 'draw', prompt: '거울 속 내 얼굴을 그리고, 마음에 드는 곳에 ○ 하세요.' },
        { type: 'blank', prompt: '나는 내 ________이(가) 좋아요. ____________을(를) 잘하거든요.' },
        { type: 'check', prompt: '나를 아끼는 말에 모두 ✓ 하세요.', options: ['나는 소중해', '나는 아무것도 못 해', '오늘도 힘내 보자'] },
        { type: 'choice', prompt: '"나는 소중해"라고 나에게 말하는 것은?', options: ['부끄러운 말', '나를 아끼는 말'], answer: '나를 아끼는 말' },
      ],
      easy: {
        note: '내 몸이 해 주는 일을 떠올려요.',
        items: [
          { type: 'draw', prompt: '거울 속 내 얼굴을 그려 보세요.' },
          { type: 'blank', prompt: '나는 내 ________이(가) 좋아요.' },
          { type: 'choice', prompt: '나를 아끼는 말에 ○ 하세요.', options: ['나는 소중해', '나는 못났어'], answer: '나는 소중해' },
        ],
      },
    },
    differentiation: {
      easy: '종이 몸에서 고를 곳이 다섯 곳이고 이름이 보여요. 맞게 놓으면 초록 테두리가 생기고, 빈칸은 하나예요.',
      base: '일곱 곳 가운데 두 곳을 고르고, 말 카드 네 장으로 빈칸 두 개를 채워요.',
      challenge: '몸의 모든 곳 가운데 세 곳을 골라요. 남을 깎아내리는 함정 말과 함정 보기가 하나씩 더 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 생김새를 친구와 견주며 마음에 드는 곳을 찾는다("내 눈이 더 커") → 내 몸이 해 주는 일을 넣어 말하게 한다. ② 마음에 드는 곳이 없다고 말한다 → 오늘 아침부터 내 몸이 해 준 일(걷기, 먹기, 보기)을 함께 떠올린다. ③ 나를 아끼는 말이 부끄럽다며 하지 않는다(핵심 오개념) → 처음에는 거울에만 들리게 작은 소리로 해도 된다고 알려 준다. 짝 활동 전에 "친구 얼굴은 평가하지 않아요"를 약속한다. 손거울은 깨지지 않는 것으로 준비한다.',
  }));

  lessons.push(L(46, {
    title: '친구와 견주어 속상할 때 나에게 따뜻한 말 해 주기',
    objective: '친구와 견주어 속상한 상황에서 나를 아프게 하는 말과 아끼는 말을 가르고, 나에게 해 줄 따뜻한 말을 골라 짝과 역할놀이로 말할 수 있다.',
    illustration: ART('a paper child standing beside a short block tower, looking at the tall block tower of a friend, then smiling and patting their own chest, a small heart above', '나는 나대로 좋아', [
      { motif: 'house', x: 110, y: 214, color: 'mint' }, { motif: 'star', x: 330, y: 84, s: 0.5 }, { motif: 'flower', x: 390, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"선생님도 1학년 때 짝 그림이 훨씬 멋져 보여서 \'나는 그림을 못 그려\' 하고 크레파스를 내려놓은 적이 있어요." 교사의 경험으로 시작한다. "그 말을 들은 선생님 마음은 어땠을까요?" 묻고 기다린다. 친구와 견주어 속상한 마음이 드는 것은 누구나 그렇다고 받아 준 뒤, 그때 나에게 어떤 말을 해 주면 좋을지 오늘 연습한다고 안내한다. 시연 단추로 말 카드가 두 갈래로 나뉘는 모습을 보여 준다.',
        student: '친구와 견주어 속상했던 때를 마음속으로 떠올려 봐요. 말하지 않아도 돼요.',
        demo: { tool: 'emotion', options: { mode: 'sort', slots: ['나를 아끼는 말', '나를 아프게 하는 말'], cards: ['나는 나대로 멋져', '나는 그림을 못 그려'], shuffle: false }, sequence: [{ sort: { '나를 아끼는 말': ['나는 나대로 멋져'], '나를 아프게 하는 말': ['나는 그림을 못 그려'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 아픈 말과 따뜻한 말 가르기', minutes: 12, tool: 'emotion',
            teacher: '"이 말을 나에게 하면 마음이 따뜻해질까요, 아파질까요?" 카드를 하나씩 소리 내어 읽는다. "나는 느려"는 그대로의 내 모습일 수 있지만, 뒤에 "그래서 나는 안 돼"를 붙이면 나를 아프게 하는 말이 된다고 짚는다. 이야기 문항에서는 고른 뒤 결과를 함께 읽고 "꼴찌를 해도 나에게 해 줄 말이 있을까요?"를 묻는다. 친구 탓을 하는 보기를 고른 학생에게는 그렇게 말하면 내 마음이 정말 나아지는지 묻는다.',
            task: '나에게 하는 말을 두 갈래로 나누고, 친구와 견주어 속상한 이야기에서 할 말을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '나에게 하는 말을 두 갈래로 나누어 보세요.', toolOptions: { mode: 'sort', slots: ['나를 아끼는 말', '나를 아프게 하는 말'], cards: ['나는 나대로 멋져', '나도 조금씩 크고 있어', '나는 다 못해', '나는 친구보다 늘 별로야'] },
                target: { sort: { '나를 아끼는 말': ['나는 나대로 멋져', '나도 조금씩 크고 있어'], '나를 아프게 하는 말': ['나는 다 못해', '나는 친구보다 늘 별로야'] } }, difficulty: 0.1,
                hints: ['그 말을 나에게 했을 때 마음이 따뜻해지는지 아파지는지 떠올려요.', '흔들리는 카드를 소리 내어 읽어 봐요. 그 말을 들은 내 얼굴은 웃고 있나요?', '"나대로 멋져", "조금씩 크고 있어"는 아끼는 말, "다 못해", "늘 별로야"는 아픈 말이에요.'],
                levels: { challenge: { prompt: '나에게 하는 말을 두 갈래로 나누어 보세요. 여섯 장이에요.', toolOptions: { cards: ['나는 나대로 멋져', '나도 조금씩 크고 있어', '천천히 해도 괜찮아', '나는 다 못해', '나는 친구보다 늘 별로야', '나는 해 봤자 안 돼'] }, target: { sort: { '나를 아끼는 말': ['나는 나대로 멋져', '나도 조금씩 크고 있어', '천천히 해도 괜찮아'], '나를 아프게 하는 말': ['나는 다 못해', '나는 친구보다 늘 별로야', '나는 해 봤자 안 돼'] } } } } },
              { prompt: '달리기에서 꼴찌를 한 하준이가 1등 한 친구를 보고 있어요. 하준이는 나에게 어떤 말을 해 줄까요?', toolOptions: { mode: 'branch', who: '하준', situation: '달리기에서 꼴찌를 했어요. 1등 한 친구가 부러워요.', choices: [
                { id: 'warm', text: '"나는 끝까지 달렸어. 다음엔 더 빨라질 거야" 해요', result: '하준이는 다음 날도 신나게 달리기를 했어요.', mood: '뿌듯함' },
                { id: 'hurt', text: '"나는 친구보다 못해. 달리기는 안 할래" 해요', result: '하준이는 좋아하던 달리기를 그만두었어요.', mood: '슬픔', why: '"나는 못해"라는 말을 들은 내 마음은 어떨까요?' }] }, target: { choice: 'warm' }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { choices: [
                  { id: 'warm', text: '"나는 끝까지 달렸어. 다음엔 더 빨라질 거야" 해요', result: '하준이는 다음 날도 신나게 달리기를 했어요.', mood: '뿌듯함' },
                  { id: 'hurt', text: '"나는 친구보다 못해. 달리기는 안 할래" 해요', result: '하준이는 좋아하던 달리기를 그만두었어요.', mood: '슬픔', why: '"나는 못해"라는 말을 들은 내 마음은 어떨까요?' },
                  { id: 'blame', text: '"1등 한 친구가 반칙했을 거야" 해요', result: '친구와 사이가 나빠지고 하준이 마음은 그대로 속상했어요.', mood: '화남', why: '친구 탓을 하면 내 마음이 나아질까요?' }] } } } },
              { prompt: '서아가 하늘을 보라색으로 칠했더니 친구가 "하늘이 왜 보라색이야? 이상해"라고 했어요. 서아는 어떻게 할까요?', toolOptions: { mode: 'branch', who: '서아', situation: '친구가 내 보라색 하늘 그림을 보고 "이상해"라고 했어요.', choices: [
                { id: 'keep', text: '"나는 저녁 하늘이 보라색으로 보였어. 나는 내 그림이 좋아" 해요', result: '친구가 "정말 저녁 하늘 같다" 하고 다시 보았어요.', mood: '뿌듯함' },
                { id: 'tear', text: '"내 그림은 엉망이야" 하고 구겨 버려요', result: '서아는 애써 그린 그림을 잃고 더 속상했어요.', mood: '속상함', why: '내 그림을 아끼는 말은 무엇일까요?' }] }, target: { choice: 'keep' }, difficulty: 0.15,
                predict: { q: '친구가 "이상해"라고 하면 내 그림은 엉망인 걸까요?', options: ['엉망이에요', '내 생각대로 그린 내 그림이에요'], answer: 1 },
                conclude: '친구 말에 속상해도, 내 생각을 담은 내 것을 아끼는 말을 나에게 해 줄 수 있어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 나에게 따뜻한 말 해 주는 역할놀이', minutes: 14, tool: 'story',
            teacher: '"속상할 때 나에게 해 주는 말에는 두 가지를 넣으면 좋아요. 지금 내 모습을 그대로 말하고, 나를 응원하는 말을 붙여요." 말풍선 문항을 함께 읽는다. 문항을 마치면 짝끼리 역할놀이를 한다. 한 사람이 활동지의 상황 쪽지를 읽어 주면, 다른 사람은 가슴에 손을 얹고 나에게 따뜻한 말을 한다. 역할을 바꿔 두 번씩 한다(6분). 시작 전에 "친구가 한 말을 따라 하며 놀리지 않아요"를 약속한다.',
            task: '말풍선에 나를 아끼는 말을 넣고, 짝과 상황 쪽지로 역할놀이를 해요.',
            levels: CARD_LV,
            items: [
              { prompt: '민지는 친구보다 글씨 쓰기가 느려요. 나를 아끼는 말이 되게 민지의 말풍선을 완성해 보세요.', toolOptions: { mode: 'fill', cards: ['또박또박', '괜찮아', '엉망으로', '큰일이야'], slots: [{ id: 'b1', who: '민지', motif: 'star', label: '나는 천천히 ___ 쓰고 있어.' }, { id: 'b2', who: '민지', motif: 'flower', label: '조금 느려도 ___.' }] },
                target: { fill: { b1: '또박또박', b2: '괜찮아' } }, difficulty: 0.15,
                hints: ['지금 내 모습을 그대로 말하고, 나를 응원하는 말을 넣어요.', '흔들리는 말풍선을 소리 내어 읽어 봐요. 민지 마음이 따뜻해지나요?', '"천천히 또박또박 쓰고 있어", "조금 느려도 괜찮아"예요.'],
                levels: { easy: { prompt: '민지는 친구보다 글씨 쓰기가 느려요. 나를 아끼는 말이 되게 민지의 말풍선을 완성해 보세요. 빈칸은 하나예요.', toolOptions: { cards: ['괜찮아', '큰일이야'], slots: [{ id: 'b2', who: '민지', motif: 'flower', label: '조금 느려도 ___.' }] }, target: { fill: { b2: '괜찮아' } } } } },
              { prompt: '도윤이는 앞니가 빠져서 웃기가 부끄러워요. 나를 아끼는 말이 되게 도윤이의 말풍선을 완성해 보세요.', toolOptions: { mode: 'fill', cards: ['자라고', '좋아', '아프고', '싫어'], slots: [{ id: 'b1', who: '도윤', motif: 'sun', label: '이가 빠진 건 내가 ___ 있다는 뜻이야.' }, { id: 'b2', who: '도윤', motif: 'tree', label: '나는 내 웃는 얼굴이 ___.' }] },
                target: { fill: { b1: '자라고', b2: '좋아' } }, difficulty: 0.2,
                hints: ['어린이 앞니가 빠지는 까닭을 떠올리고, 나를 응원하는 말을 넣어요.', '흔들리는 말풍선이 맞는 말인지, 도윤이 마음을 따뜻하게 하는지 다시 읽어 봐요.', '"내가 자라고 있다는 뜻이야", "내 웃는 얼굴이 좋아"예요.'],
                levels: { easy: { prompt: '도윤이는 앞니가 빠져서 웃기가 부끄러워요. 나를 아끼는 말이 되게 도윤이의 말풍선을 완성해 보세요. 빈칸은 하나예요.', toolOptions: { cards: ['좋아', '싫어'], slots: [{ id: 'b2', who: '도윤', motif: 'tree', label: '나는 내 웃는 얼굴이 ___.' }] }, target: { fill: { b2: '좋아' } } } } },
              { prompt: '짝과 상황 쪽지로 역할을 바꿔 두 번씩 역할놀이를 했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"역할놀이에서 내가 나에게 해 준 말 가운데 가장 마음에 드는 말은?" 서너 명에게 듣고, 칠판의 \'따뜻한 말 나무\'에 붙임쪽지로 붙인다. 친구와 견주어 속상한 마음이 드는 것은 잘못이 아니며, 그때 아픈 말 대신 따뜻한 말을 고르면 된다고 짚는다. 출구 1번을 틀린 학생에게는 고른 말을 거울 속 나에게 한다고 생각하고 다시 읽게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'branch', who: '준호', situation: '친구들은 젓가락질을 잘하는데 준호는 반찬을 자꾸 떨어뜨려요.', choices: [
            { id: 'warm', text: '"나는 연습하는 중이야. 조금씩 나아질 거야" 해요', result: '준호는 집에서 콩 옮기기로 연습을 이어 갔어요.', mood: '뿌듯함' },
            { id: 'hurt', text: '"나는 젓가락질도 못하는 바보야" 해요', result: '준호는 밥 먹는 시간이 싫어졌어요.', mood: '슬픔', why: '"바보"라는 말을 들은 내 마음은 어떨까요?' }] }, prompt: '준호는 나에게 어떤 말을 해 줄까요?', target: { choice: 'warm' }, difficulty: 0.1 },
          { type: 'choice', prompt: '나를 아프게 하는 말은?', options: ['나는 나대로 좋아', '나는 늘 꼴찌일 거야'], answer: 1, difficulty: 0.05, explain: '"늘 꼴찌일 거야"는 나를 아프게 해요. 나에게도 따뜻한 말을 해 줘요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '나에게 따뜻한 말',
      items: [
        { type: 'check', prompt: '나를 아끼는 말에 모두 ✓ 하세요.', options: ['천천히 해도 괜찮아', '나는 다 못해', '나는 연습하는 중이야'] },
        { type: 'choice', prompt: '친구가 내 그림을 보고 "이상해"라고 할 때 나에게 해 줄 말은?', options: ['내 그림은 엉망이야', '나는 내 그림이 좋아'], answer: '나는 내 그림이 좋아' },
        { type: 'blank', prompt: '역할놀이 상황 쪽지 — ① 친구는 줄넘기를 백 번 넘는데 나는 열 번 넘어요. ② 친구 종이접기가 더 예뻐요. ③ 나만 수수께끼를 못 맞혔어요. 내가 나에게 해 준 말: ____________________' },
        { type: 'draw', prompt: '나에게 따뜻한 말을 해 주는 나를 그려 보세요.' },
      ],
      easy: {
        note: '"괜찮아", "연습하는 중이야"처럼 말해요.',
        items: [
          { type: 'choice', prompt: '나를 아끼는 말에 ○ 하세요.', options: ['천천히 해도 괜찮아', '나는 다 못해'], answer: '천천히 해도 괜찮아' },
          { type: 'blank', prompt: '나는 나에게 "____________" 하고 말해 줄래요.' },
          { type: 'draw', prompt: '따뜻한 말을 듣고 웃는 나를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞게 놓으면 초록 테두리가 생겨요. 말풍선 빈칸이 하나이고 고를 말이 두 장이에요.',
      base: '말 카드 네 장을 두 갈래로 나누고, 말풍선 두 개를 채워요.',
      challenge: '말 카드 여섯 장을 나누고, 친구 탓을 하는 함정 보기를 가려내요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 그대로의 내 모습과 아픈 말을 섞는다("나는 느려, 그래서 안 돼") → 앞부분만 말하고 뒤에 응원하는 말을 붙이게 한다. ② 속상한 마음을 친구 탓으로 돌린다 → 친구 탓을 해도 내 마음은 그대로라는 것을 이야기 결과로 보여 준다. ③ 나를 아끼는 말은 부끄럽다며 역할놀이에서 웃어넘긴다(핵심 오개념) → 교사가 먼저 진지하게 시범을 보인다. 실제로 놀림을 받는 학생이 있으면 그 상황을 쪽지로 쓰지 않고 따로 상담한다.',
  }));

  lessons.push(L(47, {
    title: '아침부터 밤까지 나를 아끼는 말과 행동 계획하기',
    objective: '하루의 때(아침·실수했을 때·잠들기 전)에 어울리는 나를 아끼는 말을 잇고, 속상할 때 나를 돌보는 행동을 골라 나를 아끼는 하루 카드를 만들 수 있다.',
    illustration: ART('a paper day strip with a rising sun on the left, a child picking up a dropped eraser in the middle, and a sleeping child under a moon on the right, small hearts linking the three scenes', '나를 아끼는 하루', [
      { motif: 'house', x: 110, y: 214 }, { motif: 'star', x: 330, y: 84, s: 0.5 }, { motif: 'flower', x: 390, y: 228, color: 'rose' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"지난 두 시간 동안 거울 앞에서, 속상할 때 나에게 따뜻한 말을 해 보았지요. 나를 아끼는 일은 말뿐일까요?" 묻고 기다린다. 졸릴 때 제때 자는 것, 힘들 때 쉬는 것, 속상할 때 어른에게 말하는 것도 나를 아끼는 행동이라고 짚는다. "하루 가운데 언제 나에게 따뜻한 말이 필요할까요?" 하고 묻고, 시연 단추로 아침에 어울리는 말이 이어지는 모습을 보여 준다.',
        student: '오늘 아침 일어났을 때 내 마음은 어땠는지 떠올려 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '나를 아끼는 하루', slots: [{ id: 'am', label: '아침에 거울을 볼 때' }], cards: ['오늘도 힘내 보자'], shuffle: false }, sequence: [{ match: { am: '오늘도 힘내 보자' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 하루의 때에 어울리는 말과 나를 돌보는 행동 찾기', minutes: 12, tool: 'mindmap',
            teacher: '"그때 내 마음은 어떨까요? 그 마음에 맞는 말은?" 때마다 마음을 먼저 묻고 말을 잇게 한다. 두 번째 문항 전에 "속상한 마음은 꾹 참으면 사라질까요?" 하고 묻는다. 참기만 하면 마음이 더 무거워지고, 숨을 고르거나 믿는 어른에게 말하는 것이 나를 아끼는 방법이라고 짚는다. 나를 아끼는 말과 행동은 부끄러워 숨길 일이 아니라는 것도 함께 말해 준다.',
            task: '하루의 때와 나를 아끼는 말을 잇고, 나를 돌보는 행동을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '하루의 때와 어울리는 나를 아끼는 말을 이어 보세요.', toolOptions: { mode: 'match', topic: '나를 아끼는 하루', slots: [{ id: 'am', label: '아침에 거울을 볼 때' }, { id: 'oops', label: '공부하다 실수했을 때' }, { id: 'night', label: '잠들기 전 누웠을 때' }], cards: ['오늘도 힘내 보자', '괜찮아, 다시 해 보자', '오늘 하루 수고했어'] },
                target: { match: { am: '오늘도 힘내 보자', oops: '괜찮아, 다시 해 보자', night: '오늘 하루 수고했어' } }, difficulty: 0.15,
                hints: ['하루를 시작할 때, 다시 해야 할 때, 하루를 마칠 때 하는 말을 찾아요.', '흔들리는 카드의 말이 그때와 어울리는지 소리 내어 읽어 봐요. "다시", "오늘 하루"를 살펴봐요.', '아침은 "힘내 보자", 실수는 "다시 해 보자", 잠들기 전은 "수고했어"예요.'],
                levels: {
                  easy: { prompt: '하루의 때와 어울리는 나를 아끼는 말을 이어 보세요. 두 짝이에요.', toolOptions: { slots: [{ id: 'am', label: '아침에 거울을 볼 때' }, { id: 'night', label: '잠들기 전 누웠을 때' }], cards: ['오늘도 힘내 보자', '오늘 하루 수고했어'] }, target: { match: { am: '오늘도 힘내 보자', night: '오늘 하루 수고했어' } } },
                  challenge: { prompt: '하루의 때와 어울리는 나를 아끼는 말을 이어 보세요. 아끼는 말이 아닌 카드는 남겨요.', toolOptions: { cards: ['오늘도 힘내 보자', '괜찮아, 다시 해 보자', '오늘 하루 수고했어', '오늘도 나는 엉망이야'] } },
                } },
              { prompt: '속상하거나 지칠 때 하는 행동을 두 갈래로 나누어 보세요.', toolOptions: { topic: '속상하거나 지칠 때', slots: ['나를 돌보는 행동', '나를 힘들게 하는 행동'], cards: ['숨을 천천히 세 번 쉬어요', '믿는 어른에게 마음을 말해요', '혼자 꾹 참기만 해요', '화가 나서 물건을 던져요'] },
                target: { sort: { '나를 돌보는 행동': ['숨을 천천히 세 번 쉬어요', '믿는 어른에게 마음을 말해요'], '나를 힘들게 하는 행동': ['혼자 꾹 참기만 해요', '화가 나서 물건을 던져요'] } }, difficulty: 0.15,
                hints: ['그렇게 하고 나면 내 마음과 몸이 가벼워질지 무거워질지 떠올려요.', '흔들리는 카드처럼 하면 속상한 마음이 풀릴까요?', '숨 고르기·어른에게 말하기는 돌보는 행동, 참기만 하기·물건 던지기는 힘들게 하는 행동이에요.'],
                predict: { q: '속상한 마음은 꾹 참기만 하면 사라질까요?', options: ['참으면 사라져요', '말하거나 숨을 골라야 가벼워져요'], answer: 1 },
                conclude: '속상한 마음은 참기만 하면 더 무거워져요. 숨을 고르고 믿는 어른에게 말하는 것이 나를 아끼는 행동이에요.',
                levels: { challenge: { prompt: '속상하거나 지칠 때 하는 행동을 두 갈래로 나누어 보세요. 여섯 장이에요.', toolOptions: { cards: ['숨을 천천히 세 번 쉬어요', '믿는 어른에게 마음을 말해요', '졸리면 제때 잠자리에 들어요', '혼자 꾹 참기만 해요', '화가 나서 물건을 던져요', '배고파도 밥을 거르고 계속 놀아요'] }, target: { sort: { '나를 돌보는 행동': ['숨을 천천히 세 번 쉬어요', '믿는 어른에게 마음을 말해요', '졸리면 제때 잠자리에 들어요'], '나를 힘들게 하는 행동': ['혼자 꾹 참기만 해요', '화가 나서 물건을 던져요', '배고파도 밥을 거르고 계속 놀아요'] } } } } },
              { prompt: '짝에게 내가 속상할 때 해 볼 나를 돌보는 행동 하나를 말했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 나를 아끼는 하루 카드 꾸미기', minutes: 14, tool: 'collage',
            teacher: '"노란 동그라미는 아침 해, 분홍 하트는 나를 아끼는 말, 파란 별은 잠들기 전이에요." 모양이 뜻하는 것을 칠판에 붙여 놓고 꾸미게 한다. 다 꾸미면 활동지 \'나를 아끼는 하루 카드\'의 세 칸(아침·실수했을 때·잠들기 전)에 내가 할 말을 쓰고 짝에게 소리 내어 읽어 준다. "이 카드는 집에 가져가 날마다 보는 거울 옆에 붙여요"라고 말해 준다.',
            task: '나를 아끼는 하루 카드를 꾸미고, 때마다 할 말을 써서 짝에게 읽어 줘요.',
            levels: SCENE_LV,
            items: [
              { prompt: '나를 아끼는 하루 카드를 꾸며요. 아침은 노랑 동그라미 하나, 나를 아끼는 말 두 가지는 분홍 하트 둘, 잠들기 전은 파랑 별 하나로 붙여 보세요.', target: { has: [{ shape: 'circle', color: '노랑', n: 1 }, { shape: 'heart', color: '분홍', n: 2 }, { shape: 'star', color: '파랑', n: 1 }] }, difficulty: 0.1,
                levels: { challenge: { prompt: '나를 아끼는 하루 카드를 꾸며요. 아침은 노랑 동그라미 하나, 나를 아끼는 말 두 가지는 분홍 하트 둘, 잠들기 전은 파랑 별 하나, 쉬는 때는 초록 나뭇잎 하나로 붙여 보세요.', target: { has: [{ shape: 'circle', color: '노랑', n: 1 }, { shape: 'heart', color: '분홍', n: 2 }, { shape: 'star', color: '파랑', n: 1 }, { shape: 'leaf', color: '초록', n: 1 }] } } } },
              { prompt: '나를 아끼는 하루 카드를 조각 세 개 넘게 붙여 마저 꾸미고 점검해 보세요.', target: { selfCheck: ['아침에 나에게 할 말을 정했어요', '실수했을 때 나에게 할 말을 정했어요', '잠들기 전에 나에게 할 말을 정했어요'], minPieces: 3 }, difficulty: 0.1 },
              { prompt: '활동지 하루 카드에 세 때의 말을 쓰고 짝에게 읽어 주었으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"내 하루 카드에서 가장 먼저 해 볼 말은 무엇인가요?" 서너 명이 카드를 들고 읽는다. 내일 아침 거울 앞에서 카드의 말을 해 보고, 다음 시간에 해 본 느낌을 나누자고 안내한다. 출구 1번을 틀린 학생에게는 그때 내 마음이 어떨지 먼저 말해 보게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '나를 아끼는 하루', slots: [{ id: 'test', label: '받아쓰기를 두 개 틀렸을 때' }, { id: 'bed', label: '이불을 덮고 누웠을 때' }], cards: ['틀린 건 다시 익히면 돼', '오늘도 잘 지냈어'] }, prompt: '때와 어울리는 나를 아끼는 말을 이어 보세요.', target: { match: { test: '틀린 건 다시 익히면 돼', bed: '오늘도 잘 지냈어' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '친구와 다투고 속상할 때 나를 돌보는 행동은?', options: ['숨을 고르고 믿는 어른에게 말해요', '아무에게도 말하지 않고 참기만 해요'], answer: 0, difficulty: 0.1, explain: '속상한 마음은 말하거나 숨을 골라야 가벼워져요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '나를 아끼는 하루 카드',
      items: [
        { type: 'table', prompt: '때마다 나에게 해 줄 말을 쓰세요.', columns: ['때', '나에게 해 줄 말'], cells: [['아침에 거울을 볼 때', ''], ['실수했을 때', ''], ['잠들기 전', '']] },
        { type: 'check', prompt: '속상할 때 나를 돌보는 행동에 모두 ✓ 하세요.', options: ['숨을 천천히 쉬어요', '물건을 던져요', '믿는 어른에게 말해요'] },
        { type: 'choice', prompt: '잠들기 전 나에게 해 줄 말에 ○ 하세요.', options: ['오늘 하루 수고했어', '오늘도 엉망이었어'], answer: '오늘 하루 수고했어' },
        { type: 'draw', prompt: '하루 카드를 붙일 곳(거울 옆, 침대 옆)과 카드를 보는 나를 그려 보세요.' },
      ],
      easy: {
        note: '아침에는 "힘내 보자", 잠들기 전에는 "수고했어"처럼 말해요.',
        items: [
          { type: 'blank', prompt: '아침에 나에게: "____________"' },
          { type: 'blank', prompt: '잠들기 전 나에게: "____________"' },
          { type: 'choice', prompt: '나를 돌보는 행동에 ○ 하세요.', options: ['어른에게 말해요', '꾹 참기만 해요'], answer: '어른에게 말해요' },
        ],
      },
    },
    differentiation: {
      easy: '때와 말을 두 짝만 이어요. 맞게 놓으면 초록 테두리가 생기고, 조각 모양·색이 적어요.',
      base: '세 때와 말을 잇고, 행동 카드 네 장을 나누어요.',
      challenge: '아끼는 말이 아닌 함정 카드를 남기고, 행동 카드 여섯 장을 나누며, 나뭇잎까지 붙여요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 나를 아끼는 것을 말로만 여긴다 → 잠, 밥, 쉬기처럼 몸을 돌보는 일도 나를 아끼는 것이라고 21~28차시 습관과 이어 준다. ② 속상한 마음을 꾹 참는 것이 착한 것이라고 여긴다 → 믿는 어른(부모님, 선생님)에게 말하는 것도 용기라고 짚는다. ③ 하루 카드의 말이 부끄럽다며 비워 둔다(핵심 오개념) → 카드는 나만 보는 것이라 남에게 보이지 않아도 된다고 알려 주고, 짝에게 읽기는 원하는 학생만 한다.',
  }));

  lessons.push(L(48, {
    title: '하루 단원에서 배운 것 묶고 나를 돌아보기',
    objective: '하루 단원에서 배운 몸 습관·학교 약속·나를 아끼는 말을 묶어 나누고, 내가 잘 지킨 것과 더 해 볼 것을 스스로 돌아보아 말할 수 있다.',
    illustration: ART('a paper scrapbook opened wide showing a sun, a small school building, a toothbrush and a heart sticker, a child turning the pages with a smile', '하루를 돌아봐요', [
      { motif: 'house', x: 110, y: 214, color: 'mint' }, { motif: 'star', x: 330, y: 84, s: 0.5 }, { motif: 'flower', x: 390, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '단원 동안 모은 활동지 묶음(하루 지킴표·그림일기·딱지판·하루 카드)을 책상에 펼치게 한다. "이 가운데 가장 기억에 남는 쪽을 손으로 짚어 볼까요?" 두세 명에게 까닭을 듣는다. "이번 단원 이름은 \'하루\'였지요. 하루 동안 우리가 배운 것을 묶음으로 모아 봐요." 시연 단추로 카드가 묶음으로 들어가는 모습을 보여 준다.',
        student: '내 활동지 묶음에서 가장 기억에 남는 쪽을 짚어 봐요.',
        demo: { tool: 'mindmap', options: { topic: '하루 단원에서 배운 것', slots: ['내 몸을 돌보는 습관', '나를 아끼는 말'], cards: ['자기 전에 이를 닦아요', '나는 소중해'], shuffle: false }, sequence: [{ sort: { '내 몸을 돌보는 습관': ['자기 전에 이를 닦아요'], '나를 아끼는 말': ['나는 소중해'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 하루 단원에서 배운 것 묶기', minutes: 13, tool: 'mindmap',
            teacher: '"이 일은 내 몸을 돌보는 습관인가요, 학교에서 함께 지키는 약속인가요, 나에게 하는 따뜻한 말인가요?" 카드마다 묻는다. 헷갈려하면 그 일을 배운 때의 활동지를 묶음에서 찾아보게 한다. 잇기 문항에서는 "그때 무엇을 했었지요?" 하고 몸으로 흉내 내게 한다. 문항을 마치면 짝과 활동지 묶음을 넘겨 보며 가장 자랑하고 싶은 쪽 하나를 소개한다.',
            task: '단원에서 배운 것을 묶음으로 나누고 때와 지킬 일을 이은 뒤, 짝에게 내 활동지 한 쪽을 소개해요.',
            levels: CARD_LV,
            items: [
              { prompt: '하루 단원에서 배운 것을 세 묶음으로 나누어 보세요.', toolOptions: { topic: '하루 단원에서 배운 것', slots: ['내 몸을 돌보는 습관', '학교에서 지킬 약속', '나를 아끼는 말'], cards: ['자기 전에 이를 닦아요', '정한 시간에 잠자리에 들어요', '복도에서는 오른쪽으로 걸어요', '수업 종이 치면 자리에 앉아요', '나는 소중해', '괜찮아, 다시 해 보자'] },
                target: { sort: { '내 몸을 돌보는 습관': ['자기 전에 이를 닦아요', '정한 시간에 잠자리에 들어요'], '학교에서 지킬 약속': ['복도에서는 오른쪽으로 걸어요', '수업 종이 치면 자리에 앉아요'], '나를 아끼는 말': ['나는 소중해', '괜찮아, 다시 해 보자'] } }, difficulty: 0.25,
                hints: ['그 일을 집에서 내 몸을 위해 하는지, 학교에서 함께 지키는지, 나에게 하는 말인지 떠올려요.', '흔들리는 카드를 배운 때의 활동지를 묶음에서 찾아봐요.', '이 닦기·잠자리는 몸 습관, 복도·수업 종은 학교 약속, "소중해"·"다시 해 보자"는 아끼는 말이에요.'],
                levels: {
                  easy: { prompt: '하루 단원에서 배운 것을 두 묶음으로 나누어 보세요.', toolOptions: { slots: ['내 몸을 돌보는 습관', '나를 아끼는 말'], cards: ['자기 전에 이를 닦아요', '정한 시간에 잠자리에 들어요', '나는 소중해', '괜찮아, 다시 해 보자'] }, target: { sort: { '내 몸을 돌보는 습관': ['자기 전에 이를 닦아요', '정한 시간에 잠자리에 들어요'], '나를 아끼는 말': ['나는 소중해', '괜찮아, 다시 해 보자'] } } },
                  challenge: { prompt: '하루 단원에서 배운 것을 세 묶음으로 나누어 보세요. 지킬 일이 아닌 카드는 남겨요.', toolOptions: { cards: ['자기 전에 이를 닦아요', '정한 시간에 잠자리에 들어요', '복도에서는 오른쪽으로 걸어요', '수업 종이 치면 자리에 앉아요', '나는 소중해', '괜찮아, 다시 해 보자', '계단에서 뛰어 내려가요'] } },
                } },
              { prompt: '때와 그때 지킬 일을 이어 보세요.', toolOptions: { mode: 'match', topic: '하루 단원에서 배운 것', slots: [{ id: 'meal', label: '밥 먹기 전' }, { id: 'road', label: '찻길을 건널 때' }, { id: 'break', label: '쉬는 시간이 되면' }], cards: ['비누로 손을 씻어요', '서서, 보고, 손 들고 건너요', '다음 시간 준비를 먼저 해요'] },
                target: { match: { meal: '비누로 손을 씻어요', road: '서서, 보고, 손 들고 건너요', 'break': '다음 시간 준비를 먼저 해요' } }, difficulty: 0.15,
                hints: ['그때 무엇을 했었는지 몸으로 흉내 내며 떠올려요.', '흔들리는 카드의 일을 정말 그때 하는지 소리 내어 읽어 봐요.', '밥 먹기 전은 손 씻기, 찻길은 서서 보고 건너기, 쉬는 시간은 준비 먼저예요.'],
                levels: {
                  easy: { prompt: '때와 그때 지킬 일을 이어 보세요. 두 짝이에요.', toolOptions: { slots: [{ id: 'meal', label: '밥 먹기 전' }, { id: 'road', label: '찻길을 건널 때' }], cards: ['비누로 손을 씻어요', '서서, 보고, 손 들고 건너요'] }, target: { match: { meal: '비누로 손을 씻어요', road: '서서, 보고, 손 들고 건너요' } } },
                  challenge: { prompt: '때와 그때 지킬 일을 이어 보세요. 네 짝이에요.', toolOptions: { slots: [{ id: 'meal', label: '밥 먹기 전' }, { id: 'road', label: '찻길을 건널 때' }, { id: 'break', label: '쉬는 시간이 되면' }, { id: 'oops', label: '실수했을 때' }], cards: ['비누로 손을 씻어요', '서서, 보고, 손 들고 건너요', '다음 시간 준비를 먼저 해요', '나에게 "괜찮아" 하고 말해요'] }, target: { match: { meal: '비누로 손을 씻어요', road: '서서, 보고, 손 들고 건너요', 'break': '다음 시간 준비를 먼저 해요', oops: '나에게 "괜찮아" 하고 말해요' } } },
                } },
              { prompt: '짝과 활동지 묶음을 넘겨 보며 가장 자랑하고 싶은 쪽 하나를 소개했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 하루 단원에서 한 일 스스로 돌아보기', minutes: 13, tool: 'emotion',
            teacher: '"정답은 없어요. 내 마음에 가장 가까운 칸을 골라요." 몸 습관, 학교 약속, 나를 아끼는 말을 차례로 떠올리게 한다. 작은 칸을 고른 학생에게도 "솔직하게 골라 주어 고마워요. 어떤 점이 어려웠나요?" 하고 받아 준다. 문항을 마치면 활동지에 \'가장 잘 지킨 것\'과 \'다음에 더 해 볼 것\'을 하나씩 써서 짝에게 말한다. 고른 칸은 다음 단원에서 습관을 이어 가게 돕는 데 쓴다.',
            task: '단원에서 한 일을 떠올리며 내 마음의 크기를 솔직하게 고르고, 잘 지킨 것과 더 해 볼 것을 써요.',
            levels: { easy: { steps: 3 }, base: { steps: 3 }, challenge: { steps: 5 } },
            items: [
              { prompt: '손 씻기·바르게 앉기·잠자리 시간 같은 몸 습관을 얼마나 잘 지켰는지 솔직하게 골라 보세요. 정답은 없어요.', toolOptions: { mode: 'scale', situation: '하루 동안 손 씻기, 바르게 앉기, 잠자리 시간을 지켜 보았어요.', feeling: '뿌듯함', ask: '몸 습관을 얼마나 잘 지켰나요?' }, target: { level: 'any' }, difficulty: 0.05, hints: ['정답은 없어요. 단원에서 한 일을 떠올리고 내 마음에 가장 가까운 눈금을 골라요.', '아직 고르지 않았다면 눈금 하나를 눌러요. 어느 눈금이든 괜찮아요.', '솔직하게 고른 눈금이 맞는 답이에요. 고른 까닭을 짝에게 말해 봐요.'] },
              { prompt: '복도 걷기·쉬는 시간 준비 같은 학교 약속을 얼마나 잘 지켰는지 솔직하게 골라 보세요. 정답은 없어요.', toolOptions: { mode: 'scale', situation: '복도에서 오른쪽으로 걷고, 쉬는 시간에 다음 시간 준비를 먼저 해 보았어요.', feeling: '뿌듯함', ask: '학교 약속을 얼마나 잘 지켰나요?' }, target: { level: 'any' }, difficulty: 0.05, hints: ['정답은 없어요. 단원에서 한 일을 떠올리고 내 마음에 가장 가까운 눈금을 골라요.', '아직 고르지 않았다면 눈금 하나를 눌러요. 어느 눈금이든 괜찮아요.', '솔직하게 고른 눈금이 맞는 답이에요. 고른 까닭을 짝에게 말해 봐요.'] },
              { prompt: '거울 앞에서, 속상할 때 나에게 따뜻한 말을 얼마나 해 보았는지 솔직하게 골라 보세요. 정답은 없어요.', toolOptions: { mode: 'scale', situation: '거울 앞에서, 그리고 속상할 때 나에게 따뜻한 말을 해 보았어요.', feeling: '편안함', ask: '나에게 따뜻한 말을 얼마나 해 보았나요?' }, target: { level: 'any' }, difficulty: 0.05, hints: ['정답은 없어요. 단원에서 한 일을 떠올리고 내 마음에 가장 가까운 눈금을 골라요.', '아직 고르지 않았다면 눈금 하나를 눌러요. 어느 눈금이든 괜찮아요.', '솔직하게 고른 눈금이 맞는 답이에요. 고른 까닭을 짝에게 말해 봐요.'] },
              { prompt: '활동지에 가장 잘 지킨 것과 다음에 더 해 볼 것을 하나씩 쓰고 짝에게 말했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"하루 단원을 마치며, 내일부터도 계속할 것 하나를 말해 볼까요?" 서너 명에게 듣는다. 딱지를 다 모았거나 단원이 끝나도 몸 습관과 약속, 나를 아끼는 말은 날마다 이어 가는 것이라고 짚는다. 활동지 묶음은 \'나의 하루 책\'으로 묶어 집에 가져가 식구에게 소개하게 한다. 출구 1번을 틀린 학생과는 그 카드를 배운 활동지를 함께 찾아본다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '하루 단원에서 배운 것', slots: ['내 몸을 돌보는 습관', '나를 아끼는 말'], cards: ['밥 먹은 뒤 이를 닦아요', '나는 나대로 멋져'] }, prompt: '배운 것을 두 묶음으로 나누어 보세요.', target: { sort: { '내 몸을 돌보는 습관': ['밥 먹은 뒤 이를 닦아요'], '나를 아끼는 말': ['나는 나대로 멋져'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '하루 단원이 끝나면 손 씻기 같은 습관은?', options: ['이제 안 해도 돼요', '날마다 계속 이어 가요'], answer: 1, difficulty: 0.05, explain: '습관은 단원이 끝나도 날마다 이어 가는 거예요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '나의 하루 책 돌아보기',
      items: [
        { type: 'table', prompt: '묶음마다 내가 배운 것을 하나씩 쓰세요.', columns: ['묶음', '내가 배운 것 하나'], cells: [['내 몸을 돌보는 습관', ''], ['학교에서 지킬 약속', ''], ['나를 아끼는 말', '']] },
        { type: 'blank', prompt: '가장 잘 지킨 것: ____________________' },
        { type: 'blank', prompt: '다음에 더 해 볼 것: ____________________' },
        { type: 'draw', prompt: '하루 단원에서 가장 기억에 남는 때를 그려 보세요.' },
      ],
      easy: {
        note: '활동지 묶음을 넘겨 보며 써요.',
        items: [
          { type: 'blank', prompt: '내가 잘 지킨 것: ____________________' },
          { type: 'choice', prompt: '단원이 끝나도 습관은?', options: ['계속해요', '그만해요'], answer: '계속해요' },
          { type: 'draw', prompt: '가장 기억에 남는 때를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '두 묶음, 두 짝만 나누고 이어요. 맞게 놓으면 초록 테두리가 생기고, 마음 눈금은 세 칸이에요.',
      base: '카드 여섯 장을 세 묶음으로 나누고 세 짝을 이어요. 마음 눈금은 세 칸이에요.',
      challenge: '지킬 일이 아닌 함정 카드를 남기고 네 짝을 이어요. 마음 눈금은 다섯 칸이에요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 묶음을 장소로만 가른다(학교에서 한 일은 모두 학교 약속) → "그 일은 누구를 위한 일인가요?"를 함께 묻는다. ② 돌아보기에서 모두 가장 큰 칸을 고른다 → 정답이 없고 솔직하게 고른 칸이 다음 걸음을 정하는 데 쓰인다고 다시 말해 준다. ③ 단원이 끝나면 습관을 안 해도 된다고 여긴다 → 하루 지킴표를 다음 단원에도 이어 쓰게 한다. 가장 기억에 남는 쪽을 소개할 때 집안 형편이 드러나는 내용은 견주지 않게 한다.',
  }));

  // ── 차시 끝 ──

  PaperLessons.registerUnit({
    id: 'g1-int-2-05', schema: 'edu-unit.v1', catalogUnit: UNIT,
    grade: 1, subject: '통합교과', unitTitle: TITLE,
    flow: '1~4차시는 하루 동안 지키는 몸 습관(손 씻기·바르게 앉기·잠자리 시간)을 몸으로 익히고 하루 지킴표로 실천을 시작하며, 5~8차시는 그 하루 속에서 나를 칭찬할 작은 일을 찾습니다. 9~20차시는 하루를 아침·낮·저녁으로 나누어 날마다 되풀이되는 일과 사람마다 다른 하루를 살펴보고, 마음에 남는 때를 그려 소중히 여기며, 한 주의 그림을 이어 보며 달라진 점과 내일 할 일을 정합니다. 21~28차시는 건강에 좋은 일과 해로운 일, 길과 날씨에 따른 안전을 알아본 뒤 한 주 동안 지킨 습관을 세어 표에 나타내고 다음 주 다짐을 세웁니다. 29~40차시는 학교의 하루(아침 등교·쉬는 시간·급식·정리)에서 지킬 약속을 익혀 스스로 실천하고 붙임 딱지로 돌아봅니다. 41~48차시는 내가 좋아하는 것과 잘하는 것, 친구와 다른 점을 알고 나를 아끼는 말을 익힌 뒤, 마지막 시간에 단원 전체를 돌아보며 스스로 평가합니다.',
    refs: {},
    lessons: lessons,
  });
})();
