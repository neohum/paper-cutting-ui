/* 2학년 2학기 통합교과 7. 물건 — 48차시
 * 1~12차시 [바른 생활] 지속가능한 삶: 오래 쓰는 물건과 한 번 쓰는 물건 가르기(1~4) → 다시 쓰고 아끼고 고쳐 쓰기(5~8) → 센 기록 보기·이어 할 일 정하기(9~12)
 * 13~24차시 [즐거운 생활] 소리 나는 물건: 소리 모으고 나누기(13~16) → 고른 물건으로 소리 내고 이야기를 소리로(17~20) → 마음에 든 소리 고르고 친구 소리 듣기(21~24)
 * 25~36차시 [슬기로운 생활] 생활도구: "왜 이런 모양일까" 묻기(25~28) → 모양과 하는 일 살펴 적기(29~32) → 모양을 바꾼 도구 그리고 설명하기(33~36)
 * 37~48차시 [슬기로운 생활] 상상한 것 만들기: 만들 것과 재료 정하기(37~40) → 재료로 만들고 바꾼 곳 남기기(41~44) → 만든 것 설명하고 단원 정리(45~48)
 * 성취기준: units-map 단원 목록이 비어 있고 미확인(standardsVerified:false)이라 모든 차시 standards: [] (지어내지 않는다).
 * 이야기·예문은 모두 직접 지었다. 학생 이름은 가명(민지·준호·하준·서아)만 쓴다.
 */
(function () {
  var UNIT = 'g2-통합교과-2학기-7';
  var TITLE = '7. 물건';
  var HEAD = 'Layered paper-cut illustration of ';
  var TAIL = ', with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.';
  function two(n) { return (n < 10 ? '0' : '') + n; }
  // 차시 머리(같은 칸)를 채운다 — 차시마다 다른 내용은 x에 그대로 적는다
  function L(n, x) {
    var head = {
      id: 'g2-int-2-07-' + two(n), schema: 'edu-lesson.v1', catalog: { unit: UNIT, lesson: n },
      grade: 2, subject: '통합교과', unitTitle: TITLE,
    };
    var tail = { standards: [], minutes: 40, formats: ['chromebook', 'projector', 'print'] };
    var out = {};
    [head, { title: x.title, objective: x.objective }, tail].forEach(function (o) { for (var k in o) out[k] = o[k]; });
    for (var k in x) if (!(k in out)) out[k] = x[k];
    return out;
  }
  // 그림: prompt 틀 + 벡터 장면(배경 + 차시 모티프 + 한 줄 글)
  function ART(what, text, more) {
    return {
      prompt: HEAD + what + TAIL,
      scene: { viewBox: [480, 270], layers: [
        { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 110, y: 52 }, { motif: 'hills', y: 204 },
      ].concat(more || []).concat([{ motif: 'text', x: 240, y: 140, text: text, size: 22 }]) },
    };
  }
  var MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };
  // 카드 판 교구 단계: 쉬움은 맞는 칸에 초록 테두리·틀린 칸은 바로 되돌림, 도전은 문항마다 함정 카드를 더 넣는다
  var CARD_LV = { easy: { live: true, instant: true }, base: {}, challenge: {} };
  // 마음 크기·고르기(emotion scale·branch): 쉬움은 눈금 세 칸
  var MOOD_LV = { easy: { live: true, instant: true, steps: 3 }, base: {}, challenge: {} };

  var lessons = [];

  // ───────────────────────── 1~4차시: 오래 쓰는 물건, 한 번 쓰는 물건(생활 맥락 이해) ─────────────────────────

  lessons.push(L(1, {
    title: '가방 속 물건을 오래 쓰는 것과 버리는 것으로 나누기',
    objective: '가방과 필통 속 물건을 오래 쓰는 물건과 한 번 쓰고 버리는 물건으로 나누어 놓을 수 있다.',
    illustration: ART('an open paper school bag spilling out a pencil case, scissors, a ruler, a candy wrapper and a wet wipe, a child sorting them into two baskets', '오래 쓸까, 버릴까?', [
      { motif: 'house', x: 110, y: 214, color: 'peach' }, { motif: 'tree', x: 380, y: 214 }, { motif: 'flower', x: 300, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 7,
        teacher: '"선생님 가방에서 물건을 하나씩 꺼내 볼게요. 이 가위는 몇 년째 쓰고 있을까요? 이 사탕 껍질은요?" 실제 가위와 사탕 봉지를 들어 보인다. 시연 단추로 가위 카드가 \'오래 써요\' 가지로 들어가는 모습을 보여 준다. "이번 단원에서는 물건을 오래 쓰고, 아끼고, 소리도 내 보고, 새로 만들어도 봐요." 오래 쓴다는 말을 어려워하는 학생에게 "작년에도 쓰고 올해도 쓰는 물건"이라고 풀어 준다.',
        student: '내 필통에서 1학년 때부터 쓰던 물건이 있는지 찾아봐요.',
        demo: { tool: 'mindmap', options: { topic: '선생님 가방', slots: ['오래 써요', '한 번 쓰고 버려요'], cards: ['가위', '사탕 봉지'], shuffle: false }, sequence: [{ sort: { '오래 써요': ['가위'], '한 번 쓰고 버려요': ['사탕 봉지'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 25,
        activities: [
          {
            id: 'a1', title: '활동 1. 오래 쓰는 것, 한 번 쓰는 것 나누기', minutes: 14, tool: 'mindmap',
            teacher: '"이 물건은 한 번 쓰면 다시 쓸 수 있나요? 내일도 쓸 수 있나요?" 카드마다 두 질문을 소리 내어 묻는다. 물티슈를 \'오래 써요\'에 놓는 학생에게 "어제 쓴 물티슈로 오늘 또 닦을 수 있을까요?"라고 되묻는다. 물건이 아닌 카드(약속·날씨)는 어느 가지에도 넣지 않는다는 것을 짚는다.',
            task: '카드를 읽고 오래 쓰는 물건과 한 번 쓰고 버리는 물건으로 나누어 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '필통 속 물건을 오래 쓰는 것과 한 번 쓰는 것으로 나누어 보세요.', toolOptions: { topic: '내 필통', slots: ['오래 써요', '한 번 쓰고 버려요'], cards: ['가위', '자', '물티슈', '사탕 봉지'] },
                target: { sort: { '오래 써요': ['가위', '자'], '한 번 쓰고 버려요': ['물티슈', '사탕 봉지'] } }, difficulty: 0.05 },
              { prompt: '급식과 간식 때 쓰는 물건을 나누어 보세요.', toolOptions: { topic: '먹을 때 쓰는 물건', slots: ['오래 써요', '한 번 쓰고 버려요'], cards: ['내 수저', '종이컵', '내 물병', '일회용 빨대'] },
                target: { sort: { '오래 써요': ['내 수저', '내 물병'], '한 번 쓰고 버려요': ['종이컵', '일회용 빨대'] } }, difficulty: 0.1,
                levels: { challenge: { prompt: '먹을 때 쓰는 물건을 나누어 보세요. 나무젓가락도 생각해요.', toolOptions: { cards: ['내 수저', '종이컵', '내 물병', '일회용 빨대', '나무젓가락'] }, target: { sort: { '오래 써요': ['내 수저', '내 물병'], '한 번 쓰고 버려요': ['종이컵', '일회용 빨대', '나무젓가락'] } } } } },
              { prompt: '집에서 쓰는 물건을 나누어 보세요. 물건이 아닌 카드는 남겨요.', toolOptions: { topic: '우리 집 물건', slots: ['오래 써요', '한 번 쓰고 버려요'], cards: ['우산', '손수건', '휴지', '과자 봉지', '친구와 한 약속'] },
                target: { sort: { '오래 써요': ['우산', '손수건'], '한 번 쓰고 버려요': ['휴지', '과자 봉지'] } }, difficulty: 0.2,
                predict: { q: '"친구와 한 약속" 카드는 어디에 놓을까요?', options: ['오래 써요', '한 번 써요', '안 놓아요'], answer: 2 },
                conclude: '약속은 손으로 쓰는 물건이 아니라서 어느 칸에도 넣지 않아요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 아끼는 물건과 내 마음', minutes: 11, tool: 'emotion',
            teacher: '"내가 오래 쓴 물건이 망가지면 어떤 마음일까요?" 학생 두세 명에게 가장 오래 쓴 물건을 들어 보이게 한다. 짝에게 소개할 때 "언제부터 썼는지"와 "어떻게 아꼈는지"를 꼭 말하게 한다. 민지의 마음 크기는 이야기 속 "집에 오는 내내 울었어요"를 손가락으로 짚고 고르게 한다. "글에서 마음 크기를 알려 주는 말이 어디 있나요?"',
            task: '오래 쓴 물건을 짝에게 소개하고, 물건에 생긴 일에 어울리는 마음을 골라요.',
            levels: MOOD_LV,
            items: [
              { prompt: '짝에게 내가 가장 오래 쓴 물건을 보여 주고, 언제부터 썼는지 말한 뒤 "다 했어요"를 누르세요.', free: true },
              { prompt: '물건에 생긴 일에 어울리는 마음 카드를 놓아 보세요.', toolOptions: { cards: ['속상함', '뿌듯함', '기쁨'], slots: [{ id: 's1', label: '아끼던 크레파스가 부러졌어요' }, { id: 's2', label: '오래 쓴 가방을 깨끗이 빨았어요' }] },
                target: { match: { s1: '속상함', s2: ['뿌듯함', '기쁨'] } }, difficulty: 0.1 },
              { prompt: '민지가 2년 쓴 필통을 잃어버려 집에 오는 내내 울었어요. 민지의 속상한 마음 크기를 골라 보세요.', toolOptions: { mode: 'scale', who: '민지', situation: '민지가 1학년 때부터 2년 동안 쓴 필통을 놀이터에서 잃어버렸어요. 집에 오는 내내 울었어요.', feeling: '속상함', after: '오래 쓴 물건은 정이 들어 잃어버리면 아주 속상해요.' }, target: { level: [4, 5] }, difficulty: 0.1,
                levels: { easy: { prompt: '민지가 2년 쓴 필통을 잃어버려 내내 울었어요. 민지의 속상한 마음을 세 칸에서 골라 보세요.', target: { level: 3 } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 나눈 물건 가운데 우리 반에 가장 많은 것은 오래 쓰는 것일까요, 한 번 쓰는 것일까요?" 칠판에 두 칸을 그리고 손을 들어 세어 본다. 다음 시간에는 교실 전체를 둘러보며 물건을 찾는다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '학교 물건', slots: ['오래 써요', '한 번 쓰고 버려요'], cards: ['실내화', '일회용 비닐장갑'] }, prompt: '두 물건을 알맞은 가지에 놓아 보세요.', target: { sort: { '오래 써요': ['실내화'], '한 번 쓰고 버려요': ['일회용 비닐장갑'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '오래 쓰는 물건은 어느 것일까요?', options: ['종이컵', '내 물병', '사탕 봉지'], answer: 1, difficulty: 0.1, explain: '물병은 씻어서 내일도, 다음 달에도 다시 써요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '오래 쓸까, 한 번 쓸까',
      items: [
        { type: 'table', prompt: '물건 이름을 알맞은 칸에 옮겨 쓰세요. (가위, 휴지, 우산, 종이컵)', columns: ['오래 써요', '한 번 쓰고 버려요'], rows: 2 },
        { type: 'choice', prompt: '한 번 쓰고 버리는 물건에 ○ 하세요.', options: ['자', '일회용 빨대', '손수건'], answer: '일회용 빨대' },
        { type: 'short', prompt: '내가 가장 오래 쓴 물건과 쓴 기간을 쓰세요.' },
        { type: 'draw', prompt: '내가 아끼는 물건을 그리세요.' },
      ],
      easy: {
        note: '"내일도 또 쓸 수 있나요?" 하고 물어봐요.',
        items: [
          { type: 'choice', prompt: '오래 쓰는 물건에 ○ 하세요.', options: ['가위', '사탕 봉지'], answer: '가위' },
          { type: 'choice', prompt: '한 번 쓰고 버리는 물건에 ○ 하세요.', options: ['물티슈', '우산'], answer: '물티슈' },
          { type: 'draw', prompt: '내가 아끼는 물건을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 가지에 놓으면 초록 테두리가 생기고, 틀리면 카드가 돌아와요. 마음 크기는 세 칸이에요.',
      base: '모두 놓은 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '나무젓가락처럼 헷갈리는 물건과 물건이 아닌 함정 카드를 골라내야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 비싼 물건은 오래 쓰고 싼 물건은 버린다고 여긴다 → 값이 아니라 "다시 쓸 수 있나"로 가른다고 되짚는다. ② 휴지·물티슈를 "다시 쓸 수 있다"고 우긴다 → 한 번 닦은 물티슈를 보여 주며 다시 쓸지 묻는다. ③ 약속·날씨처럼 물건이 아닌 것까지 넣는다 → "손으로 들 수 있나요?"를 묻는다. 학생이 가져온 물건은 사진을 찍지 않고 짝끼리 말로만 소개한다.',
  }));

  lessons.push(L(2, {
    title: '교실을 둘러보며 물건 오래 쓰는 방법 찾기',
    objective: '교실 물건을 둘러보고 오래 쓰는 물건마다 오래 쓰는 방법을 골라 이을 수 있다.',
    illustration: ART('a paper classroom corner with a crayon box, indoor shoes, a picture book and an eraser, small sticky notes stuck on each object', '교실 물건 탐험', [
      { motif: 'house', x: 120, y: 214, color: 'sky' }, { motif: 'tree', x: 370, y: 214 }, { motif: 'star', x: 300, y: 90, s: 0.6 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"우리 교실에서 가장 오래된 물건은 무엇일까요? 선생님 책상? 칠판?" 학생들이 손가락으로 가리키게 한다. 시연 단추로 \'크레파스\'에 \'상자에 눕혀 넣어요\' 카드가 이어지는 모습을 보여 준다. "오늘은 교실 물건을 오래 쓰는 방법을 찾아요." 지난 시간 나눈 \'오래 쓰는 물건\'을 두세 개 다시 말하게 한다.',
        student: '교실에서 오래 쓰는 물건을 세 가지 찾아 손가락으로 가리켜 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '오래 쓰는 방법', slots: [{ id: 's1', label: '크레파스' }], cards: ['다 쓰면 상자에 눕혀 넣어요', '바닥에 굴려 둬요'], shuffle: false, hint1: '물건이 망가지는 까닭을 떠올리고, 그 일을 막는 방법을 찾아 이어요.' }, sequence: [{ match: { s1: '다 쓰면 상자에 눕혀 넣어요' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 교실 물건 탐험', minutes: 12, tool: 'mindmap',
            teacher: '"모둠마다 맡은 곳을 둘러보고, 오래 쓰는 물건에 붙임쪽지를 붙여요. 3분이에요." 사물함·학급문고·청소함처럼 모둠별 구역을 정해 준다. 돌아와서 붙인 물건을 판의 카드로 나누게 한다. 교실 벽에 붙인 풍선 장식처럼 행사가 끝나면 버리는 것도 있다는 것을 짚는다.',
            task: '맡은 곳을 둘러보고 오래 쓰는 물건에 붙임쪽지를 붙인 뒤, 판에서 물건을 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '모둠이 맡은 곳을 둘러보며 오래 쓰는 물건에 붙임쪽지를 붙였으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '교실 앞쪽 물건을 나누어 보세요.', toolOptions: { topic: '교실 앞쪽', slots: ['오래 써요', '한 번 쓰고 버려요'], cards: ['칠판지우개', '선생님 책상', '행사 풍선', '일회용 비닐장갑'] },
                target: { sort: { '오래 써요': ['칠판지우개', '선생님 책상'], '한 번 쓰고 버려요': ['행사 풍선', '일회용 비닐장갑'] } }, difficulty: 0.1 },
              { prompt: '교실 뒤쪽 물건을 나누어 보세요.', toolOptions: { topic: '교실 뒤쪽', slots: ['오래 써요', '한 번 쓰고 버려요'], cards: ['학급문고 책', '청소 빗자루', '포장 비닐', '종이 접시'] },
                target: { sort: { '오래 써요': ['학급문고 책', '청소 빗자루'], '한 번 쓰고 버려요': ['포장 비닐', '종이 접시'] } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['학급문고 책', '청소 빗자루', '포장 비닐', '종이 접시', '쉬는 시간'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 오래 쓰는 방법 잇기', minutes: 14, tool: 'mindmap',
            teacher: '"크레파스는 왜 부러질까요? 떨어뜨려서, 세게 눌러서." 물건이 망가지는 까닭을 먼저 말하게 한 뒤 막는 방법을 찾게 한다. 이은 방법은 실제로 그 자리에서 해 보게 한다(실내화를 신발장에 가지런히 넣기, 책장을 손가락 끝으로 넘기기).',
            task: '물건마다 망가지는 까닭을 떠올리고, 오래 쓰는 방법 카드를 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '물건마다 오래 쓰는 방법을 이어 보세요.', toolOptions: { mode: 'match', topic: '오래 쓰는 방법', hint1: '물건이 망가지는 까닭을 떠올리고, 그 일을 막는 방법을 찾아 이어요.', slots: [{ id: 's1', label: '학급문고 책' }, { id: 's2', label: '실내화' }], cards: ['책장을 손끝으로 살살 넘겨요', '주말에 집에 가져가 빨아요'] },
                target: { match: { s1: '책장을 손끝으로 살살 넘겨요', s2: '주말에 집에 가져가 빨아요' } }, difficulty: 0.1 },
              { prompt: '세 가지 물건에 오래 쓰는 방법을 이어 보세요.', toolOptions: { mode: 'match', topic: '오래 쓰는 방법', hint1: '물건이 망가지는 까닭을 떠올리고, 그 일을 막는 방법을 찾아 이어요.', slots: [{ id: 's1', label: '풀' }, { id: 's2', label: '사인펜' }, { id: 's3', label: '가위' }], cards: ['쓰고 나면 뚜껑을 돌려 닫아요', '뚜껑을 딸깍 소리 나게 꽂아요', '종이만 자르고 칼집에 넣어요'] },
                target: { match: { s1: '쓰고 나면 뚜껑을 돌려 닫아요', s2: '뚜껑을 딸깍 소리 나게 꽂아요', s3: '종이만 자르고 칼집에 넣어요' } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['쓰고 나면 뚜껑을 돌려 닫아요', '뚜껑을 딸깍 소리 나게 꽂아요', '종이만 자르고 칼집에 넣어요', '새것으로 자주 바꿔요'] } } } },
              { prompt: '물건을 오래 쓰게 하는 행동만 골라 보세요.', toolOptions: { mode: 'pick', basket: '오래 쓰게 하는 행동', cards: ['색연필을 깎아서 써요', '공을 진흙탕에 두고 와요', '자를 책상 속에 넣어요', '지우개를 잘게 잘라 던져요'] },
                target: { pick: ['색연필을 깎아서 써요', '자를 책상 속에 넣어요'] }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 찾은 방법 가운데 내일부터 우리 반이 꼭 해 볼 것은 무엇일까요?" 두세 가지를 칠판에 적는다. 출구 2번에서 \'새것으로 바꿔요\'를 고른 학생에게는 "새것을 사면 헌것은 어디로 갈까요?"를 묻는다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '오래 쓰는 방법', slots: [{ id: 'e1', label: '크레파스' }, { id: 'e2', label: '책가방' }], cards: ['다 쓰면 상자에 눕혀 넣어요', '물건을 넘치게 넣지 않아요'] }, prompt: '두 물건에 오래 쓰는 방법을 이어 보세요.', target: { match: { e1: '다 쓰면 상자에 눕혀 넣어요', e2: '물건을 넘치게 넣지 않아요' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '사인펜을 오래 쓰려면 어떻게 할까요?', options: ['뚜껑을 열어 둬요', '뚜껑을 꼭 닫아요', '새것으로 바꿔요'], answer: 1, difficulty: 0.1, explain: '뚜껑을 열어 두면 잉크가 말라 금방 못 써요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '교실 물건 오래 쓰기',
      items: [
        { type: 'figure', wide: true, prompt: '물건과 오래 쓰는 방법을 선으로 이으세요.', tool: 'mindmap', figures: [{ options: { mode: 'match', topic: '오래 쓰는 방법', slots: [{ id: 's1', label: '풀' }, { id: 's2', label: '책' }], cards: ['뚜껑을 돌려 닫아요', '책장을 살살 넘겨요'] }, caption: '' }], answer: '풀-뚜껑을 돌려 닫아요, 책-책장을 살살 넘겨요' },
        { type: 'choice', prompt: '물건을 오래 쓰게 하는 행동에 ○ 하세요.', options: ['연필을 깎아 써요', '지우개를 잘라 던져요', '공을 밖에 두고 와요'], answer: '연필을 깎아 써요' },
        { type: 'table', prompt: '모둠이 찾은 오래 쓰는 물건과 방법을 쓰세요.', columns: ['물건', '오래 쓰는 방법'], rows: 2 },
        { type: 'short', prompt: '내일부터 내가 할 방법을 하나 쓰세요.' },
      ],
      easy: {
        note: '물건이 왜 망가지는지 먼저 생각해요.',
        items: [
          { type: 'choice', prompt: '사인펜을 오래 쓰는 방법에 ○ 하세요.', options: ['뚜껑을 닫아요', '뚜껑을 열어 둬요'], answer: '뚜껑을 닫아요' },
          { type: 'choice', prompt: '책을 오래 보는 방법에 ○ 하세요.', options: ['살살 넘겨요', '세게 접어요'], answer: '살살 넘겨요' },
          { type: 'draw', prompt: '물건을 아껴 쓰는 내 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '모두 이은 뒤 확인을 눌러요. 이은 방법을 그 자리에서 해 봐요.',
      challenge: '물건이 아닌 카드와 \'새것으로 자주 바꿔요\' 같은 함정 카드를 골라내요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 망가지면 새로 사면 된다고 여긴다(새 물건이 언제나 좋다는 오개념) → 헌 물건이 어디로 가는지 묻고 4차시 분리배출로 잇는다. ② 둘러보기에서 장난을 친다 → 구역과 시간(3분)을 먼저 정하고 종으로 모은다. ③ 방법을 말만 하고 하지 않는다 → 이은 방법을 그 자리에서 몸으로 해 보게 한다.',
  }));

  lessons.push(L(3, {
    title: '한 번 쓰는 물건 대신 쓸 물건 잇기',
    objective: '한 번 쓰고 버리는 물건 대신 쓸 수 있는 오래 쓰는 물건을 잇고, 오래 쓰면 좋은 점을 말할 수 있다.',
    illustration: ART('paper cups and plastic bags on one side and a reusable bottle, a cloth bag and a handkerchief on the other side, a child holding the cloth bag with a smile', '대신 써 볼까요?', [
      { motif: 'tree', x: 110, y: 214 }, { motif: 'flower', x: 380, y: 228, color: 'rose' }, { motif: 'leaf', x: 300, y: 100 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"우리 반이 하루에 종이컵을 하나씩 쓰면 한 달에 몇 개를 버릴까요?" 종이컵 25개를 쌓아 보이며 "이게 하루치예요"라고 말한다. 시연 단추로 \'종이컵\' 옆에 \'내 물병\'이 놓이는 모습을 보여 준다. "한 번 쓰는 물건 대신 쓸 물건이 있을까요?"',
        student: '오늘 내가 한 번 쓰고 버린 물건을 하나 떠올려 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '대신 쓸 물건', slots: [{ id: 's1', label: '종이컵' }], cards: ['내 물병', '비닐봉지'], shuffle: false, hint1: '같은 일을 하면서 씻거나 접어서 다시 쓸 수 있는 물건을 찾아요.' }, sequence: [{ match: { s1: '내 물병' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 대신 쓸 물건 잇기', minutes: 13, tool: 'mindmap',
            teacher: '"비닐봉지가 하던 일은 무엇이었지요? 물건을 담아 들고 가는 일이에요. 그 일을 하면서 다시 쓸 수 있는 물건은?" 하던 일을 먼저 말하고 대신 쓸 물건을 찾게 한다. 같은 일을 못 하는 물건(예: 우산으로 장보기)을 잇는 학생에게 "그걸로 물건을 담을 수 있을까요?"라고 묻는다.',
            task: '한 번 쓰는 물건이 하던 일을 떠올리고, 그 일을 하면서 다시 쓸 수 있는 물건을 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '한 번 쓰는 물건 대신 쓸 물건을 이어 보세요.', toolOptions: { mode: 'match', topic: '대신 쓸 물건', hint1: '같은 일을 하면서 씻거나 접어서 다시 쓸 수 있는 물건을 찾아요.', slots: [{ id: 's1', label: '비닐봉지' }, { id: 's2', label: '물티슈' }], cards: ['천 장바구니', '손수건'] },
                target: { match: { s1: '천 장바구니', s2: '손수건' } }, difficulty: 0.05 },
              { prompt: '소풍 때 쓰는 물건 대신 쓸 것을 이어 보세요.', toolOptions: { mode: 'match', topic: '소풍 도시락', hint1: '같은 일을 하면서 씻어서 다시 쓸 수 있는 물건을 찾아요.', slots: [{ id: 's1', label: '나무젓가락' }, { id: 's2', label: '은박 도시락' }, { id: 's3', label: '페트병 물' }], cards: ['내 수저', '뚜껑 있는 도시락통', '내 물병'] },
                target: { match: { s1: '내 수저', s2: '뚜껑 있는 도시락통', s3: '내 물병' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['내 수저', '뚜껑 있는 도시락통', '내 물병', '일회용 비닐장갑'] } } } },
              { prompt: '생일잔치 물건 대신 쓸 것을 이어 보세요.', toolOptions: { mode: 'match', topic: '생일잔치', hint1: '같은 일을 하면서 다시 쓸 수 있는 물건을 찾아요.', slots: [{ id: 's1', label: '종이 접시' }, { id: 's2', label: '포장지' }], cards: ['씻어 쓰는 그릇', '다시 쓰는 천 보자기'] },
                target: { match: { s1: '씻어 쓰는 그릇', s2: '다시 쓰는 천 보자기' } }, difficulty: 0.15,
                predict: { q: '보자기로 선물을 싸면 풀고 나서 어떻게 될까요?', options: ['버려요', '다시 써요'], answer: 1 },
                conclude: '보자기는 풀어서 접어 두면 다음 선물을 또 쌀 수 있어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 오래 쓰면 무엇이 좋을까', minutes: 13, tool: 'mindmap',
            teacher: '"물병을 3년 쓰면 무엇이 달라질까요?" 쓰레기가 줄고, 돈을 아끼고, 정이 든다는 세 가지를 칠판에 그림으로 붙인다. "새 물건을 자주 사면 더 좋지 않아요?"라는 학생에게 a2의 마지막 문항(지우개 사기)을 함께 골라 보게 한다.',
            task: '오래 쓰면 좋은 점을 골라 바구니에 넣고, 새것을 사고 싶을 때 어떻게 할지 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '물건을 오래 쓰면 좋은 점만 골라 보세요.', toolOptions: { mode: 'pick', basket: '오래 쓰면 좋은 점', cards: ['쓰레기가 줄어요', '돈을 아껴요', '버리는 물건이 늘어요', '날마다 새것을 사요'] },
                target: { pick: ['쓰레기가 줄어요', '돈을 아껴요'] }, difficulty: 0.1,
                levels: { challenge: { prompt: '물건을 오래 쓰면 좋은 점을 모두 골라 보세요.', toolOptions: { cards: ['쓰레기가 줄어요', '돈을 아껴요', '물건에 정이 들어요', '버리는 물건이 늘어요', '날마다 새것을 사요'] }, target: { pick: ['쓰레기가 줄어요', '돈을 아껴요', '물건에 정이 들어요'] } } } },
              { prompt: '좋은 점과 그렇게 되는 까닭을 이어 보세요.', toolOptions: { mode: 'match', topic: '왜 좋을까?', hint1: '좋은 점을 읽고, 그렇게 되는 까닭을 말해 주는 카드를 찾아요.', slots: [{ id: 's1', label: '쓰레기가 줄어요' }, { id: 's2', label: '돈을 아껴요' }], cards: ['버리는 물건이 적으니까요', '새로 살 일이 적으니까요'] },
                target: { match: { s1: '버리는 물건이 적으니까요', s2: '새로 살 일이 적으니까요' } }, difficulty: 0.2 },
              { prompt: '준호 지우개가 반이나 남았는데 새 지우개가 사고 싶어요. 좋은 생각만 골라 보세요.', toolOptions: { mode: 'pick', basket: '좋은 생각', cards: ['남은 지우개를 끝까지 써요', '바로 새것을 사요', '헌 지우개를 잘라 버려요', '다 쓰면 그때 사요'] },
                target: { pick: ['남은 지우개를 끝까지 써요', '다 쓰면 그때 사요'] }, difficulty: 0.15 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"이번 주에 한 번 쓰는 물건 하나를 대신 쓸 물건으로 바꿔 본다면 무엇을 바꿀까요?" 두세 명이 말하게 하고 알림장에 적게 한다. 출구 2번을 틀린 학생에게는 새로 산 물건 뒤에 버려지는 헌 물건을 떠올리게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '대신 쓸 물건', slots: [{ id: 'e1', label: '일회용 컵' }, { id: 'e2', label: '종이 냅킨' }], cards: ['씻어 쓰는 컵', '빨아 쓰는 손수건'] }, prompt: '두 물건 대신 쓸 것을 이어 보세요.', target: { match: { e1: '씻어 쓰는 컵', e2: '빨아 쓰는 손수건' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '새 물건을 자주 사면 언제나 좋을까요?', options: ['네, 언제나 좋아요', '아니요, 버리는 물건이 늘어요'], answer: 1, difficulty: 0.15, explain: '새것을 살 때마다 아직 쓸 수 있는 헌 물건이 버려질 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '대신 써 볼까요',
      items: [
        { type: 'figure', wide: true, prompt: '한 번 쓰는 물건과 대신 쓸 물건을 선으로 이으세요.', tool: 'mindmap', figures: [{ options: { mode: 'match', topic: '대신 쓸 물건', slots: [{ id: 's1', label: '비닐봉지' }, { id: 's2', label: '나무젓가락' }], cards: ['내 수저', '천 장바구니'] }, caption: '' }], answer: '비닐봉지-천 장바구니, 나무젓가락-내 수저' },
        { type: 'check', prompt: '물건을 오래 쓰면 좋은 점에 모두 ✓ 하세요.', options: ['쓰레기가 줄어요', '돈을 아껴요', '쓰레기가 늘어요'] },
        { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '종이컵 대신 내 ___을 들고 다녀요.', answer: '물병(컵)' },
        { type: 'short', prompt: '이번 주에 바꿔 볼 물건을 하나 쓰세요.' },
      ],
      easy: {
        note: '그 물건이 하던 일을 먼저 떠올려요.',
        items: [
          { type: 'choice', prompt: '비닐봉지 대신 쓸 물건에 ○ 하세요.', options: ['천 장바구니', '종이컵'], answer: '천 장바구니' },
          { type: 'choice', prompt: '오래 쓰면 좋은 점에 ○ 하세요.', options: ['쓰레기가 줄어요', '쓰레기가 늘어요'], answer: '쓰레기가 줄어요' },
          { type: 'draw', prompt: '내가 대신 쓸 물건을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '모두 이은 뒤 확인을 눌러요. 물건이 하던 일을 소리 내어 말해요.',
      challenge: '함정 카드를 골라내고, 오래 쓰면 좋은 점을 세 가지 모두 찾아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 새 물건이 언제나 좋다고 여긴다 → 새것 뒤에 버려지는 헌것을 떠올리게 한다. ② 대신 쓸 물건을 하던 일과 상관없이 고른다 → "그 물건으로 그 일을 할 수 있나요?"를 묻는다. ③ 대신 쓰는 물건을 새로 사야 한다고 여긴다 → 집에 있는 물병·손수건을 쓰는 것이 먼저라는 것을 말해 준다. 종이컵 탑은 행사 뒤 미술 재료로 다시 쓴다.',
  }));

  lessons.push(L(4, {
    title: '버린 물건이 다시 쓰이는 길 따라가기',
    objective: '버린 물건을 종이·플라스틱·캔으로 나누어 내놓고, 버린 종이가 새 종이가 되는 차례를 놓을 수 있다.',
    illustration: ART('three colorful paper recycling bins for paper, plastic and cans, a child dropping a rinsed bottle into one, a small recycling truck nearby', '어디로 갈까요?', [
      { motif: 'house', x: 110, y: 214, color: 'mint' }, { motif: 'tree', x: 380, y: 214 }, { motif: 'cloud', x: 300, y: 80, s: 0.6 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"이 우유를 다 마신 페트병, 버리면 끝일까요?" 깨끗이 헹군 페트병과 신문지, 빈 캔을 꺼내 보인다. 시연 단추로 신문지가 \'종이\' 칸으로 가는 모습을 보여 준다. "나누어 내놓으면 다시 쓰이고, 섞어 내놓으면 쓰레기가 돼요." 우리 학교 분리수거함이 어디 있는지 묻는다.',
        student: '우리 집에서 분리해서 내놓는 것을 하나 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '분리해서 내놓기', slots: ['종이', '플라스틱', '캔'], cards: ['신문지', '페트병'], shuffle: false }, sequence: [{ sort: { '종이': ['신문지'], '플라스틱': ['페트병'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 분리해서 내놓기', minutes: 14, tool: 'mindmap',
            teacher: '"이 물건은 무엇으로 만들었나요? 찢어지면 종이, 말랑하게 구겨지면 플라스틱, 차갑고 반짝이면 캔이에요." 진짜 물건을 손으로 만져 보게 한 뒤 카드를 나누게 한다. 먹다 남은 음식이 묻은 것은 헹궈서 내놓아야 다시 쓰인다는 것을 짚는다. 실제 분리배출은 우리 동네 안내를 따른다고 덧붙인다.',
            task: '물건이 무엇으로 만들어졌는지 생각하며 종이·플라스틱·캔 칸에 나누어 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '교실에서 나온 물건을 분리해서 놓아 보세요.', toolOptions: { topic: '분리해서 내놓기', slots: ['종이', '플라스틱', '캔'], cards: ['신문지', '헌 공책', '페트병', '음료수 캔'] },
                target: { sort: { '종이': ['신문지', '헌 공책'], '플라스틱': ['페트병'], '캔': ['음료수 캔'] } }, difficulty: 0.1 },
              { prompt: '부엌에서 나온 물건을 분리해서 놓아 보세요.', toolOptions: { topic: '분리해서 내놓기', slots: ['종이', '플라스틱', '캔'], cards: ['과자 상자', '요구르트병', '참치 캔', '세제 통'] },
                target: { sort: { '종이': ['과자 상자'], '플라스틱': ['요구르트병', '세제 통'], '캔': ['참치 캔'] } }, difficulty: 0.15 },
              { prompt: '분리해서 내놓을 물건만 칸에 놓아 보세요. 다시 쓰일 수 없는 것은 남겨요.', toolOptions: { topic: '분리해서 내놓기', slots: ['종이', '플라스틱', '캔'], cards: ['택배 상자', '샴푸 통', '음료수 캔', '코를 푼 휴지'] },
                target: { sort: { '종이': ['택배 상자'], '플라스틱': ['샴푸 통'], '캔': ['음료수 캔'] } }, difficulty: 0.25,
                predict: { q: '코를 푼 휴지는 종이 칸에 넣을까요?', options: ['넣어요', '안 넣어요'], answer: 1 },
                conclude: '더러워진 휴지는 다시 종이가 될 수 없어 일반 쓰레기로 버려요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 다시 쓰이기까지의 차례', minutes: 12, tool: 'story',
            teacher: '"헌 공책이 다시 새 종이가 되려면 어떤 길을 지나갈까요?" 카드를 하나씩 읽고 "그다음에는?"을 묻는다. 페트병 내놓는 차례에서 헹구기와 상표 떼기는 무엇을 먼저 해도 된다는 것을 말해 준다. 공장에 가면 저절로 된다고 여기는 학생에게 첫 차례(내가 나누어 내놓기)를 짚게 한다.',
            task: '버린 물건이 다시 쓰이기까지의 일을 차례대로 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '헌 공책이 새 종이가 되는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['종이끼리 모아 내놓아요', '수거차가 실어 가요', '공장에서 물에 풀어요', '새 종이로 만들어요'] },
                target: { order: ['종이끼리 모아 내놓아요', '수거차가 실어 가요', '공장에서 물에 풀어요', '새 종이로 만들어요'] }, difficulty: 0.15 },
              { prompt: '페트병을 내놓는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['남은 물을 비워요', '물로 헹궈요', '상표 비닐을 떼요', '납작하게 눌러 내놓아요'] },
                target: { order: ['남은 물을 비워요', ['물로 헹궈요', '상표 비닐을 떼요'], '납작하게 눌러 내놓아요'] }, difficulty: 0.2,
                hints: ['먼저 병 안을 비워야 다른 일을 할 수 있어요. 내놓는 일은 맨 끝이에요.', '병 안에 물이 남아 있으면 헹구거나 누를 수 없어요. 첫 자리를 다시 봐요.', '비우기 → 헹구기·상표 떼기(둘은 어느 것 먼저도 돼요) → 눌러 내놓기예요.'] },
              { prompt: '음료수 캔이 다시 쓰이는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['캔을 헹궈 캔 칸에 넣어요', '모은 캔을 공장으로 옮겨요', '캔을 녹여요', '새 캔으로 만들어요'] },
                target: { order: ['캔을 헹궈 캔 칸에 넣어요', '모은 캔을 공장으로 옮겨요', '캔을 녹여요', '새 캔으로 만들어요'] }, difficulty: 0.2,
                levels: { easy: { prompt: '음료수 캔이 다시 쓰이는 차례대로 세 장을 놓아 보세요.', toolOptions: { cards: ['캔을 헹궈 캔 칸에 넣어요', '캔을 녹여요', '새 캔으로 만들어요'] }, target: { order: ['캔을 헹궈 캔 칸에 넣어요', '캔을 녹여요', '새 캔으로 만들어요'] } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"다시 쓰이는 길의 맨 처음은 누가 하는 일이었나요?" 학생들이 \'나\'라고 답하게 한다. 교실 분리수거함 앞에 오늘 나눈 세 칸 이름표를 붙인다. 출구 1번을 틀린 학생은 진짜 물건을 다시 만져 보게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '분리해서 내놓기', slots: ['종이', '플라스틱', '캔'], cards: ['달걀 종이 판', '물약 통', '꽁치 캔'] }, prompt: '세 물건을 알맞은 칸에 놓아 보세요.', target: { sort: { '종이': ['달걀 종이 판'], '플라스틱': ['물약 통'], '캔': ['꽁치 캔'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '페트병을 내놓기 전에 맨 먼저 할 일은 무엇일까요?', options: ['남은 물을 비워요', '납작하게 눌러요', '그냥 내놓아요'], answer: 0, difficulty: 0.15, explain: '물이 남아 있으면 헹구거나 누를 수 없어요. 먼저 비워요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '버린 물건이 가는 길',
      items: [
        { type: 'table', prompt: '물건 이름을 알맞은 칸에 쓰세요. (신문지, 페트병, 음료수 캔, 과자 상자)', columns: ['종이', '플라스틱', '캔'], rows: 2 },
        { type: 'figure', wide: true, prompt: '헌 공책이 새 종이가 되는 차례대로 1, 2, 3, 4를 쓰세요.', tool: 'story', figures: [{ options: { mode: 'order', cards: ['공장에서 물에 풀어요', '종이끼리 모아 내놓아요', '새 종이로 만들어요', '수거차가 실어 가요'], shuffle: false }, caption: '' }], answer: '종이끼리 모아 내놓아요 → 수거차가 실어 가요 → 공장에서 물에 풀어요 → 새 종이로 만들어요' },
        { type: 'choice', prompt: '종이 칸에 넣지 않는 것에 ○ 하세요.', options: ['택배 상자', '코를 푼 휴지', '헌 공책'], answer: '코를 푼 휴지' },
        { type: 'short', prompt: '우리 집에서 분리해서 내놓는 물건을 하나 쓰세요.' },
      ],
      easy: {
        note: '찢어지면 종이, 말랑하게 구겨지면 플라스틱이에요.',
        items: [
          { type: 'choice', prompt: '종이 칸에 넣을 것에 ○ 하세요.', options: ['신문지', '음료수 캔'], answer: '신문지' },
          { type: 'choice', prompt: '페트병은 어느 칸일까요?', options: ['플라스틱', '종이'], answer: '플라스틱' },
          { type: 'draw', prompt: '분리해서 내놓는 내 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 틀리면 카드가 돌아와요. 캔의 길은 세 장만 놓아요.',
      base: '모두 놓은 뒤 확인을 눌러요. 진짜 물건을 만져 보며 나누어요.',
      challenge: '다시 쓰일 수 없는 함정 카드를 골라내고, 차례가 바뀌어도 되는 자리를 찾아 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 버리면 저절로 다시 쓰인다고 여긴다 → 길의 첫 차례가 \'내가 나누어 내놓기\'라는 것을 짚는다. ② 종이로 겉을 싼 플라스틱처럼 섞인 물건을 헷갈린다 → 이 차시 카드에는 넣지 않았고, 실제로는 동네 안내를 따른다고 말한다. ③ 더러운 것도 내놓는다 → 헹군 병과 안 헹군 병의 냄새를 견주어 보인다. 캔은 가장자리가 날카로우니 교사가 미리 확인한 것만 만지게 한다.',
  }));

  // ───────────────────────── 5~8차시: 다시 쓰고 아끼고 고쳐 쓰기(바른 생활 실천) ─────────────────────────

  lessons.push(L(5, {
    title: '뒷면이 깨끗한 종이로 메모 수첩 만들기',
    objective: '뒷면이 깨끗한 종이를 골라 같은 크기로 접고 잘라 메모 수첩을 만들 수 있다.',
    illustration: ART('a stack of used papers with clean backs being folded, cut and clipped into a small handmade memo pad, a pair of child safety scissors beside it', '종이를 다시 써요', [
      { motif: 'leaf', x: 110, y: 100 }, { motif: 'tree', x: 380, y: 214 }, { motif: 'flower', x: 130, y: 228, color: 'buttercup' }]),
    safety: ['가위는 날을 닫아 손잡이 쪽으로 건네요.', '가위질할 때는 종이를 잡은 손가락이 날 앞에 오지 않게 해요.', '수첩을 묶는 큰 집게는 선생님과 함께 끼워요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"어제 받은 안내장, 다 읽고 나서 어디에 두었나요?" 교실 이면지 상자를 열어 보인다. "앞면은 다 썼지만 뒷면은 하얗지요? 이걸로 수첩을 만들어 볼 거예요." 시연 단추로 만드는 차례가 놓이는 모습을 보여 준다. 종이 한 장을 아껴도 소용없다는 학생에게 "우리 반 25명이 한 장씩 아끼면 몇 장일까요?"를 묻는다.',
        student: '이면지 상자에서 뒷면이 깨끗한 종이를 두 장 골라 봐요.',
        demo: { tool: 'kitchen', options: { mode: 'order', cards: ['뒷면이 깨끗한 종이를 모아요', '같은 크기로 접어 잘라요', '집게로 묶어요'], shuffle: false }, sequence: [{ order: ['뒷면이 깨끗한 종이를 모아요', '같은 크기로 접어 잘라요', '집게로 묶어요'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 메모 수첩 만들기 (실습)', minutes: 15, tool: 'kitchen',
            teacher: '"종이를 반으로 접고, 또 반으로 접으면 몇 칸이 생길까요? 네 칸이에요." 접은 선을 손톱으로 꾹 눌러 자국을 낸 뒤 그 선을 따라 자르게 한다. 수첩은 넉 장 정도면 충분하다. 다 만든 학생은 첫 장에 이름 대신 좋아하는 그림을 그려 내 것을 표시하게 한다. 자른 자투리는 버리지 말고 7차시 모자이크 상자에 모은다.',
            task: '수첩 만드는 차례를 정하고, 뒷면이 깨끗한 종이로 직접 수첩을 만들어요.',
            levels: CARD_LV,
            items: [
              { prompt: '메모 수첩을 만드는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['뒷면이 깨끗한 종이를 골라요', '두 번 접어 선을 꾹 눌러요', '접은 선을 따라 잘라요', '가지런히 겹쳐 집게로 묶어요'] },
                target: { order: ['뒷면이 깨끗한 종이를 골라요', '두 번 접어 선을 꾹 눌러요', '접은 선을 따라 잘라요', '가지런히 겹쳐 집게로 묶어요'] }, difficulty: 0.15,
                predict: { q: '종이를 반으로 두 번 접으면 몇 칸이 생길까요?', options: ['두 칸', '네 칸', '여덟 칸'], answer: 1 },
                conclude: '반으로 두 번 접으면 같은 크기 네 칸이 생겨요.' },
              { prompt: '수첩 종이로 쓸 수 있는 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '수첩 종이', cards: ['뒷면이 하얀 안내장', '다 쓴 연습장의 빈 뒷장', '물에 젖어 번진 종이', '코를 푼 휴지'] },
                target: { pick: ['뒷면이 하얀 안내장', '다 쓴 연습장의 빈 뒷장'] }, difficulty: 0.1,
                hints: ['그 종이 뒷면에 글씨를 쓸 수 있을지 떠올려 봐요.', '젖거나 더러워진 종이에는 글씨를 쓸 수 있을까요? 고른 카드를 다시 봐요.', '깨끗한 뒷면이 남은 안내장과 연습장 뒷장만 골라요.'] },
              { prompt: '뒷면이 깨끗한 종이로 수첩을 만들었으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 남은 종이, 또 어디에 쓸까', minutes: 11, tool: 'mindmap',
            teacher: '"수첩을 만들고 남은 종이는 어떻게 할까요? 크기를 먼저 봐요." 큰 달력 종이와 손바닥만 한 조각을 들어 견주어 보인다. 크기에 따라 쓸 수 있는 곳이 다르다는 것을 짚는다. "작은 종이는 아무 데도 못 써요"라는 학생에게 자투리로 만든 모자이크 그림을 보여 준다.',
            task: '남은 종이의 크기와 상태를 보고 다시 쓸 곳을 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '종이의 크기를 보고 다시 쓸 곳을 이어 보세요.', toolOptions: { mode: 'match', topic: '남은 종이 다시 쓰기', hint1: '종이의 크기를 먼저 보고, 그 크기로 할 수 있는 일을 찾아 이어요.', slots: [{ id: 's1', label: '책을 쌀 만큼 큰 달력 종이' }, { id: 's2', label: '손바닥만 한 색종이 조각' }], cards: ['교과서 겉싸개', '모자이크 그림 조각'] },
                target: { match: { s1: '교과서 겉싸개', s2: '모자이크 그림 조각' } }, difficulty: 0.1 },
              { prompt: '다시 쓸 수 있는 종이와 다시 쓰기 어려운 종이로 나누어 보세요.', toolOptions: { topic: '남은 종이', slots: ['다시 쓸 수 있어요', '다시 쓰기 어려워요'], cards: ['포장지', '구겨진 신문지', '기름이 밴 피자 상자', '물감이 덕지덕지 묻은 종이'] },
                target: { sort: { '다시 쓸 수 있어요': ['포장지', '구겨진 신문지'], '다시 쓰기 어려워요': ['기름이 밴 피자 상자', '물감이 덕지덕지 묻은 종이'] } }, difficulty: 0.2,
                conclude: '구겨진 종이는 펴서 쓸 수 있지만, 기름이나 물감이 밴 종이는 다시 쓰기 어려워요.' },
              { prompt: '작은 종이 조각으로 할 수 있는 일만 골라 보세요.', toolOptions: { mode: 'pick', basket: '작은 조각으로 할 일', cards: ['모자이크 그림 붙이기', '작은 별 접기', '교실 바닥 덮기', '커다란 현수막 만들기'] },
                target: { pick: ['모자이크 그림 붙이기', '작은 별 접기'] }, difficulty: 0.15,
                levels: { challenge: { prompt: '작은 종이 조각으로 할 수 있는 일을 모두 골라 보세요.', toolOptions: { cards: ['모자이크 그림 붙이기', '작은 별 접기', '책갈피 만들기', '교실 바닥 덮기', '커다란 현수막 만들기'] }, target: { pick: ['모자이크 그림 붙이기', '작은 별 접기', '책갈피 만들기'] } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 만든 수첩은 어디에 쓰면 좋을까요?" 받아쓰기 연습, 알림장 메모처럼 쓸 곳을 두세 개 듣는다. 가위를 날을 닫아 제자리에 넣었는지 짝끼리 살핀다. 다음 시간에는 종이 말고 전기를 아끼는 방법을 찾는다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '이면지 상자에 넣을까?', slots: ['넣어요', '넣지 않아요'], cards: ['한 면만 쓴 학습지', '과자 부스러기가 묻은 휴지'] }, prompt: '두 종이를 알맞은 가지에 놓아 보세요.', target: { sort: { '넣어요': ['한 면만 쓴 학습지'], '넣지 않아요': ['과자 부스러기가 묻은 휴지'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '종이 한 장을 아끼는 일은 어떨까요?', options: ['아무 도움이 안 돼요', '모두 함께하면 많이 아껴요'], answer: 1, difficulty: 0.15, explain: '한 사람이 한 장씩이라도 반 전체가 하면 하루에 25장이 돼요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '종이 다시 쓰기',
      items: [
        { type: 'figure', wide: true, prompt: '수첩 만드는 차례대로 1, 2, 3, 4를 쓰세요.', tool: 'kitchen', figures: [{ options: { mode: 'order', cardW: 104, cardH: 100, cards: ['접은 선을 따라 잘라요', '뒷면이 깨끗한 종이를 골라요', '가지런히 겹쳐 묶어요', '두 번 접어 선을 눌러요'], shuffle: false }, caption: '' }], answer: '종이 고르기 → 두 번 접기 → 자르기 → 겹쳐 묶기' },
        { type: 'check', prompt: '다시 쓸 수 있는 종이에 모두 ✓ 하세요.', options: ['뒷면이 하얀 안내장', '포장지', '코를 푼 휴지'] },
        { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '종이를 반으로 두 번 접으면 ___ 칸이 생겨요.', answer: '네' },
        { type: 'short', prompt: '내 수첩을 어디에 쓸지 쓰세요.' },
      ],
      easy: {
        note: '뒷면에 글씨를 쓸 수 있으면 다시 쓸 수 있어요.',
        items: [
          { type: 'choice', prompt: '수첩 종이로 쓸 것에 ○ 하세요.', options: ['뒷면이 하얀 안내장', '젖은 종이'], answer: '뒷면이 하얀 안내장' },
          { type: 'choice', prompt: '작은 색종이 조각으로 할 일에 ○ 하세요.', options: ['모자이크 그림', '교과서 싸개'], answer: '모자이크 그림' },
          { type: 'draw', prompt: '내가 만든 수첩을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 틀리면 카드가 돌아와요. 수첩은 선생님이 접은 선을 미리 그어 준 종이로 만들어요.',
      base: '모두 놓은 뒤 확인을 눌러요. 수첩을 넉 장으로 만들어요.',
      challenge: '작은 조각으로 할 일을 세 가지 모두 찾고, 수첩 겉장을 포장지로 싸요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 작은 것을 아끼는 일은 소용없다고 여긴다 → 반 전체가 한 장씩 아끼면 얼마인지 함께 센다. ② 접은 선을 누르지 않아 비뚤게 자른다 → 손톱으로 꾹 누르는 시범을 보인다. ③ 개인정보가 적힌 안내장(이름·주소)을 수첩으로 쓴다 → 앞면에 개인 정보가 있는 종이는 쓰지 않는다고 미리 거른다. 가위가 서툰 학생에게는 둥근 날 안전 가위를 준다.',
  }));

  lessons.push(L(6, {
    title: '빈 교실의 불과 모니터 끄기 실천하기',
    objective: '교실을 비울 때 전기를 아끼는 일을 골라 표시하고, 우리 반 전기 지킴이 일을 하나 정해 실천할 수 있다.',
    illustration: ART('an empty paper classroom at recess with ceiling lights and a monitor glowing, a child reaching for the light switch with a smile', '불을 꺼요', [
      { motif: 'house', x: 110, y: 214, color: 'buttercup' }, { motif: 'star', x: 300, y: 84, s: 0.6 }, { motif: 'tree', x: 390, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"체육 시간에 우리가 운동장에 있을 때, 교실 불은 누구를 위해 켜져 있었을까요?" 실제로 교실 전등 스위치를 가리킨다. 시연 단추로 \'전등을 꺼요\' 항목에 표시가 되는 모습을 보여 준다. "전기는 발전소에서 많은 연료를 써서 만들어 와요. 아무도 없는 곳의 전기는 그냥 버려져요." 스위치 한 번은 소용없다는 학생에게는 학교 전체 교실 수를 떠올리게 한다.',
        student: '우리 교실에서 전기로 움직이는 물건을 세 가지 찾아봐요.',
        demo: { tool: 'kitchen', options: { mode: 'checklist', title: '교실을 비울 때', items: [{ id: 'light', text: '전등을 꺼요' }, { id: 'tv', text: '화면을 켜 둬요' }] }, sequence: [{ checklist: ['light'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 전기를 아끼는 일 표시하기', minutes: 13, tool: 'kitchen',
            teacher: '"이 일을 하면 전기가 줄까요, 그대로일까요?" 항목을 하나씩 읽고 손으로 엄지를 올리고 내리게 한다. \'창문을 열어 둬요\'는 전기와 상관없다는 것을 짚는다. 컴퓨터는 반드시 \'끄기\' 단추로 끈다는 것을 덧붙인다(플러그를 바로 뽑지 않는다).',
            task: '상황마다 전기를 아끼려면 꼭 해야 할 일에만 표시해요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '체육 시간이라 교실을 비워요. 전기를 아끼는 일에만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '교실을 비울 때', items: [{ id: 'light', text: '전등을 꺼요' }, { id: 'tv', text: '텔레비전을 꺼요' }, { id: 'window', text: '창문을 열어 둬요' }, { id: 'fan', text: '선풍기를 세게 틀어 둬요' }] },
                target: { checklist: ['light', 'tv'] }, difficulty: 0.1,
                levels: { easy: { prompt: '체육 시간이라 교실을 비워요. 전기를 아끼는 일 두 가지에 표시해 보세요.' } } },
              { prompt: '컴퓨터 시간이 끝났어요. 전기를 아끼는 일에만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '컴퓨터 시간이 끝나면', items: [{ id: 'off', text: '컴퓨터를 끄기 단추로 꺼요' }, { id: 'mon', text: '모니터 단추를 꺼요' }, { id: 'game', text: '게임 화면을 켜 둬요' }, { id: 'chair', text: '의자를 넣어요' }] },
                target: { checklist: ['off', 'mon'] }, difficulty: 0.15,
                levels: { easy: { prompt: '컴퓨터 시간이 끝났어요. 전기를 아끼는 일 두 가지에 표시해 보세요.' } },
                hints: ['그 일을 하면 전기가 쓰이지 않게 되는지 하나씩 따져 봐요.', '의자를 넣는 일은 좋은 일이지만, 전기가 줄어드는 일일까요?', '컴퓨터를 끄기 단추로 끄고 모니터를 끄는 두 가지에만 표시해요.'] },
              { prompt: '집에 가기 전이에요. 전기를 아끼는 일에만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '집에 가기 전에', items: [{ id: 'light', text: '전등을 꺼요' }, { id: 'heater', text: '난방기를 꺼요' }, { id: 'charge', text: '다 찬 충전기를 뽑아요' }, { id: 'bag', text: '가방을 챙겨요' }, { id: 'open', text: '교실 문을 열어 둬요' }] },
                target: { checklist: ['light', 'heater', 'charge'] }, difficulty: 0.2,
                levels: { easy: { prompt: '집에 가기 전이에요. 전기를 아끼는 일에만 표시해 보세요. (두 가지)', toolOptions: { items: [{ id: 'light', text: '전등을 꺼요' }, { id: 'heater', text: '난방기를 꺼요' }, { id: 'bag', text: '가방을 챙겨요' }] }, target: { checklist: ['light', 'heater'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 전기 지킴이가 되어 보기', minutes: 13, tool: 'emotion',
            teacher: '"아무도 없는 교실에 불이 켜져 있어요. 내가 마지막으로 나간다면?" 결과 칸을 소리 내어 읽게 한다. 우리 반 \'전기 지킴이\' 일(전등·모니터·창가 블라인드 확인)을 한 가지씩 정해 이번 주 동안 맡게 한다. 지킴이가 혼자 하는 일이 아니라 모두의 일이라는 것을 덧붙인다.',
            task: '상황에서 어떻게 할지 고르고, 우리 반 전기 지킴이 일을 하나 맡아 실천해요.',
            levels: MOOD_LV,
            items: [
              { prompt: '쉬는 시간, 아무도 없는 과학실에 불이 켜져 있어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '쉬는 시간에 지나가다 보니 아무도 없는 과학실에 불이 모두 켜져 있어요.', choices: [
                { id: 'pass', text: '내 교실이 아니니 그냥 가요', result: '쉬는 시간 내내 전기가 버려져요.', mood: '걱정', why: '내 교실이 아니어도 전기는 모두가 함께 쓰는 것이에요.' },
                { id: 'tell', text: '선생님께 알리고 꺼도 되는지 물어요', result: '선생님이 고맙다며 함께 불을 꺼요.', mood: '뿌듯함' },
                { id: 'play', text: '스위치를 여러 번 켰다 꺼요', result: '장난으로 스위치가 고장 날 수 있어요.', mood: '걱정', why: '스위치를 장난으로 누르면 어떻게 될까요?' }] }, target: { choice: 'tell' }, difficulty: 0.1 },
              { prompt: '에어컨을 켰는데 창문이 활짝 열려 있어요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '하준', situation: '더운 날 에어컨을 켰는데, 하준이 자리 옆 창문이 활짝 열려 있어요.', choices: [
                { id: 'close', text: '창문을 닫아요', result: '시원한 바람이 밖으로 새지 않아요.', mood: '편안함' },
                { id: 'colder', text: '에어컨을 더 세게 틀어요', result: '전기를 더 써도 바람이 밖으로 새요.', mood: '걱정', why: '창문이 열려 있으면 시원한 바람은 어디로 갈까요?' }] }, target: { choice: 'close' }, difficulty: 0.15,
                predict: { q: '창문을 열고 에어컨을 켜면 교실이 빨리 시원해질까요?', options: ['빨리 시원해져요', '잘 안 시원해져요'], answer: 1 },
                conclude: '창문을 닫아야 시원한 바람이 교실에 머물러 전기를 덜 써요.' },
              { prompt: '내가 맡은 전기 지킴이 일을 오늘 한 번 해 보았으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"스위치 하나를 끄는 일은 도움이 될까요?" 출구 2번에서 \'도움이 안 돼요\'를 고른 학생이 있으면 학교 교실이 몇 개인지 함께 세어 본다. 칠판 옆에 \'전기 지킴이\' 표를 붙이고 이번 주에 확인한 날마다 붙임 딱지를 붙이기로 한다.',
        exitTicket: [
          { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '급식실에 갈 때', items: [{ id: 'light', text: '교실 전등을 꺼요' }, { id: 'tv', text: '화면을 꺼요' }, { id: 'line', text: '줄을 서요' }] }, prompt: '급식실에 가요. 전기를 아끼는 일에만 표시해 보세요.', target: { checklist: ['light', 'tv'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '내가 스위치 하나를 끄는 일은 어떨까요?', options: ['아무 도움이 안 돼요', '모두 하면 많이 아껴요'], answer: 1, difficulty: 0.1, explain: '교실마다 한 사람씩 끄면 학교 전체 전기가 많이 줄어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '전기를 아껴요',
      items: [
        { type: 'check', prompt: '교실을 비울 때 할 일에 모두 ✓ 하세요.', options: ['전등을 꺼요', '텔레비전을 꺼요', '선풍기를 세게 틀어요'] },
        { type: 'choice', prompt: '에어컨을 켤 때 창문은 어떻게 할까요?', options: ['닫아요', '활짝 열어요'], answer: '닫아요' },
        { type: 'table', prompt: '이번 주 전기 지킴이 일을 했으면 ○ 하세요.', columns: ['월', '화', '수', '목', '금'], cells: [['', '', '', '', '']] },
        { type: 'short', prompt: '내가 맡은 전기 지킴이 일을 쓰세요.' },
      ],
      easy: {
        note: '그 일을 하면 전기가 줄어드는지 생각해요.',
        items: [
          { type: 'choice', prompt: '교실을 비울 때 할 일에 ○ 하세요.', options: ['전등을 꺼요', '전등을 켜 둬요'], answer: '전등을 꺼요' },
          { type: 'choice', prompt: '아무도 없는 교실에 불이 켜져 있으면?', options: ['선생님께 알려요', '그냥 가요'], answer: '선생님께 알려요' },
          { type: 'draw', prompt: '전기를 아끼는 내 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '표시할 항목 수를 문항에 알려 주고, 마지막 목록은 세 가지로 줄었어요.',
      base: '상황마다 꼭 해야 할 일에만 표시해요.',
      challenge: '다 찬 충전기처럼 놓치기 쉬운 항목까지 찾고, 지킴이 일을 두 가지 맡아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 작은 것을 아끼는 일은 도움이 안 된다고 여긴다 → 학교 전체를 떠올리게 한다. ② 좋은 일(의자 넣기, 가방 챙기기)도 모두 전기 아끼기라고 표시한다 → "그 일을 하면 전기가 줄어요?"로 기준을 다시 세운다. ③ 플러그를 젖은 손으로 뽑으려 한다 → 플러그와 충전기는 마른 손으로, 어른과 함께 다룬다고 약속한다.',
  }));

  lessons.push(L(7, {
    title: '찢어진 책과 몽당연필 고쳐 쓰기',
    objective: '망가진 물건마다 고치는 방법을 잇고, 찢어진 책장이나 몽당연필을 직접 고쳐 다시 쓸 수 있다.',
    illustration: ART('a child mending a torn picture book page with clear tape and fitting a short pencil into a pencil extender, a little repair box beside them', '고쳐서 다시 써요', [
      { motif: 'house', x: 110, y: 214, color: 'lavender' }, { motif: 'flower', x: 380, y: 228 }, { motif: 'leaf', x: 300, y: 96 }]),
    safety: ['깨진 유리나 날카로운 물건은 고치지 말고 바로 선생님께 알려요.', '테이프 자르는 날에 손가락을 대지 않아요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"이 그림책은 한 장이 찢어졌어요. 버릴까요, 고칠까요?" 찢어진 학급문고 책과 손가락만 한 몽당연필을 보여 준다. 시연 단추로 \'찢어진 책장\'과 \'투명 테이프로 붙여요\'가 이어지는 모습을 보여 준다. "고쳐 쓰면 물건이 한 번 더 살아나요." 다쳐서 위험한 물건은 고치지 않는다는 약속을 먼저 말한다.',
        student: '내 물건 가운데 고치면 다시 쓸 수 있는 것을 하나 떠올려 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '고쳐 쓰기', slots: [{ id: 's1', label: '찢어진 책장' }], cards: ['투명 테이프로 붙여요', '쓰레기통에 버려요'], shuffle: false, hint1: '물건의 어디가 망가졌는지 보고, 그곳을 다시 쓸 수 있게 하는 방법을 찾아요.' }, sequence: [{ match: { s1: '투명 테이프로 붙여요' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 고치는 방법 잇기', minutes: 12, tool: 'mindmap',
            teacher: '"어디가 망가졌나요? 그곳만 고치면 다시 쓸 수 있을까요?" 망가진 곳을 먼저 말하고 방법을 고르게 한다. 깨진 유리컵을 \'고칠 수 있다\'고 고르는 학생에게는 다칠 수 있는 물건은 어른이 치운다는 것을 분명히 말한다.',
            task: '물건의 망가진 곳을 보고 알맞은 고치는 방법을 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '망가진 물건과 고치는 방법을 이어 보세요.', toolOptions: { mode: 'match', topic: '고쳐 쓰기', hint1: '물건의 어디가 망가졌는지 보고, 그곳을 다시 쓸 수 있게 하는 방법을 찾아요.', slots: [{ id: 's1', label: '짧아져 잡기 힘든 몽당연필' }, { id: 's2', label: '조금 찢어진 그림책' }], cards: ['연필 깍지를 끼워요', '투명 테이프로 붙여요'] },
                target: { match: { s1: '연필 깍지를 끼워요', s2: '투명 테이프로 붙여요' } }, difficulty: 0.05 },
              { prompt: '세 물건에 고치는 방법을 이어 보세요.', toolOptions: { mode: 'match', topic: '고쳐 쓰기', hint1: '물건의 어디가 망가졌는지 보고, 그곳을 다시 쓸 수 있게 하는 방법을 찾아요.', slots: [{ id: 's1', label: '단추가 떨어진 옷' }, { id: 's2', label: '바퀴가 빠진 장난감 차' }, { id: 's3', label: '끈이 끊어진 실내화 주머니' }], cards: ['어른과 단추를 달아요', '바퀴를 다시 끼워요', '끈을 묶어 이어요'] },
                target: { match: { s1: '어른과 단추를 달아요', s2: '바퀴를 다시 끼워요', s3: '끈을 묶어 이어요' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['어른과 단추를 달아요', '바퀴를 다시 끼워요', '끈을 묶어 이어요', '새것을 사요'] } } } },
              { prompt: '내가 고쳐서 다시 쓸 수 있는 물건만 골라 보세요.', toolOptions: { mode: 'pick', basket: '고쳐 쓸 물건', cards: ['표지가 떨어진 공책', '바퀴가 빠진 장난감 차', '깨져서 날카로운 유리컵', '찢어진 일회용 비닐장갑'] },
                target: { pick: ['표지가 떨어진 공책', '바퀴가 빠진 장난감 차'] }, difficulty: 0.2,
                predict: { q: '깨진 유리컵은 내가 고쳐도 될까요?', options: ['고쳐요', '어른께 알려요'], answer: 1 },
                conclude: '날카롭게 깨진 물건은 고치지 말고 어른께 알려 안전하게 치워요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 직접 고쳐 보기 (실습)', minutes: 14, tool: 'kitchen',
            teacher: '"테이프는 찢어진 길이보다 조금 길게 잘라요. 그리고 손바닥으로 쓱 눌러요." 학급문고에서 찢어진 책을 미리 골라 두고 모둠마다 한 권씩 준다. 몽당연필은 깍지에 꽂은 뒤 흔들어 빠지지 않는지 확인하게 한다. 고친 책은 학급문고 \'다시 살아난 책\' 칸에 꽂는다.',
            task: '고치는 차례를 정하고, 찢어진 책장이나 몽당연필을 직접 고쳐요.',
            levels: CARD_LV,
            items: [
              { prompt: '찢어진 책장을 붙이는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['찢어진 곳을 맞대요', '테이프를 조금 길게 잘라요', '찢어진 선을 따라 붙여요', '손바닥으로 꾹 눌러요'] },
                target: { order: [['찢어진 곳을 맞대요', '테이프를 조금 길게 잘라요'], '찢어진 선을 따라 붙여요', '손바닥으로 꾹 눌러요'] }, difficulty: 0.15,
                hints: ['테이프를 붙이기 전에 무엇을 준비해야 하는지 떠올려 봐요. 누르는 일은 맨 끝이에요.', '붙이기 전에 찢어진 곳이 맞대어져 있어야 해요. 붙이는 카드의 자리를 다시 봐요.', '맞대기·테이프 자르기(둘은 어느 것 먼저도 돼요) → 붙이기 → 꾹 누르기예요.'] },
              { prompt: '몽당연필에 깍지를 끼우는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['깍지 구멍에 연필을 대 봐요', '연필 뒤쪽을 깍지에 꽂아요', '돌려서 꽉 끼워요', '흔들어 빠지지 않나 봐요'] },
                target: { order: ['깍지 구멍에 연필을 대 봐요', '연필 뒤쪽을 깍지에 꽂아요', '돌려서 꽉 끼워요', '흔들어 빠지지 않나 봐요'] }, difficulty: 0.15 },
              { prompt: '모둠 책을 고쳤거나 몽당연필에 깍지를 끼웠으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 고친 물건은 고치지 않았다면 어디로 갔을까요?" 쓰레기통이라는 답을 듣고, 고친 물건이 다시 학급문고로 돌아갔다는 것을 짚는다. 남은 테이프는 상자에 넣고 자른 테이프 쪼가리는 주워 버린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '고쳐 쓰기', slots: [{ id: 'e1', label: '귀가 접혀 너덜거리는 학습지' }, { id: 'e2', label: '팔이 빠진 인형' }], cards: ['접힌 곳을 펴서 테이프로 붙여요', '빠진 팔을 다시 끼워요'] }, prompt: '두 물건에 고치는 방법을 이어 보세요.', target: { match: { e1: '접힌 곳을 펴서 테이프로 붙여요', e2: '빠진 팔을 다시 끼워요' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '깨져서 날카로운 접시는 어떻게 할까요?', options: ['내가 테이프로 붙여요', '어른께 알려요', '친구에게 줘요'], answer: 1, difficulty: 0.1, explain: '날카로운 물건은 다칠 수 있어 어른께 알려 치워요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '고쳐서 다시 써요',
      items: [
        { type: 'figure', wide: true, prompt: '망가진 물건과 고치는 방법을 선으로 이으세요.', tool: 'mindmap', figures: [{ options: { mode: 'match', topic: '고쳐 쓰기', slots: [{ id: 's1', label: '몽당연필' }, { id: 's2', label: '찢어진 책' }], cards: ['테이프로 붙여요', '깍지를 끼워요'] }, caption: '' }], answer: '몽당연필-깍지를 끼워요, 찢어진 책-테이프로 붙여요' },
        { type: 'choice', prompt: '내가 고치면 안 되는 물건에 ○ 하세요.', options: ['찢어진 공책', '깨진 유리컵', '바퀴 빠진 장난감'], answer: '깨진 유리컵' },
        { type: 'table', prompt: '오늘 고친 물건과 고친 방법을 쓰세요.', columns: ['고친 물건', '고친 방법'], rows: 2 },
        { type: 'draw', prompt: '고친 물건을 그리세요.' },
      ],
      easy: {
        note: '어디가 망가졌는지 먼저 손가락으로 짚어요.',
        items: [
          { type: 'choice', prompt: '찢어진 책을 고치는 방법에 ○ 하세요.', options: ['테이프로 붙여요', '버려요'], answer: '테이프로 붙여요' },
          { type: 'choice', prompt: '깨진 유리컵을 보면?', options: ['어른께 알려요', '내가 주워요'], answer: '어른께 알려요' },
          { type: 'draw', prompt: '고친 물건을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 틀리면 카드가 돌아와요. 실습은 몽당연필 깍지 끼우기만 해요.',
      base: '모두 놓은 뒤 확인을 눌러요. 실습은 책 고치기와 깍지 끼우기 가운데 하나를 골라요.',
      challenge: '\'새것을 사요\' 함정 카드를 골라내고, 실습에서 두 가지를 모두 고쳐요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 망가지면 바로 새것을 산다고 여긴다(새 물건이 언제나 좋다는 생각) → 고친 책이 다시 읽히는 모습을 보여 준다. ② 테이프를 너무 많이 붙인다 → 찢어진 길이만큼만 붙이는 시범을 보인다. ③ 위험한 물건까지 고치려 한다 → 날카로운 것·전기 제품은 어른의 일이라고 분명히 정한다. 연필 깍지가 없으면 굵은 빨대를 잘라 끼워도 된다.',
  }));

  lessons.push(L(8, {
    title: '아나바다 장터에서 물건 나누고 사기',
    objective: '장터에 내놓을 수 있는 물건을 고르고, 장터에서 물건값을 동전으로 낼 수 있다.',
    illustration: ART('a cheerful paper classroom flea market with small tables of picture books, tops and toy cars with price tags, children holding coins', '아나바다 장터', [
      { motif: 'house', x: 110, y: 214, color: 'rose' }, { motif: 'house', x: 370, y: 216, color: 'sky', s: 0.9 }, { motif: 'flower', x: 240, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"아나바다는 \'아껴 쓰고, 나눠 쓰고, 바꿔 쓰고, 다시 쓰자\'의 첫 글자예요." 칠판에 네 낱말을 쓴다. "나는 이제 안 읽는 그림책이 동생에게는 새 책이 될 수 있어요." 시연 단추로 \'깨끗한 그림책\'이 \'내놓아요\' 가지로 가는 모습을 보여 준다. 망가진 물건을 내놓으면 받는 사람 마음이 어떨지 묻는다.',
        student: '집에 있는 물건 가운데 이제 안 쓰지만 아직 쓸 수 있는 것을 떠올려 봐요.',
        demo: { tool: 'mindmap', options: { topic: '장터에 내놓을까?', slots: ['내놓아요', '내놓지 않아요'], cards: ['깨끗한 그림책', '부러진 크레파스 한 개'], shuffle: false }, sequence: [{ sort: { '내놓아요': ['깨끗한 그림책'], '내놓지 않아요': ['부러진 크레파스 한 개'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 장터에 내놓을 물건 고르기', minutes: 12, tool: 'mindmap',
            teacher: '"내가 받는다면 기쁠 물건인가요?" 이 질문 하나로 가르게 한다. 깨끗하고 아직 쓸 수 있는 물건만 내놓는다는 기준을 칠판에 쓴다. 짝끼리 장터 말("이 팽이는 300원이에요", "고맙습니다, 잘 쓸게요")을 주고받게 한다.',
            task: '받는 사람이 기쁠 물건인지 생각하며 장터에 내놓을 물건을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '장터에 내놓을 물건과 내놓지 않을 물건으로 나누어 보세요.', toolOptions: { topic: '장터에 내놓을까?', slots: ['내놓아요', '내놓지 않아요'], cards: ['작아진 깨끗한 실내화', '잘 돌아가는 팽이', '물에 젖어 붙은 책', '뚜껑 없이 마른 사인펜'] },
                target: { sort: { '내놓아요': ['작아진 깨끗한 실내화', '잘 돌아가는 팽이'], '내놓지 않아요': ['물에 젖어 붙은 책', '뚜껑 없이 마른 사인펜'] } }, difficulty: 0.1 },
              { prompt: '장터에 내놓을 물건만 골라 보세요.', toolOptions: { mode: 'pick', basket: '장터 물건', cards: ['다 읽은 동화책', '안 쓰는 줄넘기', '구멍 난 양말', '조각이 빠진 퍼즐'] },
                target: { pick: ['다 읽은 동화책', '안 쓰는 줄넘기'] }, difficulty: 0.15,
                levels: { challenge: { prompt: '장터에 내놓을 물건을 모두 골라 보세요.', toolOptions: { cards: ['다 읽은 동화책', '안 쓰는 줄넘기', '작아진 깨끗한 모자', '구멍 난 양말', '조각이 빠진 퍼즐'] }, target: { pick: ['다 읽은 동화책', '안 쓰는 줄넘기', '작아진 깨끗한 모자'] } } } },
              { prompt: '짝과 장터에서 파는 말과 사는 말을 주고받았으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 장터에서 물건값 내기', minutes: 14, tool: 'economy',
            teacher: '"100원짜리가 몇 개 있어야 300원일까요?" 동전 모형을 손에 쥐고 세게 한다. 500원짜리 하나는 100원짜리 다섯 개와 같다는 것을 짚는다. 거스름돈 문항은 "낸 돈에서 물건값만큼 빼면 돌려받는 돈"이라고 말로 풀어 준다. 장터 값은 진짜 돈이 아니라 놀이 동전으로 한다.',
            task: '장터 물건값만큼 동전을 놓아요.',
            levels: { easy: { coins: [10, 100], showTotal: true }, base: { coins: [10, 50, 100, 500] }, challenge: { coins: [10, 50, 100, 500], showTotal: false } },
            items: [
              { prompt: '동화책값을 동전으로 내 보세요.', toolOptions: { mode: 'pay', item: { text: '동화책', motif: 'book', price: 300 } }, target: { pay: 300 }, difficulty: 0.05 },
              { prompt: '팽이값을 동전으로 내 보세요.', toolOptions: { mode: 'pay', item: { text: '팽이', price: 450 } }, target: { pay: 450 }, difficulty: 0.15,
                levels: { challenge: { prompt: '팽이값을 가장 적은 개수의 동전으로 내 보세요.', target: { pay: 450, fewest: true } } } },
              { prompt: '500원을 내고 200원짜리 줄넘기를 샀어요. 거스름돈을 놓아 보세요.', toolOptions: { mode: 'pay', item: { text: '줄넘기', price: 200 }, paid: 500, ask: '돌려받을 거스름돈을 놓아요' }, target: { pay: 300 }, difficulty: 0.25,
                levels: { easy: { prompt: '300원을 내고 200원짜리 줄넘기를 샀어요. 거스름돈을 놓아 보세요.', toolOptions: { paid: 300 }, target: { pay: 100 } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"장터에서 산 물건은 누구의 손을 거쳐 왔나요?" 먼저 쓰던 친구에게 고맙다는 말을 하게 한다. 실제 장터는 다음 주 금요일에 연다고 알리고, 가져올 물건은 오늘 정한 기준(깨끗하고 쓸 수 있는 것)을 지키게 한다. 집에서 내놓아도 되는지 꼭 어른께 여쭤보게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'economy', options: { mode: 'pay', item: { text: '연필꽂이', price: 600 }, coins: [10, 50, 100, 500] }, prompt: '연필꽂이값을 동전으로 내 보세요.', target: { pay: 600 }, difficulty: 0.1 },
          { type: 'choice', prompt: '장터에 내놓기 알맞은 물건은 무엇일까요?', options: ['찢어진 그림책', '깨끗한 장난감 차', '다 쓴 풀'], answer: 1, difficulty: 0.1, explain: '받는 사람이 바로 쓸 수 있는 깨끗한 물건을 내놓아요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '아나바다 장터',
      items: [
        { type: 'blank', prompt: '아나바다의 뜻을 완성하세요.', text: '아껴 쓰고, ___ 쓰고, 바꿔 쓰고, 다시 쓰자', answer: '나눠' },
        { type: 'check', prompt: '장터에 내놓을 물건에 모두 ✓ 하세요.', options: ['다 읽은 동화책', '잘 돌아가는 팽이', '구멍 난 양말'] },
        { type: 'figure', wide: true, prompt: '팽이값만큼 낼 동전을 그리세요.', tool: 'economy', figures: [{ options: { mode: 'pay', item: { text: '팽이', price: 350 }, coins: [10, 50, 100, 500] }, caption: '' }], answer: '예: 100원 3개, 50원 1개' },
        { type: 'short', prompt: '내가 장터에 내놓고 싶은 물건을 쓰세요.' },
      ],
      easy: {
        note: '"내가 받으면 기쁠까?" 하고 생각해요.',
        items: [
          { type: 'choice', prompt: '장터에 내놓을 물건에 ○ 하세요.', options: ['깨끗한 그림책', '젖어서 붙은 책'], answer: '깨끗한 그림책' },
          { type: 'choice', prompt: '300원은 100원짜리 몇 개일까요?', options: ['3개', '30개'], answer: '3개' },
          { type: 'draw', prompt: '장터에 내놓을 물건을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '10원과 100원만 쓰고 낸 돈의 합계가 보여요. 거스름돈은 100원만 돌려받아요.',
      base: '50원·500원까지 써서 값을 내요.',
      challenge: '합계가 숨겨져 스스로 세고, 가장 적은 개수의 동전으로 내요. 내놓을 물건을 모두 찾아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 안 쓰는 물건은 무엇이든 내놓아도 된다고 여긴다 → "내가 받는다면?"을 기준으로 다시 묻는다. ② 500원 한 개를 100원 한 개처럼 센다 → 동전 모형으로 바꿔 보게 한다. ③ 거스름돈을 낸 돈 전체로 착각한다 → 물건값을 먼저 빼는 말풀이를 함께 한다. 실제 장터에서는 진짜 돈 대신 놀이 동전이나 물건 바꾸기로 하고, 비싼 물건은 가져오지 않게 안내한다.',
  }));

  // ───────────────────────── 9~12차시: 센 기록 보고 이어 가기(성찰과 습관화) ─────────────────────────
  var ONE = [{ value: 1, name: '1개' }];

  lessons.push(L(9, {
    title: '한 주 동안 다시 쓴 물건 세어 그래프 그리기',
    objective: '한 주 동안 다시 쓴 물건의 수를 세어 ○ 그래프로 나타내고, 가장 많이 다시 쓴 날을 찾아 말할 수 있다.',
    illustration: ART('a paper wall chart with five columns for Monday to Friday filled with round stickers, children counting the stickers with their fingers', '다시 쓴 물건 세기', [
      { motif: 'star', x: 110, y: 90, s: 0.6 }, { motif: 'tree', x: 390, y: 214 }, { motif: 'flower', x: 120, y: 228, color: 'mint' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"지난주 우리 반 \'다시 쓰기 판\'에 붙임 딱지가 몇 개 모였을까요?" 실제 판을 앞에 세우고 월요일 딱지를 함께 소리 내어 센다. 시연 단추로 월요일 줄에 ○가 하나씩 채워지는 모습을 보여 준다. "세어서 그래프로 그리면 한눈에 볼 수 있어요." 세다가 헷갈리는 학생에게 센 딱지에 손가락을 하나씩 대게 한다.',
        student: '우리 반 다시 쓰기 판에서 월요일 붙임 딱지를 손가락으로 짚으며 세어 봐요.',
        demo: { tool: 'chart', options: { type: 'picture', title: '다시 쓴 물건', data: [['월', 3], ['화', 2]], unit: '개', xLabel: '요일', yLabel: '물건 수', icons: ONE }, sequence: [{ build: true }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 센 수만큼 ○ 그리기', minutes: 14, tool: 'chart',
            teacher: '"표의 수를 먼저 읽고, 그만큼 ○를 하나씩 더해요. 다 그리고 나서 표와 ○ 수가 같은지 다시 세어 봐요." 한 줄을 다 그리면 손가락으로 짚어 세게 한다. 칸이 모자라 보인다는 학생에게 ○는 왼쪽부터 빈틈없이 채운다는 것을 알려 준다.',
            task: '표를 보고 요일·모둠·물건마다 센 수만큼 ○를 그려 그래프를 완성해요.',
            levels: { easy: { given: [0, 1] }, base: {}, challenge: {} },
            items: [
              { prompt: '요일별로 다시 쓴 종이 수를 보고 ○ 그래프를 완성해 보세요.', toolOptions: { type: 'picture', title: '다시 쓴 종이', data: [['월', 3], ['화', 5], ['수', 4], ['목', 6], ['금', 7]], unit: '장', xLabel: '요일', yLabel: '종이 수', icons: [{ value: 1, name: '1장' }], given: [0] }, target: { build: true }, difficulty: 0.1,
                levels: { easy: { toolOptions: { given: [0, 1, 2] } } } },
              { prompt: '모둠별로 물병을 챙겨 온 날 수를 보고 ○ 그래프를 완성해 보세요.', toolOptions: { type: 'picture', title: '물병을 챙긴 날', data: [['해 모둠', 4], ['달 모둠', 5], ['별 모둠', 3], ['꽃 모둠', 5]], unit: '일', xLabel: '모둠', yLabel: '날 수', icons: [{ value: 1, name: '1일' }] }, target: { build: true }, difficulty: 0.15 },
              { prompt: '한 주 동안 다시 쓴 물건 종류를 보고 ○ 그래프를 완성해 보세요.', toolOptions: { type: 'picture', title: '다시 쓴 물건', data: [['이면지', 8], ['물병', 11], ['장바구니', 3], ['고친 책', 2]], unit: '개', xLabel: '물건', yLabel: '수', icons: ONE }, target: { build: true }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { data: [['이면지', 8], ['물병', 11], ['장바구니', 3], ['고친 책', 2], ['몽당연필', 9]] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 그래프 읽고 말하기', minutes: 12, tool: 'chart',
            teacher: '"가장 높이 쌓인 줄은 어디예요? 그날 무슨 일이 있었을까요?" 금요일에 장터 준비로 이면지를 많이 썼다는 것처럼 까닭을 함께 떠올린다. 몇 개 더 많은지는 두 줄의 ○를 하나씩 짝 지어 보고 남는 것을 세게 한다.',
            task: '완성한 그래프를 보고 가장 많은 날, 몇 개인지, 몇 개 더 많은지 읽어요.',
            levels: { easy: { showValues: true }, base: {}, challenge: {} },
            items: [
              { prompt: '종이를 가장 많이 다시 쓴 요일은 언제인가요?', toolOptions: { type: 'picture', mode: 'read', title: '다시 쓴 종이', data: [['월', 3], ['화', 5], ['수', 4], ['목', 6], ['금', 7]], unit: '장', xLabel: '요일', icons: [{ value: 1, name: '1장' }], choices: ['화', '목', '금'], question: '가장 많이 다시 쓴 요일은?', why: ['화요일 줄보다 긴 줄이 있어요.', '목요일보다 ○가 하나 더 많은 줄이 있어요.', ''] }, target: { pick: 2 }, difficulty: 0.1 },
              { prompt: '수요일에 다시 쓴 종이는 몇 장인가요?', toolOptions: { type: 'picture', mode: 'read', title: '다시 쓴 종이', data: [['월', 3], ['화', 5], ['수', 4], ['목', 6], ['금', 7]], unit: '장', xLabel: '요일', icons: [{ value: 1, name: '1장' }], question: '수요일에 다시 쓴 종이는 몇 장?' }, target: { value: 4 }, difficulty: 0.15 },
              { prompt: '물병은 장바구니보다 몇 개 더 많이 다시 썼나요?', toolOptions: { type: 'picture', mode: 'read', title: '다시 쓴 물건', data: [['이면지', 8], ['물병', 11], ['장바구니', 3], ['고친 책', 2]], unit: '개', xLabel: '물건', icons: ONE, question: '물병은 장바구니보다 몇 개 더?' }, target: { value: 8 }, difficulty: 0.25,
                hints: ['두 줄의 ○를 하나씩 짝 지어 보고, 짝이 없이 남는 ○를 세어요.', '물병 줄과 장바구니 줄의 ○를 따로 세어 보았나요? 큰 수에서 작은 수를 빼요.', '물병 줄의 ○ 수에서 장바구니 줄의 ○ 수를 빼면 돼요.'] },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"그래프를 보니 우리 반이 가장 잘한 것은 무엇이에요? 가장 적은 것은요?" 가장 적은 줄(고친 책)을 다음 주에 늘릴 방법을 두세 개 듣는다. 출구 2번을 본 뒤 "한 주만 하고 그만두면 다음 주 그래프는 어떻게 될까요?"를 묻고 다음 시간으로 넘긴다.',
        exitTicket: [
          { type: 'tool', tool: 'chart', options: { type: 'picture', mode: 'read', title: '전등을 끈 횟수', data: [['월', 4], ['화', 2], ['수', 5]], unit: '번', xLabel: '요일', icons: [{ value: 1, name: '1번' }], choices: ['월', '화', '수'], question: '전등을 가장 적게 끈 요일은?' }, prompt: '그래프를 보고 전등을 가장 적게 끈 요일을 골라 보세요.', target: { pick: 1 }, difficulty: 0.1 },
          { type: 'choice', prompt: '한 주만 다시 쓰고 그만두면 쓰레기는 어떻게 될까요?', options: ['계속 줄어든 채로 있어요', '다시 늘어나요'], answer: 1, difficulty: 0.2, explain: '그만두면 다시 버리는 물건이 생겨 쓰레기가 늘어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '다시 쓴 물건 그래프',
      items: [
        { type: 'figure', wide: true, prompt: '표를 보고 ○ 그래프를 완성하세요.', tool: 'chart', figures: [{ options: { type: 'picture', title: '다시 쓴 종이', data: [['월', 2], ['화', 4], ['수', 3]], unit: '장', xLabel: '요일', icons: [{ value: 1, name: '1장' }], given: [0] }, caption: '' }], answer: '화 ○ 4개, 수 ○ 3개' },
        { type: 'choice', prompt: '그래프로 나타내면 좋은 점에 ○ 하세요.', options: ['많고 적음을 한눈에 봐요', '글씨를 많이 써요'], answer: '많고 적음을 한눈에 봐요' },
        { type: 'table', prompt: '이번 주 내가 다시 쓴 물건을 세어 쓰세요.', columns: ['물건', '수'], rows: 3 },
        { type: 'short', prompt: '가장 적게 다시 쓴 물건을 늘릴 방법을 쓰세요.' },
      ],
      easy: {
        note: '○는 왼쪽부터 하나씩, 다 그리고 다시 세어요.',
        items: [
          { type: 'choice', prompt: '○가 가장 많은 줄은 무엇을 뜻할까요?', options: ['가장 많이 다시 썼어요', '가장 적게 다시 썼어요'], answer: '가장 많이 다시 썼어요' },
          { type: 'blank', prompt: '○ 3개는 몇 장일까요?', text: '○○○ = ___장', answer: '3' },
          { type: 'draw', prompt: '내가 다시 쓴 물건을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '두 줄은 미리 그려져 있고, 그래프를 읽을 때 수가 함께 보여요.',
      base: '표를 보고 모든 줄을 스스로 그려요.',
      challenge: '물건이 한 가지 더 늘어나고, 몇 개 더 많은지를 짝 짓기로 구해 설명해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① ○를 띄엄띄엄 그려 길이를 견주지 못한다 → 왼쪽부터 빈틈없이 채우게 한다. ② 몇 개 더 많은지를 큰 수로 답한다 → 두 줄을 짝 지어 남는 것을 세게 한다. ③ 한 주 기록으로 끝났다고 여긴다(한 주만 해도 그대로 남는다는 오개념) → 다음 주에도 같은 판을 쓴다고 말하고 10차시에 두 주를 견준다. 기록 판은 반 전체 수만 적고 학생별 수는 적지 않는다.',
  }));

  lessons.push(L(10, {
    title: '두 주 기록 견주며 깜빡한 날 다시 하기',
    objective: '지난주와 이번 주 그래프를 읽어 늘거나 준 것을 말하고, 실천을 깜빡한 날에 다시 하는 방법을 고를 수 있다.',
    illustration: ART('two paper picture charts side by side labeled last week and this week, a child holding a water bottle and pointing at the longer row', '지난주와 이번 주', [
      { motif: 'sun', x: 110, y: 90, s: 0.5 }, { motif: 'tree', x: 390, y: 214 }, { motif: 'leaf', x: 300, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"지난주와 이번 주, 우리 반 물병 기록은 어떻게 달라졌을까요?" 두 주 기록 판을 나란히 붙인다. 시연 단추로 두 줄 그래프에서 더 긴 줄을 고르는 모습을 보여 준다. "늘어난 것은 칭찬하고, 줄어든 것은 까닭을 찾아봐요." 줄어든 것을 누구 탓으로 돌리지 않는다고 미리 말한다.',
        student: '지난주와 이번 주 판에서 더 길어진 줄을 찾아 손가락으로 가리켜 봐요.',
        demo: { tool: 'chart', options: { type: 'picture', mode: 'read', title: '물병을 챙긴 날', data: [['지난주', 3], ['이번 주', 5]], unit: '일', xLabel: '주', icons: [{ value: 1, name: '1일' }], choices: ['지난주', '이번 주'], question: '더 많은 주는?' }, sequence: [{ pick: 1 }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 두 주 그래프 읽기', minutes: 14, tool: 'chart',
            teacher: '"○ 하나는 1개예요. 줄을 다 세지 않고도 어느 쪽이 긴지 볼 수 있어요." 그래프를 보고 표의 빈칸을 채울 때는 줄마다 손가락으로 짚어 세게 한다. 이번 주에 줄어든 줄(장바구니)이 있으면 "그날 무슨 일이 있었을까요?" 하고 까닭을 함께 떠올린다.',
            task: '두 주의 그래프를 읽고 표를 채우거나, 늘어난 것과 줄어든 것을 골라요.',
            levels: { easy: { showValues: true }, base: {}, challenge: {} },
            items: [
              { prompt: '그래프를 보고 표의 빈칸을 채워 보세요.', toolOptions: { type: 'picture', mode: 'read', title: '이번 주 다시 쓴 물건', data: [['이면지', 9], ['물병', 12], ['장바구니', 2]], unit: '개', xLabel: '물건', icons: ONE, tableBlanks: [0, 1, 2] }, target: { table: true }, difficulty: 0.15,
                levels: { easy: { toolOptions: { tableBlanks: [0, 2] } } } },
              { prompt: '지난주보다 이번 주에 줄어든 것은 무엇인가요?', toolOptions: { type: 'picture', mode: 'read', title: '지난주와 이번 주', data: [['이면지 지난주', 8], ['이면지 이번 주', 9], ['장바구니 지난주', 3], ['장바구니 이번 주', 2]], unit: '개', xLabel: '물건', icons: ONE, choices: ['이면지', '장바구니'], question: '줄어든 것은?' }, target: { pick: 1 }, difficulty: 0.2 },
              { prompt: '이면지는 지난주보다 이번 주에 몇 개 늘었나요?', toolOptions: { type: 'picture', mode: 'read', title: '이면지(지난주와 이번 주)', data: [['지난주', 8], ['이번 주', 11]], unit: '개', xLabel: '주', icons: ONE, question: '몇 개 늘었나요?' }, target: { value: 3 }, difficulty: 0.25,
                hints: ['두 줄의 ○를 하나씩 짝 지어 보고, 남는 ○를 세어요.', '이번 주 줄에서 지난주 줄보다 더 나간 ○만 세어 보았나요?', '이번 주 ○ 수에서 지난주 ○ 수를 빼면 돼요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 깜빡한 날 다시 하기', minutes: 12, tool: 'emotion',
            teacher: '"물병을 깜빡한 날, 그날로 끝일까요?" 깜빡하는 것은 누구에게나 있는 일이라고 말해 준다. 중요한 것은 다음 날 다시 하는 것이라는 것을 짚는다. \'이제 그만해요\'를 고르는 학생에게 결과 칸을 소리 내어 읽게 하고 그래프가 어떻게 될지 묻는다.',
            task: '실천을 깜빡한 상황에서 어떻게 할지 고르고 결과를 봐요.',
            levels: MOOD_LV,
            items: [
              { prompt: '서아가 목요일에 물병을 깜빡했어요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '서아', situation: '서아는 사흘 동안 물병을 챙겼는데 목요일 아침에 깜빡하고 왔어요.', choices: [
                { id: 'quit', text: '이제 그만해요', result: '물병 줄이 다시 짧아지고 종이컵이 늘어요.', mood: '속상함', why: '하루 깜빡했다고 그만두면 그동안 한 일은 어떻게 될까요?' },
                { id: 'again', text: '현관에 물병을 두고 내일 다시 챙겨요', result: '금요일에 다시 물병을 챙겨 왔어요.', mood: '뿌듯함' },
                { id: 'blame', text: '엄마가 안 챙겨 줬다고 해요', result: '다음에도 또 깜빡할 수 있어요.', mood: '걱정', why: '물병은 누가 챙기기로 한 약속이었나요?' }] }, target: { choice: 'again' }, difficulty: 0.1 },
              { prompt: '준호가 전기 지킴이를 맡았는데 하루 잊었어요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '준호', situation: '준호는 전기 지킴이인데 어제 급식실에 갈 때 전등 끄는 것을 잊었어요.', choices: [
                { id: 'note', text: '문 옆에 \'불 꺼요\' 쪽지를 붙여요', result: '오늘은 쪽지를 보고 잊지 않았어요.', mood: '뿌듯함' },
                { id: 'hide', text: '아무 말 안 하고 넘어가요', result: '오늘도 또 잊어버렸어요.', mood: '걱정', why: '잊지 않게 도와줄 방법이 없으면 어떻게 될까요?' }] }, target: { choice: 'note' }, difficulty: 0.15 },
              { prompt: '서아에게 생긴 일에 어울리는 마음 카드를 놓아 보세요.', toolOptions: { cards: ['뿌듯함', '기쁨', '걱정'], slots: [{ id: 's1', label: '금요일에 물병을 다시 챙겼어요' }, { id: 's2', label: '목요일에 물병을 깜빡했어요' }] },
                target: { match: { s1: ['뿌듯함', '기쁨'], s2: '걱정' } }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"깜빡하지 않으려면 무엇을 도와줄 수 있을까요?" 쪽지·현관에 두기·짝이 서로 알려 주기를 칠판에 적는다. 다음 시간에는 앞으로 이어서 할 일을 정해 다짐판을 꾸민다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'chart', options: { type: 'picture', mode: 'read', title: '손수건을 챙긴 날', data: [['지난주', 2], ['이번 주', 5]], unit: '일', xLabel: '주', icons: [{ value: 1, name: '1일' }], question: '며칠 늘었나요?' }, prompt: '손수건을 챙긴 날이 지난주보다 며칠 늘었는지 써 보세요.', target: { value: 3 }, difficulty: 0.2 },
          { type: 'choice', prompt: '실천을 하루 깜빡했다면 어떻게 할까요?', options: ['그만둬요', '다음 날 다시 해요', '친구 탓을 해요'], answer: 1, difficulty: 0.1, explain: '깜빡한 다음 날 다시 하면 실천이 이어져요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '지난주와 이번 주',
      items: [
        { type: 'figure', wide: true, prompt: '그래프를 보고 지난주와 이번 주 물병 수를 쓰세요.', tool: 'chart', figures: [{ options: { type: 'picture', mode: 'read', title: '다시 쓴 물병', data: [['지난주', 7], ['이번 주', 10]], unit: '개', xLabel: '주', icons: ONE }, caption: '지난주 ____개, 이번 주 ____개' }], answer: '지난주 7개, 이번 주 10개' },
        { type: 'choice', prompt: '물병을 깜빡한 다음 날 할 일에 ○ 하세요.', options: ['다시 챙겨요', '그만둬요'], answer: '다시 챙겨요' },
        { type: 'short', prompt: '깜빡하지 않게 도와줄 방법을 쓰세요.' },
        { type: 'draw', prompt: '다시 실천하는 내 모습을 그리세요.' },
      ],
      easy: {
        note: '두 줄을 견주어 더 긴 줄을 찾아요.',
        items: [
          { type: 'choice', prompt: '○가 더 많은 쪽에 ○ 하세요. (지난주 ○○○, 이번 주 ○○○○○)', options: ['지난주', '이번 주'], answer: '이번 주' },
          { type: 'choice', prompt: '깜빡한 다음 날은?', options: ['다시 해요', '그만둬요'], answer: '다시 해요' },
          { type: 'draw', prompt: '다시 실천하는 내 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '그래프에 수가 함께 보이고, 표의 빈칸이 두 개예요.',
      base: '그래프만 보고 표를 채우고 견주어요.',
      challenge: '늘어난 수를 짝 짓기와 빼기 두 가지로 구해 설명하고, 깜빡하지 않는 방법을 두 가지 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 한 번 깜빡하면 실천이 끝났다고 여긴다 → 다음 날 다시 하면 이어진다는 것을 그래프로 보인다. ② 줄어든 까닭을 특정 친구 탓으로 돌린다 → 반 전체 수만 보고 \'우리\'로 말하게 한다. ③ 두 줄의 차이를 큰 수로 답한다 → 짝 지어 남는 것을 센다. 그래프 자료는 반 전체 수이며 학생별 기록을 공개하지 않는다.',
  }));

  lessons.push(L(11, {
    title: '이어서 할 일 정해 다짐판 꾸미기',
    objective: '날마다 이어서 할 수 있는 일을 하나 정하고, 그 다짐을 색종이 다짐판으로 꾸며 교실에 붙일 수 있다.',
    illustration: ART('a colorful paper pledge board on a classroom wall covered with green paper leaves, each leaf holding a small promise drawn by a child', '우리 반 다짐판', [
      { motif: 'tree', x: 120, y: 214 }, { motif: 'leaf', x: 380, y: 96 }, { motif: 'flower', x: 360, y: 228, color: 'rose' }]),
    safety: ['가위는 날을 닫아 건네고, 풀은 쓰고 나서 뚜껑을 닫아요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"그동안 해 본 일 가운데 3학년이 되어서도 할 수 있는 일은 무엇일까요?" 이면지·물병·불 끄기·고쳐 쓰기 그림 카드를 칠판에 붙인다. 시연 단추로 판에 초록 나뭇잎이 붙는 모습을 보여 준다. "나뭇잎 하나에 내 다짐 하나를 적어 우리 반 나무를 키워요." 너무 큰 다짐(지구 지키기)보다 날마다 할 수 있는 작은 일을 고르게 한다.',
        student: '그동안 해 본 일 가운데 내일도 할 수 있는 일을 하나 골라 봐요.',
        demo: { tool: 'collage', options: { readOnly: true }, sequence: [{ has: [{ shape: 'leaf', color: '초록', min: 3 }] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 이어서 할 일 고르기', minutes: 10, tool: 'mindmap',
            teacher: '"이 일은 내가 혼자서, 날마다 할 수 있나요?" 두 질문을 기준으로 고르게 한다. \'새 학용품을 사 모아요\'는 오히려 버리는 물건을 늘린다는 것을 짚는다. 고른 다짐은 "나는 ~을 날마다 할게요" 문장으로 말하게 한다.',
            task: '내가 날마다 이어서 할 수 있는 일만 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '내가 날마다 이어서 할 수 있는 일만 골라 보세요.', toolOptions: { mode: 'pick', basket: '날마다 할 일', cards: ['물병을 챙겨요', '나갈 때 불을 꺼요', '새 학용품을 사 모아요', '종이컵을 여러 개 써요'] },
                target: { pick: ['물병을 챙겨요', '나갈 때 불을 꺼요'] }, difficulty: 0.1 },
              { prompt: '날마다 하는 일과 가끔 하는 일로 나누어 보세요.', toolOptions: { topic: '이어서 할 일', slots: ['날마다 해요', '가끔 해요'], cards: ['이면지에 연습해요', '양치할 때 수돗물을 잠가요', '장터에 물건을 내놓아요', '찢어진 책을 고쳐요'] },
                target: { sort: { '날마다 해요': ['이면지에 연습해요', '양치할 때 수돗물을 잠가요'], '가끔 해요': ['장터에 물건을 내놓아요', '찢어진 책을 고쳐요'] } }, difficulty: 0.2,
                hints: ['그 일을 하려면 무슨 일이 있어야 하는지 떠올려 봐요. 매일 생기는 일인가요?', '장터는 날마다 열리나요? 책은 날마다 찢어지나요? 고른 카드를 다시 봐요.', '이면지 연습과 물 잠그기는 날마다, 장터와 책 고치기는 그런 일이 생길 때 가끔 해요.'] },
              { prompt: '다짐의 앞말과 날마다 할 일을 이어 보세요.', toolOptions: { mode: 'match', topic: '내 다짐', hint1: '다짐의 앞말을 읽고, 그때 날마다 할 수 있는 일을 찾아 이어요.', slots: [{ id: 's1', label: '급식실에 갈 때' }, { id: 's2', label: '손을 씻고 나서' }], cards: ['전등을 꺼요', '손수건으로 닦아요'] },
                target: { match: { s1: '전등을 꺼요', s2: '손수건으로 닦아요' } }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 다짐판 꾸미기', minutes: 16, tool: 'collage',
            teacher: '"나뭇잎 모양은 내 다짐, 동그라미는 물방울, 별은 지킨 날이에요." 판에서 먼저 배치를 정해 본 뒤 실제 색종이로 오려 붙이게 한다. 나뭇잎에 다짐을 쓸 때는 이름 대신 그림 표시(내가 정한 작은 무늬)를 하게 한다. 다 붙인 다짐판은 교실 뒤 게시판에 함께 붙인다.',
            task: '판에서 다짐판 배치를 정한 뒤, 색종이로 오려 붙여 우리 반 다짐판을 꾸며요.',
            levels: {
              easy: { shapes: ['leaf', 'circle', 'star', 'rect'], colors: ['초록', '파랑', '노랑', '갈색'] },
              base: { shapes: ['leaf', 'circle', 'star', 'rect', 'heart'] },
              challenge: {},
            },
            items: [
              { prompt: '갈색 나무줄기에 초록 나뭇잎을 세 개 이상 붙여 보세요.', state: { pieces: [{ shape: 'rect', color: '갈색', size: 'l', x: 280, y: 280, r: 90 }] }, target: { has: [{ shape: 'leaf', color: '초록', min: 3 }] }, difficulty: 0.05 },
              { prompt: '나뭇잎 옆에 파랑 동그라미 물방울을 두 개 붙여 \'물 아끼기\' 다짐을 꾸며 보세요.', state: { pieces: [{ shape: 'leaf', color: '초록', size: 'm', x: 220, y: 200, r: 0 }] }, target: { has: [{ shape: 'circle', color: '파랑', n: 2 }] }, difficulty: 0.1 },
              { prompt: '내 다짐을 담아 다짐판을 꾸미고 점검해 보세요.', target: { selfCheck: ['내 다짐이 보이는 큰 모양이 있어요', '지킨 날에 붙일 별 자리를 남겼어요', '남은 색종이를 상자에 다시 넣었어요'], minPieces: 4 }, difficulty: 0.1 },
              { prompt: '색종이로 다짐 나뭇잎을 오려 게시판에 붙였으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"우리 반 나무에 나뭇잎이 몇 장 붙었나요? 다짐을 지킨 날마다 나뭇잎 옆에 별을 붙여요." 별 붙이는 시간(하교 전 1분)을 정한다. 지키지 못한 날도 다음 날 다시 붙일 수 있다는 것을 말한다.',
        exitTicket: [
          { type: 'tool', tool: 'collage', options: { shapes: ['leaf', 'star', 'circle'], colors: ['초록', '노랑', '파랑'] }, state: { pieces: [{ shape: 'leaf', color: '초록', size: 'm', x: 280, y: 200, r: 0 }] }, prompt: '다짐 나뭇잎 옆에 지킨 날 노랑 별을 세 개 붙여 보세요.', target: { has: [{ shape: 'star', color: '노랑', n: 3 }] }, difficulty: 0.1 },
          { type: 'choice', prompt: '다짐으로 알맞은 것은 무엇일까요?', options: ['날마다 물병을 챙겨요', '새 학용품을 많이 사요', '한 번만 불을 꺼요'], answer: 0, difficulty: 0.1, explain: '날마다 이어서 할 수 있는 작은 일이 좋은 다짐이에요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '나의 다짐',
      items: [
        { type: 'check', prompt: '날마다 이어서 할 수 있는 일에 모두 ✓ 하세요.', options: ['물병 챙기기', '불 끄기', '새 학용품 사 모으기'] },
        { type: 'blank', prompt: '내 다짐 문장을 완성하세요.', text: '나는 ________을 날마다 할게요.', answer: '예: 물병 챙기기' },
        { type: 'table', prompt: '다짐을 지킨 날에 ☆을 그리세요.', columns: ['월', '화', '수', '목', '금'], cells: [['', '', '', '', '']] },
        { type: 'draw', prompt: '내 다짐 나뭇잎을 그리세요.' },
      ],
      easy: {
        note: '내가 혼자서, 날마다 할 수 있는 일을 골라요.',
        items: [
          { type: 'choice', prompt: '좋은 다짐에 ○ 하세요.', options: ['날마다 불 끄기', '새것 많이 사기'], answer: '날마다 불 끄기' },
          { type: 'short', prompt: '내 다짐을 쓰세요.' },
          { type: 'draw', prompt: '내 다짐 나뭇잎을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '고르기에서 초록 테두리가 생기고, 다짐판 고르개가 네 모양·네 색으로 줄어요.',
      base: '다섯 모양으로 다짐판을 꾸며요.',
      challenge: '모든 모양과 색을 써서 다짐판을 꾸미고, 다짐을 두 가지 정해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 너무 큰 다짐(지구를 지켜요)을 고른다 → "내일 아침에 무엇을 하면 돼요?"로 작게 바꾸게 한다. ② 꾸미기에만 오래 매달린다 → 판에서 배치를 정한 뒤 실제로는 나뭇잎 하나만 오리게 한다. ③ 다짐을 지키지 못한 날 부끄러워한다 → 다음 날 다시 붙이면 된다고 말한다. 다짐판에는 학생 이름 대신 자기 무늬를 쓴다.',
  }));

  lessons.push(L(12, {
    title: '한 주로 끝내지 않고 이어 가는 방법 찾기',
    objective: '실천을 이어 가게 돕는 방법과 그만두게 만드는 일을 가르고, 이야기 속 실천이 이어지는 차례를 놓을 수 있다.',
    illustration: ART('a paper calendar with stars stuck on many days in a row, a child adding one more star while a water bottle and a cloth bag sit on the desk', '날마다 조금씩', [
      { motif: 'star', x: 110, y: 90, s: 0.6 }, { motif: 'star', x: 380, y: 84, s: 0.5 }, { motif: 'tree', x: 390, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"다짐판에 별이 많이 붙은 나뭇잎과 적게 붙은 나뭇잎이 있어요. 무엇이 달랐을까요?" 지난 시간 다짐판을 보여 준다. 시연 단추로 이야기 카드가 차례로 놓이는 모습을 보여 준다. "한 주만 하고 그만두면 쓰레기통은 다시 차요. 오늘은 이어 가는 방법을 찾아요." 별을 적게 붙인 학생을 짚지 않고 반 전체 이야기로 말한다.',
        student: '내 다짐을 이어 가기 어려웠던 날이 있었다면 떠올려 봐요.',
        demo: { tool: 'story', options: { mode: 'order', cards: ['물병을 챙기기로 했어요', '현관에 물병을 두었어요', '날마다 잊지 않았어요'], shuffle: false }, sequence: [{ order: ['물병을 챙기기로 했어요', '현관에 물병을 두었어요', '날마다 잊지 않았어요'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 실천이 이어지는 이야기', minutes: 13, tool: 'story',
            teacher: '"민지는 처음에 신이 났다가, 왜 그만두었을까요? 그리고 어떻게 다시 시작했을까요?" 이야기를 함께 읽고 차례를 놓게 한다. 그만둔 뒤 휴지통이 다시 찼다는 카드를 꼭 짚는다. 이야기는 직접 지은 것이다.',
            task: '이야기 카드를 읽고 일이 일어난 차례대로 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '민지의 이면지 이야기를 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['민지는 이면지에 연습하기로 했어요', '사흘 뒤 귀찮아서 그만두었어요', '휴지통에 종이가 다시 가득 찼어요', '이면지 상자를 책상 옆에 두고 다시 시작했어요'] },
                target: { order: ['민지는 이면지에 연습하기로 했어요', '사흘 뒤 귀찮아서 그만두었어요', '휴지통에 종이가 다시 가득 찼어요', '이면지 상자를 책상 옆에 두고 다시 시작했어요'] }, difficulty: 0.15 },
              { prompt: '하준이의 장바구니 이야기를 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['하준이는 장바구니를 쓰기로 했어요', '장바구니를 잊고 가서 비닐봉지를 받았어요', '장바구니를 신발장 손잡이에 걸어 두었어요', '나갈 때마다 장바구니를 들고 갔어요'] },
                target: { order: ['하준이는 장바구니를 쓰기로 했어요', '장바구니를 잊고 가서 비닐봉지를 받았어요', '장바구니를 신발장 손잡이에 걸어 두었어요', '나갈 때마다 장바구니를 들고 갔어요'] }, difficulty: 0.2,
                levels: { easy: { prompt: '하준이의 장바구니 이야기를 세 장으로 차례대로 놓아 보세요.', toolOptions: { cards: ['하준이는 장바구니를 쓰기로 했어요', '장바구니를 신발장 손잡이에 걸어 두었어요', '나갈 때마다 장바구니를 들고 갔어요'] }, target: { order: ['하준이는 장바구니를 쓰기로 했어요', '장바구니를 신발장 손잡이에 걸어 두었어요', '나갈 때마다 장바구니를 들고 갔어요'] } } } },
              { prompt: '친구가 다시 이어 가게 도운 것을 이어 보세요.', toolOptions: { mode: 'match', slots: [{ id: 's1', who: '민지', label: '민지가 다시 시작한 까닭' }, { id: 's2', who: '하준', label: '하준이가 잊지 않은 까닭' }], cards: ['이면지 상자가 눈앞에 있었어요', '장바구니가 신발장에 걸려 있었어요'] },
                target: { match: { s1: '이면지 상자가 눈앞에 있었어요', s2: '장바구니가 신발장에 걸려 있었어요' } }, difficulty: 0.15,
                conclude: '할 일을 잘 보이는 곳에 두면 잊지 않고 이어 가기 쉬워요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 이어 가는 방법 나누기', minutes: 13, tool: 'mindmap',
            teacher: '"이 방법을 쓰면 한 달 뒤에도 하고 있을까요?" 카드마다 한 달 뒤를 떠올리게 한다. \'한 주만 하고 쉬어요\'를 이어 가는 방법으로 놓는 학생에게 "쉬는 동안 버려지는 물건은 어떻게 될까요?"를 묻는다.',
            task: '실천을 이어 가게 돕는 방법과 그만두게 만드는 일로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '이어 가게 돕는 방법과 그만두게 만드는 일로 나누어 보세요.', toolOptions: { topic: '실천 이어 가기', slots: ['이어 가게 도와요', '그만두게 만들어요'], cards: ['짝과 서로 알려 줘요', '지킨 날에 별을 붙여요', '한 주만 하고 쉬어요', '힘들면 바로 포기해요'] },
                target: { sort: { '이어 가게 도와요': ['짝과 서로 알려 줘요', '지킨 날에 별을 붙여요'], '그만두게 만들어요': ['한 주만 하고 쉬어요', '힘들면 바로 포기해요'] } }, difficulty: 0.1 },
              { prompt: '우리 반이 함께 이어 갈 방법만 골라 보세요.', toolOptions: { mode: 'pick', basket: '우리 반이 함께', cards: ['아침마다 물병 확인 노래 부르기', '하교 전 1분 불 끄기 확인', '다짐판을 서랍에 숨기기', '못 지킨 친구 이름 적기'] },
                target: { pick: ['아침마다 물병 확인 노래 부르기', '하교 전 1분 불 끄기 확인'] }, difficulty: 0.15,
                hints: ['그 방법을 쓰면 모두가 기분 좋게 날마다 할 수 있을지 생각해 봐요.', '다짐판을 숨기거나 친구 이름을 적으면 이어 가기 쉬울까요? 고른 카드를 다시 봐요.', '날마다 정한 때에 함께 확인하는 두 가지 방법을 골라요.'] },
              { prompt: '내 다짐을 이어 갈 방법을 짝과 한 가지씩 정해 서로 말했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"이 단원의 바른 생활 공부는 여기까지지만, 다짐판은 계속 교실에 있어요." 한 달 뒤 다짐판을 다시 보는 날을 달력에 표시한다. 출구 1번 마음 크기는 솔직하게 고르게 하고, 어떤 크기든 맞다고 말해 준다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'scale', steps: 5, situation: '나는 이번 주에 내 다짐을 얼마나 지켰나요?', feeling: '뿌듯함', ask: '내가 지킨 만큼 솔직하게 골라요', scaleLabels: { 1: '조금', 5: '날마다' } }, prompt: '이번 주에 내 다짐을 지킨 만큼 솔직하게 골라 보세요. 정답은 없어요.', target: { level: 'any' }, difficulty: 0.05 },
          { type: 'choice', prompt: '한 주만 하고 그만두면 어떻게 될까요?', options: ['좋아진 것이 그대로 남아요', '쓰레기가 다시 늘어요'], answer: 1, difficulty: 0.15, explain: '그만두면 다시 버리는 물건이 생겨요. 이어 가야 달라진 것이 남아요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '날마다 이어 가요',
      items: [
        { type: 'figure', wide: true, prompt: '민지 이야기를 차례대로 1, 2, 3, 4를 쓰세요.', tool: 'story', figures: [{ options: { mode: 'order', cards: ['휴지통이 다시 가득 찼어요', '이면지에 연습하기로 했어요', '상자를 옆에 두고 다시 했어요', '귀찮아서 그만두었어요'], shuffle: false }, caption: '' }], answer: '연습하기로 함 → 그만둠 → 휴지통이 참 → 다시 함' },
        { type: 'check', prompt: '실천을 이어 가게 돕는 방법에 모두 ✓ 하세요.', options: ['짝과 서로 알려 줘요', '지킨 날 별 붙이기', '힘들면 바로 포기하기'] },
        { type: 'short', prompt: '내 다짐을 이어 갈 방법을 쓰세요.' },
        { type: 'draw', prompt: '한 달 뒤 우리 반 다짐판을 상상해 그리세요.' },
      ],
      easy: {
        note: '할 일을 잘 보이는 곳에 두면 잊지 않아요.',
        items: [
          { type: 'choice', prompt: '이어 가게 돕는 방법에 ○ 하세요.', options: ['별 붙이기', '바로 포기하기'], answer: '별 붙이기' },
          { type: 'choice', prompt: '한 주만 하고 그만두면?', options: ['쓰레기가 다시 늘어요', '그대로예요'], answer: '쓰레기가 다시 늘어요' },
          { type: 'draw', prompt: '다짐을 지키는 내 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 초록 테두리가 생기고, 하준이 이야기는 세 장만 놓아요.',
      base: '모두 놓은 뒤 확인을 눌러요. 이어 갈 방법을 짝과 정해요.',
      challenge: '네 장 이야기에서 다시 시작하게 된 까닭을 찾아 말하고, 이어 갈 방법을 두 가지 정해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 한 주만 하고 그만두어도 달라진 것이 남는다고 여긴다 → 그만둔 뒤 휴지통이 다시 찬 이야기 장면을 짚는다. ② 못 지킨 친구를 탓한다 → \'못 지킨 친구 이름 적기\'가 왜 이어 가게 돕지 않는지 이야기한다. ③ 자기 평가를 모두 \'날마다\'로 고른다 → 정답이 없고 솔직하게 고르는 것이 중요하다고 다시 말해 준다. 한 달 뒤 점검 날을 꼭 지킨다.',
  }));

  // ───────────────────────── 13~16차시: 소리 나는 물건 모으고 나누기(소리와 이미지의 특징 이해) ─────────────────────────
  // 건반 단계: 쉬움은 계이름이 보이고, 도전은 계이름 없이 귀로만
  var KEY_LV = {
    easy: { from: '도', to: '높은도', names: 'solfa' },
    base: { from: '도', to: '높은도' },
    challenge: { from: '도', to: '높은도', names: 'none', nameToggle: false },
  };

  lessons.push(L(13, {
    title: '소리 나는 것을 모아 목소리·몸·악기·물건으로 나누기',
    objective: '소리를 내는 것들을 모아 목소리·몸·악기·물건으로 나누어 놓을 수 있다.',
    illustration: ART('children making sounds in a paper classroom: one singing, one clapping, one shaking a tambourine and one tapping a pot lid with a spoon, little sound waves around them', '어떤 소리가 날까?', [
      { motif: 'star', x: 120, y: 86, s: 0.6 }, { motif: 'bird', x: 360, y: 80 }, { motif: 'flower', x: 390, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 7,
        teacher: '"모두 눈을 감아 보세요. 선생님이 무엇으로 소리를 낼까요?" 칸막이 뒤에서 냄비 뚜껑, 탬버린, 손뼉, \'아\' 목소리를 차례로 들려준다. 시연 단추로 \'노래하기\'가 \'목소리\' 칸에 놓이는 모습을 보여 준다. "소리는 목소리, 몸, 악기, 그리고 여러 물건으로 낼 수 있어요." 이번 단원 둘째 이야기는 \'소리 나는 물건\'이라고 알린다.',
        student: '눈을 감고 들은 소리가 무엇으로 낸 소리인지 짝에게 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '소리를 내는 것', slots: ['목소리', '몸', '악기', '물건'], cards: ['노래하기', '손뼉 치기'], shuffle: false }, sequence: [{ sort: { '목소리': ['노래하기'], '몸': ['손뼉 치기'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 25,
        activities: [
          {
            id: 'a1', title: '활동 1. 소리 숨바꼭질', minutes: 11, tool: 'mindmap',
            teacher: '"짝이 칸막이 뒤에서 소리를 내면, 눈을 감고 무엇인지 맞혀요." 모둠 바구니(숟가락, 빈 통, 열쇠, 종이, 캐스터네츠)를 나누어 준다. 맞힌 뒤에는 악기와 악기가 아닌 물건으로 가른다. 소리를 너무 크게 내지 않도록 손 신호(주먹 = 멈춤)를 먼저 정한다.',
            task: '짝과 소리 숨바꼭질을 하고, 들은 소리를 낸 것을 골라 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '짝과 번갈아 소리를 내고 눈을 감고 맞혀 보았으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '악기 소리만 골라 보세요.', toolOptions: { mode: 'pick', basket: '악기', cards: ['북', '캐스터네츠', '빈 페트병', '손뼉'] },
                target: { pick: ['북', '캐스터네츠'] }, difficulty: 0.1 },
              { prompt: '악기와 악기가 아닌 물건으로 나누어 보세요.', toolOptions: { topic: '소리 나는 것', slots: ['악기', '악기가 아닌 물건'], cards: ['리코더', '트라이앵글', '플라스틱 통', '열쇠 꾸러미'] },
                target: { sort: { '악기': ['리코더', '트라이앵글'], '악기가 아닌 물건': ['플라스틱 통', '열쇠 꾸러미'] } }, difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 네 무리로 나누기', minutes: 14, tool: 'mindmap',
            teacher: '"입으로 냈나요, 몸을 쳤나요, 악기를 썼나요, 다른 물건을 썼나요?" 네 질문을 손가락 네 개로 짚으며 묻는다. \'발 구르기\'를 \'물건\'에 놓는 학생에게 "무엇으로 소리를 냈지요? 발이에요, 내 몸이에요."라고 짚는다. 숟가락처럼 소리 내려고 만든 것이 아닌 물건은 \'물건\'이라는 것을 덧붙인다.',
            task: '소리를 무엇으로 냈는지 생각하며 목소리·몸·악기·물건 칸에 나누어 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '네 가지 소리를 목소리·몸·악기·물건 칸에 나누어 보세요.', toolOptions: { topic: '소리를 내는 것', slots: ['목소리', '몸', '악기', '물건'], cards: ['노래 부르기', '무릎 치기', '탬버린 흔들기', '냄비 뚜껑 두드리기'] },
                target: { sort: { '목소리': ['노래 부르기'], '몸': ['무릎 치기'], '악기': ['탬버린 흔들기'], '물건': ['냄비 뚜껑 두드리기'] } }, difficulty: 0.1 },
              { prompt: '여섯 가지 소리를 네 칸에 나누어 보세요.', toolOptions: { topic: '소리를 내는 것', slots: ['목소리', '몸', '악기', '물건'], cards: ['"야호" 외치기', '발 구르기', '실로폰 치기', '빈 깡통 두드리기', '손가락 튕기기', '종이 구기기'] },
                target: { sort: { '목소리': ['"야호" 외치기'], '몸': ['발 구르기', '손가락 튕기기'], '악기': ['실로폰 치기'], '물건': ['빈 깡통 두드리기', '종이 구기기'] } }, difficulty: 0.2,
                levels: { easy: { prompt: '네 가지 소리를 네 칸에 나누어 보세요.', toolOptions: { cards: ['"야호" 외치기', '발 구르기', '실로폰 치기', '빈 깡통 두드리기'] }, target: { sort: { '목소리': ['"야호" 외치기'], '몸': ['발 구르기'], '악기': ['실로폰 치기'], '물건': ['빈 깡통 두드리기'] } } } } },
              { prompt: '몸으로 내는 소리만 골라 보세요.', toolOptions: { mode: 'pick', basket: '몸으로 내는 소리', cards: ['혀 차기', '배 두드리기', '숟가락 부딪치기', '캐스터네츠 치기'] },
                target: { pick: ['혀 차기', '배 두드리기'] }, difficulty: 0.15,
                predict: { q: '숟가락 부딪치기는 몸으로 내는 소리일까요?', options: ['몸이에요', '물건이에요'], answer: 1 },
                conclude: '손으로 잡고 쳐도 소리가 난 곳이 숟가락이면 물건 소리예요.' },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"우리 교실에서 오늘 찾은 소리 가운데 가장 많은 무리는 무엇이었나요?" 칠판의 네 칸에 붙임쪽지를 붙여 센다. 다음 시간에는 물건 하나로 여러 소리를 내 본다고 예고하고, 집에서 소리 나는 물건을 하나 찾아오게 한다(깨지지 않는 것).',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '소리를 내는 것', slots: ['목소리', '몸', '악기', '물건'], cards: ['자장가 부르기', '손바닥 비비기', '작은북 치기', '병뚜껑 흔들기'] }, prompt: '네 가지 소리를 알맞은 칸에 놓아 보세요.', target: { sort: { '목소리': ['자장가 부르기'], '몸': ['손바닥 비비기'], '악기': ['작은북 치기'], '물건': ['병뚜껑 흔들기'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '\'발 구르기\'는 무엇으로 내는 소리일까요?', options: ['목소리', '몸', '악기'], answer: 1, difficulty: 0.1, explain: '발은 내 몸이라서 몸으로 내는 소리예요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '소리를 내는 것',
      items: [
        { type: 'table', prompt: '소리를 알맞은 칸에 옮겨 쓰세요. (노래, 손뼉, 탬버린, 숟가락)', columns: ['목소리', '몸', '악기', '물건'], rows: 1 },
        { type: 'choice', prompt: '악기에 ○ 하세요.', options: ['트라이앵글', '열쇠', '빈 통'], answer: '트라이앵글' },
        { type: 'short', prompt: '우리 집에서 소리 나는 물건을 하나 쓰세요.' },
        { type: 'draw', prompt: '내가 찾은 소리 나는 물건을 그리세요.' },
      ],
      easy: {
        note: '무엇으로 소리를 냈는지 먼저 말해 봐요.',
        items: [
          { type: 'choice', prompt: '몸으로 내는 소리에 ○ 하세요.', options: ['손뼉', '북'], answer: '손뼉' },
          { type: 'choice', prompt: '악기에 ○ 하세요.', options: ['탬버린', '냄비 뚜껑'], answer: '탬버린' },
          { type: 'draw', prompt: '소리 나는 물건을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 틀리면 카드가 돌아와요. 네 무리 나누기는 카드 네 장이에요.',
      base: '여섯 장을 네 칸에 나누어요.',
      challenge: '숟가락처럼 손으로 쥐고 내는 물건 소리를 몸 소리와 가려 까닭을 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 손으로 쥐고 친 물건 소리를 \'몸\'으로 놓는다 → "소리가 난 곳이 어디예요?"를 묻는다. ② 악기만 소리를 낸다고 여긴다 → 숟가락·종이 소리를 들려준다. ③ 소리 놀이가 커져 시끄러워진다 → 주먹 신호에 멈추는 연습을 먼저 한다. 집에서 가져오는 물건은 깨지지 않는 것만 허락한다.',
  }));

  lessons.push(L(14, {
    title: '종이 한 장으로 여러 가지 소리 내기',
    objective: '종이와 컵 하나로 방법을 바꾸어 서로 다른 소리를 내 보고, 방법과 소리를 이을 수 있다.',
    illustration: ART('a child holding one sheet of paper making different sounds: waving, crumpling and scratching it, with playful sound words floating around', '종이 한 장, 소리 여러 개', [
      { motif: 'cloud', x: 360, y: 80, s: 0.6 }, { motif: 'leaf', x: 120, y: 100 }, { motif: 'tree', x: 390, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"종이 한 장으로 소리를 몇 가지 낼 수 있을까요? 한 가지? 두 가지?" 예상을 손가락으로 들게 한다. 선생님이 종이를 흔들고, 구기고, 손톱으로 긁어 보인다. 시연 단추로 \'흔들어요\'와 \'펄럭펄럭\'이 이어지는 모습을 보여 준다. "한 물건에서 한 가지 소리만 나는 게 아니에요."',
        student: '종이 한 장으로 낼 수 있는 소리가 몇 가지일지 손가락으로 예상해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '종이 한 장', slots: [{ id: 's1', label: '종이를 흔들어요' }], cards: ['펄럭펄럭', '쿵쿵'], shuffle: false, hint1: '그 방법으로 소리를 직접 내 보고, 들린 소리에 가장 가까운 흉내말을 찾아요.' }, sequence: [{ match: { s1: '펄럭펄럭' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 종이 소리 찾기 (탐색)', minutes: 14, tool: 'mindmap',
            teacher: '"흔들기, 구기기, 긁기, 두드리기, 불기. 몇 가지까지 찾았나요?" 모둠마다 이면지 한 장씩 나누어 주고 3분 동안 소리를 찾게 한다. 찾은 방법은 붙임쪽지에 그림으로 남긴다. 찢는 소리는 종이를 버리게 되니 한 번만 해 본다.',
            task: '종이 한 장으로 방법을 바꾸어 소리를 내 보고, 방법과 들린 소리를 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '종이 한 장으로 세 가지 넘게 소리를 내 보았으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '종이로 소리 낸 방법과 들린 소리를 이어 보세요.', toolOptions: { mode: 'match', topic: '종이 한 장', hint1: '그 방법으로 소리를 직접 내 보고, 들린 소리에 가장 가까운 흉내말을 찾아요.', slots: [{ id: 's1', label: '종이를 흔들어요' }, { id: 's2', label: '종이를 구겨요' }, { id: 's3', label: '종이를 손톱으로 긁어요' }], cards: ['펄럭펄럭', '바스락바스락', '사각사각'] },
                target: { match: { s1: '펄럭펄럭', s2: '바스락바스락', s3: '사각사각' } }, difficulty: 0.15 },
              { prompt: '플라스틱 컵으로 소리 낸 방법과 들린 소리를 이어 보세요.', toolOptions: { mode: 'match', topic: '컵 하나', hint1: '그 방법으로 소리를 직접 내 보고, 들린 소리에 가장 가까운 흉내말을 찾아요.', slots: [{ id: 's1', label: '컵 바닥을 손가락으로 톡톡' }, { id: 's2', label: '컵을 책상에 탕 내려놓기' }], cards: ['톡톡 작은 소리', '탕 큰 소리'] },
                target: { match: { s1: '톡톡 작은 소리', s2: '탕 큰 소리' } }, difficulty: 0.1,
                levels: { challenge: { prompt: '플라스틱 컵으로 낸 방법 세 가지와 소리를 이어 보세요.', toolOptions: { slots: [{ id: 's1', label: '컵 바닥을 손가락으로 톡톡' }, { id: 's2', label: '컵을 책상에 탕 내려놓기' }, { id: 's3', label: '컵 입구에 대고 "아" 하기' }], cards: ['톡톡 작은 소리', '탕 큰 소리', '웅웅 울리는 소리'] }, target: { match: { s1: '톡톡 작은 소리', s2: '탕 큰 소리', s3: '웅웅 울리는 소리' } } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 세게·여리게, 빠르게·느리게', minutes: 12, tool: 'mindmap',
            teacher: '"같은 컵을 살살 두드릴 때와 세게 두드릴 때 소리가 같나요?" 두 번 들려주고 손을 들게 한다. 빠르게 두드리면 \'타닥타닥\', 느리게 두드리면 \'탁…탁…\'이 된다는 것을 직접 해 보인다. 크기와 빠르기가 다른 것이라는 것을 짚는다(크게 치면서 느리게도 칠 수 있다).',
            task: '같은 물건을 두드리는 방법을 바꾸면 소리가 어떻게 달라지는지 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '두드리는 방법과 소리의 크기를 이어 보세요.', toolOptions: { mode: 'match', topic: '소리의 크기', hint1: '힘을 많이 줄 때와 적게 줄 때 소리가 어떻게 다른지 떠올려 이어요.', slots: [{ id: 's1', label: '책상을 살살 두드려요' }, { id: 's2', label: '책상을 세게 두드려요' }], cards: ['작은 소리', '큰 소리'] },
                target: { match: { s1: '작은 소리', s2: '큰 소리' } }, difficulty: 0.05 },
              { prompt: '두드리는 빠르기와 소리를 이어 보세요.', toolOptions: { mode: 'match', topic: '소리의 빠르기', hint1: '자주 두드릴 때와 가끔 두드릴 때 소리가 어떻게 이어지는지 떠올려요.', slots: [{ id: 's1', label: '아주 자주 두드려요' }, { id: 's2', label: '천천히 한 번씩 두드려요' }], cards: ['타닥타닥 빠른 소리', '탁… 탁… 느린 소리'] },
                target: { match: { s1: '타닥타닥 빠른 소리', s2: '탁… 탁… 느린 소리' } }, difficulty: 0.1 },
              { prompt: '작은 소리를 내는 방법만 골라 보세요.', toolOptions: { mode: 'pick', basket: '작은 소리 내기', cards: ['손가락 끝으로 톡 치기', '종이를 살살 흔들기', '주먹으로 쾅 치기', '컵을 높이 들어 떨어뜨리기'] },
                target: { pick: ['손가락 끝으로 톡 치기', '종이를 살살 흔들기'] }, difficulty: 0.15,
                predict: { q: '빠르게 두드리면 소리가 꼭 커질까요?', options: ['꼭 커져요', '작게도 돼요'], answer: 1 },
                conclude: '빠르기와 크기는 달라요. 빠르게 두드려도 살살 치면 작은 소리가 나요.' },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"종이 한 장으로 몇 가지 소리를 찾았나요?" 모둠마다 찾은 수를 말하고 가장 신기했던 소리를 한 번 들려준다. 쓴 종이는 펴서 이면지 상자에 넣는다. 다음 시간에는 높은 소리와 낮은 소리를 찾는다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '비닐봉지 하나', slots: [{ id: 'e1', label: '봉지를 구겨요' }, { id: 'e2', label: '봉지에 바람을 넣고 손으로 쳐요' }], cards: ['부스럭부스럭', '퍽'] }, prompt: '비닐봉지로 소리 낸 방법과 소리를 이어 보세요.', target: { match: { e1: '부스럭부스럭', e2: '퍽' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '물건 하나로 낼 수 있는 소리는?', options: ['한 가지뿐이에요', '방법을 바꾸면 여러 가지예요'], answer: 1, difficulty: 0.1, explain: '흔들기, 구기기, 두드리기처럼 방법을 바꾸면 소리가 달라져요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '종이 한 장, 소리 여러 개',
      items: [
        { type: 'table', prompt: '종이로 소리를 낸 방법과 들린 소리를 쓰세요.', columns: ['방법', '들린 소리'], cells: [['흔들기', ''], ['구기기', ''], ['', '']] },
        { type: 'choice', prompt: '작은 소리를 내는 방법에 ○ 하세요.', options: ['살살 두드리기', '세게 두드리기'], answer: '살살 두드리기' },
        { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '물건 하나로도 ___을 바꾸면 여러 가지 소리가 나요.', answer: '방법' },
        { type: 'draw', prompt: '내가 찾은 가장 신기한 소리를 내는 모습을 그리세요.' },
      ],
      easy: {
        note: '직접 소리를 내 보고 들린 대로 써요.',
        items: [
          { type: 'choice', prompt: '종이를 구기면 나는 소리에 ○ 하세요.', options: ['바스락', '쿵쿵'], answer: '바스락' },
          { type: 'choice', prompt: '세게 두드리면?', options: ['큰 소리', '작은 소리'], answer: '큰 소리' },
          { type: 'draw', prompt: '종이로 소리 내는 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '모두 이은 뒤 확인을 눌러요. 직접 소리를 내 보고 이어요.',
      challenge: '컵 소리를 세 가지 이어 보고, 빠르기와 크기가 다르다는 것을 소리로 보여 줘요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 한 도구에서는 한 가지 소리만 난다고 여긴다 → 종이 한 장으로 다섯 가지를 찾게 한다. ② 빠르면 크다고 여긴다 → 빠르고 작은 소리를 들려준다. ③ 흉내말을 하나로만 고집한다 → 사람마다 다르게 들릴 수 있지만 오늘 판에서는 가장 가까운 것을 고른다고 말한다. 종이는 찢지 않고 다시 쓴다.',
  }));

  lessons.push(L(15, {
    title: '고무줄 상자로 높은 소리 낮은 소리 찾기',
    objective: '고무줄의 당긴 정도와 굵기에 따라 높은 소리와 낮은 소리가 나는 것을 알고, 건반에서 높고 낮은 소리를 칠 수 있다.',
    illustration: ART('a small paper box with rubber bands of different thickness stretched across it like a guitar, a child plucking one band, musical notes floating up and down', '높은 소리, 낮은 소리', [
      { motif: 'star', x: 110, y: 90, s: 0.6 }, { motif: 'bird', x: 370, y: 84 }, { motif: 'flower', x: 380, y: 228 }]),
    safety: ['고무줄은 친구 쪽으로 당기거나 튕기지 않아요.', '고무줄이 끊어질 만큼 세게 당기지 않아요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"선생님이 고무줄을 살짝 당기고 튕길 때와 팽팽하게 당기고 튕길 때, 소리가 어떻게 다를까요?" 빈 상자에 고무줄을 걸어 두 번 튕겨 보인다. "새소리처럼 가늘고 높은 소리, 곰 목소리처럼 굵고 낮은 소리가 있어요." 시연 단추로 건반에서 낮은 도와 높은 도가 눌리는 모습을 보여 준다. 높은 소리를 \'큰 소리\'와 헷갈리는 학생이 있는지 살핀다.',
        student: '내 목소리로 높은 "아"와 낮은 "아"를 작게 내 봐요.',
        demo: { tool: 'keyboard', options: { from: '도', to: '높은도' }, sequence: [{ notes: ['도', '높은도'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 고무줄 상자 만들어 튕기기 (실습)', minutes: 12, tool: 'mindmap',
            teacher: '"굵은 고무줄과 가는 고무줄을 하나씩 걸어 보세요. 어느 쪽이 더 높은 소리가 날까요?" 빈 휴지 상자나 반찬통에 고무줄 두 개를 걸게 한다. 같은 고무줄을 더 팽팽하게 당기면 높아진다는 것을 직접 튕겨 확인하게 한다. 높은 소리와 큰 소리는 다르다는 것을 짚는다(살살 튕겨도 높은 소리가 난다).',
            task: '고무줄 상자를 만들어 튕겨 보고, 고무줄 모양과 소리의 높낮이를 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '상자에 굵은 고무줄과 가는 고무줄을 걸고 튕겨 보았으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '고무줄과 소리의 높낮이를 이어 보세요.', toolOptions: { mode: 'match', topic: '고무줄 소리', hint1: '고무줄을 직접 튕겨 보고, 가늘게 들리는지 굵게 들리는지 견주어 이어요.', slots: [{ id: 's1', label: '팽팽하게 당긴 고무줄' }, { id: 's2', label: '느슨한 고무줄' }], cards: ['높은 소리', '낮은 소리'] },
                target: { match: { s1: '높은 소리', s2: '낮은 소리' } }, difficulty: 0.15,
                predict: { q: '고무줄을 더 팽팽하게 당기면 소리가 어떻게 될까요?', options: ['높아져요', '낮아져요', '똑같아요'], answer: 0 },
                conclude: '같은 고무줄도 팽팽하게 당길수록 높은 소리가 나요.' },
              { prompt: '굵기가 다른 고무줄과 소리를 이어 보세요.', toolOptions: { mode: 'match', topic: '고무줄 소리', hint1: '고무줄을 직접 튕겨 보고, 가늘게 들리는지 굵게 들리는지 견주어 이어요.', slots: [{ id: 's1', label: '굵은 고무줄' }, { id: 's2', label: '가는 고무줄' }], cards: ['더 낮은 소리', '더 높은 소리'] },
                target: { match: { s1: '더 낮은 소리', s2: '더 높은 소리' } }, difficulty: 0.2 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 건반으로 높낮이 치기', minutes: 14, tool: 'keyboard',
            teacher: '"건반은 오른쪽으로 갈수록 높은 소리, 왼쪽으로 갈수록 낮은 소리예요." 손을 계단처럼 올리며 \'도 레 미\'를 함께 부른다. 가락 듣기는 한 번 듣고 바로 치지 말고 손으로 높낮이를 그려 본 뒤 치게 한다. 짓기 문항은 높은 도에서 시작해 낮은 도로 내려오면 어떤 길이든 맞다고 말해 준다.',
            task: '건반에서 높은 소리와 낮은 소리를 찾아 치고, 높은 데서 낮은 데로 가는 가락을 지어요.',
            levels: KEY_LV,
            items: [
              { prompt: '건반에서 가장 낮은 도를 치고, 그다음 가장 높은 도를 쳐 보세요.', target: { notes: ['도', '높은도'] }, difficulty: 0.1,
                hints: ['건반은 왼쪽이 낮은 소리, 오른쪽이 높은 소리예요.', '두 번째로 친 음이 건반 맨 오른쪽 끝인지 보세요.', '맨 왼쪽 도를 치고, 맨 오른쪽 높은도를 쳐요.'] },
              { prompt: '가락 듣기를 누르고, 들은 가락을 똑같이 쳐 보세요.', toolOptions: { melody: ['솔', '미', '솔', '미', '도'] }, target: { notes: ['솔', '미', '솔', '미', '도'] }, difficulty: 0.25,
                levels: { easy: { prompt: '가락 듣기를 누르고, 들은 세 음 가락을 똑같이 쳐 보세요.', toolOptions: { melody: ['솔', '미', '도'] }, target: { notes: ['솔', '미', '도'] } } } },
              { prompt: '높은 도에서 시작해 도로 끝나는 네 음 가락을 지어 보세요.', target: { compose: { length: 4, startOn: '높은도', endOn: '도' } }, difficulty: 0.2 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"새가 노래하는 소리는 높을까요, 낮을까요? 큰 북은요?" 두세 가지 소리를 말로 묻고 손을 위아래로 들게 한다. 출구 2번에서 \'큰 소리\'를 고른 학생에게 살살 튕긴 높은 소리를 다시 들려준다. 고무줄 상자는 이름 대신 무늬를 그려 보관한다.',
        exitTicket: [
          { type: 'tool', tool: 'keyboard', options: { from: '도', to: '높은도' }, prompt: '미에서 시작해 높은도로 끝나는 세 음 가락을 지어 보세요.', target: { compose: { length: 3, startOn: '미', endOn: '높은도' } }, difficulty: 0.2 },
          { type: 'choice', prompt: '고무줄을 살살 튕겼는데 가늘고 높게 들렸어요. 이 소리는?', options: ['높고 작은 소리', '낮고 큰 소리'], answer: 0, difficulty: 0.2, explain: '높낮이와 크기는 달라요. 살살 튕기면 작고, 가늘게 들리면 높은 소리예요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '높은 소리, 낮은 소리',
      items: [
        { type: 'choice', prompt: '더 높은 소리가 나는 고무줄에 ○ 하세요.', options: ['팽팽한 고무줄', '느슨한 고무줄'], answer: '팽팽한 고무줄' },
        { type: 'figure', wide: true, prompt: '건반에서 가장 높은 소리가 나는 곳에 ○ 하세요.', tool: 'keyboard', options: { from: '도', to: '높은도' }, figures: [{ caption: '' }], answer: '맨 오른쪽 높은도' },
        { type: 'table', prompt: '높은 소리와 낮은 소리를 하나씩 찾아 쓰세요.', columns: ['높은 소리', '낮은 소리'], rows: 2 },
        { type: 'draw', prompt: '내 고무줄 상자를 그리세요.' },
      ],
      easy: {
        note: '새는 높게, 곰은 낮게!',
        items: [
          { type: 'choice', prompt: '높은 소리에 ○ 하세요.', options: ['새소리', '큰 북 소리'], answer: '새소리' },
          { type: 'choice', prompt: '팽팽한 고무줄은?', options: ['높은 소리', '낮은 소리'], answer: '높은 소리' },
          { type: 'draw', prompt: '고무줄 상자를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '건반에 계이름이 보이고, 따라 치기는 세 음이에요.',
      base: '계이름 보이기 단추로 확인하며 다섯 음을 따라 쳐요.',
      challenge: '계이름 없이 귀로만 듣고 치고, 굵기와 당김을 함께 바꿔 소리를 견주어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 높은 소리를 큰 소리로 여긴다 → 살살 튕긴 높은 소리와 세게 튕긴 낮은 소리를 함께 들려준다. ② 건반의 높낮이 방향을 헷갈린다 → 오른손을 위로, 왼손을 아래로 드는 몸짓을 함께 한다. ③ 고무줄을 친구에게 튕긴다 → 안전 약속을 시작 전에 말하고 고무줄은 교사가 나누어 준다.',
  }));

  lessons.push(L(16, {
    title: '들은 소리를 흉내말로 나타내기',
    objective: '생활 속 소리를 듣고 어울리는 흉내말을 고르고, 같은 물건도 방법에 따라 다른 흉내말이 된다는 것을 말할 수 있다.',
    illustration: ART('paper sound words floating out of everyday objects: rain drops on an umbrella, a ticking clock, a squeaking door and a bouncing ball', '소리를 말로 나타내요', [
      { motif: 'cloud', x: 120, y: 70 }, { motif: 'house', x: 380, y: 216, color: 'peach' }, { motif: 'flower', x: 240, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"비가 올 때 창문에서 어떤 소리가 나요?" 학생들이 \'톡톡\', \'주룩주룩\'을 말하게 한다. 시연 단추로 \'시계\'와 \'똑딱똑딱\'이 이어지는 모습을 보여 준다. "들은 소리를 말로 흉내 낸 것을 흉내말이라고 해요." 같은 소리도 사람마다 조금 다르게 들릴 수 있다고 말해 준다.',
        student: '지금 교실에서 들리는 소리를 하나 골라 흉내말로 말해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '소리 흉내말', slots: [{ id: 's1', label: '벽시계' }], cards: ['똑딱똑딱', '멍멍'], shuffle: false, hint1: '그 물건이 내는 소리를 떠올려 입으로 따라 해 보고, 가장 비슷한 흉내말을 찾아요.' }, sequence: [{ match: { s1: '똑딱똑딱' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 소리와 흉내말 잇기', minutes: 14, tool: 'mindmap',
            teacher: '"이 물건 소리를 입으로 따라 해 볼까요?" 카드마다 반 전체가 입으로 소리를 흉내 내 본 뒤 잇게 한다. 문이 \'끼익\', 공이 \'통통\' 하는 소리를 직접 들려준다. 흉내말이 하나뿐이 아니라는 학생에게는 오늘 판에서 가장 가까운 것을 고르고 다른 말은 활동지에 써 보게 한다.',
            task: '물건이 내는 소리를 입으로 따라 해 보고 어울리는 흉내말을 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '물건과 어울리는 흉내말을 이어 보세요.', toolOptions: { mode: 'match', topic: '소리 흉내말', hint1: '그 물건이 내는 소리를 떠올려 입으로 따라 해 보고, 가장 비슷한 흉내말을 찾아요.', slots: [{ id: 's1', label: '낡은 나무 문을 열 때' }, { id: 's2', label: '공이 바닥에 튈 때' }], cards: ['끼익', '통통'] },
                target: { match: { s1: '끼익', s2: '통통' } }, difficulty: 0.05 },
              { prompt: '세 가지 소리에 어울리는 흉내말을 이어 보세요.', toolOptions: { mode: 'match', topic: '소리 흉내말', hint1: '그 물건이 내는 소리를 떠올려 입으로 따라 해 보고, 가장 비슷한 흉내말을 찾아요.', slots: [{ id: 's1', label: '우산에 빗방울이 떨어질 때' }, { id: 's2', label: '냄비 물이 끓을 때' }, { id: 's3', label: '자전거 종을 누를 때' }], cards: ['토독토독', '보글보글', '따르릉'] },
                target: { match: { s1: '토독토독', s2: '보글보글', s3: '따르릉' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['토독토독', '보글보글', '따르릉', '야옹'] } } } },
              { prompt: '물건이 내는 소리를 흉내 낸 말만 골라 보세요.', toolOptions: { mode: 'pick', basket: '물건 소리 흉내말', cards: ['딸랑딸랑', '쨍그랑', '꼬끼오', '음매'] },
                target: { pick: ['딸랑딸랑', '쨍그랑'] }, difficulty: 0.15,
                conclude: '꼬끼오·음매는 동물 소리 흉내말이에요. 물건 소리와 나누어 볼 수 있어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 같은 물건, 다른 흉내말', minutes: 12, tool: 'mindmap',
            teacher: '"빗소리가 늘 \'토독토독\'일까요? 비가 많이 오면요?" 약한 비와 센 비를 손가락 두드리기로 들려준다. 같은 물건도 방법이나 세기에 따라 흉내말이 달라진다는 것을 짚는다. 큰 소리 흉내말은 큰 글씨로, 작은 소리 흉내말은 작은 글씨로 쓰면 소리가 그림처럼 보인다는 것을 칠판에 써 보인다.',
            task: '같은 물건이 다르게 낸 소리를 알맞은 흉내말과 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '비가 오는 모습과 흉내말을 이어 보세요.', toolOptions: { mode: 'match', topic: '빗소리', hint1: '비가 얼마나 많이 오는지 떠올려 보고, 그 소리에 맞는 흉내말을 찾아요.', slots: [{ id: 's1', label: '비가 조금씩 올 때' }, { id: 's2', label: '비가 아주 세게 쏟아질 때' }], cards: ['똑똑', '쏴아'] },
                target: { match: { s1: '똑똑', s2: '쏴아' } }, difficulty: 0.1 },
              { prompt: '문을 닫는 방법과 흉내말을 이어 보세요.', toolOptions: { mode: 'match', topic: '문 닫는 소리', hint1: '힘을 얼마나 주어 닫는지 떠올리고, 그때 나는 소리에 맞는 흉내말을 찾아요.', slots: [{ id: 's1', label: '문을 살며시 닫을 때' }, { id: 's2', label: '바람에 문이 세게 닫힐 때' }], cards: ['딸깍', '쾅'] },
                target: { match: { s1: '딸깍', s2: '쾅' } }, difficulty: 0.15 },
              { prompt: '큰 소리 흉내말과 작은 소리 흉내말로 나누어 보세요.', toolOptions: { topic: '소리의 크기', slots: ['큰 소리', '작은 소리'], cards: ['와장창', '쾅쾅', '소곤소곤', '사르르'] },
                target: { sort: { '큰 소리': ['와장창', '쾅쾅'], '작은 소리': ['소곤소곤', '사르르'] } }, difficulty: 0.15 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"우리 집에서 들리는 소리 하나를 흉내말로 말해 볼까요?" 두세 명이 말하면 반 전체가 따라 한다. 활동지 표에 오늘 집에서 들은 소리를 하나 더 써 오게 한다. 다음 시간에는 고른 물건 하나로 소리를 여러 가지 내 보고 리듬을 만든다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '소리 흉내말', slots: [{ id: 'e1', label: '마른 낙엽을 밟을 때' }, { id: 'e2', label: '병뚜껑이 바닥에 떨어질 때' }], cards: ['바삭바삭', '땡그랑'] }, prompt: '두 소리에 어울리는 흉내말을 이어 보세요.', target: { match: { e1: '바삭바삭', e2: '땡그랑' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '비가 아주 세게 쏟아지는 소리에 어울리는 흉내말은?', options: ['똑똑', '쏴아', '소곤소곤'], answer: 1, difficulty: 0.1, explain: '비가 세게 쏟아지면 큰 소리가 이어져 \'쏴아\'처럼 들려요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '소리를 말로 나타내요',
      items: [
        { type: 'figure', wide: true, prompt: '소리와 흉내말을 선으로 이으세요.', tool: 'mindmap', figures: [{ options: { mode: 'match', topic: '소리 흉내말', slots: [{ id: 's1', label: '자전거 종' }, { id: 's2', label: '끓는 물' }], cards: ['보글보글', '따르릉'] }, caption: '' }], answer: '자전거 종-따르릉, 끓는 물-보글보글' },
        { type: 'table', prompt: '집에서 들은 소리와 흉내말을 쓰세요.', columns: ['들은 소리', '흉내말'], rows: 2 },
        { type: 'choice', prompt: '작은 소리 흉내말에 ○ 하세요.', options: ['소곤소곤', '와장창'], answer: '소곤소곤' },
        { type: 'draw', prompt: '큰 소리 흉내말은 크게, 작은 소리 흉내말은 작게 써서 꾸미세요.' },
      ],
      easy: {
        note: '소리를 입으로 따라 해 보고 골라요.',
        items: [
          { type: 'choice', prompt: '시계 소리에 ○ 하세요.', options: ['똑딱똑딱', '멍멍'], answer: '똑딱똑딱' },
          { type: 'choice', prompt: '공이 튀는 소리에 ○ 하세요.', options: ['통통', '보글보글'], answer: '통통' },
          { type: 'draw', prompt: '소리 나는 물건을 그리고 흉내말을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '모두 이은 뒤 확인을 눌러요. 입으로 따라 해 보고 골라요.',
      challenge: '동물 소리 함정 카드를 골라내고, 같은 물건의 흉내말을 두 가지 더 지어 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 흉내말은 하나로 정해져 있다고 여긴다 → 들은 대로 새 흉내말을 지어도 된다고 말하되 판에서는 가장 가까운 것을 고른다. ② 흉내말(소리)과 꾸밈말(모양: 반짝반짝)을 섞는다 → "귀로 들리나요, 눈으로 보이나요?"를 묻는다. ③ 동물 소리와 물건 소리를 섞는다 → 소리를 낸 것이 무엇인지 먼저 말하게 한다.',
  }));

  // ───────────────────────── 17~20차시: 고른 물건으로 소리 내고 이야기를 소리로(감각으로 탐색하고 나타내기) ─────────────────────────
  // 리듬 블록 단계: 쉬움 한 마디·박 수 표시, 기본 두 마디, 도전은 8분쉼표까지
  var RHY_LV = {
    easy: { mode: 'rhythm', meter: 4, measures: 1, blocks: ['q', 'h', 'qr'], showBeats: true },
    base: { mode: 'rhythm', meter: 4, measures: 2, blocks: ['q', 'e', 'h', 'qr'] },
    challenge: { mode: 'rhythm', meter: 4, measures: 2, blocks: ['q', 'e', 'h', 'qr', 'er'] },
  };

  lessons.push(L(17, {
    title: '악기 하나를 여러 방법으로 소리 내고 리듬 치기',
    objective: '탬버린·트라이앵글 같은 악기 하나를 여러 방법으로 소리 내 보고, 고른 소리로 네 박 리듬을 칠 수 있다.',
    illustration: ART('a child exploring a paper tambourine by shaking it, tapping it and rubbing its skin, with a triangle and castanets on the table', '여러 방법으로 소리 내기', [
      { motif: 'star', x: 120, y: 86, s: 0.6 }, { motif: 'flower', x: 380, y: 228, color: 'lavender' }, { motif: 'tree', x: 400, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"탬버린은 어떻게 소리를 내나요? 흔들기만 할까요?" 한 학생이 앞에 나와 흔들어 보게 한 뒤, 선생님이 손바닥으로 치고 가죽을 손가락으로 문질러 보인다. 시연 단추로 \'흔들어요\'와 \'찰랑찰랑\'이 이어지는 모습을 보여 준다. "악기도 정해진 한 가지 방법만 있는 게 아니에요. 다만 악기가 상하지 않게 다뤄요."',
        student: '탬버린으로 소리를 내는 방법을 한 가지 더 떠올려 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '탬버린 하나', slots: [{ id: 's1', label: '흔들어요' }], cards: ['찰랑찰랑', '보글보글'], shuffle: false, hint1: '그 방법으로 직접 소리를 내 보고, 들린 소리에 가장 가까운 말을 찾아요.' }, sequence: [{ match: { s1: '찰랑찰랑' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 악기 하나, 방법 여러 개 (탐색)', minutes: 12, tool: 'mindmap',
            teacher: '"모둠 악기로 세 가지 방법을 찾아보세요. 단, 던지거나 밟는 것은 안 돼요." 모둠마다 탬버린·트라이앵글·캐스터네츠 가운데 하나를 준다. 트라이앵글을 손으로 꽉 쥐고 치면 소리가 금방 멈춘다는 것을 직접 들려준다. 찾은 방법은 모둠 대표가 한 가지씩 시연한다.',
            task: '모둠 악기로 여러 방법을 찾아 소리를 내 보고, 방법과 소리를 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '모둠 악기를 세 가지 방법으로 소리 내 보았으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '탬버린을 연주한 방법과 소리를 이어 보세요.', toolOptions: { mode: 'match', topic: '탬버린 하나', hint1: '그 방법으로 직접 소리를 내 보고, 들린 소리에 가장 가까운 말을 찾아요.', slots: [{ id: 's1', label: '흔들어요' }, { id: 's2', label: '손바닥으로 쳐요' }, { id: 's3', label: '손가락으로 가죽을 문질러요' }], cards: ['찰랑찰랑', '탕', '스르르'] },
                target: { match: { s1: '찰랑찰랑', s2: '탕', s3: '스르르' } }, difficulty: 0.15 },
              { prompt: '트라이앵글 소리가 잘 울리는 방법만 골라 보세요.', toolOptions: { mode: 'pick', basket: '잘 울리는 방법', cards: ['줄을 잡고 막대로 바깥쪽 치기', '막대로 안쪽을 빙빙 돌려 치기', '몸통을 손으로 꽉 쥐고 치기', '바닥에 내려놓고 치기'] },
                target: { pick: ['줄을 잡고 막대로 바깥쪽 치기', '막대로 안쪽을 빙빙 돌려 치기'] }, difficulty: 0.25,
                predict: { q: '트라이앵글 몸통을 손으로 꽉 쥐고 치면 소리가 어떨까요?', options: ['길게 울려요', '금방 멈춰요'], answer: 1 },
                conclude: '트라이앵글은 매달려 떨려야 울려요. 손으로 쥐면 떨림이 멈춰 소리가 짧아져요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 고른 소리로 네 박 리듬', minutes: 14, tool: 'keyboard',
            teacher: '"하나 둘 셋 넷, 박에 맞춰 손뼉을 쳐요." 리듬 블록을 놓은 뒤 모둠 악기로 그 리듬을 쳐 보게 한다. 4분음표는 \'탕\', 8분음표 둘은 \'찰찰\'처럼 방법을 바꿔 쳐도 된다고 말해 준다. 마디 박이 넘치거나 모자라면 한 박씩 손뼉으로 세어 보게 한다.',
            task: '들은 리듬을 블록으로 놓고, 내 리듬도 지어 모둠 악기로 쳐 봐요.',
            levels: RHY_LV,
            items: [
              { prompt: '리듬 듣기를 누르고, 들은 리듬을 블록으로 놓아 보세요.', toolOptions: { pattern: ['q', 'q', 'e', 'e', 'q', 'h', 'q', 'qr'] }, target: { rhythm: ['q', 'q', 'e', 'e', 'q', 'h', 'q', 'qr'] }, difficulty: 0.25,
                levels: { easy: { prompt: '리듬 듣기를 누르고, 들은 한 마디 리듬을 블록으로 놓아 보세요.', toolOptions: { pattern: ['q', 'q', 'h'] }, target: { rhythm: ['q', 'q', 'h'] } } } },
              { prompt: '쉼표가 한 번 들어간 리듬을 지어 마디마다 4박을 채워 보세요.', target: { beats: true, rests: 1 }, difficulty: 0.25 },
              { prompt: '내 리듬을 모둠 악기로 두 가지 방법을 섞어 쳐 보고 점검해 보세요.', target: { beats: true, selfCheck: ['마디마다 4박을 채웠어요', '악기를 두 가지 방법으로 쳤어요', '짝에게 들려주었어요'] }, difficulty: 0.15 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 찾은 방법 가운데 가장 놀라웠던 것은 무엇이에요?" 모둠마다 한 가지씩 들려준다. 악기는 소리가 나지 않게 두 손으로 들어 바구니에 넣는다. 다음 시간에는 이런 소리로 짧은 이야기를 들려준다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 1, blocks: ['q', 'e', 'h', 'qr'] }, prompt: '8분음표가 들어간 한 마디 리듬으로 4박을 채워 보세요.', target: { beats: true, use: ['e'] }, difficulty: 0.2 },
          { type: 'choice', prompt: '악기로 소리를 내는 방법은?', options: ['정해진 한 가지뿐이에요', '상하지 않게 여러 방법으로 낼 수 있어요'], answer: 1, difficulty: 0.1, explain: '탬버린은 흔들고, 치고, 문질러서도 소리를 낼 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '악기 하나, 소리 여러 개',
      items: [
        { type: 'table', prompt: '모둠 악기로 소리 낸 방법과 소리를 쓰세요.', columns: ['방법', '소리'], rows: 3 },
        { type: 'choice', prompt: '트라이앵글이 잘 울리는 방법에 ○ 하세요.', options: ['줄을 잡고 치기', '몸통을 꽉 쥐고 치기'], answer: '줄을 잡고 치기' },
        { type: 'figure', prompt: '마디에 몇 박인지 세어 쓰세요.', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 1 }, figures: [{ state: { rhythm: ['q', 'e', 'e', 'h'] }, caption: '___박' }], answer: '4박' },
        { type: 'draw', prompt: '내가 찾은 방법으로 악기를 연주하는 모습을 그리세요.' },
      ],
      easy: {
        note: '하나 둘 셋 넷, 손뼉으로 박을 먼저 세어요.',
        items: [
          { type: 'choice', prompt: '탬버린을 흔들면 나는 소리에 ○ 하세요.', options: ['찰랑찰랑', '쿵쿵'], answer: '찰랑찰랑' },
          { type: 'choice', prompt: '악기를 다룰 때 하지 않을 일에 ○ 하세요.', options: ['던지기', '살살 치기'], answer: '던지기' },
          { type: 'draw', prompt: '악기를 연주하는 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '리듬은 한 마디이고, 마디마다 지금 박 수가 보여요.',
      base: '두 마디 리듬을 듣고 놓고, 쉼표를 넣어 지어요.',
      challenge: '8분쉼표까지 써서 리듬을 짓고, 세 가지 방법을 섞어 연주해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 악기는 정해진 방법으로만 소리 내야 한다고 여긴다 → 탬버린 세 가지 방법을 직접 들려준다. 다만 던지기·밟기처럼 악기를 상하게 하는 방법은 안 된다고 선을 긋는다. ② 박을 세지 않고 블록을 많이 놓는다 → 손뼉으로 박을 세며 블록을 짚게 한다. ③ 소리가 커지면 멈추지 않는다 → 주먹 신호를 다시 연습한다.',
  }));

  lessons.push(L(18, {
    title: '"비가 오다가 그쳤어요"를 소리로 들려주기',
    objective: '짧은 이야기의 장면 차례에 맞추어 소리를 놓고, 장면에 어울리는 물건 소리를 골라 모둠이 함께 들려줄 수 있다.',
    illustration: ART('a group of children telling a rain story with sounds: fingers tapping a desk for raindrops, shaking paper for wind and a small drum for thunder, a paper cloud above them', '소리로 들려주는 이야기', [
      { motif: 'cloud', x: 120, y: 70 }, { motif: 'cloud', x: 360, y: 80, s: 0.7 }, { motif: 'house', x: 380, y: 216, color: 'sky' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"눈을 감고 들어 보세요. 무슨 일이 일어나고 있을까요?" 손가락으로 책상을 톡… 톡… 두드리다 점점 빠르고 세게, 다시 약하게, 그리고 멈춘다. "비가 오다가 그쳤어요!" 시연 단추로 비 이야기 카드가 차례로 놓이는 모습을 보여 준다. 소리만으로도 이야기를 들려줄 수 있다는 것을 짚는다.',
        student: '눈을 감고 선생님 소리를 들으며 어떤 날씨인지 떠올려 봐요.',
        demo: { tool: 'story', options: { mode: 'order', cards: ['톡… 톡…', '쏴아', '조용'], shuffle: false }, sequence: [{ order: ['톡… 톡…', '쏴아', '조용'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 이야기 차례대로 소리 놓기', minutes: 12, tool: 'story',
            teacher: '"이야기 글을 먼저 읽어요. 처음에, 그다음에, 마지막에 무슨 일이 있었나요?" 글 속 차례 말(처음엔, 점점, 다시, 마침내)에 밑줄을 긋게 한다. 소리 카드를 놓은 뒤 반 전체가 카드 차례대로 입으로 소리를 내 본다.',
            task: '이야기 글을 읽고 장면 차례에 맞게 소리 카드를 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '처음엔 빗방울이 하나둘, 점점 세차게 오다가, 다시 약해지고, 마침내 그쳤어요. 차례대로 소리를 놓아 보세요.', toolOptions: { mode: 'order', cards: ['톡… 톡… 하나둘', '쏴아 세차게', '토독토독 약해져요', '조용, 그쳤어요'] },
                target: { order: ['톡… 톡… 하나둘', '쏴아 세차게', '토독토독 약해져요', '조용, 그쳤어요'] }, difficulty: 0.15 },
              { prompt: '기차가 천천히 출발해 점점 빨라지다가, 역에 닿아 멈췄어요. 차례대로 소리를 놓아 보세요.', toolOptions: { mode: 'order', cards: ['칙… 칙… 천천히', '칙칙폭폭 빠르게', '끼익 멈춰요'] },
                target: { order: ['칙… 칙… 천천히', '칙칙폭폭 빠르게', '끼익 멈춰요'] }, difficulty: 0.1,
                levels: { challenge: { prompt: '기차가 천천히 출발해 빨라지다가, 다리 위에서 기적을 울리고, 역에 닿아 멈췄어요. 차례대로 놓아 보세요.', toolOptions: { cards: ['칙… 칙… 천천히', '칙칙폭폭 빠르게', '뿌우 기적 소리', '끼익 멈춰요'] }, target: { order: ['칙… 칙… 천천히', '칙칙폭폭 빠르게', '뿌우 기적 소리', '끼익 멈춰요'] } } } },
              { prompt: '아침에 알람이 울리고, 세수를 하고, 밥을 먹고, 문을 닫고 나갔어요. 차례대로 소리를 놓아 보세요.', toolOptions: { mode: 'order', cards: ['따르릉 알람', '쏴 세숫물', '달그락 숟가락', '딸깍 문 닫는 소리'] },
                target: { order: ['따르릉 알람', '쏴 세숫물', '달그락 숟가락', '딸깍 문 닫는 소리'] }, difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 장면에 어울리는 물건 소리 (모둠 연주)', minutes: 14, tool: 'mindmap',
            teacher: '"빗방울은 무엇으로 내면 좋을까요? 천둥은요?" 모둠 바구니의 물건을 하나씩 소리 내 보고 장면과 잇게 한다. 연주 차례를 정한 뒤 모둠마다 비 이야기를 30초 안에 들려준다. 듣는 모둠은 눈을 감고 장면이 바뀌는 때에 손을 든다.',
            task: '장면마다 어울리는 물건 소리를 고르고, 모둠이 함께 비 이야기를 연주해요.',
            levels: CARD_LV,
            items: [
              { prompt: '비 이야기 장면과 어울리는 소리 내는 방법을 이어 보세요.', toolOptions: { mode: 'match', topic: '비 이야기 소리', hint1: '장면에서 들릴 소리를 떠올리고, 그 소리와 가장 비슷하게 들리는 방법을 찾아요.', slots: [{ id: 's1', label: '빗방울이 하나둘' }, { id: 's2', label: '우르릉 천둥' }, { id: 's3', label: '휘잉 바람' }], cards: ['손가락으로 책상 톡톡', '큰북을 둥 치기', '입으로 후우 불기'] },
                target: { match: { s1: '손가락으로 책상 톡톡', s2: '큰북을 둥 치기', s3: '입으로 후우 불기' } }, difficulty: 0.15 },
              { prompt: '숲속 아침 장면과 어울리는 소리 내는 방법을 이어 보세요.', toolOptions: { mode: 'match', topic: '숲속 아침 소리', hint1: '장면에서 들릴 소리를 떠올리고, 그 소리와 가장 비슷하게 들리는 방법을 찾아요.', slots: [{ id: 's1', label: '나뭇잎이 바스락' }, { id: 's2', label: '시냇물이 졸졸' }], cards: ['종이를 살살 구기기', '병 속 물을 흔들기'] },
                target: { match: { s1: '종이를 살살 구기기', s2: '병 속 물을 흔들기' } }, difficulty: 0.15 },
              { prompt: '모둠이 함께 비 이야기를 소리로 들려주었으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"다른 모둠의 비 이야기에서 비가 그친 것을 어떻게 알았나요?" 소리가 작아지다 멈춘 것을 짚는다. 연주에 쓴 물건은 제자리에 둔다. 다음 시간에는 동물 이야기를 빠르고 느린 소리로 들려준다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { mode: 'order', cards: ['똑… 똑… 처음', '주룩주룩 많이', '뚝, 그쳤어요'] }, prompt: '처마 끝 빗물이 처음엔 똑똑, 그다음 주룩주룩, 마지막에 그쳤어요. 차례대로 놓아 보세요.', target: { order: ['똑… 똑… 처음', '주룩주룩 많이', '뚝, 그쳤어요'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '비가 그친 장면은 소리로 어떻게 나타낼까요?', options: ['점점 크게', '작아지다 멈추기', '더 빠르게'], answer: 1, difficulty: 0.15, explain: '비가 그치면 소리가 작아지다 멈춰요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '소리로 들려주는 이야기',
      items: [
        { type: 'figure', wide: true, prompt: '비 이야기 소리를 차례대로 1, 2, 3, 4를 쓰세요.', tool: 'story', figures: [{ options: { mode: 'order', cards: ['쏴아 세차게', '조용, 그쳤어요', '톡… 톡… 하나둘', '토독토독 약해져요'], shuffle: false }, caption: '' }], answer: '톡톡 하나둘 → 쏴아 → 토독토독 → 조용' },
        { type: 'table', prompt: '우리 모둠 비 이야기에서 쓴 물건을 쓰세요.', columns: ['장면', '쓴 물건'], cells: [['빗방울', ''], ['천둥', ''], ['비가 그침', '']] },
        { type: 'choice', prompt: '천둥소리에 어울리는 것에 ○ 하세요.', options: ['큰북 둥', '손가락 톡톡'], answer: '큰북 둥' },
        { type: 'short', prompt: '소리로 들려주고 싶은 다른 이야기를 쓰세요.' },
      ],
      easy: {
        note: '처음, 그다음, 마지막을 먼저 찾아요.',
        items: [
          { type: 'choice', prompt: '비가 처음 올 때 소리에 ○ 하세요.', options: ['톡… 톡…', '쏴아'], answer: '톡… 톡…' },
          { type: 'choice', prompt: '비가 그치면?', options: ['조용해요', '더 커져요'], answer: '조용해요' },
          { type: 'draw', prompt: '비 이야기를 그림으로 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '이야기 글을 읽고 차례대로 놓아요.',
      challenge: '기차 이야기에 장면이 하나 더 있고, 모둠 연주에서 시간 맞추는 역할을 맡아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 이야기 글을 읽지 않고 소리 크기 순서로만 놓는다 → 글 속 차례 말에 밑줄을 긋게 한다. ② 모둠 연주가 한꺼번에 시끄러워진다 → 장면마다 맡은 사람만 소리 내게 하고 교사가 손으로 신호를 준다. ③ 이야기와 상관없는 소리를 넣는다 → 그 장면에서 정말 들릴 소리인지 묻는다. 이야기는 모두 직접 지은 것이다.',
  }));

  lessons.push(L(19, {
    title: '토끼와 거북 이야기를 빠르고 느린 리듬으로',
    objective: '움직임이 빠른 것과 느린 것을 빠르고 느린 리듬으로 나타내고, 동물에 어울리는 소리의 빠르기와 세기를 고를 수 있다.',
    illustration: ART('a paper rabbit dashing and a paper turtle walking slowly along a race path, with small fast notes above the rabbit and big slow notes above the turtle', '빠르게, 느리게', [
      { motif: 'tree', x: 110, y: 214 }, { motif: 'flower', x: 380, y: 228, color: 'buttercup' }, { motif: 'cloud', x: 360, y: 70, s: 0.6 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"토끼와 거북 이야기를 알지요? 토끼가 뛰어가는 소리는 어떨까요? 거북이 걷는 소리는요?" 손뼉으로 토끼는 짝짝짝짝 빠르게, 거북은 짝…짝… 느리게 쳐 보인다. 시연 단추로 토끼 리듬 블록이 놓이는 모습을 보여 준다. 이 이야기는 이솝 우화로, 옛날부터 전해 온 이야기다.',
        student: '손뼉으로 토끼 걸음과 거북 걸음을 쳐 봐요.',
        demo: { tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 1, blocks: ['q', 'e', 'h'] }, sequence: [{ rhythm: ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 빠른 걸음, 느린 걸음 리듬', minutes: 14, tool: 'keyboard',
            teacher: '"8분음표는 반 박이라 한 박에 두 번 쳐요. 2분음표는 두 박 동안 한 번이에요." 손뼉으로 \'토끼토끼\'(8분음표)와 \'거—북\'(2분음표)을 말하며 쳐 본다. 블록을 놓은 뒤 몸으로도 해 보게 한다(토끼는 손가락으로 빠르게 톡톡, 거북은 주먹으로 천천히 쿵). 같은 마디라도 빠른 리듬은 블록이 많고 느린 리듬은 블록이 적다는 것을 짚는다.',
            task: '토끼와 거북 걸음 리듬을 듣고 블록으로 놓고, 몸으로 따라 쳐요.',
            levels: {
              easy: { mode: 'rhythm', meter: 4, measures: 1, blocks: ['q', 'e', 'h', 'qr'], showBeats: true },
              base: { mode: 'rhythm', meter: 4, measures: 1, blocks: ['q', 'e', 'h', 'qr'] },
              challenge: { mode: 'rhythm', meter: 4, measures: 2, blocks: ['q', 'e', 'h', 'qr', 'er'] },
            },
            items: [
              { prompt: '리듬 듣기를 누르고, 빠르게 뛰는 토끼 걸음 리듬을 블록으로 놓아 보세요.', toolOptions: { pattern: ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'], measures: 1 }, target: { rhythm: ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'] }, difficulty: 0.15 },
              { prompt: '리듬 듣기를 누르고, 느리게 걷는 거북 걸음 리듬을 블록으로 놓아 보세요.', toolOptions: { pattern: ['h', 'h'], measures: 1 }, target: { rhythm: ['h', 'h'] }, difficulty: 0.1,
                predict: { q: '같은 한 마디에서 거북 리듬 블록은 토끼보다 많을까요, 적을까요?', options: ['많아요', '적어요'], answer: 1 },
                conclude: '느린 리듬은 한 소리가 길어서, 같은 마디에 블록이 적게 들어가요.' },
              { prompt: '토끼가 낮잠을 자는 동안 거북이 걸어가요. 쉼표와 2분음표로 한 마디를 채워 보세요.', toolOptions: { measures: 1 }, target: { beats: true, use: ['h'], rests: 1 }, difficulty: 0.2,
                levels: { challenge: { prompt: '토끼가 자다 깨어 다시 뛰어요. 첫 마디는 쉼표와 2분음표, 둘째 마디는 8분음표로 채워 보세요.', toolOptions: { measures: 2 }, target: { beats: true, use: ['h', 'e'], rests: 1 } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 동물에 어울리는 소리', minutes: 12, tool: 'mindmap',
            teacher: '"코끼리가 걸으면 땅이 어떻게 울릴까요? 생쥐는요?" 몸집과 움직임을 떠올려 빠르기와 세기를 함께 말하게 한다. 이은 뒤 모둠마다 동물 하나를 골라 그 동물 소리를 책상 두드리기로 들려주고 다른 모둠이 맞힌다.',
            task: '동물의 움직임을 떠올려 어울리는 소리의 빠르기와 세기를 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '동물과 어울리는 소리를 이어 보세요.', toolOptions: { mode: 'match', topic: '동물 걸음 소리', hint1: '동물의 몸집과 움직이는 빠르기를 떠올리고, 그 걸음에 맞는 소리를 찾아요.', slots: [{ id: 's1', label: '코끼리가 걸어요' }, { id: 's2', label: '생쥐가 달려요' }], cards: ['느리고 큰 쿵… 쿵…', '빠르고 작은 타닥타닥'] },
                target: { match: { s1: '느리고 큰 쿵… 쿵…', s2: '빠르고 작은 타닥타닥' } }, difficulty: 0.1 },
              { prompt: '세 동물과 어울리는 소리를 이어 보세요.', toolOptions: { mode: 'match', topic: '동물 움직임 소리', hint1: '동물이 어떻게 움직이는지 떠올리고, 그 움직임에 맞는 소리를 찾아요.', slots: [{ id: 's1', label: '말이 달려요' }, { id: 's2', label: '달팽이가 기어가요' }, { id: 's3', label: '참새가 콩콩 뛰어요' }], cards: ['다그닥다그닥 빠르게', '아주 느리게 스르르', '작고 가볍게 톡톡'] },
                target: { match: { s1: '다그닥다그닥 빠르게', s2: '아주 느리게 스르르', s3: '작고 가볍게 톡톡' } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['다그닥다그닥 빠르게', '아주 느리게 스르르', '작고 가볍게 톡톡', '보글보글'] } } } },
              { prompt: '모둠이 고른 동물 소리를 들려주고 다른 모둠이 맞혔으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"토끼와 거북 리듬을 반 전체가 반으로 나누어 함께 쳐 볼까요?" 창가 쪽은 토끼, 복도 쪽은 거북 리듬을 동시에 친다. 출구 2번에서 \'블록이 많다\'를 고른 학생에게 거북 리듬 블록 수를 다시 세게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 1, blocks: ['q', 'e', 'h'], pattern: ['q', 'q', 'e', 'e', 'e', 'e'] }, prompt: '천천히 걷다 빨라지는 강아지 리듬을 듣고 블록으로 놓아 보세요.', target: { rhythm: ['q', 'q', 'e', 'e', 'e', 'e'] }, difficulty: 0.25 },
          { type: 'choice', prompt: '느리게 걷는 소리는 같은 마디에 블록이 어떨까요?', options: ['많아요', '적어요'], answer: 1, difficulty: 0.15, explain: '느린 소리는 한 소리가 길어 블록이 적게 들어가요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '빠르게, 느리게',
      items: [
        { type: 'figure', prompt: '마디에 몇 박인지 세어 쓰세요.', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 1 }, figures: [{ state: { rhythm: ['h', 'e', 'e', 'q'] }, caption: '___박' }], answer: '4박' },
        { type: 'choice', prompt: '코끼리 걸음 소리에 ○ 하세요.', options: ['느리고 큰 쿵… 쿵…', '빠르고 작은 타닥타닥'], answer: '느리고 큰 쿵… 쿵…' },
        { type: 'table', prompt: '동물을 하나 골라 소리를 쓰세요.', columns: ['동물', '빠르기', '세기'], rows: 2 },
        { type: 'draw', prompt: '내가 고른 동물과 그 소리를 그리세요.' },
      ],
      easy: {
        note: '토끼는 빠르게 톡톡, 거북은 느리게 쿵… 쿵….',
        items: [
          { type: 'choice', prompt: '토끼 걸음 소리에 ○ 하세요.', options: ['빠르게', '느리게'], answer: '빠르게' },
          { type: 'choice', prompt: '생쥐 소리에 ○ 하세요.', options: ['작게', '크게'], answer: '작게' },
          { type: 'draw', prompt: '토끼와 거북을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '리듬은 한 마디이고 박 수가 함께 보여요.',
      base: '한 마디 리듬을 듣고 놓고, 쉼표를 넣어 거북 리듬을 지어요.',
      challenge: '두 마디로 토끼가 자다 깨는 장면을 짓고, 함정 소리를 골라내요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 빠르기와 세기를 같은 것으로 여긴다 → 빠르고 작은 생쥐, 느리고 큰 코끼리를 견준다. ② 8분음표를 한 박으로 센다 → \'토끼토끼\'를 한 박에 말하며 친다. ③ 동물 흉내가 장난으로 번진다 → 모둠 차례와 30초 시간을 정한다. 토끼와 거북은 이솝 우화(저작권이 끝난 옛이야기)로 줄거리만 썼다.',
  }));

  lessons.push(L(20, {
    title: '소리를 그림 악보로 남기고 되풀이하기',
    objective: '쿵·짝 같은 소리를 기호로 적어 그림 악보로 남기고, 되풀이되는 묶음을 찾아 빈칸을 채우거나 직접 만들 수 있다.',
    illustration: ART('a long paper strip with drawn sound symbols: big circles for boom and small triangles for clap, repeating, children reading it and playing along', '그림 악보', [
      { motif: 'star', x: 110, y: 84, s: 0.6 }, { motif: 'tree', x: 390, y: 214 }, { motif: 'flower', x: 130, y: 228, color: 'rose' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"어제 낸 소리를 오늘 똑같이 다시 낼 수 있을까요? 잊어버리지 않으려면?" 칠판에 큰 동그라미(쿵)와 작은 세모(짝)를 그리고 손으로 짚으며 쳐 본다. 시연 단추로 \'쿵 짝 짝\'이 되풀이되는 빈칸이 채워지는 모습을 보여 준다. "소리를 기호로 적어 두면 누구나 다시 연주할 수 있어요."',
        student: '칠판 그림 악보를 보며 쿵(무릎)과 짝(손뼉)을 따라 쳐 봐요.',
        demo: { tool: 'pattern', options: { seq: ['쿵', '짝', '짝', '쿵', '짝', null], palette: ['쿵', '짝'] }, sequence: [{ fill: ['짝'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 되풀이 악보 빈칸 채우기', minutes: 12, tool: 'pattern',
            teacher: '"되풀이되는 묶음을 먼저 찾아 손으로 묶어 보세요." 쿵 짝 짝 / 쿵 짝 짝처럼 묶음마다 끊어 읽어 준다. 빈칸을 채운 뒤 반 전체가 무릎(쿵)·손뼉(짝)·발(콩)으로 연주한다. 묶음을 찾지 못하는 학생에게 처음 세 칸을 손가락으로 가리고 다음 세 칸과 견주게 한다.',
            task: '되풀이되는 소리 묶음을 찾아 그림 악보의 빈칸을 채우고 몸으로 연주해요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '쿵 짝 짝이 되풀이돼요. 빈칸을 채워 보세요.', toolOptions: { seq: ['쿵', '짝', '짝', '쿵', '짝', '짝', '쿵', null, null], palette: ['쿵', '짝'] }, target: { fill: ['짝', '짝'] }, difficulty: 0.1,
                hints: ['처음부터 몇 칸이 한 묶음으로 되풀이되는지 손으로 묶어 봐요.', '묶음 안에서 쿵 다음에 오는 소리를 다시 봐요.', '쿵 짝 짝 묶음이라 쿵 다음에는 짝, 짝이 와요.'] },
              { prompt: '쿵 쿵 짝이 되풀이돼요. 가운데와 끝 빈칸을 채워 보세요.', toolOptions: { seq: ['쿵', '쿵', '짝', '쿵', null, '짝', '쿵', '쿵', null], palette: ['쿵', '짝'] }, target: { fill: ['쿵', '짝'] }, difficulty: 0.15,
                levels: { easy: { prompt: '쿵 쿵 짝이 되풀이돼요. 끝 빈칸을 채워 보세요.', toolOptions: { seq: ['쿵', '쿵', '짝', '쿵', '쿵', '짝', '쿵', '쿵', null] }, target: { fill: ['짝'] } } } },
              { prompt: '쿵 짝 콩 짝이 되풀이돼요. 빈칸을 채워 보세요.', toolOptions: { seq: ['쿵', '짝', '콩', '짝', '쿵', null, '콩', null], palette: ['쿵', '짝', '콩'] }, target: { fill: ['짝', '짝'] }, difficulty: 0.2,
                levels: { challenge: { prompt: '쿵 짝 콩 짝이 되풀이돼요. 세 빈칸을 채워 보세요.', toolOptions: { seq: ['쿵', '짝', '콩', '짝', null, '짝', null, null], palette: ['쿵', '짝', '콩'] }, target: { fill: ['쿵', '콩', '짝'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 우리 모둠 그림 악보 만들기', minutes: 14, tool: 'pattern',
            teacher: '"세 칸이나 네 칸으로 묶음을 정하고, 그 묶음을 두 번 넘게 되풀이해요." 판에서 만든 뒤 모둠 종이 띠에 기호(큰 ○ 쿵, 작은 △ 짝, ☆ 콩)로 옮겨 그리게 한다. 다른 모둠과 띠를 바꿔 연주해 보고, 처음 보는 악보도 기호만 알면 칠 수 있다는 것을 짚는다.',
            task: '소리 묶음을 정해 되풀이하는 그림 악보를 만들고, 다른 모둠 악보를 연주해요.',
            levels: { easy: { length: 6 }, base: { length: 8 }, challenge: { length: 12 } },
            items: [
              { prompt: '쿵과 짝으로 세 칸 묶음을 되풀이하는 그림 악보를 만들어 보세요.', toolOptions: { mode: 'make', palette: ['쿵', '짝'] }, target: { rule: 'repeat', period: 3 }, difficulty: 0.2 },
              { prompt: '쿵·짝·콩을 모두 써서 되풀이하는 그림 악보를 만들어 보세요.', toolOptions: { mode: 'make', palette: ['쿵', '짝', '콩'] }, target: { rule: 'repeat', uses: 3 }, difficulty: 0.25 },
              { prompt: '모둠 그림 악보를 종이 띠에 그려 다른 모둠과 바꿔 연주했으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"그림 악보가 있으면 무엇이 좋았나요?" 다음 날에도, 다른 모둠도 똑같이 칠 수 있다는 답을 이끈다. 종이 띠 악보는 교실 뒤에 붙여 21차시에 다시 쓴다.',
        exitTicket: [
          { type: 'tool', tool: 'pattern', options: { seq: ['짝', '쿵', '쿵', '짝', '쿵', '쿵', null, '쿵'], palette: ['쿵', '짝'] }, prompt: '짝 쿵 쿵이 되풀이돼요. 빈칸을 채워 보세요.', target: { fill: ['짝'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '그림 악보로 남기면 좋은 점은?', options: ['다음에도 똑같이 칠 수 있어요', '소리가 커져요'], answer: 0, difficulty: 0.1, explain: '기호로 적어 두면 잊어도, 다른 사람도 같은 소리를 낼 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '그림 악보',
      items: [
        { type: 'figure', wide: true, prompt: '되풀이되는 묶음을 ○로 묶고 빈칸을 채우세요.', tool: 'pattern', figures: [{ options: { seq: ['쿵', '짝', '짝', '쿵', '짝', '짝', '쿵', null, null], palette: ['쿵', '짝'] }, caption: '' }], answer: '짝, 짝' },
        { type: 'blank', prompt: '기호를 정하세요.', text: '쿵 = ___ , 짝 = ___', answer: '예: ○, △' },
        { type: 'short', prompt: '우리 모둠 그림 악보를 기호로 쓰세요.' },
        { type: 'draw', prompt: '내가 정한 기호로 소리 띠를 그리세요.' },
      ],
      easy: {
        note: '세 칸씩 끊어 읽어 보세요.',
        items: [
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '쿵 짝 짝 쿵 짝 짝 쿵 짝 ___', answer: '짝' },
          { type: 'choice', prompt: '되풀이되는 묶음에 ○ 하세요.', options: ['쿵 짝 짝', '쿵 쿵 쿵'], answer: '쿵 짝 짝' },
          { type: 'draw', prompt: '소리 기호를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '빈칸이 하나씩만 있고, 그림 악보는 여섯 칸으로 만들어요.',
      base: '빈칸 두 개를 채우고 여덟 칸 악보를 만들어요.',
      challenge: '빈칸 세 개를 채우고 열두 칸 악보를 만들어 다른 모둠과 바꿔 연주해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 묶음을 찾지 않고 바로 앞 소리만 따라 한다 → 손으로 묶음마다 끊어 읽게 한다. ② 되풀이 묶음을 한 번만 쓴다 → 두 번 넘게 되풀이해야 악보가 된다고 말한다. ③ 기호와 소리를 섞어 쓴다 → 모둠마다 기호표를 띠 왼쪽에 붙이게 한다. 판 조각의 글자(쿵·짝·콩)는 모둠 띠에서 기호로 바꿔 그린다.',
  }));

  // ───────────────────────── 21~24차시: 마음에 든 소리, 친구 소리, 더 궁금한 소리(탐색 경험 나누고 호기심 잇기) ─────────────────────────

  lessons.push(L(21, {
    title: '내가 낸 소리 가운데 마음에 든 소리 골라 들려주기',
    objective: '그동안 낸 소리 가운데 마음에 든 것을 골라 까닭을 콕 집어 말하고, 그 소리를 가락으로 지어 다시 들려줄 수 있다.',
    illustration: ART('a child proudly playing a favorite sound on a paper keyboard while classmates listen with smiles, small sound symbols from earlier lessons pinned on the wall', '내 마음에 든 소리', [
      { motif: 'star', x: 110, y: 84, s: 0.6 }, { motif: 'star', x: 390, y: 90, s: 0.5 }, { motif: 'flower', x: 380, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"그동안 종이 소리, 고무줄 소리, 비 이야기, 토끼 리듬을 냈어요. 그중 다시 듣고 싶은 소리는?" 교실 뒤 그림 악보와 고무줄 상자를 가리킨다. 시연 단추로 \'까닭을 콕 집은 말\' 카드가 바구니에 들어가는 모습을 보여 준다. "\'그냥 좋아요\'보다 \'무엇이 어떻게 좋았는지\'를 말하면 친구가 더 잘 알아들어요." 내 소리는 들려줄 만하지 않다는 학생에게 지난 시간 친구들이 손을 들었던 장면을 떠올리게 한다.',
        student: '그동안 낸 소리 가운데 다시 듣고 싶은 소리를 하나 떠올려 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'pick', basket: '까닭을 콕 집은 말', cards: ['고무줄이 새소리처럼 높았어요', '그냥 좋아요'], shuffle: false }, sequence: [{ pick: ['고무줄이 새소리처럼 높았어요'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 마음에 든 까닭 콕 집어 말하기', minutes: 12, tool: 'mindmap',
            teacher: '"무엇으로, 어떻게 냈고, 무엇처럼 들렸나요?" 세 칸 말틀(무엇으로 / 어떻게 / 무엇처럼)을 칠판에 붙인다. 까닭을 고른 뒤 짝에게 내 소리를 다시 내 들려주며 그 말틀로 말하게 한다. "그냥요"라고 하는 학생에게 "크게였어요, 작게였어요? 빨랐어요, 느렸어요?"처럼 고를 말을 건넨다.',
            task: '마음에 든 까닭을 콕 집어 말한 것을 고르고, 내 소리를 짝에게 다시 들려줘요.',
            levels: CARD_LV,
            items: [
              { prompt: '마음에 든 까닭을 콕 집어 말한 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '까닭을 콕 집은 말', cards: ['종이를 천천히 구겨 빗소리처럼 들렸어요', '탬버린을 문지르니 바람 소리 같았어요', '그냥 좋아요', '몰라요'] },
                target: { pick: ['종이를 천천히 구겨 빗소리처럼 들렸어요', '탬버린을 문지르니 바람 소리 같았어요'] }, difficulty: 0.1 },
              { prompt: '까닭을 말한 것과 아직 까닭이 빠진 것으로 나누어 보세요.', toolOptions: { topic: '마음에 든 소리', slots: ['까닭을 말했어요', '까닭이 빠졌어요'], cards: ['높은 도가 반짝이는 별 같아서 좋아요', '거북 리듬이 느려서 웃겼어요', '최고예요', '이게 제일 좋아요'] },
                target: { sort: { '까닭을 말했어요': ['높은 도가 반짝이는 별 같아서 좋아요', '거북 리듬이 느려서 웃겼어요'], '까닭이 빠졌어요': ['최고예요', '이게 제일 좋아요'] } }, difficulty: 0.15,
                levels: { challenge: { prompt: '다섯 가지 말을 까닭을 말한 것과 까닭이 빠진 것으로 나누어 보세요.', toolOptions: { cards: ['높은 도가 반짝이는 별 같아서 좋아요', '거북 리듬이 느려서 웃겼어요', '컵을 살살 쳐서 작은 소리가 귀여웠어요', '최고예요', '이게 제일 좋아요'] }, target: { sort: { '까닭을 말했어요': ['높은 도가 반짝이는 별 같아서 좋아요', '거북 리듬이 느려서 웃겼어요', '컵을 살살 쳐서 작은 소리가 귀여웠어요'], '까닭이 빠졌어요': ['최고예요', '이게 제일 좋아요'] } } } } },
              { prompt: '마음에 든 내 소리를 짝에게 다시 들려주며 까닭을 말했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 마음에 든 소리를 가락으로', minutes: 14, tool: 'keyboard',
            teacher: '"내 소리가 높았다면 높은 음으로, 낮았다면 낮은 음으로 시작해 보세요." 가락을 지은 뒤 두 번 똑같이 쳐 보게 한다. 두 번이 다르게 나오면 그림 악보처럼 계이름을 활동지에 적어 두게 한다. 다 지은 학생은 짝에게 들려주고, 짝은 \'무엇처럼 들렸는지\' 한마디를 해 준다.',
            task: '마음에 든 소리를 떠올리며 짧은 가락을 짓고, 두 번 똑같이 쳐서 짝에게 들려줘요.',
            levels: KEY_LV,
            items: [
              { prompt: '높은 소리가 마음에 들었다면, 솔에서 시작해 높은도로 끝나는 네 음 가락을 지어 보세요.', target: { compose: { length: 4, startOn: '솔', endOn: '높은도' } }, difficulty: 0.15 },
              { prompt: '낮고 느린 소리가 마음에 들었다면, 미에서 시작해 도로 끝나는 네 음 가락을 지어 보세요.', target: { compose: { length: 4, startOn: '미', endOn: '도' } }, difficulty: 0.15 },
              { prompt: '마음에 든 내 가락을 다섯 음 넘게 짓고, 두 번 쳐서 짝에게 들려준 뒤 점검해 보세요.', target: { selfCheck: ['같은 가락을 두 번 똑같이 쳤어요', '계이름을 활동지에 적었어요', '짝에게 무엇처럼 들리는지 물었어요'], minNotes: 5 }, difficulty: 0.15 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 들은 친구 소리 가운데 \'나도 해 보고 싶다\' 한 것이 있나요?" 두세 명이 말하게 한다. 출구 1번은 정답이 없으니 솔직하게 고르게 한다. 다음 시간에는 친구 소리를 듣고 좋았던 점을 찾아 말한다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'scale', steps: 5, situation: '오늘 내가 낸 소리를 친구에게 들려주었어요.', feeling: '뿌듯함', ask: '내 소리를 들려줄 때 마음은 얼마나 뿌듯했나요?' }, prompt: '내 소리를 들려줄 때 얼마나 뿌듯했는지 솔직하게 골라 보세요. 정답은 없어요.', target: { level: 'any' }, difficulty: 0.05 },
          { type: 'choice', prompt: '마음에 든 까닭을 콕 집어 말한 것은?', options: ['그냥 좋아요', '컵을 빠르게 쳐서 말발굽 소리 같았어요'], answer: 1, difficulty: 0.1, explain: '무엇으로, 어떻게, 무엇처럼 들렸는지 말하면 까닭이 콕 집혀요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '내 마음에 든 소리',
      items: [
        { type: 'table', prompt: '마음에 든 소리를 말틀에 맞춰 쓰세요.', columns: ['무엇으로', '어떻게', '무엇처럼 들렸나요'], rows: 1 },
        { type: 'blank', prompt: '내가 지은 가락의 계이름을 쓰세요.', text: '___ ___ ___ ___ ___', answer: '예: 솔 라 솔 미 도' },
        { type: 'choice', prompt: '까닭을 콕 집어 말한 것에 ○ 하세요.', options: ['최고예요', '고무줄이 새소리처럼 높았어요'], answer: '고무줄이 새소리처럼 높았어요' },
        { type: 'draw', prompt: '마음에 든 소리를 내는 내 모습을 그리세요.' },
      ],
      easy: {
        note: '무엇으로? 어떻게? 무엇처럼? 세 가지를 떠올려요.',
        items: [
          { type: 'short', prompt: '마음에 든 소리를 낸 물건을 쓰세요.' },
          { type: 'check', prompt: '그 소리는 어땠나요? 맞는 것에 모두 ✓ 하세요.', options: ['컸어요', '작았어요', '높았어요', '낮았어요'] },
          { type: 'draw', prompt: '마음에 든 소리를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '고르기에서 초록 테두리가 생기고, 건반에 계이름이 보여요.',
      base: '까닭을 고르고 나눈 뒤, 계이름 단추로 확인하며 가락을 지어요.',
      challenge: '까닭 카드가 늘고, 계이름 없이 귀로 들으며 가락을 지어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 내 소리는 들려줄 만하지 않다고 여긴다 → 친구가 손을 든 장면을 떠올리게 하고 짝에게만 먼저 들려주게 한다. ② 까닭을 "그냥"으로 끝낸다 → 세 칸 말틀을 건넨다. ③ 가락을 칠 때마다 다르게 친다 → 계이름을 적어 두게 한다. 출구의 마음 크기는 채점하지 않고 교사가 다음 시간 짝 정하기에 참고한다.',
  }));

  lessons.push(L(22, {
    title: '친구 소리를 듣고 좋았던 점 콕 집어 말하기',
    objective: '친구가 들려준 소리를 듣고 좋았던 점을 콕 집어 말하는 말과 그냥 하는 말을 가르고, 친구를 기쁘게 하는 감상 말을 고를 수 있다.',
    illustration: ART('children sitting in a circle listening to a classmate play paper cups, others giving thumbs up and speech bubbles with kind words', '친구 소리 들어 보기', [
      { motif: 'flower', x: 110, y: 228, color: 'rose' }, { motif: 'bird', x: 360, y: 80 }, { motif: 'tree', x: 400, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"\'잘했어\'라는 말과 \'빗소리처럼 작게 시작해서 좋았어\'라는 말, 어느 쪽을 들으면 더 기쁠까요?" 두 말을 칠판에 붙이고 손을 들게 한다. 시연 단추로 콕 집은 말이 \'좋았던 점을 콕 집었어요\' 가지로 가는 모습을 보여 준다. "들은 것을 떠올려 말하면 친구가 내가 잘 들었다는 것을 알아요."',
        student: '친구에게 들었을 때 기분 좋았던 칭찬 말을 하나 떠올려 봐요.',
        demo: { tool: 'mindmap', options: { topic: '친구 소리 감상', slots: ['좋았던 점을 콕 집었어요', '그냥 한 말이에요'], cards: ['빗소리처럼 작게 시작해서 좋았어', '잘했어'], shuffle: false }, sequence: [{ sort: { '좋았던 점을 콕 집었어요': ['빗소리처럼 작게 시작해서 좋았어'], '그냥 한 말이에요': ['잘했어'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 콕 집은 감상 말 찾기', minutes: 12, tool: 'mindmap',
            teacher: '"이 말에는 친구 소리의 무엇이 들어 있나요? 크기? 빠르기? 무엇처럼 들렸는지?" 콕 집은 말에 들어 있는 낱말에 동그라미를 치게 한다. 짝 활동에서는 한 사람이 소리를 들려주고 다른 사람이 콕 집은 말로 감상한 뒤 바꾼다.',
            task: '친구 소리에 대한 말을 좋았던 점을 콕 집은 말과 그냥 한 말로 나누고, 짝에게 콕 집어 말해요.',
            levels: CARD_LV,
            items: [
              { prompt: '감상 말을 두 가지로 나누어 보세요.', toolOptions: { topic: '친구 소리 감상', slots: ['좋았던 점을 콕 집었어요', '그냥 한 말이에요'], cards: ['빠르게 치다가 딱 멈춘 게 재밌었어', '높은 소리가 새 같았어', '좋았어', '멋져'] },
                target: { sort: { '좋았던 점을 콕 집었어요': ['빠르게 치다가 딱 멈춘 게 재밌었어', '높은 소리가 새 같았어'], '그냥 한 말이에요': ['좋았어', '멋져'] } }, difficulty: 0.1 },
              { prompt: '친구가 들려준 소리와 콕 집은 감상 말을 이어 보세요.', toolOptions: { mode: 'match', topic: '들은 소리와 감상', hint1: '친구가 무엇으로 어떻게 소리를 냈는지 읽고, 그 모습을 말한 감상을 찾아요.', slots: [{ id: 's1', label: '서아가 종이를 살살 흔들었어요' }, { id: 's2', label: '준호가 큰북을 둥 둥 쳤어요' }], cards: ['바람이 솔솔 부는 것 같았어', '천둥이 치는 것처럼 힘찼어'] },
                target: { match: { s1: '바람이 솔솔 부는 것 같았어', s2: '천둥이 치는 것처럼 힘찼어' } }, difficulty: 0.15 },
              { prompt: '짝의 소리를 듣고 콕 집은 감상 말을 해 주고 서로 바꾸었으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 친구 마음을 살피는 감상', minutes: 14, tool: 'emotion',
            teacher: '"친구 소리가 내 생각과 달라서 이상하게 들리면 어떻게 말할까요?" 웃거나 \'이상해\'라고 하면 친구 마음이 어떨지 결과 칸을 소리 내어 읽게 한다. 다르게 들린 점은 \'궁금한 점\'으로 물어보면 된다는 것을 짚는다(\"어떻게 그런 소리를 냈어?\").',
            task: '친구 소리를 들은 뒤 어떻게 말할지 고르고, 그 말을 들은 친구의 마음을 살펴요.',
            levels: MOOD_LV,
            items: [
              { prompt: '하준이가 컵을 문질러 끼익 소리를 냈어요. 처음 듣는 소리예요. 어떻게 말할까요?', toolOptions: { mode: 'branch', who: '하준', situation: '하준이가 젖은 손가락으로 컵을 문질러 끼익 소리를 들려주었어요. 처음 듣는 소리예요.', choices: [
                { id: 'laugh', text: '"이상해!" 하고 웃어요', result: '하준이가 다음엔 들려주기 싫어해요.', mood: '속상함', why: '웃음을 들은 하준이의 마음을 떠올려 봐요.' },
                { id: 'ask', text: '"어떻게 그 소리를 냈어?" 하고 물어요', result: '하준이가 신나서 방법을 알려 줘요.', mood: '신남' },
                { id: 'skip', text: '아무 말 없이 다른 데를 봐요', result: '하준이는 친구들이 들었는지 몰라요.', mood: '걱정', why: '들은 뒤 아무 말이 없으면 하준이는 어떻게 생각할까요?' }] }, target: { choice: 'ask' }, difficulty: 0.1 },
              { prompt: '감상 말을 들은 친구의 마음 카드를 놓아 보세요.', toolOptions: { cards: ['뿌듯함', '속상함', '화남'], slots: [{ id: 's1', label: '"높은 소리가 별처럼 반짝였어"를 들었어요' }, { id: 's2', label: '"그것도 소리야?"를 들었어요' }] },
                target: { match: { s1: '뿌듯함', s2: ['속상함', '화남'] } }, difficulty: 0.1 },
              { prompt: '민지가 콕 집은 감상을 듣고 웃으며 "다음에 또 들려줄게!" 했어요. 민지의 뿌듯함 크기를 골라 보세요.', toolOptions: { mode: 'scale', who: '민지', situation: '친구가 "작게 시작해서 점점 커지는 게 비 오는 것 같았어"라고 말해 주었어요. 민지는 웃으며 "다음에 또 들려줄게!" 했어요.', feeling: '뿌듯함', after: '콕 집은 감상은 친구가 또 해 보고 싶게 만들어요.' }, target: { level: [4, 5] }, difficulty: 0.15,
                levels: { easy: { prompt: '민지가 감상을 듣고 웃으며 "또 들려줄게!" 했어요. 민지의 뿌듯함을 세 칸에서 골라 보세요.', target: { level: 3 } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 친구에게 들은 감상 가운데 가장 기분 좋았던 말을 말해 볼까요?" 두세 명이 말하면 그 말에서 콕 집은 낱말을 함께 찾는다. 다음 시간에는 모둠 소리 발표회를 준비한다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', basket: '콕 집은 감상 말', cards: ['쿵 짝 짝이 행진하는 것 같았어', '느리게 치다 빨라져서 신났어', '좋아', '괜찮네'] }, prompt: '친구 소리에 대한 콕 집은 감상 말만 골라 보세요.', target: { pick: ['쿵 짝 짝이 행진하는 것 같았어', '느리게 치다 빨라져서 신났어'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '친구 소리가 처음 듣는 소리일 때 알맞은 말은?', options: ['"이상해!"', '"어떻게 냈어?"', '아무 말 안 하기'], answer: 1, difficulty: 0.1, explain: '궁금한 점을 물으면 친구도 신나서 방법을 알려 줘요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '친구 소리 감상',
      items: [
        { type: 'table', prompt: '친구 소리를 듣고 감상을 쓰세요.', columns: ['친구가 낸 소리', '좋았던 점'], rows: 2 },
        { type: 'check', prompt: '콕 집은 감상 말에 모두 ✓ 하세요.', options: ['높은 소리가 새 같았어', '빠르다가 멈춘 게 재밌었어', '좋았어'] },
        { type: 'blank', prompt: '감상 말을 완성하세요.', text: '네 소리가 ______ 같아서 좋았어.', answer: '예: 빗소리' },
        { type: 'draw', prompt: '친구가 소리를 내는 모습을 그리세요.' },
      ],
      easy: {
        note: '친구 소리가 무엇처럼 들렸는지 말해요.',
        items: [
          { type: 'choice', prompt: '콕 집은 감상에 ○ 하세요.', options: ['새소리 같았어', '좋아'], answer: '새소리 같았어' },
          { type: 'choice', prompt: '처음 듣는 소리일 때?', options: ['"어떻게 냈어?"', '"이상해!"'], answer: '"어떻게 냈어?"' },
          { type: 'draw', prompt: '친구 소리를 그림으로 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 마음 크기는 세 칸이에요.',
      base: '모두 나눈 뒤 확인을 눌러요. 짝에게 콕 집은 감상을 말해요.',
      challenge: '감상 말을 크기·빠르기·무엇처럼 세 가지를 모두 넣어 지어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 칭찬을 "잘했어"로만 한다 → 콕 집은 낱말(크게, 빠르게, ~처럼)을 칠판에 두고 고르게 한다. ② 다른 소리를 이상하다고 웃는다 → 궁금한 점으로 묻는 말을 함께 연습한다. ③ 친한 친구 소리만 칭찬한다 → 짝을 교사가 정해 준다. 마음 크기 문항은 이야기 속 민지의 말("또 들려줄게!")을 근거로 고르게 한다.',
  }));

  lessons.push(L(23, {
    title: '모둠 소리 발표회 열고 감상 나누기',
    objective: '소리 발표회를 차례에 맞게 준비해 모둠 소리를 발표하고, 듣는 사람의 약속을 지키며 감상을 나눌 수 있다.',
    illustration: ART('a small paper stage in a classroom where a group of children performs with cups, paper and a tambourine while the audience sits quietly and claps', '우리 반 소리 발표회', [
      { motif: 'star', x: 120, y: 80, s: 0.7 }, { motif: 'star', x: 370, y: 84, s: 0.6 }, { motif: 'flower', x: 400, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"오늘은 우리 반 소리 발표회 날이에요. 무엇부터 해야 할까요?" 칠판에 \'소리 정하기, 연습, 발표, 감상\' 카드를 섞어 붙인다. 시연 단추로 준비 차례가 놓이는 모습을 보여 준다. 모둠마다 1분 안에 소리 이야기나 그림 악보 연주를 한다고 알린다(6모둠 × 1분).',
        student: '우리 모둠이 발표할 소리를 무엇으로 할지 짝과 정해 봐요.',
        demo: { tool: 'kitchen', options: { mode: 'order', cards: ['발표할 소리를 정해요', '모둠끼리 연습해요', '발표해요'], shuffle: false }, sequence: [{ order: ['발표할 소리를 정해요', '모둠끼리 연습해요', '발표해요'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 발표회 준비하기', minutes: 11, tool: 'kitchen',
            teacher: '"발표하기 전에 연습을 두 번 해요. 한 번은 작게, 한 번은 실제처럼." 모둠 연습 시간은 5분이고 종이 울리면 멈춘다. 듣는 사람 약속을 고를 때 \'잘 들리지 않으면 떠들어요\'처럼 그럴듯한 함정을 짚는다. 연습 뒤에 차례를 뽑기로 정한다.',
            task: '발표회 준비 차례를 정하고, 듣는 사람 약속을 고른 뒤 모둠 연습을 해요.',
            levels: CARD_LV,
            items: [
              { prompt: '소리 발표회를 여는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['발표할 소리를 정해요', '모둠끼리 연습해요', '앞에 나가 인사해요', '발표하고 감상을 나눠요'] },
                target: { order: ['발표할 소리를 정해요', '모둠끼리 연습해요', '앞에 나가 인사해요', '발표하고 감상을 나눠요'] }, difficulty: 0.15,
                hints: ['무엇을 발표할지 모르면 연습을 할 수 있을까요? 먼저 할 일부터 떠올려요.', '연습은 앞에 나가기 전에 해요. 인사는 발표 바로 앞에 해요.', '소리 정하기 → 연습 → 앞에 나가 인사 → 발표하고 감상 나누기 차례예요.'] },
              { prompt: '듣는 사람이 지킬 약속에만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '듣는 사람 약속', items: [{ id: 'quiet', text: '발표하는 동안 조용히 들어요' }, { id: 'clap', text: '끝나면 손뼉을 쳐요' }, { id: 'talk', text: '잘 안 들리면 옆 친구와 이야기해요' }, { id: 'play', text: '내 악기를 같이 두드려요' }] },
                target: { checklist: ['quiet', 'clap'] }, difficulty: 0.1,
                hints: ['발표하는 친구의 소리가 잘 들리게 하는 일인지 따져 봐요.', '옆 친구와 이야기하거나 악기를 두드리면 발표 소리가 잘 들릴까요?', '조용히 듣기와 끝나고 손뼉 치기 두 가지에만 표시해요.'] },
              { prompt: '모둠끼리 작게 한 번, 실제처럼 한 번 연습했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 발표하고 감상하기', minutes: 17, tool: 'mindmap',
            teacher: '"사회자는 모둠 이름을 알리고, 연주자는 소리를 내고, 관객은 조용히 들어요." 역할 카드를 잇게 한 뒤 발표를 시작한다. 모둠마다 1분 발표 + 30초 감상(콕 집은 말 한 가지)으로 6모둠이 약 9분이다. 감상은 22차시 말틀을 쓴다. 발표 순서는 연습이 끝난 뒤 뽑기로 정한다.',
            task: '발표회 역할과 하는 일을 잇고, 모둠마다 발표한 뒤 콕 집은 감상을 한 가지씩 나눠요.',
            levels: CARD_LV,
            items: [
              { prompt: '발표회 역할과 하는 일을 이어 보세요.', toolOptions: { mode: 'match', topic: '발표회 역할', hint1: '그 역할을 맡은 사람이 발표회에서 무엇을 해야 하는지 떠올려 이어요.', slots: [{ id: 's1', label: '사회자' }, { id: 's2', label: '연주자' }, { id: 's3', label: '관객' }], cards: ['다음 모둠을 소개해요', '연습한 소리를 들려줘요', '조용히 듣고 손뼉을 쳐요'] },
                target: { match: { s1: '다음 모둠을 소개해요', s2: '연습한 소리를 들려줘요', s3: '조용히 듣고 손뼉을 쳐요' } }, difficulty: 0.1 },
              { prompt: '발표를 듣고 나눌 감상 말로 알맞은 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '감상 말', cards: ['기차가 점점 빨라지는 게 들렸어', '비가 그칠 때 조용해져서 좋았어', '우리 모둠이 더 잘했어', '빨리 끝났으면 좋겠어'] },
                target: { pick: ['기차가 점점 빨라지는 게 들렸어', '비가 그칠 때 조용해져서 좋았어'] }, difficulty: 0.15 },
              { prompt: '우리 모둠이 발표를 마치고 다른 모둠 발표에 감상을 한 가지 말했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"오늘 발표회에서 가장 기억에 남는 소리는 무엇이었나요?" 모둠마다 한 사람씩 짧게 말한다. 출구 1번은 솔직하게 고르게 한다. 악기와 물건을 바구니에 정리한 뒤, 다음 시간에는 소리에 대해 더 궁금한 것을 찾는다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'scale', steps: 5, situation: '우리 모둠이 소리 발표회에서 발표했어요.', feeling: '신남', ask: '발표할 때 마음은 얼마나 신났나요?' }, prompt: '발표할 때 내 마음이 얼마나 신났는지 솔직하게 골라 보세요. 정답은 없어요.', target: { level: 'any' }, difficulty: 0.05 },
          { type: 'choice', prompt: '다른 모둠이 발표할 때 관객이 할 일은?', options: ['조용히 들어요', '내 악기를 같이 쳐요', '옆 친구와 이야기해요'], answer: 0, difficulty: 0.1, explain: '조용히 들어야 발표하는 소리가 잘 들려요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '우리 반 소리 발표회',
      items: [
        { type: 'table', prompt: '모둠 발표를 듣고 기억에 남는 점을 쓰세요.', columns: ['모둠', '기억에 남는 소리'], rows: 3 },
        { type: 'check', prompt: '듣는 사람 약속에 모두 ✓ 하세요.', options: ['조용히 들어요', '끝나면 손뼉을 쳐요', '옆 친구와 이야기해요'] },
        { type: 'short', prompt: '다른 모둠에게 해 준 감상 말을 쓰세요.' },
        { type: 'draw', prompt: '우리 모둠 발표 모습을 그리세요.' },
      ],
      easy: {
        note: '발표 때는 조용히, 끝나면 손뼉!',
        items: [
          { type: 'choice', prompt: '관객이 할 일에 ○ 하세요.', options: ['조용히 들어요', '떠들어요'], answer: '조용히 들어요' },
          { type: 'short', prompt: '가장 좋았던 모둠 소리를 쓰세요.' },
          { type: 'draw', prompt: '발표회 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '모두 놓은 뒤 확인을 눌러요. 감상을 한 가지 나눠요.',
      challenge: '사회자 역할을 맡아 모둠을 소개하고, 감상을 두 가지 나눠요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 연습 없이 바로 발표하려 한다 → 연습 두 번(작게, 실제처럼)을 먼저 하게 한다. ② 다른 모둠 발표 중에 악기를 만진다 → 악기는 무릎 위에 두는 약속을 정한다. ③ 감상을 "우리가 더 잘했어"처럼 견주기로 한다 → 그 모둠의 소리에서 좋았던 점만 말하게 한다. 시간이 모자라면 감상은 모둠마다 한 사람만 한다. 발표 모습은 촬영하지 않는다.',
  }));

  lessons.push(L(24, {
    title: '학교 소리 지도 만들고 더 궁금한 소리 묻기',
    objective: '학교 곳곳에서 들리는 소리를 지도에 표시하고, 소리에 대해 더 궁금한 것을 질문으로 만들 수 있다.',
    illustration: ART('a simple paper school map with little sound symbols on the cafeteria, the playground and the music room, a child holding a notebook with question marks', '학교 소리 지도', [
      { motif: 'house', x: 120, y: 214, color: 'mint' }, { motif: 'tree', x: 360, y: 214 }, { motif: 'bird', x: 380, y: 80 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"쉬는 시간에 운동장에서는 어떤 소리가 들릴까요? 급식실은요?" 칸 지도를 띄우고 장소를 함께 짚는다. 시연 단추로 \'달그락달그락\' 소리가 나는 급식실에 핀이 꽂히는 모습을 보여 준다. "이번 소리 공부의 마지막 시간이에요. 들어 본 소리를 지도에 남기고, 더 궁금한 것을 질문으로 만들어요."',
        student: '교실에 앉아서 지금 들리는 학교 소리를 하나 찾아봐요.',
        demo: { tool: 'map', options: { grid: [5, 3], places: [{ name: '급식실', icon: 'house', at: [3, 0] }, { name: '운동장', icon: 'park', at: [1, 2] }] }, sequence: [{ place: '급식실' }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 소리 산책과 소리 지도', minutes: 14, tool: 'map',
            teacher: '"복도를 조용히 걸으며 들리는 소리를 세 가지 찾아요. 말하지 않고 귀로만!" 교사와 함께 복도·계단 앞까지 3분 동안 소리 산책을 한다. 돌아와서 들은 소리가 어디서 났는지 지도에 핀을 꽂는다. 소리 단서를 읽지 않고 장소 이름만 보고 꽂는 학생에게 "어떤 소리였지요? 그 소리가 나는 곳은?"을 되묻는다.',
            task: '소리 산책을 하고, 들은 소리가 나는 곳에 지도 핀을 꽂아요.',
            levels: { easy: { grid: [4, 3] }, base: { grid: [5, 3] }, challenge: { grid: [6, 4] } },
            items: [
              { prompt: '선생님과 복도를 조용히 걸으며 소리를 세 가지 찾았으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '식판과 숟가락이 달그락거리는 소리가 들려요. 소리가 나는 곳에 핀을 꽂아 보세요.', toolOptions: { places: [{ name: '급식실', icon: 'house', at: [3, 0] }, { name: '도서실', icon: 'library', at: [0, 1] }, { name: '운동장', icon: 'park', at: [1, 2] }] }, target: { place: '급식실' }, difficulty: 0.05 },
              { prompt: '"와!" 하는 함성과 공 튀는 소리가 들려요. 소리가 나는 곳에 핀을 꽂아 보세요.', toolOptions: { places: [{ name: '보건실', icon: 'hospital', at: [0, 0] }, { name: '운동장', icon: 'park', at: [2, 2] }, { name: '도서실', icon: 'library', at: [3, 1] }] }, target: { place: '운동장' }, difficulty: 0.1 },
              { prompt: '리코더와 실로폰 소리가 들려요. 소리가 나는 곳에 핀을 꽂아 보세요.', toolOptions: { places: [{ name: '음악실', icon: 'school', at: [1, 0] }, { name: '보건실', icon: 'hospital', at: [3, 2] }, { name: '급식실', icon: 'house', at: [2, 1] }] }, target: { place: '음악실' }, difficulty: 0.1,
                conclude: '소리를 들으면 눈으로 보지 않아도 그곳에서 무슨 일이 있는지 알 수 있어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 더 궁금한 소리 질문 만들기', minutes: 12, tool: 'mindmap',
            teacher: '"오늘까지 알게 된 것과 아직 궁금한 것을 나눠 봐요. 궁금한 것은 \'~할까?\'로 끝나요." 알게 된 것은 문장 끝이 \'~요.\'인 것, 질문은 \'~까?\'로 끝나는 것을 짚는다. 직접 해 볼 수 있는 질문 하나를 골라 집에서 해 보고 다음 주에 알려 주기로 한다.',
            task: '알게 된 것과 궁금한 질문을 나누고, 직접 해 볼 수 있는 질문을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '알게 된 것과 궁금한 질문으로 나누어 보세요.', toolOptions: { topic: '소리 공부', slots: ['알게 된 것', '궁금한 질문'], cards: ['팽팽한 고무줄은 높은 소리가 나요', '종이 한 장으로 여러 소리를 내요', '물속에서도 소리가 들릴까?', '고무줄을 세 개 걸면 노래를 칠 수 있을까?'] },
                target: { sort: { '알게 된 것': ['팽팽한 고무줄은 높은 소리가 나요', '종이 한 장으로 여러 소리를 내요'], '궁금한 질문': ['물속에서도 소리가 들릴까?', '고무줄을 세 개 걸면 노래를 칠 수 있을까?'] } }, difficulty: 0.1 },
              { prompt: '우리가 교실에서 직접 해 볼 수 있는 질문만 골라 보세요.', toolOptions: { mode: 'pick', basket: '직접 해 볼 질문', cards: ['컵에 물을 더 부으면 소리가 달라질까?', '종이를 더 빨리 흔들면 소리가 커질까?', '우주에서는 소리가 어떻게 들릴까?', '공룡은 어떤 소리를 냈을까?'] },
                target: { pick: ['컵에 물을 더 부으면 소리가 달라질까?', '종이를 더 빨리 흔들면 소리가 커질까?'] }, difficulty: 0.2,
                hints: ['그 질문의 답을 알려면 무엇이 필요한지 떠올려 봐요. 교실에 있는 물건으로 할 수 있나요?', '우주나 공룡은 우리가 교실에서 직접 해 볼 수 있을까요? 고른 카드를 다시 봐요.', '컵과 물, 종이로 바로 해 볼 수 있는 두 질문을 골라요.'] },
              { prompt: '내가 직접 해 볼 질문을 하나 정해 활동지에 썼으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"소리 공부를 하며 가장 재미있었던 시간은 언제예요?" 손을 들어 13~23차시 가운데 고르게 한다. 활동지에 쓴 질문은 교실 \'궁금 상자\'에 넣고, 해 본 학생은 다음 주 아침 시간에 알려 준다. 다음 시간부터는 생활 도구의 모양을 살펴본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'map', options: { grid: [5, 3], places: [{ name: '교문', icon: 'dot', at: [0, 2] }, { name: '방송실', icon: 'office', at: [2, 0] }, { name: '운동장', icon: 'park', at: [4, 1] }] }, prompt: '"딩동댕" 안내 방송이 시작되는 곳에 핀을 꽂아 보세요.', target: { place: '방송실' }, difficulty: 0.15 },
          { type: 'choice', prompt: '궁금한 질문은 어느 것일까요?', options: ['종이를 구기면 바스락 소리가 나요', '병에 모래를 넣으면 어떤 소리가 날까?'], answer: 1, difficulty: 0.1, explain: '아직 모르는 것을 \'~할까?\'로 물으면 궁금한 질문이에요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '학교 소리 지도',
      items: [
        { type: 'figure', wide: true, prompt: '"와!" 함성이 들리는 곳에 ○ 하세요.', tool: 'map', figures: [{ options: { grid: [5, 3], places: [{ name: '도서실', icon: 'library', at: [0, 0] }, { name: '운동장', icon: 'park', at: [3, 2] }, { name: '보건실', icon: 'hospital', at: [4, 0] }] }, caption: '' }], answer: '운동장' },
        { type: 'table', prompt: '소리 산책에서 들은 소리와 들린 곳을 쓰세요.', columns: ['들은 소리', '들린 곳'], rows: 3 },
        { type: 'short', prompt: '내가 직접 해 볼 궁금한 질문을 쓰세요.' },
        { type: 'draw', prompt: '우리 학교에서 가장 좋아하는 소리를 그리세요.' },
      ],
      easy: {
        note: '소리를 먼저 떠올리고 그 소리가 나는 곳을 찾아요.',
        items: [
          { type: 'choice', prompt: '달그락달그락 식판 소리가 나는 곳에 ○ 하세요.', options: ['급식실', '도서실'], answer: '급식실' },
          { type: 'choice', prompt: '궁금한 질문에 ○ 하세요.', options: ['물속에서도 들릴까?', '고무줄은 높은 소리가 나요'], answer: '물속에서도 들릴까?' },
          { type: 'draw', prompt: '좋아하는 학교 소리를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '지도가 작아(4×3칸) 장소를 찾기 쉬워요. 나누기에서는 맞는 칸에 초록 테두리가 생겨요.',
      base: '5×3칸 지도에서 소리 단서를 읽고 핀을 꽂아요.',
      challenge: '6×4칸 지도에서 찾고, 직접 해 볼 질문을 두 가지 만들어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 소리 산책 중에 떠든다 → "귀로만" 약속과 손 신호를 정한다. ② 알게 된 것과 질문을 문장 끝으로 가르지 못한다 → \'~요.\'와 \'~까?\'에 동그라미를 치게 한다. ③ 답할 수 없는 큰 질문만 만든다 → 교실 물건으로 해 볼 수 있는지 묻는다. 지도는 실제 학교가 아닌 단순한 칸 지도이니, 우리 학교 이야기는 말로 덧붙인다.',
  }));

  // ───────────────────────── 25~28차시: "왜 이런 모양일까?" 묻기(탐구 질문 만들기) ─────────────────────────
  var WHY_HINT = '도구의 그 부분이 없다면 쓸 때 무엇이 불편할지 떠올리고, 그 불편을 막는 까닭을 찾아요.';

  lessons.push(L(25, {
    title: '가위와 컵을 보고 "왜 이런 모양일까" 묻기',
    objective: '가위와 컵의 모양을 살펴 "왜 이런 모양일까?" 하고 질문하고, 그 모양인 까닭을 짐작해 말할 수 있다.',
    illustration: ART('a big paper pair of children\'s scissors and a mug with a handle on a desk, a curious child with a magnifying glass and floating question marks', '왜 이런 모양일까?', [
      { motif: 'star', x: 110, y: 84, s: 0.6 }, { motif: 'tree', x: 390, y: 214 }, { motif: 'flower', x: 130, y: 228 }]),
    safety: ['가위는 날을 닫은 채로 살펴보고, 날 끝을 친구에게 향하지 않아요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"가위 손잡이에 구멍이 없다면 어떻게 될까요?" 손잡이를 종이로 가린 가위를 들어 보인다. 학생들이 "잡기 힘들어요"라고 답하면 "그래서 구멍이 있는 걸까요?"라고 되묻는다. 시연 단추로 \'손잡이 구멍\'과 \'손가락을 넣어 잡으려고\'가 이어지는 모습을 보여 준다. "이번 셋째 이야기는 생활 도구예요. 도구의 모양에는 까닭이 있어요."',
        student: '내 필통 속 도구 하나를 꺼내 "왜 이렇게 생겼을까?" 하고 살펴봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '가위의 모양', slots: [{ id: 's1', label: '손잡이에 구멍이 있어요' }], cards: ['손가락을 넣어 잡으려고', '예뻐 보이려고'], shuffle: false, hint1: WHY_HINT }, sequence: [{ match: { s1: '손가락을 넣어 잡으려고' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 모양에 대한 질문 찾기', minutes: 12, tool: 'mindmap',
            teacher: '"이 질문은 도구의 모양을 묻나요, 다른 것을 묻나요?" 모양을 묻는 질문에는 \'왜 ~ 모양일까?\', \'왜 ~가 있을까?\'가 들어간다는 것을 짚는다. 모둠마다 실제 가위와 컵을 만져 보고 붙임쪽지에 모양 질문을 하나씩 써 붙인다.',
            task: '도구의 모양을 묻는 질문을 찾고, 실제 도구를 만져 보며 모양 질문을 하나 써요.',
            levels: CARD_LV,
            items: [
              { prompt: '가위에 대한 질문을 모양을 묻는 질문과 다른 질문으로 나누어 보세요.', toolOptions: { topic: '가위에 대한 질문', slots: ['모양을 묻는 질문', '다른 것을 묻는 질문'], cards: ['손잡이는 왜 구멍이 두 개일까?', '날 끝은 왜 둥글까?', '이 가위는 얼마일까?', '가위는 누가 샀을까?'] },
                target: { sort: { '모양을 묻는 질문': ['손잡이는 왜 구멍이 두 개일까?', '날 끝은 왜 둥글까?'], '다른 것을 묻는 질문': ['이 가위는 얼마일까?', '가위는 누가 샀을까?'] } }, difficulty: 0.1 },
              { prompt: '컵의 모양을 묻는 질문만 골라 보세요.', toolOptions: { mode: 'pick', basket: '모양을 묻는 질문', cards: ['컵에는 왜 손잡이가 있을까?', '컵 바닥은 왜 평평할까?', '컵에 무엇을 마실까?', '컵은 어디에 둘까?'] },
                target: { pick: ['컵에는 왜 손잡이가 있을까?', '컵 바닥은 왜 평평할까?'] }, difficulty: 0.15,
                levels: { challenge: { prompt: '컵의 모양을 묻는 질문을 모두 골라 보세요.', toolOptions: { cards: ['컵에는 왜 손잡이가 있을까?', '컵 바닥은 왜 평평할까?', '컵 입구는 왜 둥글까?', '컵에 무엇을 마실까?', '컵은 어디에 둘까?'] }, target: { pick: ['컵에는 왜 손잡이가 있을까?', '컵 바닥은 왜 평평할까?', '컵 입구는 왜 둥글까?'] } } } },
              { prompt: '모둠 가위나 컵을 만져 보고 모양 질문을 붙임쪽지에 하나 썼으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 그 모양인 까닭 짐작하기', minutes: 14, tool: 'mindmap',
            teacher: '"그 부분이 없다면 무엇이 불편할까요?" 없을 때를 떠올리는 것이 까닭을 짐작하는 방법이라고 알려 준다. 바닥이 둥근 컵을 상상해 보게 하고(넘어져요!), 짐작한 까닭은 \'~하려고\'로 말하게 한다. \'예뻐 보이려고\'만 고르는 학생에게는 쓸 때 무엇이 편해지는지를 다시 묻는다.',
            task: '도구 부분의 모양을 보고 그 모양인 까닭을 짐작해 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '어린이 가위의 모양과 까닭을 이어 보세요.', toolOptions: { mode: 'match', topic: '어린이 가위', hint1: WHY_HINT, slots: [{ id: 's1', label: '손잡이에 구멍이 있어요' }, { id: 's2', label: '날 끝이 둥글어요' }], cards: ['손가락을 넣어 잡으려고', '찔려 다치지 않으려고'] },
                target: { match: { s1: '손가락을 넣어 잡으려고', s2: '찔려 다치지 않으려고' } }, difficulty: 0.1 },
              { prompt: '머그컵의 모양과 까닭을 이어 보세요.', toolOptions: { mode: 'match', topic: '머그컵', hint1: WHY_HINT, slots: [{ id: 's1', label: '옆에 손잡이가 있어요' }, { id: 's2', label: '바닥이 평평해요' }, { id: 's3', label: '입구가 둥글고 매끈해요' }], cards: ['뜨거운 것을 데지 않고 들려고', '책상에 세워도 넘어지지 않으려고', '입에 대고 마시기 좋으려고'] },
                target: { match: { s1: '뜨거운 것을 데지 않고 들려고', s2: '책상에 세워도 넘어지지 않으려고', s3: '입에 대고 마시기 좋으려고' } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['뜨거운 것을 데지 않고 들려고', '책상에 세워도 넘어지지 않으려고', '입에 대고 마시기 좋으려고', '무겁게 만들려고'] } } } },
              { prompt: '바닥이 둥근 컵이 있다면 어떻게 될까요? 알맞은 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '바닥이 둥근 컵이라면', cards: ['책상에 세우면 굴러요', '물을 담아 두면 쏟아져요', '더 잘 세워져요', '물이 저절로 많아져요'] },
                target: { pick: ['책상에 세우면 굴러요', '물을 담아 두면 쏟아져요'] }, difficulty: 0.15,
                conclude: '바닥이 평평한 까닭은 세워 둘 때 넘어지지 않게 하려는 것이에요.' },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"도구 모양은 처음부터 정해져 바꿀 수 없을까요?" 출구 2번을 고른 뒤, 손잡이가 없는 종이컵과 손잡이가 있는 머그컵을 나란히 보여 준다. 같은 컵도 모양이 다르게 만들어져 왔다는 것을 짚고, 다음 시간에 부엌 도구를 살펴본다고 예고한다. 집에서 부엌 도구 하나를 보고 모양 질문을 생각해 오게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '연필의 모양', slots: [{ id: 'e1', label: '몸통이 육각형이에요' }, { id: 'e2', label: '끝이 뾰족해요' }], cards: ['책상에서 굴러떨어지지 않으려고', '가는 선을 그리려고'] }, prompt: '연필의 모양과 까닭을 이어 보세요.', target: { match: { e1: '책상에서 굴러떨어지지 않으려고', e2: '가는 선을 그리려고' } }, difficulty: 0.2 },
          { type: 'choice', prompt: '도구의 모양은 어떨까요?', options: ['처음부터 정해져 바꿀 수 없어요', '쓰기 편하게 바꾸어 만들 수 있어요'], answer: 1, difficulty: 0.15, explain: '같은 컵도 손잡이가 있거나 없게, 쓰는 사람에 맞게 다르게 만들어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '왜 이런 모양일까?',
      items: [
        { type: 'figure', wide: true, prompt: '컵의 모양과 까닭을 선으로 이으세요.', tool: 'mindmap', figures: [{ options: { mode: 'match', topic: '머그컵', slots: [{ id: 's1', label: '손잡이' }, { id: 's2', label: '평평한 바닥' }], cards: ['넘어지지 않으려고', '뜨거운 것을 들려고'] }, caption: '' }], answer: '손잡이-뜨거운 것을 들려고, 평평한 바닥-넘어지지 않으려고' },
        { type: 'choice', prompt: '모양을 묻는 질문에 ○ 하세요.', options: ['가위 날 끝은 왜 둥글까?', '가위는 얼마일까?'], answer: '가위 날 끝은 왜 둥글까?' },
        { type: 'blank', prompt: '내 모양 질문을 완성하세요.', text: '______은 왜 ______ 모양일까?', answer: '예: 숟가락은 왜 오목한 모양일까?' },
        { type: 'short', prompt: '내 질문의 까닭을 짐작해 \'~하려고\'로 쓰세요.' },
      ],
      easy: {
        note: '그 부분이 없다면 무엇이 불편할지 떠올려요.',
        items: [
          { type: 'choice', prompt: '가위 손잡이에 구멍이 있는 까닭에 ○ 하세요.', options: ['손가락을 넣어 잡으려고', '무겁게 하려고'], answer: '손가락을 넣어 잡으려고' },
          { type: 'choice', prompt: '컵 바닥이 평평한 까닭에 ○ 하세요.', options: ['넘어지지 않으려고', '굴러가려고'], answer: '넘어지지 않으려고' },
          { type: 'draw', prompt: '내가 살펴본 도구를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '모두 이은 뒤 확인을 눌러요. 질문을 붙임쪽지에 써요.',
      challenge: '모양 질문을 세 가지 모두 찾고, 함정 까닭 카드를 골라내요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 도구 모양은 처음부터 정해져 바꿀 수 없다고 여긴다 → 종이컵과 머그컵처럼 같은 일을 하는 다른 모양을 견준다. ② 질문을 "이건 뭐예요?"로만 만든다 → \'왜 ~ 모양일까?\' 틀을 건넨다. ③ 까닭을 "예뻐서"로만 말한다 → 그 부분이 없을 때 불편한 점을 떠올리게 한다. 가위는 날을 닫은 채 돌려 보게 한다.',
  }));

  lessons.push(L(26, {
    title: '부엌 도구의 생김새로 하는 일 짐작하기',
    objective: '국자·집게·뒤집개·체의 생김새를 살펴 무엇을 하는 도구인지 짐작하고, 생김새와 까닭을 이을 수 있다.',
    illustration: ART('paper kitchen tools hanging on a wall rack: a ladle, tongs, a flat spatula and a sieve, a child pointing at the ladle with a question bubble', '부엌 도구 살펴보기', [
      { motif: 'house', x: 110, y: 214, color: 'buttercup' }, { motif: 'flower', x: 380, y: 228 }, { motif: 'cloud', x: 360, y: 70, s: 0.6 }]),
    safety: ['부엌칼처럼 날카로운 도구는 만지지 않고 그림으로만 봐요.', '불 가까이에 있는 도구는 어른과 함께 살펴봐요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"국자는 왜 머리가 오목하게 파였을까요? 숟가락보다 왜 클까요?" 깨끗한 국자와 숟가락을 나란히 들어 보인다. 시연 단추로 \'오목하고 큰 머리\'와 \'국물을 한 번에 많이 뜨려고\'가 이어지는 모습을 보여 준다. 집에서 생각해 온 모양 질문을 두세 명 듣는다. 칼은 오늘 만지지 않는다는 약속을 먼저 말한다.',
        student: '집에서 본 부엌 도구 가운데 신기하게 생긴 것을 하나 말해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '국자', slots: [{ id: 's1', label: '머리가 오목하고 커요' }], cards: ['국물을 한 번에 많이 뜨려고', '밥을 자르려고'], shuffle: false, hint1: WHY_HINT }, sequence: [{ match: { s1: '국물을 한 번에 많이 뜨려고' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 생김새와 까닭 잇기', minutes: 14, tool: 'mindmap',
            teacher: '"이 도구 끝을 손으로 만져 보세요. 오목한가요, 납작한가요, 구멍이 있나요?" 모둠마다 깨끗한 국자·집게·뒤집개·체를 돌려 가며 만져 보게 한다. 생김새를 먼저 말로 한 뒤 까닭을 잇게 한다. 체의 구멍을 \'고장 났다\'고 하는 학생에게 물을 부어 보는 모습을 보여 준다.',
            task: '부엌 도구를 만져 생김새를 살피고, 그 생김새인 까닭을 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '부엌 도구의 생김새와 까닭을 이어 보세요.', toolOptions: { mode: 'match', topic: '부엌 도구', hint1: WHY_HINT, slots: [{ id: 's1', label: '집게 끝이 두 갈래예요' }, { id: 's2', label: '뒤집개 끝이 얇고 넓적해요' }], cards: ['음식을 집어 올리려고', '부침개 밑으로 넣어 뒤집으려고'] },
                target: { match: { s1: '음식을 집어 올리려고', s2: '부침개 밑으로 넣어 뒤집으려고' } }, difficulty: 0.1 },
              { prompt: '세 도구의 생김새와 까닭을 이어 보세요.', toolOptions: { mode: 'match', topic: '부엌 도구', hint1: WHY_HINT, slots: [{ id: 's1', label: '체에 작은 구멍이 많아요' }, { id: 's2', label: '국자 손잡이가 길어요' }, { id: 's3', label: '냄비 손잡이가 양쪽에 있어요' }], cards: ['물은 빠지고 국수만 남기려고', '깊은 냄비 바닥까지 닿으려고', '두 손으로 들어 쏟지 않으려고'] },
                target: { match: { s1: '물은 빠지고 국수만 남기려고', s2: '깊은 냄비 바닥까지 닿으려고', s3: '두 손으로 들어 쏟지 않으려고' } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['물은 빠지고 국수만 남기려고', '깊은 냄비 바닥까지 닿으려고', '두 손으로 들어 쏟지 않으려고', '반짝반짝 빛나려고'] } } } },
              { prompt: '체에 구멍이 없다면 어떻게 될까요? 알맞은 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '구멍 없는 체라면', cards: ['물이 빠지지 않아요', '국수와 물이 함께 담겨 있어요', '물이 더 빨리 빠져요', '국수가 더 길어져요'] },
                target: { pick: ['물이 빠지지 않아요', '국수와 물이 함께 담겨 있어요'] }, difficulty: 0.15,
                predict: { q: '체에 물과 국수를 부으면 무엇이 남을까요?', options: ['물', '국수', '둘 다'], answer: 1 },
                conclude: '체의 구멍은 물보다 작은 국수가 빠지지 않을 만큼 작아서 국수만 남아요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 생김새를 보고 하는 일 짐작하기', minutes: 12, tool: 'mindmap',
            teacher: '"처음 보는 도구도 생김새를 보면 무엇을 하는지 짐작할 수 있어요." 깔때기·뜰채처럼 익숙하지 않은 도구 그림을 보여 주고 먼저 짐작하게 한 뒤 실제 쓰임을 알려 준다. 짐작이 틀려도 생김새를 근거로 말했으면 칭찬한다.',
            task: '처음 보는 도구의 생김새를 읽고 하는 일을 짐작해 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '생김새를 보고 하는 일을 짐작해 이어 보세요.', toolOptions: { mode: 'match', topic: '처음 보는 도구', hint1: '생김새에서 가장 눈에 띄는 곳을 찾고, 그 모양이 어떤 일에 쓰기 좋을지 떠올려요.', slots: [{ id: 's1', label: '위는 넓고 아래는 좁은 관이에요' }, { id: 's2', label: '긴 손잡이 끝에 그물이 달렸어요' }], cards: ['좁은 병에 물을 흘리지 않고 부어요', '물속 건더기를 건져 올려요'] },
                target: { match: { s1: '좁은 병에 물을 흘리지 않고 부어요', s2: '물속 건더기를 건져 올려요' } }, difficulty: 0.2 },
              { prompt: '집 도구의 생김새와 하는 일을 이어 보세요.', toolOptions: { mode: 'match', topic: '집 도구', hint1: '생김새에서 가장 눈에 띄는 곳을 찾고, 그 모양이 어떤 일에 쓰기 좋을지 떠올려요.', slots: [{ id: 's1', label: '빗자루 끝에 가는 솔이 많아요' }, { id: 's2', label: '쓰레받기 앞이 납작해요' }], cards: ['먼지를 쓸어 모아요', '바닥에 대고 먼지를 담아요'] },
                target: { match: { s1: '먼지를 쓸어 모아요', s2: '바닥에 대고 먼지를 담아요' } }, difficulty: 0.15 },
              { prompt: '집에서 부엌 도구 하나를 정해 모양 질문을 활동지에 썼으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 처음 안 부엌 도구의 비밀은 무엇이에요?" 두세 명이 \'~하려고 ~ 모양이에요\'로 말하게 한다. 도구는 씻어서 바구니에 넣는다. 다음 시간에는 같은 일을 하는데 모양이 다른 도구를 견준다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '부엌 도구', slots: [{ id: 'e1', label: '주걱이 넓고 납작해요' }, { id: 'e2', label: '거품기에 철사 고리가 여러 개예요' }], cards: ['밥을 한 번에 많이 퍼요', '달걀을 빠르게 휘저어요'] }, prompt: '두 도구의 생김새와 하는 일을 이어 보세요.', target: { match: { e1: '밥을 한 번에 많이 퍼요', e2: '달걀을 빠르게 휘저어요' } }, difficulty: 0.2 },
          { type: 'choice', prompt: '처음 보는 도구가 하는 일을 짐작하려면?', options: ['생김새를 살펴봐요', '색깔만 봐요', '값을 물어봐요'], answer: 0, difficulty: 0.1, explain: '도구의 생김새에는 하는 일에 맞는 까닭이 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '부엌 도구 살펴보기',
      items: [
        { type: 'figure', wide: true, prompt: '도구의 생김새와 까닭을 선으로 이으세요.', tool: 'mindmap', figures: [{ options: { mode: 'match', topic: '부엌 도구', slots: [{ id: 's1', label: '집게 끝이 두 갈래' }, { id: 's2', label: '체에 구멍이 많음' }], cards: ['물을 빼려고', '음식을 집으려고'] }, caption: '' }], answer: '집게-음식을 집으려고, 체-물을 빼려고' },
        { type: 'table', prompt: '집에서 살펴본 부엌 도구를 쓰세요.', columns: ['도구', '생김새', '왜 그럴까'], rows: 1 },
        { type: 'choice', prompt: '국자 손잡이가 긴 까닭에 ○ 하세요.', options: ['깊은 냄비 바닥까지 닿으려고', '무거워 보이려고'], answer: '깊은 냄비 바닥까지 닿으려고' },
        { type: 'draw', prompt: '가장 신기한 부엌 도구를 그리세요.' },
      ],
      easy: {
        note: '도구 끝 모양을 먼저 손으로 짚어요.',
        items: [
          { type: 'choice', prompt: '음식을 집어 올리는 도구에 ○ 하세요.', options: ['집게', '체'], answer: '집게' },
          { type: 'choice', prompt: '국수 물을 빼는 도구에 ○ 하세요.', options: ['체', '뒤집개'], answer: '체' },
          { type: 'draw', prompt: '부엌 도구를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '모두 이은 뒤 확인을 눌러요. 도구를 직접 만져 보고 이어요.',
      challenge: '함정 까닭을 골라내고, 처음 보는 도구의 하는 일을 생김새로 설명해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 생김새를 보지 않고 아는 쓰임만 말한다 → "어디를 보고 알았어요?"를 묻는다. ② 체의 구멍처럼 \'빈 곳\'의 까닭을 떠올리기 어려워한다 → 물을 부어 보는 모습을 보인다. ③ 집 도구를 가져오려 한다 → 칼·가위 같은 날카로운 부엌 도구는 가져오지 않고 그림으로 그려 오게 한다.',
  }));

  lessons.push(L(27, {
    title: '같은 일을 하는 도구가 모양이 다른 까닭 찾기',
    objective: '같은 일을 하는데 모양이 다른 도구를 견주어, 누구를 위해 모양이 다른지 짐작해 말할 수 있다.',
    illustration: ART('pairs of paper tools side by side: a small rounded child spoon next to a big spoon, a left-handed pair of scissors next to a regular pair, and a bent straw next to a straight one', '누구를 위한 모양일까?', [
      { motif: 'flower', x: 110, y: 228, color: 'peach' }, { motif: 'tree', x: 390, y: 214 }, { motif: 'star', x: 300, y: 84, s: 0.5 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"아기 숟가락과 선생님 숟가락은 둘 다 밥을 떠요. 그런데 왜 크기가 다를까요?" 두 숟가락을 나란히 들어 보인다. 시연 단추로 \'작고 둥근 아기 숟가락\'과 \'입이 작은 아기\'가 이어지는 모습을 보여 준다. "같은 일을 하는 도구도 쓰는 사람에 맞게 모양을 바꾸어요." 25차시 질문(도구 모양은 바꿀 수 없을까?)을 다시 떠올린다.',
        student: '우리 집에 같은 일을 하는데 크기나 모양이 다른 도구가 있는지 떠올려 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '누구를 위한 모양?', slots: [{ id: 's1', label: '작고 둥근 아기 숟가락' }], cards: ['입이 작은 아기', '키가 큰 어른'], shuffle: false, hint1: '도구가 작거나 크거나 둥근 까닭을 떠올리고, 그 모양이 꼭 필요한 사람을 찾아요.' }, sequence: [{ match: { s1: '입이 작은 아기' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 누구를 위한 모양일까', minutes: 14, tool: 'mindmap',
            teacher: '"이 모양은 누가 쓰면 가장 편할까요?" 왼손잡이 가위를 오른손과 왼손으로 번갈아 잡아 보게 한다. 손잡이가 굵은 숟가락은 손 힘이 약한 사람이 쥐기 쉽다는 것을 짚는다. 특정 친구를 가리키며 말하지 않고 \'~한 사람\'으로 말하게 한다.',
            task: '모양이 다른 도구를 보고 누구에게 꼭 맞는 모양인지 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '도구와 그 모양이 꼭 맞는 사람을 이어 보세요.', toolOptions: { mode: 'match', topic: '누구를 위한 모양?', hint1: '도구가 작거나 크거나 둥근 까닭을 떠올리고, 그 모양이 꼭 필요한 사람을 찾아요.', slots: [{ id: 's1', label: '날 끝이 둥근 작은 가위' }, { id: 's2', label: '왼손에 맞게 날이 반대로 붙은 가위' }], cards: ['처음 가위를 쓰는 어린 동생', '왼손으로 가위질하는 사람'] },
                target: { match: { s1: '처음 가위를 쓰는 어린 동생', s2: '왼손으로 가위질하는 사람' } }, difficulty: 0.15 },
              { prompt: '세 도구와 그 모양이 꼭 맞는 사람을 이어 보세요.', toolOptions: { mode: 'match', topic: '누구를 위한 모양?', hint1: '도구가 작거나 크거나 둥근 까닭을 떠올리고, 그 모양이 꼭 필요한 사람을 찾아요.', slots: [{ id: 's1', label: '손잡이가 굵고 말랑한 숟가락' }, { id: 's2', label: '구부러지는 빨대' }, { id: 's3', label: '글자가 크게 쓰인 시계' }], cards: ['손 힘이 약한 할머니', '누워서 물을 마셔야 하는 환자', '작은 글씨가 잘 안 보이는 사람'] },
                target: { match: { s1: '손 힘이 약한 할머니', s2: '누워서 물을 마셔야 하는 환자', s3: '작은 글씨가 잘 안 보이는 사람' } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['손 힘이 약한 할머니', '누워서 물을 마셔야 하는 환자', '작은 글씨가 잘 안 보이는 사람', '달리기를 잘하는 친구'] } } } },
              { prompt: '어린 동생을 위해 바꾼 모양만 골라 보세요.', toolOptions: { mode: 'pick', basket: '어린 동생을 위한 모양', cards: ['모서리가 둥근 책상', '작고 가벼운 숟가락', '아주 무거운 망치', '긴 칼'] },
                target: { pick: ['모서리가 둥근 책상', '작고 가벼운 숟가락'] }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 두 도구 견주어 보기 (관찰)', minutes: 12, tool: 'mindmap',
            teacher: '"어린이 가위와 선생님 가위를 나란히 놓고, 다른 곳을 세 군데 찾아보세요." 모둠마다 두 가위(날을 닫은 채)와 두 숟가락을 견주게 한다. 다른 곳은 \'크기, 날 끝, 무게\'처럼 낱말로 말하게 한다. 견준 결과를 판의 카드로 나눈다.',
            task: '같은 일을 하는 두 도구를 견주어 보고, 다른 점과 같은 점을 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '어린이 가위와 선생님 가위를 날을 닫은 채 견주어 보았으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '두 가위의 같은 점과 다른 점을 나누어 보세요.', toolOptions: { topic: '어린이 가위와 선생님 가위', slots: ['같은 점', '다른 점'], cards: ['둘 다 종이를 잘라요', '둘 다 날이 두 개예요', '어린이 가위가 더 작아요', '어린이 가위는 날 끝이 둥글어요'] },
                target: { sort: { '같은 점': ['둘 다 종이를 잘라요', '둘 다 날이 두 개예요'], '다른 점': ['어린이 가위가 더 작아요', '어린이 가위는 날 끝이 둥글어요'] } }, difficulty: 0.15 },
              { prompt: '곧은 빨대와 구부러지는 빨대의 같은 점과 다른 점을 나누어 보세요.', toolOptions: { topic: '두 빨대', slots: ['같은 점', '다른 점'], cards: ['둘 다 물을 빨아 마셔요', '구부러지는 빨대는 주름이 있어요', '구부러지는 빨대는 고개를 숙이지 않아도 돼요', '둘 다 속이 비어 있어요'] },
                target: { sort: { '같은 점': ['둘 다 물을 빨아 마셔요', '둘 다 속이 비어 있어요'], '다른 점': ['구부러지는 빨대는 주름이 있어요', '구부러지는 빨대는 고개를 숙이지 않아도 돼요'] } }, difficulty: 0.2 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"같은 일을 하는 도구인데 모양이 다른 까닭을 한 문장으로 말해 볼까요?" \'쓰는 사람이 달라서\'라는 답을 이끈다. 다음 시간에는 옛날 도구와 오늘날 도구를 견주어 모양이 어떻게 바뀌었는지 본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '누구를 위한 모양?', slots: [{ id: 'e1', label: '바퀴가 달린 큰 가방' }, { id: 'e2', label: '손잡이가 아래에도 있는 문' }], cards: ['무거운 짐을 오래 끌고 가는 사람', '키가 작은 어린이'] }, prompt: '두 도구와 그 모양이 꼭 맞는 사람을 이어 보세요.', target: { match: { e1: '무거운 짐을 오래 끌고 가는 사람', e2: '키가 작은 어린이' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '아기 숟가락이 작고 둥근 까닭은?', options: ['아기 입이 작아서', '아기가 무거운 것을 좋아해서'], answer: 0, difficulty: 0.1, explain: '쓰는 사람의 몸에 맞게 도구 모양을 바꾸어 만들어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '누구를 위한 모양일까?',
      items: [
        { type: 'table', prompt: '두 도구를 견주어 쓰세요.', columns: ['', '어린이 가위', '선생님 가위'], cells: [['크기', '', ''], ['날 끝', '', ''], ['하는 일', '', '']] },
        { type: 'choice', prompt: '손 힘이 약한 할머니께 맞는 숟가락에 ○ 하세요.', options: ['손잡이가 굵은 숟가락', '아주 가는 숟가락'], answer: '손잡이가 굵은 숟가락' },
        { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '같은 일을 하는 도구도 쓰는 ___에 맞게 모양이 달라요.', answer: '사람' },
        { type: 'draw', prompt: '누군가를 위해 모양을 바꾼 도구를 하나 그리세요.' },
      ],
      easy: {
        note: '"이 도구는 누가 쓰면 가장 편할까?" 하고 물어요.',
        items: [
          { type: 'choice', prompt: '처음 가위를 쓰는 동생에게 맞는 가위에 ○ 하세요.', options: ['날 끝이 둥근 가위', '날 끝이 뾰족한 가위'], answer: '날 끝이 둥근 가위' },
          { type: 'choice', prompt: '구부러지는 빨대가 편한 사람에 ○ 하세요.', options: ['누워 있는 환자', '달리는 친구'], answer: '누워 있는 환자' },
          { type: 'draw', prompt: '어린이를 위한 도구를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '모두 이은 뒤 확인을 눌러요. 두 가위를 견주어 다른 곳 세 군데를 찾아요.',
      challenge: '관계없는 사람 카드를 골라내고, 견주기 표를 모두 채워요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 모양이 다른 까닭을 \'예뻐서\'로만 말한다 → 쓰는 사람의 몸(손, 입, 눈)을 떠올리게 한다. ② 특정 친구를 왼손잡이·키 작은 친구로 지목한다 → \'~한 사람\'으로 말하게 한다. ③ 같은 점을 찾지 못한다 → 두 도구가 하는 일을 먼저 말하게 한다. 가위는 날을 닫은 채 견주게 한다.',
  }));

  lessons.push(L(28, {
    title: '옛날 도구와 오늘날 도구 견주어 나누기',
    objective: '같은 일을 하는 옛날 도구와 오늘날 도구를 짝 짓고 나누어, 도구의 모양이 쓰기 편하게 바뀌어 왔다는 것을 말할 수 있다.',
    illustration: ART('a paper timeline from long ago to today showing an oil lamp turning into a light bulb, a millstone into a blender and a wooden carrying frame into a cart', '옛날과 오늘날', [
      { motif: 'house', x: 110, y: 214, color: 'peach' }, { motif: 'house', x: 380, y: 216, color: 'sky', s: 0.9 }, { motif: 'tree', x: 240, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"할머니의 할머니가 어렸을 때는 밤에 무엇으로 불을 밝혔을까요?" 호롱불 그림과 교실 전등을 나란히 보여 준다. 시연 단추로 호롱불이 \'옛날\', 전등이 \'오늘날\' 칸에 놓이는 모습을 보여 준다. "도구가 하는 일은 같아도 모양은 사람들이 더 편하게 바꾸어 왔어요." 도구 모양은 바꿀 수 없다는 생각이 맞는지 오늘 다시 따져 보자고 한다.',
        student: '우리 집에 오래된 물건이 있다면 하나 떠올려 봐요.',
        demo: { tool: 'timeline', options: { mode: 'sort', slots: ['옛날', '오늘날'], cards: ['호롱불', '전등'], shuffle: false }, sequence: [{ sort: { '옛날': ['호롱불'], '오늘날': ['전등'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 옛날 도구, 오늘날 도구', minutes: 13, tool: 'timeline',
            teacher: '"이 도구는 전기가 필요할까요?" 전기를 쓰지 않고 사람 힘으로 움직이는 것은 대부분 옛날 도구라는 것을 실마리로 준다. 맷돌은 돌을 손으로 돌려 곡식을 가는 도구라고 그림으로 설명한다. 나눈 뒤에는 같은 일을 하는 짝을 손가락으로 이어 보게 한다.',
            task: '도구 카드를 옛날 도구와 오늘날 도구로 나누고, 같은 일을 하는 짝을 찾아요.',
            levels: CARD_LV,
            items: [
              { prompt: '도구를 옛날과 오늘날로 나누어 보세요.', toolOptions: { mode: 'sort', slots: ['옛날', '오늘날'], cards: ['맷돌', '다듬잇방망이', '믹서', '전기다리미'] },
                target: { sort: { '옛날': ['맷돌', '다듬잇방망이'], '오늘날': ['믹서', '전기다리미'] } }, difficulty: 0.15,
                hints: ['도구마다 전기를 꽂아야 움직이는지, 사람 손힘으로 움직이는지 따져 봐요.', '맷돌과 다듬잇방망이는 무엇으로 움직이나요? 손으로 돌리고 두드려요.', '맷돌·다듬잇방망이는 옛날, 믹서·전기다리미는 오늘날 도구예요.'] },
              { prompt: '옛날 도구와 같은 일을 하는 오늘날 도구를 이어 보세요.', toolOptions: { mode: 'match', slots: [{ id: 's1', label: '지게' }, { id: 's2', label: '가마솥' }, { id: 's3', label: '호롱불' }], cards: ['손수레', '전기밥솥', '전등'] },
                target: { match: { s1: '손수레', s2: '전기밥솥', s3: '전등' } }, difficulty: 0.2,
                hints: ['옛날 도구가 무엇을 하던 것인지 먼저 떠올리고, 오늘날 같은 일을 하는 것을 찾아요.', '짐을 나르는 도구, 밥을 짓는 도구, 불을 밝히는 도구를 하나씩 짝 지어 봐요.', '지게는 짐 나르기라 손수레, 가마솥은 밥 짓기라 전기밥솥, 호롱불은 불 밝히기라 전등이에요.'] },
              { prompt: '옛날 도구와 같은 일을 하는 오늘날 도구를 이어 보세요. 빨래도 있어요.', toolOptions: { mode: 'match', slots: [{ id: 's1', label: '빨래판' }, { id: 's2', label: '부채' }], cards: ['세탁기', '선풍기'] },
                target: { match: { s1: '세탁기', s2: '선풍기' } }, difficulty: 0.1,
                hints: ['옛날 도구가 무엇을 하던 것인지 먼저 말해 봐요. 빨래판은 무엇을 할 때 썼나요?', '부채는 바람을 일으켜요. 오늘날 바람을 일으키는 도구는 무엇일까요?', '빨래판은 빨래하기라 세탁기, 부채는 바람 일으키기라 선풍기예요.'],
                levels: { challenge: { prompt: '옛날 도구와 같은 일을 하는 오늘날 도구를 이어 보세요. 함정 카드도 있어요.', toolOptions: { cards: ['세탁기', '선풍기', '텔레비전'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 불 밝히는 도구가 바뀐 차례', minutes: 13, tool: 'timeline',
            teacher: '"불을 밝히는 도구는 어떤 차례로 바뀌었을까요?" 횃불 → 호롱불 → 둥근 전구 → 납작한 엘이디 등 그림을 섞어 보여 준다. 바뀔 때마다 무엇이 편해졌는지(연기가 줄었다, 불이 나지 않는다, 전기를 덜 쓴다) 함께 말한다. 도구 모양은 앞으로도 바뀔 수 있다는 것을 짚으며 33차시 \'모양 바꾸기\'로 잇는다.',
            task: '같은 일을 하는 도구가 바뀐 차례대로 옛날부터 오늘날까지 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '불을 밝히는 도구를 옛날부터 오늘날 차례로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['횃불', '호롱불', '둥근 전구', '납작한 엘이디 등'] },
                target: { order: ['횃불', '호롱불', '둥근 전구', '납작한 엘이디 등'] }, difficulty: 0.2,
                hints: ['불꽃으로 밝히는 도구가 먼저, 전기로 밝히는 도구가 나중이에요.', '불꽃 도구 가운데 막대에 불을 붙여 들고 다닌 것이 더 오래되었어요. 전기 도구 가운데 둥근 것이 먼저예요.', '횃불 → 호롱불 → 둥근 전구 → 납작한 엘이디 등 차례예요.'],
                levels: { easy: { prompt: '불을 밝히는 도구를 옛날부터 오늘날 차례로 세 장 놓아 보세요.', toolOptions: { cards: ['횃불', '호롱불', '둥근 전구'] }, target: { order: ['횃불', '호롱불', '둥근 전구'] } } } },
              { prompt: '짐을 나르는 도구를 옛날부터 오늘날 차례로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['등에 지는 지게', '사람이 끄는 손수레', '엔진으로 가는 트럭'] },
                target: { order: ['등에 지는 지게', '사람이 끄는 손수레', '엔진으로 가는 트럭'] }, difficulty: 0.15,
                hints: ['사람이 가장 힘들게 나르는 도구가 가장 옛날 것이에요.', '등에 지고 걷기, 바퀴를 끌기, 엔진으로 달리기 가운데 무엇이 가장 힘들까요?', '지게 → 손수레 → 트럭 차례예요.'] },
              { prompt: '도구가 바뀌면서 좋아진 점만 골라 보세요.', toolOptions: { mode: 'pick', basket: '좋아진 점', cards: ['힘이 덜 들어요', '더 빨리 끝나요', '쓰기 더 어려워졌어요', '모양이 하나도 안 바뀌었어요'] },
                target: { pick: ['힘이 덜 들어요', '더 빨리 끝나요'] }, difficulty: 0.15,
                conclude: '사람들은 힘이 덜 들고 빨리 끝나게 도구 모양을 바꾸어 왔어요.' },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"도구 모양은 처음부터 정해져 바꿀 수 없을까요?" 오늘 본 차례를 근거로 말하게 한다. 출구 1번을 틀린 학생에게 그 도구가 전기를 쓰는지 물어본다. 다음 시간에는 도구 하나를 골라 모양과 하는 일을 나누어 적는다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'timeline', options: { mode: 'sort', slots: ['옛날', '오늘날'], cards: ['우물 두레박', '수도꼭지', '화로', '전기난로'] }, prompt: '도구를 옛날과 오늘날로 나누어 보세요.', target: { sort: { '옛날': ['우물 두레박', '화로'], '오늘날': ['수도꼭지', '전기난로'] } }, difficulty: 0.2 },
          { type: 'choice', prompt: '옛날 다듬잇방망이가 하던 일을 오늘날 하는 도구는?', options: ['전기다리미', '냉장고', '선풍기'], answer: 0, difficulty: 0.2, explain: '다듬잇방망이로 옷의 구김을 폈어요. 오늘날은 다리미로 펴요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '옛날 도구와 오늘날 도구',
      items: [
        { type: 'table', prompt: '같은 일을 하는 옛날 도구와 오늘날 도구를 쓰세요.', columns: ['하는 일', '옛날 도구', '오늘날 도구'], cells: [['불 밝히기', '', ''], ['짐 나르기', '', ''], ['빨래하기', '', '']] },
        { type: 'figure', wide: true, prompt: '불 밝히는 도구를 옛날부터 차례대로 1, 2, 3, 4를 쓰세요.', tool: 'timeline', figures: [{ options: { mode: 'order', cards: ['둥근 전구', '횃불', '납작한 엘이디 등', '호롱불'], shuffle: false }, caption: '' }], answer: '횃불 → 호롱불 → 둥근 전구 → 엘이디 등' },
        { type: 'choice', prompt: '도구가 바뀌며 좋아진 점에 ○ 하세요.', options: ['힘이 덜 들어요', '더 어려워졌어요'], answer: '힘이 덜 들어요' },
        { type: 'short', prompt: '앞으로 모양을 바꾸고 싶은 도구를 하나 쓰세요.' },
      ],
      easy: {
        note: '전기를 쓰는 도구는 오늘날 도구가 많아요.',
        items: [
          { type: 'choice', prompt: '옛날 도구에 ○ 하세요.', options: ['호롱불', '전등'], answer: '호롱불' },
          { type: 'choice', prompt: '빨래판이 하던 일을 하는 오늘날 도구에 ○ 하세요.', options: ['세탁기', '선풍기'], answer: '세탁기' },
          { type: 'draw', prompt: '옛날 도구 하나를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 차례 놓기는 세 장이에요.',
      base: '모두 놓은 뒤 확인을 눌러요. 바뀔 때마다 좋아진 점을 말해요.',
      challenge: '함정 카드를 골라내고, 네 단계 차례마다 무엇이 편해졌는지 설명해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 옛날 도구를 처음 보아 하는 일을 모른다 → 그림과 몸짓(맷돌 돌리기, 지게 지기)으로 먼저 보여 준다. ② 오늘날 도구가 무조건 좋다고 여긴다 → 전기를 쓰는 만큼 아껴야 한다는 1~12차시 내용과 잇는다. ③ 도구 모양은 바꿀 수 없다고 여긴다 → 오늘 놓은 차례가 바로 모양이 바뀐 증거라고 짚는다. 옛날 도구 그림은 교사가 박물관 누리집 자료를 띄워 보여 준다.',
  }));

  // ───────────────────────── 29~32차시: 모양과 하는 일 살펴보기 ─────────────────────────
  lessons.push(L(29, {
    title: '도구의 모양과 하는 일을 나누어 적기',
    objective: '도구 하나를 살펴 생김새를 말하는 문장과 하는 일을 말하는 문장을 나누어 적을 수 있다.',
    illustration: ART('a paper two-column chart on a board titled shape and job, with a stapler and a ruler pinned beside it, a child sorting paper notes into the two columns', '모양과 하는 일', [
      { motif: 'flower', x: 110, y: 228 }, { motif: 'tree', x: 390, y: 214 }, { motif: 'star', x: 120, y: 84, s: 0.5 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"자는 \'길고 곧아요\'. 이건 생김새일까요, 하는 일일까요?" 자와 스테이플러를 들어 보인다. \'~ 생겼어요, ~이 있어요\'는 생김새, \'~을 해요\'는 하는 일이라는 말 틀을 칠판 양쪽에 적는다. 시연 단추로 두 문장이 제자리에 놓이는 모습을 보여 준다.',
        student: '내 자를 보고 생김새를 한 가지 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '자', slots: ['생김새', '하는 일'], cards: ['길고 곧아요', '줄을 반듯하게 그어요'], shuffle: false }, sequence: [{ sort: { '생김새': ['길고 곧아요'], '하는 일': ['줄을 반듯하게 그어요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 생김새 문장, 하는 일 문장', minutes: 14, tool: 'mindmap',
            teacher: '"이 문장 끝을 보세요. \'~해요\'로 끝나면 무엇을 한다는 걸까요?" 문장 끝말을 실마리로 쓰게 한다. 스테이플러를 실제로 눌러 종이 두 장을 찍는 모습을 보여 준 뒤 분류하게 한다. 헷갈리는 카드는 손으로 도구를 만져 확인하게 한다.',
            task: '도구에 대한 문장을 생김새와 하는 일로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '스테이플러에 대한 문장을 나누어 보세요.', toolOptions: { topic: '스테이플러', slots: ['생김새', '하는 일'], cards: ['위와 아래가 맞물려요', '안에 작은 철심이 들어 있어요', '종이 여러 장을 묶어요', '누르면 철심이 박혀요'] },
                target: { sort: { '생김새': ['위와 아래가 맞물려요', '안에 작은 철심이 들어 있어요'], '하는 일': ['종이 여러 장을 묶어요', '누르면 철심이 박혀요'] } }, difficulty: 0.2 },
              { prompt: '풀에 대한 문장을 나누어 보세요.', toolOptions: { topic: '딱풀', slots: ['생김새', '하는 일'], cards: ['통이 둥근 기둥 모양이에요', '돌리면 풀이 올라와요', '종이와 종이를 붙여요'] },
                target: { sort: { '생김새': ['통이 둥근 기둥 모양이에요'], '하는 일': ['돌리면 풀이 올라와요', '종이와 종이를 붙여요'] } }, difficulty: 0.25,
                hints: ['문장이 \'~이에요, ~이 있어요\'로 끝나면 생김새, 무엇을 한다는 말이면 하는 일이에요.', '\'돌리면 ~올라와요\'는 풀을 쓸 때 일어나는 일이에요.', '둥근 기둥 모양은 생김새, 풀이 올라오는 것과 붙이는 것은 하는 일이에요.'] },
              { prompt: '모둠 도구 하나를 정해 생김새 한 문장, 하는 일 한 문장을 활동지에 썼으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 생김새가 하는 일을 돕는 곳', minutes: 12, tool: 'mindmap',
            teacher: '"생김새와 하는 일은 서로 이어져 있어요. 스테이플러 위아래가 맞물리지 않는다면 철심이 박힐까요?" 생김새 문장과 하는 일 문장을 짝 짓게 한다. 짝을 지은 뒤 \'~해서 ~할 수 있어요\'로 이어 말하게 한다.',
            task: '도구의 생김새가 어떤 일을 돕는지 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '생김새와 그 덕분에 할 수 있는 일을 이어 보세요.', toolOptions: { mode: 'match', topic: '생김새 덕분에', hint1: WHY_HINT, slots: [{ id: 's1', label: '자에 눈금이 있어요' }, { id: 's2', label: '지우개가 말랑해요' }], cards: ['길이를 잴 수 있어요', '종이를 문질러도 찢어지지 않아요'] },
                target: { match: { s1: '길이를 잴 수 있어요', s2: '종이를 문질러도 찢어지지 않아요' } }, difficulty: 0.15 },
              { prompt: '세 도구의 생김새와 그 덕분에 할 수 있는 일을 이어 보세요.', toolOptions: { mode: 'match', topic: '생김새 덕분에', hint1: WHY_HINT, slots: [{ id: 's1', label: '연필깎이에 칼날이 둥글게 돌아요' }, { id: 's2', label: '테이프 통에 톱니 날이 있어요' }, { id: 's3', label: '필통에 칸이 나뉘어 있어요' }], cards: ['연필을 넣고 돌리면 깎여요', '테이프를 손으로 쉽게 끊어요', '도구를 섞이지 않게 넣어요'] },
                target: { match: { s1: '연필을 넣고 돌리면 깎여요', s2: '테이프를 손으로 쉽게 끊어요', s3: '도구를 섞이지 않게 넣어요' } }, difficulty: 0.25,
                levels: { challenge: { toolOptions: { cards: ['연필을 넣고 돌리면 깎여요', '테이프를 손으로 쉽게 끊어요', '도구를 섞이지 않게 넣어요', '색깔이 예뻐져요'] } } } },
              { prompt: '하는 일을 말하는 문장만 골라 보세요.', toolOptions: { mode: 'pick', basket: '하는 일', cards: ['가위로 종이를 잘라요', '컵에 물을 담아요', '가위는 손잡이가 빨개요', '컵은 둥글어요'] },
                target: { pick: ['가위로 종이를 잘라요', '컵에 물을 담아요'] }, difficulty: 0.15 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 쓴 문장 가운데 생김새와 하는 일을 이어 말할 수 있는 것을 발표해 볼까요?" 두세 명이 \'~해서 ~할 수 있어요\'로 말한다. 다음 시간에는 집게 하나를 아주 자세히 살펴본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '우산', slots: ['생김새', '하는 일'], cards: ['펼치면 둥근 지붕 모양이에요', '비를 막아 줘요', '손잡이가 구부러져 있어요', '머리가 젖지 않게 해요'] }, prompt: '우산에 대한 문장을 나누어 보세요.', target: { sort: { '생김새': ['펼치면 둥근 지붕 모양이에요', '손잡이가 구부러져 있어요'], '하는 일': ['비를 막아 줘요', '머리가 젖지 않게 해요'] } }, difficulty: 0.2 },
          { type: 'choice', prompt: '"자는 길이를 재요"는 무엇을 말하는 문장일까요?', options: ['생김새', '하는 일'], answer: 1, difficulty: 0.1, explain: '무엇을 하는지 말하는 문장이에요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '모양과 하는 일',
      items: [
        { type: 'table', prompt: '도구 하나를 골라 나누어 쓰세요.', columns: ['도구', '생김새', '하는 일'], rows: 2 },
        { type: 'choice', prompt: '생김새를 말하는 문장에 ○ 하세요.', options: ['풀 통은 둥근 기둥 모양이에요', '풀로 종이를 붙여요'], answer: '풀 통은 둥근 기둥 모양이에요' },
        { type: 'blank', prompt: '생김새와 하는 일을 이어 쓰세요.', text: '자에 ______이 있어서 길이를 잴 수 있어요.', answer: '눈금' },
        { type: 'draw', prompt: '내가 고른 도구를 그리고 생김새에 화살표를 그리세요.' },
      ],
      easy: {
        note: '\'~해요\'로 끝나면 하는 일이에요.',
        items: [
          { type: 'choice', prompt: '하는 일에 ○ 하세요.', options: ['가위로 종이를 잘라요', '가위는 빨개요'], answer: '가위로 종이를 잘라요' },
          { type: 'choice', prompt: '생김새에 ○ 하세요.', options: ['자는 길고 곧아요', '자로 줄을 그어요'], answer: '자는 길고 곧아요' },
          { type: 'draw', prompt: '도구 하나를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '모두 나눈 뒤 확인을 눌러요. 문장 끝말을 실마리로 써요.',
      challenge: '함정 카드를 골라내고, 생김새와 하는 일을 \'~해서 ~할 수 있어요\'로 이어 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 색깔만 생김새로 말한다 → 손으로 만져 크기·모양·부분을 찾게 한다. ② \'돌리면 올라와요\'처럼 움직임을 생김새로 고른다 → 쓸 때 일어나는 일은 하는 일 쪽이라고 정한다. ③ 하는 일을 한 가지만 쓴다 → 31차시에 한 도구의 여러 쓰임을 다룬다.',
  }));

  lessons.push(L(30, {
    title: '집게를 부분마다 살펴 하는 일 찾기',
    objective: '집게를 손잡이·용수철·끝으로 나누어 살펴보고, 각 부분이 하는 일을 이어 말할 수 있다.',
    illustration: ART('a large wooden paper clothes peg drawn with labelled parts: two handles, a coiled spring and the gripping tips, a child pressing it with fingers', '집게 자세히 보기', [
      { motif: 'flower', x: 110, y: 228, color: 'buttercup' }, { motif: 'tree', x: 390, y: 214 }, { motif: 'cloud', x: 120, y: 70, s: 0.5 }]),
    safety: ['집게로 친구 손이나 귀를 집지 않아요.', '용수철을 억지로 빼지 않아요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"집게를 눌러 보세요. 어디를 누르면 입이 벌어지나요? 손을 떼면 어떻게 되나요?" 모둠마다 빨래집게를 하나씩 나누어 준다. 친구 몸을 집지 않는다는 약속을 먼저 한다. 시연 단추로 \'용수철\'과 \'손을 떼면 다시 다물어요\'가 이어지는 모습을 보여 준다.',
        student: '집게를 눌렀다 떼며 무엇이 움직이는지 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '빨래집게', slots: [{ id: 's1', label: '용수철' }], cards: ['손을 떼면 다시 다물어요', '색을 칠해요'], shuffle: false }, sequence: [{ match: { s1: '손을 떼면 다시 다물어요' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 집게 부분 살펴보기 (관찰)', minutes: 13, tool: 'mindmap',
            teacher: '"손잡이, 용수철, 끝을 하나씩 손가락으로 짚어 보세요." 짚은 부분을 판의 이름 카드와 견주게 한다. 끝에 있는 오돌토돌한 홈을 돋보기로 보게 하고 왜 매끈하지 않은지 묻는다. 관찰한 것은 활동지 그림에 이름을 붙여 적는다.',
            task: '집게를 부분마다 짚어 보고, 각 부분이 하는 일을 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '집게를 손가락으로 눌렀다 떼 보고, 손잡이·용수철·끝을 하나씩 짚었으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '집게의 부분과 하는 일을 이어 보세요.', toolOptions: { mode: 'match', topic: '빨래집게', hint1: WHY_HINT, slots: [{ id: 's1', label: '손잡이' }, { id: 's2', label: '용수철' }, { id: 's3', label: '끝' }], cards: ['손가락으로 눌러 입을 벌려요', '손을 떼면 다시 꽉 다물게 해요', '빨래를 물고 있어요'] },
                target: { match: { s1: '손가락으로 눌러 입을 벌려요', s2: '손을 떼면 다시 꽉 다물게 해요', s3: '빨래를 물고 있어요' } }, difficulty: 0.2 },
              { prompt: '집게 끝에 오돌토돌한 홈이 있는 까닭으로 알맞은 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '홈이 있는 까닭', cards: ['미끄러지지 않고 꽉 물려고', '빨래가 바람에 빠지지 않으려고', '소리가 나려고', '가벼워지려고'] },
                target: { pick: ['미끄러지지 않고 꽉 물려고', '빨래가 바람에 빠지지 않으려고'] }, difficulty: 0.2,
                predict: { q: '용수철을 뺀 집게는 빨래를 잘 물고 있을까요?', options: ['잘 물어요', '물지 못하고 벌어져요'], answer: 1 },
                conclude: '용수철이 끝을 꽉 다물게 하고, 홈이 미끄러짐을 막아 빨래가 떨어지지 않아요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 다른 집게 견주기', minutes: 14, tool: 'mindmap',
            teacher: '"집게도 여러 가지예요. 서류 집게, 머리 집게, 음식 집게를 보세요. 모두 \'꽉 무는\' 일을 할까요?" 그림을 보여 주고, 무는 힘이 어디서 오는지 견주게 한다. 서류 집게는 쇠가 휘어져 힘을 내고, 음식 집게는 손으로 쥐는 힘을 쓴다는 것을 짚는다.',
            task: '여러 집게의 부분을 견주어 같은 점과 다른 점을 찾아요.',
            levels: CARD_LV,
            items: [
              { prompt: '집게와 하는 일을 이어 보세요.', toolOptions: { mode: 'match', topic: '여러 집게', slots: [{ id: 's1', label: '서류 집게' }, { id: 's2', label: '음식 집게' }], cards: ['종이 뭉치를 꽉 묶어요', '뜨거운 고기를 집어 옮겨요'] },
                target: { match: { s1: '종이 뭉치를 꽉 묶어요', s2: '뜨거운 고기를 집어 옮겨요' } }, difficulty: 0.15 },
              { prompt: '여러 집게의 같은 점과 다른 점을 나누어 보세요.', toolOptions: { topic: '빨래집게와 음식 집게', slots: ['같은 점', '다른 점'], cards: ['둘 다 끝이 두 갈래예요', '둘 다 물건을 집어요', '빨래집게에는 용수철이 있어요', '음식 집게는 손잡이가 길어요'] },
                target: { sort: { '같은 점': ['둘 다 끝이 두 갈래예요', '둘 다 물건을 집어요'], '다른 점': ['빨래집게에는 용수철이 있어요', '음식 집게는 손잡이가 길어요'] } }, difficulty: 0.25 },
              { prompt: '음식 집게 손잡이가 긴 까닭으로 알맞은 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '손잡이가 긴 까닭', cards: ['뜨거운 불에서 손을 멀리 두려고', '깊은 그릇 속까지 닿으려고', '빨래를 널려고', '종이를 묶으려고'] },
                target: { pick: ['뜨거운 불에서 손을 멀리 두려고', '깊은 그릇 속까지 닿으려고'] }, difficulty: 0.2 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"집게의 세 부분 가운데 하나가 없으면 어떻게 될까요?" 손잡이·용수철·끝 가운데 하나를 골라 말하게 한다. 집게는 바구니에 돌려놓는다. 다음 시간에는 이 집게로 빨래 말고 또 무엇을 할 수 있을지 찾아보자고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '빨래집게', slots: [{ id: 'e1', label: '용수철' }, { id: 'e2', label: '끝의 홈' }], cards: ['손을 떼면 꽉 다물게 해요', '미끄러지지 않게 해요'] }, prompt: '집게의 부분과 하는 일을 이어 보세요.', target: { match: { e1: '손을 떼면 꽉 다물게 해요', e2: '미끄러지지 않게 해요' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '집게 입을 벌리려면 어디를 눌러요?', options: ['손잡이', '끝'], answer: 0, difficulty: 0.1, explain: '손잡이를 누르면 용수철이 감기며 끝이 벌어져요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '집게 자세히 보기',
      items: [
        { type: 'draw', prompt: '집게를 그리고 손잡이·용수철·끝에 이름을 쓰세요.' },
        { type: 'table', prompt: '부분마다 하는 일을 쓰세요.', columns: ['부분', '하는 일'], cells: [['손잡이', ''], ['용수철', ''], ['끝', '']] },
        { type: 'choice', prompt: '용수철이 없으면 어떻게 될까요?', options: ['끝이 다물지 못해요', '더 꽉 물어요'], answer: '끝이 다물지 못해요' },
        { type: 'short', prompt: '집게 끝에 홈이 있는 까닭을 쓰세요.' },
      ],
      easy: {
        note: '집게를 직접 눌러 보며 써요.',
        items: [
          { type: 'choice', prompt: '집게 입을 벌리려면 누르는 곳에 ○ 하세요.', options: ['손잡이', '끝'], answer: '손잡이' },
          { type: 'choice', prompt: '빨래를 물고 있는 곳에 ○ 하세요.', options: ['끝', '용수철'], answer: '끝' },
          { type: 'draw', prompt: '집게를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '모두 이은 뒤 확인을 눌러요. 집게를 직접 눌러 보며 이어요.',
      challenge: '여러 집게의 힘이 어디서 오는지 견주어 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 부분 이름을 몰라 \'여기\'로만 말한다 → 칠판 그림에 이름을 붙여 둔다. ② 용수철의 일을 \'꽉 문다\'와 \'벌린다\' 사이에서 헷갈린다 → 누를 때 감기고 뗄 때 풀리며 다문다고 손으로 보여 준다. ③ 집게로 장난을 친다 → 약속을 어기면 바로 바구니에 넣는다. 나무 집게는 가시가 없는지 미리 살핀다.',
  }));

  lessons.push(L(31, {
    title: '빨래집게 하나로 할 수 있는 일 여러 가지 찾기',
    objective: '빨래집게 하나로 빨래 널기 말고도 할 수 있는 일을 찾아, 도구 하나가 여러 가지로 쓰일 수 있다는 것을 말할 수 있다.',
    illustration: ART('one paper clothes peg used in many ways around a classroom: holding a snack bag closed, pinning a drawing to a string, clipping a bookmark and holding cards together', '집게 하나, 쓰임 여럿', [
      { motif: 'star', x: 120, y: 84, s: 0.6 }, { motif: 'flower', x: 380, y: 228 }, { motif: 'tree', x: 110, y: 214 }]),
    safety: ['집게로 친구 손이나 귀를 집지 않아요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"빨래집게는 빨래 널 때만 쓸 수 있을까요?" 손을 들게 한 뒤, 과자 봉지 입구를 집게로 집어 보여 준다. 시연 단추로 \'과자 봉지 입구 닫기\'가 쓰임 바구니에 들어가는 모습을 보여 준다. "도구 하나도 생김새를 살리면 여러 가지 일을 할 수 있어요."',
        student: '집에서 집게를 빨래 말고 다른 데 쓴 걸 본 적이 있는지 떠올려 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'pick', basket: '집게로 할 수 있는 일', cards: ['과자 봉지 입구 닫기', '물 마시기'], shuffle: false }, sequence: [{ pick: ['과자 봉지 입구 닫기'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 집게로 해 보기 (실험)', minutes: 15, tool: 'mindmap',
            teacher: '"모둠 바구니에 있는 집게로 교실에서 세 가지 일을 해 보세요." 끈에 그림 걸기, 책장 표시하기, 카드 묶기를 해 보게 한다. 해 본 것만 판에 고르게 하고, 해 보지 않은 것은 \'아직\'이라고 말하게 한다. 집게로 할 수 없는 일(자르기, 담기)이 왜 안 되는지 생김새로 말하게 한다.',
            task: '집게로 교실에서 직접 해 보고, 할 수 있는 일과 없는 일을 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '집게로 끈에 그림 걸기·책장 표시하기·카드 묶기를 직접 해 보았으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '집게로 할 수 있는 일과 할 수 없는 일을 나누어 보세요.', toolOptions: { topic: '빨래집게로', slots: ['할 수 있어요', '할 수 없어요'], cards: ['끈에 그림 걸기', '읽던 책장 표시하기', '종이 자르기', '물 담기'] },
                target: { sort: { '할 수 있어요': ['끈에 그림 걸기', '읽던 책장 표시하기'], '할 수 없어요': ['종이 자르기', '물 담기'] } }, difficulty: 0.15,
                levels: { challenge: { prompt: '집게로 할 수 있는 일과 할 수 없는 일을 모두 나누어 보세요.', toolOptions: { cards: ['끈에 그림 걸기', '읽던 책장 표시하기', '카드 여러 장 묶기', '종이 자르기', '물 담기', '줄 반듯하게 긋기'] }, target: { sort: { '할 수 있어요': ['끈에 그림 걸기', '읽던 책장 표시하기', '카드 여러 장 묶기'], '할 수 없어요': ['종이 자르기', '물 담기', '줄 반듯하게 긋기'] } } } } },
              { prompt: '집게로 할 수 있는 일은 모두 어떤 생김새 덕분일까요? 알맞은 것을 골라 보세요.', toolOptions: { mode: 'pick', basket: '여러 일을 하게 하는 생김새', cards: ['꽉 무는 두 갈래 끝', '얇은 날', '오목한 그릇 모양'] },
                target: { pick: ['꽉 무는 두 갈래 끝'] }, difficulty: 0.2,
                conclude: '집게로 할 수 있는 일은 모두 꽉 무는 끝 덕분이에요. 생김새가 같아도 쓰는 곳은 여러 가지예요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 다른 도구의 여러 쓰임', minutes: 12, tool: 'mindmap',
            teacher: '"고무줄, 종이컵, 숟가락은 어떨까요?" 도구 하나씩 정해 원래 쓰임과 다른 쓰임을 찾게 한다. 위험한 쓰임(고무줄 튕기기, 숟가락으로 문 열기)은 고르지 않도록 \'안전한가요?\'를 함께 묻는다.',
            task: '다른 도구도 원래 쓰임 말고 안전하게 쓸 수 있는 곳을 찾아요.',
            levels: CARD_LV,
            items: [
              { prompt: '종이컵의 원래 쓰임과 다른 쓰임을 나누어 보세요.', toolOptions: { topic: '종이컵', slots: ['원래 쓰임', '다른 쓰임'], cards: ['물 마시기', '색연필 꽂아 두기', '씨앗 심어 싹 틔우기'] },
                target: { sort: { '원래 쓰임': ['물 마시기'], '다른 쓰임': ['색연필 꽂아 두기', '씨앗 심어 싹 틔우기'] } }, difficulty: 0.15 },
              { prompt: '고무줄을 안전하게 쓰는 일만 골라 보세요.', toolOptions: { mode: 'pick', basket: '안전한 쓰임', cards: ['머리 묶기', '연필 여러 자루 묶기', '친구에게 튕기기', '손가락에 세게 감기'] },
                target: { pick: ['머리 묶기', '연필 여러 자루 묶기'] }, difficulty: 0.15 },
              { prompt: '도구 하나와 그 도구의 다른 쓰임을 이어 보세요.', toolOptions: { mode: 'match', topic: '다른 쓰임', slots: [{ id: 's1', label: '빈 상자' }, { id: 's2', label: '숟가락' }], cards: ['작은 물건 정리함', '화분 흙 뜨기'] },
                target: { match: { s1: '작은 물건 정리함', s2: '화분 흙 뜨기' } }, difficulty: 0.2,
                hints: ['도구의 생김새(담을 수 있다, 오목하다)로 어떤 일을 할 수 있을지 떠올려요.', '상자는 안이 비어 물건을 담을 수 있고, 숟가락은 오목해서 뜰 수 있어요.', '빈 상자는 정리함, 숟가락은 흙 뜨기예요.'] },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"빨래집게는 빨래 널 때만 쓸까요?" 오늘 해 본 것을 들어 말하게 한다. 출구 2번을 고른 뒤 \'한 도구도 여러 일\'이라는 말을 칠판에 남긴다. 다음 시간에는 도구를 하는 일에 따라 모둠으로 나누어 본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', basket: '집게로 할 수 있는 일', cards: ['봉지 입구 닫기', '종이 여러 장 묶기', '종이 자르기', '물 담기'] }, prompt: '빨래집게로 할 수 있는 일만 골라 보세요.', target: { pick: ['봉지 입구 닫기', '종이 여러 장 묶기'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '도구 하나는 어떻게 쓸 수 있을까요?', options: ['한 가지 일에만 써요', '생김새를 살려 여러 가지 일에 써요'], answer: 1, difficulty: 0.15, explain: '빨래집게로 빨래도 널고, 그림도 걸고, 봉지도 닫아요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '집게 하나, 쓰임 여럿',
      items: [
        { type: 'table', prompt: '집게로 해 본 일을 쓰세요.', columns: ['해 본 일', '잘 되었나요?'], rows: 3 },
        { type: 'choice', prompt: '집게로 할 수 없는 일에 ○ 하세요.', options: ['종이 자르기', '그림 걸기'], answer: '종이 자르기' },
        { type: 'short', prompt: '종이컵을 다르게 쓰는 방법을 하나 쓰세요.' },
        { type: 'draw', prompt: '집게를 새롭게 쓰는 모습을 그리세요.' },
      ],
      easy: {
        note: '집게는 꽉 무는 일을 잘해요.',
        items: [
          { type: 'choice', prompt: '집게로 할 수 있는 일에 ○ 하세요.', options: ['그림 걸기', '물 담기'], answer: '그림 걸기' },
          { type: 'choice', prompt: '종이컵의 다른 쓰임에 ○ 하세요.', options: ['색연필 꽂아 두기', '종이 자르기'], answer: '색연필 꽂아 두기' },
          { type: 'draw', prompt: '집게로 그림을 건 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '집게로 세 가지 일을 직접 해 본 뒤 나누어요.',
      challenge: '여섯 장을 나누고, 할 수 없는 까닭을 생김새로 설명해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 도구는 한 가지 일에만 쓴다고 여긴다 → 집게로 직접 세 가지를 해 보게 한다. ② 위험한 쓰임까지 떠올린다 → \'안전한가요?\'를 늘 함께 묻는다. ③ 할 수 없는 까닭을 말하지 못한다 → 날이 없어서, 오목하지 않아서처럼 생김새로 말하게 한다.',
  }));

  lessons.push(L(32, {
    title: '하는 일에 따라 도구를 모둠으로 나누기',
    objective: '교실과 집의 도구를 자르는 도구·담는 도구·집는 도구처럼 하는 일에 따라 나눌 수 있다.',
    illustration: ART('three paper baskets labelled cut, hold and pick up, with scissors, a cup, a bowl, tongs and chopsticks being sorted into them by children', '하는 일로 나누기', [
      { motif: 'flower', x: 110, y: 228, color: 'peach' }, { motif: 'tree', x: 390, y: 214 }, { motif: 'star', x: 260, y: 80, s: 0.5 }]),
    safety: ['가위와 칼 그림 카드만 쓰고, 실제 칼은 쓰지 않아요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"가위와 칼은 생김새가 달라요. 그런데 같은 바구니에 넣는다면 어떤 바구니일까요?" 세 바구니 이름(자르는 도구, 담는 도구, 집는 도구)을 칠판에 붙인다. 시연 단추로 가위가 \'자르는 도구\'에 들어가는 모습을 보여 준다. 오늘은 생김새가 아니라 하는 일로 나눈다는 것을 분명히 한다.',
        student: '내 필통 속 도구는 어느 바구니에 들어갈지 떠올려 봐요.',
        demo: { tool: 'mindmap', options: { topic: '하는 일로 나누기', slots: ['자르는 도구', '담는 도구'], cards: ['가위', '컵'], shuffle: false }, sequence: [{ sort: { '자르는 도구': ['가위'], '담는 도구': ['컵'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 세 바구니로 나누기', minutes: 14, tool: 'mindmap',
            teacher: '"이 도구로 무엇을 하나요? 그 일이 적힌 바구니에 넣어요." 도구 이름을 듣고 하는 일을 먼저 말한 뒤 넣게 한다. 젓가락처럼 \'집기\'인지 \'먹기\'인지 헷갈리는 도구는 음식을 어떻게 다루는지 손짓으로 보여 준다. 모둠 바구니에 실제 도구(종이컵, 집게, 어린이 가위 날 닫힌 것)를 나누어 넣어 본다.',
            task: '도구 카드를 하는 일에 따라 세 바구니로 나누어요.',
            levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
            items: [
              { prompt: '도구를 하는 일에 따라 나누어 보세요.', toolOptions: { topic: '하는 일로 나누기', slots: ['자르는 도구', '담는 도구', '집는 도구'], cards: ['가위', '칼', '그릇', '바구니', '젓가락', '집게'] },
                target: { sort: { '자르는 도구': ['가위', '칼'], '담는 도구': ['그릇', '바구니'], '집는 도구': ['젓가락', '집게'] } }, difficulty: 0.2,
                levels: { easy: { prompt: '도구를 하는 일에 따라 두 바구니로 나누어 보세요.', toolOptions: { slots: ['자르는 도구', '담는 도구'], cards: ['가위', '칼', '그릇', '바구니'] }, target: { sort: { '자르는 도구': ['가위', '칼'], '담는 도구': ['그릇', '바구니'] } } } } },
              { prompt: '교실 도구를 하는 일에 따라 나누어 보세요.', toolOptions: { topic: '교실 도구', slots: ['붙이는 도구', '재는 도구', '그리는 도구'], cards: ['풀', '셀로판테이프', '자', '줄자', '연필', '크레파스'] },
                target: { sort: { '붙이는 도구': ['풀', '셀로판테이프'], '재는 도구': ['자', '줄자'], '그리는 도구': ['연필', '크레파스'] } }, difficulty: 0.25,
                levels: { easy: { prompt: '교실 도구를 하는 일에 따라 두 바구니로 나누어 보세요.', toolOptions: { slots: ['붙이는 도구', '그리는 도구'], cards: ['풀', '셀로판테이프', '연필', '크레파스'] }, target: { sort: { '붙이는 도구': ['풀', '셀로판테이프'], '그리는 도구': ['연필', '크레파스'] } } } } },
              { prompt: '모둠 바구니의 실제 도구를 하는 일에 따라 세 무더기로 나누어 놓았으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 같은 바구니 도구 견주기', minutes: 13, tool: 'mindmap',
            teacher: '"같은 바구니에 든 가위와 칼은 생김새도 비슷할까요?" 같은 일을 하는 도구는 그 일을 하는 부분(날, 오목한 곳, 두 갈래)이 닮았다는 것을 찾게 한다. 하는 일과 그 일을 돕는 생김새를 짝 짓는다.',
            task: '같은 일을 하는 도구들이 어떤 생김새를 함께 가지고 있는지 찾아요.',
            levels: CARD_LV,
            items: [
              { prompt: '도구 모둠과 함께 가진 생김새를 이어 보세요.', toolOptions: { mode: 'match', topic: '함께 가진 생김새', hint1: WHY_HINT, slots: [{ id: 's1', label: '자르는 도구' }, { id: 's2', label: '담는 도구' }, { id: 's3', label: '집는 도구' }], cards: ['얇고 날카로운 날', '안이 오목하게 비어 있어요', '두 갈래 끝이 모여요'] },
                target: { match: { s1: '얇고 날카로운 날', s2: '안이 오목하게 비어 있어요', s3: '두 갈래 끝이 모여요' } }, difficulty: 0.25,
                levels: { challenge: { toolOptions: { cards: ['얇고 날카로운 날', '안이 오목하게 비어 있어요', '두 갈래 끝이 모여요', '빨간 손잡이'] } } } },
              { prompt: '담는 도구가 함께 가진 생김새만 골라 보세요.', toolOptions: { mode: 'pick', basket: '담는 도구의 생김새', cards: ['바닥이 막혀 있어요', '안이 비어 있어요', '끝이 뾰족해요', '날이 있어요'] },
                target: { pick: ['바닥이 막혀 있어요', '안이 비어 있어요'] }, difficulty: 0.2 },
              { prompt: '처음 보는 도구도 생김새로 바구니를 짐작해 이어 보세요.', toolOptions: { mode: 'match', topic: '어느 바구니일까?', slots: [{ id: 's1', label: '끝이 두 갈래로 모이는 핀셋' }, { id: 's2', label: '안이 오목한 바가지' }], cards: ['집는 도구', '담는 도구'] },
                target: { match: { s1: '집는 도구', s2: '담는 도구' } }, difficulty: 0.15,
                conclude: '같은 일을 하는 도구는 그 일을 돕는 생김새가 닮았어요.' },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"생김새로 나눌 때와 하는 일로 나눌 때는 무엇이 다를까요?" 두세 명이 말하게 한다. 같은 일을 하는 도구는 그 일을 돕는 부분이 닮았다는 것을 짚는다. 다음 시간에는 도구 모양을 내가 직접 바꾸어 그려 본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '하는 일로 나누기', slots: ['자르는 도구', '담는 도구', '집는 도구'], cards: ['톱', '냄비', '핀셋'] }, prompt: '도구를 하는 일에 따라 나누어 보세요.', target: { sort: { '자르는 도구': ['톱'], '담는 도구': ['냄비'], '집는 도구': ['핀셋'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '젓가락과 같은 바구니에 들어갈 도구는?', options: ['집게', '그릇', '가위'], answer: 0, difficulty: 0.15, explain: '젓가락과 집게는 모두 집는 도구예요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '하는 일로 나누기',
      items: [
        { type: 'table', prompt: '도구를 하는 일에 따라 나누어 쓰세요.', columns: ['자르는 도구', '담는 도구', '집는 도구'], rows: 2 },
        { type: 'choice', prompt: '담는 도구에 ○ 하세요.', options: ['바구니', '가위'], answer: '바구니' },
        { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '자르는 도구에는 얇고 날카로운 ___이 있어요.', answer: '날' },
        { type: 'draw', prompt: '집는 도구를 하나 그리세요.' },
      ],
      easy: {
        note: '"이 도구로 무엇을 하나요?" 먼저 물어요.',
        items: [
          { type: 'choice', prompt: '자르는 도구에 ○ 하세요.', options: ['가위', '컵'], answer: '가위' },
          { type: 'choice', prompt: '집는 도구에 ○ 하세요.', options: ['젓가락', '그릇'], answer: '젓가락' },
          { type: 'draw', prompt: '담는 도구를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '바구니가 두 개이고, 맞는 칸에 초록 테두리가 생겨요.',
      base: '세 바구니로 나눈 뒤 확인을 눌러요. 실제 도구도 나누어 놓아요.',
      challenge: '함정 생김새 카드를 골라내고, 처음 보는 도구를 생김새로 짐작해 나누어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 생김새(색, 크기)로 나눈다 → "이걸로 무엇을 해요?"를 먼저 묻는다. ② 젓가락을 \'먹는 도구\'로만 본다 → 음식을 집어 올리는 손짓을 보여 준다. ③ 칼을 직접 가져오려 한다 → 칼은 그림 카드로만 다룬다.',
  }));

  // ───────────────────────── 33~36차시: 모양을 바꾸어 더 편하게 ─────────────────────────
  var COL_LV = {
    easy: { shapes: ['rect', 'circle', 'semi', 'triangle'], colors: ['파랑', '빨강', '노랑', '초록'] },
    base: { shapes: ['rect', 'circle', 'semi', 'triangle', 'square', 'star'] },
    challenge: {},
  };

  lessons.push(L(33, {
    title: '누군가를 위해 모양을 바꾼 도구 꾸며 보기',
    objective: '불편을 겪는 사람을 정하고, 그 사람에게 맞게 도구의 모양을 바꾸어 조각으로 꾸밀 수 있다.',
    illustration: ART('a child arranging paper shapes into a new cup with two handles on a board, a grandmother figure smiling beside it, scraps of colored paper around', '모양을 바꾸어요', [
      { motif: 'flower', x: 110, y: 228, color: 'peach' }, { motif: 'star', x: 390, y: 84, s: 0.6 }, { motif: 'tree', x: 400, y: 214 }]),
    safety: ['가위는 날을 닫아 건네고, 다 쓰면 통에 꽂아요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"할머니가 손이 떨려 컵을 자꾸 놓치세요. 컵 모양을 어떻게 바꾸면 좋을까요?" 학생 생각을 두세 개 듣는다. 시연 단추로 파랑 컵 몸통 양옆에 반원 손잡이 두 개가 붙는 모습을 보여 준다. "27차시에 본 것처럼, 쓰는 사람에 맞게 우리도 모양을 바꿀 수 있어요."',
        student: '집에서 누가 어떤 도구를 쓸 때 불편해 보였는지 떠올려 봐요.',
        demo: { tool: 'collage', options: { readOnly: true }, sequence: [{ has: [{ shape: 'semi', min: 2 }] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 누구의 불편을 덜어 줄까', minutes: 10, tool: 'mindmap',
            teacher: '"누가, 어떤 도구를 쓸 때, 무엇이 불편할까요?" 세 칸 말 틀을 칠판에 적는다. 불편과 바꾼 모양을 짝 지은 뒤, 내가 바꾸어 줄 사람과 도구를 하나 정하게 한다. 친구 이름 대신 \'~한 사람\'으로 정한다.',
            task: '불편과 그 불편을 덜어 주는 바꾼 모양을 잇고, 내가 바꿀 도구를 정해요.',
            levels: CARD_LV,
            items: [
              { prompt: '불편과 그 불편을 덜어 주는 바꾼 모양을 이어 보세요.', toolOptions: { mode: 'match', topic: '모양을 바꾸면', hint1: WHY_HINT, slots: [{ id: 's1', label: '손이 떨려 컵을 놓쳐요' }, { id: 's2', label: '키가 작아 세면대에 손이 안 닿아요' }], cards: ['손잡이가 양쪽에 있는 컵', '밟고 올라서는 낮은 받침대'] },
                target: { match: { s1: '손잡이가 양쪽에 있는 컵', s2: '밟고 올라서는 낮은 받침대' } }, difficulty: 0.15 },
              { prompt: '세 가지 불편과 바꾼 모양을 이어 보세요.', toolOptions: { mode: 'match', topic: '모양을 바꾸면', hint1: WHY_HINT, slots: [{ id: 's1', label: '어두우면 스위치를 못 찾아요' }, { id: 's2', label: '우산을 들면 두 손을 못 써요' }, { id: 's3', label: '가방이 무거워 어깨가 아파요' }], cards: ['빛이 나는 스위치', '모자처럼 쓰는 우산', '바퀴가 달린 가방'] },
                target: { match: { s1: '빛이 나는 스위치', s2: '모자처럼 쓰는 우산', s3: '바퀴가 달린 가방' } }, difficulty: 0.25,
                levels: { challenge: { toolOptions: { cards: ['빛이 나는 스위치', '모자처럼 쓰는 우산', '바퀴가 달린 가방', '더 무거운 가방'] } } } },
              { prompt: '내가 모양을 바꾸어 줄 사람과 도구를 활동지에 썼으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 바꾼 도구 조각으로 꾸미기', minutes: 17, tool: 'collage',
            teacher: '"바꾼 곳이 잘 보이게 꾸며요." 판에서 먼저 조각을 놓아 보고, 그다음 색종이로 오려 붙이게 한다. 바꾼 곳에는 다른 색을 쓰게 해 한눈에 보이게 한다. "바꾼 곳이 어디예요?" 하고 물어 손가락으로 짚게 한 뒤 점검표를 누르게 한다.',
            task: '판에서 바꾼 도구를 조각으로 꾸민 뒤, 색종이로 오려 붙여요.',
            levels: COL_LV,
            items: [
              { prompt: '파랑 컵 몸통 양옆에 빨강 반원 손잡이 두 개를 붙여 두 손 컵을 만들어 보세요.', state: { pieces: [{ shape: 'rect', color: '파랑', size: 'l', x: 280, y: 220, r: 90 }] }, target: { has: [{ shape: 'semi', color: '빨강', n: 2 }] }, difficulty: 0.1 },
              { prompt: '노랑 가방 아래에 바퀴(동그라미)를 두 개 이상 붙여 바퀴 가방을 만들어 보세요.', state: { pieces: [{ shape: 'rect', color: '노랑', size: 'l', x: 280, y: 180, r: 0 }] }, target: { has: [{ shape: 'circle', min: 2 }] }, difficulty: 0.1,
                levels: { challenge: { prompt: '노랑 가방 아래에 초록 바퀴 동그라미를 꼭 네 개 붙여 보세요.', target: { has: [{ shape: 'circle', color: '초록', n: 4 }] } } } },
              { prompt: '내가 정한 사람을 위해 바꾼 도구를 꾸미고 점검해 보세요.', target: { selfCheck: ['바꾼 곳이 다른 색으로 잘 보여요', '누구를 위한 도구인지 말할 수 있어요', '남은 색종이를 상자에 넣었어요'], minPieces: 3 }, difficulty: 0.1 },
              { prompt: '색종이로 바꾼 도구를 오려 붙였으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"짝에게 내 도구를 보여 주고, 누구를 위해 어디를 바꿨는지 말해 보세요." 짝은 바꾼 곳을 손가락으로 짚어 준다. 다음 시간에는 우리가 쓰는 도구 가운데 불편한 곳을 찾아 고칠 방법을 생각한다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '모양을 바꾸면', slots: [{ id: 'e1', label: '손 힘이 약해 숟가락을 놓쳐요' }, { id: 'e2', label: '글씨가 작아 시계가 안 보여요' }], cards: ['손잡이가 굵은 숟가락', '숫자가 큰 시계'] }, prompt: '불편과 바꾼 모양을 이어 보세요.', target: { match: { e1: '손잡이가 굵은 숟가락', e2: '숫자가 큰 시계' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '도구 모양을 바꿀 때 먼저 생각할 것은?', options: ['누가 어떤 점이 불편한지', '가장 비싼 재료'], answer: 0, difficulty: 0.1, explain: '쓰는 사람의 불편을 알아야 알맞게 바꿀 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '모양을 바꾼 도구',
      items: [
        { type: 'table', prompt: '내가 바꿀 도구를 정해 쓰세요.', columns: ['누가', '어떤 도구', '무엇이 불편', '어떻게 바꿀까'], rows: 1 },
        { type: 'draw', prompt: '바꾼 도구를 그리고 바꾼 곳에 ○ 하세요.' },
        { type: 'choice', prompt: '무거운 가방에 맞는 바꾼 모양에 ○ 하세요.', options: ['바퀴가 달린 가방', '더 무거운 가방'], answer: '바퀴가 달린 가방' },
        { type: 'short', prompt: '바꾼 도구를 쓰면 무엇이 좋아질지 쓰세요.' },
      ],
      easy: {
        note: '"누가 무엇이 불편할까?" 먼저 말해요.',
        items: [
          { type: 'choice', prompt: '손이 떨리는 할머니께 맞는 컵에 ○ 하세요.', options: ['손잡이가 양쪽에 있는 컵', '손잡이가 없는 컵'], answer: '손잡이가 양쪽에 있는 컵' },
          { type: 'short', prompt: '모양을 바꿔 줄 사람을 쓰세요.' },
          { type: 'draw', prompt: '바꾼 도구를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '조각 모양과 색이 네 가지씩만 있어요. 바꾼 곳 하나만 꾸며요.',
      base: '조각 여섯 가지로 꾸미고 점검표를 모두 확인해요.',
      challenge: '모든 조각과 색을 쓰고, 바퀴 수까지 정확히 맞춰 꾸며요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 바꾼 까닭 없이 꾸미기만 한다 → "누구를 위한 거예요?"를 묻는다. ② 친구를 불편한 사람으로 정한다 → \'~한 사람\'으로 바꾸어 말하게 한다. ③ 꾸미는 데 시간을 다 쓴다 → 바꾼 곳 하나를 먼저 붙이고 꾸밈은 나중에 하게 한다. 가위질은 앉아서 한다.',
  }));

  lessons.push(L(34, {
    title: '우리가 쓰는 도구의 불편한 곳 찾아 고칠 방법 정하기',
    objective: '내가 쓰는 도구에서 불편한 곳을 찾고, 불편 → 까닭 → 고칠 모양의 차례로 고칠 방법을 정할 수 있다.',
    illustration: ART('a child looking puzzled at a pair of scissors held in the left hand, a thought bubble showing the same scissors with reversed blades, a toolbox of paper tools nearby', '불편한 곳 고치기', [
      { motif: 'flower', x: 110, y: 228 }, { motif: 'tree', x: 390, y: 214 }, { motif: 'cloud', x: 120, y: 70, s: 0.5 }]),
    safety: ['가위는 날을 닫은 채로 살펴봐요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"오른손 가위를 왼손으로 잡고 종이를 잘라 볼까요?" 지원자 한 명이 해 보고(날을 다루는 동안 교사가 곁에서 본다) 어땠는지 말한다. "잘리는 선이 날에 가려 안 보여요"라는 말을 이끈다. 시연 단추로 \'불편 찾기 → 까닭 찾기 → 고칠 모양 정하기\' 차례를 보여 준다.',
        student: '내 도구 가운데 쓸 때 불편했던 것을 하나 떠올려 봐요.',
        demo: { tool: 'story', options: { mode: 'order', cards: ['불편한 곳을 찾아요', '왜 불편한지 까닭을 찾아요', '고칠 모양을 정해요'], shuffle: false }, sequence: [{ order: ['불편한 곳을 찾아요', '왜 불편한지 까닭을 찾아요', '고칠 모양을 정해요'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 불편한 곳과 까닭 찾기', minutes: 14, tool: 'mindmap',
            teacher: '"불편한 곳만 말하지 말고 \'왜\' 불편한지도 찾아요." 필통 도구를 하나씩 써 보며 불편한 곳을 찾게 한다. 불편의 까닭이 도구의 생김새에 있다는 것을 짚는다(뚜껑이 작아서, 날이 오른쪽에 있어서). 찾은 것을 붙임쪽지에 써서 모둠 판에 모은다.',
            task: '도구를 직접 써 보며 불편한 곳을 찾고, 그 까닭을 생김새에서 찾아요.',
            levels: CARD_LV,
            items: [
              { prompt: '필통 도구를 직접 써 보고 불편한 곳을 붙임쪽지에 하나 써서 모둠 판에 붙였으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '불편한 곳과 그 까닭을 이어 보세요.', toolOptions: { mode: 'match', topic: '왜 불편할까?', hint1: WHY_HINT, slots: [{ id: 's1', label: '왼손으로 가위질하면 선이 안 보여요' }, { id: 's2', label: '풀 뚜껑을 자꾸 잃어버려요' }], cards: ['날이 오른손에 맞게 붙어 있어서', '뚜껑이 작고 풀과 떨어져 있어서'] },
                target: { match: { s1: '날이 오른손에 맞게 붙어 있어서', s2: '뚜껑이 작고 풀과 떨어져 있어서' } }, difficulty: 0.2 },
              { prompt: '불편의 까닭이 도구의 생김새에 있는 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '생김새 때문에 불편해요', cards: ['자가 짧아서 긴 줄을 한 번에 못 그어요', '물통 입구가 좁아서 씻기 어려워요', '내가 늦잠을 자서 바빠요', '친구가 빌려 가서 없어요'] },
                target: { pick: ['자가 짧아서 긴 줄을 한 번에 못 그어요', '물통 입구가 좁아서 씻기 어려워요'] }, difficulty: 0.25 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 고칠 방법 차례대로 정하기', minutes: 13, tool: 'story',
            teacher: '"불편 → 까닭 → 고칠 모양 차례로 정하면 좋은 생각이 나와요." 모둠마다 하나를 골라 차례 카드를 놓게 한다. 고칠 모양을 정한 뒤에는 \'그 모양이면 누가 편해질까?\'를 꼭 묻는다.',
            task: '불편한 도구를 고칠 방법을 차례대로 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '풀 뚜껑 고치기를 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['풀 뚜껑을 자꾸 잃어버려요', '뚜껑이 풀과 떨어져 있어서예요', '뚜껑을 끈으로 풀에 이어요'] },
                target: { order: ['풀 뚜껑을 자꾸 잃어버려요', '뚜껑이 풀과 떨어져 있어서예요', '뚜껑을 끈으로 풀에 이어요'] }, difficulty: 0.15,
                hints: ['먼저 무엇이 불편한지, 그다음 왜 불편한지, 마지막에 어떻게 고칠지를 놓아요.', '\'~해서예요\'는 까닭이니 가운데예요.', '잃어버려요 → 떨어져 있어서예요 → 끈으로 이어요 차례예요.'] },
              { prompt: '물통 고치기를 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['물통 속을 씻기 어려워요', '입구가 좁아 손이 안 들어가서예요', '입구를 넓게 바꾸어요', '손을 넣어 쉽게 씻어요'] },
                target: { order: ['물통 속을 씻기 어려워요', '입구가 좁아 손이 안 들어가서예요', '입구를 넓게 바꾸어요', '손을 넣어 쉽게 씻어요'] }, difficulty: 0.2,
                hints: ['먼저 무엇이 불편한지, 그다음 왜 불편한지, 마지막에 어떻게 고칠지를 놓아요.', '고친 다음 좋아진 점이 맨 끝이에요.', '씻기 어려움 → 입구가 좁아서 → 넓게 바꿈 → 쉽게 씻음 차례예요.'] },
              { prompt: '고친 모양이 알맞은 것만 골라 보세요. 짧은 자로 긴 줄을 긋기 어려워요.', toolOptions: { mode: 'pick', basket: '알맞게 고친 모양', cards: ['접었다 펴는 긴 자', '두 자를 이어 붙이는 홈'] },
                target: { pick: ['접었다 펴는 긴 자', '두 자를 이어 붙이는 홈'] }, difficulty: 0.2,
                levels: { challenge: { prompt: '고친 모양이 알맞은 것만 골라 보세요. 짧은 자로 긴 줄을 긋기 어려워요. 함정도 있어요.', toolOptions: { cards: ['접었다 펴는 긴 자', '두 자를 이어 붙이는 홈', '더 짧은 자', '눈금을 지운 자'] } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"우리 모둠이 고친 도구는 누구를 편하게 해 주나요?" 모둠마다 한 문장으로 말한다. 고친 생각은 다음 시간에 설명 문장으로 만든다고 예고한다. 왼손잡이 가위처럼 실제로 이미 있는 것도 있다는 것을 알려 준다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { mode: 'order', cards: ['신발 끈이 자꾸 풀려요', '끈이 미끄러워서예요', '찍찍이로 바꾸어요'] }, prompt: '신발 고치기를 차례대로 놓아 보세요.', target: { order: ['신발 끈이 자꾸 풀려요', '끈이 미끄러워서예요', '찍찍이로 바꾸어요'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '도구를 고칠 때 \'불편한 곳 찾기\' 다음에 할 일은?', options: ['왜 불편한지 까닭 찾기', '바로 새로 사기'], answer: 0, difficulty: 0.15, explain: '까닭을 알아야 어디를 고칠지 알 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '불편한 곳 고치기',
      items: [
        { type: 'table', prompt: '내가 찾은 불편을 차례대로 쓰세요.', columns: ['불편한 곳', '까닭', '고칠 모양'], rows: 1 },
        { type: 'choice', prompt: '생김새 때문에 불편한 것에 ○ 하세요.', options: ['물통 입구가 좁아 씻기 어려워요', '친구가 빌려 가서 없어요'], answer: '물통 입구가 좁아 씻기 어려워요' },
        { type: 'draw', prompt: '고친 도구를 그리세요.' },
        { type: 'short', prompt: '고친 도구를 쓰면 누가 편해질지 쓰세요.' },
      ],
      easy: {
        note: '불편 → 까닭 → 고칠 모양 차례로 생각해요.',
        items: [
          { type: 'choice', prompt: '풀 뚜껑을 잃어버리지 않게 고친 모양에 ○ 하세요.', options: ['끈으로 풀에 이은 뚜껑', '더 작은 뚜껑'], answer: '끈으로 풀에 이은 뚜껑' },
          { type: 'short', prompt: '불편했던 도구 이름을 쓰세요.' },
          { type: 'draw', prompt: '고친 도구를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 놓을 때마다 맞는지 바로 보여요.',
      base: '모두 놓은 뒤 확인을 눌러요. 모둠 판에 불편을 모아요.',
      challenge: '함정 고침 카드를 골라내고, 고친 모양으로 누가 편해지는지 설명해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 불편의 까닭을 사람 탓(늦잠, 친구)으로 찾는다 → 도구의 생김새에서 찾게 한다. ② 고칠 방법을 \'새로 사요\'로만 말한다 → 모양을 어떻게 바꿀지 묻는다. ③ 왼손잡이 친구를 지목한다 → 왼손 가위 경험은 원하는 학생만 말하게 한다.',
  }));

  lessons.push(L(35, {
    title: '바꾼 도구를 설명하는 문장 완성하기',
    objective: '바꾼 도구를 "누가, 무엇이 불편해서, 어떻게 바꾸었고, 무엇이 좋아졌는지" 차례로 설명하는 문장을 완성할 수 있다.',
    illustration: ART('a child holding up a paper drawing of a cup with two handles and speaking to classmates, a speech bubble with four short lines', '바꾼 도구 설명하기', [
      { motif: 'star', x: 120, y: 84, s: 0.6 }, { motif: 'flower', x: 380, y: 228 }, { motif: 'tree', x: 110, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"\'이건 컵이에요\'라고만 말하면 친구들이 바꾼 곳을 알까요?" 33·34차시 작품을 들어 보인다. 설명에는 누가·불편·바꾼 곳·좋아진 점 네 가지가 들어가야 한다는 것을 칠판 말 틀로 보여 준다. 시연 단추로 첫 빈칸이 채워지는 모습을 보여 준다.',
        student: '내가 바꾼 도구를 짝에게 한 문장으로 말해 봐요.',
        demo: { tool: 'story', options: { mode: 'fill', slots: [{ id: 'f1', who: '나', motif: 'star', label: '이 컵은 ___을 위한 컵이에요.' }], cards: ['손이 떨리는 할머니', '달리기 선수'], shuffle: false }, sequence: [{ fill: { f1: '손이 떨리는 할머니' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 설명 문장 빈칸 채우기', minutes: 14, tool: 'story',
            teacher: '"빈칸 앞뒤 말을 잘 읽으면 무엇이 들어갈지 알 수 있어요." \'~을 위한\' 앞에는 사람, \'~해서\' 앞에는 불편, \'~을 붙였어요\' 앞에는 바꾼 곳이 들어간다는 것을 짚는다. 다 채운 뒤에는 소리 내어 읽게 한다.',
            task: '바꾼 도구 설명 문장의 빈칸에 알맞은 낱말 카드를 넣어요.',
            levels: CARD_LV,
            items: [
              { prompt: '두 손 컵 설명을 완성해 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'f1', who: '나', label: '이 컵은 ___을 위한 컵이에요.' }, { id: 'f2', who: '나', label: '양쪽에 ___를 붙였어요.' }], cards: ['손이 떨리는 할머니', '손잡이', '바퀴'] },
                target: { fill: { f1: '손이 떨리는 할머니', f2: '손잡이' } }, difficulty: 0.15,
                hints: ['첫 문장에는 누구를 위한 컵인지, 둘째 문장에는 바꾼 곳이 들어가요.', '컵에 바퀴를 붙이면 손에 쥐기 쉬울까요? 손으로 잡는 곳을 찾아요.', '손이 떨리는 할머니 → 손잡이 차례예요.'] },
              { prompt: '바퀴 가방 설명을 완성해 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'f1', who: '나', label: '가방이 ___ 어깨가 아파요.' }, { id: 'f2', who: '나', label: '그래서 아래에 ___를 달았어요.' }, { id: 'f3', who: '나', label: '이제 ___ 다닐 수 있어요.' }], cards: ['무거워서', '바퀴', '끌고', '가벼워서'] },
                target: { fill: { f1: '무거워서', f2: '바퀴', f3: '끌고' } }, difficulty: 0.25,
                hints: ['\'어깨가 아파요\' 앞에는 왜 아픈지가 들어가요.', '\'아래에 ~를 달았어요\'에는 바꾼 곳이 들어가요.', '무거워서 → 바퀴 → 끌고 차례예요.'] },
              { prompt: '모자 우산 설명을 완성해 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'f1', who: '나', label: '우산을 들면 ___ 못 써요.' }, { id: 'f2', who: '나', label: '그래서 머리에 ___ 우산으로 바꾸었어요.' }], cards: ['두 손을', '쓰는', '두 발을'] },
                target: { fill: { f1: '두 손을', f2: '쓰는' } }, difficulty: 0.2,
                hints: ['우산을 손에 들면 무엇이 불편한지, 그래서 우산을 어디에 두는지 생각해요.', '우산은 손으로 들어요. 발과는 상관이 있을까요? 머리에 모자처럼 하는 말을 찾아요.', '두 손을 → 쓰는 차례예요.'],
                levels: { challenge: { toolOptions: { cards: ['두 손을', '쓰는', '두 발을', '버리는'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 내 설명 차례 세우기', minutes: 13, tool: 'story',
            teacher: '"설명 순서가 뒤죽박죽이면 듣는 친구가 헷갈려요." 누가 → 불편 → 바꾼 곳 → 좋아진 점 차례로 놓게 한다. 마지막에 내 작품 설명을 활동지에 네 줄로 쓰고 짝에게 읽어 준다.',
            task: '설명 문장을 알맞은 차례로 놓고, 내 바꾼 도구 설명을 써요.',
            levels: CARD_LV,
            items: [
              { prompt: '빛나는 스위치 설명을 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['밤에 화장실 가는 동생을 위한 스위치예요', '어두우면 스위치를 못 찾아요', '스위치에 빛이 나게 바꾸었어요', '이제 어두워도 바로 켜요'] },
                target: { order: ['밤에 화장실 가는 동생을 위한 스위치예요', '어두우면 스위치를 못 찾아요', '스위치에 빛이 나게 바꾸었어요', '이제 어두워도 바로 켜요'] }, difficulty: 0.2,
                hints: ['누구를 위한 것인지 먼저 말해요.', '불편 다음에 바꾼 곳, 마지막에 좋아진 점이에요.', '동생을 위해 → 못 찾아요 → 빛이 나게 → 바로 켜요 차례예요.'] },
              { prompt: '설명에 꼭 들어갈 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '설명에 들어갈 것', cards: ['누구를 위한 것인지', '바꾼 곳', '좋아진 점', '도구 값'] },
                target: { pick: ['누구를 위한 것인지', '바꾼 곳', '좋아진 점'] }, difficulty: 0.15 },
              { prompt: '내 바꾼 도구 설명을 활동지에 네 줄로 쓰고 짝에게 읽어 주었으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"짝의 설명에 네 가지가 다 들어 있었나요?" 짝이 손가락 네 개로 확인해 준다. 빠진 것이 있으면 하나만 덧붙여 쓰게 한다. 다음 시간에는 실제로 모양을 바꾸어 만든 발명품 이야기를 듣는다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { mode: 'fill', slots: [{ id: 'e1', label: '숫자가 ___ 시계는 잘 안 보이는 사람을 도와요.' }], cards: ['큰', '작은'] }, prompt: '빈칸을 채워 보세요.', target: { fill: { e1: '큰' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '바꾼 도구를 설명할 때 맨 먼저 말하면 좋은 것은?', options: ['누구를 위한 것인지', '좋아진 점'], answer: 0, difficulty: 0.2, explain: '누구의 불편을 덜어 주는지 먼저 알려야 듣는 사람이 이해해요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '바꾼 도구 설명하기',
      items: [
        { type: 'blank', prompt: '내 도구 설명을 완성하세요.', text: '이 ______은 ______을 위한 것이에요. ______이 불편해서 ______을 바꾸었어요.', answer: '예: 이 컵은 할머니를 위한 것이에요. 놓치는 것이 불편해서 손잡이를 바꾸었어요.' },
        { type: 'short', prompt: '바꾼 도구를 쓰면 좋아지는 점을 쓰세요.' },
        { type: 'choice', prompt: '설명에 꼭 넣지 않아도 되는 것에 ○ 하세요.', options: ['도구 값', '바꾼 곳'], answer: '도구 값' },
        { type: 'draw', prompt: '내 바꾼 도구를 그리세요.' },
      ],
      easy: {
        note: '누가 → 불편 → 바꾼 곳 → 좋아진 점',
        items: [
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '가방이 무거워서 아래에 ___를 달았어요.', answer: '바퀴' },
          { type: 'short', prompt: '내 도구는 누구를 위한 것인지 쓰세요.' },
          { type: 'draw', prompt: '내 도구를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 넣을 때마다 맞는지 바로 보여요.',
      base: '모두 채운 뒤 확인을 눌러요. 내 설명을 네 줄로 써요.',
      challenge: '함정 낱말을 골라내고, 짝의 설명에 빠진 것을 찾아 알려 줘요.',
    },
    teacherNotes: '자주 보이는 어려움: ① \'이건 컵이에요\'로 끝낸다 → 손가락 네 개 점검을 쓴다. ② 불편과 좋아진 점을 같은 말로 쓴다 → 바꾸기 전과 후를 나누어 말하게 한다. ③ 쓰기가 느리다 → 말로 먼저 하고 낱말 카드를 보고 옮겨 쓰게 한다.',
  }));

  lessons.push(L(36, {
    title: '모양을 바꾼 발명 이야기 듣고 내 생각의 쓸모 알기',
    objective: '모양을 바꾸어 생긴 물건 이야기를 듣고, 지금 만들 수 없는 생각도 기록해 둘 쓸모가 있다고 말할 수 있다.',
    illustration: ART('a child storyteller showing paper drawings: a pencil with an eraser on its end, a bendy straw and a notebook of idea sketches, classmates listening', '생각에도 쓸모가 있어요', [
      { motif: 'star', x: 120, y: 84, s: 0.6 }, { motif: 'tree', x: 390, y: 214 }, { motif: 'flower', x: 110, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"연필 끝에 지우개가 붙은 연필, 언제부터 있었을까요?" 지우개 달린 연필을 들어 보인다. "옛날에는 연필과 지우개가 따로였어요. 지우개를 자꾸 잃어버리던 누군가가 \'둘을 붙이면 어떨까?\' 하고 생각했대요." 시연 단추로 불편과 바꾼 모양을 잇는 모습을 보여 준다. 이야기는 선생님이 쉽게 줄여 들려준다고 말한다.',
        student: '지우개 달린 연필을 써 본 적이 있는지 떠올려 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '지우개 달린 연필', slots: [{ id: 's1', label: '지우개를 자꾸 잃어버려요' }], cards: ['연필 끝에 지우개를 붙여요', '지우개를 버려요'], shuffle: false }, sequence: [{ match: { s1: '연필 끝에 지우개를 붙여요' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 불편에서 생긴 물건', minutes: 12, tool: 'mindmap',
            teacher: '"이 물건은 어떤 불편 때문에 생겼을까요?" 지우개 달린 연필, 구부러지는 빨대, 바퀴 달린 가방 그림을 차례로 보여 준다. 불편이 먼저 있고 생각이 그다음, 물건은 맨 나중이라는 것을 짚는다.',
            task: '모양을 바꾸어 생긴 물건과 그 물건이 생긴 불편을 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '물건과 그 물건이 생긴 불편을 이어 보세요.', toolOptions: { mode: 'match', topic: '불편에서 생긴 물건', hint1: WHY_HINT, slots: [{ id: 's1', label: '지우개 달린 연필' }, { id: 's2', label: '구부러지는 빨대' }], cards: ['지우개를 자꾸 잃어버려요', '누워서 물 마시기 어려워요'] },
                target: { match: { s1: '지우개를 자꾸 잃어버려요', s2: '누워서 물 마시기 어려워요' } }, difficulty: 0.15 },
              { prompt: '세 물건과 그 물건이 생긴 불편을 이어 보세요.', toolOptions: { mode: 'match', topic: '불편에서 생긴 물건', hint1: WHY_HINT, slots: [{ id: 's1', label: '바퀴 달린 가방' }, { id: 's2', label: '뚜껑 달린 물병' }, { id: 's3', label: '찍찍이 신발' }], cards: ['무거운 짐에 어깨가 아파요', '가방 속에서 물이 쏟아져요', '끈 묶기가 어려워요'] },
                target: { match: { s1: '무거운 짐에 어깨가 아파요', s2: '가방 속에서 물이 쏟아져요', s3: '끈 묶기가 어려워요' } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['무거운 짐에 어깨가 아파요', '가방 속에서 물이 쏟아져요', '끈 묶기가 어려워요', '색이 마음에 안 들어요'] } } } },
              { prompt: '물건이 생기기까지 차례대로 맞는 말만 골라 보세요.', toolOptions: { mode: 'pick', basket: '물건이 생기는 길', cards: ['불편을 느꼈어요', '고칠 생각을 했어요', '생각을 그려 두었어요', '불편해도 그냥 참았어요'] },
                target: { pick: ['불편을 느꼈어요', '고칠 생각을 했어요', '생각을 그려 두었어요'] }, difficulty: 0.2 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 지금 못 만드는 생각은 소용없을까', minutes: 14, tool: 'emotion',
            teacher: '"하늘을 나는 가방을 생각했어요. 지금 만들 수 없으니 버려야 할까요?" 학생 생각을 듣고, 비행기도 처음에는 그림과 생각으로만 있었다는 것을 들려준다. 생각을 공책에 그려 두면 나중에 다른 사람과 함께 만들 수도 있다는 것을 짚는다. 상황마다 어떻게 할지 고르게 한다.',
            task: '지금 만들 수 없는 생각을 어떻게 할지 고르고, 내 생각 공책에 하나 그려 둬요.',
            levels: MOOD_LV,
            items: [
              { prompt: '서준이가 하늘을 나는 가방을 생각했어요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '서준', situation: '서준이는 무거운 가방이 저절로 날아오면 좋겠다고 생각했어요. 하지만 지금은 만들 수 없어요.', choices: [
                { id: 'drop', text: '만들 수 없으니 잊어버려요', result: '좋은 생각이 사라져요.', mood: '속상함', why: '비행기도 처음에는 생각과 그림으로만 있었어요.' },
                { id: 'note', text: '생각 공책에 그려 두어요', result: '나중에 다시 보고 더 좋은 생각을 보탤 수 있어요.', mood: '뿌듯함' }] }, target: { choice: 'note' }, difficulty: 0.1 },
              { prompt: '친구가 내 생각을 듣고 "그건 못 만들어" 했어요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '하윤', situation: '하윤이가 비 오면 저절로 펴지는 우산을 말했더니, 친구가 "그건 못 만들어" 하고 웃었어요.', choices: [
                { id: 'quit', text: '부끄러워서 다시는 말하지 않아요', result: '하윤이의 생각이 공책에도 남지 않아요.', mood: '속상함', why: '지금 못 만드는 생각도 쓸모가 있을까요?' },
                { id: 'keep', text: '"지금은 못 만들어도 그려 둘래" 하고 말해요', result: '친구도 함께 생각을 보태요.', mood: '편안함' },
                { id: 'angry', text: '친구에게 화를 내요', result: '둘 다 마음이 상해요.', mood: '화남', why: '화를 내면 생각을 나누기 어려워요.' }] }, target: { choice: 'keep' }, difficulty: 0.15,
                conclude: '지금 만들 수 없는 생각도 그려 두면 나중에 고치고 보태어 쓸 수 있어요.' },
              { prompt: '내 생각 공책에 지금은 못 만들지만 있으면 좋을 물건을 하나 그렸으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"생각 공책에 그린 것을 짝에게 보여 주세요. 짝은 \'좋아\' 한마디와 보탤 생각 하나를 말해요." 생각 공책은 단원이 끝날 때까지 계속 쓴다. 다음 시간부터는 실제로 만들 것을 떠올리고 재료를 고른다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '불편에서 생긴 물건', slots: [{ id: 'e1', label: '찍찍이 신발' }, { id: 'e2', label: '뚜껑 달린 물병' }], cards: ['끈 묶기가 어려워요', '물이 쏟아져요'] }, prompt: '물건과 그 물건이 생긴 불편을 이어 보세요.', target: { match: { e1: '끈 묶기가 어려워요', e2: '물이 쏟아져요' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '지금 만들 수 없는 생각은 어떻게 할까요?', options: ['소용없으니 버려요', '그려 두면 나중에 쓸모가 있어요'], answer: 1, difficulty: 0.15, explain: '많은 물건이 처음에는 생각과 그림으로만 있었어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '내 생각 공책',
      items: [
        { type: 'draw', prompt: '지금은 못 만들지만 있으면 좋을 물건을 그리세요.' },
        { type: 'short', prompt: '그 물건은 어떤 불편을 덜어 주나요?' },
        { type: 'choice', prompt: '지우개 달린 연필이 생긴 불편에 ○ 하세요.', options: ['지우개를 자꾸 잃어버려요', '연필이 너무 길어요'], answer: '지우개를 자꾸 잃어버려요' },
        { type: 'short', prompt: '짝이 보태 준 생각을 쓰세요.' },
      ],
      easy: {
        note: '못 만드는 생각도 그려 두면 쓸모가 있어요.',
        items: [
          { type: 'choice', prompt: '구부러지는 빨대가 생긴 불편에 ○ 하세요.', options: ['누워서 물 마시기 어려워요', '빨대가 너무 짧아요'], answer: '누워서 물 마시기 어려워요' },
          { type: 'draw', prompt: '있으면 좋을 물건을 그리세요.' },
          { type: 'short', prompt: '그 물건 이름을 지어 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '셋 가운데 하나를 고르는 대신 두 가지에서 골라요. 결과가 바로 보여요.',
      base: '고른 뒤 확인을 눌러요. 생각 공책에 하나 그려요.',
      challenge: '함정 불편 카드를 골라내고, 짝의 생각에 보탤 점을 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 만들 수 없는 생각은 소용없다고 여긴다 → 비행기·전화처럼 생각에서 시작한 물건 이야기를 들려준다. ② 친구 생각을 비웃는다 → \'좋아 + 보탤 생각\' 말 틀을 쓴다. ③ 발명 이야기를 실제 역사처럼 외우려 한다 → 오늘 이야기는 쉽게 줄인 것이라 사람 이름·연도는 다루지 않는다.',
  }));

  // ───────────────────────── 37~40차시: 만들고 싶은 것 떠올리고 계획하기 ─────────────────────────
  var MAT_HINT = '만들 것에서 가장 중요한 성질(단단함, 접힘, 주무름)을 먼저 정하고, 그 성질을 가진 재료를 찾아요.';

  lessons.push(L(37, {
    title: '만들고 싶은 것을 떠올려 알맞은 재료 고르기',
    objective: '만들고 싶은 물건을 하나 정하고, 그 물건에 알맞은 재료(종이·상자·점토)를 까닭과 함께 고를 수 있다.',
    illustration: ART('three paper bins of craft materials: colored paper sheets, small empty boxes and soft clay balls, a child pointing at the boxes with an idea bubble of a toy car', '무엇으로 만들까?', [
      { motif: 'flower', x: 110, y: 228, color: 'buttercup' }, { motif: 'tree', x: 390, y: 214 }, { motif: 'star', x: 300, y: 84, s: 0.5 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"36차시 생각 공책을 펴 보세요. 이 가운데 우리 손으로 만들 수 있는 것은 무엇일까요?" 종이·빈 상자·점토 세 바구니를 앞에 놓는다. "빈 상자로 자동차를 만들면 왜 좋을까요?" 시연 단추로 \'장난감 자동차\'와 \'빈 상자\'가 이어지는 모습을 보여 준다.',
        student: '생각 공책에서 만들어 보고 싶은 것을 하나 골라 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '무엇으로 만들까?', slots: [{ id: 's1', label: '굴러가는 장난감 자동차' }], cards: ['빈 상자', '물'], shuffle: false, hint1: MAT_HINT }, sequence: [{ match: { s1: '빈 상자' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 만들 것과 재료 잇기', minutes: 13, tool: 'mindmap',
            teacher: '"이걸 만들려면 재료가 어떤 성질이어야 할까요?" 단단해야 하는지, 잘 접혀야 하는지, 주물러 모양을 낼 수 있어야 하는지 먼저 정하게 한다. 재료를 직접 만져 보고 고르게 한다. 같은 것도 다른 재료로 만들 수 있지만 \'가장 알맞은\' 것을 고르는 것이라고 짚는다.',
            task: '만들 것에 가장 알맞은 재료를 잇고, 그 까닭을 성질로 말해요.',
            levels: CARD_LV,
            items: [
              { prompt: '만들 것과 가장 알맞은 재료를 이어 보세요.', toolOptions: { mode: 'match', topic: '무엇으로 만들까?', hint1: MAT_HINT, slots: [{ id: 's1', label: '접어서 날리는 비행기' }, { id: 's2', label: '동글동글 작은 동물' }, { id: 's3', label: '물건을 담는 정리함' }], cards: ['종이', '점토', '빈 상자'] },
                target: { match: { s1: '종이', s2: '점토', s3: '빈 상자' } }, difficulty: 0.15 },
              { prompt: '재료와 그 재료의 성질을 이어 보세요.', toolOptions: { mode: 'match', topic: '재료의 성질', hint1: '재료를 손으로 만졌을 때 어떤지 떠올려요.', slots: [{ id: 's1', label: '종이' }, { id: 's2', label: '빈 상자' }, { id: 's3', label: '점토' }], cards: ['얇아서 잘 접혀요', '단단해서 모양이 유지돼요', '주무르면 모양이 바뀌어요'] },
                target: { match: { s1: '얇아서 잘 접혀요', s2: '단단해서 모양이 유지돼요', s3: '주무르면 모양이 바뀌어요' } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['얇아서 잘 접혀요', '단단해서 모양이 유지돼요', '주무르면 모양이 바뀌어요', '물에 넣으면 단단해져요'] } } } },
              { prompt: '세 재료를 손으로 만져 보고, 내가 만들 것과 재료를 활동지에 썼으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 재료 모으기 약속', minutes: 13, tool: 'mindmap',
            teacher: '"재료는 집에 있는 다시 쓸 물건으로 모아요. 1~12차시에 배운 것과 이어져요." 깨끗한 빈 상자, 휴지 심, 병뚜껑처럼 모을 수 있는 것과 모으면 안 되는 것(깨진 유리, 날카로운 캔 뚜껑)을 나누게 한다. 모아 올 재료를 정해 알림장에 쓴다.',
            task: '만들기 재료로 모을 수 있는 것과 안 되는 것을 나누고, 모아 올 재료를 정해요.',
            levels: CARD_LV,
            items: [
              { prompt: '만들기 재료로 모아도 되는 것과 안 되는 것을 나누어 보세요.', toolOptions: { topic: '만들기 재료 모으기', slots: ['모아도 돼요', '모으면 안 돼요'], cards: ['깨끗한 빈 상자', '휴지 심', '깨진 유리컵', '날카로운 캔 뚜껑'] },
                target: { sort: { '모아도 돼요': ['깨끗한 빈 상자', '휴지 심'], '모으면 안 돼요': ['깨진 유리컵', '날카로운 캔 뚜껑'] } }, difficulty: 0.1,
                levels: { challenge: { prompt: '만들기 재료로 모아도 되는 것과 안 되는 것을 모두 나누어 보세요.', toolOptions: { cards: ['깨끗한 빈 상자', '휴지 심', '병뚜껑', '깨진 유리컵', '날카로운 캔 뚜껑', '먹다 남은 우유갑'] }, target: { sort: { '모아도 돼요': ['깨끗한 빈 상자', '휴지 심', '병뚜껑'], '모으면 안 돼요': ['깨진 유리컵', '날카로운 캔 뚜껑', '먹다 남은 우유갑'] } } } } },
              { prompt: '장난감 자동차를 만들 때 필요한 재료만 골라 보세요.', toolOptions: { mode: 'pick', basket: '자동차 재료', cards: ['빈 상자', '병뚜껑 바퀴', '물', '모래'] },
                target: { pick: ['빈 상자', '병뚜껑 바퀴'] }, difficulty: 0.15 },
              { prompt: '모아 올 재료를 알림장에 썼으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"내가 만들 것과 재료를 짝에게 말해 보세요. \'~이라서 ~로 만들 거예요\'로요." 두세 명 발표를 듣는다. 재료는 깨끗이 씻어 말린 것만 가져오게 한다. 다음 시간에는 재료를 직접 견주어 본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '무엇으로 만들까?', slots: [{ id: 'e1', label: '종이 부채' }, { id: 'e2', label: '점토 그릇' }], cards: ['종이', '점토'] }, prompt: '만들 것과 알맞은 재료를 이어 보세요.', target: { match: { e1: '종이', e2: '점토' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '재료를 고를 때 먼저 생각할 것은?', options: ['만들 것에 맞는 성질', '가장 반짝이는 색'], answer: 0, difficulty: 0.15, explain: '접어야 하면 종이, 단단해야 하면 상자, 주물러야 하면 점토예요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '무엇으로 만들까?',
      items: [
        { type: 'table', prompt: '내가 만들 것과 재료를 쓰세요.', columns: ['만들 것', '재료', '그 재료를 고른 까닭'], rows: 1 },
        { type: 'choice', prompt: '접어서 만드는 비행기에 알맞은 재료에 ○ 하세요.', options: ['종이', '점토'], answer: '종이' },
        { type: 'short', prompt: '모아 올 재료를 쓰세요.' },
        { type: 'draw', prompt: '만들 것을 미리 그리세요.' },
      ],
      easy: {
        note: '접기=종이, 담기=상자, 주무르기=점토',
        items: [
          { type: 'choice', prompt: '작은 동물을 주물러 만들 재료에 ○ 하세요.', options: ['점토', '상자'], answer: '점토' },
          { type: 'choice', prompt: '재료로 모으면 안 되는 것에 ○ 하세요.', options: ['깨진 유리컵', '휴지 심'], answer: '깨진 유리컵' },
          { type: 'draw', prompt: '만들 것을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '모두 이은 뒤 확인을 눌러요. 재료를 직접 만져 보고 골라요.',
      challenge: '여섯 장을 나누고, 고른 재료의 성질을 까닭으로 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 색이 예쁜 재료만 고른다 → 만들 것에 필요한 성질(접힘, 단단함)을 먼저 묻는다. ② 씻지 않은 우유갑·음식 용기를 가져온다 → 씻어 말린 것만 가져오게 가정에 미리 알린다. ③ 생각 공책의 것을 만들 수 없다며 실망한다 → 크기를 줄이거나 한 부분만 만들어도 된다고 한다.',
  }));

  lessons.push(L(38, {
    title: '종이·상자·점토를 직접 만져 성질 견주기',
    objective: '종이·상자·점토를 접고 누르고 주물러 보며 성질을 견주고, 견준 결과를 말할 수 있다.',
    illustration: ART('a child at a table folding a paper sheet, pressing a small box and squeezing a lump of clay, with a three-column comparison chart above', '재료 견주기', [
      { motif: 'flower', x: 110, y: 228 }, { motif: 'tree', x: 390, y: 214 }, { motif: 'cloud', x: 360, y: 70, s: 0.5 }]),
    safety: ['점토를 만진 손은 입에 대지 않고, 끝나면 손을 씻어요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"종이, 상자, 점토를 꾹 눌러 보면 어떻게 될까요? 먼저 짐작해 보세요." 손을 들어 짐작을 나눈다. 시연 단추로 \'꾹 누르면 손자국이 남아요\'가 점토 칸에 놓이는 모습을 보여 준다. 오늘은 짐작이 맞는지 손으로 직접 해 본다고 말한다.',
        student: '세 재료를 눌렀을 때 어떻게 될지 짐작해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '꾹 눌러 보면', slots: ['점토', '빈 상자'], cards: ['손자국이 남아요', '다시 버텨요'], shuffle: false }, sequence: [{ sort: { '점토': ['손자국이 남아요'], '빈 상자': ['다시 버텨요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 접고 누르고 주물러 보기 (실험)', minutes: 15, tool: 'mindmap',
            teacher: '"하나씩 같은 방법으로 해 봐야 공평하게 견줄 수 있어요." 세 재료를 모두 접기 → 누르기 → 주무르기 차례로 해 보게 한다. 결과를 활동지 표에 ○, △, ×로 적는다. 상자가 \'안 접힌다\'고 하는 학생에게 모서리는 접혀 있다는 것을 짚어 준다.',
            task: '세 재료를 같은 방법으로 접고 누르고 주물러 보며 결과를 표에 적어요.',
            levels: CARD_LV,
            items: [
              { prompt: '세 재료를 접기 → 누르기 → 주무르기 차례로 해 보고 표에 ○, △, ×를 적었으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '해 본 결과를 재료에 따라 나누어 보세요.', toolOptions: { topic: '해 본 결과', slots: ['종이', '빈 상자', '점토'], cards: ['반으로 쉽게 접혀요', '눌러도 모양이 버텨요', '주무르면 길게 늘어나요'] },
                target: { sort: { '종이': ['반으로 쉽게 접혀요'], '빈 상자': ['눌러도 모양이 버텨요'], '점토': ['주무르면 길게 늘어나요'] } }, difficulty: 0.15,
                predict: { q: '세 재료 가운데 꾹 눌렀을 때 손자국이 남는 것은?', options: ['종이', '빈 상자', '점토'], answer: 2 } },
              { prompt: '해 본 결과를 재료에 따라 모두 나누어 보세요.', toolOptions: { topic: '해 본 결과', slots: ['종이', '빈 상자', '점토'], cards: ['가위로 쉽게 오려져요', '구기면 주름이 생겨요', '안에 물건을 담을 수 있어요', '위에 올려도 잘 버텨요', '굴리면 공 모양이 돼요', '마르면 단단해져요'] },
                target: { sort: { '종이': ['가위로 쉽게 오려져요', '구기면 주름이 생겨요'], '빈 상자': ['안에 물건을 담을 수 있어요', '위에 올려도 잘 버텨요'], '점토': ['굴리면 공 모양이 돼요', '마르면 단단해져요'] } }, difficulty: 0.25,
                levels: { easy: { prompt: '해 본 결과를 두 재료에 따라 나누어 보세요.', toolOptions: { slots: ['종이', '점토'], cards: ['가위로 쉽게 오려져요', '구기면 주름이 생겨요', '굴리면 공 모양이 돼요', '마르면 단단해져요'] }, target: { sort: { '종이': ['가위로 쉽게 오려져요', '구기면 주름이 생겨요'], '점토': ['굴리면 공 모양이 돼요', '마르면 단단해져요'] } } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 성질에 맞게 쓰기', minutes: 12, tool: 'mindmap',
            teacher: '"점토는 주무르면 모양이 바뀌어요. 그럼 무거운 것을 올려놓는 받침으로 좋을까요?" 성질을 알면 어디에 쓸지 정할 수 있다는 것을 짚는다. 내 만들기에서 어느 부분을 어떤 재료로 할지 정하게 한다.',
            task: '재료의 성질을 보고 만들기의 어느 부분에 쓸지 정해요.',
            levels: CARD_LV,
            items: [
              { prompt: '장난감 자동차의 부분과 알맞은 재료를 이어 보세요.', toolOptions: { mode: 'match', topic: '장난감 자동차', hint1: MAT_HINT, slots: [{ id: 's1', label: '튼튼한 몸통' }, { id: 's2', label: '얇은 깃발' }, { id: 's3', label: '동글동글 운전사 인형' }], cards: ['빈 상자', '종이', '점토'] },
                target: { match: { s1: '빈 상자', s2: '종이', s3: '점토' } }, difficulty: 0.2 },
              { prompt: '무거운 책을 올려놓을 받침으로 알맞지 않은 재료만 골라 보세요.', toolOptions: { mode: 'pick', basket: '받침으로 알맞지 않아요', cards: ['얇은 종이 한 장', '마르지 않은 점토', '튼튼한 빈 상자'] },
                target: { pick: ['얇은 종이 한 장', '마르지 않은 점토'] }, difficulty: 0.2,
                conclude: '얇은 종이는 구겨지고 마르지 않은 점토는 눌려서, 무거운 것을 받치려면 튼튼한 상자가 알맞아요.' },
              { prompt: '내 만들기의 부분마다 쓸 재료를 활동지에 정해 썼으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"처음 짐작과 해 본 결과가 같았나요, 달랐나요?" 다른 것이 있었던 학생 두세 명의 이야기를 듣는다. 점토는 비닐에 싸 두고 손을 씻는다. 다음 시간에는 실제로 있는 것만이 아니라 상상한 것도 만들 수 있는지 이야기한다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '재료의 성질', slots: ['종이', '점토'], cards: ['잘 접혀요', '주무르면 모양이 바뀌어요'] }, prompt: '성질을 재료에 따라 나누어 보세요.', target: { sort: { '종이': ['잘 접혀요'], '점토': ['주무르면 모양이 바뀌어요'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '물건을 담는 정리함에 알맞은 재료는?', options: ['빈 상자', '얇은 종이 한 장', '마르지 않은 점토'], answer: 0, difficulty: 0.15, explain: '상자는 단단하고 안이 비어 있어 물건을 담기 좋아요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '재료 견주기',
      items: [
        { type: 'table', prompt: '해 본 결과를 ○, △, ×로 쓰세요.', columns: ['', '종이', '빈 상자', '점토'], cells: [['접기', '', '', ''], ['누르기', '', '', ''], ['주무르기', '', '', '']] },
        { type: 'choice', prompt: '꾹 누르면 손자국이 남는 재료에 ○ 하세요.', options: ['점토', '빈 상자'], answer: '점토' },
        { type: 'short', prompt: '내 만들기의 몸통은 어떤 재료로 할지 까닭과 함께 쓰세요.' },
        { type: 'short', prompt: '처음 짐작과 달랐던 결과를 쓰세요.' },
      ],
      easy: {
        note: '하나씩 같은 방법으로 해 봐요.',
        items: [
          { type: 'choice', prompt: '잘 접히는 재료에 ○ 하세요.', options: ['종이', '점토'], answer: '종이' },
          { type: 'choice', prompt: '물건을 담기 좋은 재료에 ○ 하세요.', options: ['빈 상자', '종이 한 장'], answer: '빈 상자' },
          { type: 'draw', prompt: '점토로 만든 모양을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '두 재료만 견주고, 맞는 칸에 초록 테두리가 생겨요.',
      base: '세 재료를 같은 방법으로 해 보고 표를 채워요.',
      challenge: '여섯 가지 결과를 모두 나누고, 처음 짐작과 견주어 설명해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 재료마다 다른 방법으로 해 보아 견주지 못한다 → 접기·누르기·주무르기를 모두 같은 차례로 하게 한다. ② 상자는 하나도 안 접힌다고 여긴다 → 모서리 접힌 곳을 짚어 준다. ③ 점토를 입에 대거나 바닥에 흘린다 → 비닐 깔개를 쓰고 끝나면 손을 씻는다.',
  }));

  lessons.push(L(39, {
    title: '세상에 없는 물건을 상상해 꾸며 보기',
    objective: '실제로 있는 물건에 새 쓰임을 보태어 세상에 없는 물건을 상상하고, 그 물건을 조각으로 꾸며 소개할 수 있다.',
    illustration: ART('a child arranging paper shapes into an imaginary object: an umbrella with small wings and a star on top, thought bubbles of other strange inventions around', '상상해서 만들어요', [
      { motif: 'star', x: 120, y: 84, s: 0.6 }, { motif: 'cloud', x: 360, y: 70, s: 0.6 }, { motif: 'flower', x: 380, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"만들기는 가게에 있는 것만 따라 만들어야 할까요?" "우산에 날개가 달리면 어떨까요?" 하고 묻고 상상을 몇 개 듣는다. 시연 단추로 \'날개 달린 우산\'이 상상한 물건 칸에 놓이는 모습을 보여 준다. 상상한 물건도 \'누구의 무엇을 도울지\'가 있으면 멋진 생각이라는 것을 짚는다.',
        student: '내가 쓰는 물건에 무엇이 하나 더 달리면 좋을지 상상해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '어떤 물건일까?', slots: ['지금 있는 물건', '상상한 물건'], cards: ['접는 우산', '날개 달린 우산'], shuffle: false }, sequence: [{ sort: { '지금 있는 물건': ['접는 우산'], '상상한 물건': ['날개 달린 우산'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 있는 것에 새 쓰임 보태기', minutes: 11, tool: 'mindmap',
            teacher: '"있는 물건 + 새 쓰임 = 상상한 물건이에요." 칠판에 덧셈 말 틀을 적는다. 상상한 물건도 \'누구에게 무엇이 좋은지\'를 말할 수 있어야 한다는 것을 짚는다. 실제로 있는 것만 만들어야 한다는 생각이 들면 생각 공책(36차시)을 다시 보게 한다.',
            task: '있는 물건에 새 쓰임을 보태어 상상한 물건을 만들어요.',
            levels: CARD_LV,
            items: [
              { prompt: '지금 있는 물건과 상상한 물건을 나누어 보세요.', toolOptions: { topic: '어떤 물건일까?', slots: ['지금 있는 물건', '상상한 물건'], cards: ['바퀴 달린 가방', '구부러지는 빨대', '저절로 걷는 가방', '노래하는 빨대'] },
                target: { sort: { '지금 있는 물건': ['바퀴 달린 가방', '구부러지는 빨대'], '상상한 물건': ['저절로 걷는 가방', '노래하는 빨대'] } }, difficulty: 0.15 },
              { prompt: '있는 물건에 보탠 새 쓰임과 상상한 물건을 이어 보세요.', toolOptions: { mode: 'match', topic: '있는 것 + 새 쓰임', slots: [{ id: 's1', label: '필통 + 불빛' }, { id: 's2', label: '우산 + 날개' }, { id: 's3', label: '신발 + 용수철' }], cards: ['어두워도 연필이 보이는 필통', '비 오면 날아오는 우산', '높이 뛰는 신발'] },
                target: { match: { s1: '어두워도 연필이 보이는 필통', s2: '비 오면 날아오는 우산', s3: '높이 뛰는 신발' } }, difficulty: 0.2,
                hints: ['앞의 물건이 하던 일에 뒤의 새 쓰임이 보태지면 무엇이 될지 떠올려요.', '불빛은 어두운 곳을 밝히고, 날개는 날고, 용수철은 튀어 올라요.', '필통+불빛은 어두워도 보이는 필통, 우산+날개는 날아오는 우산, 신발+용수철은 높이 뛰는 신발이에요.'] },
              { prompt: '내가 상상한 물건을 "있는 물건 + 새 쓰임"으로 활동지에 썼으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 상상한 물건 꾸미기', minutes: 16, tool: 'collage',
            teacher: '"새로 보탠 곳이 한눈에 보이게 꾸며요." 판에서 먼저 놓아 본 뒤 색종이로 오려 붙이게 한다. 다 꾸민 뒤 짝에게 \'누구를 위해, 무엇이 좋은지\' 한 문장으로 소개하게 한다. 꾸민 그림은 다음 시간 계획 세우기에 쓴다.',
            task: '판에서 상상한 물건을 조각으로 꾸미고, 색종이로 오려 붙여요.',
            levels: COL_LV,
            items: [
              { prompt: '파랑 우산(반원) 양옆에 노랑 세모 날개를 두 개 붙여 날개 달린 우산을 만들어 보세요.', state: { pieces: [{ shape: 'semi', color: '파랑', size: 'l', x: 280, y: 180, r: 0 }] }, target: { has: [{ shape: 'triangle', color: '노랑', n: 2 }] }, difficulty: 0.1 },
              { prompt: '빨강 필통 위에 별 불빛을 두 개 이상 붙여 빛나는 필통을 만들어 보세요.', state: { pieces: [{ shape: 'rect', color: '빨강', size: 'l', x: 280, y: 240, r: 0 }] }, target: { has: [{ shape: 'star', min: 2 }] }, difficulty: 0.1,
                levels: { easy: { prompt: '빨강 필통 위에 노랑 동그라미 불빛을 두 개 이상 붙여 빛나는 필통을 만들어 보세요.', target: { has: [{ shape: 'circle', color: '노랑', min: 2 }] } } } },
              { prompt: '내가 상상한 물건을 꾸미고 점검해 보세요.', target: { selfCheck: ['새로 보탠 곳이 잘 보여요', '누구에게 무엇이 좋은지 말할 수 있어요', '남은 색종이를 상자에 넣었어요'], minPieces: 3 }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"만들기는 실제로 있는 것만 할 수 있을까요?" 출구 2번을 고른 뒤 오늘 꾸민 상상 물건 두세 개를 소개한다. 다음 시간에는 만들기 계획을 차례대로 세운다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '있는 것 + 새 쓰임', slots: [{ id: 'e1', label: '컵 + 온도계' }, { id: 'e2', label: '모자 + 선풍기' }], cards: ['뜨거운지 알려 주는 컵', '더울 때 시원한 모자'] }, prompt: '있는 물건에 새 쓰임을 보태면 어떤 물건이 될지 이어 보세요.', target: { match: { e1: '뜨거운지 알려 주는 컵', e2: '더울 때 시원한 모자' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '만들기를 할 때 무엇을 만들 수 있을까요?', options: ['실제로 있는 것만 만들어요', '상상한 것도 만들 수 있어요'], answer: 1, difficulty: 0.1, explain: '있는 물건에 새 쓰임을 보태면 세상에 없는 물건도 꾸밀 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '상상한 물건',
      items: [
        { type: 'blank', prompt: '내 상상 물건을 덧셈으로 쓰세요.', text: '______ + ______ = ______', answer: '예: 필통 + 불빛 = 빛나는 필통' },
        { type: 'draw', prompt: '상상한 물건을 그리고 새로 보탠 곳에 ○ 하세요.' },
        { type: 'short', prompt: '이 물건은 누구에게 무엇이 좋을까요?' },
        { type: 'choice', prompt: '상상한 물건에 ○ 하세요.', options: ['노래하는 빨대', '구부러지는 빨대'], answer: '노래하는 빨대' },
      ],
      easy: {
        note: '있는 물건 + 새 쓰임',
        items: [
          { type: 'choice', prompt: '상상한 물건에 ○ 하세요.', options: ['날개 달린 우산', '접는 우산'], answer: '날개 달린 우산' },
          { type: 'draw', prompt: '상상한 물건을 그리세요.' },
          { type: 'short', prompt: '물건 이름을 지어 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '조각 모양과 색이 네 가지씩만 있어요. 노랑 동그라미 불빛으로 꾸며요.',
      base: '조각 여섯 가지로 꾸미고 점검표를 모두 확인해요.',
      challenge: '모든 조각과 색을 쓰고, 새 쓰임을 두 가지 보태 꾸며요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 만들기는 실제로 있는 것만 할 수 있다고 여긴다 → \'있는 것 + 새 쓰임\' 말 틀로 상상을 돕는다. ② 상상이 쓸모와 이어지지 않는다 → "누구에게 무엇이 좋아요?"를 묻는다. ③ 무섭거나 남을 해치는 물건을 상상한다 → 모두가 편해지는 물건으로 바꾸어 보게 한다.',
  }));

  lessons.push(L(40, {
    title: '만들기 계획을 차례대로 세우고 준비물 챙기기',
    objective: '만들 물건의 계획을 정하기 → 재료 모으기 → 만들기 → 고치기 → 소개하기 차례로 세우고, 필요한 준비물을 챙길 수 있다.',
    illustration: ART('a paper planning sheet with numbered steps 1 to 5 and small drawings, a box of collected materials and scissors with closed blades beside it', '만들기 계획', [
      { motif: 'flower', x: 110, y: 228 }, { motif: 'tree', x: 390, y: 214 }, { motif: 'star', x: 120, y: 84, s: 0.5 }]),
    safety: ['가위와 풀은 쓸 때만 꺼내고, 가위는 날을 닫아 건네요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"재료를 모으기도 전에 만들기부터 시작하면 어떻게 될까요?" 학생 생각을 듣고(중간에 멈춰요, 재료가 없어요) 계획의 차례가 왜 필요한지 짚는다. 시연 단추로 \'무엇을 만들지 정해요 → 재료를 모아요 → 만들어요\' 차례를 보여 준다.',
        student: '내가 만들 물건을 한 번 더 떠올려 봐요.',
        demo: { tool: 'story', options: { mode: 'order', cards: ['무엇을 만들지 정해요', '재료를 모아요', '만들어요'], shuffle: false }, sequence: [{ order: ['무엇을 만들지 정해요', '재료를 모아요', '만들어요'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 만들기 차례 세우기', minutes: 13, tool: 'story',
            teacher: '"만든 다음에 바로 끝일까요? 써 보고 고치는 차례도 있어요." 고치기와 소개하기가 만들기 뒤에 온다는 것을 짚는다. 차례를 정한 뒤 내 계획표에 1~5를 적게 한다.',
            task: '만들기 계획을 알맞은 차례로 놓고 내 계획표에 적어요.',
            levels: CARD_LV,
            items: [
              { prompt: '만들기 차례를 놓아 보세요.', toolOptions: { mode: 'order', cards: ['무엇을 만들지 정해요', '재료를 모아요', '만들어요', '써 보고 고쳐요', '친구에게 소개해요'] },
                target: { order: ['무엇을 만들지 정해요', '재료를 모아요', '만들어요', '써 보고 고쳐요', '친구에게 소개해요'] }, difficulty: 0.2,
                levels: { easy: { prompt: '만들기 차례를 세 장 놓아 보세요.', toolOptions: { cards: ['무엇을 만들지 정해요', '재료를 모아요', '만들어요'] }, target: { order: ['무엇을 만들지 정해요', '재료를 모아요', '만들어요'] } } },
                hints: ['무엇을 만들지 모르면 재료를 모을 수 없어요. 맨 처음을 먼저 찾아요.', '만든 다음에 써 보고 고치고, 마지막에 소개해요.', '정하기 → 모으기 → 만들기 → 고치기 → 소개하기 차례예요.'] },
              { prompt: '상자 자동차 만들기를 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['빈 상자에 색종이를 붙여요', '병뚜껑 바퀴를 붙여요', '굴려 보고 바퀴를 고쳐 붙여요'] },
                target: { order: ['빈 상자에 색종이를 붙여요', '병뚜껑 바퀴를 붙여요', '굴려 보고 바퀴를 고쳐 붙여요'] }, difficulty: 0.15,
                hints: ['몸통을 먼저 꾸미고 바퀴를 붙여요.', '고치는 일은 다 만든 다음이에요.', '색종이 붙이기 → 바퀴 붙이기 → 굴려 보고 고치기 차례예요.'] },
              { prompt: '내 계획표에 만들기 차례 1~5를 적었으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 준비물 챙기기', minutes: 14, tool: 'kitchen',
            teacher: '"상자 자동차를 만들 때 꼭 필요한 것에만 표시해요. 필요 없는 것을 꺼내 두면 책상이 좁아져요." 표시한 준비물을 모둠 바구니에 실제로 담아 오게 한다. 가위는 날을 닫아 바구니에 꽂는다.',
            task: '만들기에 꼭 필요한 준비물에만 표시하고, 모둠 바구니에 담아요.',
            levels: CARD_LV,
            items: [
              { prompt: '상자 자동차 만들기에 꼭 필요한 준비물에만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '상자 자동차 준비물', items: [{ id: 'box', text: '빈 상자' }, { id: 'cap', text: '병뚜껑 네 개' }, { id: 'glue', text: '목공풀' }, { id: 'clay', text: '물감 통' }, { id: 'ball', text: '축구공' }] },
                target: { checklist: ['box', 'cap', 'glue'] }, difficulty: 0.15,
                levels: { easy: { prompt: '상자 자동차 만들기에 꼭 필요한 준비물 세 가지에 표시해 보세요.' } },
                hints: ['자동차 몸통, 바퀴, 붙이는 것이 무엇으로 되는지 떠올려요.', '물감과 공은 자동차를 만드는 데 꼭 있어야 할까요?', '빈 상자, 병뚜껑, 목공풀 세 가지에만 표시해요.'] },
              { prompt: '종이 부채 만들기에 꼭 필요한 준비물에만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '종이 부채 준비물', items: [{ id: 'paper', text: '두꺼운 종이' }, { id: 'stick', text: '아이스크림 막대' }, { id: 'tape', text: '셀로판테이프' }, { id: 'clay', text: '점토' }, { id: 'cup', text: '종이컵' }] },
                target: { checklist: ['paper', 'stick', 'tape'] }, difficulty: 0.2,
                levels: { easy: { prompt: '종이 부채 만들기에 꼭 필요한 준비물 세 가지에 표시해 보세요.' } },
                hints: ['부채의 바람 판, 손잡이, 둘을 붙이는 것을 떠올려요.', '점토와 종이컵은 부채의 어느 부분이 될까요?', '두꺼운 종이, 막대, 셀로판테이프에만 표시해요.'] },
              { prompt: '내 만들기 준비물을 모둠 바구니에 담았으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"내 계획표의 3번(만들기)은 다음 시간에 해요. 빠진 준비물은 없나요?" 계획표와 바구니를 견주어 보게 한다. 집에서 더 가져올 재료는 알림장에 쓴다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { mode: 'order', cards: ['재료를 모아요', '무엇을 만들지 정해요', '만들어요'] }, prompt: '만들기 차례를 놓아 보세요.', target: { order: ['무엇을 만들지 정해요', '재료를 모아요', '만들어요'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '다 만든 다음에 할 일은?', options: ['써 보고 고쳐요', '재료를 처음부터 다시 모아요'], answer: 0, difficulty: 0.15, explain: '만든 것을 써 보고 불편한 곳을 고치면 더 좋아져요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '내 만들기 계획표',
      items: [
        { type: 'table', prompt: '내 계획을 차례대로 쓰세요.', columns: ['차례', '할 일'], cells: [['1', ''], ['2', ''], ['3', ''], ['4', ''], ['5', '']] },
        { type: 'table', prompt: '준비물을 쓰세요.', columns: ['준비물', '챙겼나요?'], rows: 3 },
        { type: 'choice', prompt: '재료를 모으기 전에 할 일에 ○ 하세요.', options: ['무엇을 만들지 정해요', '친구에게 소개해요'], answer: '무엇을 만들지 정해요' },
        { type: 'draw', prompt: '다 만들었을 때의 모습을 그리세요.' },
      ],
      easy: {
        note: '정하기 → 모으기 → 만들기',
        items: [
          { type: 'choice', prompt: '맨 처음 할 일에 ○ 하세요.', options: ['무엇을 만들지 정해요', '만들어요'], answer: '무엇을 만들지 정해요' },
          { type: 'short', prompt: '내 준비물을 하나 쓰세요.' },
          { type: 'draw', prompt: '만들 것을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '차례 카드가 세 장이고, 놓을 때마다 맞는지 보여요.',
      base: '다섯 장 차례를 놓고 계획표를 채워요.',
      challenge: '준비물을 고른 까닭을 만들 물건의 부분과 이어 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 계획 없이 바로 만들고 싶어 한다 → 계획표 1~2번을 채운 학생부터 재료를 받게 한다. ② 고치기 차례를 빼먹는다 → 42차시에 바꾼 곳을 기록한다고 미리 알린다. ③ 필요 없는 준비물까지 모두 꺼낸다 → 체크한 것만 바구니에 담게 한다.',
  }));

  // ───────────────────────── 41~44차시: 재료로 만들고 바꾼 곳 남기기 ─────────────────────────
  var CH_LV = { easy: { showValues: true }, base: {}, challenge: {} };

  lessons.push(L(41, {
    title: '계획표대로 만들다가 막힌 곳 바꾸어 남기기',
    objective: '계획표를 보며 고른 재료로 물건을 만들고, 막힌 곳을 바꾼 모습을 색종이 그림으로 남길 수 있다.',
    illustration: ART('a child building a box robot with bottle-cap eyes on a desk, the robot tipping over, then the same robot standing on wide paper feet, a planning sheet with a small star mark beside it', '바꿔도 괜찮아요', [
      { motif: 'flower', x: 110, y: 228, color: 'peach' }, { motif: 'tree', x: 390, y: 214 }, { motif: 'star', x: 330, y: 84, s: 0.5 }]),
    safety: ['가위는 날을 닫아 건네고, 목공풀은 뚜껑을 닫아 둬요.', '상자를 자를 때는 선생님이 칼집을 내 준 곳만 가위로 잘라요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"40차시 계획표를 꺼내요. 오늘은 3번, 만들기를 해요." 선생님이 만든 상자 로봇을 책상에 세운다. 로봇이 앞으로 쓰러지면 "어, 넘어졌네요. 계획표에 없던 일이에요. 계획표대로만 만들어야 할까요?" 하고 묻고 반응을 기다린다("다시 만들어요", "고쳐요"). 시연 단추로 \'안 되는 곳 찾기 → 바꿀 방법 정하기 → 고쳐 만들기\' 차례를 보여 준다. "바꾸는 것은 틀린 게 아니라 더 좋게 하는 거예요."',
        student: '내 계획표 1~5번을 손가락으로 짚으며 다시 읽어 봐요.',
        demo: { tool: 'story', options: { mode: 'order', cards: ['안 되는 곳을 찾아요', '바꿀 방법을 정해요', '고쳐 만들어요'], shuffle: false }, sequence: [{ order: ['안 되는 곳을 찾아요', '바꿀 방법을 정해요', '고쳐 만들어요'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 막힌 곳을 바꾸는 방법 찾고 만들기', minutes: 16, tool: 'mindmap',
            teacher: '"만들다 보면 넘어지고, 처지고, 새는 일이 생겨요. 그때 무엇을 바꾸면 될까요?" 카드를 먼저 함께 푼 뒤 10분 동안 실제로 만든다. 돌아다니며 "어디가 안 돼요? 무엇을 바꿔 볼까요?"를 묻는다. 색을 바꾸거나 이름을 지어 주면 넘어지는 것이 해결된다고 고르는 학생에게 "색을 바꾸면 로봇이 덜 넘어질까요?"라고 되묻는다. 바꾼 곳이 생기면 계획표 옆에 ☆을 그리게 한다.',
            task: '막힌 곳에 맞는 바꿀 방법을 찾고, 계획표를 보며 내 물건을 만들어요.',
            levels: CARD_LV,
            items: [
              { prompt: '만들다가 생긴 일과 알맞은 바꿀 방법을 이어 보세요.', toolOptions: { mode: 'match', topic: '이럴 땐 이렇게', slots: [{ id: 's1', label: '상자 로봇이 자꾸 넘어져요' }, { id: 's2', label: '얇은 종이 날개가 축 처져요' }, { id: 's3', label: '점토 컵 옆으로 물이 새요' }], cards: ['발을 넓게 바꿔요', '두꺼운 종이로 바꿔요', '갈라진 곳을 점토로 메워요'] },
                target: { match: { s1: '발을 넓게 바꿔요', s2: '두꺼운 종이로 바꿔요', s3: '갈라진 곳을 점토로 메워요' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['발을 넓게 바꿔요', '두꺼운 종이로 바꿔요', '갈라진 곳을 점토로 메워요', '계획표에 없으니 그대로 둬요'] } } },
                hints: ['넘어지는 것, 처지는 것, 새는 것은 각각 무엇이 모자라서 생길까요?', '넘어지면 받치는 곳을, 처지면 재료의 두께를, 새면 갈라진 틈을 살펴요.', '로봇은 발을 넓게, 날개는 두꺼운 종이로, 컵은 갈라진 곳을 메워요.'] },
              { prompt: '상자 로봇이 자꾸 넘어져요. 넘어지지 않게 돕는 방법만 골라 보세요.', toolOptions: { mode: 'pick', basket: '넘어지지 않게 해요', cards: ['발을 넓게 만들어요', '바닥 쪽에 점토를 붙여 무겁게 해요', '몸통 색을 바꿔 칠해요', '로봇 이름을 지어 줘요'] },
                target: { pick: ['발을 넓게 만들어요', '바닥 쪽에 점토를 붙여 무겁게 해요'] }, difficulty: 0.2,
                levels: { easy: { prompt: '상자 로봇이 자꾸 넘어져요. 넘어지지 않게 돕는 방법을 골라 보세요.', toolOptions: { cards: ['발을 넓게 만들어요', '바닥 쪽에 점토를 붙여 무겁게 해요', '몸통 색을 바꿔 칠해요'] } } },
                hints: ['로봇이 서 있게 해 주는 곳은 몸의 어디일까요?', '색과 이름은 로봇이 서는 것과 상관이 있을까요?', '발을 넓게, 바닥을 무겁게 하는 두 가지만 골라요.'],
                conclude: '아래가 넓고 무거우면 잘 넘어지지 않아요. 색이나 이름은 서는 것과 상관없어요.' },
              { prompt: '계획표를 보며 내 물건을 만들고, 바꾼 곳이 생기면 계획표 옆에 ☆을 그렸으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 바꾼 곳을 색종이 그림으로 남기기', minutes: 11, tool: 'collage',
            teacher: '"만든 물건은 집에 가져가면 사라질 수 있어요. 무엇을 바꿨는지 그림으로 남겨 두면 다음에도 알 수 있어요." 판에서 바꾼 뒤 모습을 만들어 본 뒤 활동지에 \'바꾸기 전\'과 \'바꾼 뒤\'를 나란히 그리게 한다. 바꾼 곳이 없는 학생은 "더 좋게 하고 싶은 곳 한 곳"을 정해 그리게 한다.',
            task: '바꾼 뒤 모습을 판에서 꾸미고, 활동지에 바꾸기 전과 바꾼 뒤를 나란히 그려요.',
            levels: COL_LV,
            items: [
              { prompt: '넘어지던 파랑 상자 로봇의 발을 바꿨어요. 몸통 아래에 초록 긴 네모 발을 두 개 붙여 보세요.', state: { pieces: [{ shape: 'rect', color: '파랑', size: 'l', x: 280, y: 160, r: 90 }] }, target: { has: [{ shape: 'rect', color: '초록', n: 2 }] }, difficulty: 0.1 },
              { prompt: '처지던 종이 날개를 바꿨어요. 빨강 비행기 몸통 양옆에 파랑 세모 날개를 두 개 붙여 보세요.', state: { pieces: [{ shape: 'rect', color: '빨강', size: 'l', x: 280, y: 200, r: 0 }] }, target: { has: [{ shape: 'triangle', color: '파랑', n: 2 }] }, difficulty: 0.15,
                levels: { challenge: { prompt: '처지던 날개를 바꾸고 꼬리도 보탰어요. 빨강 몸통 양옆에 파랑 세모 날개 두 개, 뒤에 작은 노랑 세모 꼬리 하나를 붙여 보세요.', target: { has: [{ shape: 'triangle', color: '파랑', n: 2 }, { shape: 'triangle', color: '노랑', size: 's', n: 1 }] } } } },
              { prompt: '내 물건에서 바꾼 곳을 판에 꾸미고 점검해 보세요.', target: { selfCheck: ['바꾼 곳이 한눈에 보여요', '왜 바꿨는지 짝에게 말했어요', '활동지에 바꾸기 전 모습도 그렸어요'], minPieces: 3 }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 계획표 옆에 ☆을 그린 사람 손 들어 볼까요?" ☆이 있는 학생 두 명에게 무엇을 왜 바꿨는지 듣는다. "계획과 달라져도 바꾼 까닭이 있으면 훌륭한 만들기예요." 만들던 것은 이름표를 붙여 모둠 상자에 넣는다. 다음 시간에는 친구의 만들기 기록장을 읽어 본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '이럴 땐 이렇게', slots: [{ id: 'e1', label: '상자 집 지붕이 자꾸 떨어져요' }, { id: 'e2', label: '종이 부채가 흐물흐물해요' }], cards: ['테이프로 단단히 붙여요', '두꺼운 종이로 바꿔요'] }, prompt: '만들다가 생긴 일과 바꿀 방법을 이어 보세요.', target: { match: { e1: '테이프로 단단히 붙여요', e2: '두꺼운 종이로 바꿔요' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '만들다 보니 계획과 달라졌어요. 어떻게 할까요?', options: ['바꾼 곳과 까닭을 남겨요', '처음부터 계획대로 다시 만들어요'], answer: 0, difficulty: 0.1, explain: '더 좋게 바꾼 것은 잘한 일이에요. 무엇을 왜 바꿨는지 남겨 두면 돼요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '바꾼 곳 남기기',
      items: [
        { type: 'table', prompt: '내 만들기에서 바꾼 곳을 쓰세요.', columns: ['처음 계획', '바꾼 곳', '바꾼 까닭'], rows: 2 },
        { type: 'draw', prompt: '바꾸기 전 모습을 그리세요.' },
        { type: 'draw', prompt: '바꾼 뒤 모습을 그리고 바꾼 곳에 ○ 하세요.' },
        { type: 'choice', prompt: '종이 날개가 축 처질 때 바꿀 방법에 ○ 하세요.', options: ['두꺼운 종이로 바꿔요', '날개 색을 바꿔요'], answer: '두꺼운 종이로 바꿔요' },
      ],
      easy: {
        note: '안 되는 곳 찾기 → 바꾸기 → 그려 남기기',
        items: [
          { type: 'choice', prompt: '로봇이 넘어질 때 바꿀 곳에 ○ 하세요.', options: ['발', '색'], answer: '발' },
          { type: 'draw', prompt: '바꾼 뒤 모습을 그리세요.' },
          { type: 'short', prompt: '바꾼 곳을 한 낱말로 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드가 세 장이고 놓을 때마다 맞는지 보여요. 색종이 조각은 네 모양, 네 색만 있어요.',
      base: '모두 놓은 뒤 확인을 눌러요. 바꾼 곳을 판과 활동지에 남겨요.',
      challenge: '\'그대로 둬요\' 함정 카드를 골라내고, 날개와 꼬리 두 곳을 바꾼 모습을 꾸며요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 처음 생각한 대로만 만들어야 한다고 여겨 막히면 멈춘다 → "바꾸는 건 더 좋게 하는 것"이라 말하고 ☆ 표시를 칭찬한다. ② 안 되는 까닭과 상관없는 것(색·이름)을 바꾼다 → "그걸 바꾸면 넘어지는 게 멈출까요?"를 묻는다. ③ 상자를 혼자 자르려 한다 → 두꺼운 상자는 교사가 칼집을 미리 내 주고 학생은 가위만 쓴다.',
  }));

  lessons.push(L(42, {
    title: '친구의 만들기 기록장 읽고 내 기록장 이어 쓰기',
    objective: '친구의 만들기 기록장을 읽고 계획 그대로인 곳과 바꾼 곳을 가려내며, 내 만들기에서 바꾼 곳을 그림과 한 줄로 기록할 수 있다.',
    illustration: ART('an open paper notebook with two pages: a sketch of a red paper plane on the left and the same plane with a paper clip on its nose on the right, an arrow between them, pencils around', '만들기 기록장', [
      { motif: 'flower', x: 110, y: 228 }, { motif: 'tree', x: 390, y: 214 }, { motif: 'cloud', x: 350, y: 70, s: 0.5 }]),
    safety: ['가위는 날을 닫아 건네고, 점토를 만진 손은 끝나면 씻어요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"하준이의 만들기 기록장을 보여 줄게요." 하준이 계획은 "빨간 종이 비행기, 날개 두 개"였다고 칠판에 쓴다. "다 만든 비행기 앞에 클립이 끼워져 있네요. 이건 계획에 있었나요?" 반응을 기다린 뒤 시연 단추로 카드가 \'계획 그대로\'와 \'바꾸거나 보탰어요\'로 나뉘는 모습을 보여 준다. 기록장을 보면 만든 사람이 없어도 무엇을 바꿨는지 알 수 있다는 것을 짚는다.',
        student: '하준이 비행기에서 계획에 없던 것을 찾아 손가락으로 짚어 봐요.',
        demo: { tool: 'mindmap', options: { topic: '하준이 비행기', slots: ['계획 그대로예요', '바꾸거나 보탰어요'], cards: ['날개를 두 개 달았어요', '앞에 클립을 끼웠어요'], shuffle: false }, sequence: [{ sort: { '계획 그대로예요': ['날개를 두 개 달았어요'], '바꾸거나 보탰어요': ['앞에 클립을 끼웠어요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 친구 기록장 읽기', minutes: 12, tool: 'mindmap',
            teacher: '"문제에 적힌 계획을 먼저 손가락으로 짚고, 카드 한 장마다 \'계획에 있었나?\'를 물어요." 계획에 낱말이 그대로 있으면 \'그대로\', 없으면 \'바꾸거나 보탰어요\'로 가른다. 기록 차례 카드는 "무엇 때문에 다음 일을 했을까요?"를 물어 원인과 결과를 잇게 한다.',
            task: '친구의 계획과 기록을 견주어 그대로인 것과 바꾼 것을 가르고, 기록의 차례를 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '하준이의 계획은 "빨간 종이 비행기, 날개 두 개"였어요. 다 만든 기록을 계획 그대로인 것과 바꾸거나 보탠 것으로 나누어 보세요.', toolOptions: { topic: '하준이 비행기', slots: ['계획 그대로예요', '바꾸거나 보탰어요'], cards: ['빨간 종이로 접었어요', '날개를 두 개 달았어요', '앞에 클립을 끼웠어요', '꼬리 날개를 보탰어요'] },
                target: { sort: { '계획 그대로예요': ['빨간 종이로 접었어요', '날개를 두 개 달았어요'], '바꾸거나 보탰어요': ['앞에 클립을 끼웠어요', '꼬리 날개를 보탰어요'] } }, difficulty: 0.15,
                hints: ['계획에 적힌 낱말(빨간 종이, 날개 두 개)을 먼저 찾아요.', '카드 낱말이 계획에 있으면 그대로, 없으면 바꾸거나 보탠 것이에요.', '클립과 꼬리 날개는 계획에 없었어요.'] },
              { prompt: '서아의 계획은 "점토 화분, 꽃 세 송이"였어요. 다 만든 기록을 계획 그대로인 것과 바꾸거나 보탠 것으로 나누어 보세요.', toolOptions: { topic: '서아의 화분', slots: ['계획 그대로예요', '바꾸거나 보탰어요'], cards: ['점토로 화분을 빚었어요', '꽃을 세 송이 꽂았어요', '바닥에 물 구멍을 뚫었어요', '화분 받침을 보탰어요'] },
                target: { sort: { '계획 그대로예요': ['점토로 화분을 빚었어요', '꽃을 세 송이 꽂았어요'], '바꾸거나 보탰어요': ['바닥에 물 구멍을 뚫었어요', '화분 받침을 보탰어요'] } }, difficulty: 0.2,
                levels: { challenge: { prompt: '서아의 계획은 "점토 화분, 꽃 세 송이"였어요. 기록을 모두 나누고, 화분과 상관없는 카드는 남겨요.', toolOptions: { cards: ['점토로 화분을 빚었어요', '꽃을 세 송이 꽂았어요', '바닥에 물 구멍을 뚫었어요', '화분 받침을 보탰어요', '잎을 두 장 붙였어요', '점심에 김밥을 먹었어요'] }, target: { sort: { '계획 그대로예요': ['점토로 화분을 빚었어요', '꽃을 세 송이 꽂았어요'], '바꾸거나 보탰어요': ['바닥에 물 구멍을 뚫었어요', '화분 받침을 보탰어요', '잎을 두 장 붙였어요'] } } } },
                hints: ['계획에 적힌 낱말(점토 화분, 꽃 세 송이)을 먼저 찾아요.', '물 구멍과 받침은 계획에 적혀 있었나요?', '화분 빚기와 꽃 세 송이는 그대로, 물 구멍과 받침은 보탠 것이에요.'] },
              { prompt: '하준이의 기록장을 일이 일어난 차례대로 놓아 보세요.', toolOptions: { mode: 'order', topic: '하준이 기록장', cards: ['종이로 비행기를 접었어요', '날려 보니 금방 떨어졌어요', '앞에 클립을 끼웠어요', '다시 날려 보니 멀리 갔어요'] },
                target: { order: ['종이로 비행기를 접었어요', '날려 보니 금방 떨어졌어요', '앞에 클립을 끼웠어요', '다시 날려 보니 멀리 갔어요'] }, difficulty: 0.2,
                levels: { easy: { prompt: '하준이의 기록장을 차례대로 세 장 놓아 보세요.', toolOptions: { cards: ['날려 보니 금방 떨어졌어요', '앞에 클립을 끼웠어요', '다시 날려 보니 멀리 갔어요'] }, target: { order: ['날려 보니 금방 떨어졌어요', '앞에 클립을 끼웠어요', '다시 날려 보니 멀리 갔어요'] } } },
                hints: ['클립을 끼운 까닭이 된 일을 먼저 찾아요.', '금방 떨어진 일이 있어서 클립을 끼웠어요. 그 뒤에 다시 날렸어요.', '접기 → 금방 떨어짐 → 클립 끼우기 → 멀리 감 차례예요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 막혔을 때 할 일 고르고 내 기록장 쓰기', minutes: 15, tool: 'emotion',
            teacher: '"만들다가 망가지면 속상하지요. 그럴 때 어떻게 하면 좋을까요?" 두 상황을 함께 고른 뒤 10분 동안 만들기를 이어 한다. 숨기거나 그만두는 보기를 고른 학생에게 "그러면 다음에 같은 일이 생기면 어떻게 될까요?"를 묻는다. 내 기록장에는 오늘 바꾼 곳을 그림 하나와 한 줄(무엇을, 왜)로 쓰게 한다.',
            task: '막혔을 때 할 일을 고르고, 만들기를 이어 하며 내 기록장에 바꾼 곳을 써요.',
            levels: MOOD_LV,
            items: [
              { prompt: '서아의 점토 화분이 마르면서 옆이 갈라졌어요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '서아', feeling: '속상함', situation: '서아가 이틀 동안 빚은 점토 화분이 마르면서 옆이 갈라졌어요.', choices: [
                { id: 'quit', text: '다 부수고 그만 만들어요', result: '이틀 동안 만든 것이 없어져요.', mood: '속상함', why: '갈라진 곳만 고칠 수는 없을까요?' },
                { id: 'fix', text: '갈라진 곳을 메우고, 고친 곳을 기록장에 그려요', result: '화분이 다시 쓸 수 있게 되고, 고친 방법도 남아요.', mood: '뿌듯함' },
                { id: 'hide', text: '갈라진 곳을 가리고 계획대로 됐다고 써요', result: '물을 부으면 갈라진 곳으로 새요.', mood: '걱정', why: '숨기면 화분이 고쳐질까요?' }] }, target: { choice: 'fix' }, difficulty: 0.1 },
              { prompt: '준호가 계획에 없던 점토 전등을 자동차에 보태고 싶어요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '준호', feeling: '걱정', situation: '준호는 상자 자동차 앞에 점토 전등을 붙이고 싶어요. 그런데 계획표에 없어서 망설여요.', choices: [
                { id: 'add', text: '보태고, 기록장에 보탠 곳과 까닭을 적어요', result: '밤에도 잘 보이는 자동차가 되고, 기록장에 남아요.', mood: '신남' },
                { id: 'no', text: '계획표에 없으니 붙이면 안 돼요', result: '좋은 생각이 사라져요.', mood: '속상함', why: '계획은 만들면서 더 좋게 바꿀 수 있어요.' }] }, target: { choice: 'add' }, difficulty: 0.15,
                predict: { q: '계획표에 없는 것을 보태도 될까요?', options: ['안 돼요', '까닭을 남기면 돼요'], answer: 1 },
                conclude: '계획은 출발점이에요. 더 좋게 바꾸거나 보태고, 그 까닭을 기록하면 돼요.' },
              { prompt: '내 만들기를 이어 하고, 오늘 바꾼 곳을 기록장에 그림과 한 줄로 썼으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"짝과 기록장을 바꾸어 읽어 보세요. 짝이 무엇을 바꿨는지 기록장만 보고 알 수 있나요?" 알아보기 어려운 기록이 있으면 무엇을 더 쓰면 좋을지(까닭, 그림) 짝이 한 가지 말해 준다. 다음 시간에는 만든 것을 시험해 보고 결과를 그래프로 남긴다고 예고한다. 종이 비행기를 만든 학생은 클립을 한 개 챙겨 오게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '민지의 상자 집', slots: ['계획 그대로예요', '바꾸거나 보탰어요'], cards: ['창문을 두 개 냈어요', '지붕에 굴뚝을 보탰어요'] }, prompt: '민지의 계획은 "상자 집, 창문 두 개"였어요. 기록을 나누어 보세요.', target: { sort: { '계획 그대로예요': ['창문을 두 개 냈어요'], '바꾸거나 보탰어요': ['지붕에 굴뚝을 보탰어요'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '만들기 기록장에 꼭 남길 것은?', options: ['바꾼 곳과 바꾼 까닭', '오늘 입은 옷 색깔'], answer: 0, difficulty: 0.1, explain: '무엇을 왜 바꿨는지 남기면 다음에 만들 때도 도움이 돼요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '내 만들기 기록장',
      items: [
        { type: 'table', prompt: '오늘 기록을 쓰세요.', columns: ['오늘 한 일', '바꾸거나 보탠 곳', '그 까닭'], rows: 2 },
        { type: 'draw', prompt: '오늘 바꾼 곳을 그리세요.' },
        { type: 'choice', prompt: '계획이 "상자 집, 창문 두 개"일 때 보탠 것에 ○ 하세요.', options: ['창문 두 개', '굴뚝'], answer: '굴뚝' },
        { type: 'short', prompt: '짝의 기록장에서 알게 된 것을 한 가지 쓰세요.' },
      ],
      easy: {
        note: '계획에 있었나? 없었나?',
        items: [
          { type: 'choice', prompt: '계획이 "빨간 비행기"일 때 보탠 것에 ○ 하세요.', options: ['빨간 종이', '앞의 클립'], answer: '앞의 클립' },
          { type: 'draw', prompt: '오늘 만든 것을 그리세요.' },
          { type: 'short', prompt: '오늘 바꾼 곳을 한 낱말로 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '기록 차례 카드가 세 장이고, 놓을 때마다 맞는지 보여요.',
      base: '두 친구의 기록을 견주고 네 장 차례를 놓아요.',
      challenge: '여섯 장 가운데 화분과 상관없는 카드를 골라내요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 계획에 없는 것을 보태면 안 된다고 여긴다 → 준호 상황으로 \'까닭을 남기면 된다\'를 확인한다. ② 기록장에 "재미있었다"만 쓴다 → 칸 이름(무엇을, 왜)을 손가락으로 짚게 한다. ③ 망가진 작품을 숨긴다 → 고친 곳이 있는 기록장을 먼저 칭찬해 고치기가 자랑거리가 되게 한다.',
  }));

  lessons.push(L(43, {
    title: '만든 것을 시험해 보고 고치기 전과 뒤를 그래프로 견주기',
    objective: '만든 물건을 같은 방법으로 시험한 결과를 그림그래프로 나타내고, 고치기 전과 뒤를 견주어 말할 수 있다.',
    illustration: ART('two children in a hallway flying red paper planes, footprints on the floor counting steps, a simple picture graph with circles on a paper board beside them', '시험해 보고 견주기', [
      { motif: 'tree', x: 400, y: 214 }, { motif: 'flower', x: 100, y: 228 }, { motif: 'cloud', x: 340, y: 70, s: 0.5 }]),
    safety: ['종이 비행기는 사람이 없는 쪽으로만 날려요.', '비행기를 주우러 갈 때는 뛰지 않고 걸어요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"하준이는 클립을 끼우니 비행기가 멀리 갔다고 했어요. 정말 그런지 어떻게 알 수 있을까요?" 반응을 기다린다("날려 봐요", "재 봐요"). "날린 곳에서 떨어진 곳까지 걸음으로 세면 돼요." 시연 단추로 고치기 전 2걸음, 고친 뒤 5걸음이 ○로 그려지는 모습을 보여 준다.',
        student: '내가 만든 것은 무엇을 해 보면 잘 되는지 알 수 있을지 생각해 봐요.',
        demo: { tool: 'chart', options: { type: 'picture', title: '비행기가 간 걸음', data: [['고치기 전', 2], ['고친 뒤', 5]], unit: '걸음', xLabel: '때', icons: ONE }, sequence: [{ build: true }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 시험 방법 정하고 직접 날려 보기', minutes: 14, tool: 'mindmap',
            teacher: '"물건마다 잘 되는지 알아보는 방법이 달라요. 비행기는 날려 보고, 자동차는 굴려 보고, 그릇은 담아 봐요." 카드를 푼 뒤 복도 끝에서 모둠마다 같은 종이 비행기를 클립 없이 세 번, 클립을 끼우고 세 번 날린다. 던지는 사람, 걸음 세는 사람, 적는 사람을 정한다. 세 번 가운데 가장 멀리 간 걸음을 표에 적게 한다. "던지는 힘을 바꾸면 견주기가 될까요?" 같은 사람이 같은 힘으로 던져야 한다는 것을 짚는다.',
            task: '만든 물건에 맞는 시험 방법을 고르고, 모둠 비행기를 같은 방법으로 날려 걸음 수를 적어요.',
            levels: CARD_LV,
            items: [
              { prompt: '만든 물건과 잘 되는지 알아보는 시험 방법을 이어 보세요.', toolOptions: { mode: 'match', topic: '어떻게 시험할까?', slots: [{ id: 's1', label: '종이 비행기' }, { id: 's2', label: '상자 자동차' }, { id: 's3', label: '점토 그릇' }], cards: ['날려서 몇 걸음 갔는지 세요', '비탈에서 굴려 몇 칸 갔는지 세요', '구슬을 몇 개 담는지 세요'] },
                target: { match: { s1: '날려서 몇 걸음 갔는지 세요', s2: '비탈에서 굴려 몇 칸 갔는지 세요', s3: '구슬을 몇 개 담는지 세요' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['날려서 몇 걸음 갔는지 세요', '비탈에서 굴려 몇 칸 갔는지 세요', '구슬을 몇 개 담는지 세요', '색이 몇 가지인지 세요'] } } },
                hints: ['물건마다 무엇을 하려고 만들었는지 떠올려요.', '나는 것, 굴러가는 것, 담는 것을 해 보고 세면 돼요.', '비행기는 날려서, 자동차는 굴려서, 그릇은 구슬을 담아 세요.'] },
              { prompt: '시험을 공평하게 하는 방법만 골라 보세요.', toolOptions: { mode: 'pick', basket: '공평한 시험', cards: ['같은 사람이 던져요', '같은 곳에서 날려요', '고친 뒤에는 더 세게 던져요', '고치기 전에는 한 번만 날려요'] },
                target: { pick: ['같은 사람이 던져요', '같은 곳에서 날려요'] }, difficulty: 0.25,
                levels: { easy: { prompt: '시험을 공평하게 하는 방법을 골라 보세요.', toolOptions: { cards: ['같은 사람이 던져요', '같은 곳에서 날려요', '고친 뒤에는 더 세게 던져요'] } } },
                hints: ['고치기 전과 고친 뒤에 달라지는 것은 비행기 하나뿐이어야 해요.', '던지는 힘이나 날리는 횟수가 다르면 무엇 때문에 멀리 갔는지 알 수 있을까요?', '같은 사람, 같은 곳 두 가지만 골라요.'] },
              { prompt: '모둠 비행기를 클립 없이 세 번, 클립을 끼우고 세 번 날려 가장 멀리 간 걸음을 표에 적었으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 시험 결과를 그래프로 나타내고 읽기', minutes: 13, tool: 'chart',
            teacher: '"○ 하나가 한 걸음이에요." 첫 문항은 함께 그리고, 나머지는 스스로 읽게 한다. "고친 뒤 몇 걸음 더 갔나요?"는 ○의 수를 줄마다 세어 빼거나, 긴 줄에서 짧은 줄보다 더 있는 ○만 세게 한다. 다 푼 뒤 활동 1에서 적은 우리 모둠 걸음 수도 활동지 그래프에 ○로 그리게 한다.',
            task: '시험 결과를 ○ 그래프로 나타내고, 고치기 전과 뒤를 견주어 읽어요.',
            levels: CH_LV,
            items: [
              { prompt: '하준이 비행기 시험 결과를 ○ 그래프로 나타내 보세요.', toolOptions: { type: 'picture', title: '하준이 비행기가 간 걸음', data: [['클립 끼우기 전', 3], ['클립 끼운 뒤', 7]], unit: '걸음', xLabel: '때', icons: ONE }, target: { build: true }, difficulty: 0.15,
                levels: { easy: { toolOptions: { given: [0] }, prompt: '클립 끼운 뒤에 간 7걸음을 ○로 그려 보세요.' }, challenge: { prompt: '하준이와 민지 비행기 시험 결과를 ○ 그래프로 나타내 보세요.', toolOptions: { title: '비행기가 간 걸음', data: [['하준 전', 3], ['하준 뒤', 7], ['민지 전', 4], ['민지 뒤', 6]] } } } },
              { prompt: '서아 자동차 그래프를 보고 답하세요. 바퀴를 고친 뒤 몇 칸 더 굴러갔나요?', toolOptions: { type: 'picture', mode: 'read', title: '서아 자동차가 간 칸', data: [['고치기 전', 2], ['바퀴 고친 뒤', 6]], unit: '칸', xLabel: '때', icons: ONE, question: '몇 칸 더 갔나요?' }, target: { value: 4 }, difficulty: 0.25,
                levels: { easy: { prompt: '서아 자동차 그래프를 보고 고르세요. 더 멀리 굴러간 때는?', toolOptions: { question: '더 멀리 간 때는?', choices: ['고치기 전', '바퀴 고친 뒤'] }, target: { pick: 1 } } } },
              { prompt: '점토 그릇 그래프를 보고 고르세요. 구슬을 가장 많이 담은 그릇은?', toolOptions: { type: 'picture', mode: 'read', title: '그릇에 담은 구슬', data: [['처음 그릇', 4], ['벽을 높인 그릇', 9], ['바닥을 넓힌 그릇', 7]], unit: '개', xLabel: '그릇', icons: ONE, question: '가장 많이 담은 그릇은?', choices: ['처음 그릇', '벽을 높인 그릇', '바닥을 넓힌 그릇'] }, target: { pick: 1 }, difficulty: 0.2,
                levels: { challenge: { prompt: '점토 그릇 그래프를 보고 고르세요. 벽을 높인 그릇은 처음 그릇보다 구슬을 몇 개 더 담았나요?', toolOptions: { question: '몇 개 더 담았나요?', choices: ['3개', '5개', '9개'] }, target: { pick: 1 } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"우리 모둠 비행기는 클립을 끼운 뒤 더 멀리 갔나요?" 모둠마다 그래프를 들어 보이고 한 문장으로 말한다("클립 끼운 뒤 ○걸음 더 갔어요"). 더 짧아진 모둠이 있으면 "그것도 알게 된 것"이라며 왜 그랬을지 묻는다. 다음 시간에는 친구에게 조언을 듣고 한 곳을 더 바꾼다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'chart', options: { type: 'picture', mode: 'read', title: '바람개비가 돈 바퀴', data: [['날개 고치기 전', 3], ['날개 고친 뒤', 8]], unit: '바퀴', xLabel: '때', icons: ONE, question: '몇 바퀴 늘었나요?' }, prompt: '그래프를 보고 날개를 고친 뒤 바람개비가 몇 바퀴 더 돌았는지 써 보세요.', target: { value: 5 }, difficulty: 0.25 },
          { type: 'choice', prompt: '고친 것이 정말 나아졌는지 어떻게 알 수 있을까요?', options: ['같은 방법으로 다시 시험해 견주어요', '보기에 예쁘면 나아진 거예요'], answer: 0, difficulty: 0.15, explain: '고치기 전과 같은 방법으로 시험해서 수로 견주면 알 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '시험 결과 그래프',
      items: [
        { type: 'table', prompt: '우리 모둠 비행기가 간 걸음을 쓰세요.', columns: ['', '1번', '2번', '3번', '가장 멀리'], cells: [['클립 없이', '', '', '', ''], ['클립 끼우고', '', '', '', '']] },
        { type: 'figure', wide: true, prompt: '표를 보고 ○ 그래프를 완성하세요.', tool: 'chart', figures: [{ options: { type: 'picture', title: '준호 자동차가 간 칸', data: [['고치기 전', 3], ['고친 뒤', 5]], unit: '칸', xLabel: '때', icons: ONE, given: [0] }, caption: '' }], answer: '고친 뒤 ○ 5개' },
        { type: 'short', prompt: '우리 모둠 비행기는 고치기 전과 뒤에 무엇이 달라졌는지 쓰세요.' },
        { type: 'choice', prompt: '공평한 시험에 ○ 하세요.', options: ['같은 사람이 같은 곳에서 던져요', '고친 뒤에만 세게 던져요'], answer: '같은 사람이 같은 곳에서 던져요' },
      ],
      easy: {
        note: '○ 하나 = 한 걸음',
        items: [
          { type: 'short', prompt: '클립 끼운 뒤 우리 비행기는 몇 걸음 갔나요?' },
          { type: 'choice', prompt: '비행기 시험 방법에 ○ 하세요.', options: ['날려 봐요', '물에 넣어 봐요'], answer: '날려 봐요' },
          { type: 'draw', prompt: '우리 모둠 비행기를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '그래프에 지금 ○ 수가 보이고, 한 줄만 그려요. 몇 칸 더 갔는지 대신 더 멀리 간 때를 골라요.',
      base: '두 줄 그래프를 그리고 몇 칸 더 갔는지 써요.',
      challenge: '네 줄 그래프를 그리고, 몇 개 더 담았는지 빼어 구해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 처음 만든 것이 그대로 정답이라 시험할 필요가 없다고 여긴다 → 하준이 기록처럼 시험해야 고칠 곳이 보인다고 짚는다. ② 고친 뒤에만 세게 던진다 → 던지는 사람을 한 명으로 정한다. ③ ○를 셀 때 건너뛴다 → 연필로 하나씩 짚어 세게 한다. 복도에서 날릴 때는 다른 반 수업에 방해되지 않게 미리 알린다.',
  }));

  lessons.push(L(44, {
    title: '친구 조언을 골라 내 작품 한 곳 더 바꾸기',
    objective: '친구에게 받은 조언 가운데 도움이 되는 것을 골라 내 작품의 한 곳을 바꾸고, 바꾼 모습을 남길 수 있다.',
    illustration: ART('two children at a desk exchanging small sticky notes beside a clay puppy and a box car, one child adding thicker clay legs to the puppy', '조언 듣고 바꾸기', [
      { motif: 'flower', x: 100, y: 228, color: 'peach' }, { motif: 'tree', x: 400, y: 214 }, { motif: 'star', x: 120, y: 84, s: 0.5 }]),
    safety: ['가위는 날을 닫아 건네고, 점토를 만진 손은 끝나면 씻어요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"하준이가 서아에게 \'이거 이상해\'라고 말했어요. 서아는 무엇을 고쳐야 할지 알 수 있을까요?" 반응을 기다린다. "\'다리가 기울어서 서지 않으니 굵게 해 보면 어때?\'라고 하면요?" 무엇이 안 되는지와 어떻게 해 볼지가 함께 있어야 도움이 되는 조언이라는 것을 짚는다. 시연 단추로 도움이 되는 조언이 바구니에 담기는 모습을 보여 준다.',
        student: '친구에게 들었을 때 기분 좋고 도움이 되었던 말을 떠올려 봐요.',
        demo: { tool: 'emotion', options: { mode: 'pick', basket: '도움이 되는 조언', cards: ['다리가 기울어서 서지 않으니 굵게 해 보면 어때?', '이거 이상해'], shuffle: false }, sequence: [{ pick: ['다리가 기울어서 서지 않으니 굵게 해 보면 어때?'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 도움이 되는 조언 주고받기', minutes: 13, tool: 'emotion',
            teacher: '"도움이 되는 조언에는 \'무엇이 안 되는지\'와 \'어떻게 해 볼지\'가 들어 있어요." 카드를 푼 뒤 짝과 작품을 바꾸어 보고, 붙임쪽지에 \'좋은 점 하나 + 바꿔 보면 좋을 점 하나\'를 써서 붙인다. "내 것이 더 멋있어"처럼 견주는 말은 조언이 아니라는 것을 짚는다.',
            task: '도움이 되는 조언을 고르고, 짝의 작품에 좋은 점과 바꿔 볼 점을 붙임쪽지로 남겨요.',
            levels: CARD_LV,
            items: [
              { prompt: '상자 자동차를 본 친구들의 말이에요. 도움이 되는 조언만 골라 보세요.', toolOptions: { mode: 'pick', basket: '도움이 되는 조언', cards: ['바퀴가 헐거우니 테이프를 더 감아 봐', '비탈에서 멈추니 바퀴를 더 크게 해 보면 어때?', '이거 이상해', '내 것이 더 멋있어'] },
                target: { pick: ['바퀴가 헐거우니 테이프를 더 감아 봐', '비탈에서 멈추니 바퀴를 더 크게 해 보면 어때?'] }, difficulty: 0.15,
                hints: ['그 말을 들으면 무엇을 고칠지 알 수 있나요?', '\'무엇이 안 되는지\'와 \'어떻게 해 볼지\'가 함께 있는 말을 찾아요.', '테이프를 더 감는 말과 바퀴를 크게 하는 말 두 가지예요.'] },
              { prompt: '점토 강아지를 본 친구들의 말이에요. 도움이 되는 조언만 골라 보세요.', toolOptions: { mode: 'pick', basket: '도움이 되는 조언', cards: ['다리가 기울어서 서지 않으니 굵게 해 보면 어때?', '귀가 자꾸 떨어지니 이쑤시개로 이어 봐', '못생겼어', '빨리 끝내'] },
                target: { pick: ['다리가 기울어서 서지 않으니 굵게 해 보면 어때?', '귀가 자꾸 떨어지니 이쑤시개로 이어 봐'] }, difficulty: 0.2,
                levels: { challenge: { prompt: '점토 강아지를 본 친구들의 말이에요. 도움이 되는 조언만 모두 골라 보세요.', toolOptions: { cards: ['다리가 기울어서 서지 않으니 굵게 해 보면 어때?', '귀가 자꾸 떨어지니 이쑤시개로 이어 봐', '꼬리가 짧아 보여', '못생겼어', '빨리 끝내'] } } },
                hints: ['그 말을 들으면 무엇을 어떻게 고칠지 알 수 있나요?', '안 되는 곳만 말하고 방법이 없는 말은 고칠 곳을 알기 어려워요.', '다리를 굵게 하는 말과 귀를 이쑤시개로 잇는 말 두 가지예요.'] },
              { prompt: '짝과 작품을 바꾸어 보고, 붙임쪽지에 좋은 점 하나와 바꿔 볼 점 하나를 써서 붙였으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 고른 조언으로 한 곳 바꾸고 남기기', minutes: 14, tool: 'collage',
            teacher: '"받은 조언을 다 따라야 할까요?" 반응을 기다린 뒤, 내 작품에 맞는 조언 하나를 골라 실제로 바꾸게 한다(8분). 그다음 판과 활동지에 바꾼 모습을 남긴다. 조언한 친구에게 "고마워, ○○을 바꿨어"라고 말하게 한다.',
            task: '조언 하나를 골라 실제 작품을 바꾸고, 바꾼 모습을 판과 활동지에 남겨요.',
            levels: COL_LV,
            items: [
              { prompt: '서아가 강아지 다리를 굵게 바꿨어요. 노랑 강아지 몸통 아래에 크게 고른 빨강 긴 네모 다리를 네 개 붙여 보세요.', state: { pieces: [{ shape: 'circle', color: '노랑', size: 'l', x: 280, y: 160, r: 0 }] }, target: { has: [{ shape: 'rect', color: '빨강', size: 'l', n: 4 }] }, difficulty: 0.15,
                levels: { easy: { prompt: '서아가 강아지 다리를 굵게 바꿨어요. 노랑 강아지 몸통 아래에 빨강 긴 네모 다리를 두 개 붙여 보세요.', target: { has: [{ shape: 'rect', color: '빨강', n: 2 }] } } } },
              { prompt: '준호가 작은 바퀴를 큰 바퀴로 바꿨어요. 작은 동그라미 바퀴 두 개를 떼고, 크게 고른 동그라미 바퀴를 두 개 붙여 보세요.', state: { pieces: [{ shape: 'rect', color: '파랑', size: 'l', x: 280, y: 180, r: 0 }, { shape: 'circle', color: '노랑', size: 's', x: 240, y: 240, r: 0 }, { shape: 'circle', color: '노랑', size: 's', x: 320, y: 240, r: 0 }] },
                target: { has: [{ shape: 'circle', size: 's', max: 0 }, { shape: 'circle', size: 'l', n: 2 }] }, difficulty: 0.25,
                hints: ['처음에 붙어 있던 작은 바퀴부터 찾아요.', '작은 동그라미를 눌러 떼고, 크기를 \'크게\'로 골라 동그라미를 붙여요.', '작은 동그라미 0개, 큰 동그라미 2개가 되면 돼요.'] },
              { prompt: '조언을 듣고 바꾼 내 작품을 판에 꾸미고 점검해 보세요.', target: { selfCheck: ['조언 가운데 하나를 골라 바꿨어요', '바꾼 곳을 짝에게 보여 주었어요', '조언한 친구에게 고맙다고 말했어요'], minPieces: 2 }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"받은 조언 가운데 따르지 않은 것도 있나요? 왜 그랬나요?" 두세 명의 까닭을 듣고, 내 작품에 맞는 조언을 고르는 것도 잘한 일이라고 짚는다. 붙임쪽지는 기록장에 붙여 둔다. 다음 시간부터는 다 만든 작품을 친구에게 소개한다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'pick', basket: '도움이 되는 조언', cards: ['깃발이 자꾸 넘어지니 빨대를 더 깊이 꽂아 봐', '깃발이 별로야', '내가 대신 해 줄게'] }, prompt: '종이 깃발을 본 친구들의 말이에요. 도움이 되는 조언을 골라 보세요.', target: { pick: ['깃발이 자꾸 넘어지니 빨대를 더 깊이 꽂아 봐'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '조언을 받았을 때 알맞은 것은?', options: ['내 작품에 맞는 조언을 골라 바꿔요', '받은 조언을 모두 그대로 따라요'], answer: 0, difficulty: 0.2, explain: '조언은 도움말이에요. 내 작품에 맞는 것을 골라 바꾸면 돼요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '조언 듣고 바꾸기',
      items: [
        { type: 'table', prompt: '받은 조언과 내가 한 일을 쓰세요.', columns: ['받은 조언', '따랐나요?', '바꾼 곳'], rows: 2 },
        { type: 'short', prompt: '짝에게 써 준 조언을 쓰세요. (무엇이 안 되는지 + 어떻게 해 볼지)' },
        { type: 'draw', prompt: '조언을 듣고 바꾼 뒤 모습을 그리세요.' },
        { type: 'choice', prompt: '도움이 되는 조언에 ○ 하세요.', options: ['바퀴가 헐거우니 테이프를 더 감아 봐', '이거 이상해'], answer: '바퀴가 헐거우니 테이프를 더 감아 봐' },
      ],
      easy: {
        note: '안 되는 곳 + 해 볼 방법',
        items: [
          { type: 'choice', prompt: '도움이 되는 말에 ○ 하세요.', options: ['다리를 굵게 해 봐', '못생겼어'], answer: '다리를 굵게 해 봐' },
          { type: 'short', prompt: '친구 작품의 좋은 점을 하나 쓰세요.' },
          { type: 'draw', prompt: '바꾼 내 작품을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '조각은 네 모양, 네 색만 있고, 다리 두 개만 붙여요. 카드는 놓을 때마다 맞는지 보여요.',
      base: '조언 두 문항을 고르고, 다리 네 개·바퀴 바꾸기를 해요.',
      challenge: '방법이 없는 말(\'꼬리가 짧아 보여\')까지 골라내요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 조언을 흉으로 듣고 속상해한다 → 좋은 점을 먼저 쓰는 말 틀을 지킨다. ② 받은 조언을 모두 따라 작품이 흐트러진다 → 하나만 골라 바꾸게 한다. ③ 친구 작품을 직접 고쳐 준다 → 말과 쪽지로만 돕고 작품은 주인이 고친다고 약속한다.',
  }));

  // ───────────────────────── 45~48차시: 만든 것 설명하고 단원 정리 ─────────────────────────

  lessons.push(L(45, {
    title: '보기만 해서는 모르는 것을 넣어 내 작품 소개하기',
    objective: '만든 물건을 보여 주며 이름·재료·쓰임·바꾼 곳을 넣어 짝에게 설명할 수 있다.',
    illustration: ART('a child holding up a paper umbrella with small wings and talking to a friend, a speech bubble with four small icons for name, material, use and change', '내 작품을 소개해요', [
      { motif: 'flower', x: 110, y: 228, color: 'buttercup' }, { motif: 'tree', x: 390, y: 214 }, { motif: 'star', x: 340, y: 84, s: 0.5 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '선생님이 만든 휴지 심 작품을 말없이 들어 보인다. "이게 무엇일까요?" 망원경, 기차 굴뚝, 마이크처럼 여러 대답이 나오게 기다린다. "사실은 \'귓속말 전화기\'예요. 말해 주지 않으니 다 다르게 봤지요?" 보기만 해도 아는 것(색, 모양)과 말해야 아는 것(이름, 쓰임, 바꾼 까닭)이 있다는 것을 짚는다. 시연 단추로 카드 두 장이 나뉘는 모습을 보여 준다.',
        student: '내 작품에서 친구가 보기만 해서는 모를 것을 하나 떠올려 봐요.',
        demo: { tool: 'mindmap', options: { topic: '귓속말 전화기', slots: ['보면 알아요', '말해야 알아요'], cards: ['노란 휴지 심이에요', '귓속말을 전해요'], shuffle: false }, sequence: [{ sort: { '보면 알아요': ['노란 휴지 심이에요'], '말해야 알아요': ['귓속말을 전해요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 보면 아는 것, 말해야 아는 것', minutes: 11, tool: 'mindmap',
            teacher: '"작품을 처음 보는 친구가 되어 보세요. 작품만 보고 알 수 있는 것인가요?" 색·개수·모양은 보면 알고, 이름·쓰임·누구를 위한 것인지·바꾼 까닭은 말해야 안다는 기준을 칠판에 적는다. "날개가 두 개 달렸어요"를 \'말해야 알아요\'에 놓은 학생에게 "작품을 보면 날개가 몇 개인지 보이나요?"라고 되묻는다.',
            task: '작품을 처음 보는 친구가 되어, 보면 아는 것과 말해야 아는 것을 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '민지의 날개 우산이에요. 처음 보는 친구가 보면 아는 것과 민지가 말해야 아는 것으로 나누어 보세요.', toolOptions: { topic: '민지의 날개 우산', slots: ['보면 알아요', '말해야 알아요'], cards: ['파란색이에요', '날개가 두 개 달렸어요', '비 오는 날 할머니께 날아가요', '처음엔 날개가 처져서 바꿨어요'] },
                target: { sort: { '보면 알아요': ['파란색이에요', '날개가 두 개 달렸어요'], '말해야 알아요': ['비 오는 날 할머니께 날아가요', '처음엔 날개가 처져서 바꿨어요'] } }, difficulty: 0.15,
                hints: ['작품을 처음 본 친구가 눈으로 볼 수 있는 것인지 물어요.', '색과 개수는 보이지만, 쓰임과 바꾼 까닭은 보이지 않아요.', '파란색·날개 두 개는 보면 알고, 할머니께 날아가는 것·날개를 바꾼 것은 말해야 알아요.'] },
              { prompt: '준호의 상자 자동차예요. 보면 아는 것과 준호가 말해야 아는 것으로 나누어 보세요.', toolOptions: { topic: '준호의 상자 자동차', slots: ['보면 알아요', '말해야 알아요'], cards: ['바퀴가 네 개예요', '앞에 동그란 전등이 있어요', '이름은 번쩍 자동차예요', '바퀴가 헐거워서 테이프를 감았어요'] },
                target: { sort: { '보면 알아요': ['바퀴가 네 개예요', '앞에 동그란 전등이 있어요'], '말해야 알아요': ['이름은 번쩍 자동차예요', '바퀴가 헐거워서 테이프를 감았어요'] } }, difficulty: 0.2,
                levels: { challenge: { prompt: '준호의 상자 자동차예요. 보면 아는 것과 말해야 아는 것으로 모두 나누어 보세요.', toolOptions: { cards: ['바퀴가 네 개예요', '앞에 동그란 전등이 있어요', '몸통이 빨간색이에요', '이름은 번쩍 자동차예요', '바퀴가 헐거워서 테이프를 감았어요', '밤길에 동생 장난감을 실어 날라요'] }, target: { sort: { '보면 알아요': ['바퀴가 네 개예요', '앞에 동그란 전등이 있어요', '몸통이 빨간색이에요'], '말해야 알아요': ['이름은 번쩍 자동차예요', '바퀴가 헐거워서 테이프를 감았어요', '밤길에 동생 장난감을 실어 날라요'] } } } },
                hints: ['처음 본 친구의 눈에 보이는 것인지 물어요.', '이름과 고친 까닭은 작품에 적혀 있지 않아요.', '바퀴 네 개·전등은 보면 알고, 이름·테이프를 감은 까닭은 말해야 알아요.'] },
              { prompt: '내 작품에서 \'말해야 아는 것\' 두 가지를 활동지에 썼으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 소개 말 짜고 짝에게 설명하기', minutes: 16, tool: 'story',
            teacher: '"소개 말 틀은 네 줄이에요. 이름, 재료, 쓰임, 바꾼 곳." 칠판에 틀을 적는다. 두 친구의 소개 말을 함께 완성한 뒤, 내 소개 말을 활동지에 쓰고 짝에게 작품을 들고 설명한다(한 사람 2분). 듣는 짝은 설명을 듣고 새로 알게 된 것 하나를 말해 준다. 작품을 들기만 하고 말을 줄이는 학생에게 "친구가 이름을 알 수 있을까요?"라고 묻는다.',
            task: '소개 말 틀에 맞게 친구의 소개를 완성하고, 내 작품을 짝에게 설명해요.',
            levels: CARD_LV,
            items: [
              { prompt: '준호의 소개 말을 완성해 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'f1', who: '준호', label: '이 자동차 이름은 ___예요.' }, { id: 'f2', who: '준호', label: '___로 만들었어요.' }, { id: 'f3', who: '준호', label: '___ 때 써요.' }, { id: 'f4', who: '준호', label: '만들다가 ___을 보탰어요.' }], cards: ['번쩍 자동차', '빈 상자와 병뚜껑', '밤길을 달릴', '앞에 점토 전등'] },
                target: { fill: { f1: '번쩍 자동차', f2: '빈 상자와 병뚜껑', f3: '밤길을 달릴', f4: '앞에 점토 전등' } }, difficulty: 0.2,
                levels: { easy: { prompt: '준호의 소개 말 두 줄을 완성해 보세요.', toolOptions: { slots: [{ id: 'f1', who: '준호', label: '이 자동차 이름은 ___예요.' }, { id: 'f2', who: '준호', label: '___로 만들었어요.' }], cards: ['번쩍 자동차', '빈 상자와 병뚜껑'] }, target: { fill: { f1: '번쩍 자동차', f2: '빈 상자와 병뚜껑' } } } },
                hints: ['줄마다 이름, 재료, 쓰임, 보탠 곳 가운데 무엇을 말하는지 먼저 찾아요.', '\'___로 만들었어요\'에는 재료가, \'___ 때 써요\'에는 하는 일이 들어가요.', '이름은 번쩍 자동차, 재료는 빈 상자와 병뚜껑, 쓰임은 밤길을 달릴 때, 보탠 곳은 점토 전등이에요.'] },
              { prompt: '서아의 소개 말을 완성해 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'f1', who: '서아', label: '이 화분 이름은 ___이에요.' }, { id: 'f2', who: '서아', label: '___로 빚었어요.' }, { id: 'f3', who: '서아', label: '___ 때 써요.' }, { id: 'f4', who: '서아', label: '만들다가 ___을 보탰어요.' }], cards: ['방울 화분', '점토', '창가에서 꽃을 키울', '바닥에 물 구멍'] },
                target: { fill: { f1: '방울 화분', f2: '점토', f3: '창가에서 꽃을 키울', f4: '바닥에 물 구멍' } }, difficulty: 0.2,
                levels: { challenge: { prompt: '서아의 소개 말을 완성해 보세요. 쓰지 않는 카드도 있어요.', toolOptions: { cards: ['방울 화분', '점토', '창가에서 꽃을 키울', '바닥에 물 구멍', '빨간색'] } } },
                hints: ['줄마다 이름, 재료, 쓰임, 보탠 곳 가운데 무엇을 말하는지 먼저 찾아요.', '\'___로 빚었어요\'에는 재료가 들어가요. 색은 보면 아는 것이에요.', '이름은 방울 화분, 재료는 점토, 쓰임은 창가에서 꽃을 키울 때, 보탠 곳은 물 구멍이에요.'] },
              { prompt: '내 작품을 들고 소개 말 네 줄로 짝에게 설명하고, 짝이 새로 알게 된 것을 말해 주었으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"짝의 설명을 듣고 새로 알게 된 것이 있나요?" 두세 명이 짝 작품에서 새로 안 것을 말한다. "말해 주지 않았다면 알 수 있었을까요?" 하고 묻는다. 다음 시간에는 반 전체가 작품을 둘러보며 서로 묻고 답한다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '하준이의 종이 비행기', slots: ['보면 알아요', '말해야 알아요'], cards: ['날개가 빨간색이에요', '클립을 끼워 멀리 날게 했어요'] }, prompt: '하준이 비행기를 보면 아는 것과 하준이가 말해야 아는 것으로 나누어 보세요.', target: { sort: { '보면 알아요': ['날개가 빨간색이에요'], '말해야 알아요': ['클립을 끼워 멀리 날게 했어요'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '내 작품을 친구가 잘 알게 하려면 어떻게 할까요?', options: ['이름과 쓰임을 말해 줘요', '보여 주기만 하면 다 알아요'], answer: 0, difficulty: 0.1, explain: '이름, 쓰임, 바꾼 까닭은 보기만 해서는 모르니 말로 설명해야 해요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '내 작품 소개 말',
      items: [
        { type: 'blank', prompt: '내 소개 말을 쓰세요.', text: '이 물건 이름은 ______예요. ______로 만들었어요. ______ 때 써요. 만들다가 ______을 바꿨어요.', answer: '예: 번쩍 자동차 / 빈 상자 / 밤길을 달릴 / 바퀴' },
        { type: 'table', prompt: '내 작품에서 보면 아는 것과 말해야 아는 것을 하나씩 쓰세요.', columns: ['보면 알아요', '말해야 알아요'], rows: 1 },
        { type: 'choice', prompt: '말해야 아는 것에 ○ 하세요.', options: ['바퀴가 네 개예요', '동생에게 주려고 만들었어요'], answer: '동생에게 주려고 만들었어요' },
        { type: 'short', prompt: '짝의 설명을 듣고 새로 알게 된 것을 쓰세요.' },
      ],
      easy: {
        note: '이름 → 재료 → 쓰임',
        items: [
          { type: 'short', prompt: '내 작품 이름을 쓰세요.' },
          { type: 'short', prompt: '무엇으로 만들었는지 쓰세요.' },
          { type: 'choice', prompt: '말해야 아는 것에 ○ 하세요.', options: ['작품 이름', '작품 색'], answer: '작품 이름' },
        ],
      },
    },
    differentiation: {
      easy: '소개 말 두 줄(이름, 재료)만 채우고, 놓을 때마다 맞는지 보여요.',
      base: '네 줄 소개 말을 두 번 완성하고 짝에게 설명해요.',
      challenge: '여섯 장을 나누고, 쓰지 않는 카드(빨간색)를 골라내요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 만든 것은 설명하지 않아도 다 알아본다고 여긴다 → 도입의 휴지 심 맞히기를 다시 떠올린다. ② "이건 이거야"처럼 가리키기만 한다 → 소개 말 네 줄 틀을 손가락으로 짚으며 말하게 한다. ③ 바꾼 곳을 말하기 부끄러워한다 → 바꾼 곳은 자랑할 거리라고 짚고, 42차시 기록장을 보며 말하게 한다.',
  }));

  lessons.push(L(46, {
    title: '반 친구 작품을 둘러보며 묻고 새 생각 말하기',
    objective: '친구 작품 앞에서 궁금한 것을 알맞게 묻고, 친구 작품과 견주어 새로 떠오른 생각을 말할 수 있다.',
    illustration: ART('a classroom gallery with student-made paper and clay objects on desks, small groups of children walking between desks holding question cards', '작품 둘러보기', [
      { motif: 'flower', x: 100, y: 228 }, { motif: 'tree', x: 400, y: 214 }, { motif: 'cloud', x: 330, y: 70, s: 0.5 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"오늘은 교실이 전시장이 돼요. 반은 작품 옆에서 설명하고, 반은 둘러보며 물어요. 7분 뒤에 바꿔요." 둘러볼 때 묻는 말 세 가지(재료, 쓰임, 바꾼 곳)를 칠판에 적는다. "\'왜 이렇게 못 만들었어?\'는 묻는 말일까요?" 반응을 기다린 뒤 궁금한 것을 묻는 말과 흉보는 말이 다르다는 것을 짚는다. 시연 단추로 질문 카드 하나가 이어지는 모습을 보여 준다.',
        student: '친구 작품에서 가장 궁금한 것을 하나 떠올려 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '이렇게 물어요', slots: [{ id: 's1', label: '재료가 궁금해요' }], cards: ['무엇으로 만들었어?', '언제 다 해?'], shuffle: false }, sequence: [{ match: { s1: '무엇으로 만들었어?' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 묻는 말과 새 생각 말 익히기', minutes: 10, tool: 'mindmap',
            teacher: '"친구 것을 보고 \'나도 이렇게 해 볼래\'가 떠오르면 그게 새 생각이에요." "하준이 비행기가 좋아"와 "하준이처럼 클립을 끼우면 내 비행기도 멀리 갈 것 같아"를 견주어 들려준다. 앞의 것은 좋다는 마음이고, 뒤의 것은 내 작품에 보탤 새 생각이라는 것을 짚는다.',
            task: '궁금한 것에 맞는 질문을 잇고, 친구 작품을 보고 떠오른 새 생각을 찾아요.',
            levels: CARD_LV,
            items: [
              { prompt: '궁금한 것과 알맞은 질문을 이어 보세요.', toolOptions: { mode: 'match', topic: '이렇게 물어요', slots: [{ id: 's1', label: '재료가 궁금해요' }, { id: 's2', label: '쓰임이 궁금해요' }, { id: 's3', label: '바꾼 곳이 궁금해요' }], cards: ['무엇으로 만들었어?', '이걸로 무엇을 할 수 있어?', '만들다가 바꾼 곳이 있어?'] },
                target: { match: { s1: '무엇으로 만들었어?', s2: '이걸로 무엇을 할 수 있어?', s3: '만들다가 바꾼 곳이 있어?' } }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['무엇으로 만들었어?', '이걸로 무엇을 할 수 있어?', '만들다가 바꾼 곳이 있어?', '왜 이렇게 못 만들었어?'] } } },
                hints: ['질문을 들은 친구가 무엇을 대답하게 될지 떠올려요.', '재료는 \'무엇으로\', 쓰임은 \'무엇을 할 수\', 바꾼 곳은 \'바꾼\'이 들어간 질문이에요.', '재료-무엇으로 만들었어, 쓰임-무엇을 할 수 있어, 바꾼 곳-바꾼 곳이 있어로 이어요.'] },
              { prompt: '친구 작품을 보고 한 말이에요. 내 작품에 보탤 새 생각이 담긴 말만 골라 보세요.', toolOptions: { mode: 'pick', basket: '새로 떠오른 생각', cards: ['하준이처럼 클립을 끼우면 내 비행기도 멀리 갈 것 같아', '서아 화분처럼 내 점토 컵에도 받침을 보탤래', '하준이 비행기가 좋아', '빨리 쉬는 시간이면 좋겠어'] },
                target: { pick: ['하준이처럼 클립을 끼우면 내 비행기도 멀리 갈 것 같아', '서아 화분처럼 내 점토 컵에도 받침을 보탤래'] }, difficulty: 0.2,
                hints: ['그 말에 \'내 작품\'에서 해 볼 일이 들어 있나요?', '좋다는 마음만 있는 말과 내 작품에 보탤 방법이 있는 말은 달라요.', '클립을 끼워 보는 말과 받침을 보태는 말 두 가지예요.'] },
              { prompt: '친구 작품과 그 작품을 보고 떠오른 새 생각을 이어 보세요.', toolOptions: { mode: 'match', topic: '보고 떠오른 생각', slots: [{ id: 's1', label: '전등을 단 준호 자동차' }, { id: 's2', label: '물 구멍을 낸 서아 화분' }, { id: 's3', label: '발을 넓힌 민지 로봇' }], cards: ['내 로봇 눈에도 불빛을 달래', '내 점토 컵 바닥에도 구멍을 내 꽃을 심을래', '내 종이 인형도 발을 넓혀 세울래'] },
                target: { match: { s1: '내 로봇 눈에도 불빛을 달래', s2: '내 점토 컵 바닥에도 구멍을 내 꽃을 심을래', s3: '내 종이 인형도 발을 넓혀 세울래' } }, difficulty: 0.2,
                hints: ['친구 작품에서 바꾸거나 보탠 곳이 무엇인지 먼저 찾아요.', '전등은 불빛, 물 구멍은 구멍, 넓은 발은 발로 이어져요.', '전등-불빛, 물 구멍-구멍 내 꽃 심기, 넓힌 발-발을 넓혀 세우기로 이어요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 교실 작품 둘러보기', minutes: 17, tool: 'emotion',
            teacher: '반을 둘로 나눈다. 7분 동안 1~3모둠은 작품 옆에서 설명하고, 나머지는 둘러보며 작품마다 질문을 하나씩 한다. 종이 울리면 바꾼다. 둘러본 뒤 상황 문항 두 개를 함께 풀며 "친구가 \'이게 뭐야?\'라고 하면 기분이 어떨까요? 그래도 어떻게 하면 좋을까요?"를 묻는다. 비슷한 작품을 보고 따라 했다고 다투는 일이 생기면 같은 점과 다른 점을 말하게 한다.',
            task: '교실 작품을 둘러보며 묻고 설명하고, 둘러볼 때 생긴 일에 알맞게 대처해요.',
            levels: MOOD_LV,
            items: [
              { prompt: '7분 동안 설명하고 7분 동안 둘러보며 작품마다 질문을 하나씩 했으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '하준이가 서아 작품을 보고 "이게 뭐야?"라고 했어요. 서아는 어떻게 할까요?', toolOptions: { mode: 'branch', who: '서아', feeling: '속상함', situation: '서아가 만든 방울 화분을 보고 하준이가 "이게 뭐야?"라고 물었어요.', choices: [
                { id: 'tell', text: '이름과 쓰임을 다시 설명해 줘요', result: '하준이가 "꽃을 키우는 화분이구나!" 하고 알게 돼요.', mood: '뿌듯함' },
                { id: 'mad', text: '"그것도 몰라?" 하고 화를 내요', result: '하준이도 속상하고 작품은 여전히 몰라요.', mood: '화남', why: '하준이는 정말 몰라서 물었을지도 몰라요.' },
                { id: 'hide', text: '작품을 가방에 넣어 버려요', result: '아무도 서아 작품을 볼 수 없어요.', mood: '속상함', why: '작품을 숨기면 친구가 알 수 있을까요?' }] }, target: { choice: 'tell' }, difficulty: 0.1 },
              { prompt: '민지 작품이 내 작품과 아주 비슷해요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '나', feeling: '놀람', situation: '둘러보다 보니 민지의 상자 로봇이 내 상자 로봇과 아주 비슷해요.', choices: [
                { id: 'blame', text: '"내 거 따라 했지?" 하고 따져요', result: '민지가 속상해하고 둘 다 기분이 상해요.', mood: '화남', why: '같은 생각을 따로 떠올렸을 수도 있어요.' },
                { id: 'compare', text: '같은 점과 다른 점을 찾아 서로 말해요', result: '서로의 로봇에서 해 볼 새 생각을 얻어요.', mood: '신남' }] }, target: { choice: 'compare' }, difficulty: 0.15,
                conclude: '비슷한 작품끼리 견주면 같은 점과 다른 점에서 새 생각이 떠올라요.' },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 둘러보며 내 작품에 보태고 싶은 새 생각이 떠오른 사람?" 두세 명이 \'누구 작품을 보고 → 내 작품에 무엇을\' 말한다. 새 생각은 활동지에 적어 기록장에 붙인다. 다음 시간에는 내가 없어도 작품을 알 수 있게 안내 카드를 만든다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '이렇게 물어요', slots: [{ id: 'e1', label: '누구를 위한 것인지 궁금해요' }, { id: 'e2', label: '어떻게 붙였는지 궁금해요' }], cards: ['누구에게 주려고 만들었어?', '무엇으로 붙였어?'] }, prompt: '궁금한 것과 알맞은 질문을 이어 보세요.', target: { match: { e1: '누구에게 주려고 만들었어?', e2: '무엇으로 붙였어?' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '친구 작품을 보고 떠오른 새 생각은 어느 것일까요?', options: ['서아 화분처럼 내 컵에도 받침을 달래', '서아 화분이 예뻐'], answer: 0, difficulty: 0.2, explain: '새 생각에는 내 작품에서 해 볼 일이 들어 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '작품 둘러보기',
      items: [
        { type: 'table', prompt: '둘러본 작품과 내가 한 질문을 쓰세요.', columns: ['누구 작품', '내가 한 질문', '들은 대답'], rows: 2 },
        { type: 'blank', prompt: '새로 떠오른 생각을 쓰세요.', text: '______ 작품처럼 내 작품에도 ______을 해 볼래요.', answer: '예: 하준 / 클립 끼우기' },
        { type: 'choice', prompt: '바꾼 곳이 궁금할 때 알맞은 질문에 ○ 하세요.', options: ['만들다가 바꾼 곳이 있어?', '이거 언제 다 해?'], answer: '만들다가 바꾼 곳이 있어?' },
        { type: 'short', prompt: '친구가 내 작품에 한 질문을 하나 쓰세요.' },
      ],
      easy: {
        note: '무엇으로? 무엇을 할 수 있어? 바꾼 곳은?',
        items: [
          { type: 'choice', prompt: '재료가 궁금할 때 하는 말에 ○ 하세요.', options: ['무엇으로 만들었어?', '못 만들었네'], answer: '무엇으로 만들었어?' },
          { type: 'short', prompt: '가장 좋았던 친구 작품 이름을 쓰세요.' },
          { type: 'draw', prompt: '그 작품을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '질문 카드가 놓을 때마다 맞는지 보이고, 상황 문항도 고르면 바로 결과를 보여요.',
      base: '질문과 새 생각을 잇고, 둘러보기에서 질문을 하나씩 해요.',
      challenge: '흉보는 말 함정 카드를 골라내고, 둘러보기에서 질문을 두 개씩 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 둘러보기가 놀이처럼 흐트러진다 → 작품 하나에 질문 하나를 지키게 하고 종으로 시간을 알린다. ② "예뻐"만 말하고 새 생각을 못 꺼낸다 → "그걸 보니 내 작품에 무엇을 해 보고 싶어요?"를 묻는다. ③ 작품을 만지다 망가뜨린다 → 둘러보는 사람은 눈으로만 보고, 들어 보이는 것은 주인만 한다.',
  }));

  lessons.push(L(47, {
    title: '내가 없어도 알 수 있게 작품 안내 카드 만들기',
    objective: '이름·재료·쓰임·바꾼 곳을 담은 작품 안내 카드를 만들어, 내가 설명하지 않아도 작품을 알 수 있게 전시할 수 있다.',
    illustration: ART('a row of student-made objects on a classroom shelf, each with a small folded paper label card, a parent and a child reading one card together', '작품 안내 카드', [
      { motif: 'flower', x: 100, y: 228, color: 'peach' }, { motif: 'tree', x: 400, y: 214 }, { motif: 'star', x: 120, y: 84, s: 0.5 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"우리 작품을 복도에 전시하면 다른 반 친구와 가족이 볼 거예요. 그때 우리가 옆에서 설명해 줄 수 있을까요?" 반응을 기다린다("수업 중이라 못 해요"). "그래서 미술관에는 작품 옆에 작은 안내 카드가 있어요." 시연 단추로 안내 카드의 \'이름\' 칸이 채워지는 모습을 보여 준다.',
        student: '내 작품 안내 카드에 꼭 들어갈 것을 떠올려 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '작품 안내 카드', slots: [{ id: 's1', label: '이름' }], cards: ['번쩍 자동차', '오늘 점심 반찬'], shuffle: false }, sequence: [{ match: { s1: '번쩍 자동차' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 안내 카드에 쓸 말 고르고 내 카드 쓰기', minutes: 15, tool: 'mindmap',
            teacher: '"안내 카드는 작으니 작품을 알게 해 주는 말만 써요." 전화번호나 사는 곳처럼 나를 알려 주는 정보는 쓰지 않는다는 것을 꼭 짚는다(만든 사람은 \'2학년 ○반\'까지만 쓴다). 두 문항을 푼 뒤 반으로 접은 도화지에 내 안내 카드를 쓰게 한다(8분). 쓴 카드는 짝이 읽어 보고 빠진 칸이 있는지 알려 준다.',
            task: '안내 카드에 쓸 말을 골라 칸에 맞게 넣고, 내 작품 안내 카드를 써요.',
            levels: CARD_LV,
            items: [
              { prompt: '민지의 날개 우산 안내 카드예요. 카드에 쓸 말과 쓰지 않을 말로 나누어 보세요.', toolOptions: { topic: '날개 우산 안내 카드', slots: ['카드에 써요', '쓰지 않아요'], cards: ['이름: 날개 우산', '재료: 색종이와 빨대', '민지네 집 전화번호', '오늘 아침 먹은 반찬'] },
                target: { sort: { '카드에 써요': ['이름: 날개 우산', '재료: 색종이와 빨대'], '쓰지 않아요': ['민지네 집 전화번호', '오늘 아침 먹은 반찬'] } }, difficulty: 0.15,
                levels: { challenge: { prompt: '민지의 날개 우산 안내 카드예요. 카드에 쓸 말과 쓰지 않을 말로 모두 나누어 보세요.', toolOptions: { cards: ['이름: 날개 우산', '재료: 색종이와 빨대', '쓰임: 비 오는 날 할머니께 날아가요', '민지네 집 전화번호', '민지네 집 주소', '오늘 아침 먹은 반찬'] }, target: { sort: { '카드에 써요': ['이름: 날개 우산', '재료: 색종이와 빨대', '쓰임: 비 오는 날 할머니께 날아가요'], '쓰지 않아요': ['민지네 집 전화번호', '민지네 집 주소', '오늘 아침 먹은 반찬'] } } } },
                hints: ['그 말이 작품을 알게 해 주나요, 아니면 다른 것을 알려 주나요?', '전화번호와 주소는 나를 알려 주는 정보라 전시 카드에 쓰지 않아요.', '이름과 재료는 쓰고, 전화번호와 아침 반찬은 쓰지 않아요.'] },
              { prompt: '준호의 작품 안내 카드 칸에 알맞은 말을 이어 보세요.', toolOptions: { mode: 'match', topic: '번쩍 자동차 안내 카드', slots: [{ id: 's1', label: '이름' }, { id: 's2', label: '재료' }, { id: 's3', label: '쓰임' }, { id: 's4', label: '바꾼 곳' }], cards: ['번쩍 자동차', '빈 상자, 병뚜껑, 점토', '밤길을 불 켜고 달려요', '바퀴를 큰 것으로 바꿨어요'] },
                target: { match: { s1: '번쩍 자동차', s2: '빈 상자, 병뚜껑, 점토', s3: '밤길을 불 켜고 달려요', s4: '바퀴를 큰 것으로 바꿨어요' } }, difficulty: 0.2,
                levels: { easy: { prompt: '준호의 작품 안내 카드 두 칸에 알맞은 말을 이어 보세요.', toolOptions: { slots: [{ id: 's1', label: '이름' }, { id: 's2', label: '재료' }], cards: ['번쩍 자동차', '빈 상자, 병뚜껑, 점토'] }, target: { match: { s1: '번쩍 자동차', s2: '빈 상자, 병뚜껑, 점토' } } } },
                hints: ['칸 이름(이름, 재료, 쓰임, 바꾼 곳)을 하나씩 읽고 그 물음에 답하는 말을 찾아요.', '재료는 무엇으로 만들었는지, 쓰임은 무엇을 하는지 알려 줘요.', '이름-번쩍 자동차, 재료-상자·병뚜껑·점토, 쓰임-밤길을 달려요, 바꾼 곳-큰 바퀴예요.'] },
              { prompt: '반으로 접은 도화지에 내 작품 안내 카드(이름, 재료, 쓰임, 바꾼 곳)를 쓰고 짝이 빠진 칸이 없는지 보아 주었으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 작은 전시회 열기', minutes: 12, tool: 'story',
            teacher: '"전시회도 차례가 있어요." 차례를 정한 뒤 작품과 안내 카드를 책상에 놓는다. 이번에는 작품 주인이 말하지 않는다. 짝이 내 안내 카드만 읽고 내 작품의 쓰임을 말해 보게 한다. 짝이 맞게 말하면 안내 카드가 제 일을 한 것이고, 틀리면 무엇을 고쳐 쓸지 정한다.',
            task: '전시회 차례를 정하고, 안내 카드만으로 작품을 알 수 있는지 짝과 시험해요.',
            levels: CARD_LV,
            items: [
              { prompt: '작은 전시회를 여는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['작품과 안내 카드를 책상에 놓아요', '친구들이 둘러보며 안내 카드를 읽어요', '궁금한 것을 쪽지에 써서 붙여요', '쪽지를 읽고 답을 써 줘요'] },
                target: { order: ['작품과 안내 카드를 책상에 놓아요', '친구들이 둘러보며 안내 카드를 읽어요', '궁금한 것을 쪽지에 써서 붙여요', '쪽지를 읽고 답을 써 줘요'] }, difficulty: 0.2,
                levels: { easy: { prompt: '작은 전시회를 여는 차례대로 세 장 놓아 보세요.', toolOptions: { cards: ['작품과 안내 카드를 책상에 놓아요', '친구들이 둘러보며 안내 카드를 읽어요', '궁금한 것을 쪽지에 써서 붙여요'] }, target: { order: ['작품과 안내 카드를 책상에 놓아요', '친구들이 둘러보며 안내 카드를 읽어요', '궁금한 것을 쪽지에 써서 붙여요'] } } },
                hints: ['작품이 놓여 있어야 둘러볼 수 있어요. 맨 처음을 먼저 찾아요.', '쪽지는 읽고 궁금한 것이 생긴 다음에 써요. 답은 쪽지가 붙은 다음이에요.', '놓기 → 읽기 → 쪽지 붙이기 → 답 쓰기 차례예요.'] },
              { prompt: '전시회에서 지킬 일만 골라 보세요.', toolOptions: { mode: 'pick', basket: '전시회 약속', cards: ['작품은 눈으로만 봐요', '쪽지는 친절한 말로 써요', '작품을 들어 흔들어 봐요', '마음에 드는 안내 카드를 떼어 가요'] },
                target: { pick: ['작품은 눈으로만 봐요', '쪽지는 친절한 말로 써요'] }, difficulty: 0.15,
                hints: ['그렇게 하면 작품과 주인에게 어떤 일이 생길지 떠올려요.', '흔들거나 떼어 가면 작품과 카드가 망가지거나 없어져요.', '눈으로만 보기, 친절한 말로 쪽지 쓰기 두 가지예요.'] },
              { prompt: '짝이 내 안내 카드만 읽고 작품의 쓰임을 말해 보았으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"짝이 안내 카드만 읽고 내 작품을 맞게 알았나요?" 틀리게 안 경우 무엇을 더 쓰면 좋을지 두세 명의 생각을 듣는다. 고친 안내 카드는 작품과 함께 복도에 전시한다. 작품과 카드를 집에 가져가면 가족에게 카드를 먼저 읽게 한 뒤 소개해 보라고 안내한다. 다음 시간에는 단원 전체를 돌아본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '귓속말 전화기 안내 카드', slots: [{ id: 'e1', label: '재료' }, { id: 'e2', label: '쓰임' }], cards: ['휴지 심과 털실', '멀리 있는 친구에게 귓속말을 전해요'] }, prompt: '안내 카드 칸에 알맞은 말을 이어 보세요.', target: { match: { e1: '휴지 심과 털실', e2: '멀리 있는 친구에게 귓속말을 전해요' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '전시회 안내 카드에 쓰면 안 되는 것은?', options: ['작품 이름', '우리 집 주소'], answer: 1, difficulty: 0.1, explain: '주소와 전화번호는 나를 알려 주는 정보라 여러 사람이 보는 곳에 쓰지 않아요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '작품 안내 카드',
      items: [
        { type: 'table', prompt: '내 작품 안내 카드를 쓰세요.', columns: ['칸', '쓸 말'], cells: [['이름', ''], ['재료', ''], ['쓰임', ''], ['바꾼 곳', '']] },
        { type: 'choice', prompt: '안내 카드에 쓰지 않는 것에 ○ 하세요.', options: ['재료', '전화번호'], answer: '전화번호' },
        { type: 'short', prompt: '짝이 내 카드만 읽고 말한 내 작품의 쓰임을 쓰세요.' },
        { type: 'short', prompt: '안내 카드에서 고쳐 쓴 곳이 있으면 쓰세요.' },
      ],
      easy: {
        note: '이름, 재료, 쓰임',
        items: [
          { type: 'short', prompt: '내 작품 이름을 쓰세요.' },
          { type: 'short', prompt: '내 작품의 쓰임을 쓰세요.' },
          { type: 'choice', prompt: '전시회에서 작품은 어떻게 볼까요?', options: ['눈으로만 봐요', '들어 흔들어 봐요'], answer: '눈으로만 봐요' },
        ],
      },
    },
    differentiation: {
      easy: '안내 카드 두 칸(이름, 재료)만 잇고, 차례 카드는 세 장이에요.',
      base: '네 칸 카드를 잇고, 전시 차례 네 장을 놓아요.',
      challenge: '여섯 장에서 개인 정보 카드를 모두 골라내요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 안내 카드에 자기 이름·전화번호를 쓰려 한다 → 전시는 여러 사람이 본다고 짚고 \'2학년 ○반\'까지만 쓰게 한다. ② 카드에 "멋져요"만 쓴다 → 칸 이름 네 개를 먼저 적어 둔 틀을 준다. ③ 전시 중 작품을 만진다 → 주인만 들어 보일 수 있다는 약속을 다시 말한다. 복도 전시는 다른 반과 미리 시간을 정한다.',
  }));

  lessons.push(L(48, {
    title: '물건 단원에서 한 일을 묶고 나의 배움 돌아보기',
    objective: '단원에서 한 일을 아끼기·소리 내기·도구 모양 살피기·상상해 만들기로 묶고, 나의 배움을 스스로 평가할 수 있다.',
    illustration: ART('a classroom wall with four paper panels: a reused water bottle, a pot lid drum, a pair of scissors with arrows, and a winged umbrella, children placing stars beside the panels', '물건 단원 돌아보기', [
      { motif: 'star', x: 110, y: 84, s: 0.6 }, { motif: 'flower', x: 100, y: 228, color: 'buttercup' }, { motif: 'tree', x: 400, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"이번 단원에서 물건과 함께 무엇을 했는지 떠올려 볼까요?" 칠판에 네 칸(아껴 오래 써요, 물건으로 소리 내요, 도구 모양을 살펴요, 상상해 만들어요)을 붙인다. 학생 두세 명에게 가장 기억나는 시간을 묻고 그 일이 어느 칸인지 함께 정한다. 시연 단추로 카드 하나가 칸에 놓이는 모습을 보여 준다.',
        student: '이번 단원에서 가장 기억나는 시간을 하나 떠올려 봐요.',
        demo: { tool: 'mindmap', options: { topic: '물건 단원', slots: ['아껴 오래 써요', '상상해 만들어요'], cards: ['몽당연필에 깍지를 끼워 썼어요', '날개 달린 우산을 꾸몄어요'], shuffle: false }, sequence: [{ sort: { '아껴 오래 써요': ['몽당연필에 깍지를 끼워 썼어요'], '상상해 만들어요': ['날개 달린 우산을 꾸몄어요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 단원에서 한 일 네 묶음으로 정리하기', minutes: 14, tool: 'mindmap',
            teacher: '"이 일을 할 때 우리가 물건으로 무엇을 했나요? 아꼈나요, 소리를 냈나요, 모양을 살폈나요, 새로 만들었나요?" 한 카드씩 이 질문으로 가른다. 정리한 뒤 기록장·활동지·작품을 다시 꺼내 보며 네 묶음마다 내가 한 일 하나씩을 활동지 표에 쓰게 한다.',
            task: '단원에서 한 일을 네 묶음으로 나누고, 내가 한 일을 묶음마다 하나씩 써요.',
            levels: CARD_LV,
            items: [
              { prompt: '이번 단원에서 한 일을 네 묶음으로 나누어 보세요.', toolOptions: { topic: '물건 단원', slots: ['아껴 오래 써요', '물건으로 소리 내요', '도구 모양을 살펴요', '상상해 만들어요'], cards: ['찢어진 책을 테이프로 고쳤어요', '냄비 뚜껑을 두드려 소리를 냈어요', '가위 손잡이에 왜 구멍이 있는지 살폈어요', '상자 자동차를 만들고 시험했어요'] },
                target: { sort: { '아껴 오래 써요': ['찢어진 책을 테이프로 고쳤어요'], '물건으로 소리 내요': ['냄비 뚜껑을 두드려 소리를 냈어요'], '도구 모양을 살펴요': ['가위 손잡이에 왜 구멍이 있는지 살폈어요'], '상상해 만들어요': ['상자 자동차를 만들고 시험했어요'] } }, difficulty: 0.15,
                levels: { easy: { prompt: '이번 단원에서 한 일을 두 묶음으로 나누어 보세요.', toolOptions: { slots: ['아껴 오래 써요', '상상해 만들어요'], cards: ['찢어진 책을 테이프로 고쳤어요', '빈 교실의 불을 껐어요', '상자 자동차를 만들고 시험했어요', '세상에 없는 물건을 상상해 꾸몄어요'] }, target: { sort: { '아껴 오래 써요': ['찢어진 책을 테이프로 고쳤어요', '빈 교실의 불을 껐어요'], '상상해 만들어요': ['상자 자동차를 만들고 시험했어요', '세상에 없는 물건을 상상해 꾸몄어요'] } } },
                  challenge: { prompt: '이번 단원에서 한 일을 네 묶음으로 모두 나누어 보세요.', toolOptions: { cards: ['찢어진 책을 테이프로 고쳤어요', '빈 교실의 불을 껐어요', '냄비 뚜껑을 두드려 소리를 냈어요', '고무줄을 튕겨 높은 소리를 찾았어요', '가위 손잡이에 왜 구멍이 있는지 살폈어요', '국자 머리가 왜 오목한지 살폈어요', '상자 자동차를 만들고 시험했어요', '세상에 없는 물건을 상상해 꾸몄어요'] }, target: { sort: { '아껴 오래 써요': ['찢어진 책을 테이프로 고쳤어요', '빈 교실의 불을 껐어요'], '물건으로 소리 내요': ['냄비 뚜껑을 두드려 소리를 냈어요', '고무줄을 튕겨 높은 소리를 찾았어요'], '도구 모양을 살펴요': ['가위 손잡이에 왜 구멍이 있는지 살폈어요', '국자 머리가 왜 오목한지 살폈어요'], '상상해 만들어요': ['상자 자동차를 만들고 시험했어요', '세상에 없는 물건을 상상해 꾸몄어요'] } } } },
                hints: ['그 일을 할 때 물건으로 무엇을 했는지 물어요. 아꼈나요, 소리를 냈나요, 모양을 살폈나요, 새로 만들었나요?', '고치기는 아끼기, 두드리기는 소리, \'왜 이런 모양일까\'는 도구 모양, 만들기는 상상해 만들기예요.', '책 고치기-아끼기, 냄비 뚜껑-소리, 가위 구멍-도구 모양, 상자 자동차-만들기예요.'] },
              { prompt: '37~47차시에 만들기를 한 차례대로 놓아 보세요.', toolOptions: { mode: 'order', topic: '우리가 만든 차례', cards: ['만들 것과 재료를 정했어요', '만들며 바꾼 곳을 기록했어요', '시험해 보고 조언을 들어 고쳤어요', '작품을 소개하고 전시했어요'] },
                target: { order: ['만들 것과 재료를 정했어요', '만들며 바꾼 곳을 기록했어요', '시험해 보고 조언을 들어 고쳤어요', '작품을 소개하고 전시했어요'] }, difficulty: 0.2,
                hints: ['무엇을 만들지 정해야 만들 수 있어요. 맨 처음을 먼저 찾아요.', '만든 다음에 시험하고 고쳤고, 다 고친 작품을 소개했어요.', '정하기 → 만들며 기록 → 시험·고치기 → 소개·전시 차례예요.'] },
              { prompt: '기록장과 작품을 다시 보고, 네 묶음마다 내가 한 일을 하나씩 활동지 표에 썼으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 나의 배움 돌아보기', minutes: 13, tool: 'emotion',
            teacher: '"이건 시험이 아니에요. 내가 한 만큼 솔직하게 고르면 돼요. 모두 다른 칸을 골라도 괜찮아요." 두 눈금을 고른 뒤, 앞으로 집에서 이어 할 일 하나를 활동지에 쓰고 짝에게 말한다. 낮은 칸을 고른 학생에게는 "그럼 다음에는 무엇부터 해 볼까요?"라고 묻는다.',
            task: '내가 한 만큼 눈금을 솔직하게 고르고, 앞으로 이어 할 일을 하나 정해요.',
            levels: MOOD_LV,
            items: [
              { prompt: '이번 단원 동안 나는 물건을 얼마나 아껴 오래 썼나요? 솔직하게 골라 보세요. 정답은 없어요.', toolOptions: { mode: 'scale', situation: '이번 단원 동안 내 물건을 고쳐 쓰고, 다시 쓰고, 아꼈어요.', feeling: '뿌듯함', ask: '내가 한 만큼 솔직하게 골라요', scaleLabels: { 1: '조금', 5: '아주 많이' } }, target: { level: 'any' }, difficulty: 0.05 },
              { prompt: '내 작품을 친구에게 얼마나 잘 설명했나요? 솔직하게 골라 보세요. 정답은 없어요.', toolOptions: { mode: 'scale', situation: '내 작품의 이름, 재료, 쓰임, 바꾼 곳을 친구에게 설명했어요.', feeling: '뿌듯함', ask: '내가 한 만큼 솔직하게 골라요', scaleLabels: { 1: '조금', 5: '아주 잘' } }, target: { level: 'any' }, difficulty: 0.05 },
              { prompt: '집에서 이어 할 일 하나를 활동지에 쓰고 짝에게 말했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"이번 단원에서 물건을 바라보는 눈이 어떻게 달라졌나요?" 두세 명의 대답을 듣는다(버리기 전에 다시 생각해요, 물건 모양에 까닭이 있어요 등). 작품과 기록장은 집에 가져가 가족에게 안내 카드와 함께 소개하게 한다. 출구 문항을 스스로 푼 뒤 단원을 마친다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '물건 단원', slots: ['아껴 오래 써요', '도구 모양을 살펴요'], cards: ['뒷면이 깨끗한 종이로 메모 수첩을 만들었어요', '컵에 왜 손잡이가 달렸는지 살폈어요'] }, prompt: '단원에서 한 일을 알맞은 묶음에 놓아 보세요.', target: { sort: { '아껴 오래 써요': ['뒷면이 깨끗한 종이로 메모 수첩을 만들었어요'], '도구 모양을 살펴요': ['컵에 왜 손잡이가 달렸는지 살폈어요'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '만든 것을 친구가 잘 알게 하려면 어떻게 할까요?', options: ['이름, 쓰임, 바꾼 곳을 설명해요', '보여 주기만 해요'], answer: 0, difficulty: 0.15, explain: '보기만 해서는 모르는 것이 있어서 말이나 안내 카드로 알려 줘야 해요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '물건 단원 돌아보기',
      items: [
        { type: 'table', prompt: '묶음마다 내가 한 일을 쓰세요.', columns: ['묶음', '내가 한 일'], cells: [['아껴 오래 써요', ''], ['물건으로 소리 내요', ''], ['도구 모양을 살펴요', ''], ['상상해 만들어요', '']] },
        { type: 'short', prompt: '이번 단원에서 가장 자랑스러운 일을 쓰세요.' },
        { type: 'short', prompt: '집에서 이어 할 일 하나를 쓰세요.' },
        { type: 'choice', prompt: '\'도구 모양을 살펴요\'에 들어갈 일에 ○ 하세요.', options: ['가위 손잡이에 구멍이 있는 까닭 찾기', '냄비 뚜껑 두드리기'], answer: '가위 손잡이에 구멍이 있는 까닭 찾기' },
      ],
      easy: {
        note: '아끼기 · 소리 · 도구 모양 · 만들기',
        items: [
          { type: 'short', prompt: '가장 재미있었던 시간을 쓰세요.' },
          { type: 'draw', prompt: '이번 단원에서 만든 것을 그리세요.' },
          { type: 'short', prompt: '집에서 해 볼 일 하나를 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '두 묶음으로만 나누고, 놓을 때마다 맞는지 보여요. 마음 눈금은 세 칸이에요.',
      base: '네 묶음으로 나누고 만들기 차례를 놓아요.',
      challenge: '여덟 장을 네 묶음으로 모두 나누어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 만들기와 도구 모양 살피기를 헷갈린다 → "새로 만들었나요, 있는 도구를 살폈나요?"로 가른다. ② 자기 평가에서 모두 가장 높은 칸만 고른다 → 정답이 없고 다음에 할 일을 정하는 데 쓰는 것이라 다시 말한다. ③ 기록장을 잃어버렸다 → 활동지와 작품만 보고 떠올려도 된다고 한다.',
  }));

  // ── 차시 끝 ──

  PaperLessons.registerUnit({
    id: 'g2-int-2-07', schema: 'edu-unit.v1', catalogUnit: UNIT,
    grade: 2, subject: '통합교과', unitTitle: TITLE,
    flow: '1~12차시(바른 생활)는 가방과 교실 물건을 오래 쓰는 것과 한 번 쓰는 것으로 가르는 데서 출발해, 다시 쓰고 아끼고 고쳐 쓰는 실천을 하고 그 기록을 그래프로 세어 이어 할 일을 정한다. 13~24차시(즐거운 생활)는 생활 물건에서 소리를 모아 나누고, 고른 물건으로 소리를 내 이야기를 꾸민 뒤 마음에 드는 소리를 발표하고 친구 소리를 듣는다. 25~36차시(슬기로운 생활)는 생활도구를 보며 "왜 이런 모양일까"를 묻고, 모양과 하는 일을 이어 살핀 다음 누군가를 위해 모양을 바꾼 도구를 꾸며 설명한다. 37~44차시는 만들 것과 재료를 정하고 계획을 세운 뒤, 실제로 만들며 바꾼 곳을 기록하고 시험 결과를 그래프로 견주고 친구 조언으로 한 번 더 고친다. 45~48차시는 보기만 해서는 모르는 것을 넣어 작품을 설명하고, 둘러보기·안내 카드 전시로 넓힌 다음 단원 전체를 네 묶음으로 정리하고 스스로 평가한다.',
    refs: {},
    lessons: lessons,
  });
})();
