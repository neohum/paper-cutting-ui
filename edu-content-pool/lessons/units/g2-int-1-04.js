/* 2학년 1학기 통합교과 4. 세계 — 48차시
 * 1~12차시 [슬기로운 생활] 궁금한 세계 탐색: 궁금한 곳 고르고 질문 만들기(1~4) → 책·영상·사진·지도 자료 읽기(5~8) → 알아낸 것과 상상한 것 전하기(9~12)
 * 13~24차시 [바른 생활] 차이와 다양성 존중: 여러 나라의 옷·음식·인사·집 견주기(13~16) → 다른 나라 놀이 함께 하기(17~20) → 달라진 마음·우리 반 약속(21~24)
 * 25~36차시 [즐거운 생활] 세계의 노래 듣기: 되풀이·센 박 찾기(25~28) → 빠르기·셈여림·높낮이를 몸과 그림으로(29~32) → 친구와 견주고 다시 듣기(33~36)
 * 37~48차시 [즐거운 생활] 세계의 미술 작품 감상: 눈에 띈 곳·아는 것 찾기(37~40) → 느낌·이야기 나타내기(41~44) → 다른 느낌 받아들이고 다시 보기·정리(45~48)
 * 성취기준: units-map 단원 목록이 비어 있고 미확인(standardsVerified:false)이라 모든 차시 standards: [] (지어내지 않는다).
 * 노래는 저작권이 끝난 민요·동요의 가락만 쓴다(가사는 싣지 않는다): 반짝반짝 작은 별(프랑스 민요, 18세기), 프레르 자크(프랑스 민요),
 * 메리의 작은 양(미국 동요, 1830년), 런던 다리(영국 전래 동요), 노를 저어라(Row, Row, Row Your Boat — 미국 동요, 1852년), 아리랑(우리 민요).
 * 미술 작품은 저작권이 끝난 작품을 말로만 소개하고(그림을 싣지 않는다), 교사는 미술관 공개 자료로 보여 준다:
 * 고흐 '별이 빛나는 밤'(1889), 호쿠사이 '가나가와 해변의 높은 파도'(1831년 무렵), 김홍도 '씨름'(조선), 아르침볼도 '여름'(1573),
 * 모네 '수련' 연작, 쇠라 '그랑드자트섬의 일요일 오후'(1884~1886), 마티스 오려 붙이기 작품(1940년대), 몬드리안 '구성' 연작.
 * 예문·이야기는 모두 직접 지었다. 학생 이름은 가명(민지·준호·하준·서아)만 쓴다.
 * 세계 지도는 실제 모양이 아니라 대륙·바다의 자리만 나타낸 칸 지도다 — 교사는 지구본·세계 지도와 함께 보여 준다.
 */
(function () {
  var UNIT = 'g2-통합교과-1학기-4';
  var TITLE = '4. 세계';
  var HEAD = 'Layered paper-cut illustration of ';
  var TAIL = ', with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.';
  function two(n) { return (n < 10 ? '0' : '') + n; }
  function L(n, x) {
    var head = {
      id: 'g2-int-1-04-' + two(n), schema: 'edu-lesson.v1', catalog: { unit: UNIT, lesson: n },
      grade: 2, subject: '통합교과', unitTitle: TITLE,
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
  var MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };
  // 카드 판 교구 단계: 쉬움은 맞는 칸에 초록 테두리·틀린 카드는 바로 돌아옴, 도전은 문항마다 함정 카드를 더 넣는다
  var CARD_LV = { easy: { live: true, instant: true }, base: {}, challenge: {} };

  // ── 세계 칸 지도(8×4, 태평양을 가운데 둔 우리나라 세계 지도 모양): 대륙과 큰 바다의 자리만 나타낸다.
  //    칸 수는 실제 넓이 차례를 따른다(대륙: 아시아 5 > 아프리카 4 > 북아메리카·남극 3 > 유럽·남아메리카·오세아니아 2, 바다: 태평양 6 > 대서양 2 > 인도양 1).
  var LAND = [
    { name: '유럽', cells: [[0, 0], [1, 0]], color: 'lavender' },
    { name: '아시아', cells: [[2, 0], [3, 0], [4, 0], [2, 1], [3, 1]], color: 'buttercup' },
    { name: '아프리카', cells: [[0, 1], [1, 1], [0, 2], [1, 2]], color: 'peach' },
    { name: '오세아니아', cells: [[3, 2], [4, 2]], color: 'mint' },
    { name: '남극', cells: [[2, 3], [3, 3], [4, 3]], color: 'cream' },
    { name: '북아메리카', cells: [[6, 0], [7, 0], [6, 1]], color: 'mint' },
    { name: '남아메리카', cells: [[6, 3], [7, 3]], color: 'rose' },
  ];
  var SEA = [
    { name: '태평양', cells: [[5, 0], [4, 1], [5, 1], [5, 2], [6, 2], [5, 3]], color: 'sky' },
    { name: '대서양', cells: [[7, 1], [7, 2]], color: 'sky' },
    { name: '인도양', cells: [[1, 3]], color: 'sky' },
  ];
  var KOREA = { name: '우리나라', icon: 'capital', at: [4, 0] };
  function WORLD(extra) {
    var o = { grid: [8, 4], regions: LAND.concat(SEA), sea: [[0, 3], [2, 2]], places: [KOREA] };
    for (var k in extra || {}) o[k] = extra[k];
    return o;
  }
  var MAP_LV = { easy: { readout: true }, base: {}, challenge: { regionNames: false } };

  var lessons = [];

  // ───────────────────────── 1~4차시: 궁금한 곳 고르고 질문 만들기 ─────────────────────────

  lessons.push(L(1, {
    title: '가 보기 어려운 곳 가운데 궁금한 곳 고르기',
    objective: '바닷속·우주·얼음으로 덮인 곳처럼 가 보기 어려운 곳을 나누어 보고, 가장 궁금한 곳 하나를 골라 까닭을 말할 수 있다.',
    illustration: ART('a child looking through a round paper window that shows the deep sea with a whale, the moon with stars, and a snowy land with penguins', '어디가 궁금한가요?', [
      { motif: 'wave', x: 120, y: 220 }, { motif: 'moon', x: 360, y: 80, s: 0.7 }, { motif: 'snow', x: 300, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 7,
        teacher: '지구본을 천천히 돌리며 "여러분이 가 보고 싶지만 가기 어려운 곳이 있나요?" 하고 묻는다. 두세 명의 대답을 칠판에 적는다. 시연 단추로 \'달\' 카드가 \'우주\' 칸에 놓이는 모습을 보여 준다. "이번 단원에서는 가 보기 어려운 세계를 여러 가지 자료로 알아보고, 세계 여러 나라의 생활과 노래와 그림도 만나요."',
        student: '가 보고 싶지만 가기 어려운 곳을 하나 떠올려 짝에게 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '가 보기 어려운 곳', slots: ['바닷속', '우주'], cards: ['달', '산호초 숲'], shuffle: false }, sequence: [{ sort: { '바닷속': ['산호초 숲'], '우주': ['달'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 가 보기 어려운 곳 나누기', minutes: 13, tool: 'mindmap',
            teacher: '"이곳은 물속일까요, 하늘 너머일까요, 얼음 위일까요?" 카드를 하나씩 소리 내어 읽게 한다. 북극을 \'땅\'이라고 하는 학생에게 "북극은 바다가 얼어붙은 곳이에요. 그래서 칸 이름이 \'얼음으로 덮인 곳\'이에요"라고 짚는다. 놀이터처럼 쉽게 갈 수 있는 곳은 어느 칸에도 넣지 않는다.',
            task: '카드를 읽고 바닷속, 우주, 얼음으로 덮인 곳으로 나누어 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '네 곳을 알맞은 가지에 나누어 보세요.', toolOptions: { topic: '가 보기 어려운 곳', slots: ['바닷속', '우주', '얼음으로 덮인 곳'], cards: ['달', '산호초 숲', '남극', '화성'] },
                target: { sort: { '바닷속': ['산호초 숲'], '우주': ['달', '화성'], '얼음으로 덮인 곳': ['남극'] } }, difficulty: 0.1 },
              { prompt: '다섯 곳을 알맞은 가지에 나누어 보세요.', toolOptions: { topic: '가 보기 어려운 곳', slots: ['바닷속', '우주', '얼음으로 덮인 곳'], cards: ['아주 깊은 바다 밑바닥', '북극', '우주 정거장', '해초 숲', '빙하'] },
                target: { sort: { '바닷속': ['아주 깊은 바다 밑바닥', '해초 숲'], '우주': ['우주 정거장'], '얼음으로 덮인 곳': ['북극', '빙하'] } }, difficulty: 0.2 },
              { prompt: '가 보기 어려운 곳만 나누어 보세요. 쉽게 갈 수 있는 곳은 카드 칸에 남겨요.', toolOptions: { topic: '가 보기 어려운 곳', slots: ['바닷속', '우주', '얼음으로 덮인 곳'], cards: ['토성', '바닷속 동굴', '하얀 얼음 벌판', '우리 동네 놀이터'] },
                target: { sort: { '바닷속': ['바닷속 동굴'], '우주': ['토성'], '얼음으로 덮인 곳': ['하얀 얼음 벌판'] } }, difficulty: 0.25,
                predict: { q: '"우리 동네 놀이터"는 어디에 놓을까요?', options: ['바닷속', '우주', '아무 데도 안 놓아요'], answer: 2 },
                conclude: '놀이터는 언제든 갈 수 있어서 가 보기 어려운 곳이 아니에요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 가 보지 않고 알아보는 방법 찾기', minutes: 13, tool: 'mindmap',
            teacher: '"우주에 갈 수 없으면 우주에 대해 알 수 없을까요?" 손을 들게 한 뒤 생각을 듣는다. "가 볼 수 없어도 책, 영상, 사진, 박물관과 과학관, 그곳을 다녀온 사람의 이야기로 알 수 있어요." 잠을 자거나 그냥 기다리는 것은 알아보는 방법이 아니라는 것을 함께 말한다.',
            task: '가 보기 어려운 곳을 알아보는 방법을 고르고, 곳에 맞는 알아볼 장소를 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '가 보지 않고도 그곳을 알아보는 방법만 골라 보세요.', toolOptions: { mode: 'pick', basket: '알아보는 방법', cards: ['책을 찾아 읽어요', '영상을 봐요', '그냥 잊어버려요', '과학관에 가요'] },
                target: { pick: ['책을 찾아 읽어요', '영상을 봐요', '과학관에 가요'] }, difficulty: 0.1 },
              { prompt: '궁금한 곳과 가서 볼 수 있는 곳을 이어 보세요.', toolOptions: { mode: 'match', topic: '어디에서 볼까?', slots: [{ id: 's1', label: '바닷속 물고기가 궁금해요' }, { id: 's2', label: '밤하늘 별이 궁금해요' }], cards: ['수족관', '천문대'] },
                target: { match: { s1: '수족관', s2: '천문대' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['수족관', '천문대', '놀이공원'] } } } },
              { prompt: '준호가 "우주는 못 가니까 알 수 없어" 하고 말해요. 뭐라고 말해 줄까요? 알맞은 말을 골라요.', toolOptions: { mode: 'pick', basket: '준호에게 할 말', cards: ['우주 책을 같이 찾아보자', '우주 영상을 같이 보자', '맞아, 알 수 없어'] },
                target: { pick: ['우주 책을 같이 찾아보자', '우주 영상을 같이 보자'] }, difficulty: 0.15,
                predict: { q: '가 볼 수 없는 곳도 알아볼 수 있을까요?', options: ['있어요', '없어요'], answer: 0 },
                conclude: '가 볼 수 없는 곳도 책, 영상, 과학관으로 알아볼 수 있어요.' },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"오늘 나눈 곳 가운데 내가 가장 궁금한 곳은 어디예요? 왜 궁금해요?" 서너 명이 한 문장으로 말한다. 고른 곳을 활동지에 그려 두게 하고, 다음 시간에는 그곳에 대해 묻고 싶은 말을 만든다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '가 보기 어려운 곳', slots: ['바닷속', '우주', '얼음으로 덮인 곳'], cards: ['목성', '바닷속 화산', '얼음 동굴'] }, prompt: '세 곳을 알맞은 가지에 나누어 보세요.', target: { sort: { '바닷속': ['바닷속 화산'], '우주': ['목성'], '얼음으로 덮인 곳': ['얼음 동굴'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '깊은 바닷속에 가 볼 수 없다면 어떻게 알아볼까요?', options: ['알아볼 수 없어요', '바닷속 책과 영상을 찾아봐요', '잠을 자며 기다려요'], answer: 1, difficulty: 0.1, explain: '가 볼 수 없는 곳도 책과 영상으로 알아볼 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '가 보기 어려운 곳',
      items: [
        { type: 'figure', wide: true, prompt: '카드에 쓰인 곳을 알맞은 가지 옆에 쓰세요.', tool: 'mindmap', figures: [{ options: { topic: '가 보기 어려운 곳', slots: ['바닷속', '우주', '얼음으로 덮인 곳'], cards: ['달', '남극', '해초 숲'], printCards: true }, caption: '' }], answer: '바닷속: 해초 숲 / 우주: 달 / 얼음으로 덮인 곳: 남극' },
        { type: 'check', prompt: '가 보지 않고 알아보는 방법에 모두 ✓ 하세요.', options: ['책 읽기', '영상 보기', '과학관 가기', '그냥 잊어버리기'] },
        { type: 'short', prompt: '내가 가장 궁금한 곳과 그 까닭을 쓰세요.' },
        { type: 'draw', prompt: '내가 가장 궁금한 곳을 그려 보세요.' },
      ],
      easy: {
        note: '물속인지, 하늘 너머인지, 얼음 위인지 떠올려요.',
        items: [
          { type: 'choice', prompt: '우주에 있는 것에 ○ 하세요.', options: ['달', '산호초'], answer: '달' },
          { type: 'choice', prompt: '바닷속을 알아보는 방법에 ○ 하세요.', options: ['바닷속 책 읽기', '잠자기'], answer: '바닷속 책 읽기' },
          { type: 'draw', prompt: '가 보고 싶은 곳을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 가지에 놓으면 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '모두 놓은 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '이어 보기에 관계없는 장소 카드가 하나 더 섞여 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 가 볼 수 없는 곳은 알아볼 방법이 없다고 여긴다 → 공룡도 본 사람이 없지만 박물관에서 알아본다는 예를 든다. ② 북극을 땅으로 여긴다 → 북극은 얼어붙은 바다, 남극은 얼음에 덮인 땅이라고 짧게 알려 준다. ③ 궁금한 곳을 고르지 못한다 → 좋아하는 동물이 사는 곳에서 출발하게 한다.',
  }));

  lessons.push(L(2, {
    title: '궁금한 것을 묻는 말로 바꾸어 보기',
    objective: '궁금한 곳에 대해 알고 싶은 것을 \'어디·무엇·왜·어떻게·언제\'가 들어간 묻는 말로 바꾸어 말할 수 있다.',
    illustration: ART('a curious penguin and a child surrounded by floating paper question marks of different colors on a snowy field', '무엇이 궁금할까요?', [
      { motif: 'snow', x: 120, y: 214 }, { motif: 'snow', x: 380, y: 216, s: 0.8 }, { motif: 'star', x: 300, y: 80, s: 0.5 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"펭귄 사진을 보니 무엇이 궁금해요?" 대답을 듣고 "펭귄은 귀여워요"처럼 말하는 학생이 있으면 "그건 펭귄을 보고 든 생각이에요. 궁금한 것은 끝이 \'~까요?\'로 끝나요"라고 말해 준다. 시연 단추로 \'먹이가 궁금해요\' 옆에 \'무엇을 먹을까요?\'가 놓이는 모습을 보여 준다.',
        student: '펭귄에 대해 궁금한 것을 \'~까요?\'로 끝나게 하나 말해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '펭귄이 궁금해요', slots: [{ id: 's1', label: '먹이가 궁금해요' }], cards: ['무엇을 먹을까요?', '어디에 살까요?'], shuffle: false }, sequence: [{ match: { s1: '무엇을 먹을까요?' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 알고 싶은 것에 맞는 묻는 말 잇기', minutes: 13, tool: 'mindmap',
            teacher: '"사는 곳이 궁금할 때는 어떤 말로 물을까요? \'어디\'예요. 까닭이 궁금할 때는요? \'왜\'예요." 칠판에 어디·무엇·왜·어떻게·언제를 붙여 둔다. 묻는 말 대신 알려 주는 말을 고르는 학생에게 카드 끝이 물음표인지 손가락으로 짚게 한다.',
            task: '알고 싶은 것을 읽고, 그것을 물어보는 말 카드를 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '펭귄이 궁금해요. 알고 싶은 것과 묻는 말을 이어 보세요.', toolOptions: { mode: 'match', topic: '펭귄이 궁금해요', slots: [{ id: 's1', label: '사는 곳이 궁금해요' }, { id: 's2', label: '먹이가 궁금해요' }], cards: ['어디에 살까요?', '무엇을 먹을까요?'] },
                target: { match: { s1: '어디에 살까요?', s2: '무엇을 먹을까요?' } }, difficulty: 0.05 },
              { prompt: '펭귄에 대해 더 알고 싶어요. 세 가지를 묻는 말과 이어 보세요.', toolOptions: { mode: 'match', topic: '펭귄이 궁금해요', slots: [{ id: 's1', label: '까닭이 궁금해요' }, { id: 's2', label: '방법이 궁금해요' }, { id: 's3', label: '때가 궁금해요' }], cards: ['왜 날지 못할까요?', '어떻게 헤엄칠까요?', '언제 알을 낳을까요?'] },
                target: { match: { s1: '왜 날지 못할까요?', s2: '어떻게 헤엄칠까요?', s3: '언제 알을 낳을까요?' } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['왜 날지 못할까요?', '어떻게 헤엄칠까요?', '언제 알을 낳을까요?', '펭귄은 귀여워요.'] } } } },
              { prompt: '고래가 궁금해요. 알고 싶은 것과 묻는 말을 이어 보세요.', toolOptions: { mode: 'match', topic: '고래가 궁금해요', slots: [{ id: 's1', label: '크기가 궁금해요' }, { id: 's2', label: '까닭이 궁금해요' }, { id: 's3', label: '사는 곳이 궁금해요' }], cards: ['얼마나 클까요?', '왜 물을 뿜을까요?', '어느 바다에 살까요?'] },
                target: { match: { s1: '얼마나 클까요?', s2: '왜 물을 뿜을까요?', s3: '어느 바다에 살까요?' } }, difficulty: 0.2 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 묻는 말과 알려 주는 말 가려내기', minutes: 13, tool: 'mindmap',
            teacher: '"\'달에는 공기가 없어요\'는 묻는 말일까요, 알려 주는 말일까요?" 문장 끝을 올려 읽으면 묻는 말, 내려 읽으면 알려 주는 말이라는 것을 목소리로 들려준다. 두 가지 곳의 질문을 나눌 때는 질문 속 낱말(문어, 별)이 어디에 사는지·있는지 떠올리게 한다.',
            task: '문장을 읽고 묻는 말과 알려 주는 말로 나누거나, 어느 곳에 대한 질문인지 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '우주에 대한 문장을 묻는 말과 알려 주는 말로 나누어 보세요.', toolOptions: { topic: '우주 문장', slots: ['묻는 말', '알려 주는 말'], cards: ['달에도 바람이 불까요?', '달에는 공기가 없어요.', '별은 왜 반짝일까요?', '해는 아주 뜨거워요.'] },
                target: { sort: { '묻는 말': ['달에도 바람이 불까요?', '별은 왜 반짝일까요?'], '알려 주는 말': ['달에는 공기가 없어요.', '해는 아주 뜨거워요.'] } }, difficulty: 0.1 },
              { prompt: '질문을 바닷속에 대한 것과 우주에 대한 것으로 나누어 보세요.', toolOptions: { topic: '어디에 대한 질문?', slots: ['바닷속', '우주'], cards: ['문어는 어떻게 숨을까요?', '화성은 왜 빨갈까요?', '상어는 잠을 잘까요?', '별은 몇 개일까요?'] },
                target: { sort: { '바닷속': ['문어는 어떻게 숨을까요?', '상어는 잠을 잘까요?'], '우주': ['화성은 왜 빨갈까요?', '별은 몇 개일까요?'] } }, difficulty: 0.15 },
              { prompt: '사막에 대해 묻는 말만 골라 보세요.', toolOptions: { mode: 'pick', basket: '사막에 대한 질문', cards: ['사막에는 비가 얼마나 올까요?', '낙타는 물을 얼마나 마실까요?', '바닷물은 왜 짤까요?', '사막은 정말 넓어요.'] },
                target: { pick: ['사막에는 비가 얼마나 올까요?', '낙타는 물을 얼마나 마실까요?'] }, difficulty: 0.25,
                predict: { q: '"사막은 정말 넓어요."는 묻는 말일까요?', options: ['묻는 말', '알려 주는 말'], answer: 1 },
                conclude: '묻는 말은 끝이 \'~까요?\'로 끝나고, 궁금한 곳에 대한 것이어야 해요.' },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"지난 시간에 고른 내 궁금한 곳에 대해 묻는 말을 하나 만들어 볼까요?" 짝끼리 한 문장씩 주고받게 한다. 끝이 \'~까요?\'로 끝나지 않으면 짝이 "물음표가 있니?" 하고 물어 주게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '북극곰이 궁금해요', slots: [{ id: 'e1', label: '먹이가 궁금해요' }, { id: 'e2', label: '까닭이 궁금해요' }], cards: ['무엇을 잡아먹을까요?', '왜 털이 하얄까요?'] }, prompt: '북극곰에 대해 알고 싶은 것과 묻는 말을 이어 보세요.', target: { match: { e1: '무엇을 잡아먹을까요?', e2: '왜 털이 하얄까요?' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '묻는 말은 어느 것인가요?', options: ['상어는 이빨이 많아요.', '상어는 어디에서 잘까요?', '상어는 무서워요.'], answer: 1, difficulty: 0.1, explain: '묻는 말은 \'~까요?\'처럼 끝이 물음으로 끝나요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '묻는 말 만들기',
      items: [
        { type: 'figure', wide: true, prompt: '알고 싶은 것과 묻는 말을 선으로 이으세요.', tool: 'mindmap', figures: [{ options: { mode: 'match', topic: '펭귄이 궁금해요', slots: [{ id: 's1', label: '사는 곳' }, { id: 's2', label: '까닭' }], cards: ['왜 날지 못할까요?', '어디에 살까요?'] }, caption: '' }], answer: '사는 곳-어디에 살까요?, 까닭-왜 날지 못할까요?' },
        { type: 'choice', prompt: '묻는 말에 ○ 하세요.', options: ['달은 둥글어요.', '달은 왜 모양이 바뀔까요?', '달이 예뻐요.'], answer: '달은 왜 모양이 바뀔까요?' },
        { type: 'blank', prompt: '빈칸에 묻는 낱말을 쓰세요.', text: '고래는 ___에 살까요?', answer: '어디' },
        { type: 'short', prompt: '내가 궁금한 곳에 대해 묻는 말을 하나 쓰세요.' },
      ],
      easy: {
        note: '끝이 \'~까요?\'로 끝나면 묻는 말이에요.',
        items: [
          { type: 'choice', prompt: '묻는 말에 ○ 하세요.', options: ['펭귄은 무엇을 먹을까요?', '펭귄은 귀여워요.'], answer: '펭귄은 무엇을 먹을까요?' },
          { type: 'choice', prompt: '사는 곳을 묻는 낱말에 ○ 하세요.', options: ['어디', '언제'], answer: '어디' },
          { type: 'short', prompt: '궁금한 것을 \'~까요?\'로 하나 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 틀린 카드는 돌아와요. 칠판의 묻는 낱말 카드를 보며 해요.',
      base: '모두 이은 뒤 확인을 눌러요.',
      challenge: '묻는 말이 아닌 카드가 섞여 있어 골라내야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 느낌(귀여워요)을 질문으로 여긴다 → 끝이 물음인지 목소리를 올려 읽어 보게 한다. ② 질문이 너무 넓다(우주는 어때요?) → 어디·무엇·왜 가운데 하나를 넣게 한다. ③ 궁금한 곳과 상관없는 질문을 섞는다 → 질문 속 낱말이 그곳과 이어지는지 묻는다.',
  }));

  lessons.push(L(3, {
    title: '세계 지도에서 궁금한 곳 찾아 질문 붙이기',
    objective: '세계 칸 지도에서 대륙과 궁금한 곳을 찾아 핀을 꽂고, 그곳에 대한 질문을 대륙별로 나눌 수 있다.',
    illustration: ART('a paper world map on a table with small flags pinned on continents, a child holding a question card next to a pyramid and a kangaroo cut-out', '지도에서 찾아봐요', [
      { motif: 'mountain', x: 110, y: 210 }, { motif: 'tree', x: 380, y: 214 }, { motif: 'wave', x: 250, y: 226 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 7,
        teacher: '지구본과 세계 지도를 나란히 보여 주며 "공처럼 둥근 지구를 종이에 펼친 것이 세계 지도예요." 하고 말한다. "우리나라는 어디 있을까요?" 한 학생이 지구본에서 짚게 한다. 칸 지도를 띄우고 시연 단추로 핀이 \'우리나라\'에 꽂히는 모습을 보여 준다. "칸 지도는 대륙의 자리만 나타낸 지도예요. 진짜 모양은 지구본에서 봐요."',
        student: '지구본에서 우리나라를 찾아 손가락으로 짚어 봐요.',
        demo: { tool: 'map', options: WORLD(), sequence: [{ place: '우리나라' }] },
      },
      {
        id: 'main', title: '전개', minutes: 25,
        activities: [
          {
            id: 'a1', title: '활동 1. 궁금한 곳이 있는 대륙에 핀 꽂기', minutes: 13, tool: 'map',
            teacher: '"아주 큰 땅덩어리를 대륙이라고 해요. 굵은 선 안이 한 대륙이에요." 지도의 대륙 이름을 함께 읽는다. 장소 그림을 찾은 뒤 그 그림이 놓인 대륙에 꽂게 한다. 바다 칸에 꽂는 학생에게 "파란 칸은 바다예요. 땅 칸을 찾아요"라고 말한다.',
            task: '문제에 나온 곳이 있는 대륙을 지도에서 찾아 핀을 꽂아요.',
            levels: MAP_LV,
            items: [
              { prompt: '피라미드가 있는 대륙에 핀을 꽂아 보세요. 지도에서 피라미드 그림을 먼저 찾아요.', toolOptions: WORLD({ places: [KOREA, { name: '피라미드', icon: 'heritage', at: [1, 1] }] }), target: { region: '아프리카' }, difficulty: 0.1,
                hints: ['지도에서 피라미드 그림을 먼저 찾고, 그 그림을 둘러싼 굵은 선 안쪽에 꽂아요.', '핀이 꽂힌 칸의 대륙 이름을 읽어 보세요. 피라미드 그림과 같은 선 안에 있나요?', '피라미드 그림은 아프리카 대륙 안에 있어요. 핀을 그 대륙 칸으로 옮겨요.'] },
              { prompt: '캥거루가 사는 대륙에 핀을 꽂아 보세요. 지도에서 캥거루 자리를 먼저 찾아요.', toolOptions: WORLD({ places: [KOREA, { name: '캥거루', icon: 'dot', at: [4, 2] }] }), target: { region: '오세아니아' }, difficulty: 0.15,
                hints: ['캥거루라고 쓰인 점을 먼저 찾고, 그 점을 둘러싼 굵은 선 안쪽에 꽂아요.', '핀이 꽂힌 칸과 캥거루 점이 같은 선 안에 있는지 보세요.', '캥거루 점은 오세아니아 대륙 안에 있어요. 핀을 그 대륙 칸으로 옮겨요.'] },
              { prompt: '황제펭귄이 사는 얼음 대륙에 핀을 꽂아 보세요.', toolOptions: WORLD({ places: [KOREA, { name: '황제펭귄', icon: 'dot', at: [2, 3] }] }), target: { region: '남극' }, difficulty: 0.15,
                hints: ['황제펭귄이라고 쓰인 점을 찾아, 그 점이 있는 대륙의 굵은 선 안쪽에 꽂아요.', '지도 맨 아래 줄을 살펴보세요. 펭귄 점과 핀이 같은 대륙에 있나요?', '황제펭귄 점은 지도 아래쪽 남극 대륙에 있어요. 핀을 그 칸으로 옮겨요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 질문을 대륙별로 나누기', minutes: 12, tool: 'mindmap',
            teacher: '"이 질문은 어느 대륙에 대해 묻는 걸까요?" 질문 속 낱말을 동그라미 치게 한다. 사자는 아프리카에서 많이 볼 수 있다는 것, 펭귄은 남극에서 볼 수 있다는 것을 짧게 알려 준다.',
            task: '질문 속 낱말을 보고 어느 대륙에 대한 질문인지 나누어 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '질문을 아프리카와 남극으로 나누어 보세요.', toolOptions: { topic: '어느 대륙 질문?', slots: ['아프리카', '남극'], cards: ['피라미드는 누가 쌓았을까요?', '남극 얼음은 얼마나 두꺼울까요?', '사막의 모래는 왜 뜨거울까요?', '펭귄은 추운데 어떻게 지낼까요?'] },
                target: { sort: { '아프리카': ['피라미드는 누가 쌓았을까요?', '사막의 모래는 왜 뜨거울까요?'], '남극': ['남극 얼음은 얼마나 두꺼울까요?', '펭귄은 추운데 어떻게 지낼까요?'] } }, difficulty: 0.2,
                hints: ['질문 속에서 동물이나 곳 이름을 찾고, 그것이 어느 대륙에 있는지 떠올려요.', '추운 곳 이야기와 뜨거운 곳 이야기를 다시 나누어 보세요.', '피라미드와 뜨거운 사막 모래는 아프리카, 얼음과 펭귄은 남극 질문이에요.'] },
              { prompt: '질문을 오세아니아와 아시아로 나누어 보세요.', toolOptions: { topic: '어느 대륙 질문?', slots: ['오세아니아', '아시아'], cards: ['캥거루는 왜 주머니가 있을까요?', '만리장성은 얼마나 길까요?', '코알라는 무엇을 먹을까요?', '우리나라 한복은 언제부터 입었을까요?'] },
                target: { sort: { '오세아니아': ['캥거루는 왜 주머니가 있을까요?', '코알라는 무엇을 먹을까요?'], '아시아': ['만리장성은 얼마나 길까요?', '우리나라 한복은 언제부터 입었을까요?'] } }, difficulty: 0.25,
                hints: ['질문 속 동물·건물·옷이 어느 대륙에 있는지 떠올려요. 우리나라는 어느 대륙에 있었나요?', '우리나라와 이웃 나라 이야기는 같은 대륙이에요. 다시 나누어 보세요.', '캥거루와 코알라는 오세아니아, 만리장성과 우리나라 한복은 아시아 질문이에요.'] },
              { prompt: '세계 지도에서 찾아볼 수 있는 질문만 골라 보세요.', toolOptions: { mode: 'pick', basket: '지도로 알 수 있어요', cards: ['남극은 우리나라에서 어느 쪽일까요?', '아프리카와 유럽은 붙어 있을까요?', '펭귄은 어떤 소리를 낼까요?'] },
                target: { pick: ['남극은 우리나라에서 어느 쪽일까요?', '아프리카와 유럽은 붙어 있을까요?'] }, difficulty: 0.3,
                conclude: '지도는 곳의 자리를 알려 주고, 소리는 영상으로 알아봐야 해요.' },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"내가 궁금한 곳은 어느 대륙에 있나요?" 지구본에서 찾아 짚게 하고 활동지 지도에 별을 그리게 한다. 칸 지도에서 바다는 파란 칸, 대륙은 굵은 선으로 나뉜 색 칸이라는 것을 다시 짚는다.',
        exitTicket: [
          { type: 'tool', tool: 'map', options: WORLD({ places: [KOREA, { name: '에펠탑', icon: 'dot', at: [1, 0] }] }), prompt: '에펠탑이 있는 대륙에 핀을 꽂아 보세요.', target: { region: '유럽' }, difficulty: 0.15,
            hints: ['에펠탑이라고 쓰인 점을 먼저 찾고, 그 점이 있는 굵은 선 안쪽에 꽂아요.'] },
          { type: 'choice', prompt: '칸 지도에서 파란 칸은 무엇인가요?', options: ['대륙', '바다', '사막'], answer: 1, difficulty: 0.1, explain: '세계 지도에서 파란색은 바다를 나타내요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '세계 지도에서 찾기',
      items: [
        { type: 'figure', wide: true, prompt: '지도에서 우리나라에 ○, 남극에 △ 하세요.', tool: 'map', figures: [{ options: WORLD(), caption: '' }], answer: '우리나라: 아시아 오른쪽 끝 / 남극: 지도 아래쪽 가운데' },
        { type: 'choice', prompt: '우리나라가 있는 대륙에 ○ 하세요.', options: ['아시아', '아프리카', '남극'], answer: '아시아' },
        { type: 'table', prompt: '궁금한 곳과 그곳이 있는 대륙을 쓰세요.', columns: ['궁금한 곳', '대륙'], cells: [['피라미드', ''], ['캥거루가 사는 곳', ''], ['', '']] },
        { type: 'short', prompt: '내가 궁금한 곳에 대해 지도로 알아볼 질문을 하나 쓰세요.' },
      ],
      easy: {
        note: '굵은 선 안쪽이 한 대륙이에요.',
        items: [
          { type: 'choice', prompt: '바다를 나타내는 색에 ○ 하세요.', options: ['파란색', '노란색'], answer: '파란색' },
          { type: 'choice', prompt: '펭귄이 사는 얼음 대륙에 ○ 하세요.', options: ['남극', '유럽'], answer: '남극' },
          { type: 'draw', prompt: '지구본을 보고 우리나라를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '핀을 꽂으면 그 칸 이름이 바로 보여요. 장소 이름과 대륙 이름이 모두 보여요.',
      base: '핀을 꽂은 뒤 확인을 눌러요.',
      challenge: '대륙 이름이 지도에 쓰여 있지 않아요. 장소 그림이 놓인 굵은 선 안을 찾아 꽂아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 칸 지도를 실제 모양으로 여긴다 → 지구본과 나란히 놓고 자리만 같다는 것을 말해 준다. ② 장소 점에만 꽂으려 한다 → 같은 굵은 선 안이면 어느 칸이든 같은 대륙이라고 알려 준다. ③ 나라와 대륙을 헷갈린다 → 대륙은 여러 나라가 모인 큰 땅이라고 짚는다(우리나라·일본·중국은 모두 아시아).',
  }));

  lessons.push(L(4, {
    title: '궁금한 곳 하나 정해 탐구 계획 세우기',
    objective: '궁금한 곳을 하나 정해 묻고 싶은 질문 세 가지를 고르고, 알아볼 차례를 정할 수 있다.',
    illustration: ART('a child at a desk with a paper notebook showing three question cards about the deep sea, a jellyfish and an octopus cut-out peeking around', '탐구 계획을 세워요', [
      { motif: 'wave', x: 120, y: 222 }, { motif: 'wave', x: 360, y: 226, s: 0.8 }, { motif: 'star', x: 100, y: 86, s: 0.5 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"탐험가는 떠나기 전에 무엇을 할까요?" 짐 싸기, 지도 보기 같은 대답을 듣는다. "우리도 알아보기 전에 계획을 세워요. 어디가 궁금한지, 무엇을 물을지, 어떻게 알아볼지요." 시연 단추로 탐구 차례 카드가 놓이는 모습을 보여 준다.',
        student: '1~3차시에 고른 내 궁금한 곳을 다시 떠올려 봐요.',
        demo: { tool: 'story', options: { cards: [{ id: 'where', text: '궁금한 곳 정하기', motif: 'star' }, { id: 'ask', text: '질문 만들기', motif: 'cloud' }, { id: 'how', text: '알아볼 방법 정하기', motif: 'house' }], slots: ['1', '2', '3'], shuffle: false }, sequence: [{ order: ['where', 'ask', 'how'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 탐구하는 차례 정하기', minutes: 10, tool: 'story',
            teacher: '"알아보기도 전에 친구들에게 알려 줄 수 있을까요?" 차례가 바뀌면 무엇이 안 되는지 묻는다. 질문 만들기를 맨 뒤에 두는 학생에게 "무엇을 알아볼지 모르면 책에서 무엇을 찾을까요?"라고 되묻는다.',
            task: '탐구하는 일을 먼저 하는 것부터 차례대로 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '탐구하는 차례대로 카드를 놓아 보세요.', toolOptions: { cards: [{ id: 'where', text: '궁금한 곳 정하기', motif: 'star' }, { id: 'ask', text: '질문 만들기', motif: 'cloud' }, { id: 'find', text: '자료로 알아보기', motif: 'house' }, { id: 'tell', text: '친구에게 알려 주기', motif: 'flower' }], slots: ['1', '2', '3', '4'] },
                target: { order: ['where', 'ask', 'find', 'tell'] }, difficulty: 0.15 },
              { prompt: '민지의 바닷속 탐구 이야기를 차례대로 놓아 보세요.', toolOptions: { cards: [{ id: 'm1', text: '바닷속이 궁금했어요', motif: 'wave' }, { id: 'm2', text: '"문어는 어떻게 숨을까?"를 적었어요', motif: 'cloud' }, { id: 'm3', text: '도서관에서 문어 책을 읽었어요', motif: 'house' }, { id: 'm4', text: '알아낸 것을 그림으로 그렸어요', motif: 'flower' }], slots: ['처음', '그다음', '그다음', '끝'] },
                target: { order: ['m1', 'm2', 'm3', 'm4'] }, difficulty: 0.2 },
              { prompt: '탐구 계획표의 빈칸에 알맞은 말을 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['바닷속', '해파리', '책'], slots: [{ id: 'f1', label: '궁금한 곳: ___' }, { id: 'f2', label: '질문: ___는 어떻게 움직일까요?' }, { id: 'f3', label: '알아볼 방법: 도서관에서 ___ 찾기' }] },
                target: { fill: { f1: '바닷속', f2: '해파리', f3: '책' } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['바닷속', '해파리', '책', '잠자기'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 내 궁금한 곳 질문 세 개 고르기', minutes: 16, tool: 'mindmap',
            teacher: '"질문이 많으면 다 알아보기 어려워요. 가장 알고 싶은 세 개만 골라요." 먼저 바닷속 예시로 연습한 뒤 활동지 계획표에 내 질문 세 개를 쓰게 한다. 짝과 계획표를 바꾸어 읽고 "이 질문은 책에서 찾을 수 있을까?" 하고 서로 물어보게 한다.',
            task: '궁금한 곳에 맞는 질문만 고르고, 내 계획표를 짝과 바꾸어 읽어요.',
            levels: CARD_LV,
            items: [
              { prompt: '바닷속 탐구에 쓸 질문 세 개만 골라 보세요.', toolOptions: { mode: 'pick', basket: '바닷속 질문', cards: ['해파리는 어떻게 움직일까요?', '깊은 바다는 왜 깜깜할까요?', '문어는 다리가 몇 개일까요?', '달에는 왜 토끼가 없을까요?'] },
                target: { pick: ['해파리는 어떻게 움직일까요?', '깊은 바다는 왜 깜깜할까요?', '문어는 다리가 몇 개일까요?'] }, difficulty: 0.1 },
              { prompt: '우주 탐구에 쓸 질문만 골라 보세요. 질문이 아닌 카드는 남겨요.', toolOptions: { mode: 'pick', basket: '우주 질문', cards: ['우주인은 어떻게 잠을 잘까요?', '토성의 고리는 무엇일까요?', '우주는 정말 멋져요.', '고래는 어디에 살까요?', '화성에는 물이 있을까요?'] },
                target: { pick: ['우주인은 어떻게 잠을 잘까요?', '토성의 고리는 무엇일까요?', '화성에는 물이 있을까요?'] }, difficulty: 0.25,
                levels: { easy: { prompt: '우주 탐구에 쓸 질문 두 개를 골라 보세요.', toolOptions: { cards: ['우주인은 어떻게 잠을 잘까요?', '토성의 고리는 무엇일까요?', '고래는 어디에 살까요?'] }, target: { pick: ['우주인은 어떻게 잠을 잘까요?', '토성의 고리는 무엇일까요?'] } } } },
              { prompt: '내 궁금한 곳의 질문 세 개를 활동지 계획표에 쓰고, 짝과 바꾸어 읽었으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"내 계획표에서 가장 먼저 알아보고 싶은 질문은 무엇인가요?" 두세 명이 읽어 준다. 계획표는 모아 두었다가 다음 시간 자료 읽기에 다시 쓴다고 알린다. 질문이 세 개가 안 된 학생은 짝이 하나를 같이 만들어 주게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', basket: '사막 질문', cards: ['사막여우는 귀가 왜 클까요?', '선인장은 물이 없어도 살까요?', '북극곰은 얼음 위에서 잘까요?'] }, prompt: '사막 탐구에 쓸 질문만 골라 보세요.', target: { pick: ['사막여우는 귀가 왜 클까요?', '선인장은 물이 없어도 살까요?'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '탐구할 때 가장 먼저 할 일은 무엇인가요?', options: ['친구에게 알려 주기', '궁금한 곳 정하기', '자료로 알아보기'], answer: 1, difficulty: 0.1, explain: '어디가 궁금한지 정해야 질문도 만들고 자료도 찾을 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '나의 탐구 계획표',
      items: [
        { type: 'table', prompt: '나의 탐구 계획표를 채우세요.', columns: ['계획', '내가 쓸 것'], cells: [['궁금한 곳', ''], ['질문 1', ''], ['질문 2', ''], ['질문 3', ''], ['알아볼 방법', '']] },
        { type: 'figure', wide: true, prompt: '탐구하는 차례대로 1~4 번호를 쓰세요.', tool: 'story', figures: [{ options: { cards: [{ id: 'tell', text: '친구에게 알려 주기' }, { id: 'where', text: '궁금한 곳 정하기' }, { id: 'find', text: '자료로 알아보기' }, { id: 'ask', text: '질문 만들기' }], slots: ['1', '2', '3', '4'], shuffle: false }, caption: '' }], answer: '궁금한 곳 정하기 → 질문 만들기 → 자료로 알아보기 → 친구에게 알려 주기' },
        { type: 'check', prompt: '내가 쓸 알아볼 방법에 ✓ 하세요.', options: ['책', '영상', '사진', '어른께 여쭈어보기'] },
        { type: 'short', prompt: '짝의 질문 가운데 나도 궁금한 것을 하나 쓰세요.' },
      ],
      easy: {
        note: '질문은 \'~까요?\'로 끝나게 써요.',
        items: [
          { type: 'table', prompt: '궁금한 곳과 질문 하나를 쓰세요.', columns: ['궁금한 곳', '질문'], rows: 1 },
          { type: 'choice', prompt: '먼저 할 일에 ○ 하세요.', options: ['질문 만들기', '친구에게 알려 주기'], answer: '질문 만들기' },
          { type: 'draw', prompt: '내가 알아볼 곳을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 초록 테두리가 생기고, 우주 질문은 두 개만 골라요. 계획표는 질문 하나만 써요.',
      base: '차례를 모두 놓은 뒤 확인을 눌러요. 계획표에 질문 세 개를 써요.',
      challenge: '빈칸 채우기에 관계없는 카드가 섞여 있고, 우주 질문 고르기에 다른 곳 질문과 느낌 카드가 함께 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 질문을 너무 많이 써서 고르지 못한다 → "가장 알고 싶은 것부터 별을 그려요." ② 알아볼 방법을 \'인터넷\' 하나로만 쓴다 → 책·사진·어른께 묻기도 함께 떠올리게 한다. ③ 다른 곳 질문이 섞인다 → 질문 속 낱말이 내 궁금한 곳과 이어지는지 짝이 확인해 준다. 계획표는 5·9차시에 다시 꺼낸다.',
  }));

  // ───────────────────────── 5~8차시: 책·영상·사진·지도 자료 읽기 ─────────────────────────

  lessons.push(L(5, {
    title: '짧은 책 자료를 읽고 알게 된 것만 고르기',
    objective: '짧은 자료 글을 읽고 자료에 나온 사실과 나오지 않은 말을 가려, 알게 된 것을 고를 수 있다.',
    illustration: ART('an open paper picture book with an emperor penguin father holding an egg on its feet, a child pointing at the page with a magnifying glass', '자료에서 찾아요', [
      { motif: 'snow', x: 110, y: 214 }, { motif: 'snow', x: 390, y: 218, s: 0.8 }, { motif: 'cloud', x: 300, y: 84, s: 0.6 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '펭귄 그림책을 한 쪽 펼쳐 읽어 준 뒤 "이 쪽에서 새로 알게 된 것이 무엇인가요?" 하고 묻는다. "펭귄은 날 수 있어요"처럼 책에 없는 말을 하면 "책의 어느 줄에 그렇게 쓰여 있나요?" 하고 손가락으로 찾게 한다. 시연 단추로 자료에 나온 카드만 바구니에 들어가는 모습을 보여 준다.',
        student: '선생님이 읽어 준 쪽에서 새로 알게 된 것을 하나 말해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'pick', basket: '자료에서 알게 된 것', cards: ['펭귄은 헤엄을 잘 쳐요', '펭귄은 하늘을 날아요'], shuffle: false }, sequence: [{ pick: ['펭귄은 헤엄을 잘 쳐요'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 자료 글에서 알게 된 것 고르기', minutes: 15, tool: 'mindmap',
            teacher: '"자료를 먼저 소리 내어 읽고, 카드 글이 자료 어디에 있는지 손가락으로 짚어 봐요." 그럴듯하지만 자료에 없는 카드(문어 다리가 열 개, 달에 비가 와요)를 고른 학생에게 "그 말은 자료의 몇째 줄에 있나요?" 하고 묻는다. 오징어는 다리가 열 개라는 것을 덧붙여 헷갈림을 풀어 준다.',
            task: '문제의 자료 글을 읽고, 자료에서 알게 된 것만 바구니에 넣어요.',
            levels: CARD_LV,
            items: [
              { prompt: '자료: 황제펭귄은 남극에 살아요. 아빠 펭귄이 알을 발 위에 올려 품어요. 자료에서 알게 된 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '알게 된 것', cards: ['황제펭귄은 남극에 살아요', '아빠 펭귄이 알을 품어요', '펭귄은 하늘을 날아요', '펭귄은 사과를 좋아해요'] },
                target: { pick: ['황제펭귄은 남극에 살아요', '아빠 펭귄이 알을 품어요'] }, difficulty: 0.1 },
              { prompt: '자료: 문어는 다리가 여덟 개예요. 위험하면 먹물을 뿜고, 몸 색을 바꾸어 숨어요. 자료에서 알게 된 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '알게 된 것', cards: ['다리가 여덟 개예요', '먹물을 뿜어요', '몸 색을 바꾸어요', '다리가 열 개예요'] },
                target: { pick: ['다리가 여덟 개예요', '먹물을 뿜어요', '몸 색을 바꾸어요'] }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['다리가 여덟 개예요', '먹물을 뿜어요', '몸 색을 바꾸어요', '다리가 열 개예요', '바닷가 모래 위에서 잠을 자요'] } } } },
              { prompt: '자료: 달에는 공기가 없어요. 달의 낮은 아주 뜨겁고, 밤은 아주 차가워요. 자료에서 알게 된 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '알게 된 것', cards: ['달에는 공기가 없어요', '달의 낮은 아주 뜨거워요', '달에는 토끼가 살아요', '달에는 비가 자주 와요'] },
                target: { pick: ['달에는 공기가 없어요', '달의 낮은 아주 뜨거워요'] }, difficulty: 0.2,
                predict: { q: '"달에는 토끼가 살아요"는 자료에 나왔나요?', options: ['나왔어요', '안 나왔어요'], answer: 1 },
                conclude: '알게 된 것은 자료에 쓰여 있는 것이에요. 옛이야기와 사실을 나누어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 자료마다 알 수 있는 것 견주기', minutes: 11, tool: 'mindmap',
            teacher: '"고래 우는 소리가 궁금하면 사진을 볼까요, 영상을 볼까요?" 사진·책·영상·지도·녹음을 하나씩 들어 보이며 무엇을 알려 주는지 말하게 한다. 그림책에도 그림이 있어 생김새를 알 수 있지만, 소리는 들을 수 없다는 것을 짚는다.',
            task: '자료의 종류를 읽고, 그 자료로 알 수 있는 것을 잇거나 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '자료와 그 자료로 잘 알 수 있는 것을 이어 보세요.', toolOptions: { mode: 'match', topic: '무엇을 알 수 있을까?', slots: [{ id: 's1', label: '바다거북 사진' }, { id: 's2', label: '바다거북 영상' }], cards: ['헤엄치는 모습', '등딱지 무늬'] },
                target: { match: { s1: '등딱지 무늬', s2: '헤엄치는 모습' } }, difficulty: 0.15,
                hints: ['사진은 멈춘 모습, 영상은 움직이는 모습을 보여 줘요.', '사진으로 움직임을 볼 수 있을지 다시 생각해 보세요.', '사진에서는 등딱지 무늬를, 영상에서는 헤엄치는 모습을 잘 볼 수 있어요.'] },
              { prompt: '소리를 들을 수 있는 자료와 들을 수 없는 자료로 나누어 보세요.', toolOptions: { topic: '자료의 종류', slots: ['소리를 들을 수 있어요', '소리를 들을 수 없어요'], cards: ['영상', '그림책', '녹음한 소리', '세계 지도'] },
                target: { sort: { '소리를 들을 수 있어요': ['영상', '녹음한 소리'], '소리를 들을 수 없어요': ['그림책', '세계 지도'] } }, difficulty: 0.1 },
              { prompt: '고래가 내는 소리를 알아보려면 어떤 자료를 쓸까요? 알맞은 자료만 골라 보세요.', toolOptions: { mode: 'pick', basket: '고래 소리 자료', cards: ['고래 영상', '바닷속에서 녹음한 고래 소리', '고래 사진', '고래 그림책'] },
                target: { pick: ['고래 영상', '바닷속에서 녹음한 고래 소리'] }, difficulty: 0.2 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"내 탐구 계획표의 질문에는 어떤 자료가 어울릴까요?" 4차시 계획표를 꺼내 질문 옆에 자료 이름을 적게 한다. 자료를 고를 때 무엇이 궁금한지(생김새, 움직임, 소리, 있는 곳)를 먼저 생각하라고 말한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', basket: '알게 된 것', cards: ['북극곰은 헤엄을 잘 쳐요', '북극곰 털 밑 살갗은 까매요', '북극곰은 남극에 살아요', '북극곰은 풀만 먹어요'] }, prompt: '자료: 북극곰은 털 밑의 살갗이 까매요. 헤엄도 아주 잘 쳐요. 자료에서 알게 된 것만 골라 보세요.', target: { pick: ['북극곰은 헤엄을 잘 쳐요', '북극곰 털 밑 살갗은 까매요'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '원숭이가 나무를 타는 모습을 알아보려면 어떤 자료가 가장 좋을까요?', options: ['세계 지도', '원숭이 영상', '원숭이 이름표'], answer: 1, difficulty: 0.1, explain: '움직이는 모습은 영상으로 잘 볼 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '자료에서 알게 된 것',
      items: [
        { type: 'short', prompt: '자료를 읽고 알게 된 것을 쓰세요. 자료: 해파리는 몸의 대부분이 물이에요. 뇌가 없어요.' },
        { type: 'choice', prompt: '위 자료에 나온 말에 ○ 하세요.', options: ['해파리는 뇌가 없어요', '해파리는 다리가 여덟 개예요', '해파리는 땅에 살아요'], answer: '해파리는 뇌가 없어요' },
        { type: 'table', prompt: '자료로 알 수 있는 것을 쓰세요.', columns: ['자료', '알 수 있는 것'], cells: [['사진', ''], ['영상', ''], ['지도', '']] },
        { type: 'short', prompt: '내 탐구 질문에 어울리는 자료를 쓰세요.' },
      ],
      easy: {
        note: '자료에 쓰여 있는 말만 골라요.',
        items: [
          { type: 'choice', prompt: '자료: 문어는 다리가 여덟 개예요. 맞는 말에 ○ 하세요.', options: ['문어 다리는 여덟 개', '문어 다리는 열 개'], answer: '문어 다리는 여덟 개' },
          { type: 'choice', prompt: '소리를 들을 수 있는 자료에 ○ 하세요.', options: ['영상', '사진'], answer: '영상' },
          { type: 'draw', prompt: '자료에서 알게 된 동물을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 카드를 바구니에 넣으면 초록 테두리가 생기고, 자료에 없는 카드는 돌아와요.',
      base: '자료를 소리 내어 읽고 카드를 고른 뒤 확인을 눌러요.',
      challenge: '문어 자료에 그럴듯한 함정 카드가 하나 더 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 이미 알던 것과 자료에서 알게 된 것을 섞는다 → 자료 글에 밑줄을 긋고 그 줄에서만 찾게 한다. ② 오징어와 문어 다리 수를 헷갈린다 → 오징어 열 개, 문어 여덟 개를 짝지어 말한다. ③ 옛이야기(달 토끼)를 사실로 여긴다 → 옛이야기는 재미있는 상상이라고 알려 준다. 활동지 첫 문항 자료(해파리 몸의 대부분은 물, 뇌가 없음)는 사실이다.',
  }));

  lessons.push(L(6, {
    title: '책과 영상에서 다르게 나온 것 찾기',
    objective: '같은 동물에 대한 책 자료와 영상 자료를 견주어 같은 것과 다른 것을 나누고, 자료가 다를 때 확인하는 방법을 고를 수 있다.',
    illustration: ART('a camel in a paper desert between an open book and a small video screen, a child comparing the two with question marks above', '두 자료를 견주어요', [
      { motif: 'sun', x: 90, y: 80, s: 0.7 }, { motif: 'hills', y: 220, color: 'buttercup' }, { motif: 'cloud', x: 380, y: 70, s: 0.5 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"영상에서 본 것은 모두 사실일까요?" 손을 들게 해 생각을 나누고, 바로 답하지 않는다. "오늘은 낙타에 대한 책과 영상을 견주어 볼 거예요. 두 자료가 같게 말하는 것도 있고, 다르게 말하는 것도 있어요." 시연 단추로 \'사는 곳\' 카드가 \'같아요\'에 들어가는 모습을 보여 준다.',
        student: '낙타에 대해 알고 있는 것을 하나 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '책과 영상', slots: ['두 자료가 같아요', '두 자료가 달라요'], cards: [{ id: 'home', text: '사는 곳', sub: '책: 사막 · 영상: 사막' }], shuffle: false }, sequence: [{ sort: { '두 자료가 같아요': ['home'], '두 자료가 달라요': [] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 같은 것과 다른 것 나누기', minutes: 14, tool: 'mindmap',
            teacher: '"카드 아래 작은 글에 책과 영상이 각각 무엇이라고 했는지 쓰여 있어요. 두 말이 똑같으면 \'같아요\', 하나라도 다르면 \'달라요\'예요." 낙타 혹에는 물이 아니라 지방이 들어 있다는 것을 정리할 때 알려 주고, "그럼 영상이 틀린 거네요"라는 말에는 "그래서 자료를 하나만 보면 안 돼요"로 잇는다.',
            task: '카드 아래 책과 영상의 말을 읽고, 두 자료가 같은 것과 다른 것으로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '낙타에 대한 책과 영상의 말을 견주어 나누어 보세요.', toolOptions: { topic: '낙타 자료', slots: ['두 자료가 같아요', '두 자료가 달라요'], cards: [{ id: 'home', text: '사는 곳', sub: '책: 사막 · 영상: 사막' }, { id: 'hump', text: '혹 속에 든 것', sub: '책: 지방 · 영상: 물' }, { id: 'lash', text: '속눈썹', sub: '책: 길어요 · 영상: 길어요' }, { id: 'drink', text: '한 번에 마시는 물', sub: '책: 아주 많이 · 영상: 조금' }] },
                target: { sort: { '두 자료가 같아요': ['home', 'lash'], '두 자료가 달라요': ['hump', 'drink'] } }, difficulty: 0.15 },
              { prompt: '남극에 대한 책과 영상의 말을 견주어 나누어 보세요.', toolOptions: { topic: '남극 자료', slots: ['두 자료가 같아요', '두 자료가 달라요'], cards: [{ id: 'cold', text: '남극의 날씨', sub: '책: 아주 추워요 · 영상: 아주 추워요' }, { id: 'bear', text: '북극곰', sub: '책: 남극에 없어요 · 영상: 남극에 살아요' }, { id: 'seal', text: '사는 동물', sub: '책: 펭귄·물범 · 영상: 펭귄·물범' }, { id: 'sun', text: '여름 밤의 해', sub: '책: 밤에도 떠 있어요 · 영상: 밤이면 져요' }] },
                target: { sort: { '두 자료가 같아요': ['cold', 'seal'], '두 자료가 달라요': ['bear', 'sun'] } }, difficulty: 0.25 },
              { prompt: '코알라에 대한 책과 영상의 말을 견주어 나누어 보세요.', toolOptions: { topic: '코알라 자료', slots: ['두 자료가 같아요', '두 자료가 달라요'], cards: [{ id: 'food', text: '먹이', sub: '책: 유칼립투스 잎 · 영상: 유칼립투스 잎' }, { id: 'sleep', text: '자는 시간', sub: '책: 아주 길어요 · 영상: 아주 짧아요' }, { id: 'pouch', text: '새끼 키우는 곳', sub: '책: 주머니 · 영상: 주머니' }] },
                target: { sort: { '두 자료가 같아요': ['food', 'pouch'], '두 자료가 달라요': ['sleep'] } }, difficulty: 0.2,
                predict: { q: '두 자료가 다르면 어느 쪽이 맞을까요?', options: ['영상', '책', '더 알아봐야 해요'], answer: 2 },
                conclude: '두 자료가 다르면 바로 정하지 않고 다른 자료를 더 찾아봐요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 자료가 다를 때 어떻게 할까', minutes: 12, tool: 'emotion',
            teacher: '"영상은 움직이고 소리도 나서 꼭 맞는 것 같지요? 하지만 영상도 틀릴 수 있어요." 자료가 다를 때 할 일(다른 책 찾기, 만든 곳 살펴보기, 어른께 여쭈기)을 칠판에 적는다. "영상이 더 재미있으니까 영상이 맞아요"를 고른 학생에게 재미와 사실은 다르다는 것을 짚는다.',
            task: '자료가 서로 다를 때 어떻게 할지 고르고, 믿을 만한 자료를 찾는 방법을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '낙타 혹에 대해 책과 영상이 달라요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '하준', situation: '책에는 낙타 혹에 지방이, 영상에는 물이 들어 있다고 나와요.', choices: [
                { id: 'video', text: '영상이 맞다고 믿어요', result: '틀린 것을 친구들에게 알려 줄 수 있어요.', mood: '걱정', why: '영상도 틀릴 수 있어요. 더 알아볼 방법을 생각해 봐요.' },
                { id: 'more', text: '다른 책이나 백과사전을 더 찾아봐요', result: '혹에 지방이 들어 있다는 것을 확인했어요.', mood: '뿌듯함' },
                { id: 'any', text: '아무거나 골라 적어요', result: '무엇이 맞는지 알 수 없어요.', mood: '걱정', why: '아무거나 고르면 사실인지 알 수 없어요.' }] }, target: { choice: 'more' }, difficulty: 0.1 },
              { prompt: '친구가 "영상에서 봤으니까 무조건 맞아" 하고 말해요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '서아', situation: '서아가 "영상에서 남극에 북극곰이 산대. 영상이니까 무조건 맞아" 하고 말해요.', choices: [
                { id: 'agree', text: '"그렇구나" 하고 그대로 믿어요', result: '둘 다 틀린 것을 알게 돼요.', mood: '걱정', why: '영상에 나온 말도 확인이 필요해요.' },
                { id: 'check', text: '"책에서도 같이 찾아보자" 하고 말해요', result: '북극곰은 북극에 산다는 것을 함께 알았어요.', mood: '기쁨' },
                { id: 'laugh', text: '"그것도 몰라?" 하고 놀려요', result: '서아가 속상해서 더 묻지 않아요.', mood: '속상함', why: '놀리면 친구가 함께 알아보고 싶지 않을 거예요.' }] }, target: { choice: 'check' }, difficulty: 0.15 },
              { prompt: '믿을 만한 자료를 찾는 방법만 골라 보세요.', toolOptions: { mode: 'pick', basket: '확인하는 방법', cards: ['누가 만든 자료인지 살펴봐요', '두 자료를 견주어 봐요', '재미있는 영상만 믿어요', '선생님이나 어른께 여쭈어요'] },
                target: { pick: ['누가 만든 자료인지 살펴봐요', '두 자료를 견주어 봐요', '선생님이나 어른께 여쭈어요'] }, difficulty: 0.2,
                levels: { easy: { prompt: '믿을 만한 자료를 찾는 방법 두 가지를 골라 보세요.', toolOptions: { cards: ['두 자료를 견주어 봐요', '재미있는 영상만 믿어요', '선생님이나 어른께 여쭈어요'] }, target: { pick: ['두 자료를 견주어 봐요', '선생님이나 어른께 여쭈어요'] } }, challenge: { toolOptions: { cards: ['누가 만든 자료인지 살펴봐요', '두 자료를 견주어 봐요', '재미있는 영상만 믿어요', '선생님이나 어른께 여쭈어요', '본 사람이 많은 영상은 그냥 믿어요'] } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"영상에 나온 것은 모두 사실일까요?" 도입에서 한 질문을 다시 묻고, 처음 생각과 지금 생각이 같은지 손을 들게 한다. 집에서 영상을 볼 때도 \'누가 만들었지?\'를 떠올리자고 말한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '판다 자료', slots: ['두 자료가 같아요', '두 자료가 달라요'], cards: [{ id: 'eat', text: '먹이', sub: '책: 대나무 · 영상: 대나무' }, { id: 'color', text: '털 색', sub: '책: 검정과 하양 · 영상: 갈색' }] }, prompt: '판다에 대한 책과 영상의 말을 견주어 나누어 보세요.', target: { sort: { '두 자료가 같아요': ['eat'], '두 자료가 달라요': ['color'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '두 자료가 서로 다르게 말할 때 어떻게 할까요?', options: ['더 재미있는 자료를 믿어요', '다른 자료를 더 찾아 확인해요', '둘 다 버려요'], answer: 1, difficulty: 0.1, explain: '자료가 다르면 다른 자료를 더 찾아 무엇이 맞는지 확인해요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '두 자료 견주기',
      items: [
        { type: 'table', prompt: '책과 영상의 말을 읽고 같으면 ○, 다르면 ×를 쓰세요.', columns: ['알아본 것', '책', '영상', '같으면 ○'], cells: [['낙타가 사는 곳', '사막', '사막', ''], ['혹 속에 든 것', '지방', '물', ''], ['속눈썹', '길어요', '길어요', '']] },
        { type: 'choice', prompt: '자료가 다를 때 할 일에 ○ 하세요.', options: ['다른 책을 더 찾아봐요', '재미있는 쪽을 믿어요', '아무거나 적어요'], answer: '다른 책을 더 찾아봐요' },
        { type: 'check', prompt: '믿을 만한 자료를 찾는 방법에 모두 ✓ 하세요.', options: ['누가 만들었는지 살펴봐요', '두 자료를 견주어요', '어른께 여쭈어요'] },
        { type: 'short', prompt: '영상에서 본 것을 그대로 믿으면 어떤 일이 생길 수 있는지 쓰세요.' },
      ],
      easy: {
        note: '두 말이 똑같으면 같은 것, 하나라도 다르면 다른 것이에요.',
        items: [
          { type: 'choice', prompt: '책: 사막 / 영상: 사막. 두 자료는?', options: ['같아요', '달라요'], answer: '같아요' },
          { type: 'choice', prompt: '책: 지방 / 영상: 물. 두 자료는?', options: ['같아요', '달라요'], answer: '달라요' },
          { type: 'choice', prompt: '자료가 다르면 어떻게 할까요?', options: ['더 찾아봐요', '그냥 믿어요'], answer: '더 찾아봐요' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 확인하는 방법은 두 가지만 골라요.',
      base: '카드 아래 두 말을 소리 내어 읽고 나눈 뒤 확인을 눌러요.',
      challenge: '남극 자료처럼 처음 듣는 사실이 섞인 카드를 견주어요. 다른 것이 나오면 어느 쪽이 맞는지 찾을 방법까지 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 영상에 나오면 모두 사실이라고 여긴다 → 같은 동물에 대해 서로 다른 말을 하는 자료를 직접 보여 준다. ② 같은 것과 다른 것을 카드 이름(혹, 속눈썹)만 보고 나눈다 → 작은 글의 책·영상 말을 소리 내어 견주게 한다. ③ 다르면 책이 언제나 맞다고 여긴다 → 책도 오래되면 틀릴 수 있어 여러 자료를 본다고 말한다. 사실 확인: 낙타 혹에는 지방, 북극곰은 북극에만 살고, 남극 여름에는 해가 밤에도 지지 않는 날이 있다.',
  }));

  lessons.push(L(7, {
    title: '세계 지도에서 가장 넓은 대륙과 바다 찾기',
    objective: '세계 칸 지도에서 칸 수를 견주어 가장 넓은 대륙과 바다를 찾고, 지구본과 세계 지도가 알려 주는 것을 견줄 수 있다.',
    illustration: ART('a paper globe next to a flat paper world map, a child counting colored squares on the map with a finger, a big blue ocean in the middle', '가장 넓은 곳은?', [
      { motif: 'wave', x: 250, y: 222 }, { motif: 'wave', x: 110, y: 226, s: 0.7 }, { motif: 'mountain', x: 390, y: 210, s: 0.7 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '지구본을 돌리며 "지구에는 땅이 많을까요, 바다가 많을까요?" 하고 묻는다. 대답을 듣고 지구본을 천천히 돌려 파란색이 훨씬 많다는 것을 함께 본다. 시연 단추로 칸 지도에서 우리나라 바로 옆 바다에 핀이 꽂히는 모습을 보여 준다. "칸 지도는 넓은 곳일수록 칸이 많아요. 칸을 세면 넓이를 견줄 수 있어요."',
        student: '지구본을 보고 땅과 바다 가운데 무엇이 더 많은지 말해 봐요.',
        demo: { tool: 'map', options: WORLD(), sequence: [{ region: '태평양' }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 칸을 세어 넓은 곳 찾기', minutes: 14, tool: 'map',
            teacher: '"아시아는 몇 칸이에요? 아프리카는요?" 대륙마다 손가락으로 칸을 세게 한다. 바다를 셀 때 태평양이 지도 가운데에 넓게 퍼져 있다는 것을 짚는다. 우리나라 지도는 태평양이 가운데 오도록 그린 것이 많다고 말해 준다. 이름이 길거나 크게 쓰인 곳이 넓은 곳이라고 여기는 학생에게 칸을 다시 세게 한다.',
            task: '지도의 칸을 세어 문제에 맞는 대륙이나 바다에 핀을 꽂아요.',
            levels: MAP_LV,
            items: [
              { prompt: '가장 넓은 대륙에 핀을 꽂아 보세요. 대륙마다 칸 수를 세어 견주어요.', toolOptions: WORLD({ regions: [
                { name: '유럽', cells: LAND[0].cells, color: 'lavender', value: 1018 }, { name: '아시아', cells: LAND[1].cells, color: 'buttercup', value: 4458 },
                { name: '아프리카', cells: LAND[2].cells, color: 'peach', value: 3037 }, { name: '오세아니아', cells: LAND[3].cells, color: 'mint', value: 856 },
                { name: '남극', cells: LAND[4].cells, color: 'cream', value: 1400 }, { name: '북아메리카', cells: LAND[5].cells, color: 'mint', value: 2471 },
                { name: '남아메리카', cells: LAND[6].cells, color: 'rose', value: 1784 }].concat(SEA) }), target: { most: true }, difficulty: 0.2,
                hints: ['칸 지도에서는 넓은 대륙일수록 칸이 많아요. 굵은 선 안의 칸을 대륙마다 세어요.', '핀을 꽂은 대륙의 칸 수와 다른 대륙의 칸 수를 견주어 보세요. 더 많은 대륙이 있나요?', '아시아가 다섯 칸으로 가장 많아요. 아시아 칸에 핀을 꽂아요.'] },
              { prompt: '가장 넓은 바다에 핀을 꽂아 보세요. 파란 바다마다 칸 수를 세어 견주어요.', toolOptions: WORLD({ regions: LAND.concat([
                { name: '태평양', cells: SEA[0].cells, color: 'sky', value: 16525 }, { name: '대서양', cells: SEA[1].cells, color: 'sky', value: 10646 },
                { name: '인도양', cells: SEA[2].cells, color: 'sky', value: 7056 }]) }), target: { most: true }, difficulty: 0.2,
                hints: ['이름이 붙은 파란 바다마다 굵은 선 안의 칸을 세어요.', '핀을 꽂은 바다보다 칸이 더 많은 바다가 있는지 견주어 보세요.', '태평양이 여섯 칸으로 가장 넓어요. 태평양 칸에 핀을 꽂아요.'] },
              { prompt: '우리나라 바로 옆에 있는 큰 바다에 핀을 꽂아 보세요.', toolOptions: WORLD(), target: { region: '태평양' }, difficulty: 0.15,
                hints: ['우리나라 기호를 먼저 찾고, 그 바로 옆 파란 칸을 살펴요.', '핀이 우리나라 기호와 맞닿은 파란 칸에 있나요?', '우리나라 오른쪽 파란 칸이 태평양이에요. 그 칸에 핀을 꽂아요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 지구본과 세계 지도 견주기', minutes: 12, tool: 'mindmap',
            teacher: '"지구본은 들고 다니기 어렵지만 진짜 지구처럼 둥글어요. 세계 지도는 접어 넣을 수 있고 한눈에 다 보여요." 모둠마다 지구본과 세계 지도를 하나씩 주고 직접 돌리고 펼쳐 보게 한 뒤 나누기를 한다. 대륙과 바다 이름을 헷갈리면 끝이 \'양\'으로 끝나는 것이 큰 바다라고 알려 준다.',
            task: '이름을 대륙과 바다로 나누고, 지구본과 세계 지도가 좋은 점을 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '이름 카드를 대륙과 바다로 나누어 보세요.', toolOptions: { topic: '대륙일까, 바다일까?', slots: ['대륙', '바다'], cards: ['아시아', '태평양', '아프리카', '대서양', '남극', '인도양'] },
                target: { sort: { '대륙': ['아시아', '아프리카', '남극'], '바다': ['태평양', '대서양', '인도양'] } }, difficulty: 0.15 },
              { prompt: '지구본과 세계 지도가 좋은 점을 알맞게 나누어 보세요.', toolOptions: { topic: '어느 것이 좋을까?', slots: ['지구본', '세계 지도'], cards: ['지구 전체를 한 번에 펼쳐 봐요', '진짜 지구처럼 둥글어요', '접어서 가방에 넣어요', '돌려 가며 지구를 살펴봐요'] },
                target: { sort: { '지구본': ['진짜 지구처럼 둥글어요', '돌려 가며 지구를 살펴봐요'], '세계 지도': ['지구 전체를 한 번에 펼쳐 봐요', '접어서 가방에 넣어요'] } }, difficulty: 0.25 },
              { prompt: '세계 지도로 알 수 있는 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '지도로 알아요', cards: ['대륙이 있는 자리', '가장 넓은 바다', '펭귄 우는 소리', '오늘 남극의 날씨'] },
                target: { pick: ['대륙이 있는 자리', '가장 넓은 바다'] }, difficulty: 0.2,
                conclude: '세계 지도는 자리와 넓이를 알려 주고, 소리나 오늘 날씨는 다른 자료로 알아봐요.' },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"지도에서 넓이를 견줄 때 무엇을 세었나요?" 칸 수라는 대답을 확인하고, 실제 세계 지도는 칸이 없어서 지구본과 함께 보아야 한다고 덧붙인다. 출구 1번을 틀린 학생은 남극 위 칸을 손가락으로 한 칸씩 올라가 보게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'map', options: WORLD(), prompt: '남극 바로 위 칸에 있는 대륙에 핀을 꽂아 보세요.', target: { region: '오세아니아' }, difficulty: 0.2,
            hints: ['남극을 먼저 찾고, 그 바로 위 칸들 가운데 땅 칸을 찾아요.'] },
          { type: 'choice', prompt: '진짜 지구처럼 둥근 모양으로 지구를 보여 주는 것은?', options: ['세계 지도', '지구본', '그림책'], answer: 1, difficulty: 0.1, explain: '지구본은 지구를 둥근 공 모양으로 작게 만든 것이에요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '넓은 대륙과 바다',
      items: [
        { type: 'figure', wide: true, prompt: '가장 넓은 대륙에 ○, 가장 넓은 바다에 △ 하세요.', tool: 'map', figures: [{ options: WORLD(), caption: '' }], answer: '대륙: 아시아(5칸) / 바다: 태평양(6칸)' },
        { type: 'table', prompt: '대륙의 칸 수를 세어 쓰세요.', columns: ['대륙', '칸 수'], cells: [['아시아', ''], ['아프리카', ''], ['유럽', '']] },
        { type: 'choice', prompt: '큰 바다의 이름에 ○ 하세요.', options: ['태평양', '아프리카', '남극'], answer: '태평양' },
        { type: 'short', prompt: '지구본이 세계 지도보다 좋은 점을 하나 쓰세요.' },
      ],
      easy: {
        note: '칸이 많을수록 넓은 곳이에요.',
        items: [
          { type: 'choice', prompt: '더 넓은 대륙에 ○ 하세요.', options: ['아시아(5칸)', '유럽(2칸)'], answer: '아시아(5칸)' },
          { type: 'choice', prompt: '지구에 더 많은 것에 ○ 하세요.', options: ['바다', '땅'], answer: '바다' },
          { type: 'draw', prompt: '지구본을 보고 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '핀을 꽂으면 그 칸 이름이 바로 보여요. 칸을 손가락으로 짚으며 세어요.',
      base: '대륙과 바다마다 칸을 세어 견준 뒤 핀을 꽂아요.',
      challenge: '대륙과 바다 이름이 지도에 없어요. 칸 수와 우리나라 기호만 보고 찾아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 글자가 길거나 크게 쓰인 곳을 넓다고 여긴다 → 칸을 하나씩 짚어 세게 한다. ② 칸 지도의 칸 수를 실제 넓이로 여긴다 → 칸은 넓이 차례만 맞춘 것이라고 말한다(실제로 아시아는 유럽보다 네 배쯤 넓다). ③ 대서양이 지도 양쪽 끝에 나뉘어 보이는 까닭을 궁금해한다 → 지구본을 돌려 지도 끝과 끝이 이어진다는 것을 보여 준다. 사실 확인: 넓이 차례는 아시아 > 아프리카 > 북아메리카 > 남아메리카 > 남극 > 유럽 > 오세아니아, 바다는 태평양 > 대서양 > 인도양.',
  }));

  lessons.push(L(8, {
    title: '사실을 알려 주는 말과 생각을 말하는 말 나누기',
    objective: '자료와 친구의 말을 사실을 알려 주는 말과 생각·느낌을 말하는 말로 나누고, 확인이 필요한 말을 알아볼 방법을 고를 수 있다.',
    illustration: ART('two paper speech bubbles above a desert scene, one with a camel carrying bags and one with a heart, a child sorting cards into two baskets', '사실일까, 생각일까?', [
      { motif: 'sun', x: 90, y: 80, s: 0.7 }, { motif: 'hills', y: 222, color: 'buttercup' }, { motif: 'flower', x: 400, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"\'펭귄은 헤엄을 잘 쳐요\'와 \'펭귄은 정말 귀여워요\'는 무엇이 다를까요?" 대답을 듣고 "앞의 말은 누구나 확인할 수 있는 사실이고, 뒤의 말은 내 생각과 느낌이에요"라고 정리한다. 시연 단추로 두 카드가 각각 알맞은 가지로 들어가는 모습을 보여 준다.',
        student: '좋아하는 동물에 대해 사실 하나, 내 느낌 하나를 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '펭귄 이야기', slots: ['사실', '생각·느낌'], cards: ['펭귄은 헤엄을 잘 쳐요', '펭귄은 정말 귀여워요'], shuffle: false }, sequence: [{ sort: { '사실': ['펭귄은 헤엄을 잘 쳐요'], '생각·느낌': ['펭귄은 정말 귀여워요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 사실과 생각 나누기', minutes: 13, tool: 'mindmap',
            teacher: '"이 말은 자료를 찾아 \'맞다, 틀리다\'를 확인할 수 있나요?" 확인할 수 있으면 사실, 사람마다 다를 수 있으면 생각·느낌이라고 기준을 말해 준다. \'무서울 것 같아요\', \'예뻐요\'처럼 마음이 담긴 낱말에 동그라미 치게 한다.',
            task: '문장을 읽고 사실을 알려 주는 말과 생각·느낌을 말하는 말로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '펭귄에 대한 말을 사실과 생각·느낌으로 나누어 보세요.', toolOptions: { topic: '펭귄 이야기', slots: ['사실', '생각·느낌'], cards: ['펭귄은 알을 낳아요', '펭귄을 키우고 싶어요', '펭귄은 날개로 헤엄쳐요', '펭귄 걸음이 웃겨요'] },
                target: { sort: { '사실': ['펭귄은 알을 낳아요', '펭귄은 날개로 헤엄쳐요'], '생각·느낌': ['펭귄을 키우고 싶어요', '펭귄 걸음이 웃겨요'] } }, difficulty: 0.1 },
              { prompt: '사막에 대한 말을 사실과 생각·느낌으로 나누어 보세요.', toolOptions: { topic: '사막 이야기', slots: ['사실', '생각·느낌'], cards: ['사막에는 비가 아주 적게 와요', '사막에 가면 무서울 것 같아요', '낙타는 사막에서 짐을 날라요', '사막 모래 언덕은 예뻐요'] },
                target: { sort: { '사실': ['사막에는 비가 아주 적게 와요', '낙타는 사막에서 짐을 날라요'], '생각·느낌': ['사막에 가면 무서울 것 같아요', '사막 모래 언덕은 예뻐요'] } }, difficulty: 0.2 },
              { prompt: '바닷속에 대한 말을 나누어 보세요. 바닷속과 관계없는 말은 카드 칸에 남겨요.', toolOptions: { topic: '바닷속 이야기', slots: ['사실', '생각·느낌'], cards: ['깊은 바다는 아주 깜깜해요', '해파리 춤이 멋져요', '상어는 물고기예요', '토성에는 고리가 있어요'] },
                target: { sort: { '사실': ['깊은 바다는 아주 깜깜해요', '상어는 물고기예요'], '생각·느낌': ['해파리 춤이 멋져요'] } }, difficulty: 0.3,
                predict: { q: '"토성에는 고리가 있어요"는 어디에 놓을까요?', options: ['사실', '생각·느낌', '안 놓아요'], answer: 2 },
                conclude: '토성 이야기는 사실이지만 바닷속 이야기가 아니라서 남겨요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 확인이 필요한 말 알아보기', minutes: 13, tool: 'emotion',
            teacher: '"\'바닷속에 인어가 산대\'는 사실일까요?" 재미있는 이야기와 확인된 사실을 나누어 말하게 한다. 들은 말을 바로 퍼뜨리기보다 "어디에서 봤어?" 하고 묻는 것이 먼저라는 것을 짚는다. 믿을 만한 자료로 과학관·도서관 자료처럼 만든 곳이 분명한 것을 예로 든다.',
            task: '들은 말이 사실인지 확인이 필요할 때 어떻게 할지 고르고, 믿을 만한 자료를 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '친구가 "바닷속에 인어가 산대" 하고 말해요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '준호', situation: '준호가 "짧은 영상에서 봤는데 바닷속에 인어가 산대" 하고 말해요.', choices: [
                { id: 'spread', text: '반 친구들에게 바로 알려요', result: '확인하지 않은 말이 퍼져요.', mood: '걱정', why: '확인하지 않은 말을 퍼뜨리면 어떻게 될까요?' },
                { id: 'ask', text: '"어디에서 봤어? 책에서도 찾아보자" 하고 말해요', result: '인어는 옛이야기 속 상상이라는 것을 알았어요.', mood: '기쁨' }] }, target: { choice: 'ask' }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { choices: [
                  { id: 'spread', text: '반 친구들에게 바로 알려요', result: '확인하지 않은 말이 퍼져요.', mood: '걱정', why: '확인하지 않은 말을 퍼뜨리면 어떻게 될까요?' },
                  { id: 'ask', text: '"어디에서 봤어? 책에서도 찾아보자" 하고 말해요', result: '인어는 옛이야기 속 상상이라는 것을 알았어요.', mood: '기쁨' },
                  { id: 'video', text: '같은 영상을 한 번 더 보고 믿어요', result: '같은 영상만 보면 사실인지 알 수 없어요.', mood: '걱정', why: '같은 자료를 다시 보는 것은 확인이 아니에요.' }] } } } },
              { prompt: '믿을 만한 자료만 골라 보세요.', toolOptions: { mode: 'pick', basket: '믿을 만한 자료', cards: ['과학관에서 만든 영상', '도서관 어린이 백과사전', '누가 만들었는지 모르는 짧은 영상'] },
                target: { pick: ['과학관에서 만든 영상', '도서관 어린이 백과사전'] }, difficulty: 0.15 },
              { prompt: '서아가 발표에서 "상어는 다 사람을 공격해요"라고 했어요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '서아', situation: '서아가 상어 발표에서 "상어는 모두 사람을 공격해요"라고 말했어요. 자료에는 그런 말이 없었어요.', choices: [
                { id: 'quiet', text: '틀려도 그냥 둬요', result: '친구들이 상어를 잘못 알게 돼요.', mood: '걱정', why: '잘못 안 것을 그대로 두면 어떻게 될까요?' },
                { id: 'kind', text: '"그 말은 어느 자료에 있었어?" 하고 부드럽게 물어요', result: '서아가 자료를 다시 보고 고쳐 말했어요.', mood: '고마움' },
                { id: 'shout', text: '"틀렸어!" 하고 크게 말해요', result: '서아가 부끄러워 발표를 멈췄어요.', mood: '속상함', why: '크게 틀렸다고 하면 서아 마음이 어떨까요?' }] }, target: { choice: 'kind' }, difficulty: 0.2 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"사실과 생각은 어떻게 나눌 수 있었나요?" 기준(자료로 맞고 틀림을 확인할 수 있는가)을 학생 말로 다시 말하게 한다. 생각과 느낌도 소중한 말이고, 다만 사실처럼 말하지 않는 것이 중요하다고 덧붙인다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '달 이야기', slots: ['사실', '생각·느낌'], cards: ['달은 지구 둘레를 돌아요', '달은 외로워 보여요', '달에는 공기가 없어요'] }, prompt: '달에 대한 말을 사실과 생각·느낌으로 나누어 보세요.', target: { sort: { '사실': ['달은 지구 둘레를 돌아요', '달에는 공기가 없어요'], '생각·느낌': ['달은 외로워 보여요'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '생각·느낌을 말하는 말은 어느 것인가요?', options: ['고래는 숨을 쉬러 물 위로 올라와요', '고래 노래는 슬프게 들려요', '고래는 새끼를 낳아요'], answer: 1, difficulty: 0.15, explain: '\'슬프게 들려요\'는 사람마다 다르게 느낄 수 있는 느낌이에요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '사실과 생각',
      items: [
        { type: 'figure', wide: true, prompt: '카드를 사실과 생각·느낌으로 나누어 쓰세요.', tool: 'mindmap', figures: [{ options: { topic: '펭귄 이야기', slots: ['사실', '생각·느낌'], cards: ['펭귄은 알을 낳아요', '펭귄 걸음이 웃겨요'], printCards: true }, caption: '' }], answer: '사실: 펭귄은 알을 낳아요 / 생각·느낌: 펭귄 걸음이 웃겨요' },
        { type: 'choice', prompt: '사실을 알려 주는 말에 ○ 하세요.', options: ['사막에는 비가 적게 와요', '사막은 무서워요', '사막이 좋아요'], answer: '사막에는 비가 적게 와요' },
        { type: 'table', prompt: '내 궁금한 곳에 대해 사실 하나, 생각 하나를 쓰세요.', columns: ['사실', '생각·느낌'], rows: 1 },
        { type: 'short', prompt: '확인이 필요한 말을 들으면 어떻게 할지 쓰세요.' },
      ],
      easy: {
        note: '자료로 맞는지 확인할 수 있으면 사실이에요.',
        items: [
          { type: 'choice', prompt: '사실에 ○ 하세요.', options: ['상어는 물고기예요', '상어는 멋져요'], answer: '상어는 물고기예요' },
          { type: 'choice', prompt: '느낌에 ○ 하세요.', options: ['달이 예뻐요', '달은 지구 둘레를 돌아요'], answer: '달이 예뻐요' },
          { type: 'draw', prompt: '내가 좋아하는 동물을 그리고 느낌을 한 낱말로 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 가지에 놓으면 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '모두 나눈 뒤 확인을 눌러요. 마음이 담긴 낱말을 찾아요.',
      challenge: '관계없는 사실 카드가 섞여 있고, 어떻게 할지 고르는 문항에 그럴듯한 보기가 하나 더 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 좋은 말은 사실, 나쁜 말은 생각이라고 여긴다 → \'예뻐요\'도 생각이라는 것을 예로 든다. ② 틀린 사실(상어는 다 사람을 공격해요)을 생각으로 분류한다 → 틀린 말도 자료로 확인할 수 있으면 사실을 말하려는 문장이라고 알려 주고, 확인해 고치게 한다. ③ 친구의 틀린 말을 크게 지적한다 → "어느 자료에 있었어?" 하고 묻는 말을 함께 연습한다.',
  }));

  // ───────────────────────── 9~12차시: 알아낸 것과 상상한 것 전하기 ─────────────────────────

  lessons.push(L(9, {
    title: '알아낸 것을 그림 카드와 말로 소개하기',
    objective: '탐구한 곳에 대해 알아낸 것을 그림 카드로 그리고, 시작·가운데·끝 차례에 맞추어 짝에게 소개할 수 있다.',
    illustration: ART('a child holding up a paper drawing card of an octopus hiding in ink while a partner listens, small paper speech bubbles between them', '알아낸 것을 알려 줘요', [
      { motif: 'wave', x: 120, y: 224 }, { motif: 'flower', x: 390, y: 228 }, { motif: 'star', x: 330, y: 80, s: 0.5 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"친구에게 새로 안 것을 알려 줄 때, 무엇부터 말하면 잘 들릴까요?" 선생님이 일부러 끝인사부터 말하는 엉터리 발표를 짧게 보여 주고 무엇이 이상했는지 묻는다. 시연 단추로 발표 차례 카드가 놓이는 모습을 보여 준다. 4차시 계획표와 5~8차시 활동지를 꺼내 두게 한다.',
        student: '내가 알아낸 것 가운데 가장 놀라웠던 것 하나를 떠올려 봐요.',
        demo: { tool: 'story', options: { cards: [{ id: 'start', text: '인사하고 알아본 곳 말하기', motif: 'sun' }, { id: 'mid', text: '알아낸 것 말하기', motif: 'star' }, { id: 'end', text: '고맙다고 말하기', motif: 'flower' }], slots: ['시작', '가운데', '끝'], shuffle: false }, sequence: [{ order: ['start', 'mid', 'end'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 발표 차례와 말 익히기', minutes: 12, tool: 'story',
            teacher: '"알아낸 것을 말할 때는 그림 카드를 들어 친구들이 보게 해요." 발표 문장 틀(제가 알아본 곳은 ___예요 / 제 질문은 ___예요 / ___에서 알아보았어요)을 칠판에 붙인다. 작은 소리로 빨리 말하는 것을 좋은 발표라고 고르는 학생에게 맨 뒤에 앉은 친구 자리에서 들어 보게 한다.',
            task: '발표하는 차례를 놓고, 발표 문장의 빈칸을 채우고, 좋은 발표 습관을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '발표하는 차례대로 카드를 놓아 보세요.', toolOptions: { cards: [{ id: 'hello', text: '인사하고 알아본 곳 말하기', motif: 'sun' }, { id: 'q', text: '궁금했던 질문 말하기', motif: 'cloud' }, { id: 'found', text: '그림을 보여 주며 알아낸 것 말하기', motif: 'star' }, { id: 'bye', text: '들어 줘서 고맙다고 말하기', motif: 'flower' }], slots: ['1', '2', '3', '4'] },
                target: { order: ['hello', 'q', 'found', 'bye'] }, difficulty: 0.15 },
              { prompt: '민지의 발표 문장 빈칸에 알맞은 낱말을 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['바닷속', '문어', '도서관 책'], slots: [{ id: 'f1', who: '민지', label: '제가 알아본 곳은 ___이에요.' }, { id: 'f2', who: '민지', label: '제 질문은 "___는 어떻게 숨을까요?"예요.' }, { id: 'f3', who: '민지', label: '___에서 알아보았어요.' }] },
                target: { fill: { f1: '바닷속', f2: '문어', f3: '도서관 책' } }, difficulty: 0.2 },
              { prompt: '좋은 발표 습관만 골라 보세요.', toolOptions: { mode: 'pick', basket: '좋은 발표 습관', cards: ['친구들을 보며 말해요', '그림을 들어 보여 줘요', '작은 소리로 빨리 말해요', '또박또박 말해요'] },
                target: { pick: ['친구들을 보며 말해요', '그림을 들어 보여 줘요', '또박또박 말해요'] }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['친구들을 보며 말해요', '그림을 들어 보여 줘요', '작은 소리로 빨리 말해요', '또박또박 말해요', '그림으로 얼굴을 가리고 말해요'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 그림 카드 들고 짝에게 소개하기', minutes: 14, tool: 'mindmap',
            teacher: '활동지 그림 카드에 알아낸 것 하나를 크게 그리게 한다(6분). "그림 아래에 알아낸 것을 한 줄로 써요." 짝끼리 한 사람씩 1분 동안 발표하고, 듣는 짝은 끝까지 들은 뒤 "잘 들었어" 하고 말해 준다. 발표 뒤에는 발표 문장이 시작·가운데·끝 가운데 어디에 들어가는지 이어 보며 내 발표를 돌아보게 한다.',
            task: '그림 카드를 들고 짝에게 1분 동안 소개하고, 발표 문장이 들어갈 자리를 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '그림 카드를 들고 짝에게 1분 동안 발표했으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '바닷속 발표 문장을 들어갈 자리에 이어 보세요.', toolOptions: { mode: 'match', topic: '발표의 자리', slots: [{ id: 's1', label: '시작' }, { id: 's2', label: '가운데' }, { id: 's3', label: '끝' }], cards: ['안녕하세요, 저는 바닷속을 알아보았어요', '문어는 먹물을 뿜어 숨어요', '들어 주셔서 고마워요'] },
                target: { match: { s1: '안녕하세요, 저는 바닷속을 알아보았어요', s2: '문어는 먹물을 뿜어 숨어요', s3: '들어 주셔서 고마워요' } }, difficulty: 0.1 },
              { prompt: '우주 발표 문장을 들어갈 자리에 이어 보세요.', toolOptions: { mode: 'match', topic: '발표의 자리', slots: [{ id: 's1', label: '시작' }, { id: 's2', label: '가운데' }, { id: 's3', label: '끝' }], cards: ['궁금한 것이 있으면 물어봐 주세요', '저는 우주인의 잠을 알아보았어요', '우주인은 침낭을 벽에 묶고 자요'] },
                target: { match: { s1: '저는 우주인의 잠을 알아보았어요', s2: '우주인은 침낭을 벽에 묶고 자요', s3: '궁금한 것이 있으면 물어봐 주세요' } }, difficulty: 0.2,
                conclude: '알아낸 것은 가운데에서 그림과 함께 말해요.' },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"짝의 발표에서 새로 알게 된 것을 하나 말해 볼까요?" 서너 명이 짝의 발표를 대신 소개한다. 그림 카드는 모아 두었다가 12차시 발표회에서 다시 쓴다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { cards: [{ id: 'a', text: '저는 사막을 알아보았어요', motif: 'sun' }, { id: 'b', text: '낙타 혹에는 지방이 있어요', motif: 'hills' }, { id: 'c', text: '들어 줘서 고마워요', motif: 'flower' }], slots: ['시작', '가운데', '끝'] }, prompt: '사막 발표 문장을 차례대로 놓아 보세요.', target: { order: ['a', 'b', 'c'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '알아낸 것을 말할 때 함께 하면 좋은 것은?', options: ['그림 카드를 보여 줘요', '얼굴을 가려요', '빨리 끝내요'], answer: 0, difficulty: 0.1, explain: '그림을 보여 주면 친구들이 더 잘 알 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '나의 그림 카드',
      items: [
        { type: 'draw', wide: true, prompt: '내가 알아낸 것 하나를 크게 그리세요.' },
        { type: 'short', prompt: '그림 아래에 알아낸 것을 한 줄로 쓰세요.' },
        { type: 'table', prompt: '발표 문장을 채우세요.', columns: ['자리', '내가 할 말'], cells: [['시작', '제가 알아본 곳은 ____'], ['가운데', ''], ['끝', '']] },
        { type: 'check', prompt: '발표할 때 지킨 것에 ✓ 하세요.', options: ['친구들을 보았어요', '그림을 보여 주었어요', '또박또박 말했어요'] },
      ],
      easy: {
        note: '시작 → 가운데 → 끝 차례로 말해요.',
        items: [
          { type: 'draw', wide: true, prompt: '알아낸 것을 그리세요.' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '제가 알아본 곳은 ___이에요.', answer: '(알아본 곳)' },
          { type: 'choice', prompt: '발표 끝에 하는 말에 ○ 하세요.', options: ['들어 줘서 고마워요', '안녕하세요'], answer: '들어 줘서 고마워요' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 초록 테두리가 생겨요. 발표는 문장 틀 세 줄을 읽는 것으로 해요.',
      base: '차례와 빈칸을 모두 채운 뒤 확인을 눌러요. 그림 카드로 1분 발표를 해요.',
      challenge: '좋은 습관 고르기에 함정 카드가 하나 더 있어요. 발표에 내 질문과 알아본 방법까지 넣어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 그림만 보여 주고 말을 하지 않는다 → 문장 틀을 손가락으로 짚으며 읽게 한다. ② 알아낸 것보다 질문만 길게 말한다 → 가운데에는 \'알아낸 것\'을 말한다는 것을 짚는다. ③ 듣는 짝이 끼어든다 → 끝까지 들은 뒤 "잘 들었어"를 먼저 말하게 한다. 사실 확인: 우주 정거장의 우주인은 떠다니지 않게 침낭을 벽에 묶고 잔다.',
  }));

  lessons.push(L(10, {
    title: '알아낸 것과 상상한 것 나누어 말하기',
    objective: '탐구한 곳에 대한 말을 알아낸 것과 상상한 것으로 나누고, 상상한 것은 \'~일 것 같아요\'처럼 상상임을 밝혀 말할 수 있다.',
    illustration: ART('a paper moon with a real crater on one side and a dreamy playground imagined on the other side, a child with a thought bubble', '알아낸 것, 상상한 것', [
      { motif: 'moon', x: 360, y: 84, s: 0.8 }, { motif: 'star', x: 120, y: 86, s: 0.5 }, { motif: 'star', x: 200, y: 64, s: 0.4 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"달에 놀이터가 있으면 좋겠다는 생각, 말해도 될까요?" 손을 들게 해 생각을 듣는다. "상상은 아주 좋은 생각이에요. 다만 알아낸 것과 섞이지 않게 \'상상해요\', \'~일 것 같아요\'를 붙여 말해요." 시연 단추로 두 카드가 알맞은 가지로 들어가는 모습을 보여 준다.',
        student: '내가 알아본 곳에 대해 상상해 본 것을 하나 떠올려 봐요.',
        demo: { tool: 'mindmap', options: { topic: '달 이야기', slots: ['알아낸 것', '상상한 것'], cards: ['달에는 공기가 없어요', '달에 놀이터가 있으면 좋겠어요'], shuffle: false }, sequence: [{ sort: { '알아낸 것': ['달에는 공기가 없어요'], '상상한 것': ['달에 놀이터가 있으면 좋겠어요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 알아낸 것과 상상한 것 나누기', minutes: 13, tool: 'mindmap',
            teacher: '"이 말은 자료에서 찾은 것일까요, 마음속으로 그려 본 것일까요?" \'좋겠어요, 것 같아요, 지도 몰라요\' 같은 말이 붙으면 상상이라는 단서가 된다고 알려 준다. 상상한 것을 말하면 안 된다고 여기는 학생에게 "과학자도 먼저 상상하고 알아봐요"라고 말해 준다.',
            task: '문장을 읽고 알아낸 것과 상상한 것으로 나누거나, 상상임을 밝힌 말을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '달에 대한 말을 알아낸 것과 상상한 것으로 나누어 보세요.', toolOptions: { topic: '달 이야기', slots: ['알아낸 것', '상상한 것'], cards: ['달은 스스로 빛을 내지 않아요', '달에 사는 친구와 놀고 싶어요', '달에는 바람이 불지 않아요', '달에 놀이공원을 짓고 싶어요'] },
                target: { sort: { '알아낸 것': ['달은 스스로 빛을 내지 않아요', '달에는 바람이 불지 않아요'], '상상한 것': ['달에 사는 친구와 놀고 싶어요', '달에 놀이공원을 짓고 싶어요'] } }, difficulty: 0.1 },
              { prompt: '바닷속에 대한 말을 알아낸 것과 상상한 것으로 나누어 보세요.', toolOptions: { topic: '바닷속 이야기', slots: ['알아낸 것', '상상한 것'], cards: ['깊은 바다에 빛을 내는 물고기가 있어요', '바다 밑에 물고기 학교가 있을 것 같아요', '고래는 숨을 쉬러 물 위로 올라와요', '해파리가 노래를 부를지도 몰라요'] },
                target: { sort: { '알아낸 것': ['깊은 바다에 빛을 내는 물고기가 있어요', '고래는 숨을 쉬러 물 위로 올라와요'], '상상한 것': ['바다 밑에 물고기 학교가 있을 것 같아요', '해파리가 노래를 부를지도 몰라요'] } }, difficulty: 0.2 },
              { prompt: '상상한 것을 상상이라고 밝혀 말한 문장만 골라 보세요.', toolOptions: { mode: 'pick', basket: '상상을 밝힌 말', cards: ['바다 밑에 성이 있을 것 같아요', '바다 밑에 성이 있어요', '바다 밑에 성이 있다고 상상해요'] },
                target: { pick: ['바다 밑에 성이 있을 것 같아요', '바다 밑에 성이 있다고 상상해요'] }, difficulty: 0.25,
                predict: { q: '"바다 밑에 성이 있어요"라고 말하면 친구들은 어떻게 여길까요?', options: ['사실로 여겨요', '상상으로 여겨요'], answer: 0 },
                conclude: '상상한 것에 \'~것 같아요\', \'상상해요\'를 붙이면 친구가 사실과 헷갈리지 않아요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 상상도 함께 말하기', minutes: 13, tool: 'emotion',
            teacher: '"하준이는 상상한 것은 틀린 거라 말하면 안 된다고 해요. 정말 그럴까요?" 아직 밝혀지지 않은 곳(깊은 바다, 먼 별)은 상상이 알아보는 첫걸음이 된다는 것을 이야기한다. 친구의 상상을 "말도 안 돼"라고 하는 말이 친구 마음을 어떻게 만드는지 결과 칸을 소리 내어 읽게 한다.',
            task: '상상을 말해도 되는지 판단하고, 문장 빈칸을 채우고, 친구의 상상에 해 줄 말을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '하준이가 "상상한 건 틀린 거라 말하면 안 돼" 하고 말해요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '하준', situation: '하준이가 "깊은 바다에 무엇이 사는지 상상한 건 틀린 거니까 말하면 안 돼" 하고 말해요.', choices: [
                { id: 'hide', text: '상상한 것을 숨겨요', result: '재미있는 생각을 아무도 듣지 못해요.', mood: '속상함', why: '상상도 함께 나누면 더 알아보고 싶어져요.' },
                { id: 'say', text: '"상상이라고 밝히고 말하면 돼" 하고 말해요', result: '친구들이 상상을 듣고 더 알아보고 싶어 했어요.', mood: '신남' }] }, target: { choice: 'say' }, difficulty: 0.1 },
              { prompt: '문장의 빈칸에 알맞은 말을 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['알게 되었어요', '상상해 보았어요'], slots: [{ id: 'f1', label: '책에서 빛을 내는 물고기가 산다는 것을 ___.' }, { id: 'f2', label: '바다 밑에 물고기 학교가 있다고 ___.' }] },
                target: { fill: { f1: '알게 되었어요', f2: '상상해 보았어요' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['알게 되었어요', '상상해 보았어요', '틀렸어요'] } } } },
              { prompt: '친구가 상상을 말했어요. 해 줄 말만 골라 보세요.', toolOptions: { mode: 'pick', basket: '친구에게 할 말', cards: ['재미있는 상상이다!', '나는 이렇게 상상했어', '말도 안 돼', '그런 걸 왜 말해?'] },
                target: { pick: ['재미있는 상상이다!', '나는 이렇게 상상했어'] }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"내 그림 카드에 알아낸 것 옆에는 ○, 상상한 것 옆에는 ☆을 그려 볼까요?" 9차시 그림 카드를 꺼내 표시하게 한다. 상상을 밝혀 말하면 친구도 사실과 헷갈리지 않는다는 것을 다시 짚는다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '화성 이야기', slots: ['알아낸 것', '상상한 것'], cards: ['화성은 붉은빛이에요', '화성에 내 집을 짓고 싶어요', '화성은 지구보다 작아요'] }, prompt: '화성에 대한 말을 알아낸 것과 상상한 것으로 나누어 보세요.', target: { sort: { '알아낸 것': ['화성은 붉은빛이에요', '화성은 지구보다 작아요'], '상상한 것': ['화성에 내 집을 짓고 싶어요'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '상상한 것을 말할 때 알맞은 말은?', options: ['"사막 밑에 굴이 있어요."', '"사막 밑에 굴이 있을 것 같아요."', '상상은 말하지 않아요'], answer: 1, difficulty: 0.15, explain: '\'~것 같아요\'를 붙이면 상상이라는 것을 알 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '알아낸 것과 상상한 것',
      items: [
        { type: 'figure', wide: true, prompt: '카드를 알아낸 것과 상상한 것으로 나누어 쓰세요.', tool: 'mindmap', figures: [{ options: { topic: '달 이야기', slots: ['알아낸 것', '상상한 것'], cards: ['달에는 공기가 없어요', '달에 놀이터가 있으면 좋겠어요'], printCards: true }, caption: '' }], answer: '알아낸 것: 달에는 공기가 없어요 / 상상한 것: 달에 놀이터가 있으면 좋겠어요' },
        { type: 'table', prompt: '내가 알아본 곳에 대해 쓰세요.', columns: ['알아낸 것', '상상한 것'], rows: 2 },
        { type: 'blank', prompt: '상상을 밝히는 말을 쓰세요.', text: '바다 밑에 물고기 학교가 있을 것 ___.', answer: '같아요' },
        { type: 'draw', prompt: '내가 상상한 것을 그리고 ☆을 그리세요.' },
      ],
      easy: {
        note: '\'~것 같아요\'가 붙으면 상상이에요.',
        items: [
          { type: 'choice', prompt: '상상한 것에 ○ 하세요.', options: ['달에 놀이터가 있으면 좋겠어요', '달에는 공기가 없어요'], answer: '달에 놀이터가 있으면 좋겠어요' },
          { type: 'choice', prompt: '상상은 말해도 될까요?', options: ['상상이라고 밝히고 말해요', '말하면 안 돼요'], answer: '상상이라고 밝히고 말해요' },
          { type: 'draw', prompt: '내가 상상한 바닷속을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 틀린 카드는 돌아와요.',
      base: '나눈 뒤 확인을 눌러요. 상상을 밝히는 말을 찾아요.',
      challenge: '빈칸 채우기에 함정 카드가 섞여 있어요. 내 그림 카드에서 알아낸 것과 상상한 것을 하나씩 더 찾아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 상상한 것은 말하면 안 된다고 여긴다 → 상상이라고 밝히면 된다는 것을 여러 번 들려준다. ② 상상을 사실처럼 말한다(바다 밑에 성이 있어요) → \'것 같아요\'를 붙여 다시 말하게 한다. ③ 친구의 상상을 놀린다 → 해 줄 말을 함께 연습한다. 사실 확인: 달은 햇빛을 되비쳐 빛나고, 공기가 없어 바람이 불지 않는다. 깊은 바다에는 스스로 빛을 내는 물고기(초롱아귀 등)가 산다.',
  }));

  lessons.push(L(11, {
    title: '알아낸 것과 상상을 담아 바닷속 꾸미기',
    objective: '알아낸 깊은 바다의 모습 하나와 상상한 것 하나를 넣어 색종이 작품을 꾸미고, 어디가 상상인지 밝혀 말할 수 있다.',
    illustration: ART('a dark paper deep sea scene with glowing yellow fish, a symmetrical pink jellyfish, and an imaginative fish wearing a crown, made of torn colored paper', '깊은 바닷속을 꾸며요', [
      { motif: 'wave', x: 120, y: 60 }, { motif: 'wave', x: 360, y: 64, s: 0.8 }, { motif: 'star', x: 250, y: 220, s: 0.5 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"아주 깊은 바다는 햇빛이 닿지 않아 깜깜해요. 그런데 그곳에는 스스로 빛을 내는 물고기가 있어요." 깊은 바다 생물 사진을 두세 장 보여 준다. "아직 사람이 다 알아보지 못한 곳이라, 상상을 더해 꾸며도 좋아요." 시연 단추로 노란 동그라미가 물고기 둘레에 붙는 모습을 보여 준다.',
        student: '깊은 바다에 무엇이 살지 알아낸 것 하나, 상상한 것 하나를 떠올려 봐요.',
        demo: { tool: 'collage', options: { bg: '파랑' }, sequence: [{ has: [{ shape: 'circle', color: '노랑', min: 2 }] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 색종이 조각으로 깊은 바다 꾸미기', minutes: 17, tool: 'collage',
            teacher: '"빛을 내는 물고기는 알아낸 것이에요. 왕관을 쓴 물고기는 상상이에요. 두 가지를 모두 넣어요." 해파리는 세로 접는 선 양쪽이 똑같아야 한다는 것을 짚고, 한쪽에 붙인 조각과 같은 조각을 반대쪽 같은 거리에 붙이게 한다. 조각을 붙이기만 하고 무엇인지 말하지 못하는 학생에게 "이 조각은 알아낸 것이야, 상상한 것이야?" 하고 묻는다.',
            task: '모양·색·크기를 골라 붙여 깊은 바닷속을 꾸미고, 해낸 것을 점검해요.',
            levels: {
              easy: { shapes: ['circle', 'semi', 'triangle', 'leaf', 'star'], colors: ['노랑', '파랑', '분홍', '초록', '하양'], bg: '파랑' },
              base: { bg: '파랑' },
              challenge: { bg: '검정' },
            },
            items: [
              { prompt: '빛을 내는 물고기를 꾸며요. 물고기 몸 하나와 노란 동그라미 빛을 두 개 넘게 붙여요.', target: { has: [{ shape: 'circle', color: '노랑', min: 2 }], pieces: { min: 3 } }, difficulty: 0.1,
                levels: { challenge: { prompt: '빛을 내는 물고기 두 마리를 꾸며요. 나뭇잎 모양 몸 두 개와 노란 동그라미 빛을 세 개 넘게 붙여요.', target: { has: [{ shape: 'circle', color: '노랑', min: 3 }, { shape: 'leaf', min: 2 }], pieces: { min: 5 } } } } },
              { prompt: '세로 접는 선 양쪽이 똑같은 해파리를 꾸며요. 머리 아래에 다리를 짝지어 붙여요.', state: { pieces: [{ shape: 'semi', color: '분홍', size: 'l', x: 280, y: 160, r: 0 }] }, target: { symmetry: 'vertical', pieces: { min: 3 } }, difficulty: 0.25 },
              { prompt: '알아낸 것과 상상한 것을 모두 넣어 나의 깊은 바다를 꾸미고, 해낸 것을 표시해요.', target: { selfCheck: ['알아낸 것을 하나 넣었어요', '상상한 것을 하나 넣었어요', '어디가 상상인지 짝에게 말했어요'], minPieces: 5 }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 작품 소개 준비하기', minutes: 10, tool: 'mindmap',
            teacher: '활동지 바닷속 그림에 색종이를 손으로 찢어 붙이게 한다(가위 없이). "작품을 소개할 때는 알아낸 것과 상상한 것을 나누어 말해요." 민지의 작품 설명으로 연습한 뒤 내 작품 소개 문장을 활동지에 쓰게 한다.',
            task: '활동지에 색종이를 찢어 붙이고, 작품 속 것을 알아낸 것과 상상한 것으로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '활동지 바닷속 그림에 색종이를 찢어 붙였으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '민지의 작품 속 것을 알아낸 것과 상상한 것으로 나누어 보세요.', toolOptions: { topic: '민지의 바닷속', slots: ['알아낸 것', '상상한 것'], cards: ['빛을 내는 물고기', '왕관을 쓴 물고기', '아주 깜깜한 바다', '해파리 미끄럼틀'] },
                target: { sort: { '알아낸 것': ['빛을 내는 물고기', '아주 깜깜한 바다'], '상상한 것': ['왕관을 쓴 물고기', '해파리 미끄럼틀'] } }, difficulty: 0.1 },
              { prompt: '작품 소개 문장의 빈칸에 알맞은 낱말을 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['빛을 내는', '왕관을 쓴'], slots: [{ id: 'f1', who: '민지', label: '이것은 ___ 물고기예요. 책에서 알았어요.' }, { id: 'f2', who: '민지', label: '이것은 ___ 물고기예요. 제가 상상했어요.' }] },
                target: { fill: { f1: '빛을 내는', f2: '왕관을 쓴' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['빛을 내는', '왕관을 쓴', '헤엄을 못 치는'] } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"내 작품에서 상상한 곳은 어디예요?" 서너 명이 작품을 들고 알아낸 것과 상상한 것을 하나씩 말한다. 색종이 부스러기는 모아 \'다시 쓸 종이\' 상자에 넣는다. 작품은 12차시 발표회에서 그림 카드와 함께 쓴다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '준호의 우주', slots: ['알아낸 것', '상상한 것'], cards: ['고리가 있는 토성', '사탕으로 만든 별', '붉은빛 화성'] }, prompt: '준호의 우주 작품 속 것을 알아낸 것과 상상한 것으로 나누어 보세요.', target: { sort: { '알아낸 것': ['고리가 있는 토성', '붉은빛 화성'], '상상한 것': ['사탕으로 만든 별'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '해파리를 세로 접는 선 양쪽이 똑같게 꾸미려면 어떻게 할까요?', options: ['한쪽에만 다리를 붙여요', '같은 다리를 양쪽 같은 거리에 붙여요', '아무 데나 붙여요'], answer: 1, difficulty: 0.15, explain: '같은 조각을 접는 선에서 같은 거리에 붙이면 양쪽이 똑같아져요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '나의 깊은 바닷속',
      items: [
        { type: 'draw', wide: true, prompt: '깊은 바닷속을 그리고 색종이를 찢어 붙이세요.' },
        { type: 'table', prompt: '내 작품 속 것을 나누어 쓰세요.', columns: ['알아낸 것', '상상한 것'], rows: 2 },
        { type: 'short', prompt: '작품 소개 문장을 쓰세요. (이것은 ___예요. 책에서 알았어요/제가 상상했어요.)' },
        { type: 'check', prompt: '해낸 것에 ✓ 하세요.', options: ['알아낸 것을 넣었어요', '상상한 것을 넣었어요', '색종이 부스러기를 정리했어요'] },
      ],
      easy: {
        note: '빛나는 물고기 하나, 상상한 것 하나!',
        items: [
          { type: 'draw', wide: true, prompt: '깊은 바닷속을 그리세요.' },
          { type: 'choice', prompt: '알아낸 것에 ○ 하세요.', options: ['빛을 내는 물고기', '왕관을 쓴 물고기'], answer: '빛을 내는 물고기' },
          { type: 'choice', prompt: '깊은 바다는 어떤가요?', options: ['깜깜해요', '햇빛이 쨍쨍해요'], answer: '깜깜해요' },
        ],
      },
    },
    differentiation: {
      easy: '고르개의 모양과 색이 다섯 가지로 줄어 찾기 쉬워요. 바탕은 파란 바다예요.',
      base: '모든 모양과 색으로 꾸며요. 해파리는 양쪽이 똑같게 붙여요.',
      challenge: '바탕이 깜깜한 검정이에요. 빛나는 물고기를 두 마리 꾸미고, 소개 빈칸에 함정 낱말이 섞여 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 꾸미기에 빠져 알아낸 것을 넣지 않는다 → "책에서 본 것 하나는 꼭!"을 먼저 붙이게 한다. ② 해파리 다리를 한쪽에만 붙인다 → 접는 선에서 칸 수를 세어 반대쪽에 같은 조각을 붙이게 한다. ③ 상상한 것을 사실처럼 소개한다 → 소개 문장 틀(제가 상상했어요)을 쓰게 한다. 활동지 색종이는 가위 없이 손으로 찢는다.',
  }));

  lessons.push(L(12, {
    title: '모둠 탐구 발표회에서 듣고 묻기',
    objective: '모둠 발표회에서 알아낸 것과 상상한 것을 나누어 발표하고, 친구의 발표를 끝까지 들은 뒤 내용에 맞는 질문을 할 수 있다.',
    illustration: ART('four children in a small circle holding paper drawing cards about the sea, space, the desert and the south pole, one child raising a hand to ask a question', '발표회를 열어요', [
      { motif: 'star', x: 110, y: 84, s: 0.5 }, { motif: 'wave', x: 380, y: 224 }, { motif: 'sun', x: 250, y: 60, s: 0.5 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"오늘은 모둠 발표회예요. 네 명이 한 사람씩 1분 30초 동안 발표하고, 30초 동안 질문을 받아요." 모래시계나 타이머를 보여 준다. "친구 발표가 끝나면 무엇을 물어볼 수 있을까요?" 시연 단추로 발표 내용과 그에 맞는 질문이 이어지는 모습을 보여 준다.',
        student: '9~11차시에 만든 그림 카드와 작품을 꺼내 발표를 준비해요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '이렇게 물어요', slots: [{ id: 's1', label: '"문어는 먹물을 뿜어 숨어요"' }], cards: ['먹물은 무슨 색이에요?', '점심 뭐 먹었어?'], shuffle: false }, sequence: [{ match: { s1: '먹물은 무슨 색이에요?' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 모둠 발표회 열기', minutes: 17, tool: 'mindmap',
            teacher: '모둠마다 발표 차례를 정하고 타이머로 시간을 지킨다(네 명 × 2분 = 8분). 듣는 친구는 발표가 끝나면 손을 들고 질문 하나를 한다. 순회하며 "그 질문은 발표 내용과 이어져 있나요?" 하고 묻는다. 발표가 끝난 뒤 화면에서 발표 내용에 맞는 질문 잇기를 하며 좋은 질문을 견주어 본다.',
            task: '모둠에서 차례대로 발표하고 질문한 뒤, 발표 내용에 맞는 질문을 잇고 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '모둠 친구 네 명이 차례로 발표하고, 친구 발표에 질문을 하나 했으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '친구의 발표 내용에 맞는 질문을 이어 보세요.', toolOptions: { mode: 'match', topic: '이렇게 물어요', slots: [{ id: 's1', label: '"우주인은 침낭을 벽에 묶고 자요"' }, { id: 's2', label: '"사막여우는 귀가 아주 커요"' }], cards: ['왜 벽에 묶고 자요?', '큰 귀로 무엇을 해요?'] },
                target: { match: { s1: '왜 벽에 묶고 자요?', s2: '큰 귀로 무엇을 해요?' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['왜 벽에 묶고 자요?', '큰 귀로 무엇을 해요?', '너는 귀가 작지?'] } } } },
              { prompt: '펭귄 발표를 들은 뒤 할 질문으로 알맞은 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '좋은 질문', cards: ['펭귄은 얼마나 깊이 잠수해요?', '아빠 펭귄은 알을 얼마나 품어요?', '너 그림 못 그리지?', '오늘 쉬는 시간에 뭐 해?'] },
                target: { pick: ['펭귄은 얼마나 깊이 잠수해요?', '아빠 펭귄은 알을 얼마나 품어요?'] }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 발표를 듣는 마음 돌아보기', minutes: 10, tool: 'emotion',
            teacher: '"친구가 발표할 때 옆 친구가 장난을 치면 어떻게 할까요?" 듣는 사람의 약속(눈 맞추기, 끝까지 듣기, 손 들고 묻기)을 다시 말한다. 마지막 문항은 내 발표를 마친 마음이라 정답이 없으니 솔직하게 고르라고 말한다.',
            task: '발표를 들을 때 어떻게 할지 고르고, 내 발표를 마친 마음의 크기를 솔직하게 골라요.',
            levels: { easy: { live: true, instant: true, steps: 3 }, base: {}, challenge: {} },
            items: [
              { prompt: '서아가 발표하는데 옆 친구가 장난을 쳐요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '서아가 발표하는 동안 옆 친구가 내 팔을 쿡쿡 찌르며 장난을 쳐요.', choices: [
                { id: 'play', text: '같이 장난을 쳐요', result: '서아의 발표를 듣지 못했어요.', mood: '걱정', why: '장난을 치면 서아의 발표를 들을 수 있을까요?' },
                { id: 'later', text: '"발표 끝나고 이야기하자" 하고 작게 말해요', result: '서아의 발표를 끝까지 들었어요.', mood: '편안함' }] }, target: { choice: 'later' }, difficulty: 0.1 },
              { prompt: '친구의 상상이 내 상상과 달라요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '준호', situation: '준호는 깊은 바다에 거대한 문어 마을이 있다고 상상했어요. 내 상상과 달라요.', choices: [
                { id: 'wrong', text: '"내 상상이 맞아" 하고 말해요', result: '준호가 속상해서 더 말하지 않아요.', mood: '속상함', why: '상상에는 맞고 틀린 것이 없어요.' },
                { id: 'enjoy', text: '"그렇게 상상할 수도 있구나" 하고 말해요', result: '서로의 상상을 더 듣고 싶어졌어요.', mood: '신남' },
                { id: 'ignore', text: '못 들은 척해요', result: '준호가 외로워요.', mood: '외로움', why: '못 들은 척하면 준호 마음이 어떨까요?' }] }, target: { choice: 'enjoy' }, difficulty: 0.15 },
              { prompt: '내 발표를 마친 뒤 뿌듯한 마음의 크기를 솔직하게 골라 보세요. 정답은 없어요.', toolOptions: { mode: 'scale', situation: '모둠 친구들 앞에서 내가 알아낸 것과 상상한 것을 발표했어요.', feeling: '뿌듯함', after: '다음 발표 때 더 해 보고 싶은 것을 하나 떠올려 봐요.' }, target: { level: 'any' }, difficulty: 0.05 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"모둠 친구의 발표에서 가장 놀라웠던 것은 무엇이었나요?" 모둠마다 한 명이 친구의 발표를 소개한다. 1~12차시 동안 궁금한 곳을 고르고, 질문하고, 자료를 견주고, 알려 준 차례를 칠판에 다시 적으며 슬기로운 생활을 마무리한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '이렇게 물어요', slots: [{ id: 'e1', label: '"코알라는 유칼립투스 잎을 먹어요"' }, { id: 'e2', label: '"낙타는 속눈썹이 길어요"' }], cards: ['다른 잎도 먹어요?', '속눈썹이 왜 길어요?'] }, prompt: '발표 내용에 맞는 질문을 이어 보세요.', target: { match: { e1: '다른 잎도 먹어요?', e2: '속눈썹이 왜 길어요?' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '친구 발표를 들을 때 알맞은 것은?', options: ['끝까지 듣고 손 들어 물어요', '중간에 끼어들어 말해요', '다른 책을 봐요'], answer: 0, difficulty: 0.05, explain: '끝까지 들어야 친구가 하고 싶은 말을 다 알 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '모둠 발표회',
      items: [
        { type: 'table', prompt: '모둠 친구의 발표를 듣고 쓰세요.', columns: ['친구가 알아본 곳', '새로 안 것', '내 질문'], rows: 3 },
        { type: 'choice', prompt: '"사막여우는 귀가 커요" 발표에 알맞은 질문에 ○ 하세요.', options: ['귀가 왜 커요?', '너 몇 살이야?', '바다는 왜 짜요?'], answer: '귀가 왜 커요?' },
        { type: 'check', prompt: '발표를 들을 때 지킨 것에 ✓ 하세요.', options: ['친구를 보았어요', '끝까지 들었어요', '손 들고 물었어요'] },
        { type: 'short', prompt: '다음 발표 때 더 잘하고 싶은 것을 쓰세요.' },
      ],
      easy: {
        note: '친구 발표에 나온 낱말로 질문을 만들어요.',
        items: [
          { type: 'table', prompt: '친구가 알아본 곳을 쓰세요.', columns: ['친구', '알아본 곳'], rows: 2 },
          { type: 'choice', prompt: '좋은 듣기에 ○ 하세요.', options: ['끝까지 들어요', '장난쳐요'], answer: '끝까지 들어요' },
          { type: 'draw', prompt: '친구 발표에서 기억나는 것을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 짝에 초록 테두리가 생기고, 마음 크기는 세 칸이에요. 발표는 문장 틀 세 줄로 해요.',
      base: '모둠에서 발표하고 질문 하나를 해요. 잇기와 고르기 뒤 확인을 눌러요.',
      challenge: '발표에 상상한 것과 그 까닭을 덧붙이고, 친구 발표마다 질문을 하나씩 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 질문이 발표와 관계없다 → 친구 발표에 나온 낱말을 하나 넣어 묻게 한다. ② 발표 시간이 길어진다 → 타이머가 울리면 끝인사로 마치게 한다. ③ 상상이 다른 친구를 \'틀렸다\'고 한다 → 상상에는 맞고 틀림이 없다는 것을 짚는다. 26명이면 6~7모둠이 동시에 발표하고, 교사는 모둠을 돌며 질문의 질을 살핀다.',
  }));

  // ───────────────────────── 13~16차시: 여러 나라 옷·음식·인사·집 견주기(생활 맥락 이해) ─────────────────────────

  lessons.push(L(13, {
    title: '여러 나라 옷을 우리 옷과 견주어 보기',
    objective: '여러 나라의 전통 옷을 나라와 잇고, 옷이 다른 까닭을 날씨와 생활에서 찾아 말할 수 있다.',
    illustration: ART('children in paper-cut traditional clothes from Korea, Japan, Vietnam and India standing together and smiling, with a sun and a snowflake above them', '여러 나라의 옷', [
      { motif: 'flower', x: 110, y: 226 }, { motif: 'snow', x: 380, y: 84, s: 0.6 }, { motif: 'flower', x: 390, y: 228, color: 'lavender' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"설날에 한복을 입어 본 적 있나요? 한복은 언제 입어요?" 명절·잔치 같은 대답을 듣는다. "다른 나라에도 그 나라의 전통 옷이 있어요. 그 나라 사람들도 평소에는 우리처럼 티셔츠와 바지를 많이 입고, 특별한 날에 전통 옷을 입곤 해요." 시연 단추로 \'기모노\'가 \'일본\'과 이어지는 모습을 보여 준다.',
        student: '한복을 입었던 날을 떠올려 짝에게 말해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '어느 나라 옷?', slots: [{ id: 's1', label: '일본' }], cards: ['기모노', '아오자이'], shuffle: false }, sequence: [{ match: { s1: '기모노' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 옷과 나라 잇고 날씨로 나누기', minutes: 13, tool: 'mindmap',
            teacher: '옷 사진을 한 장씩 보여 주며 "이 옷은 어느 나라 옷일까요?" 하고 묻는다. 맞히는 것보다 우리 한복과 닮은 점·다른 점을 말하는 데 시간을 쓴다. 더운 곳 옷과 추운 곳 옷을 나눌 때 "이 옷을 한여름에 입으면 어떨까요?" 하고 몸으로 느껴 보게 한다.',
            task: '전통 옷과 나라를 잇고, 옷의 모습을 더운 곳과 추운 곳으로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '전통 옷과 나라를 이어 보세요.', toolOptions: { mode: 'match', topic: '어느 나라 옷?', slots: [{ id: 's1', label: '일본' }, { id: 's2', label: '베트남' }], cards: ['기모노', '아오자이'] },
                target: { match: { s1: '기모노', s2: '아오자이' } }, difficulty: 0.1 },
              { prompt: '세 나라의 전통 옷을 이어 보세요.', toolOptions: { mode: 'match', topic: '어느 나라 옷?', slots: [{ id: 's1', label: '대한민국' }, { id: 's2', label: '인도' }, { id: 's3', label: '영국 스코틀랜드' }], cards: ['한복', '사리', '킬트'] },
                target: { match: { s1: '한복', s2: '사리', s3: '킬트' } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['한복', '사리', '킬트', '기모노'] } } } },
              { prompt: '옷의 모습을 더운 곳과 추운 곳에 알맞은 것으로 나누어 보세요.', toolOptions: { topic: '어디에 알맞을까?', slots: ['더운 곳', '추운 곳'], cards: ['얇고 바람이 잘 통하는 옷', '털이 달린 두꺼운 옷', '햇빛을 가리는 넓은 모자', '털모자와 털장화'] },
                target: { sort: { '더운 곳': ['얇고 바람이 잘 통하는 옷', '햇빛을 가리는 넓은 모자'], '추운 곳': ['털이 달린 두꺼운 옷', '털모자와 털장화'] } }, difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 옷이 다른 까닭 찾기', minutes: 13, tool: 'mindmap',
            teacher: '"몽골 사람들은 왜 두껍고 긴 옷(델)을 입었을까요?" 몽골의 겨울이 아주 춥다는 것을 알려 주고 까닭을 잇게 한다. "이상해요"라고 말하는 학생에게 "그곳에 살면 그 옷이 가장 편할 거예요. 우리 한복을 처음 본 친구는 어떻게 말할까요?"라고 되묻는다.',
            task: '옷의 모습과 그렇게 입는 까닭을 잇고, 다른 나라 옷을 보고 할 말을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '옷의 모습과 그렇게 입는 까닭을 이어 보세요.', toolOptions: { mode: 'match', topic: '왜 그렇게 입을까?', slots: [{ id: 's1', label: '몽골의 델은 두껍고 길어요' }, { id: 's2', label: '베트남의 논라 모자는 챙이 넓어요' }], cards: ['겨울이 아주 추워서', '햇빛과 비를 가리려고'] },
                target: { match: { s1: '겨울이 아주 추워서', s2: '햇빛과 비를 가리려고' } }, difficulty: 0.15 },
              { prompt: '다른 나라 옷 사진을 보고 할 말만 골라 보세요.', toolOptions: { mode: 'pick', basket: '할 말', cards: ['그 나라 날씨에 맞는 옷인가 봐', '나도 한번 입어 보고 싶어', '이상하고 우스워', '우리 옷만 멋져'] },
                target: { pick: ['그 나라 날씨에 맞는 옷인가 봐', '나도 한번 입어 보고 싶어'] }, difficulty: 0.1 },
              { prompt: '전통 옷에 대해 바르게 말한 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '바르게 말했어요', cards: ['그 나라 사람들도 평소에는 편한 옷을 많이 입어요', '전통 옷은 명절이나 잔치에 많이 입어요', '그 나라 사람들은 날마다 전통 옷만 입어요'] },
                target: { pick: ['그 나라 사람들도 평소에는 편한 옷을 많이 입어요', '전통 옷은 명절이나 잔치에 많이 입어요'] }, difficulty: 0.25,
                predict: { q: '우리도 날마다 한복을 입나요?', options: ['네', '아니요, 특별한 날에 입어요'], answer: 1 },
                conclude: '우리처럼 다른 나라 사람들도 전통 옷은 특별한 날에 많이 입어요.' },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"나라마다 옷이 다른 까닭은 무엇이었나요?" 날씨와 생활이라는 대답을 칠판에 적는다. 다음 시간에는 여러 나라 음식을 견주어 본다고 알린다. 출구 2번에서 \'이상해요\'를 고른 학생에게는 그 나라 친구가 한복을 보고 같은 말을 하면 어떨지 물어본다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '어디에 알맞을까?', slots: ['더운 곳', '추운 곳'], cards: ['짧은 소매 옷', '두꺼운 털외투', '얇은 천으로 만든 긴 옷'] }, prompt: '옷을 더운 곳과 추운 곳에 알맞은 것으로 나누어 보세요.', target: { sort: { '더운 곳': ['짧은 소매 옷', '얇은 천으로 만든 긴 옷'], '추운 곳': ['두꺼운 털외투'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '처음 보는 나라의 옷을 보았을 때 알맞은 생각은?', options: ['이상한 옷이에요', '그곳 날씨와 생활에 맞는 옷이에요', '입으면 안 되는 옷이에요'], answer: 1, difficulty: 0.1, explain: '옷은 그 나라의 날씨와 생활에 맞게 만들어졌어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '여러 나라의 옷',
      items: [
        { type: 'figure', wide: true, prompt: '나라와 전통 옷을 선으로 이으세요.', tool: 'mindmap', figures: [{ options: { mode: 'match', topic: '어느 나라 옷?', slots: [{ id: 's1', label: '일본' }, { id: 's2', label: '베트남' }, { id: 's3', label: '대한민국' }], cards: ['아오자이', '한복', '기모노'] }, caption: '' }], answer: '일본-기모노, 베트남-아오자이, 대한민국-한복' },
        { type: 'choice', prompt: '추운 곳에 알맞은 옷에 ○ 하세요.', options: ['털이 달린 두꺼운 옷', '얇은 반소매 옷', '넓은 챙 모자'], answer: '털이 달린 두꺼운 옷' },
        { type: 'table', prompt: '한복과 다른 나라 옷 하나를 견주어 쓰세요.', columns: ['', '한복', '다른 나라 옷( )'], cells: [['닮은 점', '', ''], ['다른 점', '', '']] },
        { type: 'draw', prompt: '입어 보고 싶은 다른 나라 옷을 그려 보세요.' },
      ],
      easy: {
        note: '더운 곳은 얇은 옷, 추운 곳은 두꺼운 옷!',
        items: [
          { type: 'choice', prompt: '우리나라 전통 옷에 ○ 하세요.', options: ['한복', '기모노'], answer: '한복' },
          { type: 'choice', prompt: '더운 곳에 알맞은 옷에 ○ 하세요.', options: ['얇은 옷', '털옷'], answer: '얇은 옷' },
          { type: 'draw', prompt: '다른 나라 옷을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 틀린 카드는 돌아와요. 옷 사진을 칠판에 붙여 두고 보며 해요.',
      base: '모두 이은 뒤 확인을 눌러요. 까닭을 한 문장으로 말해요.',
      challenge: '나라 잇기에 다른 나라 옷 카드가 하나 더 섞여 있어요. 한복과 견준 표를 두 칸 모두 채워요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 우리와 다른 옷을 \'이상하다\'고 여긴다 → 그곳 날씨·생활에 맞는 까닭을 먼저 찾게 하고, 한복을 처음 보는 외국 친구의 자리에서 생각해 보게 한다. ② 그 나라 사람들이 날마다 전통 옷만 입는다고 여긴다 → 우리도 한복은 특별한 날에 입는다는 것과 견준다. ③ 나라와 옷 이름을 외우는 데 그친다 → 닮은 점·다른 점 표에 시간을 더 쓴다. 사진은 그 나라 사람이 직접 입은 공개 자료를 쓰고, 친구에게 다른 나라 옷을 흉내 내어 입히는 놀이는 하지 않는다.',
  }));

  lessons.push(L(14, {
    title: '여러 나라 음식을 견주고 다른 까닭 찾기',
    objective: '여러 나라 음식을 나라와 잇고 재료에 따라 나누며, 음식이 다른 까닭을 그 나라에서 나는 것과 생활에서 찾아 말할 수 있다.',
    illustration: ART('a round paper table with bowls of rice noodles, sushi, pasta, curry with naan and Korean bibimbap, children from different countries sharing', '여러 나라의 음식', [
      { motif: 'leaf', x: 110, y: 224 }, { motif: 'flower', x: 390, y: 228 }, { motif: 'sun', x: 410, y: 56, s: 0.5 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"우리나라 사람들이 자주 먹는 음식은 무엇이 있나요?" 밥, 김치, 국 같은 대답을 듣는다. "다른 나라 사람들은 무엇을 자주 먹을까요?" 쌀국수·초밥·파스타·카레 사진을 보여 준다. 시연 단추로 \'쌀국수\'가 \'베트남\'과 이어지는 모습을 보여 준다.',
        student: '먹어 본 다른 나라 음식이 있으면 하나 말해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '어느 나라 음식?', slots: [{ id: 's1', label: '베트남' }], cards: ['쌀국수', '파스타'], shuffle: false }, sequence: [{ match: { s1: '쌀국수' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 음식과 나라, 음식과 재료 잇기', minutes: 13, tool: 'mindmap',
            teacher: '"쌀국수의 국수는 무엇으로 만들까요? 이름에 힌트가 있어요." 쌀과 밀가루 그림을 붙여 두고 음식마다 무엇으로 만들었는지 함께 찾는다. 인도의 난은 밀가루로 구운 빵이라는 것을 알려 준다. 음식 이름만 외우기보다 우리 음식과 닮은 점을 하나씩 말하게 한다.',
            task: '음식과 나라를 잇고, 음식을 쌀로 만든 것과 밀가루로 만든 것으로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '음식과 나라를 이어 보세요.', toolOptions: { mode: 'match', topic: '어느 나라 음식?', slots: [{ id: 's1', label: '일본' }, { id: 's2', label: '이탈리아' }], cards: ['초밥', '파스타'] },
                target: { match: { s1: '초밥', s2: '파스타' } }, difficulty: 0.1 },
              { prompt: '세 나라의 음식을 이어 보세요.', toolOptions: { mode: 'match', topic: '어느 나라 음식?', slots: [{ id: 's1', label: '베트남' }, { id: 's2', label: '멕시코' }, { id: 's3', label: '인도' }], cards: ['쌀국수', '타코', '카레와 난'] },
                target: { match: { s1: '쌀국수', s2: '타코', s3: '카레와 난' } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['쌀국수', '타코', '카레와 난', '초밥'] } } } },
              { prompt: '음식을 쌀로 만든 것과 밀가루로 만든 것으로 나누어 보세요.', toolOptions: { topic: '무엇으로 만들까?', slots: ['쌀로 만들어요', '밀가루로 만들어요'], cards: ['쌀국수', '파스타', '떡', '인도의 난'] },
                target: { sort: { '쌀로 만들어요': ['쌀국수', '떡'], '밀가루로 만들어요': ['파스타', '인도의 난'] } }, difficulty: 0.2 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 낯선 음식을 만났을 때', minutes: 13, tool: 'emotion',
            teacher: '"바다로 둘러싸인 나라는 어떤 음식이 많을까요?" 그곳에서 많이 나는 것으로 음식을 만든다는 것을 짚는다. 먹는 방법도 나라마다 달라 손으로 먹는 곳, 젓가락이나 포크를 쓰는 곳이 있다고 알려 준다. "손으로 먹으면 더러워요"라는 말에는 그곳에서는 손을 깨끗이 씻고 먹는 오랜 방법이라고 답해 준다.',
            task: '낯선 음식을 만났을 때 어떻게 할지 고르고, 먹는 방법이 다른 것에 대한 생각을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '급식에 처음 보는 멕시코 음식 타코가 나왔어요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '하준', situation: '급식에 처음 보는 타코가 나왔어요. 옆 친구가 "이상해, 안 먹어" 하고 말해요.', choices: [
                { id: 'no', text: '나도 "이상해" 하고 밀어 둬요', result: '어떤 맛인지 끝내 몰라요.', mood: '속상함', why: '먹어 보기도 전에 이상하다고 할 수 있을까요?' },
                { id: 'try', text: '"조금만 맛볼까?" 하고 먹어 봐요', result: '새로운 맛을 알게 되었어요.', mood: '신남' },
                { id: 'mock', text: '음식 이름을 놀려요', result: '그 음식을 좋아하는 친구가 속상해요.', mood: '속상함', why: '그 음식을 좋아하는 친구의 마음을 떠올려 봐요.' }] }, target: { choice: 'try' }, difficulty: 0.1 },
              { prompt: '먹는 방법이 다른 것에 대해 알맞은 생각만 골라 보세요.', toolOptions: { mode: 'pick', basket: '알맞은 생각', cards: ['먹는 방법은 나라마다 달라요', '그곳에서는 손을 씻고 손으로 먹기도 해요', '손으로 먹으면 더러워요', '젓가락을 쓰는 나라만 맞아요'] },
                target: { pick: ['먹는 방법은 나라마다 달라요', '그곳에서는 손을 씻고 손으로 먹기도 해요'] }, difficulty: 0.2,
                predict: { q: '우리처럼 젓가락을 쓰는 나라는 우리나라뿐일까요?', options: ['우리나라뿐이에요', '다른 나라도 있어요'], answer: 1 },
                conclude: '중국·일본·베트남 사람들도 젓가락을 써요. 먹는 방법은 여러 가지예요.' },
              { prompt: '처음 보는 음식을 먹어 볼 때 걱정되는 마음의 크기를 솔직하게 골라 보세요. 정답은 없어요.', toolOptions: { mode: 'scale', situation: '처음 보는 나라의 음식을 한 숟가락 먹어 보려고 해요.', feeling: '걱정', after: '걱정돼도 조금씩 맛보면 새로운 맛을 알 수 있어요.' }, target: { level: 'any' }, difficulty: 0.05 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"음식이 나라마다 다른 까닭은 무엇이었나요?" 그곳에서 나는 재료와 생활이라는 대답을 칠판에 적는다. 가족과 다른 나라 음식을 먹어 본 경험을 하나 물어 오게 한다. 음식 알레르기가 있는 학생은 맛보기 대신 사진으로 함께하게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '왜 그런 음식을?', slots: [{ id: 'e1', label: '바다로 둘러싸인 일본' }, { id: 'e2', label: '쌀농사를 많이 짓는 베트남' }], cards: ['생선 음식이 많아요', '쌀국수를 즐겨 먹어요'] }, prompt: '나라의 모습과 즐겨 먹는 음식을 이어 보세요.', target: { match: { e1: '생선 음식이 많아요', e2: '쌀국수를 즐겨 먹어요' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '친구가 처음 보는 음식을 보고 "이상해"라고 해요. 알맞은 말은?', options: ['"맞아, 이상해"', '"그 나라 사람들이 즐겨 먹는 음식이래"', '"버리자"'], answer: 1, difficulty: 0.1, explain: '처음 보는 음식도 그 나라 사람들에게는 익숙하고 맛있는 음식이에요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '여러 나라의 음식',
      items: [
        { type: 'figure', wide: true, prompt: '나라와 음식을 선으로 이으세요.', tool: 'mindmap', figures: [{ options: { mode: 'match', topic: '어느 나라 음식?', slots: [{ id: 's1', label: '이탈리아' }, { id: 's2', label: '일본' }, { id: 's3', label: '베트남' }], cards: ['쌀국수', '파스타', '초밥'] }, caption: '' }], answer: '이탈리아-파스타, 일본-초밥, 베트남-쌀국수' },
        { type: 'table', prompt: '음식을 무엇으로 만들었는지 쓰세요.', columns: ['음식', '쌀/밀가루'], cells: [['떡', ''], ['파스타', ''], ['쌀국수', '']] },
        { type: 'choice', prompt: '처음 보는 음식을 만났을 때 알맞은 행동에 ○ 하세요.', options: ['조금 맛보아요', '이상하다고 놀려요', '버려요'], answer: '조금 맛보아요' },
        { type: 'short', prompt: '먹어 보고 싶은 다른 나라 음식과 그 까닭을 쓰세요.' },
      ],
      easy: {
        note: '그 나라에서 많이 나는 것으로 음식을 만들어요.',
        items: [
          { type: 'choice', prompt: '쌀로 만든 음식에 ○ 하세요.', options: ['떡', '파스타'], answer: '떡' },
          { type: 'choice', prompt: '바다 가까운 나라에 많은 음식에 ○ 하세요.', options: ['생선 음식', '양고기 음식'], answer: '생선 음식' },
          { type: 'draw', prompt: '먹어 보고 싶은 음식을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 고른 행동의 결과가 바로 보여요.',
      base: '모두 이은 뒤 확인을 눌러요. 우리 음식과 닮은 점을 하나 말해요.',
      challenge: '나라 잇기에 다른 나라 음식 카드가 하나 더 있어요. 활동지 표에 음식 하나를 더 찾아 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 처음 보는 음식을 맛보기도 전에 \'이상하다\'고 한다 → 우리 김치를 처음 보는 외국 친구의 마음과 견주게 한다. ② 손으로 먹는 문화를 더럽다고 여긴다 → 손을 깨끗이 씻고 먹는 오랜 방법이라는 것을 알려 준다. ③ 나라 이름과 음식 이름을 섞어 외운다 → 지도에서 그 나라를 함께 짚는다. 실제 음식을 맛볼 때는 알레르기를 미리 확인한다.',
  }));

  lessons.push(L(15, {
    title: '여러 나라 인사말을 익혀 친구와 인사하기',
    objective: '여러 나라 인사말을 나라와 잇고, 짝과 세 나라 인사말로 인사를 주고받을 수 있다.',
    illustration: ART('children waving and bowing with paper speech bubbles saying hello in different languages, small flags made of paper triangles strung above', '안녕, 니하오, 봉주르!', [
      { motif: 'flower', x: 100, y: 226 }, { motif: 'star', x: 400, y: 80, s: 0.5 }, { motif: 'house', x: 390, y: 214, color: 'sky', s: 0.8 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"우리는 만나면 \'안녕하세요\' 하고 인사해요. 다른 나라 사람들은 어떻게 인사할까요?" 학생들이 아는 인사말(헬로, 니하오)을 먼저 듣는다. 시연 단추로 \'니하오\'가 \'중국\'과 이어지는 모습을 보여 준다. "말이 달라도 반갑다는 마음은 같아요."',
        student: '알고 있는 다른 나라 인사말이 있으면 하나 말해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '어느 나라 인사?', slots: [{ id: 's1', label: '중국' }], cards: ['니하오', '봉주르'], shuffle: false }, sequence: [{ match: { s1: '니하오' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 인사말과 나라 잇기', minutes: 12, tool: 'mindmap',
            teacher: '인사말을 하나씩 선생님이 먼저 말하고 학생들이 따라 하게 한 뒤 잇는다. 태국에서는 두 손을 가슴 앞에 모으며 인사하고, 인도의 \'나마스테\'도 두 손을 모은다는 것을 몸으로 보여 준다. 발음이 서툴러도 괜찮다는 것을 먼저 말해 준다.',
            task: '인사말 카드를 그 말을 쓰는 나라와 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '인사말과 나라를 이어 보세요.', toolOptions: { mode: 'match', topic: '어느 나라 인사?', slots: [{ id: 's1', label: '일본' }, { id: 's2', label: '프랑스' }], cards: ['곤니치와', '봉주르'] },
                target: { match: { s1: '곤니치와', s2: '봉주르' } }, difficulty: 0.1 },
              { prompt: '세 나라의 인사말을 이어 보세요.', toolOptions: { mode: 'match', topic: '어느 나라 인사?', slots: [{ id: 's1', label: '태국' }, { id: 's2', label: '인도' }, { id: 's3', label: '대한민국' }], cards: ['사와디캅', '나마스테', '안녕하세요'] },
                target: { match: { s1: '사와디캅', s2: '나마스테', s3: '안녕하세요' } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['사와디캅', '나마스테', '안녕하세요', '곤니치와'] } } } },
              { prompt: '인사말을 아시아 나라의 인사와 유럽 나라의 인사로 나누어 보세요.', toolOptions: { topic: '어느 대륙 인사?', slots: ['아시아', '유럽'], cards: ['니하오(중국)', '봉주르(프랑스)', '곤니치와(일본)', '올라(스페인)'] },
                target: { sort: { '아시아': ['니하오(중국)', '곤니치와(일본)'], '유럽': ['봉주르(프랑스)', '올라(스페인)'] } }, difficulty: 0.25,
                hints: ['괄호 속 나라 이름을 보고, 3차시 세계 지도에서 그 나라가 어느 대륙에 있었는지 떠올려요.', '우리나라 이웃 나라들은 우리와 같은 대륙에 있어요. 다시 나누어 보세요.', '중국과 일본은 아시아, 프랑스와 스페인은 유럽 나라예요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 짝과 여러 나라 말로 인사하기', minutes: 14, tool: 'emotion',
            teacher: '짝과 마주 서서 세 나라 인사말로 인사를 주고받게 한다(5분). 태국·인도 인사는 두 손을 모으고, 일본 인사는 고개를 숙이며 하게 한다. 그다음 화면에서 서툰 발음을 듣고 웃는 상황을 함께 보며 "처음 배우는 말은 누구나 서툴러요"라고 말한다.',
            task: '짝과 세 나라 인사를 주고받고, 다른 나라 말을 배울 때 어떻게 할지 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '짝과 세 나라 인사말로 인사를 주고받았으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '친구가 "봉주르"를 서툴게 말했어요. 옆 친구들이 웃어요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '서아', situation: '서아가 "봉주르"를 처음 말해 보는데 발음이 서툴러서 몇몇 친구가 웃었어요.', choices: [
                { id: 'laugh', text: '같이 웃어요', result: '서아가 부끄러워 다시 말하지 않아요.', mood: '속상함', why: '웃음을 들은 서아의 마음을 떠올려 봐요.' },
                { id: 'cheer', text: '"나도 처음엔 어려웠어, 같이 해 보자" 하고 말해요', result: '서아가 다시 웃으며 인사했어요.', mood: '고마움' }] }, target: { choice: 'cheer' }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { choices: [
                  { id: 'laugh', text: '같이 웃어요', result: '서아가 부끄러워 다시 말하지 않아요.', mood: '속상함', why: '웃음을 들은 서아의 마음을 떠올려 봐요.' },
                  { id: 'cheer', text: '"나도 처음엔 어려웠어, 같이 해 보자" 하고 말해요', result: '서아가 다시 웃으며 인사했어요.', mood: '고마움' },
                  { id: 'fix', text: '"틀렸어, 다시 해" 하고 여러 번 시켜요', result: '서아가 인사가 싫어졌어요.', mood: '속상함', why: '여러 번 틀렸다고 하면 서아가 어떤 마음일까요?' }] } } } },
              { prompt: '다른 나라 말을 배울 때 알맞은 마음만 골라 보세요.', toolOptions: { mode: 'pick', basket: '알맞은 마음', cards: ['서툴러도 해 볼래요', '그 나라 친구를 만나면 써 볼래요', '우리말만 배우면 돼요'] },
                target: { pick: ['서툴러도 해 볼래요', '그 나라 친구를 만나면 써 볼래요'] }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 배운 인사말 가운데 내일 아침 친구에게 해 보고 싶은 말은 무엇인가요?" 다 함께 세 나라 말로 인사하고 마친다. 우리 반에 다른 나라 말을 아는 친구가 있으면 그 친구에게 인사말을 배워 보자고 제안한다(원하는 친구만).',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '어느 나라 인사?', slots: [{ id: 'e1', label: '중국' }, { id: 'e2', label: '스페인' }], cards: ['니하오', '올라'] }, prompt: '인사말과 나라를 이어 보세요.', target: { match: { e1: '니하오', e2: '올라' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '말이 달라도 인사에 담긴 마음은 무엇일까요?', options: ['반가운 마음', '화난 마음', '심심한 마음'], answer: 0, difficulty: 0.05, explain: '어느 나라 인사든 만나서 반갑다는 마음을 전해요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '여러 나라 인사말',
      items: [
        { type: 'figure', wide: true, prompt: '나라와 인사말을 선으로 이으세요.', tool: 'mindmap', figures: [{ options: { mode: 'match', topic: '어느 나라 인사?', slots: [{ id: 's1', label: '일본' }, { id: 's2', label: '프랑스' }, { id: 's3', label: '인도' }], cards: ['나마스테', '곤니치와', '봉주르'] }, caption: '' }], answer: '일본-곤니치와, 프랑스-봉주르, 인도-나마스테' },
        { type: 'table', prompt: '짝과 해 본 인사를 쓰세요.', columns: ['나라', '인사말', '몸짓'], cells: [['태국', '', ''], ['일본', '', ''], ['', '', '']] },
        { type: 'choice', prompt: '친구가 다른 나라 말을 서툴게 말하면?', options: ['함께 해 보자고 해요', '크게 웃어요', '틀렸다고 놀려요'], answer: '함께 해 보자고 해요' },
        { type: 'short', prompt: '가장 마음에 드는 인사말과 그 까닭을 쓰세요.' },
      ],
      easy: {
        note: '말이 달라도 반가운 마음은 같아요.',
        items: [
          { type: 'choice', prompt: '중국 인사말에 ○ 하세요.', options: ['니하오', '봉주르'], answer: '니하오' },
          { type: 'choice', prompt: '우리나라 인사말에 ○ 하세요.', options: ['안녕하세요', '곤니치와'], answer: '안녕하세요' },
          { type: 'draw', prompt: '친구와 인사하는 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 칠판의 인사말 카드를 보며 이어요.',
      base: '모두 이은 뒤 확인을 눌러요. 짝과 세 나라 인사를 해요.',
      challenge: '나라 잇기에 다른 나라 인사말이 섞여 있고, 대륙으로 나누기를 지도 없이 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 서툰 발음을 놀린다 → 처음 배우는 말은 누구나 서툴다는 것을 선생님이 먼저 서툴게 해 보이며 보여 준다. ② 나라와 대륙을 헷갈린다 → 3차시 세계 지도를 다시 띄운다. ③ 다른 나라에서 온 친구에게 그 나라 말을 억지로 시킨다 → 원하는 친구만 알려 주게 한다. 사실 확인: 태국 인사 \'사와디캅\'은 남자가 쓰는 말이고 여자는 \'사와디카\'라고 한다. 스페인어 \'올라\'는 스페인과 중남미 여러 나라에서 쓴다.',
  }));

  lessons.push(L(16, {
    title: '여러 나라 집을 보고 그렇게 지은 까닭 찾기',
    objective: '여러 나라의 집 모습과 그렇게 지은 까닭을 잇고, 사는 곳의 날씨와 생활에 맞게 집이 다르다는 것을 말할 수 있다.',
    illustration: ART('a row of paper houses from around the world: a round Mongolian ger, a house on stilts over water, a snow igloo, a thick mud-brick house and a Korean hanok', '여러 나라의 집', [
      { motif: 'house', x: 120, y: 214, color: 'peach' }, { motif: 'snow', x: 380, y: 84, s: 0.6 }, { motif: 'wave', x: 300, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"우리 할머니 댁 옛날 집(한옥)은 겨울에 어떻게 따뜻하게 지냈을까요?" 온돌 사진을 보여 주며 바닥을 데워 따뜻하게 했다고 알려 준다. "다른 나라 사람들도 그곳 날씨와 생활에 맞게 집을 지었어요." 시연 단추로 \'게르\'가 까닭과 이어지는 모습을 보여 준다.',
        student: '우리 집에서 따뜻하게 하거나 시원하게 하는 것을 하나 말해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '왜 그렇게 지었을까?', slots: [{ id: 's1', label: '몽골의 게르는 접어서 옮겨요' }], cards: ['가축이 먹을 풀을 찾아 옮겨 다녀요', '바다에서 고기를 잡아요'], shuffle: false }, sequence: [{ match: { s1: '가축이 먹을 풀을 찾아 옮겨 다녀요' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 집 모습과 까닭 잇기', minutes: 14, tool: 'mindmap',
            teacher: '집 사진을 하나씩 보여 주며 "이 집에서 가장 눈에 띄는 것은 무엇이에요?" 하고 먼저 묻는다(기둥, 둥근 지붕, 두꺼운 흙벽). 그다음 "왜 그렇게 지었을까요?"로 까닭을 찾게 한다. 이글루는 이누이트가 사냥을 나갔을 때 잠시 머물려고 눈으로 지은 집이라는 것을 덧붙인다.',
            task: '집의 모습과 그렇게 지은 까닭을 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '집의 모습과 그렇게 지은 까닭을 이어 보세요.', toolOptions: { mode: 'match', topic: '왜 그렇게 지었을까?', slots: [{ id: 's1', label: '물 위에 기둥을 세운 집' }, { id: 's2', label: '바닥을 데우는 한옥 온돌' }], cards: ['물가에서 고기를 잡으며 살아요', '겨울이 추워 바닥을 따뜻하게 해요'] },
                target: { match: { s1: '물가에서 고기를 잡으며 살아요', s2: '겨울이 추워 바닥을 따뜻하게 해요' } }, difficulty: 0.1 },
              { prompt: '세 집의 모습과 까닭을 이어 보세요.', toolOptions: { mode: 'match', topic: '왜 그렇게 지었을까?', slots: [{ id: 's1', label: '접어서 옮기는 몽골 게르' }, { id: 's2', label: '두꺼운 흙벽돌 집' }, { id: 's3', label: '눈을 쌓아 지은 이글루' }], cards: ['가축이 먹을 풀을 찾아 옮겨 다녀요', '사막의 뜨거운 낮 더위를 막아요', '사냥하러 나가서 잠시 머물러요'] },
                target: { match: { s1: '가축이 먹을 풀을 찾아 옮겨 다녀요', s2: '사막의 뜨거운 낮 더위를 막아요', s3: '사냥하러 나가서 잠시 머물러요' } }, difficulty: 0.25,
                levels: { challenge: { toolOptions: { cards: ['가축이 먹을 풀을 찾아 옮겨 다녀요', '사막의 뜨거운 낮 더위를 막아요', '사냥하러 나가서 잠시 머물러요', '높은 곳에서 놀려고 지었어요'] } } } },
              { prompt: '집을 짓는 까닭을 날씨 때문과 하는 일 때문으로 나누어 보세요.', toolOptions: { topic: '무엇 때문에?', slots: ['날씨 때문에', '하는 일 때문에'], cards: ['흙벽으로 더위를 막아요', '풀을 찾아 집을 옮겨요', '온돌로 추위를 이겨요', '고기 잡기 좋게 물가에 지어요'] },
                target: { sort: { '날씨 때문에': ['흙벽으로 더위를 막아요', '온돌로 추위를 이겨요'], '하는 일 때문에': ['풀을 찾아 집을 옮겨요', '고기 잡기 좋게 물가에 지어요'] } }, difficulty: 0.3 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 다른 집을 보는 생각 나누기', minutes: 12, tool: 'emotion',
            teacher: '"게르를 보고 \'텐트에 사는 건 불편하고 이상해\'라고 말하는 친구가 있어요. 어떻게 생각해요?" 그곳 사람들에게는 가장 알맞은 집이라는 것을 까닭과 함께 말하게 한다. 마지막에 활동지에 \'살아 보고 싶은 세계의 집\'을 그리고 까닭을 쓰게 한다.',
            task: '다른 나라 집을 보고 한 말에 어떻게 답할지 고르고, 살아 보고 싶은 집을 그려요.',
            levels: CARD_LV,
            items: [
              { prompt: '준호가 게르 사진을 보고 "텐트에 살다니 이상해" 하고 말해요. 어떻게 답할까요?', toolOptions: { mode: 'branch', who: '준호', situation: '준호가 몽골 게르 사진을 보고 "텐트에 살다니 이상해" 하고 말해요.', choices: [
                { id: 'agree', text: '"맞아, 이상해" 하고 말해요', result: '게르에 사는 사람들의 생활을 오해하게 돼요.', mood: '걱정', why: '게르는 왜 접어서 옮기게 지었는지 떠올려 봐요.' },
                { id: 'why', text: '"풀을 찾아 옮겨 다니려고 그렇게 지었대" 하고 말해요', result: '준호가 "그렇구나, 똑똑한 집이네" 했어요.', mood: '기쁨' }] }, target: { choice: 'why' }, difficulty: 0.1 },
              { prompt: '다른 나라 집에 대해 알맞은 생각만 골라 보세요.', toolOptions: { mode: 'pick', basket: '알맞은 생각', cards: ['그곳 날씨에 맞게 지은 집이에요', '그곳에서 하는 일에 알맞은 집이에요', '우리 집과 다르면 불편한 집이에요'] },
                target: { pick: ['그곳 날씨에 맞게 지은 집이에요', '그곳에서 하는 일에 알맞은 집이에요'] }, difficulty: 0.15 },
              { prompt: '활동지에 살아 보고 싶은 세계의 집을 그리고 까닭을 썼으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"13~16차시 동안 옷, 음식, 인사, 집을 견주어 보았어요. 나라마다 다른 까닭을 한마디로 말하면?" 날씨와 생활에 맞게 달라졌다는 것을 함께 정리한다. 서너 명이 살아 보고 싶은 집을 까닭과 함께 소개한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '왜 그렇게 지었을까?', slots: [{ id: 'e1', label: '지붕이 아주 뾰족한 집' }, { id: 'e2', label: '창문이 작은 흙집' }], cards: ['눈이 많이 와 눈이 미끄러져 내려요', '뜨거운 햇빛이 덜 들어와요'] }, prompt: '집의 모습과 그렇게 지은 까닭을 이어 보세요.', target: { match: { e1: '눈이 많이 와 눈이 미끄러져 내려요', e2: '뜨거운 햇빛이 덜 들어와요' } }, difficulty: 0.2 },
          { type: 'choice', prompt: '나라마다 집 모습이 다른 까닭은 무엇일까요?', options: ['날씨와 생활이 달라서', '그냥 멋있게 보이려고', '이상해서'], answer: 0, difficulty: 0.1, explain: '집은 그곳 날씨와 하는 일에 맞게 지어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '여러 나라의 집',
      items: [
        { type: 'figure', wide: true, prompt: '집과 그렇게 지은 까닭을 선으로 이으세요.', tool: 'mindmap', figures: [{ options: { mode: 'match', topic: '왜?', slots: [{ id: 's1', label: '몽골 게르' }, { id: 's2', label: '물 위 기둥 집' }], cards: ['물가에서 고기를 잡아요', '풀을 찾아 옮겨 다녀요'] }, caption: '' }], answer: '몽골 게르-풀을 찾아 옮겨 다녀요, 물 위 기둥 집-물가에서 고기를 잡아요' },
        { type: 'choice', prompt: '바닥을 데워 겨울을 따뜻하게 지내는 우리 옛집에 ○ 하세요.', options: ['한옥 온돌', '이글루', '게르'], answer: '한옥 온돌' },
        { type: 'draw', wide: true, prompt: '살아 보고 싶은 세계의 집을 그리세요.' },
        { type: 'short', prompt: '그 집에 살아 보고 싶은 까닭을 쓰세요.' },
      ],
      easy: {
        note: '날씨와 하는 일을 떠올려요.',
        items: [
          { type: 'choice', prompt: '눈으로 지은 집에 ○ 하세요.', options: ['이글루', '한옥'], answer: '이글루' },
          { type: 'choice', prompt: '접어서 옮기는 집에 ○ 하세요.', options: ['게르', '흙집'], answer: '게르' },
          { type: 'draw', prompt: '살아 보고 싶은 집을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 고른 답의 결과가 바로 보여요.',
      base: '모두 이은 뒤 확인을 눌러요. 까닭을 날씨와 하는 일로 나누어요.',
      challenge: '까닭 잇기에 그럴듯한 함정 카드가 하나 더 있어요. 그린 집의 까닭을 날씨와 하는 일 두 가지로 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 우리 집과 다르면 불편하다고 여긴다 → 그 집이 그곳에서 어떤 문제를 풀어 주는지 찾게 한다. ② 이글루에 늘 산다고 여긴다 → 이누이트는 사냥을 나가 잠시 머물 때 이글루를 지었고 지금은 대부분 다른 집에 산다고 알려 준다. ③ 까닭을 \'멋있어서\'로만 말한다 → 날씨·하는 일 두 갈래를 칠판에 적어 두고 고르게 한다.',
  }));

  // ───────────────────────── 17~20차시: 다른 나라 놀이 함께 하기(바른 생활 실천) ─────────────────────────

  lessons.push(L(17, {
    title: '일본 놀이 다루마상가 고론다 함께 하기',
    objective: '일본 놀이 \'다루마상가 고론다\'의 규칙을 차례대로 익혀 친구와 함께 하고, 우리 놀이와 같은 점과 다른 점을 말할 수 있다.',
    illustration: ART('children frozen in funny poses in a paper schoolyard while one child faces a tree with eyes covered, a small round daruma doll beside the tree', '다루마상가 고론다!', [
      { motif: 'tree', x: 400, y: 210 }, { motif: 'flower', x: 110, y: 228 }, { motif: 'cloud', x: 250, y: 60, s: 0.6 }]),
    safety: ['책상과 의자를 치운 넓은 곳이나 강당에서 해요.', '뛰지 않고 걸어서 움직여요.', '술래를 밀거나 옷을 잡아당기지 않아요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"\'무궁화 꽃이 피었습니다\' 놀이를 해 본 적 있나요?" 규칙을 한두 명에게 말하게 한다. "일본에도 아주 비슷한 놀이가 있어요. \'다루마상가 고론다\'는 \'오뚝이 인형 다루마가 넘어졌다\'는 뜻이에요." 시연 단추로 놀이 차례가 놓이는 모습을 보여 준다.',
        student: '무궁화 꽃이 피었습니다 놀이의 규칙을 하나 떠올려 봐요.',
        demo: { tool: 'story', options: { cards: [{ id: 'call', text: '술래가 벽을 보고 외쳐요', motif: 'tree' }, { id: 'walk', text: '친구들이 술래에게 다가가요', motif: 'flower' }, { id: 'stop', text: '술래가 돌아보면 멈춰요', motif: 'star' }], slots: ['1', '2', '3'], shuffle: false }, sequence: [{ order: ['call', 'walk', 'stop'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 놀이 규칙과 안전 약속 익히기', minutes: 9, tool: 'story',
            teacher: '"다루마상가 고론다"를 다 같이 세 번 따라 말한다. 규칙 카드를 놓은 뒤 무궁화 꽃 놀이와 같은 점·다른 점을 나눈다. "이름이 다르니 다른 놀이예요"라고 하는 학생에게 "하는 방법은 어떤가요?"라고 되묻는다. 뛰다 부딪치지 않도록 걸어서만 움직인다는 약속을 꼭 짚는다.',
            task: '놀이 규칙을 차례대로 놓고, 우리 놀이와 같은 점·다른 점을 나누고, 안전 약속을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '다루마상가 고론다 놀이의 차례대로 카드를 놓아 보세요.', toolOptions: { cards: [{ id: 'call', text: '술래가 벽을 보고 "다루마상가 고론다" 외쳐요', motif: 'tree' }, { id: 'walk', text: '외치는 동안 친구들이 다가가요', motif: 'flower' }, { id: 'turn', text: '술래가 뒤돌아보면 모두 멈춰요', motif: 'star' }, { id: 'catch', text: '움직인 친구는 술래와 손을 잡아요', motif: 'sun' }], slots: ['1', '2', '3', '4'] },
                target: { order: ['call', 'walk', 'turn', 'catch'] }, difficulty: 0.15 },
              { prompt: '무궁화 꽃이 피었습니다 놀이와 같은 점, 다른 점으로 나누어 보세요.', toolOptions: { mode: 'sort', cards: ['술래가 돌아보면 멈춰요', '외치는 말이 일본말이에요', '움직이면 술래에게 걸려요', '놀이 이름이 오뚝이 인형 이야기예요'], slots: ['같은 점', '다른 점'] },
                target: { sort: { '같은 점': ['술래가 돌아보면 멈춰요', '움직이면 술래에게 걸려요'], '다른 점': ['외치는 말이 일본말이에요', '놀이 이름이 오뚝이 인형 이야기예요'] } }, difficulty: 0.2 },
              { prompt: '놀이할 때 지킬 안전 약속만 골라 보세요.', toolOptions: { mode: 'pick', basket: '안전 약속', cards: ['걸어서만 다가가요', '술래를 밀지 않아요', '빨리 가려고 뛰어요', '넓은 곳에서 해요'] },
                target: { pick: ['걸어서만 다가가요', '술래를 밀지 않아요', '넓은 곳에서 해요'] }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['걸어서만 다가가요', '술래를 밀지 않아요', '빨리 가려고 뛰어요', '넓은 곳에서 해요', '술래 등을 세게 쳐서 알려요'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 함께 놀고 마음 나누기', minutes: 18, tool: 'emotion',
            teacher: '강당이나 교실 뒤 넓은 곳에서 두 모둠씩 번갈아 12분 동안 놀이한다. 술래는 돌아가며 맡는다. 걸린 친구가 억울해하면 "다음 판에 다시 도전해요" 하고 바로 다음 판을 시작한다. 놀이가 끝나면 자리로 돌아와 걸렸을 때 어떻게 할지, 놀이한 내 마음이 어땠는지 고른다. 마음 크기는 정답이 없으니 솔직하게 고르게 한다.',
            task: '친구들과 놀이를 하고, 걸렸을 때 어떻게 할지 고르고, 놀이한 마음을 솔직하게 골라요.',
            levels: { easy: { live: true, instant: true, steps: 3 }, base: {}, challenge: {} },
            items: [
              { prompt: '친구들과 다루마상가 고론다를 세 판 넘게 했으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '술래가 돌아볼 때 내가 살짝 움직여 걸렸어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '술래가 뒤돌아볼 때 몸이 살짝 흔들려서 술래가 내 이름을 불렀어요.', choices: [
                { id: 'deny', text: '"안 움직였어!" 하고 우겨요', result: '친구들끼리 다투어 놀이가 멈췄어요.', mood: '화남', why: '우기면 놀이가 어떻게 될까요?' },
                { id: 'accept', text: '"내가 움직였네" 하고 술래에게 가요', result: '놀이가 즐겁게 이어졌어요.', mood: '편안함' },
                { id: 'quit', text: '화가 나서 놀이를 그만둬요', result: '함께 놀던 친구들이 아쉬워해요.', mood: '속상함', why: '다음 판에 다시 도전할 수 있어요.' }] }, target: { choice: 'accept' }, difficulty: 0.1 },
              { prompt: '처음 해 본 일본 놀이가 얼마나 재미있었는지 솔직하게 골라 보세요. 정답은 없어요.', toolOptions: { mode: 'scale', situation: '처음 해 본 일본 놀이 \'다루마상가 고론다\'를 친구들과 했어요.', feeling: '신남', after: '재미있었던 까닭이나 아쉬웠던 까닭을 짝에게 말해 봐요.' }, target: { level: 'any' }, difficulty: 0.05 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"다른 나라 놀이를 해 보니 우리 놀이와 어떤 점이 닮았나요?" 두세 명의 대답을 듣는다. 멀리 떨어진 나라 어린이들도 우리와 비슷한 놀이를 즐긴다는 것을 정리한다. 다음 시간에는 아프리카의 씨앗 놀이를 해 본다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { cards: [{ id: 'a', text: '술래가 뒤돌아봐요', motif: 'star' }, { id: 'b', text: '술래가 벽을 보고 외쳐요', motif: 'tree' }, { id: 'c', text: '움직인 친구가 걸려요', motif: 'sun' }], slots: ['1', '2', '3'] }, prompt: '놀이 차례대로 카드를 놓아 보세요.', target: { order: ['b', 'a', 'c'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '다루마상가 고론다와 가장 닮은 우리 놀이는?', options: ['무궁화 꽃이 피었습니다', '공기놀이', '윷놀이'], answer: 0, difficulty: 0.1, explain: '술래가 돌아볼 때 멈추는 규칙이 같아요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '다루마상가 고론다',
      items: [
        { type: 'figure', wide: true, prompt: '놀이 차례대로 1~4 번호를 쓰세요.', tool: 'story', figures: [{ options: { cards: [{ id: 'turn', text: '술래가 뒤돌아봐요' }, { id: 'call', text: '술래가 벽을 보고 외쳐요' }, { id: 'catch', text: '움직인 친구는 술래와 손을 잡아요' }, { id: 'walk', text: '친구들이 다가가요' }], slots: ['1', '2', '3', '4'], shuffle: false }, caption: '' }], answer: '외쳐요 → 다가가요 → 뒤돌아봐요 → 손을 잡아요' },
        { type: 'table', prompt: '무궁화 꽃이 피었습니다 놀이와 견주어 쓰세요.', columns: ['같은 점', '다른 점'], rows: 2 },
        { type: 'check', prompt: '놀이할 때 지킨 약속에 ✓ 하세요.', options: ['걸어서만 움직였어요', '술래를 밀지 않았어요', '걸리면 바로 인정했어요'] },
        { type: 'short', prompt: '놀이를 해 본 내 마음을 쓰세요.' },
      ],
      easy: {
        note: '술래가 돌아보면 꼼짝 마!',
        items: [
          { type: 'choice', prompt: '술래가 돌아보면 어떻게 하나요?', options: ['멈춰요', '뛰어요'], answer: '멈춰요' },
          { type: 'choice', prompt: '놀이할 때 어떻게 움직이나요?', options: ['걸어서', '뛰어서'], answer: '걸어서' },
          { type: 'draw', prompt: '놀이하는 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 초록 테두리가 생기고, 마음 크기는 세 칸이에요. 놀이에서는 술래를 먼저 해 보지 않아도 돼요.',
      base: '차례와 같은 점·다른 점을 놓은 뒤 확인을 눌러요. 술래를 한 번 맡아요.',
      challenge: '놀이 뒤 규칙 하나를 바꾸어(예: 멈출 때 동물 흉내) 모둠이 함께 해 보아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 이름이 낯설어 다른 놀이라고만 여긴다 → 규칙을 하나씩 견주게 한다. ② 걸렸을 때 우긴다 → 놀이 전 \'걸리면 인정\' 약속을 함께 말한다. ③ 놀이에 들뜬 채 뛴다 → 바로 멈추고 안전 약속을 다시 말한 뒤 이어 간다. 술래와 손을 잡은 친구들은 다른 친구가 술래를 치면 풀려나는 방식으로 이어 가도 된다(우리 놀이와 같다).',
  }));

  lessons.push(L(18, {
    title: '달걀판으로 아프리카 씨앗 놀이 만칼라 하기',
    objective: '아프리카 씨앗 놀이 \'만칼라\'의 차례를 익혀 달걀판과 콩으로 짝과 놀이하고, 이기고 졌을 때 친구를 존중하는 말을 할 수 있다.',
    illustration: ART('two children facing each other over a paper egg carton board with small beans in each cup, a sun and an acacia tree in the background', '씨앗을 하나씩 옮겨요', [
      { motif: 'tree', x: 400, y: 210 }, { motif: 'sun', x: 90, y: 70, s: 0.6 }, { motif: 'leaf', x: 250, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"아프리카 여러 나라에서는 오래전부터 땅에 구멍을 파거나 나무판을 깎아 씨앗을 옮기는 놀이를 했어요. 그 놀이를 만칼라라고 불러요." 달걀판(12칸)과 콩 48개를 보여 준다. "칸마다 콩을 4개씩 넣고 시작해요." 시연 단추로 한 번 하는 차례가 놓이는 모습을 보여 준다.',
        student: '우리 놀이 가운데 작은 돌이나 콩을 쓰는 놀이를 떠올려 봐요.',
        demo: { tool: 'story', options: { cards: [{ id: 'pick', text: '내 칸 하나의 콩을 모두 집어요', motif: 'leaf' }, { id: 'drop', text: '다음 칸부터 하나씩 넣어요', motif: 'flower' }], slots: ['1', '2'], shuffle: false }, sequence: [{ order: ['pick', 'drop'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 만칼라 방법 익히기', minutes: 9, tool: 'story',
            teacher: '칠판에 큰 달걀판 그림을 붙이고 선생님과 학생 한 명이 한 차례를 해 보인다. "콩을 넣는 방향은 시계 바늘과 반대예요." 콩을 한 칸에 두 개씩 넣는 학생이 있으면 "한 칸에 하나씩"을 함께 소리 내어 말한다. 마지막 콩이 친구 칸에 들어가 그 칸이 2개나 3개가 되면 가져온다는 규칙을 실제 콩으로 보여 준다.',
            task: '한 차례에 하는 일을 차례대로 놓고, 규칙 문장의 빈칸을 채우고, 준비물을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '만칼라 한 차례에 하는 일을 차례대로 놓아 보세요.', toolOptions: { cards: [{ id: 'pick', text: '내 쪽 칸 하나의 콩을 모두 집어요', motif: 'leaf' }, { id: 'drop', text: '다음 칸부터 한 칸에 하나씩 넣어요', motif: 'flower' }, { id: 'look', text: '마지막 콩이 들어간 칸을 봐요', motif: 'star' }, { id: 'take', text: '친구 칸이 2개나 3개면 가져와요', motif: 'sun' }], slots: ['1', '2', '3', '4'] },
                target: { order: ['pick', 'drop', 'look', 'take'] }, difficulty: 0.2 },
              { prompt: '만칼라 규칙 문장의 빈칸에 알맞은 말을 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['4개', '하나씩', '많이'], slots: [{ id: 'f1', label: '처음에 칸마다 콩을 ___ 넣어요.' }, { id: 'f2', label: '집은 콩은 다음 칸부터 ___ 넣어요.' }, { id: 'f3', label: '콩을 더 ___ 모은 사람이 이겨요.' }] },
                target: { fill: { f1: '4개', f2: '하나씩', f3: '많이' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['4개', '하나씩', '많이', '두 개씩'] } } } },
              { prompt: '만칼라를 할 때 필요한 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '준비물', cards: ['달걀판', '콩 48개', '친구 한 명', '공'] },
                target: { pick: ['달걀판', '콩 48개', '친구 한 명'] }, difficulty: 0.05 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 짝과 만칼라 하기', minutes: 18, tool: 'emotion',
            teacher: '짝과 달걀판 하나로 12분 동안 놀이한다. 콩은 입이나 코에 넣지 않고, 떨어지면 바로 줍게 한다. 순회하며 방향과 \'하나씩\'을 지키는지 살핀다. 놀이가 끝나면 이긴 사람과 진 사람이 서로에게 할 말을 고른다. "처음 해 본 놀이라 졌을 수도 있어요. 다시 하면 달라져요."',
            task: '짝과 만칼라를 하고, 이기고 졌을 때 할 말과 행동을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '짝과 달걀판으로 만칼라를 한 판 끝까지 했으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '만칼라에서 졌어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '처음 해 본 만칼라에서 짝보다 콩을 적게 모아 졌어요.', choices: [
                { id: 'throw', text: '콩을 쏟아 버려요', result: '콩이 바닥에 흩어지고 짝이 속상해요.', mood: '속상함', why: '콩을 쏟으면 짝의 마음이 어떨까요?' },
                { id: 'again', text: '"재미있었어, 한 판 더 하자" 하고 말해요', result: '두 번째 판에서 더 잘하게 되었어요.', mood: '신남' },
                { id: 'blame', text: '"이 놀이는 재미없어" 하고 말해요', result: '함께 놀던 짝이 서운해요.', mood: '속상함', why: '진 것과 놀이가 재미없는 것은 같은 걸까요?' }] }, target: { choice: 'again' }, difficulty: 0.1 },
              { prompt: '놀이가 끝난 뒤 짝에게 할 말만 골라 보세요.', toolOptions: { mode: 'pick', basket: '짝에게 할 말', cards: ['같이 해 줘서 고마워', '너 정말 잘한다', '내가 이겼지롱, 메롱', '이건 이상한 놀이야'] },
                target: { pick: ['같이 해 줘서 고마워', '너 정말 잘한다'] }, difficulty: 0.1,
                predict: { q: '처음 해 본 놀이는 재미없는 놀이일까요?', options: ['재미없어요', '해 보면 재미있을 수 있어요'], answer: 1 },
                conclude: '모르는 놀이도 해 보면 재미있을 수 있어요.' },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"만칼라를 하기 전과 해 본 뒤, 이 놀이에 대한 생각이 달라졌나요?" 두세 명의 대답을 듣는다. 콩과 달걀판은 모둠 바구니에 세어 넣는다(48개). 다음 시간에는 친구가 좋아하는 것을 존중하는 말을 연습한다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { cards: [{ id: 'a', text: '다음 칸부터 하나씩 넣어요', motif: 'flower' }, { id: 'b', text: '칸의 콩을 모두 집어요', motif: 'leaf' }, { id: 'c', text: '마지막 칸을 살펴봐요', motif: 'star' }], slots: ['1', '2', '3'] }, prompt: '만칼라 한 차례를 차례대로 놓아 보세요.', target: { order: ['b', 'a', 'c'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '만칼라는 어느 대륙에서 오래전부터 해 온 놀이인가요?', options: ['아프리카', '남극', '오세아니아'], answer: 0, difficulty: 0.1, explain: '만칼라는 아프리카 여러 나라에서 오래전부터 해 온 씨앗 놀이예요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '아프리카 씨앗 놀이 만칼라',
      items: [
        { type: 'table', prompt: '만칼라 규칙을 쓰세요.', columns: ['규칙', '내가 쓸 말'], cells: [['처음 칸마다 콩', ''], ['콩을 넣는 방법', ''], ['이기는 사람', '']] },
        { type: 'choice', prompt: '콩을 넣는 방법에 ○ 하세요.', options: ['한 칸에 하나씩', '한 칸에 모두', '아무 칸에나'], answer: '한 칸에 하나씩' },
        { type: 'check', prompt: '놀이하며 지킨 것에 ✓ 하세요.', options: ['차례를 지켰어요', '콩을 입에 넣지 않았어요', '짝에게 고맙다고 말했어요'] },
        { type: 'short', prompt: '만칼라를 해 본 뒤 달라진 생각을 쓰세요.' },
      ],
      easy: {
        note: '집고 → 하나씩 넣고 → 마지막 칸 보기!',
        items: [
          { type: 'choice', prompt: '처음 칸마다 콩은 몇 개?', options: ['4개', '10개'], answer: '4개' },
          { type: 'choice', prompt: '졌을 때 할 말에 ○ 하세요.', options: ['한 판 더 하자', '재미없어'], answer: '한 판 더 하자' },
          { type: 'draw', prompt: '만칼라 판을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 초록 테두리가 생겨요. 놀이는 콩을 가져오는 규칙 없이 옮기기만 먼저 해 봐요.',
      base: '규칙을 모두 놓은 뒤 확인을 눌러요. 짝과 한 판을 끝까지 해요.',
      challenge: '빈칸 채우기에 함정 카드가 있어요. 놀이에서는 어느 칸을 집어야 콩을 가져올 수 있을지 미리 세어 보고 골라요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 한 칸에 콩을 여러 개 넣는다 → "하나씩" 소리 내어 세며 넣게 한다. ② 방향이 헷갈린다 → 달걀판 둘레에 화살표 붙임 딱지를 붙여 준다. ③ 낯선 놀이라 재미없다고 미리 말한다 → 한 판을 끝까지 해 본 뒤 다시 생각을 묻는다. 콩은 삼키지 않도록 저학년 지도에 주의하고, 콩 알레르기가 있으면 단추나 작은 돌로 바꾼다. 사실 확인: 만칼라는 \'씨앗을 옮기는 놀이\' 무리를 부르는 이름이고 나라마다 규칙이 조금씩 다르다(여기서는 가나 등에서 하는 오웨어 방식을 줄였다).',
  }));

  lessons.push(L(19, {
    title: '친구가 좋아하는 것을 존중하는 말로 바꾸기',
    objective: '친구가 좋아하는 다른 나라의 놀이·음식·노래를 놀리는 말과 존중하는 말로 가리고, 놀리는 말을 존중하는 말로 바꾸어 말할 수 있다.',
    illustration: ART('two children talking kindly, one holding a paper pinata and the other holding a small paper drum, gentle heart-shaped speech bubbles between them', '존중하는 말로 바꿔요', [
      { motif: 'flower', x: 110, y: 226 }, { motif: 'star', x: 390, y: 80, s: 0.5 }, { motif: 'flower', x: 390, y: 228, color: 'lavender' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"내가 좋아하는 것을 친구가 \'그게 뭐야, 이상해\' 하고 말하면 어떤 마음일까요?" 두세 명의 경험을 듣는다. "오늘은 친구가 좋아하는 것을 존중하는 말을 연습해요." 시연 단추로 \'놀리는 말\'이 \'존중하는 말\'과 이어지는 모습을 보여 준다.',
        student: '내가 좋아하는 놀이나 음식을 하나 떠올려 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '이렇게 바꿔요', slots: [{ id: 's1', label: '"그게 무슨 놀이야, 이상해"' }], cards: ['"처음 보는 놀이네, 어떻게 해?"', '"재미없겠다"'], shuffle: false }, sequence: [{ match: { s1: '"처음 보는 놀이네, 어떻게 해?"' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 존중하는 말 알아보기', minutes: 13, tool: 'emotion',
            teacher: '"서아는 멕시코에 사는 사촌에게 배운 피냐타 놀이를 좋아해요. 친구들이 \'그런 걸 왜 해?\' 하고 말했어요." 피냐타는 사탕을 넣은 종이 인형을 막대로 쳐서 터뜨리는 생일 놀이라고 알려 준다. "내가 모르는 놀이는 재미없는 놀이일까요?" 하고 묻고, 모르는 것은 궁금해하며 물어보면 된다는 것을 짚는다.',
            task: '친구가 좋아하는 것에 대해 존중하는 말을 고르고, 상황에서 어떻게 할지 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '친구가 좋아하는 것을 존중하는 말만 골라 보세요.', toolOptions: { mode: 'pick', basket: '존중하는 말', cards: ['그거 어떻게 하는 거야?', '나도 해 보고 싶어', '그런 걸 왜 좋아해?', '이상한 걸 좋아하네'] },
                target: { pick: ['그거 어떻게 하는 거야?', '나도 해 보고 싶어'] }, difficulty: 0.1 },
              { prompt: '서아가 좋아하는 피냐타 놀이를 친구들이 놀려요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '서아', situation: '서아가 멕시코 사촌에게 배운 피냐타 놀이 이야기를 하자 친구들이 "그런 걸 왜 해?" 하고 웃었어요.', choices: [
                { id: 'join', text: '같이 웃어요', result: '서아가 좋아하는 것을 숨기게 돼요.', mood: '속상함', why: '좋아하는 것을 놀림받은 서아의 마음을 떠올려 봐요.' },
                { id: 'ask', text: '"재미있겠다, 어떻게 하는 거야?" 하고 물어요', result: '서아가 신나서 놀이 방법을 알려 줬어요.', mood: '기쁨' }] }, target: { choice: 'ask' }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { choices: [
                  { id: 'join', text: '같이 웃어요', result: '서아가 좋아하는 것을 숨기게 돼요.', mood: '속상함', why: '좋아하는 것을 놀림받은 서아의 마음을 떠올려 봐요.' },
                  { id: 'ask', text: '"재미있겠다, 어떻게 하는 거야?" 하고 물어요', result: '서아가 신나서 놀이 방법을 알려 줬어요.', mood: '기쁨' },
                  { id: 'silent', text: '아무 말도 하지 않고 자리를 떠나요', result: '서아는 친구들이 관심 없다고 느꼈어요.', mood: '외로움', why: '말하지 않고 떠나면 서아는 어떻게 느낄까요?' }] } } } },
              { prompt: '말을 들은 친구의 마음 카드를 놓아 보세요.', toolOptions: { cards: ['속상함', '기쁨', '고마움'], slots: [{ id: 's1', label: '"네가 좋아하는 노래 나도 들어 볼래"' }, { id: 's2', label: '"그 음식 냄새 이상해"' }] },
                target: { match: { s1: ['기쁨', '고마움'], s2: '속상함' } }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 놀리는 말을 존중하는 말로 바꾸기', minutes: 13, tool: 'mindmap',
            teacher: '"놀리는 말이 입에서 나오려고 할 때, 어떤 말로 바꾸면 좋을까요?" 바꾼 말을 짝과 실제로 주고받는 역할놀이를 한다(한 사람은 좋아하는 것을 말하고, 다른 사람은 존중하는 말로 답한다). 바꾼 말에는 \'궁금해하기\'와 \'함께 해 보기\'가 들어 있다는 것을 짚는다.',
            task: '놀리는 말과 그 말을 바꾼 존중하는 말을 잇고, 짝과 역할놀이를 해요.',
            levels: CARD_LV,
            items: [
              { prompt: '놀리는 말과 바꾼 존중하는 말을 이어 보세요.', toolOptions: { mode: 'match', topic: '이렇게 바꿔요', slots: [{ id: 's1', label: '"그 음식 냄새 이상해"' }, { id: 's2', label: '"그 노래 시끄러워"' }], cards: ['"처음 맡는 냄새네, 무슨 음식이야?"', '"신나는 노래구나, 어느 나라 노래야?"'] },
                target: { match: { s1: '"처음 맡는 냄새네, 무슨 음식이야?"', s2: '"신나는 노래구나, 어느 나라 노래야?"' } }, difficulty: 0.15 },
              { prompt: '세 가지 놀리는 말을 존중하는 말과 이어 보세요.', toolOptions: { mode: 'match', topic: '이렇게 바꿔요', slots: [{ id: 's1', label: '"그런 놀이를 왜 해?"' }, { id: 's2', label: '"옷이 이상해"' }, { id: 's3', label: '"말이 웃겨"' }], cards: ['"어떻게 하는 놀이야?"', '"어느 나라 옷이야? 멋지다"', '"그 말 나도 배워 볼래"'] },
                target: { match: { s1: '"어떻게 하는 놀이야?"', s2: '"어느 나라 옷이야? 멋지다"', s3: '"그 말 나도 배워 볼래"' } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['"어떻게 하는 놀이야?"', '"어느 나라 옷이야? 멋지다"', '"그 말 나도 배워 볼래"', '"나는 관심 없어"'] } } } },
              { prompt: '짝과 역할을 바꾸어 존중하는 말로 두 번 주고받았으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 바꾼 말 가운데 꼭 써 보고 싶은 말은 무엇인가요?" 학생들이 고른 말을 칠판에 \'존중하는 말 꽃밭\'으로 붙인다. 이 말들은 22차시 우리 반 약속을 정할 때 다시 쓴다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '이렇게 바꿔요', slots: [{ id: 'e1', label: '"그 춤 이상해"' }, { id: 'e2', label: '"그 그림 촌스러워"' }], cards: ['"그 춤 나도 배워 보고 싶어"', '"색이 특별하다, 어디 그림이야?"'] }, prompt: '놀리는 말과 바꾼 존중하는 말을 이어 보세요.', target: { match: { e1: '"그 춤 나도 배워 보고 싶어"', e2: '"색이 특별하다, 어디 그림이야?"' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '내가 모르는 놀이를 친구가 좋아할 때 알맞은 생각은?', options: ['재미없는 놀이예요', '궁금하니 물어볼래요', '못 들은 척해요'], answer: 1, difficulty: 0.1, explain: '모르는 놀이도 물어보고 해 보면 재미있을 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '존중하는 말로 바꾸기',
      items: [
        { type: 'table', prompt: '놀리는 말을 존중하는 말로 바꾸어 쓰세요.', columns: ['놀리는 말', '존중하는 말'], cells: [['"그 음식 이상해"', ''], ['"그 놀이 재미없어"', ''], ['"말이 웃겨"', '']] },
        { type: 'choice', prompt: '존중하는 말에 ○ 하세요.', options: ['"어떻게 하는 거야?"', '"그런 걸 왜 해?"', '"이상해"'], answer: '"어떻게 하는 거야?"' },
        { type: 'check', prompt: '존중하는 말에 들어 있는 것에 ✓ 하세요.', options: ['궁금해하기', '함께 해 보기', '칭찬하기'] },
        { type: 'short', prompt: '친구가 좋아하는 것과 그것에 해 줄 존중하는 말을 쓰세요.' },
      ],
      easy: {
        note: '"어떻게 하는 거야?" "나도 해 볼래!"',
        items: [
          { type: 'choice', prompt: '존중하는 말에 ○ 하세요.', options: ['"나도 해 볼래"', '"이상해"'], answer: '"나도 해 볼래"' },
          { type: 'choice', prompt: '놀림을 받은 친구의 마음은?', options: ['속상해요', '기뻐요'], answer: '속상해요' },
          { type: 'draw', prompt: '친구에게 존중하는 말을 하는 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 짝에 초록 테두리가 생기고, 고른 행동의 결과가 바로 보여요. 역할놀이는 선생님이 준 말 카드를 읽어요.',
      base: '모두 이은 뒤 확인을 눌러요. 짝과 역할놀이를 두 번 해요.',
      challenge: '잇기와 고르기에 그럴듯한 보기가 하나씩 더 있어요. 역할놀이에서 내가 지은 존중하는 말을 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 모르는 놀이·음식은 재미없거나 이상하다고 단정한다 → "해 보기 전에 알 수 있을까?" 하고 묻는다. ② 놀리지 않으면 존중이라고 여겨 아무 말도 하지 않는다 → 궁금해하며 묻는 것이 존중이라고 짚는다. ③ 반에 다른 나라에서 온 친구가 있으면 그 친구가 이야기의 주인공이 되지 않게 가명 인물로만 다룬다. 사실 확인: 피냐타는 멕시코 등에서 생일·잔치 때 사탕을 넣은 종이 인형을 막대로 쳐서 터뜨리는 놀이다.',
  }));

  lessons.push(L(20, {
    title: '우리 놀이와 닮은 세계 놀이 찾아 함께 하기',
    objective: '우리 놀이와 닮은 다른 나라 놀이를 짝 짓고, \'오리 오리 거위\'를 친구들과 해 본 뒤 수건돌리기와 같은 점·다른 점을 말할 수 있다.',
    illustration: ART('children sitting in a paper circle on grass while one child walks around tapping heads, another child jumping up to chase, hopscotch squares drawn nearby', '닮은 놀이를 찾아요', [
      { motif: 'tree', x: 90, y: 210 }, { motif: 'tree', x: 400, y: 212, color: 'mint' }, { motif: 'sun', x: 250, y: 56, s: 0.5 }]),
    safety: ['원 둘레는 넓게 앉아 달리는 길을 비워 둬요.', '원 밖에서만 달리고 원 안으로 들어가지 않아요.', '친구 머리는 손바닥으로 살짝만 짚어요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"사방치기, 무궁화 꽃이 피었습니다, 수건돌리기 가운데 해 본 놀이가 있나요?" 손을 들게 한다. "세계 여러 나라에도 이 놀이들과 닮은 놀이가 있어요." 시연 단추로 \'사방치기\'와 \'홉스카치(영국)\'가 이어지는 모습을 보여 준다.',
        student: '내가 가장 좋아하는 우리 놀이를 하나 떠올려 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '닮은 놀이', slots: [{ id: 's1', label: '사방치기' }], cards: ['홉스카치(영국)', '만칼라(아프리카)'], shuffle: false }, sequence: [{ match: { s1: '홉스카치(영국)' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 닮은 놀이 짝 짓기', minutes: 9, tool: 'mindmap',
            teacher: '놀이마다 짧게 설명한다. "홉스카치는 바닥에 칸을 그리고 돌을 던져 한 발·두 발로 뛰는 놀이예요. 오리 오리 거위는 둥글게 앉아 술래가 머리를 짚으며 돌다가 \'거위\'라고 한 친구와 달리기를 해요." 무엇이 닮았는지(칸을 뛴다, 돌아보면 멈춘다, 둥글게 앉는다)를 말하게 한 뒤 잇는다.',
            task: '우리 놀이와 닮은 다른 나라 놀이를 잇고, 놀이의 닮은 점을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '우리 놀이와 닮은 다른 나라 놀이를 이어 보세요.', toolOptions: { mode: 'match', topic: '닮은 놀이', slots: [{ id: 's1', label: '무궁화 꽃이 피었습니다' }, { id: 's2', label: '수건돌리기' }], cards: ['다루마상가 고론다(일본)', '오리 오리 거위(미국)'] },
                target: { match: { s1: '다루마상가 고론다(일본)', s2: '오리 오리 거위(미국)' } }, difficulty: 0.1 },
              { prompt: '세 가지 우리 놀이와 닮은 다른 나라 놀이를 이어 보세요.', toolOptions: { mode: 'match', topic: '닮은 놀이', slots: [{ id: 's1', label: '사방치기' }, { id: 's2', label: '무궁화 꽃이 피었습니다' }, { id: 's3', label: '수건돌리기' }], cards: ['홉스카치(영국)', '다루마상가 고론다(일본)', '오리 오리 거위(미국)'] },
                target: { match: { s1: '홉스카치(영국)', s2: '다루마상가 고론다(일본)', s3: '오리 오리 거위(미국)' } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['홉스카치(영국)', '다루마상가 고론다(일본)', '오리 오리 거위(미국)', '만칼라(아프리카)'] } } } },
              { prompt: '사방치기와 홉스카치가 닮은 점만 골라 보세요.', toolOptions: { mode: 'pick', basket: '닮은 점', cards: ['바닥에 칸을 그려요', '돌을 던져 칸에 넣어요', '한 발, 두 발로 뛰어요', '술래가 친구를 쫓아요'] },
                target: { pick: ['바닥에 칸을 그려요', '돌을 던져 칸에 넣어요', '한 발, 두 발로 뛰어요'] }, difficulty: 0.25 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 오리 오리 거위 해 보기', minutes: 18, tool: 'story',
            teacher: '운동장이나 강당에서 반을 두 원으로 나누어 12분 동안 놀이한다. 술래는 원 밖을 돌며 친구 머리를 살짝 짚고 "오리, 오리…" 하다가 한 친구에게 "거위!" 하고 달린다. 거위가 된 친구는 술래를 쫓고, 술래가 빈자리에 앉으면 거위가 새 술래가 된다. 돌아와서 놀이 차례를 놓고 수건돌리기와 견준다.',
            task: '오리 오리 거위를 해 보고, 놀이 차례를 놓고, 수건돌리기와 같은 점·다른 점을 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '반 친구들과 오리 오리 거위를 세 판 넘게 했으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '오리 오리 거위의 차례대로 카드를 놓아 보세요.', toolOptions: { cards: [{ id: 'walk', text: '술래가 원 밖을 돌며 "오리" 하고 머리를 짚어요', motif: 'bird' }, { id: 'goose', text: '한 친구에게 "거위!" 하고 달려요', motif: 'star' }, { id: 'chase', text: '거위가 일어나 술래를 쫓아요', motif: 'sun' }, { id: 'sit', text: '술래가 빈자리에 앉으면 거위가 새 술래예요', motif: 'flower' }], slots: ['1', '2', '3', '4'] },
                target: { order: ['walk', 'goose', 'chase', 'sit'] }, difficulty: 0.15 },
              { prompt: '수건돌리기와 같은 점, 다른 점으로 나누어 보세요.', toolOptions: { mode: 'sort', cards: ['둥글게 앉아요', '머리를 짚으며 골라요', '술래를 쫓아 달려요', '수건 대신 말로 정해요'], slots: ['같은 점', '다른 점'] },
                target: { sort: { '같은 점': ['둥글게 앉아요', '술래를 쫓아 달려요'], '다른 점': ['머리를 짚으며 골라요', '수건 대신 말로 정해요'] } }, difficulty: 0.25,
                conclude: '멀리 떨어진 나라 어린이들도 우리와 닮은 놀이를 즐겨요.' },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"멀리 있는 나라의 어린이들도 우리와 비슷한 놀이를 하는 까닭은 무엇일까요?" 함께 뛰고 웃는 것을 좋아하는 마음은 같다는 생각을 이끌어 낸다. 17~20차시에 해 본 놀이 가운데 가장 좋았던 것을 손을 들어 고르게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '닮은 놀이', slots: [{ id: 'e1', label: '수건돌리기' }, { id: 'e2', label: '사방치기' }], cards: ['오리 오리 거위(미국)', '홉스카치(영국)'] }, prompt: '우리 놀이와 닮은 다른 나라 놀이를 이어 보세요.', target: { match: { e1: '오리 오리 거위(미국)', e2: '홉스카치(영국)' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '오리 오리 거위에서 술래는 어디에서 달리나요?', options: ['원 안', '원 밖', '아무 데나'], answer: 1, difficulty: 0.1, explain: '부딪치지 않도록 원 밖에서만 달려요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '닮은 놀이 찾기',
      items: [
        { type: 'figure', wide: true, prompt: '우리 놀이와 닮은 다른 나라 놀이를 선으로 이으세요.', tool: 'mindmap', figures: [{ options: { mode: 'match', topic: '닮은 놀이', slots: [{ id: 's1', label: '사방치기' }, { id: 's2', label: '수건돌리기' }, { id: 's3', label: '무궁화 꽃이 피었습니다' }], cards: ['다루마상가 고론다', '홉스카치', '오리 오리 거위'] }, caption: '' }], answer: '사방치기-홉스카치, 수건돌리기-오리 오리 거위, 무궁화 꽃이 피었습니다-다루마상가 고론다' },
        { type: 'table', prompt: '오리 오리 거위와 수건돌리기를 견주어 쓰세요.', columns: ['같은 점', '다른 점'], rows: 2 },
        { type: 'check', prompt: '놀이할 때 지킨 안전 약속에 ✓ 하세요.', options: ['원 밖에서만 달렸어요', '머리를 살짝 짚었어요', '넓게 앉았어요'] },
        { type: 'short', prompt: '다른 나라 친구에게 알려 주고 싶은 우리 놀이를 쓰세요.' },
      ],
      easy: {
        note: '하는 방법이 닮았는지 견주어요.',
        items: [
          { type: 'choice', prompt: '수건돌리기와 닮은 놀이에 ○ 하세요.', options: ['오리 오리 거위', '만칼라'], answer: '오리 오리 거위' },
          { type: 'choice', prompt: '술래는 어디에서 달리나요?', options: ['원 밖', '원 안'], answer: '원 밖' },
          { type: 'draw', prompt: '오리 오리 거위를 하는 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 짝에 초록 테두리가 생겨요. 놀이에서는 먼저 거위 역할만 해 봐요.',
      base: '모두 이은 뒤 확인을 눌러요. 놀이에서 술래를 한 번 해요.',
      challenge: '잇기에 닮지 않은 놀이 카드가 섞여 있어요. 우리 놀이와 닮은 세계 놀이를 하나 더 찾아 활동지에 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 이름이 다르면 전혀 다른 놀이라고 여긴다 → 하는 방법을 하나씩 견주게 한다. ② 달리기에 들떠 원 안으로 들어간다 → 바로 멈추고 원 밖 길을 다시 보여 준다. ③ 머리를 세게 친다 → 손바닥으로 살짝 짚는 시범을 보인다. 오리 오리 거위는 미국에서 널리 하는 놀이로, 나라와 지역마다 이름과 규칙이 조금씩 다르다.',
  }));

  // ───────────────────────── 21~24차시: 달라진 마음 돌아보기·우리 반 약속(성찰과 습관화) ─────────────────────────

  lessons.push(L(21, {
    title: '다른 나라 놀이를 한 뒤 달라진 마음 말하기',
    objective: '다른 나라 놀이를 하기 전과 해 본 뒤의 마음을 견주어, 달라진 마음을 \'처음에는 ~했는데 해 보니 ~\' 문장으로 말할 수 있다.',
    illustration: ART('a child with two paper thought clouds, a grey worried cloud on the left turning into a bright rainbow on the right, paper game pieces from earlier lessons around', '마음이 달라졌어요', [
      { motif: 'cloud', x: 120, y: 84, s: 0.7 }, { motif: 'sun', x: 380, y: 84, s: 0.6 }, { motif: 'flower', x: 250, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"다루마상가 고론다, 만칼라, 오리 오리 거위를 처음 들었을 때 어떤 마음이었나요?" 두세 명이 말하게 한다. "해 보고 나서는 마음이 어땠나요?" 시연 단추로 마음 카드가 \'걱정\'에서 \'신남\'으로 차례대로 놓이는 모습을 보여 준다. "오늘은 달라진 내 마음을 들여다봐요."',
        student: '17~20차시에 해 본 놀이 가운데 하나를 떠올려 봐요.',
        demo: { tool: 'emotion', options: { mode: 'order', cards: ['걱정', '신남'], slots: ['처음에는', '해 보니'], shuffle: false }, sequence: [{ order: ['걱정', '신남'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 마음이 바뀐 차례 알아보기', minutes: 13, tool: 'emotion',
            teacher: '"준호의 마음은 어떤 차례로 바뀌었을까요? \'처음에\', \'그다음\', \'해 보니\'를 찾아 밑줄을 그어요." 이야기 속 낱말을 근거로 놓게 한다. 마지막 문항은 내 마음이라 정답이 없으니 솔직하게 고르라고 말한다.',
            task: '친구의 마음이 바뀐 차례와 그때의 마음을 고르고, 내 마음의 크기를 솔직하게 골라요.',
            levels: { easy: { live: true, instant: true, steps: 3 }, base: {}, challenge: {} },
            items: [
              { prompt: '준호는 처음에 낯선 놀이가 걱정됐고, 규칙을 듣자 설렜고, 해 보니 신났어요. 마음이 바뀐 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['신남', '걱정', '설렘'], slots: ['처음에', '그다음', '해 보니'] },
                target: { order: ['걱정', '설렘', '신남'] }, difficulty: 0.15 },
              { prompt: '서아는 "처음엔 규칙이 어려워 걱정됐는데, 끝까지 해 보니 뿌듯했어"라고 했어요. 그때의 마음을 놓아 보세요.', toolOptions: { cards: ['걱정', '뿌듯함', '화남'], slots: [{ id: 's1', label: '규칙을 처음 들었을 때' }, { id: 's2', label: '끝까지 해 보았을 때' }] },
                target: { match: { s1: '걱정', s2: '뿌듯함' } }, difficulty: 0.1 },
              { prompt: '다른 나라 놀이를 해 본 지금, 그 나라가 궁금한 마음의 크기를 솔직하게 골라 보세요. 정답은 없어요.', toolOptions: { mode: 'scale', situation: '다른 나라 놀이를 세 가지 해 보았어요. 그 나라 어린이들은 또 무엇을 하며 놀까요?', feeling: '설렘', after: '궁금한 나라가 생겼다면 1차시처럼 질문을 만들어 알아볼 수 있어요.' }, target: { level: 'any' }, difficulty: 0.05 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 달라진 생각 말하기', minutes: 13, tool: 'mindmap',
            teacher: '"하준이가 한 말을 해 보기 전의 생각과 해 본 뒤의 생각으로 나누어 봐요." 놀이 설명(콩은 48개예요)은 마음이 달라진 것을 말한 문장이 아니라는 것을 짚는다. 마지막에 짝에게 \'처음에는 ~했는데 해 보니 ~\' 틀로 내 마음을 말하게 한다.',
            task: '친구의 말을 해 보기 전과 해 본 뒤의 생각으로 나누고, 달라진 마음을 말한 문장을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '하준이의 말을 해 보기 전 생각과 해 본 뒤 생각으로 나누어 보세요.', toolOptions: { topic: '하준이의 생각', slots: ['해 보기 전', '해 본 뒤'], cards: ['이름이 이상해서 재미없을 것 같아', '우리 놀이랑 비슷해서 금방 익혔어', '처음 보는 거라 하기 싫어', '다른 나라 놀이를 더 해 보고 싶어'] },
                target: { sort: { '해 보기 전': ['이름이 이상해서 재미없을 것 같아', '처음 보는 거라 하기 싫어'], '해 본 뒤': ['우리 놀이랑 비슷해서 금방 익혔어', '다른 나라 놀이를 더 해 보고 싶어'] } }, difficulty: 0.15 },
              { prompt: '달라진 마음을 말한 문장만 골라 보세요.', toolOptions: { mode: 'pick', basket: '달라진 마음', cards: ['처음엔 낯설었는데 해 보니 재미있었어', '걱정했는데 친구가 도와줘서 편해졌어', '오리 오리 거위는 둥글게 앉아요', '만칼라 콩은 48개예요'] },
                target: { pick: ['처음엔 낯설었는데 해 보니 재미있었어', '걱정했는데 친구가 도와줘서 편해졌어'] }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['처음엔 낯설었는데 해 보니 재미있었어', '걱정했는데 친구가 도와줘서 편해졌어', '오리 오리 거위는 둥글게 앉아요', '만칼라 콩은 48개예요', '다루마상가 고론다는 처음부터 끝까지 재미있었어'] } } },
                predict: { q: '"만칼라 콩은 48개예요"는 마음을 말한 문장일까요?', options: ['마음을 말했어요', '놀이를 설명했어요'], answer: 1 },
                conclude: '달라진 마음은 \'처음에는 ~했는데 해 보니 ~\'처럼 전과 뒤를 함께 말해요.' },
              { prompt: '짝에게 "처음에는 ~했는데 해 보니 ~" 틀로 내 마음을 말했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"낯선 것을 해 보기 전에 걱정하는 것은 이상한 걸까요?" 누구나 처음에는 걱정할 수 있고, 해 보면 마음이 달라질 수 있다는 것을 정리한다. 서너 명이 달라진 마음 문장을 발표한다. 다음 시간에는 서로 다름을 존중하는 우리 반 약속을 정한다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'order', cards: ['기쁨', '걱정'], slots: ['처음에는', '해 보니'] }, prompt: '민지는 처음엔 낯선 인사말이 걱정됐는데 해 보니 기뻤어요. 마음이 바뀐 차례대로 놓아 보세요.', target: { order: ['걱정', '기쁨'] }, difficulty: 0.1 },
          { type: 'short', prompt: '"처음에는 ~했는데 해 보니 ~" 틀로 다른 나라 놀이를 해 본 내 마음을 쓰세요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '달라진 내 마음',
      items: [
        { type: 'table', prompt: '해 본 놀이마다 전과 뒤의 마음을 쓰세요.', columns: ['놀이', '해 보기 전', '해 본 뒤'], cells: [['다루마상가 고론다', '', ''], ['만칼라', '', ''], ['오리 오리 거위', '', '']] },
        { type: 'blank', prompt: '빈칸을 채워 문장을 완성하세요.', text: '처음에는 ___했는데 해 보니 ___.', answer: '(내 마음)' },
        { type: 'choice', prompt: '달라진 마음을 말한 문장에 ○ 하세요.', options: ['처음엔 어색했는데 해 보니 신났어', '만칼라는 아프리카 놀이야', '오리 오리 거위는 원을 그려'], answer: '처음엔 어색했는데 해 보니 신났어' },
        { type: 'draw', prompt: '놀이하며 가장 즐거웠던 순간을 그리세요.' },
      ],
      easy: {
        note: '처음 마음 → 해 본 뒤 마음!',
        items: [
          { type: 'choice', prompt: '처음 보는 놀이를 할 때 마음은?', options: ['걱정될 수 있어요', '언제나 신나요'], answer: '걱정될 수 있어요' },
          { type: 'short', prompt: '해 본 뒤 내 마음을 한 낱말로 쓰세요.' },
          { type: 'draw', prompt: '즐거웠던 놀이를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 초록 테두리가 생기고, 마음 크기는 세 칸이에요. 문장 틀 카드를 보며 말해요.',
      base: '모두 놓은 뒤 확인을 눌러요. 짝에게 문장 틀로 말해요.',
      challenge: '활동지 표의 세 놀이를 모두 채우고, 마음이 달라진 까닭(친구가 도와줘서, 우리 놀이와 닮아서)까지 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 놀이 설명과 마음을 섞는다 → \'마음 낱말\'이 들어갔는지 찾게 한다. ② 처음부터 다 좋았다고만 말한다 → 걱정했던 것도 솔직한 마음이라고 말해 준다. ③ 마음이 달라진 까닭을 말하지 못한다 → "누가, 무엇이 도와줬나요?" 하고 묻는다. 단계는 자기 마음이라 맞고 틀림을 따지지 않는다.',
  }));

  lessons.push(L(22, {
    title: '서로 다름을 존중하는 우리 반 약속 정하기',
    objective: '존중하는 행동과 존중이 아닌 행동을 가리고, 서로 다름을 존중하는 우리 반 약속을 하나 정해 포스터로 만들 수 있다.',
    illustration: ART('a class poster made of paper hearts and hand cut-outs in many colors with a big promise ribbon in the middle, children adding their handprints', '우리 반 존중 약속', [
      { motif: 'flower', x: 100, y: 226 }, { motif: 'star', x: 390, y: 78, s: 0.6 }, { motif: 'flower', x: 400, y: 228, color: 'peach' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"다른 나라 친구가 우리 반에 왔어요. 그 친구가 우리와 다른 점이 있을 때, 아무 말도 하지 않고 모른 척하면 존중한 걸까요?" 손을 들어 생각을 나누게 한다. 바로 답하지 않고 "오늘 함께 알아봐요"라고 한다. 시연 단추로 \'궁금해하며 물어요\'가 \'존중하는 행동\' 가지로 들어가는 모습을 보여 준다.',
        student: '19차시 \'존중하는 말 꽃밭\'에서 마음에 드는 말을 하나 골라 봐요.',
        demo: { tool: 'mindmap', options: { topic: '존중일까?', slots: ['존중하는 행동', '존중이 아닌 행동'], cards: ['다른 점을 궁금해하며 물어요', '흉내 내며 웃어요'], shuffle: false }, sequence: [{ sort: { '존중하는 행동': ['다른 점을 궁금해하며 물어요'], '존중이 아닌 행동': ['흉내 내며 웃어요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 존중하는 행동 가리기', minutes: 12, tool: 'mindmap',
            teacher: '"모른 척 피하는 것은 놀리지는 않았지만, 친구는 어떤 마음일까요?" 다른 점을 말하지 않는 것이 존중이 아니라, 다른 점을 알고 궁금해하며 함께하는 것이 존중이라는 것을 짚는다. \'다르다\'고 말하는 것 자체는 나쁘지 않고, 놀리거나 따돌리는 것이 문제라는 것을 구별하게 한다.',
            task: '행동 카드를 존중하는 행동과 존중이 아닌 행동으로 나누고, 알맞은 생각을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '행동을 존중하는 행동과 존중이 아닌 행동으로 나누어 보세요.', toolOptions: { topic: '존중일까?', slots: ['존중하는 행동', '존중이 아닌 행동'], cards: ['함께 해 보자고 해요', '못 본 척 피해요', '친구 나라 말을 배워 봐요', '말투를 흉내 내며 웃어요'] },
                target: { sort: { '존중하는 행동': ['함께 해 보자고 해요', '친구 나라 말을 배워 봐요'], '존중이 아닌 행동': ['못 본 척 피해요', '말투를 흉내 내며 웃어요'] } }, difficulty: 0.15 },
              { prompt: '다섯 가지 행동을 존중하는 행동과 존중이 아닌 행동으로 나누어 보세요.', toolOptions: { topic: '존중일까?', slots: ['존중하는 행동', '존중이 아닌 행동'], cards: ['다른 점을 알고 그대로 받아들여요', '"우리랑 달라" 하며 끼워 주지 않아요', '아무 말 없이 모른 척해요', '좋아하는 것을 물어봐요', '도움이 필요한지 먼저 물어요'] },
                target: { sort: { '존중하는 행동': ['다른 점을 알고 그대로 받아들여요', '좋아하는 것을 물어봐요', '도움이 필요한지 먼저 물어요'], '존중이 아닌 행동': ['"우리랑 달라" 하며 끼워 주지 않아요', '아무 말 없이 모른 척해요'] } }, difficulty: 0.25 },
              { prompt: '존중에 대해 바르게 생각한 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '바른 생각', cards: ['다른 점을 궁금해하는 것도 존중이에요', '다른 점을 놀리지 않고 함께해요', '다른 점은 말하지 않고 모른 척하면 돼요'] },
                target: { pick: ['다른 점을 궁금해하는 것도 존중이에요', '다른 점을 놀리지 않고 함께해요'] }, difficulty: 0.25,
                levels: { challenge: { toolOptions: { cards: ['다른 점을 궁금해하는 것도 존중이에요', '다른 점을 놀리지 않고 함께해요', '다른 점은 말하지 않고 모른 척하면 돼요', '친구가 나와 똑같아지게 바꿔 줘요'] } } },
                predict: { q: '모른 척하면 존중한 것일까요?', options: ['존중이에요', '존중이 아니에요'], answer: 1 },
                conclude: '존중은 다른 점을 모른 척하는 것이 아니라, 알고 받아들이며 함께하는 거예요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 우리 반 약속 정해 포스터 만들기', minutes: 15, tool: 'emotion',
            teacher: '모둠마다 약속 후보를 하나씩 내고 칠판에 붙인다. 손을 들어 가장 많이 고른 약속 하나를 우리 반 약속으로 정한다. 약속은 \'~하지 않아요\'보다 \'~해요\'처럼 할 일을 쓰면 지키기 쉽다고 알려 준다. 모둠마다 약속 포스터를 꾸미고, 모두 손도장을 찍는다(8분).',
            task: '좋은 약속 후보를 고르고, 약속을 어긴 친구에게 할 말을 고르고, 포스터를 함께 만들어요.',
            levels: CARD_LV,
            items: [
              { prompt: '우리 반 존중 약속으로 알맞은 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '약속 후보', cards: ['다른 점을 궁금해하며 물어요', '처음 보는 놀이도 함께 해 봐요', '나와 같은 친구하고만 놀아요', '친구 말투를 흉내 내요'] },
                target: { pick: ['다른 점을 궁금해하며 물어요', '처음 보는 놀이도 함께 해 봐요'] }, difficulty: 0.1 },
              { prompt: '약속을 정한 날, 하준이가 친구 이름을 흉내 내며 웃었어요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '하준', situation: '우리 반 약속을 정한 날, 하준이가 다른 나라 이름을 가진 친구의 이름을 흉내 내며 웃었어요.', choices: [
                { id: 'same', text: '나도 따라 웃어요', result: '친구가 자기 이름을 부끄러워하게 돼요.', mood: '속상함', why: '이름을 놀림받은 친구의 마음을 떠올려 봐요.' },
                { id: 'remind', text: '"우리 약속 기억나? 이름을 어떻게 부르는지 물어보자" 하고 말해요', result: '하준이가 사과하고 이름을 바르게 불렀어요.', mood: '편안함' },
                { id: 'fight', text: '하준이를 밀쳐요', result: '하준이와 다투게 되었어요.', mood: '화남', why: '밀치면 약속을 지킬 수 있을까요?' }] }, target: { choice: 'remind' }, difficulty: 0.15 },
              { prompt: '모둠과 약속 포스터를 꾸미고 손도장을 찍었으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"우리 반 약속을 다 함께 읽어 볼까요?" 포스터를 교실 앞에 붙이고 함께 읽는다. 일주일 동안 약속을 지킨 날마다 활동지 달력에 ○를 그려 23차시에 돌아본다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '존중일까?', slots: ['존중하는 행동', '존중이 아닌 행동'], cards: ['낯선 음식을 조금 맛봐요', '"이상해" 하며 피해요', '어느 나라 노래인지 물어요'] }, prompt: '행동을 존중하는 행동과 존중이 아닌 행동으로 나누어 보세요.', target: { sort: { '존중하는 행동': ['낯선 음식을 조금 맛봐요', '어느 나라 노래인지 물어요'], '존중이 아닌 행동': ['"이상해" 하며 피해요'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '다른 점이 있는 친구에게 아무 말 없이 모른 척하는 것은?', options: ['존중이에요', '존중이 아니에요'], answer: 1, difficulty: 0.15, explain: '모른 척하면 친구는 외로워요. 궁금해하며 함께하는 것이 존중이에요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '우리 반 존중 약속',
      items: [
        { type: 'short', prompt: '우리 반이 정한 존중 약속을 쓰세요.' },
        { type: 'table', prompt: '일주일 동안 약속을 지킨 날에 ○를 그리세요.', columns: ['월', '화', '수', '목', '금'], rows: 1 },
        { type: 'choice', prompt: '존중하는 행동에 ○ 하세요.', options: ['궁금해하며 물어요', '모른 척 피해요', '흉내 내며 웃어요'], answer: '궁금해하며 물어요' },
        { type: 'draw', prompt: '약속을 지키는 내 모습을 그리세요.' },
      ],
      easy: {
        note: '존중 = 궁금해하고, 받아들이고, 함께해요.',
        items: [
          { type: 'choice', prompt: '존중하는 행동에 ○ 하세요.', options: ['함께 놀자고 해요', '모른 척해요'], answer: '함께 놀자고 해요' },
          { type: 'table', prompt: '약속을 지킨 날에 ○를 그리세요.', columns: ['월', '화', '수', '목', '금'], rows: 1 },
          { type: 'draw', prompt: '약속 포스터를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 가지에 초록 테두리가 생기고, 고른 행동의 결과가 바로 보여요.',
      base: '모두 나눈 뒤 확인을 눌러요. 약속 후보를 하나 내요.',
      challenge: '다섯 가지 행동을 나누고, 약속 포스터에 약속을 지키는 방법을 두 가지 그림으로 덧붙여요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 다른 점을 말하지 않으면 존중이라고 여긴다 → 모른 척 당한 친구의 마음을 떠올리게 한다. ② \'다르다\'는 말 자체를 나쁜 말로 여긴다 → 다르다고 말하는 것과 놀리는 것을 구별해 준다. ③ 약속을 \'~하지 않아요\'로만 쓴다 → 할 일로 바꾸어 쓰게 한다. 다른 나라 이름 이야기는 가명 인물로만 다루고, 우리 반 특정 학생을 예로 들지 않는다.',
  }));

  lessons.push(L(23, {
    title: '존중 약속을 새로운 상황에서 지켜 보기',
    objective: '학교생활의 새로운 상황에서 우리 반 존중 약속에 맞는 행동을 고르고, 일주일 동안 약속을 지킨 정도를 스스로 돌아볼 수 있다.',
    illustration: ART('a paper school hallway with a new student holding a name tag, classmates smiling and showing the way, a calendar with circles on the wall', '약속을 지켜요', [
      { motif: 'house', x: 110, y: 214, color: 'sky' }, { motif: 'flower', x: 390, y: 228 }, { motif: 'star', x: 380, y: 80, s: 0.5 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"일주일 동안 우리 반 약속을 지킨 날 달력을 꺼내 볼까요?" ○가 몇 개인지 세어 보게 한다. "지킨 날도, 못 지킨 날도 있지요. 오늘은 처음 보는 상황에서도 약속을 지킬 수 있는지 연습해요." 시연 단추로 \'전학 온 친구\' 상황에 알맞은 행동이 이어지는 모습을 보여 준다.',
        student: '약속 달력에서 ○를 그린 날 한 일을 하나 떠올려 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '약속대로 하면', slots: [{ id: 's1', label: '전학 온 친구가 급식실을 몰라요' }], cards: ['"같이 가자" 하고 길을 알려 줘요', '모른 척 먼저 가요'], shuffle: false }, sequence: [{ match: { s1: '"같이 가자" 하고 길을 알려 줘요' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 새로운 상황에서 약속 지키기', minutes: 15, tool: 'emotion',
            teacher: '"이 상황에서 우리 약속(다른 점을 궁금해하며 묻기, 함께하기)대로 하면 어떻게 될까요?" 상황마다 결과 칸을 소리 내어 읽고, 그때 상대 친구의 마음을 말하게 한다. 먹지 않는 음식이 있는 친구 이야기에서는 까닭을 캐묻지 않고 그대로 받아들이는 것도 존중이라는 것을 짚는다. 마지막 문항은 약속 달력을 보며 고르는 내 마음이라 정답이 없다고 알려 준다.',
            task: '처음 보는 상황에서 우리 반 존중 약속에 맞는 행동을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '전학 온 친구가 우리말이 아직 서툴러요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '다른 나라에서 온 친구가 전학을 왔어요. 우리말이 아직 서툴러 대답이 느려요.', choices: [
                { id: 'rush', text: '"빨리 말해" 하고 재촉해요', result: '친구가 말하기를 겁내게 돼요.', mood: '속상함', why: '재촉을 받은 친구는 어떤 마음일까요?' },
                { id: 'slow', text: '천천히 말하고 몸짓도 함께 써요', result: '친구가 알아듣고 웃으며 대답했어요.', mood: '기쁨' },
                { id: 'avoid', text: '말이 안 통하니 피해요', result: '친구가 혼자 쉬는 시간을 보내요.', mood: '외로움', why: '피하면 친구는 어떤 하루를 보낼까요?' }] }, target: { choice: 'slow' }, difficulty: 0.1 },
              { prompt: '급식에서 친구가 어떤 음식을 먹지 않아요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '민지', situation: '민지는 가족과 지키는 약속 때문에 먹지 않는 음식이 있어요. 오늘 급식에 그 음식이 나왔어요.', choices: [
                { id: 'force', text: '"그냥 먹어 봐" 하고 계속 권해요', result: '민지가 곤란해해요.', mood: '걱정', why: '먹지 않는 까닭이 있는 친구에게 계속 권하면 어떨까요?' },
                { id: 'okay', text: '"그렇구나" 하고 그대로 받아들여요', result: '민지가 편안하게 급식을 먹었어요.', mood: '편안함' },
                { id: 'tell', text: '다른 친구들에게 "민지는 이상해" 하고 말해요', result: '민지가 급식 시간이 싫어졌어요.', mood: '속상함', why: '이상하다는 말을 들은 민지의 마음을 떠올려 봐요.' }] }, target: { choice: 'okay' }, difficulty: 0.15 },
              { prompt: '친구 이름이 다른 나라 이름이라 부르기 어려워요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '새 친구의 이름이 다른 나라 이름이라 처음에 부르기 어려워요.', choices: [
                { id: 'nick', text: '마음대로 별명을 붙여 불러요', result: '친구는 자기 이름이 불리지 않아 서운해요.', mood: '속상함', why: '내 이름 대신 별명으로 불리면 어떨까요?' },
                { id: 'ask', text: '"어떻게 부르면 돼?" 하고 물어 연습해요', result: '친구가 기뻐하며 이름을 천천히 알려 줬어요.', mood: '기쁨' }] }, target: { choice: 'ask' }, difficulty: 0.1,
                predict: { q: '이름을 부르기 어려우면 어떻게 하는 게 좋을까요?', options: ['별명으로 불러요', '물어보고 연습해요'], answer: 1 },
                conclude: '친구의 이름을 바르게 불러 주는 것도 존중이에요.' },
              { prompt: '약속 달력을 보고, 한 주 동안 우리 반 약속을 지킨 내가 뿌듯한 마음의 크기를 솔직하게 골라 보세요. 정답은 없어요.', toolOptions: { mode: 'scale', situation: '일주일 동안 약속 달력에 ○를 그렸어요. 지킨 날도, 못 지킨 날도 있어요.', feeling: '뿌듯함', after: '못 지킨 날이 있어도 괜찮아요. 다음에 어떻게 할지 떠올리면 돼요.' }, target: { level: 'any' }, difficulty: 0.05 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 내 약속 돌아보기', minutes: 12, tool: 'mindmap',
            teacher: '"상황과 그때 지킬 약속을 이어 봐요." 이어 본 뒤 약속 달력을 보며 지킨 날과 못 지킨 날을 짝에게 말하게 한다. 못 지킨 날이 있어도 괜찮고, 다음에 어떻게 할지 떠올리는 것이 습관을 만드는 길이라고 말한다.',
            task: '상황과 그때 지킬 약속을 잇고, 일주일 동안 지킨 정도를 솔직하게 돌아봐요.',
            levels: CARD_LV,
            items: [
              { prompt: '상황과 그때 지킬 약속을 이어 보세요.', toolOptions: { mode: 'match', topic: '약속대로 하면', slots: [{ id: 's1', label: '친구가 처음 보는 놀이를 가져왔어요' }, { id: 's2', label: '친구가 다른 나라 노래를 불러요' }] , cards: ['"어떻게 하는 놀이야?" 하고 함께 해 봐요', '"무슨 뜻이야?" 하고 물어요'] },
                target: { match: { s1: '"어떻게 하는 놀이야?" 하고 함께 해 봐요', s2: '"무슨 뜻이야?" 하고 물어요' } }, difficulty: 0.1 },
              { prompt: '약속을 지키기 어려웠던 날 다음에 할 일만 골라 보세요.', toolOptions: { mode: 'pick', basket: '다음에 할 일', cards: ['포스터를 보고 약속을 떠올려요', '친구에게 먼저 사과해요', '어차피 못 지키니 그만둬요'] },
                target: { pick: ['포스터를 보고 약속을 떠올려요', '친구에게 먼저 사과해요'] }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['포스터를 보고 약속을 떠올려요', '친구에게 먼저 사과해요', '어차피 못 지키니 그만둬요', '못 지킨 날은 달력에 아무것도 안 써요'] } } } },
              { prompt: '약속 달력을 보며 지킨 날과 못 지킨 날, 다음에 할 일을 짝에게 말했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"다음 주에도 약속을 지키려면 무엇을 도와주면 좋을까요?" 포스터를 잘 보이는 곳으로 옮기기, 서로 알려 주기 같은 생각을 모은다. 약속 달력은 한 주 더 이어서 쓰게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'branch', situation: '체육 시간에 다른 나라에서 온 친구가 규칙을 잘 몰라 헤매요.', choices: [{ id: 'show', text: '규칙을 천천히 보여 주며 알려 줘요' }, { id: 'out', text: '"너는 빠져" 하고 말해요' }] }, prompt: '체육 시간 상황에서 약속에 맞는 행동을 골라 보세요.', target: { choice: 'show' }, difficulty: 0.1 },
          { type: 'choice', prompt: '약속을 못 지킨 날이 있을 때 알맞은 생각은?', options: ['다음에 어떻게 할지 떠올려요', '약속을 버려요', '숨겨요'], answer: 0, difficulty: 0.1, explain: '못 지킨 날을 돌아보고 다음을 다짐하면 습관이 돼요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '존중 약속 돌아보기',
      items: [
        { type: 'table', prompt: '상황마다 약속대로 할 행동을 쓰세요.', columns: ['상황', '약속대로 할 행동'], cells: [['우리말이 서툰 친구', ''], ['먹지 않는 음식이 있는 친구', ''], ['부르기 어려운 이름', '']] },
        { type: 'table', prompt: '이번 주 약속 달력을 다시 그리세요. 지킨 날에 ○', columns: ['월', '화', '수', '목', '금'], rows: 1 },
        { type: 'short', prompt: '약속을 지키기 어려웠던 날과 다음에 할 일을 쓰세요.' },
        { type: 'choice', prompt: '처음 보는 상황에서 약속대로 한 행동에 ○ 하세요.', options: ['"어떻게 부르면 돼?" 하고 물어요', '마음대로 별명을 붙여요', '모른 척해요'], answer: '"어떻게 부르면 돼?" 하고 물어요' },
      ],
      easy: {
        note: '천천히 말하고, 묻고, 함께해요.',
        items: [
          { type: 'choice', prompt: '우리말이 서툰 친구에게 알맞은 행동에 ○ 하세요.', options: ['천천히 말해요', '재촉해요'], answer: '천천히 말해요' },
          { type: 'table', prompt: '약속을 지킨 날에 ○를 그리세요.', columns: ['월', '화', '수', '목', '금'], rows: 1 },
          { type: 'draw', prompt: '약속을 지킨 순간을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 짝에 초록 테두리가 생기고, 고른 행동의 결과가 바로 보여요.',
      base: '상황마다 고른 뒤 결과를 소리 내어 읽어요.',
      challenge: '상황마다 상대 친구의 마음을 한 낱말로 덧붙여 말하고, 우리 반 약속에 새로 넣을 내용을 하나 제안해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 약속을 정한 상황에서만 지키고 새로운 상황에는 잇지 못한다 → "이 상황에서 우리 약속은 무엇을 하라고 했지?"를 먼저 묻는다. ② 먹지 않는 음식의 까닭을 캐묻는다 → 까닭을 몰라도 받아들이는 것이 존중이라고 말한다. ③ 못 지킨 날을 숨긴다 → 솔직하게 돌아보는 것이 더 중요하다고 말해 준다.',
  }));

  lessons.push(L(24, {
    title: '외국 친구에게 우리 문화를 소개해 보기',
    objective: '외국 친구의 자리에서 우리 문화가 낯설 수 있다는 것을 알고, 한복·김치·세배 같은 우리 문화를 쉬운 말로 소개할 수 있다.',
    illustration: ART('a Korean child showing a paper hanbok, kimchi jar and chopsticks to a visiting friend from abroad, both smiling with paper speech bubbles', '우리 문화를 소개해요', [
      { motif: 'house', x: 110, y: 214, color: 'peach' }, { motif: 'flower', x: 400, y: 228 }, { motif: 'sun', x: 410, y: 56, s: 0.5 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"다른 나라 친구가 처음 우리나라에 오면 무엇이 낯설까요?" 김치, 젓가락, 바닥에 앉는 것 같은 대답을 듣는다. "우리가 다른 나라 문화를 낯설게 느꼈던 것처럼, 외국 친구도 우리 문화를 낯설게 느낄 수 있어요." 시연 단추로 \'한복\'이 소개하는 말과 이어지는 모습을 보여 준다.',
        student: '외국 친구에게 꼭 보여 주고 싶은 우리 문화를 하나 떠올려 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '이렇게 소개해요', slots: [{ id: 's1', label: '한복' }], cards: ['명절에 입는 우리 옷이에요', '배추로 만든 음식이에요'], shuffle: false }, sequence: [{ match: { s1: '명절에 입는 우리 옷이에요' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 우리 문화를 쉬운 말로 소개하기', minutes: 13, tool: 'mindmap',
            teacher: '"외국 친구는 \'세배\'라는 말을 몰라요. 어떻게 말하면 알아들을까요?" 무엇인지·언제 하는지를 쉬운 말로 풀어 말하게 한다. 우리나라는 젓가락과 숟가락을 함께 쓰고, 쇠젓가락을 많이 쓴다는 것을 알려 준다. 소개할 때 "우리 것이 최고야"처럼 다른 나라를 낮추는 말은 하지 않는다는 것을 짚는다.',
            task: '우리 문화와 그것을 소개하는 쉬운 말을 잇고, 소개할 때 알맞은 태도를 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '우리 문화와 소개하는 말을 이어 보세요.', toolOptions: { mode: 'match', topic: '이렇게 소개해요', slots: [{ id: 's1', label: '김치' }, { id: 's2', label: '세배' }], cards: ['배추에 양념을 버무려 익힌 음식이에요', '설날에 어른께 하는 큰절이에요'] },
                target: { match: { s1: '배추에 양념을 버무려 익힌 음식이에요', s2: '설날에 어른께 하는 큰절이에요' } }, difficulty: 0.1 },
              { prompt: '세 가지 우리 문화와 소개하는 말을 이어 보세요.', toolOptions: { mode: 'match', topic: '이렇게 소개해요', slots: [{ id: 's1', label: '온돌' }, { id: 's2', label: '수저' }, { id: 's3', label: '윷놀이' }], cards: ['바닥을 데워 따뜻하게 해요', '젓가락과 숟가락을 함께 써요', '나무 막대 네 개를 던져 말을 옮겨요'] },
                target: { match: { s1: '바닥을 데워 따뜻하게 해요', s2: '젓가락과 숟가락을 함께 써요', s3: '나무 막대 네 개를 던져 말을 옮겨요' } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['바닥을 데워 따뜻하게 해요', '젓가락과 숟가락을 함께 써요', '나무 막대 네 개를 던져 말을 옮겨요', '명절에 입는 우리 옷이에요'] } } } },
              { prompt: '우리 문화를 소개할 때 알맞은 태도만 골라 보세요.', toolOptions: { mode: 'pick', basket: '알맞은 태도', cards: ['낯설 수 있다고 생각하고 천천히 알려 줘요', '친구 나라 문화도 물어봐요', '"우리 것이 최고야" 하고 말해요', '모르면 놀려요'] },
                target: { pick: ['낯설 수 있다고 생각하고 천천히 알려 줘요', '친구 나라 문화도 물어봐요'] }, difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 외국 친구 역할놀이', minutes: 14, tool: 'emotion',
            teacher: '짝끼리 한 사람은 처음 우리나라에 온 친구, 한 사람은 소개하는 친구가 되어 역할놀이를 한다(4분씩 바꾸어). 외국 친구 역할은 "이건 뭐야?", "왜 그렇게 해?" 하고 묻는다. 역할놀이 뒤 외국 친구가 김치를 낯설어하는 상황을 보며 "우리가 타코를 처음 봤을 때와 같아요"라고 이어 준다.',
            task: '짝과 외국 친구 역할놀이를 하고, 외국 친구가 우리 문화를 낯설어할 때 할 말을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '짝과 역할을 바꾸어 우리 문화 소개 역할놀이를 했으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '외국 친구가 김치를 보고 "맵고 낯설어" 하고 말해요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '처음 우리나라에 온 친구가 김치를 보고 "맵고 낯설어" 하고 말해요.', choices: [
                { id: 'angry', text: '"김치를 싫어하다니!" 하고 화를 내요', result: '친구가 우리 음식을 더 어려워하게 돼요.', mood: '속상함', why: '우리가 낯선 음식을 처음 봤을 때를 떠올려 봐요.' },
                { id: 'gentle', text: '"처음엔 그럴 수 있어. 덜 매운 백김치는 어때?" 하고 말해요', result: '친구가 백김치를 맛보고 웃었어요.', mood: '기쁨' }] }, target: { choice: 'gentle' }, difficulty: 0.1 },
              { prompt: '외국 친구가 바닥에 앉아 밥 먹는 것을 어색해해요. 친구의 마음 카드를 놓아 보세요.', toolOptions: { cards: ['걱정', '편안함', '화남'], slots: [{ id: 's1', label: '처음 바닥에 앉았을 때' }, { id: 's2', label: '방석을 받고 앉는 법을 배운 뒤' }] },
                target: { match: { s1: '걱정', s2: '편안함' } }, difficulty: 0.1,
                conclude: '외국 친구도 우리처럼 낯선 것을 걱정하다가, 알고 나면 편안해져요.' },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"13~24차시를 돌아보면, 다른 나라 문화를 대하는 내 마음은 어떻게 달라졌나요?" 서너 명이 말한다. "다름을 존중하는 것은 다른 나라에 대해서도, 우리를 처음 보는 친구에 대해서도 같아요." 다음 시간부터는 세계 여러 나라의 노래를 들어 본다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '이렇게 소개해요', slots: [{ id: 'e1', label: '송편' }, { id: 'e2', label: '한글' }], cards: ['추석에 빚어 먹는 떡이에요', '세종 대왕 때 만든 우리 글자예요'] }, prompt: '우리 문화와 소개하는 말을 이어 보세요.', target: { match: { e1: '추석에 빚어 먹는 떡이에요', e2: '세종 대왕 때 만든 우리 글자예요' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '외국 친구가 우리 문화를 낯설어할 때 알맞은 생각은?', options: ['처음엔 누구나 낯설 수 있어요', '우리 문화를 싫어하는 거예요', '알려 줄 필요 없어요'], answer: 0, difficulty: 0.1, explain: '우리도 다른 나라 문화를 처음 볼 때 낯설었던 것처럼, 외국 친구도 그래요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '우리 문화 소개 카드',
      items: [
        { type: 'draw', wide: true, prompt: '외국 친구에게 소개하고 싶은 우리 문화를 그리세요.' },
        { type: 'table', prompt: '소개 카드를 채우세요.', columns: ['소개할 것', '무엇인가요?', '언제 하나요(쓰나요)?'], rows: 2 },
        { type: 'choice', prompt: '소개할 때 알맞은 말에 ○ 하세요.', options: ['"처음엔 낯설 수 있어"', '"우리 것이 최고야"', '"그것도 몰라?"'], answer: '"처음엔 낯설 수 있어"' },
        { type: 'short', prompt: '외국 친구에게 묻고 싶은 그 나라 문화를 쓰세요.' },
      ],
      easy: {
        note: '무엇인지, 언제 하는지 쉬운 말로!',
        items: [
          { type: 'choice', prompt: '설날에 어른께 하는 큰절은?', options: ['세배', '윷놀이'], answer: '세배' },
          { type: 'choice', prompt: '명절에 입는 우리 옷은?', options: ['한복', '기모노'], answer: '한복' },
          { type: 'draw', prompt: '소개하고 싶은 우리 문화를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 짝에 초록 테두리가 생기고, 고른 행동의 결과가 바로 보여요. 역할놀이는 소개 카드를 읽어요.',
      base: '모두 이은 뒤 확인을 눌러요. 짝과 역할을 바꾸어 소개해요.',
      challenge: '잇기에 함정 카드가 하나 더 있어요. 소개 카드에 \'왜 그렇게 하는지\'까지 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 우리 문화를 낯설어하는 외국 친구를 \'싫어한다\'고 여긴다 → 우리가 타코·만칼라를 처음 봤을 때의 마음과 견준다. ② 소개를 어려운 말로 한다(세배, 온돌만 말함) → "무엇인지, 언제 하는지"를 풀어 말하게 한다. ③ 우리 문화가 최고라고 말한다 → 자랑과 낮춤을 구별해 준다. 사실 확인: 윷놀이는 나무 막대 네 개(윷가락)를 던져 말을 옮기고, 한글은 세종 대왕 때 만들었다(1443년 창제, 1446년 반포).',
  }));

  // ───────────────────────── 25~28차시: 세계의 노래에서 되풀이·센 박 찾기 ─────────────────────────
  // 건반 단계: 쉬움은 듣는 동안 건반이 비치고 계이름이 보임, 보통은 계이름만, 도전은 계이름을 숨기고 귀로만 찾는다
  var KEY_LV = {
    easy: { mode: 'melody', from: '도', to: '높은도', names: 'solfa', showWhileListening: true },
    base: { mode: 'melody', from: '도', to: '높은도', names: 'solfa' },
    challenge: { mode: 'melody', from: '도', to: '높은도', names: 'none', nameToggle: false },
  };
  var KEY_LOW_LV = {
    easy: { mode: 'melody', from: '낮은솔', to: '높은도', names: 'solfa', showWhileListening: true },
    base: { mode: 'melody', from: '낮은솔', to: '높은도', names: 'solfa' },
    challenge: { mode: 'melody', from: '낮은솔', to: '높은도', names: 'none', nameToggle: false },
  };
  // 노래 모양 띠: 같은 가락 줄은 같은 모양 조각으로 나타낸다(별 = 첫 가락, 동그라미 = 둘째 가락, 세모 = 셋째 가락)
  var FORM = ['star', 'circle', 'triangle'];

  lessons.push(L(25, {
    title: '반짝반짝 작은 별에서 같은 가락 찾기',
    objective: '프랑스 민요 \'반짝반짝 작은 별\'을 듣고 첫 줄과 똑같은 가락이 다시 나오는 곳을 찾아, 노래 모양을 모양 조각으로 나타낼 수 있다.',
    illustration: ART('a night sky of paper stars arranged in rows, the same star shape repeating on the first and fifth rows, a child pointing with a paper wand', '같은 가락을 찾아요', [
      { motif: 'star', x: 110, y: 110, s: 0.6 }, { motif: 'star', x: 370, y: 110, s: 0.6 }, { motif: 'moon', x: 240, y: 70, s: 0.5 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"이 노래 들어 본 적 있나요? 프랑스에서 오래전부터 불러 온 노래예요." 반짝반짝 작은 별 가락을 한 번 들려준다. "노래를 들으며 \'어, 아까 들었던 가락이다!\' 하는 곳이 있으면 손을 들어요." 시연 단추로 첫 줄 가락이 건반에서 쳐지는 모습을 보여 준다.',
        student: '아는 노래 가운데 같은 가락이 되풀이되는 노래를 떠올려 봐요.',
        demo: { tool: 'keyboard', options: { mode: 'melody', from: '도', to: '높은도', melody: ['도', '도', '솔', '솔', '라', '라', '솔'] }, sequence: [{ notes: ['도', '도', '솔', '솔', '라', '라', '솔'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 줄마다 가락 따라 치기', minutes: 13, tool: 'keyboard',
            teacher: '"줄마다 가락 듣기를 눌러 들은 대로 쳐 봐요. 높아지면 오른쪽, 낮아지면 왼쪽이에요." 같은 음이 두 번씩 이어지는 것(도도, 솔솔)을 손가락으로 두 번 누르게 한다. 마지막에 노래 전체를 다시 들려주고, 첫 줄 가락이 다시 나올 때마다 두 손을 머리 위로 올리게 한다.',
            task: '반짝반짝 작은 별의 줄마다 가락을 듣고 똑같이 친 뒤, 같은 가락이 다시 나올 때 몸으로 표시해요.',
            levels: KEY_LV,
            items: [
              { prompt: '반짝반짝 작은 별 첫째 줄 가락이에요. 가락 듣기를 누르고 똑같이 쳐 보세요.', toolOptions: { melody: ['도', '도', '솔', '솔', '라', '라', '솔'] }, target: { notes: ['도', '도', '솔', '솔', '라', '라', '솔'] }, difficulty: 0.2,
                levels: { easy: { prompt: '반짝반짝 작은 별 첫째 줄의 앞 네 음이에요. 가락 듣기를 누르고 똑같이 쳐 보세요.', toolOptions: { melody: ['도', '도', '솔', '솔'] }, target: { notes: ['도', '도', '솔', '솔'] } } } },
              { prompt: '둘째 줄 가락이에요. 첫째 줄과 달리 차례로 내려가요. 가락 듣기를 누르고 똑같이 쳐 보세요.', toolOptions: { melody: ['파', '파', '미', '미', '레', '레', '도'] }, target: { notes: ['파', '파', '미', '미', '레', '레', '도'] }, difficulty: 0.25,
                levels: { easy: { prompt: '둘째 줄의 앞 네 음이에요. 가락 듣기를 누르고 똑같이 쳐 보세요.', toolOptions: { melody: ['파', '파', '미', '미'] }, target: { notes: ['파', '파', '미', '미'] } } } },
              { prompt: '셋째 줄 가락이에요. 가락 듣기를 누르고 똑같이 쳐 보세요.', toolOptions: { melody: ['솔', '솔', '파', '파', '미', '미', '레'] }, target: { notes: ['솔', '솔', '파', '파', '미', '미', '레'] }, difficulty: 0.25,
                levels: { easy: { prompt: '셋째 줄의 앞 네 음이에요. 가락 듣기를 누르고 똑같이 쳐 보세요.', toolOptions: { melody: ['솔', '솔', '파', '파'] }, target: { notes: ['솔', '솔', '파', '파'] } } } },
              { prompt: '노래 전체를 들으며 첫째 줄 가락이 다시 나올 때 두 손을 머리 위로 올렸으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 노래 모양을 조각으로 나타내기', minutes: 13, tool: 'pattern',
            teacher: '"같은 가락인 줄에는 같은 모양을 놓아요. 첫째 줄은 별, 둘째 줄은 동그라미, 셋째 줄은 세모예요." 선생님이 줄마다 끊어 들려주면 학생은 앞에서 들은 줄과 견주어 조각을 놓는다. 넷째 줄은 셋째 줄과 똑같이 되풀이된다는 것도 귀로 찾게 한다. 가락이 같다는 것은 음의 높낮이 차례가 같다는 뜻이라고 말해 준다.',
            task: '반짝반짝 작은 별의 여섯 줄을 같은 가락끼리 같은 모양으로 나타내요.',
            levels: { easy: { palette: FORM }, base: { palette: FORM }, challenge: { palette: FORM.concat(['heart']) } },
            items: [
              { prompt: '첫째~넷째 줄과 여섯째 줄을 모양으로 나타냈어요. 다섯째 줄 가락을 들려줄게요. 빈칸에 알맞은 모양을 넣어 보세요.', toolOptions: { seq: ['star', 'circle', 'triangle', 'triangle', null, 'circle'] }, target: { fill: ['star'] }, difficulty: 0.2,
                hints: ['빈칸 줄 가락을 다시 듣고, 앞에서 들은 줄 가운데 높낮이 차례가 똑같은 줄을 떠올려요.', '고른 모양의 줄 가락과 빈칸 줄 가락을 번갈아 들어 보세요. 첫 음부터 끝 음까지 같나요?', '다섯째 줄은 도도솔솔라라솔로, 맨 처음 줄과 똑같은 가락이에요. 첫째 줄과 같은 모양을 넣어요.'] },
              { prompt: '첫째·둘째·셋째·다섯째 줄을 모양으로 나타냈어요. 넷째와 여섯째 줄 가락을 듣고 빈칸 두 곳을 채워 보세요.', toolOptions: { seq: ['star', 'circle', 'triangle', null, 'star', null] }, target: { fill: ['triangle', 'circle'] }, difficulty: 0.3,
                levels: { easy: { prompt: '첫째~다섯째 줄을 모양으로 나타냈어요. 마지막 여섯째 줄 가락을 듣고 빈칸을 채워 보세요.', toolOptions: { seq: ['star', 'circle', 'triangle', 'triangle', 'star', null] }, target: { fill: ['circle'] } } },
                hints: ['빈칸마다 그 줄 가락을 따로 듣고, 앞에서 이미 모양을 정한 줄과 하나씩 견주어요.', '넷째 줄이 바로 앞 줄과 같은지 먼저 들어 보세요. 마지막 줄은 노래가 \'도\'로 끝나는 줄과 같나요?', '넷째 줄은 셋째 줄(솔솔파파미미레)과 같아 세모, 여섯째 줄은 둘째 줄(파파미미레레도)과 같아 동그라미예요.'] },
              { prompt: '친구가 노래 모양을 나타냈는데 한 조각이 노래와 달라요. 별·동그라미·세모·세모·별·별 가운데 틀린 조각을 골라 보세요.', toolOptions: { mode: 'odd', seq: ['star', 'circle', 'triangle', 'triangle', 'star', 'star'], question: '노래와 다르게 놓인 조각을 눌러 고르세요.' }, target: { odd: 5 }, difficulty: 0.3,
                hints: ['노래를 처음부터 다시 들으며 조각을 한 줄씩 손가락으로 짚어요.', '마지막 줄 가락이 \'도\'로 끝나나요, \'솔\'로 끝나나요? 그 끝 음과 맞는 모양인지 보세요.', '여섯째 줄은 파파미미레레도로 둘째 줄과 같아요. 그런데 별이 놓여 있으니 여섯째 조각이 틀렸어요.'] },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"노래에 같은 가락이 다시 나오면 무엇이 좋을까요?" 외우기 쉽다, 따라 부르기 쉽다는 대답을 모은다. 모둠마다 모양 띠를 보며 노래를 한 번 더 듣고, 모양을 손가락으로 짚어 따라가게 한다. 다음 시간에는 런던 다리 노래에서 센 박을 찾는다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'pattern', options: { seq: ['star', 'circle', 'triangle', 'triangle', 'star', null], palette: FORM }, prompt: '노래 모양 띠의 마지막 빈칸에 알맞은 모양을 넣어 보세요. 마지막 줄 가락을 다시 들어도 좋아요.', target: { fill: ['circle'] }, difficulty: 0.2,
            hints: ['마지막 줄 가락을 듣고, 앞에서 모양을 정한 줄 가운데 높낮이 차례가 같은 줄을 찾아요.', '마지막 줄이 차례로 내려가며 \'도\'로 끝나는지 들어 보세요.', '마지막 줄은 둘째 줄과 같은 가락이라 동그라미예요.'] },
          { type: 'choice', prompt: '반짝반짝 작은 별에서 첫째 줄과 똑같은 가락이 다시 나오는 줄은?', options: ['둘째 줄', '다섯째 줄', '여섯째 줄'], answer: 1, difficulty: 0.2, explain: '다섯째 줄에서 첫째 줄 가락(도도솔솔라라솔)이 다시 나와요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '반짝반짝 작은 별의 모양',
      items: [
        { type: 'table', prompt: '줄마다 가락을 듣고 같은 가락이면 같은 모양을 그리세요.', columns: ['첫째', '둘째', '셋째', '넷째', '다섯째', '여섯째'], cells: [['★', '●', '▲', '', '', '']] },
        { type: 'figure', wide: true, prompt: '첫째 줄 가락 \'도도솔솔라라솔\'에서 가장 높은 음의 건반에 ○ 하세요.', tool: 'keyboard', figures: [{ options: { mode: 'melody', from: '도', to: '높은도', printNames: true }, caption: '' }], answer: '라' },
        { type: 'choice', prompt: '같은 가락이 되풀이되면 좋은 점에 ○ 하세요.', options: ['노래를 외우기 쉬워요', '노래가 짧아져요', '박이 빨라져요'], answer: '노래를 외우기 쉬워요' },
        { type: 'short', prompt: '같은 가락이 되풀이되는 다른 노래를 하나 쓰세요.' },
      ],
      easy: {
        note: '같은 가락 = 같은 모양!',
        items: [
          { type: 'table', prompt: '빈칸에 들은 가락의 모양을 그리세요.', columns: ['첫째', '둘째', '셋째', '넷째', '다섯째', '여섯째'], cells: [['★', '●', '▲', '▲', '', '●']] },
          { type: 'choice', prompt: '같은 가락이 다시 나올 때 한 몸짓은?', options: ['두 손을 머리 위로', '발 구르기'], answer: '두 손을 머리 위로' },
          { type: 'draw', prompt: '반짝이는 별을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '가락을 듣는 동안 건반이 비치고, 앞 네 음만 쳐요. 모양 띠는 빈칸이 하나예요.',
      base: '계이름을 보며 한 줄을 다 쳐요. 모양 띠의 빈칸 두 곳을 채워요.',
      challenge: '계이름을 숨기고 귀로만 쳐요. 모양 고르개에 함정 모양(하트)이 하나 더 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 첫 두세 음만 같아도 같은 가락이라고 여긴다 → 첫째 줄과 셋째 줄(솔솔파파…)을 번갈아 들려주어 끝까지 견주게 한다. ② 같은 음이 두 번인 것(도도)을 한 번만 친다 → 손가락으로 두 번 톡톡 누르게 한다. ③ 모양과 줄 번호를 헷갈린다 → 모양 띠 위에 줄 번호를 붙인다. 노래는 18세기 프랑스 민요 가락만 쓰고 가사는 싣지 않았다. 가락: 도도솔솔라라솔 / 파파미미레레도 / 솔솔파파미미레 ×2 / 첫 두 줄 되풀이.',
  }));

  lessons.push(L(26, {
    title: '런던 다리 노래에서 센 박에 무릎 치기',
    objective: '영국 전래 동요 \'런던 다리\'를 들으며 센 박(쿵)과 여린 박(짝)이 차례로 되풀이되는 것을 찾아 몸으로 치고, 쿵짝 띠를 완성할 수 있다.',
    illustration: ART('a paper stone bridge over a river with children marching across, big footprints for strong beats and small footprints for weak beats', '쿵 짝 쿵 짝', [
      { motif: 'wave', x: 240, y: 230 }, { motif: 'house', x: 90, y: 196, color: 'sky' }, { motif: 'tree', x: 400, y: 196 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"걸을 때 왼발, 오른발이 차례로 되풀이되지요. 노래에도 그런 걸음이 있어요." 런던 다리 가락을 들려주며 선생님이 큰 걸음(쿵)과 작은 걸음(짝)으로 걷는다. "어떤 걸음이 더 세게 들렸나요?" 시연 단추로 쿵짝 띠의 빈칸이 채워지는 모습을 보여 준다.',
        student: '자리에서 쿵(무릎), 짝(손뼉)을 천천히 번갈아 쳐 봐요.',
        demo: { tool: 'pattern', options: { seq: ['쿵', '짝', '쿵', '짝', '쿵', null], palette: ['쿵', '짝'] }, sequence: [{ fill: ['짝'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 런던 다리 가락 듣고 치기', minutes: 12, tool: 'keyboard',
            teacher: '"런던 다리 첫 줄 가락을 듣고 쳐 봐요." 친 뒤 선생님이 가락을 들려줄 때 첫 음 \'솔\'처럼 마디 첫 음에서 무릎을 세게 치게 한다. 노래가 끝날 때까지 쿵짝을 멈추지 않고 이어 가게 한다(3분). 가사는 부르지 않고 \'라라라\'로 흥얼거려도 된다.',
            task: '런던 다리 가락을 듣고 똑같이 친 뒤, 노래에 맞춰 쿵(무릎) 짝(손뼉)을 쳐요.',
            levels: KEY_LV,
            items: [
              { prompt: '런던 다리 첫 줄 가락이에요. 가락 듣기를 누르고 똑같이 쳐 보세요.', toolOptions: { melody: ['솔', '라', '솔', '파', '미', '파', '솔'] }, target: { notes: ['솔', '라', '솔', '파', '미', '파', '솔'] }, difficulty: 0.25,
                levels: { easy: { prompt: '런던 다리 첫 줄의 앞 네 음이에요. 가락 듣기를 누르고 똑같이 쳐 보세요.', toolOptions: { melody: ['솔', '라', '솔', '파'] }, target: { notes: ['솔', '라', '솔', '파'] } } } },
              { prompt: '첫 줄 다음에 나오는 짧은 가락 두 개예요. 가락 듣기를 누르고 똑같이 쳐 보세요.', toolOptions: { melody: ['레', '미', '파', '미', '파', '솔'] }, target: { notes: ['레', '미', '파', '미', '파', '솔'] }, difficulty: 0.25,
                levels: { easy: { prompt: '첫 줄 다음에 나오는 짧은 가락이에요. 가락 듣기를 누르고 똑같이 쳐 보세요.', toolOptions: { melody: ['레', '미', '파'] }, target: { notes: ['레', '미', '파'] } } } },
              { prompt: '런던 다리를 끝까지 들으며 쿵(무릎)과 짝(손뼉)을 멈추지 않고 쳤으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 쿵짝 띠 완성하기', minutes: 14, tool: 'pattern',
            teacher: '"쿵 다음에는 무엇이 오나요?" 띠를 채우기 전에 손으로 쿵짝을 쳐 보며 빈칸을 찾게 한다. 쿵이 두 번 이어지는 띠는 걸음이 엉킨 것과 같다는 것을 걸어 보며 확인한다. 센 박은 \'크게 부르는 음\'이 아니라 박을 셀 때 \'하나\'에 오는 박이라고 짚어 준다.',
            task: '센 박(쿵)과 여린 박(짝)이 되풀이되는 띠의 빈칸을 채우고, 엉킨 곳을 찾아요.',
            levels: { easy: { palette: ['쿵', '짝'] }, base: { palette: ['쿵', '짝'] }, challenge: { palette: ['쿵', '짝', '쉬'] } },
            items: [
              { prompt: '런던 다리를 들으며 친 쿵짝 띠예요. 빈칸 두 곳을 채워 보세요.', toolOptions: { seq: ['쿵', '짝', '쿵', '짝', null, '짝', '쿵', null] }, target: { fill: ['쿵', '짝'] }, difficulty: 0.1,
                hints: ['띠 앞부분을 손으로 쳐 보며, 두 박이 한 묶음으로 되풀이되는지 살펴요.', '빈칸 바로 앞 조각을 보세요. 그 다음에는 늘 어떤 박이 왔나요?', '센 박 다음에는 여린 박, 여린 박 다음에는 센 박이 와요. 다섯째 칸은 쿵, 여덟째 칸은 짝이에요.'] },
              { prompt: '쿵짝 띠에서 걸음이 엉킨 곳이 하나 있어요. 되풀이를 깨뜨린 조각을 골라 보세요.', toolOptions: { mode: 'odd', seq: ['쿵', '짝', '쿵', '짝', '쿵', '쿵', '쿵', '짝'], question: '쿵짝 되풀이를 깨뜨린 조각을 눌러 고르세요.' }, target: { odd: 5 }, difficulty: 0.25,
                hints: ['처음부터 두 조각씩 묶어 손으로 쳐 보며 따라가요.', '세 번째 묶음을 보세요. 두 조각이 같은 박으로 이어지지 않나요?', '여섯째 조각이 짝이어야 하는데 쿵이 놓였어요.'] },
              { prompt: '쿵짝이 네 번 되풀이되는 띠를 만들어 보세요.', toolOptions: { mode: 'make', length: 8 }, target: { rule: 'core', core: ['쿵', '짝'] }, difficulty: 0.15,
                levels: { easy: { prompt: '쿵짝이 두 번 되풀이되는 띠를 만들어 보세요.', toolOptions: { length: 4 } } },
                hints: ['센 박으로 시작해 두 박 묶음을 정하고, 그 묶음을 똑같이 이어 붙여요.', '띠의 홀수 칸(1·3·5·7)과 짝수 칸에 놓인 조각이 늘 같은지 보세요.', '쿵, 짝, 쿵, 짝…처럼 쿵으로 시작해 번갈아 놓아요.'] },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"쿵짝 띠를 보며 다 함께 런던 다리를 들어 볼까요?" 모둠마다 만든 띠를 짚으며 친다. "센 박을 찾으면 노래에 맞춰 걷기도, 악기를 치기도 쉬워요." 다음 시간에는 쿵짝짝으로 세는 노래를 들어 본다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'pattern', options: { seq: ['쿵', '짝', null, '짝', '쿵', null], palette: ['쿵', '짝'] }, prompt: '쿵짝 띠의 빈칸 두 곳을 채워 보세요.', target: { fill: ['쿵', '짝'] }, difficulty: 0.1,
            hints: ['두 조각이 한 묶음으로 되풀이되는지 손으로 쳐 보며 확인해요.', '빈칸 바로 앞 조각 다음에는 늘 어떤 박이 왔는지 보세요.', '센 박과 여린 박이 번갈아 와요. 셋째 칸은 쿵, 여섯째 칸은 짝이에요.'] },
          { type: 'choice', prompt: '박을 셀 때 \'하나\'에 오는 박은?', options: ['센 박', '여린 박'], answer: 0, difficulty: 0.15, explain: '\'하나\'에 오는 박을 센 박이라고 하고, 쿵으로 쳐요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '쿵짝 띠',
      items: [
        { type: 'blank', prompt: '되풀이되는 박을 채우세요.', text: '쿵 짝 쿵 ___ 쿵 짝 ___ 짝', answer: '짝, 쿵' },
        { type: 'choice', prompt: '센 박에 하는 몸짓에 ○ 하세요.', options: ['무릎 치기(쿵)', '손뼉(짝)'], answer: '무릎 치기(쿵)' },
        { type: 'table', prompt: '센 박에는 큰 ○, 여린 박에는 작은 ○를 그리세요.', columns: ['하나', '둘', '하나', '둘'], rows: 1 },
        { type: 'draw', prompt: '런던 다리를 쿵짝 걸음으로 건너는 모습을 그리세요.' },
      ],
      easy: {
        note: '쿵(무릎) 다음 짝(손뼉)!',
        items: [
          { type: 'choice', prompt: '쿵 다음에 오는 것은?', options: ['짝', '쿵'], answer: '짝' },
          { type: 'table', prompt: '쿵에는 큰 ○, 짝에는 작은 ○를 그리세요.', columns: ['쿵', '짝', '쿵', '짝'], rows: 1 },
          { type: 'draw', prompt: '다리를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '앞 네 음만 듣는 동안 건반이 비쳐요. 쿵짝 띠는 두 번만 만들어요.',
      base: '한 줄을 다 치고, 엉킨 조각을 찾아요.',
      challenge: '계이름을 숨기고 쳐요. 띠 고르개에 \'쉬\' 조각이 있어 헷갈려요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 센 박을 \'크게 부르는 음\'이나 \'높은 음\'으로 여긴다 → 하나·둘을 세며 \'하나\'에 무릎을 치게 한다. ② 쿵짝을 치다 빨라진다 → 선생님 걸음에 맞추고, 노래보다 박을 먼저 듣게 한다. ③ 무릎을 너무 세게 친다 → 손바닥으로 톡 치게 한다. 런던 다리는 영국 전래 동요 가락만 쓰고 가사는 싣지 않았다.',
  }));

  lessons.push(L(27, {
    title: '쿵짝짝으로 세는 노래와 쿵짝으로 세는 노래 나누기',
    objective: '세 박씩 묶어 세는 노래(쿵짝짝)와 두 박씩 묶어 세는 노래(쿵짝)를 듣고 구별하며, 쿵짝짝 몸짓으로 노래에 맞춰 칠 수 있다.',
    illustration: ART('two rows of paper children, one swaying side to side in groups of three, the other marching in twos, music notes floating between', '쿵짝짝, 쿵짝', [
      { motif: 'flower', x: 100, y: 226 }, { motif: 'flower', x: 400, y: 226, color: 'peach' }, { motif: 'star', x: 240, y: 70, s: 0.5 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"지난 시간 런던 다리는 쿵짝으로 셌지요. 이번 노래는 어떨까요?" 브람스 자장가 가락을 들려주며 선생님이 쿵(무릎) 짝(손뼉) 짝(손뼉)으로 친다. "몇 박마다 쿵이 왔나요?" 시연 단추로 쿵짝짝 띠가 채워지는 모습을 보여 준다.',
        student: '아기를 재울 때처럼 몸을 좌우로 천천히 흔들어 봐요.',
        demo: { tool: 'pattern', options: { seq: ['쿵', '짝', '짝', '쿵', '짝', null], palette: ['쿵', '짝'] }, sequence: [{ fill: ['짝'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 쿵짝짝 띠 만들고 치기', minutes: 13, tool: 'pattern',
            teacher: '"쿵짝짝은 쿵이 세 박마다 와요." 띠를 채우기 전에 손으로 쿵짝짝을 쳐 보게 한다. 띠를 완성한 뒤 브람스 자장가를 들으며 모둠이 함께 쿵짝짝을 친다(3분). 쿵짝짝을 \'짝이 두 번 오는 쿵짝\'으로만 보지 않고, 쿵이 오는 간격이 길어졌다는 것을 느끼게 한다.',
            task: '쿵짝짝 띠의 빈칸을 채우고 띠를 만든 뒤, 자장가에 맞춰 쿵짝짝을 쳐요.',
            levels: { easy: { palette: ['쿵', '짝'] }, base: { palette: ['쿵', '짝'] }, challenge: { palette: ['쿵', '짝', '쉬'] } },
            items: [
              { prompt: '쿵짝짝이 되풀이되는 띠예요. 빈칸 세 곳을 채워 보세요.', toolOptions: { seq: ['쿵', '짝', '짝', '쿵', null, '짝', '쿵', null, null] }, target: { fill: ['짝', '짝', '짝'] }, difficulty: 0.2,
                levels: { easy: { prompt: '쿵짝짝이 되풀이되는 띠예요. 빈칸 한 곳을 채워 보세요.', toolOptions: { seq: ['쿵', '짝', '짝', '쿵', '짝', '짝', '쿵', '짝', null] }, target: { fill: ['짝'] } } },
                hints: ['처음부터 세 조각씩 묶어 손으로 쳐 보며 빈칸을 찾아요.', '쿵이 몇 칸마다 오는지 세어 보세요. 빈칸 자리가 쿵 자리인가요?', '쿵 다음에는 짝이 두 번 와요. 빈칸 세 곳은 모두 짝이에요.'] },
              { prompt: '쿵짝짝이 세 번 되풀이되는 띠를 만들어 보세요.', toolOptions: { mode: 'make', length: 9 }, target: { rule: 'core', core: ['쿵', '짝', '짝'] }, difficulty: 0.25,
                levels: { easy: { prompt: '쿵짝짝이 두 번 되풀이되는 띠를 만들어 보세요.', toolOptions: { length: 6 } } },
                hints: ['쿵으로 시작하는 세 박 묶음을 하나 정하고, 그 묶음을 똑같이 이어 붙여요.', '1·4·7번째 칸에만 쿵이 있는지 보세요.', '쿵, 짝, 짝을 차례로 세 번 놓아요.'] },
              { prompt: '브람스 자장가를 들으며 모둠과 함께 쿵(무릎) 짝(손뼉) 짝(손뼉)을 끝까지 쳤으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 노래를 세는 법대로 나누기', minutes: 13, tool: 'mindmap',
            teacher: '노래마다 앞부분을 30초씩 들려주고, 학생은 쿵짝과 쿵짝짝을 둘 다 쳐 보며 더 잘 맞는 쪽을 고른다. 우리 민요 아리랑도 세 박씩 묶어 세며 몸을 흔들게 된다는 것을 들려준다. 노래가 느리다고 꼭 쿵짝짝인 것은 아니라는 것을 짚는다(느린 쿵짝 노래도 있다).',
            task: '노래를 듣고 쿵짝으로 세는 노래와 쿵짝짝으로 세는 노래로 나누고, 노래가 생겨난 나라를 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '노래를 듣고 세는 법대로 나누어 보세요.', toolOptions: { topic: '노래 세는 법', slots: ['쿵짝(두 박)', '쿵짝짝(세 박)'], cards: ['런던 다리', '브람스 자장가', '반짝반짝 작은 별', '아리랑'] },
                target: { sort: { '쿵짝(두 박)': ['런던 다리', '반짝반짝 작은 별'], '쿵짝짝(세 박)': ['브람스 자장가', '아리랑'] } }, difficulty: 0.25,
                levels: { challenge: { prompt: '노래 다섯 곡을 듣고 세는 법대로 나누어 보세요.', toolOptions: { cards: ['런던 다리', '브람스 자장가', '반짝반짝 작은 별', '아리랑', '프레르 자크'] }, target: { sort: { '쿵짝(두 박)': ['런던 다리', '반짝반짝 작은 별', '프레르 자크'], '쿵짝짝(세 박)': ['브람스 자장가', '아리랑'] } } } } },
              { prompt: '쿵짝짝 노래에 어울리는 몸짓만 골라 보세요.', toolOptions: { mode: 'pick', basket: '쿵짝짝 몸짓', cards: ['무릎 한 번, 손뼉 두 번', '하나에 크게 흔들고 둘·셋에 작게 흔들기', '왼발 오른발 번갈아 행진하기'] },
                target: { pick: ['무릎 한 번, 손뼉 두 번', '하나에 크게 흔들고 둘·셋에 작게 흔들기'] }, difficulty: 0.2,
                predict: { q: '느린 노래는 모두 쿵짝짝으로 셀까요?', options: ['모두 쿵짝짝이에요', '느린 쿵짝 노래도 있어요'], answer: 1 },
                conclude: '빠르기가 아니라 쿵이 몇 박마다 오는지를 들어야 세는 법을 알 수 있어요.' },
              { prompt: '노래와 그 노래가 생겨난 나라를 이어 보세요.', toolOptions: { mode: 'match', topic: '어느 나라 노래일까?', slots: [{ id: 's1', label: '런던 다리' }, { id: 's2', label: '브람스 자장가' }, { id: 's3', label: '아리랑' }], cards: ['영국', '독일', '우리나라'] },
                target: { match: { s1: '영국', s2: '독일', s3: '우리나라' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['영국', '독일', '우리나라', '프랑스'] } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"쿵짝 노래와 쿵짝짝 노래를 구별하려면 무엇을 들으면 될까요?" 학생의 말로 정리하게 한다. 쿵짝짝 노래에 맞춰 다 함께 몸을 흔들며 마친다. 다음 시간에는 프레르 자크 노래에서 같은 가락이 몇 번씩 나오는지 찾는다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'pattern', options: { seq: ['쿵', '짝', '짝', null, '짝', '짝', null, '짝', null], palette: ['쿵', '짝'] }, prompt: '쿵짝짝 띠의 빈칸 세 곳을 채워 보세요.', target: { fill: ['쿵', '쿵', '짝'] }, difficulty: 0.2,
            hints: ['세 조각씩 묶어 손으로 쳐 보며 빈칸 자리를 찾아요.', '쿵이 몇 칸마다 왔는지 세어 보세요. 빈칸이 묶음의 첫 자리인지 보세요.', '네째·일곱째 칸은 묶음의 첫 자리라 쿵, 아홉째 칸은 짝이에요.'] },
          { type: 'choice', prompt: '쿵짝짝으로 세는 노래는 쿵이 몇 박마다 오나요?', options: ['두 박마다', '세 박마다', '네 박마다'], answer: 1, difficulty: 0.15, explain: '쿵짝짝은 쿵이 세 박마다 와요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '쿵짝? 쿵짝짝?',
      items: [
        { type: 'blank', prompt: '되풀이되는 박을 채우세요.', text: '쿵 짝 짝 ___ 짝 짝 쿵 ___ 짝', answer: '쿵, 짝' },
        { type: 'table', prompt: '노래를 듣고 세는 법에 ○ 하세요.', columns: ['노래', '쿵짝', '쿵짝짝'], cells: [['런던 다리', '', ''], ['브람스 자장가', '', ''], ['아리랑', '', '']] },
        { type: 'choice', prompt: '쿵짝짝 몸짓에 ○ 하세요.', options: ['무릎 한 번, 손뼉 두 번', '무릎 한 번, 손뼉 한 번'], answer: '무릎 한 번, 손뼉 두 번' },
        { type: 'draw', prompt: '쿵짝짝에 맞춰 흔들고 싶은 모습을 그리세요.' },
      ],
      easy: {
        note: '쿵짝짝 = 무릎 한 번, 손뼉 두 번',
        items: [
          { type: 'choice', prompt: '쿵 다음에 짝이 두 번 오는 것은?', options: ['쿵짝짝', '쿵짝'], answer: '쿵짝짝' },
          { type: 'table', prompt: '쿵에는 큰 ○, 짝에는 작은 ○를 그리세요.', columns: ['쿵', '짝', '짝', '쿵', '짝', '짝'], rows: 1 },
          { type: 'draw', prompt: '자장가를 듣는 아기를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '띠는 두 번만 만들고, 노래 나누기에 맞는 칸이 초록 테두리로 보여요.',
      base: '쿵짝짝 띠를 세 번 만들고 네 노래를 나누어요.',
      challenge: '노래를 다섯 곡 나누어요. 쿵짝·쿵짝짝을 둘 다 쳐 보고 더 잘 맞는 까닭을 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 느린 노래는 쿵짝짝, 빠른 노래는 쿵짝이라고 여긴다 → 같은 빠르기로 쿵짝과 쿵짝짝을 번갈아 들려준다. ② 짝을 한 번만 친다 → \'쿵-짝-짝\'을 말로 함께 센다. ③ 노래와 박이 어긋난다 → 선생님이 첫 쿵을 크게 쳐 신호를 준다. 브람스 자장가(1868)·아리랑은 저작권이 끝난 가락으로, 음원은 공개 자료를 쓴다.',
  }));

  lessons.push(L(28, {
    title: '프레르 자크에서 두 번씩 나오는 가락 찾기',
    objective: '프랑스 민요 \'프레르 자크\'를 듣고 네 가락이 저마다 두 번씩 되풀이되는 것을 찾아 노래 모양 띠로 나타내고, 모둠과 돌림으로 흥얼거릴 수 있다.',
    illustration: ART('a paper bell tower with a sleepy monk at the window, four pairs of matching paper bells hanging in a row', '두 번씩 울려요', [
      { motif: 'house', x: 120, y: 200, color: 'lavender' }, { motif: 'sun', x: 400, y: 60, s: 0.5 }, { motif: 'tree', x: 400, y: 200 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"이 노래는 프랑스에서 아침에 종을 울리라고 깨우는 노래예요." 프레르 자크 가락을 들려준다. "같은 가락이 바로 이어서 또 나오는 곳이 있었나요?" 시연 단추로 첫 가락 도레미도가 건반에서 쳐지는 모습을 보여 준다.',
        student: '아침에 나를 깨우는 소리를 하나 떠올려 봐요.',
        demo: { tool: 'keyboard', options: { mode: 'melody', from: '낮은솔', to: '높은도', melody: ['도', '레', '미', '도'] }, sequence: [{ notes: ['도', '레', '미', '도'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 네 가락 따라 치기', minutes: 12, tool: 'keyboard',
            teacher: '"가락마다 듣고 쳐 본 뒤, 한 번 더 쳐요. 노래에서도 두 번씩 나오거든요." 마지막 가락의 \'낮은 솔\'은 \'도\'보다 왼쪽에 있는 건반이라는 것을 짚는다. 건반이 왼쪽으로 갈수록 낮은 소리라는 것을 손으로 쓸어 보게 한다.',
            task: '프레르 자크의 네 가락을 듣고 똑같이 쳐요.',
            levels: KEY_LOW_LV,
            items: [
              { prompt: '프레르 자크 첫째 가락이에요. 가락 듣기를 누르고 똑같이 쳐 보세요.', toolOptions: { melody: ['도', '레', '미', '도'] }, target: { notes: ['도', '레', '미', '도'] }, difficulty: 0.1 },
              { prompt: '프레르 자크 둘째 가락이에요. 가락 듣기를 누르고 똑같이 쳐 보세요.', toolOptions: { melody: ['미', '파', '솔'] }, target: { notes: ['미', '파', '솔'] }, difficulty: 0.1 },
              { prompt: '프레르 자크 셋째 가락이에요. 빠르게 지나가니 잘 들어요. 가락 듣기를 누르고 똑같이 쳐 보세요.', toolOptions: { melody: ['솔', '라', '솔', '파', '미', '도'] }, target: { notes: ['솔', '라', '솔', '파', '미', '도'] }, difficulty: 0.3,
                levels: { easy: { prompt: '프레르 자크 셋째 가락의 앞 네 음이에요. 가락 듣기를 누르고 똑같이 쳐 보세요.', toolOptions: { melody: ['솔', '라', '솔', '파'] }, target: { notes: ['솔', '라', '솔', '파'] } } } },
              { prompt: '프레르 자크 넷째 가락이에요. 도보다 낮은 음이 나와요. 가락 듣기를 누르고 똑같이 쳐 보세요.', toolOptions: { melody: ['도', '낮은솔', '도'] }, target: { notes: ['도', '낮은솔', '도'] }, difficulty: 0.25 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 두 번씩 되풀이되는 노래 모양', minutes: 14, tool: 'pattern',
            teacher: '"첫째 가락은 별, 둘째는 동그라미, 셋째는 세모, 넷째는 하트예요. 노래를 들으며 띠를 채워요." 반짝반짝 작은 별은 떨어진 곳에서 되풀이되고, 프레르 자크는 바로 이어서 되풀이된다는 것을 견준다. 띠를 채운 뒤 두 모둠이 시작을 두 마디씩 늦추어 \'라라라\'로 돌림노래를 해 본다(4분). 돌림노래에서 친구 소리에 끌려가면 내 모둠 손가락으로 띠를 짚게 한다.',
            task: '프레르 자크 노래 모양 띠를 채우고, 모둠과 돌림으로 흥얼거려요.',
            levels: { easy: { palette: FORM.concat(['heart']) }, base: { palette: FORM.concat(['heart']) }, challenge: { palette: FORM.concat(['heart', 'diamond']) } },
            items: [
              { prompt: '프레르 자크를 들으며 가락마다 모양을 놓았어요. 빈칸 한 곳을 채워 보세요.', toolOptions: { seq: ['star', 'star', 'circle', 'circle', 'triangle', null, 'heart', 'heart'] }, target: { fill: ['triangle'] }, difficulty: 0.15,
                hints: ['빈칸 바로 앞에서 들은 가락이 바로 이어서 또 나오는지 들어 보세요.', '이 노래는 가락마다 몇 번씩 되풀이됐는지 띠의 앞부분을 세어 보세요.', '셋째 가락(솔라솔파미도)이 두 번 나오니 빈칸은 세모예요.'] },
              { prompt: '프레르 자크 노래 모양 띠의 빈칸 세 곳을 채워 보세요.', toolOptions: { seq: ['star', null, 'circle', null, 'triangle', 'triangle', 'heart', null] }, target: { fill: ['star', 'circle', 'heart'] }, difficulty: 0.25,
                levels: { easy: { prompt: '프레르 자크 노래 모양 띠의 빈칸 두 곳을 채워 보세요.', toolOptions: { seq: ['star', null, 'circle', 'circle', 'triangle', 'triangle', 'heart', null] }, target: { fill: ['star', 'heart'] } } },
                hints: ['이 노래는 같은 가락이 어떻게 되풀이됐는지 떠올리며 칸을 두 개씩 묶어 봐요.', '빈칸마다 바로 앞 칸을 보세요. 그 가락이 한 번만 나왔나요?', '가락마다 두 번씩 나와요. 둘째 칸은 별, 넷째 칸은 동그라미, 여덟째 칸은 하트예요.'] },
              { prompt: '두 모둠이 두 마디씩 늦추어 프레르 자크를 돌림으로 흥얼거렸으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"반짝반짝 작은 별과 프레르 자크는 되풀이하는 모양이 어떻게 달랐나요?" 학생의 말로 견주게 한다. 돌림노래가 어떻게 들렸는지 한두 명이 말한다. 다음 시간에는 걸음으로 노래의 빠르기를 나타낸다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'pattern', options: { seq: ['star', 'star', 'circle', null, 'triangle', 'triangle', null, 'heart'], palette: FORM.concat(['heart']) }, prompt: '프레르 자크 노래 모양 띠의 빈칸 두 곳을 채워 보세요.', target: { fill: ['circle', 'heart'] }, difficulty: 0.2,
            hints: ['칸을 두 개씩 묶어 보며, 묶음 안의 두 조각이 어떤 관계인지 살펴요.', '빈칸마다 바로 앞이나 뒤 칸과 견주어 보세요.', '가락마다 두 번씩 나오니 넷째 칸은 동그라미, 일곱째 칸은 하트예요.'] },
          { type: 'choice', prompt: '프레르 자크에서 가락이 되풀이되는 모양은?', options: ['가락마다 바로 이어서 두 번씩 나와요', '첫 가락이 맨 끝에 한 번 더 나와요', '되풀이되는 가락이 없어요'], answer: 0, difficulty: 0.15, explain: '프레르 자크는 네 가락이 저마다 바로 이어서 두 번씩 나와요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '프레르 자크의 모양',
      items: [
        { type: 'table', prompt: '들은 가락의 모양을 빈칸에 그리세요.', columns: ['1', '2', '3', '4', '5', '6', '7', '8'], cells: [['★', '', '●', '', '▲', '', '♥', '']] },
        { type: 'figure', wide: true, prompt: '넷째 가락에 나오는 \'낮은 솔\' 건반에 ○ 하세요.', tool: 'keyboard', figures: [{ options: { mode: 'melody', from: '낮은솔', to: '높은도', printNames: true }, caption: '' }], answer: '맨 왼쪽 건반' },
        { type: 'choice', prompt: '돌림노래는 어떻게 부르나요?', options: ['모둠마다 시작을 늦추어 같은 노래를 불러요', '모둠마다 다른 노래를 불러요'], answer: '모둠마다 시작을 늦추어 같은 노래를 불러요' },
        { type: 'short', prompt: '돌림노래를 해 보니 어떻게 들렸는지 쓰세요.' },
      ],
      easy: {
        note: '프레르 자크는 가락마다 두 번씩!',
        items: [
          { type: 'table', prompt: '빈칸에 모양을 그리세요.', columns: ['1', '2', '3', '4'], cells: [['★', '', '●', '']] },
          { type: 'choice', prompt: '도보다 낮은 건반은 어느 쪽에 있나요?', options: ['왼쪽', '오른쪽'], answer: '왼쪽' },
          { type: 'draw', prompt: '아침에 울리는 종을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '듣는 동안 건반이 비치고, 셋째 가락은 앞 네 음만 쳐요. 띠의 빈칸은 두 곳이에요.',
      base: '네 가락을 모두 치고 띠의 빈칸 세 곳을 채워요.',
      challenge: '계이름 없이 쳐요. 모양 고르개에 함정 모양이 하나 더 있고, 돌림노래에서 먼저 시작하는 모둠을 맡아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 둘째 가락(미파솔)과 셋째 가락 앞부분(솔라솔)을 헷갈린다 → 첫 음이 미인지 솔인지 먼저 듣게 한다. ② 낮은 솔을 높은 솔로 친다 → 건반을 왼쪽으로 쓸며 낮아지는 것을 들려준다. ③ 돌림노래에서 친구 소리에 끌려간다 → 모둠별로 띠를 짚게 하고 짧게 두 번만 돌린다. 프레르 자크는 프랑스 민요 가락만 쓰고 가사는 싣지 않았다.',
  }));

  lessons.push(L(29, {
    title: '노래의 빠르기를 걸음으로 나타내기',
    objective: '같은 노래를 빠르게·느리게 들려줄 때 빠르기의 차이를 걸음으로 나타내고, 빠르기에 어울리는 리듬 블록을 놓을 수 있다.',
    illustration: ART('a paper turtle and a paper rabbit walking on the same musical staff path, a child in the middle walking to a hand drum', '빠르게, 느리게', [
      { motif: 'tree', x: 90, y: 196 }, { motif: 'flower', x: 400, y: 226 }, { motif: 'cloud', x: 300, y: 60 }]),
    safety: ['책상을 밀어 둔 넓은 곳에서 해요.', '빠른 걸음도 뛰지 않고 걸어요.', '친구와 부딪히지 않게 같은 방향으로 돌아요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '선생님이 런던 다리 가락을 아주 느리게, 그리고 아주 빠르게 들려준다. "같은 노래인데 무엇이 달라졌나요?" "빠르기가 바뀌면 높낮이도 바뀌었나요?" 하고 되묻는다. 시연 단추로 느린 걸음 리듬 블록이 놓이는 모습을 보여 준다.',
        student: '느리게 걷는 동물과 빠르게 걷는 동물을 하나씩 떠올려 봐요.',
        demo: { tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 1, blocks: ['q', 'e', 'h'], pattern: ['h', 'h'] }, sequence: [{ rhythm: ['h', 'h'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 작은북에 맞춰 걷기', minutes: 14, tool: 'mindmap',
            teacher: '선생님이 작은북을 치는 빠르기에 맞춰 교실을 한 방향으로 걷는다(6분). 북이 빨라지면 걸음도 빨라지고, 멈추면 그 자리에 선다. 걷고 나서 카드를 나눈다. 빠르게는 \'세게\'와 다르다는 것을 짚고, 작고 빠르게 치는 북소리도 들려준다.',
            task: '북 빠르기에 맞춰 걷고, 빠르기에 어울리는 장면과 몸짓을 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '작은북 빠르기에 맞춰 걷다가 북이 멈출 때 그 자리에 섰으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '장면에 어울리는 빠르기로 나누어 보세요.', toolOptions: { topic: '어울리는 빠르기', slots: ['빠르게', '느리게'], cards: ['운동회 달리기', '아기 재우기', '쥐가 도망가기', '달팽이 기어가기'] },
                target: { sort: { '빠르게': ['운동회 달리기', '쥐가 도망가기'], '느리게': ['아기 재우기', '달팽이 기어가기'] } }, difficulty: 0.1 },
              { prompt: '북소리가 바뀐 차례를 듣고, 그때 걸은 걸음을 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['종종걸음', '천천히 걷기', '보통 걸음'], slots: ['처음', '그다음', '마지막'] },
                target: { order: ['천천히 걷기', '보통 걸음', '종종걸음'] }, difficulty: 0.2 },
              { prompt: '빠르기에 대해 바르게 말한 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '바른 말', cards: ['빨라져도 가락의 높낮이는 그대로예요', '작은 소리로도 빠르게 칠 수 있어요', '빠르게 하면 소리가 꼭 커져요'] },
                target: { pick: ['빨라져도 가락의 높낮이는 그대로예요', '작은 소리로도 빠르게 칠 수 있어요'] }, difficulty: 0.25,
                predict: { q: '빠르게 치면 소리도 꼭 커질까요?', options: ['꼭 커져요', '작게 빠르게도 칠 수 있어요'], answer: 1 },
                conclude: '빠르기(빠르게·느리게)와 세기(세게·여리게)는 따로 바꿀 수 있어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 걸음 리듬 블록 놓기', minutes: 13, tool: 'keyboard',
            teacher: '"거북 걸음은 한 걸음에 두 박, 보통 걸음은 한 박, 토끼 걸음은 반 박이에요." 블록을 놓기 전에 걸음을 말로 \'쿵—\', \'쿵\', \'토끼\'로 소리 내 보게 한다. 마디마다 박 수가 꼭 4박이 되는지 손가락으로 세게 한다.',
            task: '걸음 빠르기를 듣고 리듬 블록으로 놓아요.',
            levels: { easy: { mode: 'rhythm', meter: 4, measures: 1, blocks: ['q', 'e', 'h'], showBeats: true }, base: { mode: 'rhythm', meter: 4, measures: 1, blocks: ['q', 'e', 'h'] }, challenge: { mode: 'rhythm', meter: 4, measures: 1, blocks: ['q', 'e', 'h', 'qr', 'w'] } },
            items: [
              { prompt: '거북이 느리게 두 걸음 걸어요. 리듬 듣기를 누르고 블록으로 놓아 보세요.', toolOptions: { pattern: ['h', 'h'] }, target: { rhythm: ['h', 'h'] }, difficulty: 0.1 },
              { prompt: '느리게 걷다가 빨라지는 걸음이에요. 리듬 듣기를 누르고 블록으로 놓아 보세요.', toolOptions: { pattern: ['h', 'q', 'e', 'e'] }, target: { rhythm: ['h', 'q', 'e', 'e'] }, difficulty: 0.25,
                levels: { easy: { prompt: '느린 걸음 다음에 보통 걸음 두 번이에요. 리듬 듣기를 누르고 블록으로 놓아 보세요.', toolOptions: { pattern: ['h', 'q', 'q'] }, target: { rhythm: ['h', 'q', 'q'] } } } },
              { prompt: '토끼가 빠르게 걷다가 멈추며 느려지는 걸음이에요. 리듬 듣기를 누르고 블록으로 놓아 보세요.', toolOptions: { pattern: ['e', 'e', 'e', 'e', 'q', 'q'] }, target: { rhythm: ['e', 'e', 'e', 'e', 'q', 'q'] }, difficulty: 0.3,
                levels: { challenge: { prompt: '토끼가 빠르게 걷다가 한 박 멈추고 다시 걸어요. 리듬 듣기를 누르고 블록으로 놓아 보세요.', toolOptions: { pattern: ['e', 'e', 'e', 'e', 'qr', 'q'] }, target: { rhythm: ['e', 'e', 'e', 'e', 'qr', 'q'] } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"런던 다리를 빠르게 들려주면 어떤 장면이 떠오르고, 느리게 들려주면 어떤 장면이 떠오르나요?" 두세 명이 말한다. 학생 한 명이 북을 치고 나머지가 자리에서 손가락으로 걸으며 마친다. 다음 시간에는 소리의 세기를 알아본다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 1, blocks: ['q', 'e', 'h'], pattern: ['q', 'q', 'e', 'e', 'e', 'e'] }, prompt: '보통 걸음 두 번 뒤에 빨라지는 걸음이에요. 리듬 듣기를 누르고 블록으로 놓아 보세요.', target: { rhythm: ['q', 'q', 'e', 'e', 'e', 'e'] }, difficulty: 0.2 },
          { type: 'choice', prompt: '같은 노래를 빠르게 부르면 무엇이 달라지나요?', options: ['빠르기만 달라져요', '가락의 높낮이가 달라져요', '노래가 다른 노래가 돼요'], answer: 0, difficulty: 0.2, explain: '빠르기가 바뀌어도 가락의 높낮이는 그대로라 같은 노래예요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '빠르기 걸음',
      items: [
        { type: 'table', prompt: '빠르기에 어울리는 동물과 장면을 쓰세요.', columns: ['빠르기', '동물', '장면'], cells: [['빠르게', '', ''], ['느리게', '', '']] },
        { type: 'figure', wide: true, prompt: '한 마디가 4박이 되게 리듬 블록 칸에 걸음을 그리세요.', tool: 'keyboard', figures: [{ options: { mode: 'rhythm', meter: 4, measures: 1, blocks: ['q', 'e', 'h'] }, caption: '' }], answer: '4박이 되는 걸음' },
        { type: 'choice', prompt: '빠르기를 바르게 말한 것에 ○ 하세요.', options: ['빨라져도 같은 노래예요', '빨라지면 다른 노래예요'], answer: '빨라져도 같은 노래예요' },
        { type: 'draw', prompt: '느린 노래를 들으며 떠오른 장면을 그리세요.' },
      ],
      easy: {
        note: '거북 쿵— 쿵—, 토끼 톡톡톡톡',
        items: [
          { type: 'choice', prompt: '느리게 걷는 동물은?', options: ['거북', '토끼'], answer: '거북' },
          { type: 'choice', prompt: '아기를 재울 때 어울리는 빠르기는?', options: ['느리게', '빠르게'], answer: '느리게' },
          { type: 'draw', prompt: '빠르게 달리는 동물을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '리듬 블록은 박 수가 함께 보이고, 맞는 카드 칸은 초록 테두리로 보여요.',
      base: '빨라지는 걸음을 블록으로 놓고, 빠르기와 세기가 다르다는 것을 고르며 확인해요.',
      challenge: '쉼표·온음표 블록이 함께 있어요. 멈추는 걸음을 쉼표로 나타내요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 빠르게를 세게로 여긴다(북을 빠르게 치면 세게 친다) → 작고 빠르게, 크고 느리게 치는 소리를 들려준다. ② 빨라지면 다른 노래라고 여긴다 → 같은 가락을 빠르기만 바꿔 들려준다. ③ 걷기가 달리기로 번진다 → 북을 멈추면 바로 서게 하고, 빠른 걸음도 \'종종걸음\'으로만 한다.',
  }));

  lessons.push(L(30, {
    title: '세게 여리게 소리를 크기로 그리기',
    objective: '노래의 세게·여리게·점점 세게를 듣고 구별하여, 소리 세기를 큰 조각과 작은 조각으로 그림 악보에 나타낼 수 있다.',
    illustration: ART('a paper sound picture with big bold circles for loud notes and tiny circles for soft notes, a child whispering and another shouting into paper cones', '세게, 여리게', [
      { motif: 'star', x: 100, y: 90, s: 0.9 }, { motif: 'star', x: 380, y: 100, s: 0.4 }, { motif: 'flower', x: 240, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '선생님이 반짝반짝 작은 별 가락을 한 번은 아주 여리게, 한 번은 세게 연주해 들려준다. "무엇이 달랐나요? 빠르기도 달라졌나요?" 시연 단추로 세게는 큰 동그라미, 여리게는 작은 동그라미로 놓는 모습을 보여 준다.',
        student: '도서관에서 하는 소리와 운동장에서 하는 소리를 떠올려 봐요.',
        demo: { tool: 'mindmap', options: { topic: '소리 세기', slots: ['세게', '여리게'], cards: ['행진하는 북소리', '잠든 아기 옆 노래'], shuffle: false }, sequence: [{ sort: { '세게': ['행진하는 북소리'], '여리게': ['잠든 아기 옆 노래'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 세기를 듣고 나누기', minutes: 13, tool: 'mindmap',
            teacher: '"세게는 크고 힘찬 소리, 여리게는 작고 부드러운 소리예요." 여리게를 \'느리게\'와 섞지 않도록, 같은 빠르기로 세기만 바꿔 들려준다. 점점 세게는 손을 아래에서 위로 점점 크게 벌리며 나타내게 한다(손뼉 크기 바꾸기 1분).',
            task: '소리와 장면을 세기에 따라 나누고, 점점 세게 되는 차례를 찾아요.',
            levels: CARD_LV,
            items: [
              { prompt: '장면에 어울리는 세기로 나누어 보세요.', toolOptions: { topic: '소리 세기', slots: ['세게', '여리게'], cards: ['운동회 응원', '자장가', '천둥소리', '나뭇잎 흔들리는 소리'] },
                target: { sort: { '세게': ['운동회 응원', '천둥소리'], '여리게': ['자장가', '나뭇잎 흔들리는 소리'] } }, difficulty: 0.1 },
              { prompt: '점점 세게 되는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['보통 목소리', '속삭임', '큰 목소리'], slots: ['처음', '그다음', '마지막'] },
                target: { order: ['속삭임', '보통 목소리', '큰 목소리'] }, difficulty: 0.15,
                levels: { challenge: { prompt: '점점 여리게 되는 차례대로 놓아 보세요.', target: { order: ['큰 목소리', '보통 목소리', '속삭임'] } } } },
              { prompt: '세기에 대해 바르게 말한 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '바른 말', cards: ['여리게 불러도 빠르기는 그대로일 수 있어요', '세게는 힘차고 큰 소리예요', '여리게는 느리게라는 뜻이에요'] },
                target: { pick: ['여리게 불러도 빠르기는 그대로일 수 있어요', '세게는 힘차고 큰 소리예요'] }, difficulty: 0.25,
                predict: { q: '여리게 부르면 노래가 느려질까요?', options: ['느려져요', '빠르기는 그대로일 수 있어요'], answer: 1 },
                conclude: '세기는 소리의 크기이고, 빠르기와 따로 바꿀 수 있어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 세기 그림 악보 꾸미기', minutes: 14, tool: 'collage',
            teacher: '"세게 부르는 곳은 큰 동그라미, 여리게 부르는 곳은 작은 동그라미로 놓아요." 선생님이 반짝반짝 작은 별을 첫 줄은 세게, 둘째 줄은 여리게 연주한다. 학생은 들은 대로 조각을 놓고, 짝과 그림 악보를 바꾸어 보며 그 세기대로 손뼉을 친다.',
            task: '세게는 큰 조각, 여리게는 작은 조각으로 세기 그림 악보를 꾸며요.',
            levels: { easy: { shapes: ['circle'], sizes: ['s', 'l'] }, base: { shapes: ['circle', 'star'], sizes: ['s', 'm', 'l'] }, challenge: { shapes: ['circle', 'star', 'heart'], sizes: ['s', 'm', 'l'] } },
            items: [
              { prompt: '첫 줄은 세게 불렀어요. 큰 동그라미를 네 개 이상 놓아 세게 부른 곳을 나타내 보세요.', toolOptions: { colors: ['빨강', '파랑', '노랑'] }, target: { has: [{ shape: 'circle', size: 'l', min: 4 }] }, difficulty: 0.1 },
              { prompt: '첫 줄은 세게, 둘째 줄은 여리게 불렀어요. 큰 동그라미 세 개 이상과 작은 동그라미 세 개 이상으로 나타내 보세요.', toolOptions: { colors: ['빨강', '파랑', '노랑'] }, target: { has: [{ shape: 'circle', size: 'l', min: 3 }, { shape: 'circle', size: 's', min: 3 }] }, difficulty: 0.2 },
              { prompt: '내가 정한 세기로 그림 악보를 꾸미고 해낸 것을 표시해요.', toolOptions: { colors: ['빨강', '파랑', '노랑', '초록'] }, target: { selfCheck: ['세게 부를 곳에 큰 조각을 놓았어요', '여리게 부를 곳에 작은 조각을 놓았어요', '짝에게 내 그림 악보대로 손뼉을 쳐 주었어요'], minPieces: 4 }, difficulty: 0.15 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"세기를 바꾸어 부르니 노래 느낌이 어떻게 달라졌나요?" 두세 명이 그림 악보를 보여 주고 반 친구들이 그 세기대로 손뼉을 친다. 다음 시간에는 가락이 올라가고 내려가는 것을 손으로 그려 본다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '소리 세기', slots: ['세게', '여리게'], cards: ['불꽃놀이 소리', '고양이 발소리', '행진하는 큰북'] }, prompt: '소리를 세기에 따라 나누어 보세요.', target: { sort: { '세게': ['불꽃놀이 소리', '행진하는 큰북'], '여리게': ['고양이 발소리'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '그림 악보에서 작은 동그라미는 어떻게 부르라는 뜻일까요?', options: ['여리게', '세게', '빠르게'], answer: 0, difficulty: 0.15, explain: '작은 조각은 작은 소리, 곧 여리게 부르라는 뜻이에요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '세기 그림 악보',
      items: [
        { type: 'draw', wide: true, prompt: '세게는 큰 ○, 여리게는 작은 ○로 반짝반짝 작은 별 첫 두 줄의 그림 악보를 그리세요.' },
        { type: 'table', prompt: '세기에 어울리는 장면을 쓰세요.', columns: ['세게', '여리게'], rows: 2 },
        { type: 'choice', prompt: '점점 세게를 손으로 나타내면?', options: ['손을 점점 크게 벌려요', '손을 점점 오므려요'], answer: '손을 점점 크게 벌려요' },
        { type: 'short', prompt: '여리게 부르고 싶은 노래와 그 까닭을 쓰세요.' },
      ],
      easy: {
        note: '세게 = 큰 ○, 여리게 = 작은 ○',
        items: [
          { type: 'choice', prompt: '자장가는 어떻게 부를까요?', options: ['여리게', '세게'], answer: '여리게' },
          { type: 'choice', prompt: '응원가는 어떻게 부를까요?', options: ['세게', '여리게'], answer: '세게' },
          { type: 'draw', prompt: '큰 ○와 작은 ○로 소리를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '조각은 동그라미 큰 것·작은 것 두 가지뿐이고, 맞는 카드 칸은 초록 테두리로 보여요.',
      base: '동그라미와 별, 세 가지 크기로 그림 악보를 꾸며요.',
      challenge: '점점 여리게 되는 차례를 찾고, 크기를 세 가지로 써서 점점 세게를 그림 악보에 나타내요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 여리게를 느리게로 여긴다 → 같은 빠르기로 세기만 바꿔 들려준다. ② 세게를 소리 지르기로 여긴다 → 세게도 고운 소리로 힘차게 내는 것이라고 말한다. ③ 그림 악보의 조각 크기가 들쭉날쭉하다 → 큰 것·작은 것 두 가지로만 먼저 연습한다.',
  }));

  lessons.push(L(31, {
    title: '올라가는 가락 내려가는 가락 손으로 그리기',
    objective: '가락이 올라가는지 내려가는지 듣고 손으로 높낮이를 그리며, 올라가는 가락과 내려가는 가락을 건반으로 칠 수 있다.',
    illustration: ART('a paper staircase with music notes climbing up on one side and sliding down on the other, a child drawing a wavy line in the air with a finger', '올라가요, 내려가요', [
      { motif: 'hills', y: 220 }, { motif: 'bird', x: 380, y: 90 }, { motif: 'cloud', x: 120, y: 60 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"노래가 계단을 오르듯 올라가는 곳이 있어요." 노를 저어라 첫 가락(도도도레미)을 들려주며 손을 무릎에서 어깨까지 올린다. "이번엔 내려가요." 반짝반짝 작은 별 둘째 줄을 들려주며 손을 내린다. 시연 단추로 올라가는 가락이 건반에서 쳐지는 모습을 보여 준다.',
        student: '손바닥을 계단처럼 한 칸씩 올려 봐요.',
        demo: { tool: 'keyboard', options: { mode: 'melody', from: '도', to: '높은도', melody: ['도', '레', '미', '파', '솔'] }, sequence: [{ notes: ['도', '레', '미', '파', '솔'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 가락의 높낮이 손으로 그리기', minutes: 13, tool: 'mindmap',
            teacher: '노래 조각마다 들려주고 학생은 손으로 높낮이를 공중에 그린다(5분). 손이 올라갔는지 내려갔는지로 카드를 나눈다. 높은 소리를 \'큰 소리\'로 여기지 않도록 높은 음을 여리게, 낮은 음을 세게 쳐서 들려준다.',
            task: '노래 조각을 듣고 손으로 높낮이를 그린 뒤, 올라가는 가락과 내려가는 가락으로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '노래 조각을 들으며 손으로 높낮이를 공중에 그렸으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '노래 조각을 듣고 올라가는 가락과 내려가는 가락으로 나누어 보세요.', toolOptions: { topic: '가락의 높낮이', slots: ['올라가는 가락', '내려가는 가락'], cards: ['노를 저어라 첫 가락', '반짝반짝 작은 별 둘째 줄', '프레르 자크 둘째 가락', '반짝반짝 작은 별 셋째 줄'] },
                target: { sort: { '올라가는 가락': ['노를 저어라 첫 가락', '프레르 자크 둘째 가락'], '내려가는 가락': ['반짝반짝 작은 별 둘째 줄', '반짝반짝 작은 별 셋째 줄'] } }, difficulty: 0.3 },
              { prompt: '높낮이에 대해 바르게 말한 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '바른 말', cards: ['높은 소리도 여리게 낼 수 있어요', '건반은 오른쪽으로 갈수록 높아요', '높은 소리는 언제나 큰 소리예요'] },
                target: { pick: ['높은 소리도 여리게 낼 수 있어요', '건반은 오른쪽으로 갈수록 높아요'] }, difficulty: 0.25,
                predict: { q: '높은 소리는 언제나 큰 소리일까요?', options: ['언제나 커요', '작은 높은 소리도 있어요'], answer: 1 },
                conclude: '높낮이는 소리가 높고 낮은 것이고, 세기(크고 작은 것)와 달라요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 올라가고 내려가는 가락 치기', minutes: 14, tool: 'keyboard',
            teacher: '"건반에서 오른쪽으로 가면 올라가고, 왼쪽으로 가면 내려가요." 들은 가락을 치기 전에 손으로 먼저 높낮이를 그려 보게 한다. 마지막 문항은 내가 짓는 가락이라, 짝이 듣고 올라갔는지 내려갔는지 맞혀 보게 한다.',
            task: '올라가는 가락과 내려가는 가락을 듣고 치고, 내가 지은 가락을 짝에게 들려줘요.',
            levels: KEY_LV,
            items: [
              { prompt: '노를 저어라 둘째 가락이에요. 계단처럼 올라가요. 가락 듣기를 누르고 똑같이 쳐 보세요.', toolOptions: { melody: ['미', '레', '미', '파', '솔'] }, target: { notes: ['미', '레', '미', '파', '솔'] }, difficulty: 0.2 },
              { prompt: '노를 저어라 마지막 가락이에요. 계단처럼 내려가요. 가락 듣기를 누르고 똑같이 쳐 보세요.', toolOptions: { melody: ['솔', '파', '미', '레', '도'] }, target: { notes: ['솔', '파', '미', '레', '도'] }, difficulty: 0.15 },
              { prompt: '솔에서 시작해 도로 내려오는 다섯 음 가락을 내 마음대로 지어 보세요.', target: { compose: { length: 5, startOn: '솔', endOn: '도' } }, difficulty: 0.2,
                levels: { easy: { prompt: '솔에서 시작해 도로 내려오는 세 음 가락을 내 마음대로 지어 보세요.', target: { compose: { length: 3, startOn: '솔', endOn: '도' } } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"올라가는 가락을 들으면 어떤 느낌이 드나요? 내려가는 가락은요?" 두세 명이 말한다. 짝이 지은 가락을 듣고 손으로 그려 본 친구가 발표한다. 다음 시간에는 메리의 작은 양 노래를 그림 악보로 그려 본다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'keyboard', options: { mode: 'melody', from: '도', to: '높은도', names: 'solfa', melody: ['도', '레', '미', '파'] }, prompt: '계단처럼 올라가는 네 음 가락이에요. 가락 듣기를 누르고 똑같이 쳐 보세요.', target: { notes: ['도', '레', '미', '파'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '건반에서 오른쪽으로 갈수록 소리는?', options: ['높아져요', '낮아져요', '커져요'], answer: 0, difficulty: 0.1, explain: '건반은 오른쪽으로 갈수록 높은 소리가 나요. 크기는 세게 치는지에 따라 달라요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '가락의 계단',
      items: [
        { type: 'draw', wide: true, prompt: '노를 저어라 첫 가락을 듣고 높낮이를 선으로 그리세요.' },
        { type: 'table', prompt: '노래 조각이 올라가는지 내려가는지 ○ 하세요.', columns: ['노래 조각', '올라가요', '내려가요'], cells: [['반짝반짝 작은 별 둘째 줄', '', ''], ['프레르 자크 둘째 가락', '', '']] },
        { type: 'choice', prompt: '높은 소리에 대해 바른 것에 ○ 하세요.', options: ['높은 소리도 작게 낼 수 있어요', '높은 소리는 늘 커요'], answer: '높은 소리도 작게 낼 수 있어요' },
        { type: 'figure', wide: true, prompt: '내가 지은 가락의 음을 건반에 차례로 1, 2, 3을 쓰세요.', tool: 'keyboard', figures: [{ options: { mode: 'melody', from: '도', to: '높은도', printNames: true }, caption: '' }], answer: '(내가 지은 가락)' },
      ],
      easy: {
        note: '오른쪽 → 올라가요, 왼쪽 → 내려가요',
        items: [
          { type: 'choice', prompt: '도레미파솔은?', options: ['올라가는 가락', '내려가는 가락'], answer: '올라가는 가락' },
          { type: 'choice', prompt: '솔파미레도는?', options: ['내려가는 가락', '올라가는 가락'], answer: '내려가는 가락' },
          { type: 'draw', prompt: '올라가는 계단을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '듣는 동안 건반이 비치고, 세 음 가락을 지어요.',
      base: '계이름을 보며 다섯 음 가락을 치고 지어요.',
      challenge: '계이름 없이 귀로만 치고, 내가 지은 가락을 짝이 손으로 그려 맞혀요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 높은 소리를 큰 소리로 여긴다 → 높은 음을 여리게, 낮은 음을 세게 쳐서 견준다. ② 같은 음이 이어지는 곳(도도도)을 올라간다고 여긴다 → 손을 그대로 두고 톡톡 치게 한다. ③ 노를 저어라 둘째 가락의 첫 \'미레\'에서 손이 내려가 헷갈린다 → 한 번 살짝 내려갔다가 올라간다고 그리게 한다. 노를 저어라는 1852년 미국 동요 가락이다.',
  }));

  lessons.push(L(32, {
    title: '메리의 작은 양 가락을 그림 악보로 그리기',
    objective: '미국 동요 \'메리의 작은 양\' 가락을 듣고 음의 높낮이와 되풀이를 점과 선으로 그림 악보에 나타내고, 그림 악보를 보며 가락을 칠 수 있다.',
    illustration: ART('a paper lamb walking on a path of dots that go up and down like a picture score, a girl following behind', '점으로 그린 노래', [
      { motif: 'flower', x: 90, y: 226 }, { motif: 'tree', x: 400, y: 196 }, { motif: 'sun', x: 410, y: 56, s: 0.5 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"악보를 몰라도 노래를 그림으로 남길 수 있어요." 칠판에 높은 점·낮은 점으로 짧은 그림 악보를 그리고 함께 흥얼거린다. "계이름을 꼭 써야 할까요?" 하고 묻고, 점의 높이만으로도 가락을 나타낼 수 있다는 것을 보여 준다. 시연 단추로 메리의 작은 양 첫 가락이 쳐지는 모습을 보여 준다.',
        student: '손가락으로 책상 위에 점을 높게, 낮게 찍어 봐요.',
        demo: { tool: 'keyboard', options: { mode: 'melody', from: '도', to: '높은도', melody: ['미', '레', '도', '레', '미', '미', '미'] }, sequence: [{ notes: ['미', '레', '도', '레', '미', '미', '미'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 그림 악보 읽는 법 알기', minutes: 12, tool: 'mindmap',
            teacher: '"점이 높이 있으면 높은 음, 낮게 있으면 낮은 음이에요. 같은 높이에 점이 이어지면 같은 음이 되풀이돼요." 그림 악보 표시와 뜻을 이어 본 뒤, 그림 악보에 꼭 있어야 하는 것과 없어도 되는 것을 나눈다. 계이름이나 오선이 없어도 그림 악보가 된다는 것을 짚는다.',
            task: '그림 악보의 표시와 뜻을 잇고, 그림 악보에 꼭 있어야 하는 것을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '그림 악보 표시와 그 뜻을 이어 보세요.', toolOptions: { mode: 'match', topic: '그림 악보 읽기', slots: [{ id: 's1', label: '점이 높이 있어요' }, { id: 's2', label: '점 세 개가 같은 높이에 이어져요' }], cards: ['높은 음이에요', '같은 음을 세 번 쳐요'] },
                target: { match: { s1: '높은 음이에요', s2: '같은 음을 세 번 쳐요' } }, difficulty: 0.1 },
              { prompt: '세 가지 그림 악보 표시와 그 뜻을 이어 보세요.', toolOptions: { mode: 'match', topic: '그림 악보 읽기', slots: [{ id: 's1', label: '점이 낮게 있어요' }, { id: 's2', label: '점이 계단처럼 위로 이어져요' }, { id: 's3', label: '큰 점이에요' }], cards: ['낮은 음이에요', '가락이 올라가요', '세게 쳐요'] },
                target: { match: { s1: '낮은 음이에요', s2: '가락이 올라가요', s3: '세게 쳐요' } }, difficulty: 0.25,
                levels: { challenge: { toolOptions: { cards: ['낮은 음이에요', '가락이 올라가요', '세게 쳐요', '빠르게 쳐요'] } } } },
              { prompt: '그림 악보에 꼭 있어야 하는 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '꼭 있어야 해요', cards: ['음의 높낮이를 나타낸 자리', '음의 차례', '계이름 글자', '오선'] },
                target: { pick: ['음의 높낮이를 나타낸 자리', '음의 차례'] }, difficulty: 0.3,
                predict: { q: '그림 악보에 계이름을 꼭 써야 할까요?', options: ['꼭 써야 해요', '안 써도 돼요'], answer: 1 },
                conclude: '그림 악보는 점의 높이와 차례만으로도 가락을 나타낼 수 있어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 메리의 작은 양 치고 그리기', minutes: 15, tool: 'keyboard',
            teacher: '가락을 듣고 친 뒤 활동지에 점으로 그림 악보를 그린다(6분). 짝과 그림 악보를 바꾸어 보며 짝의 그림 악보대로 손가락으로 짚어 가며 흥얼거린다. 계이름을 몰라도 점의 높낮이만 맞으면 잘 그린 것이라고 말해 준다.',
            task: '메리의 작은 양 가락을 듣고 치고, 점으로 그림 악보를 그려 짝과 바꾸어 봐요.',
            levels: KEY_LV,
            items: [
              { prompt: '메리의 작은 양 첫 가락이에요. 가락 듣기를 누르고 똑같이 쳐 보세요.', toolOptions: { melody: ['미', '레', '도', '레', '미', '미', '미'] }, target: { notes: ['미', '레', '도', '레', '미', '미', '미'] }, difficulty: 0.25,
                levels: { easy: { prompt: '메리의 작은 양 첫 가락의 앞 네 음이에요. 가락 듣기를 누르고 똑같이 쳐 보세요.', toolOptions: { melody: ['미', '레', '도', '레'] }, target: { notes: ['미', '레', '도', '레'] } } } },
              { prompt: '첫 가락 다음에 나오는 짧은 가락 두 개예요. 같은 음이 세 번씩 나와요. 가락 듣기를 누르고 똑같이 쳐 보세요.', toolOptions: { melody: ['레', '레', '레', '미', '솔', '솔'] }, target: { notes: ['레', '레', '레', '미', '솔', '솔'] }, difficulty: 0.25,
                levels: { easy: { prompt: '첫 가락 다음에 나오는 짧은 가락이에요. 같은 음이 세 번 나와요. 가락 듣기를 누르고 똑같이 쳐 보세요.', toolOptions: { melody: ['레', '레', '레'] }, target: { notes: ['레', '레', '레'] } } } },
              { prompt: '활동지에 메리의 작은 양 첫 가락을 점으로 그리고 짝과 바꾸어 흥얼거렸으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"그림 악보로 남기면 무엇이 좋을까요?" 다음에 다시 칠 수 있다, 친구에게 알려 줄 수 있다는 대답을 모은다. 두세 명의 그림 악보를 실물 화상기로 보여 주고 반 친구들이 손가락으로 따라간다. 다음 시간에는 같은 노래를 듣고 친구와 느낌을 견주어 본다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'keyboard', options: { mode: 'melody', from: '도', to: '높은도', names: 'solfa', melody: ['미', '미', '미'] }, prompt: '그림 악보에 점 세 개가 \'미\' 높이에 이어져 있어요. 그림 악보대로 쳐 보세요.', target: { notes: ['미', '미', '미'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '그림 악보에서 점이 계단처럼 아래로 이어지면?', options: ['가락이 내려가요', '가락이 올라가요', '같은 음이 되풀이돼요'], answer: 0, difficulty: 0.15, explain: '점이 아래로 갈수록 낮은 음이라 가락이 내려가요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '메리의 작은 양 그림 악보',
      items: [
        { type: 'draw', wide: true, prompt: '메리의 작은 양 첫 가락을 듣고 점으로 그림 악보를 그리세요. 높은 음은 위에, 낮은 음은 아래에 찍어요.' },
        { type: 'choice', prompt: '같은 높이에 점이 세 개 이어지면?', options: ['같은 음을 세 번 쳐요', '세 음이 올라가요'], answer: '같은 음을 세 번 쳐요' },
        { type: 'table', prompt: '짝의 그림 악보를 보고 쓰세요.', columns: ['올라가는 곳이 있나요?', '같은 음이 이어지는 곳이 있나요?'], rows: 1 },
        { type: 'short', prompt: '그림 악보로 남기고 싶은 다른 노래를 쓰세요.' },
      ],
      easy: {
        note: '높은 음은 위에, 낮은 음은 아래에 점!',
        items: [
          { type: 'choice', prompt: '높은 음의 점은 어디에 찍을까요?', options: ['위', '아래'], answer: '위' },
          { type: 'draw', wide: true, prompt: '선생님과 함께 첫 가락 네 음을 점으로 그리세요.' },
          { type: 'draw', prompt: '작은 양을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '듣는 동안 건반이 비치고 앞 네 음만 쳐요. 그림 악보는 선생님과 함께 네 음을 그려요.',
      base: '첫 가락을 다 치고 그림 악보로 그려요.',
      challenge: '계이름 없이 치고, 그림 악보에 세게·여리게를 점 크기로 덧붙여요. 함정 뜻 카드를 골라내요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 그림 악보에 계이름을 꼭 써야 한다고 여긴다 → 점의 높이만으로 친구가 따라 부르게 해 본다. ② 같은 음 되풀이를 한 점으로만 찍는다 → 손뼉 수만큼 점을 찍게 한다. ③ 점 높이가 들쭉날쭉하다 → 활동지에 연한 가로줄을 세 줄 그어 준다. 메리의 작은 양은 1830년 미국 동요 가락만 쓰고 가사는 싣지 않았다.',
  }));

  // ───────────────────────── 33~36차시: 친구와 견주고 다시 듣고 음악회 열기 ─────────────────────────

  lessons.push(L(33, {
    title: '같은 노래를 듣고 친구와 느낌 견주기',
    objective: '같은 노래를 듣고 친구와 나의 느낌에서 같은 점과 다른 점을 찾고, 다른 느낌도 그럴 수 있다고 받아들이는 말을 할 수 있다.',
    illustration: ART('two paper children sitting back to back listening to the same music box, one has a sunny thought bubble and the other a sea wave thought bubble', '느낌이 달라도 괜찮아', [
      { motif: 'sun', x: 120, y: 80, s: 0.6 }, { motif: 'wave', x: 380, y: 90 }, { motif: 'flower', x: 240, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '노를 저어라 가락을 한 번 들려준다. "눈을 감고 들으며 떠오른 장면이 있나요?" 두세 명이 말하게 하고 칠판에 적는다. "같은 노래를 들었는데 떠오른 장면이 다르네요. 누가 틀린 걸까요?" 시연 단추로 느낌 카드가 \'둘 다\' 칸에 놓이는 모습을 보여 준다.',
        student: '노래를 들으며 떠오른 장면을 하나 정해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '느낌 견주기', slots: ['민지만', '준호만', '둘 다'], cards: ['물결이 느껴져요'], shuffle: false }, sequence: [{ sort: { '둘 다': ['물결이 느껴져요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 같은 점과 다른 점 나누기', minutes: 14, tool: 'mindmap',
            teacher: '"민지와 준호가 말한 것을 잘 읽고, 한 사람만 말한 것과 둘 다 말한 것을 나눠요." 둘 다 말한 것이 \'같은 점\', 한 사람만 말한 것이 \'다른 점\'이라는 것을 짚는다. 느낌이 다르다고 한쪽이 틀린 것은 아니라는 것을 강조한다.',
            task: '두 친구의 느낌을 민지만, 준호만, 둘 다 말한 것으로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '민지: "배를 타는 것 같고 신나." 준호: "배를 타는 것 같고 졸려." 느낌을 나누어 보세요.', toolOptions: { topic: '느낌 견주기', slots: ['민지만', '준호만', '둘 다'], cards: ['배를 타는 것 같아요', '신나요', '졸려요'] },
                target: { sort: { '민지만': ['신나요'], '준호만': ['졸려요'], '둘 다': ['배를 타는 것 같아요'] } }, difficulty: 0.15 },
              { prompt: '민지: "같은 가락이 돌아와서 재미있고, 강물이 떠올라." 준호: "같은 가락이 돌아와서 재미있고, 그네가 떠올라." 느낌을 나누어 보세요.', toolOptions: { topic: '느낌 견주기', slots: ['민지만', '준호만', '둘 다'], cards: ['같은 가락이 돌아와서 재미있어요', '강물이 떠올라요', '그네가 떠올라요'] },
                target: { sort: { '민지만': ['강물이 떠올라요'], '준호만': ['그네가 떠올라요'], '둘 다': ['같은 가락이 돌아와서 재미있어요'] } }, difficulty: 0.25,
                levels: { challenge: { prompt: '민지: "같은 가락이 돌아와서 재미있고, 강물이 떠올라. 끝이 느려져." 준호: "같은 가락이 돌아와서 재미있고, 그네가 떠올라. 끝이 느려져." 느낌을 나누어 보세요.', toolOptions: { cards: ['같은 가락이 돌아와서 재미있어요', '강물이 떠올라요', '그네가 떠올라요', '끝이 느려져요'] }, target: { sort: { '민지만': ['강물이 떠올라요'], '준호만': ['그네가 떠올라요'], '둘 다': ['같은 가락이 돌아와서 재미있어요', '끝이 느려져요'] } } } } },
              { prompt: '짝과 노를 저어라를 듣고 떠오른 장면을 말한 뒤 같은 점과 다른 점을 하나씩 찾았으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 다른 느낌을 받아들이는 말', minutes: 13, tool: 'emotion',
            teacher: '"친구 느낌이 나와 다를 때 어떤 말을 하면 좋을까요?" 상황마다 결과를 소리 내어 읽고 그때 친구의 마음을 말하게 한다. \'너도 그렇게 느낄 수 있구나\', \'왜 그렇게 느꼈어?\' 같은 말을 칠판에 적어 둔다.',
            task: '친구의 느낌이 나와 다를 때 받아들이는 말을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '준호가 "이 노래는 졸려"라고 했는데 나는 신났어요. 어떻게 말할까요?', toolOptions: { mode: 'branch', situation: '같은 노래를 듣고 준호는 "졸려", 나는 "신나"라고 느꼈어요.', choices: [
                { id: 'wrong', text: '"아니야, 신나는 노래야" 하고 말해요', result: '준호가 자기 느낌을 말하기 싫어졌어요.', mood: '속상함', why: '느낌에도 맞고 틀린 것이 있을까요?' },
                { id: 'accept', text: '"너는 졸리게 들렸구나. 나는 신났어" 하고 말해요', result: '준호가 웃으며 왜 졸렸는지 이야기해 주었어요.', mood: '편안함' },
                { id: 'quiet', text: '아무 말도 하지 않아요', result: '서로 느낌을 나누지 못했어요.', mood: '걱정', why: '내 느낌도 말해 주면 어떨까요?' }] }, target: { choice: 'accept' }, difficulty: 0.1 },
              { prompt: '친구가 노래를 듣고 "슬퍼"라고 했어요. 친구 느낌을 더 알아보는 말을 골라 보세요.', toolOptions: { mode: 'branch', situation: '같은 노래를 듣고 서아는 "슬퍼"라고 했어요. 나는 그렇게 느끼지 않았어요.', choices: [
                { id: 'ask', text: '"어느 부분이 슬프게 들렸어?" 하고 물어요', result: '서아가 끝에 내려가는 가락이 슬펐다고 알려 줘서 다시 들어 보았어요.', mood: '기쁨' },
                { id: 'laugh', text: '"이게 왜 슬퍼?" 하고 웃어요', result: '서아가 부끄러워했어요.', mood: '속상함', why: '웃음을 들은 서아의 마음을 떠올려 봐요.' }] }, target: { choice: 'ask' }, difficulty: 0.15 },
              { prompt: '친구와 느낌이 다를 때 마음에 맞는 카드를 놓아 보세요.', toolOptions: { cards: ['놀람', '편안함', '화남'], slots: [{ id: 's1', label: '친구 느낌이 나와 달라서 처음 알았을 때' }, { id: 's2', label: '"그럴 수 있구나" 하고 서로 받아들였을 때' }] },
                target: { match: { s1: '놀람', s2: '편안함' } }, difficulty: 0.15,
                conclude: '같은 노래도 사람마다 다르게 느낄 수 있어요. 다른 느낌을 들으면 노래를 새롭게 들을 수 있어요.' },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"친구 느낌을 듣고 노래가 새롭게 들린 곳이 있나요?" 두세 명이 말한다. 칠판의 받아들이는 말을 함께 읽는다. 다음 시간에는 같은 노래를 다시 들으며 처음에 못 들은 것을 찾는다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '느낌 견주기', slots: ['민지만', '준호만', '둘 다'], cards: ['빠르게 느껴져요', '기차가 떠올라요', '말이 달리는 것 같아요'] }, prompt: '민지: "빠르게 느껴지고 기차가 떠올라." 준호: "빠르게 느껴지고 말이 달리는 것 같아." 느낌을 나누어 보세요.', target: { sort: { '민지만': ['기차가 떠올라요'], '준호만': ['말이 달리는 것 같아요'], '둘 다': ['빠르게 느껴져요'] } }, difficulty: 0.2 },
          { type: 'choice', prompt: '같은 노래를 듣고 친구와 느낌이 다르면?', options: ['둘 다 그럴 수 있어요', '한 사람은 틀렸어요', '다시 들으면 꼭 같아져요'], answer: 0, difficulty: 0.1, explain: '느낌은 사람마다 다를 수 있어요. 다른 느낌을 들어 보면 노래를 새롭게 들을 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '친구와 느낌 견주기',
      items: [
        { type: 'table', prompt: '나와 짝의 느낌을 쓰세요.', columns: ['', '떠오른 장면', '느낌 낱말'], cells: [['나', '', ''], ['짝', '', '']] },
        { type: 'short', prompt: '나와 짝의 같은 점을 쓰세요.' },
        { type: 'short', prompt: '나와 짝의 다른 점을 쓰세요.' },
        { type: 'choice', prompt: '느낌이 다른 친구에게 알맞은 말에 ○ 하세요.', options: ['"너는 그렇게 들렸구나"', '"네가 틀렸어"'], answer: '"너는 그렇게 들렸구나"' },
      ],
      easy: {
        note: '느낌은 달라도 괜찮아요.',
        items: [
          { type: 'draw', prompt: '노래를 듣고 떠오른 장면을 그리세요.' },
          { type: 'choice', prompt: '친구 느낌이 나와 다르면?', options: ['그럴 수 있어요', '틀렸어요'], answer: '그럴 수 있어요' },
          { type: 'short', prompt: '짝이 떠올린 장면을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 고른 말의 결과가 바로 보여요.',
      base: '두 친구의 말을 나누고 짝과 같은 점·다른 점을 하나씩 찾아요.',
      challenge: '두 친구의 말이 더 길어 둘 다 말한 것이 두 가지예요. 친구가 왜 그렇게 느꼈는지 물어 덧붙여 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 느낌이 다르면 한쪽이 틀렸다고 여긴다 → "느낌에도 정답이 있을까요?" 하고 되묻는다. ② 같은 점을 찾지 못한다 → 두 친구 말에서 똑같은 낱말에 동그라미를 치게 한다. ③ 친구 느낌을 따라 바꾼다 → 내 느낌은 그대로 말해도 된다고 말해 준다. 노를 저어라(1852년 미국 동요)는 가락만 들려준다.',
  }));

  lessons.push(L(34, {
    title: '노래를 다시 들으며 새로 들린 것 찾기',
    objective: '같은 노래를 다시 들으며 처음에 듣지 못한 소리나 바뀐 음을 찾아 말하고, 다시 듣기로 생각이 달라질 수 있다는 것을 알 수 있다.',
    illustration: ART('a child with a paper ear trumpet listening again to a music box, small hidden paper notes now glowing that were dim before', '다시 들으니 들려요', [
      { motif: 'star', x: 120, y: 90, s: 0.5 }, { motif: 'star', x: 360, y: 80, s: 0.5 }, { motif: 'flower', x: 240, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"그림을 다시 보면 처음에 못 본 것이 보이지요? 노래도 그래요." 반짝반짝 작은 별 첫 줄을 들려주고, 이어서 한 음만 바꾼 가락을 들려준다. "무엇이 달라졌나요?" 바로 답을 말하지 않고 한 번 더 들려준다. 시연 단추로 바뀐 가락이 쳐지는 모습을 보여 준다.',
        student: '귀를 기울이는 내 자세를 해 봐요. 눈을 감아도 좋아요.',
        demo: { tool: 'keyboard', options: { mode: 'melody', from: '도', to: '높은도', melody: ['도', '도', '솔', '솔', '라', '라', '라'] }, sequence: [{ notes: ['도', '도', '솔', '솔', '라', '라', '라'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 바뀐 음 찾아 치기', minutes: 13, tool: 'keyboard',
            teacher: '"원래 가락과 바뀐 가락을 번갈아 들어 봐요. 어느 음이 달라졌는지 찾아 바뀐 가락을 쳐요." 처음 한 번에 못 찾아도 괜찮고, 다시 들을수록 들린다는 것을 말해 준다. 찾은 뒤 바뀐 음이 원래보다 높은지 낮은지도 말하게 한다.',
            task: '원래 가락에서 한 음이 바뀐 가락을 다시 듣고 똑같이 쳐요.',
            levels: KEY_LV,
            items: [
              { prompt: '반짝반짝 작은 별 첫 줄에서 마지막 음이 바뀌었어요. 바뀐 가락을 듣고 똑같이 쳐 보세요.', toolOptions: { melody: ['도', '도', '솔', '솔', '라', '라', '높은도'] }, target: { notes: ['도', '도', '솔', '솔', '라', '라', '높은도'] }, difficulty: 0.25,
                levels: { easy: { prompt: '반짝반짝 작은 별 첫 줄 앞 네 음에서 마지막 음이 바뀌었어요. 바뀐 가락을 듣고 똑같이 쳐 보세요.', toolOptions: { melody: ['도', '도', '솔', '라'] }, target: { notes: ['도', '도', '솔', '라'] } } } },
              { prompt: '프레르 자크 첫째 가락에서 셋째 음이 바뀌었어요. 바뀐 가락을 듣고 똑같이 쳐 보세요.', toolOptions: { melody: ['도', '레', '파', '도'] }, target: { notes: ['도', '레', '파', '도'] }, difficulty: 0.2 },
              { prompt: '메리의 작은 양 첫 가락에서 한 음이 바뀌었어요. 어느 음인지 찾으며 듣고 똑같이 쳐 보세요.', toolOptions: { melody: ['미', '레', '도', '레', '미', '솔', '미'] }, target: { notes: ['미', '레', '도', '레', '미', '솔', '미'] }, difficulty: 0.35,
                levels: { easy: { prompt: '메리의 작은 양 앞 네 음에서 마지막 음이 바뀌었어요. 듣고 똑같이 쳐 보세요.', toolOptions: { melody: ['미', '레', '도', '미'] }, target: { notes: ['미', '레', '도', '미'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 다시 듣고 생각 더하기', minutes: 14, tool: 'mindmap',
            teacher: '노를 저어라를 한 번 더 들려준다. "지난 시간에는 들리지 않았는데 오늘 새로 들린 것이 있나요?" 서아의 이야기를 읽고 처음과 다시 들었을 때 들린 것을 나눈다. 다시 듣고 생각이 바뀐 것은 잘못이 아니라 더 잘 들은 것이라는 것을 짚는다.',
            task: '처음 들었을 때와 다시 들었을 때 들린 것을 나누고, 다시 들은 내 마음을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '서아: "처음엔 빠른 노래, 같은 가락이 들렸어. 다시 들으니 끝이 느려지고 높은 음이 세 번 나오는 게 들렸어." 나누어 보세요.', toolOptions: { topic: '서아가 들은 것', slots: ['처음 들었을 때', '다시 들었을 때'], cards: ['빠른 노래예요', '같은 가락이 있어요', '끝이 느려져요', '높은 음이 세 번 나와요'] },
                target: { sort: { '처음 들었을 때': ['빠른 노래예요', '같은 가락이 있어요'], '다시 들었을 때': ['끝이 느려져요', '높은 음이 세 번 나와요'] } }, difficulty: 0.2 },
              { prompt: '다시 듣기에 대해 바르게 생각한 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '바른 생각', cards: ['다시 들으면 새로 들리는 것이 있어요', '다시 듣고 생각이 바뀌어도 괜찮아요', '한 번 들은 생각은 바꾸면 안 돼요'] },
                target: { pick: ['다시 들으면 새로 들리는 것이 있어요', '다시 듣고 생각이 바뀌어도 괜찮아요'] }, difficulty: 0.15,
                predict: { q: '다시 듣고 생각이 바뀌면 처음 생각이 틀린 걸까요?', options: ['틀린 거예요', '더 잘 들은 거예요'], answer: 1 },
                conclude: '다시 들으면 처음에 못 들은 것이 들려 생각이 더 풍성해져요.' },
              { prompt: '노래를 다시 듣고 새로 들린 것을 하나 찾아 짝에게 말했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"다시 들으니 무엇이 새로 들렸나요?" 서너 명이 말하고, 친구들은 그 부분을 다시 들어 본다. "다음 시간에는 세계 여러 나라의 악기 소리를 들어 봐요."',
        exitTicket: [
          { type: 'tool', tool: 'keyboard', options: { mode: 'melody', from: '도', to: '높은도', names: 'solfa', melody: ['미', '파', '라'] }, prompt: '프레르 자크 둘째 가락(미파솔)에서 마지막 음이 바뀌었어요. 바뀐 가락을 듣고 똑같이 쳐 보세요.', target: { notes: ['미', '파', '라'] }, difficulty: 0.2 },
          { type: 'choice', prompt: '같은 노래를 다시 들으면 좋은 점은?', options: ['처음에 못 들은 소리가 들려요', '노래가 짧아져요', '느낌이 꼭 같아져요'], answer: 0, difficulty: 0.1, explain: '다시 들으면 처음에 지나쳤던 소리를 새로 찾을 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '다시 들으니',
      items: [
        { type: 'table', prompt: '노래를 두 번 듣고 쓰세요.', columns: ['처음 들었을 때', '다시 들었을 때'], rows: 2 },
        { type: 'choice', prompt: '다시 듣고 생각이 바뀌면?', options: ['괜찮아요. 더 잘 들은 거예요', '처음 생각을 꼭 지켜요'], answer: '괜찮아요. 더 잘 들은 거예요' },
        { type: 'short', prompt: '다시 들으며 새로 들린 소리를 쓰세요.' },
        { type: 'draw', prompt: '새로 들린 소리를 그림으로 나타내세요.' },
      ],
      easy: {
        note: '다시 들으면 새로 들려요!',
        items: [
          { type: 'choice', prompt: '같은 노래를 다시 들으면?', options: ['새로 들리는 것이 있어요', '아무것도 달라지지 않아요'], answer: '새로 들리는 것이 있어요' },
          { type: 'short', prompt: '다시 들으며 들린 소리를 한 가지 쓰세요.' },
          { type: 'draw', prompt: '귀 기울여 듣는 내 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '듣는 동안 건반이 비치고 짧은 가락에서 바뀐 음을 찾아요.',
      base: '일곱 음 가락에서 바뀐 음을 찾아 쳐요.',
      challenge: '계이름 없이 귀로만 바뀐 음을 찾고, 그 음이 원래보다 높아졌는지 낮아졌는지 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 한 번 듣고 바로 답하려 한다 → 원래 가락과 바뀐 가락을 두 번씩 번갈아 들려준다. ② 바뀐 음 자리를 세지 못한다 → 손가락을 하나씩 접으며 음을 센다. ③ 다시 듣고 생각을 바꾸는 것을 부끄러워한다 → 선생님도 다시 듣고 새로 들은 것을 먼저 말해 본보기를 보인다.',
  }));

  lessons.push(L(35, {
    title: '세계의 악기와 연주하는 방법 잇기',
    objective: '가야금·백파이프·마라카스·젬베 같은 세계 여러 나라 악기의 소리를 듣고, 악기마다 소리를 내는 방법(뜯기·불기·흔들기·두드리기)을 이어 말할 수 있다.',
    illustration: ART('paper cut-outs of a gayageum, bagpipes, a pair of maracas and a djembe drum arranged around a globe, small motion lines showing plucking, blowing, shaking and striking', '세계의 악기', [
      { motif: 'star', x: 100, y: 80, s: 0.5 }, { motif: 'flower', x: 400, y: 226 }, { motif: 'cloud', x: 360, y: 60 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '악기 소리 네 가지를 그림 없이 들려준다. "어떻게 소리를 냈을지 몸으로 흉내 내 볼까요?" 줄을 뜯는 손, 입으로 부는 모습 등 학생의 흉내를 본다. 그다음 악기 사진을 보여 준다. 시연 단추로 \'가야금\'이 \'줄을 뜯어요\'와 이어지는 모습을 보여 준다.',
        student: '집에 있는 물건 가운데 흔들거나 두드리면 소리가 나는 것을 떠올려 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '소리 내는 법', slots: [{ id: 's1', label: '가야금' }], cards: ['줄을 뜯어요', '입으로 불어요'], shuffle: false }, sequence: [{ match: { s1: '줄을 뜯어요' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 악기와 소리 내는 법 잇기', minutes: 13, tool: 'mindmap',
            teacher: '악기마다 소리를 다시 들려주고 몸으로 흉내 낸 뒤 잇는다. 백파이프는 가방처럼 생긴 주머니에 바람을 불어 넣어 소리를 낸다는 것, 마라카스는 속에 든 작은 알갱이가 부딪혀 소리가 난다는 것을 알려 준다. 장구처럼 우리 악기도 같은 방법으로 나눌 수 있다는 것을 잇는다.',
            task: '세계의 악기와 소리를 내는 방법을 잇고, 같은 방법끼리 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '악기와 소리 내는 방법을 이어 보세요.', toolOptions: { mode: 'match', topic: '소리 내는 법', slots: [{ id: 's1', label: '마라카스' }, { id: 's2', label: '젬베' }], cards: ['흔들어요', '손바닥으로 두드려요'] },
                target: { match: { s1: '흔들어요', s2: '손바닥으로 두드려요' } }, difficulty: 0.1 },
              { prompt: '네 가지 악기와 소리 내는 방법을 이어 보세요.', toolOptions: { mode: 'match', topic: '소리 내는 법', slots: [{ id: 's1', label: '가야금' }, { id: 's2', label: '백파이프' }, { id: 's3', label: '마라카스' }, { id: 's4', label: '젬베' }], cards: ['줄을 뜯어요', '바람을 불어 넣어요', '흔들어요', '손바닥으로 두드려요'] },
                target: { match: { s1: '줄을 뜯어요', s2: '바람을 불어 넣어요', s3: '흔들어요', s4: '손바닥으로 두드려요' } }, difficulty: 0.25 },
              { prompt: '악기를 소리 내는 방법대로 나누어 보세요.', toolOptions: { topic: '같은 방법끼리', slots: ['두드려요', '불어요'], cards: ['젬베', '장구', '백파이프', '단소'] },
                target: { sort: { '두드려요': ['젬베', '장구'], '불어요': ['백파이프', '단소'] } }, difficulty: 0.2,
                levels: { challenge: { prompt: '여섯 가지 악기를 소리 내는 방법대로 나누어 보세요.', toolOptions: { cards: ['젬베', '장구', '백파이프', '단소', '큰북', '리코더'] }, target: { sort: { '두드려요': ['젬베', '장구', '큰북'], '불어요': ['백파이프', '단소', '리코더'] } } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 악기가 생겨난 곳 찾고 만들어 보기', minutes: 14, tool: 'map',
            teacher: '"악기 점이 있는 대륙에 핀을 꽂아요." 지도에서 악기 이름 점을 찾고 그 점을 둘러싼 굵은 선 안쪽을 고르게 한다. 젬베는 서아프리카, 백파이프는 스코틀랜드(유럽)에서 많이 연주한다는 것을 덧붙인다. 지도를 마친 뒤 빈 플라스틱 병에 쌀이나 콩을 조금 넣어 마라카스를 만들고 흔들어 본다(6분, 뚜껑을 꼭 닫는다).',
            task: '세계 지도에서 악기가 생겨난 대륙을 찾고, 흔드는 악기를 만들어 쳐 봐요.',
            levels: MAP_LV,
            items: [
              { prompt: '세계 지도에서 젬베 점이 있는 대륙에 핀을 꽂아 보세요.', toolOptions: WORLD({ places: [KOREA, { name: '젬베', icon: 'dot', at: [0, 1] }] }), target: { region: '아프리카' }, difficulty: 0.15,
                hints: ['지도에서 젬베라고 쓰인 점을 먼저 찾고, 그 점을 둘러싼 굵은 선 안쪽에 꽂아요.', '핀이 꽂힌 칸과 젬베 점이 같은 선 안에 있는지 보세요.', '젬베 점은 지도 왼쪽 아프리카 대륙 안에 있어요. 핀을 그 대륙 칸으로 옮겨요.'] },
              { prompt: '세계 지도에서 백파이프 점이 있는 대륙에 핀을 꽂아 보세요.', toolOptions: WORLD({ places: [KOREA, { name: '백파이프', icon: 'dot', at: [0, 0] }] }), target: { region: '유럽' }, difficulty: 0.2,
                hints: ['백파이프라고 쓰인 점을 찾아, 그 점이 있는 대륙의 굵은 선 안쪽에 꽂아요.', '지도 맨 위 줄 왼쪽을 살펴보세요. 점과 핀이 같은 대륙에 있나요?', '백파이프 점은 지도 왼쪽 위 유럽 대륙에 있어요. 핀을 그 칸으로 옮겨요.'] },
              { prompt: '빈 병에 쌀이나 콩을 넣어 마라카스를 만들고, 뚜껑을 꼭 닫아 흔들어 보았으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"악기는 나라마다 생김새가 달라도, 소리를 내는 방법은 어떤 점이 비슷했나요?" 학생의 말로 정리하게 한다. 만든 마라카스로 쿵짝 박에 맞춰 함께 흔든다. 다음 시간에는 지금까지 들은 노래로 우리 반 감상 음악회를 연다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '소리 내는 법', slots: [{ id: 'e1', label: '거문고' }, { id: 'e2', label: '탬버린' }], cards: ['줄을 튕겨요', '흔들거나 두드려요'] }, prompt: '악기와 소리 내는 방법을 이어 보세요.', target: { match: { e1: '줄을 튕겨요', e2: '흔들거나 두드려요' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '백파이프는 어떻게 소리를 내나요?', options: ['주머니에 바람을 불어 넣어요', '줄을 뜯어요', '흔들어요'], answer: 0, difficulty: 0.15, explain: '백파이프는 주머니에 바람을 불어 넣어 관으로 소리를 내요.' },
          MOOD,
        ],
      },
    ],
    safety: ['병 뚜껑을 꼭 닫아 알갱이가 쏟아지지 않게 해요.', '쌀이나 콩을 입이나 코에 넣지 않아요.', '마라카스를 친구 얼굴 가까이에서 흔들지 않아요.'],
    worksheet: {
      title: '세계의 악기',
      items: [
        { type: 'table', prompt: '악기와 소리 내는 방법을 쓰세요.', columns: ['악기', '소리 내는 방법'], cells: [['가야금', ''], ['백파이프', ''], ['마라카스', ''], ['젬베', '']] },
        { type: 'choice', prompt: '두드려서 소리 내는 악기에 ○ 하세요.', options: ['젬베', '단소', '가야금'], answer: '젬베' },
        { type: 'draw', prompt: '내가 만든 마라카스를 그리세요.' },
        { type: 'short', prompt: '가장 연주해 보고 싶은 세계의 악기와 그 까닭을 쓰세요.' },
      ],
      easy: {
        note: '뜯어요 · 불어요 · 흔들어요 · 두드려요',
        items: [
          { type: 'choice', prompt: '마라카스는?', options: ['흔들어요', '불어요'], answer: '흔들어요' },
          { type: 'choice', prompt: '젬베는?', options: ['두드려요', '뜯어요'], answer: '두드려요' },
          { type: 'draw', prompt: '좋아하는 악기를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '두 악기만 이어요. 지도에 칸 이름이 보이고, 맞는 카드 칸은 초록 테두리로 보여요.',
      base: '네 악기를 잇고 같은 방법끼리 나누어요.',
      challenge: '여섯 악기를 나누고, 지도 칸 이름을 숨긴 채 대륙을 찾아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 생김새가 비슷하면 소리 내는 법도 같다고 여긴다(가야금과 기타) → 뜯는 손과 긁는 손을 직접 흉내 내게 한다. ② 백파이프를 입으로만 분다고 여긴다 → 주머니를 팔로 눌러 바람을 보낸다는 것을 영상으로 보여 준다. ③ 탬버린처럼 두 가지 방법으로 소리 내는 악기를 하나로만 고른다 → 흔들기와 두드리기를 둘 다 해 보게 한다. 악기 소리는 국립국악원·공개 음원 자료를 쓴다.',
  }));

  lessons.push(L(36, {
    title: '우리 반 세계 노래 감상 음악회 열기',
    objective: '25~35차시에 들은 세계의 노래 가운데 하나를 골라 모둠이 몸짓·그림 악보·악기로 들려주고, 바른 감상 태도로 친구들의 발표를 들을 수 있다.',
    illustration: ART('a small paper stage with a curtain, a group of children holding picture scores and handmade maracas, an audience of paper children clapping', '세계 노래 음악회', [
      { motif: 'star', x: 100, y: 80, s: 0.6 }, { motif: 'star', x: 380, y: 80, s: 0.6 }, { motif: 'flower', x: 240, y: 230 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"오늘은 우리 반 음악회예요. 모둠마다 고른 노래를 들려줄 거예요." 그동안 들은 노래 제목을 칠판에 적는다. "음악회에서 듣는 사람은 어떻게 하면 좋을까요?" 시연 단추로 음악회 차례가 놓이는 모습을 보여 준다.',
        student: '우리 모둠이 고른 노래를 머릿속으로 한 번 흥얼거려 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'order', cards: ['인사하기', '노래 들려주기'], slots: ['먼저', '나중'], shuffle: false }, sequence: [{ order: ['인사하기', '노래 들려주기'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 음악회 준비하기', minutes: 10, tool: 'mindmap',
            teacher: '모둠마다 노래 하나와 들려줄 방법(쿵짝 몸짓, 그림 악보, 만든 마라카스)을 정한다. 발표 차례와 감상 태도를 함께 확인한다. 박수는 노래가 다 끝났을 때 친다는 것을 알려 준다.',
            task: '음악회 차례를 정하고, 감상할 때 알맞은 태도를 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '모둠 발표 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['노래 들려주기', '인사하고 노래 제목 말하기', '들은 친구들의 느낌 듣기'], slots: ['처음', '그다음', '마지막'] },
                target: { order: ['인사하고 노래 제목 말하기', '노래 들려주기', '들은 친구들의 느낌 듣기'] }, difficulty: 0.1 },
              { prompt: '음악회에서 들을 때 알맞은 태도만 골라 보세요.', toolOptions: { mode: 'pick', basket: '감상 태도', cards: ['노래가 끝나면 박수를 쳐요', '발표하는 모둠을 바라보며 들어요', '노래 중간에 큰 소리로 따라 해요', '옆 친구와 이야기해요'] },
                target: { pick: ['노래가 끝나면 박수를 쳐요', '발표하는 모둠을 바라보며 들어요'] }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['노래가 끝나면 박수를 쳐요', '발표하는 모둠을 바라보며 들어요', '노래 중간에 큰 소리로 따라 해요', '옆 친구와 이야기해요', '좋아하는 노래가 아니면 귀를 막아요'] } } } },
              { prompt: '모둠 노래와 들려줄 방법을 정하고 한 번 연습했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 음악회 열고 돌아보기', minutes: 17, tool: 'emotion',
            teacher: '모둠마다 2분씩 발표한다(12분). 발표가 끝나면 듣는 친구 한두 명이 \'되풀이·센 박·빠르기·세기·높낮이\' 가운데 하나를 들어 느낌을 말한다. 발표 뒤 스스로 돌아보기는 내 마음이라 정답이 없다고 알려 준다.',
            task: '모둠 발표를 하고 친구 발표를 감상한 뒤, 음악회를 마친 내 마음을 돌아봐요.',
            levels: CARD_LV,
            items: [
              { prompt: '모둠 노래를 친구들에게 들려주고, 다른 모둠 발표를 끝까지 감상했으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '친구 모둠이 발표하다 박을 놓쳤어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '친구 모둠이 발표하다 쿵짝 몸짓 박을 놓쳐 잠깐 멈췄어요.', choices: [
                { id: 'laugh', text: '크게 웃어요', result: '친구들이 부끄러워 발표를 멈췄어요.', mood: '속상함', why: '실수했을 때 웃음을 들으면 어떤 마음일까요?' },
                { id: 'wait', text: '조용히 기다렸다가 끝나면 박수를 쳐요', result: '친구들이 다시 시작해 끝까지 발표했어요.', mood: '뿌듯함' }] }, target: { choice: 'wait' }, difficulty: 0.1 },
              { prompt: '음악회를 마친 지금, 세계 노래를 친구들과 들려주고 들은 내가 뿌듯한 마음의 크기를 솔직하게 골라 보세요. 정답은 없어요.', toolOptions: { mode: 'scale', situation: '모둠과 세계 노래를 들려주고, 다른 모둠의 노래도 들었어요.', feeling: '뿌듯함', after: '더 해 보고 싶은 노래가 있다면 집에서도 들어 보세요.' }, target: { level: 'any' }, difficulty: 0.05 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"25차시부터 세계 여러 나라의 노래를 들으며 무엇을 찾을 수 있게 되었나요?" 되풀이, 센 박, 빠르기, 세기, 높낮이를 학생이 말하게 한다. 다음 시간부터는 세계의 미술 작품을 감상한다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '노래에서 찾은 것', slots: [{ id: 'e1', label: '반짝반짝 작은 별' }, { id: 'e2', label: '브람스 자장가' }], cards: ['첫 줄 가락이 다섯째 줄에 다시 나와요', '쿵짝짝으로 세요'] }, prompt: '노래와 그 노래에서 찾은 것을 이어 보세요.', target: { match: { e1: '첫 줄 가락이 다섯째 줄에 다시 나와요', e2: '쿵짝짝으로 세요' } }, difficulty: 0.2 },
          { type: 'choice', prompt: '음악회에서 박수는 언제 치나요?', options: ['노래가 다 끝났을 때', '노래 중간 아무 때나', '치지 않아요'], answer: 0, difficulty: 0.1, explain: '노래가 다 끝난 뒤 박수를 치면 발표하는 친구들이 끝까지 집중할 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '우리 반 음악회',
      items: [
        { type: 'table', prompt: '모둠 발표를 듣고 쓰세요.', columns: ['모둠', '노래', '찾은 것(되풀이·센 박·빠르기·세기·높낮이)'], rows: 4 },
        { type: 'choice', prompt: '감상 태도로 알맞은 것에 ○ 하세요.', options: ['발표하는 모둠을 바라봐요', '옆 친구와 이야기해요'], answer: '발표하는 모둠을 바라봐요' },
        { type: 'short', prompt: '가장 기억에 남는 모둠 발표와 그 까닭을 쓰세요.' },
        { type: 'draw', prompt: '음악회에서 우리 모둠이 발표하는 모습을 그리세요.' },
      ],
      easy: {
        note: '바라보며 듣고, 끝나면 박수!',
        items: [
          { type: 'choice', prompt: '박수는 언제 칠까요?', options: ['노래가 끝나면', '노래 중간에'], answer: '노래가 끝나면' },
          { type: 'short', prompt: '우리 모둠이 들려준 노래를 쓰세요.' },
          { type: 'draw', prompt: '음악회 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 카드 칸이 초록 테두리로 보이고, 마음 크기는 솔직하게만 고르면 돼요.',
      base: '차례와 감상 태도를 고르고, 친구 발표에서 찾은 것을 하나 말해요.',
      challenge: '친구 발표에서 찾은 것을 두 가지 들어 느낌을 말하고, 활동지 표를 모두 채워요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 노래 중간에 박수를 친다 → 끝 인사를 신호로 정한다. ② 발표 모둠이 실수하면 웃는다 → 실수해도 끝까지 하는 것이 멋진 발표라고 미리 말한다. ③ 느낌을 \'좋았어요\'로만 말한다 → 칠판의 다섯 낱말(되풀이·센 박·빠르기·세기·높낮이) 가운데 하나를 넣어 말하게 한다. 스스로 돌아보기는 맞고 틀림을 따지지 않는다.',
  }));

  // ───────────────────────── 37~40차시: 세계의 그림에서 눈에 띈 곳·아는 것 찾기 ─────────────────────────
  // 작품은 화면에 싣지 않는다. 교사가 미술관 공개 자료(크게)를 칠판 화면에 띄우고, 학생 기기 문항은 말로 적은 단서로 풀 수 있게 쓴다.

  // 콜라주 단계: 쉬움은 모양·색 고르개를 줄이고(문항이 요구하는 것은 모두 남김), 도전은 고르개 전부.
  function COL(easyShapes, easyColors, baseShapes, baseColors, easySizes) {
    return {
      easy: { shapes: easyShapes, colors: easyColors, sizes: easySizes || ['s', 'm', 'l'] },
      base: { shapes: baseShapes, colors: baseColors },
      challenge: {},
    };
  }

  lessons.push(L(37, {
    title: '별이 빛나는 밤에서 먼저 눈에 띈 곳 짚고 까닭 말하기',
    objective: '고흐의 \'별이 빛나는 밤\'을 보고 가장 먼저 눈에 띈 곳을 손가락으로 짚고, 그곳이 눈에 띈 까닭을 크기·색·움직임으로 말할 수 있다.',
    illustration: ART('a child pointing at a swirling night sky painting with a glowing yellow crescent moon and a tall dark cypress tree, framed on a paper museum wall', '어디가 먼저 보여요?', [
      { motif: 'moon', x: 360, y: 70, s: 0.7 }, { motif: 'star', x: 220, y: 60, s: 0.5 }, { motif: 'tree', x: 90, y: 200 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '미술관 공개 자료로 고흐의 \'별이 빛나는 밤\'(1889)을 크게 띄우고 10초 동안 조용히 보게 한 뒤 가린다. "가장 먼저 눈에 들어온 곳이 어디였어요?" 서너 명의 대답을 칠판에 적는다. "그림은 어른만 알 수 있을까요? 여러분 눈이 먼저 찾은 곳이 바로 그림 보기의 시작이에요." 시연 단추로 \'노랗게 빛나는 달\'에 \'밝게 빛나서\' 카드가 놓이는 모습을 보여 준다.',
        student: '그림을 10초 보고, 가장 먼저 본 곳을 마음속으로 정해요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '먼저 눈에 띈 까닭', slots: [{ id: 's1', label: '노랗게 빛나는 달' }], cards: ['밝게 빛나서'], shuffle: false }, sequence: [{ match: { s1: '밝게 빛나서' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 눈에 띈 곳과 까닭 잇기', minutes: 13, tool: 'mindmap',
            teacher: '그림을 다시 띄워 두고 카드 글을 함께 읽는다. "커서 눈에 띌까요, 밝아서 눈에 띌까요?" 하고 왼쪽 글의 꾸미는 말(노랗게, 아주 크고 까만)에 밑줄을 치게 한다. 둘째 문항 전에는 호쿠사이의 \'가나가와 해변의 높은 파도\'(1831년 무렵)를 띄워 같은 방법으로 본다. "먼저 본 곳은 사람마다 달라도 돼요. 까닭을 말할 수 있으면 잘 본 거예요."',
            task: '그림에서 눈에 띈 곳과 그 까닭 카드를 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '별이 빛나는 밤에서 친구들이 먼저 본 곳이에요. 알맞은 까닭을 이어 보세요.', toolOptions: { mode: 'match', topic: '먼저 눈에 띈 까닭', slots: [{ id: 's1', label: '노랗게 빛나는 달' }, { id: 's2', label: '아주 크고 까만 나무' }], cards: ['밝게 빛나서', '크고 진한 색이라서'] },
                target: { match: { s1: '밝게 빛나서', s2: '크고 진한 색이라서' } }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['밝게 빛나서', '크고 진한 색이라서', '작고 흐려서'] } } } },
              { prompt: '호쿠사이의 파도 그림에서 먼저 본 곳이에요. 알맞은 까닭을 이어 보세요.', toolOptions: { mode: 'match', topic: '먼저 눈에 띈 까닭', slots: [{ id: 's1', label: '그림을 가득 채운 높은 파도' }, { id: 's2', label: '파란 물결 끝의 하얀 물보라' }], cards: ['가장 크게 그려서', '진한 색 옆에 밝은 색이라서', '작고 흐려서'] },
                target: { match: { s1: '가장 크게 그려서', s2: '진한 색 옆에 밝은 색이라서' } }, difficulty: 0.2,
                hints: ['왼쪽 글에서 크기를 말하는 낱말과 색을 말하는 낱말을 찾아봐요.', '높은 파도는 크기 이야기예요, 하얀 물보라는 색 이야기예요. 카드도 그렇게 나누어 봐요.', '높은 파도에는 \'가장 크게 그려서\', 하얀 물보라에는 \'진한 색 옆에 밝은 색이라서\'를 놓아요.'] },
              { prompt: '그림을 볼 때 맞는 말만 골라 보세요.', toolOptions: { mode: 'pick', basket: '맞는 말', cards: ['먼저 본 곳은 사람마다 달라도 돼요', '어린이도 그림을 보고 말할 수 있어요', '그림은 어른만 알 수 있어요'] },
                target: { pick: ['먼저 본 곳은 사람마다 달라도 돼요', '어린이도 그림을 보고 말할 수 있어요'] }, difficulty: 0.1,
                predict: { q: '모두 같은 곳을 먼저 볼까요?', options: ['같아요', '다를 수 있어요'], answer: 1 },
                conclude: '먼저 눈에 띈 곳은 사람마다 다를 수 있고, 어린이도 까닭을 들어 그림을 말할 수 있어요.' },
              { prompt: '짝과 칠판 그림 앞에서 먼저 본 곳을 손가락으로 짚고 "○○이 ~해서 먼저 보였어"로 말했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 눈에 띄는 밤하늘 꾸미기', minutes: 13, tool: 'collage',
            teacher: '"고흐처럼 달을 가장 먼저 눈에 띄게 하려면 어떻게 붙일까요?" 크게, 밝게, 진한 것 옆에 밝은 것 — 세 가지 방법을 칠판에 적는다. 작은 별을 달보다 크게 붙이는 학생에게 "그러면 무엇이 먼저 보일까요?" 하고 묻는다.',
            task: '색종이 조각으로 밤하늘을 꾸며 보고 싶은 것을 눈에 띄게 만들어요.',
            levels: COL(['circle', 'star', 'leaf'], ['노랑', '하양', '검정', '파랑'], ['circle', 'star', 'leaf', 'rect', 'triangle'], ['노랑', '하양', '검정', '파랑', '보라', '주황'], ['s', 'l']),
            items: [
              { prompt: '밤하늘에서 달이 가장 먼저 눈에 띄도록 큰 노랑 동그라미를 하나 붙여 보세요. 하양 별 두 개는 그대로 두어요.', toolOptions: { bg: '파랑' }, state: { pieces: [{ shape: 'star', color: '하양', size: 's', x: 100, y: 80, r: 0 }, { shape: 'star', color: '하양', size: 's', x: 460, y: 300, r: 0 }] },
                target: { has: [{ shape: 'circle', color: '노랑', size: 'l', n: 1 }, { shape: 'star', color: '하양', min: 2 }] }, difficulty: 0.1 },
              { prompt: '달보다 작은 별을 적어도 4개 붙여 보세요. 별은 작게 골라요.', toolOptions: { bg: '파랑' }, state: { pieces: [{ shape: 'circle', color: '노랑', size: 'l', x: 420, y: 100, r: 0 }] },
                target: { has: [{ shape: 'star', size: 's', min: 4 }, { shape: 'circle', color: '노랑', size: 'l', n: 1 }] }, difficulty: 0.15,
                levels: { challenge: { prompt: '작은 별을 적어도 6개 붙여요. 별은 하양과 노랑을 모두 써요.', target: { has: [{ shape: 'star', size: 's', min: 6 }, { shape: 'star', color: '하양', min: 1 }, { shape: 'star', color: '노랑', min: 1 }, { shape: 'circle', color: '노랑', size: 'l', n: 1 }] } } } },
              { prompt: '까만 나무 조각에 밝은 색 조각을 맞대어 붙여, 나무가 또렷하게 보이게 해 보세요.', state: { pieces: [{ shape: 'leaf', color: '검정', size: 'l', x: 140, y: 220, r: 90 }] },
                target: { contrast: 'light-dark' }, difficulty: 0.2,
                levels: { challenge: { prompt: '까만 나무에 밝은 조각을 맞대고, 조각을 모두 적어도 4개 써서 밤 풍경을 만들어요.', target: { contrast: 'light-dark', pieces: { min: 4 } } } },
                conclude: '진한 색 바로 옆에 밝은 색을 놓으면 둘 다 또렷하게 보여요.' },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 그림에서 무엇이 먼저 눈에 띄었고 왜 그랬나요?" 두세 명이 한 문장으로 말한다. 짝이 꾸민 밤하늘을 보고 먼저 눈에 띈 조각을 짚어 주게 한다. 다음 시간에는 그림 속에서 아는 것을 찾아 이름을 댄다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '먼저 눈에 띈 까닭', slots: [{ id: 's1', label: '그림 한가운데 커다란 배' }, { id: 's2', label: '어두운 밤에 반짝이는 등불' }], cards: ['가장 크게 그려서', '어두운 곳에서 밝게 빛나서'] }, prompt: '친구가 그린 그림에서 먼저 본 곳이에요. 알맞은 까닭을 이어 보세요.', target: { match: { s1: '가장 크게 그려서', s2: '어두운 곳에서 밝게 빛나서' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '그림을 보고 느낌을 말할 수 있는 사람은?', options: ['어른만', '어린이도 누구나', '그림을 그린 화가만'], answer: 1, difficulty: 0.1, explain: '그림은 누구나 보고 먼저 본 곳과 까닭을 말할 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '먼저 눈에 띈 곳',
      items: [
        { type: 'figure', wide: true, prompt: '어느 조각이 가장 먼저 눈에 띄나요? ○ 하고 까닭을 쓰세요.', tool: 'collage', figures: [{ options: { readOnly: true, printColors: false }, state: { pieces: [{ shape: 'star', color: '하양', size: 's', x: 100, y: 100, r: 0 }, { shape: 'star', color: '하양', size: 's', x: 180, y: 300, r: 0 }, { shape: 'circle', color: '노랑', size: 'l', x: 380, y: 160, r: 0 }, { shape: 'star', color: '하양', size: 's', x: 480, y: 320, r: 0 }] }, caption: '까닭: ____________' }], answer: '큰 동그라미 — 가장 크게 그려서' },
        { type: 'short', prompt: '별이 빛나는 밤에서 내가 가장 먼저 본 곳을 쓰세요.' },
        { type: 'check', prompt: '그곳이 눈에 띈 까닭에 모두 ✓ 하세요.', options: ['크게 그려서', '밝은 색이라서', '움직이는 것 같아서', '진한 색 옆에 있어서'] },
        { type: 'draw', prompt: '내가 먼저 본 곳을 크게 그려 보세요.' },
      ],
      easy: {
        note: '크게, 밝게 그린 것이 먼저 보여요.',
        items: [
          { type: 'choice', prompt: '먼저 눈에 띄는 것에 ○ 하세요.', options: ['아주 큰 달', '아주 작은 점'], answer: '아주 큰 달' },
          { type: 'short', prompt: '내가 먼저 본 곳을 쓰세요.' },
          { type: 'draw', prompt: '밤하늘에 크고 밝은 달을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 색종이 고르개가 네 가지 색으로 줄어요.',
      base: '눈에 띈 곳과 까닭을 잇고, 크기·밝기로 눈에 띄는 밤하늘을 꾸며요.',
      challenge: '함정 카드가 섞이고, 별을 적어도 6개 두 가지 색으로 붙이거나 조각을 더 써서 풍경을 만들어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 그림은 어른만 이해한다고 여겨 말하지 않는다 → "어디가 먼저 보였어?"처럼 정답 없는 물음부터 묻는다. ② 까닭을 "예뻐서"로만 말한다 → 크다·밝다·진하다·움직인다 네 낱말을 칠판에 두고 고르게 한다. ③ 친구와 먼저 본 곳이 다르면 틀렸다고 여긴다 → 까닭이 있으면 모두 맞다고 말해 준다. 작품은 고흐 \'별이 빛나는 밤\'(1889, 저작권 만료)을 미술관 공개 자료로 보여 준다.',
  }));

  lessons.push(L(38, {
    title: '과일과 채소로 된 얼굴 그림에서 아는 것 이름 대기',
    objective: '아르침볼도의 \'여름\'에서 얼굴 곳곳에 숨은 과일·채소를 찾아 이름을 대고, 과일·채소처럼 보이는 조각으로 얼굴을 꾸밀 수 있다.',
    illustration: ART('a playful portrait face made of paper fruits and vegetables: a peach cheek, a cucumber nose, leafy hair, framed in a paper gallery frame', '무엇으로 만든 얼굴?', [
      { motif: 'leaf', x: 120, y: 90 }, { motif: 'flower', x: 380, y: 210 }, { motif: 'leaf', x: 360, y: 90 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '아르침볼도의 \'여름\'(1573)을 미술관 공개 자료로 띄운다. 처음에는 멀리서 보이게 작게, 다음에는 크게 보여 준다. "멀리서 보면 무엇이 보이나요? 가까이서 보니 무엇으로 되어 있나요?" "여러분이 아는 과일 하나를 찾았다면, 벌써 이 그림을 읽고 있는 거예요." 시연 단추로 \'볼\'에 \'복숭아\' 카드가 놓이는 모습을 보여 준다.',
        student: '그림 속에서 내가 아는 과일이나 채소를 하나 찾아 손가락으로 짚어요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '여름 얼굴', slots: [{ id: 'cheek', label: '볼' }], cards: ['복숭아'], shuffle: false }, sequence: [{ match: { cheek: '복숭아' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 얼굴 속 과일·채소 찾기', minutes: 12, tool: 'mindmap',
            teacher: '그림을 크게 띄워 두고 얼굴 부분을 하나씩 손으로 짚는다. "볼은 둥글고 발그레하지요. 그림 속 볼 자리에 무엇이 있나요?" 모양이 닮은 것끼리 이어 보게 한다. 모르는 과일이 나오면 "몰라도 괜찮아요. 아는 것부터 찾아요"라고 말한다.',
            task: '얼굴 부분과 그 자리에 있는 과일·채소를 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '여름 얼굴 그림의 볼과 코 자리에 있는 것을 이어 보세요. 모양이 닮은 것을 찾아요.', toolOptions: { mode: 'match', topic: '여름 얼굴', slots: [{ id: 'cheek', label: '둥글고 발그레한 볼' }, { id: 'nose', label: '길쭉한 코' }], cards: ['복숭아', '오이'] },
                target: { match: { cheek: '복숭아', nose: '오이' } }, difficulty: 0.1,
                hints: ['얼굴 부분의 모양과 과일·채소의 모양을 견주어 봐요.', '둥근 것은 둥근 것끼리, 길쭉한 것은 길쭉한 것끼리 이어 보세요.', '둥근 볼에는 복숭아, 길쭉한 코에는 오이를 놓아요.'] },
              { prompt: '볼, 코, 옷 자리에 있는 것을 이어 보세요. 옷은 여름 들판에서 거둔 것을 엮었어요.', toolOptions: { mode: 'match', topic: '여름 얼굴', slots: [{ id: 'cheek', label: '둥글고 발그레한 볼' }, { id: 'nose', label: '길쭉한 코' }, { id: 'coat', label: '엮어 만든 옷' }], cards: ['복숭아', '오이', '엮은 밀짚'] },
                target: { match: { cheek: '복숭아', nose: '오이', coat: '엮은 밀짚' } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['복숭아', '오이', '엮은 밀짚', '아이스크림'] } } },
                hints: ['얼굴 부분마다 모양과 쓰임이 닮은 것을 찾아봐요.', '옷처럼 엮을 수 있는 것은 어느 카드일까요?', '볼에는 복숭아, 코에는 오이, 옷에는 엮은 밀짚을 놓아요.'] },
              { prompt: '그림 속에서 아는 것을 찾아 이름을 댄 말만 골라 보세요.', toolOptions: { mode: 'pick', basket: '이름을 댄 말', cards: ['볼이 복숭아로 되어 있어요', '코가 오이예요', '어려운 그림이라 안 볼래요'] },
                target: { pick: ['볼이 복숭아로 되어 있어요', '코가 오이예요'] }, difficulty: 0.1,
                conclude: '아는 것을 하나씩 찾아 이름을 대면 어려워 보이는 그림도 읽을 수 있어요.' },
              { prompt: '짝과 번갈아 그림 속에서 아는 과일·채소를 하나씩 짚으며 이름을 댔으면 "다 했어요"를 누르세요. 더 찾지 못하면 그림을 다시 봐요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 과일·채소 조각으로 얼굴 꾸미기', minutes: 14, tool: 'collage',
            teacher: '"화가는 과일과 채소로 얼굴을 만들었어요. 우리는 색종이 조각을 과일·채소처럼 써 볼까요?" 빨강 동그라미는 사과, 초록 나뭇잎은 상추처럼 쓸 수 있다고 예를 든다. 다 만든 학생은 짝에게 조각마다 무슨 과일인지 이름을 말하게 한다.',
            task: '주황 얼굴판에 과일·채소처럼 보이는 조각을 붙여 얼굴을 꾸며요.',
            levels: COL(['circle', 'leaf', 'semi', 'rect'], ['빨강', '주황', '노랑', '초록', '갈색'], ['circle', 'leaf', 'semi', 'rect', 'triangle', 'heart', 'diamond'], ['빨강', '주황', '노랑', '초록', '갈색', '보라', '분홍']),
            items: [
              { prompt: '사과 볼을 만들어요. 빨강 동그라미 2개를 붙여 보세요.', state: { pieces: [{ shape: 'circle', color: '주황', size: 'l', x: 280, y: 200, r: 0 }] },
                target: { has: [{ shape: 'circle', color: '빨강', n: 2 }] }, difficulty: 0.1,
                levels: { challenge: { prompt: '사과 볼 2개(빨강 동그라미)와 바나나 입(노랑 반원 1개)을 붙여 보세요.', target: { has: [{ shape: 'circle', color: '빨강', n: 2 }, { shape: 'semi', color: '노랑', n: 1 }] } } } },
              { prompt: '상추 머리카락을 만들어요. 초록 나뭇잎을 적어도 4장 붙여 보세요.', state: { pieces: [{ shape: 'circle', color: '주황', size: 'l', x: 280, y: 220, r: 0 }] },
                target: { has: [{ shape: 'leaf', color: '초록', min: 4 }] }, difficulty: 0.15,
                levels: { challenge: { prompt: '초록 나뭇잎을 적어도 6장 붙이고, 갈색 긴 네모 하나로 콩깍지 눈썹도 만들어요.', target: { has: [{ shape: 'leaf', color: '초록', min: 6 }, { shape: 'rect', color: '갈색', n: 1 }] } } } },
              { prompt: '나만의 과일·채소 얼굴을 완성하고 점검해요.', target: { selfCheck: ['과일·채소처럼 보이는 조각을 적어도 세 가지 붙였어요', '짝에게 조각마다 무슨 과일·채소인지 말했어요', '작품에 제목을 붙였어요'], minPieces: 5 }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 그림에서 찾은 과일·채소 이름을 말해 볼까요?" 칠판에 모아 쓴다. 두세 명이 자기 얼굴 작품을 들고 "볼은 사과, 머리카락은 상추예요"처럼 소개한다. 다음 시간에는 우리나라 옛 그림 속 사람들이 무엇을 하는지 찾는다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '채소 얼굴', slots: [{ id: 'eye', label: '동그랗고 까만 눈' }, { id: 'mouth', label: '빨갛고 길쭉한 입' }], cards: ['검은콩', '빨간 고추', '하얀 무'] }, prompt: '채소로 얼굴을 만들어요. 모양과 색이 닮은 것을 이어 보세요.', target: { match: { eye: '검은콩', mouth: '빨간 고추' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '그림 속에서 아는 것을 찾아 이름을 대면?', options: ['그림을 읽기 시작한 거예요', '어른이 아니라서 소용없어요', '그림을 다 본 거예요'], answer: 0, difficulty: 0.1, explain: '아는 것 하나를 찾는 것이 그림 보기의 시작이에요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '여름 얼굴에서 찾은 것',
      items: [
        { type: 'table', prompt: '그림에서 찾은 과일·채소를 쓰세요.', columns: ['얼굴 부분', '찾은 과일·채소'], cells: [['볼', ''], ['코', ''], ['옷', '']] },
        { type: 'short', prompt: '그림에서 내가 더 찾은 과일이나 채소를 쓰세요.' },
        { type: 'choice', prompt: '그림을 보는 바른 생각에 ○ 하세요.', options: ['아는 것부터 하나씩 찾아요', '어려우면 보지 않아요'], answer: '아는 것부터 하나씩 찾아요' },
        { type: 'draw', prompt: '내가 좋아하는 과일·채소로 얼굴을 그려 보세요.' },
      ],
      easy: {
        note: '모양이 닮은 것을 찾아요.',
        items: [
          { type: 'choice', prompt: '둥근 볼과 닮은 것에 ○ 하세요.', options: ['복숭아', '오이'], answer: '복숭아' },
          { type: 'short', prompt: '그림에서 찾은 과일 하나를 쓰세요.' },
          { type: 'draw', prompt: '과일로 얼굴을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 색종이 고르개가 다섯 가지 색으로 줄어요.',
      base: '얼굴 부분과 과일·채소를 잇고, 조각으로 과일·채소 얼굴을 꾸며요.',
      challenge: '함정 카드가 섞이고, 얼굴에 바나나 입과 콩깍지 눈썹까지 조건을 더 지켜 꾸며요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 처음 보는 과일이 있어 "모르겠어요"로 멈춘다 → 아는 것부터 찾게 하고 모르는 것은 교사가 이름을 알려 준다. ② 얼굴로만 보고 과일을 찾지 못한다 → 그림을 크게 확대해 한 부분만 보여 준다. ③ 조각을 아무렇게나 붙인다 → "이 조각은 무슨 과일이야?" 하고 물어 이름을 붙이게 한다. 작품은 아르침볼도 \'여름\'(1573, 루브르 박물관, 저작권 만료)을 공개 자료로 보여 준다.',
  }));

  lessons.push(L(39, {
    title: '김홍도의 씨름 그림에서 사람들이 하는 일 찾기',
    objective: '김홍도의 \'씨름\'에서 사람들이 무엇을 하는지 찾아 말하고, 그림 속 모습을 멈춤 동작으로 따라 하며 세계 여러 나라에도 씨름이 있음을 알 수 있다.',
    illustration: ART('a circle of paper people in traditional Korean hanbok and gat hats watching two wrestlers grappling in the center, a boy carrying a tray of taffy at the side', '무엇을 하고 있나요?', [
      { motif: 'tree', x: 80, y: 200 }, { motif: 'tree', x: 400, y: 200 }, { motif: 'bird', x: 240, y: 70 }]),
    safety: ['멈춤 동작은 친구 몸을 밀거나 당기지 않고 손을 가볍게 얹기만 해요.', '책상을 밀어 둔 넓은 자리에서 해요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '국립중앙박물관 공개 자료로 김홍도의 \'씨름\'을 띄운다. "200년도 더 전에 우리나라 화가 김홍도가 그린 그림이에요. 사람들이 무엇을 하고 있나요?" 손을 들어 하나씩 말하게 한다. 시연 단추로 \'가운데에서 서로 붙잡은 두 사람\'에 \'씨름을 해요\' 카드가 놓이는 모습을 보여 준다.',
        student: '그림 속 사람 한 명을 골라 무엇을 하는지 마음속으로 말해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '씨름 그림', slots: [{ id: 's1', label: '가운데에서 서로 붙잡은 두 사람' }], cards: ['씨름을 해요'], shuffle: false }, sequence: [{ match: { s1: '씨름을 해요' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 그림 속 사람들이 하는 일 찾기', minutes: 13, tool: 'mindmap',
            teacher: '그림을 띄워 두고 "가운데 두 사람, 둘레에 앉은 사람들, 엿판을 멘 아이를 찾아 손가락으로 짚어 봐요." 짚은 뒤 하는 일을 카드로 잇게 한다. 옛날 물건을 나눌 때는 "이 그림은 휴대 전화가 없던 아주 옛날에 그렸어요"라고 짚는다.',
            task: '그림 속 사람과 하는 일을 잇고, 옛날 그림에 있을 수 있는 것을 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '씨름 그림 속 사람들과 하는 일을 이어 보세요.', toolOptions: { mode: 'match', topic: '씨름 그림', slots: [{ id: 's1', label: '가운데에서 서로 붙잡은 두 사람' }, { id: 's2', label: '둘레에 빙 둘러앉은 사람들' }, { id: 's3', label: '엿판을 멘 아이' }], cards: ['씨름을 해요', '구경을 해요', '엿을 팔아요'] },
                target: { match: { s1: '씨름을 해요', s2: '구경을 해요', s3: '엿을 팔아요' } }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['씨름을 해요', '구경을 해요', '엿을 팔아요', '잠을 자요'] } } } },
              { prompt: '아주 옛날에 그린 그림이에요. 그림에 있을 수 있는 것과 없는 것을 나누어 보세요.', toolOptions: { topic: '옛날 그림', slots: ['있을 수 있어요', '있을 수 없어요'], cards: ['갓', '부채', '짚신', '휴대 전화', '운동화'] },
                target: { sort: { '있을 수 있어요': ['갓', '부채', '짚신'], '있을 수 없어요': ['휴대 전화', '운동화'] } }, difficulty: 0.2,
                hints: ['그림을 그린 때가 아주 옛날이라는 것을 떠올려요. 그때에도 있던 물건일까요?', '전기나 기계로 만든 물건은 그때 있었을까요? 그런 카드를 다시 보세요.', '갓·부채·짚신은 옛날에도 있었고, 휴대 전화·운동화는 없었어요.'] },
              { prompt: '짝과 그림 속 사람 한 명을 골라 "이 사람은 ~를 하고 있어"라고 말하고, 짝이 그 사람을 찾아 짚었으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 멈춤 동작과 세계의 씨름', minutes: 14, tool: 'map',
            teacher: '모둠마다 그림 속 한 장면(씨름하는 두 사람, 구경꾼, 엿장수)을 골라 3초 멈춤 동작을 만든다. 씨름하는 두 사람은 서로 어깨에 손만 가볍게 얹고 밀지 않는다. 다른 모둠이 어느 사람인지 맞힌다(6분). 이어 "다른 나라에도 씨름이 있을까요?" 하고 몽골의 부흐, 스위스의 슈빙겐을 소개하고 세계 지도에서 찾는다.',
            task: '그림 속 장면을 멈춤 동작으로 만들고, 세계 지도에서 씨름을 하는 나라를 찾아요.',
            levels: MAP_LV,
            items: [
              { prompt: '모둠이 그림 속 한 장면을 3초 멈춤 동작으로 보여 주고, 다른 모둠이 어느 사람인지 맞혔으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '김홍도가 씨름 그림을 그린 우리나라에 핀을 꽂아 보세요.', toolOptions: WORLD(), target: { place: '우리나라' }, difficulty: 0.05 },
              { prompt: '몽골 사람들은 \'부흐\'라는 씨름을 해요. 몽골 점이 있는 대륙에 핀을 꽂아 보세요.', toolOptions: WORLD({ places: [KOREA, { name: '몽골', icon: 'dot', at: [3, 0] }] }), target: { region: '아시아' }, difficulty: 0.15,
                hints: ['몽골이라고 쓰인 점을 먼저 찾고, 그 점을 둘러싼 굵은 선 안쪽에 꽂아요.', '핀이 꽂힌 칸과 몽골 점이 같은 선 안에 있는지 보세요.', '몽골 점은 우리나라와 같은 아시아 대륙 안에 있어요. 핀을 그 대륙 칸으로 옮겨요.'] },
              { prompt: '스위스 사람들은 톱밥 위에서 \'슈빙겐\'이라는 씨름을 해요. 스위스 점이 있는 대륙에 핀을 꽂아 보세요.', toolOptions: WORLD({ places: [KOREA, { name: '스위스', icon: 'dot', at: [0, 0] }] }), target: { region: '유럽' }, difficulty: 0.2,
                hints: ['스위스라고 쓰인 점을 먼저 찾고, 그 점을 둘러싼 굵은 선 안쪽에 꽂아요.', '핀이 꽂힌 칸의 대륙 이름을 읽어 보세요. 스위스 점과 같은 선 안에 있나요?', '스위스 점은 지도 왼쪽 위 유럽 대륙 안에 있어요. 핀을 그 대륙 칸으로 옮겨요.'],
                conclude: '씨름처럼 맞붙어 겨루는 놀이는 세계 여러 나라에 있어요.' },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"씨름 그림에서 찾은 사람과 하는 일을 말해 볼까요?" 두세 명이 말한다. 멈춤 동작을 하며 알게 된 점(구경꾼도 저마다 다른 자세였다)을 짧게 나눈다. 다음 시간에는 또 다른 나라의 그림에서 아는 모양을 찾는다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '옛날 그림', slots: ['있을 수 있어요', '있을 수 없어요'], cards: ['한복', '등잔불', '자동차', '텔레비전'] }, prompt: '아주 옛날에 그린 그림이에요. 그림에 있을 수 있는 것과 없는 것을 나누어 보세요.', target: { sort: { '있을 수 있어요': ['한복', '등잔불'], '있을 수 없어요': ['자동차', '텔레비전'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '그림 속에서 아는 것을 찾는 좋은 방법은?', options: ['사람마다 무엇을 하는지 하나씩 찾아요', '처음 본 그림은 그냥 넘겨요', '가장 큰 것 하나만 봐요'], answer: 0, difficulty: 0.1, explain: '사람과 물건을 하나씩 짚으며 찾으면 그림 속 이야기가 보여요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '씨름 그림 속 사람들',
      items: [
        { type: 'table', prompt: '그림 속 사람들이 하는 일을 쓰세요.', columns: ['누구', '하는 일'], cells: [['가운데 두 사람', ''], ['둘레에 앉은 사람들', ''], ['엿판을 멘 아이', '']] },
        { type: 'choice', prompt: '옛날 그림에 있을 수 없는 것에 ○ 하세요.', options: ['갓', '부채', '휴대 전화'], answer: '휴대 전화' },
        { type: 'short', prompt: '우리 모둠이 멈춤 동작으로 나타낸 사람과 그 사람이 하는 일을 쓰세요.' },
        { type: 'draw', prompt: '그림 속에서 가장 재미있었던 사람을 그려 보세요.' },
      ],
      easy: {
        note: '가운데, 둘레, 옆을 차례로 봐요.',
        items: [
          { type: 'choice', prompt: '둘레에 앉은 사람들이 하는 일에 ○ 하세요.', options: ['구경을 해요', '잠을 자요'], answer: '구경을 해요' },
          { type: 'short', prompt: '그림에서 찾은 물건 하나를 쓰세요.' },
          { type: 'draw', prompt: '씨름하는 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 지도에 핀 자리 이름이 보여요.',
      base: '사람과 하는 일을 잇고, 옛날 물건을 나누고, 세계 지도에서 씨름하는 나라를 찾아요.',
      challenge: '함정 카드가 섞이고, 지도에 대륙 이름이 보이지 않아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 가운데 두 사람만 보고 둘레를 보지 않는다 → 그림 둘레를 손가락으로 한 바퀴 따라가게 한다. ② 멈춤 동작에서 실제로 밀어 넘어뜨린다 → 손만 얹는 약속을 먼저 시범 보인다. ③ 옛날 그림이라 지금과 같다고 여긴다 → 등잔불·짚신처럼 지금은 잘 쓰지 않는 물건을 짚어 준다. 작품은 김홍도 \'씨름\'(조선 후기, 국립중앙박물관, 저작권 만료)을 공개 자료로 보여 준다.',
  }));

  lessons.push(L(40, {
    title: '몬드리안의 구성에서 아는 모양 찾아 네모 작품 만들기',
    objective: '몬드리안의 \'구성\'에서 아는 모양과 색을 찾아 이름을 대고, 곧은 줄과 빨강·파랑·노랑 네모로 비슷한 작품을 만들 수 있다.',
    illustration: ART('a paper collage of thick black straight lines dividing red, blue, yellow and white rectangles, a child holding a paper square up to compare', '어떤 모양이 보여요?', [
      { motif: 'house', x: 100, y: 200 }, { motif: 'star', x: 380, y: 80, s: 0.5 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '몬드리안의 \'구성\' 연작 가운데 하나를 미술관 공개 자료로 띄운다. "이 그림에서 여러분이 아는 모양을 찾아볼까요?" 네모, 곧은 줄, 빨강·파랑·노랑을 학생 입에서 나오게 한다. "앞에서 본 별이 빛나는 밤, 여름, 씨름과 무엇이 달라요?" 시연 단추로 \'까만 곧은 줄\'이 \'있어요\' 가지에 놓이는 모습을 보여 준다.',
        student: '그림에서 네모를 하나 찾아 손가락으로 따라 그려 봐요.',
        demo: { tool: 'mindmap', options: { topic: '구성 그림', slots: ['있어요', '없어요'], cards: ['까만 곧은 줄'], shuffle: false }, sequence: [{ sort: { '있어요': ['까만 곧은 줄'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 아는 모양과 색 찾기', minutes: 12, tool: 'mindmap',
            teacher: '"구성 그림에는 구불구불한 선이 있나요? 동그라미가 있나요?" 그림 위를 손가락으로 따라가며 확인하게 한다. 지금까지 본 그림을 함께 떠올릴 때는 칠판에 네 그림의 이름을 적어 두고 하나씩 가리킨다.',
            task: '구성 그림에 있는 것을 찾아 나누고, 그림마다 찾은 것을 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '몬드리안의 구성 그림에 있는 것과 없는 것을 나누어 보세요.', toolOptions: { topic: '구성 그림', slots: ['있어요', '없어요'], cards: ['까만 곧은 줄', '빨간 네모', '노란 네모', '동그라미', '구불구불한 선'] },
                target: { sort: { '있어요': ['까만 곧은 줄', '빨간 네모', '노란 네모'], '없어요': ['동그라미', '구불구불한 선'] } }, difficulty: 0.15,
                hints: ['구성 그림의 선을 손가락으로 따라가 봐요. 휘어진 곳이 있나요?', '구성 그림에 있는 모양은 모서리가 있는 모양이에요. 둥근 카드는 다시 보세요.', '곧은 줄과 네모는 있어요. 동그라미와 구불구불한 선은 없어요.'] },
              { prompt: '지금까지 본 그림에서 찾은 것이에요. 어느 그림인지 이어 보세요.', toolOptions: { mode: 'match', topic: '어느 그림?', slots: [{ id: 'w1', label: '노란 달과 빙글빙글 하늘' }, { id: 'w2', label: '복숭아 볼과 오이 코' }, { id: 'w3', label: '빨강·파랑·노랑 네모' }], cards: ['별이 빛나는 밤', '여름', '구성'] },
                target: { match: { w1: '별이 빛나는 밤', w2: '여름', w3: '구성' } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['별이 빛나는 밤', '여름', '구성', '씨름'] } } } },
              { prompt: '교실에서 구성 그림처럼 곧은 줄과 네모로 된 것(창문, 책꽂이 등)을 두 가지 찾아 짝에게 이름을 댔으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 네모로만 만드는 작품', minutes: 15, tool: 'collage',
            teacher: '"몬드리안은 곧은 줄과 네모만으로 그림을 그렸어요. 우리는 네모 조각과 긴 네모 조각으로 만들어 볼까요?" 까만 긴 네모는 곧은 줄로 쓴다. 동그라미를 붙이려는 학생에게 "구성 그림에 동그라미가 있었나요?" 하고 되묻는다.',
            task: '네모와 긴 네모 조각으로 몬드리안 같은 작품을 만들어요.',
            levels: COL(['square', 'rect'], ['빨강', '파랑', '노랑', '검정', '하양'], ['square', 'rect', 'circle', 'triangle', 'leaf'], ['빨강', '파랑', '노랑', '검정', '하양', '초록', '보라', '주황']),
            items: [
              { prompt: '빨강·파랑·노랑 네모를 적어도 하나씩, 까만 긴 네모를 적어도 2개 붙여 보세요.', target: { has: [{ shape: 'square', color: '빨강', min: 1 }, { shape: 'square', color: '파랑', min: 1 }, { shape: 'square', color: '노랑', min: 1 }, { shape: 'rect', color: '검정', min: 2 }] }, difficulty: 0.15,
                levels: { challenge: { prompt: '빨강·파랑·노랑 네모를 적어도 하나씩, 까만 긴 네모를 적어도 2개 붙여요. 동그라미와 세모는 쓰지 않아요.', target: { has: [{ shape: 'square', color: '빨강', min: 1 }, { shape: 'square', color: '파랑', min: 1 }, { shape: 'square', color: '노랑', min: 1 }, { shape: 'rect', color: '검정', min: 2 }, { shape: 'circle', n: 0 }, { shape: 'triangle', n: 0 }] } } } },
              { prompt: '빨간 네모가 가장 먼저 눈에 띄게 만들어요. 큰 빨강 네모 1개, 작은 파랑 네모와 작은 노랑 네모를 적어도 하나씩 붙여 보세요.', target: { has: [{ shape: 'square', color: '빨강', size: 'l', n: 1 }, { shape: 'square', color: '파랑', size: 's', min: 1 }, { shape: 'square', color: '노랑', size: 's', min: 1 }] }, difficulty: 0.2,
                conclude: '크게 붙인 색이 먼저 눈에 띄어요. 몬드리안도 네모의 크기를 다르게 했어요.' },
              { prompt: '나만의 네모 작품을 완성하고 점검해요.', target: { selfCheck: ['곧은 모양 조각만 썼어요', '빨강·파랑·노랑을 모두 썼어요', '가장 눈에 띄게 하고 싶은 네모를 크게 붙였어요'], minPieces: 5 }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"37차시부터 본 네 그림에서 아는 것을 찾아 이름을 댈 수 있게 되었나요?" 그림마다 하나씩 학생이 말하게 한다. 짝의 네모 작품을 보고 가장 먼저 눈에 띈 네모를 짚어 준다. 다음 시간부터는 그림을 보고 든 느낌을 말과 몸짓으로 나타낸다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '네모 작품', slots: ['있어요', '없어요'], cards: ['파란 네모', '까만 곧은 줄', '하트', '물결 모양'] }, prompt: '친구가 몬드리안처럼 네모와 곧은 줄로만 만든 작품이에요. 있을 것과 없을 것을 나누어 보세요.', target: { sort: { '있어요': ['파란 네모', '까만 곧은 줄'], '없어요': ['하트', '물결 모양'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '몬드리안의 구성 그림에서 찾을 수 있는 모양은?', options: ['곧은 줄과 네모', '동그라미와 하트', '구불구불한 선'], answer: 0, difficulty: 0.1, explain: '구성 그림은 곧은 줄과 빨강·파랑·노랑·하양 네모로 되어 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '네모로 만든 그림',
      items: [
        { type: 'check', prompt: '몬드리안의 구성 그림에 있는 것에만 모두 ✓ 하세요.', options: ['곧은 줄', '동그라미', '네모', '빨강', '초록', '노랑'], answer: '곧은 줄, 네모, 빨강, 노랑' },
        { type: 'table', prompt: '그림마다 내가 찾은 것을 하나씩 쓰세요.', columns: ['그림', '내가 찾은 것'], cells: [['별이 빛나는 밤', ''], ['여름', ''], ['씨름', ''], ['구성', '']] },
        { type: 'short', prompt: '교실에서 찾은 곧은 줄과 네모로 된 물건을 쓰세요.' },
        { type: 'draw', prompt: '곧은 줄과 네모로만 나만의 그림을 그리고 빨강·파랑·노랑을 칠하세요.' },
      ],
      easy: {
        note: '곧은 줄과 네모를 찾아요.',
        items: [
          { type: 'choice', prompt: '구성 그림에 있는 모양에 ○ 하세요.', options: ['네모', '동그라미'], answer: '네모' },
          { type: 'short', prompt: '구성 그림에 있는 색 하나를 쓰세요.' },
          { type: 'draw', prompt: '네모 세 개로 그림을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 고르개가 네모·긴 네모와 다섯 색만 보여요.',
      base: '구성 그림의 모양을 찾고, 네모 조각으로 크기가 다른 작품을 만들어요.',
      challenge: '함정 카드가 섞이고, 모든 모양이 보이는 고르개에서 동그라미·세모 없이 만들어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 네모와 긴 네모를 같은 것으로 본다 → 두 조각을 나란히 대어 견주게 한다. ② 그림이 쉬워 보여 "나도 그리겠다"며 대충 본다 → 줄의 굵기와 네모 크기가 저마다 다르다는 것을 찾게 한다. ③ 앞 차시 그림을 헷갈린다 → 칠판에 네 그림을 작게 붙여 둔다. 작품은 몬드리안 \'구성\' 연작(1920~1930년대, 저작권 만료)을 공개 자료로 보여 준다.',
  }));

  // ───────────────────────── 41~44차시: 그림을 보고 든 느낌과 상상한 이야기 나타내기 ─────────────────────────

  lessons.push(L(41, {
    title: '높은 파도 그림을 보고 든 느낌을 말과 몸짓으로 나타내기',
    objective: '호쿠사이의 \'가나가와 해변의 높은 파도\'를 보고 든 느낌을 느낌 낱말과 몸짓으로 나타내고, 그림 속에서 있었을 일을 상상해 한 문장으로 말할 수 있다.',
    illustration: ART('a huge curling paper wave with white claw-like foam towering over three small rowing boats, a tiny snowy mountain in the distance', '어떤 느낌이 들어요?', [
      { motif: 'wave', x: 160, y: 200 }, { motif: 'wave', x: 320, y: 214 }, { motif: 'mountain', x: 250, y: 190, s: 0.5 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '호쿠사이의 \'가나가와 해변의 높은 파도\'(1831년 무렵)를 크게 띄운다. "눈을 감고 이 그림 속 배에 탔다고 생각해 봐요. 무슨 소리가 들려요? 내 몸은 어떻게 될 것 같아요?" 두세 명의 느낌 낱말을 칠판에 적는다. 시연 단추로 친구의 말에 \'걱정\' 카드가 놓이는 모습을 보여 준다.',
        student: '그림 속 배에 탔다고 생각하고 떠오른 느낌 낱말 하나를 정해요.',
        demo: { tool: 'emotion', options: { cards: ['걱정'], slots: [{ id: 's1', label: '"배가 뒤집힐까 봐 가슴이 콩닥콩닥해"' }], shuffle: false }, sequence: [{ match: { s1: '걱정' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 느낌 낱말과 몸짓 찾기', minutes: 13, tool: 'emotion',
            teacher: '"친구 말 속에서 마음을 알려 주는 낱말을 찾아봐요. \'콩닥콩닥\', \'깜짝\' 같은 말이요." 몸짓 문항은 교사가 먼저 몸짓을 해 보이고 어떤 느낌인지 묻는다. 반 전체가 일어나 교사의 \'잔잔한 바다\'·\'높은 파도\' 신호에 맞추어 팔로 물결을 만든다(3분).',
            task: '친구의 말과 몸짓에 어울리는 느낌 카드를 놓고, 파도 몸짓을 해 봐요.',
            levels: CARD_LV,
            items: [
              { prompt: '파도 그림을 본 친구들의 말이에요. 어울리는 느낌 카드를 놓아 보세요.', toolOptions: { cards: ['걱정', '놀람'], slots: [{ id: 's1', label: '"배가 뒤집힐까 봐 가슴이 콩닥콩닥해"' }, { id: 's2', label: '"파도가 이렇게 큰 줄 몰라서 깜짝 놀랐어"' }] },
                target: { match: { s1: '걱정', s2: '놀람' } }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['걱정', '놀람', '편안함'] } } } },
              { prompt: '느낌을 몸짓으로 나타냈어요. 몸짓에 어울리는 느낌 카드를 놓아 보세요.', toolOptions: { cards: ['놀람', '무서움', '신남'], slots: [{ id: 's1', label: '눈을 동그랗게 뜨고 입을 크게 벌려요' }, { id: 's2', label: '몸을 웅크리고 덜덜 떨어요' }, { id: 's3', label: '폴짝폴짝 뛰며 손뼉을 쳐요' }] },
                target: { match: { s1: '놀람', s2: '무서움', s3: '신남' } }, difficulty: 0.2 },
              { prompt: '반 친구들과 \'잔잔한 바다\'와 \'높은 파도\' 신호에 맞추어 팔로 물결을 만들고, 짝에게 그때 느낌 낱말을 말했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 그림 속 이야기 상상하기', minutes: 14, tool: 'emotion',
            teacher: '"그림에 보이는 것과 내가 상상한 것은 달라요. 배 세 척은 보이지만, 사람들이 어디에 가는지는 그림에 쓰여 있지 않지요." 두 친구의 이야기가 다를 때 "누구 이야기가 맞을까요?" 하고 물은 뒤, 그림 하나에 이야기는 여러 개일 수 있다고 짚는다.',
            task: '보이는 것과 상상한 이야기를 나누고, 서로 다른 이야기를 받아들여요.',
            levels: CARD_LV,
            items: [
              { prompt: '민지가 파도 그림을 보고 한 말이에요. 그림에 보이는 것과 상상한 이야기로 나누어 보세요.', toolOptions: { mode: 'sort', slots: ['그림에 보이는 것', '상상한 이야기'], cards: ['배가 세 척 있어요', '사람들이 배에 엎드려 있어요', '사람들은 물고기를 팔러 가요', '파도가 배를 잡으려는 괴물 같아요'] },
                target: { sort: { '그림에 보이는 것': ['배가 세 척 있어요', '사람들이 배에 엎드려 있어요'], '상상한 이야기': ['사람들은 물고기를 팔러 가요', '파도가 배를 잡으려는 괴물 같아요'] } }, difficulty: 0.2,
                hints: ['눈으로 세거나 짚을 수 있으면 보이는 것, 그림에 없는 까닭이나 생각이면 상상이에요.', '물고기를 팔러 가는지, 괴물인지 그림에 쓰여 있나요? 그 카드를 다시 보세요.', '배 세 척과 엎드린 사람들은 보이는 것, 물고기 팔러 가기와 괴물은 상상이에요.'] },
              { prompt: '준호는 "배가 가라앉는 이야기", 서아는 "배가 무사히 돌아가는 이야기"를 떠올렸어요. 어떻게 생각해요?', toolOptions: { mode: 'branch', situation: '같은 파도 그림을 보고 준호와 서아가 서로 다른 이야기를 떠올렸어요.', choices: [
                { id: 'both', text: '둘 다 그림을 보고 상상한 이야기예요', result: '두 친구가 서로의 이야기를 듣고 그림을 다시 보았어요.', mood: '기쁨' },
                { id: 'one', text: '준호 이야기만 맞아요', result: '서아가 자기 이야기를 말하기 싫어졌어요.', mood: '속상함', why: '그림에 이야기가 하나만 정해져 있을까요?' },
                { id: 'none', text: '그림에는 이야기가 없어요', result: '아무도 상상한 이야기를 말하지 않았어요.', mood: '걱정', why: '그림을 보고 이야기를 떠올리는 것도 그림 보기예요.' }] }, target: { choice: 'both' }, difficulty: 0.15,
                predict: { q: '그림 하나에 이야기는 몇 개일까요?', options: ['하나뿐', '여러 개'], answer: 1 },
                conclude: '그림 하나를 보고도 사람마다 서로 다른 이야기를 상상할 수 있어요.' },
              { prompt: '짝에게 "파도가 지나간 다음에는 ~했을 거야"로 내가 상상한 이야기를 한 문장 말했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 파도 그림을 보고 어떤 느낌이 들었나요? 몸짓으로도 보여 줄래요?" 두세 명이 느낌 낱말과 몸짓을 함께 보여 준다. 서로 다른 이야기를 떠올린 친구 둘을 뽑아 이야기를 들어 본다. 다음 시간에는 공원 그림 속 사람의 이야기를 차례대로 지어 본다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { cards: ['기쁨', '슬픔', '화남'], slots: [{ id: 's1', label: '"꽃밭이 환해서 기분이 좋아"' }, { id: 's2', label: '"혼자 남은 강아지가 안쓰러워 눈물이 날 것 같아"' }] }, prompt: '다른 그림을 본 친구들의 말이에요. 어울리는 느낌 카드를 놓아 보세요.', target: { match: { s1: '기쁨', s2: '슬픔' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '그림 하나를 보고 상상한 이야기는?', options: ['사람마다 여러 가지일 수 있어요', '하나로 정해져 있어요', '화가에게 물어봐야만 알아요'], answer: 0, difficulty: 0.1, explain: '그림을 보고 떠올린 이야기는 사람마다 다를 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '파도 그림의 느낌과 이야기',
      items: [
        { type: 'table', prompt: '파도 그림을 보고 든 느낌을 쓰세요.', columns: ['느낌 낱말', '어울리는 몸짓'], rows: 2 },
        { type: 'choice', prompt: '그림에 보이는 것에 ○ 하세요.', options: ['배에 엎드린 사람들', '사람들이 가는 곳'], answer: '배에 엎드린 사람들' },
        { type: 'short', prompt: '파도가 지나간 다음에 어떤 일이 있었을지 상상해 쓰세요.' },
        { type: 'draw', prompt: '내가 상상한 다음 장면을 그려 보세요.' },
      ],
      easy: {
        note: '마음을 알려 주는 낱말을 찾아요.',
        items: [
          { type: 'choice', prompt: '"깜짝 놀랐어"의 느낌에 ○ 하세요.', options: ['놀람', '편안함'], answer: '놀람' },
          { type: 'short', prompt: '파도 그림을 보고 든 느낌 낱말 하나를 쓰세요.' },
          { type: 'draw', prompt: '파도 몸짓을 하는 나를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 틀린 카드는 바로 돌아와요.',
      base: '친구의 말과 몸짓에서 느낌을 찾고, 보이는 것과 상상한 이야기를 나누어요.',
      challenge: '함정 느낌 카드가 섞여 있어요. 짝과 서로 다른 이야기를 하나씩 더 지어 견주어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 느낌을 "좋아요·싫어요"로만 말한다 → 칠판에 걱정·놀람·무서움·신남·편안함 날씨 카드를 붙여 두고 고르게 한다. ② 상상한 것을 그림에 있는 것처럼 말한다 → "그림에서 손가락으로 짚을 수 있어요?" 하고 묻는다. ③ 친구 이야기가 다르면 틀렸다고 한다 → 그림 하나에 이야기는 여러 개라고 말해 준다. 몸짓은 제자리에서 팔만 크게 움직이고 뛰어다니지 않는다. 작품은 호쿠사이 \'가나가와 해변의 높은 파도\'(1831년 무렵, 저작권 만료)를 공개 자료로 보여 준다.',
  }));

  lessons.push(L(42, {
    title: '공원 그림 속 사람의 하루를 차례대로 지어 말하기',
    objective: '쇠라의 \'그랑드자트섬의 일요일 오후\'에서 한 사람을 골라 그 사람에게 있었을 일을 처음·가운데·끝 차례로 상상해 말하고 멈춤 동작으로 나타낼 수 있다.',
    illustration: ART('a sunny riverside park made of tiny paper dots, people with parasols resting on the grass, a lady walking a small monkey on a leash, sailboats on the river', '이 사람에게 무슨 일이?', [
      { motif: 'tree', x: 90, y: 190 }, { motif: 'tree', x: 400, y: 190 }, { motif: 'wave', x: 240, y: 230 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '쇠라의 \'그랑드자트섬의 일요일 오후\'(1884~1886)를 띄우고, 한 부분을 크게 확대해 "가까이서 보니 무엇으로 그렸나요?" 하고 묻는다(작은 색 점). 다시 전체를 보이며 양산을 쓴 사람, 낚시하는 사람, 원숭이 줄을 잡은 사람을 함께 찾는다. "이 사람은 오늘 아침에 무엇을 했을까요?" 시연 단추로 이야기 카드가 \'처음\' 자리에 놓이는 모습을 보여 준다.',
        student: '그림에서 이야기를 지어 보고 싶은 사람 한 명을 골라요.',
        demo: { tool: 'story', options: { cards: ['아침에 배를 타고 섬에 왔어요', '풀밭에 앉아 쉬었어요'], slots: ['처음', '끝'], shuffle: false }, sequence: [{ order: ['아침에 배를 타고 섬에 왔어요', '풀밭에 앉아 쉬었어요'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 그림 속 사람의 이야기 차례 정하기', minutes: 13, tool: 'story',
            teacher: '"이야기에는 처음, 가운데, 끝이 있어요. \'아침에\', \'해가 질 무렵\' 같은 때를 알려 주는 말과 \'그래서\'처럼 일이 이어지는 까닭을 찾아봐요." 카드를 소리 내어 읽게 한 뒤 놓게 한다. 이야기는 친구들이 상상한 것이고 그림에 쓰여 있는 것이 아니라는 것도 함께 말한다.',
            task: '친구들이 상상한 그림 속 사람의 이야기를 차례대로 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '양산을 쓴 사람의 하루를 민지가 상상했어요. 차례대로 놓아 보세요.', toolOptions: { slots: ['처음', '가운데', '끝'], cards: ['아침에 엄마와 배를 타고 섬에 왔어요', '양산 아래 풀밭에 앉아 강을 보았어요', '해가 질 무렵 배를 타고 집에 갔어요'] },
                target: { order: ['아침에 엄마와 배를 타고 섬에 왔어요', '양산 아래 풀밭에 앉아 강을 보았어요', '해가 질 무렵 배를 타고 집에 갔어요'] }, difficulty: 0.1 },
              { prompt: '원숭이 줄을 잡은 사람의 이야기를 준호가 상상했어요. 차례대로 놓아 보세요.', toolOptions: { slots: ['처음', '가운데', '끝'], cards: ['줄에 묶인 원숭이가 나비를 보았어요', '원숭이가 나비를 따라 깡충 뛰었어요', '주인이 웃으며 원숭이를 안아 주었어요'] },
                target: { order: ['줄에 묶인 원숭이가 나비를 보았어요', '원숭이가 나비를 따라 깡충 뛰었어요', '주인이 웃으며 원숭이를 안아 주었어요'] }, difficulty: 0.15,
                levels: { challenge: { prompt: '원숭이 줄을 잡은 사람의 이야기를 준호가 네 장으로 상상했어요. 차례대로 놓아 보세요.', toolOptions: { slots: ['처음', '그다음', '그다음', '끝'], cards: ['줄에 묶인 원숭이가 나비를 보았어요', '원숭이가 나비를 따라 깡충 뛰었어요', '나비를 쫓다 줄이 다리에 감겼어요', '주인이 줄을 풀고 원숭이를 안아 주었어요'] }, target: { order: ['줄에 묶인 원숭이가 나비를 보았어요', '원숭이가 나비를 따라 깡충 뛰었어요', '나비를 쫓다 줄이 다리에 감겼어요', '주인이 줄을 풀고 원숭이를 안아 주었어요'] } } } },
              { prompt: '낚시하는 사람의 이야기를 서아가 상상했어요. 차례대로 놓아 보세요.', toolOptions: { slots: 4, cards: ['낚싯대를 강물에 드리웠어요', '한참 동안 조용히 기다렸어요', '낚싯줄이 쑥 당겨졌어요', '작은 물고기를 낚았어요'] },
                target: { order: ['낚싯대를 강물에 드리웠어요', '한참 동안 조용히 기다렸어요', '낚싯줄이 쑥 당겨졌어요', '작은 물고기를 낚았어요'] }, difficulty: 0.25,
                levels: { easy: { prompt: '낚시하는 사람의 이야기를 서아가 상상했어요. 세 장을 차례대로 놓아 보세요.', toolOptions: { slots: 3, cards: ['낚싯대를 강물에 드리웠어요', '낚싯줄이 쑥 당겨졌어요', '작은 물고기를 낚았어요'] }, target: { order: ['낚싯대를 강물에 드리웠어요', '낚싯줄이 쑥 당겨졌어요', '작은 물고기를 낚았어요'] } } },
                conclude: '이야기는 앞의 일 때문에 다음 일이 생기도록 차례를 지어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 멈춤 그림과 다음 장면 몸짓', minutes: 14, tool: 'emotion',
            teacher: '모둠마다 그림 속 사람 하나를 골라 10초 멈춤 동작을 만든다. 교사가 "움직여!" 하면 그 사람의 다음 장면을 3초 동안 몸짓으로 보여 주고 다시 멈춘다. 다른 모둠은 어떤 이야기였는지 말한다(모둠마다 1분, 6모둠 6분). 같은 사람으로 다른 이야기를 지은 모둠이 있으면 함께 견준다.',
            task: '그림 속 사람으로 멈춤 동작과 다음 장면 몸짓을 만들고, 다른 이야기를 받아들여요.',
            levels: CARD_LV,
            items: [
              { prompt: '모둠이 그림 속 사람으로 10초 멈춤 동작을 하고, "움직여!" 신호에 다음 장면 몸짓을 보여 주었으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '다른 모둠이 같은 낚시하는 사람으로 "물고기를 놓친 이야기"를 보여 주었어요. 어떻게 말할까요?', toolOptions: { mode: 'branch', situation: '우리 모둠은 물고기를 낚은 이야기, 다른 모둠은 물고기를 놓친 이야기를 몸짓으로 보여 주었어요.', choices: [
                { id: 'ask', text: '"너희 이야기도 재미있다. 왜 놓쳤다고 정했어?" 하고 물어요', result: '다른 모둠이 낚싯줄이 끊어지는 장면을 상상했다고 알려 주었어요.', mood: '기쁨' },
                { id: 'wrong', text: '"틀렸어, 물고기를 낚아야 해" 하고 말해요', result: '다른 모둠 친구들이 몸짓을 그만두었어요.', mood: '속상함', why: '그림 속 사람의 이야기가 하나로 정해져 있을까요?' }] }, target: { choice: 'ask' }, difficulty: 0.1 },
              { prompt: '내가 고른 사람의 이야기를 처음·가운데·끝 세 문장으로 짝에게 말했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 지은 이야기 가운데 처음·가운데·끝이 또렷한 이야기를 들어 볼까요?" 두 명이 말한다. 같은 사람으로 서로 다른 이야기가 나왔던 것을 떠올리게 한다. 다음 시간에는 연못 그림의 느낌을 색과 몸짓으로 나타낸다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { slots: ['처음', '가운데', '끝'], cards: ['강가에 돗자리를 폈어요', '돗자리에 앉아 도시락을 먹었어요', '돗자리를 접어 집으로 갔어요'] }, prompt: '강가 그림을 보고 하준이 상상한 이야기예요. 차례대로 놓아 보세요.', target: { order: ['강가에 돗자리를 폈어요', '돗자리에 앉아 도시락을 먹었어요', '돗자리를 접어 집으로 갔어요'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '친구가 같은 사람으로 나와 다른 이야기를 지었어요.', options: ['그럴 수 있어요', '내 이야기만 맞아요', '친구가 그림을 잘못 봤어요'], answer: 0, difficulty: 0.1, explain: '그림 속 사람의 이야기는 보는 사람마다 다르게 상상할 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '그림 속 사람의 이야기',
      items: [
        { type: 'short', prompt: '내가 고른 그림 속 사람을 쓰세요.' },
        { type: 'table', prompt: '그 사람의 이야기를 차례대로 쓰세요.', columns: ['차례', '있었던 일'], cells: [['처음', ''], ['가운데', ''], ['끝', '']] },
        { type: 'choice', prompt: '이야기 차례를 알려 주는 말에 ○ 하세요.', options: ['해가 질 무렵', '파란색'], answer: '해가 질 무렵' },
        { type: 'draw', prompt: '이야기의 끝 장면을 그려 보세요.' },
      ],
      easy: {
        note: '처음에 한 일, 나중에 한 일을 떠올려요.',
        items: [
          { type: 'choice', prompt: '처음에 오는 일에 ○ 하세요.', options: ['아침에 공원에 왔어요', '저녁에 집에 갔어요'], answer: '아침에 공원에 왔어요' },
          { type: 'short', prompt: '내가 고른 사람이 한 일을 하나 쓰세요.' },
          { type: 'draw', prompt: '그림 속 사람을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 초록 테두리가 생기고, 낚시 이야기는 세 장으로 줄어요.',
      base: '세 장·네 장 이야기를 차례대로 놓고, 멈춤 동작과 다음 장면 몸짓을 해요.',
      challenge: '낚시 이야기 네 장을 놓고, 짝과 같은 사람으로 서로 다른 끝을 지어 견주어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 이야기를 한 장면만 말한다 → "그다음에는?"을 두 번 물어 세 장면으로 늘린다. ② 멈춤 동작 중에 웃거나 움직인다 → 교사가 10초를 소리 내어 세며 멈춤을 연습한다. ③ 다른 모둠 이야기를 틀렸다고 한다 → 같은 사람으로 이야기가 둘 나온 것을 칭찬하며 견주게 한다. 작품은 쇠라 \'그랑드자트섬의 일요일 오후\'(1884~1886, 저작권 만료)를 공개 자료로 보여 준다. 이야기는 모두 학생이 상상한 것이며 작품에 정해진 이야기가 아니다.',
  }));

  lessons.push(L(43, {
    title: '수련 연못 그림의 느낌을 색과 몸짓으로 나타내기',
    objective: '모네의 \'수련\'을 보고 든 느낌을 말하고, 그 느낌에 어울리는 색 조각과 몸짓으로 나타낼 수 있다.',
    illustration: ART('a calm paper pond in soft blues and greens with floating water lilies in pink and white, gentle reflections of clouds on the water', '연못은 어떤 느낌?', [
      { motif: 'flower', x: 160, y: 210 }, { motif: 'flower', x: 320, y: 220 }, { motif: 'leaf', x: 240, y: 230 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '모네의 \'수련\' 연작 가운데 하나를 띄우고 1분 동안 조용히 보게 한다. "이 연못 앞에 서 있으면 내 마음은 어떨 것 같아요? 어떤 색이 많이 보여요?" 학생들이 말한 색과 느낌을 칠판 두 칸에 나누어 적는다. "지난 시간 파도 그림과 느낌이 같나요, 다른가요?" 시연 단추로 파랑 조각이 붙는 모습을 보여 준다.',
        student: '연못 그림에서 가장 많이 보이는 색과 그때 느낌을 하나씩 떠올려요.',
        demo: { tool: 'collage', options: { shapes: ['circle', 'leaf'], colors: ['파랑', '초록'] }, sequence: [{ has: [{ color: '파랑', min: 2 }, { color: '초록', min: 2 }] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 연못의 느낌을 색 조각으로', minutes: 14, tool: 'collage',
            teacher: '"차분하고 조용한 느낌에는 어떤 색이 어울릴까요?" 파랑·초록처럼 차가운 색을 판에 붙여 보이고, 빨강·주황을 가득 붙였을 때와 견주게 한다. 수련 꽃을 붙일 때는 잎 위에 꽃을 겹쳐 물 위에 떠 있는 모습을 만든다.',
            task: '연못의 느낌에 어울리는 색 조각을 붙이고 수련 꽃을 겹쳐 꾸며요.',
            levels: COL(['circle', 'leaf', 'heart', 'semi'], ['파랑', '초록', '보라', '분홍', '하양'], ['circle', 'leaf', 'heart', 'semi', 'square', 'star'], ['파랑', '초록', '보라', '분홍', '하양', '빨강', '주황']),
            items: [
              { prompt: '조용한 연못 느낌을 파랑과 초록 조각으로 나타내요. 파랑을 적어도 2개, 초록을 적어도 2개 붙여 보세요.', toolOptions: { bg: '하양' },
                target: { has: [{ color: '파랑', min: 2 }, { color: '초록', min: 2 }] }, difficulty: 0.1,
                levels: { challenge: { prompt: '조용한 연못 느낌을 나타내요. 파랑과 초록을 적어도 3개씩 붙이고, 빨강·주황은 쓰지 않아요.', target: { has: [{ color: '파랑', min: 3 }, { color: '초록', min: 3 }, { color: '빨강', n: 0 }, { color: '주황', n: 0 }] } } } },
              { prompt: '물 위에 뜬 수련처럼 초록 나뭇잎 위에 분홍 하트 꽃을 겹쳐 붙여 보세요.', state: { pieces: [{ shape: 'circle', color: '파랑', size: 'l', x: 160, y: 200, r: 0 }, { shape: 'circle', color: '파랑', size: 'l', x: 400, y: 220, r: 0 }] },
                target: { has: [{ shape: 'leaf', color: '초록', min: 1 }, { shape: 'heart', color: '분홍', min: 1 }], overlap: 1 }, difficulty: 0.2,
                levels: { challenge: { prompt: '수련 두 송이를 만들어요. 초록 나뭇잎 2장 위에 분홍 하트를 하나씩 겹쳐 붙여 보세요.', target: { has: [{ shape: 'leaf', color: '초록', min: 2 }, { shape: 'heart', color: '분홍', min: 2 }], overlap: 2 } } },
                conclude: '조각을 겹치면 꽃이 잎 위에 떠 있는 것처럼 보여요.' },
              { prompt: '나만의 조용한 연못을 완성하고 점검해요.', target: { selfCheck: ['차분한 느낌의 색을 많이 썼어요', '수련 꽃을 잎 위에 겹쳐 붙였어요', '내 연못의 느낌을 낱말로 짝에게 말했어요'], minPieces: 5 }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 연못의 느낌을 몸짓으로', minutes: 13, tool: 'emotion',
            teacher: '교사가 "바람이 살랑" 하면 수련이 피듯 두 손을 천천히 펴고, "물고기가 톡" 하면 손끝을 살짝 튕기게 한다(4분). "천천히 움직일 때와 빨리 움직일 때 느낌이 어떻게 달라요?" 몸짓 빠르기와 느낌을 이어 말하게 한다.',
            task: '연못 몸짓을 해 보고, 몸짓과 친구의 말에 어울리는 느낌을 찾아요.',
            levels: CARD_LV,
            items: [
              { prompt: '선생님 신호에 맞추어 수련이 피는 몸짓을 천천히 하고, 짝에게 그때 느낌 낱말을 말했으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '몸짓에 어울리는 느낌 카드를 놓아 보세요.', toolOptions: { cards: ['편안함', '신남'], slots: [{ id: 's1', label: '수련처럼 아주 천천히 두 손을 펴요' }, { id: 's2', label: '폴짝폴짝 빠르게 뛰어요' }] },
                target: { match: { s1: '편안함', s2: '신남' } }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['편안함', '신남', '화남'] } } } },
              { prompt: '그림을 본 친구들의 말이에요. 어울리는 느낌 카드를 놓아 보세요.', toolOptions: { cards: ['편안함', '놀람', '슬픔'], slots: [{ id: 's1', label: '"파랑과 초록이 가득해서 마음이 차분해져"' }, { id: 's2', label: '"빨간 꽃이 확 눈에 띄어 깜짝 놀랐어"' }] },
                target: { match: { s1: '편안함', s2: '놀람' } }, difficulty: 0.15 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"파도 그림과 수련 그림은 느낌이 어떻게 달랐나요? 색은요?" 두세 명이 말한다. 짝의 연못 작품을 보고 느낌 낱말 하나를 말해 준다. 다음 시간에는 마티스처럼 색종이를 오려 붙여 하늘을 나는 이야기를 만든다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { cards: ['슬픔', '신남', '무서움'], slots: [{ id: 's1', label: '어깨를 축 늘어뜨리고 천천히 걸어요' }, { id: 's2', label: '두 팔을 크게 벌리고 빙글빙글 돌며 웃어요' }] }, prompt: '몸짓에 어울리는 느낌 카드를 놓아 보세요.', target: { match: { s1: '슬픔', s2: '신남' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '조용하고 차분한 느낌을 나타내기에 어울리는 색은?', options: ['파랑과 초록', '빨강과 주황', '까만색만'], answer: 0, difficulty: 0.15, explain: '파랑·초록 같은 차가운 색은 차분한 느낌을 줄 때가 많아요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '수련 연못의 느낌',
      items: [
        { type: 'short', prompt: '수련 그림을 보고 든 느낌을 쓰세요.' },
        { type: 'check', prompt: '내 연못 작품에 쓴 색에 모두 ✓ 하세요.', options: ['파랑', '초록', '보라', '분홍', '하양'] },
        { type: 'table', prompt: '두 그림의 느낌을 견주어 쓰세요.', columns: ['그림', '많이 보인 색', '느낌'], cells: [['높은 파도', '', ''], ['수련', '', '']] },
        { type: 'draw', prompt: '내가 느낀 연못의 모습을 색칠해 그려 보세요.' },
      ],
      easy: {
        note: '천천히, 조용히, 차분히 — 어떤 색이 어울릴까요?',
        items: [
          { type: 'choice', prompt: '천천히 손을 펴는 몸짓의 느낌에 ○ 하세요.', options: ['편안함', '화남'], answer: '편안함' },
          { type: 'short', prompt: '수련 그림에서 많이 보인 색을 쓰세요.' },
          { type: 'draw', prompt: '연못에 뜬 꽃을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 색종이 고르개가 차분한 색 다섯 가지로 줄어요.',
      base: '차분한 색으로 연못을 꾸미고 수련 꽃을 겹쳐 붙인 뒤, 몸짓과 느낌을 이어요.',
      challenge: '빨강·주황 없이 조각을 더 붙이고 수련 두 송이를 겹쳐 만들어요. 함정 느낌 카드가 섞여요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 좋아하는 색만 골라 느낌과 상관없이 붙인다 → "이 색을 보면 마음이 어때?" 하고 묻는다. ② 겹치기를 못 한다 → 잎을 먼저 붙이고 꽃을 끌어 잎 위에 놓게 한다. ③ 차가운 색은 슬픈 색이라고만 여긴다 → 같은 파랑도 시원하고 편안할 수 있다고 말해 준다. 색과 느낌의 짝은 정답이 아니라 흔히 그렇게 느낀다는 것임을 덧붙인다. 작품은 모네 \'수련\' 연작(1890년대~1920년대, 저작권 만료)을 공개 자료로 보여 준다.',
  }));

  lessons.push(L(44, {
    title: '마티스처럼 오려 붙여 하늘을 나는 이야기 장면 만들기',
    objective: '마티스의 \'이카로스\'를 보고 그림 속에서 있었을 일을 상상해 말하고, 색종이 조각을 오려 붙이듯 내가 상상한 하늘 장면을 만들 수 있다.',
    illustration: ART('a black paper-cut figure with a small red heart floating in a deep blue sky full of yellow star bursts, scissors and colored paper scraps nearby', '하늘을 날아요', [
      { motif: 'star', x: 120, y: 80, s: 0.6 }, { motif: 'star', x: 380, y: 90, s: 0.6 }, { motif: 'star', x: 260, y: 60, s: 0.4 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '마티스의 \'이카로스\'(1947, 책 \'재즈\')를 띄운다. "이 그림은 붓으로 그리지 않았어요. 물감을 칠한 종이를 가위로 오려 붙였어요. 무엇이 보이나요?" 까만 사람, 빨간 점, 노란 별 모양, 파란 바탕을 찾게 한다. "이 사람은 날고 있을까요, 떨어지고 있을까요, 춤추고 있을까요?" 여러 대답을 칠판에 적는다.',
        student: '그림 속 사람이 무엇을 하는 것 같은지 한 가지 떠올려요.',
        demo: { tool: 'collage', options: { shapes: ['star', 'heart'], colors: ['노랑', '빨강'], bg: '파랑' }, sequence: [{ has: [{ shape: 'star', color: '노랑', min: 2 }, { shape: 'heart', color: '빨강', n: 1 }] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 이카로스 이야기와 내가 상상한 이야기', minutes: 12, tool: 'story',
            teacher: '아주 오래된 그리스 옛이야기를 짧게 들려준다. "이카로스는 깃털을 밀랍으로 붙여 날개를 만들었어요. 하늘을 날다가 해 가까이 너무 높이 올라가 밀랍이 녹았고, 바다로 떨어졌대요." 이어 "그런데 옛이야기를 몰라도 이 그림을 보고 다른 이야기를 떠올릴 수 있을까요?" 하고 묻고, 그림만 보고 떠올린 말을 고르게 한다.',
            task: '옛이야기를 차례대로 놓고, 그림만 보고 떠올릴 수 있는 이야기를 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '선생님이 들려준 이카로스 이야기를 차례대로 놓아 보세요.', toolOptions: { slots: 4, cards: ['깃털과 밀랍으로 날개를 만들었어요', '날개를 달고 하늘로 날아올랐어요', '해 가까이 너무 높이 날았어요', '밀랍이 녹아 바다로 떨어졌어요'] },
                target: { order: ['깃털과 밀랍으로 날개를 만들었어요', '날개를 달고 하늘로 날아올랐어요', '해 가까이 너무 높이 날았어요', '밀랍이 녹아 바다로 떨어졌어요'] }, difficulty: 0.2,
                levels: { easy: { prompt: '선생님이 들려준 이카로스 이야기를 세 장으로 차례대로 놓아 보세요.', toolOptions: { slots: 3, cards: ['깃털과 밀랍으로 날개를 만들었어요', '해 가까이 너무 높이 날았어요', '밀랍이 녹아 바다로 떨어졌어요'] }, target: { order: ['깃털과 밀랍으로 날개를 만들었어요', '해 가까이 너무 높이 날았어요', '밀랍이 녹아 바다로 떨어졌어요'] } } } },
              { prompt: '옛이야기를 몰라도 그림만 보고 떠올릴 수 있는 말만 골라 보세요.', toolOptions: { mode: 'pick', basket: '그림을 보고 떠올린 말', cards: ['별 사이를 춤추며 날아요', '하늘에서 떨어지고 있어요', '빨간 심장이 콩닥콩닥 뛰어요', '옛이야기 말고는 생각하면 안 돼요'] },
                target: { pick: ['별 사이를 춤추며 날아요', '하늘에서 떨어지고 있어요', '빨간 심장이 콩닥콩닥 뛰어요'] }, difficulty: 0.15,
                hints: ['그림을 보고 떠올린 말인지, 생각을 막는 말인지 견주어 봐요.', '그림 하나에 이야기가 하나만 있어야 할까요? 그런 말 카드를 다시 보세요.', '춤추며 날기, 떨어지기, 콩닥콩닥 심장은 모두 그림을 보고 떠올릴 수 있어요. 생각을 막는 말만 빼요.'],
                conclude: '옛이야기가 있는 그림도 보는 사람마다 다른 이야기를 떠올릴 수 있어요.' },
              { prompt: '짝에게 "이 사람은 ~하고 있는 것 같아. 왜냐하면 ~"으로 내가 상상한 이야기를 말했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 오려 붙여 하늘 장면 만들기', minutes: 15, tool: 'collage',
            teacher: '판과 함께 실제 색종이와 안전 가위도 쓴다. 먼저 판에서 장면을 만들어 본 뒤 남는 시간에 색종이로 별 모양을 오려 활동지에 붙인다. "마티스처럼 가위로 그리듯 오려요. 반듯하지 않아도 괜찮아요." 가위는 날을 닫아 손잡이 쪽으로 건넨다.',
            task: '파란 하늘판에 조각을 붙여 내가 상상한 하늘을 나는 장면을 만들어요.',
            levels: COL(['star', 'heart', 'circle', 'rect', 'leaf'], ['노랑', '빨강', '검정', '하양'], ['star', 'heart', 'circle', 'rect', 'leaf', 'triangle', 'semi'], ['노랑', '빨강', '검정', '하양', '주황', '초록', '분홍']),
            items: [
              { prompt: '마티스처럼 파란 하늘에 노랑 별을 적어도 4개, 빨강 하트를 하나 붙여 보세요.', toolOptions: { bg: '파랑' },
                target: { has: [{ shape: 'star', color: '노랑', min: 4 }, { shape: 'heart', color: '빨강', n: 1 }] }, difficulty: 0.1,
                levels: { challenge: { prompt: '작은 노랑 별과 큰 노랑 별을 적어도 2개씩 붙이고, 빨강 하트를 하나 붙여 보세요.', target: { has: [{ shape: 'star', color: '노랑', size: 's', min: 2 }, { shape: 'star', color: '노랑', size: 'l', min: 2 }, { shape: 'heart', color: '빨강', n: 1 }] } } } },
              { prompt: '하늘을 나는 사람의 몸을 까만 조각 적어도 3개로 만들고, 빨강 하트를 몸 위에 겹쳐 붙여 보세요.', toolOptions: { bg: '파랑' },
                target: { has: [{ color: '검정', min: 3 }, { shape: 'heart', color: '빨강', n: 1 }], overlap: 1 }, difficulty: 0.2,
                conclude: '조각을 겹쳐 붙이면 하트가 몸 안에 있는 것처럼 보여요.' },
              { prompt: '내가 상상한 하늘 장면을 완성하고 점검해요.', target: { selfCheck: ['내가 상상한 이야기가 장면에 담겼어요', '짝에게 장면의 이야기를 한 문장으로 말했어요', '작품에 제목을 붙였어요'], minPieces: 5 }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"같은 그림을 보고 어떤 이야기들이 나왔나요?" 서로 다른 이야기 서너 가지를 칠판에 모은다. 가위와 색종이 조각을 정리한다. 다음 시간부터는 친구와 느낌을 나누고, 나와 다른 느낌을 받아들이는 연습을 한다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { slots: ['처음', '가운데', '끝'], cards: ['아기 새가 둥지 끝에 섰어요', '날개를 퍼덕이며 뛰어내렸어요', '하늘을 빙빙 날았어요'] }, prompt: '새 그림을 보고 서아가 상상한 이야기예요. 차례대로 놓아 보세요.', target: { order: ['아기 새가 둥지 끝에 섰어요', '날개를 퍼덕이며 뛰어내렸어요', '하늘을 빙빙 날았어요'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '마티스는 이카로스를 어떻게 만들었나요?', options: ['색칠한 종이를 오려 붙였어요', '돌을 깎았어요', '사진을 찍었어요'], answer: 0, difficulty: 0.1, explain: '마티스는 물감을 칠한 종이를 가위로 오려 붙여 작품을 만들었어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '하늘을 나는 이야기',
      items: [
        { type: 'short', prompt: '이카로스 그림을 보고 내가 상상한 이야기를 한 문장으로 쓰세요.' },
        { type: 'choice', prompt: '그림을 보고 상상한 이야기에 대한 생각에 ○ 하세요.', options: ['사람마다 달라도 돼요', '옛이야기와 같아야 해요'], answer: '사람마다 달라도 돼요' },
        { type: 'check', prompt: '내 장면에 넣은 것에 모두 ✓ 하세요.', options: ['별', '하트', '하늘을 나는 사람', '구름', '해'] },
        { type: 'draw', prompt: '색종이를 오려 붙이거나 그려서 내가 상상한 하늘 장면을 만드세요.' },
      ],
      easy: {
        note: '그림 속 사람이 무엇을 하는지 떠올려요.',
        items: [
          { type: 'choice', prompt: '마티스 그림에서 보이는 것에 ○ 하세요.', options: ['노란 별 모양', '자동차'], answer: '노란 별 모양' },
          { type: 'short', prompt: '그림 속 사람이 무엇을 하는 것 같은지 쓰세요.' },
          { type: 'draw', prompt: '하늘을 나는 나를 그려 보세요.' },
        ],
      },
    },
    safety: ['안전 가위만 쓰고, 날을 닫아 손잡이 쪽으로 건네요.', '가위를 든 채 자리에서 일어나 다니지 않아요.'],
    differentiation: {
      easy: '이카로스 이야기가 세 장으로 줄고, 색종이 고르개가 네 가지 색만 보여요.',
      base: '네 장 이야기를 차례대로 놓고, 별과 하트로 하늘을 나는 장면을 만들어요.',
      challenge: '크기가 다른 별을 섞어 붙이고, 내 장면의 이야기를 처음·끝 두 문장으로 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 옛이야기를 듣고 나면 그 이야기만 맞다고 여긴다 → "그림만 본 사람은 어떤 이야기를 떠올릴까?" 하고 다시 묻는다. ② 가위질이 서툴러 오리기를 포기한다 → 반듯하지 않은 모양도 마티스 작품처럼 멋지다고 말해 준다. ③ 겹치기 조건을 못 맞춘다 → 하트를 끌어 까만 조각 위에 놓게 한다. 이카로스는 그리스 옛이야기이고, 작품은 마티스 \'이카로스\'(1947, 마티스 1954년 사망 — 저작권 만료)를 미술관 공개 자료로 화면에만 보여 준다.',
  }));

  // ───────────────────────── 45~48차시: 친구의 다른 느낌 받아들이고 다시 보기·단원 정리 ─────────────────────────

  lessons.push(L(45, {
    title: '해바라기 그림을 보고 친구와 다른 느낌과 그 까닭 찾기',
    objective: '고흐의 \'해바라기\'를 보고 친구가 말한 느낌에서 나와 다른 점을 찾고, 친구가 그렇게 느낀 까닭을 그림에서 찾아 말할 수 있다.',
    illustration: ART('a vase full of paper sunflowers in warm yellows, some blooming and some drooping, two children beside it with different thought bubbles, one sunny and one with a falling leaf', '느낌이 달라요', [
      { motif: 'flower', x: 200, y: 200 }, { motif: 'flower', x: 280, y: 190 }, { motif: 'leaf', x: 360, y: 220 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '고흐의 \'해바라기\'(1888)를 띄운다. "이 그림을 보면 어떤 느낌이 들어요?" 서로 다른 느낌이 나오도록 다섯 명쯤 듣고 칠판에 적는다(따뜻해요, 쓸쓸해요…). "같은 그림인데 왜 느낌이 다를까요? 누가 틀린 걸까요?" 시연 단추로 \'따뜻해요\' 카드가 \'나와 같은 느낌\'에 놓이는 모습을 보여 준다.',
        student: '해바라기 그림을 보고 든 내 느낌을 한 낱말로 정해요.',
        demo: { tool: 'mindmap', options: { topic: '내 느낌: 따뜻해', slots: ['나와 같은 느낌', '나와 다른 느낌'], cards: ['따뜻해요'], shuffle: false }, sequence: [{ sort: { '나와 같은 느낌': ['따뜻해요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 나와 다른 느낌과 그 까닭 찾기', minutes: 13, tool: 'mindmap',
            teacher: '"친구의 느낌이 나와 다르면, 친구는 그림에서 무엇을 보았을까요?" 그림을 띄워 두고 고개 숙인 시든 꽃, 꽃병 가득한 꽃, 노랑·주황 색을 함께 짚는다. 다른 느낌에도 그림 속 까닭이 있다는 것을 강조한다.',
            task: '친구들의 느낌을 나와 같은 것과 다른 것으로 나누고, 그렇게 느낀 까닭을 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '내 느낌은 "노랑이 가득해서 따뜻하고 신나"예요. 친구들의 말을 나누어 보세요.', toolOptions: { topic: '내 느낌: 따뜻하고 신나', slots: ['나와 같은 느낌', '나와 다른 느낌'], cards: ['따뜻해요', '신나요', '시든 꽃이 있어 쓸쓸해요', '꽃이 너무 많아 북적북적해요'] },
                target: { sort: { '나와 같은 느낌': ['따뜻해요', '신나요'], '나와 다른 느낌': ['시든 꽃이 있어 쓸쓸해요', '꽃이 너무 많아 북적북적해요'] } }, difficulty: 0.15 },
              { prompt: '친구들은 그림에서 무엇을 보고 그렇게 느꼈을까요? 느낌과 까닭을 이어 보세요.', toolOptions: { mode: 'match', topic: '그렇게 느낀 까닭', slots: [{ id: 's1', label: '"쓸쓸해"' }, { id: 's2', label: '"따뜻해"' }, { id: 's3', label: '"북적북적해"' }], cards: ['고개 숙인 시든 꽃', '노랑과 주황이 가득한 색', '꽃병 가득 꽂힌 많은 꽃'] },
                target: { match: { s1: '고개 숙인 시든 꽃', s2: '노랑과 주황이 가득한 색', s3: '꽃병 가득 꽂힌 많은 꽃' } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['고개 숙인 시든 꽃', '노랑과 주황이 가득한 색', '꽃병 가득 꽂힌 많은 꽃', '하늘을 나는 새'] } } },
                hints: ['느낌 낱말과 어울리는 그림 속 모습을 찾아봐요.', '쓸쓸함은 기운 없는 모습, 북적북적은 많은 것과 어울려요. 놓은 카드를 다시 보세요.', '쓸쓸해 — 시든 꽃, 따뜻해 — 노랑·주황 색, 북적북적해 — 많은 꽃을 이어요.'],
                conclude: '나와 다른 느낌에도 그림 속에 까닭이 있어요.' },
              { prompt: '짝에게 해바라기 그림의 느낌과 까닭을 묻고, "너는 ~를 보고 ~하게 느꼈구나"로 나와 다른 점을 말했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 다른 느낌을 받아들이는 말', minutes: 14, tool: 'emotion',
            teacher: '모둠 네 명이 돌아가며 해바라기의 느낌을 한 낱말씩 말하고, 다음 사람은 앞사람의 느낌을 "○○는 ~하게 느꼈구나"로 받아 준 뒤 자기 느낌을 말한다(5분). "친구 느낌을 따라 내 느낌을 바꿀 필요는 없어요. 받아들이는 것과 따라 하는 것은 달라요."',
            task: '모둠에서 느낌을 받아 주는 말을 해 보고, 다른 느낌을 들었을 때 알맞은 말을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '모둠 친구들과 돌아가며 해바라기의 느낌을 말하고, 앞 친구의 느낌을 "~하게 느꼈구나"로 받아 주었으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '나는 "신나"라고 느꼈는데 하준이는 "쓸쓸해"라고 했어요. 어떻게 말할까요?', toolOptions: { mode: 'branch', situation: '해바라기 그림을 보고 나는 "신나", 하준이는 "쓸쓸해"라고 느꼈어요.', choices: [
                { id: 'accept', text: '"너는 시든 꽃을 보았구나. 나도 다시 볼게" 하고 말해요', result: '하준이가 시든 꽃을 짚어 주어 그림을 새롭게 보았어요.', mood: '기쁨' },
                { id: 'laugh', text: '"해바라기가 왜 쓸쓸해? 이상해" 하고 말해요', result: '하준이가 다음부터 느낌을 말하지 않았어요.', mood: '속상함', why: '나와 다른 느낌을 이상하다고 하면 친구 마음이 어떨까요?' },
                { id: 'copy', text: '내 느낌은 말하지 않고 "나도 쓸쓸해" 하고 따라 해요', result: '내 느낌은 아무도 모르게 되었어요.', mood: '걱정', why: '친구 느낌을 받아들여도 내 느낌은 그대로 말할 수 있어요.' }] }, target: { choice: 'accept' }, difficulty: 0.15 },
              { prompt: '그때의 마음에 어울리는 카드를 놓아 보세요.', toolOptions: { cards: ['고마움', '속상함', '무서움'], slots: [{ id: 's1', label: '친구가 내 느낌을 듣고 "그럴 수 있구나" 했을 때' }, { id: 's2', label: '친구가 내 느낌을 듣고 비웃었을 때' }] },
                target: { match: { s1: '고마움', s2: '속상함' } }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 친구에게서 들은 느낌 가운데 나와 가장 달랐던 것은 무엇인가요? 친구는 그림에서 무엇을 보았대요?" 두세 명이 말한다. 다음 시간에는 처음 본 그림을 다시 보며 새로 든 생각을 찾는다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '내 느낌: 조용하고 쓸쓸해', slots: ['나와 같은 느낌', '나와 다른 느낌'], cards: ['조용해요', '쓸쓸해요', '포근해요', '신나요'] }, prompt: '눈 덮인 마을 그림을 보고 내 느낌은 "조용하고 쓸쓸해"예요. 친구들의 말을 나누어 보세요.', target: { sort: { '나와 같은 느낌': ['조용해요', '쓸쓸해요'], '나와 다른 느낌': ['포근해요', '신나요'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '친구가 나와 다른 느낌을 말하면?', options: ['"너는 그렇게 느꼈구나" 하고 받아들여요', '"틀렸어" 하고 말해요', '내 느낌을 바로 친구 것으로 바꿔요'], answer: 0, difficulty: 0.1, explain: '다른 느낌을 받아들이면서 내 느낌도 그대로 말할 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '친구와 다른 느낌',
      items: [
        { type: 'table', prompt: '해바라기 그림의 느낌을 쓰세요.', columns: ['', '느낌', '그림에서 본 까닭'], cells: [['나', '', ''], ['짝', '', '']] },
        { type: 'short', prompt: '짝의 느낌에서 나와 다른 점을 쓰세요.' },
        { type: 'choice', prompt: '다른 느낌을 들었을 때 알맞은 말에 ○ 하세요.', options: ['"너는 그렇게 느꼈구나"', '"그건 이상해"'], answer: '"너는 그렇게 느꼈구나"' },
        { type: 'draw', prompt: '해바라기 그림에서 내 느낌을 만든 부분을 그려 보세요.' },
      ],
      easy: {
        note: '친구는 그림에서 무엇을 보았을까요?',
        items: [
          { type: 'choice', prompt: '"쓸쓸해"라고 느낀 친구가 본 것에 ○ 하세요.', options: ['시든 꽃', '노란 색'], answer: '시든 꽃' },
          { type: 'short', prompt: '내 느낌 낱말을 쓰세요.' },
          { type: 'draw', prompt: '해바라기를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 고른 말의 결과가 바로 보여요.',
      base: '나와 다른 느낌을 나누고 그 까닭을 그림에서 찾아 이어요.',
      challenge: '짝의 느낌과 까닭을 듣고, 그 까닭을 그림에서 직접 짚어 반 친구들에게 소개해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 나와 다른 느낌을 틀렸다고 말한다 → "친구는 그림에서 무엇을 보았을까?" 하고 까닭을 찾게 한다. ② 친구 느낌을 듣고 내 느낌을 바로 바꾼다 → 받아들이기와 따라 하기는 다르다고 말해 준다. ③ 느낌만 말하고 까닭을 말하지 못한다 → "그림 어디를 보고 그렇게 느꼈어?" 하고 손가락으로 짚게 한다. 작품은 고흐 \'해바라기\'(1888, 저작권 만료)를 공개 자료로 보여 준다.',
  }));

  lessons.push(L(46, {
    title: '별이 빛나는 밤을 다시 보고 새로 든 생각 말하기',
    objective: '37차시에 본 \'별이 빛나는 밤\'을 다시 보고 처음에 못 본 것과 새로 든 생각을 찾아 말하며, 다시 보면 느낌이 바뀌어도 된다는 것을 알 수 있다.',
    illustration: ART('a child looking again at a swirling starry night painting through a paper magnifying glass, discovering tiny lit windows of a sleepy village and a church spire', '다시 보니 보여요', [
      { motif: 'moon', x: 380, y: 70, s: 0.6 }, { motif: 'house', x: 200, y: 210 }, { motif: 'star', x: 120, y: 70, s: 0.5 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '\'별이 빛나는 밤\'을 10초만 보여 주고 가린 뒤 "37차시에 처음 이 그림을 보았을 때 무엇이 먼저 보였었나요?" 하고 묻는다. "오늘은 아주 천천히 다시 볼 거예요. 처음과 다른 것이 보이면 생각이 바뀌어도 괜찮아요." 시연 단추로 \'달\' 카드가 \'처음 볼 때\' 가지에 놓이는 모습을 보여 준다.',
        student: '37차시에 처음 보았을 때 먼저 본 곳을 떠올려요.',
        demo: { tool: 'mindmap', options: { topic: '민지의 다시 보기', slots: ['처음 볼 때 본 것', '다시 볼 때 새로 본 것'], cards: ['달'], shuffle: false }, sequence: [{ sort: { '처음 볼 때 본 것': ['달'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 처음 본 것과 다시 보고 찾은 것', minutes: 13, tool: 'mindmap',
            teacher: '그림을 넷으로 나누어 한 부분씩 크게 확대해 보여 준다(하늘, 나무, 마을, 산). "처음에 이것도 보았나요?" 하고 묻는다. 민지의 말을 소리 내어 읽고, \'처음엔\'과 \'다시 보니\' 뒤에 오는 낱말에 밑줄을 치게 한다.',
            task: '처음 본 것과 다시 보고 새로 찾은 것을 나누고, 마음이 바뀐 차례를 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '민지: "처음엔 달과 까만 나무만 보였어. 다시 보니 작은 마을 불빛과 뾰족한 교회 지붕이 보였어." 나누어 보세요.', toolOptions: { topic: '민지의 다시 보기', slots: ['처음 볼 때 본 것', '다시 볼 때 새로 본 것'], cards: ['달', '까만 나무', '작은 마을 불빛', '뾰족한 교회 지붕'] },
                target: { sort: { '처음 볼 때 본 것': ['달', '까만 나무'], '다시 볼 때 새로 본 것': ['작은 마을 불빛', '뾰족한 교회 지붕'] } }, difficulty: 0.15,
                hints: ['민지의 말에서 \'처음엔\' 뒤와 \'다시 보니\' 뒤를 나누어 읽어 봐요.', '\'다시 보니\' 뒤에 나온 것만 새로 본 것이에요. 놓은 카드를 견주어 보세요.', '달과 까만 나무는 처음 본 것, 마을 불빛과 교회 지붕은 다시 보고 찾은 것이에요.'] },
              { prompt: '민지: "처음엔 까만 나무가 무서웠어. 다시 보니 빙글빙글 하늘이 신났어. 마지막엔 마을 불빛을 보니 편안해졌어." 마음이 바뀐 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['무서움', '신남', '편안함'], slots: ['처음', '다시 볼 때', '마지막'] },
                target: { order: ['무서움', '신남', '편안함'] }, difficulty: 0.2 },
              { prompt: '그림을 다시 볼 때 맞는 말만 골라 보세요.', toolOptions: { mode: 'pick', basket: '맞는 말', cards: ['다시 보면 느낌이 바뀌어도 괜찮아요', '다시 보면 처음에 못 본 것을 찾을 수 있어요', '한 번 말한 느낌은 바꾸면 안 돼요'] },
                target: { pick: ['다시 보면 느낌이 바뀌어도 괜찮아요', '다시 보면 처음에 못 본 것을 찾을 수 있어요'] }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['다시 보면 느낌이 바뀌어도 괜찮아요', '다시 보면 처음에 못 본 것을 찾을 수 있어요', '한 번 말한 느낌은 바꾸면 안 돼요', '다시 볼 때는 처음 본 곳만 봐요'] } } },
                predict: { q: '한 번 말한 느낌을 바꿔도 될까요?', options: ['돼요', '안 돼요'], answer: 0 },
                conclude: '그림을 다시 보면 새로운 것을 찾고, 느낌도 바뀔 수 있어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 짝과 다시 보기 놀이', minutes: 14, tool: 'emotion',
            teacher: '짝끼리 그림을 10초 보고 가린 뒤 기억나는 것을 번갈아 말한다. 다시 1분 동안 보며 새로 찾은 것을 두 가지씩 덧붙인다(6분). 처음 느낌과 달라진 학생에게 "다시 보니 무엇 때문에 바뀌었어요?" 하고 묻는다.',
            task: '짝과 다시 보기 놀이를 하고, 느낌이 바뀌었을 때 알맞은 말을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '짝과 그림을 10초 보고 기억나는 것을 말한 뒤, 다시 보며 새로 찾은 것을 두 가지씩 말했으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '처음에 "무서워"라고 말했는데 다시 보니 편안해졌어요. 어떻게 말할까요?', toolOptions: { mode: 'branch', situation: '처음에는 까만 나무를 보고 "무서워"라고 말했어요. 다시 보니 마을 불빛이 보여 마음이 편안해졌어요.', choices: [
                { id: 'change', text: '"다시 보니 생각이 바뀌었어. 이제는 편안해" 하고 말해요', result: '친구들도 마을 불빛을 찾아보며 그림을 다시 보았어요.', mood: '편안함' },
                { id: 'stick', text: '처음에 무섭다고 했으니 계속 무섭다고 말해요', result: '새로 찾은 마을 불빛 이야기를 아무도 듣지 못했어요.', mood: '걱정', why: '다시 보고 느낌이 바뀌면 바뀐 느낌을 말해도 돼요.' }] }, target: { choice: 'change' }, difficulty: 0.1 },
              { prompt: '그림을 다시 보고 새로 든 생각을 활동지에 쓰고 짝에게 읽어 주었으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"다시 보니 무엇이 새로 보였나요? 느낌이 바뀐 사람이 있나요?" 두세 명이 말하게 하고, 바뀐 느낌을 말한 학생을 칭찬한다. 다음 시간에는 우리가 만든 색종이 작품으로 작은 미술관을 연다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '준호의 다시 보기', slots: ['처음 볼 때 본 것', '다시 볼 때 새로 본 것'], cards: ['큰 파도', '멀리 작은 산', '배 안의 사람들'] }, prompt: '준호: "처음엔 큰 파도만 보였어. 다시 보니 멀리 작은 산과 배 안의 사람들이 보였어." 나누어 보세요.', target: { sort: { '처음 볼 때 본 것': ['큰 파도'], '다시 볼 때 새로 본 것': ['멀리 작은 산', '배 안의 사람들'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '그림을 다시 보고 느낌이 바뀌었어요. 어떻게 할까요?', options: ['바뀐 느낌을 말해도 돼요', '처음 느낌만 말해야 해요', '아무 말도 하지 않아요'], answer: 0, difficulty: 0.1, explain: '다시 보며 새로 찾은 것이 있으면 생각과 느낌이 바뀔 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '다시 보니 보여요',
      items: [
        { type: 'table', prompt: '별이 빛나는 밤을 보고 쓰세요.', columns: ['', '본 것', '느낌'], cells: [['처음 볼 때', '', ''], ['다시 볼 때', '', '']] },
        { type: 'short', prompt: '다시 보고 새로 든 생각을 쓰세요.' },
        { type: 'choice', prompt: '다시 보고 느낌이 바뀌면?', options: ['바뀐 느낌을 말해도 돼요', '처음 느낌만 말해야 해요'], answer: '바뀐 느낌을 말해도 돼요' },
        { type: 'draw', prompt: '다시 보고 새로 찾은 부분을 크게 그려 보세요.' },
      ],
      easy: {
        note: '천천히 다시 보면 새로운 것이 보여요.',
        items: [
          { type: 'short', prompt: '처음 볼 때 본 것 하나를 쓰세요.' },
          { type: 'short', prompt: '다시 보고 새로 찾은 것 하나를 쓰세요.' },
          { type: 'draw', prompt: '새로 찾은 것을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 틀린 카드는 바로 돌아와요.',
      base: '처음 본 것과 새로 본 것을 나누고, 마음이 바뀐 차례를 놓아요.',
      challenge: '새로 찾은 것을 적어도 세 가지 말하고, 느낌이 바뀐 까닭을 그림에서 짚어 설명해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 다시 보아도 "똑같아요"라고 한다 → 그림을 넷으로 나누어 한 부분씩 크게 보여 준다. ② 처음 느낌을 바꾸면 틀린 것이라 여긴다 → 화가도 그림을 여러 번 고쳐 그린다고 말해 준다. ③ 새로 찾은 것을 말하지 못한다 → "가장 작은 것을 찾아볼까?" 하고 범위를 좁혀 준다.',
  }));

  lessons.push(L(47, {
    title: '우리 반 작은 미술관에서 친구 작품에 느낌 쪽지 붙이기',
    objective: '친구의 색종이 작품을 보고 찾은 것과 느낌을 쪽지에 써 붙이고, 내 작품에 나와 다른 느낌의 쪽지를 받았을 때 받아들이는 말을 할 수 있다.',
    illustration: ART('a classroom wall turned into a tiny paper art gallery with colorful cut-paper artworks, children sticking small paper notes beside each artwork', '우리 반 미술관', [
      { motif: 'star', x: 100, y: 80, s: 0.5 }, { motif: 'flower', x: 380, y: 220 }, { motif: 'house', x: 120, y: 210, s: 0.7 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '38·40·43·44차시에 만든 색종이 작품(또는 화면 작품을 인쇄한 것)을 교실 벽과 책상에 전시해 둔다. "오늘은 우리 반이 미술관이에요. 미술관에서는 작품을 어떻게 볼까요?" 천천히 걷기, 손대지 않기, 작은 목소리를 약속한다. 시연 단추로 쪽지에 쓸 말이 \'찾은 것\' 가지에 놓이는 모습을 보여 준다.',
        student: '내 작품 옆에 이름표를 놓고, 친구가 꼭 찾아 주었으면 하는 곳을 하나 정해요.',
        demo: { tool: 'mindmap', options: { topic: '감상 쪽지', slots: ['찾은 것', '느낌'], cards: ['하트가 몸 한가운데 있어요'], shuffle: false }, sequence: [{ sort: { '찾은 것': ['하트가 몸 한가운데 있어요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 감상 쪽지 쓰고 붙이기', minutes: 14, tool: 'mindmap',
            teacher: '"좋은 감상 쪽지에는 작품에서 찾은 것 하나와 내 느낌 하나가 들어가요." 칠판에 \'○○이 보여요. ~한 느낌이에요.\' 틀을 적는다. 반 전체가 동시에 둘러보며 친구 작품 세 개에 쪽지를 붙인다(8분). "이상해", "내 것이 더 멋져" 같은 말은 쪽지에 쓰지 않는다.',
            task: '감상 쪽지에 쓸 말을 고르고 나누어 본 뒤, 친구 작품에 쪽지를 붙여요.',
            levels: CARD_LV,
            items: [
              { prompt: '친구 작품에 붙일 쪽지로 알맞은 말만 골라 보세요.', toolOptions: { mode: 'pick', basket: '감상 쪽지', cards: ['빨간 하트가 먼저 눈에 띄어요', '별이 많아서 신나는 느낌이에요', '이상해, 다시 만들어', '내 것이 더 멋져'] },
                target: { pick: ['빨간 하트가 먼저 눈에 띄어요', '별이 많아서 신나는 느낌이에요'] }, difficulty: 0.1 },
              { prompt: '쪽지에 쓴 말을 작품에서 찾은 것과 느낌으로 나누어 보세요.', toolOptions: { topic: '감상 쪽지', slots: ['찾은 것', '느낌'], cards: ['파란 하늘에 별이 다섯 개 있어요', '조용하고 포근한 느낌이에요', '하트가 몸 한가운데 있어요', '보고 있으니 신나요'] },
                target: { sort: { '찾은 것': ['파란 하늘에 별이 다섯 개 있어요', '하트가 몸 한가운데 있어요'], '느낌': ['조용하고 포근한 느낌이에요', '보고 있으니 신나요'] } }, difficulty: 0.15,
                hints: ['작품에서 손가락으로 짚을 수 있는 것과 내 마음을 말한 것을 견주어 봐요.', '\'느낌이에요\', \'신나요\'처럼 마음을 말한 카드를 다시 보세요.', '별 다섯 개와 하트 자리는 찾은 것, 포근함과 신남은 느낌이에요.'] },
              { prompt: '미술관을 천천히 둘러보며 친구 작품 세 개에 \'찾은 것 + 느낌\' 쪽지를 붙였으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 받은 쪽지 읽고 받아들이기', minutes: 13, tool: 'emotion',
            teacher: '자기 자리로 돌아와 받은 쪽지를 읽는다. "내가 생각한 것과 다른 느낌의 쪽지가 있나요? 친구는 내 작품에서 무엇을 보았을까요?" 그 쪽지를 들고 내 작품을 다시 보게 한다. 쪽지를 하나도 받지 못한 학생이 없도록 교사가 미리 살핀다.',
            task: '받은 쪽지를 읽고, 나와 다른 느낌의 쪽지를 받아들이는 말과 마음을 찾아요.',
            levels: CARD_LV,
            items: [
              { prompt: '나는 신나게 만들었는데 서아가 "쓸쓸해 보여"라는 쪽지를 붙였어요. 어떻게 말할까요?', toolOptions: { mode: 'branch', situation: '나는 신나는 장면을 만들었는데, 서아의 쪽지에 "쓸쓸해 보여"라고 쓰여 있어요.', choices: [
                { id: 'ask', text: '"그렇게도 보이는구나. 어디가 쓸쓸해 보였어?" 하고 물어요', result: '서아가 까만 조각이 혼자 떨어져 있어서라고 알려 주었어요. 작품을 새롭게 보았어요.', mood: '기쁨' },
                { id: 'tear', text: '쪽지를 떼어 버려요', result: '서아가 내 작품을 다시 보러 오지 않았어요.', mood: '속상함', why: '나와 다른 느낌의 쪽지도 내 작품을 새로 보게 해 줘요.' }] }, target: { choice: 'ask' }, difficulty: 0.1 },
              { prompt: '쪽지를 받았을 때 마음에 어울리는 카드를 놓아 보세요.', toolOptions: { cards: ['뿌듯함', '속상함', '무서움'], slots: [{ id: 's1', label: '꼭 찾아 주길 바랐던 곳을 친구가 찾아 주었어요' }, { id: 's2', label: '친구가 까닭 없이 "이상해"라고만 썼어요' }] },
                target: { match: { s1: '뿌듯함', s2: '속상함' } }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['뿌듯함', '속상함', '무서움', '화남'] } } } },
              { prompt: '받은 쪽지 가운데 나와 다르게 느낀 쪽지를 하나 골라, 그 친구가 본 곳을 내 작품에서 찾아 짚었으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"받은 쪽지 가운데 가장 기억에 남는 쪽지는 무엇인가요? 왜 그런가요?" 두세 명이 말한다. 전시한 작품은 다음 시간 단원 전시회까지 그대로 둔다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', basket: '감상 쪽지', cards: ['노란 해가 크게 보여요', '따뜻한 느낌이 들어요', '너무 못 만들었어'] }, prompt: '하준이의 해 그림에 붙일 쪽지로 알맞은 말만 골라 보세요.', target: { pick: ['노란 해가 크게 보여요', '따뜻한 느낌이 들어요'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '내 작품에 나와 다른 느낌의 쪽지가 붙었어요.', options: ['친구가 무엇을 보았는지 물어봐요', '쪽지를 떼어 버려요', '친구에게 화를 내요'], answer: 0, difficulty: 0.1, explain: '다른 느낌의 쪽지는 내 작품을 새롭게 보게 해 줘요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '우리 반 작은 미술관',
      items: [
        { type: 'table', prompt: '친구 작품에 붙인 쪽지를 옮겨 쓰세요.', columns: ['친구 작품', '찾은 것', '느낌'], rows: 3 },
        { type: 'short', prompt: '내가 받은 쪽지 가운데 나와 다르게 느낀 쪽지를 옮겨 쓰세요.' },
        { type: 'short', prompt: '그 친구는 내 작품에서 무엇을 보았을지 쓰세요.' },
        { type: 'check', prompt: '미술관 약속을 지킨 것에 모두 ✓ 하세요.', options: ['천천히 걸었어요', '작품에 손대지 않았어요', '작은 목소리로 말했어요', '쪽지에 찾은 것과 느낌을 썼어요'] },
      ],
      easy: {
        note: '○○이 보여요. ~한 느낌이에요.',
        items: [
          { type: 'choice', prompt: '감상 쪽지로 알맞은 말에 ○ 하세요.', options: ['별이 반짝여서 신나요', '이상해'], answer: '별이 반짝여서 신나요' },
          { type: 'short', prompt: '친구 작품에서 찾은 것 하나를 쓰세요.' },
          { type: 'draw', prompt: '가장 마음에 든 친구 작품을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 쪽지는 칠판의 틀을 보고 따라 써요.',
      base: '찾은 것과 느낌을 넣은 쪽지를 세 장 붙이고, 다른 느낌의 쪽지를 받아들여요.',
      challenge: '함정 마음 카드가 섞이고, 쪽지에 그렇게 느낀 까닭까지 넣어 다섯 장 붙여요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 쪽지에 "예뻐요"만 쓴다 → 칠판의 \'○○이 보여요. ~한 느낌이에요.\' 틀을 짚어 준다. ② 친한 친구 작품에만 쪽지를 붙인다 → 모둠마다 붙일 작품 구역을 나누어 준다. ③ 다른 느낌의 쪽지를 받고 속상해한다 → 그 쪽지가 작품을 새롭게 보게 해 준다고 말하고 함께 작품을 다시 본다. 쪽지에 친구 이름 대신 \'○번 작품\'처럼 번호를 쓴다.',
  }));

  lessons.push(L(48, {
    title: '세계 단원을 돌아보며 우리 반 세계 전시회 열기',
    objective: '세계 단원에서 한 일을 네 갈래(궁금한 세계 알아보기·다른 나라 생활 존중하기·세계 노래 듣기·세계 그림 보기)로 묶어 말하고, 전시회에서 친구에게 소개한 뒤 나의 배움을 스스로 돌아볼 수 있다.',
    illustration: ART('a cheerful classroom world exhibition with a paper globe in the center, music picture scores, cut-paper artworks and flags of friendship around it, children guiding visitors', '우리 반 세계 전시회', [
      { motif: 'star', x: 100, y: 80, s: 0.5 }, { motif: 'flower', x: 400, y: 220 }, { motif: 'bird', x: 360, y: 80 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '교실을 네 구역으로 나누어 단원 결과물을 전시해 둔다(탐구 그림 카드, 존중 약속, 그림 악보, 색종이 작품). "1차시부터 오늘까지 세계 단원에서 무엇을 했는지 떠올려 볼까요?" 구역마다 한 가지씩 학생이 말하게 한다. 시연 단추로 \'세계 지도에서 남극 찾기\' 카드가 \'궁금한 세계 알아보기\' 가지에 놓이는 모습을 보여 준다.',
        student: '세계 단원에서 가장 기억에 남는 활동 하나를 떠올려요.',
        demo: { tool: 'mindmap', options: { topic: '세계 단원', slots: ['궁금한 세계 알아보기', '세계 그림 보기'], cards: ['세계 지도에서 남극 찾기'], shuffle: false }, sequence: [{ sort: { '궁금한 세계 알아보기': ['세계 지도에서 남극 찾기'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 단원에서 한 일 묶기', minutes: 12, tool: 'mindmap',
            teacher: '네 가지 이름을 칠판에 적고, 카드마다 "이 활동을 할 때 무엇을 보았나요? 들었나요? 함께 놀았나요?" 하고 떠올리게 한다. 존중하기 활동은 다른 나라 옷·음식·인사·놀이를 함께 해 본 것이라고 짚는다.',
            task: '단원에서 한 활동을 네 갈래로 묶고, 배운 태도에 어울리는 말을 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '세계 단원에서 한 활동을 알맞은 가지에 묶어 보세요.', toolOptions: { topic: '세계 단원', slots: ['궁금한 세계 알아보기', '다른 나라 생활 존중하기', '세계 노래 듣기', '세계 그림 보기'], cards: ['세계 지도에서 남극 찾기', '만칼라 놀이 하기', '런던 다리 센 박에 무릎 치기', '별이 빛나는 밤 감상하기'] },
                target: { sort: { '궁금한 세계 알아보기': ['세계 지도에서 남극 찾기'], '다른 나라 생활 존중하기': ['만칼라 놀이 하기'], '세계 노래 듣기': ['런던 다리 센 박에 무릎 치기'], '세계 그림 보기': ['별이 빛나는 밤 감상하기'] } }, difficulty: 0.15 },
              { prompt: '다른 활동도 알맞은 가지에 묶어 보세요.', toolOptions: { topic: '세계 단원', slots: ['궁금한 세계 알아보기', '다른 나라 생활 존중하기', '세계 노래 듣기', '세계 그림 보기'], cards: ['알아낸 것과 상상한 것 나누기', '여러 나라 인사말로 인사하기', '노래 빠르기를 걸음으로 나타내기', '과일 얼굴 그림에서 과일 찾기'] },
                target: { sort: { '궁금한 세계 알아보기': ['알아낸 것과 상상한 것 나누기'], '다른 나라 생활 존중하기': ['여러 나라 인사말로 인사하기'], '세계 노래 듣기': ['노래 빠르기를 걸음으로 나타내기'], '세계 그림 보기': ['과일 얼굴 그림에서 과일 찾기'] } }, difficulty: 0.2 },
              { prompt: '이런 때 어울리는 말을 이어 보세요.', toolOptions: { mode: 'match', topic: '서로 존중하는 말', slots: [{ id: 's1', label: '친구가 우리와 다른 나라 음식을 좋아해요' }, { id: 's2', label: '친구가 같은 그림을 나와 다르게 느꼈어요' }], cards: ['"그 음식 맛이 궁금해"', '"너는 그렇게 느꼈구나"'] },
                target: { match: { s1: '"그 음식 맛이 궁금해"', s2: '"너는 그렇게 느꼈구나"' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['"그 음식 맛이 궁금해"', '"너는 그렇게 느꼈구나"', '"그건 이상해"'] } } },
                conclude: '세계를 알아볼 때도, 친구와 다를 때도 궁금해하고 받아들이는 마음이 필요해요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 세계 전시회 열고 돌아보기', minutes: 15, tool: 'emotion',
            teacher: '모둠이 반씩 나뉘어 절반은 자기 구역 안내를, 절반은 관람을 하고 4분 뒤 바꾼다(8분). 안내하는 학생은 결과물 하나를 들고 "이것은 ~를 알아본 거예요" 한 문장으로 소개한다. 이어 스스로 돌아보기 두 가지를 한다 — 내 마음의 크기라 정답이 없다고 미리 알린다.',
            task: '전시회에서 우리 모둠 결과물을 소개하고 둘러본 뒤, 단원을 마친 내 마음을 돌아봐요.',
            levels: CARD_LV,
            items: [
              { prompt: '전시회에서 우리 모둠 결과물 하나를 한 문장으로 소개하고, 다른 구역도 둘러보았으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '세계 단원을 마친 지금, 세계가 더 궁금해진 마음의 크기를 솔직하게 골라 보세요. 정답은 없어요.', toolOptions: { mode: 'scale', situation: '세계의 궁금한 곳, 여러 나라 생활, 노래와 그림을 만났어요.', feeling: '설렘', after: '더 궁금한 나라가 있다면 책과 지도로 계속 찾아보세요.' }, target: { level: 'any' }, difficulty: 0.05 },
              { prompt: '친구와 다른 생각과 느낌을 받아들일 수 있게 된 내가 뿌듯한 마음의 크기를 솔직하게 골라 보세요. 정답은 없어요.', toolOptions: { mode: 'scale', situation: '다른 나라 생활과 친구의 다른 느낌을 "그럴 수 있구나" 하고 받아들여 보았어요.', feeling: '뿌듯함', after: '앞으로도 다른 생각을 만나면 먼저 궁금해해 보세요.' }, target: { level: 'any' }, difficulty: 0.05 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"세계 단원에서 새로 알게 된 것 하나, 앞으로 해 보고 싶은 것 하나를 말해 볼까요?" 서너 명이 말한다. 전시한 결과물은 집에 가져가 가족에게 소개하게 한다. 단원을 마친 것을 함께 박수로 축하한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '세계 단원', slots: ['궁금한 세계 알아보기', '다른 나라 생활 존중하기', '세계 노래 듣기', '세계 그림 보기'], cards: ['펭귄 책 자료 읽기', '다루마상가 고론다 하기', '프레르 자크에서 되풀이 가락 찾기', '몬드리안처럼 네모 작품 만들기'] }, prompt: '세계 단원에서 한 활동을 알맞은 가지에 묶어 보세요.', target: { sort: { '궁금한 세계 알아보기': ['펭귄 책 자료 읽기'], '다른 나라 생활 존중하기': ['다루마상가 고론다 하기'], '세계 노래 듣기': ['프레르 자크에서 되풀이 가락 찾기'], '세계 그림 보기': ['몬드리안처럼 네모 작품 만들기'] } }, difficulty: 0.2 },
          { type: 'choice', prompt: '다른 나라 사람들의 생활이 우리와 다를 때 알맞은 생각은?', options: ['다른 까닭이 있을 거예요', '우리 생활만 옳아요', '다른 것은 틀린 거예요'], answer: 0, difficulty: 0.1, explain: '날씨와 생활이 달라서 옷·음식·집이 다를 수 있어요. 다름은 틀림이 아니에요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '세계 단원 돌아보기',
      items: [
        { type: 'table', prompt: '세계 단원에서 한 일을 갈래마다 하나씩 쓰세요.', columns: ['갈래', '내가 한 일'], cells: [['궁금한 세계 알아보기', ''], ['다른 나라 생활 존중하기', ''], ['세계 노래 듣기', ''], ['세계 그림 보기', '']] },
        { type: 'short', prompt: '세계 단원에서 새로 알게 된 것을 쓰세요.' },
        { type: 'short', prompt: '앞으로 더 알아보고 싶은 나라나 곳을 쓰세요.' },
        { type: 'draw', prompt: '세계 단원에서 가장 즐거웠던 장면을 그려 보세요.' },
      ],
      easy: {
        note: '알아보기, 존중하기, 노래, 그림 — 네 가지를 떠올려요.',
        items: [
          { type: 'choice', prompt: '세계 그림 보기에서 한 활동에 ○ 하세요.', options: ['별이 빛나는 밤 감상하기', '만칼라 놀이 하기'], answer: '별이 빛나는 밤 감상하기' },
          { type: 'short', prompt: '가장 기억에 남는 활동을 쓰세요.' },
          { type: 'draw', prompt: '가장 즐거웠던 장면을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 가지에 초록 테두리가 생기고, 스스로 돌아보기는 솔직하게 고르기만 하면 돼요.',
      base: '단원 활동을 네 갈래로 묶고, 전시회에서 결과물을 한 문장으로 소개해요.',
      challenge: '함정 카드가 섞이고, 전시회에서 두 갈래를 이어 소개해요(예: 노래와 그림에서 모두 \'다시 보기·다시 듣기\'를 했어요).',
    },
    teacherNotes: '자주 보이는 어려움: ① 활동 이름만 듣고 어느 갈래인지 떠올리지 못한다 → 구역마다 결과물을 들어 보이며 함께 떠올린다. ② 전시회 안내를 길게 하려다 막힌다 → \'이것은 ~예요. ~를 알게 되었어요.\' 두 문장 틀을 준다. ③ 스스로 돌아보기에서 친구 눈치를 본다 → 마음의 크기는 맞고 틀림이 없다고 다시 말한다. 전시물에 학생 이름 대신 모둠 번호를 붙인다.',
  }));

  // ── 차시 끝 ──

  PaperLessons.registerUnit({
    id: 'g2-int-1-04', schema: 'edu-unit.v1', catalogUnit: UNIT,
    grade: 2, subject: '통합교과', unitTitle: TITLE,
    flow: '1~12차시는 바닷속·우주·남극처럼 가 보기 어려운 곳 가운데 궁금한 곳을 골라 묻는 말을 만들고, 책·영상·사진·세계 지도 자료를 견주어 읽은 뒤 알아낸 것과 상상한 것을 나누어 친구에게 전합니다. 13~24차시는 여러 나라의 옷·음식·인사·집을 우리와 견주며 다른 까닭을 날씨와 생활에서 찾고, 다른 나라 놀이를 직접 해 본 뒤 달라진 마음을 돌아보아 서로 다름을 존중하는 우리 반 약속을 정합니다. 25~36차시는 저작권이 끝난 세계 여러 나라 노래의 가락을 듣고 되풀이·센 박·빠르기·셈여림을 찾아 손뼉과 걸음, 그림 악보로 나타내며, 친구가 찾은 것과 견주고 다시 들어 덧붙입니다. 37~48차시는 세계의 미술 작품에서 눈에 띈 곳과 아는 것을 찾고, 느낌과 상상한 이야기를 말과 몸짓, 색종이 작품으로 나타낸 뒤, 친구의 다른 느낌을 받아들이고 다시 보며 단원을 전시회로 정리합니다.',
    refs: {},
    lessons: lessons,
  });
})();
