/* 1학년 1학기 통합교과 3. 우리나라 — 48차시
 * 1~12차시 [슬기로운 생활] 우리나라의 모습과 문화: 물음 만들기(1~4) → 그림·글 자료 읽고 나누기(5~8) → 알게 된 것 발표하고 다른 나라와 견주기(9~12)
 * 13~24차시 [슬기로운 생활] 알고 싶은 나라: 나라 고르고 궁금한 것·방법 정하기(13~16) → 자료 모으고 놀라운 것 표시(17~20) → 그림과 함께 설명하고 더 물을 것 남기기(21~24)
 * 25~36차시 [즐거운 생활] 국악과 전통 미술: 국악기 소리·전통 무늬 알기(25~28) → 전래 동요 장단·무늬 따라 꾸미기(29~32) → 생활 속에서 찾고 친근한 점 나누기(33~36)
 * 37~48차시 [즐거운 생활] 여러 나라 음악과 미술: 다른 점 찾기(37~40) → 끝까지 듣고 보며 몸·색으로 나타내기(41~44) → 다른 느낌 받아들이기와 단원 정리(45~48)
 * 성취기준: units-map 단원 목록이 비어 있고 미확인(standardsVerified:false)이라 모든 차시 standards: [] (지어내지 않는다).
 * 노랫말·말놀이·예문은 직접 지었다. 전래 동요는 노랫말이 전해 내려오는 것만 짧게 쓰고 '전래 동요'라고 밝힌다(두껍아 두껍아, 강강술래, 대문 놀이).
 * 지도는 실제 지도가 아니라 칸 지도다(우리나라 모양·나라 자리를 어림해 그린 것) — 교사가 실제 지도·지구본을 함께 보여 준다.
 * 학생 이름은 가명(민지·준호·하준·서아)만 쓴다.
 */
(function () {
  var UNIT = 'g1-통합교과-1학기-3';
  var TITLE = '3. 우리나라';
  var HEAD = 'Layered paper-cut illustration of ';
  var TAIL = ', with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.';
  function two(n) { return (n < 10 ? '0' : '') + n; }
  function L(n, x) {
    var head = {
      id: 'g1-int-1-03-' + two(n), schema: 'edu-lesson.v1', catalog: { unit: UNIT, lesson: n },
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
  function merge(a, b) { var o = {}, k; for (k in a) o[k] = a[k]; for (k in b || {}) o[k] = b[k]; return o; }
  var MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };
  var CARD_LV = { easy: { live: true, instant: true }, base: {}, challenge: {} };

  // 우리나라 칸 지도(어림): 세 쪽이 바다, 동쪽이 높고 서쪽이 낮다. 가장 높은 칸은 백두산.
  var KR_HEIGHTS = [
    [-1, 2, 4, 3, 2, -1],
    [-1, 1, 2, 3, 2, -1],
    [-1, 0, 1, 3, 1, -1],
    [-1, 0, 1, 2, 1, -1],
    [-1, 0, 1, 1, 0, -1],
    [-1, 1, -1, -1, -1, -1],
  ];
  var KR_PLACES = {
    서울: { name: '서울', icon: 'capital', at: [1, 2] },
    부산: { name: '부산', icon: 'port', at: [4, 4] },
    제주도: { name: '제주도', icon: 'island', at: [1, 5] },
    독도: { name: '독도', icon: 'island', at: [5, 2] },
    동해: { name: '동해', icon: 'dot', at: [5, 4] },
    서해: { name: '서해', icon: 'dot', at: [0, 3] },
    남해: { name: '남해', icon: 'dot', at: [3, 5] },
    백두산: { name: '백두산', icon: 'mountain', at: [2, 0] },
    경주: { name: '경주', icon: 'heritage', at: [4, 3] },
  };
  function KR(names, extra) {
    return merge({ grid: [6, 6], heights: KR_HEIGHTS, heightLegend: false, title: '우리나라 칸 지도', places: names.map(function (n) { return KR_PLACES[n]; }) }, extra);
  }
  // 세계 칸 지도(어림): 나라 자리만 어림해 놓았다.
  var W_PLACES = {
    우리나라: { name: '우리나라', icon: 'capital', at: [5, 1] },
    중국: { name: '중국', icon: 'dot', at: [4, 1] },
    일본: { name: '일본', icon: 'island', at: [6, 1] },
    몽골: { name: '몽골', icon: 'dot', at: [4, 0] },
    베트남: { name: '베트남', icon: 'dot', at: [4, 2] },
    인도: { name: '인도', icon: 'dot', at: [3, 2] },
    프랑스: { name: '프랑스', icon: 'dot', at: [1, 0] },
    이집트: { name: '이집트', icon: 'dot', at: [1, 2] },
    케냐: { name: '케냐', icon: 'dot', at: [2, 3] },
  };
  function WORLD(names, extra) {
    return merge({ grid: [7, 4], title: '세계 여러 나라 칸 지도', places: names.map(function (n) { return W_PLACES[n]; }) }, extra);
  }

  var lessons = [];

  // ───────────────────────── 1~4차시: 우리나라에 대해 물음 만들기 ─────────────────────────

  lessons.push(L(1, {
    title: '우리나라 하면 떠오르는 것 모으고 물음 만들기',
    objective: '우리나라 하면 떠오르는 것을 땅의 모습과 문화로 나누고, 알고 싶은 것을 "~일까?" 하는 물음으로 바꾸어 말할 수 있다.',
    illustration: ART('a paper map of Korea surrounded by blue sea, with a Korean flag, a rose of Sharon flower and a bowl of kimchi floating around it, children raising their hands with question marks', '우리나라 하면 떠오르는 것은?', [
      { motif: 'flower', x: 110, y: 226, color: 'rose' }, { motif: 'mountain', x: 360, y: 214 }, { motif: 'wave', x: 240, y: 236 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 7,
        teacher: '"우리나라 하면 무엇이 떠오르나요?" 학생들이 말한 것(태극기, 김치, 산, 바다, 노래…)을 칠판 두 쪽에 나누어 적는다. 한쪽은 땅의 모습, 다른 쪽은 우리가 먹고 입고 노는 것이라고만 말하고 이름은 학생이 붙이게 한다. 시연 단추로 카드가 두 가지에 나누어 들어가는 모습을 보여 준다. "이번 단원에서는 우리나라를 탐험하는 탐험가가 되어요. 탐험가는 먼저 궁금한 것을 물어요."',
        student: '우리나라 하면 떠오르는 것을 하나 골라 짝에게 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '우리나라', slots: ['땅의 모습', '우리 문화'], cards: ['높은 산이 많아요', '김치를 먹어요'], shuffle: false }, sequence: [{ sort: { '땅의 모습': ['높은 산이 많아요'], '우리 문화': ['김치를 먹어요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 25,
        activities: [
          {
            id: 'a1', title: '활동 1. 떠오르는 것을 두 가지로 나누기', minutes: 12, tool: 'mindmap',
            teacher: '"이것은 땅이 생긴 모습일까요, 사람들이 하는 일일까요?" 카드를 하나씩 소리 내어 읽고 몸으로 흉내(산은 두 팔을 세모로, 김치는 먹는 흉내)를 내게 한다. "문화는 옛날 것만이에요"라고 말하는 학생에게 "오늘 우리가 부르는 노래, 쓰는 글자도 우리가 만든 거예요"라고 짚는다.',
            task: '카드를 읽고 땅의 모습과 우리 문화로 나누어 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '카드를 땅의 모습과 우리 문화로 나누어 보세요.', toolOptions: { topic: '우리나라', slots: ['땅의 모습', '우리 문화'], cards: ['세 쪽이 바다예요', '높은 산이 많아요', '한복을 입어요', '김치를 먹어요'] },
                target: { sort: { '땅의 모습': ['세 쪽이 바다예요', '높은 산이 많아요'], '우리 문화': ['한복을 입어요', '김치를 먹어요'] } }, difficulty: 0.1 },
              { prompt: '우리나라를 나타내는 것만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '우리나라를 나타내요', cards: ['태극기', '무궁화', '한글', { id: '에펠탑', text: '에펠탑', why: '에펠탑은 프랑스에 있는 탑이에요.' }] },
                target: { pick: ['태극기', '무궁화', '한글'] }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['태극기', '무궁화', '한글', { id: '에펠탑', text: '에펠탑', why: '에펠탑은 프랑스에 있는 탑이에요.' }, { id: '판다', text: '판다', why: '판다는 중국에 사는 동물이에요.' }] } } } },
              { prompt: '요즘 것도 섞여 있어요. 땅의 모습과 우리 문화로 나누어 보세요.', toolOptions: { topic: '우리나라', slots: ['땅의 모습', '우리 문화'], cards: ['긴 강 한강', '동쪽 바다 동해', '케이팝 노래', '한글로 쓴 간판'] },
                target: { sort: { '땅의 모습': ['긴 강 한강', '동쪽 바다 동해'], '우리 문화': ['케이팝 노래', '한글로 쓴 간판'] } }, difficulty: 0.2,
                predict: { q: '"케이팝 노래"도 우리 문화일까요?', options: ['네', '아니요'], answer: 0 },
                conclude: '옛날 것뿐 아니라 오늘 우리가 부르는 노래와 쓰는 글자도 우리 문화예요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 알고 싶은 것을 물음으로 바꾸기', minutes: 13, tool: 'mindmap',
            teacher: '"\'태극기는 멋져요\'는 내 생각을 알려 주는 말이에요. 궁금할 때는 끝을 어떻게 바꿀까요?" 끝을 "~일까?", "~할까?"로 올려 읽게 한다. 말끝을 올려 읽으면 묻는 말이 된다는 것을 손을 위로 올리는 몸짓과 함께 짚는다. 물음을 다 만든 학생은 짝에게 묻고, 짝은 "같이 알아보자"라고 대답한다.',
            task: '묻는 말과 알려 주는 말을 나누고, 우리나라에 대해 알고 싶은 물음을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '묻는 말과 알려 주는 말로 나누어 보세요.', toolOptions: { topic: '어떤 말일까?', slots: ['묻는 말', '알려 주는 말'], cards: ['태극기에는 무슨 색이 있을까?', '태극기는 멋져요', '무궁화는 언제 필까?', '김치는 매워요'] },
                target: { sort: { '묻는 말': ['태극기에는 무슨 색이 있을까?', '무궁화는 언제 필까?'], '알려 주는 말': ['태극기는 멋져요', '김치는 매워요'] } }, difficulty: 0.1 },
              { prompt: '빈칸에 알맞은 묻는 낱말을 넣어 물음을 만들어 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'b1', label: '김치는 ___ 만들까?' }, { id: 'b2', label: '독도는 ___ 있을까?' }], cards: ['어떻게', '어디에', '맛있게'] },
                target: { fill: { b1: '어떻게', b2: '어디에' } }, difficulty: 0.2 },
              { prompt: '우리나라에 대해 알고 싶은 물음만 골라 보세요.', toolOptions: { mode: 'pick', basket: '우리나라 탐험 물음', cards: ['우리나라에서 가장 높은 산은 어디일까?', '애국가는 언제 부를까?', { id: '급식', text: '오늘 급식은 무엇일까?', why: '급식도 궁금하지만 우리나라를 알아보는 물음은 아니에요.' }, { id: '필통', text: '내 필통은 어디 있지?', why: '내 물건을 찾는 말이에요.' }] },
                target: { pick: ['우리나라에서 가장 높은 산은 어디일까?', '애국가는 언제 부를까?'] }, difficulty: 0.15 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 만든 물음 가운데 가장 알고 싶은 것 하나를 크게 말해 볼까요?" 학생들의 물음을 커다란 \'탐험 물음 나무\' 종이에 붙여 교실 벽에 둔다. 다음 시간에는 태극기를 자세히 보며 물음을 더 만든다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '어떤 말일까?', slots: ['묻는 말', '알려 주는 말'], cards: ['윷놀이는 어떻게 할까?', '떡국은 맛있어요'] }, prompt: '두 카드를 묻는 말과 알려 주는 말로 나누어 보세요.', target: { sort: { '묻는 말': ['윷놀이는 어떻게 할까?'], '알려 주는 말': ['떡국은 맛있어요'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '우리 문화에 들어가는 것은 무엇일까요?', options: ['옛날 것만 들어가요', '오늘 우리가 즐기는 것도 들어가요'], answer: 1, difficulty: 0.15, explain: '오늘 부르는 노래, 먹는 음식도 우리 문화예요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '우리나라 탐험 물음',
      items: [
        { type: 'figure', wide: true, prompt: '카드를 알맞은 가지에 선으로 이으세요.', tool: 'mindmap', figures: [{ options: { topic: '우리나라', slots: ['땅의 모습', '우리 문화'], cards: ['세 쪽이 바다예요', '한복을 입어요', '높은 산이 많아요'] }, caption: '' }], answer: '땅의 모습: 바다·산, 우리 문화: 한복' },
        { type: 'choice', prompt: '묻는 말에 ○ 하세요.', options: ['무궁화는 예뻐요', '무궁화는 언제 필까?', '무궁화가 있어요'], answer: '무궁화는 언제 필까?' },
        { type: 'blank', prompt: '빈칸에 묻는 낱말을 쓰세요.', text: '한복은 ___ 입을까?', answer: '언제' },
        { type: 'short', prompt: '우리나라에 대해 알고 싶은 것을 물음으로 쓰세요.' },
        { type: 'draw', prompt: '우리나라 하면 떠오르는 것을 그려 보세요.' },
      ],
      easy: {
        note: '말끝을 올려 읽으면 묻는 말이 돼요.',
        items: [
          { type: 'choice', prompt: '묻는 말에 ○ 하세요.', options: ['김치는 매워요', '김치는 어떻게 만들까?'], answer: '김치는 어떻게 만들까?' },
          { type: 'choice', prompt: '우리나라를 나타내는 것에 ○ 하세요.', options: ['태극기', '에펠탑'], answer: '태극기' },
          { type: 'draw', prompt: '우리나라 하면 떠오르는 것을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 가지에 놓으면 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '모두 놓은 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '우리나라를 나타내는 것 고르기에 다른 나라 함정 카드가 하나 더 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 우리 문화는 옛날 것(한복, 탈)만이라고 여긴다 → 케이팝, 한글 간판, 김밥 도시락처럼 오늘의 것을 함께 든다. ② 묻는 말과 알려 주는 말을 끝소리로 구별하지 못한다 → 말끝을 올리는 몸짓을 함께 한다. ③ 물음이 "왜?" 한 낱말로 끝난다 → "무엇이 왜 궁금해?"로 되물어 문장으로 만든다.',
  }));

  lessons.push(L(2, {
    title: '태극기를 자세히 보고 궁금한 것 묻기',
    objective: '태극기를 자세히 보고 가운데 무늬와 네 귀퉁이의 검은 막대를 찾아 말하고, 태극기에 대해 알고 싶은 것을 물음으로 만들 수 있다.',
    illustration: ART('a large paper Korean flag with the red and blue circle in the center and four black trigrams in the corners, hanging in a classroom while children look closely with magnifying glasses', '태극기를 자세히 봐요', [
      { motif: 'flower', x: 120, y: 226, color: 'rose' }, { motif: 'house', x: 370, y: 214, color: 'sky' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"교실 앞에 있는 태극기를 1분 동안 아무 말 없이 자세히 봐요. 무엇이 보였나요?" 바탕은 흰색, 가운데 동그라미는 위가 빨강·아래가 파랑, 네 귀퉁이에 검은 막대 묶음이 있다는 것을 학생들의 말로 모은다. 시연 단추로 "보았어요" 카드와 "궁금해요" 카드가 나뉘는 모습을 보여 준다. 본 것과 궁금한 것은 다르다는 것을 짚는다.',
        student: '태극기에서 본 것 하나를 짝에게 손가락으로 짚으며 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '태극기', slots: ['보았어요', '궁금해요'], cards: ['가운데에 동그라미가 있어요', '왜 검은 막대가 있을까?'], shuffle: false }, sequence: [{ sort: { '보았어요': ['가운데에 동그라미가 있어요'], '궁금해요': ['왜 검은 막대가 있을까?'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 태극기에서 본 것 찾기', minutes: 12, tool: 'mindmap',
            teacher: '"태극기 가운데 동그라미에서 빨강은 위에 있나요, 아래에 있나요?" 실제 태극기를 손으로 짚으며 대답하게 한다. 검은 막대를 "선"이라고 부르는 학생에게 "막대가 몇 개씩 모여 있는지 세어 볼까요?"라고 묻는다(막대 수는 귀퉁이마다 달라 세어 보는 것만으로 충분하다). 바탕을 "아무것도 없다"고 하는 학생에게 흰 바탕도 태극기의 한 부분이라는 것을 짚는다.',
            task: '태극기를 보고 맞는 말과 틀린 말을 나누고, 부분과 이름을 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '태극기를 보고 맞는 말과 틀린 말로 나누어 보세요.', toolOptions: { topic: '태극기', slots: ['맞아요', '틀려요'], cards: ['바탕은 흰색이에요', '귀퉁이에 검은 막대가 있어요', '가운데에 별이 있어요', '바탕은 노란색이에요'] },
                target: { sort: { '맞아요': ['바탕은 흰색이에요', '귀퉁이에 검은 막대가 있어요'], '틀려요': ['가운데에 별이 있어요', '바탕은 노란색이에요'] } }, difficulty: 0.1 },
              { prompt: '태극기의 부분과 모습을 이어 보세요.', toolOptions: { mode: 'match', topic: '태극기', slots: [{ id: 's1', label: '가운데 동그라미' }, { id: 's2', label: '네 귀퉁이' }, { id: 's3', label: '바탕' }], cards: ['위는 빨강, 아래는 파랑', '검은 막대 묶음', '흰색'] },
                target: { match: { s1: '위는 빨강, 아래는 파랑', s2: '검은 막대 묶음', s3: '흰색' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['위는 빨강, 아래는 파랑', '검은 막대 묶음', '흰색', { id: '위는 파랑', text: '위는 파랑, 아래는 빨강', why: '태극기를 다시 보세요. 빨강이 어느 쪽에 있나요?' }] } } } },
              { prompt: '태극기를 다는 날만 골라 보세요.', toolOptions: { mode: 'pick', basket: '태극기를 다는 날', cards: ['삼일절', '광복절', { id: '생일', text: '내 생일', why: '태극기는 나라의 기념일에 달아요.' }, { id: '소풍', text: '소풍 가는 날', why: '소풍은 나라의 기념일이 아니에요.' }] },
                target: { pick: ['삼일절', '광복절'] }, difficulty: 0.25,
                predict: { q: '태극기는 아무 날이나 달까요?', options: ['아무 날이나', '나라의 기념일에'], answer: 1 },
                conclude: '태극기는 삼일절, 광복절처럼 나라의 기념일에 집 앞에 달아요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 태극기에 대해 물음 만들기', minutes: 14, tool: 'story',
            teacher: '"본 것을 물음으로 바꾸어 볼까요? \'검은 막대가 있어요\' → \'검은 막대는 무슨 뜻일까?\'" 칠판에 \'무엇·왜·언제·어디\' 낱말 카드를 붙이고 하나씩 골라 물음을 만든다. 물음을 다 만든 학생은 짝과 물음을 하나씩 주고받는다. 답을 지금 몰라도 괜찮고, 모르는 것이 물음이 된다는 것을 말해 준다.',
            task: '묻는 낱말을 넣어 태극기 물음을 만들고, 짝에게 물어요.',
            levels: CARD_LV,
            items: [
              { prompt: '말풍선 빈칸에 알맞은 묻는 낱말을 넣어 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'b1', who: '민지', label: '태극기는 ___ 달까?' }, { id: 'b2', who: '준호', label: '검은 막대는 ___ 있을까?' }], cards: ['언제', '왜', '빨리'] },
                target: { fill: { b1: '언제', b2: '왜' } }, difficulty: 0.15 },
              { prompt: '본 것을 물음으로 바꾼 말끼리 이어 보세요.', toolOptions: { mode: 'match', slots: [{ id: 's1', label: '가운데에 동그라미가 있어요' }, { id: 's2', label: '바탕이 흰색이에요' }], cards: ['동그라미 무늬는 무슨 뜻일까?', '왜 흰색 바탕일까?'] },
                target: { match: { s1: '동그라미 무늬는 무슨 뜻일까?', s2: '왜 흰색 바탕일까?' } }, difficulty: 0.15 },
              { prompt: '짝과 태극기 물음을 하나씩 주고받았으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 새로 알게 된 것과, 아직 궁금한 것을 하나씩 말해 볼까요?" 아직 궁금한 것은 \'탐험 물음 나무\'에 붙인다. 태극기는 땅에 닿지 않게 소중히 다룬다는 것을 함께 말한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '태극기', slots: ['맞아요', '틀려요'], cards: ['동그라미 위쪽은 빨강이에요', '귀퉁이가 비어 있어요'] }, prompt: '두 말을 맞는 말과 틀린 말로 나누어 보세요.', target: { sort: { '맞아요': ['동그라미 위쪽은 빨강이에요'], '틀려요': ['귀퉁이가 비어 있어요'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '태극기에 대해 묻는 말은 무엇일까요?', options: ['태극기가 걸려 있어요', '태극기는 누가 만들었을까?', '태극기는 커요'], answer: 1, difficulty: 0.1, explain: '"~을까?"로 끝나는 말이 묻는 말이에요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '태극기를 자세히 봐요',
      items: [
        { type: 'draw', prompt: '태극기를 보고 그대로 그려 보세요. 가운데 동그라미와 네 귀퉁이를 꼭 그려요.' },
        { type: 'choice', prompt: '태극기 바탕의 색에 ○ 하세요.', options: ['흰색', '노란색', '초록색'], answer: '흰색' },
        { type: 'check', prompt: '태극기를 다는 날에 ✓ 하세요.', options: ['삼일절', '광복절', '내 생일'] },
        { type: 'short', prompt: '태극기에 대해 궁금한 것을 물음으로 쓰세요.' },
      ],
      easy: {
        note: '본 것을 손가락으로 짚어 보고 그려요.',
        items: [
          { type: 'choice', prompt: '태극기 가운데에 있는 것에 ○ 하세요.', options: ['동그라미', '별'], answer: '동그라미' },
          { type: 'choice', prompt: '묻는 말에 ○ 하세요.', options: ['태극기는 왜 흰색일까?', '태극기는 흰색이에요'], answer: '태극기는 왜 흰색일까?' },
          { type: 'draw', prompt: '태극기를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 놓으면 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '모두 놓은 뒤 확인을 눌러요. 물음은 짝과 주고받아요.',
      challenge: '태극기 부분 잇기에 빨강·파랑 자리를 바꾼 함정 카드가 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 본 것과 궁금한 것을 섞어 말한다 → "보았어요/궁금해요" 손 신호를 정한다. ② 검은 막대의 뜻을 바로 알려 달라고 한다 → 다음 시간 자료 읽기에서 찾자고 물음 나무에 붙인다. ③ 빨강·파랑 자리를 헷갈린다 → 실제 태극기를 앞에 두고 그린다. 태극기의 네 막대 묶음 이름(건·곤·감·리)은 1학년에서 외우게 하지 않는다.',
  }));

  lessons.push(L(3, {
    title: '우리나라 칸 지도를 보고 땅과 바다 물음 만들기',
    objective: '우리나라 칸 지도에서 서울, 제주도, 독도와 세 바다를 찾아 핀을 꽂고, 땅과 바다에 대해 알고 싶은 것을 물음으로 만들 수 있다.',
    illustration: ART('a simple paper map of the Korean peninsula with mountains on the east side, blue sea on three sides, a small island in the south and tiny islets in the east sea, a paper explorer pin standing on it', '우리나라는 어떻게 생겼을까?', [
      { motif: 'wave', x: 90, y: 236 }, { motif: 'mountain', x: 380, y: 212 }, { motif: 'bird', x: 250, y: 88 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 7,
        teacher: '"우리나라를 하늘 높이 날아가는 새가 내려다보면 어떻게 보일까요?" 벽 지도(또는 지구본)에서 우리나라를 함께 찾고, 칸 지도를 띄워 "땅은 색이 있고, 파란 곳은 바다예요"라고 말한다. 시연 단추로 핀이 서울에 꽂히는 모습을 보여 준다. 칸 지도는 실제 모양을 아주 쉽게 줄인 그림이라는 것도 알려 준다.',
        student: '지도에서 바다가 있는 쪽을 손가락으로 모두 짚어 봐요.',
        demo: { tool: 'map', options: KR(['서울', '부산', '제주도']), sequence: [{ place: '서울' }] },
      },
      {
        id: 'main', title: '전개', minutes: 25,
        activities: [
          {
            id: 'a1', title: '활동 1. 칸 지도에서 곳을 찾아 핀 꽂기', minutes: 14, tool: 'map',
            teacher: '"우리나라의 수도는 서울이에요. 수도는 나라의 큰일을 하는 곳이 모인 도시예요. 별 그림이 수도 표시예요." 핀을 꽂기 전에 지도를 손가락으로 짚게 한다. 독도를 "바다라서 아무것도 없다"고 하는 학생에게 동쪽 바다의 작은 섬 표시를 가리킨다. 바다를 셀 때 땅이 이어진 위쪽은 바다가 아니라는 것을 짚는다.',
            task: '문항의 단서를 읽고 지도에서 그곳을 찾아 핀을 꽂아요.',
            levels: {
              easy: { readout: true },
              base: {},
              challenge: {},
            },
            items: [
              { prompt: '우리나라의 수도에 핀을 꽂아 보세요. 별 그림이 수도 표시예요.', toolOptions: KR(['서울', '부산', '제주도']), target: { place: '서울' }, difficulty: 0.05 },
              { prompt: '남쪽 바다에 있는 우리나라에서 가장 큰 섬에 핀을 꽂아 보세요.', toolOptions: KR(['서울', '부산', '제주도', '독도']), target: { place: '제주도' }, difficulty: 0.15,
                hints: ['섬은 둘레가 모두 바다인 땅이에요. 남쪽은 지도 아래쪽이에요.', '지도 아래쪽 바다에 있는 섬 표시를 찾아보세요.', '아래쪽 바다의 큰 섬, 제주도에 핀을 꽂아요.'] },
              { prompt: '동쪽 바다에 있는 작은 우리 섬에 핀을 꽂아 보세요.', toolOptions: KR(['서울', '제주도', '독도', '부산']), target: { place: '독도' }, difficulty: 0.2,
                levels: { challenge: { prompt: '동해 바다에 있는 작은 우리 섬에 핀을 꽂아 보세요. 지도에 섬 표시가 두 개예요.', toolOptions: KR(['서울', '제주도', '독도', '부산', '동해']), target: { place: '독도' } } },
                hints: ['동쪽은 지도의 오른쪽이에요. 오른쪽 바다를 살펴봐요.', '오른쪽 바다에 있는 작은 섬 표시를 찾아보세요.', '오른쪽 바다의 작은 섬, 독도에 핀을 꽂아요.'],
                conclude: '독도는 동해에 있는 우리나라 섬이에요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 땅과 바다에 대해 물음 만들기', minutes: 11, tool: 'mindmap',
            teacher: '"지도를 보니 무엇이 궁금해졌나요? \'바다는 왜 세 쪽에만 있을까?\', \'독도에는 누가 살까?\'처럼 말해 봐요." 땅에 대한 물음과 바다에 대한 물음으로 나누어 칠판에 붙인다. 지도에 이미 보이는 것(서울은 별 표시예요)은 물음이 아니라 본 것이라는 것을 짚는다.',
            task: '물음을 땅 물음과 바다 물음으로 나누고, 지도를 보고 생긴 물음을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '물음 카드를 땅 물음과 바다 물음으로 나누어 보세요.', toolOptions: { topic: '지도 물음', slots: ['땅 물음', '바다 물음'], cards: ['가장 높은 산은 어디일까?', '서울에는 무엇이 있을까?', '동해 물은 얼마나 깊을까?', '바다에는 어떤 물고기가 살까?'] },
                target: { sort: { '땅 물음': ['가장 높은 산은 어디일까?', '서울에는 무엇이 있을까?'], '바다 물음': ['동해 물은 얼마나 깊을까?', '바다에는 어떤 물고기가 살까?'] } }, difficulty: 0.15 },
              { prompt: '지도를 보고 생긴 물음만 골라 보세요.', toolOptions: { mode: 'pick', basket: '지도를 보고 생긴 물음', cards: ['제주도에는 어떻게 갈까?', '독도에는 누가 살까?', { id: '서울', text: '서울은 별 표시예요', why: '이것은 지도에서 본 것을 알려 주는 말이에요.' }, { id: '공룡', text: '공룡은 얼마나 클까?', why: '지도를 보고 생긴 물음이 아니에요.' }] },
                target: { pick: ['제주도에는 어떻게 갈까?', '독도에는 누가 살까?'] }, difficulty: 0.2 },
              { prompt: '물음과 그 물음이 묻는 곳을 이어 보세요.', toolOptions: { mode: 'match', topic: '어디를 물을까?', slots: [{ id: 's1', label: '배를 타야 갈 수 있을까?' }, { id: 's2', label: '나라의 큰일은 어디서 할까?' }], cards: ['제주도', '서울'] },
                target: { match: { s1: '제주도', s2: '서울' } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['제주도', '서울', { id: '백두산', text: '백두산', why: '백두산은 산이라 배를 타지 않아도 돼요.' }] } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"우리나라는 몇 쪽이 바다였나요? 손가락으로 세어 볼까요?" 세 쪽이 바다라는 것을 함께 말하고, 오늘 만든 지도 물음을 물음 나무에 붙인다. 다음 시간에는 우리나라 사람들의 생활에 대한 물음을 만든다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'map', options: KR(['서울', '부산', '독도', '서해']), prompt: '우리나라 서쪽 바다에 핀을 꽂아 보세요. 서쪽은 지도의 왼쪽이에요.', target: { place: '서해' }, difficulty: 0.15 },
          { type: 'choice', prompt: '우리나라는 몇 쪽이 바다일까요?', options: ['한 쪽', '세 쪽', '네 쪽'], answer: 1, difficulty: 0.15, explain: '우리나라는 동쪽, 서쪽, 남쪽 세 쪽이 바다예요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '우리나라 칸 지도',
      items: [
        { type: 'figure', wide: true, prompt: '수도에 ○, 가장 큰 섬에 △ 하세요.', tool: 'map', figures: [{ options: KR(['서울', '부산', '제주도', '독도']), caption: '' }], answer: '서울 ○, 제주도 △' },
        { type: 'choice', prompt: '동해에 있는 우리 섬에 ○ 하세요.', options: ['독도', '제주도', '서울'], answer: '독도' },
        { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '우리나라는 ___ 쪽이 바다예요.', answer: '세' },
        { type: 'short', prompt: '지도를 보고 궁금해진 것을 물음으로 쓰세요.' },
      ],
      easy: {
        note: '파란 곳이 바다예요. 손가락으로 따라가요.',
        items: [
          { type: 'choice', prompt: '우리나라의 수도에 ○ 하세요.', options: ['서울', '부산'], answer: '서울' },
          { type: 'choice', prompt: '섬은 둘레가 무엇인 땅일까요?', options: ['바다', '산'], answer: '바다' },
          { type: 'draw', prompt: '우리나라와 바다를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '핀을 꽂으면 그 칸 이름이 함께 보여요.',
      base: '단서를 읽고 핀을 꽂아요.',
      challenge: '독도 찾기에 섬 표시가 두 개 있고 바다 이름도 있어 단서를 더 꼼꼼히 읽어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 칸 지도를 실제 모양이라고 여긴다 → 벽 지도·지구본과 견주어 "아주 쉽게 줄인 그림"이라고 말한다. ② 위쪽도 바다라고 여긴다 → 위쪽은 땅으로 이어져 있다는 것을 벽 지도에서 짚는다. ③ 동서남북이 아직 낯설다 → 1학년에서는 "동쪽=오른쪽, 서쪽=왼쪽, 남쪽=아래쪽"처럼 지도 위 자리로만 말한다.',
  }));

  lessons.push(L(4, {
    title: '알아볼 것 하나 골라 탐험 물음 카드 쓰기',
    objective: '우리나라의 모습이나 문화 가운데 알아볼 것 하나를 고르고, 그것에 대한 물음과 알아볼 방법을 탐험 물음 카드에 적을 수 있다.',
    illustration: ART('a child writing on a large paper question card shaped like a treasure map, with small icons of a Korean flag, a hanbok, a yut game set and a mountain around it', '무엇을 알아볼까요?', [
      { motif: 'star', x: 110, y: 84, s: 0.6 }, { motif: 'tree', x: 380, y: 214 }, { motif: 'flower', x: 300, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"물음 나무에 물음이 이렇게 많아졌어요. 다 한꺼번에 알아볼 수 있을까요?" 물음 나무의 물음을 몇 개 읽어 준다. 시연 단추로 물음 하나와 알아볼 방법 하나가 이어지는 모습을 보여 준다. "오늘은 내가 가장 알고 싶은 것 하나를 골라 탐험 물음 카드에 또박또박 적어요."',
        student: '물음 나무에서 가장 알고 싶은 물음 하나를 골라 손가락으로 가리켜 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '어떻게 알아볼까?', slots: [{ id: 's1', label: '할머니는 어릴 때 무슨 놀이를 했을까?' }], cards: ['할머니께 여쭈어 봐요', '지도를 봐요'], shuffle: false }, sequence: [{ match: { s1: '할머니께 여쭈어 봐요' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 물음에 맞는 알아볼 방법 고르기', minutes: 12, tool: 'mindmap',
            teacher: '"독도가 어디에 있는지 알고 싶으면 무엇을 보면 좋을까요? 할머니께 여쭈어도 되지만 무엇을 보면 바로 알 수 있을까요?" 물음마다 가장 알맞은 방법을 고르고 까닭을 한 문장으로 말하게 한다. 모든 물음을 "선생님께 물어요"로 답하는 학생에게 "선생님이 없을 때는 무엇으로 알아볼 수 있을까?"라고 되묻는다.',
            task: '물음을 읽고 가장 알맞은 알아볼 방법을 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '물음과 가장 알맞은 알아볼 방법을 이어 보세요.', toolOptions: { mode: 'match', topic: '어떻게 알아볼까?', slots: [{ id: 's1', label: '독도는 어디에 있을까?' }, { id: 's2', label: '떡국은 무슨 맛일까?' }], cards: ['지도를 봐요', '직접 먹어 봐요'] },
                target: { match: { s1: '지도를 봐요', s2: '직접 먹어 봐요' } }, difficulty: 0.1 },
              { prompt: '세 물음에 가장 알맞은 방법을 이어 보세요.', toolOptions: { mode: 'match', topic: '어떻게 알아볼까?', slots: [{ id: 's1', label: '할아버지는 어릴 때 무슨 놀이를 했을까?' }, { id: 's2', label: '무궁화는 어떻게 생겼을까?' }, { id: 's3', label: '제기차기는 어떻게 할까?' }], cards: ['할아버지께 여쭈어 봐요', '꽃 사진을 봐요', '직접 차 봐요'] },
                target: { match: { s1: '할아버지께 여쭈어 봐요', s2: '꽃 사진을 봐요', s3: '직접 차 봐요' } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['할아버지께 여쭈어 봐요', '꽃 사진을 봐요', '직접 차 봐요', { id: '잠', text: '잠을 자요', why: '잠을 자면 알아볼 수 없어요.' }] } } } },
              { prompt: '알아볼 방법으로 쓸 수 있는 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '알아볼 방법', cards: ['그림책을 읽어요', '어른께 여쭈어 봐요', '박물관에 가 봐요', { id: '짐작', text: '아무렇게나 짐작해요', why: '짐작만 하면 맞는지 알 수 없어요.' }] },
                target: { pick: ['그림책을 읽어요', '어른께 여쭈어 봐요', '박물관에 가 봐요'] }, difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 내 탐험 물음 카드 쓰기', minutes: 14, tool: 'story',
            teacher: '"탐험 물음 카드는 차례가 있어요. 먼저 알아볼 것을 고르고, 물음을 쓰고, 방법을 써요." 카드를 다 쓴 학생은 짝에게 소리 내어 읽어 주고, 짝은 "그 방법으로 알 수 있겠다"인지 말해 준다. 글자를 쓰기 어려운 학생은 그림으로 그리고 낱말만 쓰게 한다. 물음이 너무 큰 학생(우리나라의 모든 것)에게 "그 가운데 하나만 골라 볼까?"라고 묻는다.',
            task: '탐험 물음 카드를 쓰는 차례를 정하고, 내 카드를 또박또박 써요.',
            levels: CARD_LV,
            items: [
              { prompt: '탐험 물음 카드를 쓰는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: 'pick', text: '알아볼 것 하나 고르기', motif: 'star' }, { id: 'ask', text: '물음 쓰기', motif: 'leaf' }, { id: 'how', text: '알아볼 방법 쓰기', motif: 'tree' }], slots: ['1', '2', '3'] },
                target: { order: ['pick', 'ask', 'how'] }, difficulty: 0.1 },
              { prompt: '민지의 탐험 카드 빈칸을 채워 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'b1', who: '민지', label: '알아볼 것: ___' }, { id: 'b2', who: '민지', label: '물음: 윷놀이는 ___ 할까?' }], cards: ['윷놀이', '어떻게', '맛있게'] },
                target: { fill: { b1: '윷놀이', b2: '어떻게' } }, difficulty: 0.15 },
              { prompt: '내 탐험 물음 카드를 다 쓰고 짝에게 읽어 주었으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"내 탐험 카드의 물음을 소리 내어 읽어 볼까요?" 다섯 명쯤 읽고, 나머지 카드는 모둠별로 모아 교실 탐험 상자에 넣는다. 다음 시간부터 그림책과 그림 자료에서 답을 찾아본다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '어떻게 알아볼까?', slots: [{ id: 'e1', label: '한라산은 얼마나 높을까?' }, { id: 'e2', label: '할머니의 설날은 어땠을까?' }], cards: ['책에서 찾아봐요', '할머니께 여쭈어 봐요'] }, prompt: '물음과 알맞은 방법을 이어 보세요.', target: { match: { e1: '책에서 찾아봐요', e2: '할머니께 여쭈어 봐요' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '탐험 물음 카드에 먼저 쓸 것은 무엇일까요?', options: ['알아볼 방법', '알아볼 것', '느낀 점'], answer: 1, difficulty: 0.15, explain: '무엇을 알아볼지 먼저 정해야 물음과 방법을 쓸 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '나의 탐험 물음 카드',
      items: [
        { type: 'table', prompt: '나의 탐험 물음 카드를 쓰세요.', columns: ['알아볼 것', '물음', '알아볼 방법'], cells: [['', '', '']] },
        { type: 'choice', prompt: '"독도는 어디에 있을까?"를 알아볼 방법에 ○ 하세요.', options: ['지도를 봐요', '노래를 불러요', '잠을 자요'], answer: '지도를 봐요' },
        { type: 'check', prompt: '알아볼 방법이 될 수 있는 것에 모두 ✓ 하세요.', options: ['그림책 읽기', '어른께 여쭈기', '아무렇게나 짐작하기'] },
        { type: 'draw', prompt: '내가 알아볼 것을 그려 보세요.' },
      ],
      easy: {
        note: '알아볼 것 → 물음 → 방법 차례로 써요.',
        items: [
          { type: 'short', prompt: '알아볼 것을 낱말로 쓰세요.' },
          { type: 'choice', prompt: '떡국 맛을 알아볼 방법에 ○ 하세요.', options: ['직접 먹어 봐요', '지도를 봐요'], answer: '직접 먹어 봐요' },
          { type: 'draw', prompt: '내가 알아볼 것을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 놓으면 초록 테두리가 생기고, 틀리면 카드가 돌아와요. 카드는 낱말과 그림으로 써도 돼요.',
      base: '방법을 고르고 까닭을 말해요. 카드 세 칸을 모두 써요.',
      challenge: '알아볼 방법이 될 수 없는 함정 카드를 골라내요. 방법을 두 가지 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 물음이 너무 크다(우리나라의 모든 것) → 하나만 고르게 좁힌다. ② 모든 방법을 "선생님께 물어요"로 쓴다 → 책·사진·어른·직접 해 보기를 칠판에 붙여 고르게 한다. ③ 알아볼 방법을 고르지 못한다 → "눈으로 볼까, 귀로 들을까, 몸으로 해 볼까?" 세 갈래로 묻는다.',
  }));

  // ───────────────────────── 5~8차시: 그림·글 자료 읽고 종류별로 나누기 ─────────────────────────

  lessons.push(L(5, {
    title: '설날 그림에서 옷·음식·놀이 찾아 나누기',
    objective: '설날 그림 자료에서 옷·음식·놀이를 찾아 종류별로 나누고, 내 물음에 맞는 자료만 골라 모을 수 있다.',
    illustration: ART('a paper picture of a Korean family on New Year day, children in colorful hanbok bowing to grandparents, a bowl of rice cake soup on a low table and a yut game on the floor', '그림에서 무엇을 찾을까요?', [
      { motif: 'house', x: 120, y: 214, color: 'peach' }, { motif: 'tree', x: 380, y: 214 }, { motif: 'star', x: 330, y: 86, s: 0.5 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"이 그림은 설날 아침 모습이에요. 그림 속 사람들이 무엇을 입고, 무엇을 먹고, 무엇을 하며 노는지 찾아볼까요?" 큰 그림 자료(또는 그림책 한 장면)를 띄우고 찾은 것을 손가락으로 짚게 한다. 시연 단추로 찾은 것이 옷·음식·놀이 칸에 들어가는 모습을 보여 준다. "자료를 읽는다는 것은 그림이나 글에서 필요한 것을 찾는 거예요."',
        student: '그림에서 사람들이 입은 옷을 찾아 손가락으로 짚어 봐요.',
        demo: { tool: 'mindmap', options: { topic: '설날 그림', slots: ['옷', '음식', '놀이'], cards: ['한복', '떡국', '윷놀이'], shuffle: false }, sequence: [{ sort: { '옷': ['한복'], '음식': ['떡국'], '놀이': ['윷놀이'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 찾은 것을 종류별로 나누기', minutes: 12, tool: 'mindmap',
            teacher: '"갓은 먹는 것일까요, 입는 것일까요?" 낯선 낱말 카드는 그림을 보여 주며 함께 읽는다(갓: 옛날 어른이 쓰던 모자, 버선: 한복과 함께 신는 양말, 투호: 항아리에 화살 던져 넣기). 카드를 한 곳에 몰아 놓는 학생에게 "이걸로 무엇을 하나요? 입어요, 먹어요, 놀아요?" 세 낱말로 묻는다.',
            task: '그림 자료에서 찾은 것을 옷·음식·놀이로 나누어 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '찾은 것을 옷, 음식, 놀이로 나누어 보세요.', toolOptions: { topic: '설날 그림', slots: ['옷', '음식', '놀이'], cards: ['한복', '갓', '떡국', '식혜', '윷놀이', '연날리기'] },
                target: { sort: { '옷': ['한복', '갓'], '음식': ['떡국', '식혜'], '놀이': ['윷놀이', '연날리기'] } }, difficulty: 0.1 },
              { prompt: '처음 보는 낱말도 있어요. 옷, 음식, 놀이로 나누어 보세요.', toolOptions: { topic: '우리 문화', slots: ['옷', '음식', '놀이'], cards: ['버선', '비빔밥', '투호', '팽이치기'] },
                target: { sort: { '옷': ['버선'], '음식': ['비빔밥'], '놀이': ['투호', '팽이치기'] } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['버선', '비빔밥', '투호', '팽이치기', { id: '자동차', text: '자동차', why: '자동차는 옷도 음식도 놀이도 아니에요.' }] } } } },
              { prompt: '음식 자료만 골라 바구니에 모아 보세요.', toolOptions: { mode: 'pick', basket: '음식 자료', cards: ['송편', '김치', '약과', { id: '복주머니', text: '복주머니', why: '복주머니는 한복과 함께 차는 주머니예요.' }] },
                target: { pick: ['송편', '김치', '약과'] }, difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 내 물음에 맞는 자료만 모으기', minutes: 14, tool: 'mindmap',
            teacher: '"준호의 물음은 \'설날에는 무엇을 할까?\'예요. 준호가 모은 자료가 다 쓸모 있을까요?" 자료를 많이 모으기만 하면 된다고 여기는 학생에게 "이 자료가 준호의 물음에 대답해 주나요?"라고 하나씩 묻는다. 그다음 모둠마다 그림 자료 묶음(잡지·광고지·그림 카드)을 나누어 주고, 활동지 옷·음식·놀이 칸에 오려 붙이게 한다. 가위는 앉아서 쓰고 손잡이를 내밀어 건네게 한다.',
            task: '물음에 맞는 자료만 골라 모으고, 그림 자료를 활동지에 종류별로 붙여요.',
            levels: CARD_LV,
            items: [
              { prompt: '"설날에는 무엇을 할까?"에 대답해 주는 자료만 골라 보세요.', toolOptions: { mode: 'pick', basket: '준호의 자료', cards: ['어른께 세배해요', '떡국을 먹어요', '윷놀이를 해요', { id: '송편', text: '송편을 빚어요', why: '송편은 추석에 빚어요.' }, { id: '수박', text: '수박을 먹어요', why: '수박은 더운 여름에 먹어요.' }] },
                target: { pick: ['어른께 세배해요', '떡국을 먹어요', '윷놀이를 해요'] }, difficulty: 0.2,
                predict: { q: '자료는 많이 모을수록 좋을까요?', options: ['많을수록 좋아요', '물음에 맞는 것을 모아요'], answer: 1 },
                conclude: '자료는 많이 모으는 것보다 내 물음에 대답해 주는 것을 골라 모아야 해요.' },
              { prompt: '그림 자료를 오려 활동지의 옷·음식·놀이 칸에 붙였으면 "다 했어요"를 누르세요.', free: true, talk: true },
              { prompt: '자료를 모으는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: 'q', text: '내 물음을 다시 읽어요', motif: 'star' }, { id: 'find', text: '자료에서 찾아요', motif: 'leaf' }, { id: 'stick', text: '종류별로 붙여요', motif: 'flower' }], slots: ['1', '2', '3'] },
                target: { order: ['q', 'find', 'stick'] }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"모둠 활동지에서 가장 많이 모인 칸은 어디인가요?" 두 모둠의 활동지를 보여 주며 옷·음식·놀이 칸을 함께 읽는다. 물음과 상관없는 자료가 섞인 칸을 찾아 빼 보게 한다. 다음 시간에는 명절마다 먹는 음식을 자료에서 찾는다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '우리 문화', slots: ['옷', '음식', '놀이'], cards: ['저고리', '떡', '제기차기'] }, prompt: '세 카드를 옷, 음식, 놀이로 나누어 보세요.', target: { sort: { '옷': ['저고리'], '음식': ['떡'], '놀이': ['제기차기'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '"설날에 무엇을 먹을까?"에 대답해 주는 자료는 무엇일까요?', options: ['떡국 그림', '연날리기 그림', '갓 그림'], answer: 0, difficulty: 0.15, explain: '물음이 먹는 것을 물으니 음식 자료를 골라요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '옷·음식·놀이 자료 모으기',
      items: [
        { type: 'table', prompt: '찾은 자료를 칸에 쓰거나 붙이세요.', columns: ['옷', '음식', '놀이'], rows: 2 },
        { type: 'choice', prompt: '놀이에 ○ 하세요.', options: ['투호', '버선', '식혜'], answer: '투호' },
        { type: 'check', prompt: '"설날에는 무엇을 할까?"에 맞는 자료에 ✓ 하세요.', options: ['세배하기', '떡국 먹기', '수박 먹기'] },
        { type: 'short', prompt: '그림 자료에서 처음 알게 된 것 하나를 쓰세요.' },
      ],
      easy: {
        note: '입어요 → 옷, 먹어요 → 음식, 놀아요 → 놀이!',
        items: [
          { type: 'choice', prompt: '옷에 ○ 하세요.', options: ['한복', '떡국'], answer: '한복' },
          { type: 'choice', prompt: '음식에 ○ 하세요.', options: ['윷놀이', '송편'], answer: '송편' },
          { type: 'draw', prompt: '설날 그림에서 찾은 것 하나를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 놓으면 초록 테두리가 생기고, 틀리면 카드가 돌아와요. 오려 붙이기는 그림이 큰 자료로 해요.',
      base: '모두 놓은 뒤 확인을 눌러요. 활동지 세 칸에 두 개씩 붙여요.',
      challenge: '옷·음식·놀이가 아닌 함정 카드를 골라내요. 붙인 자료 아래에 이름을 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 자료를 많이 모으기만 하면 된다고 여긴다 → 자료마다 "이것이 물음에 대답해 주나요?"를 묻는다. ② 낯선 낱말(갓, 버선, 투호)을 몰라 아무 칸에 놓는다 → 그림을 먼저 보여 주고 무엇을 하는 것인지 몸짓으로 알려 준다. ③ 오려 붙이기가 길어진다 → 미리 오려 둔 그림 카드를 함께 준비한다.',
  }));

  lessons.push(L(6, {
    title: '명절 자료를 읽고 명절과 음식 짝 짓기',
    objective: '명절 그림과 글 자료를 읽고 설날·정월 대보름·추석·동지와 그날 먹는 음식을 짝 지을 수 있다.',
    illustration: ART('four paper calendar pages for Korean holidays, a bowl of rice cake soup for New Year, half-moon rice cakes for Chuseok under a full moon, nuts for the first full moon and red bean porridge for the winter solstice', '명절에는 무엇을 먹을까?', [
      { motif: 'moon', x: 380, y: 74, s: 0.7 }, { motif: 'house', x: 120, y: 214 }, { motif: 'tree', x: 360, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"설날 아침에 무엇을 먹었나요?" 떡국을 먹으면 한 살 더 먹는다는 이야기를 나눈다. 시연 단추로 명절 카드와 음식 카드가 이어지는 모습을 보여 준다. "명절마다 먹는 음식이 달라요. 오늘은 그림과 글 자료를 읽고 짝을 찾아요." 음식 이름만 아는 학생도, 명절 이름만 아는 학생도 함께 할 수 있다는 것을 말해 준다.',
        student: '설날이나 추석에 먹어 본 음식을 짝에게 말해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '명절 음식', slots: [{ id: 's1', label: '설날' }], cards: ['떡국', '팥죽'], shuffle: false }, sequence: [{ match: { s1: '떡국' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 자료 읽고 명절과 음식 짝 짓기', minutes: 13, tool: 'mindmap',
            teacher: '자료 글을 교사가 천천히 읽어 준다: "추석에는 햅쌀로 반달 모양 송편을 빚어요. 정월 대보름 아침에는 땅콩, 호두 같은 부럼을 깨물어요. 동지에는 붉은 팥죽을 쑤어 먹어요." "자료에서 \'반달 모양\'이라는 말을 찾았나요? 그 말이 어느 음식을 말하나요?" 자료의 낱말에 손가락을 짚게 한다. 생일에 먹는 미역국처럼 명절이 아닌 날 음식이 섞여 있다는 것을 미리 알려 준다.',
            task: '자료 글을 읽고 명절과 그날 먹는 음식을 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '명절과 그날 먹는 음식을 이어 보세요.', toolOptions: { mode: 'match', topic: '명절 음식', slots: [{ id: 's1', label: '설날' }, { id: 's2', label: '추석' }], cards: ['떡국', '송편'] },
                target: { match: { s1: '떡국', s2: '송편' } }, difficulty: 0.1 },
              { prompt: '자료 글을 떠올리며 네 명절과 음식을 이어 보세요.', toolOptions: { mode: 'match', topic: '명절 음식', slots: [{ id: 's1', label: '설날' }, { id: 's2', label: '정월 대보름' }, { id: 's3', label: '추석' }, { id: 's4', label: '동지' }], cards: ['떡국', '부럼', '송편', '팥죽'] },
                target: { match: { s1: '떡국', s2: '부럼', s3: '송편', s4: '팥죽' } }, difficulty: 0.25,
                levels: { challenge: { toolOptions: { cards: ['떡국', '부럼', '송편', '팥죽', { id: '미역국', text: '미역국', why: '미역국은 명절이 아니라 생일에 많이 먹어요.' }] } } } },
              { prompt: '자료 글에 나온 음식의 모습을 이어 보세요.', toolOptions: { mode: 'match', topic: '어떻게 생겼을까?', slots: [{ id: 's1', label: '송편' }, { id: 's2', label: '팥죽' }, { id: 's3', label: '부럼' }], cards: ['반달 모양 떡', '붉은 죽', '딱딱한 땅콩과 호두'] },
                target: { match: { s1: '반달 모양 떡', s2: '붉은 죽', s3: '딱딱한 땅콩과 호두' } }, difficulty: 0.2 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 한 해의 명절 차례 알기', minutes: 13, tool: 'timeline',
            teacher: '"한 해가 시작되는 날은 설날이에요. 설날 다음에 오는 명절은 무엇일까요?" 교실 달력을 넘기며 설날(한 해 처음), 정월 대보름(설날 뒤 첫 보름달), 추석(가을 보름달), 동지(겨울, 밤이 가장 긴 날)의 자리를 짚는다. 추석을 설날보다 먼저 놓는 학생에게 "추석에는 날씨가 춥나요, 선선한가요?"라고 계절로 되묻는다.',
            task: '명절 카드를 한 해의 처음부터 끝까지 차례대로 놓아요.',
            levels: {
              easy: { live: true, instant: true, axis: ['한 해의 처음', '한 해의 끝'] },
              base: { axis: ['한 해의 처음', '한 해의 끝'] },
              challenge: { axis: ['한 해의 처음', '한 해의 끝'] },
            },
            items: [
              { prompt: '세 명절을 한 해의 처음부터 차례대로 놓아 보세요.', toolOptions: { cards: [{ id: '설날', text: '설날', motif: 'sun' }, { id: '추석', text: '추석', motif: 'moon' }, { id: '동지', text: '동지', motif: 'snow' }] },
                target: { order: ['설날', '추석', '동지'] }, difficulty: 0.15 },
              { prompt: '네 명절을 한 해의 처음부터 차례대로 놓아 보세요.', toolOptions: { cards: [{ id: '설날', text: '설날', motif: 'sun' }, { id: '대보름', text: '정월 대보름', motif: 'moon' }, { id: '추석', text: '추석', motif: 'leaf' }, { id: '동지', text: '동지', motif: 'snow' }] },
                target: { order: ['설날', '대보름', '추석', '동지'] }, difficulty: 0.25,
                predict: { q: '정월 대보름은 설날 앞일까요, 뒤일까요?', options: ['앞', '뒤'], answer: 1 },
                conclude: '정월 대보름은 설날 뒤 처음 뜨는 보름달이 뜨는 날이에요.' },
              { prompt: '명절 음식 카드를 그 명절이 오는 차례대로 놓아 보세요.', toolOptions: { cards: [{ id: '떡국', text: '떡국', motif: 'sun' }, { id: '송편', text: '송편', motif: 'moon' }, { id: '팥죽', text: '팥죽', motif: 'snow' }] },
                target: { order: ['떡국', '송편', '팥죽'] }, difficulty: 0.25,
                hints: ['음식마다 먹는 명절을 먼저 떠올려 보세요.', '그 명절이 한 해의 어느 때 오는지 떠올려 보세요. 추운 겨울 명절은 끝 쪽이에요.', '설날 떡국, 추석 송편, 동지 팥죽 차례예요.'] },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 자료에서 처음 알게 된 명절 음식은 무엇인가요?" 두세 명의 대답을 듣고, 집에서 명절에 먹는 음식이 자료와 다를 수도 있다는 것을 말해 준다(집마다 차례 음식이 다르다). 다음 시간에는 전통 놀이 자료를 읽고 직접 놀아 본다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '명절 음식', slots: [{ id: 'e1', label: '동지' }, { id: 'e2', label: '정월 대보름' }], cards: ['팥죽', '부럼'] }, prompt: '두 명절과 그날 먹는 음식을 이어 보세요.', target: { match: { e1: '팥죽', e2: '부럼' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '반달 모양으로 빚는 추석 떡은 무엇일까요?', options: ['떡국 떡', '송편', '약과'], answer: 1, difficulty: 0.1, explain: '추석에는 반달 모양 송편을 빚어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '명절과 음식',
      items: [
        { type: 'table', prompt: '명절에 먹는 음식을 쓰세요.', columns: ['명절', '음식'], cells: [['설날', ''], ['추석', ''], ['동지', '']] },
        { type: 'choice', prompt: '정월 대보름에 깨무는 것에 ○ 하세요.', options: ['부럼', '팥죽', '떡국'], answer: '부럼' },
        { type: 'blank', prompt: '빈칸에 알맞은 명절 이름을 쓰세요.', text: '한 해가 시작되는 날은 ___이에요.', answer: '설날' },
        { type: 'draw', prompt: '우리 집에서 명절에 먹는 음식을 그려 보세요.' },
      ],
      easy: {
        note: '설날 → 떡국, 추석 → 송편!',
        items: [
          { type: 'choice', prompt: '설날에 먹는 음식에 ○ 하세요.', options: ['떡국', '송편'], answer: '떡국' },
          { type: 'choice', prompt: '추석에 먹는 음식에 ○ 하세요.', options: ['팥죽', '송편'], answer: '송편' },
          { type: 'draw', prompt: '좋아하는 명절 음식을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 놓으면 초록 테두리가 생기고, 틀리면 카드가 돌아와요. 명절 세 개로 해요.',
      base: '자료 글을 떠올려 네 명절을 이어요.',
      challenge: '명절이 아닌 날 음식(미역국) 함정 카드가 있어요. 음식으로 명절 차례도 놓아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 명절과 음식을 모두 처음 들어 아무렇게나 잇는다 → 자료 글을 다시 읽어 주고 "반달", "붉은" 같은 낱말을 찾게 한다. ② 추석을 설날보다 먼저 놓는다 → 달력과 계절(추운 겨울·선선한 가을)로 짚는다. ③ 우리 집은 그 음식을 안 먹는다고 걱정한다 → 집마다 다를 수 있고 자료는 많은 집이 하는 것을 알려 준다고 말한다.',
  }));

  lessons.push(L(7, {
    title: '전통 놀이 자료 읽고 윷놀이 직접 해 보기',
    objective: '전통 놀이 자료를 읽고 놀이와 놀잇감을 짝 지으며, 윷의 모양에 따라 말이 가는 칸 수를 알고 짝과 윷놀이를 할 수 있다.',
    illustration: ART('children playing yut nori on a paper game board with four wooden sticks tossed in the air, a jegi shuttlecock and a spinning top nearby', '윷을 던져 볼까요?', [
      { motif: 'star', x: 120, y: 86, s: 0.6 }, { motif: 'tree', x: 380, y: 214 }, { motif: 'flower', x: 300, y: 228, color: 'buttercup' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"이 막대 네 개는 무엇일까요?" 실제 윷가락을 보여 주고 둥근 쪽과 평평한 쪽을 손으로 만져 보게 한다. 시연 단추로 놀이와 놀잇감이 이어지는 모습을 보여 준다. "자료를 읽으면 처음 하는 놀이도 할 수 있어요. 오늘은 읽고 직접 해 봐요." 윷은 위로 가볍게 던지고 친구 쪽으로 던지지 않는다는 약속을 먼저 말한다.',
        student: '해 본 전통 놀이가 있으면 짝에게 이름을 말해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '놀이와 놀잇감', slots: [{ id: 's1', label: '윷놀이' }], cards: ['윷가락 네 개', '제기'], shuffle: false }, sequence: [{ match: { s1: '윷가락 네 개' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 놀이 자료 읽고 놀잇감 짝 짓기', minutes: 10, tool: 'mindmap',
            teacher: '자료 글을 읽어 준다: "제기차기는 발로 제기를 차서 떨어뜨리지 않는 놀이예요. 투호는 화살을 던져 항아리에 넣는 놀이예요. 팽이치기는 채로 팽이를 쳐서 오래 돌리는 놀이예요." "투호에는 무엇이 필요하다고 했나요?" 자료에서 놀잇감 낱말을 찾아 짚게 한다. 연날리기처럼 바람이 필요한 놀이는 무엇이 더 필요한지도 묻는다.',
            task: '놀이 자료를 읽고 놀이와 놀잇감을 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '놀이와 필요한 놀잇감을 이어 보세요.', toolOptions: { mode: 'match', topic: '놀이와 놀잇감', slots: [{ id: 's1', label: '제기차기' }, { id: 's2', label: '투호' }, { id: 's3', label: '팽이치기' }], cards: ['제기', '화살과 항아리', '팽이와 채'] },
                target: { match: { s1: '제기', s2: '화살과 항아리', s3: '팽이와 채' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['제기', '화살과 항아리', '팽이와 채', { id: '공', text: '축구공', why: '축구공은 이 전통 놀이에 쓰지 않아요.' }] } } } },
              { prompt: '놀이와 하는 방법을 이어 보세요.', toolOptions: { mode: 'match', topic: '어떻게 놀까?', slots: [{ id: 's1', label: '제기차기' }, { id: 's2', label: '연날리기' }], cards: ['발로 차 올려요', '바람에 띄워요'] },
                target: { match: { s1: '발로 차 올려요', s2: '바람에 띄워요' } }, difficulty: 0.1 },
              { prompt: '던지는 놀이만 골라 보세요.', toolOptions: { mode: 'pick', basket: '던지는 놀이', cards: ['투호', '윷놀이', { id: '제기', text: '제기차기', why: '제기차기는 발로 차는 놀이예요.' }, { id: '연', text: '연날리기', why: '연은 던지지 않고 바람에 띄워요.' }] },
                target: { pick: ['투호', '윷놀이'] }, difficulty: 0.2 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 윷 모양 읽고 짝과 윷놀이 하기', minutes: 16, tool: 'mindmap',
            teacher: '"윷가락이 하나만 평평한 쪽이 위로 나오면 \'도\', 말이 한 칸 가요." 칠판에 도(1칸)·개(2칸)·걸(3칸)·윷(4칸)·모(5칸)를 윷가락 그림과 함께 붙인다. 네 개가 모두 둥근 쪽이면 \'모\'라 가장 많이 간다는 것을 짚는다(평평한 쪽이 많을수록 많이 가다가, 모는 반대로 모두 엎어진 것). 그다음 짝과 활동지 윷판으로 실제로 놀이를 한다. 지는 것이 속상한 학생에게 "윷은 누구에게나 똑같이 나와요"라고 말해 준다.',
            task: '윷 이름과 말이 가는 칸 수를 잇고, 짝과 윷놀이를 해요.',
            levels: CARD_LV,
            items: [
              { prompt: '윷 이름과 말이 가는 칸 수를 이어 보세요.', toolOptions: { mode: 'match', topic: '몇 칸 갈까?', slots: [{ id: 's1', label: '도' }, { id: 's2', label: '개' }, { id: 's3', label: '걸' }], cards: ['한 칸', '두 칸', '세 칸'] },
                target: { match: { s1: '한 칸', s2: '두 칸', s3: '세 칸' } }, difficulty: 0.15,
                levels: { challenge: { prompt: '윷 이름 다섯 개와 말이 가는 칸 수를 이어 보세요.', toolOptions: { slots: [{ id: 's1', label: '도' }, { id: 's2', label: '개' }, { id: 's3', label: '걸' }, { id: 's4', label: '윷' }, { id: 's5', label: '모' }], cards: ['한 칸', '두 칸', '세 칸', '네 칸', '다섯 칸'] }, target: { match: { s1: '한 칸', s2: '두 칸', s3: '세 칸', s4: '네 칸', s5: '다섯 칸' } } } } },
              { prompt: '말이 적게 가는 것부터 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['도', '개', '걸', '윷'], slots: ['1', '2', '3', '4'] },
                target: { order: ['도', '개', '걸', '윷'] }, difficulty: 0.2,
                hints: ['카드마다 말이 몇 칸 가는지 먼저 떠올려 보세요.', '한 칸 가는 것이 맨 앞이에요. 다음은 두 칸이에요.', '도(1)·개(2)·걸(3)·윷(4) 차례예요.'] },
              { prompt: '짝과 윷놀이를 한 판 했으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"자료를 읽기 전과 뒤에 윷놀이가 어떻게 달라졌나요?" 자료를 읽으니 처음 하는 놀이도 할 수 있었다는 것을 말해 준다. 윷가락을 모둠 바구니에 모아 정리한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '몇 칸 갈까?', slots: [{ id: 'e1', label: '윷' }, { id: 'e2', label: '모' }], cards: ['네 칸', '다섯 칸'] }, prompt: '윷 이름과 말이 가는 칸 수를 이어 보세요.', target: { match: { e1: '네 칸', e2: '다섯 칸' } }, difficulty: 0.2 },
          { type: 'choice', prompt: '화살을 던져 항아리에 넣는 놀이는 무엇일까요?', options: ['투호', '팽이치기', '제기차기'], answer: 0, difficulty: 0.1, explain: '투호는 화살을 항아리에 던져 넣는 놀이예요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '전통 놀이와 윷판',
      items: [
        { type: 'table', prompt: '윷 이름과 칸 수를 쓰세요.', columns: ['도', '개', '걸', '윷', '모'], cells: [['', '', '', '', '']] },
        { type: 'choice', prompt: '발로 차는 놀이에 ○ 하세요.', options: ['제기차기', '투호', '연날리기'], answer: '제기차기' },
        { type: 'short', prompt: '해 보고 싶은 전통 놀이와 필요한 놀잇감을 쓰세요.' },
        { type: 'draw', wide: true, prompt: '짝과 함께 쓸 윷판을 그려 보세요. 칸을 20개쯤 그려요.' },
      ],
      easy: {
        note: '도는 한 칸, 개는 두 칸!',
        items: [
          { type: 'choice', prompt: '도가 나오면 몇 칸 갈까요?', options: ['한 칸', '세 칸'], answer: '한 칸' },
          { type: 'choice', prompt: '투호에 필요한 것에 ○ 하세요.', options: ['화살과 항아리', '제기'], answer: '화살과 항아리' },
          { type: 'draw', prompt: '윷가락 네 개를 그려 보세요.' },
        ],
      },
    },
    safety: ['윷은 위로 가볍게 던지고 친구 쪽으로 던지지 않아요.', '윷가락을 입에 물거나 휘두르지 않아요.'],
    differentiation: {
      easy: '맞는 칸에 놓으면 초록 테두리가 생기고, 틀리면 카드가 돌아와요. 윷 이름은 세 개로 해요.',
      base: '놀잇감과 윷 칸 수를 이어요. 짝과 윷놀이를 해요.',
      challenge: '함정 놀잇감을 골라내고, 윷 이름 다섯 개를 모두 이어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 모가 왜 다섯 칸인지 헷갈린다(평평한 쪽이 하나도 없는데 가장 많이 감) → 모는 특별한 이름이라고 따로 짚는다. ② 놀이 도중 다툼이 생긴다 → 던지는 차례를 가위바위보로 정하고 한 번씩 번갈아 던지게 한다. ③ 윷을 세게 던져 멀리 튄다 → 방석이나 담요 위에서 던지게 한다. 윷판은 교사가 미리 인쇄해 두어도 좋다.',
  }));

  lessons.push(L(8, {
    title: '사계절 사진과 지도로 우리 자연 읽기',
    objective: '사계절 사진 자료를 읽고 계절에 따라 나누며, 칸 지도에서 우리나라에서 가장 높은 산을 찾을 수 있다.',
    illustration: ART('four paper panels of Korean seasons, pink azaleas in spring, a beach in summer, red maple mountains in autumn and a snowy mountain in winter, arranged around a small paper map of Korea', '우리나라의 봄·여름·가을·겨울', [
      { motif: 'flower', x: 100, y: 226, color: 'rose' }, { motif: 'leaf', x: 300, y: 222 }, { motif: 'snow', x: 400, y: 90 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"지금은 어떤 계절인가요? 창밖을 보고 무엇을 보고 알았는지 말해 볼까요?" 우리나라는 봄·여름·가을·겨울 네 계절이 뚜렷하다는 것을 사진 네 장(진달래, 바닷가, 단풍, 눈 덮인 산)으로 보여 준다. 시연 단추로 사진 카드가 계절 가지에 들어가는 모습을 보여 준다. 사진 자료를 읽을 때 날씨·옷차림·나무 색을 단서로 찾는다고 알린다.',
        student: '지금 창밖에서 계절을 알려 주는 것을 하나 찾아 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '우리나라 계절', slots: ['봄', '겨울'], cards: ['진달래가 피어요', '눈이 쌓여요'], shuffle: false }, sequence: [{ sort: { '봄': ['진달래가 피어요'], '겨울': ['눈이 쌓여요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 사진 자료를 계절에 따라 나누기', minutes: 14, tool: 'mindmap',
            teacher: '"이 사진에서 사람들은 어떤 옷을 입었나요? 나뭇잎은 무슨 색인가요?" 사진 카드를 하나씩 띄우며 단서를 먼저 말하게 하고, 그 단서로 계절을 고르게 한다. 단풍을 봄이라고 고른 학생에게 "꽃이 피는 것과 잎이 빨갛게 물드는 것은 어떻게 달라요?"라고 묻는다. 우리나라 겨울에는 눈이 오지만, 사는 곳에 따라 눈이 적게 오는 곳도 있다는 것을 덧붙인다.',
            task: '사진 자료의 단서를 읽고 계절에 따라 나누어 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '사진 카드를 계절에 따라 나누어 보세요.', toolOptions: { topic: '우리나라 계절', slots: ['봄', '여름', '가을', '겨울'], cards: [{ id: '진달래', text: '진달래가 피어요', motif: 'flower' }, { id: '바다', text: '바다에서 헤엄쳐요', motif: 'wave' }, { id: '단풍', text: '단풍이 빨갛게 들어요', motif: 'leaf' }, { id: '눈', text: '눈사람을 만들어요', motif: 'snow' }] },
                target: { sort: { '봄': ['진달래'], '여름': ['바다'], '가을': ['단풍'], '겨울': ['눈'] } }, difficulty: 0.1 },
              { prompt: '옷차림과 날씨를 단서로 계절에 따라 나누어 보세요.', toolOptions: { topic: '단서 찾기', slots: ['여름', '겨울'], cards: ['반소매 옷을 입어요', '두꺼운 털모자를 써요', '장맛비가 많이 내려요', '얼음 위에서 썰매를 타요'] },
                target: { sort: { '여름': ['반소매 옷을 입어요', '장맛비가 많이 내려요'], '겨울': ['두꺼운 털모자를 써요', '얼음 위에서 썰매를 타요'] } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['반소매 옷을 입어요', '두꺼운 털모자를 써요', '장맛비가 많이 내려요', '얼음 위에서 썰매를 타요', { id: '진달래', text: '진달래가 피어요', why: '진달래는 여름도 겨울도 아닌 봄에 피어요.' }] } } } },
              { prompt: '가을 사진에서 찾을 수 있는 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '가을 사진', cards: ['노랗게 익은 벼', '빨간 단풍잎', { id: '눈', text: '하얀 눈사람', why: '눈사람은 겨울에 만들어요.' }, { id: '새싹', text: '막 돋은 새싹', why: '새싹은 봄에 돋아요.' }] },
                target: { pick: ['노랗게 익은 벼', '빨간 단풍잎'] }, difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 칸 지도에서 높은 산 읽기', minutes: 12, tool: 'map',
            teacher: '"지도에서 종이가 높이 쌓인 곳일수록 땅이 높아요. 가장 높이 쌓인 곳을 찾아볼까요?" 칸 지도 아래 높이 띠를 함께 읽는다. 우리나라는 오른쪽(동쪽)에 높은 산이 많고 왼쪽(서쪽)은 낮은 땅이 많다는 것을 손으로 쓸어 보여 준다. 높은 곳을 "큰 곳"과 헷갈리는 학생에게 넓이가 아니라 높이를 본다는 것을 짚는다. 가장 높은 산은 백두산이고, 제주도에는 한라산이 있다는 것도 알려 준다.',
            task: '지도에서 땅의 높이를 읽고 핀을 꽂아요.',
            levels: {
              easy: { heightLegend: true, readout: true },
              base: { heightLegend: true },
              challenge: { heightLegend: true, terrainView: 'contour' },
            },
            items: [
              { prompt: '우리나라 칸 지도에서 가장 높은 곳에 핀을 꽂아 보세요.', toolOptions: KR(['서울', '부산', '백두산'], { mode: 'terrain' }), target: { highest: true }, difficulty: 0.15,
                predict: { q: '가장 높은 곳은 지도에서 어떻게 보일까요?', options: ['종이가 가장 많이 쌓인 곳', '가장 넓은 곳'], answer: 0 },
                conclude: '우리나라에서 가장 높은 산은 백두산이에요.' },
              { prompt: '서울처럼 낮고 평평한 땅을 찾아 서울에 핀을 꽂아 보세요.', toolOptions: KR(['서울', '부산', '백두산', '경주'], { mode: 'terrain' }), target: { place: '서울' }, difficulty: 0.1 },
              { prompt: '지도에서 가장 낮은 땅 가운데 한 곳에 핀을 꽂아 보세요. 바다는 빼요.', toolOptions: KR(['서울', '백두산'], { mode: 'terrain' }), target: { height: 0 }, difficulty: 0.25,
                hints: ['높이 띠에서 가장 아래 색이 가장 낮은 땅이에요.', '바다(파란 곳)가 아닌 땅 가운데 가장 연한 색 칸을 찾아보세요.', '지도 왼쪽 땅에 낮은 땅 색 칸이 많아요. 그 가운데 하나에 꽂아요.'] },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 사진과 지도 두 가지 자료를 읽었어요. 계절은 무엇으로 알았고, 높은 산은 무엇으로 알았나요?" 사진은 모습을, 지도는 자리와 높이를 알려 준다는 것을 함께 말한다. 다음 시간부터 모은 자료로 알게 된 것을 발표한다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '우리나라 계절', slots: ['봄', '가을'], cards: ['벚꽃이 활짝 펴요', '은행잎이 노랗게 물들어요'] }, prompt: '두 사진 카드를 계절에 따라 나누어 보세요.', target: { sort: { '봄': ['벚꽃이 활짝 펴요'], '가을': ['은행잎이 노랗게 물들어요'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '우리나라에서 가장 높은 산은 무엇일까요?', options: ['백두산', '남산', '뒷산'], answer: 0, difficulty: 0.15, explain: '우리나라에서 가장 높은 산은 백두산이에요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '우리나라의 사계절',
      items: [
        { type: 'table', prompt: '계절마다 볼 수 있는 것을 쓰거나 그리세요.', columns: ['봄', '여름', '가을', '겨울'], rows: 1 },
        { type: 'choice', prompt: '겨울을 알려 주는 단서에 ○ 하세요.', options: ['두꺼운 털모자', '반소매 옷', '진달래'], answer: '두꺼운 털모자' },
        { type: 'figure', wide: true, prompt: '가장 높은 곳에 ○ 하세요.', tool: 'map', figures: [{ options: KR(['서울', '부산', '백두산'], { mode: 'terrain', heightLegend: true }), caption: '' }], answer: '백두산 칸' },
        { type: 'short', prompt: '내가 좋아하는 계절과 그 까닭을 쓰세요.' },
      ],
      easy: {
        note: '옷차림과 날씨가 계절을 알려 줘요.',
        items: [
          { type: 'choice', prompt: '여름에 ○ 하세요.', options: ['바다에서 헤엄쳐요', '눈사람을 만들어요'], answer: '바다에서 헤엄쳐요' },
          { type: 'choice', prompt: '가을에 ○ 하세요.', options: ['단풍이 들어요', '새싹이 돋아요'], answer: '단풍이 들어요' },
          { type: 'draw', prompt: '좋아하는 계절을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 가지에 초록 테두리가 생겨요. 지도에서는 핀을 꽂은 칸의 높이가 보여요.',
      base: '단서를 말하고 나누어요. 높이 띠를 읽고 핀을 꽂아요.',
      challenge: '봄 함정 카드를 골라내고, 등고선만 있는 지도에서 높이를 읽어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 꽃은 봄, 잎이 물드는 것은 가을인데 둘 다 꽃이라 여긴다 → 사진을 나란히 놓고 견준다. ② 넓은 곳을 높은 곳으로 여긴다 → 종이를 겹쳐 쌓아 높이를 보여 준다. ③ 칸 지도의 높이를 실제 산 모양으로 여긴다 → 실제 지도·사진과 함께 보여 준다. 백두산은 우리 땅의 북쪽 끝에 있고 지금은 직접 가기 어렵다는 것도 물으면 알려 준다.',
  }));

  // ───────────────────────── 9~12차시: 알게 된 것 발표하고 다른 나라와 견주기 ─────────────────────────

  lessons.push(L(9, {
    title: '알게 된 것을 내 말로 바꾸어 발표하기',
    objective: '모은 자료에서 새로 알게 된 것을 자료 글 그대로가 아니라 내 말로 바꾸어 "알아본 것 → 알게 된 것 → 느낀 점" 차례로 발표할 수 있다.',
    illustration: ART('a child standing in front of the class holding a paper poster with pictures of hanbok and rice cakes, classmates listening with raised thumbs', '내 말로 발표해요', [
      { motif: 'star', x: 120, y: 84, s: 0.6 }, { motif: 'house', x: 380, y: 214, color: 'lavender' }, { motif: 'flower', x: 250, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '두 가지 발표를 들려준다. 하나는 자료 글을 고개를 숙이고 그대로 읽는다("송편은 햅쌀가루를 익반죽하여 소를 넣고 빚은 떡이다"). 다른 하나는 친구를 보며 말한다("송편은 새로 거둔 쌀로 만든 반달 떡이에요. 저도 빚어 보고 싶어요"). "어느 발표가 더 잘 들어왔나요? 왜 그럴까요?" 시연 단추로 발표 차례 카드가 놓이는 모습을 보여 준다.',
        student: '두 발표 가운데 더 잘 알아들은 발표를 손가락으로 골라 봐요.',
        demo: { tool: 'story', options: { cards: [{ id: 'what', text: '알아본 것', motif: 'star' }, { id: 'learn', text: '알게 된 것', motif: 'leaf' }, { id: 'feel', text: '느낀 점', motif: 'flower' }], slots: ['처음', '가운데', '끝'], shuffle: false }, sequence: [{ order: ['what', 'learn', 'feel'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 자료 글을 내 말로 바꾸기', minutes: 12, tool: 'mindmap',
            teacher: '"\'익반죽\'이라는 말을 친구들이 알까요? 내가 아는 쉬운 말로 바꾸어 볼까요?" 자료의 어려운 말을 쉬운 말로 바꾸면 듣는 친구가 알아듣는다는 것을 짚는다. 발표는 자료를 그대로 읽으면 된다고 여기는 학생에게 "읽는 동안 친구 얼굴을 볼 수 있었나요?"라고 묻는다. 내 말로 바꿀 때 뜻이 달라지지 않게 자료를 다시 보며 견주게 한다.',
            task: '자료 글과 내 말로 바꾼 말을 짝 짓고, 듣기 쉬운 발표 말을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '자료 글과 내 말로 바꾼 말을 이어 보세요.', toolOptions: { mode: 'match', topic: '내 말로 바꾸기', slots: [{ id: 's1', label: '한복은 우리 고유의 옷이다' }, { id: 's2', label: '윷놀이는 정초에 즐기는 놀이다' }], cards: ['한복은 우리나라 옷이에요', '윷놀이는 설날 무렵에 해요'] },
                target: { match: { s1: '한복은 우리나라 옷이에요', s2: '윷놀이는 설날 무렵에 해요' } }, difficulty: 0.15 },
              { prompt: '자료에 쓰인 말과 내 말로 바꾼 말로 나누어 보세요.', toolOptions: { topic: '어떤 말일까?', slots: ['자료에 쓰인 말', '내 말로 바꾼 말'], cards: ['동지에는 팥죽을 쑤어 먹는다', '투호는 화살을 병에 던져 넣는 놀이다', '동지에는 붉은 팥죽을 먹어요', '투호는 항아리에 화살을 던지는 놀이예요'] },
                target: { sort: { '자료에 쓰인 말': ['동지에는 팥죽을 쑤어 먹는다', '투호는 화살을 병에 던져 넣는 놀이다'], '내 말로 바꾼 말': ['동지에는 붉은 팥죽을 먹어요', '투호는 항아리에 화살을 던지는 놀이예요'] } }, difficulty: 0.25,
                hints: ['자료 글은 "~다"로 끝나는 것이 많아요. 친구에게 말할 때는 끝이 어떻게 될까요?', '친구에게 하는 말은 "~요"로 끝나요. 끝소리를 다시 보세요.', '"~다"로 끝나는 두 장은 자료에 쓰인 말, "~요"로 끝나는 두 장은 내 말이에요.'] },
              { prompt: '친구가 알아듣기 쉬운 발표 말만 골라 보세요.', toolOptions: { mode: 'pick', basket: '듣기 쉬운 발표', cards: ['송편은 반달 모양 떡이에요', '저는 추석 음식을 알아보았어요', { id: '익반죽', text: '익반죽하여 소를 넣는다', why: '어려운 말이라 친구가 알아듣기 어려워요.' }, { id: '중얼', text: '(고개 숙이고 작게 읽기)', why: '친구 얼굴을 보며 또렷하게 말해요.' }] },
                target: { pick: ['송편은 반달 모양 떡이에요', '저는 추석 음식을 알아보았어요'] }, difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 차례대로 모둠 발표하기', minutes: 14, tool: 'story',
            teacher: '"발표 틀을 채워 볼까요? \'저는 ___을 알아보았어요. ___을 새로 알게 되었어요. ___ 느꼈어요.\'" 4명 모둠에서 한 사람씩 1분 안에 발표한다(모둠마다 동시에 하므로 6분이면 모두 발표한다). 듣는 친구는 발표가 끝나면 "알게 된 것이 무엇이었는지" 한 낱말로 말해 준다. 끝까지 말하지 못한 학생에게는 틀의 첫 문장만이라도 말하게 한다.',
            task: '발표 틀의 빈칸을 채우고, 모둠에서 차례대로 발표해요.',
            levels: CARD_LV,
            items: [
              { prompt: '서아의 발표를 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: 'a', text: '저는 전통 놀이를 알아보았어요', motif: 'star' }, { id: 'b', text: '투호는 화살을 던지는 놀이예요', motif: 'leaf' }, { id: 'c', text: '친구와 해 보고 싶어요', motif: 'flower' }], slots: ['처음', '가운데', '끝'] },
                target: { order: ['a', 'b', 'c'] }, difficulty: 0.15 },
              { prompt: '하준이의 발표 틀 빈칸에 알맞은 카드를 넣어 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'b1', who: '하준', label: '저는 ___을 알아보았어요.' }, { id: 'b2', who: '하준', label: '설날에는 ___을 먹는다는 것을 알게 되었어요.' }], cards: ['명절 음식', '떡국', '축구'] },
                target: { fill: { b1: '명절 음식', b2: '떡국' } }, difficulty: 0.2 },
              { prompt: '모둠에서 내 말로 발표하고 친구 발표도 끝까지 들었으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 친구 발표에서 새로 알게 된 것을 하나 말해 볼까요?" 두세 명의 대답을 듣는다. 다음 시간에는 우리 옷을 다른 나라 옷과 견주어 말한다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '내 말로 바꾸기', slots: [{ id: 'e1', label: '무궁화는 우리나라의 나라꽃이다' }, { id: 'e2', label: '연날리기는 바람을 이용한 놀이다' }], cards: ['무궁화는 우리나라를 나타내는 꽃이에요', '연날리기는 바람에 연을 띄워요'] }, prompt: '자료 글과 내 말로 바꾼 말을 이어 보세요.', target: { match: { e1: '무궁화는 우리나라를 나타내는 꽃이에요', e2: '연날리기는 바람에 연을 띄워요' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '발표할 때 알맞은 모습은 무엇일까요?', options: ['자료를 고개 숙이고 그대로 읽어요', '친구를 보며 내 말로 말해요', '아주 작게 빨리 말해요'], answer: 1, difficulty: 0.1, explain: '친구를 보며 쉬운 내 말로 말하면 잘 알아들어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '내 말로 발표하기',
      items: [
        { type: 'blank', prompt: '발표 틀을 채우세요.', text: '저는 ___을 알아보았어요. ___을 새로 알게 되었어요.', answer: '(내가 알아본 것)' },
        { type: 'choice', prompt: '내 말로 바꾼 말에 ○ 하세요.', options: ['한복은 고유의 의복이다', '한복은 우리나라 옷이에요'], answer: '한복은 우리나라 옷이에요' },
        { type: 'check', prompt: '발표할 때 지킬 것에 ✓ 하세요.', options: ['친구를 봐요', '또박또박 말해요', '고개를 숙이고 읽어요'] },
        { type: 'short', prompt: '친구 발표에서 새로 알게 된 것을 쓰세요.' },
      ],
      easy: {
        note: '알아본 것 → 알게 된 것 → 느낀 점!',
        items: [
          { type: 'short', prompt: '내가 알아본 것을 낱말로 쓰세요.' },
          { type: 'choice', prompt: '발표할 때는 누구를 보나요?', options: ['친구', '바닥'], answer: '친구' },
          { type: 'draw', prompt: '발표하는 내 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 놓으면 초록 테두리가 생기고, 틀리면 카드가 돌아와요. 발표는 첫 문장만 말해도 돼요.',
      base: '발표 틀 세 문장을 모두 말해요.',
      challenge: '자료 말과 내 말을 끝소리 단서로 나누고, 발표에 느낀 점까지 붙여요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 발표는 자료를 그대로 읽으면 된다고 여긴다 → 읽는 발표와 말하는 발표를 직접 견주어 들려준다. ② 내 말로 바꾸다 뜻이 달라진다 → 자료와 다시 견주어 "같은 뜻인가요?"를 묻는다. ③ 발표가 부끄러워 말을 못 한다 → 짝에게 먼저 말하고 모둠에서 말하게 단계를 둔다.',
  }));

  lessons.push(L(10, {
    title: '한복과 다른 나라 옷을 견주어 말하기',
    objective: '한복과 일본·베트남의 전통 옷을 그림 자료로 견주어 보고, 다른 점 하나를 "우리 한복은 ~, ○○ 옷은 ~" 틀로 말할 수 있다.',
    illustration: ART('three paper dolls side by side wearing a Korean hanbok with a long ribbon tie, a Japanese kimono with a wide sash, and a Vietnamese ao dai long tunic with trousers', '한복과 다른 나라 옷', [
      { motif: 'flower', x: 110, y: 226, color: 'rose' }, { motif: 'flower', x: 370, y: 226, color: 'lavender' }, { motif: 'star', x: 250, y: 84, s: 0.5 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"한복을 입어 본 적이 있나요? 저고리 앞에 길게 늘어진 끈을 무엇이라고 할까요?" 한복 그림(또는 실물)에서 옷고름을 짚는다. 시연 단추로 나라와 옷이 이어지는 모습을 보여 준다. "다른 나라에도 그 나라의 전통 옷이 있어요. 오늘은 두 옷을 견주어 같은 점과 다른 점을 찾아요." 다른 나라 옷을 "이상하다"고 하는 학생에게 "우리 한복도 그 나라 친구에게는 처음 보는 옷이에요"라고 말해 준다.',
        student: '한복에서 가장 눈에 띄는 곳을 하나 찾아 짝에게 말해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '나라와 전통 옷', slots: [{ id: 's1', label: '우리나라' }], cards: ['한복', '기모노'], shuffle: false }, sequence: [{ match: { s1: '한복' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 나라와 전통 옷 짝 짓기', minutes: 12, tool: 'mindmap',
            teacher: '세 옷 그림을 띄우고 자료 글을 읽어 준다: "일본의 기모노는 허리에 넓은 띠를 둘러요. 베트남의 아오자이는 길게 내려오는 웃옷 아래에 바지를 입어요. 우리 한복의 저고리에는 옷고름이 있어요." "옷고름은 어느 옷에 있다고 했나요?" 자료에서 낱말을 찾게 한다. 다른 나라 옷도 그 나라 사람들이 명절이나 큰 날에 입는다는 것을 짚는다.',
            task: '자료를 읽고 나라와 전통 옷, 옷과 생김새를 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '나라와 전통 옷 이름을 이어 보세요.', toolOptions: { mode: 'match', topic: '나라와 전통 옷', slots: [{ id: 's1', label: '우리나라' }, { id: 's2', label: '일본' }, { id: 's3', label: '베트남' }], cards: ['한복', '기모노', '아오자이'] },
                target: { match: { s1: '한복', s2: '기모노', s3: '아오자이' } }, difficulty: 0.15 },
              { prompt: '옷과 자료에 나온 생김새를 이어 보세요.', toolOptions: { mode: 'match', topic: '어떻게 생겼을까?', slots: [{ id: 's1', label: '한복 저고리' }, { id: 's2', label: '기모노' }, { id: 's3', label: '아오자이' }], cards: ['앞에 옷고름이 있어요', '허리에 넓은 띠를 둘러요', '긴 웃옷 아래 바지를 입어요'] },
                target: { match: { s1: '앞에 옷고름이 있어요', s2: '허리에 넓은 띠를 둘러요', s3: '긴 웃옷 아래 바지를 입어요' } }, difficulty: 0.25,
                levels: { challenge: { toolOptions: { cards: ['앞에 옷고름이 있어요', '허리에 넓은 띠를 둘러요', '긴 웃옷 아래 바지를 입어요', { id: '모자', text: '꼭 모자를 함께 써요', why: '자료에는 이런 말이 없어요. 자료에 나온 생김새만 이어요.' }] } } } },
              { prompt: '세 옷에 모두 맞는 말만 골라 보세요.', toolOptions: { mode: 'pick', basket: '세 옷이 같은 점', cards: ['그 나라의 전통 옷이에요', '명절이나 큰 날에 입어요', { id: '고름', text: '옷고름이 있어요', why: '옷고름은 한복에만 있어요.' }, { id: '띠', text: '허리에 넓은 띠를 둘러요', why: '넓은 띠는 기모노의 생김새예요.' }] },
                target: { pick: ['그 나라의 전통 옷이에요', '명절이나 큰 날에 입어요'] }, difficulty: 0.2,
                predict: { q: '다른 나라 전통 옷도 우리 한복과 같은 점이 있을까요?', options: ['있어요', '없어요'], answer: 0 },
                conclude: '생김새는 달라도 모두 그 나라 사람들이 큰 날에 입는 전통 옷이에요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 견주는 말 만들어 짝에게 말하기', minutes: 14, tool: 'story',
            teacher: '"견주어 말할 때는 \'우리 한복은 ~, 일본 기모노는 ~\'처럼 두 옷을 한 번씩 말해요." 칠판에 견주는 말 틀을 붙인다. 한쪽 옷만 말하는 학생에게 "다른 옷은 어떤가요?"라고 묻는다. 견주는 말을 다 만든 짝은 서로 들려주고, 듣는 짝은 손가락 두 개를 들어 "두 옷을 다 말했어요"를 알려 준다.',
            task: '견주는 말 틀의 빈칸을 채우고, 짝에게 말해요.',
            levels: CARD_LV,
            items: [
              { prompt: '견주는 말 빈칸에 알맞은 카드를 넣어 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'b1', who: '민지', label: '우리 한복에는 ___이 있어요.' }, { id: 'b2', who: '민지', label: '일본 기모노에는 ___가 있어요.' }], cards: ['옷고름', '넓은 허리띠', '긴 바지'] },
                target: { fill: { b1: '옷고름', b2: '넓은 허리띠' } }, difficulty: 0.2 },
              { prompt: '두 옷을 견주어 말한 문장만 골라 보세요.', toolOptions: { mode: 'pick', basket: '견주어 말했어요', cards: ['한복은 옷고름이 있고, 기모노는 넓은 띠가 있어요', '한복은 치마가 넓고, 아오자이는 바지를 입어요', { id: '한쪽', text: '한복은 예뻐요', why: '한 옷만 말했어요. 다른 옷도 말해야 견주는 말이에요.' }, { id: '나쁨', text: '기모노는 이상해요', why: '견주는 말이 아니라 낮추는 말이에요.' }] },
                target: { pick: ['한복은 옷고름이 있고, 기모노는 넓은 띠가 있어요', '한복은 치마가 넓고, 아오자이는 바지를 입어요'] }, difficulty: 0.2 },
              { prompt: '짝에게 두 옷을 견주어 말하고 짝의 말도 들었으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"한복과 다른 나라 옷이 같은 점은 무엇이었나요?" 모두 그 나라의 전통 옷이고 큰 날에 입는다는 것을 함께 말한다. 다음 시간에는 우리 밥상과 다른 나라 밥상을 견준다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '어떻게 생겼을까?', slots: [{ id: 'e1', label: '아오자이' }, { id: 'e2', label: '한복 저고리' }], cards: ['긴 웃옷 아래 바지를 입어요', '앞에 옷고름이 있어요'] }, prompt: '옷과 생김새를 이어 보세요.', target: { match: { e1: '긴 웃옷 아래 바지를 입어요', e2: '앞에 옷고름이 있어요' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '두 옷을 견주어 말한 것은 무엇일까요?', options: ['기모노는 예뻐요', '한복은 옷고름이 있고, 기모노는 넓은 띠가 있어요', '아오자이는 베트남 옷이에요'], answer: 1, difficulty: 0.2, explain: '두 옷을 한 번씩 말해야 견주는 말이에요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '한복과 다른 나라 옷',
      items: [
        { type: 'table', prompt: '옷의 이름과 나라, 눈에 띄는 생김새를 쓰세요.', columns: ['옷 이름', '나라', '눈에 띄는 생김새'], cells: [['한복', '', ''], ['기모노', '', ''], ['아오자이', '', '']] },
        { type: 'choice', prompt: '옷고름이 있는 옷에 ○ 하세요.', options: ['한복', '기모노', '아오자이'], answer: '한복' },
        { type: 'blank', prompt: '견주는 말을 완성하세요.', text: '한복은 ___이 있고, 기모노는 ___가 있어요.', answer: '옷고름, 넓은 띠' },
        { type: 'draw', prompt: '입어 보고 싶은 다른 나라 전통 옷을 그려 보세요.' },
      ],
      easy: {
        note: '두 옷을 한 번씩 말해요.',
        items: [
          { type: 'choice', prompt: '일본의 전통 옷에 ○ 하세요.', options: ['기모노', '한복'], answer: '기모노' },
          { type: 'choice', prompt: '허리에 넓은 띠를 두르는 옷에 ○ 하세요.', options: ['기모노', '한복'], answer: '기모노' },
          { type: 'draw', prompt: '한복을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 놓으면 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '나라·옷·생김새를 잇고, 견주는 말을 짝에게 말해요.',
      challenge: '자료에 없는 말(함정 카드)을 골라내고, 같은 점과 다른 점을 함께 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 다른 나라 옷을 "이상해요"로 말한다 → 우리 옷도 남에게는 낯설다는 것을 짚고, 생김새를 말하게 한다. ② 한쪽 옷만 말한다 → 손가락 두 개 신호로 두 옷을 모두 말하게 한다. ③ 자료에 없는 것을 지어낸다 → "자료 어디에 그렇게 쓰여 있나요?"를 묻는다. 교실에 다문화 학생이 있으면 그 나라 옷 이야기를 강요하지 말고 원할 때만 들려주게 한다.',
  }));

  lessons.push(L(11, {
    title: '우리 밥상과 다른 나라 밥상 견주기',
    objective: '우리 밥상과 다른 나라 밥상의 음식과 먹는 도구를 견주어 보고, 다른 점 하나를 견주는 말로 말할 수 있다.',
    illustration: ART('a Korean paper dining table with rice, soup, kimchi, a spoon and chopsticks next to an Italian table with spaghetti and a fork and an Indian table with curry and flatbread', '어떻게 먹을까요?', [
      { motif: 'house', x: 120, y: 214, color: 'buttercup' }, { motif: 'tree', x: 380, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"오늘 아침에는 무엇으로 밥을 먹었나요? 숟가락만? 젓가락만?" 우리나라에서는 숟가락과 젓가락을 함께 쓰는 집이 많다는 것을 짚는다. 시연 단추로 음식과 나라가 이어지는 모습을 보여 준다. "다른 나라 사람들은 무엇을 먹고, 무엇으로 먹을까요? 오늘은 밥상을 견주어 봐요."',
        student: '우리 집 밥상에 자주 오르는 음식을 짝에게 하나 말해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '나라와 음식', slots: [{ id: 's1', label: '이탈리아' }], cards: ['스파게티', '비빔밥'], shuffle: false }, sequence: [{ match: { s1: '스파게티' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 나라와 음식, 먹는 도구 짝 짓기', minutes: 13, tool: 'mindmap',
            teacher: '자료 글을 읽어 준다: "우리나라는 밥과 국에 김치를 곁들이고, 숟가락과 젓가락을 함께 써요. 이탈리아에서는 스파게티를 포크로 돌돌 말아 먹어요. 인도에서는 카레를 납작한 빵(난)이나 손으로 먹기도 해요. 일본에서는 초밥을 젓가락이나 손으로 먹어요." "손으로 먹는 것은 버릇이 없는 걸까요?" 묻고, 나라마다 먹는 방법이 달라도 그 나라에서는 알맞은 방법이라는 것을 짚는다.',
            task: '자료를 읽고 나라와 음식, 음식과 먹는 도구를 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '나라와 자료에 나온 음식을 이어 보세요.', toolOptions: { mode: 'match', topic: '나라와 음식', slots: [{ id: 's1', label: '우리나라' }, { id: 's2', label: '이탈리아' }, { id: 's3', label: '인도' }], cards: ['밥과 국, 김치', '스파게티', '카레와 난'] },
                target: { match: { s1: '밥과 국, 김치', s2: '스파게티', s3: '카레와 난' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { slots: [{ id: 's1', label: '우리나라' }, { id: 's2', label: '이탈리아' }, { id: 's3', label: '인도' }, { id: 's4', label: '일본' }], cards: ['밥과 국, 김치', '스파게티', '카레와 난', '초밥'] }, target: { match: { s1: '밥과 국, 김치', s2: '스파게티', s3: '카레와 난', s4: '초밥' } }, prompt: '네 나라와 자료에 나온 음식을 이어 보세요.' } } },
              { prompt: '자료에서 읽은 대로 음식과 먹는 도구를 이어 보세요.', toolOptions: { mode: 'match', topic: '무엇으로 먹을까?', slots: [{ id: 's1', label: '우리나라 밥과 국' }, { id: 's2', label: '이탈리아 스파게티' }], cards: ['숟가락과 젓가락', '포크'] },
                target: { match: { s1: '숟가락과 젓가락', s2: '포크' } }, difficulty: 0.15 },
              { prompt: '자료에 나온 우리 밥상의 모습만 골라 보세요.', toolOptions: { mode: 'pick', basket: '우리 밥상', cards: ['밥과 국을 함께 먹어요', '김치를 곁들여요', '숟가락과 젓가락을 함께 써요', { id: '포크', text: '포크로 면을 말아요', why: '자료에서 포크로 면을 마는 것은 이탈리아 스파게티였어요.' }] },
                target: { pick: ['밥과 국을 함께 먹어요', '김치를 곁들여요', '숟가락과 젓가락을 함께 써요'] }, difficulty: 0.2 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 밥상을 견주어 말하기', minutes: 13, tool: 'story',
            teacher: '"우리 밥상과 이탈리아 밥상을 견주어 말해 볼까요?" 견주는 말 틀을 함께 읽는다. 그다음 짝과 숟가락·젓가락·포크 그림 카드(또는 실물 숟가락과 포크)를 들고 "우리나라는 ~로, 이탈리아는 ~로 먹어요" 하고 번갈아 말한다. "인도 사람들은 손으로 먹어서 더러워요"처럼 말하는 학생에게 "인도에서는 먹기 전에 손을 깨끗이 씻고, 그것이 그 나라의 예절이에요"라고 짚는다.',
            task: '견주는 말 틀을 채우고, 짝과 번갈아 견주어 말해요.',
            levels: CARD_LV,
            items: [
              { prompt: '견주는 말 빈칸에 알맞은 카드를 넣어 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'b1', who: '준호', label: '우리나라는 ___로 밥을 먹어요.' }, { id: 'b2', who: '준호', label: '이탈리아는 ___로 스파게티를 먹어요.' }], cards: ['숟가락과 젓가락', '포크', '빨대'] },
                target: { fill: { b1: '숟가락과 젓가락', b2: '포크' } }, difficulty: 0.15 },
              { prompt: '다른 나라 밥상을 존중하는 말만 골라 보세요.', toolOptions: { mode: 'pick', basket: '존중하는 말', cards: ['손으로 먹는 방법도 있구나', '스파게티를 포크로 먹어 보고 싶어요', { id: '더러워', text: '손으로 먹으면 더러워요', why: '그 나라에서는 손을 씻고 먹는 알맞은 방법이에요.' }, { id: '이상', text: '우리 것만 맛있어요', why: '다른 나라 음식도 그 나라 사람들에게는 맛있는 음식이에요.' }] },
                target: { pick: ['손으로 먹는 방법도 있구나', '스파게티를 포크로 먹어 보고 싶어요'] }, difficulty: 0.15 },
              { prompt: '짝과 숟가락·포크 그림을 들고 밥상을 견주어 말했으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"우리 밥상과 다른 나라 밥상의 다른 점 하나를 견주는 말로 말해 볼까요?" 두세 명이 말하게 한다. 1~12차시에 만든 자료와 발표를 모아 다음 시간에 우리나라 소개 책을 만든다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '나라와 음식', slots: [{ id: 'e1', label: '일본' }, { id: 'e2', label: '인도' }], cards: ['초밥', '카레와 난'] }, prompt: '나라와 자료에 나온 음식을 이어 보세요.', target: { match: { e1: '초밥', e2: '카레와 난' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '다른 나라 밥상을 보고 하는 말로 알맞은 것은?', options: ['이상하게 먹어요', '그 나라에서는 이렇게 먹는구나', '우리 것만 좋아요'], answer: 1, difficulty: 0.1, explain: '나라마다 먹는 방법이 달라도 그 나라에서는 알맞은 방법이에요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '여러 나라 밥상',
      items: [
        { type: 'table', prompt: '나라마다 먹는 음식과 도구를 쓰세요.', columns: ['나라', '음식', '먹는 도구'], cells: [['우리나라', '', ''], ['이탈리아', '', ''], ['인도', '', '']] },
        { type: 'choice', prompt: '우리나라에서 밥을 먹을 때 함께 쓰는 것에 ○ 하세요.', options: ['숟가락과 젓가락', '포크만', '빨대'], answer: '숟가락과 젓가락' },
        { type: 'blank', prompt: '견주는 말을 완성하세요.', text: '우리나라는 ___로, 이탈리아는 ___로 먹어요.', answer: '숟가락과 젓가락, 포크' },
        { type: 'draw', prompt: '먹어 보고 싶은 다른 나라 음식을 그려 보세요.' },
      ],
      easy: {
        note: '나라마다 먹는 방법이 달라요.',
        items: [
          { type: 'choice', prompt: '스파게티를 먹는 도구에 ○ 하세요.', options: ['포크', '숟가락만'], answer: '포크' },
          { type: 'choice', prompt: '우리 밥상에 자주 오르는 것에 ○ 하세요.', options: ['김치', '초밥'], answer: '김치' },
          { type: 'draw', prompt: '우리 집 밥상을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 놓으면 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '음식과 도구를 잇고 견주는 말을 해요.',
      challenge: '네 나라 음식을 잇고, 존중하는 말과 그렇지 않은 말을 가려요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 손으로 먹는 것을 버릇없다고 여긴다 → 나라마다 예절이 다르다는 것을 짚는다. ② 한 나라의 모든 사람이 똑같이 먹는다고 여긴다 → "많은 사람이", "~하기도 해요"처럼 말하게 한다. ③ 음식 알레르기가 있는 학생이 있으면 실물 음식은 쓰지 않고 그림 카드만 쓴다.',
  }));

  lessons.push(L(12, {
    title: '모둠 우리나라 소개 책 만들어 발표하기',
    objective: '1~11차시에 알게 된 것을 상징·음식·놀이 쪽으로 나누어 모둠 소개 책을 만들고, 내가 맡은 쪽을 내 말로 발표할 수 있다.',
    illustration: ART('a small handmade paper book about Korea opened on a desk, with pages showing a Korean flag, rice cakes and a yut game, four children holding colored pencils', '우리나라 소개 책', [
      { motif: 'flower', x: 110, y: 226, color: 'rose' }, { motif: 'star', x: 380, y: 86, s: 0.6 }, { motif: 'tree', x: 400, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"우리나라에 처음 온 친구에게 우리나라를 알려 주려면 무엇을 보여 주면 좋을까요?" 그동안 모은 활동지와 물음 나무를 보여 준다. 시연 단추로 소개 카드가 책의 쪽마다 나뉘는 모습을 보여 준다. "오늘은 모둠마다 4쪽짜리 소개 책을 만들어요. 한 사람이 한 쪽씩 맡아요."',
        student: '우리나라에 처음 온 친구에게 가장 먼저 보여 주고 싶은 것을 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '소개 책', slots: ['상징 쪽', '음식 쪽'], cards: ['태극기', '송편'], shuffle: false }, sequence: [{ sort: { '상징 쪽': ['태극기'], '음식 쪽': ['송편'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 소개할 것을 쪽마다 나누기', minutes: 8, tool: 'mindmap',
            teacher: '"태극기와 무궁화는 우리나라를 나타내는 것이라 상징이라고 해요. 상징 쪽에는 무엇을 넣을까요?" 카드를 쪽마다 나누며 책의 차례를 정한다. 한 쪽에 너무 많이 넣는 학생에게 "한 쪽에 두 가지만 크게 넣어 볼까요?"라고 말한다.',
            task: '소개할 것을 상징·음식·놀이 쪽으로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '소개할 것을 책의 쪽마다 나누어 보세요.', toolOptions: { topic: '소개 책', slots: ['상징 쪽', '음식 쪽', '놀이 쪽'], cards: ['태극기', '무궁화', '비빔밥', '송편', '윷놀이', '투호'] },
                target: { sort: { '상징 쪽': ['태극기', '무궁화'], '음식 쪽': ['비빔밥', '송편'], '놀이 쪽': ['윷놀이', '투호'] } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['태극기', '무궁화', '비빔밥', '송편', '윷놀이', '투호', { id: '기모노', text: '기모노', why: '기모노는 일본 옷이라 우리나라 소개 책에 넣지 않아요.' }] } } } },
              { prompt: '모둠이 정한 차례는 "표지 → 나라를 나타내는 것 → 먹는 것 → 노는 것"이에요. 쪽 카드를 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: 'cover', text: '표지: 우리나라', motif: 'star' }, { id: 'sym', text: '상징 쪽', motif: 'flower' }, { id: 'food', text: '음식 쪽', motif: 'leaf' }, { id: 'play', text: '놀이 쪽', motif: 'sun' }], slots: ['1쪽', '2쪽', '3쪽', '4쪽'] },
                target: { order: ['cover', 'sym', 'food', 'play'] }, difficulty: 0.2 },
              { prompt: '소개 책에 쓰기 알맞은 문장만 골라 보세요.', toolOptions: { mode: 'pick', basket: '소개 책 문장', cards: ['무궁화는 우리나라를 나타내는 꽃이에요', '추석에는 반달 모양 송편을 먹어요', { id: '모름', text: '잘 모르겠어요', why: '알게 된 것을 써야 읽는 친구가 알 수 있어요.' }, { id: '틀림', text: '태극기 바탕은 노란색이에요', why: '태극기 바탕은 흰색이에요. 틀린 것은 쓰지 않아요.' }] },
                target: { pick: ['무궁화는 우리나라를 나타내는 꽃이에요', '추석에는 반달 모양 송편을 먹어요'] }, difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 소개 책 만들고 발표하기', minutes: 19, tool: 'story',
            teacher: '8절 도화지를 두 번 접어 4쪽 책을 만들고, 한 사람이 한 쪽씩 그림과 한 문장을 쓴다(12분). 그다음 모둠마다 앞에 나와 한 사람이 한 쪽씩 발표한다(모둠당 1분, 6모둠이면 6분 남짓). "발표할 때는 책을 친구 쪽으로 돌려 보여 주고, 내 말로 말해요." 발표가 끝나면 듣는 친구는 "다른 나라 것과 견준 말이 있었나요?"를 생각해 본다.',
            task: '모둠 소개 책을 만들고, 내가 맡은 쪽을 발표해요.',
            levels: CARD_LV,
            items: [
              { prompt: '소개 책을 만드는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: 'fold', text: '종이를 접어 책을 만들어요', motif: 'leaf' }, { id: 'draw', text: '맡은 쪽에 그리고 써요', motif: 'flower' }, { id: 'say', text: '책을 보여 주며 발표해요', motif: 'star' }], slots: ['1', '2', '3'] },
                target: { order: ['fold', 'draw', 'say'] }, difficulty: 0.1 },
              { prompt: '모둠 소개 책에서 내가 맡은 쪽을 다 꾸몄으면 "다 했어요"를 누르세요.', free: true, talk: true },
              { prompt: '모둠과 함께 소개 책을 발표했으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"다른 모둠 책에서 새로 알게 된 것이 있나요?" 소개 책은 교실 뒤 책꽂이에 꽂아 다른 반 친구도 읽을 수 있게 한다. 다음 시간부터는 우리나라를 넘어 알고 싶은 다른 나라를 탐험한다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '소개 책', slots: ['상징 쪽', '놀이 쪽'], cards: ['애국가', '제기차기'] }, prompt: '두 카드를 소개 책의 알맞은 쪽에 나누어 보세요.', target: { sort: { '상징 쪽': ['애국가'], '놀이 쪽': ['제기차기'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '소개 책 발표에서 알맞은 모습은 무엇일까요?', options: ['책을 내 쪽으로만 들고 읽어요', '책을 친구 쪽으로 보여 주며 말해요', '책을 덮고 아무 말이나 해요'], answer: 1, difficulty: 0.1, explain: '친구가 그림을 보며 들을 수 있게 책을 보여 주어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '우리나라 소개 책 계획',
      items: [
        { type: 'table', prompt: '모둠 소개 책에서 쪽마다 넣을 것을 쓰세요.', columns: ['쪽', '넣을 것', '맡은 사람'], cells: [['표지', '', ''], ['상징', '', ''], ['음식', '', ''], ['놀이', '', '']] },
        { type: 'choice', prompt: '상징 쪽에 넣을 것에 ○ 하세요.', options: ['무궁화', '송편', '투호'], answer: '무궁화' },
        { type: 'short', prompt: '내가 맡은 쪽에 쓸 문장을 쓰세요.' },
        { type: 'draw', prompt: '내가 맡은 쪽의 그림을 미리 그려 보세요.' },
      ],
      easy: {
        note: '한 쪽에 그림 하나, 문장 하나!',
        items: [
          { type: 'choice', prompt: '음식 쪽에 넣을 것에 ○ 하세요.', options: ['비빔밥', '태극기'], answer: '비빔밥' },
          { type: 'short', prompt: '내가 맡은 쪽에 넣을 것을 낱말로 쓰세요.' },
          { type: 'draw', prompt: '내가 맡은 쪽의 그림을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 쪽에 놓으면 초록 테두리가 생겨요. 맡은 쪽에는 그림과 낱말을 써요.',
      base: '쪽마다 그림과 한 문장을 써요.',
      challenge: '다른 나라 함정 카드를 골라내고, 맡은 쪽에 다른 나라와 견주는 말도 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 한 쪽에 너무 많이 넣는다 → 두 가지만 크게 넣게 한다. ② 틀린 내용을 쓴다 → 앞 차시 활동지를 다시 보고 쓰게 한다. ③ 발표 시간이 길어진다 → 모둠당 1분, 한 사람이 한 문장만 말하게 한다. 책 접기는 교사가 미리 시범을 보이고 접는 선을 연필로 그어 둔다.',
  }));

  // ───────────────────────── 13~16차시: 알고 싶은 나라 고르고 물음·방법 정하기 ─────────────────────────

  lessons.push(L(13, {
    title: '세계 칸 지도에서 알고 싶은 나라 고르기',
    objective: '세계 칸 지도에서 단서를 읽고 우리나라 둘레의 나라를 찾으며, 알고 싶은 나라를 스스로 골라 궁금한 것 세 가지를 적을 수 있다.',
    illustration: ART('a paper world map with simple country patches, Korea marked with a star, a child pointing at a neighboring country with a magnifying glass and three question bubbles', '어느 나라가 궁금한가요?', [
      { motif: 'cloud', x: 300, y: 70 }, { motif: 'wave', x: 120, y: 236 }, { motif: 'bird', x: 220, y: 92 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"지구본에서 우리나라를 찾아볼까요? 우리나라 말고도 나라가 아주 많아요." 지구본을 돌려 보인 뒤 세계 칸 지도를 띄운다. 시연 단추로 핀이 우리나라에 꽂히는 모습을 보여 준다. "이번에는 우리나라 밖으로 탐험을 떠나요. 어느 나라를 탐험할지는 여러분이 스스로 골라요." 칸 지도는 나라의 크기와 모양이 아니라 자리만 어림해 그린 것이라고 말해 준다.',
        student: '가 보고 싶거나 이름을 들어 본 나라를 하나 말해 봐요.',
        demo: { tool: 'map', options: WORLD(['우리나라', '중국', '일본']), sequence: [{ place: '우리나라' }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 단서로 우리나라 둘레 나라 찾기', minutes: 12, tool: 'map',
            teacher: '"우리나라 오른쪽 바다 건너에 있는 섬나라는 어디일까요? 섬 표시를 찾아봐요." 단서를 소리 내어 함께 읽고 손가락으로 우리나라에서 출발해 따라가게 한다. 이름만 보고 아무 데나 꽂는 학생에게 "단서에서 어느 쪽이라고 했지요?"를 되묻는다.',
            task: '단서를 읽고 우리나라에서 출발해 그 나라를 찾아 핀을 꽂아요.',
            levels: {
              easy: { readout: true },
              base: {},
              challenge: {},
            },
            items: [
              { prompt: '우리나라 오른쪽 바다 건너에 있는 섬나라에 핀을 꽂아 보세요.', toolOptions: WORLD(['우리나라', '중국', '일본', '몽골']), target: { place: '일본' }, difficulty: 0.1,
                hints: ['우리나라 별 표시에서 출발해요. 오른쪽을 보세요.', '오른쪽 바다 건너 섬 표시가 있는 나라를 찾아보세요.', '우리나라 바로 오른쪽 섬나라, 일본에 꽂아요.'] },
              { prompt: '서해 건너 우리나라 바로 왼쪽에 있는 아주 큰 나라에 핀을 꽂아 보세요.', toolOptions: WORLD(['우리나라', '중국', '일본', '몽골', '베트남']), target: { place: '중국' }, difficulty: 0.15,
                hints: ['우리나라에서 왼쪽으로 가요.', '우리나라 바로 왼쪽 칸에 있는 나라를 보세요.', '우리나라 바로 왼쪽, 중국에 꽂아요.'] },
              { prompt: '중국 위쪽, 넓은 풀밭이 펼쳐진 나라에 핀을 꽂아 보세요.', toolOptions: WORLD(['우리나라', '중국', '일본', '몽골', '베트남']), target: { place: '몽골' }, difficulty: 0.2,
                levels: { challenge: { prompt: '나라 이름이 보이지 않아요. 별 표시가 우리나라예요. 우리나라 바로 왼쪽 나라의 위쪽, 넓은 풀밭이 있는 나라에 핀을 꽂아 보세요.', toolOptions: { names: false } } },
                hints: ['먼저 중국을 찾고, 그 위쪽을 보세요.', '중국 바로 위 칸에 있는 나라예요.', '중국 바로 위, 몽골에 꽂아요.'],
                conclude: '몽골에는 넓은 풀밭(초원)이 있어 말을 많이 길러요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 알고 싶은 나라와 궁금한 것 세 가지', minutes: 14, tool: 'emotion',
            teacher: '"어느 나라를 탐험할지 누가 정할까요?" 민지 이야기에서 어떻게 하면 좋을지 고르게 한다. 그다음 서아가 베트남에 대해 궁금한 것 세 가지를 고른 예를 보고, 학생도 탐험 카드에 나라 이름과 궁금한 것 세 가지를 적는다. 세 가지가 모두 같은 것(옷, 옷, 옷)이면 "먹는 것이나 노는 것도 궁금하지 않나요?"라고 넓혀 준다.',
            task: '알고 싶은 나라를 스스로 고르고, 그 나라에 대해 궁금한 것 세 가지를 골라 적어요.',
            levels: CARD_LV,
            items: [
              { prompt: '민지가 탐험할 나라를 정하려 해요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '민지', situation: '민지는 탐험할 나라를 아직 못 정했어요.', choices: [
                { id: 'wait', text: '선생님이 정해 줄 때까지 기다려요', result: '민지가 궁금한 것이 없는 나라를 받았어요.', mood: '걱정', why: '내가 궁금한 나라를 스스로 고를 수 있어요.' },
                { id: 'self', text: '지도를 보며 궁금한 나라를 스스로 골라요', result: '민지가 신나서 궁금한 것을 적었어요.', mood: '신남' }] }, target: { choice: 'self' }, difficulty: 0.1 },
              { prompt: '서아는 베트남을 골랐어요. 베트남에 대해 궁금한 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '베트남이 궁금해요', cards: ['베트남 사람들은 무엇을 먹을까?', '베트남의 전통 옷은 무엇일까?', '베트남에서는 어떻게 인사할까?', { id: '설날', text: '우리나라 설날에는 무엇을 할까?', why: '우리나라에 대한 물음이에요. 서아가 고른 나라를 물어요.' }, { id: '베트남', text: '베트남은 나라예요', why: '물음이 아니라 알려 주는 말이에요.' }] },
                target: { pick: ['베트남 사람들은 무엇을 먹을까?', '베트남의 전통 옷은 무엇일까?', '베트남에서는 어떻게 인사할까?'] }, difficulty: 0.2 },
              { prompt: '내 탐험 카드에 나라 이름과 궁금한 것 세 가지를 적었으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"내가 고른 나라와 가장 궁금한 것 하나를 말해 볼까요?" 고른 나라마다 세계 칸 지도 그림에 이름 붙임 딱지를 붙인다. 같은 나라를 고른 친구끼리 다음 시간에 함께 물음을 다듬는다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'map', options: WORLD(['우리나라', '중국', '베트남', '인도']), prompt: '중국 아래쪽에 있는 나라에 핀을 꽂아 보세요.', target: { place: '베트남' }, difficulty: 0.15 },
          { type: 'choice', prompt: '탐험할 나라는 누가 정할 수 있을까요?', options: ['선생님만', '내가 스스로', '아무도 못 정해요'], answer: 1, difficulty: 0.1, explain: '내가 궁금한 나라를 스스로 고를 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '나의 나라 탐험 카드',
      items: [
        { type: 'figure', wide: true, prompt: '우리나라에 ○, 내가 알고 싶은 나라에 ☆ 하세요.', tool: 'map', figures: [{ options: WORLD(['우리나라', '중국', '일본', '몽골', '베트남', '인도']), caption: '' }], answer: '우리나라 ○, 고른 나라 ☆' },
        { type: 'short', prompt: '내가 알고 싶은 나라 이름을 쓰세요.' },
        { type: 'table', prompt: '그 나라에 대해 궁금한 것 세 가지를 쓰세요.', columns: ['번호', '궁금한 것'], cells: [['1', ''], ['2', ''], ['3', '']] },
        { type: 'choice', prompt: '우리나라 오른쪽 바다 건너 섬나라에 ○ 하세요.', options: ['일본', '중국', '몽골'], answer: '일본' },
      ],
      easy: {
        note: '먹는 것, 입는 것, 인사가 궁금하지 않나요?',
        items: [
          { type: 'short', prompt: '내가 알고 싶은 나라 이름을 쓰세요.' },
          { type: 'short', prompt: '그 나라에 대해 가장 궁금한 것 하나를 쓰세요.' },
          { type: 'draw', prompt: '그 나라를 생각하면 떠오르는 것을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '핀을 꽂으면 그 칸의 나라 이름이 보여요. 궁금한 것은 하나부터 적어요.',
      base: '단서를 읽고 핀을 꽂아요. 궁금한 것 세 가지를 적어요.',
      challenge: '몽골 찾기는 나라 이름 없이 자리만으로 찾아요. 궁금한 것을 서로 다른 종류로 세 가지 적어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 나라는 어른이 정해 주어야 한다고 여긴다 → 스스로 고르면 궁금한 것이 더 많아진다는 것을 이야기로 보여 준다. ② 칸 지도의 크기를 실제 나라 크기로 여긴다 → 지구본에서 중국과 우리나라 크기를 견주어 보여 준다. ③ 궁금한 것이 하나만 떠오른다 → "먹는 것, 입는 것, 인사, 노는 것" 네 갈래를 칠판에 적어 둔다. 다문화 학생의 부모 나라를 묻거나 대신 고르게 하지 않는다.',
  }));

  lessons.push(L(14, {
    title: '몽골 사진을 보고 궁금한 것 세 가지 묻기',
    objective: '몽골 사진 자료에서 본 것과 궁금한 것을 나누고, 묻는 낱말을 넣어 몽골에 대한 물음 세 가지를 만들 수 있다.',
    illustration: ART('a wide green grassland of Mongolia with round white felt tents called gers, horses grazing and a child on horseback under a big blue sky', '몽골이 궁금해요', [
      { motif: 'cloud', x: 300, y: 66 }, { motif: 'mountain', x: 380, y: 200 }, { motif: 'bird', x: 200, y: 92 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"이 사진은 몽골이에요. 하얗고 둥근 집이 보이나요?" 몽골 초원과 게르(둥근 천막 집) 사진을 1분 동안 조용히 보게 한다. 시연 단추로 "보았어요"와 "궁금해요" 카드가 나뉘는 모습을 보여 준다. "본 것은 사진에 있는 것이고, 궁금한 것은 사진에 없어서 더 알고 싶은 거예요."',
        student: '몽골 사진에서 본 것 하나를 손가락으로 짚어 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '몽골 사진', slots: ['보았어요', '궁금해요'], cards: ['둥근 하얀 집이 있어요', '집 안은 어떻게 생겼을까?'], shuffle: false }, sequence: [{ sort: { '보았어요': ['둥근 하얀 집이 있어요'], '궁금해요': ['집 안은 어떻게 생겼을까?'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 본 것과 궁금한 것 나누기', minutes: 12, tool: 'mindmap',
            teacher: '"말이 많이 있어요"는 본 것이고, "말을 왜 많이 기를까?"는 궁금한 것이에요. 사진을 다시 보며 카드마다 사진에 있는지 손가락으로 찾아보게 한다. 사진에 없는 것을 "보았어요"에 넣는 학생에게 "사진 어디에 있나요? 짚어 볼까요?"라고 묻는다.',
            task: '몽골 사진을 보고 본 것과 궁금한 것으로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '몽골 사진 카드를 본 것과 궁금한 것으로 나누어 보세요.', toolOptions: { topic: '몽골 사진', slots: ['보았어요', '궁금해요'], cards: ['넓은 풀밭이 있어요', '말이 많이 있어요', '말을 왜 많이 기를까?', '겨울에는 얼마나 추울까?'] },
                target: { sort: { '보았어요': ['넓은 풀밭이 있어요', '말이 많이 있어요'], '궁금해요': ['말을 왜 많이 기를까?', '겨울에는 얼마나 추울까?'] } }, difficulty: 0.15 },
              { prompt: '사진에서 정말 볼 수 있는 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '사진에서 보았어요', cards: ['둥근 하얀 천막 집', '말을 탄 아이', '파란 하늘', { id: '바다', text: '넓은 바다', why: '이 사진에는 바다가 없어요. 몽골은 바다와 닿아 있지 않아요.' }, { id: '맛', text: '음식의 맛', why: '맛은 사진으로 볼 수 없어요. 궁금한 것으로 남겨요.' }] },
                target: { pick: ['둥근 하얀 천막 집', '말을 탄 아이', '파란 하늘'] }, difficulty: 0.2 },
              { prompt: '본 것과 그것을 보고 생긴 물음을 이어 보세요.', toolOptions: { mode: 'match', topic: '보고 생긴 물음', slots: [{ id: 's1', label: '둥근 천막 집이 있어요' }, { id: 's2', label: '말을 탄 아이가 있어요' }], cards: ['천막 집은 어떻게 옮길까?', '아이는 몇 살에 말을 탈까?'] },
                target: { match: { s1: '천막 집은 어떻게 옮길까?', s2: '아이는 몇 살에 말을 탈까?' } }, difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 묻는 낱말로 물음 세 가지 만들기', minutes: 14, tool: 'story',
            teacher: '"무엇, 왜, 어떻게를 하나씩 써서 물음 세 가지를 만들어 봐요." 칠판의 묻는 낱말 카드를 하나씩 짚으며 같은 낱말만 세 번 쓰지 않게 한다. 다 만든 학생은 짝과 물음을 바꿔 읽고, 짝이 "나도 궁금해"라고 하면 별 하나를 그린다.',
            task: '묻는 낱말을 넣어 몽골에 대한 물음 세 가지를 만들어요.',
            levels: CARD_LV,
            items: [
              { prompt: '세 물음의 빈칸에 알맞은 묻는 낱말을 넣어 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'b1', who: '준호', label: '몽골 사람들은 ___을 먹을까?' }, { id: 'b2', who: '준호', label: '몽골에는 ___ 말이 많을까?' }, { id: 'b3', who: '준호', label: '천막 집은 ___ 지을까?' }], cards: ['무엇', '왜', '어떻게'] },
                target: { fill: { b1: '무엇', b2: '왜', b3: '어떻게' } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['무엇', '왜', '어떻게', '맛있게'] } } } },
              { prompt: '서로 다른 것을 묻는 물음 세 개를 골라 보세요.', toolOptions: { mode: 'pick', basket: '서로 다른 물음 세 개', cards: ['몽골 사람들은 무엇을 먹을까?', '몽골 아이들은 어떤 놀이를 할까?', '몽골에서는 어떻게 인사할까?', { id: '또', text: '몽골 사람들은 무엇을 먹을까요?', why: '첫 물음과 같은 것을 또 물었어요.' }] },
                target: { pick: ['몽골 사람들은 무엇을 먹을까?', '몽골 아이들은 어떤 놀이를 할까?', '몽골에서는 어떻게 인사할까?'] }, difficulty: 0.2 },
              { prompt: '몽골 물음 세 가지를 쓰고 짝과 바꿔 읽었으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"짝이 \'나도 궁금해\'라고 한 물음은 무엇이었나요?" 별을 많이 받은 물음 몇 개를 물음 나무의 \'다른 나라\' 가지에 붙인다. 다음 시간에는 이 물음들을 무엇으로 알아볼지 방법을 정한다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '몽골 사진', slots: ['보았어요', '궁금해요'], cards: ['풀을 먹는 양 떼가 있어요', '양털로 무엇을 만들까?'] }, prompt: '두 카드를 본 것과 궁금한 것으로 나누어 보세요.', target: { sort: { '보았어요': ['풀을 먹는 양 떼가 있어요'], '궁금해요': ['양털로 무엇을 만들까?'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '"몽골 아이들은 ___ 학교에 갈까?" 빈칸에 알맞은 묻는 낱말은?', options: ['어떻게', '맛있게', '파랗게'], answer: 0, difficulty: 0.15, explain: '"어떻게"를 넣으면 가는 방법을 묻는 물음이 돼요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '몽골이 궁금해요',
      items: [
        { type: 'table', prompt: '몽골 사진에서 본 것과 궁금한 것을 쓰세요.', columns: ['보았어요', '궁금해요'], rows: 2 },
        { type: 'blank', prompt: '묻는 낱말을 넣어 물음을 완성하세요.', text: '몽골 사람들은 ___ 말을 탈까?', answer: '왜 / 어떻게 / 언제' },
        { type: 'choice', prompt: '사진에서 볼 수 없는 것에 ○ 하세요.', options: ['음식의 맛', '둥근 천막 집', '말'], answer: '음식의 맛' },
        { type: 'short', prompt: '몽골에 대해 가장 궁금한 것을 물음으로 쓰세요.' },
      ],
      easy: {
        note: '무엇? 왜? 어떻게?',
        items: [
          { type: 'choice', prompt: '사진에서 본 것에 ○ 하세요.', options: ['둥근 천막 집', '넓은 바다'], answer: '둥근 천막 집' },
          { type: 'choice', prompt: '궁금한 것에 ○ 하세요.', options: ['말이 있어요', '말은 무엇을 먹을까?'], answer: '말은 무엇을 먹을까?' },
          { type: 'draw', prompt: '몽골 사진에서 본 것을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 놓으면 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '본 것과 궁금한 것을 나누고, 묻는 낱말 세 개로 물음을 만들어요.',
      challenge: '묻는 낱말이 아닌 함정 카드를 골라내고, 서로 다른 것을 묻는 물음을 세 개 만들어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 사진에 없는 것을 보았다고 말한다 → 손가락으로 사진에서 짚게 한다. ② 같은 물음을 말만 바꿔 세 번 쓴다 → 먹는 것·노는 것·인사처럼 다른 갈래로 묻게 한다. ③ 몽골 사람들이 모두 천막 집에 산다고 여긴다 → 도시에는 아파트에 사는 사람도 많다는 것을 알려 준다.',
  }));

  lessons.push(L(15, {
    title: '궁금한 것마다 알아볼 방법 스스로 정하기',
    objective: '다른 나라에 대해 궁금한 것마다 지도·그림책·사진·어른께 여쭙기 가운데 알맞은 방법을 스스로 정하고 까닭을 말할 수 있다.',
    illustration: ART('a child at a desk with a globe, a picture book about another country, a photo album and a speech bubble talking to a grandparent, choosing which tool to use', '어떻게 알아볼까요?', [
      { motif: 'star', x: 120, y: 84, s: 0.6 }, { motif: 'tree', x: 380, y: 214 }, { motif: 'house', x: 300, y: 216, color: 'mint' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"\'일본은 우리나라에서 어느 쪽에 있을까?\'와 \'일본 노래는 어떤 소리일까?\'는 같은 방법으로 알아볼 수 있을까요?" 지구본과 노래 듣기 단추 그림을 나란히 보여 준다. 시연 단추로 물음과 방법이 이어지는 모습을 보여 준다. "알아볼 방법도 여러분이 스스로 정해요. 물음에 맞는 방법을 고르는 것이 탐험가의 솜씨예요."',
        student: '내 탐험 카드의 물음 하나를 읽고, 무엇으로 알아볼지 짝에게 말해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '어떻게 알아볼까?', slots: [{ id: 's1', label: '일본은 어느 쪽에 있을까?' }], cards: ['세계 지도를 봐요', '노래를 들어요'], shuffle: false }, sequence: [{ match: { s1: '세계 지도를 봐요' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 물음에 맞는 방법 짝 짓기', minutes: 13, tool: 'mindmap',
            teacher: '"어디에 있는지 묻는 물음은 무엇으로 알아볼까요? 어떤 소리인지 묻는 물음은요?" 물음 끝 낱말(어디, 어떤 소리, 어떻게 생겼을까)을 단서로 방법을 고르게 한다. 고른 까닭을 "왜냐하면 ~"으로 말하게 한다. 모든 물음을 같은 방법으로 고르는 학생에게 "그 방법으로 소리를 들을 수 있나요?"처럼 되묻는다.',
            task: '물음을 읽고 가장 알맞은 알아볼 방법을 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '물음과 가장 알맞은 방법을 이어 보세요.', toolOptions: { mode: 'match', topic: '어떻게 알아볼까?', slots: [{ id: 's1', label: '몽골은 어디에 있을까?' }, { id: 's2', label: '몽골 노래는 어떤 소리일까?' }, { id: 's3', label: '몽골 천막 집은 어떻게 생겼을까?' }], cards: ['세계 지도를 봐요', '노래를 들어 봐요', '사진을 봐요'] },
                target: { match: { s1: '세계 지도를 봐요', s2: '노래를 들어 봐요', s3: '사진을 봐요' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['세계 지도를 봐요', '노래를 들어 봐요', '사진을 봐요', { id: '냄새', text: '냄새를 맡아요', why: '냄새로는 자리나 소리, 모양을 알 수 없어요.' }] } } } },
              { prompt: '물음과 가장 알맞은 방법을 이어 보세요.', toolOptions: { mode: 'match', topic: '어떻게 알아볼까?', slots: [{ id: 's1', label: '베트남 국수는 무슨 맛일까?' }, { id: 's2', label: '중국에 다녀온 이모는 무엇을 보았을까?' }], cards: ['직접 먹어 봐요', '이모께 여쭈어 봐요'] },
                target: { match: { s1: '직접 먹어 봐요', s2: '이모께 여쭈어 봐요' } }, difficulty: 0.15 },
              { prompt: '방법을 정할 때 알맞은 생각만 골라 보세요.', toolOptions: { mode: 'pick', basket: '알맞은 생각', cards: ['물음에 맞는 방법을 골라요', '방법을 두 가지 써도 돼요', { id: '어른', text: '어른이 정해 줄 때까지 기다려요', why: '방법은 내가 먼저 골라 보고, 모르면 여쭈어요.' }, { id: '아무', text: '아무 방법이나 다 똑같아요', why: '물음에 따라 알맞은 방법이 달라요.' }] },
                target: { pick: ['물음에 맞는 방법을 골라요', '방법을 두 가지 써도 돼요'] }, difficulty: 0.2,
                predict: { q: '알아볼 방법은 누가 정할까요?', options: ['어른만', '나도 정할 수 있어요'], answer: 1 },
                conclude: '알아볼 방법은 내가 스스로 정할 수 있어요. 모르면 그때 어른께 여쭈어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 내 물음에 방법 정하기', minutes: 13, tool: 'emotion',
            teacher: '"하준이처럼 방법을 못 정해 막막할 때는 어떻게 할까요?" 이야기 속 선택을 함께 고른다. 그다음 학생들이 지난 시간에 쓴 탐험 카드의 물음 세 가지 옆에 방법을 하나씩 적는다. 책·지도·사진 그림 붙임 딱지를 나누어 주어 글자 대신 붙여도 되게 한다.',
            task: '방법을 정할 때 어떻게 할지 고르고, 내 탐험 카드의 물음마다 방법을 적어요.',
            levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
            items: [
              { prompt: '하준이가 방법을 못 정했어요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '하준', situation: '하준이는 "인도 아이들은 무슨 놀이를 할까?"를 알아볼 방법을 못 정했어요.', choices: [
                { id: 'giveup', text: '알아보기를 그만둬요', result: '하준이의 물음은 답을 못 찾았어요.', mood: '속상함', why: '그만두면 궁금한 것을 알 수 없어요.' },
                { id: 'try', text: '먼저 그림책을 찾아보고, 없으면 선생님께 여쭈어요', result: '그림책에서 인도 아이들의 놀이를 찾았어요.', mood: '뿌듯함' },
                { id: 'guess', text: '친구 생각을 그대로 적어요', result: '맞는지 알 수 없는 답이 적혔어요.', mood: '걱정', why: '친구의 짐작은 자료가 아니에요.' }] }, target: { choice: 'try' }, difficulty: 0.15 },
              { prompt: '방법을 스스로 정했을 때 하준이의 뿌듯한 마음 크기를 골라 보세요.', toolOptions: { mode: 'scale', who: '하준', situation: '하준이는 혼자 그림책을 찾아 인도 아이들의 놀이를 알아냈어요.', feeling: '뿌듯함', after: '나도 내 물음의 방법을 스스로 정해 봐요.' }, target: { level: [3, 5] }, difficulty: 0.1,
                levels: { easy: { prompt: '방법을 스스로 정한 하준이의 뿌듯한 마음을 세 칸에서 골라 보세요.', toolOptions: { steps: 3 }, target: { level: [2, 3] } } } },
              { prompt: '내 탐험 카드의 물음 세 가지 옆에 방법을 하나씩 적었으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"내 물음 하나와 고른 방법, 그리고 그 까닭을 말해 볼까요?" 세 명쯤 듣는다. 방법별로 교실에 자료 코너(지도·지구본, 그림책, 사진)를 만들어 다음 시간부터 쓴다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '어떻게 알아볼까?', slots: [{ id: 'e1', label: '프랑스는 어디에 있을까?' }, { id: 'e2', label: '인도 옷은 어떻게 생겼을까?' }], cards: ['세계 지도를 봐요', '사진을 봐요'] }, prompt: '물음과 알맞은 방법을 이어 보세요.', target: { match: { e1: '세계 지도를 봐요', e2: '사진을 봐요' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '"일본 노래는 어떤 소리일까?"를 알아볼 방법은?', options: ['노래를 들어 봐요', '지도를 봐요', '냄새를 맡아요'], answer: 0, difficulty: 0.1, explain: '소리를 묻는 물음은 들어 보면 알 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '물음마다 방법 정하기',
      items: [
        { type: 'table', prompt: '내 물음 세 가지와 알아볼 방법을 쓰세요.', columns: ['궁금한 것', '알아볼 방법'], cells: [['', ''], ['', ''], ['', '']] },
        { type: 'choice', prompt: '"몽골은 어디에 있을까?"를 알아볼 방법에 ○ 하세요.', options: ['세계 지도', '노래', '음식'], answer: '세계 지도' },
        { type: 'check', prompt: '알아볼 방법이 될 수 있는 것에 모두 ✓ 하세요.', options: ['그림책 읽기', '사진 보기', '어른께 여쭈기', '친구 짐작 그대로 쓰기'] },
        { type: 'short', prompt: '내가 고른 방법과 그 까닭을 쓰세요.' },
      ],
      easy: {
        note: '어디? → 지도, 어떤 소리? → 듣기, 어떻게 생겼을까? → 사진!',
        items: [
          { type: 'choice', prompt: '모양을 알아볼 때 쓰는 것에 ○ 하세요.', options: ['사진', '노래'], answer: '사진' },
          { type: 'short', prompt: '내 물음 하나를 쓰고 옆에 방법을 쓰세요.' },
          { type: 'draw', prompt: '내가 고른 방법(책, 지도, 사진…)을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 놓으면 초록 테두리가 생겨요. 마음 크기는 세 칸이에요. 방법은 그림 붙임 딱지로 붙여도 돼요.',
      base: '방법을 잇고 까닭을 말해요. 물음마다 방법을 적어요.',
      challenge: '방법이 될 수 없는 함정 카드를 골라내고, 물음 하나에 방법 두 가지를 적어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 방법은 어른이 정해 주어야 한다고 여긴다 → 내가 먼저 고르고 막히면 여쭙는 차례를 이야기로 보여 준다. ② 친구의 짐작을 자료로 여긴다 → "그 친구는 어떻게 알았을까?"를 묻는다. ③ 모든 물음에 같은 방법을 쓴다 → 물음 끝 낱말(어디·소리·모양·맛)을 단서로 짚는다.',
  }));

  lessons.push(L(16, {
    title: '나라 탐험 계획을 차례대로 세우기',
    objective: '나라 탐험의 차례(나라 고르기 → 궁금한 것 → 방법 → 자료 찾기 → 발표)를 알고, 모둠 탐험 계획표에 내가 할 일과 차례를 적을 수 있다.',
    illustration: ART('a paper explorer backpack with a map, a notebook and a pencil, and a path of five stepping stones labeled with small pictures leading to a flag on a hill', '탐험 계획 세우기', [
      { motif: 'mountain', x: 380, y: 210 }, { motif: 'flower', x: 110, y: 226, color: 'buttercup' }, { motif: 'cloud', x: 260, y: 70 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"탐험가가 아무 준비 없이 떠나면 어떻게 될까요?" 가방에 지도, 공책, 연필을 차례로 넣는 시늉을 보인다. 시연 단추로 탐험 차례 카드가 징검다리처럼 놓이는 모습을 보여 준다. "오늘은 모둠 탐험 계획표를 만들어요. 무엇을 먼저 하고 무엇을 나중에 할지 정해요."',
        student: '지금까지 탐험 카드에 무엇을 적었는지 짝에게 말해 봐요.',
        demo: { tool: 'story', options: { cards: [{ id: 'pick', text: '나라 고르기', motif: 'star' }, { id: 'ask', text: '궁금한 것 적기', motif: 'leaf' }], slots: ['1', '2'], shuffle: false }, sequence: [{ order: ['pick', 'ask'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 탐험 차례 정하기', minutes: 12, tool: 'story',
            teacher: '"자료를 찾기 전에 무엇을 먼저 정해야 할까요?" 방법을 정하지 않고 자료부터 찾으면 무엇을 찾을지 모른다는 것을 짚는다. 차례 카드를 다 놓은 학생에게 "지금 우리는 몇 번째에 와 있나요?"라고 묻는다(13~15차시에 1~3번을 했다).',
            task: '나라 탐험의 차례대로 카드를 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '나라 탐험의 차례대로 카드를 놓아 보세요.', toolOptions: { cards: [{ id: 'pick', text: '나라 고르기', motif: 'star' }, { id: 'ask', text: '궁금한 것 적기', motif: 'leaf' }, { id: 'how', text: '방법 정하기', motif: 'tree' }, { id: 'find', text: '자료 찾기', motif: 'flower' }], slots: ['1', '2', '3', '4'] },
                target: { order: ['pick', 'ask', 'how', 'find'] }, difficulty: 0.15,
                levels: { challenge: { prompt: '나라 탐험의 다섯 차례를 놓아 보세요.', toolOptions: { cards: [{ id: 'pick', text: '나라 고르기', motif: 'star' }, { id: 'ask', text: '궁금한 것 적기', motif: 'leaf' }, { id: 'how', text: '방법 정하기', motif: 'tree' }, { id: 'find', text: '자료 찾기', motif: 'flower' }, { id: 'say', text: '친구에게 발표하기', motif: 'sun' }], slots: ['1', '2', '3', '4', '5'] }, target: { order: ['pick', 'ask', 'how', 'find', 'say'] } } } },
              { prompt: '준호의 탐험 이야기를 차례대로 놓아 보세요.', toolOptions: { cards: [{ id: 'a', text: '준호는 인도를 골랐어요', motif: 'star' }, { id: 'b', text: '인도 옷이 궁금했어요', motif: 'leaf' }, { id: 'c', text: '사진으로 알아보기로 했어요', motif: 'tree' }, { id: 'd', text: '사진에서 사리를 찾았어요', motif: 'flower' }], slots: ['1', '2', '3', '4'] },
                target: { order: ['a', 'b', 'c', 'd'] }, difficulty: 0.15 },
              { prompt: '방법을 정하지 않고 자료부터 찾은 서아에게 해 줄 말을 골라 보세요.', toolOptions: { mode: 'pick', basket: '서아에게 해 줄 말', cards: ['먼저 무엇으로 알아볼지 정해 볼까?', '궁금한 것을 다시 읽어 볼까?', { id: '빨리', text: '빨리 아무거나 찾아', why: '아무거나 찾으면 물음에 맞지 않는 자료가 모여요.' }] },
                target: { pick: ['먼저 무엇으로 알아볼지 정해 볼까?', '궁금한 것을 다시 읽어 볼까?'] }, difficulty: 0.2 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 모둠 탐험 계획표 만들기', minutes: 14, tool: 'mindmap',
            teacher: '같은 나라를 고른 학생끼리 3~4명 모둠을 만든다. "모둠에서 누가 무엇을 알아볼지 나누어요. 한 사람이 다 하면 힘들어요." 계획표에 이름, 맡은 물음, 방법을 적게 한다. 모두 같은 물음을 맡으려 하면 "옷, 음식, 놀이, 인사 가운데 하나씩 나누어 볼까요?"라고 제안한다.',
            task: '모둠 친구와 맡을 일을 나누고 탐험 계획표를 채워요.',
            levels: CARD_LV,
            items: [
              { prompt: '중국 탐험 모둠이에요. 물음을 맡을 갈래로 나누어 보세요.', toolOptions: { topic: '중국 탐험 모둠', slots: ['먹는 것', '입는 것', '인사'], cards: ['중국 만두는 어떻게 생겼을까?', '중국 사람들은 설날에 무엇을 먹을까?', '중국의 전통 옷은 무엇일까?', '중국에서는 어떻게 인사할까?'] },
                target: { sort: { '먹는 것': ['중국 만두는 어떻게 생겼을까?', '중국 사람들은 설날에 무엇을 먹을까?'], '입는 것': ['중국의 전통 옷은 무엇일까?'], '인사': ['중국에서는 어떻게 인사할까?'] } }, difficulty: 0.2 },
              { prompt: '모둠에서 일을 나눌 때 알맞은 말만 골라 보세요.', toolOptions: { mode: 'pick', basket: '일을 나누는 말', cards: ['나는 음식을 알아볼게', '너는 옷을 맡아 줄래?', { id: '혼자', text: '내가 다 할 거야', why: '한 사람이 다 하면 힘들고 친구는 할 일이 없어요.' }, { id: '싫어', text: '너는 하지 마', why: '모둠 친구 모두가 맡을 일이 있어야 해요.' }] },
                target: { pick: ['나는 음식을 알아볼게', '너는 옷을 맡아 줄래?'] }, difficulty: 0.1 },
              { prompt: '모둠 탐험 계획표에 이름, 맡은 물음, 방법을 다 적었으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"우리 모둠은 다음 시간에 몇 번째 차례를 할까요?" 자료 찾기 차례라는 것을 함께 말한다. 계획표는 모둠 바구니에 넣어 두고, 다음 시간에 자료 코너에서 꺼내 쓴다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { cards: [{ id: 'how', text: '방법 정하기', motif: 'tree' }, { id: 'find', text: '자료 찾기', motif: 'flower' }, { id: 'say', text: '발표하기', motif: 'sun' }], slots: ['1', '2', '3'] }, prompt: '세 카드를 탐험 차례대로 놓아 보세요.', target: { order: ['how', 'find', 'say'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '모둠에서 일을 나눌 때 알맞은 것은?', options: ['한 사람이 다 해요', '한 사람이 하나씩 맡아요', '아무도 안 해요'], answer: 1, difficulty: 0.1, explain: '하나씩 맡으면 모두가 탐험할 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '모둠 탐험 계획표',
      items: [
        { type: 'table', prompt: '모둠 탐험 계획표를 쓰세요.', columns: ['이름', '맡은 물음', '알아볼 방법'], rows: 4 },
        { type: 'blank', prompt: '탐험 차례를 쓰세요.', text: '나라 고르기 → 궁금한 것 적기 → ___ → 자료 찾기 → 발표하기', answer: '방법 정하기' },
        { type: 'choice', prompt: '자료를 찾기 전에 할 일에 ○ 하세요.', options: ['방법 정하기', '발표하기'], answer: '방법 정하기' },
        { type: 'draw', prompt: '우리 모둠 탐험 깃발을 그려 보세요.' },
      ],
      easy: {
        note: '고르기 → 궁금한 것 → 방법 → 찾기 → 발표!',
        items: [
          { type: 'short', prompt: '내가 맡은 물음을 쓰세요.' },
          { type: 'choice', prompt: '가장 먼저 할 일에 ○ 하세요.', options: ['나라 고르기', '발표하기'], answer: '나라 고르기' },
          { type: 'draw', prompt: '우리 모둠 탐험 깃발을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 놓으면 초록 테두리가 생겨요. 차례는 네 개로 해요.',
      base: '탐험 차례를 놓고, 모둠 계획표를 채워요.',
      challenge: '발표까지 다섯 차례를 놓아요. 계획표에 언제 할지도 적어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 방법을 정하지 않고 자료부터 찾는다 → 차례 징검다리를 교실 벽에 붙여 두고 지금 자리를 짚는다. ② 모둠에서 한 사람이 다 하려 한다 → 갈래(먹는 것·입는 것·인사·놀이)를 하나씩 나누게 한다. ③ 같은 나라를 고른 친구가 없는 학생 → 혼자 탐험하거나 두 나라를 한 모둠으로 묶는다.',
  }));

  // ───────────────────────── 17~20차시: 다른 나라 자료 모으고 놀라운 것 표시하기 ─────────────────────────

  lessons.push(L(17, {
    title: '인도 자료를 읽고 그림과 글로 모으기',
    objective: '인도에 대한 그림과 글 자료에서 옷·음식·인사를 찾아 모으고, 가장 놀라웠던 것 하나에 별을 그려 표시할 수 있다.',
    illustration: ART('a paper collage about India with a woman wearing a colorful sari, a plate of curry with flatbread, a child greeting with palms pressed together and an elephant in the background', '인도 자료를 모아요', [
      { motif: 'sun', x: 120, y: 70, s: 0.6 }, { motif: 'tree', x: 380, y: 214 }, { motif: 'flower', x: 300, y: 228, color: 'buttercup' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"자료 코너에 인도 그림책, 사진, 그리고 사진이 없는 글 자료가 있어요. 사진이 없는 글 자료도 쓸 수 있을까요?" 손을 들게 한 뒤, 글 자료를 읽어 주며 머릿속으로 그림을 그려 보게 한다. 시연 단추로 자료 카드가 옷·음식 칸에 모이는 모습을 보여 준다. "자료를 모을 때는 그림으로 그리고, 글로 한 줄 적어요."',
        student: '선생님이 읽어 주는 글을 듣고 떠오른 모습을 짝에게 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '인도 자료', slots: ['옷', '음식'], cards: ['긴 천을 둘러 입는 사리', '카레와 납작한 빵 난'], shuffle: false }, sequence: [{ sort: { '옷': ['긴 천을 둘러 입는 사리'], '음식': ['카레와 납작한 빵 난'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 인도 자료에서 찾아 나누기', minutes: 13, tool: 'mindmap',
            teacher: '자료 글을 읽어 준다: "인도의 많은 여자 어른들은 긴 천을 몸에 둘러 입는 사리를 입어요. 카레를 납작한 빵 난과 함께 먹고, 달콤한 차 짜이를 마셔요. 만나면 두 손을 가슴 앞에 모으고 \'나마스테\' 하고 인사해요." "사진이 없어도 글에서 사리가 어떻게 생겼는지 알 수 있었나요?" 사진이 없는 자료는 쓸 수 없다고 여기는 학생에게 지금 찾은 것이 모두 글에서 나왔다는 것을 짚는다.',
            task: '자료 글을 듣고 찾은 것을 나누고, 낯선 낱말의 뜻을 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '인도 자료에서 찾은 것을 옷, 음식, 인사로 나누어 보세요.', toolOptions: { topic: '인도 자료', slots: ['옷', '음식', '인사'], cards: ['긴 천을 둘러 입는 사리', '카레와 납작한 빵 난', '달콤한 차 짜이', '두 손을 모으는 나마스테'] },
                target: { sort: { '옷': ['긴 천을 둘러 입는 사리'], '음식': ['카레와 납작한 빵 난', '달콤한 차 짜이'], '인사': ['두 손을 모으는 나마스테'] } }, difficulty: 0.15 },
              { prompt: '자료에 나온 낯선 낱말과 뜻을 이어 보세요.', toolOptions: { mode: 'match', topic: '낱말 뜻', slots: [{ id: 's1', label: '사리' }, { id: 's2', label: '난' }, { id: 's3', label: '나마스테' }], cards: ['긴 천을 둘러 입는 옷', '납작하게 구운 빵', '두 손을 모으고 하는 인사'] },
                target: { match: { s1: '긴 천을 둘러 입는 옷', s2: '납작하게 구운 빵', s3: '두 손을 모으고 하는 인사' } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { slots: [{ id: 's1', label: '사리' }, { id: 's2', label: '난' }, { id: 's3', label: '나마스테' }, { id: 's4', label: '짜이' }], cards: ['긴 천을 둘러 입는 옷', '납작하게 구운 빵', '두 손을 모으고 하는 인사', '달콤한 차'] }, target: { match: { s1: '긴 천을 둘러 입는 옷', s2: '납작하게 구운 빵', s3: '두 손을 모으고 하는 인사', s4: '달콤한 차' } }, prompt: '자료에 나온 낯선 낱말 네 개와 뜻을 이어 보세요.' } } },
              { prompt: '탐험에 쓸 수 있는 자료만 골라 보세요.', toolOptions: { mode: 'pick', basket: '쓸 수 있는 자료', cards: ['사진이 없는 글 자료', '인도 사진', '세계 지도', '인도에 다녀온 어른의 이야기', { id: '소문', text: '누가 했는지 모르는 소문', why: '누가 했는지 모르는 말은 맞는지 알 수 없어요.' }] },
                target: { pick: ['사진이 없는 글 자료', '인도 사진', '세계 지도', '인도에 다녀온 어른의 이야기'] }, difficulty: 0.25,
                predict: { q: '사진이 없는 글 자료도 쓸 수 있을까요?', options: ['쓸 수 있어요', '쓸 수 없어요'], answer: 0 },
                conclude: '글만 있는 자료도 읽으면 알 수 있어요. 누가 했는지 모르는 말만 조심해요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 자료 카드에 모으고 놀라운 것 표시하기', minutes: 13, tool: 'emotion',
            teacher: '"찾은 것을 자료 카드에 그림으로 그리고 한 줄로 적어요. 다 적으면 가장 놀라웠던 카드에 별을 그려요." 사람마다 놀라운 것이 다르니 친구 것을 따라 하지 않아도 된다는 것을 말해 준다. 화면의 놀람 크기 고르기에는 정답이 없고 내 마음대로 고른다고 알려 준다.',
            task: '자료 카드를 그림과 글로 만들고, 가장 놀라웠던 것에 별을 그려요.',
            levels: { easy: { steps: 3 }, base: {}, challenge: {} },
            items: [
              { prompt: '자료 카드 세 장에 그림을 그리고 한 줄씩 적었으면 "다 했어요"를 누르세요.', free: true, talk: true },
              { prompt: '"인도에서는 손으로 밥을 먹기도 해요." 이 자료를 읽고 내가 놀란 크기를 골라 보세요. 정답은 없어요.', toolOptions: { mode: 'scale', situation: '인도에서는 손을 깨끗이 씻고 손으로 밥을 먹기도 해요.', feeling: '놀람', after: '놀라운 것을 찾으면 자료 카드에 별을 그려요.' }, target: { level: 'any' }, difficulty: 0.05 },
              { prompt: '가장 놀라웠던 자료 카드에 별을 그리고 짝에게 까닭을 말했으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"내가 별을 그린 자료는 무엇인가요? 왜 놀라웠나요?" 서너 명의 대답을 듣고, 같은 자료를 보고도 놀란 것이 서로 다르다는 것을 짚는다. 자료 카드는 모둠 봉투에 모아 둔다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '낱말 뜻', slots: [{ id: 'e1', label: '짜이' }, { id: 'e2', label: '사리' }], cards: ['달콤한 차', '긴 천을 둘러 입는 옷'] }, prompt: '인도 자료의 낱말과 뜻을 이어 보세요.', target: { match: { e1: '달콤한 차', e2: '긴 천을 둘러 입는 옷' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '사진이 없는 글 자료는 어떨까요?', options: ['쓸 수 없어요', '읽으면 쓸 수 있어요'], answer: 1, difficulty: 0.1, explain: '글을 읽고 떠올리면 사진이 없어도 알 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '인도 자료 카드',
      items: [
        { type: 'table', prompt: '자료 카드를 만드세요. 가장 놀라운 칸에 ☆ 하세요.', columns: ['그림', '한 줄 글', '☆'], rows: 3 },
        { type: 'choice', prompt: '"나마스테"는 무엇일까요?', options: ['인사', '음식', '옷'], answer: '인사' },
        { type: 'check', prompt: '탐험에 쓸 수 있는 자료에 모두 ✓ 하세요.', options: ['글 자료', '사진', '지도', '누가 했는지 모르는 소문'] },
        { type: 'short', prompt: '가장 놀라웠던 것과 그 까닭을 쓰세요.' },
      ],
      easy: {
        note: '그림 하나, 글 한 줄! 놀라운 것에 ☆!',
        items: [
          { type: 'choice', prompt: '사리는 무엇일까요?', options: ['옷', '빵'], answer: '옷' },
          { type: 'short', prompt: '가장 놀라웠던 것을 낱말로 쓰세요.' },
          { type: 'draw', prompt: '인도 자료에서 찾은 것을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 놓으면 초록 테두리가 생겨요. 놀람 크기는 세 칸이에요. 자료 카드는 두 장만 만들어요.',
      base: '자료 카드 세 장을 만들고 놀라운 것에 별을 그려요.',
      challenge: '낯선 낱말 네 개를 잇고, 놀라운 까닭을 한 문장으로 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 사진이 없는 자료는 쓸 수 없다고 여긴다 → 글을 읽어 주고 떠올린 그림을 그리게 한다. ② 놀라운 것을 친구와 똑같이 고른다 → 사람마다 다르게 놀란다는 것을 말해 준다. ③ 손으로 먹는 것을 우습게 여긴다 → 손을 씻고 먹는 그 나라의 예절이라는 것을 짚는다. 인도에도 여러 지역과 말, 음식이 있다는 것을 덧붙인다.',
  }));

  lessons.push(L(18, {
    title: '일본 자료에서 우리와 같은 점·다른 점 찾기',
    objective: '일본 그림과 글 자료를 읽고 우리와 같은 점과 다른 점을 나누며, 자료를 보고 일본 국기를 색종이 조각으로 나타낼 수 있다.',
    illustration: ART('a paper scene of Japan with a snowy-topped mountain, cherry blossom trees, a child in a kimono bowing and a white flag with a red circle', '일본 자료를 읽어요', [
      { motif: 'mountain', x: 380, y: 206 }, { motif: 'flower', x: 110, y: 226, color: 'rose' }, { motif: 'flower', x: 160, y: 228, color: 'rose' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"일본은 우리나라 오른쪽 바다 건너에 있는 섬나라였지요? 일본 사람들도 우리처럼 젓가락을 쓸까요?" 손을 들게 한 뒤 자료로 확인해 보자고 한다. 시연 단추로 자료 카드가 "같아요"와 "달라요"로 나뉘는 모습을 보여 준다. 다른 점은 틀린 것이 아니라 그냥 다른 것이라는 것을 짚는다.',
        student: '일본에 대해 들어 본 것이 있으면 짝에게 하나 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '일본과 우리', slots: ['같아요', '달라요'], cards: ['젓가락을 써요', '곤니치와 하고 인사해요'], shuffle: false }, sequence: [{ sort: { '같아요': ['젓가락을 써요'], '달라요': ['곤니치와 하고 인사해요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 우리와 같은 점, 다른 점 나누기', minutes: 13, tool: 'mindmap',
            teacher: '자료 글을 읽어 준다: "일본 사람들도 밥을 먹고 젓가락을 써요. 낮에 만나면 \'곤니치와\' 하고 인사해요. 명절에는 허리에 넓은 띠를 두른 기모노를 입기도 해요. 봄이면 벚꽃 구경을 많이 가요." "우리도 봄에 벚꽃 구경을 가나요?" 우리 생활과 하나씩 견주게 한다. 다른 점을 "이상해요"라고 하는 학생에게 "그냥 달라요"라고 고쳐 말하게 한다.',
            task: '일본 자료를 읽고 우리와 같은 점과 다른 점으로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '일본 자료 카드를 우리와 같은 점과 다른 점으로 나누어 보세요.', toolOptions: { topic: '일본과 우리', slots: ['같아요', '달라요'], cards: ['밥을 자주 먹어요', '봄에 벚꽃 구경을 가요', '곤니치와 하고 인사해요', '명절에 기모노를 입어요'] },
                target: { sort: { '같아요': ['밥을 자주 먹어요', '봄에 벚꽃 구경을 가요'], '달라요': ['곤니치와 하고 인사해요', '명절에 기모노를 입어요'] } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['밥을 자주 먹어요', '봄에 벚꽃 구경을 가요', '곤니치와 하고 인사해요', '명절에 기모노를 입어요', { id: '사리', text: '긴 천 사리를 둘러 입어요', why: '사리는 인도 자료에 나온 옷이에요. 일본 자료가 아니에요.' }] } } } },
              { prompt: '일본 자료에 나온 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '일본 자료', cards: ['꼭대기에 눈이 덮인 높은 산', '허리에 넓은 띠를 두른 옷', { id: '판다', text: '대나무를 먹는 판다', why: '판다는 중국에 사는 동물이에요.' }, { id: '게르', text: '둥근 천막 집 게르', why: '게르는 몽골의 집이에요.' }] },
                target: { pick: ['꼭대기에 눈이 덮인 높은 산', '허리에 넓은 띠를 두른 옷'] }, difficulty: 0.2 },
              { prompt: '같은 점과 다른 점을 바르게 말한 것을 이어 보세요.', toolOptions: { mode: 'match', topic: '견주어 말하기', slots: [{ id: 's1', label: '같은 점' }, { id: 's2', label: '다른 점' }], cards: ['우리도 일본도 젓가락을 써요', '우리는 안녕하세요, 일본은 곤니치와'] },
                target: { match: { s1: '우리도 일본도 젓가락을 써요', s2: '우리는 안녕하세요, 일본은 곤니치와' } }, difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 자료를 보고 그림으로 나타내기', minutes: 13, tool: 'collage',
            teacher: '"자료 글에 \'일본 국기는 흰 바탕 가운데에 빨간 동그라미 하나가 있어요\'라고 쓰여 있어요. 글을 읽고 색종이로 만들어 볼까요?" 동그라미의 자리(가운데)를 손가락으로 먼저 짚게 한다. 동그라미를 여러 개 붙이는 학생에게 자료 글을 다시 읽어 준다. 다 만든 학생은 자료 카드에 벚꽃이나 높은 산을 그림으로 그린다.',
            task: '자료 글을 읽고 색종이 조각으로 일본 국기와 벚꽃을 나타내요.',
            levels: {
              easy: { shapes: ['circle'], colors: ['빨강', '분홍'], sizes: ['m', 'l'], bg: '하양' },
              base: { shapes: ['circle', 'square', 'star'], colors: ['빨강', '분홍', '파랑'], bg: '하양' },
              challenge: { shapes: ['circle', 'square', 'star', 'heart'], colors: ['빨강', '분홍', '파랑', '노랑'], bg: '하양' },
            },
            items: [
              { prompt: '자료 글대로 흰 바탕 가운데에 큰 빨강 동그라미 하나를 붙여 일본 국기를 만들어 보세요.', target: { has: [{ shape: 'circle', color: '빨강', size: 'l' }], pieces: { n: 1 } }, difficulty: 0.1 },
              { prompt: '자료 사진 속 벚꽃 가지처럼 분홍 동그라미 꽃을 다섯 개 이상 붙여 보세요.', target: { has: [{ shape: 'circle', color: '분홍', min: 5 }] }, difficulty: 0.1 },
              { prompt: '자료 카드에 일본에서 찾은 것을 그림으로 그리고 한 줄로 적었으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"일본과 우리가 같은 점을 하나, 다른 점을 하나 말해 볼까요?" 다른 점을 말할 때 "그냥 달라요"라고 함께 말한다. 다음 시간에는 사진이 없는 중국 글 자료를 읽고 그림으로 옮긴다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'collage', options: { shapes: ['circle', 'star'], colors: ['빨강', '노랑'], bg: '하양' }, prompt: '흰 바탕에 빨강 동그라미 하나가 있는 국기를 만들어 보세요. 크기는 마음대로 해요.', target: { has: [{ shape: 'circle', color: '빨강', n: 1 }], pieces: { n: 1 } }, difficulty: 0.1 },
          { type: 'choice', prompt: '일본에서 낮에 만나면 하는 인사는 무엇일까요?', options: ['곤니치와', '니하오', '나마스테'], answer: 0, difficulty: 0.15, explain: '일본에서는 낮에 "곤니치와" 하고 인사해요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '일본과 우리',
      items: [
        { type: 'table', prompt: '일본과 우리의 같은 점과 다른 점을 쓰세요.', columns: ['같은 점', '다른 점'], rows: 2 },
        { type: 'choice', prompt: '일본 국기에 ○ 하세요.', options: ['흰 바탕에 빨간 동그라미', '흰 바탕에 태극 무늬', '빨간 바탕에 노란 별'], answer: '흰 바탕에 빨간 동그라미' },
        { type: 'draw', prompt: '자료 글을 읽고 일본 국기를 그려 보세요.' },
        { type: 'short', prompt: '일본 자료에서 가장 놀라웠던 것을 쓰세요.' },
      ],
      easy: {
        note: '같은 점은 "우리도", 다른 점은 "그냥 달라요"!',
        items: [
          { type: 'choice', prompt: '우리와 같은 점에 ○ 하세요.', options: ['젓가락을 써요', '곤니치와 하고 인사해요'], answer: '젓가락을 써요' },
          { type: 'choice', prompt: '일본에 있는 것에 ○ 하세요.', options: ['기모노', '게르'], answer: '기모노' },
          { type: 'draw', prompt: '일본 국기를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 놓으면 초록 테두리가 생겨요. 색종이는 동그라미와 두 색만 나와요.',
      base: '같은 점과 다른 점을 나누고, 자료 글대로 국기를 만들어요.',
      challenge: '다른 나라 자료 함정 카드를 골라내요. 색종이 모양과 색이 더 많아 자료 글을 꼼꼼히 읽고 골라요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 다른 점을 "이상하다"로 말한다 → "그냥 달라요"로 바꾸어 말하는 연습을 한다. ② 다른 나라 자료를 섞는다(판다·게르) → 자료 카드마다 나라 이름을 위에 쓰게 한다. ③ 일본 사람이 모두 늘 기모노를 입는다고 여긴다 → 명절이나 큰 날에 입는다는 것을 짚는다.',
  }));

  lessons.push(L(19, {
    title: '사진 없는 중국 글 자료를 그림으로 옮기기',
    objective: '사진이 없는 중국 글 자료를 듣고 읽으며 알맞은 그림과 짝 짓고, 글에 쓰인 대로 중국 국기를 색종이 조각으로 만들 수 있다.',
    illustration: ART('a child listening to a teacher read a text-only page, with thought bubbles showing a panda eating bamboo, a very long wall over mountains and red lanterns for the new year', '글을 그림으로 옮겨요', [
      { motif: 'mountain', x: 360, y: 206 }, { motif: 'leaf', x: 120, y: 222 }, { motif: 'moon', x: 380, y: 72, s: 0.5 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"오늘 자료에는 사진이 한 장도 없어요. 그래도 탐험할 수 있을까요?" 눈을 감게 하고 짧은 글을 읽어 준다: "검고 흰 털을 가진 판다가 대나무 잎을 아삭아삭 먹어요." "눈을 감고도 판다가 보였나요?" 시연 단추로 글 카드와 그림 카드가 이어지는 모습을 보여 준다. 글에 쓰인 낱말 하나하나가 그림의 단서라는 것을 짚는다.',
        student: '선생님이 읽어 준 글에서 떠오른 판다의 모습을 손으로 흉내 내 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '글을 그림으로', slots: [{ id: 's1', label: '대나무 잎을 먹는 검고 흰 동물' }], cards: ['판다 그림', '코끼리 그림'], shuffle: false }, sequence: [{ match: { s1: '판다 그림' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 글 자료와 그림 짝 짓기', minutes: 12, tool: 'mindmap',
            teacher: '자료 글을 천천히 두 번 읽어 준다: "중국에는 산을 따라 아주 길게 이어진 옛 성벽, 만리장성이 있어요. 설날(춘절)에는 집 앞에 빨간 등과 빨간 종이 장식을 걸어요. 만날 때는 \'니하오\' 하고 인사해요." "\'아주 길게\', \'빨간\' 같은 낱말을 잘 들었나요?" 낱말을 단서로 그림을 고르게 한다. 글을 듣고도 그림을 못 고르는 학생에게 글을 한 문장씩 끊어 읽어 준다.',
            task: '글 자료를 듣고 읽어 알맞은 그림 카드와 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '글 자료와 알맞은 그림 카드를 이어 보세요.', toolOptions: { mode: 'match', topic: '글을 그림으로', slots: [{ id: 's1', label: '산을 따라 아주 길게 이어진 옛 성벽' }, { id: 's2', label: '설날에 집 앞에 거는 빨간 등' }], cards: [{ id: '성벽', text: '만리장성 그림', motif: 'mountain' }, { id: '등', text: '빨간 등 그림', motif: 'sun' }] },
                target: { match: { s1: '성벽', s2: '등' } }, difficulty: 0.15 },
              { prompt: '글 자료를 읽고 알맞은 그림 카드를 이어 보세요.', toolOptions: { mode: 'match', topic: '글을 그림으로', slots: [{ id: 's1', label: '대나무 잎을 먹는 검고 흰 동물' }, { id: 's2', label: '만나면 니하오 하고 말해요' }, { id: 's3', label: '설날에 빚어 먹는 만두' }], cards: [{ id: '판다', text: '판다 그림', motif: 'leaf' }, { id: '인사', text: '인사하는 아이 그림', motif: 'sun' }, { id: '만두', text: '만두 그림', motif: 'moon' }] },
                target: { match: { s1: '판다', s2: '인사', s3: '만두' } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: [{ id: '판다', text: '판다 그림', motif: 'leaf' }, { id: '인사', text: '인사하는 아이 그림', motif: 'sun' }, { id: '만두', text: '만두 그림', motif: 'moon' }, { id: '기린', text: '목이 긴 기린 그림', motif: 'tree', why: '글 자료에 기린은 나오지 않아요.' }] } } } },
              { prompt: '사진이 없는 글 자료로 알게 된 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '글로 알게 된 것', cards: ['중국 설날에는 빨간 장식을 걸어요', '중국에서는 니하오 하고 인사해요', { id: '맛', text: '중국 만두의 정확한 맛', why: '맛은 글만 읽어서는 정확히 알 수 없어요. 더 궁금한 것으로 남겨요.' }] },
                target: { pick: ['중국 설날에는 빨간 장식을 걸어요', '중국에서는 니하오 하고 인사해요'] }, difficulty: 0.2,
                predict: { q: '사진이 없는 글로도 알 수 있을까요?', options: ['알 수 있어요', '알 수 없어요'], answer: 0 },
                conclude: '사진이 없어도 글을 읽으면 많은 것을 알 수 있어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 글대로 중국 국기 만들기', minutes: 14, tool: 'collage',
            teacher: '자료 글을 읽어 준다: "중국 국기는 빨간 바탕에 노란 별이 다섯 개 있어요. 큰 별 하나 옆에 작은 별 네 개가 있어요." "큰 별은 몇 개, 작은 별은 몇 개라고 했나요?" 손가락으로 세게 한 뒤 색종이 판에 붙인다. 별을 모두 같은 크기로 붙인 학생에게 글을 다시 읽어 주고 "크기에 대해 무엇이라고 했지요?"라고 묻는다. 빨리 끝낸 학생은 자료 카드에 만리장성을 그림으로 그린다.',
            task: '자료 글에 쓰인 대로 색종이 조각을 골라 중국 국기를 만들어요.',
            levels: {
              easy: { shapes: ['star'], colors: ['노랑'], sizes: ['s', 'l'], bg: '빨강' },
              base: { shapes: ['star', 'circle'], colors: ['노랑', '하양'], sizes: ['s', 'm', 'l'], bg: '빨강' },
              challenge: { shapes: ['star', 'circle', 'heart'], colors: ['노랑', '하양', '주황'], bg: '빨강' },
            },
            items: [
              { prompt: '빨간 바탕에 큰 노랑 별 하나를 먼저 붙여 보세요.', target: { has: [{ shape: 'star', color: '노랑', size: 'l' }], pieces: { n: 1 } }, difficulty: 0.1 },
              { prompt: '자료 글대로 큰 노랑 별 하나와 작은 노랑 별 네 개를 붙여 보세요.', state: { pieces: [{ shape: 'star', color: '노랑', size: 'l', x: 120, y: 120, r: 0 }] }, target: { has: [{ shape: 'star', color: '노랑', size: 'l', n: 1 }, { shape: 'star', color: '노랑', size: 's', n: 4 }], pieces: { n: 5 } }, difficulty: 0.2,
                hints: ['자료 글에서 별의 크기와 개수를 다시 들어 보세요.', '큰 별과 작은 별을 따로 세어 보세요. 작은 별이 모자라거나 남지 않나요?', '큰 노랑 별 1개, 작은 노랑 별 4개, 모두 5개예요.'] },
              { prompt: '자료 카드에 만리장성을 그림으로 그리고 한 줄로 적었으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 사진 없이 무엇을 알게 되었나요?" 글로 알게 된 것을 두세 가지 모은다. 맛이나 소리처럼 글로 다 알 수 없는 것은 더 궁금한 것으로 남겨 두자고 한다. 다음 시간에는 그림 단서로 세계 칸 지도에서 나라를 찾는다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '글을 그림으로', slots: [{ id: 'e1', label: '빨간 바탕에 노란 별 다섯 개' }, { id: 'e2', label: '흰 바탕에 빨간 동그라미 하나' }], cards: ['중국 국기', '일본 국기'] }, prompt: '국기를 설명한 글과 국기 이름을 이어 보세요.', target: { match: { e1: '중국 국기', e2: '일본 국기' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '중국에서 만나면 하는 인사는 무엇일까요?', options: ['니하오', '곤니치와', '봉주르'], answer: 0, difficulty: 0.1, explain: '중국에서는 "니하오" 하고 인사해요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '글을 그림으로',
      items: [
        { type: 'table', prompt: '글 자료를 읽고 그림을 그리세요.', columns: ['글 자료', '그림'], cells: [['대나무 잎을 먹는 판다', ''], ['설날에 거는 빨간 등', '']] },
        { type: 'draw', prompt: '글대로 중국 국기를 그려 보세요. (빨간 바탕, 큰 노란 별 하나, 작은 노란 별 넷)' },
        { type: 'choice', prompt: '"니하오"는 어느 나라 인사일까요?', options: ['중국', '일본', '인도'], answer: '중국' },
        { type: 'short', prompt: '글로 다 알 수 없어 더 궁금한 것을 쓰세요.' },
      ],
      easy: {
        note: '글의 낱말이 그림의 단서예요.',
        items: [
          { type: 'choice', prompt: '대나무 잎을 먹는 동물에 ○ 하세요.', options: ['판다', '기린'], answer: '판다' },
          { type: 'choice', prompt: '중국 국기의 별 색에 ○ 하세요.', options: ['노랑', '파랑'], answer: '노랑' },
          { type: 'draw', prompt: '판다를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 놓으면 초록 테두리가 생겨요. 색종이는 노랑 별 두 크기만 나와요.',
      base: '글과 그림을 잇고, 글대로 별 다섯 개를 붙여요.',
      challenge: '글에 없는 그림 함정 카드를 골라내요. 색종이 모양·색·크기가 많아 글을 꼼꼼히 읽고 골라요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 사진이 없는 자료는 쓸 수 없다고 여긴다 → 눈 감고 듣기로 글만으로도 그림이 떠오른다는 것을 겪게 한다. ② 별 크기를 구별하지 않는다 → 글의 "큰", "작은"에 밑줄을 긋게 한다. ③ 중국 사람이 모두 같은 말을 쓴다고 여긴다 → 넓은 나라라 지역마다 말과 음식이 다르다는 것을 덧붙인다.',
  }));

  lessons.push(L(20, {
    title: '그림 단서로 세계 칸 지도에서 나라 찾기',
    objective: '자료 표에서 유명한 곳과 나라를 짝 짓고, 그 단서로 세계 칸 지도에서 나라를 찾아 핀을 꽂을 수 있다.',
    illustration: ART('a paper world map with little landmark cutouts, a tall iron tower, triangle pyramids, giraffes on a savanna and a round felt tent, a child placing pins on the map', '어느 나라일까요?', [
      { motif: 'tree', x: 120, y: 214 }, { motif: 'cloud', x: 300, y: 66 }, { motif: 'wave', x: 380, y: 236 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"에펠탑이라는 아주 높은 쇠 탑이 있는 나라는 어디일까요?" 자료 표(유명한 곳 – 나라)를 칠판에 붙이고 함께 읽는다: 에펠탑 – 프랑스, 피라미드 – 이집트, 기린이 사는 넓은 초원 – 케냐, 둥근 천막 집 게르 – 몽골. 시연 단추로 핀이 프랑스에 꽂히는 모습을 보여 준다. "자료 표를 읽고 지도에서 찾는 거예요. 표와 지도, 두 자료를 함께 써요."',
        student: '자료 표에서 가 보고 싶은 곳을 하나 골라 짝에게 말해 봐요.',
        demo: { tool: 'map', options: WORLD(['우리나라', '프랑스', '이집트']), sequence: [{ place: '프랑스' }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 자료 표 읽고 유명한 곳과 나라 짝 짓기', minutes: 12, tool: 'mindmap',
            teacher: '"표의 왼쪽 칸은 유명한 곳, 오른쪽 칸은 나라예요. 한 줄씩 손가락으로 따라 읽어요." 표를 읽지 않고 짐작하는 학생에게 표에서 같은 줄을 찾게 한다. 피라미드를 "세모 산"이라고 하는 학생에게 옛날 왕의 무덤이라는 것을 알려 준다.',
            task: '자료 표를 읽고 유명한 곳과 나라를 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '자료 표를 읽고 유명한 곳과 나라를 이어 보세요.', toolOptions: { mode: 'match', topic: '어느 나라일까?', slots: [{ id: 's1', label: '아주 높은 쇠 탑 에펠탑' }, { id: 's2', label: '세모 모양 옛 무덤 피라미드' }], cards: ['프랑스', '이집트'] },
                target: { match: { s1: '프랑스', s2: '이집트' } }, difficulty: 0.1 },
              { prompt: '자료 표를 읽고 네 곳과 나라를 이어 보세요.', toolOptions: { mode: 'match', topic: '어느 나라일까?', slots: [{ id: 's1', label: '에펠탑' }, { id: 's2', label: '피라미드' }, { id: 's3', label: '기린이 사는 넓은 초원' }, { id: 's4', label: '둥근 천막 집 게르' }], cards: ['프랑스', '이집트', '케냐', '몽골'] },
                target: { match: { s1: '프랑스', s2: '이집트', s3: '케냐', s4: '몽골' } }, difficulty: 0.25,
                levels: { challenge: { toolOptions: { slots: [{ id: 's1', label: '에펠탑' }, { id: 's2', label: '피라미드' }, { id: 's3', label: '기린이 사는 넓은 초원' }, { id: 's4', label: '둥근 천막 집 게르' }, { id: 's5', label: '만리장성' }], cards: ['프랑스', '이집트', '케냐', '몽골', '중국'] }, target: { match: { s1: '프랑스', s2: '이집트', s3: '케냐', s4: '몽골', s5: '중국' } }, prompt: '자료 표를 읽고 다섯 곳과 나라를 이어 보세요.' } } },
              { prompt: '이집트 자료에 나온 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '이집트 자료', cards: ['세모 모양 옛 무덤 피라미드', '모래가 많은 사막', { id: '에펠', text: '높은 쇠 탑', why: '높은 쇠 탑 에펠탑은 프랑스에 있어요.' }, { id: '기린', text: '기린이 사는 초원', why: '기린이 사는 초원은 케냐 자료에 나왔어요.' }] },
                target: { pick: ['세모 모양 옛 무덤 피라미드', '모래가 많은 사막'] }, difficulty: 0.2 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 단서로 세계 칸 지도에 핀 꽂기', minutes: 14, tool: 'map',
            teacher: '"단서에 나라 이름이 없어요. 먼저 표에서 나라를 찾고, 그다음 지도에서 찾아요." 두 자료를 차례로 쓰는 것을 손가락으로 따라 보인다. 핀을 꽂은 뒤 "우리나라에서 이 나라는 가까운가요, 먼가요?"라고 물어 지도를 다시 보게 한다. 지구본에서도 그 나라를 찾아보게 한다.',
            task: '단서를 읽고 자료 표에서 나라를 찾은 뒤, 지도에 핀을 꽂아요.',
            levels: {
              easy: { readout: true },
              base: {},
              challenge: {},
            },
            items: [
              { prompt: '에펠탑이 있는 나라에 핀을 꽂아 보세요.', toolOptions: WORLD(['우리나라', '프랑스', '이집트', '케냐', '몽골']), target: { place: '프랑스' }, difficulty: 0.15,
                hints: ['먼저 자료 표에서 에펠탑이 있는 줄을 찾아요.', '표에서 찾은 나라 이름을 지도에서 찾아보세요.', '에펠탑은 프랑스에 있어요. 지도에서 프랑스를 찾아 꽂아요.'] },
              { prompt: '기린이 사는 넓은 초원이 있는 나라에 핀을 꽂아 보세요.', toolOptions: WORLD(['우리나라', '프랑스', '이집트', '케냐', '인도']), target: { place: '케냐' }, difficulty: 0.2,
                hints: ['먼저 자료 표에서 기린이 나오는 줄을 찾아요.', '표에서 찾은 나라 이름을 지도에서 찾아보세요. 지도 아래쪽을 보세요.', '기린이 사는 초원은 케냐에 있어요.'] },
              { prompt: '둥근 천막 집 게르가 있는 나라에 핀을 꽂아 보세요.', toolOptions: WORLD(['우리나라', '중국', '몽골', '이집트', '인도']), target: { place: '몽골' }, difficulty: 0.2,
                levels: { challenge: { prompt: '나라 이름이 보이지 않아요. 별 표시가 우리나라예요. 둥근 천막 집 게르가 있는 나라는 우리나라 바로 왼쪽 나라의 위쪽에 있어요. 핀을 꽂아 보세요.', toolOptions: { names: false } } },
                conclude: '게르가 있는 몽골은 우리나라에서 가까운 편이에요.' },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 나라를 찾을 때 어떤 자료를 두 가지 썼나요?" 자료 표와 지도를 함께 쓰면 처음 보는 나라도 찾을 수 있다는 것을 말한다. 모둠 탐험 나라의 자료 카드가 다 모였는지 확인하고, 다음 시간부터 알아낸 것을 설명한다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'map', options: WORLD(['우리나라', '프랑스', '이집트', '케냐']), prompt: '세모 모양 옛 무덤 피라미드가 있는 나라에 핀을 꽂아 보세요.', target: { place: '이집트' }, difficulty: 0.2 },
          { type: 'choice', prompt: '에펠탑이 있는 나라는 어디일까요?', options: ['프랑스', '케냐', '몽골'], answer: 0, difficulty: 0.1, explain: '자료 표에서 에펠탑은 프랑스에 있다고 했어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '세계 여러 나라 찾기',
      items: [
        { type: 'figure', wide: true, prompt: '에펠탑이 있는 나라에 ○, 피라미드가 있는 나라에 △ 하세요.', tool: 'map', figures: [{ options: WORLD(['우리나라', '프랑스', '이집트', '케냐', '몽골']), caption: '' }], answer: '프랑스 ○, 이집트 △' },
        { type: 'table', prompt: '유명한 곳과 나라를 쓰세요.', columns: ['유명한 곳', '나라'], cells: [['에펠탑', ''], ['피라미드', ''], ['게르', '']] },
        { type: 'choice', prompt: '기린이 사는 넓은 초원이 있는 나라에 ○ 하세요.', options: ['케냐', '프랑스', '몽골'], answer: '케냐' },
        { type: 'draw', prompt: '가 보고 싶은 나라의 유명한 곳을 그려 보세요.' },
      ],
      easy: {
        note: '표에서 먼저 찾고 → 지도에서 찾아요.',
        items: [
          { type: 'choice', prompt: '게르가 있는 나라에 ○ 하세요.', options: ['몽골', '프랑스'], answer: '몽골' },
          { type: 'choice', prompt: '피라미드가 있는 나라에 ○ 하세요.', options: ['이집트', '케냐'], answer: '이집트' },
          { type: 'draw', prompt: '피라미드를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 놓으면 초록 테두리가 생겨요. 핀을 꽂으면 그 칸의 나라 이름이 보여요.',
      base: '표를 읽고 네 곳을 이은 뒤 지도에서 찾아요.',
      challenge: '다섯 곳을 잇고, 나라 이름이 없는 지도에서 자리 단서로 찾아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 표를 읽지 않고 짐작한다 → 줄을 손가락으로 따라 읽게 한다. ② 칸 지도의 거리를 실제 거리로 여긴다 → 지구본에서 우리나라와 케냐가 얼마나 먼지 보여 준다. ③ 한 나라를 유명한 곳 하나로만 기억한다 → "프랑스에는 에펠탑 말고도 무엇이 있을까?"를 더 궁금한 것으로 남긴다.',
  }));

  // ───────────────────────── 21~24차시: 그림과 함께 설명하고 더 물을 것 남기기 ─────────────────────────

  lessons.push(L(21, {
    title: '그림 카드를 보여 주며 알아낸 것 설명하기',
    objective: '탐험한 나라에서 알아낸 것을 그림 카드를 보여 주며 친구에게 설명하고, 그 나라에 대해 더 묻고 싶은 것 하나를 남길 수 있다.',
    illustration: ART('a child holding up a hand-drawn paper card of a sari and a curry plate while explaining to a friend, a small question mark balloon floating above them', '그림을 보여 주며 말해요', [
      { motif: 'star', x: 110, y: 84, s: 0.6 }, { motif: 'tree', x: 380, y: 214 }, { motif: 'flower', x: 250, y: 228, color: 'lavender' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '두 가지로 설명해 본다. 먼저 말로만 "인도 사람들은 사리를 입어요"라고 하고, 다음에는 사리 그림 카드를 친구 쪽으로 들고 "이것이 사리예요. 긴 천을 몸에 둘러 입어요"라고 한다. "어느 설명이 더 잘 떠올랐나요?" 시연 단추로 설명 차례 카드가 놓이는 모습을 보여 준다. "설명이 끝나면 \'더 알고 싶은 것\'도 하나 남겨요. 탐험은 거기서 또 시작돼요."',
        student: '내 자료 카드 가운데 친구에게 가장 보여 주고 싶은 것을 하나 골라요.',
        demo: { tool: 'story', options: { cards: [{ id: 'name', text: '나라 이름 말하기', motif: 'star' }, { id: 'show', text: '그림 보여 주며 말하기', motif: 'flower' }, { id: 'more', text: '더 묻고 싶은 것', motif: 'cloud' }], slots: ['처음', '가운데', '끝'], shuffle: false }, sequence: [{ order: ['name', 'show', 'more'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 그림 카드에 맞는 설명 말 찾기', minutes: 12, tool: 'mindmap',
            teacher: '"그림 카드를 보여 줄 때는 \'이것은 ~예요\' 하고 그림을 가리키며 말해요." 그림만 보여 주고 아무 말도 하지 않는 학생, 말만 하고 그림을 자기 쪽으로 드는 학생에게 각각 무엇이 빠졌는지 묻는다. 설명 말에는 무엇인지와 어떻게 하는지가 함께 들어가면 좋다는 것을 짚는다.',
            task: '그림 카드와 알맞은 설명 말을 잇고, 설명하는 바른 모습을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '그림 카드와 알맞은 설명 말을 이어 보세요.', toolOptions: { mode: 'match', topic: '그림과 설명', slots: [{ id: 's1', label: '사리를 입은 사람 그림' }, { id: 's2', label: '두 손을 모은 아이 그림' }], cards: ['이것은 긴 천을 둘러 입는 사리예요', '이것은 나마스테 인사예요'] },
                target: { match: { s1: '이것은 긴 천을 둘러 입는 사리예요', s2: '이것은 나마스테 인사예요' } }, difficulty: 0.1 },
              { prompt: '세 그림 카드와 알맞은 설명 말을 이어 보세요.', toolOptions: { mode: 'match', topic: '그림과 설명', slots: [{ id: 's1', label: '둥근 천막 집 그림' }, { id: 's2', label: '빨간 등 그림' }, { id: 's3', label: '세모 무덤 그림' }], cards: ['몽골의 게르예요. 옮길 수 있는 집이에요', '중국 설날에 거는 빨간 등이에요', '이집트의 피라미드예요. 옛날 왕의 무덤이에요'] },
                target: { match: { s1: '몽골의 게르예요. 옮길 수 있는 집이에요', s2: '중국 설날에 거는 빨간 등이에요', s3: '이집트의 피라미드예요. 옛날 왕의 무덤이에요' } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['몽골의 게르예요. 옮길 수 있는 집이에요', '중국 설날에 거는 빨간 등이에요', '이집트의 피라미드예요. 옛날 왕의 무덤이에요', { id: '에펠', text: '프랑스의 높은 쇠 탑이에요', why: '쇠 탑 그림은 없어요. 그림을 다시 보세요.' }] } } } },
              { prompt: '그림 카드로 설명할 때 알맞은 모습만 골라 보세요.', toolOptions: { mode: 'pick', basket: '알맞은 모습', cards: ['그림을 친구 쪽으로 들어요', '그림을 가리키며 말해요', { id: '숨김', text: '그림을 내 쪽으로만 봐요', why: '친구가 그림을 볼 수 없어요.' }, { id: '조용', text: '그림만 보여 주고 말하지 않아요', why: '무엇인지 말해 주어야 친구가 알아요.' }] },
                target: { pick: ['그림을 친구 쪽으로 들어요', '그림을 가리키며 말해요'] }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 짝에게 설명하고 더 묻고 싶은 것 남기기', minutes: 14, tool: 'emotion',
            teacher: '"설명을 마친 준호에게 친구가 \'더 궁금한 거 있어?\' 하고 물었어요. 준호는 뭐라고 할까요?" 조사가 끝나면 더 궁금할 것이 없다고 여기는 학생에게 "알게 된 것 때문에 새로 궁금해진 것은 없나요?"라고 묻는다(예: 게르를 알게 되니 "겨울에는 춥지 않을까?"). 짝과 그림 카드로 1분씩 설명하고, 듣는 짝은 다 들은 뒤 "더 궁금한 것" 붙임 쪽지를 한 장 써서 붙여 준다.',
            task: '더 묻고 싶은 물음을 고르고, 짝에게 그림 카드로 설명해요.',
            levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
            items: [
              { prompt: '설명을 마친 준호가 할 말로 알맞은 것을 골라 보세요.', toolOptions: { mode: 'branch', who: '준호', situation: '준호가 몽골 설명을 마치자 친구가 "더 궁금한 거 있어?" 하고 물었어요.', choices: [
                { id: 'none', text: '"다 알아서 이제 궁금한 게 없어"', result: '준호의 탐험이 거기서 멈췄어요.', mood: '걱정', why: '알게 된 것 때문에 새로 궁금해지는 것이 있어요.' },
                { id: 'more', text: '"게르는 겨울에 춥지 않을까? 더 알아볼래"', result: '준호는 다음 탐험 물음을 얻었어요.', mood: '신남' }] }, target: { choice: 'more' }, difficulty: 0.1 },
              { prompt: '알게 된 것에서 새로 생긴 "더 묻고 싶은 물음"만 골라 보세요.', toolOptions: { mode: 'pick', basket: '더 묻고 싶어요', cards: ['게르는 겨울에 춥지 않을까?', '사리는 어떻게 두를까?', { id: '알아', text: '게르는 둥근 집이에요', why: '이미 알게 된 것을 알려 주는 말이에요.' }, { id: '끝', text: '이제 다 알았어요', why: '탐험이 끝나도 더 궁금한 것을 남길 수 있어요.' }] },
                target: { pick: ['게르는 겨울에 춥지 않을까?', '사리는 어떻게 두를까?'] }, difficulty: 0.15,
                predict: { q: '탐험을 마치면 더 궁금한 것이 없을까요?', options: ['없어요', '새로 생겨요'], answer: 1 },
                conclude: '알게 된 것이 많아지면 새로 궁금한 것도 생겨요.' },
              { prompt: '짝에게 그림 카드로 설명하고 "더 궁금한 것" 쪽지를 받았으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"짝에게 받은 \'더 궁금한 것\' 쪽지를 읽어 볼까요?" 서너 명이 읽는다. 쪽지는 물음 나무의 \'다른 나라\' 가지에 붙여 다음 탐험 물음으로 남긴다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '그림과 설명', slots: [{ id: 'e1', label: '판다 그림' }, { id: 'e2', label: '에펠탑 그림' }], cards: ['중국에 사는 판다예요. 대나무를 먹어요', '프랑스의 에펠탑이에요. 아주 높은 쇠 탑이에요'] }, prompt: '그림 카드와 알맞은 설명 말을 이어 보세요.', target: { match: { e1: '중국에 사는 판다예요. 대나무를 먹어요', e2: '프랑스의 에펠탑이에요. 아주 높은 쇠 탑이에요' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '설명을 마친 뒤 하면 좋은 것은 무엇일까요?', options: ['더 묻고 싶은 것을 하나 남겨요', '자료를 버려요', '다 알았다고 끝내요'], answer: 0, difficulty: 0.1, explain: '더 묻고 싶은 것이 다음 탐험의 시작이 돼요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '그림 카드로 설명하기',
      items: [
        { type: 'draw', prompt: '설명할 그림 카드를 그려 보세요.' },
        { type: 'blank', prompt: '설명 말을 완성하세요.', text: '이것은 ___예요. ___.', answer: '(그림 이름, 하는 일이나 모습)' },
        { type: 'check', prompt: '설명할 때 지킨 것에 ✓ 하세요.', options: ['그림을 친구 쪽으로 들었어요', '그림을 가리키며 말했어요', '친구 눈을 보았어요'] },
        { type: 'short', prompt: '그 나라에 대해 더 묻고 싶은 것을 물음으로 쓰세요.' },
      ],
      easy: {
        note: '그림을 친구 쪽으로! "이것은 ~예요."',
        items: [
          { type: 'draw', prompt: '설명할 그림을 그려 보세요.' },
          { type: 'choice', prompt: '그림은 어느 쪽으로 들까요?', options: ['친구 쪽', '내 쪽'], answer: '친구 쪽' },
          { type: 'short', prompt: '더 궁금한 것을 낱말로 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 놓으면 초록 테두리가 생겨요. 설명은 "이것은 ~예요" 한 문장만 해도 돼요.',
      base: '그림을 보여 주며 두 문장으로 설명하고, 더 묻고 싶은 것을 남겨요.',
      challenge: '그림에 없는 설명 함정 카드를 골라내요. 더 묻고 싶은 것을 두 가지 남겨요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 조사가 끝나면 더 궁금할 것이 없다고 여긴다 → 알게 된 것에서 새 물음을 이끌어 내는 본보기를 보여 준다. ② 그림을 자기 쪽으로 든다 → 짝의 자리에서 보이는지 서로 확인하게 한다. ③ 설명을 자료 그대로 읽는다 → 9차시의 "내 말로 바꾸기"를 떠올리게 한다.',
  }));

  lessons.push(L(22, {
    title: '베트남 그림 카드로 짝에게 차례대로 설명하기',
    objective: '베트남의 인사·옷·음식 그림 카드를 보며 설명 틀에 맞추어 말하고, 짝에게 차례대로 설명할 수 있다.',
    illustration: ART('a paper scene of Vietnam with a girl in a long ao dai, a bowl of rice noodle soup, a cone-shaped leaf hat and a child waving hello, rice fields in the background', '베트남을 소개해요', [
      { motif: 'leaf', x: 110, y: 222 }, { motif: 'sun', x: 120, y: 70, s: 0.6 }, { motif: 'hills', y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"신짜오!" 하고 손을 흔들며 인사한다. "이 인사는 어느 나라 말일까요? 베트남 말로 \'안녕하세요\'예요." 베트남 그림 카드 네 장(인사하는 아이, 아오자이, 쌀국수, 뾰족한 잎 모자 논라)을 칠판에 붙인다. 시연 단추로 그림 카드와 설명 말이 이어지는 모습을 보여 준다. 오늘은 설명 틀에 맞추어 차례대로 설명한다고 말한다.',
        student: '"신짜오" 하고 짝에게 손을 흔들며 인사해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '베트남 그림 카드', slots: [{ id: 's1', label: '긴 웃옷 아래 바지를 입은 그림' }], cards: ['아오자이', '쌀국수'], shuffle: false }, sequence: [{ match: { s1: '아오자이' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 베트남 그림 카드 읽기', minutes: 12, tool: 'mindmap',
            teacher: '자료 글을 읽어 준다: "베트남 사람들은 \'신짜오\' 하고 인사해요. 긴 웃옷 아래 바지를 입는 아오자이를 입고, 쌀로 만든 국수를 즐겨 먹어요. 햇볕과 비를 가리려고 나뭇잎으로 만든 뾰족한 모자 논라를 써요." "논라는 왜 쓴다고 했나요?" 그림의 쓰임까지 찾게 한다. 쌀국수를 "라면"이라고 하는 학생에게 쌀로 만든다는 것을 짚는다.',
            task: '베트남 그림 카드와 이름, 쓰임을 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '그림 카드와 이름을 이어 보세요.', toolOptions: { mode: 'match', topic: '베트남 그림 카드', slots: [{ id: 's1', label: '긴 웃옷 아래 바지를 입은 그림' }, { id: 's2', label: '김이 나는 국수 그릇 그림' }, { id: 's3', label: '뾰족한 잎 모자 그림' }], cards: ['아오자이', '쌀국수', '논라'] },
                target: { match: { s1: '아오자이', s2: '쌀국수', s3: '논라' } }, difficulty: 0.15 },
              { prompt: '그림 카드의 이름과 쓰임을 이어 보세요.', toolOptions: { mode: 'match', topic: '무엇을 할까?', slots: [{ id: 's1', label: '논라' }, { id: 's2', label: '신짜오' }], cards: ['햇볕과 비를 가려요', '만나서 인사해요'] },
                target: { match: { s1: '햇볕과 비를 가려요', s2: '만나서 인사해요' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { slots: [{ id: 's1', label: '논라' }, { id: 's2', label: '신짜오' }, { id: 's3', label: '쌀국수' }], cards: ['햇볕과 비를 가려요', '만나서 인사해요', '쌀로 만들어 먹어요', { id: '입어', text: '몸에 둘러 입어요', why: '몸에 둘러 입는 것은 인도의 사리였어요.' }] }, target: { match: { s1: '햇볕과 비를 가려요', s2: '만나서 인사해요', s3: '쌀로 만들어 먹어요' } }, prompt: '세 그림 카드의 이름과 쓰임을 이어 보세요.' } } },
              { prompt: '베트남 자료에 나온 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '베트남 자료', cards: ['신짜오 인사', '쌀국수', '아오자이', { id: '기모노', text: '기모노', why: '기모노는 일본의 전통 옷이에요.' }, { id: '니하오', text: '니하오 인사', why: '니하오는 중국 인사예요.' }] },
                target: { pick: ['신짜오 인사', '쌀국수', '아오자이'] }, difficulty: 0.2 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 설명 틀로 차례대로 설명하기', minutes: 14, tool: 'story',
            teacher: '"설명 틀은 \'이것은 ~예요. ~할 때 써요(먹어요/입어요).\'예요." 칠판의 틀을 함께 읽고 빈칸을 채운다. 그다음 짝과 그림 카드 네 장을 차례대로 들고 설명한다. 듣는 짝은 카드마다 고개를 끄덕이고, 다 듣고 나면 "가장 재미있었던 카드"를 손가락으로 가리킨다. 순서를 섞는 학생에게 "처음에는 인사부터 해 볼까요?"라고 정해 준다.',
            task: '설명 틀의 빈칸을 채우고, 짝에게 그림 카드를 차례대로 설명해요.',
            levels: CARD_LV,
            items: [
              { prompt: '서아의 설명 틀 빈칸에 알맞은 카드를 넣어 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'b1', who: '서아', label: '이것은 ___예요. 햇볕과 비를 가려요.' }, { id: 'b2', who: '서아', label: '이것은 ___예요. 쌀로 만들어 먹어요.' }], cards: ['논라', '쌀국수', '아오자이'] },
                target: { fill: { b1: '논라', b2: '쌀국수' } }, difficulty: 0.15 },
              { prompt: '서아가 정한 설명 차례 "인사 → 옷 → 음식"대로 카드를 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: 'hi', text: '신짜오 하고 인사해요', motif: 'sun' }, { id: 'wear', text: '아오자이를 입어요', motif: 'flower' }, { id: 'eat', text: '쌀국수를 먹어요', motif: 'leaf' }], slots: ['1', '2', '3'] },
                target: { order: ['hi', 'wear', 'eat'] }, difficulty: 0.1 },
              { prompt: '짝에게 베트남 그림 카드 네 장을 차례대로 설명했으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"짝이 가장 재미있다고 가리킨 카드는 무엇이었나요?" 두세 명이 말한다. 베트남에 대해 더 궁금해진 것을 물음 나무에 붙이게 한다. 다음 시간에는 단서를 듣고 나라를 맞히는 퀴즈 놀이를 한다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { mode: 'fill', slots: [{ id: 'e1', who: '하준', label: '이것은 ___예요. 긴 웃옷 아래 바지를 입어요.' }], cards: ['아오자이', '논라'] }, prompt: '설명 틀의 빈칸에 알맞은 카드를 넣어 보세요.', target: { fill: { e1: '아오자이' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '베트남에서 "안녕하세요"는 무엇일까요?', options: ['신짜오', '봉주르', '곤니치와'], answer: 0, difficulty: 0.1, explain: '베트남 사람들은 "신짜오" 하고 인사해요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '베트남 소개 카드',
      items: [
        { type: 'table', prompt: '베트남 그림 카드를 설명하는 말을 쓰세요.', columns: ['그림 카드', '설명'], cells: [['논라', ''], ['쌀국수', ''], ['아오자이', '']] },
        { type: 'choice', prompt: '햇볕과 비를 가리는 모자에 ○ 하세요.', options: ['논라', '갓', '털모자'], answer: '논라' },
        { type: 'blank', prompt: '설명 틀을 채우세요.', text: '이것은 ___예요. 만나서 인사할 때 말해요.', answer: '신짜오' },
        { type: 'draw', prompt: '베트남에서 가장 해 보고 싶은 것을 그려 보세요.' },
      ],
      easy: {
        note: '"이것은 ~예요." 하고 그림을 가리켜요.',
        items: [
          { type: 'choice', prompt: '베트남 인사에 ○ 하세요.', options: ['신짜오', '니하오'], answer: '신짜오' },
          { type: 'choice', prompt: '쌀국수는 무엇으로 만들까요?', options: ['쌀', '고기'], answer: '쌀' },
          { type: 'draw', prompt: '논라를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 놓으면 초록 테두리가 생겨요. 설명은 그림 카드 두 장만 해요.',
      base: '설명 틀로 그림 카드 네 장을 차례대로 설명해요.',
      challenge: '다른 나라 함정 카드를 골라내고, 쓰임 잇기를 세 장으로 해요. 설명에 내 느낌도 붙여요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 그림 이름만 말하고 쓰임은 빠뜨린다 → 설명 틀 두 번째 칸을 손가락으로 짚게 한다. ② 다른 나라 것과 섞는다(니하오, 기모노) → 자료 카드 위에 나라 이름을 쓰게 한다. ③ 베트남 사람이 모두 논라를 쓴다고 여긴다 → 햇볕이 센 들일을 할 때 많이 쓴다는 것을 덧붙인다.',
  }));

  lessons.push(L(23, {
    title: '단서를 듣고 어느 나라인지 맞히는 퀴즈 놀이',
    objective: '친구가 내는 나라 단서를 끝까지 듣고 어느 나라인지 맞히며, 내가 탐험한 나라로 단서 세 개짜리 퀴즈를 낼 수 있다.',
    illustration: ART('children sitting in a circle playing a guessing game, one child holding three paper clue cards and others raising hands, little country flags on the wall', '어느 나라일까요?', [
      { motif: 'star', x: 120, y: 84, s: 0.6 }, { motif: 'cloud', x: 330, y: 64 }, { motif: 'flower', x: 380, y: 228, color: 'peach' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"선생님이 단서를 세 개 낼게요. 끝까지 듣고 맞혀요. 첫째, 우리나라와 가까워요. 둘째, 섬나라예요. 셋째, 곤니치와 하고 인사해요." 첫째 단서만 듣고 바로 외치는 학생에게 "가까운 나라는 몇 나라나 될까요?"라고 묻는다. 시연 단추로 단서 카드와 나라가 이어지는 모습을 보여 준다. 단서는 넓은 것에서 좁은 것으로 낼수록 재미있다는 것을 짚는다.',
        student: '선생님 퀴즈의 답을 바로 말하지 말고, 손가락으로 몇 번째 단서에서 알았는지 보여 줘요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '어느 나라일까?', slots: [{ id: 's1', label: '섬나라예요. 곤니치와 하고 인사해요.' }], cards: ['일본', '몽골'], shuffle: false }, sequence: [{ match: { s1: '일본' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 단서 묶음으로 나라 맞히기', minutes: 12, tool: 'mindmap',
            teacher: '"단서 묶음을 끝까지 읽고 나라를 골라요. 한 단서만 보면 여러 나라가 떠오를 수 있어요." 단서마다 손가락을 하나씩 접으며 읽게 한다. 틀린 학생에게 "어느 단서가 그 나라와 맞지 않나요?"를 물어 단서를 다시 보게 한다.',
            task: '단서 묶음을 끝까지 읽고 어느 나라인지 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '단서 묶음과 나라를 이어 보세요.', toolOptions: { mode: 'match', topic: '어느 나라일까?', slots: [{ id: 's1', label: '넓은 풀밭이 있어요. 둥근 천막 집에 살아요.' }, { id: 's2', label: '아주 높은 쇠 탑이 있어요. 봉주르 하고 인사해요.' }], cards: ['몽골', '프랑스'] },
                target: { match: { s1: '몽골', s2: '프랑스' } }, difficulty: 0.15 },
              { prompt: '세 단서 묶음과 나라를 이어 보세요.', toolOptions: { mode: 'match', topic: '어느 나라일까?', slots: [{ id: 's1', label: '판다가 살아요. 니하오 하고 인사해요.' }, { id: 's2', label: '사리를 입어요. 나마스테 하고 인사해요.' }, { id: 's3', label: '논라를 써요. 신짜오 하고 인사해요.' }], cards: ['중국', '인도', '베트남'] },
                target: { match: { s1: '중국', s2: '인도', s3: '베트남' } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['중국', '인도', '베트남', { id: '일본', text: '일본', why: '단서를 다시 보세요. 일본 인사는 곤니치와예요.' }] } } } },
              { prompt: '단서 하나만으로는 한 나라를 정할 수 없어요. 그런 단서만 골라 보세요.', toolOptions: { mode: 'pick', basket: '한 나라를 정할 수 없는 단서', cards: ['밥을 먹어요', '명절이 있어요', { id: '곤니치와', text: '곤니치와 하고 인사해요', why: '곤니치와는 일본 인사라 이 단서 하나로 나라를 알 수 있어요.' }, { id: '에펠', text: '에펠탑이 있어요', why: '에펠탑은 프랑스에만 있어서 바로 알 수 있어요.' }] },
                target: { pick: ['밥을 먹어요', '명절이 있어요'] }, difficulty: 0.3,
                predict: { q: '"밥을 먹어요" 단서 하나로 나라를 맞힐 수 있을까요?', options: ['맞힐 수 있어요', '여러 나라라 어려워요'], answer: 1 },
                conclude: '여러 나라에 다 있는 것은 단서 하나로 나라를 정할 수 없어서 단서를 더 들어야 해요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 내 나라 퀴즈 만들어 모둠에서 내기', minutes: 14, tool: 'story',
            teacher: '"단서 카드 세 장을 만들어요. 첫째는 넓은 단서(우리나라와 가까워요, 더운 나라예요), 둘째는 조금 좁은 단서, 셋째는 바로 알 수 있는 단서(인사말, 유명한 곳)예요." 모둠에서 한 사람씩 퀴즈를 내고, 듣는 친구는 셋째 단서까지 다 듣고 나서 손을 든다. 틀려도 괜찮고, 틀린 친구에게 "어느 단서를 다시 들어 볼까?"라고 말해 주게 한다.',
            task: '단서를 넓은 것에서 좁은 것 차례로 놓고, 내 나라 퀴즈를 모둠에서 내요.',
            levels: CARD_LV,
            items: [
              { prompt: '일본 퀴즈 단서를 넓은 것에서 바로 알 수 있는 것 차례로 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: 'near', text: '우리나라와 가까워요', motif: 'cloud' }, { id: 'island', text: '섬나라예요', motif: 'wave' }, { id: 'hello', text: '곤니치와 하고 인사해요', motif: 'sun' }], slots: ['첫째', '둘째', '셋째'] },
                target: { order: ['near', 'island', 'hello'] }, difficulty: 0.25,
                hints: ['많은 나라에 맞는 단서일수록 앞에 놓아요.', '"섬나라예요"는 가까운 나라 가운데 일부에만 맞아요. 가장 좁은 단서는 맨 끝이에요.', '가까워요 → 섬나라예요 → 곤니치와 차례예요.'] },
              { prompt: '이집트 퀴즈 단서를 넓은 것에서 바로 알 수 있는 것 차례로 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: 'far', text: '우리나라에서 아주 멀어요', motif: 'bird' }, { id: 'sand', text: '모래 사막이 있어요', motif: 'sun' }, { id: 'pyramid', text: '피라미드가 있어요', motif: 'mountain' }], slots: ['첫째', '둘째', '셋째'] },
                target: { order: ['far', 'sand', 'pyramid'] }, difficulty: 0.25 },
              { prompt: '모둠에서 내 나라 퀴즈를 내고 친구 퀴즈도 맞혀 보았으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"친구 퀴즈 가운데 몇 번째 단서에서 알았나요?" 손가락으로 보이게 한다. 단서를 끝까지 듣는 것이 퀴즈를 맞히는 비결이라는 것을 말한다. 다음 시간에는 여러 나라 인사를 나누며 이 탐험을 마무리한다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '어느 나라일까?', slots: [{ id: 'e1', label: '기린이 사는 초원이 있어요. 아주 멀어요.' }, { id: 'e2', label: '피라미드가 있어요. 사막이 있어요.' }], cards: ['케냐', '이집트'] }, prompt: '단서 묶음과 나라를 이어 보세요.', target: { match: { e1: '케냐', e2: '이집트' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '나라 퀴즈를 맞힐 때 알맞은 모습은?', options: ['첫 단서만 듣고 외쳐요', '단서를 끝까지 듣고 맞혀요', '친구 답을 따라 해요'], answer: 1, difficulty: 0.1, explain: '단서를 끝까지 들어야 한 나라로 좁힐 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '나라 퀴즈 카드',
      items: [
        { type: 'table', prompt: '내 나라 퀴즈 단서 세 개를 쓰세요.', columns: ['첫째(넓은 단서)', '둘째', '셋째(바로 알 수 있는 단서)'], cells: [['', '', '']] },
        { type: 'short', prompt: '퀴즈의 답(나라 이름)을 쓰세요.' },
        { type: 'choice', prompt: '바로 알 수 있는 단서에 ○ 하세요.', options: ['나마스테 하고 인사해요', '밥을 먹어요', '명절이 있어요'], answer: '나마스테 하고 인사해요' },
        { type: 'draw', prompt: '퀴즈 나라의 그림 단서를 그려 보세요.' },
      ],
      easy: {
        note: '넓은 단서 → 바로 알 수 있는 단서!',
        items: [
          { type: 'short', prompt: '퀴즈로 낼 나라 이름을 쓰세요.' },
          { type: 'short', prompt: '그 나라 인사말이나 유명한 곳을 쓰세요.' },
          { type: 'draw', prompt: '퀴즈 나라의 그림 단서를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 놓으면 초록 테두리가 생겨요. 퀴즈는 단서 두 개로 내도 돼요.',
      base: '단서 묶음을 끝까지 읽고 맞혀요. 단서 세 개로 퀴즈를 내요.',
      challenge: '한 나라를 정할 수 없는 단서를 가려내고, 함정 나라 카드를 골라내요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 첫 단서만 듣고 외친다 → 셋째 단서까지 손가락을 다 접은 뒤 손을 들게 한다. ② 퀴즈 단서로 답(나라 이름)을 바로 말해 버린다 → 셋째 단서에도 나라 이름은 쓰지 않는다는 약속을 정한다. ③ 틀린 친구를 놀린다 → 틀렸을 때 해 줄 말("어느 단서를 다시 들어 볼까?")을 미리 연습한다.',
  }));

  lessons.push(L(24, {
    title: '여러 나라 인사 나누고 더 궁금한 것 남기기',
    objective: '여러 나라의 인사말을 나라와 짝 지어 친구와 나누고, 다른 나라 탐험을 돌아보며 더 궁금한 것 하나를 물음으로 남길 수 있다.',
    illustration: ART('children from a paper classroom greeting each other in different ways, bowing, waving and pressing palms together, with speech bubbles of hello in many languages around a small paper globe', '여러 나라 말로 인사해요', [
      { motif: 'sun', x: 120, y: 70, s: 0.6 }, { motif: 'flower', x: 110, y: 226, color: 'rose' }, { motif: 'flower', x: 380, y: 226, color: 'sky' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"우리가 탐험한 나라의 인사말을 기억하나요? 니하오, 곤니치와, 신짜오, 나마스테, 봉주르!" 하나씩 말할 때마다 학생들이 따라 하게 한다. 시연 단추로 인사말과 나라가 이어지는 모습을 보여 준다. "오늘은 교실을 돌며 여러 나라 말로 인사를 나누고, 탐험을 마치며 더 궁금한 것을 남겨요."',
        student: '가장 기억에 남는 다른 나라 인사말을 하나 크게 말해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '나라와 인사', slots: [{ id: 's1', label: '니하오' }], cards: ['중국', '인도'], shuffle: false }, sequence: [{ match: { s1: '중국' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 인사말과 나라 짝 짓고 인사 나누기', minutes: 13, tool: 'mindmap',
            teacher: '"인사말 카드를 하나씩 뽑아 그 나라 말로 친구 세 명에게 인사해요. 인사할 때 그 나라에서 하는 몸짓도 해 봐요(나마스테는 두 손 모으기)." 교실을 걸을 때 뛰지 않고, 인사받은 친구는 같은 말로 대답한다. 다른 나라 말을 흉내 내며 웃음거리로 만드는 학생에게 "그 나라 친구가 들으면 어떤 마음일까요?"라고 묻는다.',
            task: '인사말과 나라를 잇고, 그 나라 말로 친구와 인사를 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '인사말과 나라를 이어 보세요.', toolOptions: { mode: 'match', topic: '나라와 인사', slots: [{ id: 's1', label: '곤니치와' }, { id: 's2', label: '신짜오' }, { id: 's3', label: '나마스테' }], cards: ['일본', '베트남', '인도'] },
                target: { match: { s1: '일본', s2: '베트남', s3: '인도' } }, difficulty: 0.15,
                levels: { challenge: { prompt: '인사말 다섯 개와 나라를 이어 보세요.', toolOptions: { slots: [{ id: 's1', label: '곤니치와' }, { id: 's2', label: '신짜오' }, { id: 's3', label: '나마스테' }, { id: 's4', label: '니하오' }, { id: 's5', label: '봉주르' }], cards: ['일본', '베트남', '인도', '중국', '프랑스'] }, target: { match: { s1: '일본', s2: '베트남', s3: '인도', s4: '중국', s5: '프랑스' } } } } },
              { prompt: '다른 나라 인사를 나눌 때 알맞은 모습만 골라 보세요.', toolOptions: { mode: 'pick', basket: '알맞은 모습', cards: ['그 나라 몸짓도 따라 해요', '인사받으면 같은 말로 대답해요', { id: '흉내', text: '말투를 우스꽝스럽게 흉내 내요', why: '다른 나라 말을 놀리면 그 나라 친구가 속상해요.' }] },
                target: { pick: ['그 나라 몸짓도 따라 해요', '인사받으면 같은 말로 대답해요'] }, difficulty: 0.1 },
              { prompt: '친구 세 명과 여러 나라 말로 인사를 나누었으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 탐험 돌아보고 더 궁금한 것 남기기', minutes: 13, tool: 'emotion',
            teacher: '"다른 나라 탐험을 마친 지금, 그 나라가 얼마나 더 궁금한가요? 정답은 없어요. 내 마음대로 골라요." 궁금한 마음 크기를 고른 뒤 탐험 카드 뒤에 더 궁금한 것 하나를 물음으로 쓴다. 더 궁금한 것이 없다는 학생에게 "그 나라 아이들은 학교에서 무엇을 배울까?"처럼 생활과 이어진 물음을 예로 들어 준다.',
            task: '궁금한 마음 크기를 고르고, 더 궁금한 물음을 골라 탐험 카드에 남겨요.',
            levels: { easy: { steps: 3 }, base: {}, challenge: {} },
            items: [
              { prompt: '다른 나라 탐험을 마친 지금, 그 나라가 얼마나 더 궁금한지 골라 보세요. 정답은 없어요.', toolOptions: { mode: 'scale', situation: '다른 나라 탐험을 마쳤어요. 그 나라에 대해 더 알고 싶은 마음이 있나요?', feeling: '설렘', scaleLabels: { 1: '조금', 5: '아주 많이' }, after: '그 마음을 물음으로 바꾸어 탐험 카드 뒤에 써요.' }, target: { level: 'any' }, difficulty: 0.05 },
              { prompt: '더 궁금한 것을 물음으로 남긴 카드만 골라 보세요.', toolOptions: { mode: 'pick', basket: '더 궁금한 물음', cards: ['몽골 아이들은 학교에서 무엇을 배울까?', '프랑스 사람들은 아침에 무엇을 먹을까?', { id: '끝', text: '탐험 끝!', why: '물음이 아니에요. 더 궁금한 것을 물음으로 써요.' }, { id: '알아', text: '인도 인사는 나마스테예요', why: '이미 알게 된 것이에요.' }] },
                target: { pick: ['몽골 아이들은 학교에서 무엇을 배울까?', '프랑스 사람들은 아침에 무엇을 먹을까?'] }, difficulty: 0.15 },
              { prompt: '탐험 카드 뒤에 더 궁금한 것 하나를 물음으로 썼으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"다른 나라를 탐험하며 가장 놀라웠던 것 하나와 더 궁금한 것 하나를 말해 볼까요?" 다섯 명쯤 듣고, 물음 나무를 함께 보며 처음보다 물음이 더 많아졌다는 것을 짚는다. 다음 시간부터는 우리 국악과 전통 미술을 만난다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '나라와 인사', slots: [{ id: 'e1', label: '봉주르' }, { id: 'e2', label: '니하오' }], cards: ['프랑스', '중국'] }, prompt: '인사말과 나라를 이어 보세요.', target: { match: { e1: '프랑스', e2: '중국' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '나라 탐험을 마친 뒤 알맞은 생각은 무엇일까요?', options: ['이제 다 알아서 궁금한 것이 없어요', '더 궁금한 것이 새로 생겼어요'], answer: 1, difficulty: 0.1, explain: '알게 된 것이 많아지면 더 궁금한 것도 생겨요.' },
          { type: 'short', prompt: '내가 탐험한 나라에 대해 더 묻고 싶은 것을 쓰세요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '여러 나라 인사',
      items: [
        { type: 'table', prompt: '인사말과 나라를 쓰세요.', columns: ['인사말', '나라'], cells: [['곤니치와', ''], ['신짜오', ''], ['나마스테', ''], ['봉주르', '']] },
        { type: 'choice', prompt: '두 손을 모으고 하는 인사에 ○ 하세요.', options: ['나마스테', '봉주르', '니하오'], answer: '나마스테' },
        { type: 'short', prompt: '다른 나라 탐험에서 가장 놀라웠던 것을 쓰세요.' },
        { type: 'short', prompt: '더 궁금한 것을 물음으로 쓰세요.' },
      ],
      easy: {
        note: '인사할 때 그 나라 몸짓도 해 봐요.',
        items: [
          { type: 'choice', prompt: '중국 인사에 ○ 하세요.', options: ['니하오', '신짜오'], answer: '니하오' },
          { type: 'short', prompt: '더 궁금한 것을 낱말로 쓰세요.' },
          { type: 'draw', prompt: '다른 나라 친구와 인사하는 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 놓으면 초록 테두리가 생겨요. 마음 크기는 세 칸이에요.',
      base: '인사말 세 개를 잇고 친구 세 명과 인사해요. 더 궁금한 것을 물음으로 써요.',
      challenge: '인사말 다섯 개를 잇고, 더 궁금한 물음을 두 개 남겨요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 다른 나라 말을 놀리듯 흉내 낸다 → 그 나라 친구의 마음을 떠올리게 한다. ② 더 궁금한 것이 없다고 한다 → 학교·놀이·아침밥처럼 생활과 이어진 물음을 예로 든다. ③ 인사말을 섞어 기억한다 → 인사말 카드 뒤에 국기 그림을 붙여 둔다. 교실에 다른 나라에서 온 학생이 있으면 원할 때에만 그 나라 인사를 알려 주게 한다.',
  }));

  // ───────────────────────── 25~28차시: 국악기와 전통 무늬를 만나다 ─────────────────────────

  lessons.push(L(25, {
    title: '소리를 듣고 사물놀이 악기 이름 알기',
    objective: '꽹과리·징·장구·북의 소리와 생김새를 살펴 악기 이름을 알고, 쇠로 만든 악기와 가죽을 씌운 악기로 나눌 수 있다.',
    illustration: ART('four paper-cut Korean percussion instruments in a row, a small brass gong held by a string, a large brass gong on a stand, an hourglass-shaped drum and a round barrel drum, with sound lines rising from each', '사물놀이 악기', [
      { motif: 'star', x: 110, y: 80, s: 0.6 }, { motif: 'cloud', x: 340, y: 64 }, { motif: 'flower', x: 390, y: 226, color: 'peach' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '눈을 감게 하고 사물놀이 악기 소리를 하나씩 들려준다(학교 국악 교구나 음원). "어떤 소리가 났나요? 흉내 내어 볼까요?" 학생이 "깽깽", "징~", "둥둥"처럼 흉내 내면 칠판에 받아 적는다. 시연 단추로 소리 설명과 악기 이름이 이어지는 모습을 보여 준다. "이 네 악기를 함께 치는 것을 사물놀이라고 해요."',
        student: '들은 소리 가운데 하나를 입으로 흉내 내어 짝에게 들려줘요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '소리와 악기', slots: [{ id: 's1', label: '둥둥 낮고 굵은 소리' }], cards: ['북', '꽹과리'], shuffle: false }, sequence: [{ match: { s1: '북' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 소리와 악기 짝 짓기', minutes: 12, tool: 'mindmap',
            teacher: '악기 사진(또는 실물)을 보여 주며 하나씩 다시 들려준다. "꽹과리는 작은 쇠 접시를 채로 쳐서 높고 날카로운 소리가 나요. 징은 큰 쇠 접시라 낮게 길게 울려요." 장구가 양쪽 소리가 다르다는 것을 손으로 두드려 보여 준다. 꽹과리와 징을 헷갈리는 학생에게 크기와 소리 길이를 견주게 한다.',
            task: '소리 설명과 악기 이름을 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '소리 설명과 악기 이름을 이어 보세요.', toolOptions: { mode: 'match', topic: '소리와 악기', slots: [{ id: 's1', label: '깽깽 높고 날카로운 쇳소리' }, { id: 's2', label: '징~ 낮게 길게 울리는 쇳소리' }], cards: ['꽹과리', '징'] },
                target: { match: { s1: '꽹과리', s2: '징' } }, difficulty: 0.15 },
              { prompt: '생김새와 악기 이름을 이어 보세요.', toolOptions: { mode: 'match', topic: '생김새와 악기', slots: [{ id: 's1', label: '가운데가 잘록하고 양쪽에 가죽이 있어요' }, { id: 's2', label: '둥근 통에 가죽을 씌웠어요' }, { id: 's3', label: '작은 쇠 접시 모양이에요' }], cards: ['장구', '북', '꽹과리'] },
                target: { match: { s1: '장구', s2: '북', s3: '꽹과리' } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['장구', '북', '꽹과리', { id: '가야금', text: '가야금', why: '가야금은 줄을 뜯는 악기라 사물놀이 악기가 아니에요.' }] } } } },
              { prompt: '사물놀이에 쓰는 악기만 골라 보세요.', toolOptions: { mode: 'pick', basket: '사물놀이 악기', cards: ['꽹과리', '징', '장구', '북', { id: '피아노', text: '피아노', why: '피아노는 서양 악기예요.' }, { id: '단소', text: '단소', why: '단소는 부는 국악기예요. 사물놀이는 치는 악기 넷이에요.' }] },
                target: { pick: ['꽹과리', '징', '장구', '북'] }, difficulty: 0.2 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 쇠 악기와 가죽 악기 나누고 흉내 내기', minutes: 14, tool: 'mindmap',
            teacher: '"꽹과리와 징은 무엇으로 만들었을까요? 장구와 북은요?" 쇠는 손으로 두드리면 차갑고 단단하다는 것, 가죽 악기는 손바닥으로 두드리면 \'둥\' 소리가 난다는 것을 실물로 만져 보게 한다(실물이 없으면 사진). 나눈 뒤에는 모둠 넷이 악기 하나씩 맡아 입소리와 손짓으로 "깽 징 덩 둥"을 차례로 내어 본다.',
            task: '악기를 만든 재료에 따라 나누고, 모둠에서 입소리로 사물놀이 흉내를 내요.',
            levels: CARD_LV,
            items: [
              { prompt: '악기를 만든 재료에 따라 알맞은 칸에 넣어 보세요.', toolOptions: { mode: 'sort', slots: [{ id: 'iron', label: '쇠로 만든 악기' }, { id: 'skin', label: '가죽을 씌운 악기' }], cards: ['꽹과리', '징', '장구', '북'] },
                target: { sort: { iron: ['꽹과리', '징'], skin: ['장구', '북'] } }, difficulty: 0.2,
                hints: ['반짝이는 접시 모양인지, 통에 무언가를 씌웠는지 살펴봐요.', '접시 모양 둘은 쇠, 통 모양 둘은 가죽이에요.', '꽹과리·징은 쇠, 장구·북은 가죽 칸이에요.'] },
              { prompt: '소리가 가장 길게 울리는 악기 하나만 골라 보세요.', toolOptions: { mode: 'pick', basket: '가장 길게 울려요', cards: ['징', { id: '꽹과리', text: '꽹과리', why: '꽹과리는 짧고 높게 깽깽 울려요.' }, { id: '북', text: '북', why: '북은 둥 하고 짧게 울려요.' }] },
                target: { pick: ['징'] }, difficulty: 0.15 },
              { prompt: '모둠에서 악기 하나씩 맡아 입소리로 사물놀이 흉내를 냈으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"가장 마음에 든 악기 소리는 무엇이었나요? 왜 그런가요?" 서너 명이 말한다. 다음 시간에는 장구를 손으로 직접 쳐 보며 장구 소리 이름을 배운다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '소리와 악기', slots: [{ id: 'e1', label: '둥둥 굵은 소리가 나는 둥근 통' }, { id: 'e2', label: '양쪽 소리가 다른 잘록한 통' }], cards: ['북', '장구'] }, prompt: '설명과 악기 이름을 이어 보세요.', target: { match: { e1: '북', e2: '장구' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '사물놀이 악기 가운데 쇠로 만든 것은?', options: ['꽹과리', '장구', '북'], answer: 0, difficulty: 0.15, explain: '꽹과리와 징은 쇠로 만들었어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '사물놀이 악기',
      items: [
        { type: 'table', prompt: '악기마다 소리를 흉내 내는 말을 쓰세요.', columns: ['악기', '소리 흉내 말'], cells: [['꽹과리', ''], ['징', ''], ['장구', ''], ['북', '']] },
        { type: 'choice', prompt: '가죽을 씌운 악기에 ○ 하세요.', options: ['북', '징', '꽹과리'], answer: '북' },
        { type: 'draw', prompt: '가장 마음에 든 악기를 그려 보세요.' },
        { type: 'short', prompt: '그 악기가 마음에 든 까닭을 쓰세요.' },
      ],
      easy: {
        note: '쇠 악기: 반짝이는 접시 · 가죽 악기: 둥근 통',
        items: [
          { type: 'choice', prompt: '둥둥 소리가 나는 악기에 ○ 하세요.', options: ['북', '꽹과리'], answer: '북' },
          { type: 'choice', prompt: '징은 무엇으로 만들었을까요?', options: ['쇠', '가죽'], answer: '쇠' },
          { type: 'draw', prompt: '마음에 든 악기를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 놓으면 초록 테두리가 생겨요. 악기 둘씩 견주어 봐요.',
      base: '소리·생김새로 악기 넷을 알고, 재료에 따라 나누어요.',
      challenge: '다른 국악기 함정 카드를 골라내고, 소리가 다른 까닭을 재료로 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 꽹과리와 징을 헷갈린다 → 크기(작다/크다)와 소리 길이(짧다/길다)를 짝으로 기억하게 한다. ② 국악기는 모두 치는 악기라고 여긴다 → 27차시에서 뜯고·켜고·부는 악기를 만난다고 예고한다. 소리가 큰 악기는 음량을 낮추어 들려주고, 귀가 예민한 학생은 귀를 막아도 된다고 미리 알린다.',
  }));

  lessons.push(L(26, {
    title: '무릎 장구로 덩·쿵·덕 쳐 보기',
    objective: '장구의 북편·채편과 구음 덩·쿵·덕을 알고, 무릎 장구와 장단판으로 짧은 장단을 따라 칠 수 있다.',
    illustration: ART('a child sitting cross-legged tapping both knees like a Korean hourglass drum, the left knee marked with a round drum side and the right knee with a thin stick side, sound words floating above', '무릎 장구', [
      { motif: 'sun', x: 120, y: 70, s: 0.6 }, { motif: 'flower', x: 380, y: 226, color: 'rose' }, { motif: 'leaf', x: 110, y: 222 }]),
    safety: ['무릎은 손바닥으로 가볍게 두드리고 세게 내리치지 않아요.', '장구채는 휘두르지 않고, 친구 쪽으로 향하지 않아요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '장구를 앞에 놓고 왼쪽을 손바닥으로 "쿵", 오른쪽을 채로 "덕", 두 쪽을 함께 "덩" 하고 친다. "장구 소리에도 이름이 있어요. 왼쪽 손바닥 쪽은 북편, 오른쪽 채 쪽은 채편이에요." 시연 단추로 장단판에 소리 이름이 놓이는 모습을 보여 준다. 무릎을 장구 삼아 왼 무릎 쿵, 오른 무릎 덕, 두 무릎 덩을 함께 쳐 본다.',
        student: '선생님이 말하는 소리 이름에 맞추어 무릎을 쳐요.',
        demo: { tool: 'keyboard', options: { mode: 'janggu', beats: 3, group: 3, strokes: ['덩', '쿵', '덕'] }, sequence: [{ strokes: ['덩', '쿵', '덕'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 장구 소리 이름 알기', minutes: 10, tool: 'mindmap',
            teacher: '"덩은 어디를 칠까요?" 학생이 무릎으로 답하게 한다. 쿵과 덕을 바꾸어 치는 학생에게 "왼쪽은 둥글고 낮은 소리, 오른쪽은 가늘고 높은 소리"를 들려주며 손을 대어 보게 한다. 왼손잡이 학생도 오늘은 같은 쪽으로 맞추어 친다고 알린다(장구 생김새가 그렇다는 것).',
            task: '장구 소리 이름과 치는 곳을 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '장구 소리 이름과 치는 곳을 이어 보세요.', toolOptions: { mode: 'match', topic: '장구 소리', slots: [{ id: 's1', label: '덩' }, { id: 's2', label: '쿵' }, { id: 's3', label: '덕' }], cards: ['두 쪽을 함께 쳐요', '왼쪽 북편을 쳐요', '오른쪽 채편을 쳐요'] },
                target: { match: { s1: '두 쪽을 함께 쳐요', s2: '왼쪽 북편을 쳐요', s3: '오른쪽 채편을 쳐요' } }, difficulty: 0.2,
                hints: ['소리 이름마다 손 하나인지 두 손인지 먼저 떠올려 보세요.', '두 손을 함께 쓰는 소리가 하나 있어요. 낮게 울리는 소리는 왼쪽이에요.', '덩은 함께, 쿵은 왼쪽 북편, 덕은 오른쪽 채편이에요.'] },
              { prompt: '장구 소리를 낼 때 알맞은 모습만 골라 보세요.', toolOptions: { mode: 'pick', basket: '알맞은 모습', cards: ['소리 이름을 입으로 말하며 쳐요', '친구와 박을 맞추어 쳐요', { id: '세게', text: '무릎을 있는 힘껏 내리쳐요', why: '세게 치면 다쳐요. 가볍게 두드려도 소리가 나요.' }, { id: '휘둘러', text: '채를 빙빙 휘둘러요', why: '채를 휘두르면 친구가 다칠 수 있어요.' }] },
                target: { pick: ['소리 이름을 입으로 말하며 쳐요', '친구와 박을 맞추어 쳐요'] }, difficulty: 0.1 },
              { prompt: '무릎 장구에서 왼쪽 무릎만 치는 소리 카드만 골라 보세요.', toolOptions: { mode: 'pick', basket: '왼쪽 무릎만', cards: ['쿵', { id: '덩', text: '덩', why: '덩은 두 무릎을 함께 쳐요.' }, { id: '덕', text: '덕', why: '덕은 오른쪽 무릎(채편)이에요.' }] },
                target: { pick: ['쿵'] }, difficulty: 0.15,
                hints: ['왼쪽은 장구의 북편 자리예요. 손 하나만 쓰는 소리를 떠올려 보세요.', '두 손을 함께 쓰는 소리는 빼요. 낮고 둥근 소리를 찾아요.', '왼쪽 무릎만 치는 소리는 쿵이에요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 장단판으로 짧은 장단 따라 치기', minutes: 16, tool: 'keyboard',
            teacher: '"장단 듣기를 누르고 들은 대로 칸에 소리 이름을 놓아요. 빈칸은 쉬는 자리예요." 판에 놓은 뒤에는 입으로 "덩 덕 쿵" 하고 말하며 무릎으로 친다. 짝끼리 한 사람이 판을 짚으며 말하고 다른 사람이 무릎으로 친다. 쉼을 건너뛰는 학생에게 쉼 칸에서는 손을 무릎 위에 살짝 올려 두게 한다.',
            task: '장단을 듣고 칸에 소리 이름을 놓은 뒤, 무릎 장구로 쳐요.',
            levels: {
              easy: { mode: 'janggu', beats: 3, group: 3, strokes: ['덩', '쿵', '덕'] },
              base: { mode: 'janggu', beats: 6, group: 3, strokes: ['덩', '쿵', '덕'] },
              challenge: { mode: 'janggu', beats: 6, group: 3, strokes: ['덩', '쿵', '덕', '기덕'] },
            },
            items: [
              { prompt: '장단 듣기를 누르고, 들은 세 칸 장단을 놓아 보세요.', toolOptions: { beats: 3, pattern: ['덩', '덕', '쿵'] }, target: { strokes: ['덩', '덕', '쿵'] }, difficulty: 0.15,
                hints: ['처음 소리가 두 손을 함께 쓰는 소리였는지 다시 들어 보세요.', '가운데는 가늘고 높은 소리, 끝은 낮은 소리예요.', '덩 · 덕 · 쿵 차례예요.'] },
              { prompt: '장단 듣기를 누르고, 쉼이 있는 여섯 칸 장단을 놓아 보세요.', toolOptions: { pattern: ['덩', '', '덕', '쿵', '덕', ''] }, target: { strokes: ['덩', '', '덕', '쿵', '덕', ''] }, difficulty: 0.25,
                levels: { easy: { prompt: '장단 듣기를 누르고, 쉼이 있는 세 칸 장단을 놓아 보세요.', toolOptions: { beats: 3, pattern: ['덩', '', '덕'] }, target: { strokes: ['덩', '', '덕'] } } },
                hints: ['소리가 나지 않는 칸이 두 군데 있어요. 손을 쉬는 자리를 먼저 찾아요.', '둘째 칸과 여섯째 칸이 쉼이에요. 넷째 칸은 낮은 소리예요.', '덩 · 쉼 · 덕 · 쿵 · 덕 · 쉼 차례예요.'],
                conclude: '쉬는 칸까지 지켜야 장단이 바르게 들려요.' },
              { prompt: '짝과 번갈아 판을 짚고 무릎 장구로 장단을 쳐 보았으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '모두 함께 무릎 장구로 오늘 친 여섯 칸 장단을 두 번 친다. "장구를 칠 때 입으로 소리 이름을 말하니 어땠나요?" 두세 명이 말한다. 다음 시간에는 뜯고, 켜고, 부는 국악기를 만난다고 알린다.',
        exitTicket: [
          { type: 'choice', prompt: '장구에서 두 쪽을 함께 치는 소리는 무엇일까요?', options: ['덩', '쿵', '덕'], answer: 0, difficulty: 0.15, explain: '덩은 북편과 채편을 함께 쳐요.' },
          { type: 'choice', prompt: '장구 오른쪽 채편을 채로 치는 소리는?', options: ['쿵', '덕', '덩'], answer: 1, difficulty: 0.2, explain: '덕은 오른쪽 채편을 채로 쳐요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '무릎 장구',
      items: [
        { type: 'table', prompt: '소리 이름마다 치는 곳을 쓰세요.', columns: ['소리 이름', '치는 곳'], cells: [['덩', ''], ['쿵', ''], ['덕', '']] },
        { type: 'blank', prompt: '빈칸에 들어갈 소리 이름을 쓰세요.', text: '왼쪽만 치면 ___, 오른쪽만 치면 ___', answer: '쿵, 덕' },
        { type: 'short', prompt: '내가 만든 세 칸 장단을 소리 이름으로 쓰세요.' },
        { type: 'draw', prompt: '장구를 그리고 북편과 채편에 이름을 쓰세요.' },
      ],
      easy: {
        note: '왼 무릎 쿵 · 오른 무릎 덕 · 두 무릎 덩',
        items: [
          { type: 'choice', prompt: '두 무릎을 함께 치는 소리에 ○ 하세요.', options: ['덩', '쿵'], answer: '덩' },
          { type: 'choice', prompt: '왼쪽 무릎만 치는 소리에 ○ 하세요.', options: ['쿵', '덕'], answer: '쿵' },
          { type: 'draw', prompt: '장구를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '세 칸 장단만 놓고 쳐요. 소리 이름은 셋이에요.',
      base: '쉼이 있는 여섯 칸 장단을 놓고 쳐요.',
      challenge: '기덕까지 있는 판에서 들은 장단을 골라 놓아요. 짝에게 내가 만든 장단을 들려줘요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 쿵과 덕을 바꾼다 → 왼쪽은 손바닥(둥근 소리), 오른쪽은 채(가는 소리)로 손 모양을 정해 둔다. ② 쉼 칸을 건너뛴다 → 쉼에서는 손을 무릎에 올려 두고 마음속으로 "쉬고"라고 말하게 한다. ③ 세게 치는 학생 → 작은 소리로 치기 놀이로 힘 조절을 연습한다. 실제 장구가 있으면 모둠별로 돌아가며 한 번씩 쳐 보게 한다.',
  }));

  lessons.push(L(27, {
    title: '뜯고 켜고 부는 국악기 소리 견주기',
    objective: '가야금·해금·단소·장구가 소리를 내는 방법(뜯기·켜기·불기·치기)을 알고, 몸짓으로 연주 흉내를 내어 짝이 맞히게 할 수 있다.',
    illustration: ART('four paper-cut Korean traditional instruments, a long zither with twelve strings being plucked, a two-string fiddle with a bow, a short bamboo flute and an hourglass drum, each with a little hand showing how it is played', '소리 내는 방법', [
      { motif: 'leaf', x: 110, y: 222 }, { motif: 'cloud', x: 330, y: 64 }, { motif: 'flower', x: 390, y: 226, color: 'lavender' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '고무줄을 손가락으로 튕기고, 빈 병 입구에 입김을 불어 보인다. "소리를 내는 방법이 다르지요? 국악기도 그래요." 가야금·해금·단소 연주 장면을 짧게 보여 준다. 시연 단추로 악기와 소리 내는 방법이 이어지는 모습을 보여 준다.',
        student: '고무줄 튕기기 소리와 병 불기 소리 가운데 어느 쪽이 좋은지 손을 들어요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '소리 내는 방법', slots: [{ id: 's1', label: '가야금' }], cards: ['손가락으로 줄을 뜯어요', '입으로 불어요'], shuffle: false }, sequence: [{ match: { s1: '손가락으로 줄을 뜯어요' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 소리 내는 방법으로 나누기', minutes: 13, tool: 'mindmap',
            teacher: '"가야금은 손가락으로 줄을 뜯어요. 해금은 활로 줄을 문질러 켜요. 단소와 대금은 입으로 불어요." 연주 사진을 다시 보며 손과 입이 어디에 있는지 찾게 한다. 해금을 "뜯는다"고 하는 학생에게 활이 줄 사이를 오가는 모습을 보여 준다.',
            task: '국악기를 소리 내는 방법에 따라 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '악기와 소리 내는 방법을 이어 보세요.', toolOptions: { mode: 'match', topic: '소리 내는 방법', slots: [{ id: 's1', label: '해금' }, { id: 's2', label: '단소' }], cards: ['활로 줄을 문질러 켜요', '입으로 불어요'] },
                target: { match: { s1: '활로 줄을 문질러 켜요', s2: '입으로 불어요' } }, difficulty: 0.15 },
              { prompt: '국악기를 소리 내는 방법에 따라 알맞은 칸에 넣어 보세요.', toolOptions: { mode: 'sort', slots: [{ id: 'pluck', label: '줄을 뜯어요' }, { id: 'bow', label: '줄을 켜요' }, { id: 'blow', label: '입으로 불어요' }, { id: 'hit', label: '두드려 쳐요' }], cards: ['가야금', '해금', '단소', '대금', '장구'] },
                target: { sort: { pluck: ['가야금'], bow: ['해금'], blow: ['단소', '대금'], hit: ['장구'] } }, difficulty: 0.3,
                hints: ['연주하는 사람의 손과 입이 어디에 있는지 떠올려 보세요.', '활을 쓰는 악기가 하나, 입에 대는 악기가 둘이에요.', '가야금 뜯기, 해금 켜기, 단소·대금 불기, 장구 치기예요.'],
                levels: { challenge: { toolOptions: { cards: ['가야금', '해금', '단소', '대금', '장구', '북', '피리'] }, target: { sort: { pluck: ['가야금'], bow: ['해금'], blow: ['단소', '대금', '피리'], hit: ['장구', '북'] } }, prompt: '국악기 일곱 개를 소리 내는 방법에 따라 알맞은 칸에 넣어 보세요.' } } },
              { prompt: '줄이 있는 국악기만 골라 보세요.', toolOptions: { mode: 'pick', basket: '줄이 있어요', cards: ['가야금', '해금', { id: '단소', text: '단소', why: '단소는 대나무 관에 구멍이 있는 악기예요.' }, { id: '징', text: '징', why: '징은 쇠 접시예요.' }] },
                target: { pick: ['가야금', '해금'] }, difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 몸짓 연주 흉내 맞히기', minutes: 13, tool: 'story',
            teacher: '"말하지 않고 몸짓으로만 악기를 연주해 볼까요? 짝이 어느 악기인지 맞혀요." 가야금은 무릎 위 줄을 손가락으로 뜯는 몸짓, 해금은 무릎에 세우고 활을 옆으로 미는 몸짓, 단소는 두 손을 세로로 모아 입에 대는 몸짓이다. 맞힌 짝은 그 악기의 소리를 입으로 흉내 내어 답한다.',
            task: '몸짓 설명을 악기와 잇고, 짝과 몸짓 연주 맞히기를 해요.',
            levels: CARD_LV,
            items: [
              { prompt: '하은이의 몸짓 설명 빈칸에 알맞은 악기를 넣어 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'b1', who: '하은', label: '무릎 위에 눕힌 긴 줄을 손가락으로 뜯어요. 이것은 ___예요.' }, { id: 'b2', who: '하은', label: '무릎에 세우고 활을 옆으로 밀고 당겨요. 이것은 ___이에요.' }], cards: ['가야금', '해금', '단소'] },
                target: { fill: { b1: '가야금', b2: '해금' } }, difficulty: 0.2,
                hints: ['몸짓에서 손가락을 쓰는지, 활을 쓰는지 살펴봐요.', '손가락으로 뜯는 악기는 긴 줄이 많아요.', '첫째는 가야금, 둘째는 해금이에요.'] },
              { prompt: '단소를 부는 몸짓 차례대로 카드를 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: 'hold', text: '두 손으로 세로로 잡아요', motif: 'leaf' }, { id: 'lip', text: '입술을 끝에 대요', motif: 'cloud' }, { id: 'blow', text: '살살 바람을 불어요', motif: 'wave' }], slots: ['1', '2', '3'] },
                target: { order: ['hold', 'lip', 'blow'] }, difficulty: 0.15 },
              { prompt: '짝과 번갈아 몸짓 연주를 하고 악기를 맞혀 보았으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"뜯는 소리, 켜는 소리, 부는 소리, 치는 소리 가운데 어느 소리가 가장 좋았나요?" 손을 들어 수를 세어 본다. 다음 시간에는 우리 옛 물건에 있는 무늬를 찾는다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '소리 내는 방법', slots: [{ id: 'e1', label: '대금' }, { id: 'e2', label: '가야금' }], cards: ['입으로 불어요', '손가락으로 줄을 뜯어요'] }, prompt: '악기와 소리 내는 방법을 이어 보세요.', target: { match: { e1: '입으로 불어요', e2: '손가락으로 줄을 뜯어요' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '활로 줄을 문질러 소리를 내는 국악기는?', options: ['해금', '단소', '북'], answer: 0, difficulty: 0.15, explain: '해금은 활로 줄을 켜서 소리를 내요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '국악기 소리 내는 방법',
      items: [
        { type: 'table', prompt: '악기마다 소리 내는 방법을 쓰세요.', columns: ['악기', '소리 내는 방법'], cells: [['가야금', ''], ['해금', ''], ['단소', ''], ['장구', '']] },
        { type: 'choice', prompt: '입으로 부는 악기에 ○ 하세요.', options: ['대금', '가야금', '해금'], answer: '대금' },
        { type: 'draw', prompt: '연주해 보고 싶은 국악기를 그려 보세요.' },
        { type: 'short', prompt: '그 악기를 연주해 보고 싶은 까닭을 쓰세요.' },
      ],
      easy: {
        note: '뜯어요 · 켜요 · 불어요 · 쳐요',
        items: [
          { type: 'choice', prompt: '가야금은 어떻게 소리를 낼까요?', options: ['줄을 뜯어요', '입으로 불어요'], answer: '줄을 뜯어요' },
          { type: 'choice', prompt: '단소는 어떻게 소리를 낼까요?', options: ['입으로 불어요', '두드려요'], answer: '입으로 불어요' },
          { type: 'draw', prompt: '좋아하는 국악기를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 놓으면 초록 테두리가 생겨요. 악기 둘씩 소리 내는 방법을 이어요.',
      base: '국악기 다섯 개를 소리 내는 방법으로 나누어요.',
      challenge: '국악기 일곱 개를 나누고, 몸짓 연주를 말없이 해서 짝이 맞히게 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 해금을 뜯는 악기로 여긴다 → 활이 줄 사이에서 오가는 모습을 영상으로 다시 보여 준다. ② 대금과 단소를 같은 악기로 여긴다 → 대금은 옆으로 길게 들고, 단소는 세로로 짧게 든다는 차이를 몸짓으로 보인다. 단소나 리코더를 실제로 불게 할 때에는 입에 대는 악기를 친구와 나누어 쓰지 않는다.',
  }));

  lessons.push(L(28, {
    title: '색동 무늬의 되풀이 찾기',
    objective: '색동저고리 같은 우리 옛 물건의 무늬에서 되풀이되는 색 차례를 찾고, 빈칸을 채우거나 틀린 칸을 찾을 수 있다.',
    illustration: ART('a child-sized Korean jacket with bright rainbow striped sleeves, next to a pouch and a pillow end decorated with repeating colour bands and cloud shapes', '색동 무늬', [
      { motif: 'cloud', x: 330, y: 64 }, { motif: 'star', x: 110, y: 82, s: 0.6 }, { motif: 'flower', x: 390, y: 226, color: 'buttercup' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '색동저고리 사진(또는 실물)을 보여 준다. "소매에 어떤 색이 보이나요? 어떤 차례로 놓였을까요?" 학생과 함께 색 이름을 소매 끝부터 차례로 읽는다. "같은 색 차례가 되풀이되는 것을 찾았나요? 이렇게 되풀이되는 무늬를 오늘 찾아요." 시연 단추로 무늬 빈칸이 채워지는 모습을 보여 준다.',
        student: '내 옷이나 필통에서 되풀이되는 무늬를 하나 찾아 손가락으로 가리켜요.',
        demo: { tool: 'pattern', options: { seq: ['square:rose', 'square:buttercup', 'square:sky', 'square:rose', 'square:buttercup', null] }, sequence: [{ fill: ['square:sky'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 색동 줄의 빈칸 채우기', minutes: 13, tool: 'pattern',
            teacher: '"색 묶음을 손가락으로 끊어 읽어 볼까요? 분홍-노랑-파랑 / 분홍-노랑-파랑." 묶음마다 손뼉을 치며 읽게 한다. 빈칸 바로 앞 색만 보고 답하는 학생에게 맨 앞부터 다시 읽어 보게 한다. 색동은 여러 색 천을 이어 붙여 만든다는 것도 알려 준다.',
            task: '색동 줄에서 되풀이되는 색 묶음을 찾아 빈칸을 채워요.',
            levels: CARD_LV,
            items: [
              { prompt: '색동 줄에서 두 색이 되풀이돼요. 빈칸을 채워 보세요.', toolOptions: { seq: ['square:rose', 'square:mint', 'square:rose', 'square:mint', null, null] }, target: { fill: ['square:rose', 'square:mint'] }, difficulty: 0.1,
                hints: ['줄 맨 앞부터 두 칸씩 끊어 읽어 보세요.', '묶음 첫 칸 색이 빈칸 첫 칸에 와요.', '분홍 다음 초록이에요.'] },
              { prompt: '색동 줄에서 세 색이 되풀이돼요. 빈칸을 채워 보세요.', toolOptions: { seq: ['square:rose', 'square:buttercup', 'square:sky', 'square:rose', null, 'square:sky', null, 'square:buttercup', 'square:sky'], palette: ['square:rose', 'square:buttercup', 'square:sky', 'square:lavender'] }, target: { fill: ['square:buttercup', 'square:rose'] }, difficulty: 0.25,
                hints: ['맨 앞부터 세 칸씩 끊어 읽어 보세요.', '둘째 묶음 가운데 칸과 셋째 묶음 첫 칸이 비었어요.', '분홍-노랑-파랑 묶음이라 빈칸은 노랑, 분홍이에요.'],
                conclude: '맨 앞부터 묶음을 끊어 읽으면 빈칸을 찾을 수 있어요.' },
              { prompt: '네 색이 되풀이되는 색동 줄이에요. 빈칸을 채워 보세요.', toolOptions: { seq: ['square:rose', 'square:buttercup', 'square:mint', 'square:sky', 'square:rose', 'square:buttercup', null, null], palette: ['square:rose', 'square:buttercup', 'square:mint', 'square:sky', 'square:lavender'] }, target: { fill: ['square:mint', 'square:sky'] }, difficulty: 0.3,
                hints: ['처음 네 칸이 한 묶음인지 살펴보세요.', '둘째 묶음은 분홍, 노랑까지 놓였어요. 그다음 두 색을 찾아요.', '빈칸은 초록, 파랑이에요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 틀린 칸 찾고 색 띠 이어 붙이기', minutes: 13, tool: 'pattern',
            teacher: '"옷을 짓던 사람이 실수로 한 칸을 다른 색 천으로 붙였어요. 어디일까요?" 판에서 틀린 칸을 찾은 뒤, 모둠마다 색종이 띠를 받아 정한 색 차례대로 긴 종이에 이어 붙여 색동 소매를 만든다. 다 붙인 뒤에는 짝과 바꾸어 틀린 칸을 손가락으로 짚으며 "분홍, 파랑, 분홍, 파랑" 하고 소리 내어 읽게 한다.',
            task: '색동 줄에서 틀린 칸을 찾고, 색종이 띠로 색동 소매를 만들어요.',
            levels: CARD_LV,
            items: [
              { prompt: '색동 줄에서 차례가 틀린 칸 하나를 찾아 눌러 보세요.', toolOptions: { mode: 'odd', seq: ['square:rose', 'square:sky', 'square:rose', 'square:sky', 'square:sky', 'square:sky', 'square:rose', 'square:sky'] }, target: { odd: 4 }, difficulty: 0.25,
                hints: ['두 칸씩 끊어 읽으며 묶음이 같은지 보세요.', '셋째 묶음의 첫 칸이 이상해요.', '다섯째 칸이 분홍이어야 해요.'] },
              { prompt: '세 색 색동 줄에서 차례가 틀린 칸 하나를 찾아 눌러 보세요.', toolOptions: { mode: 'odd', seq: ['square:rose', 'square:buttercup', 'square:mint', 'square:rose', 'square:buttercup', 'square:mint', 'square:rose', 'square:mint', 'square:mint'] }, target: { odd: 7 }, difficulty: 0.3,
                hints: ['세 칸씩 끊어 읽으며 묶음이 같은지 보세요.', '셋째 묶음을 첫째 묶음과 견주어 보세요.', '여덟째 칸이 노랑이어야 해요.'] },
              { prompt: '색종이 띠로 색동 소매를 만들고 짝과 바꾸어 확인했으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '모둠의 색동 소매를 칠판에 나란히 붙인다. "모둠마다 묶음 색이 달라요. 어느 묶음이 되풀이되는지 읽어 볼까요?" 한 모둠씩 읽는다. 다음 시간에는 옛날부터 불러 온 전래 동요를 부르며 장단을 맞춘다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'pattern', options: { seq: ['square:lavender', 'square:buttercup', 'square:lavender', 'square:buttercup', 'square:lavender', null] }, prompt: '보라와 노랑이 되풀이되는 색동 줄이에요. 빈칸을 채워 보세요.', target: { fill: ['square:buttercup'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '색동은 어떻게 만들었을까요?', options: ['여러 색 천을 이어 붙였어요', '한 가지 색 천만 썼어요'], answer: 0, difficulty: 0.15, explain: '색동은 여러 색 천을 차례대로 이어 붙여 만들어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '색동 무늬',
      items: [
        { type: 'blank', prompt: '되풀이되는 색 차례를 보고 빈칸에 색 이름을 쓰세요.', text: '빨강 - 노랑 - 파랑 - 빨강 - ___ - 파랑', answer: '노랑' },
        { type: 'short', prompt: '내가 만든 색동 소매의 색 묶음을 차례대로 쓰세요.' },
        { type: 'draw', prompt: '색동 소매를 색칠해 보세요. 색 묶음을 세 번 되풀이해요.' },
        { type: 'short', prompt: '우리 반 물건에서 찾은 되풀이 무늬를 쓰세요.' },
      ],
      easy: {
        note: '맨 앞부터 묶음을 끊어 읽어요.',
        items: [
          { type: 'blank', prompt: '빈칸에 색 이름을 쓰세요.', text: '빨강 - 파랑 - 빨강 - 파랑 - ___', answer: '빨강' },
          { type: 'draw', prompt: '두 색으로 색동 줄을 색칠해 보세요.' },
          { type: 'short', prompt: '내가 고른 두 색을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '두 색 묶음부터 채워요. 맞는 칸에 놓으면 초록 테두리가 생겨요.',
      base: '세 색 묶음의 빈칸을 채우고 틀린 칸을 찾아요.',
      challenge: '네 색 묶음의 빈칸을 채우고, 색동 소매를 네 색 묶음으로 만들어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 빈칸 바로 앞 색만 보고 답한다 → 맨 앞부터 손뼉 치며 묶음을 끊어 읽게 한다. ② 묶음 길이를 잘못 정한다 → 처음 색이 다시 나오는 곳에 손가락을 짚게 한다. 색동은 옷뿐 아니라 베갯모·주머니에도 쓰였다는 것을 사진으로 보여 주어 생활과 잇는다. 색을 구별하기 어려운 학생에게는 활동지의 무늬 결로 구별하게 한다.',
  }));

  // ───────────────────────── 29~32차시: 전래 동요·장단·전통 미술 체험 ─────────────────────────

  lessons.push(L(29, {
    title: '전래 동요 두껍아 두껍아 부르며 박 맞추기',
    objective: '예부터 전해 오는 전래 동요 「두껍아 두껍아」를 부르며 박에 맞추어 손등을 토닥이고, 손뼉과 쉼으로 된 짧은 리듬을 놓을 수 있다.',
    illustration: ART('two children crouching in a sandbox, one hand covered with a little mound of sand while the other hand pats it gently, a smiling paper toad peeking out beside a tiny sand house', '두껍아 두껍아', [
      { motif: 'sun', x: 120, y: 70, s: 0.6 }, { motif: 'leaf', x: 380, y: 222 }, { motif: 'hills', y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"옛날 아이들은 모래밭에서 손등에 모래를 덮고 토닥이며 노래를 불렀어요. 누가 지었는지 모르지만 오래오래 전해 와서 \'전래 동요\'라고 해요." 「두껍아 두껍아」(전래 동요, 작자 미상)를 천천히 불러 들려준다: "두껍아 두껍아 헌 집 줄게 새 집 다오." 시연 단추로 손뼉 블록이 박에 놓이는 모습을 보여 준다.',
        student: '선생님 노래를 듣고 "헌 집 줄게"를 따라 불러요.',
        demo: { tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 1, blocks: ['q', 'h', 'qr'] }, sequence: [{ rhythm: ['q', 'q', 'q', 'q'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 노랫말 차례 익히고 놀이하며 부르기', minutes: 12, tool: 'story',
            teacher: '노랫말을 한 줄씩 메아리로 따라 부른다. "두꺼비에게 무엇을 주고 무엇을 달라고 하나요?" 헌 집과 새 집을 바꾸어 말하는 학생에게 노래를 다시 들려준다. 모래 대신 짝의 손등 위에 내 손바닥을 살짝 얹고, 박마다 토닥이며 부른다. 끝 박에서 손을 살며시 빼는 놀이를 두 번 한다.',
            task: '노랫말을 차례대로 놓고, 짝과 손등 토닥이기 놀이를 하며 불러요.',
            levels: CARD_LV,
            items: [
              { prompt: '전래 동요 「두껍아 두껍아」 노랫말을 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: 'call', text: '두껍아 두껍아', motif: 'leaf' }, { id: 'old', text: '헌 집 줄게', motif: 'hills' }, { id: 'new', text: '새 집 다오', motif: 'star' }], slots: ['1', '2', '3'] },
                target: { order: ['call', 'old', 'new'] }, difficulty: 0.1 },
              { prompt: '노랫말 빈칸에 알맞은 낱말 카드를 넣어 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'b1', who: '노래', label: '___ 집 줄게' }, { id: 'b2', who: '노래', label: '___ 집 다오' }], cards: ['헌', '새', '큰'] },
                target: { fill: { b1: '헌', b2: '새' } }, difficulty: 0.15 },
              { prompt: '짝의 손등을 박마다 살살 토닥이며 노래를 두 번 불렀으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 손뼉과 쉼으로 박 놓기', minutes: 14, tool: 'keyboard',
            teacher: '"노래를 부르며 하나 둘 셋 넷, 박마다 손뼉을 쳐요." 손뼉 블록 하나가 한 박, 긴 블록은 손을 모은 채 두 박을 세는 것, 쉼표는 손을 무릎에 내리는 것이라고 정한다. 판에 놓은 뒤에는 놓은 대로 손뼉을 치며 노래한다. 쉼표에서도 손뼉을 치는 학생에게 "쉼표는 손도 쉬어요"라고 말한다.',
            task: '들은 리듬을 블록으로 놓고, 놓은 대로 손뼉을 치며 노래해요.',
            levels: {
              easy: { mode: 'rhythm', meter: 4, measures: 1, blocks: ['q', 'h', 'qr'], showBeats: true },
              base: { mode: 'rhythm', meter: 4, measures: 2, blocks: ['q', 'h', 'qr'] },
              challenge: { mode: 'rhythm', meter: 4, measures: 2, blocks: ['q', 'e', 'h', 'qr'] },
            },
            items: [
              { prompt: '리듬 듣기를 누르고, 손뼉 둘과 긴 소리 하나로 된 한 마디를 놓아 보세요.', toolOptions: { pattern: ['q', 'q', 'h'], measures: 1 }, target: { rhythm: ['q', 'q', 'h'] }, difficulty: 0.15,
                hints: ['짧은 소리와 긴 소리가 몇 번씩 나왔는지 다시 들어 보세요.', '짧은 소리가 먼저 두 번, 끝에 긴 소리 한 번이에요.', '한 박 블록 두 개, 두 박 블록 하나예요.'] },
              { prompt: '리듬 듣기를 누르고, 쉼이 있는 두 마디 손뼉 리듬을 놓아 보세요.', toolOptions: { pattern: ['q', 'q', 'q', 'qr', 'q', 'q', 'h'] }, target: { rhythm: ['q', 'q', 'q', 'qr', 'q', 'q', 'h'] }, difficulty: 0.25,
                levels: { easy: { prompt: '리듬 듣기를 누르고, 쉼이 있는 한 마디 손뼉 리듬을 놓아 보세요.', toolOptions: { pattern: ['q', 'q', 'q', 'qr'] }, target: { rhythm: ['q', 'q', 'q', 'qr'] } } },
                hints: ['소리가 나지 않는 박이 어디에 있는지 먼저 찾아요.', '첫 마디 넷째 박이 쉼이고, 둘째 마디 끝은 긴 소리예요.', '한 박 셋, 쉼 하나 / 한 박 둘, 두 박 하나예요.'],
                conclude: '쉼에서 손을 쉬면 노래의 박이 또렷해져요.' },
              { prompt: '마디가 모두 4박이 되도록 노래에 맞출 내 손뼉 리듬을 놓아 보세요.', target: { beats: true }, difficulty: 0.25,
                hints: ['블록마다 몇 박인지 세어 보세요.', '한 마디 안 블록 박 수를 더해 4가 되어야 해요.', '한 박 넷, 또는 두 박 둘처럼 4박을 채워요.'] },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '반 전체가 둘로 나뉘어 한쪽은 노래하고 다른 쪽은 자기가 놓은 손뼉 리듬을 친다. 바꾸어 한 번 더 한다. "옛날 아이들은 왜 이 노래를 오래 불렀을까요?" 두세 명이 말한다.',
        exitTicket: [
          { type: 'choice', prompt: '누가 지었는지 모르지만 예부터 전해 오는 노래를 무엇이라고 할까요?', options: ['전래 동요', '광고 노래', '만화 노래'], answer: 0, difficulty: 0.15, explain: '예부터 사람들 입으로 전해 온 노래를 전래 동요라고 해요.' },
          { type: 'tool', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 1, blocks: ['q', 'h', 'qr'] }, prompt: '한 마디가 4박이 되도록 손뼉 리듬을 놓아 보세요.', target: { beats: true }, difficulty: 0.2 },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '두껍아 두껍아',
      items: [
        { type: 'blank', prompt: '노랫말 빈칸을 채우세요.', text: '두껍아 두껍아 ___ 집 줄게 ___ 집 다오', answer: '헌, 새' },
        { type: 'short', prompt: '노래에 맞추어 한 놀이를 쓰세요.' },
        { type: 'draw', prompt: '두꺼비에게 받고 싶은 새 집을 그려 보세요.' },
        { type: 'short', prompt: '전래 동요를 부르며 놀 때 기분을 쓰세요.' },
      ],
      easy: {
        note: '손뼉 한 번 = 한 박, 쉼표 = 손도 쉬어요.',
        items: [
          { type: 'choice', prompt: '두꺼비에게 줄 집은?', options: ['헌 집', '새 집'], answer: '헌 집' },
          { type: 'choice', prompt: '쉼표에서 손은 어떻게 할까요?', options: ['쉬어요', '손뼉을 쳐요'], answer: '쉬어요' },
          { type: 'draw', prompt: '새 집을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '한 마디만 놓고, 마디의 지금 박 수를 보며 맞추어요.',
      base: '쉼이 있는 두 마디를 놓고 손뼉을 치며 노래해요.',
      challenge: '반 박 블록까지 써서 두 마디 내 리듬을 만들고, 짝에게 손뼉으로 들려줘요.',
    },
    teacherNotes: '이 노래는 작자 미상의 전래 동요(공공 영역)이고, 노랫말은 널리 전해 오는 첫 구절만 쓴다. 자주 보이는 어려움: ① 헌 집과 새 집을 바꾼다 → "낡은 것을 주고 새것을 받는다"는 뜻을 먼저 말해 준다. ② 쉼표에서도 손뼉을 친다 → 쉼표 때 손을 무릎에 내리는 몸짓을 정한다. 손등 놀이에서 세게 누르지 않도록, 짝이 "아파" 하면 바로 멈추는 약속을 한다.',
  }));

  lessons.push(L(30, {
    title: '강강술래 메기고 받으며 둥글게 돌기',
    objective: '강강술래에서 한 사람이 메기고 여럿이 받는 노래 방법을 알고, 손을 잡고 둥글게 돌며 우리 반 메기는 소리를 만들어 부를 수 있다.',
    illustration: ART('children in hanbok holding hands in a big circle under a full round moon, one child in the middle singing with an open mouth while the others answer', '강강술래', [
      { motif: 'moon', x: 250, y: 64, s: 0.8 }, { motif: 'star', x: 110, y: 84, s: 0.6 }, { motif: 'hills', y: 214 }]),
    safety: ['손을 잡고 돌 때 친구 손을 당기거나 갑자기 뛰지 않아요.', '책상을 밀어 둔 넓은 자리에서 돌고, 넘어지면 모두 멈춰요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '보름달 사진을 보여 준다. "추석 밤, 둥근 달 아래에서 사람들이 손을 잡고 둥글게 돌며 부르던 노래가 있어요. 강강술래예요(전래 민요)." 선생님이 "우리 반 친구들" 하고 메기면 학생들이 "강강술래" 하고 받게 한다. "한 사람이 먼저 부르는 것을 메긴다, 여럿이 따라 답하는 것을 받는다고 해요." 시연 단추로 메기는 소리와 받는 소리가 이어지는 모습을 보여 준다.',
        student: '선생님이 메기면 "강강술래" 하고 받아요.',
        demo: { tool: 'story', options: { mode: 'fill', slots: [{ id: 'b1', who: '모두', label: '우리 반 친구들 - ___' }], cards: ['강강술래', '두껍아'], shuffle: false }, sequence: [{ fill: { b1: '강강술래' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 메기는 소리와 받는 소리 나누기', minutes: 10, tool: 'mindmap',
            teacher: '"메기는 사람은 줄마다 다른 말을 불러요. 받는 사람은 늘 같은 말 \'강강술래\'로 답해요." 칠판에 두 칸을 그리고 노랫말 카드를 나누게 한다. 메기는 사람이 여럿이라고 여기는 학생에게 "먼저 부르는 사람은 몇 명이었나요?"라고 묻는다.',
            task: '메기는 소리와 받는 소리를 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '노랫말 카드를 메기는 소리와 받는 소리로 나누어 보세요.', toolOptions: { mode: 'sort', slots: [{ id: 'lead', label: '메기는 소리(한 사람)' }, { id: 'all', label: '받는 소리(여럿)' }], cards: ['우리 반 친구들', '손을 잡고', '둥글게 돌자', '강강술래'] },
                target: { sort: { lead: ['우리 반 친구들', '손을 잡고', '둥글게 돌자'], all: ['강강술래'] } }, difficulty: 0.2,
                hints: ['줄마다 바뀌는 말과 늘 같은 말을 나누어 봐요.', '늘 같은 말은 하나뿐이에요. 그 말은 여럿이 받아요.', '강강술래만 받는 소리이고, 나머지는 메기는 소리예요.'] },
              { prompt: '메기고 받는 노래에 대한 설명으로 알맞은 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '알맞은 설명', cards: ['한 사람이 먼저 불러요', '여럿이 같은 말로 답해요', { id: '모두', text: '처음부터 모두 같은 말을 함께 불러요', why: '메기는 소리는 한 사람이 먼저 불러요.' }] },
                target: { pick: ['한 사람이 먼저 불러요', '여럿이 같은 말로 답해요'] }, difficulty: 0.15 },
              { prompt: '강강술래를 부르던 때와 모습을 이어 보세요.', toolOptions: { mode: 'match', topic: '강강술래', slots: [{ id: 's1', label: '언제' }, { id: 's2', label: '어떻게' }], cards: ['추석 밤 보름달 아래', '손을 잡고 둥글게 돌며'] },
                target: { match: { s1: '추석 밤 보름달 아래', s2: '손을 잡고 둥글게 돌며' } }, difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 우리 반 메기는 소리 짓고 둥글게 돌기', minutes: 16, tool: 'story',
            teacher: '"메기는 소리를 우리 반 말로 지어 볼까요? \'운동장에\', \'꽃이 폈네\'처럼 짧게요." 모둠마다 메기는 소리 한 줄을 짓는다. 책상을 밀고 손을 잡고 원을 만든 뒤, 모둠 대표가 차례로 메기면 모두 "강강술래" 받으며 천천히 걷는다. 빨리 돌려는 학생에게 "노래가 느리면 발도 느려요"라고 말해 준다.',
            task: '메기고 받는 차례를 맞추고, 우리 반 메기는 소리를 지어 둥글게 돌며 불러요.',
            levels: CARD_LV,
            items: [
              { prompt: '메기고 받는 차례대로 카드를 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: 'lead1', text: '한 사람: 운동장에', motif: 'sun' }, { id: 'all1', text: '모두: 강강술래', motif: 'moon' }, { id: 'lead2', text: '한 사람: 꽃이 폈네', motif: 'flower' }, { id: 'all2', text: '모두: 강강술래 (한 번 더)', motif: 'moon' }], slots: ['1', '2', '3', '4'] },
                target: { order: ['lead1', 'all1', 'lead2', 'all2'] }, difficulty: 0.2 },
              { prompt: '서준이 모둠의 메기고 받는 노래 빈칸을 채워 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'b1', who: '서준', label: '한 사람: 손을 잡고 → 모두: ___' }, { id: 'b2', who: '서준', label: '한 사람: ___ → 모두: 강강술래' }], cards: ['강강술래', '둥글게 돌자', '두껍아'] },
                target: { fill: { b1: '강강술래', b2: '둥글게 돌자' } }, difficulty: 0.2 },
              { prompt: '모둠 메기는 소리로 손을 잡고 둥글게 돌며 불렀으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '제자리에 앉아 숨을 고른다. "메기는 사람이 되어 보니 어땠나요? 받는 사람일 때는요?" 두세 명이 말한다. 다음 시간에는 장구로 세마치장단을 맛본다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { mode: 'fill', slots: [{ id: 'e1', who: '모두', label: '한 사람: 달이 떴네 → 모두: ___' }], cards: ['강강술래', '헌 집 줄게'] }, prompt: '받는 소리 빈칸을 채워 보세요.', target: { fill: { e1: '강강술래' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '한 사람이 먼저 부르는 것을 무엇이라고 할까요?', options: ['메긴다', '받는다', '쉰다'], answer: 0, difficulty: 0.2, explain: '한 사람이 먼저 부르면 메기고, 여럿이 답하면 받아요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '강강술래',
      items: [
        { type: 'table', prompt: '우리 모둠 메기는 소리와 받는 소리를 쓰세요.', columns: ['메기는 소리(한 사람)', '받는 소리(모두)'], cells: [['', ''], ['', '']] },
        { type: 'choice', prompt: '강강술래를 부르며 노는 때에 ○ 하세요.', options: ['추석 밤', '여름 낮', '눈 오는 날'], answer: '추석 밤' },
        { type: 'draw', prompt: '보름달 아래 강강술래 하는 모습을 그려 보세요.' },
        { type: 'short', prompt: '메기는 사람이 되어 본 느낌을 쓰세요.' },
      ],
      easy: {
        note: '한 사람이 메기면 모두 "강강술래" 하고 받아요.',
        items: [
          { type: 'choice', prompt: '받는 소리에 ○ 하세요.', options: ['강강술래', '운동장에'], answer: '강강술래' },
          { type: 'short', prompt: '내가 지은 메기는 소리를 쓰세요.' },
          { type: 'draw', prompt: '손을 잡고 도는 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 놓으면 초록 테두리가 생겨요. 받는 소리만 크게 불러도 돼요.',
      base: '메기는 소리와 받는 소리를 나누고, 차례대로 불러요.',
      challenge: '모둠 메기는 소리를 두 줄 짓고 메기는 사람을 맡아요.',
    },
    teacherNotes: '강강술래는 남쪽 지방에서 추석 밤에 부르던 전래 민요로, 유네스코 인류무형문화유산이다. 메기는 소리는 전래 가사를 옮기지 않고 학급이 새로 짓는다. 자주 보이는 어려움: ① 메기는 소리까지 모두 따라 부른다 → 받는 차례에 손을 드는 몸짓을 정한다. ② 원이 빨라져 넘어질 수 있다 → 노래 빠르기에 맞추어 걷기만 하고, 넘어지면 모두 멈춘다.',
  }));

  lessons.push(L(31, {
    title: '무릎 장구로 세마치장단 맛보기',
    objective: '세 박이 한 묶음인 세마치장단을 구음으로 말하고, 장단판에 놓은 뒤 무릎 장구로 칠 수 있다.',
    illustration: ART('a row of children sitting on a floor mat tapping their knees together, above them a long paper strip divided into nine boxes in three groups with drum syllables written in some boxes', '세마치장단', [
      { motif: 'star', x: 110, y: 84, s: 0.6 }, { motif: 'cloud', x: 330, y: 64 }, { motif: 'flower', x: 390, y: 226, color: 'peach' }]),
    safety: ['무릎은 손바닥으로 가볍게 두드려요.', '옆 친구와 팔이 닿지 않게 간격을 두고 앉아요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '장구로 세마치장단을 두 번 쳐 들려준다. "덩 - - / 덩 - 덕 / 쿵 덕 -. 몇 묶음으로 끊어 들렸나요?" 학생이 손가락으로 묶음 수를 보이게 한다. "세 묶음이 한 장단이에요. 이것을 세마치장단이라고 해요. 우리 민요에 많이 쓰여요." 시연 단추로 장단판 아홉 칸에 소리 이름이 놓이는 모습을 보여 준다.',
        student: '선생님 장단을 들으며 묶음마다 고개를 끄덕여요.',
        demo: { tool: 'keyboard', options: { mode: 'janggu', beats: 9, group: 3, jangdan: '세마치', strokes: ['덩', '쿵', '덕'] }, sequence: [{ strokes: ['덩', '', '', '덩', '', '덕', '쿵', '덕', ''] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 세마치 세 묶음 차례 익히기', minutes: 10, tool: 'story',
            teacher: '묶음 카드 세 장을 칠판에 섞어 붙이고 함께 구음으로 읽는다. "첫 묶음은 \'덩\' 하나만 치고 둘을 쉬어요." 묶음마다 무릎 장구로 따로 친 뒤 이어서 친다. 둘째와 셋째 묶음을 바꾸는 학생에게 "끝 묶음은 낮은 소리로 시작해요"라고 짚어 준다.',
            task: '세마치장단의 세 묶음을 차례대로 놓고 구음으로 읽어요.',
            levels: CARD_LV,
            items: [
              { prompt: '세마치장단 세 묶음을 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: 'g1', text: '덩 - -', motif: 'star' }, { id: 'g2', text: '덩 - 덕', motif: 'sun' }, { id: 'g3', text: '쿵 덕 -', motif: 'cloud' }], slots: ['첫째 묶음', '둘째 묶음', '셋째 묶음'] },
                target: { order: ['g1', 'g2', 'g3'] }, difficulty: 0.2,
                hints: ['소리가 가장 적은 묶음이 맨 앞이에요.', '둘째 묶음은 두 손 함께 치는 소리로 시작하고 끝에 오른쪽 소리가 와요.', '덩 - - / 덩 - 덕 / 쿵 덕 - 차례예요.'] },
              { prompt: '세마치장단을 설명하는 말로 알맞은 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '알맞은 말', cards: ['세 묶음이 한 장단이에요', '묶음마다 세 칸이에요', { id: '네', text: '네 묶음이 한 장단이에요', why: '세마치는 세 묶음이에요.' }, { id: '쉼없음', text: '쉬는 칸이 하나도 없어요', why: '첫 묶음에 쉬는 칸이 둘 있어요.' }] },
                target: { pick: ['세 묶음이 한 장단이에요', '묶음마다 세 칸이에요'] }, difficulty: 0.2 },
              { prompt: '모둠이 다 함께 묶음마다 무릎 장구로 쳐 보았으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 장단판에 세마치 놓고 치기', minutes: 16, tool: 'keyboard',
            teacher: '"장단 듣기를 누르고, 들은 대로 아홉 칸에 놓아요. 굵은 금이 묶음 사이예요." 놓은 뒤에는 판을 손가락으로 짚으며 구음을 말하고 무릎으로 친다. 다 친 모둠은 한 사람이 장단을 치고 나머지가 앞 시간의 강강술래 받는 소리를 불러 본다. 쉼 칸을 빨리 지나가는 학생에게 쉼 칸에서 마음속으로 "쉬고"를 말하게 한다.',
            task: '세마치장단을 장단판에 놓고, 무릎 장구로 쳐요.',
            levels: {
              easy: { mode: 'janggu', beats: 6, group: 3, jangdan: '세마치', strokes: ['덩', '쿵', '덕'] },
              base: { mode: 'janggu', beats: 9, group: 3, jangdan: '세마치', strokes: ['덩', '쿵', '덕'] },
              challenge: { mode: 'janggu', beats: 9, group: 3, jangdan: '세마치', strokes: ['덩', '쿵', '덕', '기덕', '더러러'] },
            },
            items: [
              { prompt: '장단 듣기를 누르고, 세마치장단 아홉 칸을 놓아 보세요.', toolOptions: { pattern: ['덩', '', '', '덩', '', '덕', '쿵', '덕', ''] }, target: { strokes: ['덩', '', '', '덩', '', '덕', '쿵', '덕', ''] }, difficulty: 0.3,
                levels: { easy: { prompt: '장단 듣기를 누르고, 세마치장단 앞 두 묶음 여섯 칸을 놓아 보세요.', toolOptions: { beats: 6, pattern: ['덩', '', '', '덩', '', '덕'] }, target: { strokes: ['덩', '', '', '덩', '', '덕'] } } },
                hints: ['굵은 금으로 나뉜 묶음마다 따로 들어 보세요.', '첫 묶음은 첫 칸에만 소리가 있어요. 셋째 묶음은 낮은 소리로 시작해요.', '덩 쉼 쉼 / 덩 쉼 덕 / 쿵 덕 쉼이에요.'] },
              { prompt: '앞 두 묶음은 놓여 있어요. 장단 듣기를 누르고 셋째 묶음을 채워 보세요.', toolOptions: { pattern: ['덩', '', '', '덩', '', '덕', '쿵', '덕', ''] }, state: { strokes: ['덩', '', '', '덩', '', '덕', '', '', ''] }, target: { strokes: ['덩', '', '', '덩', '', '덕', '쿵', '덕', ''] }, difficulty: 0.2,
                levels: { easy: { prompt: '첫 묶음은 놓여 있어요. 장단 듣기를 누르고 둘째 묶음을 채워 보세요.', toolOptions: { beats: 6, pattern: ['덩', '', '', '덩', '', '덕'] }, state: { strokes: ['덩', '', '', '', '', ''] }, target: { strokes: ['덩', '', '', '덩', '', '덕'] } } },
                hints: ['비어 있는 묶음만 귀 기울여 들어 보세요.', '셋째 묶음 끝 칸은 쉼이에요. 앞 두 칸을 들어요.', '쿵, 덕, 쉼을 놓아요.'] },
              { prompt: '세 칸 묶음을 지켜 나만의 장단을 놓고 쳐 본 뒤, 점검 목록을 모두 표시해 보세요.', target: { selfCheck: ['묶음마다 세 칸을 지켰어요', '내가 놓은 장단을 무릎 장구로 두 번 쳤어요', '짝에게 구음으로 들려주었어요'], minNotes: 3 }, difficulty: 0.25 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '반 전체가 무릎 장구로 세마치장단을 세 번 이어 친다. "세 묶음이 되풀이되니 어떤 느낌이 들었나요?" 두세 명이 말한다. 다음 시간에는 조각보와 탈을 색종이로 꾸민다고 알린다.',
        exitTicket: [
          { type: 'choice', prompt: '세마치장단은 몇 묶음이 한 장단일까요?', options: ['세 묶음', '두 묶음', '다섯 묶음'], answer: 0, difficulty: 0.15, explain: '세마치는 세 칸씩 세 묶음이에요.' },
          { type: 'tool', tool: 'keyboard', options: { mode: 'janggu', beats: 3, group: 3, strokes: ['덩', '쿵', '덕'], pattern: ['덩', '', ''] }, prompt: '장단 듣기를 누르고, 세마치 첫 묶음 세 칸을 놓아 보세요.', target: { strokes: ['덩', '', ''] }, difficulty: 0.15 },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '세마치장단',
      items: [
        { type: 'table', prompt: '세마치장단 아홉 칸에 들은 소리 이름을 쓰세요. 쉬는 칸은 비워요.', columns: ['1', '2', '3', '4', '5', '6', '7', '8', '9'], cells: [['', '', '', '', '', '', '', '', '']] },
        { type: 'choice', prompt: '세마치장단에서 한 묶음은 몇 칸일까요?', options: ['세 칸', '네 칸', '두 칸'], answer: '세 칸' },
        { type: 'short', prompt: '내가 만든 세 칸 묶음을 소리 이름으로 쓰세요.' },
        { type: 'draw', prompt: '무릎 장구를 치는 내 모습을 그려 보세요.' },
      ],
      easy: {
        note: '세 칸이 한 묶음! 굵은 금에서 끊어 읽어요.',
        items: [
          { type: 'choice', prompt: '세마치 첫 묶음 첫 칸 소리는?', options: ['덩', '덕'], answer: '덩' },
          { type: 'short', prompt: '두 무릎을 함께 치는 소리 이름을 쓰세요.' },
          { type: 'draw', prompt: '장구를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '앞 두 묶음 여섯 칸만 놓고 쳐요.',
      base: '세마치 아홉 칸을 놓고 무릎으로 이어 쳐요.',
      challenge: '기덕·더러러가 있는 판에서 들은 장단을 골라 놓고, 나만의 세 묶음 장단을 지어 짝에게 들려줘요.',
    },
    teacherNotes: '세마치장단은 민요에 널리 쓰이는 장단으로, 여기서는 기본형 "덩 - - / 덩 - 덕 / 쿵 덕 -"만 다룬다. 자주 보이는 어려움: ① 쉼 칸을 건너뛰어 빨라진다 → 쉼 칸에서 손을 무릎에 올려 두고 마음속으로 "쉬고"를 말하게 한다. ② 둘째와 셋째 묶음을 바꾼다 → 셋째 묶음은 낮은 소리(쿵)로 시작한다는 것을 짚는다. 점검 목록은 학생이 실제로 한 것만 표시하게 하고, 교사는 결과 화면에서 놓은 장단을 함께 본다.',
  }));

  lessons.push(L(32, {
    title: '색종이로 조각보와 탈 꾸미기',
    objective: '조각보가 남은 천 조각을 이어 만든 것임을 알고 네모 조각을 이어 조각보를 꾸미며, 좌우가 같은 탈 얼굴을 색종이로 꾸밀 수 있다.',
    illustration: ART('a colourful patchwork wrapping cloth made of many square and rectangle pieces lying next to a paper-cut Korean mask with round cheeks and a big smile, scissors and coloured paper scraps around them', '조각보와 탈', [
      { motif: 'star', x: 110, y: 84, s: 0.6 }, { motif: 'flower', x: 390, y: 226, color: 'rose' }, { motif: 'leaf', x: 110, y: 222 }]),
    safety: ['가위는 날을 닫아 손잡이 쪽으로 건네요.', '풀은 뚜껑을 닫아 두고, 손에 묻으면 물수건으로 닦아요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '조각보 사진과 하회탈 사진을 나란히 보여 준다. "옛날 사람들은 옷을 짓고 남은 작은 천 조각을 버리지 않고 이어서 보자기를 만들었어요. 이것이 조각보예요." 탈 사진을 가리키며 "왼쪽 눈과 오른쪽 눈이 어떤가요?" 묻는다. 시연 단추로 판에 네모 조각이 붙는 모습을 보여 준다.',
        student: '조각보에서 가장 마음에 드는 색 조각 하나를 찾아 말해요.',
        demo: { tool: 'collage', options: { shapes: ['square', 'rect'], colors: ['빨강', '노랑', '파랑', '초록'], sizes: ['m'] }, sequence: [{ pieces: [{ shape: 'square', color: '빨강', size: 'm', x: 260, y: 180, r: 0 }, { shape: 'square', color: '노랑', size: 'm', x: 300, y: 180, r: 0 }] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 네모 조각을 이어 조각보 꾸미기', minutes: 13, tool: 'collage',
            teacher: '"조각보는 네모와 긴 네모 조각이 서로 맞닿아 이어져요. 빈틈이 많지 않게 붙여 봐요." 판에서 먼저 꾸민 뒤, 색종이 자투리(남은 색종이)를 모아 도화지에 실제 조각보를 붙인다. 같은 색만 이어 붙이는 학생에게 "옆 조각과 다른 색을 놓으면 어떤 느낌일까요?"라고 묻는다.',
            task: '네모 조각을 이어 붙여 조각보를 꾸미고, 색종이 자투리로 실제 조각보를 만들어요.',
            levels: {
              easy: { shapes: ['square', 'rect'], colors: ['빨강', '노랑', '파랑', '초록', '분홍'], sizes: ['m'] },
              base: { shapes: ['square', 'rect', 'triangle'], colors: ['빨강', '주황', '노랑', '초록', '파랑', '보라', '분홍'] },
              challenge: {},
            },
            items: [
              { prompt: '네모 조각을 네 개 넘게 이어 붙여 조각보를 꾸며 보세요.', target: { has: [{ shape: 'square', min: 4 }] }, difficulty: 0.15,
                hints: ['위에서 네모 모양을 고르고 붙이기를 눌러 보세요.', '붙인 조각을 끌어 옆 조각과 맞닿게 놓아요.', '네모 조각을 네 개보다 많이 붙여요.'] },
              { prompt: '네모 조각과 긴 네모 조각을 함께 써서 조각보를 꾸며 보세요.', target: { has: [{ shape: 'square', min: 3 }, { shape: 'rect', min: 2 }] }, difficulty: 0.2,
                hints: ['모양 고르개에서 네모와 긴 네모를 번갈아 골라 보세요.', '긴 네모는 둘 넘게, 네모는 셋 넘게 붙여요.', '네모 셋 이상, 긴 네모 둘 이상이면 돼요.'] },
              { prompt: '색종이 자투리로 도화지에 실제 조각보를 붙였으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 좌우가 같은 탈 얼굴 꾸미기', minutes: 14, tool: 'collage',
            teacher: '"탈 얼굴 가운데에 세로 접는 선이 있어요. 왼쪽에 붙인 조각과 똑같은 조각을 오른쪽 같은 자리에 붙여요." 왼쪽 눈만 붙어 있는 판을 함께 본다. 다 꾸민 학생은 종이 접시에 같은 탈 얼굴을 그려 고무줄을 달고, 탈을 쓴 채 어깨춤을 추어 본다. 한쪽에만 조각을 더 붙이는 학생에게 "접으면 겹쳐질까요?"라고 묻는다.',
            task: '세로 접는 선을 기준으로 양쪽이 같은 탈 얼굴을 꾸며요.',
            levels: {
              easy: { shapes: ['circle', 'semi', 'triangle'], colors: ['빨강', '검정', '하양', '갈색'], sizes: ['m'] },
              base: { shapes: ['circle', 'semi', 'triangle', 'leaf'], colors: ['빨강', '검정', '하양', '갈색', '노랑'] },
              challenge: {},
            },
            items: [
              { prompt: '왼쪽 눈이 붙어 있어요. 세로 접는 선을 기준으로 양쪽이 같도록 오른쪽 눈을 붙여 보세요.', state: { pieces: [{ shape: 'circle', color: '검정', size: 'm', x: 220, y: 160, r: 0 }] }, target: { symmetry: 'vertical' }, difficulty: 0.2,
                hints: ['접는 선에서 왼쪽 눈까지 몇 칸인지 세어 보세요.', '오른쪽에도 접는 선에서 같은 칸만큼 떨어진 자리에 놓아요.', '같은 검정 동그라미를 접는 선 오른쪽 같은 높이에 놓아요.'] },
              { prompt: '눈·볼·입을 붙여 양쪽이 같은 탈 얼굴을 꾸며 보세요. 조각은 네 개 넘게 써요.', target: { symmetry: 'vertical', pieces: { min: 4 } }, difficulty: 0.3,
                hints: ['왼쪽에 하나 붙일 때마다 오른쪽에도 같은 조각을 붙여요.', '입처럼 가운데 놓는 조각은 접는 선 위에 놓아요.', '짝을 이룬 조각이 같은 높이, 같은 거리에 있는지 확인해요.'] },
              { prompt: '종이 접시 탈을 만들어 쓰고 어깨춤을 추어 보았으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '조각보와 탈을 칠판 아래에 늘어놓고 갤러리 걷기를 한다. "친구 작품에서 마음에 드는 곳 하나를 찾아 말해 볼까요?" 다음 시간에는 우리 생활 속에서 국악과 전통 무늬를 찾는다고 알린다.',
        exitTicket: [
          { type: 'choice', prompt: '조각보는 무엇으로 만들었을까요?', options: ['남은 작은 천 조각을 이어서', '큰 천 한 장으로', '종이를 접어서'], answer: 0, difficulty: 0.15, explain: '옷을 짓고 남은 작은 천 조각을 버리지 않고 이어 만들었어요.' },
          { type: 'choice', prompt: '좌우가 같은 탈을 꾸밀 때 왼쪽에 눈을 붙였다면 오른쪽에는?', options: ['같은 자리에 같은 눈을 붙여요', '아무것도 붙이지 않아요', '다른 모양을 붙여요'], answer: 0, difficulty: 0.15, explain: '접는 선을 기준으로 같은 거리, 같은 높이에 같은 조각을 붙여요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '조각보와 탈',
      items: [
        { type: 'draw', prompt: '네모 칸을 여러 색으로 칠해 조각보를 꾸며 보세요.' },
        { type: 'draw', prompt: '가운데 선을 기준으로 양쪽이 같은 탈 얼굴을 그려 보세요.' },
        { type: 'short', prompt: '옛날 사람들이 조각보를 만든 까닭을 쓰세요.' },
        { type: 'check', prompt: '오늘 한 것에 ✓ 하세요.', options: ['자투리 색종이로 조각보를 붙였어요', '양쪽이 같은 탈을 꾸몄어요', '가위를 안전하게 건넸어요'] },
      ],
      easy: {
        note: '왼쪽에 붙이면 오른쪽에도 똑같이!',
        items: [
          { type: 'draw', prompt: '네모 칸을 색칠해 조각보를 꾸며 보세요.' },
          { type: 'draw', prompt: '탈 얼굴 오른쪽에 왼쪽과 같은 눈을 그려 보세요.' },
          { type: 'choice', prompt: '조각보 조각은 어떤 모양이 많을까요?', options: ['네모', '별'], answer: '네모' },
        ],
      },
    },
    differentiation: {
      easy: '모양과 색이 적은 고르개로 꾸며요. 탈은 눈 짝 맞추기부터 해요.',
      base: '네모와 긴 네모로 조각보를 꾸미고, 좌우가 같은 탈을 네 조각 넘게 꾸며요.',
      challenge: '모든 모양·색으로 꾸미고, 탈에 나뭇잎·별 조각까지 짝을 맞추어 붙여요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 탈의 짝 조각을 높이만 맞추고 거리는 다르게 놓는다 → 접는 선에서 칸을 세게 한다. ② 조각보를 한 가지 색으로만 채운다 → 옆 조각과 다른 색을 견주어 보게 한다(정답은 아니고 선택). 하회탈은 웃는 얼굴로 알려진 우리 탈이지만 실제 탈을 본뜨기보다 학생이 표정을 정하게 한다. 가위 쓰기 전에 건네는 방법을 한 번 시범 보인다.',
  }));

  // ───────────────────────── 33~36차시: 생활 속 국악·전통 미술과 우리 반 작은 잔치 ─────────────────────────

  lessons.push(L(33, {
    title: '생활 속에서 국악 소리와 전통 무늬 찾기',
    objective: '국악과 전통 무늬가 지금 우리 생활 곳곳에 있다는 것을 알고, 학교와 집에서 찾은 것을 소리와 무늬로 나눌 수 있다.',
    illustration: ART('a modern Korean street scene with a shop sign framed by a traditional cloud pattern, a stone wall with roof-tile patterns, a bus stop poster of a fan dance and a child listening to zither music on headphones', '생활 속 우리 것', [
      { motif: 'cloud', x: 330, y: 64 }, { motif: 'tree', x: 380, y: 214 }, { motif: 'flower', x: 110, y: 226, color: 'sky' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"국악과 색동 무늬는 옛날에만 있었을까요?" 손을 들어 생각을 나눈다. 가야금으로 연주한 요즘 노래, 색동 무늬 필통, 기와 무늬 담장 사진을 차례로 보여 준다. "지금도 우리 곁에 있었네요." 시연 단추로 생활 속 물건이 소리와 무늬 칸에 나뉘는 모습을 보여 준다.',
        student: '내 물건이나 집에서 본 전통 무늬나 국악 소리를 하나 떠올려 짝에게 말해요.',
        demo: { tool: 'mindmap', options: { mode: 'sort', slots: [{ id: 'sound', label: '국악 소리' }, { id: 'art', label: '전통 무늬' }], cards: ['가야금으로 연주한 요즘 노래', '색동 무늬 필통'], shuffle: false }, sequence: [{ sort: { sound: ['가야금으로 연주한 요즘 노래'], art: ['색동 무늬 필통'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 생활 속 우리 것 나누기', minutes: 12, tool: 'mindmap',
            teacher: '"찾은 것이 귀로 듣는 것인지, 눈으로 보는 것인지 따져 봐요." 사진 카드를 하나씩 함께 읽는다. 사물놀이 공연처럼 소리와 모습이 함께 있는 것은 오늘은 소리 칸에 넣기로 정한다. 전통 무늬를 "옛날 물건에만 있다"고 하는 학생에게 학교 강당 문살이나 담장 무늬를 떠올리게 한다.',
            task: '생활 속에서 찾은 것을 국악 소리와 전통 무늬로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '생활 속에서 찾은 것을 알맞은 칸에 넣어 보세요.', toolOptions: { mode: 'sort', slots: [{ id: 'sound', label: '국악 소리' }, { id: 'art', label: '전통 무늬' }], cards: ['운동회 사물놀이 공연', '단소로 부는 교가', '기와 무늬 담장', '구름 무늬 간판'] },
                target: { sort: { sound: ['운동회 사물놀이 공연', '단소로 부는 교가'], art: ['기와 무늬 담장', '구름 무늬 간판'] } }, difficulty: 0.2,
                hints: ['귀로 듣는 것인지, 눈으로 보는 것인지 먼저 따져 봐요.', '악기 이름이 들어간 카드는 소리 쪽이에요.', '사물놀이·단소는 소리, 기와·구름 무늬는 무늬 칸이에요.'] },
              { prompt: '지금 우리 생활 속에서 볼 수 있는 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '지금도 볼 수 있어요', cards: ['색동 무늬 포장지', '가야금 소리가 나는 휴대 전화 벨소리', '한복을 입은 돌잔치', { id: '공룡', text: '살아 있는 공룡', why: '공룡은 아주 오래전에 사라졌어요. 우리 전통 문화도 아니에요.' }] },
                target: { pick: ['색동 무늬 포장지', '가야금 소리가 나는 휴대 전화 벨소리', '한복을 입은 돌잔치'] }, difficulty: 0.15 },
              { prompt: '학교 안을 둘러보며 전통 무늬나 국악 소리를 하나 찾아 그림 쪽지에 그렸으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. "옛날에만 있어" 생각 바꾸기', minutes: 14, tool: 'emotion',
            teacher: '"민서가 \'국악은 옛날 사람들만 듣는 거야\'라고 했어요. 민서에게 무슨 말을 해 줄까요?" 찾은 그림 쪽지를 근거로 말하게 한다. 짝과 "나는 ○○에서 ○○을 보았어(들었어)" 하고 찾은 것을 나눈 뒤, 반 전체 \'생활 속 우리 것\' 판에 쪽지를 붙인다.',
            task: '친구의 생각에 알맞게 답하고, 찾은 것을 짝과 나누어요.',
            levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
            items: [
              { prompt: '민서에게 해 줄 말로 알맞은 것을 골라 보세요.', toolOptions: { mode: 'branch', who: '민서', situation: '민서가 "국악은 옛날 사람들만 듣는 거야"라고 했어요.', choices: [
                { id: 'agree', text: '"맞아, 지금은 아무도 안 들어"', result: '민서는 생활 속 국악을 찾아보지 않았어요.', mood: '걱정', why: '운동회 사물놀이처럼 지금도 국악을 들을 수 있어요.' },
                { id: 'show', text: '"운동회에서 사물놀이를 들었어. 지금도 있어"', result: '민서도 생활 속 국악을 찾아보고 싶어졌어요.', mood: '신남' }] }, target: { choice: 'show' }, difficulty: 0.15,
                predict: { q: '국악은 지금 우리 생활에도 있을까요?', options: ['없어요', '있어요'], answer: 1 },
                conclude: '국악과 전통 무늬는 지금도 우리 생활 곳곳에 있어요.' },
              { prompt: '찾은 것을 알리는 말로 알맞은 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '찾은 것을 알리는 말', cards: ['강당 문에서 네모 문살 무늬를 보았어', '설날에 할머니 댁에서 가야금 소리를 들었어', { id: '모름', text: '그냥 몰라', why: '찾은 곳과 찾은 것을 함께 말해요.' }] },
                target: { pick: ['강당 문에서 네모 문살 무늬를 보았어', '설날에 할머니 댁에서 가야금 소리를 들었어'] }, difficulty: 0.15 },
              { prompt: '짝과 찾은 것을 나누고 반 판에 그림 쪽지를 붙였으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '\'생활 속 우리 것\' 판을 함께 본다. "어느 곳에서 가장 많이 찾았나요?" 집에서 한 가지를 더 찾아 다음 시간에 알려 달라고 한다. 다음 시간에는 우리 반 작은 잔치를 계획한다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'sort', slots: [{ id: 'sound', label: '국악 소리' }, { id: 'art', label: '전통 무늬' }], cards: ['해금으로 연주한 만화 노래', '색동 무늬 우산'] }, prompt: '찾은 것을 국악 소리와 전통 무늬로 나누어 보세요.', target: { sort: { sound: ['해금으로 연주한 만화 노래'], art: ['색동 무늬 우산'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '국악과 전통 무늬에 대한 알맞은 생각은?', options: ['지금도 우리 생활에 있어요', '옛날에만 있었어요'], answer: 0, difficulty: 0.1, explain: '지금도 공연·물건·건물에서 만날 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '생활 속 우리 것 찾기',
      items: [
        { type: 'table', prompt: '찾은 곳과 찾은 것을 쓰세요.', columns: ['찾은 곳', '찾은 것', '소리/무늬'], cells: [['', '', ''], ['', '', '']] },
        { type: 'draw', prompt: '찾은 전통 무늬를 그려 보세요.' },
        { type: 'short', prompt: '"국악은 옛날에만 있어"라는 친구에게 해 줄 말을 쓰세요.' },
        { type: 'short', prompt: '집에서 더 찾아보고 싶은 것을 쓰세요.' },
      ],
      easy: {
        note: '귀로 들으면 소리, 눈으로 보면 무늬!',
        items: [
          { type: 'choice', prompt: '귀로 듣는 것에 ○ 하세요.', options: ['단소 소리', '색동 무늬'], answer: '단소 소리' },
          { type: 'draw', prompt: '찾은 무늬를 그려 보세요.' },
          { type: 'short', prompt: '찾은 곳을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 놓으면 초록 테두리가 생겨요. 학교 안에서 하나만 찾아도 돼요.',
      base: '생활 속 우리 것을 소리와 무늬로 나누고, 찾은 곳과 함께 말해요.',
      challenge: '찾은 것을 셋 넘게 모으고, 친구의 생각을 바꿀 말을 근거와 함께 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 국악은 옛날에만 있다고 여긴다 → 운동회·명절 공연·광고 음악처럼 학생이 겪은 장면을 떠올리게 한다. ② 소리와 무늬를 함께 가진 것(공연)을 어디에 넣을지 망설인다 → 오늘의 기준(귀로 듣는 것이 중심이면 소리)을 미리 정한다. 학교 안 산책은 정해진 구역에서만 짝과 함께 다닌다.',
  }));

  lessons.push(L(34, {
    title: '우리 반 작은 잔치 순서와 역할 정하기',
    objective: '그동안 익힌 노래·장단·작품으로 우리 반 작은 잔치를 계획하며, 잔치 순서를 정하고 모둠 역할을 나눌 수 있다.',
    illustration: ART('children gathered around a big sheet of paper on the floor drawing a festival plan with boxes and arrows, a paper drum, a mask and a patchwork cloth placed beside them', '잔치 계획', [
      { motif: 'star', x: 110, y: 84, s: 0.6 }, { motif: 'sun', x: 380, y: 70, s: 0.6 }, { motif: 'flower', x: 390, y: 226, color: 'peach' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"옛날 마을 잔치에서는 노래하고, 장단을 치고, 춤을 추며 다 함께 즐겼어요. 우리 반도 작은 잔치를 열어 볼까요?" 그동안 한 것(두껍아 두껍아, 강강술래, 세마치장단, 조각보·탈)을 사진으로 돌아본다. 시연 단추로 잔치 순서 카드가 놓이는 모습을 보여 준다.',
        student: '잔치에서 가장 해 보고 싶은 것을 하나 골라 손을 들어요.',
        demo: { tool: 'story', options: { mode: 'order', cards: [{ id: 'hello', text: '여는 인사', motif: 'sun' }, { id: 'song', text: '전래 동요 부르기', motif: 'star' }, { id: 'bye', text: '닫는 인사', motif: 'moon' }], slots: ['1', '2', '3'], shuffle: false }, sequence: [{ order: ['hello', 'song', 'bye'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 잔치 순서 정하기', minutes: 12, tool: 'story',
            teacher: '"잔치는 무엇으로 열고 무엇으로 닫을까요?" 학생들의 생각을 듣는다. 앉아서 하는 것과 일어나 움직이는 것을 번갈아 놓으면 덜 힘들다는 것을 함께 정한다. 강강술래를 맨 앞에 두자는 학생에게 "숨이 찬 뒤에 바로 노래할 수 있을까요?"라고 묻는다.',
            task: '반에서 정한 기준으로 잔치 순서를 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '우리 반이 정한 차례 "여는 인사 → 앉아서 노래 → 일어나 놀이 → 닫는 인사"대로 카드를 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: 'hello', text: '여는 인사', motif: 'sun' }, { id: 'toad', text: '두껍아 두껍아 부르기', motif: 'leaf' }, { id: 'circle', text: '강강술래 돌기', motif: 'moon' }, { id: 'bye', text: '닫는 인사', motif: 'star' }], slots: ['1', '2', '3', '4'] },
                target: { order: ['hello', 'toad', 'circle', 'bye'] }, difficulty: 0.2 },
              { prompt: '세마치장단과 작품 구경을 넣은 여섯 칸 순서를 놓아 보세요. 장단은 노래 다음, 작품 구경은 닫는 인사 바로 앞이에요.', toolOptions: { mode: 'order', cards: [{ id: 'hello', text: '여는 인사', motif: 'sun' }, { id: 'toad', text: '두껍아 두껍아 부르기', motif: 'leaf' }, { id: 'janggu', text: '무릎 장구 세마치', motif: 'cloud' }, { id: 'circle', text: '강강술래 돌기', motif: 'moon' }, { id: 'look', text: '조각보·탈 작품 구경', motif: 'flower' }, { id: 'bye', text: '닫는 인사', motif: 'star' }], slots: ['1', '2', '3', '4', '5', '6'] },
                target: { order: ['hello', 'toad', 'janggu', 'circle', 'look', 'bye'] }, difficulty: 0.35,
                hints: ['처음과 끝 인사를 먼저 놓아요.', '노래 바로 다음에 장단, 닫는 인사 바로 앞에 작품 구경이에요.', '인사 → 노래 → 장단 → 강강술래 → 작품 구경 → 인사예요.'] },
              { prompt: '잔치 순서를 정할 때 알맞은 생각만 골라 보세요.', toolOptions: { mode: 'pick', basket: '알맞은 생각', cards: ['앉아서 하는 것과 움직이는 것을 번갈아 놓아요', '인사로 열고 인사로 닫아요', { id: '나만', text: '내가 좋아하는 것만 넣어요', why: '잔치는 반 모두가 함께 정해요.' }] },
                target: { pick: ['앉아서 하는 것과 움직이는 것을 번갈아 놓아요', '인사로 열고 인사로 닫아요'] }, difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 모둠 역할 나누고 연습하기', minutes: 14, tool: 'mindmap',
            teacher: '모둠마다 잔치에서 맡을 일(사회, 노래 앞장, 장단 치기, 작품 걸기)을 하나씩 정한다. "맡은 일을 하려면 무엇이 필요할까요?" 모둠이 준비물을 말하게 한다. 역할을 정한 뒤 모둠별로 자기 순서를 한 번씩 연습한다. 한 사람이 모든 일을 하려 하면 "친구는 무엇을 할 수 있을까?"라고 묻는다.',
            task: '역할과 하는 일을 잇고, 모둠별로 맡은 순서를 연습해요.',
            levels: CARD_LV,
            items: [
              { prompt: '잔치 역할과 하는 일을 이어 보세요.', toolOptions: { mode: 'match', topic: '잔치 역할', slots: [{ id: 's1', label: '사회' }, { id: 's2', label: '장단 치기' }, { id: 's3', label: '작품 걸기' }], cards: ['순서를 알리고 인사해요', '무릎 장구로 장단을 쳐요', '조각보와 탈을 벽에 붙여요'] },
                target: { match: { s1: '순서를 알리고 인사해요', s2: '무릎 장구로 장단을 쳐요', s3: '조각보와 탈을 벽에 붙여요' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { slots: [{ id: 's1', label: '사회' }, { id: 's2', label: '장단 치기' }, { id: 's3', label: '작품 걸기' }, { id: 's4', label: '노래 앞장' }], cards: ['순서를 알리고 인사해요', '무릎 장구로 장단을 쳐요', '조각보와 탈을 벽에 붙여요', '메기는 소리를 먼저 불러요'] }, target: { match: { s1: '순서를 알리고 인사해요', s2: '무릎 장구로 장단을 쳐요', s3: '조각보와 탈을 벽에 붙여요', s4: '메기는 소리를 먼저 불러요' } }, prompt: '잔치 역할 넷과 하는 일을 이어 보세요.' } } },
              { prompt: '장단 치기 모둠에 필요한 준비물만 골라 보세요.', toolOptions: { mode: 'pick', basket: '장단 치기 준비물', cards: ['장단을 적은 종이', '앉을 자리', { id: '풀', text: '풀과 가위', why: '풀과 가위는 작품 걸기 모둠에 필요해요.' }] },
                target: { pick: ['장단을 적은 종이', '앉을 자리'] }, difficulty: 0.2 },
              { prompt: '모둠별로 맡은 순서를 한 번 연습했으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '칠판에 잔치 순서표와 모둠 역할표를 붙인다. 모둠 대표가 "우리 모둠은 ○○을 맡았어요" 하고 알린다. 다음 시간에 잔치를 연다고 알리고, 집에서 맡은 것을 한 번 더 연습해 오게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { mode: 'order', cards: [{ id: 'open', text: '여는 인사', motif: 'sun' }, { id: 'play', text: '강강술래 돌기', motif: 'moon' }, { id: 'close', text: '닫는 인사', motif: 'star' }], slots: ['1', '2', '3'] }, prompt: '잔치 순서를 처음부터 끝까지 놓아 보세요.', target: { order: ['open', 'play', 'close'] }, difficulty: 0.1 },
          { type: 'short', prompt: '잔치에서 우리 모둠이 맡은 일을 쓰세요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '우리 반 작은 잔치 계획',
      items: [
        { type: 'table', prompt: '잔치 순서를 쓰세요.', columns: ['순서', '할 것'], cells: [['1', ''], ['2', ''], ['3', ''], ['4', '']] },
        { type: 'short', prompt: '우리 모둠이 맡은 역할을 쓰세요.' },
        { type: 'short', prompt: '맡은 일에 필요한 준비물을 쓰세요.' },
        { type: 'draw', prompt: '잔치를 꾸밀 초대장 그림을 그려 보세요.' },
      ],
      easy: {
        note: '인사로 열고, 인사로 닫아요.',
        items: [
          { type: 'choice', prompt: '잔치를 여는 첫 순서는?', options: ['여는 인사', '닫는 인사'], answer: '여는 인사' },
          { type: 'short', prompt: '내가 맡은 일을 쓰세요.' },
          { type: 'draw', prompt: '잔치에서 하고 싶은 것을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 놓으면 초록 테두리가 생겨요. 네 칸 순서부터 놓아요.',
      base: '여섯 칸 잔치 순서를 놓고, 모둠 역할을 정해요.',
      challenge: '역할 넷과 하는 일을 잇고, 모둠에서 준비물 목록을 만들어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 좋아하는 것만 앞에 두려 한다 → 앉기/움직이기 번갈아 놓기 기준을 함께 정한 뒤 놓는다. ② 역할 다툼 → 다음 잔치에서 바꾸어 맡는다고 약속한다. 잔치 순서는 반마다 달라도 되며, 판에서 쓰는 순서는 수업에서 정한 기준을 따른 하나의 예이다.',
  }));

  lessons.push(L(35, {
    title: '우리 반 작은 잔치를 열어 함께 즐기기',
    objective: '계획한 순서에 따라 우리 반 작은 잔치를 열어 노래·장단·놀이·작품을 함께 즐기고, 바른 관객 태도로 친구의 발표를 볼 수 있다.',
    illustration: ART('a classroom turned into a small festival, children singing in a half circle, one group tapping knee drums, patchwork and masks hung on the wall, a paper banner across the board', '우리 반 작은 잔치', [
      { motif: 'star', x: 110, y: 84, s: 0.6 }, { motif: 'flower', x: 390, y: 226, color: 'rose' }, { motif: 'flower', x: 110, y: 226, color: 'buttercup' }]),
    safety: ['강강술래를 할 때는 책상을 밀어 둔 넓은 자리에서 천천히 걸어요.', '무릎 장구는 가볍게 두드리고, 작품을 걸 때 의자에 올라가지 않아요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 4,
        teacher: '사회 모둠이 앞에 선다. "지금부터 우리 반 작은 잔치를 열겠습니다!" 선생님은 관객 약속 세 가지를 칠판에 붙인다: "끝까지 보기, 끝나면 손뼉, 떠들지 않기." 시연 단추로 관객 약속 카드를 고르는 모습을 보여 준다.',
        student: '사회 친구의 여는 인사에 맞추어 손뼉을 쳐요.',
        demo: { tool: 'mindmap', options: { mode: 'pick', basket: '관객 약속', cards: ['끝까지 보기', '끝나면 손뼉'], shuffle: false }, sequence: [{ pick: ['끝까지 보기', '끝나면 손뼉'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 잔치 순서대로 함께 즐기기', minutes: 20, tool: 'mindmap',
            teacher: '순서표대로 진행한다: 두껍아 두껍아 → 무릎 장구 세마치 → 강강술래 → 작품 구경. 순서마다 사회 모둠이 소개하고, 끝나면 모두 손뼉을 친다. 순서가 바뀌는 사이에 판에서 짧은 물음에 답한다. 실수한 모둠에게 "괜찮아, 한 번 더!"라고 함께 말해 준다.',
            task: '잔치 순서대로 참여하고, 순서 사이에 판의 물음에 답해요.',
            levels: CARD_LV,
            items: [
              { prompt: '잔치를 볼 때 지킬 관객 약속만 골라 보세요.', toolOptions: { mode: 'pick', basket: '관객 약속', cards: ['끝까지 보기', '끝나면 손뼉 치기', { id: '떠들기', text: '친구 발표 때 떠들기', why: '떠들면 발표하는 친구 소리가 안 들려요.' }, { id: '놀리기', text: '실수하면 웃기', why: '실수한 친구는 속상해요. "괜찮아"라고 말해 줘요.' }] },
                target: { pick: ['끝까지 보기', '끝나면 손뼉 치기'] }, difficulty: 0.1 },
              { prompt: '잔치 순서와 그때 쓰는 것을 이어 보세요.', toolOptions: { mode: 'match', topic: '잔치 순서', slots: [{ id: 's1', label: '세마치장단' }, { id: 's2', label: '강강술래' }, { id: 's3', label: '작품 구경' }], cards: ['무릎 장구', '둥글게 잡은 손', '조각보와 탈'] },
                target: { match: { s1: '무릎 장구', s2: '둥글게 잡은 손', s3: '조각보와 탈' } }, difficulty: 0.15 },
              { prompt: '잔치 순서에 모두 함께 참여했으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 잔치를 마친 내 마음 나누기', minutes: 8, tool: 'emotion',
            teacher: '"잔치를 마친 지금 마음이 얼마나 즐거운가요? 정답은 없어요. 조금 떨렸던 사람도 괜찮아요." 고른 뒤 짝과 "나는 ○○ 할 때 가장 즐거웠어(떨렸어)"를 나눈다.',
            task: '잔치를 마친 마음의 크기를 고르고, 짝과 나누어요.',
            levels: { easy: { steps: 3 }, base: {}, challenge: {} },
            items: [
              { prompt: '잔치를 마친 지금, 얼마나 즐거운지 골라 보세요. 정답은 없어요.', toolOptions: { mode: 'scale', situation: '우리 반 작은 잔치를 마쳤어요.', feeling: '기쁨', scaleLabels: { 1: '조금', 5: '아주 많이' }, after: '가장 즐거웠던 순서를 짝에게 말해요.' }, target: { level: 'any' }, difficulty: 0.05 },
              { prompt: '짝과 가장 즐거웠던 순서를 나누었으면 "다 했어요"를 누르세요.', free: true, talk: true },
              { prompt: '잔치에서 내가 잘한 것을 말하는 말만 골라 보세요.', toolOptions: { mode: 'pick', basket: '내가 잘한 것', cards: ['장단을 끝까지 쳤어요', '친구 발표에 손뼉을 쳤어요', { id: '남탓', text: '친구 때문에 틀렸어요', why: '친구 탓이 아니라 내가 한 것을 말해요.' }] },
                target: { pick: ['장단을 끝까지 쳤어요', '친구 발표에 손뼉을 쳤어요'] }, difficulty: 0.15 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '사회 모둠이 닫는 인사를 한다. "잔치를 준비하고 열어 보니 무엇이 좋았나요?" 서너 명이 말한다. 다음 시간에는 그동안 해 본 국악과 전통 미술을 돌아본다고 알린다.',
        exitTicket: [
          { type: 'choice', prompt: '친구가 발표하다 실수했을 때 알맞은 말은?', options: ['"괜찮아, 한 번 더!"', '"틀렸다!"', '아무 말 없이 떠나요'], answer: 0, difficulty: 0.1, explain: '응원하는 말을 들으면 다시 해 볼 힘이 나요.' },
          { type: 'short', prompt: '잔치에서 가장 즐거웠던 순서와 까닭을 쓰세요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '우리 반 작은 잔치',
      items: [
        { type: 'check', prompt: '잔치에서 한 것에 ✓ 하세요.', options: ['두껍아 두껍아를 불렀어요', '무릎 장구로 세마치를 쳤어요', '강강술래를 돌았어요', '작품을 구경했어요'] },
        { type: 'check', prompt: '지킨 관객 약속에 ✓ 하세요.', options: ['끝까지 보았어요', '끝나면 손뼉을 쳤어요', '떠들지 않았어요'] },
        { type: 'draw', prompt: '잔치에서 가장 즐거웠던 장면을 그려 보세요.' },
        { type: 'short', prompt: '다음 잔치에서 해 보고 싶은 것을 쓰세요.' },
      ],
      easy: {
        note: '끝까지 보고, 끝나면 손뼉!',
        items: [
          { type: 'draw', prompt: '잔치에서 즐거웠던 장면을 그려 보세요.' },
          { type: 'choice', prompt: '친구 발표가 끝나면?', options: ['손뼉을 쳐요', '떠들어요'], answer: '손뼉을 쳐요' },
          { type: 'short', prompt: '가장 즐거웠던 순서를 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 놓으면 초록 테두리가 생겨요. 마음 크기는 세 칸이에요.',
      base: '잔치 순서에 참여하고, 관객 약속을 지키며 마음을 나누어요.',
      challenge: '사회나 앞장 역할을 맡아 순서를 소개하고, 친구 발표에 칭찬 한 마디를 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 발표 순서를 기다리지 못한다 → 다음 순서 모둠은 무대 옆 정해진 자리에서 기다리게 한다. ② 떨려서 하지 않으려는 학생 → 모둠 뒤에서 함께 하거나 관객 역할을 맡아도 된다고 알린다. 마음 크기는 학생이 고른 대로 받아들이고, 낮게 고른 학생은 따로 까닭을 묻되 고치게 하지 않는다.',
  }));

  lessons.push(L(36, {
    title: '국악과 전통 미술 체험을 돌아보기',
    objective: '그동안 해 본 국악기·장단·전래 동요·전통 무늬 활동을 소리·놀이·무늬로 정리하고, 가장 마음에 남은 것과 까닭을 말할 수 있다.',
    illustration: ART('a big paper scrapbook opened on a desk showing small pictures of a drum, a zither, rainbow sleeves, a mask and children holding hands in a circle, with a child placing a heart sticker on one page', '돌아보기', [
      { motif: 'star', x: 110, y: 84, s: 0.6 }, { motif: 'cloud', x: 330, y: 64 }, { motif: 'flower', x: 390, y: 226, color: 'lavender' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '25차시부터 한 활동 사진을 차례로 넘겨 보여 준다. "이때 무엇을 했나요?" 학생들이 하나씩 말하게 한다. "오늘은 한 것을 칸에 나누어 정리하고, 가장 마음에 남은 것을 골라요." 시연 단추로 활동 카드가 칸에 나뉘는 모습을 보여 준다.',
        student: '사진 가운데 가장 기억나는 장면을 손가락으로 가리켜요.',
        demo: { tool: 'mindmap', options: { mode: 'sort', slots: [{ id: 'sound', label: '소리' }, { id: 'art', label: '무늬·꾸미기' }], cards: ['장구 치기', '색동 줄 채우기'], shuffle: false }, sequence: [{ sort: { sound: ['장구 치기'], art: ['색동 줄 채우기'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 해 본 것을 세 칸으로 정리하기', minutes: 12, tool: 'mindmap',
            teacher: '"귀로 듣고 소리 낸 것, 몸으로 함께 논 것, 눈으로 보고 꾸민 것으로 나누어 봐요." 전래 동요처럼 노래와 놀이가 함께인 것은 반에서 기준을 정한다(오늘은 노래는 소리 칸, 원을 돌며 노는 것은 놀이 칸). 정리한 뒤 모둠마다 한 칸씩 맡아 \'우리가 한 것\' 판을 만든다.',
            task: '해 본 활동을 소리·놀이·무늬 칸에 나누어 정리해요.',
            levels: CARD_LV,
            items: [
              { prompt: '해 본 활동을 알맞은 칸에 넣어 보세요.', toolOptions: { mode: 'sort', slots: [{ id: 'sound', label: '소리 내기' }, { id: 'play', label: '몸으로 놀기' }, { id: 'art', label: '보고 꾸미기' }], cards: ['무릎 장구 치기', '강강술래 돌기', '조각보 붙이기', '탈 꾸미기'] },
                target: { sort: { sound: ['무릎 장구 치기'], play: ['강강술래 돌기'], art: ['조각보 붙이기', '탈 꾸미기'] } }, difficulty: 0.2,
                hints: ['그 활동을 할 때 손·귀·눈 가운데 무엇을 가장 많이 썼는지 떠올려 보세요.', '꾸미기 칸에는 색종이를 쓴 활동이 들어가요.', '장구는 소리, 강강술래는 놀이, 조각보·탈은 꾸미기예요.'] },
              { prompt: '국악기와 소리 내는 방법을 이어 보세요.', toolOptions: { mode: 'match', topic: '다시 보는 국악기', slots: [{ id: 's1', label: '꽹과리' }, { id: 's2', label: '해금' }, { id: 's3', label: '단소' }], cards: ['채로 쳐요', '활로 켜요', '입으로 불어요'] },
                target: { match: { s1: '채로 쳐요', s2: '활로 켜요', s3: '입으로 불어요' } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['채로 쳐요', '활로 켜요', '입으로 불어요', { id: '뜯어', text: '손가락으로 뜯어요', why: '뜯는 악기는 가야금이었어요.' }] } } } },
              { prompt: '모둠이 맡은 칸으로 \'우리가 한 것\' 판을 꾸몄으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 가장 마음에 남은 것 고르기', minutes: 14, tool: 'emotion',
            teacher: '"다시 해 보고 싶은 마음이 얼마나 큰가요? 정답은 없어요." 마음 크기를 고른 뒤, 가장 마음에 남은 활동 하나를 골라 까닭을 붙여 짝에게 말한다: "나는 ○○이 마음에 남아. 왜냐하면 ○○." 까닭을 "그냥"이라고 하는 학생에게 "그때 어떤 소리(모습)가 좋았나요?"라고 묻는다.',
            task: '다시 해 보고 싶은 마음을 고르고, 마음에 남은 것을 까닭과 함께 말해요.',
            levels: { easy: { steps: 3 }, base: {}, challenge: {} },
            items: [
              { prompt: '국악과 전통 미술 활동을 다시 해 보고 싶은 마음이 얼마나 큰지 골라 보세요. 정답은 없어요.', toolOptions: { mode: 'scale', situation: '국악기, 장단, 전래 동요, 색동, 조각보, 탈 활동을 모두 해 보았어요.', feeling: '설렘', scaleLabels: { 1: '조금', 5: '아주 많이' }, after: '가장 마음에 남은 것을 하나 골라 까닭을 말해요.' }, target: { level: 'any' }, difficulty: 0.05 },
              { prompt: '까닭을 붙여 말한 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '까닭이 있는 말', cards: ['장구가 좋아. 덩 소리가 크고 신나서', '탈이 좋아. 웃는 얼굴로 춤춰서', { id: '그냥', text: '그냥 좋아', why: '무엇이 좋았는지 까닭을 붙여 말해요.' }] },
                target: { pick: ['장구가 좋아. 덩 소리가 크고 신나서', '탈이 좋아. 웃는 얼굴로 춤춰서'] }, difficulty: 0.15 },
              { prompt: '짝에게 가장 마음에 남은 것을 까닭과 함께 말했으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '\'우리가 한 것\' 판 위에 학생마다 마음에 남은 활동에 하트 붙임 딱지를 붙인다. "다음 시간부터는 다른 나라의 노래와 악기, 무늬를 만나 우리 것과 견주어 봐요."',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'sort', slots: [{ id: 'sound', label: '소리 내기' }, { id: 'art', label: '보고 꾸미기' }], cards: ['세마치장단 치기', '색동 소매 붙이기'] }, prompt: '해 본 활동을 알맞은 칸에 넣어 보세요.', target: { sort: { sound: ['세마치장단 치기'], art: ['색동 소매 붙이기'] } }, difficulty: 0.1 },
          { type: 'short', prompt: '가장 마음에 남은 활동과 그 까닭을 쓰세요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '국악과 전통 미술 돌아보기',
      items: [
        { type: 'table', prompt: '해 본 것을 칸에 나누어 쓰세요.', columns: ['소리 내기', '몸으로 놀기', '보고 꾸미기'], cells: [['', '', ''], ['', '', '']] },
        { type: 'short', prompt: '가장 마음에 남은 활동을 쓰세요.' },
        { type: 'short', prompt: '그 활동이 마음에 남은 까닭을 쓰세요.' },
        { type: 'draw', prompt: '다시 해 보고 싶은 장면을 그려 보세요.' },
      ],
      easy: {
        note: '"나는 ○○이 좋아. 왜냐하면 ○○."',
        items: [
          { type: 'draw', prompt: '가장 마음에 남은 활동을 그려 보세요.' },
          { type: 'short', prompt: '좋았던 까닭을 낱말로 쓰세요.' },
          { type: 'choice', prompt: '장구는 어떻게 소리를 낼까요?', options: ['쳐요', '불어요'], answer: '쳐요' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 놓으면 초록 테두리가 생겨요. 마음 크기는 세 칸이에요.',
      base: '해 본 것을 세 칸으로 나누고, 마음에 남은 것을 까닭과 함께 말해요.',
      challenge: '함정 카드를 골라내고, 마음에 남은 것 두 가지를 견주어 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 한 활동이 여러 칸에 맞는다고 망설인다 → 그때 가장 많이 쓴 몸(귀·몸·눈)을 기준으로 고르게 하고, 다른 생각도 말로 받아 준다. ② 까닭 없이 "그냥 좋아"라고 한다 → 그때의 소리나 모습을 떠올리게 묻는다. 마음 크기는 학생이 고른 그대로 받아들인다.',
  }));

  // ───────────────────────── 37~40차시: 여러 나라 음악과 그림을 견주어 보기 ─────────────────────────

  lessons.push(L(37, {
    title: '같은 가락을 빠르게 느리게 쳐 보기',
    objective: '프랑스 민요 가락을 따라 치고, 같은 가락도 빠르기에 따라 느낌이 달라진다는 것을 몸짓과 말로 나타낼 수 있다.',
    illustration: ART('a paper keyboard with a child pressing keys, on one side a running rabbit and on the other side a slow turtle, musical notes floating between them', '빠르게 느리게', [
      { motif: 'star', x: 110, y: 84, s: 0.6 }, { motif: 'cloud', x: 330, y: 64 }, { motif: 'flower', x: 390, y: 226, color: 'sky' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '건반으로 "도 도 솔 솔 라 라 솔"을 아주 느리게, 다음에는 아주 빠르게 쳐 들려준다. "같은 가락인데 느낌이 어땠나요?" 느릴 때는 거북이, 빠를 때는 토끼처럼 걸어 보게 한다. "이 가락은 프랑스에서 오래전부터 불러 온 민요예요(작자 미상). 여러 나라에서 다른 노랫말로 불러요." 시연 단추로 건반 가락이 띠에 놓이는 모습을 보여 준다.',
        student: '느린 가락에는 거북이 걸음, 빠른 가락에는 토끼 걸음으로 제자리 걸어요.',
        demo: { tool: 'keyboard', options: { mode: 'melody', from: '도', to: '높은도', melody: ['도', '도', '솔', '솔'] }, sequence: [{ notes: ['도', '도', '솔', '솔'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 프랑스 민요 가락 따라 치기', minutes: 14, tool: 'keyboard',
            teacher: '"가락 듣기를 누르고 들은 대로 건반을 쳐요. 같은 음이 두 번씩 나와요." 친 뒤에는 그 가락을 \'라\'로 소리 내어 부른다. 높아지는 곳에서 손을 위로 올리게 한다. 건반을 하나씩 건너뛰는 학생에게 \'솔\'에 스티커를 붙여 찾게 한다.',
            task: '가락을 듣고 건반으로 따라 쳐요.',
            levels: {
              easy: { mode: 'melody', from: '도', to: '높은도', names: 'solfa' },
              base: { mode: 'melody', from: '도', to: '높은도', names: 'solfa' },
              challenge: { mode: 'melody', from: '도', to: '높은도', names: 'none', nameToggle: false },
            },
            items: [
              { prompt: '가락 듣기를 누르고, 첫 네 음을 똑같이 쳐 보세요.', toolOptions: { melody: ['도', '도', '솔', '솔'] }, target: { notes: ['도', '도', '솔', '솔'] }, difficulty: 0.15,
                hints: ['같은 음이 두 번씩 나와요. 몇 번 높아지는지 들어 보세요.', '처음 음은 맨 왼쪽 건반이고, 한 번 크게 높아져요.', '도 도 솔 솔이에요.'] },
              { prompt: '가락 듣기를 누르고, 일곱 음을 똑같이 쳐 보세요.', toolOptions: { melody: ['도', '도', '솔', '솔', '라', '라', '솔'] }, target: { notes: ['도', '도', '솔', '솔', '라', '라', '솔'] }, difficulty: 0.3,
                levels: { easy: { prompt: '가락 듣기를 누르고, 뒤의 세 음을 똑같이 쳐 보세요.', toolOptions: { melody: ['라', '라', '솔'] }, target: { notes: ['라', '라', '솔'] } } },
                hints: ['앞 네 음은 앞 문항과 같아요. 그다음 음이 조금 더 높아져요.', '끝 음은 다시 한 칸 내려와요.', '도 도 솔 솔 라 라 솔이에요.'] },
              { prompt: '가락 듣기를 누르고, 내려가는 일곱 음을 똑같이 쳐 보세요.', toolOptions: { melody: ['파', '파', '미', '미', '레', '레', '도'] }, target: { notes: ['파', '파', '미', '미', '레', '레', '도'] }, difficulty: 0.35,
                levels: { easy: { prompt: '가락 듣기를 누르고, 내려가는 네 음을 똑같이 쳐 보세요.', toolOptions: { melody: ['레', '레', '도', '도'] }, target: { notes: ['레', '레', '도', '도'] } } },
                hints: ['이번에는 계속 한 칸씩 내려가요.', '처음 음은 솔 바로 아래 건반이에요.', '파 파 미 미 레 레 도예요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 빠르기에 따라 달라지는 느낌', minutes: 12, tool: 'mindmap',
            teacher: '같은 가락을 아주 느리게, 보통으로, 아주 빠르게 세 번 친다. 들을 때마다 몸으로 나타낸다(느릴 때 팔을 천천히 흔들기, 빠를 때 손뼉 빨리 치기). "빠르면 늘 기쁜 느낌일까요?" 느끼는 것은 저마다 다를 수 있다고 말해 준다. 판에서는 빠르기와 어울리는 쓰임을 잇는다.',
            task: '빠르기와 어울리는 쓰임을 잇고, 빠르기에 따라 몸으로 나타내요.',
            levels: CARD_LV,
            items: [
              { prompt: '가락의 빠르기와 어울리는 쓰임을 이어 보세요.', toolOptions: { mode: 'match', topic: '빠르기와 쓰임', slots: [{ id: 's1', label: '아주 느리고 여리게' }, { id: 's2', label: '빠르고 힘차게' }], cards: ['아기를 재우는 자장가', '운동회 달리기 음악'] },
                target: { match: { s1: '아기를 재우는 자장가', s2: '운동회 달리기 음악' } }, difficulty: 0.15 },
              { prompt: '빠르기와 어울리는 몸짓을 이어 보세요.', toolOptions: { mode: 'match', topic: '빠르기와 몸짓', slots: [{ id: 's1', label: '느린 가락' }, { id: 's2', label: '빠른 가락' }], cards: ['팔을 천천히 흔들어요', '손뼉을 빨리 쳐요'] },
                target: { match: { s1: '팔을 천천히 흔들어요', s2: '손뼉을 빨리 쳐요' } }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { slots: [{ id: 's1', label: '느린 가락' }, { id: 's2', label: '빠른 가락' }, { id: 's3', label: '보통 빠르기 가락' }], cards: ['팔을 천천히 흔들어요', '손뼉을 빨리 쳐요', '박에 맞추어 걸어요'] }, target: { match: { s1: '팔을 천천히 흔들어요', s2: '손뼉을 빨리 쳐요', s3: '박에 맞추어 걸어요' } }, prompt: '세 가지 빠르기와 어울리는 몸짓을 이어 보세요.' } } },
              { prompt: '선생님이 치는 세 빠르기에 맞추어 몸으로 나타냈으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"같은 가락인데 빠르기만 바꾸니 무엇이 달라졌나요?" 서너 명이 말한다. 느낌은 사람마다 다를 수 있으니 친구 말을 끝까지 듣게 한다. 다음 시간에는 다른 나라 악기와 우리 악기를 견주어 본다고 알린다.',
        exitTicket: [
          { type: 'choice', prompt: '같은 가락을 아주 느리게 치면 어울리는 쓰임은?', options: ['자장가', '달리기 음악', '불이야 알림'], answer: 0, difficulty: 0.15, explain: '느리고 여린 가락은 아기를 재울 때 잘 어울려요.' },
          { type: 'tool', tool: 'keyboard', options: { mode: 'melody', from: '도', to: '높은도', names: 'solfa', melody: ['솔', '솔', '라', '라'] }, prompt: '가락 듣기를 누르고, 네 음을 똑같이 쳐 보세요.', target: { notes: ['솔', '솔', '라', '라'] }, difficulty: 0.15 },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '빠르게 느리게',
      items: [
        { type: 'blank', prompt: '가락의 빈칸에 들어갈 계이름을 쓰세요.', text: '도 도 솔 솔 ___ ___ 솔', answer: '라, 라' },
        { type: 'table', prompt: '빠르기마다 느낌과 몸짓을 쓰세요.', columns: ['빠르기', '느낌', '몸짓'], cells: [['느리게', '', ''], ['빠르게', '', '']] },
        { type: 'short', prompt: '이 가락을 어느 나라에서 오래전부터 불러 왔는지 쓰세요.' },
        { type: 'draw', prompt: '느린 가락과 빠른 가락에 어울리는 동물을 그려 보세요.' },
      ],
      easy: {
        note: '느리면 거북이, 빠르면 토끼!',
        items: [
          { type: 'choice', prompt: '자장가는 어떤 빠르기가 어울릴까요?', options: ['느리게', '빠르게'], answer: '느리게' },
          { type: 'draw', prompt: '빠른 가락에 어울리는 동물을 그려 보세요.' },
          { type: 'short', prompt: '느린 가락을 들은 느낌을 낱말로 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '짧은 가락(서너 음)을 계이름이 보이는 건반으로 따라 쳐요.',
      base: '일곱 음 가락을 따라 치고, 빠르기와 쓰임을 이어요.',
      challenge: '계이름이 숨은 건반으로 따라 치고, 세 가지 빠르기와 몸짓을 이어요.',
    },
    teacherNotes: '이 가락은 18세기부터 전해 오는 프랑스 민요(작자 미상, 공공 영역)이며, 노랫말은 쓰지 않고 가락만 다룬다. 자주 보이는 어려움: ① 빠르면 기쁘고 느리면 슬프다고만 여긴다 → 느린 가락이 편안하게 들릴 수도 있다는 것을 친구 말로 들려준다. ② 같은 음이 두 번 나오는 곳을 한 번만 친다 → 손가락으로 두 번 짚으며 "도 도"를 말하게 한다.',
  }));

  lessons.push(L(38, {
    title: '다른 나라 악기와 우리 악기 견주기',
    objective: '해금과 바이올린, 가야금과 기타, 단소와 리코더처럼 소리 내는 방법이 같은 악기를 짝 짓고, 같은 점과 다른 점을 말할 수 있다.',
    illustration: ART('three pairs of instruments facing each other on a paper shelf, a two-string Korean fiddle beside a violin, a long Korean zither beside a guitar and a bamboo flute beside a recorder, little equal signs between them', '닮은 악기 짝', [
      { motif: 'star', x: 110, y: 84, s: 0.6 }, { motif: 'leaf', x: 380, y: 222 }, { motif: 'flower', x: 110, y: 226, color: 'peach' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '해금 소리와 바이올린 소리를 이어서 들려준다. "두 악기는 어떻게 소리를 낼까요?" 연주 사진을 보여 주며 둘 다 활로 줄을 켠다는 것을 찾게 한다. "다른 나라 악기에도 우리 악기와 닮은 것이 있어요." 시연 단추로 닮은 악기 짝이 이어지는 모습을 보여 준다.',
        student: '해금과 바이올린 소리 가운데 어느 소리가 더 좋은지 손을 들어요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '닮은 악기 짝', slots: [{ id: 's1', label: '해금' }], cards: ['바이올린', '기타'], shuffle: false }, sequence: [{ match: { s1: '바이올린' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 소리 내는 방법이 같은 악기 짝 짓기', minutes: 13, tool: 'mindmap',
            teacher: '"27차시에 배운 뜯기·켜기·불기를 떠올려 봐요." 악기 사진을 보며 연주하는 손과 입을 찾는다. 가야금과 기타가 모두 손가락으로 줄을 뜯는다는 것, 단소와 리코더가 모두 입으로 불고 구멍을 막는다는 것을 짚는다. 생김새만 보고 짝을 짓는 학생에게 "어떻게 소리를 내나요?"라고 다시 묻는다.',
            task: '소리 내는 방법이 같은 우리 악기와 다른 나라 악기를 짝 지어요.',
            levels: CARD_LV,
            items: [
              { prompt: '소리 내는 방법이 같은 악기끼리 이어 보세요.', toolOptions: { mode: 'match', topic: '닮은 악기 짝', slots: [{ id: 's1', label: '가야금(줄을 뜯어요)' }, { id: 's2', label: '단소(입으로 불어요)' }], cards: ['기타', '리코더'] },
                target: { match: { s1: '기타', s2: '리코더' } }, difficulty: 0.15 },
              { prompt: '소리 내는 방법이 같은 악기끼리 이어 보세요. 우리 악기 이름만 보고 떠올려요.', toolOptions: { mode: 'match', topic: '닮은 악기 짝', slots: [{ id: 's1', label: '해금' }, { id: 's2', label: '가야금' }, { id: 's3', label: '단소' }], cards: ['바이올린', '기타', '리코더'] },
                target: { match: { s1: '바이올린', s2: '기타', s3: '리코더' } }, difficulty: 0.25,
                hints: ['우리 악기마다 뜯는지, 켜는지, 부는지 먼저 떠올려 보세요.', '활을 쓰는 악기끼리, 손가락으로 뜯는 악기끼리 짝이에요.', '해금-바이올린, 가야금-기타, 단소-리코더예요.'],
                levels: { challenge: { toolOptions: { cards: ['바이올린', '기타', '리코더', { id: '드럼', text: '드럼', why: '드럼은 두드려 치는 악기예요. 장구와 짝이 돼요.' }] } } } },
              { prompt: '해금과 바이올린이 같은 점만 골라 보세요.', toolOptions: { mode: 'pick', basket: '같은 점', cards: ['활로 줄을 켜요', '줄이 있어요', { id: '줄수', text: '줄 수가 같아요', why: '해금은 줄이 둘, 바이올린은 넷이에요.' }, { id: '자세', text: '어깨에 올려 연주해요', why: '해금은 무릎에 세우고, 바이올린은 어깨에 올려요.' }] },
                target: { pick: ['활로 줄을 켜요', '줄이 있어요'] }, difficulty: 0.3,
                predict: { q: '닮은 악기는 모든 것이 똑같을까요?', options: ['모두 똑같아요', '같은 점도 다른 점도 있어요'], answer: 1 },
                conclude: '닮은 악기도 소리 내는 방법은 같지만 줄 수와 연주 자세는 달라요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 같은 점과 다른 점 말하고 연주 흉내 내기', minutes: 13, tool: 'mindmap',
            teacher: '"가야금과 기타를 견주어 같은 점과 다른 점을 말해 볼까요?" 가야금은 바닥에 앉아 무릎에 얹고, 기타는 의자에 앉아 품에 안는다는 것을 몸짓으로 보여 준다. 판에서 나눈 뒤, 짝과 한 사람은 가야금, 한 사람은 기타 흉내를 내며 "같은 점은 ○○, 다른 점은 ○○" 하고 말한다.',
            task: '두 악기의 같은 점과 다른 점을 나누고, 짝과 연주 흉내를 내며 말해요.',
            levels: CARD_LV,
            items: [
              { prompt: '가야금과 기타를 견준 말을 같은 점과 다른 점으로 나누어 보세요.', toolOptions: { mode: 'sort', slots: [{ id: 'same', label: '같은 점' }, { id: 'diff', label: '다른 점' }], cards: ['둘 다 손가락으로 줄을 뜯어요', '가야금은 무릎에 얹고, 기타는 품에 안아요', '가야금은 줄이 더 많아요'] },
                target: { sort: { same: ['둘 다 손가락으로 줄을 뜯어요'], diff: ['가야금은 무릎에 얹고, 기타는 품에 안아요', '가야금은 줄이 더 많아요'] } }, difficulty: 0.2,
                hints: ['"둘 다"가 들어간 말과 두 악기를 따로 말한 말을 나누어 봐요.', '두 악기가 다르게 하는 것은 다른 점 칸이에요.', '뜯는 것은 같은 점, 자세와 줄 수는 다른 점이에요.'] },
              { prompt: '단소와 리코더를 견준 말을 같은 점과 다른 점으로 나누어 보세요.', toolOptions: { mode: 'sort', slots: [{ id: 'same', label: '같은 점' }, { id: 'diff', label: '다른 점' }], cards: ['둘 다 입으로 불어요', '둘 다 손가락으로 구멍을 막아요', '단소는 대나무, 리코더는 플라스틱이나 나무로 만들어요'] },
                target: { sort: { same: ['둘 다 입으로 불어요', '둘 다 손가락으로 구멍을 막아요'], diff: ['단소는 대나무, 리코더는 플라스틱이나 나무로 만들어요'] } }, difficulty: 0.2 },
              { prompt: '짝과 연주 흉내를 내며 같은 점과 다른 점을 말했으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"멀리 떨어진 나라 악기인데 왜 닮은 점이 있을까요?" 학생들의 생각을 듣는다(줄을 뜯거나 켜거나 부는 방법은 어디서나 소리를 낼 수 있다). 다음 시간에는 여러 나라의 무늬를 견주어 본다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '닮은 악기 짝', slots: [{ id: 'e1', label: '장구(두드려 쳐요)' }, { id: 'e2', label: '해금(활로 켜요)' }], cards: ['드럼', '바이올린'] }, prompt: '소리 내는 방법이 같은 악기끼리 이어 보세요.', target: { match: { e1: '드럼', e2: '바이올린' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '가야금과 기타가 같은 점은?', options: ['손가락으로 줄을 뜯어요', '입으로 불어요', '줄 수가 같아요'], answer: 0, difficulty: 0.15, explain: '둘 다 손가락으로 줄을 뜯어 소리를 내요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '닮은 악기 짝',
      items: [
        { type: 'table', prompt: '닮은 악기 짝과 같은 점을 쓰세요.', columns: ['우리 악기', '다른 나라 악기', '같은 점'], cells: [['해금', '', ''], ['가야금', '', ''], ['단소', '', '']] },
        { type: 'short', prompt: '가야금과 기타의 다른 점을 하나 쓰세요.' },
        { type: 'draw', prompt: '닮은 악기 한 짝을 나란히 그려 보세요.' },
        { type: 'short', prompt: '더 알아보고 싶은 다른 나라 악기를 쓰세요.' },
      ],
      easy: {
        note: '뜯기는 뜯기끼리, 켜기는 켜기끼리, 불기는 불기끼리!',
        items: [
          { type: 'choice', prompt: '해금과 닮은 악기에 ○ 하세요.', options: ['바이올린', '리코더'], answer: '바이올린' },
          { type: 'choice', prompt: '단소와 닮은 악기에 ○ 하세요.', options: ['리코더', '기타'], answer: '리코더' },
          { type: 'draw', prompt: '닮은 악기 한 짝을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 놓으면 초록 테두리가 생겨요. 악기 두 짝부터 이어요.',
      base: '닮은 악기 세 짝을 잇고, 같은 점과 다른 점을 나누어요.',
      challenge: '함정 악기를 골라내고, 같은 점만 골라 다른 점과 견주어 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 생김새만 보고 짝을 짓는다 → 소리 내는 방법을 먼저 묻는다. ② 닮은 악기는 모두 같다고 여긴다 → 줄 수(해금 2줄, 바이올린 4줄)와 연주 자세 차이를 사진으로 짚는다. 가야금은 열두 줄이 기본이며, 줄을 더 늘린 가야금도 있다. 실물 리코더가 있으면 소리를 들려주되 나누어 불지 않는다.',
  }));

  lessons.push(L(39, {
    title: '여러 나라 무늬를 견주고 따라 만들기',
    objective: '색동(우리나라), 켄테 천(가나), 타탄(스코틀랜드)의 무늬를 견주어 같은 점과 다른 점을 찾고, 되풀이 규칙으로 무늬 띠를 만들 수 있다.',
    illustration: ART('three paper fabric swatches hanging on a line, Korean rainbow striped sleeves, a Ghanaian woven cloth with bold yellow, green and red blocks, and a Scottish checked cloth with crossing lines', '여러 나라 무늬', [
      { motif: 'sun', x: 120, y: 70, s: 0.6 }, { motif: 'cloud', x: 330, y: 64 }, { motif: 'flower', x: 390, y: 226, color: 'mint' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '세 나라 천 사진을 나란히 붙인다. "색동은 우리나라, 켄테 천은 아프리카 가나, 타탄은 영국 스코틀랜드의 천이에요." 세계 칸 지도에서 우리나라와 아프리카를 짚는다. "세 무늬에 같은 점이 있을까요?" 시연 단추로 무늬 빈칸이 채워지는 모습을 보여 준다.',
        student: '세 무늬 가운데 내 옷으로 입고 싶은 것을 하나 골라 말해요.',
        demo: { tool: 'pattern', options: { seq: ['square:buttercup', 'square:mint', 'square:rose', 'square:buttercup', 'square:mint', null] }, sequence: [{ fill: ['square:rose'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 세 나라 무늬 견주기', minutes: 12, tool: 'mindmap',
            teacher: '"색동은 줄이 나란히 이어지고, 타탄은 가로줄과 세로줄이 엇갈려 네모 칸이 생겨요. 켄테 천은 좁은 띠를 짜서 이어 붙여 큰 네모 무늬가 생겨요." 사진 위에서 줄을 손가락으로 따라가 보게 한다. 세 무늬 모두 \'되풀이\'가 있다는 것을 찾게 한다. 한 나라 무늬만 아름답다고 하는 학생에게 "다른 무늬에서 마음에 드는 곳도 하나 찾아볼까요?"라고 권한다.',
            task: '무늬와 나라를 잇고, 세 무늬의 같은 점을 찾아요.',
            levels: CARD_LV,
            items: [
              { prompt: '무늬 설명과 나라를 이어 보세요.', toolOptions: { mode: 'match', topic: '무늬와 나라', slots: [{ id: 's1', label: '여러 색 줄이 나란히 이어진 색동' }, { id: 's2', label: '가로줄과 세로줄이 엇갈린 타탄' }, { id: 's3', label: '좁은 띠를 짜서 이어 붙인 켄테 천' }], cards: ['우리나라', '스코틀랜드', '가나'] },
                target: { match: { s1: '우리나라', s2: '스코틀랜드', s3: '가나' } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['우리나라', '스코틀랜드', '가나', { id: '일본', text: '일본', why: '오늘 본 세 무늬에는 일본 무늬가 없어요.' }] } } } },
              { prompt: '세 나라 무늬에 모두 있는 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '세 무늬에 모두 있어요', cards: ['같은 차례가 되풀이돼요', '여러 색을 써요', { id: '엇갈', text: '가로줄과 세로줄이 엇갈려요', why: '엇갈린 줄은 타탄 무늬의 모습이에요.' }, { id: '동물', text: '동물 그림이 있어요', why: '세 무늬는 줄과 색으로 되어 있어요.' }] },
                target: { pick: ['같은 차례가 되풀이돼요', '여러 색을 써요'] }, difficulty: 0.25,
                hints: ['세 사진을 하나씩 보며 그것이 모두에게 있는지 따져 봐요.', '줄이 엇갈리는 무늬는 하나뿐이에요.', '되풀이와 여러 색은 세 무늬 모두에 있어요.'] },
              { prompt: '색동과 타탄을 견준 말을 같은 점과 다른 점으로 나누어 보세요.', toolOptions: { mode: 'sort', slots: [{ id: 'same', label: '같은 점' }, { id: 'diff', label: '다른 점' }], cards: ['둘 다 색 차례가 되풀이돼요', '색동은 줄이 나란하고, 타탄은 줄이 엇갈려요'] },
                target: { sort: { same: ['둘 다 색 차례가 되풀이돼요'], diff: ['색동은 줄이 나란하고, 타탄은 줄이 엇갈려요'] } }, difficulty: 0.2 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 되풀이 규칙으로 무늬 띠 만들기', minutes: 14, tool: 'pattern',
            teacher: '"세 무늬 가운데 하나를 골라, 그 나라 무늬처럼 되풀이 규칙을 정해 띠를 만들어요." 판에서 먼저 만든 뒤 색연필로 종이 띠에 옮겨 그린다. 다 그린 띠는 세계 칸 지도의 그 나라 옆에 붙인다. 묶음 차례가 중간에 바뀌는 학생에게 "처음 묶음과 같은 차례인가요?"라고 묻는다.',
            task: '되풀이 규칙을 정해 무늬 띠를 만들고, 종이 띠에 옮겨 그려요.',
            levels: {
              easy: { mode: 'make', palette: ['square:rose', 'square:buttercup', 'square:sky'], length: 6 },
              base: { mode: 'make', palette: ['square:rose', 'square:buttercup', 'square:mint', 'square:sky', 'square:ink'], length: 9 },
              challenge: { mode: 'make', palette: ['square:rose', 'square:buttercup', 'square:mint', 'square:sky', 'square:ink', 'square:lavender'], length: 12 },
            },
            items: [
              { prompt: '두 색이 한 묶음으로 되풀이되는 무늬 띠를 만들어 보세요.', target: { rule: 'repeat', period: 2 }, difficulty: 0.15,
                hints: ['처음 두 칸에 서로 다른 색을 놓아 묶음을 정해요.', '셋째 칸부터는 처음 두 칸을 그대로 따라 놓아요.', '첫 묶음 두 색을 끝까지 똑같이 되풀이해요.'] },
              { prompt: '세 색이 한 묶음으로 되풀이되는 무늬 띠를 만들어 보세요.', target: { rule: 'repeat', period: 3, uses: 3 }, difficulty: 0.25,
                hints: ['처음 세 칸에 서로 다른 색 셋을 놓아 묶음을 정해요.', '넷째 칸은 첫째 칸과 같은 색이에요.', '첫 묶음 세 색을 끝까지 똑같이 되풀이해요.'] },
              { prompt: '고른 나라 무늬처럼 종이 띠에 옮겨 그려 세계 칸 지도 옆에 붙였으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '세계 칸 지도 옆에 붙은 무늬 띠를 함께 본다. "멀리 떨어진 나라끼리도 되풀이 무늬를 썼어요. 어떤 생각이 드나요?" 다음 시간에는 다른 나라 자장가와 우리 자장가를 견주어 듣는다고 알린다.',
        exitTicket: [
          { type: 'choice', prompt: '가로줄과 세로줄이 엇갈려 네모 칸이 생기는 무늬는?', options: ['타탄', '색동', '태극'], answer: 0, difficulty: 0.2, explain: '타탄은 가로줄과 세로줄이 엇갈려요.' },
          { type: 'tool', tool: 'pattern', options: { seq: ['square:ink', 'square:buttercup', 'square:mint', 'square:ink', 'square:buttercup', null] }, prompt: '세 색이 되풀이되는 무늬 띠예요. 빈칸을 채워 보세요.', target: { fill: ['square:mint'] }, difficulty: 0.15 },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '여러 나라 무늬',
      items: [
        { type: 'table', prompt: '무늬와 나라를 쓰세요.', columns: ['무늬', '나라', '모습'], cells: [['색동', '', ''], ['타탄', '', ''], ['켄테 천', '', '']] },
        { type: 'short', prompt: '세 무늬의 같은 점을 쓰세요.' },
        { type: 'draw', prompt: '고른 나라 무늬처럼 되풀이 무늬 띠를 그려 보세요.' },
        { type: 'short', prompt: '내가 정한 되풀이 규칙을 쓰세요.' },
      ],
      easy: {
        note: '처음 묶음을 끝까지 똑같이!',
        items: [
          { type: 'choice', prompt: '색동은 어느 나라 무늬일까요?', options: ['우리나라', '가나'], answer: '우리나라' },
          { type: 'draw', prompt: '두 색이 되풀이되는 띠를 그려 보세요.' },
          { type: 'short', prompt: '내가 고른 두 색을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 놓으면 초록 테두리가 생겨요. 무늬 띠는 여섯 칸, 세 색으로 만들어요.',
      base: '세 무늬를 견주고, 아홉 칸 무늬 띠를 만들어요.',
      challenge: '함정 나라를 골라내고, 열두 칸 무늬 띠를 세 색 묶음으로 만들어요.',
    },
    teacherNotes: '켄테 천은 가나에서 좁은 띠를 짜서 이어 만드는 천이고, 타탄은 스코틀랜드의 체크무늬 천이다. 자주 보이는 어려움: ① 한 나라 무늬만 좋다고 하며 다른 무늬를 놀린다 → 무늬마다 마음에 드는 곳을 하나씩 찾게 한다. ② 되풀이 묶음이 중간에 바뀐다 → 처음 묶음을 손가락으로 덮었다 떼며 견주게 한다. 판의 \'되풀이\' 규칙은 학생이 고른 색을 그대로 받아들인다.',
  }));

  lessons.push(L(40, {
    title: '독일 자장가와 우리 자장가 견주어 듣기',
    objective: '브람스의 자장가와 우리 전래 자장가를 견주어 듣고, 빠르기·세기·쓰임의 같은 점과 노랫말·악기의 다른 점을 말할 수 있다.',
    illustration: ART('two cradles side by side, one wooden cradle with a music box and a lace blanket, the other a Korean baby wrapped on a mother\'s back with a soft hanbok sash, gentle sleepy moon above both', '두 나라 자장가', [
      { motif: 'moon', x: 250, y: 64, s: 0.8 }, { motif: 'star', x: 110, y: 84, s: 0.6 }, { motif: 'cloud', x: 360, y: 70 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '불을 조금 어둡게 하고 브람스의 자장가(독일, 1868년 작곡) 연주를 들려준다. 이어서 "자장자장 우리 아기" 전래 자장가를 선생님이 조용히 불러 준다. "두 노래를 들으며 어떤 몸짓이 하고 싶었나요?" 아기를 안고 흔드는 몸짓을 함께 해 본다. 시연 단추로 자장가 가락 첫 음들이 건반에 놓이는 모습을 보여 준다.',
        student: '두 자장가를 들으며 아기 인형을 안듯 팔을 천천히 흔들어요.',
        demo: { tool: 'keyboard', options: { mode: 'melody', from: '도', to: '높은도', melody: ['미', '미', '솔'] }, sequence: [{ notes: ['미', '미', '솔'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 두 자장가의 같은 점과 다른 점', minutes: 14, tool: 'mindmap',
            teacher: '"두 자장가를 다시 들으며 빠르기와 세기를 손으로 나타내요. 빠르면 손을 빨리, 세면 크게 흔들어요." 두 노래 모두 느리고 여리다는 것을 몸으로 찾게 한다. "다른 점은 무엇이었나요?" 노랫말 말(독일 말과 우리말), 들려준 방법(악기 연주와 사람 목소리)을 짚는다. 다른 나라 노래라서 "이상하다"고 하는 학생에게 "그 나라 아기에게는 익숙한 노래예요"라고 말해 준다.',
            task: '두 자장가를 견주어 같은 점과 다른 점으로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '두 자장가를 견준 말을 같은 점과 다른 점으로 나누어 보세요.', toolOptions: { mode: 'sort', slots: [{ id: 'same', label: '같은 점' }, { id: 'diff', label: '다른 점' }], cards: ['둘 다 느려요', '둘 다 여리게 불러요', '노랫말이 다른 나라 말이에요'] },
                target: { sort: { same: ['둘 다 느려요', '둘 다 여리게 불러요'], diff: ['노랫말이 다른 나라 말이에요'] } }, difficulty: 0.2,
                hints: ['"둘 다"가 들어간 말과 그렇지 않은 말을 나누어 봐요.', '빠르기와 세기는 두 노래가 닮았어요.', '느려요·여리게는 같은 점, 노랫말 말은 다른 점이에요.'],
                levels: { challenge: { toolOptions: { cards: ['둘 다 느려요', '둘 다 여리게 불러요', '노랫말이 다른 나라 말이에요', '둘 다 아기를 재울 때 불러요', '하나는 악기 연주, 하나는 목소리로 들었어요'] }, target: { sort: { same: ['둘 다 느려요', '둘 다 여리게 불러요', '둘 다 아기를 재울 때 불러요'], diff: ['노랫말이 다른 나라 말이에요', '하나는 악기 연주, 하나는 목소리로 들었어요'] } }, prompt: '두 자장가를 견준 말 다섯 개를 같은 점과 다른 점으로 나누어 보세요.' } } },
              { prompt: '자장가의 빠르기와 세기로 알맞은 것을 이어 보세요.', toolOptions: { mode: 'match', topic: '자장가의 모습', slots: [{ id: 's1', label: '빠르기' }, { id: 's2', label: '세기' }], cards: ['느리게', '여리게'] },
                target: { match: { s1: '느리게', s2: '여리게' } }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['느리게', '여리게', { id: '빠르게', text: '빠르게', why: '빠르면 아기가 잠들기 어려워요.' }, { id: '세게', text: '세게', why: '세게 부르면 아기가 깰 수 있어요.' }] } } } },
              { prompt: '짝에게 두 자장가의 같은 점 하나와 다른 점 하나를 말했으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 자장가 첫 가락 따라 치고 여리게 부르기', minutes: 12, tool: 'keyboard',
            teacher: '"브람스 자장가의 첫 가락을 건반으로 쳐 봐요. 아기가 깨지 않도록 살살 눌러요." 친 뒤에는 그 가락을 \'음\'으로 아주 여리게 허밍한다. 짝과 번갈아 한 사람은 건반 가락, 한 사람은 아기 인형 흔들기를 한다. 건반을 세게 두드리는 학생에게 "아기가 깰까요?"라고 묻는다.',
            task: '자장가 첫 가락을 따라 치고, 여리게 허밍해요.',
            levels: {
              easy: { mode: 'melody', from: '도', to: '높은도', names: 'solfa' },
              base: { mode: 'melody', from: '도', to: '높은도', names: 'solfa' },
              challenge: { mode: 'melody', from: '도', to: '높은도', names: 'none', nameToggle: false },
            },
            items: [
              { prompt: '가락 듣기를 누르고, 자장가 첫 여섯 음을 똑같이 쳐 보세요.', toolOptions: { melody: ['미', '미', '솔', '미', '미', '솔'] }, target: { notes: ['미', '미', '솔', '미', '미', '솔'] }, difficulty: 0.2,
                levels: { easy: { prompt: '가락 듣기를 누르고, 자장가 첫 세 음을 똑같이 쳐 보세요.', toolOptions: { melody: ['미', '미', '솔'] }, target: { notes: ['미', '미', '솔'] } } },
                hints: ['같은 음 두 번, 조금 높은 음 한 번이 되풀이돼요.', '처음 음은 도에서 두 칸 위예요.', '미 미 솔 / 미 미 솔이에요.'] },
              { prompt: '가락 듣기를 누르고, 자장가 다음 다섯 음을 똑같이 쳐 보세요.', toolOptions: { melody: ['미', '솔', '높은도', '시', '라'] }, target: { notes: ['미', '솔', '높은도', '시', '라'] }, difficulty: 0.35,
                levels: { easy: { prompt: '가락 듣기를 누르고, 높아졌다 내려오는 세 음을 똑같이 쳐 보세요.', toolOptions: { melody: ['높은도', '시', '라'] }, target: { notes: ['높은도', '시', '라'] } } },
                hints: ['처음에는 올라가다가 가장 높은 음에서 내려와요.', '가장 높은 음은 맨 오른쪽 건반이에요.', '미 솔 높은도 시 라예요.'] },
              { prompt: '짝과 번갈아 건반 가락과 아기 흔들기를 하며 여리게 허밍했으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"나라는 달라도 자장가가 닮은 까닭은 무엇일까요?" 학생들의 생각을 듣는다(아기를 편안하게 재우려고). 다음 시간에는 처음 듣는 다른 나라 음악을 끝까지 들어 본다고 알린다.',
        exitTicket: [
          { type: 'choice', prompt: '두 나라 자장가가 같은 점은 무엇일까요?', options: ['느리고 여려요', '빠르고 세요', '노랫말이 같아요'], answer: 0, difficulty: 0.15, explain: '두 자장가 모두 느리고 여리게 불러요.' },
          { type: 'choice', prompt: '두 나라 자장가가 다른 점은 무엇일까요?', options: ['노랫말이 다른 나라 말이에요', '둘 다 아기를 재워요', '둘 다 느려요'], answer: 0, difficulty: 0.2, explain: '하나는 독일 말, 하나는 우리말 노랫말이에요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '두 나라 자장가',
      items: [
        { type: 'table', prompt: '두 자장가를 견주어 쓰세요.', columns: ['', '브람스의 자장가', '우리 전래 자장가'], cells: [['나라', '', ''], ['빠르기', '', ''], ['세기', '', '']] },
        { type: 'short', prompt: '두 자장가의 다른 점을 하나 쓰세요.' },
        { type: 'short', prompt: '자장가가 나라마다 닮은 까닭을 쓰세요.' },
        { type: 'draw', prompt: '자장가를 들을 때 떠오른 장면을 그려 보세요.' },
      ],
      easy: {
        note: '자장가는 느리게, 여리게!',
        items: [
          { type: 'choice', prompt: '자장가의 빠르기에 ○ 하세요.', options: ['느리게', '빠르게'], answer: '느리게' },
          { type: 'choice', prompt: '브람스는 어느 나라 사람일까요?', options: ['독일', '우리나라'], answer: '독일' },
          { type: 'draw', prompt: '자장가를 들으며 떠오른 것을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 놓으면 초록 테두리가 생겨요. 자장가 가락은 세 음만 쳐요.',
      base: '두 자장가의 같은 점과 다른 점을 나누고, 여섯 음 가락을 쳐요.',
      challenge: '견준 말 다섯 개를 나누고, 계이름이 숨은 건반으로 가락을 쳐요.',
    },
    teacherNotes: '브람스의 자장가(1868년, 독일)와 전래 자장가는 모두 공공 영역이며, 노랫말은 "자장자장 우리 아기" 첫 구절만 쓴다. 자주 보이는 어려움: ① 다른 나라 노래를 "이상하다"고 한다 → 그 나라 아기에게는 익숙한 노래라는 것을 말해 준다. ② 같은 점과 다른 점을 섞는다 → "둘 다"를 붙여 말이 되면 같은 점이라는 기준을 준다. 건반은 소리를 작게 해서 쓰게 한다.',
  }));

  lessons.push(L(41, {
    title: '처음 듣는 음악을 끝까지 듣고 몸으로 나타내기',
    objective: '그리그의 「산속 마왕의 궁전에서」를 처음부터 끝까지 듣고, 점점 빨라지고 커지는 흐름을 몸짓으로 나타낼 수 있다.',
    safety: ['제자리에서 움직이고, 팔을 뻗을 때 옆 친구와 부딪치지 않게 거리를 둬요.', '음악이 가장 빠를 때에도 뛰어다니지 않고 제자리 걸음으로 해요.'],
    illustration: ART('a dark paper cave in the mountains with tiny trolls tiptoeing at first and then dancing wildly, music notes growing bigger from left to right', '끝까지 들어요', [
      { motif: 'star', x: 110, y: 84, s: 0.6 }, { motif: 'moon', x: 330, y: 64, s: 0.6 }, { motif: 'leaf', x: 390, y: 226 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"오늘은 처음 듣는 음악을 들어요. 노르웨이의 그리그라는 사람이 지은 「산속 마왕의 궁전에서」예요(1875년). 듣다가 낯설어도 귀를 막지 말고 끝까지 들어 봐요. 끝까지 들어야 음악이 어떻게 끝나는지 알 수 있어요." 눈을 감고 첫 30초만 들려준다. "어떤 소리가 났나요? 크게, 작게?" 시연 단추로 음악의 흐름 카드가 띠에 놓이는 모습을 보여 준다.',
        student: '눈을 감고 첫 부분을 듣고, 소리가 작았는지 컸는지 손으로 나타내요.',
        demo: { tool: 'timeline', options: { axis: ['처음', '끝'], cards: [{ id: 'a', text: '작고 느리게 시작해요' }, { id: 'b', text: '아주 빠르고 크게 끝나요' }], shuffle: false }, sequence: [{ order: ['a', 'b'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 음악이 어떻게 바뀌는지 끝까지 듣기', minutes: 13, tool: 'timeline',
            teacher: '음악 전체(약 2분 30초)를 처음부터 끝까지 들려준다. "같은 가락이 계속 되풀이돼요. 되풀이될 때마다 무엇이 달라지나요?" 손바닥 높이로 소리 크기를 나타내며 듣게 한다. 처음 몇 초만 듣고 "다 똑같아요"라고 하는 학생에게 "끝까지 들으면 달라지는 곳이 있어요. 끝에서 무슨 일이 생기는지 들어 봐요"라고 말한다. 낯설다고 귀를 막는 학생이 있으면 소리를 조금 줄여 주고 끝까지 함께 듣는다.',
            task: '음악이 바뀌는 차례대로 카드를 놓고, 끝까지 듣는 모습을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '음악이 바뀌는 차례대로 카드를 놓아 보세요.', toolOptions: { axis: ['처음', '끝'], cards: [{ id: 'quiet', text: '작고 느리게 살금살금 시작해요' }, { id: 'grow', text: '같은 가락이 점점 빨라지고 커져요' }, { id: 'bang', text: '아주 빠르고 크게 쾅! 끝나요' }] },
                target: { order: ['quiet', 'grow', 'bang'] }, difficulty: 0.2,
                levels: {
                  easy: { prompt: '음악의 처음과 끝을 차례대로 놓아 보세요.', toolOptions: { cards: [{ id: 'quiet', text: '작고 느리게 살금살금 시작해요' }, { id: 'bang', text: '아주 빠르고 크게 쾅! 끝나요' }] }, target: { order: ['quiet', 'bang'] } },
                  challenge: { prompt: '음악이 바뀌는 차례대로 카드 네 장을 놓아 보세요.', toolOptions: { cards: [{ id: 'quiet', text: '작고 느리게 살금살금 시작해요' }, { id: 'little', text: '같은 가락이 조금 빨라져요' }, { id: 'more', text: '더 빠르고 아주 커져요' }, { id: 'bang', text: '쾅! 쾅! 하고 끝나요' }] }, target: { order: ['quiet', 'little', 'more', 'bang'] } },
                },
                hints: ['음악이 시작할 때는 소리가 작았는지 컸는지 떠올려 봐요.', '음악은 점점 빨라지고 커졌어요. 작은 소리가 앞, 큰 소리가 뒤예요.', '살금살금 → 점점 빨라지고 커져요 → 쾅! 차례예요.'] },
              { prompt: '처음 듣는 음악을 끝까지 듣는 모습만 골라 보세요.', toolOptions: { mode: 'pick', basket: '끝까지 들어요', cards: ['낯설어도 끝까지 들어요', '어떻게 바뀌는지 귀 기울여요', { id: 'ear', text: '처음이 낯설면 귀를 막아요', why: '귀를 막으면 음악이 어떻게 바뀌는지 알 수 없어요.' }, { id: 'talk', text: '중간에 친구와 떠들어요', why: '떠들면 나도 친구도 끝까지 들을 수 없어요.' }] },
                target: { pick: ['낯설어도 끝까지 들어요', '어떻게 바뀌는지 귀 기울여요'] }, difficulty: 0.15,
                levels: { easy: { prompt: '처음 듣는 음악을 끝까지 듣는 모습 하나를 골라 보세요.', toolOptions: { cards: ['낯설어도 끝까지 들어요', { id: 'ear', text: '처음이 낯설면 귀를 막아요', why: '귀를 막으면 음악이 어떻게 바뀌는지 알 수 없어요.' }] }, target: { pick: ['낯설어도 끝까지 들어요'] } } },
                hints: ['음악이 끝날 때까지 들을 수 있게 하는 모습을 찾아요.', '귀를 막거나 떠들면 끝까지 들을 수 없어요.', '끝까지 들어요, 귀 기울여요 두 장이에요.'] },
              { prompt: '"끝까지 들었더니 처음과 달랐던 점"을 짝에게 한 가지 말했으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 음악에 맞추어 몸으로 나타내기', minutes: 13, tool: 'emotion',
            teacher: '책상을 뒤로 밀고 둥글게 선다. "처음에는 마왕의 궁전에 몰래 들어가는 것처럼 발끝으로 살금살금, 음악이 커지면 걸음도 커지고, 마지막 쾅! 소리에는 그대로 멈춰요." 음악을 다시 처음부터 끝까지 틀고 함께 움직인다. 음악보다 먼저 뛰기 시작하는 학생에게 "지금 소리가 커졌나요?"라고 묻는다. 판에서는 음악의 부분과 어울리는 몸짓을 잇는다.',
            task: '음악의 부분과 어울리는 몸짓을 잇고, 음악에 맞추어 끝까지 움직여요.',
            levels: CARD_LV,
            items: [
              { prompt: '음악의 부분과 어울리는 몸짓을 이어 보세요.', toolOptions: { mode: 'match', topic: '음악과 몸짓', slots: [{ id: 's1', label: '작고 느린 처음 부분' }, { id: 's2', label: '아주 빠르고 큰 끝 부분' }], cards: ['발끝으로 살금살금 걸어요', '제자리에서 빠르게 발을 굴러요'] },
                target: { match: { s1: '발끝으로 살금살금 걸어요', s2: '제자리에서 빠르게 발을 굴러요' } }, difficulty: 0.15,
                levels: { challenge: { prompt: '음악의 부분과 어울리는 몸짓을 이어 보세요. 마지막 소리도 잊지 마세요.', toolOptions: { slots: [{ id: 's1', label: '작고 느린 처음 부분' }, { id: 's2', label: '아주 빠르고 큰 끝 부분' }, { id: 's3', label: '마지막 쾅! 소리' }], cards: ['발끝으로 살금살금 걸어요', '제자리에서 빠르게 발을 굴러요', '그대로 멈춰요'] }, target: { match: { s1: '발끝으로 살금살금 걸어요', s2: '제자리에서 빠르게 발을 굴러요', s3: '그대로 멈춰요' } } } },
                hints: ['소리가 작을 때와 클 때 몸짓도 작게, 크게 해 봐요.', '작고 느린 소리에는 조용한 몸짓이 어울려요.', '처음은 살금살금, 끝은 빠르게 발 구르기예요.'] },
              { prompt: '음악에 맞추어 처음부터 끝까지 몸으로 나타낸 뒤, 끝까지 들은 내 마음이 얼마나 뿌듯한지 골라 보세요. 정답은 없어요.', toolOptions: { mode: 'scale', situation: '처음 듣는 음악을 끝까지 듣고 몸으로 나타냈어요.', feeling: '뿌듯함', after: '낯선 음악도 끝까지 들으면 새로운 것을 찾을 수 있어요.' }, target: { level: 'any' }, difficulty: 0.05 },
              { prompt: '음악이 끝날 때까지 친구들과 함께 몸으로 나타냈으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 음악에서 가장 기억에 남는 소리는 무엇이었나요?" 두세 명이 손 높이로 소리 크기를 함께 나타내며 말한다. 다음 시간에는 처음 보는 그림을 끝까지 자세히 본다고 알린다.',
        exitTicket: [
          { type: 'choice', prompt: '처음 듣는 음악이 조금 낯설어요. 어떻게 하면 좋을까요?', options: ['끝까지 들으며 어떻게 바뀌는지 찾아요', '바로 귀를 막아요', '다른 놀이를 해요'], answer: 0, difficulty: 0.1, explain: '끝까지 들어야 음악이 어떻게 바뀌고 끝나는지 알 수 있어요.' },
          { type: 'choice', prompt: '음악 소리가 점점 작아지고 느려지면, 몸짓은 어떻게 바꾸면 어울릴까요?', options: ['점점 작고 천천히 움직여요', '점점 크고 빠르게 뛰어요', '똑같이 움직여요'], answer: 0, difficulty: 0.2, explain: '소리가 작고 느려지면 몸짓도 작고 천천히 하면 어울려요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '끝까지 들어요',
      items: [
        { type: 'table', prompt: '음악의 처음과 끝을 견주어 쓰세요.', columns: ['', '처음', '끝'], cells: [['빠르기', '', ''], ['세기', '', '']] },
        { type: 'short', prompt: '끝까지 듣고 새로 알게 된 것을 쓰세요.' },
        { type: 'draw', prompt: '음악의 처음과 끝에 어울리는 몸짓을 그려 보세요.' },
        { type: 'short', prompt: '처음 듣는 음악이 낯설 때 나는 어떻게 할지 쓰세요.' },
      ],
      easy: {
        note: '낯설어도 끝까지 들어요!',
        items: [
          { type: 'choice', prompt: '음악의 끝은 어땠나요?', options: ['빠르고 컸어요', '작고 느렸어요'], answer: '빠르고 컸어요' },
          { type: 'draw', prompt: '음악을 들으며 한 몸짓을 그려 보세요.' },
          { type: 'short', prompt: '음악을 듣고 떠오른 낱말을 하나 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 놓으면 초록 테두리가 생겨요. 음악의 처음과 끝 두 장만 놓아요.',
      base: '음악이 바뀌는 차례 세 장을 놓고, 부분마다 어울리는 몸짓을 이어요.',
      challenge: '바뀌는 차례 네 장을 놓고, 마지막 소리에 어울리는 몸짓까지 이어요.',
    },
    teacherNotes: '그리그의 「산속 마왕의 궁전에서」(1875년, 노르웨이)는 공공 영역 작품이며, 노랫말 없는 연주곡을 쓴다. 같은 가락이 되풀이되며 점점 빨라지고 커지다 크게 끝난다. 자주 보이는 어려움: ① 낯선 음악을 "무서워요, 싫어요"라며 듣지 않으려 한다 → 소리를 줄이고 끝까지 함께 듣게 하며, 낯선 것과 나쁜 것은 다르다고 말해 준다. ② 앞부분만 듣고 "다 똑같다"고 한다 → 손바닥 높이로 소리 크기를 나타내며 끝까지 듣게 한다.',
  }));

  lessons.push(L(42, {
    title: '동그라미 그림을 오래 보고 색종이로 나타내기',
    objective: '칸딘스키의 동그라미 그림을 끝까지 자세히 보고 그림에서 본 것과 느낌을 나눈 뒤, 겹친 동그라미를 색종이 조각으로 나타낼 수 있다.',
    illustration: ART('a grid of paper squares, each holding colorful concentric circles like rings in a tree, a small child looking closely with a magnifying glass', '오래 보아요', [
      { motif: 'star', x: 110, y: 84, s: 0.6 }, { motif: 'flower', x: 390, y: 226, color: 'peach' }, { motif: 'leaf', x: 90, y: 226 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '칸딘스키(러시아에서 태어난 화가)의 「색 연구: 동심원이 있는 네모들」(1913년) 그림을 화면에 띄운다. "이 그림을 30초 동안 말없이 끝까지 봐요. 처음 보는 그림이라 낯설 수 있어요. 낯설다고 고개를 돌리지 말고 눈으로 칸을 하나씩 따라가 봐요." 30초 뒤 "처음 봤을 때와 오래 본 뒤에 다르게 보인 것이 있나요?"라고 묻는다. 시연 단추로 큰 동그라미 위에 작은 동그라미가 겹쳐 붙는 모습을 보여 준다.',
        student: '30초 동안 말없이 그림을 보고, 가장 먼저 눈에 띈 색을 말해요.',
        demo: { tool: 'collage', options: { shapes: ['circle'], colors: ['빨강', '노랑'] }, sequence: [{ pieces: [{ shape: 'circle', color: '빨강', size: 'l', x: 280, y: 200, r: 0 }, { shape: 'circle', color: '노랑', size: 'm', x: 280, y: 200, r: 0 }] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 그림에서 본 것과 든 느낌 나누기', minutes: 12, tool: 'mindmap',
            teacher: '"그림에서 본 것은 누가 봐도 그림 안에 있는 것이에요. 손가락으로 짚을 수 있어요. 느낌은 그림을 보고 내 마음에 든 생각이라 사람마다 다를 수 있어요." 학생이 말한 것을 칠판 두 칸(본 것 / 느낌)에 나누어 적는다. "어지러워요"를 본 것이라고 하는 학생에게 "그림 속에서 \'어지러움\'을 손가락으로 짚을 수 있나요?"라고 묻는다. "이상한 그림이에요"라는 말에는 "어디가 낯설었는지 말해 볼까요?"로 바꾸어 묻는다.',
            task: '친구들이 한 말을 그림에서 본 것과 그림을 보고 든 느낌으로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '친구들이 한 말을 그림에서 본 것과 그림을 보고 든 느낌으로 나누어 보세요.', toolOptions: { topic: '동그라미 그림', slots: [{ id: 'see', label: '그림에서 본 것' }, { id: 'feel', label: '그림을 보고 든 느낌' }], cards: ['네모 안에 동그라미가 겹겹이 있어요', '빨강, 노랑, 파랑이 있어요', '보고 있으면 따뜻해요', '사탕처럼 맛있어 보여요'] },
                target: { sort: { see: ['네모 안에 동그라미가 겹겹이 있어요', '빨강, 노랑, 파랑이 있어요'], feel: ['보고 있으면 따뜻해요', '사탕처럼 맛있어 보여요'] } }, difficulty: 0.25,
                levels: {
                  easy: { prompt: '친구들이 한 말 두 개를 그림에서 본 것과 든 느낌으로 나누어 보세요.', toolOptions: { cards: ['네모 안에 동그라미가 겹겹이 있어요', '보고 있으면 따뜻해요'] }, target: { sort: { see: ['네모 안에 동그라미가 겹겹이 있어요'], feel: ['보고 있으면 따뜻해요'] } } },
                  challenge: { prompt: '친구들이 한 말 여섯 개를 그림에서 본 것과 든 느낌으로 나누어 보세요.', toolOptions: { cards: ['네모 안에 동그라미가 겹겹이 있어요', '빨강, 노랑, 파랑이 있어요', '네모 칸이 여러 개 줄지어 있어요', '보고 있으면 따뜻해요', '사탕처럼 맛있어 보여요', '눈이 빙글빙글 어지러워요'] }, target: { sort: { see: ['네모 안에 동그라미가 겹겹이 있어요', '빨강, 노랑, 파랑이 있어요', '네모 칸이 여러 개 줄지어 있어요'], feel: ['보고 있으면 따뜻해요', '사탕처럼 맛있어 보여요', '눈이 빙글빙글 어지러워요'] } } },
                },
                hints: ['그림 속에서 손가락으로 짚을 수 있는 말인지 따져 봐요.', '따뜻해요, 맛있어 보여요는 마음에 든 생각이에요. 사람마다 다를 수 있어요.', '동그라미와 색은 본 것, 따뜻함과 맛있어 보임은 느낌이에요.'] },
              { prompt: '처음 보는 그림을 끝까지 보는 모습만 골라 보세요.', toolOptions: { mode: 'pick', basket: '끝까지 보아요', cards: ['칸을 하나씩 따라가며 봐요', '낯설어도 30초 동안 끝까지 봐요', { id: 'turn', text: '낯설면 바로 고개를 돌려요', why: '고개를 돌리면 그림 속 동그라미를 찾을 수 없어요.' }, { id: 'bad', text: '처음 보는 그림이니 좋지 않은 그림이라고 말해요', why: '처음 보는 것은 낯설 뿐, 좋지 않은 것이 아니에요.' }] },
                target: { pick: ['칸을 하나씩 따라가며 봐요', '낯설어도 30초 동안 끝까지 봐요'] }, difficulty: 0.15,
                hints: ['그림을 끝까지 볼 수 있게 하는 모습을 찾아요.', '고개를 돌리거나 좋지 않다고 말하면 끝까지 볼 수 없어요.', '칸 따라가기, 30초 동안 보기 두 장이에요.'] },
              { prompt: '그림에서 가장 마음에 든 칸 하나를 짝에게 손가락으로 짚어 알려 주었으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 겹친 동그라미를 색종이로 나타내기', minutes: 14, tool: 'collage',
            teacher: '"그림 속 한 칸처럼 큰 동그라미 위에 조금 작은 동그라미, 그 위에 더 작은 동그라미를 겹쳐 붙여 봐요." 판에서 먼저 만든 뒤, 색종이를 동그랗게 오려 도화지 네모 칸에 실제로 겹쳐 붙인다. 작은 동그라미를 먼저 붙여 큰 동그라미에 가려지는 학생에게 \'위로\' 단추로 순서를 바꾸게 한다. 반 친구들의 네모 칸을 모아 붙이면 우리 반 동그라미 그림이 된다고 알려 준다.',
            task: '크기가 다른 동그라미를 겹쳐 붙여 그림 속 한 칸을 나타내고, 색종이로 실제 칸을 만들어요.',
            levels: {
              easy: { shapes: ['circle'], colors: ['빨강', '노랑', '파랑', '초록'] },
              base: { shapes: ['circle', 'square'], colors: ['빨강', '주황', '노랑', '초록', '파랑', '보라'] },
              challenge: { shapes: ['circle', 'square', 'triangle'], colors: ['빨강', '주황', '노랑', '초록', '파랑', '보라', '분홍', '검정'] },
            },
            items: [
              { prompt: '큰 동그라미, 보통 동그라미, 작은 동그라미를 하나씩 겹쳐 붙여 보세요.', target: { has: [{ shape: 'circle', size: 'l', min: 1 }, { shape: 'circle', size: 'm', min: 1 }, { shape: 'circle', size: 's', min: 1 }], overlap: 2 }, difficulty: 0.2,
                hints: ['크기 고르개에서 크게, 보통, 작게를 차례로 골라 붙여 보세요.', '큰 동그라미 위로 작은 동그라미를 끌어 옮겨 겹쳐요.', '세 동그라미가 서로 겹치게 같은 자리에 놓아요.'] },
              { prompt: '빨강 동그라미와 파랑 동그라미를 넣어 동그라미 세 개 이상을 겹쳐 붙여 보세요. 크기는 마음대로 해요.', target: { has: [{ shape: 'circle', color: '빨강', min: 1 }, { shape: 'circle', color: '파랑', min: 1 }, { shape: 'circle', min: 3 }], overlap: 2 }, difficulty: 0.3,
                levels: {
                  easy: { prompt: '동그라미 세 개를 겹쳐 붙여 보세요. 색과 크기는 마음대로 해요.', target: { has: [{ shape: 'circle', min: 3 }], overlap: 2 } },
                  challenge: { prompt: '큰 네모 바탕 위에 빨강·노랑·파랑 동그라미를 하나씩 모두 겹쳐 붙여 그림 속 한 칸을 만들어 보세요.', target: { has: [{ shape: 'square', size: 'l', min: 1 }, { shape: 'circle', color: '빨강', min: 1 }, { shape: 'circle', color: '노랑', min: 1 }, { shape: 'circle', color: '파랑', min: 1 }], overlap: 3 } },
                },
                hints: ['동그라미를 고를 때마다 색 고르개를 먼저 눌러 보세요.', '빨강 동그라미 하나, 파랑 동그라미 하나는 꼭 넣어요.', '빨강과 파랑을 포함해 동그라미 셋을 같은 자리에 겹쳐 놓아요.'] },
              { prompt: '색종이 동그라미를 도화지 네모 칸에 겹쳐 붙였으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '학생들의 네모 칸을 칠판에 줄지어 붙여 우리 반 동그라미 그림을 만든다. "칸딘스키 그림을 처음 봤을 때와 끝까지 본 뒤의 마음이 같았나요, 달랐나요?" 서너 명이 말한다. 다음 시간에는 다른 나라 음악을 듣고 어떤 동물인지 몸으로 나타낸다고 알린다.',
        exitTicket: [
          { type: 'choice', prompt: '바다 그림을 보고 한 말이에요. 그림에서 본 것은 무엇일까요?', options: ['파란 물결이 있어요', '시원한 느낌이 들어요', '바다에 가고 싶어요'], answer: 0, difficulty: 0.25, explain: '파란 물결은 그림 속에서 손가락으로 짚을 수 있어요. 나머지는 마음에 든 느낌과 생각이에요.' },
          { type: 'tool', tool: 'collage', options: { shapes: ['circle'], colors: ['빨강', '노랑', '파랑'] }, prompt: '큰 동그라미 위에 작은 동그라미 하나를 겹쳐 붙여 보세요.', target: { has: [{ shape: 'circle', size: 'l', min: 1 }, { shape: 'circle', size: 's', min: 1 }], overlap: 1 }, difficulty: 0.15 },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '동그라미 그림',
      items: [
        { type: 'table', prompt: '그림에서 본 것과 든 느낌을 하나씩 쓰세요.', columns: ['그림에서 본 것', '그림을 보고 든 느낌'], cells: [['', '']] },
        { type: 'draw', prompt: '네모 칸 안에 크기가 다른 동그라미 세 개를 겹쳐 그려 보세요.' },
        { type: 'short', prompt: '처음 봤을 때와 끝까지 본 뒤에 달라진 점을 쓰세요.' },
        { type: 'short', prompt: '내가 칠한 동그라미 색을 바깥부터 차례로 쓰세요.' },
      ],
      easy: {
        note: '본 것은 손가락으로 짚을 수 있어요!',
        items: [
          { type: 'choice', prompt: '그림에서 본 것에 ○ 하세요.', options: ['동그라미', '따뜻한 느낌'], answer: '동그라미' },
          { type: 'draw', prompt: '큰 동그라미 안에 작은 동그라미를 그려 보세요.' },
          { type: 'short', prompt: '그림을 보고 든 느낌을 낱말로 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 놓으면 초록 테두리가 생겨요. 본 것과 느낌을 두 장으로 나누고, 동그라미만 겹쳐 붙여요.',
      base: '네 장을 본 것과 느낌으로 나누고, 빨강과 파랑을 넣어 동그라미를 겹쳐 붙여요.',
      challenge: '여섯 장을 나누고, 큰 네모 바탕 위에 동그라미 세 개를 겹쳐 그림 속 한 칸을 만들어요.',
    },
    teacherNotes: '칸딘스키(1866~1944)의 「색 연구: 동심원이 있는 네모들」(1913년)은 공공 영역 작품이다. 실물 그림 사진은 미술관 공개 자료를 쓴다. 자주 보이는 어려움: ① 처음 보는 그림을 "이상하다, 못 그렸다"고 한다 → 낯선 것과 나쁜 것은 다르다고 짚고, 어디가 낯설었는지로 바꾸어 묻는다. ② 느낌을 본 것으로 말한다 → "손가락으로 짚을 수 있나요?" 기준을 되풀이한다. 판의 \'겹치기\'는 조각이 서로 덮여야 맞는다.',
  }));

  lessons.push(L(43, {
    title: '동물의 사육제를 듣고 어떤 동물인지 몸으로 나타내기',
    objective: '생상스의 「동물의 사육제」 가운데 세 곡을 끝까지 듣고, 소리의 높낮이와 빠르기를 단서로 어떤 동물인지 찾아 몸짓과 색종이로 나타낼 수 있다.',
    safety: ['동물 흉내를 낼 때 바닥에 엎드리거나 뛰어다니지 않고 제자리에서 해요.', '팔을 크게 벌릴 때는 옆 친구와 한 팔 거리를 둬요.'],
    illustration: ART('a paper parade of animals following music notes, a heavy elephant, a graceful swan on water and little birds fluttering high, each surrounded by different shaped notes', '어떤 동물일까요', [
      { motif: 'star', x: 110, y: 84, s: 0.6 }, { motif: 'flower', x: 390, y: 226, color: 'sky' }, { motif: 'leaf', x: 90, y: 226 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"프랑스의 생상스라는 사람이 여러 동물을 음악으로 나타낸 「동물의 사육제」를 지었어요(1886년). 동물 이름은 아직 비밀이에요. 끝까지 듣고 어떤 동물인지 맞혀 봐요." 「코끼리」를 끝까지 들려준다. "소리가 높았나요, 낮았나요? 가벼웠나요, 무거웠나요?" 시연 단추로 소리 설명과 동물 카드가 이어지는 모습을 보여 준다.',
        student: '음악을 끝까지 듣고 떠오른 동물을 손짓으로만 몰래 나타내요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '어떤 동물일까', slots: [{ id: 's1', label: '아주 낮은 소리가 쿵쿵 무겁게' }], cards: ['코끼리', '새'], shuffle: false }, sequence: [{ match: { s1: '코끼리' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 끝까지 듣고 어떤 동물인지 찾기', minutes: 13, tool: 'mindmap',
            teacher: '「새장」과 「백조」를 차례로 끝까지 들려준다. 곡마다 "높았나요, 낮았나요? 빨랐나요, 느렸나요?"를 손 높이와 손 빠르기로 나타내게 한 뒤 동물을 맞힌다. 곡 이름을 바로 알려 주지 않고, 학생이 단서를 말한 뒤에 공개한다. 처음 몇 초만 듣고 답을 외치는 학생에게 "끝까지 들으면 단서가 더 있어요"라고 말한다. "느리면 다 코끼리예요"라고 하는 학생에게는 백조도 느리지만 소리가 부드럽고 높다는 것을 다시 들려준다.',
            task: '곡마다 들은 소리의 모습과 동물을 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '들은 소리의 모습과 어울리는 동물을 이어 보세요.', toolOptions: { mode: 'match', topic: '어떤 동물일까', slots: [{ id: 's1', label: '아주 낮은 소리가 쿵쿵 무겁게' }, { id: 's2', label: '높은 피리 소리가 빠르게 파르르' }, { id: 's3', label: '부드러운 소리가 길게 미끄러지듯' }], cards: ['코끼리', '새', '백조'] },
                target: { match: { s1: '코끼리', s2: '새', s3: '백조' } }, difficulty: 0.25,
                levels: {
                  easy: { prompt: '들은 소리의 모습과 어울리는 동물을 이어 보세요.', toolOptions: { slots: [{ id: 's1', label: '아주 낮은 소리가 쿵쿵 무겁게' }, { id: 's2', label: '높은 피리 소리가 빠르게 파르르' }], cards: ['코끼리', '새'] }, target: { match: { s1: '코끼리', s2: '새' } } },
                  challenge: { toolOptions: { cards: ['코끼리', '새', '백조', { id: '사자', text: '사자', why: '오늘 들은 세 곡에는 사자 곡이 없었어요.' }] } },
                },
                hints: ['몸이 크고 무거운 동물은 어떤 소리로 나타낼지 떠올려 봐요.', '높고 빠른 소리는 작고 가벼운 동물, 부드럽고 긴 소리는 물 위를 미끄러지는 동물이에요.', '낮고 무거움은 코끼리, 높고 빠름은 새, 부드럽고 김은 백조예요.'] },
              { prompt: '곡과 그 곡을 연주한 악기를 이어 보세요.', toolOptions: { mode: 'match', topic: '곡과 악기', slots: [{ id: 's1', label: '코끼리(아주 낮은 소리)' }, { id: 's2', label: '새장(높고 빠른 소리)' }], cards: ['콘트라베이스(아주 큰 현악기)', '플루트(가로로 부는 피리)'] },
                target: { match: { s1: '콘트라베이스(아주 큰 현악기)', s2: '플루트(가로로 부는 피리)' } }, difficulty: 0.3,
                hints: ['몸집이 큰 악기일수록 낮은 소리가 나요.', '피리처럼 부는 악기는 높고 가벼운 소리를 잘 내요.', '코끼리는 콘트라베이스, 새장은 플루트예요.'] },
              { prompt: '짝과 세 곡 가운데 하나를 골라 "높았어/낮았어, 빨랐어/느렸어" 단서로 동물을 맞히는 놀이를 했으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 들은 동물을 몸짓과 색종이로 나타내기', minutes: 13, tool: 'collage',
            teacher: '세 곡 가운데 하나를 골라 다시 끝까지 들으며 그 동물처럼 움직인다(코끼리는 팔을 코처럼 늘어뜨려 천천히, 새는 손을 파닥이며 가볍게, 백조는 팔을 날개처럼 부드럽게). 그다음 판과 색종이로 그 동물을 꾸민다. "지루해서 그만 들을래요"라는 학생에게 "끝에 어떤 소리가 나오는지 찾아서 알려 줄래요?"라고 들을 거리를 준다.',
            task: '고른 곡에 맞추어 끝까지 움직이고, 그 동물을 색종이로 꾸며요.',
            levels: {
              easy: { shapes: ['circle', 'semi', 'triangle'], colors: ['파랑', '하양', '노랑', '검정'], sizes: ['m', 'l'] },
              base: { shapes: ['circle', 'semi', 'triangle', 'leaf', 'rect'], colors: ['파랑', '하양', '노랑', '검정', '갈색', '초록'] },
              challenge: {},
            },
            items: [
              { prompt: '「백조」를 들은 준호처럼, 하양 조각 세 개 이상으로 백조 몸을 만들고 노랑 세모 부리를 하나 붙여 보세요.', target: { has: [{ color: '하양', min: 3 }, { shape: 'triangle', color: '노랑', n: 1 }] }, difficulty: 0.2,
                hints: ['색 고르개에서 하양을 고르고 동그라미나 반원을 여러 번 붙여요.', '부리는 노랑 세모 하나만 붙여요.', '하양 셋 이상, 노랑 세모 딱 하나예요.'] },
              { prompt: '고른 곡을 끝까지 듣고 그 동물을 색종이로 꾸민 뒤, 점검 목록을 모두 표시해 보세요.', target: { selfCheck: ['곡을 끝까지 듣고 만들었어요', '들은 소리에 어울리는 동물을 골랐어요', '짝에게 내 동물과 그 까닭을 말했어요'], minPieces: 3 }, difficulty: 0.2 },
              { prompt: '고른 동물처럼 곡이 끝날 때까지 몸으로 나타냈으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '같은 곡을 고른 친구끼리 모여 몸짓을 짧게 보여 준다(모둠마다 30초). "같은 동물인데 몸짓이 모두 같았나요?" 서로 다르게 나타내도 괜찮다는 것을 짚는다. 다음 시간에는 바다 건너 일본의 파도 그림을 끝까지 보며 숨은 것을 찾는다고 알린다.',
        exitTicket: [
          { type: 'choice', prompt: '아주 높고 가볍게 통통 튀는 소리를 들었어요. 어울리는 동물은?', options: ['작은 토끼', '큰 곰', '느린 소'], answer: 0, difficulty: 0.2, explain: '높고 가볍게 튀는 소리는 작고 가볍게 뛰는 동물과 어울려요.' },
          { type: 'tool', tool: 'emotion', options: { mode: 'branch', who: '서아', situation: '서아는 아주 느린 「거북이」 곡을 듣다가 "너무 느려서 지루해, 그만 들을래"라고 했어요.', feeling: '걱정', choices: [
            { id: 'stop', text: '귀를 막고 다른 놀이를 해요', result: '서아는 곡이 어떻게 끝나는지 몰랐어요.', mood: '걱정', why: '그만 들으면 끝에 어떤 소리가 나오는지 알 수 없어요.' },
            { id: 'find', text: '거북이가 어떻게 움직이는지 찾으며 끝까지 들어요', result: '서아는 느릿느릿 걷는 거북이 소리를 찾아 친구에게 알려 주었어요.', mood: '뿌듯함' }] },
            prompt: '서아에게 알맞은 방법을 골라 보세요.', target: { choice: 'find' }, difficulty: 0.15 },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '어떤 동물일까요',
      items: [
        { type: 'table', prompt: '곡마다 들은 소리와 동물을 쓰세요.', columns: ['곡', '높았나요, 낮았나요?', '빨랐나요, 느렸나요?', '동물'], cells: [['첫째 곡', '', '', ''], ['둘째 곡', '', '', ''], ['셋째 곡', '', '', '']] },
        { type: 'draw', prompt: '내가 고른 동물이 음악에 맞추어 움직이는 모습을 그려 보세요.' },
        { type: 'short', prompt: '그 동물이라고 생각한 단서를 쓰세요.' },
        { type: 'short', prompt: '지루한 곡도 끝까지 들으려면 어떻게 할지 쓰세요.' },
      ],
      easy: {
        note: '낮고 무거우면 큰 동물, 높고 가벼우면 작은 동물!',
        items: [
          { type: 'choice', prompt: '아주 낮고 무거운 소리에 어울리는 동물에 ○ 하세요.', options: ['코끼리', '참새'], answer: '코끼리' },
          { type: 'draw', prompt: '음악을 듣고 떠오른 동물을 그려 보세요.' },
          { type: 'short', prompt: '그 동물이 떠오른 까닭을 낱말로 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 놓으면 초록 테두리가 생겨요. 두 곡과 두 동물만 이어요.',
      base: '세 곡의 소리 모습과 동물을 잇고, 곡과 악기를 이어요.',
      challenge: '함정 동물 카드를 골라내고, 곡과 악기까지 이어요.',
    },
    teacherNotes: '생상스(1835~1921)의 「동물의 사육제」(1886년 작곡)는 공공 영역 작품이다. 「코끼리」는 콘트라베이스, 「새장」은 플루트, 「백조」는 첼로가 가락을 연주한다. 자주 보이는 어려움: ① 곡 이름을 듣기 전에 답을 외친다 → 끝까지 들은 뒤 단서와 함께 말하게 한다. ② 느린 곡은 모두 코끼리라고 한다 → 높낮이와 부드러움을 함께 듣게 한다. ③ 느린 곡을 지루하다며 듣지 않는다 → 들을 거리를 하나 정해 준다. 판의 자기 점검은 모두 표시해야 끝난다.',
  }));

  lessons.push(L(44, {
    title: '큰 파도 그림을 끝까지 보며 숨은 것 찾고 흉내 내기',
    objective: '호쿠사이의 「가나가와 앞바다의 큰 파도」를 끝까지 자세히 보며 숨은 배와 산을 찾고, 파도의 움직임을 몸짓과 색종이로 나타낼 수 있다.',
    safety: ['파도 흉내는 제자리에서 팔과 몸을 움직이고, 친구 쪽으로 넘어지지 않아요.', '모둠 파도 놀이에서 앉았다 일어설 때 천천히 일어나요.'],
    illustration: ART('a huge curling paper wave with white foam claws, three tiny boats with rowers underneath and a small snowy mountain far away between the waves', '숨은 것을 찾아요', [
      { motif: 'wave', y: 210 }, { motif: 'cloud', x: 330, y: 64 }, { motif: 'star', x: 110, y: 84, s: 0.6 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '일본 화가 호쿠사이의 「가나가와 앞바다의 큰 파도」(1831년 무렵, 나무판에 새겨 찍은 그림)를 띄운다. "가장 먼저 눈에 들어온 것은 무엇인가요?" 대부분 큰 파도를 말한다. "이 그림에는 처음에는 잘 안 보이는 것이 숨어 있어요. 끝까지 자세히 봐야 찾을 수 있어요." 시연 단추로 숨은 것 카드를 바구니에 담는 모습을 보여 준다.',
        student: '그림을 보고 가장 먼저 눈에 들어온 것을 짝에게 속삭여요.',
        demo: { tool: 'mindmap', options: { mode: 'pick', basket: '그림에 숨은 것', cards: ['작은 배', '기린'], shuffle: false }, sequence: [{ pick: ['작은 배'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 끝까지 보며 숨은 것 찾기', minutes: 12, tool: 'mindmap',
            teacher: '그림을 네 부분(위·아래·왼쪽·오른쪽)으로 나누어 차례로 확대해 보여 준다. "파도 아래에 무엇이 있나요? 파도 사이 멀리에는?" 배 안에 사람들이 웅크리고 있는 것, 멀리 눈 덮인 산(후지산)이 작게 보이는 것을 찾게 한다. "파도가 무서워서 그만 볼래요"라는 학생에게 "배에 탄 사람들은 어떻게 하고 있는지 찾아볼까요?"라고 볼 거리를 준다. 큰 산이 왜 작게 보이는지 물어 \'멀리 있으면 작아 보인다\'를 찾게 한다.',
            task: '그림을 끝까지 보며 숨은 것을 찾고, 가까운 것과 먼 것의 크기를 견주어요.',
            levels: CARD_LV,
            items: [
              { prompt: '그림을 끝까지 보며 찾은 것만 바구니에 담아 보세요.', toolOptions: { mode: 'pick', basket: '그림에 있어요', cards: ['큰 파도', '사람이 탄 작은 배', '멀리 있는 눈 덮인 산', { id: 'sun', text: '하늘의 해', why: '이 그림 하늘에는 해가 없어요. 다시 살펴봐요.' }, { id: 'whale', text: '물 위로 뛰는 고래', why: '그림 속 바다에는 고래가 없어요.' }] },
                target: { pick: ['큰 파도', '사람이 탄 작은 배', '멀리 있는 눈 덮인 산'] }, difficulty: 0.25,
                levels: { easy: { prompt: '그림에서 찾은 것 두 개를 바구니에 담아 보세요.', toolOptions: { cards: ['큰 파도', '사람이 탄 작은 배', { id: 'whale', text: '물 위로 뛰는 고래', why: '그림 속 바다에는 고래가 없어요.' }] }, target: { pick: ['큰 파도', '사람이 탄 작은 배'] } } },
                hints: ['그림을 위, 아래, 왼쪽, 오른쪽으로 나누어 하나씩 살펴봐요.', '파도 아래와 파도 사이 먼 곳을 자세히 봐요. 해와 고래는 그림에 없어요.', '큰 파도, 작은 배, 멀리 있는 산 세 장이에요.'] },
              { prompt: '그림 속에서 어떻게 보이는지 이어 보세요.', toolOptions: { mode: 'match', topic: '가까이와 멀리', slots: [{ id: 's1', label: '앞에 가까이 있는 파도' }, { id: 's2', label: '멀리 있는 산' }], cards: ['아주 크게 보여요', '작게 보여요'] },
                target: { match: { s1: '아주 크게 보여요', s2: '작게 보여요' } }, difficulty: 0.2,
                predict: { q: '높은 산이 그림에서 작게 보이는 까닭은 무엇일까요?', options: ['산이 원래 작아서', '멀리 있어서'], answer: 1 },
                conclude: '멀리 있는 것은 작게, 가까이 있는 것은 크게 보여요.',
                hints: ['교실 창밖의 먼 건물과 가까운 책상을 떠올려 봐요.', '멀리 있을수록 작게 보여요.', '가까운 파도는 크게, 먼 산은 작게예요.'] },
              { prompt: '배에 탄 사람들은 무엇을 하고 있는지 짝과 말했으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 파도를 몸과 색종이로 나타내기', minutes: 14, tool: 'collage',
            teacher: '모둠이 한 줄로 앉아 왼쪽부터 차례로 일어나며 팔을 들어 큰 파도를 만든다(파도 타기 놀이). "파도 끝의 하얀 물거품은 손가락을 갈퀴처럼 구부려 나타내 볼까요?" 그다음 판과 색종이로 파도를 꾸민다. 파도를 그리기 어렵다고 하는 학생에게 "반원과 세모를 겹치면 파도 모양이 돼요"라고 알려 준다.',
            task: '모둠과 파도 타기 몸짓을 하고, 파랑과 하양 조각으로 큰 파도를 꾸며요.',
            levels: {
              easy: { shapes: ['semi', 'triangle'], colors: ['파랑', '하양'], sizes: ['m', 'l'] },
              base: { shapes: ['semi', 'triangle', 'circle', 'leaf'], colors: ['파랑', '하양', '갈색', '노랑'] },
              challenge: {},
            },
            items: [
              { prompt: '파랑 조각 네 개 이상으로 큰 파도를 만들고, 하양 조각 두 개 이상으로 물거품을 붙여 보세요.', target: { has: [{ color: '파랑', min: 4 }, { color: '하양', min: 2 }] }, difficulty: 0.2,
                hints: ['색 고르개에서 파랑을 고르고 반원이나 세모를 여러 번 붙여요.', '파도 끝에 하양 조각을 붙여 물거품을 나타내요.', '파랑 넷 이상, 하양 둘 이상이면 돼요.'],
                levels: { challenge: { prompt: '파랑 조각 네 개 이상으로 큰 파도를, 하양 조각 두 개 이상으로 물거품을 만들고, 파도에 겹쳐 작은 갈색 배를 하나 붙여 보세요.', target: { has: [{ color: '파랑', min: 4 }, { color: '하양', min: 2 }, { color: '갈색', size: 's', min: 1 }], overlap: 2 } } } },
              { prompt: '파도 그림을 끝까지 보고 꾸민 내 작품을 점검해 보세요. 점검 목록을 모두 표시해요.', target: { selfCheck: ['그림을 끝까지 보고 숨은 것을 찾았어요', '파도와 물거품을 색종이로 나타냈어요', '모둠 파도 타기 몸짓을 함께 했어요'], minPieces: 4 }, difficulty: 0.15 },
              { prompt: '모둠과 함께 파도 타기 몸짓을 처음부터 끝까지 했으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"처음 봤을 때는 몰랐는데 끝까지 보아서 찾은 것이 있나요?" 서너 명이 말한다. 다음 시간에는 같은 그림을 보고 친구마다 다르게 느낀 것을 끝까지 들어 본다고 알린다.',
        exitTicket: [
          { type: 'choice', prompt: '운동장 그림에서 멀리 있는 나무와 가까이 있는 나무 가운데 더 작게 그려진 것은?', options: ['멀리 있는 나무', '가까이 있는 나무', '둘 다 같아요'], answer: 0, difficulty: 0.25, explain: '멀리 있는 것은 작게 보여서 그림에서도 작게 그려요.' },
          { type: 'choice', prompt: '처음 보는 그림이 조금 무서워 보여요. 어떻게 하면 좋을까요?', options: ['볼 거리를 찾으며 끝까지 봐요', '바로 눈을 감아요', '그림이 나쁘다고 말해요'], answer: 0, difficulty: 0.1, explain: '끝까지 보면 처음에는 안 보이던 것을 찾을 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '큰 파도 그림',
      items: [
        { type: 'table', prompt: '그림을 끝까지 보며 찾은 것을 쓰세요.', columns: ['어디에서', '무엇을 찾았나요?'], cells: [['파도 아래', ''], ['파도 사이 먼 곳', '']] },
        { type: 'short', prompt: '높은 산이 그림에서 작게 보이는 까닭을 쓰세요.' },
        { type: 'draw', prompt: '내가 만든 파도 몸짓을 그려 보세요.' },
        { type: 'short', prompt: '이 그림을 처음 봤을 때와 끝까지 본 뒤의 느낌을 쓰세요.' },
      ],
      easy: {
        note: '위, 아래, 왼쪽, 오른쪽을 하나씩 살펴봐요!',
        items: [
          { type: 'choice', prompt: '그림에서 찾을 수 있는 것에 ○ 하세요.', options: ['작은 배', '고래'], answer: '작은 배' },
          { type: 'draw', prompt: '큰 파도를 그려 보세요.' },
          { type: 'short', prompt: '그림을 보고 떠오른 낱말을 하나 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 놓으면 초록 테두리가 생겨요. 숨은 것 두 개를 찾고, 파랑과 하양 조각으로만 파도를 꾸며요.',
      base: '숨은 것 세 개를 찾고, 가까이와 멀리의 크기를 이어요.',
      challenge: '파도에 겹쳐 작은 배까지 넣어 파도 그림을 꾸며요.',
    },
    teacherNotes: '호쿠사이(1760~1849)의 「가나가와 앞바다의 큰 파도」(1831년 무렵, 목판화)는 공공 영역 작품이다. 그림에는 큰 파도, 사람이 탄 배 세 척, 멀리 눈 덮인 후지산이 있다. 자주 보이는 어려움: ① 파도가 무섭다며 보지 않으려 한다 → 배에 탄 사람 찾기 같은 볼 거리를 준다. ② 산이 작으니 낮은 산이라고 여긴다 → 창밖의 먼 건물과 가까운 책상을 견주어 멀리 있으면 작아 보인다는 것을 몸으로 확인한다.',
  }));

  lessons.push(L(45, {
    title: '별이 빛나는 밤을 보고 친구의 다른 느낌 끝까지 듣기',
    objective: '고흐의 「별이 빛나는 밤」을 보고 친구가 말한 다른 느낌을 끝까지 들은 뒤, 서로 다르게 느껴도 괜찮은 까닭을 말할 수 있다.',
    illustration: ART('a swirling paper night sky with a glowing yellow moon and stars, a quiet small village below and a tall dark tree, three children sitting in a circle and listening to each other', '다르게 느껴도 괜찮아요', [
      { motif: 'moon', x: 330, y: 64, s: 0.7 }, { motif: 'star', x: 110, y: 84, s: 0.6 }, { motif: 'tree', x: 80, y: 200 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '네덜란드 화가 고흐의 「별이 빛나는 밤」(1889년)을 띄우고 1분 동안 말없이 보게 한다. "이 그림을 보고 어떤 마음이 들었는지 한 낱말로 손바닥에 적어 보세요." 서너 명의 낱말을 칠판에 적는다(예: 신나요, 무서워요, 조용해요). "같은 그림인데 낱말이 모두 같나요?" 시연 단추로 친구의 말과 마음 카드가 이어지는 모습을 보여 준다.',
        student: '그림을 보고 든 마음을 낱말 하나로 손바닥에 적어요.',
        demo: { tool: 'emotion', options: { slots: [{ id: 's1', label: '별이 춤추는 것 같아 나도 춤추고 싶어요' }], cards: ['신남', '무서움'], shuffle: false }, sequence: [{ match: { s1: '신남' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 친구들의 다른 느낌 끝까지 듣기', minutes: 13, tool: 'emotion',
            teacher: '"친구의 느낌을 들을 때는 말이 끝날 때까지 기다리고, 고개를 끄덕이며 들어요." 선생님이 학생 역을 맡아 말하는 도중에 끼어드는 모습과 끝까지 듣는 모습을 차례로 보여 주고 견주게 한다. 판에서 민지·준호·서아가 한 말을 마음 카드와 잇는다. "준호는 무섭다고 했는데, 준호가 틀린 걸까요?" 느낌이 다르면 한 사람이 틀린 것이라고 여기는 학생에게 "준호는 어두운 하늘을 보았고, 민지는 빙글빙글 도는 별을 보았어요. 본 곳이 달라서 느낌도 달라요"라고 짚는다.',
            task: '친구들이 한 말을 마음 카드와 잇고, 친구의 느낌을 들을 때 좋은 모습을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '같은 그림을 보고 친구들이 한 말이에요. 어울리는 마음 카드를 이어 보세요.', toolOptions: { slots: [{ id: 's1', label: '민지: "별이 빙글빙글 춤추는 것 같아 나도 춤추고 싶어요."' }, { id: 's2', label: '준호: "하늘이 어둡고 커서 혼자 있으면 겁날 것 같아요."' }, { id: 's3', label: '서아: "마을이 조용히 잠든 것 같아 마음이 푹 놓여요."' }], cards: ['신남', '무서움', '편안함'] },
                target: { match: { s1: '신남', s2: '무서움', s3: '편안함' } }, difficulty: 0.2,
                levels: { easy: { prompt: '같은 그림을 보고 친구들이 한 말이에요. 어울리는 마음 카드를 이어 보세요.', toolOptions: { slots: [{ id: 's1', label: '민지: "별이 빙글빙글 춤추는 것 같아 나도 춤추고 싶어요."' }, { id: 's2', label: '준호: "하늘이 어둡고 커서 혼자 있으면 겁날 것 같아요."' }], cards: ['신남', '무서움'] }, target: { match: { s1: '신남', s2: '무서움' } } },
                  challenge: { toolOptions: { cards: ['신남', '무서움', '편안함', { id: '화남', text: '화남', why: '세 친구 말 가운데 화가 났다는 말은 없어요.' }] } } },
                hints: ['친구가 한 말에서 마음을 알려 주는 낱말(춤추고 싶어요, 겁날 것 같아요, 마음이 놓여요)을 찾아봐요.', '춤추고 싶은 마음은 신나는 마음, 마음이 푹 놓이면 편안한 마음이에요.', '민지 신남, 준호 무서움, 서아 편안함이에요.'] },
              { prompt: '친구의 느낌을 들을 때 좋은 모습만 골라 보세요.', toolOptions: { mode: 'pick', basket: '끝까지 들어요', cards: ['말이 끝날 때까지 기다려요', '고개를 끄덕이며 들어요', '"너는 그렇게 느꼈구나" 하고 말해요', { id: 'wrong', text: '"그건 틀렸어" 하고 말해요', why: '느낌에는 틀린 답이 없어요.' }, { id: 'cut', text: '친구 말 중간에 내 말을 해요', why: '말을 끊으면 친구의 느낌을 끝까지 들을 수 없어요.' }] },
                target: { pick: ['말이 끝날 때까지 기다려요', '고개를 끄덕이며 들어요', '"너는 그렇게 느꼈구나" 하고 말해요'] }, difficulty: 0.2,
                levels: { easy: { prompt: '친구의 느낌을 들을 때 좋은 모습 두 개를 골라 보세요.', toolOptions: { cards: ['말이 끝날 때까지 기다려요', '고개를 끄덕이며 들어요', { id: 'wrong', text: '"그건 틀렸어" 하고 말해요', why: '느낌에는 틀린 답이 없어요.' }] }, target: { pick: ['말이 끝날 때까지 기다려요', '고개를 끄덕이며 들어요'] } } },
                hints: ['친구가 끝까지 말할 수 있게 하는 모습을 찾아봐요.', '틀렸다고 하거나 말을 끊으면 친구가 속상해요.', '기다리기, 끄덕이기, "그렇게 느꼈구나" 세 장이에요.'] },
              { prompt: '짝의 느낌을 끝까지 듣고 "너는 그렇게 느꼈구나" 하고 말해 주었으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 다르게 느껴도 괜찮은 까닭 찾기', minutes: 13, tool: 'mindmap',
            teacher: '모둠마다 말하기 막대를 하나 준다. 막대를 든 사람만 말하고, 나머지는 끝까지 들은 뒤 고개를 끄덕인다. 한 사람이 30초씩 그림의 느낌을 말한다. 그다음 "왜 우리는 같은 그림을 보고 다르게 느낄까요?"라고 묻고 판에서 까닭을 고른다. "선생님 느낌이 정답이에요?"라고 묻는 학생에게 "선생님 느낌도 여러 느낌 가운데 하나예요"라고 답한다.',
            task: '모둠에서 말하기 막대로 느낌을 나누고, 다르게 느껴도 괜찮은 까닭을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '같은 그림을 보고 다르게 느껴도 괜찮은 까닭만 골라 보세요.', toolOptions: { mode: 'pick', basket: '다르게 느껴도 괜찮아요', cards: ['사람마다 먼저 눈에 들어오는 곳이 달라요', '사람마다 떠오르는 일이 달라요', { id: 'wrongsee', text: '한 사람은 그림을 잘못 본 거예요', why: '모두 같은 그림을 보았어요. 느낌이 달라도 잘못 본 것이 아니에요.' }, { id: 'teacher', text: '선생님 느낌만 맞는 답이에요', why: '선생님 느낌도 여러 느낌 가운데 하나예요.' }] },
                target: { pick: ['사람마다 먼저 눈에 들어오는 곳이 달라요', '사람마다 떠오르는 일이 달라요'] }, difficulty: 0.25,
                hints: ['느낌이 달라지는 까닭을 찾아요. 누가 틀렸다는 말은 까닭이 아니에요.', '민지는 별을, 준호는 어두운 하늘을 먼저 보았어요.', '눈에 들어오는 곳, 떠오르는 일 두 장이에요.'] },
              { prompt: '느낌을 나누는 차례대로 카드를 놓아 보세요.', toolOptions: { mode: 'order', slots: 3, cards: [{ id: 'hold', text: '말하기 막대를 든 친구가 느낌을 말해요' }, { id: 'listen', text: '나머지는 끝까지 듣고 끄덕여요' }, { id: 'pass', text: '막대를 다음 친구에게 건네요' }] },
                target: { order: ['hold', 'listen', 'pass'] }, difficulty: 0.2,
                hints: ['막대를 든 사람이 무엇을 먼저 하는지 떠올려 봐요.', '친구 말이 끝나야 막대를 건넬 수 있어요.', '말해요 → 듣고 끄덕여요 → 건네요 차례예요.'] },
              { prompt: '모둠에서 말하기 막대를 돌리며 모든 친구의 느낌을 끝까지 들었으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 친구 느낌 가운데 나와 가장 달랐던 것은 무엇이었나요? 그 친구는 그림에서 어디를 보았을까요?" 두세 명이 말한다. 다음 시간에는 이탈리아 음악을 듣고 느낌을 주고받는다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'branch', who: '하준', situation: '하준이는 바다 사진이 시원하다고 했는데, 짝은 바다가 넓어서 조금 무섭다고 했어요.', choices: [
            { id: 'wrong', text: '"아니야, 시원한 거야" 하고 고쳐 줘요', result: '짝이 더는 말하지 않았어요.', mood: '속상함', why: '짝도 바다를 보고 자기 느낌을 말한 거예요.' },
            { id: 'ask', text: '"넌 그렇게 느꼈구나. 어디가 무서웠어?" 하고 물어요', result: '짝이 파도가 높은 곳을 알려 주었어요.', mood: '기쁨' }] },
            prompt: '하준이는 어떻게 하면 좋을까요?', target: { choice: 'ask' }, difficulty: 0.2 },
          { type: 'choice', prompt: '같은 노래를 듣고 나는 신나고 친구는 슬펐어요. 누가 맞을까요?', options: ['둘 다 괜찮은 느낌이에요', '나만 맞아요', '친구만 맞아요'], answer: 0, difficulty: 0.2, explain: '느낌은 사람마다 다를 수 있고, 다른 느낌도 모두 괜찮아요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '다르게 느껴도 괜찮아요',
      items: [
        { type: 'table', prompt: '모둠 친구들의 느낌을 들은 대로 쓰세요.', columns: ['친구', '느낌', '그림에서 본 곳'], cells: [['', '', ''], ['', '', ''], ['', '', '']] },
        { type: 'short', prompt: '나와 다르게 느낀 친구의 말을 하나 쓰세요.' },
        { type: 'short', prompt: '같은 그림을 보고 다르게 느껴도 괜찮은 까닭을 쓰세요.' },
        { type: 'draw', prompt: '그림을 보고 든 내 느낌을 얼굴 표정으로 그려 보세요.' },
      ],
      easy: {
        note: '친구 말은 끝까지, 고개를 끄덕끄덕!',
        items: [
          { type: 'choice', prompt: '친구가 나와 다르게 느꼈을 때 할 말에 ○ 하세요.', options: ['너는 그렇게 느꼈구나', '그건 틀렸어'], answer: '너는 그렇게 느꼈구나' },
          { type: 'draw', prompt: '그림을 보고 든 내 느낌을 얼굴로 그려 보세요.' },
          { type: 'short', prompt: '짝의 느낌을 낱말로 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 놓으면 초록 테두리가 생겨요. 친구 두 명의 말과 마음 카드를 이어요.',
      base: '세 친구의 말과 마음을 잇고, 다르게 느껴도 괜찮은 까닭을 골라요.',
      challenge: '함정 마음 카드를 골라내고, 좋은 듣기 모습 세 가지와 까닭을 골라요.',
    },
    teacherNotes: '고흐(1853~1890)의 「별이 빛나는 밤」(1889년)은 공공 영역 작품이다. 자주 보이는 어려움: ① 느낌이 다르면 한 사람이 틀렸다고 여긴다 → 그림에서 먼저 본 곳이 다르면 느낌도 달라질 수 있다는 것을 친구 말로 확인한다. ② 친구 말 중간에 끼어든다 → 말하기 막대를 써서 차례를 눈에 보이게 한다. ③ 무섭다는 느낌을 놀린다 → 무서움도 그림이 준 느낌 가운데 하나라고 말해 준다.',
  }));

  lessons.push(L(46, {
    title: '사계 봄을 듣고 짝과 느낌 주고받기',
    objective: '비발디의 「사계」 가운데 「봄」을 듣고 짝과 느낌을 주고받으며, 나와 다른 느낌에 존중하는 말로 답할 수 있다.',
    illustration: ART('a paper spring meadow with birds singing on branches and a small dark thundercloud passing by, two children sitting face to face with speech bubbles of different colors', '느낌을 주고받아요', [
      { motif: 'flower', x: 390, y: 226, color: 'peach' }, { motif: 'cloud', x: 330, y: 64 }, { motif: 'leaf', x: 90, y: 226 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"이탈리아의 비발디라는 사람이 봄·여름·가을·겨울을 음악으로 지었어요(1725년 무렵). 오늘은 「봄」의 첫 부분을 들어요." 음악을 처음부터 끝까지(약 3분 30초) 들려준다. 새소리처럼 들리는 곳에서 손을 파닥이고, 갑자기 거세지는 곳(천둥 부분)에서 손을 멈추게 한다. "봄 음악인데 거센 곳도 있었나요?" 시연 단추로 존중하는 말과 무시하는 말을 나누는 모습을 보여 준다.',
        student: '새소리 같은 곳에서는 손을 파닥이고, 거세지는 곳에서는 손을 멈춰요.',
        demo: { tool: 'emotion', options: { mode: 'sort', slots: [{ id: 'yes', label: '존중하는 말' }, { id: 'no', label: '무시하는 말' }], cards: ['너는 그렇게 들었구나', '그게 무슨 느낌이야'], shuffle: false }, sequence: [{ sort: { yes: ['너는 그렇게 들었구나'], no: ['그게 무슨 느낌이야'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 존중하는 말 알아보기', minutes: 12, tool: 'emotion',
            teacher: '"친구가 나와 다르게 느꼈을 때 하는 말은 두 가지가 있어요. 친구 느낌을 받아 주는 말, 친구 느낌을 깎아내리는 말이에요." 두 말을 선생님이 직접 해 보이고 "들은 친구의 마음은 어떨까요?"라고 묻는다. 존중하는 말은 내 느낌을 바꾸라는 뜻이 아니라는 것을 짚는다. "나는 다르게 들었어"라는 말을 무시하는 말로 여기는 학생에게 "내 느낌을 말하는 것은 괜찮아요. 친구 느낌을 틀렸다고 하지 않으면 돼요"라고 말한다.',
            task: '친구 느낌에 답하는 말을 존중하는 말과 무시하는 말로 나누고, 느낌을 주고받는 차례를 알아요.',
            levels: CARD_LV,
            items: [
              { prompt: '친구 느낌에 답한 말을 존중하는 말과 무시하는 말로 나누어 보세요.', toolOptions: { mode: 'sort', slots: [{ id: 'yes', label: '존중하는 말' }, { id: 'no', label: '무시하는 말' }], cards: ['너는 그렇게 들었구나', '나는 다르게 들었는데, 네 말도 재미있다', '그게 무슨 느낌이야, 이상해', '내 느낌만 맞아'] },
                target: { sort: { yes: ['너는 그렇게 들었구나', '나는 다르게 들었는데, 네 말도 재미있다'], no: ['그게 무슨 느낌이야, 이상해', '내 느낌만 맞아'] } }, difficulty: 0.2,
                levels: {
                  easy: { prompt: '친구 느낌에 답한 말 두 개를 존중하는 말과 무시하는 말로 나누어 보세요.', toolOptions: { cards: ['너는 그렇게 들었구나', '내 느낌만 맞아'] }, target: { sort: { yes: ['너는 그렇게 들었구나'], no: ['내 느낌만 맞아'] } } },
                  challenge: { prompt: '친구 느낌에 답한 말 여섯 개를 존중하는 말과 무시하는 말로 나누어 보세요.', toolOptions: { cards: ['너는 그렇게 들었구나', '나는 다르게 들었는데, 네 말도 재미있다', '어느 부분에서 그렇게 느꼈어?', '그게 무슨 느낌이야, 이상해', '내 느낌만 맞아', '그런 느낌은 말하지 마'] }, target: { sort: { yes: ['너는 그렇게 들었구나', '나는 다르게 들었는데, 네 말도 재미있다', '어느 부분에서 그렇게 느꼈어?'], no: ['그게 무슨 느낌이야, 이상해', '내 느낌만 맞아', '그런 느낌은 말하지 마'] } } },
                },
                hints: ['그 말을 들은 친구의 마음이 어떨지 떠올려 봐요.', '친구 느낌을 틀렸다, 이상하다고 하면 무시하는 말이에요. 내 느낌을 말하는 것은 괜찮아요.', '"그렇게 들었구나", "네 말도 재미있다"는 존중하는 말이에요.'] },
              { prompt: '짝과 느낌을 주고받는 차례대로 카드를 놓아 보세요.', toolOptions: { mode: 'order', slots: 4, cards: [{ id: 'say', text: '내 느낌을 말해요' }, { id: 'ask', text: '"너는 어땠어?" 하고 물어요' }, { id: 'listen', text: '짝의 말을 끝까지 들어요' }, { id: 'reply', text: '"너는 그렇게 느꼈구나" 하고 답해요' }] },
                target: { order: ['say', 'ask', 'listen', 'reply'] }, difficulty: 0.25,
                levels: { easy: { prompt: '짝과 느낌을 주고받는 차례대로 카드 세 장을 놓아 보세요.', toolOptions: { slots: 3, cards: [{ id: 'ask', text: '"너는 어땠어?" 하고 물어요' }, { id: 'listen', text: '짝의 말을 끝까지 들어요' }, { id: 'reply', text: '"너는 그렇게 느꼈구나" 하고 답해요' }] }, target: { order: ['ask', 'listen', 'reply'] } } },
                hints: ['짝에게 묻기 전에 내가 먼저 할 일을 떠올려 봐요.', '짝의 말을 끝까지 들어야 답할 수 있어요.', '말해요 → 물어요 → 들어요 → 답해요 차례예요.'] },
              { prompt: '친구가 "봄 음악인데 무서웠어"라고 했어요. 어떻게 답할까요?', toolOptions: { mode: 'branch', who: '준호', situation: '준호가 "봄 음악인데 중간에 무서웠어"라고 말했어요.', feeling: '무서움', choices: [
                { id: 'ask', text: '"어느 부분에서 무서웠어?" 하고 물어요', result: '준호가 천둥처럼 거세지는 부분을 알려 주어 둘이 다시 들어 보았어요.', mood: '기쁨' },
                { id: 'laugh', text: '"봄 음악이 왜 무서워?" 하고 웃어요', result: '준호가 더는 느낌을 말하지 않았어요.', mood: '속상함', why: '준호는 거세지는 부분을 듣고 자기 느낌을 말한 거예요.' }] }, target: { choice: 'ask' }, difficulty: 0.15,
                hints: ['준호가 어느 부분을 듣고 그렇게 느꼈을지 떠올려 봐요.', '웃으면 준호가 속상해요. 궁금한 것을 물어보면 더 알 수 있어요.', '"어느 부분에서 무서웠어?"를 골라요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 짝과 느낌 주고받기', minutes: 14, tool: 'emotion',
            teacher: '「봄」을 한 번 더 끝까지 듣는다. 짝과 마주 앉아 활동 1에서 놓은 차례대로 느낌을 주고받는다. 두 사람 모두 말할 수 있도록 순서를 바꾸어 두 번 한다. 다니면서 "너는 그렇게 느꼈구나"를 말한 짝을 찾아 칭찬한다. 짝의 느낌이 나와 같으면 "나도 그렇게 느꼈어"라고 답해도 된다고 알려 준다.',
            task: '짝과 차례대로 느낌을 주고받고, 존중하는 말로 답해요.',
            levels: CARD_LV,
            items: [
              { prompt: '짝의 느낌을 들은 뒤 하는 말이에요. 빈칸에 알맞은 낱말을 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['느꼈', '틀렸', '이상하'], slots: [{ id: 'b1', label: '"너는 그렇게 ___구나."' }] },
                target: { fill: { b1: '느꼈' } }, difficulty: 0.15,
                hints: ['짝의 느낌을 받아 주는 말이 되게 해 봐요.', '틀렸다, 이상하다는 짝을 속상하게 해요.', '"너는 그렇게 느꼈구나."예요.'] },
              { prompt: '짝이 내 느낌을 끝까지 들어 주었을 때 내 마음이 얼마나 편안했는지 골라 보세요. 정답은 없어요.', toolOptions: { mode: 'scale', situation: '짝이 내 느낌을 끝까지 듣고 "너는 그렇게 느꼈구나" 하고 말해 주었어요.', feeling: '편안함', after: '나도 짝에게 그렇게 말해 주면 짝도 이런 마음이 들어요.' }, target: { level: 'any' }, difficulty: 0.05 },
              { prompt: '짝과 순서를 바꾸어 두 번 느낌을 주고받았으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"짝에게서 들은 느낌 가운데 나와 다른 느낌이 있었나요?" 두세 짝이 앞에 나와 주고받은 말을 다시 보여 준다. 다음 시간에는 우리 반 작은 감상 전시회를 열어 다른 나라 그림에 느낌 쪽지를 남긴다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'sort', slots: [{ id: 'yes', label: '존중하는 말' }, { id: 'no', label: '무시하는 말' }], cards: ['노래를 듣고 그렇게 느꼈구나', '그런 느낌이 어디 있어'] }, prompt: '친구 느낌에 답한 말을 나누어 보세요.', target: { sort: { yes: ['노래를 듣고 그렇게 느꼈구나'], no: ['그런 느낌이 어디 있어'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '그림을 보고 친구는 슬펐고 나는 기뻤어요. 나는 어떻게 말하면 좋을까요?', options: ['"나는 기뻤는데, 너는 슬펐구나"', '"슬픈 건 틀렸어"', '아무 말도 듣지 않아요'], answer: 0, difficulty: 0.2, explain: '내 느낌도 말하고 친구 느낌도 받아 주면 돼요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '느낌을 주고받아요',
      items: [
        { type: 'table', prompt: '「봄」을 듣고 나와 짝의 느낌을 쓰세요.', columns: ['', '느낌', '그렇게 느낀 부분'], cells: [['나', '', ''], ['짝', '', '']] },
        { type: 'short', prompt: '짝의 느낌에 답한 존중하는 말을 쓰세요.' },
        { type: 'short', prompt: '느낌을 주고받는 차례를 쓰세요.' },
        { type: 'draw', prompt: '「봄」을 들으며 떠오른 장면을 그려 보세요.' },
      ],
      easy: {
        note: '"너는 그렇게 느꼈구나!"',
        items: [
          { type: 'choice', prompt: '존중하는 말에 ○ 하세요.', options: ['너는 그렇게 들었구나', '내 느낌만 맞아'], answer: '너는 그렇게 들었구나' },
          { type: 'draw', prompt: '「봄」을 들으며 떠오른 것을 그려 보세요.' },
          { type: 'short', prompt: '짝의 느낌을 낱말로 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 놓으면 초록 테두리가 생겨요. 말 두 개를 나누고, 주고받는 차례는 세 장만 놓아요.',
      base: '말 네 개를 존중하는 말과 무시하는 말로 나누고, 주고받는 차례 네 장을 놓아요.',
      challenge: '말 여섯 개를 나누고, 짝에게 "어느 부분에서 그렇게 느꼈어?"로 더 물어요.',
    },
    teacherNotes: '비발디(1678~1741)의 「사계」(1725년 무렵 출판) 가운데 「봄」 첫 악장은 공공 영역 작품이며, 새소리·시냇물·천둥을 악기로 나타낸 부분이 있다. 자주 보이는 어려움: ① 존중하는 말은 내 느낌을 버리는 것이라 여긴다 → "나는 다르게 들었는데, 네 말도 재미있다"처럼 둘 다 말할 수 있다고 보여 준다. ② 봄 음악은 모두 즐거워야 한다고 여긴다 → 천둥 부분을 다시 들려주며 다른 느낌이 나올 수 있다는 것을 확인한다.',
  }));

  lessons.push(L(47, {
    title: '작은 감상 전시회에서 느낌 쪽지 남기기',
    objective: '우리 반 작은 감상 전시회에서 다른 나라 작품을 끝까지 보고, 작품을 깎아내리지 않는 느낌 쪽지를 써 붙일 수 있다.',
    illustration: ART('a paper classroom gallery with four framed foreign artworks on a string, children sticking small heart shaped notes under each frame, a flower made of colorful heart petals on the wall', '느낌 쪽지 전시회', [
      { motif: 'flower', x: 390, y: 226, color: 'rose' }, { motif: 'star', x: 110, y: 84, s: 0.6 }, { motif: 'cloud', x: 330, y: 64 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '교실 네 벽에 이번 단원에서 본 다른 나라 작품 사진(칸딘스키의 동그라미 그림, 호쿠사이의 큰 파도, 고흐의 별이 빛나는 밤, 모네의 수련)을 붙여 작은 전시회를 꾸며 둔다. "전시회에서는 작품을 끝까지 보고, 작품 아래에 느낌 쪽지를 붙여요. 쪽지는 작품을 만든 사람과 다른 친구들이 모두 읽어요." 시연 단추로 느낌 쪽지에 알맞은 말을 고르는 모습을 보여 준다.',
        student: '네 작품 가운데 가장 먼저 보고 싶은 작품을 손가락으로 가리켜요.',
        demo: { tool: 'emotion', options: { mode: 'pick', basket: '느낌 쪽지', cards: ['파란색이 시원해 보여요', '못생긴 그림이에요'], shuffle: false }, sequence: [{ pick: ['파란색이 시원해 보여요'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 느낌 쪽지에 쓸 말 고르기', minutes: 11, tool: 'emotion',
            teacher: '"느낌 쪽지에는 내 느낌을 써요. 좋은 느낌만 써야 하는 것은 아니에요. \'쓸쓸해요\'도 내 느낌이에요. 하지만 \'못생겼어요\', \'보기 싫어요\'는 느낌이 아니라 작품을 깎아내리는 말이에요." 두 가지를 칠판에 나누어 적는다. "슬픈 느낌은 쓰면 안 돼요?"라고 묻는 학생에게 "슬픈 느낌도 그림이 준 느낌이라 써도 돼요"라고 답한다. 낯선 작품이라 좋지 않다고 쓰려는 학생에게 "어디가 낯설었는지 써 볼까요?"라고 권한다.',
            task: '느낌 쪽지에 쓸 알맞은 말을 고르고, 전시회에서 생긴 일에 어떻게 할지 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '느낌 쪽지에 쓸 알맞은 말만 골라 보세요.', toolOptions: { mode: 'pick', basket: '느낌 쪽지', cards: ['파란색이 시원해 보여요', '조금 쓸쓸한 느낌이 들어요', '처음 보는 모양이라 신기해요', { id: 'ugly', text: '못생긴 그림이에요', why: '느낌이 아니라 작품을 깎아내리는 말이에요.' }, { id: 'hate', text: '이런 그림은 보기 싫어요', why: '보기 싫다고 하면 그린 사람이 속상해요. 어디가 낯설었는지 써 봐요.' }] },
                target: { pick: ['파란색이 시원해 보여요', '조금 쓸쓸한 느낌이 들어요', '처음 보는 모양이라 신기해요'] }, difficulty: 0.25,
                levels: { easy: { prompt: '느낌 쪽지에 쓸 알맞은 말 두 개를 골라 보세요.', toolOptions: { cards: ['파란색이 시원해 보여요', '조금 쓸쓸한 느낌이 들어요', { id: 'ugly', text: '못생긴 그림이에요', why: '느낌이 아니라 작품을 깎아내리는 말이에요.' }] }, target: { pick: ['파란색이 시원해 보여요', '조금 쓸쓸한 느낌이 들어요'] } } },
                hints: ['그림을 보고 내 마음에 든 느낌을 말한 쪽지를 찾아요.', '쓸쓸한 느낌도 내 느낌이에요. 못생겼다, 보기 싫다는 작품을 깎아내리는 말이에요.', '시원해요, 쓸쓸해요, 신기해요 세 장이에요.'] },
              { prompt: '전시회에서 이런 일이 생겼어요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '민지', situation: '수련 그림 아래에 누군가 "이상한 그림"이라고 쓴 쪽지를 붙였어요. 민지는 그 그림이 마음에 들었어요.', feeling: '속상함', choices: [
                { id: 'tear', text: '그 쪽지를 몰래 떼어 버려요', result: '누가 왜 그렇게 썼는지 아무도 알 수 없었어요.', mood: '걱정', why: '몰래 떼면 이야기를 나눌 수 없어요.' },
                { id: 'talk', text: '선생님께 말씀드려 "어디가 낯설었는지"로 다시 써 보자고 해요', result: '쪽지를 쓴 친구가 "물감이 흐릿해서 낯설었어"로 고쳐 썼어요.', mood: '기쁨' },
                { id: 'fight', text: '"이상한 건 너야" 하고 쪽지에 써 붙여요', result: '쪽지끼리 싸움이 되었어요.', mood: '화남', why: '깎아내리는 말에 깎아내리는 말로 답하면 모두 속상해요.' }] }, target: { choice: 'talk' }, difficulty: 0.25,
                hints: ['쪽지를 쓴 친구도 무엇이 낯설었는지 말할 수 있게 해 봐요.', '몰래 떼거나 똑같이 깎아내리면 이야기를 나눌 수 없어요.', '선생님께 말씀드려 다시 써 보자고 해요를 골라요.'] },
              { prompt: '전시회에서 작품 하나를 골라 1분 동안 끝까지 보았으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 느낌 쪽지 붙이고 느낌 꽃 만들기', minutes: 15, tool: 'collage',
            teacher: '전시회를 한 바퀴 돌며 작품 두 개를 골라 하트 모양 쪽지에 느낌을 써서 작품 아래에 붙인다(모둠별로 돌아가며 3분씩, 네 작품). 자리에 돌아와 모둠 친구들이 쓴 느낌 쪽지를 모아 \'우리 모둠 느낌 꽃\'을 만든다. "꽃잎마다 다른 색을 써요. 친구마다 느낌이 달라서 꽃이 더 알록달록해져요." 판에서 먼저 꽃을 만들어 본 뒤 색종이 하트 꽃잎에 느낌 낱말을 써서 도화지에 붙인다.',
            task: '느낌 쪽지를 작품 아래에 붙이고, 친구들의 서로 다른 느낌을 모아 느낌 꽃을 만들어요.',
            levels: {
              easy: { shapes: ['heart', 'circle'], colors: ['빨강', '노랑', '파랑', '분홍', '초록'], sizes: ['m'] },
              base: { shapes: ['heart', 'circle', 'leaf'], colors: ['빨강', '주황', '노랑', '초록', '파랑', '보라', '분홍'] },
              challenge: {},
            },
            items: [
              { prompt: '모둠 친구 네 명의 느낌이라고 생각하고, 빨강·노랑·파랑·분홍 하트 꽃잎을 하나씩 붙여 느낌 꽃을 만들어 보세요.', target: { has: [{ shape: 'heart', color: '빨강', min: 1 }, { shape: 'heart', color: '노랑', min: 1 }, { shape: 'heart', color: '파랑', min: 1 }, { shape: 'heart', color: '분홍', min: 1 }] }, difficulty: 0.2,
                levels: { challenge: { prompt: '빨강·노랑·파랑·분홍 하트 꽃잎을 하나씩 붙이고, 가운데에 노랑 동그라미 꽃술을 겹쳐 붙여 느낌 꽃을 만들어 보세요.', target: { has: [{ shape: 'heart', color: '빨강', min: 1 }, { shape: 'heart', color: '노랑', min: 1 }, { shape: 'heart', color: '파랑', min: 1 }, { shape: 'heart', color: '분홍', min: 1 }, { shape: 'circle', color: '노랑', min: 1 }], overlap: 4 } } },
                hints: ['모양 고르개에서 하트를 고르고, 색을 바꾸어 가며 붙여 보세요.', '빨강, 노랑, 파랑, 분홍 하트가 하나씩 있는지 세어 봐요.', '네 가지 색 하트를 하나씩 붙이면 돼요.'] },
              { prompt: '우리 모둠 느낌 꽃을 만든 뒤 점검 목록을 모두 표시해 보세요.', target: { selfCheck: ['작품을 끝까지 보고 느낌 쪽지를 썼어요', '작품을 깎아내리는 말을 쓰지 않았어요', '모둠 친구의 느낌을 끝까지 읽었어요'], minPieces: 4 }, difficulty: 0.15 },
              { prompt: '작품 두 개 아래에 내 느낌 쪽지를 붙였으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '모둠 느낌 꽃을 칠판에 붙이고, 작품 하나를 골라 그 아래 쪽지들을 선생님이 읽어 준다. "같은 작품 아래에 어떤 쪽지들이 붙었나요?" 다음 시간에는 우리나라 단원 전체를 돌아보며 스스로 평가한다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'pick', basket: '느낌 쪽지', cards: ['노래가 빨라서 신나요', '조금 슬픈 느낌이 들어요', { id: 'boring', text: '이런 노래는 듣기 싫어요', why: '노래를 깎아내리는 말이에요. 어디가 낯설었는지 써 봐요.' }] }, prompt: '다른 나라 노래를 듣고 쓴 쪽지예요. 느낌 쪽지에 알맞은 말만 골라 보세요.', target: { pick: ['노래가 빨라서 신나요', '조금 슬픈 느낌이 들어요'] }, difficulty: 0.25 },
          { type: 'short', prompt: '전시회에서 내가 붙인 느낌 쪽지 하나를 다시 써 보세요.', difficulty: 0.15 },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '느낌 쪽지 전시회',
      items: [
        { type: 'table', prompt: '내가 고른 작품과 느낌 쪽지를 쓰세요.', columns: ['작품', '나라', '내 느낌 쪽지'], cells: [['', '', ''], ['', '', '']] },
        { type: 'short', prompt: '친구가 쓴 느낌 쪽지 가운데 나와 다른 느낌을 하나 쓰세요.' },
        { type: 'short', prompt: '"못생긴 그림"이라는 쪽지를 느낌 쪽지로 고쳐 쓰세요.' },
        { type: 'draw', prompt: '우리 모둠 느낌 꽃을 그리고 꽃잎마다 느낌 낱말을 쓰세요.' },
      ],
      easy: {
        note: '느낌은 써도 돼요. 깎아내리는 말은 쓰지 않아요!',
        items: [
          { type: 'choice', prompt: '느낌 쪽지에 쓸 말에 ○ 하세요.', options: ['시원해 보여요', '보기 싫어요'], answer: '시원해 보여요' },
          { type: 'draw', prompt: '하트 꽃잎으로 느낌 꽃을 그려 보세요.' },
          { type: 'short', prompt: '내 느낌 쪽지에 쓴 낱말을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 놓으면 초록 테두리가 생겨요. 쪽지 말 두 개를 고르고, 하트 꽃잎 네 장으로 꽃을 만들어요.',
      base: '느낌 쪽지 세 개를 고르고, 전시회 일에 알맞은 방법을 골라요.',
      challenge: '꽃술을 겹쳐 붙인 느낌 꽃을 만들고, 깎아내리는 쪽지를 느낌 쪽지로 고쳐 써요.',
    },
    teacherNotes: '모네(1840~1926)의 「수련」 연작은 공공 영역 작품이며, 나머지 세 작품은 41~45차시에서 본 것이다. 전시회는 모둠별로 3분씩 네 작품을 돌아 12분 안에 끝낸다. 자주 보이는 어려움: ① 좋은 느낌만 써야 한다고 여긴다 → 쓸쓸함·슬픔도 그림이 준 느낌이라고 말해 준다. ② 낯선 작품을 "이상하다"로 쓴다 → 어디가 낯설었는지로 바꾸어 쓰게 한다. 깎아내리는 쪽지는 공개적으로 꾸짖지 말고 쓴 학생과 따로 고쳐 쓴다.',
  }));

  lessons.push(L(48, {
    title: '우리나라 단원을 돌아보며 스스로 평가하기',
    objective: '우리나라 단원에서 알게 된 것을 우리나라와 다른 나라로 나누어 말하고, 내가 잘한 점과 더 하고 싶은 것을 스스로 평가할 수 있다.',
    illustration: ART('an open paper scrapbook with a Korean flag, a small janggu drum, a Mongolian round tent and a big wave picture pasted inside, a child giving a thumbs up beside it', '우리나라 돌아보기', [
      { motif: 'star', x: 110, y: 84, s: 0.6 }, { motif: 'flower', x: 390, y: 226, color: 'peach' }, { motif: 'leaf', x: 90, y: 226 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '단원 동안 만든 것(탐험 물음 카드, 나라 소개 카드, 조각보, 무늬 띠, 느낌 꽃)을 책상 위에 펼쳐 두고 짝과 1분 동안 넘겨 본다. "우리나라 단원에서 가장 기억에 남는 시간은 언제였나요?" 서너 명이 말한다. 시연 단추로 알게 된 것을 우리나라와 다른 나라로 나누는 모습을 보여 준다.',
        student: '단원 동안 만든 것을 넘겨 보며 가장 기억에 남는 것 하나를 짝에게 보여 줘요.',
        demo: { tool: 'mindmap', options: { topic: '알게 된 것', slots: [{ id: 'kr', label: '우리나라' }, { id: 'world', label: '다른 나라' }], cards: ['설날에는 떡국을 먹어요', '타탄은 스코틀랜드의 무늬예요'], shuffle: false }, sequence: [{ sort: { kr: ['설날에는 떡국을 먹어요'], world: ['타탄은 스코틀랜드의 무늬예요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 알게 된 것 묶어 보기', minutes: 13, tool: 'mindmap',
            teacher: '"단원에서 알게 된 것을 우리나라에 대한 것과 다른 나라에 대한 것으로 나누어 봐요." 카드를 하나씩 읽고 그 내용을 배운 차시의 활동지를 찾아 보게 한다. 색동처럼 다른 나라 무늬와 견주었던 것은 "색동은 어느 나라 것이었나요?"라고 다시 묻는다. 그다음 단원의 네 부분(우리나라 모습, 알고 싶은 나라, 국악과 전통 미술, 여러 나라 작품)에서 한 일을 떠올려 잇는다.',
            task: '알게 된 것을 우리나라와 다른 나라로 나누고, 단원의 각 부분에서 한 일을 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '단원에서 알게 된 것을 우리나라와 다른 나라로 나누어 보세요.', toolOptions: { topic: '알게 된 것', slots: [{ id: 'kr', label: '우리나라' }, { id: 'world', label: '다른 나라' }], cards: ['태극기 가운데에는 태극 무늬가 있어요', '장구는 덩 쿵 덕 소리를 내요', '몽골 사람들은 게르에서 살기도 해요', '타탄은 스코틀랜드의 무늬예요'] },
                target: { sort: { kr: ['태극기 가운데에는 태극 무늬가 있어요', '장구는 덩 쿵 덕 소리를 내요'], world: ['몽골 사람들은 게르에서 살기도 해요', '타탄은 스코틀랜드의 무늬예요'] } }, difficulty: 0.2,
                levels: {
                  easy: { prompt: '단원에서 알게 된 것 두 개를 우리나라와 다른 나라로 나누어 보세요.', toolOptions: { cards: ['장구는 덩 쿵 덕 소리를 내요', '몽골 사람들은 게르에서 살기도 해요'] }, target: { sort: { kr: ['장구는 덩 쿵 덕 소리를 내요'], world: ['몽골 사람들은 게르에서 살기도 해요'] } } },
                  challenge: { prompt: '단원에서 알게 된 것 여섯 개를 우리나라와 다른 나라로 나누어 보세요.', toolOptions: { cards: ['태극기 가운데에는 태극 무늬가 있어요', '장구는 덩 쿵 덕 소리를 내요', '색동은 여러 색 줄이 되풀이돼요', '몽골 사람들은 게르에서 살기도 해요', '타탄은 스코틀랜드의 무늬예요', '큰 파도 그림은 일본 화가가 그렸어요'] }, target: { sort: { kr: ['태극기 가운데에는 태극 무늬가 있어요', '장구는 덩 쿵 덕 소리를 내요', '색동은 여러 색 줄이 되풀이돼요'], world: ['몽골 사람들은 게르에서 살기도 해요', '타탄은 스코틀랜드의 무늬예요', '큰 파도 그림은 일본 화가가 그렸어요'] } } },
                },
                hints: ['카드마다 어느 나라 이야기인지 먼저 찾아봐요.', '태극기, 장구, 색동은 우리나라 것이에요. 나라 이름이 나오면 그 나라 칸이에요.', '태극기·장구는 우리나라, 게르·타탄은 다른 나라예요.'] },
              { prompt: '단원의 부분과 그때 한 일을 이어 보세요.', toolOptions: { mode: 'match', topic: '우리나라 단원', slots: [{ id: 's1', label: '알고 싶은 나라 탐구하기' }, { id: 's2', label: '국악과 전통 미술 즐기기' }, { id: 's3', label: '여러 나라 작품 감상하기' }], cards: ['나라를 골라 궁금한 것 세 가지를 물었어요', '무릎 장구로 덩 쿵 덕을 쳤어요', '큰 파도 그림에서 숨은 배를 찾았어요'] },
                target: { match: { s1: '나라를 골라 궁금한 것 세 가지를 물었어요', s2: '무릎 장구로 덩 쿵 덕을 쳤어요', s3: '큰 파도 그림에서 숨은 배를 찾았어요' } }, difficulty: 0.2,
                levels: { easy: { prompt: '단원의 부분과 그때 한 일 두 짝을 이어 보세요.', toolOptions: { slots: [{ id: 's2', label: '국악과 전통 미술 즐기기' }, { id: 's3', label: '여러 나라 작품 감상하기' }], cards: ['무릎 장구로 덩 쿵 덕을 쳤어요', '큰 파도 그림에서 숨은 배를 찾았어요'] }, target: { match: { s2: '무릎 장구로 덩 쿵 덕을 쳤어요', s3: '큰 파도 그림에서 숨은 배를 찾았어요' } } } },
                hints: ['활동지를 넘겨 보며 그 일을 한 때를 찾아봐요.', '장구는 국악, 파도 그림은 다른 나라 작품이에요.', '궁금한 것 묻기 - 나라 탐구, 장구 - 국악, 파도 그림 - 작품 감상이에요.'] },
              { prompt: '짝에게 단원에서 가장 기억에 남는 것과 그 까닭을 말했으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 나를 돌아보고 스스로 평가하기', minutes: 13, tool: 'emotion',
            teacher: '"이번에는 나를 돌아봐요. 정답은 없어요. 내 마음과 같은 눈금을 솔직하게 골라요. 눈금이 작아도 괜찮아요. 다음에 더 해 볼 것을 찾는 거예요." 학생이 고른 눈금은 교사 화면에서 보고 다음 단원 지도에 쓴다. 마지막으로 더 알고 싶은 나라가 생겼을 때 어떻게 할지 고른다. 자기 평가를 친구와 견주며 걱정하는 학생에게 "다른 친구와 견주는 것이 아니라 단원 처음의 나와 견주는 거예요"라고 말해 준다.',
            task: '눈금으로 나를 솔직하게 돌아보고, 더 알고 싶은 것이 생기면 어떻게 할지 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '우리나라를 친구에게 소개할 수 있다는 자신감이 얼마나 되는지 골라 보세요. 정답은 없어요.', toolOptions: { mode: 'scale', situation: '태극기·명절·놀이·국악 가운데 하나를 골라 친구에게 소개해요.', feeling: '뿌듯함', scaleLabels: { 1: '아직 어려워요', 5: '자신 있어요' }, after: '눈금이 작으면 활동지를 다시 보며 하나만 골라 연습해요.' }, target: { level: 'any' }, difficulty: 0.05 },
              { prompt: '낯선 작품도 끝까지 듣고 보며 즐긴 정도를 골라 보세요. 정답은 없어요.', toolOptions: { mode: 'scale', situation: '처음 듣는 음악과 처음 보는 그림을 끝까지 듣고 보았어요.', feeling: '편안함', scaleLabels: { 1: '조금', 5: '아주 많이' }, after: '다음에도 낯선 작품을 만나면 끝까지 들을 거리, 볼 거리를 찾아봐요.' }, target: { level: 'any' }, difficulty: 0.05 },
              { prompt: '단원이 끝났는데 더 알고 싶은 나라가 생겼어요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '하준', situation: '하준이는 단원이 끝났지만 케냐가 더 궁금해졌어요.', feeling: '설렘', choices: [
                { id: 'stop', text: '단원이 끝났으니 궁금해도 그만둬요', result: '하준이의 궁금증이 풀리지 않았어요.', mood: '걱정', why: '단원이 끝나도 궁금한 것은 계속 알아볼 수 있어요.' },
                { id: 'plan', text: '궁금한 것을 적고 그림책이나 지도로 알아볼 방법을 정해요', result: '하준이는 도서관에서 케냐 그림책을 빌려 읽었어요.', mood: '신남' }] }, target: { choice: 'plan' }, difficulty: 0.15,
                hints: ['단원에서 궁금한 것이 생겼을 때 무엇을 했는지 떠올려 봐요.', '궁금한 것을 적고 알아볼 방법을 정했어요.', '그림책이나 지도로 알아볼 방법을 정해요를 골라요.'] },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"우리나라 단원에서 내가 가장 많이 자란 점은 무엇인가요?" 서너 명이 말하고, 나머지는 끝까지 듣고 끄덕인다. 단원 동안 만든 것을 스테이플러로 묶어 \'나의 우리나라 책\'으로 나누어 주며 말한다. "오늘 집에서 이 책을 펼쳐 가족에게 한 가지를 소개해 보세요. 무엇을 소개할지 지금 손가락으로 짚어 볼까요?"',
        exitTicket: [
          { type: 'tool', tool: 'map', options: WORLD(['우리나라', '중국', '일본', '몽골', '인도']), prompt: '세계 칸 지도에서 우리나라에 핀을 꽂아 보세요.', target: { place: '우리나라' }, difficulty: 0.1 },
          { type: 'choice', prompt: '친구가 처음 보는 나라의 춤을 보고 "이상해"라고 했어요. 어떻게 말하면 좋을까요?', options: ['"어디가 낯설었는지 끝까지 보고 말해 볼까?"', '"맞아, 이상한 춤이야"', '아무 말도 하지 않고 웃어요'], answer: 0, difficulty: 0.25, explain: '낯선 것은 나쁜 것이 아니에요. 끝까지 보고 어디가 낯설었는지 말하면 돼요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '우리나라 단원 돌아보기',
      items: [
        { type: 'table', prompt: '단원에서 알게 된 것을 쓰세요.', columns: ['우리나라에 대해', '다른 나라에 대해'], cells: [['', ''], ['', '']] },
        { type: 'short', prompt: '단원에서 가장 기억에 남는 시간과 그 까닭을 쓰세요.' },
        { type: 'short', prompt: '내가 잘한 점 하나와 더 해 보고 싶은 것 하나를 쓰세요.' },
        { type: 'draw', prompt: '가족에게 소개하고 싶은 우리나라 것을 그려 보세요.' },
      ],
      easy: {
        note: '내가 한 것을 떠올려 봐요!',
        items: [
          { type: 'choice', prompt: '우리나라 악기에 ○ 하세요.', options: ['장구', '기타'], answer: '장구' },
          { type: 'draw', prompt: '단원에서 가장 기억에 남는 것을 그려 보세요.' },
          { type: 'short', prompt: '더 알고 싶은 나라 이름을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 놓으면 초록 테두리가 생겨요. 알게 된 것 두 개를 나누고, 단원의 부분과 한 일 두 짝을 이어요.',
      base: '알게 된 것 네 개를 나누고, 단원의 부분과 한 일 세 짝을 이어요.',
      challenge: '알게 된 것 여섯 개를 나누고, 자기 평가 까닭을 활동지에 문장으로 써요.',
    },
    teacherNotes: '자기 평가 눈금은 정답이 없고(어느 눈금이든 맞음), 교사 화면에 남은 눈금으로 다음 단원에서 도움이 필요한 학생을 살핀다. 자주 보이는 어려움: ① 색동처럼 다른 나라 무늬와 견주었던 것을 다른 나라 것으로 여긴다 → 그 차시 활동지를 함께 찾아본다. ② 눈금을 친구와 견주며 걱정한다 → 단원 처음의 나와 견주는 것이라고 말해 준다. 나의 우리나라 책은 이름만 쓰고 사진은 넣지 않는다.',
  }));

  // ── 차시 끝 ──

  PaperLessons.registerUnit({
    id: 'g1-int-1-03', schema: 'edu-unit.v1', catalogUnit: UNIT,
    grade: 1, subject: '통합교과', unitTitle: TITLE,
    flow: '1~12차시는 우리나라 하면 떠오르는 것에서 출발해 태극기·지도·생활 모습에 대한 물음을 만들고, 그림과 글 자료에서 옷·음식·놀이를 찾아 나눈 뒤, 알게 된 것을 내 말로 발표하며 다른 나라 것과 견줍니다. 13~24차시는 관심을 세계로 넓혀 알고 싶은 나라를 스스로 고르고 궁금한 것 세 가지와 알아볼 방법을 정한 다음, 그림과 글 자료를 모아 가장 놀라운 것에 표시하고 그림과 함께 친구에게 설명합니다. 25~36차시는 국악기 소리와 전통 무늬를 알아보고 전래 동요를 장단에 맞추어 부르며 무늬를 따라 꾸민 뒤, 생활 속에서 국악과 전통 미술을 찾아 친근하게 느낀 점을 나눕니다. 37~47차시는 여러 나라의 음악과 그림을 견주어 다른 점을 찾고, 낯선 작품도 끝까지 듣고 보며 몸짓과 색종이로 나타내고, 친구의 다른 느낌을 끝까지 듣는 연습을 합니다. 48차시에 단원 전체를 돌아보며 스스로 평가합니다.',
    refs: {},
    lessons: lessons,
  });
})();
