/* 2학년 2학기 통합교과 8. 기억 — 48차시
 * 1~12차시 [바른 생활] 생활 습관과 학습 습관 되돌아보기: 1학년 때와 지금 견주기·좋은 습관과 고칠 습관(1~4) → 고칠 습관 하나를 사흘 지켜 표에 색칠(5~8) → 표를 보고 돌아보기·3학년에 이어 갈 습관(9~12)
 * 13~24차시 [즐거운 생활] 노래하고 악기 연주하기: 바른 자세·악기 잡는 법(13~16) → 바른 자세로 부르고 박에 맞추어 치기(17~20) → 돌아보고 고쳐 다시 하기(21~24)
 * 25~36차시 [즐거운 생활] 선으로 표현하기: 굵은·가는·곧은·굽은 선 찾기(25~28) → 선을 이어 그림 만들고 색으로 모양 드러내기(29~32) → 내 그림·친구 그림 돌아보기(33~36)
 * 37~48차시 [즐거운 생활] 귀 기울여 듣고 반응하기: 빠르기·높낮이·셈여림 듣기(37~40) → 몸·그림으로 반응하기(41~44) → 서로 다른 반응 나누기·단원 정리(45~48)
 * 성취기준: units-map 단원 목록이 비어 있고 미확인(standardsVerified:false)이라 모든 차시 standards: [] (지어내지 않는다).
 * 노래·가락·리듬·예문은 모두 이 단원을 위해 직접 지었다. 감상곡은 작곡가가 세상을 떠난 지 70년이 넘어 저작권이 끝난 곡(생상스·림스키코르사코프·그리그·
 * 오펜바흐·차이콥스키·슈만)과 전래 민요 '아리랑'만 이름으로 적는다(가사·악보를 싣지 않는다 — 교사가 학교에서 쓸 수 있는 음원을 고른다).
 * 학생 이름은 가명(민지·준호·하준·서아·지우·도윤)만 쓴다.
 */
(function () {
  var UNIT = 'g2-통합교과-2학기-8';
  var TITLE = '8. 기억';
  var HEAD = 'Layered paper-cut illustration of ';
  var TAIL = ', with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.';
  function two(n) { return (n < 10 ? '0' : '') + n; }
  // 차시 머리(같은 칸)를 채운다 — 차시마다 다른 내용은 x에 그대로 적는다
  function L(n, x) {
    var head = {
      id: 'g2-int-2-08-' + two(n), schema: 'edu-lesson.v1', catalog: { unit: UNIT, lesson: n },
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
  // 카드 판 교구 단계: 쉬움은 맞는 칸에 초록 테두리·틀린 칸은 바로 되돌림. 도전은 문항마다 함정 카드나 칸을 더 넣는다(문항 levels.challenge)
  function CARD_LV() { return { easy: { live: true, instant: true }, base: {}, challenge: {} }; }
  // 마음 날씨 교구: 쉬움은 눈금 세 칸·바로 알림
  function EMO_LV() { return { easy: { live: true, instant: true, steps: 3 }, base: {}, challenge: {} }; }
  // 종이 건반: 쉬움은 듣는 동안 건반을 비추고 계이름이 보임, 도전은 계이름을 숨긴다
  function MEL_LV() {
    return {
      easy: { from: '도', to: '높은도', names: 'solfa', showWhileListening: true },
      base: { from: '도', to: '높은도', names: 'solfa' },
      challenge: { from: '도', to: '높은도', names: 'none', nameToggle: false },
    };
  }
  // 리듬 블록: 쉬움은 마디마다 지금 박 수가 보임, 도전은 8분쉼표·2분쉼표 블록이 더 섞여 고르기 어렵다
  function RHY_LV() {
    return {
      easy: { mode: 'rhythm', meter: 4, measures: 2, blocks: ['q', 'e', 'h', 'qr'], showBeats: true },
      base: { mode: 'rhythm', meter: 4, measures: 2, blocks: ['q', 'e', 'h', 'qr'] },
      challenge: { mode: 'rhythm', meter: 4, measures: 2, blocks: ['q', 'e', 'h', 'qr', 'er', 'hr'] },
    };
  }
  var SING_SAFE = ['악기를 칠 때는 친구와 팔 하나만큼 떨어져 앉아요.', '트라이앵글 쇠막대·소고 채는 휘두르지 않고, 다 쓰면 바로 바구니에 넣어요.'];
  var MOVE_SAFE = ['움직이기 전에 두 팔을 벌려 친구와 닿지 않는지 살펴요.', '뛰지 않고 걸어요. 책상 모서리와 의자 다리를 조심해요.'];

  var lessons = [];

  // ───────────────────────── 1~4차시: 1학년 때와 지금, 좋은 습관과 고칠 습관(생활 맥락 이해) ─────────────────────────

  lessons.push(L(1, {
    title: '일 학년 때의 나와 지금의 나 견주어 보기',
    objective: '일 학년 때와 지금 달라진 점을 카드에서 찾아 나누고, 좋은 습관과 고칠 습관을 갈라 말할 수 있다.',
    illustration: ART('a paper memory box opened on a desk, with small paper photos of a first grader and a second grader side by side, a tiny shoe with tied laces', '기억 상자를 열어요', [
      { motif: 'star', x: 120, y: 90, s: 0.6 }, { motif: 'house', x: 380, y: 214, color: 'sky' }, { motif: 'flower', x: 250, y: 226, color: 'rose' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 7,
        teacher: '"이 상자는 우리 반 기억 상자예요. 일 학년 때 처음 학교에 온 날, 기억나는 사람?" 두세 명의 이야기를 듣는다. 일 학년 때 쓰던 이름표나 공책을 하나 꺼내 보이며 "그때는 이 글씨였는데, 지금은 어때요?" 하고 묻는다. 시연 단추로 카드가 \'일 학년 때\'와 \'지금\' 칸에 놓이는 모습을 보여 준다. 이번 단원에서는 지나온 날을 떠올리며 좋은 습관은 이어 가고 고칠 습관은 고쳐 본다고 알린다.',
        student: '일 학년 때는 못 했는데 지금은 할 수 있는 일을 하나 떠올려 짝에게 말해 봐요.',
        demo: { tool: 'timeline', options: { mode: 'sort', axis: ['옛날', '지금'], slots: ['일 학년 때', '지금'], cards: ['글씨가 삐뚤빼뚤했어요', '글씨를 칸에 맞춰 써요'], shuffle: false }, sequence: [{ sort: { '일 학년 때': ['글씨가 삐뚤빼뚤했어요'], '지금': ['글씨를 칸에 맞춰 써요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 25,
        activities: [
          {
            id: 'a1', title: '활동 1. 그때와 지금 나누기', minutes: 12, tool: 'timeline',
            teacher: '"\'했어요\'로 끝나는 말과 \'해요\'로 끝나는 말을 잘 보세요. 언제 일일까요?" 카드를 소리 내어 읽고 놓게 한다. 다 놓은 뒤 "무엇이 달라졌나요?" 하고 짝지어 말하게 한다. 지금이 더 잘한다는 것만 보지 말고 "어떻게 할 수 있게 되었을까요?"를 물어 날마다 해 본 덕분이라는 것을 이끌어 낸다.',
            task: '친구의 일 학년 때와 지금의 모습 카드를 알맞은 칸에 나누어 놓아요.',
            levels: CARD_LV(),
            items: [
              { prompt: '민지의 카드를 일 학년 때와 지금으로 나누어 보세요.', toolOptions: { mode: 'sort', axis: ['옛날', '지금'], slots: ['일 학년 때', '지금'], cards: ['신발 끈을 묶어 달라고 했어요', '혼자 신발 끈을 묶어요', '우유갑을 못 열었어요', '우유갑을 혼자 열어요'] },
                target: { sort: { '일 학년 때': ['신발 끈을 묶어 달라고 했어요', '우유갑을 못 열었어요'], '지금': ['혼자 신발 끈을 묶어요', '우유갑을 혼자 열어요'] } }, difficulty: 0.05 },
              { prompt: '준호의 카드를 일 학년 때와 지금으로 나누어 보세요.', toolOptions: { mode: 'sort', axis: ['옛날', '지금'], slots: ['일 학년 때', '지금'], cards: ['받아쓰기 다섯 문제가 어려웠어요', '받아쓰기 열 문제를 써요', '줄넘기를 한 번도 못 넘었어요', '줄넘기를 열 번 넘어요'] },
                target: { sort: { '일 학년 때': ['받아쓰기 다섯 문제가 어려웠어요', '줄넘기를 한 번도 못 넘었어요'], '지금': ['받아쓰기 열 문제를 써요', '줄넘기를 열 번 넘어요'] } }, difficulty: 0.1,
                levels: { challenge: { prompt: '준호의 카드를 일 학년 때와 지금으로 나누어 보세요. 달라진 것과 상관없는 카드는 남겨요.', toolOptions: { cards: ['받아쓰기 다섯 문제가 어려웠어요', '받아쓰기 열 문제를 써요', '줄넘기를 한 번도 못 넘었어요', '줄넘기를 열 번 넘어요', '준호는 딸기를 좋아해요'] } } } },
              { prompt: '서아가 자라 온 차례대로 카드를 놓아 보세요.', toolOptions: { mode: 'order', axis: ['먼저', '나중'], slots: 4, cards: ['처음 학교에 온 날', '일 학년 여름 방학', '이 학년이 된 날', '이 학년 겨울'] },
                target: { order: ['처음 학교에 온 날', '일 학년 여름 방학', '이 학년이 된 날', '이 학년 겨울'] }, difficulty: 0.1,
                levels: { easy: { prompt: '서아가 자라 온 차례대로 카드 세 장을 놓아 보세요.', toolOptions: { slots: 3, cards: ['처음 학교에 온 날', '이 학년이 된 날', '이 학년 겨울'] }, target: { order: ['처음 학교에 온 날', '이 학년이 된 날', '이 학년 겨울'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 좋은 습관과 고칠 습관 가르기', minutes: 13, tool: 'mindmap',
            teacher: '"습관은 날마다 저절로 하게 되는 일이에요. 이 일을 날마다 하면 나에게 좋을까요?" 카드를 읽고 몸에 좋은지, 공부에 도움이 되는지 까닭을 말한 뒤 놓게 한다. 마지막 문항에서 "습관은 한 번 생기면 못 바꿔요"라고 말하는 학생에게 앞에서 본 준호의 줄넘기를 다시 떠올리게 한다 — 날마다 해 보니 바뀌었다.',
            task: '친구의 습관 카드를 좋은 습관과 고칠 습관으로 나누고, 고칠 습관이 바뀐 모습을 이어요.',
            levels: CARD_LV(),
            items: [
              { prompt: '하준이의 생활 습관을 좋은 습관과 고칠 습관으로 나누어 보세요.', toolOptions: { topic: '하준이의 습관', slots: ['좋은 습관', '고칠 습관'], cards: ['밥 먹기 전에 손을 씻어요', '늦게 자서 늦잠을 자요', '전날 밤에 가방을 챙겨요', '숙제를 미루다 잊어요'] },
                target: { sort: { '좋은 습관': ['밥 먹기 전에 손을 씻어요', '전날 밤에 가방을 챙겨요'], '고칠 습관': ['늦게 자서 늦잠을 자요', '숙제를 미루다 잊어요'] } }, difficulty: 0.1 },
              { prompt: '서아의 수업 시간 습관을 좋은 습관과 고칠 습관으로 나누어 보세요.', toolOptions: { topic: '서아의 수업 시간', slots: ['좋은 습관', '고칠 습관'], cards: ['말씀을 끝까지 들어요', '손을 들고 차례에 말해요', '연필을 입에 물어요', '서랍에 쓰레기를 넣어 둬요'] },
                target: { sort: { '좋은 습관': ['말씀을 끝까지 들어요', '손을 들고 차례에 말해요'], '고칠 습관': ['연필을 입에 물어요', '서랍에 쓰레기를 넣어 둬요'] } }, difficulty: 0.15,
                levels: { challenge: { prompt: '서아의 수업 시간 습관을 나누어 보세요. 습관이 아닌 카드는 남겨요.', toolOptions: { cards: ['말씀을 끝까지 들어요', '손을 들고 차례에 말해요', '연필을 입에 물어요', '서랍에 쓰레기를 넣어 둬요', '서아는 파랑을 좋아해요'] } } } },
              { prompt: '고칠 습관과 그 습관을 바꾼 모습을 이어 보세요.', toolOptions: { mode: 'match', topic: '이렇게 바꿨어요', slots: [{ id: 's1', label: '늦잠을 자요' }, { id: 's2', label: '숙제를 잊어요' }], cards: ['일찍 자고 일찍 일어나요', '집에 오면 숙제부터 해요'] },
                target: { match: { s1: '일찍 자고 일찍 일어나요', s2: '집에 오면 숙제부터 해요' } }, difficulty: 0.1,
                predict: { q: '고칠 습관은 바꿀 수 있을까요?', options: ['바꿀 수 있어요', '바꿀 수 없어요'], answer: 0 },
                conclude: '습관은 날마다 조금씩 해 보면 바꿀 수 있어요.' },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 찾은 내 좋은 습관 하나를 말해 볼까요?" 서너 명이 말하면 박수로 응원한다. "고칠 습관은 부끄러운 것이 아니라 찾아낸 것만으로도 시작이에요." 다음 시간에는 집에서의 하루를 살펴본다고 알린다. 일 학년 때 사진이나 공책을 집에서 하나 가져오게 한다(없으면 그림으로 그려 온다).',
        exitTicket: [
          { type: 'tool', tool: 'timeline', options: { mode: 'sort', axis: ['옛날', '지금'], slots: ['일 학년 때', '지금'], cards: ['혼자 단추를 못 채웠어요', '혼자 단추를 채워요', '젓가락질이 서툴렀어요'] }, prompt: '도윤이의 카드를 일 학년 때와 지금으로 나누어 보세요.', target: { sort: { '일 학년 때': ['혼자 단추를 못 채웠어요', '젓가락질이 서툴렀어요'], '지금': ['혼자 단추를 채워요'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '고칠 습관에 대해 바르게 말한 친구는 누구인가요?', options: ['민지: 습관은 한 번 생기면 못 바꿔요', '준호: 날마다 해 보면 바꿀 수 있어요'], answer: 1, difficulty: 0.1, explain: '날마다 조금씩 해 보면 습관도 바뀌어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '일 학년 때의 나, 지금의 나',
      items: [
        { type: 'table', prompt: '일 학년 때와 지금의 나를 쓰세요.', columns: ['일 학년 때', '지금'], rows: 2 },
        { type: 'choice', prompt: '좋은 습관에 ○ 하세요.', options: ['밥 먹기 전에 손을 씻어요', '연필을 입에 물어요', '숙제를 미루어요'], answer: '밥 먹기 전에 손을 씻어요' },
        { type: 'short', prompt: '내가 고치고 싶은 습관을 하나 쓰세요.' },
        { type: 'draw', prompt: '일 학년 때와 지금 달라진 내 모습을 그리세요.' },
      ],
      easy: {
        note: '"했어요"는 그때, "해요"는 지금이에요.',
        items: [
          { type: 'choice', prompt: '지금의 모습에 ○ 하세요.', options: ['혼자 신발 끈을 묶어요', '신발 끈을 묶어 달라고 했어요'], answer: '혼자 신발 끈을 묶어요' },
          { type: 'choice', prompt: '좋은 습관에 ○ 하세요.', options: ['손을 씻어요', '늦잠을 자요'], answer: '손을 씻어요' },
          { type: 'draw', prompt: '지금의 내 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 놓으면 초록 테두리가 생기고 틀리면 카드가 돌아와요. 자라 온 차례는 카드 세 장이에요.',
      base: '모두 놓은 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '달라진 것·습관과 상관없는 함정 카드가 섞여 있어 골라내야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 습관은 한 번 생기면 바꿀 수 없다고 여긴다 → 일 학년 때 못 하던 일을 지금 할 수 있게 된 까닭(날마다 해 봄)을 떠올리게 한다. ② 잘하는 것(줄넘기 열 번)과 습관(날마다 하는 일)을 섞는다 → "날마다 하는 일인가요?"를 묻는다. ③ 일 학년 사진을 가져오지 못한 학생이 있다 → 그림이나 말로 떠올려도 된다고 미리 알린다. 가족 사진은 학생과 가족이 원할 때만 보여 준다.',
  }));

  lessons.push(L(2, {
    title: '아침과 저녁 생활 습관 살펴보기',
    objective: '집에서 아침과 저녁에 하는 일을 나누고, 그 가운데 좋은 습관과 고칠 습관을 찾아 말할 수 있다.',
    illustration: ART('a paper house cut in half showing a morning bedroom with a folded blanket and an evening bathroom with a toothbrush, sun on one side and moon on the other', '아침과 저녁의 나', [
      { motif: 'moon', x: 80, y: 70, s: 0.7 }, { motif: 'house', x: 240, y: 214, color: 'peach' }, { motif: 'tree', x: 400, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"오늘 아침에 눈을 뜨고 가장 먼저 한 일은 무엇인가요?" 대여섯 명의 대답을 칠판의 해 그림 아래에 적는다. "어젯밤 잠자기 전에 한 일은요?" 이번에는 달 그림 아래에 적는다. 시연 단추로 카드가 아침·저녁 칸에 놓이는 모습을 보여 준다. 집집마다 순서는 달라도 괜찮다고 말해 준다.',
        student: '오늘 아침에 일어나서 학교에 오기까지 한 일을 손가락으로 세며 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '지우의 하루', slots: ['아침', '저녁'], cards: ['일어나 기지개를 켜요', '잠옷을 입어요'], shuffle: false }, sequence: [{ sort: { '아침': ['일어나 기지개를 켜요'], '저녁': ['잠옷을 입어요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 아침 습관, 저녁 습관 찾기', minutes: 13, tool: 'mindmap',
            teacher: '"이 일은 해가 뜰 때 할까요, 달이 뜰 때 할까요?" 아침·저녁으로 나눈 뒤 "그 가운데 날마다 하면 좋은 일은 무엇일까요?" 하고 이어 묻는다. 아침밥을 먹지 않고 오는 학생이 있을 수 있으니 특정 학생의 집을 예로 들지 않는다.',
            task: '하루 일을 아침과 저녁으로 나누고, 아침 습관을 좋은 습관과 고칠 습관으로 나누어요.',
            levels: CARD_LV(),
            items: [
              { prompt: '지우의 하루 일을 아침과 저녁으로 나누어 보세요.', toolOptions: { topic: '지우의 하루', slots: ['아침', '저녁'], cards: ['일어나 이불을 개요', '책가방을 메고 집을 나서요', '이를 닦고 잠자리에 들어요', '내일 입을 옷을 꺼내 둬요'] },
                target: { sort: { '아침': ['일어나 이불을 개요', '책가방을 메고 집을 나서요'], '저녁': ['이를 닦고 잠자리에 들어요', '내일 입을 옷을 꺼내 둬요'] } }, difficulty: 0.05 },
              { prompt: '지우의 아침 습관을 좋은 습관과 고칠 습관으로 나누어 보세요.', toolOptions: { topic: '지우의 아침', slots: ['좋은 습관', '고칠 습관'], cards: ['알람이 울리면 바로 일어나요', '깨워도 이불 속에 있어요', '아침밥을 꼭꼭 씹어 먹어요', '바빠서 세수를 건너뛰어요'] },
                target: { sort: { '좋은 습관': ['알람이 울리면 바로 일어나요', '아침밥을 꼭꼭 씹어 먹어요'], '고칠 습관': ['깨워도 이불 속에 있어요', '바빠서 세수를 건너뛰어요'] } }, difficulty: 0.1,
                hints: ['그 일을 날마다 하면 내 몸과 하루가 어떻게 될지 떠올려 봐요.', '초록 테두리가 없는 카드를 다시 읽고, 날마다 하면 지각하거나 몸이 불편해지는지 생각해요.', '바로 일어나기·꼭꼭 씹기는 좋은 습관, 이불 속에 있기·세수 건너뛰기는 고칠 습관이에요.'] },
              { prompt: '지우의 저녁 습관을 좋은 습관과 고칠 습관으로 나누어 보세요.', toolOptions: { topic: '지우의 저녁', slots: ['좋은 습관', '고칠 습관'], cards: ['자기 전 게임을 오래 해요', '양치질을 하고 자요', '과자를 먹고 바로 자요', '책을 읽고 불을 꺼요'] },
                target: { sort: { '좋은 습관': ['양치질을 하고 자요', '책을 읽고 불을 꺼요'], '고칠 습관': ['자기 전 게임을 오래 해요', '과자를 먹고 바로 자요'] } }, difficulty: 0.15,
                hints: ['잠자기 전에 한 일이 다음 날 아침과 내 이에 어떤 영향을 줄지 떠올려 봐요.', '아직 칸이 맞지 않은 카드를 다시 읽어 보세요. 그 일을 하면 잠이 늦어지거나 이가 상하나요?', '양치질·책 읽기는 좋은 습관, 오래 게임하기·과자 먹고 자기는 고칠 습관이에요.'],
                levels: { challenge: { prompt: '지우의 저녁 일을 나누어 보세요. 습관이 아닌 카드는 남겨요.', toolOptions: { cards: ['자기 전 게임을 오래 해요', '양치질을 하고 자요', '과자를 먹고 바로 자요', '책을 읽고 불을 꺼요', '오늘 밤 비가 왔어요'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 아침이 편해지는 습관 고르기', minutes: 13, tool: 'emotion',
            teacher: '"늦잠을 잔 날 아침, 마음은 어떤 날씨일까요?" 지각할 뻔한 준호의 걱정 크기를 이야기 속 근거(숨이 차게 뛰어 겨우 도착)를 짚으며 고르게 한다. "오 분만 더"를 고른 학생에게 결과 칸을 소리 내어 읽게 하고, 그 오 분이 어떻게 되었는지 묻는다. 잠자기 전 할 일은 정리 시간에 출구 질문으로 스스로 골라 본다.',
            task: '아침에 늦은 친구의 마음 크기를 고르고, 어떻게 할지 골라요.',
            levels: EMO_LV(),
            items: [
              { prompt: '두 아침에 어울리는 마음 카드를 놓아 보세요.', toolOptions: { cards: ['걱정', '편안함', '신남'], slots: [{ id: 's1', label: '가방을 못 찾아 허둥지둥해요' }, { id: 's2', label: '어젯밤 챙긴 가방을 메고 나서요' }] },
                target: { match: { s1: '걱정', s2: ['편안함', '신남'] } }, difficulty: 0.05 },
              { prompt: '늦잠을 잔 준호는 학교까지 뛰어가 겨우 도착했어요. 걱정된 마음의 크기를 골라 보세요.', toolOptions: { mode: 'scale', who: '준호', situation: '준호는 늦잠을 자서 학교까지 숨이 차게 뛰어가 겨우 도착했어요.', feeling: '걱정', after: '이만큼 걱정되지 않으려면 전날 밤에 일찍 자요.' }, target: { level: [3, 5] }, difficulty: 0.1,
                levels: { easy: { prompt: '늦잠을 잔 준호가 뛰어가 겨우 도착했어요. 걱정된 마음을 세 칸에서 골라 보세요.', target: { level: [2, 3] } } } },
              { prompt: '엄마가 깨우셨는데 일어나기 싫어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '알람이 울리고 엄마가 깨우셨는데 이불 속이 너무 따뜻해요.', choices: [
                { id: 'stay', text: '"오 분만 더" 하고 다시 자요', result: '아침밥을 못 먹고 뛰어가요.', mood: '걱정', why: '오 분이 지나면 무슨 일이 생길지 떠올려 봐요.' },
                { id: 'up', text: '기지개를 켜고 바로 일어나요', result: '아침밥을 먹고 여유 있게 나서요.', mood: '편안함' },
                { id: 'angry', text: '깨우지 말라고 소리쳐요', result: '엄마도 나도 아침부터 속상해요.', mood: '속상함', why: '소리친 뒤 엄마의 마음은 어떨까요?' }] }, target: { choice: 'up' }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"내 아침과 저녁 가운데 이어 가고 싶은 습관 하나, 고치고 싶은 습관 하나를 말해 볼까요?" 짝과 하나씩 말한다. 고칠 습관을 말하기 어려워하는 학생에게 "아침에 바빴던 날을 떠올려 봐요"라고 건넨다. 활동지 표는 집에서 가족과 함께 채워 오게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '도윤이의 집', slots: ['좋은 습관', '고칠 습관'], cards: ['밤늦게 만화를 봐요', '일어나면 창문을 열어요', '먹은 그릇을 개수대에 넣어요'] }, prompt: '도윤이의 집 습관을 좋은 습관과 고칠 습관으로 나누어 보세요.', target: { sort: { '좋은 습관': ['일어나면 창문을 열어요', '먹은 그릇을 개수대에 넣어요'], '고칠 습관': ['밤늦게 만화를 봐요'] } }, difficulty: 0.1 },
          { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '잠자리에 들기 전에', items: [{ id: 'brush', text: '이를 닦아요' }, { id: 'bag', text: '책가방을 챙겨요' }, { id: 'tv', text: '텔레비전을 켜요' }, { id: 'clothes', text: '내일 옷을 꺼내 둬요' }] }, prompt: '잠자리에 들기 전에 해 두면 좋은 일만 골라 보세요.', target: { checklist: ['brush', 'bag', 'clothes'] }, difficulty: 0.1 },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '나의 아침과 저녁',
      items: [
        { type: 'table', prompt: '아침과 저녁에 내가 하는 일을 쓰세요.', columns: ['아침', '저녁'], rows: 3 },
        { type: 'check', prompt: '잠자리에 들기 전에 내가 하는 일에 ✓ 하세요.', options: ['이를 닦아요', '가방을 챙겨요', '내일 옷을 꺼내 둬요', '책을 읽어요'] },
        { type: 'choice', prompt: '고칠 습관에 ○ 하세요.', options: ['과자를 먹고 바로 자요', '이를 닦고 자요', '일찍 일어나요'], answer: '과자를 먹고 바로 자요' },
        { type: 'short', prompt: '내가 이어 가고 싶은 아침 습관이나 저녁 습관을 쓰세요.' },
      ],
      easy: {
        note: '해가 뜰 때 하는 일, 달이 뜰 때 하는 일을 떠올려요.',
        items: [
          { type: 'choice', prompt: '저녁에 하는 일에 ○ 하세요.', options: ['잠옷을 입어요', '가방을 메고 나서요'], answer: '잠옷을 입어요' },
          { type: 'choice', prompt: '좋은 습관에 ○ 하세요.', options: ['양치질을 하고 자요', '게임을 오래 해요'], answer: '양치질을 하고 자요' },
          { type: 'draw', prompt: '잠자리에 들기 전 내 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 마음 크기는 세 칸이에요. 고른 행동의 결과가 바로 보여요.',
      base: '모두 나누고 고른 뒤 확인을 눌러요.',
      challenge: '습관이 아닌 카드와 잠자기 전에 하면 안 되는 일이 더 섞여 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 아침·저녁에 하는 일과 좋은 습관을 섞어 생각한다 → 먼저 "언제?", 그다음 "날마다 하면 좋을까?" 두 번 나누어 묻는다. ② 집마다 다른 생활(아침밥, 씻는 때)을 틀렸다고 여긴다 → 순서는 달라도 되고, 몸과 하루에 좋은지가 기준이라고 말한다. ③ 가정 형편이 드러나는 질문은 피한다. 표는 원하는 만큼만 채워 오게 한다.',
  }));

  lessons.push(L(3, {
    title: '공부할 때 나의 학습 습관 살펴보기',
    objective: '수업·숙제·책 읽기 때의 학습 습관을 살펴보고, 공부에 도움이 되는 습관과 고칠 습관을 나눌 수 있다.',
    illustration: ART('a tidy paper desk with an open notebook, a sharpened pencil and a small book, next to a messy desk with crumpled paper, a child choosing the tidy one', '공부할 때 나는?', [
      { motif: 'star', x: 110, y: 90, s: 0.6 }, { motif: 'house', x: 380, y: 214, color: 'mint' }, { motif: 'leaf', x: 250, y: 226 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"공부할 때 날마다 하는 일도 습관이에요. 이것을 \'학습 습관\'이라고 해요." 칠판에 \'수업 시간\', \'숙제할 때\', \'책 읽을 때\' 세 칸을 그린다. "숙제할 때 책상 위에는 무엇이 있나요?" 두세 명의 대답을 듣는다. 시연 단추로 카드가 가지에 놓이는 모습을 보여 준다.',
        student: '숙제할 때 내 책상 위에 무엇이 있는지 떠올려 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '학습 습관', slots: ['수업 시간', '숙제할 때'], cards: ['손을 들고 말해요', '책상을 치우고 앉아요'], shuffle: false }, sequence: [{ sort: { '수업 시간': ['손을 들고 말해요'], '숙제할 때': ['책상을 치우고 앉아요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 언제의 학습 습관일까', minutes: 13, tool: 'mindmap',
            teacher: '"이 습관은 언제 하는 일일까요?" 카드를 읽고 가지에 놓게 한다. 숙제 습관에서 "텔레비전을 켜 두면 더 재미있어요"라는 학생에게 "그럼 숙제는 빨리 끝날까요, 늦게 끝날까요?" 하고 묻는다. 모르는 것을 표시해 두고 묻는 것도 좋은 습관이라는 것을 짚는다.',
            task: '학습 습관 카드를 때에 따라 나누고, 숙제 습관과 책 읽기 습관을 살펴요.',
            levels: CARD_LV(),
            items: [
              { prompt: '학습 습관 카드를 언제 하는 일인지에 따라 나누어 보세요.', toolOptions: { topic: '학습 습관', slots: ['수업 시간', '숙제할 때', '책 읽을 때'], cards: ['선생님을 바라보며 들어요', '알림장을 보고 숙제를 확인해요', '읽은 쪽에 책갈피를 꽂아요'] },
                target: { sort: { '수업 시간': ['선생님을 바라보며 들어요'], '숙제할 때': ['알림장을 보고 숙제를 확인해요'], '책 읽을 때': ['읽은 쪽에 책갈피를 꽂아요'] } }, difficulty: 0.1 },
              { prompt: '민지의 숙제 습관을 도움 되는 습관과 고칠 습관으로 나누어 보세요.', toolOptions: { topic: '민지의 숙제', slots: ['도움 되는 습관', '고칠 습관'], cards: ['책상을 치우고 앉아요', '텔레비전을 켜 두고 해요', '모르는 것은 표시해 두고 물어요', '다 못 했는데 가방에 넣어요'] },
                target: { sort: { '도움 되는 습관': ['책상을 치우고 앉아요', '모르는 것은 표시해 두고 물어요'], '고칠 습관': ['텔레비전을 켜 두고 해요', '다 못 했는데 가방에 넣어요'] } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { slots: ['도움 되는 습관', '고칠 습관'], cards: ['책상을 치우고 앉아요', '텔레비전을 켜 두고 해요', '모르는 것은 표시해 두고 물어요', '다 못 했는데 가방에 넣어요', '숙제를 하며 과자를 계속 먹어요', '다 하고 한 번 더 살펴봐요'] },
                  target: { sort: { '도움 되는 습관': ['책상을 치우고 앉아요', '모르는 것은 표시해 두고 물어요', '다 하고 한 번 더 살펴봐요'], '고칠 습관': ['텔레비전을 켜 두고 해요', '다 못 했는데 가방에 넣어요', '숙제를 하며 과자를 계속 먹어요'] } },
                  prompt: '민지의 숙제 습관 여섯 장을 도움 되는 습관과 고칠 습관으로 나누어 보세요.' } } },
              { prompt: '책 읽을 때 도움이 되는 습관만 골라 보세요.', toolOptions: { mode: 'pick', basket: '도움 되는 책 읽기 습관', cards: ['끝까지 읽고 책을 덮어요', '읽은 책을 제자리에 꽂아요', '그림만 휙휙 넘겨요', '책을 바닥에 펼쳐 둬요'] },
                target: { pick: ['끝까지 읽고 책을 덮어요', '읽은 책을 제자리에 꽂아요'] }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 학습 습관과 내 마음', minutes: 13, tool: 'emotion',
            teacher: '"숙제를 미리 끝낸 날과 아침에 숙제가 생각난 날, 마음이 어떻게 다를까요?" 두 날의 마음을 견주게 한다. 미루기를 고른 학생에게 결과 칸을 소리 내어 읽게 하고 "그다음 날 아침은 어떨까요?" 하고 묻는다.',
            task: '학습 습관 때문에 생긴 일과 마음을 잇고, 어떻게 할지 골라요.',
            levels: EMO_LV(),
            items: [
              { prompt: '두 가지 일에 어울리는 마음 카드를 놓아 보세요.', toolOptions: { cards: ['뿌듯함', '걱정', '신남'], slots: [{ id: 's1', label: '숙제를 미리 끝내고 놀았어요' }, { id: 's2', label: '아침에 숙제가 생각났어요' }] },
                target: { match: { s1: ['뿌듯함', '신남'], s2: '걱정' } }, difficulty: 0.1 },
              { prompt: '놀고 싶은데 숙제가 남았어요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '하준', situation: '친구가 놀이터에서 놀자고 불렀는데, 하준이는 숙제가 아직 남았어요.', choices: [
                { id: 'later', text: '놀고 와서 밤에 해요', result: '피곤해서 숙제를 하다 잠들어요.', mood: '걱정', why: '놀고 온 뒤 밤에는 어떤 일이 생길까요?' },
                { id: 'first', text: '"숙제 끝내고 갈게" 하고 먼저 해요', result: '숙제를 끝내고 마음 편히 놀아요.', mood: '편안함' }] }, target: { choice: 'first' }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { choices: [
                  { id: 'later', text: '놀고 와서 밤에 해요', result: '피곤해서 숙제를 하다 잠들어요.', mood: '걱정', why: '놀고 온 뒤 밤에는 어떤 일이 생길까요?' },
                  { id: 'first', text: '"숙제 끝내고 갈게" 하고 먼저 해요', result: '숙제를 끝내고 마음 편히 놀아요.', mood: '편안함' },
                  { id: 'copy', text: '내일 친구 것을 보고 써요', result: '내가 모르는 채로 남아요.', mood: '걱정', why: '친구 것을 베끼면 내가 알게 될까요?' }] } } } },
              { prompt: '수업 시간에 끝까지 듣지 않아 준비물을 놓친 서아의 속상한 마음 크기를 골라 보세요.', toolOptions: { mode: 'scale', who: '서아', situation: '서아는 수업 끝에 선생님 말씀을 듣지 않고 떠들다가, 내일 준비물을 몰라 혼자만 못 가져왔어요.', feeling: '속상함', after: '말씀을 끝까지 들으면 이런 일이 줄어요.' }, target: { level: [3, 5] }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"내 학습 습관 가운데 자랑하고 싶은 것 하나를 말해 볼까요?" 서너 명이 말한다. 이어서 "고치고 싶은 학습 습관은 무엇인지 활동지에 써요." 쓴 것을 다음 시간에 다시 보고 습관이 바뀐 친구 이야기를 함께 읽는다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', basket: '도움 되는 학습 습관', cards: ['쓴 글을 한 번 더 읽어 봐요', '연필을 미리 깎아 둬요', '공책 귀퉁이에 낙서해요'] }, prompt: '공부에 도움이 되는 습관만 골라 보세요.', target: { pick: ['쓴 글을 한 번 더 읽어 봐요', '연필을 미리 깎아 둬요'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '숙제를 하다가 모르는 것이 나왔을 때 알맞은 습관은?', options: ['그냥 비워 두고 덮어요', '표시해 두고 물어봐요', '아무렇게나 써요'], answer: 1, difficulty: 0.1, explain: '표시해 두면 잊지 않고 물어볼 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '나의 학습 습관',
      items: [
        { type: 'table', prompt: '나의 학습 습관을 쓰세요.', columns: ['때', '도움 되는 습관', '고칠 습관'], cells: [['수업 시간', '', ''], ['숙제할 때', '', ''], ['책 읽을 때', '', '']] },
        { type: 'choice', prompt: '숙제할 때 도움 되는 습관에 ○ 하세요.', options: ['책상을 치우고 앉아요', '텔레비전을 켜 두어요', '과자를 먹으며 해요'], answer: '책상을 치우고 앉아요' },
        { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '공부할 때 날마다 하는 일을 ___ 습관이라고 해요.', answer: '학습' },
        { type: 'short', prompt: '고치고 싶은 학습 습관 하나를 쓰세요.' },
      ],
      easy: {
        note: '공부할 때 날마다 하는 일을 떠올려요.',
        items: [
          { type: 'choice', prompt: '수업 시간의 좋은 습관에 ○ 하세요.', options: ['끝까지 들어요', '떠들어요'], answer: '끝까지 들어요' },
          { type: 'choice', prompt: '책을 다 읽으면?', options: ['제자리에 꽂아요', '바닥에 둬요'], answer: '제자리에 꽂아요' },
          { type: 'draw', prompt: '숙제하는 내 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 가지에 초록 테두리가 생기고, 마음 크기는 세 칸이에요.',
      base: '모두 나눈 뒤 확인을 눌러 고쳐요.',
      challenge: '숙제 습관 카드가 여섯 장으로 늘고, 어떻게 할지 고르는 문항에 그럴듯한 보기가 하나 더 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 학습 습관을 \'공부를 잘하는 것\'으로 여긴다 → 잘하는 것이 아니라 날마다 하는 방법이라고 말한다. ② 텔레비전을 켜 두면 더 잘된다고 말한다 → 같은 숙제를 조용할 때와 견주어 걸린 시간을 떠올리게 한다. ③ 모르는 것을 묻는 것을 부끄러워한다 → 표시해 두고 묻는 것이 좋은 습관이라고 칭찬한다.',
  }));

  lessons.push(L(4, {
    title: '습관을 바꾼 친구 이야기 따라가기',
    objective: '습관을 바꾼 친구 이야기의 차례를 정리하고, 습관은 날마다 조금씩 해 보면 바뀔 수 있다는 것을 말할 수 있다.',
    illustration: ART('a paper storybook with four pages showing a child sleeping late, setting an alarm, struggling to wake up, then arriving early at school with a smile', '습관은 바뀔 수 있어요', [
      { motif: 'moon', x: 90, y: 70, s: 0.6 }, { motif: 'house', x: 130, y: 214, color: 'lavender' }, { motif: 'tree', x: 390, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"하준이는 일 학년 때 날마다 늦잠을 잤대요. 이 학년이 된 지금은 어떨까요?" 예상을 두세 명 듣는다. 시연 단추로 이야기 장면 두 장이 차례대로 놓이는 모습을 보여 준다. "하준이는 어떻게 바뀌었을까요? 이야기를 따라가 봐요."',
        student: '나는 일 학년 때보다 무엇이 더 잘 되는지 하나 떠올려 봐요.',
        demo: { tool: 'story', options: { cards: [{ id: 'late', text: '날마다 늦잠을 잤어요', motif: 'moon' }, { id: 'early', text: '일찍 학교에 와요', motif: 'sun' }], slots: 2, shuffle: false }, sequence: [{ order: ['late', 'early'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 하준이 이야기 차례 정하기', minutes: 13, tool: 'story',
            teacher: '"처음에 하준이는 어땠나요? 그다음에 무엇을 하기로 했나요?" 장면 카드를 소리 내어 읽게 한 뒤 놓는다. 셋째 장면 \'처음 며칠은 힘들었어요\'를 빼고 놓는 학생에게 "하루 만에 바로 바뀌었을까요?" 하고 묻는다. 습관은 한 번에 바뀌지 않아도 계속 해 보면 바뀐다는 것을 짚는다.',
            task: '습관을 바꾼 친구 이야기 장면을 차례대로 놓아요.',
            levels: CARD_LV(),
            items: [
              { prompt: '하준이 이야기 장면을 차례대로 놓아 보세요.', toolOptions: { slots: 4, cards: [{ id: 'h1', text: '날마다 늦잠을 잤어요', motif: 'moon' }, { id: 'h2', text: '일찍 자기로 마음먹었어요', motif: 'star' }, { id: 'h3', text: '처음 며칠은 힘들었어요', motif: 'cloud' }, { id: 'h4', text: '이제 일찍 학교에 와요', motif: 'sun' }] },
                target: { order: ['h1', 'h2', 'h3', 'h4'] }, difficulty: 0.1,
                levels: { easy: { prompt: '하준이 이야기 장면 세 장을 차례대로 놓아 보세요.', toolOptions: { slots: 3, cards: [{ id: 'h1', text: '날마다 늦잠을 잤어요', motif: 'moon' }, { id: 'h2', text: '일찍 자기로 마음먹었어요', motif: 'star' }, { id: 'h4', text: '이제 일찍 학교에 와요', motif: 'sun' }] }, target: { order: ['h1', 'h2', 'h4'] } } } },
              { prompt: '서아가 편식 습관을 바꾼 이야기를 차례대로 놓아 보세요.', toolOptions: { slots: 4, cards: [{ id: 'v1', text: '채소를 늘 남겼어요', motif: 'leaf' }, { id: 'v2', text: '한 숟가락만 먹기로 했어요', motif: 'star' }, { id: 'v3', text: '조금씩 더 먹었어요', motif: 'flower' }, { id: 'v4', text: '이제 채소도 잘 먹어요', motif: 'sun' }] },
                target: { order: ['v1', 'v2', 'v3', 'v4'] }, difficulty: 0.15,
                levels: { challenge: { prompt: '서아가 편식 습관을 바꾼 이야기를 차례대로 놓아 보세요. 이야기에 없는 장면이 하나 있어요.', toolOptions: { cards: [{ id: 'v1', text: '채소를 늘 남겼어요', motif: 'leaf' }, { id: 'v2', text: '한 숟가락만 먹기로 했어요', motif: 'star' }, { id: 'v3', text: '조금씩 더 먹었어요', motif: 'flower' }, { id: 'v4', text: '이제 채소도 잘 먹어요', motif: 'sun' }, { id: 'v5', text: '하루 만에 다 먹었어요', motif: 'cloud' }] } } } },
              { prompt: '하준이가 습관을 바꿀 수 있었던 까닭만 골라 보세요.', toolOptions: { mode: 'pick', basket: '바꿀 수 있었던 까닭', cards: ['날마다 같은 때에 잤어요', '힘들어도 그만두지 않았어요', '한 번 해 보고 그만뒀어요'] },
                target: { pick: ['날마다 같은 때에 잤어요', '힘들어도 그만두지 않았어요'] }, difficulty: 0.1,
                predict: { q: '습관은 하루 만에 바뀔까요?', options: ['하루 만에 바뀌어요', '여러 날 걸려요'], answer: 1 },
                conclude: '습관은 여러 날 그만두지 않고 해 보면 조금씩 바뀌어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. "나는 원래 그래"를 바꾸어 말하기', minutes: 13, tool: 'emotion',
            teacher: '"\'나는 원래 그래\'라고 말하면 습관이 바뀔까요?" 친구가 습관을 바꾸려 할 때 해 줄 응원하는 말을 고르게 한다. 놀리는 말을 고른 학생에게 결과 칸의 마음 날씨를 보게 한다. 마지막 문항 뒤에 짝과 내가 바꾸고 싶은 습관을 말로 주고받게 한다.',
            task: '습관을 바꾸려는 친구에게 어떻게 할지 고르고, 짝과 바꾸고 싶은 습관을 말해요.',
            levels: EMO_LV(),
            items: [
              { prompt: '도윤이가 "나는 원래 늦게 자" 하고 말해요. 어떻게 말해 줄까요?', toolOptions: { mode: 'branch', who: '도윤', situation: '도윤이는 늘 늦게 자서 아침에 졸려요. "나는 원래 그래" 하고 말해요.', choices: [
                { id: 'agree', text: '"맞아, 넌 원래 그래"', result: '도윤이는 바꿔 볼 생각을 하지 않아요.', mood: '걱정', why: '이 말을 들으면 바꿔 보고 싶어질까요?' },
                { id: 'cheer', text: '"오늘은 십 분만 일찍 자 볼래?"', result: '도윤이가 해 보겠다고 웃어요.', mood: '신남' },
                { id: 'tease', text: '"잠꾸러기래요" 하고 놀려요', result: '도윤이는 부끄럽고 속상해요.', mood: '속상함', why: '놀림을 들은 도윤이의 마음은 어떨까요?' }] }, target: { choice: 'cheer' }, difficulty: 0.1 },
              { prompt: '습관을 바꾸려는 친구에게 힘이 되는 말만 골라 보세요.', toolOptions: { mode: 'pick', basket: '힘이 되는 말', cards: ['오늘도 해냈구나', '조금씩 하면 돼', '어차피 못 할 거야', '그건 원래 안 바뀌어'] },
                target: { pick: ['오늘도 해냈구나', '조금씩 하면 돼'] }, difficulty: 0.1 },
              { prompt: '짝과 내가 바꾸고 싶은 습관 하나와 첫날 해 볼 일을 말해요. 다 말했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"짝이 바꾸고 싶다고 한 습관을 응원하는 말로 전해 볼까요?" 두세 짝이 앞에서 주고받는다. "다음 시간부터는 고칠 습관 하나를 골라 사흘 동안 지켜 볼 거예요. 무엇으로 할지 집에서 생각해 와요."',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { cards: [{ id: 'e1', text: '물건을 자주 잃어버렸어요', motif: 'cloud' }, { id: 'e2', text: '제자리에 두기로 했어요', motif: 'star' }, { id: 'e3', text: '이제 잘 찾아요', motif: 'sun' }], slots: 3 }, prompt: '지우가 습관을 바꾼 이야기를 차례대로 놓아 보세요.', target: { order: ['e1', 'e2', 'e3'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '습관을 바꾸려면 어떻게 하면 좋을까요?', options: ['하루만 해 봐요', '여러 날 그만두지 않고 해요', '마음만 먹어요'], answer: 1, difficulty: 0.15, explain: '습관은 여러 날 계속해야 조금씩 바뀌어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '습관이 바뀌었어요',
      items: [
        { type: 'figure', wide: true, prompt: '하준이 이야기 장면에 차례대로 1, 2, 3을 쓰세요.', tool: 'story', figures: [{ options: { cards: [{ id: 'h4', text: '이제 일찍 학교에 와요', motif: 'sun' }, { id: 'h1', text: '날마다 늦잠을 잤어요', motif: 'moon' }, { id: 'h2', text: '일찍 자기로 마음먹었어요', motif: 'star' }], slots: 3, shuffle: false }, caption: '' }], answer: '늦잠-마음먹기-일찍 학교에' },
        { type: 'choice', prompt: '습관을 바꾸려는 친구에게 할 말에 ○ 하세요.', options: ['조금씩 하면 돼', '어차피 못 할 거야', '원래 안 바뀌어'], answer: '조금씩 하면 돼' },
        { type: 'blank', prompt: '빈칸을 채우세요.', text: '나는 ___ 습관을 바꾸고 싶어요.' },
        { type: 'short', prompt: '그 습관을 바꾸려고 첫날 해 볼 일을 쓰세요.' },
      ],
      easy: {
        note: '처음 → 마음먹기 → 바뀐 모습 차례예요.',
        items: [
          { type: 'choice', prompt: '습관은 어떻게 바뀌나요?', options: ['조금씩 바뀌어요', '절대 안 바뀌어요'], answer: '조금씩 바뀌어요' },
          { type: 'choice', prompt: '힘이 되는 말에 ○ 하세요.', options: ['오늘도 해냈구나', '넌 원래 그래'], answer: '오늘도 해냈구나' },
          { type: 'draw', prompt: '습관을 바꾼 내 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '이야기 장면이 세 장이고, 맞는 자리에 초록 테두리가 생겨요.',
      base: '장면 네 장을 놓은 뒤 확인을 눌러요.',
      challenge: '이야기에 없는 장면(하루 만에 다 먹었어요)이 섞여 있어 골라내야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 마음만 먹으면 습관이 바로 바뀐다고 여긴다 → \'처음 며칠은 힘들었어요\' 장면을 짚는다. ② "나는 원래 그래"로 바꾸기를 포기한다 → 일 학년 때 못 하던 일을 지금 하게 된 경험을 떠올린다. ③ 짝 말하기에서 친구의 고칠 습관을 놀린다 → 응원하는 말 카드를 칠판에 붙여 두고 그 말로 대답하게 한다.',
  }));

  // ───────────────────────── 5~8차시: 고칠 습관 하나를 사흘 지켜 보기(바른 생활 실천) ─────────────────────────

  lessons.push(L(5, {
    title: '고칠 습관 하나 골라 사흘 지킴 계획 세우기',
    objective: '고칠 습관 하나를 고르고, 사흘 동안 지킬 수 있는 작고 분명한 방법을 정해 말할 수 있다.',
    illustration: ART('a paper calendar strip with three empty boxes, a child holding a crayon and a small note that says one small promise', '사흘 동안 지켜 봐요', [
      { motif: 'star', x: 130, y: 86, s: 0.6 }, { motif: 'flower', x: 110, y: 226, color: 'buttercup' }, { motif: 'tree', x: 400, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"\'앞으로 착하게 살기\'와 \'저녁 아홉 시에 불 끄기\' 가운데 어느 다짐이 지켰는지 더 잘 알 수 있을까요?" 두 다짐을 칠판에 붙이고 손을 들어 고르게 한다. 지켰는지 눈으로 확인할 수 있는 다짐이 좋은 다짐이라는 것을 짚는다. 시연 단추로 고칠 습관 옆에 지킬 방법이 놓이는 모습을 보여 준다.',
        student: '지난 시간에 생각해 온 고칠 습관 하나를 짝에게 말해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '지킬 방법', slots: [{ id: 's1', label: '물을 잘 안 마셔요' }], cards: ['쉬는 시간마다 물 한 컵', '물을 좋아하기'], shuffle: false }, sequence: [{ match: { s1: '쉬는 시간마다 물 한 컵' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 작고 분명한 방법 정하기', minutes: 14, tool: 'mindmap',
            teacher: '"이 방법이면 지켰는지 안 지켰는지 바로 알 수 있나요?" 방법 카드마다 \'언제, 무엇을, 얼마나\'가 들어 있는지 손가락으로 짚게 한다. \'하루에 책 백 권\'처럼 너무 큰 다짐을 고르는 학생에게 "사흘 동안 날마다 할 수 있을까요?" 하고 묻는다. 계획 차례에서 \'색칠\'을 맨 앞에 두는 학생에게는 지키기 전에 색칠할 수 있는지 되묻는다.',
            task: '고칠 습관에 맞는 지킬 방법을 잇고, 사흘 동안 지킬 수 있는 다짐만 골라요.',
            levels: CARD_LV(),
            items: [
              { prompt: '고칠 습관과 알맞은 지킬 방법을 이어 보세요.', toolOptions: { mode: 'match', topic: '지킬 방법', slots: [{ id: 's1', label: '신발을 아무렇게나 벗어요' }, { id: 's2', label: '손을 안 씻고 간식을 먹어요' }, { id: 's3', label: '밤늦게까지 안 자요' }], cards: ['신발 코를 문 쪽으로 놓기', '간식 전에 비누로 손 씻기', '아홉 시에 불 끄기'] },
                target: { match: { s1: '신발 코를 문 쪽으로 놓기', s2: '간식 전에 비누로 손 씻기', s3: '아홉 시에 불 끄기' } }, difficulty: 0.1,
                levels: { easy: { prompt: '고칠 습관과 알맞은 지킬 방법 두 짝을 이어 보세요.', toolOptions: { slots: [{ id: 's1', label: '신발을 아무렇게나 벗어요' }, { id: 's2', label: '손을 안 씻고 간식을 먹어요' }], cards: ['신발 코를 문 쪽으로 놓기', '간식 전에 비누로 손 씻기'] }, target: { match: { s1: '신발 코를 문 쪽으로 놓기', s2: '간식 전에 비누로 손 씻기' } } } } },
              { prompt: '사흘 동안 날마다 지키고 확인할 수 있는 다짐만 골라 보세요.', toolOptions: { mode: 'pick', basket: '사흘 지킴 다짐', cards: ['저녁마다 책 열 쪽 읽기', '아침마다 이불 개기', '앞으로 영원히 착하게 살기', '하루에 책 백 권 읽기'] },
                target: { pick: ['저녁마다 책 열 쪽 읽기', '아침마다 이불 개기'] }, difficulty: 0.2,
                predict: { q: '"착하게 살기"는 지켰는지 바로 알 수 있을까요?', options: ['알 수 있어요', '알기 어려워요'], answer: 1 },
                conclude: '언제, 무엇을, 얼마나 할지 정한 다짐이어야 지켰는지 알 수 있어요.' },
              { prompt: '사흘 지킴 계획을 세우는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', topic: '사흘 지킴 차례', slots: 4, cards: ['고칠 습관 하나 고르기', '지킬 방법 정하기', '날마다 지키기', '지킨 날 표에 색칠하기'] },
                target: { order: ['고칠 습관 하나 고르기', '지킬 방법 정하기', '날마다 지키기', '지킨 날 표에 색칠하기'] }, difficulty: 0.15,
                levels: { challenge: { prompt: '사흘 지킴 계획 차례대로 놓아 보세요. 차례에 들어가지 않는 카드가 하나 있어요.', toolOptions: { cards: ['고칠 습관 하나 고르기', '지킬 방법 정하기', '날마다 지키기', '지킨 날 표에 색칠하기', '미리 사흘 칸을 다 색칠하기'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 첫날을 떠올려 보기', minutes: 12, tool: 'emotion',
            teacher: '"첫날 저녁에 깜빡 잊었어요. 그럼 계획은 끝난 걸까요?" 습관은 하루 만에 바뀌지 않으니 다음 날 다시 하면 된다는 것을 짚는다. 표에 몰래 색칠하는 보기를 고른 학생에게 "그 표를 보면 내가 정말 지켰는지 알 수 있을까요?" 하고 묻는다. 다 마치면 활동지의 내 사흘 지킴표 맨 위에 내 다짐을 쓰게 한다.',
            task: '사흘 지킴 첫날에 생길 수 있는 일을 읽고, 어떻게 할지 골라요.',
            levels: EMO_LV(),
            items: [
              { prompt: '첫날 저녁, 서아가 손 씻기를 깜빡했어요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '서아', situation: '서아는 간식 전에 손 씻기로 다짐했는데, 첫날 저녁에 깜빡했어요.', choices: [
                { id: 'quit', text: '"벌써 틀렸네" 하고 그만둬요', result: '습관은 그대로 남아요.', mood: '속상함', why: '하루 잊었다고 다짐이 끝날까요?' },
                { id: 'again', text: '표는 비워 두고 내일 다시 해요', result: '둘째 날에는 손을 씻고 먹었어요.', mood: '뿌듯함' },
                { id: 'fake', text: '표에 몰래 색칠해요', result: '내가 정말 지켰는지 알 수 없어요.', mood: '걱정', why: '지키지 않은 날을 색칠하면 표가 무엇을 알려 줄까요?' }] }, target: { choice: 'again' }, difficulty: 0.15 },
              { prompt: '잊지 않게 도와주는 방법만 골라 보세요.', toolOptions: { mode: 'pick', basket: '잊지 않는 방법', cards: ['다짐 쪽지를 냉장고에 붙여요', '가족에게 알려 달라고 해요', '잊으면 그냥 넘어가요'] },
                target: { pick: ['다짐 쪽지를 냉장고에 붙여요', '가족에게 알려 달라고 해요'] }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['다짐 쪽지를 냉장고에 붙여요', '가족에게 알려 달라고 해요', '잊으면 그냥 넘어가요', '할 때를 시계 그림으로 그려 둬요', '다짐을 머릿속으로만 생각해요'] }, target: { pick: ['다짐 쪽지를 냉장고에 붙여요', '가족에게 알려 달라고 해요', '할 때를 시계 그림으로 그려 둬요'] }, prompt: '잊지 않게 도와주는 방법만 모두 골라 보세요.' } } },
              { prompt: '두 다짐에 어울리는 마음 카드를 놓아 보세요.', toolOptions: { cards: ['설렘', '걱정', '화남'], slots: [{ id: 's1', label: '처음 해 보는 다짐이라 두근거려요' }, { id: 's2', label: '내가 잘 지킬 수 있을지 모르겠어요' }] },
                target: { match: { s1: '설렘', s2: '걱정' } }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"내 다짐을 \'언제, 무엇을, 얼마나\'에 맞춰 한 문장으로 말해 볼까요?" 대여섯 명이 말하고, 다짐이 너무 크면 친구들이 줄여 주는 말을 건넨다. 오늘 저녁부터 사흘 동안 지키고, 지킨 날은 그날 밤 표에 색칠해 온다고 약속한다. 지킴표는 활동지 맨 아래 칸을 쓴다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '지킬 방법', slots: [{ id: 'e1', label: '책상 위가 늘 어지러워요' }, { id: 'e2', label: '물을 잘 안 마셔요' }], cards: ['하교 전에 책상 위 비우기', '점심 뒤에 물 한 컵'] }, prompt: '도윤이의 고칠 습관에 알맞은 지킬 방법을 이어 보세요.', target: { match: { e1: '하교 전에 책상 위 비우기', e2: '점심 뒤에 물 한 컵' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '지킴표에는 언제 색칠할까요?', options: ['계획을 세운 날 사흘 칸을 한꺼번에', '지킨 날마다 그날', '사흘이 끝나고 기억나는 대로'], answer: 1, difficulty: 0.15, explain: '지킨 날마다 그날 색칠해야 표가 정확해요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '나의 사흘 지킴 계획',
      items: [
        { type: 'blank', prompt: '내 다짐을 쓰세요.', text: '나는 ___에 ___을(를) 할 거예요.' },
        { type: 'choice', prompt: '지켰는지 바로 알 수 있는 다짐에 ○ 하세요.', options: ['아침마다 이불 개기', '착하게 살기', '좋은 어린이 되기'], answer: '아침마다 이불 개기' },
        { type: 'check', prompt: '잊지 않으려고 내가 해 볼 방법에 ✓ 하세요.', options: ['쪽지 붙이기', '가족에게 알려 달라고 하기', '시계 그림 그리기'] },
        { type: 'table', prompt: '사흘 지킴표 — 지킨 날에 색칠하세요.', columns: ['첫째 날', '둘째 날', '셋째 날'], cells: [['', '', '']] },
      ],
      easy: {
        note: '언제, 무엇을 할지 정해요.',
        items: [
          { type: 'short', prompt: '내가 고칠 습관을 쓰세요.' },
          { type: 'choice', prompt: '좋은 다짐에 ○ 하세요.', options: ['아홉 시에 불 끄기', '영원히 착하게 살기'], answer: '아홉 시에 불 끄기' },
          { type: 'table', prompt: '지킨 날에 색칠하세요.', columns: ['첫째 날', '둘째 날', '셋째 날'], cells: [['', '', '']] },
        ],
      },
    },
    differentiation: {
      easy: '짝 잇기가 두 짝이고, 맞는 칸에 초록 테두리가 생겨요. 마음 크기는 세 칸이에요.',
      base: '모두 잇고 고른 뒤 확인을 눌러요.',
      challenge: '계획 차례에 함정 카드가 있고, 잊지 않는 방법을 다섯 장에서 모두 골라야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 마음만 먹으면 하루 만에 습관이 바뀐다고 여긴다 → 첫날 잊어도 다음 날 다시 한다는 것을 미리 약속한다. ② 다짐이 너무 크거나 막연하다(착하게 살기) → \'언제, 무엇을, 얼마나\' 세 칸으로 줄여 쓰게 한다. ③ 집에서 도와줄 어른이 없는 학생도 있다 → 교실에서 하교 전 지키는 다짐(책상 비우기)도 고를 수 있게 한다.',
  }));

  lessons.push(L(6, {
    title: '사흘 지킴표에 지킨 날 색칠해 나타내기',
    objective: '친구의 사흘 기록을 읽고 지킨 날만 골라 색칠하며, 색칠한 칸 수를 그래프로 나타낼 수 있다.',
    illustration: ART('three paper charts with three boxes each, some boxes colored with crayon and some left blank, children comparing their charts', '지킨 날에 색칠해요', [
      { motif: 'sun', x: 150, y: 112, s: 0.4 }, { motif: 'sun', x: 240, y: 112, s: 0.4 }, { motif: 'cloud', x: 330, y: 112, s: 0.5 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"사흘 지킴표를 가져왔나요? 색칠한 칸이 몇 개인지 손가락으로 세어 볼까요?" 다 못 지킨 학생도 표를 가져온 것을 칭찬한다. 시연 단추로 민지의 첫날 기록이 \'색칠해요\' 칸에 놓이는 모습을 보여 준다. "색칠은 지킨 날에만 해요. 그래야 표가 거짓말을 하지 않아요."',
        student: '내 사흘 지킴표에서 색칠한 칸을 세어 짝에게 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '민지의 사흘', slots: ['색칠해요', '비워 둬요'], cards: ['첫째 날: 이불을 갰어요', '둘째 날: 늦어서 못 갰어요'], shuffle: false }, sequence: [{ sort: { '색칠해요': ['첫째 날: 이불을 갰어요'], '비워 둬요': ['둘째 날: 늦어서 못 갰어요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 기록 읽고 색칠할 날 고르기', minutes: 12, tool: 'mindmap',
            teacher: '"준호의 다짐은 \'신발 코를 문 쪽으로\'예요. 둘째 날 기록을 보면 지켰나요?" 다짐과 기록을 하나씩 견주게 한다. 서아의 물 마시기는 다짐이 세 컵이라 한 컵만 마신 날은 색칠하지 않는다는 것을 짚는다. "조금 했으니 색칠해도 되지 않아요?"라는 학생에게는 다짐에 정한 만큼을 했는지가 기준이라고 말한다.',
            task: '친구의 다짐과 기록을 견주어 색칠할 날과 비워 둘 날로 나누어요.',
            levels: CARD_LV(),
            items: [
              { prompt: '준호의 다짐은 "신발 코를 문 쪽으로"예요. 사흘 기록을 나누어 보세요.', toolOptions: { topic: '준호의 사흘', slots: ['색칠해요', '비워 둬요'], cards: ['첫째 날: 신발 코를 문 쪽으로 뒀어요', '둘째 날: 신발이 뒤집혀 있었어요', '셋째 날: 동생 신발까지 정리했어요'] },
                target: { sort: { '색칠해요': ['첫째 날: 신발 코를 문 쪽으로 뒀어요', '셋째 날: 동생 신발까지 정리했어요'], '비워 둬요': ['둘째 날: 신발이 뒤집혀 있었어요'] } }, difficulty: 0.1 },
              { prompt: '서아의 다짐은 "물 세 컵 마시기"예요. 사흘 기록을 나누어 보세요.', toolOptions: { topic: '서아의 사흘', slots: ['색칠해요', '비워 둬요'], cards: ['첫째 날: 세 컵 마셨어요', '둘째 날: 한 컵 마셨어요', '셋째 날: 네 컵 마셨어요'] },
                target: { sort: { '색칠해요': ['첫째 날: 세 컵 마셨어요', '셋째 날: 네 컵 마셨어요'], '비워 둬요': ['둘째 날: 한 컵 마셨어요'] } }, difficulty: 0.2,
                predict: { q: '한 컵 마신 둘째 날은 색칠할까요?', options: ['색칠해요', '비워 둬요'], answer: 1 },
                conclude: '다짐에서 정한 만큼 했을 때만 색칠해요.' },
              { prompt: '하준이의 다짐은 "아홉 시에 불 끄기"예요. 사흘 기록을 나누어 보세요.', toolOptions: { topic: '하준이의 사흘', slots: ['색칠해요', '비워 둬요'], cards: ['첫째 날: 열 시에 잤어요', '둘째 날: 아홉 시에 불을 껐어요', '셋째 날: 여덟 시 반에 잤어요'] },
                target: { sort: { '색칠해요': ['둘째 날: 아홉 시에 불을 껐어요', '셋째 날: 여덟 시 반에 잤어요'], '비워 둬요': ['첫째 날: 열 시에 잤어요'] } }, difficulty: 0.25,
                levels: { challenge: { prompt: '하준이의 다짐은 "아홉 시에 불 끄기"예요. 다섯 날 기록을 나누어 보세요.', toolOptions: { cards: ['첫째 날: 열 시에 잤어요', '둘째 날: 아홉 시에 불을 껐어요', '셋째 날: 여덟 시 반에 잤어요', '넷째 날: 아홉 시 반에 잤어요', '다섯째 날: 아홉 시에 불을 껐어요'] },
                  target: { sort: { '색칠해요': ['둘째 날: 아홉 시에 불을 껐어요', '셋째 날: 여덟 시 반에 잤어요', '다섯째 날: 아홉 시에 불을 껐어요'], '비워 둬요': ['첫째 날: 열 시에 잤어요', '넷째 날: 아홉 시 반에 잤어요'] } } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 지킨 날 수를 그래프로', minutes: 14, tool: 'chart',
            teacher: '"민지는 사흘 가운데 며칠 색칠했나요? 그만큼 ○를 그려요." 표의 수만큼 ○를 놓게 한다. 그래프가 다 되면 "누가 가장 많이 지켰는지 한눈에 보이나요?" 하고 묻는다. 그래프는 누가 잘했는지 겨루려는 것이 아니라 내 기록을 눈에 보이게 하려는 것이라는 점을 꼭 말한다.',
            task: '친구들이 색칠한 날 수를 보고 ○ 그래프를 완성하고 읽어요.',
            levels: {
              easy: { showValues: true },
              base: {},
              challenge: {},
            },
            items: [
              { prompt: '표를 보고 친구들이 지킨 날 수만큼 ○를 그려 그래프를 완성하세요.', toolOptions: { type: 'picture', title: '사흘 동안 지킨 날', data: [['민지', 3], ['준호', 2], ['서아', 1]], unit: '날', xLabel: '이름', yLabel: '지킨 날', icon: 'circle', icons: [{ value: 1, name: '1날' }] }, target: { build: true }, difficulty: 0.1,
                levels: { challenge: { prompt: '표를 보고 네 친구가 지킨 날 수만큼 ○를 그려 그래프를 완성하세요.', toolOptions: { data: [['민지', 3], ['준호', 2], ['서아', 1], ['도윤', 2]], showTable: true } } } },
              { prompt: '그래프를 보고, 사흘을 모두 지킨 친구를 골라 보세요.', toolOptions: { type: 'picture', mode: 'read', title: '사흘 동안 지킨 날', data: [['지우', 2], ['하준', 3], ['도윤', 1]], unit: '날', icon: 'circle', icons: [{ value: 1, name: '1날' }], question: '사흘을 모두 지킨 친구는?', choices: ['지우', '하준', '도윤'] }, target: { pick: 1 }, difficulty: 0.1 },
              { prompt: '그래프를 보고 표의 빈칸에 지킨 날 수를 쓰세요.', toolOptions: { type: 'picture', mode: 'read', title: '사흘 동안 지킨 날', data: [['민지', 1], ['준호', 3], ['서아', 2]], unit: '날', icon: 'circle', icons: [{ value: 1, name: '1날' }], showTable: true, tableBlanks: [0, 1, 2] }, target: { table: true }, difficulty: 0.15,
                levels: { easy: { prompt: '그래프를 보고 표의 빈칸 하나에 지킨 날 수를 쓰세요.', toolOptions: { tableBlanks: [1] } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"내 지킴표의 색칠한 칸을 세어 우리 반 ○ 그래프 판에 붙임 딱지를 붙여 볼까요?" 칠판 그래프에는 이름 대신 다짐 종류(잠·물·정리…)로 줄을 만든다. 하나도 못 지킨 학생도 다시 해 볼 수 있다고 말해 준다. 다음 시간에는 지키기 어려운 날을 이겨 내는 방법을 찾는다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '지우의 사흘', slots: ['색칠해요', '비워 둬요'], cards: ['첫째 날: 책 열 쪽 읽었어요', '둘째 날: 책 다섯 쪽 읽었어요', '셋째 날: 책 열두 쪽 읽었어요'] }, prompt: '지우의 다짐은 "책 열 쪽 읽기"예요. 사흘 기록을 나누어 보세요.', target: { sort: { '색칠해요': ['첫째 날: 책 열 쪽 읽었어요', '셋째 날: 책 열두 쪽 읽었어요'], '비워 둬요': ['둘째 날: 책 다섯 쪽 읽었어요'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '하루를 못 지킨 칸은 어떻게 할까요?', options: ['색칠해요', '비워 두고 다음 날 다시 해요', '표를 버려요'], answer: 1, difficulty: 0.1, explain: '비워 둔 칸은 다시 해 볼 날을 알려 줘요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '사흘 지킴표와 그래프',
      items: [
        { type: 'table', prompt: '내 사흘 지킴표 — 지킨 날에 색칠하세요.', columns: ['다짐', '첫째 날', '둘째 날', '셋째 날'], cells: [['', '', '', '']] },
        { type: 'table', prompt: '지킨 날 수만큼 ○를 그리세요.', columns: ['이름', '○'], cells: [['나', ''], ['짝', '']] },
        { type: 'choice', prompt: '"물 세 컵" 다짐에서 두 컵 마신 날은?', options: ['색칠해요', '비워 둬요'], answer: '비워 둬요' },
        { type: 'short', prompt: '내가 색칠한 칸은 몇 개인지 쓰고, 그때 마음을 쓰세요.' },
      ],
      easy: {
        note: '지킨 날에만 색칠해요.',
        items: [
          { type: 'table', prompt: '지킨 날에 색칠하세요.', columns: ['첫째 날', '둘째 날', '셋째 날'], cells: [['', '', '']] },
          { type: 'choice', prompt: '못 지킨 날은?', options: ['비워 둬요', '색칠해요'], answer: '비워 둬요' },
          { type: 'short', prompt: '색칠한 칸은 몇 개인가요?' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 그래프에 지금 수가 보여요. 표 빈칸은 하나만 채워요.',
      base: '세 친구의 그래프를 그리고 읽어요.',
      challenge: '하준이 기록이 다섯 날로 늘고, 그래프는 네 친구를 그려요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 조금이라도 했으면 색칠한다 → 다짐에서 정한 만큼(세 컵, 열 쪽)과 견주게 한다. ② 그래프를 친구와 겨루는 순위로 여긴다 → 칠판 그래프는 이름 대신 다짐 종류로 만들고, 내 기록을 보는 도구라고 말한다. ③ ○ 수와 날 수를 다르게 센다 → 한 칸에 ○ 하나씩 손가락으로 짚으며 센다.',
  }));

  lessons.push(L(7, {
    title: '지키기 어려운 날을 이겨 내는 방법 찾기',
    objective: '다짐을 지키기 어려운 까닭에 맞는 도움 방법을 골라 잇고, 친구에게 응원하는 말을 건넬 수 있다.',
    illustration: ART('a child at home looking at a sticky note on the fridge, a small alarm clock and a family member giving a thumbs up', '어려운 날에도 다시', [
      { motif: 'house', x: 120, y: 214, color: 'peach' }, { motif: 'star', x: 380, y: 86, s: 0.6 }, { motif: 'flower', x: 400, y: 226 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"사흘 동안 지키면서 가장 어려웠던 날은 언제였나요? 왜 어려웠나요?" 까닭을 칠판에 \'깜빡했어요\', \'하기 싫었어요\', \'시간이 없었어요\'처럼 모아 적는다. 시연 단추로 \'깜빡했어요\' 옆에 \'쪽지 붙이기\'가 놓이는 모습을 보여 준다. 어려운 까닭에 따라 도움 방법도 다르다는 것을 짚는다.',
        student: '내가 다짐을 지키기 어려웠던 까닭 하나를 짝에게 말해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '이럴 땐 이렇게', slots: [{ id: 's1', label: '깜빡했어요' }], cards: ['잘 보이는 곳에 쪽지 붙이기', '그만두기'], shuffle: false }, sequence: [{ match: { s1: '잘 보이는 곳에 쪽지 붙이기' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 어려움에 맞는 방법 찾기', minutes: 14, tool: 'mindmap',
            teacher: '"깜빡하는 친구에게 \'더 열심히 해\'라고 하면 도움이 될까요?" 어려움마다 무엇이 문제인지 먼저 말하고 방법을 잇게 한다. 도움이 안 되는 방법을 고르는 학생에게 "그렇게 하면 다음 날은 어떻게 될까요?" 하고 묻는다. 못 지킨 날을 몰래 색칠하는 것은 방법이 아니라는 것도 짚는다.',
            task: '다짐을 지키기 어려운 까닭에 맞는 방법을 잇고, 도움이 되는 방법과 안 되는 방법을 나누어요.',
            levels: CARD_LV(),
            items: [
              { prompt: '지키기 어려운 까닭과 알맞은 도움 방법을 이어 보세요.', toolOptions: { mode: 'match', topic: '이럴 땐 이렇게', slots: [{ id: 's1', label: '할 일을 깜빡 잊어요' }, { id: 's2', label: '놀다 보면 시간이 없어요' }, { id: 's3', label: '혼자 하면 심심해요' }], cards: ['알림 쪽지를 붙여요', '할 때를 미리 정해요', '가족과 같이 해요'] },
                target: { match: { s1: '알림 쪽지를 붙여요', s2: '할 때를 미리 정해요', s3: '가족과 같이 해요' } }, difficulty: 0.15,
                levels: { easy: { prompt: '지키기 어려운 까닭과 도움 방법 두 짝을 이어 보세요.', toolOptions: { slots: [{ id: 's1', label: '할 일을 깜빡 잊어요' }, { id: 's2', label: '놀다 보면 시간이 없어요' }], cards: ['알림 쪽지를 붙여요', '할 때를 미리 정해요'] }, target: { match: { s1: '알림 쪽지를 붙여요', s2: '할 때를 미리 정해요' } } } } },
              { prompt: '다짐 지키기에 도움이 되는 방법과 안 되는 방법으로 나누어 보세요.', toolOptions: { topic: '어려운 날에는', slots: ['도움이 돼요', '도움이 안 돼요'], cards: ['알람을 맞춰 둬요', '다 하면 나를 칭찬해요', '어려우면 바로 그만둬요', '못 한 날도 색칠해요'] },
                target: { sort: { '도움이 돼요': ['알람을 맞춰 둬요', '다 하면 나를 칭찬해요'], '도움이 안 돼요': ['어려우면 바로 그만둬요', '못 한 날도 색칠해요'] } }, difficulty: 0.15,
                levels: { challenge: { prompt: '다짐 지키기에 도움이 되는 방법과 안 되는 방법으로 여섯 장을 나누어 보세요.', toolOptions: { cards: ['알람을 맞춰 둬요', '다 하면 나를 칭찬해요', '어려우면 바로 그만둬요', '못 한 날도 색칠해요', '짝과 서로 물어봐 줘요', '다짐을 더 크게 바꿔요'] },
                  target: { sort: { '도움이 돼요': ['알람을 맞춰 둬요', '다 하면 나를 칭찬해요', '짝과 서로 물어봐 줘요'], '도움이 안 돼요': ['어려우면 바로 그만둬요', '못 한 날도 색칠해요', '다짐을 더 크게 바꿔요'] } } } } },
              { prompt: '하루를 못 지킨 뒤 할 일을 차례대로 놓아 보세요.', toolOptions: { mode: 'order', topic: '못 지킨 다음에는', slots: 3, cards: ['그 칸은 비워 둬요', '왜 못 했는지 떠올려요', '다음 날 다시 해요'] },
                target: { order: ['그 칸은 비워 둬요', '왜 못 했는지 떠올려요', '다음 날 다시 해요'] }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 서로 응원하기', minutes: 12, tool: 'emotion',
            teacher: '"짝이 \'오늘은 못 했어\' 하고 말하면 어떤 말을 해 줄까요?" 응원하는 말과 마음이 상하는 말을 견주게 한다. 마지막 문항에서는 실제로 짝과 마주 보고 내 어려움을 말하고, 짝은 응원하는 말 하나를 건넨다. 놀리는 말이 나오면 멈추고 그 말을 들은 마음 날씨를 묻는다.',
            task: '다짐을 못 지킨 친구에게 할 말을 고르고, 짝과 서로 응원하는 말을 주고받아요.',
            levels: EMO_LV(),
            items: [
              { prompt: '친구의 말에 어울리는 마음 카드를 놓아 보세요.', toolOptions: { cards: ['고마움', '속상함', '기쁨'], slots: [{ id: 's1', label: '"내일 다시 하면 돼" 하고 말해 줬어요' }, { id: 's2', label: '"그럴 줄 알았어" 하고 웃었어요' }] },
                target: { match: { s1: ['고마움', '기쁨'], s2: '속상함' } }, difficulty: 0.1 },
              { prompt: '도윤이가 "둘째 날 못 했어" 하고 시무룩해요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '도윤', situation: '도윤이는 둘째 날 다짐을 지키지 못해 시무룩해요.', choices: [
                { id: 'tease', text: '"너는 맨날 못 하잖아"', result: '도윤이는 다짐을 그만두고 싶어져요.', mood: '속상함', why: '이 말을 들으면 다시 해 보고 싶어질까요?' },
                { id: 'cheer', text: '"첫째 날은 했잖아. 내일 같이 해 보자"', result: '도윤이가 셋째 날에는 지켰어요.', mood: '뿌듯함' },
                { id: 'ignore', text: '못 들은 척해요', result: '도윤이는 혼자라고 느껴요.', mood: '외로움', why: '말을 걸었는데 대답이 없으면 어떤 마음일까요?' }] }, target: { choice: 'cheer' }, difficulty: 0.15 },
              { prompt: '짝에게 내가 지키기 어려웠던 까닭을 말하고, 짝이 건넨 응원하는 말을 들어요. 서로 다 했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 찾은 방법 가운데 내 다짐에 써 보고 싶은 방법은 무엇인가요?" 대여섯 명이 말한다. 짝에게 들은 응원하는 말을 활동지에 옮겨 적게 한다. 이번 주에 사흘 지킴을 한 번 더 해 보고, 써 본 방법이 도움이 되었는지 살펴보자고 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '이럴 땐 이렇게', slots: [{ id: 'e1', label: '아침에 일어나기 힘들어요' }, { id: 'e2', label: '숙제가 있는 줄 잊어요' }], cards: ['알람을 맞춰요', '알림장을 꼭 펼쳐 봐요'] }, prompt: '어려운 까닭과 도움 방법을 이어 보세요.', target: { match: { e1: '알람을 맞춰요', e2: '알림장을 꼭 펼쳐 봐요' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '다짐을 하루 못 지킨 짝에게 할 알맞은 말은?', options: ['"내일 같이 다시 해 보자"', '"역시 못 하는구나"', '"나는 다 했는데"'], answer: 0, difficulty: 0.05, explain: '응원하는 말을 들으면 다시 해 볼 힘이 나요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '어려운 날을 이겨 내는 방법',
      items: [
        { type: 'figure', wide: true, prompt: '어려운 까닭과 도움 방법을 선으로 이으세요.', tool: 'mindmap', figures: [{ options: { mode: 'match', topic: '이럴 땐 이렇게', slots: [{ id: 's1', label: '깜빡 잊어요' }, { id: 's2', label: '시간이 없어요' }], cards: ['할 때를 미리 정해요', '알림 쪽지를 붙여요'] }, caption: '' }], answer: '깜빡 잊어요-알림 쪽지, 시간이 없어요-할 때를 미리 정해요' },
        { type: 'check', prompt: '내가 써 볼 방법에 ✓ 하세요.', options: ['알림 쪽지', '알람 맞추기', '가족과 같이 하기', '짝과 서로 물어봐 주기'] },
        { type: 'short', prompt: '짝이 해 준 응원하는 말을 쓰세요.' },
        { type: 'short', prompt: '내 다짐을 지키기 어려웠던 까닭을 쓰세요.' },
      ],
      easy: {
        note: '어려운 까닭에 맞는 방법을 골라요.',
        items: [
          { type: 'choice', prompt: '깜빡 잊을 때 좋은 방법에 ○ 하세요.', options: ['쪽지 붙이기', '그만두기'], answer: '쪽지 붙이기' },
          { type: 'choice', prompt: '응원하는 말에 ○ 하세요.', options: ['내일 다시 하자', '그럴 줄 알았어'], answer: '내일 다시 하자' },
          { type: 'short', prompt: '짝이 해 준 응원하는 말을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '짝 잇기가 두 짝이고, 맞는 칸에 초록 테두리가 생겨요. 마음 크기는 세 칸이에요.',
      base: '세 짝을 잇고 방법을 나눈 뒤 확인을 눌러요.',
      challenge: '방법 카드가 여섯 장으로 늘고, 그럴듯하지만 도움이 안 되는 방법(다짐을 더 크게 바꾸기)이 섞여 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 하루 못 지키면 다짐이 끝났다고 여긴다 → 비워 둔 칸 다음에 다시 하는 차례를 칠판에 붙여 둔다. ② 어려움과 상관없는 방법(더 열심히 해)을 고른다 → 무엇이 문제인지 먼저 말하게 한다. ③ 짝 응원 활동에서 비교하는 말(나는 다 했는데)이 나온다 → 응원하는 말 세 가지를 칠판에 적어 두고 고르게 한다.',
  }));

  lessons.push(L(8, {
    title: '가족과 함께 저녁 책 읽기 습관 도전하기',
    objective: '저녁 책 읽기 습관을 지키는 차례를 정하고, 내가 할 일과 가족에게 부탁할 일을 나누어 계획할 수 있다.',
    illustration: ART('a warm paper living room in the evening with a lamp, a child and an adult reading picture books together, a small chart on the wall', '저녁 책 읽기 도전', [
      { motif: 'moon', x: 90, y: 70, s: 0.7 }, { motif: 'star', x: 160, y: 60, s: 0.4 }, { motif: 'house', x: 380, y: 214, color: 'lavender' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"저녁에 책을 읽으려는데 텔레비전 소리가 크게 나면 어떨까요?" 경험을 두세 명 듣는다. "오늘은 학습 습관 하나를 가족과 함께 사흘 동안 지켜 보는 계획을 세워요. 함께할 가족은 할머니, 형, 이모, 누구든 괜찮아요." 시연 단추로 저녁 책 읽기 장면이 차례대로 놓이는 모습을 보여 준다.',
        student: '저녁에 함께 책을 읽고 싶은 사람을 떠올려 봐요. 함께할 사람이 없으면 인형이나 교실 친구에게 읽어 줘도 돼요.',
        demo: { tool: 'story', options: { cards: [{ id: 'd1', text: '책을 골라요', motif: 'star' }, { id: 'd2', text: '함께 읽어요', motif: 'moon' }], slots: 2, shuffle: false }, sequence: [{ order: ['d1', 'd2'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 저녁 책 읽기 차례 정하기', minutes: 13, tool: 'story',
            teacher: '"책을 다 읽기 전에 지킴표에 색칠할 수 있을까요?" 장면 카드의 차례를 말로 따라가게 한다. 둘째 문항에서 \'제자리에 꽂아요\'를 빼먹는 학생에게 다음 날 그 책을 찾을 수 있을지 묻는다. 읽은 이야기를 말해 주는 것이 책을 기억하는 데 도움이 된다는 것을 덧붙인다.',
            task: '저녁 책 읽기 습관을 지키는 장면을 차례대로 놓아요.',
            levels: CARD_LV(),
            items: [
              { prompt: '지우의 저녁 책 읽기 장면을 차례대로 놓아 보세요.', toolOptions: { slots: 4, cards: [{ id: 'r1', text: '읽을 책을 골라요', motif: 'star' }, { id: 'r2', text: '십 분 동안 읽어요', motif: 'moon' }, { id: 'r3', text: '읽은 이야기를 말해요', motif: 'flower' }, { id: 'r4', text: '지킴표에 색칠해요', motif: 'sun' }] },
                target: { order: ['r1', 'r2', 'r3', 'r4'] }, difficulty: 0.1,
                levels: { easy: { prompt: '지우의 저녁 책 읽기 장면 세 장을 차례대로 놓아 보세요.', toolOptions: { slots: 3, cards: [{ id: 'r1', text: '읽을 책을 골라요', motif: 'star' }, { id: 'r2', text: '십 분 동안 읽어요', motif: 'moon' }, { id: 'r4', text: '지킴표에 색칠해요', motif: 'sun' }] }, target: { order: ['r1', 'r2', 'r4'] } } } },
              { prompt: '책을 꺼내서 다시 꽂을 때까지 차례대로 놓아 보세요.', toolOptions: { slots: 4, cards: [{ id: 'p1', text: '책꽂이에서 책을 꺼내요', motif: 'house' }, { id: 'p2', text: '첫 쪽을 펼쳐요', motif: 'sun' }, { id: 'p3', text: '끝까지 읽어요', motif: 'star' }, { id: 'p4', text: '책을 제자리에 꽂아요', motif: 'leaf' }] },
                target: { order: ['p1', 'p2', 'p3', 'p4'] }, difficulty: 0.15,
                levels: { challenge: { prompt: '책을 꺼내서 다시 꽂을 때까지 차례대로 놓아 보세요. 차례에 들어가지 않는 장면이 하나 있어요.', toolOptions: { cards: [{ id: 'p1', text: '책꽂이에서 책을 꺼내요', motif: 'house' }, { id: 'p2', text: '첫 쪽을 펼쳐요', motif: 'sun' }, { id: 'p3', text: '끝까지 읽어요', motif: 'star' }, { id: 'p4', text: '책을 제자리에 꽂아요', motif: 'leaf' }, { id: 'p5', text: '게임기를 켜요', motif: 'cloud' }] } } } },
              { prompt: '서아가 받아쓰기 연습 습관을 지킨 장면을 차례대로 놓아 보세요.', toolOptions: { slots: 3, cards: [{ id: 'w1', text: '알림장에서 낱말을 찾아요', motif: 'leaf' }, { id: 'w2', text: '낱말을 세 번 써요', motif: 'star' }, { id: 'w3', text: '가족이 불러 주면 받아써요', motif: 'flower' }] },
                target: { order: ['w1', 'w2', 'w3'] }, difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 내 몫과 가족에게 부탁할 몫', minutes: 13, tool: 'mindmap',
            teacher: '"책 읽기 습관은 누구의 습관인가요? 그럼 책을 고르는 일은 누가 할까요?" 내가 할 일과 함께하는 가족에게 부탁할 일을 나누게 한다. 모든 일을 가족에게 맡기는 학생에게 "그럼 그것은 누구의 습관이 될까요?" 하고 묻는다. 마지막 문항은 가족과 함께 지킬 다짐을 실제로 정해 활동지에 쓴다.',
            task: '책 읽기 습관에서 내가 할 일과 가족에게 부탁할 일을 나누고, 함께 지킬 다짐을 정해요.',
            levels: CARD_LV(),
            items: [
              { prompt: '책 읽기 습관에서 내가 할 일과 가족에게 부탁할 일로 나누어 보세요.', toolOptions: { topic: '저녁 책 읽기', slots: ['내가 할 일', '가족에게 부탁할 일'], cards: ['읽을 책 고르기', '소리 내어 읽기', '읽을 시간 알려 주기', '내 이야기 들어 주기'] },
                target: { sort: { '내가 할 일': ['읽을 책 고르기', '소리 내어 읽기'], '가족에게 부탁할 일': ['읽을 시간 알려 주기', '내 이야기 들어 주기'] } }, difficulty: 0.15 },
              { prompt: '함께 책 읽는 사흘 동안 지키면 좋은 약속만 골라 보세요.', toolOptions: { mode: 'pick', basket: '함께 지킬 약속', cards: ['읽는 동안 텔레비전 끄기', '같은 때에 날마다 읽기', '다 읽은 척하기', '어려운 책만 고르기'] },
                target: { pick: ['읽는 동안 텔레비전 끄기', '같은 때에 날마다 읽기'] }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['읽는 동안 텔레비전 끄기', '같은 때에 날마다 읽기', '다 읽은 척하기', '어려운 책만 고르기', '읽은 쪽에 책갈피 꽂기', '하루에 다섯 권 읽기'] }, target: { pick: ['읽는 동안 텔레비전 끄기', '같은 때에 날마다 읽기', '읽은 쪽에 책갈피 꽂기'] }, prompt: '함께 책 읽는 사흘 동안 지키면 좋은 약속만 모두 골라 보세요.' } } },
              { prompt: '함께 지킬 다짐을 정해 활동지 사흘 지킴표 맨 위에 쓰세요. 다 썼으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"누구와 함께, 언제, 몇 분 동안 읽을 건가요?" 서너 명이 계획을 말한다. 집에서 함께할 사람이 없는 학생은 아침 독서 시간에 교실에서 사흘 지킴을 할 수 있다고 따로 알려 준다. 사흘 뒤 지킴표를 가져와 다음 차시에 함께 본다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { cards: [{ id: 'e1', text: '읽을 책을 골라요', motif: 'star' }, { id: 'e2', text: '함께 읽어요', motif: 'moon' }, { id: 'e3', text: '책을 꽂아 둬요', motif: 'leaf' }], slots: 3 }, prompt: '도윤이가 할머니와 책 읽은 장면을 차례대로 놓아 보세요.', target: { order: ['e1', 'e2', 'e3'] }, difficulty: 0.05 },
          { type: 'choice', prompt: '책 읽기 습관에서 내가 할 일은?', options: ['읽을 책 고르기', '가족이 대신 읽어 주기만 하기', '가족이 표에 색칠해 주기'], answer: 0, difficulty: 0.15, explain: '습관은 내가 지키는 것이라 책 고르기와 읽기는 내 몫이에요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '가족과 함께 책 읽기',
      items: [
        { type: 'blank', prompt: '우리 집 책 읽기 계획을 쓰세요.', text: '나는 ___와(과) 함께 ___에 ___분 동안 책을 읽어요.' },
        { type: 'table', prompt: '사흘 지킴표 — 읽은 날에 책 제목을 쓰세요.', columns: ['첫째 날', '둘째 날', '셋째 날'], cells: [['', '', '']] },
        { type: 'check', prompt: '함께 지킬 약속에 ✓ 하세요.', options: ['텔레비전 끄기', '같은 때에 읽기', '책갈피 꽂기'] },
        { type: 'short', prompt: '함께 읽은 가족이 해 준 말을 쓰세요.' },
      ],
      easy: {
        note: '책 고르기 → 읽기 → 색칠하기!',
        items: [
          { type: 'short', prompt: '함께 읽을 사람을 쓰세요.' },
          { type: 'choice', prompt: '읽는 동안 텔레비전은?', options: ['꺼요', '켜요'], answer: '꺼요' },
          { type: 'table', prompt: '읽은 날에 색칠하세요.', columns: ['첫째 날', '둘째 날', '셋째 날'], cells: [['', '', '']] },
        ],
      },
    },
    differentiation: {
      easy: '장면이 세 장이고, 맞는 자리에 초록 테두리가 생겨요.',
      base: '장면 네 장을 놓고, 내 몫과 가족 몫을 나누어요.',
      challenge: '차례에 들어가지 않는 장면을 골라내고, 약속 여섯 장에서 알맞은 것을 모두 골라요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 가족이 다 해 주는 것을 함께하는 습관으로 여긴다 → 책 고르기·읽기는 내 몫이라고 나눈다. ② 다 읽은 책을 아무 데나 둔다 → 제자리에 꽂아야 다음 날 이어 읽을 수 있다는 것을 짚는다. ③ 가족 구성은 집마다 다르다 → \'엄마·아빠\'로 정하지 말고 함께하는 사람 누구나라고 말한다. 함께할 사람이 없는 학생은 교실 아침 독서로 대신한다.',
  }));

  // ───────────────────────── 9~12차시: 지킴표 돌아보기와 3학년에 이어 갈 습관(성찰과 습관화) ─────────────────────────

  lessons.push(L(9, {
    title: '한 주 기록 그래프를 읽고 잘 지킨 날 찾기',
    objective: '한 주 동안의 습관 기록 그래프를 읽고 잘 지킨 날과 못 지킨 날을 찾아 말할 수 있다.',
    illustration: ART('a paper bar chart from Monday to Friday showing cups of water, with a dotted line at three cups and a child pointing at the tallest bar', '그래프로 돌아봐요', [
      { motif: 'leaf', x: 110, y: 226, color: 'mint' }, { motif: 'star', x: 390, y: 84, s: 0.6 }, { motif: 'tree', x: 400, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"지난주에 내가 무슨 요일에 다짐을 지켰는지 기억만으로 말할 수 있나요?" 몇 명이 말해 본 뒤, 기억은 흐려지지만 기록은 남는다는 것을 짚는다. 시연 단추로 준호의 물 마시기 그래프를 보여 준다. "막대가 높을수록 물을 많이 마신 날이에요."',
        student: '내 지킴표에서 가장 잘 지킨 날을 찾아 손가락으로 짚어 봐요.',
        demo: { tool: 'chart', options: { type: 'bar', mode: 'read', title: '준호가 마신 물', data: [['월', 3], ['화', 1]], unit: '컵', xLabel: '요일', yLabel: '컵', scale: 1, max: 4, showValues: true, question: '물을 더 많이 마신 요일은?', choices: ['월', '화'] }, sequence: [{ pick: 0 }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 그래프에서 잘 지킨 날 찾기', minutes: 14, tool: 'chart',
            teacher: '"준호의 다짐은 하루에 물 세 컵이에요. 막대가 3까지 온 날이 지킨 날이에요." 손가락으로 막대 끝에서 왼쪽 눈금까지 따라가게 한다. 막대 높이와 눈금을 잇지 못하는 학생에게는 칸을 하나씩 세게 한다. 셋째 문항에서 가장 높은 막대만 찾는 학생에게 "다짐이 몇 쪽이었지요?" 하고 묻는다.',
            task: '한 주 기록 막대그래프를 읽고 물음에 답해요.',
            levels: {
              easy: { showValues: true },
              base: {},
              challenge: {},
            },
            items: [
              { prompt: '준호가 물을 가장 적게 마신 요일을 골라 보세요.', toolOptions: { type: 'bar', mode: 'read', title: '준호가 마신 물', data: [['월', 3], ['화', 1], ['수', 3], ['목', 2], ['금', 4]], unit: '컵', xLabel: '요일', yLabel: '컵', scale: 1, max: 5, question: '물을 가장 적게 마신 요일은?', choices: ['월', '화', '목', '금'] }, target: { pick: 1 }, difficulty: 0.1 },
              { prompt: '준호의 다짐은 "하루에 물 세 컵"이에요. 꼭 세 컵을 마신 날은 몇 날인지 쓰세요.', toolOptions: { type: 'bar', mode: 'read', title: '준호가 마신 물', data: [['월', 3], ['화', 1], ['수', 3], ['목', 2], ['금', 3]], unit: '컵', xLabel: '요일', yLabel: '컵', scale: 1, max: 4, question: '물을 꼭 세 컵 마신 날은 몇 날인가요?', input: true }, target: { value: 3 }, difficulty: 0.2 },
              { prompt: '서아의 다짐은 "책 열 쪽 읽기"예요. 다짐을 못 지킨 요일을 골라 보세요.', toolOptions: { type: 'bar', mode: 'read', title: '서아가 읽은 쪽수', data: [['월', 10], ['화', 12], ['수', 6], ['목', 10]], unit: '쪽', xLabel: '요일', yLabel: '쪽', scale: 2, max: 14, question: '열 쪽보다 적게 읽은 요일은?', choices: ['월', '화', '수', '목'] }, target: { pick: 2 }, difficulty: 0.2,
                levels: { challenge: { prompt: '서아의 다짐은 "책 열 쪽 읽기"예요. 다짐을 지킨 날 가운데 가장 많이 읽은 요일을 골라 보세요.', toolOptions: { question: '다짐을 지킨 날 가운데 가장 많이 읽은 요일은?' }, target: { pick: 1 } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 잘 지킨 날과 못 지킨 날 말하기', minutes: 12, tool: 'mindmap',
            teacher: '"잘 지킨 날에는 무엇이 달랐을까요?" 기록 카드의 까닭 부분을 함께 읽는다. 잘 지킨 날의 까닭을 알면 그 방법을 다시 쓸 수 있다는 것을 짚는다. 마지막 문항은 활동지의 내 지킴표를 보고 짝에게 실제로 말한다.',
            task: '한 주 기록을 잘 지킨 날과 못 지킨 날로 나누고, 그날의 까닭을 이어요.',
            levels: CARD_LV(),
            items: [
              { prompt: '하준이의 한 주 기록을 잘 지킨 날과 못 지킨 날로 나누어 보세요.', toolOptions: { topic: '하준이의 이불 개기', slots: ['잘 지킨 날', '못 지킨 날'], cards: ['월: 일어나자마자 갰어요', '화: 늦잠 자서 못 갰어요', '수: 알람 듣고 갰어요', '목: 그냥 두고 나왔어요'] },
                target: { sort: { '잘 지킨 날': ['월: 일어나자마자 갰어요', '수: 알람 듣고 갰어요'], '못 지킨 날': ['화: 늦잠 자서 못 갰어요', '목: 그냥 두고 나왔어요'] } }, difficulty: 0.1 },
              { prompt: '잘 지킨 날과 그날 지킬 수 있었던 까닭을 이어 보세요.', toolOptions: { mode: 'match', topic: '잘 지킨 까닭', slots: [{ id: 's1', label: '월: 이불을 갰어요' }, { id: 's2', label: '수: 이불을 갰어요' }], cards: ['일어나자마자 했어요', '알람이 알려 줬어요'] },
                target: { match: { s1: '일어나자마자 했어요', s2: '알람이 알려 줬어요' } }, difficulty: 0.15,
                levels: { challenge: { prompt: '잘 지킨 날과 그날 지킬 수 있었던 까닭을 이어 보세요. 까닭이 아닌 카드가 하나 있어요.', toolOptions: { cards: ['일어나자마자 했어요', '알람이 알려 줬어요', '이불 색이 파랑이에요'] } } } },
              { prompt: '내 지킴표를 보고 짝에게 잘 지킨 날과 못 지킨 날을 하나씩 말해요. 다 말했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"기록이 없었다면 오늘처럼 말할 수 있었을까요?" 기록을 하면 기억보다 정확하게 돌아볼 수 있다는 것을 정리한다. 이어 지금 내 마음을 정직하게 고르는 출구 질문에는 정답이 없다고 말해 준다. 다음 시간에는 못 지킨 날의 까닭을 찾아 다시 하는 방법을 정한다.',
        exitTicket: [
          { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '도윤이가 한 줄넘기', data: [['월', 20], ['화', 30], ['수', 10], ['목', 30]], unit: '번', xLabel: '요일', yLabel: '번', scale: 10, max: 40, question: '줄넘기를 가장 적게 한 요일은?', choices: ['월', '화', '수', '목'] }, prompt: '도윤이의 줄넘기 그래프를 보고 가장 적게 한 요일을 골라 보세요.', target: { pick: 2 }, difficulty: 0.1 },
          { type: 'tool', tool: 'emotion', options: { mode: 'scale', situation: '내 사흘 지킴표를 다시 보았어요.', feeling: '뿌듯함', ask: '내 기록을 보니 뿌듯한 마음은 얼마나 되나요?' }, prompt: '내 지킴표를 보고 지금 뿌듯한 마음의 크기를 정직하게 골라 보세요.', target: { level: 'any' }, difficulty: 0.05 },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '기록으로 돌아보기',
      items: [
        { type: 'figure', wide: true, prompt: '그래프를 보고 물을 가장 많이 마신 요일을 쓰세요.', tool: 'chart', figures: [{ options: { type: 'bar', mode: 'read', title: '준호가 마신 물', data: [['월', 3], ['화', 1], ['수', 2], ['목', 4]], unit: '컵', scale: 1, max: 5 }, caption: '가장 많이 마신 요일: ____' }], answer: '목' },
        { type: 'table', prompt: '내 기록을 보고 쓰세요.', columns: ['잘 지킨 날', '그날 잘 지킨 까닭'], rows: 2 },
        { type: 'table', prompt: '못 지킨 날도 쓰세요.', columns: ['못 지킨 날', '그날 못 지킨 까닭'], rows: 2 },
        { type: 'short', prompt: '기록을 해 보니 좋은 점을 쓰세요.' },
      ],
      easy: {
        note: '막대 끝에서 왼쪽 눈금까지 손가락으로 따라가요.',
        items: [
          { type: 'choice', prompt: '막대가 높을수록?', options: ['많이 했어요', '적게 했어요'], answer: '많이 했어요' },
          { type: 'short', prompt: '내가 잘 지킨 날을 쓰세요.' },
          { type: 'short', prompt: '그날 잘 지킨 까닭을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '막대 끝에 수가 보여요. 맞는 칸에 초록 테두리가 생겨요.',
      base: '눈금을 따라 읽고, 다짐과 견주어 답해요.',
      challenge: '다짐을 지킨 날 가운데에서 다시 견주고, 까닭이 아닌 카드를 골라내요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 가장 높은 막대가 늘 잘 지킨 날이라고 여긴다 → 다짐(열 쪽)과 견주어야 한다는 것을 짚는다. ② 막대 끝과 눈금을 잇지 못한다 → 자를 대고 왼쪽으로 따라가게 한다. ③ 못 지킨 날을 부끄러워해 말하지 않는다 → 못 지킨 날의 까닭이 다음 방법을 알려 준다고 말한다. 자기 평가(출구 2번)에는 정답이 없다.',
  }));

  lessons.push(L(10, {
    title: '못 지킨 까닭 살펴 다시 하는 방법 정하기',
    objective: '못 지킨 날의 까닭을 내가 바꿀 수 있는 것과 어쩔 수 없었던 것으로 나누고, 다시 하는 방법을 정할 수 있다.',
    illustration: ART('a paper magnifying glass over a weekly chart with an empty box, a child thinking beside a new small note', '왜 못 했을까?', [
      { motif: 'star', x: 120, y: 86, s: 0.6 }, { motif: 'house', x: 380, y: 214, color: 'buttercup' }, { motif: 'leaf', x: 250, y: 226 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"감기에 걸려 하루 종일 누워 있어서 줄넘기를 못 한 날과, 만화를 보다가 줄넘기를 잊은 날. 두 날은 같을까요?" 두 까닭을 칠판에 나란히 붙인다. 아픈 날은 어쩔 수 없었지만 만화를 본 날은 내가 바꿀 수 있었다는 것을 짚는다. 시연 단추로 두 까닭이 나뉘는 모습을 보여 준다.',
        student: '내 지킴표의 빈칸 하나를 골라, 그날 왜 못 했는지 떠올려 봐요.',
        demo: { tool: 'mindmap', options: { topic: '못 지킨 까닭', slots: ['내가 바꿀 수 있어요', '어쩔 수 없었어요'], cards: ['만화를 보다 잊었어요', '감기에 걸려 누워 있었어요'], shuffle: false }, sequence: [{ sort: { '내가 바꿀 수 있어요': ['만화를 보다 잊었어요'], '어쩔 수 없었어요': ['감기에 걸려 누워 있었어요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 까닭 나누고 방법 잇기', minutes: 14, tool: 'mindmap',
            teacher: '"이 까닭은 내가 다음에 다르게 할 수 있는 일인가요?" 까닭마다 \'내가 할 수 있었던 다른 행동\'을 말해 보게 한다. 어쩔 수 없었던 날까지 자기 탓으로 여기는 학생에게 "아픈 날은 쉬는 것이 맞아요"라고 말해 준다. 방법 잇기에서는 까닭을 다시 읽고 그 까닭을 없애 주는 방법을 고르게 한다.',
            task: '못 지킨 까닭을 나누고, 바꿀 수 있는 까닭에는 다시 하는 방법을 이어요.',
            levels: CARD_LV(),
            items: [
              { prompt: '못 지킨 까닭을 내가 바꿀 수 있는 것과 어쩔 수 없었던 것으로 나누어 보세요.', toolOptions: { topic: '못 지킨 까닭', slots: ['내가 바꿀 수 있어요', '어쩔 수 없었어요'], cards: ['게임을 하다 늦게 잤어요', '열이 나서 병원에 갔어요', '물병을 집에 두고 왔어요', '정전이 되어 깜깜했어요'] },
                target: { sort: { '내가 바꿀 수 있어요': ['게임을 하다 늦게 잤어요', '물병을 집에 두고 왔어요'], '어쩔 수 없었어요': ['열이 나서 병원에 갔어요', '정전이 되어 깜깜했어요'] } }, difficulty: 0.15,
                levels: { challenge: { prompt: '못 지킨 까닭 여섯 장을 내가 바꿀 수 있는 것과 어쩔 수 없었던 것으로 나누어 보세요.', toolOptions: { cards: ['게임을 하다 늦게 잤어요', '열이 나서 병원에 갔어요', '물병을 집에 두고 왔어요', '정전이 되어 깜깜했어요', '하기 싫어서 미뤘어요', '다리를 다쳐 깁스를 했어요'] },
                  target: { sort: { '내가 바꿀 수 있어요': ['게임을 하다 늦게 잤어요', '물병을 집에 두고 왔어요', '하기 싫어서 미뤘어요'], '어쩔 수 없었어요': ['열이 나서 병원에 갔어요', '정전이 되어 깜깜했어요', '다리를 다쳐 깁스를 했어요'] } } } } },
              { prompt: '바꿀 수 있는 까닭과 다시 하는 방법을 이어 보세요.', toolOptions: { mode: 'match', topic: '다시 하는 방법', slots: [{ id: 's1', label: '게임을 하다 늦게 잤어요' }, { id: 's2', label: '물병을 집에 두고 왔어요' }, { id: 's3', label: '하기 싫어서 미뤘어요' }], cards: ['게임은 저녁 먹기 전에만', '물병을 현관에 놓아 두기', '다 하면 좋아하는 노래 듣기'] },
                target: { match: { s1: '게임은 저녁 먹기 전에만', s2: '물병을 현관에 놓아 두기', s3: '다 하면 좋아하는 노래 듣기' } }, difficulty: 0.2,
                levels: { easy: { prompt: '바꿀 수 있는 까닭과 다시 하는 방법 두 짝을 이어 보세요.', toolOptions: { slots: [{ id: 's1', label: '게임을 하다 늦게 잤어요' }, { id: 's2', label: '물병을 집에 두고 왔어요' }], cards: ['게임은 저녁 먹기 전에만', '물병을 현관에 놓아 두기'] }, target: { match: { s1: '게임은 저녁 먹기 전에만', s2: '물병을 현관에 놓아 두기' } } } } },
              { prompt: '못 지킨 날 기록을 바르게 쓰는 방법만 골라 보세요.', toolOptions: { mode: 'pick', basket: '바른 기록', cards: ['빈칸 옆에 까닭을 짧게 적어요', '빈칸도 그대로 남겨요', '빈칸을 지우개로 지워요', '지킨 것처럼 색칠해요'] },
                target: { pick: ['빈칸 옆에 까닭을 짧게 적어요', '빈칸도 그대로 남겨요'] }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 다시 해 볼 마음 정하기', minutes: 12, tool: 'emotion',
            teacher: '"빈칸이 두 개면 마음이 어떤가요? 그 마음은 다음에 어떻게 쓸 수 있을까요?" 속상한 마음을 다음 다짐의 힘으로 바꾸는 이야기를 나눈다. 지우의 마음 크기는 \'금방 웃었어요\'라는 이야기 속 근거를 짚고 고르게 한다. 마지막 문항은 내 지킴표의 빈칸 하나에 까닭과 다시 하는 방법을 실제로 적는다.',
            task: '못 지킨 날이 있는 친구의 마음을 알아보고, 다시 하는 방법을 골라 내 표에 적어요.',
            levels: EMO_LV(),
            items: [
              { prompt: '닷새 가운데 이틀을 못 지킨 지우가 "그래도 사흘은 했어" 하고 금방 웃었어요. 속상한 마음의 크기를 골라 보세요.', toolOptions: { mode: 'scale', who: '지우', situation: '지우는 닷새 가운데 이틀을 못 지켰어요. "그래도 사흘은 했어" 하고 금방 웃었어요.', feeling: '속상함', after: '지킨 날도 함께 보면 다시 해 볼 힘이 나요.' }, target: { level: [1, 3] }, difficulty: 0.2,
                levels: { easy: { prompt: '이틀을 못 지킨 지우가 "그래도 사흘은 했어" 하고 금방 웃었어요. 속상한 마음을 세 칸에서 골라 보세요.', target: { level: [1, 2] } } } },
              { prompt: '물병을 또 두고 온 하준이. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '하준', situation: '하준이는 물 마시기 다짐을 했는데 오늘도 물병을 집에 두고 왔어요.', choices: [
                { id: 'quit', text: '"물병 다짐은 안 맞아" 하고 그만둬요', result: '물 마시기 습관이 생기지 않아요.', mood: '속상함', why: '까닭을 알았는데 그만두면 바뀔까요?' },
                { id: 'cup', text: '교실 컵으로 마시고, 저녁에 물병을 현관에 둬요', result: '오늘도 지키고 내일도 챙겨 와요.', mood: '뿌듯함' },
                { id: 'blame', text: '"엄마가 안 챙겨 줬어" 하고 말해요', result: '내일도 물병을 잊을 수 있어요.', mood: '걱정', why: '물병 챙기기는 누구의 다짐일까요?' }] }, target: { choice: 'cup' }, difficulty: 0.15 },
              { prompt: '내 지킴표의 빈칸 하나에 못 한 까닭과 다시 하는 방법을 적어요. 다 적었으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"내 빈칸 옆에 적은 다시 하는 방법을 한 사람씩 말해 볼까요?" 대여섯 명이 말하고 친구들은 손뼉으로 응원한다. 어쩔 수 없었던 날만 있는 학생에게는 "그날은 쉬는 게 맞았어요. 다음 날 다시 하면 돼요"라고 말한다. 다음 시간에는 삼 학년에 이어 갈 습관을 정한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '못 지킨 까닭', slots: ['내가 바꿀 수 있어요', '어쩔 수 없었어요'], cards: ['숙제를 늦게 시작했어요', '태풍으로 학교가 쉬었어요', '알림장을 안 봤어요'] }, prompt: '못 지킨 까닭을 두 가지로 나누어 보세요.', target: { sort: { '내가 바꿀 수 있어요': ['숙제를 늦게 시작했어요', '알림장을 안 봤어요'], '어쩔 수 없었어요': ['태풍으로 학교가 쉬었어요'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '잊어버려서 못 지킨 날, 다시 하는 방법으로 알맞은 것은?', options: ['알림 쪽지를 붙여요', '다짐을 그만둬요', '빈칸을 색칠해요'], answer: 0, difficulty: 0.1, explain: '잊는 것이 까닭이면 잊지 않게 알려 주는 방법을 써요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '못 지킨 까닭과 다시 하는 방법',
      items: [
        { type: 'table', prompt: '못 지킨 날의 까닭과 다시 하는 방법을 쓰세요.', columns: ['못 지킨 날', '까닭', '다시 하는 방법'], rows: 2 },
        { type: 'choice', prompt: '내가 바꿀 수 있는 까닭에 ○ 하세요.', options: ['게임을 하다 늦게 잤어요', '열이 나서 병원에 갔어요', '태풍이 왔어요'], answer: '게임을 하다 늦게 잤어요' },
        { type: 'check', prompt: '못 지킨 날 기록을 바르게 쓰는 방법에 ✓ 하세요.', options: ['빈칸을 그대로 남겨요', '까닭을 짧게 적어요', '다음 날 다시 해요'] },
        { type: 'short', prompt: '다시 해 볼 때 내 마음을 쓰세요.' },
      ],
      easy: {
        note: '아픈 날은 어쩔 수 없어요. 잊은 날은 방법을 바꿔요.',
        items: [
          { type: 'choice', prompt: '어쩔 수 없었던 까닭에 ○ 하세요.', options: ['감기에 걸렸어요', '만화를 보다 잊었어요'], answer: '감기에 걸렸어요' },
          { type: 'short', prompt: '내가 못 지킨 날의 까닭을 쓰세요.' },
          { type: 'short', prompt: '다시 하는 방법을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '짝 잇기가 두 짝이고 맞는 칸에 초록 테두리가 생겨요. 마음 크기는 세 칸이에요.',
      base: '까닭 네 장을 나누고 세 짝을 이어요.',
      challenge: '까닭 카드가 여섯 장으로 늘어 더 꼼꼼히 견주어야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 못 지킨 날은 모두 내 잘못이라고 여긴다 → 어쩔 수 없었던 까닭(아픔·다침·정전)을 따로 나눈다. ② 까닭을 다른 사람 탓으로 돌린다(엄마가 안 챙겨 줌) → 다짐은 내 것이라는 것을 짚는다. ③ 마음 크기에서 "이틀 못 했으니 아주 속상"을 고른다 → 이야기 속 지우는 금방 웃었다는 근거를 짚는다. 학생 자신의 속상함 크기는 묻지 않고, 정리 시간 말하기로 돌린다.',
  }));

  lessons.push(L(11, {
    title: '삼 학년에 이어 갈 습관 하나 고르기',
    objective: '이 학년 동안 기른 습관 가운데 삼 학년에도 이어 갈 습관을 고르고, 습관은 학년이 바뀌어도 스스로 이어 가야 한다는 것을 말할 수 있다.',
    illustration: ART('a paper staircase with steps labeled 1, 2, 3, a child carrying a small backpack with habit stars up to the third step', '삼 학년에도 이어 가요', [
      { motif: 'star', x: 140, y: 86, s: 0.6 }, { motif: 'star', x: 340, y: 70, s: 0.5 }, { motif: 'tree', x: 410, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"삼 학년이 되면 아침에 저절로 일찍 일어나게 될까요?" 손을 들어 \'네/아니요\'를 고르게 하고 까닭을 두세 명 듣는다. 학년이 바뀌는 것은 날짜가 바뀌는 것이지 습관이 바뀌는 것은 아니라는 것을 짚는다. 시연 단추로 이어 갈 습관 카드가 바구니에 들어가는 모습을 보여 준다.',
        student: '이 학년 동안 내가 가장 잘 지킨 습관 하나를 떠올려 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'pick', basket: '삼 학년 가방', cards: ['아침마다 이불 개기', '연필 입에 물기'], shuffle: false }, sequence: [{ pick: ['아침마다 이불 개기'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 삼 학년 가방에 넣을 습관', minutes: 13, tool: 'mindmap',
            teacher: '"삼 학년 가방에는 이어 가고 싶은 좋은 습관만 넣어요." 카드를 읽고 고르게 한다. 고칠 습관을 \'삼 학년 되면 고쳐질 거라\' 넣어 두려는 학생에게 "가방에 넣으면 그 습관도 삼 학년까지 따라가요" 하고 말한다. 나누기 문항에서는 카드마다 날마다 하면 나에게 좋은지 하나씩 따져 보게 한다.',
            task: '이 학년 때의 습관 가운데 삼 학년에 이어 갈 좋은 습관을 고르고 나누어요.',
            levels: CARD_LV(),
            items: [
              { prompt: '삼 학년에도 이어 갈 좋은 습관만 골라 가방에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '삼 학년 가방', cards: ['알림장 보고 숙제하기', '밥 먹기 전에 손 씻기', '쉬는 시간에 복도 뛰기', '책상 서랍에 쓰레기 넣기'] },
                target: { pick: ['알림장 보고 숙제하기', '밥 먹기 전에 손 씻기'] }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['알림장 보고 숙제하기', '밥 먹기 전에 손 씻기', '쉬는 시간에 복도 뛰기', '책상 서랍에 쓰레기 넣기', '읽은 책 제자리에 꽂기', '늦게 자고 늦게 일어나기'] }, target: { pick: ['알림장 보고 숙제하기', '밥 먹기 전에 손 씻기', '읽은 책 제자리에 꽂기'] }, prompt: '삼 학년에도 이어 갈 좋은 습관만 모두 골라 가방에 넣어 보세요.' } } },
              { prompt: '민지의 습관을 이어 갈 습관과 지금부터 고칠 습관으로 나누어 보세요.', toolOptions: { topic: '민지의 습관', slots: ['이어 갈 습관', '지금부터 고칠 습관'], cards: ['날마다 줄넘기 열 번', '숙제를 자주 미루기', '친구에게 먼저 인사하기', '물건을 자주 잃어버리기'] },
                target: { sort: { '이어 갈 습관': ['날마다 줄넘기 열 번', '친구에게 먼저 인사하기'], '지금부터 고칠 습관': ['숙제를 자주 미루기', '물건을 자주 잃어버리기'] } }, difficulty: 0.15 },
              { prompt: '이어 갈 습관과 삼 학년에 그 습관을 지킬 곳을 이어 보세요.', toolOptions: { mode: 'match', topic: '삼 학년에는', slots: [{ id: 's1', label: '알림장 보고 숙제하기' }, { id: 's2', label: '읽은 책 제자리에 꽂기' }], cards: ['집 공부 책상', '도서실 책꽂이'] },
                target: { match: { s1: '집 공부 책상', s2: '도서실 책꽂이' } }, difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. "저절로 될 거야"를 바꾸어 생각하기', minutes: 13, tool: 'emotion',
            teacher: '"도윤이는 삼 학년이 되면 저절로 숙제를 잘할 거래요. 정말 그럴까요?" 이야기 속 결과를 읽고 학년이 바뀌어도 습관은 내가 이어 가야 한다는 것을 정리한다. 마음 카드 문항에서는 새 학년을 생각할 때 설레는 마음과 걱정되는 마음이 함께 있을 수 있다고 말해 준다.',
            task: '새 학년을 앞둔 친구의 생각과 마음을 살펴보고, 어떻게 할지 골라요.',
            levels: EMO_LV(),
            items: [
              { prompt: '도윤이가 "삼 학년이 되면 저절로 숙제를 잘할 거야" 하고 말해요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '도윤', situation: '도윤이는 숙제를 자주 미뤄요. "삼 학년이 되면 저절로 잘할 거야" 하고 말해요.', choices: [
                { id: 'wait', text: '삼 학년이 될 때까지 기다려요', result: '삼 학년이 되어도 숙제를 미뤄요.', mood: '걱정', why: '기다리는 동안 습관이 바뀔까요?' },
                { id: 'now', text: '오늘부터 집에 오면 숙제부터 해요', result: '삼 학년 첫날부터 숙제를 잘 챙겨요.', mood: '뿌듯함' }] }, target: { choice: 'now' }, difficulty: 0.1,
                predict: { q: '학년이 바뀌면 습관도 저절로 좋아질까요?', options: ['저절로 좋아져요', '내가 이어 가야 해요'], answer: 1 },
                conclude: '학년이 바뀌어도 습관은 내가 날마다 해야 이어져요.',
                levels: { challenge: { toolOptions: { choices: [
                  { id: 'wait', text: '삼 학년이 될 때까지 기다려요', result: '삼 학년이 되어도 숙제를 미뤄요.', mood: '걱정', why: '기다리는 동안 습관이 바뀔까요?' },
                  { id: 'now', text: '오늘부터 집에 오면 숙제부터 해요', result: '삼 학년 첫날부터 숙제를 잘 챙겨요.', mood: '뿌듯함' },
                  { id: 'big', text: '삼 학년 첫날 숙제를 열 개 해요', result: '하루 하고 지쳐서 다시 미뤄요.', mood: '속상함', why: '하루에 몰아서 하면 습관이 될까요?' }] } } } },
              { prompt: '새 학년을 떠올릴 때의 마음 카드를 놓아 보세요.', toolOptions: { cards: ['설렘', '걱정', '화남'], slots: [{ id: 's1', label: '새 친구를 만날 생각을 해요' }, { id: 's2', label: '새 선생님이 낯설까 봐요' }] },
                target: { match: { s1: '설렘', s2: '걱정' } }, difficulty: 0.1 },
              { prompt: '짝에게 삼 학년 가방에 넣을 내 습관 하나와 그 까닭을 말해요. 다 말했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"삼 학년 가방에 넣을 내 습관 하나를 정했나요?" 활동지에 그 습관과 지킬 때·곳을 적게 한다. 다음 시간에 그 습관을 다짐 카드로 꾸며 교실에 걸어 둔다고 알린다. 다짐 카드에 쓸 색지를 미리 나누어 준다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', basket: '삼 학년 가방', cards: ['차례를 지켜 줄 서기', '급식 남기지 않기', '수업 중에 떠들기'] }, prompt: '서아가 삼 학년에도 이어 갈 좋은 습관만 골라 보세요.', target: { pick: ['차례를 지켜 줄 서기', '급식 남기지 않기'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '삼 학년이 되면 습관은 어떻게 될까요?', options: ['저절로 좋아져요', '내가 이어 가야 이어져요', '모두 없어져요'], answer: 1, difficulty: 0.15, explain: '학년이 바뀌어도 습관은 내가 날마다 해야 이어져요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '삼 학년 가방에 넣을 습관',
      items: [
        { type: 'check', prompt: '삼 학년에 이어 갈 습관에 ✓ 하세요.', options: ['손 씻기', '알림장 보고 숙제하기', '책 제자리에 꽂기', '먼저 인사하기'] },
        { type: 'blank', prompt: '내 다짐을 쓰세요.', text: '나는 삼 학년에도 ___ 습관을 이어 갈 거예요.' },
        { type: 'table', prompt: '그 습관을 언제, 어디에서 할지 쓰세요.', columns: ['언제', '어디에서'], rows: 1 },
        { type: 'short', prompt: '지금부터 고칠 습관 하나를 쓰세요.' },
      ],
      easy: {
        note: '좋은 습관만 삼 학년 가방에 넣어요.',
        items: [
          { type: 'choice', prompt: '가방에 넣을 습관에 ○ 하세요.', options: ['손 씻기', '복도 뛰기'], answer: '손 씻기' },
          { type: 'short', prompt: '삼 학년에 이어 갈 습관을 쓰세요.' },
          { type: 'draw', prompt: '삼 학년이 된 내 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고 마음 크기는 세 칸이에요.',
      base: '좋은 습관을 고르고 나눈 뒤 확인을 눌러요.',
      challenge: '습관 카드가 여섯 장으로 늘고, 그럴듯한 보기(첫날 몰아서 하기)가 더 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 학년이 바뀌면 습관도 저절로 좋아진다고 여긴다 → 일 학년에서 이 학년으로 올라올 때 저절로 바뀐 습관이 있었는지 떠올린다. ② 고칠 습관을 삼 학년으로 미룬다 → \'지금부터 고칠 습관\' 칸을 따로 둔다. ③ 새 학년 걱정이 큰 학생이 있다 → 걱정은 자연스러운 마음이라고 말하고, 따로 이야기를 들어 준다.',
  }));

  lessons.push(L(12, {
    title: '이어 갈 습관 다짐 카드 꾸미기',
    objective: '삼 학년에 이어 갈 습관을 다짐 문장으로 쓰고, 색종이 조각으로 다짐 카드를 꾸며 짝에게 소개할 수 있다.',
    illustration: ART('a decorated paper promise card with a big yellow star, small hearts in the corners and a short promise sentence, hanging on a string with other cards', '나의 다짐 카드', [
      { motif: 'star', x: 120, y: 86, s: 0.7 }, { motif: 'flower', x: 110, y: 226, color: 'rose' }, { motif: 'flower', x: 380, y: 226, color: 'sky' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"다짐을 머릿속에만 두면 어떻게 될까요? 눈에 보이는 곳에 걸어 두면요?" 앞에서 써 본 알림 쪽지를 떠올리게 한다. 교사가 만든 다짐 카드 보기를 보이며 "가운데에는 다짐 문장, 둘레에는 꾸미기 조각"이라고 짚는다. 시연 단추로 판 위에 별 조각이 놓이는 모습을 보여 준다. 학생 이름은 카드 앞면에 쓰지 않고 뒷면에 쓴다.',
        student: '지난 시간에 정한 삼 학년 가방 습관을 다시 떠올려 봐요.',
        demo: { tool: 'collage', options: { readOnly: true }, sequence: [{ has: [{ shape: 'star', color: '노랑', size: 'l', n: 1 }] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 다짐 문장 만들기', minutes: 10, tool: 'mindmap',
            teacher: '"다짐 문장에는 \'언제\'와 \'무엇을\'이 들어가요." 빈칸에 알맞은 카드를 넣어 문장을 완성하게 한다. 빈칸 앞뒤 말을 소리 내어 읽어 보면 어울리는 낱말을 찾기 쉽다고 말해 준다. 문장을 다 만든 학생은 자기 다짐 문장을 색지 가운데에 연필로 쓴다.',
            task: '다짐 문장의 빈칸에 알맞은 카드를 넣고, 좋은 다짐 문장을 골라요.',
            levels: CARD_LV(),
            items: [
              { prompt: '하준이의 다짐 문장 빈칸에 알맞은 카드를 넣어 보세요.', toolOptions: { mode: 'fill', topic: '다짐 문장', slots: [{ id: 'f1', label: '___마다 이불을 개요.' }, { id: 'f2', label: '집에 오면 ___부터 해요.' }], cards: ['아침', '숙제', '운동장'] },
                target: { fill: { f1: '아침', f2: '숙제' } }, difficulty: 0.1 },
              { prompt: '서아의 다짐 문장 빈칸에 알맞은 카드를 넣어 보세요.', toolOptions: { mode: 'fill', topic: '다짐 문장', slots: [{ id: 'f1', label: '밥 먹기 ___ 손을 씻어요.' }, { id: 'f2', label: '읽은 책은 ___에 꽂아요.' }], cards: ['전에', '제자리', '아무 데'] },
                target: { fill: { f1: '전에', f2: '제자리' } }, difficulty: 0.15 },
              { prompt: '언제와 무엇을이 다 들어간 다짐 문장만 골라 보세요.', toolOptions: { mode: 'pick', basket: '좋은 다짐 문장', cards: ['저녁마다 책 열 쪽을 읽어요', '점심 뒤에 이를 닦아요', '좋은 어린이가 될래요', '열심히 할래요'] },
                target: { pick: ['저녁마다 책 열 쪽을 읽어요', '점심 뒤에 이를 닦아요'] }, difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 다짐 카드 꾸미기', minutes: 17, tool: 'collage',
            teacher: '"다짐 문장이 잘 보이도록 가운데는 비우고 둘레를 꾸며요." 판에서 먼저 꾸밈을 계획해 본 뒤 실제 색종이로 오려 붙이게 한다. 조각으로 문장을 가리는 학생에게 "다짐이 잘 보이나요?" 하고 묻는다. 가위를 쓸 때는 앉아서 쓰고, 건넬 때 손잡이를 내민다.',
            task: '판에서 다짐 카드 꾸밈을 계획하고, 실제 색종이로 다짐 카드를 꾸며요.',
            levels: {
              easy: { shapes: ['star', 'heart', 'circle'], colors: ['노랑', '분홍', '파랑', '초록'] },
              base: { shapes: ['star', 'heart', 'circle', 'square', 'leaf'], colors: ['노랑', '분홍', '파랑', '초록', '주황', '보라'] },
              challenge: {},
            },
            items: [
              { prompt: '다짐 카드에 큰 노랑 별 하나와 작은 초록 동그라미 두 개를 붙여 보세요.', target: { has: [{ shape: 'star', color: '노랑', size: 'l', n: 1 }, { shape: 'circle', color: '초록', size: 's', n: 2 }] }, difficulty: 0.05 },
              { prompt: '카드 둘레를 꾸밀 작은 분홍 하트를 네 개 붙여 보세요.', state: { pieces: [{ shape: 'star', color: '노랑', size: 'l', x: 280, y: 200, r: 0 }] }, target: { has: [{ shape: 'heart', color: '분홍', size: 's', n: 4 }, { shape: 'star', color: '노랑', size: 'l', n: 1 }] }, difficulty: 0.15,
                levels: { challenge: { prompt: '세로 접는 선 양쪽이 똑같게 작은 분홍 하트를 네 개 붙여 보세요.', target: { has: [{ shape: 'heart', color: '분홍', size: 's', n: 4 }, { shape: 'star', color: '노랑', size: 'l', n: 1 }], symmetry: 'vertical' } } } },
              { prompt: '나만의 다짐 카드를 꾸미고, 해낸 것을 점검해 보세요.', target: { selfCheck: ['가운데 다짐 자리를 비워 두었어요', '둘레를 조각으로 꾸몄어요', '짝에게 내 다짐을 소개했어요'], minPieces: 4 }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"내 다짐 카드를 짝에게 보여 주며 \'나는 언제 무엇을 할 거야\' 하고 말해 볼까요?" 다짐 카드를 교실 뒤 \'삼 학년 가방\' 줄에 집게로 건다. 이 카드는 학년 말에 집으로 가져가 냉장고나 책상 앞에 붙여 두게 한다. 남은 색종이는 \'다시 쓸 종이\' 상자에 모은다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'fill', topic: '다짐 문장', slots: [{ id: 'e1', label: '___ 전에 가방을 챙겨요.' }], cards: ['잠자기', '놀기'] }, prompt: '도윤이의 다짐 문장 빈칸에 알맞은 카드를 넣어 보세요.', target: { fill: { e1: '잠자기' } }, difficulty: 0.1 },
          { type: 'tool', tool: 'collage', options: { shapes: ['star', 'heart', 'circle'], colors: ['노랑', '분홍', '파랑'] }, prompt: '다짐 카드에 작은 파랑 동그라미 세 개를 붙여 보세요.', target: { has: [{ shape: 'circle', color: '파랑', size: 's', n: 3 }] }, difficulty: 0.1 },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '나의 다짐 카드',
      items: [
        { type: 'blank', prompt: '내 다짐 문장을 쓰세요.', text: '나는 ___마다 ___을(를) 할 거예요.' },
        { type: 'choice', prompt: '좋은 다짐 문장에 ○ 하세요.', options: ['점심 뒤에 이를 닦아요', '좋은 어린이가 될래요', '열심히 할래요'], answer: '점심 뒤에 이를 닦아요' },
        { type: 'draw', prompt: '가운데에 다짐을 쓰고 둘레를 색종이로 꾸미세요.' },
        { type: 'short', prompt: '다짐 카드를 어디에 붙여 둘지 쓰세요.' },
      ],
      easy: {
        note: '언제 + 무엇을 = 다짐 문장!',
        items: [
          { type: 'short', prompt: '내 다짐을 쓰세요.' },
          { type: 'choice', prompt: '다짐 문장은 카드의 어디에 쓸까요?', options: ['가운데', '구석'], answer: '가운데' },
          { type: 'draw', prompt: '다짐 카드를 꾸미세요.' },
        ],
      },
    },
    differentiation: {
      easy: '판에 모양 세 가지, 색 네 가지만 나와요. 맞는 빈칸에 초록 테두리가 생겨요.',
      base: '모양 다섯 가지와 색 여섯 가지로 계획해요.',
      challenge: '하트 네 개를 세로 접는 선 양쪽에 똑같이 붙여 대칭으로 꾸며요. 모든 모양과 색을 쓸 수 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 다짐 문장이 막연하다(열심히 할래요) → \'언제\'와 \'무엇을\' 두 칸을 채우게 한다. ② 꾸미기에 빠져 다짐 문장을 가린다 → 가운데 자리를 연필로 먼저 네모 쳐 둔다. ③ 가위 안전 → 앉아서 쓰고 손잡이를 내밀어 건넨다. 카드 앞면에는 이름을 쓰지 않아 교실에 걸어도 누구 것인지 드러나지 않게 한다.',
  }));

  // ───────────────────────── 13~16차시: 노래하는 자세와 악기 잡는 법(표현의 기초 요소와 재료 이해) ─────────────────────────
  // 이 단원의 노래 '기억 상자'(직접 지음, 4/4박자, 도~라):
  //   ① 기억 상자 열어 보면 — 도 미 솔 솔 라 라 솔 솔   ② 웃음소리 들려요 — 파 파 미 미 레 레 도
  //   ③ 일 학년 이 학년 — 미 미 솔 미 미 솔            ④ 함께해서 고마워 — 라 솔 파 미 레 레 도

  lessons.push(L(13, {
    title: '노래할 때 바른 자세 찾아 서 보기',
    objective: '서서 노래할 때와 앉아서 노래할 때의 바른 자세를 그림 카드에서 골라 짚고, 직접 그 자세로 서서 소리 낼 수 있다.',
    illustration: ART('a paper child standing tall with feet apart and relaxed shoulders singing, next to a slouching paper child, music notes floating', '바른 자세로 노래해요', [
      { motif: 'star', x: 110, y: 86, s: 0.6 }, { motif: 'bird', x: 380, y: 80 }, { motif: 'flower', x: 400, y: 226, color: 'rose' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"선생님이 두 번 노래할게요. 어느 쪽 소리가 더 맑게 들리는지 들어 보세요." 한 번은 등을 구부리고 고개를 숙여서, 한 번은 바르게 서서 같은 \'도미솔\'을 부른다. 학생들이 다르게 들린다고 하면 "몸이 바뀌었을 뿐인데 소리가 바뀌었어요"라고 짚는다. 시연 단추로 자세 카드가 나뉘는 모습을 보여 준다.',
        student: '선생님의 두 노래를 듣고, 어느 쪽 소리가 더 맑았는지 손을 들어 골라 봐요.',
        demo: { tool: 'mindmap', options: { topic: '서서 노래할 때', slots: ['바른 자세', '고칠 자세'], cards: ['등을 곧게 펴요', '고개를 푹 숙여요'], shuffle: false }, sequence: [{ sort: { '바른 자세': ['등을 곧게 펴요'], '고칠 자세': ['고개를 푹 숙여요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 바른 자세 카드 고르기', minutes: 13, tool: 'mindmap',
            teacher: '"카드를 읽고 그 자세를 몸으로 따라 해 보세요. 그 자세로 \'아—\' 소리를 내 볼까요?" 카드마다 직접 해 보고 소리를 견주게 한다. \'자세는 소리와 상관없어요\'라고 말하는 학생에게 어깨를 잔뜩 올린 채 소리를 내 보게 하고, 힘을 빼고 다시 내 보게 한다. 앉아서 부를 때는 등받이에 기대지 않고 의자 앞쪽에 앉는다는 것을 짚는다.',
            task: '노래하는 자세 카드를 읽고 몸으로 따라 한 뒤, 바른 자세와 고칠 자세로 나누어요.',
            levels: CARD_LV(),
            items: [
              { prompt: '서서 노래할 때의 자세 카드를 나누어 보세요.', toolOptions: { topic: '서서 노래할 때', slots: ['바른 자세', '고칠 자세'], cards: ['두 발을 어깨너비로 벌려요', '어깨를 잔뜩 올려요', '허리와 등을 곧게 펴요', '한쪽 다리에 기대 서요'] },
                target: { sort: { '바른 자세': ['두 발을 어깨너비로 벌려요', '허리와 등을 곧게 펴요'], '고칠 자세': ['어깨를 잔뜩 올려요', '한쪽 다리에 기대 서요'] } }, difficulty: 0.1 },
              { prompt: '앉아서 노래할 때의 자세 카드를 나누어 보세요.', toolOptions: { topic: '앉아서 노래할 때', slots: ['바른 자세', '고칠 자세'], cards: ['의자 앞쪽에 앉아요', '발바닥을 바닥에 붙여요', '다리를 꼬고 앉아요', '책상에 엎드려요'] },
                target: { sort: { '바른 자세': ['의자 앞쪽에 앉아요', '발바닥을 바닥에 붙여요'], '고칠 자세': ['다리를 꼬고 앉아요', '책상에 엎드려요'] } }, difficulty: 0.15,
                levels: { challenge: { prompt: '앉아서 노래할 때의 자세 카드를 나누어 보세요. 자세가 아닌 카드는 남겨요.', toolOptions: { cards: ['의자 앞쪽에 앉아요', '발바닥을 바닥에 붙여요', '다리를 꼬고 앉아요', '책상에 엎드려요', '노래 제목을 외워요'] } } } },
              { prompt: '몸의 곳과 노래할 때 바른 모양을 이어 보세요.', toolOptions: { mode: 'match', topic: '노래할 때 내 몸', slots: [{ id: 's1', label: '어깨' }, { id: 's2', label: '등' }, { id: 's3', label: '턱' }], cards: ['힘을 빼고 내려요', '곧게 펴요', '살짝 당겨요'] },
                target: { match: { s1: '힘을 빼고 내려요', s2: '곧게 펴요', s3: '살짝 당겨요' } }, difficulty: 0.2,
                predict: { q: '자세가 바뀌면 노랫소리도 바뀔까요?', options: ['바뀌어요', '똑같아요'], answer: 0 },
                conclude: '등을 펴고 어깨 힘을 빼면 숨이 잘 들어가 소리가 맑아져요.',
                levels: { easy: { prompt: '몸의 곳과 노래할 때 바른 모양 두 짝을 이어 보세요.', toolOptions: { slots: [{ id: 's1', label: '어깨' }, { id: 's2', label: '등' }], cards: ['힘을 빼고 내려요', '곧게 펴요'] }, target: { match: { s1: '힘을 빼고 내려요', s2: '곧게 펴요' } } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 바른 자세로 소리 내 보기', minutes: 13, tool: 'keyboard',
            teacher: '"모두 일어나 바른 자세로 서요. 선생님이 치는 가락을 듣고 \'아\'로 따라 부른 다음 건반으로 쳐요." 가락 듣기를 누르기 전에 짝끼리 서로의 자세를 봐 주게 한다. 소리를 크게 지르는 학생에게 "옆 친구 소리도 들릴 만큼만"이라고 말한다. 짝 점검은 마지막에 실제로 서서 한다.',
            task: '바른 자세로 서서 가락을 듣고 따라 부른 뒤, 건반으로 똑같이 쳐요.',
            levels: MEL_LV(),
            items: [
              { prompt: '가락 듣기를 누르고, 바른 자세로 따라 부른 뒤 건반으로 쳐 보세요.', target: { notes: ['도', '미', '솔'] }, difficulty: 0.05 },
              { prompt: '이번에는 내려오는 가락이에요. 듣고 따라 부른 뒤 건반으로 쳐 보세요.', target: { notes: ['솔', '미', '도'] }, difficulty: 0.1,
                levels: { challenge: { prompt: '올라갔다 내려오는 가락이에요. 듣고 따라 부른 뒤 건반으로 쳐 보세요.', target: { notes: ['도', '미', '솔', '미', '도'] } } } },
              { prompt: '짝과 마주 서서 바른 자세(발·등·어깨·턱)를 서로 봐 주고, 함께 "도미솔" 하고 불러요. 다 했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"바른 자세로 부를 때 소리가 어떻게 달라졌나요?" 두세 명의 느낌을 듣는다. 다음 시간에는 리듬 악기를 바르게 잡는 법을 알아본다고 알린다. 오늘 배운 자세 네 가지(발·등·어깨·턱)를 교실 앞에 그림으로 붙여 둔다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', basket: '노래할 때 바른 자세', cards: ['어깨에 힘을 빼요', '턱을 하늘로 들어요', '등을 곧게 펴요'] }, prompt: '노래할 때 바른 자세만 골라 보세요.', target: { pick: ['어깨에 힘을 빼요', '등을 곧게 펴요'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '앉아서 노래할 때 알맞은 자세는?', options: ['등받이에 기대 누워요', '의자 앞쪽에 앉아 등을 펴요', '다리를 꼬아요'], answer: 1, difficulty: 0.1, explain: '의자 앞쪽에 앉아 등을 펴면 숨이 잘 들어가요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '노래하는 바른 자세',
      items: [
        { type: 'check', prompt: '서서 노래할 때 바른 자세에 ✓ 하세요.', options: ['두 발을 어깨너비로', '등을 곧게', '어깨를 올려요', '턱을 살짝 당겨요'] },
        { type: 'choice', prompt: '노래할 때 어깨는 어떻게 하나요?', options: ['힘을 빼고 내려요', '귀까지 올려요'], answer: '힘을 빼고 내려요' },
        { type: 'draw', prompt: '바른 자세로 노래하는 내 모습을 그리세요.' },
        { type: 'short', prompt: '자세를 바꾸니 노랫소리가 어떻게 달라졌는지 쓰세요.' },
      ],
      easy: {
        note: '발 벌리고, 등 펴고, 어깨 힘 빼요.',
        items: [
          { type: 'choice', prompt: '바른 자세에 ○ 하세요.', options: ['등을 펴요', '엎드려요'], answer: '등을 펴요' },
          { type: 'choice', prompt: '앉을 때는?', options: ['의자 앞쪽에', '다리를 꼬고'], answer: '의자 앞쪽에' },
          { type: 'draw', prompt: '바른 자세로 노래하는 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 건반은 들을 때 눌린 건반이 비쳐요.',
      base: '자세를 몸으로 해 보고 나눈 뒤, 귀로만 듣고 건반을 쳐요.',
      challenge: '자세가 아닌 카드를 골라내고, 계이름 없이 다섯 음 가락을 쳐요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 자세는 노랫소리와 상관없다고 여긴다 → 구부린 자세와 바른 자세로 같은 소리를 내 견주게 한다. ② 바르게 서라고 하면 어깨까지 힘이 들어간다 → 어깨를 올렸다가 툭 떨어뜨리는 놀이로 힘 빼기를 익힌다. ③ 턱을 너무 들어 목이 긴장한다 → 손가락 하나로 턱을 살짝 당기는 시늉을 하게 한다.',
  }));

  lessons.push(L(14, {
    title: '리듬 악기 바르게 잡고 소리 내기',
    objective: '캐스터네츠·트라이앵글·탬버린·리듬 막대를 잡는 자리를 짚어 말하고, 바르게 잡아 리듬을 칠 수 있다.',
    illustration: ART('paper rhythm instruments on a mat: castanets on an open palm, a triangle hanging from a string, a tambourine held by its frame and two rhythm sticks', '악기를 바르게 잡아요', [
      { motif: 'star', x: 120, y: 86, s: 0.6 }, { motif: 'flower', x: 110, y: 226, color: 'buttercup' }, { motif: 'tree', x: 400, y: 214 }]),
    safety: SING_SAFE,
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"트라이앵글을 손으로 꽉 쥐고 칠 때와 줄에 매달아 칠 때, 소리가 어떻게 다를까요?" 두 가지로 쳐서 들려준다. 쥐고 치면 \'틱\' 하고 바로 멈추고, 매달아 치면 \'띠잉—\' 길게 울린다는 것을 짚는다. 시연 단추로 악기와 잡는 법이 이어지는 모습을 보여 준다. 악기는 바구니에서 하나씩 꺼내고 다 쓰면 바로 넣는 약속을 먼저 한다.',
        student: '두 트라이앵글 소리를 듣고, 어느 쪽이 더 길게 울렸는지 손을 들어 골라 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '악기 잡는 법', slots: [{ id: 's1', label: '트라이앵글' }], cards: ['줄을 잡고 매달아요', '몸통을 꽉 쥐어요'], shuffle: false }, sequence: [{ match: { s1: '줄을 잡고 매달아요' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 악기 잡는 자리 알기', minutes: 13, tool: 'mindmap',
            teacher: '"캐스터네츠는 손바닥 위에 올려놓고 다른 손 손끝으로 쳐요. 탬버린은 어디를 잡을까요?" 악기를 하나씩 들어 보이며 잡는 자리를 손으로 짚게 한다. 탬버린 가죽 면을 손바닥으로 덮어 잡는 학생에게 쳐 보게 하고 소리가 어떻게 되는지 묻는다. 모둠마다 악기를 돌려 가며 실제로 잡아 본다.',
            task: '악기와 잡는 법을 잇고, 바르게 잡은 모습과 고쳐 잡을 모습을 나누어요.',
            levels: CARD_LV(),
            items: [
              { prompt: '악기와 바르게 잡는 법을 이어 보세요.', toolOptions: { mode: 'match', topic: '악기 잡는 법', slots: [{ id: 's1', label: '캐스터네츠' }, { id: 's2', label: '탬버린' }, { id: 's3', label: '리듬 막대' }], cards: ['손바닥 위에 올려요', '나무 테를 잡아요', '두 손에 하나씩 가볍게 쥐어요'] },
                target: { match: { s1: '손바닥 위에 올려요', s2: '나무 테를 잡아요', s3: '두 손에 하나씩 가볍게 쥐어요' } }, difficulty: 0.15,
                levels: { easy: { prompt: '악기와 바르게 잡는 법 두 짝을 이어 보세요.', toolOptions: { slots: [{ id: 's1', label: '캐스터네츠' }, { id: 's2', label: '탬버린' }], cards: ['손바닥 위에 올려요', '나무 테를 잡아요'] }, target: { match: { s1: '손바닥 위에 올려요', s2: '나무 테를 잡아요' } } } } },
              { prompt: '악기를 잡은 모습을 바르게 잡았어요와 고쳐 잡아요로 나누어 보세요.', toolOptions: { topic: '악기 잡은 모습', slots: ['바르게 잡았어요', '고쳐 잡아요'], cards: ['트라이앵글 줄을 잡았어요', '트라이앵글 몸통을 쥐었어요', '탬버린 테를 잡았어요', '탬버린 가죽을 손으로 덮었어요'] },
                target: { sort: { '바르게 잡았어요': ['트라이앵글 줄을 잡았어요', '탬버린 테를 잡았어요'], '고쳐 잡아요': ['트라이앵글 몸통을 쥐었어요', '탬버린 가죽을 손으로 덮었어요'] } }, difficulty: 0.15 },
              { prompt: '트라이앵글 소리가 길게 울리게 하는 방법만 골라 보세요.', toolOptions: { mode: 'pick', basket: '길게 울리는 방법', cards: ['줄을 잡고 매달아요', '쇠막대로 아래 변을 쳐요', '몸통을 손으로 꽉 쥐어요'] },
                target: { pick: ['줄을 잡고 매달아요', '쇠막대로 아래 변을 쳐요'] }, difficulty: 0.15,
                predict: { q: '트라이앵글 몸통을 쥐고 치면 소리가 어떨까요?', options: ['길게 울려요', '금방 멈춰요'], answer: 1 },
                conclude: '몸통을 쥐면 떨림이 멈춰 소리가 짧아져요. 줄에 매달아야 길게 울려요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 바르게 잡고 리듬 치기', minutes: 13, tool: 'keyboard',
            teacher: '"리듬 듣기를 누르고 손뼉으로 먼저 따라 쳐요. 그다음 블록을 놓고, 내 악기로 쳐 봐요." 블록을 놓은 뒤 실제 악기를 바르게 잡고 그 리듬을 친다. 4분쉼표에서 악기를 계속 치는 학생에게 "쉼표는 악기도 쉬어요"라고 말한다.',
            task: '리듬을 듣고 블록으로 놓은 뒤, 내 악기를 바르게 잡고 그 리듬을 쳐요.',
            levels: RHY_LV(),
            items: [
              { prompt: '리듬 듣기를 누르고, 캐스터네츠 리듬을 블록으로 놓아 보세요.', toolOptions: { pattern: ['q', 'q', 'h', 'q', 'q', 'h'] }, target: { rhythm: ['q', 'q', 'h', 'q', 'q', 'h'] }, difficulty: 0.1 },
              { prompt: '치고 한 번 쉬는 탬버린 리듬을 듣고 블록으로 놓아 보세요.', toolOptions: { pattern: ['q', 'qr', 'q', 'qr', 'q', 'q', 'h'] }, target: { rhythm: ['q', 'qr', 'q', 'qr', 'q', 'q', 'h'] }, difficulty: 0.2 },
              { prompt: '내 악기를 바르게 잡고, 방금 놓은 두 리듬을 차례로 쳐요. 짝이 잡는 법을 봐 줘요. 다 했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"악기를 바르게 잡았더니 소리가 어땠나요?" 두세 명이 말한다. 악기는 바구니에 종류별로 넣고, 트라이앵글 쇠막대는 줄에 묶어 둔다. 다음 시간에는 노래하기 전에 숨 쉬는 법을 익힌다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '악기 잡은 모습', slots: ['바르게 잡았어요', '고쳐 잡아요'], cards: ['리듬 막대를 가볍게 쥐었어요', '캐스터네츠를 손가락 끝에 매달았어요', '캐스터네츠를 손바닥에 올렸어요'] }, prompt: '악기 잡은 모습을 나누어 보세요.', target: { sort: { '바르게 잡았어요': ['리듬 막대를 가볍게 쥐었어요', '캐스터네츠를 손바닥에 올렸어요'], '고쳐 잡아요': ['캐스터네츠를 손가락 끝에 매달았어요'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '탬버린은 어디를 잡나요?', options: ['나무 테', '가죽 면 한가운데', '방울'], answer: 0, difficulty: 0.1, explain: '테를 잡아야 가죽 면이 떨려 소리가 잘 나요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '악기를 바르게 잡아요',
      items: [
        { type: 'table', prompt: '악기마다 잡는 곳을 쓰세요.', columns: ['악기', '잡는 곳'], cells: [['트라이앵글', ''], ['탬버린', ''], ['캐스터네츠', '']] },
        { type: 'choice', prompt: '트라이앵글이 길게 울리는 잡는 법에 ○ 하세요.', options: ['줄을 잡아요', '몸통을 쥐어요'], answer: '줄을 잡아요' },
        { type: 'check', prompt: '악기를 쓸 때 지킬 약속에 ✓ 하세요.', options: ['쇠막대를 휘두르지 않아요', '다 쓰면 바구니에 넣어요', '친구 귀에 대고 치지 않아요'] },
        { type: 'draw', prompt: '내가 바르게 잡은 악기를 그리세요.' },
      ],
      easy: {
        note: '트라이앵글은 줄, 탬버린은 테!',
        items: [
          { type: 'choice', prompt: '트라이앵글은 어디를 잡나요?', options: ['줄', '몸통'], answer: '줄' },
          { type: 'choice', prompt: '탬버린은 어디를 잡나요?', options: ['테', '가죽'], answer: '테' },
          { type: 'draw', prompt: '내 악기를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '짝 잇기가 두 짝이고 맞는 칸에 초록 테두리가 생겨요. 리듬 판에 마디마다 박 수가 보여요.',
      base: '세 악기를 잇고, 리듬을 귀로 듣고 놓아요.',
      challenge: '리듬 블록이 더 많아 귀로 더 잘 가려 들어야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 트라이앵글 몸통을 쥐고 친다 → 쥔 채 치기와 매달아 치기를 견주어 들려준다. ② 탬버린 가죽을 손바닥으로 덮는다 → 덮고 칠 때 소리가 둔해지는 것을 들려준다. ③ 악기를 받자마자 마구 친다 → \'손 무릎\' 신호를 정해 두고, 신호에 악기를 무릎 위에 내려놓게 한다. 학교에 없는 악기는 다른 리듬 악기로 바꾸되 잡는 자리는 그 악기에 맞게 다시 짚는다.',
  }));

  lessons.push(L(15, {
    title: '숨 쉬고 입 벌려 소리 이어 부르기',
    objective: '노래를 시작하기 전에 숨을 들이마시는 차례를 알고, 숨 쉴 자리에서 숨을 쉬며 가락을 이어 부를 수 있다.',
    illustration: ART('a paper child taking a deep breath with a balloon-like belly, then singing with an open mouth, small breath marks between music notes', '숨 쉬고 노래해요', [
      { motif: 'cloud', x: 330, y: 70, s: 0.8 }, { motif: 'bird', x: 140, y: 90 }, { motif: 'tree', x: 400, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"한 손을 배에 올려요. 코로 꽃 냄새를 맡듯 숨을 천천히 들이마셔 볼까요? 배가 어떻게 되었나요?" 배가 볼록해지는 것을 느끼게 한다. "이번에는 \'스—\' 하고 천천히 내쉬어요." 몇 초 동안 내쉬었는지 함께 센다. 시연 단추로 노래 시작 차례가 놓이는 모습을 보여 준다.',
        student: '배에 손을 얹고 숨을 들이마신 뒤 "스—" 하고 몇 초 동안 내쉴 수 있는지 세어 봐요.',
        demo: { tool: 'story', options: { cards: [{ id: 'b1', text: '숨을 들이마셔요', motif: 'cloud' }, { id: 'b2', text: '첫 음을 불러요', motif: 'bird' }], slots: 2, shuffle: false }, sequence: [{ order: ['b1', 'b2'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 노래 시작과 숨 쉬는 자리', minutes: 12, tool: 'story',
            teacher: '"노래를 부르기 전에 무엇부터 할까요?" 장면을 차례로 놓은 뒤 실제로 그 차례대로 해 본다. 숨을 아무 데서나 쉬면 낱말이 끊긴다는 것을 \'기억 상—(숨)—자\'처럼 일부러 끊어 불러 들려준다. 셋째 문항은 숨 쉬는 자리 표시(∨)가 낱말 사이에 있다는 것을 짚는다.',
            task: '노래를 시작하는 차례와 숨 쉬는 차례를 장면 카드로 놓아요.',
            levels: CARD_LV(),
            items: [
              { prompt: '노래를 부르기 시작하는 차례대로 장면을 놓아 보세요.', toolOptions: { slots: 3, cards: [{ id: 'k1', text: '바른 자세로 서요', motif: 'tree' }, { id: 'k2', text: '코로 숨을 들이마셔요', motif: 'cloud' }, { id: 'k3', text: '첫 음을 불러요', motif: 'bird' }] },
                target: { order: ['k1', 'k2', 'k3'] }, difficulty: 0.05 },
              { prompt: '숨이 모자라지 않게 한 줄을 부르는 차례대로 놓아 보세요.', toolOptions: { slots: 4, cards: [{ id: 'm1', text: '숨을 들이마셔요', motif: 'cloud' }, { id: 'm2', text: '첫째 줄을 불러요', motif: 'bird' }, { id: 'm3', text: '줄 끝에서 숨을 쉬어요', motif: 'leaf' }, { id: 'm4', text: '둘째 줄을 불러요', motif: 'star' }] },
                target: { order: ['m1', 'm2', 'm3', 'm4'] }, difficulty: 0.15,
                levels: { challenge: { prompt: '숨이 모자라지 않게 부르는 차례대로 놓아 보세요. 차례에 들어가지 않는 장면이 하나 있어요.', toolOptions: { cards: [{ id: 'm1', text: '숨을 들이마셔요', motif: 'cloud' }, { id: 'm2', text: '첫째 줄을 불러요', motif: 'bird' }, { id: 'm3', text: '줄 끝에서 숨을 쉬어요', motif: 'leaf' }, { id: 'm4', text: '둘째 줄을 불러요', motif: 'star' }, { id: 'm5', text: '낱말 한가운데서 숨을 쉬어요', motif: 'moon' }] } } } },
              { prompt: '숨 쉬기에 알맞은 자리만 골라 보세요.', toolOptions: { mode: 'pick', basket: '숨 쉬는 자리', cards: ['"열어 보면" 다음', '"들려요" 다음', '"상"과 "자" 사이', '"고"와 "마" 사이'] },
                target: { pick: ['"열어 보면" 다음', '"들려요" 다음'] }, difficulty: 0.2,
                predict: { q: '낱말 한가운데서 숨을 쉬면 어떻게 들릴까요?', options: ['자연스러워요', '낱말이 끊겨요'], answer: 1 },
                conclude: '숨은 줄 끝이나 낱말과 낱말 사이에서 쉬어야 노랫말이 끊기지 않아요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 한숨에 이어 부르기', minutes: 14, tool: 'keyboard',
            teacher: '"숨을 들이마시고 한숨에 이어 불러요." 가락 듣기를 누르고 \'라\'로 이어 부른 뒤 건반으로 친다. 가락 중간에 숨을 쉬는 학생에게 가락 길이를 손가락으로 세어 보고 시작 전에 숨을 넉넉히 들이마시게 한다. 입은 손가락 두 개가 세로로 들어갈 만큼 벌린다.',
            task: '숨을 들이마시고 한숨에 가락을 이어 부른 뒤, 건반으로 똑같이 쳐요.',
            levels: MEL_LV(),
            items: [
              { prompt: '숨을 들이마시고, 들은 가락을 한숨에 부른 뒤 건반으로 쳐 보세요.', target: { notes: ['솔', '솔', '미'] }, difficulty: 0.05 },
              { prompt: '조금 더 긴 가락이에요. 한숨에 부른 뒤 건반으로 쳐 보세요.', target: { notes: ['미', '레', '도', '레', '미'] }, difficulty: 0.15,
                levels: { easy: { prompt: '세 음 가락이에요. 한숨에 부른 뒤 건반으로 쳐 보세요.', target: { notes: ['미', '레', '도'] } } } },
              { prompt: '노래 첫 줄 "기억 상자 열어 보면" 가락이에요. 한숨에 부른 뒤 건반으로 쳐 보세요.', target: { notes: ['도', '미', '솔', '솔', '라', '라', '솔', '솔'] }, difficulty: 0.25,
                levels: { easy: { prompt: '노래 첫 줄 "기억 상자" 가락이에요. 한숨에 부른 뒤 건반으로 쳐 보세요.', target: { notes: ['도', '미', '솔', '솔'] } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"숨을 넉넉히 들이마시고 부르니 어땠나요?" 모두 함께 바른 자세로 서서 숨을 들이마신 뒤 첫 줄을 한숨에 불러 본다. 다음 시간에는 악기마다 소리 내는 방법을 견주어 본다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { cards: [{ id: 'e1', text: '어깨 힘을 빼요', motif: 'leaf' }, { id: 'e2', text: '숨을 들이마셔요', motif: 'cloud' }, { id: 'e3', text: '노래를 시작해요', motif: 'bird' }], slots: 3 }, prompt: '노래를 시작하는 차례대로 장면을 놓아 보세요.', target: { order: ['e1', 'e2', 'e3'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '숨을 쉬기에 알맞은 곳은?', options: ['낱말 한가운데', '줄이 끝나는 곳', '아무 데나'], answer: 1, difficulty: 0.1, explain: '줄이 끝나는 곳에서 쉬어야 노랫말이 끊기지 않아요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '숨 쉬고 노래해요',
      items: [
        { type: 'figure', wide: true, prompt: '노래를 시작하는 차례대로 1, 2, 3을 쓰세요.', tool: 'story', figures: [{ options: { cards: [{ id: 'k3', text: '첫 음을 불러요', motif: 'bird' }, { id: 'k1', text: '바른 자세로 서요', motif: 'tree' }, { id: 'k2', text: '숨을 들이마셔요', motif: 'cloud' }], slots: 3, shuffle: false }, caption: '' }], answer: '서요-들이마셔요-불러요' },
        { type: 'choice', prompt: '숨을 들이마시면 배는 어떻게 되나요?', options: ['볼록해져요', '홀쭉해져요'], answer: '볼록해져요' },
        { type: 'blank', prompt: '숨 쉬는 자리에 ∨를 하세요.', text: '기억 상자 열어 보면  웃음소리 들려요' },
        { type: 'short', prompt: '"스—" 하고 몇 초 동안 내쉬었는지 쓰세요.' },
      ],
      easy: {
        note: '숨은 줄 끝에서 쉬어요.',
        items: [
          { type: 'choice', prompt: '노래하기 전에 할 일은?', options: ['숨 들이마시기', '소리 지르기'], answer: '숨 들이마시기' },
          { type: 'choice', prompt: '숨은 어디에서 쉬나요?', options: ['줄 끝', '낱말 한가운데'], answer: '줄 끝' },
          { type: 'draw', prompt: '숨을 들이마시는 내 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '가락이 세 음·네 음으로 짧고, 들을 때 건반이 비쳐요. 맞는 자리에 초록 테두리가 생겨요.',
      base: '노래 첫 줄 여덟 음을 한숨에 부르고 쳐요.',
      challenge: '계이름 없이 귀로만 듣고 치고, 차례에 들어가지 않는 장면을 골라내요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 숨을 들이마실 때 어깨가 올라간다 → 배에 손을 얹고 배가 볼록해지는지 본다. ② 낱말 한가운데에서 숨을 쉰다 → 숨 쉬는 자리 ∨를 가사판에 미리 표시한다. ③ 입을 작게 벌려 소리가 작다 → 손가락 두 개를 세로로 넣어 입 크기를 재어 본다. 숨을 너무 오래 참게 하지 않는다(어지러울 수 있다).',
  }));

  lessons.push(L(16, {
    title: '악기마다 소리 내는 방법 견주어 보기',
    objective: '치기·흔들기·긁기로 소리 내는 악기를 나누고, 소리를 작게 또는 길게 내는 방법을 골라 말할 수 있다.',
    illustration: ART('paper instruments grouped on a table: a wood block and a small drum with sticks, a pair of maracas, and a ridged guiro with a scraper', '어떻게 소리를 낼까요?', [
      { motif: 'star', x: 120, y: 86, s: 0.6 }, { motif: 'leaf', x: 110, y: 226 }, { motif: 'tree', x: 400, y: 214 }]),
    safety: SING_SAFE,
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"눈을 감고 들어 보세요. 어떤 방법으로 소리를 냈을까요?" 우드블록을 치고, 마라카스를 흔들고, 귀로를 긁어 들려준다. 학생이 \'흔들었어요\', \'긁었어요\'처럼 방법으로 말하게 한다. 귀로가 없으면 빨래판이나 골판지를 막대로 긁어 대신 들려준다. 시연 단추로 악기가 소리 내는 방법에 따라 나뉘는 모습을 보여 준다.',
        student: '눈을 감고 소리를 듣고, 선생님이 친 것인지 흔든 것인지 긁은 것인지 손짓으로 나타내 봐요.',
        demo: { tool: 'mindmap', options: { topic: '소리 내는 방법', slots: ['쳐요', '흔들어요'], cards: ['우드블록', '마라카스'], shuffle: false }, sequence: [{ sort: { '쳐요': ['우드블록'], '흔들어요': ['마라카스'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 소리 내는 방법으로 나누기', minutes: 13, tool: 'mindmap',
            teacher: '"이 악기는 무엇으로, 어떻게 소리를 낼까요?" 실제 악기를 하나씩 들어 보이고 소리를 내 본 뒤 놓게 한다. 둘째 문항에서는 쳐 본 뒤 소리가 얼마나 오래 울리는지 손을 들고 있다가 소리가 멈추면 내리게 한다. 탬버린처럼 치기도 하고 흔들기도 하는 악기는 오늘 카드에 넣지 않았다고 미리 말해 준다.',
            task: '악기를 소리 내는 방법과 소리 길이에 따라 나누고, 작게 내는 방법을 골라요.',
            levels: CARD_LV(),
            items: [
              { prompt: '악기를 소리 내는 방법에 따라 나누어 보세요.', toolOptions: { topic: '소리 내는 방법', slots: ['쳐요', '흔들어요', '긁어요'], cards: ['작은북', '마라카스', '귀로', '트라이앵글', '에그 셰이커'] },
                target: { sort: { '쳐요': ['작은북', '트라이앵글'], '흔들어요': ['마라카스', '에그 셰이커'], '긁어요': ['귀로'] } }, difficulty: 0.15,
                levels: { easy: { prompt: '악기를 치는 악기와 흔드는 악기로 나누어 보세요.', toolOptions: { slots: ['쳐요', '흔들어요'], cards: ['작은북', '마라카스', '트라이앵글', '에그 셰이커'] }, target: { sort: { '쳐요': ['작은북', '트라이앵글'], '흔들어요': ['마라카스', '에그 셰이커'] } } } } },
              { prompt: '한 번 쳤을 때 소리가 길게 울리는 악기와 짧게 끊기는 악기로 나누어 보세요.', toolOptions: { topic: '소리 길이', slots: ['길게 울려요', '짧게 끊겨요'], cards: ['트라이앵글', '심벌즈', '우드블록', '캐스터네츠'] },
                target: { sort: { '길게 울려요': ['트라이앵글', '심벌즈'], '짧게 끊겨요': ['우드블록', '캐스터네츠'] } }, difficulty: 0.2,
                predict: { q: '쇠로 된 악기와 나무로 된 악기 가운데 어느 쪽이 길게 울릴까요?', options: ['쇠', '나무'], answer: 0 },
                conclude: '트라이앵글·심벌즈 같은 쇠 악기는 오래 떨려 길게 울리고, 나무 악기는 소리가 짧아요.' },
              { prompt: '악기 소리를 작게 내는 방법만 골라 보세요.', toolOptions: { mode: 'pick', basket: '작게 내는 방법', cards: ['살살 쳐요', '조금만 흔들어요', '힘껏 내리쳐요', '팔을 크게 휘둘러 흔들어요'] },
                target: { pick: ['살살 쳐요', '조금만 흔들어요'] }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['살살 쳐요', '조금만 흔들어요', '힘껏 내리쳐요', '팔을 크게 휘둘러 흔들어요', '천천히 가볍게 긁어요'] }, target: { pick: ['살살 쳐요', '조금만 흔들어요', '천천히 가볍게 긁어요'] }, prompt: '악기 소리를 작게 내는 방법만 모두 골라 보세요.' } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 흔드는 악기로 4박 짓기', minutes: 13, tool: 'keyboard',
            teacher: '"마라카스로 \'차—\'는 길게, \'착착\'은 짧게 흔들어 볼까요?" 2분음표는 두 박 동안 길게 흔들고 8분음표 둘은 한 박에 두 번 흔든다는 것을 몸으로 익힌다. 블록으로 마디를 채운 뒤 흔드는 악기로 실제로 쳐 본다. 박이 모자라거나 넘치는 학생에게 박 수를 손가락으로 세게 한다.',
            task: '흔드는 악기로 칠 리듬을 블록으로 지어 마디를 4박씩 채우고, 직접 흔들어 쳐요.',
            levels: RHY_LV(),
            items: [
              { prompt: '마디가 모두 4박이 되도록 마라카스 리듬을 지어 보세요.', target: { beats: true }, difficulty: 0.15 },
              { prompt: '8분음표를 꼭 넣어 마디가 모두 4박인 에그 셰이커 리듬을 지어 보세요.', target: { beats: true, use: ['e'] }, difficulty: 0.2 },
              { prompt: '쉬는 박을 두 번 넘게 넣어 마디가 모두 4박인 리듬을 지어 보세요.', target: { beats: true, rests: 2 }, difficulty: 0.25,
                levels: { challenge: { prompt: '8분음표를 넣고 쉬는 박을 두 번 넘게 넣어, 마디가 모두 4박인 리듬을 지어 보세요.', target: { beats: true, use: ['e'], rests: 2 } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"내가 지은 리듬을 흔드는 악기로 쳐 볼까요?" 모둠마다 한 사람씩 지은 리듬을 친다. 친구 리듬을 다 같이 손뼉으로 따라 쳐 준다. 악기는 바구니에 종류별로 정리한다. 다음 시간부터는 \'기억 상자\' 노래를 바른 자세로 끝까지 불러 본다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '소리 내는 방법', slots: ['쳐요', '흔들어요'], cards: ['우드블록', '방울', '소고'] }, prompt: '악기를 소리 내는 방법에 따라 나누어 보세요.', target: { sort: { '쳐요': ['우드블록', '소고'], '흔들어요': ['방울'] } }, difficulty: 0.1 },
          { type: 'tool', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 1, blocks: ['q', 'e', 'h', 'qr'] }, prompt: '한 마디를 4박으로 채우는 리듬을 놓아 보세요.', target: { beats: true }, difficulty: 0.15 },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '소리 내는 방법',
      items: [
        { type: 'table', prompt: '악기를 소리 내는 방법에 따라 쓰세요.', columns: ['쳐요', '흔들어요', '긁어요'], rows: 2 },
        { type: 'choice', prompt: '길게 울리는 악기에 ○ 하세요.', options: ['트라이앵글', '우드블록', '캐스터네츠'], answer: '트라이앵글' },
        { type: 'check', prompt: '소리를 작게 내는 방법에 ✓ 하세요.', options: ['살살 쳐요', '조금만 흔들어요', '천천히 가볍게 긁어요'] },
        { type: 'short', prompt: '내가 지은 4박 리듬을 말로 쓰세요. (예: 차 차 착착 차)' },
      ],
      easy: {
        note: '치고, 흔들고, 긁어요.',
        items: [
          { type: 'choice', prompt: '마라카스는 어떻게 소리를 내나요?', options: ['흔들어요', '긁어요'], answer: '흔들어요' },
          { type: 'choice', prompt: '작은 소리를 내려면?', options: ['살살 쳐요', '힘껏 쳐요'], answer: '살살 쳐요' },
          { type: 'draw', prompt: '좋아하는 악기를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '치기·흔들기 두 갈래로만 나누고, 리듬 판에 마디마다 박 수가 보여요.',
      base: '세 갈래로 나누고, 조건에 맞는 리듬을 지어요.',
      challenge: '작게 내는 방법을 다섯 장에서 모두 고르고, 8분음표와 쉼표를 함께 넣어 리듬을 지어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 탬버린·소고처럼 여러 방법으로 소리 내는 악기에서 헷갈린다 → 오늘은 한 가지 방법으로만 소리 내는 악기를 쓴다고 말한다. ② 작게 내라고 하면 아예 멈춘다 → \'살살\'과 \'멈춤\'을 견주어 들려준다. ③ 8분음표 둘을 두 박으로 센다 → \'착착\'을 손뼉 한 번 사이에 두 번 말하게 한다. 귀로가 없으면 골판지와 나무젓가락으로 만든 긁는 악기로 대신한다.',
  }));

  // ───────────────────────── 17~20차시: 바른 자세로 부르고 박에 맞추어 치기(소리로 표현하기) ─────────────────────────

  lessons.push(L(17, {
    title: '기억 상자 노래를 바른 자세로 끝까지 부르기',
    objective: '\'기억 상자\' 노래 가락을 줄마다 듣고 따라 친 뒤, 바른 자세로 서서 소리를 지르지 않고 노래를 끝까지 부를 수 있다.',
    illustration: ART('a class of paper children standing in a neat row singing from a song chart titled memory box, an opened paper box with notes flying out', '기억 상자 노래', [
      { motif: 'star', x: 120, y: 86, s: 0.6 }, { motif: 'bird', x: 380, y: 80 }, { motif: 'flower', x: 250, y: 226, color: 'lavender' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"이 노래는 우리 반을 위해 선생님이 지은 \'기억 상자\'예요." 가사판을 붙이고 교사가 한 번 끝까지 불러 준다(가락은 이 단원 13차시 위의 메모). "노래 속에서 무엇이 들려온다고 했나요?" 가사 속 낱말을 찾게 한다. 시연 단추로 첫 줄 가락이 건반에서 쳐지는 모습을 보여 준다.',
        student: '가사판에서 "기억 상자"와 "고마워"를 찾아 손가락으로 짚어 봐요.',
        demo: { tool: 'keyboard', options: { from: '도', to: '높은도', names: 'solfa' }, sequence: [{ notes: ['도', '미', '솔', '솔'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 줄마다 가락 익히기', minutes: 15, tool: 'keyboard',
            teacher: '"한 줄씩 들어요. 선생님이 부르면 따라 부르고, 그다음 건반으로 쳐요." 줄마다 \'듣기 → 따라 부르기 → 치기\' 차례를 지킨다. 둘째 줄이 내려가는 가락이라는 것을 손 높이로 보여 준다. 셋째 줄 \'일 학년 이 학년\'은 같은 모양이 두 번 나온다는 것을 찾게 한다.',
            task: '노래를 한 줄씩 듣고 따라 부른 뒤, 건반으로 그 줄의 가락을 쳐요.',
            levels: MEL_LV(),
            items: [
              { prompt: '첫째 줄 "기억 상자 열어 보면"을 듣고 따라 부른 뒤 건반으로 쳐 보세요.', target: { notes: ['도', '미', '솔', '솔', '라', '라', '솔', '솔'] }, difficulty: 0.2,
                levels: { easy: { prompt: '첫째 줄 앞부분 "기억 상자"를 듣고 따라 부른 뒤 건반으로 쳐 보세요.', target: { notes: ['도', '미', '솔', '솔'] } } } },
              { prompt: '둘째 줄 "웃음소리 들려요"를 듣고 따라 부른 뒤 건반으로 쳐 보세요.', target: { notes: ['파', '파', '미', '미', '레', '레', '도'] }, difficulty: 0.2,
                levels: { easy: { prompt: '둘째 줄 앞부분 "웃음소리"를 듣고 따라 부른 뒤 건반으로 쳐 보세요.', target: { notes: ['파', '파', '미', '미'] } } } },
              { prompt: '셋째 줄 "일 학년 이 학년"을 듣고 따라 부른 뒤 건반으로 쳐 보세요.', target: { notes: ['미', '미', '솔', '미', '미', '솔'] }, difficulty: 0.15,
                predict: { q: '셋째 줄에는 같은 가락 모양이 몇 번 나올까요?', options: ['한 번', '두 번'], answer: 1 },
                conclude: '"일 학년"과 "이 학년"은 똑같은 가락 "미 미 솔"이 두 번 되풀이돼요.' },
              { prompt: '넷째 줄 "함께해서 고마워"를 듣고 따라 부른 뒤 건반으로 쳐 보세요.', target: { notes: ['라', '솔', '파', '미', '레', '레', '도'] }, difficulty: 0.25,
                levels: { easy: { prompt: '넷째 줄 뒷부분 "고마워"를 듣고 따라 부른 뒤 건반으로 쳐 보세요.', target: { notes: ['레', '레', '도'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 끝까지 잘 부르는 모습', minutes: 11, tool: 'mindmap',
            teacher: '"가장 크게 부르는 친구가 가장 잘 부르는 걸까요?" 고운 소리와 소리 지르기를 교사가 들려주고 견주게 한다. 카드를 나눈 뒤 모두 일어나 바른 자세로 노래를 처음부터 끝까지 부른다. 소리를 지르는 학생이 있으면 "옆 친구 소리가 들리나요?" 하고 묻는다.',
            task: '노래를 잘 부르는 모습을 고르고, 바른 자세로 노래를 끝까지 불러요.',
            levels: CARD_LV(),
            items: [
              { prompt: '노래를 끝까지 잘 부르는 모습만 골라 보세요.', toolOptions: { mode: 'pick', basket: '잘 부르는 모습', cards: ['노랫말을 또박또박 불러요', '친구 소리를 들으며 불러요', '가장 크게 소리 질러요', '중간에 멈추고 웃어요'] },
                target: { pick: ['노랫말을 또박또박 불러요', '친구 소리를 들으며 불러요'] }, difficulty: 0.1 },
              { prompt: '노래 부르는 소리를 고운 소리와 소리 지르기로 나누어 보세요.', toolOptions: { topic: '노래 부르는 소리', slots: ['고운 소리', '소리 지르기'], cards: ['목에 힘을 주고 외쳐요', '숨을 쉬고 부드럽게 불러요', '옆 친구보다 크게만 불러요', '입을 벌려 둥글게 불러요'] },
                target: { sort: { '고운 소리': ['숨을 쉬고 부드럽게 불러요', '입을 벌려 둥글게 불러요'], '소리 지르기': ['목에 힘을 주고 외쳐요', '옆 친구보다 크게만 불러요'] } }, difficulty: 0.2,
                predict: { q: '가장 크게 부르면 가장 잘 부른 걸까요?', options: ['네', '아니요'], answer: 1 },
                conclude: '고운 소리는 숨을 쉬고 힘을 빼고 부를 때 나요. 크게 지르면 목이 아파요.' },
              { prompt: '모두 일어나 바른 자세로 "기억 상자"를 처음부터 끝까지 불러요. 다 불렀으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 노래를 끝까지 부르고 나니 어떤 기억이 떠올랐나요?" 두세 명이 말한다. 노래는 다음 시간에 캐스터네츠로 박을 치며 다시 부른다. 가사판은 교실에 붙여 두고 아침마다 한 번씩 부른다.',
        exitTicket: [
          { type: 'tool', tool: 'keyboard', options: { from: '도', to: '높은도', names: 'solfa' }, prompt: '"일 학년" 부분 가락을 듣고 건반으로 쳐 보세요.', target: { notes: ['미', '미', '솔'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '노래를 잘 부르는 방법으로 알맞은 것은?', options: ['가장 크게 소리 질러요', '숨을 쉬고 바른 자세로 불러요', '빨리 끝내요'], answer: 1, difficulty: 0.1, explain: '바른 자세로 숨을 쉬고 부르면 고운 소리가 나요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '기억 상자 노래',
      items: [
        { type: 'blank', prompt: '노랫말의 빈칸을 채우세요.', text: '기억 상자 열어 보면 ___소리 들려요', answer: '웃음' },
        { type: 'choice', prompt: '셋째 줄에서 되풀이되는 가락에 ○ 하세요.', options: ['미 미 솔', '도 레 미'], answer: '미 미 솔' },
        { type: 'check', prompt: '오늘 노래할 때 내가 지킨 것에 ✓ 하세요.', options: ['바른 자세로 섰어요', '숨 쉬는 자리에서 숨을 쉬었어요', '친구 소리를 들으며 불렀어요'] },
        { type: 'draw', prompt: '노래를 부르며 떠오른 기억을 그리세요.' },
      ],
      easy: {
        note: '크게 말고 곱게!',
        items: [
          { type: 'choice', prompt: '고운 소리에 ○ 하세요.', options: ['부드럽게 불러요', '소리 질러요'], answer: '부드럽게 불러요' },
          { type: 'short', prompt: '노래에서 좋아하는 낱말을 쓰세요.' },
          { type: 'draw', prompt: '떠오른 기억을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '줄마다 앞부분 네 음(마지막 줄은 세 음)만 치고, 들을 때 건반이 비쳐요.',
      base: '한 줄 전체 가락을 귀로 듣고 쳐요.',
      challenge: '계이름 없이 한 줄 전체를 귀로만 듣고 쳐요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 크게 부를수록 잘 부른다고 여긴다 → 고운 소리와 소리 지르기를 견주어 들려주고, 목이 아픈지 묻는다. ② 둘째·넷째 줄 내려가는 가락이 위로 올라간다 → 손을 계단처럼 내리며 부른다. ③ 건반 치기에 오래 걸려 노래를 못 부른다 → 노래 부르기(활동 2)를 먼저 하고 건반은 쉬움으로 해도 된다. 노래는 이 단원을 위해 지은 것이라 저작권 걱정 없이 녹음해 가정에 보내도 된다.',
  }));

  lessons.push(L(18, {
    title: '노래의 박에 맞추어 캐스터네츠 치기',
    objective: '\'기억 상자\' 노래를 부르며 박마다, 또는 마디 첫 박에만 캐스터네츠를 바르게 잡고 칠 수 있다.',
    illustration: ART('paper children sitting in a circle, each holding red and blue castanets on an open palm, tapping along with a big beat drum in the middle', '박에 맞추어 쳐요', [
      { motif: 'star', x: 120, y: 86, s: 0.6 }, { motif: 'flower', x: 110, y: 226, color: 'rose' }, { motif: 'flower', x: 400, y: 226, color: 'sky' }]),
    safety: SING_SAFE,
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"노래를 부르며 무릎을 \'하나 둘 셋 넷\' 하고 쳐 볼까요?" 교사가 노래를 부르고 학생은 무릎으로 박을 친다. 박이 빨라지는 학생에게 "노래와 손이 같이 가나요?" 하고 묻는다. 시연 단추로 박마다 한 블록씩 놓이는 모습을 보여 준다. 캐스터네츠는 지난 시간처럼 손바닥 위에 올린다.',
        student: '선생님 노래에 맞추어 무릎을 하나 둘 셋 넷 하고 쳐 봐요.',
        demo: { tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 1, blocks: ['q', 'h', 'qr'] }, sequence: [{ rhythm: ['q', 'q', 'q', 'q'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 반주 리듬 블록 놓기', minutes: 14, tool: 'keyboard',
            teacher: '"리듬 듣기를 누르고 손뼉으로 먼저 따라 쳐요." 블록으로 놓은 뒤 노래를 부르며 캐스터네츠로 쳐 본다. 첫 박에만 치는 리듬에서는 \'하나\'에서만 치고 \'둘 셋 넷\'은 손을 멈추고 마음속으로 센다. 마지막 마디에서 쉼표를 놓치는 학생에게 노래 끝 \'고마워\' 다음은 조용히 쉰다는 것을 짚는다.',
            task: '노래 반주 리듬을 듣고 블록으로 놓은 뒤, 노래를 부르며 캐스터네츠로 쳐요.',
            levels: RHY_LV(),
            items: [
              { prompt: '박마다 한 번씩 치는 두 마디 반주를 듣고 블록으로 놓아 보세요.', toolOptions: { pattern: ['q', 'q', 'q', 'q', 'q', 'q', 'q', 'q'] }, target: { rhythm: ['q', 'q', 'q', 'q', 'q', 'q', 'q', 'q'] }, difficulty: 0.05 },
              { prompt: '마디마다 첫 박과 셋째 박에만 치는 반주를 듣고 블록으로 놓아 보세요.', toolOptions: { pattern: ['h', 'h', 'h', 'h'] }, target: { rhythm: ['h', 'h', 'h', 'h'] }, difficulty: 0.15,
                predict: { q: '2분음표 하나는 몇 박일까요?', options: ['한 박', '두 박'], answer: 1 },
                conclude: '2분음표는 두 박이라 치고 나서 한 박 동안 기다려요.' },
              { prompt: '노래 끝 "고마워"에 붙이는 반주예요. 듣고 블록으로 놓아 보세요.', toolOptions: { pattern: ['q', 'q', 'q', 'q', 'q', 'q', 'h'] }, target: { rhythm: ['q', 'q', 'q', 'q', 'q', 'q', 'h'] }, difficulty: 0.15,
                levels: { challenge: { prompt: '노래 끝 "고마워" 반주예요. 마지막에 쉬는 박까지 듣고 블록으로 놓아 보세요.', toolOptions: { pattern: ['q', 'q', 'q', 'q', 'q', 'q', 'q', 'qr'] }, target: { rhythm: ['q', 'q', 'q', 'q', 'q', 'q', 'q', 'qr'] } } } },
              { prompt: '노래를 부르며 캐스터네츠로 박마다 치기, 첫 박과 셋째 박에 치기를 차례로 해요. 다 했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 박에 맞추어 치는 모습', minutes: 12, tool: 'mindmap',
            teacher: '"노래보다 빨리 치면 어떻게 들릴까요?" 일부러 노래보다 빨리 쳐서 들려준다. 박에 맞추어 치는 모습과 고칠 모습을 나누게 한다. 짝 모둠 연주를 듣고 박이 맞았는지 손가락 표시(엄지 위·옆)로 알려 주게 한다.',
            task: '박에 맞추어 치는 모습을 고르고, 짝 모둠의 연주를 듣고 박을 살펴요.',
            levels: CARD_LV(),
            items: [
              { prompt: '캐스터네츠를 치는 모습을 박에 맞아요와 고쳐요로 나누어 보세요.', toolOptions: { topic: '캐스터네츠 치는 모습', slots: ['박에 맞아요', '고쳐요'], cards: ['노래를 들으며 쳐요', '노래보다 점점 빨리 쳐요', '마음속으로 박을 세요', '쉬는 박에도 계속 쳐요'] },
                target: { sort: { '박에 맞아요': ['노래를 들으며 쳐요', '마음속으로 박을 세요'], '고쳐요': ['노래보다 점점 빨리 쳐요', '쉬는 박에도 계속 쳐요'] } }, difficulty: 0.15 },
              { prompt: '박을 잘 맞추게 도와주는 방법만 골라 보세요.', toolOptions: { mode: 'pick', basket: '박 맞추기 도움', cards: ['발끝으로 박을 같이 세요', '선생님 손짓을 봐요', '친구보다 먼저 치려고 해요'] },
                target: { pick: ['발끝으로 박을 같이 세요', '선생님 손짓을 봐요'] }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['발끝으로 박을 같이 세요', '선생님 손짓을 봐요', '친구보다 먼저 치려고 해요', '노랫말을 입으로 함께 불러요', '눈을 감고 아무 때나 쳐요'] }, target: { pick: ['발끝으로 박을 같이 세요', '선생님 손짓을 봐요', '노랫말을 입으로 함께 불러요'] }, prompt: '박을 잘 맞추게 도와주는 방법만 모두 골라 보세요.' } } },
              { prompt: '짝 모둠의 연주를 듣고, 박이 맞았으면 엄지를 위로, 빨라졌으면 옆으로 들어 알려 줘요. 다 했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"박에 맞추어 치니 노래가 어떻게 들렸나요?" 반 전체가 노래 모둠과 캐스터네츠 모둠으로 나뉘어 한 번 함께 해 본다. 다음 시간에는 새 노래를 배우고 트라이앵글로 노래를 마무리한다. 캐스터네츠는 두 쪽을 맞붙여 바구니에 넣는다.',
        exitTicket: [
          { type: 'tool', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 1, blocks: ['q', 'h', 'qr'], pattern: ['h', 'q', 'q'] }, prompt: '리듬 듣기를 누르고 들은 한 마디 반주를 블록으로 놓아 보세요.', target: { rhythm: ['h', 'q', 'q'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '노래와 함께 박을 맞추어 치려면?', options: ['노래를 들으며 쳐요', '최대한 빨리 쳐요', '노래가 끝난 뒤 쳐요'], answer: 0, difficulty: 0.05, explain: '노래를 들으며 쳐야 박이 맞아요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '박에 맞추어 쳐요',
      items: [
        { type: 'table', prompt: '첫 박과 셋째 박에만 치는 반주예요. 치는 박에 ○, 쉬는 박에 × 하세요.', columns: ['하나', '둘', '셋', '넷'], cells: [['', '', '', '']] },
        { type: 'choice', prompt: '2분음표는 몇 박인가요?', options: ['한 박', '두 박', '네 박'], answer: '두 박' },
        { type: 'check', prompt: '박을 맞추는 데 도움이 된 방법에 ✓ 하세요.', options: ['발끝으로 세기', '선생님 손짓 보기', '노랫말 함께 부르기'] },
        { type: 'short', prompt: '박에 맞추어 쳤을 때 느낌을 쓰세요.' },
      ],
      easy: {
        note: '하나 둘 셋 넷, 노래를 들으며!',
        items: [
          { type: 'choice', prompt: '박에 맞추어 치려면?', options: ['노래를 들어요', '빨리 쳐요'], answer: '노래를 들어요' },
          { type: 'choice', prompt: '캐스터네츠는 어디에 올리나요?', options: ['손바닥 위', '머리 위'], answer: '손바닥 위' },
          { type: 'draw', prompt: '캐스터네츠를 치는 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '리듬 판에 마디마다 박 수가 보이고, 맞는 칸에 초록 테두리가 생겨요.',
      base: '반주 리듬을 귀로 듣고 놓은 뒤 노래와 함께 쳐요.',
      challenge: '마지막 쉬는 박까지 들어 놓고, 박 맞추기 방법을 다섯 장에서 모두 골라요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 치다 보면 점점 빨라진다 → 발끝으로 박을 함께 세고, 교사가 손으로 박을 크게 보여 준다. ② 2분음표를 한 박으로 친다 → \'치고-기다려\'를 말로 붙인다. ③ 캐스터네츠를 손가락 끝에 매달아 흔든다 → 손바닥 위에 올리는 자세를 다시 짚는다. 교실이 시끄러워지면 \'손 무릎\' 신호로 멈춘다.',
  }));

  // 이 단원의 둘째 노래 '사진첩'(직접 지음, 4/4박자, 도~라):
  //   ① 사진첩을 펼치면 — 솔 솔 미 미 솔 솔 미   ② 작은 내가 웃어요 — 라 라 솔 솔 미 미 레
  //   ③ 한 장 한 장 넘기면 — 미 미 레 레 미 미 솔   ④ 자란 내가 보여요 — 라 솔 미 레 레 도 도

  lessons.push(L(19, {
    title: '사진첩 노래 부르며 트라이앵글로 마무리',
    objective: '\'사진첩\' 노래 가락을 줄마다 듣고 따라 친 뒤, 줄 끝 박에 트라이앵글을 바르게 매달아 쳐서 노래를 마무리할 수 있다.',
    illustration: ART('an open paper photo album with small pictures of a child growing up, a paper triangle instrument hanging from a string beside it, notes drifting', '사진첩 노래', [
      { motif: 'star', x: 120, y: 86, s: 0.6 }, { motif: 'flower', x: 110, y: 226, color: 'rose' }, { motif: 'tree', x: 400, y: 214 }]),
    safety: SING_SAFE,
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"아기 때 사진을 보면 어떤 기분이 드나요?" 두세 명이 짧게 말한다. 교사가 \'사진첩\' 노래를 한 번 끝까지 불러 주고, 줄 끝마다 트라이앵글을 \'띠잉\' 하고 쳐 들려준다. "트라이앵글은 언제 울렸나요?" 하고 묻는다. 시연 단추로 첫 줄 가락이 쳐지는 모습을 보여 준다.',
        student: '선생님 노래를 듣고, 트라이앵글이 울릴 때마다 손을 살짝 들어 봐요.',
        demo: { tool: 'keyboard', options: { from: '도', to: '높은도', names: 'solfa' }, sequence: [{ notes: ['솔', '솔', '미', '미'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 사진첩 가락 익히기', minutes: 14, tool: 'keyboard',
            teacher: '"한 줄씩 듣고 따라 부른 뒤 건반으로 쳐요." 첫 줄은 \'솔\'과 \'미\'를 오가는 가락이라는 것을 손 높이로 보여 준다. 셋째 줄 끝 \'솔\'에서 올라간다는 것을 짚는다. 넷째 줄은 \'기억 상자\' 넷째 줄처럼 \'도\'로 끝난다는 것을 견주게 한다.',
            task: '\'사진첩\' 노래를 한 줄씩 듣고 따라 부른 뒤, 건반으로 그 줄의 가락을 쳐요.',
            levels: MEL_LV(),
            items: [
              { prompt: '첫째 줄 "사진첩을 펼치면"을 듣고 따라 부른 뒤 건반으로 쳐 보세요.', target: { notes: ['솔', '솔', '미', '미', '솔', '솔', '미'] }, difficulty: 0.15,
                levels: { easy: { prompt: '첫째 줄 앞부분 "사진첩"을 듣고 따라 부른 뒤 건반으로 쳐 보세요.', target: { notes: ['솔', '솔', '미'] } } } },
              { prompt: '둘째 줄 "작은 내가 웃어요"를 듣고 따라 부른 뒤 건반으로 쳐 보세요.', target: { notes: ['라', '라', '솔', '솔', '미', '미', '레'] }, difficulty: 0.2,
                levels: { easy: { prompt: '둘째 줄 앞부분 "작은 내가"를 듣고 따라 부른 뒤 건반으로 쳐 보세요.', target: { notes: ['라', '라', '솔', '솔'] } } } },
              { prompt: '셋째 줄 "한 장 한 장 넘기면"을 듣고 따라 부른 뒤 건반으로 쳐 보세요.', target: { notes: ['미', '미', '레', '레', '미', '미', '솔'] }, difficulty: 0.2,
                predict: { q: '셋째 줄 마지막 음은 앞 음보다 높을까요, 낮을까요?', options: ['높아요', '낮아요'], answer: 0 },
                conclude: '셋째 줄은 "솔"로 올라가며 끝나서, 다음 줄로 이어지는 느낌이 들어요.',
                levels: { easy: { prompt: '셋째 줄 앞부분 "한 장 한 장"을 듣고 따라 부른 뒤 건반으로 쳐 보세요.', target: { notes: ['미', '미', '레', '레'] } } } },
              { prompt: '넷째 줄 "자란 내가 보여요"를 듣고 따라 부른 뒤 건반으로 쳐 보세요.', target: { notes: ['라', '솔', '미', '레', '레', '도', '도'] }, difficulty: 0.25,
                levels: { easy: { prompt: '넷째 줄 뒷부분 "보여요"를 듣고 따라 부른 뒤 건반으로 쳐 보세요.', target: { notes: ['레', '도', '도'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 줄 끝에 트라이앵글 치기', minutes: 12, tool: 'keyboard',
            teacher: '"트라이앵글은 줄을 잡고 매달아요. 줄마다 마지막 박에서만 \'띠잉\'." 리듬 듣기로 반주를 듣고 블록으로 놓은 뒤, 반을 노래 모둠과 트라이앵글 모둠으로 나누어 함께 해 본다. 쉬는 박에 트라이앵글을 계속 치는 학생에게 쇠막대를 무릎에 대고 기다리게 한다.',
            task: '줄 끝을 마무리하는 트라이앵글 반주를 듣고 블록으로 놓은 뒤, 노래에 맞추어 쳐요.',
            levels: RHY_LV(),
            items: [
              { prompt: '세 박을 쉬고 넷째 박에 치는 반주를 듣고 블록으로 놓아 보세요.', toolOptions: { pattern: ['qr', 'qr', 'qr', 'q', 'qr', 'qr', 'qr', 'q'] }, target: { rhythm: ['qr', 'qr', 'qr', 'q', 'qr', 'qr', 'qr', 'q'] }, difficulty: 0.15 },
              { prompt: '두 박을 쉬고 셋째 박에 쳐서 두 박 울리는 반주를 듣고 블록으로 놓아 보세요.', toolOptions: { pattern: ['qr', 'qr', 'h', 'qr', 'qr', 'h'] }, target: { rhythm: ['qr', 'qr', 'h', 'qr', 'qr', 'h'] }, difficulty: 0.2,
                predict: { q: '트라이앵글을 치고 두 박 동안 울리게 하려면 어떤 음표가 알맞을까요?', options: ['4분음표', '2분음표'], answer: 1 },
                conclude: '2분음표는 두 박이라, 한 번 치고 두 박 동안 울림을 들어요.' },
              { prompt: '노래 모둠과 트라이앵글 모둠이 되어 \'사진첩\'을 끝까지 함께 해요. 트라이앵글은 줄을 잡고 쳐요. 다 했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"트라이앵글이 줄 끝에 울리니 노래가 어떻게 들렸나요?" 모둠을 바꾸어 한 번 더 한다. 다음 시간에는 모둠이 악기를 나누어 맡아 두 노래 가운데 하나를 합주한다. 트라이앵글 쇠막대는 줄에 묶어 정리한다.',
        exitTicket: [
          { type: 'tool', tool: 'keyboard', options: { from: '도', to: '높은도', names: 'solfa' }, prompt: '"사진첩" 첫 부분 가락을 듣고 건반으로 쳐 보세요.', target: { notes: ['솔', '솔', '미'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '트라이앵글이 길게 울리게 치려면?', options: ['몸통을 꽉 쥐고 쳐요', '줄을 잡고 매달아 쳐요', '바닥에 놓고 쳐요'], answer: 1, difficulty: 0.05, explain: '줄을 잡고 매달면 쇠가 자유롭게 떨려 길게 울려요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '사진첩 노래',
      items: [
        { type: 'blank', prompt: '노랫말의 빈칸을 채우세요.', text: '사진첩을 펼치면 작은 내가 ___', answer: '웃어요' },
        { type: 'table', prompt: '트라이앵글을 치는 박에 ○, 쉬는 박에 × 하세요. (세 박 쉬고 넷째 박에 쳐요)', columns: ['하나', '둘', '셋', '넷'], cells: [['', '', '', '']] },
        { type: 'choice', prompt: '셋째 줄 마지막 음은?', options: ['올라가요', '내려가요'], answer: '올라가요' },
        { type: 'draw', prompt: '내 사진첩에 넣고 싶은 장면을 그리세요.' },
      ],
      easy: {
        note: '트라이앵글은 줄 끝에 띠잉!',
        items: [
          { type: 'choice', prompt: '트라이앵글은 어디를 잡나요?', options: ['줄', '몸통'], answer: '줄' },
          { type: 'short', prompt: '사진첩 노래에서 좋아하는 낱말을 쓰세요.' },
          { type: 'draw', prompt: '어릴 때 내 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '줄마다 서너 음만 치고 들을 때 건반이 비쳐요. 리듬 판에 박 수가 보여요.',
      base: '한 줄 전체 가락을 귀로 듣고 치고, 반주를 귀로 놓아요.',
      challenge: '계이름 없이 한 줄을 귀로만 듣고 치고, 쉼표가 더 많은 블록 가운데서 골라 놓아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 쉬는 박에도 트라이앵글을 친다 → 쇠막대를 무릎에 대고 \'쉬고 쉬고 쉬고 띠잉\'을 말로 함께 센다. ② 몸통을 쥐고 쳐서 소리가 짧다 → 14차시의 잡는 법을 다시 짚는다. ③ 가락 첫 음을 낮게 시작한다 → 첫 음 \'솔\'을 교사가 먼저 들려주고 시작한다. 노래는 이 단원을 위해 지은 것이다. 아기 사진을 가져오게 하지 않는다(사정이 다른 가정이 있으므로 그림이나 말로만 나눈다).',
  }));

  lessons.push(L(20, {
    title: '모둠이 악기 나누어 맡아 함께 합주하기',
    objective: '모둠에서 노래·캐스터네츠·트라이앵글을 나누어 맡고, 연습 차례를 정해 \'기억 상자\'나 \'사진첩\'을 함께 합주할 수 있다.',
    illustration: ART('a small group of paper children playing together, one singing, one tapping castanets, one striking a triangle, a teacher conducting with a paper baton', '함께 합주해요', [
      { motif: 'star', x: 110, y: 86, s: 0.6 }, { motif: 'bird', x: 380, y: 80 }, { motif: 'flower', x: 400, y: 226, color: 'buttercup' }]),
    safety: SING_SAFE,
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"합주는 여러 사람이 서로 다른 소리를 내면서 하나의 음악을 만드는 거예요." 교사가 노래를 부르는 동안 두 학생이 캐스터네츠와 트라이앵글을 맡아 짧게 보여 준다. "모두 같은 것을 했나요?" 하고 묻는다. 시연 단추로 합주 준비 차례가 놓이는 모습을 보여 준다.',
        student: '친구들의 짧은 합주를 보고, 누가 무엇을 맡았는지 말해 봐요.',
        demo: { tool: 'story', options: { cards: [{ id: 'd1', text: '맡을 소리를 정해요', motif: 'star' }, { id: 'd2', text: '함께 맞추어 봐요', motif: 'bird' }], slots: 2, shuffle: false }, sequence: [{ order: ['d1', 'd2'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 합주 준비 차례 정하기', minutes: 10, tool: 'story',
            teacher: '"합주를 잘하려면 무엇부터 할까요?" 장면을 놓은 뒤 모둠마다 그 차례대로 실제로 맡을 소리를 정한다. 한 사람이 악기를 다 차지하려는 모둠에는 차례로 바꾸어 맡는다고 약속하게 한다. 셋째 문항은 지휘자 손짓에 따라 시작하고 끝내는 차례다.',
            task: '합주를 준비하고 연주하는 차례를 장면 카드로 놓고, 모둠에서 맡을 소리를 정해요.',
            levels: CARD_LV(),
            items: [
              { prompt: '합주를 준비하는 차례대로 장면을 놓아 보세요.', toolOptions: { slots: 3, cards: [{ id: 'p1', text: '부를 노래를 골라요', motif: 'bird' }, { id: 'p2', text: '맡을 소리를 나누어요', motif: 'star' }, { id: 'p3', text: '맡은 소리를 따로 연습해요', motif: 'leaf' }] },
                target: { order: ['p1', 'p2', 'p3'] }, difficulty: 0.1 },
              { prompt: '합주를 연습하는 차례대로 장면을 놓아 보세요.', toolOptions: { slots: 4, cards: [{ id: 'q1', text: '따로 연습해요', motif: 'leaf' }, { id: 'q2', text: '둘씩 맞추어 봐요', motif: 'flower' }, { id: 'q3', text: '모두 함께 맞추어 봐요', motif: 'tree' }, { id: 'q4', text: '친구들 앞에서 연주해요', motif: 'star' }] },
                target: { order: ['q1', 'q2', 'q3', 'q4'] }, difficulty: 0.15,
                levels: { challenge: { prompt: '합주를 연습하는 차례대로 놓아 보세요. 차례에 들어가지 않는 장면이 하나 있어요.', toolOptions: { cards: [{ id: 'q1', text: '따로 연습해요', motif: 'leaf' }, { id: 'q2', text: '둘씩 맞추어 봐요', motif: 'flower' }, { id: 'q3', text: '모두 함께 맞추어 봐요', motif: 'tree' }, { id: 'q4', text: '친구들 앞에서 연주해요', motif: 'star' }, { id: 'q5', text: '혼자 가장 크게 쳐요', motif: 'moon' }] } } } },
              { prompt: '지휘자 손짓에 맞추어 연주하는 차례대로 놓아 보세요.', toolOptions: { slots: 3, cards: [{ id: 'c1', text: '지휘자가 손을 들면 준비해요', motif: 'sun' }, { id: 'c2', text: '손이 내려오면 시작해요', motif: 'bird' }, { id: 'c3', text: '손을 쥐면 함께 멈춰요', motif: 'moon' }] },
                target: { order: ['c1', 'c2', 'c3'] }, difficulty: 0.15,
                predict: { q: '모두가 지휘자를 보지 않으면 합주가 어떻게 될까요?', options: ['시작이 어긋나요', '더 잘 맞아요'], answer: 0 },
                conclude: '지휘자 손짓을 함께 보면 시작과 끝이 맞아요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 맡은 소리 연습하고 합주하기', minutes: 17, tool: 'keyboard',
            teacher: '"캐스터네츠는 박마다, 트라이앵글은 줄 끝에 쳐요." 맡은 리듬을 먼저 블록으로 확인한 뒤 실제 악기로 연습한다. 모둠 합주 때 교사가 지휘를 맡고, 모둠 안에서 맡은 소리를 한 번씩 바꾸어 본다. 악기는 연주할 때만 들고, 듣는 동안에는 무릎 위에 놓는다.',
            task: '내가 맡은 반주 리듬을 듣고 블록으로 확인한 뒤, 모둠과 함께 합주해요.',
            levels: RHY_LV(),
            items: [
              { prompt: '캐스터네츠를 맡았어요. 박마다 치다가 넷째 박에 쉬는 반주를 듣고 블록으로 놓아 보세요.', toolOptions: { pattern: ['q', 'q', 'q', 'qr', 'q', 'q', 'q', 'qr'] }, target: { rhythm: ['q', 'q', 'q', 'qr', 'q', 'q', 'q', 'qr'] }, difficulty: 0.15 },
              { prompt: '리듬 막대를 맡았어요. 둘째 박을 "착착" 두 번 치는 반주를 듣고 블록으로 놓아 보세요.', toolOptions: { pattern: ['q', 'e', 'e', 'q', 'q', 'q', 'e', 'e', 'h'] }, target: { rhythm: ['q', 'e', 'e', 'q', 'q', 'q', 'e', 'e', 'h'] }, difficulty: 0.25,
                levels: { easy: { prompt: '리듬 막대를 맡았어요. "착착"이 들어간 한 마디와 길게 치는 한 마디를 듣고 블록으로 놓아 보세요.', toolOptions: { pattern: ['q', 'e', 'e', 'q', 'q', 'h', 'h'] }, target: { rhythm: ['q', 'e', 'e', 'q', 'q', 'h', 'h'] } } } },
              { prompt: '모둠이 맡은 소리로 노래 하나를 끝까지 합주해요. 한 번 하고 나면 맡은 소리를 바꾸어 한 번 더 해요. 다 했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"우리 모둠 합주에서 서로 소리를 잘 들었나요?" 모둠마다 한 문장으로 말한다. 다음 시간에는 오늘 노래와 연주를 돌아보며 잘된 점과 고칠 점을 찾는다. 악기를 바구니에 종류별로 넣는다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { cards: [{ id: 'x1', text: '맡을 소리를 정해요', motif: 'star' }, { id: 'x2', text: '따로 연습해요', motif: 'leaf' }, { id: 'x3', text: '함께 맞추어 봐요', motif: 'tree' }], slots: 3 }, prompt: '합주하는 차례대로 장면을 놓아 보세요.', target: { order: ['x1', 'x2', 'x3'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '합주할 때 가장 중요한 것은?', options: ['내 소리만 크게 내요', '친구 소리를 들으며 맞추어요', '먼저 끝내요'], answer: 1, difficulty: 0.05, explain: '친구 소리를 들어야 함께 맞출 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '우리 모둠 합주',
      items: [
        { type: 'table', prompt: '우리 모둠에서 누가 무엇을 맡았는지 쓰세요.', columns: ['이름', '맡은 소리'], rows: 4 },
        { type: 'figure', wide: true, prompt: '합주 연습 차례대로 1, 2, 3을 쓰세요.', tool: 'story', figures: [{ options: { cards: [{ id: 'q3', text: '모두 함께 맞추어 봐요', motif: 'tree' }, { id: 'q1', text: '따로 연습해요', motif: 'leaf' }, { id: 'q2', text: '둘씩 맞추어 봐요', motif: 'flower' }], slots: 3, shuffle: false }, caption: '' }], answer: '따로-둘씩-함께' },
        { type: 'check', prompt: '합주할 때 내가 지킨 것에 ✓ 하세요.', options: ['지휘자 손짓을 봤어요', '친구 소리를 들었어요', '쉬는 박에 악기를 멈췄어요'] },
        { type: 'short', prompt: '합주를 해 보니 어떤 느낌이었는지 쓰세요.' },
      ],
      easy: {
        note: '맡은 소리를 정하고, 함께 맞추어요.',
        items: [
          { type: 'short', prompt: '내가 맡은 소리를 쓰세요.' },
          { type: 'choice', prompt: '합주할 때는?', options: ['친구 소리를 들어요', '내 소리만 들어요'], answer: '친구 소리를 들어요' },
          { type: 'draw', prompt: '우리 모둠 합주 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '장면 카드가 맞는 자리에 초록 테두리가 생기고, 리듬은 두 마디 짧은 반주를 놓아요.',
      base: '연습 차례를 놓고, 8분음표가 든 반주를 귀로 놓아요.',
      challenge: '차례에 들어가지 않는 장면을 골라내고, 쉼표 블록이 더 많은 판에서 반주를 놓아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 악기를 서로 먼저 가지려 한다 → 맡은 소리를 모둠에서 정하고 한 번 연주한 뒤 바꾼다고 미리 약속한다. ② 노래보다 악기 소리가 커진다 → "노래가 들려야 반주"라고 말하고 악기를 살살 치게 한다. ③ 시작이 어긋난다 → 지휘자 손짓(들기-내리기-쥐기)을 미리 두세 번 연습한다. 모둠 인원이 다르면 노래를 둘이 맡아도 된다.',
  }));

  // ───────────────────────── 21~24차시: 노래와 연주 돌아보고 고쳐 하기(소리 표현 돌아보기) ─────────────────────────

  lessons.push(L(21, {
    title: '노래와 연주 돌아보며 잘된 점 찾기',
    objective: '모둠 노래와 연주를 떠올려 잘된 점과 고칠 점을 나누고, 내 노래·연주를 점검표로 솔직하게 돌아볼 수 있다.',
    illustration: ART('paper children sitting in a circle with a big checklist board, thumbs-up stickers and small instruments resting on their laps', '돌아보아요', [
      { motif: 'star', x: 120, y: 86, s: 0.6 }, { motif: 'leaf', x: 110, y: 226 }, { motif: 'tree', x: 400, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"지난 시간 합주를 떠올려 볼까요? 가장 기억에 남는 순간은 언제였나요?" 두세 명이 말한다. 지난 시간 녹음이 있으면 짧게 들려준다(없으면 교사가 기억을 되짚어 준다). 시연 단추로 잘된 점과 고칠 점이 나뉘는 모습을 보여 준다.',
        student: '지난 합주에서 가장 기억에 남는 순간을 짝에게 한 문장으로 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '우리 합주', slots: ['잘된 점', '고칠 점'], cards: ['시작을 함께 맞췄어요', '노래가 점점 빨라졌어요'], shuffle: false }, sequence: [{ sort: { '잘된 점': ['시작을 함께 맞췄어요'], '고칠 점': ['노래가 점점 빨라졌어요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 잘된 점과 고칠 점 나누기', minutes: 13, tool: 'mindmap',
            teacher: '"고칠 점은 흉이 아니라 다음에 더 잘할 길이에요." 카드를 나누며 왜 그렇게 나누었는지 말하게 한다. 친구 이름을 넣어 흉을 보는 학생에게는 \'우리 모둠은\'으로 바꾸어 말하게 한다. 셋째 문항은 고칠 점에 알맞은 고칠 방법을 잇는 것이다.',
            task: '합주 모습 카드를 잘된 점과 고칠 점으로 나누고, 고칠 점에 알맞은 방법을 이어요.',
            levels: CARD_LV(),
            items: [
              { prompt: '노래 부른 모습을 잘된 점과 고칠 점으로 나누어 보세요.', toolOptions: { topic: '우리 노래', slots: ['잘된 점', '고칠 점'], cards: ['노랫말을 또박또박 불렀어요', '숨 쉬는 자리에서 쉬었어요', '소리를 지르듯 불렀어요', '끝 음을 너무 짧게 끊었어요'] },
                target: { sort: { '잘된 점': ['노랫말을 또박또박 불렀어요', '숨 쉬는 자리에서 쉬었어요'], '고칠 점': ['소리를 지르듯 불렀어요', '끝 음을 너무 짧게 끊었어요'] } }, difficulty: 0.1 },
              { prompt: '악기 연주 모습을 잘된 점과 고칠 점으로 나누어 보세요.', toolOptions: { topic: '우리 연주', slots: ['잘된 점', '고칠 점'], cards: ['박에 맞추어 쳤어요', '쉬는 박에도 쳤어요', '트라이앵글 줄을 잡았어요', '노래보다 악기가 컸어요'] },
                target: { sort: { '잘된 점': ['박에 맞추어 쳤어요', '트라이앵글 줄을 잡았어요'], '고칠 점': ['쉬는 박에도 쳤어요', '노래보다 악기가 컸어요'] } }, difficulty: 0.15 },
              { prompt: '고칠 점과 고칠 방법을 이어 보세요.', toolOptions: { mode: 'match', topic: '고칠 방법', slots: [{ id: 's1', label: '노래가 점점 빨라졌어요' }, { id: 's2', label: '쉬는 박에도 쳤어요' }, { id: 's3', label: '소리를 질렀어요' }], cards: ['발끝으로 박을 세요', '쉬는 박에 악기를 무릎에 대요', '숨을 쉬고 부드럽게 불러요'] },
                target: { match: { s1: '발끝으로 박을 세요', s2: '쉬는 박에 악기를 무릎에 대요', s3: '숨을 쉬고 부드럽게 불러요' } }, difficulty: 0.2,
                predict: { q: '고칠 점을 찾으면 다음 연주는 어떻게 될까요?', options: ['더 나아질 수 있어요', '그대로예요'], answer: 0 },
                conclude: '고칠 점과 방법을 함께 찾으면 다음에 더 잘할 수 있어요.',
                levels: { easy: { prompt: '고칠 점과 고칠 방법 두 짝을 이어 보세요.', toolOptions: { slots: [{ id: 's1', label: '노래가 점점 빨라졌어요' }, { id: 's2', label: '쉬는 박에도 쳤어요' }], cards: ['발끝으로 박을 세요', '쉬는 박에 악기를 무릎에 대요'] }, target: { match: { s1: '발끝으로 박을 세요', s2: '쉬는 박에 악기를 무릎에 대요' } } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 내 노래와 연주 점검하기', minutes: 14, tool: 'keyboard',
            teacher: '"건반으로 \'기억 상자\' 첫 줄을 쳐 보고, 점검표에서 내가 한 것에 표시해요." 점검표는 정답이 없고, 한 것만 솔직하게 표시하면 된다고 말한다. 다 표시해야 넘어가므로, 아직 못 한 것은 지금 실제로 해 보고 표시하게 한다(예: 짝에게 들려주기). 마지막 문항은 마음 크기를 고르는 것으로, 어느 크기를 골라도 맞다.',
            task: '노래 가락을 다시 쳐 보고, 점검표의 항목을 실제로 해 보며 표시해요.',
            levels: MEL_LV(),
            items: [
              { prompt: '"기억 상자" 첫 줄 가락을 듣고 건반으로 쳐 보세요.', target: { notes: ['도', '미', '솔', '솔', '라', '라', '솔', '솔'] }, difficulty: 0.2,
                levels: { easy: { prompt: '"기억 상자" 가락을 듣고 건반으로 쳐 보세요.', target: { notes: ['도', '미', '솔', '솔'] } } } },
              { prompt: '내 노래를 돌아보며, 한 것을 실제로 해 보고 점검표에 표시하세요.', target: { selfCheck: ['바른 자세로 서서 첫 줄을 불러 보았어요', '숨 쉬는 자리에서 숨을 쉬었어요', '짝에게 내 노래를 들려주었어요'] }, difficulty: 0.1 },
              { prompt: '내 연주를 돌아보며, 한 것을 실제로 해 보고 점검표에 표시하세요.', target: { selfCheck: ['악기를 바르게 잡고 쳐 보았어요', '쉬는 박에 손을 멈추어 보았어요', '내 연주의 고칠 점 하나를 짝에게 말했어요'] }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"내가 찾은 고칠 점 하나를 짝에게 말해 볼까요?" 짝끼리 나눈 뒤 두세 명이 반 전체에 말한다. 다음 시간에는 오늘 찾은 고칠 점을 골라 노래를 다시 불러 본다. 오늘 마음 크기는 어느 쪽을 골라도 괜찮다고 말한다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'scale', who: '나', situation: '모둠 합주를 돌아보았어요.', feeling: '뿌듯함', ask: '우리 합주를 떠올리면 뿌듯한 마음이 얼마나 되나요?' }, prompt: '우리 합주를 떠올리며 뿌듯한 마음의 크기를 골라 보세요. 어느 크기든 괜찮아요.', target: { level: 'any' }, difficulty: 0.05 },
          { type: 'choice', prompt: '고칠 점을 찾는 까닭은?', options: ['친구를 놀리려고', '다음에 더 잘하려고', '연주를 그만하려고'], answer: 1, difficulty: 0.05, explain: '고칠 점은 다음에 더 잘할 길이에요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '노래와 연주 돌아보기',
      items: [
        { type: 'table', prompt: '우리 모둠 합주의 잘된 점과 고칠 점을 쓰세요.', columns: ['잘된 점', '고칠 점'], rows: 2 },
        { type: 'check', prompt: '내가 해 본 것에 ✓ 하세요.', options: ['바른 자세로 불렀어요', '숨 쉬는 자리에서 쉬었어요', '악기를 바르게 잡았어요', '쉬는 박에 멈췄어요'] },
        { type: 'short', prompt: '다음에 고칠 점 하나와 고칠 방법을 쓰세요.' },
        { type: 'draw', prompt: '합주에서 가장 기억에 남는 순간을 그리세요.' },
      ],
      easy: {
        note: '고칠 점은 다음에 더 잘할 길이에요.',
        items: [
          { type: 'short', prompt: '잘된 점 하나를 쓰세요.' },
          { type: 'short', prompt: '고칠 점 하나를 쓰세요.' },
          { type: 'draw', prompt: '기억에 남는 순간을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '짝 잇기가 두 짝이고 맞는 칸에 초록 테두리가 생겨요. 가락은 네 음만 쳐요.',
      base: '세 짝을 잇고, 첫 줄 여덟 음을 귀로 듣고 쳐요.',
      challenge: '계이름 없이 첫 줄을 귀로만 듣고 쳐요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 고칠 점을 친구 탓으로 말한다 → \'우리 모둠은\', \'나는\'으로 시작하게 한다. ② 점검표를 하지 않고 다 표시한다 → 표시하기 전에 실제로 해 보는 시간을 주고, 짝이 했는지 봐 준다. ③ 뿌듯함 크기가 작다고 속상해한다 → 어느 크기든 내 마음이고 맞다고 말해 준다.',
  }));

  lessons.push(L(22, {
    title: '고칠 점 골라 노래 다시 불러 보기',
    objective: '잘못 친 가락에서 틀린 음을 찾아 바르게 고쳐 치고, 고칠 점 하나를 골라 그 점을 고쳐 노래를 다시 부를 수 있다.',
    illustration: ART('a paper child fixing a music note on a song chart with a small eraser, classmates singing again with brighter faces', '고쳐 다시 불러요', [
      { motif: 'star', x: 120, y: 86, s: 0.6 }, { motif: 'bird', x: 380, y: 80 }, { motif: 'flower', x: 110, y: 226, color: 'lavender' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"선생님이 \'기억 상자\' 첫 줄을 부를게요. 이상한 곳이 있으면 손을 들어요." 일부러 \'라 라\' 대신 \'파 파\'로 부른다. 학생들이 찾으면 "어디가 달랐나요?" 하고 묻는다. 시연 단추로 틀린 음을 고쳐 치는 모습을 보여 준다.',
        student: '선생님 노래에서 달라진 곳을 찾으면 손을 들어 봐요.',
        demo: { tool: 'keyboard', options: { from: '도', to: '높은도', names: 'solfa' }, sequence: [{ notes: ['도', '미', '솔'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 틀린 음 찾아 고쳐 치기', minutes: 14, tool: 'keyboard',
            teacher: '"건반에 잘못 친 가락이 놓여 있어요. 가락 듣기로 바른 가락을 듣고, 다른 음을 찾아 고쳐 쳐요." 하나 지우기·모두 지우기를 써도 된다고 알려 준다. 틀린 곳을 찾기 어려워하는 학생에게 내 가락 듣기와 바른 가락 듣기를 번갈아 들어 보게 한다.',
            task: '잘못 친 가락과 바른 가락을 견주어 듣고, 틀린 음을 찾아 바르게 고쳐 쳐요.',
            levels: MEL_LV(),
            items: [
              { prompt: '"기억 상자" 앞부분이 한 음 틀리게 쳐져 있어요. 바른 가락을 듣고 고쳐 쳐 보세요.', state: { notes: ['도', '레', '솔', '솔'] }, target: { notes: ['도', '미', '솔', '솔'] }, difficulty: 0.15 },
              { prompt: '"웃음소리 들려요"가 한 음 틀리게 쳐져 있어요. 바른 가락을 듣고 고쳐 쳐 보세요.', state: { notes: ['파', '파', '미', '미', '레', '미', '도'] }, target: { notes: ['파', '파', '미', '미', '레', '레', '도'] }, difficulty: 0.2,
                levels: { easy: { prompt: '"웃음소리"가 한 음 틀리게 쳐져 있어요. 바른 가락을 듣고 고쳐 쳐 보세요.', state: { notes: ['파', '솔', '미', '미'] }, target: { notes: ['파', '파', '미', '미'] } } } },
              { prompt: '"사진첩을 펼치면"이 두 음 틀리게 쳐져 있어요. 바른 가락을 듣고 고쳐 쳐 보세요.', state: { notes: ['솔', '솔', '레', '미', '솔', '라', '미'] }, target: { notes: ['솔', '솔', '미', '미', '솔', '솔', '미'] }, difficulty: 0.25,
                predict: { q: '틀린 음을 찾으려면 무엇을 하면 좋을까요?', options: ['바른 가락과 견주어 들어요', '아무 건반이나 눌러요'], answer: 0 },
                conclude: '내 가락과 바른 가락을 번갈아 들으면 다른 곳이 들려요.',
                levels: { easy: { prompt: '"사진첩"이 한 음 틀리게 쳐져 있어요. 바른 가락을 듣고 고쳐 쳐 보세요.', state: { notes: ['솔', '라', '미'] }, target: { notes: ['솔', '솔', '미'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 고칠 점 하나 골라 다시 부르기', minutes: 13, tool: 'mindmap',
            teacher: '"지난 시간 찾은 고칠 점 가운데 하나만 골라 그 점을 생각하며 다시 불러요." 고칠 점과 방법을 이은 뒤 모둠별로 실제로 다시 부른다. 고친 뒤 무엇이 달라졌는지 짝이 한마디씩 알려 준다. 고칠 점을 여러 개 한꺼번에 고치려는 학생에게 하나씩 하면 더 잘 고쳐진다고 말한다.',
            task: '고칠 점에 알맞은 방법을 고르고, 그 방법으로 노래를 다시 불러요.',
            levels: CARD_LV(),
            items: [
              { prompt: '"끝 음을 너무 짧게 끊었어요"를 고치는 방법만 골라 보세요.', toolOptions: { mode: 'pick', basket: '끝 음 고치기', cards: ['끝 음을 박 수만큼 늘여 불러요', '끝 음에서 손을 천천히 내려요', '끝 음을 빨리 끝내요'] },
                target: { pick: ['끝 음을 박 수만큼 늘여 불러요', '끝 음에서 손을 천천히 내려요'] }, difficulty: 0.15 },
              { prompt: '고칠 점과 고친 뒤 달라진 모습을 이어 보세요.', toolOptions: { mode: 'match', topic: '고친 뒤', slots: [{ id: 's1', label: '숨을 쉬고 불렀어요' }, { id: 's2', label: '발끝으로 박을 셌어요' }, { id: 's3', label: '친구 소리를 들었어요' }], cards: ['노랫말이 끊기지 않았어요', '빨라지지 않았어요', '소리가 하나로 모였어요'] },
                target: { match: { s1: '노랫말이 끊기지 않았어요', s2: '빨라지지 않았어요', s3: '소리가 하나로 모였어요' } }, difficulty: 0.2,
                levels: { easy: { prompt: '고칠 점과 고친 뒤 달라진 모습 두 짝을 이어 보세요.', toolOptions: { slots: [{ id: 's1', label: '숨을 쉬고 불렀어요' }, { id: 's2', label: '발끝으로 박을 셌어요' }], cards: ['노랫말이 끊기지 않았어요', '빨라지지 않았어요'] }, target: { match: { s1: '노랫말이 끊기지 않았어요', s2: '빨라지지 않았어요' } } } } },
              { prompt: '모둠에서 고칠 점 하나를 골라 그 점을 생각하며 노래를 다시 불러요. 짝이 달라진 점을 한마디 알려 줘요. 다 했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"고쳐 부르니 무엇이 달라졌나요?" 모둠마다 한 문장으로 말한다. 다음 시간에는 리듬 연주를 돌아보고 고쳐 친다. 오늘 고친 점은 노래 가사판 옆에 붙임쪽지로 붙여 둔다.',
        exitTicket: [
          { type: 'tool', tool: 'keyboard', options: { from: '도', to: '높은도', names: 'solfa' }, prompt: '가락이 한 음 틀리게 쳐져 있어요. 바른 가락을 듣고 고쳐 쳐 보세요.', state: { notes: ['미', '미', '라'] }, target: { notes: ['미', '미', '솔'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '고칠 점을 고칠 때 알맞은 방법은?', options: ['한꺼번에 다 고쳐요', '하나씩 골라 고쳐요', '고치지 않아요'], answer: 1, difficulty: 0.05, explain: '하나씩 고치면 더 잘 고쳐져요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '고쳐 다시 불러요',
      items: [
        { type: 'short', prompt: '내가 고르는 고칠 점 하나를 쓰세요.' },
        { type: 'short', prompt: '그 점을 고치는 방법을 쓰세요.' },
        { type: 'choice', prompt: '틀린 음을 찾을 때 좋은 방법은?', options: ['바른 가락과 견주어 들어요', '아무 건반이나 눌러요'], answer: '바른 가락과 견주어 들어요' },
        { type: 'short', prompt: '고쳐 부른 뒤 달라진 점을 쓰세요.' },
      ],
      easy: {
        note: '하나씩 고쳐요.',
        items: [
          { type: 'short', prompt: '고칠 점 하나를 쓰세요.' },
          { type: 'choice', prompt: '고칠 때는?', options: ['하나씩', '한꺼번에'], answer: '하나씩' },
          { type: 'draw', prompt: '다시 노래하는 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '짧은 가락에서 틀린 음 하나를 고치고, 들을 때 건반이 비쳐요.',
      base: '일곱 음 가락에서 틀린 음을 찾아 고쳐요.',
      challenge: '계이름 없이 두 음이 틀린 가락을 고쳐요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 틀린 음을 찾지 못하고 처음부터 다시 친다 → 내 가락과 바른 가락을 번갈아 들어 다른 곳에서 손을 들게 한다. ② 고칠 점을 여러 개 한꺼번에 고치려 한다 → 하나만 골라 다시 부른다. ③ 고친 뒤에도 달라진 점을 모른다 → 짝이 한마디씩 알려 주게 한다.',
  }));

  lessons.push(L(23, {
    title: '리듬 연주 돌아보고 고쳐 치기',
    objective: '잘못 놓인 리듬 블록을 들은 리듬과 견주어 고쳐 놓고, 고친 리듬을 악기로 박에 맞추어 칠 수 있다.',
    illustration: ART('paper rhythm blocks laid in a row with one block being swapped by a small paper hand, castanets and rhythm sticks beside', '리듬을 고쳐요', [
      { motif: 'star', x: 120, y: 86, s: 0.6 }, { motif: 'leaf', x: 110, y: 226 }, { motif: 'tree', x: 400, y: 214 }]),
    safety: SING_SAFE,
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"선생님이 손뼉으로 리듬을 칠게요. 한 번은 바르게, 한 번은 틀리게 쳐요. 어느 쪽이 틀렸을까요?" \'짝 짝 짝짝 짝\'과 \'짝 짝짝 짝짝 짝\'을 들려준다. 시연 단추로 한 마디 리듬이 놓이는 모습을 보여 준다.',
        student: '두 리듬을 듣고, 틀린 쪽이 몇 번째였는지 손가락으로 나타내 봐요.',
        demo: { tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 1, blocks: ['q', 'e', 'h'] }, sequence: [{ rhythm: ['q', 'q', 'e', 'e', 'q'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 잘못 놓인 블록 고치기', minutes: 15, tool: 'keyboard',
            teacher: '"리듬 판에 블록이 잘못 놓여 있어요. 리듬 듣기로 바른 리듬을 듣고 고쳐 놓아요." 내 리듬 듣기와 리듬 듣기를 번갈아 눌러 견주게 한다. 고친 뒤에는 손뼉으로 쳐 본다. 마디가 넘치거나 모자라는 학생에게 박 수를 손가락으로 세게 한다.',
            task: '잘못 놓인 리듬과 바른 리듬을 견주어 듣고, 블록을 바르게 고쳐 놓아요.',
            levels: RHY_LV(),
            items: [
              { prompt: '캐스터네츠 반주의 한 블록이 잘못 놓였어요. 리듬을 듣고 고쳐 놓아 보세요.', state: { rhythm: ['q', 'q', 'q', 'q', 'q', 'q', 'q', 'q'] }, toolOptions: { pattern: ['q', 'q', 'q', 'qr', 'q', 'q', 'q', 'qr'] }, target: { rhythm: ['q', 'q', 'q', 'qr', 'q', 'q', 'q', 'qr'] }, difficulty: 0.15 },
              { prompt: '리듬 막대 반주가 잘못 놓였어요. 리듬을 듣고 고쳐 놓아 보세요.', state: { rhythm: ['q', 'q', 'q', 'q', 'q', 'q', 'h'] }, toolOptions: { pattern: ['q', 'e', 'e', 'q', 'q', 'q', 'q', 'h'] }, target: { rhythm: ['q', 'e', 'e', 'q', 'q', 'q', 'q', 'h'] }, difficulty: 0.2,
                predict: { q: '"착착"(8분음표 둘)은 몇 박일까요?', options: ['한 박', '두 박'], answer: 0 },
                conclude: '8분음표 둘을 합치면 한 박이에요. 4분음표 한 개 자리에 들어가요.' },
              { prompt: '트라이앵글 반주가 잘못 놓였어요. 리듬을 듣고 고쳐 놓아 보세요.', state: { rhythm: ['qr', 'qr', 'q', 'q', 'qr', 'qr', 'q', 'q'] }, toolOptions: { pattern: ['qr', 'qr', 'h', 'qr', 'qr', 'h'] }, target: { rhythm: ['qr', 'qr', 'h', 'qr', 'qr', 'h'] }, difficulty: 0.2 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 고친 리듬 악기로 치기', minutes: 12, tool: 'mindmap',
            teacher: '"고친 리듬을 악기로 쳐 볼까요? 치기 전에 무엇을 다시 볼까요?" 카드로 점검할 것을 고른 뒤 악기로 친다. 짝이 들은 리듬이 블록과 같은지 엄지로 알려 준다.',
            task: '리듬을 고쳐 칠 때 할 일을 고르고, 고친 리듬을 악기로 쳐요.',
            levels: CARD_LV(),
            items: [
              { prompt: '고친 리듬을 칠 때 하면 좋은 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '고쳐 칠 때', cards: ['블록을 보며 박을 세요', '먼저 손뼉으로 쳐 봐요', '블록을 보지 않고 아무렇게나 쳐요'] },
                target: { pick: ['블록을 보며 박을 세요', '먼저 손뼉으로 쳐 봐요'] }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['블록을 보며 박을 세요', '먼저 손뼉으로 쳐 봐요', '블록을 보지 않고 아무렇게나 쳐요', '짝에게 들려주고 같은지 물어요', '가장 크게 빨리 쳐요'] }, target: { pick: ['블록을 보며 박을 세요', '먼저 손뼉으로 쳐 봐요', '짝에게 들려주고 같은지 물어요'] }, prompt: '고친 리듬을 칠 때 하면 좋은 것만 모두 골라 보세요.' } } },
              { prompt: '틀린 리듬과 고친 방법을 이어 보세요.', toolOptions: { mode: 'match', topic: '리듬 고치기', slots: [{ id: 's1', label: '쉬는 박에 쳤어요' }, { id: 's2', label: '착착을 두 박으로 쳤어요' }, { id: 's3', label: '길게 울릴 곳을 짧게 쳤어요' }], cards: ['쉼표 자리에 손을 멈춰요', '한 박에 두 번 쳐요', '치고 두 박 기다려요'] },
                target: { match: { s1: '쉼표 자리에 손을 멈춰요', s2: '한 박에 두 번 쳐요', s3: '치고 두 박 기다려요' } }, difficulty: 0.2,
                levels: { easy: { prompt: '틀린 리듬과 고친 방법 두 짝을 이어 보세요.', toolOptions: { slots: [{ id: 's1', label: '쉬는 박에 쳤어요' }, { id: 's2', label: '착착을 두 박으로 쳤어요' }], cards: ['쉼표 자리에 손을 멈춰요', '한 박에 두 번 쳐요'] }, target: { match: { s1: '쉼표 자리에 손을 멈춰요', s2: '한 박에 두 번 쳐요' } } } } },
              { prompt: '활동 1에서 고친 리듬 하나를 골라 악기로 쳐요. 짝이 블록과 같은지 엄지로 알려 줘요. 다 했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"리듬을 고쳐 치니 노래와 더 잘 맞았나요?" 두 모둠이 고친 리듬으로 노래 반주를 해 본다. 다음 시간에는 우리 반 작은 음악회를 연다. 악기를 정리한다.',
        exitTicket: [
          { type: 'tool', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 1, blocks: ['q', 'e', 'h', 'qr'], pattern: ['q', 'q', 'q', 'qr'] }, prompt: '한 블록이 잘못 놓였어요. 리듬을 듣고 고쳐 놓아 보세요.', state: { rhythm: ['q', 'q', 'q', 'q'] }, target: { rhythm: ['q', 'q', 'q', 'qr'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '8분음표 둘(착착)은 몇 박인가요?', options: ['한 박', '두 박', '네 박'], answer: 0, difficulty: 0.1, explain: '8분음표 둘을 합치면 한 박이에요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '리듬을 고쳐요',
      items: [
        { type: 'choice', prompt: '쉼표 자리에서는?', options: ['손을 멈춰요', '크게 쳐요'], answer: '손을 멈춰요' },
        { type: 'choice', prompt: '2분음표는 몇 박인가요?', options: ['한 박', '두 박'], answer: '두 박' },
        { type: 'table', prompt: '고친 리듬을 칠 때 치는 박에 ○, 쉬는 박에 × 하세요. (짝 짝 짝 쉬고)', columns: ['하나', '둘', '셋', '넷'], cells: [['', '', '', '']] },
        { type: 'short', prompt: '내가 고친 리듬과 고친 까닭을 쓰세요.' },
      ],
      easy: {
        note: '쉼표에서는 손을 멈춰요.',
        items: [
          { type: 'choice', prompt: '쉼표에서는?', options: ['멈춰요', '쳐요'], answer: '멈춰요' },
          { type: 'short', prompt: '내가 친 악기 이름을 쓰세요.' },
          { type: 'draw', prompt: '리듬을 치는 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '리듬 판에 박 수가 보이고, 짝 잇기가 두 짝이에요.',
      base: '잘못 놓인 블록을 귀로 견주어 고쳐요.',
      challenge: '쉼표 블록이 더 많은 판에서 고치고, 고쳐 칠 때 할 일을 다섯 장에서 모두 골라요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 고칠 곳을 찾지 못하고 모두 지운다 → 내 리듬과 바른 리듬을 마디씩 번갈아 듣게 한다. ② 8분음표 둘을 두 박으로 친다 → \'착착\'을 손뼉 한 번 사이에 말하게 한다. ③ 고친 블록과 실제 연주가 다르다 → 블록을 손가락으로 짚으며 친다.',
  }));

  lessons.push(L(24, {
    title: '우리 반 작은 음악회 열기',
    objective: '모둠이 고른 노래를 바른 자세와 악기 반주로 발표하고, 듣는 사람의 예절을 지키며 친구 발표를 감상할 수 있다.',
    illustration: ART('a tiny paper stage in a classroom with a group performing songs and rhythm instruments, an audience of paper children clapping politely', '작은 음악회', [
      { motif: 'star', x: 110, y: 80, s: 0.7 }, { motif: 'star', x: 380, y: 86, s: 0.5 }, { motif: 'flower', x: 400, y: 226, color: 'rose' }]),
    safety: SING_SAFE,
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"오늘은 우리 반 작은 음악회예요. 발표하는 사람과 듣는 사람이 지킬 약속은 무엇일까요?" 두세 가지를 함께 정해 칠판에 쓴다. 발표 차례는 제비뽑기로 정한다. 시연 단추로 음악회 차례가 놓이는 모습을 보여 준다.',
        student: '음악회에서 듣는 사람이 지킬 약속 하나를 짝에게 말해 봐요.',
        demo: { tool: 'story', options: { cards: [{ id: 'd1', text: '인사해요', motif: 'sun' }, { id: 'd2', text: '노래하고 연주해요', motif: 'bird' }], slots: 2, shuffle: false }, sequence: [{ order: ['d1', 'd2'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 음악회 차례와 예절', minutes: 8, tool: 'story',
            teacher: '"발표하는 모둠은 이 차례로 해요." 장면을 놓은 뒤 발표 모둠이 그 차례를 실제로 연습한다. 듣는 사람 예절은 카드로 고른다. 박수는 연주가 다 끝나고 인사할 때 친다는 것을 짚는다.',
            task: '음악회 발표 차례를 장면 카드로 놓고, 듣는 사람의 예절을 골라요.',
            levels: CARD_LV(),
            items: [
              { prompt: '발표하는 모둠의 차례대로 장면을 놓아 보세요.', toolOptions: { slots: 4, cards: [{ id: 'k1', text: '앞에 나가 바르게 서요', motif: 'tree' }, { id: 'k2', text: '인사하고 노래 제목을 말해요', motif: 'sun' }, { id: 'k3', text: '노래하고 연주해요', motif: 'bird' }, { id: 'k4', text: '끝 인사를 해요', motif: 'star' }] },
                target: { order: ['k1', 'k2', 'k3', 'k4'] }, difficulty: 0.1,
                levels: { easy: { prompt: '발표하는 모둠의 차례대로 장면을 놓아 보세요.', toolOptions: { slots: 3, cards: [{ id: 'k2', text: '인사하고 노래 제목을 말해요', motif: 'sun' }, { id: 'k3', text: '노래하고 연주해요', motif: 'bird' }, { id: 'k4', text: '끝 인사를 해요', motif: 'star' }] }, target: { order: ['k2', 'k3', 'k4'] } } } },
              { prompt: '음악회에서 듣는 사람의 바른 예절만 골라 보세요.', toolOptions: { mode: 'pick', basket: '듣는 사람 예절', cards: ['조용히 끝까지 들어요', '끝 인사 때 박수를 쳐요', '연주 중에 친구와 이야기해요', '악기를 몰래 쳐 봐요'] },
                target: { pick: ['조용히 끝까지 들어요', '끝 인사 때 박수를 쳐요'] }, difficulty: 0.1,
                predict: { q: '연주하는 도중에 박수를 치면 어떻게 될까요?', options: ['연주가 잘 안 들려요', '더 잘 들려요'], answer: 0 },
                conclude: '박수는 연주가 끝나고 인사할 때 쳐야 끝까지 잘 들을 수 있어요.' },
              { prompt: '모둠이 자리에서 일어나 발표 차례(서기-인사-연주-끝 인사)를 한 번 연습해요. 다 했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 발표하고 감상하기', minutes: 20, tool: 'keyboard',
            teacher: '모둠마다 2~3분씩 발표하고, 듣는 모둠은 \'좋았던 점\' 하나를 기억한다. 발표가 끝난 모둠은 건반 점검표에 오늘 한 것을 표시한다. 점검표는 한 것만 솔직하게 표시하고, 아직 하지 않은 것은 지금 해 보게 한다. 발표가 떨리는 학생은 모둠 가운데에 서게 하고 다른 모둠원이 첫 음을 함께 낸다.',
            task: '모둠이 음악회에서 발표하고, 다른 모둠 발표를 감상한 뒤 점검표로 돌아봐요.',
            levels: MEL_LV(),
            items: [
              { prompt: '우리 모둠 차례가 되면 앞에 나가 노래와 반주를 발표해요. 다른 모둠 발표는 조용히 끝까지 들어요. 다 했으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '발표하기 전에 우리 노래의 첫 음을 확인해요. 가락을 듣고 건반으로 쳐 보세요.', target: { notes: ['도', '미', '솔'] }, difficulty: 0.05,
                levels: { challenge: { prompt: '발표하기 전에 "사진첩" 첫 부분을 확인해요. 가락을 듣고 건반으로 쳐 보세요.', target: { notes: ['솔', '솔', '미', '미'] } } } },
              { prompt: '음악회에서 한 것을 돌아보며 점검표에 표시하세요.', target: { selfCheck: ['우리 모둠이 끝까지 발표했어요', '다른 모둠 발표를 조용히 들었어요', '다른 모둠의 좋았던 점 하나를 말했어요'] }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"다른 모둠 발표에서 좋았던 점을 말해 볼까요?" 모둠마다 한 가지씩 칭찬을 주고받는다. 오늘 음악회가 어떤 기억으로 남을지 이야기한다. 다음 시간부터는 선을 찾아 그림으로 기억을 나타낸다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', basket: '듣는 사람 예절', cards: ['끝까지 조용히 들어요', '발표 중에 일어나 돌아다녀요', '끝 인사 때 박수를 쳐요'] }, prompt: '음악회에서 듣는 사람의 예절만 골라 보세요.', target: { pick: ['끝까지 조용히 들어요', '끝 인사 때 박수를 쳐요'] }, difficulty: 0.05 },
          { type: 'short', prompt: '다른 모둠 발표에서 좋았던 점 하나를 쓰세요.', difficulty: 0.1 },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '우리 반 작은 음악회',
      items: [
        { type: 'table', prompt: '모둠 발표를 듣고 좋았던 점을 쓰세요.', columns: ['모둠', '좋았던 점'], rows: 4 },
        { type: 'check', prompt: '음악회에서 내가 지킨 것에 ✓ 하세요.', options: ['바른 자세로 발표했어요', '조용히 끝까지 들었어요', '끝 인사 때 박수를 쳤어요'] },
        { type: 'short', prompt: '우리 모둠 발표에서 가장 잘된 점을 쓰세요.' },
        { type: 'draw', prompt: '음악회에서 기억에 남는 장면을 그리세요.' },
      ],
      easy: {
        note: '끝까지 듣고, 끝나면 박수!',
        items: [
          { type: 'choice', prompt: '박수는 언제 치나요?', options: ['끝 인사 때', '연주 도중'], answer: '끝 인사 때' },
          { type: 'short', prompt: '좋았던 모둠과 까닭을 쓰세요.' },
          { type: 'draw', prompt: '음악회 장면을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '발표 차례가 세 장면이고, 들을 때 건반이 비쳐요.',
      base: '네 장면 차례를 놓고 첫 음을 귀로 들어 쳐요.',
      challenge: '계이름 없이 \'사진첩\' 첫 부분을 귀로 듣고 쳐요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 발표가 떨려 소리를 내지 못한다 → 모둠원이 첫 음을 함께 내고, 원하면 모둠 가운데에 서게 한다. ② 연주 도중에 박수를 친다 → 끝 인사 신호를 미리 정한다. ③ 친구 발표를 비교하며 순위를 매긴다 → \'좋았던 점\'만 말하기로 약속한다. 발표 모습을 찍을 때는 학생 얼굴이 학급 밖으로 나가지 않게 한다.',
  }));

  // ───────────────────────── 25~28차시: 여러 가지 선 찾기(선·색·모양 — 표현의 기초 요소) ─────────────────────────
  // 콜라주 판에서는 '긴 네모(rect)'를 곧은 선 조각으로, '반원(semi)'을 굽은 선 조각으로 쓴다. 판 밖 실제 활동은 크레파스·사인펜·붓·털실로 한다.

  lessons.push(L(25, {
    title: '교실에서 곧은 선과 굽은 선 찾기',
    objective: '교실 물건에서 곧은 선과 굽은 선을 찾아 나누고, 종이띠 조각으로 두 가지 선을 나타낼 수 있다.',
    illustration: ART('a paper classroom with a blackboard frame, a ruler and a window showing straight lines, a hula hoop and a rainbow showing curved lines, a child pointing', '선을 찾아요', [
      { motif: 'star', x: 120, y: 86, s: 0.6 }, { motif: 'leaf', x: 110, y: 226 }, { motif: 'tree', x: 400, y: 214 }]),
    safety: ['가위를 쓸 때는 앉아서 쓰고, 건넬 때는 손잡이를 내밀어요.', '교실을 둘러볼 때는 걸어서 다니고 친구와 부딪치지 않게 해요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"손가락으로 칠판 테두리를 따라 그려 볼까요? 이번에는 시계 둘레를 따라 그려 봐요. 손가락이 어떻게 움직였나요?" 곧게 가는 선과 둥글게 휘는 선이 있다는 것을 몸으로 느끼게 한다. 시연 단추로 물건이 곧은 선과 굽은 선으로 나뉘는 모습을 보여 준다.',
        student: '손가락으로 칠판 테두리와 시계 둘레를 공중에 따라 그려 봐요.',
        demo: { tool: 'mindmap', options: { topic: '교실 속 선', slots: ['곧은 선', '굽은 선'], cards: ['칠판 테두리', '시계 둘레'], shuffle: false }, sequence: [{ sort: { '곧은 선': ['칠판 테두리'], '굽은 선': ['시계 둘레'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 물건 속 선 나누기', minutes: 12, tool: 'mindmap',
            teacher: '"교실을 걸어 다니며 선을 하나씩 찾아 손가락으로 따라 그려 와요." 3분 동안 찾은 뒤 자리에 앉아 카드를 나눈다. 곧은 선은 \'자로 그은 것처럼\', 굽은 선은 \'휘어 돌아가는\' 선이라고 학생 말로 정리한다. 물결처럼 오르내리는 선이나 꺾인 선도 있다는 것을 셋째 문항에서 짚는다.',
            task: '교실과 둘레의 물건에서 찾은 선을 곧은 선과 굽은 선으로 나누고, 선 이름과 모양을 이어요.',
            levels: CARD_LV(),
            items: [
              { prompt: '물건 속 선을 곧은 선과 굽은 선으로 나누어 보세요.', toolOptions: { topic: '교실 속 선', slots: ['곧은 선', '굽은 선'], cards: ['자의 옆줄', '훌라후프 둘레', '창문 틀', '무지개'] },
                target: { sort: { '곧은 선': ['자의 옆줄', '창문 틀'], '굽은 선': ['훌라후프 둘레', '무지개'] } }, difficulty: 0.05 },
              { prompt: '밖에서 볼 수 있는 선을 곧은 선과 굽은 선으로 나누어 보세요.', toolOptions: { topic: '밖에서 본 선', slots: ['곧은 선', '굽은 선'], cards: ['횡단보도 줄무늬', '달팽이 껍데기', '전봇대', '그네 줄이 그린 길'] },
                target: { sort: { '곧은 선': ['횡단보도 줄무늬', '전봇대'], '굽은 선': ['달팽이 껍데기', '그네 줄이 그린 길'] } }, difficulty: 0.15,
                levels: { challenge: { prompt: '밖에서 볼 수 있는 선을 나누어 보세요. 선이 아닌 카드는 남겨요.', toolOptions: { cards: ['횡단보도 줄무늬', '달팽이 껍데기', '전봇대', '그네 줄이 그린 길', '새소리'] } } } },
              { prompt: '선 이름과 그 선의 모양을 이어 보세요.', toolOptions: { mode: 'match', topic: '선 이름', slots: [{ id: 's1', label: '물결선' }, { id: 's2', label: '지그재그 선' }, { id: 's3', label: '곧은 선' }], cards: ['위아래로 둥글게 오르내려요', '뾰족하게 꺾이며 오르내려요', '휘지 않고 쭉 뻗어요'] },
                target: { match: { s1: '위아래로 둥글게 오르내려요', s2: '뾰족하게 꺾이며 오르내려요', s3: '휘지 않고 쭉 뻗어요' } }, difficulty: 0.2,
                predict: { q: '물결선은 곧은 선일까요, 굽은 선일까요?', options: ['곧은 선', '굽은 선'], answer: 1 },
                conclude: '물결선은 둥글게 휘며 오르내리는 굽은 선이고, 지그재그 선은 곧은 선이 꺾이며 이어진 선이에요.',
                levels: { easy: { prompt: '선 이름과 그 선의 모양 두 짝을 이어 보세요.', toolOptions: { slots: [{ id: 's1', label: '물결선' }, { id: 's3', label: '곧은 선' }], cards: ['위아래로 둥글게 오르내려요', '휘지 않고 쭉 뻗어요'] }, target: { match: { s1: '위아래로 둥글게 오르내려요', s3: '휘지 않고 쭉 뻗어요' } } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 종이띠로 선 나타내기', minutes: 14, tool: 'collage',
            teacher: '"판에서는 긴 네모를 곧은 선 조각으로, 반원을 굽은 선 조각으로 써요." 판에서 먼저 붙여 본 뒤 실제 색종이를 길게 오려 도화지에 곧은 선과 굽은 선을 붙인다. 종이띠를 둥글게 휘어 붙이면 굽은 선이 된다는 것을 보여 준다. 가위는 앉아서 쓴다.',
            task: '판에서 긴 네모와 반원 조각으로 곧은 선과 굽은 선을 나타낸 뒤, 실제 종이띠로 붙여 보아요.',
            levels: {
              easy: { shapes: ['rect', 'semi'], colors: ['파랑', '빨강', '노랑'] },
              base: { shapes: ['rect', 'semi', 'circle', 'square'], colors: ['파랑', '빨강', '노랑', '초록', '갈색'] },
              challenge: {},
            },
            items: [
              { prompt: '곧은 선 조각(파랑 긴 네모)을 두 개, 굽은 선 조각(빨강 반원)을 하나 붙여 보세요.', target: { has: [{ shape: 'rect', color: '파랑', n: 2 }, { shape: 'semi', color: '빨강', n: 1 }] }, difficulty: 0.05,
                hints: ['곧은 선은 긴 네모, 굽은 선은 반원 조각이에요. 모양 고르개에서 찾아봐요.', '판에 있는 조각의 모양과 색, 개수를 하나씩 세어 보세요.', '파랑 긴 네모 두 개와 빨강 반원 하나를 붙이면 돼요.'] },
              { prompt: '곧은 선 세 개를 같은 색(노랑 긴 네모)으로 나란히 붙여 횡단보도처럼 나타내 보세요.', target: { has: [{ shape: 'rect', color: '노랑', n: 3 }], pieces: { n: 3 } }, difficulty: 0.1,
                hints: ['횡단보도 줄무늬는 같은 곧은 선이 나란히 놓여 있어요.', '노랑 긴 네모가 꼭 세 개인지, 다른 조각이 섞이지 않았는지 세어 보세요.', '노랑 긴 네모만 세 개 붙이고 다른 조각은 떼어요.'] },
              { prompt: '실제 색종이를 길게 오려 도화지에 곧은 선 하나와 굽은 선 하나를 붙여요. 다 했으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 찾은 선 가운데 가장 마음에 드는 선은 무엇인가요?" 두세 명이 말한다. 도화지는 이름을 쓰고 걸어 둔다. 다음 시간에는 선마다 주는 느낌을 알아본다. 남은 종이띠는 \'다시 쓸 종이\' 상자에 넣는다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '선 나누기', slots: ['곧은 선', '굽은 선'], cards: ['책상 모서리', '동그란 접시 둘레', '연필'] }, prompt: '물건 속 선을 곧은 선과 굽은 선으로 나누어 보세요.', target: { sort: { '곧은 선': ['책상 모서리', '연필'], '굽은 선': ['동그란 접시 둘레'] } }, difficulty: 0.05 },
          { type: 'choice', prompt: '뾰족하게 꺾이며 오르내리는 선은?', options: ['물결선', '지그재그 선', '곧은 선'], answer: 1, difficulty: 0.1, explain: '지그재그 선은 곧은 선이 뾰족하게 꺾이며 이어져요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '곧은 선과 굽은 선',
      items: [
        { type: 'table', prompt: '교실에서 찾은 선을 쓰세요.', columns: ['곧은 선', '굽은 선'], rows: 3 },
        { type: 'choice', prompt: '물결선은 어떤 선인가요?', options: ['굽은 선', '곧은 선'], answer: '굽은 선' },
        { type: 'draw', prompt: '곧은 선과 굽은 선을 하나씩 그리세요.' },
        { type: 'short', prompt: '가장 마음에 드는 선과 까닭을 쓰세요.' },
      ],
      easy: {
        note: '곧은 선은 쭉, 굽은 선은 둥글게.',
        items: [
          { type: 'choice', prompt: '자의 옆줄은?', options: ['곧은 선', '굽은 선'], answer: '곧은 선' },
          { type: 'choice', prompt: '훌라후프 둘레는?', options: ['굽은 선', '곧은 선'], answer: '굽은 선' },
          { type: 'draw', prompt: '굽은 선을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '두 짝만 잇고, 판에 긴 네모와 반원만 있어요. 맞는 칸에 초록 테두리가 생겨요.',
      base: '세 짝을 잇고, 여러 모양 가운데 선 조각을 골라 붙여요.',
      challenge: '선이 아닌 카드를 골라내고, 모든 모양과 색 가운데서 골라 붙여요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 물결선을 곧은 선으로 나눈다 → 손가락으로 따라 그리며 손이 휘는지 본다. ② 지그재그 선을 굽은 선이라 한다 → 꺾인 곳마다 손을 멈추게 해 곧은 선이 이어진 것을 느끼게 한다. ③ 종이띠를 둥글게 붙이기 어려워한다 → 종이띠 양 끝만 풀칠하고 가운데를 부풀려 붙이게 한다.',
  }));

  lessons.push(L(26, {
    title: '선이 주는 느낌과 어울리는 장면',
    objective: '물결선·지그재그 선·곧은 선이 주는 느낌을 말하고, 장면에 어울리는 선을 골라 반복해 나타낼 수 있다.',
    illustration: ART('three paper panels: a calm sea drawn with soft wavy lines, a lightning storm drawn with sharp zigzag lines, and gentle rain drawn with thin straight lines', '선의 느낌', [
      { motif: 'cloud', x: 330, y: 70, s: 0.8 }, { motif: 'bird', x: 130, y: 90 }, { motif: 'leaf', x: 400, y: 226 }]),
    safety: ['크레파스를 입에 넣지 않고, 다 쓴 뒤 상자에 넣어요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"선생님이 칠판에 선을 그릴게요. 이 선을 보면 어떤 느낌이 드나요?" 부드러운 물결선과 뾰족한 지그재그 선을 그린다. \'잔잔해요\', \'무서워요\'처럼 느낌 말을 모은다. 정답이 하나가 아니라 사람마다 조금씩 다를 수 있다고 말한다. 시연 단추로 장면과 선이 이어지는 모습을 보여 준다.',
        student: '칠판의 두 선을 보고 떠오르는 느낌 낱말을 하나씩 말해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '장면과 선', slots: [{ id: 's1', label: '잔잔한 바다' }], cards: ['물결선', '지그재그 선'], shuffle: false }, sequence: [{ match: { s1: '물결선' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 장면에 어울리는 선 고르기', minutes: 12, tool: 'mindmap',
            teacher: '"번개가 치는 장면을 물결선으로 그리면 어떨까요?" 장면과 선을 이으며 그 선을 고른 까닭을 말하게 한다. 학생마다 다른 선을 고를 수도 있지만, 오늘 카드는 가장 많이 쓰는 짝으로 맞추어 보자고 말한다. 둘째 문항은 선을 느낌에 따라 나누는 것이다.',
            task: '장면과 어울리는 선을 잇고, 선을 느낌에 따라 나누어요.',
            levels: CARD_LV(),
            items: [
              { prompt: '장면과 가장 잘 어울리는 선을 이어 보세요.', toolOptions: { mode: 'match', topic: '장면과 선', slots: [{ id: 's1', label: '잔잔한 바다' }, { id: 's2', label: '번쩍이는 번개' }, { id: 's3', label: '똑바로 내리는 비' }], cards: ['부드러운 물결선', '뾰족한 지그재그 선', '가는 곧은 선'] },
                target: { match: { s1: '부드러운 물결선', s2: '뾰족한 지그재그 선', s3: '가는 곧은 선' } }, difficulty: 0.1,
                levels: { easy: { prompt: '장면과 가장 잘 어울리는 선 두 짝을 이어 보세요.', toolOptions: { slots: [{ id: 's1', label: '잔잔한 바다' }, { id: 's2', label: '번쩍이는 번개' }], cards: ['부드러운 물결선', '뾰족한 지그재그 선'] }, target: { match: { s1: '부드러운 물결선', s2: '뾰족한 지그재그 선' } } } } },
              { prompt: '선을 느낌에 따라 부드러운 느낌과 날카로운 느낌으로 나누어 보세요.', toolOptions: { topic: '선의 느낌', slots: ['부드러운 느낌', '날카로운 느낌'], cards: ['동그랗게 말린 선', '톱니 같은 선', '느릿한 물결선', '번개 같은 꺾인 선'] },
                target: { sort: { '부드러운 느낌': ['동그랗게 말린 선', '느릿한 물결선'], '날카로운 느낌': ['톱니 같은 선', '번개 같은 꺾인 선'] } }, difficulty: 0.15,
                predict: { q: '뾰족하게 꺾인 선은 어떤 느낌을 줄까요?', options: ['부드러워요', '날카로워요'], answer: 1 },
                conclude: '굽은 선은 부드러운 느낌을, 뾰족하게 꺾인 선은 날카롭고 힘찬 느낌을 줘요.' },
              { prompt: '기억에 남는 신나는 운동회 날을 그릴 때 어울리는 선만 골라 보세요.', toolOptions: { mode: 'pick', basket: '운동회 날 선', cards: ['힘차게 뻗는 굵은 선', '통통 튀는 물결선', '흐릿하게 끊긴 가는 선'] },
                target: { pick: ['힘차게 뻗는 굵은 선', '통통 튀는 물결선'] }, difficulty: 0.2,
                hints: ['신나는 날의 기분을 떠올리고, 그 기분처럼 움직이는 선을 생각해요.', '흐릿하고 끊긴 선은 신나는 느낌보다 어떤 느낌일지 생각해 봐요.', '힘차게 뻗는 굵은 선과 통통 튀는 물결선이 신나는 운동회와 어울려요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 선을 되풀이해 장면 꾸미기', minutes: 14, tool: 'collage',
            teacher: '"물결은 같은 모양이 되풀이되며 이어져요." 판에서 긴 네모와 반원을 번갈아 놓아 물결 띠를 만든다. 그다음 실제 도화지에 크레파스로 고른 장면을 선을 되풀이해 그린다. 셋째 문항은 실제로 그린 그림을 짝에게 보여 주고 고른 선을 말하는 것이다.',
            task: '판에서 같은 선 묶음을 되풀이해 장면을 꾸미고, 실제 도화지에 선으로 장면을 그려요.',
            levels: {
              easy: { shapes: ['rect', 'semi'], colors: ['파랑', '노랑', '보라'] },
              base: { shapes: ['rect', 'semi', 'circle', 'triangle'], colors: ['파랑', '노랑', '보라', '초록', '하양'] },
              challenge: {},
            },
            items: [
              { prompt: '파랑 반원과 파랑 긴 네모 한 묶음을 왼쪽에서 오른쪽으로 세 번 되풀이해 바다 물결 띠를 만들어 보세요.', target: { repeat: { times: 3, unit: 2 }, has: [{ shape: 'semi', color: '파랑', n: 3 }, { shape: 'rect', color: '파랑', n: 3 }] }, difficulty: 0.2,
                hints: ['물결은 같은 묶음이 차례로 되풀이돼요. 반원 하나, 긴 네모 하나가 한 묶음이에요.', '왼쪽부터 조각 차례를 읽어 보세요. 반원-긴 네모 차례가 세 번 똑같이 이어지나요?', '왼쪽에서 오른쪽으로 파랑 반원, 파랑 긴 네모를 차례로 세 번 놓아요.'] },
              { prompt: '번개 장면이에요. 노랑 긴 네모를 네 개 붙이고, 돌리기로 비스듬히 기울여 꺾인 선을 만들어 보세요.', target: { has: [{ shape: 'rect', color: '노랑', n: 4 }] , pieces: { n: 4 } }, difficulty: 0.15,
                hints: ['지그재그 선은 곧은 선이 꺾이며 이어진 선이에요. 긴 네모를 기울여 이어 봐요.', '노랑 긴 네모가 꼭 네 개인지, 다른 조각은 없는지 세어 보세요.', '노랑 긴 네모 네 개만 붙이고, 돌리기 단추로 하나씩 번갈아 기울여요.'] },
              { prompt: '실제 도화지에 고른 장면을 크레파스로 선을 되풀이해 그리고, 짝에게 어떤 선을 골랐는지 말해요. 다 했으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"내 그림에서 어떤 선이 어떤 느낌을 주나요?" 두세 명이 그림을 들어 보이며 말한다. 같은 장면이라도 사람마다 고른 선이 다를 수 있다는 것을 인정해 준다. 다음 시간에는 재료에 따라 선이 어떻게 달라지는지 알아본다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '장면과 선', slots: [{ id: 'e1', label: '산꼭대기가 뾰족한 산' }, { id: 'e2', label: '살랑이는 바람' }], cards: ['지그재그 선', '물결선'] }, prompt: '장면과 가장 잘 어울리는 선을 이어 보세요.', target: { match: { e1: '지그재그 선', e2: '물결선' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '부드러운 느낌을 주는 선은?', options: ['톱니 같은 선', '동그랗게 말린 선', '번개 같은 선'], answer: 1, difficulty: 0.05, explain: '동그랗게 말린 굽은 선은 부드러운 느낌을 줘요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '선이 주는 느낌',
      items: [
        { type: 'table', prompt: '선을 보고 떠오르는 느낌을 쓰세요.', columns: ['선', '느낌'], cells: [['물결선', ''], ['지그재그 선', ''], ['곧은 선', '']] },
        { type: 'choice', prompt: '번개를 그릴 때 어울리는 선은?', options: ['지그재그 선', '물결선'], answer: '지그재그 선' },
        { type: 'draw', prompt: '선을 되풀이해 바다나 번개 장면을 그리세요.' },
        { type: 'short', prompt: '내가 고른 선과 그 까닭을 쓰세요.' },
      ],
      easy: {
        note: '굽은 선은 부드럽게, 꺾인 선은 날카롭게.',
        items: [
          { type: 'choice', prompt: '잔잔한 바다는?', options: ['물결선', '지그재그 선'], answer: '물결선' },
          { type: 'choice', prompt: '번개는?', options: ['지그재그 선', '물결선'], answer: '지그재그 선' },
          { type: 'draw', prompt: '물결선을 되풀이해 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '두 짝만 잇고 판에 긴 네모와 반원만 있어요.',
      base: '세 짝을 잇고 여러 모양 가운데서 골라 되풀이해요.',
      challenge: '모든 모양과 색 가운데서 골라, 묶음을 정확히 세 번 되풀이해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 선마다 정답 느낌이 하나뿐이라고 여긴다 → 사람마다 느낌이 조금씩 다를 수 있다고 인정하고, 까닭을 말하게 한다. ② 되풀이 띠의 차례가 섞인다 → 왼쪽부터 \'반원-긴 네모\'를 소리 내어 읽으며 놓게 한다. ③ 크레파스로 선을 너무 세게 그어 종이가 찢어진다 → 손목 힘을 빼고 그리게 한다.',
  }));

  lessons.push(L(27, {
    title: '재료에 따라 달라지는 굵은 선 가는 선',
    objective: '붓·크레파스·사인펜·연필로 그은 선의 굵기를 견주어 나누고, 굵은 선과 가는 선을 섞어 그림을 꾸밀 수 있다.',
    illustration: ART('paper art tools lying on a table: a thick paintbrush leaving a wide stroke, a crayon on its side, a thin marker and a pencil drawing fine lines', '굵은 선 가는 선', [
      { motif: 'star', x: 120, y: 86, s: 0.6 }, { motif: 'flower', x: 110, y: 226, color: 'sky' }, { motif: 'tree', x: 400, y: 214 }]),
    safety: ['물감 붓은 물통에 담가 두고 휘두르지 않아요.', '사인펜 뚜껑은 다 쓰면 바로 닫아요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"같은 선을 굵은 붓과 연필로 그으면 어떻게 다를까요?" 칠판에 붙인 종이에 두 재료로 같은 길이의 선을 긋는다. 굵기·진하기가 다르다는 것을 짚는다. 크레파스는 세워서 그을 때와 눕혀서 그을 때 굵기가 바뀐다는 것도 보여 준다. 시연 단추로 재료가 굵은 선과 가는 선으로 나뉘는 모습을 보여 준다.',
        student: '선생님이 그은 두 선을 보고, 어느 쪽이 굵은지 손가락으로 가리켜 봐요.',
        demo: { tool: 'mindmap', options: { topic: '재료와 선', slots: ['굵은 선', '가는 선'], cards: ['굵은 붓', '연필'], shuffle: false }, sequence: [{ sort: { '굵은 선': ['굵은 붓'], '가는 선': ['연필'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 재료로 선 그어 견주기', minutes: 13, tool: 'mindmap',
            teacher: '"모둠 종이에 재료마다 선을 하나씩 그어 견주어 봐요." 실제로 그어 본 뒤 카드를 나눈다. 크레파스를 눕혀 그은 선은 굵고, 세워 그은 선은 가늘다는 것을 직접 보게 한다. 붓은 물감을 조금만 묻혀야 선이 번지지 않는다고 말한다.',
            task: '재료마다 선을 직접 그어 보고, 굵은 선과 가는 선으로 나누어요.',
            levels: CARD_LV(),
            items: [
              { prompt: '모둠 종이에 재료마다 선을 하나씩 그어 견주어요. 다 했으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '그은 선을 굵은 선과 가는 선으로 나누어 보세요.', toolOptions: { topic: '재료와 선', slots: ['굵은 선', '가는 선'], cards: ['굵은 붓으로 그은 선', '가는 사인펜으로 그은 선', '크레파스를 눕혀 그은 선', '연필로 그은 선'] },
                target: { sort: { '굵은 선': ['굵은 붓으로 그은 선', '크레파스를 눕혀 그은 선'], '가는 선': ['가는 사인펜으로 그은 선', '연필로 그은 선'] } }, difficulty: 0.1,
                predict: { q: '크레파스를 눕혀서 그으면 선이 어떻게 될까요?', options: ['굵어져요', '가늘어져요'], answer: 0 },
                conclude: '같은 크레파스도 눕혀 그으면 굵고, 세워 그으면 가늘어요.' },
              { prompt: '그리고 싶은 것과 알맞은 선의 굵기를 이어 보세요.', toolOptions: { mode: 'match', topic: '알맞은 굵기', slots: [{ id: 's1', label: '굵은 나무 기둥' }, { id: 's2', label: '개미 다리' }, { id: 's3', label: '고양이 수염' }], cards: ['굵은 선', '아주 가는 선', '가늘고 긴 선'] },
                target: { match: { s1: '굵은 선', s2: '아주 가는 선', s3: '가늘고 긴 선' } }, difficulty: 0.2,
                levels: { easy: { prompt: '그리고 싶은 것과 알맞은 선의 굵기 두 짝을 이어 보세요.', toolOptions: { slots: [{ id: 's1', label: '굵은 나무 기둥' }, { id: 's2', label: '개미 다리' }], cards: ['굵은 선', '아주 가는 선'] }, target: { match: { s1: '굵은 선', s2: '아주 가는 선' } } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 굵은 선 가는 선 섞어 꾸미기', minutes: 13, tool: 'collage',
            teacher: '"판에서는 큰 긴 네모가 굵은 선, 작은 긴 네모가 가는 선이에요." 판에서 먼저 섞어 본 뒤, 실제 도화지에 굵은 선과 가는 선을 섞어 기억에 남는 나무나 집을 그린다. 굵은 선만 쓴 그림과 섞어 쓴 그림을 견주어 보여 준다.',
            task: '판에서 굵은 선과 가는 선 조각을 섞어 붙이고, 실제 도화지에 두 굵기를 섞어 그려요.',
            levels: {
              easy: { shapes: ['rect', 'circle'], colors: ['갈색', '초록', '검정'] },
              base: { shapes: ['rect', 'circle', 'leaf', 'triangle'], colors: ['갈색', '초록', '검정', '노랑', '파랑'] },
              challenge: {},
            },
            items: [
              { prompt: '굵은 선(크게 갈색 긴 네모) 하나와 가는 선(작게 갈색 긴 네모) 세 개를 붙여 나무 기둥과 가지를 나타내 보세요.', target: { has: [{ shape: 'rect', color: '갈색', size: 'l', n: 1 }, { shape: 'rect', color: '갈색', size: 's', n: 3 }] }, difficulty: 0.15,
                hints: ['나무 기둥은 굵은 선, 가지는 가는 선이에요. 크기 고르개에서 크게와 작게를 골라요.', '갈색 긴 네모를 크기별로 세어 보세요. 크게 하나, 작게 셋인가요?', '크게 갈색 긴 네모 하나와 작게 갈색 긴 네모 셋을 붙여요.'] },
              { prompt: '굵은 검정 선(크게 긴 네모) 두 개 사이에 가는 검정 선(작게 긴 네모) 두 개를 넣어 보세요.', target: { has: [{ shape: 'rect', color: '검정', size: 'l', n: 2 }, { shape: 'rect', color: '검정', size: 's', n: 2 }] }, difficulty: 0.15,
                hints: ['굵은 선과 가는 선이 번갈아 있으면 그림이 더 살아나요.', '검정 긴 네모를 크기별로 세어 보세요.', '크게 검정 긴 네모 둘, 작게 검정 긴 네모 둘을 붙여요.'] },
              { prompt: '실제 도화지에 굵은 선과 가는 선을 섞어 기억에 남는 나무나 집을 그려요. 다 했으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"굵은 선과 가는 선을 섞으니 그림이 어떻게 달라졌나요?" 두세 명이 그림을 보여 준다. 붓은 물에 헹궈 눕혀 말리고, 사인펜 뚜껑을 닫는다. 다음 시간에는 자연 속에서 선을 찾아본다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '재료와 선', slots: ['굵은 선', '가는 선'], cards: ['굵은 매직', '볼펜', '크레파스를 눕혀 그은 선'] }, prompt: '재료로 그은 선을 굵은 선과 가는 선으로 나누어 보세요.', target: { sort: { '굵은 선': ['굵은 매직', '크레파스를 눕혀 그은 선'], '가는 선': ['볼펜'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '고양이 수염을 그릴 때 알맞은 선은?', options: ['굵은 붓 선', '가는 선', '눕힌 크레파스 선'], answer: 1, difficulty: 0.05, explain: '수염은 가늘어서 가는 선이 알맞아요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '굵은 선 가는 선',
      items: [
        { type: 'table', prompt: '재료마다 그은 선의 굵기를 쓰세요.', columns: ['재료', '굵은 선 / 가는 선'], cells: [['굵은 붓', ''], ['연필', ''], ['눕힌 크레파스', ''], ['사인펜', '']] },
        { type: 'choice', prompt: '크레파스를 눕혀 그으면?', options: ['굵어져요', '가늘어져요'], answer: '굵어져요' },
        { type: 'draw', prompt: '굵은 선과 가는 선을 섞어 나무를 그리세요.' },
        { type: 'short', prompt: '가장 좋아하는 재료와 그 까닭을 쓰세요.' },
      ],
      easy: {
        note: '붓은 굵게, 연필은 가늘게.',
        items: [
          { type: 'choice', prompt: '굵은 붓 선은?', options: ['굵은 선', '가는 선'], answer: '굵은 선' },
          { type: 'choice', prompt: '연필 선은?', options: ['가는 선', '굵은 선'], answer: '가는 선' },
          { type: 'draw', prompt: '굵은 선과 가는 선을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '두 짝만 잇고, 판에 긴 네모와 동그라미만 있어요.',
      base: '세 짝을 잇고, 여러 모양 가운데서 긴 네모를 크기에 맞게 골라요.',
      challenge: '모든 모양과 색 가운데서 크기를 가려 골라 붙여요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 굵은 선이 더 잘 그린 선이라고 여긴다 → 개미 다리를 굵은 붓으로 그려 보이며 그리는 것에 따라 알맞은 굵기가 다르다고 말한다. ② 붓에 물감을 많이 묻혀 번진다 → 물감 접시 가장자리에 붓을 훑게 한다. ③ 판에서 크기를 고르지 않고 붙인다 → 크기 고르개를 먼저 누르게 한다.',
  }));

  lessons.push(L(28, {
    title: '자연 속에서 선 찾아 따라 그리기',
    objective: '나뭇잎 잎맥·나이테·물결·거미줄 같은 자연 속 선을 찾아 선의 종류에 따라 나누고, 나뭇잎을 관찰해 선을 따라 그릴 수 있다.',
    illustration: ART('paper nature details: a leaf with branching veins, a tree stump with round rings, ripples on a pond and a spider web, a child with a magnifying glass', '자연 속 선', [
      { motif: 'leaf', x: 120, y: 90 }, { motif: 'tree', x: 400, y: 214 }, { motif: 'flower', x: 110, y: 226, color: 'buttercup' }]),
    safety: ['밖에서 나뭇잎을 주울 때는 떨어진 잎만 줍고, 살아 있는 나무를 꺾지 않아요.', '줍고 난 뒤에는 손을 씻어요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"나뭇잎을 돋보기로 보면 어떤 선이 보일까요?" 미리 주워 온 떨어진 나뭇잎을 모둠마다 나누어 준다. 잎맥이 가운데에서 가지처럼 뻗어 나간다는 것을 찾게 한다. 시연 단추로 자연 속 선이 나뉘는 모습을 보여 준다.',
        student: '나뭇잎을 들고 잎맥을 손가락으로 따라가 봐요.',
        demo: { tool: 'mindmap', options: { topic: '자연 속 선', slots: ['곧게 뻗은 선', '둥글게 휜 선'], cards: ['대나무 줄기', '나이테'], shuffle: false }, sequence: [{ sort: { '곧게 뻗은 선': ['대나무 줄기'], '둥글게 휜 선': ['나이테'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 자연 속 선 나누기', minutes: 12, tool: 'mindmap',
            teacher: '"나이테는 어떤 선일까요? 거미줄은요?" 사진이나 실물을 보며 카드를 나눈다. 거미줄처럼 곧은 선과 굽은 선이 함께 있는 것은 셋째 문항에서 골라 본다. 사진을 보여 줄 때는 교사가 직접 찍었거나 이용이 허락된 사진을 쓴다.',
            task: '자연 속 선을 곧게 뻗은 선과 둥글게 휜 선으로 나누고, 자연물과 그 선을 이어요.',
            levels: CARD_LV(),
            items: [
              { prompt: '자연 속 선을 곧게 뻗은 선과 둥글게 휜 선으로 나누어 보세요.', toolOptions: { topic: '자연 속 선', slots: ['곧게 뻗은 선', '둥글게 휜 선'], cards: ['대나무 줄기', '달팽이 껍데기 무늬', '솔잎', '연못 물결'] },
                target: { sort: { '곧게 뻗은 선': ['대나무 줄기', '솔잎'], '둥글게 휜 선': ['달팽이 껍데기 무늬', '연못 물결'] } }, difficulty: 0.1 },
              { prompt: '자연물과 그 속에서 보이는 선의 모양을 이어 보세요.', toolOptions: { mode: 'match', topic: '자연물과 선', slots: [{ id: 's1', label: '나뭇잎 잎맥' }, { id: 's2', label: '나이테' }, { id: 's3', label: '얼룩말 무늬' }], cards: ['가운데서 가지처럼 뻗어요', '동그라미가 겹겹이 있어요', '줄무늬가 나란히 있어요'] },
                target: { match: { s1: '가운데서 가지처럼 뻗어요', s2: '동그라미가 겹겹이 있어요', s3: '줄무늬가 나란히 있어요' } }, difficulty: 0.15,
                levels: { easy: { prompt: '자연물과 그 속에서 보이는 선 두 짝을 이어 보세요.', toolOptions: { slots: [{ id: 's1', label: '나뭇잎 잎맥' }, { id: 's2', label: '나이테' }], cards: ['가운데서 가지처럼 뻗어요', '동그라미가 겹겹이 있어요'] }, target: { match: { s1: '가운데서 가지처럼 뻗어요', s2: '동그라미가 겹겹이 있어요' } } } } },
              { prompt: '곧은 선과 굽은 선이 함께 보이는 자연물만 골라 보세요.', toolOptions: { mode: 'pick', basket: '두 선이 함께', cards: ['거미줄', '나뭇잎', '똑바른 대나무 줄기'] },
                target: { pick: ['거미줄', '나뭇잎'] }, difficulty: 0.2,
                predict: { q: '자연 속 물건에는 한 가지 선만 있을까요?', options: ['한 가지만 있어요', '여러 선이 함께 있어요'], answer: 1 },
                conclude: '거미줄은 곧은 실과 둥근 실이, 나뭇잎은 굽은 테두리와 곧은 잎맥이 함께 있어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 나뭇잎 선 따라 나타내기', minutes: 14, tool: 'collage',
            teacher: '"판에서 나뭇잎 조각과 긴 네모로 잎과 잎맥을 나타내 봐요." 판에서 붙인 뒤, 실제 나뭇잎을 종이 밑에 대고 크레파스를 눕혀 문질러 잎맥 선이 떠오르게 한다(문질러 찍기). 떠오른 선을 사인펜으로 한 번 더 따라 그린다.',
            task: '판에서 나뭇잎과 잎맥을 조각으로 나타내고, 실제 나뭇잎을 문질러 찍어 선을 따라 그려요.',
            levels: {
              easy: { shapes: ['leaf', 'rect'], colors: ['초록', '갈색', '노랑'] },
              base: { shapes: ['leaf', 'rect', 'circle', 'semi'], colors: ['초록', '갈색', '노랑', '주황', '빨강'] },
              challenge: {},
            },
            items: [
              { prompt: '크게 초록 나뭇잎 하나 위에 작게 갈색 긴 네모(잎맥) 세 개를 붙여 보세요.', target: { has: [{ shape: 'leaf', color: '초록', size: 'l', n: 1 }, { shape: 'rect', color: '갈색', size: 's', n: 3 }] }, difficulty: 0.15,
                hints: ['잎맥은 가는 선이라 작게 긴 네모로 나타내요. 잎 위에 겹쳐 붙여요.', '초록 나뭇잎이 크게 하나, 갈색 긴 네모가 작게 셋인지 세어 보세요.', '크게 초록 나뭇잎 하나를 붙이고, 그 위에 작게 갈색 긴 네모 셋을 붙여요.'] },
              { prompt: '가을 나뭇잎 줄을 만들어요. 주황 나뭇잎과 빨강 나뭇잎 한 묶음을 왼쪽에서 오른쪽으로 세 번 되풀이해 보세요.', target: { repeat: { times: 3, unit: 2 }, has: [{ shape: 'leaf', color: '주황', n: 3 }, { shape: 'leaf', color: '빨강', n: 3 }] }, difficulty: 0.2,
                levels: { easy: { prompt: '가을 나뭇잎 줄을 만들어요. 노랑 나뭇잎과 초록 나뭇잎 한 묶음을 왼쪽에서 오른쪽으로 세 번 되풀이해 보세요.', target: { repeat: { times: 3, unit: 2 }, has: [{ shape: 'leaf', color: '노랑', n: 3 }, { shape: 'leaf', color: '초록', n: 3 }] } } },
                hints: ['같은 묶음이 차례로 되풀이되게 놓아요. 두 색 나뭇잎 하나씩이 한 묶음이에요.', '왼쪽부터 색 차례를 읽어 보세요. 같은 차례가 세 번 이어지나요?', '왼쪽부터 두 색 나뭇잎을 번갈아 세 번씩, 모두 여섯 장 놓아요.'] },
              { prompt: '실제 나뭇잎을 종이 밑에 대고 크레파스를 눕혀 문질러 찍은 뒤, 떠오른 잎맥 선을 사인펜으로 따라 그려요. 다 했으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"문질러 찍으니 어떤 선이 나타났나요?" 모둠 작품을 서로 보여 준다. 쓴 나뭇잎은 화단에 돌려놓고 손을 씻는다. 다음 시간에는 종이띠 선을 이어 기억 속 장소를 꾸민다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '자연 속 선', slots: ['곧게 뻗은 선', '둥글게 휜 선'], cards: ['나이테', '갈대 줄기', '파도'] }, prompt: '자연 속 선을 곧게 뻗은 선과 둥글게 휜 선으로 나누어 보세요.', target: { sort: { '곧게 뻗은 선': ['갈대 줄기'], '둥글게 휜 선': ['나이테', '파도'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '나뭇잎 잎맥을 떠오르게 하는 방법은?', options: ['종이 밑에 대고 크레파스로 문질러요', '물에 담가요', '가위로 잘라요'], answer: 0, difficulty: 0.1, explain: '종이 밑에 대고 문지르면 잎맥 선이 떠올라요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '자연 속 선',
      items: [
        { type: 'table', prompt: '자연에서 찾은 선을 쓰세요.', columns: ['자연물', '어떤 선인가요'], rows: 3 },
        { type: 'choice', prompt: '나이테는 어떤 선인가요?', options: ['동그라미가 겹겹이', '나란한 곧은 선'], answer: '동그라미가 겹겹이' },
        { type: 'draw', prompt: '나뭇잎을 보고 잎맥 선을 따라 그리세요.' },
        { type: 'short', prompt: '자연 속 선을 보고 떠오른 기억을 쓰세요.' },
      ],
      easy: {
        note: '잎맥은 가지처럼, 나이테는 동그랗게.',
        items: [
          { type: 'choice', prompt: '나이테는?', options: ['둥글게 휜 선', '곧은 선'], answer: '둥글게 휜 선' },
          { type: 'choice', prompt: '대나무 줄기는?', options: ['곧은 선', '굽은 선'], answer: '곧은 선' },
          { type: 'draw', prompt: '나뭇잎을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '두 짝만 잇고, 판에 나뭇잎과 긴 네모만 있어요. 되풀이 띠는 노랑·초록으로 만들어요.',
      base: '세 짝을 잇고, 여러 모양 가운데 골라 붙여요.',
      challenge: '모든 모양과 색 가운데서 골라 잎과 잎맥, 되풀이 띠를 만들어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 나뭇잎에 굽은 선만 있다고 여긴다 → 잎맥을 손가락으로 따라가 곧게 뻗은 곳을 찾게 한다. ② 문질러 찍기에서 크레파스를 세워 문질러 잎이 찢어진다 → 크레파스 껍질을 벗기고 눕혀 살살 문지른다. ③ 살아 있는 나뭇가지를 꺾으려 한다 → 떨어진 잎만 줍는 약속을 먼저 한다. 나뭇잎이 없으면 교사가 미리 모아 둔 잎이나 종이 잎을 쓴다.',
  }));

  // ───────────────────────── 29~32차시: 선과 색으로 기억 나타내기(선·색·모양으로 표현하기) ─────────────────────────

  lessons.push(L(29, {
    title: '종이띠 선을 이어 기억 속 장소 꾸미기',
    objective: '종이띠를 곧게·굽게 이어 붙여 기억에 남는 장소(집·학교·놀이터)의 테두리와 길을 나타낼 수 있다.',
    illustration: ART('a paper collage of a remembered playground made of colorful paper strips: a straight slide, curved swings path and a square sandbox outline', '기억 속 장소', [
      { motif: 'sun', x: 410, y: 70 }, { motif: 'tree', x: 90, y: 214 }, { motif: 'flower', x: 400, y: 226, color: 'rose' }]),
    safety: ['가위를 쓸 때는 앉아서 쓰고, 건넬 때는 손잡이를 내밀어요.', '풀은 조금만 짜서 쓰고 뚜껑을 닫아요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"일 학년 때부터 가장 기억에 남는 곳은 어디인가요?" 집·학교 운동장·놀이터처럼 장소를 모은다. 교사가 종이띠로 미리 만든 놀이터를 보여 주며 미끄럼틀은 곧은 띠, 그네 길은 굽은 띠로 붙였다고 말한다. 시연 단추로 장소와 선이 이어지는 모습을 보여 준다.',
        student: '기억에 남는 장소 하나를 떠올려 짝에게 말해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '장소와 선', slots: [{ id: 's1', label: '미끄럼틀' }], cards: ['비스듬한 곧은 선', '동그란 선'], shuffle: false }, sequence: [{ match: { s1: '비스듬한 곧은 선' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 장소 속 선 떠올리기', minutes: 10, tool: 'mindmap',
            teacher: '"놀이터의 미끄럼틀은 어떤 선으로 나타낼까요?" 장소 속 물건과 선을 잇게 한다. 학생이 떠올린 장소를 칠판에 적고, 그 장소에서 볼 수 있는 선을 함께 찾아본다. 셋째 문항은 종이띠로 굽은 선을 만드는 방법을 고르는 것이다.',
            task: '기억 속 장소의 물건과 어울리는 선을 잇고, 종이띠로 선을 만드는 방법을 골라요.',
            levels: CARD_LV(),
            items: [
              { prompt: '놀이터 물건과 나타낼 선을 이어 보세요.', toolOptions: { mode: 'match', topic: '놀이터와 선', slots: [{ id: 's1', label: '미끄럼틀' }, { id: 's2', label: '그네가 흔들리는 길' }, { id: 's3', label: '모래밭 테두리' }], cards: ['비스듬한 곧은 선', '둥글게 휜 선', '네모난 곧은 선'] },
                target: { match: { s1: '비스듬한 곧은 선', s2: '둥글게 휜 선', s3: '네모난 곧은 선' } }, difficulty: 0.1,
                levels: { easy: { prompt: '놀이터 물건과 나타낼 선 두 짝을 이어 보세요.', toolOptions: { slots: [{ id: 's1', label: '미끄럼틀' }, { id: 's2', label: '그네가 흔들리는 길' }], cards: ['비스듬한 곧은 선', '둥글게 휜 선'] }, target: { match: { s1: '비스듬한 곧은 선', s2: '둥글게 휜 선' } } } } },
              { prompt: '학교 물건을 곧은 선으로 나타낼 것과 굽은 선으로 나타낼 것으로 나누어 보세요.', toolOptions: { topic: '학교와 선', slots: ['곧은 선', '굽은 선'], cards: ['교문', '운동장 달리기 트랙의 둥근 쪽', '복도', '둥근 시계'] },
                target: { sort: { '곧은 선': ['교문', '복도'], '굽은 선': ['운동장 달리기 트랙의 둥근 쪽', '둥근 시계'] } }, difficulty: 0.15 },
              { prompt: '종이띠로 굽은 선을 만드는 방법만 골라 보세요.', toolOptions: { mode: 'pick', basket: '굽은 띠 만들기', cards: ['연필에 말았다가 펴요', '양 끝만 붙이고 가운데를 부풀려요', '종이띠를 반듯하게 눌러 붙여요'] },
                target: { pick: ['연필에 말았다가 펴요', '양 끝만 붙이고 가운데를 부풀려요'] }, difficulty: 0.2,
                predict: { q: '종이띠를 연필에 말았다가 펴면 어떻게 될까요?', options: ['둥글게 휘어요', '더 곧아져요'], answer: 0 },
                conclude: '종이띠를 연필에 말거나 양 끝만 붙이면 굽은 선이 돼요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 종이띠로 장소 꾸미기', minutes: 16, tool: 'collage',
            teacher: '"판에서 집 모양을 먼저 만들어 보고, 실제 종이띠로 내 기억 속 장소를 꾸며요." 판에서 계획한 뒤 도화지에 종이띠를 붙인다. 셋째 문항은 정답이 없는 자유 작품이며, 점검표는 실제로 한 것만 표시한다.',
            task: '판에서 선 조각으로 장소를 꾸며 보고, 실제 종이띠로 기억 속 장소를 만들어요.',
            levels: {
              easy: { shapes: ['rect', 'triangle', 'square', 'semi'], colors: ['빨강', '파랑', '노랑', '갈색'] },
              base: { shapes: ['rect', 'triangle', 'square', 'semi', 'circle', 'star'], colors: ['빨강', '파랑', '노랑', '갈색', '초록', '분홍'] },
              challenge: {},
            },
            items: [
              { prompt: '기억 속 우리 집이에요. 크게 노랑 네모 위에 빨강 세모 지붕을 붙이고, 갈색 긴 네모 두 개로 집 앞길을 나타내 보세요.', target: { has: [{ shape: 'square', color: '노랑', size: 'l', n: 1 }, { shape: 'triangle', color: '빨강', n: 1 }, { shape: 'rect', color: '갈색', n: 2 }] }, difficulty: 0.15,
                hints: ['집은 네모와 세모, 길은 곧은 선(긴 네모)이에요.', '판에 있는 조각을 모양·색·크기별로 세어 보세요.', '크게 노랑 네모 하나, 빨강 세모 하나, 갈색 긴 네모 둘을 붙여요.'] },
              { prompt: '놀이터예요. 파랑 긴 네모 하나를 돌려 비스듬한 미끄럼틀을 만들고, 분홍 반원 두 개로 그네 길을 나타내 보세요.', target: { has: [{ shape: 'rect', color: '파랑', n: 1 }, { shape: 'semi', color: '분홍', n: 2 }] }, difficulty: 0.2,
                levels: { easy: { prompt: '놀이터예요. 파랑 긴 네모 하나로 미끄럼틀을, 노랑 반원 두 개로 그네 길을 나타내 보세요.', target: { has: [{ shape: 'rect', color: '파랑', n: 1 }, { shape: 'semi', color: '노랑', n: 2 }] } } },
                hints: ['미끄럼틀은 비스듬한 곧은 선, 그네 길은 굽은 선이에요.', '긴 네모와 반원의 색과 개수를 세어 보세요.', '파랑 긴 네모 하나를 붙여 돌리고, 반원 두 개를 그네 길로 붙여요.'] },
              { prompt: '내 기억 속 장소를 판에서 자유롭게 꾸미고, 실제 종이띠로 도화지에 만든 뒤 점검표에 표시하세요.', target: { selfCheck: ['곧은 선과 굽은 선을 모두 썼어요', '실제 종이띠로 도화지에 붙였어요', '짝에게 어떤 장소인지 말했어요'], minPieces: 4 }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"짝의 작품에서 어떤 장소가 보이나요?" 짝끼리 작품을 바꾸어 보고 장소를 맞혀 본다. 맞히지 못해도 괜찮고, 만든 사람이 설명해 준다. 남은 종이띠는 상자에 모은다. 다음 시간에는 색으로 모양을 또렷하게 드러내는 방법을 알아본다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '장소와 선', slots: [{ id: 'e1', label: '곧게 뻗은 복도' }, { id: 'e2', label: '둥근 분수대' }], cards: ['곧은 선', '굽은 선'] }, prompt: '장소와 나타낼 선을 이어 보세요.', target: { match: { e1: '곧은 선', e2: '굽은 선' } }, difficulty: 0.05 },
          { type: 'choice', prompt: '종이띠로 굽은 선을 만드는 방법은?', options: ['반듯하게 눌러 붙여요', '연필에 말았다가 펴요', '잘게 찢어요'], answer: 1, difficulty: 0.1, explain: '연필에 말았다가 펴면 둥글게 휘어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '기억 속 장소',
      items: [
        { type: 'short', prompt: '내가 꾸민 기억 속 장소는 어디인가요?' },
        { type: 'table', prompt: '장소 속 물건과 나타낸 선을 쓰세요.', columns: ['물건', '선'], rows: 3 },
        { type: 'choice', prompt: '미끄럼틀은 어떤 선으로 나타내면 좋을까요?', options: ['비스듬한 곧은 선', '동그란 선'], answer: '비스듬한 곧은 선' },
        { type: 'draw', prompt: '기억 속 장소를 선으로 그리세요.' },
      ],
      easy: {
        note: '곧은 띠와 굽은 띠를 함께 써요.',
        items: [
          { type: 'short', prompt: '기억 속 장소 이름을 쓰세요.' },
          { type: 'choice', prompt: '둥근 시계는?', options: ['굽은 선', '곧은 선'], answer: '굽은 선' },
          { type: 'draw', prompt: '기억 속 장소를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '두 짝만 잇고, 판에 꼭 필요한 모양과 색만 있어요.',
      base: '세 짝을 잇고, 여러 모양 가운데서 골라 장소를 꾸며요.',
      challenge: '모든 모양과 색 가운데서 골라, 분홍 반원으로 그네 길을 나타내요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 장소를 떠올리지 못한다 → 일 학년 입학식, 운동회처럼 함께 겪은 일을 먼저 이야기한다. ② 종이띠가 잘 붙지 않는다 → 풀을 띠 끝에만 바르고 손가락으로 10초 누른다. ③ 장소가 너무 커서 다 못 만든다 → 가장 기억에 남는 한 곳만 만들게 한다. 집 이야기는 가정 형편이 드러나지 않게 \'기억 속 장소\' 가운데 하나로만 고르게 한다.',
  }));

  lessons.push(L(30, {
    title: '색을 대비시켜 모양 또렷하게 드러내기',
    objective: '밝은 색과 어두운 색, 서로 반대되는 색을 맞붙이면 모양이 또렷해진다는 것을 알고, 대비되는 색으로 모양을 드러낼 수 있다.',
    illustration: ART('two paper panels side by side: a yellow star on a pale yellow background barely visible, and the same yellow star on a dark purple background shining clearly', '또렷한 색', [
      { motif: 'star', x: 110, y: 86, s: 0.6 }, { motif: 'moon', x: 400, y: 80 }, { motif: 'flower', x: 400, y: 226, color: 'lavender' }]),
    safety: ['가위를 쓸 때는 앉아서 쓰고, 건넬 때는 손잡이를 내밀어요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"노랑 별을 하양 종이에 붙일 때와 보라 종이에 붙일 때, 어느 쪽이 더 잘 보이나요?" 두 장을 칠판에 붙이고 교실 뒤에서 보게 한다. 밝은 색과 어두운 색이 만나면 모양이 또렷해진다고 짚는다. 시연 단추로 잘 보이는 짝과 잘 안 보이는 짝이 나뉘는 모습을 보여 준다.',
        student: '교실 뒤에서 두 별을 보고, 더 잘 보이는 쪽을 손으로 가리켜 봐요.',
        demo: { tool: 'mindmap', options: { topic: '색 짝', slots: ['잘 보여요', '잘 안 보여요'], cards: ['보라 바탕에 노랑 별', '하양 바탕에 노랑 별'], shuffle: false }, sequence: [{ sort: { '잘 보여요': ['보라 바탕에 노랑 별'], '잘 안 보여요': ['하양 바탕에 노랑 별'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 잘 보이는 색 짝 찾기', minutes: 12, tool: 'mindmap',
            teacher: '"모둠 색종이를 겹쳐 보며 잘 보이는 짝을 찾아요." 실제 색종이로 견주어 본 뒤 카드를 나눈다. 빨강과 초록, 노랑과 보라처럼 서로 반대되는 색 짝도 또렷하다는 것을 둘째 문항에서 짚는다. 색깔을 가리기 어려워하는 학생이 있으면 밝기 차이로 고르게 한다.',
            task: '실제 색종이를 겹쳐 견주어 보고, 모양이 잘 보이는 색 짝을 나누고 골라요.',
            levels: CARD_LV(),
            items: [
              { prompt: '색 짝을 모양이 잘 보여요와 잘 안 보여요로 나누어 보세요.', toolOptions: { topic: '색 짝', slots: ['잘 보여요', '잘 안 보여요'], cards: ['검정 바탕에 하양 동그라미', '노랑 바탕에 하양 동그라미', '보라 바탕에 노랑 별', '분홍 바탕에 하양 하트'] },
                target: { sort: { '잘 보여요': ['검정 바탕에 하양 동그라미', '보라 바탕에 노랑 별'], '잘 안 보여요': ['노랑 바탕에 하양 동그라미', '분홍 바탕에 하양 하트'] } }, difficulty: 0.15 },
              { prompt: '서로 반대되는 색 짝을 이어 보세요.', toolOptions: { mode: 'match', topic: '반대되는 색', slots: [{ id: 's1', label: '빨강' }, { id: 's2', label: '노랑' }, { id: 's3', label: '주황' }], cards: ['초록', '보라', '파랑'] },
                target: { match: { s1: '초록', s2: '보라', s3: '파랑' } }, difficulty: 0.2,
                predict: { q: '빨강 사과를 초록 잎 옆에 두면 어떻게 보일까요?', options: ['더 또렷해요', '잘 안 보여요'], answer: 0 },
                conclude: '빨강-초록, 노랑-보라, 주황-파랑처럼 반대되는 색을 맞붙이면 서로 더 또렷해 보여요.',
                levels: { easy: { prompt: '서로 반대되는 색 두 짝을 이어 보세요.', toolOptions: { slots: [{ id: 's1', label: '빨강' }, { id: 's2', label: '노랑' }], cards: ['초록', '보라'] }, target: { match: { s1: '초록', s2: '보라' } } } } },
              { prompt: '어두운 밤하늘 그림에서 별이 가장 잘 보이는 색만 골라 보세요.', toolOptions: { mode: 'pick', basket: '밤하늘 별 색', cards: ['노랑', '하양', '검정'] },
                target: { pick: ['노랑', '하양'] }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 대비되는 색으로 꾸미기', minutes: 14, tool: 'collage',
            teacher: '"판에 놓인 바탕 조각 위에 대비되는 색 조각을 겹쳐 붙여요." 판에서 해 본 뒤, 실제 어두운 색 도화지에 밝은 색종이로 기억에 남는 밤 장면(별·달·불꽃놀이)을 꾸민다. 색이 비슷해 잘 안 보이는 조각은 다른 색으로 바꾸어 보게 한다.',
            task: '판에서 밝은 색과 어두운 색, 반대되는 색을 맞붙여 모양을 드러내고, 실제 색종이로 밤 장면을 꾸며요.',
            levels: {
              easy: { shapes: ['star', 'circle', 'square'], colors: ['노랑', '하양', '보라', '검정', '초록', '빨강'] },
              base: { shapes: ['star', 'circle', 'square', 'heart', 'leaf'], colors: ['노랑', '하양', '보라', '검정', '초록', '빨강', '분홍'] },
              challenge: {},
            },
            items: [
              { prompt: '어두운 보라 네모 위에 밝은 노랑 별을 겹쳐 붙여 별이 또렷하게 보이게 해 보세요.', state: { pieces: [{ shape: 'square', color: '보라', size: 'l', x: 280, y: 200, r: 0 }] }, target: { contrast: 'light-dark', has: [{ shape: 'star', color: '노랑', n: 1 }, { shape: 'square', color: '보라', n: 1 }] }, difficulty: 0.15,
                hints: ['밝은 색과 어두운 색이 맞닿아야 또렷해요. 별을 바탕 조각 위로 옮겨 봐요.', '노랑 별이 보라 네모와 겹치거나 맞닿아 있는지 보세요.', '노랑 별 하나를 붙이고 보라 네모 한가운데로 끌어 옮겨요.'] },
              { prompt: '초록 잎 옆에 반대되는 색인 빨강 동그라미(열매)를 맞붙여 보세요.', state: { pieces: [{ shape: 'leaf', color: '초록', size: 'l', x: 240, y: 200, r: 0 }] }, target: { contrast: 'complement', has: [{ shape: 'circle', color: '빨강', n: 1 }, { shape: 'leaf', color: '초록', n: 1 }] }, difficulty: 0.2,
                levels: { easy: { prompt: '초록 잎 옆에 빨강 동그라미(열매)를 붙여 서로 맞닿게 해 보세요.' } },
                hints: ['반대되는 색은 맞닿아야 서로 또렷해 보여요. 열매를 잎 가까이 옮겨 봐요.', '빨강 동그라미가 초록 잎과 닿아 있는지 보세요.', '빨강 동그라미 하나를 붙이고 초록 잎에 닿도록 바로 옆으로 옮겨요.'] },
              { prompt: '실제 어두운 색 도화지에 밝은 색종이로 기억에 남는 밤 장면을 꾸며요. 다 했으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"교실 뒤에서 보아도 또렷한 작품은 어떤 색을 썼나요?" 작품을 칠판에 붙이고 멀리서 본다. 잘 보이는 까닭을 색 짝으로 말하게 한다. 다음 시간에는 선과 색을 함께 써서 기억에 남는 날을 그린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '색 짝', slots: ['잘 보여요', '잘 안 보여요'], cards: ['검정 바탕에 노랑 달', '하양 바탕에 노랑 달', '파랑 바탕에 주황 물고기'] }, prompt: '색 짝을 모양이 잘 보여요와 잘 안 보여요로 나누어 보세요.', target: { sort: { '잘 보여요': ['검정 바탕에 노랑 달', '파랑 바탕에 주황 물고기'], '잘 안 보여요': ['하양 바탕에 노랑 달'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '노랑과 반대되는 색은?', options: ['보라', '주황', '하양'], answer: 0, difficulty: 0.1, explain: '노랑과 보라는 서로 반대되는 색이라 맞붙이면 또렷해요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '또렷한 색 짝',
      items: [
        { type: 'table', prompt: '서로 반대되는 색을 쓰세요.', columns: ['색', '반대되는 색'], cells: [['빨강', ''], ['노랑', ''], ['주황', '']] },
        { type: 'choice', prompt: '하양 동그라미가 더 잘 보이는 바탕은?', options: ['검정', '노랑'], answer: '검정' },
        { type: 'draw', prompt: '어두운 바탕에 밝은 색으로 밤 장면을 그리세요.' },
        { type: 'short', prompt: '내 작품에서 가장 또렷한 곳과 그 까닭을 쓰세요.' },
      ],
      easy: {
        note: '밝은 색과 어두운 색을 맞붙여요.',
        items: [
          { type: 'choice', prompt: '노랑 별이 잘 보이는 바탕은?', options: ['보라', '하양'], answer: '보라' },
          { type: 'choice', prompt: '빨강과 반대되는 색은?', options: ['초록', '분홍'], answer: '초록' },
          { type: 'draw', prompt: '밤하늘 별을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '두 짝만 잇고, 판에 꼭 필요한 색만 있어요.',
      base: '세 짝을 잇고, 여러 색 가운데서 대비되는 색을 골라요.',
      challenge: '모든 색 가운데서 골라 반대되는 색을 맞붙여요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 좋아하는 색만 써서 모양이 잘 안 보인다 → 교실 뒤에서 작품을 보게 하고 무엇이 잘 보이는지 묻는다. ② 반대되는 색 짝을 외우기 어려워한다 → 색상환 그림을 붙여 두고 마주 보는 색을 찾게 한다. ③ 조각을 맞닿게 하지 않고 떨어뜨려 놓는다 → 판에서 조각을 겹치거나 붙여 놓아야 한다고 짚는다. 색을 가리기 어려운 학생은 밝기(밝다·어둡다)로 고르게 한다.',
  }));

  lessons.push(L(31, {
    title: '기억에 남는 날을 선과 색으로 그리기',
    objective: '기억에 남는 날의 마음에 어울리는 선과 색을 골라, 그날의 장면을 선과 색으로 나타낼 수 있다.',
    illustration: ART('a paper child painting a remembered sports day with bold zigzag lines and warm orange and yellow colors, a gentle rainy day picture with soft blue lines beside it', '기억에 남는 날', [
      { motif: 'sun', x: 410, y: 70 }, { motif: 'cloud', x: 120, y: 80, s: 0.7 }, { motif: 'flower', x: 110, y: 226, color: 'buttercup' }]),
    safety: ['크레파스와 사인펜은 다 쓰면 뚜껑을 닫고 상자에 넣어요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"이 학년이 되어 가장 기억에 남는 날은 언제인가요? 그날 마음은 어땠나요?" 운동회·현장 체험학습·생일처럼 날을 모으고 그날의 마음 낱말을 붙인다. 슬펐던 날이나 아팠던 날도 기억에 남는 날이 될 수 있다고 말한다. 시연 단추로 마음과 색이 이어지는 모습을 보여 준다.',
        student: '기억에 남는 날 하나와 그날 마음을 짝에게 한 문장으로 말해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '마음과 색', slots: [{ id: 's1', label: '신나는 마음' }], cards: ['밝은 주황', '어두운 회색'], shuffle: false }, sequence: [{ match: { s1: '밝은 주황' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 마음에 어울리는 선과 색', minutes: 10, tool: 'mindmap',
            teacher: '"신나는 날은 어떤 색으로 칠하고 싶나요?" 마음과 색, 마음과 선을 잇는다. 사람마다 고르는 색이 다를 수 있지만, 오늘 카드는 많은 사람이 떠올리는 짝으로 맞추어 본다고 말한다. 셋째 문항은 내 그림에 쓸 선과 색을 고르는 것이다.',
            task: '마음에 어울리는 색과 선을 잇고, 기억에 남는 날을 그릴 선과 색을 골라요.',
            levels: CARD_LV(),
            items: [
              { prompt: '마음과 어울리는 색을 이어 보세요.', toolOptions: { mode: 'match', topic: '마음과 색', slots: [{ id: 's1', label: '신나는 마음' }, { id: 's2', label: '차분한 마음' }, { id: 's3', label: '설레는 마음' }], cards: ['밝은 주황과 노랑', '연한 파랑과 초록', '분홍과 연보라'] },
                target: { match: { s1: '밝은 주황과 노랑', s2: '연한 파랑과 초록', s3: '분홍과 연보라' } }, difficulty: 0.15,
                levels: { easy: { prompt: '마음과 어울리는 색 두 짝을 이어 보세요.', toolOptions: { slots: [{ id: 's1', label: '신나는 마음' }, { id: 's2', label: '차분한 마음' }], cards: ['밝은 주황과 노랑', '연한 파랑과 초록'] }, target: { match: { s1: '밝은 주황과 노랑', s2: '연한 파랑과 초록' } } } } },
              { prompt: '마음과 어울리는 선을 이어 보세요.', toolOptions: { mode: 'match', topic: '마음과 선', slots: [{ id: 's1', label: '깜짝 놀란 마음' }, { id: 's2', label: '포근한 마음' }], cards: ['뾰족하게 튀는 선', '둥글게 감싸는 선'] },
                target: { match: { s1: '뾰족하게 튀는 선', s2: '둥글게 감싸는 선' } }, difficulty: 0.1,
                predict: { q: '포근한 날을 뾰족한 선으로만 그리면 어떤 느낌일까요?', options: ['포근해 보여요', '날카로워 보여요'], answer: 1 },
                conclude: '그날 마음에 어울리는 선과 색을 고르면, 보는 사람도 그 마음을 느낄 수 있어요.' },
              { prompt: '운동회 날 달리기를 그릴 때 어울리는 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '운동회 그림', cards: ['힘찬 지그재그 선', '밝은 주황색', '희미한 회색 점선', '바람 같은 물결선'] },
                target: { pick: ['힘찬 지그재그 선', '밝은 주황색', '바람 같은 물결선'] }, difficulty: 0.2,
                hints: ['달리기를 할 때 몸과 마음이 어떤지 떠올리고, 그 느낌과 같은 선과 색을 생각해요.', '희미하고 끊긴 선은 힘차게 달리는 느낌과 어울리는지 생각해 봐요.', '힘찬 지그재그 선, 밝은 주황색, 바람 같은 물결선이 달리기와 어울려요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 기억에 남는 날 그리기', minutes: 16, tool: 'collage',
            teacher: '"판에서 먼저 조각으로 장면을 계획하고, 실제 도화지에 크레파스로 그려요." 판의 첫 두 문항으로 선 조각과 색 조각을 고르는 연습을 한 뒤, 셋째 문항에서 자유롭게 계획한다. 점검표는 실제로 한 것만 표시한다. 슬픈 날을 그리는 학생도 존중하고, 원하지 않으면 발표하지 않아도 된다고 말한다.',
            task: '판에서 기억에 남는 날을 선과 색 조각으로 계획하고, 실제 도화지에 그려요.',
            levels: {
              easy: { shapes: ['rect', 'semi', 'circle', 'star'], colors: ['주황', '노랑', '파랑', '초록'] },
              base: { shapes: ['rect', 'semi', 'circle', 'star', 'heart', 'triangle'], colors: ['주황', '노랑', '파랑', '초록', '분홍', '보라'] },
              challenge: {},
            },
            items: [
              { prompt: '신나는 운동회 날이에요. 주황 긴 네모(힘찬 선) 세 개와 크게 노랑 동그라미(해) 하나를 붙여 보세요.', target: { has: [{ shape: 'rect', color: '주황', n: 3 }, { shape: 'circle', color: '노랑', size: 'l', n: 1 }] }, difficulty: 0.15,
                hints: ['신나는 날은 따뜻하고 밝은 색, 힘찬 곧은 선으로 나타내요.', '주황 긴 네모와 노랑 동그라미의 개수와 크기를 세어 보세요.', '주황 긴 네모 셋, 크게 노랑 동그라미 하나를 붙여요.'] },
              { prompt: '비 오던 차분한 날이에요. 파랑 반원(물결선) 두 개와 초록 긴 네모(빗줄기) 세 개를 붙여 보세요.', target: { has: [{ shape: 'semi', color: '파랑', n: 2 }, { shape: 'rect', color: '초록', n: 3 }] }, difficulty: 0.15,
                hints: ['차분한 날은 차가운 색, 부드러운 선과 가는 선으로 나타내요.', '파랑 반원과 초록 긴 네모의 개수를 세어 보세요.', '파랑 반원 둘, 초록 긴 네모 셋을 붙여요.'] },
              { prompt: '내 기억에 남는 날을 판에서 계획하고 실제 도화지에 그린 뒤, 점검표에 표시하세요.', target: { selfCheck: ['그날 마음에 어울리는 색을 골랐어요', '그날 마음에 어울리는 선을 골랐어요', '실제 도화지에 그렸어요'], minPieces: 3 }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"내 그림을 보고 그날 마음을 맞혀 볼 친구?" 원하는 학생이 그림을 보여 주고, 친구들이 마음을 짐작해 본다. 맞히지 못해도 만든 사람이 설명하면 된다. 그림은 다음 시간 기억 책 표지 꾸미기에 함께 쓴다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '마음과 색', slots: [{ id: 'e1', label: '신나는 마음' }, { id: 'e2', label: '차분한 마음' }], cards: ['밝은 주황', '연한 파랑'] }, prompt: '마음과 어울리는 색을 이어 보세요.', target: { match: { e1: '밝은 주황', e2: '연한 파랑' } }, difficulty: 0.05 },
          { type: 'short', prompt: '내가 그린 날과 그날 마음을 쓰세요.', difficulty: 0.1 },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '기억에 남는 날',
      items: [
        { type: 'short', prompt: '기억에 남는 날은 언제인가요?' },
        { type: 'table', prompt: '그날을 그릴 때 쓴 것을 쓰세요.', columns: ['마음', '색', '선'], rows: 1 },
        { type: 'choice', prompt: '포근한 마음과 어울리는 선은?', options: ['둥글게 감싸는 선', '뾰족하게 튀는 선'], answer: '둥글게 감싸는 선' },
        { type: 'draw', prompt: '기억에 남는 날을 선과 색으로 그리세요.' },
      ],
      easy: {
        note: '그날 마음에 맞는 색과 선을 골라요.',
        items: [
          { type: 'short', prompt: '기억에 남는 날을 쓰세요.' },
          { type: 'choice', prompt: '신나는 날 색은?', options: ['밝은 주황', '어두운 회색'], answer: '밝은 주황' },
          { type: 'draw', prompt: '그날을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '두 짝만 잇고, 판에 꼭 필요한 모양과 색만 있어요.',
      base: '세 짝을 잇고, 여러 모양과 색 가운데서 골라요.',
      challenge: '모든 모양과 색 가운데서 골라 장면을 계획해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 마음마다 정해진 색이 하나뿐이라고 여긴다 → 같은 신나는 날도 사람마다 다른 색을 고를 수 있다고 인정한다. ② 기억에 남는 날을 떠올리지 못한다 → 학급 사진첩(학생 얼굴이 크게 드러나지 않는 사진)이나 지난 활동을 함께 떠올린다. ③ 슬픈 일을 그린 학생이 놀림을 받는다 → 모든 기억이 소중하다고 말하고, 발표는 원하는 학생만 한다. 가족·형편이 드러나는 기억은 억지로 말하게 하지 않는다.',
  }));

  lessons.push(L(32, {
    title: '되풀이 무늬 띠로 기억 책 표지 꾸미기',
    objective: '같은 선과 모양 묶음을 되풀이하거나 양쪽을 똑같이 놓아, 기억 책 표지의 무늬 띠를 꾸밀 수 있다.',
    illustration: ART('a paper memory book cover with a repeating border of stars and wavy strips along the top and bottom, symmetric hearts on both sides of the title', '기억 책 표지', [
      { motif: 'star', x: 110, y: 80, s: 0.6 }, { motif: 'heart', x: 400, y: 86, s: 0.6 }, { motif: 'flower', x: 400, y: 226, color: 'rose' }]),
    safety: ['가위를 쓸 때는 앉아서 쓰고, 건넬 때는 손잡이를 내밀어요.', '풀은 조금만 짜서 쓰고 뚜껑을 닫아요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"우리 반 기억 책을 만들어요. 표지 테두리를 어떻게 꾸밀까요?" 교사가 별-물결-별-물결 차례로 붙인 무늬 띠를 보여 준다. "다음에 올 조각은 무엇일까요?" 하고 묻는다. 같은 묶음이 되풀이되면 무늬가 된다고 짚는다. 시연 단추로 되풀이 차례가 놓이는 모습을 보여 준다.',
        student: '선생님 무늬 띠를 보고, 다음에 올 조각을 맞혀 말해 봐요.',
        demo: { tool: 'story', options: { cards: [{ id: 'd1', text: '노랑 별', motif: 'star' }, { id: 'd2', text: '파랑 물결', motif: 'cloud' }, { id: 'd3', text: '노랑 별', motif: 'star' }], slots: 3, shuffle: false }, sequence: [{ order: ['d1', 'd2', 'd3'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 되풀이 무늬 띠 만들기', minutes: 13, tool: 'collage',
            teacher: '"묶음을 정하고 왼쪽부터 차례로 되풀이해요." 판에서 묶음을 되풀이한 뒤 실제 색종이로 표지 위·아래 띠를 붙인다. 차례가 섞인 학생에게 묶음을 소리 내어 읽으며 놓게 한다.',
            task: '판에서 같은 묶음을 되풀이해 무늬 띠를 만들고, 실제 색종이로 표지 띠를 붙여요.',
            levels: {
              easy: { shapes: ['star', 'semi', 'heart'], colors: ['노랑', '파랑', '분홍'] },
              base: { shapes: ['star', 'semi', 'heart', 'circle', 'rect'], colors: ['노랑', '파랑', '분홍', '초록', '주황'] },
              challenge: {},
            },
            items: [
              { prompt: '노랑 별과 파랑 반원(물결) 한 묶음을 왼쪽에서 오른쪽으로 세 번 되풀이해 보세요.', target: { repeat: { times: 3, unit: 2 }, has: [{ shape: 'star', color: '노랑', n: 3 }, { shape: 'semi', color: '파랑', n: 3 }] }, difficulty: 0.15,
                hints: ['같은 묶음이 차례로 이어지면 무늬가 돼요. 별 하나, 물결 하나가 한 묶음이에요.', '왼쪽부터 조각 차례를 읽어 보세요. 별-물결 차례가 세 번 이어지나요?', '왼쪽부터 노랑 별, 파랑 반원을 번갈아 세 번씩 놓아요.'] },
              { prompt: '분홍 하트 두 개와 노랑 별 하나를 한 묶음으로 해서 왼쪽에서 오른쪽으로 두 번 되풀이해 보세요.', target: { repeat: { times: 2, unit: 3 }, has: [{ shape: 'heart', color: '분홍', n: 4 }, { shape: 'star', color: '노랑', n: 2 }] }, difficulty: 0.25,
                levels: { easy: { prompt: '분홍 하트와 노랑 별 한 묶음을 왼쪽에서 오른쪽으로 세 번 되풀이해 보세요.', target: { repeat: { times: 3, unit: 2 }, has: [{ shape: 'heart', color: '분홍', n: 3 }, { shape: 'star', color: '노랑', n: 3 }] } } },
                hints: ['묶음 안의 조각 수와 차례를 먼저 정해요. 하트-하트-별이 한 묶음이에요.', '왼쪽부터 읽어 보세요. 하트, 하트, 별 차례가 두 번 이어지나요?', '왼쪽부터 분홍 하트, 분홍 하트, 노랑 별을 놓고, 그 차례를 한 번 더 놓아요.'] },
              { prompt: '실제 색종이로 기억 책 표지의 위와 아래에 되풀이 무늬 띠를 붙여요. 다 했으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 양쪽이 똑같은 표지 꾸미기', minutes: 13, tool: 'collage',
            teacher: '"표지 가운데 제목을 두고, 왼쪽과 오른쪽을 똑같이 꾸며요." 가운데 접는 선을 기준으로 거울처럼 같은 자리에 같은 조각을 놓는다. 실제 표지는 종이를 반으로 접었다 펴서 접힌 선을 기준으로 붙인다.',
            task: '판에서 가운데 접는 선 양쪽을 똑같이 꾸미고, 실제 표지도 양쪽을 맞추어 꾸며요.',
            levels: {
              easy: { shapes: ['heart', 'star', 'circle'], colors: ['분홍', '노랑', '초록'] },
              base: { shapes: ['heart', 'star', 'circle', 'leaf', 'rect'], colors: ['분홍', '노랑', '초록', '파랑', '보라'] },
              challenge: {},
            },
            items: [
              { prompt: '왼쪽에 분홍 하트가 있어요. 세로 접는 선 오른쪽 같은 자리에 똑같은 하트를 붙여 보세요.', state: { pieces: [{ shape: 'heart', color: '분홍', size: 'm', x: 200, y: 200, r: 0 }] }, target: { symmetry: 'vertical', has: [{ shape: 'heart', color: '분홍', n: 2 }] }, difficulty: 0.1,
                hints: ['접는 선에서 왼쪽 조각까지의 거리만큼 오른쪽에도 떨어뜨려 놓아요.', '두 하트가 접는 선에서 같은 거리, 같은 높이에 있는지 보세요.', '분홍 하트를 하나 더 붙여 접는 선 오른쪽, 왼쪽 하트와 마주 보는 자리로 옮겨요.'] },
              { prompt: '세로 접는 선 양쪽이 똑같게, 노랑 별 두 개와 초록 동그라미 두 개로 표지를 꾸며 보세요.', target: { symmetry: 'vertical', has: [{ shape: 'star', color: '노랑', n: 2 }, { shape: 'circle', color: '초록', n: 2 }] }, difficulty: 0.25,
                hints: ['한쪽에 붙인 조각마다 반대쪽 같은 자리에 짝을 놓아요.', '별 두 개, 동그라미 두 개가 각각 접는 선을 사이에 두고 마주 보는지 보세요.', '왼쪽에 별과 동그라미를 하나씩 놓고, 오른쪽 마주 보는 자리에 같은 조각을 하나씩 놓아요.'] },
              { prompt: '실제 표지를 반으로 접었다 펴고, 접힌 선 양쪽을 똑같이 꾸며 제목을 써요. 다 했으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"되풀이 무늬와 양쪽이 같은 무늬 가운데 어느 쪽을 더 많이 썼나요?" 표지를 들어 보여 준다. 기억 책 안에는 지난 시간 그린 그림을 넣는다. 다음 시간에는 내 그림에서 마음에 드는 선을 찾아본다.',
        exitTicket: [
          { type: 'tool', tool: 'collage', options: { shapes: ['star', 'circle'], colors: ['노랑', '파랑'] }, prompt: '노랑 별과 파랑 동그라미 한 묶음을 왼쪽에서 오른쪽으로 두 번 되풀이해 보세요.', target: { repeat: { times: 2, unit: 2 }, has: [{ shape: 'star', color: '노랑', n: 2 }, { shape: 'circle', color: '파랑', n: 2 }] }, difficulty: 0.15 },
          { type: 'choice', prompt: '되풀이 무늬를 만드는 방법은?', options: ['같은 묶음을 차례로 이어요', '아무 조각이나 붙여요', '한 조각만 크게 붙여요'], answer: 0, difficulty: 0.05, explain: '같은 묶음이 차례로 이어지면 무늬가 돼요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '기억 책 표지',
      items: [
        { type: 'blank', prompt: '무늬 차례에서 빈칸에 올 것을 쓰세요.', text: '별 - 물결 - 별 - 물결 - ___', answer: '별' },
        { type: 'choice', prompt: '양쪽이 똑같은 무늬를 만들 때 기준이 되는 것은?', options: ['가운데 접는 선', '종이 모서리'], answer: '가운데 접는 선' },
        { type: 'draw', prompt: '되풀이 무늬 띠를 그리세요.' },
        { type: 'short', prompt: '내 표지 무늬의 묶음은 무엇인지 쓰세요.' },
      ],
      easy: {
        note: '같은 묶음을 차례로 되풀이해요.',
        items: [
          { type: 'blank', prompt: '빈칸에 올 것을 쓰세요.', text: '하트 - 별 - 하트 - ___', answer: '별' },
          { type: 'choice', prompt: '양쪽이 같은 무늬는 무엇을 기준으로?', options: ['접는 선', '모서리'], answer: '접는 선' },
          { type: 'draw', prompt: '무늬 띠를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '판에 꼭 필요한 모양과 색만 있고, 두 조각 묶음을 세 번 되풀이해요.',
      base: '세 조각 묶음을 두 번 되풀이하고, 네 조각으로 양쪽이 같은 표지를 꾸며요.',
      challenge: '모든 모양과 색 가운데서 골라 꾸며요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 묶음 차례가 중간에 바뀐다 → 묶음을 소리 내어 읽으며 놓게 한다. ② 양쪽을 같게 할 때 높이가 어긋난다 → 접는 선에서 손가락 몇 마디인지 재어 놓게 한다. ③ 하트를 돌린 채 붙여 짝이 맞지 않는다 → 돌리지 않은 하트로 먼저 해 본다. 기억 책은 학년 말에 집으로 보낸다.',
  }));

  // ───────────────────────── 33~36차시: 내 그림과 친구 그림 돌아보기(선·색·모양 표현 돌아보기) ─────────────────────────

  lessons.push(L(33, {
    title: '내 그림에서 마음에 드는 선 찾기',
    objective: '내 그림에서 마음에 드는 선과 그 까닭을 찾아 말하고, 곧은 선만 잘 그린 선이 아니라는 것을 안다.',
    illustration: ART('a paper child holding up a drawing and pointing at a favorite wavy line with a magnifying glass, little star stickers next to different kinds of lines', '마음에 드는 선', [
      { motif: 'star', x: 110, y: 80, s: 0.6 }, { motif: 'leaf', x: 110, y: 226 }, { motif: 'tree', x: 400, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"자로 그은 곧은 선만 잘 그린 선일까요?" 자로 그은 선과 손으로 휘어 그린 물결선을 보여 준다. 학생 의견을 들은 뒤, 그리려는 것에 어울리는 선이 잘 그린 선이라고 짚는다. 시연 단추로 마음에 드는 까닭이 나뉘는 모습을 보여 준다.',
        student: '자로 그은 선과 물결선 가운데 어느 쪽이 더 마음에 드는지 손을 들어 봐요.',
        demo: { tool: 'mindmap', options: { topic: '마음에 드는 까닭', slots: ['선 때문에', '색 때문에'], cards: ['물결선이 부드러워요', '노랑이 밝아요'], shuffle: false }, sequence: [{ sort: { '선 때문에': ['물결선이 부드러워요'], '색 때문에': ['노랑이 밝아요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 잘 그린 선 생각하기', minutes: 13, tool: 'mindmap',
            teacher: '"카드를 읽고 맞는 생각과 고칠 생각으로 나누어요." 곧은 선만 잘 그린 선이라는 생각을 고칠 생각으로 나누는 까닭을 말하게 한다. 내 그림을 책상 위에 펴 놓고 마음에 드는 선에 별 붙임딱지를 붙인다.',
            task: '선에 대한 생각을 맞는 생각과 고칠 생각으로 나누고, 내 그림에서 마음에 드는 선을 찾아요.',
            levels: CARD_LV(),
            items: [
              { prompt: '선에 대한 생각을 맞는 생각과 고칠 생각으로 나누어 보세요.', toolOptions: { topic: '선에 대한 생각', slots: ['맞는 생각', '고칠 생각'], cards: ['그리려는 것에 어울리는 선이 좋아요', '곧은 선만 잘 그린 선이에요', '흔들린 선도 느낌을 줄 수 있어요', '굵은 선은 언제나 더 좋아요'] },
                target: { sort: { '맞는 생각': ['그리려는 것에 어울리는 선이 좋아요', '흔들린 선도 느낌을 줄 수 있어요'], '고칠 생각': ['곧은 선만 잘 그린 선이에요', '굵은 선은 언제나 더 좋아요'] } }, difficulty: 0.2,
                predict: { q: '바람에 흔들리는 풀을 자로 그은 곧은 선으로 그리면 어떨까요?', options: ['흔들리는 느낌이 잘 나요', '흔들리는 느낌이 덜 나요'], answer: 1 },
                conclude: '그리려는 것과 마음에 어울리는 선이 잘 그린 선이에요. 곧은 선만 좋은 선은 아니에요.' },
              { prompt: '마음에 드는 까닭을 선 때문에와 색 때문에로 나누어 보세요.', toolOptions: { topic: '마음에 드는 까닭', slots: ['선 때문에', '색 때문에'], cards: ['지그재그 선이 힘차요', '파랑이 시원해요', '굵은 선이 또렷해요', '주황이 따뜻해요'] },
                target: { sort: { '선 때문에': ['지그재그 선이 힘차요', '굵은 선이 또렷해요'], '색 때문에': ['파랑이 시원해요', '주황이 따뜻해요'] } }, difficulty: 0.15 },
              { prompt: '내 그림에서 마음에 드는 선 두 곳에 별 붙임딱지를 붙이고, 짝에게 까닭을 말해요. 다 했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 내 그림 마음 돌아보기', minutes: 13, tool: 'emotion',
            teacher: '"내 그림을 다시 보니 어떤 마음이 드나요?" 마음 카드를 상황에 맞게 놓는다. 셋째 문항은 내 마음 크기를 고르는 것으로, 어느 크기를 골라도 맞다. 내 그림이 마음에 들지 않는다는 학생에게도 마음에 드는 선 하나는 꼭 찾아 주게 한다.',
            task: '그림을 돌아볼 때의 마음을 상황에 맞게 놓고, 내 그림을 볼 때의 마음 크기를 골라요.',
            levels: EMO_LV(),
            items: [
              { prompt: '상황과 어울리는 마음을 이어 보세요.', toolOptions: { cards: ['뿌듯함', '아쉬움', '기쁨'], slots: [{ id: 's1', label: '처음 그어 본 물결선이 마음에 들어요' }, { id: 's2', label: '색칠하다 선 밖으로 나갔어요' }, { id: 's3', label: '짝이 내 선을 칭찬해 주었어요' }] },
                target: { match: { s1: '뿌듯함', s2: '아쉬움', s3: '기쁨' } }, difficulty: 0.15,
                levels: { easy: { prompt: '상황과 어울리는 마음 두 짝을 이어 보세요.', toolOptions: { cards: ['뿌듯함', '아쉬움'], slots: [{ id: 's1', label: '처음 그어 본 물결선이 마음에 들어요' }, { id: 's2', label: '색칠하다 선 밖으로 나갔어요' }] }, target: { match: { s1: '뿌듯함', s2: '아쉬움' } } } } },
              { prompt: '아쉬운 마음이 들 때 할 수 있는 말만 골라 보세요.', toolOptions: { mode: 'pick', basket: '나에게 하는 말', cards: ['다음에는 천천히 그려 볼래', '이 선은 마음에 들어', '나는 그림을 못 그려'] },
                target: { pick: ['다음에는 천천히 그려 볼래', '이 선은 마음에 들어'] }, difficulty: 0.1 },
              { prompt: '내 그림을 다시 볼 때 뿌듯한 마음의 크기를 골라 보세요. 어느 크기든 괜찮아요.', toolOptions: { mode: 'scale', who: '나', situation: '내가 그린 기억에 남는 날 그림을 다시 보았어요.', feeling: '뿌듯함' }, target: { level: 'any' }, difficulty: 0.05 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"내 그림에서 가장 마음에 드는 선과 그 까닭을 말해 볼까요?" 원하는 학생 서너 명이 말한다. 다음 시간에는 친구 그림을 감상하며 처음 본 선을 찾는다. 그림은 기억 책에 넣는다.',
        exitTicket: [
          { type: 'choice', prompt: '잘 그린 선에 대한 생각으로 알맞은 것은?', options: ['곧은 선만 잘 그린 선이에요', '그리려는 것에 어울리는 선이 좋아요', '굵은 선만 좋아요'], answer: 1, difficulty: 0.1, explain: '그리려는 것과 마음에 어울리는 선이 잘 그린 선이에요.' },
          { type: 'short', prompt: '내 그림에서 마음에 드는 선과 그 까닭을 쓰세요.', difficulty: 0.1 },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '마음에 드는 선',
      items: [
        { type: 'check', prompt: '맞는 생각에 ✓ 하세요.', options: ['그리려는 것에 어울리는 선이 좋아요', '흔들린 선도 느낌을 줄 수 있어요', '물결선도 잘 그린 선이 될 수 있어요'] },
        { type: 'short', prompt: '내 그림에서 마음에 드는 선은 어디인가요?' },
        { type: 'short', prompt: '그 선이 마음에 드는 까닭을 쓰세요.' },
        { type: 'draw', prompt: '마음에 드는 선을 다시 한 번 그려 보세요.' },
      ],
      easy: {
        note: '어울리는 선이 잘 그린 선이에요.',
        items: [
          { type: 'choice', prompt: '곧은 선만 잘 그린 선일까요?', options: ['아니요', '네'], answer: '아니요' },
          { type: 'short', prompt: '마음에 드는 선을 쓰세요.' },
          { type: 'draw', prompt: '마음에 드는 선을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '마음 잇기가 두 짝이고, 맞는 칸에 초록 테두리가 생겨요. 마음 눈금은 세 칸이에요.',
      base: '세 짝을 잇고 다섯 칸 눈금에서 마음 크기를 골라요.',
      challenge: '생각 카드를 나눈 까닭을 짝에게 말로 설명해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 곧은 선만 잘 그린 선이라고 여긴다 → 흔들리는 풀·파도처럼 곧은 선으로는 나타내기 어려운 것을 그려 보게 한다. ② 내 그림이 다 마음에 안 든다고 한다 → 붙임딱지 하나라도 붙일 선을 함께 찾아 준다. ③ 뿌듯함 크기가 작다고 속상해한다 → 어느 크기든 내 마음이고 맞다고 말한다.',
  }));

  lessons.push(L(34, {
    title: '친구 그림 감상하며 처음 본 선 말하기',
    objective: '친구 그림에서 처음 본 선이나 색을 찾아 존중하는 말로 이야기하고, 친구의 말을 들은 마음을 나눌 수 있다.',
    illustration: ART('paper children walking slowly along a wall of classroom drawings, one pointing at an interesting spiral line and saying something kind, hearts floating', '친구 그림 감상', [
      { motif: 'heart', x: 120, y: 86, s: 0.6 }, { motif: 'star', x: 380, y: 80, s: 0.5 }, { motif: 'flower', x: 400, y: 226, color: 'sky' }]),
    safety: ['감상할 때는 걸어서 다니고, 그림을 손으로 만지지 않아요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"친구 그림을 볼 때 어떤 말을 들으면 기분이 좋을까요?" 두세 가지 말을 모은다. 그림을 손으로 만지지 않고 걸어서 감상한다는 약속을 한다. 시연 단추로 존중하는 말이 골라지는 모습을 보여 준다.',
        student: '친구에게 그림 칭찬을 들으면 어떤 기분일지 말해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'pick', basket: '존중하는 말', cards: ['이 선이 재미있어', '이상하게 그렸네'], shuffle: false }, sequence: [{ pick: ['이 선이 재미있어'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 존중하는 감상 말 고르기', minutes: 12, tool: 'mindmap',
            teacher: '"감상 말에는 무엇이 좋은지와 그 까닭이 들어가면 좋아요." 카드를 고른 뒤 교실 벽에 붙인 그림을 걸어 다니며 감상한다. 친구 그림에서 처음 본 선 하나를 찾아 붙임쪽지에 존중하는 말로 써서 붙인다.',
            task: '존중하는 감상 말을 고르고, 친구 그림을 감상하며 처음 본 선을 찾아 붙임쪽지에 써요.',
            levels: CARD_LV(),
            items: [
              { prompt: '감상할 때 존중하는 말만 골라 보세요.', toolOptions: { mode: 'pick', basket: '존중하는 말', cards: ['소용돌이 선이 처음 보는 선이야', '이 색이 따뜻해 보여', '내 그림이 더 잘 그렸어', '이게 뭐야, 이상해'] },
                target: { pick: ['소용돌이 선이 처음 보는 선이야', '이 색이 따뜻해 보여'] }, difficulty: 0.1 },
              { prompt: '감상 말을 까닭이 있는 말과 까닭이 없는 말로 나누어 보세요.', toolOptions: { topic: '감상 말', slots: ['까닭이 있어요', '까닭이 없어요'], cards: ['물결선이 바다처럼 보여서 좋아', '그냥 좋아', '굵은 선이 힘차 보여서 멋져', '예뻐'] },
                target: { sort: { '까닭이 있어요': ['물결선이 바다처럼 보여서 좋아', '굵은 선이 힘차 보여서 멋져'], '까닭이 없어요': ['그냥 좋아', '예뻐'] } }, difficulty: 0.2,
                predict: { q: '까닭을 넣어 말하면 친구는 어떻게 느낄까요?', options: ['내 그림을 잘 봐 주었구나', '아무 느낌이 없어요'], answer: 0 },
                conclude: '"무엇이, 왜" 좋은지 말하면 친구는 내 그림을 자세히 봐 주었다고 느껴요.' },
              { prompt: '교실을 걸어 다니며 친구 그림 두 점에서 처음 본 선을 찾아, 까닭을 넣은 말로 붙임쪽지에 써서 붙여요. 다 했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 감상 말을 들은 마음', minutes: 15, tool: 'emotion',
            teacher: '"내 그림에 붙은 붙임쪽지를 읽어 보세요. 어떤 마음이 드나요?" 마음 카드를 놓고 말에 따라 마음이 달라진다는 것을 짚는다. 셋째 문항에서는 친구가 내 그림을 보고 웃었을 때 어떻게 할지 골라 결과를 본다.',
            task: '감상 말을 들은 마음을 잇고, 친구 말에 어떻게 할지 골라 그 결과를 봐요.',
            levels: EMO_LV(),
            items: [
              { prompt: '친구의 말과 그 말을 들은 마음을 이어 보세요.', toolOptions: { cards: ['뿌듯함', '속상함', '고마움'], slots: [{ id: 's1', label: '"네 선이 정말 힘차 보여!"' }, { id: 's2', label: '"이게 뭐야, 이상해."' }, { id: 's3', label: '"내 쪽지에 답장 써 줘서 좋아."' }] },
                target: { match: { s1: '뿌듯함', s2: '속상함', s3: '고마움' } }, difficulty: 0.15,
                levels: { easy: { prompt: '친구의 말과 그 말을 들은 마음 두 짝을 이어 보세요.', toolOptions: { cards: ['뿌듯함', '속상함'], slots: [{ id: 's1', label: '"네 선이 정말 힘차 보여!"' }, { id: 's2', label: '"이게 뭐야, 이상해."' }] }, target: { match: { s1: '뿌듯함', s2: '속상함' } } } } },
              { prompt: '감상 말을 들은 마음을 기분 좋은 마음과 기분 나쁜 마음으로 나누어 보세요.', toolOptions: { mode: 'sort', cards: ['"색이 따뜻해"를 들은 마음', '"못 그렸네"를 들은 마음', '"이 선 처음 봐"를 들은 마음'], slots: ['기분 좋은 마음', '기분 나쁜 마음'] },
                target: { sort: { '기분 좋은 마음': ['"색이 따뜻해"를 들은 마음', '"이 선 처음 봐"를 들은 마음'], '기분 나쁜 마음': ['"못 그렸네"를 들은 마음'] } }, difficulty: 0.1 },
              { prompt: '지우가 내 그림을 보고 웃었어요. 어떻게 하면 좋을지 골라 보세요.', toolOptions: { mode: 'branch', who: '지우', situation: '지우가 내 소용돌이 선 그림을 보고 크게 웃었어요.', choices: [{ id: 'c1', text: '"왜 웃었는지 말해 줄래?" 하고 물어요', result: '지우가 "선이 재미있어서 웃었어" 하고 말해 줬어요.', mood: '기쁨' }, { id: 'c2', text: '그림을 구겨 버려요', result: '애써 그린 그림이 망가져 속상해졌어요.', mood: '속상함', why: '그림을 망가뜨리면 내 마음이 더 속상해져요. 먼저 까닭을 물어봐요.' }, { id: 'c3', text: '지우에게 화를 내요', result: '지우와 다투게 되었어요.', mood: '화남', why: '까닭을 모른 채 화를 내면 다툼이 생겨요.' }] },
                target: { choice: 'c1' }, difficulty: 0.15 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"친구에게 받은 쪽지 가운데 가장 기분 좋았던 말을 읽어 볼까요?" 원하는 학생이 읽는다. 쪽지를 써 준 친구에게 고맙다고 말한다. 다음 시간에는 친구 말과 내가 찾은 고칠 점을 바탕으로 작품을 고쳐 꾸민다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', basket: '존중하는 말', cards: ['선이 바람처럼 보여서 좋아', '별로야', '색이 시원해 보여'] }, prompt: '친구 그림을 감상할 때 존중하는 말만 골라 보세요.', target: { pick: ['선이 바람처럼 보여서 좋아', '색이 시원해 보여'] }, difficulty: 0.05 },
          { type: 'short', prompt: '친구 그림에서 처음 본 선과 좋았던 까닭을 쓰세요.', difficulty: 0.1 },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '친구 그림 감상',
      items: [
        { type: 'table', prompt: '친구 그림에서 처음 본 선을 쓰세요.', columns: ['친구', '처음 본 선', '좋았던 까닭'], rows: 2 },
        { type: 'check', prompt: '존중하는 감상 말에 ✓ 하세요.', options: ['물결선이 바다 같아', '색이 따뜻해 보여', '굵은 선이 힘차 보여'] },
        { type: 'short', prompt: '내 그림에 받은 말 가운데 기분 좋았던 말을 쓰세요.' },
        { type: 'short', prompt: '그 말을 들은 마음을 쓰세요.' },
      ],
      easy: {
        note: '무엇이, 왜 좋은지 말해요.',
        items: [
          { type: 'choice', prompt: '존중하는 말은?', options: ['이 선이 재미있어', '이상해'], answer: '이 선이 재미있어' },
          { type: 'short', prompt: '친구 그림에서 좋았던 점을 쓰세요.' },
          { type: 'draw', prompt: '친구 그림에서 처음 본 선을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '마음 잇기가 두 짝이고, 맞는 칸에 초록 테두리가 생겨요.',
      base: '세 짝을 잇고, 까닭이 있는 말을 골라 나누어요.',
      challenge: '붙임쪽지에 무엇이, 왜 좋은지 두 가지 넘게 넣어 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 감상 말이 \'예뻐\'에서 멈춘다 → \'무엇이 + 왜\' 틀을 칠판에 적어 둔다. ② 친구 그림과 견주어 순위를 매긴다 → 오늘은 좋았던 점만 말하기로 약속한다. ③ 쪽지를 받지 못한 학생이 생긴다 → 교사가 한 장씩 꼭 써 붙인다.',
  }));

  lessons.push(L(35, {
    title: '고칠 점 살려 선 작품 다시 꾸미기',
    objective: '잘못 놓인 조각을 찾아 양쪽이 같게 고치고, 내가 고를 고칠 점 하나를 살려 작품을 다시 꾸밀 수 있다.',
    illustration: ART('a paper child carefully moving one colored paper piece to match the other side of a symmetric butterfly collage, a small checklist beside', '다시 꾸며요', [
      { motif: 'flower', x: 120, y: 90, color: 'lavender' }, { motif: 'flower', x: 400, y: 226, color: 'rose' }, { motif: 'leaf', x: 110, y: 226 }]),
    safety: ['가위를 쓸 때는 앉아서 쓰고, 건넬 때는 손잡이를 내밀어요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"이 나비 그림에서 어디가 이상한가요?" 한쪽 날개 무늬만 다른 자리에 붙은 나비를 보여 준다. 학생이 찾으면 "어떻게 고치면 될까요?" 하고 묻는다. 고치는 것은 처음부터 다시 하는 게 아니라 한 곳씩 바꾸는 것이라고 짚는다. 시연 단추로 고칠 점과 방법이 이어지는 모습을 보여 준다.',
        student: '나비 그림에서 다른 곳을 찾으면 손가락으로 가리켜 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '고칠 방법', slots: [{ id: 's1', label: '양쪽 날개가 달라요' }], cards: ['마주 보는 자리로 옮겨요', '모두 떼어 버려요'], shuffle: false }, sequence: [{ match: { s1: '마주 보는 자리로 옮겨요' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 양쪽이 같게 고치기', minutes: 15, tool: 'collage',
            teacher: '"판에 놓인 작품에서 한쪽만 다른 조각을 찾아 고쳐요." 조각을 옮기거나 더 붙여 양쪽을 같게 만든다. 모두 떼고 처음부터 하려는 학생에게 다른 곳 하나만 찾아보게 한다. 실제 작품에서도 같은 방법으로 한 곳을 고친다.',
            task: '판의 작품에서 양쪽이 다른 곳을 찾아 옮기거나 더 붙여 고쳐요.',
            levels: {
              easy: { shapes: ['heart', 'circle', 'star'], colors: ['분홍', '노랑', '파랑'] },
              base: { shapes: ['heart', 'circle', 'star', 'leaf', 'rect'], colors: ['분홍', '노랑', '파랑', '초록', '보라'] },
              challenge: {},
            },
            items: [
              { prompt: '나비 날개의 오른쪽 노랑 동그라미가 빠졌어요. 세로 접는 선 양쪽이 같게 고쳐 보세요.', state: { pieces: [{ shape: 'heart', color: '분홍', size: 'l', x: 200, y: 200, r: 0 }, { shape: 'heart', color: '분홍', size: 'l', x: 360, y: 200, r: 0 }, { shape: 'circle', color: '노랑', size: 's', x: 200, y: 200, r: 0 }] }, target: { symmetry: 'vertical', has: [{ shape: 'circle', color: '노랑', n: 2 }, { shape: 'heart', color: '분홍', n: 2 }] }, difficulty: 0.15,
                hints: ['접는 선 양쪽의 조각을 하나씩 짝지어 보며 짝이 없는 조각을 찾아요.', '왼쪽 하트 위의 동그라미에 오른쪽 짝이 있는지 보세요.', '노랑 동그라미를 하나 더 붙여 오른쪽 하트 한가운데로 옮겨요.'] },
              { prompt: '오른쪽 파랑 별이 다른 높이에 붙어 있어요. 세로 접는 선 양쪽이 같게 옮겨 고쳐 보세요.', state: { pieces: [{ shape: 'star', color: '파랑', size: 'm', x: 200, y: 140, r: 0 }, { shape: 'star', color: '파랑', size: 'm', x: 360, y: 260, r: 0 }, { shape: 'circle', color: '분홍', size: 'm', x: 200, y: 260, r: 0 }, { shape: 'circle', color: '분홍', size: 'm', x: 360, y: 260, r: 0 }] }, target: { symmetry: 'vertical', has: [{ shape: 'star', color: '파랑', n: 2 }, { shape: 'circle', color: '분홍', n: 2 }] }, difficulty: 0.25,
                levels: { easy: { prompt: '오른쪽 파랑 별이 다른 높이에 붙어 있어요. 세로 접는 선 양쪽이 같게 옮겨 고쳐 보세요.', state: { pieces: [{ shape: 'star', color: '파랑', size: 'm', x: 200, y: 140, r: 0 }, { shape: 'star', color: '파랑', size: 'm', x: 360, y: 260, r: 0 }] }, target: { symmetry: 'vertical', has: [{ shape: 'star', color: '파랑', n: 2 }] } } },
                hints: ['짝이 되는 두 조각은 접는 선에서 같은 거리, 같은 높이에 있어야 해요.', '두 파랑 별의 높이를 견주어 보세요. 어느 별이 다른 높이에 있나요?', '오른쪽 파랑 별을 왼쪽 별과 같은 높이(위쪽)로 끌어 올려요.'] },
              { prompt: '실제 내 작품에서 양쪽이 다르거나 고치고 싶은 곳 한 곳을 찾아 고쳐요. 다 했으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 고칠 점 골라 다시 꾸미기', minutes: 12, tool: 'mindmap',
            teacher: '"친구 쪽지와 내가 찾은 점 가운데 하나만 골라 고쳐요." 고칠 점과 방법을 이은 뒤 실제 작품을 고친다. 고친 뒤 짝에게 무엇을 바꾸었는지 말한다.',
            task: '선 작품의 고칠 점과 고칠 방법을 잇고, 고칠 점 하나를 골라 작품을 다시 꾸며요.',
            levels: CARD_LV(),
            items: [
              { prompt: '고칠 점과 고칠 방법을 이어 보세요.', toolOptions: { mode: 'match', topic: '선 작품 고치기', slots: [{ id: 's1', label: '멀리서 모양이 잘 안 보여요' }, { id: 's2', label: '무늬 차례가 섞였어요' }, { id: 's3', label: '선이 모두 똑같아 심심해요' }], cards: ['대비되는 색으로 바꾸어요', '묶음 차례대로 다시 놓아요', '굵은 선과 가는 선을 섞어요'] },
                target: { match: { s1: '대비되는 색으로 바꾸어요', s2: '묶음 차례대로 다시 놓아요', s3: '굵은 선과 가는 선을 섞어요' } }, difficulty: 0.2,
                levels: { easy: { prompt: '고칠 점과 고칠 방법 두 짝을 이어 보세요.', toolOptions: { slots: [{ id: 's1', label: '멀리서 모양이 잘 안 보여요' }, { id: 's2', label: '무늬 차례가 섞였어요' }], cards: ['대비되는 색으로 바꾸어요', '묶음 차례대로 다시 놓아요'] }, target: { match: { s1: '대비되는 색으로 바꾸어요', s2: '묶음 차례대로 다시 놓아요' } } } } },
              { prompt: '작품을 고칠 때 알맞은 방법만 골라 보세요.', toolOptions: { mode: 'pick', basket: '고치는 방법', cards: ['고칠 곳 하나를 골라요', '고친 뒤 멀리서 다시 봐요', '마음에 안 들면 모두 찢어요'] },
                target: { pick: ['고칠 곳 하나를 골라요', '고친 뒤 멀리서 다시 봐요'] }, difficulty: 0.1,
                predict: { q: '모두 찢고 처음부터 하면 어떻게 될까요?', options: ['잘된 곳까지 없어져요', '언제나 더 좋아져요'], answer: 0 },
                conclude: '고칠 곳 하나만 바꾸면 잘된 곳은 살리고 더 좋게 만들 수 있어요.' },
              { prompt: '고칠 점 하나를 골라 실제 작품을 다시 꾸미고, 짝에게 무엇을 바꾸었는지 말해요. 다 했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"고친 작품을 처음 작품과 견주어 보니 무엇이 달라졌나요?" 서너 명이 말한다. 다음 시간에는 우리 반 선 그림 전시회를 연다. 작품 뒤에 이름과 제목을 쓴다.',
        exitTicket: [
          { type: 'tool', tool: 'collage', options: { shapes: ['heart', 'circle'], colors: ['분홍', '노랑'] }, prompt: '왼쪽 하트의 짝이 없어요. 세로 접는 선 양쪽이 같게 고쳐 보세요.', state: { pieces: [{ shape: 'heart', color: '분홍', size: 'm', x: 220, y: 200, r: 0 }, { shape: 'circle', color: '노랑', size: 's', x: 280, y: 120, r: 0 }] }, target: { symmetry: 'vertical', has: [{ shape: 'heart', color: '분홍', n: 2 }] }, difficulty: 0.15 },
          { type: 'choice', prompt: '작품을 고칠 때 알맞은 방법은?', options: ['모두 찢고 다시 해요', '고칠 곳 하나를 골라 바꾸어요', '고치지 않아요'], answer: 1, difficulty: 0.05, explain: '한 곳씩 고치면 잘된 곳은 살릴 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '다시 꾸며요',
      items: [
        { type: 'short', prompt: '내가 고른 고칠 점을 쓰세요.' },
        { type: 'short', prompt: '어떻게 고쳤는지 쓰세요.' },
        { type: 'choice', prompt: '양쪽이 같은지 알아보는 방법은?', options: ['접는 선에서 거리를 견주어요', '색만 봐요'], answer: '접는 선에서 거리를 견주어요' },
        { type: 'draw', prompt: '고친 작품을 그리세요.' },
      ],
      easy: {
        note: '한 곳씩 고쳐요.',
        items: [
          { type: 'short', prompt: '고친 곳을 쓰세요.' },
          { type: 'choice', prompt: '고칠 때는?', options: ['한 곳씩', '모두 찢기'], answer: '한 곳씩' },
          { type: 'draw', prompt: '고친 작품을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '고칠 조각이 하나뿐인 작품을 고쳐요. 짝 잇기가 두 짝이에요.',
      base: '여러 조각 가운데 다른 곳을 찾아 고쳐요.',
      challenge: '모든 모양과 색이 있는 판에서 고쳐요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 모두 떼고 처음부터 한다 → 다른 곳 하나만 찾아 손가락으로 짚게 한다. ② 양쪽 높이가 어긋난 것을 못 찾는다 → 자를 가로로 대어 높이를 견주게 한다. ③ 고친 점을 말하지 못한다 → 처음 사진과 견주어 보게 한다(사진은 학급 안에서만 쓴다).',
  }));

  lessons.push(L(36, {
    title: '우리 반 선 그림 전시회 열기',
    objective: '전시회를 준비하는 차례를 알고 내 작품을 소개하며, 친구 작품을 감상 예절을 지키며 볼 수 있다.',
    illustration: ART('a paper classroom gallery with colorful line drawings hung on strings with clothespins, little name cards under each work and children viewing quietly', '선 그림 전시회', [
      { motif: 'star', x: 110, y: 80, s: 0.6 }, { motif: 'heart', x: 400, y: 86, s: 0.5 }, { motif: 'flower', x: 400, y: 226, color: 'buttercup' }]),
    safety: ['작품을 걸 때는 의자 위에 올라가지 않고, 선생님이 높은 곳을 맡아요.', '감상할 때는 걸어서 다니고 작품을 만지지 않아요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"오늘은 우리 반 선 그림 전시회예요. 미술관에 가면 무엇을 볼 수 있나요?" 작품 옆 이름표(제목·만든 사람·한 줄 소개)를 보여 준다. 시연 단추로 전시 준비 차례가 놓이는 모습을 보여 준다.',
        student: '미술관에 가 본 적이 있다면 무엇을 보았는지 짝에게 말해 봐요.',
        demo: { tool: 'story', options: { cards: [{ id: 'd1', text: '작품을 골라요', motif: 'star' }, { id: 'd2', text: '이름표를 써요', motif: 'leaf' }], slots: 2, shuffle: false }, sequence: [{ order: ['d1', 'd2'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 전시회 준비하기', minutes: 12, tool: 'story',
            teacher: '"전시회는 이 차례로 준비해요." 장면을 놓은 뒤 실제로 작품 하나를 고르고 이름표를 쓴다. 이름표에는 제목과 쓴 선 하나를 적게 한다. 작품은 학생이 집게로 줄에 걸고, 높은 곳은 교사가 건다.',
            task: '전시회를 준비하는 차례를 장면 카드로 놓고, 내 작품의 이름표를 써서 걸어요.',
            levels: CARD_LV(),
            items: [
              { prompt: '전시회를 준비하는 차례대로 장면을 놓아 보세요.', toolOptions: { slots: 4, cards: [{ id: 'k1', text: '내놓을 작품을 골라요', motif: 'star' }, { id: 'k2', text: '제목과 소개를 써요', motif: 'leaf' }, { id: 'k3', text: '작품을 줄에 걸어요', motif: 'tree' }, { id: 'k4', text: '친구 작품을 감상해요', motif: 'heart' }] },
                target: { order: ['k1', 'k2', 'k3', 'k4'] }, difficulty: 0.1,
                levels: { easy: { prompt: '전시회를 준비하는 차례대로 장면을 놓아 보세요.', toolOptions: { slots: 3, cards: [{ id: 'k1', text: '내놓을 작품을 골라요', motif: 'star' }, { id: 'k2', text: '제목과 소개를 써요', motif: 'leaf' }, { id: 'k3', text: '작품을 줄에 걸어요', motif: 'tree' }] }, target: { order: ['k1', 'k2', 'k3'] } } } },
              { prompt: '이름표에 들어가면 좋은 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '이름표', cards: ['작품 제목', '쓴 선 한 가지', '친구 작품 점수'] },
                target: { pick: ['작품 제목', '쓴 선 한 가지'] }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['작품 제목', '쓴 선 한 가지', '친구 작품 점수', '떠올린 기억 한 줄', '내 작품이 1등이라는 말'] }, target: { pick: ['작품 제목', '쓴 선 한 가지', '떠올린 기억 한 줄'] }, prompt: '이름표에 들어가면 좋은 것만 모두 골라 보세요.' } } },
              { prompt: '내 작품의 이름표를 쓰고, 작품을 집게로 줄에 걸어요. 다 했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 작품 소개하고 감상하기', minutes: 15, tool: 'collage',
            teacher: '"한 사람씩 작품 앞에서 \'제가 쓴 선은 ○○이고, ○○ 기억을 나타냈어요\'라고 소개해요." 소개가 끝나면 친구들은 박수로 답한다. 감상을 마친 뒤 판에서 단원 내내 배운 선과 색을 써서 마지막 작품을 자유롭게 꾸미고 점검표를 표시한다. 점검표는 실제로 한 것만 표시한다.',
            task: '내 작품을 소개하고 친구 작품을 감상한 뒤, 판에서 배운 선과 색으로 마지막 작품을 꾸며요.',
            levels: {
              easy: { shapes: ['rect', 'semi', 'circle', 'star'], colors: ['빨강', '노랑', '파랑', '초록'] },
              base: { shapes: ['rect', 'semi', 'circle', 'star', 'heart', 'leaf'], colors: ['빨강', '노랑', '파랑', '초록', '보라', '분홍'] },
              challenge: {},
            },
            items: [
              { prompt: '내 작품 앞에 서서 쓴 선과 떠올린 기억을 소개하고, 친구 소개를 조용히 들어요. 다 했으면 "다 했어요"를 누르세요.', free: true, talk: true },
              { prompt: '전시회 기념으로 곧은 선(빨강 긴 네모) 두 개와 굽은 선(파랑 반원) 두 개를 써서 기념 띠를 꾸며 보세요.', target: { has: [{ shape: 'rect', color: '빨강', n: 2 }, { shape: 'semi', color: '파랑', n: 2 }] }, difficulty: 0.1,
                hints: ['곧은 선은 긴 네모, 굽은 선은 반원 조각이에요.', '빨강 긴 네모와 파랑 반원을 각각 세어 보세요.', '빨강 긴 네모 둘과 파랑 반원 둘을 붙여요.'] },
              { prompt: '단원에서 배운 선과 색으로 마지막 작품을 자유롭게 꾸미고 점검표에 표시하세요.', target: { selfCheck: ['곧은 선과 굽은 선을 함께 썼어요', '대비되는 색 짝을 하나 넘게 썼어요', '친구 작품 하나에 존중하는 말을 해 주었어요'], minPieces: 4 }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"전시회에서 가장 기억에 남는 작품과 그 까닭은 무엇인가요?" 서너 명이 말한다. 작품은 한 주 동안 걸어 두고, 그 뒤 기억 책에 넣는다. 다음 시간부터는 음악을 들으며 떠오르는 기억과 느낌을 나눈다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { cards: [{ id: 'x1', text: '작품을 골라요', motif: 'star' }, { id: 'x2', text: '이름표를 써요', motif: 'leaf' }, { id: 'x3', text: '작품을 걸어요', motif: 'tree' }], slots: 3 }, prompt: '전시회 준비 차례대로 장면을 놓아 보세요.', target: { order: ['x1', 'x2', 'x3'] }, difficulty: 0.05 },
          { type: 'choice', prompt: '전시회에서 감상할 때 알맞은 행동은?', options: ['작품을 손으로 만져요', '걸어 다니며 조용히 봐요', '뛰어다녀요'], answer: 1, difficulty: 0.05, explain: '작품이 상하지 않게 걸어 다니며 조용히 봐요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '선 그림 전시회',
      items: [
        { type: 'table', prompt: '내 작품 이름표를 써 보세요.', columns: ['제목', '쓴 선', '떠올린 기억'], rows: 1 },
        { type: 'short', prompt: '가장 기억에 남는 친구 작품과 그 까닭을 쓰세요.' },
        { type: 'check', prompt: '전시회에서 내가 지킨 것에 ✓ 하세요.', options: ['작품을 만지지 않았어요', '걸어 다니며 봤어요', '친구 소개를 조용히 들었어요'] },
        { type: 'draw', prompt: '전시회 장면을 그리세요.' },
      ],
      easy: {
        note: '보고, 듣고, 조용히!',
        items: [
          { type: 'short', prompt: '내 작품 제목을 쓰세요.' },
          { type: 'choice', prompt: '작품은?', options: ['눈으로 봐요', '손으로 만져요'], answer: '눈으로 봐요' },
          { type: 'draw', prompt: '전시회 장면을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '준비 차례가 세 장면이고, 판에 꼭 필요한 모양과 색만 있어요.',
      base: '네 장면 차례를 놓고 여러 모양 가운데서 골라요.',
      challenge: '이름표에 들어갈 것을 다섯 장에서 모두 고르고, 모든 모양과 색으로 꾸며요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 소개 말이 짧거나 떨려 말하지 못한다 → \'제가 쓴 선은 ○○이에요\' 한 문장만 말해도 된다고 한다. ② 작품에 점수를 매긴다 → 이름표에는 점수를 쓰지 않는다고 약속한다. ③ 높은 곳에 걸려고 의자에 올라간다 → 높은 곳은 교사가 건다. 학생 이름이 들어간 전시 사진은 학급 밖에 올리지 않는다.',
  }));

  // ───────────────────────── 37~40차시: 음악 듣고 느낌 찾기(빠르기·높낮이·셈여림 — 감상의 기초 요소) ─────────────────────────
  // 감상곡은 저작권이 끝난 옛 작곡가의 곡만 쓴다: 림스키코르사코프 '왕벌의 비행', 오펜바흐 '천국과 지옥' 서곡 중 캉캉,
  // 생상스 '동물의 사육제'(백조·사자왕의 행진·수족관), 그리그 '페르 귄트' 중 '아침', 차이콥스키 '호두까기 인형' 중 '사탕 요정의 춤', 슈만 '어린이 정경' 중 '트로이메라이'.
  // 곡은 저작권이 끝났어도 녹음은 연주자 권리가 있을 수 있으니, 학교가 이용 허락을 받은 음원이나 교사의 건반 연주를 쓴다.

  lessons.push(L(37, {
    title: '빠른 곡과 느린 곡 견주어 들어 보기',
    objective: '빠른 곡과 느린 곡을 듣고 견주어 나누며, 빠르기를 리듬 블록과 몸짓으로 나타낼 수 있다.',
    illustration: ART('a paper bee zooming fast with motion lines on one side and a graceful paper swan gliding slowly on a pond on the other side, music notes between', '빠르게 느리게', [
      { motif: 'flower', x: 110, y: 226, color: 'buttercup' }, { motif: 'cloud', x: 340, y: 70, s: 0.7 }, { motif: 'tree', x: 400, y: 214 }]),
    safety: ['몸으로 빠르기를 나타낼 때는 제자리에서 움직이고 팔을 크게 휘두르지 않아요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"두 곡을 조금씩 들려줄게요. 어느 곡이 더 빨랐나요?" 림스키코르사코프의 \'왕벌의 비행\'과 생상스의 \'백조\'를 30초씩 들려준다. 제목은 듣고 난 뒤에 알려 준다. 시연 단추로 곡이 빠르기에 따라 나뉘는 모습을 보여 준다.',
        student: '두 곡을 듣고, 빠른 곡이 나올 때는 손가락을 빨리, 느린 곡이 나올 때는 천천히 움직여 봐요.',
        demo: { tool: 'mindmap', options: { topic: '곡의 빠르기', slots: ['빨라요', '느려요'], cards: ['왕벌의 비행', '백조'], shuffle: false }, sequence: [{ sort: { '빨라요': ['왕벌의 비행'], '느려요': ['백조'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 빠르기로 곡 나누기', minutes: 13, tool: 'mindmap',
            teacher: '"곡을 듣고 빠른 곡과 느린 곡으로 나누어요." 곡마다 30초씩 들려주고 몸짓으로 빠르기를 나타낸 뒤 카드를 놓는다. 곡 이름은 교사가 들려준 차례대로 칠판에 붙여 둔다. 셋째 문항은 곡의 빠르기와 어울리는 동물 움직임을 잇는 것이다.',
            task: '곡을 듣고 빠른 곡과 느린 곡으로 나누고, 빠르기에 어울리는 움직임을 이어요.',
            levels: CARD_LV(),
            items: [
              { prompt: '들은 곡을 빠른 곡과 느린 곡으로 나누어 보세요.', toolOptions: { topic: '곡의 빠르기', slots: ['빨라요', '느려요'], cards: ['왕벌의 비행', '캉캉', '백조', '트로이메라이'] },
                target: { sort: { '빨라요': ['왕벌의 비행', '캉캉'], '느려요': ['백조', '트로이메라이'] } }, difficulty: 0.15,
                hints: ['곡을 들을 때 손가락이 빨리 움직였는지 천천히 움직였는지 떠올려 봐요.', '초록 테두리가 없는 곡을 다시 들어 보세요. 발로 박을 세기 바쁜가요, 여유 있나요?', '왕벌의 비행·캉캉은 빠른 곡, 백조·트로이메라이는 느린 곡이에요.'] },
              { prompt: '빠르기와 어울리는 움직임을 이어 보세요.', toolOptions: { mode: 'match', topic: '빠르기와 움직임', slots: [{ id: 's1', label: '아주 빠른 곡' }, { id: 's2', label: '느리고 잔잔한 곡' }], cards: ['벌이 붕붕 날아다녀요', '백조가 물 위를 미끄러져요'] },
                target: { match: { s1: '벌이 붕붕 날아다녀요', s2: '백조가 물 위를 미끄러져요' } }, difficulty: 0.1 },
              { prompt: '빠른 곡을 들을 때 알맞은 몸짓만 골라 보세요.', toolOptions: { mode: 'pick', basket: '빠른 곡 몸짓', cards: ['손끝을 바쁘게 떨어요', '제자리에서 발을 빠르게 굴러요', '두 팔을 천천히 펼쳐요'] },
                target: { pick: ['손끝을 바쁘게 떨어요', '제자리에서 발을 빠르게 굴러요'] }, difficulty: 0.1,
                predict: { q: '빠른 곡에 맞추어 움직이면 몸이 어떻게 될까요?', options: ['바쁘게 움직여요', '천천히 움직여요'], answer: 0 },
                conclude: '빠른 곡은 박이 촘촘해서 몸도 바쁘게 움직이게 돼요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 빠르기를 리듬으로 나타내기', minutes: 13, tool: 'keyboard',
            teacher: '"빠른 느낌은 짧은 음표를 많이, 느린 느낌은 긴 음표로 나타내요." 블록을 놓은 뒤 손뼉으로 쳐 보며 빠르기를 느낀다. 8분음표로만 채운 마디와 2분음표로만 채운 마디를 견주어 친다.',
            task: '빠른 느낌과 느린 느낌을 리듬 블록으로 나타내고 손뼉으로 쳐 보아요.',
            levels: RHY_LV(),
            items: [
              { prompt: '벌이 붕붕 나는 느낌이에요. 리듬 듣기를 누르고 들은 리듬을 블록으로 놓아 보세요.', toolOptions: { pattern: ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'q', 'q'] }, target: { rhythm: ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'q', 'q'] }, difficulty: 0.2,
                levels: { easy: { prompt: '벌이 붕붕 나는 느낌이에요. 리듬 듣기를 누르고 들은 리듬을 블록으로 놓아 보세요.', toolOptions: { pattern: ['e', 'e', 'e', 'e', 'q', 'q', 'e', 'e', 'e', 'e', 'h'] }, target: { rhythm: ['e', 'e', 'e', 'e', 'q', 'q', 'e', 'e', 'e', 'e', 'h'] } } } },
              { prompt: '백조가 미끄러지는 느낌이에요. 리듬 듣기를 누르고 들은 리듬을 블록으로 놓아 보세요.', toolOptions: { pattern: ['h', 'h', 'h', 'h'] }, target: { rhythm: ['h', 'h', 'h', 'h'] }, difficulty: 0.1 },
              { prompt: '8분음표를 꼭 넣어 빠른 느낌이 나는, 마디가 모두 4박인 리듬을 지어 보세요.', target: { beats: true, use: ['e'] }, difficulty: 0.2 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 들은 곡 가운데 내 기억 속 어떤 날과 어울리는 곡이 있나요?" 두세 명이 말한다(예: 운동회 날과 캉캉). 다음 시간에는 음악을 듣고 떠오르는 장면을 찾는다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '곡의 빠르기', slots: ['빨라요', '느려요'], cards: ['왕벌의 비행', '백조', '캉캉'] }, prompt: '들은 곡을 빠른 곡과 느린 곡으로 나누어 보세요.', target: { sort: { '빨라요': ['왕벌의 비행', '캉캉'], '느려요': ['백조'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '빠른 느낌을 리듬으로 나타내려면?', options: ['짧은 음표를 많이 써요', '긴 음표만 써요', '쉼표만 써요'], answer: 0, difficulty: 0.1, explain: '8분음표처럼 짧은 음표를 많이 쓰면 빠른 느낌이 나요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '빠르게 느리게',
      items: [
        { type: 'table', prompt: '들은 곡의 빠르기를 쓰세요.', columns: ['곡 이름', '빨라요 / 느려요'], cells: [['왕벌의 비행', ''], ['백조', ''], ['캉캉', '']] },
        { type: 'choice', prompt: '느린 느낌에 어울리는 음표는?', options: ['2분음표', '8분음표'], answer: '2분음표' },
        { type: 'draw', prompt: '빠른 곡을 들으며 떠오른 모습을 그리세요.' },
        { type: 'short', prompt: '가장 마음에 든 곡과 그 까닭을 쓰세요.' },
      ],
      easy: {
        note: '빠른 곡은 붕붕, 느린 곡은 스르르.',
        items: [
          { type: 'choice', prompt: '왕벌의 비행은?', options: ['빨라요', '느려요'], answer: '빨라요' },
          { type: 'choice', prompt: '백조는?', options: ['느려요', '빨라요'], answer: '느려요' },
          { type: 'draw', prompt: '느린 곡에 어울리는 동물을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '리듬 판에 박 수가 보이고, 빠른 리듬은 짧게 섞인 것을 놓아요.',
      base: '8분음표가 이어진 빠른 리듬을 귀로 듣고 놓아요.',
      challenge: '쉼표 블록이 더 많은 판에서 리듬을 놓고 지어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 빠른 곡과 큰 소리를 헷갈린다 → 작은 소리로 빠르게, 큰 소리로 느리게 쳐서 빠르기와 셈여림이 다르다는 것을 보여 준다. ② 몸짓이 커져 부딪친다 → 제자리에서만 움직인다. ③ 8분음표 여러 개를 놓다 마디가 넘친다 → 8분음표 둘이 한 박이라는 것을 손뼉으로 확인한다. 음원은 학교가 이용 허락을 받은 것이나 교사의 건반 연주를 쓴다.',
  }));

  lessons.push(L(38, {
    title: '음악을 듣고 떠오르는 장면 찾기',
    objective: '\'동물의 사육제\'의 몇 곡을 듣고 떠오르는 동물과 장면을 까닭과 함께 말하며, 장면에 어울리는 높이의 가락을 지을 수 있다.',
    illustration: ART('a paper parade of animals from a musical carnival: a proud lion marching, a swan on a lake, fish swimming in a glass aquarium, music notes floating', '떠오르는 장면', [
      { motif: 'star', x: 120, y: 86, s: 0.6 }, { motif: 'tree', x: 400, y: 214 }, { motif: 'flower', x: 110, y: 226, color: 'sky' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"곡 제목을 알려 주지 않고 들려줄게요. 어떤 동물이 떠오르나요?" 생상스 \'동물의 사육제\' 가운데 \'사자왕의 행진\'을 30초 들려준다. 떠오른 동물과 그 까닭(소리가 무겁다, 씩씩하다)을 말하게 한다. 시연 단추로 곡과 동물이 이어지는 모습을 보여 준다.',
        student: '곡을 듣고 떠오른 동물을 몸으로 흉내 내 봐요(제자리에서).',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '곡과 장면', slots: [{ id: 's1', label: '사자왕의 행진' }], cards: ['씩씩하게 걷는 사자', '하늘을 나는 새'], shuffle: false }, sequence: [{ match: { s1: '씩씩하게 걷는 사자' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 곡과 장면 잇기', minutes: 12, tool: 'mindmap',
            teacher: '"곡을 하나씩 듣고 떠오른 장면을 이어요." 곡마다 30초씩 들려준 뒤 카드를 잇는다. 학생이 다른 장면을 떠올렸다면 까닭을 듣고 인정해 준다. 오늘 카드는 작곡가가 붙인 제목에 맞추어 본다고 말한다.',
            task: '곡을 듣고 떠오르는 장면을 잇고, 그렇게 떠오른 까닭을 골라요.',
            levels: CARD_LV(),
            items: [
              { prompt: '곡과 떠오르는 장면을 이어 보세요.', toolOptions: { mode: 'match', topic: '곡과 장면', slots: [{ id: 's1', label: '사자왕의 행진' }, { id: 's2', label: '백조' }, { id: 's3', label: '수족관' }], cards: ['씩씩하게 걷는 사자', '호수를 미끄러지는 새', '반짝이는 물속 물고기'] },
                target: { match: { s1: '씩씩하게 걷는 사자', s2: '호수를 미끄러지는 새', s3: '반짝이는 물속 물고기' } }, difficulty: 0.15,
                hints: ['곡을 들을 때 소리가 무거웠는지, 부드러웠는지, 반짝였는지 떠올려 봐요.', '아직 맞지 않은 곡을 다시 들어 보세요. 소리가 동물의 움직임과 닮았나요?', '사자왕의 행진은 사자, 백조는 호수의 새, 수족관은 물속 물고기예요.'],
                levels: { easy: { prompt: '곡과 떠오르는 장면 두 짝을 이어 보세요.', toolOptions: { slots: [{ id: 's1', label: '사자왕의 행진' }, { id: 's2', label: '백조' }], cards: ['씩씩하게 걷는 사자', '호수를 미끄러지는 새'] }, target: { match: { s1: '씩씩하게 걷는 사자', s2: '호수를 미끄러지는 새' } } } } },
              { prompt: '\'사자왕의 행진\'에서 사자가 떠오르는 까닭만 골라 보세요.', toolOptions: { mode: 'pick', basket: '사자가 떠오르는 까닭', cards: ['낮고 무거운 소리가 나요', '씩씩한 걸음 같은 박이 있어요', '아주 높고 작은 소리만 나요'] },
                target: { pick: ['낮고 무거운 소리가 나요', '씩씩한 걸음 같은 박이 있어요'] }, difficulty: 0.15 },
              { prompt: '소리 느낌을 높고 가벼운 소리와 낮고 무거운 소리로 나누어 보세요.', toolOptions: { topic: '소리 느낌', slots: ['높고 가벼워요', '낮고 무거워요'], cards: ['작은 새의 지저귐', '사자의 으르렁', '물방울 톡톡', '코끼리 쿵쿵 걸음'] },
                target: { sort: { '높고 가벼워요': ['작은 새의 지저귐', '물방울 톡톡'], '낮고 무거워요': ['사자의 으르렁', '코끼리 쿵쿵 걸음'] } }, difficulty: 0.15,
                predict: { q: '작은 새를 소리로 나타내려면 높은 소리와 낮은 소리 가운데 무엇이 어울릴까요?', options: ['높은 소리', '낮은 소리'], answer: 0 },
                conclude: '작고 가벼운 것은 높은 소리로, 크고 무거운 것은 낮은 소리로 나타내면 잘 어울려요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 장면에 어울리는 가락 짓기', minutes: 14, tool: 'keyboard',
            teacher: '"새는 높은 음으로, 곰은 낮은 음으로 가락을 지어요." 쓰기로 한 음만 써서 네 음 가락을 짓고, 지은 가락을 쳐서 짝에게 들려준다. 짝은 어떤 동물인지 맞혀 본다.',
            task: '장면에 어울리는 높이의 음만 써서 가락을 짓고, 짝에게 들려주어요.',
            levels: MEL_LV(),
            items: [
              { prompt: '작은 새가 나는 장면이에요. 솔·라·시·높은도만 써서 네 음 가락을 지어 보세요.', target: { compose: { length: 4, only: ['솔', '라', '시', '높은도'] } }, difficulty: 0.15 },
              { prompt: '곰이 느릿느릿 걷는 장면이에요. 도·레·미만 써서 네 음 가락을 지어 보세요.', target: { compose: { length: 4, only: ['도', '레', '미'] } }, difficulty: 0.15 },
              { prompt: '물고기가 내려가며 헤엄치는 장면이에요. 높은도에서 시작해 도로 끝나는 다섯 음 가락을 지어 보세요.', target: { compose: { length: 5, startOn: '높은도', endOn: '도' } }, difficulty: 0.25,
                levels: { easy: { prompt: '물고기가 헤엄치는 장면이에요. 솔에서 시작해 도로 끝나는 네 음 가락을 지어 보세요.', target: { compose: { length: 4, startOn: '솔', endOn: '도' } } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"내가 지은 가락을 들려주고, 친구들이 어떤 동물인지 맞혀 볼까요?" 서너 명이 친다. 다음 시간에는 높은 소리와 낮은 소리를 더 자세히 견주어 본다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '곡과 장면', slots: [{ id: 'e1', label: '백조' }, { id: 'e2', label: '사자왕의 행진' }], cards: ['호수를 미끄러지는 새', '씩씩하게 걷는 사자'] }, prompt: '곡과 떠오르는 장면을 이어 보세요.', target: { match: { e1: '호수를 미끄러지는 새', e2: '씩씩하게 걷는 사자' } }, difficulty: 0.05 },
          { type: 'choice', prompt: '작은 새를 소리로 나타낼 때 어울리는 소리는?', options: ['높고 가벼운 소리', '낮고 무거운 소리'], answer: 0, difficulty: 0.05, explain: '작고 가벼운 새는 높은 소리가 어울려요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '떠오르는 장면',
      items: [
        { type: 'table', prompt: '곡을 듣고 떠오른 장면과 까닭을 쓰세요.', columns: ['곡', '떠오른 장면', '까닭'], cells: [['사자왕의 행진', '', ''], ['백조', '', ''], ['수족관', '', '']] },
        { type: 'choice', prompt: '곰이 걷는 장면에 어울리는 소리는?', options: ['낮은 소리', '높은 소리'], answer: '낮은 소리' },
        { type: 'draw', prompt: '곡을 듣고 떠오른 장면 하나를 그리세요.' },
        { type: 'short', prompt: '내가 지은 가락은 어떤 동물인지 쓰세요.' },
      ],
      easy: {
        note: '작은 것은 높게, 큰 것은 낮게.',
        items: [
          { type: 'choice', prompt: '작은 새는?', options: ['높은 소리', '낮은 소리'], answer: '높은 소리' },
          { type: 'choice', prompt: '사자는?', options: ['낮은 소리', '높은 소리'], answer: '낮은 소리' },
          { type: 'draw', prompt: '떠오른 동물을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '두 짝만 잇고, 가락은 네 음으로 짧게 지어요.',
      base: '세 짝을 잇고, 다섯 음 가락을 시작과 끝 음에 맞추어 지어요.',
      challenge: '계이름 없이 건반 높이만 보고 가락을 지어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 떠오르는 장면에 정답이 하나뿐이라고 여긴다 → 까닭이 있으면 다른 장면도 좋다고 인정하고, 제목은 작곡가가 떠올린 장면이라고 말한다. ② 높은 소리와 큰 소리를 헷갈린다 → 높은 음을 작게, 낮은 음을 크게 쳐 들려준다. ③ 쓰기로 한 음이 아닌 건반을 누른다 → 쓸 음 건반에 붙임딱지를 붙이게 한다.',
  }));

  lessons.push(L(39, {
    title: '높은 소리와 낮은 소리 가려 듣기',
    objective: '두 소리를 듣고 높고 낮음을 가려 말하고, 올라가는 가락과 내려가는 가락을 듣고 쳐서 손 높이로 나타낼 수 있다.',
    illustration: ART('a paper staircase with a child climbing up while notes rise, and sliding down while notes fall, a little bird at the top and a turtle at the bottom', '높게 낮게', [
      { motif: 'bird', x: 380, y: 80 }, { motif: 'star', x: 120, y: 86, s: 0.6 }, { motif: 'leaf', x: 110, y: 226 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"선생님이 소리를 두 번 낼게요. 둘째 소리가 더 높으면 손을 머리 위로, 더 낮으면 무릎에 대요." 건반이나 실로폰으로 도-높은도, 솔-도처럼 두 음을 들려준다. 몇 번 해 본 뒤 시연 단추로 올라가는 가락이 쳐지는 모습을 보여 준다.',
        student: '두 소리를 듣고, 둘째 소리가 높으면 손을 머리 위로, 낮으면 무릎에 대 봐요.',
        demo: { tool: 'keyboard', options: { from: '도', to: '높은도', names: 'solfa' }, sequence: [{ notes: ['도', '레', '미', '파', '솔'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 올라가고 내려가는 가락', minutes: 14, tool: 'keyboard',
            teacher: '"가락 듣기를 누르고 손으로 높이를 따라 그려요. 그다음 건반으로 쳐요." 올라가는 가락은 손을 계단처럼 올리고, 내려가는 가락은 내린다. 건반은 오른쪽으로 갈수록 소리가 높아진다는 것을 짚는다.',
            task: '가락을 듣고 손 높이로 나타낸 뒤, 건반으로 똑같이 쳐요.',
            levels: MEL_LV(),
            items: [
              { prompt: '올라가는 가락이에요. 손으로 높이를 따라 그린 뒤 건반으로 쳐 보세요.', target: { notes: ['도', '레', '미', '파', '솔'] }, difficulty: 0.1,
                levels: { easy: { prompt: '올라가는 가락이에요. 손으로 높이를 따라 그린 뒤 건반으로 쳐 보세요.', target: { notes: ['도', '레', '미'] } } } },
              { prompt: '내려가는 가락이에요. 손으로 높이를 따라 그린 뒤 건반으로 쳐 보세요.', target: { notes: ['높은도', '라', '솔', '미', '도'] }, difficulty: 0.15,
                levels: { easy: { prompt: '내려가는 가락이에요. 손으로 높이를 따라 그린 뒤 건반으로 쳐 보세요.', target: { notes: ['솔', '미', '도'] } } } },
              { prompt: '올라갔다 내려오는 가락이에요. 손으로 높이를 따라 그린 뒤 건반으로 쳐 보세요.', target: { notes: ['도', '미', '솔', '높은도', '솔', '미', '도'] }, difficulty: 0.25,
                predict: { q: '건반에서 오른쪽으로 갈수록 소리는 어떻게 될까요?', options: ['높아져요', '낮아져요'], answer: 0 },
                conclude: '건반은 오른쪽으로 갈수록 높은 소리, 왼쪽으로 갈수록 낮은 소리가 나요.',
                levels: { easy: { prompt: '올라갔다 내려오는 가락이에요. 손으로 높이를 따라 그린 뒤 건반으로 쳐 보세요.', target: { notes: ['도', '미', '솔', '미', '도'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 높고 낮은 소리 나누기', minutes: 12, tool: 'mindmap',
            teacher: '"생활 속 소리를 높은 소리와 낮은 소리로 나누어요." 카드를 나눈 뒤 목소리로 그 소리를 흉내 내어 높이를 견주게 한다. 실제 악기(작은 실로폰의 짧은 막대·긴 막대)를 쳐서 막대가 짧을수록 높다는 것을 들려준다.',
            task: '생활 속 소리와 악기 소리를 높은 소리와 낮은 소리로 나누어요.',
            levels: CARD_LV(),
            items: [
              { prompt: '생활 속 소리를 높은 소리와 낮은 소리로 나누어 보세요.', toolOptions: { topic: '생활 속 소리', slots: ['높은 소리', '낮은 소리'], cards: ['병아리 삐악삐악', '큰 북 둥둥', '호루라기 삐익', '배 고동 뿌우'] },
                target: { sort: { '높은 소리': ['병아리 삐악삐악', '호루라기 삐익'], '낮은 소리': ['큰 북 둥둥', '배 고동 뿌우'] } }, difficulty: 0.1 },
              { prompt: '실로폰 막대를 쳐 보고, 소리 높이에 따라 나누어 보세요.', toolOptions: { topic: '실로폰 막대', slots: ['높은 소리', '낮은 소리'], cards: ['짧은 막대', '긴 막대'] },
                target: { sort: { '높은 소리': ['짧은 막대'], '낮은 소리': ['긴 막대'] } }, difficulty: 0.15,
                predict: { q: '실로폰의 짧은 막대는 높은 소리가 날까요, 낮은 소리가 날까요?', options: ['높은 소리', '낮은 소리'], answer: 0 },
                conclude: '실로폰은 막대가 짧을수록 높은 소리, 길수록 낮은 소리가 나요.' },
              { prompt: '높은 소리를 나타내는 몸짓만 골라 보세요.', toolOptions: { mode: 'pick', basket: '높은 소리 몸짓', cards: ['손을 머리 위로 올려요', '발꿈치를 들어요', '무릎을 굽혀 앉아요'] },
                target: { pick: ['손을 머리 위로 올려요', '발꿈치를 들어요'] }, difficulty: 0.05 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"\'기억 상자\' 첫 줄은 올라가는 가락일까요, 내려가는 가락일까요?" 함께 부르며 손 높이로 나타낸다. 다음 시간에는 세고 여린 소리를 알아본다.',
        exitTicket: [
          { type: 'tool', tool: 'keyboard', options: { from: '도', to: '높은도', names: 'solfa' }, prompt: '가락을 듣고 건반으로 쳐 보세요.', target: { notes: ['솔', '파', '미'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '실로폰에서 높은 소리가 나는 막대는?', options: ['짧은 막대', '긴 막대'], answer: 0, difficulty: 0.05, explain: '막대가 짧을수록 높은 소리가 나요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '높게 낮게',
      items: [
        { type: 'table', prompt: '소리를 높은 소리와 낮은 소리로 나누어 쓰세요.', columns: ['높은 소리', '낮은 소리'], rows: 2 },
        { type: 'choice', prompt: '건반에서 오른쪽으로 갈수록?', options: ['높아져요', '낮아져요'], answer: '높아져요' },
        { type: 'draw', prompt: '올라가는 가락을 계단으로 그리세요.' },
        { type: 'short', prompt: '높은 소리가 나는 것을 하나 더 찾아 쓰세요.' },
      ],
      easy: {
        note: '오른쪽은 높게, 왼쪽은 낮게.',
        items: [
          { type: 'choice', prompt: '병아리 소리는?', options: ['높은 소리', '낮은 소리'], answer: '높은 소리' },
          { type: 'choice', prompt: '큰 북 소리는?', options: ['낮은 소리', '높은 소리'], answer: '낮은 소리' },
          { type: 'draw', prompt: '높은 소리가 나는 것을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '세 음·다섯 음 짧은 가락을 치고, 들을 때 건반이 비쳐요.',
      base: '다섯 음·일곱 음 가락을 귀로 듣고 쳐요.',
      challenge: '계이름 없이 귀로만 듣고 쳐요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 높은 소리를 큰 소리로 여긴다 → 높은 음을 작게, 낮은 음을 크게 쳐 견주어 들려준다. ② 내려가는 가락에서 손이 올라간다 → 교사가 계단 그림을 짚으며 함께 내려간다. ③ 실로폰 막대를 세게 쳐 울림이 탁하다 → 채를 튕기듯 가볍게 친다.',
  }));

  lessons.push(L(40, {
    title: '세고 여린 소리로 기억 장면 나타내기',
    objective: '셈과 여림을 가려 듣고, 기억 속 장면(천둥·속삭임·점점 다가오는 행진)을 셈여림을 살려 몸 소리로 나타낼 수 있다.',
    illustration: ART('a paper scene with a big thundercloud making loud bold marks and a tiny mouse whispering with small soft marks, a parade getting closer from small to big', '세게 여리게', [
      { motif: 'cloud', x: 340, y: 70, s: 0.9 }, { motif: 'flower', x: 110, y: 226, color: 'rose' }, { motif: 'tree', x: 400, y: 214 }]),
    safety: ['몸 소리를 낼 때 발을 너무 세게 구르지 않고, 친구 귀 가까이에서 손뼉 치지 않아요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"선생님 손뼉을 들어 보세요. 어떻게 달라졌나요?" 처음에는 세게, 다음에는 여리게, 마지막에는 여리게 시작해 점점 세게 친다. 셈은 \'포르테\', 여림은 \'피아노\'라고 부르기도 한다고 알려 준다. 시연 단추로 소리가 셈과 여림으로 나뉘는 모습을 보여 준다.',
        student: '선생님 손뼉이 셀 때는 손을 크게, 여릴 때는 손을 작게 벌려 봐요.',
        demo: { tool: 'mindmap', options: { topic: '셈여림', slots: ['세게', '여리게'], cards: ['천둥 우르릉', '생쥐 소곤소곤'], shuffle: false }, sequence: [{ sort: { '세게': ['천둥 우르릉'], '여리게': ['생쥐 소곤소곤'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 세게 여리게 나누기', minutes: 12, tool: 'mindmap',
            teacher: '"소리 카드를 셈과 여림으로 나누어요." 카드를 나눈 뒤 몸 소리로 흉내 내 본다. 차이콥스키 \'호두까기 인형\' 중 \'사탕 요정의 춤\'(여린 소리)과 오펜바흐의 \'캉캉\'(센 소리)을 30초씩 들려주고 견주게 한다. 셋째 문항은 장면과 셈여림을 잇는 것이다.',
            task: '소리와 곡을 셈과 여림으로 나누고, 장면에 어울리는 셈여림을 이어요.',
            levels: CARD_LV(),
            items: [
              { prompt: '소리를 세게와 여리게로 나누어 보세요.', toolOptions: { topic: '셈여림', slots: ['세게', '여리게'], cards: ['운동회 응원 소리', '아기 잠자는 숨소리', '천둥 우르릉', '나뭇잎 사각사각'] },
                target: { sort: { '세게': ['운동회 응원 소리', '천둥 우르릉'], '여리게': ['아기 잠자는 숨소리', '나뭇잎 사각사각'] } }, difficulty: 0.1 },
              { prompt: '들은 곡을 여린 느낌과 센 느낌으로 나누어 보세요.', toolOptions: { topic: '곡의 셈여림', slots: ['여린 느낌', '센 느낌'], cards: ['사탕 요정의 춤', '캉캉'] },
                target: { sort: { '여린 느낌': ['사탕 요정의 춤'], '센 느낌': ['캉캉'] } }, difficulty: 0.15,
                hints: ['곡을 들을 때 귀를 기울여야 했는지, 소리가 가득 찼는지 떠올려 봐요.', '사탕 요정의 춤에서 들린 작은 종소리를 떠올려 보세요.', '사탕 요정의 춤은 여린 느낌, 캉캉은 센 느낌이에요.'] },
              { prompt: '장면과 어울리는 셈여림을 이어 보세요.', toolOptions: { mode: 'match', topic: '장면과 셈여림', slots: [{ id: 's1', label: '멀리서 행진이 점점 다가와요' }, { id: 's2', label: '잠든 동생 옆에서 놀아요' }, { id: 's3', label: '골을 넣어 다 같이 외쳐요' }], cards: ['점점 세게', '여리게', '세게'] },
                target: { match: { s1: '점점 세게', s2: '여리게', s3: '세게' } }, difficulty: 0.2,
                predict: { q: '멀리서 다가오는 소리는 어떻게 들릴까요?', options: ['점점 세게', '점점 여리게'], answer: 0 },
                conclude: '가까이 다가올수록 소리가 점점 세게 들려요.',
                levels: { easy: { prompt: '장면과 어울리는 셈여림 두 짝을 이어 보세요.', toolOptions: { slots: [{ id: 's2', label: '잠든 동생 옆에서 놀아요' }, { id: 's3', label: '골을 넣어 다 같이 외쳐요' }], cards: ['여리게', '세게'] }, target: { match: { s2: '여리게', s3: '세게' } } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 몸 소리로 기억 장면 나타내기', minutes: 14, tool: 'story',
            teacher: '"비 오던 날을 몸 소리로 나타내 볼까요? 손가락 톡톡에서 시작해 손뼉, 무릎, 발 구르기로 점점 세게 갔다가 다시 여리게 돌아와요." 장면 차례를 놓은 뒤 반 전체가 실제로 몸 소리로 해 본다. 교사가 손을 올리면 세게, 내리면 여리게 신호를 준다.',
            task: '점점 세게, 점점 여리게 바뀌는 몸 소리 차례를 장면 카드로 놓고, 실제로 몸 소리로 해 봐요.',
            levels: CARD_LV(),
            items: [
              { prompt: '비가 점점 세게 오는 차례대로 몸 소리 장면을 놓아 보세요.', toolOptions: { slots: 4, cards: [{ id: 'r1', text: '손가락 톡톡', motif: 'leaf' }, { id: 'r2', text: '손바닥 짝짝', motif: 'flower' }, { id: 'r3', text: '무릎 탁탁', motif: 'tree' }, { id: 'r4', text: '발 쿵쿵', motif: 'cloud' }] },
                target: { order: ['r1', 'r2', 'r3', 'r4'] }, difficulty: 0.15,
                levels: { easy: { prompt: '비가 점점 세게 오는 차례대로 몸 소리 장면을 놓아 보세요.', toolOptions: { slots: 3, cards: [{ id: 'r1', text: '손가락 톡톡', motif: 'leaf' }, { id: 'r2', text: '손바닥 짝짝', motif: 'flower' }, { id: 'r4', text: '발 쿵쿵', motif: 'cloud' }] }, target: { order: ['r1', 'r2', 'r4'] } } } },
              { prompt: '비가 그치는 차례대로 몸 소리 장면을 놓아 보세요.', toolOptions: { slots: 3, cards: [{ id: 'g1', text: '무릎 탁탁', motif: 'tree' }, { id: 'g2', text: '손가락 톡톡', motif: 'leaf' }, { id: 'g3', text: '조용히 손을 무릎에', motif: 'sun' }] },
                target: { order: ['g1', 'g2', 'g3'] }, difficulty: 0.15 },
              { prompt: '선생님 손 신호에 맞추어 반 전체가 비 오는 날 몸 소리를 점점 세게, 점점 여리게 해요. 다 했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"몸 소리로 비 오는 날을 나타내니 어떤 기억이 떠올랐나요?" 두세 명이 말한다. 다음 시간에는 음악이 멈추면 함께 멈추는 놀이를 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '셈여림', slots: ['세게', '여리게'], cards: ['박수 갈채', '귓속말', '북 둥둥'] }, prompt: '소리를 세게와 여리게로 나누어 보세요.', target: { sort: { '세게': ['박수 갈채', '북 둥둥'], '여리게': ['귓속말'] } }, difficulty: 0.05 },
          { type: 'choice', prompt: '멀리서 다가오는 행진 소리는?', options: ['점점 세게', '점점 여리게', '늘 같게'], answer: 0, difficulty: 0.1, explain: '가까워질수록 소리가 점점 세게 들려요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '세게 여리게',
      items: [
        { type: 'table', prompt: '소리를 셈과 여림으로 나누어 쓰세요.', columns: ['세게', '여리게'], rows: 2 },
        { type: 'figure', wide: true, prompt: '비가 점점 세게 오는 차례대로 1, 2, 3을 쓰세요.', tool: 'story', figures: [{ options: { cards: [{ id: 'r4', text: '발 쿵쿵', motif: 'cloud' }, { id: 'r1', text: '손가락 톡톡', motif: 'leaf' }, { id: 'r2', text: '손바닥 짝짝', motif: 'flower' }], slots: 3, shuffle: false }, caption: '' }], answer: '톡톡-짝짝-쿵쿵' },
        { type: 'choice', prompt: '잠든 동생 옆에서는?', options: ['여리게', '세게'], answer: '여리게' },
        { type: 'short', prompt: '세게 또는 여리게 나타내고 싶은 기억 장면을 쓰세요.' },
      ],
      easy: {
        note: '천둥은 세게, 속삭임은 여리게.',
        items: [
          { type: 'choice', prompt: '천둥 소리는?', options: ['세게', '여리게'], answer: '세게' },
          { type: 'choice', prompt: '귓속말은?', options: ['여리게', '세게'], answer: '여리게' },
          { type: 'draw', prompt: '센 소리가 나는 장면을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '두 짝만 잇고, 몸 소리 차례가 세 장면이에요.',
      base: '세 짝을 잇고, 네 장면 차례를 놓아요.',
      challenge: '점점 세게와 점점 여리게를 이어 하나의 장면으로 몸 소리를 지어 모둠에 가르쳐요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 세게를 빠르게로 바꾸어 친다 → 같은 빠르기로 셈만 바꾸어 치는 연습을 한다. ② 발 구르기가 지나쳐 아래층에 울린다 → 발 쿵쿵은 발바닥 앞쪽으로 살살, 또는 무릎 치기로 바꾼다. ③ 여리게를 아예 멈춤으로 한다 → 아주 작은 소리라도 들려야 한다고 말한다.',
  }));

  // ───────────────────────── 41~44차시: 음악에 맞추어 움직이고 그리기(감상하며 표현하기) ─────────────────────────

  lessons.push(L(41, {
    title: '음악이 멈추면 함께 멈추는 놀이',
    objective: '음악의 박과 쉼에 귀 기울여, 음악이 나올 때 움직이고 멈추면 함께 멈추며, 쉼표가 든 리듬을 듣고 나타낼 수 있다.',
    illustration: ART('paper children frozen in funny poses in a classroom while a music player shows a pause sign, some notes stopped in the air', '멈춰라 놀이', [
      { motif: 'star', x: 110, y: 80, s: 0.6 }, { motif: 'flower', x: 400, y: 226, color: 'buttercup' }, { motif: 'tree', x: 90, y: 214 }]),
    safety: MOVE_SAFE,
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"음악이 나오면 제자리에서 걷고, 음악이 멈추면 동상처럼 멈춰요." 오펜바흐 \'캉캉\' 같은 박이 또렷한 곡을 틀었다 멈췄다 한다. 책상과 의자를 벽 쪽으로 밀어 움직일 자리를 먼저 만든다. 시연 단추로 쉼표가 든 리듬이 놓이는 모습을 보여 준다.',
        student: '음악이 멈추면 바로 멈춰서 재미있는 동상 자세를 해 봐요.',
        demo: { tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 1, blocks: ['q', 'qr'] }, sequence: [{ rhythm: ['q', 'q', 'q', 'qr'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 멈춰라 놀이', minutes: 12, tool: 'mindmap',
            teacher: '"멈춰라 놀이를 할 때 지킬 약속을 정해요." 카드를 고른 뒤 실제로 놀이를 세 번 한다. 처음에는 걷기, 다음에는 깡충 뛰기, 마지막에는 음악 빠르기에 맞추어 움직인다. 넘어지지 않게 양말만 신은 학생은 실내화를 신게 한다.',
            task: '멈춰라 놀이의 약속을 고르고, 음악에 맞추어 움직였다 멈추어요.',
            levels: CARD_LV(),
            items: [
              { prompt: '멈춰라 놀이에서 지킬 약속만 골라 보세요.', toolOptions: { mode: 'pick', basket: '놀이 약속', cards: ['음악을 잘 들어요', '친구와 부딪치지 않게 움직여요', '멈춘 친구를 밀어요', '음악이 멈춰도 계속 뛰어요'] },
                target: { pick: ['음악을 잘 들어요', '친구와 부딪치지 않게 움직여요'] }, difficulty: 0.05 },
              { prompt: '음악과 어울리는 움직임을 이어 보세요.', toolOptions: { mode: 'match', topic: '음악과 움직임', slots: [{ id: 's1', label: '빠르고 신나는 음악' }, { id: 's2', label: '느리고 잔잔한 음악' }, { id: 's3', label: '음악이 멈췄어요' }], cards: ['제자리에서 깡충 뛰어요', '천천히 팔을 저어 걸어요', '동상처럼 멈춰요'] },
                target: { match: { s1: '제자리에서 깡충 뛰어요', s2: '천천히 팔을 저어 걸어요', s3: '동상처럼 멈춰요' } }, difficulty: 0.1,
                levels: { easy: { prompt: '음악과 어울리는 움직임 두 짝을 이어 보세요.', toolOptions: { slots: [{ id: 's1', label: '빠르고 신나는 음악' }, { id: 's3', label: '음악이 멈췄어요' }], cards: ['제자리에서 깡충 뛰어요', '동상처럼 멈춰요'] }, target: { match: { s1: '제자리에서 깡충 뛰어요', s3: '동상처럼 멈춰요' } } } } },
              { prompt: '음악에 맞추어 움직이고, 음악이 멈추면 멈추는 놀이를 세 번 해요. 다 했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 쉼이 있는 리듬', minutes: 15, tool: 'keyboard',
            teacher: '"음악이 멈추는 곳은 리듬에서 쉼표예요." 리듬 듣기로 들은 리듬을 블록으로 놓고, 쉼표에서는 손을 멈추고 동상 자세를 한다. 넷째 문항에서 지은 리듬을 짝이 손뼉으로 치고, 나는 쉼표에서 멈추어 본다.',
            task: '쉼표가 든 리듬을 듣고 블록으로 놓은 뒤, 쉼표에서 멈추며 손뼉으로 쳐요.',
            levels: RHY_LV(),
            items: [
              { prompt: '세 번 치고 한 번 멈추는 리듬을 듣고 블록으로 놓아 보세요.', toolOptions: { pattern: ['q', 'q', 'q', 'qr', 'q', 'q', 'q', 'qr'] }, target: { rhythm: ['q', 'q', 'q', 'qr', 'q', 'q', 'q', 'qr'] }, difficulty: 0.1 },
              { prompt: '치고 멈추고를 번갈아 하는 리듬을 듣고 블록으로 놓아 보세요.', toolOptions: { pattern: ['q', 'qr', 'q', 'qr', 'h', 'qr', 'q'] }, target: { rhythm: ['q', 'qr', 'q', 'qr', 'h', 'qr', 'q'] }, difficulty: 0.2,
                predict: { q: '쉼표가 있는 박에서는 어떻게 할까요?', options: ['소리를 내지 않고 쉬어요', '더 크게 쳐요'], answer: 0 },
                conclude: '쉼표는 소리를 내지 않고 쉬는 박이에요. 쉬는 동안에도 마음속으로 박을 세요.' },
              { prompt: '쉬는 박을 두 번 넘게 넣어, 마디가 모두 4박인 멈춰라 리듬을 지어 보세요.', target: { beats: true, rests: 2 }, difficulty: 0.2 },
              { prompt: '짝이 내가 지은 리듬을 손뼉으로 치면, 나는 쉼표에서 동상처럼 멈추어요. 바꾸어서도 해요. 다 했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"음악이 멈출 때 바로 멈추려면 무엇을 잘해야 했나요?" \'잘 듣기\'를 짚는다. 책상과 의자를 제자리로 옮긴다. 다음 시간에는 음악을 들으며 떠오른 기억을 그림으로 나타낸다.',
        exitTicket: [
          { type: 'tool', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 1, blocks: ['q', 'h', 'qr'], pattern: ['q', 'qr', 'q', 'qr'] }, prompt: '리듬 듣기를 누르고, 들은 한 마디를 블록으로 놓아 보세요.', target: { rhythm: ['q', 'qr', 'q', 'qr'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '쉼표는 무엇을 뜻하나요?', options: ['소리를 내지 않고 쉬어요', '두 번 쳐요', '크게 쳐요'], answer: 0, difficulty: 0.05, explain: '쉼표는 소리를 내지 않고 쉬는 박이에요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '멈춰라 놀이',
      items: [
        { type: 'table', prompt: '"짝 짝 짝 쉬고" 리듬에서 치는 박에 ○, 쉬는 박에 × 하세요.', columns: ['하나', '둘', '셋', '넷'], cells: [['', '', '', '']] },
        { type: 'check', prompt: '놀이에서 내가 지킨 약속에 ✓ 하세요.', options: ['음악을 잘 들었어요', '친구와 부딪치지 않았어요', '음악이 멈추면 바로 멈췄어요'] },
        { type: 'draw', prompt: '내가 한 동상 자세를 그리세요.' },
        { type: 'short', prompt: '멈춰라 놀이를 하며 느낀 점을 쓰세요.' },
      ],
      easy: {
        note: '음악이 멈추면 나도 멈춰요.',
        items: [
          { type: 'choice', prompt: '음악이 멈추면?', options: ['멈춰요', '계속 뛰어요'], answer: '멈춰요' },
          { type: 'choice', prompt: '쉼표에서는?', options: ['쉬어요', '쳐요'], answer: '쉬어요' },
          { type: 'draw', prompt: '동상 자세를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '두 짝만 잇고, 리듬 판에 박 수가 보여요.',
      base: '세 짝을 잇고, 쉼표가 든 리듬을 귀로 놓아요.',
      challenge: '쉼표 블록이 더 많은 판에서 리듬을 놓고 지어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 음악이 멈춰도 바로 멈추지 못한다 → 처음에는 걷기로만 하고, 교사가 멈추기 전에 손을 들어 미리 알린다. ② 신나서 뛰다 부딪친다 → 자기 자리 둘레(팔 벌린 만큼)에서만 움직인다. ③ 쉼표를 박으로 세지 않는다 → 쉬는 박에 손을 무릎에 대며 \'쉬고\'라고 마음속으로 말하게 한다. 몸이 불편한 학생은 앉아서 손으로 움직이게 한다.',
  }));

  lessons.push(L(42, {
    title: '음악 듣고 떠오른 기억 그림으로 그리기',
    objective: '그리그 \'아침\'을 들으며 떠오른 기억과 마음을 말하고, 그 느낌을 선과 색으로 나타낼 수 있다.',
    illustration: ART('a paper child listening with headphones, colorful soft lines and a rising paper sun flowing out of the music onto a drawing paper', '음악 그림', [
      { motif: 'sun', x: 410, y: 70 }, { motif: 'bird', x: 140, y: 90 }, { motif: 'flower', x: 110, y: 226, color: 'buttercup' }]),
    safety: ['크레파스와 물감은 다 쓰면 뚜껑을 닫고, 물통은 책상 안쪽에 둬요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"눈을 감고 이 곡을 들어 보세요. 언제, 어디가 떠오르나요?" 그리그 \'페르 귄트\' 중 \'아침\'을 1분 들려준다. 떠오른 때와 곳, 마음을 짝에게 말하게 한다. 시연 단추로 곡의 느낌과 마음이 이어지는 모습을 보여 준다.',
        student: '눈을 감고 곡을 듣고, 떠오른 때와 곳을 짝에게 말해 봐요.',
        demo: { tool: 'emotion', options: { cards: ['편안함', '화남'], slots: [{ id: 's1', label: '잔잔하게 해가 뜨는 음악' }], shuffle: false }, sequence: [{ match: { s1: '편안함' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 음악이 주는 마음', minutes: 11, tool: 'emotion',
            teacher: '"음악마다 어떤 마음이 드나요?" \'아침\'과 \'캉캉\'을 다시 30초씩 들려주고 마음 카드를 놓게 한다. 사람마다 다른 마음이 들 수 있다는 것을 인정하되, 까닭을 말하게 한다. 셋째 문항은 지금 내 마음 크기를 고르는 것이라 어느 크기도 맞다.',
            task: '들은 음악과 어울리는 마음을 잇고, 음악을 들은 내 마음의 크기를 골라요.',
            levels: EMO_LV(),
            items: [
              { prompt: '음악과 어울리는 마음을 이어 보세요.', toolOptions: { cards: ['편안함', '신남'], slots: [{ id: 's1', label: '잔잔하게 해가 뜨는 "아침"' }, { id: 's2', label: '빠르고 힘찬 "캉캉"' }] },
                target: { match: { s1: '편안함', s2: '신남' } }, difficulty: 0.1,
                hints: ['음악을 들을 때 내 몸이 쉬고 싶었는지, 움직이고 싶었는지 떠올려 봐요.', '아직 맞지 않은 칸의 음악이 빨랐는지 느렸는지 생각해 보세요.', '잔잔한 아침은 편안함, 힘찬 캉캉은 신남이에요.'] },
              { prompt: '음악을 듣고 떠올린 기억을 마음에 따라 나누어 보세요.', toolOptions: { mode: 'sort', cards: ['소풍 가는 날 아침', '이불 속에서 듣던 자장가', '운동회 이어달리기'], slots: ['편안함', '신남'] },
                target: { sort: { '편안함': ['이불 속에서 듣던 자장가'], '신남': ['소풍 가는 날 아침', '운동회 이어달리기'] } }, difficulty: 0.15,
                hints: ['그 기억 속에서 내 몸과 마음이 어땠는지 떠올려 봐요.', '아직 칸이 맞지 않은 기억을 다시 읽어 보세요. 두근두근 들떴나요, 포근했나요?', '자장가는 편안함, 소풍 가는 아침과 이어달리기는 신남이에요.'] },
              { prompt: '"아침"을 듣고 편안한 마음이 얼마나 들었는지 골라 보세요. 어느 크기든 괜찮아요.', toolOptions: { mode: 'scale', who: '나', situation: '그리그의 "아침"을 눈을 감고 들었어요.', feeling: '편안함' }, target: { level: 'any' }, difficulty: 0.05 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 음악 기억 그림 그리기', minutes: 16, tool: 'collage',
            teacher: '"음악을 다시 들으며 떠오른 기억을 그려요." 음악을 낮게 틀어 둔 채, 판에서 먼저 선과 색을 골라 본 뒤 실제 도화지에 크레파스로 그린다. 잔잔한 곳은 부드러운 선과 연한 색으로, 밝아지는 곳은 따뜻한 색으로 칠해 보게 한다. 점검표는 실제로 한 것만 표시한다.',
            task: '음악을 들으며 판에서 선과 색을 골라 보고, 실제 도화지에 음악 기억 그림을 그려요.',
            levels: {
              easy: { shapes: ['semi', 'rect', 'circle'], colors: ['노랑', '주황', '파랑', '초록'] },
              base: { shapes: ['semi', 'rect', 'circle', 'star', 'leaf'], colors: ['노랑', '주황', '파랑', '초록', '분홍', '보라'] },
              challenge: {},
            },
            items: [
              { prompt: '해가 떠오르는 아침이에요. 크게 주황 반원(해) 하나와 파랑 반원(부드러운 물결선) 두 개를 붙여 보세요.', target: { has: [{ shape: 'semi', color: '주황', size: 'l', n: 1 }, { shape: 'semi', color: '파랑', n: 2 }] }, difficulty: 0.15,
                hints: ['잔잔한 음악은 부드러운 굽은 선(반원)으로, 떠오르는 해는 따뜻한 색으로 나타내요.', '반원 조각을 색과 크기별로 세어 보세요.', '크게 주황 반원 하나와 파랑 반원 둘을 붙여요.'] },
              { prompt: '음악이 밝아지는 곳이에요. 노랑 긴 네모(햇살) 세 개를 해 둘레에 붙여 보세요.', state: { pieces: [{ shape: 'semi', color: '주황', size: 'l', x: 280, y: 260, r: 0 }] }, target: { has: [{ shape: 'rect', color: '노랑', n: 3 }, { shape: 'semi', color: '주황', n: 1 }] }, difficulty: 0.15,
                hints: ['햇살은 해에서 뻗어 나가는 곧은 선이에요.', '노랑 긴 네모가 꼭 세 개인지 세어 보세요.', '노랑 긴 네모 셋을 붙여 해 둘레로 옮기고, 돌리기로 퍼지게 기울여요.'] },
              { prompt: '음악을 들으며 떠오른 기억을 판에서 계획하고 실제 도화지에 그린 뒤, 점검표에 표시하세요.', target: { selfCheck: ['음악을 들으며 그렸어요', '음악 느낌에 맞는 선을 골랐어요', '짝에게 떠오른 기억을 말했어요'], minPieces: 3 }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"같은 음악을 들었는데 친구 그림은 어떤가요?" 그림 서너 점을 칠판에 붙이고 견주어 본다. 같은 음악이라도 떠오르는 기억이 다르다는 것을 짚는다. 다음 시간에는 음악을 들으며 손으로 선을 따라 그린다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { cards: ['편안함', '신남'], slots: [{ id: 'e1', label: '느리고 잔잔한 음악' }, { id: 'e2', label: '빠르고 힘찬 음악' }] }, prompt: '음악과 어울리는 마음을 이어 보세요.', target: { match: { e1: '편안함', e2: '신남' } }, difficulty: 0.05 },
          { type: 'short', prompt: '"아침"을 듣고 떠오른 기억을 쓰세요.', difficulty: 0.1 },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '음악 기억 그림',
      items: [
        { type: 'short', prompt: '"아침"을 듣고 떠오른 때와 곳을 쓰세요.' },
        { type: 'choice', prompt: '잔잔한 음악에 어울리는 선은?', options: ['부드러운 물결선', '뾰족한 지그재그 선'], answer: '부드러운 물결선' },
        { type: 'draw', prompt: '음악을 들으며 떠오른 기억을 그리세요.' },
        { type: 'short', prompt: '내 그림에 쓴 색과 그 까닭을 쓰세요.' },
      ],
      easy: {
        note: '음악 느낌대로 그려요.',
        items: [
          { type: 'short', prompt: '떠오른 기억을 쓰세요.' },
          { type: 'choice', prompt: '잔잔한 음악은?', options: ['편안해요', '화나요'], answer: '편안해요' },
          { type: 'draw', prompt: '음악 그림을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '마음 눈금이 세 칸이고, 판에 꼭 필요한 모양과 색만 있어요.',
      base: '다섯 칸 눈금에서 고르고, 여러 모양 가운데서 골라요.',
      challenge: '모든 모양과 색 가운데서 골라 음악 느낌을 나타내요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 무엇을 그릴지 모른다 → 음악을 들으며 떠오른 색 하나부터 칠하게 한다. ② 친구 그림과 달라서 틀렸다고 여긴다 → 같은 음악도 떠오르는 기억이 다르다고 말해 준다. ③ 음악을 듣지 않고 그림만 그린다 → 음악이 바뀌는 곳에서 손을 잠깐 멈추게 한다. 음원은 학교가 이용 허락을 받은 것을 쓴다.',
  }));

  lessons.push(L(43, {
    title: '음악 따라 손으로 선 그리기',
    objective: '곡을 들으며 소리가 이어지는지 끊어지는지 가려 듣고, 그 느낌을 손짓과 선으로 나타낼 수 있다.',
    illustration: ART('a paper child drawing in the air with one finger while music plays, a long soft wavy ribbon line and a row of small bouncing dots floating out of a music box', '소리 선 그리기', [
      { motif: 'star', x: 120, y: 86, s: 0.6 }, { motif: 'flower', x: 400, y: 226, color: 'lavender' }, { motif: 'leaf', x: 90, y: 226 }]),
    safety: ['손으로 공중에 선을 그릴 때는 친구와 팔 하나만큼 떨어져요.', '크레파스는 다 쓰면 상자에 넣어 책상 안쪽에 둬요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"선생님이 소리를 두 가지로 낼게요. 손가락으로 따라 그려 보세요." 목소리로 \'우우우—\' 길게 이어 내고, 다음에는 \'톡, 톡, 톡\' 끊어 낸다. 이어지는 소리에서는 손이 쭉 미끄러지고, 끊어지는 소리에서는 손가락이 콕콕 찍힌다는 것을 함께 확인한다. 시연 단추로 소리와 선이 이어지는 모습을 보여 준다.',
        student: '선생님 소리를 듣고, 이어지는 소리는 손을 쭉, 끊어지는 소리는 손가락으로 콕콕 찍어 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '소리와 선', slots: [{ id: 's1', label: '우우우— 길게 이어져요' }], cards: ['부드러운 물결선', '톡톡 찍은 점'], shuffle: false }, sequence: [{ match: { s1: '부드러운 물결선' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 소리에 어울리는 선 찾기', minutes: 13, tool: 'mindmap',
            teacher: '"곡을 듣는 동안 손가락으로 공중에 선을 그려요. 다 듣고 나서 카드를 이어요." 차이콥스키 \'꽃의 왈츠\', 림스키코르사코프 \'왕벌의 비행\', 차이콥스키 \'사탕 요정의 춤\'을 30초씩 들려준다. 손을 움직이면 안 되는 줄 아는 학생에게 "손이 음악을 따라가는 것도 잘 듣는 방법이에요"라고 말해 준다. 둘째 문항에서 큰 소리를 이어지는 소리로 여기는 학생에게는 아주 작은 목소리로 \'우우우—\'를 길게 내어 들려준다.',
            task: '곡과 소리를 듣고 어울리는 선을 잇고, 이어지는 소리와 끊어지는 소리로 나누어요.',
            levels: CARD_LV(),
            items: [
              { prompt: '곡을 들으며 공중에 그린 선을 떠올려, 곡과 어울리는 선을 이어 보세요.', toolOptions: { mode: 'match', topic: '곡과 선', slots: [{ id: 's1', label: '꽃의 왈츠' }, { id: 's2', label: '왕벌의 비행' }, { id: 's3', label: '사탕 요정의 춤' }], cards: ['부드러운 물결선', '촘촘한 꼬불꼬불 선', '톡톡 찍은 점'] },
                target: { match: { s1: '부드러운 물결선', s2: '촘촘한 꼬불꼬불 선', s3: '톡톡 찍은 점' } }, difficulty: 0.15,
                hints: ['곡을 들을 때 손가락이 쭉 미끄러졌는지, 바쁘게 맴돌았는지, 콕콕 찍혔는지 떠올려 봐요.', '아직 맞지 않은 곡을 다시 들어 보세요. 소리가 길게 이어지나요, 톡톡 끊어지나요?', '꽃의 왈츠는 물결선, 왕벌의 비행은 꼬불꼬불 선, 사탕 요정의 춤은 톡톡 찍은 점이에요.'],
                levels: { easy: { prompt: '곡과 어울리는 선 두 짝을 이어 보세요.', toolOptions: { slots: [{ id: 's1', label: '꽃의 왈츠' }, { id: 's3', label: '사탕 요정의 춤' }], cards: ['부드러운 물결선', '톡톡 찍은 점'] }, target: { match: { s1: '부드러운 물결선', s3: '톡톡 찍은 점' } } } } },
              { prompt: '소리를 이어지는 소리와 끊어지는 소리로 나누어 보세요.', toolOptions: { topic: '소리의 모양', slots: ['이어져요', '끊어져요'], cards: ['미끄럼틀 쭈욱', '공 튀기기 통통', '바이올린 길게 켜기', '빗방울 톡톡'] },
                target: { sort: { '이어져요': ['미끄럼틀 쭈욱', '바이올린 길게 켜기'], '끊어져요': ['공 튀기기 통통', '빗방울 톡톡'] } }, difficulty: 0.15,
                hints: ['소리를 입으로 흉내 내 보세요. 숨이 끊기지 않고 이어지나요, 톡톡 끊기나요?', '아직 칸이 맞지 않은 소리를 손으로 따라 그려 보세요. 손이 쭉 가나요, 콕콕 찍히나요?', '미끄럼틀과 바이올린은 이어지는 소리, 공 튀기기와 빗방울은 끊어지는 소리예요.'],
                levels: { challenge: { prompt: '소리를 이어지는 소리와 끊어지는 소리로 나누어 보세요. 소리가 아닌 카드는 남겨요.', toolOptions: { cards: ['미끄럼틀 쭈욱', '공 튀기기 통통', '바이올린 길게 켜기', '빗방울 톡톡', '노란 크레파스'] } } } },
              { prompt: '곡 하나를 몰래 골라 손으로 공중에 선을 그려 보이면, 짝이 어느 곡인지 맞혀요. 바꾸어서도 해요. 다 했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 소리 선 악보 만들기', minutes: 14, tool: 'collage',
            teacher: '"들은 소리를 선으로 적으면 우리만의 악보가 돼요." 반원을 옆으로 이으면 물결선, 작은 동그라미를 띄엄띄엄 놓으면 톡톡 찍은 점이 된다는 것을 판에서 보여 준다. 판에서 만들어 본 뒤, 고른 곡을 다시 들으며 실제 도화지에 크레파스로 선 악보를 그린다. 점검표는 항목을 하나씩 해 보고 표시하게 한다.',
            task: '소리에 맞는 조각으로 판에 선 악보를 만들고, 실제 도화지에 크레파스로 그려요.',
            levels: {
              easy: { shapes: ['semi', 'circle', 'rect'], colors: ['파랑', '분홍', '노랑'] },
              base: { shapes: ['semi', 'circle', 'rect', 'triangle', 'star'], colors: ['파랑', '분홍', '노랑', '초록', '보라', '주황'] },
              challenge: {},
            },
            items: [
              { prompt: '\'꽃의 왈츠\'처럼 부드럽게 이어지는 소리예요. 파랑 반원 네 개를 옆으로 붙여 물결선을 만들어 보세요.', target: { has: [{ shape: 'semi', color: '파랑', n: 4 }] }, difficulty: 0.15,
                hints: ['이어지는 소리는 끊기지 않고 오르내리는 굽은 선으로 나타내요.', '반원 조각을 색별로 세어 보세요. 다른 색이 섞였거나 개수가 다르지 않나요?', '파랑 반원 넷을 옆으로 나란히 붙이고, 하나씩 돌려 물결처럼 이어요.'],
                levels: { challenge: { prompt: '\'꽃의 왈츠\'처럼 이어지다 반짝 끝나는 소리예요. 파랑 반원 네 개로 물결선을 만들고 끝에 노랑 별 하나를 붙여요.', target: { has: [{ shape: 'semi', color: '파랑', n: 4 }, { shape: 'star', color: '노랑', n: 1 }] } } } },
              { prompt: '\'사탕 요정의 춤\'처럼 톡톡 끊어지는 소리예요. 작은 분홍 동그라미 다섯 개를 띄엄띄엄 붙여 보세요.', target: { has: [{ shape: 'circle', color: '분홍', size: 's', n: 5 }] }, difficulty: 0.15,
                hints: ['끊어지는 소리는 하나하나 떨어진 작은 점으로 나타내요.', '동그라미의 크기와 색, 개수를 다시 세어 보세요.', '작은 크기로 분홍 동그라미 다섯 개를 붙이고, 사이를 조금씩 띄워요.'],
                levels: { easy: { prompt: '\'사탕 요정의 춤\'처럼 톡톡 끊어지는 소리예요. 작은 분홍 동그라미 세 개를 띄엄띄엄 붙여 보세요.', target: { has: [{ shape: 'circle', color: '분홍', size: 's', n: 3 }] } } } },
              { prompt: '곡 하나를 골라 판에서 선 악보를 계획하고, 실제 도화지에 크레파스로 그린 뒤 점검표에 표시하세요.', target: { selfCheck: ['곡을 다시 들으며 선을 그렸어요', '이어지는 소리와 끊어지는 소리를 다르게 그렸어요', '짝에게 내 선 악보를 보여 주었어요'], minPieces: 3 }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"친구의 선 악보를 보고 어느 곡인지 맞혀 볼까요?" 서너 명의 도화지를 실물 화상기로 보여 주고 반 친구들이 곡을 맞힌다. 같은 곡이라도 친구마다 선이 조금씩 다르다는 것을 짚는다. 다음 시간에는 곡의 흐름에 따라 몸으로 이야기를 꾸민다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '소리와 선', slots: [{ id: 'e1', label: '통통 튀는 공 소리' }, { id: 'e2', label: '길게 부는 피리 소리' }] , cards: ['톡톡 찍은 점', '부드러운 물결선'] }, prompt: '소리와 어울리는 선을 이어 보세요.', target: { match: { e1: '톡톡 찍은 점', e2: '부드러운 물결선' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '음악을 들으며 손으로 선을 따라 그리는 것은?', options: ['음악을 잘 듣는 한 방법이에요', '음악을 듣지 않는 거예요', '하면 안 되는 일이에요'], answer: 0, difficulty: 0.05, explain: '손이 음악을 따라가면 소리의 모양을 더 잘 느낄 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '소리 선 악보',
      items: [
        { type: 'table', prompt: '곡을 듣고 어울리는 선을 칸에 그리세요.', columns: ['곡', '내가 그린 선'], cells: [['꽃의 왈츠', ''], ['왕벌의 비행', ''], ['사탕 요정의 춤', '']] },
        { type: 'choice', prompt: '톡톡 끊어지는 소리에 어울리는 선은?', options: ['띄엄띄엄 찍은 점', '길게 이은 물결선'], answer: '띄엄띄엄 찍은 점' },
        { type: 'draw', prompt: '내가 고른 곡의 선 악보를 그리세요.' },
        { type: 'short', prompt: '내 선 악보에서 소리가 바뀌는 곳을 쓰세요.' },
      ],
      easy: {
        note: '이어지면 쭉, 끊어지면 콕콕.',
        items: [
          { type: 'choice', prompt: '미끄럼틀 쭈욱 소리는?', options: ['이어져요', '끊어져요'], answer: '이어져요' },
          { type: 'choice', prompt: '빗방울 톡톡 소리는?', options: ['끊어져요', '이어져요'], answer: '끊어져요' },
          { type: 'draw', prompt: '물결선을 길게 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '두 짝만 잇고, 판에 반원·동그라미·네모와 세 가지 색만 있어요.',
      base: '세 짝을 잇고, 여러 모양과 색 가운데서 골라 선 악보를 만들어요.',
      challenge: '소리가 아닌 카드를 가려내고, 물결선 끝에 끝나는 소리까지 붙여요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 이어지는 소리와 큰 소리를 헷갈린다 → 작은 소리로 길게, 큰 소리로 톡톡 끊어 내어 견주어 들려준다. ② 공중에 선을 그리다 팔이 커져 부딪친다 → 손가락 하나로 가슴 앞에서만 그린다. ③ 판 조각만 붙이고 도화지에 옮기지 않는다 → 판은 계획이고 작품은 도화지라는 것을 다시 말해 준다. 음원은 학교가 이용 허락을 받은 것을 쓴다.',
  }));

  lessons.push(L(44, {
    title: '곡의 흐름 따라 몸으로 이야기 꾸미기',
    objective: '그리그 \'산왕의 궁전에서\'가 점점 빨라지고 세지는 흐름을 장면 차례로 놓고, 그 흐름에 맞추어 모둠이 몸으로 이야기를 꾸밀 수 있다.',
    illustration: ART('paper children tiptoeing quietly into a mysterious mountain cave, then running out quickly with motion lines, music notes growing bigger and bigger', '점점 빠르게 점점 세게', [
      { motif: 'mountain', x: 380, y: 200 }, { motif: 'star', x: 120, y: 86, s: 0.6 }, { motif: 'tree', x: 90, y: 214 }]),
    safety: ['움직이기 전에 두 팔을 벌려 친구와 닿지 않는지 살펴요.', '뛰는 장면도 제자리에서 발을 가볍게 굴러 나타내고, 교실을 달리지 않아요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"이 곡을 처음부터 끝까지 들어 보세요. 처음과 끝이 어떻게 달라지나요?" 그리그 \'페르 귄트\' 중 \'산왕의 궁전에서\'를 끝까지(2분 남짓) 들려준다. 듣는 동안 손바닥으로 무릎을 가볍게 쳐서 박을 느끼게 한다. 손이 점점 바빠졌다는 말이 나오면 시연 단추로 처음과 끝 장면이 놓이는 모습을 보여 준다.',
        student: '곡을 들으며 무릎을 가볍게 치고, 손이 어떻게 바뀌는지 느껴 봐요.',
        demo: { tool: 'story', options: { cards: [{ id: 'd1', text: '살금살금 걸어요', motif: 'leaf' }, { id: 'd2', text: '후다닥 뛰어요', motif: 'cloud' }], slots: 2, shuffle: false }, sequence: [{ order: ['d1', 'd2'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 곡의 흐름 차례 놓기', minutes: 11, tool: 'story',
            teacher: '"곡이 어떻게 바뀌었는지 장면 카드로 놓아요." 곡을 한 번 더 들으며 바뀌는 곳에서 교사가 손을 든다. 같은 가락이 되풀이되면서 빠르기와 셈여림만 바뀐다는 것을 짚는다. "처음부터 빨랐어요"라고 하는 학생에게는 첫 30초만 다시 들려준다.',
            task: '곡의 흐름에 맞게 장면 카드를 차례대로 놓고, 곡의 처음과 끝을 말풍선에 채워요.',
            levels: CARD_LV(),
            items: [
              { prompt: '\'산왕의 궁전에서\'의 흐름대로 장면을 놓아 보세요.', toolOptions: { slots: 4, cards: [{ id: 'm1', text: '살금살금 몰래 들어가요', motif: 'leaf' }, { id: 'm2', text: '발걸음이 빨라져요', motif: 'flower' }, { id: 'm3', text: '쫓겨서 후다닥 뛰어요', motif: 'cloud' }, { id: 'm4', text: '쾅! 하고 끝나요', motif: 'star' }] },
                target: { order: ['m1', 'm2', 'm3', 'm4'] }, difficulty: 0.15,
                hints: ['곡의 처음에 무릎을 칠 때 손이 어땠는지, 끝에서는 어땠는지 떠올려 봐요.', '아직 자리가 맞지 않은 장면을 보세요. 곡은 느린 데서 빠른 데로 가나요, 그 반대인가요?', '살금살금 → 발걸음이 빨라져요 → 후다닥 뛰어요 → 쾅! 끝나요 차례예요.'],
                levels: { easy: { prompt: '\'산왕의 궁전에서\'의 흐름대로 장면 세 개를 놓아 보세요.', toolOptions: { slots: 3, cards: [{ id: 'm1', text: '살금살금 몰래 들어가요', motif: 'leaf' }, { id: 'm3', text: '쫓겨서 후다닥 뛰어요', motif: 'cloud' }, { id: 'm4', text: '쾅! 하고 끝나요', motif: 'star' }] }, target: { order: ['m1', 'm3', 'm4'] } } } },
              { prompt: '준호가 곡을 듣고 말했어요. 말풍선 빈칸에 알맞은 말을 넣어 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'f1', who: '준호', motif: 'leaf', label: '곡의 처음은 ___.' }, { id: 'f2', who: '준호', motif: 'cloud', label: '곡의 끝은 ___.' }], cards: ['여리고 느려요', '세고 빨라요', '처음과 똑같아요'] },
                target: { fill: { f1: '여리고 느려요', f2: '세고 빨라요' } }, difficulty: 0.15,
                hints: ['곡의 처음과 끝에서 빠르기와 소리 크기가 어땠는지 견주어 봐요.', '아직 맞지 않은 말풍선을 읽고, 그 부분을 들을 때 무릎 치던 손을 떠올려 보세요.', '처음은 여리고 느려요, 끝은 세고 빨라요.'],
                conclude: '\'산왕의 궁전에서\'는 같은 가락이 되풀이되며 점점 빠르고 세져요.' },
              { prompt: '곡을 다시 들으며 손으로 이야기를 해 봐요. 처음엔 손가락으로 살금살금, 끝엔 두 손으로 후다닥. 다 했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 걸음 리듬 듣고 몸 이야기 꾸미기', minutes: 15, tool: 'keyboard',
            teacher: '"살금살금 걸음과 후다닥 뛰는 걸음을 리듬으로 들어 봐요." 리듬을 블록으로 놓고 손으로 무릎을 쳐 본다. 이어서 모둠(4명)이 \'몰래 들어갔다가 쫓겨 나오는\' 몸 이야기를 5분 동안 꾸민다. 곡의 처음 30초와 끝 30초에 맞추어 모둠마다 1분씩 보여 준다. 움직임은 모둠 자리 둘레에서만 한다.',
            task: '두 가지 걸음 리듬을 듣고 블록으로 놓은 뒤, 모둠이 곡에 맞추어 몸 이야기를 꾸며 보여 주어요.',
            levels: RHY_LV(),
            items: [
              { prompt: '살금살금 몰래 걷는 리듬이에요. 리듬 듣기를 누르고 들은 리듬을 블록으로 놓아 보세요.', toolOptions: { pattern: ['q', 'qr', 'q', 'qr', 'q', 'qr', 'h'] }, target: { rhythm: ['q', 'qr', 'q', 'qr', 'q', 'qr', 'h'] }, difficulty: 0.15 },
              { prompt: '쫓겨서 후다닥 뛰는 리듬이에요. 리듬 듣기를 누르고 들은 리듬을 블록으로 놓아 보세요.', toolOptions: { pattern: ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'h'] }, target: { rhythm: ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'h'] }, difficulty: 0.2,
                predict: { q: '후다닥 뛰는 걸음은 어떤 음표가 어울릴까요?', options: ['짧은 음표', '긴 음표'], answer: 0 },
                conclude: '빠른 걸음은 짧은 음표가 촘촘히, 느린 걸음은 쉼이 있는 긴 박으로 나타나요.',
                levels: { easy: { prompt: '쫓겨서 뛰는 리듬이에요. 리듬 듣기를 누르고 들은 리듬을 블록으로 놓아 보세요.', toolOptions: { pattern: ['e', 'e', 'e', 'e', 'q', 'q', 'e', 'e', 'e', 'e', 'q', 'q'] }, target: { rhythm: ['e', 'e', 'e', 'e', 'q', 'q', 'e', 'e', 'e', 'e', 'q', 'q'] } } } },
              { prompt: '모둠이 곡에 맞추어 몰래 들어갔다 쫓겨 나오는 몸 이야기를 꾸며 보여 주어요. 다 했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"다른 모둠의 몸 이야기에서 곡과 잘 어울린 움직임은 무엇이었나요?" 두세 명이 말한다. 같은 곡인데 모둠마다 다른 이야기가 나왔다는 것을 짚는다. 책상과 의자를 제자리로 옮긴다. 다음 시간에는 같은 곡에 서로 다르게 반응한 점을 찾아본다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { slots: 4, cards: [{ id: 'x1', text: '신나게 놀아요', motif: 'sun' }, { id: 'x2', text: '하품을 해요', motif: 'cloud' }, { id: 'x3', text: '눈이 스르르 감겨요', motif: 'moon' }, { id: 'x4', text: '새근새근 자요', motif: 'star' }] }, prompt: '점점 느리고 여려지는 곡이에요. 곡의 흐름대로 장면을 놓아 보세요.', target: { order: ['x1', 'x2', 'x3', 'x4'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '\'산왕의 궁전에서\'는 끝으로 갈수록 어떻게 되나요?', options: ['빠르고 세져요', '느리고 여려져요', '처음과 똑같아요'], answer: 0, difficulty: 0.1, explain: '같은 가락이 되풀이되며 점점 빠르고 세져요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '점점 빠르게 점점 세게',
      items: [
        { type: 'table', prompt: '곡의 처음과 끝을 견주어 쓰세요.', columns: ['', '빠르기', '셈여림'], cells: [['처음', '', ''], ['끝', '', '']] },
        { type: 'figure', wide: true, prompt: '곡의 흐름대로 카드 이름을 위 칸 1, 2, 3에 옮겨 쓰세요.', tool: 'story', figures: [{ options: { cards: [{ id: 'm3', text: '쫓겨서 후다닥 뛰어요', motif: 'cloud' }, { id: 'm4', text: '쾅! 하고 끝나요', motif: 'star' }, { id: 'm1', text: '살금살금 몰래 들어가요', motif: 'leaf' }], slots: 3, shuffle: false }, caption: '' }], answer: '살금살금-후다닥-쾅' },
        { type: 'draw', prompt: '우리 모둠 몸 이야기의 한 장면을 그리세요.' },
        { type: 'short', prompt: '몸 이야기를 하며 곡의 어디가 가장 재미있었는지 쓰세요.' },
      ],
      easy: {
        note: '처음엔 살금살금, 끝엔 후다닥.',
        items: [
          { type: 'choice', prompt: '곡의 처음은?', options: ['여리고 느려요', '세고 빨라요'], answer: '여리고 느려요' },
          { type: 'choice', prompt: '곡의 끝은?', options: ['세고 빨라요', '여리고 느려요'], answer: '세고 빨라요' },
          { type: 'draw', prompt: '후다닥 뛰는 내 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '장면 세 개를 놓고, 리듬 판에 박 수가 보이며 뛰는 리듬이 짧아요.',
      base: '장면 네 개를 놓고, 8분음표가 이어지는 리듬을 귀로 듣고 놓아요.',
      challenge: '쉼표 블록이 더 많은 판에서 리듬을 놓고, 모둠 몸 이야기에서 신호를 주는 역할을 맡아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 곡이 빨라지는 것만 듣고 세지는 것은 놓친다 → 무릎 치기를 처음엔 손가락으로, 끝엔 손바닥 전체로 바꾸며 함께 친다. ② 몸 이야기에서 신나서 뛰어다닌다 → 뛰는 장면도 제자리에서 발을 구르는 것으로 한다고 미리 정한다. ③ 모둠 안에서 역할을 못 정한다 → 몰래 들어가는 사람·지키는 사람 두 역할만 주고 바꾸어 한다. 몸이 불편한 학생은 앉아서 손과 표정으로 이야기한다.',
  }));

  // ───────────────────────── 45~48차시: 서로 다른 반응 나누기·단원 정리(감상 나누고 다양성 받아들이기) ─────────────────────────

  lessons.push(L(45, {
    title: '같은 곡에 서로 다르게 반응한 점 찾기',
    objective: '같은 곡을 듣고 친구와 내가 다르게 반응한 점을 찾아 말하고, 다른 반응을 존중하는 말로 답할 수 있다.',
    illustration: ART('paper children listening to the same music from one speaker: one waving hands like a fish, one drawing blue bubbles, one talking about twinkling stars, glass aquarium shapes around them', '저마다 다르게', [
      { motif: 'star', x: 120, y: 86, s: 0.6 }, { motif: 'flower', x: 400, y: 226, color: 'sky' }, { motif: 'leaf', x: 90, y: 226 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"생상스의 \'수족관\'을 들려줄게요. 하고 싶은 방법으로 반응해 보세요. 자리에서 움직여도, 공책에 그려도, 떠오른 것을 짝에게 말해도 좋아요." 1분 들려준 뒤 "몸으로 한 사람? 그린 사람? 말한 사람?" 하고 손을 들게 하여 칠판에 바를 정(正) 자로 센다. 반응이 여러 갈래로 나뉜 것을 함께 본다. 시연 단추로 반응이 방법에 따라 나뉘는 모습을 보여 준다.',
        student: '\'수족관\'을 듣고 몸으로, 그림으로, 말로 가운데 하고 싶은 방법으로 반응해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '반응한 방법', slots: ['몸으로', '그림으로'], cards: ['손을 물고기처럼 흔들어요', '파란 물방울을 그려요'], shuffle: false }, sequence: [{ sort: { '몸으로': ['손을 물고기처럼 흔들어요'], '그림으로': ['파란 물방울을 그려요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 반응한 방법과 떠올린 것 견주기', minutes: 13, tool: 'mindmap',
            teacher: '"우리 반 친구들이 \'수족관\'을 듣고 한 반응이에요. 어떤 방법으로 반응했나요?" 카드를 소리 내어 읽고 나눈다. 둘째 문항 전에 "같은 곡을 들으면 모두 같은 것이 떠오를까요?" 하고 예상을 묻는다. "음악을 듣고 느끼는 것은 모두 같아야 해요"라고 하는 학생에게 서아와 준호가 둘 다 곡을 끝까지 잘 들었는데도 떠올린 것이 달랐다는 것을 짚는다.',
            task: '친구들의 반응을 방법에 따라 나누고, 서로 다르게 떠올린 것을 견주어요.',
            levels: CARD_LV(),
            items: [
              { prompt: '친구들의 반응을 반응한 방법에 따라 나누어 보세요.', toolOptions: { topic: '반응한 방법', slots: ['몸으로', '그림으로', '말로'], cards: ['두 손을 물고기처럼 흔들었어요', '파란 물방울을 그렸어요', '"별이 반짝이는 것 같아" 했어요', '발끝으로 살금살금 걸었어요', '초록 물풀을 그렸어요', '"꿈속 같아" 했어요'] },
                target: { sort: { '몸으로': ['두 손을 물고기처럼 흔들었어요', '발끝으로 살금살금 걸었어요'], '그림으로': ['파란 물방울을 그렸어요', '초록 물풀을 그렸어요'], '말로': ['"별이 반짝이는 것 같아" 했어요', '"꿈속 같아" 했어요'] } }, difficulty: 0.15,
                levels: { easy: { prompt: '친구들의 반응을 몸으로 한 것과 그림으로 한 것으로 나누어 보세요.', toolOptions: { slots: ['몸으로', '그림으로'], cards: ['두 손을 물고기처럼 흔들었어요', '파란 물방울을 그렸어요', '발끝으로 살금살금 걸었어요', '초록 물풀을 그렸어요'] }, target: { sort: { '몸으로': ['두 손을 물고기처럼 흔들었어요', '발끝으로 살금살금 걸었어요'], '그림으로': ['파란 물방울을 그렸어요', '초록 물풀을 그렸어요'] } } } } },
              { prompt: '\'수족관\'을 듣고 서아는 바다를, 준호는 밤하늘을 떠올렸어요. 누가 떠올린 것인지 나누어 보세요.', toolOptions: { topic: '떠올린 것', slots: ['서아(바다)', '준호(밤하늘)'], cards: ['물고기가 헤엄쳐요', '별이 반짝여요', '파도가 출렁여요', '달이 떠 있어요'] },
                target: { sort: { '서아(바다)': ['물고기가 헤엄쳐요', '파도가 출렁여요'], '준호(밤하늘)': ['별이 반짝여요', '달이 떠 있어요'] } }, difficulty: 0.1,
                hints: ['카드에 나온 것이 바다에 있는지 밤하늘에 있는지 생각해 봐요.', '아직 칸이 맞지 않은 카드를 읽어 보세요. 물속에서 볼 수 있나요, 하늘을 올려다봐야 하나요?', '물고기와 파도는 서아의 바다, 별과 달은 준호의 밤하늘이에요.'],
                predict: { q: '같은 곡을 들으면 모두 같은 것이 떠오를까요?', options: ['모두 같아요', '다를 수 있어요'], answer: 1 },
                conclude: '같은 곡을 잘 들어도 떠오르는 것은 저마다 다를 수 있어요.' },
              { prompt: '친구가 나와 다르게 반응했을 때 할 말만 골라 보세요.', toolOptions: { mode: 'pick', basket: '존중하는 말', cards: ['그렇게도 들리는구나', '네 생각을 더 들려줘', '틀렸어, 그건 아니야', '내 생각만 맞아'] },
                target: { pick: ['그렇게도 들리는구나', '네 생각을 더 들려줘'] }, difficulty: 0.05 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 다른 반응을 만났을 때', minutes: 13, tool: 'emotion',
            teacher: '"친구가 나와 전혀 다르게 느꼈다면 어떻게 할까요?" 상황을 읽고 고른 뒤 결과를 함께 본다. 둘째 문항에서는 나만 다르게 느꼈을 때도 까닭을 들어 말해도 된다는 것을 짚는다. 셋째 문항은 짝과 실제로 \'수족관\'에 한 반응을 견주는 것이다. 짝 반응을 바꾸려 하지 말고 "왜 그렇게 느꼈어?"를 물어보게 한다.',
            task: '다르게 느낀 친구에게 할 행동을 고르고, 짝과 내가 다르게 반응한 점을 찾아 말해요.',
            levels: EMO_LV(),
            items: [
              { prompt: '도윤이와 내가 같은 곡을 다르게 느꼈어요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '도윤', situation: '\'캉캉\'을 듣고 도윤이는 "시끄러워서 싫어" 했는데, 나는 아주 신났어요.', choices: [
                { id: 'insist', text: '"아니야, 신나는 곡이야" 하고 우겨요', result: '도윤이가 입을 꾹 다물어요.', mood: '속상함', why: '도윤이가 느낀 것도 도윤이에게는 참말이에요.' },
                { id: 'ask', text: '"왜 시끄럽게 들렸어?" 하고 물어요', result: '북소리가 커서 놀랐대요. 나도 몰랐던 소리를 알게 돼요.', mood: '편안함' },
                { id: 'turn', text: '못 들은 척 고개를 돌려요', result: '서로의 생각을 알 수 없어요.', mood: '걱정', why: '고개를 돌리면 도윤이 생각을 들을 수 없어요.' }] }, target: { choice: 'ask' }, difficulty: 0.1 },
              { prompt: '지우만 친구들과 다르게 느꼈어요. 지우는 어떻게 하면 좋을까요?', toolOptions: { mode: 'branch', who: '지우', situation: '친구들은 모두 \'백조\'가 편안하다고 하는데, 지우는 조금 슬프게 들렸어요.', choices: [
                { id: 'hide', text: '친구들처럼 "편안해" 하고 말해요', result: '친구들은 지우가 느낀 것을 몰라요.', mood: '걱정', why: '내가 느낀 것을 숨기면 친구들은 내 생각을 알 수 없어요.' },
                { id: 'say', text: '"나는 조금 슬펐어. 소리가 길고 낮아서" 해요', result: '친구들이 고개를 끄덕이며 다시 들어 봐요.', mood: '뿌듯함' },
                { id: 'quit', text: '다시는 감상하지 않겠다고 해요', result: '좋은 곡을 더 들을 수 없어요.', mood: '속상함', why: '다르게 느낀 것은 잘못이 아니에요.' }] }, target: { choice: 'say' }, difficulty: 0.15 },
              { prompt: '짝과 \'수족관\'을 듣고 한 반응을 말하고, 서로 다른 점 하나를 찾아 말해요. 다 했으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"짝과 다른 점을 찾아보니 어떤 마음이 들었나요?" 두세 명이 말한다. 짝 덕분에 새로 알게 된 소리가 있다면 함께 말하게 한다. 다음 시간에는 모둠 친구들의 감상 기록을 견주어 본다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '반응한 방법', slots: ['몸으로', '말로'], cards: ['어깨를 들썩였어요', '"비 오는 날 같아" 했어요', '제자리에서 빙글 돌았어요'] }, prompt: '\'캉캉\'을 들은 친구들의 반응을 방법에 따라 나누어 보세요.', target: { sort: { '몸으로': ['어깨를 들썩였어요', '제자리에서 빙글 돌았어요'], '말로': ['"비 오는 날 같아" 했어요'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '친구가 같은 곡을 나와 다르게 느꼈을 때 알맞은 생각은?', options: ['저마다 다르게 느낄 수 있어요', '친구가 잘못 들었어요', '내가 잘못 들었어요'], answer: 0, difficulty: 0.05, explain: '같은 곡도 사람마다 다르게 느낄 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '저마다 다르게',
      items: [
        { type: 'table', prompt: '\'수족관\'을 듣고 나와 짝의 반응을 쓰세요.', columns: ['', '나', '짝'], cells: [['반응한 방법', '', ''], ['떠올린 것', '', '']] },
        { type: 'choice', prompt: '친구가 나와 다르게 느꼈을 때 할 말은?', options: ['"그렇게도 들리는구나"', '"틀렸어"'], answer: '"그렇게도 들리는구나"' },
        { type: 'short', prompt: '짝과 내가 다르게 반응한 점을 쓰세요.' },
        { type: 'draw', prompt: '\'수족관\'을 듣고 떠오른 것을 그리세요.' },
      ],
      easy: {
        note: '같은 곡도 다르게 느낄 수 있어요.',
        items: [
          { type: 'choice', prompt: '물고기처럼 손을 흔든 것은?', options: ['몸으로', '그림으로'], answer: '몸으로' },
          { type: 'choice', prompt: '친구 생각이 다를 때는?', options: ['까닭을 물어요', '우겨요'], answer: '까닭을 물어요' },
          { type: 'draw', prompt: '떠오른 것을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '반응을 두 갈래로만 나누고, 마음 날씨는 바로 알려 줘요.',
      base: '반응을 세 갈래로 나누고, 상황마다 알맞은 행동을 골라요.',
      challenge: '짝과 다른 점을 찾은 뒤, 짝이 그렇게 느낀 까닭을 짝의 말로 다시 말해 줘요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 친구 반응을 웃거나 놀린다 → 오늘의 약속 "다른 것은 틀린 것이 아니에요"를 칠판에 적고 시작한다. ② 남과 같게 말하려고 자기 느낌을 숨긴다 → 교사가 먼저 반 친구들과 다른 느낌을 말해 본보기를 보인다. ③ 반응을 하나도 못 한다 → 눈을 감고 듣기만 한 것도 반응이라고 인정하고, 떠오른 색 하나를 말하게 한다. 음원은 학교가 이용 허락을 받은 것을 쓴다.',
  }));

  lessons.push(L(46, {
    title: '모둠 감상 기록 견주고 그래프로 나타내기',
    objective: '친구들의 감상 기록에서 같은 점과 다른 점을 찾고, 반응한 방법을 그림그래프로 나타내어 읽을 수 있다.',
    illustration: ART('four paper children at a round table comparing small listening record cards, a simple picture graph with paper person icons pinned on the board behind them', '모둠 감상 기록', [
      { motif: 'star', x: 120, y: 86, s: 0.6 }, { motif: 'tree', x: 400, y: 214 }, { motif: 'flower', x: 110, y: 226, color: 'peach' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"슈만의 \'즐거운 농부\'를 들려줄게요. 다 듣고 감상 기록 카드에 반응한 방법, 떠올린 것, 마음을 한 줄씩 써요." 곡을 한 번(1분 남짓) 들려준 뒤 카드를 쓰게 한다. 시연 단추로 두 친구의 기록에서 같은 점과 다른 점이 나뉘는 모습을 보여 준다.',
        student: '\'즐거운 농부\'를 듣고, 감상 기록 카드에 반응한 방법·떠올린 것·마음을 써 봐요.',
        demo: { tool: 'mindmap', options: { topic: '두 친구의 기록', slots: ['같은 점', '다른 점'], cards: ['둘 다 끝까지 들었어요', '한 명은 걷고 한 명은 그렸어요'], shuffle: false }, sequence: [{ sort: { '같은 점': ['둘 다 끝까지 들었어요'], '다른 점': ['한 명은 걷고 한 명은 그렸어요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 감상 기록에서 같은 점 다른 점 찾기', minutes: 13, tool: 'mindmap',
            teacher: '"민지와 하준이의 감상 기록이에요." 칠판에 두 기록을 붙인다(민지: 제자리 걷기·소풍 가는 길·신남 / 하준: 손뼉 치기·밭을 가는 농부·신남). "둘 다 신났는데, 무엇이 달랐나요?" 카드를 나눈 뒤 모둠(4명)이 각자 쓴 기록 카드를 가운데 모아 같은 점 하나, 다른 점 하나를 찾는다. 다른 점을 말할 때 "누가 틀렸어요"가 아니라 "이렇게 달랐어요"로 말하게 한다.',
            task: '두 친구의 감상 기록에서 같은 점과 다른 점을 찾고, 모둠 기록도 견주어요.',
            levels: CARD_LV(),
            items: [
              { prompt: '민지(걷기·소풍·신남)와 하준(손뼉·농부·신남)의 기록이에요. 같은 점과 다른 점으로 나누어 보세요.', toolOptions: { topic: '두 친구의 기록', slots: ['같은 점', '다른 점'], cards: ['둘 다 신난다고 했어요', '민지는 걷고, 하준이는 손뼉을 쳤어요', '민지는 소풍을, 하준이는 농부를 떠올렸어요'] },
                target: { sort: { '같은 점': ['둘 다 신난다고 했어요'], '다른 점': ['민지는 걷고, 하준이는 손뼉을 쳤어요', '민지는 소풍을, 하준이는 농부를 떠올렸어요'] } }, difficulty: 0.15,
                hints: ['카드를 읽고 \'둘 다\'인지, 두 사람이 따로따로인지 살펴봐요.', '아직 칸이 맞지 않은 카드에서 두 사람이 한 것이 같은지 다른지 견주어 보세요.', '신난다고 한 것은 같은 점, 반응한 방법과 떠올린 것은 다른 점이에요.'],
                levels: { challenge: { prompt: '민지(걷기·소풍·신남)와 하준(손뼉·농부·신남)의 기록이에요. 나누어 보고, 기록에 없는 카드는 남겨요.', toolOptions: { cards: ['둘 다 신난다고 했어요', '민지는 걷고, 하준이는 손뼉을 쳤어요', '민지는 소풍을, 하준이는 농부를 떠올렸어요', '하준이가 더 잘 들었어요'] } } } },
              { prompt: '지우(그림·새·편안함)와 도윤(그림·트랙터·신남)의 기록이에요. 같은 점과 다른 점으로 나누어 보세요.', toolOptions: { topic: '두 친구의 기록', slots: ['같은 점', '다른 점'], cards: ['둘 다 그림으로 반응했어요', '지우는 편안하고, 도윤이는 신났어요', '지우는 새를, 도윤이는 트랙터를 떠올렸어요'] },
                target: { sort: { '같은 점': ['둘 다 그림으로 반응했어요'], '다른 점': ['지우는 편안하고, 도윤이는 신났어요', '지우는 새를, 도윤이는 트랙터를 떠올렸어요'] } }, difficulty: 0.15,
                hints: ['기록의 세 칸(반응한 방법·떠올린 것·마음)을 하나씩 견주어 봐요.', '아직 칸이 맞지 않은 카드를 보세요. 두 사람의 기록 칸이 같나요?', '그림으로 반응한 것은 같은 점, 마음과 떠올린 것은 다른 점이에요.'],
                predict: { q: '같은 곡을 들은 두 친구의 마음은 늘 같을까요?', options: ['늘 같아요', '다를 수 있어요'], answer: 1 },
                conclude: '같은 곡을 같은 방법으로 들어도 마음과 떠올린 것은 다를 수 있어요.' },
              { prompt: '모둠 친구들의 감상 기록 카드를 가운데 모아, 같은 점 하나와 다른 점 하나를 찾아 모둠 판에 써요. 다 했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 반응한 방법 그래프', minutes: 13, tool: 'chart',
            teacher: '"어떤 방법으로 반응한 친구가 몇 명인지 그래프로 나타내요." 먼저 하늘 모둠의 표로 그림그래프를 완성하고, 다른 반 그래프를 읽는다. 이어서 우리 반이 \'즐거운 농부\'에 반응한 방법을 손을 들어 세어 칠판 표에 적는다. 가장 많은 방법이 \'좋은 방법\'이라는 뜻은 아니라는 것을 꼭 짚는다.',
            task: '반응한 방법을 조사한 표를 그림그래프로 나타내고, 그래프를 읽어요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '하늘 모둠이 반응한 방법을 조사한 표예요. 사람 수만큼 그림을 그려 그래프를 완성하세요.', toolOptions: { type: 'picture', title: '하늘 모둠이 반응한 방법', data: [['몸으로', 3], ['그림으로', 4], ['말로', 2]], unit: '명', xLabel: '방법', yLabel: '사람 수', icon: 'person', icons: [{ value: 1, name: '1명' }] }, target: { build: true }, difficulty: 0.1,
                levels: {
                  easy: { prompt: '하늘 모둠이 반응한 방법이에요. 몸으로 줄은 그려 두었어요. 나머지 줄을 사람 수만큼 그려 보세요.', toolOptions: { given: [0] } },
                  challenge: { prompt: '우리 반 전체 표예요. 큰 그림(5명)과 작은 그림(1명)으로 그래프를 완성하세요.', toolOptions: { title: '우리 반이 반응한 방법', data: [['몸으로', 11], ['그림으로', 8], ['말로', 6]], icons: [{ value: 5, name: '5명' }, { value: 1, name: '1명' }] } },
                } },
              { prompt: '그래프를 보고 가장 많은 친구가 고른 반응 방법을 골라 보세요.', toolOptions: { type: 'picture', mode: 'read', title: '이웃 반이 반응한 방법', data: [['몸으로', 9], ['그림으로', 7], ['말로', 5]], unit: '명', icon: 'person', icons: [{ value: 1, name: '1명' }], question: '가장 많은 친구가 고른 방법은?', choices: ['몸으로', '그림으로', '말로'] }, target: { pick: 0 }, difficulty: 0.1 },
              { prompt: '그래프를 보고 그림으로 반응한 친구가 몇 명인지 쓰세요.', toolOptions: { type: 'picture', mode: 'read', title: '바다 모둠이 반응한 방법', data: [['몸으로', 2], ['그림으로', 5], ['말로', 3]], unit: '명', icon: 'person', icons: [{ value: 1, name: '1명' }], question: '그림으로 반응한 친구는 몇 명인가요?', input: true }, target: { value: 5 }, difficulty: 0.15 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"그래프에서 가장 적은 방법으로 반응한 친구도 곡을 잘 들은 걸까요?" 두세 명이 까닭을 말한다. 모둠 판에 쓴 같은 점·다른 점을 모둠마다 한 문장씩 발표한다. 다음 시간에는 다시 듣고 싶은 곡을 골라 까닭을 말한다.',
        exitTicket: [
          { type: 'tool', tool: 'chart', options: { type: 'picture', mode: 'read', title: '구름 모둠이 반응한 방법', data: [['몸으로', 4], ['그림으로', 2], ['말로', 3]], unit: '명', icon: 'person', icons: [{ value: 1, name: '1명' }], question: '가장 적은 친구가 고른 방법은?', choices: ['몸으로', '그림으로', '말로'] }, prompt: '그래프를 보고 가장 적은 친구가 고른 방법을 골라 보세요.', target: { pick: 1 }, difficulty: 0.1 },
          { type: 'choice', prompt: '두 친구의 감상 기록이 다를 때 알맞은 말은?', options: ['"이렇게 달랐어요"', '"한 명이 틀렸어요"', '"둘 다 틀렸어요"'], answer: 0, difficulty: 0.05, explain: '감상은 저마다 다를 수 있어서 틀린 것이 아니라 다른 거예요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '모둠 감상 기록',
      items: [
        { type: 'table', prompt: '모둠 친구들의 감상 기록을 쓰세요.', columns: ['친구', '반응한 방법', '떠올린 것', '마음'], rows: 4 },
        { type: 'table', prompt: '반응한 방법마다 사람 수를 쓰세요.', columns: ['몸으로', '그림으로', '말로'], cells: [['', '', '']] },
        { type: 'short', prompt: '모둠 기록에서 같은 점 하나를 쓰세요.' },
        { type: 'short', prompt: '모둠 기록에서 다른 점 하나를 쓰세요.' },
      ],
      easy: {
        note: '다른 것은 틀린 것이 아니에요.',
        items: [
          { type: 'short', prompt: '내가 반응한 방법을 쓰세요.' },
          { type: 'choice', prompt: '둘 다 신났다면?', options: ['같은 점', '다른 점'], answer: '같은 점' },
          { type: 'draw', prompt: '\'즐거운 농부\'를 듣고 떠오른 것을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '그래프 한 줄을 미리 그려 두어 나머지 줄만 그려요.',
      base: '작은 그림으로 모든 줄을 그리고, 그래프를 읽어 답해요.',
      challenge: '우리 반 전체 수를 큰 그림과 작은 그림으로 나타내고, 기록에 없는 카드를 가려내요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 가장 많은 방법이 정답이라고 여긴다 → 그래프는 \'얼마나 많은지\'를 보여 줄 뿐 좋고 나쁨을 정하지 않는다고 말한다. ② 감상 기록에 \'좋았다\'만 쓴다 → 떠올린 것 칸에 \'누가, 어디서\'를 넣게 한다. ③ 그림그래프에서 그림 수를 세다 틀린다 → 손가락으로 하나씩 짚으며 센다. 친구 이름은 모둠 안 활동지에만 쓰고 게시하지 않는다.',
  }));

  lessons.push(L(47, {
    title: '다시 듣고 싶은 곡 골라 까닭과 함께 소개하기',
    objective: '이 단원에서 들은 곡 가운데 다시 듣고 싶은 곡을 하나 골라, 곡에서 들은 소리를 까닭으로 들어 친구에게 소개할 수 있다.',
    illustration: ART('a paper child holding up a small recommendation card with music notes to classmates, a row of paper record discs labelled with tiny symbols on a shelf behind', '이 곡을 다시 듣고 싶어요', [
      { motif: 'star', x: 120, y: 86, s: 0.6 }, { motif: 'bird', x: 380, y: 90 }, { motif: 'flower', x: 400, y: 226, color: 'rose' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"이 단원에서 들은 곡 이름을 떠올려 볼까요?" 칠판에 곡 이름 카드(왕벌의 비행·백조·사자왕의 행진·아침·캉캉·사탕 요정의 춤·수족관·산왕의 궁전에서·즐거운 농부)를 붙이고, 곡마다 10초씩 다시 들려준다. "다시 듣고 싶은 곡 아래에 붙임딱지 하나를 붙여요." 시연 단추로 곡과 까닭이 이어지는 모습을 보여 준다.',
        student: '곡을 10초씩 다시 듣고, 가장 다시 듣고 싶은 곡에 붙임딱지를 붙여요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '곡과 까닭', slots: [{ id: 's1', label: '왕벌의 비행' }], cards: ['윙윙 빠른 소리가 신나요', '느리고 부드러워 편안해요'], shuffle: false }, sequence: [{ match: { s1: '윙윙 빠른 소리가 신나요' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 들은 소리에서 까닭 찾기', minutes: 12, tool: 'mindmap',
            teacher: '"까닭을 말할 때 그 곡에서 들은 소리를 넣으면 친구에게 잘 전해져요. \'그냥요\'보다 \'종소리가 반짝여서요\'가 더 잘 떠올라요." 둘째 문항에서 \'짝이 좋아하니까요\'도 마음은 알겠지만 곡에서 들은 소리를 말하지는 않았다고 짚는다. 셋째 문항 뒤에 곡 소개 카드(곡 이름·까닭·가장 좋은 부분) 틀을 나누어 준다.',
            task: '곡과 그 곡에서 들은 소리로 말한 까닭을 잇고, 들은 소리를 말한 까닭을 가려요.',
            levels: CARD_LV(),
            items: [
              { prompt: '곡과 그 곡에서 들은 소리로 말한 까닭을 이어 보세요.', toolOptions: { mode: 'match', topic: '곡과 까닭', slots: [{ id: 's1', label: '왕벌의 비행' }, { id: 's2', label: '백조' }, { id: 's3', label: '사자왕의 행진' }], cards: ['윙윙 빠른 소리가 신나요', '느리고 부드러워 편안해요', '낮고 씩씩한 소리가 멋져요'] },
                target: { match: { s1: '윙윙 빠른 소리가 신나요', s2: '느리고 부드러워 편안해요', s3: '낮고 씩씩한 소리가 멋져요' } }, difficulty: 0.15,
                hints: ['곡마다 빠르기와 소리 높낮이가 어땠는지 떠올리고, 그 소리를 말한 까닭을 찾아요.', '아직 맞지 않은 곡을 10초만 다시 들어 보세요. 빨랐나요, 부드러웠나요, 낮고 씩씩했나요?', '왕벌의 비행은 빠른 소리, 백조는 느리고 부드러운 소리, 사자왕의 행진은 낮고 씩씩한 소리예요.'],
                levels: { easy: { prompt: '곡과 그 곡에서 들은 소리로 말한 까닭 두 짝을 이어 보세요.', toolOptions: { slots: [{ id: 's1', label: '왕벌의 비행' }, { id: 's2', label: '백조' }], cards: ['윙윙 빠른 소리가 신나요', '느리고 부드러워 편안해요'] }, target: { match: { s1: '윙윙 빠른 소리가 신나요', s2: '느리고 부드러워 편안해요' } } } } },
              { prompt: '친구들이 말한 까닭을 곡에서 들은 소리를 말한 것과 아닌 것으로 나누어 보세요.', toolOptions: { topic: '고른 까닭', slots: ['들은 소리를 말했어요', '들은 소리가 없어요'], cards: ['작은 종소리가 반짝여서요', '점점 세지는 곳이 재미있어서요', '짝이 좋아하니까요', '그냥요'] },
                target: { sort: { '들은 소리를 말했어요': ['작은 종소리가 반짝여서요', '점점 세지는 곳이 재미있어서요'], '들은 소리가 없어요': ['짝이 좋아하니까요', '그냥요'] } }, difficulty: 0.15,
                hints: ['까닭 안에 빠르기·셈여림·높낮이·악기 소리 같은 들은 소리가 있는지 찾아봐요.', '아직 칸이 맞지 않은 카드에서 곡을 듣지 않아도 할 수 있는 말인지 생각해 보세요.', '종소리와 점점 세지는 곳은 들은 소리, 짝이 좋아해서와 그냥은 들은 소리가 없어요.'] },
              { prompt: '곡을 소개할 때 들어가면 좋은 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '곡 소개', cards: ['곡 이름', '다시 듣고 싶은 까닭', '가장 좋은 부분', '다른 곡 흉보기'] },
                target: { pick: ['곡 이름', '다시 듣고 싶은 까닭', '가장 좋은 부분'] }, difficulty: 0.05 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 내 곡 소개하기', minutes: 14, tool: 'story',
            teacher: '"서아와 준호의 소개를 먼저 완성해 봐요." 말풍선을 채우고 소개하는 차례를 놓은 뒤, 각자 고른 곡의 소개 카드를 쓴다. 모둠 안에서 돌아가며 소개하고, 모둠마다 대표 한 명이 반 전체에 소개하면 교사가 그 곡을 10초 들려준다. 친구 곡이 내 곡과 달라도 끝까지 듣고 "나도 들어 볼래" 같은 말로 답하게 한다.',
            task: '친구의 소개 말풍선을 채우고 소개 차례를 놓은 뒤, 내 곡 소개 카드를 써서 소개해요.',
            levels: CARD_LV(),
            items: [
              { prompt: '친구들의 소개 말풍선에 그 곡과 어울리는 까닭을 넣어 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'f1', who: '서아', motif: 'star', label: '사탕 요정의 춤은 ___ 좋아요.' }, { id: 'f2', who: '준호', motif: 'mountain', label: '산왕의 궁전에서는 ___ 좋아요.' }], cards: ['종소리가 톡톡 반짝여서', '점점 빠르고 세져서', '느리고 잔잔해서'] },
                target: { fill: { f1: '종소리가 톡톡 반짝여서', f2: '점점 빠르고 세져서' } }, difficulty: 0.15,
                hints: ['두 곡을 들었을 때 어떤 소리가 났는지 떠올리고, 그 소리를 말한 까닭을 넣어요.', '아직 맞지 않은 말풍선의 곡을 다시 떠올려 보세요. 끝으로 갈수록 바뀌었나요, 작게 반짝였나요?', '사탕 요정의 춤은 종소리가 톡톡 반짝여서, 산왕의 궁전에서는 점점 빠르고 세져서예요.'] },
              { prompt: '곡을 소개하는 차례대로 장면을 놓아 보세요.', toolOptions: { slots: 4, cards: [{ id: 't1', text: '다시 듣고 싶은 곡을 골라요', motif: 'star' }, { id: 't2', text: '소개 카드에 까닭을 써요', motif: 'leaf' }, { id: 't3', text: '모둠 친구에게 소개해요', motif: 'flower' }, { id: 't4', text: '모둠 대표가 반에 소개해요', motif: 'sun' }] },
                target: { order: ['t1', 't2', 't3', 't4'] }, difficulty: 0.1,
                hints: ['무엇이 있어야 그다음 일을 할 수 있는지 생각해 봐요.', '아직 자리가 맞지 않은 장면을 보세요. 소개 카드가 없으면 소개를 할 수 있을까요?', '곡 고르기 → 소개 카드 쓰기 → 모둠에 소개 → 대표가 반에 소개 차례예요.'],
                levels: { easy: { prompt: '곡을 소개하는 차례대로 장면 세 개를 놓아 보세요.', toolOptions: { slots: 3, cards: [{ id: 't1', text: '다시 듣고 싶은 곡을 골라요', motif: 'star' }, { id: 't2', text: '소개 카드에 까닭을 써요', motif: 'leaf' }, { id: 't3', text: '모둠 친구에게 소개해요', motif: 'flower' }] }, target: { order: ['t1', 't2', 't3'] } } } },
              { prompt: '내가 고른 곡의 소개 카드를 써서 모둠 친구에게 소개하고, 친구 소개도 끝까지 들어요. 다 했으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"모둠 대표의 소개를 듣고 다시 들어 보고 싶어진 곡이 생겼나요?" 두세 명이 말한다. 붙임딱지가 많이 붙은 곡과 적게 붙은 곡을 하나씩 짧게 다시 들려주며, 적게 붙은 곡에도 그 곡을 고른 친구의 까닭이 있다는 것을 짚는다. 다음 시간에는 단원 전체를 돌아보며 기억 앨범을 완성한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '곡과 까닭', slots: [{ id: 'e1', label: '캉캉' }, { id: 'e2', label: '아침' }], cards: ['힘차고 빨라 신나요', '잔잔하게 밝아져 편안해요'] }, prompt: '곡과 그 곡에서 들은 소리로 말한 까닭을 이어 보세요.', target: { match: { e1: '힘차고 빨라 신나요', e2: '잔잔하게 밝아져 편안해요' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '곡을 고른 까닭으로 가장 알맞은 것은?', options: ['낮은 북소리가 씩씩해서요', '그냥요', '친구가 골라서요'], answer: 0, difficulty: 0.1, explain: '곡에서 들은 소리를 말하면 친구에게 까닭이 잘 전해져요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '내 곡 소개 카드',
      items: [
        { type: 'short', prompt: '다시 듣고 싶은 곡 이름을 쓰세요.' },
        { type: 'short', prompt: '그 곡에서 들은 소리로 까닭을 쓰세요.' },
        { type: 'draw', prompt: '그 곡을 들으면 떠오르는 장면을 그리세요.' },
        { type: 'choice', prompt: '곡을 소개할 때 넣지 않는 것은?', options: ['곡 이름', '다시 듣고 싶은 까닭', '다른 곡 흉보기'], answer: '다른 곡 흉보기' },
      ],
      easy: {
        note: '들은 소리로 까닭을 말해요.',
        items: [
          { type: 'short', prompt: '다시 듣고 싶은 곡을 쓰세요.' },
          { type: 'choice', prompt: '좋은 까닭은?', options: ['종소리가 반짝여서요', '그냥요'], answer: '종소리가 반짝여서요' },
          { type: 'draw', prompt: '그 곡의 장면을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '두 짝만 잇고, 소개 차례를 세 장면으로 놓아요.',
      base: '세 짝을 잇고, 소개 차례를 네 장면으로 놓아 모둠에 소개해요.',
      challenge: '까닭에 빠르기·셈여림·높낮이 가운데 두 가지를 넣어 소개하고, 친구 곡을 듣고 물어볼 말도 준비해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 까닭을 \'좋아서요\'로만 말한다 → "어느 소리가 좋았어요?" 하고 되물어 소리 하나를 말하게 한다. ② 곡 이름을 기억하지 못한다 → 칠판 곡 이름 카드 옆에 37~46차시 그림을 함께 붙인다. ③ 친구가 고른 곡을 흉본다 → 오늘의 약속 "고른 까닭을 끝까지 들어요"를 다시 말한다. 음원은 학교가 이용 허락을 받은 것을 쓴다.',
  }));

  lessons.push(L(48, {
    title: '기억 단원 돌아보며 나의 기억 앨범 완성하기',
    objective: '단원에서 한 활동을 갈래에 따라 묶어 떠올리고, 가장 기억에 남는 활동과 자란 나의 모습을 까닭과 함께 말할 수 있다.',
    illustration: ART('a paper child closing a memory box and holding a handmade album tied with ribbon, pages showing a habit chart, a little drum, wavy lines and music notes', '나의 기억 앨범', [
      { motif: 'star', x: 120, y: 86, s: 0.6 }, { motif: 'house', x: 380, y: 214, color: 'sky' }, { motif: 'flower', x: 250, y: 226, color: 'rose' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"이 단원 첫 시간에 연 기억 상자를 기억하나요? 오늘은 그 상자를 닫으며 기억 앨범을 완성해요." 단원에서 만든 활동지(사흘 지킴표, 노래 활동지, 선 그림, 음악 기억 그림)를 꺼내 책상에 펼치게 한다. 시연 단추로 활동이 갈래별로 묶이는 모습을 보여 준다.',
        student: '내 활동지들을 펼쳐 보고, 가장 기억에 남는 한 장을 골라 짝에게 보여 줘요.',
        demo: { tool: 'mindmap', options: { topic: '기억 단원', slots: ['습관', '노래와 악기'], cards: ['사흘 지킴표 색칠하기', '캐스터네츠로 박 치기'], shuffle: false }, sequence: [{ sort: { '습관': ['사흘 지킴표 색칠하기'], '노래와 악기': ['캐스터네츠로 박 치기'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 한 일을 갈래로 묶기', minutes: 13, tool: 'mindmap',
            teacher: '"우리가 한 활동을 네 갈래로 묶어요." 카드를 읽을 때마다 그 시간에 만든 활동지를 들어 보이게 한다. 둘째 문항은 갈래마다 기억해 둘 한 문장을 잇는 것이다. 다 이은 뒤 활동지를 갈래 차례로 겹쳐 앨범으로 묶는다. "음악을 듣고 느끼는 건 다 같아야 해요"라고 말하는 학생에게 \'수족관\'을 듣고 서아와 준호가 다르게 떠올린 것을 다시 떠올리게 한다.',
            task: '단원에서 한 활동을 네 갈래로 묶고, 갈래마다 기억할 한 문장을 이은 뒤 앨범으로 묶어요.',
            levels: CARD_LV(),
            items: [
              { prompt: '단원에서 한 활동을 네 갈래로 나누어 보세요.', toolOptions: { topic: '기억 단원', slots: ['습관', '노래와 악기', '선 그림', '음악 듣기'], cards: ['사흘 지킴표 색칠하기', '다짐 카드 꾸미기', '캐스터네츠로 박 치기', '작은 음악회', '교실에서 굽은 선 찾기', '선 그림 전시회', '멈춰라 놀이', '곡 듣고 몸 이야기 꾸미기'] },
                target: { sort: { '습관': ['사흘 지킴표 색칠하기', '다짐 카드 꾸미기'], '노래와 악기': ['캐스터네츠로 박 치기', '작은 음악회'], '선 그림': ['교실에서 굽은 선 찾기', '선 그림 전시회'], '음악 듣기': ['멈춰라 놀이', '곡 듣고 몸 이야기 꾸미기'] } }, difficulty: 0.2,
                hints: ['카드의 활동을 했던 시간에 만든 활동지를 찾아 보며 떠올려요.', '아직 칸이 맞지 않은 카드를 보세요. 그때 노래했나요, 그렸나요, 들었나요, 습관을 지켰나요?', '지킴표·다짐 카드는 습관, 박 치기·음악회는 노래와 악기, 굽은 선·전시회는 선 그림, 멈춰라 놀이·몸 이야기는 음악 듣기예요.'],
                levels: { easy: { prompt: '단원에서 한 활동을 두 갈래로 나누어 보세요.', toolOptions: { slots: ['습관', '음악 듣기'], cards: ['사흘 지킴표 색칠하기', '다짐 카드 꾸미기', '멈춰라 놀이', '곡 듣고 몸 이야기 꾸미기'] }, target: { sort: { '습관': ['사흘 지킴표 색칠하기', '다짐 카드 꾸미기'], '음악 듣기': ['멈춰라 놀이', '곡 듣고 몸 이야기 꾸미기'] } } } } },
              { prompt: '갈래마다 기억해 둘 한 문장을 이어 보세요.', toolOptions: { mode: 'match', topic: '기억할 한 문장', slots: [{ id: 'h', label: '습관' }, { id: 's', label: '노래와 악기' }, { id: 'l', label: '선 그림' }, { id: 'm', label: '음악 듣기' }], cards: ['고칠 습관도 날마다 지키면 바뀌어요', '허리를 펴고 숨을 쉬며 노래해요', '굽은 선은 부드럽고 지그재그 선은 힘차요', '같은 곡도 저마다 다르게 느껴요'] },
                target: { match: { h: '고칠 습관도 날마다 지키면 바뀌어요', s: '허리를 펴고 숨을 쉬며 노래해요', l: '굽은 선은 부드럽고 지그재그 선은 힘차요', m: '같은 곡도 저마다 다르게 느껴요' } }, difficulty: 0.15,
                hints: ['문장 속 낱말(습관·노래·선·곡)을 찾아 갈래와 견주어 봐요.', '아직 맞지 않은 갈래에서 무엇을 했는지 떠올리고, 그 일에 쓰는 낱말이 든 문장을 찾아요.', '습관은 날마다 지키기, 노래는 허리 펴기, 선 그림은 굽은 선·지그재그 선, 음악 듣기는 저마다 다른 느낌이에요.'],
                levels: { easy: { prompt: '갈래마다 기억해 둘 한 문장 두 짝을 이어 보세요.', toolOptions: { slots: [{ id: 'h', label: '습관' }, { id: 'm', label: '음악 듣기' }], cards: ['고칠 습관도 날마다 지키면 바뀌어요', '같은 곡도 저마다 다르게 느껴요'] }, target: { match: { h: '고칠 습관도 날마다 지키면 바뀌어요', m: '같은 곡도 저마다 다르게 느껴요' } } } } },
              { prompt: '내 활동지를 갈래 차례로 겹쳐 기억 앨범으로 묶고, 표지에 제목과 이름을 써요. 다 했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 자란 나를 돌아보는 마음 날씨', minutes: 14, tool: 'emotion',
            teacher: '"이 단원을 하며 내 마음은 어땠나요? 눈금에는 정답이 없어요. 내 마음 그대로 골라요." 눈금을 고른 뒤 셋째 문항의 상황을 함께 읽고 고른다. 마지막으로 짝에게 가장 기억에 남는 활동과 그 까닭을 말하고, 앨범 마지막 장에 \'3학년이 된 나에게\' 한 줄을 쓴다.',
            task: '단원을 하며 든 내 마음의 크기를 고르고, 친구를 응원하는 말을 골라요. 짝에게 기억에 남는 활동을 말해요.',
            levels: EMO_LV(),
            items: [
              { prompt: '고칠 습관 하나를 사흘 동안 지켜 본 나를 떠올려요. 뿌듯한 마음의 크기를 골라 보세요. 어느 크기든 괜찮아요.', toolOptions: { mode: 'scale', who: '나', situation: '고칠 습관 하나를 골라 사흘 동안 지켜 보았어요.', feeling: '뿌듯함' }, target: { level: 'any' }, difficulty: 0.05 },
              { prompt: '노래하고, 선으로 그리고, 음악을 들은 시간을 떠올려요. 신난 마음의 크기를 골라 보세요. 어느 크기든 괜찮아요.', toolOptions: { mode: 'scale', who: '나', situation: '바른 자세로 노래하고, 선으로 그리고, 음악을 듣고 반응했어요.', feeling: '신남' }, target: { level: 'any' }, difficulty: 0.05 },
              { prompt: '하준이가 앨범을 보다 시무룩해요. 어떻게 말해 줄까요?', toolOptions: { mode: 'branch', who: '하준', situation: '앨범을 보던 하준이가 "내 그림은 친구 것보다 못해" 하고 말해요.', choices: [
                { id: 'agree', text: '"그러네, 내 것이 더 잘했어"', result: '하준이가 앨범을 덮어 버려요.', mood: '속상함', why: '앨범은 친구와 견주려고 만든 것이 아니에요.' },
                { id: 'grow', text: '"첫 그림보다 선이 많아졌네" 하고 달라진 점을 말해요', result: '하준이가 첫 장과 끝 장을 견주며 웃어요.', mood: '뿌듯함' },
                { id: 'skip', text: '아무 말 없이 내 앨범만 봐요', result: '하준이는 계속 시무룩해요.', mood: '걱정', why: '하준이가 자란 점을 찾아 주면 마음이 달라질 수 있어요.' }] }, target: { choice: 'grow' }, difficulty: 0.1 },
              { prompt: '짝에게 가장 기억에 남는 활동과 까닭을 말하고, 앨범 마지막 장에 "3학년이 된 나에게" 한 줄을 써요. 다 했으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"기억 상자를 닫기 전에, 이 단원에서 자란 나의 모습을 한 가지씩 말해 볼까요?" 대여섯 명이 말하고 박수로 응원한다. 말하지 못한 학생은 앨범 마지막 장에 쓴 한 줄을 교사가 나중에 읽어 준다. 기억 앨범은 집에 가져가 가족에게 보여 주고 이야기를 나누게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '기억 단원', slots: ['습관', '음악 듣기'], cards: ['물 세 컵 마시기 다짐', '빠른 곡 느린 곡 나누기', '집에 오면 숙제부터 하기', '높은 소리 낮은 소리 가려 듣기'] }, prompt: '이 활동들을 습관과 음악 듣기로 나누어 보세요.', target: { sort: { '습관': ['물 세 컵 마시기 다짐', '집에 오면 숙제부터 하기'], '음악 듣기': ['빠른 곡 느린 곡 나누기', '높은 소리 낮은 소리 가려 듣기'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '이 단원에서 배운 것으로 알맞은 것은?', options: ['고칠 습관도 날마다 지키면 바뀌어요', '음악을 듣고 느끼는 것은 모두 같아야 해요', '선은 한 가지 느낌만 줘요'], answer: 0, difficulty: 0.1, explain: '습관은 날마다 지키면 바뀌고, 음악 느낌과 선 느낌은 저마다 다양해요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '나의 기억 앨범',
      items: [
        { type: 'table', prompt: '갈래마다 가장 기억에 남는 활동과 그 까닭을 쓰세요.', columns: ['갈래', '기억에 남는 활동', '까닭'], cells: [['습관', '', ''], ['노래와 악기', '', ''], ['선 그림', '', ''], ['음악 듣기', '', '']] },
        { type: 'check', prompt: '이 단원에서 해 본 것에 ✓ 하세요.', options: ['고칠 습관 하나를 사흘 지켰어요', '바른 자세로 노래했어요', '선으로 기억을 그렸어요', '음악을 듣고 몸이나 그림으로 반응했어요'] },
        { type: 'draw', prompt: '기억 앨범 표지를 그리세요.' },
        { type: 'short', prompt: '3학년이 된 나에게 한 줄을 쓰세요.' },
      ],
      easy: {
        note: '가장 기억에 남는 것 하나만 골라도 좋아요.',
        items: [
          { type: 'short', prompt: '가장 기억에 남는 활동을 쓰세요.' },
          { type: 'choice', prompt: '캐스터네츠로 박 치기는?', options: ['노래와 악기', '습관'], answer: '노래와 악기' },
          { type: 'draw', prompt: '기억 앨범 표지를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '두 갈래로만 나누고 두 짝만 이으며, 마음 눈금은 세 칸이에요.',
      base: '네 갈래로 나누고 네 짝을 이어요.',
      challenge: '갈래마다 기억에 남는 활동과 까닭을 쓰고, 3학년에 이어 갈 것까지 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 활동지를 잃어버려 앨범이 비어 있다 → 그 갈래는 기억나는 장면을 새로 그려 넣게 한다. ② 친구 앨범과 견주며 기가 죽는다 → 내 앨범의 첫 장과 끝 장을 견주어 자란 점을 찾게 한다. ③ 기억에 남는 활동의 까닭을 \'재미있어서\'로만 쓴다 → "무엇을 할 때 재미있었나요?" 하고 되물어 한 장면을 말하게 한다.',
  }));

  // ── 차시 끝 ──

  PaperLessons.registerUnit({
    id: 'g2-int-2-08', schema: 'edu-unit.v1', catalogUnit: UNIT,
    grade: 2, subject: '통합교과', unitTitle: TITLE,
    flow: '1~12차시는 1학년 때와 지금을 견주어 좋은 습관과 고칠 습관을 가르고, 고칠 습관 하나를 사흘 지켜 표와 그래프로 돌아본 뒤 3학년에 이어 갈 습관을 다짐한다. 13~24차시는 바른 자세와 악기 잡는 법을 익혀 직접 지은 노래를 박에 맞추어 부르고 치며, 연주를 돌아보고 고쳐 작은 음악회로 마친다. 25~36차시는 곧은 선·굽은 선·굵고 가는 선을 찾아 그 느낌을 알고, 선과 색으로 기억을 그린 뒤 고쳐 다시 꾸며 전시회를 연다. 37~44차시는 빠르기·높낮이·셈여림을 가려 듣고 멈춰라 놀이·음악 그림·손 선 그리기·몸 이야기로 저마다 반응한다. 45~48차시는 같은 곡에 서로 다르게 반응한 점을 찾아 존중하고, 다시 듣고 싶은 곡을 까닭과 함께 소개한 뒤 기억 앨범으로 단원을 정리한다.',
    refs: {},
    lessons: lessons,
  });
})();
