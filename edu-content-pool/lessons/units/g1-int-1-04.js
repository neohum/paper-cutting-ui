/* 1학년 1학기 통합교과 4. 탐험 — 48차시 ([바른 생활] 몸으로 떠나는 탐험: 움직임 놀이)
 * 1~12차시 제자리 움직임: 자리를 옮기지 않는 움직임·균형 자세 찾기(1~4) → 몸 글자·높낮이·동상·거울 놀이(5~8) → 오래 버틴 자세 기록·다시 하기(9~12)
 * 13~24차시 걷기와 달리기: 걷기·달리기의 다른 점과 빠르기(13~16) → 고깔 길·이어달리기(17~20) → 즐거웠던 때와 바꿀 길·빠르기(21~24)
 * 25~36차시 뜀뛰기: 멀리·높이 뛰기와 내려앉기(25~28) → 줄 넘고 높이 올리기(29~32) → 넘은 높이 기록·무섭지 않게 뛰기(33~36)
 * 37~48차시 도구 다루기: 던지기·굴리기와 안전(37~40) → 짝과 공 주고받기(41~44) → 잘된 때·친구를 도운 말 돌아보기(45~47) → 단원 정리(48)
 * 교구는 실제 움직임을 판정하지 않는다. 움직임은 free 짝 활동·task·교사 발문·활동지로 하고, 교구는 나누기·차례·계획·기록·스스로 점검을 맡는다.
 * 성취기준: units-map 단원 목록이 비어 있고 미확인(standardsVerified:false)이라 모든 차시 standards: [] (지어내지 않는다).
 * 예문·놀이 말은 모두 직접 지었다. 학생 이름은 가명(민지·준호·하준·서아)만 쓴다.
 */
(function () {
  var UNIT = 'g1-통합교과-1학기-4';
  var TITLE = '4. 탐험';
  var HEAD = 'Layered paper-cut illustration of ';
  var TAIL = ', with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.';
  function two(n) { return (n < 10 ? '0' : '') + n; }
  function L(n, x) {
    var head = {
      id: 'g1-int-1-04-' + two(n), schema: 'edu-lesson.v1', catalog: { unit: UNIT, lesson: n },
      grade: 1, subject: '통합교과', unitTitle: TITLE,
    };
    var tail = { standards: [], minutes: 40, formats: ['chromebook', 'projector', 'print'] };
    var out = {};
    [head, { title: x.title, objective: x.objective }, tail].forEach(function (o) { for (var k in o) out[k] = o[k]; });
    for (var k in x) if (!(k in out)) out[k] = x[k];
    return out;
  }
  function ART(what, text, more) {
    return {
      prompt: HEAD + what + TAIL,
      scene: { viewBox: [480, 270], layers: [
        { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 110, y: 52 }, { motif: 'hills', y: 204 },
      ].concat(more || []).concat([{ motif: 'text', x: 240, y: 140, text: text, size: 22 }]) },
    };
  }
  var MOOD = { type: 'mood', prompt: '오늘 몸 탐험을 마친 내 마음은 어떤가요?' };
  // 카드 판 교구 단계: 쉬움은 맞는 칸에 초록 테두리·틀린 칸은 바로 되돌림, 도전은 문항마다 카드를 더 넣는다
  var CARD_LV = { easy: { live: true, instant: true }, base: {}, challenge: {} };
  // 안전 약속
  var SPACE = '친구와 두 팔을 벌려 닿지 않을 만큼 떨어져요.';
  var FLOOR = '바닥에 물기나 떨어진 물건이 없는지 먼저 살펴요.';
  var STOP = '어지럽거나 숨이 너무 차면 바로 멈추고 선생님께 말해요.';
  var LOOK = '움직이기 전에 가는 쪽을 먼저 보고, 멈춤 신호에 바로 서요.';
  var SHOE = '실내화 뒤축을 꺾어 신지 않고, 신발 끈을 단단히 묶어요.';
  var LAND = '뛰고 내려올 때는 무릎을 살짝 굽혀 두 발로 내려앉아요.';
  var TOOL = '도구는 친구 얼굴 쪽으로 던지지 않고, 친구가 준비되었는지 보고 보내요.';
  // 몸 그림(콜라주): 머리·몸통은 접는 선 위에 놓는다
  var HEADP = { shape: 'circle', color: '노랑', size: 'm', x: 280, y: 80, r: 0 };
  var BODYP = { shape: 'rect', color: '파랑', size: 'l', x: 280, y: 180, r: 90 };

  var lessons = [];

  // ───────────────────────── 1~4차시: 제자리 움직임 찾기·균형 자세 가르기 ─────────────────────────

  lessons.push(L(1, {
    title: '몸 탐험대 출발! 제자리에서 움직여 보기',
    objective: '자리를 옮기지 않고 할 수 있는 움직임을 몸으로 해 보고, 제자리 움직임과 자리를 옮기는 움직임으로 나눌 수 있다.',
    illustration: ART('a group of first graders wearing paper explorer hats, standing on their own small paper circles and stretching arms and necks in place in a sunny classroom', '제자리에서도 움직여요!', [
      { motif: 'tree', x: 90, y: 214 }, { motif: 'flower', x: 380, y: 228 }, { motif: 'star', x: 330, y: 100, s: 0.7 }]),
    safety: [SPACE, FLOOR, STOP],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"오늘부터 우리는 몸 탐험대예요. 첫 탐험지는 바로 내 몸이에요." 바닥에 붙인 동그라미(또는 의자 앞 자리)에 서게 한다. "발을 한 발짝도 떼지 않고 움직일 수 있을까요?" 학생들이 "못 움직여요"라고 하면 교사가 팔을 크게 돌리고 고개를 끄덕여 보인다. "자리를 옮기지 않아도 움직임이에요." 자리를 옮겨야만 움직임이라고 여기는 생각을 여기서 짚는다.',
        student: '내 동그라미 안에서 발을 떼지 않고 몸을 움직여 봐요. 어디를 움직였나요?',
        demo: { tool: 'mindmap', options: { topic: '어떤 움직임일까?', slots: ['제자리에서 해요', '자리를 옮겨요'], cards: ['고개 끄덕이기', '문까지 걸어가기'], shuffle: false }, sequence: [{ sort: { '제자리에서 해요': ['고개 끄덕이기'], '자리를 옮겨요': ['문까지 걸어가기'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 제자리 움직임과 옮기는 움직임 나누기', minutes: 14, tool: 'mindmap',
            teacher: '"카드에 적힌 대로 먼저 몸으로 해 봐요. 발이 동그라미 밖으로 나갔나요?" 카드마다 실제로 해 본 뒤 놓게 한다. "제자리 뛰기는 뛰니까 자리를 옮긴 거예요?"라는 질문이 나오면 "내려앉은 곳이 처음 동그라미 안이었나요?"라고 되묻는다.',
            task: '카드의 움직임을 내 동그라미 안에서 해 보고, 제자리에서 하는 것과 자리를 옮기는 것으로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '카드의 움직임을 해 보고 제자리 움직임과 자리를 옮기는 움직임으로 나누어 보세요.', toolOptions: { topic: '어떤 움직임일까?', slots: ['제자리에서 해요', '자리를 옮겨요'], cards: ['팔 크게 돌리기', '고개 좌우로 돌리기', '교실 뒤까지 걷기', '친구 자리로 기어가기'] },
                target: { sort: { '제자리에서 해요': ['팔 크게 돌리기', '고개 좌우로 돌리기'], '자리를 옮겨요': ['교실 뒤까지 걷기', '친구 자리로 기어가기'] } }, difficulty: 0.05 },
              { prompt: '이번 카드도 나누어 보세요. 뛰는 움직임은 내려앉은 곳을 떠올려요.', toolOptions: { topic: '어떤 움직임일까?', slots: ['제자리에서 해요', '자리를 옮겨요'], cards: ['제자리에서 콩콩 뛰기', '무릎 굽혔다 펴기', '토끼처럼 깡충깡충 앞으로 가기', '공 주우러 달려가기'] },
                target: { sort: { '제자리에서 해요': ['제자리에서 콩콩 뛰기', '무릎 굽혔다 펴기'], '자리를 옮겨요': ['토끼처럼 깡충깡충 앞으로 가기', '공 주우러 달려가기'] } }, difficulty: 0.15,
                predict: { q: '제자리에서 콩콩 뛰기는 어디에 놓을까요?', options: ['제자리', '자리를 옮겨요'], answer: 0 },
                conclude: '뛰어도 처음 자리에 다시 내려앉으면 제자리 움직임이에요.',
                levels: { challenge: { prompt: '카드 다섯 장을 나누어 보세요. 뛰거나 도는 움직임은 끝난 자리를 떠올려요.', toolOptions: { cards: ['제자리에서 콩콩 뛰기', '무릎 굽혔다 펴기', '토끼처럼 깡충깡충 앞으로 가기', '공 주우러 달려가기', '제자리에서 빙글 한 바퀴 돌기'] },
                  target: { sort: { '제자리에서 해요': ['제자리에서 콩콩 뛰기', '무릎 굽혔다 펴기', '제자리에서 빙글 한 바퀴 돌기'], '자리를 옮겨요': ['토끼처럼 깡충깡충 앞으로 가기', '공 주우러 달려가기'] } } } } },
              { prompt: '짝과 마주 보고, 제자리 움직임 세 가지를 번갈아 몸으로 보여 주며 이름을 말해요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 어디가 움직였는지 몸 그림에서 찾기', minutes: 12, tool: 'body',
            teacher: '"선생님이 말하는 대로 해 보세요. 고개를 \'네네\' 끄덕여요. 어디가 움직이나요?" 손으로 그 곳을 짚게 한 뒤 몸 그림에서 고르게 한다. 머리 전체를 고르는 학생에게 "머리가 몸에 붙은 곳, 접히는 곳은 어디일까요?"라고 묻는다.',
            task: '말한 대로 몸을 움직여 보고, 움직인 곳을 손으로 짚은 뒤 몸 그림에서 눌러요.',
            levels: {
              easy: { mode: 'parts', parts: ['목', '어깨', '손목', '발목'], names: true },
              base: { mode: 'parts', parts: ['목', '어깨', '팔꿈치', '손목', '허리', '무릎', '발목'] },
              challenge: { mode: 'parts' },
            },
            items: [
              { prompt: '고개를 \'네네\' 하고 끄덕여 보세요. 움직인 곳을 눌러요.', target: { parts: ['목'] }, difficulty: 0.05,
                hints: ['고개를 끄덕일 때 손을 머리 아래 접히는 곳에 대 보세요.', '고른 곳을 손으로 짚고 고개를 다시 끄덕여 보세요. 그곳이 움직이나요?', '머리와 몸통 사이, 고개를 받치는 곳이 목이에요.'] },
              { prompt: '\'몰라요\' 하듯 두 어깨를 귀 쪽으로 으쓱 올려 보세요. 움직인 곳을 눌러요.', target: { parts: ['어깨'] }, difficulty: 0.1,
                hints: ['으쓱할 때 위로 올라가는 곳에 두 손을 얹어 보세요.', '고른 곳이 정말 귀 쪽으로 올라갔나요? 다시 해 보며 손으로 짚어요.', '목 양옆 아래, 팔이 시작되는 둥근 곳이 어깨예요.'] },
              { prompt: '문손잡이를 돌리듯 손을 빙글빙글 돌려 보세요. 팔은 가만히 두고, 움직인 곳을 눌러요.', target: { parts: ['손목'] }, difficulty: 0.15,
                hints: ['팔은 가만히 두고 손만 돌릴 때, 접히는 곳을 다른 손으로 잡아 보세요.', '팔꿈치는 가만히 있었지요? 손과 팔이 만나는 곳을 살펴요.', '손과 팔 사이, 시계를 차는 곳이 손목이에요.'] },
              { prompt: '한 발을 들고 발끝으로 바닥에 동그라미를 그려 보세요. 움직인 곳을 눌러요.', target: { parts: ['발목'] }, difficulty: 0.15,
                hints: ['다리는 가만히 두고 발끝만 돌릴 때 어디가 꺾이는지 보세요.', '무릎은 가만히 있었지요? 발과 다리가 만나는 곳을 살펴요.', '발과 다리 사이, 양말 목이 닿는 곳이 발목이에요.'] },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"자리를 옮기지 않아도 움직임이라고 할 수 있을까요? 왜 그렇게 생각해요?" 두세 명의 까닭을 듣는다. 다음 시간에는 제자리에서 오래 버틸 수 있는 자세를 찾는다고 알린다. 숨을 크게 세 번 쉬며 마친다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '어떤 움직임일까?', slots: ['제자리에서 해요', '자리를 옮겨요'], cards: ['허리 옆으로 굽히기', '칠판까지 걸어가기', '손뼉 치기'] }, prompt: '세 움직임을 제자리 움직임과 자리를 옮기는 움직임으로 나누어 보세요.', target: { sort: { '제자리에서 해요': ['허리 옆으로 굽히기', '손뼉 치기'], '자리를 옮겨요': ['칠판까지 걸어가기'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '발을 떼지 않고 팔을 크게 돌렸어요. 이것도 움직임일까요?', options: ['네, 움직임이에요', '아니요, 자리를 옮겨야 움직임이에요'], answer: 0, difficulty: 0.1, explain: '자리를 옮기지 않고 몸의 한 곳을 움직여도 움직임이에요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '제자리에서 움직여요',
      items: [
        { type: 'choice', prompt: '제자리에서 하는 움직임에 ○ 하세요.', options: ['고개 끄덕이기', '운동장 한 바퀴 달리기', '친구에게 걸어가기'], answer: '고개 끄덕이기' },
        { type: 'table', prompt: '오늘 해 본 움직임을 나누어 쓰세요.', columns: ['제자리에서 해요', '자리를 옮겨요'], rows: 2 },
        { type: 'check', prompt: '오늘 움직여 본 곳에 ✓ 하세요.', options: ['목', '어깨', '손목', '발목'] },
        { type: 'draw', prompt: '내 동그라미 안에서 움직이는 내 모습을 그려 보세요.' },
      ],
      easy: {
        note: '발이 동그라미 밖으로 나가면 자리를 옮긴 거예요.',
        items: [
          { type: 'choice', prompt: '제자리 움직임에 ○ 하세요.', options: ['팔 돌리기', '달려가기'], answer: '팔 돌리기' },
          { type: 'check', prompt: '오늘 움직여 본 곳에 ✓ 하세요.', options: ['목', '어깨', '발목'] },
          { type: 'draw', prompt: '제자리에서 움직이는 내 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 놓으면 초록 테두리가 생기고, 틀리면 카드가 돌아와요. 몸 그림은 네 곳만 고르고 이름이 보여요.',
      base: '모두 놓은 뒤 확인을 눌러요. 몸 그림에서 일곱 곳 가운데 골라요.',
      challenge: '도는 움직임 카드가 하나 더 있어요. 몸 그림은 눈·귀·코까지 열세 곳에서 골라요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 자리를 옮겨야만 움직임이라고 여긴다 → 발을 바닥에 붙이고 팔만 돌려 보게 한다. ② 제자리 뛰기를 자리를 옮긴 것으로 놓는다 → 바닥에 붙인 동그라미 안에 다시 내려앉는지 직접 본다. ③ 목 대신 머리, 손목 대신 손을 짚는다 → "접히는 곳"을 손가락으로 잡게 한다. 동그라미 사이는 두 팔 간격을 넘게 둔다.',
  }));

  lessons.push(L(2, {
    title: '바닥에 닿은 곳을 세어 균형 자세 견주기',
    objective: '바닥에 닿은 곳의 수를 세어 균형 잡기 쉬운 자세와 어려운 자세를 가를 수 있다.',
    illustration: ART('children trying different balance poses on paper mats: standing on two feet, standing on one foot like a flamingo, and kneeling on hands and knees, with small counting dots under each pose', '바닥에 몇 곳이 닿았나요?', [
      { motif: 'tree', x: 80, y: 214 }, { motif: 'bird', x: 360, y: 90 }, { motif: 'flower', x: 400, y: 228 }]),
    safety: [SPACE, FLOOR, '한 발 서기에서 넘어질 것 같으면 바로 두 발을 내려요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"두 발로 서 보세요. 이제 한 발을 들어 보세요. 어느 쪽이 더 흔들려요?" 모두 해 본 뒤 묻는다. "바닥에 닿은 곳이 몇 군데였나요?" 두 발은 두 곳, 한 발은 한 곳이라는 것을 손가락으로 센다. "오늘은 바닥에 닿은 곳을 세어서 균형 잡기 쉬운 자세와 어려운 자세를 찾아요."',
        student: '두 발로 서고, 한 발로 서 봐요. 어느 쪽이 더 흔들렸는지 짝에게 말해요.',
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 쉬운 자세부터 어려운 자세까지 줄 세우기', minutes: 14, tool: 'story',
            teacher: '"자세를 먼저 해 보고, 바닥에 닿은 곳을 손가락으로 세어요." 닿은 곳이 많을수록 균형 잡기가 쉽다는 기준을 칠판에 적는다. "나는 한 발 서기가 더 쉬운데요?"라는 학생에게는 오래 버틴 시간을 세어 견주게 하고, 기준은 바닥에 닿은 곳의 수라는 것을 다시 말한다.',
            task: '카드의 자세를 해 보고 바닥에 닿은 곳을 세어, 균형 잡기 쉬운 자세부터 차례로 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '바닥에 닿은 곳이 많은 자세부터 적은 자세 차례로 놓아 보세요.', toolOptions: { slots: ['가장 쉬워요', '중간이에요', '가장 어려워요'], cards: ['두 발로 서요', '두 손과 두 무릎을 바닥에 대요', '한 발로 서요'] },
                target: { order: ['두 손과 두 무릎을 바닥에 대요', '두 발로 서요', '한 발로 서요'] }, difficulty: 0.1,
                hints: ['자세마다 바닥에 닿은 곳을 손가락으로 세어 보세요. 많이 닿을수록 쉬워요.', '맨 앞 카드가 바닥에 닿은 곳이 가장 많은지 다시 세어 보세요.', '두 손 두 무릎은 네 곳, 두 발은 두 곳, 한 발은 한 곳이에요.'] },
              { prompt: '이번 세 자세도 바닥에 닿은 곳을 세어 쉬운 차례로 놓아 보세요.', toolOptions: { slots: ['가장 쉬워요', '중간이에요', '가장 어려워요'], cards: ['엉덩이와 두 손을 바닥에 대고 앉아요', '발끝으로 한 발 서요', '두 발을 넓게 벌리고 서요'] },
                target: { order: ['엉덩이와 두 손을 바닥에 대고 앉아요', '두 발을 넓게 벌리고 서요', '발끝으로 한 발 서요'] }, difficulty: 0.2,
                hints: ['앉은 자세는 엉덩이와 손이 모두 바닥에 닿아요. 하나씩 세어 보세요.', '두 발로 선 자세와 앉은 자세 가운데 닿은 곳이 더 많은 것은 무엇일까요?', '앉은 자세는 세 곳, 두 발 서기는 두 곳, 발끝 한 발 서기는 한 곳이에요.'],
                levels: { challenge: { prompt: '자세 네 개를 바닥에 닿은 곳을 세어 쉬운 차례로 놓아 보세요.', toolOptions: { slots: 4, cards: ['엉덩이와 두 손을 바닥에 대고 앉아요', '발끝으로 한 발 서요', '두 발을 넓게 벌리고 서요', '엎드려 두 손과 두 발로 버텨요'] },
                  target: { order: ['엎드려 두 손과 두 발로 버텨요', '엉덩이와 두 손을 바닥에 대고 앉아요', '두 발을 넓게 벌리고 서요', '발끝으로 한 발 서요'] } } } },
              { prompt: '한 곳만 바닥에 닿는 자세는 어려운 자세예요. 어려운 자세만 골라 보세요.', toolOptions: { mode: 'pick', cards: ['한 발로 서서 두 팔 벌리기', '두 발로 서서 손뼉 치기', '한 발로 서서 눈 감기', '바닥에 앉아 손 흔들기'] },
                target: { pick: ['한 발로 서서 두 팔 벌리기', '한 발로 서서 눈 감기'] }, difficulty: 0.15,
                hints: ['카드마다 바닥에 닿는 곳이 몇 군데인지 세어 보세요. 팔이나 눈은 바닥에 닿지 않아요.', '고른 카드 가운데 발이 두 개 닿거나 앉아 있는 것이 있는지 보세요.', '한 발로 선 카드 두 장만 바닥에 한 곳이 닿아요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 양쪽이 똑같은 균형 자세 꾸미기', minutes: 12, tool: 'collage',
            teacher: '"두 팔을 양쪽으로 똑같이 벌리면 덜 흔들려요. 한쪽 팔만 들면 어떨까요?" 직접 해 본 뒤 종이 몸에 팔다리를 붙여 양쪽이 똑같은 자세를 만든다. 접는 선을 몸 한가운데로 보고, 반대쪽 팔은 거울에 비친 방향으로 돌려야 한다는 것을 시연한다.',
            task: '종이 몸에 팔다리 조각을 붙여, 접는 선 양쪽이 똑같은 균형 자세를 만들어요. 만든 자세를 직접 해 봐요.',
            levels: {
              easy: { shapes: ['rect'], colors: ['빨강', '초록'], sizes: ['m'] },
              base: { shapes: ['rect', 'circle', 'square'], colors: ['빨강', '초록', '파랑', '노랑'] },
              challenge: {},
            },
            items: [
              { prompt: '왼팔이 붙어 있어요. 오른팔을 똑같이 붙여 양쪽이 같은 자세를 만들어 보세요.', state: { pieces: [HEADP, BODYP, { shape: 'rect', color: '빨강', size: 'm', x: 200, y: 140, r: 0 }] }, target: { symmetry: 'vertical' }, difficulty: 0.1,
                hints: ['몸 한가운데 접는 선을 거울이라고 생각해요. 왼팔이 거울에 비치면 어디에 생길까요?', '오른팔이 접는 선에서 왼팔과 같은 칸 수만큼 떨어져 있는지 세어 보세요.', '빨강 보통 긴 네모를 붙여 접는 선 오른쪽, 왼팔과 같은 높이·같은 거리에 놓아요.'] },
              { prompt: '왼팔과 왼다리가 붙어 있어요. 반대쪽을 똑같이 붙여 보세요.', state: { pieces: [HEADP, BODYP, { shape: 'rect', color: '빨강', size: 'm', x: 200, y: 120, r: 315 }, { shape: 'rect', color: '초록', size: 'm', x: 240, y: 300, r: 90 }] }, target: { symmetry: 'vertical' }, difficulty: 0.25,
                hints: ['비스듬한 팔은 반대쪽에서 거울처럼 반대로 기울어져야 해요.', '오른쪽 조각이 왼쪽과 같은 높이에 있는지, 기울기가 거꾸로인지 보세요.', '오른팔은 돌리기를 눌러 왼팔과 반대로 기울이고, 오른다리는 접는 선에서 왼다리와 같은 거리에 놓아요.'] },
              { prompt: '머리만 있어요. 양쪽이 똑같은 나만의 균형 자세를 조각 다섯 개 넘게 써서 만들어 보세요.', state: { pieces: [HEADP] }, target: { symmetry: 'vertical', pieces: { min: 6 } }, difficulty: 0.25,
                levels: { easy: { prompt: '머리만 있어요. 양쪽이 똑같은 균형 자세를 조각 세 개 넘게 써서 만들어 보세요.', target: { symmetry: 'vertical', pieces: { min: 4 } } } },
                hints: ['몸통은 접는 선 위에 놓고, 팔다리는 양쪽에 짝으로 붙여요.', '짝이 없는 조각이 있는지 하나씩 짚어 보세요.', '한쪽에 조각을 붙일 때마다 같은 조각을 반대쪽 같은 거리에 바로 붙여요.'] },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"균형 잡기가 쉬운지 어려운지 무엇을 세어 보았나요?" 대답을 듣고, 내가 만든 대칭 자세를 짝과 함께 해 본다. 다음 시간에는 동물 흉내 자세로 균형을 탐험한다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { slots: ['가장 쉬워요', '중간이에요', '가장 어려워요'], cards: ['한 발로 서서 손뼉 치기', '엎드려 두 손 두 발 짚기', '무릎 꿇고 앉기'] }, prompt: '바닥에 닿은 곳을 세어 균형 잡기 쉬운 차례로 놓아 보세요.', target: { order: ['엎드려 두 손 두 발 짚기', '무릎 꿇고 앉기', '한 발로 서서 손뼉 치기'] }, difficulty: 0.25,
            hints: ['바닥에 닿은 곳이 많을수록 균형 잡기 쉬워요.'] },
          { type: 'choice', prompt: '두 발로 설 때와 한 발로 설 때, 균형 잡기가 더 어려운 것은?', options: ['두 발로 설 때', '한 발로 설 때'], answer: 1, difficulty: 0.1, explain: '한 발로 서면 바닥에 닿은 곳이 한 곳뿐이라 더 흔들려요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '균형 잡기 쉬운 자세, 어려운 자세',
      items: [
        { type: 'table', prompt: '자세를 해 보고 바닥에 닿은 곳의 수를 쓰세요.', columns: ['자세', '닿은 곳'], cells: [['두 발로 서기', ''], ['한 발로 서기', ''], ['두 손 두 무릎 대기', '']] },
        { type: 'choice', prompt: '균형 잡기가 가장 쉬운 자세에 ○ 하세요.', options: ['한 발로 서기', '두 발로 서기', '두 손 두 무릎 대기'], answer: '두 손 두 무릎 대기' },
        { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '바닥에 닿은 곳이 ___수록 균형 잡기가 쉬워요.', answer: '많을' },
        { type: 'draw', prompt: '양쪽이 똑같은 내 균형 자세를 그려 보세요.' },
      ],
      easy: {
        note: '바닥에 닿은 곳을 손가락으로 세어 봐요.',
        items: [
          { type: 'choice', prompt: '더 쉬운 자세에 ○ 하세요.', options: ['두 발로 서기', '한 발로 서기'], answer: '두 발로 서기' },
          { type: 'choice', prompt: '한 발로 서면 바닥에 몇 곳이 닿나요?', options: ['한 곳', '두 곳'], answer: '한 곳' },
          { type: 'draw', prompt: '내가 만든 균형 자세를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 초록 테두리가 생겨요. 콜라주는 긴 네모와 두 색만 있어 짝 조각을 찾기 쉬워요. 나만의 자세는 조각 네 개면 돼요.',
      base: '자세 세 개를 차례로 놓고, 모양·색 네 가지로 대칭 자세를 꾸며요.',
      challenge: '자세 네 개를 차례로 놓아요. 콜라주는 모든 모양과 색이 나와 짝을 스스로 골라야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 내가 잘하는 자세가 쉬운 자세라고 여긴다 → 기준은 바닥에 닿은 곳의 수라는 것을 되짚는다. ② 팔이나 눈도 닿은 곳으로 센다 → 바닥에 손을 대 보며 "닿았나요?" 하고 묻는다. ③ 콜라주에서 반대쪽 팔을 같은 방향으로 붙인다 → 거울 앞에서 오른손을 들면 거울 속은 어느 손인지 보여 준다.',
  }));

  lessons.push(L(3, {
    title: '동물 흉내 자세로 균형 탐험하기',
    objective: '동물 흉내 제자리 자세를 해 보고, 자세와 동물을 이으며 바닥에 닿은 곳으로 균형 잡기 쉬운 자세를 가를 수 있다.',
    illustration: ART('paper children copying animal poses on a grassy explorer trail: a flamingo standing on one leg, a turtle curled up, a cat arching its back, a giraffe on tiptoe', '동물처럼 버텨 봐요', [
      { motif: 'tree', x: 70, y: 214 }, { motif: 'bird', x: 330, y: 92 }, { motif: 'flower', x: 410, y: 228 }]),
    safety: [SPACE, FLOOR, '엎드리거나 웅크릴 때는 바닥에 매트를 깔고, 머리를 바닥에 부딪히지 않아요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"오늘 탐험지는 동물 숲이에요. 홍학은 한 발로 서서 잠을 잔대요. 우리도 홍학처럼 서 볼까요?" 다 같이 한 발로 서 본 뒤 묻는다. "지난 시간에 배운 대로, 바닥에 몇 곳이 닿았나요?" 동물 흉내도 자리를 옮기지 않는 제자리 움직임이라는 것을 짚는다.',
        student: '홍학처럼 한 발로 서 봐요. 바닥에 몇 곳이 닿았는지 세어 봐요.',
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 자세와 동물 이어 보기', minutes: 13, tool: 'mindmap',
            teacher: '"카드에 적힌 자세를 먼저 해 보세요. 어떤 동물이 떠오르나요?" 한 모둠씩 자세를 보여 주고 다른 모둠이 동물을 맞힌다. 동물 이름만 보고 짐작하는 학생에게 "그 동물은 다리가 몇 개 바닥에 닿아 있을까요?"라고 묻는다.',
            task: '자세 설명을 읽고 몸으로 해 본 뒤, 어울리는 동물 카드를 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '자세마다 어울리는 동물 카드를 이어 보세요.', toolOptions: { mode: 'match', topic: '어떤 동물일까?', slots: [{ id: 's1', label: '한 발로 서서 다른 발을 들어요' }, { id: 's2', label: '등을 둥글게 말고 웅크려요' }, { id: 's3', label: '발끝으로 서서 목을 길게 빼요' }], cards: ['홍학', '거북', '기린'] },
                target: { match: { s1: '홍학', s2: '거북', s3: '기린' } }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['홍학', '거북', '기린', '치타'] } } } },
              { prompt: '이번 자세에도 어울리는 동물 카드를 이어 보세요.', toolOptions: { mode: 'match', topic: '어떤 동물일까?', slots: [{ id: 's1', label: '네 발로 서서 등을 위로 둥글게 올려요' }, { id: 's2', label: '엎드려 두 팔로 몸을 들고 고개를 들어요' }, { id: 's3', label: '쪼그려 앉아 두 손을 발 앞에 대요' }], cards: ['고양이', '물개', '개구리'] },
                target: { match: { s1: '고양이', s2: '물개', s3: '개구리' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['고양이', '물개', '개구리', '홍학'] } } } },
              { prompt: '동물 자세를 바닥에 닿은 곳으로 나누어 보세요. 한 곳만 닿으면 어려운 자세예요.', toolOptions: { topic: '균형 잡기', slots: ['여러 곳이 닿아 쉬워요', '한 곳만 닿아 어려워요'], cards: ['홍학: 한 발로 서요', '거북: 웅크려 엎드려요', '고양이: 네 발로 서요', '황새: 한 발로 서서 날개를 펴요'] },
                target: { sort: { '여러 곳이 닿아 쉬워요': ['거북: 웅크려 엎드려요', '고양이: 네 발로 서요'], '한 곳만 닿아 어려워요': ['홍학: 한 발로 서요', '황새: 한 발로 서서 날개를 펴요'] } }, difficulty: 0.15,
                hints: ['카드마다 자세를 해 보고 바닥에 닿는 곳을 손가락으로 세어 보세요.', '어려운 칸에 놓은 카드가 정말 한 곳만 바닥에 닿는지 다시 세어 보세요.', '한 발로 서는 홍학과 황새는 한 곳, 거북과 고양이는 여러 곳이 닿아요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 동물 자세 버티기 계획과 기록', minutes: 13, tool: 'timer',
            teacher: '"홍학 자세로 열을 셀 동안 버티고, 다섯을 셀 동안 쉬어요. 이것을 세 번 해요." 판의 수를 함께 읽고 맞추게 한다. 버티기를 하기 전에 둘레를 먼저 점검한다. 기록은 친구와 견주지 않고 내가 센 수만 적는다고 말한다.',
            task: '버티기 전에 둘레를 점검하고, 버티기·쉬기 시간을 맞춘 뒤, 홍학 자세로 버틴 수를 세어 적어요.',
            levels: { easy: {}, base: {}, challenge: { stopwatch: true } },
            items: [
              { prompt: '동물 자세를 하기 전에 둘레를 둘러보고 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['내 둘레에 부딪힐 물건이 없어요', '바닥이 미끄럽지 않아요', '짝과 두 팔 간격으로 떨어졌어요'] }, target: { safety: true }, difficulty: 0.05 },
              { prompt: '운동 칸은 홍학 자세로 버티는 시간이에요. 운동 10초, 쉬기 5초, 3번으로 판을 맞추어요.', toolOptions: { title: '홍학 버티기', plan: { work: 20, rest: 10, rounds: 2 } }, target: { plan: { work: 10, rest: 5, rounds: 3 } }, difficulty: 0.2,
                levels: { easy: { state: { plan: { work: 10, rest: 10, rounds: 3 } } }, challenge: { prompt: '운동 칸은 홍학 자세로 버티는 시간이에요. 운동 15초, 쉬기 5초, 4번으로 판을 맞추어요.', target: { plan: { work: 15, rest: 5, rounds: 4 } } } } },
              { prompt: '짝이 수를 세어 주는 동안 홍학 자세로 버티고, 버틴 수를 세 번 적어요.', toolOptions: { title: '홍학 버티기 기록', fields: ['1회', '2회', '3회'], unit: '까지' }, target: { records: true }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { fields: ['1회', '2회', '3회', { label: '가장 많이 센 수', unit: '까지' }] } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 버틴 동물 자세 가운데 바닥에 한 곳만 닿은 것은 무엇이었나요?" 기록을 친구와 견주려는 학생에게 "어제의 나, 첫 번째의 나와 견주어요"라고 말한다. 다음 시간에는 좁은 곳에서도 할 수 있는 움직임을 찾는다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '어떤 동물일까?', slots: [{ id: 'e1', label: '두 팔을 옆으로 펴고 한 발로 서요' }, { id: 'e2', label: '배를 바닥에 대고 엎드려 기어요' }], cards: ['독수리', '악어'] }, prompt: '두 자세에 어울리는 동물 카드를 이어 보세요.', target: { match: { e1: '독수리', e2: '악어' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '거북처럼 웅크린 자세와 홍학처럼 한 발로 선 자세 가운데 균형 잡기가 더 쉬운 것은?', options: ['거북 자세', '홍학 자세'], answer: 0, difficulty: 0.15, explain: '거북 자세는 바닥에 닿은 곳이 많아서 덜 흔들려요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '동물처럼 버텨 봐요',
      items: [
        { type: 'figure', wide: true, prompt: '자세와 어울리는 동물을 선으로 이으세요.', tool: 'mindmap', figures: [{ options: { mode: 'match', topic: '어떤 동물?', slots: [{ id: 's1', label: '한 발로 서요' }, { id: 's2', label: '웅크려요' }], cards: ['홍학', '거북'] }, caption: '' }], answer: '한 발로 서요-홍학, 웅크려요-거북' },
        { type: 'table', prompt: '홍학 자세로 버틴 수를 쓰세요.', columns: ['1회', '2회', '3회'], rows: 1 },
        { type: 'choice', prompt: '균형 잡기가 더 어려운 동물 자세에 ○ 하세요.', options: ['고양이 자세', '홍학 자세'], answer: '홍학 자세' },
        { type: 'draw', prompt: '내가 가장 좋아하는 동물 자세를 그려 보세요.' },
      ],
      easy: {
        note: '바닥에 닿은 곳이 적을수록 어려워요.',
        items: [
          { type: 'choice', prompt: '한 발로 서는 동물에 ○ 하세요.', options: ['홍학', '거북'], answer: '홍학' },
          { type: 'short', prompt: '홍학 자세로 몇까지 세었는지 쓰세요.' },
          { type: 'draw', prompt: '좋아하는 동물 자세를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 버티기 판은 쉬기 시간만 바꾸면 돼요.',
      base: '자세 세 개를 동물과 잇고, 버티기·쉬기·횟수를 모두 맞추어요.',
      challenge: '자세에 맞지 않는 동물 카드가 하나 더 있어요. 더 긴 버티기를 계획하고, 시간 재기로 직접 재요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 동물 이름만 보고 짐작한다 → 반드시 자세를 먼저 몸으로 해 보게 한다. ② 버틴 수를 크게 부풀린다 → 짝이 소리 내어 세어 주게 한다. ③ 웅크린 자세에서 머리를 바닥에 박는다 → 매트 위에서 하고, 턱을 당기게 한다. 기록은 남과 견주지 않는다.',
  }));

  lessons.push(L(4, {
    title: '좁은 곳에서도 하는 제자리 움직임 고르기',
    objective: '좁은 곳에서 부딪히지 않고 할 수 있는 제자리 움직임을 고르고, 균형을 쉽게 하는 방법과 어렵게 하는 방법을 가를 수 있다.',
    illustration: ART('children waiting in a line at a bus stop and sitting at desks in a small rainy-day classroom, quietly rolling shoulders and ankles in place', '좁은 곳에서도 움직여요', [
      { motif: 'cloud', x: 330, y: 70, color: 'sky' }, { motif: 'house', x: 100, y: 214 }, { motif: 'tree', x: 400, y: 214 }]),
    safety: [SPACE, '책상과 의자 사이에서는 팔을 크게 휘두르지 않아요.', STOP],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"비가 와서 운동장에 못 나가는 날이에요. 교실에서는 몸을 하나도 못 움직일까요?" 학생들의 생각을 들은 뒤, 자리에 앉은 채로 어깨를 으쓱하고 손목을 돌려 보인다. "좁아도 자리를 옮기지 않는 움직임은 할 수 있어요. 오늘은 좁은 곳 탐험이에요."',
        student: '의자에 앉은 채로 움직일 수 있는 곳을 찾아 움직여 봐요.',
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 좁은 곳에서 할 수 있는 움직임 고르기', minutes: 13, tool: 'mindmap',
            teacher: '"이 움직임을 교실 내 자리에서 하면 친구와 부딪힐까요?" 카드마다 자리에서 해 보고 고르게 한다. 크게 도는 움직임을 고르는 학생에게 "팔을 쭉 벌리고 돌면 옆 친구는 어떻게 될까요?"라고 묻는다.',
            task: '상황을 읽고, 그 곳에서 친구와 부딪히지 않고 할 수 있는 움직임만 골라 바구니에 넣어요.',
            levels: CARD_LV,
            items: [
              { prompt: '비 오는 날 교실 내 자리에서 할 수 있는 움직임만 골라 보세요.', toolOptions: { mode: 'pick', basket: '내 자리에서 해요', cards: ['어깨 으쓱하기', '앉아서 무릎 폈다 굽히기', '교실 한 바퀴 뛰기', '팔 벌리고 빙글빙글 돌며 걷기'] },
                target: { pick: ['어깨 으쓱하기', '앉아서 무릎 폈다 굽히기'] }, difficulty: 0.1 },
              { prompt: '버스 정류장에서 줄 서서 기다릴 때 할 수 있는 움직임만 골라 보세요.', toolOptions: { mode: 'pick', basket: '줄 서서 해요', cards: ['발목 돌리기', '주먹 쥐었다 펴기', '정류장 둘레 달리기', '앞 친구 어깨 밀기'] },
                target: { pick: ['발목 돌리기', '주먹 쥐었다 펴기'] }, difficulty: 0.15,
                levels: { challenge: { prompt: '버스 정류장에서 줄 서서 할 수 있는 움직임만 골라 보세요. 카드가 더 많아요.', toolOptions: { cards: ['발목 돌리기', '주먹 쥐었다 펴기', '정류장 둘레 달리기', '앞 친구 어깨 밀기', '고개 천천히 돌리기', '길로 깡충 뛰어나가기'] },
                  target: { pick: ['발목 돌리기', '주먹 쥐었다 펴기', '고개 천천히 돌리기'] } } } },
              { prompt: '짝과 자리에 앉아, 좁은 곳에서 하는 제자리 움직임 두 가지를 번갈아 보여 주고 따라 해요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 균형이 쉬워지는 방법, 어려워지는 방법', minutes: 13, tool: 'mindmap',
            teacher: '"한 발로 서서 두 팔을 벌려 보세요. 이번엔 눈을 감아 보세요. 어느 쪽이 더 흔들려요?" 카드마다 한 발 서기로 직접 견주어 보고 놓게 한다. 한 번 해 보고 결정이 어려우면 짝과 번갈아 해 본다.',
            task: '한 발 서기를 하며 카드의 방법을 해 보고, 균형이 더 쉬워지는지 어려워지는지 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '한 발로 서서 카드의 방법을 해 보고 나누어 보세요.', toolOptions: { topic: '한 발 서기', slots: ['더 쉬워져요', '더 어려워져요'], cards: ['두 팔을 옆으로 벌려요', '눈을 감아요', '들지 않은 발을 바닥 가까이 내려요', '발끝으로 서요'] },
                target: { sort: { '더 쉬워져요': ['두 팔을 옆으로 벌려요', '들지 않은 발을 바닥 가까이 내려요'], '더 어려워져요': ['눈을 감아요', '발끝으로 서요'] } }, difficulty: 0.15,
                hints: ['카드마다 한 발 서기를 하면서 직접 해 보고, 더 흔들렸는지 덜 흔들렸는지 견주어 보세요.', '어려워져요 칸의 카드를 다시 해 보세요. 정말 더 흔들렸나요?', '팔을 벌리면 덜 흔들리고, 눈을 감거나 발끝으로 서면 더 흔들려요.'] },
              { prompt: '이번 방법도 한 발 서기를 하며 나누어 보세요.', toolOptions: { topic: '한 발 서기', slots: ['더 쉬워져요', '더 어려워져요'], cards: ['앞의 한 곳을 바라봐요', '고개를 이리저리 돌려요', '벽을 한 손으로 짚어요', '한 발로 서서 콩콩 뛰어요'] },
                target: { sort: { '더 쉬워져요': ['앞의 한 곳을 바라봐요', '벽을 한 손으로 짚어요'], '더 어려워져요': ['고개를 이리저리 돌려요', '한 발로 서서 콩콩 뛰어요'] } }, difficulty: 0.2,
                hints: ['카드의 방법을 한 발 서기에 더해 직접 해 보세요. 바닥이나 벽에 닿는 곳이 늘어나는지도 보세요.', '쉬워져요 칸의 카드를 다시 해 보세요. 덜 흔들렸나요?', '한 곳 바라보기와 벽 짚기는 쉬워지고, 고개 돌리기와 콩콩 뛰기는 어려워져요.'],
                levels: { challenge: { prompt: '여섯 가지 방법을 한 발 서기를 하며 나누어 보세요.', toolOptions: { cards: ['앞의 한 곳을 바라봐요', '고개를 이리저리 돌려요', '벽을 한 손으로 짚어요', '한 발로 서서 콩콩 뛰어요', '두 발을 어깨만큼 벌려 내려요', '두 손을 머리 위로 모아요'] },
                  target: { sort: { '더 쉬워져요': ['앞의 한 곳을 바라봐요', '벽을 한 손으로 짚어요', '두 발을 어깨만큼 벌려 내려요'], '더 어려워져요': ['고개를 이리저리 돌려요', '한 발로 서서 콩콩 뛰어요', '두 손을 머리 위로 모아요'] } } } } },
              { prompt: '짝과 \'쉬워져요\' 방법을 하나씩 골라 한 발 서기를 해 보고, 열까지 버텼는지 서로 말해요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"좁은 교실에서도 움직일 수 있었나요? 어떤 움직임이 좋았나요?" 쉬는 시간에 할 수 있는 \'자리 체조\' 두 가지를 반 전체가 정한다. 다음 시간에는 몸으로 글자를 만들어 멈추는 놀이를 한다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', basket: '엘리베이터 안에서 해요', cards: ['손목 돌리기', '어깨 으쓱하기', '팔 크게 휘두르기', '제자리에서 높이 뛰기'] }, prompt: '사람이 많은 엘리베이터 안에서 할 수 있는 움직임만 골라 보세요.', target: { pick: ['손목 돌리기', '어깨 으쓱하기'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '한 발 서기를 할 때 균형이 더 쉬워지는 방법은?', options: ['눈을 감아요', '두 팔을 옆으로 벌려요', '고개를 빨리 돌려요'], answer: 1, difficulty: 0.15, explain: '두 팔을 벌리면 흔들릴 때 몸을 바로잡기 쉬워요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '좁은 곳에서도 움직여요',
      items: [
        { type: 'choice', prompt: '내 자리에 앉아서 할 수 있는 움직임에 ○ 하세요.', options: ['손목 돌리기', '복도 달리기', '팔 벌리고 빙글 돌기'], answer: '손목 돌리기' },
        { type: 'table', prompt: '한 발 서기에서 쉬워지는 방법과 어려워지는 방법을 하나씩 쓰세요.', columns: ['쉬워져요', '어려워져요'], rows: 2 },
        { type: 'check', prompt: '쉬는 시간에 해 보고 싶은 자리 체조에 ✓ 하세요.', options: ['어깨 으쓱하기', '발목 돌리기', '주먹 쥐었다 펴기', '고개 천천히 돌리기'] },
        { type: 'draw', prompt: '좁은 곳에서 제자리 움직임을 하는 내 모습을 그려 보세요.' },
      ],
      easy: {
        note: '팔을 크게 휘두르면 옆 친구와 부딪혀요.',
        items: [
          { type: 'choice', prompt: '좁은 곳에서 할 수 있는 움직임에 ○ 하세요.', options: ['어깨 으쓱하기', '빙글빙글 뛰기'], answer: '어깨 으쓱하기' },
          { type: 'choice', prompt: '한 발 서기가 쉬워지는 방법에 ○ 하세요.', options: ['팔 벌리기', '눈 감기'], answer: '팔 벌리기' },
          { type: 'draw', prompt: '내 자리에서 움직이는 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '모두 놓은 뒤 확인을 눌러요. 카드마다 직접 해 보고 놓아요.',
      challenge: '고를 카드와 나눌 카드가 여섯 장으로 늘어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 좁은 곳에서는 움직일 수 없다고 여긴다 → 앉은 채로 손목·발목·어깨를 움직여 보인다. ② 눈을 감아도 똑같다고 한다 → 짝이 옆에서 지켜보며 몇까지 세는지 견주게 한다. ③ 벽 짚기를 "반칙"이라고 한다 → 처음 연습할 때 쓰는 도움이라고 알려 준다.',
  }));

  // ───────────────────────── 5~8차시: 몸 글자·높낮이·동상·거울 놀이 ─────────────────────────

  lessons.push(L(5, {
    title: '몸으로 글자 만들고 열까지 멈추기',
    objective: '몸으로 글자 모양을 만들어 열을 셀 때까지 멈추고, 짝이 만든 몸 글자를 알아볼 수 있다.',
    illustration: ART('children lying and standing on a big paper mat shaping Korean letters with their bodies, one child counting on fingers to ten', '몸으로 글자를 만들어요', [
      { motif: 'tree', x: 80, y: 214 }, { motif: 'star', x: 360, y: 96, s: 0.8 }, { motif: 'flower', x: 400, y: 230 }]),
    safety: [SPACE, '바닥에 누울 때는 매트 위에서 천천히 눕고, 친구 머리 쪽으로 다리를 뻗지 않아요.', STOP],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"선생님이 지금 무슨 글자일까요?" 차렷 자세로 곧게 서서 \'ㅣ\'를 만들고, 두 팔을 옆으로 펴서 \'ㅜ\'를 만들어 보인다. "몸으로도 글자를 만들 수 있어요. 그런데 글자를 만들고 바로 움직이면 친구가 알아볼 수 있을까요?" 멈추어 있는 것도 놀이의 중요한 부분이라는 것을 짚는다.',
        student: '선생님 몸이 무슨 글자인지 맞혀 봐요. 나도 몸으로 ㅣ를 만들어 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '몸 글자', slots: [{ id: 'i', label: 'ㅣ', big: 'ㅣ' }], cards: ['차렷 자세로 곧게 서요', '바닥에 누워 쭉 펴요'], shuffle: false }, sequence: [{ match: { i: '차렷 자세로 곧게 서요' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 글자와 몸 자세 잇기', minutes: 14, tool: 'mindmap',
            teacher: '"카드대로 몸을 만들고 짝이 앞에서 보세요. 어떤 글자로 보이나요?" 앞에서 본 모양인지 옆에서 본 모양인지 짝이 서는 자리를 알려 준다(ㄴ은 옆에서 본다). 다 이은 뒤에는 열까지 세며 멈춰 본다.',
            task: '자세 카드를 몸으로 만들어 짝에게 보여 주고, 어떤 글자 모양인지 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '글자마다 어울리는 몸 자세 카드를 이어 보세요.', toolOptions: { mode: 'match', topic: '몸 글자', slots: [{ id: 'i', label: 'ㅣ', big: 'ㅣ' }, { id: 'eu', label: 'ㅡ', big: 'ㅡ' }, { id: 'u', label: 'ㅜ', big: 'ㅜ' }], cards: ['차렷 자세로 곧게 서요', '바닥에 누워 몸을 쭉 펴요', '두 팔을 옆으로 쭉 펴고 서요'] },
                target: { match: { i: '차렷 자세로 곧게 서요', eu: '바닥에 누워 몸을 쭉 펴요', u: '두 팔을 옆으로 쭉 펴고 서요' } }, difficulty: 0.1,
                hints: ['카드대로 몸을 만들고, 몸의 줄이 세로인지 가로인지 살펴보세요.', '두 팔을 옆으로 펴면 위쪽에 가로줄이 하나 생겨요. 그런 글자를 찾아요.', '곧게 서면 ㅣ, 누우면 ㅡ, 두 팔을 펴고 서면 ㅜ예요.'] },
              { prompt: '이번 글자에도 어울리는 몸 자세 카드를 이어 보세요.', toolOptions: { mode: 'match', topic: '몸 글자', slots: [{ id: 's', label: 'ㅅ', big: 'ㅅ' }, { id: 'o', label: 'ㅇ', big: 'ㅇ' }, { id: 'a', label: 'ㅏ', big: 'ㅏ' }], cards: ['두 다리를 크게 벌리고 서요', '몸을 동그랗게 말고 웅크려요', '서서 한 팔만 옆으로 쭉 펴요'] },
                target: { match: { s: '두 다리를 크게 벌리고 서요', o: '몸을 동그랗게 말고 웅크려요', a: '서서 한 팔만 옆으로 쭉 펴요' } }, difficulty: 0.2,
                hints: ['카드대로 몸을 만들고, 짝이 앞에서 본 모양을 손가락으로 허공에 그려 보세요.', '한 팔만 펴면 세로줄 옆에 짧은 줄이 하나 생겨요. 그런 글자를 찾아요.', '다리를 벌리면 ㅅ, 동그랗게 말면 ㅇ, 한 팔만 펴면 ㅏ예요.'],
                levels: { challenge: { toolOptions: { cards: ['두 다리를 크게 벌리고 서요', '몸을 동그랗게 말고 웅크려요', '서서 한 팔만 옆으로 쭉 펴요', '제자리에서 콩콩 뛰어요'] } } } },
              { prompt: '짝에게 몸 글자 하나를 만들어 보여 주고 열까지 멈춰요. 짝이 무슨 글자인지 맞혀요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 몸 글자 놀이 계획 세우기', minutes: 12, tool: 'timer',
            teacher: '"열을 세는 동안 멈추면 몇 초쯤일까요? 열 초예요." 판의 숫자를 함께 읽는다. "멈추는 것도 놀이예요. 꼼짝 않고 버티면 친구가 글자를 알아맞힐 수 있어요." 기록은 멈춘 동안 센 수만 적는다.',
            task: '몸 글자 놀이의 차례를 세우고, 멈추기·쉬기 시간을 맞춘 뒤, 멈춘 동안 센 수를 적어요.',
            levels: { easy: {}, base: {}, challenge: { stopwatch: true } },
            items: [
              { prompt: '몸 글자 놀이를 하는 차례대로 카드를 놓아요.', toolOptions: { title: '몸 글자 놀이', cards: ['짝이 무슨 글자인지 맞혀요', '만들 글자를 정해요', '열까지 세며 멈춰요', '몸으로 글자를 만들어요'] }, target: { order: ['만들 글자를 정해요', '몸으로 글자를 만들어요', '열까지 세며 멈춰요', '짝이 무슨 글자인지 맞혀요'] }, difficulty: 0.15,
                levels: { easy: { state: { order: ['만들 글자를 정해요', '열까지 세며 멈춰요', '몸으로 글자를 만들어요', '짝이 무슨 글자인지 맞혀요'] } } },
                hints: ['놀이를 처음부터 끝까지 떠올려 보세요. 글자를 만들기 전에 무엇을 해야 할까요?', '멈추기는 글자를 만든 다음일까요, 만들기 전일까요?', '글자 정하기 → 몸으로 만들기 → 열까지 멈추기 → 짝이 맞히기 차례예요.'] },
              { prompt: '운동 칸은 몸 글자로 멈추는 시간이에요. 운동 10초, 쉬기 5초, 4번으로 판을 맞추어요.', toolOptions: { title: '몸 글자 멈추기', plan: { work: 20, rest: 10, rounds: 2 } }, target: { plan: { work: 10, rest: 5, rounds: 4 } }, difficulty: 0.2,
                levels: { easy: { state: { plan: { work: 10, rest: 10, rounds: 4 } } }, challenge: { prompt: '운동 칸은 몸 글자로 멈추는 시간이에요. 운동 15초, 쉬기 10초, 3번으로 판을 맞추어요.', target: { plan: { work: 15, rest: 10, rounds: 3 } } } } },
              { prompt: '세 가지 몸 글자를 만들어 멈추고, 멈춘 동안 센 수를 적어요.', toolOptions: { title: '멈춘 동안 센 수', fields: ['ㅣ', 'ㅅ', 'ㅇ'], unit: '까지' }, target: { records: true }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"멈추어 있는 것도 놀이였나요? 왜 그렇게 생각해요?" "멈춰 있으니 친구가 글자를 맞혔어요" 같은 대답을 받아 칠판에 적는다. 다음 시간에는 높게, 낮게 높이를 바꾸며 자세를 만든다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '몸 글자', slots: [{ id: 'n', label: 'ㄴ', big: 'ㄴ' }, { id: 'i2', label: 'ㅣ', big: 'ㅣ' }], cards: ['앉아서 두 다리를 앞으로 쭉 펴요', '두 팔을 몸에 붙이고 곧게 서요'] }, prompt: '두 글자에 어울리는 몸 자세 카드를 이어 보세요.', target: { match: { n: '앉아서 두 다리를 앞으로 쭉 펴요', i2: '두 팔을 몸에 붙이고 곧게 서요' } }, difficulty: 0.2 },
          { type: 'choice', prompt: '몸 글자를 만들고 바로 움직이면 어떻게 될까요?', options: ['친구가 글자를 알아보기 어려워요', '친구가 더 빨리 맞혀요'], answer: 0, difficulty: 0.1, explain: '멈추어 있어야 친구가 모양을 보고 글자를 알아볼 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '몸으로 글자를 만들어요',
      items: [
        { type: 'figure', wide: true, prompt: '글자와 몸 자세를 선으로 이으세요.', tool: 'mindmap', figures: [{ options: { mode: 'match', topic: '몸 글자', slots: [{ id: 'i', label: 'ㅣ', big: 'ㅣ' }, { id: 'eu', label: 'ㅡ', big: 'ㅡ' }], cards: ['곧게 서요', '누워서 쭉 펴요'] }, caption: '' }], answer: 'ㅣ-곧게 서요, ㅡ-누워서 쭉 펴요' },
        { type: 'table', prompt: '몸 글자로 멈춘 동안 센 수를 쓰세요.', columns: ['몸 글자', '센 수'], cells: [['ㅣ', ''], ['ㅅ', ''], ['ㅇ', '']] },
        { type: 'choice', prompt: '두 팔을 옆으로 쭉 펴고 서면 어떤 글자 모양인가요?', options: ['ㅜ', 'ㅇ', 'ㄴ'], answer: 'ㅜ' },
        { type: 'draw', prompt: '내가 만든 몸 글자를 사람 모양으로 그려 보세요.' },
      ],
      easy: {
        note: '몸의 줄이 세로인지 가로인지 봐요.',
        items: [
          { type: 'choice', prompt: '바닥에 누워 쭉 펴면 어떤 글자인가요?', options: ['ㅡ', 'ㅣ'], answer: 'ㅡ' },
          { type: 'short', prompt: '몸 글자로 몇까지 멈추었는지 쓰세요.' },
          { type: 'draw', prompt: '내가 만든 몸 글자를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 놀이 차례 카드는 두 장만 바꾸면 되고, 판은 쉬기 시간만 맞추면 돼요.',
      base: '글자 세 개를 잇고, 놀이 차례와 멈추기 계획을 스스로 세워요.',
      challenge: '글자와 상관없는 움직임 카드가 하나 더 있어요. 더 긴 멈추기를 계획하고 시간 재기로 재요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 가만히 있는 것은 놀이가 아니라고 여긴다 → 멈춰야 짝이 글자를 맞힐 수 있다는 것을 놀이로 겪게 한다. ② ㄴ처럼 옆에서 봐야 하는 글자를 앞에서 본다 → 짝이 서는 자리를 바꾸어 보게 한다. ③ 열을 빨리 세어 버린다 → "하나, 둘…" 손뼉에 맞추어 함께 센다.',
  }));

  lessons.push(L(6, {
    title: '높게·중간·낮게 높이 바꾸며 자세 잇기',
    objective: '서고 앉고 엎드리며 몸의 높이를 높게·중간·낮게로 나누고, 높이를 바꾸는 자세 차례를 만들어 몸으로 할 수 있다.',
    illustration: ART('three paper children side by side: one on tiptoe reaching up high, one kneeling in the middle, one lying flat low on a mat, with a dotted line rising and falling over them', '높게, 중간, 낮게!', [
      { motif: 'mountain', x: 90, y: 200 }, { motif: 'star', x: 380, y: 90 }, { motif: 'leaf', x: 300, y: 230 }]),
    safety: [SPACE, '높이를 바꿀 때는 천천히 앉고 천천히 일어나요.', '엎드리거나 누울 때는 매트 위에서 해요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"선생님이 손을 높이 들면 높게, 가슴 앞에 두면 중간, 바닥 가까이 내리면 낮게예요." 손 신호에 맞추어 학생들이 일어서고, 앉고, 웅크려 보게 한다. "선 자세, 앉은 자세, 누운 자세는 높이가 어떻게 달라요?" 앉고 서는 것만으로도 여러 자세를 만들 수 있다는 것을 짚는다.',
        student: '선생님 손 신호에 맞추어 높게, 중간, 낮게 몸의 높이를 바꾸어 봐요.',
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 자세를 높이에 따라 나누기', minutes: 13, tool: 'mindmap',
            teacher: '"선 자세는 높게, 앉거나 무릎을 꿇은 자세는 중간, 바닥에 눕거나 엎드린 자세는 낮게예요." 이 기준을 칠판에 그림으로 붙여 둔다. "발끝으로 서면 더 높아질까요?"처럼 같은 칸 안에서도 높이가 조금 다를 수 있지만, 칸은 서 있는지·앉았는지·누웠는지로 정한다고 말한다.',
            task: '서 있으면 높게, 앉거나 무릎을 꿇으면 중간, 눕거나 엎드리면 낮게예요. 자세 카드를 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '자세 카드를 높게·중간·낮게로 나누어 보세요.', toolOptions: { topic: '몸의 높이', slots: ['높게', '중간', '낮게'], cards: ['발끝으로 서서 팔 뻗기', '무릎 꿇고 앉기', '바닥에 엎드리기'] },
                target: { sort: { '높게': ['발끝으로 서서 팔 뻗기'], '중간': ['무릎 꿇고 앉기'], '낮게': ['바닥에 엎드리기'] } }, difficulty: 0.05 },
              { prompt: '자세 카드 여섯 장을 높게·중간·낮게로 나누어 보세요.', toolOptions: { topic: '몸의 높이', slots: ['높게', '중간', '낮게'], cards: ['두 발로 서서 만세 하기', '한 발로 서서 팔 벌리기', '바닥에 앉아 다리 펴기', '쪼그려 앉아 무릎 안기', '바닥에 누워 쭉 펴기', '엎드려 고개 들기'] },
                target: { sort: { '높게': ['두 발로 서서 만세 하기', '한 발로 서서 팔 벌리기'], '중간': ['바닥에 앉아 다리 펴기', '쪼그려 앉아 무릎 안기'], '낮게': ['바닥에 누워 쭉 펴기', '엎드려 고개 들기'] } }, difficulty: 0.2,
                hints: ['카드마다 서 있는지, 앉았는지, 누웠는지 먼저 찾아보세요.', '중간 칸에 놓은 카드가 정말 앉은 자세인지 다시 읽어 보세요.', '서는 두 장은 높게, 앉는 두 장은 중간, 눕고 엎드리는 두 장은 낮게예요.'] },
              { prompt: '선생님 손 신호에 맞추어 높게·중간·낮게로 자세를 바꾸고, 짝이 맞는 높이로 바꾸었는지 봐 줘요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 높이 바꾸는 자세 차례 만들기', minutes: 13, tool: 'pattern',
            teacher: '"높게-중간-낮게를 되풀이하면 몸이 파도처럼 움직여요." 빈칸을 채운 뒤에는 그 차례대로 몸으로 해 본다. 나만의 차례를 만들 때 "묶음이 두 번 넘게 똑같이 되풀이되어야 해요"라고 말해 준다.',
            task: '높이 신호의 규칙을 찾아 빈칸을 채우고, 나만의 높이 차례를 만들어 몸으로 해 봐요.',
            levels: { easy: { perRow: 6 }, base: {}, challenge: { revealAfterCheck: true } },
            items: [
              { prompt: '\'높게, 중간, 낮게\'가 되풀이돼요. 빈칸을 채워요.', toolOptions: { seq: ['높게', '중간', '낮게', '높게', '중간', null, '높게', null, '낮게'] }, target: { fill: ['낮게', '중간'] }, difficulty: 0.15,
                levels: { easy: { toolOptions: { perRow: 3 } } } },
              { prompt: '\'낮게, 낮게, 높게\'가 되풀이돼요. 빈칸을 채워요.', toolOptions: { seq: ['낮게', '낮게', '높게', '낮게', null, '높게', null, '낮게', '높게'] }, target: { fill: ['낮게', '낮게'] }, difficulty: 0.2,
                levels: { easy: { toolOptions: { perRow: 3 } } } },
              { prompt: '높게·중간·낮게를 써서 묶음이 되풀이되는 나만의 높이 차례를 만들어요.', toolOptions: { mode: 'make', palette: ['높게', '중간', '낮게'], length: 6 }, target: { rule: 'repeat', minRepeats: 2, uses: 2 }, difficulty: 0.25,
                hints: ['먼저 두세 칸을 한 묶음으로 정하고, 그 묶음을 똑같이 되풀이해요.', '첫 묶음과 다음 묶음을 칸마다 견주어 보세요. 다른 칸이 있나요?', '예를 들어 높게·낮게를 한 묶음으로 정하면 높게·낮게·높게·낮게·높게·낮게처럼 채워요.'],
                levels: { challenge: { prompt: '높게·중간·낮게를 모두 써서, 세 칸 묶음이 되풀이되는 높이 차례를 만들어요.', toolOptions: { length: 9 }, target: { rule: 'repeat', period: 3, minRepeats: 3, uses: 3 } } } },
              { prompt: '짝과 내가 만든 높이 차례를 바꾸어 읽고, 그 차례대로 몸으로 해 봐요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"높이를 바꿀 때 서기, 앉기, 눕기 가운데 무엇을 했나요?" 몇 명이 만든 높이 차례를 반 전체가 따라 해 본다. 다음 시간에는 신호에 딱 멈추는 동상 놀이를 한다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '몸의 높이', slots: ['높게', '중간', '낮게'], cards: ['의자에 앉아 손뼉 치기', '바닥에 엎드려 다리 들기', '발끝으로 서서 고개 들기'] }, prompt: '세 자세를 높게·중간·낮게로 나누어 보세요.', target: { sort: { '높게': ['발끝으로 서서 고개 들기'], '중간': ['의자에 앉아 손뼉 치기'], '낮게': ['바닥에 엎드려 다리 들기'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '무릎을 꿇고 앉은 자세는 어떤 높이일까요?', options: ['높게', '중간', '낮게'], answer: 1, difficulty: 0.15, explain: '앉거나 무릎을 꿇은 자세는 중간 높이예요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '높게, 중간, 낮게',
      items: [
        { type: 'table', prompt: '자세의 높이를 쓰세요(높게·중간·낮게).', columns: ['자세', '높이'], cells: [['발끝으로 서기', ''], ['무릎 꿇기', ''], ['누워서 쭉 펴기', '']] },
        { type: 'figure', prompt: '규칙을 찾아 빈칸에 들어갈 높이를 쓰세요.', tool: 'pattern', figures: [{ options: { seq: ['높게', '낮게', '높게', '낮게', null, null] }, caption: '빈칸: ___, ___' }], answer: '높게, 낮게' },
        { type: 'choice', prompt: '바닥에 엎드린 자세는 어떤 높이인가요?', options: ['높게', '중간', '낮게'], answer: '낮게' },
        { type: 'draw', prompt: '내가 만든 높이 차례를 사람 모양으로 세 칸에 그려 보세요.' },
      ],
      easy: {
        note: '서면 높게, 앉으면 중간, 누우면 낮게예요.',
        items: [
          { type: 'choice', prompt: '서 있는 자세는 어떤 높이인가요?', options: ['높게', '낮게'], answer: '높게' },
          { type: 'choice', prompt: '누운 자세는 어떤 높이인가요?', options: ['높게', '낮게'], answer: '낮게' },
          { type: 'draw', prompt: '높게와 낮게 자세를 하나씩 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 높이 줄은 한 줄에 묶음 하나씩 보여요.',
      base: '자세 여섯 장을 나누고, 묶음이 두 번 되풀이되는 높이 차례를 만들어요.',
      challenge: '틀린 칸을 알려 주지 않아요. 세 높이를 모두 쓴 세 칸 묶음을 세 번 되풀이해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 발끝 서기와 두 발 서기의 높이 차이에 매달린다 → 칸은 서기·앉기·눕기로 정한다는 기준을 되짚는다. ② 높이를 바꿀 때 털썩 주저앉는다 → "셋을 세며 천천히" 내려가게 한다. ③ 만든 차례가 되풀이되지 않는다 → 첫 묶음을 손가락으로 덮고 다음 묶음과 견주게 한다.',
  }));

  lessons.push(L(7, {
    title: '음악이 멈추면 딱! 동상 놀이 하기',
    objective: '동상 놀이의 차례를 알고, 음악이 멈추면 열을 셀 때까지 멈추며 멈춘 친구를 건드리지 않고 기다릴 수 있다.',
    illustration: ART('children frozen like paper statues in funny poses in a classroom while a small music player shows a pause sign, one child counting to ten', '음악이 멈추면 동상!', [
      { motif: 'star', x: 120, y: 100, s: 0.8 }, { motif: 'flower', x: 380, y: 228 }, { motif: 'tree', x: 70, y: 214 }]),
    safety: [SPACE, LOOK, '멈춘 친구의 몸을 밀거나 간지럽히지 않아요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"공원에 있는 동상은 비가 와도 바람이 불어도 움직이지 않아요." 교사가 동상처럼 멈춰 보인 뒤 묻는다. "가만히 있는 것도 놀이가 될 수 있을까요?" 대답을 받은 뒤 짧은 음악을 틀었다 멈추며 한 번 해 본다. 멈춰 있는 동안 몸이 얼마나 힘을 쓰는지 느껴 보게 한다.',
        student: '음악이 나오면 제자리에서 움직이고, 음악이 멈추면 동상처럼 멈춰 봐요.',
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 동상 놀이 차례와 약속 알기', minutes: 14, tool: 'story',
            teacher: '"음악이 나올 때와 멈출 때 하는 일이 달라요." 카드를 놓은 뒤 실제로 세 판을 한다. 음악이 멈춘 뒤에도 몇 걸음 더 가는 학생에게 "음악이 작아지면 멈출 준비를 해요"라고 말한다. 움직인 친구를 탈락시키지 않고 다음 판에 다시 하게 한다.',
            task: '동상 놀이의 차례를 놓고, 음악이 나올 때와 멈출 때 하는 일을 나눈 뒤 실제로 놀이를 해요.',
            levels: CARD_LV,
            items: [
              { prompt: '동상 놀이 한 판의 차례대로 카드를 놓아 보세요.', toolOptions: { cards: ['음악이 멈추면 그대로 멈춰요', '음악에 맞춰 제자리에서 움직여요', '음악이 다시 나오면 움직여요', '열까지 세는 동안 움직이지 않아요'] },
                target: { order: ['음악에 맞춰 제자리에서 움직여요', '음악이 멈추면 그대로 멈춰요', '열까지 세는 동안 움직이지 않아요', '음악이 다시 나오면 움직여요'] }, difficulty: 0.15,
                hints: ['놀이를 시작할 때 음악은 나오고 있을까요, 멈춰 있을까요?', '멈추는 것과 열까지 세는 것 가운데 무엇이 먼저일지 생각해 보세요.', '움직이기 → 멈추기 → 열까지 버티기 → 다시 움직이기 차례예요.'] },
              { prompt: '음악이 나올 때 하는 일과 멈출 때 하는 일로 나누어 보세요.', toolOptions: { mode: 'sort', slots: ['음악이 나올 때', '음악이 멈출 때'], cards: ['팔을 흔들며 춤춰요', '그대로 멈춰요', '제자리에서 콩콩 뛰어요', '몸 글자 모양으로 버텨요'] },
                target: { sort: { '음악이 나올 때': ['팔을 흔들며 춤춰요', '제자리에서 콩콩 뛰어요'], '음악이 멈출 때': ['그대로 멈춰요', '몸 글자 모양으로 버텨요'] } }, difficulty: 0.1,
                levels: { challenge: { prompt: '음악이 나올 때와 멈출 때로 나누어 보세요. 놀이 약속에 맞지 않는 카드는 남겨요.', toolOptions: { cards: ['팔을 흔들며 춤춰요', '그대로 멈춰요', '제자리에서 콩콩 뛰어요', '몸 글자 모양으로 버텨요', '멈춘 친구를 간지럽혀요'] },
                  target: { sort: { '음악이 나올 때': ['팔을 흔들며 춤춰요', '제자리에서 콩콩 뛰어요'], '음악이 멈출 때': ['그대로 멈춰요', '몸 글자 모양으로 버텨요'] } } } } },
              { prompt: '반 친구들과 동상 놀이를 세 판 해요. 판마다 다른 높이(높게·중간·낮게)로 멈춰 봐요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 동상 놀이에서 내 마음과 친구 배려', minutes: 12, tool: 'emotion',
            teacher: '"꼼짝 않고 열까지 버텼을 때 마음은 어떤 날씨였나요?" 놀이를 마친 직후에 묻는다. 친구를 웃겨서 움직이게 하려는 장난이 나오면 "멈춘 친구는 지금 무엇을 하고 있는 걸까요?"라고 되묻는다.',
            task: '동상 놀이에서 생긴 일에 어울리는 마음을 고르고, 친구를 위해 어떻게 할지 골라요.',
            levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
            items: [
              { prompt: '동상 놀이에서 생긴 일에 어울리는 마음 카드를 놓아 보세요.', toolOptions: { cards: ['뿌듯함', '신남', '속상함'], slots: [{ id: 's1', label: '열까지 꼼짝 않고 버텼어요' }, { id: 's2', label: '음악에 맞춰 마음껏 움직여요' }, { id: 's3', label: '안 움직였는데 움직였다는 말을 들었어요' }] },
                target: { match: { s1: '뿌듯함', s2: '신남', s3: '속상함' } }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['뿌듯함', '신남', '속상함', '무서움'] } } } },
              { prompt: '서아가 멈춘 친구를 간지럽혀 움직이게 하려고 해요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '서아', situation: '음악이 멈췄어요. 서아 옆에 준호가 동상처럼 서 있어요.', choices: [
                { id: 'tickle', text: '준호를 간지럽혀요', result: '준호가 넘어질 뻔하고 속상해해요.', mood: '속상함', why: '멈춰 있는 준호는 지금 놀이를 하고 있는 거예요.' },
                { id: 'still', text: '나도 멈춰서 열까지 세요', result: '둘 다 끝까지 버텨 함께 웃어요.', mood: '뿌듯함' },
                { id: 'shout', text: '"움직였다!" 하고 소리쳐요', result: '준호가 억울해해요.', mood: '속상함', why: '준호는 정말 움직였을까요?' }] }, target: { choice: 'still' }, difficulty: 0.1 },
              { prompt: '하준이가 웃음이 터져 움직였어요. 하준이에게 할 말로 알맞은 것을 골라 보세요.', toolOptions: { mode: 'branch', who: '하준', situation: '음악이 멈췄는데 하준이가 웃음이 터져 팔이 움직였어요.', choices: [
                { id: 'out', text: '"너 때문에 망쳤어"', result: '하준이가 놀이를 그만하고 싶어 해요.', mood: '속상함', why: '이 말을 들은 하준이의 마음을 떠올려 봐요.' },
                { id: 'again', text: '"괜찮아, 다음 판에 다시 하자"', result: '하준이가 다음 판에 끝까지 버텼어요.', mood: '뿌듯함' }] }, target: { choice: 'again' }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"가만히 멈춰 있는 동안에도 몸이 일을 했나요? 어디에 힘이 들어갔나요?" 다리·배에 힘이 들어갔다는 대답을 받아, 멈춤도 움직임 놀이의 하나라는 것을 정리한다. 다음 시간에는 짝과 거울 놀이를 한다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { cards: ['그대로 멈춰요', '제자리에서 움직여요', '다시 움직여요'] }, prompt: '음악이 나왔다 멈췄다 다시 나와요. 하는 일을 차례대로 놓아 보세요.', target: { order: ['제자리에서 움직여요', '그대로 멈춰요', '다시 움직여요'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '동상 놀이에서 멈춰 있는 친구에게 해야 할 일은?', options: ['간지럽혀 움직이게 해요', '건드리지 않고 나도 멈춰요'], answer: 1, difficulty: 0.1, explain: '멈춰 있는 친구는 놀이를 하는 중이니 건드리지 않아요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '동상 놀이',
      items: [
        { type: 'table', prompt: '음악이 나올 때와 멈출 때 하는 일을 쓰세요.', columns: ['음악이 나올 때', '음악이 멈출 때'], rows: 2 },
        { type: 'choice', prompt: '동상 놀이에서 멈춘 동안 하는 일에 ○ 하세요.', options: ['열까지 세며 버텨요', '친구를 간지럽혀요', '자리를 옮겨요'], answer: '열까지 세며 버텨요' },
        { type: 'short', prompt: '웃음이 터져 움직인 친구에게 해 줄 말을 쓰세요.' },
        { type: 'draw', prompt: '내가 동상이 되었을 때의 자세를 그려 보세요.' },
      ],
      easy: {
        note: '음악이 멈추면 나도 멈춰요.',
        items: [
          { type: 'choice', prompt: '음악이 멈추면 어떻게 하나요?', options: ['멈춰요', '뛰어요'], answer: '멈춰요' },
          { type: 'choice', prompt: '멈춘 친구에게 어떻게 하나요?', options: ['건드리지 않아요', '간지럽혀요'], answer: '건드리지 않아요' },
          { type: 'draw', prompt: '내 동상 자세를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '차례 네 장을 스스로 놓고, 놀이에서 생긴 일마다 마음과 행동을 골라요.',
      challenge: '놀이 약속에 맞지 않는 카드와 마음 카드가 하나씩 더 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 가만히 있는 것은 놀이가 아니라고 여긴다 → 멈춘 동안 힘이 들어가는 곳을 손으로 짚게 한다. ② 움직인 친구를 탈락시키려 한다 → 이 놀이에는 탈락이 없고 다음 판에 다시 한다고 약속한다. ③ 멈춘 친구를 웃기려 한다 → 멈춘 친구도 놀이 중이라는 것을 되짚는다.',
  }));

  lessons.push(L(8, {
    title: '짝과 거울 놀이로 같은 자세 따라 하기',
    objective: '짝의 자세를 거울처럼 따라 하고, 종이 몸으로 짝의 자세를 거울에 비친 모양으로 만들 수 있다.',
    illustration: ART('two paper children facing each other as if looking in a mirror, one raising the left arm and the other raising the right arm, a dotted mirror line between them', '거울처럼 따라 해요', [
      { motif: 'star', x: 240, y: 90, s: 0.8 }, { motif: 'flower', x: 90, y: 228 }, { motif: 'flower', x: 390, y: 228, color: 'lavender' }]),
    safety: [SPACE, '짝과 손이 닿지 않을 만큼 떨어져 마주 서요.', '자세는 천천히 바꾸어 짝이 따라올 수 있게 해요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"거울 앞에서 오른손을 들면 거울 속 내 친구는 어느 쪽 손을 들까요?" 교실 거울(또는 창문)에 비춰 보게 한다. 마주 본 짝과는 왼쪽·오른쪽이 거꾸로 보인다는 것을 짚는다. "오늘은 짝의 거울이 되어 같은 자세를 따라 해요."',
        student: '짝과 마주 서서, 짝이 손을 들면 거울처럼 같은 쪽 손을 들어 봐요.',
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 거울 놀이 약속과 차례', minutes: 12, tool: 'story',
            teacher: '"리더가 빨리 움직이면 거울이 따라올 수 있을까요?" 천천히 움직이기, 짝의 눈 보기를 약속한다. 차례를 놓은 뒤 실제로 짝과 해 보고, 1분마다 리더를 바꾼다.',
            task: '거울 놀이 차례를 놓고, 지킬 약속을 고른 뒤 짝과 거울 놀이를 해요.',
            levels: CARD_LV,
            items: [
              { prompt: '거울 놀이를 하는 차례대로 카드를 놓아 보세요.', toolOptions: { cards: ['리더가 천천히 자세를 바꿔요', '짝과 마주 서요', '리더와 거울을 바꿔요', '먼저 리더를 정해요'] },
                target: { order: ['짝과 마주 서요', '먼저 리더를 정해요', '리더가 천천히 자세를 바꿔요', '리더와 거울을 바꿔요'] }, difficulty: 0.15,
                hints: ['놀이를 시작하기 전에 무엇을 먼저 해야 할까요?', '리더를 정하기 전에 자세를 바꿀 수 있을까요?', '마주 서기 → 리더 정하기 → 천천히 자세 바꾸기 → 역할 바꾸기 차례예요.'] },
              { prompt: '거울 놀이를 잘하는 약속만 골라 보세요.', toolOptions: { mode: 'pick', basket: '거울 놀이 약속', cards: ['천천히 움직여요', '짝의 눈을 봐요', '빨리 움직여 짝을 놀려요', '짝보다 먼저 끝내요'] },
                target: { pick: ['천천히 움직여요', '짝의 눈을 봐요'] }, difficulty: 0.1,
                levels: { challenge: { prompt: '거울 놀이를 잘하는 약속만 골라 보세요. 카드가 더 많아요.', toolOptions: { cards: ['천천히 움직여요', '짝의 눈을 봐요', '빨리 움직여 짝을 놀려요', '짝보다 먼저 끝내요', '높이도 바꾸어 봐요', '짝에게 등을 돌려요'] },
                  target: { pick: ['천천히 움직여요', '짝의 눈을 봐요', '높이도 바꾸어 봐요'] } } } },
              { prompt: '짝과 거울 놀이를 해요. 리더는 높게·중간·낮게를 섞어 자세 세 가지를 보여 주고, 거울은 따라 해요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 종이 몸으로 거울 자세 만들기', minutes: 14, tool: 'collage',
            teacher: '"가운데 점선이 거울이에요. 왼쪽 리더가 든 팔은 거울 속에서 어느 쪽에 있을까요?" 거울 쪽 몸은 리더와 거울 선에서 같은 거리만큼 떨어져야 한다는 것을 칸을 세며 보여 준다. 비스듬한 팔은 \'돌리기\'로 반대로 기울여야 한다.',
            task: '왼쪽은 리더, 오른쪽은 거울이에요. 접는 선을 거울로 보고 리더의 자세를 거울 쪽에 똑같이 만들어요.',
            levels: {
              easy: { shapes: ['rect', 'circle'], colors: ['노랑', '파랑', '빨강', '초록'], sizes: ['m', 'l'] },
              base: { shapes: ['rect', 'circle', 'square', 'triangle'] },
              challenge: {},
            },
            items: [
              { prompt: '리더가 한 팔을 위로 들었어요. 거울 쪽 친구에게 팔을 붙여 거울 자세를 만들어 보세요.', state: { pieces: [
                { shape: 'circle', color: '노랑', size: 'm', x: 160, y: 80, r: 0 }, { shape: 'rect', color: '파랑', size: 'l', x: 160, y: 180, r: 90 }, { shape: 'rect', color: '빨강', size: 'm', x: 100, y: 120, r: 315 },
                { shape: 'circle', color: '노랑', size: 'm', x: 400, y: 80, r: 0 }, { shape: 'rect', color: '파랑', size: 'l', x: 400, y: 180, r: 90 }] }, target: { symmetry: 'vertical' }, difficulty: 0.15,
                hints: ['접는 선이 거울이에요. 리더의 팔이 거울에 비치면 어디에 생길지 생각해 보세요.', '거울 쪽 팔이 접는 선에서 리더 팔과 같은 칸 수만큼 떨어져 있고, 반대로 기울었는지 보세요.', '빨강 보통 긴 네모를 붙여 거울 쪽 머리 오른쪽 위에 놓고, 돌리기로 리더 팔과 반대로 기울여요.'] },
              { prompt: '리더가 팔을 옆으로 펴고 다리를 비스듬히 뻗었어요. 거울 쪽에 몸통과 팔다리를 붙여 보세요.', state: { pieces: [
                { shape: 'circle', color: '노랑', size: 'm', x: 160, y: 80, r: 0 }, { shape: 'rect', color: '파랑', size: 'l', x: 160, y: 180, r: 90 }, { shape: 'rect', color: '빨강', size: 'm', x: 100, y: 160, r: 0 }, { shape: 'rect', color: '초록', size: 'm', x: 120, y: 300, r: 45 },
                { shape: 'circle', color: '노랑', size: 'm', x: 400, y: 80, r: 0 }] }, target: { symmetry: 'vertical' }, difficulty: 0.3,
                levels: { easy: { state: { pieces: [
                  { shape: 'circle', color: '노랑', size: 'm', x: 160, y: 80, r: 0 }, { shape: 'rect', color: '파랑', size: 'l', x: 160, y: 180, r: 90 }, { shape: 'rect', color: '빨강', size: 'm', x: 100, y: 160, r: 0 }, { shape: 'rect', color: '초록', size: 'm', x: 120, y: 300, r: 45 },
                  { shape: 'circle', color: '노랑', size: 'm', x: 400, y: 80, r: 0 }, { shape: 'rect', color: '파랑', size: 'l', x: 400, y: 180, r: 90 }] } } },
                hints: ['리더 몸의 조각을 하나씩 짚으며, 거울 쪽에 같은 조각이 있는지 세어 보세요.', '거울 쪽 조각이 접는 선에서 리더 조각과 같은 거리에 있는지, 비스듬한 다리가 반대로 기울었는지 보세요.', '파랑 큰 긴 네모를 거울 쪽 머리 아래에 세우고, 빨강 팔은 몸통 오른쪽, 초록 다리는 돌리기로 반대로 기울여 놓아요.'] },
              { prompt: '내가 리더예요. 왼쪽에 나만의 자세를 만들고 오른쪽에 거울 자세를 만들어 보세요. 조각을 여섯 개 넘게 써요.', target: { symmetry: 'vertical', pieces: { min: 7 } }, difficulty: 0.3,
                levels: { easy: { prompt: '내가 리더예요. 왼쪽에 자세를 만들고 오른쪽에 거울 자세를 만들어 보세요. 조각을 네 개 넘게 써요.', target: { symmetry: 'vertical', pieces: { min: 5 } } } },
                hints: ['리더 쪽에 조각을 하나 붙일 때마다 거울 쪽에도 같은 조각을 바로 붙여요.', '짝이 없는 조각이 있는지 하나씩 짚어 보세요.', '머리 동그라미, 몸통 긴 네모, 팔 긴 네모를 왼쪽에 놓고, 같은 조각을 접는 선에서 같은 거리의 오른쪽에 하나씩 놓아요.'] },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"마주 본 짝이 오른손을 들면 나는 어느 손을 들어야 거울이 될까요?" 학생들이 직접 손을 들어 답하게 한다. 짝을 바꾸어 30초 동안 거울 놀이를 한 번 더 하고 마친다. 다음 시간에는 가장 오래 버틴 자세를 기록한다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'collage', options: { shapes: ['circle', 'rect'], colors: ['노랑', '파랑', '빨강'] }, state: { pieces: [{ shape: 'circle', color: '노랑', size: 'm', x: 200, y: 100, r: 0 }, { shape: 'rect', color: '빨강', size: 'm', x: 140, y: 100, r: 0 }] }, prompt: '리더의 머리와 팔이 있어요. 접는 선 반대쪽에 거울 모양을 만들어 보세요.', target: { symmetry: 'vertical' }, difficulty: 0.2 },
          { type: 'choice', prompt: '거울 놀이에서 리더가 지켜야 할 약속은?', options: ['빨리 움직여요', '천천히 움직여요', '짝을 보지 않아요'], answer: 1, difficulty: 0.1, explain: '천천히 움직여야 거울이 된 짝이 따라 할 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '짝과 거울 놀이',
      items: [
        { type: 'figure', wide: true, prompt: '점선을 거울로 보고, 오른쪽에 거울 자세를 그려 완성하세요.', tool: 'collage', options: { guide: 'vertical', printColors: false }, figures: [{ state: { pieces: [{ shape: 'circle', color: '노랑', size: 'm', x: 160, y: 80, r: 0 }, { shape: 'rect', color: '파랑', size: 'l', x: 160, y: 180, r: 90 }, { shape: 'rect', color: '빨강', size: 'm', x: 100, y: 120, r: 315 }] }, caption: '리더 자세 보고 거울 자세 그리기' }] },
        { type: 'choice', prompt: '마주 본 짝이 오른손을 들었어요. 거울이 된 나는 어느 손을 드나요?', options: ['오른손', '왼손'], answer: '왼손' },
        { type: 'check', prompt: '거울 놀이에서 지킨 약속에 ✓ 하세요.', options: ['천천히 움직였어요', '짝의 눈을 보았어요', '리더를 바꾸어 했어요'] },
        { type: 'draw', prompt: '짝과 거울 놀이를 하는 모습을 그려 보세요.' },
      ],
      easy: {
        note: '거울 속 나는 왼쪽·오른쪽이 거꾸로예요.',
        items: [
          { type: 'choice', prompt: '거울 놀이에서 리더는 어떻게 움직이나요?', options: ['천천히', '아주 빨리'], answer: '천천히' },
          { type: 'check', prompt: '지킨 약속에 ✓ 하세요.', options: ['천천히 움직였어요', '짝의 눈을 보았어요'] },
          { type: 'draw', prompt: '짝과 거울 놀이를 하는 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 거울 쪽 몸통이 미리 붙어 있고, 모양·색이 적어요. 나만의 자세는 조각 다섯 개면 돼요.',
      base: '차례·약속을 스스로 놓고, 거울 쪽 몸통과 팔다리를 붙여요.',
      challenge: '약속 카드가 여섯 장으로 늘어요. 모든 모양·색에서 짝 조각을 골라 일곱 조각 넘게 만들어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 마주 본 짝과 같은 쪽 이름의 손을 든다 → 실제 거울 앞에서 확인하게 한다. ② 거울 쪽 조각을 접는 선에서 다른 거리에 놓는다 → 점선 칸을 손가락으로 세게 한다. ③ 리더가 짝을 놀리려 빨리 움직인다 → "거울이 따라오면 리더도 성공"이라고 말해 준다.',
  }));

  // ───────────────────────── 9~12차시: 오래 버틴 자세 기록·다시 하기·돌아보기 ─────────────────────────

  lessons.push(L(9, {
    title: '가장 오래 버틴 자세 찾아 기록하기',
    objective: '세 가지 자세로 버틴 수를 세어 기록하고, 가장 오래 버틴 자세를 골라 어땠는지 말할 수 있다.',
    illustration: ART('children holding balance poses while a partner counts on fingers, with a paper record chart showing three poses and tally marks', '몇까지 버텼나요?', [
      { motif: 'tree', x: 80, y: 214 }, { motif: 'star', x: 370, y: 96 }, { motif: 'flower', x: 410, y: 230 }]),
    safety: [SPACE, FLOOR, STOP],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"지금까지 해 본 자세 가운데 가장 오래 버틸 수 있는 자세는 무엇일까요?" 두 발 서기, 한 발 서기, 몸 글자를 칠판에 붙이고 예상해 손을 들게 한다. "예상이 맞는지 기록으로 확인해 봐요. 기록은 친구와 견주는 것이 아니라 나를 알아보는 거예요."',
        student: '세 자세 가운데 내가 가장 오래 버틸 자세를 예상해 손을 들어 봐요.',
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 세 자세로 버티고 기록하기', minutes: 14, tool: 'timer',
            teacher: '"짝은 손뼉에 맞추어 \'하나, 둘…\' 소리 내어 세어 줘요. 흔들려서 발이 바닥에 닿으면 멈춰요." 최대 30까지만 세게 한다. 버틴 수를 부풀리지 않도록 짝이 센 수를 그대로 적는다.',
            task: '짝이 수를 세어 주는 동안 세 자세로 버티고, 버틴 수를 적은 뒤 기록을 읽어요.',
            levels: { easy: {}, base: {}, challenge: { stopwatch: true } },
            items: [
              { prompt: '짝과 번갈아 두 발 서기, 한 발 서기, 몸 글자 ㅅ으로 버티며 서로 수를 세어 줘요.', free: true, talk: true },
              { prompt: '세 자세로 버틴 수를 칸에 적어요. 30까지 세었으면 30이라고 적어요.', toolOptions: { title: '나의 버티기 기록', fields: ['두 발 서기', '한 발 서기', '몸 글자 ㅅ'], unit: '까지' }, target: { records: true }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { fields: ['두 발 서기', '한 발 서기', '몸 글자 ㅅ', { label: '가장 많이 센 수', unit: '까지' }] } } } },
              { prompt: '준호의 기록이에요: 두 발 서기 30, 한 발 서기 8, 발끝 서기 3. 이 기록을 칸에 그대로 옮겨 적어요.', toolOptions: { title: '준호의 기록', fields: ['두 발 서기', '한 발 서기', '발끝 서기'], unit: '까지' }, target: { records: [30, 8, 3] }, difficulty: 0.2 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 기록을 읽고 내 마음 돌아보기', minutes: 12, tool: 'emotion',
            teacher: '"준호는 어떤 자세를 가장 오래 버텼나요? 수가 클수록 오래 버틴 거예요." 기록을 읽은 뒤, 한 번에 잘 안 된 자세가 있었던 학생의 마음을 묻는다. "한 번에 안 되면 그 자세는 나에게 맞지 않는 걸까요?" 다시 해 보면 달라질 수 있다는 것을 짚는다.',
            task: '기록을 보고 오래 버틴 차례를 놓고, 한 번에 안 된 자세를 만났을 때 어떻게 할지 골라요.',
            levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
            items: [
              { prompt: '준호의 기록(두 발 서기 30, 한 발 서기 8, 발끝 서기 3)을 보고 오래 버틴 자세부터 놓아 보세요.', toolOptions: { mode: 'order', slots: ['가장 오래', '중간', '가장 짧게'], cards: ['한 발 서기', '발끝 서기', '두 발 서기'] },
                target: { order: ['두 발 서기', '한 발 서기', '발끝 서기'] }, difficulty: 0.15,
                hints: ['기록의 수가 클수록 오래 버틴 거예요. 세 수를 견주어 보세요.', '맨 앞에 놓은 자세의 수가 가장 큰지 다시 보세요.', '30이 가장 크고, 그다음 8, 가장 작은 수는 3이에요.'] },
              { prompt: '서아는 한 발 서기가 한 번에 잘 안 됐어요. 어떻게 하면 좋을까요?', toolOptions: { mode: 'branch', who: '서아', situation: '서아는 한 발 서기를 하다가 셋을 세자마자 발이 닿았어요.', choices: [
                { id: 'quit', text: '"나는 원래 못해" 하고 그만둬요', result: '다음에도 한 발 서기를 피해요.', mood: '속상함', why: '한 번 안 되었다고 영영 못 하는 걸까요?' },
                { id: 'retry', text: '두 팔을 벌리고 한 곳을 보며 다시 해요', result: '두 번째에는 여덟까지 버텼어요.', mood: '뿌듯함' },
                { id: 'blame', text: '"네가 너무 빨리 셌어" 하고 짝 탓을 해요', result: '짝이 속상해하고 기록은 그대로예요.', mood: '속상함', why: '짝 탓을 하면 내 한 발 서기가 나아질까요?' }] }, target: { choice: 'retry' }, difficulty: 0.1 },
              { prompt: '오늘 가장 오래 버틴 자세를 떠올려요. 해냈을 때 뿌듯한 마음은 얼마나 컸나요? 내 마음대로 골라요.', toolOptions: { mode: 'scale', situation: '오늘 가장 오래 버틴 자세를 떠올려요.', feeling: '뿌듯함', steps: 3, scaleLabels: ['조금', '보통', '아주 많이'], after: '내 마음을 솔직하게 골랐어요. 짝에게 그 자세를 말해 줘요.' }, target: { level: 'any' }, difficulty: 0.05 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"내가 예상한 자세와 기록에서 가장 오래 버틴 자세가 같았나요?" 두세 명이 자기 기록을 말한다. 기록이 작은 친구를 놀리지 않도록 "기록은 나를 알아보는 것"이라고 다시 말한다. 다음 시간에는 같은 자세를 다시 해서 첫 기록과 견준다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'order', slots: ['가장 오래', '중간', '가장 짧게'], cards: ['몸 글자 ㅅ', '홍학 자세', '두 발 서기'] }, prompt: '민지의 기록은 두 발 서기 25, 몸 글자 ㅅ 12, 홍학 자세 6이에요. 오래 버틴 자세부터 놓아 보세요.', target: { order: ['두 발 서기', '몸 글자 ㅅ', '홍학 자세'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '한 번에 잘 안 된 자세가 있어요. 어떻게 생각하면 좋을까요?', options: ['나에게 맞지 않는 자세예요', '방법을 바꾸어 다시 해 볼 수 있어요'], answer: 1, difficulty: 0.1, explain: '팔을 벌리거나 한 곳을 보는 방법을 써서 다시 하면 달라질 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '나의 버티기 기록',
      items: [
        { type: 'table', prompt: '세 자세로 버틴 수를 쓰세요.', columns: ['자세', '버틴 수'], cells: [['두 발 서기', ''], ['한 발 서기', ''], ['몸 글자 ㅅ', '']] },
        { type: 'short', prompt: '가장 오래 버틴 자세는 무엇인가요?' },
        { type: 'choice', prompt: '기록이 30, 8, 3일 때 가장 오래 버틴 기록에 ○ 하세요.', options: ['30', '8', '3'], answer: '30' },
        { type: 'short', prompt: '한 번에 잘 안 된 자세를 다시 할 때 쓸 방법을 쓰세요.' },
      ],
      easy: {
        note: '수가 클수록 오래 버틴 거예요.',
        items: [
          { type: 'table', prompt: '버틴 수를 쓰세요.', columns: ['두 발 서기', '한 발 서기'], rows: 1 },
          { type: 'choice', prompt: '더 오래 버틴 기록에 ○ 하세요.', options: ['20', '5'], answer: '20' },
          { type: 'draw', prompt: '가장 오래 버틴 내 자세를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 초록 테두리가 생겨요. 마음 크기는 세 칸에서 골라요.',
      base: '세 기록을 적고, 기록을 읽어 차례를 놓아요.',
      challenge: '가장 많이 센 수를 스스로 찾아 한 칸 더 적고, 시간 재기로 직접 재요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 한 번에 잘 안 되는 자세는 나에게 맞지 않는다고 여긴다 → 방법을 바꾸어 다시 해 보게 한다. ② 친구 기록과 견주며 속상해한다 → "어제의 나와 견주기"를 약속한다. ③ 30을 넘게 세려 한다 → 30까지만 세고 쉬게 한다. 기록 수는 짝이 소리 내어 센 것만 적는다.',
  }));

  lessons.push(L(10, {
    title: '다시 해 보고 첫 기록과 견주기',
    objective: '같은 자세를 방법을 바꾸어 다시 해 보고, 첫 기록과 두 번째 기록을 견주어 나의 변화를 말할 수 있다.',
    illustration: ART('a child standing on one foot with arms spread while a paper record card shows a first try and a second try with a small arrow going up', '다시 하면 달라져요', [
      { motif: 'tree', x: 90, y: 214 }, { motif: 'sun', x: 300, y: 80, s: 0.6 }, { motif: 'leaf', x: 400, y: 230 }]),
    safety: [SPACE, FLOOR, STOP],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"지난 시간 한 발 서기 기록을 떠올려 보세요. 오늘 다시 하면 기록이 같을까요, 달라질까요?" 예상을 듣고 묻는다. "다시 할 때 무엇을 바꾸면 좋을까요?" 팔 벌리기·한 곳 보기 같은 방법을 떠올리게 한다.',
        student: '지난 시간 내 한 발 서기 기록을 떠올리고, 오늘 바꾸어 볼 방법을 하나 정해요.',
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 도움이 되는 방법 고르고 다시 하기', minutes: 13, tool: 'mindmap',
            teacher: '"다시 할 때 도움이 되는 방법과 도움이 안 되는 방법을 나누어 봐요." 카드를 나눈 뒤 하나를 골라 실제로 다시 해 본다. 서두르면 더 빨리 끝난다고 생각하는 학생에게 "서두르면 몸이 어떻게 되었나요?"라고 묻는다.',
            task: '다시 해 볼 때 도움이 되는 방법을 고르고, 다시 하는 차례를 놓은 뒤 한 발 서기를 다시 해요.',
            levels: CARD_LV,
            items: [
              { prompt: '한 발 서기를 다시 할 때 도움이 되는 방법과 도움이 안 되는 방법으로 나누어 보세요.', toolOptions: { topic: '다시 해 보기', slots: ['도움이 돼요', '도움이 안 돼요'], cards: ['두 팔을 옆으로 벌려요', '앞의 한 곳을 바라봐요', '서둘러 빨리 끝내요', '옆 친구와 떠들어요'] },
                target: { sort: { '도움이 돼요': ['두 팔을 옆으로 벌려요', '앞의 한 곳을 바라봐요'], '도움이 안 돼요': ['서둘러 빨리 끝내요', '옆 친구와 떠들어요'] } }, difficulty: 0.1 },
              { prompt: '다시 해 보는 차례대로 카드를 놓아 보세요.', toolOptions: { mode: 'order', slots: 4, cards: ['다시 해 봐요', '어디가 흔들렸는지 떠올려요', '두 기록을 견주어요', '도움이 될 방법을 하나 골라요'] },
                target: { order: ['어디가 흔들렸는지 떠올려요', '도움이 될 방법을 하나 골라요', '다시 해 봐요', '두 기록을 견주어요'] }, difficulty: 0.2,
                hints: ['다시 하기 전에 먼저 무엇을 알아야 방법을 고를 수 있을까요?', '기록을 견주는 일은 다시 해 보기 전일까요, 뒤일까요?', '흔들린 곳 떠올리기 → 방법 고르기 → 다시 하기 → 기록 견주기 차례예요.'] },
              { prompt: '고른 방법으로 한 발 서기를 두 번 더 해요. 짝은 소리 내어 수를 세어 줘요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 첫 기록과 두 번째 기록 견주기', minutes: 13, tool: 'timer',
            teacher: '"첫 기록보다 늘었나요, 같나요, 줄었나요? 셋 다 괜찮아요." 기록이 줄어든 학생에게 "오늘은 어디가 흔들렸나요?"라고 묻고 다음에 바꿀 방법을 함께 정한다. 남과 견주지 않고 나의 두 기록만 견준다.',
            task: '첫 기록과 두 번째 기록을 적고, 민지의 기록을 옮겨 적은 뒤 내 기록이 어떻게 달라졌는지 말해요.',
            levels: { easy: {}, base: {}, challenge: { stopwatch: true } },
            items: [
              { prompt: '한 발 서기 첫 기록과 두 번째 기록을 칸에 적어요.', toolOptions: { title: '한 발 서기 기록', fields: ['첫 번째', '두 번째'], unit: '까지' }, target: { records: true }, difficulty: 0.1,
                levels: { challenge: { prompt: '한 발 서기 첫 기록과 두 번째 기록, 그리고 늘어난 수를 칸에 적어요. 줄었다면 0을 적어요.', toolOptions: { fields: ['첫 번째', '두 번째', { label: '늘어난 수', unit: '만큼' }] } } } },
              { prompt: '민지의 기록이에요: 첫 번째 4, 두 번째 9. 칸에 그대로 옮겨 적어요.', toolOptions: { title: '민지의 기록', fields: ['첫 번째', '두 번째'], unit: '까지' }, target: { records: [4, 9] }, difficulty: 0.15 },
              { prompt: '오늘 다시 해 보기를 돌아보고, 해낸 것을 모두 표시해요.', toolOptions: { title: '다시 해 보기 점검' }, target: { selfCheck: ['흔들린 곳을 떠올렸어요', '도움이 될 방법을 하나 골랐어요', '두 번 다시 해 보았어요'] }, difficulty: 0.05 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"방법을 바꾸어 다시 해 보니 어땠나요?" 기록이 늘어난 학생, 같은 학생, 줄어든 학생에게 한 명씩 고른 방법을 묻는다. 줄어든 기록도 다음에 바꿀 방법을 알려 준다는 것을 짚는다. 다음 시간에는 제자리 움직임 여러 개를 이어서 해 본다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '다시 해 보기', slots: ['도움이 돼요', '도움이 안 돼요'], cards: ['벽을 한 손으로 짚고 시작해요', '눈을 꼭 감고 해요', '숨을 천천히 쉬어요'] }, prompt: '몸 글자 버티기를 다시 할 때 도움이 되는 방법과 안 되는 방법으로 나누어 보세요.', target: { sort: { '도움이 돼요': ['벽을 한 손으로 짚고 시작해요', '숨을 천천히 쉬어요'], '도움이 안 돼요': ['눈을 꼭 감고 해요'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '준호의 첫 기록은 5, 두 번째 기록은 7이에요. 어떻게 달라졌나요?', options: ['늘었어요', '같아요', '줄었어요'], answer: 0, difficulty: 0.15, explain: '7은 5보다 크니까 기록이 늘었어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '다시 하면 달라져요',
      items: [
        { type: 'table', prompt: '한 발 서기 기록을 쓰세요.', columns: ['첫 번째', '두 번째'], rows: 1 },
        { type: 'choice', prompt: '내 기록은 어떻게 달라졌나요? ○ 하세요.', options: ['늘었어요', '같아요', '줄었어요'] },
        { type: 'short', prompt: '다시 할 때 쓴 방법을 쓰세요.' },
        { type: 'choice', prompt: '다시 할 때 도움이 되는 방법에 ○ 하세요.', options: ['서둘러 빨리 끝내요', '두 팔을 옆으로 벌려요', '친구와 떠들어요'], answer: '두 팔을 옆으로 벌려요' },
      ],
      easy: {
        note: '첫 번째와 두 번째, 나의 두 기록만 견주어요.',
        items: [
          { type: 'table', prompt: '두 기록을 쓰세요.', columns: ['첫 번째', '두 번째'], rows: 1 },
          { type: 'choice', prompt: '도움이 되는 방법에 ○ 하세요.', options: ['팔 벌리기', '서두르기'], answer: '팔 벌리기' },
          { type: 'draw', prompt: '다시 해 보는 내 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '방법을 나누고 다시 하는 차례를 놓은 뒤 두 기록을 적어요.',
      challenge: '늘어난 수를 스스로 셈해 한 칸 더 적고, 시간 재기로 재요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 기록이 줄면 실패했다고 여긴다 → 줄어든 기록도 다음 방법을 알려 준다고 말한다. ② 친구 기록과 견준다 → 나의 첫 기록과 두 번째 기록만 견주게 한다. ③ 늘어난 수를 셈하기 어려워한다 → 손가락이나 수 막대로 첫 기록에서 두 번째 기록까지 세어 올라가게 한다.',
  }));

  lessons.push(L(11, {
    title: '위에서 아래로 몸풀기 이어 하기',
    objective: '몸의 위쪽부터 아래쪽 차례로 제자리 움직임을 이어 놓고, 멈추지 않고 이어서 할 수 있다.',
    illustration: ART('a line of children doing a warm-up from head to toe: rolling necks, circling shoulders, twisting waists, bending knees and turning ankles, with a dotted arrow going down', '위에서 아래로 이어 해요', [
      { motif: 'sun', x: 90, y: 80, s: 0.6 }, { motif: 'tree', x: 410, y: 214 }, { motif: 'leaf', x: 300, y: 230 }]),
    safety: [SPACE, '목과 허리는 천천히, 아프지 않을 만큼만 돌려요.', STOP],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"지금까지 제자리 움직임을 하나씩 해 봤어요. 여러 개를 이어서 할 수도 있을까요?" 교사가 목 돌리기에서 어깨 돌리기로 멈추지 않고 이어 보인다. "몸 위에서 아래로 내려가며 이으면 빠뜨리는 곳 없이 몸을 다 풀 수 있어요." 움직임은 하나씩만 할 수 있다고 여기는 학생에게 이어 하기를 보여 준다.',
        student: '선생님을 따라 목에서 어깨로 멈추지 않고 이어서 움직여 봐요.',
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 몸풀기 차례 이어 놓기', minutes: 14, tool: 'story',
            teacher: '"머리에 가까운 곳부터 발에 가까운 곳으로 내려가요." 카드를 놓은 뒤 그 차례대로 넷씩 세며 이어서 해 본다. 차례를 놓을 때 손으로 자기 몸을 위에서부터 짚어 내려가게 한다.',
            task: '몸의 위쪽부터 아래쪽 차례로 몸풀기 카드를 놓고, 그 차례대로 멈추지 않고 이어서 해요.',
            levels: CARD_LV,
            items: [
              { prompt: '몸의 위쪽부터 아래쪽 차례로 몸풀기 카드를 놓아 보세요.', toolOptions: { cards: ['허리 돌리기', '발목 돌리기', '목 돌리기'] },
                target: { order: ['목 돌리기', '허리 돌리기', '발목 돌리기'] }, difficulty: 0.05,
                hints: ['손으로 내 몸을 머리부터 발까지 짚어 내려가 보세요.', '맨 앞 카드가 머리에 가장 가까운 곳인지 보세요.', '목 → 허리 → 발목 차례로 내려가요.'] },
              { prompt: '다섯 가지 몸풀기를 몸의 위쪽부터 아래쪽 차례로 놓아 보세요.', toolOptions: { cards: ['무릎 돌리기', '어깨 돌리기', '발목 돌리기', '목 돌리기', '허리 돌리기'] },
                target: { order: ['목 돌리기', '어깨 돌리기', '허리 돌리기', '무릎 돌리기', '발목 돌리기'] }, difficulty: 0.15,
                hints: ['손으로 내 몸을 머리부터 발까지 짚으며 카드에 나온 곳을 찾아보세요.', '어깨와 허리, 무릎과 발목 가운데 어느 쪽이 더 위에 있는지 견주어 보세요.', '목 → 어깨 → 허리 → 무릎 → 발목 차례예요.'] },
              { prompt: '활동을 마친 뒤 정리 체조는 발부터 올라가요. 몸의 아래쪽부터 위쪽 차례로 놓아 보세요.', toolOptions: { cards: ['어깨 으쓱하기', '발목 털기', '허리 숙였다 펴기', '무릎 굽혔다 펴기'] },
                target: { order: ['발목 털기', '무릎 굽혔다 펴기', '허리 숙였다 펴기', '어깨 으쓱하기'] }, difficulty: 0.2,
                hints: ['이번에는 거꾸로예요. 발에서 시작해 머리 쪽으로 올라가요.', '맨 앞 카드가 발에 가장 가까운 곳인지 보세요.', '발목 → 무릎 → 허리 → 어깨 차례로 올라가요.'],
                levels: { challenge: { prompt: '정리 체조를 몸의 아래쪽부터 위쪽 차례로 놓아 보세요. 카드가 하나 더 있어요.', toolOptions: { cards: ['어깨 으쓱하기', '발목 털기', '허리 숙였다 펴기', '무릎 굽혔다 펴기', '고개 끄덕이기'] },
                  target: { order: ['발목 털기', '무릎 굽혔다 펴기', '허리 숙였다 펴기', '어깨 으쓱하기', '고개 끄덕이기'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 이어 한 움직임에서 움직인 곳 찾기', minutes: 12, tool: 'body',
            teacher: '"세 가지 움직임을 멈추지 않고 이어 해 보세요. 어디 어디가 움직였나요?" 움직임마다 손으로 그 곳을 짚게 한 뒤 몸 그림에서 모두 고른다. 하나만 고르고 끝내는 학생에게 "움직임이 몇 개였지요?"라고 묻는다.',
            task: '세 가지 움직임을 이어서 해 보고, 움직인 곳을 몸 그림에서 모두 눌러요.',
            levels: {
              easy: { mode: 'parts', parts: ['목', '어깨', '손목', '허리', '무릎', '발목'], names: true },
              base: { mode: 'parts', parts: ['목', '어깨', '팔꿈치', '손목', '허리', '허벅지', '무릎', '발목'] },
              challenge: { mode: 'parts' },
            },
            items: [
              { prompt: '고개 끄덕이기 → 두 팔 크게 돌리기 → 무릎 굽혔다 펴기를 이어 해요. 움직인 곳을 모두 눌러요.', target: { parts: ['목', '어깨', '무릎'] }, difficulty: 0.15,
                hints: ['움직임 하나마다 손으로 움직인 곳을 짚어 보세요. 움직임은 세 개예요.', '고른 곳이 세 곳인지, 움직임마다 한 곳씩 골랐는지 보세요.', '고개는 목, 팔 돌리기는 어깨, 굽혔다 펴기는 무릎이에요.'] },
              { prompt: '손 털기 → 허리 옆으로 굽히기 → 발끝으로 동그라미 그리기를 이어 해요. 움직인 곳을 모두 눌러요.', target: { parts: ['손목', '허리', '발목'] }, difficulty: 0.2,
                hints: ['움직임 하나마다 접히거나 도는 곳을 손으로 짚어 보세요.', '팔꿈치나 무릎을 고르지 않았나요? 정말 그곳이 움직였는지 다시 해 보세요.', '손 털기는 손목, 옆으로 굽히기는 허리, 발끝 동그라미는 발목이에요.'] },
              { prompt: '짝과 마주 보고, 제자리 움직임 세 가지를 골라 멈추지 않고 이어서 해 봐요. 짝이 이어 한 차례를 말해 줘요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"움직임을 하나씩 할 때와 이어서 할 때 무엇이 달랐나요?" 이어 하면 몸 전체가 따뜻해진다는 대답을 받는다. 오늘 정한 \'위에서 아래로 몸풀기\'를 다음 시간부터 수업 시작에 쓰기로 약속한다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { cards: ['무릎 굽혔다 펴기', '어깨 으쓱하기', '손목 털기'] }, prompt: '위에서 아래로 내려가는 차례로 놓아 보세요. 손목은 팔을 내리고 해요.', target: { order: ['어깨 으쓱하기', '손목 털기', '무릎 굽혔다 펴기'] }, difficulty: 0.2,
            hints: ['팔을 내리고 서서 어깨, 손목, 무릎의 높이를 견주어 보세요.'] },
          { type: 'choice', prompt: '목 돌리기, 허리 돌리기, 발목 돌리기를 멈추지 않고 이어서 할 수 있을까요?', options: ['네, 이어서 할 수 있어요', '아니요, 하나씩만 할 수 있어요'], answer: 0, difficulty: 0.1, explain: '움직임은 여러 개를 이어서 할 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '위에서 아래로 몸풀기',
      items: [
        { type: 'table', prompt: '위에서 아래로 몸풀기 차례를 쓰세요.', columns: ['차례', '몸풀기'], cells: [['1', '목 돌리기'], ['2', ''], ['3', ''], ['4', '발목 돌리기']] },
        { type: 'check', prompt: '오늘 움직인 곳에 ✓ 하세요.', options: ['목', '어깨', '허리', '무릎', '발목'] },
        { type: 'choice', prompt: '허리 돌리기 다음, 더 아래로 내려가는 몸풀기에 ○ 하세요.', options: ['어깨 돌리기', '무릎 돌리기', '목 돌리기'], answer: '무릎 돌리기' },
        { type: 'draw', prompt: '이어서 해 본 세 가지 움직임을 차례로 그려 보세요.' },
      ],
      easy: {
        note: '머리 쪽에서 발 쪽으로 내려가요.',
        items: [
          { type: 'choice', prompt: '맨 처음 하는 몸풀기에 ○ 하세요.', options: ['목 돌리기', '발목 돌리기'], answer: '목 돌리기' },
          { type: 'check', prompt: '움직인 곳에 ✓ 하세요.', options: ['목', '무릎', '발목'] },
          { type: 'draw', prompt: '몸풀기 하는 내 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 초록 테두리가 생겨요. 몸 그림은 여섯 곳에서 고르고 이름이 보여요.',
      base: '다섯 가지 몸풀기 차례를 놓고, 몸 그림 여덟 곳에서 움직인 곳을 모두 골라요.',
      challenge: '정리 체조 카드가 하나 더 있어요. 몸 그림은 열세 곳에서 골라요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 움직임은 하나씩만 할 수 있다고 여긴다 → 넷을 세고 바로 다음 움직임으로 넘어가는 이어 하기를 함께 한다. ② 어깨와 손목의 높이를 헷갈린다 → 팔을 내린 채로 짚게 한다(팔을 올리면 손목이 위로 간다). ③ 목·허리를 세게 돌린다 → 천천히 반 바퀴씩만 돌린다.',
  }));

  lessons.push(L(12, {
    title: '제자리 탐험 돌아보고 다음 자세 정하기',
    objective: '제자리 움직임 탐험에서 해 본 것을 묶어 말하고, 다음에 해 보고 싶은 자세를 정할 수 있다.',
    illustration: ART('children sitting in a circle around a paper treasure map of poses they tried: one-leg stand, body letters, high and low shapes, each child pointing at a favorite', '제자리 탐험 돌아보기', [
      { motif: 'star', x: 120, y: 96 }, { motif: 'star', x: 360, y: 90, s: 0.7 }, { motif: 'flower', x: 410, y: 230 }]),
    safety: [SPACE, FLOOR, STOP],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"제자리 탐험에서 우리가 찾은 보물을 떠올려 볼까요?" 칠판에 균형 자세, 몸 글자, 높낮이 바꾸기, 동상·거울 놀이 그림을 붙인다. "가장 오래 버틴 자세는 무엇이었나요? 처음엔 안 됐는데 다시 해서 된 자세도 있었나요?" 두세 명의 이야기를 듣는다.',
        student: '제자리 탐험에서 가장 기억에 남는 자세 하나를 몸으로 보여 줘요.',
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 해 본 움직임 묶어 보기', minutes: 13, tool: 'mindmap',
            teacher: '"이 움직임은 어떤 탐험에서 했던 것일까요?" 카드를 나눈 뒤 묶음마다 하나씩 몸으로 다시 해 본다. 다음 자세를 정할 때 "한 번에 안 된 자세는 다시 안 할래요"라고 하는 학생에게 지난 시간 기록이 달라진 친구 이야기를 들려준다.',
            task: '해 본 움직임을 탐험 가지별로 나누고, 다음에 해 볼 자세를 정하는 알맞은 다짐을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '해 본 움직임을 탐험 가지별로 나누어 보세요.', toolOptions: { topic: '제자리 탐험', slots: ['균형 자세', '몸 글자', '높낮이 바꾸기'], cards: ['홍학처럼 한 발로 서기', '몸으로 ㅏ 만들기', '섰다가 바닥에 엎드리기', '몸으로 ㄴ 만들기', '앉았다가 발끝으로 서기', '눈 감고 한 발 서기'] },
                target: { sort: { '균형 자세': ['홍학처럼 한 발로 서기', '눈 감고 한 발 서기'], '몸 글자': ['몸으로 ㅏ 만들기', '몸으로 ㄴ 만들기'], '높낮이 바꾸기': ['섰다가 바닥에 엎드리기', '앉았다가 발끝으로 서기'] } }, difficulty: 0.15,
                hints: ['카드마다 무엇을 하는 탐험이었는지 떠올려 보세요. 글자 이름이 있나요? 높이가 바뀌나요?', '높낮이 칸의 카드는 서기·앉기·눕기 사이를 오가나요?', '한 발 서기 둘은 균형, ㅏ·ㄴ은 몸 글자, 섰다가 엎드리기·앉았다가 서기는 높낮이예요.'] },
              { prompt: '다음 시간에 해 볼 자세를 정할 때 알맞은 다짐만 골라 보세요.', toolOptions: { mode: 'pick', basket: '나의 다짐', cards: ['짧게 버틴 자세를 방법을 바꿔 다시 할래요', '한 번 안 된 자세는 다시 안 할래요', '친구보다 무조건 오래 버틸래요', '새 몸 글자를 하나 더 만들어 볼래요'] },
                target: { pick: ['짧게 버틴 자세를 방법을 바꿔 다시 할래요', '새 몸 글자를 하나 더 만들어 볼래요'] }, difficulty: 0.15,
                levels: { challenge: { prompt: '다음 시간에 해 볼 자세를 정할 때 알맞은 다짐만 골라 보세요. 카드가 더 많아요.', toolOptions: { cards: ['짧게 버틴 자세를 방법을 바꿔 다시 할래요', '한 번 안 된 자세는 다시 안 할래요', '친구보다 무조건 오래 버틸래요', '새 몸 글자를 하나 더 만들어 볼래요', '눈 감고 서기를 열까지 해 볼래요', '어려운 자세는 짝에게 미룰래요'] },
                  target: { pick: ['짧게 버틴 자세를 방법을 바꿔 다시 할래요', '새 몸 글자를 하나 더 만들어 볼래요', '눈 감고 서기를 열까지 해 볼래요'] } } } },
              { prompt: '짝에게 다음에 해 볼 자세를 몸으로 보여 주고, 왜 그 자세를 골랐는지 말해요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 친구를 응원하고 내 마음 돌아보기', minutes: 13, tool: 'emotion',
            teacher: '"친구가 \'나는 못 해\'라고 말하면 뭐라고 해 줄까요?" 응원하는 말을 반 전체가 소리 내어 말해 본다. 마음 크기는 정답이 없으니 솔직하게 고르라고 말한다.',
            task: '친구가 포기하려 할 때 할 말을 고르고, 제자리 탐험이 얼마나 즐거웠는지 내 마음을 골라요.',
            levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
            items: [
              { prompt: '준호가 "나는 한 발 서기 못 해, 안 할래" 하고 말해요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '준호', situation: '준호가 한 발 서기를 하다 발이 닿자 "나는 못 해, 안 할래" 하고 앉았어요.', choices: [
                { id: 'agree', text: '"그래, 하지 마" 하고 지나가요', result: '준호는 다음에도 한 발 서기를 하지 않아요.', mood: '속상함', why: '준호가 다시 해 볼 수 있게 도울 수는 없을까요?' },
                { id: 'cheer', text: '"벽을 짚고 같이 해 볼까?" 하고 물어요', result: '준호가 벽을 짚고 다섯까지 버텼어요.', mood: '뿌듯함' },
                { id: 'brag', text: '"나는 스무까지 했는데" 하고 자랑해요', result: '준호가 더 속상해해요.', mood: '속상함', why: '자랑을 들은 준호의 마음을 떠올려 봐요.' }] }, target: { choice: 'cheer' }, difficulty: 0.1 },
              { prompt: '친구를 응원하는 말만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '응원하는 말', cards: ['다시 해 보자', '어제보다 오래 버텼네', '그것도 못 해?', '나만 잘하면 돼'] },
                target: { pick: ['다시 해 보자', '어제보다 오래 버텼네'] }, difficulty: 0.1,
                levels: { challenge: { prompt: '친구를 응원하는 말만 골라 보세요. 카드가 더 많아요.', toolOptions: { cards: ['다시 해 보자', '어제보다 오래 버텼네', '그것도 못 해?', '나만 잘하면 돼', '팔을 벌려 보면 어때?', '빨리 좀 해'] },
                  target: { pick: ['다시 해 보자', '어제보다 오래 버텼네', '팔을 벌려 보면 어때?'] } } } },
              { prompt: '제자리 탐험이 나에게 얼마나 즐거웠나요? 내 마음대로 골라요.', toolOptions: { mode: 'scale', situation: '제자리 움직임 탐험 열두 시간을 떠올려요.', feeling: '신남', steps: 3, scaleLabels: ['조금', '보통', '아주 많이'], after: '솔직하게 골랐어요. 가장 즐거웠던 때를 짝에게 말해 줘요.' }, target: { level: 'any' }, difficulty: 0.05 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"다음에 해 볼 자세를 한 사람씩 몸으로 보여 주세요." 모둠별로 돌아가며 보여 주고, 친구들은 응원의 손뼉을 친다. 다음 시간부터는 자리를 옮기는 탐험, 걷기와 달리기를 시작한다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '제자리 탐험', slots: ['균형 자세', '몸 글자', '높낮이 바꾸기'], cards: ['몸으로 ㅜ 만들기', '발끝으로 한 발 서기', '누웠다가 일어서기'] }, prompt: '세 움직임을 탐험 가지별로 나누어 보세요.', target: { sort: { '균형 자세': ['발끝으로 한 발 서기'], '몸 글자': ['몸으로 ㅜ 만들기'], '높낮이 바꾸기': ['누웠다가 일어서기'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '한 번에 잘 안 된 자세를 다음에 어떻게 하면 좋을까요?', options: ['다시는 하지 않아요', '방법을 바꾸어 다시 해 봐요', '친구에게 대신 해 달라고 해요'], answer: 1, difficulty: 0.1, explain: '방법을 바꾸어 다시 하면 처음엔 안 되던 자세도 할 수 있게 돼요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '제자리 탐험 돌아보기',
      items: [
        { type: 'table', prompt: '탐험마다 해 본 자세를 하나씩 쓰세요.', columns: ['탐험', '해 본 자세'], cells: [['균형 자세', ''], ['몸 글자', ''], ['높낮이 바꾸기', '']] },
        { type: 'short', prompt: '가장 오래 버틴 자세와 어땠는지 쓰세요.' },
        { type: 'short', prompt: '다음에 해 보고 싶은 자세를 쓰세요.' },
        { type: 'choice', prompt: '친구를 응원하는 말에 ○ 하세요.', options: ['다시 해 보자', '그것도 못 해?', '빨리 좀 해'], answer: '다시 해 보자' },
      ],
      easy: {
        note: '해 본 것 하나, 해 볼 것 하나를 떠올려요.',
        items: [
          { type: 'short', prompt: '가장 좋았던 자세를 쓰세요.' },
          { type: 'short', prompt: '다음에 해 볼 자세를 쓰세요.' },
          { type: 'draw', prompt: '다음에 해 볼 자세를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 마음 크기는 세 칸에서 골라요.',
      base: '여섯 장을 세 가지로 나누고, 알맞은 다짐과 응원하는 말을 골라요.',
      challenge: '다짐과 응원하는 말 카드가 여섯 장으로 늘어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 한 번에 잘 안 되는 자세는 나에게 맞지 않는다고 여긴다 → 9·10차시 기록에서 늘어난 친구를 예로 든다. ② 다음 자세를 정하지 못한다 → 오늘 짧게 버틴 자세 하나를 고르게 한다. ③ 응원 대신 자랑을 한다 → 친구 자리에서 그 말을 들으면 어떤지 묻는다.',
  }));

  // ───────────────────────── 13~16차시: 걷기와 달리기의 다른 점·빠르기 ─────────────────────────

  lessons.push(L(13, {
    title: '걷기와 달리기, 발이 어떻게 다를까',
    objective: '걷기와 달리기를 해 보고, 달리기에는 두 발이 모두 바닥에서 떨어지는 때가 있다는 다른 점을 말할 수 있다.',
    illustration: ART('a paper child walking with one foot always touching the ground next to a paper child running with both feet in the air for a moment, footprints on a path', '두 발이 모두 떠요!', [
      { motif: 'tree', x: 70, y: 214 }, { motif: 'cloud', x: 330, y: 70 }, { motif: 'flower', x: 410, y: 230 }]),
    safety: [SHOE, LOOK, '달리기는 운동장이나 강당에서만 하고, 교실과 복도에서는 걸어요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"이제 자리를 옮기는 탐험이에요. 걷기와 달리기는 무엇이 다를까요?" "달리기가 더 빨라요"라는 대답이 나오면 묻는다. "아주 천천히 달리면 걷기와 같아질까요?" 교사가 아주 천천히 달려 보이고, 발을 잘 보라고 한다. 걷기와 달리기는 빠르기만 다르다고 여기는 생각을 여기서 흔든다.',
        student: '선생님이 천천히 달릴 때 발을 잘 보세요. 걷기와 무엇이 다른가요?',
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 걷기와 달리기의 다른 점 찾기', minutes: 14, tool: 'mindmap',
            teacher: '"짝이 걸을 때와 달릴 때 발을 쪼그려 앉아 지켜보세요. 두 발이 모두 떠 있는 때가 있나요?" 강당에서 짝을 번갈아 관찰하게 한다. "천천히 달려도 두 발이 떠요?" 예상을 고르고 직접 확인하게 한다.',
            task: '짝이 걷고 달리는 발을 관찰한 뒤, 걷기와 달리기의 특징 카드를 나누고 두 발이 떠 있는 움직임을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '짝과 번갈아 강당 끝까지 걷고 달려요. 지켜보는 짝은 발을 보고 두 발이 모두 떠 있는 때를 찾아요.', free: true, talk: true },
              { prompt: '걷기와 달리기의 특징 카드를 나누어 보세요.', toolOptions: { topic: '걷기와 달리기', slots: ['걷기', '달리기'], cards: ['한 발은 늘 바닥에 닿아 있어요', '두 발이 모두 떠 있는 때가 있어요', '숨이 금방 차요', '오래 해도 숨이 덜 차요'] },
                target: { sort: { '걷기': ['한 발은 늘 바닥에 닿아 있어요', '오래 해도 숨이 덜 차요'], '달리기': ['두 발이 모두 떠 있는 때가 있어요', '숨이 금방 차요'] } }, difficulty: 0.15,
                hints: ['짝의 발을 지켜본 것을 떠올려 보세요. 바닥에 닿은 발이 늘 있었나요?', '달리기 칸 카드를 다시 읽어 보세요. 걸을 때도 그런 일이 있나요?', '걸을 때는 한 발이 늘 닿아 있고, 달릴 때는 두 발이 모두 뜨는 때가 있어요.'] },
              { prompt: '두 발이 모두 떠 있는 때가 있는 움직임만 골라 보세요.', toolOptions: { mode: 'pick', basket: '두 발이 다 떠요', cards: ['천천히 달리기', '빠르게 걷기', '걸어서 계단 오르기', '제자리에서 달리기'] },
                target: { pick: ['천천히 달리기', '제자리에서 달리기'] }, difficulty: 0.25,
                predict: { q: '천천히 달려도 두 발이 모두 뜰까요?', options: ['떠요', '안 떠요'], answer: 0 },
                conclude: '천천히 달려도 두 발이 모두 뜨는 때가 있어요. 걷기와 달리기는 빠르기만 다른 게 아니에요.',
                hints: ['카드의 움직임을 직접 해 보며 두 발이 함께 떨어지는지 살펴요.', '빠르게 걸을 때 두 발이 모두 떠 있었나요? 다시 해 보세요.', '달리기는 천천히 해도, 제자리에서 해도 두 발이 모두 떠요. 걷기는 빨라도 한 발이 닿아 있어요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 걷기·달리기 차례와 걸음 수 기록', minutes: 12, tool: 'timer',
            teacher: '"몸을 데울 때는 걷기를 먼저, 그다음 달리기를 해요. 같은 것끼리는 천천히부터 해요." 차례를 놓은 뒤 그대로 해 본다. 같은 거리(교실 앞에서 뒤까지, 또는 강당 한쪽 끝까지)를 걸을 때와 달릴 때 걸음 수를 세어 적게 한다.',
            task: '달리기 전 점검을 하고, 걷기·달리기 차례를 놓은 뒤, 같은 거리를 걸을 때와 달릴 때 걸음 수를 세어 적어요.',
            levels: { easy: {}, base: {}, challenge: { stopwatch: true } },
            items: [
              { prompt: '걷고 달리기 전에 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['신발 끈이 단단히 묶였어요', '달릴 길에 물건이 없어요', '친구와 부딪히지 않게 간격을 두었어요'] }, target: { safety: true }, difficulty: 0.05 },
              { prompt: '걷기를 먼저, 그다음 달리기를 해요. 같은 것끼리는 천천히부터예요. 차례대로 놓아요.', toolOptions: { title: '몸 데우기 차례', cards: ['빠르게 달리기', '천천히 걷기', '천천히 달리기', '빠르게 걷기'] }, target: { order: ['천천히 걷기', '빠르게 걷기', '천천히 달리기', '빠르게 달리기'] }, difficulty: 0.2,
                levels: { easy: { state: { order: ['천천히 걷기', '빠르게 걷기', '빠르게 달리기', '천천히 달리기'] } } },
                hints: ['먼저 걷기 카드 두 장과 달리기 카드 두 장으로 나누어 보세요.', '걷기 두 장이 앞에 있나요? 그 안에서 천천히가 먼저인가요?', '천천히 걷기 → 빠르게 걷기 → 천천히 달리기 → 빠르게 달리기 차례예요.'] },
              { prompt: '같은 거리를 걸어서 갈 때와 달려서 갈 때 걸음 수를 세어 적어요.', toolOptions: { title: '같은 거리 걸음 수', fields: ['걸어서', '달려서'], unit: '걸음' }, target: { records: true }, difficulty: 0.1,
                predict: { q: '달려서 가면 걸음 수가 어떻게 될까요?', options: ['더 많아요', '더 적어요', '같아요'], answer: 1 },
                conclude: '달릴 때는 한 걸음이 더 길어서 같은 거리를 더 적은 걸음으로 가요.' },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"걷기와 달리기는 빠르기 말고 무엇이 달랐나요?" 두 발이 모두 뜨는 때가 있는지를 손동작(두 손바닥을 바닥에서 띄우기)으로 함께 정리한다. 다음 시간에는 빠르게 가도 되는 곳과 천천히 가야 하는 곳을 찾는다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', basket: '두 발이 다 떠요', cards: ['빠르게 달리기', '천천히 걷기', '살금살금 걷기'] }, prompt: '두 발이 모두 떠 있는 때가 있는 움직임만 골라 보세요.', target: { pick: ['빠르게 달리기'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '걷기와 달리기는 빠르기만 다를까요?', options: ['네, 빠르기만 달라요', '아니요, 달리기는 두 발이 모두 뜨는 때가 있어요'], answer: 1, difficulty: 0.15, explain: '천천히 달려도 두 발이 모두 뜨는 때가 있어서 걷기와 달라요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '걷기와 달리기',
      items: [
        { type: 'table', prompt: '같은 거리를 갈 때 걸음 수를 쓰세요.', columns: ['걸어서', '달려서'], rows: 1 },
        { type: 'choice', prompt: '두 발이 모두 떠 있는 때가 있는 것에 ○ 하세요.', options: ['걷기', '달리기'], answer: '달리기' },
        { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '걸을 때는 한 발이 늘 바닥에 ___ 있어요.', answer: '닿아' },
        { type: 'draw', prompt: '달릴 때 두 발이 모두 떠 있는 모습을 그려 보세요.' },
      ],
      easy: {
        note: '짝의 발을 쪼그려 앉아 지켜봐요.',
        items: [
          { type: 'choice', prompt: '달릴 때 두 발이 모두 뜨나요?', options: ['떠요', '안 떠요'], answer: '떠요' },
          { type: 'table', prompt: '걸음 수를 쓰세요.', columns: ['걸어서', '달려서'], rows: 1 },
          { type: 'draw', prompt: '달리는 내 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 몸 데우기 차례는 두 장만 바꾸면 돼요.',
      base: '특징 카드를 나누고, 두 발이 뜨는 움직임을 고르고, 차례 네 장을 스스로 놓아요.',
      challenge: '시간 재기로 걸어갈 때와 달려갈 때 걸린 시간도 재어 봐요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 걷기와 달리기는 빠르기만 다르다고 여긴다 → 아주 천천히 달리기와 빠르게 걷기를 나란히 보여 준다. ② 관찰할 때 얼굴만 본다 → 쪼그려 앉아 발 높이에서 보게 한다. ③ 걸음 수를 세다 놓친다 → 짝이 손뼉으로 걸음마다 세어 준다. 달리기는 강당·운동장에서만 한다.',
  }));

  lessons.push(L(14, {
    title: '빠르게 갈 곳과 천천히 갈 곳 나누기',
    objective: '장소와 상황을 보고 빠르게 달려도 되는 곳과 천천히 걸어야 하는 곳을 가르고, 북소리 신호에 맞추어 걷기와 달리기를 바꿀 수 있다.',
    illustration: ART('a paper school map showing a wide playground where children run and a hallway, crosswalk and wet water fountain where children walk slowly', '어디서 달릴까요?', [
      { motif: 'house', x: 100, y: 214 }, { motif: 'tree', x: 330, y: 214 }, { motif: 'cloud', x: 400, y: 70 }]),
    safety: [LOOK, '건널목과 복도, 계단에서는 뛰지 않아요.', SHOE],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"우리 학교에서 마음껏 달려도 되는 곳은 어디일까요? 꼭 걸어야 하는 곳은요?" 학생 대답을 칠판 두 칸에 나누어 적는다. "어느 곳에서나 빠르게 가면 좋을까요?" 장소와 상황에 따라 빠르기를 바꾸어야 한다는 것을 짚는다.',
        student: '우리 학교에서 달려도 되는 곳과 걸어야 하는 곳을 하나씩 짝에게 말해요.',
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 빠르게 갈 곳, 천천히 갈 곳 나누기', minutes: 13, tool: 'mindmap',
            teacher: '"이 곳에서 빠르게 달리면 무슨 일이 생길까요?" 카드마다 생길 수 있는 일을 한 가지씩 말하게 한다. 건널목은 초록불이어도 뛰지 않고 걷는다는 것을 짚는다.',
            task: '장소와 상황 카드를 읽고, 빠르게 달려도 되는 곳과 천천히 걸어야 하는 곳으로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '빠르게 달려도 되는 곳과 천천히 걸어야 하는 곳으로 나누어 보세요.', toolOptions: { topic: '어떻게 갈까?', slots: ['빠르게 달려도 돼요', '천천히 걸어요'], cards: ['넓은 운동장 술래잡기', '교실 앞 복도', '건널목', '잔디밭 달리기 놀이'] },
                target: { sort: { '빠르게 달려도 돼요': ['넓은 운동장 술래잡기', '잔디밭 달리기 놀이'], '천천히 걸어요': ['교실 앞 복도', '건널목'] } }, difficulty: 0.1 },
              { prompt: '이번 상황도 나누어 보세요. 그때 들고 있는 것과 바닥도 살펴요.', toolOptions: { topic: '어떻게 갈까?', slots: ['빠르게 달려도 돼요', '천천히 걸어요'], cards: ['비 와서 미끄러운 길', '급식 판을 들고 갈 때', '체육 시간 이어달리기', '강당에서 공 따라가기 놀이'] },
                target: { sort: { '빠르게 달려도 돼요': ['체육 시간 이어달리기', '강당에서 공 따라가기 놀이'], '천천히 걸어요': ['비 와서 미끄러운 길', '급식 판을 들고 갈 때'] } }, difficulty: 0.2,
                hints: ['카드마다 빠르게 달리면 어떤 일이 생길지 떠올려 보세요.', '천천히 칸 카드는 넘어지거나 쏟을 수 있는 곳인가요?', '미끄러운 길과 급식 판을 들 때는 천천히, 이어달리기와 공 따라가기 놀이는 빠르게 가도 돼요.'],
                levels: { challenge: { prompt: '여섯 상황을 나누어 보세요. 들고 있는 것과 바닥도 살펴요.', toolOptions: { cards: ['비 와서 미끄러운 길', '급식 판을 들고 갈 때', '체육 시간 이어달리기', '강당에서 공 따라가기 놀이', '계단을 내려갈 때', '운동장 고깔 돌아오기 놀이'] },
                  target: { sort: { '빠르게 달려도 돼요': ['체육 시간 이어달리기', '강당에서 공 따라가기 놀이', '운동장 고깔 돌아오기 놀이'], '천천히 걸어요': ['비 와서 미끄러운 길', '급식 판을 들고 갈 때', '계단을 내려갈 때'] } } } } },
              { prompt: '쉬는 시간에 복도로 나가요. 복도에서 지킬 일만 골라 보세요.', toolOptions: { mode: 'pick', basket: '복도에서 지켜요', cards: ['오른쪽으로 걸어요', '모퉁이에서는 앞을 살펴요', '친구를 앞질러 달려요', '뒤로 걸으며 이야기해요'] },
                target: { pick: ['오른쪽으로 걸어요', '모퉁이에서는 앞을 살펴요'] }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 북소리 신호로 걷기·달리기 바꾸기', minutes: 13, tool: 'pattern',
            teacher: '"북을 천천히 치면 걷기, 빠르게 치면 달리기예요." 강당에서 북소리에 맞추어 걷기와 달리기를 바꿔 본 뒤 신호 줄의 빈칸을 채운다. 바뀌는 신호에서 바로 바꾸지 못하는 학생에게 "북소리가 바뀌는 것을 귀로 먼저 들어요"라고 말한다.',
            task: '북소리 신호 줄의 규칙을 찾아 빈칸을 채우고, 그 신호대로 강당에서 걷기와 달리기를 바꾸어 봐요.',
            levels: { easy: { perRow: 4 }, base: {}, challenge: { revealAfterCheck: true } },
            items: [
              { prompt: '\'걷기, 달리기\'가 되풀이되는 신호예요. 빈칸을 채워요.', toolOptions: { seq: ['걷기', '달리기', '걷기', '달리기', '걷기', null, null, '달리기'] }, target: { fill: ['달리기', '걷기'] }, difficulty: 0.1,
                levels: { easy: { toolOptions: { perRow: 2 } } } },
              { prompt: '\'걷기, 걷기, 달리기\'가 되풀이되는 신호예요. 빈칸을 채워요.', toolOptions: { seq: ['걷기', '걷기', '달리기', '걷기', null, '달리기', null, '걷기', null] }, target: { fill: ['걷기', '걷기', '달리기'] }, difficulty: 0.2,
                levels: { easy: { toolOptions: { perRow: 3 } } } },
              { prompt: '\'걷기, 달리기, 멈추기\'가 되풀이되는 신호예요. 빈칸을 채워요.', toolOptions: { seq: ['걷기', '달리기', '멈추기', '걷기', null, '멈추기', null, '달리기', null] }, target: { fill: ['달리기', '걷기', '멈추기'] }, difficulty: 0.25,
                levels: { easy: { toolOptions: { perRow: 3 } } } },
              { prompt: '선생님 북소리에 맞추어 강당을 걷다가 달리다가 멈추어요. 짝은 신호에 맞게 바꾸었는지 봐 줘요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"건널목에서 초록불이 깜빡이면 달려서 건널까요?" 출구 질문 뒤 함께 이야기하고, 다음 초록불을 기다린다는 것을 짚는다. 다음 시간에는 동물 걸음을 흉내 내며 여러 가지 걷기를 탐험한다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '어떻게 갈까?', slots: ['빠르게 달려도 돼요', '천천히 걸어요'], cards: ['도서관 안', '운동장 달리기 시합', '물이 고인 수돗가'] }, prompt: '세 곳을 빠르게 달려도 되는 곳과 천천히 걸어야 하는 곳으로 나누어 보세요.', target: { sort: { '빠르게 달려도 돼요': ['운동장 달리기 시합'], '천천히 걸어요': ['도서관 안', '물이 고인 수돗가'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '건널목 초록불이 깜빡일 때는 어떻게 할까요?', options: ['빨리 달려서 건너요', '멈추고 다음 초록불을 기다려요'], answer: 1, difficulty: 0.15, explain: '깜빡이는 초록불에 달리면 다칠 수 있어요. 다음 초록불에 걸어서 건너요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '어디서 달리고 어디서 걸을까',
      items: [
        { type: 'table', prompt: '우리 학교에서 찾아 쓰세요.', columns: ['빠르게 달려도 되는 곳', '천천히 걸어야 하는 곳'], rows: 2 },
        { type: 'choice', prompt: '천천히 걸어야 하는 곳에 ○ 하세요.', options: ['운동장 술래잡기', '건널목', '잔디밭 달리기 놀이'], answer: '건널목' },
        { type: 'figure', prompt: '신호 줄의 빈칸에 들어갈 말을 쓰세요.', tool: 'pattern', figures: [{ options: { seq: ['걷기', '달리기', '걷기', '달리기', null, null] }, caption: '빈칸: ___, ___' }], answer: '걷기, 달리기' },
        { type: 'short', prompt: '복도에서 달리면 생길 수 있는 일을 쓰세요.' },
      ],
      easy: {
        note: '넘어지거나 부딪힐 수 있는 곳은 천천히 걸어요.',
        items: [
          { type: 'choice', prompt: '달려도 되는 곳에 ○ 하세요.', options: ['운동장', '복도'], answer: '운동장' },
          { type: 'choice', prompt: '걸어야 하는 곳에 ○ 하세요.', options: ['건널목', '잔디밭 놀이'], answer: '건널목' },
          { type: 'draw', prompt: '운동장에서 달리는 내 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 신호 줄은 한 줄에 묶음 하나씩 보여요.',
      base: '상황 카드를 나누고, 세 가지 신호 줄의 빈칸을 채워요.',
      challenge: '상황 카드가 여섯 장으로 늘고, 신호 줄에서 틀린 칸을 알려 주지 않아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 넓으면 어디서나 달려도 된다고 여긴다 → 바닥(미끄러움)과 들고 있는 것(급식 판)도 살피게 한다. ② 건널목 초록불이 깜빡이면 달려야 한다고 여긴다 → 다음 신호를 기다린다고 약속한다. ③ 신호가 바뀌어도 하던 것을 계속한다 → 북소리를 듣는 귀를 먼저 쓰게 한다.',
  }));

  lessons.push(L(15, {
    title: '동물 걸음 흉내로 여러 가지 걷기',
    objective: '동물 걸음을 흉내 내어 빠르기와 발소리가 다른 걷기를 해 보고, 상황에 알맞은 걸음을 고를 수 있다.',
    illustration: ART('a parade of paper children imitating animal walks across a meadow: a slow turtle crawl, a waddling penguin, a stomping elephant and a racing cheetah', '동물처럼 걸어요', [
      { motif: 'tree', x: 70, y: 214 }, { motif: 'bird', x: 360, y: 86 }, { motif: 'flower', x: 410, y: 230 }]),
    safety: [SPACE, LOOK, '쿵쿵 걸음은 발바닥 전체로 살살 디디고, 발을 세게 구르지 않아요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"오늘 탐험지는 동물 나라예요. 거북은 어떻게 걸을까요? 펭귄은요?" 학생 몇 명이 앞에 나와 흉내 내게 한다. "같은 걷기인데 빠르기도 다르고 발소리도 달라요. 오늘은 여러 가지 걸음을 탐험해요."',
        student: '거북과 펭귄 걸음을 흉내 내 봐요. 빠르기와 발소리가 어떻게 다른가요?',
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 걸음과 동물 잇고 빠르기로 나누기', minutes: 13, tool: 'mindmap',
            teacher: '"카드에 적힌 걸음을 먼저 해 보세요. 어떤 동물이 떠오르나요?" 한 모둠씩 흉내 내고 다른 모둠이 맞힌다. 빠르기로 나눌 때는 실제로 강당 끝까지 가 보며 견주게 한다.',
            task: '걸음 설명을 읽고 몸으로 흉내 낸 뒤 동물과 잇고, 천천히 가는 걸음과 빠르게 가는 걸음으로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '걸음마다 어울리는 동물 카드를 이어 보세요.', toolOptions: { mode: 'match', topic: '누구 걸음일까?', slots: [{ id: 's1', label: '엉금엉금 아주 천천히 기어가요' }, { id: 's2', label: '뒤뚱뒤뚱 작은 걸음으로 걸어요' }, { id: 's3', label: '쿵쿵 크고 느린 걸음으로 걸어요' }], cards: ['거북', '펭귄', '코끼리'] },
                target: { match: { s1: '거북', s2: '펭귄', s3: '코끼리' } }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['거북', '펭귄', '코끼리', '독수리'] } } } },
              { prompt: '이번 걸음에도 어울리는 동물 카드를 이어 보세요.', toolOptions: { mode: 'match', topic: '누구 걸음일까?', slots: [{ id: 's1', label: '살금살금 소리 없이 걸어요' }, { id: 's2', label: '성큼성큼 긴 다리로 걸어요' }, { id: 's3', label: '쌩쌩 아주 빠르게 달려요' }], cards: ['고양이', '기린', '치타'] },
                target: { match: { s1: '고양이', s2: '기린', s3: '치타' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['고양이', '기린', '치타', '달팽이'] } } } },
              { prompt: '동물 걸음을 천천히 가는 걸음과 빠르게 가는 걸음으로 나누어 보세요.', toolOptions: { topic: '빠르기', slots: ['천천히 가요', '빠르게 가요'], cards: ['엉금엉금 거북 걸음', '쌩쌩 치타 달리기', '느릿느릿 달팽이 걸음', '다그닥다그닥 말 달리기'] },
                target: { sort: { '천천히 가요': ['엉금엉금 거북 걸음', '느릿느릿 달팽이 걸음'], '빠르게 가요': ['쌩쌩 치타 달리기', '다그닥다그닥 말 달리기'] } }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 발소리를 바꾸어 걷고 알맞은 걸음 고르기', minutes: 13, tool: 'story',
            teacher: '"쿵쿵 걸음과 살금살금 걸음은 무엇이 달라요?" 발바닥 전체로 디디는 걸음과 발끝으로 살짝 디디는 걸음을 번갈아 해 본다. "도서관 앞을 지날 때는 어떤 걸음이 좋을까요?" 상황에 맞게 걸음을 바꾼다는 것을 짚는다.',
            task: '걸음을 발소리가 큰 것과 작은 것으로 나누고, 상황에 알맞은 걸음을 고른 뒤 동물 행진을 해요.',
            levels: CARD_LV,
            items: [
              { prompt: '걸음을 발소리가 큰 걸음과 작은 걸음으로 나누어 보세요.', toolOptions: { mode: 'sort', slots: ['발소리가 커요', '발소리가 작아요'], cards: ['쿵쿵 코끼리 걸음', '살금살금 고양이 걸음', '쿵쾅쿵쾅 공룡 걸음', '사뿐사뿐 발끝 걸음'] },
                target: { sort: { '발소리가 커요': ['쿵쿵 코끼리 걸음', '쿵쾅쿵쾅 공룡 걸음'], '발소리가 작아요': ['살금살금 고양이 걸음', '사뿐사뿐 발끝 걸음'] } }, difficulty: 0.1 },
              { prompt: '아기가 자는 방 앞을 지나가요. 알맞은 걸음만 골라 보세요.', toolOptions: { mode: 'pick', basket: '이렇게 걸어요', cards: ['살금살금 고양이 걸음', '쿵쿵 코끼리 걸음', '사뿐사뿐 발끝 걸음', '쌩쌩 치타 달리기'] },
                target: { pick: ['살금살금 고양이 걸음', '사뿐사뿐 발끝 걸음'] }, difficulty: 0.15,
                levels: { challenge: { prompt: '아기가 자는 방 앞을 지나가요. 알맞은 걸음만 골라 보세요. 카드가 더 많아요.', toolOptions: { cards: ['살금살금 고양이 걸음', '쿵쿵 코끼리 걸음', '사뿐사뿐 발끝 걸음', '쌩쌩 치타 달리기', '쿵쾅쿵쾅 공룡 걸음', '느릿느릿 달팽이 걸음'] },
                  target: { pick: ['살금살금 고양이 걸음', '사뿐사뿐 발끝 걸음', '느릿느릿 달팽이 걸음'] } } } },
              { prompt: '모둠별로 동물 하나를 골라 강당 끝까지 그 걸음으로 행진해요. 다른 모둠은 무슨 동물인지 맞혀요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 해 본 걸음 가운데 빠르기도 느리고 소리도 작은 걸음은 무엇이었나요?" 상황에 따라 걸음을 고를 수 있다는 것을 정리한다. 다음 시간에는 큰 걸음과 작은 걸음으로 걸음 수를 세어 본다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '누구 걸음일까?', slots: [{ id: 'e1', label: '깡충깡충 뛰어가요' }, { id: 'e2', label: '느릿느릿 기어가요' }], cards: ['토끼', '달팽이'] }, prompt: '두 걸음에 어울리는 동물 카드를 이어 보세요.', target: { match: { e1: '토끼', e2: '달팽이' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '시험을 보는 반 앞 복도를 지날 때 알맞은 걸음은?', options: ['쿵쿵 코끼리 걸음', '살금살금 고양이 걸음', '쌩쌩 치타 달리기'], answer: 1, difficulty: 0.1, explain: '조용히 해야 하는 곳에서는 발소리가 작은 걸음으로 지나가요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '동물처럼 걸어요',
      items: [
        { type: 'figure', wide: true, prompt: '걸음과 동물을 선으로 이으세요.', tool: 'mindmap', figures: [{ options: { mode: 'match', topic: '누구 걸음?', slots: [{ id: 's1', label: '엉금엉금' }, { id: 's2', label: '뒤뚱뒤뚱' }], cards: ['거북', '펭귄'] }, caption: '' }], answer: '엉금엉금-거북, 뒤뚱뒤뚱-펭귄' },
        { type: 'table', prompt: '걸음을 나누어 쓰세요.', columns: ['발소리가 큰 걸음', '발소리가 작은 걸음'], rows: 2 },
        { type: 'choice', prompt: '빠르게 가는 걸음에 ○ 하세요.', options: ['달팽이 걸음', '치타 달리기', '거북 걸음'], answer: '치타 달리기' },
        { type: 'draw', prompt: '내가 흉내 낸 동물 걸음을 그려 보세요.' },
      ],
      easy: {
        note: '몸으로 흉내 내 보고 골라요.',
        items: [
          { type: 'choice', prompt: '살금살금 걷는 동물에 ○ 하세요.', options: ['고양이', '코끼리'], answer: '고양이' },
          { type: 'choice', prompt: '빠르게 달리는 동물에 ○ 하세요.', options: ['치타', '거북'], answer: '치타' },
          { type: 'draw', prompt: '흉내 낸 동물 걸음을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '걸음과 동물을 잇고, 빠르기와 발소리로 나누어요.',
      challenge: '걸음에 맞지 않는 동물 카드와 고를 걸음 카드가 더 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 코끼리 걸음에서 발을 세게 구른다 → 발바닥 전체로 살살 디디게 한다. ② 걷기는 다 똑같다고 여긴다 → 빠르기와 발소리 두 가지로 견주게 한다. ③ 동물 이름만 보고 짐작한다 → 반드시 걸음을 먼저 해 본다.',
  }));

  lessons.push(L(16, {
    title: '큰 걸음 작은 걸음으로 걸음 수 견주기',
    objective: '같은 거리를 큰 걸음과 작은 걸음으로 걸어 걸음 수를 견주고, 상황에 알맞은 걸음 크기를 고를 수 있다.',
    illustration: ART('two rows of paper footprints across a mat, one row with a few long strides and the other with many tiny steps, a child counting with fingers', '몇 걸음일까요?', [
      { motif: 'tree', x: 80, y: 214 }, { motif: 'sun', x: 360, y: 70, s: 0.6 }, { motif: 'leaf', x: 410, y: 230 }]),
    safety: [SPACE, LOOK, '큰 걸음은 넘어지지 않을 만큼만 벌려요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"교실 앞에서 뒤까지 몇 걸음일까요?" 예상한 수를 몇 명에게 듣는다. 키 큰 선생님과 학생 한 명이 함께 걸어 보며 걸음 수가 다른 까닭을 묻는다. "한 걸음의 크기가 다르면 걸음 수도 달라져요. 오늘은 걸음의 크기를 탐험해요."',
        student: '교실 앞에서 뒤까지 몇 걸음일지 예상해 손가락으로 보여 줘요.',
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 큰 걸음과 작은 걸음 수 세기', minutes: 14, tool: 'timer',
            teacher: '"같은 길을 성큼성큼 큰 걸음으로 가면 걸음 수가 많아질까요, 적어질까요?" 예상을 고른 뒤 짝이 소리 내어 세어 준다. 작은 걸음은 발뒤꿈치를 앞발 끝에 붙여 걷게 하면 세기 쉽다.',
            task: '같은 거리를 큰 걸음과 작은 걸음으로 걸어 걸음 수를 세어 적고, 민지의 기록도 옮겨 적어요.',
            levels: { easy: {}, base: {}, challenge: { stopwatch: true } },
            items: [
              { prompt: '짝과 번갈아 같은 길을 큰 걸음과 작은 걸음으로 걸어요. 짝은 걸음 수를 소리 내어 세어 줘요.', free: true, talk: true },
              { prompt: '같은 길을 큰 걸음과 작은 걸음으로 걸은 걸음 수를 적어요.', toolOptions: { title: '같은 길 걸음 수', fields: ['큰 걸음', '작은 걸음'], unit: '걸음' }, target: { records: true }, difficulty: 0.1,
                predict: { q: '큰 걸음으로 가면 걸음 수가 어떻게 될까요?', options: ['더 많아요', '더 적어요'], answer: 1 },
                conclude: '한 걸음이 클수록 같은 길을 더 적은 걸음으로 가요.',
                levels: { challenge: { toolOptions: { fields: ['큰 걸음', '보통 걸음', '작은 걸음'] } } } },
              { prompt: '민지의 기록이에요: 큰 걸음 8걸음, 작은 걸음 15걸음. 칸에 그대로 옮겨 적어요.', toolOptions: { title: '민지의 기록', fields: ['큰 걸음', '작은 걸음'], unit: '걸음' }, target: { records: [8, 15] }, difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 상황에 알맞은 걸음 크기 고르기', minutes: 12, tool: 'mindmap',
            teacher: '"미끄러운 얼음 위에서 큰 걸음으로 가면 어떻게 될까요?" 미끄러운 바닥을 흉내 내어 작은 걸음으로 걸어 보게 한다. 넓은 곳에서 멀리 갈 때는 큰 걸음이 좋다는 것과 견준다.',
            task: '상황 카드를 읽고 큰 걸음이 좋은 곳과 작은 걸음이 좋은 곳으로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '큰 걸음이 좋은 상황과 작은 걸음이 좋은 상황으로 나누어 보세요.', toolOptions: { topic: '걸음 크기', slots: ['큰 걸음이 좋아요', '작은 걸음이 좋아요'], cards: ['넓은 잔디밭을 가로지를 때', '얼음처럼 미끄러운 길', '사람이 많은 복도', '운동장 끝까지 빨리 갈 때'] },
                target: { sort: { '큰 걸음이 좋아요': ['넓은 잔디밭을 가로지를 때', '운동장 끝까지 빨리 갈 때'], '작은 걸음이 좋아요': ['얼음처럼 미끄러운 길', '사람이 많은 복도'] } }, difficulty: 0.15,
                hints: ['카드마다 큰 걸음으로 가면 어떤 일이 생길지 떠올려 보세요.', '작은 걸음 칸 카드는 미끄러지거나 부딪힐 수 있는 곳인가요?', '넓은 곳에서 멀리 갈 때는 큰 걸음, 미끄럽거나 사람이 많은 곳은 작은 걸음이 좋아요.'] },
              { prompt: '같은 길을 가장 적은 걸음 수로 가는 걸음 하나만 골라 보세요.', toolOptions: { mode: 'pick', basket: '가장 적은 걸음 수', cards: ['성큼성큼 큰 걸음', '보통 걸음', '종종 작은 걸음'] },
                target: { pick: ['성큼성큼 큰 걸음'] }, difficulty: 0.1,
                hints: ['한 걸음이 클수록 같은 길을 몇 걸음에 갈 수 있을지 떠올려 보세요.', '고른 걸음이 한 번에 가장 멀리 가는 걸음인가요?', '한 걸음이 가장 큰 성큼성큼 걸음이 걸음 수가 가장 적어요.'] },
              { prompt: '선생님이 \'성큼\' 하면 큰 걸음, \'종종\' 하면 작은 걸음으로 바꾸어 강당을 걸어요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"같은 길인데 왜 걸음 수가 달랐을까요?" 한 걸음의 크기 때문이라는 대답을 칠판에 적는다. 다음 시간에는 고깔 사이를 방향을 바꾸며 달린다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '걸음 크기', slots: ['큰 걸음이 좋아요', '작은 걸음이 좋아요'], cards: ['비 온 뒤 젖은 계단', '넓은 공원에서 멀리 갈 때', '줄을 서서 따라갈 때'] }, prompt: '세 상황을 큰 걸음이 좋은 곳과 작은 걸음이 좋은 곳으로 나누어 보세요.', target: { sort: { '큰 걸음이 좋아요': ['넓은 공원에서 멀리 갈 때'], '작은 걸음이 좋아요': ['비 온 뒤 젖은 계단', '줄을 서서 따라갈 때'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '하준이는 같은 길을 큰 걸음으로 6걸음, 작은 걸음으로 12걸음에 갔어요. 한 걸음이 더 큰 것은?', options: ['6걸음에 간 걸음', '12걸음에 간 걸음'], answer: 0, difficulty: 0.2, explain: '걸음 수가 적을수록 한 걸음이 커요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '큰 걸음 작은 걸음',
      items: [
        { type: 'table', prompt: '같은 길을 걸은 걸음 수를 쓰세요.', columns: ['큰 걸음', '작은 걸음'], rows: 1 },
        { type: 'choice', prompt: '걸음 수가 더 적은 것에 ○ 하세요.', options: ['큰 걸음', '작은 걸음'], answer: '큰 걸음' },
        { type: 'choice', prompt: '미끄러운 길에서 알맞은 걸음에 ○ 하세요.', options: ['성큼성큼 큰 걸음', '종종 작은 걸음'], answer: '종종 작은 걸음' },
        { type: 'draw', prompt: '큰 걸음 발자국과 작은 걸음 발자국을 그려 보세요.' },
      ],
      easy: {
        note: '한 걸음이 크면 걸음 수가 적어요.',
        items: [
          { type: 'table', prompt: '걸음 수를 쓰세요.', columns: ['큰 걸음', '작은 걸음'], rows: 1 },
          { type: 'choice', prompt: '걸음 수가 적은 것에 ○ 하세요.', options: ['큰 걸음', '작은 걸음'], answer: '큰 걸음' },
          { type: 'draw', prompt: '큰 걸음으로 걷는 내 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 큰 걸음과 작은 걸음 두 가지만 세어요.',
      base: '두 걸음 수를 적고 상황에 알맞은 걸음 크기를 골라요.',
      challenge: '보통 걸음까지 세 가지를 세고, 시간 재기로 걸린 시간도 견주어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 큰 걸음이 걸음 수도 많다고 여긴다 → 예상을 고른 뒤 직접 세어 확인하게 한다. ② 걸음 수를 세다 놓친다 → 짝이 손뼉으로 세어 준다. ③ 큰 걸음을 너무 벌려 넘어진다 → 넘어지지 않을 만큼만 벌린다고 약속한다.',
  }));

  // ───────────────────────── 17~20차시: 고깔 길·방향 바꾸기·이어달리기 ─────────────────────────

  lessons.push(L(17, {
    title: '고깔 사이로 지그재그 길 달리기',
    objective: '고깔과 후프로 달리기 길을 꾸미고, 고깔 사이를 방향을 바꾸며 둘레를 살펴 달릴 수 있다.',
    illustration: ART('a playground course of orange paper cones in a zigzag line and colorful hoops, children running between them with a start circle and a finish star', '고깔 사이로 지그재그', [
      { motif: 'tree', x: 70, y: 214 }, { motif: 'star', x: 410, y: 100 }, { motif: 'cloud', x: 300, y: 60 }]),
    safety: [SHOE, LOOK, '고깔을 밟거나 걷어차지 않고, 넘어진 고깔은 멈춘 뒤 세워요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"탐험하다 길에 나무가 서 있으면 어떻게 지나갈까요?" 고깔 세 개를 세워 두고 한 학생이 사이를 돌아 지나가게 한다. "고깔 사이를 지날 때 앞만 보면 될까요?" 방향을 바꿀 때는 가는 쪽과 옆을 함께 봐야 한다는 것을 짚는다.',
        student: '고깔 사이를 돌아 지나가는 친구를 보고, 방향을 바꿀 때 어디를 보는지 살펴봐요.',
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 모둠 고깔 길 꾸미기', minutes: 13, tool: 'collage',
            teacher: '"세모는 고깔, 동그라미는 후프, 별은 도착이에요." 판에 길을 꾸민 뒤 실제 강당에 그대로 놓아 본다. 고깔을 너무 붙여 놓은 모둠에게 "고깔 사이로 몸이 지나갈 수 있을까요?"라고 묻는다.',
            task: '세모(고깔)·동그라미(후프)·별(도착)로 달리기 길을 꾸미고, 모둠 길을 강당에 그대로 놓아요.',
            levels: {
              easy: { shapes: ['triangle', 'circle', 'star'], colors: ['주황', '파랑', '노랑'], sizes: ['m'] },
              base: { shapes: ['triangle', 'circle', 'star', 'square'], colors: ['주황', '파랑', '노랑', '초록'] },
              challenge: {},
            },
            items: [
              { prompt: '출발 동그라미 1개, 고깔 세모 4개, 도착 별 1개로 달리기 길을 꾸며 보세요.', target: { has: [{ shape: 'circle', n: 1 }, { shape: 'triangle', n: 4 }, { shape: 'star', n: 1 }] }, difficulty: 0.15,
                hints: ['출발, 고깔, 도착을 무슨 모양으로 나타내는지 먼저 확인해요.', '모양마다 몇 개를 붙였는지 세어 보세요. 더 붙였거나 모자란 모양이 있나요?', '동그라미 1개, 세모 4개, 별 1개만 붙여요. 다른 모양은 떼어 내요.'] },
              { prompt: '고깔(세모)과 후프(동그라미)를 번갈아 놓아요. 세모-동그라미 묶음이 세 번 넘게 되풀이되는 길을 만들어 보세요.', target: { repeat: { times: 3, unit: 2 } }, difficulty: 0.25,
                hints: ['세모 하나, 동그라미 하나를 한 묶음으로 정하고, 왼쪽에서 오른쪽으로 놓아요.', '묶음마다 모양·색·크기가 같은지 보세요. 다른 조각이 끼어 있나요?', '같은 색·크기의 세모와 동그라미를 번갈아 왼쪽부터 여섯 개 넘게 놓아요.'],
                levels: { challenge: { prompt: '고깔(세모)·후프(동그라미)·고깔(세모) 세 조각 묶음이 세 번 넘게 되풀이되는 길을 만들어 보세요.', target: { repeat: { times: 3, unit: 3 } } } } },
              { prompt: '우리 모둠만의 고깔 길을 꾸미고, 해낸 것을 모두 표시해요.', target: { selfCheck: ['출발과 도착을 정했어요', '고깔 사이를 두 걸음만큼 띄웠어요', '꾸민 길을 짝에게 손가락으로 따라가며 설명했어요'], minPieces: 5 }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 고깔 돌아오기 달리기 차례와 둘레 살피기', minutes: 13, tool: 'mindmap',
            teacher: '"고깔을 돌 때 땅만 보고 달리면 어떻게 될까요?" 차례를 놓은 뒤 모둠 길에서 실제로 달린다. 방향을 바꾸는 곳에서는 빠르기를 조금 줄이고 고개를 들어 옆을 살피게 한다.',
            task: '고깔 돌아오기 달리기의 차례를 놓고, 방향을 바꿀 때 부딪히지 않는 방법을 고른 뒤 모둠 길을 달려요.',
            levels: CARD_LV,
            items: [
              { prompt: '고깔 돌아오기 달리기의 차례대로 카드를 놓아 보세요.', toolOptions: { mode: 'order', slots: 4, cards: ['반환점 고깔을 돌아요', '출발선에 서요', '다음 친구와 손뼉을 쳐요', '고깔 사이를 지그재그로 달려가요'] },
                target: { order: ['출발선에 서요', '고깔 사이를 지그재그로 달려가요', '반환점 고깔을 돌아요', '다음 친구와 손뼉을 쳐요'] }, difficulty: 0.15,
                hints: ['달리기를 시작하기 전부터 끝날 때까지 떠올려 보세요.', '반환점을 돌기 전에 먼저 지나는 곳은 어디일까요?', '출발선 → 지그재그 → 반환점 돌기 → 손뼉 차례예요.'] },
              { prompt: '방향을 바꿀 때 부딪히지 않는 방법만 골라 보세요.', toolOptions: { mode: 'pick', basket: '부딪히지 않아요', cards: ['고개를 들어 앞과 옆을 봐요', '돌기 전에 빠르기를 줄여요', '앞만 보고 힘껏 달려요', '땅만 보고 달려요'] },
                target: { pick: ['고개를 들어 앞과 옆을 봐요', '돌기 전에 빠르기를 줄여요'] }, difficulty: 0.15,
                predict: { q: '앞만 보고 달리면 부딪히지 않을까요?', options: ['안 부딪혀요', '부딪힐 수 있어요'], answer: 1 },
                conclude: '방향을 바꾸면 옆에서 오는 친구가 있어요. 앞만 보지 말고 옆도 살펴요.' },
              { prompt: '모둠이 꾸민 고깔 길을 한 사람씩 달려요. 기다리는 친구는 달리는 친구가 옆을 살피는지 봐 줘요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"고깔 사이를 달릴 때 어디를 보며 달렸나요?" 앞만 본 학생과 옆도 본 학생의 이야기를 견준다. 다음 시간에는 앞·옆·뒤로 방향을 바꾸어 움직인다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'order', slots: 3, cards: ['반환점 고깔을 돌아요', '출발선으로 달려와요', '고깔까지 달려가요'] }, prompt: '고깔 한 개를 돌아오는 달리기의 차례대로 놓아 보세요.', target: { order: ['고깔까지 달려가요', '반환점 고깔을 돌아요', '출발선으로 달려와요'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '고깔을 돌아 방향을 바꿀 때 어떻게 할까요?', options: ['앞만 보고 더 빨리 달려요', '빠르기를 줄이고 옆을 살펴요'], answer: 1, difficulty: 0.1, explain: '방향을 바꾸는 곳에서는 옆에서 오는 친구와 부딪힐 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '고깔 사이로 달려요',
      items: [
        { type: 'draw', prompt: '우리 모둠 고깔 길을 그려 보세요. 출발은 ○, 고깔은 △, 도착은 ☆로 그려요.' },
        { type: 'choice', prompt: '방향을 바꿀 때 알맞은 방법에 ○ 하세요.', options: ['땅만 보고 달려요', '고개를 들어 옆을 봐요', '눈을 감고 달려요'], answer: '고개를 들어 옆을 봐요' },
        { type: 'table', prompt: '고깔 돌아오기 달리기의 차례를 쓰세요.', columns: ['차례', '하는 일'], cells: [['1', '출발선에 서요'], ['2', ''], ['3', ''], ['4', '다음 친구와 손뼉을 쳐요']] },
        { type: 'check', prompt: '오늘 지킨 약속에 ✓ 하세요.', options: ['고깔을 밟지 않았어요', '옆을 살피며 돌았어요', '내 차례를 기다렸어요'] },
      ],
      easy: {
        note: '방향을 바꿀 때는 고개를 들어요.',
        items: [
          { type: 'choice', prompt: '고깔을 돌 때 어디를 보나요?', options: ['앞과 옆', '땅'], answer: '앞과 옆' },
          { type: 'check', prompt: '지킨 약속에 ✓ 하세요.', options: ['고깔을 밟지 않았어요', '차례를 기다렸어요'] },
          { type: 'draw', prompt: '고깔 사이를 달리는 내 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '모양·색·크기가 적어 고르기 쉬워요. 차례 카드는 맞는 자리에 초록 테두리가 생겨요.',
      base: '모양 수를 맞추어 길을 꾸미고, 두 조각 묶음이 되풀이되는 길을 만들어요.',
      challenge: '세 조각 묶음이 되풀이되는 길을 만들고, 모든 모양·색에서 골라요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 앞만 보고 달리면 부딪히지 않는다고 여긴다 → 방향을 바꾸는 곳에 옆에서 오는 친구를 세워 두고 달려 보게 한다. ② 고깔을 너무 붙여 놓는다 → 고깔 사이를 두 걸음만큼 띄운다. ③ 반환점을 크게 돌다 옆 줄과 부딪힌다 → 줄 사이를 넓게 두고 반환점은 한 줄에 하나씩 놓는다.',
  }));

  lessons.push(L(18, {
    title: '앞·옆·뒤로 방향 바꾸며 움직이기',
    objective: '앞으로·옆으로·뒤로 가는 움직임을 가르고, 신호에 맞추어 둘레를 살피며 방향을 바꿀 수 있다.',
    illustration: ART('children on a gym floor moving in different directions following arrow signs: forward running, sideways crab steps and careful backward walking', '앞으로, 옆으로, 뒤로', [
      { motif: 'star', x: 100, y: 96, s: 0.7 }, { motif: 'tree', x: 410, y: 214 }, { motif: 'flower', x: 300, y: 230 }]),
    safety: [SPACE, LOOK, '뒤로 갈 때는 고개를 돌려 뒤를 보고, 천천히 걸어서만 가요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"게는 어느 쪽으로 걸을까요? 뒷걸음질은 언제 해 봤어요?" 교사가 옆으로, 뒤로 몇 걸음 움직여 보인다. "앞으로만 가면 될 때도 있지만 옆이나 뒤로 가야 할 때도 있어요. 뒤로 갈 때는 무엇을 조심해야 할까요?"',
        student: '게처럼 옆으로 세 걸음 가 봐요. 어디를 보며 갔나요?',
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 가는 방향으로 움직임 나누기', minutes: 13, tool: 'mindmap',
            teacher: '"카드의 움직임을 해 보고, 몸이 어느 쪽으로 갔는지 말해요." 뒤로 가는 카드는 반드시 천천히 걸어서 해 보게 한다. 뒤로 달리기는 하지 않는다는 것을 약속한다.',
            task: '카드의 움직임을 해 보고 앞으로·옆으로·뒤로 가는 움직임으로 나누고, 뒤로 갈 때 지킬 일을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '움직임을 가는 방향에 따라 나누어 보세요.', toolOptions: { topic: '어느 쪽으로 갈까?', slots: ['앞으로', '옆으로', '뒤로'], cards: ['게처럼 옆으로 걷기', '뒷걸음질로 세 걸음', '앞으로 성큼 걷기', '옆으로 미끄러지듯 발 모으기', '뒤로 천천히 걷기', '앞으로 달려 나가기'] },
                target: { sort: { '앞으로': ['앞으로 성큼 걷기', '앞으로 달려 나가기'], '옆으로': ['게처럼 옆으로 걷기', '옆으로 미끄러지듯 발 모으기'], '뒤로': ['뒷걸음질로 세 걸음', '뒤로 천천히 걷기'] } }, difficulty: 0.1 },
              { prompt: '뒤로 걸을 때 지킬 일만 골라 보세요.', toolOptions: { mode: 'pick', basket: '뒤로 걸을 때', cards: ['고개를 돌려 뒤를 살펴요', '천천히 걸어요', '뒤로 빠르게 달려요', '눈을 감고 걸어요'] },
                target: { pick: ['고개를 돌려 뒤를 살펴요', '천천히 걸어요'] }, difficulty: 0.1,
                levels: { challenge: { prompt: '뒤로 걸을 때 지킬 일만 골라 보세요. 카드가 더 많아요.', toolOptions: { cards: ['고개를 돌려 뒤를 살펴요', '천천히 걸어요', '뒤로 빠르게 달려요', '눈을 감고 걸어요', '넓은 곳에서만 해요', '친구를 밀며 걸어요'] },
                  target: { pick: ['고개를 돌려 뒤를 살펴요', '천천히 걸어요', '넓은 곳에서만 해요'] } } } },
              { prompt: '선생님 손 신호(앞·옆·뒤)에 맞추어 방향을 바꾸어 움직여요. 짝은 바꾸기 전에 둘레를 보았는지 봐 줘요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 방향을 바꿀 때 친구 배려하기', minutes: 13, tool: 'emotion',
            teacher: '"옆으로 가다가 친구와 부딪힐 뻔했어요. 어떻게 해야 할까요?" 상황마다 고른 까닭을 말하게 한다. 부딪힌 뒤 "괜찮아?" 하고 묻는 것도 함께 연습한다.',
            task: '방향을 바꾸다 생긴 일을 읽고, 친구를 배려하는 행동과 그때의 마음을 골라요.',
            levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
            items: [
              { prompt: '옆으로 걷다가 친구와 부딪힐 뻔했어요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '민지', situation: '민지가 게걸음으로 옆으로 가는데, 바로 옆에 하준이가 서 있어요.', choices: [
                { id: 'go', text: '모른 척 계속 옆으로 가요', result: '하준이와 부딪혀 둘 다 넘어졌어요.', mood: '속상함', why: '옆에 친구가 있는데 계속 가면 어떻게 될까요?' },
                { id: 'stop', text: '멈추고 "먼저 가" 하고 비켜요', result: '둘 다 안전하게 지나갔어요.', mood: '편안함' }] }, target: { choice: 'stop' }, difficulty: 0.1 },
              { prompt: '마주 오는 친구와 길이 겹쳤어요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '준호', situation: '준호가 앞으로 걸어가는데 서아가 마주 걸어와요.', choices: [
                { id: 'push', text: '어깨로 밀고 지나가요', result: '서아가 넘어질 뻔했어요.', mood: '속상함', why: '밀린 서아의 마음을 떠올려 봐요.' },
                { id: 'right', text: '서로 오른쪽으로 비켜 지나가요', result: '둘 다 웃으며 지나갔어요.', mood: '기쁨' },
                { id: 'stand', text: '길 가운데 서서 비켜 주기를 기다려요', result: '뒤에 오는 친구들까지 멈췄어요.', mood: '걱정', why: '길 가운데 서 있으면 뒤 친구들은 어떻게 될까요?' }] }, target: { choice: 'right' }, difficulty: 0.15 },
              { prompt: '방향을 바꾸다 생긴 일에 어울리는 마음 카드를 놓아 보세요.', toolOptions: { cards: ['미안함', '고마움', '놀람'], slots: [{ id: 's1', label: '뒤로 가다 친구 발을 밟았어요' }, { id: 's2', label: '친구가 "먼저 가" 하고 비켜 줬어요' }, { id: 's3', label: '갑자기 옆에서 친구가 튀어나왔어요' }] },
                target: { match: { s1: '미안함', s2: '고마움', s3: '놀람' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['미안함', '고마움', '놀람', '뿌듯함'] } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"방향을 바꾸기 전에 무엇을 먼저 했나요?" 바꾸려는 쪽을 먼저 보았다는 대답을 받아 정리한다. 뒤로 갈 때는 걸어서만 간다는 약속을 다시 말한다. 다음 시간에는 배턴을 주고받는 이어달리기를 한다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '어느 쪽으로 갈까?', slots: ['앞으로', '옆으로', '뒤로'], cards: ['옆으로 게걸음', '앞으로 종종걸음', '뒤로 두 걸음'] }, prompt: '세 움직임을 가는 방향에 따라 나누어 보세요.', target: { sort: { '앞으로': ['앞으로 종종걸음'], '옆으로': ['옆으로 게걸음'], '뒤로': ['뒤로 두 걸음'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '뒤로 움직일 때 알맞은 방법은?', options: ['빠르게 뒤로 달려요', '뒤를 살피며 천천히 걸어요'], answer: 1, difficulty: 0.1, explain: '뒤는 잘 보이지 않으니 고개를 돌려 살피고 천천히 걸어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '앞으로, 옆으로, 뒤로',
      items: [
        { type: 'table', prompt: '방향마다 해 본 움직임을 쓰세요.', columns: ['앞으로', '옆으로', '뒤로'], rows: 1 },
        { type: 'choice', prompt: '뒤로 걸을 때 지킬 일에 ○ 하세요.', options: ['뒤를 살펴요', '눈을 감아요', '빠르게 달려요'], answer: '뒤를 살펴요' },
        { type: 'short', prompt: '친구와 부딪힐 뻔했을 때 할 말을 쓰세요.' },
        { type: 'draw', prompt: '게처럼 옆으로 걷는 내 모습을 그려 보세요.' },
      ],
      easy: {
        note: '방향을 바꾸기 전에 가는 쪽을 먼저 봐요.',
        items: [
          { type: 'choice', prompt: '게는 어느 쪽으로 걷나요?', options: ['옆으로', '뒤로'], answer: '옆으로' },
          { type: 'choice', prompt: '뒤로 갈 때는 어떻게 하나요?', options: ['천천히 걸어요', '빨리 달려요'], answer: '천천히 걸어요' },
          { type: 'draw', prompt: '옆으로 걷는 내 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '방향 세 가지로 나누고, 상황마다 배려하는 행동을 골라요.',
      challenge: '지킬 일 카드와 마음 카드가 더 많아 골라내야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 뒤로 달리려 한다 → 뒤로는 걸어서만 간다고 약속한다. ② 방향을 바꾸며 둘레를 보지 않는다 → "보고, 바꾸고, 가요" 세 마디를 함께 외친다. ③ 부딪힌 뒤 말없이 지나간다 → "괜찮아?" 묻기를 연습한다.',
  }));

  lessons.push(L(19, {
    title: '배턴을 주고받으며 이어달리기',
    objective: '배턴을 주고받는 차례를 알고, 다음 친구가 받기 좋게 배턴을 건네며 이어달리기를 할 수 있다.',
    illustration: ART('two paper children on a running track passing a striped baton from one hand into the open palm of the next runner, teammates cheering behind', '배턴을 건네요', [
      { motif: 'tree', x: 70, y: 214 }, { motif: 'star', x: 400, y: 96 }, { motif: 'flower', x: 410, y: 230 }]),
    safety: [SHOE, LOOK, '배턴을 던지거나 휘두르지 않고, 손바닥에 놓아 건네요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"탐험대가 보물 지도를 다음 대원에게 넘겨줘야 해요. 어떻게 건네면 떨어뜨리지 않을까요?" 배턴(또는 둘둘 만 종이)을 들고 던져 주기와 손바닥에 놓아 주기를 보여 준다. "받는 친구가 받기 좋은 쪽은 어느 쪽일까요?"',
        student: '배턴을 던져 줄 때와 손바닥에 놓아 줄 때, 어느 쪽이 받기 쉬운지 봐요.',
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 배턴 주고받는 차례와 약속', minutes: 14, tool: 'story',
            teacher: '"받는 친구는 손바닥을 어떻게 하고 기다려요?" 차례를 놓은 뒤 제자리에서 걸으며 주고받기를 다섯 번 연습하고, 그다음 짧은 거리에서 달려 본다. 받기 전에 먼저 출발하는 학생에게 "배턴이 손에 들어온 뒤에 출발해요"라고 말한다.',
            task: '배턴을 주고받는 차례를 놓고 지킬 약속을 고른 뒤, 걸으며 연습하고 짧게 이어 달려요.',
            levels: CARD_LV,
            items: [
              { prompt: '배턴을 주고받는 차례대로 카드를 놓아 보세요.', toolOptions: { cards: ['배턴을 꼭 쥐고 달려 나가요', '앞 주자가 배턴을 들고 달려와요', '배턴을 손바닥에 놓아 줘요', '다음 주자가 손바닥을 펴고 기다려요'] },
                target: { order: ['앞 주자가 배턴을 들고 달려와요', '다음 주자가 손바닥을 펴고 기다려요', '배턴을 손바닥에 놓아 줘요', '배턴을 꼭 쥐고 달려 나가요'] }, difficulty: 0.15,
                hints: ['배턴이 앞 주자 손에서 다음 주자 손으로 가는 길을 떠올려 보세요.', '다음 주자가 달려 나가는 것은 배턴을 받기 전일까요, 뒤일까요?', '달려옴 → 손바닥 펴고 기다림 → 손바닥에 놓아 줌 → 쥐고 달려 나감 차례예요.'] },
              { prompt: '배턴을 주고받을 때 지킬 약속만 골라 보세요.', toolOptions: { mode: 'pick', basket: '배턴 약속', cards: ['손바닥에 놓아 줘요', '받는 친구 이름을 불러요', '멀리서 던져 줘요', '받기 전에 먼저 달려 나가요'] },
                target: { pick: ['손바닥에 놓아 줘요', '받는 친구 이름을 불러요'] }, difficulty: 0.1,
                levels: { challenge: { prompt: '배턴을 주고받을 때 지킬 약속만 골라 보세요. 카드가 더 많아요.', toolOptions: { cards: ['손바닥에 놓아 줘요', '받는 친구 이름을 불러요', '멀리서 던져 줘요', '받기 전에 먼저 달려 나가요', '받은 뒤 꼭 쥐어요', '배턴으로 친구를 툭 쳐요'] },
                  target: { pick: ['손바닥에 놓아 줘요', '받는 친구 이름을 불러요', '받은 뒤 꼭 쥐어요'] } } } },
              { prompt: '모둠이 한 줄로 서서 걸으며 배턴을 다섯 번 주고받은 뒤, 짧은 거리를 이어 달려요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 이어달리기에서 생긴 일과 마음', minutes: 12, tool: 'emotion',
            teacher: '"친구가 배턴을 떨어뜨렸어요. 우리 모둠이 졌다고 화를 내면 친구 마음은 어떨까요?" 이어달리기는 모두가 함께 하는 것이라는 것을 짚는다. 배턴을 떨어뜨리면 멈추고 주워서 다시 달린다는 약속을 정한다.',
            task: '이어달리기에서 생긴 일을 읽고, 어떻게 할지와 그때의 마음을 골라요.',
            levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
            items: [
              { prompt: '서아가 배턴을 떨어뜨렸어요. 모둠 친구들은 어떻게 할까요?', toolOptions: { mode: 'branch', who: '서아', situation: '이어달리기 중에 서아가 배턴을 받다가 떨어뜨렸어요.', choices: [
                { id: 'blame', text: '"너 때문에 졌어!" 하고 소리쳐요', result: '서아가 울먹이며 다시 달리기 싫어해요.', mood: '속상함', why: '배턴을 떨어뜨린 서아는 이미 속상하지 않을까요?' },
                { id: 'cheer', text: '"괜찮아, 주워서 달려!" 하고 응원해요', result: '서아가 배턴을 주워 끝까지 달렸어요.', mood: '고마움' }] }, target: { choice: 'cheer' }, difficulty: 0.1 },
              { prompt: '이어달리기에서 생긴 일에 어울리는 마음 카드를 놓아 보세요.', toolOptions: { cards: ['고마움', '미안함', '뿌듯함'], slots: [{ id: 's1', label: '친구가 "괜찮아" 하고 응원해 줬어요' }, { id: 's2', label: '배턴을 너무 세게 건네 친구 손이 아팠어요' }, { id: 's3', label: '배턴을 떨어뜨리지 않고 끝까지 이었어요' }] },
                target: { match: { s1: '고마움', s2: '미안함', s3: '뿌듯함' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['고마움', '미안함', '뿌듯함', '무서움'] } } } },
              { prompt: '하준이가 배턴을 받기도 전에 먼저 달려 나갔어요. 어떻게 하면 좋을까요?', toolOptions: { mode: 'branch', who: '하준', situation: '하준이가 앞 친구가 오기도 전에 달려 나가서 배턴을 못 받았어요.', choices: [
                { id: 'back', text: '돌아와서 배턴을 받고 다시 출발해요', result: '배턴을 받아 바르게 이어 달렸어요.', mood: '편안함' },
                { id: 'go', text: '배턴 없이 그냥 계속 달려요', result: '배턴이 이어지지 않아 놀이가 멈췄어요.', mood: '걱정', why: '이어달리기는 무엇을 이어 가는 놀이일까요?' }] }, target: { choice: 'back' }, difficulty: 0.15 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"배턴을 건넬 때 친구가 받기 좋게 하려면 어떻게 했나요?" 손바닥에 놓아 주기, 이름 부르기를 함께 정리한다. 다음 시간에는 술래잡기에서 부딪히지 않게 달리는 방법을 탐험한다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { cards: ['받은 배턴을 꼭 쥐어요', '손바닥을 펴고 기다려요', '배턴이 손바닥에 닿아요'] }, prompt: '배턴을 받는 친구가 하는 일을 차례대로 놓아 보세요.', target: { order: ['손바닥을 펴고 기다려요', '배턴이 손바닥에 닿아요', '받은 배턴을 꼭 쥐어요'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '친구가 배턴을 떨어뜨렸을 때 알맞은 말은?', options: ['"너 때문이야!"', '"괜찮아, 주워서 달려!"', '"이제 안 해!"'], answer: 1, difficulty: 0.1, explain: '응원하는 말을 들으면 친구가 다시 힘을 내서 달릴 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '배턴을 건네요',
      items: [
        { type: 'table', prompt: '배턴을 주고받는 차례를 쓰세요.', columns: ['차례', '하는 일'], cells: [['1', '앞 주자가 달려와요'], ['2', ''], ['3', ''], ['4', '꼭 쥐고 달려 나가요']] },
        { type: 'choice', prompt: '배턴을 건네는 바른 방법에 ○ 하세요.', options: ['멀리서 던져요', '손바닥에 놓아 줘요', '친구 등에 대요'], answer: '손바닥에 놓아 줘요' },
        { type: 'short', prompt: '배턴을 떨어뜨린 친구에게 해 줄 말을 쓰세요.' },
        { type: 'draw', prompt: '배턴을 주고받는 모습을 그려 보세요.' },
      ],
      easy: {
        note: '배턴은 손바닥에 놓아 줘요.',
        items: [
          { type: 'choice', prompt: '받는 친구는 어떻게 기다리나요?', options: ['손바닥을 펴요', '뒤돌아 달려요'], answer: '손바닥을 펴요' },
          { type: 'choice', prompt: '배턴을 떨어뜨린 친구에게 하는 말은?', options: ['괜찮아', '너 때문이야'], answer: '괜찮아' },
          { type: 'draw', prompt: '배턴을 건네는 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '주고받는 차례 네 장을 놓고, 상황마다 행동과 마음을 골라요.',
      challenge: '약속 카드와 마음 카드가 더 많아 골라내야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 받기 전에 먼저 출발한다 → 걸으며 주고받기를 충분히 연습한다. ② 배턴을 던져 준다 → 손바닥에 "톡" 놓는 소리를 듣게 한다. ③ 진 모둠이 친구를 탓한다 → 이어달리기는 모두의 놀이라는 것을 짚고, 응원하는 말을 미리 정한다. 배턴 대신 둘둘 만 신문지를 써도 된다.',
  }));

  lessons.push(L(20, {
    title: '둘레를 살피며 꼬리잡기 놀이 하기',
    objective: '꼬리잡기 놀이에서 앞과 옆을 함께 살피며 달리고, 부딪히지 않는 방법을 골라 지킬 수 있다.',
    illustration: ART('children playing a tail-tag game in a schoolyard with colorful paper ribbons tucked at their waists, looking around carefully as they run', '둘레를 살피며 달려요', [
      { motif: 'tree', x: 70, y: 214 }, { motif: 'cloud', x: 330, y: 64 }, { motif: 'flower', x: 410, y: 230 }]),
    safety: [SHOE, LOOK, '꼬리는 손으로만 잡고, 친구 옷이나 몸을 당기지 않아요.', STOP],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"꼬리잡기는 허리에 꽂은 띠(꼬리)를 잡는 전래 놀이예요." 띠를 허리에 꽂아 보이고 규칙을 짧게 말한다. "꼬리를 잡으려고 앞만 보고 달리면 어떻게 될까요?" 앞만 보고 달리면 부딪히지 않는다는 생각을 묻고 함께 따져 본다.',
        student: '꼬리잡기를 할 때 내 앞, 옆, 뒤에 누가 있는지 고개를 돌려 살펴봐요.',
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 부딪히지 않는 달리기 방법 찾기', minutes: 12, tool: 'mindmap',
            teacher: '"이렇게 달리면 부딪힐까요, 안 부딪힐까요?" 카드마다 까닭을 말하게 한다. 갑자기 멈추는 것도 뒤 친구와 부딪힐 수 있다는 것을 짚는다.',
            task: '달리는 모습 카드를 부딪히지 않는 모습과 부딪힐 수 있는 모습으로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '부딪히지 않는 모습과 부딪힐 수 있는 모습으로 나누어 보세요.', toolOptions: { topic: '꼬리잡기', slots: ['부딪히지 않아요', '부딪힐 수 있어요'], cards: ['고개를 들고 둘레를 봐요', '앞 친구 꼬리만 보고 달려요', '친구 사이를 넓게 두고 달려요', '뒤를 보며 앞으로 달려요'] },
                target: { sort: { '부딪히지 않아요': ['고개를 들고 둘레를 봐요', '친구 사이를 넓게 두고 달려요'], '부딪힐 수 있어요': ['앞 친구 꼬리만 보고 달려요', '뒤를 보며 앞으로 달려요'] } }, difficulty: 0.15,
                predict: { q: '앞 친구 꼬리만 보고 달리면 안 부딪힐까요?', options: ['안 부딪혀요', '부딪힐 수 있어요'], answer: 1 },
                conclude: '앞만 보면 옆에서 오는 친구를 못 봐요. 둘레를 함께 살펴야 해요.' },
              { prompt: '이번 모습도 나누어 보세요.', toolOptions: { topic: '꼬리잡기', slots: ['부딪히지 않아요', '부딪힐 수 있어요'], cards: ['멈출 때는 빠르기를 줄이며 서요', '좁은 구석으로 여럿이 몰려가요', '방향을 바꾸기 전에 옆을 봐요', '친구 등을 밀며 달려요'] },
                target: { sort: { '부딪히지 않아요': ['멈출 때는 빠르기를 줄이며 서요', '방향을 바꾸기 전에 옆을 봐요'], '부딪힐 수 있어요': ['좁은 구석으로 여럿이 몰려가요', '친구 등을 밀며 달려요'] } }, difficulty: 0.2,
                levels: { challenge: { prompt: '여섯 가지 모습을 나누어 보세요.', toolOptions: { cards: ['멈출 때는 빠르기를 줄이며 서요', '좁은 구석으로 여럿이 몰려가요', '방향을 바꾸기 전에 옆을 봐요', '친구 등을 밀며 달려요', '넘어진 친구가 있으면 모두 멈춰요', '갑자기 뒤로 돌아 달려요'] },
                  target: { sort: { '부딪히지 않아요': ['멈출 때는 빠르기를 줄이며 서요', '방향을 바꾸기 전에 옆을 봐요', '넘어진 친구가 있으면 모두 멈춰요'], '부딪힐 수 있어요': ['좁은 구석으로 여럿이 몰려가요', '친구 등을 밀며 달려요', '갑자기 뒤로 돌아 달려요'] } } } } },
              { prompt: '짝과 손을 잡지 않고 나란히 강당을 걷다가 달리며, 서로 부딪히지 않게 간격을 지켜요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 꼬리잡기 준비와 놀이', minutes: 14, tool: 'timer',
            teacher: '"놀기 전에 운동장(강당)을 먼저 살펴요." 점검을 마치면 꼬리잡기 차례를 놓고, 한 판 1분씩 세 판을 한다. 판 사이에는 꼭 쉬며 숨을 고르게 한다.',
            task: '놀이 장소를 점검하고 꼬리잡기 차례를 놓은 뒤, 놀이·쉬기 시간을 맞추어 세 판 놀아요.',
            levels: { easy: {}, base: {}, challenge: { stopwatch: true } },
            items: [
              { prompt: '꼬리잡기를 하기 전에 놀이 장소를 둘러보고 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['바닥에 돌이나 물기가 없어요', '꼬리를 바지 허리에 살짝 꽂았어요', '놀이 구역 선을 알았어요'] }, target: { safety: true }, difficulty: 0.05 },
              { prompt: '꼬리잡기 한 판의 차례대로 카드를 놓아요.', toolOptions: { title: '꼬리잡기 차례', cards: ['꼬리를 잡히면 구역 밖에서 기다려요', '허리에 꼬리를 꽂아요', '시작 신호에 친구 꼬리를 잡으러 가요', '끝 신호에 모두 멈춰요'] },
                target: { order: ['허리에 꼬리를 꽂아요', '시작 신호에 친구 꼬리를 잡으러 가요', '꼬리를 잡히면 구역 밖에서 기다려요', '끝 신호에 모두 멈춰요'] }, difficulty: 0.2,
                levels: { easy: { state: { order: ['허리에 꼬리를 꽂아요', '꼬리를 잡히면 구역 밖에서 기다려요', '시작 신호에 친구 꼬리를 잡으러 가요', '끝 신호에 모두 멈춰요'] } } },
                hints: ['놀이를 시작하기 전에 준비할 것부터 떠올려 보세요.', '꼬리를 잡히는 일은 시작 신호 전일까요, 뒤일까요?', '꼬리 꽂기 → 시작 신호 → 잡히면 밖에서 기다리기 → 끝 신호에 멈추기 차례예요.'] },
              { prompt: '운동 칸은 꼬리잡기 한 판이에요. 운동 60초, 쉬기 30초, 3번으로 판을 맞추어요.', toolOptions: { title: '꼬리잡기 시간', plan: { work: 30, rest: 10, rounds: 2 }, workStep: 10, restStep: 10 }, target: { plan: { work: 60, rest: 30, rounds: 3 } }, difficulty: 0.2,
                levels: { easy: { state: { plan: { work: 60, rest: 10, rounds: 3 } } }, challenge: { prompt: '운동 칸은 꼬리잡기 한 판이에요. 운동 50초, 쉬기 20초, 4번으로 판을 맞추어요.', target: { plan: { work: 50, rest: 20, rounds: 4 } } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"꼬리잡기에서 부딪힐 뻔한 때가 있었나요? 그때 어디를 보고 있었나요?" 둘레를 살핀 친구의 방법을 칭찬한다. 다음 시간에는 달리기 놀이에서 즐거웠던 때를 돌아본다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '꼬리잡기', slots: ['부딪히지 않아요', '부딪힐 수 있어요'], cards: ['둘레를 살피며 달려요', '눈을 가리고 달려요', '구역 선 안에서만 달려요'] }, prompt: '세 모습을 부딪히지 않는 모습과 부딪힐 수 있는 모습으로 나누어 보세요.', target: { sort: { '부딪히지 않아요': ['둘레를 살피며 달려요', '구역 선 안에서만 달려요'], '부딪힐 수 있어요': ['눈을 가리고 달려요'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '앞만 보고 달리면 부딪히지 않을까요?', options: ['네, 앞만 보면 돼요', '아니요, 옆과 둘레도 살펴야 해요'], answer: 1, difficulty: 0.1, explain: '옆에서 달려오는 친구는 앞만 보면 보이지 않아요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '둘레를 살피며 달려요',
      items: [
        { type: 'table', prompt: '꼬리잡기에서 지킬 일을 나누어 쓰세요.', columns: ['이렇게 해요', '이렇게 하지 않아요'], rows: 2 },
        { type: 'choice', prompt: '부딪히지 않는 방법에 ○ 하세요.', options: ['앞 친구 꼬리만 봐요', '고개를 들고 둘레를 봐요', '구석으로 몰려가요'], answer: '고개를 들고 둘레를 봐요' },
        { type: 'check', prompt: '오늘 지킨 약속에 ✓ 하세요.', options: ['꼬리만 잡았어요', '둘레를 살폈어요', '쉬는 시간에 숨을 골랐어요'] },
        { type: 'draw', prompt: '둘레를 살피며 꼬리잡기를 하는 내 모습을 그려 보세요.' },
      ],
      easy: {
        note: '고개를 들면 둘레가 보여요.',
        items: [
          { type: 'choice', prompt: '달릴 때 어디를 봐요?', options: ['둘레', '땅만'], answer: '둘레' },
          { type: 'check', prompt: '지킨 약속에 ✓ 하세요.', options: ['꼬리만 잡았어요', '둘레를 살폈어요'] },
          { type: 'draw', prompt: '꼬리잡기 하는 내 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 차례 카드는 두 장만 바꾸고, 판은 쉬기 시간만 맞추면 돼요.',
      base: '모습 카드를 나누고, 차례와 놀이 시간을 스스로 맞추어요.',
      challenge: '모습 카드가 여섯 장으로 늘고, 다른 놀이 시간을 계획하며 시간 재기로 재요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 앞만 보고 달리면 부딪히지 않는다고 여긴다 → 예상을 고른 뒤 놀이에서 부딪힐 뻔한 때를 떠올리게 한다. ② 꼬리 대신 옷을 잡는다 → 꼬리만 잡는다는 약속을 놀이 전에 다시 말한다. ③ 쉬기 없이 계속 달린다 → 판 사이에 꼭 숨을 고른다. 꼬리는 바지 허리에 살짝 꽂아 쉽게 빠지게 한다.',
  }));

  // ───────────────────────── 21~24차시: 즐거웠던 때 돌아보기·길과 빠르기 바꾸기 ─────────────────────────

  lessons.push(L(21, {
    title: '일등이 아니어도 즐거웠던 달리기 떠올리기',
    objective: '달리기 놀이에서 즐거웠던 때를 떠올려 말하고, 일등이 아니어도 잘 달린 모습을 찾을 수 있다.',
    illustration: ART('children sitting on the grass after running games, smiling and sharing stories, with paper speech bubbles showing a baton, cones and a finish line', '즐거웠던 때는 언제?', [
      { motif: 'sun', x: 90, y: 70, s: 0.6 }, { motif: 'tree', x: 410, y: 214 }, { motif: 'flower', x: 300, y: 230 }]),
    safety: [SPACE, STOP, '이야기 나눈 뒤 달릴 때는 다시 둘레를 살펴요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"지금까지 해 본 달리기 놀이 가운데 언제가 가장 즐거웠나요?" 고깔 길, 이어달리기, 꼬리잡기 그림을 보여 주며 떠올리게 한다. "일등을 한 사람만 잘 달린 걸까요?" 손을 들게 한 뒤, 오늘은 잘 달린 모습을 여러 가지로 찾아본다고 말한다.',
        student: '가장 즐거웠던 달리기 놀이를 떠올려 손가락으로 몇 번째 그림인지 보여 줘요.',
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 잘 달린 모습 찾기', minutes: 13, tool: 'mindmap',
            teacher: '"끝까지 멈추지 않고 달린 것도 잘 달린 걸까요?" 카드마다 손을 들어 투표한 뒤 까닭을 듣는다. 친구를 밀고 일등을 한 카드는 왜 잘 달린 모습이 아닌지 함께 이야기한다.',
            task: '잘 달린 모습 카드를 고르고, 일등을 못 한 친구에게 해 줄 말을 고른 뒤 짝과 즐거웠던 때를 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '잘 달린 모습만 모두 골라 보세요.', toolOptions: { mode: 'pick', basket: '잘 달렸어요', cards: ['끝까지 멈추지 않고 달렸어요', '둘레를 살펴 부딪히지 않았어요', '친구를 밀고 일등을 했어요', '고깔을 밟고 지나갔어요'] },
                target: { pick: ['끝까지 멈추지 않고 달렸어요', '둘레를 살펴 부딪히지 않았어요'] }, difficulty: 0.15,
                predict: { q: '일등을 해야만 잘 달린 걸까요?', options: ['네', '아니요'], answer: 1 },
                conclude: '끝까지 달리기, 둘레 살피기처럼 일등이 아니어도 잘 달린 모습이 많아요.',
                levels: { challenge: { prompt: '잘 달린 모습만 모두 골라 보세요. 카드가 더 많아요.', toolOptions: { cards: ['끝까지 멈추지 않고 달렸어요', '둘레를 살펴 부딪히지 않았어요', '친구를 밀고 일등을 했어요', '고깔을 밟고 지나갔어요', '배턴을 손바닥에 놓아 줬어요', '차례를 새치기했어요'] },
                  target: { pick: ['끝까지 멈추지 않고 달렸어요', '둘레를 살펴 부딪히지 않았어요', '배턴을 손바닥에 놓아 줬어요'] } } } },
              { prompt: '마지막으로 들어온 준호에게 해 줄 말만 골라 보세요.', toolOptions: { mode: 'pick', basket: '준호에게', cards: ['끝까지 달려서 멋졌어', '다음에 같이 연습하자', '꼴찌라서 창피하지?', '너는 달리기 못하잖아'] },
                target: { pick: ['끝까지 달려서 멋졌어', '다음에 같이 연습하자'] }, difficulty: 0.1 },
              { prompt: '짝에게 달리기 놀이에서 가장 즐거웠던 때와 그 까닭을 말해요. 짝은 끝까지 듣고 한 가지를 물어봐요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 달리기 놀이에서 내 마음', minutes: 13, tool: 'emotion',
            teacher: '"달리기 전, 달리는 중, 들어온 뒤에 마음이 어땠나요?" 마음 크기에는 정답이 없다고 말한다. 꼴찌라서 다시는 안 달리겠다는 친구 이야기에서 "그 친구가 즐거웠던 때는 없었을까요?"라고 묻는다.',
            task: '달리기 놀이에서 생긴 일에 어울리는 마음을 고르고, 속상한 친구를 어떻게 도울지 고른 뒤 내 즐거움을 골라요.',
            levels: { easy: { live: true, instant: true, steps: 3 }, base: {}, challenge: {} },
            items: [
              { prompt: '달리기 놀이에서 생긴 일에 어울리는 마음 카드를 놓아 보세요.', toolOptions: { cards: ['뿌듯함', '고마움', '설렘'], slots: [{ id: 's1', label: '끝까지 달려 도착선을 지났어요' }, { id: 's2', label: '친구가 "힘내!" 하고 응원해 줬어요' }, { id: 's3', label: '출발선에서 시작 신호를 기다려요' }] },
                target: { match: { s1: '뿌듯함', s2: '고마움', s3: '설렘' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['뿌듯함', '고마움', '설렘', '화남'] } } } },
              { prompt: '하준이가 "꼴찌라서 다시는 안 달릴래" 하고 말해요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '하준', situation: '이어달리기가 끝나고 하준이가 "꼴찌라서 다시는 안 달릴래" 하며 앉아 있어요.', choices: [
                { id: 'leave', text: '못 들은 척 지나가요', result: '하준이는 다음 놀이에도 나오지 않았어요.', mood: '속상함', why: '하준이가 다시 놀이에 나오게 도울 수 있을까요?' },
                { id: 'ask', text: '"그래도 즐거웠던 때는 언제였어?" 하고 물어요', result: '하준이가 배턴을 받던 때가 신났다고 웃었어요.', mood: '기쁨' },
                { id: 'agree', text: '"맞아, 너 느려" 하고 말해요', result: '하준이가 더 속상해해요.', mood: '속상함', why: '이 말을 들은 하준이의 마음을 떠올려 봐요.' }] }, target: { choice: 'ask' }, difficulty: 0.1 },
              { prompt: '달리기 놀이를 하며 나는 얼마나 즐거웠나요? 내 마음대로 골라요.', toolOptions: { mode: 'scale', situation: '고깔 길, 이어달리기, 꼬리잡기를 떠올려요.', feeling: '신남', steps: 5, after: '솔직하게 골랐어요. 가장 즐거웠던 놀이를 짝에게 말해 줘요.' }, target: { level: 'any' }, difficulty: 0.05 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 찾은 \'잘 달린 모습\'을 한 가지씩 말해 볼까요?" 칠판에 모아 \'우리 반 잘 달리기 약속\'으로 붙인다. 다음 시간에는 달리기 길을 바꾸어 새로 꾸민다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', basket: '잘 달렸어요', cards: ['넘어졌지만 일어나 끝까지 달렸어요', '반칙을 해서 일등을 했어요', '친구를 응원하며 차례를 기다렸어요'] }, prompt: '잘 달린 모습만 골라 보세요.', target: { pick: ['넘어졌지만 일어나 끝까지 달렸어요', '친구를 응원하며 차례를 기다렸어요'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '달리기에서 일등을 못 했어요. 잘 달리지 못한 걸까요?', options: ['네, 일등만 잘 달린 거예요', '아니요, 끝까지 달리고 약속을 지켰으면 잘 달린 거예요'], answer: 1, difficulty: 0.1, explain: '끝까지 달리기, 약속 지키기, 응원하기도 모두 잘 달린 모습이에요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '즐거웠던 달리기',
      items: [
        { type: 'short', prompt: '달리기 놀이에서 가장 즐거웠던 때를 쓰세요.' },
        { type: 'check', prompt: '내가 해낸 잘 달린 모습에 ✓ 하세요.', options: ['끝까지 달렸어요', '둘레를 살폈어요', '친구를 응원했어요', '차례를 지켰어요'] },
        { type: 'choice', prompt: '마지막으로 들어온 친구에게 해 줄 말에 ○ 하세요.', options: ['끝까지 달려서 멋졌어', '꼴찌라서 창피하지?', '너는 못하잖아'], answer: '끝까지 달려서 멋졌어' },
        { type: 'draw', prompt: '즐거웠던 달리기 놀이 모습을 그려 보세요.' },
      ],
      easy: {
        note: '일등이 아니어도 잘 달린 모습이 많아요.',
        items: [
          { type: 'choice', prompt: '잘 달린 모습에 ○ 하세요.', options: ['끝까지 달렸어요', '친구를 밀었어요'], answer: '끝까지 달렸어요' },
          { type: 'short', prompt: '즐거웠던 놀이 이름을 쓰세요.' },
          { type: 'draw', prompt: '즐거웠던 때를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 마음 크기는 세 칸에서 골라요.',
      base: '잘 달린 모습과 해 줄 말을 고르고, 다섯 칸에서 내 즐거움을 골라요.',
      challenge: '고를 카드와 마음 카드가 더 많아 골라내야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 일등을 해야만 잘 달린 것이라고 여긴다 → 끝까지 달린 친구, 약속을 지킨 친구를 이름 대신 모습으로 칭찬한다. ② 즐거웠던 때를 "몰라요"로 끝낸다 → 그림 세 장 가운데 하나를 고르게 한다. ③ 꼴찌를 놀린다 → 놀린 말을 듣는 친구 자리에서 다시 생각해 보게 한다.',
  }));

  lessons.push(L(22, {
    title: '새로운 달리기 길 바꾸어 꾸미기',
    objective: '지난 달리기 길에서 바꿀 점을 정하고, 두 모둠이 공평하게 달릴 수 있는 새 길을 꾸밀 수 있다.',
    illustration: ART('two matching paper race lanes side by side mirrored across a center line, each with cones, hoops and a finish star, children planning with pencils', '두 길이 똑같아요', [
      { motif: 'tree', x: 60, y: 214 }, { motif: 'star', x: 240, y: 90 }, { motif: 'tree', x: 420, y: 214 }]),
    safety: [SHOE, LOOK, '고깔과 후프는 걸어서 옮기고, 놓은 뒤 달려요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"지난번 고깔 길에서 아쉬웠던 점이 있었나요?" "너무 쉬웠어요", "고깔이 너무 붙어 있었어요" 같은 대답을 칠판에 적는다. "두 모둠이 시합을 하는데 한쪽 길에 고깔이 더 많으면 어떨까요?" 공평한 길은 양쪽이 똑같아야 한다는 것을 짚는다.',
        student: '지난번 고깔 길에서 바꾸고 싶은 점을 하나 짝에게 말해요.',
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 길을 바꾸는 차례와 방법 고르기', minutes: 11, tool: 'story',
            teacher: '"길을 바꾸려면 무엇부터 해야 할까요?" 차례를 놓은 뒤, 바꾸는 방법 가운데 안전하지 않은 것을 골라내게 한다. "눈 감고 달리기는 재미있어질까요, 위험해질까요?"',
            task: '길을 바꾸는 차례를 놓고, 길을 바꾸는 알맞은 방법을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '달리기 길을 바꾸는 차례대로 카드를 놓아 보세요.', toolOptions: { cards: ['새 길을 꾸며요', '지난 길에서 아쉬운 점을 말해요', '달려 보고 어땠는지 이야기해요', '무엇을 바꿀지 정해요'] },
                target: { order: ['지난 길에서 아쉬운 점을 말해요', '무엇을 바꿀지 정해요', '새 길을 꾸며요', '달려 보고 어땠는지 이야기해요'] }, difficulty: 0.15,
                hints: ['바꿀 것을 정하려면 먼저 무엇을 알아야 할까요?', '새 길을 꾸미는 것은 바꿀 것을 정하기 전일까요, 뒤일까요?', '아쉬운 점 말하기 → 바꿀 것 정하기 → 새 길 꾸미기 → 달려 보고 이야기하기 차례예요.'] },
              { prompt: '길을 안전하고 재미있게 바꾸는 방법만 골라 보세요.', toolOptions: { mode: 'pick', basket: '이렇게 바꿔요', cards: ['고깔을 두 개 더 놓아요', '후프를 넣어 그 안을 밟고 지나가요', '눈을 감고 달리게 해요', '고깔을 밟고 지나가게 해요'] },
                target: { pick: ['고깔을 두 개 더 놓아요', '후프를 넣어 그 안을 밟고 지나가요'] }, difficulty: 0.15,
                levels: { challenge: { prompt: '길을 안전하고 재미있게 바꾸는 방법만 골라 보세요. 카드가 더 많아요.', toolOptions: { cards: ['고깔을 두 개 더 놓아요', '후프를 넣어 그 안을 밟고 지나가요', '눈을 감고 달리게 해요', '고깔을 밟고 지나가게 해요', '고깔 사이를 더 넓혀요', '두 줄이 서로 마주 달리게 해요'] },
                  target: { pick: ['고깔을 두 개 더 놓아요', '후프를 넣어 그 안을 밟고 지나가요', '고깔 사이를 더 넓혀요'] } } } },
              { prompt: '모둠에서 지난 길에서 바꿀 것 하나를 정해 말해요. 모두가 한 번씩 의견을 말해요.', free: true, talk: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 두 모둠이 공평한 길 꾸미기', minutes: 15, tool: 'collage',
            teacher: '"가운데 선을 기준으로 왼쪽은 우리 모둠, 오른쪽은 옆 모둠 길이에요. 두 길이 거울처럼 똑같아야 공평해요." 판을 꾸민 뒤 강당에 실제로 놓고 두 모둠이 함께 달린다. 한쪽에만 조각을 더 붙인 학생에게 "옆 모둠도 같은 고깔을 지나가야 공평하지요?"라고 묻는다.',
            task: '가운데 선 양쪽이 똑같은 두 모둠 길을 꾸미고, 새 길을 강당에 놓아 달려요.',
            levels: {
              easy: { shapes: ['triangle', 'circle', 'star'], colors: ['주황', '파랑', '노랑'], sizes: ['m'] },
              base: { shapes: ['triangle', 'circle', 'star', 'square'], colors: ['주황', '파랑', '노랑', '초록'] },
              challenge: {},
            },
            items: [
              { prompt: '왼쪽 모둠 길에 고깔이 놓여 있어요. 오른쪽 모둠 길에 똑같이 놓아 공평한 길을 만들어 보세요.', state: { pieces: [
                { shape: 'triangle', color: '주황', size: 'm', x: 200, y: 100, r: 0 }, { shape: 'triangle', color: '주황', size: 'm', x: 160, y: 200, r: 0 }, { shape: 'circle', color: '파랑', size: 'm', x: 200, y: 300, r: 0 }] }, target: { symmetry: 'vertical' }, difficulty: 0.2,
                hints: ['가운데 선이 거울이에요. 왼쪽 조각이 오른쪽에 비치면 어디에 생길까요?', '오른쪽 조각이 선에서 왼쪽 조각과 같은 칸 수만큼 떨어져 있는지 세어 보세요.', '주황 세모 두 개와 파랑 동그라미 하나를 오른쪽에, 선에서 같은 거리·같은 높이로 놓아요.'] },
              { prompt: '양쪽 모둠 길에 노란 도착 별을 하나씩 더해 공평한 길을 만들어 보세요. 조각이 모두 여섯 개 넘어야 해요.', state: { pieces: [
                { shape: 'triangle', color: '주황', size: 'm', x: 200, y: 120, r: 0 }, { shape: 'triangle', color: '주황', size: 'm', x: 360, y: 120, r: 0 }, { shape: 'circle', color: '파랑', size: 'm', x: 160, y: 220, r: 0 }, { shape: 'circle', color: '파랑', size: 'm', x: 400, y: 220, r: 0 }] }, target: { symmetry: 'vertical', has: [{ shape: 'star', color: '노랑', n: 2 }], pieces: { min: 7 } }, difficulty: 0.25,
                levels: { easy: { prompt: '양쪽 모둠 길에 노란 도착 별을 하나씩 더해 공평한 길을 만들어 보세요.', target: { symmetry: 'vertical', has: [{ shape: 'star', color: '노랑', n: 2 }] } } },
                hints: ['노란 별은 양쪽에 하나씩, 모두 두 개예요. 하나를 붙이면 반대쪽에도 붙여요.', '별의 개수와 자리를 보세요. 두 별이 선에서 같은 거리에 있나요?', '별 두 개를 선 양쪽 같은 거리에 놓고, 조각이 일곱 개가 되게 고깔이나 후프 한 쌍을 더 놓아요.'] },
              { prompt: '우리 반 새 달리기 길을 꾸미고, 해낸 것을 모두 표시해요.', target: { symmetry: 'vertical', selfCheck: ['지난 길에서 바꾼 점이 있어요', '양쪽 길이 똑같아요', '고깔 사이를 두 걸음만큼 띄웠어요'], minPieces: 6 }, difficulty: 0.15 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"새 길에서 달려 보니 지난 길과 무엇이 달랐나요?" 바꾼 점 하나씩을 모둠별로 말하게 한다. 다음 시간에는 빠르기를 바꾸는 달리기 계획을 세운다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'collage', options: { shapes: ['triangle', 'circle'], colors: ['주황', '파랑'] }, state: { pieces: [{ shape: 'circle', color: '파랑', size: 'm', x: 220, y: 160, r: 0 }, { shape: 'triangle', color: '주황', size: 'm', x: 180, y: 260, r: 0 }] }, prompt: '왼쪽 길을 보고 오른쪽 길을 똑같이 만들어 공평한 길을 완성해 보세요.', target: { symmetry: 'vertical' }, difficulty: 0.2 },
          { type: 'choice', prompt: '두 모둠이 시합할 때 공평한 길은 어떤 길일까요?', options: ['한쪽에만 고깔이 많은 길', '양쪽이 똑같은 길'], answer: 1, difficulty: 0.1, explain: '두 길이 똑같아야 어느 모둠도 더 힘들지 않아요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '새 달리기 길',
      items: [
        { type: 'short', prompt: '지난 길에서 바꾼 점을 쓰세요.' },
        { type: 'figure', wide: true, prompt: '가운데 선을 보고, 오른쪽에 똑같은 길을 그려 완성하세요.', tool: 'collage', options: { guide: 'vertical', printColors: false }, figures: [{ state: { pieces: [{ shape: 'triangle', color: '주황', size: 'm', x: 200, y: 100, r: 0 }, { shape: 'triangle', color: '주황', size: 'm', x: 160, y: 200, r: 0 }, { shape: 'circle', color: '파랑', size: 'm', x: 200, y: 300, r: 0 }] }, caption: '왼쪽 길 보고 오른쪽 길 그리기' }] },
        { type: 'choice', prompt: '길을 안전하게 바꾸는 방법에 ○ 하세요.', options: ['고깔을 더 놓아요', '눈을 감고 달려요', '고깔을 밟아요'], answer: '고깔을 더 놓아요' },
        { type: 'check', prompt: '오늘 해낸 것에 ✓ 하세요.', options: ['바꿀 점을 말했어요', '새 길을 꾸몄어요', '새 길을 달려 보았어요'] },
      ],
      easy: {
        note: '두 길이 똑같아야 공평해요.',
        items: [
          { type: 'choice', prompt: '공평한 길에 ○ 하세요.', options: ['양쪽이 똑같은 길', '한쪽만 어려운 길'], answer: '양쪽이 똑같은 길' },
          { type: 'short', prompt: '바꾼 점 하나를 쓰세요.' },
          { type: 'draw', prompt: '새 달리기 길을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '모양·색·크기가 적어요. 별 두 개만 더하면 되고, 차례 카드는 맞는 자리에 초록 테두리가 생겨요.',
      base: '양쪽이 똑같은 길을 일곱 조각 넘게 꾸며요.',
      challenge: '방법 카드가 여섯 장이고, 모든 모양·색에서 짝 조각을 골라요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 한쪽 길만 꾸민다 → 옆 모둠도 같은 길을 달린다는 것을 떠올리게 한다. ② 재미를 위해 위험한 방법(눈 감기)을 고른다 → 재미와 안전을 함께 따지게 한다. ③ 바꿀 점을 정하지 못한다 → 고깔 수, 고깔 사이, 후프 넣기 셋 가운데 고르게 한다.',
  }));

  lessons.push(L(23, {
    title: '빠르기를 바꾸며 달리는 계획 세우기',
    objective: '걷기와 천천히·빠르게 달리기를 섞은 달리기 계획을 세우고, 상황에 맞는 빠르기를 고를 수 있다.',
    illustration: ART('a paper running track with three colored zones labeled slow, fast and walk, a child changing speed as they move along it, and a big paper stopwatch', '빠르기를 바꾸어요', [
      { motif: 'sun', x: 410, y: 60, s: 0.6 }, { motif: 'tree', x: 70, y: 214 }, { motif: 'leaf', x: 300, y: 230 }]),
    safety: [SHOE, LOOK, STOP],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"운동장 두 바퀴를 처음부터 끝까지 가장 빠르게 달리면 어떻게 될까요?" 대답을 듣고 짧게 해 보게 한다(30초). "숨이 너무 차서 끝까지 못 갈 수도 있어요. 빠르기를 바꾸면 더 오래 달릴 수 있어요."',
        student: '30초 동안 가장 빠르게 달려 본 뒤, 숨이 어땠는지 짝에게 말해요.',
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 빠르기를 바꾸는 계획 세우기', minutes: 14, tool: 'timer',
            teacher: '"걷기로 시작해서 점점 빨라졌다가 다시 걸으며 숨을 골라요." 차례를 놓고, 타이머 판의 운동 칸에는 달리기 시간, 쉬기 칸에는 걸으며 숨 고르는 시간을 넣는다고 설명한다. 계획대로 강당에서 한 번 해 본다.',
            task: '빠르기를 바꾸는 차례를 놓고, 달리기·걷기 시간을 판에 맞춘 뒤 계획대로 달려요.',
            levels: { easy: {}, base: {}, challenge: { stopwatch: true } },
            items: [
              { prompt: '느리게 시작해 빨라졌다가 다시 느려지는 차례로 카드를 놓아요.', toolOptions: { title: '빠르기 바꾸기 차례', cards: ['빠르게 달리기', '걸으며 숨 고르기', '걸으며 몸 데우기', '천천히 달리기'] }, target: { order: ['걸으며 몸 데우기', '천천히 달리기', '빠르게 달리기', '걸으며 숨 고르기'] }, difficulty: 0.2,
                levels: { easy: { state: { order: ['걸으며 몸 데우기', '빠르게 달리기', '천천히 달리기', '걸으며 숨 고르기'] } } },
                hints: ['처음과 끝은 걷기예요. 어느 걷기가 처음이고 어느 걷기가 끝일까요?', '천천히 달리기와 빠르게 달리기 가운데 어느 쪽이 먼저 와야 점점 빨라질까요?', '몸 데우기 → 천천히 달리기 → 빠르게 달리기 → 숨 고르기 차례예요.'] },
              { prompt: '운동 칸은 달리기, 쉬기 칸은 걸으며 숨 고르기예요. 운동 20초, 쉬기 10초, 3번으로 판을 맞추어요.', toolOptions: { title: '달리고 걷기', plan: { work: 30, rest: 20, rounds: 2 } }, target: { plan: { work: 20, rest: 10, rounds: 3 } }, difficulty: 0.2,
                levels: { easy: { state: { plan: { work: 20, rest: 20, rounds: 3 } } }, challenge: { prompt: '운동 칸은 달리기, 쉬기 칸은 걷기예요. 운동 25초, 쉬기 15초, 4번으로 판을 맞추어요.', target: { plan: { work: 25, rest: 15, rounds: 4 } } } } },
              { prompt: '맞춘 계획대로 강당을 달리고 걸어요. 짝은 신호에 맞게 빠르기를 바꾸었는지 봐 줘요.', free: true, talk: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 상황에 맞는 빠르기 고르기', minutes: 12, tool: 'mindmap',
            teacher: '"오래 달려야 할 때와 짧게 시합할 때, 빠르기는 어떻게 다를까요?" 카드마다 까닭을 말하게 한다. 몸을 데울 때 처음부터 빠르게 달리면 몸이 놀란다는 것도 짚는다.',
            task: '상황 카드를 천천히 달리기가 좋은 때와 빠르게 달리기가 좋은 때로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '천천히 달리기가 좋은 때와 빠르게 달리기가 좋은 때로 나누어 보세요.', toolOptions: { topic: '빠르기 고르기', slots: ['천천히 달려요', '빠르게 달려요'], cards: ['운동장을 오래 달려야 할 때', '짧은 거리 달리기 시합', '몸을 처음 데울 때', '술래에게 잡히지 않으려 할 때'] },
                target: { sort: { '천천히 달려요': ['운동장을 오래 달려야 할 때', '몸을 처음 데울 때'], '빠르게 달려요': ['짧은 거리 달리기 시합', '술래에게 잡히지 않으려 할 때'] } }, difficulty: 0.15,
                hints: ['카드마다 얼마나 오래 달려야 하는지 떠올려 보세요.', '천천히 칸 카드는 오래 달리거나 몸을 처음 쓰는 때인가요?', '오래 달릴 때와 몸을 데울 때는 천천히, 짧은 시합과 술래 피하기는 빠르게 달려요.'] },
              { prompt: '이번 상황도 나누어 보세요.', toolOptions: { topic: '빠르기 고르기', slots: ['천천히 달려요', '빠르게 달려요'], cards: ['숨이 너무 찰 때', '이어달리기에서 배턴을 받았을 때', '친구와 이야기하며 달리고 싶을 때', '도착선이 바로 앞에 보일 때'] },
                target: { sort: { '천천히 달려요': ['숨이 너무 찰 때', '친구와 이야기하며 달리고 싶을 때'], '빠르게 달려요': ['이어달리기에서 배턴을 받았을 때', '도착선이 바로 앞에 보일 때'] } }, difficulty: 0.2,
                levels: { challenge: { prompt: '여섯 상황을 나누어 보세요.', toolOptions: { cards: ['숨이 너무 찰 때', '이어달리기에서 배턴을 받았을 때', '친구와 이야기하며 달리고 싶을 때', '도착선이 바로 앞에 보일 때', '달리기를 마치고 정리할 때', '꼬리잡기에서 꼬리를 지킬 때'] },
                  target: { sort: { '천천히 달려요': ['숨이 너무 찰 때', '친구와 이야기하며 달리고 싶을 때', '달리기를 마치고 정리할 때'], '빠르게 달려요': ['이어달리기에서 배턴을 받았을 때', '도착선이 바로 앞에 보일 때', '꼬리잡기에서 꼬리를 지킬 때'] } } } } },
              { prompt: '숨이 너무 찰 때 할 일만 골라 보세요.', toolOptions: { mode: 'pick', basket: '숨이 찰 때', cards: ['빠르기를 줄여요', '걸으며 숨을 골라요', '더 빨리 달려요', '참고 끝까지 전력으로 달려요'] },
                target: { pick: ['빠르기를 줄여요', '걸으며 숨을 골라요'] }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"처음부터 끝까지 빠르게 달렸을 때와 빠르기를 바꾸어 달렸을 때, 무엇이 달랐나요?" 도입의 30초 달리기와 견주게 한다. 다음 시간에는 걷기·달리기 탐험 전체를 돌아본다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'timer', options: { title: '달리고 걷기', plan: { work: 20, rest: 20, rounds: 2 } }, prompt: '운동 칸은 달리기, 쉬기 칸은 걷기예요. 운동 15초, 쉬기 5초, 4번으로 판을 맞추어 보세요.', target: { plan: { work: 15, rest: 5, rounds: 4 } }, difficulty: 0.2 },
          { type: 'choice', prompt: '운동장을 오래 달려야 할 때 알맞은 빠르기는?', options: ['처음부터 끝까지 가장 빠르게', '천천히, 숨이 차면 걸으며'], answer: 1, difficulty: 0.1, explain: '천천히 달려야 숨이 덜 차서 오래 달릴 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '빠르기를 바꾸어요',
      items: [
        { type: 'table', prompt: '빠르기 바꾸기 차례를 쓰세요.', columns: ['차례', '빠르기'], cells: [['1', '걸으며 몸 데우기'], ['2', ''], ['3', ''], ['4', '걸으며 숨 고르기']] },
        { type: 'choice', prompt: '빠르게 달리기가 좋은 때에 ○ 하세요.', options: ['몸을 처음 데울 때', '짧은 거리 시합', '숨이 너무 찰 때'], answer: '짧은 거리 시합' },
        { type: 'short', prompt: '숨이 너무 찰 때 할 일을 쓰세요.' },
        { type: 'draw', prompt: '빠르기를 바꾸어 달리는 내 모습을 그려 보세요.' },
      ],
      easy: {
        note: '처음과 끝은 걸어요.',
        items: [
          { type: 'choice', prompt: '맨 처음에는 어떻게 하나요?', options: ['걸으며 몸 데우기', '가장 빠르게 달리기'], answer: '걸으며 몸 데우기' },
          { type: 'choice', prompt: '숨이 너무 찰 때는?', options: ['걸으며 숨 고르기', '더 빨리 달리기'], answer: '걸으며 숨 고르기' },
          { type: 'draw', prompt: '달리는 내 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '차례 카드는 두 장만 바꾸면 되고, 판은 쉬기 시간만 맞추면 돼요. 나누기는 맞는 칸에 초록 테두리가 생겨요.',
      base: '빠르기 차례와 달리기·걷기 시간을 스스로 맞추고, 상황마다 빠르기를 골라요.',
      challenge: '더 긴 계획을 세우고 시간 재기로 재요. 상황 카드가 여섯 장으로 늘어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 빨리 달릴수록 좋다고만 여긴다 → 도입의 30초 전력 달리기 뒤 숨찬 느낌을 떠올리게 한다. ② 타이머의 쉬기를 "가만히 서 있기"로 안다 → 이 계획에서 쉬기는 걸으며 숨 고르기라고 다시 말한다. ③ 숨이 차도 참는다 → 어지러우면 바로 멈추는 약속을 지킨다.',
  }));

  lessons.push(L(24, {
    title: '걷기·달리기 탐험 돌아보고 다짐하기',
    objective: '걷기·달리기 탐험에서 배운 것을 묶어 말하고, 다음에 바꾸어 볼 길이나 빠르기를 정할 수 있다.',
    illustration: ART('children gathered around a paper explorer map showing footprints, a zigzag cone path, a baton and a finish flag, each placing a small paper sticker on their favorite part', '걷기·달리기 탐험 지도', [
      { motif: 'star', x: 110, y: 96 }, { motif: 'tree', x: 410, y: 214 }, { motif: 'flower', x: 300, y: 230 }]),
    safety: [SPACE, LOOK, STOP],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"걷기·달리기 탐험 지도를 함께 따라가 볼까요?" 걷기와 달리기의 다른 점, 고깔 길, 이어달리기, 꼬리잡기, 빠르기 바꾸기 그림을 차례로 짚는다. "어디가 가장 즐거웠나요? 어디가 가장 어려웠나요?"',
        student: '탐험 지도에서 가장 즐거웠던 곳을 손가락으로 짚어 봐요.',
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 배운 것 묶어 보기', minutes: 13, tool: 'mindmap',
            teacher: '"이 카드는 어떤 탐험에서 배운 것일까요?" 카드를 나눈 뒤 묶음마다 하나씩 몸으로 해 본다. 헷갈리는 카드는 그 차시의 놀이를 짧게 떠올리게 한다.',
            task: '배운 것을 탐험 가지별로 나누고, 다음에 바꾸어 볼 것을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '배운 것을 탐험 가지별로 나누어 보세요.', toolOptions: { topic: '걷기·달리기 탐험', slots: ['걷기와 달리기', '방향 바꾸기', '이어달리기'], cards: ['달릴 때 두 발이 모두 떠요', '고깔을 돌 때 옆을 살펴요', '배턴을 손바닥에 놓아 줘요', '같은 길도 큰 걸음은 걸음 수가 적어요', '뒤로 갈 때는 천천히 걸어요', '받는 친구 이름을 불러요'] },
                target: { sort: { '걷기와 달리기': ['달릴 때 두 발이 모두 떠요', '같은 길도 큰 걸음은 걸음 수가 적어요'], '방향 바꾸기': ['고깔을 돌 때 옆을 살펴요', '뒤로 갈 때는 천천히 걸어요'], '이어달리기': ['배턴을 손바닥에 놓아 줘요', '받는 친구 이름을 불러요'] } }, difficulty: 0.2,
                hints: ['카드마다 어떤 놀이를 할 때 배운 것인지 떠올려 보세요.', '배턴이나 받는 친구가 나오는 카드는 어떤 놀이일까요?', '두 발·걸음 수는 걷기와 달리기, 고깔·뒤로 가기는 방향 바꾸기, 배턴·이름 부르기는 이어달리기예요.'] },
              { prompt: '다음 달리기 놀이에서 바꾸어 볼 것으로 알맞은 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '다음에 바꿀 것', cards: ['고깔 길을 더 길게 해 봐요', '빠르기를 세 번 바꾸어 봐요', '친구를 밀어 일등을 해 봐요', '배턴 대신 공을 던져 이어 봐요'] },
                target: { pick: ['고깔 길을 더 길게 해 봐요', '빠르기를 세 번 바꾸어 봐요'] }, difficulty: 0.15 },
              { prompt: '짝에게 다음에 바꾸어 볼 길이나 빠르기를 말하고, 그 까닭도 말해요.', free: true, talk: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 함께 달린 친구와 내 마음', minutes: 13, tool: 'emotion',
            teacher: '"같이 달린 친구에게 고마웠던 때가 있었나요?" 두세 명이 말한 뒤, 일등을 못 해 놀림을 받는 상황을 함께 따진다. 마음 크기는 솔직하게 고른다.',
            task: '달리기 놀이에서 생긴 일에 어떻게 할지 고르고, 걷기·달리기 탐험을 마친 내 마음을 골라요.',
            levels: { easy: { live: true, instant: true, steps: 3 }, base: {}, challenge: {} },
            items: [
              { prompt: '친구들이 달리기에서 늦게 들어온 민지를 놀려요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '민지', situation: '달리기가 끝나고 몇몇 친구가 "민지는 거북이래요" 하며 웃어요.', choices: [
                { id: 'laugh', text: '같이 웃어요', result: '민지가 고개를 숙이고 혼자 앉아 있어요.', mood: '속상함', why: '같이 웃으면 민지의 마음은 어떨까요?' },
                { id: 'stop', text: '"끝까지 달린 민지가 멋졌어" 하고 말해요', result: '놀리던 친구들도 민지에게 손뼉을 쳐요.', mood: '고마움' }] }, target: { choice: 'stop' }, difficulty: 0.1 },
              { prompt: '달리기 놀이에서 생긴 일에 어울리는 마음 카드를 놓아 보세요.', toolOptions: { cards: ['고마움', '미안함', '신남'], slots: [{ id: 's1', label: '넘어졌을 때 친구가 일으켜 줬어요' }, { id: 's2', label: '내가 빨리 달리다 친구와 부딪혔어요' }, { id: 's3', label: '새로 꾸민 고깔 길을 처음 달려요' }] },
                target: { match: { s1: '고마움', s2: '미안함', s3: '신남' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['고마움', '미안함', '신남', '외로움'] } } } },
              { prompt: '걷기·달리기 탐험을 마친 지금, 나는 얼마나 뿌듯한가요? 내 마음대로 골라요.', toolOptions: { mode: 'scale', situation: '걷기·달리기 탐험 열두 시간을 떠올려요.', feeling: '뿌듯함', steps: 5, after: '솔직하게 골랐어요. 가장 뿌듯했던 때를 짝에게 말해 줘요.' }, target: { level: 'any' }, difficulty: 0.05 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"다음에 바꾸어 볼 길이나 빠르기를 한 사람씩 말해 볼까요?" 모둠별로 돌아가며 말하고 칠판에 모은다. 다음 시간부터는 뛰기 탐험을 시작한다고 알리며, 오늘 정한 것은 뛰기 놀이에도 써 볼 수 있다고 말한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '걷기·달리기 탐험', slots: ['걷기와 달리기', '방향 바꾸기', '이어달리기'], cards: ['옆으로 갈 때 둘레를 봐요', '걸을 때는 한 발이 늘 닿아요', '배턴을 꼭 쥐고 달려요'] }, prompt: '세 카드를 탐험 가지별로 나누어 보세요.', target: { sort: { '걷기와 달리기': ['걸을 때는 한 발이 늘 닿아요'], '방향 바꾸기': ['옆으로 갈 때 둘레를 봐요'], '이어달리기': ['배턴을 꼭 쥐고 달려요'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '다음 달리기 놀이에서 바꾸어 볼 것으로 알맞은 것은?', options: ['친구를 밀어 이기기', '고깔 사이를 넓혀 지그재그 달리기', '눈 감고 달리기'], answer: 1, difficulty: 0.1, explain: '안전하면서 새로워지는 방법으로 길이나 빠르기를 바꾸어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '걷기·달리기 탐험 돌아보기',
      items: [
        { type: 'table', prompt: '탐험마다 기억나는 것을 하나씩 쓰세요.', columns: ['탐험', '기억나는 것'], cells: [['걷기와 달리기', ''], ['방향 바꾸기', ''], ['이어달리기', '']] },
        { type: 'short', prompt: '다음에 바꾸어 볼 길이나 빠르기를 쓰세요.' },
        { type: 'short', prompt: '함께 달린 친구에게 고마웠던 일을 쓰세요.' },
        { type: 'choice', prompt: '달릴 때 두 발이 모두 떠 있는 때가 있는 것에 ○ 하세요.', options: ['걷기', '달리기'], answer: '달리기' },
      ],
      easy: {
        note: '가장 즐거웠던 것 하나, 바꿀 것 하나!',
        items: [
          { type: 'short', prompt: '가장 즐거웠던 달리기 놀이를 쓰세요.' },
          { type: 'short', prompt: '다음에 바꿀 것을 쓰세요.' },
          { type: 'draw', prompt: '달리기 놀이를 하는 우리 반을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 마음 크기는 세 칸에서 골라요.',
      base: '여섯 장을 세 가지로 나누고, 바꿀 것과 마음을 골라요.',
      challenge: '마음 카드가 하나 더 있어 골라내야 해요. 바꿀 것의 까닭까지 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 일등을 해야 잘한 것이라는 생각이 남아 있다 → 21차시 \'잘 달린 모습\' 칠판을 다시 보여 준다. ② 바꿀 것을 위험하게 정한다 → 안전과 재미를 함께 따지게 한다. ③ 마음 크기를 친구를 따라 고른다 → 정답이 없다는 것을 다시 말한다.',
  }));

  // ───────────────────────── 25~28차시: 멀리·높이 뛰기와 내려앉기 ─────────────────────────

  lessons.push(L(25, {
    title: '멀리 뛸까, 높이 뛸까? 뛰기 탐험 시작',
    objective: '멀리 뛰기와 높이 뛰기의 다른 점을 몸으로 느끼고, 상황에 맞는 뛰기를 고를 수 있다.',
    illustration: ART('a child leaping far over a blue paper puddle and another child jumping high over a low paper rope, both with knees bent', '멀리? 높이?', [
      { motif: 'cloud', x: 330, y: 80, s: 0.7 }, { motif: 'tree', x: 70, y: 214 }, { motif: 'flower', x: 410, y: 230 }]),
    safety: [SPACE, FLOOR, LAND],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"길에 물웅덩이가 있으면 어떻게 건너요? 낮은 줄이 놓여 있으면요?" 바닥에 파란 종이 웅덩이와 낮은 줄을 놓고 보여 준다. "오늘부터 뛰기 탐험이에요. 앞으로 멀리 뛰는 것과 위로 높이 뛰는 것이 어떻게 다른지 찾아봐요."',
        student: '제자리에서 한 번은 앞으로 멀리, 한 번은 위로 높이 뛰어 보고 무엇이 달랐는지 말해요.',
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 멀리 뛰기와 높이 뛰기 나누기', minutes: 13, tool: 'mindmap',
            teacher: '"웅덩이를 건널 때는 몸이 어디로 가야 할까요? 앞으로요, 위로요?" 카드마다 실제로 한 번씩 흉내 내며 나눈다. 두 가지가 다 되는 듯한 카드는 "더 중요한 것은 무엇일까요?"라고 묻는다.',
            task: '상황 카드를 멀리 뛰기와 높이 뛰기로 나누고, 짝과 두 가지 뛰기를 번갈아 해 봐요.',
            levels: CARD_LV,
            items: [
              { prompt: '멀리 뛰어야 하는 때와 높이 뛰어야 하는 때로 나누어 보세요.', toolOptions: { topic: '어떻게 뛸까?', slots: ['멀리 뛰어요', '높이 뛰어요'], cards: ['물웅덩이를 건너요', '낮은 줄을 넘어요', '넓은 개울 돌 사이를 건너요', '높이 매달린 풍선을 손으로 쳐요'] },
                target: { sort: { '멀리 뛰어요': ['물웅덩이를 건너요', '넓은 개울 돌 사이를 건너요'], '높이 뛰어요': ['낮은 줄을 넘어요', '높이 매달린 풍선을 손으로 쳐요'] } }, difficulty: 0.15,
                hints: ['카드마다 몸이 앞으로 가야 하는지 위로 가야 하는지 떠올려 보세요.', '웅덩이와 개울은 넓이를 건너야 하나요, 높이를 넘어야 하나요?', '웅덩이·개울은 앞으로 멀리, 줄·풍선은 위로 높이 뛰어요.'] ,
                levels: { challenge: { prompt: '여섯 상황을 멀리 뛰기와 높이 뛰기로 나누어 보세요.', toolOptions: { cards: ['물웅덩이를 건너요', '낮은 줄을 넘어요', '넓은 개울 돌 사이를 건너요', '높이 매달린 풍선을 손으로 쳐요', '바닥에 그린 강을 건너요', '나뭇가지 잎을 손끝으로 만져요'] },
                  target: { sort: { '멀리 뛰어요': ['물웅덩이를 건너요', '넓은 개울 돌 사이를 건너요', '바닥에 그린 강을 건너요'], '높이 뛰어요': ['낮은 줄을 넘어요', '높이 매달린 풍선을 손으로 쳐요', '나뭇가지 잎을 손끝으로 만져요'] } } } } },
              { prompt: '멀리 뛰기를 할 때 몸이 하는 일만 골라 보세요.', toolOptions: { mode: 'pick', basket: '멀리 뛸 때', cards: ['팔을 앞으로 힘껏 흔들어요', '몸이 앞으로 나가요', '제자리에 그대로 떨어져요', '팔을 몸에 딱 붙여요'] },
                target: { pick: ['팔을 앞으로 힘껏 흔들어요', '몸이 앞으로 나가요'] }, difficulty: 0.15 },
              { prompt: '짝과 번갈아 종이 웅덩이를 멀리 뛰어 건너고, 낮은 줄을 높이 뛰어 넘어요. 짝은 두 발로 내려앉았는지 봐 줘요.', free: true, talk: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 뛸 때 굽혔다 펴는 곳 찾기', minutes: 13, tool: 'body',
            teacher: '"뛰기 전에 몸을 살짝 낮추어 보세요. 어디가 굽혀지나요?" 손으로 짚게 한 뒤 몸 그림에서 고르게 한다. 다리를 통째로 고르는 학생에게 "다리 가운데 접히는 곳은 어디일까요?"라고 묻는다.',
            task: '뛰기 전·뛸 때 몸을 움직여 보고, 굽히거나 흔든 곳을 손으로 짚은 뒤 몸 그림에서 눌러요.',
            levels: {
              easy: { mode: 'parts', parts: ['어깨', '허리', '무릎', '발목'], names: true },
              base: { mode: 'parts', parts: ['목', '어깨', '팔꿈치', '손목', '허리', '무릎', '발목'] },
              challenge: { mode: 'parts' },
            },
            items: [
              { prompt: '뛰기 전에 의자에 앉듯 몸을 살짝 낮추어 보세요. 다리에서 가장 많이 굽혀진 곳을 눌러요.', target: { parts: ['무릎'] }, difficulty: 0.1,
                hints: ['몸을 낮출 때 다리 가운데에 손을 대 보세요.', '고른 곳을 손으로 짚고 다시 몸을 낮추어 보세요. 그곳이 접히나요?', '허벅지와 정강이 사이, 접히는 곳이 무릎이에요.'] },
              { prompt: '멀리 뛰기 전에 두 팔을 뒤로 보냈다가 앞으로 힘껏 흔들어 보세요. 팔이 몸에서 돌아간 곳을 눌러요.', target: { parts: ['어깨'] }, difficulty: 0.15,
                hints: ['팔을 흔들 때 다른 손을 팔이 시작되는 곳에 얹어 보세요.', '팔꿈치는 펴져 있었지요? 팔 전체가 어디에서부터 돌았나요?', '목 양옆 아래, 팔이 몸에 붙은 둥근 곳이 어깨예요.'] },
              { prompt: '높이 뛰려고 발뒤꿈치를 들고 발끝으로 바닥을 밀어 보세요. 움직인 곳을 눌러요.', target: { parts: ['발목'] }, difficulty: 0.15,
                hints: ['발뒤꿈치를 들 때 발과 다리가 만나는 곳을 보세요.', '무릎은 펴져 있어도 발끝을 밀 수 있지요? 아래쪽을 살펴요.', '발과 다리 사이, 양말 목이 닿는 곳이 발목이에요.'] },
              { prompt: '뛰기 전에 몸을 낮추면서 윗몸을 앞으로 숙여 보세요. 굽혀진 곳 두 곳을 모두 눌러요.', target: { parts: ['허리', '무릎'] }, difficulty: 0.25,
                levels: { easy: { prompt: '뛰기 전에 몸을 낮추면서 윗몸을 앞으로 숙여 보세요. 굽혀진 곳 두 곳을 모두 눌러요. 다리 한 곳, 몸통 한 곳이에요.' } },
                hints: ['몸을 숙일 때 몸통 가운데와 다리 가운데를 손으로 짚어 보세요.', '한 곳만 골랐나요? 윗몸이 숙여진 곳도 찾아요.', '윗몸이 숙여지는 허리, 다리가 접히는 무릎 두 곳이에요.'] },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"멀리 뛸 때와 높이 뛸 때, 몸이 가는 쪽이 어떻게 달랐나요?" 두세 명이 몸으로 보여 주며 말하게 한다. 다음 시간에는 뛴 뒤 안전하게 내려앉는 방법을 탐험한다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '어떻게 뛸까?', slots: ['멀리 뛰어요', '높이 뛰어요'], cards: ['줄넘기 줄 위를 넘어요', '바닥에 놓은 두 줄 사이 강을 건너요'] }, prompt: '두 카드를 멀리 뛰기와 높이 뛰기로 나누어 보세요.', target: { sort: { '멀리 뛰어요': ['바닥에 놓은 두 줄 사이 강을 건너요'], '높이 뛰어요': ['줄넘기 줄 위를 넘어요'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '높이 뛰기를 할 때 몸은 주로 어느 쪽으로 가나요?', options: ['앞으로', '위로'], answer: 1, difficulty: 0.1, explain: '높이 뛰기는 위로, 멀리 뛰기는 앞으로 몸이 가요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '멀리 뛰기와 높이 뛰기',
      items: [
        { type: 'table', prompt: '상황마다 어떻게 뛸지 쓰세요(멀리/높이).', columns: ['상황', '어떻게 뛸까'], cells: [['물웅덩이 건너기', ''], ['낮은 줄 넘기', ''], ['넓은 개울 건너기', '']] },
        { type: 'choice', prompt: '뛰기 전에 몸을 낮출 때 굽혀지는 곳에 ○ 하세요.', options: ['무릎', '팔꿈치', '목'], answer: '무릎' },
        { type: 'short', prompt: '멀리 뛰기와 높이 뛰기 가운데 더 해 보고 싶은 것과 까닭을 쓰세요.' },
        { type: 'draw', prompt: '웅덩이를 멀리 뛰어 건너는 내 모습을 그려 보세요.' },
      ],
      easy: {
        note: '웅덩이는 멀리, 줄은 높이!',
        items: [
          { type: 'choice', prompt: '물웅덩이를 건널 때는?', options: ['멀리 뛰어요', '높이 뛰어요'], answer: '멀리 뛰어요' },
          { type: 'choice', prompt: '낮은 줄을 넘을 때는?', options: ['멀리 뛰어요', '높이 뛰어요'], answer: '높이 뛰어요' },
          { type: 'draw', prompt: '뛰는 내 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 몸 그림에 이름이 붙은 네 곳만 있어요.',
      base: '상황 네 장을 나누고, 일곱 곳 가운데 굽히거나 흔든 곳을 찾아요.',
      challenge: '상황 카드가 여섯 장이고, 몸 그림에 이름 없이 모든 곳이 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 웅덩이를 위로 높이 뛰어 제자리에 떨어진다 → 팔을 앞으로 흔들며 몸을 앞으로 보내게 한다. ② 한 발로 뛰어 내려앉다 미끄러진다 → 오늘은 두 발로 뛰고 두 발로 내려앉는 것만 한다. ③ 무릎을 펴고 뛴다 → 뛰기 전에 몸을 낮추는 것부터 해 보게 한다.',
  }));

  lessons.push(L(26, {
    title: '사뿐히 내려앉기, 무릎을 굽혀요',
    objective: '뛴 뒤 무릎을 굽혀 두 발로 사뿐히 내려앉는 방법을 알고 몸으로 해 볼 수 있다.',
    illustration: ART('a child landing softly on two feet with bent knees on a paper mat, small paper sound waves showing a quiet landing, a cat watching', '사뿐히 내려앉아요', [
      { motif: 'leaf', x: 90, y: 200 }, { motif: 'tree', x: 420, y: 214 }, { motif: 'star', x: 300, y: 96, s: 0.6 }]),
    safety: [FLOOR, LAND, '매트 끝에서 뛰지 않고 매트 가운데로 내려앉아요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"고양이가 높은 곳에서 내려올 때 소리가 날까요?" 무릎을 편 채 쿵 내려앉는 모습과 무릎을 굽혀 사뿐히 내려앉는 모습을 선생님이 보여 주고 소리를 견주게 한다. "어느 쪽이 무릎이 덜 아플까요?"',
        student: '선생님의 두 가지 내려앉기 소리를 듣고, 더 조용했던 쪽을 손가락으로 보여 줘요.',
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 제자리 뛰고 내려앉는 차례', minutes: 12, tool: 'story',
            teacher: '"뛰기 전부터 내려앉은 뒤까지, 무엇을 차례로 할까요?" 카드를 놓은 뒤 다 함께 한 동작씩 천천히 따라 한다. 내려앉은 뒤 바로 다시 뛰는 학생에게 "멈추고 둘레를 본 다음 다시 해요"라고 말한다.',
            task: '제자리 뛰기 차례를 놓고, 그 차례대로 매트 위에서 뛰고 내려앉아요.',
            levels: CARD_LV,
            items: [
              { prompt: '제자리에서 위로 뛰고 내려앉는 차례대로 카드를 놓아 보세요.', toolOptions: { cards: ['무릎을 굽혀 두 발로 내려앉아요', '발끝으로 바닥을 밀며 위로 뛰어요', '무릎을 살짝 굽혀 몸을 낮추어요', '멈추어 서서 둘레를 봐요'] },
                target: { order: ['무릎을 살짝 굽혀 몸을 낮추어요', '발끝으로 바닥을 밀며 위로 뛰어요', '무릎을 굽혀 두 발로 내려앉아요', '멈추어 서서 둘레를 봐요'] }, difficulty: 0.15,
                hints: ['뛰려면 먼저 몸을 어떻게 해야 할까요?', '내려앉는 것은 뛴 다음일까요, 뛰기 전일까요?', '몸 낮추기 → 바닥 밀며 뛰기 → 무릎 굽혀 내려앉기 → 멈추어 둘레 보기 차례예요.'] },
              { prompt: '앞으로 멀리 뛰고 내려앉는 차례대로 카드를 놓아 보세요.', toolOptions: { cards: ['팔을 앞으로 흔들며 뛰어요', '두 팔을 뒤로 보내며 몸을 낮추어요', '무릎을 굽히며 두 발로 앞에 내려앉아요', '내려앉은 곳에서 일어나 줄 뒤로 걸어가요'] },
                target: { order: ['두 팔을 뒤로 보내며 몸을 낮추어요', '팔을 앞으로 흔들며 뛰어요', '무릎을 굽히며 두 발로 앞에 내려앉아요', '내려앉은 곳에서 일어나 줄 뒤로 걸어가요'] }, difficulty: 0.2,
                hints: ['내 몸으로 천천히 따라 해 보세요. 발이 바닥을 떠나기 전에 하는 일, 떠 있을 때 하는 일, 바닥에 닿은 뒤 하는 일로 나누어 생각해요.',
                  '뛰려면 먼저 몸을 웅크려 힘을 모아야 해요. 땅에 닿기 전에 줄 뒤로 걸어갈 수는 없어요.',
                  '\'두 팔을 뒤로 보내며 몸을 낮추어요\' 다음에 \'팔을 앞으로 흔들며 뛰어요\', 그다음에 내려앉고, 맨 끝에 줄 뒤로 걸어가요.'],
                levels: { challenge: { prompt: '앞으로 멀리 뛰고 내려앉는 차례대로 카드를 놓아 보세요. 카드가 더 많아요.', toolOptions: { cards: ['팔을 앞으로 흔들며 뛰어요', '두 팔을 뒤로 보내며 몸을 낮추어요', '무릎을 굽히며 두 발로 앞에 내려앉아요', '내려앉은 곳에서 일어나 줄 뒤로 걸어가요', '출발선에 두 발을 모으고 서요'] },
                  target: { order: ['출발선에 두 발을 모으고 서요', '두 팔을 뒤로 보내며 몸을 낮추어요', '팔을 앞으로 흔들며 뛰어요', '무릎을 굽히며 두 발로 앞에 내려앉아요', '내려앉은 곳에서 일어나 줄 뒤로 걸어가요'] } } } },
              { prompt: '매트 위에서 제자리 뛰기를 세 번 해요. 짝은 내려앉는 소리가 조용했는지, 무릎을 굽혔는지 봐 줘요.', free: true, talk: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 안전한 내려앉기 고르기', minutes: 14, tool: 'mindmap',
            teacher: '"무릎을 쭉 편 채 쿵 내려앉으면 어떤 소리가 나고, 몸은 어떨까요?" 카드를 나눈 뒤 사뿐히 내려앉기를 모둠별로 다시 해 본다. 소리를 크게 내는 학생에게 "고양이 발처럼 해 볼까요?"라고 말한다.',
            task: '내려앉는 모습을 안전한 것과 위험한 것으로 나누고, 고양이처럼 사뿐히 내려앉아 봐요.',
            levels: CARD_LV,
            items: [
              { prompt: '내려앉는 모습을 안전한 것과 위험한 것으로 나누어 보세요.', toolOptions: { topic: '내려앉기', slots: ['안전해요', '위험해요'], cards: ['무릎을 굽혀 두 발로 내려앉아요', '무릎을 쭉 펴고 쿵 내려앉아요', '발 앞쪽부터 사뿐히 닿아요', '한 발로 내려앉다 옆으로 넘어져요'] },
                target: { sort: { '안전해요': ['무릎을 굽혀 두 발로 내려앉아요', '발 앞쪽부터 사뿐히 닿아요'], '위험해요': ['무릎을 쭉 펴고 쿵 내려앉아요', '한 발로 내려앉다 옆으로 넘어져요'] } }, difficulty: 0.15,
                hints: ['카드마다 무릎이 굽혀졌는지 펴졌는지 보세요.', '쿵 소리가 크게 나는 내려앉기는 몸에 어떨까요?', '무릎 굽혀 두 발로·발 앞쪽부터 사뿐히는 안전, 무릎 펴고 쿵·한 발로 넘어지기는 위험해요.'],
                levels: { challenge: { prompt: '여섯 모습을 안전한 것과 위험한 것으로 나누어 보세요.', toolOptions: { cards: ['무릎을 굽혀 두 발로 내려앉아요', '무릎을 쭉 펴고 쿵 내려앉아요', '발 앞쪽부터 사뿐히 닿아요', '한 발로 내려앉다 옆으로 넘어져요', '내려앉으며 두 팔을 앞으로 내밀어 균형을 잡아요', '친구가 내려앉는 자리로 바로 뛰어요'] },
                  target: { sort: { '안전해요': ['무릎을 굽혀 두 발로 내려앉아요', '발 앞쪽부터 사뿐히 닿아요', '내려앉으며 두 팔을 앞으로 내밀어 균형을 잡아요'], '위험해요': ['무릎을 쭉 펴고 쿵 내려앉아요', '한 발로 내려앉다 옆으로 넘어져요', '친구가 내려앉는 자리로 바로 뛰어요'] } } } } },
              { prompt: '뛰기 전에 살펴야 할 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '뛰기 전에', cards: ['내려앉을 곳에 친구가 없어요', '매트가 미끄러지지 않아요', '친구 얼굴이 웃고 있어요', '신발이 새것이에요'] },
                target: { pick: ['내려앉을 곳에 친구가 없어요', '매트가 미끄러지지 않아요'] }, difficulty: 0.1 },
              { prompt: '모둠 친구들과 차례로 매트에서 멀리 뛰고 사뿐히 내려앉아요. 서로 내려앉는 소리가 작았는지 말해 줘요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 가장 조용하게 내려앉은 친구는 어떻게 했을까요?" 두세 명에게 시범을 보이게 하고 따라 하게 한다. 다음 시간에는 사방치기로 한 발·두 발 뛰기를 해 본다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', basket: '안전한 내려앉기', cards: ['두 발로 무릎을 굽혀요', '무릎을 쭉 펴요', '쿵 소리가 나게 떨어져요'] }, prompt: '안전한 내려앉기만 골라 보세요.', target: { pick: ['두 발로 무릎을 굽혀요'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '내려앉을 때 무릎을 굽히면 좋은 까닭은?', options: ['무릎과 몸이 덜 아파요', '더 큰 소리가 나요'], answer: 0, difficulty: 0.1, explain: '무릎을 굽히면 땅에 닿는 힘이 부드러워져 몸이 덜 아파요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '사뿐히 내려앉기',
      items: [
        { type: 'table', prompt: '제자리 뛰기 차례를 쓰세요.', columns: ['차례', '하는 일'], cells: [['1', ''], ['2', '바닥을 밀며 위로 뛰어요'], ['3', ''], ['4', '멈추어 둘레를 봐요']] },
        { type: 'choice', prompt: '안전한 내려앉기에 ○ 하세요.', options: ['무릎을 쭉 펴고 쿵', '무릎을 굽혀 두 발로', '한 발로 내려앉기'], answer: '무릎을 굽혀 두 발로' },
        { type: 'short', prompt: '뛰기 전에 살펴야 할 것을 하나 쓰세요.' },
        { type: 'draw', prompt: '무릎을 굽혀 내려앉는 내 모습을 그려 보세요.' },
      ],
      easy: {
        note: '고양이처럼 사뿐히, 무릎을 굽혀요.',
        items: [
          { type: 'choice', prompt: '내려앉을 때 무릎은?', options: ['굽혀요', '쭉 펴요'], answer: '굽혀요' },
          { type: 'choice', prompt: '몇 발로 내려앉나요?', options: ['두 발', '한 발'], answer: '두 발' },
          { type: 'draw', prompt: '사뿐히 내려앉는 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '차례와 나누기 모두 맞는 칸에 초록 테두리가 생겨요.',
      base: '두 가지 뛰기의 차례를 놓고, 내려앉기 모습 네 장을 나누어요.',
      challenge: '멀리 뛰기 차례 카드가 다섯 장이고, 나누기 카드도 여섯 장이에요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 무릎을 편 채 쿵 내려앉는다 → 소리를 들려주고 "더 작은 소리"를 목표로 삼게 한다. ② 내려앉은 뒤 바로 다시 뛰어 앞 친구와 부딪힌다 → 내려앉으면 멈추어 둘레를 보는 차례를 꼭 넣는다. ③ 매트 끝에서 뛰어 매트가 밀린다 → 매트 밑에 미끄럼 방지판을 깔고 가운데로만 내려앉게 한다.',
  }));

  lessons.push(L(27, {
    title: '사방치기로 한 발·두 발 뛰기',
    objective: '한 발 뛰기와 두 발 뛰기를 번갈아 하며 사방치기 칸의 규칙을 찾아 뛸 수 있다.',
    illustration: ART('a hopscotch grid drawn on the playground with single and double squares, a child hopping on one foot, a small stone marker', '한 발? 두 발?', [
      { motif: 'sun', x: 90, y: 64, s: 0.6 }, { motif: 'tree', x: 420, y: 214 }, { motif: 'flower', x: 70, y: 232 }]),
    safety: [SPACE, LAND, '앞 친구가 끝 칸을 다 지난 뒤에 출발해요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"이 칸 그림을 본 적 있나요?" 바닥에 그린 사방치기 칸을 보여 준다. "한 칸짜리에서는 한 발, 두 칸이 나란히 있는 곳에서는 두 발로 디뎌요." 선생님이 천천히 한 번 뛰어 보인다.',
        student: '제자리에서 한 발로 세 번, 두 발로 세 번 콩콩 뛰어 봐요.',
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 사방치기 칸 규칙 찾기', minutes: 13, tool: 'pattern',
            teacher: '"칸 그림을 보고 한 발, 두 발을 말로 읽어 볼까요?" 빈칸이 있는 줄을 함께 읽고 채운다. 채운 줄은 바로 바닥 칸에서 뛰어 보고 "줄대로 디뎠나요?" 하고 묻는다.',
            task: '사방치기 칸 줄의 규칙을 찾아 빈칸을 채우고, 그 줄대로 바닥 칸에서 뛰어요.',
            levels: { easy: { perRow: 4 }, base: {}, challenge: { revealAfterCheck: true } },
            items: [
              { prompt: '\'한 발, 두 발\'이 되풀이되는 칸 줄이에요. 빈칸을 채워요.', toolOptions: { seq: ['한 발', '두 발', '한 발', null, '한 발', '두 발', null, '두 발'] }, target: { fill: ['두 발', '한 발'] }, difficulty: 0.1,
                levels: { easy: { toolOptions: { perRow: 2 } } } },
              { prompt: '\'한 발, 한 발, 두 발\'이 되풀이되는 칸 줄이에요. 빈칸을 채워요.', toolOptions: { seq: ['한 발', '한 발', '두 발', null, '한 발', null, '한 발', null, '두 발'] }, target: { fill: ['한 발', '두 발', '한 발'] }, difficulty: 0.2,
                levels: { easy: { toolOptions: { perRow: 3 } } } },
              { prompt: '\'두 발, 한 발, 한 발\'이 되풀이되는 칸 줄이에요. 빈칸을 채워요.', toolOptions: { seq: ['두 발', '한 발', '한 발', '두 발', null, null, '두 발', '한 발', null] }, target: { fill: ['한 발', '한 발', '한 발'] }, difficulty: 0.25,
                levels: { easy: { toolOptions: { perRow: 3 } } } },
              { prompt: '채운 칸 줄 하나를 골라 바닥 칸에서 뛰어요. 짝은 한 발·두 발을 줄대로 디뎠는지 봐 줘요.', free: true, talk: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 우리 모둠 사방치기 만들기', minutes: 13, tool: 'pattern',
            teacher: '"우리 모둠만의 사방치기 칸을 만들어 볼까요? 규칙이 되풀이되어야 뒤 친구도 알 수 있어요." 만든 줄대로 분필로 칸을 그려 모둠이 함께 뛴다. 한 발 칸이 너무 많이 이어진 줄에는 "한 발로 계속 뛰면 다리가 어떨까요?"라고 묻는다.',
            task: '한 발·두 발로 되풀이되는 우리 모둠 칸 줄을 만들고, 분필로 그린 칸에서 함께 뛰어요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '한 발·두 발을 써서 묶음이 되풀이되는 우리 모둠 칸 줄을 만들어요.', toolOptions: { mode: 'make', palette: ['한 발', '두 발'], length: 6 }, target: { rule: 'repeat', minRepeats: 2, uses: 2 }, difficulty: 0.2,
                hints: ['먼저 몇 칸을 한 묶음으로 정하고, 그 묶음을 똑같이 되풀이해요.', '첫 묶음과 다음 묶음을 칸마다 견주어 보세요. 다른 칸이 있나요?', '정한 묶음을 첫 칸부터 끝 칸까지 같은 차례로 되풀이해요. 묶음 칸 수와 쓸 낱말 수는 문제를 다시 읽고 맞추어요.'],
                levels: { challenge: { prompt: '한 발·두 발·쉬기를 모두 써서, 세 칸 묶음이 되풀이되는 칸 줄을 만들어요.', toolOptions: { palette: ['한 발', '두 발', '쉬기'], length: 9 }, target: { rule: 'repeat', period: 3, minRepeats: 3, uses: 3 } } } },
              { prompt: '옆 모둠이 만든 \'두 발, 한 발, 두 발\' 칸 줄이에요. 빈칸을 채워 이어 뛸 수 있게 해요.', toolOptions: { seq: ['두 발', '한 발', '두 발', '두 발', '한 발', null, '두 발', null, null] }, target: { fill: ['두 발', '한 발', '두 발'] }, difficulty: 0.2 },
              { prompt: '모둠이 만든 칸 줄대로 분필 칸을 그리고 차례로 뛰어요. 앞 친구가 끝 칸을 지나면 출발해요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"한 발로 뛸 때와 두 발로 뛸 때, 어느 쪽이 더 흔들렸나요?" 까닭을 듣고, 흔들릴 때는 두 팔을 벌리면 도움이 된다고 말한다. 다음 시간에는 개구리처럼 멀리 뛰고 기록해 본다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'pattern', options: { seq: ['두 발', '두 발', '한 발', '두 발', null, '한 발'] }, prompt: '\'두 발, 두 발, 한 발\'이 되풀이되는 칸 줄이에요. 빈칸을 채워 보세요.', target: { fill: ['두 발'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '사방치기에서 앞 친구가 아직 칸 위에 있어요. 어떻게 할까요?', options: ['끝 칸을 다 지날 때까지 기다려요', '바로 뒤따라 뛰어요'], answer: 0, difficulty: 0.1, explain: '앞 친구가 끝 칸을 지난 뒤 출발해야 부딪히지 않아요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '사방치기 칸 규칙',
      items: [
        { type: 'figure', prompt: '칸 줄의 빈칸에 들어갈 말을 쓰세요.', tool: 'pattern', figures: [{ options: { seq: ['한 발', '두 발', '한 발', '두 발', null, null] }, caption: '빈칸: ___, ___' }], answer: '한 발, 두 발' },
        { type: 'figure', prompt: '칸 줄의 빈칸에 들어갈 말을 쓰세요.', tool: 'pattern', figures: [{ options: { seq: ['한 발', '한 발', '두 발', '한 발', null, '두 발'] }, caption: '빈칸: ___' }], answer: '한 발' },
        { type: 'short', prompt: '한 발로 뛸 때 흔들리지 않으려면 어떻게 할지 쓰세요.' },
        { type: 'draw', prompt: '우리 모둠이 만든 사방치기 칸을 그려 보세요.' },
      ],
      easy: {
        note: '한 칸은 한 발, 나란한 두 칸은 두 발!',
        items: [
          { type: 'choice', prompt: '나란한 두 칸에서는?', options: ['두 발로 디뎌요', '한 발로 디뎌요'], answer: '두 발로 디뎌요' },
          { type: 'choice', prompt: '앞 친구가 칸 위에 있으면?', options: ['기다려요', '바로 뛰어요'], answer: '기다려요' },
          { type: 'draw', prompt: '사방치기 칸을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '칸 줄이 묶음마다 한 줄씩 보여 규칙이 잘 보여요.',
      base: '두세 칸 묶음 줄을 채우고, 두 가지로 되풀이되는 줄을 만들어요.',
      challenge: '확인 뒤에만 정답이 보이고, 쉬기까지 세 가지를 쓴 세 칸 묶음 줄을 만들어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 한 발 칸에서 두 발이 닿는다 → 처음에는 칸 수를 줄여 천천히 뛰게 한다. ② 만든 줄이 되풀이되지 않는다 → 첫 묶음을 손가락으로 덮고 다음 묶음과 견주게 한다. ③ 한 발로 오래 뛰어 힘들어한다 → 쉬기 칸이나 두 발 칸을 넣어 쉬게 한다.',
  }));

  lessons.push(L(28, {
    title: '개구리처럼 멀리 뛰고 기록하기',
    objective: '두 발 모아 멀리 뛰기를 여러 번 해 보고, 뛴 거리를 발 길이로 재어 기록할 수 있다.',
    illustration: ART('paper frogs leaping across lily pads, a child doing a standing long jump beside a paper measuring strip marked with footprints', '몇 발 뛰었나?', [
      { motif: 'leaf', x: 100, y: 214 }, { motif: 'flower', x: 400, y: 230 }, { motif: 'cloud', x: 330, y: 80, s: 0.6 }]),
    safety: [FLOOR, LAND, '재는 친구는 뛰는 줄 옆에 서고, 내려앉는 자리에 서지 않아요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"개구리는 어떻게 뛰나요?" 두 발 모아 쪼그렸다 뛰는 흉내를 함께 낸다. "오늘은 내가 얼마나 멀리 뛰었는지 발 길이로 재 볼 거예요. 출발선에서 내려앉은 뒤꿈치까지 발을 이어 붙여 세어요." 선생님이 시범으로 재어 보인다.',
        student: '선생님이 잰 거리를 함께 "하나, 둘, 셋…" 발 길이로 세어 봐요.',
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 멀리 뛰고 발 길이로 재기', minutes: 15, tool: 'timer',
            teacher: '"뛰기 전에 무엇을 살펴야 할까요?" 확인한 것을 누르게 한 뒤 짝끼리 세 번 뛰고 잰다. 재는 친구는 뛰는 줄 옆에서 기다렸다가 내려앉은 뒤에 다가가게 한다. "가장 먼 기록이 아니어도 괜찮아요. 세 번 모두 적어요."',
            task: '안전을 살핀 뒤 두 발 모아 멀리 뛰기를 세 번 하고, 짝이 발 길이로 잰 거리를 적어요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '멀리 뛰기 전에 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['내려앉을 곳에 물건과 친구가 없어요', '재는 친구가 줄 옆에 서 있어요', '바닥에 물기가 없어요'] }, target: { safety: true }, difficulty: 0.05 },
              { prompt: '두 발 모아 멀리 뛰기를 세 번 하고, 짝이 잰 발 길이를 칸에 적어요.', toolOptions: { title: '멀리 뛰기 기록', fields: ['1번', '2번', '3번'], unit: '발' }, target: { records: true }, difficulty: 0.1,
                levels: { easy: { prompt: '두 발 모아 멀리 뛰기를 두 번 하고, 짝이 잰 발 길이를 칸에 적어요.', toolOptions: { fields: ['1번', '2번'] } } } },
              { prompt: '짝과 역할을 바꾸어요. 한 사람은 개구리처럼 뛰고, 한 사람은 줄 옆에 섰다가 내려앉은 뒤꿈치까지 발을 이어 세어 줘요.', free: true, talk: true },
              { prompt: '서아의 기록이에요: 1번 4발, 2번 6발, 3번 5발. 이 기록을 칸에 그대로 옮겨 적어요.', toolOptions: { title: '서아의 멀리 뛰기', fields: ['1번', '2번', '3번'], unit: '발' }, target: { records: [4, 6, 5] }, difficulty: 0.2,
                levels: { challenge: { prompt: '서아의 기록이에요: 1번 4발, 2번 6발, 3번 5발, 4번 7발. 이 기록을 칸에 그대로 옮겨 적어요.', toolOptions: { fields: ['1번', '2번', '3번', '4번'] }, target: { records: [4, 6, 5, 7] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 기록을 보고 내 마음 말하기', minutes: 11, tool: 'emotion',
            teacher: '"기록을 보니 어떤 마음이 드나요?" 친구 기록과 견주는 말보다 내 기록이 바뀐 것을 말하게 한다. 짝보다 짧게 뛰어 속상한 학생 이야기에서 "지난번 나와 견주면 어떨까요?"라고 묻는다.',
            task: '기록할 때 생긴 일에 어울리는 마음을 고르고, 짝보다 짧게 뛴 친구를 어떻게 도울지 골라요.',
            levels: { easy: { live: true, instant: true, steps: 3 }, base: {}, challenge: {} },
            items: [
              { prompt: '멀리 뛰기를 할 때 생긴 일에 어울리는 마음 카드를 놓아 보세요.', toolOptions: { cards: ['뿌듯함', '걱정', '고마움'], slots: [{ id: 's1', label: '2번 기록이 1번보다 한 발 늘었어요' }, { id: 's2', label: '출발선에 서니 넘어질까 봐 떨려요' }, { id: 's3', label: '짝이 내 기록을 꼼꼼히 재 주었어요' }] },
                target: { match: { s1: '뿌듯함', s2: '걱정', s3: '고마움' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['뿌듯함', '걱정', '고마움', '심심함'] } } } },
              { prompt: '준호가 짝보다 두 발 짧게 뛰어 속상해해요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '준호', situation: '준호가 "나는 서아보다 두 발이나 짧아" 하며 고개를 숙여요.', choices: [
                { id: 'self', text: '"1번보다 2번이 늘었잖아" 하고 준호 기록끼리 견주어 줘요', result: '준호가 기록을 다시 보고 "정말 늘었네" 하며 웃어요.', mood: '뿌듯함' },
                { id: 'more', text: '"나는 너보다 세 발 더 뛰었어" 하고 말해요', result: '준호가 더 속상해서 기록지를 접어요.', mood: '속상함', why: '이 말을 들은 준호의 마음을 떠올려 봐요.' },
                { id: 'quit', text: '"그럼 하지 마" 하고 말해요', result: '준호가 다음 뛰기에 나오지 않아요.', mood: '속상함', why: '준호가 다시 해 보게 도울 수 있을까요?' }] }, target: { choice: 'self' }, difficulty: 0.1 },
              { prompt: '멀리 뛰기를 세 번 해 보니, 나는 얼마나 자신이 생겼나요? 내 마음대로 골라요.', toolOptions: { mode: 'scale', situation: '세 번 뛰고 잰 기록을 떠올려요.', feeling: '자신감', steps: 5, after: '솔직하게 골랐어요. 다음에 해 보고 싶은 것을 짝에게 말해 줘요.' }, target: { level: 'any' }, difficulty: 0.05 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"세 번 뛰는 동안 내 기록은 어떻게 바뀌었나요?" 늘었든 줄었든 그대로든 말해도 된다고 한다. 다음 시간에는 낮은 줄을 넘는 높이 뛰기를 탐험한다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'timer', options: { title: '민지의 멀리 뛰기', fields: ['1번', '2번'], unit: '발' }, prompt: '민지의 기록이에요: 1번 3발, 2번 5발. 칸에 그대로 옮겨 적어 보세요.', target: { records: [3, 5] }, difficulty: 0.15 },
          { type: 'choice', prompt: '친구가 멀리 뛸 때 재는 친구는 어디에 서야 할까요?', options: ['뛰는 줄 옆', '내려앉는 자리'], answer: 0, difficulty: 0.1, explain: '내려앉는 자리에 서 있으면 부딪힐 수 있어요. 줄 옆에서 기다렸다가 다가가요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '멀리 뛰기 기록',
      items: [
        { type: 'table', prompt: '내 멀리 뛰기 기록을 쓰세요.', columns: ['차례', '뛴 거리(발)'], cells: [['1번', ''], ['2번', ''], ['3번', '']] },
        { type: 'short', prompt: '세 번 뛰는 동안 내 기록이 어떻게 바뀌었는지 쓰세요.' },
        { type: 'choice', prompt: '멀리 뛰고 내려앉을 때 알맞은 것에 ○ 하세요.', options: ['무릎을 굽혀 두 발로', '한 발로 쿵'], answer: '무릎을 굽혀 두 발로' },
        { type: 'draw', prompt: '개구리처럼 멀리 뛰는 내 모습을 그려 보세요.' },
      ],
      easy: {
        note: '출발선부터 뒤꿈치까지 발을 이어 세어요.',
        items: [
          { type: 'short', prompt: '내가 가장 멀리 뛴 거리는 몇 발인지 쓰세요.' },
          { type: 'choice', prompt: '재는 친구는 어디에 서나요?', options: ['줄 옆', '내려앉는 자리'], answer: '줄 옆' },
          { type: 'draw', prompt: '멀리 뛰는 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '두 번만 뛰고 적어요. 마음 크기와 카드는 맞는 자리에 초록 테두리가 생겨요.',
      base: '세 번 뛰고 적은 뒤, 친구 기록을 옮겨 적고 마음을 골라요.',
      challenge: '네 번 기록을 옮겨 적고, 마음 카드가 하나 더 있어 골라내야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 발 길이를 띄엄띄엄 놓아 잰다 → 뒤꿈치와 발끝을 붙여 잇게 한다. ② 친구와 기록을 견주며 놀린다 → 내 기록끼리 견주는 말을 먼저 들려준다. ③ 재는 친구가 내려앉는 자리에 서 있다 → 바닥에 "재는 자리" 표시를 줄 옆에 붙인다.',
  }));

  // ───────────────────────── 29~32차시: 낮은 줄 넘기·높이를 한 칸씩 올리기 ─────────────────────────

  lessons.push(L(29, {
    title: '바닥에 놓인 줄부터 넘어 보기',
    objective: '줄 잡는 친구와 넘는 친구가 할 일을 알고, 바닥에 놓인 줄을 두 발로 뛰어넘을 수 있다.',
    illustration: ART('two children holding a soft paper rope near the floor while a third child jumps over it with knees bent, other children waiting in a line behind a mark', '줄을 넘어요', [
      { motif: 'tree', x: 70, y: 214 }, { motif: 'flower', x: 410, y: 230 }, { motif: 'star', x: 330, y: 92, s: 0.6 }]),
    safety: [LAND, '줄은 고무줄이 아닌 부드러운 끈을 쓰고, 걸리면 줄 잡는 친구가 바로 손을 놓아요.', '기다리는 친구는 표시선 뒤에 서요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"줄을 넘다가 발이 걸리면 어떻게 될까요?" 대답을 듣고, 줄 잡는 친구가 손을 바로 놓으면 넘어지지 않는다는 것을 선생님이 시범으로 보여 준다. "오늘은 바닥에 놓인 줄부터 시작해요."',
        student: '바닥에 놓인 줄 위를 선생님과 함께 한 번 걸어서 넘어 봐요.',
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 줄 잡는 친구, 넘는 친구', minutes: 12, tool: 'mindmap',
            teacher: '"줄 잡는 친구는 무엇을 해야 넘는 친구가 안전할까요?" 카드를 나눈 뒤 세 명씩 역할을 정한다. 줄을 갑자기 들어 올리는 카드를 두고 "넘는 친구 마음은 어떨까요?"라고 묻는다.',
            task: '줄 잡는 친구와 넘는 친구가 할 일을 나누고, 세 명이 역할을 정해요.',
            levels: CARD_LV,
            items: [
              { prompt: '줄 잡는 친구가 할 일과 넘는 친구가 할 일로 나누어 보세요.', toolOptions: { topic: '줄 넘기 역할', slots: ['줄 잡는 친구', '넘는 친구'], cards: ['줄을 느슨하게 잡아요', '발이 걸리면 바로 손을 놓아요', '두 발을 모으고 줄 앞에 서요', '무릎을 굽혀 두 발로 내려앉아요'] },
                target: { sort: { '줄 잡는 친구': ['줄을 느슨하게 잡아요', '발이 걸리면 바로 손을 놓아요'], '넘는 친구': ['두 발을 모으고 줄 앞에 서요', '무릎을 굽혀 두 발로 내려앉아요'] } }, difficulty: 0.15,
                hints: ['카드마다 손으로 줄을 다루는 일인지, 몸으로 뛰는 일인지 보세요.', '두 발을 모으고 뛰는 사람은 줄을 잡고 있을까요?', '줄 느슨하게 잡기·손 놓기는 줄 잡는 친구, 두 발 모으기·내려앉기는 넘는 친구 일이에요.'],
                levels: { challenge: { prompt: '여섯 가지 일을 줄 잡는 친구와 넘는 친구로 나누어 보세요.', toolOptions: { cards: ['줄을 느슨하게 잡아요', '발이 걸리면 바로 손을 놓아요', '두 발을 모으고 줄 앞에 서요', '무릎을 굽혀 두 발로 내려앉아요', '두 사람이 같은 높이로 잡아요', '넘은 뒤 옆으로 비켜 줄을 비워요'] },
                  target: { sort: { '줄 잡는 친구': ['줄을 느슨하게 잡아요', '발이 걸리면 바로 손을 놓아요', '두 사람이 같은 높이로 잡아요'], '넘는 친구': ['두 발을 모으고 줄 앞에 서요', '무릎을 굽혀 두 발로 내려앉아요', '넘은 뒤 옆으로 비켜 줄을 비워요'] } } } } },
              { prompt: '줄 잡는 친구가 하면 안 되는 일만 골라 보세요.', toolOptions: { mode: 'pick', basket: '하면 안 돼요', cards: ['넘는 순간 줄을 위로 휙 올려요', '줄을 팽팽하게 꽉 당겨 잡아요', '넘는 친구 발을 잘 봐요', '같은 높이로 잡아요'] },
                target: { pick: ['넘는 순간 줄을 위로 휙 올려요', '줄을 팽팽하게 꽉 당겨 잡아요'] }, difficulty: 0.15 },
              { prompt: '세 명이 역할을 정해요. 줄 잡는 두 친구는 "준비됐니?" 하고 묻고, 넘는 친구는 "응" 하고 대답한 뒤 넘어요.', free: true, talk: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 바닥 줄 넘기 차례', minutes: 14, tool: 'story',
            teacher: '"줄 앞에 서서부터 다음 친구에게 자리를 내줄 때까지 차례를 놓아 볼까요?" 카드를 놓은 뒤 바닥에 놓인 줄을 차례대로 넘는다. 넘은 뒤 줄 바로 너머에 서 있는 학생에게 "뒤 친구가 내려앉을 자리를 비워 줘요"라고 말한다.',
            task: '바닥 줄 넘기 차례를 놓고, 그 차례대로 모둠이 돌아가며 줄을 넘어요.',
            levels: CARD_LV,
            items: [
              { prompt: '바닥에 놓인 줄을 넘는 차례대로 카드를 놓아 보세요.', toolOptions: { cards: ['줄 너머에 두 발로 내려앉아요', '옆으로 비켜 표시선 뒤로 가요', '줄 앞에 두 발을 모으고 서요', '팔을 흔들며 위로 뛰어요'] },
                target: { order: ['줄 앞에 두 발을 모으고 서요', '팔을 흔들며 위로 뛰어요', '줄 너머에 두 발로 내려앉아요', '옆으로 비켜 표시선 뒤로 가요'] }, difficulty: 0.15,
                hints: ['뛰기 전에 줄 앞에서 무엇을 해야 할까요?', '내려앉는 것은 위로 뛴 다음이에요. 비키는 것은 언제일까요?', '두 발 모으고 서기 → 팔 흔들며 뛰기 → 두 발로 내려앉기 → 옆으로 비키기 차례예요.'] },
              { prompt: '줄 넘기를 하며 생긴 일에 맞는 다음 행동을 골라 보세요. 발이 줄에 걸렸어요.', toolOptions: { mode: 'pick', basket: '걸렸을 때', cards: ['멈추고 줄을 다시 놓아 달라고 말해요', '천천히 일어나 다시 줄 앞에 서요', '줄 잡는 친구 탓을 해요', '걸린 채로 계속 달려요'] },
                target: { pick: ['멈추고 줄을 다시 놓아 달라고 말해요', '천천히 일어나 다시 줄 앞에 서요'] }, difficulty: 0.15 },
              { prompt: '모둠이 돌아가며 바닥 줄을 세 번씩 넘어요. 다 넘은 친구는 줄 잡는 역할을 바꾸어 맡아요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"줄 잡는 친구가 어떻게 해 주어서 안전했나요?" 고마웠던 점을 한 사람씩 말하게 한다. 다음 시간에는 줄 높이를 한 칸씩 올려 본다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', basket: '줄 잡는 친구', cards: ['걸리면 바로 손을 놓아요', '넘을 때 줄을 휙 올려요', '줄을 느슨하게 잡아요'] }, prompt: '줄 잡는 친구가 할 일만 골라 보세요.', target: { pick: ['걸리면 바로 손을 놓아요', '줄을 느슨하게 잡아요'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '줄을 넘은 뒤에는 어떻게 할까요?', options: ['줄 너머에 그대로 서 있어요', '옆으로 비켜 표시선 뒤로 가요'], answer: 1, difficulty: 0.1, explain: '뒤 친구가 내려앉을 자리를 비워 줘야 부딪히지 않아요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '줄 넘기 역할',
      items: [
        { type: 'table', prompt: '역할마다 할 일을 하나씩 쓰세요.', columns: ['역할', '할 일'], cells: [['줄 잡는 친구', ''], ['넘는 친구', '']] },
        { type: 'choice', prompt: '발이 줄에 걸렸을 때 줄 잡는 친구가 할 일에 ○ 하세요.', options: ['바로 손을 놓아요', '줄을 더 당겨요', '모른 척해요'], answer: '바로 손을 놓아요' },
        { type: 'short', prompt: '줄 잡는 친구에게 고마웠던 점을 쓰세요.' },
        { type: 'draw', prompt: '세 명이 줄 넘기를 하는 모습을 그려 보세요.' },
      ],
      easy: {
        note: '걸리면 손을 놓아요. 넘으면 옆으로 비켜요.',
        items: [
          { type: 'choice', prompt: '줄에 발이 걸리면 줄 잡는 친구는?', options: ['손을 놓아요', '줄을 당겨요'], answer: '손을 놓아요' },
          { type: 'choice', prompt: '넘은 뒤에는?', options: ['옆으로 비켜요', '그 자리에 서요'], answer: '옆으로 비켜요' },
          { type: 'draw', prompt: '줄을 넘는 내 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '나누기와 차례 모두 맞는 칸에 초록 테두리가 생겨요.',
      base: '역할 카드 네 장을 나누고, 넘기 차례와 걸렸을 때 할 일을 골라요.',
      challenge: '역할 카드가 여섯 장이에요. 틀린 칸을 바로 알려 주지 않아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 줄 잡는 친구가 장난으로 줄을 올린다 → "준비됐니?" "응" 약속을 먼저 하게 한다. ② 넘은 뒤 줄 너머에 서 있어 뒤 친구와 부딪힌다 → 바닥에 비키는 길을 화살표로 붙인다. ③ 걸린 뒤 창피해한다 → 걸리는 것도 연습이라고 말하고 바로 다시 하게 한다.',
  }));

  lessons.push(L(30, {
    title: '줄 높이를 한 칸씩 올려요',
    objective: '줄 높이를 바닥, 발목, 정강이, 무릎 차례로 한 칸씩 올려야 하는 까닭을 알고, 내 높이를 골라 넘을 수 있다.',
    illustration: ART('a paper height ladder beside a rope showing floor, ankle, shin and knee marks with small footprints climbing step by step', '한 칸씩 올려요', [
      { motif: 'sun', x: 90, y: 64, s: 0.6 }, { motif: 'tree', x: 420, y: 214 }, { motif: 'leaf', x: 300, y: 232 }]),
    safety: [LAND, '줄 높이는 넘는 친구가 정하고, 줄 잡는 친구가 마음대로 올리지 않아요.', STOP],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"줄을 처음부터 허리 높이로 올리면 어떻게 될까요?" 손을 들게 한 뒤 대답을 듣는다. "계단을 한 칸씩 오르듯, 줄도 한 칸씩 올려요. 높을수록 잘하는 게 아니라 내가 안전하게 넘을 수 있는 높이가 내 높이예요."',
        student: '내 발목, 정강이 가운데, 무릎을 손으로 차례로 짚어 봐요.',
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 높이 사다리 차례 놓기', minutes: 13, tool: 'timer',
            teacher: '"가장 낮은 높이부터 놓아 볼까요?" 차례를 놓은 뒤 바닥 줄부터 한 칸씩 넘어 본다. 한 높이를 세 번 걸리지 않고 넘으면 다음 칸으로 간다고 약속한다.',
            task: '줄 높이 차례를 낮은 것부터 놓고, 바닥 줄부터 한 칸씩 올리며 넘어요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '줄 높이를 낮은 것부터 차례로 놓아요.', toolOptions: { title: '높이 사다리', cards: ['무릎 높이', '바닥', '정강이 가운데', '발목 높이'] }, target: { order: ['바닥', '발목 높이', '정강이 가운데', '무릎 높이'] }, difficulty: 0.15,
                levels: { easy: { state: { order: ['바닥', '정강이 가운데', '발목 높이', '무릎 높이'] } }, challenge: { prompt: '줄 높이를 낮은 것부터 차례로 놓아요. 칸이 하나 더 있어요.', toolOptions: { cards: ['무릎 높이', '바닥', '정강이 가운데', '발목 높이', '무릎 조금 아래'] }, target: { order: ['바닥', '발목 높이', '정강이 가운데', '무릎 조금 아래', '무릎 높이'] } } },
                hints: ['내 몸에서 손으로 짚어 보세요. 발목과 무릎 가운데 어디가 더 낮을까요?', '정강이 가운데는 발목과 무릎 사이에 있어요.', '바닥 → 발목 → 정강이 가운데 → 무릎 차례예요.'] },
              { prompt: '다음 칸으로 올리기 전에 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['지금 높이를 세 번 걸리지 않고 넘었어요', '세 번 모두 두 발로 내려앉았어요', '내가 올려 달라고 말했어요'] }, target: { safety: true }, difficulty: 0.05 },
              { prompt: '바닥 줄부터 시작해, 세 번 걸리지 않고 넘으면 한 칸 올려 달라고 말해요. 짝은 내려앉는 모습을 봐 줘요.', free: true, talk: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 더 높이 하자는 친구에게', minutes: 13, tool: 'emotion',
            teacher: '"친구가 \'더 높이 하자, 허리까지!\' 하면 어떻게 할까요?" 함께 따져 본 뒤, 높이를 고르는 사람은 넘는 친구라는 약속을 다시 말한다. 마음 크기는 솔직하게 고르게 한다.',
            task: '높이를 올리자는 친구에게 어떻게 할지 고르고, 높이마다 드는 마음을 골라요.',
            levels: { easy: { live: true, instant: true, steps: 3 }, base: {}, challenge: {} },
            items: [
              { prompt: '하준이가 발목 높이를 겨우 넘었는데, 친구가 "바로 허리 높이로 하자!" 해요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '하준', situation: '하준이는 발목 높이를 방금 처음 넘었어요. 친구가 줄을 허리까지 올리려고 해요.', choices: [
                { id: 'jump', text: '허리 높이로 올려 바로 넘어요', result: '하준이 발이 줄에 걸려 앞으로 넘어졌어요.', mood: '아픔', why: '한 번에 너무 많이 올리면 어떻게 될까요?' },
                { id: 'step', text: '"한 칸씩 올릴래. 다음은 정강이 높이야" 하고 말해요', result: '하준이가 정강이 높이를 넘고 활짝 웃었어요.', mood: '뿌듯함' }] }, target: { choice: 'step' }, difficulty: 0.15 },
              { prompt: '높이마다 드는 마음 카드를 놓아 보세요.', toolOptions: { cards: ['편안함', '조마조마함', '뿌듯함'], slots: [{ id: 's1', label: '바닥에 놓인 줄을 넘어요' }, { id: 's2', label: '처음 올린 무릎 높이 줄 앞에 섰어요' }, { id: 's3', label: '걸리기만 하던 높이를 드디어 넘었어요' }] },
                target: { match: { s1: '편안함', s2: '조마조마함', s3: '뿌듯함' } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['편안함', '조마조마함', '뿌듯함', '심심함'] } } } },
              { prompt: '지금 내 높이를 넘을 때, 나는 얼마나 자신 있나요? 내 마음대로 골라요.', toolOptions: { mode: 'scale', situation: '오늘 한 칸씩 올려 넘은 높이를 떠올려요.', feeling: '자신감', steps: 5, after: '솔직하게 골랐어요. 지금 내 높이를 짝에게 말해 줘요.' }, target: { level: 'any' }, difficulty: 0.05 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 나는 어느 높이까지 넘었나요?" 손으로 그 높이를 짚게 한다. 높이가 친구마다 다른 것이 당연하다고 말하고, 다음 시간에는 높이를 올려도 되는 때를 더 알아본다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'timer', options: { title: '높이 사다리', cards: ['정강이 가운데', '바닥', '발목 높이'] }, prompt: '세 높이를 낮은 것부터 차례로 놓아 보세요.', target: { order: ['바닥', '발목 높이', '정강이 가운데'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '줄 높이를 정하는 사람은 누구일까요?', options: ['넘는 친구', '줄 잡는 친구'], answer: 0, difficulty: 0.1, explain: '넘는 친구가 안전하게 넘을 수 있는 높이를 스스로 말해요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '높이 사다리',
      items: [
        { type: 'table', prompt: '높이 사다리를 낮은 것부터 쓰세요.', columns: ['칸', '높이'], cells: [['1', '바닥'], ['2', ''], ['3', ''], ['4', '']] },
        { type: 'short', prompt: '오늘 내가 넘은 가장 높은 칸을 쓰세요.' },
        { type: 'choice', prompt: '높이를 한 칸 올려도 되는 때에 ○ 하세요.', options: ['세 번 걸리지 않고 넘었을 때', '친구가 올리라고 할 때'], answer: '세 번 걸리지 않고 넘었을 때' },
        { type: 'draw', prompt: '내 높이의 줄을 넘는 모습을 그려 보세요.' },
      ],
      easy: {
        note: '계단처럼 한 칸씩 올려요.',
        items: [
          { type: 'choice', prompt: '더 낮은 높이에 ○ 하세요.', options: ['발목', '무릎'], answer: '발목' },
          { type: 'short', prompt: '오늘 넘은 높이를 쓰세요.' },
          { type: 'draw', prompt: '줄을 넘는 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '높이 카드는 두 장만 바꾸면 돼요. 마음 크기는 세 칸에서 골라요.',
      base: '네 높이를 차례로 놓고, 올리기 전 점검과 마음 고르기를 해요.',
      challenge: '높이 칸이 다섯 개예요. 마음 카드도 하나 더 있어 골라내야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 높을수록 잘하는 것이라 여겨 칸을 건너뛴다 → "내 높이"라는 말을 쓰고, 세 번 성공 약속을 지키게 한다. ② 줄 잡는 친구가 높이를 마음대로 올린다 → 높이는 넘는 친구가 말한다는 약속을 줄에 이름표로 붙인다. ③ 낮은 칸에 머무르는 친구를 놀린다 → 높이는 친구마다 다르다는 것을 칠판에 적어 둔다.',
  }));

  lessons.push(L(31, {
    title: '언제 올리고 언제 멈출까?',
    objective: '줄 높이를 올려도 되는 신호와 멈추어야 하는 신호를 가르고, 높이가 달라지는 줄 길을 규칙에 맞게 넘을 수 있다.',
    illustration: ART('a path of three paper ropes at different heights on the floor, a green go sign and a red stop sign held by smiling paper hands', '올릴까? 멈출까?', [
      { motif: 'tree', x: 70, y: 214 }, { motif: 'flower', x: 410, y: 230 }, { motif: 'cloud', x: 300, y: 80, s: 0.6 }]),
    safety: [LAND, STOP, '줄 길에서는 앞 친구가 마지막 줄을 넘은 뒤 출발해요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"지난 시간에 높이를 한 칸 올릴 때 무엇을 확인했나요?" 세 번 성공, 두 발 내려앉기를 다시 떠올린다. "올리면 안 되는 때도 있어요. 다리가 아프거나 무서울 때예요. 그때는 멈추거나 한 칸 내려도 돼요."',
        student: '지난 시간에 넘은 내 높이를 손으로 짚어 보여 줘요.',
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 올려도 되는 신호, 멈출 신호', minutes: 12, tool: 'mindmap',
            teacher: '"다리가 후들거리는데 친구들이 모두 무릎 높이를 넘어요. 나도 올려야 할까요?" 카드를 나눈 뒤 "멈추기나 내리기도 잘하는 거예요"라고 말한다.',
            task: '높이를 올려도 되는 신호와 멈추거나 내릴 신호를 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '높이를 올려도 되는 신호와 멈추거나 내릴 신호로 나누어 보세요.', toolOptions: { topic: '높이 신호', slots: ['올려도 돼요', '멈추거나 내려요'], cards: ['세 번 모두 걸리지 않았어요', '다리가 후들거려요', '두 발로 사뿐히 내려앉았어요', '두 번 연달아 넘어졌어요'] },
                target: { sort: { '올려도 돼요': ['세 번 모두 걸리지 않았어요', '두 발로 사뿐히 내려앉았어요'], '멈추거나 내려요': ['다리가 후들거려요', '두 번 연달아 넘어졌어요'] } }, difficulty: 0.15,
                hints: ['카드마다 내 몸이 편안한지, 힘든지 떠올려 보세요.', '넘어지거나 다리가 떨릴 때 높이를 올리면 어떨까요?', '세 번 성공·사뿐한 내려앉기는 올려도 되고, 후들거림·연달아 넘어짐은 멈추거나 내려요.'],
                levels: { challenge: { prompt: '여섯 신호를 올려도 되는 것과 멈추거나 내릴 것으로 나누어 보세요.', toolOptions: { cards: ['세 번 모두 걸리지 않았어요', '다리가 후들거려요', '두 발로 사뿐히 내려앉았어요', '두 번 연달아 넘어졌어요', '친구들이 다 높이 넘어서 나도 해야 할 것 같아요', '숨이 고르고 몸이 가뿐해요'] },
                  target: { sort: { '올려도 돼요': ['세 번 모두 걸리지 않았어요', '두 발로 사뿐히 내려앉았어요', '숨이 고르고 몸이 가뿐해요'], '멈추거나 내려요': ['다리가 후들거려요', '두 번 연달아 넘어졌어요', '친구들이 다 높이 넘어서 나도 해야 할 것 같아요'] } } } } },
              { prompt: '높이를 한 칸 내리고 싶을 때 할 말만 골라 보세요.', toolOptions: { mode: 'pick', basket: '이렇게 말해요', cards: ['한 칸만 내려 줄래?', '조금 무서워서 발목 높이로 할게', '나는 못해, 안 할래', '줄을 확 치워 버려'] },
                target: { pick: ['한 칸만 내려 줄래?', '조금 무서워서 발목 높이로 할게'] }, difficulty: 0.15 },
              { prompt: '짝에게 지금 내 몸 신호를 말하고, 다음에 올릴지 그대로 할지 내릴지 정해 말해요.', free: true, talk: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 높이가 바뀌는 줄 길 넘기', minutes: 14, tool: 'pattern',
            teacher: '"줄 세 개를 낮게, 낮게, 높게 놓았어요. 다음에는 어떻게 놓일까요?" 빈칸을 채운 뒤 바닥에 실제로 그 줄 길을 놓고 넘는다. 높은 줄 앞에서 멈칫하는 학생에게 "그 줄은 바닥에 내려놓고 넘어도 돼요"라고 말한다.',
            task: '줄 길의 높이 규칙을 찾아 빈칸을 채우고, 그 줄 길을 차례로 넘어요.',
            levels: { easy: { perRow: 4 }, base: {}, challenge: { revealAfterCheck: true } },
            items: [
              { prompt: '\'낮게, 높게\'가 되풀이되는 줄 길이에요. 빈칸을 채워요.', toolOptions: { seq: ['낮게', '높게', null, '높게', '낮게', null] }, target: { fill: ['낮게', '높게'] }, difficulty: 0.1,
                levels: { easy: { toolOptions: { perRow: 2 } } } },
              { prompt: '\'낮게, 낮게, 높게\'가 되풀이되는 줄 길이에요. 빈칸을 채워요.', toolOptions: { seq: ['낮게', '낮게', '높게', null, '낮게', '높게', '낮게', null, null] }, target: { fill: ['낮게', '낮게', '높게'] }, difficulty: 0.2,
                levels: { easy: { toolOptions: { perRow: 3 } } } },
              { prompt: '\'바닥, 낮게, 높게\'가 되풀이되는 줄 길이에요. 빈칸을 채워요.', toolOptions: { seq: ['바닥', '낮게', '높게', '바닥', null, '높게', null, '낮게', null] }, target: { fill: ['낮게', '바닥', '높게'] }, difficulty: 0.25,
                levels: { easy: { toolOptions: { perRow: 3 } } } },
              { prompt: '채운 줄 길 하나를 바닥에 놓고 모둠이 차례로 넘어요. 높은 줄이 무서우면 그 줄만 바닥에 내려 달라고 말해요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 멈추거나 한 칸 내린 친구가 있나요? 그것도 내 몸을 잘 살핀 거예요." 손을 든 친구에게 손뼉을 쳐 준다. 다음 시간에는 우리 모둠 줄 길을 직접 꾸민다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '높이 신호', slots: ['올려도 돼요', '멈추거나 내려요'], cards: ['무릎이 아파요', '세 번 다 가뿐히 넘었어요'] }, prompt: '두 신호를 올려도 되는 것과 멈추거나 내릴 것으로 나누어 보세요.', target: { sort: { '올려도 돼요': ['세 번 다 가뿐히 넘었어요'], '멈추거나 내려요': ['무릎이 아파요'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '친구들이 모두 높은 줄을 넘어요. 나는 다리가 떨려요. 어떻게 할까요?', options: ['따라서 높이 넘어요', '내 높이에서 하거나 한 칸 내려요'], answer: 1, difficulty: 0.1, explain: '높이는 친구마다 달라요. 내 몸 신호를 보고 정해요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '올릴까, 멈출까?',
      items: [
        { type: 'table', prompt: '신호마다 어떻게 할지 쓰세요(올려요/멈춰요).', columns: ['몸 신호', '어떻게 할까'], cells: [['세 번 모두 성공했어요', ''], ['다리가 후들거려요', ''], ['연달아 넘어졌어요', '']] },
        { type: 'figure', prompt: '줄 길의 빈칸에 들어갈 높이를 쓰세요.', tool: 'pattern', figures: [{ options: { seq: ['낮게', '높게', '낮게', '높게', null, null] }, caption: '빈칸: ___, ___' }], answer: '낮게, 높게' },
        { type: 'short', prompt: '높이를 내리고 싶을 때 친구에게 할 말을 쓰세요.' },
        { type: 'check', prompt: '오늘 해낸 것에 ✓ 하세요.', options: ['몸 신호를 살폈어요', '줄 길을 넘었어요', '높이를 스스로 정했어요'] },
      ],
      easy: {
        note: '아프거나 떨리면 멈추거나 내려도 돼요.',
        items: [
          { type: 'choice', prompt: '다리가 아플 때는?', options: ['멈추거나 내려요', '더 올려요'], answer: '멈추거나 내려요' },
          { type: 'short', prompt: '내리고 싶을 때 할 말을 쓰세요.' },
          { type: 'draw', prompt: '줄 길을 넘는 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 줄 길은 묶음마다 한 줄씩 보여요.',
      base: '신호 네 장을 나누고, 두세 칸 묶음 줄 길을 채워요.',
      challenge: '신호 카드가 여섯 장이고 "친구들이 다 해서" 같은 헷갈리는 카드가 있어요. 확인 뒤에만 정답이 보여요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 멈추면 진 것이라 여긴다 → 멈추고 내린 친구를 칭찬해 내 몸 살피기가 잘한 일임을 보여 준다. ② 친구를 따라 칸을 건너뛴다 → "친구가 해서"는 올릴 신호가 아니라는 카드를 짚는다. ③ 줄 길에서 앞 친구를 바짝 따라간다 → 마지막 줄을 넘은 뒤 출발하는 약속을 지키게 한다.',
  }));

  lessons.push(L(32, {
    title: '우리 모둠 줄 넘기 길 꾸미기',
    objective: '모둠 친구들의 높이를 생각해 줄 넘기 길을 꾸미고, 꾸민 길을 안전하게 넘을 수 있다.',
    illustration: ART('a group of children placing paper ropes and hoops on the floor to design a jumping course, with a small paper map of the course in front', '줄 넘기 길을 꾸며요', [
      { motif: 'star', x: 120, y: 92, s: 0.6 }, { motif: 'tree', x: 420, y: 214 }, { motif: 'flower', x: 70, y: 232 }]),
    safety: [LAND, '줄과 줄 사이는 세 걸음 넘게 띄워 내려앉을 자리를 남겨요.', '길을 꾸밀 때는 걸어서 줄을 옮겨요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"우리 모둠 친구들의 높이는 모두 같을까요?" 지난 시간 높이를 떠올리게 한다. "모두가 넘을 수 있으려면 높이를 고를 수 있는 줄 길이 좋아요. 줄과 줄 사이도 넉넉히 띄워야 해요."',
        student: '모둠 친구들에게 지난 시간 넘은 내 높이를 한 사람씩 말해요.',
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 줄 넘기 길 그림 꾸미기', minutes: 14, tool: 'collage',
            teacher: '"긴 막대는 줄, 동그라미는 내려앉는 후프, 별은 도착이에요." 판에 길을 꾸민 뒤 실제 강당에 놓는다. 줄을 너무 붙인 모둠에게 "줄을 넘고 내려앉을 자리가 있나요?"라고 묻는다.',
            task: '줄·후프·도착 별로 모둠 줄 넘기 길을 꾸미고, 꾸민 길을 강당에 놓아요.',
            levels: {
              easy: { shapes: ['rect', 'circle', 'star'], colors: ['빨강', '파랑', '노랑'], sizes: ['m'] },
              base: { shapes: ['rect', 'circle', 'star', 'triangle'], colors: ['빨강', '파랑', '노랑', '초록'] },
              challenge: {},
            },
            items: [
              { prompt: '줄 세 개와 도착 별 하나가 있는 줄 넘기 길을 꾸며 보세요.', target: { has: [{ shape: 'rect', n: 3 }, { shape: 'star', n: 1 }] }, difficulty: 0.15,
                levels: { challenge: { prompt: '줄 네 개, 내려앉는 후프 두 개, 도착 별 하나가 있는 줄 넘기 길을 꾸며 보세요.', target: { has: [{ shape: 'rect', n: 4 }, { shape: 'circle', n: 2 }, { shape: 'star', n: 1 }] } } },
                hints: ['긴 막대가 줄이에요. 판에 몇 개 있는지 세어 보세요.', '도착 별은 하나만 있어야 해요. 별이 몇 개인지 보세요.', '긴 막대 세 개를 띄워 놓고, 끝에 별 하나를 붙여요.'] },
              { prompt: '빨간 줄과 파란 후프가 \'줄, 후프\' 차례로 세 번 되풀이되는 줄 넘기 길을 꾸며 보세요.', target: { repeat: { unit: 2, times: 3 }, has: [{ shape: 'rect', color: '빨강', min: 3 }, { shape: 'circle', color: '파랑', min: 3 }] }, difficulty: 0.25,
                levels: { easy: { prompt: '빨간 줄과 파란 후프가 \'줄, 후프\' 차례로 두 번 되풀이되는 줄 넘기 길을 꾸며 보세요.', target: { repeat: { unit: 2, times: 2 }, has: [{ shape: 'rect', color: '빨강', min: 2 }, { shape: 'circle', color: '파랑', min: 2 }] } } },
                hints: ['줄 다음에 후프, 다시 줄 다음에 후프예요. 한 줄로 이어 놓아 보세요.', '같은 묶음이 몇 번 되풀이되었는지 세어 보세요.', '줄·후프 묶음을 왼쪽부터 세 번 이어 놓아요.'] },
              { prompt: '우리 모둠 줄 넘기 길을 꾸미고, 해낸 것을 모두 표시해요.', target: { selfCheck: ['줄과 줄 사이를 넉넉히 띄웠어요', '도착 자리를 정했어요', '모둠 친구들이 고를 수 있게 높이를 정했어요'], minPieces: 4 }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 꾸민 길을 넘고 나누기', minutes: 12, tool: 'mindmap',
            teacher: '"꾸민 길을 넘어 보니 바꾸고 싶은 곳이 있나요?" 모둠이 길을 넘은 뒤 좋았던 점과 고칠 점을 나눈다. "줄이 너무 붙어 있었다"처럼 몸으로 느낀 것을 말하게 한다.',
            task: '꾸민 길을 모둠이 넘어 본 뒤, 좋았던 점과 고칠 점을 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '꾸민 길을 넘은 뒤 나온 말을 좋았던 점과 고칠 점으로 나누어 보세요.', toolOptions: { topic: '우리 줄 길', slots: ['좋았어요', '고쳐요'], cards: ['줄 사이가 넓어 내려앉기 편했어요', '두 줄이 너무 붙어 있었어요', '높이를 골라 넘을 수 있었어요', '도착 별이 줄 바로 뒤라 부딪힐 뻔했어요'] },
                target: { sort: { '좋았어요': ['줄 사이가 넓어 내려앉기 편했어요', '높이를 골라 넘을 수 있었어요'], '고쳐요': ['두 줄이 너무 붙어 있었어요', '도착 별이 줄 바로 뒤라 부딪힐 뻔했어요'] } }, difficulty: 0.15,
                hints: ['카드마다 넘을 때 편했는지, 위험했는지 떠올려 보세요.', '부딪힐 뻔했거나 너무 붙은 것은 어느 칸일까요?', '넓은 사이·높이 고르기는 좋았고, 붙은 줄·줄 바로 뒤 도착은 고쳐요.'] },
              { prompt: '줄 길을 고치는 방법으로 알맞은 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '이렇게 고쳐요', cards: ['붙은 줄을 세 걸음 넘게 떨어뜨려요', '도착 별을 줄에서 멀리 옮겨요', '줄을 모두 허리 높이로 올려요', '줄 사이를 더 좁혀요'] },
                target: { pick: ['붙은 줄을 세 걸음 넘게 떨어뜨려요', '도착 별을 줄에서 멀리 옮겨요'] }, difficulty: 0.15 },
              { prompt: '고친 길을 모둠이 한 번 더 넘어요. 넘은 뒤 한 사람씩 "고쳐서 이게 좋아졌어"를 말해요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"다른 모둠 길에서 따라 하고 싶은 점이 있었나요?" 모둠마다 하나씩 말하게 한다. 다음 시간에는 내가 넘은 높이를 기록해 본다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'collage', options: { shapes: ['rect', 'star'], colors: ['빨강', '노랑'] }, prompt: '줄 두 개와 도착 별 하나로 줄 넘기 길을 꾸며 보세요.', target: { has: [{ shape: 'rect', n: 2 }, { shape: 'star', n: 1 }] }, difficulty: 0.1 },
          { type: 'choice', prompt: '줄과 줄 사이를 넉넉히 띄우는 까닭은?', options: ['내려앉을 자리가 있어야 해서', '길이 짧아 보여서'], answer: 0, difficulty: 0.1, explain: '줄을 넘고 내려앉을 자리가 있어야 다음 줄에 걸리지 않아요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '우리 줄 넘기 길',
      items: [
        { type: 'draw', prompt: '우리 모둠이 꾸민 줄 넘기 길을 그려 보세요.' },
        { type: 'short', prompt: '꾸민 길에서 좋았던 점을 쓰세요.' },
        { type: 'short', prompt: '꾸민 길에서 고친 점을 쓰세요.' },
        { type: 'choice', prompt: '줄 길을 고치는 알맞은 방법에 ○ 하세요.', options: ['줄 사이를 넓혀요', '줄을 모두 높여요', '줄을 붙여요'], answer: '줄 사이를 넓혀요' },
      ],
      easy: {
        note: '줄 사이는 넉넉히, 도착은 멀리!',
        items: [
          { type: 'choice', prompt: '줄 사이는 어떻게 놓나요?', options: ['넉넉히 띄워요', '딱 붙여요'], answer: '넉넉히 띄워요' },
          { type: 'short', prompt: '좋았던 점 하나를 쓰세요.' },
          { type: 'draw', prompt: '줄 넘기 길을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '모양·색·크기가 적고, 묶음은 두 번만 되풀이하면 돼요. 나누기는 맞는 칸에 초록 테두리가 생겨요.',
      base: '줄 세 개와 별로 길을 꾸미고, 묶음이 세 번 되풀이되는 길을 만들어요.',
      challenge: '줄·후프·별 개수를 모두 맞추고, 모든 모양과 색에서 골라요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 줄을 좁게 붙여 놓는다 → 실제로 넘어 보고 내려앉을 자리가 있는지 몸으로 확인하게 한다. ② 모두 높은 줄만 놓는다 → 모둠 친구 높이를 떠올리게 하고 "바닥 줄도 하나" 넣게 한다. ③ 꾸미기만 하고 넘어 보지 않는다 → 꾸미기 시간을 정해 두고 넘어 보는 시간을 꼭 남긴다.',
  }));

  // ───────────────────────── 33~36차시: 넘은 높이 기록·무섭지 않게 뛰기·뛰기 탐험 돌아보기 ─────────────────────────

  lessons.push(L(33, {
    title: '내가 넘은 높이 기록하기',
    objective: '줄 높이마다 다섯 번씩 넘어 본 횟수를 기록하고, 기록을 보고 다음 목표 높이를 정할 수 있다.',
    illustration: ART('a paper record chart with four rope heights and tally marks beside each, a child jumping a low rope while a partner holds up fingers to count', '몇 번 넘었나?', [
      { motif: 'tree', x: 70, y: 214 }, { motif: 'star', x: 330, y: 90, s: 0.6 }, { motif: 'flower', x: 410, y: 230 }]),
    safety: [LAND, '세는 친구는 줄 잡는 친구 옆에 서고, 내려앉는 자리에 들어가지 않아요.', STOP],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"줄 높이마다 다섯 번씩 넘어 보고, 걸리지 않고 넘은 횟수를 세어 볼 거예요." 칠판에 높이 네 칸 기록표를 그린다. "다섯 번 가운데 몇 번 넘었는지 적어요. 적은 수가 작아도 괜찮아요. 오늘의 내 기록이에요."',
        student: '선생님이 다섯 번 넘는 동안 걸리지 않은 횟수를 손가락으로 함께 세어요.',
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 높이마다 넘은 횟수 적기', minutes: 15, tool: 'timer',
            teacher: '"바닥 줄부터 다섯 번씩 넘어요. 세는 친구는 걸리지 않은 횟수만 손가락으로 세어요." 내 높이가 넘었다고 느끼면 그 칸에서 멈추어도 된다고 말한다. 다 못 한 칸은 0으로 적게 한다.',
            task: '높이마다 다섯 번씩 넘어 보고, 짝이 센 성공 횟수를 높이 칸에 적어요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '높이마다 다섯 번씩 넘고, 걸리지 않고 넘은 횟수를 칸에 적어요. 해 보지 않은 높이는 0으로 적어요.', toolOptions: { title: '높이별 성공 횟수', fields: ['바닥', '발목', '정강이', '무릎'], unit: '번' }, target: { records: true }, difficulty: 0.1,
                levels: { easy: { prompt: '바닥과 발목 높이에서 다섯 번씩 넘고, 걸리지 않고 넘은 횟수를 적어요.', toolOptions: { fields: ['바닥', '발목'] } } } },
              { prompt: '하준이의 기록이에요: 바닥 5번, 발목 5번, 정강이 3번, 무릎 1번. 칸에 그대로 옮겨 적어요.', toolOptions: { title: '하준이의 높이 기록', fields: ['바닥', '발목', '정강이', '무릎'], unit: '번' }, target: { records: [5, 5, 3, 1] }, difficulty: 0.2,
                levels: { easy: { prompt: '하준이의 기록이에요: 바닥 5번, 발목 4번. 칸에 그대로 옮겨 적어요.', toolOptions: { fields: ['바닥', '발목'] }, target: { records: [5, 4] } } } },
              { prompt: '짝과 역할을 바꾸어요. 한 사람은 다섯 번 넘고, 한 사람은 걸리지 않은 횟수를 손가락으로 세어 말해 줘요.', free: true, talk: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 기록을 보고 다음 목표 정하기', minutes: 11, tool: 'mindmap',
            teacher: '"발목 줄을 다섯 번 다 넘었다면 다음에는 어떻게 할까요? 무릎 줄을 한 번만 넘었다면요?" 기록마다 그대로 연습할지, 한 칸 올릴지 나누게 한다. "목표는 친구가 아니라 내 기록을 보고 정해요."',
            task: '기록 카드를 지금 높이에서 더 연습할 것과 한 칸 올려 볼 것으로 나누고, 내 다음 목표를 정해요.',
            levels: CARD_LV,
            items: [
              { prompt: '기록을 보고 지금 높이에서 더 연습할 것과 한 칸 올려 볼 것으로 나누어 보세요.', toolOptions: { topic: '다음 목표', slots: ['지금 높이 더 연습', '한 칸 올려 보기'], cards: ['발목 줄을 다섯 번 다 넘었어요', '정강이 줄을 두 번 넘었어요', '바닥 줄을 다섯 번 다 넘었어요', '무릎 줄을 한 번 넘었어요'] },
                target: { sort: { '지금 높이 더 연습': ['정강이 줄을 두 번 넘었어요', '무릎 줄을 한 번 넘었어요'], '한 칸 올려 보기': ['발목 줄을 다섯 번 다 넘었어요', '바닥 줄을 다섯 번 다 넘었어요'] } }, difficulty: 0.2,
                hints: ['다섯 번 가운데 몇 번 넘었는지 카드마다 보세요.', '다섯 번을 다 넘었으면 그 높이가 편해진 걸까요?', '다섯 번 다 넘은 바닥·발목은 한 칸 올리고, 두 번·한 번 넘은 정강이·무릎은 더 연습해요.'] },
              { prompt: '다음 목표를 정할 때 알맞은 생각만 골라 보세요.', toolOptions: { mode: 'pick', basket: '목표 정하기', cards: ['내 기록을 보고 정해요', '한 칸씩 올려요', '짝보다 높게 정해요', '가장 높은 칸으로 정해요'] },
                target: { pick: ['내 기록을 보고 정해요', '한 칸씩 올려요'] }, difficulty: 0.15,
                levels: { challenge: { prompt: '다음 목표를 정할 때 알맞은 생각만 골라 보세요. 카드가 더 많아요.', toolOptions: { cards: ['내 기록을 보고 정해요', '한 칸씩 올려요', '짝보다 높게 정해요', '가장 높은 칸으로 정해요', '몸이 아프면 목표를 낮추어도 돼요', '친구들이 고른 목표를 따라 해요'] },
                  target: { pick: ['내 기록을 보고 정해요', '한 칸씩 올려요', '몸이 아프면 목표를 낮추어도 돼요'] } } } },
              { prompt: '짝에게 내 기록을 보여 주고, 다음 시간 목표 높이와 그 까닭을 말해요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 정한 다음 목표를 손으로 그 높이를 짚으며 말해 볼까요?" 몇 명이 말하게 한다. 다음 시간에는 뛰기가 무서울 때 어떻게 말하면 좋을지 알아본다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'timer', options: { title: '서아의 높이 기록', fields: ['바닥', '발목', '정강이'], unit: '번' }, prompt: '서아의 기록이에요: 바닥 5번, 발목 2번, 정강이 0번. 칸에 그대로 옮겨 적어 보세요.', target: { records: [5, 2, 0] }, difficulty: 0.15 },
          { type: 'choice', prompt: '발목 줄을 다섯 번 가운데 한 번 넘었어요. 다음 목표로 알맞은 것은?', options: ['발목 줄을 더 연습해요', '무릎 줄로 올려요'], answer: 0, difficulty: 0.15, explain: '아직 편하지 않은 높이는 더 연습한 뒤 올려요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '내가 넘은 높이',
      items: [
        { type: 'table', prompt: '높이마다 다섯 번 가운데 넘은 횟수를 쓰세요.', columns: ['높이', '넘은 횟수(번)'], cells: [['바닥', ''], ['발목', ''], ['정강이', ''], ['무릎', '']] },
        { type: 'short', prompt: '다음 시간 내 목표 높이를 쓰세요.' },
        { type: 'choice', prompt: '목표를 정할 때 알맞은 생각에 ○ 하세요.', options: ['내 기록을 보고 정해요', '짝보다 높게 정해요'], answer: '내 기록을 보고 정해요' },
        { type: 'draw', prompt: '목표 높이를 넘는 내 모습을 그려 보세요.' },
      ],
      easy: {
        note: '다섯 번 다 넘으면 한 칸 올려 봐요.',
        items: [
          { type: 'short', prompt: '발목 줄은 몇 번 넘었는지 쓰세요.' },
          { type: 'choice', prompt: '목표는 누구 기록을 보고 정하나요?', options: ['내 기록', '친구 기록'], answer: '내 기록' },
          { type: 'draw', prompt: '줄을 넘는 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '바닥과 발목 두 칸만 적어요. 나누기는 맞는 칸에 초록 테두리가 생겨요.',
      base: '네 높이 기록을 적고 옮겨 적은 뒤, 기록 카드를 나누어 목표를 정해요.',
      challenge: '목표 정하기 카드가 여섯 장이에요. "몸이 아프면 낮추기"까지 찾아야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 걸린 횟수와 넘은 횟수를 헷갈린다 → 세는 친구는 넘은 횟수만 손가락을 편다고 약속한다. ② 기록이 낮아 적기를 꺼린다 → 오늘 기록은 다음 목표를 정하는 데 쓰는 것이라고 말한다. ③ 짝보다 높게 목표를 정한다 → 내 기록 칸을 손가락으로 짚으며 정하게 한다.',
  }));

  lessons.push(L(34, {
    title: '무서울 때 "무서워"라고 말해도 돼요',
    objective: '뛰기가 무서울 때 그 마음을 말해도 된다는 것을 알고, 안심하려면 무엇이 필요한지 말할 수 있다.',
    illustration: ART('a child standing before a paper rope with a small worried cloud above, a friend and teacher offering a hand and a lower rope, warm colors', '무서워도 괜찮아', [
      { motif: 'sun', x: 90, y: 64, s: 0.6 }, { motif: 'tree', x: 420, y: 214 }, { motif: 'leaf', x: 300, y: 232 }]),
    safety: [LAND, STOP, '무섭다고 말한 친구에게 억지로 뛰라고 하지 않아요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"줄 앞에 섰는데 가슴이 콩닥콩닥 뛴 적이 있나요?" 선생님도 어릴 때 높은 곳에서 뛰는 게 무서웠다는 이야기를 들려준다. "무섭다고 말하면 부끄러운 걸까요?" 손을 들게 한 뒤, 무섭다는 말은 몸을 지키는 말이라고 짚는다.',
        student: '뛰기 전에 떨렸던 때가 있었는지 떠올려 고개를 끄덕이거나 저어요.',
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 무서운 마음을 말하면', minutes: 14, tool: 'emotion',
            teacher: '"서아가 무서운데 아무 말도 안 하고 뛰면 어떻게 될까요?" 고른 뒤 결과를 함께 읽는다. 무섭다고 말한 친구를 놀린 경험이 나오면 "그 말을 들은 친구 마음은요?"라고 묻는다.',
            task: '무서울 때 어떻게 할지 고르고, 뛰기 전·후에 드는 마음을 골라요.',
            levels: { easy: { live: true, instant: true, steps: 3 }, base: {}, challenge: {} },
            items: [
              { prompt: '서아는 무릎 높이 줄이 무서워요. 친구들이 "빨리 뛰어!" 해요. 서아는 어떻게 할까요?', toolOptions: { mode: 'branch', who: '서아', situation: '서아 차례인데 무릎 높이 줄 앞에서 다리가 떨려요. 뒤에서 친구들이 "빨리 뛰어!" 해요.', choices: [
                { id: 'silent', text: '아무 말 없이 꾹 참고 뛰어요', result: '서아 발이 줄에 걸려 무릎을 바닥에 찧었어요.', mood: '아픔', why: '무서운 마음을 말하지 않으면 어떻게 될까요?' },
                { id: 'say', text: '"조금 무서워. 한 칸 내려 줘" 하고 말해요', result: '친구들이 줄을 내려 주고, 서아는 사뿐히 넘었어요.', mood: '안심' },
                { id: 'run', text: '울면서 강당 밖으로 나가요', result: '선생님과 친구들이 서아를 찾느라 놀이가 멈췄어요.', mood: '속상함', why: '자리에서 말로 마음을 알릴 수 있을까요?' }] }, target: { choice: 'say' }, difficulty: 0.15 },
              { prompt: '줄 넘기를 하며 서아에게 생긴 일에 어울리는 마음 카드를 놓아 보세요.', toolOptions: { cards: ['안심', '두려움', '고마움'], slots: [{ id: 's1', label: '처음 보는 높은 줄 앞에 섰어요' }, { id: 's2', label: '선생님이 "낮은 줄부터 해도 돼" 하셨어요' }, { id: 's3', label: '짝이 "같이 해 보자" 하고 옆에 서 주었어요' }] },
                target: { match: { s1: '두려움', s2: '안심', s3: '고마움' } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['안심', '두려움', '고마움', '신남'] } } } },
              { prompt: '지금 줄 넘기를 떠올리면 나는 얼마나 무서운가요? 내 마음대로 골라요.', toolOptions: { mode: 'scale', situation: '내 목표 높이의 줄 앞에 서 있다고 떠올려요.', feeling: '두려움', steps: 5, after: '솔직하게 골랐어요. 무서운 만큼 말해도 괜찮아요.' }, target: { level: 'any' }, difficulty: 0.05 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 안심하려면 무엇이 필요할까', minutes: 12, tool: 'mindmap',
            teacher: '"무서울 때 무엇이 있으면 마음이 놓일까요?" 카드를 고른 뒤 실제로 그 방법(낮은 줄, 짝이 옆에 서기, 매트 깔기)을 써서 한 번씩 넘어 본다.',
            task: '무서울 때 마음을 놓이게 하는 것을 고르고, 친구가 무섭다고 할 때 해 줄 말을 고른 뒤 그 방법으로 넘어 봐요.',
            levels: CARD_LV,
            items: [
              { prompt: '뛰기가 무서울 때 마음이 놓이게 하는 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '안심이 돼요', cards: ['줄을 한 칸 낮추어요', '내려앉는 곳에 매트를 깔아요', '뒤에서 "빨리 해!" 하고 재촉해요', '눈을 감고 뛰어요'] },
                target: { pick: ['줄을 한 칸 낮추어요', '내려앉는 곳에 매트를 깔아요'] }, difficulty: 0.15,
                levels: { challenge: { prompt: '뛰기가 무서울 때 마음이 놓이게 하는 것만 골라 보세요. 카드가 더 많아요.', toolOptions: { cards: ['줄을 한 칸 낮추어요', '내려앉는 곳에 매트를 깔아요', '뒤에서 "빨리 해!" 하고 재촉해요', '눈을 감고 뛰어요', '친구가 다 보는 앞에서 혼자 해요', '숨을 크게 세 번 쉬어요'] },
                  target: { pick: ['줄을 한 칸 낮추어요', '내려앉는 곳에 매트를 깔아요', '숨을 크게 세 번 쉬어요'] } } } },
              { prompt: '친구가 "무서워"라고 말해요. 해 줄 말만 골라 보세요.', toolOptions: { mode: 'pick', basket: '해 줄 말', cards: ['말해 줘서 고마워', '낮은 줄부터 같이 하자', '겁쟁이네', '그것도 못 해?'] },
                target: { pick: ['말해 줘서 고마워', '낮은 줄부터 같이 하자'] }, difficulty: 0.1 },
              { prompt: '고른 방법 하나를 써서 줄을 넘어 봐요. 넘기 전에 짝에게 "나 지금 이만큼 무서워" 하고 손으로 크기를 보여 줘요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 무섭다고 말해 본 친구가 있나요? 말하고 나니 어땠나요?" 두세 명의 이야기를 듣는다. 다음 시간에는 마음 놓고 뛰는 방법을 더 찾아 연습한다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', basket: '무서울 때', cards: ['"무서워"라고 말해요', '꾹 참고 몰래 뛰어요', '줄을 낮추어 달라고 해요'] }, prompt: '무서울 때 할 일만 골라 보세요.', target: { pick: ['"무서워"라고 말해요', '줄을 낮추어 달라고 해요'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '"무서워"라고 말하는 것은 어떤 말일까요?', options: ['부끄러운 말', '내 몸을 지키는 말'], answer: 1, difficulty: 0.1, explain: '무섭다고 말하면 친구와 선생님이 도와줄 수 있어 다치지 않아요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '무서울 때 말해요',
      items: [
        { type: 'short', prompt: '뛰기가 무서웠던 때를 쓰세요.' },
        { type: 'short', prompt: '무서울 때 친구나 선생님께 할 말을 쓰세요.' },
        { type: 'check', prompt: '마음이 놓이게 하는 것에 ✓ 하세요.', options: ['줄 낮추기', '매트 깔기', '짝이 옆에 서기', '숨 크게 쉬기'] },
        { type: 'choice', prompt: '친구가 "무서워"라고 할 때 해 줄 말에 ○ 하세요.', options: ['말해 줘서 고마워', '겁쟁이네'], answer: '말해 줘서 고마워' },
      ],
      easy: {
        note: '"무서워"는 몸을 지키는 말이에요.',
        items: [
          { type: 'choice', prompt: '무서울 때는?', options: ['말해요', '꾹 참아요'], answer: '말해요' },
          { type: 'short', prompt: '무서울 때 할 말을 쓰세요.' },
          { type: 'draw', prompt: '무섭다고 말하는 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '마음 카드는 맞는 칸에 초록 테두리가 생기고, 마음 크기는 세 칸에서 골라요.',
      base: '무서울 때 할 일과 마음을 고르고, 안심 방법을 써서 넘어 봐요.',
      challenge: '안심 방법 카드가 여섯 장이고, 마음 카드가 하나 더 있어 골라내야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 무섭다고 말하면 진다고 여긴다 → 선생님 경험을 먼저 들려주고, 말한 친구에게 "말해 줘서 고마워"를 반 전체가 해 준다. ② "겁쟁이" 같은 말이 나온다 → 그 자리에서 멈추고 들은 친구 마음을 묻는다. ③ 무서움 크기를 친구를 따라 고른다 → 정답이 없다는 것을 다시 말한다.',
  }));

  lessons.push(L(35, {
    title: '마음 놓고 뛰는 연습하기',
    objective: '무서울 때 쓸 수 있는 방법을 차례대로 써 보고, 멀리 뛰기와 높이 뛰기를 섞은 뛰기 놀이를 만들어 할 수 있다.',
    illustration: ART('a child taking a deep breath before a low rope, then jumping with a friend beside, a paper sequence of hoops and ropes forming a playful jumping trail', '차근차근 뛰어요', [
      { motif: 'cloud', x: 330, y: 80, s: 0.6 }, { motif: 'tree', x: 70, y: 214 }, { motif: 'flower', x: 410, y: 230 }]),
    safety: [LAND, SPACE, '앞 친구가 길을 다 지난 뒤 출발해요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"지난 시간에 찾은 마음 놓이는 방법을 기억하나요?" 낮은 줄, 매트, 짝, 숨쉬기를 떠올린다. "오늘은 그 방법을 차례대로 써 보고, 내가 고른 뛰기 놀이를 만들어 볼 거예요."',
        student: '선생님과 함께 숨을 크게 세 번 들이쉬고 내쉬어요.',
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 무서울 때 쓰는 차례', minutes: 12, tool: 'story',
            teacher: '"무서울 때 무엇부터 할까요?" 차례를 놓은 뒤, 그 차례대로 한 사람씩 낮은 줄 앞에서 해 본다. 숨쉬기를 건너뛰는 학생에게 "숨을 쉬면 몸이 어떻게 되나요?"라고 묻는다.',
            task: '무서울 때 쓰는 방법을 차례로 놓고, 그 차례대로 줄 앞에서 해 봐요.',
            levels: CARD_LV,
            items: [
              { prompt: '뛰기가 무서울 때 하는 차례대로 카드를 놓아 보세요.', toolOptions: { cards: ['한 칸 낮춘 줄을 넘어요', '"조금 무서워"라고 말해요', '숨을 크게 세 번 쉬어요', '넘은 뒤 다시 해 볼지 정해요'] },
                target: { order: ['"조금 무서워"라고 말해요', '숨을 크게 세 번 쉬어요', '한 칸 낮춘 줄을 넘어요', '넘은 뒤 다시 해 볼지 정해요'] }, difficulty: 0.2,
                hints: ['도움을 받으려면 먼저 내 마음을 알려야 해요.', '줄을 넘기 전에 몸을 차분하게 하는 방법은 무엇일까요?', '말하기 → 숨쉬기 → 낮춘 줄 넘기 → 다시 해 볼지 정하기 차례예요.'],
                levels: { challenge: { prompt: '뛰기가 무서울 때 하는 차례대로 카드를 놓아 보세요. 카드가 더 많아요.', toolOptions: { cards: ['한 칸 낮춘 줄을 넘어요', '"조금 무서워"라고 말해요', '숨을 크게 세 번 쉬어요', '넘은 뒤 다시 해 볼지 정해요', '짝에게 옆에 서 달라고 해요'] },
                  target: { order: ['"조금 무서워"라고 말해요', '짝에게 옆에 서 달라고 해요', '숨을 크게 세 번 쉬어요', '한 칸 낮춘 줄을 넘어요', '넘은 뒤 다시 해 볼지 정해요'] } } } },
              { prompt: '멀리 뛰기 놀이와 높이 뛰기 놀이로 나누어 보세요.', toolOptions: { mode: 'sort', slots: ['멀리 뛰기 놀이', '높이 뛰기 놀이'], cards: ['돌다리 건너기', '줄 넘기', '개구리 뛰기', '풍선 치기'] },
                target: { sort: { '멀리 뛰기 놀이': ['돌다리 건너기', '개구리 뛰기'], '높이 뛰기 놀이': ['줄 넘기', '풍선 치기'] } }, difficulty: 0.15 },
              { prompt: '고른 차례대로 낮은 줄 앞에서 해 봐요. 짝은 옆에 서서 "천천히 해도 돼" 하고 말해 줘요.', free: true, talk: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 멀리·높이 섞은 뛰기 길 만들기', minutes: 14, tool: 'pattern',
            teacher: '"돌다리는 멀리, 줄은 높이 뛰어요. 둘을 섞어 되풀이되는 뛰기 길을 만들어 볼까요?" 만든 길을 바닥에 놓아 모둠이 넘는다. 무서운 높이가 있으면 그 칸만 바닥 줄로 바꿔도 된다고 말한다.',
            task: '멀리·높이 뛰기 칸이 되풀이되는 뛰기 길을 만들고, 그 길을 모둠이 차례로 뛰어요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '\'멀리, 높이\'가 되풀이되는 뛰기 길이에요. 빈칸을 채워요.', toolOptions: { seq: ['멀리', '높이', '멀리', null, '멀리', null] }, target: { fill: ['높이', '높이'] }, difficulty: 0.1 },
              { prompt: '멀리·높이를 써서 묶음이 되풀이되는 우리 모둠 뛰기 길을 만들어요.', toolOptions: { mode: 'make', palette: ['멀리', '높이'], length: 6 }, target: { rule: 'repeat', minRepeats: 2, uses: 2 }, difficulty: 0.2,
                hints: ['먼저 몇 칸을 한 묶음으로 정하고, 그 묶음을 똑같이 되풀이해요.', '첫 묶음과 다음 묶음을 칸마다 견주어 보세요. 다른 칸이 있나요?', '정한 묶음을 첫 칸부터 끝 칸까지 같은 차례로 되풀이해요. 묶음 칸 수와 쓸 낱말 수는 문제를 다시 읽고 맞추어요.'],
                levels: { challenge: { prompt: '멀리·높이·쉬기를 모두 써서, 세 칸 묶음이 되풀이되는 뛰기 길을 만들어요.', toolOptions: { palette: ['멀리', '높이', '쉬기'], length: 9 }, target: { rule: 'repeat', period: 3, minRepeats: 3, uses: 3 } } } },
              { prompt: '만든 뛰기 길을 바닥에 놓고 모둠이 차례로 뛰어요. 무서운 칸은 친구에게 말해 바닥 줄로 바꿔요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"무서울 때 쓰는 차례 가운데 오늘 나에게 가장 도움이 된 것은 무엇이었나요?" 한두 명이 말하게 한다. 다음 시간에는 뛰기 탐험 전체를 돌아본다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { cards: ['낮춘 줄을 넘어요', '숨을 크게 쉬어요', '"무서워"라고 말해요'] }, prompt: '무서울 때 하는 차례대로 세 카드를 놓아 보세요.', target: { order: ['"무서워"라고 말해요', '숨을 크게 쉬어요', '낮춘 줄을 넘어요'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '뛰기 길에서 한 칸이 너무 무서워요. 어떻게 할까요?', options: ['그 칸만 바닥 줄로 바꿔 달라고 해요', '눈을 감고 그냥 뛰어요'], answer: 0, difficulty: 0.1, explain: '무서운 칸은 낮추어 바꿔도 돼요. 눈을 감으면 다칠 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '마음 놓고 뛰기',
      items: [
        { type: 'table', prompt: '무서울 때 하는 차례를 쓰세요.', columns: ['차례', '하는 일'], cells: [['1', '"무서워"라고 말해요'], ['2', ''], ['3', ''], ['4', '다시 해 볼지 정해요']] },
        { type: 'figure', prompt: '뛰기 길의 빈칸에 들어갈 말을 쓰세요.', tool: 'pattern', figures: [{ options: { seq: ['멀리', '높이', '멀리', '높이', null, null] }, caption: '빈칸: ___, ___' }], answer: '멀리, 높이' },
        { type: 'short', prompt: '오늘 가장 도움이 된 방법을 쓰세요.' },
        { type: 'draw', prompt: '우리 모둠 뛰기 길을 그려 보세요.' },
      ],
      easy: {
        note: '말하고, 숨 쉬고, 낮추어 넘어요.',
        items: [
          { type: 'choice', prompt: '무서울 때 맨 먼저 할 일은?', options: ['"무서워"라고 말해요', '그냥 뛰어요'], answer: '"무서워"라고 말해요' },
          { type: 'choice', prompt: '돌다리 건너기는 어떤 뛰기인가요?', options: ['멀리 뛰기', '높이 뛰기'], answer: '멀리 뛰기' },
          { type: 'draw', prompt: '뛰는 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '차례와 나누기에서 맞는 칸에 초록 테두리가 생겨요.',
      base: '네 장 차례를 놓고, 두 가지로 되풀이되는 뛰기 길을 만들어요.',
      challenge: '차례 카드가 다섯 장이고, 쉬기까지 세 가지를 쓴 세 칸 묶음 길을 만들어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 숨쉬기를 장난처럼 넘긴다 → 선생님과 함께 천천히 셋을 세며 한다. ② 무서운 칸을 말하지 못한다 → 짝이 먼저 "이 칸 괜찮아?" 하고 물어보게 한다. ③ 길을 만들 때 높이 칸만 잔뜩 넣는다 → 모둠 친구 모두가 뛸 수 있는지 다시 보게 한다.',
  }));

  lessons.push(L(36, {
    title: '뛰기 탐험 돌아보고 다짐하기',
    objective: '뛰기 탐험에서 배운 것을 묶어 말하고, 스스로 해낸 것을 점검하며 다음에 해 볼 뛰기를 정할 수 있다.',
    illustration: ART('a paper explorer map of jumping adventures with a puddle, a hopscotch grid, rising ropes and a heart-shaped brave badge, children placing stickers on it', '뛰기 탐험 지도', [
      { motif: 'star', x: 110, y: 96 }, { motif: 'tree', x: 420, y: 214 }, { motif: 'flower', x: 300, y: 230 }]),
    safety: [LAND, SPACE, STOP],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"뛰기 탐험 지도를 따라가 볼까요?" 웅덩이 멀리 뛰기, 사뿐히 내려앉기, 사방치기, 한 칸씩 올린 줄, 무섭다고 말하기 그림을 차례로 짚는다. "어디가 가장 즐거웠나요? 어디에서 용기를 냈나요?"',
        student: '뛰기 탐험 지도에서 용기를 낸 곳을 손가락으로 짚어 봐요.',
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 뛰기 탐험에서 배운 것 묶기', minutes: 13, tool: 'mindmap',
            teacher: '"이 카드는 어떤 탐험에서 배운 것일까요?" 나눈 뒤 묶음마다 하나씩 몸으로 해 본다. 헷갈리는 카드는 그 차시 놀이를 짧게 떠올리게 한다.',
            task: '배운 것을 뛰기 탐험 가지별로 나누고, 다음에 해 볼 뛰기를 짝에게 말해요.',
            levels: CARD_LV,
            items: [
              { prompt: '배운 것을 뛰기 탐험 가지별로 나누어 보세요.', toolOptions: { topic: '뛰기 탐험', slots: ['멀리·높이 뛰기', '내려앉기', '줄 높이 올리기'], cards: ['웅덩이는 앞으로 멀리 뛰어요', '무릎을 굽혀 두 발로 닿아요', '세 번 성공하면 한 칸 올려요', '줄은 위로 높이 넘어요', '쿵 소리가 작게 나요', '무서우면 한 칸 내려도 돼요'] },
                target: { sort: { '멀리·높이 뛰기': ['웅덩이는 앞으로 멀리 뛰어요', '줄은 위로 높이 넘어요'], '내려앉기': ['무릎을 굽혀 두 발로 닿아요', '쿵 소리가 작게 나요'], '줄 높이 올리기': ['세 번 성공하면 한 칸 올려요', '무서우면 한 칸 내려도 돼요'] } }, difficulty: 0.2,
                hints: ['카드마다 뛸 때, 내려올 때, 높이를 정할 때 가운데 언제의 일인지 보세요.', '무릎·소리가 나오는 카드는 언제 일일까요?', '웅덩이·줄 넘기는 멀리·높이 뛰기, 무릎 굽히기·작은 소리는 내려앉기, 세 번 성공·한 칸 내리기는 줄 높이 올리기예요.'] },
              { prompt: '다음에 해 볼 뛰기로 알맞은 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '다음에 해 볼 것', cards: ['내 목표 높이를 한 칸 올려 봐요', '개구리 뛰기 기록을 다시 재 봐요', '친구보다 높게 무조건 뛰어요', '매트 없이 계단에서 뛰어내려요'] },
                target: { pick: ['내 목표 높이를 한 칸 올려 봐요', '개구리 뛰기 기록을 다시 재 봐요'] }, difficulty: 0.15 },
              { prompt: '짝에게 뛰기 탐험에서 용기를 낸 때와 다음에 해 볼 뛰기를 말해요.', free: true, talk: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 스스로 해낸 것 점검하기', minutes: 13, tool: 'timer',
            teacher: '"뛰기 탐험에서 내가 해낸 것을 표시해 볼까요?" 모두가 한 활동만 점검표에 넣었다고 말하고, 표시한 것 하나를 몸으로 다시 보여 주게 한다. 마지막으로 한 칸 올린 높이를 한 번 넘어 본다.',
            task: '뛰기 탐험에서 해낸 것을 점검하고, 오늘 마지막으로 내 높이 줄을 넘어 기록해요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '뛰기 탐험에서 해낸 것을 모두 표시해요.', toolOptions: { title: '뛰기 탐험 점검' }, target: { selfCheck: ['무릎을 굽혀 두 발로 내려앉았어요', '줄 높이를 한 칸씩 올려 보았어요', '높이마다 넘은 횟수를 기록했어요'] }, difficulty: 0.05 },
              { prompt: '마지막으로 한 칸 아래 높이와 내 목표 높이 줄을 다섯 번씩 넘고, 걸리지 않고 넘은 횟수를 적어요.', toolOptions: { title: '마지막 높이 기록', fields: ['한 칸 아래 높이', '목표 높이'], unit: '번' }, target: { records: true }, difficulty: 0.1 },
              { prompt: '마지막 기록을 짝에게 보여 주고, 33차시 기록과 견주어 무엇이 바뀌었는지 말해요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"뛰기 탐험에서 가장 자랑하고 싶은 것을 한 사람씩 말해 볼까요?" 칠판에 모은다. 다음 시간부터는 콩주머니와 공을 다루는 도구 탐험을 시작한다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '뛰기 탐험', slots: ['멀리·높이 뛰기', '내려앉기', '줄 높이 올리기'], cards: ['발 앞쪽부터 사뿐히 닿아요', '높이는 넘는 친구가 정해요', '개울은 앞으로 멀리 뛰어 건너요'] }, prompt: '세 카드를 뛰기 탐험 가지별로 나누어 보세요.', target: { sort: { '멀리·높이 뛰기': ['개울은 앞으로 멀리 뛰어 건너요'], '내려앉기': ['발 앞쪽부터 사뿐히 닿아요'], '줄 높이 올리기': ['높이는 넘는 친구가 정해요'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '다음에 해 볼 뛰기로 알맞은 것은?', options: ['친구보다 무조건 높게 뛰기', '내 기록을 보고 한 칸 올려 보기'], answer: 1, difficulty: 0.1, explain: '내 기록과 몸 신호를 보고 한 칸씩 올려요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '뛰기 탐험 돌아보기',
      items: [
        { type: 'table', prompt: '탐험마다 기억나는 것을 하나씩 쓰세요.', columns: ['탐험', '기억나는 것'], cells: [['멀리·높이 뛰기', ''], ['내려앉기', ''], ['줄 높이 올리기', '']] },
        { type: 'short', prompt: '뛰기 탐험에서 용기를 낸 때를 쓰세요.' },
        { type: 'short', prompt: '다음에 해 볼 뛰기를 쓰세요.' },
        { type: 'check', prompt: '해낸 것에 ✓ 하세요.', options: ['두 발로 내려앉기', '줄 높이 한 칸씩 올리기', '무섭다고 말하기', '넘은 횟수 기록하기'] },
      ],
      easy: {
        note: '용기 낸 것 하나, 해 볼 것 하나!',
        items: [
          { type: 'short', prompt: '가장 즐거웠던 뛰기 놀이를 쓰세요.' },
          { type: 'short', prompt: '다음에 해 볼 뛰기를 쓰세요.' },
          { type: 'draw', prompt: '뛰기 놀이를 하는 내 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '나누기는 맞는 칸에 초록 테두리가 생겨요. 점검은 한 줄씩 짚으며 해요.',
      base: '여섯 장을 세 가지로 나누고, 해낸 것을 점검한 뒤 마지막 기록을 적어요.',
      challenge: '틀린 칸을 바로 알려 주지 않아요. 33차시 기록과 견준 까닭까지 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 기록이 늘지 않아 실망한다 → 내려앉기·말하기처럼 기록 말고 해낸 것을 점검표에서 짚어 준다. ② 다음 목표를 지나치게 높게 정한다 → 한 칸 약속을 떠올리게 한다. ③ 무섭다고 말한 것을 부끄러워한다 → 점검표의 "무섭다고 말하기"도 해낸 일이라고 말한다.',
  }));

  // ───────────────────────── 37~40차시: 던지기·굴리기와 도구 안전 ─────────────────────────

  lessons.push(L(37, {
    title: '던질까, 굴릴까? 도구 탐험 시작',
    objective: '콩주머니와 공을 던지기와 굴리기로 보내 보고, 상황에 맞는 보내기를 고를 수 있다.',
    illustration: ART('a child tossing a paper beanbag into a basket while another child rolls a ball along the floor toward paper bowling pins', '던질까? 굴릴까?', [
      { motif: 'sun', x: 90, y: 64, s: 0.6 }, { motif: 'tree', x: 420, y: 214 }, { motif: 'flower', x: 70, y: 232 }]),
    safety: [TOOL, SPACE, '도구는 선생님 신호가 있을 때만 들어요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"콩주머니를 저 바구니에 넣으려면 어떻게 보낼까요? 바닥에 세운 핀을 쓰러뜨리려면요?" 선생님이 한 번은 던지고 한 번은 굴려 보인다. "오늘부터 도구 탐험이에요. 던지기와 굴리기가 어떻게 다른지 찾아봐요."',
        student: '빈손으로 한 번은 던지는 흉내, 한 번은 굴리는 흉내를 내 봐요.',
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 던지기와 굴리기 나누기', minutes: 13, tool: 'mindmap',
            teacher: '"공이 바닥에 닿은 채로 가면 굴리기, 공중으로 날아가면 던지기예요." 카드를 나눈 뒤 짝과 콩주머니를 굴려 주고 던져 준다. 헷갈리는 카드는 "공이 어디로 가야 할까요? 바닥이요, 공중이요?"라고 묻는다.',
            task: '상황 카드를 던지기와 굴리기로 나누고, 짝과 콩주머니를 굴려 주고 던져 주어요.',
            levels: CARD_LV,
            items: [
              { prompt: '던져야 하는 때와 굴려야 하는 때로 나누어 보세요.', toolOptions: { topic: '어떻게 보낼까?', slots: ['던져요', '굴려요'], cards: ['높은 바구니에 넣어요', '바닥에 세운 핀을 쓰러뜨려요', '줄 너머 친구에게 보내요', '의자 밑 굴로 지나가게 해요'] },
                target: { sort: { '던져요': ['높은 바구니에 넣어요', '줄 너머 친구에게 보내요'], '굴려요': ['바닥에 세운 핀을 쓰러뜨려요', '의자 밑 굴로 지나가게 해요'] } }, difficulty: 0.15,
                hints: ['카드마다 공이 공중으로 가야 하는지, 바닥으로 가야 하는지 보세요.', '바구니와 줄은 높이 있나요, 바닥에 있나요?', '바구니·줄 너머는 던지고, 바닥 핀·의자 밑 굴은 굴려요.'],
                levels: { challenge: { prompt: '여섯 상황을 던지기와 굴리기로 나누어 보세요.', toolOptions: { cards: ['높은 바구니에 넣어요', '바닥에 세운 핀을 쓰러뜨려요', '줄 너머 친구에게 보내요', '의자 밑 굴로 지나가게 해요', '바닥에 그린 길을 따라 보내요', '벽에 붙은 높은 과녁을 맞혀요'] },
                  target: { sort: { '던져요': ['높은 바구니에 넣어요', '줄 너머 친구에게 보내요', '벽에 붙은 높은 과녁을 맞혀요'], '굴려요': ['바닥에 세운 핀을 쓰러뜨려요', '의자 밑 굴로 지나가게 해요', '바닥에 그린 길을 따라 보내요'] } } } } },
              { prompt: '굴리기를 할 때 몸이 하는 일만 골라 보세요.', toolOptions: { mode: 'pick', basket: '굴릴 때', cards: ['몸을 낮추어 손을 바닥 가까이 내려요', '공을 바닥에 대고 앞으로 밀어 보내요', '공을 머리 위로 들어 올려요', '공을 위로 높이 띄워요'] },
                target: { pick: ['몸을 낮추어 손을 바닥 가까이 내려요', '공을 바닥에 대고 앞으로 밀어 보내요'] }, difficulty: 0.15 },
              { prompt: '짝과 세 걸음 떨어져 앉아 콩주머니를 굴려 주고, 일어서서 던져 줘요. 보내기 전에 짝 이름을 불러요.', free: true, talk: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 던지고 굴릴 때 움직이는 곳', minutes: 13, tool: 'body',
            teacher: '"공을 굴리려고 몸을 낮추면 어디가 굽혀지나요?" 손으로 짚게 한 뒤 몸 그림에서 고르게 한다. 팔 전체를 고르는 학생에게 "팔에서 접히는 곳을 하나씩 찾아볼까요?"라고 묻는다.',
            task: '던지고 굴리는 흉내를 내 보며, 굽히거나 돌아간 곳을 손으로 짚은 뒤 몸 그림에서 눌러요.',
            levels: {
              easy: { mode: 'parts', parts: ['어깨', '팔꿈치', '손목', '무릎'], names: true },
              base: { mode: 'parts', parts: ['목', '어깨', '팔꿈치', '손목', '허리', '무릎', '발목'] },
              challenge: { mode: 'parts' },
            },
            items: [
              { prompt: '콩주머니를 머리 뒤에서 앞으로 던지듯 팔을 크게 돌려 보세요. 팔이 몸에서 돌아간 곳을 눌러요.', target: { parts: ['어깨'] }, difficulty: 0.1,
                hints: ['팔을 돌릴 때 다른 손을 팔이 시작되는 곳에 얹어 보세요.', '손목이나 팔꿈치만 움직였나요? 팔 전체는 어디서 돌았나요?', '목 양옆 아래, 팔이 몸에 붙은 곳이 어깨예요.'] },
              { prompt: '콩주머니를 가까이 살짝 던지듯, 팔 윗부분은 그대로 두고 아래팔만 앞으로 펴 보세요. 접혔다 펴진 곳을 눌러요.', target: { parts: ['팔꿈치'] }, difficulty: 0.15,
                hints: ['팔 가운데에서 접혔다 펴지는 곳을 다른 손으로 잡아 보세요.', '어깨는 가만히 있었지요? 팔 가운데를 살펴요.', '위팔과 아래팔 사이, 접히는 곳이 팔꿈치예요.'] },
              { prompt: '공을 굴리려고 바닥 가까이 몸을 낮추어 보세요. 다리에서 굽혀진 곳을 눌러요.', target: { parts: ['무릎'] }, difficulty: 0.1,
                hints: ['몸을 낮출 때 다리 가운데에 손을 대 보세요.', '발목보다 더 크게 접힌 곳이 있지요?', '허벅지와 정강이 사이, 접히는 곳이 무릎이에요.'] },
              { prompt: '콩주머니를 놓는 순간 손을 앞으로 톡 꺾어 보세요. 팔은 펴 둔 채 꺾인 곳 한 곳과, 팔을 돌린 곳 한 곳을 모두 눌러요.', target: { parts: ['손목', '어깨'] }, difficulty: 0.25,
                levels: { easy: { prompt: '콩주머니를 놓는 순간 손을 앞으로 톡 꺾어 보세요. 손이 꺾인 곳과 팔을 돌린 곳, 두 곳을 모두 눌러요.' } },
                hints: ['손이 꺾일 때 손과 팔 사이를 보고, 팔을 돌릴 때 팔이 시작되는 곳을 보세요.', '한 곳만 골랐나요? 팔을 돌린 곳도 찾아요.', '손이 꺾이는 손목, 팔이 돌아가는 어깨 두 곳이에요.'] },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"던질 때와 굴릴 때, 공이 가는 길이 어떻게 달랐나요?" 두세 명이 손으로 공 길을 그려 보이게 한다. 다음 시간에는 도구를 안전하게 다루는 약속을 정한다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '어떻게 보낼까?', slots: ['던져요', '굴려요'], cards: ['터널 장난감 속으로 보내요', '높이 걸린 고리 안에 넣어요'] }, prompt: '두 카드를 던지기와 굴리기로 나누어 보세요.', target: { sort: { '던져요': ['높이 걸린 고리 안에 넣어요'], '굴려요': ['터널 장난감 속으로 보내요'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '공이 바닥에 닿은 채로 가는 것은 무엇일까요?', options: ['던지기', '굴리기'], answer: 1, difficulty: 0.1, explain: '굴리기는 바닥을 따라, 던지기는 공중으로 날아가요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '던지기와 굴리기',
      items: [
        { type: 'table', prompt: '상황마다 어떻게 보낼지 쓰세요(던져요/굴려요).', columns: ['상황', '어떻게 보낼까'], cells: [['높은 바구니에 넣기', ''], ['바닥 핀 쓰러뜨리기', ''], ['의자 밑 굴 지나가기', '']] },
        { type: 'choice', prompt: '굴리기를 할 때 알맞은 것에 ○ 하세요.', options: ['몸을 낮추어 바닥에 대고 밀어요', '머리 위로 들어 올려요'], answer: '몸을 낮추어 바닥에 대고 밀어요' },
        { type: 'short', prompt: '던지기와 굴리기 가운데 더 해 보고 싶은 것과 까닭을 쓰세요.' },
        { type: 'draw', prompt: '공을 굴리는 내 모습을 그려 보세요.' },
      ],
      easy: {
        note: '공중으로 가면 던지기, 바닥으로 가면 굴리기!',
        items: [
          { type: 'choice', prompt: '높은 바구니에 넣을 때는?', options: ['던져요', '굴려요'], answer: '던져요' },
          { type: 'choice', prompt: '바닥 핀을 쓰러뜨릴 때는?', options: ['던져요', '굴려요'], answer: '굴려요' },
          { type: 'draw', prompt: '공을 보내는 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 몸 그림에 이름이 붙은 네 곳만 있어요.',
      base: '상황 네 장을 나누고, 일곱 곳 가운데 움직인 곳을 찾아요.',
      challenge: '상황 카드가 여섯 장이고, 몸 그림에 이름 없이 모든 곳이 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 굴리기를 할 때 서서 공을 떨어뜨린다 → 몸을 낮추어 손을 바닥 가까이 내리게 한다. ② 이름을 부르지 않고 갑자기 던진다 → 보내기 전 이름 부르기를 약속으로 정한다. ③ 짝 얼굴 쪽으로 던진다 → 가슴 쪽 목표를 손바닥으로 보여 주게 한다.',
  }));

  lessons.push(L(38, {
    title: '도구를 안전하게 다루는 약속',
    objective: '콩주머니와 공을 꺼내고, 보내고, 줍고, 정리하는 차례와 약속을 알고 지킬 수 있다.',
    illustration: ART('children waiting behind a throwing line while beanbags lie on the floor, a teacher holding up a paper sign that says pick up, a neat basket of balls', '던지고, 기다리고, 주워요', [
      { motif: 'tree', x: 70, y: 214 }, { motif: 'flower', x: 410, y: 230 }, { motif: 'star', x: 330, y: 92, s: 0.6 }]),
    safety: [TOOL, '모두 다 던질 때까지 줍지 않고, "주우러 가요" 신호에 걸어서 주워요.', '쓴 도구는 바구니에 넣고, 바닥에 굴러다니지 않게 해요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"친구가 아직 던지고 있는데 내가 콩주머니를 주우러 가면 어떻게 될까요?" 대답을 듣고, 바닥에 굴러다니는 공을 밟으면 미끄러진다는 것도 짚는다. "도구를 쓰려면 약속이 필요해요."',
        student: '도구를 쓰다가 위험했던 때를 떠올려 짝에게 하나 말해요.',
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 던지고 줍는 차례', minutes: 13, tool: 'story',
            teacher: '"던지기 놀이를 처음부터 정리까지 차례로 놓아 볼까요?" 카드를 놓은 뒤 그 차례대로 콩주머니 던지기를 해 본다. "주우러 가요" 신호 전에 나가는 학생이 있으면 놀이를 멈추고 차례를 다시 읽는다.',
            task: '던지기 놀이 차례를 놓고, 그 차례대로 콩주머니를 던지고 주운 뒤 정리해요.',
            levels: CARD_LV,
            items: [
              { prompt: '콩주머니 던지기 놀이 차례대로 카드를 놓아 보세요.', toolOptions: { cards: ['"주우러 가요" 신호에 걸어가 주워요', '던지는 선 뒤에 서요', '모두 다 던질 때까지 기다려요', '앞에 친구가 없는지 보고 던져요'] },
                target: { order: ['던지는 선 뒤에 서요', '앞에 친구가 없는지 보고 던져요', '모두 다 던질 때까지 기다려요', '"주우러 가요" 신호에 걸어가 주워요'] }, difficulty: 0.15,
                hints: ['던지기 전에 어디에 서야 할까요?', '줍는 것은 언제일까요? 내가 던지자마자일까요, 모두 다 던진 뒤일까요?', '선 뒤에 서기 → 보고 던지기 → 모두 기다리기 → 신호에 걸어가 줍기 차례예요.'],
                levels: { challenge: { prompt: '콩주머니 던지기 놀이를 처음부터 정리까지 차례대로 놓아 보세요.', toolOptions: { cards: ['"주우러 가요" 신호에 걸어가 주워요', '던지는 선 뒤에 서요', '모두 다 던질 때까지 기다려요', '앞에 친구가 없는지 보고 던져요', '주운 콩주머니를 바구니에 넣어요'] },
                  target: { order: ['던지는 선 뒤에 서요', '앞에 친구가 없는지 보고 던져요', '모두 다 던질 때까지 기다려요', '"주우러 가요" 신호에 걸어가 주워요', '주운 콩주머니를 바구니에 넣어요'] } } } },
              { prompt: '도구를 다룰 때 지킬 약속과 하면 안 되는 일로 나누어 보세요.', toolOptions: { mode: 'sort', slots: ['지켜요', '하면 안 돼요'], cards: ['쓴 공은 바구니에 넣어요', '친구 얼굴 쪽으로 던져요', '신호가 있을 때 도구를 들어요', '굴러다니는 공을 발로 차요'] },
                target: { sort: { '지켜요': ['쓴 공은 바구니에 넣어요', '신호가 있을 때 도구를 들어요'], '하면 안 돼요': ['친구 얼굴 쪽으로 던져요', '굴러다니는 공을 발로 차요'] } }, difficulty: 0.15 },
              { prompt: '놓은 차례대로 모둠이 콩주머니 던지기를 두 번 해요. 한 사람은 "주우러 가요" 신호를 맡아요.', free: true, talk: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 도구 약속 점검하기', minutes: 13, tool: 'timer',
            teacher: '"던지기 전에 무엇을 살폈나요?" 확인한 것을 누르게 한 뒤 공 굴리기 놀이를 짧게 해 본다. 마지막에 도구를 정리하는 데 걸린 시간을 판으로 정해 두고 정리한다.',
            task: '던지기 전 안전을 점검하고, 공 굴리기 놀이를 한 뒤 정해진 시간 안에 도구를 정리해요.',
            levels: { easy: {}, base: {}, challenge: { stopwatch: true } },
            items: [
              { prompt: '콩주머니를 던지기 전에 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['던지는 쪽에 친구가 없어요', '선 뒤에 서 있어요', '받을 친구가 준비됐다고 했어요'] }, target: { safety: true }, difficulty: 0.05 },
              { prompt: '공 굴리기 놀이를 운동 칸 40초, 쉬기 칸 20초로 2번 해요. 쉬기 칸에는 공을 바구니에 넣어요. 판을 맞추어요.', toolOptions: { title: '굴리고 정리하기', plan: { work: 30, rest: 30, rounds: 3 } }, target: { plan: { work: 40, rest: 20, rounds: 2 } }, difficulty: 0.2,
                levels: { easy: { state: { plan: { work: 40, rest: 30, rounds: 2 } } }, challenge: { prompt: '공 굴리기 놀이를 운동 칸 45초, 쉬기 칸 15초로 3번 해요. 쉬기 칸에는 공을 바구니에 넣어요. 판을 맞추어요.', target: { plan: { work: 45, rest: 15, rounds: 3 } } } } },
              { prompt: '맞춘 판대로 짝과 공을 굴려 주고, 쉬기 신호가 울리면 걸어서 공을 바구니에 넣어요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 도구 약속 가운데 가장 잘 지킨 것은 무엇인가요? 더 지켜야 할 것은요?" 모둠마다 하나씩 말하게 하고, 약속을 칠판에 붙여 둔다. 다음 시간에는 세게보다 정확하게 던지는 연습을 한다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { cards: ['신호에 걸어가 주워요', '보고 던져요', '모두 기다려요'] }, prompt: '세 카드를 던지기 놀이 차례대로 놓아 보세요.', target: { order: ['보고 던져요', '모두 기다려요', '신호에 걸어가 주워요'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '친구가 아직 던지고 있어요. 내 콩주머니가 앞에 떨어져 있어요. 어떻게 할까요?', options: ['바로 뛰어가 주워요', '신호가 있을 때까지 기다려요'], answer: 1, difficulty: 0.1, explain: '모두 다 던진 뒤 신호에 맞추어 주워야 맞지 않아요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '도구 약속',
      items: [
        { type: 'table', prompt: '던지기 놀이 차례를 쓰세요.', columns: ['차례', '하는 일'], cells: [['1', '선 뒤에 서요'], ['2', ''], ['3', ''], ['4', '신호에 걸어가 주워요']] },
        { type: 'check', prompt: '오늘 지킨 약속에 ✓ 하세요.', options: ['보고 던졌어요', '모두 기다렸어요', '걸어서 주웠어요', '바구니에 정리했어요'] },
        { type: 'choice', prompt: '하면 안 되는 일에 ○ 하세요.', options: ['쓴 공을 바구니에 넣어요', '굴러다니는 공을 발로 차요'], answer: '굴러다니는 공을 발로 차요' },
        { type: 'short', prompt: '도구를 쓸 때 꼭 지킬 약속 하나를 쓰세요.' },
      ],
      easy: {
        note: '모두 던진 뒤, 신호에 걸어서 주워요.',
        items: [
          { type: 'choice', prompt: '언제 주우러 가나요?', options: ['신호가 있을 때', '던지자마자'], answer: '신호가 있을 때' },
          { type: 'choice', prompt: '쓴 공은?', options: ['바구니에 넣어요', '바닥에 둬요'], answer: '바구니에 넣어요' },
          { type: 'draw', prompt: '도구를 정리하는 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '차례와 나누기에서 맞는 칸에 초록 테두리가 생기고, 판은 쉬기 시간만 맞추면 돼요.',
      base: '네 장 차례를 놓고, 놀이·정리 시간을 판에 맞추어요.',
      challenge: '정리까지 다섯 장 차례를 놓고, 더 긴 계획을 시간 재기로 재요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 던지자마자 주우러 달려간다 → "주우러 가요" 신호를 학생이 돌아가며 맡아 기다림을 몸으로 익힌다. ② 공을 발로 차며 논다 → 굴러다니는 공은 손으로 주워 바구니에 넣는다는 약속을 다시 말한다. ③ 정리를 서두르다 뛴다 → 쉬기 칸은 걸어서 정리하는 시간이라고 말한다.',
  }));

  lessons.push(L(39, {
    title: '세게보다 정확하게 던져요',
    objective: '세게 던지는 것보다 목표에 맞게 힘을 조절해 던지는 것이 중요함을 알고, 거리마다 바구니에 넣은 수를 기록할 수 있다.',
    illustration: ART('three paper baskets placed near, middle and far, a child gently tossing a beanbag in a soft arc into the near basket while another beanbag flies too far', '살살, 정확하게', [
      { motif: 'sun', x: 90, y: 64, s: 0.6 }, { motif: 'tree', x: 420, y: 214 }, { motif: 'leaf', x: 300, y: 232 }]),
    safety: [TOOL, '바구니 뒤에는 아무도 서지 않아요.', '모두 다 던진 뒤 신호에 걸어서 주워요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"가까운 바구니에 콩주머니를 아주 세게 던지면 어떻게 될까요?" 선생님이 세게 던져 바구니를 넘어가는 모습과 살살 던져 들어가는 모습을 보여 준다. "세게 던지면 잘하는 걸까요?" 손을 들게 한 뒤, 목표에 맞는 힘이 중요하다고 짚는다.',
        student: '선생님의 두 번 던지기 가운데 들어간 쪽을 손가락으로 가리켜요.',
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 세게 던지는 친구에게', minutes: 12, tool: 'emotion',
            teacher: '"준호는 세게 던져야 멋있다고 생각해요. 어떻게 하면 좋을까요?" 고른 뒤 결과를 함께 읽는다. 마음 카드를 놓으며 "정확하게 넣었을 때 마음은요?"라고 묻는다.',
            task: '세게 던지려는 친구에게 어떻게 할지 고르고, 던지기에서 생긴 일에 어울리는 마음을 골라요.',
            levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
            items: [
              { prompt: '준호가 가까운 바구니에 콩주머니를 있는 힘껏 던지려 해요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '준호', situation: '준호가 "세게 던져야 멋있어!" 하며 가까운 바구니를 향해 팔을 크게 돌려요.', choices: [
                { id: 'hard', text: '"그래, 더 세게!" 하고 응원해요', result: '콩주머니가 바구니를 넘어 뒤쪽 친구 다리에 맞았어요.', mood: '미안함', why: '세게 던지면 콩주머니가 어디로 갈까요?' },
                { id: 'soft', text: '"가까우니까 살살 던져 봐" 하고 말해요', result: '준호가 살살 던진 콩주머니가 바구니에 쏙 들어갔어요.', mood: '뿌듯함' }] }, target: { choice: 'soft' }, difficulty: 0.1 },
              { prompt: '던지기를 하며 생긴 일에 어울리는 마음 카드를 놓아 보세요.', toolOptions: { cards: ['뿌듯함', '아쉬움', '미안함'], slots: [{ id: 's1', label: '힘을 줄여 던졌더니 바구니에 쏙 들어갔어요' }, { id: 's2', label: '조금 모자라 바구니 앞에 떨어졌어요' }, { id: 's3', label: '세게 던져 친구 쪽으로 날아갔어요' }] },
                target: { match: { s1: '뿌듯함', s2: '아쉬움', s3: '미안함' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['뿌듯함', '아쉬움', '미안함', '지루함'] } } } },
              { prompt: '바구니 거리마다 알맞은 힘을 차례로 놓아 보세요. 가까운 바구니부터예요.', toolOptions: { mode: 'order', slots: ['가까운 바구니', '중간 바구니', '먼 바구니'], cards: ['보통 힘', '살살', '조금 세게'] }, target: { order: ['살살', '보통 힘', '조금 세게'] }, difficulty: 0.2 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 거리마다 넣은 수 기록하기', minutes: 14, tool: 'timer',
            teacher: '"가까운, 중간, 먼 바구니에 콩주머니를 다섯 개씩 던져요. 들어간 수를 세어 적어요." 세게 던져 바구니를 넘기는 학생에게 "힘을 반만 써 볼까요?"라고 말한다. 다 던진 뒤 신호에 맞추어 줍게 한다.',
            task: '거리마다 콩주머니를 다섯 개씩 던지고, 바구니에 들어간 수를 칸에 적어요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '가까운·중간·먼 바구니에 다섯 개씩 던지고, 들어간 수를 칸에 적어요.', toolOptions: { title: '바구니에 넣은 수', fields: ['가까운 바구니', '중간 바구니', '먼 바구니'], unit: '개' }, target: { records: true }, difficulty: 0.1,
                levels: { easy: { prompt: '가까운 바구니와 중간 바구니에 다섯 개씩 던지고, 들어간 수를 칸에 적어요.', toolOptions: { fields: ['가까운 바구니', '중간 바구니'] } } } },
              { prompt: '민지의 기록이에요: 가까운 바구니 4개, 중간 바구니 3개, 먼 바구니 1개. 칸에 그대로 옮겨 적어요.', toolOptions: { title: '민지의 바구니 기록', fields: ['가까운 바구니', '중간 바구니', '먼 바구니'], unit: '개' }, target: { records: [4, 3, 1] }, difficulty: 0.2 },
              { prompt: '짝과 번갈아 던지고, 짝이 넣으면 "힘 조절 멋졌어!" 하고 말해 줘요. 다 던진 뒤 신호에 맞추어 함께 주워요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"먼 바구니에 넣을 때와 가까운 바구니에 넣을 때 힘이 어떻게 달랐나요?" 두세 명이 팔로 보여 주며 말하게 한다. 다음 시간에는 던지기·굴리기 놀이판을 꾸민다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'timer', options: { title: '서아의 바구니 기록', fields: ['가까운 바구니', '먼 바구니'], unit: '개' }, prompt: '서아의 기록이에요: 가까운 바구니 5개, 먼 바구니 2개. 칸에 그대로 옮겨 적어 보세요.', target: { records: [5, 2] }, difficulty: 0.15 },
          { type: 'choice', prompt: '가까운 바구니에 넣을 때 알맞은 힘은?', options: ['있는 힘껏 세게', '살살'], answer: 1, difficulty: 0.1, explain: '가까운 곳은 살살 던져야 넘어가지 않고 들어가요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '세게보다 정확하게',
      items: [
        { type: 'table', prompt: '거리마다 다섯 개 가운데 넣은 수를 쓰세요.', columns: ['바구니', '넣은 수(개)'], cells: [['가까운 바구니', ''], ['중간 바구니', ''], ['먼 바구니', '']] },
        { type: 'choice', prompt: '먼 바구니에 알맞은 힘에 ○ 하세요.', options: ['살살', '조금 세게'], answer: '조금 세게' },
        { type: 'short', prompt: '세게 던지려는 친구에게 해 줄 말을 쓰세요.' },
        { type: 'draw', prompt: '살살 던져 바구니에 넣는 모습을 그려 보세요.' },
      ],
      easy: {
        note: '가까우면 살살, 멀면 조금 세게!',
        items: [
          { type: 'choice', prompt: '가까운 바구니에는?', options: ['살살', '세게'], answer: '살살' },
          { type: 'short', prompt: '가까운 바구니에 넣은 수를 쓰세요.' },
          { type: 'draw', prompt: '콩주머니를 던지는 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '마음 카드는 맞는 칸에 초록 테두리가 생기고, 바구니 두 곳만 기록해요.',
      base: '힘 차례를 놓고, 세 바구니 기록을 적은 뒤 친구 기록을 옮겨 적어요.',
      challenge: '마음 카드가 하나 더 있어 골라내야 해요. 바구니마다 힘을 어떻게 바꿨는지 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 세게 던질수록 잘한다고 여긴다 → 가까운 바구니에 세게 던져 넘어가는 것을 직접 보게 한다. ② 넣은 수가 적어 속상해한다 → 거리마다 힘을 바꾼 것을 칭찬한다. ③ 바구니 뒤에 서서 줍는다 → 바구니 뒤에 금지선을 붙인다.',
  }));

  lessons.push(L(40, {
    title: '던지기·굴리기 놀이판 꾸미기',
    objective: '던지기와 굴리기를 함께 쓰는 놀이판을 꾸미고, 놀이 규칙을 정해 안전하게 할 수 있다.',
    illustration: ART('a paper game board with triangle bowling pins at one end and a circle target hoop at the other, children placing pieces and drawing an arrow path', '우리 놀이판', [
      { motif: 'star', x: 120, y: 92, s: 0.6 }, { motif: 'tree', x: 420, y: 214 }, { motif: 'flower', x: 70, y: 232 }]),
    safety: [TOOL, '핀과 과녁 뒤에는 서지 않고, 다시 세울 때는 신호에 걸어가요.', SPACE],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"굴려서 쓰러뜨리는 핀과 던져서 넣는 과녁이 함께 있는 놀이판을 만들면 어떨까요?" 선생님이 만든 놀이판 그림을 보여 준다. "핀은 세모, 과녁은 동그라미, 던지는 자리는 네모로 나타내요."',
        student: '선생님 놀이판에서 굴리는 곳과 던지는 곳을 손가락으로 가리켜요.',
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 놀이판 그림 꾸미기', minutes: 14, tool: 'collage',
            teacher: '"세모 핀 세 개, 동그라미 과녁 하나, 네모 던지는 자리 하나를 놓아 볼까요?" 판을 꾸민 뒤 실제 강당에 핀과 훌라후프를 놓는다. 핀을 과녁 바로 앞에 붙인 모둠에게 "굴린 공이 과녁 쪽 친구에게 가지 않을까요?"라고 묻는다.',
            task: '핀·과녁·던지는 자리로 모둠 놀이판을 꾸미고, 꾸민 대로 강당에 놓아요.',
            levels: {
              easy: { shapes: ['triangle', 'circle', 'square'], colors: ['빨강', '파랑', '노랑'], sizes: ['m'] },
              base: { shapes: ['triangle', 'circle', 'square', 'star'], colors: ['빨강', '파랑', '노랑', '초록'] },
              challenge: {},
            },
            items: [
              { prompt: '세모 핀 세 개와 동그라미 과녁 하나가 있는 놀이판을 꾸며 보세요.', target: { has: [{ shape: 'triangle', n: 3 }, { shape: 'circle', n: 1 }] }, difficulty: 0.15,
                levels: { challenge: { prompt: '세모 핀 다섯 개, 동그라미 과녁 두 개, 네모 던지는 자리 하나가 있는 놀이판을 꾸며 보세요.', target: { has: [{ shape: 'triangle', n: 5 }, { shape: 'circle', n: 2 }, { shape: 'square', n: 1 }] } } },
                hints: ['세모가 핀이에요. 판에 세모가 몇 개 있는지 세어 보세요.', '동그라미 과녁은 하나만 있어야 해요. 몇 개인지 보세요.', '세모 세 개를 모아 놓고, 떨어진 곳에 동그라미 하나를 놓아요.'] },
              { prompt: '세모 핀을 노란 세모 세 개, 빨간 세모 두 개로 놓아 보세요.', target: { has: [{ shape: 'triangle', color: '노랑', n: 3 }, { shape: 'triangle', color: '빨강', n: 2 }] }, difficulty: 0.2,
                levels: { easy: { prompt: '세모 핀을 노란 세모 두 개, 빨간 세모 한 개로 놓아 보세요.', target: { has: [{ shape: 'triangle', color: '노랑', n: 2 }, { shape: 'triangle', color: '빨강', n: 1 }] } } },
                hints: ['노란 세모와 빨간 세모를 따로 세어 보세요.', '색마다 개수가 문제와 같은지 보세요.', '노란 세모 세 개와 빨간 세모 두 개를 한 줄로 놓아요.'] },
              { prompt: '우리 모둠 놀이판을 꾸미고, 해낸 것을 모두 표시해요.', target: { selfCheck: ['굴리는 곳과 던지는 곳을 정했어요', '핀과 과녁 사이를 넉넉히 띄웠어요', '꾸민 놀이판을 짝에게 손가락으로 설명했어요'], minPieces: 5 }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 놀이 차례 정하고 해 보기', minutes: 12, tool: 'pattern',
            teacher: '"한 사람이 굴리고, 다음 사람이 던져요. 차례가 되풀이되면 모두 두 가지를 다 해 볼 수 있어요." 빈칸을 채운 뒤 실제로 그 차례로 놀이를 한다.',
            task: '놀이 차례 줄의 규칙을 찾아 빈칸을 채우고, 그 차례대로 놀이판에서 굴리고 던져요.',
            levels: { easy: { perRow: 4 }, base: {}, challenge: { revealAfterCheck: true } },
            items: [
              { prompt: '\'굴리기, 던지기\'가 되풀이되는 놀이 차례예요. 빈칸을 채워요.', toolOptions: { seq: ['굴리기', '던지기', null, '던지기', '굴리기', null] }, target: { fill: ['굴리기', '던지기'] }, difficulty: 0.1,
                levels: { easy: { toolOptions: { perRow: 2 } } } },
              { prompt: '\'굴리기, 굴리기, 던지기\'가 되풀이되는 놀이 차례예요. 빈칸을 채워요.', toolOptions: { seq: ['굴리기', '굴리기', '던지기', '굴리기', null, '던지기', null, '굴리기', null] }, target: { fill: ['굴리기', '굴리기', '던지기'] }, difficulty: 0.2,
                levels: { easy: { toolOptions: { perRow: 3 } } } },
              { prompt: '\'던지기, 굴리기, 줍기\'가 되풀이되는 놀이 차례예요. 빈칸을 채워요.', toolOptions: { seq: ['던지기', '굴리기', '줍기', null, '굴리기', null, '던지기', null, '줍기'] }, target: { fill: ['던지기', '줍기', '굴리기'] }, difficulty: 0.25,
                levels: { easy: { toolOptions: { perRow: 3 } } } },
              { prompt: '채운 차례 하나를 골라 놀이판에서 모둠이 해 봐요. 줍기 차례에는 모두가 신호에 맞추어 걸어서 주워요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"다른 모둠 놀이판에서 따라 하고 싶은 점이 있었나요?" 모둠마다 하나씩 말하게 한다. 다음 시간부터는 짝과 공을 주고받는 탐험을 한다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'collage', options: { shapes: ['triangle', 'circle'], colors: ['빨강', '파랑'] }, prompt: '세모 핀 두 개와 동그라미 과녁 두 개로 놀이판을 꾸며 보세요.', target: { has: [{ shape: 'triangle', n: 2 }, { shape: 'circle', n: 2 }] }, difficulty: 0.1 },
          { type: 'choice', prompt: '핀과 과녁 사이를 넉넉히 띄우는 까닭은?', options: ['굴린 공이 던지는 친구 쪽으로 가지 않게', '놀이판이 커 보이게'], answer: 0, difficulty: 0.1, explain: '두 놀이가 떨어져 있어야 공과 콩주머니가 서로 친구에게 가지 않아요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '우리 놀이판',
      items: [
        { type: 'draw', prompt: '우리 모둠 놀이판을 그려 보세요. 핀은 세모, 과녁은 동그라미로 그려요.' },
        { type: 'figure', prompt: '놀이 차례의 빈칸에 들어갈 말을 쓰세요.', tool: 'pattern', figures: [{ options: { seq: ['굴리기', '던지기', '굴리기', '던지기', null, null] }, caption: '빈칸: ___, ___' }], answer: '굴리기, 던지기' },
        { type: 'short', prompt: '놀이판에서 지킬 약속 하나를 쓰세요.' },
        { type: 'check', prompt: '오늘 해낸 것에 ✓ 하세요.', options: ['놀이판을 꾸몄어요', '굴려서 핀을 맞혔어요', '던져서 과녁에 넣었어요'] },
      ],
      easy: {
        note: '핀은 굴려서, 과녁은 던져서!',
        items: [
          { type: 'choice', prompt: '핀을 쓰러뜨릴 때는?', options: ['굴려요', '던져요'], answer: '굴려요' },
          { type: 'choice', prompt: '과녁에 넣을 때는?', options: ['굴려요', '던져요'], answer: '던져요' },
          { type: 'draw', prompt: '놀이판을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '모양·색·크기가 적고, 놀이 차례 줄은 묶음마다 한 줄씩 보여요.',
      base: '핀과 과녁 개수를 맞추어 꾸미고, 두세 칸 묶음 차례를 채워요.',
      challenge: '핀·과녁·던지는 자리 개수를 모두 맞추고, 확인 뒤에만 차례 정답이 보여요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 핀과 과녁을 붙여 놓아 두 놀이가 겹친다 → 실제로 놓아 보고 공 길이 겹치는지 보게 한다. ② 핀을 다시 세우러 뛰어간다 → 줍기 차례에 신호로만 가게 한다. ③ 꾸미기에 시간을 다 쓴다 → 꾸미기 시간을 정해 두고 해 보는 시간을 남긴다.',
  }));

  // ───────────────────────── 41~44차시: 짝과 공 주고받기 ─────────────────────────

  lessons.push(L(41, {
    title: '짝 이름을 부르고 가슴 쪽으로 공 보내기',
    objective: '짝과 마주 서서 이름 부르기·준비 보기·가슴 쪽으로 보내기 차례대로 공을 주고받을 수 있다.',
    illustration: ART('two first graders facing each other three steps apart, one calling a name and gently tossing a soft paper ball toward the other child\'s chest, the other child holding hands out like a basket', '준비됐어? 보낸다!', [
      { motif: 'tree', x: 70, y: 214 }, { motif: 'flower', x: 410, y: 230 }, { motif: 'bird', x: 320, y: 90 }]),
    safety: [TOOL, SPACE, '말랑한 공이나 콩주머니로 시작하고, 짝이 "준비됐어!" 해야 보내요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '선생님이 학생 한 명과 마주 선다. 첫 번째는 아무 말 없이 갑자기 공을 보내 놓치게 하고, 두 번째는 "하준아, 준비됐어?" 하고 묻고 가슴 쪽으로 살살 보낸다. "어느 공이 받기 쉬웠을까요? 왜 그럴까요?" "잘 던지기만 하면 받는 건 친구가 알아서 할 일일까요?" 손을 들게 한 뒤, 오늘은 받는 친구를 생각하며 보내는 법을 찾는다고 말한다.',
        student: '두 손을 모아 공을 받을 "손 바구니"를 만들어 보여 줘요.',
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 공 주고받기 차례 놓고 해 보기', minutes: 13, tool: 'story',
            teacher: '"짝이 공을 잘 받으려면 무엇부터 해야 할까요?" 카드를 놓은 뒤 그 차례대로 세 걸음 떨어져 주고받는다. 이름을 부르지 않고 바로 보내는 짝이 있으면 멈추고 "짝이 내 공을 기다리고 있었나요?"라고 묻는다.',
            task: '공 주고받기 차례 카드를 놓고, 주는 사람과 받는 사람이 할 일을 나눈 뒤 짝과 그 차례대로 주고받아요.',
            levels: CARD_LV,
            items: [
              { prompt: '짝에게 공을 보내는 차례대로 카드를 놓아 보세요.', toolOptions: { cards: ['짝 가슴 쪽으로 살살 보내요', '짝 이름을 불러요', '짝이 공을 두 손으로 잡아요', '짝이 손 바구니를 만들었는지 봐요'] },
                target: { order: ['짝 이름을 불러요', '짝이 손 바구니를 만들었는지 봐요', '짝 가슴 쪽으로 살살 보내요', '짝이 공을 두 손으로 잡아요'] }, difficulty: 0.15,
                hints: ['공을 보내기 전에 짝이 나를 보고 있어야 해요. 무엇을 먼저 할까요?', '짝이 준비되었는지는 이름을 부른 뒤에 볼 수 있어요. 차례를 다시 보세요.', '이름 부르기 → 손 바구니 보기 → 가슴 쪽으로 보내기 → 두 손으로 잡기 차례예요.'],
                levels: { challenge: { prompt: '공을 보내고 받는 차례대로 카드를 놓아 보세요. 받은 뒤의 일도 있어요.', toolOptions: { cards: ['짝 가슴 쪽으로 살살 보내요', '짝 이름을 불러요', '짝이 공을 두 손으로 잡아요', '짝이 손 바구니를 만들었는지 봐요', '짝이 "받았어!" 하고 말해요'] },
                  target: { order: ['짝 이름을 불러요', '짝이 손 바구니를 만들었는지 봐요', '짝 가슴 쪽으로 살살 보내요', '짝이 공을 두 손으로 잡아요', '짝이 "받았어!" 하고 말해요'] } } } },
              { prompt: '공을 주는 사람이 할 일과 받는 사람이 할 일로 나누어 보세요.', toolOptions: { mode: 'sort', slots: ['주는 사람', '받는 사람'], cards: ['짝 이름을 불러요', '손 바구니를 만들어요', '가슴 쪽으로 살살 보내요', '오는 공을 끝까지 봐요'] },
                target: { sort: { '주는 사람': ['짝 이름을 불러요', '가슴 쪽으로 살살 보내요'], '받는 사람': ['손 바구니를 만들어요', '오는 공을 끝까지 봐요'] } }, difficulty: 0.15,
                hints: ['카드마다 공을 가진 사람이 하는지, 공을 기다리는 사람이 하는지 보세요.', '손 바구니는 공이 오기 전에 누가 만들까요?', '이름 부르기·살살 보내기는 주는 사람, 손 바구니·끝까지 보기는 받는 사람이 해요.'] },
              { prompt: '짝과 세 걸음 떨어져 마주 서요. 놓은 차례대로 다섯 번 주고받고, 역할을 바꾸어 다섯 번 더 해요.', free: true, talk: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 받는 친구를 생각하는 마음', minutes: 13, tool: 'emotion',
            teacher: '"준호가 세게 던지고 \'못 받은 건 네 탓이야\' 했어요. 정말 받는 친구 탓일까요?" 고른 뒤 결과를 함께 읽는다. "주는 사람도 받기 좋게 보내야 끊기지 않아요." 마음 카드를 놓을 때는 받는 친구 자리에서 생각해 보게 한다.',
            task: '세게 던진 친구에게 어떻게 할지 고르고, 주고받기에서 생긴 일에 어울리는 마음을 놓은 뒤 받는 친구를 생각하는 말을 골라요.',
            levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
            items: [
              { prompt: '준호가 세게 던지고 "못 받은 건 네 탓이야" 해요. 내가 준호라면 어떻게 할까요?', toolOptions: { mode: 'branch', who: '준호', situation: '준호가 공을 있는 힘껏 던졌어요. 짝이 놓치자 "못 받은 건 네 탓이야!" 하고 말해요.', choices: [
                { id: 'blame', text: '"받는 건 네 몫이야" 하고 또 세게 던져요', result: '짝이 또 놓치고, 공이 무서워 뒤로 물러났어요.', mood: '속상함', why: '받는 친구가 잡기 좋은 공이었을까요?' },
                { id: 'adjust', text: '"미안, 이번엔 가슴 쪽으로 살살 보낼게" 하고 말해요', result: '짝이 공을 두 손으로 쏙 받고 웃었어요.', mood: '기쁨' }] }, target: { choice: 'adjust' }, difficulty: 0.1,
                hints: ['공이 끊긴 까닭이 받는 사람에게만 있는지 생각해 보세요.', '세게 던진 공을 받는 친구 마음은 어땠을까요?', '주는 사람이 힘을 줄여 가슴 쪽으로 보내면 받기 쉬워져요.'] },
              { prompt: '공을 주고받다 생긴 일에 어울리는 마음 카드를 놓아 보세요.', toolOptions: { cards: ['고마움', '미안함', '걱정'], slots: [{ id: 's1', label: '짝이 받기 좋게 살살 보내 줬어요' }, { id: 's2', label: '내가 세게 보내 짝이 놓쳤어요' }, { id: 's3', label: '공이 얼굴 쪽으로 올까 봐 마음이 쓰여요' }] },
                target: { match: { s1: '고마움', s2: '미안함', s3: '걱정' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['고마움', '미안함', '걱정', '화남'] } } } },
              { prompt: '공을 보내기 전에 받는 친구를 생각하는 말만 골라 보세요.', toolOptions: { mode: 'pick', basket: '받는 친구를 생각해요', cards: ['"준비됐어? 보낸다!"', '"천천히 보낼게"', '"알아서 받아!"', '"빨리 잡아, 느림보야"'] },
                target: { pick: ['"준비됐어? 보낸다!"', '"천천히 보낼게"'] }, difficulty: 0.1 },
              { prompt: '짝과 다시 다섯 번 주고받아요. 보내기 전에 고른 말을 꼭 하고, 짝은 "준비됐어!"로 대답해요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 짝이 보낸 공 가운데 가장 받기 좋았던 공은 어떤 공이었나요?" 두세 명이 손으로 공이 온 높이를 보여 주며 말하게 한다. 다음 시간에는 짝의 자세에 따라 굴려 주기와 던져 주기를 골라 본다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { cards: ['가슴 쪽으로 보내요', '손 바구니를 봐요', '이름을 불러요'] }, prompt: '세 카드를 공 보내기 차례대로 놓아 보세요.', target: { order: ['이름을 불러요', '손 바구니를 봐요', '가슴 쪽으로 보내요'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '서아가 던진 공을 짝이 놓쳤어요. 서아가 할 일로 알맞은 것은?', options: ['"네가 못 받았잖아" 하고 말해요', '다음에는 더 살살, 가슴 쪽으로 보내요'], answer: 1, difficulty: 0.1, explain: '주는 사람도 받기 좋게 보내야 공이 이어져요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '공 주고받기 차례',
      items: [
        { type: 'table', prompt: '공 보내기 차례를 쓰세요.', columns: ['차례', '하는 일'], cells: [['1', ''], ['2', '손 바구니를 봐요'], ['3', ''], ['4', '두 손으로 잡아요']] },
        { type: 'choice', prompt: '받는 친구를 생각하는 말에 ○ 하세요.', options: ['"천천히 보낼게"', '"알아서 받아!"'], answer: '"천천히 보낼게"' },
        { type: 'check', prompt: '오늘 해낸 것에 ✓ 하세요.', options: ['짝 이름을 불렀어요', '손 바구니를 만들었어요', '가슴 쪽으로 보냈어요', '두 손으로 받았어요'] },
        { type: 'draw', prompt: '손 바구니로 공을 받는 내 모습을 그려 보세요.' },
      ],
      easy: {
        note: '이름 부르고, 손 보고, 가슴 쪽으로!',
        items: [
          { type: 'choice', prompt: '공을 보내기 전에 할 일은?', options: ['짝 이름 부르기', '바로 세게 던지기'], answer: '짝 이름 부르기' },
          { type: 'choice', prompt: '공은 짝의 어디로 보낼까요?', options: ['가슴 쪽', '얼굴 쪽'], answer: '가슴 쪽' },
          { type: 'draw', prompt: '손 바구니를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 틀린 자리는 바로 되돌아가요. 말랑한 콩주머니로 두 걸음 떨어져 해요.',
      base: '네 장 차례를 놓고 주는 일·받는 일을 나눈 뒤, 세 걸음 떨어져 주고받아요.',
      challenge: '받은 뒤의 일까지 다섯 장 차례를 놓고, 마음 카드 가운데 하나를 골라내요. 네 걸음까지 넓혀 봐요.',
    },
    teacherNotes: '자주 보이는 어려움: ① "받는 건 친구 몫"이라며 세게 던진다 → 역할을 바꾸어 세게 오는 공을 직접 받아 보게 한다. ② 공을 눈으로 보지 않고 손만 내민다 → "공이 손에 들어올 때까지 눈으로 따라가요"라고 말한다. ③ 이름을 부르고 대답을 듣기 전에 보낸다 → "준비됐어!" 대답을 들은 뒤 보내는 약속을 정한다.',
  }));

  lessons.push(L(42, {
    title: '짝의 자세 보고 굴려 줄지 던져 줄지 고르기',
    objective: '짝이 앉았는지 섰는지, 사이에 무엇이 있는지 보고 굴려 주기와 던져 주기 가운데 받기 좋은 방법을 골라 보낼 수 있다.',
    illustration: ART('one pair of children sitting on the floor with legs apart rolling a ball between them, and another pair standing and tossing a beanbag underhand over a small paper box', '앉으면 굴려, 서면 던져', [
      { motif: 'sun', x: 90, y: 66, s: 0.6 }, { motif: 'tree', x: 420, y: 214 }, { motif: 'leaf', x: 300, y: 232 }]),
    safety: [TOOL, SPACE, '앉아서 굴릴 때는 다리를 벌려 공이 밖으로 나가지 않게 해요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '짝 한 명은 바닥에 다리를 벌리고 앉고, 한 명은 서 있게 한다. "앉아 있는 친구에게 공을 높이 던지면 어떻게 될까요?" 대답을 들은 뒤 선생님이 앉은 학생에게는 굴려 주고, 선 학생에게는 아래에서 위로 살살 던져 준다. "받는 친구 자세를 보고 보내는 방법을 골라요."',
        student: '바닥에 다리를 벌리고 앉아, 굴러오는 공을 받을 자세를 만들어 봐요.',
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 굴려 줄까, 던져 줄까', minutes: 13, tool: 'mindmap',
            teacher: '"짝이 바닥에 앉아 있으면 공이 어디로 와야 받기 쉬울까요?" 카드를 나눈 뒤 짝과 앉아서 굴려 주기, 서서 던져 주기를 해 본다. 37차시처럼 바구니·핀을 보는 것이 아니라, 이번에는 받는 짝의 자세를 보고 고른다고 짚는다.',
            task: '짝의 자세와 둘 사이 모습을 보고 굴려 줄지 던져 줄지 나누고, 던져 줄 때 받기 좋은 공을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '짝의 모습을 보고 굴려 줄 때와 던져 줄 때로 나누어 보세요.', toolOptions: { topic: '짝에게 어떻게 보낼까?', slots: ['굴려 줘요', '던져 줘요'], cards: ['짝이 다리를 벌리고 바닥에 앉아 있어요', '짝이 서서 손 바구니를 만들었어요', '짝이 쪼그려 앉아 손을 바닥에 댔어요', '짝과 나 사이에 낮은 상자가 있어요'] },
                target: { sort: { '굴려 줘요': ['짝이 다리를 벌리고 바닥에 앉아 있어요', '짝이 쪼그려 앉아 손을 바닥에 댔어요'], '던져 줘요': ['짝이 서서 손 바구니를 만들었어요', '짝과 나 사이에 낮은 상자가 있어요'] } }, difficulty: 0.15,
                hints: ['짝의 손이 바닥 가까이 있는지, 가슴 앞에 있는지 보세요.', '사이에 상자가 있으면 바닥으로 굴린 공은 어떻게 될까요?', '앉아서 손이 바닥에 있으면 굴려 주고, 서 있거나 사이가 막혀 있으면 던져 줘요.'],
                levels: { challenge: { prompt: '여섯 모습을 굴려 줄 때와 던져 줄 때로 나누어 보세요.', toolOptions: { cards: ['짝이 다리를 벌리고 바닥에 앉아 있어요', '짝이 서서 손 바구니를 만들었어요', '짝이 쪼그려 앉아 손을 바닥에 댔어요', '짝과 나 사이에 낮은 상자가 있어요', '짝이 바닥 길 끝에 앉아 기다려요', '짝이 줄 너머에 서서 손을 내밀어요'] },
                  target: { sort: { '굴려 줘요': ['짝이 다리를 벌리고 바닥에 앉아 있어요', '짝이 쪼그려 앉아 손을 바닥에 댔어요', '짝이 바닥 길 끝에 앉아 기다려요'], '던져 줘요': ['짝이 서서 손 바구니를 만들었어요', '짝과 나 사이에 낮은 상자가 있어요', '짝이 줄 너머에 서서 손을 내밀어요'] } } } } },
              { prompt: '서 있는 짝에게 던져 줄 때, 받기 좋은 공만 골라 보세요.', toolOptions: { mode: 'pick', basket: '받기 좋은 공', cards: ['아래에서 위로 살살 올려 보내요', '짝 가슴 높이로 보내요', '머리 위로 높이 띄워요', '발 쪽으로 세게 보내요'] },
                target: { pick: ['아래에서 위로 살살 올려 보내요', '짝 가슴 높이로 보내요'] }, difficulty: 0.15 },
              { prompt: '짝과 앉아서 굴려 주기를 다섯 번, 일어서서 아래에서 위로 던져 주기를 다섯 번 해요.', free: true, talk: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 거리를 넓히며 받은 수 세기', minutes: 13, tool: 'timer',
            teacher: '"두 걸음에서 네 걸음으로 멀어지면 힘을 어떻게 바꿀까요?" 거리마다 다섯 번 보내고 짝이 받은 수를 센다. 멀어졌다고 있는 힘껏 던지는 학생에게 "짝 가슴까지 갈 만큼만 조금 더"라고 말한다. 마지막에 판을 맞추어 정해진 시간 동안 주고받는다.',
            task: '두 걸음과 네 걸음에서 다섯 번씩 보내고 짝이 받은 수를 적은 뒤, 판에 맞추어 주고받기 연습을 해요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '두 걸음, 네 걸음 떨어져 다섯 번씩 던져 주고, 짝이 받은 수를 칸에 적어요.', toolOptions: { title: '짝이 받은 수', fields: ['두 걸음', '네 걸음'], unit: '번' }, target: { records: true }, difficulty: 0.1,
                levels: { easy: { prompt: '두 걸음 떨어져 다섯 번 던져 주고, 짝이 받은 수를 칸에 적어요.', toolOptions: { fields: ['두 걸음'] } }, challenge: { prompt: '두 걸음, 네 걸음, 여섯 걸음 떨어져 다섯 번씩 던져 주고, 짝이 받은 수를 칸에 적어요.', toolOptions: { fields: ['두 걸음', '네 걸음', '여섯 걸음'] } } } },
              { prompt: '운동 칸은 주고받기, 쉬기 칸은 짝과 자리 바꾸기예요. 운동 30초, 쉬기 10초, 4번으로 판을 맞추어요.', toolOptions: { title: '주고받고 자리 바꾸기', plan: { work: 20, rest: 20, rounds: 2 } }, target: { plan: { work: 30, rest: 10, rounds: 4 } }, difficulty: 0.2,
                levels: { easy: { state: { plan: { work: 30, rest: 20, rounds: 4 } } }, challenge: { prompt: '운동 칸은 주고받기, 쉬기 칸은 짝과 자리 바꾸기예요. 운동 35초, 쉬기 15초, 3번으로 판을 맞추어요.', target: { plan: { work: 35, rest: 15, rounds: 3 } } } } },
              { prompt: '맞춘 판대로 주고받아요. 쉬기 신호가 울리면 걸어서 짝과 자리를 바꾸고, 다음 판은 한 걸음 더 떨어져요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"짝이 멀어졌을 때 힘을 얼마나 바꾸었나요?" 두세 명이 팔 동작으로 보여 주게 한다. 짝이 공을 잘 받았던 거리와 놓쳤던 거리를 손을 들어 견주어 본다. 다음 시간에는 끊기지 않고 열 번 이어 주고받기에 도전한다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '짝에게 어떻게 보낼까?', slots: ['굴려 줘요', '던져 줘요'], cards: ['짝이 무릎을 꿇고 바닥에 손을 댔어요', '짝이 서서 "준비됐어!" 하고 손을 내밀어요'] }, prompt: '두 카드를 굴려 줄 때와 던져 줄 때로 나누어 보세요.', target: { sort: { '굴려 줘요': ['짝이 무릎을 꿇고 바닥에 손을 댔어요'], '던져 줘요': ['짝이 서서 "준비됐어!" 하고 손을 내밀어요'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '짝이 두 걸음에서 네 걸음으로 멀어졌어요. 어떻게 보낼까요?', options: ['짝 가슴까지 갈 만큼 조금 더 힘을 줘요', '있는 힘껏 세게 던져요'], answer: 0, difficulty: 0.1, explain: '멀어지면 짝 가슴까지 닿을 만큼만 힘을 조금 더 줘요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '굴려 줄까, 던져 줄까',
      items: [
        { type: 'table', prompt: '짝의 모습에 맞게 어떻게 보낼지 쓰세요(굴려 줘요/던져 줘요).', columns: ['짝의 모습', '어떻게 보낼까'], cells: [['바닥에 다리를 벌리고 앉았어요', ''], ['서서 손 바구니를 만들었어요', ''], ['사이에 낮은 상자가 있어요', '']] },
        { type: 'table', prompt: '거리마다 다섯 번 가운데 짝이 받은 수를 쓰세요.', columns: ['거리', '받은 수(번)'], cells: [['두 걸음', ''], ['네 걸음', '']] },
        { type: 'choice', prompt: '서 있는 짝에게 받기 좋은 공에 ○ 하세요.', options: ['가슴 높이로 살살', '머리 위로 높이'], answer: '가슴 높이로 살살' },
        { type: 'short', prompt: '멀어진 짝에게 보낼 때 무엇을 바꾸었는지 쓰세요.' },
      ],
      easy: {
        note: '앉으면 굴려 주고, 서면 던져 줘요.',
        items: [
          { type: 'choice', prompt: '짝이 바닥에 앉아 있어요.', options: ['굴려 줘요', '던져 줘요'], answer: '굴려 줘요' },
          { type: 'choice', prompt: '짝이 서서 손을 내밀어요.', options: ['굴려 줘요', '던져 줘요'], answer: '던져 줘요' },
          { type: 'draw', prompt: '앉아서 공을 굴려 주는 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '나누기는 맞는 칸에 초록 테두리가 생기고, 두 걸음 한 곳만 기록해요. 판은 쉬기 시간만 맞추면 돼요.',
      base: '네 모습을 나누고, 두 거리에서 받은 수를 적은 뒤 주고받기 판을 맞추어요.',
      challenge: '모습 카드가 여섯 장이고, 여섯 걸음까지 넓혀 기록하며 다른 판을 맞추어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 앉은 짝에게도 던진다 → 앉은 짝의 손 높이를 손으로 짚어 보게 한다. ② 멀어지면 있는 힘껏 던진다 → 짝 가슴까지만 가는 힘을 먼저 빈손으로 흉내 내게 한다. ③ 굴린 공이 옆으로 샌다 → 공을 두 손으로 잡고 짝 쪽으로 밀어 보내게 한다.',
  }));

  lessons.push(L(43, {
    title: '끊기지 않고 열 번 주고받기 도전',
    objective: '짝과 함께 수를 세며 공을 주고받고, 놓치면 다시 시작하는 약속을 지키며 열 번 이어 주고받기에 도전할 수 있다.',
    illustration: ART('two children passing a ball back and forth with paper number bubbles from one to ten floating between them, ending in a joyful high five', '하나, 둘, … 열!', [
      { motif: 'star', x: 120, y: 90, s: 0.7 }, { motif: 'tree', x: 420, y: 214 }, { motif: 'flower', x: 70, y: 232 }]),
    safety: [TOOL, SPACE, '놓친 공은 뛰지 말고 걸어서 주워 와요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"짝과 공을 몇 번이나 이어서 주고받을 수 있을까요?" 학생 두 명이 나와 시범을 보이고 모두 함께 수를 센다. "중간에 놓치면 어떻게 할까요? 놓친 친구 탓일까요?" 대답을 들은 뒤 "놓치면 함께 \'괜찮아!\' 하고 하나부터 다시 세요"라는 약속을 정한다.',
        student: '시범을 보는 동안 손가락을 하나씩 펴며 함께 수를 세어요.',
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 열 번 도전 차례와 다시 하기', minutes: 12, tool: 'story',
            teacher: '"열 번 도전을 어떻게 시작하고 끝낼까요?" 차례를 놓은 뒤 공을 놓쳤을 때 할 일도 차례로 놓는다. "놓친 자리에서 이어 세면 될까요?" 묻고, 하나부터 다시 세는 까닭은 \'끊기지 않고\' 열 번이기 때문이라고 짚는다.',
            task: '열 번 도전 차례와 공을 놓쳤을 때 다시 하는 차례를 놓고, 짝과 첫 도전을 해 봐요.',
            levels: CARD_LV,
            items: [
              { prompt: '열 번 이어 주고받기 도전의 차례대로 카드를 놓아 보세요.', toolOptions: { cards: ['열까지 세면 하이파이브해요', '짝과 세 걸음 떨어져 마주 서요', '주고받을 때마다 함께 수를 세요', '"준비됐어?" 하고 묻고 첫 공을 보내요'] },
                target: { order: ['짝과 세 걸음 떨어져 마주 서요', '"준비됐어?" 하고 묻고 첫 공을 보내요', '주고받을 때마다 함께 수를 세요', '열까지 세면 하이파이브해요'] }, difficulty: 0.15,
                hints: ['도전을 시작하기 전에 어디에 서야 할까요?', '수를 세는 것은 첫 공을 보낸 뒤일까요, 앞일까요?', '마주 서기 → 묻고 첫 공 보내기 → 함께 수 세기 → 열에서 하이파이브 차례예요.'] },
              { prompt: '도전하다 공을 놓쳤어요. 다시 하는 차례대로 카드를 놓아 보세요.', toolOptions: { cards: ['"하나!" 하고 다시 세며 보내요', '걸어가서 공을 주워요', '제자리로 돌아와 짝과 눈을 맞춰요'] },
                target: { order: ['걸어가서 공을 주워요', '제자리로 돌아와 짝과 눈을 맞춰요', '"하나!" 하고 다시 세며 보내요'] }, difficulty: 0.15,
                hints: ['공이 내 손에 없으면 보낼 수 없어요. 무엇부터 할까요?', '공을 보내기 전에 짝이 준비됐는지 어떻게 알까요?', '공 줍기 → 제자리에서 눈 맞추기 → 하나부터 다시 세며 보내기 차례예요.'],
                levels: { challenge: { prompt: '공을 놓친 뒤 다시 하는 차례대로 카드를 놓아 보세요. 놓친 수부터 이어 세지 않아요.', toolOptions: { cards: ['"하나!" 하고 다시 세며 보내요', '걸어가서 공을 주워요', '제자리로 돌아와 짝과 눈을 맞춰요', '"괜찮아, 다시 하자!" 하고 말해요'] },
                  target: { order: ['"괜찮아, 다시 하자!" 하고 말해요', '걸어가서 공을 주워요', '제자리로 돌아와 짝과 눈을 맞춰요', '"하나!" 하고 다시 세며 보내요'] } } } },
              { prompt: '짝과 첫 도전을 해요. 놓치면 놓은 차례대로 다시 하고, 가장 길게 이어진 수를 기억해요.', free: true, talk: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 도전 기록 적기', minutes: 14, tool: 'timer',
            teacher: '"세 번 도전해서 놓치기 전까지 이어진 수를 적어요." 도전마다 짝이 함께 센 수를 적게 한다. 기록이 줄어든 짝에게 "놓친 뒤 다시 할 때 무엇을 바꿔 볼까요?"라고 묻는다. 열을 넘긴 짝은 한 걸음 더 떨어져 도전하게 한다.',
            task: '도전 전 안전을 점검하고, 세 번 도전하며 이어진 수를 적은 뒤 친구 기록을 옮겨 적어요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '다시 도전하기 전에 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['둘레 친구와 팔이 닿지 않아요', '공이 굴러갈 쪽에 물건이 없어요', '짝이 "준비됐어!" 하고 대답했어요'] }, target: { safety: true }, difficulty: 0.05 },
              { prompt: '세 번 도전하며 놓치기 전까지 이어진 수를 칸에 적어요.', toolOptions: { title: '열 번 도전 기록', fields: ['1번째 도전', '2번째 도전', '3번째 도전'], unit: '번' }, target: { records: true }, difficulty: 0.1,
                levels: { easy: { prompt: '두 번 도전하며 놓치기 전까지 이어진 수를 칸에 적어요.', toolOptions: { fields: ['1번째 도전', '2번째 도전'] } } } },
              { prompt: '하준이네 기록이에요: 1번째 4번, 2번째 7번, 3번째 10번. 칸에 그대로 옮겨 적어요.', toolOptions: { title: '하준이네 도전 기록', fields: ['1번째 도전', '2번째 도전', '3번째 도전'], unit: '번' }, target: { records: [4, 7, 10] }, difficulty: 0.2 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"열까지 간 짝도, 아직 못 간 짝도 있어요. 기록이 늘어난 짝은 무엇이 달라졌나요?" 두세 짝의 이야기를 듣는다. 다음 시간에는 마주 보는 두 줄로 모둠 친구 모두에게 공을 보낸다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'timer', options: { title: '서아네 도전 기록', fields: ['1번째 도전', '2번째 도전'], unit: '번' }, prompt: '서아네 기록이에요: 1번째 6번, 2번째 9번. 칸에 그대로 옮겨 적어 보세요.', target: { records: [6, 9] }, difficulty: 0.15 },
          { type: 'choice', prompt: '여섯까지 세었는데 공을 놓쳤어요. 다시 보낼 때 무엇이라고 셀까요?', options: ['"하나!"', '"일곱!"'], answer: 0, difficulty: 0.15, explain: '끊기지 않고 열 번이 목표라서 놓치면 하나부터 다시 세요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '열 번 이어 주고받기',
      items: [
        { type: 'table', prompt: '도전마다 이어진 수를 쓰세요.', columns: ['도전', '이어진 수(번)'], cells: [['1번째', ''], ['2번째', ''], ['3번째', '']] },
        { type: 'choice', prompt: '공을 놓쳤을 때 먼저 할 일에 ○ 하세요.', options: ['걸어가서 공을 주워요', '바로 "일곱!" 하고 보내요'], answer: '걸어가서 공을 주워요' },
        { type: 'short', prompt: '기록이 가장 길었던 도전에서 잘된 점을 쓰세요.' },
        { type: 'draw', prompt: '열까지 세고 짝과 하이파이브하는 모습을 그려 보세요.' },
      ],
      easy: {
        note: '놓치면 "괜찮아!" 하고 하나부터 다시!',
        items: [
          { type: 'short', prompt: '가장 길게 이어진 수를 쓰세요.' },
          { type: 'choice', prompt: '공을 놓치면?', options: ['하나부터 다시 세요', '그만해요'], answer: '하나부터 다시 세요' },
          { type: 'draw', prompt: '짝과 공을 주고받는 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '차례는 맞는 칸에 초록 테두리가 생기고, 도전은 두 번만 기록해요. 두 걸음 떨어져 말랑한 공으로 해요.',
      base: '도전 차례와 다시 하기 차례를 놓고, 세 번 도전을 기록해요.',
      challenge: '다시 하기에 "괜찮아" 말하기까지 넣어 놓고, 열을 넘기면 한 걸음 더 떨어져 도전해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 놓친 수부터 이어 센다 → \'끊기지 않고\'의 뜻을 손뼉 치기로 보여 준다(멈추면 처음부터). ② 기록을 늘리려 서두르다 세게 보낸다 → 수를 천천히 함께 세는 박자에 맞추어 보내게 한다. ③ 놓친 친구를 탓한다 → 주는 사람·받는 사람이 함께 만드는 기록이라고 말한다.',
  }));

  lessons.push(L(44, {
    title: '마주 보는 두 줄로 모둠 친구 모두에게 공 보내기',
    objective: '마주 보는 두 줄 대형을 만들고, 정한 차례대로 이름을 부르며 모둠 친구 모두에게 공을 보낼 수 있다.',
    illustration: ART('six children standing in two facing lines with a dotted zigzag path showing a ball going from one line to the other, a basket of balls at the end', '지그재그로 보내요', [
      { motif: 'sun', x: 90, y: 66, s: 0.6 }, { motif: 'tree', x: 420, y: 214 }, { motif: 'bird', x: 300, y: 90 }]),
    safety: [TOOL, SPACE, '공을 받을 친구만 손을 내밀고, 다른 친구는 손을 내리고 기다려요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"짝 둘이 아니라 모둠 여섯 명이 공을 주고받으려면 어떻게 서면 좋을까요?" 학생 여섯 명을 앞으로 불러 섞여 서게 한 뒤 공을 보내 보면 누구에게 갈지 헷갈린다. 다시 마주 보는 두 줄로 세운다. "앞에 마주 선 친구가 누구인지 손으로 가리켜 볼까요?"',
        student: '모둠 친구와 마주 보는 두 줄로 서 보고, 내 앞 친구를 손으로 가리켜요.',
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 마주 보는 두 줄 대형 꾸미기', minutes: 13, tool: 'collage',
            teacher: '"동그라미 하나가 친구 한 명이에요. 가운데 접는 선을 사이에 두고, 왼쪽 친구마다 오른쪽에 마주 선 친구가 있게 놓아요." 판을 꾸민 뒤 그대로 강당에 선다. 한쪽에만 친구를 몰아 놓은 모둠에게 "이 친구는 누구에게 공을 받을까요?"라고 묻는다.',
            task: '접는 선을 사이에 두고 친구 동그라미를 마주 보게 놓아 모둠 대형을 꾸미고, 꾸민 대로 서 봐요.',
            levels: {
              easy: { shapes: ['circle', 'square'], colors: ['파랑', '노랑'], sizes: ['m'] },
              base: { shapes: ['circle', 'square', 'triangle'], colors: ['파랑', '노랑', '빨강', '초록'], sizes: ['s', 'm'] },
              challenge: {},
            },
            items: [
              { prompt: '접는 선 양쪽에 친구 동그라미가 세 개씩 마주 보게 놓아 보세요.', target: { symmetry: 'vertical', has: [{ shape: 'circle', n: 6 }] }, difficulty: 0.2,
                hints: ['동그라미 하나가 친구 한 명이에요. 접는 선을 거울이라고 생각해 보세요.', '왼쪽 동그라미마다 오른쪽 같은 높이, 같은 거리에 동그라미가 있나요? 몇 개인지도 세어 보세요.', '왼쪽에 위아래로 세 개를 놓고, 오른쪽에도 같은 높이·같은 거리에 세 개를 놓아요.'] },
              { prompt: '친구 동그라미 여섯 개가 마주 보고, 공 바구니 네모 하나가 접는 선 위에 있는 대형을 꾸며 보세요.', target: { symmetry: 'vertical', has: [{ shape: 'circle', n: 6 }, { shape: 'square', n: 1 }] }, difficulty: 0.25,
                hints: ['바구니는 두 줄 모두에게 가까워야 해요. 접는 선과 어떤 자리가 좋을까요?', '네모가 접는 선 위에 있나요? 한쪽으로 치우치면 양쪽이 같지 않아요.', '동그라미는 양쪽에 세 개씩 마주 보게, 네모는 접는 선 바로 위에 놓아요.'],
                levels: { challenge: { prompt: '파란 동그라미 넷이 마주 보고, 노란 동그라미 둘이 그 아래에 마주 보며, 네모 바구니가 접는 선 위에 있게 꾸며 보세요.', target: { symmetry: 'vertical', has: [{ shape: 'circle', color: '파랑', n: 4 }, { shape: 'circle', color: '노랑', n: 2 }, { shape: 'square', n: 1 }] } } } },
              { prompt: '우리 모둠 대형을 꾸미고 그대로 서 본 뒤, 해낸 것을 모두 표시해요.', target: { selfCheck: ['내 자리 동그라미를 손가락으로 짚었어요', '마주 선 친구 이름을 말했어요', '꾸민 대로 강당에 서 보았어요'], minPieces: 6 }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 지그재그 공 보내기 차례', minutes: 13, tool: 'pattern',
            teacher: '"왼쪽 줄 민지가 오른쪽 줄 준호에게, 준호가 다시 왼쪽 줄 서아에게 보내요. 공이 지그재그로 가요." 차례 줄의 빈칸을 채운 뒤, 그 차례대로 이름을 부르며 보낸다. 차례가 아닌 친구가 손을 내밀면 "지금 공을 받을 사람은 누구일까요?"라고 묻는다.',
            task: '공을 받을 차례 줄의 규칙을 찾아 빈칸을 채우고, 모둠이 그 차례대로 이름을 부르며 공을 보내요.',
            levels: { easy: { perRow: 3 }, base: {}, challenge: { revealAfterCheck: true } },
            items: [
              { prompt: '공을 받을 차례예요. \'민지, 준호, 서아\'가 되풀이돼요. 빈칸을 채워요.', toolOptions: { seq: ['민지', '준호', '서아', '민지', null, '서아', null, '준호', '서아'] }, target: { fill: ['준호', '민지'] }, difficulty: 0.15 },
              { prompt: '여섯 명 모둠의 차례예요. 왼쪽 줄과 오른쪽 줄이 번갈아 받아요. 빈칸을 채워요.', toolOptions: { seq: ['왼쪽 줄', '오른쪽 줄', null, '오른쪽 줄', '왼쪽 줄', null, '왼쪽 줄', null] }, target: { fill: ['왼쪽 줄', '오른쪽 줄', '오른쪽 줄'] }, difficulty: 0.1,
                levels: { easy: { toolOptions: { perRow: 2 } } } },
              { prompt: '\'하준, 하준, 서아\'처럼 하준이가 두 번 받고 서아가 받는 차례가 되풀이돼요. 빈칸을 채워요.', toolOptions: { seq: ['하준', '하준', '서아', '하준', null, '서아', null, '하준', null] }, target: { fill: ['하준', '하준', '서아'] }, difficulty: 0.25 },
              { prompt: '채운 차례 하나를 골라 모둠이 이름을 부르며 공을 보내요. 받을 사람만 손 바구니를 만들어요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"모둠 친구 모두가 공을 받았나요? 한 번도 못 받은 친구는 없었나요?" 모둠마다 손을 들어 확인한다. 받지 못한 친구가 있었다면 차례를 어떻게 바꾸면 좋을지 한 가지씩 말하게 한다. 다음 시간에는 공 주고받기가 가장 잘된 때를 떠올려 본다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'collage', options: { shapes: ['circle', 'square'], colors: ['파랑', '노랑'], sizes: ['m'] }, prompt: '접는 선 양쪽에 친구 동그라미가 두 개씩 마주 보게 놓아 보세요.', target: { symmetry: 'vertical', has: [{ shape: 'circle', n: 4 }] }, difficulty: 0.15 },
          { type: 'choice', prompt: '지그재그로 공을 보낼 때, 공을 받을 친구는 누구일까요?', options: ['이름이 불린 친구', '공에 가장 가까운 친구'], answer: 0, difficulty: 0.1, explain: '이름이 불린 친구만 손 바구니를 만들어 받아요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '모둠 공 보내기',
      items: [
        { type: 'draw', prompt: '우리 모둠이 마주 보고 선 두 줄 대형을 그려 보세요. 친구는 동그라미로 그려요.' },
        { type: 'figure', prompt: '공 받을 차례의 빈칸에 들어갈 이름을 쓰세요.', tool: 'pattern', figures: [{ options: { seq: ['민지', '준호', '민지', '준호', null, null] }, caption: '빈칸: ___, ___' }], answer: '민지, 준호' },
        { type: 'choice', prompt: '공을 받을 차례가 아닐 때 알맞은 것에 ○ 하세요.', options: ['손을 내리고 기다려요', '먼저 손을 뻗어 잡아요'], answer: '손을 내리고 기다려요' },
        { type: 'short', prompt: '모둠 공 보내기에서 지킬 약속 하나를 쓰세요.' },
      ],
      easy: {
        note: '이름이 불린 친구만 손 바구니!',
        items: [
          { type: 'choice', prompt: '공을 받을 친구는?', options: ['이름이 불린 친구', '가까운 친구'], answer: '이름이 불린 친구' },
          { type: 'short', prompt: '내 앞에 마주 선 친구 이름을 쓰세요.' },
          { type: 'draw', prompt: '두 줄로 마주 선 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '모양·색이 적고 크기는 한 가지예요. 차례 줄은 묶음마다 한 줄씩 보여요.',
      base: '여섯 친구와 바구니로 마주 보는 대형을 꾸미고, 세 가지 차례 줄을 채워요.',
      challenge: '색까지 맞추어 대형을 꾸미고, 차례 정답은 확인한 뒤에만 보여요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 한 줄에 친구를 몰아 놓아 마주 선 짝이 없는 친구가 생긴다 → 판의 접는 선을 기준으로 양쪽 수를 세어 보게 한다. ② 차례가 아닌데 손을 뻗는다 → 이름이 불린 친구만 손 바구니를 만드는 약속을 정한다. ③ 같은 친구에게만 계속 보낸다 → 차례 줄을 칠판에 붙여 두고 손가락으로 따라가며 보낸다.',
  }));

  // ───────────────────────── 45~48차시: 잘된 때·도운 말 돌아보기와 단원 정리 ─────────────────────────

  lessons.push(L(45, {
    title: '공 주고받기가 가장 잘된 때 떠올리기',
    objective: '공 주고받기가 가장 잘 이어졌던 때를 떠올려 말하고, 잘 이어진 까닭과 끊긴 까닭을 나눌 수 있다.',
    illustration: ART('two children sitting together and looking at a paper thought bubble showing themselves passing a ball smoothly, with a big counting number ten and a star sticker', '언제 가장 잘됐을까?', [
      { motif: 'star', x: 110, y: 92 }, { motif: 'tree', x: 420, y: 214 }, { motif: 'flower', x: 300, y: 230 }]),
    safety: [TOOL, SPACE, STOP],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"지난 세 시간 동안 공을 주고받았어요. 이름 부르기, 굴려 주기, 열 번 도전, 모둠 지그재그 가운데 언제 가장 잘 이어졌나요?" 네 가지 놀이를 칠판에 붙이고 손가락으로 고르게 한다. "그때 왜 잘되었을까요? 오늘은 그 까닭을 찾아봐요."',
        student: '공 주고받기가 가장 잘된 놀이를 떠올려 손가락으로 몇 번째인지 보여 줘요.',
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 잘 이어진 까닭, 끊긴 까닭', minutes: 13, tool: 'mindmap',
            teacher: '"공이 잘 이어졌을 때 우리는 무엇을 했나요? 끊겼을 때는요?" 카드를 나눈 뒤 끊긴 까닭 카드 하나를 골라 \'어떻게 바꾸면 이어질까\'를 짝과 말해 보게 한다. 끊긴 까닭을 받는 친구에게만 돌리는 학생에게 "주는 사람이 바꿀 것은 없었을까요?"라고 묻는다.',
            task: '공 주고받기 장면을 잘 이어진 까닭과 끊긴 까닭으로 나누고, 짝과 가장 잘된 때를 말해요.',
            levels: CARD_LV,
            items: [
              { prompt: '공 주고받기 장면을 잘 이어진 까닭과 끊긴 까닭으로 나누어 보세요.', toolOptions: { topic: '공 주고받기', slots: ['잘 이어졌어요', '끊겼어요'], cards: ['서로 이름을 부르고 보냈어요', '짝이 딴 곳을 볼 때 보냈어요', '짝 가슴 쪽으로 살살 보냈어요', '세게 던져 공이 짝 머리 위로 갔어요'] },
                target: { sort: { '잘 이어졌어요': ['서로 이름을 부르고 보냈어요', '짝 가슴 쪽으로 살살 보냈어요'], '끊겼어요': ['짝이 딴 곳을 볼 때 보냈어요', '세게 던져 공이 짝 머리 위로 갔어요'] } }, difficulty: 0.15,
                hints: ['카드마다 그렇게 하면 짝이 공을 받기 쉬웠을지 떠올려 보세요.', '짝이 딴 곳을 보고 있었거나 공이 머리 위로 갔다면 받을 수 있었을까요?', '이름 부르기·가슴 쪽 살살은 잘 이어진 까닭, 딴 곳 볼 때 보내기·세게 던지기는 끊긴 까닭이에요.'],
                levels: { challenge: { prompt: '여섯 장면을 잘 이어진 까닭과 끊긴 까닭으로 나누어 보세요.', toolOptions: { cards: ['서로 이름을 부르고 보냈어요', '짝이 딴 곳을 볼 때 보냈어요', '짝 가슴 쪽으로 살살 보냈어요', '세게 던져 공이 짝 머리 위로 갔어요', '오는 공을 끝까지 보며 받았어요', '한 손을 뻗어 잡으려 했어요'] },
                  target: { sort: { '잘 이어졌어요': ['서로 이름을 부르고 보냈어요', '짝 가슴 쪽으로 살살 보냈어요', '오는 공을 끝까지 보며 받았어요'], '끊겼어요': ['짝이 딴 곳을 볼 때 보냈어요', '세게 던져 공이 짝 머리 위로 갔어요', '한 손을 뻗어 잡으려 했어요'] } } } } },
              { prompt: '민지네 짝의 이야기예요. 공이 끊긴 까닭을 바꾸어 줄 방법만 골라 보세요.', toolOptions: { mode: 'pick', basket: '이렇게 바꿔요', cards: ['보내기 전에 "준비됐어?" 하고 물어요', '힘을 줄여 아래에서 위로 보내요', '더 빨리 세게 보내요', '못 받으면 짝을 바꿔요'] },
                target: { pick: ['보내기 전에 "준비됐어?" 하고 물어요', '힘을 줄여 아래에서 위로 보내요'] }, difficulty: 0.15 },
              { prompt: '짝에게 공 주고받기가 가장 잘된 때와 그때 무엇을 했는지 말해요. 짝은 끝까지 듣고 "그때 기분은 어땠어?" 하고 물어봐요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 잘된 때의 마음과 다시 해 보기', minutes: 13, tool: 'emotion',
            teacher: '"잘 이어졌을 때와 아쉽게 끊겼을 때 마음은 어땠나요?" 마음 카드를 놓은 뒤, 마음 크기에는 정답이 없다고 말한다. 마지막에는 찾은 까닭 하나를 넣어 짝과 다시 주고받아 보게 한다.',
            task: '공 주고받기에서 생긴 일에 어울리는 마음을 놓고, 내 마음 크기를 고른 뒤 잘된 까닭 하나를 넣어 다시 주고받아요.',
            levels: { easy: { live: true, instant: true, steps: 3 }, base: {}, challenge: {} },
            items: [
              { prompt: '공 주고받기에서 생긴 일에 어울리는 마음 카드를 놓아 보세요.', toolOptions: { cards: ['뿌듯함', '아쉬움', '놀람'], slots: [{ id: 's1', label: '짝과 열까지 세고 해냈어요' }, { id: 's2', label: '아홉에서 공을 놓쳤어요' }, { id: 's3', label: '공이 바닥에 튀어 갑자기 내 쪽으로 왔어요' }] },
                target: { match: { s1: '뿌듯함', s2: '아쉬움', s3: '놀람' } }, difficulty: 0.2,
                hints: ['카드마다 그 일이 끝까지 잘되었는지, 아깝게 안 되었는지, 생각지 못하게 일어났는지 보세요.', '아홉에서 놓친 일은 거의 다 했는데 안 된 일이에요. 그때 마음은요?', '열까지 해낸 일은 뿌듯함, 아홉에서 놓친 일은 아쉬움, 공이 갑자기 온 일은 놀람이에요.'],
                levels: { challenge: { toolOptions: { cards: ['뿌듯함', '아쉬움', '놀람', '외로움'] } } } },
              { prompt: '공 주고받기가 가장 잘된 때를 떠올리면 내 마음은 얼마나 뿌듯한가요? 내 마음대로 골라요.', toolOptions: { mode: 'scale', situation: '공 주고받기가 가장 잘 이어졌던 때를 떠올려요.', feeling: '뿌듯함', steps: 5, after: '솔직하게 골랐어요. 그때 무엇을 잘했는지 짝에게 말해 줘요.' }, target: { level: 'any' }, difficulty: 0.05 },
              { prompt: '찾은 \'잘 이어진 까닭\' 하나를 정해 짝과 다시 열 번 도전을 해요. 이번 도전에서 무엇이 달라졌는지 말해요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 찾은 \'잘 이어진 까닭\'을 한 가지씩 말해 볼까요?" 칠판에 모아 \'우리 반 공 주고받기 비법\'으로 붙인다. 다음 시간에는 공을 놓친 친구에게 힘이 되는 말을 찾아본다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '공 주고받기', slots: ['잘 이어졌어요', '끊겼어요'], cards: ['옆 친구와 떠들며 보냈어요', '두 손으로 손 바구니를 만들어 받았어요'] }, prompt: '두 장면을 잘 이어진 까닭과 끊긴 까닭으로 나누어 보세요.', target: { sort: { '잘 이어졌어요': ['두 손으로 손 바구니를 만들어 받았어요'], '끊겼어요': ['옆 친구와 떠들며 보냈어요'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '공이 자꾸 끊겨요. 주는 사람이 바꿀 수 있는 것은?', options: ['짝이 준비됐는지 보고 살살 보내요', '받는 친구가 알아서 잘 받으면 돼요'], answer: 0, difficulty: 0.1, explain: '주는 사람도 받기 좋게 보내면 공이 더 잘 이어져요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '공 주고받기가 잘된 때',
      items: [
        { type: 'short', prompt: '공 주고받기가 가장 잘된 때를 쓰세요.' },
        { type: 'table', prompt: '잘 이어진 까닭과 끊긴 까닭을 하나씩 쓰세요.', columns: ['잘 이어진 까닭', '끊긴 까닭'], rows: 1 },
        { type: 'choice', prompt: '공이 잘 이어지는 방법에 ○ 하세요.', options: ['이름을 부르고 보내요', '짝이 딴 곳을 볼 때 보내요'], answer: '이름을 부르고 보내요' },
        { type: 'draw', prompt: '공 주고받기가 가장 잘된 때를 그려 보세요.' },
      ],
      easy: {
        note: '이름 부르고, 살살, 끝까지 보기!',
        items: [
          { type: 'choice', prompt: '공이 잘 이어진 까닭은?', options: ['가슴 쪽으로 살살', '머리 위로 세게'], answer: '가슴 쪽으로 살살' },
          { type: 'short', prompt: '가장 즐거웠던 공 놀이 이름을 쓰세요.' },
          { type: 'draw', prompt: '공을 주고받는 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '나누기는 맞는 칸에 초록 테두리가 생기고, 마음 크기는 세 칸에서 골라요.',
      base: '네 장면을 나누고 바꿀 방법을 고른 뒤, 다섯 칸에서 내 마음을 골라요.',
      challenge: '장면 카드와 마음 카드가 더 있어 골라내야 해요. 다시 도전에서 달라진 점을 까닭과 함께 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 끊긴 까닭을 모두 받는 친구에게 돌린다 → 주는 사람 카드를 함께 읽고 바꿀 점을 찾게 한다. ② 잘된 때를 "몰라요"로 끝낸다 → 칠판의 네 놀이 가운데 하나를 고르게 한 뒤 그때 무엇을 했는지 묻는다. ③ 기록이 가장 높았던 때만 잘된 때라고 여긴다 → 즐거웠던 때, 친구와 잘 맞았던 때도 잘된 때라고 말한다.',
  }));

  lessons.push(L(46, {
    title: '공을 놓친 친구에게 힘이 되는 말 찾기',
    objective: '공을 놓친 친구에게 아무 말도 하지 않거나 탓하는 대신, 힘이 되는 말과 행동을 골라 해 볼 수 있다.',
    illustration: ART('a child who dropped a ball looking down, and a partner walking over with a warm paper speech bubble saying it is okay, other children giving a thumbs up', '괜찮아, 다시 하자!', [
      { motif: 'sun', x: 90, y: 66, s: 0.6 }, { motif: 'tree', x: 420, y: 214 }, { motif: 'flower', x: 300, y: 230 }]),
    safety: [TOOL, SPACE, '놓친 공은 걸어서 함께 주워 와요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"열 번 도전에서 공을 놓쳤을 때, 짝이 아무 말도 안 하면 어떤 마음이 들까요?" 대답을 듣는다. "아무 말도 안 하는 게 친구를 위한 걸까요?" 손을 들게 한 뒤, 말이 없으면 친구는 내가 화났다고 여길 수 있다고 짚는다. "오늘은 놓친 친구에게 힘이 되는 말을 찾아요."',
        student: '공을 놓쳤을 때 듣고 싶은 말을 마음속으로 하나 떠올려 봐요.',
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 놓친 친구에게 어떻게 할까', minutes: 13, tool: 'emotion',
            teacher: '"서아가 아홉에서 공을 놓쳤어요. 어떻게 하면 좋을까요?" 보기를 고른 뒤 결과를 함께 읽는다. \'아무 말 없이 공만 주워 오기\'를 고른 학생에게 "서아는 그때 내 마음을 알 수 있을까요?"라고 묻는다. 말을 나눌 때는 \'듣는 친구 마음\'을 기준으로 삼는다.',
            task: '공을 놓친 친구에게 어떻게 할지 고르고, 말을 힘이 나는 말과 속상해지는 말로 나눈 뒤 짝과 놓친 장면을 해 봐요.',
            levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
            items: [
              { prompt: '서아가 아홉에서 공을 놓치고 고개를 숙였어요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '서아', situation: '열 번 도전에서 서아가 아홉에서 공을 놓쳤어요. 서아가 고개를 숙이고 서 있어요.', choices: [
                { id: 'silent', text: '아무 말 없이 공만 주워 와요', result: '서아는 내가 화난 줄 알고 다음 공도 무서워했어요.', mood: '걱정', why: '말이 없으면 서아는 내 마음을 어떻게 짐작할까요?' },
                { id: 'cheer', text: '"괜찮아, 거의 다 했어! 다시 하자" 하고 말해요', result: '서아가 고개를 들고 "응!" 하며 손 바구니를 만들었어요.', mood: '고마움' },
                { id: 'blame', text: '"너 때문에 다 망했어" 하고 말해요', result: '서아가 울먹이며 그만하고 싶다고 했어요.', mood: '속상함', why: '이 말을 들은 서아의 마음을 떠올려 봐요.' }] }, target: { choice: 'cheer' }, difficulty: 0.1,
                hints: ['서아가 다시 공을 받고 싶어지려면 무엇이 필요할지 생각해 보세요.', '아무 말도 하지 않으면 서아는 내 마음을 알 수 있을까요?', '"괜찮아, 다시 하자"처럼 힘이 나는 말을 해 주면 서아가 다시 할 수 있어요.'] },
              { prompt: '공을 놓친 친구가 들었을 때 힘이 나는 말과 속상해지는 말로 나누어 보세요.', toolOptions: { mode: 'sort', slots: ['힘이 나는 말', '속상해지는 말'], cards: ['괜찮아, 다시 해 보자', '또 놓쳤어?', '거의 다 했어!', '너랑 안 할래'] },
                target: { sort: { '힘이 나는 말': ['괜찮아, 다시 해 보자', '거의 다 했어!'], '속상해지는 말': ['또 놓쳤어?', '너랑 안 할래'] } }, difficulty: 0.15,
                hints: ['내가 공을 놓쳤을 때 이 말을 들으면 어떤 마음일지 하나씩 떠올려 보세요.', '\'또\'라는 말을 들으면 놓친 친구 마음은 어떨까요?', '괜찮아·거의 다 했어는 힘이 나는 말, 또 놓쳤어·너랑 안 할래는 속상해지는 말이에요.'],
                levels: { challenge: { prompt: '여섯 말을 힘이 나는 말과 속상해지는 말로 나누어 보세요.', toolOptions: { cards: ['괜찮아, 다시 해 보자', '또 놓쳤어?', '거의 다 했어!', '너랑 안 할래', '내가 더 살살 보낼게', '빨리 좀 해'] },
                  target: { sort: { '힘이 나는 말': ['괜찮아, 다시 해 보자', '거의 다 했어!', '내가 더 살살 보낼게'], '속상해지는 말': ['또 놓쳤어?', '너랑 안 할래', '빨리 좀 해'] } } } } },
              { prompt: '짝과 번갈아 일부러 공을 놓치는 장면을 해요. 짝은 고른 힘이 나는 말을 하고 함께 공을 주워 와요.', free: true, talk: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 상황에 맞는 말 고르고 해 보기', minutes: 13, tool: 'story',
            teacher: '"같은 \'괜찮아\'도 어울리는 때가 있어요." 상황마다 어울리는 말을 놓게 한다. 부탁하는 말을 고를 때는 "듣는 짝이 기분 나쁘지 않게 부탁하려면?"이라고 묻는다. 마지막에 모둠이 열 번 도전을 하며 고른 말을 실제로 써 본다.',
            task: '공 놀이 상황에 어울리는 말을 놓고, 친구에게 부탁할 때 쓰는 말을 고른 뒤 모둠 도전에서 그 말을 써 봐요.',
            levels: CARD_LV,
            items: [
              { prompt: '공 놀이 상황마다 어울리는 말 카드를 놓아 보세요.', toolOptions: { mode: 'match', slots: [{ id: 's1', label: '짝이 공을 놓쳐 속상해해요' }, { id: 's2', label: '짝과 열 번을 해냈어요' }, { id: 's3', label: '짝이 보낸 공이 너무 세게 와요' }], cards: ['"괜찮아, 다시 하자"', '"우리 해냈다!"', '"조금만 살살 보내 줄래?"'] },
                target: { match: { s1: '"괜찮아, 다시 하자"', s2: '"우리 해냈다!"', s3: '"조금만 살살 보내 줄래?"' } }, difficulty: 0.15,
                hints: ['상황마다 짝이 지금 어떤 마음일지 먼저 떠올려 보세요.', '공이 세게 올 때는 짝에게 무엇을 바라야 할까요?', '속상한 짝에게는 "괜찮아, 다시 하자", 해냈을 때는 "우리 해냈다!", 공이 셀 때는 "조금만 살살 보내 줄래?"예요.'],
                levels: { challenge: { toolOptions: { cards: ['"괜찮아, 다시 하자"', '"우리 해냈다!"', '"조금만 살살 보내 줄래?"', '"왜 그렇게 던져!"'] } } } },
              { prompt: '짝에게 부탁할 때 짝의 마음이 상하지 않는 말만 골라 보세요.', toolOptions: { mode: 'pick', basket: '부탁하는 말', cards: ['"가슴 쪽으로 보내 줄 수 있어?"', '"한 번만 더 천천히 해 줄래?"', '"세게 던지지 마, 바보야"', '"똑바로 좀 던져!"'] },
                target: { pick: ['"가슴 쪽으로 보내 줄 수 있어?"', '"한 번만 더 천천히 해 줄래?"'] }, difficulty: 0.15 },
              { prompt: '모둠이 지그재그로 열 번 도전을 해요. 누가 놓치면 모두 함께 힘이 나는 말을 하고, 하나부터 다시 세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 들은 말 가운데 가장 힘이 났던 말은 무엇인가요?" 두세 명에게 듣고, 그 말을 해 준 친구에게 "고마워"라고 말하게 한다. 다음 시간에는 힘이 나는 말을 하며 다시 도전하고 달라진 점을 찾는다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'sort', slots: ['힘이 나는 말', '속상해지는 말'], cards: ['다음엔 될 거야!', '너는 맨날 놓치잖아'] }, prompt: '두 말을 힘이 나는 말과 속상해지는 말로 나누어 보세요.', target: { sort: { '힘이 나는 말': ['다음엔 될 거야!'], '속상해지는 말': ['너는 맨날 놓치잖아'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '하준이가 공을 놓쳤어요. 아무 말도 하지 않는 것이 가장 좋을까요?', options: ['네, 가만히 있는 게 좋아요', '아니요, 힘이 나는 말을 해 줘요'], answer: 1, difficulty: 0.1, explain: '말이 없으면 친구는 내가 화났다고 여길 수 있어요. 힘이 나는 말이 친구를 도와요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '힘이 되는 말',
      items: [
        { type: 'table', prompt: '말을 듣는 친구 마음을 떠올려 나누어 쓰세요.', columns: ['힘이 나는 말', '속상해지는 말'], rows: 2 },
        { type: 'choice', prompt: '공을 놓친 친구에게 할 말에 ○ 하세요.', options: ['"거의 다 했어!"', '"또 놓쳤어?"', '(아무 말도 안 해요)'], answer: '"거의 다 했어!"' },
        { type: 'short', prompt: '짝에게 공을 살살 보내 달라고 부탁하는 말을 쓰세요.' },
        { type: 'short', prompt: '오늘 친구에게 들은 힘이 나는 말을 쓰세요.' },
      ],
      easy: {
        note: '놓친 친구에게는 "괜찮아, 다시 하자!"',
        items: [
          { type: 'choice', prompt: '힘이 나는 말은?', options: ['괜찮아', '또 놓쳤어?'], answer: '괜찮아' },
          { type: 'short', prompt: '친구에게 해 준 힘이 나는 말을 쓰세요.' },
          { type: 'draw', prompt: '친구에게 힘이 나는 말을 하는 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '나누기와 짝 짓기에서 맞는 칸에 초록 테두리가 생기고, 틀린 자리는 바로 되돌아가요.',
      base: '말 네 장을 나누고, 세 상황에 어울리는 말을 놓은 뒤 부탁하는 말을 골라요.',
      challenge: '말 카드가 더 많고 상황에 맞지 않는 말 하나를 골라내야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 놓친 친구에게 아무 말도 안 하는 것이 낫다고 여긴다 → 말없이 공만 주워 오는 장면을 해 보고, 놓친 쪽의 마음을 들어 본다. ② 힘이 나는 말을 장난처럼 크게 외친다 → 친구 눈을 보고 보통 목소리로 말하게 한다. ③ 부탁을 명령처럼 한다 → "~해 줄래?"로 끝맺는 말을 함께 연습한다.',
  }));

  lessons.push(L(47, {
    title: '힘이 되는 말과 함께 다시 도전하고 달라진 점 찾기',
    objective: '힘이 되는 말을 나누며 다시 공 주고받기에 도전하고, 오늘 친구를 도운 말이나 행동을 하나 골라 말할 수 있다.',
    illustration: ART('a small group of children cheering each other while passing a ball, paper hearts and speech bubbles floating, one child helping another pick up the ball', '도와주니 달라졌어요', [
      { motif: 'star', x: 120, y: 92, s: 0.7 }, { motif: 'tree', x: 420, y: 214 }, { motif: 'flower', x: 70, y: 232 }]),
    safety: [TOOL, SPACE, STOP],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"지난 시간에 찾은 힘이 나는 말을 기억하나요?" 칠판에 붙여 둔 말을 함께 읽는다. "오늘은 두 번 도전해요. 첫 번째는 그냥, 두 번째는 힘이 나는 말과 도움을 주고받으며 해요. 무엇이 달라지는지 찾아봐요."',
        student: '지난 시간에 들은 힘이 나는 말 하나를 짝에게 속삭여 줘요.',
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 두 번 도전하고 기록 견주기', minutes: 14, tool: 'timer',
            teacher: '"첫 도전은 수만 세고 해요. 두 번째 도전은 놓치면 힘이 나는 말을 하고 같이 주워요." 두 도전 모두 놓치기 전까지 이어진 수를 적게 한다. 두 번째가 더 적게 나온 짝에게 "기록 말고 달라진 것은 없었나요? 마음은요?"라고 묻는다.',
            task: '첫 도전과 힘이 나는 말을 나누며 한 두 번째 도전의 기록을 적고, 오늘 해낸 것을 점검해요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '첫 도전과 힘이 나는 말을 하며 한 두 번째 도전에서 이어진 수를 칸에 적어요.', toolOptions: { title: '두 번의 도전 기록', fields: ['첫 도전', '말하며 한 도전'], unit: '번' }, target: { records: true }, difficulty: 0.1 },
              { prompt: '준호네 기록이에요: 첫 도전 5번, 말하며 한 도전 8번. 칸에 그대로 옮겨 적어요.', toolOptions: { title: '준호네 도전 기록', fields: ['첫 도전', '말하며 한 도전'], unit: '번' }, target: { records: [5, 8] }, difficulty: 0.15,
                levels: { challenge: { prompt: '준호네 기록이에요: 첫 도전 5번, 말하며 한 도전 8번, 한 걸음 더 떨어진 도전 6번. 칸에 그대로 옮겨 적어요.', toolOptions: { fields: ['첫 도전', '말하며 한 도전', '한 걸음 더'] }, target: { records: [5, 8, 6] } } } },
              { prompt: '오늘 두 번의 도전을 돌아보고, 해낸 것을 모두 표시해요.', toolOptions: { title: '오늘의 도전 점검' }, target: { selfCheck: ['두 번 도전했어요', '도전마다 이어진 수를 셌어요', '두 번째 도전에서 힘이 나는 말을 했어요'] }, difficulty: 0.05 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 친구를 도운 말과 행동', minutes: 12, tool: 'emotion',
            teacher: '"입으로 한 것은 말, 몸으로 한 것은 행동이에요." 오늘 본 도움을 말과 행동으로 나눈다. 그다음 "오늘 내가 친구를 도운 말이나 행동 하나"를 짝에게 말하게 한다. 마음 크기는 정답이 없으니 내 마음대로 고르라고 말한다.',
            task: '친구를 도운 일을 말과 행동으로 나누고, 도움을 받았을 때 내 마음 크기를 고른 뒤 내가 도운 일 하나를 짝에게 말해요.',
            levels: { easy: { live: true, instant: true, steps: 3 }, base: {}, challenge: {} },
            items: [
              { prompt: '친구를 도운 일을 말로 도운 것과 행동으로 도운 것으로 나누어 보세요.', toolOptions: { mode: 'sort', slots: ['말로 도왔어요', '행동으로 도왔어요'], cards: ['"괜찮아, 다시 하자" 하고 말했어요', '놓친 공을 함께 주워 왔어요', '"거의 다 했어!" 하고 말했어요', '짝 앞으로 한 걸음 다가가 주었어요'] },
                target: { sort: { '말로 도왔어요': ['"괜찮아, 다시 하자" 하고 말했어요', '"거의 다 했어!" 하고 말했어요'], '행동으로 도왔어요': ['놓친 공을 함께 주워 왔어요', '짝 앞으로 한 걸음 다가가 주었어요'] } }, difficulty: 0.15,
                hints: ['카드마다 입으로 한 일인지, 몸을 움직여 한 일인지 보세요.', '따옴표 안의 말을 했다면 입으로 한 일이에요. 공을 줍거나 다가간 것은요?', '괜찮아·거의 다 했어는 말로, 공 함께 줍기·한 걸음 다가가기는 행동으로 도운 일이에요.'],
                levels: { challenge: { prompt: '여섯 가지 도운 일을 말로 도운 것과 행동으로 도운 것으로 나누어 보세요.', toolOptions: { cards: ['"괜찮아, 다시 하자" 하고 말했어요', '놓친 공을 함께 주워 왔어요', '"거의 다 했어!" 하고 말했어요', '짝 앞으로 한 걸음 다가가 주었어요', '"내가 더 살살 보낼게" 하고 말했어요', '넘어진 친구에게 손을 내밀어 일으켜 줬어요'] },
                  target: { sort: { '말로 도왔어요': ['"괜찮아, 다시 하자" 하고 말했어요', '"거의 다 했어!" 하고 말했어요', '"내가 더 살살 보낼게" 하고 말했어요'], '행동으로 도왔어요': ['놓친 공을 함께 주워 왔어요', '짝 앞으로 한 걸음 다가가 주었어요', '넘어진 친구에게 손을 내밀어 일으켜 줬어요'] } } } } },
              { prompt: '도전하다 친구의 도움을 받았을 때 내 마음은 얼마나 고마웠나요? 내 마음대로 골라요.', toolOptions: { mode: 'scale', situation: '공을 놓쳤을 때 친구가 말이나 행동으로 도와준 때를 떠올려요.', feeling: '고마움', steps: 5, after: '솔직하게 골랐어요. 도와준 친구에게 고맙다고 말해 줘요.' }, target: { level: 'any' }, difficulty: 0.05 },
              { prompt: '오늘 내가 친구를 도운 말이나 행동 하나를 짝에게 말해요. 짝은 "고마워" 하고 대답해요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"두 번째 도전에서 기록 말고도 달라진 것이 있었나요?" 기록이 늘어난 짝과 마음이 편해진 짝의 이야기를 함께 듣는다. 다음 시간에는 지금까지의 몸 탐험 전체를 돌아보며 탐험 지도를 완성한다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'sort', slots: ['말로 도왔어요', '행동으로 도왔어요'], cards: ['"힘내!" 하고 응원했어요', '굴러간 공을 대신 주워 줬어요'] }, prompt: '두 도운 일을 말과 행동으로 나누어 보세요.', target: { sort: { '말로 도왔어요': ['"힘내!" 하고 응원했어요'], '행동으로 도왔어요': ['굴러간 공을 대신 주워 줬어요'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '두 번째 도전 기록이 첫 도전보다 적었어요. 힘이 나는 말은 쓸모없었을까요?', options: ['네, 기록이 줄었으니 쓸모없어요', '아니요, 마음이 편해지고 다시 할 힘이 났어요'], answer: 1, difficulty: 0.15, explain: '힘이 나는 말은 기록뿐 아니라 친구 마음을 도와요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '친구를 도운 말과 행동',
      items: [
        { type: 'table', prompt: '두 번의 도전에서 이어진 수를 쓰세요.', columns: ['도전', '이어진 수(번)'], cells: [['첫 도전', ''], ['말하며 한 도전', '']] },
        { type: 'table', prompt: '오늘 친구를 도운 일을 하나씩 쓰세요.', columns: ['말로 도왔어요', '행동으로 도왔어요'], rows: 1 },
        { type: 'short', prompt: '두 번째 도전에서 달라진 점을 쓰세요.' },
        { type: 'draw', prompt: '친구를 도운 내 모습을 그려 보세요.' },
      ],
      easy: {
        note: '말로도, 행동으로도 친구를 도울 수 있어요.',
        items: [
          { type: 'choice', prompt: '행동으로 도운 것은?', options: ['공을 함께 주웠어요', '"괜찮아" 하고 말했어요'], answer: '공을 함께 주웠어요' },
          { type: 'short', prompt: '오늘 친구에게 한 힘이 나는 말을 쓰세요.' },
          { type: 'draw', prompt: '친구를 돕는 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '나누기는 맞는 칸에 초록 테두리가 생기고, 마음 크기는 세 칸에서 골라요.',
      base: '두 도전을 기록하고 친구 기록을 옮긴 뒤, 도운 일 네 가지를 말과 행동으로 나누어요.',
      challenge: '한 걸음 더 떨어진 기록까지 옮기고, 도운 일 여섯 가지를 나누어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 두 번째 기록이 줄어 힘이 나는 말이 소용없다고 여긴다 → 기록 말고 마음이 어땠는지 물어 달라진 점을 찾게 한다. ② 손 내밀기·박수 같은 응원을 말로 도운 것이라고 여긴다 → 입으로 했는지 몸으로 했는지 직접 해 보며 가른다. ③ 도운 일이 생각나지 않는다 → 짝에게 "내가 오늘 너를 도운 적 있니?" 하고 물어보게 한다.',
  }));

  lessons.push(L(48, {
    title: '몸 탐험 지도 완성하고 다음 탐험 정하기',
    objective: '제자리 움직임·걷기와 달리기·뛰기·도구 다루기 탐험에서 한 움직임을 나누어 정리하고, 내 마음을 돌아보며 다음에 해 볼 탐험을 정할 수 있다.',
    illustration: ART('a large paper explorer map with four regions for balancing, running, jumping and ball play, connected by a dotted trail, children placing their flag stickers on the map', '몸 탐험 지도', [
      { motif: 'star', x: 110, y: 92 }, { motif: 'mountain', x: 420, y: 210 }, { motif: 'flower', x: 70, y: 232 }]),
    safety: [SPACE, FLOOR, STOP],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"몸 탐험대가 마지막 탐험지에 왔어요. 지금까지 네 곳을 탐험했지요?" 탐험 지도의 네 곳(제자리 움직임, 걷기·달리기, 뛰기, 도구 다루기)을 차례로 짚는다. "가장 즐거웠던 곳은 어디인가요? 가장 많이 자란 곳은요?" 손가락으로 지도를 가리키게 한다.',
        student: '탐험 지도의 네 곳 가운데 가장 즐거웠던 곳을 손가락으로 짚어 봐요.',
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 탐험 지도에 움직임 붙이기', minutes: 14, tool: 'mindmap',
            teacher: '"이 움직임은 어느 탐험지에서 했을까요?" 카드를 나눈 뒤, 탐험지마다 한 움직임씩 모두 함께 몸으로 다시 해 본다. 헷갈리는 카드는 "발이 자리를 떠났나요? 도구를 썼나요?"라고 묻는다.',
            task: '움직임 카드를 네 탐험지로 나누고, 탐험한 차례를 놓은 뒤 탐험지마다 한 움직임을 짝에게 보여 줘요.',
            levels: CARD_LV,
            items: [
              { prompt: '움직임 카드를 몸 탐험 지도의 네 곳으로 나누어 보세요.', toolOptions: { topic: '몸 탐험 지도', slots: ['제자리 움직임', '걷기·달리기', '뛰기', '도구 다루기'], cards: ['한 발로 서서 버티기', '고깔 사이로 지그재그 달리기', '무릎을 굽혀 사뿐히 내려앉기', '짝과 공 열 번 주고받기'] },
                target: { sort: { '제자리 움직임': ['한 발로 서서 버티기'], '걷기·달리기': ['고깔 사이로 지그재그 달리기'], '뛰기': ['무릎을 굽혀 사뿐히 내려앉기'], '도구 다루기': ['짝과 공 열 번 주고받기'] } }, difficulty: 0.15,
                hints: ['카드마다 발이 자리를 떠났는지, 도구를 썼는지 먼저 보세요.', '내려앉기는 무엇을 한 뒤에 하는 움직임일까요?', '한 발 버티기는 제자리, 지그재그 달리기는 걷기·달리기, 내려앉기는 뛰기, 공 주고받기는 도구 다루기예요.'],
                levels: { challenge: { prompt: '여덟 움직임 카드를 몸 탐험 지도의 네 곳으로 나누어 보세요.', toolOptions: { cards: ['한 발로 서서 버티기', '고깔 사이로 지그재그 달리기', '무릎을 굽혀 사뿐히 내려앉기', '짝과 공 열 번 주고받기', '거울 놀이로 짝 자세 따라 하기', '배턴을 건네며 이어달리기', '줄 높이를 한 칸씩 올려 넘기', '바구니에 콩주머니 던져 넣기'] },
                  target: { sort: { '제자리 움직임': ['한 발로 서서 버티기', '거울 놀이로 짝 자세 따라 하기'], '걷기·달리기': ['고깔 사이로 지그재그 달리기', '배턴을 건네며 이어달리기'], '뛰기': ['무릎을 굽혀 사뿐히 내려앉기', '줄 높이를 한 칸씩 올려 넘기'], '도구 다루기': ['짝과 공 열 번 주고받기', '바구니에 콩주머니 던져 넣기'] } } } } },
              { prompt: '우리가 몸 탐험을 한 차례대로 탐험지 카드를 놓아 보세요.', toolOptions: { mode: 'order', slots: ['첫째', '둘째', '셋째', '넷째'], cards: ['뛰기', '도구 다루기', '제자리 움직임', '걷기·달리기'] },
                target: { order: ['제자리 움직임', '걷기·달리기', '뛰기', '도구 다루기'] }, difficulty: 0.15,
                hints: ['탐험 지도에서 맨 처음 우리 몸이 출발한 곳은 자리를 옮기지 않는 곳이었어요.', '공과 콩주머니를 쓴 탐험은 언제였나요? 가장 최근이었지요?', '제자리 움직임 → 걷기·달리기 → 뛰기 → 도구 다루기 차례예요.'] },
              { prompt: '짝에게 탐험지마다 한 움직임씩, 모두 네 가지를 몸으로 보여 줘요. 짝은 어느 탐험지인지 맞혀요.', free: true, talk: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 내 마음 돌아보고 다음 탐험 정하기', minutes: 12, tool: 'emotion',
            teacher: '"몸 탐험을 마친 지금, 나는 내 몸으로 할 수 있는 것이 얼마나 늘었다고 느끼나요?" 마음 크기에는 정답이 없다고 말한다. 다음 탐험의 약속을 고른 뒤, 해 보고 싶은 탐험을 하나씩 정해 짝에게 말하게 한다.',
            task: '몸 탐험에서 자란 내 마음 크기를 고르고, 다음 탐험에서 지킬 약속을 고른 뒤 해 볼 탐험을 짝에게 말해요.',
            levels: { easy: { live: true, instant: true, steps: 3 }, base: {}, challenge: {} },
            items: [
              { prompt: '몸 탐험을 마치고, 내 몸으로 할 수 있는 것이 늘어 얼마나 뿌듯한가요? 내 마음대로 골라요.', toolOptions: { mode: 'scale', situation: '제자리 움직임부터 도구 다루기까지 네 탐험을 떠올려요.', feeling: '뿌듯함', steps: 5, after: '솔직하게 골랐어요. 가장 많이 자란 탐험을 짝에게 말해 줘요.' }, target: { level: 'any' }, difficulty: 0.05 },
              { prompt: '다음 몸 탐험에서도 지킬 약속만 골라 보세요.', toolOptions: { mode: 'pick', basket: '다음 탐험 약속', cards: ['움직이기 전에 둘레를 살펴요', '어지러우면 멈추고 말해요', '친구보다 세게만 하려 해요', '신호 없이 먼저 도구를 들어요'] },
                target: { pick: ['움직이기 전에 둘레를 살펴요', '어지러우면 멈추고 말해요'] }, difficulty: 0.1,
                levels: { challenge: { prompt: '다음 몸 탐험에서도 지킬 약속만 모두 골라 보세요.', toolOptions: { cards: ['움직이기 전에 둘레를 살펴요', '어지러우면 멈추고 말해요', '친구보다 세게만 하려 해요', '신호 없이 먼저 도구를 들어요', '놓친 친구에게 힘이 나는 말을 해요', '일등만 잘한 거라고 말해요'] },
                  target: { pick: ['움직이기 전에 둘레를 살펴요', '어지러우면 멈추고 말해요', '놓친 친구에게 힘이 나는 말을 해요'] } } } },
              { prompt: '다음에 더 해 보고 싶은 탐험 하나와 그 까닭을 짝에게 말하고, 그 움직임을 한 번 보여 줘요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"우리 반 몸 탐험 지도에 내 깃발 붙임딱지를 붙여요. 다음에 더 탐험하고 싶은 곳에 붙여요." 붙임딱지가 가장 많은 곳을 함께 세어 보고, 다음 체육 놀이 시간에 그 탐험을 이어 간다고 알린다. "네 곳을 모두 탐험한 우리 모두가 몸 탐험대예요."',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '몸 탐험 지도', slots: ['제자리 움직임', '걷기·달리기', '뛰기', '도구 다루기'], cards: ['몸으로 ㅅ 글자 만들고 멈추기', '사방치기 칸 뛰어넘기'] }, prompt: '두 움직임을 몸 탐험 지도의 알맞은 곳에 놓아 보세요.', target: { sort: { '제자리 움직임': ['몸으로 ㅅ 글자 만들고 멈추기'], '뛰기': ['사방치기 칸 뛰어넘기'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '몸 탐험에서 \'잘한 것\'은 무엇일까요?', options: ['친구보다 빠르고 세게만 하기', '약속을 지키며 어제의 나보다 한 걸음 더 해 보기'], answer: 1, difficulty: 0.1, explain: '몸 탐험은 친구와 겨루기보다 약속을 지키며 내 몸으로 새로 해 보는 것이에요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '나의 몸 탐험 지도',
      items: [
        { type: 'table', prompt: '탐험지마다 기억나는 움직임을 하나씩 쓰세요.', columns: ['탐험지', '기억나는 움직임'], cells: [['제자리 움직임', ''], ['걷기·달리기', ''], ['뛰기', ''], ['도구 다루기', '']] },
        { type: 'short', prompt: '가장 많이 자랐다고 느끼는 탐험과 그 까닭을 쓰세요.' },
        { type: 'short', prompt: '다음에 더 해 보고 싶은 탐험을 쓰세요.' },
        { type: 'draw', prompt: '몸 탐험대가 된 내 모습을 그려 보세요.' },
      ],
      easy: {
        note: '네 곳을 모두 탐험했어요!',
        items: [
          { type: 'choice', prompt: '공을 주고받은 탐험은?', options: ['도구 다루기', '제자리 움직임'], answer: '도구 다루기' },
          { type: 'short', prompt: '가장 즐거웠던 탐험을 쓰세요.' },
          { type: 'draw', prompt: '즐거웠던 탐험 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '나누기와 차례는 맞는 칸에 초록 테두리가 생기고, 마음 크기는 세 칸에서 골라요.',
      base: '네 움직임을 탐험지로 나누고 차례를 놓은 뒤, 다음 탐험 약속을 골라요.',
      challenge: '움직임 여덟 장을 나누고, 약속 카드도 더 많아 골라내야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 뛰기와 제자리 움직임을 헷갈린다 → "발이 바닥을 떠났다가 내려앉았나요?"라고 물어 뛰기 탐험의 움직임을 떠올리게 한다. ② 다음 탐험을 "다 좋아요"로 끝낸다 → 지도에서 하나만 짚게 한 뒤 그 까닭을 묻는다. ③ 잘한 것을 일등·기록으로만 말한다 → 약속을 지킨 것, 무섭다고 말한 것, 친구를 도운 것도 탐험에서 자란 것이라고 짚는다.',
  }));

  // pattern 교구의 기본 1단계 힌트는 '색과 모양'을 말한다. 이 단원의 차례 줄은 낱말(높게·걷기·한 발·이름…)이라
  // 힌트를 직접 단 문항이 아니면 낱말 줄에 맞는 세 단계 힌트를 단다. 3단계(풀이)만 되풀이 묶음을 말한다.
  function wordPatternHints(it) {
    var o = it.toolOptions || {};
    if (o.mode === 'make') {
      return ['먼저 두세 칸을 한 묶음으로 정하고, 그 묶음을 똑같이 되풀이해요.',
        '첫 묶음과 다음 묶음을 칸마다 견주어 보세요. 다른 칸이 있나요?',
        '예를 들어 ' + o.palette[0] + '·' + o.palette[1] + '를 한 묶음으로 정하면 ' + [0, 1, 0, 1, 0, 1].map(function (k) { return o.palette[k]; }).join('·') + '처럼 채워요.'];
    }
    var seq = o.seq.slice(); var fill = it.target.fill.slice();
    for (var i = 0; i < seq.length; i++) if (seq[i] == null) seq[i] = fill.shift();
    var p = 1;
    while (p < seq.length && !seq.every(function (w, k) { return w === seq[k % p]; })) p++;
    return ['낱말 줄을 소리 내어 읽으며 똑같이 되풀이되는 묶음을 찾아요. 묶음이 몇 칸인지 손뼉으로 세어 보세요.',
      '빈칸 바로 앞 칸이 묶음의 몇 번째인지 짚어 보세요. 빈칸에는 묶음의 그다음 낱말이 와요.',
      '\'' + seq.slice(0, p).join(', ') + '\' 묶음이 되풀이돼요. 빈칸 앞에서 이어지는 차례대로 채워요.'];
  }
  lessons.forEach(function (l) {
    l.stages[1].activities.forEach(function (a) {
      if (a.tool !== 'pattern') return;
      a.items.forEach(function (it) {
        if (it.free || it.hints) return;
        var lv = it.levels || {};
        // 단계별로 줄이나 목표가 바뀌는 문항은 3단계 풀이가 단계마다 달라지므로 직접 써야 한다
        if (Object.keys(lv).some(function (k) { return lv[k].target || (lv[k].toolOptions && lv[k].toolOptions.seq); })) return;
        it.hints = wordPatternHints(it);
      });
    });
  });

  PaperLessons.registerUnit({
    id: 'g1-int-1-04', schema: 'edu-unit.v1', catalogUnit: UNIT,
    grade: 1, subject: '통합교과', unitTitle: TITLE,
    flow: '1~12차시는 내 몸을 첫 탐험지로 삼아, 자리를 옮기지 않는 움직임과 균형 잡기 쉬운 자세·어려운 자세를 찾고, 몸 글자·높낮이 바꾸기·동상 놀이·거울 놀이로 제자리 움직임을 넓힌 뒤, 가장 오래 버틴 자세를 기록하고 다시 해 보는 힘을 기릅니다. 13~24차시는 걷기와 달리기가 어떻게 다른지 몸으로 견주고, 고깔 길을 방향을 바꾸며 달리고 배턴을 주고받으며 이어 달린 뒤, 일등이 아니어도 즐거웠던 때를 떠올려 길과 빠르기를 바꾸어 봅니다. 25~36차시는 멀리 뛰기와 높이 뛰기를 견주고 무릎을 굽혀 안전하게 내려앉는 법을 익혀, 낮은 줄부터 높이를 올려 넘고 넘은 높이를 기록하며 무서운 마음도 말해 봅니다. 37~47차시는 콩주머니·공·훌라후프로 던지기와 굴리기를 견주고 안전하게 다루며, 짝이 받기 좋게 힘을 맞추어 주고받고 실수한 친구를 돕는 말을 나눕니다. 48차시에 네 가지 움직임 탐험을 묶어 스스로 돌아보고 다음 탐험을 정합니다.',
    refs: {},
    lessons: lessons,
  });
})();
