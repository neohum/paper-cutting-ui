/* 1학년 2학기 통합교과 7. 상상 — 48차시
 * 1~12차시 [슬기 생활] 옛날·지금·앞으로: 달라진 것에 물음 만들기(1~4) → 옛날과 지금 자료 견주기(5~8) → 달라진 차례 설명·앞으로 상상해 꾸미기(9~12)
 * 13~24차시 [슬기 생활] 배움 상상: 1학년에 배운 것 고르기·더 배우고 싶은 것(13~16) → 배운 것과 배울 것 잇기(17~20) → 이어 붙인 것 보이며 앞으로의 배움 말하기(21~24)
 * 25~36차시 [바른/건강] 움직임 표현: 마음과 몸·높이·빠르기 탐색(25~28) → 높이·빠르기를 바꾸어 여덟 박 움직임 만들기(29~32) → 나누고 고쳐 다시 하기(33~36)
 * 37~48차시 [슬기 생활] 관심 주제 조사: 겪은 일에서 주제와 물음 정하기(37~40) → 여러 곳에서 답 모으고 물음별로 나누기(41~44) → 묶어 발표하고 못 찾은 물음 남기기(45~48)
 * 성취기준: units-map 단원 목록이 비어 있고 미확인(standardsVerified:false)이라 모든 차시 standards: [] (지어내지 않는다).
 * 예문·이야기는 모두 직접 지었다. 학생 이름은 가명(민지·준호·하준·서아)만 쓴다. 옛날 물건은 널리 알려진 생활 도구만 쓴다.
 */
(function () {
  var UNIT = 'g1-통합교과-2학기-7';
  var TITLE = '7. 상상';
  var HEAD = 'Layered paper-cut illustration of ';
  var TAIL = ', with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.';
  function two(n) { return (n < 10 ? '0' : '') + n; }
  // 차시 머리(같은 칸)를 채운다 — 차시마다 다른 내용은 x에 그대로 적는다
  function L(n, x) {
    var head = {
      id: 'g1-int-2-07-' + two(n), schema: 'edu-lesson.v1', catalog: { unit: UNIT, lesson: n },
      grade: 1, subject: '통합교과', unitTitle: TITLE,
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
  // 콜라주 단계: 쉬움은 고르개를 줄인다(문항 target에 쓰는 모양·색은 모든 단계에 남긴다)
  function COL_LV(shapes, colors) {
    return {
      easy: { shapes: shapes, colors: colors, sizes: ['m', 'l'] },
      base: { shapes: shapes.concat(['star', 'semi']).filter(function (v, i, a) { return a.indexOf(v) === i; }) },
      challenge: {},
    };
  }

  var lessons = [];

  // ───────────────────────── 1~4차시: 옛날과 지금, 달라진 것에 물음 만들기 ─────────────────────────

  lessons.push(L(1, {
    title: '옛날 물건과 지금 물건 견주며 궁금한 것 묻기',
    objective: '옛날에 많이 쓰던 물건과 요즘 쓰는 물건을 나누고, 달라진 모습이 궁금한 것을 골라 물음으로 말할 수 있다.',
    illustration: ART('an old paper oil lamp and an iron cooking pot on one side and a modern lamp and rice cooker on the other, a curious child with a question mark between them', '옛날에는 어땠을까?', [
      { motif: 'house', x: 110, y: 214, color: 'peach' }, { motif: 'house', x: 370, y: 216, color: 'sky', s: 0.9 }, { motif: 'star', x: 240, y: 90, s: 0.6 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 7,
        teacher: '"할머니, 할아버지가 여러분만 할 때는 밤에 무엇으로 불을 밝혔을까요?" 두세 명의 생각을 듣는다. "이번 단원은 \'상상\'이에요. 옛날을 살펴보고, 지금을 보고, 앞으로를 상상해요." 시연 단추로 \'호롱불\' 카드가 옛날 쪽에 놓이는 모습을 보여 준다. "옛날 물건은 지금 물건과 아무 상관이 없을까요?"라고 물어 두고 답은 활동에서 찾게 한다.',
        student: '집에서 할머니, 할아버지께 들은 옛날 이야기가 있으면 짝에게 말해 봐요.',
        demo: { tool: 'timeline', options: { mode: 'sort', axis: ['옛날', '지금'], slots: ['옛날에 많이 쓰던 것', '요즘 많이 쓰는 것'], cards: ['호롱불', '전등'], shuffle: false }, sequence: [{ sort: { '옛날에 많이 쓰던 것': ['호롱불'], '요즘 많이 쓰는 것': ['전등'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 25,
        activities: [
          {
            id: 'a1', title: '활동 1. 옛날 물건, 지금 물건 나누기', minutes: 12, tool: 'timeline',
            teacher: '"이 물건은 할머니가 어릴 때 많이 썼을까요, 요즘 우리가 많이 쓸까요?" 카드를 하나씩 소리 내어 읽는다. "가마솥은 지금도 있어요"라는 학생에게 "맞아요, 지금도 있지만 요즘 집에서 밥을 지을 때 많이 쓰는 것은 무엇일까요?"라고 \'많이\'를 짚는다.',
            task: '물건 카드를 읽고 옛날에 많이 쓰던 것과 요즘 많이 쓰는 것으로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '밥 짓는 물건과 불 밝히는 물건을 옛날과 요즘으로 나누어 보세요.', toolOptions: { mode: 'sort', axis: ['옛날', '지금'], slots: ['옛날에 많이 쓰던 것', '요즘 많이 쓰는 것'], cards: ['가마솥', '전기밥솥', '호롱불', '전등'] },
                target: { sort: { '옛날에 많이 쓰던 것': ['가마솥', '호롱불'], '요즘 많이 쓰는 것': ['전기밥솥', '전등'] } }, difficulty: 0.05 },
              { prompt: '빨래하고 물 긷는 모습을 옛날과 요즘으로 나누어 보세요.', toolOptions: { mode: 'sort', axis: ['옛날', '지금'], slots: ['옛날에 많이 쓰던 것', '요즘 많이 쓰는 것'], cards: ['빨래판에 비벼 빨기', '세탁기로 빨기', '우물에서 물 긷기', '수도꼭지 틀기'] },
                target: { sort: { '옛날에 많이 쓰던 것': ['빨래판에 비벼 빨기', '우물에서 물 긷기'], '요즘 많이 쓰는 것': ['세탁기로 빨기', '수도꼭지 틀기'] } }, difficulty: 0.1,
                levels: { challenge: { prompt: '빨래, 물 긷기, 신발을 옛날과 요즘으로 나누어 보세요.', toolOptions: { cards: ['빨래판에 비벼 빨기', '세탁기로 빨기', '우물에서 물 긷기', '수도꼭지 틀기', '짚신', '운동화'] },
                  target: { sort: { '옛날에 많이 쓰던 것': ['빨래판에 비벼 빨기', '우물에서 물 긷기', '짚신'], '요즘 많이 쓰는 것': ['세탁기로 빨기', '수도꼭지 틀기', '운동화'] } } } } },
              { prompt: '불 밝히는 물건이 바뀐 차례대로 놓아 보세요.', toolOptions: { mode: 'order', axis: ['옛날', '요즘'], cards: ['호롱불', '둥근 전구', '납작한 엘이디 전등'] },
                target: { order: ['호롱불', '둥근 전구', '납작한 엘이디 전등'] }, difficulty: 0.2,
                predict: { q: '호롱불과 전등은 서로 상관이 있을까요?', options: ['상관없어요', '호롱불이 바뀌어 전등이 됐어요'], answer: 1 },
                conclude: '밤을 밝히던 호롱불이 조금씩 바뀌어 지금의 전등이 되었어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 궁금한 것을 물음으로 만들기', minutes: 13, tool: 'mindmap',
            teacher: '"짚신과 운동화를 보니 무엇이 궁금해요?" \'궁금해요\'로 끝나는 말과 \'~까?\'로 끝나는 물음을 칠판에 나란히 적어 견주게 한다. "전화기가 좋아요"처럼 내 생각을 말하는 학생에게 "그 말 끝에 물음표를 붙이려면 어떻게 바꿀까요?"라고 되묻는다.',
            task: '옛날 것과 지금 것을 잇고, 달라진 모습을 묻는 물음을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '옛날 물건마다 바뀌어 지금 쓰는 물건을 이어 보세요.', toolOptions: { mode: 'match', topic: '무엇으로 바뀌었을까?', slots: [{ id: 's1', label: '짚신' }, { id: 's2', label: '다이얼 전화기' }, { id: 's3', label: '빨래판' }], cards: ['운동화', '휴대 전화', '세탁기'] },
                target: { match: { s1: '운동화', s2: '휴대 전화', s3: '세탁기' } }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['운동화', '휴대 전화', '세탁기', '줄넘기'] } } } },
              { prompt: '옛날과 지금이 달라진 것을 묻는 물음만 골라 보세요.', toolOptions: { mode: 'pick', basket: '좋은 물음', cards: ['옛날 전화기는 어떻게 걸었을까?', '전화기는 왜 작아졌을까?', '나는 전화기가 좋아요.', '전화기는 까만색이에요.'] },
                target: { pick: ['옛날 전화기는 어떻게 걸었을까?', '전화기는 왜 작아졌을까?'] }, difficulty: 0.15,
                hints: ['물음은 끝에 물음표가 있어요. 그리고 옛날과 지금이 어떻게 다른지 묻는지 살펴봐요.', '물음표가 없는 카드는 내 생각이나 본 것을 말한 거예요. 다시 살펴봐요.', '\'어떻게 걸었을까?\', \'왜 작아졌을까?\'처럼 달라진 까닭과 모습을 묻는 카드를 골라요.'] },
              { prompt: '물음마다 언제와 언제를 견주는지 이어 보세요.', toolOptions: { mode: 'match', topic: '언제와 언제?', slots: [{ id: 's1', label: '할머니가 어릴 때 학교와 지금 학교는 무엇이 다를까?' }, { id: 's2', label: '내가 아기 때 옷과 지금 옷은 무엇이 다를까?' }], cards: ['할머니가 어릴 때와 지금', '내가 아기 때와 지금'] },
                target: { match: { s1: '할머니가 어릴 때와 지금', s2: '내가 아기 때와 지금' } }, difficulty: 0.15,
                levels: { challenge: { prompt: '물음 세 개마다 언제와 언제를 견주는지 이어 보세요.', toolOptions: { slots: [{ id: 's1', label: '할머니가 어릴 때 학교와 지금 학교는 무엇이 다를까?' }, { id: 's2', label: '내가 아기 때 옷과 지금 옷은 무엇이 다를까?' }, { id: 's3', label: '어제 심은 씨앗은 오늘 어떻게 달라졌을까?' }], cards: ['할머니가 어릴 때와 지금', '내가 아기 때와 지금', '어제와 오늘'] },
                  target: { match: { s1: '할머니가 어릴 때와 지금', s2: '내가 아기 때와 지금', s3: '어제와 오늘' } } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 본 물건 가운데 집에 가서 더 물어보고 싶은 것은 무엇이에요?" 두세 명이 물음으로 말하게 한다. 물음표 없이 말하면 끝을 \'~까?\'로 바꾸어 다시 말하게 한다. 다음 시간에는 전화기와 사진기를 더 살펴본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'timeline', options: { mode: 'sort', axis: ['옛날', '지금'], slots: ['옛날에 많이 쓰던 것', '요즘 많이 쓰는 것'], cards: ['맷돌', '믹서', '등잔', '손전등'] }, prompt: '물건을 옛날에 많이 쓰던 것과 요즘 많이 쓰는 것으로 나누어 보세요.', target: { sort: { '옛날에 많이 쓰던 것': ['맷돌', '등잔'], '요즘 많이 쓰는 것': ['믹서', '손전등'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '옛날과 지금이 달라진 것을 묻는 물음은 무엇일까요?', options: ['옛날 신발은 무엇으로 만들었을까?', '내 신발은 파란색이에요.', '신발을 신어요.'], answer: 0, difficulty: 0.1, explain: '끝에 물음표가 있고 옛날 신발이 어땠는지 묻고 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '옛날 물건과 지금 물건',
      items: [
        { type: 'figure', wide: true, prompt: '옛날 물건과 바뀌어 지금 쓰는 물건을 선으로 이으세요.', tool: 'mindmap', figures: [{ options: { mode: 'match', topic: '무엇으로 바뀌었을까?', slots: [{ id: 's1', label: '호롱불' }, { id: 's2', label: '가마솥' }], cards: ['전기밥솥', '전등'] }, caption: '' }], answer: '호롱불-전등, 가마솥-전기밥솥' },
        { type: 'choice', prompt: '옛날에 많이 쓰던 물건에 ○ 하세요.', options: ['세탁기', '빨래판', '휴대 전화'], answer: '빨래판' },
        { type: 'blank', prompt: '물음이 되도록 빈칸에 알맞은 말을 쓰세요.', text: '옛날 전화기는 어떻게 ___?', answer: '걸었을까' },
        { type: 'short', prompt: '옛날 물건 가운데 궁금한 것을 하나 골라 물음으로 쓰세요.' },
      ],
      easy: {
        note: '할머니, 할아버지가 어릴 때를 떠올려요.',
        items: [
          { type: 'choice', prompt: '옛날에 많이 쓰던 것에 ○ 하세요.', options: ['짚신', '운동화'], answer: '짚신' },
          { type: 'choice', prompt: '물음에 ○ 하세요.', options: ['옛날 신발은 어땠을까?', '신발이 예뻐요.'], answer: '옛날 신발은 어땠을까?' },
          { type: 'draw', prompt: '궁금한 옛날 물건을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 놓으면 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '모두 놓은 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '나눌 카드가 여섯 장으로 늘고, 이을 짝에 상관없는 카드가 섞여 있어요. 물음과 견줄 때를 세 쌍 이어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 옛날 것은 지금과 아무 관계가 없다고 여긴다 → 호롱불이 전등으로 바뀐 차례처럼 \'바뀌어 이어진 것\'을 보여 준다. ② "지금도 가마솥이 있어요"처럼 \'많이\'를 놓친다 → 요즘 집에서 주로 쓰는 것을 묻는다. ③ 물음과 내 생각을 구별하지 못한다 → 끝말(~까?)과 물음표를 손가락으로 짚게 한다. 옛날 물건 실물이나 사진이 있으면 함께 보이면 좋다.',
  }));

  lessons.push(L(2, {
    title: '전화기와 사진기가 바뀐 모습에 물음 만들기',
    objective: '전화기와 사진기의 옛날과 지금 모습을 보고, 모양이나 쓰는 방법이 어떻게 달라졌는지 묻는 물음을 만들 수 있다.',
    illustration: ART('a big old paper rotary telephone and a boxy film camera next to a small smartphone, a child holding a speech bubble with a question mark', '무엇이 달라졌을까?', [
      { motif: 'house', x: 120, y: 214, color: 'lavender' }, { motif: 'tree', x: 380, y: 214 }, { motif: 'bird', x: 300, y: 80 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"옛날 전화기는 숫자 판을 손가락으로 빙 돌려서 걸었어요." 손가락으로 원을 그리며 돌리는 흉내를 함께 해 본다. "요즘 전화기는 어떻게 걸어요?" 누르는 흉내와 견준다. 시연 단추로 물음 카드가 \'쓰는 방법\' 가지로 들어가는 모습을 보여 준다.',
        student: '숫자 판을 돌리는 흉내와 화면을 누르는 흉내를 번갈아 해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '전화기', slots: ['모양이 궁금해요', '쓰는 방법이 궁금해요'], cards: ['옛날 전화기는 어떻게 걸었을까?', '옛날 전화기는 얼마나 컸을까?'], shuffle: false }, sequence: [{ sort: { '모양이 궁금해요': ['옛날 전화기는 얼마나 컸을까?'], '쓰는 방법이 궁금해요': ['옛날 전화기는 어떻게 걸었을까?'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 궁금한 것 나누어 보기', minutes: 13, tool: 'mindmap',
            teacher: '"이 물음은 생김새를 묻나요, 쓰는 방법을 묻나요?" \'얼마나 컸을까, 무슨 색이었을까\'는 생김새, \'어떻게 걸었을까, 어떻게 찍었을까\'는 쓰는 방법이라는 것을 함께 찾는다. 물음 끝의 낱말을 손가락으로 짚게 한다.',
            task: '물음 카드를 읽고 모양이 궁금한 것과 쓰는 방법이 궁금한 것으로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '전화기 물음을 두 가지로 나누어 보세요.', toolOptions: { topic: '전화기', slots: ['모양이 궁금해요', '쓰는 방법이 궁금해요'], cards: ['옛날 전화기는 얼마나 무거웠을까?', '옛날 전화기는 어떻게 걸었을까?', '옛날 전화기는 무슨 색이었을까?', '옛날에는 전화를 어디에서 걸었을까?'] },
                target: { sort: { '모양이 궁금해요': ['옛날 전화기는 얼마나 무거웠을까?', '옛날 전화기는 무슨 색이었을까?'], '쓰는 방법이 궁금해요': ['옛날 전화기는 어떻게 걸었을까?', '옛날에는 전화를 어디에서 걸었을까?'] } }, difficulty: 0.15 },
              { prompt: '사진기 물음을 두 가지로 나누어 보세요.', toolOptions: { topic: '사진기', slots: ['모양이 궁금해요', '쓰는 방법이 궁금해요'], cards: ['옛날 사진기는 얼마나 컸을까?', '옛날에는 사진을 어떻게 찍었을까?', '옛날 사진기는 어떤 모양이었을까?', '찍은 사진은 어떻게 보았을까?'] },
                target: { sort: { '모양이 궁금해요': ['옛날 사진기는 얼마나 컸을까?', '옛날 사진기는 어떤 모양이었을까?'], '쓰는 방법이 궁금해요': ['옛날에는 사진을 어떻게 찍었을까?', '찍은 사진은 어떻게 보았을까?'] } }, difficulty: 0.2,
                levels: { challenge: { prompt: '사진기 물음을 나누어 보세요. 물음이 아닌 카드는 남겨요.', toolOptions: { cards: ['옛날 사진기는 얼마나 컸을까?', '옛날에는 사진을 어떻게 찍었을까?', '옛날 사진기는 어떤 모양이었을까?', '찍은 사진은 어떻게 보았을까?', '사진 찍기는 재미있어요.'] } } } },
              { prompt: '텔레비전에 대해 옛날과 지금이 달라진 것을 묻는 물음만 골라 보세요.', toolOptions: { mode: 'pick', basket: '좋은 물음', cards: ['옛날 텔레비전은 왜 두꺼웠을까?', '옛날에는 채널을 어떻게 바꾸었을까?', '텔레비전을 보고 싶어요.', '오늘 만화가 재미있었어요.'] },
                target: { pick: ['옛날 텔레비전은 왜 두꺼웠을까?', '옛날에는 채널을 어떻게 바꾸었을까?'] }, difficulty: 0.15,
                hints: ['옛날과 지금을 견주는 물음인지, 끝에 물음표가 있는지 살펴봐요.', '\'보고 싶어요\', \'재미있었어요\'는 내 마음을 말한 거예요.', '\'왜 두꺼웠을까?\', \'어떻게 바꾸었을까?\'처럼 옛날 모습을 묻는 카드를 골라요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 내 물음 완성하기', minutes: 13, tool: 'story',
            teacher: '"물음은 \'무엇이 궁금한지\'와 \'어떻게, 왜\'가 함께 있어야 해요." 빈칸에 낱말을 넣은 뒤 반드시 소리 내어 끝까지 읽게 한다. 다 만든 물음을 짝에게 묻고, 짝은 \'몰라요\'라고 해도 된다고 말해 준다. 물음은 모르는 것을 알아보려고 만드는 것이라는 것을 짚는다.',
            task: '빈칸에 알맞은 낱말 카드를 넣어 옛날과 지금을 묻는 물음을 완성해요.',
            levels: CARD_LV,
            items: [
              { prompt: '빈칸에 알맞은 낱말을 넣어 전화기 물음을 완성해 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'b1', label: '옛날 전화기는 ___ 걸었을까?' }, { id: 'b2', label: '전화기는 ___ 작아졌을까?' }], cards: ['어떻게', '왜'] },
                target: { fill: { b1: '어떻게', b2: '왜' } }, difficulty: 0.15 },
              { prompt: '사진기 물음의 빈칸에 알맞은 낱말을 넣어 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'b1', label: '옛날 사진기는 ___ 컸을까?' }, { id: 'b2', label: '옛날에는 사진을 ___ 찍었을까?' }], cards: ['얼마나', '어디에서'] },
                target: { fill: { b1: '얼마나', b2: '어디에서' } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['얼마나', '어디에서', '누가'] } } } },
              { prompt: '물음을 만드는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', slots: ['첫째', '둘째', '셋째'], cards: ['궁금한 물건을 골라요', '언제와 언제를 견줄지 정해요', '\'~까?\'로 물음을 써요'] },
                target: { order: ['궁금한 물건을 골라요', '언제와 언제를 견줄지 정해요', '\'~까?\'로 물음을 써요'] }, difficulty: 0.2,
                conclude: '궁금한 것을 고르고, 견줄 때를 정하고, 물음으로 써요.' },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"내가 만든 물음 하나를 짝에게 물어보세요." 짝이 답을 모르면 "누구에게 물어보면 알 수 있을까요?"를 함께 생각하게 한다. 출구 1번을 틀린 학생은 물음 끝말을 다시 짚어 보게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '라디오', slots: ['모양이 궁금해요', '쓰는 방법이 궁금해요'], cards: ['옛날 라디오는 얼마나 컸을까?', '옛날 라디오는 어떻게 켰을까?'] }, prompt: '라디오 물음을 두 가지로 나누어 보세요.', target: { sort: { '모양이 궁금해요': ['옛날 라디오는 얼마나 컸을까?'], '쓰는 방법이 궁금해요': ['옛날 라디오는 어떻게 켰을까?'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '\'옛날 사진기는 ___ 찍었을까?\' 빈칸에 알맞은 말은?', options: ['어떻게', '예쁘게 좋아요', '사진기'], answer: 0, difficulty: 0.15, explain: '\'어떻게 찍었을까?\'로 쓰는 방법을 묻는 물음이 돼요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '전화기와 사진기에 묻기',
      items: [
        { type: 'figure', wide: true, prompt: '빈칸에 알맞은 낱말을 넣어 물음을 완성하세요.', tool: 'story', figures: [{ options: { mode: 'fill', slots: [{ id: 'b1', label: '옛날 전화기는 ___ 걸었을까?' }, { id: 'b2', label: '전화기는 ___ 작아졌을까?' }], cards: ['어떻게', '왜'] }, caption: '' }], answer: '어떻게, 왜' },
        { type: 'choice', prompt: '쓰는 방법을 묻는 물음에 ○ 하세요.', options: ['옛날 사진기는 무슨 색이었을까?', '옛날에는 사진을 어떻게 찍었을까?'], answer: '옛날에는 사진을 어떻게 찍었을까?' },
        { type: 'table', prompt: '전화기에 대해 궁금한 것을 쓰세요.', columns: ['모양이 궁금해요', '쓰는 방법이 궁금해요'], rows: 2 },
        { type: 'short', prompt: '집에 가서 어른께 여쭐 물음을 하나 쓰세요.' },
      ],
      easy: {
        note: '물음은 끝이 \'~까?\'로 끝나요.',
        items: [
          { type: 'choice', prompt: '물음에 ○ 하세요.', options: ['옛날 전화기는 얼마나 컸을까?', '전화기가 좋아요.'], answer: '옛날 전화기는 얼마나 컸을까?' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '옛날 전화기는 ___ 걸었을까?', answer: '어떻게' },
          { type: 'draw', prompt: '옛날 전화기를 상상해 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 빈칸 낱말은 두 장만 나와요.',
      base: '모두 놓은 뒤 확인을 눌러요. 만든 물음을 소리 내어 읽어요.',
      challenge: '물음이 아닌 카드와 남는 낱말 카드가 섞여 있어 골라내야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① \'얼마나\'와 \'어떻게\'를 같은 것으로 여긴다 → 크기·무게·색은 생김새, 거는 법·찍는 법은 쓰는 방법이라고 묶어 준다. ② 물음 대신 "전화기 좋아요"처럼 느낌을 말한다 → 끝말을 \'~까?\'로 바꾸게 한다. ③ 답을 모르면 물음을 만들 수 없다고 여긴다 → 모르니까 묻는 것이라고 말해 준다. 옛날 전화기·사진기 사진은 교사가 공공 기록물이나 박물관 누리집에서 골라 보여 준다.',
  }));

  lessons.push(L(3, {
    title: '할머니 어릴 적 집과 우리 집 견줄 물음 만들기',
    objective: '할머니가 어릴 때 집과 지금 우리 집을 견주는 물음을 만들고, 누구에게 물어볼지 정할 수 있다.',
    illustration: ART('a thatched-roof paper cottage with a well and a fireplace kitchen beside a modern apartment building, a grandmother and a child holding hands between them', '옛날 집은 어땠을까?', [
      { motif: 'house', x: 110, y: 214, color: 'buttercup' }, { motif: 'house', x: 370, y: 210, color: 'sky', s: 1.1 }, { motif: 'tree', x: 240, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"우리 집은 추울 때 무엇을 켜서 따뜻하게 하나요?" 보일러라는 대답을 받은 뒤 "할머니가 어릴 때는 아궁이에 나무를 때서 방을 데웠대요"라고 들려준다. 시연 단추로 \'아궁이에 불 때기\' 카드가 옛날 칸에 놓이는 모습을 보여 준다. 오늘은 집을 견주는 물음을 만들어 집에서 여쭈어 볼 것이라고 알린다.',
        student: '우리 집에서 따뜻하게 하는 것, 밥 짓는 곳, 씻는 곳을 떠올려 말해 봐요.',
        demo: { tool: 'timeline', options: { mode: 'sort', axis: ['옛날', '지금'], slots: ['할머니 어릴 적 집', '지금 우리 집'], cards: ['아궁이에 불 때기', '보일러 켜기'], shuffle: false }, sequence: [{ sort: { '할머니 어릴 적 집': ['아궁이에 불 때기'], '지금 우리 집': ['보일러 켜기'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 옛날 집과 지금 집 나누기', minutes: 12, tool: 'timeline',
            teacher: '"이 모습은 할머니 어릴 적 집일까요, 지금 우리 집일까요?" 카드마다 몸으로 흉내를 내게 한다(두레박 끌어올리기, 수도꼭지 틀기). "우리 시골 할머니 집에는 아직 아궁이가 있어요"라는 학생의 말은 반갑게 받고, 옛날 모습이 지금까지 남아 있는 것이라고 짚는다.',
            task: '집 모습 카드를 읽고 할머니 어릴 적 집과 지금 우리 집으로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '집 모습 카드를 할머니 어릴 적 집과 지금 우리 집으로 나누어 보세요.', toolOptions: { mode: 'sort', axis: ['옛날', '지금'], slots: ['할머니 어릴 적 집', '지금 우리 집'], cards: ['짚으로 덮은 지붕', '엘리베이터 타기', '마당 우물', '부엌 수도꼭지'] },
                target: { sort: { '할머니 어릴 적 집': ['짚으로 덮은 지붕', '마당 우물'], '지금 우리 집': ['엘리베이터 타기', '부엌 수도꼭지'] } }, difficulty: 0.1 },
              { prompt: '방과 부엌 모습을 할머니 어릴 적 집과 지금 우리 집으로 나누어 보세요.', toolOptions: { mode: 'sort', axis: ['옛날', '지금'], slots: ['할머니 어릴 적 집', '지금 우리 집'], cards: ['장작 때는 아궁이', '가스레인지', '문에 바른 한지', '유리창'] },
                target: { sort: { '할머니 어릴 적 집': ['장작 때는 아궁이', '문에 바른 한지'], '지금 우리 집': ['가스레인지', '유리창'] } }, difficulty: 0.2,
                levels: { challenge: { prompt: '방과 부엌 모습을 나누어 보세요. 집과 상관없는 카드는 남겨요.', toolOptions: { cards: ['장작 때는 아궁이', '가스레인지', '문에 바른 한지', '유리창', '운동장 철봉'] } } } },
              { prompt: '방을 데우는 방법이 바뀐 차례대로 놓아 보세요.', toolOptions: { mode: 'order', axis: ['옛날', '요즘'], cards: ['아궁이에 장작 때기', '연탄 넣기', '보일러 단추 누르기'] },
                target: { order: ['아궁이에 장작 때기', '연탄 넣기', '보일러 단추 누르기'] }, difficulty: 0.25,
                conclude: '방을 데우는 방법이 장작, 연탄, 보일러로 바뀌어 왔어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 할머니께 여쭐 물음 만들기', minutes: 14, tool: 'mindmap',
            teacher: '"할머니께 무엇을 여쭈어 볼까요?" 어른께 여쭐 때는 \'~셨어요?\'로 높여 말한다는 것을 함께 연습한다. "할머니 어릴 적 이야기는 지금 우리랑 상관없어요"라는 학생에게 "할머니가 쓰던 아궁이가 바뀌어 지금 보일러가 됐지요?"라고 앞 활동을 다시 가리킨다.',
            task: '할머니 어릴 적 집에 대해 여쭐 물음을 고르고, 물음마다 견줄 것을 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '할머니께 어릴 적 집에 대해 여쭐 물음만 골라 보세요.', toolOptions: { mode: 'pick', basket: '할머니께 여쭐 물음', cards: ['할머니, 어릴 때 방은 어떻게 데우셨어요?', '할머니, 어릴 때 물은 어디에서 길으셨어요?', '할머니, 오늘 저녁은 무엇이에요?', '나는 우리 집이 좋아요.'] },
                target: { pick: ['할머니, 어릴 때 방은 어떻게 데우셨어요?', '할머니, 어릴 때 물은 어디에서 길으셨어요?'] }, difficulty: 0.15,
                hints: ['할머니가 어릴 때의 집을 묻는지, 물음표가 있는지 살펴봐요.', '오늘 일을 묻거나 내 생각을 말한 카드는 어릴 적 집을 묻지 않아요.', '\'어릴 때 ~셨어요?\'로 끝나는 카드를 골라요.'] },
              { prompt: '물음마다 무엇을 견주는지 이어 보세요.', toolOptions: { mode: 'match', topic: '무엇을 견줄까?', slots: [{ id: 's1', label: '옛날에는 방을 어떻게 데웠을까?' }, { id: 's2', label: '옛날에는 밥을 어디에서 지었을까?' }, { id: 's3', label: '옛날 지붕은 무엇으로 덮었을까?' }], cards: ['아궁이와 보일러', '부엌과 주방', '짚 지붕과 지금 지붕'] },
                target: { match: { s1: '아궁이와 보일러', s2: '부엌과 주방', s3: '짚 지붕과 지금 지붕' } }, difficulty: 0.2 },
              { prompt: '옛날 집에 대한 물음을 \'누구에게 여쭐까\'로 나누어 보세요.', toolOptions: { topic: '누구에게 여쭐까?', slots: ['할머니, 할아버지', '엄마, 아빠'], cards: ['할머니, 어릴 때 집 지붕은 무엇이었어요?', '엄마, 제가 아기 때 살던 집은 어디예요?', '할아버지, 어릴 때 우물에 가 보셨어요?', '아빠, 제가 아기 때 어디에서 잤어요?'] },
                target: { sort: { '할머니, 할아버지': ['할머니, 어릴 때 집 지붕은 무엇이었어요?', '할아버지, 어릴 때 우물에 가 보셨어요?'], '엄마, 아빠': ['엄마, 제가 아기 때 살던 집은 어디예요?', '아빠, 제가 아기 때 어디에서 잤어요?'] } }, difficulty: 0.2 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 만든 물음 가운데 집에서 꼭 여쭈어 볼 것 하나를 활동지에 적어요." 높임말로 바르게 적었는지 짝과 서로 봐 준다. 여쭈어 본 답은 다음 주에 가져와 나누기로 약속한다.',
        exitTicket: [
          { type: 'tool', tool: 'timeline', options: { mode: 'sort', axis: ['옛날', '지금'], slots: ['할머니 어릴 적 집', '지금 우리 집'], cards: ['요강', '수세식 변기', '등잔불', '형광등'] }, prompt: '집 물건을 할머니 어릴 적 집과 지금 우리 집으로 나누어 보세요.', target: { sort: { '할머니 어릴 적 집': ['요강', '등잔불'], '지금 우리 집': ['수세식 변기', '형광등'] } }, difficulty: 0.2 },
          { type: 'choice', prompt: '할머니께 어릴 적 집을 여쭈는 바른 물음은 무엇일까요?', options: ['할머니, 어릴 때 집은 어떠셨어요?', '할머니 집 몰라!', '우리 집은 아파트예요.'], answer: 0, difficulty: 0.1, explain: '어른께는 \'~셨어요?\'로 높여서 여쭈어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '할머니께 여쭐 물음',
      items: [
        { type: 'figure', wide: true, prompt: '옛날 집 모습과 지금 집 모습을 나누어 쓰세요.', tool: 'timeline', figures: [{ options: { mode: 'sort', axis: ['옛날', '지금'], slots: ['할머니 어릴 적 집', '지금 우리 집'], cards: ['마당 우물', '부엌 수도꼭지'] }, caption: '' }], answer: '할머니 어릴 적 집-마당 우물, 지금 우리 집-부엌 수도꼭지' },
        { type: 'choice', prompt: '방을 데우는 옛날 방법에 ○ 하세요.', options: ['보일러 켜기', '아궁이에 장작 때기', '전기장판 켜기'], answer: '아궁이에 장작 때기' },
        { type: 'table', prompt: '할머니께 여쭈어 보고 답을 적으세요.', columns: ['여쭐 물음', '들은 답'], rows: 2 },
        { type: 'short', prompt: '옛날 집에 대해 가장 궁금한 것을 물음으로 쓰세요.' },
      ],
      easy: {
        note: '어른께는 \'~셨어요?\'로 여쭈어요.',
        items: [
          { type: 'choice', prompt: '옛날 집 모습에 ○ 하세요.', options: ['짚으로 덮은 지붕', '엘리베이터'], answer: '짚으로 덮은 지붕' },
          { type: 'choice', prompt: '높여 말한 물음에 ○ 하세요.', options: ['할머니, 어릴 때 어디 사셨어요?', '할머니, 어디 살았어?'], answer: '할머니, 어릴 때 어디 사셨어요?' },
          { type: 'draw', prompt: '할머니 어릴 적 집을 상상해 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고 틀리면 카드가 돌아와요.',
      base: '모두 놓은 뒤 확인을 눌러요. 고른 물음을 높임말로 소리 내어 읽어요.',
      challenge: '집과 상관없는 카드가 섞여 있어 골라내야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 옛날 집 이야기는 지금 우리와 상관없다고 여긴다 → 아궁이→연탄→보일러처럼 바뀌어 이어진 차례를 다시 보인다. ② 할머니가 어릴 때와 내가 아기 때를 섞는다 → \'누구의 어릴 때인가\'를 먼저 묻는다. ③ 어른께 반말로 묻는다 → \'~셨어요?\'를 함께 소리 내 연습한다. 조부모와 함께 살지 않는 학생은 이웃 어른이나 선생님께 여쭈어도 된다고 미리 말해 둔다.',
  }));

  lessons.push(L(4, {
    title: '옛날 놀이가 지금까지 이어진 것 찾고 묻기',
    objective: '옛날부터 지금까지 이어진 놀이와 요즘 새로 생긴 놀이를 나누고, 놀이가 어떻게 달라졌는지 묻는 물음을 만들 수 있다.',
    illustration: ART('children flying paper kites, kicking a jegi shuttlecock and playing yut sticks on a green yard, with a small tablet game on a bench nearby', '옛날 놀이, 지금 놀이', [
      { motif: 'tree', x: 90, y: 214 }, { motif: 'tree', x: 400, y: 214, color: 'mint' }, { motif: 'bird', x: 320, y: 70 }]),
    safety: ['제기는 둘레에 친구가 없는 넓은 곳에서 차요.', '공기돌은 입에 넣지 않아요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"설날에 윷놀이를 해 본 사람 있나요?" 손을 들게 한 뒤 "윷놀이는 아주 옛날부터 했대요. 그런데 지금도 하지요?"라고 묻는다. 시연 단추로 \'윷놀이\'가 \'옛날에도 하고 지금도 해요\' 가지로 들어가는 모습을 보여 준다. 옛날 것이 지금까지 이어지기도 한다는 것을 짚는다.',
        student: '내가 해 본 옛날 놀이를 하나 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '놀이', slots: ['옛날에도 하고 지금도 해요', '요즘 새로 생겼어요'], cards: ['윷놀이', '태블릿 게임'], shuffle: false }, sequence: [{ sort: { '옛날에도 하고 지금도 해요': ['윷놀이'], '요즘 새로 생겼어요': ['태블릿 게임'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 옛날 놀이 해 보고 나누기 (실습)', minutes: 14, tool: 'mindmap',
            teacher: '"짝과 공기놀이나 실뜨기를 2분 동안 해 봐요." 공기돌·실을 나누어 주고 타이머를 맞춘다. 놀이가 끝나면 "이 놀이를 할머니도 하셨을까요?"를 묻는다. \'요즘 새로 생겼어요\' 칸에 윷놀이를 넣는 학생에게 설날 이야기를 다시 떠올리게 한다.',
            task: '짝과 옛날 놀이를 해 보고, 놀이 카드를 옛날부터 이어진 것과 요즘 생긴 것으로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '짝과 공기놀이나 실뜨기를 2분 동안 해 보았으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '놀이 카드를 두 가지로 나누어 보세요.', toolOptions: { topic: '놀이', slots: ['옛날에도 하고 지금도 해요', '요즘 새로 생겼어요'], cards: ['제기차기', '연날리기', '태블릿 게임', '로봇 장난감 조종하기'] },
                target: { sort: { '옛날에도 하고 지금도 해요': ['제기차기', '연날리기'], '요즘 새로 생겼어요': ['태블릿 게임', '로봇 장난감 조종하기'] } }, difficulty: 0.1,
                levels: { challenge: { prompt: '놀이 카드 여섯 장을 두 가지로 나누어 보세요.', toolOptions: { cards: ['제기차기', '연날리기', '태블릿 게임', '로봇 장난감 조종하기', '공기놀이', '드론 날리기'] },
                  target: { sort: { '옛날에도 하고 지금도 해요': ['제기차기', '연날리기', '공기놀이'], '요즘 새로 생겼어요': ['태블릿 게임', '로봇 장난감 조종하기', '드론 날리기'] } } } } },
              { prompt: '옛날 놀이 도구와 지금 비슷한 놀이 도구를 이어 보세요.', toolOptions: { mode: 'match', topic: '무엇과 비슷할까?', slots: [{ id: 's1', label: '종이로 만든 방패연' }, { id: 's2', label: '나무로 깎은 팽이' }], cards: ['플라스틱 연', '줄 당겨 돌리는 팽이'] },
                target: { match: { s1: '플라스틱 연', s2: '줄 당겨 돌리는 팽이' } }, difficulty: 0.15,
                predict: { q: '옛날 연과 지금 연은 무엇이 다를까요?', options: ['만든 재료', '날리는 하늘'], answer: 0 },
                conclude: '놀이는 이어지고, 만드는 재료는 종이·나무에서 플라스틱으로 바뀌기도 했어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 놀이가 달라진 것 묻기', minutes: 12, tool: 'mindmap',
            teacher: '"연날리기에서 무엇이 달라졌는지 궁금한가요?" 재료, 모양, 노는 곳을 칠판에 적어 물음의 실마리로 준다. "연날리기 할래?"처럼 놀자는 말을 고른 학생에게 "이 말은 옛날과 지금을 견주나요?"라고 되묻는다.',
            task: '놀이가 옛날과 지금 어떻게 달라졌는지 묻는 물음을 고르고 완성해요.',
            levels: CARD_LV,
            items: [
              { prompt: '연에 대해 옛날과 지금이 달라진 것을 묻는 물음만 골라 보세요.', toolOptions: { mode: 'pick', basket: '좋은 물음', topic: '연날리기', cards: ['옛날 연은 무엇으로 만들었을까?', '지금 연은 옛날 연과 무엇이 다를까?', '연은 하늘을 날아요.', '연날리기 할래?'] },
                target: { pick: ['옛날 연은 무엇으로 만들었을까?', '지금 연은 옛날 연과 무엇이 다를까?'] }, difficulty: 0.2,
                hints: ['옛날과 지금을 견주어 묻는지 살펴봐요. 물음표만 있다고 다 되는 것은 아니에요.', '놀자고 하는 말이나 본 것을 말한 카드는 달라진 것을 묻지 않아요.', '\'옛날 연\'이나 \'옛날 연과 무엇이 다를까\'가 들어간 카드를 골라요.'] },
              { prompt: '놀이 물음을 무엇이 궁금한지에 따라 나누어 보세요.', toolOptions: { topic: '무엇이 궁금할까?', slots: ['만든 재료', '노는 곳'], cards: ['옛날 제기는 무엇으로 만들었을까?', '옛날 아이들은 어디에서 연을 날렸을까?', '옛날 팽이는 무엇으로 깎았을까?', '옛날에는 어디에서 윷놀이를 했을까?'] },
                target: { sort: { '만든 재료': ['옛날 제기는 무엇으로 만들었을까?', '옛날 팽이는 무엇으로 깎았을까?'], '노는 곳': ['옛날 아이들은 어디에서 연을 날렸을까?', '옛날에는 어디에서 윷놀이를 했을까?'] } }, difficulty: 0.25 },
              { prompt: '빈칸에 알맞은 말을 넣어 놀이 물음을 완성해 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'b1', label: '옛날 팽이는 ___ 깎았을까?' }, { id: 'b2', label: '옛날 아이들은 ___ 공기놀이를 했을까?' }], cards: ['무엇으로', '어디에서'] },
                target: { fill: { b1: '무엇으로', b2: '어디에서' } }, difficulty: 0.15 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 해 본 놀이는 옛날 것일까요, 지금 것일까요?" "둘 다예요"라는 대답이 나오면 옛날부터 지금까지 이어진 것이라는 말로 정리한다. 다음 시간에는 옛날 사진과 지금 사진을 나란히 놓고 살펴본다고 예고한다. 공기돌과 실은 바구니에 모아 정리한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '놀이', slots: ['옛날에도 하고 지금도 해요', '요즘 새로 생겼어요'], cards: ['팽이치기', '비석치기', '휴대 전화 게임', '전동 킥보드 타기'] }, prompt: '놀이 카드를 두 가지로 나누어 보세요.', target: { sort: { '옛날에도 하고 지금도 해요': ['팽이치기', '비석치기'], '요즘 새로 생겼어요': ['휴대 전화 게임', '전동 킥보드 타기'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '옛날 놀이에 대한 바른 생각은 무엇일까요?', options: ['옛날 놀이는 지금 아무도 안 해요', '옛날 놀이 가운데 지금까지 이어진 것도 있어요'], answer: 1, difficulty: 0.15, explain: '윷놀이, 제기차기처럼 옛날부터 지금까지 하는 놀이가 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '옛날 놀이, 지금 놀이',
      items: [
        { type: 'figure', wide: true, prompt: '옛날 놀이 도구와 비슷한 지금 놀이 도구를 선으로 이으세요.', tool: 'mindmap', figures: [{ options: { mode: 'match', topic: '무엇과 비슷할까?', slots: [{ id: 's1', label: '종이 방패연' }, { id: 's2', label: '나무 팽이' }], cards: ['줄 당겨 돌리는 팽이', '플라스틱 연'] }, caption: '' }], answer: '종이 방패연-플라스틱 연, 나무 팽이-줄 당겨 돌리는 팽이' },
        { type: 'check', prompt: '옛날부터 지금까지 하는 놀이에 ✓ 하세요.', options: ['윷놀이', '제기차기', '연날리기', '태블릿 게임'] },
        { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '옛날 제기는 ___ 만들었을까?', answer: '무엇으로' },
        { type: 'short', prompt: '오늘 해 본 옛날 놀이에 대해 궁금한 것을 물음으로 쓰세요.' },
      ],
      easy: {
        note: '설날에 하는 놀이를 떠올려요.',
        items: [
          { type: 'choice', prompt: '옛날부터 하던 놀이에 ○ 하세요.', options: ['윷놀이', '태블릿 게임'], answer: '윷놀이' },
          { type: 'choice', prompt: '물음에 ○ 하세요.', options: ['옛날 연은 무엇으로 만들었을까?', '연날리기 재미있어요.'], answer: '옛날 연은 무엇으로 만들었을까?' },
          { type: 'draw', prompt: '오늘 해 본 옛날 놀이를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 놀이 실습은 공기돌 세 개로 해요.',
      base: '모두 놓은 뒤 확인을 눌러요. 고른 물음을 짝에게 물어요.',
      challenge: '나눌 놀이가 여섯 장으로 늘어요. 놀이 실습은 공기돌 다섯 개로 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 옛날 놀이는 지금 아무도 안 한다고 여긴다 → 설날·추석에 하는 놀이를 떠올리게 한다. ② 놀자는 말(연날리기 할래?)을 물음으로 고른다 → 옛날과 지금을 견주는지 되묻는다. ③ 재료와 노는 곳을 헷갈린다 → \'무엇으로\'는 재료, \'어디에서\'는 곳이라고 짝 지어 준다. 공기돌·실뜨기 실을 짝마다 하나씩 미리 준비한다.',
  }));

  // ───────────────────────── 5~8차시: 옛날 자료와 지금 자료 나란히 놓고 살피기 ─────────────────────────

  // 사진 두 장을 견준 카드: text = 살필 곳, sub = 옛날 사진 → 지금 사진
  function SEEN(id, text, then, now) { return { id: id, text: text, sub: then + ' → ' + now }; }

  lessons.push(L(5, {
    title: '옛날 교실 사진과 지금 교실 사진 견주기',
    objective: '옛날 교실 사진과 지금 교실 사진을 나란히 놓고 달라진 곳과 그대로인 곳을 나누어 표시할 수 있다.',
    illustration: ART('two paper photographs side by side, an old classroom with a wood stove and shared wooden desks and a modern bright classroom with single desks, a magnifying glass between them', '무엇이 달라졌을까?', [
      { motif: 'house', x: 120, y: 214, color: 'cream' }, { motif: 'house', x: 360, y: 214, color: 'mint' }, { motif: 'star', x: 240, y: 92, s: 0.5 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"두 사진을 나란히 놓으면 무엇이 보일까요?" 옛날 교실 사진과 지금 교실 사진을 전자칠판에 나란히 띄운다(학교 앨범이나 지역 기록관 사진). "같은 자리를 하나씩 짚으며 봐요." 칠판 자리를 함께 짚고 시연 단추로 \'칠판\' 카드가 \'그대로예요\' 가지에 놓이는 모습을 보여 준다.',
        student: '두 사진에서 칠판이 있는 자리를 손가락으로 짚어 봐요.',
        demo: { tool: 'mindmap', options: { topic: '교실 사진', slots: ['달라졌어요', '그대로예요'], cards: [SEEN('board', '칠판', '칠판', '칠판'), SEEN('heat', '교실 데우는 것', '난로', '냉난방기')], shuffle: false }, sequence: [{ sort: { '달라졌어요': ['heat'], '그대로예요': ['board'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 달라진 곳, 그대로인 곳 표시하기 (관찰)', minutes: 14, tool: 'mindmap',
            teacher: '"옛날 사진의 이 자리에는 무엇이 있나요? 지금 사진의 같은 자리에는요?" 모둠마다 사진 두 장을 나란히 놓고 달라진 곳에 ○, 그대로인 곳에 △를 붙임 딱지로 표시하게 한다. 한쪽 사진만 보고 표시하는 학생에게 두 손가락으로 두 사진의 같은 자리를 동시에 짚게 한다.',
            task: '사진 두 장을 나란히 놓고 같은 자리를 견주어, 달라진 곳과 그대로인 곳을 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '모둠 사진 두 장에 달라진 곳은 ○, 그대로인 곳은 △를 붙였으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '교실 사진에서 살핀 곳을 달라졌어요와 그대로예요로 나누어 보세요.', toolOptions: { topic: '교실 사진', slots: ['달라졌어요', '그대로예요'], cards: [SEEN('board', '칠판', '칠판', '칠판'), SEEN('heat', '교실 데우는 것', '난로', '냉난방기'), SEEN('desk', '책상', '둘이 앉는 나무 책상', '혼자 앉는 책상'), SEEN('window', '창문', '창문', '창문')] },
                target: { sort: { '달라졌어요': ['heat', 'desk'], '그대로예요': ['board', 'window'] } }, difficulty: 0.1,
                hints: ['카드마다 화살표 앞(옛날 사진)과 뒤(지금 사진)를 견주어 봐요.', '화살표 앞뒤가 같은 말이면 그대로인 곳이에요. 다시 읽어 봐요.', '\'칠판 → 칠판\'처럼 앞뒤가 같은 카드는 그대로예요에, 다른 카드는 달라졌어요에 놓아요.'] },
              { prompt: '운동장 사진에서 살핀 곳을 나누어 보세요.', toolOptions: { topic: '운동장 사진', slots: ['달라졌어요', '그대로예요'], cards: [SEEN('bar', '철봉', '철봉', '철봉'), SEEN('floor', '운동장 바닥', '흙', '푸른 잔디'), SEEN('gate', '교문', '나무 문', '철 문'), SEEN('tree', '큰 나무', '은행나무', '은행나무')] },
                target: { sort: { '달라졌어요': ['floor', 'gate'], '그대로예요': ['bar', 'tree'] } }, difficulty: 0.15,
                hints: ['같은 자리를 옛날 사진과 지금 사진에서 하나씩 견주어 봐요.', '화살표 앞뒤가 다른데 그대로예요에 놓은 카드가 있는지 살펴봐요.', '흙이 잔디로, 나무 문이 철 문으로 바뀐 것은 달라진 곳이에요.'],
                levels: { challenge: { prompt: '운동장 사진에서 살핀 곳 여섯 군데를 나누어 보세요.', toolOptions: { cards: [SEEN('bar', '철봉', '철봉', '철봉'), SEEN('floor', '운동장 바닥', '흙', '푸른 잔디'), SEEN('gate', '교문', '나무 문', '철 문'), SEEN('tree', '큰 나무', '은행나무', '은행나무'), SEEN('flag', '국기 게양대', '국기 게양대', '국기 게양대'), SEEN('wall', '학교 담', '돌담', '나무 울타리')] },
                  target: { sort: { '달라졌어요': ['floor', 'gate', 'wall'], '그대로예요': ['bar', 'tree', 'flag'] } } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 사진에 없으면 없었을까?', minutes: 12, tool: 'mindmap',
            teacher: '"옛날 교실 사진에 시계가 안 보여요. 그럼 옛날 교실에는 시계가 없었을까요?" 손을 들게 한 뒤, 사진은 찍은 쪽만 보여 준다는 것을 교실 한쪽만 찍은 사진으로 직접 보여 준다. "보이지 않으면 어떻게 알아볼 수 있을까요?"를 묻고 \'어른께 여쭙기, 다른 사진 찾기\'를 이끌어 낸다.',
            task: '사진에서 알 수 있는 것과 사진만으로는 알 수 없는 것을 나누고, 더 알아볼 방법을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '옛날 교실 사진에 칠판, 난로, 나무 책상이 보여요. 카드를 나누어 보세요.', toolOptions: { topic: '옛날 교실 사진', slots: ['사진에서 알 수 있어요', '사진만으로는 몰라요'], cards: ['칠판이 있었어요', '난로가 있었어요', '시계가 없었어요', '도서실이 없었어요'] },
                target: { sort: { '사진에서 알 수 있어요': ['칠판이 있었어요', '난로가 있었어요'], '사진만으로는 몰라요': ['시계가 없었어요', '도서실이 없었어요'] } }, difficulty: 0.25,
                predict: { q: '사진에 시계가 안 보이면 옛날 교실에는 시계가 없었을까요?', options: ['없었어요', '사진만으로는 몰라요'], answer: 1 },
                conclude: '사진은 찍은 곳만 보여 줘요. 안 보인다고 없었던 것은 아니에요.' },
              { prompt: '사진에 안 보이는 것을 더 알아보는 방법만 골라 보세요.', toolOptions: { mode: 'pick', basket: '더 알아보는 방법', cards: ['그때 다닌 어른께 여쭈어요', '다른 쪽을 찍은 사진도 찾아봐요', '안 보이니까 없었다고 써요', '마음대로 정해요'] },
                target: { pick: ['그때 다닌 어른께 여쭈어요', '다른 쪽을 찍은 사진도 찾아봐요'] }, difficulty: 0.1 },
              { prompt: '옛날 교실 물건과 지금 교실에서 같은 일을 하는 물건을 이어 보세요.', toolOptions: { mode: 'match', topic: '같은 일을 해요', slots: [{ id: 's1', label: '난로' }, { id: 's2', label: '둘이 앉는 나무 책상' }, { id: 's3', label: '분필 칠판' }], cards: ['냉난방기', '혼자 앉는 책상', '전자칠판'] },
                target: { match: { s1: '냉난방기', s2: '혼자 앉는 책상', s3: '전자칠판' } }, difficulty: 0.15 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"두 사진을 견줄 때 어떻게 했나요?" 같은 자리를 나란히 짚었다는 말을 이끌어 낸다. 모둠 사진에 붙인 ○·△ 개수를 세어 보게 한다. 다음 시간에는 옛날 마을 그림을 지금 마을로 바꾸어 본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '급식 사진', slots: ['달라졌어요', '그대로예요'], cards: [SEEN('bowl', '밥 담는 것', '도시락', '식판'), SEEN('spoon', '숟가락', '숟가락', '숟가락')] }, prompt: '점심 사진에서 살핀 곳을 나누어 보세요.', target: { sort: { '달라졌어요': ['bowl'], '그대로예요': ['spoon'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '옛날 사진에 운동장 그네가 안 보여요. 바른 생각은 무엇일까요?', options: ['그네가 없었어요', '사진만으로는 몰라요. 더 알아봐요'], answer: 1, difficulty: 0.25, explain: '사진은 찍은 곳만 보여 줘요. 어른께 여쭙거나 다른 사진을 찾아봐요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '옛날 사진, 지금 사진',
      items: [
        { type: 'figure', wide: true, prompt: '두 사진을 견주어 달라진 곳과 그대로인 곳으로 나누어 쓰세요.', tool: 'mindmap', figures: [{ options: { topic: '교실 사진', slots: ['달라졌어요', '그대로예요'], cards: [SEEN('board', '칠판', '칠판', '칠판'), SEEN('heat', '교실 데우는 것', '난로', '냉난방기')] }, caption: '' }], answer: '달라졌어요-교실 데우는 것, 그대로예요-칠판' },
        { type: 'table', prompt: '모둠 사진에서 찾은 곳을 쓰세요.', columns: ['달라진 곳 ○', '그대로인 곳 △'], rows: 3 },
        { type: 'choice', prompt: '사진에 안 보이는 것을 알아보는 방법에 ○ 하세요.', options: ['어른께 여쭈어요', '없었다고 써요'], answer: '어른께 여쭈어요' },
        { type: 'short', prompt: '두 사진에서 가장 많이 달라진 곳은 어디인지 쓰세요.' },
      ],
      easy: {
        note: '두 사진의 같은 자리를 손가락 두 개로 짚어요.',
        items: [
          { type: 'choice', prompt: '\'칠판 → 칠판\'은 어떤 곳일까요?', options: ['그대로예요', '달라졌어요'], answer: '그대로예요' },
          { type: 'choice', prompt: '\'난로 → 냉난방기\'는 어떤 곳일까요?', options: ['달라졌어요', '그대로예요'], answer: '달라졌어요' },
          { type: 'draw', prompt: '지금 우리 교실에서 옛날에도 있었을 것 같은 물건을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 모둠 사진에는 표시할 곳 세 군데에 미리 점을 찍어 줘요.',
      base: '모두 나눈 뒤 확인을 눌러요. 모둠 사진에 ○·△를 다섯 개 넘게 붙여요.',
      challenge: '살필 곳이 여섯 군데로 늘어요. 사진에 없는 것을 알아볼 물음도 하나 만들어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 사진에 없는 것은 옛날에 없었던 것이라고 여긴다 → 교실 한쪽만 찍은 사진을 직접 찍어 보여 준다. ② 두 사진을 따로따로 보고 아무 곳이나 표시한다 → 같은 자리를 두 손가락으로 동시에 짚게 한다. ③ 조금 달라진 것(색만 바뀐 문)을 그대로라고 한다 → 생김새·재료·색을 하나씩 견주게 한다. 사진은 학교 개교 기념 앨범, 지역 기록관·박물관 누리집에서 이용 조건을 확인하고 쓴다.',
  }));

  // 옛날 마을 그림(콜라주): 산·해는 그대로, 초가집(갈색 네모 벽 + 갈색 세모 지붕)·흙길은 바꿀 곳
  var OLD_VILLAGE = { pieces: [
    { shape: 'triangle', color: '초록', size: 'l', x: 120, y: 120, r: 0 }, { shape: 'circle', color: '노랑', size: 'm', x: 480, y: 80, r: 0 },
    { shape: 'square', color: '갈색', size: 'm', x: 300, y: 260, r: 0 }, { shape: 'triangle', color: '갈색', size: 'm', x: 300, y: 200, r: 0 },
  ] };
  var VILLAGE_LV = COL_LV(['triangle', 'circle', 'square', 'rect'], ['초록', '노랑', '갈색', '파랑', '검정', '빨강']);

  lessons.push(L(6, {
    title: '옛날 마을 그림을 지금 마을로 바꾸어 꾸미기',
    objective: '옛날 마을과 지금 마을 자료를 견주어 그대로인 것은 두고 달라진 것만 바꾸어 색종이 그림으로 나타낼 수 있다.',
    illustration: ART('an old paper village with thatched cottages and a dirt road under a green mountain turning into a modern town with apartments and a paved road under the same mountain', '산은 그대로, 집은 바뀌었어요', [
      { motif: 'mountain', x: 120, y: 200 }, { motif: 'house', x: 280, y: 214, color: 'buttercup' }, { motif: 'house', x: 390, y: 210, color: 'sky', s: 1.1 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"옛날 마을 그림에도 뒷산이 있고, 지금 마을 사진에도 같은 뒷산이 있어요. 무엇이 바뀌었을까요?" 두 자료를 나란히 띄운다. 시연 단추로 옛날 마을 콜라주를 보여 주고 "오늘은 그대로인 것은 두고, 달라진 것만 바꾸어 지금 마을을 만들어요"라고 알린다.',
        student: '두 그림에서 똑같이 있는 것을 하나 찾아 짝에게 말해 봐요.',
        demo: { tool: 'collage', options: { readOnly: true }, sequence: [{ has: [{ shape: 'triangle', color: '초록', size: 'l', n: 1 }, { shape: 'triangle', color: '갈색', min: 1 }] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 마을 자료 견주기', minutes: 12, tool: 'mindmap',
            teacher: '"초가집이 있던 자리에 지금은 무엇이 있나요?" 옛날 모습과 지금 모습을 이은 뒤, 그대로인 것을 고르게 한다. 세 장면을 차례로 놓을 때 "집이 점점 어떻게 되나요?"라고 물어 실마리를 찾게 한다.',
            task: '옛날 마을과 지금 마을 자료를 견주어 바뀐 짝을 잇고, 그대로인 것을 찾아요.',
            levels: CARD_LV,
            items: [
              { prompt: '옛날 마을 모습과 같은 자리의 지금 모습을 이어 보세요.', toolOptions: { mode: 'match', topic: '무엇으로 바뀌었을까?', slots: [{ id: 's1', label: '초가집' }, { id: 's2', label: '흙길' }, { id: 's3', label: '나룻배' }], cards: ['아파트', '넓은 찻길', '튼튼한 다리'] },
                target: { match: { s1: '아파트', s2: '넓은 찻길', s3: '튼튼한 다리' } }, difficulty: 0.1 },
              { prompt: '두 마을 자료에서 그대로인 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '그대로예요', cards: [SEEN('hill', '뒷산', '뒷산', '뒷산'), SEEN('creek', '냇물', '냇물', '냇물'), SEEN('home', '집', '초가집', '아파트'), SEEN('road', '길', '흙길', '넓은 찻길')] },
                target: { pick: ['hill', 'creek'] }, difficulty: 0.15,
                levels: { challenge: { prompt: '두 마을 자료에서 그대로인 것만 골라 보세요. 여섯 군데예요.', toolOptions: { cards: [SEEN('hill', '뒷산', '뒷산', '뒷산'), SEEN('creek', '냇물', '냇물', '냇물'), SEEN('home', '집', '초가집', '아파트'), SEEN('road', '길', '흙길', '넓은 찻길'), SEEN('tree', '마을 앞 큰 나무', '느티나무', '느티나무'), SEEN('shop', '물건 사는 곳', '구멍가게', '큰 마트')] },
                  target: { pick: ['hill', 'creek', 'tree'] } } } },
              { prompt: '같은 거리를 찍은 사진 세 장을 옛날부터 차례로 놓아 보세요.', toolOptions: { mode: 'order', axis: ['옛날', '지금'], cards: ['흙길 옆 초가집', '좁은 찻길 옆 낮은 집', '넓은 찻길 옆 높은 아파트'] },
                target: { order: ['흙길 옆 초가집', '좁은 찻길 옆 낮은 집', '넓은 찻길 옆 높은 아파트'] }, difficulty: 0.2,
                predict: { q: '마을은 한 번에 바뀌었을까요, 조금씩 바뀌었을까요?', options: ['한 번에', '조금씩'], answer: 1 },
                conclude: '마을은 오랜 시간 동안 조금씩 바뀌었어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 옛날 마을을 지금 마을로 바꾸기', minutes: 14, tool: 'collage',
            teacher: '"뒷산과 해는 지금도 그대로예요. 떼지 말고 두세요." 바꿀 것과 둘 것을 먼저 말한 뒤 조각을 움직이게 한다. 모두 떼고 새로 만드는 학생에게 "그대로인 것은 무엇이었지요?"라고 활동 1을 가리킨다.',
            task: '옛날 마을 그림에서 그대로인 것은 두고, 달라진 것만 떼거나 붙여 지금 마을로 바꾸어요.',
            levels: VILLAGE_LV,
            items: [
              { prompt: '산과 해는 그대로 두세요. 갈색 세모 초가지붕은 떼고, 파랑 긴 네모 아파트를 두 개 이상 붙여요.', state: OLD_VILLAGE,
                target: { has: [{ shape: 'triangle', color: '초록', size: 'l', n: 1 }, { shape: 'circle', color: '노랑', n: 1 }, { shape: 'triangle', color: '갈색', n: 0 }, { shape: 'rect', color: '파랑', min: 2 }] }, difficulty: 0.2,
                hints: ['그대로인 것과 달라진 것을 먼저 말해 보고 조각을 움직여요.', '그대로 둘 산과 해가 남아 있는지, 바꿀 지붕을 떼었는지 하나씩 살펴봐요.', '초록 큰 세모 산과 노랑 해는 두고, 갈색 세모를 떼고, 파랑 긴 네모를 두 개 붙여요.'] },
              { prompt: '갈색 흙길을 떼고 검정 긴 네모 찻길을 붙여요. 찻길 위에 빨강 네모 자동차도 하나 붙여요.', state: { pieces: [{ shape: 'triangle', color: '초록', size: 'l', x: 120, y: 120, r: 0 }, { shape: 'rect', color: '갈색', size: 'l', x: 280, y: 340, r: 0 }] },
                target: { has: [{ shape: 'rect', color: '갈색', n: 0 }, { shape: 'rect', color: '검정', min: 1 }, { shape: 'square', color: '빨강', min: 1 }, { shape: 'triangle', color: '초록', n: 1 }] }, difficulty: 0.2,
                hints: ['옛날 길과 지금 길이 어떻게 다른지 떠올리고 바꿀 조각을 찾아요.', '갈색 길이 아직 남았는지, 산을 떼지는 않았는지 살펴봐요.', '갈색 긴 네모를 떼고, 검정 긴 네모와 빨강 네모를 붙여요. 산은 그대로 둬요.'] },
              { prompt: '옛날 마을을 내 생각대로 지금 마을로 바꾸고, 해낸 것을 점검 목록에 표시해요.', state: OLD_VILLAGE,
                target: { selfCheck: ['그대로인 것을 하나 넘게 남겼어요', '달라진 것을 두 군데 넘게 바꾸었어요', '짝에게 무엇을 바꾸었는지 말했어요'], minPieces: 5 }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"짝의 지금 마을에서 그대로 남긴 것을 찾아 말해 주세요." 두세 명의 작품을 띄워 남긴 것과 바꾼 것을 함께 짚는다. 출구 1번을 틀린 학생은 산까지 떼었는지 살펴 다시 말하게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'collage', options: { shapes: ['circle', 'square', 'triangle', 'rect'], colors: ['초록', '파랑', '갈색', '노랑'] }, state: { pieces: [{ shape: 'circle', color: '초록', size: 'l', x: 140, y: 200, r: 0 }, { shape: 'rect', color: '갈색', size: 'm', x: 380, y: 300, r: 0 }] }, prompt: '초록 나무는 그대로 두고, 갈색 나룻배를 떼고 파랑 긴 네모 다리를 붙여 보세요.', target: { has: [{ shape: 'circle', color: '초록', n: 1 }, { shape: 'rect', color: '갈색', n: 0 }, { shape: 'rect', color: '파랑', min: 1 }] }, difficulty: 0.15 },
          { type: 'choice', prompt: '옛날 마을과 지금 마을에서 그대로인 것은 무엇일까요?', options: ['뒷산', '초가집', '흙길'], answer: 0, difficulty: 0.1, explain: '뒷산은 옛날 자료와 지금 자료에 똑같이 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '옛날 마을, 지금 마을',
      items: [
        { type: 'figure', wide: true, prompt: '옛날 마을 그림이에요. 지금도 그대로일 것에 ○, 바뀔 것에 △ 하세요.', tool: 'collage', figures: [{ options: { readOnly: true }, state: OLD_VILLAGE, caption: '산 · 해 · 초가집' }], answer: '산·해 ○, 초가집 △' },
        { type: 'table', prompt: '옛날 모습과 지금 모습을 쓰세요.', columns: ['옛날', '지금'], cells: [['초가집', ''], ['흙길', ''], ['나룻배', '']] },
        { type: 'choice', prompt: '마을은 어떻게 바뀌었을까요?', options: ['하루 만에', '오랜 시간 조금씩'], answer: '오랜 시간 조금씩' },
        { type: 'draw', prompt: '옛날 마을 그림을 지금 마을로 바꾸어 그려 보세요. 그대로인 것은 남겨요.' },
      ],
      easy: {
        note: '그대로인 것은 남기고, 바뀐 것만 바꿔요.',
        items: [
          { type: 'choice', prompt: '그대로인 것에 ○ 하세요.', options: ['뒷산', '초가집'], answer: '뒷산' },
          { type: 'choice', prompt: '초가집은 지금 무엇으로 바뀌었을까요?', options: ['아파트', '나룻배'], answer: '아파트' },
          { type: 'draw', prompt: '지금 우리 마을을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '콜라주 고르개에 모양 네 가지, 색 여섯 가지만 나와요. 잇기·고르기는 맞는 칸에 초록 테두리가 생겨요.',
      base: '스스로 바꿀 조각을 찾아 떼고 붙여요.',
      challenge: '그대로인 곳을 여섯 군데에서 찾고, 모든 모양과 색으로 마을을 꾸며요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 그림을 모두 떼고 새로 만든다(옛날 것과 지금 것은 관계없다고 여김) → 그대로 남은 산·냇물을 먼저 짚게 한다. ② 마을이 한 번에 바뀌었다고 여긴다 → 세 장면 차례를 다시 본다. ③ 조각 떼기를 몰라 위에 덧붙인다 → 조각을 누른 뒤 \'떼기\'를 보여 준다. 실제 우리 마을 옛 사진이 있으면 도입에서 함께 보인다.',
  }));

  lessons.push(L(7, {
    title: '옛날 버스와 지금 버스 사진에서 달라진 곳 찾기',
    objective: '옛날 탈것과 지금 탈것 자료를 견주어 달라진 곳과 그대로인 곳을 찾고, 달라진 모습을 문장으로 말할 수 있다.',
    illustration: ART('a rounded old paper bus with a conductor at the door next to a modern low-floor bus with a card reader, and a steam train puffing on the hills behind', '버스가 달라졌어요', [
      { motif: 'cloud', x: 300, y: 70, s: 0.7 }, { motif: 'tree', x: 80, y: 214 }, { motif: 'tree', x: 410, y: 214, color: 'mint' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"버스를 탈 때 요금은 어떻게 내나요?" 카드를 찍는다는 대답을 받은 뒤 "옛날에는 버스에 안내원이 있어서 돈을 받았대요"라고 들려준다. 옛날 버스 사진과 지금 버스 사진을 나란히 띄우고 시연 단추로 \'요금 내기\' 카드가 \'달라졌어요\'에 놓이는 모습을 보여 준다.',
        student: '버스를 탔을 때 본 것을 떠올려 짝에게 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '버스 사진', slots: ['달라졌어요', '그대로예요'], cards: [SEEN('fare', '요금 내기', '안내원에게 돈', '카드 찍기'), SEEN('wheel', '바퀴', '둥근 바퀴', '둥근 바퀴')], shuffle: false }, sequence: [{ sort: { '달라졌어요': ['fare'], '그대로예요': ['wheel'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 버스와 기차 자료 견주기', minutes: 13, tool: 'mindmap',
            teacher: '"문은 옛날에 어떻게 열었고, 지금은 어떻게 열리나요?" 카드의 화살표 앞뒤를 소리 내어 읽게 한다. 기차 차례에서는 "연기가 나는 기차, 연기가 없는 기차 가운데 무엇이 먼저일까요?"라고 실마리를 준다.',
            task: '옛날 탈것과 지금 탈것 자료를 견주어 달라진 곳과 그대로인 곳을 나누고, 바뀐 차례를 찾아요.',
            levels: CARD_LV,
            items: [
              { prompt: '버스 사진에서 살핀 곳을 나누어 보세요.', toolOptions: { topic: '버스 사진', slots: ['달라졌어요', '그대로예요'], cards: [SEEN('door', '문', '안내원이 여는 문', '저절로 열리는 문'), SEEN('wheel', '바퀴', '둥근 바퀴', '둥근 바퀴'), SEEN('fare', '요금 내기', '안내원에게 돈', '카드 찍기'), SEEN('steer', '운전대', '둥근 운전대', '둥근 운전대')] },
                target: { sort: { '달라졌어요': ['door', 'fare'], '그대로예요': ['wheel', 'steer'] } }, difficulty: 0.1,
                levels: { challenge: { prompt: '버스 사진에서 살핀 곳 다섯 군데를 나누어 보세요.', toolOptions: { cards: [SEEN('door', '문', '안내원이 여는 문', '저절로 열리는 문'), SEEN('wheel', '바퀴', '둥근 바퀴', '둥근 바퀴'), SEEN('fare', '요금 내기', '안내원에게 돈', '카드 찍기'), SEEN('steer', '운전대', '둥근 운전대', '둥근 운전대'), SEEN('step', '타는 계단', '높은 계단', '낮은 바닥')] },
                  target: { sort: { '달라졌어요': ['door', 'fare', 'step'], '그대로예요': ['wheel', 'steer'] } } } } },
              { prompt: '기차가 바뀐 차례대로 옛날부터 놓아 보세요.', toolOptions: { mode: 'order', axis: ['옛날', '지금'], cards: ['석탄을 때는 증기 기관차', '기름으로 가는 디젤 기관차', '아주 빠른 고속 열차'] },
                target: { order: ['석탄을 때는 증기 기관차', '기름으로 가는 디젤 기관차', '아주 빠른 고속 열차'] }, difficulty: 0.25,
                conclude: '기차는 석탄, 기름, 전기로 달리며 점점 빨라졌어요.' },
              { prompt: '옛날 탈것과 같은 일을 하는 지금 탈것을 이어 보세요.', toolOptions: { mode: 'match', topic: '같은 일을 해요', slots: [{ id: 's1', label: '가마' }, { id: 's2', label: '소달구지' }, { id: 's3', label: '나룻배' }], cards: ['택시', '짐 싣는 트럭', '다리 위를 달리는 버스'] },
                target: { match: { s1: '택시', s2: '짐 싣는 트럭', s3: '다리 위를 달리는 버스' } }, difficulty: 0.25,
                hints: ['옛날 탈것이 무엇을 했는지 먼저 떠올려 봐요. 사람을 태웠나요, 짐을 실었나요, 물을 건넜나요?', '짐을 나르던 것과 사람을 태우던 것을 바꾸어 이었는지 살펴봐요.', '가마는 사람을, 소달구지는 짐을, 나룻배는 강 건너로 실어 날랐어요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 달라진 모습 말해 보기', minutes: 13, tool: 'story',
            teacher: '"옛날에는 ~했는데, 지금은 ~해요." 칠판에 문장 틀을 적고 함께 읽는다. 문장을 완성한 뒤 짝에게 버스 흉내(문 열기, 카드 찍기)를 하며 말하게 한다. \'옛날\'과 \'지금\' 자리를 바꾸어 넣는 학생에게 화살표 앞이 옛날이라는 것을 다시 짚는다.',
            task: '빈칸에 알맞은 낱말 카드를 넣어 옛날과 지금이 어떻게 다른지 문장을 완성해요.',
            levels: CARD_LV,
            items: [
              { prompt: '버스 문이 어떻게 달라졌는지 문장을 완성해 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'b1', label: '옛날에는 안내원이 ___ 문을 열었어요.' }, { id: 'b2', label: '지금은 문이 ___ 열려요.' }], cards: ['손으로', '저절로'] },
                target: { fill: { b1: '손으로', b2: '저절로' } }, difficulty: 0.1 },
              { prompt: '버스 요금 내는 방법이 어떻게 달라졌는지 문장을 완성해 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'b1', label: '옛날에는 안내원에게 ___ 냈어요.' }, { id: 'b2', label: '지금은 단말기에 ___ 찍어요.' }], cards: ['돈을', '교통카드를'] },
                target: { fill: { b1: '돈을', b2: '교통카드를' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['돈을', '교통카드를', '바퀴를'] } } } },
              { prompt: '기차가 어떻게 달라졌는지 문장을 완성해 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'b1', label: '옛날 기차는 ___을 때서 연기가 났어요.' }, { id: 'b2', label: '지금 고속 열차는 ___로 아주 빨리 달려요.' }], cards: ['석탄', '전기'] },
                target: { fill: { b1: '석탄', b2: '전기' } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['석탄', '전기', '바람'] } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"옛날 버스와 지금 버스에서 그대로인 것은 무엇이었나요?" 바퀴와 운전대처럼 그대로인 것도 있다는 것을 다시 말한다. 두세 명이 \'옛날에는 ~, 지금은 ~\' 문장으로 말하게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '자전거 사진', slots: ['달라졌어요', '그대로예요'], cards: [SEEN('pedal', '페달', '페달', '페달'), SEEN('tire', '바퀴', '딱딱한 나무 바퀴', '바람 넣은 고무 바퀴')] }, prompt: '옛날 자전거와 지금 자전거에서 살핀 곳을 나누어 보세요.', target: { sort: { '달라졌어요': ['tire'], '그대로예요': ['pedal'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '\'옛날에는 ___을 때서 기차가 달렸어요.\' 빈칸에 알맞은 말은?', options: ['석탄', '카드', '전등'], answer: 0, difficulty: 0.15, explain: '옛날 증기 기관차는 석탄을 때서 달렸어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '옛날 탈것, 지금 탈것',
      items: [
        { type: 'figure', wide: true, prompt: '빈칸에 알맞은 낱말을 넣어 문장을 완성하세요.', tool: 'story', figures: [{ options: { mode: 'fill', slots: [{ id: 'b1', label: '옛날에는 안내원이 ___ 문을 열었어요.' }, { id: 'b2', label: '지금은 문이 ___ 열려요.' }], cards: ['손으로', '저절로'] }, caption: '' }], answer: '손으로, 저절로' },
        { type: 'choice', prompt: '옛날 버스와 지금 버스에서 그대로인 것에 ○ 하세요.', options: ['요금 내는 방법', '둥근 바퀴', '문 여는 방법'], answer: '둥근 바퀴' },
        { type: 'table', prompt: '탈것이 어떻게 달라졌는지 쓰세요.', columns: ['탈것', '옛날', '지금'], cells: [['버스 요금', '', ''], ['기차', '', '']] },
        { type: 'short', prompt: '\'옛날에는 ~, 지금은 ~\'으로 탈것 하나가 달라진 것을 쓰세요.' },
      ],
      easy: {
        note: '화살표 앞은 옛날, 뒤는 지금이에요.',
        items: [
          { type: 'choice', prompt: '지금 버스 요금 내는 방법에 ○ 하세요.', options: ['카드 찍기', '안내원에게 돈'], answer: '카드 찍기' },
          { type: 'choice', prompt: '먼저 나온 기차에 ○ 하세요.', options: ['증기 기관차', '고속 열차'], answer: '증기 기관차' },
          { type: 'draw', prompt: '옛날 버스를 상상해 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 빈칸 낱말은 두 장만 나와요.',
      base: '모두 놓은 뒤 확인을 눌러요. 완성한 문장을 소리 내어 읽어요.',
      challenge: '살필 곳이 다섯 군데로 늘고, 빈칸에 맞지 않는 낱말 카드가 섞여 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 탈것은 모두 다 바뀌었다고 여긴다 → 바퀴·운전대처럼 그대로인 곳을 찾게 한다. ② 옛날과 지금 자리를 바꾸어 문장을 만든다 → 화살표 앞이 옛날이라는 것을 짚는다. ③ 옛날 탈것과 지금 탈것을 생김새로만 잇는다 → 사람·짐·강 건너기처럼 하는 일로 잇게 한다. 버스 안내원은 1980년대까지 있었다는 것을 덧붙여도 좋다.',
  }));

  lessons.push(L(8, {
    title: '사진과 어른 이야기로 옛날 장날 알아보기',
    objective: '사진과 어른께 들은 이야기에서 각각 알 수 있는 것을 나누고, 옛날 장터와 지금 마트의 달라진 점과 그대로인 점을 찾을 수 있다.',
    illustration: ART('a lively old paper market under white tents with a cow and people bargaining, next to a modern supermarket with shopping carts, an old woman telling a story to a child', '장날 이야기를 들어요', [
      { motif: 'house', x: 120, y: 214, color: 'peach' }, { motif: 'house', x: 360, y: 214, color: 'sky' }, { motif: 'flower', x: 240, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"옛날 장터 사진을 보세요. 무엇이 보이나요?" 천막, 사람, 소를 찾게 한다. 이어 지어 낸 할머니 이야기를 들려준다. "장은 닷새마다 섰단다. 엿장수가 가위를 쩔꺽쩔꺽 울리며 다녔지." "가위 소리는 사진에 보이나요?" 시연 단추로 \'엿장수 가위 소리\'가 \'이야기에서 알았어요\'에 놓이는 모습을 보여 준다.',
        student: '시장이나 마트에 가 본 일을 떠올려 짝에게 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '옛날 장날', slots: ['사진에서 알았어요', '이야기에서 알았어요'], cards: ['천막 아래에서 물건을 팔았어요', '엿장수 가위 소리가 났어요'], shuffle: false }, sequence: [{ sort: { '사진에서 알았어요': ['천막 아래에서 물건을 팔았어요'], '이야기에서 알았어요': ['엿장수 가위 소리가 났어요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 사진과 이야기에서 알게 된 것', minutes: 13, tool: 'mindmap',
            teacher: '"사진은 눈에 보이는 것을 알려 주고, 이야기는 소리나 언제 열렸는지처럼 사진에 없는 것도 알려 줘요." 카드를 하나씩 읽으며 "이건 사진에 보이나요?"를 묻는다. 3차시에 집에서 여쭌 답을 가져온 학생은 모둠에서 읽어 주게 한다.',
            task: '사진과 어른 이야기에서 알게 된 것을 나누고, 모둠 친구에게 여쭌 이야기를 들려줘요.',
            levels: CARD_LV,
            items: [
              { prompt: '사진: 천막과 소가 보여요. 이야기: "닷새마다 장이 섰고, 엿장수 가위 소리가 났단다." 카드를 나누어 보세요.', toolOptions: { topic: '옛날 장날', slots: ['사진에서 알았어요', '이야기에서 알았어요'], cards: ['천막 아래에서 물건을 팔았어요', '장터에 소가 있었어요', '닷새마다 장이 섰어요', '엿장수 가위 소리가 났어요'] },
                target: { sort: { '사진에서 알았어요': ['천막 아래에서 물건을 팔았어요', '장터에 소가 있었어요'], '이야기에서 알았어요': ['닷새마다 장이 섰어요', '엿장수 가위 소리가 났어요'] } }, difficulty: 0.2,
                predict: { q: '장이 언제 섰는지는 사진만 보고 알 수 있을까요?', options: ['알 수 있어요', '사진만으로는 몰라요'], answer: 1 },
                conclude: '사진과 이야기는 서로 다른 것을 알려 줘요. 함께 보면 더 많이 알 수 있어요.' },
              { prompt: '3차시에 어른께 여쭌 답을 모둠 친구에게 읽어 주었으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '사진: 아이들이 냇가에서 빨래하는 엄마 곁에 있어요. 이야기: "겨울엔 손이 꽁꽁 얼었지." 카드를 나누어 보세요.', toolOptions: { topic: '옛날 빨래', slots: ['사진에서 알았어요', '이야기에서 알았어요'], cards: ['냇가에서 빨래를 했어요', '아이들도 냇가에 따라갔어요', '겨울에는 손이 꽁꽁 얼었어요'] },
                target: { sort: { '사진에서 알았어요': ['냇가에서 빨래를 했어요', '아이들도 냇가에 따라갔어요'], '이야기에서 알았어요': ['겨울에는 손이 꽁꽁 얼었어요'] } }, difficulty: 0.25 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 옛날 장터와 지금 마트 견주기', minutes: 13, tool: 'mindmap',
            teacher: '"장터와 마트는 다른 곳이지만 같은 일을 하는 곳이에요. 무엇이 같을까요?" 달라진 점만 찾는 학생에게 \'물건을 사고판다\'는 같은 점을 찾게 한다. 흥정은 값을 깎아 달라고 말하는 것이라고 뜻을 알려 준다.',
            task: '옛날 장터와 지금 마트를 견주어 달라진 점과 그대로인 점을 찾아요.',
            levels: CARD_LV,
            items: [
              { prompt: '카드를 옛날 장터와 지금 마트로 나누어 보세요.', toolOptions: { topic: '물건 사는 곳', slots: ['옛날 장터', '지금 마트'], cards: ['닷새마다 열려요', '거의 날마다 열려요', '흥정해서 값을 깎아요', '값을 기계로 찍어요'] },
                target: { sort: { '옛날 장터': ['닷새마다 열려요', '흥정해서 값을 깎아요'], '지금 마트': ['거의 날마다 열려요', '값을 기계로 찍어요'] } }, difficulty: 0.15 },
              { prompt: '옛날 장터와 지금 마트에 모두 있는 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '둘 다 그대로예요', cards: ['물건을 사고팔아요', '돈을 내고 사요', '닷새마다 열려요', '카트를 밀어요'] },
                target: { pick: ['물건을 사고팔아요', '돈을 내고 사요'] }, difficulty: 0.2,
                levels: { challenge: { prompt: '옛날 장터와 지금 마트에 모두 있는 것만 골라 보세요. 여섯 장이에요.', toolOptions: { cards: ['물건을 사고팔아요', '돈을 내고 사요', '닷새마다 열려요', '카트를 밀어요', '채소와 과일을 팔아요', '엿장수가 가위를 울려요'] }, target: { pick: ['물건을 사고팔아요', '돈을 내고 사요', '채소와 과일을 팔아요'] } } } },
              { prompt: '물음마다 가장 알맞은 자료를 이어 보세요.', toolOptions: { mode: 'match', topic: '어디에서 알까?', slots: [{ id: 's1', label: '옛날 장터에 천막이 있었을까?' }, { id: 's2', label: '옛날 장터에서 어떤 소리가 났을까?' }], cards: ['옛날 장터 사진', '장에 다니신 어른의 이야기'] },
                target: { match: { s1: '옛날 장터 사진', s2: '장에 다니신 어른의 이야기' } }, difficulty: 0.2,
                hints: ['보이는 것을 묻는지, 소리처럼 보이지 않는 것을 묻는지 살펴봐요.', '소리는 사진에 찍히지 않아요. 다시 견주어 봐요.', '천막은 사진으로, 소리는 그때 다니신 어른의 이야기로 알 수 있어요.'] },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"사진 하나만 보면 옛날을 다 알 수 있을까요?" 사진과 이야기가 서로 다른 것을 알려 준다는 말을 이끌어 낸다. 다음 시간부터는 알게 된 것을 차례대로 설명하고 앞으로를 상상해 본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '옛날 학교 가는 길', slots: ['사진에서 알았어요', '이야기에서 알았어요'], cards: ['아이들이 책보를 메고 걸었어요', '한 시간이나 걸어서 다녔어요'] }, prompt: '사진: 책보를 멘 아이들이 걸어가요. 이야기: "한 시간이나 걸어 다녔지." 카드를 나누어 보세요.', target: { sort: { '사진에서 알았어요': ['아이들이 책보를 메고 걸었어요'], '이야기에서 알았어요': ['한 시간이나 걸어서 다녔어요'] } }, difficulty: 0.2 },
          { type: 'choice', prompt: '옛날 장터와 지금 마트에서 그대로인 것은 무엇일까요?', options: ['닷새마다 열려요', '물건을 사고팔아요', '카트를 밀어요'], answer: 1, difficulty: 0.15, explain: '장터와 마트는 둘 다 물건을 사고파는 곳이에요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '옛날 장날 알아보기',
      items: [
        { type: 'figure', wide: true, prompt: '어디에서 알게 된 것인지 나누어 쓰세요.', tool: 'mindmap', figures: [{ options: { topic: '옛날 장날', slots: ['사진에서 알았어요', '이야기에서 알았어요'], cards: ['천막 아래에서 물건을 팔았어요', '닷새마다 장이 섰어요'] }, caption: '' }], answer: '사진-천막, 이야기-닷새마다 장' },
        { type: 'table', prompt: '옛날 장터와 지금 마트를 견주어 쓰세요.', columns: ['', '옛날 장터', '지금 마트'], cells: [['언제 열려요', '', ''], ['값은 어떻게', '', '']] },
        { type: 'check', prompt: '장터와 마트에서 그대로인 것에 ✓ 하세요.', options: ['물건을 사고팔아요', '돈을 내고 사요', '흥정해서 값을 깎아요', '카트를 밀어요'] },
        { type: 'short', prompt: '어른께 들은 옛날 이야기 가운데 사진에는 없는 것을 하나 쓰세요.' },
      ],
      easy: {
        note: '소리와 날짜는 사진에 보이지 않아요.',
        items: [
          { type: 'choice', prompt: '사진으로 알 수 있는 것에 ○ 하세요.', options: ['천막이 있었어요', '가위 소리가 났어요'], answer: '천막이 있었어요' },
          { type: 'choice', prompt: '장터와 마트에서 같은 것에 ○ 하세요.', options: ['물건을 사고팔아요', '닷새마다 열려요'], answer: '물건을 사고팔아요' },
          { type: 'draw', prompt: '옛날 장날을 상상해 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 이야기는 교사가 두 번 읽어 줘요.',
      base: '모두 나눈 뒤 확인을 눌러요. 여쭌 답을 모둠에서 읽어 줘요.',
      challenge: '고르기 카드가 여섯 장으로 늘어요. 사진에 없는 것을 알아볼 물음을 하나 더 만들어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 사진에 없는 것은 옛날에 없었다고 여긴다 → 소리·날짜처럼 사진에 찍힐 수 없는 것을 이야기로 알게 됨을 보인다. ② 이야기에서 들은 것을 사진에서 본 것으로 착각한다 → "사진의 어디에 보이나요? 손가락으로 짚어 봐요." ③ 다른 것만 찾고 같은 것은 놓친다 → 장터와 마트가 둘 다 하는 일을 묻는다. 3차시 활동지를 가져오지 못한 학생은 선생님이 들려준 이야기로 함께 한다. 이 차시의 할머니 이야기는 교사가 지어 들려주는 예시다.',
  }));

  // ───────────────────────── 9~12차시: 달라진 차례 설명하고 앞으로 상상하기 ─────────────────────────

  var THREE = ['옛날', '지금', '앞으로'];
  var BUS_NOW = { pieces: [
    { shape: 'rect', color: '파랑', size: 'l', x: 280, y: 200, r: 0 },
    { shape: 'circle', color: '검정', size: 's', x: 240, y: 260, r: 0 }, { shape: 'circle', color: '검정', size: 's', x: 320, y: 260, r: 0 },
  ] };
  var FUTURE_LV = COL_LV(['rect', 'triangle', 'circle', 'square'], ['파랑', '노랑', '검정', '초록', '빨강', '하양']);

  lessons.push(L(9, {
    title: '옛날·지금·앞으로 차례로 탈것 설명하기',
    objective: '탈것이 어떻게 달라졌는지 옛날·지금·앞으로의 차례를 지켜 설명하고, 앞으로의 탈것을 상상해 꾸밀 수 있다.',
    illustration: ART('a paper ox cart, a modern bus and an imagined flying bus with wings lined up from left to right along a road that rises into the sky', '앞으로는 어떻게 될까?', [
      { motif: 'cloud', x: 330, y: 70, s: 0.8 }, { motif: 'star', x: 430, y: 96, s: 0.5 }, { motif: 'tree', x: 80, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"소달구지에서 버스로 바뀌었어요. 그다음에는 어떻게 될까요?" 손을 들게 한 뒤 "앞으로의 일은 아무도 생각할 수 없을까요?"라고 묻는다. 지금까지 바뀌어 온 모습(더 빠르게, 더 편하게)을 보면 앞으로를 상상할 수 있다는 것을 짚는다. 시연 단추로 세 문장이 옛날·지금·앞으로 칸에 놓이는 모습을 보여 준다.',
        student: '지금 타고 싶은 상상 속 탈것을 짝에게 말해 봐요.',
        demo: { tool: 'timeline', options: { mode: 'order', axis: ['옛날', '앞으로'], slots: THREE, cards: ['옛날에는 소달구지를 탔어요', '지금은 버스를 타요', '앞으로는 하늘을 나는 버스를 탈지도 몰라요'], shuffle: false }, sequence: [{ order: ['옛날에는 소달구지를 탔어요', '지금은 버스를 타요', '앞으로는 하늘을 나는 버스를 탈지도 몰라요'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 차례를 지켜 설명하기', minutes: 12, tool: 'timeline',
            teacher: '"설명할 때 무엇부터 말할까요?" \'옛날에는, 지금은, 앞으로는\' 말머리를 칠판에 적고 함께 읽는다. 문장을 놓은 뒤 처음부터 끝까지 이어 읽게 한다. 앞으로 칸에 \'지금은\' 문장을 놓는 학생에게 말머리를 손가락으로 짚게 한다.',
            task: '설명하는 문장을 옛날, 지금, 앞으로 차례에 맞게 놓고 이어 읽어요.',
            levels: CARD_LV,
            items: [
              { prompt: '전화기 설명을 옛날, 지금, 앞으로 차례로 놓아 보세요.', toolOptions: { mode: 'order', axis: ['옛날', '앞으로'], slots: THREE, cards: ['옛날에는 숫자 판을 돌려 전화를 걸었어요', '지금은 화면을 눌러 전화를 걸어요', '앞으로는 생각만 해도 전화가 걸릴지도 몰라요'] },
                target: { order: ['옛날에는 숫자 판을 돌려 전화를 걸었어요', '지금은 화면을 눌러 전화를 걸어요', '앞으로는 생각만 해도 전화가 걸릴지도 몰라요'] }, difficulty: 0.1 },
              { prompt: '신발 설명을 차례로 놓아 보세요.', toolOptions: { mode: 'order', axis: ['옛날', '앞으로'], slots: THREE, cards: ['옛날에는 짚으로 엮은 짚신을 신었어요', '지금은 고무와 천으로 만든 운동화를 신어요', '앞으로는 발 크기에 맞게 저절로 늘어나는 신발이 나올지도 몰라요'] },
                target: { order: ['옛날에는 짚으로 엮은 짚신을 신었어요', '지금은 고무와 천으로 만든 운동화를 신어요', '앞으로는 발 크기에 맞게 저절로 늘어나는 신발이 나올지도 몰라요'] }, difficulty: 0.15 },
              { prompt: '기차 설명 네 문장을 차례로 놓아 보세요.', toolOptions: { mode: 'order', axis: ['옛날', '앞으로'], slots: ['아주 옛날', '옛날', '지금', '앞으로'], cards: ['아주 옛날에는 석탄을 때는 기차가 다녔어요', '그다음에는 기름으로 가는 기차가 다녔어요', '지금은 전기로 아주 빠른 기차가 다녀요', '앞으로는 바닷속 굴로 다른 나라에 가는 기차가 생길지도 몰라요'] },
                target: { order: ['아주 옛날에는 석탄을 때는 기차가 다녔어요', '그다음에는 기름으로 가는 기차가 다녔어요', '지금은 전기로 아주 빠른 기차가 다녀요', '앞으로는 바닷속 굴로 다른 나라에 가는 기차가 생길지도 몰라요'] }, difficulty: 0.25,
                predict: { q: '앞으로의 기차는 어떻게 상상할 수 있을까요?', options: ['아무도 몰라요', '바뀌어 온 모습을 보고 생각해요'], answer: 1 },
                conclude: '바뀌어 온 차례를 보면 앞으로를 상상해 볼 수 있어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 앞으로의 탈것 꾸미기', minutes: 14, tool: 'collage',
            teacher: '"지금 버스에서 무엇을 바꾸면 앞으로의 버스가 될까요?" 버스 몸은 두고 바꿀 곳을 먼저 말하게 한다. 상상에는 맞고 틀린 것이 없지만, 지금 것에서 무엇을 바꾸었는지는 말할 수 있어야 한다고 짚는다. 다 꾸민 학생은 "옛날에는 소달구지, 지금은 버스, 앞으로는 ○○ 버스예요."처럼 짝에게 말해 보게 한다.',
            task: '지금 버스 그림에서 바꿀 곳을 정해 조각을 붙이고, 앞으로의 탈것을 꾸며요.',
            levels: FUTURE_LV,
            items: [
              { prompt: '파랑 버스 몸은 그대로 두고, 노랑 세모 날개를 두 개 붙여 하늘을 나는 버스로 바꾸어 보세요.', state: BUS_NOW,
                target: { has: [{ shape: 'rect', color: '파랑', size: 'l', n: 1 }, { shape: 'triangle', color: '노랑', min: 2 }] }, difficulty: 0.15,
                hints: ['지금 버스에서 그대로 둘 곳과 새로 붙일 곳을 먼저 말해 봐요.', '버스 몸이 남아 있는지, 날개를 몇 개 붙였는지 세어 봐요.', '파랑 긴 네모는 두고, 노랑 세모를 두 개 붙여요.'] },
              { prompt: '검정 바퀴를 모두 떼고, 하양 동그라미 구름 바퀴를 두 개 이상 붙여 보세요.', state: BUS_NOW,
                target: { has: [{ shape: 'circle', color: '검정', n: 0 }, { shape: 'circle', color: '하양', min: 2 }, { shape: 'rect', color: '파랑', n: 1 }] }, difficulty: 0.2,
                hints: ['어떤 조각을 떼고 어떤 조각을 붙일지 문제를 다시 읽어요.', '검정 바퀴가 아직 남아 있는지, 버스 몸까지 떼지는 않았는지 살펴봐요.', '검정 동그라미 두 개를 떼고 하양 동그라미를 두 개 붙여요. 파랑 버스 몸은 그대로 둬요.'] },
              { prompt: '앞으로의 탈것을 내 생각대로 꾸미고, 해낸 것을 점검 목록에 표시해요.', state: BUS_NOW,
                target: { selfCheck: ['지금 탈것에서 바꾼 곳이 있어요', '조각을 다섯 개 넘게 썼어요', '짝에게 옛날·지금·앞으로 차례로 설명했어요'], minPieces: 5 }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"앞으로의 일은 아무도 생각할 수 없을까요?" 두세 명의 작품을 띄워 지금 것에서 무엇을 바꾸었는지 말하게 한다. 설명할 때 말머리(옛날에는·지금은·앞으로는)를 지켰는지 짝이 손가락 세 개로 세어 준다.',
        exitTicket: [
          { type: 'tool', tool: 'timeline', options: { mode: 'order', axis: ['옛날', '앞으로'], slots: THREE, cards: ['옛날에는 편지를 써서 소식을 보냈어요', '지금은 휴대 전화로 글을 보내요', '앞으로는 바로 앞에 있는 것처럼 만나서 이야기할지도 몰라요'] }, prompt: '소식 전하기 설명을 옛날, 지금, 앞으로 차례로 놓아 보세요.', target: { order: ['옛날에는 편지를 써서 소식을 보냈어요', '지금은 휴대 전화로 글을 보내요', '앞으로는 바로 앞에 있는 것처럼 만나서 이야기할지도 몰라요'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '앞으로의 탈것을 상상할 때 도움이 되는 것은 무엇일까요?', options: ['지금까지 바뀌어 온 모습', '아무것도 없어요'], answer: 0, difficulty: 0.1, explain: '점점 빠르고 편해진 모습을 보면 앞으로를 상상할 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '옛날·지금·앞으로 탈것',
      items: [
        { type: 'figure', wide: true, prompt: '문장을 옛날, 지금, 앞으로 차례로 번호를 쓰세요.', tool: 'timeline', figures: [{ options: { mode: 'order', axis: ['옛날', '앞으로'], slots: THREE, cards: ['지금은 버스를 타요', '앞으로는 하늘을 나는 버스를 탈지도 몰라요', '옛날에는 소달구지를 탔어요'], shuffle: false }, caption: '' }], answer: '소달구지 → 버스 → 하늘을 나는 버스' },
        { type: 'table', prompt: '탈것 하나를 골라 차례로 쓰세요.', columns: ['옛날에는', '지금은', '앞으로는'], rows: 1 },
        { type: 'choice', prompt: '설명할 때 가장 먼저 쓰는 말머리에 ○ 하세요.', options: ['앞으로는', '옛날에는', '지금은'], answer: '옛날에는' },
        { type: 'draw', prompt: '앞으로의 탈것을 상상해 그리고, 지금 탈것에서 바꾼 곳에 ○ 하세요.' },
      ],
      easy: {
        note: '옛날에는 → 지금은 → 앞으로는',
        items: [
          { type: 'choice', prompt: '옛날 탈것에 ○ 하세요.', options: ['소달구지', '버스'], answer: '소달구지' },
          { type: 'choice', prompt: '앞으로를 상상한 말에 ○ 하세요.', options: ['앞으로는 하늘을 나는 버스가 생길지도 몰라요', '지금은 버스를 타요'], answer: '앞으로는 하늘을 나는 버스가 생길지도 몰라요' },
          { type: 'draw', prompt: '타 보고 싶은 상상 탈것을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 초록 테두리가 생겨요. 콜라주 고르개는 모양 네 가지, 색 여섯 가지만 나와요.',
      base: '모두 놓은 뒤 확인을 눌러요. 꾸민 탈것을 말머리 세 개로 설명해요.',
      challenge: '네 문장 차례를 놓고, 모든 모양과 색으로 탈것을 꾸며요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 앞으로의 일은 아무도 생각할 수 없다고 여긴다 → 바뀌어 온 방향(빨라짐·편해짐)을 짚고 다음을 상상하게 한다. ② 상상만 말하고 옛날·지금을 빼먹는다 → 손가락 세 개로 말머리를 세게 한다. ③ 상상에 정답을 찾으려 한다 → 무엇을 바꾸었는지 말하면 된다고 안심시킨다. \'~지도 몰라요\'는 상상을 나타내는 말이라는 것을 알려 준다.',
  }));

  var APT_NOW = { pieces: [
    { shape: 'rect', color: '파랑', size: 'l', x: 220, y: 240, r: 90 }, { shape: 'rect', color: '파랑', size: 'l', x: 340, y: 240, r: 90 },
    { shape: 'circle', color: '노랑', size: 'm', x: 480, y: 80, r: 0 },
  ] };

  lessons.push(L(10, {
    title: '집이 바뀐 차례 말하고 앞으로의 집 꾸미기',
    objective: '집이 초가집에서 아파트로 바뀐 차례를 설명하고, 앞으로의 집을 상상해 색종이 조각으로 꾸밀 수 있다.',
    illustration: ART('a row of paper houses changing from a thatched cottage to a tiled-roof house to an apartment and then to an imagined house with a garden on the roof and wings of solar leaves', '앞으로의 우리 집', [
      { motif: 'house', x: 90, y: 214, color: 'buttercup', s: 0.8 }, { motif: 'house', x: 390, y: 210, color: 'mint', s: 1.1 }, { motif: 'flower', x: 240, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"3차시에 할머니 어릴 적 집을 살펴봤지요? 그 집이 어떻게 바뀌어 지금 우리 집이 되었을까요?" 초가집, 기와집, 아파트 그림을 차례로 붙인다. 시연 단추로 설명 문장이 차례대로 놓이는 모습을 보여 준다. 오늘은 그다음에 올 집을 상상해 꾸민다고 알린다.',
        student: '내가 살고 싶은 집을 한 가지 떠올려 짝에게 말해 봐요.',
        demo: { tool: 'timeline', options: { mode: 'order', axis: ['옛날', '앞으로'], slots: THREE, cards: ['옛날에는 짚 지붕을 얹은 초가집에 살았어요', '지금은 높은 아파트에 많이 살아요', '앞으로는 지붕에 밭이 있는 집에 살지도 몰라요'], shuffle: false }, sequence: [{ order: ['옛날에는 짚 지붕을 얹은 초가집에 살았어요', '지금은 높은 아파트에 많이 살아요', '앞으로는 지붕에 밭이 있는 집에 살지도 몰라요'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 집 이야기 차례 세우기', minutes: 12, tool: 'story',
            teacher: '"설명을 들을 친구가 잘 알아들으려면 무엇부터 말해야 할까요?" 무엇을 설명하는지 먼저 말하고, 옛날·지금·앞으로를 차례로 말하는 틀을 함께 읽는다. 말머리를 빼고 \'아파트예요\'처럼 말하는 학생에게 "언제의 모습인가요?"를 묻는다.',
            task: '집이 바뀐 이야기를 설명하는 차례에 맞게 문장을 놓고, 말머리를 넣어 완성해요.',
            levels: CARD_LV,
            items: [
              { prompt: '집 설명을 말하는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', slots: ['처음', '둘째', '셋째', '끝'], cards: ['제가 설명할 것은 우리 집이에요', '옛날에는 초가집에 살았어요', '지금은 아파트에 살아요', '앞으로는 지붕에 밭이 있는 집에 살지도 몰라요'] },
                target: { order: ['제가 설명할 것은 우리 집이에요', '옛날에는 초가집에 살았어요', '지금은 아파트에 살아요', '앞으로는 지붕에 밭이 있는 집에 살지도 몰라요'] }, difficulty: 0.15,
                conclude: '무엇을 설명할지 먼저 말하고, 옛날부터 차례로 말하면 잘 알아들어요.' },
              { prompt: '빈칸에 알맞은 말머리를 넣어 집 설명을 완성해 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'b1', label: '___ 아궁이로 방을 데웠어요.' }, { id: 'b2', label: '___ 보일러로 방을 데워요.' }, { id: 'b3', label: '___ 햇빛만으로 방이 따뜻해질지도 몰라요.' }], cards: ['옛날에는', '지금은', '앞으로는'] },
                target: { fill: { b1: '옛날에는', b2: '지금은', b3: '앞으로는' } }, difficulty: 0.15 },
              { prompt: '집 이야기 문장을 언제의 일인지에 따라 나누어 보세요.', toolOptions: { mode: 'sort', topic: '언제의 이야기?', slots: THREE, cards: ['마당 우물에서 물을 길었어요', '부엌 수도꼭지를 틀어요', '빗물을 모아 깨끗한 물로 바꾸는 집이 생길지도 몰라요', '등잔불을 켰어요', '전등을 켜요', '집이 스스로 불을 켜고 끌지도 몰라요'] },
                target: { sort: { '옛날': ['마당 우물에서 물을 길었어요', '등잔불을 켰어요'], '지금': ['부엌 수도꼭지를 틀어요', '전등을 켜요'], '앞으로': ['빗물을 모아 깨끗한 물로 바꾸는 집이 생길지도 몰라요', '집이 스스로 불을 켜고 끌지도 몰라요'] } }, difficulty: 0.25,
                hints: ['문장 끝을 보세요. \'~었어요\', \'~요\', \'~지도 몰라요\'가 언제의 일을 알려 줘요.', '\'~지도 몰라요\'로 끝나는 문장이 앞으로 칸에 있는지 살펴봐요.', '\'~었어요\'는 옛날, \'~요\'는 지금, \'~지도 몰라요\'는 앞으로 칸에 놓아요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 앞으로의 집 꾸미기', minutes: 14, tool: 'collage',
            teacher: '"지금 아파트에 무엇을 더하면 앞으로의 집이 될까요?" 지붕 밭, 해를 모으는 판, 나무가 자라는 벽처럼 학생 생각을 칠판에 모은다. 조각을 붙이기 전에 무엇을 바꿀지 짝에게 먼저 말하게 한다.',
            task: '지금 아파트 그림에 조각을 더해 앞으로의 집을 꾸미고, 무엇을 바꾸었는지 말해요.',
            levels: FUTURE_LV,
            items: [
              { prompt: '아파트 지붕 위에 초록 세모 나무를 세 개 이상 붙여 지붕 숲을 만들어 보세요.', state: APT_NOW,
                target: { has: [{ shape: 'triangle', color: '초록', min: 3 }, { shape: 'rect', color: '파랑', n: 2 }] }, difficulty: 0.15 },
              { prompt: '아파트 벽에 검정 네모 판을 두 개 붙여 햇빛을 모으는 집으로 만들어 보세요. 해는 그대로 둬요.', state: APT_NOW,
                target: { has: [{ shape: 'square', color: '검정', n: 2 }, { shape: 'circle', color: '노랑', n: 1 }, { shape: 'rect', color: '파랑', n: 2 }] }, difficulty: 0.2,
                hints: ['문제에서 붙일 조각과 그대로 둘 조각을 나누어 말해 봐요.', '검정 네모가 몇 개인지, 해와 아파트가 그대로 있는지 세어 봐요.', '검정 네모를 꼭 두 개 붙이고, 노랑 해와 파랑 아파트 두 채는 그대로 둬요.'] },
              { prompt: '내가 살고 싶은 앞으로의 집을 꾸미고, 해낸 것을 점검 목록에 표시해요.', state: APT_NOW,
                target: { selfCheck: ['지금 집에서 바꾼 곳이 있어요', '조각을 다섯 개 넘게 썼어요', '짝에게 무엇을 바꾸었는지 말했어요'], minPieces: 5 }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"짝의 집에서 지금 집과 달라진 곳은 어디였나요?" 두세 명이 짝의 작품을 설명하게 한다. 출구 1번에서 문장 끝말로 때를 찾는 방법을 다시 짚는다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { mode: 'fill', slots: [{ id: 'e1', label: '___ 냇가에서 빨래를 했어요.' }, { id: 'e2', label: '___ 세탁기로 빨래를 해요.' }, { id: 'e3', label: '___ 옷이 스스로 깨끗해질지도 몰라요.' }], cards: ['옛날에는', '지금은', '앞으로는'] }, prompt: '빨래 설명의 빈칸에 알맞은 말머리를 넣어 보세요.', target: { fill: { e1: '옛날에는', e2: '지금은', e3: '앞으로는' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '설명할 때 가장 먼저 할 말은 무엇일까요?', options: ['무엇을 설명할지 말해요', '앞으로의 모습을 말해요', '끝인사를 해요'], answer: 0, difficulty: 0.15, explain: '무엇을 설명하는지 먼저 말해야 듣는 사람이 잘 알아들어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '앞으로의 우리 집',
      items: [
        { type: 'figure', wide: true, prompt: '빈칸에 알맞은 말머리를 쓰세요.', tool: 'story', figures: [{ options: { mode: 'fill', slots: [{ id: 'b1', label: '___ 아궁이로 방을 데웠어요.' }, { id: 'b2', label: '___ 보일러로 방을 데워요.' }], cards: ['옛날에는', '지금은'] }, caption: '' }], answer: '옛날에는, 지금은' },
        { type: 'table', prompt: '집이 바뀐 차례를 쓰세요.', columns: ['옛날에는', '지금은', '앞으로는'], cells: [['초가집', '', '']] },
        { type: 'choice', prompt: '앞으로를 상상한 문장에 ○ 하세요.', options: ['전등을 켜요', '집이 스스로 불을 켤지도 몰라요', '등잔불을 켰어요'], answer: '집이 스스로 불을 켤지도 몰라요' },
        { type: 'draw', prompt: '내가 살고 싶은 앞으로의 집을 그려 보세요.' },
      ],
      easy: {
        note: '\'~지도 몰라요\'는 앞으로를 상상한 말이에요.',
        items: [
          { type: 'choice', prompt: '옛날 집에 ○ 하세요.', options: ['초가집', '아파트'], answer: '초가집' },
          { type: 'choice', prompt: '앞으로를 상상한 말에 ○ 하세요.', options: ['지붕에 밭이 있는 집이 생길지도 몰라요', '아파트에 살아요'], answer: '지붕에 밭이 있는 집이 생길지도 몰라요' },
          { type: 'draw', prompt: '살고 싶은 집을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 초록 테두리가 생겨요. 콜라주 고르개는 모양 네 가지, 색 여섯 가지만 나와요.',
      base: '모두 놓은 뒤 확인을 눌러요. 꾸민 집을 차례대로 설명해요.',
      challenge: '문장 여섯 장을 세 때로 나누고, 모든 모양과 색으로 집을 꾸며요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 설명을 앞으로의 모습부터 말한다 → 무엇을 → 옛날 → 지금 → 앞으로 차례 카드를 칠판에 붙여 둔다. ② 문장 끝말로 때를 가리지 못한다 → \'~었어요\', \'~지도 몰라요\'에 밑줄을 긋게 한다. ③ 상상한 집에 지금 집과 같은 것만 붙인다 → "지금 집에는 없는 것은 무엇이에요?"라고 묻는다. 학생마다 사는 집이 다르니 \'우리 집\'은 아파트가 아니어도 된다고 말해 준다.',
  }));

  lessons.push(L(11, {
    title: '책가방과 학용품이 바뀐 이야기 발표 연습하기',
    objective: '책가방이나 학용품 하나를 골라 옛날·지금·앞으로를 차례대로 짝에게 발표할 수 있다.',
    illustration: ART('a cloth bundle bag, a modern school backpack and an imagined floating backpack with a pencil that writes by itself, arranged on a desk with a child presenting', '차례대로 발표해요', [
      { motif: 'star', x: 240, y: 92, s: 0.6 }, { motif: 'tree', x: 90, y: 214 }, { motif: 'house', x: 390, y: 214, color: 'lavender' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"옛날 아이들은 책가방 대신 책보에 책을 싸서 허리에 맸대요." 보자기로 책을 싸서 허리에 매는 모습을 직접 보여 준다. 학생 한 명이 해 보게 한다. 시연 단추로 책가방 이야기가 차례대로 놓이는 모습을 보여 준다. 오늘은 짝에게 발표하는 연습을 한다고 알린다.',
        student: '보자기로 책을 싸 보거나, 친구가 싸는 모습을 보며 무엇이 불편할지 말해 봐요.',
        demo: { tool: 'timeline', options: { mode: 'order', axis: ['옛날', '앞으로'], slots: THREE, cards: ['옛날에는 책보에 책을 쌌어요', '지금은 책가방을 메요', '앞으로는 책가방이 둥둥 떠서 따라올지도 몰라요'], shuffle: false }, sequence: [{ order: ['옛날에는 책보에 책을 쌌어요', '지금은 책가방을 메요', '앞으로는 책가방이 둥둥 떠서 따라올지도 몰라요'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 학용품 이야기 차례 세우기', minutes: 12, tool: 'timeline',
            teacher: '"연필은 옛날에 무엇이었을까요?" 붓과 먹을 보여 주거나 사진을 띄운다. 차례를 놓은 뒤 소리 내어 이어 읽게 한다. "앞으로는 모르니까 안 써도 돼요"라는 학생에게 지금까지 바뀌어 온 모습을 보고 한 가지만 상상해 보자고 한다.',
            task: '학용품이 바뀐 이야기를 옛날, 지금, 앞으로 차례로 놓고 이어 읽어요.',
            levels: CARD_LV,
            items: [
              { prompt: '쓰는 도구 이야기를 차례로 놓아 보세요.', toolOptions: { mode: 'order', axis: ['옛날', '앞으로'], slots: THREE, cards: ['옛날에는 붓에 먹물을 묻혀 썼어요', '지금은 연필로 써요', '앞으로는 말하는 대로 글자가 써질지도 몰라요'] },
                target: { order: ['옛날에는 붓에 먹물을 묻혀 썼어요', '지금은 연필로 써요', '앞으로는 말하는 대로 글자가 써질지도 몰라요'] }, difficulty: 0.1 },
              { prompt: '교실 불빛 이야기를 차례로 놓아 보세요.', toolOptions: { mode: 'order', axis: ['옛날', '앞으로'], slots: THREE, cards: ['옛날에는 창문 햇빛에 기대어 공부했어요', '지금은 전등을 켜고 공부해요', '앞으로는 천장 전체가 해처럼 빛날지도 몰라요'] },
                target: { order: ['옛날에는 창문 햇빛에 기대어 공부했어요', '지금은 전등을 켜고 공부해요', '앞으로는 천장 전체가 해처럼 빛날지도 몰라요'] }, difficulty: 0.15 },
              { prompt: '책가방 이야기에서 빠진 칸에 알맞은 문장을 넣어 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'b1', label: '옛날에는 ___.' }, { id: 'b2', label: '지금은 ___.' }, { id: 'b3', label: '앞으로는 ___.' }], cards: ['책보에 책을 싸서 허리에 맸어요', '책가방을 등에 메요', '책가방이 저절로 따라올지도 몰라요'] },
                target: { fill: { b1: '책보에 책을 싸서 허리에 맸어요', b2: '책가방을 등에 메요', b3: '책가방이 저절로 따라올지도 몰라요' } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['책보에 책을 싸서 허리에 맸어요', '책가방을 등에 메요', '책가방이 저절로 따라올지도 몰라요', '책가방은 빨간색이 좋아요'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 짝에게 발표하기 (실습)', minutes: 14, tool: 'mindmap',
            teacher: '"발표는 짝과 둘이서, 한 사람이 1분씩 해요." 타이머로 1분을 맞추고 번갈아 발표하게 한다. 듣는 짝은 손가락 세 개를 펴 두고, 옛날·지금·앞으로를 말할 때마다 하나씩 접는다. 끝나면 잘 들은 친구의 발표 모습을 고른다.',
            task: '짝에게 1분 동안 발표하고, 듣는 사람과 말하는 사람이 지킬 것을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '짝과 번갈아 1분씩 학용품 이야기를 발표했으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '발표하는 사람이 지킬 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '발표할 때', cards: ['무엇을 설명할지 먼저 말해요', '옛날부터 차례로 말해요', '친구 쪽을 보며 또박또박 말해요', '앞으로만 말해요'] },
                target: { pick: ['무엇을 설명할지 먼저 말해요', '옛날부터 차례로 말해요', '친구 쪽을 보며 또박또박 말해요'] }, difficulty: 0.15 },
              { prompt: '짝의 발표를 들으며 들은 말을 언제의 이야기인지 나누어 보세요.', toolOptions: { mode: 'sort', topic: '짝의 발표', slots: THREE, cards: ['붓으로 썼어요', '연필로 써요', '말하면 글자가 써질지도 몰라요', '책보를 맸어요', '책가방을 메요', '책가방이 날아다닐지도 몰라요'] },
                target: { sort: { '옛날': ['붓으로 썼어요', '책보를 맸어요'], '지금': ['연필로 써요', '책가방을 메요'], '앞으로': ['말하면 글자가 써질지도 몰라요', '책가방이 날아다닐지도 몰라요'] } }, difficulty: 0.2 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"짝이 손가락 세 개를 다 접었나요?" 다 접은 짝을 칭찬하고, 빠진 말머리가 있었다면 무엇이었는지 말하게 한다. 다음 시간에는 우리 동네의 앞으로를 꾸며 작은 전시회를 연다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'timeline', options: { mode: 'order', axis: ['옛날', '앞으로'], slots: THREE, cards: ['옛날에는 칠판에 분필로 썼어요', '지금은 전자칠판에 손가락으로 써요', '앞으로는 허공에 글씨가 떠오를지도 몰라요'] }, prompt: '칠판 이야기를 차례로 놓아 보세요.', target: { order: ['옛날에는 칠판에 분필로 썼어요', '지금은 전자칠판에 손가락으로 써요', '앞으로는 허공에 글씨가 떠오를지도 몰라요'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '짝의 발표를 들을 때 바른 모습은 무엇일까요?', options: ['짝을 보며 끝까지 들어요', '다른 친구와 이야기해요', '내 차례만 기다려요'], answer: 0, difficulty: 0.1, explain: '짝을 보며 끝까지 들어야 차례대로 말했는지 알 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '학용품 이야기 발표',
      items: [
        { type: 'figure', wide: true, prompt: '문장을 차례대로 번호를 쓰세요.', tool: 'timeline', figures: [{ options: { mode: 'order', axis: ['옛날', '앞으로'], slots: THREE, cards: ['지금은 연필로 써요', '옛날에는 붓에 먹물을 묻혀 썼어요', '앞으로는 말하는 대로 글자가 써질지도 몰라요'], shuffle: false }, caption: '' }], answer: '붓 → 연필 → 말하는 대로' },
        { type: 'table', prompt: '내가 고른 학용품 이야기를 쓰세요.', columns: ['옛날에는', '지금은', '앞으로는'], rows: 1 },
        { type: 'check', prompt: '발표할 때 지킨 것에 ✓ 하세요.', options: ['무엇을 설명할지 먼저 말했어요', '옛날부터 차례로 말했어요', '친구 쪽을 보며 말했어요'] },
        { type: 'short', prompt: '짝의 발표에서 가장 재미있던 상상을 쓰세요.' },
      ],
      easy: {
        note: '손가락 세 개: 옛날에는, 지금은, 앞으로는!',
        items: [
          { type: 'choice', prompt: '옛날에 쓰던 것에 ○ 하세요.', options: ['붓', '연필'], answer: '붓' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '옛날에는 ___에 책을 쌌어요.', answer: '책보' },
          { type: 'draw', prompt: '앞으로의 책가방을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 초록 테두리가 생겨요. 발표는 문장 카드를 보며 읽어도 돼요.',
      base: '모두 놓은 뒤 확인을 눌러요. 1분 동안 카드 없이 발표해요.',
      challenge: '빈칸에 맞지 않는 문장이 섞여 있어요. 발표에 \'왜 바뀌었을까\'를 한 문장 더해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 발표가 앞으로의 상상으로만 끝난다 → 듣는 짝의 손가락 세기로 빠진 때를 알게 한다. ② 앞으로는 모르니 말할 필요가 없다고 여긴다 → 붓→연필처럼 편해진 방향을 보고 한 가지만 상상하게 한다. ③ 짝이 발표하는 동안 자기 것만 준비한다 → 들은 말을 나누는 활동을 바로 이어 한다. 보자기·붓·먹은 실물이 있으면 함께 보여 준다.',
  }));

  var TOWN_NOW = { pieces: [
    { shape: 'triangle', color: '초록', size: 'l', x: 120, y: 120, r: 0 }, { shape: 'rect', color: '파랑', size: 'l', x: 300, y: 240, r: 90 },
    { shape: 'rect', color: '검정', size: 'l', x: 280, y: 360, r: 0 },
  ] };

  lessons.push(L(12, {
    title: '앞으로의 우리 동네 꾸며 작은 전시회 열기',
    objective: '앞으로의 우리 동네를 상상해 꾸미고, 전시회에서 친구의 작품을 옛날·지금·앞으로 차례로 들으며 질문할 수 있다.',
    illustration: ART('a classroom gallery of paper collages showing imagined future towns with tree-covered buildings and floating gardens, children walking around with sticky notes', '상상 전시회', [
      { motif: 'tree', x: 90, y: 214 }, { motif: 'house', x: 250, y: 214, color: 'mint' }, { motif: 'flower', x: 400, y: 228, color: 'rose' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"우리 동네는 옛날에 어땠고 지금은 어떤가요? 앞으로는 어떻게 될까요?" 6차시 마을 그림을 다시 띄운다. 시연 단추로 지금 동네 그림을 보여 주고 "오늘은 앞으로의 동네를 꾸며 전시회를 열어요"라고 알린다. 앞으로의 동네는 우리가 바라는 대로 상상해도 된다고 말해 준다.',
        student: '우리 동네에 앞으로 생기면 좋겠는 것을 하나 떠올려 봐요.',
        demo: { tool: 'collage', options: { readOnly: true }, sequence: [{ has: [{ shape: 'triangle', color: '초록', size: 'l', n: 1 }, { shape: 'rect', color: '파랑', min: 1 }] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 앞으로의 동네 꾸미기', minutes: 13, tool: 'collage',
            teacher: '"지금 동네 그림에 무엇을 더하고, 무엇을 바꿀까요?" 산은 그대로 두고 바꿀 것을 먼저 정하게 한다. 꾸민 뒤에는 작품 이름표에 \'옛날에는, 지금은, 앞으로는\' 세 줄을 쓰게 한다.',
            task: '지금 동네 그림에서 그대로 둘 것과 바꿀 것을 정해 앞으로의 동네를 꾸며요.',
            levels: FUTURE_LV,
            items: [
              { prompt: '산은 그대로 두고, 검정 찻길 둘레에 초록 동그라미 나무를 네 개 이상 심어 보세요.', state: TOWN_NOW,
                target: { has: [{ shape: 'triangle', color: '초록', size: 'l', n: 1 }, { shape: 'circle', color: '초록', min: 4 }] }, difficulty: 0.15 },
              { prompt: '파랑 건물 위에 빨강 세모 지붕 정원과 노랑 동그라미 해를 하나씩 붙여 보세요.', state: TOWN_NOW,
                target: { has: [{ shape: 'triangle', color: '빨강', min: 1 }, { shape: 'circle', color: '노랑', min: 1 }, { shape: 'rect', color: '파랑', n: 1 }] }, difficulty: 0.15 },
              { prompt: '내가 바라는 앞으로의 동네를 꾸미고, 해낸 것을 점검 목록에 표시해요.', state: TOWN_NOW,
                target: { selfCheck: ['그대로 둔 것이 있어요', '새로 생긴 것을 두 가지 넘게 붙였어요', '작품 이름표에 옛날·지금·앞으로를 썼어요'], minPieces: 6 }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 상상 전시회에서 듣고 묻기', minutes: 14, tool: 'emotion',
            teacher: '"모둠마다 작품을 책상 위에 펼치고, 모둠 안에서 한 사람씩 돌아가며 1분씩 설명해요." 네 명 모둠이면 4분 남짓이다. 듣는 친구는 붙임 딱지에 궁금한 것을 하나 적어 붙인다. "그런 건 안 생겨요!"라고 말하는 학생이 있으면 상상을 들을 때의 말을 함께 고른다.',
            task: '모둠 전시회에서 친구 설명을 듣고, 상상을 들을 때 할 말을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '모둠 친구들의 작품 설명을 모두 듣고 붙임 딱지에 물음을 붙였으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '준호가 "앞으로는 하늘에 떠 있는 놀이터가 생길지도 몰라요"라고 해요. 어떻게 말할까요?', toolOptions: { mode: 'branch', who: '준호', situation: '준호가 앞으로의 동네에 하늘에 떠 있는 놀이터를 붙였어요.', choices: [
                { id: 'no', text: '"그런 건 절대 안 생겨!"', result: '준호가 상상을 말하기 싫어져요.', mood: '속상함', why: '상상은 아직 없는 것을 생각해 보는 거예요.' },
                { id: 'ask', text: '"거기엔 어떻게 올라가?" 하고 물어요', result: '준호가 신나서 사다리 구름을 더 설명해요.', mood: '신남' },
                { id: 'skip', text: '듣지 않고 내 작품만 봐요', result: '준호가 외로워요.', mood: '외로움', why: '친구의 설명을 끝까지 들어 봐요.' }] }, target: { choice: 'ask' }, difficulty: 0.1 },
              { prompt: '친구의 상상을 들은 뒤 붙임 딱지에 적기 좋은 말만 골라 보세요.', toolOptions: { mode: 'pick', basket: '붙임 딱지에 적을 말', cards: ['나무는 누가 심었어?', '밤에는 어떻게 돼?', '말도 안 돼.', '내 것이 더 멋져.'] },
                target: { pick: ['나무는 누가 심었어?', '밤에는 어떻게 돼?'] }, difficulty: 0.1,
                levels: { challenge: { prompt: '친구의 상상을 들은 뒤 붙임 딱지에 적기 좋은 말만 골라 보세요. 여섯 장이에요.', toolOptions: { cards: ['나무는 누가 심었어?', '밤에는 어떻게 돼?', '말도 안 돼.', '내 것이 더 멋져.', '거기엔 어떻게 가?', '빨리 끝내.'] }, target: { pick: ['나무는 누가 심었어?', '밤에는 어떻게 돼?', '거기엔 어떻게 가?'] } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 들은 상상 가운데 가장 놀라웠던 것은 무엇이에요?" 두세 명이 말하게 한다. 1~12차시 동안 \'옛날을 살피고, 지금과 견주고, 앞으로를 상상했다\'는 흐름을 칠판에 세 칸으로 정리한다. 작품은 복도에 붙여 다른 반도 보게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'collage', options: { shapes: ['circle', 'triangle', 'rect'], colors: ['초록', '파랑', '노랑'] }, state: { pieces: [{ shape: 'rect', color: '파랑', size: 'l', x: 280, y: 240, r: 90 }] }, prompt: '파랑 건물은 그대로 두고, 초록 세모 나무 두 개와 노랑 동그라미 해 하나를 붙여 보세요.', target: { has: [{ shape: 'rect', color: '파랑', n: 1 }, { shape: 'triangle', color: '초록', min: 2 }, { shape: 'circle', color: '노랑', n: 1 }] }, difficulty: 0.1 },
          { type: 'choice', prompt: '친구가 앞으로를 상상해 말할 때 알맞은 말은 무엇일까요?', options: ['"그런 건 안 생겨."', '"그건 어떻게 움직여?"'], answer: 1, difficulty: 0.1, explain: '궁금한 것을 물어 주면 친구가 상상을 더 키울 수 있어요.' },
          { type: 'tool', tool: 'emotion', options: { mode: 'scale', steps: 3, situation: '오늘 모둠 친구들에게 앞으로의 동네 작품을 설명했어요.', feeling: '뿌듯함', ask: '설명을 마친 마음은 얼마나 뿌듯한가요?' }, prompt: '오늘 작품을 설명한 내 마음을 솔직하게 골라 보세요. 정답은 없어요.', target: { level: 'any' }, difficulty: 0.05 },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '앞으로의 우리 동네',
      items: [
        { type: 'table', prompt: '내 작품 이름표를 쓰세요.', columns: ['옛날에는', '지금은', '앞으로는'], rows: 1 },
        { type: 'draw', wide: true, prompt: '앞으로의 우리 동네를 그리고, 새로 생긴 것에 ○ 하세요.' },
        { type: 'choice', prompt: '친구의 상상을 들을 때 할 말에 ○ 하세요.', options: ['"어떻게 움직여?"', '"말도 안 돼."'], answer: '"어떻게 움직여?"' },
        { type: 'short', prompt: '친구 작품에 붙인 물음을 하나 쓰세요.' },
      ],
      easy: {
        note: '그대로 둘 것 하나, 새로 생길 것 하나!',
        items: [
          { type: 'draw', wide: true, prompt: '앞으로의 우리 동네를 그려 보세요.' },
          { type: 'choice', prompt: '앞으로를 상상한 말에 ○ 하세요.', options: ['하늘 놀이터가 생길지도 몰라요', '놀이터에서 놀아요'], answer: '하늘 놀이터가 생길지도 몰라요' },
          { type: 'short', prompt: '내 작품 이름을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '콜라주 고르개는 모양 네 가지, 색 여섯 가지만 나와요. 마음 크기는 세 칸에서 골라요.',
      base: '스스로 그대로 둘 것과 바꿀 것을 정해 꾸미고, 모둠에서 1분 동안 설명해요.',
      challenge: '조각을 여섯 개 넘게 쓰고, 친구 작품마다 물음을 하나씩 붙여요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 친구의 상상을 "말도 안 돼"로 막는다 → 상상은 아직 없는 것을 생각해 보는 것이라는 것을 짚고, 묻는 말을 함께 연습한다. ② 설명이 길어져 모둠 시간이 모자란다 → 1분 타이머를 쓰고 이름표 세 줄만 읽게 한다. ③ 앞으로의 일은 생각할 수 없다고 여긴다 → 9~11차시에서 바뀌어 온 차례를 다시 보인다. 26명이면 네 명씩 여섯 모둠이 동시에 설명해 7분 안에 끝난다.',
  }));

  // ───────────────────────── 13~16차시: 1학년에 배운 것 고르기와 더 배우고 싶은 것 ─────────────────────────

  lessons.push(L(13, {
    title: '1학년 동안 배운 것 가운데 기억에 남는 것 고르기',
    objective: '1학년 동안 배운 것을 떠올려 기억에 남는 것을 고르고, 배운 것이 앞으로도 쓰인다는 것을 말할 수 있다.',
    illustration: ART('a paper scrapbook opened on a desk with pages of a drawing diary, number cards up to one hundred, a paper clock and spring flowers, a child pointing to a favorite page', '기억에 남는 배움', [
      { motif: 'flower', x: 100, y: 228 }, { motif: 'leaf', x: 380, y: 214 }, { motif: 'star', x: 240, y: 92, s: 0.6 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 7,
        teacher: '"3월에 처음 학교에 왔을 때 내 이름을 쓸 수 있었나요? 지금은 어때요?" 3월 첫 주 활동지와 지금 활동지를 나란히 보여 준다. "1학년 동안 무엇을 배웠을까요?" 칠판에 학생들이 말하는 배움을 모은다. 시연 단추로 \'한글 자음과 모음 읽기\'가 \'1학년에 배웠어요\' 칸에 놓이는 모습을 보여 준다.',
        student: '1학년 동안 배운 것 가운데 가장 먼저 떠오르는 것을 짝에게 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '나의 1학년', slots: ['1학년에 배웠어요', '아직 안 배웠어요'], cards: ['한글 자음과 모음 읽기', '곱셈구구 외우기'], shuffle: false }, sequence: [{ sort: { '1학년에 배웠어요': ['한글 자음과 모음 읽기'], '아직 안 배웠어요': ['곱셈구구 외우기'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 25,
        activities: [
          {
            id: 'a1', title: '활동 1. 배운 것 떠올리기 (돌아보기)', minutes: 13, tool: 'mindmap',
            teacher: '"교과서와 활동지 묶음을 넘기며 기억에 남는 쪽에 붙임 딱지를 세 장 붙여 보세요." 5분을 준다. 이어 카드 나누기를 하며 "곱셈구구는 우리 반이 배웠나요?"처럼 직접 떠올려 보게 한다. 기억이 잘 안 나는 학생에게 교실 벽의 작품을 가리켜 준다.',
            task: '교과서와 활동지를 넘겨 보며 기억에 남는 것을 표시하고, 1학년에 배운 것을 골라 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '교과서와 활동지에 기억에 남는 것 세 군데를 표시했으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '배움 카드를 1학년에 배운 것과 아직 안 배운 것으로 나누어 보세요.', toolOptions: { topic: '나의 1학년', slots: ['1학년에 배웠어요', '아직 안 배웠어요'], cards: ['100까지 수 세기', '몇 시 30분 읽기', '곱셈구구 외우기', '자로 몇 cm인지 재기'] },
                target: { sort: { '1학년에 배웠어요': ['100까지 수 세기', '몇 시 30분 읽기'], '아직 안 배웠어요': ['곱셈구구 외우기', '자로 몇 cm인지 재기'] } }, difficulty: 0.2,
                levels: { challenge: { prompt: '배움 카드 여섯 장을 1학년에 배운 것과 아직 안 배운 것으로 나누어 보세요.', toolOptions: { cards: ['100까지 수 세기', '몇 시 30분 읽기', '곱셈구구 외우기', '자로 몇 cm인지 재기', '그림일기 쓰기', '세 자리 수 읽기'] },
                  target: { sort: { '1학년에 배웠어요': ['100까지 수 세기', '몇 시 30분 읽기', '그림일기 쓰기'], '아직 안 배웠어요': ['곱셈구구 외우기', '자로 몇 cm인지 재기', '세 자리 수 읽기'] } } } } },
              { prompt: '배운 것을 말한 문장과 더 배우고 싶은 것을 말한 문장으로 나누어 보세요.', toolOptions: { topic: '배움 이야기', slots: ['배운 것', '더 배우고 싶은 것'], cards: ['나는 덧셈을 배웠어요', '나는 더 큰 수를 세어 보고 싶어요', '나는 그림일기를 써 봤어요', '나는 긴 이야기를 써 보고 싶어요'] },
                target: { sort: { '배운 것': ['나는 덧셈을 배웠어요', '나는 그림일기를 써 봤어요'], '더 배우고 싶은 것': ['나는 더 큰 수를 세어 보고 싶어요', '나는 긴 이야기를 써 보고 싶어요'] } }, difficulty: 0.15,
                hints: ['문장 끝을 보세요. 해 본 일을 말하는지, 해 보고 싶은 일을 말하는지 달라요.', '\'~싶어요\'로 끝나는 문장이 배운 것 칸에 있는지 살펴봐요.', '\'배웠어요\', \'써 봤어요\'는 배운 것, \'~하고 싶어요\'는 더 배우고 싶은 것이에요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 배운 것은 언제 쓸까?', minutes: 12, tool: 'mindmap',
            teacher: '"1학년이 끝나면 덧셈은 이제 쓸 일이 없을까요?" 손을 들게 한 뒤, 가게에서 사탕 두 개 값을 셈하는 장면을 짧게 연기해 보인다. 배운 것은 2학년에도, 집에서도, 놀 때도 쓴다는 것을 짚는다.',
            task: '배운 것이 언제 쓰이는지 잇고, 배운 것에 대한 바른 생각을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '배운 것과 그것을 쓰는 때를 이어 보세요.', toolOptions: { mode: 'match', topic: '언제 쓸까?', slots: [{ id: 's1', label: '시계 보기' }, { id: 's2', label: '덧셈' }, { id: 's3', label: '한글 읽기' }], cards: ['학교 갈 시각 알기', '모은 딱지 수 더하기', '그림책 혼자 읽기'] },
                target: { match: { s1: '학교 갈 시각 알기', s2: '모은 딱지 수 더하기', s3: '그림책 혼자 읽기' } }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['학교 갈 시각 알기', '모은 딱지 수 더하기', '그림책 혼자 읽기', '낮잠 자기'] } } } },
              { prompt: '배운 것에 대한 바른 생각만 골라 보세요.', toolOptions: { mode: 'pick', basket: '바른 생각', cards: ['배운 것은 2학년에도 써요', '배운 것은 집에서도 써요', '1학년이 끝나면 배운 것은 필요 없어요', '배운 것은 학교에서만 써요'] },
                target: { pick: ['배운 것은 2학년에도 써요', '배운 것은 집에서도 써요'] }, difficulty: 0.15,
                predict: { q: '1학년이 끝나면 덧셈은 쓸 일이 없을까요?', options: ['없어요', '계속 써요'], answer: 1 },
                conclude: '배운 것은 학년이 바뀌어도 계속 쓰고, 다음 배움의 바탕이 돼요.' },
              { prompt: '배운 것을 쓰는 곳을 학교와 집으로 나누어 보세요.', toolOptions: { topic: '어디에서 쓸까?', slots: ['학교에서 써요', '집에서 써요'], cards: ['알림장 읽기', '급식 시간 시계 보기', '동생에게 그림책 읽어 주기', '저녁 먹을 숟가락 수 세기'] },
                target: { sort: { '학교에서 써요': ['알림장 읽기', '급식 시간 시계 보기'], '집에서 써요': ['동생에게 그림책 읽어 주기', '저녁 먹을 숟가락 수 세기'] } }, difficulty: 0.15 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"붙임 딱지를 붙인 것 가운데 가장 기억에 남는 것 하나를 골라 친구에게 말해 주세요." 두세 명이 \'나는 ~을 배웠어요. 그래서 ~할 수 있어요\'로 말하게 한다. 다음 시간에는 더 배우고 싶은 것을 골라 물음으로 만든다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '언제 쓸까?', slots: [{ id: 'e1', label: '수 세기' }, { id: 'e2', label: '글자 쓰기' }], cards: ['줄넘기 몇 번 했는지 세기', '친구에게 생일 카드 쓰기'] }, prompt: '배운 것과 그것을 쓰는 때를 이어 보세요.', target: { match: { e1: '줄넘기 몇 번 했는지 세기', e2: '친구에게 생일 카드 쓰기' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '1학년에 배운 시계 보기는 언제 쓸까요?', options: ['1학년 때만 써요', '2학년이 되어도 계속 써요'], answer: 1, difficulty: 0.1, explain: '시계 보기는 학년이 바뀌어도 날마다 써요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '기억에 남는 배움',
      items: [
        { type: 'figure', wide: true, prompt: '배운 것과 쓰는 때를 선으로 이으세요.', tool: 'mindmap', figures: [{ options: { mode: 'match', topic: '언제 쓸까?', slots: [{ id: 's1', label: '시계 보기' }, { id: 's2', label: '한글 읽기' }], cards: ['그림책 혼자 읽기', '학교 갈 시각 알기'] }, caption: '' }], answer: '시계 보기-학교 갈 시각 알기, 한글 읽기-그림책 혼자 읽기' },
        { type: 'check', prompt: '1학년에 배운 것에 ✓ 하세요.', options: ['100까지 수 세기', '그림일기 쓰기', '곱셈구구 외우기', '몇 시 30분 읽기'] },
        { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '배운 것은 2학년이 되어도 계속 ___.', answer: '써요' },
        { type: 'short', prompt: '1학년 동안 배운 것 가운데 가장 기억에 남는 것과 그 까닭을 쓰세요.' },
      ],
      easy: {
        note: '교실 벽에 붙은 작품을 보며 떠올려요.',
        items: [
          { type: 'choice', prompt: '1학년에 배운 것에 ○ 하세요.', options: ['그림일기 쓰기', '곱셈구구 외우기'], answer: '그림일기 쓰기' },
          { type: 'choice', prompt: '바른 생각에 ○ 하세요.', options: ['배운 것은 계속 써요', '배운 것은 필요 없어요'], answer: '배운 것은 계속 써요' },
          { type: 'draw', prompt: '가장 기억에 남는 배움을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고 틀리면 카드가 돌아와요. 교과서 대신 사진첩을 함께 넘겨요.',
      base: '모두 나눈 뒤 확인을 눌러요. 기억에 남는 것 세 가지를 표시해요.',
      challenge: '배움 카드가 여섯 장으로 늘고, 관계없는 카드가 섞여 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 배운 것은 학년이 끝나면 쓸 일이 없다고 여긴다 → 집과 학교에서 쓰는 장면을 떠올리게 한다. ② 아직 안 배운 것을 배웠다고 한다(형·언니에게 들은 것) → "우리 반이 함께 해 봤나요?"를 묻는다. ③ 기억에 남는 것을 고르지 못한다 → 교실 벽 작품, 사진첩을 함께 본다. 교과서·활동지 묶음은 미리 모아 둔다.',
  }));

  lessons.push(L(14, {
    title: '더 배우고 싶은 것 하나 골라 물음으로 바꾸기',
    objective: '더 배우고 싶은 것 하나를 골라 \'어떻게, 왜\'가 들어간 물음으로 바꾸어 적을 수 있다.',
    illustration: ART('a child standing at a paper crossroads with signposts shaped like a pencil, a jump rope and a star, a speech bubble with a question mark floating above', '무엇을 더 배우고 싶나요?', [
      { motif: 'tree', x: 90, y: 214 }, { motif: 'flower', x: 400, y: 228, color: 'lavender' }, { motif: 'cloud', x: 300, y: 70, s: 0.6 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"줄넘기를 한 번씩 넘을 수 있게 되었지요? 그다음엔 무엇을 해 보고 싶어요?" 두 번 뛰기, 엇걸어 뛰기 같은 대답을 모은다. "해 보고 싶은 것을 물음으로 바꾸면 무엇을 알아봐야 할지 보여요." 시연 단추로 \'줄넘기 두 번 뛰기\'가 알맞은 물음과 이어지는 모습을 보여 준다.',
        student: '지난 시간에 고른 기억에 남는 배움에서, 더 해 보고 싶은 것을 떠올려 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '물음으로 바꾸기', slots: [{ id: 's1', label: '줄넘기 두 번 뛰기' }], cards: ['두 번 뛰기는 어떻게 할까?', '줄넘기는 빨개요.'], shuffle: false }, sequence: [{ match: { s1: '두 번 뛰기는 어떻게 할까?' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 배우고 싶은 것을 물음으로', minutes: 13, tool: 'mindmap',
            teacher: '"\'배우고 싶어요\'를 물음으로 바꾸면 \'어떻게 할까?\'가 돼요." 바꾸기 전과 뒤를 칠판에 나란히 적는다. "수학이 싫어요"를 고른 학생에게 "이 말에 물음표가 있나요? 무엇을 알아보면 될까요?"라고 되묻는다.',
            task: '더 배우고 싶은 것과 그것을 바꾼 물음을 잇고, 좋은 물음을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '배우고 싶은 것과 알맞은 물음을 이어 보세요.', toolOptions: { mode: 'match', topic: '물음으로 바꾸기', slots: [{ id: 's1', label: '시계의 분 읽기' }, { id: 's2', label: '종이접기로 비행기 접기' }, { id: 's3', label: '더 큰 수 쓰기' }], cards: ['긴바늘로 분은 어떻게 읽을까?', '비행기는 어떻게 접어야 멀리 날까?', '100보다 큰 수는 어떻게 쓸까?'] },
                target: { match: { s1: '긴바늘로 분은 어떻게 읽을까?', s2: '비행기는 어떻게 접어야 멀리 날까?', s3: '100보다 큰 수는 어떻게 쓸까?' } }, difficulty: 0.1 },
              { prompt: '더 배우고 싶은 것을 묻는 물음만 골라 보세요.', toolOptions: { mode: 'pick', basket: '좋은 물음', cards: ['개구리는 왜 겨울잠을 잘까?', '리코더는 어떻게 불까?', '수학이 싫어요.', '어제 공원에 갔어요.'] },
                target: { pick: ['개구리는 왜 겨울잠을 잘까?', '리코더는 어떻게 불까?'] }, difficulty: 0.15,
                levels: { challenge: { prompt: '더 배우고 싶은 것을 묻는 물음만 골라 보세요. 여섯 장이에요.', toolOptions: { cards: ['개구리는 왜 겨울잠을 잘까?', '리코더는 어떻게 불까?', '수학이 싫어요.', '어제 공원에 갔어요.', '글씨를 바르게 쓰려면 어떻게 할까?', '같이 놀자?'] }, target: { pick: ['개구리는 왜 겨울잠을 잘까?', '리코더는 어떻게 불까?', '글씨를 바르게 쓰려면 어떻게 할까?'] } } },
                hints: ['물음표가 있고, 모르는 것을 알아보려는 말인지 살펴봐요.', '내 마음이나 지난 일을 말한 카드는 알아볼 것을 묻지 않아요.', '\'왜 ~할까?\', \'어떻게 ~할까?\'로 끝나는 카드를 골라요.'] },
              { prompt: '물음을 무엇이 궁금한지에 따라 나누어 보세요.', toolOptions: { topic: '무엇이 궁금할까?', slots: ['하는 방법이 궁금해요', '까닭이 궁금해요'], cards: ['두 번 뛰기는 어떻게 할까?', '나뭇잎은 왜 떨어질까?', '하모니카는 어떻게 불까?', '눈은 왜 하얄까?'] },
                target: { sort: { '하는 방법이 궁금해요': ['두 번 뛰기는 어떻게 할까?', '하모니카는 어떻게 불까?'], '까닭이 궁금해요': ['나뭇잎은 왜 떨어질까?', '눈은 왜 하얄까?'] } }, difficulty: 0.2 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 내 물음 완성하고 적기', minutes: 13, tool: 'story',
            teacher: '"물음에는 \'무엇을\'과 \'어떻게, 왜\'가 함께 있어야 해요." 빈칸을 채운 뒤 소리 내어 읽게 한다. 이어 활동지에 내가 더 배우고 싶은 것 하나를 물음으로 직접 적게 한다. 쓰기 어려운 학생은 말로 하고 교사가 받아 적어 준다.',
            task: '빈칸에 알맞은 말을 넣어 물음을 완성하고, 내 물음을 활동지에 적어요.',
            levels: CARD_LV,
            items: [
              { prompt: '빈칸에 알맞은 낱말을 넣어 물음을 완성해 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'b1', label: '종이비행기는 ___ 접어야 멀리 날까?' }, { id: 'b2', label: '나뭇잎은 ___ 색이 바뀔까?' }], cards: ['어떻게', '왜'] },
                target: { fill: { b1: '어떻게', b2: '왜' } }, difficulty: 0.15 },
              { prompt: '물음에서 빠진 \'무엇을\' 낱말을 넣어 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'b1', label: '___는 어떻게 불까?' }, { id: 'b2', label: '___는 왜 겨울잠을 잘까?' }], cards: ['리코더', '개구리'] },
                target: { fill: { b1: '리코더', b2: '개구리' } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['리코더', '개구리', '책상'] } } } },
              { prompt: '내가 더 배우고 싶은 것 하나를 활동지에 물음으로 적었으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"내가 적은 물음을 짝에게 읽어 주세요. 짝은 물음표가 있는지, 어떻게나 왜가 있는지 들어 봐요." 다음 시간에는 배운 것을 집과 동네에서 어떻게 쓰는지 직접 해 본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '물음으로 바꾸기', slots: [{ id: 'e1', label: '피아노 치기' }, { id: 'e2', label: '달 모양 알기' }], cards: ['피아노로 노래를 어떻게 칠까?', '달 모양은 왜 바뀔까?'] }, prompt: '배우고 싶은 것과 알맞은 물음을 이어 보세요.', target: { match: { e1: '피아노로 노래를 어떻게 칠까?', e2: '달 모양은 왜 바뀔까?' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '더 배우고 싶은 것을 물음으로 바꾼 것은 무엇일까요?', options: ['줄넘기가 좋아요.', '줄넘기 두 번 뛰기는 어떻게 할까?', '줄넘기를 했어요.'], answer: 1, difficulty: 0.1, explain: '물음표가 있고, 해 보고 싶은 것을 어떻게 할지 묻고 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '더 배우고 싶은 것',
      items: [
        { type: 'figure', wide: true, prompt: '빈칸에 알맞은 낱말을 넣어 물음을 완성하세요.', tool: 'story', figures: [{ options: { mode: 'fill', slots: [{ id: 'b1', label: '종이비행기는 ___ 접어야 멀리 날까?' }, { id: 'b2', label: '나뭇잎은 ___ 색이 바뀔까?' }], cards: ['어떻게', '왜'] }, caption: '' }], answer: '어떻게, 왜' },
        { type: 'choice', prompt: '까닭을 묻는 물음에 ○ 하세요.', options: ['눈은 왜 하얄까?', '하모니카는 어떻게 불까?'], answer: '눈은 왜 하얄까?' },
        { type: 'short', prompt: '내가 더 배우고 싶은 것 하나를 물음으로 쓰세요.' },
        { type: 'draw', prompt: '그것을 배운 내 모습을 상상해 그려 보세요.' },
      ],
      easy: {
        note: '\'어떻게 할까?\' \'왜 그럴까?\'',
        items: [
          { type: 'choice', prompt: '물음에 ○ 하세요.', options: ['리코더는 어떻게 불까?', '리코더가 좋아요.'], answer: '리코더는 어떻게 불까?' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '개구리는 ___ 겨울잠을 잘까?', answer: '왜' },
          { type: 'draw', prompt: '더 배우고 싶은 것을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 물음은 말로 하고 선생님이 받아 적어 줘요.',
      base: '모두 놓은 뒤 확인을 눌러요. 내 물음을 활동지에 직접 써요.',
      challenge: '고르기 카드가 여섯 장으로 늘고, 남는 낱말 카드가 섞여 있어요. 물음을 두 개 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 배우고 싶은 것 대신 좋아하는 것을 말한다("수학이 좋아요") → "그중에 아직 못 하는 것은?"을 묻는다. ② 물음표 없이 바란다는 말로 끝낸다 → \'어떻게 할까?\'로 바꾸어 보게 한다. ③ 하는 방법과 까닭을 헷갈린다 → \'어떻게\'는 방법, \'왜\'는 까닭이라고 짝 지어 준다. 적은 물음은 21차시 발표에 다시 쓰니 모아 둔다.',
  }));

  lessons.push(L(15, {
    title: '1학년에 배운 시계 보기와 수 세기로 생활 문제 풀기',
    objective: '1학년에 배운 시계 보기와 수 세기를 생활 장면에 써서 문제를 풀고, 배운 것이 생활에 쓰인다는 것을 말할 수 있다.',
    illustration: ART('a paper morning scene with a clock showing half past eight on a kitchen wall, a child counting ten-won coins at a small shop counter', '배운 것을 써 봐요', [
      { motif: 'house', x: 110, y: 214, color: 'peach' }, { motif: 'sun', x: 380, y: 90, s: 0.6 }, { motif: 'flower', x: 250, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"아침에 엄마가 \'8시 30분에 나가자\' 하시면, 시계를 볼 줄 모르면 어떻게 될까요?" 시계를 읽지 못해 늦는 장면을 짧게 연기해 보인다. 시연 단추로 시계 바늘이 8시 30분으로 움직이는 모습을 보여 준다. "오늘은 1학년에 배운 것을 생활에서 써 봐요."',
        student: '오늘 아침 집에서 나온 시각을 떠올려 봐요.',
        demo: { tool: 'clock', options: { minuteStep: 30 }, sequence: [{ h: 8, m: 30 }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 생활 속 시각 맞추기', minutes: 13, tool: 'clock',
            teacher: '"긴바늘이 6을 가리키면 30분이에요. 짧은바늘은 어디에 있을까요?" 1학년에 배운 \'몇 시 30분\'을 다시 떠올리게 한다. 짧은바늘을 숫자에 똑바로 놓는 학생에게 "30분이면 짧은바늘은 두 숫자의 가운데에 있어요"라고 짚는다.',
            task: '생활 이야기를 읽고 그 시각을 시계 바늘로 만들어요.',
            levels: {
              easy: { minuteStep: 30, hourZone: true },
              base: { minuteStep: 30 },
              challenge: { minuteStep: 5 },
            },
            items: [
              { prompt: '아침 8시 30분에 집을 나서요. 시계를 8시 30분으로 맞추어 보세요.', state: { h: 12, m: 0 }, target: { h: 8, m: 30 }, difficulty: 0.15 },
              { prompt: '점심을 12시 30분에 먹어요. 시계를 맞추어 보세요.', state: { h: 9, m: 0 }, target: { h: 12, m: 30 }, difficulty: 0.15 },
              { prompt: '저녁 7시에 가족과 그림책을 읽어요. 시계를 맞추어 보세요.', state: { h: 3, m: 30 }, target: { h: 7, m: 0 }, difficulty: 0.1,
                conclude: '시계 보기를 알면 언제 무엇을 할지 스스로 알 수 있어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 가게 놀이로 수 세기', minutes: 13, tool: 'economy',
            teacher: '"10원짜리 동전 하나, 둘, 셋… 열씩 세어요." 10, 20, 30처럼 몇십을 세는 것은 1학년에 배운 것이라고 짚는다. 동전을 한 개씩 내며 소리 내어 세게 한다. 모자라거나 더 낸 학생에게 낸 동전을 처음부터 다시 세어 보게 한다.',
            task: '10원짜리 동전을 열씩 세어 물건값만큼 내요.',
            levels: { easy: { coins: [10], showTotal: true }, base: { coins: [10] }, challenge: { coins: [10, 50] } },
            items: [
              { prompt: '사탕이 30원이에요. 10원짜리 동전으로 값을 내 보세요.', toolOptions: { mode: 'pay', item: { text: '사탕', price: 30 } }, target: { pay: 30 }, difficulty: 0.1 },
              { prompt: '지우개가 70원이에요. 10원짜리 동전으로 값을 내 보세요.', toolOptions: { mode: 'pay', item: { text: '지우개', price: 70 } }, target: { pay: 70 }, difficulty: 0.15 },
              { prompt: '연필이 80원이에요. 동전을 세어 값을 내 보세요.', toolOptions: { mode: 'pay', item: { text: '연필', motif: 'pencil', price: 80 } }, target: { pay: 80 }, difficulty: 0.2,
                predict: { q: '80원은 10원짜리가 몇 개일까요?', options: ['8개', '80개'], answer: 0 },
                conclude: '열씩 세기를 알면 가게에서 값을 셈할 수 있어요.' },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 쓴 배움은 언제 1학년에 배운 것이었나요?" 시계 보기와 열씩 세기를 칠판에 적고, 집에서 쓸 곳을 하나씩 말하게 한다. 출구 1번을 틀린 학생은 짧은바늘 자리를 다시 짚는다.',
        exitTicket: [
          { type: 'tool', tool: 'clock', options: { minuteStep: 30 }, state: { h: 12, m: 0 }, prompt: '태권도 학원에 4시 30분에 가요. 시계를 4시 30분으로 맞추어 보세요.', target: { h: 4, m: 30 }, difficulty: 0.15 },
          { type: 'choice', prompt: '50원은 10원짜리 동전 몇 개일까요?', options: ['5개', '50개', '10개'], answer: 0, difficulty: 0.15, explain: '10, 20, 30, 40, 50 — 열씩 다섯 번 세면 50원이에요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '배운 것을 생활에서',
      items: [
        { type: 'figure', prompt: '시계를 보고 몇 시 몇 분인지 쓰세요.', tool: 'clock', figures: [{ state: { h: 8, m: 30 }, caption: '___시 ___분' }, { state: { h: 7, m: 0 }, caption: '___시' }], answer: '8시 30분, 7시' },
        { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '10원짜리 동전 6개는 ___원이에요.', answer: '60' },
        { type: 'table', prompt: '내 하루에서 시계를 보는 때를 쓰세요.', columns: ['하는 일', '시각'], rows: 3 },
        { type: 'short', prompt: '1학년에 배운 것을 집에서 써 본 일을 쓰세요.' },
      ],
      easy: {
        note: '긴바늘이 6이면 30분이에요.',
        items: [
          { type: 'figure', prompt: '시계를 보고 몇 시인지 쓰세요.', tool: 'clock', figures: [{ state: { h: 7, m: 0 }, caption: '___시' }], answer: '7시' },
          { type: 'choice', prompt: '30원은 10원짜리 몇 개일까요?', options: ['3개', '30개'], answer: '3개' },
          { type: 'draw', prompt: '시계를 보고 하는 일을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '시계 바늘이 30분씩 움직이고, 짧은바늘이 있어야 할 곳이 연하게 칠해져요. 가게 놀이는 낸 돈 합계가 보여요.',
      base: '바늘이 30분씩 움직여요. 낸 돈을 스스로 세어요.',
      challenge: '바늘이 5분씩 움직이고, 50원짜리 동전도 함께 써서 값을 내요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 30분인데 짧은바늘을 숫자에 똑바로 놓는다 → 두 숫자 가운데라는 것을 짚는다. ② 동전을 하나씩 1, 2, 3으로 센다 → 10, 20, 30으로 세는 소리를 함께 낸다. ③ 배운 것이 생활과 이어진다는 것을 놓친다 → "집에서 언제 써 봤나요?"를 끝에 꼭 묻는다. 도전에서 50원짜리를 쓰면 1학년 범위를 조금 넘으니, 원하는 학생만 하게 한다.',
  }));

  lessons.push(L(16, {
    title: '2학년 형·언니에게 배움을 묻는 인터뷰하기',
    objective: '2학년 형·언니에게 2학년에 배우는 것을 묻는 물음을 만들어 인터뷰하고, 들은 답을 나누어 정리할 수 있다.',
    illustration: ART('a younger child holding a paper microphone interviewing an older student in a school hallway, a notebook with question marks between them', '2학년은 무엇을 배워요?', [
      { motif: 'house', x: 110, y: 214, color: 'mint' }, { motif: 'tree', x: 390, y: 214 }, { motif: 'star', x: 250, y: 90, s: 0.5 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"내년에 우리는 몇 학년이 될까요? 2학년이 되면 무엇을 배울지 누구에게 물어보면 알 수 있을까요?" 2학년 형·언니라는 대답을 이끌어 낸다. 2학년 반과 미리 약속해 둔 인터뷰 시간을 알린다. 시연 단추로 좋은 물음 카드가 바구니에 들어가는 모습을 보여 준다.',
        student: '2학년 형·언니에게 가장 묻고 싶은 것을 하나 떠올려 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'pick', basket: '인터뷰 물음', cards: ['2학년 수학에서는 무엇을 배워요?', '형 이름이 뭐야?'], shuffle: false }, sequence: [{ pick: ['2학년 수학에서는 무엇을 배워요?'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 인터뷰 물음 고르기', minutes: 10, tool: 'mindmap',
            teacher: '"인터뷰는 2학년 배움을 알아보려고 하는 거예요. 이 물음은 배움을 묻나요?" 형의 이름이나 좋아하는 색을 묻는 카드를 고른 학생에게 인터뷰의 목적을 다시 말해 준다. 인터뷰 차례(인사 → 묻기 → 고맙다고 말하기)를 함께 연습한다.',
            task: '2학년 배움을 묻는 물음을 고르고, 인터뷰 차례를 정해요.',
            levels: CARD_LV,
            items: [
              { prompt: '2학년 배움을 묻는 물음만 골라 보세요.', toolOptions: { mode: 'pick', basket: '인터뷰 물음', cards: ['2학년 국어에서는 무엇을 배워요?', '2학년이 되어 가장 어려운 공부는 뭐예요?', '좋아하는 색은 뭐예요?', '오늘 급식 맛있었어요?'] },
                target: { pick: ['2학년 국어에서는 무엇을 배워요?', '2학년이 되어 가장 어려운 공부는 뭐예요?'] }, difficulty: 0.15 },
              { prompt: '인터뷰하는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', slots: ['처음', '가운데', '끝'], cards: ['"안녕하세요, 1학년 ○반이에요." 하고 인사해요', '준비한 물음을 묻고 답을 들어요', '"알려 주셔서 고맙습니다." 하고 인사해요'] },
                target: { order: ['"안녕하세요, 1학년 ○반이에요." 하고 인사해요', '준비한 물음을 묻고 답을 들어요', '"알려 주셔서 고맙습니다." 하고 인사해요'] }, difficulty: 0.1 },
              { prompt: '인터뷰할 때 지킬 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '인터뷰 약속', cards: ['형·언니 눈을 보며 물어요', '들은 답을 짧게 적어요', '답을 듣는 중에 끼어들어요', '한 사람이 물음을 다 해요'] },
                target: { pick: ['형·언니 눈을 보며 물어요', '들은 답을 짧게 적어요'] }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 인터뷰하고 들은 답 나누기 (실습)', minutes: 17, tool: 'mindmap',
            teacher: '"모둠마다 2학년 형·언니 한 명과 8분 동안 인터뷰해요." 모둠 안에서 묻는 사람과 적는 사람을 번갈아 정한다. 돌아와서는 들은 답 카드를 교과에 따라 나누게 한다. 2학년과 만나기 어려우면 미리 받아 둔 녹음이나 편지로 대신한다.',
            task: '2학년 형·언니를 인터뷰하고, 들은 답을 교과에 따라 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '모둠별로 2학년 형·언니를 인터뷰하고 답을 적었으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '형·언니에게 들은 답을 교과에 따라 나누어 보세요.', toolOptions: { topic: '2학년 배움', slots: ['국어', '수학'], cards: ['겪은 일을 글로 써요', '곱셈구구를 외워요', '시를 읽고 느낌을 말해요', '자로 길이를 재요'] },
                target: { sort: { '국어': ['겪은 일을 글로 써요', '시를 읽고 느낌을 말해요'], '수학': ['곱셈구구를 외워요', '자로 길이를 재요'] } }, difficulty: 0.2,
                levels: { challenge: { prompt: '들은 답 여섯 장을 교과에 따라 나누어 보세요.', toolOptions: { cards: ['겪은 일을 글로 써요', '곱셈구구를 외워요', '시를 읽고 느낌을 말해요', '자로 길이를 재요', '세 자리 수를 읽어요', '인물의 마음을 짐작해요'] },
                  target: { sort: { '국어': ['겪은 일을 글로 써요', '시를 읽고 느낌을 말해요', '인물의 마음을 짐작해요'], '수학': ['곱셈구구를 외워요', '자로 길이를 재요', '세 자리 수를 읽어요'] } } } } },
              { prompt: '들은 답과 이어지는 1학년 배움을 이어 보세요.', toolOptions: { mode: 'match', topic: '무엇과 이어질까?', slots: [{ id: 's1', label: '곱셈구구를 외워요' }, { id: 's2', label: '겪은 일을 글로 써요' }], cards: ['같은 수를 여러 번 더하기', '그림일기 쓰기'] },
                target: { match: { s1: '같은 수를 여러 번 더하기', s2: '그림일기 쓰기' } }, difficulty: 0.25,
                conclude: '2학년 배움은 1학년에 배운 것에서 이어져요.' },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"형·언니에게 들은 것 가운데 가장 해 보고 싶은 것은 무엇이에요?" 모둠마다 하나씩 말하게 한다. 인터뷰해 준 2학년에게 고마운 마음을 쪽지로 전하게 한다. 다음 시간부터는 배운 것과 배울 것을 선으로 이어 본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', basket: '인터뷰 물음', cards: ['2학년 통합교과에서는 무엇을 해요?', '2학년 때 가장 재미있던 공부는 뭐예요?', '집이 어디예요?'] }, prompt: '2학년 배움을 묻는 물음만 골라 보세요.', target: { pick: ['2학년 통합교과에서는 무엇을 해요?', '2학년 때 가장 재미있던 공부는 뭐예요?'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '인터뷰를 마칠 때 할 말은 무엇일까요?', options: ['"알려 주셔서 고맙습니다."', '"이제 가도 돼요."', '아무 말 없이 가요.'], answer: 0, difficulty: 0.05, explain: '시간을 내어 알려 준 형·언니에게 고맙다고 인사해요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '2학년 형·언니 인터뷰',
      items: [
        { type: 'table', prompt: '인터뷰 물음과 들은 답을 쓰세요.', columns: ['물음', '들은 답'], rows: 3 },
        { type: 'choice', prompt: '2학년 배움을 묻는 물음에 ○ 하세요.', options: ['2학년 수학은 무엇을 배워요?', '좋아하는 색은 뭐예요?'], answer: '2학년 수학은 무엇을 배워요?' },
        { type: 'check', prompt: '인터뷰에서 지킨 것에 ✓ 하세요.', options: ['먼저 인사했어요', '눈을 보며 물었어요', '답을 적었어요', '고맙다고 말했어요'] },
        { type: 'short', prompt: '들은 2학년 배움 가운데 가장 해 보고 싶은 것을 쓰세요.' },
      ],
      easy: {
        note: '인사 → 묻기 → 고맙습니다!',
        items: [
          { type: 'choice', prompt: '인터뷰를 시작할 때 할 말에 ○ 하세요.', options: ['"안녕하세요."', '"빨리 말해."'], answer: '"안녕하세요."' },
          { type: 'short', prompt: '형·언니에게 들은 답을 하나 쓰세요.' },
          { type: 'draw', prompt: '인터뷰하는 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 인터뷰에서 묻는 일을 맡고, 적는 일은 짝이 해요.',
      base: '모두 놓은 뒤 확인을 눌러요. 묻기와 적기를 번갈아 해요.',
      challenge: '들은 답 카드가 여섯 장으로 늘어요. 인터뷰에서 \'왜 그게 어려웠어요?\'처럼 한 번 더 물어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 인터뷰 목적과 상관없는 물음(이름·좋아하는 색)을 한다 → "우리는 무엇을 알아보러 가나요?"를 미리 묻는다. ② 답을 듣고 적지 않아 돌아와서 잊는다 → 적는 사람을 모둠마다 정한다. ③ 형·언니 말을 끊는다 → 끝까지 듣고 고개를 끄덕이는 연습을 한다. 2학년 담임 선생님과 인터뷰 시간·장소를 미리 정해 두고, 만나기 어려우면 녹음이나 편지로 대신한다.',
  }));

  // ───────────────────────── 17~20차시: 배운 것과 배울 것 잇기 ─────────────────────────

  lessons.push(L(17, {
    title: '배운 것 카드와 2학년에 배울 것 카드 선으로 잇기',
    objective: '1학년에 배운 것 카드와 2학년에 이어 배울 것 카드를 이어 붙이고, 왜 이었는지 짧게 말하거나 쓸 수 있다.',
    illustration: ART('paper cards pinned on a big sheet, colorful yarn lines connecting first-grade cards on the left to second-grade cards on the right', '배운 것과 배울 것을 이어요', [
      { motif: 'star', x: 120, y: 90, s: 0.5 }, { motif: 'star', x: 360, y: 90, s: 0.5 }, { motif: 'flower', x: 240, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"100까지 셀 줄 알면, 그다음에는 무엇을 셀 수 있을까요?" 16차시 인터뷰에서 들은 \'세 자리 수\'를 떠올리게 한다. 칠판 왼쪽에 \'1학년에 배운 것\', 오른쪽에 \'2학년에 배울 것\' 카드를 붙이고 털실로 잇는 모습을 보여 준다. 시연 단추로 같은 잇기를 보여 준다.',
        student: '16차시에 형·언니에게 들은 2학년 배움을 하나 떠올려 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '이어지는 배움', slots: [{ id: 's1', label: '100까지 수 세기' }], cards: ['세 자리 수 읽기', '그림 그리기'], shuffle: false }, sequence: [{ match: { s1: '세 자리 수 읽기' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 이어지는 배움 잇기', minutes: 13, tool: 'mindmap',
            teacher: '"두 카드가 왜 이어질까요? \'~을 알아야 ~을 할 수 있어요\'로 말해 봐요." 잇기마다 까닭을 한 문장으로 말하게 한다. 생김새가 비슷한 낱말만 보고 잇는 학생에게 "이걸 배우려면 무엇을 먼저 알아야 할까요?"를 묻는다.',
            task: '1학년에 배운 것과 그것에 이어 2학년에 배울 것을 짝 지어 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '수학에서 배운 것과 이어 배울 것을 이어 보세요.', toolOptions: { mode: 'match', topic: '이어지는 배움', slots: [{ id: 's1', label: '100까지 수 세기' }, { id: 's2', label: '몇 시 30분 읽기' }, { id: 's3', label: '세모·네모 모양 찾기' }], cards: ['세 자리 수 읽기', '몇 시 몇 분 읽기', '삼각형·사각형 알아보기'] },
                target: { match: { s1: '세 자리 수 읽기', s2: '몇 시 몇 분 읽기', s3: '삼각형·사각형 알아보기' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['세 자리 수 읽기', '몇 시 몇 분 읽기', '삼각형·사각형 알아보기', '모래 놀이 하기'] } } } },
              { prompt: '국어에서 배운 것과 이어 배울 것을 이어 보세요.', toolOptions: { mode: 'match', topic: '이어지는 배움', slots: [{ id: 's1', label: '그림일기 쓰기' }, { id: 's2', label: '이야기 듣고 차례 말하기' }], cards: ['겪은 일을 여러 문장으로 쓰기', '이야기 속 인물의 마음 짐작하기'] },
                target: { match: { s1: '겪은 일을 여러 문장으로 쓰기', s2: '이야기 속 인물의 마음 짐작하기' } }, difficulty: 0.2 },
              { prompt: '배운 것 카드 털실 잇기를 큰 종이에 모둠과 함께 붙였으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 이은 까닭 말하기', minutes: 13, tool: 'story',
            teacher: '"\'긴바늘을 읽을 줄 알아야 몇 분을 읽을 수 있어요.\' 이렇게 까닭을 말해요." 빈칸을 채운 뒤 소리 내어 읽고, 내가 이은 카드 하나의 까닭을 활동지에 적게 한다. "그냥요"라고 하는 학생에게 앞의 배움이 없으면 뒤의 배움이 어떻게 될지 묻는다.',
            task: '빈칸에 알맞은 낱말을 넣어 이은 까닭을 완성하고, 내 까닭도 적어요.',
            levels: CARD_LV,
            items: [
              { prompt: '빈칸에 알맞은 낱말을 넣어 까닭을 완성해 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'b1', label: '___을 읽을 줄 알아야 몇 분도 읽을 수 있어요.' }, { id: 'b2', label: '___까지 셀 줄 알아야 세 자리 수도 셀 수 있어요.' }], cards: ['긴바늘', '100'] },
                target: { fill: { b1: '긴바늘', b2: '100' } }, difficulty: 0.15 },
              { prompt: '빈칸에 알맞은 낱말을 넣어 국어 배움을 이은 까닭을 완성해 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'b1', label: '한 문장을 쓸 줄 알아야 ___ 문장도 쓸 수 있어요.' }, { id: 'b2', label: '이야기 ___를 알아야 인물의 마음도 짐작할 수 있어요.' }], cards: ['여러', '차례'] },
                target: { fill: { b1: '여러', b2: '차례' } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['여러', '차례', '색깔'] } } } },
              { prompt: '내가 이은 카드 하나의 까닭을 활동지에 \'~을 알아야 ~을 할 수 있어요\'로 적었으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"모둠 종이에서 가장 길게 이어진 털실은 어느 것이에요?" 모둠마다 하나를 골라 까닭을 말하게 한다. 배운 것은 다음 배움의 바탕이라는 것을 다시 말한다. 모둠 종이는 교실 뒤에 붙여 둔다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '이어지는 배움', slots: [{ id: 'e1', label: '덧셈하기' }, { id: 'e2', label: '줄넘기 한 번 뛰기' }], cards: ['더 큰 수 덧셈하기', '줄넘기 두 번 뛰기'] }, prompt: '배운 것과 이어 배울 것을 이어 보세요.', target: { match: { e1: '더 큰 수 덧셈하기', e2: '줄넘기 두 번 뛰기' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '\'몇 시 몇 분 읽기\'를 배우려면 먼저 무엇을 알아야 할까요?', options: ['몇 시 읽기', '그림 그리기', '노래 부르기'], answer: 0, difficulty: 0.1, explain: '몇 시를 읽을 줄 알아야 몇 분까지 읽을 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '배운 것과 배울 것 잇기',
      items: [
        { type: 'figure', wide: true, prompt: '배운 것과 이어 배울 것을 선으로 이으세요.', tool: 'mindmap', figures: [{ options: { mode: 'match', topic: '이어지는 배움', slots: [{ id: 's1', label: '100까지 수 세기' }, { id: 's2', label: '몇 시 30분 읽기' }], cards: ['몇 시 몇 분 읽기', '세 자리 수 읽기'] }, caption: '' }], answer: '100까지 수-세 자리 수, 몇 시 30분-몇 시 몇 분' },
        { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '___을 읽을 줄 알아야 몇 분도 읽을 수 있어요.', answer: '긴바늘' },
        { type: 'table', prompt: '내가 이은 카드와 까닭을 쓰세요.', columns: ['배운 것', '배울 것', '까닭'], rows: 2 },
        { type: 'short', prompt: '1학년에 배운 것 가운데 2학년에 가장 쓸 것 같은 것을 쓰세요.' },
      ],
      easy: {
        note: '\'~을 알아야 ~을 할 수 있어요.\'',
        items: [
          { type: 'choice', prompt: '\'100까지 수 세기\'와 이어지는 것에 ○ 하세요.', options: ['세 자리 수 읽기', '모래 놀이'], answer: '세 자리 수 읽기' },
          { type: 'choice', prompt: '\'그림일기 쓰기\'와 이어지는 것에 ○ 하세요.', options: ['여러 문장으로 쓰기', '공 차기'], answer: '여러 문장으로 쓰기' },
          { type: 'draw', prompt: '배운 것과 배울 것을 선으로 이은 그림을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 까닭은 문장 틀을 보며 말로 해요.',
      base: '모두 이은 뒤 확인을 눌러요. 이은 까닭을 한 문장으로 적어요.',
      challenge: '관계없는 카드와 남는 낱말이 섞여 있어요. 이은 까닭을 두 개 적어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 낱말이 비슷하면 다 잇는다 → "이걸 배우려면 무엇을 먼저 알아야 하나요?"로 앞뒤를 묻는다. ② 까닭을 "그냥요"로 말한다 → \'~을 알아야 ~을 할 수 있어요\' 틀을 칠판에 붙여 둔다. ③ 배운 것은 끝난 것이라고 여긴다 → 털실이 이어지는 모습을 보여 준다. 털실과 큰 종이는 모둠마다 준비하고, 18~20차시에 이어 붙인다.',
  }));

  lessons.push(L(18, {
    title: '수학에서 배운 규칙을 무늬 꾸미기에 쓰기',
    objective: '한 교과에서 배운 것이 다른 교과 활동에 쓰이는 것을 찾고, 수학에서 배운 규칙으로 되풀이 무늬를 꾸밀 수 있다.',
    illustration: ART('a paper border pattern of repeating red circles and blue triangles around a picture frame, with a math card and an art card joined by a yarn line', '배운 것이 이어져요', [
      { motif: 'flower', x: 90, y: 228, color: 'rose' }, { motif: 'flower', x: 150, y: 228, color: 'sky' }, { motif: 'flower', x: 210, y: 228, color: 'rose' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"수학 시간에 \'빨강, 파랑, 빨강, 파랑\' 규칙을 찾았지요? 이 규칙을 즐거운 생활 시간에도 쓸 수 있을까요?" 액자 테두리 무늬를 보여 준다. "수학에서 배운 것은 수학 시간에만 쓸까요?"라고 물어 두고 활동에서 답을 찾게 한다. 시연 단추로 되풀이 무늬가 만들어진 판을 보여 준다.',
        student: '교실에서 똑같은 것이 되풀이되는 무늬를 하나 찾아봐요.',
        demo: { tool: 'collage', options: { readOnly: true }, sequence: [{ repeat: { times: 3, unit: 2 } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 다른 교과에서 쓰이는 배움 찾기', minutes: 12, tool: 'mindmap',
            teacher: '"줄넘기 몇 번 했는지 셀 때는 어느 시간에 배운 것을 쓰나요?" 교과 이름을 칠판에 붙이고, 한 교과의 배움이 다른 교과로 털실처럼 이어진다는 것을 보여 준다. "수학은 수학에서만 써요"라는 학생에게 관찰 기록에 쓰는 글자를 떠올리게 한다.',
            task: '한 교과에서 배운 것이 다른 교과의 어떤 활동에 쓰이는지 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '배운 것과 그것을 쓰는 다른 교과 활동을 이어 보세요.', toolOptions: { mode: 'match', topic: '교과를 넘어 이어요', slots: [{ id: 's1', label: '수학: 수 세기' }, { id: 's2', label: '국어: 글자 쓰기' }, { id: 's3', label: '수학: 규칙 찾기' }], cards: ['줄넘기 횟수 세기', '관찰한 꽃 이름 적기', '되풀이 무늬 꾸미기'] },
                target: { match: { s1: '줄넘기 횟수 세기', s2: '관찰한 꽃 이름 적기', s3: '되풀이 무늬 꾸미기' } }, difficulty: 0.15 },
              { prompt: '활동마다 쓰는 배움에 따라 나누어 보세요.', toolOptions: { topic: '무엇을 쓸까?', slots: ['수 세기를 써요', '글 읽고 쓰기를 써요'], cards: ['모둠 친구 수 세기', '노래 가사 읽기', '공 던진 횟수 세기', '그림 제목 쓰기'] },
                target: { sort: { '수 세기를 써요': ['모둠 친구 수 세기', '공 던진 횟수 세기'], '글 읽고 쓰기를 써요': ['노래 가사 읽기', '그림 제목 쓰기'] } }, difficulty: 0.15,
                levels: { challenge: { prompt: '활동 여섯 가지를 쓰는 배움에 따라 나누어 보세요.', toolOptions: { cards: ['모둠 친구 수 세기', '노래 가사 읽기', '공 던진 횟수 세기', '그림 제목 쓰기', '씨앗 몇 개 심었는지 세기', '알림장 읽기'] },
                  target: { sort: { '수 세기를 써요': ['모둠 친구 수 세기', '공 던진 횟수 세기', '씨앗 몇 개 심었는지 세기'], '글 읽고 쓰기를 써요': ['노래 가사 읽기', '그림 제목 쓰기', '알림장 읽기'] } } } } },
              { prompt: '배움에 대한 바른 생각만 골라 보세요.', toolOptions: { mode: 'pick', basket: '바른 생각', cards: ['수학에서 배운 것을 체육에서도 써요', '국어에서 배운 글자를 관찰 기록에도 써요', '수학은 수학 시간에만 써요', '교과마다 배우는 것은 따로따로예요'] },
                target: { pick: ['수학에서 배운 것을 체육에서도 써요', '국어에서 배운 글자를 관찰 기록에도 써요'] }, difficulty: 0.15,
                conclude: '한 교과에서 배운 것은 다른 교과에도 이어져 쓰여요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 규칙으로 무늬 꾸미기', minutes: 14, tool: 'collage',
            teacher: '"한 묶음을 정해요. 그 묶음을 똑같이 되풀이하면 규칙 무늬가 돼요." 수학 시간에 쓴 말(묶음, 되풀이)을 그대로 쓰게 한다. 묶음 순서를 중간에 바꾸는 학생에게 손가락으로 묶음을 감싸 견주게 한다. 다 꾸민 학생은 색종이로 실제 액자 테두리를 붙여 본다.',
            task: '수학에서 배운 규칙대로 한 묶음을 되풀이해 무늬를 꾸며요.',
            levels: COL_LV(['circle', 'triangle', 'square', 'heart'], ['빨강', '파랑', '노랑', '초록']),
            items: [
              { prompt: '두 조각을 한 묶음으로 정하고, 왼쪽부터 세 번 넘게 되풀이해 테두리 무늬를 만들어 보세요.', target: { repeat: { times: 3, unit: 2 } }, difficulty: 0.2,
                hints: ['수학 시간처럼 한 묶음을 먼저 정하고, 그 묶음을 똑같은 차례로 이어 놓아요.', '묶음마다 모양과 색의 차례가 같은지 손가락으로 감싸 견주어 봐요.', '예: 빨강 동그라미, 파랑 세모를 한 묶음으로 왼쪽부터 세 번 넘게 놓아요.'] },
              { prompt: '세모, 네모, 동그라미를 하나씩 써서 수학에서 배운 모양 얼굴을 만들어 보세요.', target: { has: [{ shape: 'triangle', min: 1 }, { shape: 'square', min: 1 }, { shape: 'circle', min: 1 }] }, difficulty: 0.1 },
              { prompt: '배운 규칙을 써서 나만의 무늬를 꾸미고, 해낸 것을 점검 목록에 표시해요.', target: { selfCheck: ['한 묶음을 정해 되풀이했어요', '조각을 여섯 개 넘게 썼어요', '짝에게 어느 교과에서 배운 것인지 말했어요'], minPieces: 6 }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 무늬를 꾸밀 때 어느 교과에서 배운 것을 썼나요?" 수학의 규칙과 즐거운 생활의 꾸미기가 이어졌다는 것을 모둠 털실 종이에 새 카드로 붙인다. 출구 2번을 틀린 학생은 활동 1의 잇기를 다시 본다.',
        exitTicket: [
          { type: 'tool', tool: 'collage', options: { shapes: ['circle', 'heart', 'star'], colors: ['노랑', '분홍', '초록'] }, prompt: '하트와 별을 한 묶음으로 정해 세 번 넘게 되풀이해 무늬를 만들어 보세요.', target: { repeat: { times: 3, unit: 2 }, has: [{ shape: 'heart', min: 3 }, { shape: 'star', min: 3 }] }, difficulty: 0.2 },
          { type: 'choice', prompt: '관찰한 나뭇잎의 수를 셀 때 쓰는 배움은 무엇일까요?', options: ['수학에서 배운 수 세기', '아무것도 안 써요'], answer: 0, difficulty: 0.1, explain: '수학에서 배운 수 세기는 관찰할 때도 써요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '교과를 넘어 이어지는 배움',
      items: [
        { type: 'figure', wide: true, prompt: '배운 것과 쓰는 활동을 선으로 이으세요.', tool: 'mindmap', figures: [{ options: { mode: 'match', topic: '교과를 넘어 이어요', slots: [{ id: 's1', label: '수 세기' }, { id: 's2', label: '글자 쓰기' }], cards: ['관찰한 꽃 이름 적기', '줄넘기 횟수 세기'] }, caption: '' }], answer: '수 세기-줄넘기 횟수 세기, 글자 쓰기-관찰한 꽃 이름 적기' },
        { type: 'figure', prompt: '되풀이되는 묶음을 ○로 묶고, 다음에 올 조각을 그리세요.', tool: 'collage', figures: [{ state: { pieces: [{ shape: 'circle', color: '빨강', size: 'm', x: 80, y: 200, r: 0 }, { shape: 'triangle', color: '파랑', size: 'm', x: 160, y: 200, r: 0 }, { shape: 'circle', color: '빨강', size: 'm', x: 240, y: 200, r: 0 }, { shape: 'triangle', color: '파랑', size: 'm', x: 320, y: 200, r: 0 }] }, caption: '동그라미 · 세모 · 동그라미 · 세모 · ?' }], answer: '동그라미' },
        { type: 'choice', prompt: '바른 생각에 ○ 하세요.', options: ['배운 것은 다른 교과에도 쓰여요', '배운 것은 그 교과에서만 써요'], answer: '배운 것은 다른 교과에도 쓰여요' },
        { type: 'short', prompt: '국어에서 배운 것을 다른 시간에 써 본 일을 쓰세요.' },
      ],
      easy: {
        note: '묶음을 손가락으로 감싸 봐요.',
        items: [
          { type: 'choice', prompt: '줄넘기 횟수를 셀 때 쓰는 배움에 ○ 하세요.', options: ['수 세기', '그림 그리기'], answer: '수 세기' },
          { type: 'figure', prompt: '다음에 올 조각을 그리세요.', tool: 'collage', figures: [{ state: { pieces: [{ shape: 'circle', color: '빨강', size: 'm', x: 120, y: 200, r: 0 }, { shape: 'triangle', color: '파랑', size: 'm', x: 220, y: 200, r: 0 }, { shape: 'circle', color: '빨강', size: 'm', x: 320, y: 200, r: 0 }] }, caption: '동그라미 · 세모 · 동그라미 · ?' }], answer: '세모' },
          { type: 'draw', prompt: '되풀이 무늬로 액자를 꾸며 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '콜라주 고르개에 모양 네 가지, 색 네 가지만 나와요. 잇기는 맞는 칸에 초록 테두리가 생겨요.',
      base: '스스로 묶음을 정해 세 번 넘게 되풀이해요.',
      challenge: '나눌 활동이 여섯 가지로 늘고, 모든 모양과 색으로 세 조각 묶음 무늬도 꾸며요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 교과마다 배우는 것은 이어지지 않는다고 여긴다 → 줄넘기 세기, 관찰 기록 쓰기처럼 오늘 한 활동을 짚어 준다. ② 되풀이 무늬에서 묶음 차례를 중간에 바꾼다 → 묶음을 손가락으로 감싸 견주게 한다. ③ 무늬만 꾸미고 어느 교과의 배움인지 말하지 못한다 → 점검 목록의 셋째 줄을 짝과 꼭 하게 한다. 색종이 테두리 꾸미기는 시간이 남는 모둠만 한다.',
  }));

  var TREE_BASE = { pieces: [{ shape: 'rect', color: '갈색', size: 'l', x: 280, y: 280, r: 90 }] };

  lessons.push(L(19, {
    title: '뿌리는 배운 것, 열매는 배울 것인 배움 나무 꾸미기',
    objective: '배운 것은 뿌리, 앞으로 배울 것은 열매로 나누어 배움 나무를 꾸미고, 뿌리와 열매가 왜 이어지는지 말할 수 있다.',
    illustration: ART('a big paper tree with labeled roots made of first-grade lesson cards and red fruit cards for future learning, children sticking notes on it', '나의 배움 나무', [
      { motif: 'tree', x: 240, y: 200, s: 1.3 }, { motif: 'leaf', x: 100, y: 214 }, { motif: 'leaf', x: 390, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"나무는 뿌리가 없어도 열매를 맺을까요?" 뿌리가 물을 빨아올려야 열매가 열린다는 것을 그림으로 짚는다. "배움도 그래요. 1학년에 배운 것이 뿌리가 되어 앞으로 배울 열매를 맺어요." 시연 단추로 줄기만 있는 나무 판을 보여 준다.',
        student: '뿌리에 붙일 \'1학년에 배운 것\'을 하나 떠올려 봐요.',
        demo: { tool: 'collage', options: { readOnly: true }, sequence: [{ has: [{ shape: 'rect', color: '갈색', n: 1 }] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 뿌리 카드와 열매 카드 나누기', minutes: 11, tool: 'mindmap',
            teacher: '"이 카드는 우리가 이미 배운 것인가요, 앞으로 배울 것인가요?" 3학년이 되면 영어·과학·사회 교과가 새로 생긴다는 것을 알려 준다. 앞으로 배울 것을 "몰라요"로 넘기는 학생에게 16차시 인터뷰에서 들은 것을 떠올리게 한다.',
            task: '배움 카드를 뿌리(1학년에 배운 것)와 열매(앞으로 배울 것)로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '배움 카드를 뿌리와 열매로 나누어 보세요.', toolOptions: { topic: '배움 나무', slots: ['뿌리: 1학년에 배운 것', '열매: 앞으로 배울 것'], cards: ['받침 있는 글자 읽기', '덧셈과 뺄셈', '곱셈구구', '영어 낱말 읽기'] },
                target: { sort: { '뿌리: 1학년에 배운 것': ['받침 있는 글자 읽기', '덧셈과 뺄셈'], '열매: 앞으로 배울 것': ['곱셈구구', '영어 낱말 읽기'] } }, difficulty: 0.15,
                levels: { challenge: { prompt: '배움 카드 여섯 장을 뿌리와 열매로 나누어 보세요.', toolOptions: { cards: ['받침 있는 글자 읽기', '덧셈과 뺄셈', '곱셈구구', '영어 낱말 읽기', '봄꽃 관찰하기', '과학 실험하기'] },
                  target: { sort: { '뿌리: 1학년에 배운 것': ['받침 있는 글자 읽기', '덧셈과 뺄셈', '봄꽃 관찰하기'], '열매: 앞으로 배울 것': ['곱셈구구', '영어 낱말 읽기', '과학 실험하기'] } } } } },
              { prompt: '뿌리 카드와 그 뿌리에서 맺힐 열매 카드를 이어 보세요.', toolOptions: { mode: 'match', topic: '뿌리와 열매', slots: [{ id: 's1', label: '덧셈과 뺄셈' }, { id: 's2', label: '봄꽃 관찰하기' }], cards: ['곱셈구구', '과학 실험하기'] },
                target: { match: { s1: '곱셈구구', s2: '과학 실험하기' } }, difficulty: 0.2,
                hints: ['뿌리 카드를 먼저 읽고, 그 배움을 바탕으로 해야 하는 열매를 찾아요.', '수와 셈에서 이어지는 것, 살펴보기에서 이어지는 것을 견주어 봐요.', '같은 수를 여러 번 더하는 셈이 곱셈구구로, 자세히 살펴보기가 과학 실험으로 이어져요.'] },
              { prompt: '3학년이 되면 새로 생기는 교과만 골라 보세요.', toolOptions: { mode: 'pick', basket: '3학년부터 생겨요', cards: ['과학', '영어', '사회', '국어', '수학'] },
                target: { pick: ['과학', '영어', '사회'] }, difficulty: 0.25,
                predict: { q: '앞으로 배울 것은 미리 알아볼 수 있을까요?', options: ['알 수 없어요', '알아볼 수 있어요'], answer: 1 },
                conclude: '형·언니, 선생님께 묻거나 교과서를 보면 앞으로 배울 것을 미리 알 수 있어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 배움 나무 꾸미기', minutes: 15, tool: 'collage',
            teacher: '"뿌리는 갈색 세모, 잎은 초록, 열매는 빨강 동그라미로 붙여요." 판으로 꾸민 뒤 큰 종이 나무에도 붙임 딱지로 뿌리와 열매 이름을 적어 붙이게 한다. 열매만 많이 붙이고 뿌리가 없는 학생에게 "뿌리가 없으면 열매는 어떻게 될까요?"를 묻는다.',
            task: '줄기에 뿌리·잎·열매를 붙여 배움 나무를 꾸미고, 큰 종이 나무에 이름을 적어 붙여요.',
            levels: COL_LV(['triangle', 'circle', 'rect', 'leaf'], ['갈색', '초록', '빨강', '노랑']),
            items: [
              { prompt: '줄기 아래에 갈색 세모 뿌리를 두 개 이상, 위에 초록 동그라미 잎을 하나 이상 붙여 보세요.', state: TREE_BASE,
                target: { has: [{ shape: 'triangle', color: '갈색', min: 2 }, { shape: 'circle', color: '초록', min: 1 }, { shape: 'rect', color: '갈색', n: 1 }] }, difficulty: 0.15,
                hints: ['뿌리와 잎이 나무의 어디에 붙는지 떠올리고, 문제에서 말한 모양과 색을 찾아요.', '갈색 세모와 초록 동그라미가 각각 몇 개인지 세어 봐요.', '갈색 세모를 두 개, 초록 동그라미를 하나 붙여요. 줄기는 그대로 둬요.'] },
              { prompt: '앞으로 배울 것 세 가지를 빨강 동그라미 열매 세 개로 붙여 보세요.', state: { pieces: [{ shape: 'rect', color: '갈색', size: 'l', x: 280, y: 280, r: 90 }, { shape: 'circle', color: '초록', size: 'l', x: 280, y: 140, r: 0 }] },
                target: { has: [{ shape: 'circle', color: '빨강', n: 3 }, { shape: 'circle', color: '초록', n: 1 }] }, difficulty: 0.15 },
              { prompt: '나만의 배움 나무를 꾸미고, 해낸 것을 점검 목록에 표시해요.', state: TREE_BASE,
                target: { selfCheck: ['뿌리를 붙이고 배운 것 이름을 적었어요', '열매를 붙이고 배울 것 이름을 적었어요', '짝에게 뿌리와 열매가 왜 이어지는지 말했어요'], minPieces: 5 }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"내 나무에서 가장 큰 열매는 무엇이에요? 그 열매는 어느 뿌리에서 자랐나요?" 두세 명이 말하게 한다. 큰 종이 배움 나무는 교실 뒤 털실 종이 옆에 붙인다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '배움 나무', slots: ['뿌리: 1학년에 배운 것', '열매: 앞으로 배울 것'], cards: ['몇 시 30분 읽기', '몇 시 몇 분 읽기', '50까지 수 세기', '세 자리 수 읽기'] }, prompt: '배움 카드를 뿌리와 열매로 나누어 보세요.', target: { sort: { '뿌리: 1학년에 배운 것': ['몇 시 30분 읽기', '50까지 수 세기'], '열매: 앞으로 배울 것': ['몇 시 몇 분 읽기', '세 자리 수 읽기'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '앞으로 배울 것을 미리 알아보는 방법은 무엇일까요?', options: ['형·언니에게 물어봐요', '알아볼 수 없어요'], answer: 0, difficulty: 0.1, explain: '형·언니, 선생님께 묻거나 교과서를 보면 미리 알 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '나의 배움 나무',
      items: [
        { type: 'figure', prompt: '줄기에 뿌리와 열매를 그리고, 이름을 적으세요.', tool: 'collage', figures: [{ options: { readOnly: true }, state: TREE_BASE, caption: '뿌리: 배운 것 / 열매: 배울 것' }] },
        { type: 'table', prompt: '뿌리와 열매를 쓰세요.', columns: ['뿌리(배운 것)', '열매(배울 것)'], rows: 3 },
        { type: 'choice', prompt: '3학년부터 새로 생기는 교과에 ○ 하세요.', options: ['과학', '국어', '수학'], answer: '과학' },
        { type: 'short', prompt: '내 나무에서 뿌리와 열매가 왜 이어지는지 쓰세요.' },
      ],
      easy: {
        note: '뿌리는 아래, 열매는 위!',
        items: [
          { type: 'choice', prompt: '1학년에 배운 것에 ○ 하세요.', options: ['덧셈과 뺄셈', '곱셈구구'], answer: '덧셈과 뺄셈' },
          { type: 'choice', prompt: '앞으로 배울 것에 ○ 하세요.', options: ['영어 낱말 읽기', '받침 있는 글자 읽기'], answer: '영어 낱말 읽기' },
          { type: 'draw', prompt: '배움 나무를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '콜라주 고르개에 모양 네 가지, 색 네 가지만 나와요. 나누기는 맞는 칸에 초록 테두리가 생겨요.',
      base: '스스로 뿌리와 열매를 정해 붙이고 이름을 적어요.',
      challenge: '배움 카드가 여섯 장으로 늘고, 모든 모양과 색으로 나무를 꾸며요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 앞으로 배울 것은 미리 생각해 볼 수 없다고 여긴다 → 16차시 인터뷰 기록과 3학년 교과 이름을 보여 준다. ② 뿌리 없이 열매만 붙인다 → 나무가 뿌리로 물을 빨아올리는 그림을 다시 보인다. ③ 뿌리와 열매를 아무렇게나 잇는다 → \'~을 알아야 ~을 배울 수 있어요\'로 말하게 한다. 3학년부터 사회·과학·영어 교과가 생긴다는 것은 지금 교육과정 기준이다.',
  }));

  lessons.push(L(20, {
    title: '2학년 수학 차례와 우리 반 조사 그래프 읽기',
    objective: '2학년 수학 차례 자료와 우리 반 조사 그림그래프를 읽고, 1학년 배움과 이어지는 2학년 배움을 찾아 말할 수 있다.',
    illustration: ART('a paper table of contents for a second-grade math book next to a simple picture graph of stars showing what the class wants to learn', '자료를 읽어요', [
      { motif: 'star', x: 120, y: 92, s: 0.5 }, { motif: 'star', x: 170, y: 92, s: 0.5 }, { motif: 'tree', x: 400, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"2학년 형·언니의 수학책 차례를 빌려 왔어요." 차례 쪽을 전자칠판에 띄우고 단원 이름을 함께 읽는다. "1학년 수학책 차례와 견주면 무엇이 이어질까요?" 시연 단추로 \'세 자리 수\' 카드가 2학년 칸에 놓이는 모습을 보여 준다.',
        student: '우리 1학년 수학책 차례에서 기억나는 단원 이름을 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '수학 차례', slots: ['1학년 수학', '2학년 수학'], cards: ['100까지의 수', '세 자리 수'], shuffle: false }, sequence: [{ sort: { '1학년 수학': ['100까지의 수'], '2학년 수학': ['세 자리 수'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 수학 차례 견주기', minutes: 13, tool: 'mindmap',
            teacher: '"차례 자료를 보며 이 단원은 1학년 책에 있었나요, 2학년 책에 있나요?" 차례 쪽을 손가락으로 짚으며 찾게 한다. 이름이 비슷한 단원(모양과 시각, 시각과 시간)을 헷갈리는 학생에게 두 차례에서 직접 찾아 짚게 한다.',
            task: '1학년과 2학년 수학 차례 자료를 보고 단원을 나누고, 이어지는 단원을 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '차례 자료를 보고 단원 이름을 1학년과 2학년으로 나누어 보세요.', toolOptions: { topic: '수학 차례', slots: ['1학년 수학', '2학년 수학'], cards: ['50까지의 수', '여러 가지 모양', '곱셈구구', '길이 재기'] },
                target: { sort: { '1학년 수학': ['50까지의 수', '여러 가지 모양'], '2학년 수학': ['곱셈구구', '길이 재기'] } }, difficulty: 0.15 },
              { prompt: '1학년 단원과 이어지는 2학년 단원을 이어 보세요.', toolOptions: { mode: 'match', topic: '이어지는 단원', slots: [{ id: 's1', label: '100까지의 수' }, { id: 's2', label: '여러 가지 모양' }, { id: 's3', label: '모양과 시각' }], cards: ['세 자리 수', '여러 가지 도형', '시각과 시간'] },
                target: { match: { s1: '세 자리 수', s2: '여러 가지 도형', s3: '시각과 시간' } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['세 자리 수', '여러 가지 도형', '시각과 시간', '표와 그래프'] } } } },
              { prompt: '두 학년 차례에 모두 있는 단원만 골라 보세요.', toolOptions: { mode: 'pick', basket: '두 학년 모두', cards: ['덧셈과 뺄셈', '규칙 찾기', '곱셈구구', '9까지의 수'] },
                target: { pick: ['덧셈과 뺄셈', '규칙 찾기'] }, difficulty: 0.25,
                conclude: '같은 단원 이름이 2학년에도 나와요. 1학년에 배운 것이 더 크게 이어져요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 우리 반 조사 그래프 읽기', minutes: 13, tool: 'chart',
            teacher: '"우리 반이 2학년에 가장 해 보고 싶은 것을 붙임 딱지로 골랐어요. 별 하나가 한 명이에요." 별을 하나씩 손가락으로 짚으며 세게 한다. 별의 줄 길이만 보고 대충 고르는 학생에게 직접 세어 보게 한다.',
            task: '그림그래프에서 별을 세어 우리 반이 해 보고 싶은 것을 읽어요.',
            levels: { easy: { showValues: true }, base: {}, challenge: {} },
            items: [
              { prompt: '가장 많은 친구가 해 보고 싶은 것은 무엇일까요?', toolOptions: { type: 'picture', mode: 'read', title: '2학년에 해 보고 싶은 것', unit: '명', icon: 'star', icons: [{ value: 1, name: '1명' }], data: [{ label: '곱셈구구', value: 7 }, { label: '길이 재기', value: 5 }, { label: '시각 읽기', value: 4 }], question: '가장 많은 친구가 고른 것은?', choices: ['곱셈구구', '길이 재기', '시각 읽기'] }, target: { pick: 0 }, difficulty: 0.1 },
              { prompt: '\'길이 재기\'를 고른 친구는 몇 명일까요?', toolOptions: { type: 'picture', mode: 'read', title: '2학년에 해 보고 싶은 것', unit: '명', icon: 'star', icons: [{ value: 1, name: '1명' }], data: [{ label: '곱셈구구', value: 7 }, { label: '길이 재기', value: 5 }, { label: '시각 읽기', value: 4 }], question: '길이 재기를 고른 친구는?', choices: ['4명', '5명', '7명'] }, target: { pick: 1 }, difficulty: 0.15,
                hints: ['\'길이 재기\' 줄을 찾아 손가락으로 짚어요. 별 하나는 친구 한 명이에요.', '그 줄의 별만 왼쪽부터 하나, 둘, 셋… 하고 세어요. 다른 줄과 섞지 않아요.', '\'길이 재기\' 줄의 별은 5개예요. 그러니 5명이에요.'] },
              { prompt: '가장 적은 친구가 고른 것은 무엇일까요?', toolOptions: { type: 'picture', mode: 'read', title: '2학년에 해 보고 싶은 것', unit: '명', icon: 'star', icons: [{ value: 1, name: '1명' }], data: [{ label: '곱셈구구', value: 6 }, { label: '길이 재기', value: 8 }, { label: '시각 읽기', value: 3 }, { label: '표 만들기', value: 5 }], question: '가장 적은 친구가 고른 것은?', choices: ['곱셈구구', '길이 재기', '시각 읽기', '표 만들기'] }, target: { pick: 2 }, difficulty: 0.2 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"차례와 그래프에서 알게 된 것을 하나씩 말해 볼까요?" 자료를 읽으면 앞으로 배울 것도 미리 알 수 있다는 것을 짚는다. 차례에서 찾은 이어지는 단원은 모둠 털실 종이에 새 카드로 붙인다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '이어지는 단원', slots: [{ id: 'e1', label: '비교하기 (길이·무게 견주기)' }, { id: 'e2', label: '덧셈과 뺄셈 (같은 수 여러 번 더하기)' }], cards: ['곱셈', '길이 재기'] }, prompt: '다른 1학년 단원도 이어 보세요. 이어지는 2학년 단원을 찾아요.', target: { match: { e1: '길이 재기', e2: '곱셈' } }, difficulty: 0.2 },
          { type: 'tool', tool: 'chart', options: { type: 'picture', mode: 'read', title: '좋아하는 시간', unit: '명', icon: 'star', icons: [{ value: 1, name: '1명' }], data: [{ label: '체육', value: 6 }, { label: '미술', value: 4 }, { label: '음악', value: 5 }], question: '가장 많은 친구가 좋아하는 시간은?', choices: ['체육', '미술', '음악'] }, prompt: '그래프를 보고 가장 많은 친구가 좋아하는 시간을 골라 보세요.', target: { pick: 0 }, difficulty: 0.1 },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '차례와 그래프 읽기',
      items: [
        { type: 'figure', wide: true, prompt: '1학년 단원과 이어지는 2학년 단원을 선으로 이으세요.', tool: 'mindmap', figures: [{ options: { mode: 'match', topic: '이어지는 단원', slots: [{ id: 's1', label: '100까지의 수' }, { id: 's2', label: '여러 가지 모양' }], cards: ['여러 가지 도형', '세 자리 수'] }, caption: '' }], answer: '100까지의 수-세 자리 수, 여러 가지 모양-여러 가지 도형' },
        { type: 'figure', prompt: '별을 세어 빈칸에 쓰세요.', tool: 'chart', figures: [{ options: { type: 'picture', mode: 'read', title: '2학년에 해 보고 싶은 것', unit: '명', icon: 'star', icons: [{ value: 1, name: '1명' }], data: [{ label: '곱셈구구', value: 7 }, { label: '길이 재기', value: 5 }, { label: '시각 읽기', value: 4 }] }, caption: '곱셈구구 ___명, 길이 재기 ___명' }], answer: '7명, 5명' },
        { type: 'choice', prompt: '2학년 수학에 있는 단원에 ○ 하세요.', options: ['곱셈구구', '9까지의 수', '50까지의 수'], answer: '곱셈구구' },
        { type: 'short', prompt: '2학년에 가장 해 보고 싶은 것과 그 까닭을 쓰세요.' },
      ],
      easy: {
        note: '별 하나는 한 명이에요. 하나씩 짚으며 세요.',
        items: [
          { type: 'choice', prompt: '2학년에 배우는 것에 ○ 하세요.', options: ['곱셈구구', '9까지의 수'], answer: '곱셈구구' },
          { type: 'figure', prompt: '별을 세어 쓰세요.', tool: 'chart', figures: [{ options: { type: 'picture', mode: 'read', title: '해 보고 싶은 것', unit: '명', icon: 'star', icons: [{ value: 1, name: '1명' }], data: [{ label: '곱셈구구', value: 3 }, { label: '길이 재기', value: 2 }] }, caption: '곱셈구구 ___명' }], answer: '3명' },
          { type: 'draw', prompt: '2학년에 해 보고 싶은 것을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 그래프에 수가 함께 보여요.',
      base: '모두 놓은 뒤 확인을 눌러요. 그래프의 별을 직접 세어요.',
      challenge: '관계없는 단원 카드가 섞여 있고, 그래프 항목이 넷으로 늘어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 단원 이름이 비슷하면 같은 학년이라고 여긴다 → 두 차례 쪽을 나란히 놓고 직접 짚게 한다. ② 그래프의 별 줄 길이만 보고 수를 어림한다 → 하나씩 짚으며 센다. ③ 같은 이름의 단원(덧셈과 뺄셈)이 두 학년에 다 있다는 것을 이상하게 여긴다 → 2학년은 더 큰 수로 한다는 것을 알려 준다. 수학 차례는 교과서 판에 따라 단원 이름이 조금 다를 수 있으니, 빌려 온 2학년 책의 차례로 바꾸어 쓴다. 그래프 수는 예시이니 우리 반이 실제로 붙인 딱지 수로 바꾸어도 된다.',
  }));

  // ───────────────────────── 21~24차시: 이어 붙인 것으로 앞으로의 배움 말하기 ─────────────────────────

  lessons.push(L(21, {
    title: '털실 종이를 보이며 앞으로의 배움 발표하기',
    objective: '배운 것과 배울 것을 이어 붙인 종이를 보이며, 배운 것 → 이어 배울 것 → 까닭의 차례로 앞으로의 배움을 발표할 수 있다.',
    illustration: ART('a child standing beside a big paper sheet with yarn lines joining lesson cards, pointing to one line while classmates listen', '이어 붙인 것을 보여 줘요', [
      { motif: 'star', x: 100, y: 90, s: 0.5 }, { motif: 'tree', x: 400, y: 214 }, { motif: 'flower', x: 250, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"17~20차시에 만든 털실 종이를 보세요. 이 털실 하나로 친구에게 무엇을 알려 줄 수 있을까요?" 교사가 털실 하나를 짚으며 시범 발표를 한다. "저는 1학년에 시계 보기를 배웠어요. 2학년에는 몇 시 몇 분을 배워요. 몇 시를 알아야 몇 분도 읽을 수 있어서 이었어요." 시연 단추로 발표 문장이 차례대로 놓이는 모습을 보여 준다.',
        student: '털실 종이에서 내가 발표할 털실 하나를 골라 손가락으로 짚어 봐요.',
        demo: { tool: 'story', options: { mode: 'order', slots: ['처음', '가운데', '끝'], cards: ['1학년에 시계 보기를 배웠어요', '2학년에는 몇 시 몇 분을 배워요', '몇 시를 알아야 몇 분도 읽을 수 있어서 이었어요'], shuffle: false }, sequence: [{ order: ['1학년에 시계 보기를 배웠어요', '2학년에는 몇 시 몇 분을 배워요', '몇 시를 알아야 몇 분도 읽을 수 있어서 이었어요'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 발표 차례 세우기', minutes: 11, tool: 'story',
            teacher: '"발표에 꼭 들어갈 세 가지는 배운 것, 이어 배울 것, 이은 까닭이에요." 손가락 세 개를 펴게 한다. 까닭을 빼먹은 발표를 일부러 들려주고 무엇이 빠졌는지 찾게 한다.',
            task: '발표 문장을 차례대로 놓고, 빠진 부분을 찾아요.',
            levels: CARD_LV,
            items: [
              { prompt: '민지의 발표를 차례대로 놓아 보세요.', toolOptions: { mode: 'order', slots: ['처음', '둘째', '셋째', '끝'], cards: ['제 털실 종이를 보여 드릴게요', '1학년에 그림일기를 배웠어요', '2학년에는 겪은 일을 여러 문장으로 써요', '한 문장을 써 봐야 여러 문장도 쓸 수 있어서 이었어요'] },
                target: { order: ['제 털실 종이를 보여 드릴게요', '1학년에 그림일기를 배웠어요', '2학년에는 겪은 일을 여러 문장으로 써요', '한 문장을 써 봐야 여러 문장도 쓸 수 있어서 이었어요'] }, difficulty: 0.15 },
              { prompt: '준호가 "1학년에 덧셈을 배웠어요. 2학년에는 곱셈구구를 배워요."라고 발표했어요. 빠진 것을 골라 보세요.', toolOptions: { mode: 'pick', basket: '빠진 것', cards: ['배운 것', '이어 배울 것', '이은 까닭'] },
                target: { pick: ['이은 까닭'] }, difficulty: 0.2,
                hints: ['발표에 들어갈 세 가지를 손가락으로 하나씩 접으며 준호의 말과 견주어 봐요.', '준호는 무엇을 배웠는지와 무엇을 배울지는 말했어요. 하나 더 필요한 것은요?', '\'왜 이었는지\'가 빠졌어요.'] },
              { prompt: '빈칸에 알맞은 말을 넣어 서아의 발표를 완성해 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'b1', label: '1학년에 ___를 배웠어요.' }, { id: 'b2', label: '2학년에는 ___를 배워요.' }, { id: 'b3', label: '100까지 셀 줄 알아야 큰 수도 셀 수 있어서 ___.' }], cards: ['100까지 수 세기', '세 자리 수 읽기', '이었어요'] },
                target: { fill: { b1: '100까지 수 세기', b2: '세 자리 수 읽기', b3: '이었어요' } }, difficulty: 0.2 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 모둠에서 발표하기 (실습)', minutes: 15, tool: 'emotion',
            teacher: '"모둠 안에서 털실 종이를 보이며 한 사람이 1분씩 발표해요." 네 명 모둠이면 5분 남짓이다. 듣는 친구는 손가락 세 개로 발표에 세 가지가 들어갔는지 센다. "앞으로 배울 건 몰라서 말 못 해요"라는 학생에게 털실 종이의 오른쪽 카드를 함께 읽어 준다.',
            task: '모둠에서 털실 종이를 보이며 발표하고, 친구 발표를 들은 뒤 할 일을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '모둠 안에서 털실 종이를 보이며 1분 동안 발표했으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '서아가 "앞으로 배울 건 아직 몰라서 말할 수 없어"라고 해요. 어떻게 말해 줄까요?', toolOptions: { mode: 'branch', who: '서아', situation: '서아가 발표 차례에서 앞으로 배울 것은 모른다며 머뭇거려요.', choices: [
                { id: 'skip', text: '"그럼 하지 마."', result: '서아가 발표를 못 하고 속상해요.', mood: '속상함', why: '털실 종이에 앞으로 배울 것이 이미 붙어 있어요.' },
                { id: 'look', text: '"털실 종이 오른쪽 카드를 같이 읽어 볼까?"', result: '서아가 카드를 보며 끝까지 발표해요.', mood: '뿌듯함' },
                { id: 'say', text: '내가 대신 말해 줘요', result: '서아는 스스로 말할 기회를 잃어요.', mood: '속상함', why: '서아가 스스로 말할 수 있게 도와줘요.' }] }, target: { choice: 'look' }, difficulty: 0.1 },
              { prompt: '발표를 들은 친구에게 해 줄 말을 상황에 맞게 이어 보세요.', toolOptions: { mode: 'match', slots: [{ id: 's1', label: '세 가지를 모두 말했어요' }, { id: 's2', label: '까닭을 빠뜨렸어요' }], cards: ['"세 가지를 다 말해서 잘 알아들었어."', '"왜 이었는지도 말해 줄래?"'] },
                target: { match: { s1: '"세 가지를 다 말해서 잘 알아들었어."', s2: '"왜 이었는지도 말해 줄래?"' } }, difficulty: 0.15 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 들은 발표 가운데 가장 재미있던 털실은 무엇이에요?" 모둠마다 하나씩 말하게 한다. 앞으로 배울 것도 미리 알아보고 이어 생각할 수 있다는 것을 칠판에 적는다. 다음 시간에는 3학년에 해 보고 싶은 일을 그린다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { mode: 'order', slots: ['처음', '가운데', '끝'], cards: ['1학년에 모양 찾기를 배웠어요', '2학년에는 삼각형과 사각형을 배워요', '모양을 알아야 도형도 알 수 있어서 이었어요'] }, prompt: '하준이의 발표를 차례대로 놓아 보세요.', target: { order: ['1학년에 모양 찾기를 배웠어요', '2학년에는 삼각형과 사각형을 배워요', '모양을 알아야 도형도 알 수 있어서 이었어요'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '배움 발표에 꼭 들어갈 것이 아닌 것은 무엇일까요?', options: ['배운 것', '이은 까닭', '좋아하는 음식'], answer: 2, difficulty: 0.1, explain: '배운 것, 이어 배울 것, 이은 까닭을 말해요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '앞으로의 배움 발표',
      items: [
        { type: 'figure', wide: true, prompt: '발표 문장에 차례대로 번호를 쓰세요.', tool: 'story', figures: [{ options: { mode: 'order', slots: ['처음', '가운데', '끝'], cards: ['2학년에는 몇 시 몇 분을 배워요', '몇 시를 알아야 몇 분도 읽을 수 있어서 이었어요', '1학년에 시계 보기를 배웠어요'], shuffle: false }, caption: '' }], answer: '시계 보기 → 몇 시 몇 분 → 까닭' },
        { type: 'table', prompt: '내 발표를 미리 써 보세요.', columns: ['배운 것', '이어 배울 것', '이은 까닭'], rows: 1 },
        { type: 'check', prompt: '발표에서 해낸 것에 ✓ 하세요.', options: ['털실 종이를 보여 주었어요', '배운 것을 말했어요', '이어 배울 것을 말했어요', '까닭을 말했어요'] },
        { type: 'short', prompt: '친구 발표에서 새로 알게 된 것을 쓰세요.' },
      ],
      easy: {
        note: '손가락 세 개: 배운 것, 배울 것, 까닭!',
        items: [
          { type: 'choice', prompt: '발표에 들어갈 것에 ○ 하세요.', options: ['이은 까닭', '좋아하는 색'], answer: '이은 까닭' },
          { type: 'short', prompt: '내가 발표할 배운 것을 쓰세요.' },
          { type: 'draw', prompt: '발표하는 내 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 초록 테두리가 생겨요. 발표는 표에 미리 쓴 것을 보고 읽어요.',
      base: '모두 놓은 뒤 확인을 눌러요. 1분 동안 털실 종이를 보이며 발표해요.',
      challenge: '털실 두 개를 이어서 발표하고, 친구 발표에 빠진 것을 찾아 말해 줘요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 앞으로 배울 것은 미리 생각해 볼 수 없다고 여긴다 → 털실 종이 오른쪽 카드와 16차시 인터뷰 기록을 함께 본다. ② 까닭을 빼먹는다 → 듣는 친구의 손가락 세기로 스스로 알게 한다. ③ 털실 종이를 보이지 않고 말로만 한다 → 짚으며 말하게 한다. 26명이면 네 명씩 모둠이 동시에 발표해 15분 안에 마친다.',
  }));

  var ME_BASE = { pieces: [{ shape: 'circle', color: '분홍', size: 'm', x: 280, y: 140, r: 0 }, { shape: 'rect', color: '파랑', size: 'l', x: 280, y: 240, r: 90 }] };

  lessons.push(L(22, {
    title: '3학년에 해 보고 싶은 일 그려 보기',
    objective: '3학년이 되면 새로 하게 될 배움을 알아보고, 해 보고 싶은 일을 골라 내 모습으로 꾸밀 수 있다.',
    illustration: ART('a child in paper collage form doing a science experiment with a magnifying glass, an English picture book and a map nearby, with a third-grade classroom door behind', '3학년이 되면', [
      { motif: 'star', x: 380, y: 90, s: 0.6 }, { motif: 'house', x: 110, y: 214, color: 'sky' }, { motif: 'leaf', x: 250, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"3학년 교실 앞을 지나가 본 적 있나요? 3학년은 무엇을 배울까요?" 19차시에 알게 된 새 교과(과학·사회·영어)를 떠올리게 한다. "앞으로 할 일은 미리 그려 볼 수 있을까요?" 시연 단추로 내 모습 판에 돋보기를 든 손이 붙는 모습을 보여 준다.',
        student: '3학년이 되면 가장 해 보고 싶은 일을 떠올려 짝에게 말해 봐요.',
        demo: { tool: 'collage', options: { readOnly: true }, sequence: [{ has: [{ shape: 'circle', color: '분홍', n: 1 }, { shape: 'rect', color: '파랑', n: 1 }] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 3학년에 새로 하는 일 찾기', minutes: 11, tool: 'mindmap',
            teacher: '"그림 그리기는 1학년에도 하지요? 3학년에도 해요. 과학 실험은요?" 지금도 하는 것과 3학년부터 새로 하는 것을 나눈다. 3학년 형·언니의 시간표를 보여 주면 더 좋다.',
            task: '지금도 하는 일과 3학년부터 새로 하는 일을 나누고, 해 보고 싶은 일과 필요한 배움을 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '배움 카드를 나누어 보세요.', toolOptions: { topic: '3학년이 되면', slots: ['1학년에도 해요', '3학년부터 새로 해요'], cards: ['그림 그리기', '노래 부르기', '과학 교과서로 실험하기', '영어 교과서로 공부하기'] },
                target: { sort: { '1학년에도 해요': ['그림 그리기', '노래 부르기'], '3학년부터 새로 해요': ['과학 교과서로 실험하기', '영어 교과서로 공부하기'] } }, difficulty: 0.15,
                levels: { challenge: { prompt: '배움 카드 여섯 장을 나누어 보세요.', toolOptions: { cards: ['그림 그리기', '노래 부르기', '과학 교과서로 실험하기', '영어 교과서로 공부하기', '줄넘기 하기', '사회 교과서로 우리 고장 알아보기'] },
                  target: { sort: { '1학년에도 해요': ['그림 그리기', '노래 부르기', '줄넘기 하기'], '3학년부터 새로 해요': ['과학 교과서로 실험하기', '영어 교과서로 공부하기', '사회 교과서로 우리 고장 알아보기'] } } } } },
              { prompt: '3학년에 해 보고 싶은 일과 지금 배운 것 가운데 도움이 될 것을 이어 보세요.', toolOptions: { mode: 'match', topic: '무엇이 도움이 될까?', slots: [{ id: 's1', label: '과학 실험하기' }, { id: 's2', label: '영어 그림책 읽기' }, { id: 's3', label: '우리 고장 지도 보기' }], cards: ['자세히 살펴보기', '소리 내어 읽기', '학교 둘레 길 알기'] },
                target: { match: { s1: '자세히 살펴보기', s2: '소리 내어 읽기', s3: '학교 둘레 길 알기' } }, difficulty: 0.25,
                hints: ['해 보고 싶은 일을 하려면 무엇을 할 줄 알아야 하는지 먼저 떠올려요.', '실험, 읽기, 지도는 각각 무엇을 잘해야 할까요? 다시 견주어 봐요.', '실험은 자세히 살펴보기, 영어 그림책은 소리 내어 읽기, 고장 지도는 학교 둘레 길 알기와 이어요.'] },
              { prompt: '앞으로 할 일에 대한 바른 생각만 골라 보세요.', toolOptions: { mode: 'pick', basket: '바른 생각', cards: ['앞으로 할 일도 미리 그려 볼 수 있어요', '지금 배운 것이 3학년에도 도움이 돼요', '3학년 일은 3학년이 돼야만 생각할 수 있어요'] },
                target: { pick: ['앞으로 할 일도 미리 그려 볼 수 있어요', '지금 배운 것이 3학년에도 도움이 돼요'] }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 3학년의 나 꾸미기', minutes: 15, tool: 'collage',
            teacher: '"3학년이 된 내가 무엇을 하고 있을까요? 손에 무엇을 들고 있을까요?" 돋보기(동그라미+긴 네모), 책(네모)처럼 조각으로 나타내는 방법을 보여 준다. 다 꾸민 뒤 큰 종이에 크레파스로 같은 장면을 그려 \'3학년의 나\' 전시판에 붙인다.',
            task: '내 모습 판에 조각을 붙여 3학년에 해 보고 싶은 일을 하는 나를 꾸며요.',
            levels: COL_LV(['circle', 'rect', 'square', 'triangle'], ['분홍', '파랑', '노랑', '갈색', '초록', '하양']),
            items: [
              { prompt: '내 모습 옆에 하양 동그라미와 갈색 긴 네모로 돋보기를 붙여, 실험하는 나를 꾸며 보세요.', state: ME_BASE,
                target: { has: [{ shape: 'circle', color: '하양', min: 1 }, { shape: 'rect', color: '갈색', min: 1 }, { shape: 'circle', color: '분홍', n: 1 }] }, difficulty: 0.15 },
              { prompt: '내 모습 앞에 노랑 네모 책을 두 권 붙여, 그림책을 읽는 나를 꾸며 보세요.', state: ME_BASE,
                target: { has: [{ shape: 'square', color: '노랑', n: 2 }, { shape: 'rect', color: '파랑', n: 1 }] }, difficulty: 0.15 },
              { prompt: '3학년에 해 보고 싶은 일을 하는 나를 꾸미고, 해낸 것을 점검 목록에 표시해요.', state: ME_BASE,
                target: { selfCheck: ['해 보고 싶은 일이 무엇인지 보여요', '조각을 다섯 개 넘게 썼어요', '큰 종이에도 같은 장면을 그렸어요'], minPieces: 5 }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"3학년의 내가 하는 일을 한 문장으로 말해 봐요. \'3학년이 되면 나는 ~을 할 거예요.\'" 두세 명이 말하게 한다. 출구 1번을 틀린 학생은 3학년 시간표를 다시 보게 한다. 전시판은 다음 시간 친구 그림 보기에 쓴다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '3학년이 되면', slots: ['1학년에도 해요', '3학년부터 새로 해요'], cards: ['공 던지기', '사회 교과서로 공부하기', '만들기', '과학실에서 관찰하기'] }, prompt: '배움 카드를 나누어 보세요.', target: { sort: { '1학년에도 해요': ['공 던지기', '만들기'], '3학년부터 새로 해요': ['사회 교과서로 공부하기', '과학실에서 관찰하기'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '3학년에 해 보고 싶은 일을 미리 그려 볼 수 있을까요?', options: ['그려 볼 수 있어요', '3학년이 돼야만 알 수 있어요'], answer: 0, difficulty: 0.1, explain: '알아본 것을 바탕으로 앞으로 할 일을 미리 그려 볼 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '3학년의 나',
      items: [
        { type: 'check', prompt: '3학년부터 새로 하는 것에 ✓ 하세요.', options: ['과학 실험', '영어 공부', '그림 그리기', '사회 공부'] },
        { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '3학년이 되면 나는 ___을 해 보고 싶어요.' },
        { type: 'draw', wide: true, prompt: '3학년에 해 보고 싶은 일을 하는 내 모습을 그려 보세요.' },
        { type: 'short', prompt: '그 일을 하려면 지금 무엇을 잘 배워 두면 좋을지 쓰세요.' },
      ],
      easy: {
        note: '3학년 형·언니가 하는 일을 떠올려요.',
        items: [
          { type: 'choice', prompt: '3학년부터 새로 하는 것에 ○ 하세요.', options: ['과학 실험', '노래 부르기'], answer: '과학 실험' },
          { type: 'draw', wide: true, prompt: '3학년의 내 모습을 그려 보세요.' },
          { type: 'short', prompt: '그림 제목을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '콜라주 고르개에 모양 네 가지, 색 여섯 가지만 나와요. 나누기는 맞는 칸에 초록 테두리가 생겨요.',
      base: '스스로 조각을 골라 3학년의 나를 꾸며요.',
      challenge: '나눌 카드가 여섯 장으로 늘고, 해 보고 싶은 일에 필요한 배움을 두 가지 적어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 앞으로 할 일은 그때가 돼야 안다고 여긴다 → 3학년 시간표와 19차시 배움 나무 열매를 보여 준다. ② 1학년에도 하는 일과 새로 하는 일을 헷갈린다 → \'교과서가 따로 있는지\'를 실마리로 준다. ③ 조각으로 나타내기 어려워한다 → 큰 종이 그림을 먼저 그리고 판은 간단히 해도 된다고 말해 준다. 3학년 교과(사회·과학·영어 등)는 지금 교육과정 기준이다.',
  }));

  lessons.push(L(23, {
    title: '친구의 배움 그림을 보고 물으며 듣기',
    objective: '친구의 \'3학년의 나\' 그림을 보고 설명을 끝까지 들은 뒤, 그 배움에 대해 궁금한 것을 물을 수 있다.',
    illustration: ART('children walking along a paper gallery wall of drawings titled third grade me, one child asking a question to a friend beside a drawing', '친구의 배움 그림', [
      { motif: 'house', x: 110, y: 214, color: 'lavender' }, { motif: 'flower', x: 380, y: 228 }, { motif: 'cloud', x: 260, y: 70, s: 0.6 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"친구 그림을 볼 때 \'잘 그렸다\'만 말하면 무엇을 알 수 있을까요?" 그림만 칭찬하는 말과 배움을 묻는 말을 견주어 들려준다. "오늘은 친구가 3학년에 무엇을 배우고 싶은지 물어보며 들어요." 시연 단추로 배움을 묻는 말 카드가 바구니에 들어가는 모습을 보여 준다.',
        student: '22차시에 그린 내 그림을 짝에게 한 문장으로 소개해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'pick', basket: '배움을 묻는 말', cards: ['실험할 때 무엇을 살펴보고 싶어?', '색이 예뻐.'], shuffle: false }, sequence: [{ pick: ['실험할 때 무엇을 살펴보고 싶어?'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 배움을 묻는 말 고르기', minutes: 11, tool: 'mindmap',
            teacher: '"그림이 무엇을 하는 모습인지, 왜 그걸 해 보고 싶은지 물어보면 친구의 배움을 더 알 수 있어요." 그림 색만 묻는 학생에게 "친구는 그림으로 무엇을 말하고 싶었을까요?"를 묻는다.',
            task: '친구의 배움 그림을 보고 할 말 가운데 배움을 묻는 말을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '하준이는 영어 그림책을 읽는 모습을 그렸어요. 배움을 묻는 말만 골라 보세요.', toolOptions: { mode: 'pick', basket: '배움을 묻는 말', cards: ['어떤 영어 그림책을 읽고 싶어?', '영어를 배우면 무엇을 해 보고 싶어?', '옷 색깔이 예뻐.', '나도 파랑 좋아해.'] },
                target: { pick: ['어떤 영어 그림책을 읽고 싶어?', '영어를 배우면 무엇을 해 보고 싶어?'] }, difficulty: 0.15 },
              { prompt: '친구 그림을 보고 한 말을 두 가지로 나누어 보세요.', toolOptions: { topic: '친구 그림을 보고', slots: ['배움을 물어요', '그림만 말해요'], cards: ['왜 과학 실험이 해 보고 싶어?', '돋보기로 무엇을 볼 거야?', '선을 반듯하게 그렸네.', '노랑을 많이 썼구나.'] },
                target: { sort: { '배움을 물어요': ['왜 과학 실험이 해 보고 싶어?', '돋보기로 무엇을 볼 거야?'], '그림만 말해요': ['선을 반듯하게 그렸네.', '노랑을 많이 썼구나.'] } }, difficulty: 0.2 },
              { prompt: '친구 그림을 보고 묻는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', slots: ['처음', '가운데', '끝'], cards: ['친구 설명을 끝까지 들어요', '궁금한 것을 하나 물어요', '"알려 줘서 고마워." 하고 말해요'] },
                target: { order: ['친구 설명을 끝까지 들어요', '궁금한 것을 하나 물어요', '"알려 줘서 고마워." 하고 말해요'] }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 그림 전시판 돌며 묻기 (실습)', minutes: 16, tool: 'emotion',
            teacher: '"전시판 앞에서 짝을 바꾸어 가며 세 명의 그림을 보고 물어요. 한 친구에게 3분이에요." 신호에 맞추어 자리를 옮긴다. 친구가 대답을 못 하면 "그건 3학년이 되면 알아보자!"라고 말해 주게 한다.',
            task: '전시판의 친구 그림 세 개를 보고 물어보고, 들을 때의 마음과 할 일을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '친구 세 명의 그림 앞에서 설명을 듣고 하나씩 물었으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '내가 물었는데 친구가 "그건 아직 몰라"라고 해요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '서아에게 실험으로 무엇을 볼지 물었더니 "그건 아직 몰라"라고 해요.', choices: [
                { id: 'tease', text: '"그것도 몰라?" 하고 웃어요', result: '서아가 부끄럽고 속상해요.', mood: '속상함', why: '앞으로 배울 것은 지금 몰라도 괜찮아요.' },
                { id: 'later', text: '"3학년이 되면 같이 알아보자!" 하고 말해요', result: '서아가 웃으며 고개를 끄덕여요.', mood: '기쁨' },
                { id: 'leave', text: '말없이 다른 그림으로 가요', result: '서아가 머쓱해요.', mood: '걱정', why: '물어본 친구에게 한마디 해 주면 좋아요.' }] }, target: { choice: 'later' }, difficulty: 0.1 },
              { prompt: '친구 그림에 대한 이야기에 어울리는 마음을 이어 보세요.', toolOptions: { cards: ['기쁨', '고마움', '궁금함'], slots: [{ id: 's1', label: '친구가 내 그림을 보고 물어봐 줬어요' }, { id: 's2', label: '친구가 내 물음에 차근차근 대답해 줬어요' }, { id: 's3', label: '친구 그림 속 실험이 무엇인지 알고 싶어요' }] },
                target: { match: { s1: ['기쁨', '고마움'], s2: ['고마움', '기쁨'], s3: '궁금함' } }, difficulty: 0.15 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 들은 친구의 배움 가운데 나도 해 보고 싶어진 것이 있나요?" 두세 명이 말하게 한다. 친구의 물음이 내 배움을 더 자세히 생각하게 한다는 것을 짚는다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', basket: '배움을 묻는 말', cards: ['우리 고장 지도에서 무엇을 찾고 싶어?', '지도를 보면 무엇을 알 수 있어?', '그림이 크네.'] }, prompt: '준호는 지도를 보는 모습을 그렸어요. 배움을 묻는 말만 골라 보세요.', target: { pick: ['우리 고장 지도에서 무엇을 찾고 싶어?', '지도를 보면 무엇을 알 수 있어?'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '친구 그림을 보고 물을 때 먼저 할 일은 무엇일까요?', options: ['친구 설명을 끝까지 들어요', '내 그림 이야기를 해요'], answer: 0, difficulty: 0.1, explain: '설명을 끝까지 들어야 궁금한 것을 알맞게 물을 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '친구의 배움 그림',
      items: [
        { type: 'table', prompt: '친구 그림을 보고 물은 것과 들은 답을 쓰세요.', columns: ['친구가 해 보고 싶은 일', '내가 물은 것', '들은 답'], rows: 3 },
        { type: 'choice', prompt: '배움을 묻는 말에 ○ 하세요.', options: ['왜 그걸 해 보고 싶어?', '색이 예뻐.'], answer: '왜 그걸 해 보고 싶어?' },
        { type: 'choice', prompt: '친구가 "아직 몰라"라고 할 때 할 말에 ○ 하세요.', options: ['"같이 알아보자!"', '"그것도 몰라?"'], answer: '"같이 알아보자!"' },
        { type: 'short', prompt: '친구 그림을 보고 나도 해 보고 싶어진 것을 쓰세요.' },
      ],
      easy: {
        note: '끝까지 듣고 → 하나 묻고 → 고맙다고!',
        items: [
          { type: 'choice', prompt: '배움을 묻는 말에 ○ 하세요.', options: ['무엇을 배우고 싶어?', '그림이 크네.'], answer: '무엇을 배우고 싶어?' },
          { type: 'short', prompt: '친구 한 명이 해 보고 싶은 일을 쓰세요.' },
          { type: 'draw', prompt: '친구의 그림 가운데 기억에 남는 것을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 전시판에서는 짝 한 명과 함께 다니며 물어요.',
      base: '모두 놓은 뒤 확인을 눌러요. 친구 세 명에게 하나씩 물어요.',
      challenge: '물은 뒤 들은 답을 표에 적고, 한 번 더 이어서 물어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 그림 솜씨만 말한다 → 그림이 무엇을 하는 모습인지 먼저 묻게 한다. ② 친구가 대답을 못 하면 놀린다 → 앞으로 배울 것은 지금 몰라도 된다는 것을 짚는다. ③ 내 그림 이야기만 한다 → 듣는 차례 카드를 전시판 옆에 붙여 둔다. 전시판 돌기는 신호(종소리)에 맞추어 3분마다 옮기면 16분에 세 번을 돈다.',
  }));

  lessons.push(L(24, {
    title: '2학년이 될 나에게 배움 편지 쓰기',
    objective: '1학년에 배운 것과 2학년에 배우고 싶은 것, 나의 다짐을 차례대로 담아 2학년이 될 나에게 편지를 쓸 수 있다.',
    illustration: ART('a paper envelope decorated with stars and a letter that reads dear second grade me, a time capsule box beside it under a tree', '나에게 쓰는 편지', [
      { motif: 'tree', x: 380, y: 214 }, { motif: 'star', x: 120, y: 90, s: 0.6 }, { motif: 'flower', x: 240, y: 228, color: 'rose' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"내년 3월, 2학년이 된 내가 이 편지를 열어 본다면 어떨까요?" 편지 상자를 보여 주고 2학년 첫 주에 돌려준다고 약속한다. 13~23차시에 만든 털실 종이·배움 나무·3학년의 나 그림을 다시 둘러보게 한다. 시연 단추로 편지 차례가 놓이는 모습을 보여 준다.',
        student: '2학년이 된 나에게 가장 하고 싶은 말을 하나 떠올려 봐요.',
        demo: { tool: 'story', options: { mode: 'order', slots: ['처음', '가운데', '끝'], cards: ['2학년이 된 나에게', '1학년에 그림일기를 배웠어', '1학년 ○○○가'], shuffle: false }, sequence: [{ order: ['2학년이 된 나에게', '1학년에 그림일기를 배웠어', '1학년 ○○○가'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 편지 차례와 다짐 고르기', minutes: 10, tool: 'story',
            teacher: '"편지는 받는 사람 → 하고 싶은 말 → 쓴 사람 차례로 써요. 하고 싶은 말에는 배운 것, 배우고 싶은 것, 다짐을 넣어요." 다짐은 \'열심히 할게\'보다 \'날마다 시계를 보고 혼자 준비할게\'처럼 할 일이 보이게 쓰도록 견주어 보여 준다.',
            task: '편지 문장을 차례대로 놓고, 할 일이 보이는 다짐을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '편지 문장을 차례대로 놓아 보세요.', toolOptions: { mode: 'order', slots: ['처음', '둘째', '셋째', '넷째', '끝'], cards: ['2학년이 된 나에게', '1학년에 덧셈과 뺄셈을 배웠어', '2학년에는 곱셈구구를 배우고 싶어', '날마다 수 세기 놀이를 할게', '1학년 ○○○가'] },
                target: { order: ['2학년이 된 나에게', '1학년에 덧셈과 뺄셈을 배웠어', '2학년에는 곱셈구구를 배우고 싶어', '날마다 수 세기 놀이를 할게', '1학년 ○○○가'] }, difficulty: 0.2 },
              { prompt: '할 일이 보이는 다짐만 골라 보세요.', toolOptions: { mode: 'pick', basket: '할 일이 보이는 다짐', cards: ['날마다 그림책 한 권을 소리 내어 읽을게', '아침에 시계를 보고 혼자 준비할게', '그냥 열심히 할게', '잘할게'] },
                target: { pick: ['날마다 그림책 한 권을 소리 내어 읽을게', '아침에 시계를 보고 혼자 준비할게'] }, difficulty: 0.2,
                hints: ['다짐을 읽고 내가 무엇을, 언제 할지 보이는지 살펴봐요.', '\'열심히\', \'잘\'만 있으면 무엇을 할지 알 수 없어요.', '\'날마다 ~할게\', \'아침에 ~할게\'처럼 할 일과 때가 있는 카드를 골라요.'] },
              { prompt: '빈칸에 알맞은 말을 넣어 편지의 가운데를 완성해 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'b1', label: '1학년에 시계 보기를 ___.' }, { id: 'b2', label: '2학년에는 몇 시 몇 분 읽기를 ___.' }], cards: ['배웠어', '배우고 싶어'] },
                target: { fill: { b1: '배웠어', b2: '배우고 싶어' } }, difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 편지 쓰고 봉투 꾸미기 (실습)', minutes: 16, tool: 'collage',
            teacher: '"편지지에 차례대로 써요. 쓰기 어려운 낱말은 칠판 낱말 모음에서 찾아요." 10분 동안 편지를 쓰고, 남은 시간에 봉투를 꾸민다. 편지와 봉투는 편지 상자에 넣는다.',
            task: '편지지에 2학년이 될 나에게 편지를 쓰고, 봉투를 조각으로 꾸며요.',
            levels: COL_LV(['star', 'heart', 'circle', 'square'], ['노랑', '분홍', '파랑', '빨강']),
            items: [
              { prompt: '편지지에 받는 사람, 배운 것, 배우고 싶은 것, 다짐, 쓴 사람을 차례대로 썼으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '봉투 판에 노랑 별을 세 개 이상, 분홍 하트를 하나 이상 붙여 꾸며 보세요.', state: { pieces: [{ shape: 'square', color: '하양', size: 'l', x: 280, y: 200, r: 0 }] },
                target: { has: [{ shape: 'star', color: '노랑', min: 3 }, { shape: 'heart', color: '분홍', min: 1 }] }, difficulty: 0.1 },
              { prompt: '나만의 봉투를 꾸미고, 해낸 것을 점검 목록에 표시해요.', state: { pieces: [{ shape: 'square', color: '하양', size: 'l', x: 280, y: 200, r: 0 }] },
                target: { selfCheck: ['편지를 차례대로 다 썼어요', '봉투에 조각을 네 개 넘게 붙였어요', '편지를 편지 상자에 넣었어요'], minPieces: 5 }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"편지에 쓴 다짐을 짝에게 한 문장으로 말해 봐요." 13~24차시에 배운 것과 배울 것을 이어 생각했다는 흐름을 칠판에 정리한다. 편지 상자는 봉하여 교실 높은 곳에 둔다. 다음 시간부터는 몸으로 마음을 나타내는 공부를 한다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { mode: 'order', slots: ['처음', '가운데', '끝'], cards: ['2학년이 된 나에게', '1학년에 받아쓰기를 배웠어', '1학년 ○○○가'] }, prompt: '편지 문장을 차례대로 놓아 보세요.', target: { order: ['2학년이 된 나에게', '1학년에 받아쓰기를 배웠어', '1학년 ○○○가'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '할 일이 잘 보이는 다짐은 무엇일까요?', options: ['열심히 할게', '날마다 일기를 한 줄씩 쓸게'], answer: 1, difficulty: 0.15, explain: '무엇을 언제 할지 보여야 다짐을 지킬 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '2학년이 될 나에게',
      items: [
        { type: 'blank', prompt: '편지의 처음을 쓰세요.', text: '___이 된 나에게', answer: '2학년' },
        { type: 'table', prompt: '편지에 쓸 것을 먼저 정리하세요.', columns: ['배운 것', '배우고 싶은 것', '다짐'], rows: 1 },
        { type: 'short', prompt: '2학년이 될 나에게 편지를 쓰세요.' },
        { type: 'check', prompt: '편지에 넣은 것에 ✓ 하세요.', options: ['받는 사람', '배운 것', '배우고 싶은 것', '다짐', '쓴 사람'] },
      ],
      easy: {
        note: '받는 사람 → 하고 싶은 말 → 쓴 사람',
        items: [
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '1학년에 ___을 배웠어.' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '2학년에는 ___을 배우고 싶어.' },
          { type: 'draw', prompt: '2학년이 된 내 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 초록 테두리가 생겨요. 편지는 빈칸 편지지에 낱말만 채워 써요.',
      base: '모두 놓은 뒤 확인을 눌러요. 편지를 다섯 부분으로 차례대로 써요.',
      challenge: '다짐을 두 가지 쓰고, 그 다짐을 지키는 때를 함께 적어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 다짐을 "열심히 할게"로만 쓴다 → 무엇을, 언제 할지 묻는다. ② 받는 사람과 쓴 사람을 바꾸어 쓴다 → "편지를 받는 사람은 누구예요? 2학년이 된 나예요." ③ 쓰기에 시간이 오래 걸린다 → 활동 1의 문장 카드를 편지지에 옮겨 쓰게 한다. 편지 상자는 2학년 담임 선생님께 넘겨 3월 첫 주에 돌려주도록 미리 부탁해 둔다.',
  }));

  // ───────────────────────── 25~28차시: 마음과 몸, 높이와 빠르기 살펴보기 ─────────────────────────

  var MOVE_SAFETY = ['팔을 양옆으로 벌려 둘레에 부딪칠 것이 없는지 먼저 살펴요.', '실내화를 신고 미끄럽지 않은 바닥에서 움직여요.', '선생님 신호(손뼉 두 번)에 바로 멈춰요.'];

  lessons.push(L(25, {
    title: '기쁠 때와 슬플 때 몸이 어떻게 다른지 알아보기',
    objective: '기쁠 때와 슬플 때 몸의 모습이 어떻게 다른지 말하고, 몸을 높게·낮게, 빠르게·느리게 바꾸어 나타낼 수 있다는 것을 안다.',
    illustration: ART('two paper children, one jumping high with arms up and a sunny face and one walking slowly with drooping shoulders under a small cloud', '마음이 몸에 보여요', [
      { motif: 'sun', x: 120, y: 90, s: 0.6 }, { motif: 'cloud', x: 360, y: 90, s: 0.7 }, { motif: 'flower', x: 240, y: 228 }]),
    safety: MOVE_SAFETY,
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"선생님 몸을 보고 지금 마음을 맞혀 보세요." 어깨를 펴고 펄쩍 뛰었다가, 고개를 숙이고 천천히 걷는다. "말하지 않았는데 어떻게 알았어요?" 마음은 몸으로도 나타난다는 것을 짚는다. 시연 단추로 몸 카드가 기쁨·슬픔 칸에 놓이는 모습을 보여 준다.',
        student: '자리에서 일어나 기쁠 때 내 몸을 3초 동안 해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '마음과 몸', slots: ['기쁠 때 몸', '슬플 때 몸'], cards: ['어깨를 펴고 펄쩍 뛰어요', '고개를 숙이고 천천히 걸어요'], shuffle: false }, sequence: [{ sort: { '기쁠 때 몸': ['어깨를 펴고 펄쩍 뛰어요'], '슬플 때 몸': ['고개를 숙이고 천천히 걸어요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 마음에 따라 몸 나타내기 (몸 활동)', minutes: 13, tool: 'mindmap',
            teacher: '"짝과 마주 서서, 한 사람이 마음 카드를 몰래 보고 몸으로 나타내면 짝이 맞혀요." 2분씩 바꾼다. 이어 카드 나누기를 한다. "마음은 몸으로 보일 수 없어요"라는 학생에게 방금 짝이 맞힌 일을 떠올리게 한다.',
            task: '짝과 마음 맞히기 몸 놀이를 하고, 몸 모습 카드를 기쁠 때와 슬플 때로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '짝과 번갈아 마음을 몸으로 나타내고 맞히기를 했으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '몸 모습 카드를 기쁠 때와 슬플 때로 나누어 보세요.', toolOptions: { topic: '마음과 몸', slots: ['기쁠 때 몸', '슬플 때 몸'], cards: ['팔을 높이 흔들어요', '어깨가 축 처져요', '통통 가볍게 뛰어요', '바닥에 웅크려 앉아요'] },
                target: { sort: { '기쁠 때 몸': ['팔을 높이 흔들어요', '통통 가볍게 뛰어요'], '슬플 때 몸': ['어깨가 축 처져요', '바닥에 웅크려 앉아요'] } }, difficulty: 0.1,
                levels: { challenge: { prompt: '몸 모습 카드 여섯 장을 나누어 보세요.', toolOptions: { cards: ['팔을 높이 흔들어요', '어깨가 축 처져요', '통통 가볍게 뛰어요', '바닥에 웅크려 앉아요', '빙글빙글 빨리 돌아요', '발을 끌며 느릿느릿 걸어요'] },
                  target: { sort: { '기쁠 때 몸': ['팔을 높이 흔들어요', '통통 가볍게 뛰어요', '빙글빙글 빨리 돌아요'], '슬플 때 몸': ['어깨가 축 처져요', '바닥에 웅크려 앉아요', '발을 끌며 느릿느릿 걸어요'] } } } } },
              { prompt: '마음과 몸에 대한 바른 생각만 골라 보세요.', toolOptions: { mode: 'pick', basket: '바른 생각', cards: ['마음은 몸으로도 나타나요', '몸을 보고 친구 마음을 짐작할 수 있어요', '마음은 몸으로 나타낼 수 없어요'] },
                target: { pick: ['마음은 몸으로도 나타나요', '몸을 보고 친구 마음을 짐작할 수 있어요'] }, difficulty: 0.1,
                predict: { q: '말하지 않고 몸으로만 마음을 알려 줄 수 있을까요?', options: ['없어요', '있어요'], answer: 1 },
                conclude: '말하지 않아도 몸의 높이와 빠르기로 마음을 보여 줄 수 있어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 높이와 빠르기 찾기', minutes: 13, tool: 'mindmap',
            teacher: '"까치발로 서면 몸의 무엇이 바뀌나요? 종종걸음은요?" 높이는 몸이 위·아래로 바뀌는 것, 빠르기는 움직임이 빠르게·느리게 바뀌는 것이라고 두 손으로 보여 준다. 카드마다 직접 해 보며 무엇이 바뀌었는지 말하게 한다.',
            task: '움직임 카드를 읽고 몸을 따라 해 본 뒤, 바뀐 것이 높이인지 빠르기인지 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '움직임 카드를 무엇을 바꾸었는지에 따라 나누어 보세요.', toolOptions: { topic: '무엇을 바꿨을까?', slots: ['높이를 바꿔요', '빠르기를 바꿔요'], cards: ['까치발로 높이 서요', '쪼그려 낮게 앉아요', '종종걸음으로 빠르게 걸어요', '느릿느릿 천천히 걸어요'] },
                target: { sort: { '높이를 바꿔요': ['까치발로 높이 서요', '쪼그려 낮게 앉아요'], '빠르기를 바꿔요': ['종종걸음으로 빠르게 걸어요', '느릿느릿 천천히 걸어요'] } }, difficulty: 0.15,
                hints: ['카드를 몸으로 따라 해 보고, 몸이 위아래로 바뀌는지 움직임이 빨라지거나 느려지는지 살펴봐요.', '\'높이, 낮게\'가 든 카드와 \'빠르게, 천천히\'가 든 카드를 다시 견주어 봐요.', '까치발·쪼그려는 높이, 종종걸음·느릿느릿은 빠르기예요.'] },
              { prompt: '높이를 바꾼 짝을 이어 보세요.', toolOptions: { mode: 'match', topic: '높게와 낮게', slots: [{ id: 's1', label: '팔을 머리 위로 쭉 뻗어요' }, { id: 's2', label: '무릎을 굽혀 바닥에 손을 대요' }], cards: ['높게', '낮게'] },
                target: { match: { s1: '높게', s2: '낮게' } }, difficulty: 0.05,
                levels: { challenge: { prompt: '높이와 빠르기를 바꾼 짝을 이어 보세요.', toolOptions: { slots: [{ id: 's1', label: '팔을 머리 위로 쭉 뻗어요' }, { id: 's2', label: '무릎을 굽혀 바닥에 손을 대요' }, { id: 's3', label: '제자리에서 발을 동동 굴러요' }, { id: 's4', label: '팔을 아주 천천히 돌려요' }], cards: ['높게', '낮게', '빠르게', '느리게'] },
                  target: { match: { s1: '높게', s2: '낮게', s3: '빠르게', s4: '느리게' } } } } },
              { prompt: '슬픈 마음을 나타낼 때 알맞은 높이와 빠르기를 골라 보세요.', toolOptions: { mode: 'pick', basket: '슬플 때', cards: ['낮게', '느리게', '높게', '빠르게'] },
                target: { pick: ['낮게', '느리게'] }, difficulty: 0.15,
                hints: ['슬플 때 어깨와 고개가 어떻게 되는지, 걸음이 어떤지 떠올려 봐요.', '슬플 때 몸이 위로 올라가나요, 아래로 처지나요?', '슬플 때는 몸이 아래로 처지고 걸음도 느려져요.'] },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"다음 시간에 높이와 빠르기 가운데 무엇을 먼저 바꾸어 보고 싶나요?" 손을 들어 고르게 한다. 정리 운동으로 크게 숨 쉬며 팔을 천천히 내린다. 출구 2번을 틀린 학생은 까치발과 종종걸음을 다시 해 보게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '마음과 몸', slots: ['기쁠 때 몸', '슬플 때 몸'], cards: ['가슴을 활짝 펴요', '고개를 푹 숙여요'] }, prompt: '몸 모습 카드를 기쁠 때와 슬플 때로 나누어 보세요.', target: { sort: { '기쁠 때 몸': ['가슴을 활짝 펴요'], '슬플 때 몸': ['고개를 푹 숙여요'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '\'까치발로 서기\'는 무엇을 바꾼 움직임일까요?', options: ['높이', '빠르기'], answer: 0, difficulty: 0.15, explain: '까치발로 서면 몸이 위로 높아져요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '마음과 몸',
      items: [
        { type: 'figure', wide: true, prompt: '몸 모습을 기쁠 때와 슬플 때로 나누어 쓰세요.', tool: 'mindmap', figures: [{ options: { topic: '마음과 몸', slots: ['기쁠 때 몸', '슬플 때 몸'], cards: ['팔을 높이 흔들어요', '어깨가 축 처져요'] }, caption: '' }], answer: '기쁠 때-팔을 높이 흔들어요, 슬플 때-어깨가 축 처져요' },
        { type: 'table', prompt: '움직임마다 바꾼 것을 쓰세요.', columns: ['움직임', '높이? 빠르기?'], cells: [['까치발로 서기', ''], ['종종걸음', ''], ['쪼그려 앉기', '']] },
        { type: 'choice', prompt: '바른 생각에 ○ 하세요.', options: ['마음은 몸으로도 나타나요', '마음은 몸으로 나타낼 수 없어요'], answer: '마음은 몸으로도 나타나요' },
        { type: 'draw', prompt: '기쁠 때 내 몸 모습을 그려 보세요.' },
      ],
      easy: {
        note: '높이는 위·아래, 빠르기는 빨리·천천히!',
        items: [
          { type: 'choice', prompt: '기쁠 때 몸에 ○ 하세요.', options: ['펄쩍 뛰어요', '웅크려요'], answer: '펄쩍 뛰어요' },
          { type: 'choice', prompt: '높이를 바꾼 움직임에 ○ 하세요.', options: ['까치발로 서요', '빨리 걸어요'], answer: '까치발로 서요' },
          { type: 'draw', prompt: '슬플 때 내 몸 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 몸 놀이는 선생님 몸을 보고 따라 해요.',
      base: '모두 놓은 뒤 확인을 눌러요. 짝과 마음 맞히기를 번갈아 해요.',
      challenge: '몸 카드가 여섯 장으로 늘고, 높이와 빠르기를 함께 바꾼 짝 네 개를 이어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 마음은 몸으로 나타낼 수 없다고 여긴다 → 짝이 몸만 보고 마음을 맞힌 경험을 다시 짚는다. ② 높이와 빠르기를 섞어 말한다 → 두 손을 위아래로(높이), 앞뒤로 빠르게·느리게(빠르기) 흔들어 구별해 준다. ③ 신이 나 뛰다가 부딪친다 → 팔 벌려 공간 확인과 손뼉 두 번 멈춤 신호를 먼저 연습한다. 교실 책상을 벽 쪽으로 밀어 움직일 자리를 만든다.',
  }));

  lessons.push(L(26, {
    title: '동물과 자연을 흉내 내며 높이 바꾸기',
    objective: '동물과 자연의 모습을 흉내 내며 몸을 높게·낮게 바꾸고, 높이가 바뀌는 차례를 정해 나타낼 수 있다.',
    illustration: ART('paper children imitating a bird flying high with arms spread, a snake slithering low on the floor and a tree growing from a crouch to tall', '높게, 낮게', [
      { motif: 'bird', x: 360, y: 70 }, { motif: 'tree', x: 100, y: 200 }, { motif: 'hills', y: 220 }]),
    safety: MOVE_SAFETY,
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"새는 하늘 높이 날아요. 뱀은 땅에 바짝 붙어 기어요. 우리 몸으로는 어떻게 나타낼까요?" 팔을 넓게 펴 까치발로 서는 모습과 엎드려 기는 모습을 함께 해 본다. 시연 단추로 \'높게, 낮게\'가 되풀이되는 움직임 줄을 보여 준다.',
        student: '자리에서 일어나 새처럼 높게, 뱀처럼 낮게를 한 번씩 해 봐요.',
        demo: { tool: 'pattern', options: { seq: ['높게', '낮게', '높게', '낮게'] }, sequence: [{ fill: [] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 높게 움직이는 것, 낮게 움직이는 것', minutes: 12, tool: 'mindmap',
            teacher: '"기린은 목을 쭉 빼요. 거북은 몸을 낮추고요." 카드를 읽을 때마다 몸으로 해 보고 놓게 한다. 크기(큰 동물·작은 동물)로 나누는 학생에게 "몸이 위에 있나요, 아래에 있나요?"를 묻는다.',
            task: '동물과 자연 카드를 몸으로 흉내 내 보고, 높게 움직이는 것과 낮게 움직이는 것으로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '흉내 낼 카드를 높게와 낮게로 나누어 보세요.', toolOptions: { topic: '흉내 내기', slots: ['높게 움직여요', '낮게 움직여요'], cards: ['하늘을 나는 새', '땅을 기는 뱀', '목을 쭉 뺀 기린', '풀숲의 개구리'] },
                target: { sort: { '높게 움직여요': ['하늘을 나는 새', '목을 쭉 뺀 기린'], '낮게 움직여요': ['땅을 기는 뱀', '풀숲의 개구리'] } }, difficulty: 0.1 },
              { prompt: '자연 카드를 높게와 낮게로 나누어 보세요.', toolOptions: { topic: '흉내 내기', slots: ['높게 움직여요', '낮게 움직여요'], cards: ['하늘 높이 뜬 해', '땅에 떨어진 나뭇잎', '높이 솟은 분수', '바닥을 흐르는 시냇물'] },
                target: { sort: { '높게 움직여요': ['하늘 높이 뜬 해', '높이 솟은 분수'], '낮게 움직여요': ['땅에 떨어진 나뭇잎', '바닥을 흐르는 시냇물'] } }, difficulty: 0.15,
                levels: { challenge: { prompt: '자연 카드 여섯 장을 높게와 낮게로 나누어 보세요.', toolOptions: { cards: ['하늘 높이 뜬 해', '땅에 떨어진 나뭇잎', '높이 솟은 분수', '바닥을 흐르는 시냇물', '높이 걸린 무지개', '땅에 납작 붙은 이끼'] },
                  target: { sort: { '높게 움직여요': ['하늘 높이 뜬 해', '높이 솟은 분수', '높이 걸린 무지개'], '낮게 움직여요': ['땅에 떨어진 나뭇잎', '바닥을 흐르는 시냇물', '땅에 납작 붙은 이끼'] } } } } },
              { prompt: '모둠 친구들과 새와 뱀을 번갈아 흉내 내며 높게, 낮게를 해 보았으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 높이가 바뀌는 움직임 줄', minutes: 14, tool: 'pattern',
            teacher: '"씨앗이 자라 나무가 돼요. 몸은 낮게에서 어떻게 바뀔까요?" 움직임 줄의 빈칸을 채운 뒤 반드시 몸으로 한 칸씩 따라 하게 한다. 한 칸에 손뼉 한 번씩 치며 박을 맞춘다.',
            task: '높게·낮게 움직임 줄에서 빈칸을 채우고, 완성한 줄을 몸으로 따라 해요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '높게와 낮게가 번갈아 나와요. 빈칸에 들어갈 움직임을 채워 보세요.', toolOptions: { seq: ['높게', '낮게', '높게', '낮게', null, null], palette: ['높게', '낮게'] }, target: { fill: ['높게', '낮게'] }, difficulty: 0.1,
                hints: ['움직임 줄을 처음부터 몸으로 따라 해 보며 다음에 올 높이를 찾아요.', '빈칸 바로 앞이 어떤 높이인지 보고, 번갈아 나오는지 살펴봐요.', '높게 다음은 낮게, 낮게 다음은 높게예요.'] },
              { prompt: '씨앗이 자라는 움직임이에요. 낮게 두 번, 높게 두 번이 되풀이돼요. 빈칸을 채워 보세요.', toolOptions: { seq: ['낮게', '낮게', '높게', '높게', '낮게', null, '높게', null], palette: ['높게', '낮게'] }, target: { fill: ['낮게', '높게'] }, difficulty: 0.2,
                hints: ['네 칸을 한 묶음으로 끊어 몸으로 따라 해 봐요.', '두 번째 묶음도 첫 묶음과 같은 차례인지 견주어 봐요.', '낮게, 낮게, 높게, 높게가 한 묶음이에요.'] },
              { prompt: '높게와 낮게를 써서 여덟 칸 움직임 줄을 만들어 보세요. 두 칸 묶음을 되풀이해요.', toolOptions: { mode: 'make', palette: ['높게', '낮게', '가운데'], length: 8 }, target: { rule: 'repeat', period: 2, uses: 2 }, difficulty: 0.2,
                hints: ['두 칸을 한 묶음으로 정하고, 그 묶음을 끝까지 똑같이 되풀이해요.', '묶음 두 칸이 서로 다른 높이인지, 끝까지 같은 차례인지 살펴봐요.', '예: 높게, 가운데를 묶음으로 정해 네 번 되풀이해요.'],
                levels: { challenge: { prompt: '높게, 가운데, 낮게를 모두 써서 여덟 칸이 넘는 움직임 줄을 만들어 보세요. 세 칸 묶음을 되풀이해요.', toolOptions: { length: 9 }, target: { rule: 'repeat', period: 3, uses: 3 } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"내가 만든 움직임 줄을 짝이 따라 해 보게 해요." 짝이 따라 할 때 손뼉으로 박을 맞춰 준다. 다음 시간에는 빠르기를 바꾸어 본다고 예고한다. 정리 운동으로 천천히 숨을 쉬며 몸을 낮게 웅크렸다 편다.',
        exitTicket: [
          { type: 'tool', tool: 'pattern', options: { seq: ['낮게', '높게', '낮게', '높게', null], palette: ['높게', '낮게'] }, prompt: '움직임 줄의 빈칸에 들어갈 높이를 채워 보세요.', target: { fill: ['낮게'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '\'땅을 기는 뱀\'을 흉내 낼 때 알맞은 높이는?', options: ['높게', '낮게'], answer: 1, difficulty: 0.05, explain: '뱀은 땅에 바짝 붙어 기니 몸을 낮게 해요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '높게, 낮게',
      items: [
        { type: 'figure', wide: true, prompt: '빈칸에 들어갈 높이를 쓰세요.', tool: 'pattern', figures: [{ options: { seq: ['높게', '낮게', '높게', '낮게', null, null] }, caption: '' }], answer: '높게, 낮게' },
        { type: 'table', prompt: '흉내 낼 것을 높게와 낮게로 나누어 쓰세요.', columns: ['높게 움직여요', '낮게 움직여요'], rows: 3 },
        { type: 'choice', prompt: '\'목을 쭉 뺀 기린\'은 어떻게 움직일까요?', options: ['높게', '낮게'], answer: '높게' },
        { type: 'draw', prompt: '내가 흉내 낸 동물이나 자연을 그려 보세요.' },
      ],
      easy: {
        note: '높게는 까치발로 쭉, 낮게는 쪼그려 앉아요!',
        items: [
          { type: 'choice', prompt: '높게 움직이는 것에 ○ 하세요.', options: ['하늘을 나는 새', '땅을 기는 뱀'], answer: '하늘을 나는 새' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '높게, 낮게, 높게, ___', answer: '낮게' },
          { type: 'draw', prompt: '높게 뛰는 내 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 움직임 줄은 두 칸 묶음만 해요.',
      base: '빈칸을 채우고 두 칸 묶음 줄을 만들어 몸으로 따라 해요.',
      challenge: '자연 카드가 여섯 장으로 늘고, 높게·가운데·낮게 세 칸 묶음 줄을 만들어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 몸 크기(큰 동물)와 높이를 헷갈린다 → 몸이 위에 있는지 아래에 있는지를 묻는다. ② 움직임 줄을 화면으로만 채우고 몸으로는 안 한다 → 채운 뒤 꼭 한 칸에 손뼉 한 번씩 따라 하게 한다. ③ 낮게 할 때 바닥에 세게 엎드린다 → 무릎부터 천천히 내리게 한다. \'가운데\'는 허리 높이로 정해 둔다.',
  }));

  lessons.push(L(27, {
    title: '토끼와 거북처럼 빠르기 바꾸어 움직이기',
    objective: '빠르게 움직이는 것과 느리게 움직이는 것을 흉내 내며 몸의 빠르기를 바꾸고, 북소리에 맞추어 빠르기를 바꿀 수 있다.',
    illustration: ART('a paper rabbit dashing and a paper turtle crawling slowly on a winding path, children copying them with a small drum beside the path', '빠르게, 느리게', [
      { motif: 'tree', x: 90, y: 214 }, { motif: 'flower', x: 400, y: 228, color: 'buttercup' }, { motif: 'cloud', x: 300, y: 70, s: 0.6 }]),
    safety: MOVE_SAFETY.concat(['빠르게 움직일 때도 제자리에서만 해요. 교실을 뛰어다니지 않아요.']),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"선생님이 북을 \'둥, 둥\' 천천히 치면 거북처럼, \'둥둥둥둥\' 빠르게 치면 토끼처럼 제자리에서 걸어요." 북 소리에 맞추어 빠르기를 바꾸어 본다. 시연 단추로 \'빨리, 천천히\'가 되풀이되는 움직임 줄을 보여 준다.',
        student: '북 소리를 듣고 제자리에서 빠르게, 느리게 걸어 봐요.',
        demo: { tool: 'pattern', options: { seq: ['빨리', '천천히', '빨리', '천천히'] }, sequence: [{ fill: [] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 빠른 것과 느린 것 흉내 내기', minutes: 12, tool: 'mindmap',
            teacher: '"달팽이는 어떻게 움직여요? 벌은요?" 카드마다 제자리에서 흉내 내 보고 놓게 한다. 높이로 나누려는 학생(새는 높게)에게 "오늘은 높이가 아니라 빠르기를 봐요"라고 짚는다.',
            task: '동물과 자연 카드를 흉내 내 보고, 빠르게 움직이는 것과 느리게 움직이는 것으로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '흉내 낼 카드를 빠르게와 느리게로 나누어 보세요.', toolOptions: { topic: '흉내 내기', slots: ['빠르게 움직여요', '느리게 움직여요'], cards: ['깡충깡충 토끼', '엉금엉금 거북', '붕붕 나는 벌', '느릿느릿 달팽이'] },
                target: { sort: { '빠르게 움직여요': ['깡충깡충 토끼', '붕붕 나는 벌'], '느리게 움직여요': ['엉금엉금 거북', '느릿느릿 달팽이'] } }, difficulty: 0.05 },
              { prompt: '바람과 물 카드를 빠르게와 느리게로 나누어 보세요.', toolOptions: { topic: '흉내 내기', slots: ['빠르게 움직여요', '느리게 움직여요'], cards: ['휘몰아치는 태풍', '살랑살랑 봄바람', '콸콸 쏟아지는 폭포', '잔잔한 호수 물결'] },
                target: { sort: { '빠르게 움직여요': ['휘몰아치는 태풍', '콸콸 쏟아지는 폭포'], '느리게 움직여요': ['살랑살랑 봄바람', '잔잔한 호수 물결'] } }, difficulty: 0.15,
                levels: { challenge: { prompt: '카드 여섯 장을 빠르게와 느리게로 나누어 보세요.', toolOptions: { cards: ['휘몰아치는 태풍', '살랑살랑 봄바람', '콸콸 쏟아지는 폭포', '잔잔한 호수 물결', '번쩍 치는 번개', '둥실 떠가는 구름'] },
                  target: { sort: { '빠르게 움직여요': ['휘몰아치는 태풍', '콸콸 쏟아지는 폭포', '번쩍 치는 번개'], '느리게 움직여요': ['살랑살랑 봄바람', '잔잔한 호수 물결', '둥실 떠가는 구름'] } } } } },
              { prompt: '북 소리와 어울리는 움직임을 이어 보세요.', toolOptions: { mode: 'match', topic: '북 소리 따라', slots: [{ id: 's1', label: '둥…… 둥…… (천천히)' }, { id: 's2', label: '둥둥둥둥 (빠르게)' }], cards: ['거북처럼 엉금엉금', '토끼처럼 깡충깡충'] },
                target: { match: { s1: '거북처럼 엉금엉금', s2: '토끼처럼 깡충깡충' } }, difficulty: 0.05 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 빠르기가 바뀌는 움직임 줄 (몸 활동)', minutes: 14, tool: 'pattern',
            teacher: '"한 칸에 손뼉 한 번이에요. \'빨리\' 칸에서는 손뼉 사이에 발을 네 번, \'천천히\' 칸에서는 한 번 굴러요." 줄을 채운 뒤 모둠이 함께 북 소리에 맞추어 따라 한다. 빠른 칸에서 자리를 벗어나는 학생은 제자리 걸음으로 돌아오게 한다.',
            task: '빠르기 움직임 줄의 빈칸을 채우고, 모둠과 북 소리에 맞추어 몸으로 따라 해요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '빨리와 천천히가 번갈아 나와요. 빈칸을 채워 보세요.', toolOptions: { seq: ['빨리', '천천히', '빨리', null, '빨리', null], palette: ['빨리', '천천히'] }, target: { fill: ['천천히', '천천히'] }, difficulty: 0.1,
                hints: ['줄을 처음부터 제자리 걸음으로 따라 하며 다음 빠르기를 찾아요.', '빈칸 앞뒤 칸의 빠르기를 보고 번갈아 나오는지 살펴봐요.', '빨리 다음에는 천천히가 와요.'] },
              { prompt: '토끼 한 번, 거북 두 번이 되풀이돼요. 빈칸을 채워 보세요.', toolOptions: { seq: ['빨리', '천천히', '천천히', '빨리', null, '천천히', null], palette: ['빨리', '천천히'] }, target: { fill: ['천천히', '빨리'] }, difficulty: 0.2,
                hints: ['세 칸을 한 묶음으로 끊어 따라 해 봐요.', '두 번째 묶음이 첫 묶음과 같은 차례인지 견주어 봐요.', '빨리, 천천히, 천천히가 한 묶음이에요.'] },
              { prompt: '모둠과 완성한 움직임 줄을 북 소리에 맞추어 두 번 따라 했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"빠르게 움직일 때와 느리게 움직일 때 숨은 어떻게 달랐나요?" 숨이 찼던 느낌을 말하게 한다. 높이와 빠르기를 함께 바꾸면 어떨지 다음 시간에 해 본다고 예고한다. 정리 운동은 거북처럼 천천히 숨을 쉬며 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '흉내 내기', slots: ['빠르게 움직여요', '느리게 움직여요'], cards: ['쌩쌩 달리는 자동차', '천천히 내리는 눈'] }, prompt: '카드를 빠르게와 느리게로 나누어 보세요.', target: { sort: { '빠르게 움직여요': ['쌩쌩 달리는 자동차'], '느리게 움직여요': ['천천히 내리는 눈'] } }, difficulty: 0.05 },
          { type: 'choice', prompt: '북을 \'둥…… 둥……\' 천천히 칠 때 알맞은 움직임은?', options: ['깡충깡충 빠르게', '엉금엉금 느리게'], answer: 1, difficulty: 0.1, explain: '천천히 울리는 소리에는 느리게 움직여요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '빠르게, 느리게',
      items: [
        { type: 'figure', wide: true, prompt: '빈칸에 들어갈 빠르기를 쓰세요.', tool: 'pattern', figures: [{ options: { seq: ['빨리', '천천히', '빨리', null, '빨리', null] }, caption: '' }], answer: '천천히, 천천히' },
        { type: 'table', prompt: '흉내 낼 것을 빠르게와 느리게로 나누어 쓰세요.', columns: ['빠르게', '느리게'], rows: 3 },
        { type: 'choice', prompt: '\'휘몰아치는 태풍\'은 어떻게 흉내 낼까요?', options: ['빠르게', '느리게'], answer: '빠르게' },
        { type: 'draw', prompt: '빠르게 움직이는 것과 느리게 움직이는 것을 하나씩 그려 보세요.' },
      ],
      easy: {
        note: '토끼는 빠르게, 거북은 느리게!',
        items: [
          { type: 'choice', prompt: '느리게 움직이는 것에 ○ 하세요.', options: ['달팽이', '벌'], answer: '달팽이' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '빨리, 천천히, 빨리, ___', answer: '천천히' },
          { type: 'draw', prompt: '토끼를 흉내 내는 내 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 움직임 줄은 두 칸 묶음만 해요.',
      base: '모두 채운 뒤 확인을 눌러요. 북 소리에 맞추어 따라 해요.',
      challenge: '카드가 여섯 장으로 늘고, 세 칸 묶음 줄을 따라 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 빠르기를 높이와 섞는다(새는 빠르다/높다) → 오늘은 빠르기만 본다고 짚는다. ② 빠르게 할 때 교실을 뛰어다닌다 → 제자리 걸음으로 약속하고 바닥에 테이프로 자리를 표시한다. ③ 북 소리를 듣지 않고 친구만 따라 한다 → 눈을 감고 북 소리만 듣고 해 보게 한다. 북이 없으면 손뼉이나 책상 두드리기로 대신한다.',
  }));

  lessons.push(L(28, {
    title: '표현할 것을 골라 높이와 빠르기 정하기',
    objective: '나타내고 싶은 것을 고르고, 그것에 알맞은 높이와 빠르기를 정해 까닭과 함께 몸으로 나타낼 수 있다.',
    illustration: ART('paper fireworks bursting high, a melting snowman sinking low, a cloud floating slowly and ants hurrying on the ground, children choosing movement cards', '무엇을 어떻게 나타낼까?', [
      { motif: 'star', x: 380, y: 80, s: 0.7 }, { motif: 'snow', x: 110, y: 120 }, { motif: 'cloud', x: 250, y: 70, s: 0.6 }]),
    safety: MOVE_SAFETY,
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"불꽃놀이를 몸으로 나타내면 높을까요, 낮을까요? 빠를까요, 느릴까요?" 두 가지를 함께 정해야 한다는 것을 보여 준다. 시연 단추로 \'불꽃이 펑 터져요\'가 \'높게·빠르게\'와 이어지는 모습을 보여 준다. 정한 까닭을 말해야 한다고 알린다.',
        student: '불꽃놀이를 몸으로 3초 동안 나타내 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '높이와 빠르기', slots: [{ id: 's1', label: '불꽃이 펑 터져요' }], cards: ['높게·빠르게', '낮게·느리게'], shuffle: false }, sequence: [{ match: { s1: '높게·빠르게' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 높이와 빠르기 함께 정하기', minutes: 12, tool: 'mindmap',
            teacher: '"눈사람이 녹으면 몸은 어떻게 될까요? 빨리 녹을까요, 천천히 녹을까요?" 높이와 빠르기를 하나씩 따로 묻는다. 정한 뒤 반드시 몸으로 해 보고 까닭을 말하게 한다.',
            task: '나타낼 것마다 알맞은 높이와 빠르기를 함께 골라 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '나타낼 것과 알맞은 높이·빠르기를 이어 보세요.', toolOptions: { mode: 'match', topic: '높이와 빠르기', slots: [{ id: 's1', label: '불꽃이 펑펑 터져요' }, { id: 's2', label: '눈사람이 천천히 녹아요' }], cards: ['높게·빠르게', '낮게·느리게'] },
                target: { match: { s1: '높게·빠르게', s2: '낮게·느리게' } }, difficulty: 0.1 },
              { prompt: '네 가지를 알맞은 높이·빠르기와 이어 보세요.', toolOptions: { mode: 'match', topic: '높이와 빠르기', slots: [{ id: 's1', label: '불꽃이 펑펑 터져요' }, { id: 's2', label: '눈사람이 천천히 녹아요' }, { id: 's3', label: '구름이 하늘 높이 둥실 떠가요' }, { id: 's4', label: '개미가 땅에서 바쁘게 기어가요' }], cards: ['높게·빠르게', '낮게·느리게', '높게·느리게', '낮게·빠르게'] },
                target: { match: { s1: '높게·빠르게', s2: '낮게·느리게', s3: '높게·느리게', s4: '낮게·빠르게' } }, difficulty: 0.3,
                hints: ['한 장면씩 높이를 먼저 정하고, 그다음 빠르기를 정해요.', '\'하늘 높이\', \'땅에서\'는 높이를, \'둥실\', \'바쁘게\'는 빠르기를 알려 줘요.', '구름은 높이 떠서 천천히, 개미는 땅에서 바쁘게 움직여요.'] },
              { prompt: '높이·빠르기를 정한 까닭을 바르게 말한 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '알맞은 까닭', cards: ['녹는 눈사람은 키가 점점 작아지니 낮게 했어요', '불꽃은 순식간에 터지니 빠르게 했어요', '그냥 좋아서 높게 했어요', '친구가 해서 따라 했어요'] },
                target: { pick: ['녹는 눈사람은 키가 점점 작아지니 낮게 했어요', '불꽃은 순식간에 터지니 빠르게 했어요'] }, difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 눈사람이 녹아요 (몸 활동)', minutes: 14, tool: 'story',
            teacher: '"햇볕이 나니 눈사람이 조금씩 녹아요." 이야기 차례를 놓은 뒤, 교사가 이야기를 천천히 읽는 동안 모두 눈사람이 되어 높게 서 있다가 점점 낮게 녹아내린다. 한 번에 털썩 주저앉는 학생에게 "조금씩, 천천히"를 다시 말한다.',
            task: '눈사람이 녹는 이야기의 차례를 놓고, 이야기에 맞추어 몸의 높이와 빠르기를 바꾸어 나타내요.',
            levels: CARD_LV,
            items: [
              { prompt: '눈사람이 녹는 이야기를 차례대로 놓아 보세요.', toolOptions: { mode: 'order', slots: ['처음', '가운데', '끝'], cards: ['눈사람이 높이 서 있어요', '햇볕에 머리가 조금씩 녹아요', '바닥에 납작한 물웅덩이가 돼요'] },
                target: { order: ['눈사람이 높이 서 있어요', '햇볕에 머리가 조금씩 녹아요', '바닥에 납작한 물웅덩이가 돼요'] }, difficulty: 0.1 },
              { prompt: '이야기 차례마다 알맞은 몸의 높이를 이어 보세요.', toolOptions: { mode: 'match', topic: '몸의 높이', slots: [{ id: 's1', label: '눈사람이 높이 서 있어요' }, { id: 's2', label: '머리가 조금씩 녹아요' }, { id: 's3', label: '납작한 물웅덩이가 돼요' }], cards: ['까치발로 높게', '무릎을 굽혀 가운데로', '바닥에 낮게 누워요'] },
                target: { match: { s1: '까치발로 높게', s2: '무릎을 굽혀 가운데로', s3: '바닥에 낮게 누워요' } }, difficulty: 0.15 },
              { prompt: '선생님 이야기에 맞추어 눈사람이 녹는 모습을 몸으로 나타냈으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"다음 시간에 나타내고 싶은 것을 하나 정해 보세요. 높이와 빠르기는 어떻게 할 건가요?" 두세 명이 까닭과 함께 말하게 한다. 정리 운동으로 눈사람처럼 천천히 숨을 쉬며 몸을 편다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '높이와 빠르기', slots: [{ id: 'e1', label: '공이 하늘로 휙 튀어 올라요' }, { id: 'e2', label: '나뭇잎이 땅으로 천천히 내려앉아요' }], cards: ['높게·빠르게', '낮게·느리게'] }, prompt: '나타낼 것과 알맞은 높이·빠르기를 이어 보세요.', target: { match: { e1: '높게·빠르게', e2: '낮게·느리게' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '높이와 빠르기를 정할 때 함께 말하면 좋은 것은?', options: ['그렇게 정한 까닭', '좋아하는 색깔'], answer: 0, difficulty: 0.1, explain: '까닭을 말하면 친구도 내 움직임을 더 잘 알아봐요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '무엇을 어떻게 나타낼까',
      items: [
        { type: 'figure', wide: true, prompt: '나타낼 것과 높이·빠르기를 선으로 이으세요.', tool: 'mindmap', figures: [{ options: { mode: 'match', topic: '높이와 빠르기', slots: [{ id: 's1', label: '불꽃이 펑펑 터져요' }, { id: 's2', label: '눈사람이 녹아요' }], cards: ['낮게·느리게', '높게·빠르게'] }, caption: '' }], answer: '불꽃-높게·빠르게, 눈사람-낮게·느리게' },
        { type: 'table', prompt: '내가 나타낼 것을 정해 쓰세요.', columns: ['나타낼 것', '높이', '빠르기', '까닭'], rows: 1 },
        { type: 'choice', prompt: '\'개미가 바쁘게 기어가요\'에 알맞은 것에 ○ 하세요.', options: ['높게·느리게', '낮게·빠르게'], answer: '낮게·빠르게' },
        { type: 'draw', prompt: '내가 나타낼 것을 그려 보세요.' },
      ],
      easy: {
        note: '높이 먼저, 빠르기 다음!',
        items: [
          { type: 'choice', prompt: '불꽃놀이에 알맞은 높이에 ○ 하세요.', options: ['높게', '낮게'], answer: '높게' },
          { type: 'choice', prompt: '녹는 눈사람에 알맞은 빠르기에 ○ 하세요.', options: ['느리게', '빠르게'], answer: '느리게' },
          { type: 'draw', prompt: '녹는 눈사람을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 잇기는 두 장면만 해요.',
      base: '모두 이은 뒤 확인을 눌러요. 정한 까닭을 짝에게 말해요.',
      challenge: '네 장면을 높이·빠르기 네 가지와 이어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 높이와 빠르기를 한꺼번에 정하다 헷갈린다 → 높이 먼저, 빠르기 다음으로 하나씩 묻는다. ② 까닭 없이 "그냥요"라고 한다 → 장면 글에서 실마리 낱말(하늘 높이, 바쁘게)을 찾게 한다. ③ 녹는 눈사람을 한 번에 털썩 주저앉아 나타낸다 → 이야기를 천천히 읽으며 세 단계로 나누어 내려가게 한다. 바닥에 누울 때는 매트나 깨끗한 바닥을 준비한다.',
  }));

  // ───────────────────────── 29~32차시: 높이와 빠르기를 바꾸어 움직임 만들기 ─────────────────────────

  lessons.push(L(29, {
    title: '오늘 내 마음을 높이와 빠르기로 나타내기',
    objective: '오늘 내 마음을 하나 고르고, 그 마음에 맞게 높이와 빠르기를 바꾼 움직임으로 나타낼 수 있다.',
    illustration: ART('paper children each showing a feeling with their body, one jumping high and fast with joy, one sitting low and still, a feelings board on the wall', '오늘 내 마음은?', [
      { motif: 'sun', x: 90, y: 80, s: 0.6 }, { motif: 'star', x: 390, y: 90 }, { motif: 'flower', x: 240, y: 230 }]),
    safety: MOVE_SAFETY,
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"오늘 아침 학교 오는 길에 어떤 마음이었어요?" 두세 명이 말하게 한다. "그 마음을 말 대신 몸으로 보여 주면 친구가 알아볼까요?" 지난 시간에 배운 높이와 빠르기를 떠올리게 한다. 시연 단추로 \'신나요\'가 \'높게·빠르게\'와 이어지는 모습을 보여 준다.',
        student: '오늘 아침 내 마음을 한 낱말로 짝에게 말해요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '마음과 움직임', slots: [{ id: 's1', label: '신나요' }], cards: ['높게·빠르게', '낮게·느리게'], shuffle: false }, sequence: [{ match: { s1: '높게·빠르게' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 어떤 마음일까?', minutes: 10, tool: 'emotion',
            teacher: '"아침에 이런 일이 있었다면 어떤 마음일까요?" 일마다 마음을 고르게 한다. 같은 일에도 사람마다 마음이 다를 수 있지만, 여기서는 글에 마음이 드러난 낱말(펄쩍펄쩍, 눈물)을 찾아보게 한다.',
            task: '아침에 있었던 일을 읽고 어떤 마음인지 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '있었던 일과 마음을 이어 보세요.', toolOptions: { mode: 'match', topic: '어떤 마음일까?', slots: [{ id: 's1', label: '생일 선물을 받아 펄쩍펄쩍 뛰었어요' }, { id: 's2', label: '아끼던 연필을 잃어버려 눈물이 났어요' }], cards: ['기뻐요', '슬퍼요'] },
                target: { match: { s1: '기뻐요', s2: '슬퍼요' } }, difficulty: 0.05,
                levels: { challenge: { prompt: '있었던 일 네 가지와 마음을 이어 보세요.', toolOptions: { slots: [{ id: 's1', label: '생일 선물을 받아 펄쩍펄쩍 뛰었어요' }, { id: 's2', label: '아끼던 연필을 잃어버려 눈물이 났어요' }, { id: 's3', label: '동생이 내 그림을 찢어 얼굴이 빨개졌어요' }, { id: 's4', label: '늦잠을 자서 하품이 자꾸 나요' }], cards: ['기뻐요', '슬퍼요', '화나요', '졸려요'] },
                  target: { match: { s1: '기뻐요', s2: '슬퍼요', s3: '화나요', s4: '졸려요' } } } } },
              { prompt: '민지는 아끼던 풍선이 날아가 슬퍼요. 민지의 슬픈 마음을 나타낸 몸짓만 골라 보세요.', toolOptions: { mode: 'pick', basket: '슬픈 마음 몸짓', cards: ['발을 끌며 터벅터벅 느리게 걸어요', '어깨를 늘어뜨리고 낮게 앉아요', '팔을 높이 흔들며 깡충 뛰어요'] },
                target: { pick: ['발을 끌며 터벅터벅 느리게 걸어요', '어깨를 늘어뜨리고 낮게 앉아요'] }, difficulty: 0.1,
                hints: ['슬플 때 내 몸은 높아질까요, 낮아질까요? 빨라질까요, 느려질까요?', '슬플 때는 몸이 낮아지고 느려져요. 높고 빠른 몸짓은 빼요.', '\'터벅터벅 느리게 걸어요\', \'낮게 앉아요\' 카드를 골라요.'] },
              { prompt: '몸 모습을 보고 어떤 마음인지 이어 보세요.', toolOptions: { mode: 'match', topic: '몸을 보고 짐작해요', slots: [{ id: 'b1', label: '어깨를 펴고 활짝 웃으며 깡충 뛰어요' }, { id: 'b2', label: '주먹을 꽉 쥐고 발을 쿵쿵 굴러요' }], cards: ['기뻐요', '화나요'] },
                target: { match: { b1: '기뻐요', b2: '화나요' } }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 내 마음 움직임 만들기 (몸 활동)', minutes: 16, tool: 'mindmap',
            teacher: '"신이 나서 하늘까지 뛰고 싶다면 높이는? 빠르기는?" 마음 글 속 실마리 낱말을 찾아 높이와 빠르기를 정하게 한다. 정한 뒤 자기 마음을 골라 4박 동안 몸으로 나타내고, 짝이 마음을 맞힌다. "마음은 몸으로 안 보여요"라는 학생에게는 짝이 맞힌 순간을 짚어 준다.',
            task: '마음 글에 알맞은 높이와 빠르기를 잇고, 오늘 내 마음 움직임을 짝에게 보여 줘요.',
            levels: CARD_LV,
            items: [
              { prompt: '마음 글과 알맞은 높이·빠르기를 이어 보세요.', toolOptions: { mode: 'match', topic: '마음과 움직임', slots: [{ id: 's1', label: '신이 나서 하늘까지 뛰고 싶어요' }, { id: 's2', label: '속상해서 바닥에 천천히 주저앉고 싶어요' }], cards: ['높게·빠르게', '낮게·느리게'] },
                target: { match: { s1: '높게·빠르게', s2: '낮게·느리게' } }, difficulty: 0.1,
                levels: { challenge: { prompt: '마음 글 네 가지와 알맞은 높이·빠르기를 이어 보세요.', toolOptions: { slots: [{ id: 's1', label: '신이 나서 하늘까지 뛰고 싶어요' }, { id: 's2', label: '속상해서 바닥에 천천히 주저앉고 싶어요' }, { id: 's3', label: '화가 나서 바닥에 발을 쿵쿵 빠르게 굴러요' }, { id: 's4', label: '졸려서 팔을 높이 천천히 뻗어 기지개를 켜요' }], cards: ['높게·빠르게', '낮게·느리게', '낮게·빠르게', '높게·느리게'] },
                  target: { match: { s1: '높게·빠르게', s2: '낮게·느리게', s3: '낮게·빠르게', s4: '높게·느리게' } } } },
                hints: ['마음 글에서 위·아래를 알려 주는 낱말과 빠르기를 알려 주는 낱말을 따로 찾아요.', '\'하늘까지\', \'바닥에\'는 높이, \'뛰고\', \'천천히\'는 빠르기의 실마리예요.', '신이 나면 높게 빨리, 속상하면 낮게 천천히 움직여요.'] },
              { prompt: '오늘 내 마음을 4박 동안 몸으로 나타내고 짝이 맞혀 보았으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '짝이 내 움직임을 보고 마음을 잘 맞히게 하려면 어떻게 할까요? 알맞은 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '잘 보여 주는 방법', cards: ['높이를 크게 바꿔요', '빠르기를 뚜렷하게 바꿔요', '얼굴 표정도 함께 지어요', '작게 살짝만 움직여요'] },
                target: { pick: ['높이를 크게 바꿔요', '빠르기를 뚜렷하게 바꿔요', '얼굴 표정도 함께 지어요'] }, difficulty: 0.2 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"짝이 내 마음을 바로 맞혔나요? 무엇을 보고 맞혔대요?" 높이·빠르기·표정 가운데 무엇이 실마리였는지 두세 명이 말하게 한다. 다음 시간에는 음악에 맞추어 움직임을 길게 이어 간다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '마음과 움직임', slots: [{ id: 'e1', label: '기뻐서 높이 깡충깡충 뛰어요' }, { id: 'e2', label: '슬퍼서 고개를 숙이고 천천히 걸어요' }], cards: ['높게·빠르게', '낮게·느리게'] }, prompt: '마음 글과 알맞은 높이·빠르기를 이어 보세요.', target: { match: { e1: '높게·빠르게', e2: '낮게·느리게' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '\'화가 나서 발을 쿵쿵 빠르게 굴러요\'는 빠르기가 어떤가요?', options: ['빨라요', '느려요'], answer: 0, difficulty: 0.1, explain: '발을 빠르게 굴러서 빠르기가 빨라요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '내 마음 움직임',
      items: [
        { type: 'figure', wide: true, prompt: '마음 글과 높이·빠르기를 선으로 이으세요.', tool: 'mindmap', figures: [{ options: { mode: 'match', topic: '마음과 움직임', slots: [{ id: 's1', label: '신이 나서 하늘까지 뛰고 싶어요' }, { id: 's2', label: '속상해서 천천히 주저앉아요' }], cards: ['낮게·느리게', '높게·빠르게'] }, caption: '' }], answer: '신이 나서-높게·빠르게, 속상해서-낮게·느리게' },
        { type: 'table', prompt: '오늘 내 마음 움직임을 정해 쓰세요.', columns: ['오늘 내 마음', '높이', '빠르기'], rows: 1 },
        { type: 'choice', prompt: '바른 생각에 ○ 하세요.', options: ['마음은 몸으로 나타낼 수 없어요', '내 마음을 몸으로 보여 줄 수 있어요'], answer: '내 마음을 몸으로 보여 줄 수 있어요' },
        { type: 'draw', prompt: '오늘 내 마음 움직임을 그려 보세요.' },
      ],
      easy: {
        note: '그 마음일 때 내 몸이 어땠는지 직접 해 보고 골라요!',
        items: [
          { type: 'choice', prompt: '신이 날 때 움직임에 ○ 하세요.', options: ['높게·빠르게', '낮게·느리게'], answer: '높게·빠르게' },
          { type: 'choice', prompt: '속상할 때 움직임에 ○ 하세요.', options: ['높게·빠르게', '낮게·느리게'], answer: '낮게·느리게' },
          { type: 'draw', prompt: '오늘 내 마음을 몸으로 나타낸 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 잇기는 두 마음만 해요.',
      base: '모두 이은 뒤 확인을 눌러요. 내 마음 움직임을 짝에게 보여 줘요.',
      challenge: '마음 네 가지를 높이·빠르기 네 가지와 이어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 마음 글 전체로만 짐작해 높이·빠르기를 섞는다 → 실마리 낱말(하늘까지, 바닥에, 천천히)에 밑줄을 긋게 한다. ② 움직임이 너무 작아 짝이 못 알아본다 → 높이는 크게, 빠르기는 뚜렷하게 하라고 한 번 더 시범을 보인다. ③ 오늘 마음을 말하기 꺼린다 → 진짜 마음 대신 \'이야기 속 친구의 마음\'을 골라도 된다고 한다.',
  }));

  lessons.push(L(30, {
    title: '음악에 맞추어 8박 움직임 이어 가기',
    objective: '높이와 빠르기를 바꾼 동작을 이어 8박 움직임을 만들고, 음악에 맞추어 멈추지 않고 이어 갈 수 있다.',
    illustration: ART('paper children in a circle moving to music notes floating in the air, a big numbered beat strip from one to eight on the floor', '여덟 박 이어 가기', [
      { motif: 'star', x: 120, y: 80, s: 0.6 }, { motif: 'star', x: 360, y: 70, s: 0.6 }, { motif: 'sun', x: 240, y: 70, s: 0.5 }]),
    safety: MOVE_SAFETY,
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"하나, 둘, 셋, 넷, 다섯, 여섯, 일곱, 여덟!" 손뼉으로 8박을 세며 음악을 튼다. "춤은 배운 동작만 해야 할까요?" 몇 명이 말하게 한 뒤, 오늘은 내가 만든 동작으로 8박을 채운다고 알린다. 시연 단추로 \'높게 손뼉, 낮게 발 구르기\'가 되풀이되는 8칸 줄을 보여 준다.',
        student: '음악에 맞추어 손뼉으로 8박을 세어 봐요.',
        demo: { tool: 'pattern', options: { seq: ['높게 손뼉', '낮게 발 구르기', '높게 손뼉', '낮게 발 구르기', '높게 손뼉', '낮게 발 구르기', '높게 손뼉', '낮게 발 구르기'] }, sequence: [{ fill: [] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 8박 움직임 줄 만들기', minutes: 12, tool: 'pattern',
            teacher: '"한 칸이 한 박이에요. 여덟 칸을 채우면 8박 움직임이 돼요." 빈칸 채우기로 시작해 스스로 줄을 만들게 한다. 만든 줄은 꼭 손뼉 박에 맞추어 몸으로 해 보게 하고, 끊기는 칸이 있으면 동작을 바꾸어 보게 한다.',
            task: '8박 움직임 줄의 빈칸을 채우고, 내 8박 움직임 줄을 만들어 몸으로 해 봐요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '\'높게 손뼉\'과 \'낮게 발 구르기\'가 번갈아 나와요. 빈칸을 채워 8박을 완성해 보세요.', toolOptions: { seq: ['높게 손뼉', '낮게 발 구르기', '높게 손뼉', '낮게 발 구르기', '높게 손뼉', null, '높게 손뼉', null], palette: ['높게 손뼉', '낮게 발 구르기'] }, target: { fill: ['낮게 발 구르기', '낮게 발 구르기'] }, difficulty: 0.1,
                hints: ['줄을 처음부터 손뼉 박에 맞추어 몸으로 따라 하며 다음 동작을 찾아요.', '빈칸 바로 앞 동작이 무엇인지, 두 동작이 번갈아 나오는지 살펴봐요.', '높게 손뼉 다음에는 낮게 발 구르기가 와요.'] },
              { prompt: '세 동작이 한 묶음으로 되풀이돼요. 빈칸을 채워 보세요.', toolOptions: { seq: ['빙글 돌기', '높게 손뼉', '낮게 발 구르기', '빙글 돌기', null, '낮게 발 구르기', '빙글 돌기', null], palette: ['빙글 돌기', '높게 손뼉', '낮게 발 구르기'] }, target: { fill: ['높게 손뼉', '높게 손뼉'] }, difficulty: 0.2,
                hints: ['세 칸씩 끊어 몸으로 따라 해 봐요.', '두 번째 묶음과 세 번째 묶음이 첫 묶음과 같은 차례인지 견주어 봐요.', '빙글 돌기, 높게 손뼉, 낮게 발 구르기가 한 묶음이에요.'] },
              { prompt: '동작 카드로 내 8박 움직임 줄을 만들어 보세요. 두 칸 묶음을 되풀이해요.', toolOptions: { mode: 'make', palette: ['높게 손뼉', '낮게 발 구르기', '빙글 돌기', '팔 물결'], length: 8 }, target: { rule: 'repeat', period: 2, uses: 2 }, difficulty: 0.2,
                hints: ['두 동작을 골라 묶음을 정하고, 여덟 칸을 그 묶음으로 채워요.', '묶음이 끝까지 똑같이 되풀이되는지, 두 동작이 서로 다른지 살펴봐요.', '예: 빙글 돌기, 팔 물결을 네 번 되풀이해요.'],
                levels: { challenge: { prompt: '서로 다른 동작 셋으로 묶음을 만들어 아홉 칸 움직임 줄을 만들어 보세요.', toolOptions: { length: 9 }, target: { rule: 'repeat', period: 3, uses: 3 } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 음악에 맞추어 이어 가기 (몸 활동)', minutes: 15, tool: 'timer',
            teacher: '"음악 30초 동안 내 8박을 멈추지 않고 이어 가요. 그다음 10초 쉬어요. 이렇게 두 번 해요." 먼저 안전 점검과 차례를 맞추고 타이머를 정한 뒤 시작한다. 중간에 동작을 잊은 학생은 제자리 걸음으로 박을 이어 가다가 다시 들어오게 한다.',
            task: '안전 점검을 하고, 활동 차례와 타이머를 맞춘 뒤 음악에 맞추어 8박 움직임을 이어 가요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '움직이기 전에 안전 점검을 모두 해 보세요.', toolOptions: { title: '움직이기 전에', safety: MOVE_SAFETY }, target: { safety: true }, difficulty: 0.05 },
              { prompt: '오늘 활동을 바른 차례로 놓아 보세요.', toolOptions: { title: '활동 차례', cards: ['8박 움직임 이어 가기', '정리운동', '준비운동'] }, target: { order: ['준비운동', '8박 움직임 이어 가기', '정리운동'] }, difficulty: 0.05 },
              { prompt: '30초 움직이고 10초 쉬기를 2번 하도록 타이머를 맞추세요.', toolOptions: { title: '음악 타이머', plan: { work: 20, rest: 20, rounds: 3 } }, target: { plan: { work: 30, rest: 10, rounds: 2 } }, difficulty: 0.15,
                levels: { challenge: { prompt: '30초 움직이고 10초 쉬기를 3번 하도록 타이머를 맞추세요.', target: { plan: { work: 30, rest: 10, rounds: 3 } } } } },
              { prompt: '음악에 맞추어 8박 움직임을 이어 간 뒤, 내가 한 것을 모두 점검해 보세요.', toolOptions: { title: '스스로 점검' }, target: { selfCheck: ['음악이 나오는 동안 멈추지 않고 이어 갔어요', '높이를 한 번 넘게 바꿨어요', '빠르기를 한 번 넘게 바꿨어요'] }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"멈추지 않고 이어 가려면 무엇이 도움이 되었나요?" 박 세기, 쉬운 동작 고르기 같은 말을 모은다. 정리운동으로 팔을 천천히 돌리며 숨을 고른다. 다음 시간에는 이야기에 맞추어 움직임을 바꾸어 본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'pattern', options: { seq: ['팔 물결', '빙글 돌기', '팔 물결', '빙글 돌기', '팔 물결', null], palette: ['팔 물결', '빙글 돌기'] }, prompt: '움직임 줄의 빈칸에 들어갈 동작을 채워 보세요.', target: { fill: ['빙글 돌기'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '춤 동작에 대한 바른 생각은?', options: ['배운 동작만 해야 해요', '내가 만든 동작으로도 춤출 수 있어요'], answer: 1, difficulty: 0.1, explain: '높이와 빠르기를 바꾸어 내 동작을 만들 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '내 8박 움직임',
      items: [
        { type: 'figure', wide: true, prompt: '빈칸에 들어갈 동작을 쓰세요.', tool: 'pattern', figures: [{ options: { seq: ['높게 손뼉', '낮게 발 구르기', '높게 손뼉', null, '높게 손뼉', null] }, caption: '' }], answer: '낮게 발 구르기, 낮게 발 구르기' },
        { type: 'table', prompt: '내 8박 움직임을 쓰세요.', columns: ['1박', '2박', '3박', '4박', '5박', '6박', '7박', '8박'], rows: 1 },
        { type: 'choice', prompt: '활동을 시작하기 전에 먼저 하는 것에 ○ 하세요.', options: ['준비운동', '정리운동'], answer: '준비운동' },
        { type: 'draw', prompt: '내 8박 움직임 가운데 가장 마음에 드는 동작을 그려 보세요.' },
      ],
      easy: {
        note: '한 칸이 한 박, 여덟 칸이면 8박!',
        items: [
          { type: 'blank', prompt: '빈칸에 알맞은 동작을 쓰세요.', text: '높게 손뼉, 낮게 발 구르기, 높게 손뼉, ___', answer: '낮게 발 구르기' },
          { type: 'choice', prompt: '춤에 대한 바른 생각에 ○ 하세요.', options: ['내가 만든 동작도 돼요', '배운 동작만 돼요'], answer: '내가 만든 동작도 돼요' },
          { type: 'draw', prompt: '내가 만든 동작 하나를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '움직임 줄은 두 칸 묶음만 채워요. 음악에 맞출 때는 선생님 동작을 따라 해도 돼요.',
      base: '두 칸 묶음 8박 줄을 만들고 음악 30초 동안 두 번 이어 가요.',
      challenge: '세 동작 묶음 줄을 만들고, 음악 30초 동안 세 번 이어 가요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 춤은 배운 동작만 해야 한다고 여겨 머뭇거린다 → 손뼉·발 구르기도 높이와 빠르기를 바꾸면 내 동작이 된다고 보여 준다. ② 8박 중간에 멈춘다 → 어려운 동작을 쉬운 동작으로 바꾸고 박은 입으로 세게 한다. ③ 빙글 돌기에서 어지러워 넘어진다 → 한 바퀴만 천천히 돌게 한다. 음악은 1분에 100박 안팎의 밝은 곡을 고른다(저작권이 정리된 교육용 음원).',
  }));

  lessons.push(L(31, {
    title: '씨앗이 자라는 이야기에 맞추어 움직임 바꾸기',
    objective: '씨앗이 자라는 이야기의 차례에 맞추어 몸의 높이와 빠르기를 바꾸어 이어지는 움직임으로 나타낼 수 있다.',
    illustration: ART('a paper seed under the soil sprouting into a stem and a big flower, children curled low then stretching tall beside the plant stages', '씨앗이 자라요', [
      { motif: 'sun', x: 400, y: 80, s: 0.6 }, { motif: 'flower', x: 330, y: 200 }, { motif: 'leaf', x: 160, y: 220 }]),
    safety: MOVE_SAFETY,
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"땅속 작은 씨앗이 비를 맞고 해를 받으면 어떻게 될까요?" 그림을 보며 씨앗→싹→줄기→꽃 차례를 함께 말한다. "씨앗일 때 몸은 높을까요, 낮을까요?" 시연 단추로 이야기 카드가 차례대로 놓이는 모습을 보여 준다.',
        student: '씨앗처럼 몸을 작게 웅크렸다가 천천히 일어나 봐요.',
        demo: { tool: 'story', options: { mode: 'order', slots: ['처음', '끝'], cards: ['땅속 작은 씨앗', '활짝 핀 꽃'], shuffle: false }, sequence: [{ order: ['땅속 작은 씨앗', '활짝 핀 꽃'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 씨앗 이야기 차례 정하기', minutes: 11, tool: 'story',
            teacher: '"씨앗에서 꽃까지 무엇이 먼저 일어나요?" 이야기 카드를 차례대로 놓게 한다. 놓은 뒤 카드마다 몸의 높이를 정하게 하고, 바람이 부는 장면은 빠르기를 바꾸는 곳이라고 짚는다.',
            task: '씨앗이 자라는 이야기를 차례대로 놓고, 장면마다 몸의 높이를 정해요.',
            levels: CARD_LV,
            items: [
              { prompt: '씨앗이 자라는 이야기를 차례대로 놓아 보세요.', toolOptions: { mode: 'order', slots: ['1', '2', '3', '4'], cards: ['땅속에 작은 씨앗이 있어요', '뾰족 싹이 고개를 내밀어요', '줄기가 쑥쑥 자라요', '꽃이 활짝 피어요'] },
                target: { order: ['땅속에 작은 씨앗이 있어요', '뾰족 싹이 고개를 내밀어요', '줄기가 쑥쑥 자라요', '꽃이 활짝 피어요'] }, difficulty: 0.1,
                levels: { challenge: { prompt: '씨앗 이야기 다섯 장면을 차례대로 놓아 보세요.', toolOptions: { slots: ['1', '2', '3', '4', '5'], cards: ['땅속에 작은 씨앗이 있어요', '뾰족 싹이 고개를 내밀어요', '줄기가 쑥쑥 자라요', '꽃이 활짝 피어요', '꽃이 지고 다시 씨앗이 맺혀요'] },
                  target: { order: ['땅속에 작은 씨앗이 있어요', '뾰족 싹이 고개를 내밀어요', '줄기가 쑥쑥 자라요', '꽃이 활짝 피어요', '꽃이 지고 다시 씨앗이 맺혀요'] } } } },
              { prompt: '장면마다 알맞은 몸의 높이를 이어 보세요.', toolOptions: { mode: 'match', topic: '몸의 높이', slots: [{ id: 's1', label: '땅속 작은 씨앗' }, { id: 's2', label: '줄기가 자라요' }, { id: 's3', label: '꽃이 활짝 피어요' }], cards: ['바닥에 웅크려 낮게', '무릎을 펴며 가운데로', '까치발로 팔을 벌려 높게'] },
                target: { match: { s1: '바닥에 웅크려 낮게', s2: '무릎을 펴며 가운데로', s3: '까치발로 팔을 벌려 높게' } }, difficulty: 0.15 },
              { prompt: '몸이 점점 높아지는 장면만 골라 보세요.', toolOptions: { mode: 'pick', basket: '몸이 높아져요', cards: ['줄기가 쑥쑥 자라요', '꽃이 활짝 피어요', '꽃이 시들어 고개를 푹 숙여요', '씨앗이 땅속으로 쏙 들어가요'] },
                target: { pick: ['줄기가 쑥쑥 자라요', '꽃이 활짝 피어요'] }, difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 씨앗이 되어 움직이기 (몸 활동)', minutes: 15, tool: 'mindmap',
            teacher: '교사가 이야기를 천천히 읽으면 모두 씨앗이 되어 움직인다. "센 바람이 불어요!" 할 때는 높이는 그대로, 빠르기만 바꾸게 한다. 장면이 바뀔 때 몸을 멈추지 말고 이어서 바꾸게 하고, 두 번째는 모둠 친구와 함께 해 본다.',
            task: '이야기에 맞추어 씨앗이 자라는 움직임을 하고, 빠르기가 바뀌는 장면을 찾아요.',
            levels: CARD_LV,
            items: [
              { prompt: '선생님 이야기에 맞추어 씨앗에서 꽃까지 멈추지 않고 이어서 움직였으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '장면을 \'천천히 움직여요\'와 \'빠르게 움직여요\'로 나누어 보세요.', toolOptions: { topic: '빠르기 바꾸기', slots: ['천천히 움직여요', '빠르게 움직여요'], cards: ['싹이 조금씩 고개를 내밀어요', '센 바람에 줄기가 마구 흔들려요', '꽃잎이 아주 천천히 펴져요', '빗방울이 후드득 쏟아져요'] },
                target: { sort: { '천천히 움직여요': ['싹이 조금씩 고개를 내밀어요', '꽃잎이 아주 천천히 펴져요'], '빠르게 움직여요': ['센 바람에 줄기가 마구 흔들려요', '빗방울이 후드득 쏟아져요'] } }, difficulty: 0.15 },
              { prompt: '이야기를 움직임으로 나타낼 때 알맞은 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '알맞은 것', cards: ['장면이 바뀌면 몸도 바꿔요', '장면 사이에 멈추지 않고 이어요', '처음부터 끝까지 같은 동작만 해요'] },
                target: { pick: ['장면이 바뀌면 몸도 바꿔요', '장면 사이에 멈추지 않고 이어요'] }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"씨앗이 꽃이 될 때 몸이 어떻게 바뀌었나요?" 낮게→높게, 천천히→빠르게 바뀐 곳을 두세 명이 말하게 한다. 다음 시간에는 짝과 거울 놀이로 서로의 움직임을 따라 하며 이어 간다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { mode: 'order', slots: ['1', '2', '3'], cards: ['꽃이 활짝 피어요', '땅속에 씨앗이 있어요', '싹이 나와요'] }, prompt: '씨앗이 자라는 차례대로 놓아 보세요.', target: { order: ['땅속에 씨앗이 있어요', '싹이 나와요', '꽃이 활짝 피어요'] }, difficulty: 0.05 },
          { type: 'choice', prompt: '\'땅속 작은 씨앗\'일 때 알맞은 몸의 높이는?', options: ['까치발로 높게', '바닥에 웅크려 낮게'], answer: 1, difficulty: 0.05, explain: '씨앗은 땅속에 작게 있으니 몸을 낮게 웅크려요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '씨앗이 자라요',
      items: [
        { type: 'figure', wide: true, prompt: '씨앗이 자라는 차례대로 번호를 쓰세요.', tool: 'story', figures: [{ options: { mode: 'order', slots: ['1', '2', '3', '4'], cards: ['꽃이 활짝 피어요', '줄기가 쑥쑥 자라요', '땅속에 작은 씨앗이 있어요', '뾰족 싹이 고개를 내밀어요'] }, caption: '' }], answer: '씨앗 → 싹 → 줄기 → 꽃' },
        { type: 'table', prompt: '장면마다 몸의 높이를 쓰세요.', columns: ['장면', '몸의 높이'], cells: [['씨앗', ''], ['줄기', ''], ['꽃', '']] },
        { type: 'choice', prompt: '\'센 바람에 줄기가 마구 흔들려요\'는 어떻게 움직일까요?', options: ['빠르게', '천천히'], answer: '빠르게' },
        { type: 'draw', prompt: '꽃이 활짝 핀 장면을 몸으로 나타낸 내 모습을 그려 보세요.' },
      ],
      easy: {
        note: '땅속 작은 씨앗과 활짝 핀 꽃을 몸으로 흉내 내 보고 골라요!',
        items: [
          { type: 'choice', prompt: '씨앗일 때 몸에 ○ 하세요.', options: ['낮게 웅크려요', '높게 서요'], answer: '낮게 웅크려요' },
          { type: 'choice', prompt: '먼저 일어나는 일에 ○ 하세요.', options: ['싹이 나와요', '꽃이 피어요'], answer: '싹이 나와요' },
          { type: 'draw', prompt: '씨앗이 된 내 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 이야기 카드는 네 장면이에요.',
      base: '모두 놓은 뒤 확인을 눌러요. 이야기에 맞추어 멈추지 않고 이어 움직여요.',
      challenge: '꽃이 지고 씨앗이 맺히는 장면까지 다섯 장면을 차례대로 놓아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 장면마다 멈췄다가 다시 움직인다 → 교사가 장면 사이를 \'그리고 조금씩…\'으로 이어 읽어 몸이 이어지게 한다. ② 높이만 바꾸고 빠르기는 늘 같다 → 바람·비 장면에서 빠르기만 바꾸는 연습을 따로 한다. ③ 꽃이 필 때 팔을 휘둘러 옆 친구와 부딪친다 → 팔 벌려 공간 확인을 다시 한다.',
  }));

  var MIRROR_SAFETY = MOVE_SAFETY.concat(['짝과 한 걸음 떨어져 마주 서요. 손이 닿지 않게 해요.']);

  lessons.push(L(32, {
    title: '짝과 거울 놀이로 움직임 따라 하며 이어 가기',
    objective: '짝의 움직임을 거울처럼 따라 하고, 이끄는 사람이 되어 높이와 빠르기를 바꾼 움직임을 이어 갈 수 있다.',
    illustration: ART('two paper children facing each other copying the same pose like a mirror, one raising an arm high slowly, a large mirror frame between them', '거울 놀이', [
      { motif: 'star', x: 240, y: 70, s: 0.5 }, { motif: 'cloud', x: 100, y: 80, s: 0.6 }, { motif: 'flower', x: 400, y: 228 }]),
    safety: MIRROR_SAFETY,
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"선생님이 거울 앞에 서면 거울 속 선생님은 어떻게 움직일까요?" 학생 한 명을 불러 교사 움직임을 천천히 따라 하게 한다. "빨리 움직이면 거울이 따라올 수 있을까요?" 이끄는 사람은 짝이 따라올 수 있게 천천히 바꾸어야 한다는 것을 짚는다.',
        student: '선생님 팔 움직임을 거울처럼 따라 해 봐요.',
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 거울 놀이 준비하기', minutes: 9, tool: 'timer',
            teacher: '"한 사람이 30초 이끌고, 10초 쉬고, 역할을 바꾸어 또 30초. 모두 네 번 해요." 안전 점검과 놀이 차례를 맞춘 뒤 타이머를 정한다. 타이머가 울리면 이끄는 사람과 따라 하는 사람을 바꾼다.',
            task: '안전 점검을 하고, 거울 놀이 차례와 타이머를 맞추어요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '거울 놀이 전에 안전 점검을 모두 해 보세요.', toolOptions: { title: '거울 놀이 전에', safety: MIRROR_SAFETY }, target: { safety: true }, difficulty: 0.05 },
              { prompt: '거울 놀이 차례를 바르게 놓아 보세요.', toolOptions: { title: '거울 놀이 차례', cards: ['짝과 마주 서요', '이끄는 사람을 정해요', '역할을 바꾸어 또 해요', '거울처럼 따라 해요'] }, target: { order: ['짝과 마주 서요', '이끄는 사람을 정해요', '거울처럼 따라 해요', '역할을 바꾸어 또 해요'] }, difficulty: 0.15 },
              { prompt: '30초 움직이고 10초 쉬기를 4번 하도록 타이머를 맞추세요.', toolOptions: { title: '거울 놀이 타이머', plan: { work: 20, rest: 20, rounds: 2 } }, target: { plan: { work: 30, rest: 10, rounds: 4 } }, difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 거울 놀이 하기 (몸 활동)', minutes: 18, tool: 'emotion',
            teacher: '타이머를 켜고 짝끼리 거울 놀이를 한다. 이끄는 사람이 너무 빨라 짝이 못 따라오면 "천천히, 크게"를 말해 준다. 두 번째 차례부터는 이끄는 사람이 높이와 빠르기를 한 번씩 꼭 바꾸게 한다. 끝난 뒤 짝이 빨리 움직일 때 어떻게 말할지 고른다.',
            task: '짝과 역할을 바꾸어 거울 놀이를 하고, 짝을 배려하는 말과 행동을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '짝과 역할을 바꾸어 거울 놀이를 네 번 했으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '짝이 너무 빨라서 따라 하기 어려워요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '나', situation: '거울 놀이에서 짝이 팔을 아주 빠르게 휘둘러서 따라 할 수가 없어요.', choices: [
                { id: 'stop', text: '그만하고 자리로 가요', result: '짝이 무엇이 문제인지 몰라 어리둥절해요.', mood: '어리둥절함', why: '그만두기보다 내 마음을 말해 봐요.' },
                { id: 'ask', text: '"조금 천천히 해 줄래?" 하고 말해요', result: '짝이 천천히 움직이고, 둘이 꼭 같이 움직여요.', mood: '즐거움' },
                { id: 'fast', text: '나도 아무렇게나 빨리 움직여요', result: '서로 다르게 움직여 거울 놀이가 안 돼요.', mood: '답답함', why: '거울 놀이는 서로 맞추어야 재미있어요.' }] }, target: { choice: 'ask' }, difficulty: 0.1 },
              { prompt: '이끄는 사람이 할 일로 알맞은 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '이끄는 사람이 할 일', cards: ['짝이 따라올 수 있게 천천히 바꿔요', '높이를 한 번씩 바꿔 봐요', '짝을 보며 움직여요', '짝이 못 따라오게 빨리 해요'] },
                target: { pick: ['짝이 따라올 수 있게 천천히 바꿔요', '높이를 한 번씩 바꿔 봐요', '짝을 보며 움직여요'] }, difficulty: 0.15 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"짝을 따라 하면서 새로 알게 된 동작이 있었나요?" 짝에게 배운 동작을 한 가지씩 말하게 한다. 짝 덕분에 내 움직임이 늘어난다는 것을 짚는다. 다음 시간에는 친구 움직임에서 재미있었던 점을 말해 주는 법을 배운다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'timer', options: { title: '거울 놀이 타이머', plan: { work: 30, rest: 20, rounds: 3 } }, prompt: '20초 움직이고 10초 쉬기를 2번 하도록 타이머를 맞추세요.', target: { plan: { work: 20, rest: 10, rounds: 2 } }, difficulty: 0.1 },
          { type: 'choice', prompt: '거울 놀이에서 이끄는 사람은 어떻게 움직이면 좋을까요?', options: ['짝이 따라올 수 있게 천천히', '짝이 못 따라오게 빨리'], answer: 0, difficulty: 0.05, explain: '짝이 따라올 수 있어야 거울 놀이가 돼요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '거울 놀이',
      items: [
        { type: 'figure', wide: true, prompt: '거울 놀이 차례대로 번호를 쓰세요.', tool: 'timer', figures: [{ options: { title: '거울 놀이 차례', cards: ['역할을 바꾸어 또 해요', '짝과 마주 서요', '거울처럼 따라 해요', '이끄는 사람을 정해요'] }, caption: '' }], answer: '마주 서요 → 이끄는 사람 정해요 → 따라 해요 → 역할 바꿔요' },
        { type: 'table', prompt: '짝에게 배운 동작을 쓰세요.', columns: ['짝 이름', '배운 동작', '높이·빠르기'], rows: 1 },
        { type: 'choice', prompt: '짝이 너무 빠를 때 할 말에 ○ 하세요.', options: ['"조금 천천히 해 줄래?"', '"너랑 안 해."'], answer: '"조금 천천히 해 줄래?"' },
        { type: 'draw', prompt: '짝과 거울 놀이를 하는 모습을 그려 보세요.' },
      ],
      easy: {
        note: '거울은 똑같이, 이끄는 사람은 천천히!',
        items: [
          { type: 'choice', prompt: '거울 놀이에서 따라 하는 사람은?', options: ['짝과 똑같이 움직여요', '마음대로 움직여요'], answer: '짝과 똑같이 움직여요' },
          { type: 'choice', prompt: '먼저 하는 것에 ○ 하세요.', options: ['짝과 마주 서요', '역할을 바꿔요'], answer: '짝과 마주 서요' },
          { type: 'draw', prompt: '거울 놀이에서 내가 한 동작을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '이끄는 사람은 팔만 천천히 움직여요. 맞는 카드에 초록 테두리가 생겨요.',
      base: '짝과 역할을 바꾸어 네 번 하고, 두 번째부터 높이와 빠르기를 한 번씩 바꿔요.',
      challenge: '이끄는 사람이 될 때 높이와 빠르기를 함께 바꾼 움직임을 두 가지 넣어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 이끄는 사람이 일부러 빨리 해 짝을 놀린다 → 거울 놀이는 둘이 함께 맞추는 놀이라고 처음에 약속한다. ② 따라 하는 사람이 좌우를 헷갈린다 → 1학년은 좌우를 바꾸지 않고 \'같은 쪽\'으로 따라 해도 된다고 한다. ③ 짝끼리 손이 닿아 장난이 된다 → 한 걸음 떨어져 서도록 바닥 테이프를 붙인다.',
  }));

  // ───────────────────────── 33~36차시: 움직임 나누고 고쳐 다시 하기 ─────────────────────────

  lessons.push(L(33, {
    title: '친구 움직임에서 재미있었던 점 콕 집어 말하기',
    objective: '친구의 움직임을 보고 높이·빠르기·표정 가운데 재미있었던 점 하나를 콕 집어 말할 수 있다.',
    illustration: ART('a paper child performing a high fast jump while classmates sit in a semicircle raising hands to speak, speech bubbles with stars above them', '무엇이 재미있었나요?', [
      { motif: 'star', x: 120, y: 70, s: 0.6 }, { motif: 'star', x: 370, y: 80, s: 0.5 }, { motif: 'flower', x: 240, y: 230 }]),
    safety: MOVE_SAFETY,
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '교사가 \'불꽃\' 움직임을 보여 준 뒤 두 가지 말을 들려준다. "멋있어요." / "펑 하고 높이 뛸 때 진짜 불꽃 같았어요." "어느 말을 들으면 선생님이 무엇을 잘했는지 알 수 있을까요?" 콕 집어 말하면 움직인 친구가 더 신난다는 것을 짚는다.',
        student: '두 말 가운데 무엇을 잘했는지 알려 주는 말에 손을 들어요.',
        demo: { tool: 'mindmap', options: { topic: '친구에게 할 말', slots: ['콕 집은 말', '두루뭉술한 말'], cards: ['높이 뛸 때 진짜 불꽃 같았어요', '멋있어요'], shuffle: false }, sequence: [{ sort: { '콕 집은 말': ['높이 뛸 때 진짜 불꽃 같았어요'], '두루뭉술한 말': ['멋있어요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 콕 집은 말 찾기', minutes: 11, tool: 'mindmap',
            teacher: '"콕 집은 말에는 높이, 빠르기, 표정 같은 낱말이 들어 있어요." 카드에서 그 낱말을 찾아 손가락으로 짚게 한다. "잘했어"만 고르는 학생에게 "무엇을 잘했는지 들어 있나요?"를 묻는다.',
            task: '친구에게 할 말을 콕 집은 말과 두루뭉술한 말로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '친구에게 할 말을 나누어 보세요.', toolOptions: { topic: '친구에게 할 말', slots: ['콕 집은 말', '두루뭉술한 말'], cards: ['낮게 웅크릴 때 진짜 씨앗 같았어요', '잘했어요', '빠르게 돌 때 바람 소리가 들리는 것 같았어요', '좋아요'] },
                target: { sort: { '콕 집은 말': ['낮게 웅크릴 때 진짜 씨앗 같았어요', '빠르게 돌 때 바람 소리가 들리는 것 같았어요'], '두루뭉술한 말': ['잘했어요', '좋아요'] } }, difficulty: 0.15,
                levels: { challenge: { prompt: '친구에게 할 말 여섯 장을 나누어 보세요.', toolOptions: { cards: ['낮게 웅크릴 때 진짜 씨앗 같았어요', '잘했어요', '빠르게 돌 때 바람 소리가 들리는 것 같았어요', '좋아요', '웃는 표정 덕분에 기쁜 마음이 보였어요', '재밌어요'] },
                  target: { sort: { '콕 집은 말': ['낮게 웅크릴 때 진짜 씨앗 같았어요', '빠르게 돌 때 바람 소리가 들리는 것 같았어요', '웃는 표정 덕분에 기쁜 마음이 보였어요'], '두루뭉술한 말': ['잘했어요', '좋아요', '재밌어요'] } } } } },
              { prompt: '콕 집은 말이 무엇을 말하는지 이어 보세요.', toolOptions: { mode: 'match', topic: '무엇을 보았을까?', slots: [{ id: 's1', label: '까치발로 높이 설 때 기린 같았어요' }, { id: 's2', label: '느릿느릿 걸을 때 거북 같았어요' }], cards: ['높이', '빠르기'] },
                target: { match: { s1: '높이', s2: '빠르기' } }, difficulty: 0.1,
                levels: { challenge: { prompt: '콕 집은 말 세 가지가 무엇을 말하는지 이어 보세요.', toolOptions: { slots: [{ id: 's1', label: '까치발로 높이 설 때 기린 같았어요' }, { id: 's2', label: '느릿느릿 걸을 때 거북 같았어요' }, { id: 's3', label: '울상을 지으니 슬픈 마음이 보였어요' }], cards: ['높이', '빠르기', '표정'] },
                  target: { match: { s1: '높이', s2: '빠르기', s3: '표정' } } } } },
              { prompt: '친구 움직임을 볼 때 바른 생각만 골라 보세요.', toolOptions: { mode: 'pick', basket: '바른 생각', cards: ['내 마음도 움직이면 친구가 알아볼 수 있어요', '콕 집어 말해 주면 친구가 기뻐요', '내 마음은 남이 알 수 없으니 보여 줄 필요 없어요'] },
                target: { pick: ['내 마음도 움직이면 친구가 알아볼 수 있어요', '콕 집어 말해 주면 친구가 기뻐요'] }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 모둠 안에서 보여 주고 말해 주기 (몸 활동)', minutes: 15, tool: 'emotion',
            teacher: '네 명 모둠에서 한 사람씩 지난 시간에 만든 8박 움직임을 보여 준다(한 사람에 1분 남짓). 보는 친구들은 높이·빠르기·표정 가운데 하나를 콕 집어 말해 준다. "보여 주기 싫어요. 어차피 몰라요"라는 학생에게는 짝이 먼저 그 학생의 마음을 맞혀 보게 한다.',
            task: '모둠에서 내 움직임을 보여 주고, 친구 움직임에 콕 집은 말을 해 줘요.',
            levels: CARD_LV,
            items: [
              { prompt: '모둠 친구들에게 내 움직임을 보여 주고, 친구마다 콕 집은 말을 한 가지씩 해 주었으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '민서가 "내 마음은 어차피 아무도 몰라. 안 보여 줄래" 해요. 어떻게 말할까요?', toolOptions: { mode: 'branch', who: '민서', situation: '모둠 발표 차례가 되자 민서가 고개를 저으며 앉아 있어요.', choices: [
                { id: 'skip', text: '"그럼 하지 마" 하고 다음 사람으로 넘어가요', result: '민서는 끝까지 보여 주지 못하고 쓸쓸해해요.', mood: '쓸쓸함', why: '보여 주면 친구들이 알아볼 수 있다는 것을 알려 줘요.' },
                { id: 'cheer', text: '"우리가 맞혀 볼게! 한 번만 보여 줘" 하고 말해요', result: '민서가 용기 내어 움직이고, 친구들이 마음을 맞혀요.', mood: '뿌듯함' },
                { id: 'laugh', text: '"부끄러워하네" 하고 웃어요', result: '민서가 더 움츠러들어요.', mood: '부끄러움', why: '놀리면 친구가 더 보여 주기 어려워요.' }] }, target: { choice: 'cheer' }, difficulty: 0.1 },
              { prompt: '친구가 움직임을 보여 줄 때 내가 할 일만 골라 보세요.', toolOptions: { mode: 'pick', basket: '볼 때 할 일', cards: ['끝까지 바라봐요', '다 보고 손뼉을 쳐요', '콕 집어 말해 줘요', '옆 친구와 떠들어요'] },
                target: { pick: ['끝까지 바라봐요', '다 보고 손뼉을 쳐요', '콕 집어 말해 줘요'] }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"친구에게 들은 말 가운데 가장 기분 좋았던 말은 무엇이에요?" 두세 명이 말하게 하고, 그 말이 무엇을 콕 집었는지 함께 찾는다. 다음 시간에는 내 움직임에서 바꿀 점 하나를 골라 본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '친구에게 할 말', slots: ['콕 집은 말', '두루뭉술한 말'], cards: ['빠르게 뛸 때 토끼 같았어요', '멋져요'] }, prompt: '친구에게 할 말을 나누어 보세요.', target: { sort: { '콕 집은 말': ['빠르게 뛸 때 토끼 같았어요'], '두루뭉술한 말': ['멋져요'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '\'높이 설 때 기린 같았어요\'는 무엇을 콕 집은 말일까요?', options: ['높이', '빠르기'], answer: 0, difficulty: 0.1, explain: '높이 선 모습을 콕 집어 말했어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '콕 집어 말해요',
      items: [
        { type: 'figure', wide: true, prompt: '친구에게 할 말을 콕 집은 말과 두루뭉술한 말로 나누어 쓰세요.', tool: 'mindmap', figures: [{ options: { topic: '친구에게 할 말', slots: ['콕 집은 말', '두루뭉술한 말'], cards: ['잘했어요', '낮게 웅크릴 때 씨앗 같았어요'] }, caption: '' }], answer: '콕 집은 말-낮게 웅크릴 때 씨앗 같았어요, 두루뭉술한 말-잘했어요' },
        { type: 'table', prompt: '친구 움직임에서 재미있었던 점을 쓰세요.', columns: ['친구 이름', '재미있었던 점(높이·빠르기·표정)'], rows: 2 },
        { type: 'choice', prompt: '바른 생각에 ○ 하세요.', options: ['내 마음은 보여 줄 필요 없어요', '움직이면 친구가 내 마음을 알아볼 수 있어요'], answer: '움직이면 친구가 내 마음을 알아볼 수 있어요' },
        { type: 'blank', prompt: '친구에게 해 줄 콕 집은 말을 완성하세요.', text: '___ 할 때 진짜 ___ 같았어.', answer: '' },
      ],
      easy: {
        note: '높이, 빠르기, 표정 가운데 하나를 콕!',
        items: [
          { type: 'choice', prompt: '콕 집은 말에 ○ 하세요.', options: ['높이 뛸 때 불꽃 같았어요', '좋아요'], answer: '높이 뛸 때 불꽃 같았어요' },
          { type: 'choice', prompt: '친구가 움직일 때 나는?', options: ['끝까지 바라봐요', '떠들어요'], answer: '끝까지 바라봐요' },
          { type: 'draw', prompt: '친구 움직임 가운데 재미있었던 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 말은 \'높이\'와 \'빠르기\' 두 가지만 콕 집어요.',
      base: '모두 나눈 뒤 확인을 눌러요. 모둠 친구마다 콕 집은 말을 하나씩 해요.',
      challenge: '말 카드가 여섯 장으로 늘고, 표정까지 세 가지를 이어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① "잘했어"만 되풀이한다 → 칠판에 \'___할 때 진짜 ___ 같았어\' 말틀을 붙여 둔다. ② 보여 주기를 거부한다(내 마음은 아무도 모른다) → 짝이 먼저 맞혀 보는 경험을 주고, 앉은 채로 팔만 움직여도 된다고 한다. ③ 친구 움직임을 흉보며 웃는다 → 보는 사람의 약속(끝까지 보기, 손뼉, 콕 집은 말)을 먼저 정한다.',
  }));

  lessons.push(L(34, {
    title: '내 움직임에서 바꿀 점 하나 골라 정하기',
    objective: '친구에게 들은 말을 바탕으로 내 움직임에서 높이나 빠르기 가운데 바꿀 점 하나를 골라 까닭과 함께 말할 수 있다.',
    illustration: ART('a paper child thinking with a finger on the chin in front of two signposts labeled height and speed, small arrows going up and forward', '무엇을 바꿀까?', [
      { motif: 'tree', x: 90, y: 210 }, { motif: 'cloud', x: 340, y: 80, s: 0.6 }, { motif: 'flower', x: 400, y: 230, color: 'buttercup' }]),
    safety: MOVE_SAFETY,
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"지난 시간 친구가 \'불꽃인지 잘 모르겠어\'라고 했대요. 무엇을 바꾸면 불꽃처럼 보일까요?" 교사가 낮고 느린 불꽃을 보여 준 뒤 높이만 바꾸어 다시 보여 준다. "한꺼번에 다 바꾸면 무엇이 좋아졌는지 알기 어려워요. 하나만 바꿔요."',
        student: '선생님 불꽃 움직임에서 바꾸면 좋을 것을 짝에게 말해요.',
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 친구 말을 듣고 바꿀 점 찾기', minutes: 12, tool: 'mindmap',
            teacher: '"친구가 \'토끼인데 너무 느려\'라고 했다면 무엇을 바꿔요?" 친구 말 속에서 높이 낱말과 빠르기 낱말을 찾게 한다. 찾은 뒤 바꿀 점을 몸으로 한 번씩 해 보게 한다.',
            task: '친구에게 들은 말을 읽고 무엇을 바꾸면 좋을지 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '친구에게 들은 말과 바꿀 점을 이어 보세요.', toolOptions: { mode: 'match', topic: '무엇을 바꿀까?', slots: [{ id: 's1', label: '"토끼인데 너무 느릿느릿해."' }, { id: 's2', label: '"새가 하늘을 나는데 몸이 너무 낮아."' }], cards: ['더 빠르게', '더 높게'] },
                target: { match: { s1: '더 빠르게', s2: '더 높게' } }, difficulty: 0.1,
                levels: { challenge: { prompt: '친구에게 들은 말 네 가지와 바꿀 점을 이어 보세요.', toolOptions: { slots: [{ id: 's1', label: '"토끼인데 너무 느릿느릿해."' }, { id: 's2', label: '"새가 하늘을 나는데 몸이 너무 낮아."' }, { id: 's3', label: '"달팽이인데 너무 빨리 가."' }, { id: 's4', label: '"뱀이 기어가는데 서 있어."' }], cards: ['더 빠르게', '더 높게', '더 느리게', '더 낮게'] },
                  target: { match: { s1: '더 빠르게', s2: '더 높게', s3: '더 느리게', s4: '더 낮게' } } } },
                hints: ['친구 말에서 나타내려던 것(토끼, 새)이 어떻게 움직이는지 먼저 떠올려요.', '\'느릿느릿\', \'빨리\'는 빠르기, \'낮아\', \'서 있어\'는 높이를 말해요.', '토끼는 빨라야 하니 더 빠르게, 새는 높이 나니 더 높게 바꿔요.'] },
              { prompt: '바꿀 점을 정할 때 알맞은 방법만 골라 보세요.', toolOptions: { mode: 'pick', basket: '알맞은 방법', cards: ['한 번에 하나만 바꿔요', '친구가 해 준 말을 떠올려요', '바꾼 뒤 다시 해 봐요', '모든 동작을 다 버려요'] },
                target: { pick: ['한 번에 하나만 바꿔요', '친구가 해 준 말을 떠올려요', '바꾼 뒤 다시 해 봐요'] }, difficulty: 0.15 },
              { prompt: '바꿀 점을 \'높이를 바꿔요\'와 \'빠르기를 바꿔요\'로 나누어 보세요.', toolOptions: { topic: '바꿀 점', slots: ['높이를 바꿔요', '빠르기를 바꿔요'], cards: ['까치발로 더 높이 서요', '무릎을 더 굽혀 낮게 해요', '발을 더 빨리 굴러요', '팔을 더 천천히 돌려요'] },
                target: { sort: { '높이를 바꿔요': ['까치발로 더 높이 서요', '무릎을 더 굽혀 낮게 해요'], '빠르기를 바꿔요': ['발을 더 빨리 굴러요', '팔을 더 천천히 돌려요'] } }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 나의 바꿀 점 정하기 (몸 활동)', minutes: 14, tool: 'emotion',
            teacher: '친구에게 들은 말을 떠올려 바꿀 점 하나를 정하고, 짝 앞에서 바꾸기 전과 후를 한 번씩 보여 준다. "바꿀 게 없어요"라는 학생에게는 높이와 빠르기 가운데 하나를 더 크게 해 보라고 권한다.',
            task: '친구 말을 듣고 내 움직임에서 바꿀 점 하나를 정해 짝에게 보여 줘요.',
            levels: CARD_LV,
            items: [
              { prompt: '하윤이가 "친구들이 다 다른 말을 해서 다 바꿀래" 해요. 어떻게 하면 좋을까요?', toolOptions: { mode: 'branch', who: '하윤', situation: '하윤이가 친구 셋에게서 "더 높게", "더 빠르게", "표정도"라는 말을 들었어요.', choices: [
                { id: 'all', text: '한꺼번에 세 가지를 다 바꿔요', result: '움직임이 뒤죽박죽이 되어 무엇이 좋아졌는지 몰라요.', mood: '어리둥절함', why: '한 번에 하나씩 바꿔야 무엇이 좋아졌는지 알 수 있어요.' },
                { id: 'one', text: '가장 고치고 싶은 하나를 골라 먼저 바꿔요', result: '바뀐 움직임을 보고 친구들이 "훨씬 좋아!" 해요.', mood: '뿌듯함' },
                { id: 'none', text: '아무것도 안 바꾸고 그대로 해요', result: '친구들이 해 준 말이 쓸모없어져요.', mood: '아쉬움', why: '친구 말을 듣고 하나는 바꿔 봐요.' }] }, target: { choice: 'one' }, difficulty: 0.1 },
              { prompt: '내가 바꿀 점 하나를 정해 짝 앞에서 바꾸기 전과 바꾼 뒤를 한 번씩 보여 주었으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '바꿀 점과 까닭을 함께 말한 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '까닭을 함께 말했어요', cards: ['토끼처럼 보이게 더 빠르게 뛸래요', '새처럼 보이게 더 높이 팔을 뻗을래요', '그냥 바꿀래요'] },
                target: { pick: ['토끼처럼 보이게 더 빠르게 뛸래요', '새처럼 보이게 더 높이 팔을 뻗을래요'] }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"내가 고른 바꿀 점을 한 문장으로 말해 볼까요? \'___처럼 보이게 더 ___ 할래요.\'" 서너 명이 말하게 한다. 다음 시간에 바꾼 움직임을 다시 해 보고 처음과 견주어 본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '무엇을 바꿀까?', slots: [{ id: 'e1', label: '"거북인데 너무 빨라."' }, { id: 'e2', label: '"기린인데 몸이 낮아."' }], cards: ['더 느리게', '더 높게'] }, prompt: '친구에게 들은 말과 바꿀 점을 이어 보세요.', target: { match: { e1: '더 느리게', e2: '더 높게' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '내 움직임을 바꿀 때는?', options: ['한 번에 하나씩 바꿔요', '한꺼번에 다 바꿔요'], answer: 0, difficulty: 0.1, explain: '하나씩 바꿔야 무엇이 좋아졌는지 알 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '바꿀 점 하나',
      items: [
        { type: 'figure', wide: true, prompt: '친구 말과 바꿀 점을 선으로 이으세요.', tool: 'mindmap', figures: [{ options: { mode: 'match', topic: '무엇을 바꿀까?', slots: [{ id: 's1', label: '"토끼인데 너무 느려."' }, { id: 's2', label: '"새인데 몸이 낮아."' }], cards: ['더 높게', '더 빠르게'] }, caption: '' }], answer: '토끼-더 빠르게, 새-더 높게' },
        { type: 'table', prompt: '나의 바꿀 점을 쓰세요.', columns: ['친구에게 들은 말', '바꿀 점 하나', '까닭'], rows: 1 },
        { type: 'choice', prompt: '바꿀 점을 정할 때 알맞은 것에 ○ 하세요.', options: ['한 번에 하나만 바꿔요', '모든 동작을 다 버려요'], answer: '한 번에 하나만 바꿔요' },
        { type: 'draw', prompt: '바꾼 뒤 내 움직임을 그려 보세요.' },
      ],
      easy: {
        note: '친구 말에서 높이와 빠르기 낱말을 찾아요!',
        items: [
          { type: 'choice', prompt: '"토끼인데 너무 느려"를 들으면?', options: ['더 빠르게', '더 느리게'], answer: '더 빠르게' },
          { type: 'choice', prompt: '바꿀 때는 몇 가지씩?', options: ['하나씩', '한꺼번에 다'], answer: '하나씩' },
          { type: 'draw', prompt: '내가 바꾸고 싶은 동작을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 친구 말 두 가지만 이어요.',
      base: '모두 이은 뒤 확인을 눌러요. 바꾸기 전과 뒤를 짝에게 보여 줘요.',
      challenge: '친구 말 네 가지와 바꿀 점 네 가지를 이어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 친구 말을 모두 한꺼번에 반영하려 한다 → \'한 번에 하나\' 약속을 칠판에 적어 둔다. ② 바꿀 점을 "잘하기"처럼 막연하게 쓴다 → 높이·빠르기 낱말이 꼭 들어가게 한다. ③ 친구 말을 듣고 속상해한다 → 친구 말은 움직임을 더 멋지게 하는 도움말이라고 다시 말해 준다.',
  }));

  lessons.push(L(35, {
    title: '바꾼 움직임을 다시 해 보고 처음과 견주기',
    objective: '바꾼 점을 넣어 움직임을 다시 하고, 처음과 견주어 무엇이 달라졌는지 말할 수 있다.',
    illustration: ART('two paper panels side by side showing the same child moving low before and jumping high after, a friend clapping between the panels', '처음과 지금', [
      { motif: 'star', x: 360, y: 70, s: 0.6 }, { motif: 'sun', x: 110, y: 80, s: 0.5 }, { motif: 'leaf', x: 240, y: 228 }]),
    safety: MOVE_SAFETY,
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"지난 시간에 고른 바꿀 점을 기억하나요?" 학습지를 꺼내 바꿀 점을 소리 내어 읽게 한다. 오늘은 처음 움직임과 바꾼 움직임을 차례로 해 보고 짝이 무엇이 달라졌는지 말해 준다고 알린다. 시연 단추로 활동 차례가 놓이는 모습을 보여 준다.',
        student: '지난 시간에 정한 바꿀 점을 짝에게 다시 말해요.',
        demo: { tool: 'story', options: { mode: 'order', slots: ['1', '2', '3'], cards: ['처음 움직임을 해요', '바꾼 움직임을 해요', '짝이 달라진 점을 말해요'], shuffle: false }, sequence: [{ order: ['처음 움직임을 해요', '바꾼 움직임을 해요', '짝이 달라진 점을 말해요'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 다시 해 보기 준비', minutes: 9, tool: 'timer',
            teacher: '"한 사람이 처음 움직임 20초, 15초 쉬고, 바꾼 움직임 20초를 해요." 안전 점검을 하고 차례 카드와 타이머를 맞추게 한다. 짝은 보는 동안 무엇이 달라졌는지 잘 살펴본다.',
            task: '안전 점검을 하고, 다시 해 보기 차례와 타이머를 맞추어요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '다시 해 보기 전에 안전 점검을 모두 해 보세요.', toolOptions: { title: '다시 해 보기 전에', safety: MOVE_SAFETY.concat(['보는 짝은 두 걸음 떨어져 앉아서 봐요.']) }, target: { safety: true }, difficulty: 0.05 },
              { prompt: '다시 해 보기 차례를 바르게 놓아 보세요.', toolOptions: { title: '다시 해 보기 차례', cards: ['바꾼 움직임을 해요', '짝이 달라진 점을 말해요', '처음 움직임을 해요'] }, target: { order: ['처음 움직임을 해요', '바꾼 움직임을 해요', '짝이 달라진 점을 말해요'] }, difficulty: 0.1 },
              { prompt: '20초 움직이고 15초 쉬기를 2번 하도록 타이머를 맞추세요.', toolOptions: { title: '다시 해 보기 타이머', plan: { work: 30, rest: 20, rounds: 3 } }, target: { plan: { work: 20, rest: 15, rounds: 2 } }, difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 다시 하고 견주기 (몸 활동)', minutes: 18, tool: 'timer',
            teacher: '짝끼리 번갈아 타이머에 맞추어 처음 움직임과 바꾼 움직임을 한다(한 사람 1분 남짓). 보는 짝은 높이를 바꾼 횟수를 손가락으로 세어 주고, "처음보다 ___가 달라졌어"로 말해 준다. 끝난 뒤 스스로 점검을 하고, 달라진 점을 학습지 표에 쓴다. 바꾼 점이 보이지 않았다면 그 점을 더 크게 해 한 번 더 해 보게 한다.',
            task: '짝 앞에서 처음 움직임과 바꾼 움직임을 하고, 스스로 점검한 뒤 달라진 점을 견주어요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '짝 앞에서 처음 움직임과 바꾼 움직임을 한 뒤, 내가 한 것을 모두 점검해 보세요.', toolOptions: { title: '스스로 점검' }, target: { selfCheck: ['처음 움직임을 끝까지 했어요', '바꾼 점을 넣어 다시 했어요', '짝에게서 달라진 점을 들었어요'] }, difficulty: 0.1 },
              { prompt: '짝이 세어 준, 몸의 높이를 바꾼 횟수를 처음 움직임과 바꾼 움직임에 각각 적어 보세요.', toolOptions: { title: '견주어 보기', fields: ['처음 움직임', '바꾼 움직임'], unit: '번' }, target: { records: true }, difficulty: 0.1 },
              { prompt: '짝이 처음과 무엇이 달라졌는지 말해 주었으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"바꾸고 다시 해 보니 어땠나요? 짝은 무엇이 달라졌다고 했나요?" 서너 명이 \'처음엔 ___였는데 이제 ___\'로 말하게 한다. 다음 시간에는 모둠이 함께 움직임 발표회를 연다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'timer', options: { title: '집에서 다시 해 보기', plan: { work: 30, rest: 20, rounds: 3 } }, prompt: '집에서 15초 움직이고 10초 쉬기를 2번 하도록 타이머를 맞추세요.', target: { plan: { work: 15, rest: 10, rounds: 2 } }, difficulty: 0.15 },
          { type: 'choice', prompt: '바꾼 움직임을 보여 준 뒤 짝이 할 말로 알맞은 것은?', options: ['"처음보다 더 높아졌어."', '"똑같아. 몰라."'], answer: 0, difficulty: 0.05, explain: '처음과 견주어 달라진 점을 콕 집어 말해 줘요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '처음과 지금',
      items: [
        { type: 'table', prompt: '처음 움직임과 바꾼 움직임을 견주어 쓰세요.', columns: ['', '높이', '빠르기'], cells: [['처음', '', ''], ['바꾼 뒤', '', '']] },
        { type: 'blank', prompt: '달라진 점을 쓰세요.', text: '처음엔 ___ 였는데 이제 ___.', answer: '' },
        { type: 'choice', prompt: '다시 해 보기에서 가장 먼저 하는 것에 ○ 하세요.', options: ['처음 움직임', '바꾼 움직임'], answer: '처음 움직임' },
        { type: 'draw', prompt: '처음 움직임과 바꾼 움직임을 나란히 그려 보세요.' },
      ],
      easy: {
        note: '처음 → 바꾼 뒤 → 짝의 말!',
        items: [
          { type: 'choice', prompt: '바꾼 움직임은 언제 하나요?', options: ['처음 움직임 다음에', '맨 처음에'], answer: '처음 움직임 다음에' },
          { type: 'choice', prompt: '짝이 해 줄 말에 ○ 하세요.', options: ['"더 빨라졌어."', '"몰라."'], answer: '"더 빨라졌어."' },
          { type: 'draw', prompt: '바꾼 뒤 내 움직임을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '처음 움직임과 바꾼 움직임을 짧게 4박씩만 해요.',
      base: '타이머 20초씩 두 번 하고, 스스로 점검을 모두 해요.',
      challenge: '바꾼 움직임에 표정까지 더해 보고, 처음과 견준 말을 두 가지로 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 바꾼 점이 너무 작아 차이가 안 보인다 → 그 점을 두 배로 크게 해 보게 한다. ② 짝이 "똑같아"라고만 한다 → 높이·빠르기 칸이 있는 표를 보며 말하게 한다. ③ 처음 움직임을 잊었다 → 지난 학습지 그림을 보고 떠올리게 한다. 셀프 점검은 세 칸을 다 해야 넘어가므로 짝의 말을 듣는 시간을 꼭 준다.',
  }));

  lessons.push(L(36, {
    title: '모둠 움직임 발표회 열고 소감 나누기',
    objective: '모둠이 함께 높이와 빠르기를 바꾼 움직임을 발표하고, 다른 모둠의 움직임에 콕 집은 말을 해 줄 수 있다.',
    illustration: ART('a small paper stage in a classroom with a group of four children performing a wave movement, the audience clapping on cushions, paper bunting above', '움직임 발표회', [
      { motif: 'star', x: 100, y: 70, s: 0.6 }, { motif: 'star', x: 380, y: 70, s: 0.6 }, { motif: 'flower', x: 240, y: 232 }]),
    safety: MOVE_SAFETY.concat(['발표하는 자리와 보는 자리를 테이프로 나누어요.']),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"오늘은 모둠 움직임 발표회예요. 모둠마다 1분씩 보여 주고, 보는 모둠은 콕 집은 말을 하나씩 해 줘요." 다섯 모둠이면 발표에 5분, 말 나누기에 5분 남짓이다. 발표 차례와 보는 사람의 약속을 먼저 정한다.',
        student: '보는 사람의 약속 세 가지를 따라 말해요.',
        demo: { tool: 'timer', options: { title: '발표회 차례', cards: ['모둠 연습', '발표회', '소감 나누기'] }, sequence: [{ order: ['모둠 연습', '발표회', '소감 나누기'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 모둠 움직임 짜기와 연습', minutes: 13, tool: 'pattern',
            teacher: '모둠 친구들의 8박 움직임에서 한 동작씩 모아 모둠 움직임 줄을 짠다. "모두 같이 할 수 있는 동작인가요?" 짠 줄로 두 번 연습한다. 한 사람 동작만 고집하는 모둠에는 한 사람에 한 동작씩 넣자고 한다.',
            task: '모둠 친구들의 동작을 모아 모둠 움직임 줄을 짜고 함께 연습해요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '모둠 움직임 줄의 빈칸을 채워 보세요. 네 동작이 한 묶음이에요.', toolOptions: { seq: ['높게 손뼉', '낮게 웅크리기', '빙글 돌기', '팔 물결', '높게 손뼉', null, '빙글 돌기', null], palette: ['높게 손뼉', '낮게 웅크리기', '빙글 돌기', '팔 물결'] }, target: { fill: ['낮게 웅크리기', '팔 물결'] }, difficulty: 0.2,
                hints: ['네 칸씩 끊어 모둠이 함께 몸으로 따라 해 봐요.', '두 번째 묶음을 첫 묶음과 칸마다 견주어 봐요.', '높게 손뼉, 낮게 웅크리기, 빙글 돌기, 팔 물결이 한 묶음이에요.'] },
              { prompt: '모둠 동작 카드로 여덟 칸 모둠 움직임 줄을 만들어 보세요. 네 칸 묶음을 되풀이해요.', toolOptions: { mode: 'make', palette: ['높게 손뼉', '낮게 웅크리기', '빙글 돌기', '팔 물결'], length: 8 }, target: { rule: 'repeat', period: 4, uses: 4 }, difficulty: 0.25,
                hints: ['모둠 친구 한 사람에 한 동작씩 골라 네 칸 묶음을 만들어요.', '네 동작이 모두 다른지, 두 번째 묶음도 똑같은지 살펴봐요.', '예: 팔 물결, 높게 손뼉, 빙글 돌기, 낮게 웅크리기를 두 번 되풀이해요.'],
                levels: { easy: { prompt: '모둠 동작 카드로 여덟 칸 모둠 움직임 줄을 만들어 보세요. 두 칸 묶음을 되풀이해요.', target: { rule: 'repeat', period: 2, uses: 2 } } } },
              { prompt: '모둠이 함께 짠 움직임 줄을 두 번 연습했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 움직임 발표회 (몸 활동)', minutes: 14, tool: 'emotion',
            teacher: '모둠마다 1분씩 발표하고, 다음 모둠이 콕 집은 말을 한 가지 해 준다. 발표를 망설이는 모둠에는 "보여 주어야 친구들이 우리 마음을 알아봐요"라고 북돋운다. 발표가 끝나면 다른 모둠 발표에서 가장 기억에 남는 점을 고른다.',
            task: '모둠 움직임을 발표하고, 다른 모둠에게 콕 집은 말을 해 줘요.',
            levels: CARD_LV,
            items: [
              { prompt: '우리 모둠 발표를 하고, 다른 모둠 발표를 끝까지 보며 콕 집은 말을 했으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '발표 차례가 왔는데 우리 모둠 친구가 동작을 잊었어요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '우리 모둠', situation: '발표 중간에 지호가 다음 동작을 잊어 멈춰 섰어요.', choices: [
                { id: 'blame', text: '"너 때문에 망했어!" 하고 말해요', result: '지호가 울먹이고 발표가 멈춰요.', mood: '속상함', why: '탓하면 모둠 모두가 더 힘들어져요.' },
                { id: 'help', text: '옆에서 동작을 크게 보여 주며 이어 가요', result: '지호가 보고 따라 하며 끝까지 함께 해요.', mood: '뿌듯함' },
                { id: 'stopall', text: '모두 멈추고 처음부터 다시 해요', result: '시간이 모자라 끝까지 못 보여 줘요.', mood: '아쉬움', why: '멈추지 말고 이어 가며 도와줘요.' }] }, target: { choice: 'help' }, difficulty: 0.1 },
              { prompt: '다른 모둠에게 해 줄 콕 집은 말만 골라 보세요.', toolOptions: { mode: 'pick', basket: '콕 집은 말', cards: ['다 같이 높이 뛸 때 불꽃놀이 같았어요', '빙글 도는 빠르기가 꼭 맞았어요', '그냥 그랬어요', '우리 모둠이 더 잘했어요'] },
                target: { pick: ['다 같이 높이 뛸 때 불꽃놀이 같았어요', '빙글 도는 빠르기가 꼭 맞았어요'] }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"25차시부터 우리는 마음을 몸으로 나타내고, 높이와 빠르기를 바꾸고, 친구 말을 듣고 고쳐 보았어요." 칠판의 세 칸을 짚으며 함께 말한다. 마음 막대는 정답이 없으니 솔직하게 고르게 한다. 다음 시간부터 내가 궁금한 것을 스스로 탐구한다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '친구에게 할 말', slots: ['콕 집은 말', '두루뭉술한 말'], cards: ['팔 물결이 진짜 파도 같았어요', '좋았어요'] }, prompt: '다른 모둠에게 할 말을 나누어 보세요.', target: { sort: { '콕 집은 말': ['팔 물결이 진짜 파도 같았어요'], '두루뭉술한 말': ['좋았어요'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '발표 중 친구가 동작을 잊으면?', options: ['옆에서 크게 보여 주며 이어 가요', '친구를 탓해요'], answer: 0, difficulty: 0.05, explain: '모둠은 함께 도와 끝까지 해요.' },
          { type: 'tool', tool: 'emotion', options: { mode: 'scale', steps: 3, situation: '오늘 모둠과 함께 움직임 발표회를 했어요.', feeling: '뿌듯함', ask: '발표를 마친 마음은 얼마나 뿌듯한가요?' }, prompt: '오늘 발표한 내 마음을 솔직하게 골라 보세요. 정답은 없어요.', target: { level: 'any' }, difficulty: 0.05 },
        ],
      },
    ],
    worksheet: {
      title: '움직임 발표회',
      items: [
        { type: 'figure', wide: true, prompt: '빈칸에 들어갈 동작을 쓰세요.', tool: 'pattern', figures: [{ options: { seq: ['높게 손뼉', '낮게 웅크리기', '빙글 돌기', '팔 물결', '높게 손뼉', null, '빙글 돌기', null] }, caption: '' }], answer: '낮게 웅크리기, 팔 물결' },
        { type: 'table', prompt: '우리 모둠 움직임을 쓰세요.', columns: ['1', '2', '3', '4'], rows: 1 },
        { type: 'table', prompt: '다른 모둠 발표에서 기억에 남는 점을 쓰세요.', columns: ['모둠', '기억에 남는 점'], rows: 2 },
        { type: 'draw', prompt: '우리 모둠이 발표하는 모습을 그려 보세요.' },
      ],
      easy: {
        note: '보는 약속: 끝까지 보기, 손뼉, 콕 집은 말!',
        items: [
          { type: 'choice', prompt: '다른 모둠이 발표할 때 나는?', options: ['끝까지 바라봐요', '떠들어요'], answer: '끝까지 바라봐요' },
          { type: 'choice', prompt: '콕 집은 말에 ○ 하세요.', options: ['높이 뛸 때 불꽃 같았어요', '그냥 그랬어요'], answer: '높이 뛸 때 불꽃 같았어요' },
          { type: 'draw', prompt: '발표회에서 가장 재미있었던 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '모둠 움직임 줄은 두 칸 묶음으로 만들어요. 발표 때는 친구 동작을 보고 따라 해도 돼요.',
      base: '네 칸 묶음 모둠 움직임 줄을 만들고 1분 동안 발표해요.',
      challenge: '발표 때 모둠이 한 번은 높이, 한 번은 빠르기를 다 같이 바꾸는 순간을 넣어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 발표를 부끄러워한다 → 모둠이 함께하므로 혼자 서지 않는다는 것을 알려 주고, 앞줄 대신 옆줄에 서도 된다고 한다. ② 보는 모둠이 떠든다 → 보는 약속을 칠판에 붙이고, 콕 집은 말을 준비하는 역할을 준다. ③ 시간이 넘친다 → 모둠당 1분은 타이머로 재고, 말 나누기는 한 모둠에 한 마디로 한다. 마음 막대(뿌듯함)는 정답이 없는 솔직한 자기 평가다.',
  }));

  // ───────────────────────── 37~40차시: 겪은 일에서 주제와 물음 정하기 ─────────────────────────

  lessons.push(L(37, {
    title: '겪은 일 떠올려 더 알고 싶은 주제 하나 고르기',
    objective: '요즘 겪은 일 가운데 더 알고 싶은 것을 하나 골라 내 주제로 정하고, 고른 까닭을 한 문장으로 말할 수 있다.',
    illustration: ART('a child sitting under a tree remembering paper thought bubbles of an earthworm after rain, a squirrel with an acorn and a line of ants, one bubble glowing', '내가 더 알고 싶은 것', [
      { motif: 'tree', x: 100, y: 200 }, { motif: 'leaf', x: 380, y: 96, s: 0.7 }, { motif: 'flower', x: 380, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"선생님은 주말에 공원에서 다람쥐가 도토리를 땅에 묻는 것을 봤어요. 그때 \'왜 묻을까?\' 하고 궁금했어요." 잠시 기다린 뒤 묻는다. "알아볼 주제는 누가 정할까요?" "선생님이요"라는 대답이 나오면 "오늘은 여러분이 겪은 일에서 스스로 골라요. 내가 궁금해야 끝까지 알아보고 싶거든요."라고 짚는다. 시연 단추로 겪은 일 카드와 궁금한 것 카드가 나뉘는 모습을 보여 준다.',
        student: '요즘 보거나 해 본 일 가운데 "어? 왜 그럴까?" 하고 생각한 일을 하나 떠올려 봐요.',
        demo: { tool: 'mindmap', options: { topic: '선생님의 주말', slots: ['겪은 일', '더 알고 싶은 것'], cards: ['다람쥐가 도토리를 묻었어요', '다람쥐는 왜 도토리를 묻을까?'], shuffle: false }, sequence: [{ sort: { '겪은 일': ['다람쥐가 도토리를 묻었어요'], '더 알고 싶은 것': ['다람쥐는 왜 도토리를 묻을까?'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 겪은 일과 더 알고 싶은 것 나누기', minutes: 12, tool: 'mindmap',
            teacher: '카드를 하나씩 소리 내어 읽는다. "이 말은 이미 본 일을 말했나요, 아직 모르는 것을 물었나요?" 끝에 물음표가 있는지 손가락으로 짚게 한다. "지렁이가 나왔어요"를 궁금한 것에 넣은 학생에게 "이 말을 듣고 무엇이 더 알고 싶어졌어요?"라고 되묻는다.',
            task: '민지가 겪은 일을 읽고, 겪은 일과 그 일로 더 알고 싶어진 것을 나누거나 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '민지가 겪은 일과 더 알고 싶은 것을 나누어 보세요.', toolOptions: { topic: '민지의 한 주', slots: ['겪은 일', '더 알고 싶은 것'], cards: ['비 온 뒤 운동장에 지렁이가 나왔어요', '지렁이는 왜 비 온 뒤에 나올까?', '급식에 가지 반찬이 나왔어요', '가지는 어떻게 자랄까?'] },
                target: { sort: { '겪은 일': ['비 온 뒤 운동장에 지렁이가 나왔어요', '급식에 가지 반찬이 나왔어요'], '더 알고 싶은 것': ['지렁이는 왜 비 온 뒤에 나올까?', '가지는 어떻게 자랄까?'] } }, difficulty: 0.1,
                hints: ['이미 본 일을 말한 카드인지, 아직 몰라서 묻는 카드인지 살펴봐요.', '끝에 물음표가 있는 카드는 아직 모르는 것을 묻고 있어요. 다시 견주어 봐요.', '\'나왔어요\'로 끝나는 두 카드는 겪은 일, \'~까?\'로 끝나는 두 카드는 더 알고 싶은 것이에요.'],
                levels: { challenge: { prompt: '민지가 겪은 일 세 가지와 더 알고 싶은 것 세 가지를 나누어 보세요.', toolOptions: { cards: ['비 온 뒤 운동장에 지렁이가 나왔어요', '지렁이는 왜 비 온 뒤에 나올까?', '급식에 가지 반찬이 나왔어요', '가지는 어떻게 자랄까?', '할머니 댁에서 닭을 봤어요', '닭은 하루에 알을 몇 개 낳을까?'] },
                  target: { sort: { '겪은 일': ['비 온 뒤 운동장에 지렁이가 나왔어요', '급식에 가지 반찬이 나왔어요', '할머니 댁에서 닭을 봤어요'], '더 알고 싶은 것': ['지렁이는 왜 비 온 뒤에 나올까?', '가지는 어떻게 자랄까?', '닭은 하루에 알을 몇 개 낳을까?'] } } } } },
              { prompt: '겪은 일마다 그 일로 더 알고 싶어진 것을 이어 보세요.', toolOptions: { mode: 'match', topic: '겪은 일에서 생긴 물음', slots: [{ id: 's1', label: '놀이터에서 개미 줄을 봤어요' }, { id: 's2', label: '밤하늘에 둥근 달을 봤어요' }, { id: 's3', label: '감기에 걸려 병원에 갔어요' }], cards: ['개미는 어디로 가는 걸까?', '달은 왜 모양이 바뀔까?', '감기는 왜 걸릴까?'] },
                target: { match: { s1: '개미는 어디로 가는 걸까?', s2: '달은 왜 모양이 바뀔까?', s3: '감기는 왜 걸릴까?' } }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['개미는 어디로 가는 걸까?', '달은 왜 모양이 바뀔까?', '감기는 왜 걸릴까?', '눈은 왜 하얄까?'] } } } },
              { prompt: '서아는 바닷가에 다녀왔어요. 서아가 더 알고 싶은 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '더 알고 싶은 것', cards: ['조개는 어떻게 숨을 쉴까?', '바닷물은 왜 짤까?', '바닷가에서 모래성을 쌓았어요.', '파도 소리가 컸어요.'] },
                target: { pick: ['조개는 어떻게 숨을 쉴까?', '바닷물은 왜 짤까?'] }, difficulty: 0.15,
                hints: ['서아가 이미 한 일과 아직 모르는 것을 나누어 생각해요.', '모래성과 파도 소리 카드는 서아가 이미 겪은 일이에요.', '\'어떻게 숨을 쉴까?\', \'왜 짤까?\'처럼 묻는 카드 두 장을 골라요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 내 주제 정해 짝에게 말하기 (짝 활동)', minutes: 14, tool: 'emotion',
            teacher: '"주제를 고를 때 무엇이 막막해요?" 준호 이야기를 함께 읽는다. 짝의 주제를 그대로 따라 고른 학생에게 "그게 정말 내가 궁금한 거예요?"라고 묻는다. 짝 활동은 한 사람이 1분씩 말하고, 듣는 짝은 "왜 그게 궁금해?" 하고 한 번 묻는다. 고른 주제는 주제 쪽지에 써서 이름표 옆에 붙인다.',
            task: '주제를 고르는 방법을 알아보고, 내가 겪은 일에서 주제를 하나 골라 까닭과 함께 짝에게 말해요.',
            levels: CARD_LV,
            items: [
              { prompt: '준호는 무엇을 알아볼지 몰라 막막해요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '준호', situation: '선생님이 "더 알고 싶은 것을 하나 골라요." 하셨는데, 준호는 무엇을 고를지 몰라요.', choices: [
                { id: 'wait', text: '선생님이 정해 주실 때까지 기다려요', result: '시간이 다 가도록 준호 주제 쪽지가 비어 있어요.', mood: '걱정', why: '알아볼 주제는 내가 겪은 일에서 스스로 골라요.' },
                { id: 'recall', text: '요즘 겪은 일 가운데 궁금했던 것을 떠올려요', result: '어제 본 고양이 수염이 떠올라 주제를 정했어요.', mood: '기쁨' },
                { id: 'copy', text: '짝이 고른 것을 그대로 따라 써요', result: '알아보는 내내 별로 궁금하지 않아요.', mood: '속상함', why: '내가 궁금한 것이어야 끝까지 알아보고 싶어요.' }] }, target: { choice: 'recall' }, difficulty: 0.1 },
              { prompt: '친구들이 주제를 고른 까닭이에요. 겪은 일을 들어 말한 까닭만 골라 보세요.', toolOptions: { mode: 'pick', basket: '겪은 일을 든 까닭', cards: ['개미가 과자를 줄지어 나르는 걸 보고 궁금해졌어요', '할머니 댁 강아지가 꼬리를 흔들어서 더 알고 싶어요', '그냥요', '짝이 골라서요'] },
                target: { pick: ['개미가 과자를 줄지어 나르는 걸 보고 궁금해졌어요', '할머니 댁 강아지가 꼬리를 흔들어서 더 알고 싶어요'] }, difficulty: 0.15,
                hints: ['까닭 속에 그 친구가 보거나 해 본 일이 들어 있는지 살펴봐요.', '\'그냥요\', \'짝이 골라서요\'에는 겪은 일이 없어요.', '개미를 본 일, 강아지를 본 일이 들어 있는 두 카드를 골라요.'] },
              { prompt: '내가 겪은 일에서 더 알고 싶은 주제를 하나 골라 까닭과 함께 짝에게 말했으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 고른 주제를 주제 쪽지에 써서 붙였나요?" 두세 명이 "나는 ○○을 보고 △△이 궁금해졌어요."로 말하게 한다. 아직 못 고른 학생은 집에 가서 겪은 일을 하나 더 떠올려 오게 한다. 다음 시간에는 고른 주제로 물음 세 개를 만든다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '하준이의 주말', slots: ['겪은 일', '더 알고 싶은 것'], cards: ['동물원에서 기린을 봤어요', '기린은 목이 왜 길까?', '케이크에 초를 꽂았어요', '초는 왜 녹을까?'] }, prompt: '하준이가 겪은 일과 더 알고 싶은 것을 나누어 보세요.', target: { sort: { '겪은 일': ['동물원에서 기린을 봤어요', '케이크에 초를 꽂았어요'], '더 알고 싶은 것': ['기린은 목이 왜 길까?', '초는 왜 녹을까?'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '알아볼 주제는 어떻게 정할까요?', options: ['내가 겪은 일에서 궁금한 것을 골라요', '선생님이 정해 줄 때까지 기다려요', '짝 주제를 따라 해요'], answer: 0, difficulty: 0.1, explain: '내가 겪은 일에서 궁금한 것을 고르면 끝까지 알아보고 싶어져요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '내가 더 알고 싶은 것',
      items: [
        { type: 'table', prompt: '요즘 겪은 일과 그 일로 더 알고 싶어진 것을 쓰세요.', columns: ['겪은 일', '더 알고 싶은 것'], rows: 2 },
        { type: 'choice', prompt: '더 알고 싶은 것을 물은 말에 ○ 하세요.', options: ['공원에서 비둘기를 봤어요.', '비둘기는 어디에서 잘까?', '비둘기가 많았어요.'], answer: '비둘기는 어디에서 잘까?' },
        { type: 'choice', prompt: '알아볼 주제는 누가 정할까요?', options: ['내가 겪은 일에서 스스로 골라요', '선생님만 정해요'], answer: '내가 겪은 일에서 스스로 골라요' },
        { type: 'short', prompt: '내 주제와 고른 까닭을 쓰세요. (나는 ___을 보고 ___이 궁금해졌어요.)' },
        { type: 'draw', prompt: '내 주제가 생긴 그때의 모습을 그려 보세요.' },
      ],
      easy: {
        note: '보거나 해 본 일 → 왜 그럴까?',
        items: [
          { type: 'choice', prompt: '궁금한 것을 물은 말에 ○ 하세요.', options: ['개미는 어디로 갈까?', '개미를 봤어요.'], answer: '개미는 어디로 갈까?' },
          { type: 'short', prompt: '내가 더 알고 싶은 것을 한 가지 쓰세요.' },
          { type: 'draw', prompt: '더 알고 싶은 것을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 놓으면 초록 테두리가 생겨요. 주제가 떠오르지 않으면 선생님이 보여 주는 사진 세 장 가운데 겪어 본 것을 골라요.',
      base: '모두 놓은 뒤 확인을 눌러요. 내 주제와 까닭을 짝에게 한 문장으로 말해요.',
      challenge: '겪은 일 세 가지와 물음 세 가지를 나누고, 이을 짝에 상관없는 물음 카드가 섞여 있어요. 내 주제를 고른 까닭을 두 문장으로 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 주제는 선생님이 정해 주는 것이라고 여긴다 → 교사의 겪은 일을 먼저 보여 주고, 주제 쪽지에 학생이 스스로 쓰게 한다. ② 겪은 일과 궁금한 것을 구별하지 못한다 → 끝말(~어요 / ~까?)을 짚는다. ③ 짝 주제를 따라 고른다 → 같은 주제여도 괜찮지만 내가 겪은 일과 까닭은 따로 말하게 한다. 주제 쪽지는 47차시 발표까지 쓰므로 모아 둔다.',
  }));

  lessons.push(L(38, {
    title: '\'무엇·어디·왜\'로 내 주제에 물음 세 개 만들기',
    objective: '고른 주제에 대해 \'무엇\', \'어디\', \'왜\'를 넣은 물음을 세 개 만들어 쓸 수 있다.',
    illustration: ART('three paper question cards labeled what, where and why floating above a line of paper ants carrying crumbs to an anthill', '무엇? 어디? 왜?', [
      { motif: 'hills', y: 214 }, { motif: 'flower', x: 90, y: 226 }, { motif: 'star', x: 380, y: 92, s: 0.6 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"\'개미\'를 주제로 고른 친구가 있어요. 개미에 대해 무엇을 물어볼 수 있을까요?" 학생 말을 칠판에 적는다. "\'무엇을\', \'어디에\', \'왜\'를 넣으면 물음이 여러 가지로 생겨요." 세 낱말 카드를 칠판에 붙이고, 시연 단추로 물음 카드가 묻는 것과 이어지는 모습을 보여 준다.',
        student: '37차시에 고른 내 주제 쪽지를 책상 위에 꺼내 놓아요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '무엇을 묻나요?', slots: [{ id: 's1', label: '개미는 무엇을 먹을까?' }], cards: ['먹이가 궁금해요'], shuffle: false }, sequence: [{ match: { s1: '먹이가 궁금해요' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 물음이 묻는 것 알아보기', minutes: 12, tool: 'mindmap',
            teacher: '"\'무엇을\'이 들어가면 무엇이 궁금한 걸까요? \'어디에\'는요? \'왜\'는요?" 물음 속 묻는 말에 동그라미를 치게 한다. "고양이는 왜 밤에 눈이 빛날까?"를 개미 물음에 넣은 학생에게 "이 물음의 주인공은 누구예요?"라고 묻는다.',
            task: '물음 속 묻는 말을 찾아 무엇이 궁금한지 잇고, 한 주제에 맞는 물음을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '물음마다 무엇이 궁금한지 이어 보세요.', toolOptions: { mode: 'match', topic: '무엇을 묻나요?', slots: [{ id: 's1', label: '개미는 무엇을 먹을까?' }, { id: 's2', label: '개미집은 어디에 있을까?' }, { id: 's3', label: '개미는 왜 줄지어 다닐까?' }], cards: ['먹이가 궁금해요', '사는 곳이 궁금해요', '까닭이 궁금해요'] },
                target: { match: { s1: '먹이가 궁금해요', s2: '사는 곳이 궁금해요', s3: '까닭이 궁금해요' } }, difficulty: 0.1,
                hints: ['물음 속 \'무엇\', \'어디\', \'왜\'를 손가락으로 짚어 봐요.', '\'어디\'는 곳을, \'왜\'는 까닭을 물어요. 다시 견주어 봐요.', '무엇을 먹을까는 먹이, 어디에 있을까는 사는 곳, 왜 줄지어 다닐까는 까닭이에요.'] },
              { prompt: '개미에 대한 물음과 다른 것에 대한 물음을 나누어 보세요.', toolOptions: { topic: '주제는 개미', slots: ['개미에 대한 물음', '다른 것에 대한 물음'], cards: ['개미는 다리가 몇 개일까?', '개미는 겨울에 어디에 있을까?', '고양이는 왜 밤에 눈이 빛날까?', '비는 어디에서 올까?'] },
                target: { sort: { '개미에 대한 물음': ['개미는 다리가 몇 개일까?', '개미는 겨울에 어디에 있을까?'], '다른 것에 대한 물음': ['고양이는 왜 밤에 눈이 빛날까?', '비는 어디에서 올까?'] } }, difficulty: 0.15,
                levels: { challenge: { prompt: '개미에 대한 물음 세 개와 다른 것에 대한 물음 세 개를 나누어 보세요.', toolOptions: { cards: ['개미는 다리가 몇 개일까?', '개미는 겨울에 어디에 있을까?', '개미는 무엇을 옮길까?', '고양이는 왜 밤에 눈이 빛날까?', '비는 어디에서 올까?', '해바라기는 얼마나 클까?'] },
                  target: { sort: { '개미에 대한 물음': ['개미는 다리가 몇 개일까?', '개미는 겨울에 어디에 있을까?', '개미는 무엇을 옮길까?'], '다른 것에 대한 물음': ['고양이는 왜 밤에 눈이 빛날까?', '비는 어디에서 올까?', '해바라기는 얼마나 클까?'] } } } } },
              { prompt: '\'달팽이\'가 주제예요. 달팽이에 대한 물음 세 개만 골라 보세요.', toolOptions: { mode: 'pick', basket: '달팽이 물음', cards: ['달팽이는 무엇을 먹을까?', '달팽이는 어디에서 잘까?', '달팽이는 왜 껍데기가 있을까?', '달팽이를 봤어요.', '나는 달팽이가 좋아요.'] },
                target: { pick: ['달팽이는 무엇을 먹을까?', '달팽이는 어디에서 잘까?', '달팽이는 왜 껍데기가 있을까?'] }, difficulty: 0.15,
                hints: ['물음표가 있는지, 주제가 달팽이인지 두 가지를 살펴봐요.', '\'봤어요\', \'좋아요\'로 끝나는 카드는 묻는 말이 아니에요.', '무엇을 먹을까, 어디에서 잘까, 왜 껍데기가 있을까 세 카드를 골라요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 내 주제로 물음 세 개 쓰기', minutes: 15, tool: 'mindmap',
            teacher: '"다람쥐 물음을 \'무엇\', \'어디\', \'왜\' 가지에 나누어 보고, 내 주제로도 세 가지를 하나씩 만들어요." 물음 쪽지 세 장을 나누어 준다. 세 물음이 모두 \'무엇\'인 학생에게 "이번에는 \'어디\'를 넣어 볼까요?"라고 권한다. 다 쓴 학생은 짝과 쪽지를 바꾸어 물음표가 있는지 봐 준다.',
            task: '묻는 말에 따라 물음을 나누어 보고, 내 주제로 무엇·어디·왜 물음을 하나씩 써요.',
            levels: CARD_LV,
            items: [
              { prompt: '다람쥐 물음을 묻는 말에 따라 나누어 보세요.', toolOptions: { topic: '다람쥐 물음', slots: ['무엇', '어디', '왜'], cards: ['다람쥐는 무엇을 먹을까?', '다람쥐는 어디에서 잘까?', '다람쥐는 왜 도토리를 묻을까?', '다람쥐는 무엇으로 집을 꾸밀까?'] },
                target: { sort: { 무엇: ['다람쥐는 무엇을 먹을까?', '다람쥐는 무엇으로 집을 꾸밀까?'], 어디: ['다람쥐는 어디에서 잘까?'], 왜: ['다람쥐는 왜 도토리를 묻을까?'] } }, difficulty: 0.15,
                hints: ['카드마다 \'무엇\', \'어디\', \'왜\' 가운데 어느 말이 들어 있는지 찾아요.', '\'무엇\'이 들어간 카드는 두 장이에요. 다시 찾아봐요.', '먹을까와 집을 꾸밀까는 무엇, 잘까는 어디, 도토리를 묻을까는 왜 가지예요.'] },
              { prompt: '내 주제로 무엇·어디·왜 물음을 하나씩, 세 장의 물음 쪽지에 썼으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '짝과 물음 쪽지를 바꾸어 읽고, 세 물음 모두에 물음표가 있는지 서로 봐 주었으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"내 물음 세 개 가운데 가장 궁금한 것 하나를 읽어 볼 사람?" 세 명쯤 읽게 하고, 듣는 학생은 그 물음에 들어간 묻는 말을 손가락으로 표시한다. 물음 쪽지는 주제 쪽지와 함께 모아 둔다. 다음 시간에는 모둠 친구의 물음과 견주어 본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '무엇을 묻나요?', slots: [{ id: 's1', label: '거미는 무엇을 먹을까?' }, { id: 's2', label: '거미는 어디에 줄을 칠까?' }], cards: ['먹이가 궁금해요', '줄을 치는 곳이 궁금해요'] }, prompt: '거미 물음마다 무엇이 궁금한지 이어 보세요.', target: { match: { s1: '먹이가 궁금해요', s2: '줄을 치는 곳이 궁금해요' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '\'왜\'를 넣어 까닭을 묻는 물음은 무엇일까요?', options: ['고양이는 왜 수염이 있을까?', '고양이 수염은 몇 개일까?', '고양이는 어디에서 잘까?'], answer: 0, difficulty: 0.1, explain: '\'왜\'가 들어가면 그렇게 된 까닭을 물어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '내 주제 물음 세 개',
      items: [
        { type: 'blank', prompt: '빈칸에 \'무엇\', \'어디\', \'왜\' 가운데 알맞은 말을 쓰세요.', text: '토끼는 ___에서 잘까?', answer: '어디' },
        { type: 'choice', prompt: '\'토끼\'가 주제일 때 주제에 맞는 물음에 ○ 하세요.', options: ['토끼는 무엇을 먹을까?', '비는 어디에서 올까?', '토끼를 봤어요.'], answer: '토끼는 무엇을 먹을까?' },
        { type: 'table', prompt: '내 주제로 물음 세 개를 쓰세요.', cells: [['무엇', ''], ['어디', ''], ['왜', '']], columns: ['묻는 말', '내 물음'] },
        { type: 'check', prompt: '내 물음을 살펴보고 맞으면 표시하세요.', options: ['세 물음 모두 내 주제에 대한 것이에요', '세 물음 모두 끝에 물음표가 있어요'] },
      ],
      easy: {
        note: '무엇? 어디? 왜? 하나씩 넣어 봐요.',
        items: [
          { type: 'choice', prompt: '\'어디\'가 들어간 물음에 ○ 하세요.', options: ['개미집은 어디에 있을까?', '개미는 무엇을 먹을까?'], answer: '개미집은 어디에 있을까?' },
          { type: 'short', prompt: '내 주제로 물음을 하나 쓰세요.' },
          { type: 'draw', prompt: '내 주제를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 물음 쪽지에 \'___은 무엇을 ___?\'처럼 앞부분이 쓰인 틀 쪽지를 써요.',
      base: '모두 놓은 뒤 확인을 눌러요. 무엇·어디·왜 물음을 하나씩 써요.',
      challenge: '개미 물음과 다른 물음이 세 장씩 섞여 있어요. 내 주제로 \'어떻게\'를 넣은 물음을 하나 더 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 세 물음이 모두 같은 묻는 말이다 → 무엇·어디·왜 칸이 나뉜 표 활동지를 쓴다. ② 주제에서 벗어난 물음을 쓴다 → 물음 속 주인공(주제 낱말)에 밑줄을 긋게 한다. ③ 물음 대신 아는 것을 쓴다(개미는 작아요) → 끝을 \'~까?\'로 바꾸게 한다. 쓰기가 어려운 학생은 말로 하고 교사나 짝이 받아 적어 준다.',
  }));

  lessons.push(L(39, {
    title: '교실 어항을 보고 모둠 물음을 모아 겹친 물음 합치기',
    objective: '모둠 친구들이 만든 물음을 모아 같은 것을 묻는 물음끼리 묶고, 주제에 맞는 모둠 물음 세 개를 고를 수 있다.',
    illustration: ART('four children around a round paper fishbowl with two orange fish, sticking paper question notes on a board and grouping matching notes together', '같은 물음은 하나로', [
      { motif: 'wave', x: 240, y: 214 }, { motif: 'star', x: 90, y: 90, s: 0.6 }, { motif: 'flower', x: 400, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"우리 반 어항을 보고 모둠 친구 네 명이 물음을 하나씩 썼더니 \'물고기는 무엇을 먹을까?\'와 \'물고기 밥은 무엇일까?\'가 나왔어요. 두 물음은 다른 걸 묻고 있나요?" 잠시 기다린다. "같은 것을 묻는 물음은 하나로 합치면 모둠 물음이 깔끔해져요." 시연 단추로 두 물음이 같은 가지에 모이는 모습을 보여 준다.',
        student: '교실 어항(또는 사진)을 보고 궁금한 것을 하나 떠올려 봐요.',
        demo: { tool: 'mindmap', options: { topic: '어항 물고기', slots: ['먹이를 묻는 물음', '잠을 묻는 물음'], cards: ['물고기는 무엇을 먹을까?', '물고기 밥은 무엇일까?'], shuffle: false }, sequence: [{ sort: { '먹이를 묻는 물음': ['물고기는 무엇을 먹을까?', '물고기 밥은 무엇일까?'], '잠을 묻는 물음': [] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 같은 것을 묻는 물음끼리 묶기', minutes: 12, tool: 'mindmap',
            teacher: '"이 두 물음은 말은 다르지만 같은 것을 묻고 있나요?" 물음 속 궁금한 것에 밑줄을 긋게 한다. 오늘 급식 물음을 어항 물음에 넣은 학생에게 "이 물음을 어항을 보고 알 수 있을까요?"라고 묻는다.',
            task: '모둠 친구들의 어항 물음을 읽고 같은 것을 묻는 물음끼리 묶거나, 주제에 맞는 물음을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '모둠 친구들의 물음을 같은 것을 묻는 물음끼리 묶어 보세요.', toolOptions: { topic: '어항 물고기', slots: ['먹이를 묻는 물음', '잠을 묻는 물음'], cards: ['물고기는 무엇을 먹을까?', '물고기 밥은 무엇으로 만들까?', '물고기는 언제 잘까?', '물고기는 눈을 뜨고 잘까?'] },
                target: { sort: { '먹이를 묻는 물음': ['물고기는 무엇을 먹을까?', '물고기 밥은 무엇으로 만들까?'], '잠을 묻는 물음': ['물고기는 언제 잘까?', '물고기는 눈을 뜨고 잘까?'] } }, difficulty: 0.15,
                levels: { challenge: { prompt: '어항 물음을 묶어 보세요. 먹이도 잠도 아닌 물음은 그대로 두어요.', toolOptions: { cards: ['물고기는 무엇을 먹을까?', '물고기 밥은 무엇으로 만들까?', '물고기는 언제 잘까?', '물고기는 눈을 뜨고 잘까?', '물고기는 왜 지느러미가 있을까?'] } } } },
              { prompt: '어항을 주제로 한 물음만 골라 보세요.', toolOptions: { mode: 'pick', basket: '어항 물음', cards: ['어항 물은 언제 갈아 줄까?', '어항 물고기는 몇 마리일까?', '오늘 급식은 무엇일까?', '내일 비가 올까?'] },
                target: { pick: ['어항 물은 언제 갈아 줄까?', '어항 물고기는 몇 마리일까?'] }, difficulty: 0.1,
                hints: ['물음마다 어항이나 어항 물고기에 대해 묻는지 살펴봐요.', '급식과 날씨는 어항과 다른 주제예요.', '\'어항 물\', \'어항 물고기\'가 들어간 두 카드를 골라요.'] },
              { prompt: '모둠 물음을 정하는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', slots: ['처음', '가운데', '끝'], cards: ['저마다 만든 물음을 읽어요', '같은 것을 묻는 물음을 하나로 합쳐요', '모둠 물음 세 개를 골라 써요'] },
                target: { order: ['저마다 만든 물음을 읽어요', '같은 것을 묻는 물음을 하나로 합쳐요', '모둠 물음 세 개를 골라 써요'] }, difficulty: 0.1,
                hints: ['합치려면 먼저 무엇이 있어야 할지 생각해요.', '물음을 읽어야 같은 물음인지 알 수 있어요.', '읽기 → 합치기 → 세 개 골라 쓰기 차례예요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 모둠 물음 정하기 (모둠 활동)', minutes: 15, tool: 'emotion',
            teacher: '모둠마다 37·38차시에 쓴 물음 쪽지를 책상 가운데에 모은다. "같은 것을 묻는 쪽지는 겹쳐 놓고, 모둠 물음 세 개를 골라 큰 쪽지에 옮겨 써요." 내 물음이 빠져 속상해하는 학생에게 "합친 물음 안에 네 물음도 들어 있어요"라고 말해 준다. 모둠 물음 세 개는 다음 시간 물음판에 붙인다.',
            task: '모둠 친구들과 물음 쪽지를 모아 같은 물음을 합치고, 모둠 물음 세 개를 정해요.',
            levels: CARD_LV,
            items: [
              { prompt: '내 물음이 친구 물음과 같아요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '하준', situation: '하준이의 \'물고기는 언제 잘까?\'와 서아의 \'물고기는 밤에 잘까?\'가 같은 것을 물어요.', choices: [
                { id: 'mine', text: '"내 걸로 해!" 하고 우겨요', result: '서아가 속상해서 말을 안 해요.', mood: '속상함', why: '같은 물음이면 누구 것이든 하나로 합치면 돼요.' },
                { id: 'merge', text: '"같은 물음이네. 하나로 합치자." 하고 말해요', result: '모둠 물음이 깔끔해지고 둘 다 웃어요.', mood: '기쁨' },
                { id: 'throw', text: '내 물음 쪽지를 몰래 버려요', result: '하준이는 내 물음이 없어져 서운해요.', mood: '아쉬움', why: '버리지 말고 합쳐요. 내 물음도 그 안에 들어 있어요.' }] }, target: { choice: 'merge' }, difficulty: 0.1 },
              { prompt: '모둠 친구들과 물음 쪽지를 모아 같은 물음을 겹쳐 놓았으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '모둠 물음 세 개를 골라 큰 쪽지에 옮겨 썼으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"우리 모둠 물음 세 개를 읽어 볼까요?" 모둠마다 한 명이 읽는다. 듣는 모둠에게 "그 모둠 물음 가운데 같은 것을 묻는 물음이 또 있었나요?"라고 묻는다. 다음 시간에는 관심이 비슷한 친구끼리 모여 물음판을 꾸민다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '교실 강낭콩 화분', slots: ['물 주기를 묻는 물음', '꽃을 묻는 물음'], cards: ['강낭콩에 물은 얼마나 줄까?', '물은 며칠마다 줄까?', '강낭콩 꽃은 무슨 색일까?', '꽃은 언제 필까?'] }, prompt: '강낭콩 물음을 같은 것을 묻는 물음끼리 묶어 보세요.', target: { sort: { '물 주기를 묻는 물음': ['강낭콩에 물은 얼마나 줄까?', '물은 며칠마다 줄까?'], '꽃을 묻는 물음': ['강낭콩 꽃은 무슨 색일까?', '꽃은 언제 필까?'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '친구 물음이 내 물음과 같은 것을 물을 때 어떻게 할까요?', options: ['하나로 합쳐요', '내 것만 남겨요', '둘 다 버려요'], answer: 0, difficulty: 0.1, explain: '같은 것을 묻는 물음은 하나로 합치면 모둠 물음이 깔끔해져요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '모둠 물음 모으기',
      items: [
        { type: 'choice', prompt: '\'물고기는 무엇을 먹을까?\'와 같은 것을 묻는 물음에 ○ 하세요.', options: ['물고기 먹이는 무엇일까?', '물고기는 언제 잘까?', '어항은 무엇으로 만들까?'], answer: '물고기 먹이는 무엇일까?' },
        { type: 'choice', prompt: '\'어항\'이 주제일 때 주제에서 벗어난 물음에 ○ 하세요.', options: ['어항 물은 언제 갈아 줄까?', '내일 비가 올까?'], answer: '내일 비가 올까?' },
        { type: 'table', prompt: '우리 모둠 물음 세 개를 쓰세요.', columns: ['번호', '모둠 물음'], cells: [['1', ''], ['2', ''], ['3', '']] },
        { type: 'short', prompt: '합친 물음이 있었다면 어떤 물음끼리 합쳤는지 쓰세요.' },
      ],
      easy: {
        note: '같은 것을 물으면 하나로!',
        items: [
          { type: 'choice', prompt: '같은 것을 묻는 두 물음이면?', options: ['하나로 합쳐요', '싸워요'], answer: '하나로 합쳐요' },
          { type: 'short', prompt: '우리 모둠 물음을 하나 쓰세요.' },
          { type: 'draw', prompt: '교실 어항을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 모둠에서는 같은 물음 쪽지를 찾는 역할을 맡아요.',
      base: '모두 놓은 뒤 확인을 눌러요. 모둠 물음 세 개를 함께 정해요.',
      challenge: '먹이도 잠도 아닌 물음이 하나 섞여 있어 그대로 두어야 해요. 모둠 물음을 정한 까닭을 한 문장으로 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 말이 다르면 다른 물음이라고 여긴다 → 물음 속 궁금한 것(먹이·잠)에 밑줄을 긋고 견주게 한다. ② 내 물음이 빠지면 속상해한다 → 합친 물음 쪽지에 두 사람 이름 첫 글자를 함께 적게 한다. ③ 주제에서 벗어난 물음을 고집한다 → 그 물음은 \'다음 주제 상자\'에 넣어 두자고 한다. 어항이 없으면 사진이나 화분으로 바꾸어도 된다.',
  }));

  lessons.push(L(40, {
    title: '비슷한 관심끼리 모여 모둠 물음판 꾸미기',
    objective: '관심 주제가 비슷한 친구끼리 모여 모둠 주제를 정하고, 주제와 물음 세 개가 보이는 물음판을 함께 꾸밀 수 있다.',
    illustration: ART('a big paper question board with a large circle for the topic and three square question notes, children gluing paper stars and drawings around it', '우리 모둠 물음판', [
      { motif: 'star', x: 100, y: 90, s: 0.7 }, { motif: 'star', x: 380, y: 90, s: 0.6 }, { motif: 'house', x: 110, y: 216, color: 'buttercup' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"고양이, 개구리, 무지개… 우리 반 주제 쪽지를 보니 비슷한 것끼리 모을 수 있겠어요. 어떻게 모을까요?" 두세 명의 생각을 듣는다. "오늘은 관심이 비슷한 친구끼리 모둠을 만들고, 큰 종이에 물음판을 꾸며요." 완성된 물음판 예시(주제 동그라미 하나, 물음 쪽지 세 장)를 보여 준다. 예시는 주제만 다른 것으로 보여 준다.',
        student: '내 주제 쪽지를 들고, 내 주제가 동물·식물·날씨 가운데 어디에 가까운지 생각해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '우리 반 주제', slots: ['동물이 궁금해요', '날씨가 궁금해요'], cards: ['고양이 수염', '무지개'], shuffle: false }, sequence: [{ sort: { '동물이 궁금해요': ['고양이 수염'], '날씨가 궁금해요': ['무지개'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 비슷한 주제끼리 모으기', minutes: 10, tool: 'mindmap',
            teacher: '주제 카드를 하나씩 읽고 "이건 살아 있는 동물인가요, 자라는 식물인가요, 하늘의 날씨인가요?"라고 묻는다. 단풍잎을 날씨에 넣은 학생에게 "단풍잎은 어디에서 자라요?"라고 되묻는다. 칠판의 세 가지 칸 앞에 학생들이 주제 쪽지를 들고 모이게 하여 모둠을 만든다.',
            task: '친구들의 주제 카드를 동물·식물·날씨로 나누어 비슷한 관심끼리 모아요.',
            levels: CARD_LV,
            items: [
              { prompt: '친구들의 주제 카드를 비슷한 것끼리 모아 보세요.', toolOptions: { topic: '우리 반 주제', slots: ['동물이 궁금해요', '식물이 궁금해요', '날씨가 궁금해요'], cards: ['고양이 수염', '해바라기 씨앗', '무지개', '개구리 울음', '단풍잎 색', '천둥 소리'] },
                target: { sort: { '동물이 궁금해요': ['고양이 수염', '개구리 울음'], '식물이 궁금해요': ['해바라기 씨앗', '단풍잎 색'], '날씨가 궁금해요': ['무지개', '천둥 소리'] } }, difficulty: 0.15,
                hints: ['카드마다 동물에 대한 것인지, 식물에 대한 것인지, 하늘과 날씨에 대한 것인지 따져요.', '단풍잎과 해바라기는 땅에서 자라는 식물이에요. 다시 살펴봐요.', '고양이·개구리는 동물, 해바라기·단풍잎은 식물, 무지개·천둥은 날씨예요.'],
                levels: { challenge: { prompt: '친구들의 주제 카드 여덟 장을 비슷한 것끼리 모아 보세요.', toolOptions: { cards: ['고양이 수염', '해바라기 씨앗', '무지개', '개구리 울음', '단풍잎 색', '천둥 소리', '나비 날개', '눈송이 모양'] },
                  target: { sort: { '동물이 궁금해요': ['고양이 수염', '개구리 울음', '나비 날개'], '식물이 궁금해요': ['해바라기 씨앗', '단풍잎 색'], '날씨가 궁금해요': ['무지개', '천둥 소리', '눈송이 모양'] } } } } },
              { prompt: '모둠 주제를 정할 때 어떻게 할까요?', toolOptions: { mode: 'pick', basket: '좋은 방법', cards: ['모둠 친구들의 주제를 모두 들어 봐요', '모두의 주제가 들어가는 큰 주제를 정해요', '목소리가 큰 친구 주제로 정해요', '먼저 말한 사람 주제로 정해요'] },
                target: { pick: ['모둠 친구들의 주제를 모두 들어 봐요', '모두의 주제가 들어가는 큰 주제를 정해요'] }, difficulty: 0.15,
                hints: ['모둠 친구 모두가 함께 알아보고 싶어지는 방법을 골라요.', '목소리 크기나 먼저 말한 차례로 정하면 몇몇 친구 주제가 빠져요.', '모두의 주제를 들어 보고, 모두가 들어가는 큰 주제를 정하는 두 카드예요.'] },
              { prompt: '관심이 비슷한 친구끼리 모둠을 만드는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', slots: ['처음', '가운데', '끝'], cards: ['내 주제 쪽지를 소리 내어 읽어요', '비슷한 주제 칸 앞으로 모여요', '모여서 모둠 주제를 함께 정해요'] },
                target: { order: ['내 주제 쪽지를 소리 내어 읽어요', '비슷한 주제 칸 앞으로 모여요', '모여서 모둠 주제를 함께 정해요'] }, difficulty: 0.1,
                hints: ['모둠 주제를 정하려면 먼저 모둠이 있어야 해요.', '어느 칸으로 갈지 알려면 내 주제를 먼저 읽어야 해요.', '읽기 → 칸 앞으로 모이기 → 모둠 주제 정하기 차례예요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 물음판 꾸미기 (만들기)', minutes: 17, tool: 'collage',
            teacher: '먼저 화면에서 물음판 밑그림을 만들어 본다. "주제는 가운데 큰 동그라미에, 물음 쪽지는 네모 세 장에 써요." 그다음 모둠마다 4절 도화지에 주제 동그라미를 오려 붙이고, 39차시에 정한 물음 세 개를 네모 쪽지에 옮겨 붙인다. 둘레는 주제에 어울리는 그림으로 꾸민다. 한 사람이 다 하려는 모둠에는 "주제 쓰기, 쪽지 붙이기, 꾸미기를 나누어 맡아요"라고 말한다.',
            task: '물음판 밑그림을 화면에서 만들어 보고, 모둠이 함께 큰 종이에 물음판을 꾸며요.',
            levels: COL_LV(['circle', 'square'], ['노랑', '파랑', '분홍', '초록']),
            items: [
              { prompt: '물음판 밑그림을 만들어요. 큰 동그라미 하나(주제)와 네모 세 개(물음 쪽지)를 붙여 보세요.', target: { has: [{ shape: 'circle', size: 'l', n: 1 }, { shape: 'square', n: 3 }] }, difficulty: 0.15,
                hints: ['주제 자리 하나, 물음 쪽지 자리 세 개가 있어야 해요. 모양과 크기를 골라 붙여요.', '동그라미는 크게, 네모는 모두 세 장인지 세어 봐요.', '\'크게\'를 고른 동그라미를 하나 붙이고, 네모를 세 장 붙여요.'],
                levels: { challenge: { prompt: '큰 동그라미 하나(주제), 네모 세 개(물음 쪽지), 별 두 개(꾸미기)를 붙여 보세요.', target: { has: [{ shape: 'circle', size: 'l', n: 1 }, { shape: 'square', n: 3 }, { shape: 'star', n: 2 }] } } } },
              { prompt: '화면에 우리 모둠 물음판처럼 조각을 네 개 이상 붙이고, 큰 종이 물음판에서 해낸 것을 모두 표시해요.', target: { selfCheck: ['맨 가운데에 모둠 주제를 크게 썼어요', '물음 쪽지 세 장에 모두 물음표가 있어요', '모둠 친구 모두가 한 가지씩 맡아 했어요'], minPieces: 4 }, difficulty: 0.1,
                hints: ['큰 종이 물음판을 보며 주제 자리와 물음 쪽지 자리를 화면에도 조각으로 붙여요.', '조각이 네 개 이상인지 세어 보고, 큰 종이를 보며 점검 목록을 하나씩 확인해요.', '동그라미 하나와 네모 세 장을 붙이고, 큰 종이에서 해낸 점검 항목을 표시해요.'] },
              { prompt: '모둠 물음판을 다 꾸며 칠판 옆 게시판에 붙였으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"물음판을 둘러보며 다른 모둠 주제를 하나씩 읽어 봐요." 모둠마다 30초씩 주제와 물음 하나를 소개한다. 물음판은 다음 시간부터 답을 찾을 때 계속 쓰므로 게시판에 붙여 둔다. 다음 시간에는 물음의 답을 어디에서 찾을지 정한다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '옆 반 주제', slots: ['동물이 궁금해요', '날씨가 궁금해요'], cards: ['토끼 귀', '안개', '거북 등딱지', '바람 소리'] }, prompt: '옆 반 친구들의 주제 카드를 비슷한 것끼리 모아 보세요.', target: { sort: { '동물이 궁금해요': ['토끼 귀', '거북 등딱지'], '날씨가 궁금해요': ['안개', '바람 소리'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '모둠 물음판에 꼭 들어가야 할 것은 무엇일까요?', options: ['모둠 주제와 물음 세 개', '모둠 친구들의 집 주소', '좋아하는 색깔'], answer: 0, difficulty: 0.05, explain: '물음판에는 무엇을 알아볼지(주제)와 무엇이 궁금한지(물음)가 보여야 해요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '우리 모둠 물음판',
      items: [
        { type: 'choice', prompt: '\'단풍잎 색\'이 궁금한 친구는 어느 모둠에 가면 좋을까요?', options: ['동물 모둠', '식물 모둠', '날씨 모둠'], answer: '식물 모둠' },
        { type: 'short', prompt: '우리 모둠 주제와 모둠 친구들의 주제를 쓰세요.' },
        { type: 'table', prompt: '물음판을 꾸밀 때 내가 맡은 일에 쓰세요.', columns: ['맡은 일', '한 일'], cells: [['주제 쓰기', ''], ['쪽지 붙이기', ''], ['꾸미기', '']] },
        { type: 'draw', prompt: '우리 모둠 물음판을 작게 그려 보세요.' },
      ],
      easy: {
        note: '동물? 식물? 날씨?',
        items: [
          { type: 'choice', prompt: '\'개구리 울음\'은 어디에 들어갈까요?', options: ['동물', '날씨'], answer: '동물' },
          { type: 'short', prompt: '우리 모둠 주제를 쓰세요.' },
          { type: 'draw', prompt: '물음판 둘레에 그릴 그림을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 밑그림은 동그라미와 네모만 고를 수 있어요. 물음판에서는 쪽지 붙이기를 맡아요.',
      base: '모두 놓은 뒤 확인을 눌러요. 물음판 밑그림을 만들고 모둠과 함께 꾸며요.',
      challenge: '주제 카드가 여덟 장으로 늘어요. 밑그림에 꾸밀 별 두 개를 더 붙여요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 비슷한 관심을 묶지 못한다 → 동물·식물·날씨 세 칸을 칠판에 그림과 함께 붙인다. ② 모둠 주제를 한 사람이 정해 버린다 → 모두의 주제가 들어가는 큰 주제(예: 고양이 + 개구리 → 동물이 사는 모습)를 함께 찾게 한다. ③ 꾸미기에만 시간을 쓴다 → 주제와 물음 쪽지를 먼저 붙이고 남는 시간에 꾸민다. 준비물: 4절 도화지, 색종이 동그라미·네모, 풀, 색연필. 자기 점검은 실제로 해낸 일에만 표시하게 한다.',
  }));

  // ───────────────────────── 41~44차시: 여러 곳에서 답 모으고 물음별로 나누기 ─────────────────────────

  lessons.push(L(41, {
    title: '물음마다 책·사람·직접 보기 가운데 찾을 곳 정하기',
    objective: '물음마다 답을 찾을 곳(직접 살펴보기, 사람에게 묻기, 책과 그림)을 고르고, 한 곳에 답이 없으면 다른 곳에서 찾을 수 있다.',
    illustration: ART('three paper signposts pointing to an open picture book, a smiling grandmother and a magnifying glass over a flower, a child holding a question note at the crossroads', '답은 어디에 있을까?', [
      { motif: 'tree', x: 90, y: 200 }, { motif: 'flower', x: 390, y: 228 }, { motif: 'bird', x: 360, y: 92 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"\'우리 반 어항 물고기는 몇 마리일까?\'의 답은 어디에서 찾으면 가장 빠를까요?" "책이요"라는 대답이 나오면 "책에 우리 반 어항이 나올까요?"라고 되묻는다. "답을 찾는 곳은 여러 가지예요. 직접 살펴보기, 사람에게 묻기, 책과 그림 찾기." 세 곳 그림 카드를 칠판에 붙이고 시연 단추로 물음과 찾을 곳이 이어지는 모습을 보여 준다.',
        student: '우리 모둠 물음판의 물음 하나를 골라, 답을 어디에서 찾을지 짝에게 말해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '어디에서 찾을까?', slots: [{ id: 's1', label: '우리 반 어항 물고기는 몇 마리일까?' }], cards: ['직접 세어 봐요'], shuffle: false }, sequence: [{ match: { s1: '직접 세어 봐요' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 물음과 찾을 곳 잇기', minutes: 13, tool: 'mindmap',
            teacher: '"이 물음의 답을 아는 사람은 누구일까요? 눈으로 볼 수 있는 것일까요? 지금은 볼 수 없어서 책을 봐야 할까요?" 세 가지를 차례로 묻는다. 공룡 물음에 \'직접 살펴봐요\'를 놓은 학생에게 "공룡을 지금 어디에서 볼 수 있을까요?"라고 묻는다.',
            task: '물음마다 답을 찾을 곳을 잇거나 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '물음마다 답을 찾을 곳을 이어 보세요.', toolOptions: { mode: 'match', topic: '어디에서 찾을까?', slots: [{ id: 's1', label: '우리 반 화분 잎은 몇 장일까?' }, { id: 's2', label: '아빠는 어릴 때 무슨 놀이를 했을까?' }, { id: 's3', label: '공룡은 어떻게 생겼을까?' }], cards: ['직접 세어 봐요', '아빠께 여쭈어요', '책과 그림에서 찾아요'] },
                target: { match: { s1: '직접 세어 봐요', s2: '아빠께 여쭈어요', s3: '책과 그림에서 찾아요' } }, difficulty: 0.15,
                hints: ['답을 아는 사람이 있는지, 눈앞에서 볼 수 있는지, 지금은 볼 수 없는지 따져요.', '공룡은 지금 살아 있지 않아 직접 볼 수 없어요. 아빠의 어린 시절은 아빠가 가장 잘 알아요.', '화분 잎은 직접 세고, 아빠 놀이는 아빠께 여쭙고, 공룡은 책과 그림에서 찾아요.'] },
              { prompt: '물음을 답을 찾을 곳에 따라 나누어 보세요.', toolOptions: { topic: '답을 찾을 곳', slots: ['직접 살펴봐요', '사람에게 물어요', '책·그림에서 찾아요'], cards: ['교실 창문은 몇 개일까?', '보건 선생님은 아침에 무슨 일을 하실까?', '남극에는 어떤 동물이 살까?'] },
                target: { sort: { '직접 살펴봐요': ['교실 창문은 몇 개일까?'], '사람에게 물어요': ['보건 선생님은 아침에 무슨 일을 하실까?'], '책·그림에서 찾아요': ['남극에는 어떤 동물이 살까?'] } }, difficulty: 0.2,
                hints: ['눈앞에 있는 것인지, 그 사람만 아는 것인지, 멀어서 갈 수 없는 곳인지 살펴봐요.', '남극은 너무 멀어 직접 가 볼 수 없어요. 다시 견주어 봐요.', '창문은 직접 세고, 보건 선생님 일은 선생님께 여쭙고, 남극 동물은 책과 그림에서 찾아요.'],
                levels: { challenge: { prompt: '물음 여섯 개를 답을 찾을 곳에 따라 나누어 보세요.', toolOptions: { cards: ['교실 창문은 몇 개일까?', '보건 선생님은 아침에 무슨 일을 하실까?', '남극에는 어떤 동물이 살까?', '운동장 그네는 몇 개일까?', '할머니는 어릴 때 무엇을 타고 학교에 갔을까?', '깊은 바다 물고기는 어떻게 생겼을까?'] },
                  target: { sort: { '직접 살펴봐요': ['교실 창문은 몇 개일까?', '운동장 그네는 몇 개일까?'], '사람에게 물어요': ['보건 선생님은 아침에 무슨 일을 하실까?', '할머니는 어릴 때 무엇을 타고 학교에 갔을까?'], '책·그림에서 찾아요': ['남극에는 어떤 동물이 살까?', '깊은 바다 물고기는 어떻게 생겼을까?'] } } } } },
              { prompt: '여러 곳에서 답을 찾으면 좋은 까닭만 골라 보세요.', toolOptions: { mode: 'pick', basket: '좋은 까닭', cards: ['한 곳에 없는 답을 다른 곳에서 찾을 수 있어요', '찾은 답이 맞는지 한 번 더 알 수 있어요', '한 곳만 보면 답을 다 알 수 있어요', '여러 곳을 다니면 놀 수 있어요'] },
                target: { pick: ['한 곳에 없는 답을 다른 곳에서 찾을 수 있어요', '찾은 답이 맞는지 한 번 더 알 수 있어요'] }, difficulty: 0.2,
                hints: ['조사를 더 잘하게 도와주는 까닭인지 따져 봐요.', '책 한 권에 모든 답이 다 있을까요? 다시 생각해요.', '다른 곳에서 더 찾을 수 있고, 찾은 답을 한 번 더 알아볼 수 있는 두 카드예요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 우리 모둠 물음에 찾을 곳 표시하기 (모둠 활동)', minutes: 14, tool: 'emotion',
            teacher: '"준호는 개미 책에서 먹이는 찾았는데 개미집 답은 없었대요. 이제 그만 알아볼까요?" 기다린 뒤 "한 곳에서 못 찾으면 다른 곳에서 찾아요"라고 짚는다. 모둠 물음판의 물음마다 눈(직접 보기)·입(물어보기)·책 그림 붙임딱지 가운데 알맞은 것을 붙인다. 한 물음에 두 곳을 붙여도 된다고 알려 준다.',
            task: '한 곳에 답이 없을 때 어떻게 할지 고르고, 모둠 물음판의 물음마다 찾을 곳 붙임딱지를 붙여요.',
            levels: CARD_LV,
            items: [
              { prompt: '책에 답이 없어요. 준호는 어떻게 할까요?', toolOptions: { mode: 'branch', who: '준호', situation: '개미 책에서 \'개미는 무엇을 먹을까?\'의 답은 찾았는데 \'개미집은 어디에 있을까?\'는 책에 없어요.', choices: [
                { id: 'stop', text: '답이 없으니 그만 알아봐요', result: '물음판에 빈칸이 그대로 남아요.', mood: '아쉬움', why: '한 곳에 없으면 다른 곳에서 찾아요.' },
                { id: 'other', text: '놀이터에서 개미를 따라가 직접 살펴봐요', result: '개미가 흙 속 작은 구멍으로 들어가는 것을 봤어요.', mood: '신남' },
                { id: 'guess', text: '그냥 생각나는 대로 지어서 써요', result: '친구가 "정말이야?" 하고 물어도 대답을 못 해요.', mood: '걱정', why: '답은 지어내지 않고 찾아서 써요.' }] }, target: { choice: 'other' }, difficulty: 0.1 },
              { prompt: '우리 모둠 물음판의 물음마다 찾을 곳 붙임딱지를 붙였으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '모둠 친구와 "이 물음은 ○○에서 찾을 거야. 왜냐하면 ~"으로 한 번씩 말했으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"우리 모둠은 어느 물음을 어디에서 찾기로 했나요?" 모둠마다 한 물음씩 말한다. 사람에게 물을 물음이 있는 모둠은 누구에게 언제 물을지 정하게 하고, 책은 학교 도서실에서 빌려 둔다. 다음 시간에는 그림 자료를 읽고 답을 찾는다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '어디에서 찾을까?', slots: [{ id: 's1', label: '운동장 나무는 몇 그루일까?' }, { id: 's2', label: '할머니는 어릴 때 무슨 노래를 불렀을까?' }], cards: ['직접 세어 봐요', '할머니께 여쭈어요'] }, prompt: '물음마다 답을 찾을 곳을 이어 보세요.', target: { match: { s1: '직접 세어 봐요', s2: '할머니께 여쭈어요' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '책 한 권에서 답을 못 찾았어요. 어떻게 할까요?', options: ['다른 곳에서 더 찾아봐요', '그 물음은 그만 알아봐요', '답을 지어내요'], answer: 0, difficulty: 0.1, explain: '한 곳에 없는 답도 다른 책, 사람, 직접 보기로 찾을 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '답을 찾을 곳',
      items: [
        { type: 'choice', prompt: '\'우리 집 시계는 몇 개일까?\'의 답을 찾는 곳에 ○ 하세요.', options: ['직접 세어 봐요', '공룡 책을 봐요'], answer: '직접 세어 봐요' },
        { type: 'choice', prompt: '\'엄마는 어릴 때 무슨 간식을 먹었을까?\'의 답을 찾는 곳에 ○ 하세요.', options: ['엄마께 여쭈어요', '운동장을 살펴봐요'], answer: '엄마께 여쭈어요' },
        { type: 'table', prompt: '우리 모둠 물음과 찾을 곳을 쓰세요.', columns: ['모둠 물음', '찾을 곳'], rows: 3 },
        { type: 'short', prompt: '한 곳에서 답을 못 찾으면 어떻게 할지 쓰세요.' },
      ],
      easy: {
        note: '눈으로 보기, 사람에게 묻기, 책과 그림!',
        items: [
          { type: 'choice', prompt: '교실 의자 수를 알려면?', options: ['직접 세어 봐요', '책을 봐요'], answer: '직접 세어 봐요' },
          { type: 'choice', prompt: '할아버지 어릴 때 놀이를 알려면?', options: ['할아버지께 여쭈어요', '화단을 봐요'], answer: '할아버지께 여쭈어요' },
          { type: 'draw', prompt: '답을 찾으러 갈 곳을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 세 곳 그림 카드를 보며 골라요.',
      base: '모두 놓은 뒤 확인을 눌러요. 모둠 물음마다 찾을 곳 붙임딱지를 붙여요.',
      challenge: '나눌 물음이 여섯 개로 늘어요. 모둠 물음 하나에는 찾을 곳을 두 군데 정해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 한 곳(책 한 권)에서만 찾아도 답을 다 알 수 있다고 여긴다 → 책에 없는 물음을 일부러 보여 주고 다른 곳을 찾게 한다. ② 모든 답이 책에 있다고 여긴다 → 우리 반·우리 집처럼 \'우리만의 것\'은 직접 보거나 물어야 한다는 것을 짚는다. ③ 답을 지어낸다 → 찾은 곳을 함께 적는 습관을 들인다. 사람에게 물을 때는 미리 허락을 받고, 학교 안 어른(보건·영양 선생님 등)에게는 교사가 먼저 부탁해 둔다.',
  }));

  lessons.push(L(42, {
    title: '달팽이 그림 자료를 읽고 물음의 답 찾기',
    objective: '그림과 짧은 글로 된 자료와 그림그래프를 읽고, 물음에 맞는 답을 찾아 물음과 이을 수 있다.',
    illustration: ART('a paper picture card of a snail on a wet lettuce leaf with its long feelers up, a child reading the card with a pointing finger beside a small paper bar of lettuce leaves', '자료에서 답 찾기', [
      { motif: 'leaf', x: 100, y: 200 }, { motif: 'leaf', x: 380, y: 210, s: 0.8 }, { motif: 'cloud', x: 300, y: 60, s: 0.6 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '달팽이 자료 그림(직접 만든 그림 카드)을 띄우고 짧은 글을 함께 읽는다. "달팽이는 상추 같은 채소 잎을 먹어요. 축축하고 그늘진 곳을 좋아해요. 긴 더듬이 끝에 눈이 있어요. 날이 마르면 껍데기 속에 쏙 들어가요." "자료를 읽을 때는 무엇부터 할까요?" 물음을 먼저 읽고, 물음 속 낱말을 자료에서 찾는다고 짚는다. 시연 단추로 물음과 답이 이어지는 모습을 보여 준다.',
        student: '달팽이 자료를 선생님과 한 줄씩 따라 읽어요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '달팽이 자료', slots: [{ id: 's1', label: '달팽이는 무엇을 먹을까?' }], cards: ['상추 같은 채소 잎'], shuffle: false }, sequence: [{ match: { s1: '상추 같은 채소 잎' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 그림과 글 자료에서 답 찾기', minutes: 12, tool: 'mindmap',
            teacher: '"물음 속 \'먹을까\'를 보고 자료에서 \'먹어요\'를 찾아요." 물음 낱말과 자료 낱말을 같은 색으로 밑줄 긋게 한다. \'딱딱한 돌멩이\'를 먹이로 이은 학생에게 "자료 어디에 돌멩이가 나왔나요?"라고 묻는다. 자료에 없는 것은 답이 될 수 없다고 짚는다.',
            task: '달팽이 자료를 읽고 물음과 답을 잇거나, 자료가 답이 되는 물음을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '달팽이 자료를 읽고 물음마다 맞는 답을 이어 보세요.', toolOptions: { mode: 'match', topic: '달팽이 자료', slots: [{ id: 's1', label: '달팽이는 무엇을 먹을까?' }, { id: 's2', label: '달팽이는 어떤 곳을 좋아할까?' }, { id: 's3', label: '달팽이 눈은 어디에 있을까?' }], cards: ['상추 같은 채소 잎', '축축하고 그늘진 곳', '긴 더듬이 끝'] },
                target: { match: { s1: '상추 같은 채소 잎', s2: '축축하고 그늘진 곳', s3: '긴 더듬이 끝' } }, difficulty: 0.15,
                hints: ['물음 속 낱말(먹을까, 좋아할까, 눈)을 자료에서 찾아 그 옆 말을 읽어요.', '\'어떤 곳\'은 장소를, \'어디에 있을까\'는 몸의 자리를 물어요. 다시 견주어 봐요.', '먹이는 채소 잎, 좋아하는 곳은 축축하고 그늘진 곳, 눈은 긴 더듬이 끝이에요.'],
                levels: { challenge: { prompt: '자료를 읽고 물음마다 맞는 답을 이어 보세요. 자료에 없는 카드도 있어요.', toolOptions: { cards: ['상추 같은 채소 잎', '축축하고 그늘진 곳', '긴 더듬이 끝', '딱딱한 돌멩이', '햇볕이 뜨거운 곳'] } } } },
              { prompt: '자료에 "날이 마르면 달팽이는 껍데기 속에 들어가요."가 있어요. 이 자료가 답이 되는 물음을 골라 보세요.', toolOptions: { mode: 'pick', basket: '답이 되는 물음', cards: ['날이 마르면 달팽이는 어떻게 할까?', '달팽이는 몇 살까지 살까?', '달팽이 껍데기는 무슨 색일까?'] },
                target: { pick: ['날이 마르면 달팽이는 어떻게 할까?'] }, difficulty: 0.15,
                hints: ['자료 문장이 무엇을 말하는지 먼저 한 번 더 읽어요.', '자료에는 나이나 색 이야기가 없어요.', '\'날이 마르면\' 무엇을 하는지 묻는 카드를 골라요.'] },
              { prompt: '자료에서 답을 찾는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', slots: ['처음', '가운데', '끝'], cards: ['물음을 먼저 읽어요', '물음 속 낱말을 자료에서 찾아요', '찾은 답을 물음 옆에 써요'] },
                target: { order: ['물음을 먼저 읽어요', '물음 속 낱말을 자료에서 찾아요', '찾은 답을 물음 옆에 써요'] }, difficulty: 0.1,
                hints: ['무엇을 찾을지 알아야 자료에서 찾을 수 있어요.', '답을 쓰기 전에 자료에서 찾아야 해요.', '물음 읽기 → 낱말 찾기 → 답 쓰기 차례예요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 관찰 기록 그림그래프 읽기', minutes: 15, tool: 'chart',
            teacher: '"옆 반이 일주일 동안 달팽이를 기르며 그림그래프로 남긴 기록이에요. 동그라미 하나가 상추 잎 한 장이에요." 그림을 손가락으로 하나씩 짚으며 세게 한다. 줄 길이만 보고 대충 고르는 학생에게 직접 세어 보게 한다. 다 읽으면 짝과 "이 자료로 알게 된 것은 ~예요."로 말한다.',
            task: '달팽이 관찰 그림그래프에서 그림을 세어 답을 찾고, 알게 된 것을 짝에게 말해요.',
            levels: { easy: { showValues: true }, base: {}, challenge: {} },
            items: [
              { prompt: '달팽이가 상추 잎을 가장 많이 먹은 요일은 언제일까요?', toolOptions: { type: 'picture', mode: 'read', title: '달팽이가 먹은 상추 잎', unit: '장', icon: 'circle', icons: [{ value: 1, name: '1장' }], data: [{ label: '월', value: 2 }, { label: '화', value: 4 }, { label: '수', value: 3 }], question: '가장 많이 먹은 요일은?', choices: ['월', '화', '수'] }, target: { pick: 1 }, difficulty: 0.1,
                levels: { challenge: { prompt: '닷새 가운데 달팽이가 상추 잎을 가장 많이 먹은 요일은 언제일까요?', toolOptions: { data: [{ label: '월', value: 2 }, { label: '화', value: 4 }, { label: '수', value: 3 }, { label: '목', value: 5 }, { label: '금', value: 4 }], choices: ['월', '화', '수', '목', '금'] }, target: { pick: 3 } } } },
              { prompt: '달팽이가 가장 많이 있던 곳은 어디일까요?', toolOptions: { type: 'picture', mode: 'read', title: '달팽이가 있던 곳', unit: '번', icon: 'star', icons: [{ value: 1, name: '1번' }], data: [{ label: '그늘진 화분 밑', value: 5 }, { label: '햇볕 드는 창가', value: 1 }, { label: '흙 위', value: 3 }], question: '가장 많이 있던 곳은?', choices: ['그늘진 화분 밑', '햇볕 드는 창가', '흙 위'] }, target: { pick: 0 }, difficulty: 0.15,
                conclude: '글 자료처럼 달팽이는 그늘지고 축축한 곳에 많이 있었어요.' },
              { prompt: '그래프를 보고 "이 자료로 알게 된 것은 ~예요."로 짝에게 한 가지를 말했으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘은 글과 그림, 그래프에서 답을 찾았어요. 우리 모둠 물음판의 물음 가운데 책이나 그림 자료로 찾을 물음은 무엇인가요?" 모둠마다 한 가지씩 말하고, 도서실 책에서 찾은 답은 쪽지에 써서 모아 두게 한다. 다음 시간에는 직접 살펴보러 화단에 나간다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '개미 자료', slots: [{ id: 's1', label: '개미 다리는 몇 개일까?' }, { id: 's2', label: '개미집은 어디에 있을까?' }], cards: ['여섯 개', '땅속'] }, prompt: '자료: "개미는 다리가 여섯 개예요. 땅속에 집을 지어요." 물음과 답을 이어 보세요.', target: { match: { s1: '여섯 개', s2: '땅속' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '자료에서 답을 찾을 때 먼저 할 일은 무엇일까요?', options: ['물음을 먼저 읽어요', '그림 색만 봐요', '답을 먼저 써요'], answer: 0, difficulty: 0.1, explain: '무엇을 찾을지 알아야 자료에서 찾을 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '달팽이 자료 읽기',
      items: [
        { type: 'short', prompt: '자료: "달팽이는 상추 같은 채소 잎을 먹어요. 축축하고 그늘진 곳을 좋아해요." 달팽이가 좋아하는 곳을 쓰세요.' },
        { type: 'choice', prompt: '자료: "긴 더듬이 끝에 눈이 있어요." 달팽이 눈은 어디에 있나요?', options: ['긴 더듬이 끝', '껍데기 안', '배 밑'], answer: '긴 더듬이 끝' },
        { type: 'figure', prompt: '그림을 세어 빈칸에 쓰세요.', tool: 'chart', figures: [{ options: { type: 'picture', mode: 'read', title: '달팽이가 먹은 상추 잎', unit: '장', icon: 'circle', icons: [{ value: 1, name: '1장' }], data: [{ label: '목', value: 3 }, { label: '금', value: 5 }] }, caption: '목요일 ___장, 금요일 ___장' }], answer: '3장, 5장' },
        { type: 'short', prompt: '우리 모둠 물음 가운데 책이나 그림 자료로 찾은 답을 쓰세요.' },
      ],
      easy: {
        note: '물음 먼저 읽고 → 자료에서 찾기!',
        items: [
          { type: 'choice', prompt: '자료: "달팽이는 채소 잎을 먹어요." 달팽이 먹이는?', options: ['채소 잎', '돌멩이'], answer: '채소 잎' },
          { type: 'choice', prompt: '자료: "달팽이는 그늘진 곳을 좋아해요." 달팽이가 좋아하는 곳은?', options: ['그늘진 곳', '뜨거운 곳'], answer: '그늘진 곳' },
          { type: 'draw', prompt: '자료에서 본 달팽이를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 그래프에 수가 함께 보여요. 자료 글은 교사와 함께 읽어요.',
      base: '모두 놓은 뒤 확인을 눌러요. 그래프의 그림을 직접 세어 답을 찾아요.',
      challenge: '자료에 없는 카드가 섞여 있고, 그래프가 닷새로 늘어요. 알게 된 것을 두 가지 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 자료를 읽지 않고 아는 대로 답한다 → 물음 낱말과 자료 낱말에 같은 색 밑줄을 긋게 한다. ② 자료에 없는 것을 답으로 고른다 → "자료 어디에 나왔어요?"를 손가락으로 짚게 한다. ③ 그림그래프에서 줄 길이만 본다 → 그림을 하나씩 세게 한다. 달팽이 자료 글은 교사가 직접 지은 것이며, 사실(채소 잎을 먹음, 축축한 곳을 좋아함, 긴 더듬이 끝에 눈, 마르면 껍데기 속에 들어감)은 흔한 달팽이에 맞다.',
  }));

  lessons.push(L(43, {
    title: '학교 화단을 직접 살펴보고 본 것 세어 기록하기',
    objective: '관찰 약속을 지키며 학교 화단에서 물음의 답을 직접 살펴 찾고, 본 것을 세어 기록한 그림그래프를 읽을 수 있다.',
    illustration: ART('first graders with clipboards crouching quietly by a school flower bed, a butterfly on a yellow flower and ants near the soil, one child counting with fingers', '화단을 살펴봐요', [
      { motif: 'flower', x: 110, y: 222 }, { motif: 'flower', x: 360, y: 226, color: 'rose' }, { motif: 'leaf', x: 240, y: 214, s: 0.8 }]),
    safety: ['화단 꽃과 잎은 꺾거나 뽑지 않고 눈으로 봐요.', '벌이 다가오면 손을 휘두르지 말고 천천히 물러나요.', '모둠과 함께 다니고 선생님이 정한 곳 밖으로 가지 않아요.', '흙을 만진 뒤에는 손을 깨끗이 씻어요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"\'화단에 어떤 곤충이 올까?\'는 책을 보는 것보다 어떻게 하면 더 정확히 알 수 있을까요?" "직접 가서 봐요"가 나오면 "직접 볼 때 지킬 약속은 무엇일까요?"라고 이어 묻는다. 관찰 약속 네 가지를 함께 읽고, 시연 단추로 약속 카드를 고르는 모습을 보여 준다. 기록판(활동지)과 연필을 챙긴다.',
        student: '관찰 약속을 손가락으로 하나씩 세며 따라 말해요.',
        demo: { tool: 'mindmap', options: { mode: 'pick', basket: '관찰 약속', cards: ['꽃은 눈으로만 봐요', '꽃을 꺾어 가져가요'], shuffle: false }, sequence: [{ pick: ['꽃은 눈으로만 봐요'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 관찰 약속과 살펴볼 방법 정하기', minutes: 7, tool: 'mindmap',
            teacher: '"꽃 색은 무엇으로 알 수 있어요? 냄새는요?" 물음마다 눈과 코 가운데 무엇을 쓸지 묻는다. "곤충을 잡아 통에 넣으면 더 잘 보여요"라는 학생에게 "잡힌 곤충은 어떤 마음일까요? 보기만 해도 셀 수 있어요"라고 짚는다.',
            task: '관찰 약속을 고르고, 물음마다 눈으로 볼지 코로 맡을지 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '화단을 살펴볼 때 지킬 약속만 골라 보세요.', toolOptions: { mode: 'pick', basket: '관찰 약속', cards: ['꽃과 잎은 꺾지 않고 눈으로 봐요', '벌이 오면 천천히 물러나요', '곤충을 손으로 잡아 통에 넣어요', '화단 안으로 들어가 꽃을 밟아요'] },
                target: { pick: ['꽃과 잎은 꺾지 않고 눈으로 봐요', '벌이 오면 천천히 물러나요'] }, difficulty: 0.1,
                hints: ['화단의 꽃과 곤충, 그리고 나를 모두 지키는 약속인지 따져요.', '잡거나 밟으면 꽃과 곤충이 다쳐요.', '꺾지 않고 보기, 벌이 오면 물러나기 두 카드를 골라요.'] },
              { prompt: '물음마다 눈으로 볼지 코로 맡을지 나누어 보세요.', toolOptions: { topic: '어떻게 살펴볼까?', slots: ['눈으로 봐요', '코로 맡아요'], cards: ['꽃은 무슨 색일까?', '나비는 어느 꽃에 앉을까?', '꽃에서 어떤 냄새가 날까?', '젖은 흙에서는 어떤 냄새가 날까?'] },
                target: { sort: { '눈으로 봐요': ['꽃은 무슨 색일까?', '나비는 어느 꽃에 앉을까?'], '코로 맡아요': ['꽃에서 어떤 냄새가 날까?', '젖은 흙에서는 어떤 냄새가 날까?'] } }, difficulty: 0.15,
                hints: ['물음이 색과 모습을 묻는지, 냄새를 묻는지 살펴봐요.', '\'냄새\'가 들어간 물음은 눈을 감고도 알 수 있어요.', '색과 나비는 눈, 꽃 냄새와 흙 냄새는 코예요.'],
                levels: { challenge: { prompt: '물음 여섯 개를 눈으로 볼지 코로 맡을지 나누어 보세요.', toolOptions: { cards: ['꽃은 무슨 색일까?', '나비는 어느 꽃에 앉을까?', '꽃에서 어떤 냄새가 날까?', '젖은 흙에서는 어떤 냄새가 날까?', '개미는 몇 마리 지나갈까?', '풀을 밟은 자리에서는 어떤 냄새가 날까?'] },
                  target: { sort: { '눈으로 봐요': ['꽃은 무슨 색일까?', '나비는 어느 꽃에 앉을까?', '개미는 몇 마리 지나갈까?'], '코로 맡아요': ['꽃에서 어떤 냄새가 날까?', '젖은 흙에서는 어떤 냄새가 날까?', '풀을 밟은 자리에서는 어떤 냄새가 날까?'] } } } } },
              { prompt: '화단에서 살펴보는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', slots: ['처음', '가운데', '끝'], cards: ['살펴볼 물음을 기록판에서 읽어요', '조용히 다가가 살펴보고 세어요', '본 것을 기록판에 바로 적어요'] },
                target: { order: ['살펴볼 물음을 기록판에서 읽어요', '조용히 다가가 살펴보고 세어요', '본 것을 기록판에 바로 적어요'] }, difficulty: 0.1,
                hints: ['무엇을 볼지 알아야 살펴볼 수 있어요.', '적으려면 먼저 보고 세어야 해요.', '물음 읽기 → 살펴보고 세기 → 바로 적기 차례예요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 화단 살펴보기와 기록 읽기 (바깥 활동)', minutes: 20, tool: 'chart',
            teacher: '모둠별로 화단에 나가 12분 동안 살펴본다. 모둠마다 \'곤충 세기\', \'꽃 색 세기\' 가운데 하나를 맡아 기록판에 바를 정(正) 대신 동그라미를 하나씩 그려 센다. 들어와서 민지 모둠의 기록을 그림그래프로 함께 읽는다. 가장 많은 것과 가장 적은 것을 헷갈리는 학생에게 "가장 적은 것은 그림이 가장 짧은 줄이에요. 하나씩 세어 볼까요?"라고 말한다.',
            task: '모둠과 화단을 살펴 본 것을 세어 적고, 민지 모둠의 기록 그림그래프를 읽어요.',
            levels: { easy: { showValues: true }, base: {}, challenge: {} },
            items: [
              { prompt: '화단에서 맡은 것을 세어 기록판에 적고, 센 수를 모둠 친구에게 말했으면 "다 했어요"를 누르세요.', free: true, talk: true },
              { prompt: '민지 모둠이 화단에서 가장 많이 본 곤충은 무엇일까요?', toolOptions: { type: 'picture', mode: 'read', title: '화단에서 본 곤충', unit: '마리', icon: 'star', icons: [{ value: 1, name: '1마리' }], data: [{ label: '개미', value: 6 }, { label: '나비', value: 2 }, { label: '벌', value: 1 }], question: '가장 많이 본 곤충은?', choices: ['개미', '나비', '벌'] }, target: { pick: 0 }, difficulty: 0.1,
                levels: { challenge: { prompt: '민지 모둠이 본 곤충 가운데 가장 많이 본 것은 무엇일까요?', toolOptions: { data: [{ label: '개미', value: 6 }, { label: '나비', value: 2 }, { label: '벌', value: 1 }, { label: '무당벌레', value: 7 }], choices: ['개미', '나비', '벌', '무당벌레'] }, target: { pick: 3 } } } },
              { prompt: '하준 모둠이 화단에서 가장 적게 본 꽃 색은 무엇일까요?', toolOptions: { type: 'picture', mode: 'read', title: '화단에서 본 꽃 색', unit: '송이', icon: 'star', icons: [{ value: 1, name: '1송이' }], data: [{ label: '노랑', value: 4 }, { label: '빨강', value: 2 }, { label: '하양', value: 3 }], question: '가장 적게 본 꽃 색은?', choices: ['노랑', '빨강', '하양'] }, target: { pick: 1 }, difficulty: 0.15 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"직접 살펴보니 책에서는 알 수 없던 무엇을 알게 되었나요?" 두세 모둠이 말한다. 기록판에 적은 것은 답 쪽지에 옮겨 써 모둠 봉투에 넣는다. 다음 시간에는 책·사람·직접 보기로 모은 쪽지를 물음별로 나눈다고 예고한다. 흙을 만진 학생은 손을 씻게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'chart', options: { type: 'picture', mode: 'read', title: '운동장에서 본 새', unit: '마리', icon: 'star', icons: [{ value: 1, name: '1마리' }], data: [{ label: '참새', value: 5 }, { label: '까치', value: 2 }, { label: '비둘기', value: 3 }], question: '가장 많이 본 새는?', choices: ['참새', '까치', '비둘기'] }, prompt: '서아 모둠이 운동장에서 가장 많이 본 새는 무엇일까요?', target: { pick: 0 }, difficulty: 0.1 },
          { type: 'choice', prompt: '\'화단에 개미가 몇 마리 지나갈까?\'의 답을 찾는 좋은 방법은 무엇일까요?', options: ['직접 살펴보며 세어 봐요', '생각나는 수를 써요', '개미를 잡아 통에 모아요'], answer: 0, difficulty: 0.1, explain: '우리 화단의 개미는 직접 보고 세어야 알 수 있어요. 잡지 않고 눈으로 세요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '화단 관찰 기록판',
      items: [
        { type: 'check', prompt: '내가 지킨 관찰 약속에 ✓ 하세요.', options: ['꽃과 잎을 꺾지 않았어요', '벌이 오면 천천히 물러났어요', '모둠과 함께 다녔어요', '흙을 만진 뒤 손을 씻었어요'] },
        { type: 'table', prompt: '본 것을 세어 동그라미로 그리고 수를 쓰세요.', columns: ['본 것', '동그라미로 세기', '모두 몇'], rows: 3 },
        { type: 'choice', prompt: '꽃 냄새를 알아보려면 무엇을 쓸까요?', options: ['코', '귀'], answer: '코' },
        { type: 'short', prompt: '직접 살펴보고 새로 알게 된 것을 쓰세요.' },
        { type: 'draw', prompt: '화단에서 본 것 하나를 자세히 그려 보세요.' },
      ],
      easy: {
        note: '보기만 해요. 꺾지 않아요!',
        items: [
          { type: 'choice', prompt: '화단에서 지킬 약속은?', options: ['꽃을 눈으로만 봐요', '꽃을 꺾어요'], answer: '꽃을 눈으로만 봐요' },
          { type: 'table', prompt: '본 것과 수를 쓰세요.', columns: ['본 것', '몇 마리(송이)'], rows: 2 },
          { type: 'draw', prompt: '화단에서 본 것을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 그래프에 수가 함께 보여요. 화단에서는 하나만 맡아 세요.',
      base: '모두 놓은 뒤 확인을 눌러요. 맡은 것을 세어 기록판에 적어요.',
      challenge: '나눌 물음이 여섯 개로 늘고, 그래프에 곤충이 하나 더 있어요. 화단에서 물음을 하나 더 정해 살펴봐요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 곤충을 잡으려 한다 → 보기만 해도 셀 수 있다는 것을 약속으로 먼저 정한다. ② 세다가 놓친다 → 하나 볼 때마다 동그라미 하나를 바로 그리게 한다. ③ 가장 많은 것과 가장 적은 것을 헷갈린다 → 그림그래프의 그림을 손가락으로 하나씩 센다. 화단이 멀거나 날씨가 나쁘면 교실 화분과 창밖 관찰로 바꾼다. 벌 알레르기가 있는 학생은 미리 확인한다.',
  }));

  lessons.push(L(44, {
    title: '모은 쪽지를 물음별로 나누어 큰 종이에 붙이기',
    objective: '책·사람·직접 보기로 모은 답 쪽지를 물음별로 나누어 붙이고, 어느 물음에도 맞지 않는 쪽지를 가려낼 수 있다.',
    illustration: ART('a large paper sheet with three question cards across the top and small answer notes being stuck under each, a squirrel drawing in the corner and children sorting notes', '물음별로 붙여요', [
      { motif: 'tree', x: 90, y: 200 }, { motif: 'leaf', x: 390, y: 100, s: 0.7 }, { motif: 'star', x: 400, y: 220, s: 0.6 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"우리 모둠 봉투에 답 쪽지가 가득해요. 그냥 섞어 두면 무엇이 불편할까요?" 두세 명의 생각을 듣는다. "쪽지를 물음별로 나누어 붙이면, 물음마다 무엇을 알게 됐는지 한눈에 보여요." 시연 단추로 쪽지 한 장이 맞는 물음 아래로 가는 모습을 보여 준다.',
        student: '모둠 봉투에서 쪽지를 한 장 꺼내 읽고, 어느 물음의 답인지 짝에게 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '다람쥐 모둠', slots: ['무엇을 먹을까?', '어디에 살까?'], cards: ['도토리와 밤을 먹어요'], shuffle: false }, sequence: [{ sort: { '무엇을 먹을까?': ['도토리와 밤을 먹어요'], '어디에 살까?': [] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 다람쥐 모둠 쪽지 나누기', minutes: 12, tool: 'mindmap',
            teacher: '"쪽지를 읽고 어느 물음에 대한 답인지 물음 낱말을 찾아요." \'다람쥐 인형은 갈색이에요\'를 붙이려는 학생에게 "이 쪽지는 세 물음 가운데 무엇의 답인가요?"라고 묻는다. 책에서 찾은 쪽지와 사람에게 들은 쪽지가 같은 물음의 답이면 함께 붙인다고 짚는다.',
            task: '다람쥐 모둠이 모은 쪽지를 물음별로 나누고, 쪽지를 붙이는 방법을 알아봐요.',
            levels: CARD_LV,
            items: [
              { prompt: '다람쥐 모둠이 모은 쪽지를 물음별로 나누어 보세요.', toolOptions: { topic: '다람쥐 모둠', slots: ['무엇을 먹을까?', '겨울에 어떻게 지낼까?', '어디에 살까?'], cards: ['도토리와 밤을 먹어요 (책)', '해바라기 씨도 먹어요 (사육사 선생님)', '겨울에는 땅속 굴에서 겨울잠을 자요 (책)', '숲에 살아요 (숲 해설사 선생님)'] },
                target: { sort: { '무엇을 먹을까?': ['도토리와 밤을 먹어요 (책)', '해바라기 씨도 먹어요 (사육사 선생님)'], '겨울에 어떻게 지낼까?': ['겨울에는 땅속 굴에서 겨울잠을 자요 (책)'], '어디에 살까?': ['숲에 살아요 (숲 해설사 선생님)'] } }, difficulty: 0.15,
                hints: ['쪽지마다 먹이, 겨울, 사는 곳 가운데 무엇을 말하는지 찾아요.', '\'먹어요\'가 들어간 쪽지는 두 장이에요. 어디서 알았는지는 달라도 같은 물음의 답이에요.', '도토리·해바라기 씨는 먹이, 겨울잠은 겨울, 숲은 사는 곳이에요.'],
                levels: { challenge: { prompt: '다람쥐 쪽지를 물음별로 나누어 보세요. 어느 물음에도 맞지 않는 쪽지는 그대로 두어요.', toolOptions: { cards: ['도토리와 밤을 먹어요 (책)', '해바라기 씨도 먹어요 (사육사 선생님)', '겨울에는 땅속 굴에서 겨울잠을 자요 (책)', '숲에 살아요 (숲 해설사 선생님)', '등에 검은 줄무늬가 있어요 (사진)', '다람쥐 인형은 갈색이에요'] } } } },
              { prompt: '쪽지를 큰 종이에 붙이는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', slots: ['처음', '가운데', '끝'], cards: ['물음 카드 세 장을 맨 위에 나란히 붙여요', '쪽지를 하나씩 읽고 맞는 물음 밑에 붙여요', '남은 쪽지가 정말 어느 물음에도 안 맞는지 다시 읽어요'] },
                target: { order: ['물음 카드 세 장을 맨 위에 나란히 붙여요', '쪽지를 하나씩 읽고 맞는 물음 밑에 붙여요', '남은 쪽지가 정말 어느 물음에도 안 맞는지 다시 읽어요'] }, difficulty: 0.1,
                hints: ['쪽지를 어디 밑에 붙일지 알려면 먼저 무엇이 있어야 할까요?', '남은 쪽지는 다 붙인 뒤에야 알 수 있어요.', '물음 카드 붙이기 → 쪽지 붙이기 → 남은 쪽지 다시 읽기 차례예요.'] },
              { prompt: '개구리 모둠이 모은 쪽지를 물음별로 나누어 보세요. 맞지 않는 쪽지는 그대로 두어요.', toolOptions: { topic: '개구리 모둠', slots: ['무엇을 먹을까?', '어디에 알을 낳을까?'], cards: ['파리와 모기 같은 작은 벌레를 먹어요 (책)', '논이나 연못 물속에 알을 낳아요 (할아버지)', '개구리 장난감은 초록색이에요'] },
                target: { sort: { '무엇을 먹을까?': ['파리와 모기 같은 작은 벌레를 먹어요 (책)'], '어디에 알을 낳을까?': ['논이나 연못 물속에 알을 낳아요 (할아버지)'] } }, difficulty: 0.2,
                hints: ['쪽지마다 먹이를 말하는지, 알을 낳는 곳을 말하는지 살펴봐요. 둘 다 아니면 그대로 두어요.', '장난감 색은 개구리가 무엇을 먹는지도, 어디에 알을 낳는지도 알려 주지 않아요.', '벌레 쪽지는 먹이, 논·연못 쪽지는 알 낳는 곳 밑에 놓고 장난감 쪽지는 그대로 둬요.'],
                levels: { challenge: { prompt: '개구리 쪽지를 물음별로 나누어 보세요. 맞지 않는 쪽지 두 장은 그대로 두어요.', toolOptions: { cards: ['파리와 모기 같은 작은 벌레를 먹어요 (책)', '논이나 연못 물속에 알을 낳아요 (할아버지)', '개구리 장난감은 초록색이에요', '개구리 노래를 불렀어요', '봄에 물속에 알을 낳아요 (그림책)'] },
                  target: { sort: { '무엇을 먹을까?': ['파리와 모기 같은 작은 벌레를 먹어요 (책)'], '어디에 알을 낳을까?': ['논이나 연못 물속에 알을 낳아요 (할아버지)', '봄에 물속에 알을 낳아요 (그림책)'] } } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 우리 모둠 쪽지 붙이기 (모둠 활동)', minutes: 15, tool: 'emotion',
            teacher: '모둠마다 큰 종이(4절)를 나누어 준다. 물음판의 물음 세 개를 맨 위에 붙이고, 봉투의 쪽지를 한 사람씩 읽으며 물음 밑에 붙인다. "책에서 찾은 쪽지만 남기고 들은 쪽지는 버릴까요?" 하고 물어, 같은 물음의 쪽지는 어디서 알았든 함께 붙인다고 짚는다. 어느 물음에도 맞지 않는 쪽지는 종이 오른쪽 아래 \'더 생각할 쪽지\' 칸에 둔다.',
            task: '같은 물음의 쪽지를 어떻게 할지 고르고, 우리 모둠 쪽지를 물음별로 큰 종이에 붙여요.',
            levels: CARD_LV,
            items: [
              { prompt: '같은 물음에 대한 쪽지가 두 장이에요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '서아', situation: '책에서 찾은 \'도토리를 먹어요\'와 사육사 선생님께 들은 \'해바라기 씨도 먹어요\'가 둘 다 먹이 쪽지예요.', choices: [
                { id: 'bookonly', text: '책 쪽지만 붙이고 들은 쪽지는 버려요', result: '해바라기 씨를 먹는다는 것이 물음판에서 빠져요.', mood: '아쉬움', why: '여러 곳에서 모은 답은 모두 소중해요.' },
                { id: 'together', text: '두 쪽지를 같은 물음 밑에 함께 붙여요', result: '다람쥐가 여러 가지를 먹는다는 것이 한눈에 보여요.', mood: '뿌듯함' },
                { id: 'anywhere', text: '빈자리가 있는 물음 밑에 아무 데나 붙여요', result: '친구들이 쪽지를 읽고 헷갈려해요.', mood: '걱정', why: '쪽지는 그 쪽지가 답하는 물음 밑에 붙여요.' }] }, target: { choice: 'together' }, difficulty: 0.1 },
              { prompt: '모둠 친구들과 쪽지를 하나씩 읽으며 물음 밑에 붙였으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '큰 종이를 보고 쪽지가 가장 많이 모인 물음을 짝과 말했으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"우리 모둠 종이에서 쪽지가 하나도 없는 물음이 있나요?" 손을 들게 하고 그 물음을 칠판 옆에 적어 둔다. 답이 없는 물음은 다음 시간에 어떻게 할지 함께 정한다고 예고한다. \'더 생각할 쪽지\' 칸에 쪽지가 있는 모둠은 그 쪽지로 새 물음을 만들 수 있는지 생각해 오게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '해바라기 모둠', slots: ['얼마나 클까?', '언제 꽃이 필까?'], cards: ['어른 키보다 크게 자라요', '여름에 노란 꽃이 피어요', '해바라기 그림책은 두꺼워요'] }, prompt: '해바라기 모둠 쪽지를 물음별로 나누어 보세요. 맞지 않는 쪽지는 그대로 두어요.', target: { sort: { '얼마나 클까?': ['어른 키보다 크게 자라요'], '언제 꽃이 필까?': ['여름에 노란 꽃이 피어요'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '책에서 찾은 쪽지와 사람에게 들은 쪽지가 같은 물음의 답이면 어떻게 할까요?', options: ['같은 물음 밑에 함께 붙여요', '책 쪽지만 붙여요', '들은 쪽지만 붙여요'], answer: 0, difficulty: 0.1, explain: '어디서 알았든 같은 물음의 답이면 함께 붙여요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '쪽지를 물음별로',
      items: [
        { type: 'choice', prompt: '\'개구리는 무엇을 먹을까?\'의 답 쪽지에 ○ 하세요.', options: ['작은 벌레를 먹어요', '논에 살아요', '봄에 알을 낳아요'], answer: '작은 벌레를 먹어요' },
        { type: 'choice', prompt: '어느 물음에도 맞지 않는 쪽지는 어떻게 할까요?', options: ['따로 모아 다시 읽어요', '아무 물음 밑에 붙여요'], answer: '따로 모아 다시 읽어요' },
        { type: 'table', prompt: '우리 모둠 물음과 그 밑에 붙인 쪽지 수를 쓰세요.', columns: ['모둠 물음', '쪽지 수'], rows: 3 },
        { type: 'short', prompt: '쪽지가 가장 많이 모인 물음은 무엇인지 쓰세요.' },
      ],
      easy: {
        note: '쪽지를 읽고 → 맞는 물음 밑에!',
        items: [
          { type: 'choice', prompt: '\'다람쥐는 무엇을 먹을까?\'의 답은?', options: ['도토리를 먹어요', '숲에 살아요'], answer: '도토리를 먹어요' },
          { type: 'short', prompt: '내가 붙인 쪽지를 하나 쓰세요.' },
          { type: 'draw', prompt: '우리 모둠 큰 종이를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 모둠에서는 쪽지를 소리 내어 읽는 역할을 맡아요.',
      base: '모두 놓은 뒤 확인을 눌러요. 우리 모둠 쪽지를 물음별로 붙여요.',
      challenge: '어느 물음에도 맞지 않는 쪽지 두 장이 섞여 있어요. 남은 쪽지로 새 물음을 하나 만들어 봐요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 한 곳(책)에서 찾은 쪽지만 믿는다 → 쪽지 끝에 어디서 알았는지 적게 하고, 같은 물음 밑에 함께 붙인다. ② 빈자리에 아무 쪽지나 붙인다 → 쪽지를 소리 내어 읽고 물음 낱말을 찾게 한다. ③ 맞지 않는 쪽지를 버린다 → \'더 생각할 쪽지\' 칸에 둔다. 다람쥐 사실(도토리·밤·씨앗을 먹음, 숲에 삶, 땅속 굴에서 겨울잠, 등에 검은 줄무늬)은 우리나라 다람쥐에 맞다. 준비물: 4절 도화지, 풀, 모둠 쪽지 봉투.',
  }));

  // ───────────────────────── 45~48차시: 묶어 발표하고 못 찾은 물음 남기기 ─────────────────────────

  lessons.push(L(45, {
    title: '한 물음 밑 쪽지를 묶어 \'알게 된 것\' 한 문장으로 말하기',
    objective: '한 물음 밑에 모인 쪽지 여러 장을 묶어 \'~을 알게 되었어요.\' 한 문장으로 말하고, 발표 차례에 맞게 말할 수 있다.',
    illustration: ART('a child gathering three small paper notes into one bigger speech bubble above a drawing of a squirrel with acorns, chestnuts and sunflower seeds', '쪽지를 묶어 한 문장으로', [
      { motif: 'tree', x: 100, y: 200 }, { motif: 'leaf', x: 380, y: 100, s: 0.7 }, { motif: 'flower', x: 390, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"다람쥐 모둠의 먹이 물음 밑에 쪽지가 세 장 있어요. \'도토리를 먹어요\', \'밤을 먹어요\', \'해바라기 씨를 먹어요\'. 발표할 때 세 장을 다 읽으면 어떨까요?" 잠시 기다린다. "세 쪽지를 묶으면 \'다람쥐는 여러 가지 열매와 씨를 먹는다는 것을 알게 되었어요.\'처럼 한 문장이 돼요." 시연 단추로 쪽지 묶음과 한 문장이 이어지는 모습을 보여 준다.',
        student: '\'알게 되었어요\'를 손뼉 치며 세 번 따라 말해요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '묶어 말하기', slots: [{ id: 's1', label: '도토리를 먹어요 / 밤을 먹어요 / 해바라기 씨를 먹어요' }], cards: ['다람쥐는 여러 가지 열매와 씨를 먹는다는 것을 알게 되었어요'], shuffle: false }, sequence: [{ match: { s1: '다람쥐는 여러 가지 열매와 씨를 먹는다는 것을 알게 되었어요' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 쪽지 묶음을 한 문장으로', minutes: 12, tool: 'mindmap',
            teacher: '"쪽지 묶음을 모두 담은 문장은 무엇일까요?" \'다람쥐는 도토리만 먹는다는 것을 알게 되었어요\'를 고른 학생에게 "그러면 밤과 해바라기 씨 쪽지는 어디로 갔나요?"라고 묻는다. 묶은 문장은 쪽지 하나가 아니라 쪽지 모두를 담아야 한다고 짚는다.',
            task: '쪽지 묶음과 그 묶음을 담은 한 문장을 잇고, 알게 된 것을 말한 문장을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '쪽지 묶음마다 그 묶음을 모두 담은 한 문장을 이어 보세요.', toolOptions: { mode: 'match', topic: '묶어 말하기', slots: [{ id: 's1', label: '도토리를 먹어요 / 밤을 먹어요 / 씨앗을 먹어요' }, { id: 's2', label: '봄에 알을 낳아요 / 물속에 알을 낳아요' }], cards: ['다람쥐는 여러 가지 열매와 씨를 먹어요', '개구리는 봄에 물속에 알을 낳아요'] },
                target: { match: { s1: '다람쥐는 여러 가지 열매와 씨를 먹어요', s2: '개구리는 봄에 물속에 알을 낳아요' } }, difficulty: 0.15,
                hints: ['쪽지 묶음 속 낱말(먹어요, 알을 낳아요)이 어느 문장에 들어 있는지 찾아요.', '쪽지 묶음 속 내용이 문장에 모두 들어 있는지 하나씩 견주어 봐요.', '먹이 쪽지 묶음은 다람쥐 문장, 알 쪽지 묶음은 개구리 문장이에요.'],
                levels: { challenge: { prompt: '쪽지 묶음마다 그 묶음을 모두 담은 한 문장을 이어 보세요. 쪽지 하나만 담은 문장은 빼요.', toolOptions: { cards: ['다람쥐는 여러 가지 열매와 씨를 먹어요', '개구리는 봄에 물속에 알을 낳아요', '다람쥐는 도토리만 먹어요', '개구리는 봄에 알을 낳아요'] } } } },
              { prompt: '모둠 발표에서 알게 된 것을 말한 문장만 골라 보세요.', toolOptions: { mode: 'pick', basket: '알게 된 것', cards: ['개미는 땅속에 집을 짓는다는 것을 알게 되었어요', '달팽이는 축축한 곳을 좋아한다는 것을 알게 되었어요', '조사하느라 다리가 아팠어요', '우리 모둠 쪽지가 제일 많아요'] },
                target: { pick: ['개미는 땅속에 집을 짓는다는 것을 알게 되었어요', '달팽이는 축축한 곳을 좋아한다는 것을 알게 되었어요'] }, difficulty: 0.15,
                hints: ['조사한 주제에 대해 새로 안 것을 말했는지 살펴봐요.', '다리가 아픈 것, 쪽지 수는 주제에 대해 안 것이 아니에요.', '\'알게 되었어요\'로 끝나는 개미·달팽이 두 문장을 골라요.'] },
              { prompt: '모둠 발표 차례대로 놓아 보세요.', toolOptions: { mode: 'order', slots: 4, cards: ['우리 모둠 주제를 말해요', '우리가 만든 물음을 말해요', '물음마다 알게 된 것을 말해요', '아직 못 찾은 물음을 말해요'] },
                target: { order: ['우리 모둠 주제를 말해요', '우리가 만든 물음을 말해요', '물음마다 알게 된 것을 말해요', '아직 못 찾은 물음을 말해요'] }, difficulty: 0.2,
                hints: ['듣는 친구가 무엇에 대한 발표인지 먼저 알아야 해요.', '알게 된 것은 어떤 물음에 대한 답인지 물음 다음에 말해요.', '주제 → 물음 → 알게 된 것 → 못 찾은 물음 차례예요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 우리 모둠 알게 된 것 정하고 연습하기 (모둠 활동)', minutes: 15, tool: 'emotion',
            teacher: '모둠 큰 종이 앞에 모여 물음마다 \'~을 알게 되었어요.\' 문장을 하나씩 정해 문장 띠에 쓴다. 한 사람이 한 물음을 맡아 말하도록 나눈다. 쪽지를 하나하나 다 읽으려는 학생에게 "그 쪽지들을 한 문장에 담아 볼까요?"라고 말한다. 마지막에 모둠별로 한 번씩 소리 내어 연습한다.',
            task: '쪽지를 다 읽으려는 친구를 돕고, 물음마다 알게 된 것을 한 문장으로 정해 모둠과 연습해요.',
            levels: CARD_LV,
            items: [
              { prompt: '서아가 발표 연습 때 쪽지를 하나하나 다 읽어요. 어떻게 말해 줄까요?', toolOptions: { mode: 'branch', who: '서아', situation: '발표 연습에서 서아가 먹이 쪽지 다섯 장을 하나씩 다 읽느라 시간이 길어졌어요.', choices: [
                { id: 'all', text: '"다 읽어야 해. 계속 읽어." 하고 말해요', result: '시간이 모자라 다른 친구 차례가 없어져요.', mood: '걱정', why: '쪽지를 다 읽는 것보다 묶어서 말하는 게 듣기 좋아요.' },
                { id: 'bundle', text: '"쪽지를 묶어 알게 된 것 한 문장으로 말해 보자." 하고 말해요', result: '서아가 한 문장으로 또렷하게 말해요.', mood: '뿌듯함' },
                { id: 'skip', text: '"너는 빼고 하자." 하고 말해요', result: '서아가 속상해서 고개를 숙여요.', mood: '속상함', why: '모두가 한 가지씩 맡아 함께 발표해요.' }] }, target: { choice: 'bundle' }, difficulty: 0.1 },
              { prompt: '모둠 큰 종이를 보며 물음마다 알게 된 것을 한 문장씩 정해 문장 띠에 썼으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '모둠 안에서 맡은 차례대로 발표 연습을 한 번 했으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 정한 우리 모둠의 \'알게 된 것\' 문장 하나를 들려줄 모둠?" 두세 모둠이 말한다. 문장에 \'알게 되었어요\'가 들어갔는지 듣는 학생들이 손을 들어 알린다. 다음 시간에는 아직 답을 못 찾은 물음을 어떻게 할지 정한다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '묶어 말하기', slots: [{ id: 's1', label: '모기를 먹어요 / 파리를 먹어요' }, { id: 's2', label: '도토리를 묻어요 / 볼에 씨를 담아요' }], cards: ['개구리는 작은 벌레를 먹어요', '다람쥐는 먹이를 모아 두어요'] }, prompt: '쪽지 묶음마다 그 묶음을 모두 담은 한 문장을 이어 보세요.', target: { match: { s1: '개구리는 작은 벌레를 먹어요', s2: '다람쥐는 먹이를 모아 두어요' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '발표에서 한 물음 밑 쪽지가 여러 장일 때 어떻게 말할까요?', options: ['쪽지를 묶어 한 문장으로 말해요', '쪽지를 모두 하나씩 읽어요', '쪽지 하나만 골라 말해요'], answer: 0, difficulty: 0.1, explain: '쪽지 모두를 담은 한 문장으로 말하면 듣는 친구가 알기 쉬워요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '알게 된 것 한 문장',
      items: [
        { type: 'choice', prompt: '\'귤을 먹어요 / 사과를 먹어요\' 쪽지 묶음을 모두 담은 문장에 ○ 하세요.', options: ['과일을 여러 가지 먹어요', '귤만 먹어요'], answer: '과일을 여러 가지 먹어요' },
        { type: 'blank', prompt: '빈칸을 채워 알게 된 것 문장을 쓰세요.', text: '우리 모둠은 ___을(를) 알게 되었어요.' },
        { type: 'table', prompt: '우리 모둠 물음과 알게 된 것을 쓰세요.', columns: ['모둠 물음', '알게 된 것'], rows: 3 },
        { type: 'table', prompt: '우리 모둠 발표 차례와 맡은 사람을 쓰세요.', columns: ['차례', '맡은 사람'], cells: [['주제', ''], ['물음', ''], ['알게 된 것', ''], ['못 찾은 물음', '']] },
      ],
      easy: {
        note: '쪽지 여러 장 → 한 문장!',
        items: [
          { type: 'choice', prompt: '알게 된 것을 말한 문장에 ○ 하세요.', options: ['개미는 땅속에 산다는 것을 알게 되었어요', '다리가 아팠어요'], answer: '개미는 땅속에 산다는 것을 알게 되었어요' },
          { type: 'short', prompt: '내가 발표할 문장을 쓰세요.' },
          { type: 'draw', prompt: '알게 된 것을 그림으로 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 문장 띠에 \'___은 ___을 알게 되었어요\' 틀이 쓰여 있어요.',
      base: '모두 놓은 뒤 확인을 눌러요. 물음마다 알게 된 것을 한 문장으로 정해요.',
      challenge: '쪽지 하나만 담은 함정 문장이 섞여 있어요. 우리 모둠 문장에 어디서 알았는지(책·사람·직접 보기)도 넣어 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 쪽지를 하나하나 다 읽는다 → 쪽지 묶음 위에 문장 띠 한 장을 덮어 붙이게 한다. ② 쪽지 하나만 골라 말해 나머지를 놓친다 → "이 문장에 쪽지 세 장이 다 들어 있나요?"를 손가락으로 세며 확인한다. ③ 느낌(재미있었어요)을 알게 된 것으로 말한다 → 주제에 대해 새로 안 것인지 묻는다. 다람쥐는 볼주머니에 먹이를 담아 나르고 땅에 묻어 모아 둔다.',
  }));

  lessons.push(L(46, {
    title: '답을 못 찾은 물음에 별표 붙여 남기기',
    objective: '모둠 물음 가운데 답을 찾은 것과 못 찾은 것을 나누고, 못 찾은 물음은 지우지 않고 표시해 다음에 알아볼 곳을 정할 수 있다.',
    illustration: ART('a paper question board where two notes have answers attached and one note about an earthworm after rain wears a bright paper star sticker, a child pointing at the star', '못 찾은 물음엔 별표', [
      { motif: 'star', x: 240, y: 86, s: 0.8 }, { motif: 'cloud', x: 360, y: 60, s: 0.6 }, { motif: 'leaf', x: 100, y: 214, s: 0.8 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"민지 모둠은 지렁이 물음 세 개 가운데 \'지렁이는 왜 비 온 뒤에 나올까?\'의 답을 못 찾았대요. 이 물음은 지워야 할까요?" 손을 들게 한다. "못 찾은 물음은 실패가 아니라 다음에 알아볼 물음이에요. 지우지 않고 별표를 붙여 남겨요." 시연 단추로 물음 카드가 \'아직 못 찾았어요\' 칸에 들어가는 모습을 보여 준다.',
        student: '우리 모둠 큰 종이에서 쪽지가 하나도 없는 물음을 찾아 손가락으로 가리켜 봐요.',
        demo: { tool: 'mindmap', options: { topic: '지렁이 모둠', slots: ['답을 찾았어요', '아직 못 찾았어요'], cards: ['왜 비 온 뒤에 나올까? ▶ 쪽지 없음'], shuffle: false }, sequence: [{ sort: { '답을 찾았어요': [], '아직 못 찾았어요': ['왜 비 온 뒤에 나올까? ▶ 쪽지 없음'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 찾은 물음과 못 찾은 물음 나누기', minutes: 13, tool: 'mindmap',
            teacher: '"물음 옆 화살표 뒤에 쪽지가 있나요?" 카드를 함께 읽는다. 못 찾은 물음을 \'지울 물음\'이라고 말하는 학생에게 "이 물음이 없어지면 다음에 누가 알아볼 수 있을까요?"라고 묻는다. 지렁이가 비 온 뒤 땅 위로 나오는 까닭은 어른들도 여러 가지로 말한다는 것을 알려 주어, 못 찾는 것이 부끄러운 일이 아니라고 짚는다.',
            task: '모둠 물음을 답을 찾은 것과 아직 못 찾은 것으로 나누고, 못 찾은 물음을 어떻게 할지 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '지렁이 모둠 물음을 답을 찾은 것과 아직 못 찾은 것으로 나누어 보세요.', toolOptions: { topic: '지렁이 모둠', slots: ['답을 찾았어요', '아직 못 찾았어요'], cards: ['무엇을 먹을까? ▶ 흙 속 썩은 잎', '눈이 있을까? ▶ 눈이 없어요', '왜 비 온 뒤에 나올까? ▶ 쪽지 없음'] },
                target: { sort: { '답을 찾았어요': ['무엇을 먹을까? ▶ 흙 속 썩은 잎', '눈이 있을까? ▶ 눈이 없어요'], '아직 못 찾았어요': ['왜 비 온 뒤에 나올까? ▶ 쪽지 없음'] } }, difficulty: 0.1,
                hints: ['카드마다 화살표 뒤에 답 쪽지가 있는지 읽어 봐요.', '\'눈이 없어요\'도 찾은 답이에요. 쪽지 없음과 다르게 생각해요.', '썩은 잎, 눈이 없어요는 찾은 답, 쪽지 없음은 아직 못 찾은 물음이에요.'],
                levels: { challenge: { prompt: '지렁이 모둠과 개미 모둠 물음을 답을 찾은 것과 아직 못 찾은 것으로 나누어 보세요.', toolOptions: { cards: ['무엇을 먹을까? ▶ 흙 속 썩은 잎', '눈이 있을까? ▶ 눈이 없어요', '왜 비 온 뒤에 나올까? ▶ 쪽지 없음', '개미 다리는 몇 개일까? ▶ 여섯 개', '개미는 몇 년을 살까? ▶ 쪽지 없음'] },
                  target: { sort: { '답을 찾았어요': ['무엇을 먹을까? ▶ 흙 속 썩은 잎', '눈이 있을까? ▶ 눈이 없어요', '개미 다리는 몇 개일까? ▶ 여섯 개'], '아직 못 찾았어요': ['왜 비 온 뒤에 나올까? ▶ 쪽지 없음', '개미는 몇 년을 살까? ▶ 쪽지 없음'] } } } } },
              { prompt: '못 찾은 물음을 발표에서 말하는 좋은 문장을 골라 보세요.', toolOptions: { mode: 'pick', basket: '좋은 문장', cards: ['"이 물음은 아직 못 찾았어요. 다음에 도서실에서 더 찾아볼 거예요."', '"이 물음은 없었던 걸로 할게요."', '"답은 아마 이거예요." 하고 지어서 말해요'] },
                target: { pick: ['"이 물음은 아직 못 찾았어요. 다음에 도서실에서 더 찾아볼 거예요."'] }, difficulty: 0.1,
                hints: ['못 찾은 물음을 솔직하게 말하고 다음 할 일까지 말하는지 살펴봐요.', '없었던 걸로 하거나 지어서 말하면 친구들이 잘못 알게 돼요.', '아직 못 찾았다고 말하고 더 찾아볼 곳을 말한 카드를 골라요.'] },
              { prompt: '못 찾은 물음마다 다음에 알아볼 곳을 이어 보세요.', toolOptions: { mode: 'match', topic: '다음에 어디서?', slots: [{ id: 's1', label: '할아버지는 어릴 때 지렁이를 무엇이라고 부르셨을까?' }, { id: 's2', label: '비 온 다음 날 운동장에 지렁이가 몇 마리 나올까?' }, { id: 's3', label: '바다에도 지렁이처럼 생긴 동물이 살까?' }], cards: ['할아버지께 여쭈어요', '비 온 다음 날 직접 세어 봐요', '바다 동물 책을 찾아봐요'] },
                target: { match: { s1: '할아버지께 여쭈어요', s2: '비 온 다음 날 직접 세어 봐요', s3: '바다 동물 책을 찾아봐요' } }, difficulty: 0.15,
                hints: ['그 답을 아는 사람이 있는지, 우리가 직접 볼 수 있는지, 멀어서 책을 봐야 하는지 따져요.', '할아버지의 어린 시절은 할아버지가, 운동장은 우리가 직접 알 수 있어요.', '부르던 이름은 할아버지께, 운동장 지렁이 수는 직접 세기, 바다 동물은 책이에요.'],
                levels: { challenge: { toolOptions: { cards: ['할아버지께 여쭈어요', '비 온 다음 날 직접 세어 봐요', '바다 동물 책을 찾아봐요', '공룡 그림책을 봐요'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 우리 모둠 못 찾은 물음에 별표 붙이기 (모둠 활동)', minutes: 14, tool: 'emotion',
            teacher: '모둠 큰 종이에서 쪽지가 없는 물음에 별 붙임딱지를 붙이고, 그 옆에 다음에 알아볼 곳을 짧게 쓴다. 못 찾은 물음을 몰래 떼려는 모둠에 "별표 물음은 우리 반 \'궁금해요 상자\'로 가서 2학년이 되어서도 알아볼 수 있어요"라고 말해 준다. 별표 물음은 쪽지로 한 장 더 써서 상자에 넣는다.',
            task: '못 찾은 물음을 어떻게 할지 고르고, 우리 모둠 큰 종이의 못 찾은 물음에 별표를 붙여요.',
            levels: CARD_LV,
            items: [
              { prompt: '모둠 물음 하나의 답을 끝내 못 찾았어요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '민지 모둠', situation: '\'지렁이는 왜 비 온 뒤에 나올까?\'는 책에도, 물어본 어른에게도 답이 하나로 나오지 않았어요.', choices: [
                { id: 'erase', text: '물음을 지우개로 지워요', result: '물음판이 깔끔해 보이지만 궁금했던 것이 사라져요.', mood: '아쉬움', why: '못 찾은 물음도 소중해요. 남겨 두면 다음에 알아볼 수 있어요.' },
                { id: 'star', text: '물음에 별표를 붙여 남겨요', result: '친구들이 "우리도 같이 알아보자!" 하고 말해요.', mood: '뿌듯함' },
                { id: 'make', text: '그럴듯한 답을 지어 써요', result: '친구들이 지어낸 답을 진짜로 알게 돼요.', mood: '걱정', why: '모르는 것은 모른다고 남겨요.' }] }, target: { choice: 'star' }, difficulty: 0.1 },
              { prompt: '우리 모둠 큰 종이의 못 찾은 물음에 별 붙임딱지를 붙이고 다음에 알아볼 곳을 썼으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '별표 물음을 쪽지에 한 장 더 써서 \'궁금해요 상자\'에 넣었으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"\'궁금해요 상자\'에 별표 물음이 몇 장 모였는지 함께 세어 볼까요?" 상자를 흔들어 보이며 "이 물음들은 우리 반이 앞으로 알아볼 거리예요."라고 말한다. 다음 시간에는 알게 된 것과 별표 물음을 모두 담아 모둠 발표회를 연다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '고양이 모둠', slots: ['답을 찾았어요', '아직 못 찾았어요'], cards: ['무엇을 먹을까? ▶ 사료와 물', '꿈을 꿀까? ▶ 쪽지 없음', '하루에 얼마나 잘까? ▶ 쪽지 없음'] }, prompt: '고양이 모둠 물음을 답을 찾은 것과 아직 못 찾은 것으로 나누어 보세요.', target: { sort: { '답을 찾았어요': ['무엇을 먹을까? ▶ 사료와 물'], '아직 못 찾았어요': ['꿈을 꿀까? ▶ 쪽지 없음', '하루에 얼마나 잘까? ▶ 쪽지 없음'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '답을 못 찾은 물음은 어떻게 할까요?', options: ['표시해서 남겨 두어요', '지워요', '답을 지어 써요'], answer: 0, difficulty: 0.1, explain: '못 찾은 물음은 다음에 알아볼 물음이에요. 표시해서 남겨요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '못 찾은 물음 남기기',
      items: [
        { type: 'choice', prompt: '\'개미는 몇 년을 살까? ▶ 쪽지 없음\'은 어느 쪽일까요?', options: ['답을 찾았어요', '아직 못 찾았어요'], answer: '아직 못 찾았어요' },
        { type: 'choice', prompt: '못 찾은 물음에 할 일에 ○ 하세요.', options: ['별표를 붙여 남겨요', '지우개로 지워요'], answer: '별표를 붙여 남겨요' },
        { type: 'table', prompt: '우리 모둠의 못 찾은 물음과 다음에 알아볼 곳을 쓰세요.', columns: ['못 찾은 물음', '다음에 알아볼 곳'], rows: 2 },
        { type: 'short', prompt: '못 찾은 물음을 남겨 두면 좋은 까닭을 쓰세요.' },
      ],
      easy: {
        note: '못 찾은 물음 = 다음에 알아볼 물음 ★',
        items: [
          { type: 'choice', prompt: '못 찾은 물음은?', options: ['남겨요', '지워요'], answer: '남겨요' },
          { type: 'short', prompt: '우리 모둠의 못 찾은 물음을 하나 쓰세요.' },
          { type: 'draw', prompt: '별표를 붙인 우리 모둠 물음을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 모둠에서는 별 붙임딱지를 붙이는 역할을 맡아요.',
      base: '모두 놓은 뒤 확인을 눌러요. 못 찾은 물음에 별표를 붙이고 다음에 알아볼 곳을 써요.',
      challenge: '두 모둠 물음 다섯 장을 나누고, 이을 곳에 상관없는 카드가 섞여 있어요. 못 찾은 물음을 알아볼 곳을 두 군데 정해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 답을 못 찾은 물음은 지워야 한다고 여긴다 → 별표 물음을 \'궁금해요 상자\'에 모아 우리 반의 다음 알아볼 거리로 보여 준다. ② 답을 지어낸다 → 쪽지마다 어디서 알았는지 적게 하고, 출처 없는 답은 별표로 돌린다. ③ \'눈이 없어요\'처럼 \'없다\'는 답을 못 찾은 것으로 여긴다 → 없다는 것도 찾은 답이라고 짚는다. 지렁이는 눈이 없고 몸으로 빛을 느끼며, 비 온 뒤 땅 위로 나오는 까닭은 여러 설명이 있어 1학년 수준에서 \'아직 못 찾은 물음\'의 좋은 예가 된다.',
  }));

  lessons.push(L(47, {
    title: '모둠 조사 결과 발표하고 친구 발표에 묻기',
    objective: '모둠 큰 종이를 보이며 알게 된 것과 못 찾은 물음을 발표하고, 다른 모둠 발표를 끝까지 들은 뒤 궁금한 것을 물을 수 있다.',
    illustration: ART('a group of four first graders holding up a big paper sheet with notes and a star sticker in front of the class, classmates raising hands to ask questions', '조사 발표회', [
      { motif: 'star', x: 100, y: 80, s: 0.6 }, { motif: 'star', x: 380, y: 80, s: 0.6 }, { motif: 'flower', x: 240, y: 232 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"오늘은 조사 발표회예요. 모둠마다 2분 발표하고, 1분 동안 듣는 친구들이 물어요. 여섯 모둠이면 18분이에요." 발표 차례를 칠판에 적는다. "발표하는 사람이 할 일과 듣는 사람이 할 일은 무엇일까요?" 시연 단추로 할 일 카드가 나뉘는 모습을 보여 준다.',
        student: '우리 모둠 발표에서 내가 맡은 문장을 작게 한 번 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '발표회 약속', slots: ['발표하는 사람', '듣는 사람'], cards: ['또박또박 크게 말해요', '발표하는 친구를 바라봐요'], shuffle: false }, sequence: [{ sort: { '발표하는 사람': ['또박또박 크게 말해요'], '듣는 사람': ['발표하는 친구를 바라봐요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 발표회 약속과 좋은 물음', minutes: 7, tool: 'mindmap',
            teacher: '"다람쥐 모둠 발표를 듣고 무엇을 물으면 좋을까요?" 글씨나 꾸미기를 지적하는 말과 주제를 더 알고 싶어 묻는 말을 견주어 들려준다. 짧게 확인하고 바로 발표회로 넘어간다.',
            task: '발표하는 사람과 듣는 사람이 할 일을 나누고, 발표를 듣고 하는 좋은 물음을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '발표회에서 할 일을 발표하는 사람과 듣는 사람으로 나누어 보세요.', toolOptions: { topic: '발표회 약속', slots: ['발표하는 사람', '듣는 사람'], cards: ['큰 종이를 친구들 쪽으로 들어요', '또박또박 크게 말해요', '발표하는 친구를 바라봐요', '발표가 끝난 뒤 손을 들고 물어요'] },
                target: { sort: { '발표하는 사람': ['큰 종이를 친구들 쪽으로 들어요', '또박또박 크게 말해요'], '듣는 사람': ['발표하는 친구를 바라봐요', '발표가 끝난 뒤 손을 들고 물어요'] } }, difficulty: 0.1,
                hints: ['카드마다 앞에 나와 말하는 사람이 할 일인지, 앉아서 듣는 사람이 할 일인지 따져요.', '큰 종이를 드는 사람은 앞에 나온 사람이에요.', '종이 들기·크게 말하기는 발표하는 사람, 바라보기·끝난 뒤 묻기는 듣는 사람이에요.'] },
              { prompt: '다람쥐 모둠 발표를 듣고 할 좋은 물음만 골라 보세요.', toolOptions: { mode: 'pick', basket: '좋은 물음', cards: ['다람쥐는 겨울잠을 얼마나 오래 잘까?', '해바라기 씨를 먹는 것은 어디서 알았어?', '너희 모둠 글씨가 삐뚤어.', '우리 모둠이 더 잘했어.'] },
                target: { pick: ['다람쥐는 겨울잠을 얼마나 오래 잘까?', '해바라기 씨를 먹는 것은 어디서 알았어?'] }, difficulty: 0.15,
                hints: ['발표한 주제(다람쥐)를 더 알고 싶어서 묻는 말인지 살펴봐요.', '글씨나 잘하고 못한 것을 말하는 카드는 물음이 아니에요.', '겨울잠 길이, 어디서 알았는지 묻는 두 카드를 골라요.'],
                levels: { challenge: { prompt: '다람쥐 모둠 발표를 듣고 할 좋은 물음만 골라 보세요. 물음표가 있어도 주제와 상관없으면 빼요.', toolOptions: { cards: ['다람쥐는 겨울잠을 얼마나 오래 잘까?', '해바라기 씨를 먹는 것은 어디서 알았어?', '너희 모둠 글씨가 삐뚤어.', '우리 모둠이 더 잘했어.', '쉬는 시간은 언제야?'] } } } },
              { prompt: '친구가 물었는데 우리 모둠이 답을 몰라요. 어떻게 말할까요?', toolOptions: { mode: 'pick', basket: '좋은 대답', cards: ['"그건 못 찾았어요. 못 찾은 물음에 더 적어 둘게요."', '"아마 그럴 거예요." 하고 지어서 말해요', '못 들은 척 다음으로 넘어가요'] },
                target: { pick: ['"그건 못 찾았어요. 못 찾은 물음에 더 적어 둘게요."'] }, difficulty: 0.1,
                hints: ['모르는 것을 솔직하게 말하고 다음에 할 일까지 말하는 대답을 찾아요.', '지어서 말하거나 못 들은 척하면 물은 친구가 잘못 알거나 서운해요.', '못 찾았다고 말하고 못 찾은 물음에 적어 둔다는 카드를 골라요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 조사 발표회 (발표와 듣기)', minutes: 20, tool: 'emotion',
            teacher: '모둠마다 2분 발표, 1분 묻고 답하기로 여섯 모둠이 18분 동안 발표한다. 타이머로 시간을 알려 준다. 발표하는 모둠은 큰 종이를 들고 주제 → 물음 → 알게 된 것 → 별표 물음 차례로 말한다. 듣는 학생은 활동지 표에 새로 알게 된 것을 한 낱말로 적는다. 발표가 끝나면 개구리 모둠 발표 카드를 함께 나누어 본다.',
            task: '우리 모둠 발표를 하고, 다른 모둠 발표를 들으며 알게 된 것과 못 찾은 물음을 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '우리 모둠 발표를 하고, 다른 모둠 발표를 끝까지 들으며 새로 알게 된 것을 활동지에 적었으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '개구리 모둠이 발표에서 말한 것을 알게 된 것과 못 찾은 물음으로 나누어 보세요.', toolOptions: { mode: 'sort', topic: '개구리 모둠 발표', slots: ['알게 된 것', '못 찾은 물음'], cards: ['개구리는 작은 벌레를 먹어요', '개구리는 겨울잠을 자요', '개구리는 왜 비 오는 날 많이 울까?', '개구리는 몇 년을 살까?'] },
                target: { sort: { '알게 된 것': ['개구리는 작은 벌레를 먹어요', '개구리는 겨울잠을 자요'], '못 찾은 물음': ['개구리는 왜 비 오는 날 많이 울까?', '개구리는 몇 년을 살까?'] } }, difficulty: 0.15,
                hints: ['개구리 모둠이 답을 찾아 말한 것인지, 아직 물음으로 남은 것인지 살펴봐요.', '물음표로 끝나는 카드는 아직 답을 못 찾은 물음이에요.', '벌레를 먹어요·겨울잠을 자요는 알게 된 것, 왜 울까·몇 년을 살까는 못 찾은 물음이에요.'] },
              { prompt: '다른 모둠 발표에서 새로 알게 된 것 하나를 짝에게 말했으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"다른 모둠 발표에서 나도 알아보고 싶어진 별표 물음이 있나요?" 두세 명이 말한다. 발표회에서 새로 나온 물음은 \'궁금해요 상자\'에 넣는다. 다음 시간에는 \'상상\' 단원에서 해 본 일을 모두 돌아본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '다람쥐 모둠 발표', slots: ['알게 된 것', '못 찾은 물음'], cards: ['다람쥐는 볼에 먹이를 담아 날라요', '다람쥐는 몇 마리씩 모여 살까?', '다람쥐는 숲에 살아요'] }, prompt: '다람쥐 모둠이 발표에서 말한 것을 알게 된 것과 못 찾은 물음으로 나누어 보세요.', target: { sort: { '알게 된 것': ['다람쥐는 볼에 먹이를 담아 날라요', '다람쥐는 숲에 살아요'], '못 찾은 물음': ['다람쥐는 몇 마리씩 모여 살까?'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '다른 모둠이 발표할 때 듣는 사람이 할 일은 무엇일까요?', options: ['끝까지 바라보며 듣고 끝난 뒤 물어요', '발표 중에 끼어들어 물어요', '우리 모둠 발표만 연습해요'], answer: 0, difficulty: 0.1, explain: '끝까지 들어야 궁금한 것을 알맞게 물을 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '조사 발표회',
      items: [
        { type: 'table', prompt: '다른 모둠 발표에서 새로 알게 된 것을 쓰세요.', columns: ['모둠 주제', '새로 알게 된 것'], rows: 3 },
        { type: 'choice', prompt: '발표를 듣고 할 좋은 물음에 ○ 하세요.', options: ['그건 어디서 알았어?', '글씨가 삐뚤어.'], answer: '그건 어디서 알았어?' },
        { type: 'check', prompt: '발표회에서 내가 한 것에 ✓ 하세요.', options: ['우리 모둠 발표에서 맡은 문장을 말했어요', '다른 모둠 발표를 끝까지 들었어요', '궁금한 것을 손을 들고 물었어요'] },
        { type: 'short', prompt: '나도 알아보고 싶어진 다른 모둠의 별표 물음을 쓰세요.' },
      ],
      easy: {
        note: '말할 때 크게, 들을 때 바라보기!',
        items: [
          { type: 'choice', prompt: '듣는 사람은?', options: ['발표하는 친구를 바라봐요', '떠들어요'], answer: '발표하는 친구를 바라봐요' },
          { type: 'short', prompt: '새로 알게 된 것을 한 가지 쓰세요.' },
          { type: 'draw', prompt: '발표회에서 기억에 남는 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 발표에서는 주제 한 문장을 맡아요.',
      base: '모두 놓은 뒤 확인을 눌러요. 내가 맡은 문장을 발표하고 다른 모둠에 하나 물어요.',
      challenge: '좋은 물음 고르기에 주제와 상관없는 물음이 섞여 있어요. 발표 때 알게 된 것을 어디서 알았는지도 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 발표 시간이 넘친다 → 모둠당 2분을 타이머로 재고, 묻고 답하기는 1분 안에 두 물음까지만 받는다. ② 듣는 학생이 꾸미기·글씨를 지적한다 → 주제를 더 알고 싶어 묻는 말을 미리 보여 준다. ③ 모르는 물음에 답을 지어낸다 → "못 찾았어요. 적어 둘게요."를 모둠이 함께 연습해 둔다. 여섯 모둠 기준 18분이며, 모둠이 많으면 두 차시에 나누거나 모둠당 발표를 1분 30초로 줄인다.',
  }));

  lessons.push(L(48, {
    title: '\'상상\' 단원에서 해 본 일 돌아보고 스스로 평가하기',
    objective: '\'상상\' 단원에서 해 본 활동을 네 가지 묶음으로 나누어 돌아보고, 잘한 점과 더 해 보고 싶은 것을 말할 수 있다.',
    illustration: ART('a paper scrapbook opened wide with four pages showing an old oil lamp, a learning tree, children moving like rabbits and turtles, and a question board with star stickers', '상상 단원 돌아보기', [
      { motif: 'star', x: 100, y: 84, s: 0.6 }, { motif: 'tree', x: 400, y: 200, s: 0.8 }, { motif: 'flower', x: 90, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"이번 단원 이름은 \'상상\'이었어요. 우리는 무엇을 상상했을까요?" 칠판에 네 칸(옛날·지금·앞으로 / 1학년 배움 잇기 / 움직임 표현 / 궁금한 것 조사)을 그리고, 그동안 만든 작품과 활동지를 교실 둘레에 펼쳐 둔다. "오늘은 해 본 일을 돌아보고, 나는 얼마나 해냈는지 스스로 살펴봐요." 시연 단추로 활동 카드 하나가 알맞은 칸에 들어가는 모습을 보여 준다.',
        student: '교실 둘레의 내 작품 가운데 가장 기억에 남는 것을 하나 찾아 짝에게 가리켜 봐요.',
        demo: { tool: 'mindmap', options: { topic: '상상 단원', slots: ['옛날·지금·앞으로', '궁금한 것 조사'], cards: ['호롱불이 전등으로 바뀐 차례 놓기'], shuffle: false }, sequence: [{ sort: { '옛날·지금·앞으로': ['호롱불이 전등으로 바뀐 차례 놓기'], '궁금한 것 조사': [] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 해 본 일 묶어 돌아보기', minutes: 13, tool: 'mindmap',
            teacher: '활동 카드를 읽으며 "이 일을 할 때 무엇을 상상했나요?"라고 묻는다. 헷갈리는 카드는 교실 둘레의 작품을 직접 찾아가 보게 한다. 조사 차례를 놓을 때 \'발표하기\'를 앞에 놓는 학생에게 "모으지 않은 답을 발표할 수 있을까요?"라고 되묻는다.',
            task: '단원에서 해 본 활동을 네 묶음으로 나누고, 조사한 차례와 상상한 것을 나타낸 방법을 떠올려요.',
            levels: CARD_LV,
            items: [
              { prompt: '단원에서 해 본 활동을 네 묶음으로 나누어 보세요.', toolOptions: { topic: '상상 단원', slots: ['옛날·지금·앞으로', '1학년 배움 잇기', '움직임 표현', '궁금한 것 조사'], cards: ['호롱불이 전등으로 바뀐 차례 놓기', '배움 나무 꾸미기', '토끼와 거북처럼 빠르기 바꾸기', '모은 쪽지 물음별로 붙이기'] },
                target: { sort: { '옛날·지금·앞으로': ['호롱불이 전등으로 바뀐 차례 놓기'], '1학년 배움 잇기': ['배움 나무 꾸미기'], '움직임 표현': ['토끼와 거북처럼 빠르기 바꾸기'], '궁금한 것 조사': ['모은 쪽지 물음별로 붙이기'] } }, difficulty: 0.15,
                hints: ['카드마다 무엇을 했던 시간인지 교실 둘레의 작품을 떠올려 봐요.', '몸으로 한 활동, 옛날 물건을 본 활동, 배운 것을 이은 활동, 쪽지를 모은 활동을 나누어 생각해요.', '호롱불은 옛날·지금, 배움 나무는 배움 잇기, 토끼와 거북은 움직임, 쪽지 붙이기는 조사예요.'],
                levels: { challenge: { prompt: '단원에서 해 본 활동 여덟 가지를 네 묶음으로 나누어 보세요.', toolOptions: { cards: ['호롱불이 전등으로 바뀐 차례 놓기', '배움 나무 꾸미기', '토끼와 거북처럼 빠르기 바꾸기', '모은 쪽지 물음별로 붙이기', '앞으로의 우리 동네 꾸미기', '2학년 형·언니에게 인터뷰하기', '짝과 거울 놀이 하기', '못 찾은 물음에 별표 붙이기'] },
                  target: { sort: { '옛날·지금·앞으로': ['호롱불이 전등으로 바뀐 차례 놓기', '앞으로의 우리 동네 꾸미기'], '1학년 배움 잇기': ['배움 나무 꾸미기', '2학년 형·언니에게 인터뷰하기'], '움직임 표현': ['토끼와 거북처럼 빠르기 바꾸기', '짝과 거울 놀이 하기'], '궁금한 것 조사': ['모은 쪽지 물음별로 붙이기', '못 찾은 물음에 별표 붙이기'] } } } } },
              { prompt: '궁금한 것을 조사한 차례대로 놓아 보세요.', toolOptions: { mode: 'order', slots: 5, cards: ['겪은 일에서 주제 고르기', '물음 세 개 만들기', '여러 곳에서 답 모으기', '모은 쪽지를 물음별로 붙이기', '알게 된 것 발표하기'] },
                target: { order: ['겪은 일에서 주제 고르기', '물음 세 개 만들기', '여러 곳에서 답 모으기', '모은 쪽지를 물음별로 붙이기', '알게 된 것 발표하기'] }, difficulty: 0.2,
                hints: ['무엇을 알아볼지 정해야 물음을 만들 수 있어요. 맨 처음 한 일을 찾아요.', '쪽지를 붙이려면 먼저 답을 모아야 하고, 발표는 붙인 뒤에 해요.', '주제 고르기 → 물음 만들기 → 답 모으기 → 물음별로 붙이기 → 발표하기 차례예요.'] },
              { prompt: '상상한 것마다 무엇으로 나타냈는지 이어 보세요.', toolOptions: { mode: 'match', topic: '무엇으로 나타냈나?', slots: [{ id: 's1', label: '앞으로의 우리 동네' }, { id: 's2', label: '오늘 내 마음' }, { id: 's3', label: '2학년이 될 나' }], cards: ['색종이로 꾸몄어요', '몸으로 움직였어요', '편지로 썼어요'] },
                target: { match: { s1: '색종이로 꾸몄어요', s2: '몸으로 움직였어요', s3: '편지로 썼어요' } }, difficulty: 0.15,
                hints: ['그 시간에 손에 무엇을 들고 있었는지, 몸을 썼는지 떠올려 봐요.', '내 마음은 높이와 빠르기로 나타냈어요. 다시 견주어 봐요.', '동네는 색종이로 꾸미고, 마음은 몸으로 움직이고, 2학년이 될 나에게는 편지를 썼어요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 스스로 평가하고 나누기 (짝 활동)', minutes: 14, tool: 'emotion',
            teacher: '"눈금에는 정답이 없어요. 내가 해낸 만큼 솔직하게 골라요." 학생이 고르는 동안 교사는 돌아다니며 고른 까닭을 한 명씩 짧게 묻는다. 짝 활동은 한 사람이 1분씩, 가장 즐거웠던 활동과 까닭을 말한다. 끝으로 \'궁금해요 상자\'에 넣은 별표 물음 가운데 2학년이 되어 알아보고 싶은 것을 하나 골라 쪽지에 쓴다.',
            task: '단원에서 해낸 것을 눈금으로 스스로 평가하고, 가장 즐거웠던 활동을 짝에게 말해요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '옛날과 지금을 견주어 물음을 만드는 것을 얼마나 해냈는지 솔직하게 골라 보세요. 정답은 없어요.', toolOptions: { mode: 'scale', steps: 3, situation: '옛날 물건과 지금 물건을 견주어 궁금한 것을 물음으로 만들었어요.', feeling: '뿌듯함', ask: '얼마나 해냈나요?', scaleLabels: { 1: '조금', 2: '꽤', 3: '아주 잘' } }, target: { level: 'any' }, difficulty: 0.05,
                hints: ['옛날 물건과 지금 물건을 견주며 물음을 만들던 때를 떠올려 봐요.', '정답은 없어요. 내가 해낸 만큼 눈금 하나를 눌러요.', '조금 했으면 1, 꽤 했으면 2, 아주 잘했으면 3을 골라요.'] },
              { prompt: '궁금한 것을 여러 곳에서 찾아 알게 된 것을 말하는 것을 얼마나 해냈는지 솔직하게 골라 보세요. 정답은 없어요.', toolOptions: { mode: 'scale', steps: 3, situation: '내 주제의 물음을 만들고, 책·사람·직접 보기로 답을 모아 발표했어요.', feeling: '뿌듯함', ask: '얼마나 해냈나요?', scaleLabels: { 1: '조금', 2: '꽤', 3: '아주 잘' } }, target: { level: 'any' }, difficulty: 0.05,
                hints: ['물음을 만들고, 여러 곳에서 답을 모아 발표하던 때를 떠올려 봐요.', '정답은 없어요. 내가 해낸 만큼 눈금 하나를 눌러요.', '조금 했으면 1, 꽤 했으면 2, 아주 잘했으면 3을 골라요.'] },
              { prompt: '단원에서 가장 즐거웠던 활동과 그 까닭을 짝에게 말했으면 "다 했어요"를 누르세요.', free: true, talk: true },
              { prompt: '2학년이 되어 알아보고 싶은 별표 물음을 하나 골라 쪽지에 썼으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"\'상상\' 단원에서 우리는 옛날을 살피고, 배움을 잇고, 몸으로 나타내고, 궁금한 것을 스스로 알아보았어요." 칠판의 네 칸을 짚으며 함께 말한다. 두세 명이 2학년이 되어 알아보고 싶은 물음을 읽는다. 쓴 쪽지는 \'궁금해요 상자\'에 넣어 다음 학년 담임에게 전한다고 알려 준다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '상상 단원', slots: ['옛날·지금·앞으로', '궁금한 것 조사'], cards: ['옛날 버스와 지금 버스 견주기', '달팽이 그림 자료 읽기', '옛날 장날 알아보기', '화단 살펴보고 세기'] }, prompt: '활동 카드를 알맞은 묶음으로 나누어 보세요.', target: { sort: { '옛날·지금·앞으로': ['옛날 버스와 지금 버스 견주기', '옛날 장날 알아보기'], '궁금한 것 조사': ['달팽이 그림 자료 읽기', '화단 살펴보고 세기'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '궁금한 것을 조사할 때 여러 곳에서 답을 찾으면 왜 좋을까요?', options: ['한 곳에 없는 답을 다른 곳에서 찾을 수 있어요', '한 곳만 보면 답을 다 알 수 있어요', '여러 곳을 다니며 놀 수 있어요'], answer: 0, difficulty: 0.1, explain: '책, 사람, 직접 보기를 함께 쓰면 한 곳에 없는 답도 찾을 수 있어요.' },
          { type: 'tool', tool: 'emotion', options: { mode: 'scale', steps: 3, situation: '\'상상\' 단원 공부를 모두 마쳤어요.', feeling: '뿌듯함', ask: '단원을 마친 마음은 얼마나 뿌듯한가요?' }, prompt: '단원을 마친 내 마음을 솔직하게 골라 보세요. 정답은 없어요.', target: { level: 'any' }, difficulty: 0.05 },
        ],
      },
    ],
    worksheet: {
      title: '\'상상\' 단원 돌아보기',
      items: [
        { type: 'choice', prompt: '\'짝과 거울 놀이 하기\'는 어느 묶음일까요?', options: ['옛날·지금·앞으로', '움직임 표현', '궁금한 것 조사'], answer: '움직임 표현' },
        { type: 'table', prompt: '네 묶음마다 기억에 남는 활동을 하나씩 쓰세요.', columns: ['묶음', '기억에 남는 활동'], cells: [['옛날·지금·앞으로', ''], ['1학년 배움 잇기', ''], ['움직임 표현', ''], ['궁금한 것 조사', '']] },
        { type: 'short', prompt: '단원에서 내가 잘한 점을 한 가지 쓰세요.' },
        { type: 'short', prompt: '2학년이 되어 알아보고 싶은 물음을 쓰세요.' },
        { type: 'draw', prompt: '단원에서 가장 즐거웠던 순간을 그려 보세요.' },
      ],
      easy: {
        note: '옛날 · 배움 · 움직임 · 조사',
        items: [
          { type: 'choice', prompt: '\'모은 쪽지 물음별로 붙이기\'는 어느 묶음일까요?', options: ['궁금한 것 조사', '움직임 표현'], answer: '궁금한 것 조사' },
          { type: 'short', prompt: '가장 즐거웠던 활동을 쓰세요.' },
          { type: 'draw', prompt: '가장 즐거웠던 순간을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 교실 둘레의 작품을 직접 보며 카드를 나누어요.',
      base: '모두 놓은 뒤 확인을 눌러요. 눈금으로 스스로 평가하고 짝에게 즐거웠던 활동을 말해요.',
      challenge: '나눌 활동 카드가 여덟 장으로 늘어요. 짝에게 말할 때 다음에 더 잘하고 싶은 점도 함께 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 활동이 어느 묶음인지 잊었다 → 교실 둘레에 차시 작품을 묶음별로 펼쳐 두고 직접 찾아가 보게 한다. ② 눈금을 모두 가장 높게 고른다 → 정답이 없는 솔직한 자기 평가이며 점수가 아니라고 거듭 알려 주고, 고른 까닭을 한 명씩 짧게 묻는다. ③ 2학년에 알아볼 물음을 못 고른다 → \'궁금해요 상자\'의 별표 물음에서 하나를 골라도 된다고 한다. 눈금 결과는 교사가 다음 학년 인계 자료로 참고한다.',
  }));

  // ── 차시 끝 ──

  PaperLessons.registerUnit({
    id: 'g1-int-2-07', schema: 'edu-unit.v1', catalogUnit: UNIT,
    grade: 1, subject: '통합교과', unitTitle: TITLE,
    flow: '1~12차시는 옛날 물건·집·놀이·탈것을 지금과 견주어 달라진 것에 물음을 만들고, 바뀐 차례를 설명한 뒤 앞으로의 모습을 상상해 꾸민다. 13~24차시는 1학년 동안 배운 것을 고르고 2학년·3학년에 배울 것과 이어, 앞으로의 배움을 그림과 편지로 나타낸다. 25~36차시는 마음을 몸으로 나타내며 높이와 빠르기를 바꾼 여덟 박 움직임을 만들고, 친구 말을 듣고 고쳐 모둠 발표회를 연다. 37~47차시는 겪은 일에서 주제를 스스로 고르고 물음 세 개를 만든 뒤, 책·사람·직접 보기로 답을 모아 물음별로 붙이고 알게 된 것과 못 찾은 물음을 발표한다. 48차시는 네 묶음을 돌아보고 눈금으로 스스로 평가하며, 못 찾은 물음은 다음 학년의 알아볼 거리로 남긴다.',
    refs: {},
    lessons: lessons,
  });
})();
