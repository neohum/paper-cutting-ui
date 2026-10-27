/* 2학년 1학기 통합교과 3. 마을 — 48차시
 * 1~16차시 [슬기로운 생활] 마을과 사람들이 생활하는 모습: 알고 싶은 곳과 물음 만들기(1~6) → 둘러보며 지도에 표시하고 일하는 모습 기록(7~11) → 알아낸 것을 차례대로 설명하고 도움 청할 곳 알리기(12~16)
 * 17~32차시 [바른 생활] 공동체 안에서 할 수 있는 일: 함께 쓰는 것과 내가 할 일 찾기(17~22) → 맡은 일을 정한 날에 하고 친구 돕기(23~27) → 달라진 교실·마을 돌아보고 다음 일 고르기(28~32)
 * 33~48차시 [바른 생활] 새로운 활동에 대한 호기심과 도전: 해 보고 싶은 일과 까닭(33~38) → 작은 단계로 나누어 다시 해 보기(39~43) → 해 본 뒤 마음 돌아보고 다음 도전 정하기(44~48)
 * 성취기준: units-map 단원 목록이 비어 있고 미확인(standardsVerified:false)이라 모든 차시 standards: [] (지어내지 않는다).
 * 예문·이야기는 모두 직접 지었다. 학생 이름은 가명(민지·준호·하준·서아)만 쓴다. 마을 이름·가게 이름은 지어낸 것이다.
 */
(function () {
  var UNIT = 'g2-통합교과-1학기-3';
  var TITLE = '3. 마을';
  var HEAD = 'Layered paper-cut illustration of ';
  var TAIL = ', with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.';
  function two(n) { return (n < 10 ? '0' : '') + n; }
  // 차시 머리(같은 칸)를 채운다 — 차시마다 다른 내용은 x에 그대로 적는다
  function L(n, x) {
    var head = {
      id: 'g2-int-1-03-' + two(n), schema: 'edu-lesson.v1', catalog: { unit: UNIT, lesson: n },
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
  // 카드 판 교구 단계: 쉬움은 맞는 칸에 초록 테두리·틀린 칸은 바로 되돌림, 도전은 문항마다 함정 카드를 더 넣는다(문항 levels.challenge)
  var CARD_LV = { easy: { live: true, instant: true }, base: {}, challenge: {} };
  // 지도 단계: 쉬움은 칸이 적고 핀 읽기 글자가 보임, 도전은 칸이 넓어 찾을 곳이 많다(장소는 모두 0~3열·0~2행 안에 둔다)
  var MAP_LV = { easy: { grid: [4, 3], readout: true }, base: { grid: [5, 3] }, challenge: { grid: [6, 4] } };
  // 지어낸 마을 '꽃담 마을'의 기본 장소(차시마다 필요한 것만 골라 쓴다)
  var P = {
    school: { name: '학교', icon: 'school' }, hospital: { name: '병원', icon: 'hospital' }, park: { name: '공원', icon: 'park' },
    market: { name: '시장', icon: 'market' }, library: { name: '도서관', icon: 'library' }, post: { name: '우체국', icon: 'post' },
    police: { name: '경찰서', icon: 'police' }, fire: { name: '소방서', icon: 'fire' }, station: { name: '기차역', icon: 'station' },
    office: { name: '주민센터', icon: 'office' }, apt: { name: '아파트', icon: 'apartment' }, house: { name: '집', icon: 'house' },
  };
  function at(p, c, r, name) { return { name: name || p.name, icon: p.icon, at: [c, r] }; }
  function dot(name, c, r) { return { name: name, icon: 'dot', at: [c, r] }; }

  var lessons = [];

  // ───────────────────────── 1~6차시: 알고 싶은 곳과 물음 만들기(탐구 질문) ─────────────────────────

  lessons.push(L(1, {
    title: '마을 지도에서 아는 곳 찾고 궁금한 것 말하기',
    objective: '설명을 듣고 마을 지도에서 그곳을 찾아 핀을 꽂고, 마을에 대해 궁금한 물음을 골라낼 수 있다.',
    illustration: ART('a small paper village with a school, a bakery, a library, a post office and a park connected by winding paths, children pointing and wondering', '우리 마을에는 무엇이 있을까?', [
      { motif: 'house', x: 110, y: 214 }, { motif: 'house', x: 370, y: 216, color: 'sky', s: 0.9 }, { motif: 'tree', x: 240, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 7,
        teacher: '"학교에 오는 길에 무엇을 보았나요?" 서너 명에게 본 곳을 하나씩 듣고 칠판에 적는다. "늘 다니는 길이라 볼 게 없어요"라는 말이 나오면 "그럼 빵집은 몇 시에 문을 열까요? 아는 사람?"이라고 되묻는다. 시연 단추로 지도에 핀이 꽂히는 모습을 보여 주고 "이번 단원에서는 우리 마을을 탐험가처럼 살펴봐요"라고 말한다.',
        student: '학교에 오는 길에 본 곳을 하나 떠올려 짝에게 말해 봐요.',
        demo: { tool: 'map', options: { grid: [4, 3], places: [at(P.school, 0, 1), at(P.park, 2, 0), at(P.market, 3, 2)] }, sequence: [{ place: '공원' }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 설명 듣고 마을 지도에서 찾기', minutes: 13, tool: 'map',
            teacher: '"선생님이 하는 일을 말하면, 그 일을 하는 곳을 찾아 핀을 꽂아요." 문항 글을 함께 소리 내어 읽는다. 이름만 보고 아무 데나 꽂는 학생에게 "그곳에 가면 무엇을 할 수 있지요?"라고 묻는다. 꽂은 뒤 "가 본 사람?" 하고 손을 들게 해 경험을 잇는다.',
            task: '설명을 읽고 그 일을 하는 곳을 지도에서 찾아 핀을 꽂아요.',
            levels: MAP_LV,
            items: [
              { prompt: '아플 때 의사 선생님께 진료를 받는 곳에 핀을 꽂아 보세요.', toolOptions: { places: [at(P.school, 0, 0), at(P.hospital, 2, 1), at(P.park, 3, 2), at(P.market, 1, 2)] }, target: { place: '병원' }, difficulty: 0.05 },
              { prompt: '책을 빌려 집에 가져가 읽을 수 있는 곳에 핀을 꽂아 보세요.', toolOptions: { places: [at(P.library, 1, 0), at(P.market, 3, 1), at(P.school, 0, 2), dot('놀이터', 2, 2)] }, target: { place: '도서관' }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { places: [at(P.library, 1, 0), at(P.market, 3, 1), at(P.school, 0, 2), dot('놀이터', 2, 2), dot('서점', 3, 0)] } } },
                conclude: '서점은 책을 사는 곳이고, 도서관은 책을 빌리는 곳이에요.' },
              { prompt: '멀리 사는 할머니께 편지를 부치는 곳에 핀을 꽂아 보세요.', toolOptions: { places: [at(P.post, 3, 0), at(P.park, 0, 1), at(P.hospital, 2, 2), at(P.school, 1, 1)] }, target: { place: '우체국' }, difficulty: 0.1 },
              { prompt: '기차를 타고 다른 마을에 가려면 어디로 갈까요? 핀을 꽂아 보세요.', toolOptions: { places: [at(P.station, 0, 2), at(P.park, 1, 0), at(P.post, 3, 1), at(P.market, 2, 2)] }, target: { place: '기차역' }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 마을이 궁금해지는 물음 고르기', minutes: 13, tool: 'mindmap',
            teacher: '"물음은 끝에 물음표가 붙고, 아직 모르는 것을 알아보게 해 줘요." 첫 문항은 함께 하고, 둘째부터 혼자 한다. "공원이 넓다"를 고른 학생에게 "이 말을 듣고 더 알아볼 것이 생기나요?"라고 묻는다. 마지막에 "우리 마을에서 궁금한 것이 하나도 없다는 사람?" 하고 물어, 늘 다니는 곳에도 궁금한 것이 있다는 것을 함께 말로 정리한다.',
            task: '마을 곳을 하는 일에 따라 나누고, 마을이 궁금해지는 물음 카드만 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '마을의 곳을 물건을 사는 곳과 놀거나 쉬는 곳으로 나누어 보세요.', toolOptions: { topic: '꽃담 마을', slots: ['물건을 사는 곳', '놀거나 쉬는 곳'], cards: ['시장', '빵집', '놀이터', '공원'] },
                target: { sort: { '물건을 사는 곳': ['시장', '빵집'], '놀거나 쉬는 곳': ['놀이터', '공원'] } }, difficulty: 0.05,
                levels: { challenge: { toolOptions: { cards: ['시장', '빵집', '놀이터', '공원', '경찰서'] } } },
                hints: ['그곳에 가서 무엇을 하는지 떠올려 봐요.', '돈을 내고 무엇을 가져오는 곳인지, 뛰놀거나 앉아 쉬는 곳인지 다시 봐요.', '시장과 빵집은 물건을 사는 곳이에요. 경찰서처럼 두 칸 모두 아닌 카드는 카드 칸에 남겨요.'] },
              { prompt: '배우는 곳과 아플 때 가는 곳으로 나누어 보세요.', toolOptions: { topic: '꽃담 마을', slots: ['배우는 곳', '아플 때 가는 곳'], cards: ['학교', '태권도장', '병원', '약국'] },
                target: { sort: { '배우는 곳': ['학교', '태권도장'], '아플 때 가는 곳': ['병원', '약국'] } }, difficulty: 0.1 },
              { prompt: '마을에 대해 더 알아보고 싶어지는 물음 카드만 골라 보세요.', toolOptions: { mode: 'pick', basket: '궁금한 물음', cards: ['빵집은 몇 시에 문을 열까요?', '공원이 넓어요.', '소방관은 밤에도 일할까요?', '나는 빵을 좋아해요.'] },
                target: { pick: ['빵집은 몇 시에 문을 열까요?', '소방관은 밤에도 일할까요?'] }, difficulty: 0.15,
                hints: ['물음은 아직 모르는 것을 묻는 말이에요. 끝을 살펴봐요.', '고른 카드 가운데 이미 아는 것을 말하는 카드가 있는지 봐요.', '물음표(?)로 끝나는 두 카드가 물음이에요.'] },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"오늘 지도에서 찾은 곳 가운데 더 알고 싶은 곳은 어디인가요?" 두세 명에게 듣는다. 출구 2번에서 "살펴볼 것이 없다"를 고른 학생이 있으면 그 학생이 자주 가는 곳을 하나 물어 그곳의 궁금한 점을 함께 찾는다. 다음 시간에는 궁금한 곳을 골라 물음을 만든다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'map', options: { grid: [4, 3], places: [at(P.fire, 1, 1), at(P.library, 3, 0), at(P.school, 0, 2), at(P.park, 2, 2)] }, prompt: '불이 나면 불을 끄러 출동하는 사람들이 있는 곳에 핀을 꽂아 보세요.', target: { place: '소방서' }, difficulty: 0.1 },
          { type: 'choice', prompt: '늘 지나다니는 우리 마을에도 살펴볼 것이 있을까요?', options: ['없어요. 다 알아요', '있어요. 궁금한 것이 많아요'], answer: 1, difficulty: 0.1, explain: '늘 보던 곳도 누가, 언제, 무엇을 하는지 물으면 새로 알 것이 생겨요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '우리 마을에 있는 곳',
      items: [
        { type: 'figure', wide: true, prompt: '지도를 보고 책을 빌리는 곳에 ○ 하세요.', tool: 'map', figures: [{ options: { grid: [4, 3], places: [at(P.library, 1, 0), at(P.market, 3, 1), at(P.school, 0, 2), at(P.hospital, 2, 2)] }, caption: '꽃담 마을 지도' }], answer: '도서관' },
        { type: 'choice', prompt: '물음 카드에 ○ 하세요.', options: ['시장은 시끄러워요.', '시장에서는 무엇을 팔까요?', '나는 시장에 갔어요.'], answer: '시장에서는 무엇을 팔까요?' },
        { type: 'table', prompt: '우리 마을에 있는 곳과 그곳에서 하는 일을 쓰세요.', columns: ['곳', '하는 일'], rows: 3 },
        { type: 'short', prompt: '우리 마을에서 궁금한 것을 물음으로 하나 쓰세요.' },
      ],
      easy: {
        note: '그곳에 가면 무엇을 하는지 떠올려요.',
        items: [
          { type: 'choice', prompt: '아플 때 가는 곳에 ○ 하세요.', options: ['병원', '공원'], answer: '병원' },
          { type: 'choice', prompt: '물음 카드에 ○ 하세요.', options: ['공원이 넓어요.', '공원은 언제 생겼을까요?'], answer: '공원은 언제 생겼을까요?' },
          { type: 'draw', prompt: '학교에 오는 길에 본 곳을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '지도 칸이 적고 핀을 꽂으면 그 자리 이름이 보여요. 카드는 맞는 칸에 초록 테두리가 생겨요.',
      base: '지도 칸이 다섯 줄이에요. 모두 놓은 뒤 확인을 눌러요.',
      challenge: '지도가 넓고 서점처럼 헷갈리는 곳, 두 칸 모두 아닌 함정 카드가 섞여 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 늘 다니는 곳이라 살펴볼 것이 없다고 여긴다 → "언제·누가·무엇을" 중 하나를 붙여 그곳을 다시 묻게 한다. ② 서점과 도서관, 약국과 병원처럼 하는 일이 비슷한 곳을 헷갈린다 → "돈을 내나요, 빌리나요?"처럼 하는 일을 견주게 한다. ③ 물음 대신 "좋아요" 같은 느낌을 말한다 → 끝에 물음표가 붙는지 살피게 한다.',
  }));

  lessons.push(L(2, {
    title: '궁금한 것을 물음 문장으로 바꾸기',
    objective: '마을의 한 곳에서 궁금한 내용을 읽고 그것을 묻는 물음 문장을 골라 짝 지을 수 있다.',
    illustration: ART('a cheerful paper bakery with a striped awning and a child holding a big question-mark shaped paper speech bubble', '무엇이 궁금할까?', [
      { motif: 'house', x: 120, y: 214, color: 'peach' }, { motif: 'tree', x: 380, y: 214 }, { motif: 'star', x: 300, y: 90 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"빵집 앞을 지날 때 어떤 것이 궁금했나요?" 학생이 "빵이 언제 나와요"처럼 말하면 "그 말을 빵집 사장님께 여쭙는 물음으로 바꾸면 어떻게 말할까요?"라고 되묻는다. 칠판에 \'언제·누가·무엇을·어떻게\'를 적고 시연 단추로 궁금한 내용과 물음이 짝 지어지는 모습을 보여 준다.',
        student: '빵집에서 궁금한 것을 하나 떠올려 물음으로 말해 봐요.',
        demo: { tool: 'story', options: { mode: 'match', slots: [{ id: 'q1', label: '문 여는 시간이 궁금해요' }], cards: ['빵집은 몇 시에 문을 열까요?'], shuffle: false }, sequence: [{ match: { q1: '빵집은 몇 시에 문을 열까요?' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 궁금한 것과 물음 짝 짓기', minutes: 14, tool: 'story',
            teacher: '"왼쪽은 궁금한 것, 카드는 물음이에요. 같은 것을 묻는 카드를 찾아요." \'언제\'를 묻는 것은 시간, \'누가\'는 사람, \'무엇을\'은 물건이나 일이라는 것을 칠판에 짚는다. 문장 첫 낱말만 보고 놓는 학생에게 "이 물음에 대답하면 무엇을 알게 되나요?"라고 묻는다.',
            task: '궁금한 내용 옆에 그것을 묻는 물음 카드를 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '빵집에서 궁금한 것 옆에 알맞은 물음 카드를 놓아 보세요.', toolOptions: { mode: 'match', slots: [{ id: 'm1', label: '빵을 만드는 사람이 궁금해요' }, { id: 'm2', label: '가장 많이 팔리는 빵이 궁금해요' }, { id: 'm3', label: '빵이 나오는 시간이 궁금해요' }], cards: ['빵은 누가 만들까요?', '어떤 빵이 가장 많이 팔릴까요?', '빵은 몇 시에 나올까요?'] },
                target: { match: { m1: '빵은 누가 만들까요?', m2: '어떤 빵이 가장 많이 팔릴까요?', m3: '빵은 몇 시에 나올까요?' } }, difficulty: 0.1 },
              { prompt: '소방서에서 궁금한 것 옆에 알맞은 물음 카드를 놓아 보세요.', toolOptions: { mode: 'match', slots: [{ id: 'm1', label: '소방관이 쉬는 때가 궁금해요' }, { id: 'm2', label: '불을 끄는 데 쓰는 물건이 궁금해요' }, { id: 'm3', label: '출동하는 방법이 궁금해요' }], cards: ['소방관은 언제 쉴까요?', '불을 끌 때 무엇을 쓸까요?', '불이 나면 어떻게 출동할까요?'] },
                target: { match: { m1: '소방관은 언제 쉴까요?', m2: '불을 끌 때 무엇을 쓸까요?', m3: '불이 나면 어떻게 출동할까요?' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['소방관은 언제 쉴까요?', '불을 끌 때 무엇을 쓸까요?', '불이 나면 어떻게 출동할까요?', '소방차는 빨개요.'] } } } },
              { prompt: '도서관에서 궁금한 것 옆에 알맞은 물음 카드를 놓아 보세요.', toolOptions: { mode: 'match', slots: [{ id: 'm1', label: '한 번에 빌릴 수 있는 책 수가 궁금해요' }, { id: 'm2', label: '책을 정리하는 사람이 궁금해요' }, { id: 'm3', label: '문 닫는 날이 궁금해요' }], cards: ['책은 몇 권까지 빌릴 수 있을까요?', '책은 누가 정리할까요?', '도서관은 무슨 요일에 쉴까요?'] },
                target: { match: { m1: '책은 몇 권까지 빌릴 수 있을까요?', m2: '책은 누가 정리할까요?', m3: '도서관은 무슨 요일에 쉴까요?' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['책은 몇 권까지 빌릴 수 있을까요?', '책은 누가 정리할까요?', '도서관은 무슨 요일에 쉴까요?', '도서관은 조용해요.'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 그곳에 가서 알아볼 물음 고르고 만들기', minutes: 13, tool: 'story', pair: true,
            teacher: '"시장에 가서 알아볼 수 있는 물음일까요, 시장과 상관없는 물음일까요?" "달에는 누가 살까요?"를 고른 학생에게 "시장 사장님이 이 물음에 대답해 주실 수 있을까요?"라고 묻는다. 짝 활동에서는 한 사람이 곳을 말하면 다른 사람이 \'언제·누가·무엇을\' 가운데 하나로 물음을 만들게 한다.',
            task: '그곳에 가서 알아볼 수 있는 물음만 고르고, 짝과 내 물음을 만들어 말해요.',
            levels: CARD_LV,
            items: [
              { prompt: '시장에 가서 알아볼 수 있는 물음만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '시장에서 알아볼 물음', cards: ['시장에서는 무엇을 팔까요?', '시장은 언제 가장 붐빌까요?', '달에는 누가 살까요?', '공룡은 왜 사라졌을까요?'] },
                target: { pick: ['시장에서는 무엇을 팔까요?', '시장은 언제 가장 붐빌까요?'] }, difficulty: 0.1,
                hints: ['시장에 가서 보거나 여쭈어서 답을 알 수 있는지 생각해요.', '고른 물음 가운데 시장과 상관없는 것이 있는지 봐요.', '시장에서 파는 것, 시장이 붐비는 때를 묻는 두 물음이에요.'] },
              { prompt: '공원에 가서 알아볼 수 있는 물음만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '공원에서 알아볼 물음', cards: ['공원에는 어떤 나무가 있을까요?', '공원은 누가 청소할까요?', '공원에서 어떤 놀이를 할까요?', '바다 물고기는 무엇을 먹을까요?'] },
                target: { pick: ['공원에는 어떤 나무가 있을까요?', '공원은 누가 청소할까요?', '공원에서 어떤 놀이를 할까요?'] }, difficulty: 0.15,
                hints: ['공원에 가서 보거나 여쭈어서 답을 알 수 있는지 생각해요.', '공원에서는 알 수 없는 물음이 섞여 있는지 봐요.', '바다 물고기 물음만 빼고 모두 공원에서 알아볼 수 있어요.'] },
              { prompt: '짝과 마을의 곳 하나를 정해 물음을 두 개 만들어 말해 보고 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"오늘 만든 물음 가운데 꼭 알아보고 싶은 것은 무엇인가요?" 두세 명이 짝과 만든 물음을 발표하게 하고, 물음이 아니라 느낌을 말한 경우 "끝을 물음표로 바꾸어 볼까요?"라고 돕는다. 다음 시간에는 그곳에 가면 무엇을 살필지 정한다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { mode: 'match', slots: [{ id: 'e1', label: '약을 만드는 사람이 궁금해요' }, { id: 'e2', label: '약국이 문 닫는 시간이 궁금해요' }], cards: ['약국은 몇 시에 문을 닫을까요?', '약은 누가 지어 줄까요?'] }, prompt: '약국에서 궁금한 것 옆에 알맞은 물음 카드를 놓아 보세요.', target: { match: { e1: '약은 누가 지어 줄까요?', e2: '약국은 몇 시에 문을 닫을까요?' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '"우체국은 크다."를 물음으로 바르게 바꾼 것은?', options: ['우체국은 정말 커요.', '우체국에서는 무슨 일을 할까요?', '우체국에 갔어요.'], answer: 1, difficulty: 0.15, explain: '물음은 아직 모르는 것을 묻고, 끝에 물음표가 붙어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '궁금한 것을 물음으로',
      items: [
        { type: 'figure', wide: true, prompt: '궁금한 것과 알맞은 물음을 선으로 이으세요.', tool: 'story', figures: [{ options: { mode: 'match', slots: [{ id: 'w1', label: '빵 만드는 사람' }, { id: 'w2', label: '빵 나오는 시간' }], cards: ['빵은 몇 시에 나올까요?', '빵은 누가 만들까요?'] }, caption: '' }], answer: '빵 만드는 사람-누가 만들까요, 빵 나오는 시간-몇 시에 나올까요' },
        { type: 'choice', prompt: '도서관에 가서 알아볼 수 있는 물음에 ○ 하세요.', options: ['책은 몇 권까지 빌릴까요?', '하늘은 왜 파랄까요?', '내일 비가 올까요?'], answer: '책은 몇 권까지 빌릴까요?' },
        { type: 'blank', prompt: '물음을 완성하세요. "소방관은 ( ) 쉴까요?"', answer: '언제' },
        { type: 'short', prompt: '내가 알고 싶은 곳을 쓰고, 그곳에 묻고 싶은 물음을 하나 쓰세요.' },
      ],
      easy: {
        note: '누가, 언제, 무엇을 가운데 하나로 시작해 봐요.',
        items: [
          { type: 'choice', prompt: '물음에 ○ 하세요.', options: ['빵이 맛있어요.', '빵은 누가 만들까요?'], answer: '빵은 누가 만들까요?' },
          { type: 'blank', prompt: '물음을 완성하세요. "( ) 공원을 청소할까요?"', answer: '누가' },
          { type: 'short', prompt: '궁금한 곳의 이름을 쓰세요.' },
          { type: 'draw', prompt: '궁금한 곳을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 놓으면 초록 테두리가 생기고 틀리면 카드가 돌아와요. 짝 활동은 물음 하나만 만들어요.',
      base: '궁금한 것과 물음을 세 쌍 짝 지어요. 짝과 물음 두 개를 만들어요.',
      challenge: '물음이 아닌 함정 카드가 섞여 있어 남겨 두어야 해요. 짝 활동에서 \'어떻게\'로 시작하는 물음도 만들어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 물음 대신 아는 것을 말한다("소방차는 빨개요") → 끝에 물음표를 붙이고 모르는 것을 묻게 한다. ② \'언제\'와 \'누가\'를 헷갈린다 → 대답이 시간인지 사람인지 먼저 말해 보게 한다. ③ 그곳과 상관없는 물음을 만든다 → "그곳 사람이 대답해 줄 수 있을까?"로 거른다.',
  }));

  lessons.push(L(3, {
    title: '그곳에 가면 볼 것·들을 것·물어볼 것 정하기',
    objective: '알고 싶은 곳에 가서 눈으로 볼 것, 귀로 들을 것, 여쭈어볼 것을 나누어 관찰 계획을 세울 수 있다.',
    illustration: ART('a paper fire station with a red fire truck, a child holding a clipboard with an eye, an ear and a question mark drawn on it', '무엇을 살펴볼까?', [
      { motif: 'house', x: 120, y: 214, color: 'rose' }, { motif: 'tree', x: 370, y: 214 }, { motif: 'cloud', x: 330, y: 80, s: 0.7 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 7,
        teacher: '"소방서에 가면 그냥 구경만 하고 올까요?" 학생 반응을 듣고 "탐험가는 무엇을 볼지, 무엇을 들을지, 무엇을 여쭐지 미리 정해요"라고 말한다. 손으로 눈·귀·입을 차례로 짚으며 세 가지를 소리 내어 따라 말하게 한다. "눈을 감고도 알 수 있으면 눈으로 볼 것이 아니에요. 소리는 귀로 들을 것이에요"라고 기준을 정해 둔다.',
        student: '소방서에 가면 무엇을 보고 싶은지 하나 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '소방서 살펴보기', slots: ['눈으로 볼 것', '귀로 들을 것'], cards: ['소방차 색깔', '출동 벨 소리'], shuffle: false }, sequence: [{ sort: { '눈으로 볼 것': ['소방차 색깔'], '귀로 들을 것': ['출동 벨 소리'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 볼 것·들을 것·물어볼 것 나누기', minutes: 15, tool: 'mindmap',
            teacher: '"이 카드는 눈으로 보나요, 귀로 듣나요, 아니면 여쭈어야 알 수 있나요?" 카드마다 눈을 감아 보고 알 수 있는지 따져 보게 한다. \'몇 시에 일을 시작하세요?\'를 눈으로 볼 것에 놓은 학생에게 "보기만 해서 시간을 알 수 있을까요?"라고 묻는다. 그곳과 상관없는 카드는 남긴다는 것도 짚는다.',
            task: '살펴볼 것 카드를 볼 것, 들을 것, 물어볼 것으로 나누어 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '빵집에서 살펴볼 것을 세 가지로 나누어 보세요.', toolOptions: { topic: '빵집 살펴보기', slots: ['눈으로 볼 것', '귀로 들을 것', '여쭈어볼 것'], cards: ['진열대에 놓인 빵 모양', '반죽 기계가 도는 소리', '하루에 빵을 몇 개 만드세요?'] },
                target: { sort: { '눈으로 볼 것': ['진열대에 놓인 빵 모양'], '귀로 들을 것': ['반죽 기계가 도는 소리'], '여쭈어볼 것': ['하루에 빵을 몇 개 만드세요?'] } }, difficulty: 0.1,
                hints: ['눈을 감고도 알 수 있는지, 여쭈어야만 알 수 있는지 따져 봐요.', '놓은 카드 가운데 소리를 말하는 카드와 물음 카드가 바른 칸에 있는지 봐요.', '모양은 볼 것, 기계 소리는 들을 것, 물음표가 붙은 카드는 여쭈어볼 것이에요.'] },
              { prompt: '소방서에서 살펴볼 것을 세 가지로 나누어 보세요.', toolOptions: { topic: '소방서 살펴보기', slots: ['눈으로 볼 것', '귀로 들을 것', '여쭈어볼 것'], cards: ['소방관 옷의 생김새', '사이렌 소리', '출동은 몇 분 만에 하세요?', '소방차 사다리 길이'] },
                target: { sort: { '눈으로 볼 것': ['소방관 옷의 생김새', '소방차 사다리 길이'], '귀로 들을 것': ['사이렌 소리'], '여쭈어볼 것': ['출동은 몇 분 만에 하세요?'] } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['소방관 옷의 생김새', '사이렌 소리', '출동은 몇 분 만에 하세요?', '소방차 사다리 길이', '어제 본 만화 영화'] } } },
                hints: ['눈을 감고도 알 수 있는지, 여쭈어야만 알 수 있는지 따져 봐요.', '소방서에서 살펴볼 것이 아닌 카드는 카드 칸에 남겨 두었는지 봐요.', '옷 생김새와 사다리 길이는 볼 것, 사이렌은 들을 것, 출동 물음은 여쭈어볼 것이에요.'] },
              { prompt: '공원에서 살펴볼 것을 세 가지로 나누어 보세요.', toolOptions: { topic: '공원 살펴보기', slots: ['눈으로 볼 것', '귀로 들을 것', '여쭈어볼 것'], cards: ['나무에 핀 꽃 색깔', '새가 지저귀는 소리', '분수는 언제 나오나요?', '놀이터 미끄럼틀 수'] },
                target: { sort: { '눈으로 볼 것': ['나무에 핀 꽃 색깔', '놀이터 미끄럼틀 수'], '귀로 들을 것': ['새가 지저귀는 소리'], '여쭈어볼 것': ['분수는 언제 나오나요?'] } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['나무에 핀 꽃 색깔', '새가 지저귀는 소리', '분수는 언제 나오나요?', '놀이터 미끄럼틀 수', '우리 집 강아지 이름'] } } },
                hints: ['눈을 감고도 알 수 있는지, 여쭈어야만 알 수 있는지 따져 봐요.', '세는 것은 눈으로 보아야 알 수 있어요. 그 카드가 어디 있는지 봐요.', '꽃 색깔과 미끄럼틀 수는 볼 것, 새소리는 들을 것, 분수 물음은 여쭈어볼 것이에요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 살펴보기 계획표 차례 정하기', minutes: 11, tool: 'story',
            teacher: '"계획을 세우는 차례를 정해 볼까요? 갈 곳을 정하지 않고 물음부터 쓸 수 있을까요?" 차례를 바꾸어 놓은 학생에게 "이 일을 하려면 먼저 무엇이 정해져 있어야 할까요?"라고 묻는다. 마지막 문항 뒤 활동지 계획표에 내가 갈 곳과 살필 것을 적게 한다.',
            task: '살펴보기 계획을 세우는 차례대로 카드를 놓고, 계획표를 채워요.',
            levels: CARD_LV,
            items: [
              { prompt: '살펴보기 계획을 세우는 차례대로 카드를 놓아 보세요.', toolOptions: { slots: ['처음', '가운데', '끝'], cards: [{ id: '곳', text: '알고 싶은 곳을 정해요', motif: 'house' }, { id: '물음', text: '궁금한 물음을 써요', motif: 'star' }, { id: '살필', text: '볼 것·들을 것을 정해요', motif: 'leaf' }] },
                target: { order: ['곳', '물음', '살필'] }, difficulty: 0.1 },
              { prompt: '살펴보러 가서 하는 일을 차례대로 놓아 보세요.', toolOptions: { slots: 4, cards: [{ id: '인사', text: '들어가며 인사해요', motif: 'sun' }, { id: '알림', text: '교실에서 친구들에게 알려요', motif: 'house' }, { id: '여쭙기', text: '물음을 여쭈어요', motif: 'star' }, { id: '감사', text: '고맙다고 인사하고 나와요', motif: 'flower' }] },
                target: { order: ['인사', '여쭙기', '감사', '알림'] }, difficulty: 0.15,
                conclude: '인사로 시작해 고맙다는 인사로 나오고, 알아낸 것은 교실에 와서 친구들에게 알려요.' },
              { prompt: '활동지 계획표에 내가 갈 곳과 볼 것·들을 것·여쭈어볼 것을 하나씩 쓰고 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"내 계획표에 볼 것, 들을 것, 여쭈어볼 것이 모두 있나요?" 짝끼리 계획표를 바꾸어 보고 빠진 칸이 있으면 하나 더 채우게 한다. 출구 질문을 마친 뒤 다음 시간에는 둘러볼 길과 안전 약속을 정한다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '도서관 살펴보기', slots: ['눈으로 볼 것', '귀로 들을 것', '여쭈어볼 것'], cards: ['책장에 붙은 번호', '책 넘기는 소리', '새 책은 언제 들어오나요?'] }, prompt: '도서관에서 살펴볼 것을 세 가지로 나누어 보세요.', target: { sort: { '눈으로 볼 것': ['책장에 붙은 번호'], '귀로 들을 것': ['책 넘기는 소리'], '여쭈어볼 것': ['새 책은 언제 들어오나요?'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '"사서 선생님은 몇 시에 오세요?"는 어떻게 알아볼까요?', options: ['눈으로 봐요', '귀로 들어요', '여쭈어봐요'], answer: 2, difficulty: 0.1, explain: '시간처럼 보거나 들어서 알 수 없는 것은 여쭈어봐요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '나의 살펴보기 계획표',
      items: [
        { type: 'blank', prompt: '내가 살펴볼 곳: (        )', answer: '' },
        { type: 'table', prompt: '그곳에서 살펴볼 것을 쓰세요.', columns: ['눈으로 볼 것', '귀로 들을 것', '여쭈어볼 것'], rows: 2 },
        { type: 'choice', prompt: '귀로 들을 것에 ○ 하세요.', options: ['빵 모양', '오븐 알림 소리', '빵 값'], answer: '오븐 알림 소리' },
        { type: 'choice', prompt: '여쭈어볼 것에 ○ 하세요.', options: ['소방차 색깔', '사이렌 소리', '하루에 몇 번 출동하세요?'], answer: '하루에 몇 번 출동하세요?' },
      ],
      easy: {
        note: '"볼 것"은 보기, "여쭈어볼 것"은 묻기라고 짧게 써도 돼요.',
        items: [
          { type: 'blank', prompt: '내가 살펴볼 곳: (        )', answer: '' },
          { type: 'table', prompt: '볼 것과 여쭈어볼 것을 하나씩 쓰세요.', columns: ['볼 것', '여쭈어볼 것'], rows: 1 },
          { type: 'choice', prompt: '귀로 들을 것에 ○ 하세요.', options: ['새소리', '꽃 색깔'], answer: '새소리' },
          { type: 'draw', prompt: '그곳에서 보고 싶은 것을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 틀리면 카드가 돌아와요. 계획표는 볼 것과 여쭈어볼 것 두 칸만 써요.',
      base: '세 칸으로 나누고 계획표 세 칸을 하나씩 채워요.',
      challenge: '그곳과 상관없는 함정 카드가 섞여 있어요. 계획표 칸마다 두 가지씩 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 시간·개수처럼 보이지 않는 것을 \'볼 것\'에 넣는다 → "눈으로 보기만 해서 알 수 있나요?"로 되묻는다(단, 미끄럼틀 수처럼 세어서 아는 것은 볼 것). ② 소리를 볼 것에 넣는다 → 눈을 감고 들어 보게 한다. ③ 계획표에 하고 싶은 놀이를 적는다 → "그곳에 대해 알게 되는 것인가요?"로 거른다.',
  }));

  lessons.push(L(4, {
    title: '마을 둘러보기 길 정하고 안전 약속 고르기',
    objective: '지도에서 위치를 나타내는 말(오른쪽·왼쪽·위·아래·사이)을 읽고 장소를 찾으며, 마을을 둘러볼 때 지킬 안전 약속을 고를 수 있다.',
    illustration: ART('a line of paper children walking in pairs on a village sidewalk with a crosswalk, a teacher with a flag in front, small shops along the road', '안전하게 둘러봐요', [
      { motif: 'house', x: 100, y: 214 }, { motif: 'house', x: 380, y: 214, color: 'mint' }, { motif: 'tree', x: 240, y: 216 }]),
    safety: ['마을을 둘러볼 때는 짝과 손을 잡고 줄을 맞추어 인도로만 걸어요.', '횡단보도에서는 선생님 신호를 보고 손을 들고 건너요.', '모르는 사람이 따라오라고 하면 따라가지 않고 선생님께 바로 알려요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"다음 시간에 우리 반이 마을을 둘러보러 나가요. 길을 잃지 않으려면 무엇이 필요할까요?" 지도를 띄우고 "학교 바로 오른쪽 칸"을 손가락으로 함께 짚어 본다. 교실 앞에서 학생 한 명을 세우고 "민지의 오른쪽에 서 볼 사람?"처럼 몸으로 위치 말을 익힌다. 지도에서는 내 몸이 아니라 화면을 보고 오른쪽·왼쪽을 정한다는 것을 짚는다.',
        student: '내 짝의 오른쪽에 무엇이 있는지 말해 봐요.',
        demo: { tool: 'map', options: { grid: [4, 3], places: [at(P.school, 1, 1)] }, sequence: [{ at: [2, 1] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 위치 말을 읽고 모일 곳 찾기', minutes: 14, tool: 'map',
            teacher: '"\'바로 오른쪽\'은 붙어 있는 옆 칸이에요." 손가락으로 기준이 되는 곳을 먼저 짚고 한 칸 옮기게 한다. 기준을 찾지 않고 바로 꽂는 학생에게 "먼저 어느 곳에서 출발했지요?"라고 묻는다. \'사이\'는 두 곳 가운데 칸이라는 것도 짚는다.',
            task: '위치를 나타내는 말을 읽고 그 칸에 핀을 꽂아요.',
            levels: MAP_LV,
            items: [
              { prompt: '꽃집은 학교 바로 오른쪽 칸에 있어요. 꽃집 자리에 핀을 꽂아 보세요.', toolOptions: { places: [at(P.school, 1, 1), at(P.park, 3, 0), at(P.market, 0, 2)] }, target: { at: [2, 1] }, difficulty: 0.1 },
              { prompt: '우리 반은 공원 바로 아래 칸에서 모여요. 모일 자리에 핀을 꽂아 보세요.', toolOptions: { places: [at(P.park, 2, 0), at(P.school, 0, 1), at(P.library, 3, 2)] }, target: { at: [2, 1] }, difficulty: 0.15,
                hints: ['먼저 공원을 찾고, 거기서 한 칸만 움직여요.', '아래는 화면 아래쪽이에요. 공원과 붙어 있는 칸인지 봐요.', '공원에서 아래로 딱 한 칸 내려온 빈칸이에요.'] },
              { prompt: '쉬는 곳은 시장과 도서관 사이 칸이에요. 쉬는 곳에 핀을 꽂아 보세요.', toolOptions: { places: [at(P.market, 0, 2), at(P.library, 2, 2), at(P.school, 3, 0)] }, target: { at: [1, 2] }, difficulty: 0.15,
                hints: ['두 곳을 먼저 찾고, 그 가운데 칸을 봐요.', '사이 칸은 두 곳 모두와 붙어 있어요.', '시장과 도서관 가운데 끼어 있는 한 칸이에요.'] },
              { prompt: '돌아올 때 만날 곳은 우체국 바로 왼쪽 칸이에요. 핀을 꽂아 보세요.', toolOptions: { places: [at(P.post, 3, 1), at(P.school, 0, 0), at(P.park, 1, 2)] }, target: { at: [2, 1] }, difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 둘러볼 때 지킬 약속 고르기', minutes: 13, tool: 'kitchen',
            teacher: '"이 약속을 지키지 않으면 어떤 일이 생길까요?" 약속마다 까닭을 한 명씩 말하게 한다. 지킬 약속이 아닌 카드를 고른 학생에게 "그렇게 하면 누가 위험하거나 불편할까요?"라고 묻는다. 교실 뒤쪽에서 짝과 손을 잡고 줄 서서 걸어 보는 연습으로 마무리한다.',
            task: '마을을 둘러볼 때 지킬 약속만 골라 표시해요.',
            levels: { easy: { }, base: {}, challenge: {} },
            items: [
              { prompt: '길을 걸을 때 지킬 약속만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '길을 걸을 때', items: [{ id: 'hand', text: '짝과 손을 잡고 걸어요' }, { id: 'side', text: '인도로만 걸어요' }, { id: 'run', text: '먼저 가려고 뛰어가요' }, { id: 'phone', text: '걸으며 휴대전화를 봐요' }] },
                target: { checklist: ['hand', 'side'] }, difficulty: 0.1,
                hints: ['그렇게 하면 다치거나 길을 잃을 수 있는지 떠올려 봐요.', '표시한 것 가운데 위험한 행동이 섞였는지 봐요.', '손잡기와 인도로 걷기만 지킬 약속이에요.'] },
              { prompt: '가게 안에서 지킬 약속만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '가게 안에서', items: [{ id: 'quiet', text: '작은 목소리로 말해요' }, { id: 'touch', text: '파는 물건을 함부로 만지지 않아요' }, { id: 'eat', text: '진열된 빵을 맛보아요' }, { id: 'greet', text: '들어가고 나올 때 인사해요' }] },
                target: { checklist: ['quiet', 'touch', 'greet'] }, difficulty: 0.15,
                levels: { easy: { toolOptions: { items: [{ id: 'quiet', text: '작은 목소리로 말해요' }, { id: 'touch', text: '파는 물건을 함부로 만지지 않아요' }, { id: 'eat', text: '진열된 빵을 맛보아요' }] }, target: { checklist: ['quiet', 'touch'] }, prompt: '가게 안에서 지킬 약속만 표시해 보세요. (세 가지 가운데)' } },
                hints: ['가게 주인과 다른 손님이 불편하지 않을지 생각해요.', '파는 물건에 대한 약속을 다시 읽어 봐요.', '진열된 빵을 맛보는 것만 빼고 모두 지킬 약속이에요.'] },
              { prompt: '횡단보도를 건널 때 지킬 약속만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '횡단보도에서', items: [{ id: 'stop', text: '멈추어 왼쪽·오른쪽을 살펴요' }, { id: 'green', text: '초록불이 켜지면 손을 들고 건너요' }, { id: 'blink', text: '초록불이 깜빡이면 뛰어서 건너요' }, { id: 'flag', text: '선생님 신호를 보고 건너요' }] },
                target: { checklist: ['stop', 'green', 'flag'] }, difficulty: 0.2,
                hints: ['차가 오는지 살피고 천천히 건너는 것이 안전해요.', '깜빡이는 초록불에서 어떻게 하는지 다시 읽어 봐요.', '깜빡일 때 뛰는 것만 빼고 모두 지킬 약속이에요. 깜빡이면 다음 초록불을 기다려요.'] },
              { prompt: '짝과 손을 잡고 교실 뒤를 줄 맞추어 한 바퀴 걸어 보고 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"둘러보러 가는 날 꼭 지킬 약속 하나를 짝에게 말해 보세요." 두세 명의 약속을 듣고 칠판의 약속 목록에 붙인다. 출구 지도 문항에서 기준 곳을 찾지 못한 학생은 다음 시간 시작 전에 따로 한 번 더 짚어 준다.',
        exitTicket: [
          { type: 'tool', tool: 'map', options: { grid: [4, 3], places: [at(P.hospital, 1, 0), at(P.school, 3, 2), at(P.park, 0, 2)] }, prompt: '약국은 병원 바로 아래 칸에 있어요. 약국 자리에 핀을 꽂아 보세요.', target: { at: [1, 1] }, difficulty: 0.15 },
          { type: 'choice', prompt: '모르는 사람이 "맛있는 것 줄게, 따라와"라고 하면 어떻게 할까요?', options: ['따라가요', '따라가지 않고 선생님께 알려요', '혼자 다른 길로 가요'], answer: 1, difficulty: 0.05, explain: '모르는 사람은 따라가지 않고 함께 온 어른께 바로 알려요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '둘러보기 길과 안전 약속',
      items: [
        { type: 'figure', wide: true, prompt: '꽃집은 학교 바로 오른쪽 칸이에요. 꽃집 자리에 ○ 하세요.', tool: 'map', figures: [{ options: { grid: [4, 3], places: [at(P.school, 1, 1), at(P.park, 3, 0), at(P.market, 0, 2)] }, caption: '' }], answer: '학교 바로 오른쪽 칸' },
        { type: 'check', prompt: '마을을 둘러볼 때 지킬 약속에 ✓ 하세요.', options: ['짝과 손을 잡아요', '인도로만 걸어요', '혼자 먼저 뛰어가요', '가게에서 작은 목소리로 말해요'] },
        { type: 'choice', prompt: '초록불이 깜빡이면 어떻게 할까요?', options: ['뛰어서 건너요', '다음 초록불을 기다려요'], answer: '다음 초록불을 기다려요' },
        { type: 'short', prompt: '내가 꼭 지킬 안전 약속을 하나 쓰세요.' },
      ],
      easy: {
        note: '먼저 기준이 되는 곳을 손가락으로 짚어요.',
        items: [
          { type: 'figure', prompt: '학교 바로 오른쪽 칸에 ○ 하세요.', tool: 'map', figures: [{ options: { grid: [3, 2], places: [at(P.school, 0, 0)] }, caption: '' }], answer: '학교 오른쪽 칸' },
          { type: 'choice', prompt: '길에서는 어떻게 걸을까요?', options: ['짝과 손잡고 걸어요', '혼자 뛰어가요'], answer: '짝과 손잡고 걸어요' },
          { type: 'short', prompt: '꼭 지킬 약속을 하나 쓰세요.' },
          { type: 'draw', prompt: '짝과 손잡고 걷는 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '지도 칸이 적고 핀을 꽂으면 자리 이름이 보여요. 가게 약속은 세 가지 가운데서 골라요.',
      base: '다섯 줄 지도에서 위치 말을 읽어요. 약속 네 가지 가운데서 골라요.',
      challenge: '지도가 넓어 칸을 잘 세어야 해요. 약속마다 까닭을 짝에게 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 오른쪽·왼쪽을 내 몸이 아닌 화면 기준으로 바꾸지 못한다 → 화면 앞에 서서 같은 방향을 보게 한다. ② \'바로 옆\'을 두 칸 떨어진 곳으로 읽는다 → 손가락으로 한 칸만 옮기게 한다. ③ 깜빡이는 초록불에 뛰어 건너는 것을 빠른 행동으로 여긴다 → 다음 신호를 기다리는 것이 안전하다고 다시 말한다. 실제 둘러보기 전 학부모 안내와 인솔 교사 수를 미리 확인한다.',
  }));

  lessons.push(L(5, {
    title: '마을 사람에게 여쭐 말 공손하게 다듬기',
    objective: '마을에서 일하는 분께 물음을 여쭐 때 인사·물음·감사의 차례를 지키고 공손한 말로 바꾸어 말할 수 있다.',
    illustration: ART('a polite paper child bowing to a friendly baker behind a counter full of bread, a small notebook in the child hand', '안녕하세요, 여쭈어봐도 될까요?', [
      { motif: 'house', x: 110, y: 214, color: 'peach' }, { motif: 'flower', x: 360, y: 228 }, { motif: 'tree', x: 420, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '선생님이 빵집 사장님 역할을 하고 한 학생에게 "빵 몇 개 만들어요?"라고 묻게 한 뒤, 다시 "안녕하세요? 하루에 빵을 몇 개 만드세요?"라고 묻게 한다. "두 말 가운데 어느 말을 들을 때 사장님 마음이 더 좋을까요?" 반응을 듣고, 어른께는 \'-세요\', \'-습니까\'처럼 높이는 말을 쓴다는 것을 칠판에 적는다.',
        student: '"이름이 뭐야?"를 어른께 여쭙는 말로 바꾸어 말해 봐요.',
        demo: { tool: 'story', options: { slots: ['처음', '가운데', '끝'], cards: [{ id: '인사', text: '안녕하세요?', motif: 'sun' }, { id: '물음', text: '여쭈어봐도 될까요?', motif: 'star' }, { id: '감사', text: '고맙습니다.', motif: 'flower' }], shuffle: false }, sequence: [{ order: ['인사', '물음', '감사'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 공손한 말로 바꾸기', minutes: 13, tool: 'story',
            teacher: '"친구에게 하는 말과 어른께 여쭙는 말은 끝이 달라요." 카드를 소리 내어 읽고 끝말에 동그라미를 치게 한다. "빵 몇 개 만들어요?"도 높임말이 아니냐고 묻는 학생에게 "\'만드세요\'와 견주어 소리 내어 읽어 보세요"라고 한다.',
            task: '친구에게 하는 말 옆에 어른께 여쭙는 공손한 말을 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '빵집 사장님께 여쭐 말을 공손한 말과 짝 지어 보세요.', toolOptions: { mode: 'match', slots: [{ id: 'm1', label: '"빵 몇 개 만들어?"' }, { id: 'm2', label: '"언제 일 시작해?"' }], cards: ['"하루에 빵을 몇 개 만드세요?"', '"몇 시에 일을 시작하세요?"'] },
                target: { match: { m1: '"하루에 빵을 몇 개 만드세요?"', m2: '"몇 시에 일을 시작하세요?"' } }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['"하루에 빵을 몇 개 만드세요?"', '"몇 시에 일을 시작하세요?"', '"빵 좀 줘."'] } } } },
              { prompt: '소방관께 여쭐 말 가운데 공손한 말만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '공손한 말', cards: ['"출동할 때 무섭지 않으세요?"', '"소방차 타 봐도 돼?"', '"불은 어떻게 끄세요?"', '"빨리 대답해 줘."'] },
                target: { pick: ['"출동할 때 무섭지 않으세요?"', '"불은 어떻게 끄세요?"'] }, difficulty: 0.15,
                hints: ['어른께 하는 말은 끝이 \'-세요\'처럼 높여요.', '고른 말 가운데 친구에게 하듯 끝난 말이 있는지 봐요.', '\'무섭지 않으세요?\'와 \'어떻게 끄세요?\'가 공손한 말이에요.'] },
              { prompt: '사서 선생님께 여쭙는 차례대로 말 카드를 놓아 보세요.', toolOptions: { slots: 4, cards: [{ id: '인사', text: '"안녕하세요?"', motif: 'sun' }, { id: '소개', text: '"꽃담초 2학년이에요."', motif: 'house' }, { id: '물음', text: '"책은 몇 권 빌릴 수 있나요?"', motif: 'star' }, { id: '감사', text: '"알려 주셔서 고맙습니다."', motif: 'flower' }] },
                target: { order: ['인사', '소개', '물음', '감사'] }, difficulty: 0.15,
                levels: { challenge: { prompt: '사서 선생님께 여쭙는 차례대로 놓되, 반말 카드는 빼고 놓아 보세요.', toolOptions: { cards: [{ id: '인사', text: '"안녕하세요?"', motif: 'sun' }, { id: '소개', text: '"꽃담초 2학년이에요."', motif: 'house' }, { id: '물음', text: '"책은 몇 권 빌릴 수 있나요?"', motif: 'star' }, { id: '반말', text: '"책 몇 권 돼?"', motif: 'cloud' }, { id: '감사', text: '"알려 주셔서 고맙습니다."', motif: 'flower' }] } } },
                conclude: '인사하고, 누구인지 말하고, 여쭙고, 고맙다고 말해요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 이럴 때는 어떻게 여쭐까', minutes: 14, tool: 'emotion', pair: true,
            teacher: '"사장님이 손님에게 빵을 파느라 바쁘세요. 지금 바로 물을까요?" 보기마다 그렇게 하면 사장님 마음이 어떨지 날씨 그림으로 견주게 한다. 마지막 문항은 짝과 한 사람은 마을 어른, 한 사람은 탐험가가 되어 인사부터 감사까지 역할놀이를 하고 바꾸어 한다.',
            task: '여쭐 때 생기는 일을 읽고 알맞은 행동을 고른 뒤, 짝과 여쭙기 역할놀이를 해요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '빵집 사장님이 손님에게 빵을 파느라 바빠요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '빵집 사장님이 줄 선 손님들에게 빵을 파느라 바빠요.', choices: [
                { id: 'wait', text: '손님이 다 갈 때까지 기다렸다가 여쭈어요', result: '사장님이 웃으며 천천히 대답해 주셔요.', mood: '고마움' },
                { id: 'shout', text: '큰 소리로 끼어들어 물어요', result: '손님과 사장님이 깜짝 놀라요.', mood: '놀람', why: '바쁜 사장님과 손님 마음을 떠올려 봐요.' },
                { id: 'leave', text: '물어보지 않고 그냥 돌아가요', result: '궁금한 것을 알아내지 못해요.', mood: '속상함', why: '조금 기다리면 여쭐 수 있어요.' }] }, target: { choice: 'wait' }, difficulty: 0.1,
                levels: { easy: { toolOptions: { choices: [
                  { id: 'wait', text: '손님이 다 갈 때까지 기다렸다가 여쭈어요', result: '사장님이 웃으며 천천히 대답해 주셔요.', mood: '고마움' },
                  { id: 'shout', text: '큰 소리로 끼어들어 물어요', result: '손님과 사장님이 깜짝 놀라요.', mood: '놀람', why: '바쁜 사장님과 손님 마음을 떠올려 봐요.' }] } } } },
              { prompt: '소방관이 대답해 주셨는데 말이 빨라 잘 못 들었어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '소방관께서 대답해 주셨는데 말이 빨라서 잘 못 들었어요.', choices: [
                { id: 'again', text: '"죄송하지만 한 번 더 말씀해 주세요."라고 해요', result: '소방관께서 천천히 다시 알려 주셔요.', mood: '편안함' },
                { id: 'guess', text: '들은 척하고 아무렇게나 적어요', result: '틀린 내용을 적게 돼요.', mood: '걱정', why: '잘못 적으면 친구들에게도 틀리게 알려 줘요.' }] }, target: { choice: 'again' }, difficulty: 0.15 },
              { prompt: '여쭈어보고 싶은데 부끄러워 말이 안 나와요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '도서관에서 사서 선생님께 여쭈고 싶은데 부끄러워 말이 안 나와요.', choices: [
                { id: 'note', text: '쪽지에 적어 온 물음을 보며 천천히 말해요', result: '떨렸지만 끝까지 여쭈었어요.', mood: '뿌듯함' },
                { id: 'pair', text: '짝과 함께 가서 같이 인사하고 여쭈어요', result: '짝이 옆에 있어 용기가 났어요.', mood: '편안함' },
                { id: 'give', text: '아무 말 없이 그냥 나와요', result: '궁금한 것이 그대로 남았어요.', mood: '속상함', why: '물음 쪽지나 짝의 도움을 떠올려 봐요.' }] }, target: { choice: ['note', 'pair'] }, difficulty: 0.1 },
              { prompt: '짝과 마을 어른과 탐험가가 되어 인사부터 감사까지 여쭙기 놀이를 하고, 역할을 바꾸어 한 뒤 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"여쭐 때 지킬 차례를 손가락으로 세어 볼까요?" 다 함께 손가락을 접으며 말해 보게 한다. 역할놀이에서 공손하게 말한 짝 두세 팀을 짧게 들려 주고, 다음 시간에는 우리 반 물음판을 만든다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { mode: 'pick', basket: '공손한 말', cards: ['"시장은 몇 시에 여세요?"', '"이거 얼마야?"', '"생선은 어디서 가져오세요?"'] }, prompt: '시장 사장님께 여쭐 공손한 말만 바구니에 넣어 보세요.', target: { pick: ['"시장은 몇 시에 여세요?"', '"생선은 어디서 가져오세요?"'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '여쭈어본 뒤 마지막에 할 말은?', options: ['"안녕하세요?"', '"고맙습니다."', '"빨리 알려 줘."'], answer: 1, difficulty: 0.05, explain: '대답을 들은 뒤에는 고맙다고 인사해요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '공손하게 여쭈어요',
      items: [
        { type: 'figure', wide: true, prompt: '여쭙는 차례대로 1, 2, 3을 쓰세요.', tool: 'story', figures: [{ options: { slots: ['처음', '가운데', '끝'], cards: [{ id: '감사', text: '고맙습니다', motif: 'flower' }, { id: '인사', text: '안녕하세요?', motif: 'sun' }, { id: '물음', text: '몇 시에 여세요?', motif: 'star' }] }, caption: '' }], answer: '안녕하세요 → 몇 시에 여세요 → 고맙습니다' },
        { type: 'choice', prompt: '공손한 말에 ○ 하세요.', options: ['"빵 언제 나와?"', '"빵은 언제 나오나요?"'], answer: '"빵은 언제 나오나요?"' },
        { type: 'short', prompt: '"몇 살이야?"를 어른께 여쭙는 말로 바꾸어 쓰세요.' },
        { type: 'short', prompt: '내가 마을 어른께 여쭐 물음을 공손한 말로 쓰세요.' },
      ],
      easy: {
        note: '어른께는 끝을 \'-세요\', \'-나요\'로 말해요.',
        items: [
          { type: 'choice', prompt: '공손한 말에 ○ 하세요.', options: ['"이거 뭐야?"', '"이것은 무엇인가요?"'], answer: '"이것은 무엇인가요?"' },
          { type: 'choice', prompt: '여쭌 뒤에 하는 말에 ○ 하세요.', options: ['"고맙습니다."', '"잘 가."'], answer: '"고맙습니다."' },
          { type: 'short', prompt: '여쭐 물음을 하나 쓰세요.' },
          { type: 'draw', prompt: '공손하게 인사하는 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 역할놀이에서 물음 쪽지를 보고 읽어도 돼요.',
      base: '공손한 말로 바꾸고 차례대로 놓아요. 짝과 역할을 바꾸어 두 번 해요.',
      challenge: '반말 함정 카드가 섞인 차례 놓기를 해요. 역할놀이에서 물음을 두 개 여쭈어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① \'-요\'만 붙이면 모두 공손한 말이라고 여긴다 → \'만들어요?\'와 \'만드세요?\'를 소리 내어 견주게 한다. ② 부끄러워 여쭙기를 포기한다 → 물음 쪽지와 짝의 도움을 쓰게 한다. ③ 바쁜 어른께 끼어든다 → 기다렸다가 여쭙는 것이 예절임을 역할놀이로 겪게 한다. 소개 말에 실제 이름 대신 학교와 학년만 말하게 한다.',
  }));

  lessons.push(L(6, {
    title: '우리 반 물음판 만들고 알아볼 곳 정하기',
    objective: '친구들이 만든 물음을 같은 곳끼리 묶고, 그 물음을 알아보러 갈 곳을 지도에서 찾아 모둠 물음을 정할 수 있다.',
    illustration: ART('a classroom paper board covered with colorful question cards grouped under little paper houses labeled bakery, library and fire station', '우리 반 물음판', [
      { motif: 'house', x: 110, y: 214, color: 'lavender' }, { motif: 'star', x: 380, y: 90 }, { motif: 'tree', x: 400, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '지난 시간에 학생들이 쓴 물음 쪽지를 칠판에 마구 붙여 두고 "이 물음들 가운데 빵집에 관한 것을 찾기 쉬운가요?"라고 묻는다. "같은 곳에 관한 물음끼리 모으면 찾기도 쉽고, 누구에게 여쭐지도 알 수 있어요." 시연 단추로 물음 카드가 곳 가지에 모이는 모습을 보여 준다.',
        student: '내가 쓴 물음은 어느 곳에 관한 것인지 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '우리 반 물음판', slots: ['빵집', '도서관'], cards: ['빵은 몇 시에 나올까요?', '책은 몇 권 빌릴까요?'], shuffle: false }, sequence: [{ sort: { '빵집': ['빵은 몇 시에 나올까요?'], '도서관': ['책은 몇 권 빌릴까요?'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 물음을 곳끼리 묶기', minutes: 14, tool: 'mindmap',
            teacher: '"이 물음에 대답해 주실 분은 어디에서 일하시나요?" 곳 이름이 물음에 없는 카드("불을 끌 때 무엇을 쓸까요?")는 누가 하는 일인지 먼저 떠올리게 한다. 같은 것을 묻는 두 물음을 찾는 문항에서는 "두 물음의 대답이 같을까요?"라고 묻는다.',
            task: '물음 카드를 대답해 줄 곳의 가지에 놓고, 같은 것을 묻는 물음을 찾아요.',
            levels: CARD_LV,
            items: [
              { prompt: '물음 카드를 알아볼 곳의 가지에 나누어 놓아 보세요.', toolOptions: { topic: '우리 반 물음판', slots: ['빵집', '도서관', '소방서'], cards: ['반죽은 몇 번 치댈까요?', '새 책은 언제 들어올까요?', '불을 끌 때 무엇을 쓸까요?', '빵 굽는 오븐은 얼마나 뜨거울까요?', '책은 어떻게 정리할까요?', '소방관은 밤에도 일할까요?'] },
                target: { sort: { '빵집': ['반죽은 몇 번 치댈까요?', '빵 굽는 오븐은 얼마나 뜨거울까요?'], '도서관': ['새 책은 언제 들어올까요?', '책은 어떻게 정리할까요?'], '소방서': ['불을 끌 때 무엇을 쓸까요?', '소방관은 밤에도 일할까요?'] } }, difficulty: 0.15,
                levels: { easy: { toolOptions: { slots: ['빵집', '소방서'], cards: ['반죽은 몇 번 치댈까요?', '불을 끌 때 무엇을 쓸까요?', '빵 굽는 오븐은 얼마나 뜨거울까요?', '소방관은 밤에도 일할까요?'] }, target: { sort: { '빵집': ['반죽은 몇 번 치댈까요?', '빵 굽는 오븐은 얼마나 뜨거울까요?'], '소방서': ['불을 끌 때 무엇을 쓸까요?', '소방관은 밤에도 일할까요?'] } }, prompt: '물음 카드를 빵집과 소방서 가지에 나누어 놓아 보세요.' } },
                hints: ['이 물음에 대답해 줄 분이 어디에서 일하는지 떠올려 봐요.', '곳 이름이 없는 물음은 그 일을 하는 곳을 생각해 다시 봐요.', '반죽·오븐은 빵집, 새 책·정리는 도서관, 불 끄기·밤 근무는 소방서예요.'] },
              { prompt: '물음 카드를 묻는 낱말에 따라 나누어 놓아 보세요.', toolOptions: { topic: '묻는 낱말', slots: ['누가', '언제', '무엇을'], cards: ['공원은 누가 청소할까요?', '시장은 언제 가장 붐빌까요?', '우체국에서는 무엇을 팔까요?'] },
                target: { sort: { '누가': ['공원은 누가 청소할까요?'], '언제': ['시장은 언제 가장 붐빌까요?'], '무엇을': ['우체국에서는 무엇을 팔까요?'] } }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['공원은 누가 청소할까요?', '시장은 언제 가장 붐빌까요?', '우체국에서는 무엇을 팔까요?', '약국은 누가 지킬까요?', '빵집은 언제 쉴까요?'] }, target: { sort: { '누가': ['공원은 누가 청소할까요?', '약국은 누가 지킬까요?'], '언제': ['시장은 언제 가장 붐빌까요?', '빵집은 언제 쉴까요?'], '무엇을': ['우체국에서는 무엇을 팔까요?'] } }, prompt: '물음 카드 다섯 장을 묻는 낱말에 따라 나누어 놓아 보세요.' } } },
              { prompt: '같은 것을 묻는 물음 두 장을 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '같은 것을 묻는 물음', cards: ['빵집은 몇 시에 문을 열까요?', '빵집 문 여는 시간은 언제일까요?', '빵집에는 빵이 몇 가지 있을까요?', '빵집은 누가 처음 만들었을까요?'] },
                target: { pick: ['빵집은 몇 시에 문을 열까요?', '빵집 문 여는 시간은 언제일까요?'] }, difficulty: 0.2,
                hints: ['두 물음에 대답하면 같은 것을 알게 되는지 따져 봐요.', '고른 카드의 대답이 시간인지, 수인지, 사람인지 견주어 봐요.', '문 여는 시간을 묻는 두 카드예요. 말은 달라도 대답이 같아요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 모둠 물음을 알아볼 곳 찾기', minutes: 13, tool: 'map',
            teacher: '"이 물음은 어디에 가야 알 수 있을까요? 지도에서 찾아 볼까요?" 물음 속 낱말(책, 편지, 기차)을 짚고 그 일을 하는 곳을 떠올리게 한다. 마지막에는 모둠이 물음판에서 하나를 골라 물음 쪽지에 모둠 이름표를 붙인다.',
            task: '물음을 읽고 알아보러 갈 곳을 지도에서 찾아 핀을 꽂은 뒤, 모둠 물음을 정해요.',
            levels: MAP_LV,
            items: [
              { prompt: '"편지는 어디로 어떻게 갈까요?"를 알아보러 갈 곳에 핀을 꽂아 보세요.', toolOptions: { places: [at(P.post, 2, 0), at(P.library, 0, 1), at(P.station, 3, 2), at(P.park, 1, 2)] }, target: { place: '우체국' }, difficulty: 0.1 },
              { prompt: '"동네 사람들이 서류를 떼는 곳에서는 어떤 일을 할까요?"를 알아보러 갈 곳에 핀을 꽂아 보세요.', toolOptions: { places: [at(P.office, 1, 1), at(P.market, 3, 0), at(P.school, 0, 2), at(P.hospital, 2, 2)] }, target: { place: '주민센터' }, difficulty: 0.2,
                hints: ['서류를 떼어 주는 곳은 마을 사람들의 일을 도와주는 곳이에요.', '물건을 파는 곳이나 아픈 사람을 돌보는 곳은 아니에요.', '마을 사람들의 서류 일을 맡아 주는 주민센터예요.'] },
              { prompt: '"기차는 하루에 몇 번 올까요?"를 알아보러 갈 곳에 핀을 꽂아 보세요.', toolOptions: { places: [at(P.station, 0, 0), at(P.post, 2, 1), at(P.park, 3, 2), at(P.office, 1, 2)] }, target: { place: '기차역' }, difficulty: 0.1 },
              { prompt: '모둠 친구들과 물음판에서 알아볼 물음 하나를 고르고 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"우리 모둠이 고른 물음과 갈 곳을 한 문장으로 말해 볼까요?" 모둠마다 "우리 모둠은 ○○에 가서 ○○을 알아볼 거예요"라고 발표하게 한다. 같은 물음을 고른 모둠이 있으면 볼 것과 여쭐 것을 나누어 맡게 한다. 다음 시간부터 실제로 둘러보며 지도에 표시한다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '물음판', slots: ['시장', '병원'], cards: ['생선은 어디서 가져올까요?', '주사는 누가 놓을까요?', '채소는 언제 들어올까요?', '아픈 사람은 몇 시까지 올 수 있을까요?'] }, prompt: '물음 카드를 알아볼 곳의 가지에 나누어 놓아 보세요.', target: { sort: { '시장': ['생선은 어디서 가져올까요?', '채소는 언제 들어올까요?'], '병원': ['주사는 누가 놓을까요?', '아픈 사람은 몇 시까지 올 수 있을까요?'] } }, difficulty: 0.15 },
          { type: 'tool', tool: 'map', options: { grid: [4, 3], places: [at(P.library, 2, 2), at(P.post, 0, 0), at(P.market, 3, 1)] }, prompt: '"그림책은 어디에 꽂혀 있을까요?"를 알아보러 갈 곳에 핀을 꽂아 보세요.', target: { place: '도서관' }, difficulty: 0.1 },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '우리 모둠 물음',
      items: [
        { type: 'table', prompt: '친구들의 물음을 곳에 따라 나누어 쓰세요.', columns: ['곳', '물음'], cells: [['빵집', ''], ['도서관', ''], ['소방서', '']] },
        { type: 'choice', prompt: '같은 것을 묻는 두 물음이 들어 있는 것은?', options: ['"공원은 언제 생겼을까요?" / "공원에는 나무가 몇 그루일까요?"', '"약국은 몇 시에 닫을까요?" / "약국 문 닫는 시간은 언제일까요?"'], answer: '"약국은 몇 시에 닫을까요?" / "약국 문 닫는 시간은 언제일까요?"' },
        { type: 'blank', prompt: '우리 모둠이 갈 곳: (        )', answer: '' },
        { type: 'short', prompt: '우리 모둠이 알아볼 물음을 쓰세요.' },
      ],
      easy: {
        note: '대답해 줄 분이 일하는 곳을 떠올려요.',
        items: [
          { type: 'choice', prompt: '"책은 몇 권 빌릴까요?"는 어디에서 알아볼까요?', options: ['도서관', '소방서'], answer: '도서관' },
          { type: 'choice', prompt: '"불은 어떻게 끌까요?"는 어디에서 알아볼까요?', options: ['빵집', '소방서'], answer: '소방서' },
          { type: 'blank', prompt: '우리 모둠이 갈 곳: (        )', answer: '' },
          { type: 'draw', prompt: '우리 모둠이 갈 곳을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '물음판 가지가 두 개이고 맞는 가지에 초록 테두리가 생겨요. 지도 핀을 꽂으면 자리 이름이 보여요.',
      base: '세 곳 가지에 여섯 물음을 나누고, 묻는 낱말로도 나누어요.',
      challenge: '묻는 낱말 카드가 다섯 장으로 늘고, 넓은 지도에서 곳을 찾아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 곳 이름이 물음에 없으면 묶지 못한다 → 그 일을 하는 사람을 먼저 떠올리게 한다. ② 낱말만 같으면 같은 물음이라고 여긴다 → 대답이 같은지로 견주게 한다. ③ 모둠 물음을 정하며 다툰다 → 다른 물음은 다음 둘러보기 때 이어서 알아본다고 미리 약속한다. 실제 방문 곳은 학교 주변 사정에 맞게 바꾸고 미리 연락해 둔다.',
  }));

  // ───────────────────────── 7~11차시: 둘러보며 지도에 표시하고 일하는 모습 기록하기(관찰과 자료 읽기) ─────────────────────────

  lessons.push(L(7, {
    title: '둘러보기 기록을 읽고 본 곳을 지도에 그려 넣기',
    objective: '둘러보기 기록의 \'오른쪽으로 두 칸\'처럼 칸 수가 든 말을 읽고 본 곳의 자리를 지도에 표시할 수 있다.',
    illustration: ART('children kneeling around a big paper floor map of their village, sticking small paper cutouts of a bakery and a flower shop onto it', '본 곳을 지도에 붙여요', [
      { motif: 'house', x: 110, y: 214, color: 'mint' }, { motif: 'flower', x: 360, y: 228 }, { motif: 'tree', x: 420, y: 214 }]),
    safety: ['마을을 둘러볼 때는 짝과 손을 잡고 인도로만 걸어요.', '가게 앞 계단이나 차가 드나드는 곳에 오래 서 있지 않아요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"지도는 어른만 그릴 수 있을까요?" 반응을 듣고 "지도는 본 곳을 기호로 옮겨 그린 그림이라 우리도 그릴 수 있어요"라고 말한다. 둘러보기 때 적은 기록장을 꺼내게 하고 "정문을 나와 오른쪽으로 두 칸"처럼 칸 수로 적은 말을 함께 읽는다. 시연 단추로 핀이 기준 곳에서 두 칸 옮겨 가는 모습을 보여 준다.',
        student: '둘러보며 본 곳 하나를 기록장에서 찾아 읽어 봐요.',
        demo: { tool: 'map', options: { grid: [4, 3], places: [at(P.school, 0, 1)] }, sequence: [{ at: [2, 1] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 칸 수를 세어 본 곳 표시하기', minutes: 14, tool: 'map',
            teacher: '"기준이 되는 곳에 손가락을 대고, 한 칸, 두 칸 소리 내어 세어요." 기준 곳의 칸까지 세어 한 칸 모자라게 꽂는 학생이 많으니 "기준 곳은 세지 않고 다음 칸부터 하나"라고 짚는다. 두 번 옮기는 문항은 한 번 옮길 때마다 손가락을 멈추게 한다.',
            task: '둘러보기 기록을 읽고 칸 수를 세어 본 곳의 자리에 핀을 꽂아요.',
            levels: MAP_LV,
            items: [
              { prompt: '기록: "학교에서 오른쪽으로 두 칸 가면 빵집이 있어요." 빵집 자리에 핀을 꽂아 보세요.', toolOptions: { places: [at(P.school, 0, 1), at(P.park, 3, 0), at(P.market, 1, 2)] }, target: { at: [2, 1] }, difficulty: 0.15,
                hints: ['기준이 되는 곳에서 손가락으로 한 칸씩 세어 가요.', '기준 곳은 세지 않아요. 바로 옆 칸이 한 칸이에요.', '학교에서 오른쪽으로 한 칸, 두 칸 간 빈칸이에요.'] },
              { prompt: '기록: "공원에서 아래로 두 칸 가면 꽃집이 있어요." 꽃집 자리에 핀을 꽂아 보세요.', toolOptions: { places: [at(P.park, 3, 0), at(P.school, 0, 0), at(P.library, 1, 2)] }, target: { at: [3, 2] }, difficulty: 0.15,
                hints: ['기준이 되는 곳에서 손가락으로 한 칸씩 세어 가요.', '아래는 화면 아래쪽이에요. 기준 곳에서 몇 칸 내려왔는지 다시 세어 봐요.', '공원에서 아래로 한 칸, 두 칸 내려간 칸이에요.'] },
              { prompt: '기록: "도서관에서 왼쪽으로 세 칸 가면 문구점이 있어요." 문구점 자리에 핀을 꽂아 보세요.', toolOptions: { places: [at(P.library, 3, 2), at(P.post, 1, 0), at(P.park, 2, 1)] }, target: { at: [0, 2] }, difficulty: 0.2,
                hints: ['기준이 되는 곳에서 손가락으로 한 칸씩 세어 가요.', '왼쪽으로 센 칸 수가 기록과 같은지 다시 봐요.', '도서관에서 왼쪽으로 세 칸이면 맨 왼쪽 칸이에요.'] },
              { prompt: '기록: "시장에서 위로 한 칸, 오른쪽으로 한 칸 가면 떡집이 있어요." 떡집 자리에 핀을 꽂아 보세요.', toolOptions: { places: [at(P.market, 1, 2), at(P.school, 3, 2), at(P.park, 0, 0)] }, target: { at: [2, 1] }, difficulty: 0.25,
                hints: ['두 번 옮겨요. 한 번 옮길 때마다 손가락을 멈추어요.', '위로 먼저 한 칸 간 뒤, 그 자리에서 오른쪽으로 한 칸 갔는지 봐요.', '시장 바로 위 칸에서 오른쪽으로 한 칸 옮긴 자리예요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 우리 반 큰 바닥 지도 만들기', minutes: 13, tool: 'map', pair: true,
            teacher: '모둠마다 큰 종이에 칸을 그린 바닥 지도와 곳 그림 카드를 나누어 준다. "기록장을 읽는 사람, 칸을 세는 사람, 붙이는 사람을 정해요." 다 붙인 뒤 화면 문항으로 우리가 붙인 곳을 다시 찾아본다. "지도는 어른만 그린다"던 학생에게 모둠 지도를 가리키며 "누가 그렸지요?"라고 묻는다.',
            task: '모둠 친구와 기록장을 읽고 큰 바닥 지도에 본 곳 그림 카드를 붙인 뒤, 화면 지도에서도 찾아요.',
            levels: MAP_LV,
            items: [
              { prompt: '모둠 친구와 기록장을 읽으며 바닥 지도에 본 곳 카드를 모두 붙이고 "다 했어요"를 누르세요.', free: true },
              { prompt: '우리가 붙인 지도에서 편지를 받아 나르는 집배원이 일하는 곳에 핀을 꽂아 보세요.', toolOptions: { places: [at(P.post, 2, 2), at(P.station, 0, 0), at(P.office, 3, 1), dot('빵집', 1, 1)] }, target: { place: '우체국' }, difficulty: 0.1 },
              { prompt: '아침마다 따끈한 빵 냄새가 났던 곳에 핀을 꽂아 보세요.', toolOptions: { places: [dot('빵집', 3, 0), dot('꽃집', 0, 2), at(P.school, 1, 0), at(P.park, 2, 2)] }, target: { place: '빵집' }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { places: [dot('빵집', 3, 0), dot('꽃집', 0, 2), at(P.school, 1, 0), at(P.park, 2, 2), dot('떡집', 3, 2)] } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"우리 모둠 지도에 빠진 곳은 없나요?" 모둠끼리 지도를 견주어 보게 하고 빠진 곳을 한 군데 더 붙이게 한다. 출구 질문 뒤 "다음 시간에는 그곳에서 일하는 사람들을 살펴봐요"라고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'map', options: { grid: [4, 3], places: [at(P.hospital, 0, 0), at(P.park, 3, 1), at(P.market, 1, 2)] }, prompt: '기록: "병원에서 오른쪽으로 두 칸 가면 약국이 있어요." 약국 자리에 핀을 꽂아 보세요.', target: { at: [2, 0] }, difficulty: 0.15 },
          { type: 'choice', prompt: '마을 지도는 누가 그릴 수 있을까요?', options: ['어른만 그려요', '본 곳을 옮겨 그리면 누구나 그려요'], answer: 1, difficulty: 0.05, explain: '본 곳을 기호로 옮기면 우리도 지도를 그릴 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '본 곳을 지도에',
      items: [
        { type: 'figure', wide: true, prompt: '"학교에서 오른쪽으로 두 칸 가면 빵집"이에요. 빵집 자리에 빵 그림을 그리세요.', tool: 'map', figures: [{ options: { grid: [4, 3], places: [at(P.school, 0, 1), at(P.park, 3, 0)] }, caption: '' }], answer: '학교 오른쪽 두 번째 칸' },
        { type: 'choice', prompt: '"오른쪽으로 두 칸"을 셀 때 처음 한 칸은 어디인가요?', options: ['기준이 되는 곳', '기준 곳 바로 옆 칸'], answer: '기준 곳 바로 옆 칸' },
        { type: 'table', prompt: '둘러보며 본 곳과 그 자리를 쓰세요.', columns: ['본 곳', '어디에서 몇 칸?'], rows: 3 },
        { type: 'draw', prompt: '우리 모둠 지도에서 가장 마음에 드는 곳을 그려 보세요.' },
      ],
      easy: {
        note: '기준 곳에 손가락을 대고 하나, 둘 세어요.',
        items: [
          { type: 'figure', prompt: '학교 바로 오른쪽 칸에 ○ 하세요.', tool: 'map', figures: [{ options: { grid: [3, 2], places: [at(P.school, 0, 1)] }, caption: '' }], answer: '학교 오른쪽 칸' },
          { type: 'choice', prompt: '지도는 누가 그릴 수 있나요?', options: ['누구나', '어른만'], answer: '누구나' },
          { type: 'short', prompt: '둘러보며 본 곳을 하나 쓰세요.' },
          { type: 'draw', prompt: '본 곳을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '지도 칸이 적고 핀을 꽂으면 자리 이름이 보여요. 모둠에서는 칸을 세는 일을 맡아요.',
      base: '칸 수를 세어 한 번 또는 두 번 옮겨요.',
      challenge: '넓은 지도에서 세 칸 옮기기, 두 방향 옮기기를 해요. 떡집처럼 헷갈리는 곳이 섞여요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 기준 곳을 첫 칸으로 세어 한 칸 모자라게 꽂는다 → "기준 곳은 0, 옆 칸이 1"로 말하며 손가락을 옮기게 한다. ② 두 방향을 한 번에 대각선으로 옮긴다 → 한 방향씩 멈추며 옮긴다. ③ 지도는 어른만 그린다고 여긴다 → 모둠 지도를 함께 만든 경험으로 되짚는다. 바닥 지도는 다음 차시들에서 계속 쓰므로 교실 뒤에 붙여 둔다.',
  }));

  lessons.push(L(8, {
    title: '마을에서 일하는 사람과 하는 일 짝 짓기',
    objective: '마을에서 일하는 사람이 하는 일을 짝 짓고, 그 일을 만드는 일·나르는 일·지키는 일로 나눌 수 있다.',
    illustration: ART('paper cutout villagers at work, a baker kneading dough, a mail carrier with a bag of letters, and a police officer helping a child cross the road', '마을에서 일하는 사람들', [
      { motif: 'house', x: 100, y: 214, color: 'peach' }, { motif: 'house', x: 380, y: 214, color: 'sky' }, { motif: 'tree', x: 240, y: 216 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"어제 집에 온 택배는 누가 가져다주셨을까요?" 학생 대답을 듣고 "우리 마을에는 우리가 잘 보지 못하는 곳에서도 일하는 분이 많아요"라고 말한다. 집배원, 제빵사, 경찰관 흉내를 한 동작씩 보여 주고 누구인지 맞혀 보게 한다.',
        student: '마을에서 일하는 사람 한 분을 떠올려 그분의 일하는 동작을 흉내 내 봐요.',
        demo: { tool: 'story', options: { mode: 'match', slots: [{ id: 'd1', label: '집배원' }], cards: ['편지와 소포를 집집마다 날라요'], shuffle: false }, sequence: [{ match: { d1: '편지와 소포를 집집마다 날라요' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 일하는 사람과 하는 일 짝 짓기', minutes: 13, tool: 'story',
            teacher: '"이분은 무엇을 손에 들고 일하시나요?" 도구를 먼저 떠올리면 하는 일이 보인다는 것을 짚는다. 짝 짓기를 마친 뒤 "이분들이 하루 일을 쉬면 마을에 어떤 일이 생길까요?"라고 물어 일의 쓸모를 생각하게 한다.',
            task: '일하는 사람 옆에 그분이 하는 일 카드를 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '일하는 사람 옆에 그분이 하는 일 카드를 놓아 보세요.', toolOptions: { mode: 'match', slots: [{ id: 'm1', label: '제빵사' }, { id: 'm2', label: '집배원' }, { id: 'm3', label: '경찰관' }], cards: ['반죽을 구워 빵을 만들어요', '편지와 소포를 날라요', '마을을 돌며 안전을 지켜요'] },
                target: { match: { m1: '반죽을 구워 빵을 만들어요', m2: '편지와 소포를 날라요', m3: '마을을 돌며 안전을 지켜요' } }, difficulty: 0.05 },
              { prompt: '일하는 사람 옆에 그분이 하는 일 카드를 놓아 보세요.', toolOptions: { mode: 'match', slots: [{ id: 'm1', label: '사서' }, { id: 'm2', label: '약사' }, { id: 'm3', label: '환경미화원' }], cards: ['책을 빌려주고 정리해요', '약을 지어 주고 먹는 법을 알려 줘요', '길을 쓸고 쓰레기를 치워요'] },
                target: { match: { m1: '책을 빌려주고 정리해요', m2: '약을 지어 주고 먹는 법을 알려 줘요', m3: '길을 쓸고 쓰레기를 치워요' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['책을 빌려주고 정리해요', '약을 지어 주고 먹는 법을 알려 줘요', '길을 쓸고 쓰레기를 치워요', '책을 만들어 팔아요'] } } } },
              { prompt: '일하는 사람 옆에 그분이 일할 때 쓰는 물건 카드를 놓아 보세요.', toolOptions: { mode: 'match', slots: [{ id: 'm1', label: '소방관' }, { id: 'm2', label: '농부' }, { id: 'm3', label: '버스 기사' }], cards: ['소방 호스', '괭이와 모종삽', '운전대'] },
                target: { match: { m1: '소방 호스', m2: '괭이와 모종삽', m3: '운전대' } }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['소방 호스', '괭이와 모종삽', '운전대', '청진기'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 만드는 일·나르는 일·지키는 일', minutes: 14, tool: 'mindmap',
            teacher: '"빵을 굽는 일은 무엇을 새로 생기게 하나요?" 만드는 일은 없던 것이 생기는 일, 나르는 일은 있는 것을 옮기는 일, 지키는 일은 다치지 않게 돌보는 일이라고 칠판에 적는다. 택배 기사를 만드는 일에 놓은 학생에게 "택배 기사님이 상자 안 물건을 만드셨나요?"라고 묻는다. 마지막은 둘러보기 때 본 사람을 그림으로 남긴다.',
            task: '일하는 사람 카드를 만드는 일, 나르는 일, 지키는 일로 나누고, 둘러보며 본 사람을 그려요.',
            levels: CARD_LV,
            items: [
              { prompt: '일하는 사람 카드를 하는 일에 따라 세 가지로 나누어 보세요.', toolOptions: { topic: '마을에서 하는 일', slots: ['만드는 일', '나르는 일', '지키는 일'], cards: ['빵 굽는 제빵사', '택배 기사', '경찰관', '두부 만드는 사장님', '우편 집배원', '소방관'] },
                target: { sort: { '만드는 일': ['빵 굽는 제빵사', '두부 만드는 사장님'], '나르는 일': ['택배 기사', '우편 집배원'], '지키는 일': ['경찰관', '소방관'] } }, difficulty: 0.15,
                levels: { easy: { toolOptions: { slots: ['만드는 일', '지키는 일'], cards: ['빵 굽는 제빵사', '경찰관', '두부 만드는 사장님', '소방관'] }, target: { sort: { '만드는 일': ['빵 굽는 제빵사', '두부 만드는 사장님'], '지키는 일': ['경찰관', '소방관'] } }, prompt: '일하는 사람 카드를 만드는 일과 지키는 일로 나누어 보세요.' } },
                hints: ['그분이 일하면 무엇이 새로 생기는지, 옮겨지는지, 안전해지는지 생각해요.', '상자나 편지를 옮기는 사람이 어느 칸에 있는지 다시 봐요.', '제빵사·두부 사장님은 만드는 일, 택배 기사·집배원은 나르는 일, 경찰관·소방관은 지키는 일이에요.'] },
              { prompt: '하는 일 카드를 세 가지로 나누어 보세요.', toolOptions: { topic: '마을에서 하는 일', slots: ['만드는 일', '나르는 일', '지키는 일'], cards: ['떡을 쪄요', '학교 앞에서 길 건너기를 도와요', '버스로 사람들을 태워 날라요', '옷을 지어요'] },
                target: { sort: { '만드는 일': ['떡을 쪄요', '옷을 지어요'], '나르는 일': ['버스로 사람들을 태워 날라요'], '지키는 일': ['학교 앞에서 길 건너기를 도와요'] } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['떡을 쪄요', '학교 앞에서 길 건너기를 도와요', '버스로 사람들을 태워 날라요', '옷을 지어요', '공원 의자에 앉아 쉬어요'] } } },
                hints: ['그 일을 하면 무엇이 새로 생기는지, 옮겨지는지, 안전해지는지 생각해요.', '사람을 태워 옮기는 일과 길 건너기를 돕는 일이 바른 칸에 있는지 봐요.', '떡·옷은 만드는 일, 버스는 나르는 일, 길 건너기 돕기는 지키는 일이에요. 쉬는 것은 일이 아니라 남겨요.'] },
              { prompt: '둘러보며 본 일하는 사람 한 분을 활동지에 그리고, 하는 일을 한 줄로 쓴 뒤 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"내가 그린 분은 만드는 일, 나르는 일, 지키는 일 가운데 무엇을 하시나요?" 서너 명이 그림을 들고 짧게 말한다. "우리가 편하게 사는 것은 이분들 덕분이에요"라고 덧붙이고 고마운 마음을 한 문장씩 말하게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { mode: 'match', slots: [{ id: 'e1', label: '미용사' }, { id: 'e2', label: '간호사' }], cards: ['아픈 사람을 돌보고 주사를 놓아요', '머리카락을 자르고 다듬어요'] }, prompt: '일하는 사람 옆에 그분이 하는 일 카드를 놓아 보세요.', target: { match: { e1: '머리카락을 자르고 다듬어요', e2: '아픈 사람을 돌보고 주사를 놓아요' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '택배 기사님은 어떤 일을 하시나요?', options: ['물건을 만드는 일', '물건을 나르는 일', '마을을 지키는 일'], answer: 1, difficulty: 0.1, explain: '택배 기사님은 물건을 만들지 않고 집까지 날라 주셔요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '마을에서 일하는 사람',
      items: [
        { type: 'figure', wide: true, prompt: '일하는 사람과 하는 일을 선으로 이으세요.', tool: 'story', figures: [{ options: { mode: 'match', slots: [{ id: 'w1', label: '제빵사' }, { id: 'w2', label: '경찰관' }], cards: ['안전을 지켜요', '빵을 만들어요'] }, caption: '' }], answer: '제빵사-빵을 만들어요, 경찰관-안전을 지켜요' },
        { type: 'table', prompt: '알맞은 칸에 일하는 사람을 한 명씩 쓰세요.', columns: ['만드는 일', '나르는 일', '지키는 일'], rows: 1 },
        { type: 'choice', prompt: '집배원이 일할 때 쓰는 물건은?', options: ['우편 가방', '소방 호스', '괭이'], answer: '우편 가방' },
        { type: 'draw', prompt: '둘러보며 본 일하는 사람을 그리고, 하는 일을 한 줄로 쓰세요.' },
      ],
      easy: {
        note: '그분이 손에 든 물건을 먼저 떠올려요.',
        items: [
          { type: 'choice', prompt: '빵을 만드는 사람은?', options: ['제빵사', '경찰관'], answer: '제빵사' },
          { type: 'choice', prompt: '편지를 나르는 사람은?', options: ['집배원', '농부'], answer: '집배원' },
          { type: 'short', prompt: '고마운 마을 사람 한 분을 쓰세요.' },
          { type: 'draw', prompt: '그분이 일하는 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 하는 일 나누기는 만드는 일과 지키는 일 두 칸이에요.',
      base: '세 칸으로 나누어요. 그림에 하는 일을 한 줄로 써요.',
      challenge: '하는 일이 비슷한 함정 카드(책을 만들어 팔아요, 청진기)가 섞여요. 그림에 쓰는 물건도 그려 넣어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 택배 기사가 물건을 만든다고 여긴다 → 상자 안 물건이 어디서 왔는지 묻는다. ② 사서와 서점 주인, 약사와 의사를 헷갈린다 → 빌려주는지·파는지, 약을 짓는지·진료하는지로 견준다. ③ 쉬는 사람도 일하는 사람으로 놓는다 → 그 사람 덕분에 생기는 것이 있는지 묻는다. 직업 이름은 성별을 나타내지 않게 말한다.',
  }));

  lessons.push(L(9, {
    title: '일하는 모습을 그림 기록으로 남기기',
    objective: '일하는 사람의 옷차림·쓰는 물건·하는 동작을 살펴 그림 기록에 담을 것을 고르고, 기록하는 차례에 따라 그림을 그릴 수 있다.',
    illustration: ART('a child sitting on a little paper stool sketching a mail carrier in a notebook, the drawing shows a cap, a bag and letters', '살펴보고 그림으로 남겨요', [
      { motif: 'house', x: 110, y: 214, color: 'buttercup' }, { motif: 'leaf', x: 360, y: 228 }, { motif: 'tree', x: 420, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '집배원 사진 대신 선생님이 그린 두 그림(사람만 그린 것, 모자·가방·편지까지 그린 것)을 보여 준다. "어느 그림을 보아야 이분이 무슨 일을 하는지 알 수 있을까요?" 반응을 듣고 "그림 기록에는 옷차림, 쓰는 물건, 하는 동작을 담아요"라고 손가락 세 개를 펴며 말한다.',
        student: '두 그림 가운데 하는 일이 더 잘 보이는 그림을 골라 까닭을 말해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'pick', basket: '그림 기록에 담을 것', cards: ['집배원의 우편 가방', '내가 좋아하는 만화 주인공'], shuffle: false }, sequence: [{ pick: ['집배원의 우편 가방'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 그림 기록에 담을 것 고르기', minutes: 12, tool: 'mindmap',
            teacher: '"이것을 그리면 그분이 하는 일을 알 수 있나요?"를 기준으로 고르게 한다. 하늘의 구름이나 지나가는 강아지를 고른 학생에게 "구름을 보고 이분의 일을 알 수 있을까요?"라고 묻는다. 예쁘게 그리는 것보다 알아볼 수 있게 그리는 것이 중요하다고 짚는다.',
            task: '그분이 하는 일을 알 수 있게 해 주는 것만 골라 바구니에 넣어요.',
            levels: CARD_LV,
            items: [
              { prompt: '제빵사의 그림 기록에 담을 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '그림 기록에 담을 것', cards: ['하얀 요리 모자', '반죽을 치대는 손', '빵 굽는 오븐', '하늘의 구름'] },
                target: { pick: ['하얀 요리 모자', '반죽을 치대는 손', '빵 굽는 오븐'] }, difficulty: 0.1,
                hints: ['그것을 그리면 그분이 하는 일을 알 수 있는지 생각해요.', '고른 것 가운데 일과 상관없는 것이 있는지 봐요.', '구름만 빼고 모두 빵 굽는 일을 보여 줘요.'] },
              { prompt: '경찰관의 그림 기록에 담을 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '그림 기록에 담을 것', cards: ['모자에 붙은 경찰 표시', '지나가는 강아지', '길 건너기를 돕는 손짓', '순찰차'] },
                target: { pick: ['모자에 붙은 경찰 표시', '길 건너기를 돕는 손짓', '순찰차'] }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['모자에 붙은 경찰 표시', '지나가는 강아지', '길 건너기를 돕는 손짓', '순찰차', '길가의 꽃밭'] } } },
                hints: ['그것을 그리면 그분이 하는 일을 알 수 있는지 생각해요.', '마침 그 자리에 있었을 뿐인 것을 고르지 않았는지 봐요.', '경찰 표시, 돕는 손짓, 순찰차가 경찰관의 일을 보여 줘요.'] },
              { prompt: '시장 채소 가게 사장님의 그림 기록에 담을 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '그림 기록에 담을 것', cards: ['채소를 담은 바구니', '값을 적은 종이 판', '손님에게 봉지를 건네는 손', '옆 가게 간판'] },
                target: { pick: ['채소를 담은 바구니', '값을 적은 종이 판', '손님에게 봉지를 건네는 손'] }, difficulty: 0.2,
                hints: ['그것을 그리면 그분이 하는 일을 알 수 있는지 생각해요.', '그분이 아닌 다른 가게를 보여 주는 것이 섞였는지 봐요.', '바구니·값 판·봉지를 건네는 손이 채소를 파는 일을 보여 줘요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 차례대로 그림 기록 그리기', minutes: 15, tool: 'story',
            teacher: '"그림을 다 그린 뒤에 무엇을 살필지 정하면 어떻게 될까요?" 기록 차례를 정한 뒤 활동지에 실제로 그리게 한다. 연필로 먼저 크게 사람 모양을 잡고, 쓰는 물건을 그린 뒤 색칠하게 한다. 다 그린 학생은 짝과 바꾸어 "무슨 일을 하는 분인지 알겠어?"라고 묻게 한다.',
            task: '그림 기록을 남기는 차례를 정하고, 활동지에 일하는 사람을 그려 짝에게 보여 줘요.',
            levels: CARD_LV,
            items: [
              { prompt: '그림 기록을 남기는 차례대로 카드를 놓아 보세요.', toolOptions: { slots: 4, cards: [{ id: '살핌', text: '옷·물건·동작을 살펴요', motif: 'leaf' }, { id: '그림', text: '크게 모양을 그려요', motif: 'star' }, { id: '이름', text: '곳과 하는 일을 써요', motif: 'house' }, { id: '보이기', text: '짝에게 보여 줘요', motif: 'flower' }] },
                target: { order: ['살핌', '그림', '이름', '보이기'] }, difficulty: 0.15,
                levels: { easy: { prompt: '그림 기록을 남기는 차례대로 카드 세 장을 놓아 보세요.', toolOptions: { slots: ['처음', '가운데', '끝'], cards: [{ id: '살핌', text: '옷·물건·동작을 살펴요', motif: 'leaf' }, { id: '그림', text: '크게 모양을 그려요', motif: 'star' }, { id: '보이기', text: '짝에게 보여 줘요', motif: 'flower' }] }, target: { order: ['살핌', '그림', '보이기'] } } } },
              { prompt: '활동지에 둘러보며 본 일하는 사람을 옷·물건·동작이 보이게 그리고 "다 했어요"를 누르세요.', free: true },
              { prompt: '짝과 그림을 바꾸어 보고 무슨 일을 하는 분인지 맞혀 본 뒤 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"짝이 내 그림을 보고 하시는 일을 맞혔나요?" 맞히지 못했다면 무엇을 더 그리면 좋을지 짝이 한 가지 알려 주게 한다. 그림 몇 장을 바닥 지도의 그 곳 옆에 붙여 두고, 다음 시간에는 마을의 안내판과 자료를 읽는다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', basket: '그림 기록에 담을 것', cards: ['우편 가방', '편지 묶음', '하늘을 나는 새'] }, prompt: '집배원의 그림 기록에 담을 것만 골라 보세요.', target: { pick: ['우편 가방', '편지 묶음'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '그림 기록을 남길 때 가장 먼저 할 일은?', options: ['색칠부터 해요', '옷·물건·동작을 살펴요', '짝에게 보여 줘요'], answer: 1, difficulty: 0.1, explain: '먼저 잘 살펴야 무엇을 그릴지 알 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '일하는 모습 그림 기록',
      items: [
        { type: 'blank', prompt: '내가 본 곳: (        )   일하는 분: (        )', answer: '' },
        { type: 'check', prompt: '내 그림에 담은 것에 ✓ 하세요.', options: ['옷차림', '쓰는 물건', '하는 동작'] },
        { type: 'draw', prompt: '일하는 사람을 옷·물건·동작이 보이게 그리세요.' },
        { type: 'short', prompt: '그분이 하는 일을 한 줄로 쓰세요.' },
      ],
      easy: {
        note: '쓰는 물건 하나만은 꼭 그려요.',
        items: [
          { type: 'blank', prompt: '일하는 분: (        )', answer: '' },
          { type: 'choice', prompt: '제빵사 그림에 꼭 그릴 것은?', options: ['오븐', '구름'], answer: '오븐' },
          { type: 'draw', prompt: '일하는 사람과 쓰는 물건을 그리세요.' },
          { type: 'short', prompt: '하는 일을 한 줄로 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 카드에 초록 테두리가 생겨요. 기록 차례는 세 장이고, 그림에는 쓰는 물건 하나만 꼭 그려요.',
      base: '담을 것을 고르고 네 장 차례를 정해요. 옷·물건·동작을 모두 그려요.',
      challenge: '그 자리에 마침 있던 것(꽃밭)처럼 헷갈리는 카드가 섞여요. 그림 옆에 그분이 한 말도 말풍선으로 적어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 예쁜 배경을 그리느라 사람과 물건이 작아진다 → 종이 가운데에 사람을 크게 먼저 그리게 한다. ② 그 자리에 있던 것을 모두 그려야 한다고 여긴다 → "이분의 일을 알려 주는 것"만 고르게 한다. ③ 그림을 못 그린다고 시작하지 않는다 → 동그라미와 네모로 물건을 나타내도 된다고 말한다. 실제 사람의 얼굴을 닮게 그리거나 이름을 적지 않게 한다.',
  }));

  lessons.push(L(10, {
    title: '마을 안내판과 그림그래프 읽기',
    objective: '마을의 안내판과 그림그래프를 읽고 여는 시간, 가장 많은 곳 같은 사실을 찾아 말할 수 있다.',
    illustration: ART('a paper notice board in front of a village library showing opening hours with clock shapes, next to a picture chart made of small paper circles', '안내판을 읽어요', [
      { motif: 'house', x: 110, y: 214, color: 'mint' }, { motif: 'tree', x: 380, y: 214 }, { motif: 'sun', x: 300, y: 70, s: 0.5 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"도서관에 갔는데 문이 닫혀 있었어요. 미리 알 수 있는 방법이 없었을까요?" 문 앞 안내판 그림을 보여 주고 "안내판은 여쭈어보지 않아도 알려 주는 자료예요"라고 말한다. 둘러보기 때 찍어 온 안내판이 있으면 함께 읽는다. 시연 단추로 안내판 이름과 뜻이 짝 지어지는 모습을 보여 준다.',
        student: '마을에서 본 안내판이나 표지판을 하나 떠올려 말해 봐요.',
        demo: { tool: 'story', options: { mode: 'match', slots: [{ id: 'd1', label: '비상구 표지' }], cards: ['불이 나면 이 문으로 나가요'], shuffle: false }, sequence: [{ match: { d1: '불이 나면 이 문으로 나가요' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 안내판과 표지판의 뜻 알기', minutes: 13, tool: 'story',
            teacher: '"이 표지판을 보면 무엇을 해야 하나요, 하지 말아야 하나요?" 표지판 뜻을 소리 내어 읽고 몸으로 따라 하게 한다(조용히, 걸어서 등). 안내판의 요일·시간 글을 읽을 때는 손가락으로 줄을 따라가게 한다.',
            task: '안내판·표지판 이름 옆에 알맞은 뜻 카드를 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '표지판 이름 옆에 알맞은 뜻 카드를 놓아 보세요.', toolOptions: { mode: 'match', slots: [{ id: 'm1', label: '횡단보도 표지' }, { id: 'm2', label: '자전거 길 표지' }, { id: 'm3', label: '쓰레기 버리지 마세요' }], cards: ['여기에서 길을 건너요', '자전거가 다니는 길이에요', '쓰레기는 가지고 가요'] },
                target: { match: { m1: '여기에서 길을 건너요', m2: '자전거가 다니는 길이에요', m3: '쓰레기는 가지고 가요' } }, difficulty: 0.1 },
              { prompt: '도서관 안내판에 적힌 말과 뜻을 짝 지어 보세요.', toolOptions: { mode: 'match', slots: [{ id: 'm1', label: '"월요일 휴관"' }, { id: 'm2', label: '"오전 9시 ~ 오후 6시"' }, { id: 'm3', label: '"한 사람 다섯 권"' }], cards: ['월요일에는 문을 닫아요', '아침 9시에 열고 저녁 6시에 닫아요', '한 사람이 다섯 권까지 빌려요'] },
                target: { match: { m1: '월요일에는 문을 닫아요', m2: '아침 9시에 열고 저녁 6시에 닫아요', m3: '한 사람이 다섯 권까지 빌려요' } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['월요일에는 문을 닫아요', '아침 9시에 열고 저녁 6시에 닫아요', '한 사람이 다섯 권까지 빌려요', '월요일에만 문을 열어요'] } } },
                hints: ['안내판 글의 낱말 뜻을 하나씩 풀어 읽어요. \'휴관\'은 쉰다는 뜻이에요.', '쉬는 날과 여는 날을 바꾸어 놓지 않았는지 봐요.', '\'휴관\'은 문을 닫는다는 뜻이라 월요일에는 문을 닫아요.'] },
              { prompt: '공원 안내판에 "잔디밭에 들어가지 마세요. 개는 줄을 매세요. 꽃을 꺾지 마세요."라고 적혀 있어요. 안내판을 지키는 행동만 골라 보세요.', toolOptions: { mode: 'pick', basket: '안내판을 지키는 행동', cards: ['잔디밭 대신 길로 걸어요', '개에게 줄을 매요', '꽃을 한 송이만 꺾어요'] },
                target: { pick: ['잔디밭 대신 길로 걸어요', '개에게 줄을 매요'] }, difficulty: 0.15,
                hints: ['안내판의 약속과 행동을 하나씩 견주어 봐요.', '"꺾지 마세요"라고 했는데 조금은 해도 되는지 다시 읽어 봐요.', '한 송이라도 꺾으면 안내판을 지키지 않은 거예요. 나머지 둘을 골라요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 우리 반 둘러보기 그림그래프 읽기', minutes: 14, tool: 'chart',
            teacher: '"동그라미 하나가 한 명이에요. 손가락으로 하나씩 짚으며 세어요." 가장 긴 줄이 가장 많은 것이라는 것을 짚되, 줄 길이만 보지 말고 세어 확인하게 한다. "가장 많은 곳"과 "가장 적은 곳"을 헷갈린 학생에게 질문을 한 번 더 소리 내어 읽게 한다.',
            task: '그림그래프에서 그림을 세어 보고 물음에 알맞은 답을 골라요.',
            levels: { easy: { showValues: true }, base: {}, challenge: {} },
            items: [
              { prompt: '우리 반이 둘러보기 때 가장 많이 만난 일하는 사람은 어디에 있었나요?', toolOptions: { type: 'picture', mode: 'read', title: '곳마다 만난 일하는 사람', data: [['시장', 5], ['빵집', 2], ['도서관', 3]], unit: '명', icons: [{ value: 1, name: '1명' }], icon: 'person', question: '가장 많이 만난 곳은?', choices: ['시장', '빵집', '도서관'] }, target: { pick: 0 }, difficulty: 0.1 },
              { prompt: '모둠 친구들이 가장 적게 고른 가 보고 싶은 곳은 어디인가요?', toolOptions: { type: 'picture', mode: 'read', title: '가 보고 싶은 곳', data: [['소방서', 4], ['우체국', 1], ['공원', 3], ['기차역', 2]], unit: '명', icons: [{ value: 1, name: '1명' }], icon: 'star', question: '가장 적게 고른 곳은?', choices: ['소방서', '우체국', '공원', '기차역'] }, target: { pick: 1 }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { data: [['소방서', 4], ['우체국', 2], ['공원', 3], ['기차역', 1]] }, target: { pick: 3 }, prompt: '바뀐 그래프에서 가장 적게 고른 가 보고 싶은 곳은 어디인가요?' } } },
              { prompt: '모둠이 산 빵 그림그래프를 보고 단팥빵과 소보로빵이 몇 개인지 표의 빈칸을 채우세요.', toolOptions: { type: 'picture', mode: 'read', title: '모둠이 산 빵', data: [['단팥빵', 3], ['식빵', 1], ['소보로빵', 4]], unit: '개', icons: [{ value: 1, name: '1개' }], icon: 'circle', tableBlanks: [0, 2] }, target: { table: true }, difficulty: 0.2 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"안내판과 그래프는 여쭈어보지 않아도 무엇을 알려 주나요?" 두세 명이 오늘 읽은 것 가운데 하나를 말한다. 표지판을 보고도 지키지 않는 행동(꽃 한 송이 꺾기)이 왜 안 되는지 한 번 더 묻는다. 다음 시간에는 하루 동안 마을이 어떻게 바뀌는지 살펴본다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'chart', options: { type: 'picture', mode: 'read', title: '공원에서 본 것', data: [['비둘기', 2], ['강아지', 4], ['자전거', 3]], unit: '마리·대', icons: [{ value: 1, name: '1' }], icon: 'circle', question: '가장 많이 본 것은?', choices: ['비둘기', '강아지', '자전거'] }, prompt: '그림그래프를 보고 공원에서 가장 많이 본 것을 골라 보세요.', target: { pick: 1 }, difficulty: 0.1 },
          { type: 'choice', prompt: '약국 문에 "일요일 휴무"라고 적혀 있어요. 무슨 뜻일까요?', options: ['일요일에만 열어요', '일요일에는 쉬어요'], answer: 1, difficulty: 0.15, explain: '\'휴무\'는 일을 쉰다는 뜻이에요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '안내판과 그래프 읽기',
      items: [
        { type: 'figure', wide: true, prompt: '그림을 세어 빈칸에 쓰세요.', tool: 'chart', figures: [{ options: { type: 'picture', mode: 'read', title: '곳마다 만난 일하는 사람', data: [['시장', 5], ['빵집', 2], ['도서관', 3]], unit: '명', icons: [{ value: 1, name: '1명' }], icon: 'person' }, caption: '시장 (  )명, 빵집 (  )명, 도서관 (  )명' }], answer: '5, 2, 3' },
        { type: 'choice', prompt: '"오전 10시 ~ 오후 5시"라고 적힌 가게가 문을 여는 시각은?', options: ['오전 10시', '오후 5시'], answer: '오전 10시' },
        { type: 'choice', prompt: '"잔디밭에 들어가지 마세요"를 지킨 행동은?', options: ['잔디밭에서 공을 차요', '길로 돌아서 걸어요'], answer: '길로 돌아서 걸어요' },
        { type: 'short', prompt: '우리 마을에서 본 안내판의 글과 그 뜻을 쓰세요.' },
      ],
      easy: {
        note: '그림 하나가 한 명이에요. 손가락으로 짚으며 세요.',
        items: [
          { type: 'choice', prompt: '"휴관"은 무슨 뜻일까요?', options: ['문을 닫아요', '문을 열어요'], answer: '문을 닫아요' },
          { type: 'choice', prompt: '그림이 5개인 줄과 2개인 줄 가운데 많은 쪽은?', options: ['5개인 줄', '2개인 줄'], answer: '5개인 줄' },
          { type: 'short', prompt: '마을에서 본 표지판을 하나 쓰세요.' },
          { type: 'draw', prompt: '그 표지판을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '그래프 줄 끝에 수가 보여요. 맞는 카드에 초록 테두리가 생겨요.',
      base: '그림을 직접 세어 답을 골라요.',
      challenge: '\'월요일에만 열어요\' 같은 함정 카드가 섞이고, 그래프 수가 바뀐 문항을 다시 읽어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① \'휴관·휴무\'를 \'여는 날\'로 읽는다 → \'쉴 휴\'라고 낱말 뜻을 먼저 알려 준다. ② 그래프에서 줄 길이만 보고 세지 않는다 → 그림 크기가 다르면 틀릴 수 있다고 말하고 꼭 센다. ③ "조금은 괜찮다"며 안내판을 어긴다 → 모두가 조금씩 하면 어떻게 될지 묻는다. 그래프 자료는 실제 둘러보기 결과로 바꾸어 다시 써도 된다.',
  }));

  lessons.push(L(11, {
    title: '아침·낮·저녁 마을 모습 견주기',
    objective: '하루 동안 마을 사람들이 하는 일을 아침·낮·저녁으로 나누고, 한 가게의 하루를 차례대로 놓을 수 있다.',
    illustration: ART('a paper village shown in three panels, a sunrise with a baker opening the shop, a bright noon with a busy market, and an evening with glowing street lamps', '마을의 하루', [
      { motif: 'moon', x: 70, y: 70, s: 0.6 }, { motif: 'house', x: 120, y: 214 }, { motif: 'house', x: 360, y: 214, color: 'lavender' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"아침에 학교 올 때 본 빵집과 저녁에 집에 갈 때 본 빵집은 똑같았나요?" 두세 명의 대답을 듣는다. "마을은 하루 동안 모습이 바뀌어요. 사람들이 하는 일이 시간에 따라 달라지기 때문이에요." 아침 해, 한낮 해, 저녁 달 그림을 칠판에 붙인다.',
        student: '저녁에 마을에서 본 모습을 하나 떠올려 말해 봐요.',
        demo: { tool: 'timeline', options: { mode: 'sort', slots: [{ id: '아침', label: '아침' }, { id: '저녁', label: '저녁' }], cards: ['가게 문을 열어요', '가로등이 켜져요'], shuffle: false }, sequence: [{ sort: { '아침': ['가게 문을 열어요'], '저녁': ['가로등이 켜져요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 아침·낮·저녁에 하는 일 나누기', minutes: 13, tool: 'timeline',
            teacher: '"이 일은 해가 뜰 때일까요, 해가 높이 있을 때일까요, 해가 질 때일까요?" 카드마다 그 시간 하늘을 떠올리게 한다. 낮과 저녁을 헷갈리면 "그때 하늘은 밝았나요, 어두워지고 있었나요?"라고 묻는다.',
            task: '마을 사람들이 하는 일 카드를 아침, 낮, 저녁으로 나누어 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '마을 사람들이 하는 일을 아침, 낮, 저녁으로 나누어 보세요.', toolOptions: { mode: 'sort', axis: ['아침', '저녁'], slots: [{ id: '아침', label: '아침' }, { id: '낮', label: '낮' }, { id: '저녁', label: '저녁' }], cards: ['학생들이 학교에 가요', '학교에서 점심을 먹어요', '가로등이 켜져요'] },
                target: { sort: { '아침': ['학생들이 학교에 가요'], '낮': ['학교에서 점심을 먹어요'], '저녁': ['가로등이 켜져요'] } }, difficulty: 0.05,
                hints: ['그 일을 할 때 하늘이 어떤지 떠올려 봐요.', '어두워질 때 하는 일이 바른 칸에 있는지 봐요.', '학교 가기는 아침, 점심 먹기는 낮, 가로등 켜기는 저녁이에요.'] },
              { prompt: '시장 사람들이 하는 일을 아침, 낮, 저녁으로 나누어 보세요.', toolOptions: { mode: 'sort', axis: ['아침', '저녁'], slots: [{ id: '아침', label: '아침' }, { id: '낮', label: '낮' }, { id: '저녁', label: '저녁' }], cards: ['새벽에 온 채소를 펼쳐 놓아요', '해가 높이 뜬 한낮에 손님이 북적여요', '해가 지면 가게를 닫고 청소해요', '아침 햇살에 생선을 얼음에 담아요'] },
                target: { sort: { '아침': ['새벽에 온 채소를 펼쳐 놓아요', '아침 햇살에 생선을 얼음에 담아요'], '낮': ['해가 높이 뜬 한낮에 손님이 북적여요'], '저녁': ['해가 지면 가게를 닫고 청소해요'] } }, difficulty: 0.15,
                hints: ['카드에 시간을 알려 주는 낱말이 숨어 있어요. 찾아 밑줄을 그어 봐요.', '\'해가 지면\', \'한낮\' 같은 낱말이 있는 카드가 바른 칸에 있는지 봐요.', '\'새벽·아침 햇살\'은 아침, \'한낮\'은 낮, \'해가 지면\'은 저녁이에요.'] },
              { prompt: '공원의 하루 모습을 아침, 낮, 저녁으로 나누어 보세요.', toolOptions: { mode: 'sort', axis: ['아침', '저녁'], slots: [{ id: '아침', label: '아침' }, { id: '낮', label: '낮' }, { id: '저녁', label: '저녁' }], cards: ['해 뜰 무렵 할머니들이 체조해요', '점심 먹고 아이들이 그네를 타요', '노을이 질 때 강아지와 산책해요', '해가 질 때 공원 불이 켜져요'] },
                target: { sort: { '아침': ['해 뜰 무렵 할머니들이 체조해요'], '낮': ['점심 먹고 아이들이 그네를 타요'], '저녁': ['노을이 질 때 강아지와 산책해요', '해가 질 때 공원 불이 켜져요'] } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['해 뜰 무렵 할머니들이 체조해요', '점심 먹고 아이들이 그네를 타요', '노을이 질 때 강아지와 산책해요', '해가 질 때 공원 불이 켜져요', '공원에는 나무가 많아요'] } } },
                hints: ['카드에 시간을 알려 주는 낱말이 숨어 있어요. 찾아 밑줄을 그어 봐요.', '\'노을\'이 언제 생기는지 떠올려 다시 봐요.', '\'해 뜰 무렵\'은 아침, \'점심 먹고\'는 낮, \'노을·해가 질 때\'는 저녁이에요. 시간이 없는 카드는 남겨요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 떡집의 하루 차례대로 놓기', minutes: 14, tool: 'story',
            teacher: '"떡집 사장님은 우리가 자고 있을 때부터 일을 시작하세요." 떡이 만들어지려면 무엇이 먼저 있어야 하는지 따져 차례를 정하게 한다. 마지막 문항은 짝과 우리 동네 가게 하나의 하루를 몸짓으로 보여 주고 맞혀 보게 한다.',
            task: '가게의 하루를 차례대로 놓고, 짝과 가게의 하루를 몸짓으로 보여 줘요.',
            levels: CARD_LV,
            items: [
              { prompt: '떡집 사장님의 하루를 차례대로 놓아 보세요.', toolOptions: { slots: 4, cards: [{ id: '쌀', text: '새벽에 불린 쌀을 빻아요', motif: 'moon' }, { id: '찌기', text: '떡을 쪄서 썰어요', motif: 'cloud' }, { id: '팔기', text: '낮에 손님에게 떡을 팔아요', motif: 'sun' }, { id: '정리', text: '저녁에 그릇을 씻고 닫아요', motif: 'star' }] },
                target: { order: ['쌀', '찌기', '팔기', '정리'] }, difficulty: 0.1 },
              { prompt: '우체국 집배원의 하루를 차례대로 놓아 보세요.', toolOptions: { slots: 4, cards: [{ id: '나누기', text: '아침에 편지를 동네별로 나눠요', motif: 'sun' }, { id: '싣기', text: '오토바이에 편지를 실어요', motif: 'leaf' }, { id: '배달', text: '집집마다 편지를 넣어요', motif: 'house' }, { id: '돌아옴', text: '우체국에 돌아와 남은 일을 해요', motif: 'moon' }] },
                target: { order: ['나누기', '싣기', '배달', '돌아옴'] }, difficulty: 0.15 },
              { prompt: '짝과 우리 동네 가게 하나를 골라 그 가게의 하루를 몸짓으로 보여 주고, 서로 맞혀 본 뒤 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"우리가 잠든 밤이나 새벽에도 일하는 분이 있었나요?" 떡집 사장님, 집배원처럼 우리가 보지 못한 시간에 일하는 분을 떠올리게 한다. 몸짓 맞히기를 잘한 짝 한 팀만 짧게 보여 주고, 다음 시간부터는 알아낸 것을 친구에게 설명한다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'timeline', options: { mode: 'sort', slots: [{ id: '아침', label: '아침' }, { id: '낮', label: '낮' }, { id: '저녁', label: '저녁' }], cards: ['해가 뜨면 빵집 불이 켜져요', '한낮에 도서관에서 책을 읽어요', '어두워지면 가게 간판에 불이 들어와요'] }, prompt: '마을의 모습을 아침, 낮, 저녁으로 나누어 보세요.', target: { sort: { '아침': ['해가 뜨면 빵집 불이 켜져요'], '낮': ['한낮에 도서관에서 책을 읽어요'], '저녁': ['어두워지면 가게 간판에 불이 들어와요'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '마을이 하루 동안 모습이 바뀌는 까닭은?', options: ['시간에 따라 사람들이 하는 일이 달라서', '마을이 저절로 바뀌어서'], answer: 0, difficulty: 0.1, explain: '사람들이 아침·낮·저녁에 하는 일이 달라 마을 모습도 달라져요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '마을의 하루',
      items: [
        { type: 'table', prompt: '마을에서 본 모습을 시간에 맞게 쓰세요.', columns: ['아침', '낮', '저녁'], rows: 2 },
        { type: 'figure', wide: true, prompt: '떡집의 하루를 차례대로 1, 2, 3을 쓰세요.', tool: 'story', figures: [{ options: { slots: ['처음', '가운데', '끝'], cards: [{ id: '팔기', text: '떡을 팔아요', motif: 'sun' }, { id: '쌀', text: '쌀을 빻아요', motif: 'moon' }, { id: '정리', text: '가게를 닫아요', motif: 'star' }] }, caption: '' }], answer: '쌀을 빻아요 → 떡을 팔아요 → 가게를 닫아요' },
        { type: 'choice', prompt: '가로등이 켜지는 때는?', options: ['아침', '낮', '저녁'], answer: '저녁' },
        { type: 'draw', prompt: '저녁 때 우리 마을 모습을 그려 보세요.' },
      ],
      easy: {
        note: '그때 하늘이 밝은지, 어두운지 떠올려요.',
        items: [
          { type: 'choice', prompt: '학교에 가는 때는?', options: ['아침', '저녁'], answer: '아침' },
          { type: 'choice', prompt: '가로등이 켜지는 때는?', options: ['아침', '저녁'], answer: '저녁' },
          { type: 'short', prompt: '저녁에 마을에서 본 것을 쓰세요.' },
          { type: 'draw', prompt: '아침 마을 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 카드에 시간 낱말이 잘 보이는 카드부터 놓아요.',
      base: '시간 낱말을 찾아 세 칸으로 나누어요.',
      challenge: '시간이 없는 함정 카드가 섞여 있어 남겨 두어야 해요. 몸짓 놀이에서 아침·낮·저녁 세 장면을 보여 줘요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 시간 낱말이 없는 카드에 억지로 시간을 붙인다 → 카드에 쓰인 말만 보고 정하게 한다. ② \'노을\'을 아침으로 여긴다 → 해가 질 때 붉어지는 하늘이라고 알려 준다. ③ 밤에는 아무도 일하지 않는다고 여긴다 → 병원·소방서·편의점처럼 밤에도 일하는 곳을 떠올리게 한다.',
  }));

  // ───────────────────────── 12~16차시: 알아낸 것을 차례대로 설명하고 도움 청할 곳 알리기(탐구 결과 설명) ─────────────────────────

  lessons.push(L(12, {
    title: '알아낸 것을 처음·가운데·끝으로 정리하기',
    objective: '둘러보며 알아낸 것을 \'간 곳 소개 → 알아낸 것 → 느낀 점\' 차례로 정리해 친구에게 말할 수 있다.',
    illustration: ART('a small group of paper children standing in front of the class holding a paper map and three cards labeled first, middle and last', '차례대로 말해요', [
      { motif: 'house', x: 110, y: 214, color: 'peach' }, { motif: 'star', x: 380, y: 86 }, { motif: 'tree', x: 400, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '선생님이 일부러 차례 없이 말해 본다. "재미있었어요. 7시에 열어요. 빵집에 갔어요." "무슨 말인지 잘 알겠나요?" 반응을 듣고 차례를 바꾸어 다시 말한다. "처음에는 어디에 갔는지, 가운데에는 알아낸 것, 끝에는 느낀 점을 말하면 듣는 사람이 잘 알아들어요." 손가락 세 개로 처음·가운데·끝을 짚는다.',
        student: '선생님의 두 말 가운데 알아듣기 쉬운 말을 골라 까닭을 말해 봐요.',
        demo: { tool: 'story', options: { slots: ['처음', '가운데', '끝'], cards: [{ id: '곳', text: '우리는 빵집에 갔어요', motif: 'house' }, { id: '안 것', text: '빵집은 7시에 열어요', motif: 'sun' }, { id: '느낌', text: '부지런하셔서 놀랐어요', motif: 'star' }], shuffle: false }, sequence: [{ order: ['곳', '안 것', '느낌'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 설명 문장을 차례대로 놓기', minutes: 14, tool: 'story',
            teacher: '"이 문장은 간 곳을 알려 주나요, 알아낸 것인가요, 느낀 점인가요?" 문장마다 셋 가운데 무엇인지 먼저 말하게 한 뒤 놓게 한다. 느낀 점을 처음에 놓은 학생에게 "어디에 갔는지 모르는데 재미있었다고 하면 듣는 친구가 알 수 있을까요?"라고 묻는다.',
            task: '설명 문장을 간 곳 소개, 알아낸 것, 느낀 점의 차례로 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '소방서에 다녀온 모둠의 설명을 차례대로 놓아 보세요.', toolOptions: { slots: ['처음', '가운데', '끝'], cards: [{ id: '곳', text: '우리 모둠은 소방서에 갔어요', motif: 'house' }, { id: '안 것', text: '소방관은 밤에도 돌아가며 일해요', motif: 'moon' }, { id: '느낌', text: '든든하고 고마웠어요', motif: 'flower' }] },
                target: { order: ['곳', '안 것', '느낌'] }, difficulty: 0.1,
                hints: ['간 곳을 알려 주는 말, 알아낸 것, 느낀 점을 먼저 찾아요.', '처음 칸에 어디에 갔는지 알려 주는 문장이 있는지 봐요.', '간 곳 → 밤에도 일한다는 것 → 고마운 마음 차례예요.'] },
              { prompt: '도서관에 다녀온 모둠의 설명을 차례대로 놓아 보세요.', toolOptions: { slots: 4, cards: [{ id: '곳', text: '우리는 꽃담 도서관에 갔어요', motif: 'house' }, { id: '안1', text: '책은 다섯 권까지 빌려요', motif: 'leaf' }, { id: '안2', text: '빌린 책은 두 주 뒤에 돌려줘요', motif: 'moon' }, { id: '느낌', text: '다음 주에 또 가고 싶어요', motif: 'star' }] },
                target: { order: ['곳', '안1', '안2', '느낌'] }, difficulty: 0.15,
                conclude: '알아낸 것이 여럿이면 빌리고 돌려주는 것처럼 일이 일어나는 차례대로 이어 말해요.' },
              { prompt: '시장에 다녀온 모둠의 설명에서 처음·가운데·끝에 알맞은 문장을 놓아 보세요.', toolOptions: { mode: 'match', slots: [{ id: 's1', label: '처음 (간 곳)' }, { id: 's2', label: '가운데 (알아낸 것)' }, { id: 's3', label: '끝 (느낀 점)' }], cards: ['우리는 꽃담 시장에 갔어요', '채소는 새벽에 들어와요', '사장님이 웃어 주셔서 기뻤어요'] },
                target: { match: { s1: '우리는 꽃담 시장에 갔어요', s2: '채소는 새벽에 들어와요', s3: '사장님이 웃어 주셔서 기뻤어요' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['우리는 꽃담 시장에 갔어요', '채소는 새벽에 들어와요', '사장님이 웃어 주셔서 기뻤어요', '나는 어제 늦잠을 잤어요'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 모둠 설명 연습하기', minutes: 13, tool: 'story', pair: true,
            teacher: '"듣는 친구가 잘 알아들으려면 어떻게 말하면 좋을까요?" 좋은 발표 모습을 고른 뒤 모둠마다 처음·가운데·끝을 한 사람씩 맡아 두 번 연습하게 한다. 선생님은 모둠을 돌며 "가운데에 알아낸 것이 들어 있나요?"만 확인해 준다. 실제 발표는 다음 차시들에서 한다.',
            task: '좋은 발표 모습을 고르고, 모둠 친구와 처음·가운데·끝을 나누어 맡아 연습해요.',
            levels: CARD_LV,
            items: [
              { prompt: '설명을 잘 알아듣게 해 주는 발표 모습만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '좋은 발표 모습', cards: ['친구들 얼굴을 보며 말해요', '또박또박 큰 소리로 말해요', '종이에 얼굴을 가리고 읽어요', '지도를 손가락으로 짚으며 말해요'] },
                target: { pick: ['친구들 얼굴을 보며 말해요', '또박또박 큰 소리로 말해요', '지도를 손가락으로 짚으며 말해요'] }, difficulty: 0.1,
                hints: ['듣는 친구 자리에서 무엇이 잘 들리고 잘 보이는지 생각해요.', '얼굴을 가리면 목소리가 어떻게 들릴지 떠올려 봐요.', '얼굴 가리고 읽기만 빼고 모두 좋은 발표 모습이에요.'] },
              { prompt: '모둠 친구와 처음·가운데·끝을 한 사람씩 맡아 두 번 연습하고 "다 했어요"를 누르세요.', free: true },
              { prompt: '연습한 뒤 우리 모둠 설명을 차례대로 놓아 보세요.', toolOptions: { slots: ['처음', '가운데', '끝'], cards: [{ id: '느낌', text: '다음엔 혼자 와 보고 싶어요', motif: 'star' }, { id: '곳', text: '우리는 우체국에 갔어요', motif: 'house' }, { id: '안 것', text: '편지는 하루 한 번 모아 가요', motif: 'leaf' }] },
                target: { order: ['곳', '안 것', '느낌'] }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"연습하면서 가장 어려웠던 부분은 처음, 가운데, 끝 가운데 어디였나요?" 손을 들게 하고, 많이 어려워한 부분을 다음 시간 시작할 때 한 번 더 연습한다고 말한다. 출구 질문을 마치면 모둠 설명 쪽지를 모둠 바구니에 넣어 둔다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { slots: ['처음', '가운데', '끝'], cards: [{ id: '느낌', text: '마음이 따뜻했어요', motif: 'flower' }, { id: '안 것', text: '두부는 콩으로 만들어요', motif: 'leaf' }, { id: '곳', text: '우리는 두부 가게에 갔어요', motif: 'house' }] }, prompt: '두부 가게에 다녀온 모둠의 설명을 차례대로 놓아 보세요.', target: { order: ['곳', '안 것', '느낌'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '"사장님이 친절해서 기뻤어요."는 설명의 어디에 넣을까요?', options: ['처음 (간 곳)', '가운데 (알아낸 것)', '끝 (느낀 점)'], answer: 2, difficulty: 0.15, explain: '기뻤다는 것은 내 마음이라 느낀 점이에요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '우리 모둠 설명 쪽지',
      items: [
        { type: 'table', prompt: '우리 모둠 설명을 차례대로 쓰세요.', columns: ['차례', '할 말'], cells: [['처음 (간 곳)', ''], ['가운데 (알아낸 것)', ''], ['끝 (느낀 점)', '']] },
        { type: 'choice', prompt: '"빵집은 아침 7시에 열어요."는 무엇일까요?', options: ['간 곳', '알아낸 것', '느낀 점'], answer: '알아낸 것' },
        { type: 'check', prompt: '내가 연습할 때 지킨 것에 ✓ 하세요.', options: ['친구들 얼굴을 보았어요', '큰 소리로 말했어요', '지도를 짚었어요'] },
        { type: 'short', prompt: '내가 맡은 부분의 말을 쓰세요.' },
      ],
      easy: {
        note: '어디에 갔는지 → 무엇을 알았는지 → 어땠는지',
        items: [
          { type: 'blank', prompt: '우리는 (        )에 갔어요.', answer: '' },
          { type: 'short', prompt: '알아낸 것을 하나 쓰세요.' },
          { type: 'choice', prompt: '느낀 점에 ○ 하세요.', options: ['재미있었어요', '7시에 열어요'], answer: '재미있었어요' },
          { type: 'draw', prompt: '간 곳을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 설명 쪽지는 빈칸을 채워 써요.',
      base: '세 칸, 네 칸 차례를 놓고 내가 맡은 부분을 연습해요.',
      challenge: '설명과 상관없는 함정 문장이 섞여요. 알아낸 것을 두 가지 넣어 설명해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 느낀 점부터 말한다 → 듣는 친구가 어디 이야기인지 모른다는 것을 짚는다. ② 알아낸 것과 느낀 점을 헷갈린다 → "내 마음이 들어 있나요?"로 가린다. ③ 연습 없이 발표하려 한다 → 모둠마다 두 번 연습한 뒤 다음 차시에 발표한다. 발표를 두려워하는 학생은 지도를 짚는 역할부터 맡긴다.',
  }));

  lessons.push(L(13, {
    title: '위험할 때 도움 청할 곳 지도에서 짚기',
    objective: '길을 잃거나 불이 나거나 다쳤을 때 도움을 청할 곳을 마을 지도에서 찾아 짚고 까닭을 말할 수 있다.',
    illustration: ART('a paper village map with a police box, a fire station and a hospital highlighted, and a small shop with a yellow child safety house sign on its door', '도움을 청할 곳', [
      { motif: 'house', x: 110, y: 214, color: 'sky' }, { motif: 'house', x: 370, y: 214, color: 'rose' }, { motif: 'tree', x: 240, y: 216 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"시장에서 엄마 손을 놓쳐 길을 잃었어요. 어떻게 할까요?" 대답을 듣고 "도움을 청할 곳은 어른만 알면 될까요?"라고 묻는다. "어른이 곁에 없을 때도 있으니 우리도 알아야 해요." 가게 문에 붙은 \'아동안전지킴이집\' 표지 그림을 보여 주고, 위험할 때 들어가 도움을 청할 수 있는 곳이라고 알려 준다.',
        student: '우리 동네에서 도움을 청할 수 있을 것 같은 곳을 하나 말해 봐요.',
        demo: { tool: 'map', options: { grid: [4, 3], places: [at(P.police, 2, 1), at(P.park, 0, 0), at(P.market, 3, 2)] }, sequence: [{ place: '경찰서' }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 이럴 때는 어디로 갈까', minutes: 14, tool: 'map',
            teacher: '"이 일을 해결해 주시는 분은 누구일까요? 그분은 어디에 계시나요?" 사람을 먼저 떠올리고 곳을 찾게 한다. 가까운 곳이 아니라 놀이터처럼 사람이 많은 곳을 고른 학생에게 "그곳에 도와줄 일을 하시는 분이 계실까요?"라고 묻는다.',
            task: '위험한 상황을 읽고 도움을 청할 곳을 지도에서 찾아 핀을 꽂아요.',
            levels: MAP_LV,
            items: [
              { prompt: '길을 잃어 집을 찾을 수 없어요. 경찰관께 도움을 청할 곳에 핀을 꽂아 보세요.', toolOptions: { places: [at(P.police, 1, 0), at(P.park, 3, 1), dot('놀이터', 0, 2), at(P.library, 2, 2)] }, target: { place: '경찰서' }, difficulty: 0.05 },
              { prompt: '모르는 사람이 자꾸 따라와요. 가장 가까운 \'아동안전지킴이집\' 가게에 핀을 꽂아 보세요.', toolOptions: { places: [dot('지킴이집 편의점', 2, 1), dot('빈 공터', 3, 0), at(P.park, 0, 2), dot('놀이터', 1, 0)] }, target: { place: '지킴이집 편의점' }, difficulty: 0.15,
                hints: ['위험할 때는 어른이 일하고 계시는 곳으로 들어가요.', '사람이 없는 곳으로 가면 도움을 청할 수 있을지 생각해 봐요.', '문에 지킴이집 표지가 붙은 가게예요.'] },
              { prompt: '친구가 넘어져 다리를 다쳐 걷지 못해요. 치료를 받을 곳에 핀을 꽂아 보세요.', toolOptions: { places: [at(P.hospital, 3, 2), at(P.school, 0, 0), at(P.post, 1, 1), at(P.market, 2, 0)] }, target: { place: '병원' }, difficulty: 0.1 },
              { prompt: '산불이 나서 연기가 보여요. 불을 끄는 분들께 알릴 곳에 핀을 꽂아 보세요.', toolOptions: { places: [at(P.fire, 0, 1), at(P.police, 2, 0), at(P.hospital, 3, 2), at(P.park, 1, 2)] }, target: { place: '소방서' }, difficulty: 0.15,
                levels: { challenge: { prompt: '산불이 나서 연기가 보여요. 불을 끄는 분들께 알릴 곳에 핀을 꽂아 보세요. (곳이 더 많아요)', toolOptions: { places: [at(P.fire, 0, 1), at(P.police, 2, 0), at(P.hospital, 3, 2), at(P.park, 1, 2), at(P.office, 3, 0), at(P.post, 1, 0)] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 상황과 도움 청할 곳 묶기', minutes: 13, tool: 'mindmap',
            teacher: '"불이 나거나 사람이 크게 다치면 119, 길을 잃거나 나쁜 일을 당하면 112예요." 칠판에 두 번호를 크게 쓰고 함께 읽는다. 큰 사고로 다친 사람을 경찰서에 놓은 학생에게 "다친 사람을 병원으로 옮겨 주는 구급차는 어디에서 올까요?"라고 묻는다. 마지막으로 집에 가는 길에 지킴이집 표지를 찾아보기로 약속한다.',
            task: '위험한 상황 카드를 도움을 청할 곳의 가지에 나누어 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '위험한 상황 카드를 도움을 청할 곳에 따라 나누어 보세요.', toolOptions: { topic: '도움을 청해요', slots: ['경찰서 (112)', '소방서 (119)'], cards: ['길을 잃었어요', '부엌에서 불이 났어요', '모르는 사람이 데려가려 해요', '엘리베이터에 갇혔어요'] },
                target: { sort: { '경찰서 (112)': ['길을 잃었어요', '모르는 사람이 데려가려 해요'], '소방서 (119)': ['부엌에서 불이 났어요', '엘리베이터에 갇혔어요'] } }, difficulty: 0.15,
                hints: ['불·구조가 필요한 일인지, 길 잃음·나쁜 일인지 나누어 생각해요.', '갇힌 사람을 꺼내 주는 구조대가 어디에 있는지 떠올려 봐요.', '불과 갇힘은 소방서(119), 길 잃음과 데려가려는 사람은 경찰서(112)예요.'] },
              { prompt: '상황 카드를 도움을 청할 곳에 따라 나누어 보세요.', toolOptions: { topic: '도움을 청해요', slots: ['경찰서 (112)', '소방서 (119)', '아동안전지킴이집'], cards: ['자전거를 도둑맞았어요', '교통사고로 사람이 쓰러졌어요', '하굣길에 무서운 개가 쫓아와 가게로 피해요'] },
                target: { sort: { '경찰서 (112)': ['자전거를 도둑맞았어요'], '소방서 (119)': ['교통사고로 사람이 쓰러졌어요'], '아동안전지킴이집': ['하굣길에 무서운 개가 쫓아와 가게로 피해요'] } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['자전거를 도둑맞았어요', '교통사고로 사람이 쓰러졌어요', '하굣길에 무서운 개가 쫓아와 가게로 피해요', '친구와 숨바꼭질을 해요'] } } },
                hints: ['훔친 일, 쓰러진 사람, 가까운 곳으로 피하는 일을 하나씩 나누어 생각해요.', '쓰러진 사람에게는 구급차가 필요해요. 구급차가 어디에서 오는지 다시 봐요.', '도둑맞음은 경찰서, 쓰러진 사람은 소방서 구급대, 가게로 피하기는 지킴이집이에요.'] },
              { prompt: '집에 가는 길에 지킴이집 표지가 붙은 가게를 찾아 활동지 지도에 표시하기로 짝과 약속하고 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"도움을 청할 곳은 누가 알아야 할까요?" 출구 질문을 마친 뒤 칠판의 112·119를 손으로 가리고 한 번 더 말해 보게 한다. 장난 전화는 정말 도움이 필요한 사람을 못 돕게 한다는 것을 덧붙인다. 다음 시간에는 도움을 청하는 말을 연습한다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'map', options: { grid: [4, 3], places: [at(P.fire, 3, 0), at(P.police, 0, 2), at(P.library, 1, 0), at(P.park, 2, 2)] }, prompt: '공원에서 휴대전화를 잃어버렸어요. 잃은 물건을 신고할 곳에 핀을 꽂아 보세요.', target: { place: '경찰서' }, difficulty: 0.15 },
          { type: 'choice', prompt: '도움을 청할 곳은 누가 알아야 할까요?', options: ['어른만 알면 돼요', '어린이도 알아야 해요'], answer: 1, difficulty: 0.05, explain: '어른이 곁에 없을 때도 있으니 우리도 알아 두어야 해요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '도움을 청할 곳',
      items: [
        { type: 'figure', wide: true, prompt: '불이 났을 때 알릴 곳에 ○ 하세요.', tool: 'map', figures: [{ options: { grid: [4, 3], places: [at(P.fire, 1, 1), at(P.police, 3, 0), at(P.hospital, 0, 2), at(P.park, 2, 2)] }, caption: '' }], answer: '소방서' },
        { type: 'table', prompt: '알맞은 전화번호를 쓰세요.', columns: ['상황', '전화번호'], cells: [['불이 났어요', ''], ['길을 잃었어요', '']] },
        { type: 'choice', prompt: '모르는 사람이 따라올 때 들어갈 곳은?', options: ['사람 없는 골목', '아동안전지킴이집 가게', '빈 놀이터'], answer: '아동안전지킴이집 가게' },
        { type: 'short', prompt: '집에 가는 길에 도움을 청할 수 있는 곳을 하나 쓰세요.' },
      ],
      easy: {
        note: '불 → 119, 길 잃음 → 112',
        items: [
          { type: 'choice', prompt: '불이 나면 몇 번?', options: ['119', '112'], answer: '119' },
          { type: 'choice', prompt: '길을 잃으면 어디로?', options: ['경찰서', '빵집'], answer: '경찰서' },
          { type: 'short', prompt: '도움을 청할 수 있는 곳을 하나 쓰세요.' },
          { type: 'draw', prompt: '지킴이집 표지를 본 가게를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '지도 칸이 적고 핀을 꽂으면 자리 이름이 보여요. 가지가 두 개예요.',
      base: '네 곳 가운데 도움을 청할 곳을 찾고, 세 가지로 나누어요.',
      challenge: '지도에 곳이 더 많고, 위험하지 않은 함정 카드가 섞여요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 도움을 청할 곳은 어른만 알면 된다고 여긴다 → 혼자 있을 때를 떠올리게 한다. ② 사람이 많은 놀이터나 빈 공터로 피한다 → 어른이 일하고 계시는 곳으로 가야 한다고 짚는다. ③ 다친 사람을 경찰서로 보낸다 → 구급차는 119라고 알려 준다. 아동안전지킴이집 표지는 학교 주변 실제 가게 사진으로 보여 주면 좋다(가게 이름은 가리지 않아도 된다).',
  }));

  lessons.push(L(14, {
    title: '도움을 청하는 말과 전화 연습하기',
    objective: '위험한 상황에서 무슨 일인지, 어디인지를 차례대로 말해 도움을 청하는 말을 연습할 수 있다.',
    illustration: ART('a paper child calmly holding a toy phone and speaking, with a speech bubble showing a fire and a house, a friendly firefighter appearing on the other side', '침착하게 말해요', [
      { motif: 'house', x: 110, y: 214, color: 'rose' }, { motif: 'cloud', x: 360, y: 80, s: 0.7 }, { motif: 'tree', x: 420, y: 214 }]),
    safety: ['112·119는 연습할 때 실제로 누르지 않고 장난감 전화나 종이 전화로만 해요.', '장난 전화는 정말 도움이 필요한 사람을 못 돕게 하니 절대 하지 않아요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '선생님이 종이 전화를 들고 "여보세요! 불이요! 불!"이라고만 말해 본다. "소방관은 어디로 가야 할지 알 수 있을까요?" 반응을 듣고 "무슨 일인지, 어디인지를 차례대로 말해야 빨리 도와줄 수 있어요"라고 말한다. 우리 집 주소를 모르면 \'가까운 큰 건물 이름\'을 말하면 된다고 알려 준다.',
        student: '도움을 청할 때 꼭 말해야 할 두 가지를 말해 봐요.',
        demo: { tool: 'story', options: { slots: ['처음', '가운데', '끝'], cards: [{ id: '일', text: '"불이 났어요."', motif: 'sun' }, { id: '곳', text: '"꽃담 시장 옆이에요."', motif: 'house' }, { id: '기다림', text: '끊지 않고 기다려요', motif: 'star' }], shuffle: false }, sequence: [{ order: ['일', '곳', '기다림'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 도움을 청하는 말 차례 정하기', minutes: 13, tool: 'story',
            teacher: '"전화를 받는 분이 가장 먼저 알아야 할 것은 무엇일까요?" 무슨 일인지 → 어디인지 → 묻는 말에 대답하고 기다리기 차례를 칠판에 적는다. 전화를 먼저 끊는 카드를 앞에 둔 학생에게 "끊으면 소방관이 더 묻고 싶은 것을 어떻게 물어볼까요?"라고 묻는다.',
            task: '도움을 청하는 말을 차례대로 놓고, 상황에 맞는 번호와 말을 짝 지어요.',
            levels: CARD_LV,
            items: [
              { prompt: '119에 전화해 도움을 청하는 차례대로 카드를 놓아 보세요.', toolOptions: { slots: 4, cards: [{ id: '일', text: '"할머니가 쓰러지셨어요."', motif: 'cloud' }, { id: '곳', text: '"꽃담 아파트 3동이에요."', motif: 'house' }, { id: '대답', text: '묻는 말에 대답해요', motif: 'leaf' }, { id: '기다림', text: '끊으라 할 때까지 기다려요', motif: 'star' }] },
                target: { order: ['일', '곳', '대답', '기다림'] }, difficulty: 0.15,
                hints: ['전화 받는 분이 먼저 알아야 할 것부터 놓아요.', '전화를 끊는 일이 너무 앞에 있지 않은지 봐요.', '무슨 일 → 어디 → 묻는 말에 대답 → 기다리기 차례예요.'] },
              { prompt: '상황 옆에 알맞은 전화번호 카드를 놓아 보세요.', toolOptions: { mode: 'match', slots: [{ id: 'm1', label: '집에 연기가 가득해요' }, { id: 'm2', label: '동생을 잃어버렸어요' }, { id: 'm3', label: '친구가 숨을 잘 못 쉬어요' }], cards: [{ id: '119a', text: '119' }, { id: '112', text: '112' }, { id: '119b', text: '119 ' }] },
                target: { match: { m1: ['119a', '119b'], m2: '112', m3: ['119a', '119b'] } }, difficulty: 0.15,
                hints: ['불이나 아픈 사람은 어느 번호인지, 사람을 찾는 일은 어느 번호인지 떠올려요.', '사람을 잃어버린 일에 놓은 번호를 다시 봐요.', '연기와 숨 못 쉼은 119, 동생 잃어버림은 112예요.'] },
              { prompt: '길을 잃었을 때 경찰관께 할 말로 알맞은 것만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '경찰관께 할 말', cards: ['"엄마를 시장에서 놓쳤어요."', '"꽃담초 2학년이에요."', '"몰라요, 그냥 갈래요."', '"엄마 전화번호를 알아요."'] },
                target: { pick: ['"엄마를 시장에서 놓쳤어요."', '"꽃담초 2학년이에요."', '"엄마 전화번호를 알아요."'] }, difficulty: 0.15,
                hints: ['경찰관이 나를 집에 데려다주려면 무엇을 알아야 할지 생각해요.', '도움을 그만 받겠다는 말이 섞였는지 봐요.', '놓친 곳, 다니는 학교, 보호자 전화번호를 말해요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 종이 전화로 도움 청하기 연습', minutes: 14, tool: 'emotion', pair: true,
            teacher: '"무서울 때는 숨을 크게 한 번 쉬고 말해요." 상황마다 어떻게 할지 고른 뒤, 짝과 한 사람은 전화 받는 분, 한 사람은 도움을 청하는 사람이 되어 종이 전화로 연습한다. 실제 번호는 누르지 않는다는 것을 다시 짚는다. 울먹이며 말을 멈추는 학생에게 "무슨 일인지 한 마디만 먼저 말해요"라고 돕는다.',
            task: '상황에서 어떻게 할지 고르고, 짝과 종이 전화로 도움을 청하는 말을 연습해요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '마트에서 엄마를 놓쳤어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '큰 마트에서 엄마 손을 놓쳐 엄마가 보이지 않아요.', choices: [
                { id: 'clerk', text: '마트 직원께 "엄마를 놓쳤어요"라고 말해요', result: '직원이 방송으로 엄마를 찾아 주셔요.', mood: '편안함' },
                { id: 'out', text: '엄마를 찾으러 혼자 밖으로 나가요', result: '더 멀리 떨어져 찾기 어려워져요.', mood: '무서움', why: '밖으로 나가면 엄마와 더 멀어질 수 있어요.' },
                { id: 'stranger', text: '처음 보는 아저씨 차를 타고 찾으러 가요', result: '아주 위험할 수 있어요.', mood: '걱정', why: '모르는 사람의 차는 타지 않아요.' }] }, target: { choice: 'clerk' }, difficulty: 0.05,
                levels: { easy: { toolOptions: { choices: [
                  { id: 'clerk', text: '마트 직원께 "엄마를 놓쳤어요"라고 말해요', result: '직원이 방송으로 엄마를 찾아 주셔요.', mood: '편안함' },
                  { id: 'out', text: '엄마를 찾으러 혼자 밖으로 나가요', result: '더 멀리 떨어져 찾기 어려워져요.', mood: '무서움', why: '밖으로 나가면 엄마와 더 멀어질 수 있어요.' }] } } } },
              { prompt: '전화로 불을 알렸는데 무서워서 말이 잘 안 나와요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '119에 전화했는데 무서워서 말이 잘 안 나와요.', choices: [
                { id: 'breath', text: '"불이 났어요"부터 말해요', result: '소방관이 차근차근 물어봐 주셔요.', mood: '편안함' },
                { id: 'hang', text: '말이 안 나와서 그냥 끊어요', result: '소방관이 어디로 가야 할지 몰라요.', mood: '걱정', why: '끊지 말고 한 마디라도 먼저 말해요.' }] }, target: { choice: 'breath' }, difficulty: 0.1 },
              { prompt: '친구가 재미로 119에 장난 전화를 하자고 해요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '친구가 "재미있겠다, 119에 장난 전화 해 보자"라고 해요.', choices: [
                { id: 'no', text: '"정말 급한 사람이 못 걸 수 있어. 안 할래."라고 말해요', result: '친구도 장난 전화를 하지 않아요.', mood: '뿌듯함' },
                { id: 'yes', text: '재미있을 것 같아 같이 해요', result: '정말 불이 난 집 전화가 늦게 연결돼요.', mood: '미안함', why: '장난 전화는 도움이 필요한 사람을 못 돕게 해요.' }] }, target: { choice: 'no' }, difficulty: 0.1 },
              { prompt: '짝과 전화 받는 분과 도움을 청하는 사람이 되어 종이 전화로 연습하고, 역할을 바꾸어 한 뒤 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"도움을 청할 때 꼭 말할 두 가지는 무엇이었나요?" 다 함께 손가락 두 개를 펴며 말해 보게 한다. 집 주소를 모르는 학생이 있으면 보호자와 함께 알아 오도록 알림장에 적는다. 다음 시간에는 우리 마을 안내 지도를 만들어 소개한다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { slots: ['처음', '가운데', '끝'], cards: [{ id: '곳', text: '"꽃담 공원 앞이에요."', motif: 'house' }, { id: '기다림', text: '끊지 않고 기다려요', motif: 'star' }, { id: '일', text: '"사람이 다쳤어요."', motif: 'cloud' }] }, prompt: '119에 도움을 청하는 차례대로 카드를 놓아 보세요.', target: { order: ['일', '곳', '기다림'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '도둑이 든 것을 보았어요. 몇 번에 전화할까요?', options: ['112', '119'], answer: 0, difficulty: 0.15, explain: '도둑처럼 나쁜 일은 경찰 112에 알려요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '도움을 청하는 말',
      items: [
        { type: 'table', prompt: '도움을 청할 때 할 말을 쓰세요.', columns: ['차례', '할 말'], cells: [['무슨 일인지', ''], ['어디인지', '']] },
        { type: 'choice', prompt: '전화로 도움을 청한 뒤 어떻게 할까요?', options: ['바로 끊어요', '끊으라 할 때까지 기다려요'], answer: '끊으라 할 때까지 기다려요' },
        { type: 'choice', prompt: '친구가 숨을 못 쉬어요. 몇 번일까요?', options: ['112', '119'], answer: '119' },
        { type: 'short', prompt: '우리 집 가까이에 있는 큰 건물 이름을 쓰세요.' },
      ],
      easy: {
        note: '무슨 일인지 → 어디인지',
        items: [
          { type: 'choice', prompt: '불이 나면 몇 번?', options: ['119', '112'], answer: '119' },
          { type: 'choice', prompt: '먼저 할 말은?', options: ['"불이 났어요."', '"안녕히 계세요."'], answer: '"불이 났어요."' },
          { type: 'short', prompt: '우리 집 가까운 큰 건물 이름을 쓰세요.' },
          { type: 'draw', prompt: '침착하게 도움을 청하는 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 고를 보기가 두 개예요. 짝 연습에서 말 카드를 보고 읽어도 돼요.',
      base: '네 장 차례를 놓고 번호를 짝 지어요. 짝과 역할을 바꾸어 두 번 연습해요.',
      challenge: '짝 연습에서 전화 받는 분이 묻는 말("다친 사람은 몇 명이에요?")에도 대답해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① "불이요!"만 외친다 → 무슨 일과 어디를 짝으로 말하게 한다. ② 주소를 몰라 말을 멈춘다 → 가까운 큰 건물·가게 이름을 대도 된다고 알려 준다. ③ 장난 전화를 가볍게 여긴다 → 정말 급한 사람이 늦게 연결된다는 것을 짚는다. 보호자 전화번호 외우기는 가정에 안내하고 교실에서 실제 번호를 적거나 말하게 하지 않는다.',
  }));

  lessons.push(L(15, {
    title: '우리 마을 안내 지도 만들어 소개하기',
    objective: '마을 안내 지도의 기호가 뜻하는 곳을 알맞게 채우고, 모둠이 알아낸 곳을 지도로 짚으며 친구들에게 소개할 수 있다.',
    illustration: ART('a big colorful paper map of a village on the classroom wall with little symbol cutouts and a legend box, a child pointing at it while classmates listen', '우리 마을 안내 지도', [
      { motif: 'house', x: 110, y: 214, color: 'buttercup' }, { motif: 'tree', x: 380, y: 214 }, { motif: 'flower', x: 300, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"지도에 곳 이름을 다 쓰면 글씨가 너무 많아요. 그래서 지도에서는 간단한 그림, 기호를 써요." 학교 기호(깃발)와 병원 기호(더하기 모양)를 보여 주고 무엇일지 맞혀 보게 한다. "기호가 무슨 뜻인지 모아 적은 칸을 범례라고 해요"라고 말하며 지도 귀퉁이의 범례를 짚는다.',
        student: '깃발 모양 기호는 무엇을 나타낼지 말해 봐요.',
        demo: { tool: 'map', options: { mode: 'legend', names: false, grid: [4, 3], places: [at(P.school, 1, 1), at(P.hospital, 3, 0)] }, sequence: [{ legend: { school: '학교', hospital: '병원' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 안내 지도의 범례 채우기', minutes: 10, tool: 'map',
            teacher: '"기호의 모양이 무엇을 닮았나요?" 책 모양은 도서관, 편지 봉투는 우체국처럼 모양과 하는 일을 이어 생각하게 한다. 방패 모양(경찰서)과 불꽃 모양(소방서)을 헷갈리면 "불꽃은 무엇을 끄는 곳일까요?"라고 묻는다.',
            task: '범례 빈칸을 눌러 기호가 뜻하는 곳 이름을 골라요.',
            levels: { easy: { grid: [4, 3] }, base: { grid: [4, 3] }, challenge: { grid: [5, 3] } },
            items: [
              { prompt: '안내 지도의 범례 빈칸에 기호의 뜻을 골라 넣어 보세요.', toolOptions: { mode: 'legend', names: false, places: [at(P.school, 0, 0), at(P.library, 2, 1), at(P.post, 3, 2)] }, target: { legend: { school: '학교', library: '도서관', post: '우체국' } }, difficulty: 0.1 },
              { prompt: '안내 지도의 범례 빈칸에 기호의 뜻을 골라 넣어 보세요.', toolOptions: { mode: 'legend', names: false, places: [at(P.police, 1, 0), at(P.fire, 3, 1), at(P.hospital, 0, 2)] }, target: { legend: { police: '경찰서', fire: '소방서', hospital: '병원' } }, difficulty: 0.15,
                hints: ['기호의 모양이 무엇을 닮았는지, 그곳에서 하는 일과 이어 생각해요.', '불꽃 모양과 방패 모양을 바꾸어 넣지 않았는지 봐요.', '방패는 경찰서, 불꽃은 소방서, 더하기 모양은 병원이에요.'] },
              { prompt: '안내 지도의 범례 빈칸에 기호의 뜻을 골라 넣어 보세요. 헷갈리는 이름도 섞여 있어요.', toolOptions: { mode: 'legend', names: false, places: [at(P.market, 0, 1), at(P.park, 2, 0), at(P.station, 3, 2)], extra: ['버스 터미널', '놀이터'] }, target: { legend: { market: '시장', park: '공원', station: '기차역' } }, difficulty: 0.2,
                hints: ['기호의 모양이 무엇을 닮았는지, 그곳에서 하는 일과 이어 생각해요.', '바퀴가 달린 기호가 버스인지 기차인지 모양을 다시 봐요.', '천막 지붕은 시장, 나무는 공원, 창문이 달린 긴 차는 기차역이에요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 모둠 안내 지도로 마을 소개하기', minutes: 18, tool: 'story', pair: true,
            teacher: '모둠마다 7차시에 만든 바닥 지도를 벽에 걸고 2분씩 소개한다(여섯 모둠 12분). "처음·가운데·끝 차례로, 곳을 말할 때마다 지도를 짚어요." 듣는 모둠은 발표가 끝나면 좋았던 점 하나를 말한다. 발표 전 1분 동안 모둠별로 맡은 부분을 마지막으로 맞추어 보게 한다.',
            task: '모둠 안내 지도를 짚으며 차례대로 마을을 소개하고, 다른 모둠의 소개를 들어요.',
            levels: CARD_LV,
            items: [
              { prompt: '안내 지도로 소개할 때 하는 일을 차례대로 놓아 보세요.', toolOptions: { slots: 4, cards: [{ id: '제목', text: '지도 제목을 읽어요', motif: 'star' }, { id: '범례', text: '범례로 기호를 알려 줘요', motif: 'leaf' }, { id: '짚기', text: '곳을 짚으며 알아낸 것을 말해요', motif: 'house' }, { id: '느낌', text: '느낀 점으로 마쳐요', motif: 'flower' }] },
                target: { order: ['제목', '범례', '짚기', '느낌'] }, difficulty: 0.15,
                hints: ['듣는 친구가 지도를 보는 방법부터 알아야 해요.', '기호의 뜻을 알려 주기 전에 곳을 짚으면 친구가 알아볼 수 있을지 생각해요.', '제목 → 범례 → 곳 짚으며 알아낸 것 → 느낀 점 차례예요.'] },
              { prompt: '우리 모둠 차례가 되면 안내 지도를 짚으며 2분 동안 소개하고 "다 했어요"를 누르세요.', free: true },
              { prompt: '다른 모둠의 소개를 듣고 좋았던 점을 하나 말한 뒤 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"여러 모둠의 지도를 보니 우리 마을에 대해 새로 안 것이 있나요?" 두세 명에게 듣는다. 범례를 빼먹은 모둠 지도에는 함께 범례를 붙여 완성한다. 다음 시간에는 친구 발표를 듣고 묻고 답하기를 한다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'map', options: { mode: 'legend', names: false, grid: [4, 3], places: [at(P.library, 0, 1), at(P.fire, 2, 0), at(P.market, 3, 2)] }, prompt: '범례 빈칸에 기호의 뜻을 골라 넣어 보세요.', target: { legend: { library: '도서관', fire: '소방서', market: '시장' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '지도에서 기호의 뜻을 모아 적은 칸을 무엇이라고 하나요?', options: ['범례', '제목', '방위표'], answer: 0, difficulty: 0.1, explain: '범례를 보면 기호가 어떤 곳인지 알 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '우리 마을 안내 지도',
      items: [
        { type: 'figure', wide: true, prompt: '범례 빈칸에 기호의 뜻을 쓰세요.', tool: 'map', figures: [{ options: { mode: 'legend', names: false, grid: [4, 3], places: [at(P.school, 0, 0), at(P.library, 2, 1), at(P.hospital, 3, 2)] }, caption: '' }], answer: '학교, 도서관, 병원' },
        { type: 'choice', prompt: '불꽃 모양 기호가 뜻하는 곳은?', options: ['소방서', '경찰서', '병원'], answer: '소방서' },
        { type: 'draw', prompt: '우리 마을의 곳 하나를 나타낼 나만의 기호를 그리고 뜻을 쓰세요.' },
        { type: 'short', prompt: '다른 모둠 소개에서 좋았던 점을 쓰세요.' },
      ],
      easy: {
        note: '기호 모양이 무엇을 닮았는지 떠올려요.',
        items: [
          { type: 'choice', prompt: '책 모양 기호는?', options: ['도서관', '시장'], answer: '도서관' },
          { type: 'choice', prompt: '깃발 모양 기호는?', options: ['학교', '병원'], answer: '학교' },
          { type: 'draw', prompt: '나만의 기호를 하나 그려 보세요.' },
          { type: 'short', prompt: '내가 그린 기호의 뜻을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '범례 칸이 세 개이고 모양이 뚜렷한 기호부터 해요. 발표에서는 지도를 짚는 일을 맡아요.',
      base: '범례 세 칸을 채우고 차례대로 소개해요.',
      challenge: '헷갈리는 이름(버스 터미널, 놀이터)이 섞인 범례를 채워요. 발표에서 범례 설명을 맡아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 기호를 그림 크기나 색으로만 기억한다 → 모양과 하는 일을 이어 말하게 한다. ② 범례를 빼고 지도만 보여 준다 → 듣는 사람이 기호를 모른다는 것을 짚는다. ③ 발표 시간이 길어진다 → 모래시계나 타이머로 2분을 지킨다. 범례(지도 기호)는 3학년 사회에서 자세히 배우므로 여기서는 그림 기호의 뜻을 아는 정도로만 다룬다.',
  }));

  lessons.push(L(16, {
    title: '알아낸 것과 느낀 것 나누어 묻고 답하기',
    objective: '친구의 설명에서 알아낸 사실과 느낀 마음을 나누고, 더 알고 싶은 것을 물음으로 만들어 묻고 답할 수 있다.',
    illustration: ART('two paper children facing each other, one holding a card with a fact and the other raising a hand with a question bubble, a village map behind them', '묻고 답해요', [
      { motif: 'house', x: 110, y: 214, color: 'lavender' }, { motif: 'star', x: 360, y: 86 }, { motif: 'tree', x: 420, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"\'빵집은 7시에 열어요\'와 \'빵집이 좋아요\'는 무엇이 다를까요?" 반응을 듣고 "앞의 것은 누가 가도 똑같이 알 수 있는 사실, 뒤의 것은 사람마다 다를 수 있는 마음이에요"라고 정리한다. 시연 단추로 두 카드가 알아낸 것과 느낀 것 가지로 나뉘는 모습을 보여 준다.',
        student: '빵집에 대해 알아낸 것 하나, 느낀 것 하나를 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '빵집 이야기', slots: ['알아낸 것', '느낀 것'], cards: ['빵집은 7시에 열어요', '빵 냄새가 좋아서 행복했어요'], shuffle: false }, sequence: [{ sort: { '알아낸 것': ['빵집은 7시에 열어요'], '느낀 것': ['빵 냄새가 좋아서 행복했어요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 알아낸 것과 느낀 것 나누기', minutes: 13, tool: 'mindmap',
            teacher: '"이 말에 \'좋았어요, 놀랐어요\' 같은 마음 낱말이 들어 있나요?" 카드마다 마음 낱말을 찾아 밑줄을 긋게 한다. "소방관은 멋있어요"처럼 사람마다 다를 수 있는 말을 사실로 놓은 학생에게 "모든 사람이 똑같이 생각할까요?"라고 묻는다.',
            task: '친구의 설명 카드를 알아낸 것과 느낀 것으로 나누어 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '소방서에 다녀온 친구의 말을 알아낸 것과 느낀 것으로 나누어 보세요.', toolOptions: { topic: '소방서 이야기', slots: ['알아낸 것', '느낀 것'], cards: ['소방차에는 사다리가 있어요', '소방관은 교대로 밤에도 일해요', '사이렌 소리가 커서 놀랐어요', '소방관이 멋있어 보였어요'] },
                target: { sort: { '알아낸 것': ['소방차에는 사다리가 있어요', '소방관은 교대로 밤에도 일해요'], '느낀 것': ['사이렌 소리가 커서 놀랐어요', '소방관이 멋있어 보였어요'] } }, difficulty: 0.1,
                hints: ['누가 가도 똑같이 알 수 있는 말인지, 내 마음을 말한 것인지 생각해요.', '\'놀랐어요\', \'멋있어 보였어요\'처럼 마음을 나타내는 말이 어디 있는지 봐요.', '사다리와 밤 근무는 알아낸 것, 놀람과 멋있음은 느낀 것이에요.'] },
              { prompt: '시장에 다녀온 친구의 말을 알아낸 것과 느낀 것으로 나누어 보세요.', toolOptions: { topic: '시장 이야기', slots: ['알아낸 것', '느낀 것'], cards: ['생선 가게는 얼음을 깔아요', '사람이 많아서 신났어요', '채소 가게는 새벽에 문을 열어요', '떡이 맛있어 보여 배가 고팠어요'] },
                target: { sort: { '알아낸 것': ['생선 가게는 얼음을 깔아요', '채소 가게는 새벽에 문을 열어요'], '느낀 것': ['사람이 많아서 신났어요', '떡이 맛있어 보여 배가 고팠어요'] } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['생선 가게는 얼음을 깔아요', '사람이 많아서 신났어요', '채소 가게는 새벽에 문을 열어요', '떡이 맛있어 보여 배가 고팠어요', '시장에 가면 무엇을 살까요?'] } } },
                hints: ['누가 가도 똑같이 알 수 있는 말인지, 내 마음을 말한 것인지 생각해요.', '물음 카드는 알아낸 것도 느낀 것도 아니라서 남겨 두었는지 봐요.', '얼음·새벽 문 열기는 알아낸 것, 신남·배고픔은 느낀 것이에요.'] },
              { prompt: '도서관에 다녀온 친구의 말을 알아낸 것과 느낀 것으로 나누어 보세요.', toolOptions: { topic: '도서관 이야기', slots: ['알아낸 것', '느낀 것'], cards: ['그림책은 낮은 책장에 있어요', '조용해서 마음이 편했어요', '책은 두 주 동안 빌려요'] },
                target: { sort: { '알아낸 것': ['그림책은 낮은 책장에 있어요', '책은 두 주 동안 빌려요'], '느낀 것': ['조용해서 마음이 편했어요'] } }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 친구 발표에 묻고 답하기', minutes: 14, tool: 'story', pair: true,
            teacher: '"친구 설명을 듣고 더 알고 싶은 것을 물음으로 만들어요." 설명 옆에 이어지는 물음을 짝 지은 뒤, 짝과 내 모둠 설명을 들려 주고 물음 하나씩을 주고받게 한다. 물음 대신 "잘했어"만 말하는 학생에게 "설명에서 더 궁금한 것은 없었나요?"라고 묻는다.',
            task: '친구 설명에 이어지는 물음을 짝 짓고, 짝과 설명을 들려 주며 묻고 답해요.',
            levels: CARD_LV,
            items: [
              { prompt: '친구의 설명 옆에 그 설명을 듣고 더 물어볼 물음 카드를 놓아 보세요.', toolOptions: { mode: 'match', slots: [{ id: 'm1', label: '"우체국에서는 편지를 모아 보내요."' }, { id: 'm2', label: '"떡집은 새벽에 떡을 쪄요."' }, { id: 'm3', label: '"공원은 아침마다 청소해요."' }], cards: ['"편지는 어디로 보내요?"', '"새벽 몇 시에 일어나세요?"', '"누가 청소해요?"'] },
                target: { match: { m1: '"편지는 어디로 보내요?"', m2: '"새벽 몇 시에 일어나세요?"', m3: '"누가 청소해요?"' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['"편지는 어디로 보내요?"', '"새벽 몇 시에 일어나세요?"', '"누가 청소해요?"', '"점심 뭐 먹었어?"'] } } } },
              { prompt: '친구 발표를 듣고 하기 좋은 말만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '발표 뒤에 하는 말', cards: ['"지도를 짚어 줘서 잘 알았어."', '"빵은 몇 가지였어?"', '"너무 길어서 지루했어."', '"다음엔 나도 가 볼래."'] },
                target: { pick: ['"지도를 짚어 줘서 잘 알았어."', '"빵은 몇 가지였어?"', '"다음엔 나도 가 볼래."'] }, difficulty: 0.15,
                hints: ['그 말을 들은 발표자의 마음이 어떨지 생각해요.', '고른 말 가운데 발표자를 속상하게 하는 말이 있는지 봐요.', '\'지루했어\'만 빼고 칭찬·물음·다짐 말은 모두 좋아요.'] },
              { prompt: '짝에게 우리 모둠 설명을 들려 주고, 짝이 낸 물음에 대답한 뒤 역할을 바꾸어 하고 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"오늘 짝에게서 받은 물음 가운데 대답하기 어려웠던 것이 있나요?" 대답하지 못한 물음은 물음판에 붙여 다음에 알아보기로 한다. 1~16차시에 만든 물음판·지도·그림 기록을 한데 모아 \'우리 마을 탐험 책\'으로 엮는다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '병원 이야기', slots: ['알아낸 것', '느낀 것'], cards: ['병원은 밤에도 응급실을 열어요', '주사 맞을 때 무서웠어요', '간호사가 키를 재 주었어요'] }, prompt: '병원에 다녀온 친구의 말을 알아낸 것과 느낀 것으로 나누어 보세요.', target: { sort: { '알아낸 것': ['병원은 밤에도 응급실을 열어요', '간호사가 키를 재 주었어요'], '느낀 것': ['주사 맞을 때 무서웠어요'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '"약국은 저녁 8시에 닫아요."를 듣고 더 물어볼 물음으로 알맞은 것은?', options: ['"약국은 몇 시에 열어요?"', '"나 어제 감기 걸렸어."', '"잘했어."'], answer: 0, difficulty: 0.15, explain: '설명에 이어 더 알고 싶은 것을 물어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '묻고 답하기',
      items: [
        { type: 'table', prompt: '친구 설명에서 알아낸 것과 느낀 것을 쓰세요.', columns: ['알아낸 것', '느낀 것'], rows: 2 },
        { type: 'choice', prompt: '느낀 것에 ○ 하세요.', options: ['우체국은 9시에 열어요', '집배원이 친절해서 고마웠어요'], answer: '집배원이 친절해서 고마웠어요' },
        { type: 'short', prompt: '친구 설명을 듣고 묻고 싶은 것을 쓰세요.' },
        { type: 'short', prompt: '짝이 나에게 물은 것과 내 대답을 쓰세요.' },
      ],
      easy: {
        note: '마음 낱말(좋아요, 놀랐어요)이 있으면 느낀 것이에요.',
        items: [
          { type: 'choice', prompt: '알아낸 것에 ○ 하세요.', options: ['빵집은 7시에 열어요', '빵집이 좋아요'], answer: '빵집은 7시에 열어요' },
          { type: 'choice', prompt: '느낀 것에 ○ 하세요.', options: ['신났어요', '공원은 넓어요'], answer: '신났어요' },
          { type: 'short', prompt: '친구에게 묻고 싶은 것을 쓰세요.' },
          { type: 'draw', prompt: '친구와 묻고 답하는 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 마음 낱말에 밑줄을 그은 뒤 나누어요.',
      base: '네 장을 두 가지로 나누고, 짝과 물음 하나씩을 주고받아요.',
      challenge: '물음 카드처럼 어디에도 넣지 않을 함정 카드가 섞여요. 짝에게 물음을 두 개 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① "멋있어요"처럼 생각을 사실로 여긴다 → 모든 사람이 같은지 묻는다. ② 묻는 대신 칭찬만 한다 → 설명의 낱말 하나를 골라 \'언제·누가·어떻게\'를 붙이게 한다. ③ 대답을 모르면 지어낸다 → "다시 알아볼게"라고 말해도 된다고 알려 준다.',
  }));

  // ───────────────────────── 17~22차시: 함께 쓰는 것과 내가 할 수 있는 일 찾기(공동체 생활 맥락) ─────────────────────────

  // 교실 칸 지도(앞 = 위쪽 줄): 장소는 모두 0~3열·0~2행 안
  var ROOM = {
    board: dot('칠판', 1, 0), desk: dot('선생님 책상', 3, 0), books: dot('학급 문고', 0, 1), plant: dot('창가 화분', 0, 2),
    trash: dot('분리수거함', 3, 2), lockers: dot('사물함', 2, 2), sink: dot('수돗가', 3, 1), door: dot('앞문', 2, 0),
  };

  lessons.push(L(17, {
    title: '우리 반에서 함께 쓰는 것 찾기',
    objective: '교실에 있는 물건을 함께 쓰는 것과 내 것으로 나누고, 함께 쓰는 것이 교실 어디에 있는지 찾을 수 있다.',
    illustration: ART('a bright paper classroom with a class bookshelf, a potted plant by the window, a shared recycling bin and a blackboard, children pointing at them', '함께 쓰는 것을 찾아요', [
      { motif: 'house', x: 110, y: 214, color: 'mint' }, { motif: 'flower', x: 360, y: 228 }, { motif: 'tree', x: 420, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"우리 교실에서 내 이름이 붙지 않은 물건은 무엇일까요?" 교실을 둘러보게 하고 서너 명에게 듣는다. "학급 문고, 화분, 칠판처럼 이름이 없는 물건은 누가 쓰나요?" "우리 모두요"라는 대답이 나오면 "그럼 돌보는 일은 누가 할까요?"라고 물음을 남겨 둔다. 반장만 한다는 대답이 나오면 칠판 한쪽에 적어 두고 단원 끝에 다시 본다.',
        student: '교실에서 우리 모두가 쓰는 물건을 하나 찾아 손가락으로 가리켜 봐요.',
        demo: { tool: 'mindmap', options: { topic: '우리 교실', slots: ['함께 쓰는 것', '내 것'], cards: ['학급 문고 책', '내 필통'], shuffle: false }, sequence: [{ sort: { '함께 쓰는 것': ['학급 문고 책'], '내 것': ['내 필통'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 함께 쓰는 것과 내 것 나누기', minutes: 13, tool: 'mindmap',
            teacher: '"이 물건은 우리 반 누구나 쓸 수 있나요, 한 사람만 쓰나요?" 카드마다 물어 나누게 한다. 사물함을 함께 쓰는 것에 놓은 학생에게 "사물함 안에는 누구 물건이 들어 있지요?"라고 묻는다. "함께 쓰는 것은 내 것보다 덜 아껴도 될까요?"라는 질문으로 다음 활동을 잇는다.',
            task: '교실 물건 카드를 함께 쓰는 것과 내 것으로 나누어 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '교실 물건을 함께 쓰는 것과 내 것으로 나누어 보세요.', toolOptions: { topic: '우리 교실', slots: ['함께 쓰는 것', '내 것'], cards: ['교실 화분', '내 물통', '칠판', '내 공책'] },
                target: { sort: { '함께 쓰는 것': ['교실 화분', '칠판'], '내 것': ['내 물통', '내 공책'] } }, difficulty: 0.05 },
              { prompt: '교실 물건을 함께 쓰는 것과 내 것으로 나누어 보세요.', toolOptions: { topic: '우리 교실', slots: ['함께 쓰는 것', '내 것'], cards: ['청소 도구함 빗자루', '이름이 붙은 사물함', '학급 놀이 상자', '내 실내화'] },
                target: { sort: { '함께 쓰는 것': ['청소 도구함 빗자루', '학급 놀이 상자'], '내 것': ['이름이 붙은 사물함', '내 실내화'] } }, difficulty: 0.15,
                hints: ['우리 반 누구나 쓸 수 있는지, 한 사람만 쓰는지 생각해요.', '이름이 붙어 있는 물건이 어느 칸에 있는지 다시 봐요.', '빗자루와 놀이 상자는 함께 쓰고, 이름 붙은 사물함과 실내화는 내 것이에요.'] },
              { prompt: '교실 물건을 함께 쓰는 것과 내 것으로 나누어 보세요. 교실 물건이 아닌 카드는 남겨요.', toolOptions: { topic: '우리 교실', slots: ['함께 쓰는 것', '내 것'], cards: ['학급 문고 책', '분리수거함', '내 크레파스', '우리 집 텔레비전'] },
                target: { sort: { '함께 쓰는 것': ['학급 문고 책', '분리수거함'], '내 것': ['내 크레파스'] } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['학급 문고 책', '분리수거함', '내 크레파스', '우리 집 텔레비전', '교실 시계', '내 가방'] }, target: { sort: { '함께 쓰는 것': ['학급 문고 책', '분리수거함', '교실 시계'], '내 것': ['내 크레파스', '내 가방'] } }, prompt: '교실 물건 여섯 장을 함께 쓰는 것과 내 것으로 나누어 보세요. 교실 물건이 아닌 카드는 남겨요.' } },
                hints: ['교실에 있는 물건인지 먼저 보고, 누가 쓰는지 생각해요.', '교실에 없는 물건까지 놓지 않았는지 봐요.', '우리 집 텔레비전은 교실 물건이 아니라서 남겨요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 교실 지도에서 함께 쓰는 것 찾기', minutes: 14, tool: 'map',
            teacher: '"이 지도는 우리 교실을 위에서 내려다본 거예요. 칠판이 있는 쪽이 위예요." 교실 앞쪽을 손으로 가리키며 지도 방향을 맞춘다. 실제 교실과 지도를 번갈아 보며 핀을 꽂게 하고, 다 꽂으면 그곳에 직접 가서 손을 대 보고 돌아오게 한다.',
            task: '교실 지도에서 함께 쓰는 물건이 있는 곳을 찾아 핀을 꽂고, 실제로 가서 찾아봐요.',
            levels: MAP_LV,
            items: [
              { prompt: '다 읽은 그림책을 꽂아 두는 곳에 핀을 꽂아 보세요.', toolOptions: { title: '우리 교실', places: [ROOM.books, ROOM.board, ROOM.trash, ROOM.lockers] }, target: { place: '학급 문고' }, difficulty: 0.05 },
              { prompt: '다 마신 우유갑을 모으는 곳에 핀을 꽂아 보세요.', toolOptions: { title: '우리 교실', places: [ROOM.trash, ROOM.plant, ROOM.desk, ROOM.books] }, target: { place: '분리수거함' }, difficulty: 0.1 },
              { prompt: '햇볕을 받으며 자라는, 우리 반이 함께 기르는 것이 있는 곳에 핀을 꽂아 보세요.', toolOptions: { title: '우리 교실', places: [ROOM.plant, ROOM.sink, ROOM.lockers, ROOM.door] }, target: { place: '창가 화분' }, difficulty: 0.1 },
              { prompt: '지도에서 찾은 곳에 실제로 가서 손을 대 보고 자리로 돌아와 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"함께 쓰는 것은 누가 돌보아야 할까요?" 출구 질문 뒤 칠판에 적어 둔 \'반장만\'이라는 말을 짚으며 "다음 시간에는 함께 쓰는 것을 돌보는 일을 찾아봐요"라고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '우리 교실', slots: ['함께 쓰는 것', '내 것'], cards: ['교실 텔레비전', '내 연필', '줄넘기 바구니', '내 우산'] }, prompt: '교실 물건을 함께 쓰는 것과 내 것으로 나누어 보세요.', target: { sort: { '함께 쓰는 것': ['교실 텔레비전', '줄넘기 바구니'], '내 것': ['내 연필', '내 우산'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '함께 쓰는 화분이 시들었어요. 누가 돌보면 좋을까요?', options: ['반장만 돌봐요', '우리 반 모두가 돌봐요'], answer: 1, difficulty: 0.1, explain: '함께 쓰는 것은 함께 쓰는 우리 모두가 돌봐요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '함께 쓰는 것',
      items: [
        { type: 'table', prompt: '교실 물건을 나누어 쓰세요.', columns: ['함께 쓰는 것', '내 것'], rows: 3 },
        { type: 'figure', wide: true, prompt: '교실 지도에서 학급 문고에 ○ 하세요.', tool: 'map', figures: [{ options: { grid: [4, 3], places: [ROOM.books, ROOM.board, ROOM.trash, ROOM.lockers] }, caption: '우리 교실' }], answer: '학급 문고' },
        { type: 'choice', prompt: '함께 쓰는 것에 ○ 하세요.', options: ['내 필통', '교실 시계', '내 물통'], answer: '교실 시계' },
        { type: 'draw', prompt: '우리 반이 함께 쓰는 물건 하나를 그려 보세요.' },
      ],
      easy: {
        note: '이름이 붙어 있으면 내 것, 누구나 쓰면 함께 쓰는 것!',
        items: [
          { type: 'choice', prompt: '함께 쓰는 것은?', options: ['칠판', '내 공책'], answer: '칠판' },
          { type: 'choice', prompt: '내 것은?', options: ['학급 문고 책', '내 실내화'], answer: '내 실내화' },
          { type: 'short', prompt: '함께 쓰는 물건을 하나 쓰세요.' },
          { type: 'draw', prompt: '그 물건을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고 지도 칸이 적어요. 교실 지도 핀을 꽂으면 자리 이름이 보여요.',
      base: '네 장을 두 칸으로 나누고 교실 지도에서 찾아요.',
      challenge: '교실 물건이 아닌 카드와 여섯 장 카드를 나누어요. 넓은 지도에서 찾아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 사물함처럼 교실에 붙은 것을 모두 함께 쓰는 것으로 여긴다 → 이름표와 안에 든 물건을 보게 한다. ② 함께 쓰는 것은 덜 아껴도 된다고 여긴다 → 망가지면 모두가 못 쓴다는 것을 짚는다. ③ 교실 지도의 방향을 헷갈린다 → 칠판 쪽을 위로 맞추고 서게 한다. 교실 지도 자리는 우리 교실 배치에 맞게 바꾸어 쓴다.',
  }));

  lessons.push(L(18, {
    title: '함께 쓰는 것을 돌보는 일 짝 짓기',
    objective: '함께 쓰는 물건마다 돌보는 일을 짝 짓고, 반의 일은 반장이 아닌 누구나 할 수 있다는 까닭을 말할 수 있다.',
    illustration: ART('paper children caring for shared classroom things, one watering a plant, one tidying a bookshelf, one wiping the blackboard', '함께 돌봐요', [
      { motif: 'flower', x: 110, y: 228 }, { motif: 'house', x: 370, y: 214, color: 'buttercup' }, { motif: 'leaf', x: 240, y: 230 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '시든 화분 그림을 보여 준다. "지난주에 아무도 물을 주지 않았대요. 왜 그랬을까요?" "반장이 줄 줄 알았어요"처럼 서로 미룬 대답이 나오면 "모두가 남이 할 거라고 생각하면 어떻게 될까요?"라고 묻는다. "함께 쓰는 것을 돌보는 일은 반장만의 일이 아니라 우리 모두의 일이에요."',
        student: '교실 화분이 시든 까닭을 짝과 말해 봐요.',
        demo: { tool: 'story', options: { mode: 'match', slots: [{ id: 'd1', label: '교실 화분' }], cards: ['흙이 마르면 물을 줘요'], shuffle: false }, sequence: [{ match: { d1: '흙이 마르면 물을 줘요' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 물건과 돌보는 일 짝 짓기', minutes: 13, tool: 'story',
            teacher: '"이 물건이 오래 잘 쓰이려면 무엇을 해 주면 좋을까요?" 짝 지은 뒤 그 일을 하는 몸짓을 해 보게 한다(물 주기, 책 꽂기). 돌보는 일이 아닌 카드(마음대로 가져가기)를 고른 학생에게 "그렇게 하면 다른 친구가 쓸 수 있을까요?"라고 묻는다.',
            task: '함께 쓰는 물건 옆에 그 물건을 돌보는 일 카드를 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '함께 쓰는 물건 옆에 돌보는 일 카드를 놓아 보세요.', toolOptions: { mode: 'match', slots: [{ id: 'm1', label: '학급 문고' }, { id: 'm2', label: '칠판' }, { id: 'm3', label: '분리수거함' }], cards: ['책을 바르게 꽂아요', '쉬는 시간에 깨끗이 지워요', '종이와 플라스틱을 나누어 넣어요'] },
                target: { match: { m1: '책을 바르게 꽂아요', m2: '쉬는 시간에 깨끗이 지워요', m3: '종이와 플라스틱을 나누어 넣어요' } }, difficulty: 0.05 },
              { prompt: '함께 쓰는 물건 옆에 돌보는 일 카드를 놓아 보세요.', toolOptions: { mode: 'match', slots: [{ id: 'm1', label: '학급 놀이 상자' }, { id: 'm2', label: '교실 창문' }, { id: 'm3', label: '청소 도구함' }], cards: ['놀고 나서 조각을 다 모아 넣어요', '쉬는 시간에 열고 수업 전에 닫아요', '빗자루를 거꾸로 세워 넣어요'] },
                target: { match: { m1: '놀고 나서 조각을 다 모아 넣어요', m2: '쉬는 시간에 열고 수업 전에 닫아요', m3: '빗자루를 거꾸로 세워 넣어요' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['놀고 나서 조각을 다 모아 넣어요', '쉬는 시간에 열고 수업 전에 닫아요', '빗자루를 거꾸로 세워 넣어요', '마음에 드는 장난감을 집에 가져가요'] } } } },
              { prompt: '함께 쓰는 물건을 돌보는 일만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '돌보는 일', cards: ['학급 문고 책을 찢어지지 않게 넘겨요', '색연필을 쓰고 뚜껑을 닫아요', '공용 가위를 아무 데나 두어요', '화분 잎을 뜯으며 놀아요'] },
                target: { pick: ['학급 문고 책을 찢어지지 않게 넘겨요', '색연필을 쓰고 뚜껑을 닫아요'] }, difficulty: 0.15,
                hints: ['그렇게 하면 다음 친구도 잘 쓸 수 있는지 생각해요.', '고른 일 가운데 물건을 잃어버리거나 망가뜨리는 일이 있는지 봐요.', '책을 조심히 넘기기와 뚜껑 닫기가 돌보는 일이에요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 반의 일은 누가 할까', minutes: 14, tool: 'emotion',
            teacher: '"반장이 결석한 날 우유 상자를 아무도 가져오지 않았어요. 어떻게 하면 좋을까요?" 상황마다 고르고, 고른 까닭을 한 명씩 듣는다. "반장만 하는 일"이라고 말하는 학생에게 "반장이 혼자 스물여섯 명 몫을 다 할 수 있을까요?"라고 묻는다. 마지막 문항은 실제로 지금 교실에서 돌볼 것 하나를 짝과 함께 돌본다.',
            task: '상황을 읽고 어떻게 할지 고른 뒤, 짝과 지금 교실에서 함께 쓰는 것을 하나 돌봐요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '반장이 결석해서 우유 상자를 가져올 사람이 없어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '오늘 반장이 결석했어요. 우유 상자를 가져올 사람이 없어요.', choices: [
                { id: 'me', text: '"내가 가져올게!" 하고 친구와 함께 가져와요', result: '모두 제때 우유를 마셔요.', mood: '뿌듯함' },
                { id: 'wait', text: '반장이 올 때까지 기다려요', result: '오늘은 아무도 우유를 못 마셔요.', mood: '속상함', why: '반장이 없는 날에도 반의 일은 해야 해요.' },
                { id: 'teacher', text: '선생님이 가져오시길 기다려요', result: '선생님은 수업 준비로 바쁘셔요.', mood: '걱정', why: '우리가 할 수 있는 일은 우리가 해요.' }] }, target: { choice: 'me' }, difficulty: 0.1,
                levels: { easy: { toolOptions: { choices: [
                  { id: 'me', text: '"내가 가져올게!" 하고 친구와 함께 가져와요', result: '모두 제때 우유를 마셔요.', mood: '뿌듯함' },
                  { id: 'wait', text: '반장이 올 때까지 기다려요', result: '오늘은 아무도 우유를 못 마셔요.', mood: '속상함', why: '반장이 없는 날에도 반의 일은 해야 해요.' }] } } } },
              { prompt: '학급 문고 책이 바닥에 떨어져 있어요. 내가 떨어뜨린 것은 아니에요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '학급 문고 앞 바닥에 책 두 권이 떨어져 있어요. 내가 떨어뜨린 것은 아니에요.', choices: [
                { id: 'pick', text: '주워서 책장에 바르게 꽂아요', result: '다음 친구가 책을 쉽게 찾아요.', mood: '기쁨' },
                { id: 'pass', text: '내가 안 했으니 그냥 지나가요', result: '책이 밟혀 찢어져요.', mood: '속상함', why: '함께 쓰는 책은 누가 떨어뜨렸든 우리 모두의 것이에요.' }] }, target: { choice: 'pick' }, difficulty: 0.1 },
              { prompt: '모둠 친구들이 분리수거함 옆에 우유갑을 아무렇게나 쌓아 두었어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '분리수거함 옆에 우유갑이 아무렇게나 쌓여 넘어질 것 같아요.', choices: [
                { id: 'fold', text: '친구들과 함께 우유갑을 펴서 차곡차곡 넣어요', result: '분리수거함이 깔끔해졌어요.', mood: '뿌듯함' },
                { id: 'blame', text: '"누가 이렇게 했어!" 하고 화를 내요', result: '친구들 마음이 상하고 우유갑은 그대로예요.', mood: '화남', why: '누구 탓을 하기보다 함께 정리해요.' },
                { id: 'leave', text: '반장에게 치우라고 말해요', result: '반장 혼자 오래 치워요.', mood: '미안함', why: '반의 일은 반장만의 일이 아니에요.' }] }, target: { choice: 'fold' }, difficulty: 0.15 },
              { prompt: '짝과 지금 교실에서 함께 쓰는 것 하나를 골라 돌보고(책 꽂기, 칠판 닦기 등) "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"방금 짝과 돌본 뒤 교실이 어떻게 달라졌나요?" 두세 팀이 한 일을 말한다. 칠판에 적어 둔 \'반장만\'에 줄을 긋고 \'우리 모두\'라고 고쳐 쓴다. 다음 시간에는 마을에서 함께 쓰는 곳을 찾는다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { mode: 'match', slots: [{ id: 'e1', label: '공용 풀' }, { id: 'e2', label: '줄넘기 바구니' }], cards: ['줄을 감아서 바구니에 넣어요', '쓰고 나서 뚜껑을 꼭 닫아요'] }, prompt: '함께 쓰는 물건 옆에 돌보는 일 카드를 놓아 보세요.', target: { match: { e1: '쓰고 나서 뚜껑을 꼭 닫아요', e2: '줄을 감아서 바구니에 넣어요' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '반의 일은 누가 하는 것일까요?', options: ['반장만 해요', '선생님만 해요', '우리 반 모두가 해요'], answer: 2, difficulty: 0.05, explain: '함께 쓰는 교실이니 우리 모두가 나누어 해요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '함께 돌봐요',
      items: [
        { type: 'figure', wide: true, prompt: '물건과 돌보는 일을 선으로 이으세요.', tool: 'story', figures: [{ options: { mode: 'match', slots: [{ id: 'w1', label: '화분' }, { id: 'w2', label: '학급 문고' }], cards: ['책을 바르게 꽂아요', '흙이 마르면 물을 줘요'] }, caption: '' }], answer: '화분-물 주기, 학급 문고-책 꽂기' },
        { type: 'choice', prompt: '반장이 없는 날 우유 상자는?', options: ['아무도 안 가져와요', '할 수 있는 친구가 가져와요'], answer: '할 수 있는 친구가 가져와요' },
        { type: 'short', prompt: '오늘 짝과 돌본 것과 한 일을 쓰세요.' },
        { type: 'short', prompt: '내가 돌보고 싶은 교실 물건과 그 까닭을 쓰세요.' },
      ],
      easy: {
        note: '함께 쓰는 것은 함께 돌봐요.',
        items: [
          { type: 'choice', prompt: '화분을 돌보는 일은?', options: ['물을 줘요', '잎을 뜯어요'], answer: '물을 줘요' },
          { type: 'choice', prompt: '반의 일은 누가?', options: ['우리 모두', '반장만'], answer: '우리 모두' },
          { type: 'short', prompt: '돌보고 싶은 물건을 쓰세요.' },
          { type: 'draw', prompt: '그 물건을 돌보는 내 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 고를 보기가 두 개예요.',
      base: '세 쌍을 짝 짓고 세 가지 상황에서 어떻게 할지 골라요.',
      challenge: '돌보는 일이 아닌 함정 카드가 섞여요. 내가 고른 행동의 까닭을 짝에게 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 내가 어지르지 않았으면 치울 필요가 없다고 여긴다 → 함께 쓰는 것은 모두의 것이라는 것을 짚는다. ② 반장·선생님께 미룬다 → 그분들 혼자 할 수 있는지 묻는다. ③ 정리하다 친구를 탓한다 → 탓하기보다 함께 하는 말("같이 하자")을 연습한다.',
  }));

  lessons.push(L(19, {
    title: '마을에서 함께 쓰는 곳과 아끼는 방법 찾기',
    objective: '마을에서 여러 사람이 함께 쓰는 곳을 찾아 나누고, 그곳을 아껴 쓰는 행동을 고를 수 있다.',
    illustration: ART('a paper village playground, a bus stop with a bench, and a small library, with children and grandparents sharing them politely', '마을에서 함께 써요', [
      { motif: 'tree', x: 110, y: 214 }, { motif: 'house', x: 370, y: 214, color: 'sky' }, { motif: 'flower', x: 240, y: 230 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"교실에 함께 쓰는 것이 있듯이, 마을에도 함께 쓰는 곳이 있어요. 어디일까요?" 놀이터·버스 정류장·도서관 같은 대답을 칠판에 적는다. "놀이터 미끄럼틀이 망가지면 누가 불편할까요?"라고 물어 함께 쓰는 곳은 많은 사람이 함께 불편해진다는 것을 짚는다.',
        student: '우리 동네에서 여럿이 함께 쓰는 곳을 하나 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '꽃담 마을', slots: ['함께 쓰는 곳', '한 집만 쓰는 곳'], cards: ['놀이터', '우리 집 부엌'], shuffle: false }, sequence: [{ sort: { '함께 쓰는 곳': ['놀이터'], '한 집만 쓰는 곳': ['우리 집 부엌'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 함께 쓰는 곳과 한 집만 쓰는 곳', minutes: 12, tool: 'mindmap',
            teacher: '"그곳은 마을 사람 누구나 들어가 쓸 수 있나요?" 카드마다 묻는다. 아파트 놀이터를 한 집만 쓰는 곳으로 놓은 학생에게 "그 놀이터에서는 누가 놀지요?"라고 되묻는다. 가게처럼 들어갈 수는 있지만 주인이 있는 곳은 이번에는 넣지 않았다고 미리 말해 둔다.',
            task: '마을의 곳을 함께 쓰는 곳과 한 집만 쓰는 곳으로 나누어 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '마을의 곳을 함께 쓰는 곳과 한 집만 쓰는 곳으로 나누어 보세요.', toolOptions: { topic: '꽃담 마을', slots: ['함께 쓰는 곳', '한 집만 쓰는 곳'], cards: ['동네 놀이터', '버스 정류장', '우리 집 베란다', '내 방'] },
                target: { sort: { '함께 쓰는 곳': ['동네 놀이터', '버스 정류장'], '한 집만 쓰는 곳': ['우리 집 베란다', '내 방'] } }, difficulty: 0.05 },
              { prompt: '마을의 곳을 함께 쓰는 곳과 한 집만 쓰는 곳으로 나누어 보세요.', toolOptions: { topic: '꽃담 마을', slots: ['함께 쓰는 곳', '한 집만 쓰는 곳'], cards: ['마을 도서관', '공원 운동 기구', '아파트 엘리베이터', '할머니 댁 마당', '우리 집 화장실'] },
                target: { sort: { '함께 쓰는 곳': ['마을 도서관', '공원 운동 기구', '아파트 엘리베이터'], '한 집만 쓰는 곳': ['할머니 댁 마당', '우리 집 화장실'] } }, difficulty: 0.15,
                hints: ['마을 사람 여럿이 함께 쓰는지, 한 집 사람만 쓰는지 생각해요.', '아파트에 사는 여러 집이 함께 타는 것이 어느 칸에 있는지 봐요.', '도서관·운동 기구·엘리베이터는 함께 쓰고, 할머니 댁 마당과 우리 집 화장실은 한 집만 써요.'] },
              { prompt: '마을에서 함께 쓰는 것만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '함께 쓰는 것', cards: ['길가의 가로등', '공원 벤치', '공중화장실', '우리 집 자전거'] },
                target: { pick: ['길가의 가로등', '공원 벤치', '공중화장실'] }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['길가의 가로등', '공원 벤치', '공중화장실', '우리 집 자전거', '옆집 강아지 집'] } } },
                hints: ['마을 사람 누구나 쓰는지 생각해요.', '고른 것 가운데 한 집의 물건이 섞였는지 봐요.', '가로등·벤치·공중화장실은 함께 써요. 자전거와 강아지 집은 한 집 것이에요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 함께 쓰는 곳을 아끼는 행동', minutes: 15, tool: 'kitchen',
            teacher: '"그렇게 하면 다음에 쓰는 사람이 기분 좋게 쓸 수 있을까요?" 행동마다 묻는다. 그네를 오래 혼자 타는 것을 아끼는 행동으로 고른 학생에게 "기다리는 친구 마음은 어떨까요?"라고 묻는다. 마지막에는 교실 놀이 코너에서 차례 지키기를 짧게 해 본다.',
            task: '마을에서 함께 쓰는 곳을 아끼는 행동만 골라 표시해요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '놀이터를 아껴 쓰는 행동만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '놀이터에서', items: [{ id: 'turn', text: '그네는 열 번 타고 바꿔 줘요' }, { id: 'trash', text: '과자 봉지는 쓰레기통에 버려요' }, { id: 'sand', text: '모래를 미끄럼틀에 뿌려요' }, { id: 'long', text: '그네를 혼자 오래 타요' }] },
                target: { checklist: ['turn', 'trash'] }, difficulty: 0.1,
                hints: ['다음에 놀 친구가 기분 좋게 놀 수 있는지 생각해요.', '표시한 것 가운데 기다리는 친구를 불편하게 하는 일이 있는지 봐요.', '그네 바꿔 주기와 봉지 버리기만 아끼는 행동이에요.'] },
              { prompt: '버스 정류장을 아껴 쓰는 행동만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '버스 정류장에서', items: [{ id: 'line', text: '줄을 서서 기다려요' }, { id: 'seat', text: '할머니께 의자를 양보해요' }, { id: 'gum', text: '씹던 껌을 의자에 붙여요' }, { id: 'quiet', text: '큰 소리로 떠들지 않아요' }] },
                target: { checklist: ['line', 'seat', 'quiet'] }, difficulty: 0.15,
                levels: { easy: { toolOptions: { items: [{ id: 'line', text: '줄을 서서 기다려요' }, { id: 'gum', text: '씹던 껌을 의자에 붙여요' }, { id: 'quiet', text: '큰 소리로 떠들지 않아요' }] }, target: { checklist: ['line', 'quiet'] }, prompt: '버스 정류장을 아껴 쓰는 행동만 표시해 보세요. (세 가지 가운데)' } },
                hints: ['함께 기다리는 사람들이 편한지 생각해요.', '의자를 더럽히는 행동이 섞였는지 봐요.', '껌 붙이기만 빼고 모두 아끼는 행동이에요.'] },
              { prompt: '마을 도서관을 아껴 쓰는 행동만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '마을 도서관에서', items: [{ id: 'back', text: '읽은 책은 반납대에 놓아요' }, { id: 'snack', text: '책을 읽으며 과자를 먹어요' }, { id: 'date', text: '빌린 책은 날짜를 지켜 돌려줘요' }, { id: 'fold', text: '읽던 쪽을 접어 표시해요' }] },
                target: { checklist: ['back', 'date'] }, difficulty: 0.2,
                hints: ['다음 사람이 책을 깨끗하게 읽을 수 있는지 생각해요.', '책장을 접거나 더럽히는 행동이 섞였는지 봐요.', '반납대에 놓기와 날짜 지키기만 아끼는 행동이에요. 읽던 쪽은 책갈피로 표시해요.'] },
              { prompt: '교실 놀이 코너에서 모둠 친구와 차례를 지켜 놀이 기구를 바꾸어 써 보고 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"우리 동네 함께 쓰는 곳에서 내가 오늘부터 지킬 행동 하나는 무엇인가요?" 두세 명에게 듣는다. 출구 질문 뒤 "다음 시간에는 우리 반 일을 나누어 맡아 봐요"라고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', basket: '함께 쓰는 곳', cards: ['동네 체육관', '우리 집 거실', '마을 쉼터 정자'] }, prompt: '마을에서 함께 쓰는 곳만 바구니에 넣어 보세요.', target: { pick: ['동네 체육관', '마을 쉼터 정자'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '공원 벤치에 과자 부스러기가 떨어졌어요. 어떻게 할까요?', options: ['그냥 가요', '털어서 쓰레기통에 버려요'], answer: 1, difficulty: 0.05, explain: '다음 사람이 앉을 수 있게 깨끗이 해요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '마을에서 함께 쓰는 곳',
      items: [
        { type: 'table', prompt: '함께 쓰는 곳과 아끼는 방법을 쓰세요.', columns: ['함께 쓰는 곳', '아끼는 방법'], cells: [['놀이터', ''], ['버스 정류장', ''], ['', '']] },
        { type: 'check', prompt: '도서관을 아끼는 행동에 ✓ 하세요.', options: ['날짜를 지켜 돌려줘요', '책장을 접어요', '읽은 책은 반납대에 놓아요'] },
        { type: 'choice', prompt: '한 집만 쓰는 곳은?', options: ['공원 벤치', '우리 집 부엌', '가로등'], answer: '우리 집 부엌' },
        { type: 'draw', prompt: '함께 쓰는 곳을 아끼는 내 모습을 그려 보세요.' },
      ],
      easy: {
        note: '다음 사람이 기분 좋게 쓸 수 있게!',
        items: [
          { type: 'choice', prompt: '함께 쓰는 곳은?', options: ['놀이터', '내 방'], answer: '놀이터' },
          { type: 'choice', prompt: '그네를 탈 때는?', options: ['바꿔 줘요', '혼자 오래 타요'], answer: '바꿔 줘요' },
          { type: 'short', prompt: '내가 지킬 행동을 쓰세요.' },
          { type: 'draw', prompt: '놀이터에서 차례를 지키는 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 정류장 행동은 세 가지 가운데서 골라요.',
      base: '함께 쓰는 곳을 나누고 아끼는 행동을 골라요.',
      challenge: '다섯 장 카드와 함정 카드를 나누어요. 아끼는 행동의 까닭을 짝에게 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 아파트 시설을 우리 집 것으로 여긴다 → 여러 집이 함께 쓴다는 것을 짚는다. ② 놀이 기구를 먼저 잡은 사람이 끝까지 쓴다고 여긴다 → 기다리는 사람의 마음을 묻는다. ③ 책장 접기를 괜찮다고 여긴다 → 책갈피를 나누어 주고 써 보게 한다.',
  }));

  lessons.push(L(20, {
    title: '조건을 보고 1인 1역 반 일 나누기',
    objective: '친구들의 상황과 반 일의 조건을 견주어 반 일을 한 사람에 하나씩 나누고, 하고 싶은 일이 겹칠 때 정하는 방법을 고를 수 있다.',
    illustration: ART('a classroom job chart made of paper pockets with small cards showing a watering can, a milk crate, a window and a book, children choosing cards', '반 일을 나누어요', [
      { motif: 'house', x: 110, y: 214, color: 'peach' }, { motif: 'star', x: 380, y: 86 }, { motif: 'tree', x: 400, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"반의 일이 열 가지인데 한 사람이 다 하면 어떻게 될까요?" 반응을 듣고 "한 사람이 하나씩 맡으면 모두 조금씩만 해도 교실이 잘 돌아가요. 이것을 1인 1역이라고 해요"라고 말한다. 칠판에 반 일 카드(화분, 우유, 창문, 학급 문고)를 붙이고 각 일을 언제 하는지 함께 말한다.',
        student: '우리 반에 필요한 일을 하나 말하고, 그 일을 언제 하는지 말해 봐요.',
        demo: { tool: 'story', options: { mode: 'match', slots: [{ id: 'd1', label: '아침에 가장 일찍 오는 준호' }], cards: ['아침에 화분에 물 주기'], shuffle: false }, sequence: [{ match: { d1: '아침에 화분에 물 주기' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 조건에 맞게 반 일 나누기', minutes: 14, tool: 'story',
            teacher: '"친구의 말에서 단서를 찾아요. 언제 오는지, 자리가 어디인지, 무엇을 잘하는지 밑줄을 그어요." 단서와 일을 이어 맞게 놓았는지 말로 설명하게 한다. 한 친구에게 일 두 개를 주려는 학생에게 "1인 1역은 몇 개씩이었지요?"라고 묻는다.',
            task: '친구들의 상황을 읽고 반 일을 한 사람에 하나씩 맞게 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '친구의 상황에 맞게 반 일을 하나씩 놓아 보세요.', toolOptions: { mode: 'match', slots: [{ id: 'm1', label: '아침에 가장 일찍 오는 준호' }, { id: 'm2', label: '자리가 창가인 민지' }, { id: 'm3', label: '책 읽기를 좋아하는 서아' }], cards: ['아침에 화분 물 주기', '창문 열고 닫기', '학급 문고 정리하기'] },
                target: { match: { m1: '아침에 화분 물 주기', m2: '창문 열고 닫기', m3: '학급 문고 정리하기' } }, difficulty: 0.1,
                hints: ['친구의 말에 숨은 단서(언제, 어디, 무엇을 좋아하는지)를 찾아요.', '자리가 어디인지가 단서인 친구에게 놓은 일을 다시 봐요.', '일찍 오는 준호는 아침 화분, 창가 민지는 창문, 책 좋아하는 서아는 학급 문고예요.'] },
              { prompt: '친구의 상황에 맞게 반 일을 하나씩 놓아 보세요.', toolOptions: { mode: 'match', slots: [{ id: 'm1', label: '자리가 앞문 바로 옆인 하준' }, { id: 'm2', label: '급식을 가장 먼저 먹는 민지' }, { id: 'm3', label: '키가 커서 칠판 위까지 닿는 준호' }], cards: ['쉬는 시간에 앞문 닫기', '점심 뒤 우유갑 모으기', '칠판 위쪽 닦기'] },
                target: { match: { m1: '쉬는 시간에 앞문 닫기', m2: '점심 뒤 우유갑 모으기', m3: '칠판 위쪽 닦기' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['쉬는 시간에 앞문 닫기', '점심 뒤 우유갑 모으기', '칠판 위쪽 닦기', '아침에 화분 물 주기'] } } },
                hints: ['친구의 말에 숨은 단서(언제, 어디, 무엇을 잘하는지)를 찾아요.', '키가 단서인 친구에게 높은 곳 일이 갔는지 봐요.', '앞문 옆 하준은 앞문, 먼저 먹는 민지는 우유갑, 키 큰 준호는 칠판 위쪽이에요.'] },
              { prompt: '반 일을 하는 때에 따라 나누어 보세요.', toolOptions: { mode: 'sort', slots: ['아침에 하는 일', '점심 뒤에 하는 일', '집에 갈 때 하는 일'], cards: ['화분에 물 주기', '우유갑 펴서 모으기', '창문 닫고 불 끄기', '의자를 책상 위에 올리기'] },
                target: { sort: { '아침에 하는 일': ['화분에 물 주기'], '점심 뒤에 하는 일': ['우유갑 펴서 모으기'], '집에 갈 때 하는 일': ['창문 닫고 불 끄기', '의자를 책상 위에 올리기'] } }, difficulty: 0.2,
                hints: ['그 일을 하지 않으면 언제 불편해지는지 생각해요.', '불 끄기처럼 교실을 떠날 때 하는 일이 바른 칸에 있는지 봐요.', '화분은 아침, 우유갑은 점심 뒤, 창문·불 끄기와 의자 올리기는 집에 갈 때예요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 하고 싶은 일이 겹칠 때', minutes: 13, tool: 'emotion',
            teacher: '"민지와 서아가 둘 다 화분 일을 하고 싶대요. 어떻게 정하면 둘 다 기분이 괜찮을까요?" 보기마다 결과를 보고 이야기한다. 힘으로 가져가는 보기를 고른 학생에게 "진 친구는 다음에도 반 일을 즐겁게 할까요?"라고 묻는다. 마지막으로 실제로 우리 반 1인 1역 표에 이름 붙임쪽지를 붙인다.',
            task: '하고 싶은 일이 겹치는 상황에서 어떻게 정할지 고르고, 우리 반 1인 1역 표에 내 일을 붙여요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '민지와 서아가 둘 다 화분 물 주기를 하고 싶어 해요. 어떻게 정할까요?', toolOptions: { mode: 'branch', situation: '민지와 서아가 둘 다 화분 물 주기를 하고 싶어 해요.', choices: [
                { id: 'turn', text: '한 주씩 번갈아 하기로 해요', result: '둘 다 화분을 돌볼 수 있어요.', mood: '편안함' },
                { id: 'grab', text: '먼저 카드를 잡은 사람이 해요', result: '늦은 친구가 속상해서 울어요.', mood: '속상함', why: '빨리 잡는 것은 정하는 약속이 아니에요.' },
                { id: 'both', text: '둘 다 안 하기로 해요', result: '화분이 시들어요.', mood: '슬픔', why: '아무도 안 하면 화분은 누가 돌볼까요?' }] }, target: { choice: 'turn' }, difficulty: 0.1
                , levels: { easy: { toolOptions: { choices: [{ id: 'turn', text: '한 주씩 번갈아 하기로 해요', result: '둘 다 화분을 돌볼 수 있어요.', mood: '편안함' }, { id: 'grab', text: '먼저 카드를 잡은 사람이 해요', result: '늦은 친구가 속상해서 울어요.', mood: '속상함', why: '빨리 잡는 것은 정하는 약속이 아니에요.' }] } } } },
              { prompt: '아무도 하고 싶어 하지 않는 우유갑 모으기는 어떻게 정할까요?', toolOptions: { mode: 'branch', situation: '우유갑 모으기는 아무도 하고 싶어 하지 않아요.', choices: [
                { id: 'rotate', text: '돌아가며 한 주씩 맡기로 해요', result: '모두 조금씩 해서 공평해요.', mood: '편안함' },
                { id: 'teacher', text: '선생님이 하시게 해요', result: '선생님 일이 너무 많아져요.', mood: '미안함', why: '우리가 할 수 있는 반 일은 우리가 나누어요.' },
                { id: 'leader', text: '반장에게 맡겨요', result: '반장만 매일 힘들어요.', mood: '속상함', why: '반의 일은 반장만의 일이 아니에요.' }] }, target: { choice: 'rotate' }, difficulty: 0.15
                , levels: { easy: { toolOptions: { choices: [{ id: 'rotate', text: '돌아가며 한 주씩 맡기로 해요', result: '모두 조금씩 해서 공평해요.', mood: '편안함' }, { id: 'teacher', text: '선생님이 하시게 해요', result: '선생님 일이 너무 많아져요.', mood: '미안함', why: '우리가 할 수 있는 반 일은 우리가 나누어요.' }] } } } },
              { prompt: '우리 반 1인 1역 표에서 내가 맡을 일을 고르고 이름 붙임쪽지를 붙인 뒤 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"내가 맡은 일은 언제 하는 일인가요?" 모둠 안에서 돌아가며 각자 맡은 일과 하는 때를 한 마디씩 말하게 하고, 두 모둠만 반 전체에 들려준다. 다음 시간에는 마을을 위해 일하는 분들과 우리가 할 수 있는 일을 찾는다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { mode: 'match', slots: [{ id: 'e1', label: '그림 그리기를 좋아하는 하준' }, { id: 'e2', label: '집에 갈 때 가장 늦게 나가는 서아' }], cards: ['교실 불 끄기', '게시판 꾸미기'] }, prompt: '친구의 상황에 맞게 반 일을 하나씩 놓아 보세요.', target: { match: { e1: '게시판 꾸미기', e2: '교실 불 끄기' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '두 친구가 같은 일을 하고 싶을 때 좋은 방법은?', options: ['힘센 친구가 해요', '번갈아 하기로 정해요', '둘 다 그만둬요'], answer: 1, difficulty: 0.1, explain: '번갈아 하면 둘 다 그 일을 할 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '우리 반 1인 1역',
      items: [
        { type: 'table', prompt: '반 일을 하는 때를 쓰세요.', columns: ['반 일', '하는 때'], cells: [['화분 물 주기', ''], ['우유갑 모으기', ''], ['창문 닫고 불 끄기', '']] },
        { type: 'choice', prompt: '자리가 창가인 친구에게 알맞은 일은?', options: ['칠판 위쪽 닦기', '창문 열고 닫기', '우유갑 모으기'], answer: '창문 열고 닫기' },
        { type: 'blank', prompt: '내가 맡은 일: (        )   하는 때: (        )', answer: '' },
        { type: 'short', prompt: '내가 그 일을 고른 까닭을 쓰세요.' },
      ],
      easy: {
        note: '친구의 말에서 단서를 찾아요.',
        items: [
          { type: 'choice', prompt: '아침에 일찍 오는 친구에게 알맞은 일은?', options: ['아침 화분 물 주기', '집에 갈 때 불 끄기'], answer: '아침 화분 물 주기' },
          { type: 'blank', prompt: '내가 맡은 일: (        )', answer: '' },
          { type: 'short', prompt: '그 일을 하는 때를 쓰세요.' },
          { type: 'draw', prompt: '내가 맡은 일을 하는 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 단서 낱말에 밑줄을 긋고 놓아요.',
      base: '세 친구에게 일을 하나씩 놓고, 하는 때에 따라 나누어요.',
      challenge: '남는 일 카드가 섞여 있어 단서에 맞지 않는 카드를 남겨요. 겹칠 때 정하는 다른 방법도 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 하고 싶은 일만 보고 조건을 무시한다 → 단서에 밑줄을 긋게 한다. ② 겹칠 때 힘이나 빠르기로 정한다 → 번갈아·가위바위보처럼 함께 정한 약속을 쓴다. ③ 인기 없는 일을 피한다 → 돌아가며 맡는 방법을 반 전체가 정한다. 실제 1인 1역은 학급 사정에 맞게 일의 수를 학생 수와 맞춘다.',
  }));

  lessons.push(L(21, {
    title: '마을을 위해 어린이도 할 수 있는 일 고르기',
    objective: '마을을 위한 일 가운데 어른이 맡는 일과 어린이도 할 수 있는 일을 나누고, 안전하게 할 수 있는 일을 하나 고를 수 있다.',
    illustration: ART('a paper village street where a street sweeper cleans, and children carefully put litter into a bin and line up at a bus stop', '마을을 위해 할 수 있는 일', [
      { motif: 'house', x: 100, y: 214 }, { motif: 'tree', x: 380, y: 214 }, { motif: 'leaf', x: 250, y: 232 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"8차시에 만난 마을에서 일하는 분들을 기억하나요? 그분들 덕분에 마을이 어떻게 되었지요?" 환경미화원, 경찰관 이야기를 다시 꺼낸다. "어른들이 하시는 일 가운데 우리가 함께 도울 수 있는 일도 있을까요?" 대답을 듣고 "단, 위험한 일은 어른의 몫이에요"라고 덧붙인다.',
        student: '마을이 깨끗해지도록 내가 할 수 있는 일을 하나 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '마을을 위한 일', slots: ['어른이 맡는 일', '어린이도 할 수 있는 일'], cards: ['소방차 운전하기', '쓰레기를 쓰레기통에 넣기'], shuffle: false }, sequence: [{ sort: { '어른이 맡는 일': ['소방차 운전하기'], '어린이도 할 수 있는 일': ['쓰레기를 쓰레기통에 넣기'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 어른이 맡는 일과 어린이도 할 수 있는 일', minutes: 13, tool: 'mindmap',
            teacher: '"이 일을 2학년이 혼자 하면 안전할까요? 도구나 자격이 필요할까요?" 기준을 칠판에 적고 카드마다 따진다. 찻길 쓰레기 줍기를 어린이도 할 수 있는 일에 놓은 학생에게 "찻길에서 쓰레기를 주우면 무엇이 위험할까요?"라고 묻는다.',
            task: '마을을 위한 일을 어른이 맡는 일과 어린이도 할 수 있는 일로 나누어 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '마을을 위한 일을 두 가지로 나누어 보세요.', toolOptions: { topic: '마을을 위한 일', slots: ['어른이 맡는 일', '어린이도 할 수 있는 일'], cards: ['버스 운전하기', '빌린 책 날짜 지켜 돌려주기', '고장 난 가로등 고치기', '분리배출 날짜 지키기'] },
                target: { sort: { '어른이 맡는 일': ['버스 운전하기', '고장 난 가로등 고치기'], '어린이도 할 수 있는 일': ['빌린 책 날짜 지켜 돌려주기', '분리배출 날짜 지키기'] } }, difficulty: 0.1,
                hints: ['그 일을 2학년이 혼자 해도 안전한지, 자격이나 도구가 필요한지 생각해요.', '전기나 큰 차를 다루는 일이 어느 칸에 있는지 봐요.', '버스 운전과 가로등 고치기는 어른의 일, 책 돌려주기와 분리배출은 어린이도 해요.'] },
              { prompt: '마을을 위한 일을 두 가지로 나누어 보세요.', toolOptions: { topic: '마을을 위한 일', slots: ['어른이 맡는 일', '어린이도 할 수 있는 일'], cards: ['찻길에 떨어진 쓰레기 줍기', '놀이터 쓰레기 줍기', '불이 난 집에 들어가기', '이웃 어른께 인사하기'] },
                target: { sort: { '어른이 맡는 일': ['찻길에 떨어진 쓰레기 줍기', '불이 난 집에 들어가기'], '어린이도 할 수 있는 일': ['놀이터 쓰레기 줍기', '이웃 어른께 인사하기'] } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['찻길에 떨어진 쓰레기 줍기', '놀이터 쓰레기 줍기', '불이 난 집에 들어가기', '이웃 어른께 인사하기', '엘리베이터 버튼 장난치기'] } } },
                hints: ['같은 쓰레기 줍기라도 어디에서 하는지에 따라 안전한지가 달라져요.', '차가 다니는 곳에서 하는 일이 어느 칸에 있는지 다시 봐요.', '찻길과 불난 집은 위험해서 어른의 일이에요. 놀이터 쓰레기 줍기와 인사는 어린이도 해요. 장난은 마을을 위한 일이 아니라 남겨요.'] },
              { prompt: '마을을 위해 2학년이 안전하게 할 수 있는 일만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '안전하게 할 수 있는 일', cards: ['우리 집 앞 눈을 어른과 함께 쓸기', '공원에서 꽃을 꺾지 않기', '혼자 밤에 동네 순찰하기', '깨진 유리 맨손으로 줍기'] },
                target: { pick: ['우리 집 앞 눈을 어른과 함께 쓸기', '공원에서 꽃을 꺾지 않기'] }, difficulty: 0.15,
                hints: ['다칠 수 있는 일인지, 어른과 함께하는 일인지 생각해요.', '고른 일 가운데 다칠 수 있는 일이 있는지 봐요.', '어른과 함께 눈 쓸기와 꽃 꺾지 않기가 안전한 일이에요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 고마운 마음 전하고 할 일 정하기', minutes: 14, tool: 'emotion', pair: true,
            teacher: '"마을을 위해 일하시는 분께 우리는 어떤 마음일까요?" 상황에 맞는 마음 카드를 놓은 뒤, 짝과 그분께 드릴 고마움 쪽지를 쓴다. 쪽지에는 고마운 일 하나와 내가 할 일 하나를 꼭 넣게 한다. 쪽지는 다음 주 학교 둘레 환경미화원께 함께 전해 드린다.',
            task: '상황에 맞는 마음 카드를 놓고, 짝과 마을을 위해 일하시는 분께 고마움 쪽지를 써요.',
            levels: CARD_LV,
            items: [
              { prompt: '상황에 어울리는 마음 카드를 놓아 보세요.', toolOptions: { cards: ['고마움', '미안함', '뿌듯함'], slots: [{ id: 's1', label: '새벽에 길을 쓸어 주시는 분을 보았어요' }, { id: 's2', label: '내가 버린 과자 봉지를 그분이 주우셨어요' }, { id: 's3', label: '내가 놀이터 쓰레기를 주워 깨끗해졌어요' }] },
                target: { match: { s1: '고마움', s2: '미안함', s3: '뿌듯함' } }, difficulty: 0.15,
                hints: ['그 상황에서 내가 무엇을 했는지, 남이 무엇을 해 주었는지 생각해요.', '내 실수를 남이 해결해 준 상황의 마음을 다시 봐요.', '남이 해 준 일은 고마움, 내 실수를 치워 주신 일은 미안함, 내가 해낸 일은 뿌듯함이에요.'] },
              { prompt: '경찰관이 학교 앞에서 길 건너기를 도와주셨어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '아침마다 학교 앞에서 경찰관이 길 건너기를 도와주셔요.', choices: [
                { id: 'thanks', text: '"고맙습니다!" 하고 인사해요', result: '경찰관이 웃으며 손을 흔들어 주셔요.', mood: '기쁨' },
                { id: 'ignore', text: '당연한 일이라 그냥 지나가요', result: '서로 마음을 나눌 기회를 놓쳐요.', mood: '슬픔', why: '고마운 일에는 인사로 마음을 전해요.' }] }, target: { choice: 'thanks' }, difficulty: 0.05 },
              { prompt: '짝과 마을을 위해 일하시는 분께 고마운 일 하나와 내가 할 일 하나를 넣어 고마움 쪽지를 쓰고 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"고마움 쪽지에 적은 내가 할 일을 짝에게 다시 말해 볼까요?" 쪽지를 모아 반 바구니에 넣는다. 출구 질문 뒤 다음 시간에는 교실 지도에 우리 반 일이 일어나는 곳을 표시한다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '마을을 위한 일', slots: ['어른이 맡는 일', '어린이도 할 수 있는 일'], cards: ['다리 고치기', '동생 손잡고 횡단보도 건너기', '택배 차 운전하기', '마을 꽃밭에 물 주기 돕기'] }, prompt: '마을을 위한 일을 두 가지로 나누어 보세요.', target: { sort: { '어른이 맡는 일': ['다리 고치기', '택배 차 운전하기'], '어린이도 할 수 있는 일': ['동생 손잡고 횡단보도 건너기', '마을 꽃밭에 물 주기 돕기'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '길에 깨진 유리병이 있어요. 어떻게 할까요?', options: ['맨손으로 주워요', '어른께 알려요', '발로 차서 치워요'], answer: 1, difficulty: 0.05, explain: '다칠 수 있는 일은 어른께 알려요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '마을을 위해 할 수 있는 일',
      items: [
        { type: 'table', prompt: '마을을 위한 일을 나누어 쓰세요.', columns: ['어른이 맡는 일', '어린이도 할 수 있는 일'], rows: 2 },
        { type: 'choice', prompt: '2학년이 안전하게 할 수 있는 일은?', options: ['찻길 쓰레기 줍기', '놀이터 쓰레기 줍기'], answer: '놀이터 쓰레기 줍기' },
        { type: 'short', prompt: '마을을 위해 일하시는 분께 고마운 일을 쓰세요.' },
        { type: 'short', prompt: '내가 마을을 위해 할 일을 하나 쓰세요.' },
      ],
      easy: {
        note: '위험한 일은 어른께!',
        items: [
          { type: 'choice', prompt: '어린이도 할 수 있는 일은?', options: ['이웃께 인사하기', '버스 운전하기'], answer: '이웃께 인사하기' },
          { type: 'choice', prompt: '깨진 유리를 보면?', options: ['어른께 알려요', '맨손으로 주워요'], answer: '어른께 알려요' },
          { type: 'short', prompt: '내가 할 일을 쓰세요.' },
          { type: 'draw', prompt: '고마운 분께 인사하는 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 쪽지는 "고맙습니다. 저는 ○○을 할게요." 틀에 채워 써요.',
      base: '두 가지로 나누고 안전한 일을 골라 쪽지를 써요.',
      challenge: '장소에 따라 달라지는 일(찻길과 놀이터)과 함정 카드를 나누어요. 쪽지에 할 일을 두 가지 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 착한 일이면 위험해도 해야 한다고 여긴다 → 깨진 유리·찻길·불은 어른께 알리는 것이 바른 일이라고 짚는다. ② 마을 일은 어른만의 일이라고 여긴다 → 쓰레기 넣기·인사처럼 작은 일도 마을을 바꾼다는 것을 보여 준다. ③ 고마움을 당연함으로 여긴다 → 그분이 하루 쉬면 어떻게 될지 떠올리게 한다. 쪽지를 전할 때는 미리 학교와 해당 기관에 알린다.',
  }));

  lessons.push(L(22, {
    title: '교실 지도에 반 일 하는 곳 표시하고 해 보기',
    objective: '교실 지도에서 맡은 반 일을 하는 곳을 찾아 표시하고, 그 일을 하는 차례를 정해 직접 해 볼 수 있다.',
    illustration: ART('a top-down paper classroom map with small job icons placed at the window, the door, the bookshelf and the recycling bin, children placing pins', '반 일 지도', [
      { motif: 'house', x: 110, y: 214, color: 'lavender' }, { motif: 'flower', x: 360, y: 228 }, { motif: 'star', x: 380, y: 86 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"내가 맡은 반 일은 교실 어디에서 하나요?" 20차시에 정한 1인 1역 표를 보며 몇 명에게 묻는다. 칠판 쪽을 위로 둔 교실 지도를 다시 띄우고 "오늘은 반 일 지도를 만들고, 내 일을 차례대로 직접 해 봐요"라고 말한다.',
        student: '내가 맡은 반 일을 교실 어디에서 하는지 손가락으로 가리켜 봐요.',
        demo: { tool: 'map', options: { title: '우리 교실', grid: [4, 3], places: [ROOM.plant, ROOM.board, ROOM.trash] }, sequence: [{ place: '창가 화분' }] },
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 반 일 하는 곳 찾기', minutes: 12, tool: 'map',
            teacher: '"이 일을 하려면 교실 어디로 가야 할까요?" 일에 쓰는 물건이 있는 곳을 먼저 떠올리게 한다. 지도에 곳 이름이 있어도 실제 교실과 같은 자리인지 손으로 가리키며 맞추게 한다.',
            task: '반 일을 읽고 그 일을 하는 곳을 교실 지도에서 찾아 핀을 꽂아요.',
            levels: MAP_LV,
            items: [
              { prompt: '쉬는 시간이 끝나면 앞문을 닫는 일을 맡았어요. 일하는 곳에 핀을 꽂아 보세요.', toolOptions: { title: '우리 교실', places: [ROOM.door, ROOM.books, ROOM.trash, ROOM.plant] }, target: { place: '앞문' }, difficulty: 0.05 },
              { prompt: '그림 그린 뒤 물감 붓을 씻어 말리는 일을 맡았어요. 일하는 곳에 핀을 꽂아 보세요.', toolOptions: { title: '우리 교실', places: [ROOM.sink, ROOM.board, ROOM.lockers, ROOM.desk] }, target: { place: '수돗가' }, difficulty: 0.1 },
              { prompt: '친구들이 낸 알림장을 모아 선생님께 드리는 일을 맡았어요. 모은 알림장을 놓을 곳에 핀을 꽂아 보세요.', toolOptions: { title: '우리 교실', places: [ROOM.desk, ROOM.books, ROOM.sink, ROOM.door] }, target: { place: '선생님 책상' }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { places: [ROOM.desk, ROOM.books, ROOM.sink, ROOM.door, ROOM.board, ROOM.lockers] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 내 반 일을 차례대로 해 보기', minutes: 16, tool: 'story',
            teacher: '"우유 당번은 무엇부터 할까요?" 차례를 정한 뒤 실제로 2분 동안 자기 반 일을 해 보게 한다(화분, 칠판, 책상 줄 등). 선생님은 돌아다니며 "다음 차례는 무엇이지요?"라고 묻고, 끝까지 마무리했는지(상자 제자리 놓기 등)를 본다.',
            task: '반 일을 하는 차례대로 카드를 놓고, 내가 맡은 반 일을 직접 해 봐요.',
            levels: CARD_LV,
            items: [
              { prompt: '우유 당번이 하는 일을 차례대로 놓아 보세요.', toolOptions: { slots: 4, cards: [{ id: '가져옴', text: '우유 상자를 가져와요', motif: 'house' }, { id: '나눔', text: '한 사람에 하나씩 나눠요', motif: 'star' }, { id: '모음', text: '빈 우유갑을 펴서 모아요', motif: 'leaf' }, { id: '돌려놓음', text: '상자를 제자리에 갖다 놓아요', motif: 'flower' }] },
                target: { order: ['가져옴', '나눔', '모음', '돌려놓음'] }, difficulty: 0.1,
                hints: ['그 일이 끝나야 다음 일을 할 수 있는 차례를 찾아요.', '빈 우유갑을 모으는 일이 나누기보다 앞에 있지 않은지 봐요.', '가져오기 → 나누기 → 빈 갑 모으기 → 상자 돌려놓기예요.'] },
              { prompt: '화분 당번이 하는 일을 차례대로 놓아 보세요.', toolOptions: { slots: ['처음', '가운데', '끝'], cards: [{ id: '흙', text: '손가락으로 흙이 말랐는지 봐요', motif: 'leaf' }, { id: '물', text: '물뿌리개로 천천히 물을 줘요', motif: 'cloud' }, { id: '닦기', text: '흘린 물을 걸레로 닦아요', motif: 'sun' }] },
                target: { order: ['흙', '물', '닦기'] }, difficulty: 0.1 },
              { prompt: '내가 맡은 반 일을 2분 동안 차례대로 직접 해 보고 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"내 일을 해 보니 마지막에 빠뜨린 것은 없었나요?" 상자를 제자리에 두지 않거나 흘린 물을 그대로 둔 경우를 짚는다. 반 일 지도를 교실 뒤에 붙이고 "다음 시간부터 맡은 일을 정한 날에 빠뜨리지 않고 해 봐요"라고 말한다.',
        exitTicket: [
          { type: 'tool', tool: 'map', options: { title: '우리 교실', grid: [4, 3], places: [ROOM.books, ROOM.trash, ROOM.door, ROOM.sink] }, prompt: '분리배출 당번이 종이와 플라스틱을 나누는 곳에 핀을 꽂아 보세요.', target: { place: '분리수거함' }, difficulty: 0.1 },
          { type: 'choice', prompt: '화분에 물을 준 뒤 마지막에 할 일은?', options: ['흘린 물 닦기', '물뿌리개 던져 두기'], answer: 0, difficulty: 0.05, explain: '흘린 물을 닦아야 친구가 미끄러지지 않아요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '반 일 지도',
      items: [
        { type: 'figure', wide: true, prompt: '내가 반 일을 하는 곳에 ○ 하세요.', tool: 'map', figures: [{ options: { title: '우리 교실', grid: [4, 3], places: [ROOM.board, ROOM.desk, ROOM.books, ROOM.sink, ROOM.plant, ROOM.lockers, ROOM.trash, ROOM.door] }, caption: '' }], answer: '학생마다 다름' },
        { type: 'table', prompt: '내 반 일을 하는 차례를 쓰세요.', columns: ['차례', '할 일'], cells: [['1', ''], ['2', ''], ['3', '']] },
        { type: 'choice', prompt: '우유 당번이 가장 마지막에 할 일은?', options: ['우유 나누기', '상자 제자리에 놓기', '상자 가져오기'], answer: '상자 제자리에 놓기' },
        { type: 'short', prompt: '내 반 일을 해 보고 어려웠던 점을 쓰세요.' },
      ],
      easy: {
        note: '마지막 정리까지가 반 일이에요.',
        items: [
          { type: 'blank', prompt: '내가 맡은 일: (        )', answer: '' },
          { type: 'choice', prompt: '물을 준 뒤에는?', options: ['흘린 물 닦기', '그냥 가기'], answer: '흘린 물 닦기' },
          { type: 'short', prompt: '내 반 일의 첫 번째 할 일을 쓰세요.' },
          { type: 'draw', prompt: '반 일을 하는 내 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '지도 칸이 적고 핀을 꽂으면 자리 이름이 보여요. 차례 카드는 세 장부터 해요.',
      base: '네 장 차례를 놓고 내 반 일을 차례대로 해요.',
      challenge: '넓은 지도에서 곳이 더 많아요. 내 반 일 차례를 네 단계로 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 일을 시작만 하고 마무리(제자리 놓기·닦기)를 빠뜨린다 → 마지막 카드를 크게 붙여 둔다. ② 교실 지도와 실제 자리를 맞추지 못한다 → 지도를 들고 그 자리에 서 보게 한다. ③ 2분 안에 끝나지 않는 일 → 일의 한 부분만 해 보게 한다. 교실 지도 자리는 우리 교실에 맞게 바꾼다.',
  }));

  // ───────────────────────── 23~27차시: 맡은 일을 정한 날에 하고 친구 돕기(바른 생활 실천) ─────────────────────────

  lessons.push(L(23, {
    title: '당번표를 읽고 오늘 할 일 빠짐없이 고르기',
    objective: '당번표에서 요일과 맡은 일을 읽고 오늘 내가 할 일을 빠짐없이 고르며, 잊지 않는 방법을 정할 수 있다.',
    illustration: ART('a paper weekly job chart on the classroom wall with day columns and small job icons, a child checking it with a finger', '오늘 내 일은?', [
      { motif: 'house', x: 110, y: 214, color: 'buttercup' }, { motif: 'sun', x: 300, y: 70, s: 0.5 }, { motif: 'tree', x: 420, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"어제 화분 당번은 물을 주었을까요?" 화분 흙을 함께 만져 보게 한다. 마른 흙이면 "당번이 있는데도 왜 빠졌을까요?"라고 묻고 "날마다 하는 일인지, 정한 요일에만 하는 일인지 헷갈리면 빠뜨리기 쉬워요"라고 말한다. 칠판에 요일 칸이 있는 당번표를 붙이고 오늘 요일을 함께 찾는다.',
        student: '오늘은 무슨 요일인지, 오늘 내가 할 반 일이 있는지 말해 봐요.',
        demo: { tool: 'kitchen', options: { mode: 'checklist', title: '오늘 할 일', items: [{ id: 'plant', text: '화분 물 주기' }, { id: 'board', text: '칠판 닦기' }] }, sequence: [{ checklist: ['plant'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 당번표 읽고 오늘 할 일 고르기', minutes: 14, tool: 'kitchen',
            teacher: '"문항에서 요일 낱말과 \'날마다\'에 동그라미를 쳐요." 날마다 하는 일을 빠뜨리는 학생이 많으니 "날마다는 오늘도 들어 있나요?"라고 묻는다. 다른 친구의 일을 함께 고른 학생에게는 "그 일은 누가 맡았지요?"라고 묻는다.',
            task: '친구가 맡은 일과 요일을 읽고, 오늘 그 친구가 할 일만 빠짐없이 표시해요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '준호는 화요일·목요일에 화분 물 주기, 날마다 의자 올리기를 맡았어요. 목요일에 준호가 할 일만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '목요일 준호의 일', items: [{ id: 'plant', text: '화분 물 주기' }, { id: 'chair', text: '의자 올리기' }, { id: 'board', text: '칠판 닦기' }, { id: 'milk', text: '우유 나누기' }] },
                target: { checklist: ['plant', 'chair'] }, difficulty: 0.15,
                hints: ['요일 낱말과 \'날마다\'를 찾아 오늘이 들어 있는지 따져 봐요.', '날마다 하는 일을 빠뜨리지 않았는지, 준호가 맡지 않은 일을 고르지 않았는지 봐요.', '목요일 화분 물 주기와 날마다 하는 의자 올리기, 이 두 가지예요.'] },
              { prompt: '민지는 월요일에 학급 문고 정리, 수요일에 칠판 닦기를 맡았어요. 화요일에 민지가 할 일만 표시해 보세요. 할 일이 없으면 \'오늘은 내 당번이 없어요\'를 표시해요.', toolOptions: { mode: 'checklist', title: '화요일 민지의 일', items: [{ id: 'book', text: '학급 문고 정리' }, { id: 'board', text: '칠판 닦기' }, { id: 'none', text: '오늘은 내 당번이 없어요' }] },
                target: { checklist: ['none'] }, difficulty: 0.2,
                hints: ['요일 낱말을 찾아 오늘 요일과 같은 것이 있는지 견주어 봐요.', '월요일·수요일 일 가운데 화요일에 하는 일이 있는지 다시 봐요.', '화요일에는 민지의 당번이 없어요.'] },
              { prompt: '서아는 날마다 창문 닫기, 금요일에 분리수거함 비우기를 맡았어요. 금요일에 서아가 할 일만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '금요일 서아의 일', items: [{ id: 'window', text: '창문 닫기' }, { id: 'recycle', text: '분리수거함 비우기' }, { id: 'plant', text: '화분 물 주기' }, { id: 'light', text: '불 끄기' }] },
                target: { checklist: ['window', 'recycle'] }, difficulty: 0.15,
                levels: { challenge: { prompt: '서아는 날마다 창문 닫기, 금요일에 분리수거함 비우기, 짝수 날에 불 끄기를 맡았어요. 6일 금요일에 서아가 할 일만 표시해 보세요.', target: { checklist: ['window', 'recycle', 'light'] } } },
                hints: ['요일 낱말과 \'날마다\'를 찾아 오늘이 들어 있는지 따져 봐요.', '날마다 하는 일과 금요일 일을 모두 골랐는지 봐요.', '날마다 하는 창문 닫기와 금요일 분리수거함 비우기예요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 잊지 않는 방법 정하고 해 보기', minutes: 13, tool: 'story',
            teacher: '"어떻게 하면 내 반 일을 잊지 않을까요?" 학생 생각을 먼저 듣고 카드를 고르게 한다. "친구가 알려 주겠지"를 고른 학생에게 "친구도 잊으면 어떻게 될까요?"라고 묻는다. 마지막에 오늘 내 당번 일을 직접 하고 당번표에 붙임 딱지를 붙인다.',
            task: '반 일을 잊지 않는 방법을 고르고, 오늘 내 당번 일을 한 뒤 당번표에 표시해요.',
            levels: CARD_LV,
            items: [
              { prompt: '반 일을 잊지 않는 방법만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '잊지 않는 방법', cards: ['아침마다 당번표를 봐요', '알림장에 요일과 일을 적어요', '친구가 알려 줄 때까지 기다려요', '하고 싶을 때만 해요'] },
                target: { pick: ['아침마다 당번표를 봐요', '알림장에 요일과 일을 적어요'] }, difficulty: 0.1,
                hints: ['내가 스스로 기억할 수 있게 해 주는 방법인지 생각해요.', '남에게 맡기는 방법이 섞였는지 봐요.', '당번표 보기와 알림장에 적기가 스스로 잊지 않는 방법이에요.'] },
              { prompt: '아침에 교실에 와서 할 일을 차례대로 놓아 보세요.', toolOptions: { slots: 4, cards: [{ id: '인사', text: '선생님과 친구에게 인사해요', motif: 'sun' }, { id: '가방', text: '가방을 사물함에 넣어요', motif: 'house' }, { id: '당번표', text: '당번표에서 오늘 일을 봐요', motif: 'star' }, { id: '당번', text: '오늘 내 당번 일을 해요', motif: 'leaf' }] },
                target: { order: ['인사', '가방', '당번표', '당번'] }, difficulty: 0.15,
                hints: ['교실에 들어와 가장 먼저 하는 일부터 놓아요.', '당번표를 보기 전에 당번 일을 하면 무엇을 할지 알 수 있을지 생각해요.', '인사 → 가방 넣기 → 당번표 보기 → 당번 일 하기 차례예요.'] },
              { prompt: '오늘 내 당번 일을 하고(당번이 없으면 내 자리 정리) 당번표에 붙임 딱지를 붙인 뒤 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"\'날마다\'와 \'요일\' 가운데 빠뜨리기 쉬운 것은 무엇이었나요?" 출구 질문을 마치면 내일 할 일을 알림장에 한 줄로 적게 한다. 다음 시간에는 깜빡했을 때나 바쁠 때 어떻게 하는지 알아본다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '월요일 하준의 일', items: [{ id: 'milk', text: '우유 나누기' }, { id: 'door', text: '앞문 닫기' }, { id: 'book', text: '학급 문고 정리' }] }, prompt: '하준은 날마다 우유 나누기, 월요일에 앞문 닫기를 맡았어요. 월요일에 하준이 할 일만 표시해 보세요.', target: { checklist: ['milk', 'door'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '\'날마다 하는 일\'은 언제 할까요?', options: ['월요일에만', '학교 오는 날 모두'], answer: 1, difficulty: 0.1, explain: '날마다 하는 일은 학교 오는 모든 날 해요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '오늘 내 당번',
      items: [
        { type: 'table', prompt: '나의 한 주 당번표를 쓰세요.', columns: ['요일', '내가 할 일'], cells: [['월', ''], ['화', ''], ['수', ''], ['목', ''], ['금', '']] },
        { type: 'choice', prompt: '수요일에 칠판 닦기, 날마다 화분 물 주기를 맡았어요. 수요일에 할 일은?', options: ['칠판 닦기만', '화분 물 주기만', '칠판 닦기와 화분 물 주기'], answer: '칠판 닦기와 화분 물 주기' },
        { type: 'check', prompt: '내가 쓸 잊지 않는 방법에 ✓ 하세요.', options: ['당번표 보기', '알림장에 적기', '짝과 서로 알려 주기'] },
        { type: 'short', prompt: '내일 내가 할 반 일을 쓰세요.' },
      ],
      easy: {
        note: '\'날마다\'는 매일이에요.',
        items: [
          { type: 'blank', prompt: '오늘은 (    )요일이에요.', answer: '' },
          { type: 'choice', prompt: '날마다 하는 일은 오늘도 할까요?', options: ['네', '아니요'], answer: '네' },
          { type: 'short', prompt: '내가 맡은 반 일을 쓰세요.' },
          { type: 'draw', prompt: '당번표를 보는 내 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '요일 낱말과 \'날마다\'에 동그라미를 친 뒤 표시해요. 당번표에 오늘 요일 칸을 색칠해 두어요.',
      base: '두세 가지 일 가운데 오늘 할 일을 빠짐없이 골라요.',
      challenge: '\'짝수 날\'처럼 날짜 조건이 더해진 당번표를 읽어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① \'날마다\' 하는 일을 빠뜨린다 → 날마다 일은 당번표 맨 위 줄에 따로 둔다. ② 당번이 없는 날에도 무엇이든 골라야 한다고 여긴다 → "오늘은 없어요"도 바른 답이라고 짚는다. ③ 친구가 알려 주기를 기다린다 → 스스로 확인하는 방법을 하나 정하게 한다.',
  }));

  lessons.push(L(24, {
    title: '깜빡했거나 바쁠 때 맡은 일 해내기',
    objective: '맡은 일을 깜빡했거나 다른 일과 겹칠 때 어떻게 할지 골라 맡은 일을 끝까지 해내는 방법을 말할 수 있다.',
    illustration: ART('a paper child remembering a forgotten task with a lightbulb above the head, a dry plant and a watering can nearby, friends playing in the background', '깜빡했을 때는?', [
      { motif: 'flower', x: 110, y: 228 }, { motif: 'house', x: 370, y: 214, color: 'mint' }, { motif: 'cloud', x: 320, y: 80, s: 0.7 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"어제 화분 당번을 깜빡했어요. 오늘 아침에 알았다면 어떻게 할까요?" 학생 반응을 듣고, "내 일이 아니니까 괜찮아"나 "숨겨요" 같은 대답이 나오면 "화분은 누구의 것이었지요?"라고 묻는다. "깜빡하는 일은 누구에게나 있어요. 중요한 것은 알았을 때 어떻게 하는지예요."',
        student: '깜빡하고 하지 못했던 일이 있었는지, 그때 어떻게 했는지 짝에게 말해 봐요.',
        demo: { tool: 'emotion', options: { mode: 'branch', situation: '어제 화분에 물 주기를 깜빡했어요.', choices: [{ id: 'now', text: '지금 바로 물을 줘요', result: '화분이 다시 싱싱해져요.', mood: '편안함' }, { id: 'hide', text: '모른 척해요', result: '화분이 시들어요.', mood: '속상함' }] }, sequence: [{ choice: 'now' }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 이럴 때 맡은 일은 어떻게 할까', minutes: 14, tool: 'emotion',
            teacher: '"놀고 싶은 마음도 이해해요. 그런데 내 일을 미루면 누가 불편해질까요?" 보기마다 결과의 마음 날씨를 견주게 한다. 친구에게 떠넘기는 보기를 고른 학생에게 "친구가 자기 일과 내 일을 둘 다 하면 어떨까요?"라고 묻는다. 정답을 고른 뒤에는 "그렇게 하려면 무슨 말을 할까요?"라고 실제 말을 연습하게 한다.',
            task: '맡은 일과 다른 일이 겹치는 상황을 읽고 알맞은 행동을 골라요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '쉬는 시간에 친구가 놀자고 해요. 그런데 칠판 닦기가 내 당번이에요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '쉬는 시간에 친구가 "같이 놀자!"라고 해요. 오늘 칠판 닦기는 내 당번이에요.', choices: [
                { id: 'first', text: '"칠판 닦고 바로 갈게!" 하고 먼저 닦아요', result: '칠판도 깨끗하고 놀이도 함께해요.', mood: '뿌듯함' },
                { id: 'skip', text: '놀고 와서 다음 수업 시간에 닦아요', result: '수업이 늦게 시작해요.', mood: '미안함', why: '쉬는 시간에 할 일을 미루면 모두가 기다려요.' },
                { id: 'push', text: '짝에게 대신 닦으라고 해요', result: '짝이 놀지 못해 속상해해요.', mood: '속상함', why: '내 일을 친구에게 떠넘기면 친구가 힘들어요.' }] }, target: { choice: 'first' }, difficulty: 0.1,
                levels: { easy: { toolOptions: { choices: [
                  { id: 'first', text: '"칠판 닦고 바로 갈게!" 하고 먼저 닦아요', result: '칠판도 깨끗하고 놀이도 함께해요.', mood: '뿌듯함' },
                  { id: 'push', text: '짝에게 대신 닦으라고 해요', result: '짝이 놀지 못해 속상해해요.', mood: '속상함', why: '내 일을 친구에게 떠넘기면 친구가 힘들어요.' }] } } } },
              { prompt: '어제 우유갑 모으기를 깜빡했어요. 오늘 아침에 알았어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '어제 우유갑 모으기를 깜빡해서 교실 뒤에 우유갑이 쌓여 있어요.', choices: [
                { id: 'tell', text: '선생님께 말씀드리고 지금 정리해요', result: '교실이 다시 깨끗해지고 마음이 가벼워요.', mood: '편안함' },
                { id: 'quiet', text: '아무도 모르게 그냥 둬요', result: '냄새가 나서 친구들이 불편해해요.', mood: '걱정', why: '깜빡한 일은 알았을 때 바로 하면 돼요.' }] }, target: { choice: 'tell' }, difficulty: 0.1 },
              { prompt: '오늘 몸이 아파서 맡은 일을 하기 어려워요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '오늘 배가 아파서 우유 상자를 들기 어려워요. 우유 당번은 나예요.', choices: [
                { id: 'ask', text: '선생님께 말씀드리고 오늘만 바꾸어 달라고 해요', result: '친구가 대신하고, 다음에 내가 그 친구 일을 해 줘요.', mood: '고마움' },
                { id: 'force', text: '아파도 참고 무거운 상자를 들어요', result: '더 아파져서 보건실에 가요.', mood: '걱정', why: '몸이 아플 때는 말씀드리고 도움을 받아요.' },
                { id: 'nothing', text: '말없이 하지 않아요', result: '아무도 우유를 못 받아요.', mood: '속상함', why: '못 할 때는 말로 알려야 다른 사람이 도울 수 있어요.' }] }, target: { choice: 'ask' }, difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 할 일 먼저, 놀이는 나중', minutes: 13, tool: 'story', pair: true,
            teacher: '"점심 뒤 내 일과 놀이를 어떤 차례로 하면 둘 다 할 수 있을까요?" 차례를 정한 뒤 짝과 "나 ○○ 하고 갈게!"라고 말하는 연습을 한다. 할 일을 미루는 말("이따 할게")과 견주어 들어 보게 한다.',
            task: '맡은 일과 놀이를 둘 다 할 수 있는 차례를 놓고, 짝과 말 연습을 해요.',
            levels: CARD_LV,
            items: [
              { prompt: '점심을 먹은 뒤 할 일을 차례대로 놓아 보세요.', toolOptions: { slots: 4, cards: [{ id: '정리', text: '식판을 정리해요', motif: 'leaf' }, { id: '양치', text: '이를 닦아요', motif: 'cloud' }, { id: '당번', text: '우유갑 당번 일을 해요', motif: 'star' }, { id: '놀이', text: '운동장에서 놀아요', motif: 'sun' }] },
                target: { order: ['정리', '양치', '당번', '놀이'] }, difficulty: 0.15,
                hints: ['꼭 해야 할 일을 먼저 하고 하고 싶은 일은 나중에 해요.', '놀이가 당번 일보다 앞에 있지 않은지 봐요.', '식판 정리 → 양치 → 당번 일 → 놀이 차례예요.'] },
              { prompt: '놀자는 친구에게 할 말로 알맞은 말 카드를 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['"칠판 닦고 바로 갈게!"', '"싫어, 너 혼자 놀아."', '"네가 닦아 줘."'], slots: [{ id: 'b1', who: '나', motif: 'star', label: '친구야, ___' }] },
                target: { fill: { b1: '"칠판 닦고 바로 갈게!"' } }, difficulty: 0.1 },
              { prompt: '짝과 한 사람은 놀자고 하고, 한 사람은 "○○ 하고 갈게!"라고 대답하는 연습을 역할을 바꾸어 하고 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"깜빡했을 때, 바쁠 때, 아플 때 각각 어떻게 하기로 했나요?" 세 가지를 손가락으로 세며 함께 말한다. 깜빡한 경험을 부끄러워하는 학생에게 "알았을 때 바로 한 것이 멋진 거예요"라고 말해 준다. 다음 시간에는 친구의 일을 돕는 방법을 알아본다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'branch', situation: '창문 닫기 당번인데 수업 종이 쳐서 깜빡하고 앉았어요. 바람이 세게 불어요.', choices: [{ id: 'now', text: '손을 들고 "창문 닫을게요" 하고 닫아요', result: '교실이 따뜻해져요.', mood: '편안함' }, { id: 'later', text: '수업 끝날 때까지 그냥 둬요', result: '모두 추워서 떨어요.', mood: '걱정', why: '알았을 때 바로 하면 돼요.' }] }, prompt: '깜빡한 창문 닫기를 수업 중에 알았어요. 어떻게 할까요?', target: { choice: 'now' }, difficulty: 0.1 },
          { type: 'choice', prompt: '맡은 일과 놀이가 겹칠 때 좋은 차례는?', options: ['놀이 먼저, 일은 나중', '일 먼저, 놀이는 나중'], answer: 1, difficulty: 0.05, explain: '맡은 일을 먼저 하면 마음 편히 놀 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '맡은 일 끝까지',
      items: [
        { type: 'table', prompt: '이럴 때 어떻게 할지 쓰세요.', columns: ['이럴 때', '나는 이렇게 해요'], cells: [['깜빡했을 때', ''], ['놀고 싶을 때', ''], ['아플 때', '']] },
        { type: 'choice', prompt: '몸이 아파 당번을 못 할 때는?', options: ['말없이 안 해요', '선생님께 말씀드려요'], answer: '선생님께 말씀드려요' },
        { type: 'short', prompt: '놀자는 친구에게 할 말을 쓰세요.' },
        { type: 'draw', prompt: '맡은 일을 먼저 하는 내 모습을 그려 보세요.' },
      ],
      easy: {
        note: '알았을 때 바로, 못 할 때는 말로!',
        items: [
          { type: 'choice', prompt: '깜빡한 일을 알았을 때는?', options: ['바로 해요', '모른 척해요'], answer: '바로 해요' },
          { type: 'choice', prompt: '먼저 할 것은?', options: ['맡은 일', '놀이'], answer: '맡은 일' },
          { type: 'short', prompt: '친구에게 할 말을 쓰세요.' },
          { type: 'draw', prompt: '맡은 일을 하는 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '고를 보기가 두 개예요. 말 카드에서 알맞은 말을 골라 소리 내어 읽어요.',
      base: '세 상황에서 행동을 고르고 하루 차례를 놓아요.',
      challenge: '짝 연습에서 아플 때 선생님께 말씀드리는 말도 만들어 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 깜빡한 것을 숨긴다 → 실수보다 숨기는 것이 더 큰 문제라고 짚고, 말한 학생을 칭찬한다. ② 내 일을 친구에게 떠넘긴다 → 친구의 쉬는 시간도 소중하다는 것을 묻는다. ③ 아파도 무리한다 → 말로 알리고 바꾸는 것도 책임 있는 행동이라고 알려 준다.',
  }));

  lessons.push(L(25, {
    title: '친구가 맡은 일을 함께 돕기',
    objective: '친구가 맡은 일을 어려워하는 상황을 알아보고 알맞은 도움 말과 행동을 골라 함께 마무리할 수 있다.',
    illustration: ART('two paper children carrying a heavy milk crate together, another child holding the door open for them, smiling faces', '같이 하면 쉬워요', [
      { motif: 'house', x: 110, y: 214, color: 'peach' }, { motif: 'star', x: 380, y: 86 }, { motif: 'tree', x: 400, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '선생님이 무거운 책 상자를 혼자 낑낑 들어 보이고 "내 일이니까 나 혼자 해야겠지?"라고 말한다. 학생들이 도와주겠다고 하면 "내 일만 하면 되는데 왜 도와주나요?"라고 되묻는다. "친구 일을 함께하면 더 빨리, 더 안전하게 끝나요. 단, 친구가 원하는지 먼저 물어봐요."',
        student: '친구를 도왔거나 친구에게 도움을 받았던 때를 하나 말해 봐요.',
        demo: { tool: 'story', options: { mode: 'match', slots: [{ id: 'd1', label: '친구가 무거운 상자를 들고 있어요' }], cards: ['"같이 들어 줄까?"'], shuffle: false }, sequence: [{ match: { d1: '"같이 들어 줄까?"' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 친구에게 건넬 도움 말 짝 짓기', minutes: 13, tool: 'story',
            teacher: '"도와주기 전에 왜 물어볼까요?" 친구가 혼자 해 보고 싶을 수도 있다는 것을 짚는다. 말없이 친구 물건을 빼앗아 하는 것은 도움이 아니라는 것도 덧붙인다. 짝 지은 말을 소리 내어 따뜻한 목소리로 읽어 보게 한다.',
            task: '친구가 어려워하는 상황 옆에 알맞은 도움 말 카드를 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '친구가 어려워하는 상황 옆에 알맞은 도움 말을 놓아 보세요.', toolOptions: { mode: 'match', slots: [{ id: 'm1', label: '우유 상자가 무거워 쩔쩔매요' }, { id: 'm2', label: '높은 칠판 위쪽에 손이 안 닿아요' }, { id: 'm3', label: '흩어진 책이 너무 많아요' }], cards: ['"한쪽 들어 줄까?"', '"선생님께 발판을 여쭈어 볼까?"', '"반씩 나누어 꽂자."'] },
                target: { match: { m1: '"한쪽 들어 줄까?"', m2: '"선생님께 발판을 여쭈어 볼까?"', m3: '"반씩 나누어 꽂자."' } }, difficulty: 0.1 },
              { prompt: '친구가 어려워하는 상황 옆에 알맞은 도움 말을 놓아 보세요.', toolOptions: { mode: 'match', slots: [{ id: 'm1', label: '화분 물을 쏟아 바닥이 젖었어요' }, { id: 'm2', label: '당번 일을 처음 해서 차례를 몰라요' }, { id: 'm3', label: '혼자 해 보고 싶다고 말해요' }], cards: ['"걸레 가져올게, 같이 닦자."', '"내가 한 번 보여 줄게."', '"그래, 필요하면 불러 줘."'] },
                target: { match: { m1: '"걸레 가져올게, 같이 닦자."', m2: '"내가 한 번 보여 줄게."', m3: '"그래, 필요하면 불러 줘."' } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['"걸레 가져올게, 같이 닦자."', '"내가 한 번 보여 줄게."', '"그래, 필요하면 불러 줘."', '"그것도 못 해? 비켜 봐."'] } } },
                hints: ['친구의 마음과 친구가 바라는 것을 먼저 생각해요.', '혼자 해 보고 싶다는 친구에게 놓은 말이 친구 마음을 지켜 주는지 봐요.', '젖은 바닥은 같이 닦기, 처음인 친구는 보여 주기, 혼자 하고 싶은 친구는 기다려 주기예요.'] },
              { prompt: '친구를 돕는 바른 말과 행동만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '돕는 말과 행동', cards: ['"도와줄까?" 하고 먼저 물어요', '친구 걸레를 말없이 빼앗아 닦아요', '같이 끝까지 하고 "다 했다!" 해요', '"내 일 아니야" 하고 지나가요'] },
                target: { pick: ['"도와줄까?" 하고 먼저 물어요', '같이 끝까지 하고 "다 했다!" 해요'] }, difficulty: 0.15,
                hints: ['친구가 기분 좋게 도움을 받을 수 있는지 생각해요.', '친구에게 묻지 않고 하는 행동이 섞였는지 봐요.', '먼저 묻기와 끝까지 함께하기가 바른 도움이에요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 짝과 함께 반 일 마무리하기', minutes: 14, tool: 'emotion', pair: true,
            teacher: '"짝의 반 일을 함께 해 보아요. 먼저 \'도와줄까?\' 하고 물어요." 짝끼리 서로의 반 일을 하나씩 함께 해 본다(5분). 다 한 뒤 도움을 받았을 때와 주었을 때의 마음을 고른다. 마음의 크기는 사람마다 달라서 어느 칸이든 맞다고 말해 준다.',
            task: '짝과 서로의 반 일을 함께 해 보고, 도움을 주고받은 마음을 골라요.',
            levels: { easy: { steps: 3 }, base: {}, challenge: {} },
            items: [
              { prompt: '짝에게 "도와줄까?" 하고 물은 뒤 짝의 반 일을 함께 끝까지 하고 "다 했어요"를 누르세요.', free: true },
              { prompt: '친구가 내 일을 도와주었을 때의 마음 크기를 골라 보세요.', toolOptions: { mode: 'scale', situation: '무거운 우유 상자를 친구가 같이 들어 주었어요.', feeling: '고마움', after: '고마운 마음은 "고마워!"라고 말로 전해요.' }, target: { level: 'any' }, difficulty: 0.05 },
              { prompt: '내가 친구 일을 도와 함께 끝냈을 때의 마음 크기를 골라 보세요.', toolOptions: { mode: 'scale', situation: '짝과 함께 흩어진 책을 모두 꽂았어요.', feeling: '뿌듯함', after: '함께 끝내면 둘 다 뿌듯해요.' }, target: { level: 'any' }, difficulty: 0.05 },
              { prompt: '도와준 친구에게 할 말로 알맞은 것을 골라 보세요.', toolOptions: { mode: 'branch', situation: '짝이 내 칠판 닦기를 함께 해 주었어요.', choices: [
                { id: 'thanks', text: '"도와줘서 고마워. 다음엔 내가 도와줄게."', result: '짝이 활짝 웃어요.', mood: '기쁨' },
                { id: 'none', text: '아무 말 없이 자리에 가요', result: '짝이 조금 서운해해요.', mood: '슬픔', why: '도움을 받으면 고마운 마음을 말로 전해요.' }] }, target: { choice: 'thanks' }, difficulty: 0.05 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"짝과 함께 하니 혼자 할 때와 무엇이 달랐나요?" 두세 팀에게 듣는다. "내 일만 하면 된다"는 생각과 오늘 겪은 것을 견주게 한다. 다음 시간에는 모둠이 함께 교실 청소를 끝까지 마무리해 본다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { mode: 'match', slots: [{ id: 'e1', label: '친구가 쏟은 색종이를 줍고 있어요' }, { id: 'e2', label: '친구가 처음 하는 창문 닫기를 헷갈려요' }], cards: ['"걸쇠는 이렇게 돌려."', '"같이 줍자."'] }, prompt: '친구가 어려워하는 상황 옆에 알맞은 도움 말을 놓아 보세요.', target: { match: { e1: '"같이 줍자."', e2: '"걸쇠는 이렇게 돌려."' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '친구 일을 돕기 전에 먼저 할 일은?', options: ['친구 물건을 가져와요', '"도와줄까?" 하고 물어요', '친구를 비키게 해요'], answer: 1, difficulty: 0.05, explain: '친구가 도움을 바라는지 먼저 물어봐요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '함께 도와요',
      items: [
        { type: 'figure', wide: true, prompt: '상황과 알맞은 도움 말을 선으로 이으세요.', tool: 'story', figures: [{ options: { mode: 'match', slots: [{ id: 'w1', label: '상자가 무거워요' }, { id: 'w2', label: '처음이라 몰라요' }], cards: ['"보여 줄게."', '"같이 들자."'] }, caption: '' }], answer: '무거움-같이 들자, 처음-보여 줄게' },
        { type: 'choice', prompt: '혼자 해 보고 싶다는 친구에게는?', options: ['"비켜, 내가 할게."', '"그래, 필요하면 불러 줘."'], answer: '"그래, 필요하면 불러 줘."' },
        { type: 'short', prompt: '오늘 짝과 함께 한 일을 쓰세요.' },
        { type: 'short', prompt: '도움을 주거나 받았을 때 마음을 쓰세요.' },
      ],
      easy: {
        note: '먼저 "도와줄까?"',
        items: [
          { type: 'choice', prompt: '돕기 전에 하는 말은?', options: ['"도와줄까?"', '"비켜."'], answer: '"도와줄까?"' },
          { type: 'choice', prompt: '도움을 받으면?', options: ['"고마워."', '아무 말 안 해요'], answer: '"고마워."' },
          { type: 'short', prompt: '짝과 함께 한 일을 쓰세요.' },
          { type: 'draw', prompt: '친구와 함께 일하는 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 마음 크기는 세 칸에서 골라요.',
      base: '여섯 상황에 도움 말을 놓고, 짝과 반 일을 함께해요.',
      challenge: '친구를 깎아내리는 함정 말이 섞여요. 짝과 반 일 두 가지를 함께해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 돕는다며 친구 일을 빼앗는다 → 먼저 묻고 친구가 바라는 만큼 돕게 한다. ② "내 일 아니야"라며 지나친다 → 함께 쓰는 교실이니 모두의 일이라는 것을 다시 짚는다. ③ 도움을 받고 부끄러워한다 → 도움을 청하고 받는 것도 용기라고 말한다. 마음 크기 문항은 정답이 없는 자기 돌아보기다.',
  }));

  lessons.push(L(26, {
    title: '모둠이 함께 교실 청소 끝까지 마무리하기',
    objective: '모둠이 함께 교실 청소를 차례대로 하고, 마무리 점검 목록으로 끝까지 해냈는지 살필 수 있다.',
    illustration: ART('a team of paper children cleaning the classroom together, chairs up on desks, one sweeping, one wiping, one emptying the bin, a checklist on the wall', '함께 끝까지 청소해요', [
      { motif: 'house', x: 110, y: 214, color: 'sky' }, { motif: 'leaf', x: 360, y: 228 }, { motif: 'star', x: 380, y: 86 }]),
    safety: ['빗자루·대걸레는 휘두르지 않고 아래를 향하게 들어요.', '물걸레질한 바닥은 다 마를 때까지 뛰지 않아요.', '책상을 옮길 때는 두 사람이 함께 들어요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"청소가 끝났다고 했는데 빗자루가 바닥에 굴러다니면 끝난 걸까요?" 반응을 듣고 "끝까지 한다는 것은 도구를 제자리에 두고, 빠진 곳이 없는지 살피는 것까지예요"라고 말한다. 모둠마다 맡을 청소 구역(앞, 가운데, 뒤, 복도 쪽)을 정해 준다.',
        student: '청소를 \'다 했다\'고 말하려면 무엇까지 해야 할지 말해 봐요.',
        demo: { tool: 'timer', options: { cards: ['바닥 쓸기', '의자 올리기', '의자 내리기'] }, sequence: [{ order: ['의자 올리기', '바닥 쓸기', '의자 내리기'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 청소 차례 정하기', minutes: 8, tool: 'timer',
            teacher: '"의자를 올리지 않고 쓸면 어떻게 될까요?" 차례가 바뀌면 생기는 일을 말해 보게 한다. 쓸기 전에 닦기를 놓은 학생에게 "먼지가 있는 채로 물걸레질하면 어떻게 될까요?"라고 묻는다.',
            task: '청소 카드를 바른 차례대로 놓아요. 카드를 눌러 골라 다른 카드와 바꿀 수 있어요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '교실 바닥 청소를 하는 차례대로 카드를 놓아 보세요.', toolOptions: { title: '교실 바닥 청소', cards: ['바닥 쓸기', '의자 내리기', '의자 올리기', '물걸레로 닦기'] }, target: { order: ['의자 올리기', '바닥 쓸기', '물걸레로 닦기', '의자 내리기'] }, difficulty: 0.15,
                levels: { easy: { prompt: '교실 바닥 청소를 하는 차례대로 카드 세 장을 놓아 보세요.', toolOptions: { cards: ['바닥 쓸기', '의자 올리기', '물걸레로 닦기'] }, target: { order: ['의자 올리기', '바닥 쓸기', '물걸레로 닦기'] } } },
                hints: ['청소할 곳을 먼저 비우고, 먼지를 없앤 뒤 닦아요.', '물걸레질이 쓸기보다 앞에 있지 않은지 봐요.', '의자 올리기 → 쓸기 → 물걸레 → 의자 내리기 차례예요.'] },
              { prompt: '책상 위 정리를 하는 차례대로 카드를 놓아 보세요.', toolOptions: { title: '책상 위 정리', cards: ['물티슈로 닦기', '책과 학용품 넣기', '지우개 가루 모아 버리기'] }, target: { order: ['책과 학용품 넣기', '지우개 가루 모아 버리기', '물티슈로 닦기'] }, difficulty: 0.15,
                hints: ['물건을 먼저 치워야 닦을 자리가 생겨요.', '가루를 모으기 전에 닦으면 어떻게 될지 생각해요.', '물건 넣기 → 가루 버리기 → 닦기 차례예요.'] },
              { prompt: '청소를 마칠 때 하는 일을 차례대로 놓아 보세요.', toolOptions: { title: '청소 마무리', cards: ['손 씻기', '도구를 제자리에 넣기', '빠진 곳 살피기'] }, target: { order: ['빠진 곳 살피기', '도구를 제자리에 넣기', '손 씻기'] }, difficulty: 0.2,
                hints: ['도구를 넣기 전에 더 할 곳이 있는지 살펴요.', '손을 씻은 뒤 다시 도구를 만지게 되는 차례인지 봐요.', '빠진 곳 살피기 → 도구 넣기 → 손 씻기 차례예요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 모둠 청소하고 마무리 점검하기', minutes: 20, tool: 'kitchen',
            teacher: '모둠마다 맡은 구역을 10분 동안 청소한다. 선생님은 돌며 "먼저 끝난 친구는 어디를 도울 수 있을까?"라고 묻는다. 청소 뒤 화면의 점검 목록으로 모둠이 함께 살피게 한다. 점검에서 빠진 곳이 나오면 고친 뒤 다시 살피게 한다.',
            task: '모둠이 맡은 구역을 함께 청소하고, 마무리 점검 목록으로 끝까지 했는지 살펴요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '모둠 친구와 맡은 구역을 10분 동안 함께 청소하고 "다 했어요"를 누르세요.', free: true },
              { prompt: '청소를 끝까지 마쳤는지 살필 것만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '마무리 점검', items: [{ id: 'tool', text: '빗자루가 도구함에 있어요' }, { id: 'corner', text: '구석에 쓰레기가 없어요' }, { id: 'race', text: '누가 가장 빨리 끝냈는지 봐요' }, { id: 'chair', text: '의자가 제자리에 내려져 있어요' }] },
                target: { checklist: ['tool', 'corner', 'chair'] }, difficulty: 0.15,
                levels: { easy: { prompt: '점검 세 가지 가운데 청소를 끝까지 마쳤는지 살필 것만 표시해 보세요.', toolOptions: { items: [{ id: 'tool', text: '빗자루가 도구함에 있어요' }, { id: 'race', text: '누가 가장 빨리 끝냈는지 봐요' }, { id: 'chair', text: '의자가 제자리에 내려져 있어요' }] }, target: { checklist: ['tool', 'chair'] } }, challenge: { prompt: '점검 여섯 가지 가운데 청소를 끝까지 마쳤는지 살필 것만 모두 표시해 보세요.', toolOptions: { items: [{ id: 'tool', text: '빗자루가 도구함에 있어요' }, { id: 'corner', text: '구석에 쓰레기가 없어요' }, { id: 'race', text: '누가 가장 빨리 끝냈는지 봐요' }, { id: 'chair', text: '의자가 제자리에 내려져 있어요' }, { id: 'mop', text: '물걸레를 빨아 널었어요' }, { id: 'noise', text: '누가 가장 크게 떠들었는지 봐요' }] }, target: { checklist: ['tool', 'corner', 'chair', 'mop'] } } },
                hints: ['청소가 다 되었는지 알려 주는 것인지 생각해요.', '빠르기 겨루기는 청소가 끝났는지와 상관있는지 봐요.', '빠르기 보기만 빼고 모두 살필 것이에요.'] },
              { prompt: '먼저 끝난 친구가 할 일로 알맞은 것만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '먼저 끝났을 때', items: [{ id: 'help', text: '아직 하는 친구에게 "도와줄까?" 물어요' }, { id: 'play', text: '교실에서 공놀이를 해요' }, { id: 'check', text: '모둠 구역에 빠진 곳이 없는지 봐요' }] },
                target: { checklist: ['help', 'check'] }, difficulty: 0.1,
                hints: ['모둠 청소가 다 끝나도록 돕는 일인지 생각해요.', '청소 중인 교실에서 하면 위험한 일이 섞였는지 봐요.', '친구 돕기와 빠진 곳 살피기예요.'] },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"점검 목록으로 살폈을 때 우리 모둠이 다시 한 곳이 있었나요?" 모둠마다 한 가지씩 말하게 한다. "다시 살펴 고친 것도 끝까지 한 거예요"라고 짚는다. 다음 시간에는 마을에서 함께 하는 분리배출을 해 본다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'timer', options: { title: '청소 뒤 손 씻기', cards: ['비누 거품 내어 문지르기', '손에 물 묻히기', '흐르는 물에 헹구기', '수건으로 닦기'] }, prompt: '청소를 마치고 손을 씻는 차례대로 카드를 놓아 보세요.', target: { order: ['손에 물 묻히기', '비누 거품 내어 문지르기', '흐르는 물에 헹구기', '수건으로 닦기'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '청소를 \'다 했다\'고 말할 수 있는 때는?', options: ['쓸기만 끝냈을 때', '도구를 제자리에 두고 빠진 곳을 살폈을 때'], answer: 1, difficulty: 0.05, explain: '도구 정리와 점검까지 해야 끝까지 한 거예요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '모둠 청소 마무리',
      items: [
        { type: 'table', prompt: '우리 모둠 청소 차례와 맡은 사람을 쓰세요.', columns: ['차례', '할 일', '맡은 사람'], cells: [['1', '', ''], ['2', '', ''], ['3', '', ''], ['4', '', '']] },
        { type: 'check', prompt: '청소 뒤 우리 모둠이 살핀 것에 ✓ 하세요.', options: ['도구를 제자리에 넣었어요', '구석을 살폈어요', '의자를 내렸어요', '손을 씻었어요'] },
        { type: 'choice', prompt: '먼저 끝난 친구가 할 일은?', options: ['공놀이', '친구 돕기'], answer: '친구 돕기' },
        { type: 'short', prompt: '오늘 청소에서 다시 고친 곳을 쓰세요.' },
      ],
      easy: {
        note: '도구 정리까지가 청소예요.',
        items: [
          { type: 'choice', prompt: '먼저 할 일은?', options: ['의자 올리기', '의자 내리기'], answer: '의자 올리기' },
          { type: 'choice', prompt: '마지막에 할 일은?', options: ['손 씻기', '빗자루 던지기'], answer: '손 씻기' },
          { type: 'short', prompt: '내가 맡은 청소를 쓰세요.' },
          { type: 'draw', prompt: '모둠이 함께 청소하는 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '차례 카드가 바뀌면 바로 보이도록 짝과 함께 놓아요. 청소는 한 가지 일을 맡아요.',
      base: '세 가지 차례를 놓고 모둠 청소 뒤 점검해요.',
      challenge: '청소 뒤 다른 모둠 구역의 점검을 도와요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 쓸기 전에 닦거나 의자를 올리지 않는다 → 차례가 바뀌면 생기는 일을 실제로 보여 준다. ② 먼저 끝나면 놀러 간다 → 모둠 점검이 끝나야 우리 모둠 청소가 끝난다고 정한다. ③ 점검에서 빠진 곳을 친구 탓으로 돌린다 → 함께 다시 하면 된다고 말한다. 청소 도구는 학생 키에 맞는 것을 쓰고 물걸레 뒤 미끄럼에 주의한다.',
  }));

  lessons.push(L(27, {
    title: '분리배출로 마을을 함께 깨끗하게 하기',
    objective: '마을에서 함께 하는 분리배출 약속에 따라 쓰레기를 종류별로 나누고, 페트병을 바르게 내놓는 차례를 해 볼 수 있다.',
    illustration: ART('a village recycling corner made of paper with colorful bins for paper, plastic and cans, neighbors and children sorting items together', '분리배출을 함께해요', [
      { motif: 'house', x: 100, y: 214, color: 'mint' }, { motif: 'tree', x: 380, y: 214 }, { motif: 'leaf', x: 250, y: 232 }]),
    safety: ['깨진 유리나 날카로운 캔 뚜껑은 만지지 않고 선생님께 알려요.', '분리배출 연습 뒤에는 꼭 비누로 손을 씻어요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"아파트나 동네 분리수거장에 가 본 사람?" 경험을 듣고 "마을 사람 모두가 같은 날, 같은 약속으로 내놓기 때문에 마을이 깨끗해요"라고 말한다. "한 사람이 약속을 안 지키면 누가 다시 나누어야 할까요?"라고 물어 함께 지키는 약속임을 짚는다. 교실에 씻어 둔 페트병·종이·캔을 꺼내 보여 준다.',
        student: '우리 집에서 분리배출을 해 본 적이 있으면 무엇을 버렸는지 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '분리배출', slots: ['종이', '플라스틱'], cards: ['신문지', '페트병'], shuffle: false }, sequence: [{ sort: { '종이': ['신문지'], '플라스틱': ['페트병'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 종류별로 나누기', minutes: 12, tool: 'mindmap',
            teacher: '"이것은 무엇으로 만들었을까요? 만져 보고 두드려 봐요." 교실에 가져온 실제 물건을 돌려 보며 카드를 나누게 한다. 우유갑은 종이지만 따로 모으는 곳이 있다는 것을 알려 주고, 오늘 카드에는 넣지 않았다고 말한다. 음식물이 묻은 것은 씻어서 내놓아야 한다는 것도 덧붙인다.',
            task: '버릴 물건 카드를 종이, 플라스틱, 캔으로 나누어 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '버릴 물건 카드를 종류별로 나누어 보세요.', toolOptions: { topic: '분리배출', slots: ['종이', '플라스틱', '캔'], cards: ['신문지', '페트병', '음료수 캔', '공책 표지'] },
                target: { sort: { '종이': ['신문지', '공책 표지'], '플라스틱': ['페트병'], '캔': ['음료수 캔'] } }, difficulty: 0.1 },
              { prompt: '버릴 물건 카드를 종류별로 나누어 보세요.', toolOptions: { topic: '분리배출', slots: ['종이', '플라스틱', '캔'], cards: ['과자 상자', '요구르트 병', '참치 캔', '샴푸 통', '택배 상자'] },
                target: { sort: { '종이': ['과자 상자', '택배 상자'], '플라스틱': ['요구르트 병', '샴푸 통'], '캔': ['참치 캔'] } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['과자 상자', '요구르트 병', '참치 캔', '샴푸 통', '택배 상자', '먹다 남은 김밥'] } } },
                hints: ['무엇으로 만들었는지 떠올려 봐요. 두드리면 어떤 소리가 날지 생각해요.', '요구르트 병과 샴푸 통이 무엇으로 만들어졌는지 다시 봐요.', '상자 둘은 종이, 요구르트 병과 샴푸 통은 플라스틱, 참치 캔은 캔이에요. 음식은 분리배출이 아니에요.'] },
              { prompt: '분리배출 약속을 지킨 모습만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '약속을 지킨 모습', cards: ['페트병을 물로 헹궈 내놓아요', '택배 상자의 테이프를 떼어요', '캔 안에 남은 음료를 그대로 둬요', '정한 요일에 내놓아요'] },
                target: { pick: ['페트병을 물로 헹궈 내놓아요', '택배 상자의 테이프를 떼어요', '정한 요일에 내놓아요'] }, difficulty: 0.15,
                hints: ['다시 쓰기 좋게, 이웃이 불편하지 않게 내놓는지 생각해요.', '안에 무엇이 남아 있는 채로 버리는 모습이 섞였는지 봐요.', '음료가 남은 캔만 빼고 모두 약속을 지킨 모습이에요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 페트병 바르게 내놓기 해 보기', minutes: 16, tool: 'story', pair: true,
            teacher: '"페트병은 어떤 차례로 내놓을까요?" 차례를 정한 뒤 짝과 씻어 둔 페트병으로 직접 해 본다(라벨 떼기·찌그러뜨리기·뚜껑 닫기). 라벨이 잘 안 떨어지면 절취선을 찾아보게 한다. 끝나면 교실 분리수거함을 함께 정리한다.',
            task: '페트병을 내놓는 차례를 정하고, 짝과 실제 페트병으로 해 본 뒤 교실 분리수거함을 정리해요.',
            levels: CARD_LV,
            items: [
              { prompt: '페트병을 바르게 내놓는 차례대로 카드를 놓아 보세요.', toolOptions: { slots: 4, cards: [{ id: '비움', text: '안에 든 것을 비워요', motif: 'cloud' }, { id: '라벨', text: '겉의 비닐 라벨을 떼요', motif: 'leaf' }, { id: '누름', text: '납작하게 눌러요', motif: 'star' }, { id: '뚜껑', text: '뚜껑을 닫아 내놓아요', motif: 'house' }] },
                target: { order: ['비움', '라벨', '누름', '뚜껑'] }, difficulty: 0.15,
                hints: ['안에 든 것부터 비워야 나머지를 할 수 있어요.', '뚜껑을 닫은 뒤에는 누르기 어려워요. 그 차례를 다시 봐요.', '비우기 → 라벨 떼기 → 납작하게 누르기 → 뚜껑 닫기 차례예요.'] },
              { prompt: '짝과 씻어 둔 페트병을 차례대로 내놓기 해 보고 "다 했어요"를 누르세요.', free: true },
              { prompt: '모둠 친구와 교실 분리수거함을 종류별로 다시 정리하고 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"우리 반이 오늘 정리한 분리수거함을 보니 어떤가요?" 정리 전후를 견주게 한다. "우리 마을 분리배출 날은 무슨 요일인지 집에서 알아 와요"라고 과제를 낸다. 다음 시간에는 우리가 한 일로 교실과 마을이 어떻게 달라졌는지 돌아본다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '분리배출', slots: ['종이', '플라스틱', '캔'], cards: ['달걀판 종이', '세제 통', '통조림 캔'] }, prompt: '버릴 물건 카드를 종류별로 나누어 보세요.', target: { sort: { '종이': ['달걀판 종이'], '플라스틱': ['세제 통'], '캔': ['통조림 캔'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '분리배출 약속은 누가 지켜야 할까요?', options: ['어른들만', '마을 사람 모두'], answer: 1, difficulty: 0.05, explain: '한 사람이라도 어기면 다른 사람이 다시 나누어야 해요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '분리배출 약속',
      items: [
        { type: 'table', prompt: '물건을 알맞은 칸에 쓰세요. (신문지, 페트병, 음료수 캔, 과자 상자)', columns: ['종이', '플라스틱', '캔'], rows: 2 },
        { type: 'figure', wide: true, prompt: '페트병 내놓는 차례대로 1, 2, 3을 쓰세요.', tool: 'story', figures: [{ options: { slots: ['처음', '가운데', '끝'], cards: [{ id: '누름', text: '납작하게 눌러요', motif: 'star' }, { id: '비움', text: '안을 비워요', motif: 'cloud' }, { id: '라벨', text: '라벨을 떼요', motif: 'leaf' }] }, caption: '' }], answer: '비우기 → 라벨 떼기 → 누르기' },
        { type: 'choice', prompt: '음료가 남은 캔은 어떻게 할까요?', options: ['그대로 버려요', '비우고 헹궈 내놓아요'], answer: '비우고 헹궈 내놓아요' },
        { type: 'blank', prompt: '우리 마을 분리배출 날: (        )요일', answer: '' },
      ],
      easy: {
        note: '무엇으로 만들었는지 떠올려요.',
        items: [
          { type: 'choice', prompt: '신문지는?', options: ['종이', '캔'], answer: '종이' },
          { type: 'choice', prompt: '페트병은?', options: ['플라스틱', '종이'], answer: '플라스틱' },
          { type: 'short', prompt: '내가 지킬 분리배출 약속을 쓰세요.' },
          { type: 'draw', prompt: '분리배출하는 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 실제 물건을 만져 보고 나누어요.',
      base: '세 종류로 나누고 페트병 내놓기를 해 봐요.',
      challenge: '분리배출이 아닌 함정 카드(남은 음식)가 섞여요. 짝에게 차례의 까닭을 설명해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 모양이 병이면 모두 유리라고 여긴다 → 두드려 소리와 무게를 견주게 한다. ② 음식이 묻은 채 내놓는다 → 헹궈야 다시 쓸 수 있다고 알려 준다. ③ 분리배출은 어른 일이라고 여긴다 → 우리 집 쓰레기는 우리 가족 모두의 일이라는 것을 짚는다. 실제 분리배출 요일·방법은 지역마다 다르므로 우리 지역 안내에 맞춘다.',
  }));

  // ───────────────────────── 28~32차시: 달라진 교실·마을 돌아보고 다음 일 고르기(성찰과 습관화) ─────────────────────────

  lessons.push(L(28, {
    title: '반 일 하기 전과 한 뒤의 교실 견주기',
    objective: '반 일을 하기 전과 한 뒤의 교실 모습을 견주어 나누고, 무엇을 해서 어떻게 달라졌는지 문장으로 말할 수 있다.',
    illustration: ART('a split paper classroom scene, left side messy with scattered books and a dry plant, right side tidy with books in rows and a green plant', '무엇이 달라졌을까?', [
      { motif: 'flower', x: 110, y: 228 }, { motif: 'house', x: 370, y: 214, color: 'buttercup' }, { motif: 'star', x: 240, y: 90 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '1인 1역을 시작하기 전에 찍어 둔 교실 사진과 오늘 교실 사진을 나란히 보여 준다(사진에 학생 얼굴이 나오지 않게 한다). "두 사진에서 다른 곳을 찾아볼까요?" 다른 곳을 찾을 때마다 칠판에 적는다. "이것은 저절로 달라졌을까요?"라는 물음을 남기고 활동으로 들어간다.',
        student: '두 사진에서 달라진 곳을 하나 찾아 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '우리 교실', slots: ['반 일 하기 전', '반 일 한 뒤'], cards: ['칠판에 낙서가 가득해요', '칠판이 깨끗해요'], shuffle: false }, sequence: [{ sort: { '반 일 하기 전': ['칠판에 낙서가 가득해요'], '반 일 한 뒤': ['칠판이 깨끗해요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 하기 전과 한 뒤 나누기', minutes: 13, tool: 'mindmap',
            teacher: '"이 모습은 반 일을 하기 전일까요, 한 뒤일까요?" 짝이 되는 두 카드(흩어진 책 ↔ 꽂힌 책)를 찾아 손으로 이어 보게 한다. 짝을 찾지 못하는 카드가 있으면 "이 모습을 바꾸려면 무슨 일을 해야 할까요?"라고 묻는다.',
            task: '교실 모습 카드를 반 일 하기 전과 한 뒤로 나누어 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '교실 모습 카드를 반 일 하기 전과 한 뒤로 나누어 보세요.', toolOptions: { topic: '우리 교실', slots: ['반 일 하기 전', '반 일 한 뒤'], cards: ['책이 바닥에 흩어져 있어요', '책이 번호대로 꽂혀 있어요', '화분 잎이 축 늘어졌어요', '화분 잎이 싱싱해요'] },
                target: { sort: { '반 일 하기 전': ['책이 바닥에 흩어져 있어요', '화분 잎이 축 늘어졌어요'], '반 일 한 뒤': ['책이 번호대로 꽂혀 있어요', '화분 잎이 싱싱해요'] } }, difficulty: 0.05 },
              { prompt: '교실 모습 카드를 반 일 하기 전과 한 뒤로 나누어 보세요.', toolOptions: { topic: '우리 교실', slots: ['반 일 하기 전', '반 일 한 뒤'], cards: ['우유갑이 넘쳐 냄새가 나요', '분리수거함이 가지런해요', '창문이 열려 있어 교실이 추워요', '창문이 닫혀 교실이 따뜻해요', '책상 줄이 삐뚤빼뚤해요', '책상 줄이 반듯해요'] },
                target: { sort: { '반 일 하기 전': ['우유갑이 넘쳐 냄새가 나요', '창문이 열려 있어 교실이 추워요', '책상 줄이 삐뚤빼뚤해요'], '반 일 한 뒤': ['분리수거함이 가지런해요', '창문이 닫혀 교실이 따뜻해요', '책상 줄이 반듯해요'] } }, difficulty: 0.15,
                levels: { easy: { toolOptions: { cards: ['우유갑이 넘쳐 냄새가 나요', '분리수거함이 가지런해요', '책상 줄이 삐뚤빼뚤해요', '책상 줄이 반듯해요'] }, target: { sort: { '반 일 하기 전': ['우유갑이 넘쳐 냄새가 나요', '책상 줄이 삐뚤빼뚤해요'], '반 일 한 뒤': ['분리수거함이 가지런해요', '책상 줄이 반듯해요'] } }, prompt: '교실 모습 카드 네 장을 반 일 하기 전과 한 뒤로 나누어 보세요.' } },
                hints: ['짝이 되는 두 카드를 먼저 찾아 견주어 봐요.', '불편한 모습과 좋아진 모습이 바른 칸에 있는지 봐요.', '냄새·추움·삐뚤빼뚤은 하기 전, 가지런·따뜻함·반듯함은 한 뒤예요.'] },
              { prompt: '반 일을 한 뒤 달라진 모습만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '반 일 한 뒤', cards: ['칠판 아래 분필 가루가 없어요', '놀이 상자 조각이 다 모여 있어요', '바닥에 색종이 조각이 굴러다녀요', '오늘은 비가 와요'] },
                target: { pick: ['칠판 아래 분필 가루가 없어요', '놀이 상자 조각이 다 모여 있어요'] }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['칠판 아래 분필 가루가 없어요', '놀이 상자 조각이 다 모여 있어요', '바닥에 색종이 조각이 굴러다녀요', '오늘은 비가 와요', '신발장 실내화가 짝지어 놓여 있어요'] }, target: { pick: ['칠판 아래 분필 가루가 없어요', '놀이 상자 조각이 다 모여 있어요', '신발장 실내화가 짝지어 놓여 있어요'] }, prompt: '반 일을 한 뒤 달라진 모습만 바구니에 넣어 보세요. 세 장이에요.' } },
                hints: ['누군가 일을 해서 좋아진 모습인지 생각해요.', '날씨처럼 반 일과 상관없는 것이 섞였는지 봐요.', '분필 가루가 없는 것과 조각이 다 모인 것이 반 일 한 뒤 모습이에요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 달라진 것을 문장으로 말하기', minutes: 14, tool: 'story', pair: true,
            teacher: '"\'○○을 해서 □□이 달라졌어요\' 틀에 넣어 말해요." 칠판에 문장 틀을 쓰고 함께 읽는다. 문장을 고른 뒤, 짝에게 내가 한 반 일과 달라진 점을 문장 틀로 말하게 한다. 두세 명이 반 전체에 들려준다.',
            task: '한 일과 달라진 모습을 이어 문장을 완성하고, 짝에게 내 반 일로 달라진 점을 말해요.',
            levels: CARD_LV,
            items: [
              { prompt: '한 일 옆에 그 일로 달라진 모습 카드를 놓아 보세요.', toolOptions: { mode: 'match', slots: [{ id: 'm1', label: '화분에 물을 주어서' }, { id: 'm2', label: '책을 번호대로 꽂아서' }, { id: 'm3', label: '창문을 닫아서' }], cards: ['잎이 싱싱해졌어요', '읽고 싶은 책을 빨리 찾아요', '교실이 따뜻해졌어요'] },
                target: { match: { m1: '잎이 싱싱해졌어요', m2: '읽고 싶은 책을 빨리 찾아요', m3: '교실이 따뜻해졌어요' } }, difficulty: 0.1 },
              { prompt: '민지의 말에 알맞은 낱말 카드를 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['우유갑을 펴서 모아서', '그네를 오래 타서', '늦잠을 자서'], slots: [{ id: 'b1', who: '민지', motif: 'leaf', label: '내가 ___ 교실에 냄새가 안 나요.' }] },
                target: { fill: { b1: '우유갑을 펴서 모아서' } }, difficulty: 0.1 },
              { prompt: '짝에게 "나는 ○○을 해서 □□이 달라졌어"라고 내 반 일로 달라진 점을 말하고 들은 뒤 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"오늘 찾은 달라진 모습은 저절로 생겼나요, 누군가 했기 때문인가요?" 출구 질문 뒤 "다음 시간에는 깨끗하고 편한 교실이 누구 덕분인지 더 자세히 알아봐요"라고 말한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '우리 교실', slots: ['반 일 하기 전', '반 일 한 뒤'], cards: ['신발장에 실내화가 뒤엉켜 있어요', '신발장 실내화가 가지런해요', '게시판 그림이 떨어져 있어요', '게시판 그림이 반듯하게 붙어 있어요'] }, prompt: '교실 모습 카드를 반 일 하기 전과 한 뒤로 나누어 보세요.', target: { sort: { '반 일 하기 전': ['신발장에 실내화가 뒤엉켜 있어요', '게시판 그림이 떨어져 있어요'], '반 일 한 뒤': ['신발장 실내화가 가지런해요', '게시판 그림이 반듯하게 붙어 있어요'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '"칠판을 닦아서 글씨가 잘 보여요."에서 한 일은?', options: ['칠판을 닦은 것', '글씨가 잘 보이는 것'], answer: 0, difficulty: 0.15, explain: '\'○○해서\' 앞이 한 일, 뒤가 달라진 모습이에요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '달라진 우리 교실',
      items: [
        { type: 'table', prompt: '반 일 하기 전과 한 뒤를 견주어 쓰세요.', columns: ['반 일', '하기 전', '한 뒤'], cells: [['화분 물 주기', '', ''], ['학급 문고 정리', '', ''], ['내 반 일:', '', '']] },
        { type: 'choice', prompt: '반 일을 한 뒤 모습은?', options: ['책상 줄이 삐뚤빼뚤해요', '책상 줄이 반듯해요'], answer: '책상 줄이 반듯해요' },
        { type: 'blank', prompt: '나는 (            )을 해서 (            )이 달라졌어요.', answer: '' },
        { type: 'draw', prompt: '반 일을 한 뒤의 교실 모습을 그려 보세요.' },
      ],
      easy: {
        note: '불편한 모습 → 하기 전, 좋아진 모습 → 한 뒤',
        items: [
          { type: 'choice', prompt: '하기 전 모습은?', options: ['책이 흩어져 있어요', '책이 꽂혀 있어요'], answer: '책이 흩어져 있어요' },
          { type: 'choice', prompt: '한 뒤 모습은?', options: ['잎이 싱싱해요', '잎이 늘어졌어요'], answer: '잎이 싱싱해요' },
          { type: 'short', prompt: '내가 한 반 일을 쓰세요.' },
          { type: 'draw', prompt: '달라진 교실을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고 카드가 네 장이에요. 문장 틀을 보며 말해요.',
      base: '여섯 장을 나누고 한 일과 달라진 모습을 이어요.',
      challenge: '반 일과 상관없는 카드가 섞인 다섯 장 가운데서 골라요. 짝에게 달라진 점을 두 가지 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 달라진 모습만 말하고 무엇을 했는지는 빠뜨린다 → \'○○해서\' 틀을 쓰게 한다. ② 날씨 같은 일도 반 일 결과로 여긴다 → 누군가 한 일인지 묻는다. ③ 내 반 일로는 달라진 것이 없다고 여긴다 → 그 일을 안 했다면 어땠을지 떠올리게 한다. 전후 사진은 교실 모습만 찍는다.',
  }));

  lessons.push(L(29, {
    title: '깨끗한 교실은 누구 덕분인지 까닭 찾기',
    objective: '저절로 되는 일과 누군가 해야 되는 일을 나누고, 깨끗하고 편한 교실·학교가 누구의 어떤 일 덕분인지 찾을 수 있다.',
    illustration: ART('paper hands of different children and a school janitor holding a broom, a watering can and a cloth, surrounding a sparkling clean classroom', '누구 덕분일까?', [
      { motif: 'sun', x: 410, y: 56, s: 0.6 }, { motif: 'house', x: 110, y: 214, color: 'peach' }, { motif: 'flower', x: 360, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"아침에 학교에 오면 복도가 깨끗해요. 밤사이 저절로 깨끗해졌을까요?" 반응을 듣는다. "해가 뜨는 것은 저절로 되지만, 복도가 깨끗한 것은 누군가 했기 때문이에요." 학교 주무관님, 급식실 조리사님처럼 우리가 잘 보지 못하는 분들의 일을 이야기한다.',
        student: '우리 학교가 깨끗하도록 일해 주시는 분을 한 분 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '어떻게 될까?', slots: ['저절로 되는 일', '누군가 해야 되는 일'], cards: ['해가 떠요', '복도가 깨끗해져요'], shuffle: false }, sequence: [{ sort: { '저절로 되는 일': ['해가 떠요'], '누군가 해야 되는 일': ['복도가 깨끗해져요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 저절로 되는 일과 누군가 해야 되는 일', minutes: 13, tool: 'mindmap',
            teacher: '"아무도 아무것도 하지 않아도 이 일이 생길까요?" 카드마다 같은 질문을 던진다. "교실이 깨끗해요"를 저절로 되는 일에 놓은 학생에게 "우리가 사흘 동안 청소를 안 하면 어떻게 될까요?"라고 되묻는다.',
            task: '일어나는 일 카드를 저절로 되는 일과 누군가 해야 되는 일로 나누어 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '일어나는 일 카드를 두 가지로 나누어 보세요.', toolOptions: { topic: '어떻게 될까?', slots: ['저절로 되는 일', '누군가 해야 되는 일'], cards: ['밤이 와요', '칠판이 깨끗해져요', '비가 내려요', '우유갑이 정리돼요'] },
                target: { sort: { '저절로 되는 일': ['밤이 와요', '비가 내려요'], '누군가 해야 되는 일': ['칠판이 깨끗해져요', '우유갑이 정리돼요'] } }, difficulty: 0.1,
                hints: ['아무도 아무것도 하지 않아도 그 일이 생길지 생각해요.', '정리하거나 닦는 일이 어느 칸에 있는지 봐요.', '밤과 비는 저절로, 칠판과 우유갑은 누군가 해야 돼요.'] },
              { prompt: '일어나는 일 카드를 두 가지로 나누어 보세요.', toolOptions: { topic: '어떻게 될까?', slots: ['저절로 되는 일', '누군가 해야 되는 일'], cards: ['나뭇잎이 바람에 흔들려요', '급식이 맛있게 차려져요', '화장실에 휴지가 채워져요', '겨울에 눈이 와요', '교실 전등이 켜져요'] },
                target: { sort: { '저절로 되는 일': ['나뭇잎이 바람에 흔들려요', '겨울에 눈이 와요'], '누군가 해야 되는 일': ['급식이 맛있게 차려져요', '화장실에 휴지가 채워져요', '교실 전등이 켜져요'] } }, difficulty: 0.2,
                hints: ['아무도 아무것도 하지 않아도 그 일이 생길지 생각해요.', '전등이나 휴지처럼 저절로 될 것 같은 카드를 다시 봐요. 누가 켜고 채울까요?', '바람과 눈은 저절로, 급식·휴지·전등은 누군가 해야 돼요.'] },
              { prompt: '깨끗하고 편한 학교의 모습 옆에 그렇게 만든 분 카드를 놓아 보세요.', toolOptions: { mode: 'match', topic: '학교를 돕는 분', slots: [{ id: 'm1', label: '점심이 따뜻하게 차려져요' }, { id: 'm2', label: '고장 난 문이 고쳐졌어요' }, { id: 'm3', label: '아플 때 쉴 곳이 있어요' }], cards: ['급식실 조리사님', '학교 시설 주무관님', '보건 선생님'] },
                target: { match: { m1: '급식실 조리사님', m2: '학교 시설 주무관님', m3: '보건 선생님' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['급식실 조리사님', '학교 시설 주무관님', '보건 선생님', '버스 기사님'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 고마운 분께 마음 전하기', minutes: 14, tool: 'emotion', pair: true,
            teacher: '"그분들이 일해 주셔서 우리가 편해요. 이럴 때 우리 마음은 어떨까요?" 상황에 맞는 마음을 놓은 뒤, 짝과 학교에서 일하시는 분 한 분께 \'덕분에 ○○해요\' 고마움 카드를 쓴다. 카드는 쉬는 시간에 함께 전해 드린다.',
            task: '상황에 맞는 마음 카드를 놓고, 짝과 학교에서 일하시는 분께 고마움 카드를 써요.',
            levels: CARD_LV,
            items: [
              { prompt: '학교에서 생긴 일에 어울리는 마음 카드를 놓아 보세요.', toolOptions: { cards: ['고마움', '미안함', '뿌듯함'], slots: [{ id: 'g1', label: '내가 흘린 국을 주무관님이 닦아 주셨어요' }, { id: 'g2', label: '내가 맡은 칠판을 깨끗이 닦았어요' }, { id: 'g3', label: '조리사님이 내가 좋아하는 반찬을 해 주셨어요' }] },
                target: { match: { g1: '미안함', g2: '뿌듯함', g3: '고마움' } }, difficulty: 0.15,
                hints: ['그 일을 누가 했는지, 내 실수인지 생각해요.', '내 실수를 남이 치워 주신 상황의 마음을 다시 봐요.', '해 주신 일은 고마움, 내 실수를 치워 주신 일은 미안함, 내가 해낸 일은 뿌듯함이에요.'] },
              { prompt: '고마움 카드에 들어갈 알맞은 말 카드를 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['덕분에 복도를 깨끗하게 다녀요', '복도가 너무 길어요', '청소는 원래 하시는 일이에요'], slots: [{ id: 'b1', who: '나', motif: 'flower', label: '주무관님, ___. 고맙습니다.' }] },
                target: { fill: { b1: '덕분에 복도를 깨끗하게 다녀요' } }, difficulty: 0.1 },
              { prompt: '짝과 학교에서 일하시는 분 한 분께 \'덕분에 ○○해요\' 고마움 카드를 쓰고 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"교실이 깨끗한 것은 저절로 되는 일인가요?" 출구 질문을 하고, 칠판에 \'누군가 한 일 덕분\'이라고 크게 쓴다. "그 누군가에는 우리 자신도 들어 있어요"라고 덧붙인다. 다음 시간에는 한 주 동안 한 반 일을 기록으로 돌아본다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '어떻게 될까?', slots: ['저절로 되는 일', '누군가 해야 되는 일'], cards: ['꽃밭에 잡초가 뽑혀요', '봄에 새싹이 돋아요', '쓰레기통이 비워져요'] }, prompt: '일어나는 일 카드를 두 가지로 나누어 보세요.', target: { sort: { '저절로 되는 일': ['봄에 새싹이 돋아요'], '누군가 해야 되는 일': ['꽃밭에 잡초가 뽑혀요', '쓰레기통이 비워져요'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '교실이 깨끗한 까닭으로 알맞은 것은?', options: ['저절로 깨끗해져서', '우리와 여러 분이 치우고 돌봐서'], answer: 1, difficulty: 0.05, explain: '교실은 누군가 치우고 돌보기 때문에 깨끗해요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '누구 덕분일까?',
      items: [
        { type: 'table', prompt: '나누어 쓰세요.', columns: ['저절로 되는 일', '누군가 해야 되는 일'], rows: 3 },
        { type: 'choice', prompt: '화장실에 휴지가 채워지는 것은?', options: ['저절로 돼요', '누군가 채워 줘요'], answer: '누군가 채워 줘요' },
        { type: 'short', prompt: '학교에서 일하시는 분께 쓴 고마움 카드의 말을 옮겨 쓰세요.' },
        { type: 'short', prompt: '우리 교실이 깨끗하도록 내가 하는 일을 쓰세요.' },
      ],
      easy: {
        note: '아무도 안 해도 생길까? 생각해요.',
        items: [
          { type: 'choice', prompt: '저절로 되는 일은?', options: ['비가 와요', '칠판이 깨끗해져요'], answer: '비가 와요' },
          { type: 'choice', prompt: '누군가 해야 되는 일은?', options: ['밤이 와요', '우유갑이 정리돼요'], answer: '우유갑이 정리돼요' },
          { type: 'short', prompt: '고마운 분을 한 분 쓰세요.' },
          { type: 'draw', prompt: '고마운 분께 카드를 드리는 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 고마움 카드는 틀에 낱말만 채워요.',
      base: '두 가지로 나누고 학교의 고마운 분을 찾아요.',
      challenge: '전등·휴지처럼 저절로 되는 것 같은 카드를 따져 나누어요. 고마움 카드에 내가 할 일도 더해 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 늘 되어 있는 것은 저절로 된다고 여긴다 → "아무도 안 하면?"을 묻는다. ② 청소하시는 분의 일을 당연하게 여긴다 → 일이 원래 그분의 몫이어도 고마운 마음은 전할 수 있다고 짚는다. ③ 내가 한 일은 작아서 상관없다고 여긴다 → 28차시의 달라진 모습을 다시 보여 준다. 고마움 카드를 전할 때는 미리 그분께 말씀드려 둔다.',
  }));

  lessons.push(L(30, {
    title: '한 주 반 일 기록을 그래프로 돌아보기',
    objective: '모둠의 한 주 반 일 기록표를 그림그래프로 나타내 읽고, 나의 한 주를 스스로 돌아볼 수 있다.',
    illustration: ART('a paper picture chart on the board with little star stickers showing how many days each team did their class jobs, children counting the stars', '한 주를 돌아봐요', [
      { motif: 'star', x: 120, y: 90 }, { motif: 'house', x: 370, y: 214, color: 'lavender' }, { motif: 'tree', x: 420, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '한 주 동안 붙인 당번표 붙임 딱지를 보여 준다. "딱지가 많은 칸과 적은 칸이 있어요. 한눈에 보려면 어떻게 하면 좋을까요?" 10차시에 읽은 그림그래프를 떠올리게 하고 "오늘은 우리가 직접 그래프를 만들어 봐요"라고 말한다.',
        student: '이번 주에 내가 반 일을 한 날이 며칠인지 손가락으로 세어 봐요.',
        demo: { tool: 'chart', options: { type: 'picture', title: '반 일 한 날', data: [['1모둠', 3], ['2모둠', 2]], unit: '일', icons: [{ value: 1, name: '1일' }], icon: 'star' }, sequence: [{ build: true }] },
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 기록표를 그림그래프로 나타내기', minutes: 14, tool: 'chart',
            teacher: '"표의 수만큼 별을 하나씩 놓아요. 다 놓고 나서 표와 같은지 다시 세어요." 별 하나가 하루라는 것을 칠판에 적는다. 그래프를 만든 뒤 "가장 많은 모둠은 어떻게 그렇게 할 수 있었을까요?"라고 물어 방법을 나누게 한다.',
            task: '모둠별 반 일 기록표를 보고 그림그래프를 완성해요.',
            levels: { easy: { showValues: true }, base: {}, challenge: {} },
            items: [
              { prompt: '표를 보고 모둠별로 반 일을 다 한 날을 그림그래프로 나타내 보세요.', toolOptions: { type: 'picture', title: '반 일을 다 한 날', data: [['1모둠', 5], ['2모둠', 3], ['3모둠', 4]], unit: '일', xLabel: '모둠', yLabel: '날 수', icons: [{ value: 1, name: '1일' }], icon: 'star', given: [0] }, target: { build: true }, difficulty: 0.15 },
              { prompt: '표를 보고 우리 반이 요일마다 빠뜨린 반 일 수를 그림그래프로 나타내 보세요.', toolOptions: { type: 'picture', title: '빠뜨린 반 일', data: [['월', 2], ['화', 1], ['수', 2], ['목', 4], ['금', 1]], unit: '개', xLabel: '요일', yLabel: '빠뜨린 수', icons: [{ value: 1, name: '1개' }], icon: 'circle' }, target: { build: true }, difficulty: 0.2 },
              { prompt: '빠뜨린 반 일 그래프를 보고 빠뜨린 일이 가장 많은 요일을 골라 보세요.', toolOptions: { type: 'picture', mode: 'read', title: '빠뜨린 반 일', data: [['월', 2], ['화', 1], ['수', 2], ['목', 4], ['금', 1]], unit: '개', icons: [{ value: 1, name: '1개' }], icon: 'circle', question: '빠뜨린 일이 가장 많은 요일은?', choices: ['월', '화', '수', '목', '금'] }, target: { pick: 3 }, difficulty: 0.1,
                conclude: '목요일에 빠뜨린 일이 많으니, 목요일 아침에 당번표를 한 번 더 보기로 해요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 나의 한 주 돌아보기', minutes: 14, tool: 'emotion',
            teacher: '"이번 주 내가 맡은 일을 얼마나 해냈는지 스스로 골라요. 정답은 없어요. 지금 내 마음과 기록을 보고 골라요." 다 고른 뒤 짝에게 다음 주에 바꿀 점 하나를 말하게 한다. 잘하지 못했다고 고른 학생을 다그치지 않고 "다음 주에 무엇을 해 볼까?"라고 묻는다.',
            task: '한 주 동안의 나를 돌아보며 마음의 크기를 고르고, 다음 주 다짐을 짝에게 말해요.',
            levels: { easy: { steps: 3 }, base: {}, challenge: {} },
            items: [
              { prompt: '이번 주 내가 맡은 반 일을 해낸 만큼 골라 보세요.', toolOptions: { mode: 'scale', situation: '이번 주 나는 맡은 반 일을 정한 날에 했어요.', feeling: '뿌듯함', ask: '얼마나 해냈나요?', scaleLabels: { 1: '조금', 5: '모두' } }, target: { level: 'any' }, difficulty: 0.05 },
              { prompt: '이번 주 친구의 일을 도운 만큼 골라 보세요.', toolOptions: { mode: 'scale', situation: '이번 주 나는 친구의 반 일을 도왔어요.', feeling: '기쁨', ask: '얼마나 도왔나요?', scaleLabels: { 1: '조금', 5: '많이' } }, target: { level: 'any' }, difficulty: 0.05 },
              { prompt: '반 일을 빠뜨린 날이 있다면 다음 주에 할 일로 알맞은 것을 골라 보세요.', toolOptions: { mode: 'branch', situation: '이번 주 목요일에 반 일을 빠뜨렸어요.', choices: [
                { id: 'plan', text: '목요일 아침에 당번표를 꼭 보기로 해요', result: '다음 주 목요일에는 잊지 않았어요.', mood: '뿌듯함' },
                { id: 'quit', text: '반 일을 그만하겠다고 해요', result: '내 몫의 일을 친구가 더 해요.', mood: '미안함', why: '빠뜨린 날이 있어도 방법을 바꾸면 해낼 수 있어요.' }] }, target: { choice: 'plan' }, difficulty: 0.1 },
              { prompt: '짝에게 다음 주에 바꿀 점 하나를 말하고 기록표 아래에 적은 뒤 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"그래프로 보니 우리 반이 더 신경 쓸 요일은 언제인가요?" 출구 질문 뒤 우리 반 그래프를 교실 뒤에 붙인다. 다음 시간에는 마을이 깨끗하고 편한 까닭을 돌아본다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'chart', options: { type: 'picture', mode: 'read', title: '반 일을 다 한 날', data: [['1모둠', 2], ['2모둠', 5], ['3모둠', 4]], unit: '일', icons: [{ value: 1, name: '1일' }], icon: 'star', question: '반 일을 다 한 날이 가장 많은 모둠은?', choices: ['1모둠', '2모둠', '3모둠'] }, prompt: '그림그래프를 보고 반 일을 다 한 날이 가장 많은 모둠을 골라 보세요.', target: { pick: 1 }, difficulty: 0.1 },
          { type: 'choice', prompt: '반 일을 빠뜨린 날이 있을 때 좋은 생각은?', options: ['다음엔 방법을 바꾸어 해 봐요', '나는 원래 못해요'], answer: 0, difficulty: 0.05, explain: '돌아보고 방법을 바꾸면 다음에는 해낼 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '나의 한 주 반 일',
      items: [
        { type: 'table', prompt: '내가 반 일을 한 날에 ○ 하세요.', columns: ['월', '화', '수', '목', '금'], rows: 1 },
        { type: 'figure', wide: true, prompt: '그림을 세어 빈칸에 쓰세요.', tool: 'chart', figures: [{ options: { type: 'picture', mode: 'read', title: '반 일을 다 한 날', data: [['1모둠', 5], ['2모둠', 3], ['3모둠', 4]], unit: '일', icons: [{ value: 1, name: '1일' }], icon: 'star' }, caption: '1모둠 (  )일, 2모둠 (  )일, 3모둠 (  )일' }], answer: '5, 3, 4' },
        { type: 'short', prompt: '이번 주 내가 잘한 점을 쓰세요.' },
        { type: 'short', prompt: '다음 주에 바꿀 점을 쓰세요.' },
      ],
      easy: {
        note: '별 하나가 하루예요.',
        items: [
          { type: 'table', prompt: '내가 반 일을 한 날에 ○ 하세요.', columns: ['월', '화', '수', '목', '금'], rows: 1 },
          { type: 'choice', prompt: '별 5개와 별 3개 가운데 많은 것은?', options: ['별 5개', '별 3개'], answer: '별 5개' },
          { type: 'short', prompt: '다음 주에 바꿀 점을 쓰세요.' },
          { type: 'draw', prompt: '반 일을 하는 내 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '그래프 줄 끝에 수가 보여요. 마음 크기는 세 칸에서 골라요.',
      base: '두 그래프를 완성하고 읽어요.',
      challenge: '다섯 요일 그래프를 표와 한 줄씩 견주며 완성해요. 다음 주 다짐을 두 가지 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 그림을 하나 더 놓거나 덜 놓는다 → 표의 수를 손가락으로 짚으며 하나씩 놓게 한다. ② 그래프를 다 만든 뒤 표와 견주지 않는다 → 한 줄씩 다시 세게 한다. ③ 자기 돌아보기를 \'잘해야 하는 것\'으로 여겨 모두 가장 큰 칸을 고른다 → 정답이 없다는 것을 거듭 말하고, 기록표를 보며 고르게 한다. 그래프 수는 실제 학급 기록으로 바꾸어 써도 된다.',
  }));

  lessons.push(L(31, {
    title: '깨끗하고 편한 마을을 만든 손길 찾기',
    objective: '마을의 깨끗하고 편한 모습이 누구의 어떤 일 덕분인지 이어 보고, 내가 이어 갈 마을 습관을 고를 수 있다.',
    illustration: ART('a cozy paper village at dusk with clean streets, working street lamps, neat recycling bins and neighbors greeting each other', '마을을 만든 손길', [
      { motif: 'moon', x: 70, y: 70, s: 0.6 }, { motif: 'house', x: 120, y: 214 }, { motif: 'house', x: 360, y: 214, color: 'mint' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"교실이 누구 덕분에 깨끗한지 알아보았지요? 마을은 어떨까요?" 8·21차시의 마을 사람들 그림을 다시 보여 준다. "가로등이 밤마다 켜지고 길이 깨끗한 것도 저절로 되는 일일까요?" 대답을 듣고 활동으로 들어간다.',
        student: '우리 동네에서 깨끗하거나 편하다고 느낀 곳을 하나 말해 봐요.',
        demo: { tool: 'story', options: { mode: 'match', slots: [{ id: 'd1', label: '아침 길이 깨끗해요' }], cards: ['환경미화원이 새벽에 길을 쓸어요'], shuffle: false }, sequence: [{ match: { d1: '환경미화원이 새벽에 길을 쓸어요' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 마을 모습과 그렇게 만든 일 잇기', minutes: 13, tool: 'story',
            teacher: '"이 모습이 생기려면 누가 무엇을 했을까요?" 마을 모습마다 한 일을 짝 짓게 한다. 어른의 일뿐 아니라 이웃 모두가 한 일(분리배출, 꽃밭 가꾸기)도 있다는 것을 짚는다.',
            task: '마을 모습 옆에 그 모습을 만든 일 카드를 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '마을 모습 옆에 그 모습을 만든 일 카드를 놓아 보세요.', toolOptions: { mode: 'match', slots: [{ id: 'm1', label: '밤길이 밝아요' }, { id: 'm2', label: '분리수거장이 깔끔해요' }, { id: 'm3', label: '공원 꽃밭이 예뻐요' }], cards: ['고장 난 가로등을 고쳐요', '이웃이 약속대로 나누어 내놓아요', '주민들이 함께 꽃을 심어요'] },
                target: { match: { m1: '고장 난 가로등을 고쳐요', m2: '이웃이 약속대로 나누어 내놓아요', m3: '주민들이 함께 꽃을 심어요' } }, difficulty: 0.1 },
              { prompt: '마을 모습 옆에 그 모습을 만든 일 카드를 놓아 보세요.', toolOptions: { mode: 'match', slots: [{ id: 'm1', label: '놀이터에 쓰레기가 없어요' }, { id: 'm2', label: '눈 온 날 길이 미끄럽지 않아요' }, { id: 'm3', label: '버스 정류장이 조용해요' }], cards: ['아이들이 쓰레기를 되가져가요', '이웃이 집 앞 눈을 함께 쓸어요', '기다리는 사람들이 작게 말해요'] },
                target: { match: { m1: '아이들이 쓰레기를 되가져가요', m2: '이웃이 집 앞 눈을 함께 쓸어요', m3: '기다리는 사람들이 작게 말해요' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['아이들이 쓰레기를 되가져가요', '이웃이 집 앞 눈을 함께 쓸어요', '기다리는 사람들이 작게 말해요', '하늘에서 눈이 그쳐요'] } } },
                hints: ['그 모습이 생기려면 사람들이 무엇을 해야 했을지 생각해요.', '저절로 되는 일 카드를 놓지 않았는지 봐요.', '쓰레기 되가져가기, 눈 함께 쓸기, 작게 말하기가 그 모습을 만들었어요.'] },
              { prompt: '마을의 깨끗하고 편한 모습을 만든 사람만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '마을을 만든 사람', cards: ['환경미화원', '분리배출을 지키는 이웃', '쓰레기를 되가져가는 어린이', '길에 껌을 뱉는 사람'] },
                target: { pick: ['환경미화원', '분리배출을 지키는 이웃', '쓰레기를 되가져가는 어린이'] }, difficulty: 0.1,
                hints: ['그 사람이 하는 일로 마을이 좋아지는지 생각해요.', '마을을 더럽히는 사람이 섞였는지 봐요.', '껌을 뱉는 사람만 빼고 모두 마을을 깨끗하게 만들어요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 내가 이어 갈 마을 습관 고르기', minutes: 14, tool: 'mindmap', pair: true,
            teacher: '"한 번 하고 끝나는 일과 날마다 이어 가는 습관은 무엇이 다를까요?" 습관은 날마다 되풀이하는 것이라고 짚는다. 마을 습관 카드를 고른 뒤, 내가 이어 갈 습관 하나를 습관 카드에 그려 짝과 바꾸어 본다. 습관 카드는 집에 가져가 냉장고에 붙이게 한다.',
            task: '마을을 위해 날마다 이어 갈 수 있는 습관을 고르고, 내 습관 카드를 그려요.',
            levels: CARD_LV,
            items: [
              { prompt: '마을을 위해 날마다 이어 갈 수 있는 습관만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '이어 갈 마을 습관', cards: ['밖에서 생긴 쓰레기는 집에 가져와 버려요', '이웃 어른을 만나면 인사해요', '한 번 크게 대청소를 하고 끝내요', '놀이터에서 차례를 지켜요'] },
                target: { pick: ['밖에서 생긴 쓰레기는 집에 가져와 버려요', '이웃 어른을 만나면 인사해요', '놀이터에서 차례를 지켜요'] }, difficulty: 0.15,
                hints: ['날마다 되풀이할 수 있는 일인지 생각해요.', '한 번 하고 끝내는 일이 섞였는지 봐요.', '한 번 대청소하고 끝내기만 빼고 모두 날마다 이어 갈 습관이에요.'] },
              { prompt: '마을 습관 카드를 지키는 곳에 따라 나누어 보세요.', toolOptions: { topic: '마을 습관', slots: ['길에서', '놀이터에서', '버스에서'], cards: ['신호를 지켜 건너요', '그네를 바꾸어 타요', '어른께 자리를 양보해요', '모래를 뿌리지 않아요'] },
                target: { sort: { '길에서': ['신호를 지켜 건너요'], '놀이터에서': ['그네를 바꾸어 타요', '모래를 뿌리지 않아요'], '버스에서': ['어른께 자리를 양보해요'] } }, difficulty: 0.15 },
              { prompt: '내가 이어 갈 마을 습관 하나를 습관 카드에 그려 짝과 바꾸어 보고 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"마을이 깨끗하고 편한 것은 누구 덕분이었나요?" 출구 질문 뒤 "다음 시간에는 다음 달에 맡고 싶은 반 일을 골라 손을 들어요"라고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { mode: 'match', slots: [{ id: 'e1', label: '도서관 책이 깨끗해요' }, { id: 'e2', label: '공원 벤치가 깨끗해요' }], cards: ['앉았던 자리를 치우고 일어나요', '빌린 책을 아껴 읽고 돌려줘요'] }, prompt: '마을 모습 옆에 그 모습을 만든 일 카드를 놓아 보세요.', target: { match: { e1: '빌린 책을 아껴 읽고 돌려줘요', e2: '앉았던 자리를 치우고 일어나요' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '\'습관\'에 알맞은 것은?', options: ['한 번 하고 끝내는 일', '날마다 되풀이하는 일'], answer: 1, difficulty: 0.1, explain: '습관은 날마다 되풀이해서 몸에 붙은 일이에요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '마을을 만든 손길',
      items: [
        { type: 'table', prompt: '마을 모습과 그 모습을 만든 일을 쓰세요.', columns: ['마을 모습', '만든 일'], cells: [['밤길이 밝아요', ''], ['놀이터가 깨끗해요', ''], ['', '']] },
        { type: 'choice', prompt: '날마다 이어 갈 마을 습관은?', options: ['한 번 대청소하고 끝내기', '이웃께 인사하기'], answer: '이웃께 인사하기' },
        { type: 'draw', prompt: '내가 이어 갈 마을 습관 카드를 그리세요.' },
        { type: 'short', prompt: '그 습관을 언제, 어디에서 할지 쓰세요.' },
      ],
      easy: {
        note: '날마다 할 수 있는 일을 골라요.',
        items: [
          { type: 'choice', prompt: '마을을 깨끗하게 하는 사람은?', options: ['쓰레기를 되가져가는 어린이', '껌을 뱉는 사람'], answer: '쓰레기를 되가져가는 어린이' },
          { type: 'short', prompt: '내가 이어 갈 습관을 쓰세요.' },
          { type: 'short', prompt: '그 습관을 할 곳을 쓰세요.' },
          { type: 'draw', prompt: '습관 카드를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 습관 카드는 그림 하나와 낱말 하나로 만들어요.',
      base: '마을 모습과 만든 일을 잇고, 습관을 곳에 따라 나누어요.',
      challenge: '저절로 되는 일 함정 카드가 섞여요. 습관 카드에 언제·어디서를 함께 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 마을을 만드는 사람은 일하는 어른뿐이라고 여긴다 → 이웃·어린이의 작은 습관도 마을을 바꾼다는 것을 보여 준다. ② 습관과 한 번의 행동을 헷갈린다 → \'날마다\'를 붙여 말이 되는지 살핀다. ③ 습관 카드를 너무 크게 정한다(날마다 마을 청소) → 지금 바로 날마다 할 수 있는 작은 일로 줄인다.',
  }));

  lessons.push(L(32, {
    title: '다음에 맡고 싶은 반 일 고르고 손 들기',
    objective: '해 본 반 일을 돌아보고 다음에 맡고 싶은 반 일을 까닭과 함께 골라, 손을 들고 바른 말로 신청할 수 있다.',
    illustration: ART('a group of paper children raising their hands in front of a new class job chart, one child holding a watering can card and smiling', '다음엔 이 일을 맡을래요', [
      { motif: 'star', x: 120, y: 90 }, { motif: 'house', x: 370, y: 214, color: 'rose' }, { motif: 'flower', x: 300, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"한 달 동안 반 일을 해 보았어요. 다음 달에는 다른 일을 맡아 볼까요?" 반 일 카드를 칠판에 다시 붙인다. "하고 싶은 일을 고를 때는 \'왜\' 하고 싶은지도 말할 수 있어야 해요. 그리고 친구와 겹칠 때 정하는 방법도 기억하나요?" 20차시의 번갈아 하기를 떠올리게 한다.',
        student: '다음에 해 보고 싶은 반 일을 하나 떠올려 봐요.',
        demo: { tool: 'story', options: { mode: 'match', slots: [{ id: 'd1', label: '"식물이 자라는 것을 보고 싶어요."' }], cards: ['화분 물 주기'], shuffle: false }, sequence: [{ match: { d1: '화분 물 주기' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 하고 싶은 까닭에 맞는 반 일 찾기', minutes: 12, tool: 'story',
            teacher: '"친구가 말한 까닭에 가장 잘 맞는 일은 무엇일까요?" 까닭 속 낱말(식물, 책, 정리, 높은 곳)에 밑줄을 긋게 한다. 다 놓은 뒤 "나의 까닭은 무엇인가요?"라고 물어 내 까닭을 말로 만들어 보게 한다.',
            task: '친구가 말한 까닭 옆에 그 까닭에 맞는 반 일 카드를 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '친구가 말한 까닭 옆에 알맞은 반 일 카드를 놓아 보세요.', toolOptions: { mode: 'match', slots: [{ id: 'm1', label: '"새 책을 친구들에게 알려 주고 싶어요."' }, { id: 'm2', label: '"교실 공기를 맑게 하고 싶어요."' }, { id: 'm3', label: '"친구들 그림을 예쁘게 붙여 주고 싶어요."' }], cards: ['학급 문고 정리', '쉬는 시간 창문 열기', '게시판 꾸미기'] },
                target: { match: { m1: '학급 문고 정리', m2: '쉬는 시간 창문 열기', m3: '게시판 꾸미기' } }, difficulty: 0.1 },
              { prompt: '친구가 말한 까닭 옆에 알맞은 반 일 카드를 놓아 보세요.', toolOptions: { mode: 'match', slots: [{ id: 'm1', label: '"지난달 우유갑이 넘쳐서 냄새가 났어요. 제가 고치고 싶어요."' }, { id: 'm2', label: '"전기를 아끼고 싶어요."' }, { id: 'm3', label: '"아침 일찍 오니까 그때 할 수 있는 일을 하고 싶어요."' }], cards: ['우유갑 모으기', '빈 교실 불 끄기', '아침 화분 물 주기'] },
                target: { match: { m1: '우유갑 모으기', m2: '빈 교실 불 끄기', m3: '아침 화분 물 주기' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['우유갑 모으기', '빈 교실 불 끄기', '아침 화분 물 주기', '점심 뒤 칠판 닦기'] } } } },
              { prompt: '반 일을 신청할 때의 바른 모습만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '바른 신청 모습', cards: ['손을 들고 차례를 기다려요', '하고 싶은 까닭을 함께 말해요', '"내가 할 거야!" 하고 소리쳐요', '겹치면 번갈아 하자고 말해요'] },
                target: { pick: ['손을 들고 차례를 기다려요', '하고 싶은 까닭을 함께 말해요', '겹치면 번갈아 하자고 말해요'] }, difficulty: 0.1,
                hints: ['모두가 기분 좋게 반 일을 정할 수 있는 모습인지 생각해요.', '다른 친구의 차례를 빼앗는 모습이 섞였는지 봐요.', '소리치기만 빼고 모두 바른 신청 모습이에요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 내 반 일 신청하기', minutes: 16, tool: 'emotion',
            teacher: '"지금 고른 일을 떠올리면 마음이 어떤가요? 정답은 없어요." 마음 크기를 고른 뒤 반 전체 신청을 한다. 선생님이 일 이름을 하나씩 부르면 하고 싶은 사람이 손을 들고 까닭을 한 문장으로 말한다. 겹치면 번갈아 하기나 가위바위보처럼 반이 정한 방법으로 정한다.',
            task: '고른 반 일을 떠올리며 마음 크기를 고르고, 손을 들어 까닭과 함께 신청해요.',
            levels: { easy: { steps: 3 }, base: {}, challenge: {} },
            items: [
              { prompt: '다음 달에 맡고 싶은 반 일을 떠올리면 설레는 마음이 얼마나 되는지 골라 보세요.', toolOptions: { mode: 'scale', situation: '다음 달에는 새로운 반 일을 맡아요.', feeling: '설렘' }, target: { level: 'any' }, difficulty: 0.05 },
              { prompt: '하고 싶은 일을 친구도 하고 싶다고 손을 들었어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '내가 하고 싶은 게시판 꾸미기를 하준이도 하고 싶대요.', choices: [
                { id: 'share', text: '"보름씩 나누어 하자." 하고 말해요', result: '둘 다 게시판을 꾸밀 수 있어요.', mood: '편안함' },
                { id: 'sulk', text: '토라져서 아무 일도 안 하겠다고 해요', result: '반 일 하나가 비어요.', mood: '속상함', why: '겹칠 때는 반이 정한 방법으로 정해요.' }] }, target: { choice: 'share' }, difficulty: 0.1 },
              { prompt: '선생님이 반 일 이름을 부를 때 손을 들고 "저는 ○○ 때문에 □□을 하고 싶어요"라고 신청한 뒤 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"새로 맡은 일과 하는 때를 짝에게 말해 볼까요?" 새 1인 1역 표를 붙인다. "17~32차시 동안 우리는 함께 쓰는 것을 찾고, 맡은 일을 하고, 돌아보았어요." 다음 시간부터는 아직 해 보지 않은 새로운 일에 도전하는 공부를 한다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { mode: 'match', slots: [{ id: 'e1', label: '"친구들이 넘어지지 않게 하고 싶어요."' }, { id: 'e2', label: '"식물을 잘 기르고 싶어요."' }], cards: ['화분 물 주기', '바닥 떨어진 것 줍기'] }, prompt: '친구가 말한 까닭 옆에 알맞은 반 일 카드를 놓아 보세요.', target: { match: { e1: '바닥 떨어진 것 줍기', e2: '화분 물 주기' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '반 일을 신청할 때 함께 말하면 좋은 것은?', options: ['하고 싶은 까닭', '친구가 못하는 점'], answer: 0, difficulty: 0.05, explain: '까닭을 말하면 친구들도 내 마음을 알 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '다음에 맡을 반 일',
      items: [
        { type: 'table', prompt: '해 본 반 일을 돌아보세요.', columns: ['해 본 반 일', '잘한 점', '어려웠던 점'], rows: 1 },
        { type: 'blank', prompt: '저는 (            ) 때문에 (            )을 하고 싶어요.', answer: '' },
        { type: 'choice', prompt: '하고 싶은 일이 친구와 겹치면?', options: ['번갈아 하자고 말해요', '토라져요'], answer: '번갈아 하자고 말해요' },
        { type: 'draw', prompt: '새로 맡을 반 일을 하는 내 모습을 그려 보세요.' },
      ],
      easy: {
        note: '하고 싶은 까닭을 한 낱말로 써도 돼요.',
        items: [
          { type: 'short', prompt: '해 본 반 일을 쓰세요.' },
          { type: 'short', prompt: '다음에 하고 싶은 반 일을 쓰세요.' },
          { type: 'short', prompt: '그 일을 하고 싶은 까닭을 쓰세요.' },
          { type: 'draw', prompt: '그 일을 하는 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 신청할 때 문장 틀 쪽지를 보고 말해요.',
      base: '까닭과 반 일을 잇고, 까닭을 넣어 신청해요.',
      challenge: '까닭에 맞지 않는 함정 일 카드가 섞여요. 신청할 때 지난달에 배운 점도 함께 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① "그냥요"라고 까닭을 말하지 못한다 → 지난달 반 일에서 좋았던 점을 먼저 묻는다. ② 인기 있는 일에만 몰린다 → 겹치는 일은 나누어 하기로 미리 정한다. ③ 마음 크기를 \'바른 답\'으로 여긴다 → 정답이 없는 자기 돌아보기라고 다시 말한다. 반 전체 신청은 일 이름을 부르며 손을 들게 해 한 사람이 오래 서 있지 않게 한다.',
  }));

  // ───────────────────────── 33~38차시: 마을에서 해 보고 싶은 새로운 일과 까닭(호기심과 도전 — 생활 맥락) ─────────────────────────

  lessons.push(L(33, {
    title: '마을에서 해 볼 수 있는 새로운 일 찾기',
    objective: '마을의 곳마다 어린이가 해 볼 수 있는 새로운 일을 찾아 나누고, 해 보고 싶은 일을 하나 고를 수 있다.',
    illustration: ART('a paper village with tiny activity signs, a child borrowing a book at the library, another planting seeds in a community garden, another learning a folk game from a grandmother', '해 보고 싶은 일이 있나요?', [
      { motif: 'flower', x: 110, y: 228 }, { motif: 'house', x: 370, y: 214, color: 'mint' }, { motif: 'star', x: 240, y: 90 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"우리 마을을 탐험하면서 \'나도 해 보고 싶다\' 하고 생각한 일이 있었나요?" 서너 명에게 듣는다. "해 보지 않은 일은 무서우니까 안 하는 게 낫다"는 말이 나오면 칠판에 적어 두고 "정말 그럴까요? 이번에 함께 알아봐요"라고 말한다. 선생님이 어릴 때 처음 해 본 일(혼자 심부름 가기) 이야기를 짧게 들려준다.',
        student: '마을에서 아직 해 보지 않았지만 해 보고 싶은 일을 하나 떠올려 봐요.',
        demo: { tool: 'mindmap', options: { topic: '마을에서 해 볼 일', slots: ['도서관에서', '공원에서'], cards: ['혼자 책 빌리기', '꽃씨 심기'], shuffle: false }, sequence: [{ sort: { '도서관에서': ['혼자 책 빌리기'], '공원에서': ['꽃씨 심기'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 곳마다 해 볼 수 있는 새로운 일', minutes: 13, tool: 'mindmap',
            teacher: '"이 일은 마을 어디에서 해 볼 수 있을까요?" 일 카드를 읽고 그 곳에 무엇이 있는지 떠올리게 한다. 다 나눈 뒤 "이 가운데 아직 해 보지 않은 일에 손가락 하나를 대 봐요"라고 해 각자 해 보고 싶은 일을 마음속에 고르게 한다.',
            task: '새로운 일 카드를 그 일을 해 볼 수 있는 곳으로 나누어 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '새로운 일 카드를 해 볼 수 있는 곳으로 나누어 보세요.', toolOptions: { topic: '마을에서 해 볼 일', slots: ['도서관에서', '시장에서', '공원에서'], cards: ['그림책 읽어 주기 모임 가기', '두부 한 모 사 보기', '줄넘기 이어 넘기', '반납함에 책 넣어 보기', '떡집 사장님께 떡 이름 여쭙기', '나무 이름표 읽어 보기'] },
                target: { sort: { '도서관에서': ['그림책 읽어 주기 모임 가기', '반납함에 책 넣어 보기'], '시장에서': ['두부 한 모 사 보기', '떡집 사장님께 떡 이름 여쭙기'], '공원에서': ['줄넘기 이어 넘기', '나무 이름표 읽어 보기'] } }, difficulty: 0.15,
                levels: { easy: { toolOptions: { slots: ['도서관에서', '시장에서'], cards: ['그림책 읽어 주기 모임 가기', '두부 한 모 사 보기', '반납함에 책 넣어 보기', '떡집 사장님께 떡 이름 여쭙기'] }, target: { sort: { '도서관에서': ['그림책 읽어 주기 모임 가기', '반납함에 책 넣어 보기'], '시장에서': ['두부 한 모 사 보기', '떡집 사장님께 떡 이름 여쭙기'] } }, prompt: '새로운 일 카드를 도서관과 시장으로 나누어 보세요.' } },
                hints: ['그 일을 하려면 무엇이 있어야 하는지, 그것이 어느 곳에 있는지 생각해요.', '두부와 떡이 있는 곳, 책이 있는 곳을 다시 견주어 봐요.', '책 모임과 반납함은 도서관, 두부와 떡은 시장, 줄넘기와 나무 이름표는 공원이에요.'] },
              { prompt: '새로운 일 카드를 해 볼 수 있는 곳으로 나누어 보세요.', toolOptions: { topic: '마을에서 해 볼 일', slots: ['주민센터에서', '우체국에서'], cards: ['마을 텃밭 신청 안내 듣기', '할머니께 엽서 부치기', '우표 고르기', '어린이 요리 교실 알아보기'] },
                target: { sort: { '주민센터에서': ['마을 텃밭 신청 안내 듣기', '어린이 요리 교실 알아보기'], '우체국에서': ['할머니께 엽서 부치기', '우표 고르기'] } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['마을 텃밭 신청 안내 듣기', '할머니께 엽서 부치기', '우표 고르기', '어린이 요리 교실 알아보기', '집에서 낮잠 자기'] } } },
                hints: ['그 일을 하려면 무엇이 있어야 하는지, 그것이 어느 곳에 있는지 생각해요.', '마을 사람들의 배움 모임을 알려 주는 곳이 어디인지 다시 봐요.', '텃밭 안내와 요리 교실은 주민센터, 엽서와 우표는 우체국이에요.'] },
              { prompt: '2학년 어린이가 마을에서 안전하게 해 볼 수 있는 새로운 일만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '해 볼 수 있는 새로운 일', cards: ['보호자와 함께 시장에서 장 보기', '도서관 책 읽어 주기 모임 가기', '혼자 밤에 공원 가 보기', '모르는 차를 얻어 타 보기'] },
                target: { pick: ['보호자와 함께 시장에서 장 보기', '도서관 책 읽어 주기 모임 가기'] }, difficulty: 0.1,
                hints: ['새로운 일이어도 안전한지 먼저 생각해요.', '혼자 밤에 하거나 모르는 사람과 하는 일이 섞였는지 봐요.', '보호자와 장 보기, 책 모임 가기가 안전한 새로운 일이에요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 해 보고 싶은 일 하나 고르기', minutes: 14, tool: 'emotion', pair: true,
            teacher: '"새로운 일을 떠올리면 마음이 어떤가요? 설레는 사람도, 조금 걱정되는 사람도 있을 거예요. 둘 다 괜찮아요." 마음 크기는 정답이 없다고 말해 준다. 무서워서 아무것도 고르지 않겠다는 학생에게 "가장 작고 쉬운 새로운 일은 무엇일까?"라고 묻고 함께 찾는다. 짝에게 고른 일을 말하게 한다.',
            task: '새로운 일을 떠올리며 마음 크기를 고르고, 해 보고 싶은 일 하나를 짝에게 말해요.',
            levels: { easy: { steps: 3 }, base: {}, challenge: {} },
            items: [
              { prompt: '마을에서 새로운 일을 해 본다고 떠올리면 설레는 마음이 얼마나 되는지 골라 보세요.', toolOptions: { mode: 'scale', situation: '이번 주에 마을에서 해 보지 않은 일을 하나 해 보기로 했어요.', feeling: '설렘' }, target: { level: 'any' }, difficulty: 0.05 },
              { prompt: '새로운 일을 해 본다고 떠올리면 걱정되는 마음이 얼마나 되는지 골라 보세요.', toolOptions: { mode: 'scale', situation: '이번 주에 마을에서 해 보지 않은 일을 하나 해 보기로 했어요.', feeling: '걱정' }, target: { level: 'any' }, difficulty: 0.05 },
              { prompt: '해 보지 않은 일이 조금 무서워요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '도서관 책 읽어 주기 모임에 가 보고 싶지만 처음이라 조금 무서워요.', choices: [
                { id: 'small', text: '보호자와 함께 먼저 구경만 해 봐요', result: '구경해 보니 다음엔 들어갈 수 있을 것 같아요.', mood: '편안함' },
                { id: 'never', text: '무서우니까 절대 안 해요', result: '재미있는 모임을 알 기회를 놓쳐요.', mood: '슬픔', why: '작게 시작하면 무서운 마음도 줄어요.' }] }, target: { choice: 'small' }, difficulty: 0.1 },
              { prompt: '짝에게 "나는 ○○에서 □□을 해 보고 싶어"라고 해 보고 싶은 일 하나를 말하고 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"해 보고 싶은 일을 고른 사람?" 손을 든 학생 두세 명에게 고른 일을 듣는다. 칠판의 \'해 보지 않은 일은 무서우니 안 하는 게 낫다\'를 가리키며 "작게 시작하는 방법이 있었지요"라고 짚는다. 다음 시간에는 왜 하고 싶은지 까닭을 말해 본다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '마을에서 해 볼 일', slots: ['도서관에서', '시장에서'], cards: ['어묵 가게에서 값 여쭙기', '도서관 회원 카드 만들기'] }, prompt: '새로운 일 카드를 해 볼 수 있는 곳으로 나누어 보세요.', target: { sort: { '도서관에서': ['도서관 회원 카드 만들기'], '시장에서': ['어묵 가게에서 값 여쭙기'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '해 보지 않은 일이 조금 무서울 때 좋은 생각은?', options: ['절대 하지 않아요', '작게 시작해 봐요'], answer: 1, difficulty: 0.05, explain: '작게, 안전하게 시작하면 무서운 마음이 줄어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '마을에서 해 볼 새로운 일',
      items: [
        { type: 'table', prompt: '곳마다 해 볼 수 있는 새로운 일을 쓰세요.', columns: ['곳', '해 볼 수 있는 일'], cells: [['도서관', ''], ['시장', ''], ['공원', '']] },
        { type: 'choice', prompt: '안전하게 해 볼 수 있는 새로운 일은?', options: ['혼자 밤에 공원 가기', '보호자와 시장 장 보기'], answer: '보호자와 시장 장 보기' },
        { type: 'blank', prompt: '나는 (        )에서 (            )을 해 보고 싶어요.', answer: '' },
        { type: 'draw', prompt: '해 보고 싶은 일을 하는 내 모습을 그려 보세요.' },
      ],
      easy: {
        note: '가장 작고 쉬운 새로운 일도 좋아요.',
        items: [
          { type: 'choice', prompt: '도서관에서 해 볼 일은?', options: ['책 빌리기', '두부 사기'], answer: '책 빌리기' },
          { type: 'short', prompt: '해 보고 싶은 일을 쓰세요.' },
          { type: 'short', prompt: '그 일을 할 곳을 쓰세요.' },
          { type: 'draw', prompt: '그 일을 하는 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고 곳이 두 개예요. 마음 크기는 세 칸이에요.',
      base: '세 곳으로 나누고 해 보고 싶은 일을 골라요.',
      challenge: '새로운 일이 아닌 함정 카드가 섞여요. 해 보고 싶은 일을 두 가지 골라 견주어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 새로운 일은 무섭다며 고르지 않는다 → 가장 작은 일(구경하기·여쭙기)부터 찾게 한다. ② 위험한 일을 도전으로 여긴다 → 안전한지 먼저 살피는 것이 도전의 첫걸음이라고 짚는다. ③ 친구가 고른 일을 따라 고른다 → "내가 정말 궁금한 일"인지 묻는다. 학생마다 해 본 일이 달라 \'해 본 일·안 해 본 일\'은 화면 문항으로 나누지 않고 말로만 나눈다.',
  }));

  lessons.push(L(34, {
    title: '해 보고 싶은 까닭을 짧게 말하기',
    objective: '해 보고 싶은 일과 그 까닭을 이어 \'○○을 해 보고 싶어요. 왜냐하면 □□ 때문이에요.\'로 짧게 말할 수 있다.',
    illustration: ART('a paper child holding a speech bubble with a small heart and a magnifying glass, explaining a wish to classmates around a village map', '왜냐하면…', [
      { motif: 'house', x: 110, y: 214, color: 'peach' }, { motif: 'star', x: 380, y: 86 }, { motif: 'tree', x: 400, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"선생님은 마을 텃밭에서 상추를 길러 보고 싶어요." 잠깐 멈추고 "왜 그런지 궁금한 사람?"이라고 묻는다. "왜냐하면 내가 기른 채소로 비빔밥을 만들어 보고 싶기 때문이에요." 칠판에 \'왜냐하면 ~ 때문이에요\'를 쓰고 함께 읽는다. 까닭을 들으면 그 사람의 마음을 더 잘 알 수 있다고 말한다.',
        student: '"왜냐하면 ~ 때문이에요."를 소리 내어 따라 말해 봐요.',
        demo: { tool: 'story', options: { mode: 'match', slots: [{ id: 'd1', label: '텃밭에서 상추 기르기' }], cards: ['내가 기른 채소를 먹어 보고 싶어서'], shuffle: false }, sequence: [{ match: { d1: '내가 기른 채소를 먹어 보고 싶어서' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 하고 싶은 일과 까닭 잇기', minutes: 13, tool: 'story',
            teacher: '"이 까닭은 어떤 일과 이어질까요? 까닭 속 낱말을 찾아요." 까닭에서 일과 이어지는 낱말(책, 우표, 떡)을 밑줄 긋게 한다. 까닭이 아닌 카드("그냥요", "몰라요")는 까닭이 될 수 없다는 것도 짚는다.',
            task: '해 보고 싶은 일 옆에 알맞은 까닭 카드를 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '해 보고 싶은 일 옆에 알맞은 까닭 카드를 놓아 보세요.', toolOptions: { mode: 'match', slots: [{ id: 'm1', label: '도서관에서 혼자 책 빌리기' }, { id: 'm2', label: '우체국에서 엽서 부치기' }, { id: 'm3', label: '떡집에서 떡 만드는 것 구경하기' }], cards: ['읽고 싶은 공룡 책이 있어서', '멀리 사는 할머니께 소식을 전하고 싶어서', '쌀이 어떻게 떡이 되는지 궁금해서'] },
                target: { match: { m1: '읽고 싶은 공룡 책이 있어서', m2: '멀리 사는 할머니께 소식을 전하고 싶어서', m3: '쌀이 어떻게 떡이 되는지 궁금해서' } }, difficulty: 0.1 },
              { prompt: '해 보고 싶은 일 옆에 알맞은 까닭 카드를 놓아 보세요.', toolOptions: { mode: 'match', slots: [{ id: 'm1', label: '마을 텃밭에 방울토마토 심기' }, { id: 'm2', label: '어르신께 사방치기 배우기' }, { id: 'm3', label: '시장에서 혼자 값 여쭙기' }], cards: ['열매가 열리는 것을 보고 싶어서', '옛날 놀이가 궁금해서', '혼자서도 말할 수 있는지 해 보고 싶어서'] },
                target: { match: { m1: '열매가 열리는 것을 보고 싶어서', m2: '옛날 놀이가 궁금해서', m3: '혼자서도 말할 수 있는지 해 보고 싶어서' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['열매가 열리는 것을 보고 싶어서', '옛날 놀이가 궁금해서', '혼자서도 말할 수 있는지 해 보고 싶어서', '그냥요'] } } },
                hints: ['까닭 속에서 일과 이어지는 낱말을 찾아요.', '\'열매\', \'옛날 놀이\', \'혼자 말하기\'가 어느 일과 이어지는지 다시 봐요.', '토마토는 열매, 사방치기는 옛날 놀이, 값 여쭙기는 혼자 말하기예요.'] },
              { prompt: '까닭이 될 수 있는 말만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '까닭이 되는 말', cards: ['새로운 친구를 사귀고 싶어서', '그냥요', '내가 할 수 있는지 알고 싶어서', '몰라요'] },
                target: { pick: ['새로운 친구를 사귀고 싶어서', '내가 할 수 있는지 알고 싶어서'] }, difficulty: 0.1,
                hints: ['"왜?"라고 물었을 때 대답이 되는 말인지 생각해요.', '아무 까닭도 알려 주지 않는 말이 섞였는지 봐요.', '\'그냥요\'와 \'몰라요\'만 빼고 모두 까닭이에요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 내 까닭 말하기', minutes: 14, tool: 'story', pair: true,
            teacher: '"말풍선 빈칸에 알맞은 까닭을 넣어 볼까요?" 문장을 완성한 뒤 짝과 \'○○을 해 보고 싶어요. 왜냐하면 □□ 때문이에요.\'로 번갈아 말한다. 까닭을 찾지 못하는 학생에게 "그 일을 하면 무엇이 좋을 것 같아요?"라고 묻는다. 모둠마다 한 명씩 반 전체에 말한다.',
            task: '말풍선의 까닭 빈칸을 채우고, 짝과 내가 해 보고 싶은 일과 까닭을 말해요.',
            levels: CARD_LV,
            items: [
              { prompt: '준호의 말풍선 빈칸에 알맞은 까닭 카드를 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['자전거로 공원 한 바퀴를 달려 보고 싶기', '자전거가 무겁기', '밥을 먹기'], slots: [{ id: 'b1', who: '준호', motif: 'sun', label: '보조 바퀴 없이 자전거를 타 보고 싶어요. 왜냐하면 ___ 때문이에요.' }] },
                target: { fill: { b1: '자전거로 공원 한 바퀴를 달려 보고 싶기' } }, difficulty: 0.15,
                hints: ['그 일을 하고 싶은 마음과 이어지는 까닭을 골라요.', '그 일을 하기 싫은 까닭이 섞였는지 봐요.', '공원 한 바퀴를 달려 보고 싶다는 카드가 까닭이에요.'] },
              { prompt: '서아의 말풍선 빈칸에 알맞은 까닭 카드를 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['동생에게 직접 만든 김밥을 주고 싶기', '김밥이 비싸기', '어제 비가 왔기'], slots: [{ id: 'b1', who: '서아', motif: 'flower', label: '마을 요리 교실에서 김밥을 말아 보고 싶어요. 왜냐하면 ___ 때문이에요.' }] },
                target: { fill: { b1: '동생에게 직접 만든 김밥을 주고 싶기' } }, difficulty: 0.15 },
              { prompt: '짝과 번갈아 "○○을 해 보고 싶어요. 왜냐하면 □□ 때문이에요."라고 말하고 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"까닭을 함께 말하니 무엇이 좋았나요?" 친구의 까닭을 듣고 나도 해 보고 싶어진 일이 있는지 묻는다. 활동지에 내 문장을 적게 하고, 다음 시간에는 처음 하는 일 앞에서 드는 마음을 알아본다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { mode: 'match', slots: [{ id: 'e1', label: '마을 축제에서 북 치기' }, { id: 'e2', label: '도서관 책 모임 가기' }], cards: ['다른 친구들과 같은 책 이야기를 나누고 싶어서', '둥둥 울리는 소리를 내 보고 싶어서'] }, prompt: '해 보고 싶은 일 옆에 알맞은 까닭 카드를 놓아 보세요.', target: { match: { e1: '둥둥 울리는 소리를 내 보고 싶어서', e2: '다른 친구들과 같은 책 이야기를 나누고 싶어서' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '"왜 해 보고 싶어?"에 알맞은 대답은?', options: ['"그냥."', '"내가 기른 꽃을 보고 싶기 때문이야."'], answer: 1, difficulty: 0.05, explain: '까닭을 말하면 내 마음을 친구가 알 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '해 보고 싶은 까닭',
      items: [
        { type: 'blank', prompt: '나는 (            )을 해 보고 싶어요.', answer: '' },
        { type: 'blank', prompt: '왜냐하면 (                        ) 때문이에요.', answer: '' },
        { type: 'choice', prompt: '까닭이 되는 말은?', options: ['몰라요', '새 친구를 사귀고 싶어서'], answer: '새 친구를 사귀고 싶어서' },
        { type: 'short', prompt: '짝이 해 보고 싶은 일과 까닭을 쓰세요.' },
      ],
      easy: {
        note: '"왜냐하면 ~ 때문이에요."',
        items: [
          { type: 'short', prompt: '해 보고 싶은 일을 쓰세요.' },
          { type: 'choice', prompt: '까닭에 ○ 하세요.', options: ['그냥요', '궁금해서'], answer: '궁금해서' },
          { type: 'short', prompt: '내 까닭을 한 낱말로 쓰세요.' },
          { type: 'draw', prompt: '해 보고 싶은 일을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 까닭은 \'궁금해서\', \'좋아서\'처럼 한 낱말로 말해도 돼요.',
      base: '일과 까닭을 잇고 문장 틀로 말해요.',
      challenge: '\'그냥요\' 같은 함정 카드가 섞여요. 까닭을 두 가지 들어 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① "그냥요"로 대답한다 → "그 일을 하면 무엇이 좋을 것 같아?"로 까닭을 끌어낸다. ② 하기 싫은 까닭을 말한다 → 하고 싶은 까닭과 걱정을 나누어 말하게 하고, 걱정은 다음 시간에 다룬다. ③ 친구 까닭을 그대로 따라 한다 → 나만의 낱말 하나를 넣게 한다.',
  }));

  lessons.push(L(35, {
    title: '처음 하는 일 앞에서 드는 마음 알기',
    objective: '처음 하는 일 앞에서 드는 설렘·걱정 같은 마음을 상황에서 찾아 이름 붙이고, 무서운 마음이 들 때 할 수 있는 행동을 고를 수 있다.',
    illustration: ART('a paper child standing at the entrance of a library for the first time, a small rain cloud and a rainbow floating above showing mixed feelings', '두근두근, 처음이에요', [
      { motif: 'cloud', x: 330, y: 80, s: 0.7 }, { motif: 'house', x: 110, y: 214, color: 'lavender' }, { motif: 'flower', x: 360, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"처음 학교에 온 날 마음이 어땠나요?" 두근두근, 무서웠어요, 신났어요 같은 대답을 마음 날씨 그림 옆에 적는다. "처음 하는 일 앞에서는 설레는 마음과 걱정되는 마음이 함께 들 수 있어요. 둘 다 자연스러운 마음이에요." 마음에 이름을 붙이면 다루기 쉬워진다고 말한다.',
        student: '처음 해 본 일과 그때의 마음 이름을 하나 말해 봐요.',
        demo: { tool: 'emotion', options: { cards: ['설렘'], slots: [{ id: 'd1', label: '내일 처음 소풍을 가요. 두근두근 기대돼요.' }], shuffle: false }, sequence: [{ match: { d1: '설렘' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 처음 하는 일과 마음 이름 짝 짓기', minutes: 13, tool: 'emotion',
            teacher: '"상황 글에서 마음을 알려 주는 말을 찾아요. \'기대돼요\', \'마음이 쓰여요\', \'얼굴이 빨개져요\' 같은 말이에요." 글 속 단서 낱말에 밑줄을 긋고 마음 카드를 놓게 한다. 같은 일이라도 사람마다 마음이 다를 수 있지만, 오늘은 글에 나온 단서로 고른다고 말한다.',
            task: '처음 하는 일 상황을 읽고 단서에 맞는 마음 카드를 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '상황 글의 단서를 찾아 알맞은 마음 카드를 놓아 보세요.', toolOptions: { cards: ['설렘', '걱정', '부끄러움'], slots: [{ id: 's1', label: '내일 처음 버스를 타요. 빨리 타 보고 싶어 기대돼요.' }, { id: 's2', label: '처음 수영장에 가요. 물이 깊을까 봐 마음이 쓰여요.' }, { id: 's3', label: '처음 반 앞에서 발표해요. 얼굴이 빨개져요.' }] },
                target: { match: { s1: '설렘', s2: '걱정', s3: '부끄러움' } }, difficulty: 0.1,
                hints: ['상황 글에서 마음을 알려 주는 낱말을 찾아요.', '\'마음이 쓰여요\'와 \'얼굴이 빨개져요\'가 어떤 마음인지 다시 봐요.', '기대됨은 설렘, 마음 쓰임은 걱정, 얼굴 빨개짐은 부끄러움이에요.'] },
              { prompt: '상황 글의 단서를 찾아 알맞은 마음 카드를 놓아 보세요.', toolOptions: { cards: ['무서움', '신남', '뿌듯함'], slots: [{ id: 's1', label: '처음 미끄럼틀 꼭대기에 올라가니 다리가 떨려요.' }, { id: 's2', label: '처음 장터 놀이를 해요. 폴짝폴짝 뛰고 싶어요.' }, { id: 's3', label: '처음 혼자 책을 빌렸어요. 어깨가 으쓱해요.' }] },
                target: { match: { s1: '무서움', s2: '신남', s3: '뿌듯함' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['무서움', '신남', '뿌듯함', '화남'] } } },
                hints: ['상황 글에서 몸이 어떻게 되는지 알려 주는 말을 찾아요.', '\'다리가 떨려요\'와 \'어깨가 으쓱해요\'가 바른 마음과 이어졌는지 봐요.', '다리 떨림은 무서움, 폴짝 뛰고 싶음은 신남, 어깨 으쓱은 뿌듯함이에요.'] },
              { prompt: '처음 혼자 시장 심부름을 가요. 가기 전에는 잘할 수 있을지 마음이 쓰였고, 사장님이 친절하게 알려 주셔서 마음이 놓였고, 두부를 사 와서 어깨가 으쓱했어요. 마음이 바뀐 차례대로 카드를 놓아 보세요.', toolOptions: { mode: 'order', slots: ['가기 전', '사는 동안', '사 온 뒤'], cards: ['걱정', '편안함', '뿌듯함'] },
                target: { order: ['걱정', '편안함', '뿌듯함'] }, difficulty: 0.15,
                hints: ['심부름을 가기 전, 하는 동안, 다 한 뒤를 떠올려요.', '다 해낸 뒤의 마음이 맨 끝에 있는지 봐요.', '가기 전 걱정 → 친절한 사장님 덕분에 편안함 → 해낸 뒤 뿌듯함이에요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 무서운 마음이 들 때 어떻게 할까', minutes: 14, tool: 'emotion', pair: true,
            teacher: '"무서운 마음이 들 때 그만두는 것 말고 할 수 있는 일은 무엇일까요?" 보기의 결과를 견주어 보게 한다. 마지막에는 짝과 \'숨 크게 세 번 쉬기\'를 함께 해 보고, 무서울 때 나에게 할 말을 정한다.',
            task: '무서운 마음이 드는 상황에서 할 행동을 고르고, 짝과 마음을 가라앉히는 방법을 해 봐요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '처음 수영장에서 물이 무서워요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '처음 간 수영장에서 물에 들어가기가 무서워요.', choices: [
                { id: 'shallow', text: '얕은 곳에서 선생님 손을 잡고 들어가요', result: '발부터 담가 보니 조금씩 괜찮아져요.', mood: '편안함' },
                { id: 'deep', text: '무서움을 이기려고 깊은 곳에 뛰어들어요', result: '물을 먹고 더 무서워져요.', mood: '무서움', why: '무서울 때는 안전하고 작게 시작해요.' },
                { id: 'go', text: '다시는 수영장에 오지 않아요', result: '수영을 배울 기회를 놓쳐요.', mood: '슬픔', why: '작게 시작하는 방법을 떠올려 봐요.' }] }, target: { choice: 'shallow' }, difficulty: 0.1,
                levels: { easy: { toolOptions: { choices: [
                  { id: 'shallow', text: '얕은 곳에서 선생님 손을 잡고 들어가요', result: '발부터 담가 보니 조금씩 괜찮아져요.', mood: '편안함' },
                  { id: 'go', text: '다시는 수영장에 오지 않아요', result: '수영을 배울 기회를 놓쳐요.', mood: '슬픔', why: '작게 시작하는 방법을 떠올려 봐요.' }] } } } },
              { prompt: '처음 발표하려는데 가슴이 쿵쾅거려요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '반 앞에서 처음 발표하려는데 가슴이 쿵쾅거려요.', choices: [
                { id: 'breathe', text: '숨을 크게 세 번 쉬고 쪽지를 보며 말해요', result: '목소리가 조금 떨렸지만 끝까지 말했어요.', mood: '뿌듯함' },
                { id: 'hide', text: '책상 밑에 숨어요', result: '발표할 기회가 지나가요.', mood: '속상함', why: '숨을 고르면 떨리는 마음도 줄어요.' }] }, target: { choice: 'breathe' }, difficulty: 0.1 },
              { prompt: '짝과 함께 숨을 크게 세 번 쉬어 보고, 무서울 때 나에게 해 줄 말("천천히 해도 돼")을 정해 말한 뒤 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"처음 하는 일 앞에서 걱정이 드는 것은 이상한 일일까요?" 출구 질문을 한 뒤 "걱정은 \'조심해\'라고 알려 주는 마음이기도 해요. 그래서 작게, 안전하게 시작하면 돼요"라고 말한다. 다음 시간에는 걱정을 줄이는 방법을 더 찾아본다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { cards: ['설렘', '걱정'], slots: [{ id: 'e1', label: '처음 마을 축제에 가요. 무엇이 있을지 기대돼요.' }, { id: 'e2', label: '처음 혼자 엘리베이터를 타요. 문이 안 열릴까 봐 마음이 쓰여요.' }] }, prompt: '상황 글의 단서를 찾아 알맞은 마음 카드를 놓아 보세요.', target: { match: { e1: '설렘', e2: '걱정' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '처음 하는 일이 무서울 때 좋은 방법은?', options: ['안전하게 작게 시작해요', '무서우니 절대 안 해요'], answer: 0, difficulty: 0.05, explain: '작게 시작하면 무서운 마음이 줄어들어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '처음 하는 일 앞의 마음',
      items: [
        { type: 'figure', wide: true, prompt: '상황과 어울리는 마음을 선으로 이으세요.', tool: 'emotion', figures: [{ options: { cards: ['설렘', '걱정'], slots: [{ id: 'w1', label: '빨리 해 보고 싶어 기대돼요' }, { id: 'w2', label: '잘 안 될까 봐 마음이 쓰여요' }] }, caption: '' }], answer: '기대-설렘, 마음 쓰임-걱정' },
        { type: 'short', prompt: '처음 해 본 일과 그때 마음을 쓰세요.' },
        { type: 'choice', prompt: '가슴이 쿵쾅거릴 때 해 볼 일은?', options: ['숨을 크게 세 번 쉬어요', '숨어요'], answer: '숨을 크게 세 번 쉬어요' },
        { type: 'short', prompt: '무서울 때 나에게 해 줄 말을 쓰세요.' },
      ],
      easy: {
        note: '설레는 마음도, 걱정되는 마음도 괜찮아요.',
        items: [
          { type: 'choice', prompt: '"기대돼요"는 어떤 마음?', options: ['설렘', '화남'], answer: '설렘' },
          { type: 'choice', prompt: '무서울 때는?', options: ['작게 시작해요', '그만둬요'], answer: '작게 시작해요' },
          { type: 'short', prompt: '나에게 해 줄 말을 쓰세요.' },
          { type: 'draw', prompt: '처음 해 본 일을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 고를 보기가 두 개예요.',
      base: '단서를 찾아 마음을 짝 짓고, 마음이 바뀐 차례를 놓아요.',
      challenge: '상황에 맞지 않는 마음 카드(화남)가 섞여요. 내가 처음 해 본 일의 마음이 바뀐 차례를 짝에게 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 걱정되는 마음을 부끄러워한다 → 어른도 처음에는 걱정한다고 말해 준다. ② 무서움을 이기려고 위험하게 행동한다 → 안전하게 작게 시작하는 것이 용기라고 짚는다. ③ 마음 이름을 몰라 "이상했어요"라고만 한다 → 몸의 느낌(떨림, 빨개짐)에서 마음 이름을 찾게 한다. 같은 상황도 사람마다 마음이 다를 수 있어, 화면 문항은 글 속 단서로만 판정한다.',
  }));

  lessons.push(L(36, {
    title: '걱정을 줄이는 방법 찾아 짝 짓기',
    objective: '새로운 일 앞의 걱정마다 알맞은 준비 방법을 짝 짓고, 걱정을 키우는 생각과 줄이는 생각을 나눌 수 있다.',
    illustration: ART('a paper child holding a small paper toolbox with a map, a phone note and a friend hand cutout, a worried cloud shrinking above', '걱정을 줄여요', [
      { motif: 'cloud', x: 330, y: 80, s: 0.5 }, { motif: 'sun', x: 410, y: 56, s: 0.7 }, { motif: 'house', x: 110, y: 214, color: 'sky' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"도서관 책 모임에 처음 가는데 \'길을 잃으면 어떡하지?\' 걱정이 돼요. 걱정을 줄이려면 미리 무엇을 할 수 있을까요?" 학생 생각을 칠판에 모은다(지도 보기, 어른과 가기). "걱정은 미리 준비하라는 신호예요. 걱정마다 맞는 준비가 있어요."',
        student: '처음 하는 일 앞에서 걱정되는 것을 하나 말해 봐요.',
        demo: { tool: 'story', options: { mode: 'match', slots: [{ id: 'd1', label: '길을 잃을까 봐 걱정돼요' }], cards: ['보호자와 미리 지도를 보고 가요'], shuffle: false }, sequence: [{ match: { d1: '보호자와 미리 지도를 보고 가요' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 걱정과 준비 방법 짝 짓기', minutes: 13, tool: 'story',
            teacher: '"이 걱정은 무엇을 미리 하면 줄어들까요?" 걱정의 낱말(길, 말, 친구)과 준비 방법을 이어 보게 한다. 걱정과 상관없는 준비를 놓은 학생에게 "그렇게 하면 이 걱정이 정말 줄어들까요?"라고 묻는다.',
            task: '새로운 일 앞의 걱정 옆에 걱정을 줄이는 준비 방법 카드를 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '걱정 옆에 그 걱정을 줄이는 준비 방법 카드를 놓아 보세요.', toolOptions: { mode: 'match', slots: [{ id: 'm1', label: '시장에서 할 말을 잊을까 봐요' }, { id: 'm2', label: '모임에 아는 친구가 없을까 봐요' }, { id: 'm3', label: '돈 계산이 틀릴까 봐요' }], cards: ['할 말을 쪽지에 적어 가요', '친구에게 같이 가자고 해요', '집에서 동전 세기를 연습해요'] },
                target: { match: { m1: '할 말을 쪽지에 적어 가요', m2: '친구에게 같이 가자고 해요', m3: '집에서 동전 세기를 연습해요' } }, difficulty: 0.1 },
              { prompt: '걱정 옆에 그 걱정을 줄이는 준비 방법 카드를 놓아 보세요.', toolOptions: { mode: 'match', slots: [{ id: 'm1', label: '자전거에서 넘어질까 봐요' }, { id: 'm2', label: '텃밭 모종이 죽을까 봐요' }, { id: 'm3', label: '책 모임 시간에 늦을까 봐요' }], cards: ['헬멧과 무릎 보호대를 해요', '물 주는 방법을 어른께 여쭈어요', '시계를 보고 미리 집을 나서요'] },
                target: { match: { m1: '헬멧과 무릎 보호대를 해요', m2: '물 주는 방법을 어른께 여쭈어요', m3: '시계를 보고 미리 집을 나서요' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['헬멧과 무릎 보호대를 해요', '물 주는 방법을 어른께 여쭈어요', '시계를 보고 미리 집을 나서요', '걱정되면 아예 안 해요'] } } },
                hints: ['걱정 속 낱말(넘어짐, 모종, 시간)과 이어지는 준비를 찾아요.', '시간 걱정과 넘어짐 걱정에 놓은 준비가 바뀌지 않았는지 봐요.', '넘어짐은 보호대, 모종은 물 주는 법 여쭙기, 시간은 미리 나서기예요.'] },
              { prompt: '걱정을 줄이는 생각과 걱정을 키우는 생각으로 나누어 보세요.', toolOptions: { mode: 'sort', slots: ['걱정을 줄이는 생각', '걱정을 키우는 생각'], cards: ['"처음엔 누구나 서툴러."', '"나는 분명히 망칠 거야."', '"모르면 여쭈어보면 돼."', '"다들 나를 비웃을 거야."'] },
                target: { sort: { '걱정을 줄이는 생각': ['"처음엔 누구나 서툴러."', '"모르면 여쭈어보면 돼."'], '걱정을 키우는 생각': ['"나는 분명히 망칠 거야."', '"다들 나를 비웃을 거야."'] } }, difficulty: 0.15,
                hints: ['그 생각을 하면 마음이 가벼워지는지, 더 무거워지는지 떠올려요.', '안 좋은 일이 꼭 생길 거라고 말하는 생각이 어느 칸에 있는지 봐요.', '서툴러도 괜찮다·여쭈면 된다는 줄이는 생각, 망칠 거야·비웃을 거야는 키우는 생각이에요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 내 걱정 쪽지와 준비 쪽지 나누기', minutes: 14, tool: 'mindmap', pair: true,
            teacher: '"내 걱정 하나를 쪽지에 쓰고, 짝은 그 걱정을 줄일 준비 방법을 하나 써 줘요." 짝과 쪽지를 바꾼 뒤 서로의 준비 방법을 소리 내어 읽게 한다. 쪽지는 모둠 \'걱정 줄이기 상자\'에 넣어 다음 시간에 함께 읽는다.',
            task: '준비 방법을 알맞은 걱정 가지에 나누고, 짝과 걱정 쪽지와 준비 쪽지를 바꾸어 써요.',
            levels: CARD_LV,
            items: [
              { prompt: '준비 방법 카드를 줄여 주는 걱정의 가지에 나누어 보세요.', toolOptions: { topic: '걱정 줄이기', slots: ['길을 잃을까 봐', '말을 못 할까 봐'], cards: ['보호자 전화번호를 적어 가요', '할 말을 거울 앞에서 연습해요', '가는 길을 미리 지도에서 봐요', '짝과 역할놀이를 해 봐요'] },
                target: { sort: { '길을 잃을까 봐': ['보호자 전화번호를 적어 가요', '가는 길을 미리 지도에서 봐요'], '말을 못 할까 봐': ['할 말을 거울 앞에서 연습해요', '짝과 역할놀이를 해 봐요'] } }, difficulty: 0.15,
                hints: ['그 준비를 하면 어떤 걱정이 줄어드는지 생각해요.', '말하기 연습이 길 걱정 가지에 가 있지 않은지 봐요.', '전화번호와 지도는 길 걱정, 거울 연습과 역할놀이는 말 걱정을 줄여요.'] },
              { prompt: '내 걱정을 쪽지에 쓰고 짝과 바꾸어 서로의 걱정을 줄일 준비 방법을 써 준 뒤 "다 했어요"를 누르세요.', free: true },
              { prompt: '짝이 써 준 준비 방법을 소리 내어 읽고 모둠 걱정 줄이기 상자에 넣은 뒤 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"짝이 써 준 준비 방법을 읽으니 걱정이 어떻게 되었나요?" 두세 명에게 듣는다. 걱정을 키우는 생각을 했을 때 바꿀 말("처음엔 누구나 서툴러")을 한 번 더 함께 말한다. 다음 시간에는 마을 어른께 새로운 놀이를 배워 본다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { mode: 'match', slots: [{ id: 'e1', label: '공을 놓칠까 봐요' }, { id: 'e2', label: '줄넘기 줄에 걸릴까 봐요' }], cards: ['줄 없이 뛰는 것부터 연습해요', '가까이에서 천천히 주고받기부터 해요'] }, prompt: '걱정 옆에 그 걱정을 줄이는 준비 방법 카드를 놓아 보세요.', target: { match: { e1: '가까이에서 천천히 주고받기부터 해요', e2: '줄 없이 뛰는 것부터 연습해요' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '걱정을 줄이는 생각은?', options: ['"분명히 망칠 거야."', '"모르면 여쭈어보면 돼."'], answer: 1, difficulty: 0.05, explain: '방법을 떠올리는 생각이 걱정을 줄여 줘요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '걱정을 줄이는 준비',
      items: [
        { type: 'table', prompt: '걱정과 준비 방법을 쓰세요.', columns: ['걱정', '준비 방법'], cells: [['길을 잃을까 봐', ''], ['말을 못 할까 봐', ''], ['내 걱정:', '']] },
        { type: 'choice', prompt: '걱정을 키우는 생각은?', options: ['"다들 비웃을 거야."', '"처음엔 누구나 서툴러."'], answer: '"다들 비웃을 거야."' },
        { type: 'short', prompt: '짝이 써 준 준비 방법을 옮겨 쓰세요.' },
        { type: 'short', prompt: '걱정될 때 나에게 해 줄 말을 쓰세요.' },
      ],
      easy: {
        note: '걱정은 \'미리 준비하자\'는 신호예요.',
        items: [
          { type: 'choice', prompt: '할 말을 잊을까 봐 걱정되면?', options: ['쪽지에 적어 가요', '아예 안 가요'], answer: '쪽지에 적어 가요' },
          { type: 'short', prompt: '내 걱정을 쓰세요.' },
          { type: 'short', prompt: '그 걱정을 줄일 방법을 쓰세요.' },
          { type: 'draw', prompt: '걱정이 작아진 내 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 걱정 쪽지는 낱말 하나로 써도 돼요.',
      base: '걱정과 준비 방법을 잇고, 짝과 쪽지를 바꾸어 써요.',
      challenge: '\'아예 안 해요\' 같은 함정 카드가 섞여요. 내 걱정에 준비 방법을 두 가지 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 걱정이 생기면 하지 않는 것이 해결이라고 여긴다 → 준비하면 할 수 있다는 것을 짚는다. ② 걱정과 상관없는 준비를 고른다 → 걱정 속 낱말과 준비를 이어 말하게 한다. ③ 걱정 쪽지를 놀린다 → 쪽지는 짝과 선생님만 본다고 약속한다. 쪽지에 다른 친구 이름을 쓰지 않게 한다.',
  }));

  lessons.push(L(37, {
    title: '마을 어르신께 사방치기 배워 해 보기',
    objective: '마을 어르신께 배운 전래 놀이 사방치기의 차례를 익히고, 안전 약속을 지키며 처음 해 보는 놀이에 도전할 수 있다.',
    illustration: ART('a paper schoolyard with a hopscotch grid drawn in chalk, a smiling grandmother showing a child how to hop on one foot, a small flat stone on square one', '처음 해 보는 사방치기', [
      { motif: 'sun', x: 410, y: 56, s: 0.7 }, { motif: 'tree', x: 110, y: 214 }, { motif: 'flower', x: 360, y: 228 }]),
    safety: ['돌은 납작하고 작은 것만 쓰고, 친구 쪽으로 던지지 않아요.', '깨금발로 뛸 때는 앞 친구가 다 나온 뒤에 출발해요.', '넘어질 것 같으면 두 발로 서서 쉬어요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"할머니, 할아버지가 어릴 때는 무엇을 하고 놀았을까요?" 반응을 듣고 사방치기 칸 그림을 보여 준다. 학교 둘레 마을 어르신을 모시면 어르신께 직접 시범을 부탁드리고, 모시기 어려우면 선생님이 시범을 보인다. "처음 보는 놀이라 어려워 보여도, 차례를 알면 누구나 해 볼 수 있어요."',
        student: '처음 보는 놀이를 보며 궁금한 것을 하나 말해 봐요.',
        demo: { tool: 'timer', options: { title: '사방치기 차례', cards: ['돌 던지기', '깨금발로 칸 건너기', '돌 줍고 나오기'] }, sequence: [{ order: ['돌 던지기', '깨금발로 칸 건너기', '돌 줍고 나오기'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 사방치기 차례와 안전 점검', minutes: 9, tool: 'timer',
            teacher: '"돌이 있는 칸은 밟지 않고 건너뛰어요. 돌아올 때 그 앞 칸에서 몸을 숙여 돌을 주워요." 어르신(또는 선생님) 시범을 다시 떠올리며 차례를 놓게 한다. 놀기 전 안전 점검을 꼭 하게 하고, 점검을 건너뛰려는 학생에게 "돌이 날카로우면 어떻게 될까요?"라고 묻는다.',
            task: '사방치기 차례 카드를 놓고, 놀기 전 안전 점검을 모두 표시해요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '사방치기 한 번의 차례대로 카드를 놓아 보세요.', toolOptions: { title: '사방치기 한 번', cards: ['돌아오며 돌을 주워요', '1번 칸에 돌을 던져요', '돌이 있는 칸을 건너뛰며 깨금발로 가요', '출발선 밖으로 나와요'] }, target: { order: ['1번 칸에 돌을 던져요', '돌이 있는 칸을 건너뛰며 깨금발로 가요', '돌아오며 돌을 주워요', '출발선 밖으로 나와요'] }, difficulty: 0.15,
                levels: { easy: { prompt: '사방치기 한 번의 차례대로 카드 세 장을 놓아 보세요.', toolOptions: { cards: ['돌아오며 돌을 주워요', '1번 칸에 돌을 던져요', '돌이 있는 칸을 건너뛰며 깨금발로 가요'] }, target: { order: ['1번 칸에 돌을 던져요', '돌이 있는 칸을 건너뛰며 깨금발로 가요', '돌아오며 돌을 주워요'] } } },
                hints: ['돌을 놓아야 건너뛸 칸이 생겨요. 돌부터 생각해요.', '돌을 줍는 일이 깨금발로 가기보다 앞에 있지 않은지 봐요.', '돌 던지기 → 건너뛰며 가기 → 돌아오며 줍기 → 나오기 차례예요.'] },
              { prompt: '사방치기를 하기 전 안전 점검을 모두 하고 표시해 보세요.', toolOptions: { title: '놀기 전 점검', safety: ['칸 안에 미끄러운 모래가 없어요', '돌이 납작하고 작아요', '신발 끈이 묶여 있어요'] }, target: { safety: true }, difficulty: 0.05,
                hints: ['놀기 전에 넘어지거나 다칠 것이 없는지 하나씩 살펴요.', '아직 표시하지 않은 점검이 있는지 봐요.', '세 가지를 모두 살피고 표시해요.'] },
              { prompt: '모둠 친구와 깨금발 연습을 해 보고, 쉬는 시간과 바꾸는 차례를 정하도록 타이머를 20초 뛰기, 10초 쉬기, 3번으로 맞춰 보세요.', toolOptions: { title: '깨금발 연습', plan: { work: 30, rest: 20, rounds: 2 } }, target: { plan: { work: 20, rest: 10, rounds: 3 } }, difficulty: 0.15,
                hints: ['뛰는 시간, 쉬는 시간, 몇 번 할지 세 칸을 하나씩 맞춰요.', '세 칸 가운데 문항과 다른 칸이 있는지 봐요.', '뛰기 20초, 쉬기 10초, 3번으로 맞춰요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 처음 해 보는 사방치기 놀이', minutes: 18, tool: 'emotion', pair: true,
            teacher: '운동장이나 복도 끝에 분필(또는 마스킹테이프)로 사방치기 칸을 모둠 수만큼 그려 둔다. 모둠마다 15분 동안 차례로 놀이를 한다. 한 번에 못 했다고 그만두려는 학생에게 "몇 번 칸까지 갔지? 다음엔 한 칸만 더 가 보자"라고 말한다. 놀이 뒤 교실에서 마음을 고른다.',
            task: '모둠 친구와 사방치기를 해 보고, 처음 해 본 놀이의 마음을 골라요.',
            levels: { easy: { steps: 3 }, base: {}, challenge: {} },
            items: [
              { prompt: '모둠 친구와 차례를 지켜 15분 동안 사방치기를 해 보고 "다 했어요"를 누르세요.', free: true },
              { prompt: '처음 해 본 사방치기가 얼마나 재미있었는지 골라 보세요.', toolOptions: { mode: 'scale', situation: '오늘 사방치기를 처음 해 보았어요.', feeling: '신남' }, target: { level: 'any' }, difficulty: 0.05 },
              { prompt: '친구가 금을 밟아 차례를 놓쳤어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '모둠 친구가 사방치기 금을 밟아 차례를 놓쳤어요.', choices: [
                { id: 'cheer', text: '"괜찮아, 다음엔 돼!" 하고 응원해요', result: '친구가 다시 웃으며 줄을 서요.', mood: '기쁨' },
                { id: 'laugh', text: '"또 밟았다!" 하고 놀려요', result: '친구가 놀이를 그만하겠다고 해요.', mood: '속상함', why: '처음 하는 놀이에서는 누구나 실수해요.' }] }, target: { choice: 'cheer' }, difficulty: 0.05 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"처음 보았을 때와 해 본 뒤, 사방치기에 대한 마음이 달라졌나요?" 손을 들어 보게 한다. 어르신을 모셨다면 모두 함께 고맙다고 인사드린다. 다음 시간에는 나의 첫 도전을 정한다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'timer', options: { title: '놀이 전에', cards: ['놀이를 시작해요', '안전 점검을 해요', '차례를 정해요'] }, prompt: '새로운 놀이를 하는 차례대로 카드를 놓아 보세요.', target: { order: ['안전 점검을 해요', '차례를 정해요', '놀이를 시작해요'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '사방치기에서 돌이 있는 칸은 어떻게 할까요?', options: ['밟고 지나가요', '건너뛰어요'], answer: 1, difficulty: 0.1, explain: '돌이 있는 칸은 밟지 않고 건너뛰어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '처음 해 본 사방치기',
      items: [
        { type: 'table', prompt: '사방치기 차례를 쓰세요.', columns: ['차례', '하는 일'], cells: [['1', ''], ['2', ''], ['3', ''], ['4', '']] },
        { type: 'check', prompt: '놀기 전 내가 한 안전 점검에 ✓ 하세요.', options: ['모래가 없는지 보았어요', '돌이 작은지 보았어요', '신발 끈을 묶었어요'] },
        { type: 'blank', prompt: '나는 (    )번 칸까지 갔어요.', answer: '' },
        { type: 'short', prompt: '처음 해 본 사방치기에서 느낀 점을 쓰세요.' },
      ],
      easy: {
        note: '돌이 있는 칸은 건너뛰어요.',
        items: [
          { type: 'choice', prompt: '먼저 할 일은?', options: ['돌 던지기', '돌 줍기'], answer: '돌 던지기' },
          { type: 'choice', prompt: '놀기 전에는?', options: ['안전 점검', '바로 뛰기'], answer: '안전 점검' },
          { type: 'short', prompt: '느낀 점을 쓰세요.' },
          { type: 'draw', prompt: '사방치기를 하는 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '차례 카드를 짝과 함께 놓아요. 놀이에서는 1~4번 칸만 써요. 마음 크기는 세 칸이에요.',
      base: '차례·안전 점검·타이머를 맞추고 1~8번 칸으로 놀이해요.',
      challenge: '돌을 더 먼 칸에 던져 놀이해요. 모둠 친구에게 차례를 설명해 줘요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 돌이 있는 칸을 밟는다 → 바닥 칸에 돌 그림 카드를 놓고 연습한다. ② 깨금발이 힘들어 포기한다 → 두 칸마다 쉬어도 된다고 바꾼다. ③ 실수한 친구를 놀린다 → 처음 하는 놀이에서는 누구나 실수한다고 짚는다. 사방치기 칸 모양과 규칙은 지역마다 조금씩 달라 어르신이 알려 주시는 방법을 따른다(전래 놀이로 저작권이 없다).',
  }));

  lessons.push(L(38, {
    title: '나의 첫 도전 정해 도전 카드 쓰기',
    objective: '지금 안전하게 해 볼 수 있는 새로운 일을 골라 무엇을, 왜, 누구와 할지 담은 도전 카드를 쓸 수 있다.',
    illustration: ART('a paper card decorated with a star and a small mountain flag, a child writing a challenge plan on it, village buildings in the background', '나의 첫 도전 카드', [
      { motif: 'star', x: 120, y: 90 }, { motif: 'mountain', x: 380, y: 210 }, { motif: 'house', x: 110, y: 214, color: 'buttercup' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"33차시부터 해 보고 싶은 일, 까닭, 걱정을 줄이는 방법을 알아보았어요. 오늘은 나의 첫 도전을 정해요." 선생님의 도전 카드 예시(무엇을: 텃밭에 상추 심기, 왜: 직접 길러 먹고 싶어서, 누구와: 가족과)를 보여 준다. "도전은 거창하지 않아도 돼요. 지금 할 수 있는 작은 새로운 일이면 충분해요."',
        student: '선생님 도전 카드에서 \'무엇을, 왜, 누구와\'를 찾아 말해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'pick', basket: '지금 해 볼 도전', cards: ['도서관 회원 카드 만들기', '혼자 먼 도시 여행하기'], shuffle: false }, sequence: [{ pick: ['도서관 회원 카드 만들기'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 지금 해 볼 만한 도전 고르기', minutes: 12, tool: 'mindmap',
            teacher: '"이 도전은 2학년인 우리가 이번 달에, 안전하게 해 볼 수 있을까요?" 세 가지 기준(지금·안전·작게)을 칠판에 쓰고 카드마다 따진다. 너무 큰 도전을 고른 학생에게 "이 도전을 작게 줄이면 무엇이 될까요?"라고 묻는다.',
            task: '지금 안전하게 해 볼 수 있는 도전만 고르고, 도전 카드에 들어갈 것을 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '이번 달에 안전하게 해 볼 수 있는 도전만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '지금 해 볼 도전', cards: ['보호자와 시장에서 두부 사 보기', '혼자 지하철 타고 다른 도시 가기', '도서관 책 모임에 한 번 가 보기', '높은 나무 꼭대기에 올라가기'] },
                target: { pick: ['보호자와 시장에서 두부 사 보기', '도서관 책 모임에 한 번 가 보기'] }, difficulty: 0.1,
                hints: ['이번 달에, 안전하게, 작게 해 볼 수 있는지 세 가지를 따져요.', '혼자 멀리 가거나 높이 올라가는 도전이 섞였는지 봐요.', '보호자와 두부 사기, 책 모임 가 보기가 지금 해 볼 도전이에요.'] },
              { prompt: '큰 도전 옆에 그것을 작게 줄인 도전 카드를 놓아 보세요.', toolOptions: { mode: 'match', topic: '도전 작게 줄이기', slots: [{ id: 'm1', label: '마라톤 완주하기' }, { id: 'm2', label: '책 백 권 읽기' }, { id: 'm3', label: '요리사처럼 요리하기' }], cards: ['공원 한 바퀴 달리기', '이번 주에 그림책 세 권 읽기', '보호자와 주먹밥 만들기'] },
                target: { match: { m1: '공원 한 바퀴 달리기', m2: '이번 주에 그림책 세 권 읽기', m3: '보호자와 주먹밥 만들기' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['공원 한 바퀴 달리기', '이번 주에 그림책 세 권 읽기', '보호자와 주먹밥 만들기', '하루 종일 텔레비전 보기'] } } },
                hints: ['큰 도전과 같은 종류이면서 지금 할 수 있게 작은 것을 찾아요.', '달리기·읽기·요리가 서로 맞게 이어졌는지 봐요.', '마라톤은 공원 한 바퀴, 백 권은 세 권, 요리사는 주먹밥으로 줄여요.'] },
              { prompt: '도전 카드 문장을 무엇을, 왜, 누구와로 나누어 보세요.', toolOptions: { topic: '나의 도전 카드', slots: ['무엇을', '왜', '누구와'], cards: ['마을 텃밭에 상추 심기', '직접 기른 채소를 먹고 싶어서', '할머니와 함께'] },
                target: { sort: { '무엇을': ['마을 텃밭에 상추 심기'], '왜': ['직접 기른 채소를 먹고 싶어서'], '누구와': ['할머니와 함께'] } }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 내 도전 카드 쓰고 나누기', minutes: 16, tool: 'emotion', pair: true,
            teacher: '활동지 도전 카드에 무엇을·왜·누구와·언제를 쓰게 한다(8분). 쓰기 어려워하는 학생에게는 33~36차시 활동지를 다시 펴 보게 한다. 다 쓴 뒤 짝에게 읽어 주고, 짝은 응원의 말 한 마디를 카드 뒤에 써 준다. 도전 카드는 다음 시간부터 단계로 나누어 실천한다.',
            task: '도전 카드를 쓰고 짝에게 읽어 준 뒤, 지금 내 마음의 크기를 골라요.',
            levels: { easy: { steps: 3 }, base: {}, challenge: {} },
            items: [
              { prompt: '활동지 도전 카드에 무엇을·왜·누구와·언제를 쓰고 "다 했어요"를 누르세요.', free: true },
              { prompt: '짝에게 도전 카드를 읽어 주고, 짝의 카드 뒤에 응원의 말을 써 준 뒤 "다 했어요"를 누르세요.', free: true },
              { prompt: '내 도전 카드를 보며 해낼 수 있을 것 같은 마음이 얼마나 되는지 골라 보세요.', toolOptions: { mode: 'scale', situation: '나의 첫 도전 카드를 다 썼어요.', feeling: '설렘', ask: '해낼 수 있을 것 같은 마음은 얼마나 되나요?' }, target: { level: 'any' }, difficulty: 0.05 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"짝이 써 준 응원의 말을 읽어 볼까요?" 두세 명에게 듣는다. 도전 카드를 교실 \'도전 나무\' 게시판에 붙인다. "다음 시간에는 도전을 작은 세 단계로 나누어 볼 거예요."',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', basket: '지금 해 볼 도전', cards: ['우체국에서 보호자와 엽서 부치기', '혼자 밤새 캠핑하기', '줄넘기 이어 넘기 다섯 번'] }, prompt: '이번 달에 안전하게 해 볼 수 있는 도전만 바구니에 넣어 보세요.', target: { pick: ['우체국에서 보호자와 엽서 부치기', '줄넘기 이어 넘기 다섯 번'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '"책 백 권 읽기"를 작게 줄인 도전은?', options: ['이번 주에 그림책 두 권 읽기', '책을 사지 않기'], answer: 0, difficulty: 0.1, explain: '같은 종류의 일을 지금 할 수 있게 작게 줄여요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '나의 첫 도전 카드',
      items: [
        { type: 'table', prompt: '나의 도전 카드를 채우세요.', columns: ['칸', '내 도전'], cells: [['무엇을', ''], ['왜', ''], ['누구와', ''], ['언제', '']] },
        { type: 'choice', prompt: '지금 해 볼 도전은?', options: ['혼자 다른 도시 가기', '보호자와 두부 사 보기'], answer: '보호자와 두부 사 보기' },
        { type: 'short', prompt: '짝이 써 준 응원의 말을 옮겨 쓰세요.' },
        { type: 'draw', prompt: '도전을 해내는 내 모습을 그려 보세요.' },
      ],
      easy: {
        note: '지금 · 안전하게 · 작게!',
        items: [
          { type: 'short', prompt: '무엇에 도전할지 쓰세요.' },
          { type: 'short', prompt: '누구와 할지 쓰세요.' },
          { type: 'choice', prompt: '안전한 도전은?', options: ['보호자와 장 보기', '높은 나무 오르기'], answer: '보호자와 장 보기' },
          { type: 'draw', prompt: '도전하는 내 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 카드에 초록 테두리가 생겨요. 도전 카드는 무엇을·누구와 두 칸만 써요. 마음 크기는 세 칸이에요.',
      base: '도전을 골라 작게 줄이고 도전 카드 네 칸을 채워요.',
      challenge: '함정 카드가 섞여요. 도전 카드에 걱정과 준비 방법도 한 줄 더해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 너무 큰 도전을 고른다 → 같은 종류로 작게 줄이게 한다. ② 친구와 같은 도전을 고르려 한다 → 함께 해도 되지만 까닭은 내 말로 쓰게 한다. ③ 위험한 일을 도전으로 쓴다 → 안전 기준을 다시 짚고 보호자와 함께하는 일로 바꾼다. 도전 카드는 가정에 보내 보호자가 함께 확인하게 한다.',
  }));

  // ───────────────────────── 39~43차시: 작은 단계로 나누어 다시 해 보기(호기심과 도전 — 실천) ─────────────────────────

  lessons.push(L(39, {
    title: '도전을 작은 세 단계로 나누기',
    objective: '새로운 일을 처음·가운데·끝 세 단계로 나누어 차례대로 놓고, 내 도전 카드를 세 단계로 나눌 수 있다.',
    illustration: ART('a paper staircase with three steps, each step holding a small picture card, a child climbing toward a star at the top', '한 계단씩 올라가요', [
      { motif: 'star', x: 400, y: 70 }, { motif: 'house', x: 110, y: 214, color: 'peach' }, { motif: 'tree', x: 420, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '교실 앞에 계단 그림을 붙인다. "맨 위 별까지 한 번에 뛰어오를 수 있을까요?" 반응을 듣고 "한 계단씩 오르면 누구나 닿을 수 있어요. 도전도 작은 단계로 나누면 쉬워져요"라고 말한다. 38차시 도전 카드를 꺼내게 한다.',
        student: '내 도전 카드의 도전을 다시 한번 읽어 봐요.',
        demo: { tool: 'story', options: { slots: ['처음', '가운데', '끝'], cards: [{ id: '고르기', text: '읽을 책을 골라요', motif: 'leaf' }, { id: '카드', text: '회원 카드를 내요', motif: 'star' }, { id: '날짜', text: '돌려줄 날을 확인해요', motif: 'moon' }], shuffle: false }, sequence: [{ order: ['고르기', '카드', '날짜'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 새로운 일을 세 단계로 놓기', minutes: 14, tool: 'story',
            teacher: '"이 단계를 하려면 앞에서 무엇이 끝나 있어야 할까요?" 앞뒤를 따지며 놓게 한다. 끝 단계를 처음에 놓은 학생에게 "아직 아무것도 안 했는데 이 일을 할 수 있을까요?"라고 묻는다. 단계 하나가 너무 크면 더 쪼갤 수 있다는 것도 말한다.',
            task: '새로운 일의 단계 카드를 처음·가운데·끝 차례로 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '보조 바퀴 없이 자전거 타기를 세 단계로 놓아 보세요.', toolOptions: { slots: ['처음', '가운데', '끝'], cards: [{ id: '발', text: '발로 땅을 밀며 균형 잡기', motif: 'leaf' }, { id: '페달', text: '어른이 잡아 주고 페달 밟기', motif: 'sun' }, { id: '혼자', text: '혼자 열 걸음 달려 보기', motif: 'star' }] },
                target: { order: ['발', '페달', '혼자'] }, difficulty: 0.1,
                hints: ['가장 쉬운 단계부터 어려운 단계로 놓아요.', '혼자 달리기가 앞쪽에 있지 않은지 봐요.', '균형 잡기 → 잡아 주며 페달 → 혼자 달리기 차례예요.'] },
              { prompt: '시장에서 혼자 값 여쭙기를 세 단계로 놓아 보세요.', toolOptions: { slots: ['처음', '가운데', '끝'], cards: [{ id: '혼자', text: '보호자는 뒤에서 보고 혼자 여쭈어요', motif: 'star' }, { id: '연습', text: '집에서 여쭐 말을 연습해요', motif: 'house' }, { id: '같이', text: '보호자 옆에서 같이 여쭈어요', motif: 'flower' }] },
                target: { order: ['연습', '같이', '혼자'] }, difficulty: 0.15,
                hints: ['도움이 가장 많은 단계부터 도움이 가장 적은 단계로 놓아요.', '혼자 하는 단계가 맨 끝에 있는지 봐요.', '집에서 연습 → 보호자와 같이 → 혼자 여쭙기 차례예요.'] },
              { prompt: '줄넘기 이어 넘기를 네 단계로 놓아 보세요.', toolOptions: { slots: 4, cards: [{ id: '한번', text: '줄을 돌려 한 번 넘기', motif: 'sun' }, { id: '줄없이', text: '줄 없이 제자리 뛰기', motif: 'leaf' }, { id: '다섯', text: '이어서 다섯 번 넘기', motif: 'star' }, { id: '두번', text: '쉬지 않고 두 번 넘기', motif: 'flower' }] },
                target: { order: ['줄없이', '한번', '두번', '다섯'] }, difficulty: 0.2,
                levels: { easy: { prompt: '줄넘기 이어 넘기를 세 단계로 놓아 보세요.', toolOptions: { slots: ['처음', '가운데', '끝'], cards: [{ id: '줄없이', text: '줄 없이 제자리 뛰기', motif: 'leaf' }, { id: '한번', text: '줄을 돌려 한 번 넘기', motif: 'sun' }, { id: '다섯', text: '이어서 다섯 번 넘기', motif: 'star' }] }, target: { order: ['줄없이', '한번', '다섯'] } } },
                hints: ['넘는 횟수가 적은 것부터, 줄이 없는 것부터 생각해요.', '두 번과 다섯 번의 차례를 다시 봐요.', '줄 없이 뛰기 → 한 번 → 두 번 → 다섯 번 차례예요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 내 도전 카드를 세 단계로 나누기', minutes: 13, tool: 'story', pair: true,
            teacher: '"내 도전을 세 계단으로 나누어 활동지에 써요." 첫 계단은 오늘이라도 할 수 있을 만큼 작게 쓰게 한다. 짝과 바꾸어 읽고 "이 계단은 너무 커 보여"처럼 한 가지를 알려 주게 한다. 단계 나누기가 어려운 학생에게 예시 문장(\'연습해요 → 같이 해요 → 혼자 해요\')을 건넨다.',
            task: '단계 나누기 방법을 고르고, 내 도전 카드를 세 단계로 나누어 짝과 나눠요.',
            levels: CARD_LV,
            items: [
              { prompt: '도전을 단계로 잘 나눈 방법만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '잘 나눈 방법', cards: ['쉬운 것에서 어려운 것으로 나눠요', '도움을 많이 받는 것에서 혼자 하는 것으로 나눠요', '가장 어려운 것부터 해요', '한 번에 다 하려고 해요'] },
                target: { pick: ['쉬운 것에서 어려운 것으로 나눠요', '도움을 많이 받는 것에서 혼자 하는 것으로 나눠요'] }, difficulty: 0.15,
                hints: ['한 계단씩 오르는 방법인지 생각해요.', '처음부터 어려운 것을 하는 방법이 섞였는지 봐요.', '쉬운 것부터, 도움 많은 것부터 나누는 두 방법이에요.'] },
              { prompt: '내 도전 카드를 활동지 세 계단에 나누어 쓰고 "다 했어요"를 누르세요.', free: true },
              { prompt: '짝과 세 계단을 바꾸어 읽고, 너무 커 보이는 계단이 있으면 하나 더 쪼개 본 뒤 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"내 첫 계단은 오늘 당장 할 수 있을 만큼 작은가요?" 손을 들어 확인한다. 아직 크다는 학생은 짝과 한 번 더 쪼개게 한다. 다음 시간에는 종이접기로 단계 따라 하기를 직접 해 본다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { slots: ['처음', '가운데', '끝'], cards: [{ id: '혼자', text: '혼자 엽서를 부쳐요', motif: 'star' }, { id: '보기', text: '보호자가 부치는 것을 봐요', motif: 'house' }, { id: '같이', text: '보호자와 함께 부쳐요', motif: 'flower' }] }, prompt: '우체국에서 엽서 부치기를 세 단계로 놓아 보세요.', target: { order: ['보기', '같이', '혼자'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '도전을 단계로 나눌 때 첫 단계는?', options: ['가장 어려운 것', '가장 작고 쉬운 것'], answer: 1, difficulty: 0.05, explain: '첫 단계는 오늘 할 수 있을 만큼 작게 해요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '나의 도전 세 계단',
      items: [
        { type: 'blank', prompt: '나의 도전: (                        )', answer: '' },
        { type: 'table', prompt: '내 도전을 세 계단으로 나누어 쓰세요.', columns: ['계단', '할 일'], cells: [['첫째 계단 (가장 쉬움)', ''], ['둘째 계단', ''], ['셋째 계단 (도전 완성)', '']] },
        { type: 'choice', prompt: '자전거 타기의 첫 계단으로 알맞은 것은?', options: ['혼자 공원 한 바퀴', '발로 밀며 균형 잡기'], answer: '발로 밀며 균형 잡기' },
        { type: 'short', prompt: '짝이 알려 준 점을 쓰세요.' },
      ],
      easy: {
        note: '연습해요 → 같이 해요 → 혼자 해요',
        items: [
          { type: 'blank', prompt: '나의 도전: (                )', answer: '' },
          { type: 'table', prompt: '세 계단을 쓰세요.', columns: ['계단', '할 일'], cells: [['연습', ''], ['같이', ''], ['혼자', '']] },
          { type: 'choice', prompt: '첫 계단은?', options: ['가장 쉬운 것', '가장 어려운 것'], answer: '가장 쉬운 것' },
          { type: 'draw', prompt: '세 계단을 오르는 내 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 줄넘기는 세 단계예요. 내 도전은 \'연습-같이-혼자\' 틀에 써요.',
      base: '세 단계·네 단계 차례를 놓고 내 도전을 세 계단으로 나누어요.',
      challenge: '네 단계 줄넘기 차례를 놓아요. 내 도전의 큰 계단을 하나 더 쪼개 네 계단으로 만들어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 첫 단계가 너무 크다 → "오늘 쉬는 시간에 할 수 있을까?"로 줄인다. ② 단계 사이가 너무 벌어진다 → 그 사이에 할 일을 하나 더 넣게 한다. ③ 도전 카드가 없거나 바뀌었다 → 이번 시간에 새로 정해도 된다고 말한다.',
  }));

  lessons.push(L(40, {
    title: '종이접기 집을 단계 따라 접어 보기',
    objective: '종이접기 집 접는 단계를 차례대로 놓고, 단계마다 하나씩 따라 접어 집 하나를 완성할 수 있다.',
    illustration: ART('a small origami paper house with a triangle roof sitting on a desk next to folded paper squares and a step-by-step diagram strip', '단계 따라 접어요', [
      { motif: 'house', x: 110, y: 214, color: 'rose' }, { motif: 'house', x: 370, y: 214, color: 'sky' }, { motif: 'star', x: 240, y: 90 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '완성된 종이접기 집을 보여 주고 "처음 접어 보는 사람?"이라고 묻는다. "한 번에 보면 어려워 보이지만 다섯 단계로 나누면 하나씩 따라 할 수 있어요." 색종이 한 장씩 나누어 주고, 선생님이 단계마다 멈추며 시범을 보일 것이라고 말한다. 마을에 내 집 한 채를 세운다는 마음으로 접자고 한다.',
        student: '색종이를 반듯하게 펴서 책상 위에 놓아 봐요.',
        demo: { tool: 'story', options: { slots: ['처음', '가운데', '끝'], cards: [{ id: '반', text: '반으로 접어요', motif: 'leaf' }, { id: '양옆', text: '양옆을 가운데로 접어요', motif: 'star' }, { id: '지붕', text: '위를 벌려 지붕을 만들어요', motif: 'house' }], shuffle: false }, sequence: [{ order: ['반', '양옆', '지붕'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 집 접기 단계 차례 놓기', minutes: 8, tool: 'story',
            teacher: '"이 단계를 하려면 앞 단계에서 어떤 선이 생겨 있어야 할까요?" 접는 선을 손가락으로 따라 그리며 차례를 정하게 한다. 지붕 만들기를 앞에 놓은 학생에게 "아직 양옆을 접지 않았는데 지붕 자리가 생길까요?"라고 묻는다.',
            task: '종이접기 집 단계 카드를 차례대로 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '종이접기 집을 접는 차례대로 카드를 놓아 보세요.', toolOptions: { slots: 4, cards: [{ id: '반', text: '세모가 아닌 네모로 반 접기', motif: 'leaf' }, { id: '선', text: '다시 반 접었다 펴서 가운데 선 만들기', motif: 'cloud' }, { id: '양옆', text: '양옆을 가운데 선에 맞춰 접기', motif: 'star' }, { id: '지붕', text: '위쪽 주머니를 벌려 세모 지붕 만들기', motif: 'house' }] },
                target: { order: ['반', '선', '양옆', '지붕'] }, difficulty: 0.15,
                hints: ['접는 선이 먼저 생겨야 그 선에 맞춰 접을 수 있어요.', '가운데 선을 만드는 단계가 양옆 접기보다 앞에 있는지 봐요.', '반 접기 → 가운데 선 → 양옆 접기 → 지붕 만들기 차례예요.'] },
              { prompt: '접기를 잘하는 방법만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '잘 접는 방법', cards: ['모서리를 맞추고 손톱으로 꾹 눌러요', '한 단계 끝나면 그림과 견주어 봐요', '빨리 끝내려고 대충 접어요'] },
                target: { pick: ['모서리를 맞추고 손톱으로 꾹 눌러요', '한 단계 끝나면 그림과 견주어 봐요'] }, difficulty: 0.1,
                hints: ['접은 모양이 바르게 나오게 하는 방법인지 생각해요.', '서두르는 방법이 섞였는지 봐요.', '모서리 맞춰 꾹 누르기, 그림과 견주기가 잘 접는 방법이에요.'] },
              { prompt: '지붕을 만드는 마지막 단계를 세 걸음으로 나누어 차례대로 놓아 보세요.', toolOptions: { slots: ['처음', '가운데', '끝'], cards: [{ id: '눌러', text: '벌린 주머니를 눌러 세모로 펴요', motif: 'house' }, { id: '손가락', text: '위쪽 주머니에 손가락을 넣어요', motif: 'star' }, { id: '꾹', text: '세모 끝을 손톱으로 꾹 눌러요', motif: 'leaf' }] },
                target: { order: ['손가락', '눌러', '꾹'] }, difficulty: 0.2 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 단계 따라 집 접고 마을에 세우기', minutes: 20, tool: 'kitchen', pair: true,
            teacher: '선생님이 단계마다 시범을 보이고 "다 접은 사람은 짝 것을 보고 같으면 엄지 척"을 하게 한다(12분). 한 단계에서 막히면 그 단계만 다시 해 보게 하고, 망가졌으면 새 색종이를 준다. 완성한 집은 7차시 바닥 지도의 빈칸에 세워 \'우리 마을\'을 만든다.',
            task: '선생님을 따라 단계마다 집을 접고, 완성하면 바닥 지도에 세운 뒤 점검해요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '선생님을 따라 단계마다 멈추며 종이접기 집을 접고 "다 했어요"를 누르세요.', free: true },
              { prompt: '완성한 집을 바닥 지도 빈칸에 세우고 "다 했어요"를 누르세요.', free: true },
              { prompt: '단계 따라 접기를 잘했는지 살필 것만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '접기 점검', items: [{ id: 'step', text: '한 단계씩 차례대로 접었어요' }, { id: 'line', text: '접는 선을 꾹 눌렀어요' }, { id: 'fast', text: '친구보다 먼저 끝냈어요' }, { id: 'again', text: '틀린 단계는 다시 펴서 접었어요' }] },
                target: { checklist: ['step', 'line', 'again'] }, difficulty: 0.1,
                levels: { easy: { prompt: '점검 세 가지 가운데 단계 따라 접기를 잘했는지 살필 것만 표시해 보세요.', toolOptions: { items: [{ id: 'step', text: '한 단계씩 차례대로 접었어요' }, { id: 'fast', text: '친구보다 먼저 끝냈어요' }, { id: 'again', text: '틀린 단계는 다시 펴서 접었어요' }] }, target: { checklist: ['step', 'again'] } } },
                hints: ['단계 따라 하기와 관련 있는 것인지 생각해요.', '빠르기는 단계 따라 하기와 상관있는지 봐요.', '먼저 끝내기만 빼고 모두 살필 것이에요.'] },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"어느 단계가 가장 어려웠나요?" 손을 들어 단계마다 세어 본다. 가장 어려웠던 단계를 다시 해 낸 학생 한두 명의 이야기를 듣는다. 바닥 지도에 세운 집들을 함께 보며 "단계로 나누니 모두 집을 지었어요"라고 말한다. 다음 시간에는 잘 안 될 때 한 번 더 해 보는 방법을 알아본다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { slots: ['처음', '가운데', '끝'], cards: [{ id: '편지', text: '편지 봉투처럼 아래를 접어 올려요', motif: 'star' }, { id: '반', text: '네모로 반 접었다 펴요', motif: 'leaf' }, { id: '세모', text: '위 두 모서리를 세모로 접어요', motif: 'house' }] }, prompt: '종이 편지 봉투 접기를 차례대로 놓아 보세요.', target: { order: ['반', '세모', '편지'] }, difficulty: 0.2 },
          { type: 'choice', prompt: '한 단계에서 막혔을 때 좋은 방법은?', options: ['그 단계만 다시 해 봐요', '처음부터 다 버려요'], answer: 0, difficulty: 0.05, explain: '막힌 단계만 다시 하면 돼요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '종이접기 집',
      items: [
        { type: 'table', prompt: '집 접기 단계를 차례대로 쓰세요.', columns: ['단계', '하는 일'], cells: [['1', ''], ['2', ''], ['3', ''], ['4', '']] },
        { type: 'check', prompt: '내가 지킨 것에 ✓ 하세요.', options: ['모서리를 맞추었어요', '선을 꾹 눌렀어요', '틀린 단계는 다시 접었어요'] },
        { type: 'blank', prompt: '가장 어려웠던 단계: (      )단계', answer: '' },
        { type: 'short', prompt: '어려운 단계를 어떻게 해냈는지 쓰세요.' },
      ],
      easy: {
        note: '한 단계 끝나면 그림과 견주어요.',
        items: [
          { type: 'choice', prompt: '처음에 할 일은?', options: ['반 접기', '지붕 만들기'], answer: '반 접기' },
          { type: 'choice', prompt: '막히면?', options: ['그 단계만 다시', '다 버리기'], answer: '그 단계만 다시' },
          { type: 'short', prompt: '어려웠던 단계를 쓰세요.' },
          { type: 'draw', prompt: '내가 접은 집을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 접을 때 짝이 한 단계 앞서 보여 줘요.',
      base: '네 단계 차례를 놓고 선생님을 따라 집을 접어요.',
      challenge: '지붕 만들기를 세 걸음으로 나누어 놓아요. 집에 창문과 문을 더 그려 넣어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 단계를 건너뛰고 다음으로 간다 → 단계마다 \'멈춤\'을 말하고 짝과 견주게 한다. ② 모서리가 어긋나 지붕이 비뚤어진다 → 첫 반 접기에서 모서리 맞추기를 다시 한다. ③ 망가지면 포기한다 → 새 색종이로 그 단계부터 다시 하면 된다고 말한다. 종이접기 집은 널리 알려진 전래 접기이며 활동지에 완성 그림은 싣지 않는다.',
  }));

  lessons.push(L(41, {
    title: '잘 안 될 때 다시 해 보는 말 고르기',
    objective: '새로운 일이 잘 안 될 때 그만두게 하는 말과 다시 해 보게 하는 말을 나누고, 상황에 맞는 다시 해 보는 행동을 고를 수 있다.',
    illustration: ART('a paper child picking up a fallen paper tower and rebuilding it, a friend holding a speech bubble with a small heart, a village park behind', '한 번 더 해 볼까?', [
      { motif: 'tree', x: 110, y: 214 }, { motif: 'sun', x: 410, y: 56, s: 0.7 }, { motif: 'bird', x: 380, y: 120 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"지난 시간 종이접기 집을 접다가 망가진 사람?" 손을 든 학생에게 그때 어떻게 했는지 묻는다. 칠판에 "한 번에 안 되면 그만두는 게 낫다"를 쓰고 "선생님도 줄넘기를 처음엔 한 번도 못 넘었어요. 그때 그만두었으면 지금도 못 넘었을 거예요"라고 말한다. 오늘은 다시 해 보게 하는 말을 찾는다.',
        student: '잘 안 되었던 일과 그때 했던 말을 하나 떠올려 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'sort', topic: '잘 안 될 때 하는 말', slots: ['다시 해 보게 하는 말', '그만두게 하는 말'], cards: ['"한 번 더 해 보자."', '"난 원래 못해."'], shuffle: false }, sequence: [{ sort: { '다시 해 보게 하는 말': ['"한 번 더 해 보자."'], '그만두게 하는 말': ['"난 원래 못해."'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 다시 해 보게 하는 말 나누기', minutes: 13, tool: 'mindmap',
            teacher: '"이 말을 듣거나 하면 다시 해 보고 싶어질까요, 그만두고 싶어질까요?" 카드를 소리 내어 읽고 나누게 한다. "아직"이라는 낱말이 들어간 말("아직 안 될 뿐이야")이 왜 힘이 되는지 묻는다.',
            task: '말 카드를 다시 해 보게 하는 말과 그만두게 하는 말로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '말 카드를 다시 해 보게 하는 말과 그만두게 하는 말로 나누어 보세요.', toolOptions: { mode: 'sort', topic: '잘 안 될 때 하는 말', slots: ['다시 해 보게 하는 말', '그만두게 하는 말'], cards: ['"아직 안 될 뿐이야."', '"나는 이걸 절대 못 해."', '"어디가 틀렸는지 보자."', '"해 봤자 소용없어."', '"어제보다 한 칸 더 갔어."', '"다른 사람은 다 잘하는데."'] },
                target: { sort: { '다시 해 보게 하는 말': ['"아직 안 될 뿐이야."', '"어디가 틀렸는지 보자."', '"어제보다 한 칸 더 갔어."'], '그만두게 하는 말': ['"나는 이걸 절대 못 해."', '"해 봤자 소용없어."', '"다른 사람은 다 잘하는데."'] } }, difficulty: 0.15,
                levels: { easy: { prompt: '말 카드 네 장을 다시 해 보게 하는 말과 그만두게 하는 말로 나누어 보세요.', toolOptions: { cards: ['"아직 안 될 뿐이야."', '"나는 이걸 절대 못 해."', '"어디가 틀렸는지 보자."', '"해 봤자 소용없어."'] }, target: { sort: { '다시 해 보게 하는 말': ['"아직 안 될 뿐이야."', '"어디가 틀렸는지 보자."'], '그만두게 하는 말': ['"나는 이걸 절대 못 해."', '"해 봤자 소용없어."'] } } } },
                hints: ['그 말을 하면 마음이 다시 해 보고 싶어지는지 떠올려요.', '다른 사람과 견주는 말이 어느 칸에 있는지 봐요.', '아직·틀린 곳 보기·한 칸 더는 다시 해 보게 하는 말이에요.'] },
              { prompt: '친구를 다시 해 보게 하는 응원의 말만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '응원의 말', cards: ['"천천히 해도 괜찮아."', '"넌 왜 그것도 못 해?"', '"같이 연습해 볼까?"', '"그냥 하지 마."'] },
                target: { pick: ['"천천히 해도 괜찮아."', '"같이 연습해 볼까?"'] }, difficulty: 0.1,
                hints: ['친구가 그 말을 들으면 기분이 어떨지 생각해요.', '친구를 탓하는 말이 섞였는지 봐요.', '천천히 해도 괜찮다, 같이 연습하자가 응원의 말이에요.'] },
              { prompt: '잘 안 되었을 때 생각이 바뀐 차례대로 카드를 놓아 보세요.', toolOptions: { mode: 'order', slots: ['처음', '가운데', '끝'], cards: [{ id: '다시', text: '"한 칸씩 다시 해 보자."', motif: 'star' }, { id: '속상', text: '"또 넘어졌네, 속상해."', motif: 'cloud' }, { id: '찾기', text: '"어디서 넘어졌는지 보자."', motif: 'leaf' }] },
                target: { order: ['속상', '찾기', '다시'] }, difficulty: 0.15,
                hints: ['실수한 바로 뒤의 마음부터 떠올려요.', '다시 해 보는 말이 맨 끝에 있는지 봐요.', '속상함 → 틀린 곳 찾기 → 다시 해 보기 차례예요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 잘 안 될 때 어떻게 할까', minutes: 14, tool: 'emotion', pair: true,
            teacher: '"잘 안 될 때 다시 해 보는 방법에는 무엇이 있을까요?" 보기의 결과를 읽고 고르게 한다. 짝과 \'다시 해 보게 하는 말\'을 서로에게 한 번씩 해 주게 하고, 들었을 때 마음을 말하게 한다.',
            task: '잘 안 되는 상황에서 다시 해 보는 행동을 고르고, 짝과 응원의 말을 주고받아요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '줄넘기가 계속 발에 걸려요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '줄넘기를 하는데 다섯 번째마다 줄이 발에 걸려요.', choices: [
                { id: 'slow', text: '조금 천천히 돌리며 다시 해 봐요', result: '천천히 하니 여섯 번까지 넘었어요.', mood: '뿌듯함' },
                { id: 'throw', text: '줄을 던지고 다시는 안 해요', result: '줄넘기가 더 싫어졌어요.', mood: '속상함', why: '방법을 조금 바꾸어 다시 해 보면 달라져요.' }] }, target: { choice: 'slow' }, difficulty: 0.1 },
              { prompt: '사방치기에서 또 금을 밟았어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '사방치기에서 세 번째 칸만 가면 금을 밟아요.', choices: [
                { id: 'ask', text: '잘하는 친구에게 어떻게 뛰는지 물어봐요', result: '친구가 보폭을 줄이라고 알려 줬어요.', mood: '기쁨' },
                { id: 'blame', text: '칸을 잘못 그렸다고 친구 탓을 해요', result: '친구와 사이가 나빠졌어요.', mood: '화남', why: '물어보고 배우면 다시 할 수 있어요.' },
                { id: 'skip', text: '세 번째 칸을 몰래 건너뛰어요', result: '규칙을 어겨 놀이가 멈췄어요.', mood: '부끄러움', why: '규칙을 지키며 다시 연습해요.' }] }, target: { choice: 'ask' }, difficulty: 0.15,
                levels: { easy: { toolOptions: { choices: [
                  { id: 'ask', text: '잘하는 친구에게 어떻게 뛰는지 물어봐요', result: '친구가 보폭을 줄이라고 알려 줬어요.', mood: '기쁨' },
                  { id: 'blame', text: '칸을 잘못 그렸다고 친구 탓을 해요', result: '친구와 사이가 나빠졌어요.', mood: '화남', why: '물어보고 배우면 다시 할 수 있어요.' }] } } } },
              { prompt: '짝에게 다시 해 보게 하는 말을 한 번씩 해 주고, 들었을 때 마음을 말한 뒤 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"오늘 찾은 말 가운데 내 마음에 가장 힘이 되는 말은 무엇인가요?" 두세 명에게 듣고 그 말을 \'다시 해 보는 말 벽\'에 붙인다. 칠판의 \'한 번에 안 되면 그만두는 게 낫다\'를 지우며 "아직 안 될 뿐이에요"라고 함께 말한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '잘 안 될 때 하는 말', slots: ['다시 해 보게 하는 말', '그만두게 하는 말'], cards: ['"오늘은 두 번 넘었어."', '"다신 안 해."'] }, prompt: '말 카드를 나누어 보세요.', target: { sort: { '다시 해 보게 하는 말': ['"오늘은 두 번 넘었어."'], '그만두게 하는 말': ['"다신 안 해."'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '한 번에 잘 안 될 때 좋은 생각은?', options: ['"아직 안 될 뿐이야."', '"난 원래 못해."'], answer: 0, difficulty: 0.05, explain: '\'아직\'이라고 생각하면 다시 해 볼 힘이 생겨요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '다시 해 보게 하는 말',
      items: [
        { type: 'table', prompt: '말을 알맞은 칸에 나누어 쓰세요.', columns: ['다시 해 보게 하는 말', '그만두게 하는 말'], cells: [['', ''], ['', '']] },
        { type: 'choice', prompt: '줄이 자꾸 걸릴 때 할 일은?', options: ['천천히 돌려 다시 해요', '줄을 던져요'], answer: '천천히 돌려 다시 해요' },
        { type: 'short', prompt: '잘 안 될 때 나에게 해 줄 말을 쓰세요.' },
        { type: 'short', prompt: '짝이 해 준 응원의 말을 쓰세요.' },
      ],
      easy: {
        note: '아직 안 될 뿐이에요!',
        items: [
          { type: 'choice', prompt: '다시 해 보게 하는 말은?', options: ['"한 번 더 해 보자."', '"다신 안 해."'], answer: '"한 번 더 해 보자."' },
          { type: 'choice', prompt: '친구가 실수하면?', options: ['"괜찮아."', '"넌 왜 못 해?"'], answer: '"괜찮아."' },
          { type: 'short', prompt: '나에게 해 줄 말을 쓰세요.' },
          { type: 'draw', prompt: '다시 해 보는 내 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고 말 카드가 네 장이에요. 보기가 두 개예요.',
      base: '말 카드 여섯 장을 나누고 다시 해 보는 행동을 골라요.',
      challenge: '보기가 세 개인 상황에서 골라요. 내 도전에 쓸 \'다시 해 보는 말\'을 새로 만들어 짝에게 알려 줘요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 다른 사람과 견주며 속상해한다 → 어제의 나와 견주게 한다. ② 같은 방법으로만 계속 다시 한다 → 방법을 조금 바꾸거나 물어보는 것도 다시 해 보기라고 짚는다. ③ 응원의 말을 장난처럼 한다 → 눈을 보고 진심으로 말하는 연습을 한 번 더 한다.',
  }));

  lessons.push(L(42, {
    title: '줄넘기 다시 해 보며 기록 견주기',
    objective: '줄넘기 이어 넘기를 세 번 해 보고 그 기록을 그림그래프로 나타내어, 다시 해 볼 때마다 달라진 점을 말할 수 있다.',
    illustration: ART('a paper child jumping rope in a village park, three small paper flags behind showing first, second and third tries, a picture graph board beside', '다시 할수록 달라져요', [
      { motif: 'tree', x: 110, y: 214 }, { motif: 'sun', x: 410, y: 56, s: 0.7 }, { motif: 'star', x: 240, y: 90 }]),
    safety: ['줄넘기를 할 때 친구와 두 팔 벌린 거리만큼 떨어져요.', '줄은 손잡이를 잡고만 돌리고, 친구 몸에 감지 않아요.', '숨이 차면 그 자리에 앉아 쉬어요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"다시 해 보면 정말 달라질까요? 오늘은 직접 해 보고 기록으로 알아봐요." 줄넘기를 나누어 주기 전 안전 약속 세 가지를 함께 읽는다. 모둠마다 한 사람은 넘고 한 사람은 센다는 역할을 정해 준다.',
        student: '안전 약속 세 가지를 짝과 함께 소리 내어 읽어 봐요.',
        demo: { tool: 'chart', options: { type: 'picture', mode: 'read', title: '준호의 이어 넘기', data: [['첫째', 2], ['둘째', 4], ['셋째', 5]], unit: '번', icons: [{ value: 1, name: '1번' }], icon: 'circle', question: '기록이 가장 많은 때는?', choices: ['첫째', '둘째', '셋째'] }, sequence: [{ pick: 2 }] },
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 줄넘기 세 번 해 보고 기록하기', minutes: 14, tool: 'timer', pair: true,
            teacher: '운동장이나 강당에서 짝끼리 번갈아 이어 넘기를 세 번 해 보고, 센 사람이 활동지에 기록을 적는다. 한 번 할 때마다 "어디서 걸렸어?"를 묻고 다음엔 무엇을 바꿀지 한 가지 말하게 한다. 기록이 줄어든 학생에게 "줄어든 날도 연습이 쌓인 날이에요"라고 말한다.',
            task: '짝과 번갈아 줄넘기를 세 번 해 보고 기록을 적어요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '줄넘기를 하기 전 안전 점검을 모두 하고 표시해 보세요.', toolOptions: { title: '줄넘기 전 점검', safety: ['친구와 두 팔 벌린 거리만큼 떨어졌어요', '줄 길이를 발로 밟아 맞추었어요', '신발 끈이 묶여 있어요'] }, target: { safety: true }, difficulty: 0.05,
                hints: ['줄넘기를 하다 다칠 일이 없는지 하나씩 살펴요.', '아직 표시하지 않은 점검이 있는지 봐요.', '세 가지를 모두 살피고 표시해요.'] },
              { prompt: '한 번 하고 쉬었다 다시 하도록 타이머를 30초 넘기, 30초 쉬기, 3번으로 맞춰 보세요.', toolOptions: { title: '이어 넘기 세 번', plan: { work: 20, rest: 10, rounds: 2 } }, target: { plan: { work: 30, rest: 30, rounds: 3 } }, difficulty: 0.15,
                levels: { easy: { prompt: '쉬는 시간만 바꾸어 타이머를 30초 넘기, 30초 쉬기, 3번으로 맞춰 보세요.', toolOptions: { plan: { work: 30, rest: 10, rounds: 3 } } } },
                hints: ['넘는 시간, 쉬는 시간, 몇 번 할지 세 칸을 하나씩 맞춰요.', '세 칸 가운데 문항과 다른 칸이 있는지 봐요.', '넘기 30초, 쉬기 30초, 3번으로 맞춰요.'] },
              { prompt: '짝과 번갈아 줄넘기 이어 넘기를 세 번 해 보고, 짝이 센 기록을 판과 활동지에 적은 뒤 "다 했어요"를 누르세요.', toolOptions: { title: '내 이어 넘기 기록', fields: ['첫째', '둘째', '셋째'], unit: '번' }, free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 기록을 그림그래프로 견주기', minutes: 14, tool: 'chart',
            teacher: '"기록을 그림으로 나타내면 다시 할 때마다 어떻게 달라졌는지 한눈에 보여요." 예시 친구의 기록으로 그림그래프를 만든 뒤, 내 기록도 활동지에 ○로 그리게 한다. 기록을 다른 친구와 견주지 않고 내 첫째·셋째 기록만 견주게 한다.',
            task: '친구의 줄넘기 기록을 그림그래프로 나타내고 읽어요.',
            levels: { easy: { showValues: true }, base: {}, challenge: {} },
            items: [
              { prompt: '서아의 이어 넘기 기록(첫째 3번, 둘째 2번, 셋째 6번)을 그림그래프로 나타내 보세요.', toolOptions: { type: 'picture', mode: 'build', title: '서아의 이어 넘기', data: [['첫째', 3], ['둘째', 2], ['셋째', 6]], unit: '번', icons: [{ value: 1, name: '1번' }], icon: 'circle' }, target: { build: true }, difficulty: 0.15,
                hints: ['○ 하나가 1번이에요. 기록만큼 ○를 놓아요.', '셋째 기록의 ○ 수를 다시 세어 봐요.', '첫째 3개, 둘째 2개, 셋째 6개를 놓아요.'] },
              { prompt: '그림그래프에서 기록이 가장 많은 때를 골라 보세요.', toolOptions: { type: 'picture', mode: 'read', title: '도윤의 이어 넘기', data: [['첫째', 1], ['둘째', 4], ['셋째', 3]], unit: '번', icons: [{ value: 1, name: '1번' }], icon: 'circle', question: '기록이 가장 많은 때는?', choices: ['첫째', '둘째', '셋째'] }, target: { pick: 1 }, difficulty: 0.1,
                levels: { challenge: { prompt: '그림그래프를 보고 빈칸에 기록을 써 보세요.', toolOptions: { mode: 'table', tableBlanks: [0, 2] }, target: { table: true } } },
                hints: ['○가 가장 길게 놓인 줄을 찾아요.', '둘째와 셋째의 ○ 수를 견주어 봐요.', '○가 4개인 둘째가 가장 많아요.'] },
              { prompt: '서아의 그림그래프에서 기록이 가장 적은 때를 골라 보세요. 그래도 셋째에는 다시 늘었어요.', toolOptions: { type: 'picture', mode: 'read', title: '서아의 이어 넘기', data: [['첫째', 3], ['둘째', 2], ['셋째', 6]], unit: '번', icons: [{ value: 1, name: '1번' }], icon: 'circle', question: '기록이 가장 적은 때는?', choices: ['첫째', '둘째', '셋째'] }, target: { pick: 1 }, difficulty: 0.1,
                hints: ['○가 가장 짧게 놓인 줄을 찾아요.', '첫째와 둘째의 ○ 수를 견주어 봐요.', '○가 2개인 둘째가 가장 적어요.'] },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"내 첫째 기록과 셋째 기록을 견주어 보니 어떤가요?" 늘어난 학생, 그대로인 학생, 줄어든 학생 모두에게 손을 들게 하고 "세 번 다시 해 본 것 자체가 도전이에요"라고 말한다. 다음 시간에는 함께 다시 해 보는 협동 놀이를 한다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'chart', options: { type: 'picture', mode: 'read', title: '하은이의 이어 넘기', data: [['첫째', 2], ['둘째', 3], ['셋째', 5]], unit: '번', icons: [{ value: 1, name: '1번' }], icon: 'circle', question: '기록이 가장 적은 때는?', choices: ['첫째', '둘째', '셋째'] }, prompt: '그림그래프에서 기록이 가장 적은 때를 골라 보세요.', target: { pick: 0 }, difficulty: 0.1 },
          { type: 'choice', prompt: '다시 해 본 기록이 줄었을 때 알맞은 생각은?', options: ['"이번엔 줄었지만 연습이 쌓였어."', '"이제 그만해야지."'], answer: 0, difficulty: 0.05, explain: '줄어든 날도 다시 해 본 날이에요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '줄넘기 다시 해 보기 기록',
      items: [
        { type: 'table', prompt: '내 이어 넘기 기록을 쓰세요.', columns: ['차례', '넘은 수', '다음에 바꿀 점'], cells: [['첫째', '', ''], ['둘째', '', ''], ['셋째', '', '']] },
        { type: 'draw', prompt: '내 기록을 ○ 하나에 1번으로 그림그래프로 그려 보세요.' },
        { type: 'choice', prompt: '내 기록을 견줄 사람은?', options: ['어제와 오늘의 나', '반에서 가장 잘하는 친구'], answer: '어제와 오늘의 나' },
        { type: 'short', prompt: '다시 해 보며 달라진 점을 쓰세요.' },
      ],
      easy: {
        note: '○ 하나가 1번이에요.',
        items: [
          { type: 'table', prompt: '기록을 쓰세요.', columns: ['차례', '넘은 수'], cells: [['첫째', ''], ['둘째', ''], ['셋째', '']] },
          { type: 'draw', prompt: '셋째 기록만큼 ○를 그려 보세요.' },
          { type: 'choice', prompt: '기록이 줄면?', options: ['다시 해 봐요', '그만둬요'], answer: '다시 해 봐요' },
          { type: 'short', prompt: '달라진 점을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '줄 없이 제자리 뛰기 기록으로 해도 돼요. 그래프는 셋째 기록만 그려요.',
      base: '줄넘기를 세 번 해 보고 그림그래프로 견주어요.',
      challenge: '그래프를 보고 빈칸 기록을 채워요. 다음에 바꿀 점을 기록마다 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 다른 친구 기록과 견주며 속상해한다 → 기록은 나와만 견준다고 약속한다. ② 세는 사람이 빨리 세거나 놓친다 → 손가락으로 하나씩 접으며 세게 한다. ③ 기록이 줄면 포기한다 → 바꿀 점 한 가지를 정해 다시 하게 한다. 줄넘기가 어려운 학생은 줄 없이 제자리 뛰기로 바꾸어 같은 방법으로 기록한다.',
  }));

  lessons.push(L(43, {
    title: '모둠 협동 놀이 다시 해 보기',
    objective: '모둠 친구와 협동 놀이를 해 보고 잘 안 된 까닭을 함께 찾아 방법을 바꾸어 다시 해 볼 수 있다.',
    illustration: ART('four paper children holding a big paper parachute cloth carrying a small ball together in a village park, one child pointing and suggesting a new idea', '함께 다시 해 봐요', [
      { motif: 'tree', x: 110, y: 214 }, { motif: 'flower', x: 360, y: 228 }, { motif: 'sun', x: 410, y: 56, s: 0.7 }]),
    safety: ['공을 떨어뜨려도 뛰어가 줍지 말고 한 사람만 걸어가서 주워요.', '보자기를 세게 잡아당기지 않아요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"혼자 하는 일만 다시 해 볼 수 있을까요? 친구들과 함께 하는 일도 다시 해 볼 수 있어요." 보자기 위에 공을 올려 모둠이 함께 반환점까지 옮기는 \'보자기 공 나르기\'를 소개한다. "처음엔 공이 떨어질 수 있어요. 떨어지면 모둠이 함께 까닭을 찾고 다시 해요."',
        student: '모둠에서 보자기를 잡을 자리를 정해 봐요.',
        demo: { tool: 'story', options: { mode: 'match', slots: [{ id: 'd1', label: '공이 한쪽으로 굴러 떨어졌어요' }], cards: ['보자기 높이를 똑같이 맞춰요'], shuffle: false }, sequence: [{ match: { d1: '보자기 높이를 똑같이 맞춰요' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 보자기 공 나르기 해 보기', minutes: 14, tool: 'timer', pair: true,
            teacher: '강당이나 운동장에서 모둠마다 첫 번째 시도를 한다. 공이 떨어지면 그 자리에 멈추어 "왜 떨어졌을까?" 30초 동안 이야기하게 한다. 탓하는 말이 나오면 "누구 때문이 아니라 무엇 때문인지 찾아봐요"라고 바꾸어 말해 준다. 바꾼 방법으로 두 번째, 세 번째 시도를 한다.',
            task: '모둠이 보자기 공 나르기를 해 보고, 공이 떨어지면 까닭을 찾아 다시 해요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '보자기 공 나르기를 하는 차례대로 카드를 놓아 보세요.', toolOptions: { title: '보자기 공 나르기', cards: ['반환점을 돌아 출발선으로 와요', '보자기 네 귀퉁이를 잡아요', '공을 보자기 가운데에 올려요', '걸음을 맞추어 반환점까지 걸어요'] }, target: { order: ['보자기 네 귀퉁이를 잡아요', '공을 보자기 가운데에 올려요', '걸음을 맞추어 반환점까지 걸어요', '반환점을 돌아 출발선으로 와요'] }, difficulty: 0.15,
                levels: { easy: { prompt: '보자기 공 나르기를 하는 차례대로 카드 세 장을 놓아 보세요.', toolOptions: { cards: ['걸음을 맞추어 반환점까지 걸어요', '보자기 네 귀퉁이를 잡아요', '공을 보자기 가운데에 올려요'] }, target: { order: ['보자기 네 귀퉁이를 잡아요', '공을 보자기 가운데에 올려요', '걸음을 맞추어 반환점까지 걸어요'] } } },
                hints: ['공을 올리려면 먼저 보자기가 펼쳐져 있어야 해요.', '공을 올리는 일이 걷기보다 앞에 있는지 봐요.', '귀퉁이 잡기 → 공 올리기 → 반환점까지 걷기 → 돌아오기 차례예요.'] },
              { prompt: '타이머로 1분 나르기, 30초 까닭 찾기를 지키며 보자기 공 나르기를 해 본 뒤 "다 했어요"를 누르세요.', toolOptions: { title: '나르기 1분 · 까닭 찾기 30초', plan: { work: 60, rest: 30, rounds: 3 } }, free: true },
              { prompt: '시도마다 공을 몇 번 떨어뜨렸는지 판에 적고, 몇 번째에 성공했는지 활동지에 쓴 뒤 "다 했어요"를 누르세요.', toolOptions: { title: '시도마다 공을 떨어뜨린 횟수', fields: ['첫째', '둘째', '셋째'], unit: '번' }, free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 잘 안 된 까닭과 바꿀 방법 잇기', minutes: 14, tool: 'story',
            teacher: '"놀이에서 공이 떨어진 까닭과 바꾼 방법을 이어 봐요." 모둠에서 실제로 찾은 까닭과 같은 카드가 있으면 손을 들게 한다. 친구를 탓하는 말과 방법을 찾는 말을 견주어 보게 한다.',
            task: '잘 안 된 까닭 옆에 바꿀 방법 카드를 놓고, 모둠을 돕는 말을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '잘 안 된 까닭 옆에 알맞은 바꿀 방법 카드를 놓아 보세요.', toolOptions: { mode: 'match', slots: [{ id: 'm1', label: '한 친구만 빨리 걸었어요' }, { id: 'm2', label: '보자기 한쪽이 낮았어요' }, { id: 'm3', label: '반환점에서 너무 빨리 돌았어요' }], cards: ['"하나, 둘" 구령에 맞춰 걸어요', '모두 배꼽 높이로 들어요', '반환점에서는 천천히 크게 돌아요'] },
                target: { match: { m1: '"하나, 둘" 구령에 맞춰 걸어요', m2: '모두 배꼽 높이로 들어요', m3: '반환점에서는 천천히 크게 돌아요' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['"하나, 둘" 구령에 맞춰 걸어요', '모두 배꼽 높이로 들어요', '반환점에서는 천천히 크게 돌아요', '공을 더 큰 것으로 바꿔요'] } } },
                hints: ['까닭 속 낱말(빨리, 낮았어요, 돌았어요)과 이어지는 방법을 찾아요.', '걸음 걱정과 높이 걱정의 방법이 바뀌지 않았는지 봐요.', '빠른 걸음은 구령, 낮은 쪽은 배꼽 높이, 빠른 회전은 천천히 돌기예요.'] },
              { prompt: '모둠을 다시 해 보게 하는 말만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '모둠을 돕는 말', cards: ['"이번엔 구령을 붙여 볼까?"', '"너 때문에 떨어졌잖아!"', '"한 번 더 해 보자, 거의 다 왔어!"', '"우리 모둠은 원래 못 해."'] },
                target: { pick: ['"이번엔 구령을 붙여 볼까?"', '"한 번 더 해 보자, 거의 다 왔어!"'] }, difficulty: 0.1,
                hints: ['그 말을 들은 모둠이 다시 해 보고 싶어질지 생각해요.', '친구를 탓하는 말이나 포기하는 말이 섞였는지 봐요.', '구령을 붙여 보자, 한 번 더 해 보자가 돕는 말이에요.'] },
              { prompt: '모둠이 다시 해 본 차례대로 카드를 놓아 보세요.', toolOptions: { slots: ['처음', '가운데', '끝'], cards: [{ id: '성공', text: '반환점을 돌아 들어왔어요', motif: 'star' }, { id: '떨어짐', text: '공이 떨어졌어요', motif: 'cloud' }, { id: '구령', text: '구령을 정했어요', motif: 'leaf' }] },
                target: { order: ['떨어짐', '구령', '성공'] }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"우리 모둠은 몇 번째에 성공했나요? 무엇을 바꾸었나요?" 모둠마다 한 명이 말한다. 성공하지 못한 모둠에게 "무엇을 바꾸어 볼지 찾은 것이 다시 해 보기의 반이에요"라고 말한다. 다음 시간에는 해 본 일을 돌아보고 그때 마음을 말해 본다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { mode: 'match', slots: [{ id: 'e1', label: '서로 다른 쪽으로 걸었어요' }, { id: 'e2', label: '보자기를 너무 세게 당겼어요' }], cards: ['살살 잡고 팽팽하게만 해요', '먼저 갈 쪽을 함께 정해요'] }, prompt: '잘 안 된 까닭 옆에 알맞은 바꿀 방법 카드를 놓아 보세요.', target: { match: { e1: '먼저 갈 쪽을 함께 정해요', e2: '살살 잡고 팽팽하게만 해요' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '모둠 놀이가 잘 안 되었을 때 좋은 말은?', options: ['"너 때문이야."', '"무엇을 바꿔 볼까?"'], answer: 1, difficulty: 0.05, explain: '누구 때문이 아니라 무엇 때문인지 찾으면 다시 할 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '모둠 협동 놀이 다시 해 보기',
      items: [
        { type: 'table', prompt: '우리 모둠의 시도를 쓰세요.', columns: ['시도', '어떻게 되었나', '바꾼 방법'], cells: [['첫째', '', ''], ['둘째', '', ''], ['셋째', '', '']] },
        { type: 'choice', prompt: '보자기 한쪽이 낮을 때 바꿀 방법은?', options: ['모두 같은 높이로 들어요', '공을 바꿔요'], answer: '모두 같은 높이로 들어요' },
        { type: 'short', prompt: '모둠 친구에게 들은 힘이 되는 말을 쓰세요.' },
        { type: 'short', prompt: '다시 해 보며 느낀 점을 쓰세요.' },
      ],
      easy: {
        note: '누구 때문이 아니라 무엇 때문인지 찾아요.',
        items: [
          { type: 'blank', prompt: '우리 모둠은 (    )번째에 성공했어요.', answer: '' },
          { type: 'choice', prompt: '모둠을 돕는 말은?', options: ['"한 번 더 해 보자!"', '"너 때문이야!"'], answer: '"한 번 더 해 보자!"' },
          { type: 'short', prompt: '바꾼 방법을 쓰세요.' },
          { type: 'draw', prompt: '모둠이 공을 나르는 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 놀이에서는 반환점까지 가는 거리를 짧게 해요.',
      base: '놀이를 세 번 해 보고 까닭과 방법을 이어요.',
      challenge: '상관없는 방법 카드가 섞여요. 놀이에서 반환점을 두 번 도는 규칙으로 해 봐요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 실수한 친구를 탓한다 → \'누구\'가 아니라 \'무엇\'을 찾는 말로 바꾸어 준다. ② 까닭을 찾지 않고 바로 다시 한다 → 30초 멈추고 이야기하는 규칙을 지키게 한다. ③ 성공하지 못해 실망한다 → 바꿀 방법을 찾은 것도 다시 해 보기라고 짚는다. 보자기는 큰 수건이나 체육 보자기를 쓰고, 공은 가벼운 고무공을 쓴다.',
  }));

  // ───────────────────────── 44~48차시: 해 보고 난 뒤의 마음과 다음 도전(호기심과 도전 — 돌아보기) ─────────────────────────

  lessons.push(L(44, {
    title: '도전해 본 뒤의 마음 이름 붙이기',
    objective: '새로운 일을 해 본 뒤에 드는 마음을 상황 글의 단서로 찾아 이름 붙이고, 내가 해 본 일의 마음을 짝에게 말할 수 있다.',
    illustration: ART('a paper child holding a finished origami house and a jump rope, small paper faces of feelings floating around like balloons', '해 보고 나니 어때요?', [
      { motif: 'sun', x: 410, y: 56, s: 0.7 }, { motif: 'house', x: 110, y: 214, color: 'mint' }, { motif: 'bird', x: 330, y: 90 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"35차시에는 처음 하기 전의 마음을 알아보았어요. 오늘은 해 보고 난 뒤의 마음을 알아봐요." 선생님이 텃밭에서 처음 상추를 땄을 때 이야기를 하며 "어깨가 으쓱했어요. 이 마음의 이름은 무엇일까요?"라고 묻는다. 하기 전과 해 본 뒤의 마음이 다를 수 있다고 말한다.',
        student: '도전해 본 일 하나를 떠올리고, 그 뒤의 마음을 한 낱말로 말해 봐요.',
        demo: { tool: 'emotion', options: { cards: ['뿌듯함'], slots: [{ id: 'd1', label: '처음 상추를 땄어요. 어깨가 으쓱해요.' }], shuffle: false }, sequence: [{ match: { d1: '뿌듯함' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 해 본 뒤의 마음 짝 짓기', minutes: 13, tool: 'emotion',
            teacher: '"해 본 뒤의 마음을 알려 주는 말을 찾아 밑줄을 그어요." 잘된 일 뒤의 마음만이 아니라 아쉬움도 소중한 마음이라고 짚는다. 아쉬운 마음 카드를 놓은 학생에게 "아쉬움은 다음에 무엇을 하고 싶게 만들까요?"라고 묻는다.',
            task: '도전해 본 뒤의 상황을 읽고 단서에 맞는 마음 카드를 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '해 본 뒤의 상황 글에서 단서를 찾아 알맞은 마음 카드를 놓아 보세요.', toolOptions: { cards: ['뿌듯함', '아쉬움', '고마움'], slots: [{ id: 's1', label: '혼자 두부를 사 왔어요. 가슴을 쭉 펴요.' }, { id: 's2', label: '줄넘기 다섯 번에 한 번이 모자랐어요. 조금만 더 했으면 좋았을걸.' }, { id: 's3', label: '친구가 사방치기를 알려 줘서 해냈어요. 친구에게 꼭 말하고 싶어요.' }] },
                target: { match: { s1: '뿌듯함', s2: '아쉬움', s3: '고마움' } }, difficulty: 0.1,
                hints: ['상황 글에서 마음을 알려 주는 말을 찾아요.', '\'조금만 더 했으면\'과 \'친구에게 말하고 싶어요\'가 어떤 마음인지 다시 봐요.', '가슴 펴기는 뿌듯함, 조금만 더는 아쉬움, 친구에게 말하고 싶음은 고마움이에요.'] },
              { prompt: '해 본 뒤의 상황 글에서 단서를 찾아 알맞은 마음 카드를 놓아 보세요.', toolOptions: { cards: ['신남', '편안함', '자신감'], slots: [{ id: 's1', label: '처음 간 책 모임이 생각보다 무섭지 않았어요. 어깨에 힘이 빠져요.' }, { id: 's2', label: '보자기 공 나르기에 성공했어요. 모둠이 펄쩍펄쩍 뛰어요.' }, { id: 's3', label: '자전거를 혼자 탔어요. 다음엔 더 멀리 갈 수 있을 것 같아요.' }] },
                target: { match: { s1: '편안함', s2: '신남', s3: '자신감' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['신남', '편안함', '자신감', '무서움'] } } },
                hints: ['몸이 어떻게 되는지, 다음에 대해 무엇을 생각하는지 찾아요.', '\'힘이 빠져요\'와 \'더 멀리 갈 수 있을 것 같아요\'가 바르게 이어졌는지 봐요.', '힘이 빠짐은 편안함, 펄쩍 뛰기는 신남, 더 멀리는 자신감이에요.'] },
              { prompt: '종이접기 집을 처음 접어요. 접기 전에는 어려워 보여 마음이 쓰였고, 접다가 지붕이 찢어져 눈물이 날 것 같았고, 다시 접어 마을 지도에 세우고 가슴을 쭉 폈어요. 마음을 차례대로 놓아 보세요.', toolOptions: { mode: 'order', slots: ['하기 전', '하는 동안', '해 본 뒤'], cards: ['뿌듯함', '걱정', '속상함'] },
                target: { order: ['걱정', '속상함', '뿌듯함'] }, difficulty: 0.15,
                hints: ['종이접기를 하기 전, 하다가, 다 한 뒤를 떠올려요.', '다 해낸 뒤의 마음이 맨 끝에 있는지 봐요.', '걱정 → 찢어져 속상함 → 세우고 뿌듯함 차례예요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 내가 해 본 일의 마음 나누기', minutes: 14, tool: 'emotion', pair: true,
            teacher: '"37~43차시에 해 본 일 가운데 하나를 골라 해 본 뒤의 마음 크기를 골라요. 정답은 없어요." 짝에게 \'○○을 해 보고 □□ 마음이 들었어\'로 말하게 한다. 아쉬운 마음을 말한 학생에게 짝이 응원의 말을 해 주게 한다.',
            task: '내가 해 본 일의 마음 크기를 고르고, 짝에게 해 본 뒤의 마음을 말해요.',
            levels: { easy: { steps: 3 }, base: {}, challenge: {} },
            items: [
              { prompt: '이번 단원에서 해 본 새로운 일을 떠올리며 뿌듯한 마음이 얼마나 되는지 골라 보세요.', toolOptions: { mode: 'scale', situation: '사방치기, 종이접기, 줄넘기, 보자기 공 나르기 가운데 하나를 떠올려요.', feeling: '뿌듯함' }, target: { level: 'any' }, difficulty: 0.05 },
              { prompt: '같은 일을 떠올리며 아쉬운 마음이 얼마나 되는지 골라 보세요.', toolOptions: { mode: 'scale', situation: '사방치기, 종이접기, 줄넘기, 보자기 공 나르기 가운데 하나를 떠올려요.', feeling: '아쉬움' }, target: { level: 'any' }, difficulty: 0.05 },
              { prompt: '짝에게 "○○을 해 보고 □□ 마음이 들었어."라고 말하고, 짝의 말을 듣고 한 마디 해 준 뒤 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"뿌듯한 마음과 아쉬운 마음이 같이 든 사람?" 손을 들어 보게 하고 "두 마음이 함께 드는 것은 자연스러워요. 아쉬움은 다음 도전의 씨앗이 돼요"라고 말한다. 다음 시간에는 도전한 친구를 칭찬하는 말을 찾아본다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { cards: ['아쉬움', '뿌듯함'], slots: [{ id: 'e1', label: '엽서를 혼자 부쳤어요. 콧노래가 나와요.' }, { id: 'e2', label: '종이접기 지붕이 조금 비뚤어졌어요. 다음엔 더 반듯하게 하고 싶어요.' }] }, prompt: '해 본 뒤의 상황 글에서 단서를 찾아 알맞은 마음 카드를 놓아 보세요.', target: { match: { e1: '뿌듯함', e2: '아쉬움' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '해 본 뒤 아쉬운 마음이 들면?', options: ['다음에 무엇을 바꿀지 생각해요', '다시는 하지 않아요'], answer: 0, difficulty: 0.05, explain: '아쉬움은 다음 도전으로 이어질 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '해 본 뒤의 마음',
      items: [
        { type: 'figure', wide: true, prompt: '상황과 어울리는 마음을 선으로 이으세요.', tool: 'emotion', figures: [{ options: { cards: ['고마움', '아쉬움'], slots: [{ id: 'w1', label: '조금만 더 했으면 좋았을걸' }, { id: 'w2', label: '도와준 친구에게 말하고 싶어요' }] }, caption: '' }], answer: '조금만 더-아쉬움, 친구에게 말하고 싶음-고마움' },
        { type: 'blank', prompt: '나는 (            )을 해 보고 (        ) 마음이 들었어요.', answer: '' },
        { type: 'short', prompt: '하기 전과 해 본 뒤 마음이 어떻게 달라졌는지 쓰세요.' },
        { type: 'short', prompt: '짝이 해 준 말을 쓰세요.' },
      ],
      easy: {
        note: '뿌듯함도, 아쉬움도 소중한 마음이에요.',
        items: [
          { type: 'choice', prompt: '"가슴을 쭉 펴요"는 어떤 마음?', options: ['뿌듯함', '무서움'], answer: '뿌듯함' },
          { type: 'short', prompt: '내가 해 본 일을 쓰세요.' },
          { type: 'short', prompt: '그 뒤의 마음을 한 낱말로 쓰세요.' },
          { type: 'draw', prompt: '해 본 뒤의 내 얼굴을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 마음 크기는 세 칸이에요.',
      base: '해 본 뒤의 마음을 짝 짓고, 마음이 바뀐 차례를 놓아요.',
      challenge: '상황에 맞지 않는 마음 카드가 섞여요. 하기 전·해 본 뒤의 마음을 견주어 짝에게 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 잘된 일만 말하려 한다 → 아쉬움도 소중한 마음이라고 말해 준다. ② 마음 이름 대신 "좋았어요"만 쓴다 → 몸의 느낌(으쓱, 콧노래)에서 이름을 찾게 한다. ③ 해 본 일이 없다는 학생이 있다 → 단원에서 함께 한 사방치기·종이접기를 떠올리게 한다. 마음 크기는 정답이 없어 판정하지 않는다.',
  }));

  lessons.push(L(45, {
    title: '도전한 친구를 칭찬하는 말 찾기',
    objective: '결과보다 노력과 다시 해 본 과정을 칭찬하는 말을 고르고, 친구의 도전을 구체적으로 칭찬할 수 있다.',
    illustration: ART('paper children giving each other small paper star stickers, a bulletin board titled challenge tree with paper leaves', '노력을 칭찬해요', [
      { motif: 'tree', x: 380, y: 214 }, { motif: 'star', x: 120, y: 90 }, { motif: 'star', x: 240, y: 70 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"\'잘했어\'라는 칭찬과 \'세 번이나 다시 해 보았구나\'라는 칭찬, 어느 쪽이 더 힘이 될까요?" 두세 명의 생각을 듣는다. "무엇을 했는지 콕 집어 말해 주면 친구가 \'내 노력을 보았구나\' 하고 알아요." 도전 나무 게시판에 칭찬 별을 붙일 거라고 말한다.',
        student: '두 칭찬 가운데 듣고 싶은 칭찬을 고르고 까닭을 말해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'pick', basket: '노력을 칭찬하는 말', cards: ['"세 번이나 다시 해 보았구나!"', '"넌 원래 잘하잖아."'], shuffle: false }, sequence: [{ pick: ['"세 번이나 다시 해 보았구나!"'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 노력을 칭찬하는 말 고르기', minutes: 13, tool: 'mindmap',
            teacher: '"이 칭찬은 친구가 한 일을 콕 집어 말하나요, 아니면 타고난 것만 말하나요?" 카드를 읽고 나누게 한다. \'도전은 잘하는 사람만 하는 것\'이라는 생각이 왜 틀렸는지, 노력 칭찬과 이어 이야기한다.',
            task: '칭찬 카드를 노력을 칭찬하는 말과 그렇지 않은 말로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '칭찬 카드를 노력을 칭찬하는 말과 그렇지 않은 말로 나누어 보세요.', toolOptions: { mode: 'sort', topic: '해 본 친구에게 하는 말', slots: ['노력을 칭찬하는 말', '노력을 보지 않는 말'], cards: ['"줄이 걸려도 끝까지 했구나."', '"넌 원래 운동을 잘하잖아."', '"모둠에 구령을 먼저 제안했네."', '"1등 했으니까 잘했어."', '"지붕을 다시 접어 반듯하게 했구나."', '"넌 머리가 좋아서 그래."'] },
                target: { sort: { '노력을 칭찬하는 말': ['"줄이 걸려도 끝까지 했구나."', '"모둠에 구령을 먼저 제안했네."', '"지붕을 다시 접어 반듯하게 했구나."'], '노력을 보지 않는 말': ['"넌 원래 운동을 잘하잖아."', '"1등 했으니까 잘했어."', '"넌 머리가 좋아서 그래."'] } }, difficulty: 0.2,
                levels: { easy: { prompt: '칭찬 카드 네 장을 노력을 칭찬하는 말과 그렇지 않은 말로 나누어 보세요.', toolOptions: { cards: ['"줄이 걸려도 끝까지 했구나."', '"넌 원래 운동을 잘하잖아."', '"모둠에 구령을 먼저 제안했네."', '"1등 했으니까 잘했어."'] }, target: { sort: { '노력을 칭찬하는 말': ['"줄이 걸려도 끝까지 했구나."', '"모둠에 구령을 먼저 제안했네."'], '노력을 보지 않는 말': ['"넌 원래 운동을 잘하잖아."', '"1등 했으니까 잘했어."'] } } } },
                hints: ['친구가 한 일(끝까지 하기, 제안하기, 다시 접기)을 말하는지 봐요.', '\'원래\', \'1등\', \'머리가 좋아서\'가 들어간 카드가 어느 칸에 있는지 봐요.', '끝까지·제안·다시 접기는 노력 칭찬, 원래·1등·머리는 노력을 보지 않는 말이에요.'] },
              { prompt: '도전한 친구 옆에 그 친구의 노력을 콕 집은 칭찬 카드를 놓아 보세요.', toolOptions: { mode: 'match', topic: '노력 칭찬', slots: [{ id: 'm1', label: '하은: 무서웠지만 책 모임에 처음 갔어요' }, { id: 'm2', label: '도윤: 금을 밟고도 다시 했어요' }, { id: 'm3', label: '서아: 할 말을 적어 연습했어요' }], cards: ['"무서운데도 용기를 냈구나."', '"실수해도 다시 도전했구나."', '"미리 준비를 꼼꼼히 했구나."'] },
                target: { match: { m1: '"무서운데도 용기를 냈구나."', m2: '"실수해도 다시 도전했구나."', m3: '"미리 준비를 꼼꼼히 했구나."' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['"무서운데도 용기를 냈구나."', '"실수해도 다시 도전했구나."', '"미리 준비를 꼼꼼히 했구나."', '"넌 원래 잘하잖아."'] } } },
                hints: ['친구가 한 일에서 가장 애쓴 부분을 찾아요.', '무서움·실수·쪽지가 바른 칭찬과 이어졌는지 봐요.', '무서움은 용기, 실수 뒤 줄 서기는 다시 도전, 쪽지는 준비예요.'] },
              { prompt: '도전에 대해 바른 생각만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '바른 생각', cards: ['"처음엔 누구나 서툴러요."', '"도전은 잘하는 사람만 해요."', '"연습하면 조금씩 늘어요."', '"한 번 못 하면 끝이에요."'] },
                target: { pick: ['"처음엔 누구나 서툴러요."', '"연습하면 조금씩 늘어요."'] }, difficulty: 0.1,
                hints: ['이번 단원에서 직접 해 보며 알게 된 것을 떠올려요.', '도전을 막는 생각이 섞였는지 봐요.', '누구나 서툴다, 연습하면 는다가 바른 생각이에요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 친구의 도전을 칭찬 별에 쓰기', minutes: 14, tool: 'story', pair: true,
            teacher: '별 모양 종이를 나누어 준다. "짝이 이번 단원에서 도전한 일을 떠올리고, 무엇을 애썼는지 콕 집어 써요." 쓰기 전 칭찬 문장 틀을 빈칸 채우기로 연습한다. 다 쓴 별은 짝에게 읽어 주고 도전 나무에 함께 붙인다.',
            task: '칭찬 문장 틀을 채워 보고, 짝의 도전을 칭찬 별에 써서 도전 나무에 붙여요.',
            levels: CARD_LV,
            items: [
              { prompt: '칭찬 말풍선 빈칸에 알맞은 카드를 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['열 번 넘게 다시 접어 보았구나', '원래 손재주가 좋구나', '빨리 끝냈구나'], slots: [{ id: 'b1', who: '준호', motif: 'star', label: '지아야, 종이접기 집을 ___. 정말 애썼어!' }] },
                target: { fill: { b1: '열 번 넘게 다시 접어 보았구나' } }, difficulty: 0.15,
                hints: ['\'애썼어\'와 이어지는, 지아가 한 일을 말하는 카드를 골라요.', '타고난 것이나 빠르기를 말하는 카드가 섞였는지 봐요.', '여러 번 다시 접어 보았다는 카드가 노력 칭찬이에요.'] },
              { prompt: '짝의 도전을 떠올려 "○○을 □□해서 애썼구나"를 칭찬 별에 쓰고 "다 했어요"를 누르세요.', free: true },
              { prompt: '칭찬 별을 짝에게 읽어 주고 도전 나무 게시판에 함께 붙인 뒤 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"짝이 써 준 칭찬 별을 받고 마음이 어땠나요?" 두세 명에게 듣는다. 칠판에 \'도전은 잘하는 사람만 하는 것\'을 쓰고 "오늘 도전 나무를 보니 어떤가요?"라고 물어 반 전체가 도전했음을 함께 본다. 다음 시간에는 다음에 도전할 일을 골라 본다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic: '해 본 친구에게 하는 말', slots: ['노력을 칭찬하는 말', '노력을 보지 않는 말'], cards: ['"끝까지 줄을 잡고 있었구나."', '"넌 키가 커서 잘해."'] }, prompt: '칭찬 카드를 나누어 보세요.', target: { sort: { '노력을 칭찬하는 말': ['"끝까지 줄을 잡고 있었구나."'], '노력을 보지 않는 말': ['"넌 키가 커서 잘해."'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '도전에 대해 바른 생각은?', options: ['"도전은 잘하는 사람만 해요."', '"누구나 처음은 서툴러요."'], answer: 1, difficulty: 0.05, explain: '처음엔 누구나 서툴고, 해 보면서 늘어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '노력을 칭찬해요',
      items: [
        { type: 'table', prompt: '칭찬을 나누어 쓰세요.', columns: ['노력을 칭찬하는 말', '노력을 보지 않는 말'], cells: [['', ''], ['', '']] },
        { type: 'blank', prompt: '(      )아/야, (                )해서 애썼구나!', answer: '' },
        { type: 'choice', prompt: '바른 생각은?', options: ['연습하면 조금씩 늘어요', '한 번 못 하면 끝이에요'], answer: '연습하면 조금씩 늘어요' },
        { type: 'short', prompt: '내가 받은 칭찬 별의 말을 쓰세요.' },
      ],
      easy: {
        note: '친구가 한 일을 콕 집어 말해요.',
        items: [
          { type: 'choice', prompt: '노력을 칭찬하는 말은?', options: ['"끝까지 했구나."', '"넌 원래 잘해."'], answer: '"끝까지 했구나."' },
          { type: 'short', prompt: '짝이 도전한 일을 쓰세요.' },
          { type: 'short', prompt: '짝에게 해 줄 칭찬을 쓰세요.' },
          { type: 'draw', prompt: '칭찬 별을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고 칭찬 카드가 네 장이에요. 칭찬 별은 문장 틀에 낱말만 넣어요.',
      base: '칭찬 카드를 나누고 친구 노력에 맞는 칭찬을 이어요.',
      challenge: '노력을 보지 않는 칭찬이 섞여요. 칭찬 별에 친구가 애쓴 점을 두 가지 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① "잘했어"만 쓴다 → "무엇을 잘했어?"로 한 가지 콕 집게 한다. ② 결과(1등, 성공)만 칭찬한다 → 다시 해 본 과정을 떠올리게 한다. ③ 짝의 도전을 모른다 → 짝에게 먼저 묻고 쓰게 한다. 칭찬 별에는 놀리는 말을 쓰지 않도록 쓰기 전에 약속한다.',
  }));

  lessons.push(L(46, {
    title: '다음에 도전할 일 하나 고르기',
    objective: '이번 단원의 도전을 돌아보고, 지금 해 볼 만한 다음 도전을 하나 골라 그 까닭을 말할 수 있다.',
    illustration: ART('a paper path leading from a small flag to a bigger flag on a hill, a child standing at the first flag looking toward the next, village houses along the path', '다음 깃발은 어디?', [
      { motif: 'mountain', x: 380, y: 210 }, { motif: 'house', x: 110, y: 214, color: 'peach' }, { motif: 'sun', x: 410, y: 56, s: 0.7 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '도전 나무 게시판을 함께 본다. "38차시에 쓴 첫 도전 카드, 해 보았나요?" 해 본 학생, 아직인 학생 모두에게 손을 들게 하고 "아직인 사람은 다음 도전으로 이어 가도 돼요"라고 말한다. "오늘은 다음 깃발, 다음 도전을 골라요."',
        student: '내 첫 도전 카드를 다시 읽고, 해 보았는지 짝에게 말해 봐요.',
        demo: { tool: 'story', options: { mode: 'match', slots: [{ id: 'd1', label: '그림책 세 권 읽기를 해냈어요' }], cards: ['다음엔 책 모임에서 한 권 소개하기'], shuffle: false }, sequence: [{ match: { d1: '다음엔 책 모임에서 한 권 소개하기' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 해낸 도전과 다음 도전 잇기', minutes: 13, tool: 'story',
            teacher: '"해낸 도전 다음에는 한 걸음 더 나아간 도전이 올 수 있어요." 해낸 일과 같은 종류이면서 조금 더 나아간 도전을 잇게 한다. 너무 크게 건너뛴 도전을 고른 학생에게 "한 계단만 더 오르면 무엇일까요?"라고 묻는다.',
            task: '해낸 도전 옆에 한 걸음 더 나아간 다음 도전 카드를 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '해낸 도전 옆에 한 걸음 더 나아간 다음 도전 카드를 놓아 보세요.', toolOptions: { mode: 'match', slots: [{ id: 'm1', label: '줄넘기 이어 다섯 번 넘기' }, { id: 'm2', label: '보호자와 시장에서 두부 사기' }, { id: 'm3', label: '종이접기 집 접기' }], cards: ['줄넘기 이어 열 번 넘기', '보호자는 뒤에서 보고 혼자 두부 사기', '종이접기 집에 창문과 문 접어 붙이기'] },
                target: { match: { m1: '줄넘기 이어 열 번 넘기', m2: '보호자는 뒤에서 보고 혼자 두부 사기', m3: '종이접기 집에 창문과 문 접어 붙이기' } }, difficulty: 0.1 },
              { prompt: '해낸 도전 옆에 한 걸음 더 나아간 다음 도전 카드를 놓아 보세요.', toolOptions: { mode: 'match', slots: [{ id: 'm1', label: '사방치기 4번 칸까지 가기' }, { id: 'm2', label: '책 모임에 한 번 가 보기' }, { id: 'm3', label: '엽서를 보호자와 부치기' }], cards: ['사방치기 8번 칸까지 가기', '책 모임에서 좋아하는 장면 말하기', '엽서에 그림을 그려 혼자 부치기'] },
                target: { match: { m1: '사방치기 8번 칸까지 가기', m2: '책 모임에서 좋아하는 장면 말하기', m3: '엽서에 그림을 그려 혼자 부치기' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['사방치기 8번 칸까지 가기', '책 모임에서 좋아하는 장면 말하기', '엽서에 그림을 그려 혼자 부치기', '혼자 기차 타고 여행 가기'] } } },
                hints: ['해낸 일과 같은 종류이면서 한 걸음만 더 간 것을 찾아요.', '사방치기·책 모임·엽서가 서로 맞게 이어졌는지 봐요.', '4번 칸은 8번 칸, 모임 가기는 장면 말하기, 함께 부치기는 혼자 부치기로 이어져요.'] },
              { prompt: '다음 도전을 고를 때 살필 것만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '살필 것', cards: ['안전하게 할 수 있나요?', '내가 정말 해 보고 싶나요?', '친구가 부러워할까요?', '한 걸음만 더 나아간 일인가요?'] },
                target: { pick: ['안전하게 할 수 있나요?', '내가 정말 해 보고 싶나요?', '한 걸음만 더 나아간 일인가요?'] }, difficulty: 0.15,
                hints: ['38차시 도전 카드를 쓸 때 따진 기준을 떠올려요.', '남의 눈을 살피는 카드가 섞였는지 봐요.', '안전·하고 싶은 마음·한 걸음 더가 살필 것이에요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 나의 다음 도전 고르기', minutes: 14, tool: 'emotion', pair: true,
            teacher: '"세 가지 기준으로 나의 다음 도전을 하나 골라 활동지에 써요." 까닭은 34차시처럼 \'왜냐하면 ~ 때문이에요\'로 쓰게 한다. 짝에게 말하고, 짝은 기준 세 가지에 맞는지 손가락으로 세어 준다. 다음 시간에 이 도전을 그림으로 그린다고 알린다.',
            task: '나의 다음 도전과 까닭을 활동지에 쓰고, 짝과 기준에 맞는지 살펴요.',
            levels: { easy: { steps: 3 }, base: {}, challenge: {} },
            items: [
              { prompt: '나의 다음 도전과 까닭("왜냐하면 ~ 때문이에요")을 활동지에 쓰고 "다 했어요"를 누르세요.', free: true },
              { prompt: '짝에게 다음 도전을 말하고, 짝이 안전·하고 싶은 마음·한 걸음 더에 맞는지 손가락으로 세어 준 뒤 "다 했어요"를 누르세요.', free: true },
              { prompt: '나의 다음 도전을 떠올리며 해 보고 싶은 마음이 얼마나 되는지 골라 보세요.', toolOptions: { mode: 'scale', situation: '나의 다음 도전을 하나 골랐어요.', feeling: '설렘', ask: '해 보고 싶은 마음은 얼마나 되나요?' }, target: { level: 'any' }, difficulty: 0.05 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"다음 도전을 고른 사람은 엄지를 들어 봐요." 두세 명에게 다음 도전과 까닭을 듣는다. 아직 못 고른 학생에게는 첫 도전을 한 번 더 해 보는 것도 다음 도전이라고 말한다. 다음 시간에는 이 도전을 그림으로 그린다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { mode: 'match', slots: [{ id: 'e1', label: '공원 한 바퀴 달리기' }, { id: 'e2', label: '그림책 세 권 읽기' }], cards: ['공원 두 바퀴 달리기', '그림책 다섯 권 읽기'] }, prompt: '해낸 도전 옆에 한 걸음 더 나아간 다음 도전 카드를 놓아 보세요.', target: { match: { e1: '공원 두 바퀴 달리기', e2: '그림책 다섯 권 읽기' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '다음 도전을 고를 때 살필 것이 아닌 것은?', options: ['안전하게 할 수 있나요?', '친구가 부러워할까요?'], answer: 1, difficulty: 0.1, explain: '남의 눈보다 내 마음과 안전을 살펴요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '나의 다음 도전',
      items: [
        { type: 'blank', prompt: '내가 해낸 도전: (                        )', answer: '' },
        { type: 'blank', prompt: '나의 다음 도전: (                        )', answer: '' },
        { type: 'blank', prompt: '왜냐하면 (                        ) 때문이에요.', answer: '' },
        { type: 'check', prompt: '내 다음 도전에 맞는 것에 ✓ 하세요.', options: ['안전하게 할 수 있어요', '내가 정말 해 보고 싶어요', '한 걸음만 더 나아간 일이에요'] },
      ],
      easy: {
        note: '안전하게 · 하고 싶은 · 한 걸음 더',
        items: [
          { type: 'short', prompt: '해낸 도전을 쓰세요.' },
          { type: 'short', prompt: '다음 도전을 쓰세요.' },
          { type: 'choice', prompt: '살필 것은?', options: ['안전한가요?', '친구가 부러워할까요?'], answer: '안전한가요?' },
          { type: 'draw', prompt: '다음 깃발을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 다음 도전은 첫 도전을 한 번 더 하는 것도 돼요. 마음 크기는 세 칸이에요.',
      base: '해낸 도전과 다음 도전을 잇고, 기준으로 나의 다음 도전을 골라요.',
      challenge: '너무 크게 건너뛴 함정 카드가 섞여요. 다음 도전과 그다음 도전까지 두 계단을 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 다음 도전이 너무 크다 → 한 계단만 더 오르게 줄인다. ② 친구에게 자랑할 일을 고른다 → 내가 정말 하고 싶은지 묻는다. ③ 첫 도전을 못 해서 다음 도전이 없다고 한다 → 첫 도전을 다시 해 보는 것도 다음 도전이라고 말한다. 다음 도전은 가정에 알려 보호자가 함께 살피게 한다.',
  }));

  lessons.push(L(47, {
    title: '다음 도전을 그림으로 그려 소개하기',
    objective: '나의 다음 도전을 하는 모습을 장면 그림으로 그리고, 무엇을·어디서·왜 하는지 넣어 친구들에게 소개할 수 있다.',
    illustration: ART('a paper art gallery wall in a classroom with children drawings of jumping rope, buying tofu and reading books, a child pointing at her picture', '내 도전 그림 전시회', [
      { motif: 'star', x: 120, y: 90 }, { motif: 'house', x: 380, y: 214, color: 'lavender' }, { motif: 'flower', x: 110, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '선생님이 그린 도전 그림(텃밭에서 상추 따는 모습)을 보여 준다. "그림에 무엇이 보이나요?" 학생이 찾은 것(상추, 바구니, 텃밭 이름표)을 칠판에 쓰고 "무엇을, 어디서 하는지 그림만 봐도 알 수 있게 그려요"라고 말한다. 46차시 활동지를 꺼내게 한다.',
        student: '선생님 그림에서 \'무엇을, 어디서\'를 찾아 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '선생님의 도전 그림', slots: ['무엇을', '어디서'], cards: ['상추 따기', '마을 텃밭'], shuffle: false }, sequence: [{ sort: { '무엇을': ['상추 따기'], '어디서': ['마을 텃밭'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 도전 그림에 넣을 것 고르기', minutes: 8, tool: 'mindmap',
            teacher: '"그림에 무엇을 그려야 친구가 내 도전을 알아볼까요?" 도전마다 꼭 들어갈 것과 없어도 되는 것을 나누게 한다. 그림 실력이 아니라 알아보기 쉬운지가 중요하다고 말한다.',
            task: '도전 그림에 넣을 것을 무엇을·어디서·왜로 나누고, 꼭 필요한 것을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '도전 소개 카드를 무엇을, 어디서, 왜로 나누어 보세요.', toolOptions: { topic: '하은이의 도전 그림', slots: ['무엇을', '어디서', '왜'], cards: ['좋아하는 장면 말하기', '도서관 책 모임', '친구들과 책 이야기를 나누고 싶어서'] },
                target: { sort: { '무엇을': ['좋아하는 장면 말하기'], '어디서': ['도서관 책 모임'], '왜': ['친구들과 책 이야기를 나누고 싶어서'] } }, difficulty: 0.1 },
              { prompt: '\'공원에서 줄넘기 열 번 넘기\' 도전 그림에 꼭 들어갈 것만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '꼭 그릴 것', cards: ['줄넘기 줄', '공원 나무', '줄을 넘는 나', '우체통'] },
                target: { pick: ['줄넘기 줄', '공원 나무', '줄을 넘는 나'] }, difficulty: 0.1,
                hints: ['무엇을, 어디서 하는지 알려 주는 것을 골라요.', '도전과 상관없는 곳의 물건이 섞였는지 봐요.', '줄, 공원 나무, 줄을 넘는 나를 그려요. 우체통은 우체국 것이에요.'] },
              { prompt: '\'시장에서 혼자 두부 사기\' 도전 그림에 꼭 들어갈 것만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '꼭 그릴 것', cards: ['두부 가게', '돈을 내는 나', '책 반납함', '두부'] },
                target: { pick: ['두부 가게', '돈을 내는 나', '두부'] }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['두부 가게', '돈을 내는 나', '책 반납함', '두부', '미끄럼틀'] } } },
                hints: ['그림만 보고도 어디서 무엇을 하는지 알 수 있게 하는 것을 골라요.', '도서관이나 놀이터 물건이 섞였는지 봐요.', '두부 가게, 돈을 내는 나, 두부를 그려요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 도전 그림 그리고 전시회 하기', minutes: 20, tool: 'emotion', pair: true,
            teacher: '8절 도화지에 도전하는 내 모습을 12분 동안 그리고, 아래에 \'무엇을·어디서·왜\'를 한 줄씩 쓰게 한다. 그림을 교실 벽에 붙여 전시회를 연다. 모둠별로 돌며 친구 그림을 보고, 그린 사람은 30초 동안 자기 도전을 소개한다. 듣는 사람은 붙임 쪽지에 응원 한 마디를 붙여 준다.',
            task: '다음 도전 그림을 그리고 전시회에서 소개하며, 친구 그림에 응원 쪽지를 붙여요.',
            levels: { easy: { steps: 3 }, base: {}, challenge: {} },
            items: [
              { prompt: '도화지에 다음 도전을 하는 내 모습을 그리고 아래에 무엇을·어디서·왜를 써서 "다 했어요"를 누르세요.', free: true },
              { prompt: '전시회에서 내 그림을 30초 동안 소개하고, 친구 그림 두 장에 응원 쪽지를 붙인 뒤 "다 했어요"를 누르세요.', free: true },
              { prompt: '친구들 앞에서 도전 그림을 소개해 보니 자신감이 얼마나 생겼는지 골라 보세요.', toolOptions: { mode: 'scale', situation: '전시회에서 내 도전 그림을 소개했어요.', feeling: '자신감' }, target: { level: 'any' }, difficulty: 0.05 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"내 그림에 붙은 응원 쪽지를 읽어 볼까요?" 두세 명에게 가장 힘이 된 쪽지를 듣는다. 전시회 그림은 단원이 끝날 때까지 붙여 둔다. 다음 시간에는 \'3. 마을\' 단원 전체를 돌아본다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', basket: '꼭 그릴 것', cards: ['엽서', '우체통', '줄넘기 줄'] }, prompt: '\'우체국에서 엽서 부치기\' 도전 그림에 꼭 들어갈 것만 바구니에 넣어 보세요.', target: { pick: ['엽서', '우체통'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '도전 그림을 소개할 때 꼭 말할 것은?', options: ['무엇을·어디서·왜', '그림을 그린 시간'], answer: 0, difficulty: 0.05, explain: '무엇을·어디서·왜를 말하면 친구가 내 도전을 알 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '나의 다음 도전 그림',
      items: [
        { type: 'draw', prompt: '다음 도전을 하는 내 모습을 그려 보세요.' },
        { type: 'table', prompt: '내 도전을 소개하는 말을 쓰세요.', columns: ['칸', '내 도전'], cells: [['무엇을', ''], ['어디서', ''], ['왜', '']] },
        { type: 'short', prompt: '친구가 붙여 준 응원 쪽지의 말을 쓰세요.' },
        { type: 'short', prompt: '친구 그림 가운데 기억에 남는 도전을 쓰세요.' },
      ],
      easy: {
        note: '그림만 봐도 무엇을, 어디서 하는지 알 수 있게!',
        items: [
          { type: 'draw', prompt: '도전하는 내 모습을 그려 보세요.' },
          { type: 'short', prompt: '무엇을 하는지 쓰세요.' },
          { type: 'short', prompt: '어디서 하는지 쓰세요.' },
          { type: 'choice', prompt: '소개할 때 말할 것은?', options: ['무엇을·어디서', '그린 시간'], answer: '무엇을·어디서' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 그림 아래에는 무엇을·어디서만 써요. 마음 크기는 세 칸이에요.',
      base: '넣을 것을 고르고 그림을 그려 무엇을·어디서·왜를 소개해요.',
      challenge: '상관없는 것이 더 섞여요. 그림에 도전의 단계 세 개를 작은 칸으로 함께 그려요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 그림 실력을 걱정한다 → 알아보기 쉬운지가 중요하다고 말하고 막대 사람도 된다고 알려 준다. ② 배경만 크게 그리고 나를 빠뜨린다 → 도전하는 나를 가장 크게 그리게 한다. ③ 소개할 때 말이 막힌다 → 그림 아래 세 줄을 읽어도 된다고 말한다. 응원 쪽지에는 친구 그림을 평가하는 말 대신 응원하는 말을 쓰게 한다.',
  }));

  lessons.push(L(48, {
    title: '\'3. 마을\' 단원 돌아보기',
    objective: '마을 탐험, 마을 일 함께하기, 새로운 도전에서 배운 것을 짝 짓고, 단원 공부를 스스로 돌아볼 수 있다.',
    illustration: ART('a paper village map spread on a classroom floor with tiny origami houses, flags marking places explored, a challenge tree board on the wall', '우리 마을, 우리 도전', [
      { motif: 'house', x: 110, y: 214, color: 'sky' }, { motif: 'tree', x: 380, y: 214 }, { motif: 'star', x: 240, y: 80 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '교실 바닥 지도, 도전 나무, 전시회 그림을 차례로 가리키며 "이번 단원에서 우리가 한 일을 떠올려 봐요"라고 말한다. 학생들이 떠올린 활동을 칠판의 세 칸(마을 탐험 / 마을 일 함께하기 / 새로운 도전)에 나누어 적는다. "오늘은 세 가지를 한 번에 돌아봐요."',
        student: '이번 단원에서 가장 기억에 남는 활동 하나를 짝에게 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '3. 마을', slots: ['마을 탐험', '새로운 도전'], cards: ['마을 지도 그리기', '사방치기 해 보기'], shuffle: false }, sequence: [{ sort: { '마을 탐험': ['마을 지도 그리기'], '새로운 도전': ['사방치기 해 보기'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 단원 활동 돌아보며 나누기', minutes: 13, tool: 'mindmap',
            teacher: '"이 활동은 세 칸 가운데 어디에 들어갈까요?" 활동 카드를 읽고 나누게 한다. 헷갈리는 카드가 있으면 그 시간 활동지를 펴 보게 한다. 다 나눈 뒤 칸마다 배운 것을 한 낱말로 말하게 한다(탐험-질문, 함께하기-역할, 도전-다시).',
            task: '단원 활동 카드를 마을 탐험, 마을 일 함께하기, 새로운 도전으로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '단원 활동 카드를 세 칸으로 나누어 보세요.', toolOptions: { topic: '3. 마을', slots: ['마을 탐험', '마을 일 함께하기', '새로운 도전'], cards: ['마을 사람께 공손히 여쭙기', '교실 청소 역할 나누기', '줄넘기 다시 해 보며 기록하기', '도움 받을 곳 지도에 표시하기', '분리배출 함께하기', '종이접기 집 단계 따라 접기'] },
                target: { sort: { '마을 탐험': ['마을 사람께 공손히 여쭙기', '도움 받을 곳 지도에 표시하기'], '마을 일 함께하기': ['교실 청소 역할 나누기', '분리배출 함께하기'], '새로운 도전': ['줄넘기 다시 해 보며 기록하기', '종이접기 집 단계 따라 접기'] } }, difficulty: 0.2,
                levels: { easy: { prompt: '단원 활동 카드를 마을 탐험과 새로운 도전으로 나누어 보세요.', toolOptions: { slots: ['마을 탐험', '새로운 도전'], cards: ['마을 사람께 공손히 여쭙기', '줄넘기 다시 해 보며 기록하기', '도움 받을 곳 지도에 표시하기', '종이접기 집 단계 따라 접기'] }, target: { sort: { '마을 탐험': ['마을 사람께 공손히 여쭙기', '도움 받을 곳 지도에 표시하기'], '새로운 도전': ['줄넘기 다시 해 보며 기록하기', '종이접기 집 단계 따라 접기'] } } } },
                hints: ['마을을 알아본 일, 함께 일한 일, 처음 해 본 일 가운데 어느 것인지 생각해요.', '청소와 분리배출이 어느 칸에 있는지 다시 봐요.', '여쭙기·지도 표시는 탐험, 청소·분리배출은 함께하기, 줄넘기·종이접기는 도전이에요.'] },
              { prompt: '단원에서 배운 것 옆에 알맞은 실천 카드를 놓아 보세요.', toolOptions: { mode: 'match', topic: '배운 것 실천하기', slots: [{ id: 'm1', label: '마을 사람께 여쭐 때' }, { id: 'm2', label: '맡은 일을 할 때' }, { id: 'm3', label: '새로운 일이 잘 안 될 때' }], cards: ['공손히 "여쭈어봐도 될까요?" 해요', '잊지 않게 역할표를 보고 끝까지 해요', '방법을 바꾸어 한 번 더 해 봐요'] },
                target: { match: { m1: '공손히 "여쭈어봐도 될까요?" 해요', m2: '잊지 않게 역할표를 보고 끝까지 해요', m3: '방법을 바꾸어 한 번 더 해 봐요' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['공손히 "여쭈어봐도 될까요?" 해요', '잊지 않게 역할표를 보고 끝까지 해요', '방법을 바꾸어 한 번 더 해 봐요', '바쁘면 맡은 일을 친구에게 미뤄요'] } } },
                hints: ['그 상황에서 단원에서 배운 방법을 떠올려요.', '역할표와 다시 해 보기가 바른 상황과 이어졌는지 봐요.', '여쭐 때는 공손히, 맡은 일은 역할표 보고 끝까지, 잘 안 되면 방법 바꿔 다시예요.'] },
              { prompt: '단원을 공부하며 알게 된 바른 생각만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '바른 생각', cards: ['"마을 일은 어른만 하는 거야."', '"우리도 마을 일을 함께할 수 있어."', '"도전은 잘하는 사람만 해."', '"처음엔 누구나 서툴러."'] },
                target: { pick: ['"우리도 마을 일을 함께할 수 있어."', '"처음엔 누구나 서툴러."'] }, difficulty: 0.1,
                hints: ['단원에서 직접 해 보며 알게 된 것을 떠올려요.', '어른만, 잘하는 사람만이라고 말하는 카드가 섞였는지 봐요.', '함께할 수 있다, 누구나 서툴다가 바른 생각이에요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 단원 공부 스스로 돌아보기', minutes: 14, tool: 'emotion', pair: true,
            teacher: '"이번 단원 공부를 스스로 돌아봐요. 정답은 없어요. 솔직하게 고르면 돼요." 마음 크기를 고른 뒤 짝에게 가장 뿌듯했던 일과 다음에 더 해 보고 싶은 일을 하나씩 말하게 한다. 활동지에 단원 소감을 한 줄로 쓴다.',
            task: '단원 공부를 스스로 돌아보며 마음 크기를 고르고, 짝과 소감을 나눠요.',
            levels: { easy: { steps: 3 }, base: {}, challenge: {} },
            items: [
              { prompt: '마을 탐험을 하며 우리 마을을 더 잘 알게 된 정도를 골라 보세요.', toolOptions: { mode: 'scale', situation: '이번 단원에서 우리 마을을 탐험했어요.', feeling: '뿌듯함', ask: '우리 마을을 더 잘 알게 되었나요?' }, target: { level: 'any' }, difficulty: 0.05 },
              { prompt: '새로운 일에 도전해 본 나를 떠올리며 자신감이 얼마나 생겼는지 골라 보세요.', toolOptions: { mode: 'scale', situation: '이번 단원에서 사방치기, 종이접기, 줄넘기에 도전했어요.', feeling: '자신감' }, target: { level: 'any' }, difficulty: 0.05 },
              { prompt: '짝에게 가장 뿌듯했던 일과 다음에 더 해 보고 싶은 일을 하나씩 말한 뒤 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"단원 소감을 한 줄씩 들어 볼까요?" 모둠마다 한 명이 소감을 말한다. "여러분이 마을을 알아보고, 마을 일을 함께하고, 새로운 일에 도전했어요. 이제 마을의 작은 일꾼이자 도전하는 사람이에요." 도전 그림과 칭찬 별은 집에 가져가 보호자께 보여 드리게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '3. 마을', slots: ['마을 일 함께하기', '새로운 도전'], cards: ['보자기 공 나르기 다시 해 보기', '모둠 청소 시간 맞추기'] }, prompt: '단원 활동 카드를 두 칸으로 나누어 보세요.', target: { sort: { '마을 일 함께하기': ['모둠 청소 시간 맞추기'], '새로운 도전': ['보자기 공 나르기 다시 해 보기'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '새로운 일이 한 번에 잘 안 될 때 할 일은?', options: ['방법을 바꾸어 다시 해 봐요', '바로 그만둬요'], answer: 0, difficulty: 0.05, explain: '방법을 바꾸어 다시 해 보면 조금씩 나아져요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '\'3. 마을\' 돌아보기',
      items: [
        { type: 'table', prompt: '단원에서 한 일을 칸에 맞게 쓰세요.', columns: ['마을 탐험', '마을 일 함께하기', '새로운 도전'], cells: [['', '', ''], ['', '', '']] },
        { type: 'choice', prompt: '맡은 일을 할 때 좋은 방법은?', options: ['역할표를 보고 끝까지 해요', '바쁘면 친구에게 미뤄요'], answer: '역할표를 보고 끝까지 해요' },
        { type: 'short', prompt: '이번 단원에서 가장 뿌듯했던 일을 쓰세요.' },
        { type: 'short', prompt: '단원 소감을 한 줄로 쓰세요.' },
      ],
      easy: {
        note: '탐험하고, 함께하고, 도전했어요!',
        items: [
          { type: 'short', prompt: '기억에 남는 활동을 쓰세요.' },
          { type: 'choice', prompt: '잘 안 될 때는?', options: ['다시 해 봐요', '그만둬요'], answer: '다시 해 봐요' },
          { type: 'short', prompt: '가장 뿌듯했던 일을 쓰세요.' },
          { type: 'draw', prompt: '우리 마을에서 내가 한 일을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고 칸이 두 개예요. 마음 크기는 세 칸이에요.',
      base: '활동을 세 칸으로 나누고, 배운 것과 실천을 이어요.',
      challenge: '함정 카드가 섞여요. 칸마다 배운 것을 한 문장으로 정리해 짝에게 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 활동이 어느 칸인지 헷갈린다 → 그 시간 활동지를 펴 보게 한다. ② 스스로 돌아보기에서 친구 눈치를 본다 → 마음 크기는 정답이 없고 판정하지 않는다고 말해 준다. ③ 소감을 "재미있었다"로만 쓴다 → 무엇이 왜 재미있었는지 한 낱말을 더하게 한다. 단원 전체의 도전 그림·칭찬 별은 학생 이름을 가린 채 학급 게시판에만 둔다.',
  }));

  // ── 차시 끝 ──

  PaperLessons.registerUnit({
    id: 'g2-int-1-03', schema: 'edu-unit.v1', catalogUnit: UNIT,
    grade: 2, subject: '통합교과', unitTitle: TITLE,
    flow: '1~16차시에는 궁금한 것을 정해 마을을 탐험하고, 지도·인터뷰·그림 기록으로 마을의 곳과 사람, 도움 받을 곳을 알아본다. 17~32차시에는 교실과 마을에서 함께할 일을 찾아 역할을 나누고, 잊거나 바쁠 때의 어려움을 해결하며 청소·분리배출을 실천한 뒤 달라진 점을 돌아본다. 33~38차시에는 마을에서 해 보고 싶은 새로운 일과 그 까닭을 말하고, 걱정을 줄이는 준비를 찾아 나의 첫 도전 카드를 쓴다. 39~43차시에는 도전을 작은 단계로 나누어 사방치기·종이접기·줄넘기·협동 놀이를 직접 해 보며, 잘 안 될 때 방법을 바꾸어 다시 해 본다. 44~48차시에는 해 본 뒤의 마음과 노력 칭찬을 나누고, 다음 도전을 골라 그림으로 소개하며 단원을 돌아본다.',
    refs: {},
    lessons: lessons,
  });
})();
