/* 2학년 1학기 통합교과 1. 나 — 48차시
 * 1~12차시  [건강한 몸] 내 몸으로 할 수 있는 움직임·좋아지는 것(1~4) → 준비 운동·걷기·계단 오르기 실천(5~8) → 움직인 뒤 숨과 몸 돌아보기(9~12)
 * 13~24차시 [몸 표현] 나타낼 것과 움직이는 곳 찾기(13~16) → 흉내 내고 친구와 다르게 해 보기(17~20) → 맞히고 더 잘 보이게 바꾸기(21~24)
 * 25~36차시 [우리나라] 우리나라를 나타내는 것과 뜻(25~28) → 태극기 바르게 그리고 달기·나라 사랑 표현(29~32) → 새로 안 것과 더 알고 싶은 물음(33~36)
 * 37~48차시 [나 탐구] 나에 대한 물음과 알아볼 방법(37~40) → 하루 기록·가족과 친구에게 묻기(41~44) → 세 문장 자기소개와 가장 나다운 점(45~48)
 * 성취기준: units-map 단원 목록이 비어 있고 미확인(standardsVerified:false)이라 모든 차시 standards: [] (지어내지 않는다).
 * 예문·이야기는 모두 직접 지었다. 노래 가사는 싣지 않는다. 학생 이름은 가명(민지·준호·하준·서아)만 쓴다.
 * 우리나라 사실: 태극기(흰 바탕·가운데 태극 문양 위 빨강 아래 파랑·네 모서리 검은 괘), 무궁화(나라꽃), 한글(세종대왕, 한글날 10월 9일),
 *   국기를 다는 날(삼일절 3월 1일·광복절 8월 15일·개천절 10월 3일·한글날 10월 9일, 현충일 6월 6일은 깃면 너비만큼 내려 다는 조기).
 */
(function () {
  var UNIT = 'g2-통합교과-1학기-1';
  var TITLE = '1. 나';
  var HEAD = 'Layered paper-cut illustration of ';
  var TAIL = ', with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.';
  function two(n) { return (n < 10 ? '0' : '') + n; }
  function L(n, x) {
    var head = {
      id: 'g2-int-1-01-' + two(n), schema: 'edu-lesson.v1', catalog: { unit: UNIT, lesson: n },
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
  // 카드 판 교구 단계: 쉬움은 맞는 칸에 초록 테두리·틀린 칸은 바로 되돌림, 도전은 문항마다 함정 카드를 더 넣는다
  var CARD_LV = { easy: { live: true, instant: true }, base: {}, challenge: {} };
  // 종이 몸(몸의 부분 고르기): 쉬움은 고른 곳 이름이 바로 보이고, 도전은 문항마다 고를 곳이 늘어난다
  var BODY_LV = { easy: { names: true }, base: {}, challenge: {} };
  // 활동판(타이머·기록·점검): 도전은 초시계로 직접 잰다
  var TIMER_LV = { easy: {}, base: {}, challenge: { stopwatch: true } };
  // 몸을 움직이는 차시의 안전 약속
  var SPACE = '두 팔을 벌려도 친구와 닿지 않게 거리를 두어요.';
  var FLOOR = '바닥의 물기와 떨어진 물건을 먼저 치워요.';
  var STOP = '어지럽거나 가슴이 아프면 바로 멈추고 선생님께 말해요.';
  var SHOES = '실내화 뒤축을 꺾어 신지 않아요.';
  var STAIR = '계단에서는 손잡이를 잡고 한 칸씩 오르내려요.';

  var lessons = [];

  // ───────────────────────── 1~4차시: 내 몸으로 할 수 있는 움직임(몸·건강·안전 이해) ─────────────────────────

  lessons.push(L(1, {
    title: '내 몸에서 움직이는 곳 짚어 보기',
    objective: '친구가 한 움직임을 따라 해 보고 움직인 몸의 곳을 고르며, 몸을 움직이면 좋아지는 것을 하나 말할 수 있다.',
    illustration: ART('a cheerful paper child stretching arms and nodding head in a sunny classroom, small arrows around the neck, wrists and ankles showing movement', '내 몸은 이렇게 움직여요', [
      { motif: 'tree', x: 90, y: 214 }, { motif: 'flower', x: 380, y: 228 }, { motif: 'star', x: 300, y: 70, s: 0.6 }]),
    safety: [SPACE],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 7,
        teacher: '"선생님이 말하는 곳만 움직여 볼까요? 목! 어깨! 손목! 발목!" 자리에서 일어나 따라 하게 한다. "이번 단원 이름은 \'나\'예요. 내 몸, 몸으로 하는 표현, 우리나라 속의 나, 그리고 나에 대해 알아보기를 차례로 공부해요." 시연 단추로 종이 몸에서 목과 어깨가 골라지는 모습을 보여 준다. "달리기를 잘하는 친구만 몸을 움직이며 놀 수 있을까요?" 대답을 칠판 귀퉁이에 적어 두고 정리 때 다시 본다.',
        student: '선생님이 말하는 곳만 움직여 봐요. 내 몸에서 가장 잘 움직이는 곳은 어디인가요?',
        demo: { tool: 'body', options: { mode: 'parts', parts: ['목', '어깨', '무릎', '발목'], names: true }, sequence: [{ parts: ['목', '어깨'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 따라 하고 움직인 곳 고르기', minutes: 13, tool: 'body',
            teacher: '"문장을 읽고 먼저 그대로 따라 해 봐요. 그다음 움직인 곳을 손으로 짚고 종이 몸에서 골라요." 팔 전체를 말하는 학생에게 "팔을 굽히는 곳은 팔꿈치, 손만 돌리는 곳은 손목이에요"처럼 이음매 이름을 알려 준다. 따라 하지 않고 글자만 보고 고르는 학생은 일으켜 세워 직접 해 보게 한다.',
            task: '친구가 한 움직임을 읽고 직접 따라 해 본 뒤, 움직인 곳을 종이 몸에서 모두 골라요.',
            levels: BODY_LV,
            items: [
              { prompt: '민지가 고개를 끄덕이고 어깨를 으쓱 올렸어요. 따라 해 보고 민지가 움직인 곳을 모두 골라 보세요.', toolOptions: { mode: 'parts', parts: ['목', '어깨', '허리', '무릎'] }, target: { parts: ['목', '어깨'] }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { parts: ['목', '어깨', '팔꿈치', '허리', '무릎', '발목'] } } } },
              { prompt: '준호가 팔을 쭉 편 채로 손만 빙글빙글 돌렸어요. 따라 해 보고 움직인 곳을 골라 보세요.', toolOptions: { mode: 'parts', parts: ['어깨', '팔꿈치', '손목', '허리'] }, target: { parts: ['손목'] }, difficulty: 0.15,
                predict: { q: '팔을 쭉 폈을 때 팔꿈치는 움직일까요?', options: ['움직여요', '안 움직여요'], answer: 1 },
                conclude: '팔을 편 채 손만 돌리면 손목만 움직여요.' },
              { prompt: '하준이가 한 발로 서서, 든 발만 빙글빙글 돌렸어요. 따라 해 보고 움직인 곳을 골라 보세요.', toolOptions: { mode: 'parts', parts: ['허리', '허벅지', '무릎', '발목'] }, target: { parts: ['발목'] }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { parts: ['허리', '허벅지', '무릎', '발목', '손목', '목'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 몸을 움직이면 좋아지는 것', minutes: 13, tool: 'emotion',
            teacher: '"쉬는 시간에 실컷 뛰어놀고 나면 무엇이 좋아졌나요?" 두세 명의 대답을 칠판에 적는다. 카드를 놓은 뒤에는 "왜 그렇게 생각해요?"를 꼭 묻는다. \'달리기를 못하면 운동을 안 해도 된다\'고 말하는 학생에게 "걷기, 줄넘기, 춤처럼 누구나 자기 빠르기로 할 수 있는 움직임이 많아요"라고 짚는다.',
            task: '카드를 읽고 몸을 움직이면 생기는 좋은 일을 찾아요. 몸을 잘 못 쓰는 친구에게 해 줄 말도 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '몸을 움직이면 생기는 좋은 일만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', weather: false, basket: '움직이면 좋아져요', cards: ['다리 힘이 세져요', '밥맛이 좋아져요', '밤에 잠이 잘 와요', '숙제가 저절로 끝나요'] },
                target: { pick: ['다리 힘이 세져요', '밥맛이 좋아져요', '밤에 잠이 잘 와요'] }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['다리 힘이 세져요', '밥맛이 좋아져요', '밤에 잠이 잘 와요', '숙제가 저절로 끝나요', '하루 만에 키가 쑥 커요'] } } } },
              { prompt: '움직임마다 무엇이 좋아지는지 카드를 이어 보세요.', toolOptions: { mode: 'match', weather: false, slots: [{ id: 's1', label: '줄넘기를 해요' }, { id: 's2', label: '철봉에 매달려요' }, { id: 's3', label: '친구와 술래잡기를 해요' }], cards: ['다리 힘이 세져요', '팔 힘이 세져요', '친구와 더 친해져요'] },
                target: { match: { s1: '다리 힘이 세져요', s2: '팔 힘이 세져요', s3: '친구와 더 친해져요' } }, difficulty: 0.15 },
              { prompt: '하준이는 달리기가 느려서 "나는 운동 못 해"라고 해요. 하준이에게 어떻게 말할까요?', toolOptions: { mode: 'branch', who: '하준', situation: '하준이가 달리기가 느리다며 "나는 운동 못 해. 안 할래."라고 말해요.', choices: [
                { id: 'with', text: '"걷기나 줄넘기를 같이 해 보자"', result: '하준이가 웃으며 함께 움직여요.', mood: '기쁨' },
                { id: 'out', text: '"그럼 너는 빼고 하자"', result: '하준이가 혼자 앉아 속상해해요.', mood: '속상함', why: '빠진 하준이의 마음은 어떨까요?' },
                { id: 'fast', text: '"운동은 빠른 사람만 하는 거야"', result: '하준이가 몸 움직이기를 싫어하게 돼요.', mood: '슬픔', why: '빠르지 않아도 할 수 있는 움직임이 많아요.' }] }, target: { choice: 'with' }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '칠판 귀퉁이에 적어 둔 대답을 함께 읽는다. "이제 다시 생각해 봐요. 달리기를 잘해야만 몸을 움직이며 놀 수 있을까요?" 손을 들어 답하게 한 뒤 출구 질문을 푼다. 출구 1번에서 여러 곳을 고른 학생은 문장대로 다시 따라 해 보게 한다. 다음 시간에는 놀이마다 많이 쓰는 몸의 곳을 찾는다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'body', options: { mode: 'parts', parts: ['목', '허리', '손목', '발목'] }, prompt: '서아가 몸은 그대로 두고 고개만 오른쪽, 왼쪽으로 돌렸어요. 서아가 움직인 곳을 골라 보세요.', target: { parts: ['목'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '몸을 움직이면 생기는 좋은 일이 아닌 것은 무엇일까요?', options: ['몸이 튼튼해져요', '밤에 잠이 잘 와요', '비가 그쳐요'], answer: 2, difficulty: 0.1, explain: '몸을 움직여도 날씨는 바뀌지 않아요. 몸과 마음이 좋아져요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '내 몸에서 움직이는 곳',
      items: [
        { type: 'figure', prompt: '그림의 ①~④ 가운데 고개를 끄덕일 때 움직이는 곳의 번호에 ○ 하세요.', tool: 'body', figures: [{ options: { mode: 'parts', parts: ['목', '어깨', '손목', '무릎'], numbers: ['목', '어깨', '손목', '무릎'] }, caption: '' }], answer: '①' },
        { type: 'choice', prompt: '몸을 움직이면 좋아지는 것에 ○ 하세요.', options: ['다리 힘이 세져요', '숙제가 저절로 끝나요', '비가 그쳐요'], answer: '다리 힘이 세져요' },
        { type: 'table', prompt: '몸의 곳마다 할 수 있는 움직임을 하나씩 쓰세요.', columns: ['몸의 곳', '할 수 있는 움직임'], cells: [['목', ''], ['손목', ''], ['무릎', '']] },
        { type: 'short', prompt: '달리기가 느린 친구에게 해 줄 말을 쓰세요.' },
        { type: 'draw', prompt: '내가 가장 좋아하는 움직임을 하는 내 모습을 그리세요.' },
      ],
      easy: {
        note: '먼저 몸으로 따라 해 보고 써요.',
        items: [
          { type: 'choice', prompt: '손만 빙글빙글 돌릴 때 움직이는 곳에 ○ 하세요.', options: ['손목', '무릎'], answer: '손목' },
          { type: 'choice', prompt: '몸을 움직이면 좋아지는 것에 ○ 하세요.', options: ['다리 힘이 세져요', '비가 그쳐요'], answer: '다리 힘이 세져요' },
          { type: 'draw', prompt: '내가 좋아하는 움직임을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '몸의 곳을 누르면 이름이 바로 보여요. 좋은 일 카드를 맞게 놓으면 초록 테두리가 생겨요.',
      base: '따라 해 본 뒤 모두 고르고 확인을 눌러요.',
      challenge: '고를 수 있는 몸의 곳이 여섯 군데로 늘고, 그럴듯한 함정 카드가 섞여 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 따라 하지 않고 글자만 보고 고른다 → 반드시 일어나서 해 본 뒤 짚게 한다. ② 팔·다리를 통째로 말한다 → 굽히는 곳(이음매) 이름을 함께 짚는다. ③ "나는 운동을 못 해"라고 말한다(몸을 잘 쓰는 사람만 신체 활동을 한다는 생각) → 걷기·체조처럼 자기 빠르기로 하는 움직임을 먼저 칭찬한다.',
  }));

  lessons.push(L(2, {
    title: '놀이마다 많이 쓰는 몸 찾아 잇기',
    objective: '훌라후프·공 던지기 같은 놀이를 해 보고, 그 놀이에서 많이 쓰는 몸의 곳을 짝 지을 수 있다.',
    illustration: ART('paper children playing with a hula hoop, a ball and a jump rope on a school playground, glowing outlines on their waists, shoulders and ankles', '어디를 많이 쓸까요?', [
      { motif: 'tree', x: 80, y: 214 }, { motif: 'house', x: 390, y: 214, color: 'peach' }, { motif: 'flower', x: 300, y: 230 }]),
    safety: [SPACE, FLOOR, STOP],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"쉬는 시간에 어떤 놀이를 해요?" 대답 가운데 두 가지를 자리에서 흉내 내 보게 한다. "훌라후프를 돌릴 때 몸에서 어디가 가장 바쁠까요?" 몇 명이 짚는 곳을 보고 대답을 견준다. 시연 단추로 \'훌라후프\' 옆에 \'허리\' 카드가 이어지는 모습을 보여 준다. 오늘은 놀이를 직접 해 보고 많이 쓰는 몸을 찾는다고 말한다.',
        student: '내가 좋아하는 놀이를 자리에서 흉내 내 봐요. 몸의 어디가 가장 바쁜가요?',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '많이 쓰는 몸', slots: [{ id: 's1', label: '훌라후프 돌리기' }], cards: ['허리', '귀'], shuffle: false }, sequence: [{ match: { s1: '허리' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 놀이와 많이 쓰는 몸 잇기', minutes: 13, tool: 'mindmap',
            teacher: '"놀이 이름을 읽고 먼저 몸으로 흉내 내 봐요. 가장 힘이 들어가는 곳은 어디였나요?" 카드를 다 놓은 학생에게 짝과 흉내를 바꾸어 보며 맞는지 견주게 한다. 줄넘기에 \'어깨\'를 놓은 학생에게 "줄을 넘을 때 바닥을 차고 뛰어오르는 곳은 어디예요?"라고 되묻는다.',
            task: '놀이 이름을 읽고 흉내 내 본 뒤, 그 놀이에서 가장 많이 쓰는 몸의 곳을 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '놀이마다 가장 많이 쓰는 몸의 곳 카드를 이어 보세요.', toolOptions: { mode: 'match', topic: '많이 쓰는 몸', slots: [{ id: 's1', label: '훌라후프 돌리기' }, { id: 's2', label: '공 멀리 던지기' }, { id: 's3', label: '두 발 모아 줄넘기' }], cards: ['허리', '어깨', '발목'] },
                target: { match: { s1: '허리', s2: '어깨', s3: '발목' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['허리', '어깨', '발목', '귀'] } } } },
              { prompt: '팔을 많이 쓰는 놀이와 다리를 많이 쓰는 놀이로 나누어 보세요.', toolOptions: { topic: '어디를 많이 쓸까?', slots: ['팔을 많이 써요', '다리를 많이 써요'], cards: ['공 던지기', '철봉 매달리기', '달리기', '사방치기'] },
                target: { sort: { '팔을 많이 써요': ['공 던지기', '철봉 매달리기'], '다리를 많이 써요': ['달리기', '사방치기'] } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['공 던지기', '철봉 매달리기', '달리기', '사방치기', '그림책 읽기'] } } } },
              { prompt: '세 놀이에 가장 많이 쓰는 곳 카드를 이어 보세요.', toolOptions: { mode: 'match', topic: '많이 쓰는 몸', slots: [{ id: 's1', label: '고무줄넘기' }, { id: 's2', label: '공기놀이' }, { id: 's3', label: '몸을 뒤로 젖혀 막대 밑 지나기' }], cards: ['다리', '손가락', '허리'] },
                target: { match: { s1: '다리', s2: '손가락', s3: '허리' } }, difficulty: 0.2,
                predict: { q: '공기놀이에도 몸을 쓸까요?', options: ['써요', '안 써요'], answer: 0 },
                conclude: '앉아서 하는 공기놀이도 손가락을 부지런히 쓰는 몸 놀이예요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 모둠 놀이 해 보고 기록하기 (실천)', minutes: 14, tool: 'timer', pair: true,
            teacher: '"놀기 전에 둘레부터 살펴요. 눈으로 본 것만 눌러요." 교실 뒤나 강당에서 모둠마다 제자리 두 발 뛰기를 한다. 한 명이 뛰면 짝이 30초 동안 센다. "기록은 친구와 견주는 것이 아니에요. 내가 해낸 만큼 적어요." 숨이 차서 멈춘 학생에게 "잠깐 쉬었다 다시 해도 괜찮아요"라고 말해 준다.',
            task: '안전 점검을 한 뒤 짝과 번갈아 30초 동안 제자리 두 발 뛰기를 하고, 짝이 센 횟수를 적어요.',
            levels: TIMER_LV,
            items: [
              { prompt: '놀이를 하기 전에 둘레를 살펴보고 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['둘레에 부딪칠 책상이나 의자가 없어요', '바닥에 물기나 떨어진 물건이 없어요', '실내화를 바르게 신었어요'] }, target: { safety: true }, difficulty: 0.05 },
              { prompt: '타이머를 시작하고 짝과 번갈아 30초 동안 제자리 두 발 뛰기를 해 본 뒤 "다 했어요"를 누르세요.', toolOptions: { plan: { work: 30, rest: 10, rounds: 2 } }, free: true },
              { prompt: '30초 동안 두 발 뛰기를 두 번 하고, 짝이 센 횟수를 칸에 적어요.', toolOptions: { fields: ['1번째', '2번째'], unit: '번' }, target: { records: true }, difficulty: 0.1,
                levels: { easy: { toolOptions: { fields: ['1번째'] } }, challenge: { toolOptions: { fields: ['1번째', '2번째', '3번째'] } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"오늘 해 본 놀이에서 내 몸의 어디가 가장 힘들었나요?" 두세 명이 짚어 보게 한다. 기록이 적은 학생을 놀리는 말이 나오면 "기록은 나와만 견주어요"라고 바로잡는다. 출구 1번을 틀린 학생은 그 놀이를 다시 흉내 내 보게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '많이 쓰는 몸', slots: [{ id: 'e1', label: '팔씨름' }, { id: 'e2', label: '깡충깡충 토끼 뛰기' }] , cards: ['팔', '다리'] }, prompt: '두 놀이에 가장 많이 쓰는 곳 카드를 이어 보세요.', target: { match: { e1: '팔', e2: '다리' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '두 발 뛰기 횟수가 친구보다 적은 준호는 어떻게 하면 좋을까요?', options: ['다음부터 안 해요', '쉬었다가 내 빠르기로 다시 해요', '친구 기록을 따라 적어요'], answer: 1, difficulty: 0.15, explain: '기록은 나와 견주어요. 쉬었다가 다시 하면 조금씩 늘어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '놀이마다 많이 쓰는 몸',
      items: [
        { type: 'figure', wide: true, prompt: '놀이와 많이 쓰는 몸의 곳을 선으로 이으세요.', tool: 'mindmap', figures: [{ options: { mode: 'match', topic: '많이 쓰는 몸', slots: [{ id: 's1', label: '훌라후프' }, { id: 's2', label: '공 던지기' }, { id: 's3', label: '줄넘기' }], cards: ['발목', '허리', '어깨'] }, caption: '' }], answer: '훌라후프-허리, 공 던지기-어깨, 줄넘기-발목' },
        { type: 'choice', prompt: '다리를 많이 쓰는 놀이에 ○ 하세요.', options: ['사방치기', '공기놀이', '그림책 읽기'], answer: '사방치기' },
        { type: 'table', prompt: '두 발 뛰기 횟수를 쓰세요.', columns: ['', '1번째', '2번째'], cells: [['횟수', '', '']] },
        { type: 'short', prompt: '두 번째 기록이 첫 번째와 견주어 어떻게 달라졌는지 쓰세요.' },
      ],
      easy: {
        note: '놀이를 몸으로 흉내 내 보고 골라요.',
        items: [
          { type: 'choice', prompt: '훌라후프를 돌릴 때 많이 쓰는 곳에 ○ 하세요.', options: ['허리', '귀'], answer: '허리' },
          { type: 'choice', prompt: '팔을 많이 쓰는 놀이에 ○ 하세요.', options: ['철봉 매달리기', '달리기'], answer: '철봉 매달리기' },
          { type: 'table', prompt: '두 발 뛰기 횟수를 쓰세요.', columns: ['', '1번째'], cells: [['횟수', '']] },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 놓으면 초록 테두리가 생겨요. 기록 칸이 하나예요.',
      base: '흉내 내 본 뒤 모두 잇고 확인을 눌러요. 기록을 두 번 적어요.',
      challenge: '관계없는 함정 카드가 섞여 있어요. 기록을 세 번 적고 달라진 점을 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 놀이 이름만 보고 짐작한다 → 꼭 흉내 낸 뒤 고르게 한다. ② 기록을 친구와 견주며 속상해한다 → 1번째와 2번째 내 기록만 견주게 한다. ③ 공기놀이처럼 앉아서 하는 놀이는 몸 놀이가 아니라고 여긴다 → 손가락도 몸이라는 것을 짚는다. 뛰기는 실내화를 바르게 신고, 책상을 밀어 둔 뒤에 한다.',
  }));

  lessons.push(L(3, {
    title: '안전하게 놀고 내 몸을 아끼는 말 하기',
    objective: '놀이터와 복도에서 안전한 행동과 위험한 행동을 나누고, 내 몸을 아끼는 말을 골라 소리 내어 말할 수 있다.',
    illustration: ART('paper children taking turns on a slide and swing at a school playground, one child hugging herself with a happy smile and small hearts around', '내 몸을 아껴요', [
      { motif: 'tree', x: 90, y: 212 }, { motif: 'flower', x: 360, y: 230 }, { motif: 'bird', x: 300, y: 80 }]),
    safety: [SPACE],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 7,
        teacher: '"놀다가 다쳐 본 적이 있나요? 그때 무엇을 하고 있었나요?" 두세 명의 경험을 듣고 다친 곳보다 \'무엇을 하다가\'에 귀 기울이게 한다. "몸을 아끼는 방법은 두 가지예요. 다치지 않게 노는 것, 그리고 내 몸에게 좋은 말을 해 주는 것." 시연 단추로 \'차례를 지켜요\' 카드가 \'안전해요\' 가지에 놓이는 모습을 보여 준다.',
        student: '놀다가 다칠 뻔했던 때를 떠올려 봐요. 무엇을 하고 있었나요?',
        demo: { tool: 'mindmap', options: { topic: '놀이터에서', slots: ['안전해요', '위험해요'], cards: ['차례를 지켜요', '그네 앞을 뛰어가요'], shuffle: false }, sequence: [{ sort: { '안전해요': ['차례를 지켜요'], '위험해요': ['그네 앞을 뛰어가요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 안전한 놀이, 위험한 놀이', minutes: 13, tool: 'mindmap',
            teacher: '"이렇게 하면 몸의 어디를 다칠 수 있을까요?" 위험한 카드마다 다칠 수 있는 곳을 말로 덧붙이게 한다. \'재미있으니까 괜찮다\'고 하는 학생에게 "재미있게 놀려면 먼저 다치지 않아야 해요"라고 짚는다. 놀이와 상관없는 카드는 어디에도 놓지 않는다는 것을 알려 준다.',
            task: '카드를 읽고 안전한 행동과 위험한 행동으로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '놀이터에서 하는 행동을 안전한 것과 위험한 것으로 나누어 보세요.', toolOptions: { topic: '놀이터에서', slots: ['안전해요', '위험해요'], cards: ['미끄럼틀을 앉아서 타요', '그네 앞을 뛰어 지나가요', '줄을 서서 차례를 기다려요', '미끄럼틀을 거꾸로 올라가요'] },
                target: { sort: { '안전해요': ['미끄럼틀을 앉아서 타요', '줄을 서서 차례를 기다려요'], '위험해요': ['그네 앞을 뛰어 지나가요', '미끄럼틀을 거꾸로 올라가요'] } }, difficulty: 0.1 },
              { prompt: '복도와 계단에서 하는 행동을 나누어 보세요.', toolOptions: { topic: '복도와 계단에서', slots: ['안전해요', '위험해요'], cards: ['오른쪽으로 걸어 다녀요', '계단을 두 칸씩 뛰어내려요', '모퉁이에서 천천히 걸어요', '친구를 뒤에서 밀어요'] },
                target: { sort: { '안전해요': ['오른쪽으로 걸어 다녀요', '모퉁이에서 천천히 걸어요'], '위험해요': ['계단을 두 칸씩 뛰어내려요', '친구를 뒤에서 밀어요'] } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['오른쪽으로 걸어 다녀요', '계단을 두 칸씩 뛰어내려요', '모퉁이에서 천천히 걸어요', '친구를 뒤에서 밀어요', '급식 메뉴가 맛있어요'] } } } },
              { prompt: '놀다가 넘어져 무릎이 까졌어요. 바로 할 일만 골라 보세요.', toolOptions: { mode: 'pick', basket: '바로 할 일', cards: ['선생님께 알려요', '보건실에 가요', '아무에게도 말하지 않아요', '상처를 손으로 만져요'] },
                target: { pick: ['선생님께 알려요', '보건실에 가요'] }, difficulty: 0.15,
                predict: { q: '조금 까진 상처도 어른께 알려야 할까요?', options: ['알려요', '안 알려도 돼요'], answer: 0 },
                conclude: '작은 상처도 어른께 알리고 깨끗하게 돌봐야 덧나지 않아요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 내 몸을 아끼는 말', minutes: 13, tool: 'emotion',
            teacher: '"내 몸에게 말을 걸어 볼까요? \'다리야, 오늘 많이 뛰어 줘서 고마워.\'" 선생님이 먼저 소리 내어 말한다. 고른 말은 짝에게 소리 내어 들려주게 한다. 키나 생김새를 깎아내리는 말이 나오면 "몸은 저마다 달라서 소중해요"라고 짚는다.',
            task: '내 몸을 아끼는 말을 고르고 짝에게 소리 내어 말해요. 그 말을 했을 때의 마음도 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '내 몸을 아끼는 말만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '내 몸을 아끼는 말', cards: ['"내 다리는 튼튼해"', '"나는 너무 느려서 싫어"', '"오늘도 잘 움직여 줘서 고마워"', '"내 손은 못생겼어"'] },
                target: { pick: ['"내 다리는 튼튼해"', '"오늘도 잘 움직여 줘서 고마워"'] }, difficulty: 0.1 },
              { prompt: '친구가 키가 작은 준호를 "꼬마"라고 놀려요. 준호에게 어떻게 말할까요?', toolOptions: { mode: 'branch', who: '준호', situation: '친구가 키가 작은 준호를 "꼬마야"라고 불러서 준호가 고개를 숙였어요.', choices: [
                { id: 'same', text: '"맞아, 너는 꼬마야"', result: '준호가 더 속상해해요.', mood: '속상함', why: '같이 놀리면 준호 마음이 어떨까요?' },
                { id: 'good', text: '"너는 공을 잘 차잖아. 키는 저마다 달라"', result: '준호가 고개를 들고 웃어요.', mood: '뿌듯함' },
                { id: 'quiet', text: '못 들은 척 지나가요', result: '준호는 혼자 속상한 채로 있어요.', mood: '슬픔', why: '준호 곁에서 해 줄 수 있는 말을 떠올려 봐요.' }] }, target: { choice: 'good' }, difficulty: 0.1 },
              { prompt: '두 친구가 자기 몸에게 말했어요. 말한 뒤 들었을 마음 카드를 이어 보세요.', toolOptions: { cards: ['뿌듯함', '속상함'], slots: [{ id: 's1', label: '"내 다리는 튼튼해!"' }, { id: 's2', label: '"내 손은 못생겼어."' }] },
                target: { match: { s1: '뿌듯함', s2: '속상함' } }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"오늘 찾은 위험한 행동 가운데 우리 반이 가장 조심해야 할 것은 무엇일까요?" 한 가지를 정해 학급 약속판에 붙인다. 짝과 내 몸을 아끼는 말을 한 번씩 더 주고받고 출구 질문을 푼다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '운동장에서', slots: ['안전해요', '위험해요'], cards: ['공을 사람 없는 쪽으로 차요', '눈을 감고 달려요'] }, prompt: '운동장에서 하는 행동을 안전한 것과 위험한 것으로 나누어 보세요.', target: { sort: { '안전해요': ['공을 사람 없는 쪽으로 차요'], '위험해요': ['눈을 감고 달려요'] } }, difficulty: 0.05 },
          { type: 'choice', prompt: '내 몸을 아끼는 말은 무엇일까요?', options: ['"내 몸아, 오늘도 고마워"', '"나는 왜 이렇게 생겼지"', '"아무 말도 안 할래"'], answer: 0, difficulty: 0.05, explain: '고맙다는 말은 내 몸을 소중하게 여기는 말이에요.' },
          { type: 'tool', tool: 'emotion', options: { mode: 'scale', steps: 3, situation: '아침부터 지금까지 걷고, 앉고, 쓰고, 놀았어요. 내 몸이 쉬지 않고 도와주었어요.', feeling: '고마움', ask: '내 몸에게 고마운 마음은 얼마나 큰가요?' }, prompt: '오늘 잘 움직여 준 내 몸에게 고마운 마음을 솔직하게 골라 보세요. 정답은 없어요.', target: { level: 'any' }, difficulty: 0.05 },
        ],
      },
    ],
    worksheet: {
      title: '안전하게 놀고 내 몸 아끼기',
      items: [
        { type: 'figure', wide: true, prompt: '안전한 행동에는 ○, 위험한 행동에는 × 를 카드 아래에 쓰세요.', tool: 'mindmap', figures: [{ options: { topic: '놀이터에서', slots: ['안전해요', '위험해요'], cards: ['차례를 기다려요', '그네 앞을 뛰어가요', '앉아서 미끄럼 타요'] }, caption: '' }], answer: '차례 ○, 그네 앞 ×, 앉아서 미끄럼 ○' },
        { type: 'choice', prompt: '넘어져 다쳤을 때 바로 할 일에 ○ 하세요.', options: ['선생님께 알려요', '숨겨요', '상처를 만져요'], answer: '선생님께 알려요' },
        { type: 'blank', prompt: '빈칸에 내 몸을 아끼는 말을 넣어 쓰세요.', text: '내 ___야, 오늘도 고마워.', answer: '(예) 다리, 손' },
        { type: 'short', prompt: '친구가 놀림을 받을 때 해 줄 말을 쓰세요.' },
      ],
      easy: {
        note: '다칠 수 있는 곳을 떠올리며 골라요.',
        items: [
          { type: 'choice', prompt: '안전한 행동에 ○ 하세요.', options: ['차례를 기다려요', '친구를 밀어요'], answer: '차례를 기다려요' },
          { type: 'choice', prompt: '내 몸을 아끼는 말에 ○ 하세요.', options: ['"고마워"', '"싫어"'], answer: '"고마워"' },
          { type: 'draw', prompt: '안전하게 노는 내 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 놓으면 초록 테두리가 생기고, 마음 크기는 세 칸이에요.',
      base: '모두 나눈 뒤 확인을 눌러요. 고른 말을 짝에게 소리 내어 말해요.',
      challenge: '놀이와 상관없는 함정 카드를 골라내야 해요. 위험한 행동마다 다칠 수 있는 곳을 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① "재미있으면 괜찮다"며 위험한 놀이를 고른다 → 다칠 수 있는 몸의 곳을 말하게 한다. ② 작은 상처는 숨긴다 → 작은 상처도 알려야 덧나지 않는다는 것을 짚는다. ③ 키·생김새를 깎아내리는 말을 농담으로 여긴다 → 들은 사람의 마음 날씨를 묻는다. 고마운 마음 크기는 채점하지 않으니 솔직하게 고르게 한다.',
  }));

  lessons.push(L(4, {
    title: '튼튼한 몸을 만드는 하루 습관 고르기',
    objective: '하루 가운데 몸을 튼튼하게 하는 습관을 골라 때에 맞게 잇고, 비 오는 날에도 할 수 있는 몸 움직이기를 정할 수 있다.',
    illustration: ART('a paper day clock with a child stretching in the morning sun, playing outside at recess and sleeping under the moon at night', '튼튼한 몸을 만드는 하루', [
      { motif: 'moon', x: 70, y: 60, s: 0.7 }, { motif: 'house', x: 110, y: 214 }, { motif: 'tree', x: 380, y: 214 }]),
    safety: [SPACE, STOP],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"어제 하루 동안 몸을 가장 많이 움직인 때는 언제였나요?" 아침, 쉬는 시간, 학교 끝난 뒤 가운데 손을 들게 한다. "몸이 튼튼해지려면 움직이기만 하면 될까요? 물 마시기, 잠자기도 함께 필요해요." 시연 단추로 \'아침에 일어나서\' 옆에 \'기지개 켜기\'가 놓이는 모습을 보여 준다.',
        student: '어제 하루 가운데 몸을 가장 많이 움직인 때를 떠올려 봐요.',
        demo: { tool: 'kitchen', options: { mode: 'match', cards: ['기지개 켜기', '이 닦고 눕기'], slots: [{ id: 's1', label: '아침에 일어나서' }], shuffle: false }, sequence: [{ match: { s1: '기지개 켜기' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 튼튼한 몸을 만드는 습관 고르기', minutes: 13, tool: 'kitchen',
            teacher: '"이렇게 하면 몸이 어떻게 될까요?" 항목마다 소리 내어 읽고 몸이 좋아지는지 묻는다. \'게임은 앉아서 하니 괜찮다\'는 학생에게 "밤늦게까지 하면 다음 날 몸이 어떤가요?"라고 되묻는다. 쉬는 시간 목록에서는 복도에서 뛰기가 움직임이어도 위험하다는 것을 짚는다.',
            task: '목록을 읽고 몸을 튼튼하게 하는 습관만 표시해요. 때에 맞는 습관도 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '몸을 튼튼하게 하는 하루 습관만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '튼튼한 몸을 만드는 하루', items: [{ id: 'out', text: '바깥에서 뛰어놀아요' }, { id: 'water', text: '물을 자주 마셔요' }, { id: 'game', text: '밤늦게까지 게임해요' }, { id: 'sleep', text: '일찍 자요' }] },
                target: { checklist: ['out', 'water', 'sleep'] }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { items: [{ id: 'out', text: '바깥에서 뛰어놀아요' }, { id: 'water', text: '물을 자주 마셔요' }, { id: 'game', text: '밤늦게까지 게임해요' }, { id: 'sleep', text: '일찍 자요' }, { id: 'lie', text: '주말 내내 누워서 지내요' }] } } } },
              { prompt: '쉬는 시간 10분 동안 몸을 안전하게 움직이는 방법만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '쉬는 시간 10분', items: [{ id: 'stretch', text: '기지개를 켜요' }, { id: 'walk', text: '운동장을 한 바퀴 걸어요' }, { id: 'sleep', text: '책상에 엎드려 있어요' }, { id: 'run', text: '복도에서 달리기 시합을 해요' }] },
                target: { checklist: ['stretch', 'walk'] }, difficulty: 0.15,
                predict: { q: '복도에서 달리기도 몸을 움직이는 것이니 좋을까요?', options: ['좋아요', '안 좋아요'], answer: 1 },
                conclude: '몸을 움직여도 부딪힐 수 있는 곳에서는 안전한 방법을 골라요.' },
              { prompt: '때마다 하면 좋은 습관 카드를 이어 보세요.', toolOptions: { mode: 'match', slots: [{ id: 'm', label: '아침에 일어나서' }, { id: 'r', label: '쉬는 시간에' }, { id: 'n', label: '잠자기 전에' }], cards: ['기지개 켜기', '친구와 바깥 놀이', '이 닦고 일찍 눕기'] },
                target: { match: { m: '기지개 켜기', r: '친구와 바깥 놀이', n: '이 닦고 일찍 눕기' } }, difficulty: 0.15 },
              { prompt: '학교가 끝난 뒤 몸을 움직이는 습관만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '학교 끝난 뒤', items: [{ id: 'bike', text: '공원에서 자전거를 타요' }, { id: 'snack', text: '과자를 먹으며 누워 있어요' }, { id: 'jump', text: '놀이터에서 줄넘기를 해요' }] }, target: { checklist: ['bike', 'jump'] }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 비 오는 날 교실 체조 (실천)', minutes: 14, tool: 'timer',
            teacher: '"비가 와서 운동장에 못 나가면 몸을 안 움직여도 될까요?" 대답을 듣고 교실 체조를 정한다. 타이머를 맞춘 뒤 모두 일어나 책상 사이에서 20초 동안 제자리 걷기·팔 돌리기를 하고 10초 쉬기를 세 번 한다. 쉬는 시간을 "숨 고르는 시간"이라고 부르게 한다. 둘레가 좁은 학생은 자리를 옮겨 준다.',
            task: '비 오는 날 할 교실 체조를 정하고, 타이머를 맞춰 직접 해 봐요.',
            levels: TIMER_LV,
            items: [
              { prompt: '교실에서 체조를 하기 전에 둘레를 살펴보고 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['책상 사이에서 두 팔을 벌려도 닿지 않아요', '바닥에 가방이나 물병이 없어요', '의자를 책상 안으로 넣었어요'] }, target: { safety: true }, difficulty: 0.05 },
              { prompt: '교실 체조: 20초 움직이고 10초 쉬기를 3번 하도록 타이머를 맞추세요.', toolOptions: { plan: { work: 10, rest: 5, rounds: 1 } }, target: { plan: { work: 20, rest: 10, rounds: 3 } }, difficulty: 0.15,
                levels: { easy: { prompt: '교실 체조: 20초 움직이기를 3번 하도록 타이머를 맞추세요. 쉬는 시간은 그대로 두어요.', target: { plan: { work: 20, rounds: 3 } } }, challenge: { prompt: '교실 체조: 30초 움직이고 15초 쉬기를 4번 하도록 타이머를 맞추세요.', target: { plan: { work: 30, rest: 15, rounds: 4 } } } } },
              { prompt: '타이머를 시작하고 제자리 걷기·팔 돌리기 체조를 끝까지 해 본 뒤 "다 했어요"를 누르세요.', toolOptions: { plan: { work: 20, rest: 10, rounds: 3 } }, free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"교실 체조를 하고 나니 몸이 어떤가요?" 두세 명의 느낌을 듣는다. 오늘 고른 습관 가운데 내일 꼭 할 것 하나를 짝에게 말하게 한 뒤 출구 질문을 푼다. 다음 시간부터는 다치지 않게 몸을 푸는 준비 운동을 배운다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'branch', situation: '눈이 많이 와서 체육 시간에 운동장에 못 나가요.', choices: [
            { id: 'gym', text: '교실에서 짝과 몸 풀기 체조를 해요', result: '몸이 개운해지고 기분도 좋아져요.', mood: '기쁨' },
            { id: 'sit', text: '엎드려서 눈이 그치기만 기다려요', result: '몸이 뻐근하고 졸려요.', mood: '걱정', why: '오래 엎드려 있으면 몸이 어떨까요?' },
            { id: 'run', text: '복도에서 달리기를 해요', result: '친구와 부딪혀 다칠 수 있어요.', mood: '무서움', why: '복도는 뛰는 곳이 아니에요.' }] }, prompt: '눈이 와서 운동장에 못 나가요. 어떻게 할까요?', target: { choice: 'gym' }, difficulty: 0.05 },
          { type: 'choice', prompt: '튼튼한 몸을 위해 잠자기 전에 하면 좋은 일은 무엇일까요?', options: ['이를 닦고 일찍 자요', '늦게까지 영상을 봐요', '과자를 많이 먹어요'], answer: 0, difficulty: 0.05, explain: '푹 자야 몸이 쉬고 다음 날 힘이 나요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '튼튼한 몸을 만드는 하루',
      items: [
        { type: 'figure', wide: true, prompt: '몸을 튼튼하게 하는 습관에 ✓ 하세요.', tool: 'kitchen', figures: [{ options: { mode: 'checklist', title: '나의 하루', items: [{ id: 'a', text: '물을 자주 마셔요' }, { id: 'b', text: '밤늦게 자요' }, { id: 'c', text: '바깥에서 놀아요' }, { id: 'd', text: '하루 종일 누워 있어요' }] }, caption: '' }], answer: '물 마시기, 바깥 놀이' },
        { type: 'table', prompt: '때마다 할 습관을 쓰세요.', columns: ['때', '할 습관'], cells: [['아침에 일어나서', ''], ['쉬는 시간에', ''], ['잠자기 전에', '']] },
        { type: 'choice', prompt: '비 오는 날 쉬는 시간에 하면 좋은 것에 ○ 하세요.', options: ['교실 체조', '복도 달리기', '엎드려 있기'], answer: '교실 체조' },
        { type: 'short', prompt: '내일 꼭 할 습관 하나를 쓰세요.' },
      ],
      easy: {
        note: '하면 몸이 좋아지는지 떠올리며 골라요.',
        items: [
          { type: 'choice', prompt: '몸을 튼튼하게 하는 습관에 ○ 하세요.', options: ['일찍 자요', '밤늦게 게임해요'], answer: '일찍 자요' },
          { type: 'choice', prompt: '비 오는 날 교실에서 할 것에 ○ 하세요.', options: ['체조', '달리기'], answer: '체조' },
          { type: 'short', prompt: '내일 할 습관을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '타이머에서 운동 시간과 횟수만 맞추어요. 습관 카드를 맞게 놓으면 초록 테두리가 생겨요.',
      base: '운동·쉬기·횟수를 모두 맞추고 체조를 끝까지 해요.',
      challenge: '체조를 30초씩 4번으로 늘리고, 습관 목록에 함정 항목이 더 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 움직이기만 하면 된다고 여기고 잠·물 마시기를 빼먹는다 → 셋이 함께여야 몸이 튼튼해진다고 짚는다. ② 복도 달리기도 운동이라고 고른다 → 어디서 하는지가 안전을 가른다. ③ 타이머의 운동·쉬기 칸을 바꾸어 넣는다 → "움직이는 시간이 먼저예요"라고 칸 이름을 손으로 짚게 한다.',
  }));

  // ───────────────────────── 5~8차시: 준비 운동·걷기·계단 오르기(안전한 신체 활동과 습관 실천) ─────────────────────────

  var HEAD_TOE_HINTS = ['몸의 맨 위에서 시작해 아래로 내려가며 차례를 정해요. 내 몸을 위에서부터 손으로 짚어 봐요.', '놓은 카드의 몸의 곳을 하나씩 짚어 보세요. 아래쪽 곳이 위쪽 곳보다 먼저 온 자리가 있어요.', '머리에서 발끝으로 내려가요. 목, 어깨, 허리, 무릎, 발목 차례예요.'];

  lessons.push(L(5, {
    title: '머리에서 발끝까지 준비 운동 차례 세우기',
    objective: '준비 운동을 하는 까닭을 말하고, 머리에서 발끝으로 차례를 세워 선생님을 따라 몸을 골고루 풀 수 있다.',
    illustration: ART('a line of paper children doing warm-up exercises from neck rolls to ankle circles, little curved arrows drawn from head to toe', '머리에서 발끝까지 몸 풀기', [
      { motif: 'tree', x: 80, y: 214 }, { motif: 'flower', x: 400, y: 230 }, { motif: 'bird', x: 320, y: 76 }]),
    safety: [SPACE, FLOOR, STOP],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"고양이는 낮잠에서 깨면 무엇부터 할까요?" 기지개 켜는 흉내를 함께 낸다. "우리 몸도 갑자기 세게 움직이면 깜짝 놀라 다칠 수 있어요. 그래서 운동 전에 몸을 깨우는 준비 운동을 해요." \'준비 운동은 안 해도 괜찮다\'는 대답이 나오면 그대로 받아 두고, 오늘 끝에 다시 묻는다고 말한다. 시연 단추로 목 돌리기 카드가 맨 앞에 놓이는 모습을 보여 준다.',
        student: '고양이처럼 기지개를 켜 봐요. 몸이 어떻게 달라졌나요?',
        demo: { tool: 'timer', options: { cards: ['발목 돌리기', '허리 돌리기', '목 돌리기'] }, sequence: [{ order: ['목 돌리기', '허리 돌리기', '발목 돌리기'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 준비 운동 차례 세우고 따라 하기', minutes: 15, tool: 'timer',
            teacher: '"몸을 빠짐없이 풀려면 어디서부터 시작하면 좋을까요? 머리에서 발끝으로 내려가면 한 곳도 빼먹지 않아요." 카드를 세운 뒤 모두 일어나 그 차례대로 한 동작에 여덟을 세며 따라 한다. 너무 세게 꺾는 학생에게 "아프지 않을 만큼만, 천천히 돌려요"라고 짚는다.',
            task: '준비 운동 카드를 머리에서 발끝 차례로 세우고, 둘레를 살핀 뒤 선생님을 따라 해 봐요.',
            levels: TIMER_LV,
            items: [
              { prompt: '준비 운동 카드를 머리에서 발끝으로 내려가는 차례로 놓아 보세요.', toolOptions: { cards: ['무릎 굽혔다 펴기', '목 돌리기', '발목 돌리기', '어깨 돌리기', '허리 돌리기'] },
                target: { order: ['목 돌리기', '어깨 돌리기', '허리 돌리기', '무릎 굽혔다 펴기', '발목 돌리기'] }, difficulty: 0.15, hints: HEAD_TOE_HINTS,
                levels: {
                  easy: { prompt: '준비 운동 카드 세 장을 머리에서 발끝으로 내려가는 차례로 놓아 보세요.', toolOptions: { cards: ['발목 돌리기', '목 돌리기', '허리 돌리기'] }, target: { order: ['목 돌리기', '허리 돌리기', '발목 돌리기'] } },
                  challenge: { prompt: '이번에는 발끝에서 시작해 머리 쪽으로 올라가는 차례로 준비 운동 카드를 놓아 보세요.', target: { order: ['발목 돌리기', '무릎 굽혔다 펴기', '허리 돌리기', '어깨 돌리기', '목 돌리기'] } },
                } },
              { prompt: '준비 운동을 하기 전에 둘레를 살펴보고 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['두 팔을 벌려도 친구와 닿지 않아요', '발밑에 걸릴 물건이 없어요', '실내화를 바르게 신었어요'] }, target: { safety: true }, difficulty: 0.05 },
              { prompt: '세운 차례대로 선생님을 따라 한 동작에 여덟을 세며 몸을 풀고 "다 했어요"를 누르세요.', toolOptions: { cards: ['목 돌리기', '어깨 돌리기', '허리 돌리기', '무릎 굽혔다 펴기', '발목 돌리기'] }, free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 오늘 할 운동에 맞춰 더 풀 곳 고르기', minutes: 12, tool: 'body',
            teacher: '"오늘 할 운동에서 가장 바쁜 곳은 한 번 더 풀어 주면 좋아요." 문항마다 그 운동을 자리에서 흉내 낸 뒤 고르게 한다. 고른 곳을 모두 함께 한 번 더 돌려 본다. 아무 곳이나 다 고르는 학생에게 "문장에서 말한 몸의 쪽(팔·다리·몸통)부터 찾아요"라고 짚는다.',
            task: '오늘 할 운동을 흉내 내 보고, 그 운동에서 많이 쓰여 한 번 더 풀어 줄 곳을 골라요.',
            levels: BODY_LV,
            items: [
              { prompt: '오늘은 공 던지기를 해요. 공을 던지는 팔에서 크게 돌아가는 곳을 골라 보세요.', toolOptions: { mode: 'parts', parts: ['어깨', '허리', '무릎', '발목'] }, target: { parts: ['어깨'] }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { parts: ['목', '어깨', '허리', '허벅지', '무릎', '발목'] } } } },
              { prompt: '오늘은 두 발 모아 뛰기를 해요. 다리에서 굽혔다 펴는 이음매를 모두 골라 보세요.', toolOptions: { mode: 'parts', parts: ['목', '손목', '무릎', '발목'] }, target: { parts: ['무릎', '발목'] }, difficulty: 0.15,
                predict: { q: '다리에서 굽혀지는 이음매는 몇 곳일까요?', options: ['한 곳', '두 곳'], answer: 1 },
                conclude: '뛰기 전에는 굽혔다 펴는 무릎과 발목을 꼭 풀어 줘요.' },
              { prompt: '오늘은 훌라후프 돌리기를 해요. 훌라후프를 돌리는 몸통 가운데의 곳을 골라 보세요.', toolOptions: { mode: 'parts', parts: ['목', '어깨', '허리', '손목'] }, target: { parts: ['허리'] }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { parts: ['목', '어깨', '가슴', '허리', '배', '손목'] } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"처음에 \'준비 운동은 안 해도 괜찮다\'고 했던 생각, 지금은 어떤가요?" 두세 명의 생각을 듣는다. 몸을 풀고 나니 몸이 어떻게 달라졌는지 한 낱말로 말하게 한 뒤 출구 질문을 푼다. 다음 시간에는 준비 운동을 하고 정한 만큼 걷기를 해 본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'timer', options: { cards: ['발목 돌리기', '어깨 으쓱하기', '허리 옆으로 굽히기', '목 좌우로 기울이기'] }, prompt: '네 동작을 머리에서 발끝으로 내려가는 차례로 놓아 보세요.', target: { order: ['목 좌우로 기울이기', '어깨 으쓱하기', '허리 옆으로 굽히기', '발목 돌리기'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '준비 운동 없이 바로 힘껏 달리면 어떻게 될 수 있을까요?', options: ['다칠 수 있어요', '더 빨라져요', '아무 일도 없어요'], answer: 0, difficulty: 0.1, explain: '몸이 덜 깨어 있으면 다리를 삐거나 근육이 놀랄 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '머리에서 발끝까지 준비 운동',
      items: [
        { type: 'figure', wide: true, prompt: '준비 운동을 머리에서 발끝 차례로 하려고 해요. 카드 아래에 1, 2, 3, 4를 쓰세요.', tool: 'timer', figures: [{ options: { cards: ['무릎 굽히기', '목 돌리기', '발목 돌리기', '어깨 돌리기'] }, caption: '' }], answer: '목 1, 어깨 2, 무릎 3, 발목 4' },
        { type: 'choice', prompt: '두 발 모아 뛰기 전에 한 번 더 풀어 줄 곳에 ○ 하세요.', options: ['무릎과 발목', '목과 귀', '손가락'], answer: '무릎과 발목' },
        { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '준비 운동을 하면 몸이 깨어나서 ___ 않아요.', answer: '다치지' },
        { type: 'check', prompt: '준비 운동 전에 확인한 것에 ✓ 하세요.', options: ['친구와 거리를 두었어요', '발밑에 물건이 없어요', '실내화를 바르게 신었어요'] },
      ],
      easy: {
        note: '내 몸을 위에서부터 손으로 짚으며 차례를 세어요.',
        items: [
          { type: 'choice', prompt: '준비 운동을 할 때 가장 먼저 풀 곳에 ○ 하세요.', options: ['목', '발목'], answer: '목' },
          { type: 'choice', prompt: '준비 운동을 하는 까닭에 ○ 하세요.', options: ['다치지 않으려고', '배가 고파서'], answer: '다치지 않으려고' },
          { type: 'draw', prompt: '준비 운동을 하는 내 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '준비 운동 카드가 세 장이에요. 몸의 곳을 누르면 이름이 바로 보여요.',
      base: '카드 다섯 장을 머리에서 발끝 차례로 세우고 따라 해요.',
      challenge: '발끝에서 머리로 올라가는 거꾸로 차례를 세우고, 고를 몸의 곳이 늘어나요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 준비 운동은 안 해도 다치지 않는다고 여긴다 → 갑자기 움직인 몸이 놀란다는 것을 기지개 비유로 짚는다. ② 목·허리를 세게 꺾는다 → "아프지 않을 만큼, 천천히"를 되풀이한다. ③ 차례를 외우기만 한다 → 내 몸을 위에서부터 손으로 짚게 하면 스스로 세운다.',
  }));

  lessons.push(L(6, {
    title: '정한 만큼 걷기를 끝까지 해내기',
    objective: '걷는 시간과 횟수를 정해 타이머를 맞추고, 운동장을 정한 만큼 끝까지 걸은 뒤 걸은 바퀴 수를 적을 수 있다.',
    illustration: ART('paper children walking in a line around a school track with a big friendly timer, one child cheering another with a thumbs-up', '정한 만큼 끝까지 걸어요', [
      { motif: 'tree', x: 70, y: 214 }, { motif: 'tree', x: 410, y: 214, color: 'mint' }, { motif: 'flower', x: 250, y: 232 }]),
    safety: [SPACE, STOP, '신발 끈을 묶고 앞사람과 두 걸음 떨어져 걸어요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"걷기도 운동일까요?" 손을 들게 한 뒤 "걷기는 빠르지 않아도, 누구나 자기 빠르기로 할 수 있는 좋은 운동이에요"라고 말한다. "오늘은 걷는 시간과 횟수를 먼저 정하고, 정한 만큼 끝까지 걸어 봐요." 시연 단추로 타이머의 걷는 시간이 늘어나는 모습을 보여 준다. 운동장에 나가기 전에 지난 시간 준비 운동을 함께 한다.',
        student: '지난 시간에 배운 준비 운동을 머리에서 발끝 차례로 해 봐요.',
        demo: { tool: 'timer', options: { plan: { work: 30, rest: 10, rounds: 1 } }, sequence: [{ plan: { work: 60, rest: 20, rounds: 3 } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 걷기 계획 맞추고 끝까지 걷기 (실천)', minutes: 19, tool: 'timer',
            teacher: '"걷는 시간, 쉬는 시간, 몇 번 할지 세 가지를 차례로 맞춰요." 타이머를 맞춘 뒤 운동장 트랙(또는 강당 가장자리)에서 신호에 맞추어 걷는다. "빨리 걷는 것보다 정한 만큼 끝까지 걷는 것이 오늘의 목표예요." 힘들어 멈추는 학생 곁에서 함께 천천히 걸어 준다. 기록은 남과 견주지 않는다.',
            task: '걷기 계획을 타이머에 맞추고, 둘레를 살핀 뒤 정한 만큼 끝까지 걸어요. 걸은 바퀴 수를 적어요.',
            levels: TIMER_LV,
            items: [
              { prompt: '운동장 걷기: 60초 걷고 20초 쉬기를 3번 하도록 타이머를 맞추세요.', toolOptions: { plan: { work: 30, rest: 10, rounds: 1 } }, target: { plan: { work: 60, rest: 20, rounds: 3 } }, difficulty: 0.15,
                levels: { easy: { prompt: '운동장 걷기: 60초 걷기를 3번 하도록 타이머를 맞추세요. 쉬는 시간은 그대로 두어요.', target: { plan: { work: 60, rounds: 3 } } }, challenge: { prompt: '운동장 걷기: 90초 걷고 15초 쉬기를 4번 하도록 타이머를 맞추세요.', target: { plan: { work: 90, rest: 15, rounds: 4 } } } } },
              { prompt: '걷기 전에 둘레와 몸을 살펴보고 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['신발 끈이 묶여 있어요', '걷는 길에 돌이나 웅덩이가 없어요', '앞사람과 두 걸음 떨어져 섰어요'] }, target: { safety: true }, difficulty: 0.05 },
              { prompt: '타이머를 시작하고 정한 만큼 끝까지 걸어 본 뒤 "다 했어요"를 누르세요.', toolOptions: { plan: { work: 60, rest: 20, rounds: 3 } }, free: true },
              { prompt: '걷기를 할 때마다 걸은 바퀴 수를 칸에 적어요.', toolOptions: { fields: ['1번째', '2번째', '3번째'], unit: '바퀴' }, target: { records: true }, difficulty: 0.1,
                levels: { easy: { toolOptions: { fields: ['1번째', '2번째'] } }, challenge: { toolOptions: { fields: ['1번째', '2번째', '3번째', '4번째'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 힘들 때 끝까지 해내는 마음', minutes: 8, tool: 'emotion',
            teacher: '"걷다가 다리가 무거워지면 어떻게 했나요?" 그만둔 경험도 나무라지 않고 듣는다. "그럴 때는 멈추기보다 조금 천천히 걸어요. 다만 어지럽거나 가슴이 아프면 그때는 바로 멈추고 알려요." 응원하는 말은 짝에게 실제로 해 보게 한다.',
            task: '걷다가 힘들 때 할 일을 고르고, 끝까지 걷도록 친구를 응원하는 말을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '두 바퀴째에 다리가 무거워졌어요. 어지럽지는 않아요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '두 바퀴째 걷는데 다리가 무거워졌어요. 어지럽거나 아프지는 않아요.', choices: [
                { id: 'slow', text: '조금 천천히 걸으며 끝까지 가요', result: '정한 만큼 다 걷고 뿌듯해요.', mood: '뿌듯함' },
                { id: 'sit', text: '바로 그 자리에 앉아 버려요', result: '뒤에 오던 친구가 걸려 넘어질 뻔해요.', mood: '걱정', why: '걷는 길 가운데에 앉으면 어떤 일이 생길까요?' },
                { id: 'cut', text: '운동장 가운데로 가로질러 가요', result: '공놀이하는 친구와 부딪힐 수 있어요.', mood: '무서움', why: '정한 길을 벗어나면 위험할 수 있어요.' }] }, target: { choice: 'slow' }, difficulty: 0.1 },
              { prompt: '끝까지 걷도록 친구를 응원하는 말만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '응원하는 말', cards: ['"조금만 더 힘내!"', '"너무 느려"', '"같이 걷자"', '"그만해"'] },
                target: { pick: ['"조금만 더 힘내!"', '"같이 걷자"'] }, difficulty: 0.05 },
              { prompt: '두 친구가 걷기를 마쳤어요. 어울리는 마음 카드를 이어 보세요.', toolOptions: { cards: ['뿌듯함', '아쉬움'], slots: [{ id: 's1', label: '정한 세 번을 끝까지 걸었어요' }, { id: 's2', label: '한 번만 걷고 그만두었어요' }] },
                target: { match: { s1: '뿌듯함', s2: '아쉬움' } }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"정한 만큼 끝까지 걸었나요? 끝까지 걷게 도와준 것은 무엇이었나요?" 천천히 걷기, 친구의 응원 같은 대답을 칠판에 적는다. 교실로 들어오며 천천히 걸어 숨을 고르게 한다. 출구 1번에서 운동과 쉬기를 바꾸어 넣은 학생은 칸 이름을 손으로 짚게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'timer', options: { plan: { work: 20, rest: 20, rounds: 2 } }, prompt: '강당 걷기: 40초 걷고 10초 쉬기를 4번 하도록 타이머를 맞추세요.', target: { plan: { work: 40, rest: 10, rounds: 4 } }, difficulty: 0.15 },
          { type: 'choice', prompt: '걷다가 어지럽고 가슴이 아파요. 어떻게 할까요?', options: ['참고 끝까지 걸어요', '바로 멈추고 선생님께 말해요', '더 빨리 걸어요'], answer: 1, difficulty: 0.1, explain: '끝까지 해내는 것도 중요하지만, 몸이 아프다는 신호에는 바로 멈추어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '정한 만큼 끝까지 걸어요',
      items: [
        { type: 'table', prompt: '오늘 걸은 바퀴 수를 쓰세요.', columns: ['', '1번째', '2번째', '3번째'], cells: [['걸은 바퀴', '', '', '']] },
        { type: 'figure', prompt: '타이머에 "60초 걷고 20초 쉬기를 3번"을 맞추려고 해요. 빈칸에 알맞은 수를 쓰세요.', tool: 'timer', figures: [{ options: { plan: { work: 30, rest: 10, rounds: 1 } }, caption: '걷기 ___초, 쉬기 ___초, ___번' }], answer: '60, 20, 3' },
        { type: 'choice', prompt: '걷다가 다리가 무거울 때 할 일에 ○ 하세요.', options: ['조금 천천히 걸어요', '길 가운데 앉아요', '가로질러 가요'], answer: '조금 천천히 걸어요' },
        { type: 'short', prompt: '끝까지 걷도록 친구에게 해 준 응원의 말을 쓰세요.' },
      ],
      easy: {
        note: '빨리 걷기보다 끝까지 걷기가 목표예요.',
        items: [
          { type: 'table', prompt: '걸은 바퀴 수를 쓰세요.', columns: ['', '1번째', '2번째'], cells: [['걸은 바퀴', '', '']] },
          { type: 'choice', prompt: '응원하는 말에 ○ 하세요.', options: ['"힘내!"', '"느려"'], answer: '"힘내!"' },
          { type: 'draw', prompt: '끝까지 걷는 내 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '타이머에서 걷는 시간과 횟수만 맞추고, 기록 칸이 두 개예요.',
      base: '걷기·쉬기·횟수를 모두 맞추고, 세 번 걸은 뒤 기록해요.',
      challenge: '90초씩 네 번 걷도록 맞추고, 네 번의 기록을 적어 처음과 끝을 견주어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 빨리 걷기 시합으로 바뀐다 → "정한 만큼 끝까지"가 목표라는 것을 되풀이한다. ② 힘들면 길 가운데 앉는다 → 천천히 걷기, 가장자리로 비켜 서기를 미리 약속한다. ③ 몸이 아픈 신호도 참는다 → 어지럼·가슴 통증은 바로 멈추는 신호라고 분명히 알려 준다. 날씨가 덥거나 미세먼지가 나쁜 날은 강당 가장자리 걷기로 바꾼다.',
  }));

  lessons.push(L(7, {
    title: '계단 오르기를 안전하게 정한 만큼 하기',
    objective: '계단을 안전하게 오르내리는 차례를 세우고, 손잡이를 잡고 정한 횟수만큼 계단 오르기를 끝까지 할 수 있다.',
    illustration: ART('paper children climbing school stairs one step at a time while holding the handrail, numbered steps glowing softly', '손잡이 잡고 한 칸씩', [
      { motif: 'house', x: 100, y: 214, color: 'sky' }, { motif: 'tree', x: 400, y: 214 }, { motif: 'star', x: 260, y: 70, s: 0.6 }]),
    safety: [STAIR, STOP, '앞사람과 한 칸 이상 떨어져 한 줄로 올라요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"우리 학교 1층에서 2층까지 계단은 몇 칸일까요?" 어림한 수를 두세 명에게 듣고 칠판에 적는다. "계단 오르기는 다리 힘을 기르는 좋은 운동이지만, 넘어지면 크게 다칠 수 있어요." 시연 단추로 계단 오르기 차례 카드가 놓이는 모습을 보여 준다. 오늘 직접 세어 보자고 말한다.',
        student: '우리 학교 1층에서 2층까지 계단이 몇 칸일지 어림해 봐요.',
        demo: { tool: 'timer', options: { cards: ['손잡이를 잡고 한 칸씩 올라요', '준비 운동을 해요'] }, sequence: [{ order: ['준비 운동을 해요', '손잡이를 잡고 한 칸씩 올라요'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 계단 오르기 차례 세우고 해 보기 (실천)', minutes: 19, tool: 'timer',
            teacher: '"계단 오르기도 준비 운동부터 시작해요. 꼭대기에 닿으면 무엇을 할까요?" 차례를 세운 뒤 반을 두 무리로 나누어 학교 계단에서 1층에서 2층까지 오르기를 정한 횟수만큼 한다. 선생님은 계단 위, 보조 선생님(또는 학급 도우미)은 아래에 선다. 두 칸씩 오르거나 손잡이를 놓는 학생은 바로 멈추게 한다.',
            task: '계단 오르기 차례를 세우고, 계단을 살펴본 뒤 손잡이를 잡고 정한 횟수만큼 올라요. 오른 횟수를 적어요.',
            levels: TIMER_LV,
            items: [
              { prompt: '계단 오르기를 안전하게 하는 차례대로 카드를 놓아 보세요.', toolOptions: { cards: ['꼭대기에서 멈춰 숨을 골라요', '준비 운동을 해요', '손잡이를 잡고 천천히 내려와요', '손잡이를 잡고 한 칸씩 올라요'] },
                target: { order: ['준비 운동을 해요', '손잡이를 잡고 한 칸씩 올라요', '꼭대기에서 멈춰 숨을 골라요', '손잡이를 잡고 천천히 내려와요'] }, difficulty: 0.15,
                hints: ['오르기 전에 몸부터 깨워요. 올라간 다음에는 바로 내려오지 않고 잠깐 쉬어요.', '놓은 차례대로 몸으로 따라 해 보세요. 숨을 고르기 전에 내려오는 자리가 있는지 살펴요.', '준비 운동 → 한 칸씩 오르기 → 꼭대기에서 숨 고르기 → 천천히 내려오기 차례예요.'],
                levels: { easy: { state: { order: ['준비 운동을 해요', '꼭대기에서 멈춰 숨을 골라요', '손잡이를 잡고 한 칸씩 올라요', '손잡이를 잡고 천천히 내려와요'] } } } },
              { prompt: '계단을 오르기 전에 살펴보고 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['손잡이를 잡을 수 있어요', '계단에 떨어진 물건이나 물기가 없어요', '앞 친구와 한 칸 넘게 떨어졌어요'] }, target: { safety: true }, difficulty: 0.05 },
              { prompt: '선생님 신호에 맞추어 계단 오르기를 정한 만큼 해 보고 "다 했어요"를 누르세요.', toolOptions: { cards: ['준비 운동을 해요', '손잡이를 잡고 한 칸씩 올라요', '꼭대기에서 멈춰 숨을 골라요', '손잡이를 잡고 천천히 내려와요'] }, free: true },
              { prompt: '1층에서 2층까지 오른 계단 칸 수와, 오르기를 끝까지 한 횟수를 적어요.', toolOptions: { fields: [{ label: '계단 칸 수', unit: '칸' }, { label: '끝까지 오른 횟수', unit: '번' }] }, target: { records: true }, difficulty: 0.1,
                levels: { easy: { toolOptions: { fields: [{ label: '끝까지 오른 횟수', unit: '번' }] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 계단에서 지킬 약속', minutes: 8, tool: 'mindmap',
            teacher: '"오늘 계단에서 가장 조심했던 것은 무엇이었나요?" 놀이처럼 오르고 싶어지는 순간(두 칸씩, 손잡이 미끄럼)을 솔직하게 말하게 한 뒤, 그때 생길 수 있는 일을 함께 떠올린다. 앞 친구가 느릴 때 앞지르지 않고 기다리는 것을 짚는다.',
            task: '계단에서 지킬 약속과 하면 안 되는 행동을 나누고, 앞 친구가 느릴 때 할 일을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '계단에서 하는 행동을 지킬 약속과 하면 안 되는 행동으로 나누어 보세요.', toolOptions: { topic: '계단에서', slots: ['지킬 약속', '하면 안 돼요'], cards: ['손잡이를 잡아요', '주머니에 손을 넣고 올라요', '한 줄로 차례를 지켜요', '손잡이를 타고 미끄러져요'] },
                target: { sort: { '지킬 약속': ['손잡이를 잡아요', '한 줄로 차례를 지켜요'], '하면 안 돼요': ['주머니에 손을 넣고 올라요', '손잡이를 타고 미끄러져요'] } }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['손잡이를 잡아요', '주머니에 손을 넣고 올라요', '한 줄로 차례를 지켜요', '손잡이를 타고 미끄러져요', '오늘은 체육복을 입었어요'] } } } },
              { prompt: '앞 친구가 너무 천천히 올라요. 할 일만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '할 일', cards: ['한 칸 떨어져 기다려요', '옆으로 앞질러 가요', '"천천히 가도 돼" 하고 말해요', '뒤에서 밀어요'] },
                target: { pick: ['한 칸 떨어져 기다려요', '"천천히 가도 돼" 하고 말해요'] }, difficulty: 0.1 },
              { prompt: '약속마다 그 까닭 카드를 이어 보세요.', toolOptions: { mode: 'match', topic: '계단 약속의 까닭', slots: [{ id: 's1', label: '손잡이를 잡아요' }, { id: 's2', label: '한 칸씩 올라요' }, { id: 's3', label: '앞 친구와 떨어져요' }], cards: ['미끄러져도 붙잡을 수 있어요', '발을 헛디디지 않아요', '앞 친구가 멈춰도 부딪히지 않아요'] },
                target: { match: { s1: '미끄러져도 붙잡을 수 있어요', s2: '발을 헛디디지 않아요', s3: '앞 친구가 멈춰도 부딪히지 않아요' } }, difficulty: 0.2 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"처음에 어림한 계단 칸 수와 직접 센 칸 수를 견주어 볼까요?" 칠판의 어림 수 옆에 센 수를 적는다. 계단을 오른 뒤 숨과 다리가 어땠는지 한 낱말로 말하게 하고 출구 질문을 푼다.',
        exitTicket: [
          { type: 'tool', tool: 'timer', options: { cards: ['천천히 걸어 교실로 들어와요', '손잡이를 잡고 한 칸씩 올라요', '발목과 무릎을 풀어요'] }, prompt: '계단 오르기를 하는 날의 차례대로 카드를 놓아 보세요.', target: { order: ['발목과 무릎을 풀어요', '손잡이를 잡고 한 칸씩 올라요', '천천히 걸어 교실로 들어와요'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '계단을 오를 때 손잡이를 잡는 까닭은 무엇일까요?', options: ['미끄러져도 붙잡을 수 있어서', '손이 심심해서', '빨리 오르려고'], answer: 0, difficulty: 0.05, explain: '손잡이를 잡고 있으면 발을 헛디뎌도 넘어지지 않게 붙잡을 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '계단 오르기를 안전하게',
      items: [
        { type: 'figure', wide: true, prompt: '계단 오르기를 안전하게 하는 차례대로 카드 아래에 1, 2, 3, 4를 쓰세요.', tool: 'timer', figures: [{ options: { cards: ['숨을 골라요', '준비 운동을 해요', '천천히 내려와요', '한 칸씩 올라요'] }, caption: '' }], answer: '준비 운동 1, 한 칸씩 2, 숨 고르기 3, 내려오기 4' },
        { type: 'table', prompt: '오늘 센 계단 칸 수와 오른 횟수를 쓰세요.', columns: ['어림한 칸 수', '직접 센 칸 수', '끝까지 오른 횟수'], rows: 1 },
        { type: 'choice', prompt: '계단에서 하면 안 되는 행동에 ○ 하세요.', options: ['손잡이를 타고 미끄러져요', '손잡이를 잡아요', '한 줄로 올라요'], answer: '손잡이를 타고 미끄러져요' },
        { type: 'short', prompt: '앞 친구가 천천히 오를 때 해 줄 말을 쓰세요.' },
      ],
      easy: {
        note: '손잡이, 한 칸씩, 한 줄로!',
        items: [
          { type: 'choice', prompt: '계단을 오를 때 잡는 것에 ○ 하세요.', options: ['손잡이', '친구 옷'], answer: '손잡이' },
          { type: 'table', prompt: '끝까지 오른 횟수를 쓰세요.', columns: ['끝까지 오른 횟수'], rows: 1 },
          { type: 'draw', prompt: '손잡이를 잡고 계단을 오르는 내 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '차례 카드 두 장이 바른 자리에 놓인 채 시작하고, 기록 칸이 하나예요.',
      base: '차례 네 장을 모두 세우고, 계단 칸 수와 오른 횟수를 적어요.',
      challenge: '계단 약속 나누기에 상관없는 함정 카드가 섞여 있어요. 어림한 수와 센 수의 차이도 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 계단 오르기를 시합처럼 서두른다 → 몇 번 했는지가 아니라 끝까지 안전하게 했는지가 목표다. ② 꼭대기에서 바로 돌아 내려온다 → 숨 고르기 자리를 정해 둔다. ③ 앞 친구를 앞지른다 → 앞지르기는 부딪힘의 가장 흔한 원인이라고 짚는다. 계단 활동은 다른 반 이동이 없는 시간에 하고, 교사 두 명(또는 위·아래 지킴이)이 선다.',
  }));

  lessons.push(L(8, {
    title: '준비·본·정리 운동으로 놀이 한 판 하기',
    objective: '놀이 한 판을 준비 운동, 본 운동, 정리 운동 차례로 계획하여 해 보고, 정리 운동을 하는 까닭을 말할 수 있다.',
    illustration: ART('paper children in three scenes: stretching together, playing a tail-tag game with ribbons, then breathing slowly with arms raised under a calm sky', '준비, 본, 정리 운동', [
      { motif: 'tree', x: 80, y: 214 }, { motif: 'flower', x: 400, y: 230 }, { motif: 'cloud', x: 330, y: 70 }]),
    safety: [SPACE, FLOOR, STOP],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"신나게 뛰어논 뒤에 바로 자리에 앉으면 몸이 어떤가요?" 숨이 계속 차거나 다리가 뻐근했던 경험을 듣는다. "놀이 한 판은 세 부분으로 해요. 몸을 깨우는 준비 운동, 힘껏 노는 본 운동, 몸을 가라앉히는 정리 운동." 시연 단추로 세 카드가 차례대로 놓이는 모습을 보여 준다.',
        student: '뛰어논 뒤 바로 앉았을 때 몸이 어땠는지 떠올려 봐요.',
        demo: { tool: 'timer', options: { cards: ['정리 운동', '준비 운동', '본 운동'] }, sequence: [{ order: ['준비 운동', '본 운동', '정리 운동'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 꼬리잡기 한 판 계획하고 해 보기 (실천)', minutes: 18, tool: 'timer',
            teacher: '"꼬리잡기 놀이를 하는 날, 무엇부터 할까요?" 차례와 타이머를 맞춘 뒤 강당에서 바지 뒤에 끼운 띠(꼬리)를 잡는 놀이를 한다. 놀이 중에 몸을 잡아당기거나 밀면 바로 멈춤 신호를 준다. 놀이가 끝나면 모두 천천히 걷고 숨을 크게 쉬는 정리 운동을 3분 동안 한다.',
            task: '꼬리잡기 한 판을 준비·본·정리 운동 차례로 세우고 타이머를 맞춘 뒤 실제로 해 봐요.',
            levels: TIMER_LV,
            items: [
              { prompt: '꼬리잡기 하는 날의 차례대로 카드를 놓아 보세요.', toolOptions: { cards: ['꼬리잡기 놀이', '천천히 걸으며 숨 고르기', '머리부터 발끝까지 몸 풀기'] },
                target: { order: ['머리부터 발끝까지 몸 풀기', '꼬리잡기 놀이', '천천히 걸으며 숨 고르기'] }, difficulty: 0.1,
                levels: {
                  easy: { prompt: '꼬리잡기 하는 날의 차례대로 카드를 놓아 보세요. 카드에 운동 이름이 적혀 있어요.', toolOptions: { cards: ['본 운동: 꼬리잡기 놀이', '정리 운동: 숨 고르기', '준비 운동: 몸 풀기'] }, target: { order: ['준비 운동: 몸 풀기', '본 운동: 꼬리잡기 놀이', '정리 운동: 숨 고르기'] } },
                  challenge: { prompt: '꼬리잡기 하는 날, 둘레 살피기까지 넣어 네 장을 차례대로 놓아 보세요.', toolOptions: { cards: ['꼬리잡기 놀이', '천천히 걸으며 숨 고르기', '둘레에 부딪칠 것이 없는지 살피기', '머리부터 발끝까지 몸 풀기'] }, target: { order: ['둘레에 부딪칠 것이 없는지 살피기', '머리부터 발끝까지 몸 풀기', '꼬리잡기 놀이', '천천히 걸으며 숨 고르기'] } },
                } },
              { prompt: '본 운동: 꼬리잡기를 40초 하고 20초 쉬기를 3번 하도록 타이머를 맞추세요.', toolOptions: { plan: { work: 20, rest: 10, rounds: 1 } }, target: { plan: { work: 40, rest: 20, rounds: 3 } }, difficulty: 0.15,
                levels: { easy: { prompt: '본 운동: 꼬리잡기를 40초 하기를 3번 하도록 타이머를 맞추세요. 쉬는 시간은 그대로 두어요.', target: { plan: { work: 40, rounds: 3 } } } } },
              { prompt: '세운 차례와 타이머대로 꼬리잡기 한 판을 해 보고 "다 했어요"를 누르세요.', toolOptions: { plan: { work: 40, rest: 20, rounds: 3 } }, free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 정리 운동은 왜 할까', minutes: 10, tool: 'kitchen',
            teacher: '"정리 운동을 하고 나니 숨이 어떻게 되었나요?" 손을 가슴에 대고 느끼게 한다. "정리 운동은 빨라진 숨과 뜨거워진 몸을 천천히 가라앉혀요." 정리 운동으로 다시 달리기를 고르는 학생에게 "정리 운동이 끝나면 숨이 어때야 할까요?"라고 되묻는다.',
            task: '정리 운동에 알맞은 것을 고르고, 세 가지 운동을 하는 까닭을 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '정리 운동으로 알맞은 것만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '정리 운동', items: [{ id: 'walk', text: '천천히 걸어요' }, { id: 'breath', text: '숨을 크게 들이쉬고 내쉬어요' }, { id: 'race', text: '친구와 다시 달리기 시합해요' }, { id: 'leg', text: '다리를 쭉 펴고 주물러요' }] },
                target: { checklist: ['walk', 'breath', 'leg'] }, difficulty: 0.1 },
              { prompt: '운동마다 하는 까닭 카드를 이어 보세요.', toolOptions: { mode: 'match', slots: [{ id: 'p', label: '준비 운동' }, { id: 'm', label: '본 운동' }, { id: 'c', label: '정리 운동' }], cards: ['몸을 깨워 다치지 않게 해요', '힘껏 놀며 몸을 튼튼하게 해요', '빨라진 숨을 천천히 가라앉혀요'] },
                target: { match: { p: '몸을 깨워 다치지 않게 해요', m: '힘껏 놀며 몸을 튼튼하게 해요', c: '빨라진 숨을 천천히 가라앉혀요' } }, difficulty: 0.15 },
              { prompt: '놀이 뒤 정리 운동을 빼먹으면 생길 수 있는 일만 골라 보세요.', toolOptions: { mode: 'pick', basket: '생길 수 있는 일', cards: ['다리가 뻐근해요', '숨이 한참 동안 차요', '키가 쑥 커요', '받아쓰기를 잘해요'] },
                target: { pick: ['다리가 뻐근해요', '숨이 한참 동안 차요'] }, difficulty: 0.15,
                predict: { q: '정리 운동을 안 하면 몸이 어떨까요?', options: ['똑같아요', '불편할 수 있어요'], answer: 1 },
                conclude: '정리 운동을 하면 숨과 몸이 편안하게 돌아와요.' },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"오늘 놀이 한 판에서 가장 신났던 때와 가장 편안했던 때는 언제였나요?" 본 운동과 정리 운동을 떠올리게 한다. 5~8차시에 배운 준비 운동·걷기·계단 오르기·정리 운동을 칠판에 한 줄로 묶어 보인 뒤 출구 질문을 푼다.',
        exitTicket: [
          { type: 'tool', tool: 'timer', options: { cards: ['공 주고받기 놀이', '천천히 걸으며 숨 고르기', '목·어깨·무릎 돌리기'] }, prompt: '공 주고받기 놀이를 하는 날의 차례대로 카드를 놓아 보세요.', target: { order: ['목·어깨·무릎 돌리기', '공 주고받기 놀이', '천천히 걸으며 숨 고르기'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '정리 운동을 하는 까닭은 무엇일까요?', options: ['빨라진 숨과 몸을 가라앉히려고', '더 빨리 달리려고', '놀이 시간을 늘리려고'], answer: 0, difficulty: 0.1, explain: '힘껏 움직인 뒤에는 천천히 걷고 숨을 고르며 몸을 편안하게 해요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '준비·본·정리 운동',
      items: [
        { type: 'figure', wide: true, prompt: '놀이 한 판의 차례대로 카드 아래에 1, 2, 3을 쓰세요.', tool: 'timer', figures: [{ options: { cards: ['숨 고르기', '몸 풀기', '꼬리잡기 놀이'] }, caption: '' }], answer: '몸 풀기 1, 꼬리잡기 2, 숨 고르기 3' },
        { type: 'table', prompt: '운동마다 한 것을 쓰세요.', columns: ['운동', '오늘 한 것'], cells: [['준비 운동', ''], ['본 운동', ''], ['정리 운동', '']] },
        { type: 'choice', prompt: '정리 운동으로 알맞은 것에 ○ 하세요.', options: ['천천히 걷기', '달리기 시합', '높이 뛰기'], answer: '천천히 걷기' },
        { type: 'short', prompt: '정리 운동을 하고 나서 내 숨은 어떻게 되었는지 쓰세요.' },
      ],
      easy: {
        note: '준비 → 본 → 정리, 세 가지를 기억해요.',
        items: [
          { type: 'choice', prompt: '놀이 전에 하는 운동에 ○ 하세요.', options: ['준비 운동', '정리 운동'], answer: '준비 운동' },
          { type: 'choice', prompt: '정리 운동에 ○ 하세요.', options: ['천천히 걷기', '달리기 시합'], answer: '천천히 걷기' },
          { type: 'draw', prompt: '꼬리잡기 놀이를 하는 내 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '차례 카드에 운동 이름이 적혀 있고, 타이머는 놀이 시간과 횟수만 맞추어요.',
      base: '카드 세 장으로 차례를 세우고 놀이·쉬기·횟수를 모두 맞추어요.',
      challenge: '둘레 살피기까지 네 장의 차례를 세워요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 정리 운동을 놀이가 끝난 것으로 여겨 건너뛴다 → 정리 운동까지가 놀이 한 판이라고 정해 둔다. ② 정리 운동으로 다시 뛴다 → "숨이 가라앉는가"를 기준으로 묻는다. ③ 꼬리잡기에서 옷을 잡아당긴다 → 꼬리 띠만 잡는 약속을 시작 전에 몸으로 연습한다.',
  }));

  // ───────────────────────── 9~12차시: 움직인 뒤 숨과 몸 돌아보기(몸 인식과 실천 돌아보기) ─────────────────────────

  lessons.push(L(9, {
    title: '움직이기 전과 뒤에 숨 세어 견주기',
    objective: '움직이기 전과 뒤, 쉰 뒤에 15초 동안 숨 쉰 횟수를 세어 적고, 움직인 뒤 숨과 몸이 어떻게 달라졌는지 말할 수 있다.',
    illustration: ART('a paper child with one hand on the belly counting breaths before and after jumping, three small paper cards with tally marks floating beside', '숨이 어떻게 달라질까요?', [
      { motif: 'tree', x: 80, y: 214 }, { motif: 'cloud', x: 330, y: 74 }, { motif: 'flower', x: 400, y: 232 }]),
    safety: [SPACE, FLOOR, STOP],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"눈을 감고 손을 배에 얹어 보세요. 배가 올라갔다 내려가는 것이 느껴지나요?" 올라갔다 내려가면 숨 한 번이라고 약속한다. "오늘은 움직이기 전과 뒤에 숨이 어떻게 달라지는지 직접 세어 볼 거예요." 시연 단추로 기록판 세 칸에 수가 적히는 모습을 보여 준다. 숨을 일부러 참거나 빨리 쉬지 말고 그냥 세라고 말한다.',
        student: '손을 배에 얹고 배가 올라갔다 내려가는 것을 느껴 봐요.',
        demo: { tool: 'timer', options: { fields: ['움직이기 전', '움직인 바로 뒤', '2분 쉰 뒤'], unit: '번' }, sequence: [{ records: [5, 11, 6] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 숨 세어 기록하기 (측정)', minutes: 14, tool: 'timer',
            teacher: '선생님이 15초를 재는 동안 모두 손을 배에 얹고 숨을 센다. 그다음 1분 동안 제자리 뛰기를 하고 바로 다시 15초 동안 센다. 2분 동안 앉아 쉰 뒤 한 번 더 센다. "수가 친구와 달라도 괜찮아요. 내 몸의 수를 적어요." 뛰기를 힘들어하는 학생은 제자리 걷기로 바꾸어 준다.',
            task: '움직이기 전, 1분 제자리 뛰기 바로 뒤, 2분 쉰 뒤에 15초 동안 숨 쉰 횟수를 세어 적어요.',
            levels: TIMER_LV,
            items: [
              { prompt: '1분 제자리 뛰기: 60초 뛰기를 1번 하도록 타이머를 맞추세요.', toolOptions: { plan: { work: 20, rest: 10, rounds: 2 } }, target: { plan: { work: 60, rounds: 1 } }, difficulty: 0.1 },
              { prompt: '세 번 센 내 숨 횟수를 칸에 적어요.', toolOptions: { fields: ['움직이기 전', '움직인 바로 뒤', '2분 쉰 뒤'], unit: '번' }, target: { records: true }, difficulty: 0.1,
                levels: { easy: { toolOptions: { fields: ['움직이기 전', '움직인 바로 뒤'] } } } },
              { prompt: '준호의 숨 기록이에요. 전에는 5번, 바로 뒤에는 12번, 쉰 뒤에는 6번이었어요. 그대로 옮겨 적어 보세요.', toolOptions: { fields: ['움직이기 전', '움직인 바로 뒤', '2분 쉰 뒤'], unit: '번' }, target: { records: [5, 12, 6] }, difficulty: 0.15,
                predict: { q: '쉰 뒤의 숨은 어떻게 될까요?', options: ['더 빨라져요', '다시 느려져요'], answer: 1 },
                conclude: '움직이면 숨이 빨라지고, 쉬면 다시 느려져요. 몸이 스스로 돌아와요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 숨이 찬 것은 나쁜 일일까', minutes: 12, tool: 'emotion',
            teacher: '"숨이 차면 몸이 고장 난 걸까요?" 손을 들어 생각을 나누게 한다. "숨이 차는 것은 몸이 열심히 일했다는 뜻이에요. 쉬면 돌아오지요. 그런데 가슴이 아프거나 어지러운 것은 다른 신호예요. 그때는 바로 멈추고 알려요." 두 가지를 칠판에 나란히 적는다.',
            task: '움직이기 전과 뒤의 몸을 나누고, 숨이 찬 친구에게 해 줄 말과 바로 멈춰야 할 신호를 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '몸의 모습을 움직이기 전과 움직인 바로 뒤로 나누어 보세요.', toolOptions: { mode: 'sort', weather: false, slots: ['움직이기 전', '움직인 바로 뒤'], cards: ['숨이 빨라져요', '얼굴이 빨개져요', '숨이 느리고 고르게 쉬어져요', '몸이 땀으로 촉촉해요'] },
                target: { sort: { '움직이기 전': ['숨이 느리고 고르게 쉬어져요'], '움직인 바로 뒤': ['숨이 빨라져요', '얼굴이 빨개져요', '몸이 땀으로 촉촉해요'] } }, difficulty: 0.1 },
              { prompt: '하준이가 뛰고 나서 숨이 차자 "내 몸이 고장 났나 봐"라고 해요. 어떻게 말해 줄까요?', toolOptions: { mode: 'branch', who: '하준', situation: '하준이가 1분 동안 뛰고 나서 숨이 차자 "내 몸이 고장 났나 봐" 하고 걱정해요.', choices: [
                { id: 'ok', text: '"몸이 열심히 일한 거야. 쉬면 돌아와"', result: '하준이가 숨을 고르고 다시 웃어요.', mood: '편안함' },
                { id: 'never', text: '"다시는 뛰지 마"', result: '하준이가 몸 움직이기를 무서워하게 돼요.', mood: '무서움', why: '숨이 차는 것은 위험한 일이 아니에요.' },
                { id: 'more', text: '"숨차도 계속 뛰어"', result: '하준이가 숨을 고를 틈이 없어요.', mood: '걱정', why: '숨이 찰 때는 잠깐 쉬어도 괜찮아요.' }] }, target: { choice: 'ok' }, difficulty: 0.1 },
              { prompt: '움직이다가 바로 멈추고 선생님께 알려야 할 신호만 골라 보세요.', toolOptions: { mode: 'pick', weather: false, basket: '바로 멈출 신호', cards: ['가슴이 아파요', '어지러워요', '숨이 조금 빨라요', '얼굴이 조금 빨개요'] },
                target: { pick: ['가슴이 아파요', '어지러워요'] }, difficulty: 0.2,
                predict: { q: '숨이 조금 빨라지면 바로 멈춰야 할까요?', options: ['멈춰야 해요', '안 멈춰도 돼요'], answer: 1 },
                conclude: '숨이 빨라지는 것은 당연한 일이고, 아프거나 어지러운 것은 멈춤 신호예요.' },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"세 번 센 수를 보며 내 숨이 어떻게 달라졌는지 짝에게 말해 봐요." 두세 명이 말하게 한 뒤 출구 질문을 푼다. 오늘부터 닷새 동안 \'몸 움직인 기록 카드\'에 날마다 바깥에서 놀거나 걸은 바퀴 수를 적어 오게 하고, 12차시에 함께 돌아본다고 알려 준다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'sort', weather: false, slots: ['움직이기 전', '움직인 바로 뒤'], cards: ['가슴이 쿵쿵 빠르게 뛰어요', '가슴이 조용히 뛰어요'] }, prompt: '두 카드를 움직이기 전과 움직인 바로 뒤로 나누어 보세요.', target: { sort: { '움직이기 전': ['가슴이 조용히 뛰어요'], '움직인 바로 뒤': ['가슴이 쿵쿵 빠르게 뛰어요'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '서아의 숨이 뛰기 전에는 6번, 뛴 바로 뒤에는 13번이었어요. 무엇을 알 수 있나요?', options: ['뛰고 나면 숨이 빨라져요', '뛰고 나면 숨이 느려져요', '숨은 늘 똑같아요'], answer: 0, difficulty: 0.15, explain: '13번이 6번보다 많아요. 움직이면 숨이 빨라져요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '움직이기 전과 뒤의 내 숨',
      items: [
        { type: 'table', prompt: '15초 동안 숨 쉰 횟수를 쓰세요.', columns: ['움직이기 전', '움직인 바로 뒤', '2분 쉰 뒤'], rows: 1 },
        { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '움직이면 숨이 ___지고, 쉬면 다시 ___져요.', answer: '빨라, 느려' },
        { type: 'choice', prompt: '바로 멈추고 알려야 할 신호에 ○ 하세요.', options: ['어지러워요', '숨이 조금 빨라요', '땀이 조금 나요'], answer: '어지러워요' },
        { type: 'short', prompt: '뛰고 나서 숨이 찬 친구에게 해 줄 말을 쓰세요.' },
      ],
      easy: {
        note: '손을 배에 얹고, 배가 올라갔다 내려가면 한 번이에요.',
        items: [
          { type: 'table', prompt: '숨 쉰 횟수를 쓰세요.', columns: ['움직이기 전', '움직인 바로 뒤'], rows: 1 },
          { type: 'choice', prompt: '움직인 뒤 숨은 어떻게 되나요? ○ 하세요.', options: ['빨라져요', '느려져요'], answer: '빨라져요' },
          { type: 'draw', prompt: '숨을 세는 내 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '기록 칸이 두 개(전·뒤)예요. 카드를 맞게 놓으면 초록 테두리가 생겨요.',
      base: '세 번 세어 적고, 준호의 기록도 옮겨 적어요.',
      challenge: '초시계로 15초를 직접 재며 세고, 바로 뒤와 쉰 뒤의 수 차이를 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 숨이 차면 몸에 나쁜 일이 생긴 것이라고 여긴다 → 쉰 뒤 수가 다시 줄어든 기록으로 보여 준다. ② 반대로 어지럼·가슴 통증도 참는다 → 숨찬 것과 아픈 것을 칠판에 나누어 적는다. ③ 숨을 일부러 참거나 빨리 쉰다 → "그냥 쉬는 숨을 세요"를 되풀이한다. 천식 등 호흡이 불편한 학생은 미리 살펴 걷기로 바꾼다.',
  }));

  lessons.push(L(10, {
    title: '숨 고르기 하며 몸의 신호 알아차리기',
    objective: '움직인 뒤 몸에 생기는 신호를 차례대로 말하고, 가슴과 배에 손을 얹어 숨 고르기를 하며 몸이 편안해지는 것을 느낄 수 있다.',
    illustration: ART('paper children sitting cross-legged with one hand on the chest and one on the belly, slow breathing waves drawn as soft ribbons above them', '숨을 천천히 골라요', [
      { motif: 'tree', x: 90, y: 214 }, { motif: 'leaf', x: 380, y: 210 }, { motif: 'moon', x: 70, y: 66, s: 0.6 }]),
    safety: [SPACE, STOP],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"지난 시간에 뛰고 나서 숨이 빨라졌지요. 그때 몸에서 또 무엇이 느껴졌나요?" 가슴이 쿵쿵, 얼굴이 뜨거움, 땀 같은 대답을 칠판에 적는다. "이런 것을 몸의 신호라고 해요. 몸이 \'나 지금 열심히 일하고 있어\'라고 알려 주는 거예요." 시연 단추로 장면 카드가 차례대로 놓이는 모습을 보여 준다.',
        student: '뛰고 나서 몸에서 느껴진 것을 하나 떠올려 봐요.',
        demo: { tool: 'story', options: { cards: [{ id: 'run', text: '운동장을 달려요', motif: 'sun' }, { id: 'pant', text: '숨이 차요', motif: 'cloud' }], slots: ['처음', '나중'], shuffle: false }, sequence: [{ order: ['run', 'pant'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 몸의 신호가 생기고 사라지는 차례', minutes: 13, tool: 'story',
            teacher: '"이야기 속 친구의 몸은 어떤 차례로 달라졌을까요?" 장면 카드를 소리 내어 읽고 몸으로 흉내 낸 뒤 놓게 한다. 마지막 장면을 숨이 찬 장면으로 놓는 학생에게 "쉬고 나면 숨은 어떻게 되었지요?"라고 지난 시간 기록을 떠올리게 한다.',
            task: '움직인 뒤 몸의 신호가 생기고 사라지는 차례대로 장면 카드를 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '줄넘기를 한 민지의 몸이 달라진 차례대로 장면 카드를 놓아 보세요.', toolOptions: { cards: [{ id: 'jump', text: '줄넘기를 해요', motif: 'sun' }, { id: 'pant', text: '숨이 차고 가슴이 쿵쿵 뛰어요', motif: 'cloud' }, { id: 'walk', text: '천천히 걸으며 숨을 크게 쉬어요', motif: 'leaf' }, { id: 'calm', text: '숨이 다시 고르게 돼요', motif: 'flower' }] },
                target: { order: ['jump', 'pant', 'walk', 'calm'] }, difficulty: 0.1 },
              { prompt: '더운 날 공놀이를 한 준호의 몸이 달라진 차례대로 놓아 보세요.', toolOptions: { cards: [{ id: 'ball', text: '햇볕 아래 공놀이를 해요', motif: 'sun' }, { id: 'sweat', text: '땀이 나고 목이 말라요', motif: 'cloud' }, { id: 'water', text: '그늘에서 물을 마셔요', motif: 'tree' }, { id: 'cool', text: '몸이 시원해져요', motif: 'leaf' }] },
                target: { order: ['ball', 'sweat', 'water', 'cool'] }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: [{ id: 'ball', text: '햇볕 아래 공놀이를 해요', motif: 'sun' }, { id: 'sweat', text: '땀이 나고 목이 말라요', motif: 'cloud' }, { id: 'water', text: '그늘에서 물을 마셔요', motif: 'tree' }, { id: 'cool', text: '몸이 시원해져요', motif: 'leaf' }, { id: 'snack', text: '과자를 먹으며 공놀이를 해요', motif: 'star' }] } } } },
              { prompt: '숨이 찬 하준이에게 서아가 말해요. 빈칸에 알맞은 카드를 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['열심히 일했다는', '고장 났다는'], slots: [{ id: 'b1', who: '서아', motif: 'flower', label: '숨이 찬 건 몸이 ___ 뜻이야.' }] },
                target: { fill: { b1: '열심히 일했다는' } }, difficulty: 0.05 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 손을 얹고 숨 고르기 (실천)', minutes: 13, tool: 'body',
            teacher: '모두 30초 동안 제자리 뛰기를 한 뒤 앉는다. "한 손은 가슴에, 한 손은 배에 얹어요. 코로 넷을 세며 들이쉬고, 입으로 넷을 세며 내쉬어요." 네 번 되풀이한 뒤 "손 아래에서 무엇이 느껴졌나요?"라고 묻는다. 고르기 전에 반드시 손을 직접 얹어 보게 한다.',
            task: '30초 뛴 뒤 가슴과 배에 손을 얹고 숨 고르기를 해 봐요. 손 아래에서 느껴진 곳을 골라요.',
            levels: BODY_LV,
            items: [
              { prompt: '뛰고 나서 손을 얹으면 쿵쿵 뛰는 것이 가장 잘 느껴지는 곳을 골라 보세요.', toolOptions: { mode: 'parts', parts: ['가슴', '배', '무릎', '귀'] }, target: { parts: ['가슴'] }, difficulty: 0.1 },
              { prompt: '숨을 크게 들이쉴 때 부풀어 오르는 곳을 모두 골라 보세요.', toolOptions: { mode: 'parts', parts: ['목', '가슴', '배', '무릎'] }, target: { parts: ['가슴', '배'] }, difficulty: 0.2,
                predict: { q: '숨을 크게 쉬면 배도 움직일까요?', options: ['움직여요', '안 움직여요'], answer: 0 },
                conclude: '숨을 크게 쉬면 가슴과 배가 함께 부풀었다 꺼져요.',
                levels: { challenge: { toolOptions: { parts: ['목', '어깨', '가슴', '배', '허리', '무릎'] } } } },
              { prompt: '넷 세며 들이쉬고 넷 세며 내쉬기를 네 번 해 보고 "다 했어요"를 누르세요.', toolOptions: { mode: 'parts', parts: ['가슴', '배'] }, free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"숨 고르기를 하고 나니 가슴과 배가 어떻게 되었나요?" 몇 명이 몸의 느낌을 말하게 한다. 화가 나거나 긴장될 때도 같은 숨 고르기를 쓸 수 있다고 알려 준다. 몸 움직인 기록 카드를 잘 적고 있는지 확인하고 출구 질문을 푼다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { cards: [{ id: 'climb', text: '계단을 끝까지 올라요', motif: 'house' }, { id: 'rest', text: '꼭대기에서 숨을 골라요', motif: 'leaf' }, { id: 'hot', text: '다리가 뜨겁고 숨이 차요', motif: 'sun' }] }, prompt: '계단을 오른 서아의 몸이 달라진 차례대로 놓아 보세요.', target: { order: ['climb', 'hot', 'rest'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '숨 고르기를 할 때 알맞은 방법은 무엇일까요?', options: ['넷 세며 천천히 들이쉬고 내쉬어요', '숨을 오래 참아요', '빠르게 헉헉 쉬어요'], answer: 0, difficulty: 0.1, explain: '천천히 세며 쉬면 빨라진 숨이 고르게 돌아와요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '몸의 신호와 숨 고르기',
      items: [
        { type: 'figure', wide: true, prompt: '민지의 몸이 달라진 차례대로 카드 아래에 1, 2, 3, 4를 쓰세요.', tool: 'story', figures: [{ options: { cards: [{ id: 'calm', text: '숨이 고르게 돼요', motif: 'flower' }, { id: 'jump', text: '줄넘기를 해요', motif: 'sun' }, { id: 'walk', text: '천천히 걸어요', motif: 'leaf' }, { id: 'pant', text: '숨이 차요', motif: 'cloud' }] }, caption: '' }], answer: '줄넘기 1, 숨이 차요 2, 천천히 걸어요 3, 고르게 돼요 4' },
        { type: 'choice', prompt: '숨을 크게 쉴 때 부풀어 오르는 곳에 ○ 하세요.', options: ['가슴과 배', '무릎과 발목', '귀'], answer: '가슴과 배' },
        { type: 'blank', prompt: '숨 고르기 방법을 빈칸에 쓰세요.', text: '코로 ___을 세며 들이쉬고, 입으로 넷을 세며 내쉬어요.', answer: '넷' },
        { type: 'short', prompt: '숨 고르기를 하고 난 뒤 내 몸의 느낌을 쓰세요.' },
      ],
      easy: {
        note: '손을 가슴과 배에 얹고 느껴 봐요.',
        items: [
          { type: 'choice', prompt: '뛰고 나서 쿵쿵 뛰는 곳에 ○ 하세요.', options: ['가슴', '귀'], answer: '가슴' },
          { type: 'choice', prompt: '숨이 찰 때 할 일에 ○ 하세요.', options: ['천천히 숨 고르기', '숨 참기'], answer: '천천히 숨 고르기' },
          { type: 'draw', prompt: '숨 고르기를 하는 내 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 맞게 놓으면 초록 테두리가 생기고, 몸의 곳을 누르면 이름이 보여요.',
      base: '장면 카드 네 장의 차례를 세우고, 직접 손을 얹어 본 뒤 골라요.',
      challenge: '상관없는 장면 카드가 섞여 있고, 고를 몸의 곳이 늘어나요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 숨 고르기를 숨 참기로 한다 → 선생님이 손가락 넷을 접으며 함께 센다. ② 몸의 신호를 무서운 것으로만 여긴다 → 생겼다가 사라지는 차례를 장면으로 보여 준다. ③ 손을 얹어 보지 않고 고른다 → 반드시 느낀 뒤 고르게 한다.',
  }));

  lessons.push(L(11, {
    title: '내 몸에게 고마운 말 소리 내어 건네기',
    objective: '오늘 내 몸의 곳이 해 준 일을 떠올려, 내 몸을 아끼는 말을 골라 짝에게 소리 내어 말할 수 있다.',
    illustration: ART('a paper child holding a small heart-shaped letter addressed to her own hands, eyes and legs, tiny speech bubbles saying thank you', '내 몸아, 고마워', [
      { motif: 'flower', x: 90, y: 228 }, { motif: 'star', x: 380, y: 76, s: 0.7 }, { motif: 'tree', x: 400, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"오늘 아침부터 지금까지 내 눈은 무엇을 보았나요? 내 다리는 어디를 갔나요?" 두세 명에게 묻는다. "내 몸은 하루 종일 쉬지 않고 나를 도와줘요. 오늘은 내 몸에게 고맙다는 말을 해 볼 거예요." 선생님이 먼저 "다리야, 오늘 계단을 끝까지 올라 줘서 고마워"라고 말해 본다. 시연 단추로 말풍선 빈칸이 채워지는 모습을 보여 준다.',
        student: '오늘 내 눈, 귀, 다리가 해 준 일을 하나씩 떠올려 봐요.',
        demo: { tool: 'story', options: { mode: 'fill', cards: ['올라 줘서 고마워', '왜 이렇게 느려'], slots: [{ id: 'b1', who: '선생님', motif: 'house', label: '다리야, 계단을 끝까지 ___.' }], shuffle: false }, sequence: [{ fill: { b1: '올라 줘서 고마워' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 몸이 해 준 일과 고마운 말', minutes: 13, tool: 'story',
            teacher: '"눈, 귀, 다리가 오늘 무엇을 해 주었는지 이어 봐요." 카드를 놓은 뒤 그 일을 한 몸의 곳을 손으로 짚게 한다. 말풍선을 채운 학생은 그 말을 작은 소리로 읽어 보게 한다. 깎아내리는 말(느려, 못생겼어)을 고르는 학생에게 "그 말을 들은 다리는 어떤 마음일까요?"라고 묻는다.',
            task: '몸의 곳마다 오늘 해 준 일을 잇고, 고마운 말로 말풍선을 채워요.',
            levels: CARD_LV,
            items: [
              { prompt: '몸의 곳마다 오늘 해 준 일 카드를 이어 보세요.', toolOptions: { mode: 'match', slots: [{ id: 'eye', label: '눈' }, { id: 'ear', label: '귀' }, { id: 'leg', label: '다리' }], cards: ['칠판 글씨를 보았어요', '선생님 말씀을 들었어요', '운동장을 걸었어요'] },
                target: { match: { eye: '칠판 글씨를 보았어요', ear: '선생님 말씀을 들었어요', leg: '운동장을 걸었어요' } }, difficulty: 0.05,
                levels: { challenge: { toolOptions: { slots: [{ id: 'eye', label: '눈' }, { id: 'ear', label: '귀' }, { id: 'leg', label: '다리' }, { id: 'hand', label: '손' }], cards: ['칠판 글씨를 보았어요', '선생님 말씀을 들었어요', '운동장을 걸었어요', '연필로 글씨를 썼어요'] }, target: { match: { eye: '칠판 글씨를 보았어요', ear: '선생님 말씀을 들었어요', leg: '운동장을 걸었어요', hand: '연필로 글씨를 썼어요' } }, prompt: '몸의 네 곳마다 오늘 해 준 일 카드를 이어 보세요.' } } },
              { prompt: '내 몸에게 하는 말풍선 두 개를 알맞은 카드로 채워 보세요.', toolOptions: { mode: 'fill', cards: ['올라 줘서 고마워', '그려 줘서 고마워', '왜 이렇게 느려'], slots: [{ id: 'b1', who: '나', motif: 'house', label: '다리야, 계단을 끝까지 ___.' }, { id: 'b2', who: '나', motif: 'flower', label: '손아, 예쁜 그림을 ___.' }] },
                target: { fill: { b1: '올라 줘서 고마워', b2: '그려 줘서 고마워' } }, difficulty: 0.1 },
              { prompt: '내 몸을 아끼는 말만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '내 몸을 아끼는 말', cards: ['"눈아, 책을 읽게 해 줘서 고마워"', '"내 귀는 이상해"', '"팔아, 오늘 많이 힘썼지?"', '"내 몸은 별로야"'] },
                target: { pick: ['"눈아, 책을 읽게 해 줘서 고마워"', '"팔아, 오늘 많이 힘썼지?"'] }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 짝에게 소리 내어 말하기 (실천)', minutes: 13, tool: 'emotion',
            teacher: '"이제 내가 고른 몸의 곳에게 고마운 말을 지어서 짝에게 들려줘요. 짝은 끝까지 듣고 \'좋은 말이야\' 하고 대답해요." 쑥스러워하는 학생에게는 선생님이 앞부분 \'○○야, 오늘 …해 줘서\'를 건네준다. 다 말한 뒤 마음 카드를 고르게 한다.',
            task: '내 몸에게 고마운 말을 지어 짝에게 소리 내어 들려주고, 그때 마음을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '짝과 번갈아 내 몸에게 고마운 말을 소리 내어 들려주고 "다 했어요"를 누르세요.', toolOptions: { cards: ['고마움', '뿌듯함'], slots: [{ id: 's1', label: '내 몸에게 고마운 말을 했어요' }] }, free: true },
              { prompt: '서아가 거울을 보며 "나는 왜 이렇게 생겼지" 하고 한숨을 쉬어요. 어떻게 말해 줄까요?', toolOptions: { mode: 'branch', who: '서아', situation: '서아가 거울을 보며 "나는 왜 이렇게 생겼지" 하고 한숨을 쉬어요.', choices: [
                { id: 'good', text: '"너는 웃는 얼굴이 참 밝아"', result: '서아가 거울 속 자기를 보고 웃어요.', mood: '기쁨' },
                { id: 'agree', text: '"응, 좀 이상해"', result: '서아가 더 속상해져요.', mood: '속상함', why: '그 말을 들은 서아는 어떤 마음일까요?' },
                { id: 'leave', text: '못 본 척 지나가요', result: '서아는 혼자 속상한 채로 있어요.', mood: '슬픔', why: '서아 곁에서 해 줄 수 있는 말을 떠올려 봐요.' }] }, target: { choice: 'good' }, difficulty: 0.1 },
              { prompt: '두 친구가 들은 말에 어울리는 마음 카드를 이어 보세요.', toolOptions: { cards: ['고마움', '부끄러움', '속상함'], slots: [{ id: 's1', label: '짝이 "좋은 말이야" 하고 웃어 줬어요' }, { id: 's2', label: '짝이 내 말을 듣고 킥킥 웃으며 흉내 냈어요' }] },
                target: { match: { s1: '고마움', s2: ['부끄러움', '속상함'] } }, difficulty: 0.15 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 내 몸에게 한 말 가운데 가장 마음에 드는 말을 한 사람만 들려줄까요?" 지원한 학생 두세 명의 말을 듣는다. 집에 가서 잠자기 전에 한 번 더 내 몸에게 말해 보기를 권하고 출구 질문을 푼다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { mode: 'fill', cards: ['들어 줘서 고마워', '시끄러워'], slots: [{ id: 'b1', who: '나', motif: 'bird', label: '귀야, 친구 이야기를 ___.' }] }, prompt: '귀에게 하는 말풍선을 알맞은 카드로 채워 보세요.', target: { fill: { b1: '들어 줘서 고마워' } }, difficulty: 0.05 },
          { type: 'choice', prompt: '발에게 하는 말 가운데 발을 아끼는 말은 무엇일까요?', options: ['"발아, 오늘 축구할 때 고마웠어"', '"내 발은 너무 커서 싫어"', '"발은 아무 일도 안 해"'], answer: 0, difficulty: 0.05, explain: '몸이 해 준 일을 떠올려 고맙다고 말하는 것이 몸을 아끼는 말이에요.' },
          { type: 'tool', tool: 'emotion', options: { mode: 'scale', steps: 3, situation: '오늘 내 몸에게 고맙다는 말을 소리 내어 해 보았어요.', feeling: '뿌듯함', ask: '내 몸에게 말해 본 지금 마음은 얼마나 뿌듯한가요?' }, prompt: '내 몸에게 고마운 말을 해 본 지금 마음을 솔직하게 골라 보세요. 정답은 없어요.', target: { level: 'any' }, difficulty: 0.05 },
        ],
      },
    ],
    worksheet: {
      title: '내 몸에게 보내는 고마운 말',
      items: [
        { type: 'figure', wide: true, prompt: '몸의 곳과 오늘 해 준 일을 선으로 이으세요.', tool: 'story', figures: [{ options: { mode: 'match', slots: [{ id: 'eye', label: '눈' }, { id: 'ear', label: '귀' }, { id: 'leg', label: '다리' }], cards: ['걸었어요', '보았어요', '들었어요'] }, caption: '' }], answer: '눈-보았어요, 귀-들었어요, 다리-걸었어요' },
        { type: 'blank', prompt: '내 몸에게 고마운 말을 지어 쓰세요.', text: '___야, 오늘 ___ 줘서 고마워.', answer: '(예) 다리, 걸어' },
        { type: 'choice', prompt: '몸을 아끼는 말에 ○ 하세요.', options: ['"팔아, 힘썼지?"', '"내 몸은 별로야"', '"귀는 이상해"'], answer: '"팔아, 힘썼지?"' },
        { type: 'draw', prompt: '내 몸에게 고맙다고 말하는 내 모습을 그리세요.' },
      ],
      easy: {
        note: '오늘 내 몸이 해 준 일을 떠올려요.',
        items: [
          { type: 'choice', prompt: '눈이 해 준 일에 ○ 하세요.', options: ['보았어요', '걸었어요'], answer: '보았어요' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '다리야, 오늘 걸어 줘서 ___.', answer: '고마워' },
          { type: 'draw', prompt: '고마운 몸의 곳을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 맞게 놓으면 초록 테두리가 생겨요. 말풍선 앞부분을 선생님이 건네줘요.',
      base: '세 곳의 일을 잇고 말풍선을 채운 뒤 짝에게 들려줘요.',
      challenge: '몸의 네 곳을 이어요. 고마운 말을 두 개 지어 들려줘요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 쑥스러워 말하지 못한다 → 앞부분을 건네주고 작은 소리로 시작하게 한다. ② 짝의 말을 흉내 내며 웃는다 → 활동 2의 세 번째 문항으로 들은 사람 마음을 짚는다. ③ 생김새 이야기로 흐른다 → 생김새보다 몸이 해 준 일을 말하게 이끈다.',
  }));

  lessons.push(L(12, {
    title: '한 주 동안 몸 움직인 기록 돌아보기',
    objective: '한 주 동안 몸을 움직인 기록을 그래프로 읽어 가장 많이 움직인 날을 찾고, 다음 주에 더 움직일 날과 방법을 정할 수 있다.',
    illustration: ART('a paper weekly chart with five day columns filled with small round stickers, a child pointing at the tallest column with a proud smile', '한 주 동안 얼마나 움직였을까?', [
      { motif: 'tree', x: 80, y: 214 }, { motif: 'star', x: 380, y: 70, s: 0.7 }, { motif: 'flower', x: 400, y: 232 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"닷새 동안 몸 움직인 기록 카드를 꺼내 볼까요? 가장 많이 움직인 날은 언제였나요?" 기록을 빼먹은 날이 있는 학생도 기억나는 만큼 채우게 한다. "오늘은 기록을 그림그래프로 읽고, 다음 주 계획을 세워요." 시연 단추로 준호의 그래프에서 가장 높은 줄을 고르는 모습을 보여 준다.',
        student: '내 기록 카드에서 가장 많이 움직인 날에 ○ 해 봐요.',
        demo: { tool: 'chart', options: { type: 'picture', mode: 'read', data: [['월', 2], ['화', 4]], unit: '바퀴', icons: [{ value: 1, name: '1바퀴' }], question: '더 많이 걸은 날은?', choices: ['월', '화'] }, sequence: [{ pick: 1 }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 준호의 한 주 그래프 읽기', minutes: 12, tool: 'chart',
            teacher: '"○ 하나가 한 바퀴예요. ○가 가장 많이 쌓인 줄은 어디일까요?" 손가락으로 ○를 하나씩 세게 한다. 가장 적은 날을 찾은 뒤에는 "그날은 왜 적었을까요? 비가 왔을까요?"처럼 까닭을 짐작해 보게 한다. 더 많은 날을 고르면 \'좋은 사람\', 적은 날은 \'나쁜 사람\'이 아니라는 것을 짚는다.',
            task: '준호가 한 주 동안 운동장을 걸은 바퀴 수를 그림그래프로 읽고 물음에 답해요.',
            levels: { easy: { showValues: true }, base: {}, challenge: {} },
            items: [
              { prompt: '준호가 운동장을 가장 많이 걸은 날은 언제인가요?', toolOptions: { type: 'picture', mode: 'read', title: '준호가 걸은 바퀴', data: [['월', 2], ['화', 3], ['수', 1], ['목', 5], ['금', 3]], unit: '바퀴', icons: [{ value: 1, name: '1바퀴' }], question: '가장 많이 걸은 날은?', choices: ['월', '화', '수', '목', '금'] }, target: { pick: 3 }, difficulty: 0.1 },
              { prompt: '준호가 운동장을 가장 적게 걸은 날은 언제인가요?', toolOptions: { type: 'picture', mode: 'read', title: '준호가 걸은 바퀴', data: [['월', 2], ['화', 3], ['수', 1], ['목', 5], ['금', 3]], unit: '바퀴', icons: [{ value: 1, name: '1바퀴' }], question: '가장 적게 걸은 날은?', choices: ['월', '화', '수', '목', '금'] }, target: { pick: 2 }, difficulty: 0.1 },
              { prompt: '준호가 화요일과 같은 바퀴 수를 걸은 날은 언제인가요?', toolOptions: { type: 'picture', mode: 'read', title: '준호가 걸은 바퀴', data: [['월', 2], ['화', 3], ['수', 1], ['목', 5], ['금', 3]], unit: '바퀴', icons: [{ value: 1, name: '1바퀴' }], question: '화요일과 같은 날은?', choices: ['월', '수', '목', '금'] }, target: { pick: 3 }, difficulty: 0.2,
                levels: { challenge: { prompt: '준호는 목요일에 수요일보다 몇 바퀴 더 걸었나요? 수로 답해 보세요.', toolOptions: { question: '목요일은 수요일보다 몇 바퀴 더?', choices: null }, target: { value: 4 } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 내 기록 옮기고 다음 주 다짐하기', minutes: 14, tool: 'timer',
            teacher: '"내 기록 카드의 수를 요일 칸에 옮겨 적어요." 기록이 0인 날도 0을 적게 한다. "다음 주에 더 움직이고 싶은 날을 하나 정해요. 그날 무엇을 할지도요." 정한 다짐을 짝에게 말하고, 점검 목록을 하나씩 해낸 뒤 표시하게 한다.',
            task: '내 기록 카드의 수를 요일 칸에 옮겨 적고, 돌아보기 활동을 하나씩 해낸 뒤 표시해요.',
            levels: TIMER_LV,
            items: [
              { prompt: '내 기록 카드에 적은 요일마다 걸은(또는 뛰어논) 바퀴 수를 칸에 적어요.', toolOptions: { fields: ['월', '화', '수', '목', '금'], unit: '바퀴' }, target: { records: true }, difficulty: 0.1,
                levels: { easy: { toolOptions: { fields: ['월', '화', '수'] } } } },
              { prompt: '서아의 기록은 월 1, 화 2, 수 4, 목 0, 금 3바퀴예요. 그대로 옮겨 적어 보세요.', toolOptions: { fields: ['월', '화', '수', '목', '금'], unit: '바퀴' }, target: { records: [1, 2, 4, 0, 3] }, difficulty: 0.15 },
              { prompt: '돌아보기를 하나씩 해낸 뒤 눌러 표시해요.', target: { selfCheck: ['가장 많이 움직인 날을 찾았어요', '다음 주에 더 움직일 날을 정했어요', '정한 다짐을 짝에게 말했어요'] }, difficulty: 0.05 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"1차시부터 오늘까지 내 몸에 대해 무엇을 알게 되었나요?" 움직이는 곳, 준비 운동, 정한 만큼 끝까지, 숨의 변화, 고마운 말을 칠판에 묶어 적는다. 다음 시간부터는 몸으로 물건과 자연을 나타내는 표현 놀이를 한다고 예고하고 출구 질문을 푼다.',
        exitTicket: [
          { type: 'tool', tool: 'chart', options: { type: 'picture', mode: 'read', title: '하준이가 줄넘기한 날', data: [['월', 3], ['화', 1], ['수', 4], ['목', 2]], unit: '번', icons: [{ value: 1, name: '1번' }], question: '줄넘기를 가장 많이 한 날은?', choices: ['월', '화', '수', '목'] }, prompt: '하준이의 그래프를 보고 줄넘기를 가장 많이 한 날을 골라 보세요.', target: { pick: 2 }, difficulty: 0.1 },
          { type: 'choice', prompt: '기록이 가장 적은 날이 있는 민지에게 알맞은 다짐은 무엇일까요?', options: ['그날도 조금씩 움직여 볼래요', '기록을 버릴래요', '친구 기록을 베낄래요'], answer: 0, difficulty: 0.1, explain: '기록은 나를 돌아보는 것이에요. 적은 날을 찾아 조금씩 늘려요.' },
          { type: 'tool', tool: 'emotion', options: { mode: 'scale', steps: 3, situation: '한 주 동안 몸을 움직이고 기록해 보았어요.', feeling: '뿌듯함', ask: '이번 주 내 몸을 아낀 만큼 마음은 얼마나 뿌듯한가요?' }, prompt: '한 주 동안 몸을 아낀 내 모습을 솔직하게 골라 보세요. 정답은 없어요.', target: { level: 'any' }, difficulty: 0.05 },
        ],
      },
    ],
    worksheet: {
      title: '한 주 동안 몸 움직인 기록',
      items: [
        { type: 'table', prompt: '내 기록을 요일마다 쓰세요.', columns: ['월', '화', '수', '목', '금'], rows: 1 },
        { type: 'figure', prompt: '그래프를 보고 가장 많이 걸은 요일을 쓰세요.', tool: 'chart', figures: [{ options: { type: 'picture', mode: 'read', title: '민지가 걸은 바퀴', data: [['월', 1], ['화', 3], ['수', 2]], unit: '바퀴', icons: [{ value: 1, name: '1바퀴' }] }, caption: '가장 많이 걸은 날: ______' }], answer: '화' },
        { type: 'short', prompt: '다음 주에 더 움직일 날과 할 일을 쓰세요.' },
        { type: 'check', prompt: '이번 단원에서 해 본 것에 ✓ 하세요.', options: ['준비 운동을 머리부터 발끝까지 했어요', '정한 만큼 끝까지 걸었어요', '숨 고르기를 했어요', '내 몸에게 고맙다고 말했어요'] },
      ],
      easy: {
        note: '○를 손가락으로 하나씩 세어요.',
        items: [
          { type: 'table', prompt: '내 기록을 쓰세요.', columns: ['월', '화', '수'], rows: 1 },
          { type: 'short', prompt: '가장 많이 움직인 날을 쓰세요.' },
          { type: 'draw', prompt: '다음 주에 할 몸 움직이기를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '그래프 옆에 수가 보여요. 기록 칸이 세 개예요.',
      base: '○를 세어 가장 많은 날, 가장 적은 날, 같은 날을 찾아요.',
      challenge: '두 날의 차이를 수로 답하고, 다짐에 무엇을 몇 번 할지까지 정해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 기록을 다른 친구와 견주며 부끄러워한다 → 내 기록 안에서 많은 날·적은 날만 찾게 한다. ② 기록을 빼먹은 날을 지어서 적는다 → 기억나지 않으면 빈칸으로 두고 다음 주에 적기로 한다. ③ 그래프의 ○를 세지 않고 줄 길이로 짐작한다 → 손가락으로 하나씩 세게 한다.',
  }));

  // ───────────────────────── 13~16차시: 나타낼 것과 움직이는 곳 찾기(표현 대상과 움직임 요소 탐색) ─────────────────────────

  // 색종이 판 단계: 쉬움은 고르개 모양·색을 줄여 찾기 쉽게 한다(그 활동 문항을 모두 만들 수 있는 모양·색만 남긴다)
  lessons.push(L(13, {
    title: '나타낼 것을 고르고 어떤 모습인지 말하기',
    objective: '나비·나무·바위처럼 몸으로 나타낼 것을 골라 어떤 모습인지 말하고, 색종이 모양으로 꾸민 뒤 몸으로 흉내 낼 수 있다.',
    illustration: ART('paper children pretending to be a butterfly, a tall tree and a round rock, with matching paper cutouts of each beside them', '무엇을 나타내 볼까요?', [
      { motif: 'tree', x: 90, y: 214 }, { motif: 'flower', x: 380, y: 230 }, { motif: 'cloud', x: 300, y: 70 }]),
    safety: [SPACE, FLOOR],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"선생님이 무엇을 흉내 내는지 맞혀 볼까요?" 두 팔을 머리 위로 뻗고 천천히 흔들어 나무를 흉내 낸다. 맞힌 학생에게 "어떻게 알았어요?"라고 묻고 \'팔이 가지처럼 흔들렸다\'는 근거를 짚는다. "이번 시간부터는 우리 몸으로 물건과 자연을 나타내 봐요. 먼저 나타낼 것이 어떤 모습인지 잘 살펴봐요." 시연 단추로 \'나비\' 옆에 모습 카드가 놓이는 모습을 보여 준다.',
        student: '선생님이 흉내 내는 것을 맞혀 봐요. 어디를 보고 알았나요?',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '어떤 모습일까?', slots: [{ id: 's1', label: '나비' }], cards: ['날개를 팔랑팔랑 펄럭여요', '꼼짝 않고 단단해요'], shuffle: false }, sequence: [{ match: { s1: '날개를 팔랑팔랑 펄럭여요' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 나타낼 것은 어떤 모습일까', minutes: 12, tool: 'mindmap',
            teacher: '"나비를 떠올려 봐요. 나비는 어떻게 움직이지요?" 카드를 놓은 뒤 그 모습을 손으로 잠깐 흉내 내 보게 한다. \'바위나 의자는 안 움직이니까 몸으로 못 해요\'라는 학생이 많으면 선생님이 몸을 동그랗게 웅크려 바위를 보여 주고 "움직이지 않는 것은 모양을 흉내 내면 돼요"라고 짚는다.',
            task: '나타낼 것과 그 모습을 잇고, 스스로 움직이는 것과 움직이지 않는 것도 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '나타낼 것마다 어울리는 모습 카드를 이어 보세요.', toolOptions: { mode: 'match', topic: '어떤 모습일까?', slots: [{ id: 's1', label: '나비' }, { id: 's2', label: '나무' }, { id: 's3', label: '달팽이' }], cards: ['날개를 팔랑팔랑 펄럭여요', '가지가 바람에 흔들려요', '느릿느릿 기어가요'] },
                target: { match: { s1: '날개를 팔랑팔랑 펄럭여요', s2: '가지가 바람에 흔들려요', s3: '느릿느릿 기어가요' } }, difficulty: 0.05,
                levels: { challenge: { prompt: '나타낼 것 네 가지마다 어울리는 모습 카드를 이어 보세요.', toolOptions: { slots: [{ id: 's1', label: '나비' }, { id: 's2', label: '나무' }, { id: 's3', label: '달팽이' }, { id: 's4', label: '바위' }], cards: ['날개를 팔랑팔랑 펄럭여요', '가지가 바람에 흔들려요', '느릿느릿 기어가요', '꼼짝 않고 단단해요'] }, target: { match: { s1: '날개를 팔랑팔랑 펄럭여요', s2: '가지가 바람에 흔들려요', s3: '느릿느릿 기어가요', s4: '꼼짝 않고 단단해요' } } } } },
              { prompt: '스스로 움직이는 것과 스스로 움직이지 않는 것으로 나누어 보세요.', toolOptions: { topic: '나타낼 것', slots: ['스스로 움직여요', '스스로 움직이지 않아요'], cards: ['나비', '개구리', '바위', '의자'] },
                target: { sort: { '스스로 움직여요': ['나비', '개구리'], '스스로 움직이지 않아요': ['바위', '의자'] } }, difficulty: 0.05,
                predict: { q: '바위도 몸으로 나타낼 수 있을까요?', options: ['있어요', '없어요'], answer: 0 },
                conclude: '움직이지 않는 것도 그 모양을 흉내 내어 몸으로 나타낼 수 있어요.' },
              { prompt: '움직이지 않는 것을 몸으로 나타내는 방법 카드를 이어 보세요.', toolOptions: { mode: 'match', topic: '모양을 흉내 내요', slots: [{ id: 's1', label: '둥근 바위' }, { id: 's2', label: '높은 탑' }, { id: 's3', label: '건너가는 다리' }], cards: ['몸을 동그랗게 웅크려요', '두 팔을 머리 위로 쭉 뻗고 서요', '엎드려 팔다리로 몸을 들어 올려요'] },
                target: { match: { s1: '몸을 동그랗게 웅크려요', s2: '두 팔을 머리 위로 쭉 뻗고 서요', s3: '엎드려 팔다리로 몸을 들어 올려요' } }, difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 색종이로 모양 꾸미고 몸으로 흉내 내기', minutes: 15, tool: 'collage',
            teacher: '"나무를 색종이로 만든다면 무엇이 필요할까요? 줄기와 잎이요." 판에 꾸민 뒤 그 모양 그대로 몸으로 서 보게 한다. "줄기는 내 몸의 어디가 될까요? 잎은요?" 나비는 접는 선 양쪽을 똑같이 꾸미게 한다. 같은 것을 친구와 다르게 꾸며도 된다는 것을 짚는다.',
            task: '나타낼 것을 색종이 판에 꾸민 뒤, 꾸민 모양 그대로 몸으로 흉내 내 봐요.',
            levels: { easy: { shapes: ['circle', 'rect', 'triangle', 'heart'], colors: ['갈색', '초록', '노랑', '주황', '분홍'] }, base: {}, challenge: {} },
            items: [
              { prompt: '나무를 꾸며요. 갈색 긴 네모 줄기 한 개와 초록 동그라미 잎을 세 개 넘게 붙여 보세요.', target: { has: [{ shape: 'rect', color: '갈색', n: 1 }, { shape: 'circle', color: '초록', min: 3 }] }, difficulty: 0.1,
                levels: { challenge: { prompt: '열매가 달린 나무를 꾸며요. 갈색 긴 네모 줄기 한 개, 초록 동그라미 잎 세 개 넘게, 주황 동그라미 열매 두 개를 붙여 보세요.', target: { has: [{ shape: 'rect', color: '갈색', n: 1 }, { shape: 'circle', color: '초록', min: 3 }, { shape: 'circle', color: '주황', n: 2 }] } } } },
              { prompt: '해를 꾸며요. 노랑 동그라미 한 개와 주황 세모 햇살을 네 개 넘게 붙여 보세요.', target: { has: [{ shape: 'circle', color: '노랑', n: 1 }, { shape: 'triangle', color: '주황', min: 4 }] }, difficulty: 0.15 },
              { prompt: '나비를 꾸며요. 세로 접는 선 양쪽이 똑같도록 날개 조각을 네 개 넘게 붙여 보세요.', state: { pieces: [{ shape: 'heart', color: '분홍', size: 'l', x: 220, y: 160, r: 270 }] }, target: { symmetry: 'vertical', pieces: { min: 4 } }, difficulty: 0.25,
                hints: ['접는 선을 거울이라고 생각해요. 한쪽에 붙인 조각은 반대쪽 같은 거리에도 있어야 해요.', '짝이 없는 조각이 있어요. 그 조각과 같은 모양·색·크기를 반대쪽 같은 자리에 붙이고 방향도 거꾸로 돌려요.', '왼쪽 조각마다 접는 선에서 같은 거리만큼 오른쪽에 똑같은 조각을 붙이고, 돌리기로 방향을 뒤집어 맞춰요.'] },
              { prompt: '꾸민 모양 하나를 골라 짝과 함께 몸으로 흉내 내 보고 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"오늘 몸으로 나타내 본 것 가운데 가장 재미있었던 것은 무엇이에요? 어떤 모습을 흉내 냈나요?" 두세 명이 말하고 직접 보여 주게 한다. 나타낼 것을 고를 때는 먼저 \'어떤 모습인지\' 살펴본다는 것을 다시 짚고 출구 질문을 푼다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '어떤 모습일까?', slots: [{ id: 'e1', label: '강아지' }, { id: 'e2', label: '시계' }], cards: ['꼬리를 살랑살랑 흔들어요', '바늘이 똑딱똑딱 돌아요'] }, prompt: '두 가지에 어울리는 모습 카드를 이어 보세요.', target: { match: { e1: '꼬리를 살랑살랑 흔들어요', e2: '바늘이 똑딱똑딱 돌아요' } }, difficulty: 0.05 },
          { type: 'choice', prompt: '하준이가 "산은 안 움직이니까 몸으로 못 나타내"라고 해요. 맞는 말일까요?', options: ['맞아요, 못 나타내요', '아니요, 산 모양을 흉내 내면 돼요'], answer: 1, difficulty: 0.1, explain: '두 팔을 모아 뾰족하게 세우면 산 모양을 나타낼 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '무엇을 나타내 볼까요',
      items: [
        { type: 'figure', wide: true, prompt: '나타낼 것과 어울리는 모습을 선으로 이으세요.', tool: 'mindmap', figures: [{ options: { mode: 'match', topic: '어떤 모습일까?', slots: [{ id: 's1', label: '나비' }, { id: 's2', label: '달팽이' }, { id: 's3', label: '바위' }], cards: ['꼼짝 않고 단단해요', '날개를 펄럭여요', '느릿느릿 기어가요'] }, caption: '' }], answer: '나비-날개를 펄럭여요, 달팽이-느릿느릿, 바위-꼼짝 않고' },
        { type: 'choice', prompt: '둥근 바위를 몸으로 나타내는 방법에 ○ 하세요.', options: ['몸을 동그랗게 웅크려요', '팔을 펄럭여요', '깡충 뛰어요'], answer: '몸을 동그랗게 웅크려요' },
        { type: 'short', prompt: '내가 몸으로 나타내고 싶은 것과 그 모습을 쓰세요.' },
        { type: 'draw', prompt: '그것을 몸으로 나타낸 내 모습을 그리세요.' },
      ],
      easy: {
        note: '먼저 어떤 모습인지 떠올려요.',
        items: [
          { type: 'choice', prompt: '나비의 모습에 ○ 하세요.', options: ['날개를 펄럭여요', '꼼짝 안 해요'], answer: '날개를 펄럭여요' },
          { type: 'choice', prompt: '움직이지 않는 것도 몸으로 나타낼 수 있나요?', options: ['있어요', '없어요'], answer: '있어요' },
          { type: 'draw', prompt: '나타내고 싶은 것을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 맞게 놓으면 초록 테두리가 생기고, 색종이 고르개에 필요한 모양과 색만 있어요.',
      base: '모습을 잇고 나눈 뒤 색종이 모양을 꾸며 몸으로 흉내 내요.',
      challenge: '나타낼 것이 네 가지로 늘고, 나무에 열매까지 꾸며요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 움직이지 않는 것은 몸으로 나타낼 수 없다고 여긴다 → 바위·탑·다리를 몸으로 직접 보여 준다. ② 모습을 살피지 않고 바로 흉내부터 낸다 → "어떤 모습이지?"를 먼저 말하게 한다. ③ 색종이 꾸미기에 오래 머문다 → 꾸미기는 5분, 흉내 내기는 꼭 하게 시간을 나눈다.',
  }));

  lessons.push(L(14, {
    title: '움직이는 곳을 찾아 내 몸으로 짚기',
    objective: '물고기·새·개구리처럼 나타낼 것에서 움직이는 곳을 찾고, 그곳을 내 몸의 어디로 나타낼지 손으로 짚을 수 있다.',
    illustration: ART('a paper fish wagging its tail, a bird flapping wings and a frog jumping, with matching child poses showing hips, shoulders and knees highlighted', '어디가 움직일까요?', [
      { motif: 'wave', x: 120, y: 220 }, { motif: 'bird', x: 340, y: 80 }, { motif: 'leaf', x: 400, y: 214 }]),
    safety: [SPACE, FLOOR],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"물고기는 헤엄칠 때 몸의 어디가 가장 바쁠까요?" 어항 속 물고기나 영상 한 장면을 떠올리게 한다. "꼬리요!" 대답을 듣고 "그럼 우리 몸에는 꼬리가 없는데 어디로 나타낼까요?" 몇 명이 허리를 흔들어 보게 한다. 시연 단추로 \'물고기\' 옆에 \'꼬리\' 카드가 놓이는 모습을 보여 준다.',
        student: '물고기가 헤엄치는 모습을 떠올려 봐요. 어디가 가장 바쁘게 움직이나요?',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '움직이는 곳', slots: [{ id: 's1', label: '물고기' }], cards: ['꼬리', '눈'], shuffle: false }, sequence: [{ match: { s1: '꼬리' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 나타낼 것에서 움직이는 곳 찾기', minutes: 13, tool: 'mindmap',
            teacher: '"이것이 움직일 때 가장 먼저 눈에 띄는 곳은 어디예요?" 카드를 하나 놓을 때마다 그 곳을 손이나 팔로 흉내 내 보게 한다. 선풍기처럼 생물이 아닌 것도 움직이는 곳이 있다는 것을 짚는다. 돌아가는 것과 오르내리는 것을 나눌 때는 손가락으로 공중에 그려 보게 한다.',
            task: '나타낼 것마다 움직이는 곳을 잇고, 움직이는 방법에 따라 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '나타낼 것마다 가장 크게 움직이는 곳 카드를 이어 보세요.', toolOptions: { mode: 'match', topic: '움직이는 곳', slots: [{ id: 's1', label: '헤엄치는 물고기' }, { id: 's2', label: '날아가는 새' }, { id: 's3', label: '피어나는 꽃' }], cards: ['꼬리', '날개', '꽃잎'] },
                target: { match: { s1: '꼬리', s2: '날개', s3: '꽃잎' } }, difficulty: 0.05 },
              { prompt: '세 가지에서 움직이는 곳 카드를 이어 보세요.', toolOptions: { mode: 'match', topic: '움직이는 곳', slots: [{ id: 's1', label: '펄쩍 뛰는 개구리' }, { id: 's2', label: '물을 뿌리는 코끼리' }, { id: 's3', label: '돌아가는 선풍기' }], cards: ['뒷다리', '긴 코', '날개'] },
                target: { match: { s1: '뒷다리', s2: '긴 코', s3: '날개' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['뒷다리', '긴 코', '날개', '큰 귀'] } } } },
              { prompt: '빙글빙글 도는 것과 위아래로 오르내리는 것으로 나누어 보세요.', toolOptions: { topic: '어떻게 움직일까?', slots: ['빙글빙글 돌아요', '위아래로 오르내려요'], cards: ['바람개비', '팽이', '시소', '통통 튀는 공'] },
                target: { sort: { '빙글빙글 돌아요': ['바람개비', '팽이'], '위아래로 오르내려요': ['시소', '통통 튀는 공'] } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['바람개비', '팽이', '시소', '통통 튀는 공', '조용한 책상'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 내 몸의 어디로 나타낼까 (흉내 내기)', minutes: 14, tool: 'body',
            teacher: '"문장대로 먼저 흉내 내 보고, 가장 크게 움직인 내 몸의 곳을 골라요." 모두 일어나 한 문항씩 함께 해 본다. 고른 뒤 짝과 서로 그 곳을 손으로 짚어 확인하게 한다. 너무 세게 흔드는 학생에게 "부드럽게, 크게"를 말해 준다. 마지막 문항은 모둠이 하나를 골라 다르게 흉내 내 본다.',
            task: '나타낼 것을 문장대로 흉내 내 보고, 가장 크게 움직인 내 몸의 곳을 골라요.',
            levels: BODY_LV,
            items: [
              { prompt: '새 날개처럼 두 팔을 위아래로 크게 펄럭여요. 팔에서 가장 크게 돌아가는 곳을 골라 보세요.', toolOptions: { mode: 'parts', parts: ['목', '어깨', '무릎', '발목'] }, target: { parts: ['어깨'] }, difficulty: 0.1 },
              { prompt: '물고기 꼬리처럼 몸통 아랫부분을 좌우로 살랑살랑 흔들어요. 흔들리는 곳을 골라 보세요.', toolOptions: { mode: 'parts', parts: ['목', '허리', '손목', '발목'] }, target: { parts: ['허리'] }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { parts: ['목', '어깨', '가슴', '허리', '손목', '발목'] } } } },
              { prompt: '개구리처럼 쪼그려 앉았다가 펄쩍 뛰어요. 다리에서 굽혔다 펴는 이음매를 모두 골라 보세요.', toolOptions: { mode: 'parts', parts: ['어깨', '팔꿈치', '무릎', '발목'] }, target: { parts: ['무릎', '발목'] }, difficulty: 0.15 },
              { prompt: '모둠이 나타낼 것을 하나 골라 저마다 다른 몸의 곳으로 흉내 내 보고 "다 했어요"를 누르세요.', toolOptions: { mode: 'parts', names: true }, free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"모둠에서 같은 것을 흉내 냈는데 저마다 쓴 몸의 곳이 달랐나요?" 두 모둠이 보여 주게 한다. 움직이는 곳을 먼저 찾으면 몸으로 나타내기 쉬워진다는 것을 짚고 출구 질문을 푼다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '움직이는 곳', slots: [{ id: 'e1', label: '꼬리 치는 강아지' }, { id: 'e2', label: '나는 잠자리' }], cards: ['꼬리', '날개'] }, prompt: '두 가지에서 움직이는 곳 카드를 이어 보세요.', target: { match: { e1: '꼬리', e2: '날개' } }, difficulty: 0.05 },
          { type: 'choice', prompt: '나비 날개를 내 몸으로 나타내려면 어디를 움직이면 좋을까요?', options: ['두 팔', '두 귀', '두 눈'], answer: 0, difficulty: 0.05, explain: '두 팔을 날개처럼 펄럭이면 나비 날개를 나타낼 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '어디가 움직일까요',
      items: [
        { type: 'figure', wide: true, prompt: '나타낼 것과 움직이는 곳을 선으로 이으세요.', tool: 'mindmap', figures: [{ options: { mode: 'match', topic: '움직이는 곳', slots: [{ id: 's1', label: '물고기' }, { id: 's2', label: '새' }, { id: 's3', label: '개구리' }], cards: ['뒷다리', '꼬리', '날개'] }, caption: '' }], answer: '물고기-꼬리, 새-날개, 개구리-뒷다리' },
        { type: 'figure', prompt: '물고기 꼬리를 흉내 낼 때 흔드는 곳의 번호에 ○ 하세요.', tool: 'body', figures: [{ options: { mode: 'parts', parts: ['목', '어깨', '허리', '무릎'], numbers: ['목', '어깨', '허리', '무릎'] }, caption: '' }], answer: '③' },
        { type: 'choice', prompt: '빙글빙글 도는 것에 ○ 하세요.', options: ['바람개비', '시소', '통통 튀는 공'], answer: '바람개비' },
        { type: 'short', prompt: '내가 흉내 낸 것과 움직인 내 몸의 곳을 쓰세요.' },
      ],
      easy: {
        note: '흉내 내 보고 가장 크게 움직인 곳을 찾아요.',
        items: [
          { type: 'choice', prompt: '새가 날 때 움직이는 곳에 ○ 하세요.', options: ['날개', '부리'], answer: '날개' },
          { type: 'choice', prompt: '새 날개를 흉내 낼 때 움직이는 내 몸에 ○ 하세요.', options: ['팔', '귀'], answer: '팔' },
          { type: 'draw', prompt: '새를 흉내 내는 내 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 맞게 놓으면 초록 테두리가 생기고, 몸의 곳을 누르면 이름이 보여요.',
      base: '움직이는 곳을 잇고 나눈 뒤, 흉내 내 보고 몸의 곳을 골라요.',
      challenge: '함정 카드가 섞여 있고, 고를 몸의 곳이 늘어나요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 생김새(눈·부리)를 움직이는 곳으로 고른다 → "움직일 때 가장 바쁜 곳"을 묻는다. ② 흉내 내지 않고 고른다 → 꼭 일어나서 해 본 뒤 고르게 한다. ③ 모둠에서 한 사람의 흉내를 모두 따라 한다 → 같은 것도 다른 몸의 곳으로 나타낼 수 있다는 것을 칭찬한다.',
  }));

  lessons.push(L(15, {
    title: '빠르기와 크기를 바꾸어 나타내기',
    objective: '나타낼 것을 빠르게·느리게, 크게·작게로 나누고, 색종이와 몸으로 빠르기와 크기를 바꾸어 나타낼 수 있다.',
    illustration: ART('paper children showing tiny quick raindrops with fingertips and big slow ocean waves with whole arms, a small mouse and a large elephant walking beside them', '빠르게 느리게, 크게 작게', [
      { motif: 'wave', x: 120, y: 222 }, { motif: 'cloud', x: 330, y: 70 }, { motif: 'tree', x: 410, y: 214 }]),
    safety: [SPACE, FLOOR],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"선생님이 같은 손뼉을 두 번 칠게요. 무엇이 다른지 들어 봐요." 한 번은 작고 빠르게, 한 번은 크고 느리게 친다. "빠르기와 크기가 달랐지요? 몸으로 나타낼 때도 빠르기와 크기를 바꾸면 느낌이 달라져요." 시연 단추로 \'달팽이\'가 \'느리게\' 가지에 놓이는 모습을 보여 준다.',
        student: '손뼉을 작고 빠르게, 크고 느리게 쳐 봐요. 느낌이 어떻게 달라요?',
        demo: { tool: 'mindmap', options: { topic: '빠르기', slots: ['빠르게', '느리게'], cards: ['달팽이', '치타'], shuffle: false }, sequence: [{ sort: { '빠르게': ['치타'], '느리게': ['달팽이'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 빠르기와 크기로 나누기', minutes: 12, tool: 'mindmap',
            teacher: '"이것은 빠를까요, 느릴까요? 클까요, 작을까요?" 카드마다 손으로 먼저 흉내 내 보게 한다. 빠르기와 크기를 함께 묻는 문항에서는 두 가지를 차례로 따지게 한다: "먼저 빠른지 느린지, 그다음 큰지 작은지." 코끼리는 크니까 빠르다고 여기는 학생에게 쿵쿵 걷는 소리를 흉내 내 보게 한다.',
            task: '나타낼 것을 빠르기와 크기에 따라 나누고, 두 가지를 함께 따져 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '빠르게 움직이는 것과 느리게 움직이는 것으로 나누어 보세요.', toolOptions: { topic: '빠르기', slots: ['빠르게', '느리게'], cards: ['달리는 치타', '기어가는 달팽이', '뛰는 토끼', '걷는 거북'] },
                target: { sort: { '빠르게': ['달리는 치타', '뛰는 토끼'], '느리게': ['기어가는 달팽이', '걷는 거북'] } }, difficulty: 0.05 },
              { prompt: '크게 움직이는 것과 작게 움직이는 것으로 나누어 보세요.', toolOptions: { topic: '크기', slots: ['크게', '작게'], cards: ['밀려오는 큰 파도', '떨어지는 빗방울', '코끼리 걸음', '개미 걸음'] },
                target: { sort: { '크게': ['밀려오는 큰 파도', '코끼리 걸음'], '작게': ['떨어지는 빗방울', '개미 걸음'] } }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['밀려오는 큰 파도', '떨어지는 빗방울', '코끼리 걸음', '개미 걸음', '조용히 놓인 연필'] } } } },
              { prompt: '빠르기와 크기를 함께 따져 어울리는 카드를 이어 보세요.', toolOptions: { mode: 'match', topic: '빠르기와 크기', slots: [{ id: 's1', label: '느리고 크게' }, { id: 's2', label: '빠르고 작게' }] , cards: ['코끼리가 쿵쿵 걸어요', '생쥐가 종종 달려요'] },
                target: { match: { s1: '코끼리가 쿵쿵 걸어요', s2: '생쥐가 종종 달려요' } }, difficulty: 0.15,
                levels: { challenge: { prompt: '빠르기와 크기를 함께 따져 세 가지 카드를 이어 보세요.', toolOptions: { slots: [{ id: 's1', label: '느리고 크게' }, { id: 's2', label: '빠르고 작게' }, { id: 's3', label: '빠르고 크게' }], cards: ['코끼리가 쿵쿵 걸어요', '생쥐가 종종 달려요', '말이 힘차게 달려요'] }, target: { match: { s1: '코끼리가 쿵쿵 걸어요', s2: '생쥐가 종종 달려요', s3: '말이 힘차게 달려요' } } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 크기를 바꾸어 꾸미고 몸으로 나타내기', minutes: 15, tool: 'collage',
            teacher: '"빗방울은 작은 조각으로, 파도는 큰 조각으로 꾸며요." 크기 고르개(작게·보통·크게)를 꼭 보고 고르게 한다. 꾸민 뒤 빗방울은 손가락 끝으로 작고 빠르게 톡톡, 파도는 두 팔 전체로 크고 느리게 나타내 본다. "같은 손인데 크기만 바꾸었더니 느낌이 어땠나요?"',
            task: '크기를 골라 빗방울·파도·곰을 꾸미고, 같은 크기 느낌으로 몸으로 나타내 봐요.',
            levels: { easy: { shapes: ['circle', 'semi'], colors: ['파랑', '갈색', '검정'] }, base: {}, challenge: {} },
            items: [
              { prompt: '빗방울을 꾸며요. 작은 파랑 동그라미를 다섯 개 넘게 붙여 보세요.', target: { has: [{ shape: 'circle', color: '파랑', size: 's', min: 5 }] }, difficulty: 0.05 },
              { prompt: '파도를 꾸며요. 큰 파랑 반원을 꼭 세 개 붙여 보세요.', target: { has: [{ shape: 'semi', color: '파랑', size: 'l', n: 3 }] }, difficulty: 0.1,
                levels: { challenge: { prompt: '큰 파도와 작은 물방울을 꾸며요. 큰 파랑 반원 세 개와 작은 파랑 동그라미 네 개를 붙여 보세요.', target: { has: [{ shape: 'semi', color: '파랑', size: 'l', n: 3 }, { shape: 'circle', color: '파랑', size: 's', n: 4 }] } } } },
              { prompt: '곰 얼굴을 꾸며요. 큰 갈색 동그라미 한 개와 작은 갈색 동그라미 귀 두 개를 붙여 보세요.', target: { has: [{ shape: 'circle', color: '갈색', size: 'l', n: 1 }, { shape: 'circle', color: '갈색', size: 's', n: 2 }] }, difficulty: 0.15,
                predict: { q: '곰 얼굴과 귀는 같은 크기일까요?', options: ['같아요', '달라요'], answer: 1 },
                conclude: '크기를 다르게 고르면 얼굴과 귀처럼 큰 것과 작은 것을 나타낼 수 있어요.' },
              { prompt: '빗방울은 작고 빠르게, 파도는 크고 느리게 몸으로 나타내 보고 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"같은 비라도 이슬비와 소나기는 어떻게 다르게 나타낼까요?" 두 학생이 몸으로 보여 주게 한다. 빠르기와 크기를 바꾸면 같은 것도 다른 느낌이 된다는 것을 짚고 출구 질문을 푼다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '빠르기', slots: ['빠르게', '느리게'], cards: ['날아가는 벌', '떠가는 구름'] }, prompt: '두 카드를 빠르게와 느리게로 나누어 보세요.', target: { sort: { '빠르게': ['날아가는 벌'], '느리게': ['떠가는 구름'] } }, difficulty: 0.05 },
          { type: 'choice', prompt: '큰 파도를 몸으로 나타내는 방법으로 알맞은 것은 무엇일까요?', options: ['두 팔 전체로 크고 느리게 움직여요', '손가락 끝만 작게 톡톡 움직여요', '가만히 서 있어요'], answer: 0, difficulty: 0.1, explain: '큰 파도는 몸을 크게 쓰고 천천히 움직이면 잘 나타나요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '빠르게 느리게, 크게 작게',
      items: [
        { type: 'table', prompt: '빠르기와 크기에 알맞게 ○ 하세요.', columns: ['나타낼 것', '빠르게', '느리게', '크게', '작게'], cells: [['달팽이', '', '', '', ''], ['큰 파도', '', '', '', ''], ['생쥐', '', '', '', '']] },
        { type: 'choice', prompt: '빗방울을 꾸밀 때 알맞은 조각에 ○ 하세요.', options: ['작은 동그라미', '큰 반원', '큰 네모'], answer: '작은 동그라미' },
        { type: 'short', prompt: '이슬비와 소나기를 몸으로 어떻게 다르게 나타낼지 쓰세요.' },
        { type: 'draw', prompt: '크고 느리게 움직이는 것을 나타내는 내 모습을 그리세요.' },
      ],
      easy: {
        note: '먼저 빠른지 느린지, 그다음 큰지 작은지 생각해요.',
        items: [
          { type: 'choice', prompt: '느리게 움직이는 것에 ○ 하세요.', options: ['달팽이', '치타'], answer: '달팽이' },
          { type: 'choice', prompt: '크게 움직이는 것에 ○ 하세요.', options: ['큰 파도', '빗방울'], answer: '큰 파도' },
          { type: 'draw', prompt: '빗방울을 나타내는 내 손을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 맞게 놓으면 초록 테두리가 생기고, 색종이 고르개에 필요한 모양과 색만 있어요.',
      base: '빠르기·크기로 나누고, 크기를 골라 꾸민 뒤 몸으로 나타내요.',
      challenge: '빠르기와 크기 세 가지 짝을 잇고, 크기가 다른 조각을 함께 꾸며요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 크면 빠르다고 여긴다(코끼리) → 빠르기와 크기를 따로따로 묻는다. ② 색종이 크기 고르개를 보지 않는다 → 붙이기 전에 크기 단추를 손가락으로 짚게 한다. ③ 몸으로 나타낼 때 늘 같은 빠르기로 한다 → 선생님 손뼉 빠르기에 맞추어 바꾸어 보게 한다.',
  }));

  lessons.push(L(16, {
    title: '높낮이와 방향을 바꾸어 나타내기',
    objective: '나타낼 것을 높게·낮게, 움직이는 방향에 따라 나누고, 씨앗이 나무로 자라는 모습을 낮은 데서 높은 데로 차례대로 몸으로 나타낼 수 있다.',
    illustration: ART('paper children curled up low like seeds, then rising and stretching tall like trees, a crab walking sideways and a kite flying high above', '낮게에서 높게로', [
      { motif: 'tree', x: 400, y: 214 }, { motif: 'leaf', x: 90, y: 226 }, { motif: 'bird', x: 300, y: 70 }]),
    safety: [SPACE, FLOOR],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"모두 일어나 가장 낮게 웅크려 볼까요? 이제 가장 높게 까치발로 서 봐요." 두 자세를 번갈아 해 본다. "몸을 낮게, 높게 바꾸는 것을 높낮이라고 해요. 앞으로, 옆으로, 빙글빙글 같은 방향도 바꿀 수 있어요." 시연 단추로 \'기린\'이 \'높게\' 가지에 놓이는 모습을 보여 준다.',
        student: '가장 낮게 웅크렸다가 가장 높게 서 봐요.',
        demo: { tool: 'mindmap', options: { topic: '높낮이', slots: ['높게', '낮게'], cards: ['키 큰 기린', '기어가는 뱀'], shuffle: false }, sequence: [{ sort: { '높게': ['키 큰 기린'], '낮게': ['기어가는 뱀'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 높낮이와 방향으로 나누기', minutes: 12, tool: 'mindmap',
            teacher: '"이것은 높은 곳에 있나요, 낮은 곳에 있나요?" 손을 머리 위나 무릎 아래로 가져가며 답하게 한다. 방향 문항은 손가락으로 공중에 움직이는 길을 그려 본 뒤 고르게 한다. 게가 앞으로 걷는다고 여기는 학생에게 게 걸음을 함께 흉내 내 본다.',
            task: '나타낼 것을 높낮이에 따라 나누고, 움직이는 방향을 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '높은 곳에 있는 것과 낮은 곳에 있는 것으로 나누어 보세요.', toolOptions: { topic: '높낮이', slots: ['높게', '낮게'], cards: ['하늘 높이 나는 연', '나무 꼭대기의 새 둥지', '땅속의 두더지', '바닥을 기는 애벌레'] },
                target: { sort: { '높게': ['하늘 높이 나는 연', '나무 꼭대기의 새 둥지'], '낮게': ['땅속의 두더지', '바닥을 기는 애벌레'] } }, difficulty: 0.05 },
              { prompt: '움직이는 방향 카드를 이어 보세요.', toolOptions: { mode: 'match', topic: '움직이는 방향', slots: [{ id: 's1', label: '엘리베이터' }, { id: 's2', label: '바닷가의 게' }, { id: 's3', label: '회전목마' }], cards: ['위아래로', '옆으로', '빙글빙글 돌아요'] },
                target: { match: { s1: '위아래로', s2: '옆으로', s3: '빙글빙글 돌아요' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['위아래로', '옆으로', '빙글빙글 돌아요', '뒤로'] } } } },
              { prompt: '처음엔 낮다가 높아지는 것만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '낮게에서 높게', cards: ['싹이 자라 큰 나무가 돼요', '떠오르는 해', '떨어지는 낙엽', '녹아내리는 눈사람'] },
                target: { pick: ['싹이 자라 큰 나무가 돼요', '떠오르는 해'] }, difficulty: 0.2,
                predict: { q: '떨어지는 낙엽은 높아질까요, 낮아질까요?', options: ['높아져요', '낮아져요'], answer: 1 },
                conclude: '자라는 나무와 떠오르는 해는 낮은 데서 높은 데로 가요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 높낮이가 바뀌는 차례대로 나타내기', minutes: 15, tool: 'story',
            teacher: '"씨앗이 큰 나무가 되기까지 몸이 어떻게 바뀔까요? 가장 낮은 것부터예요." 차례를 세운 뒤 모두 그 차례대로 몸으로 나타낸다. 선생님이 작은북(또는 손뼉)을 천천히 치면 한 장면씩 넘어간다. 공 튀기기 장면은 점점 낮아지는 차례라는 것을 몸으로 먼저 해 보게 한다.',
            task: '높낮이가 바뀌는 차례대로 장면 카드를 놓고, 그 차례대로 몸으로 나타내 봐요.',
            levels: CARD_LV,
            items: [
              { prompt: '씨앗이 큰 나무가 되는 몸 움직임을 낮은 것부터 차례대로 놓아 보세요.', toolOptions: { cards: [{ id: 'seed', text: '몸을 작게 웅크려요', motif: 'leaf' }, { id: 'sprout', text: '무릎을 펴며 일어나요', motif: 'flower' }, { id: 'tree', text: '두 팔을 위로 쭉 뻗어요', motif: 'tree' }, { id: 'wind', text: '뻗은 팔을 바람에 흔들어요', motif: 'cloud' }] },
                target: { order: ['seed', 'sprout', 'tree', 'wind'] }, difficulty: 0.1 },
              { prompt: '통통 튀던 공이 멈추는 움직임을 차례대로 놓아 보세요.', toolOptions: { cards: [{ id: 'high', text: '높이 통 튀어요', motif: 'sun' }, { id: 'mid', text: '조금 낮게 튀어요', motif: 'cloud' }, { id: 'low', text: '바닥 가까이 톡톡 튀어요', motif: 'leaf' }, { id: 'stop', text: '바닥에 멈춰요', motif: 'hills' }] },
                target: { order: ['high', 'mid', 'low', 'stop'] }, difficulty: 0.15,
                levels: { easy: { state: { at: { high: 0, stop: 3 } } } } },
              { prompt: '모둠이 고른 차례대로 높낮이를 바꾸며 몸으로 나타내 보고 "다 했어요"를 누르세요.', toolOptions: { cards: [{ id: 'seed', text: '몸을 작게 웅크려요', motif: 'leaf' }, { id: 'tree', text: '두 팔을 위로 쭉 뻗어요', motif: 'tree' }] }, free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"13차시부터 오늘까지 몸으로 나타낼 때 바꿀 수 있는 것을 무엇무엇 배웠나요?" 모습, 움직이는 곳, 빠르기, 크기, 높낮이, 방향을 칠판에 적는다. 다음 시간에는 이것을 써서 내가 고른 것을 흉내 내 본다고 예고하고 출구 질문을 푼다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '높낮이', slots: ['높게', '낮게'], cards: ['하늘의 무지개', '물웅덩이'] }, prompt: '두 카드를 높게와 낮게로 나누어 보세요.', target: { sort: { '높게': ['하늘의 무지개'], '낮게': ['물웅덩이'] } }, difficulty: 0.05 },
          { type: 'choice', prompt: '녹아내리는 눈사람을 몸으로 나타내려면 높낮이를 어떻게 바꿀까요?', options: ['높게 서 있다가 점점 낮게 내려가요', '낮게 웅크렸다가 점점 높게 올라가요', '높낮이를 바꾸지 않아요'], answer: 0, difficulty: 0.15, explain: '눈사람이 녹으면 점점 낮아져요. 몸도 높은 데서 낮은 데로 내려가요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '높낮이와 방향',
      items: [
        { type: 'figure', wide: true, prompt: '씨앗이 나무가 되는 차례대로 카드 아래에 1, 2, 3, 4를 쓰세요.', tool: 'story', figures: [{ options: { cards: [{ id: 'tree', text: '두 팔을 쭉 뻗어요', motif: 'tree' }, { id: 'seed', text: '작게 웅크려요', motif: 'leaf' }, { id: 'wind', text: '팔을 흔들어요', motif: 'cloud' }, { id: 'sprout', text: '무릎을 펴요', motif: 'flower' }] }, caption: '' }], answer: '웅크려요 1, 무릎을 펴요 2, 쭉 뻗어요 3, 흔들어요 4' },
        { type: 'choice', prompt: '옆으로 걷는 것에 ○ 하세요.', options: ['게', '엘리베이터', '회전목마'], answer: '게' },
        { type: 'table', prompt: '높게, 낮게 나타낼 것을 하나씩 쓰세요.', columns: ['높게', '낮게'], rows: 2 },
        { type: 'draw', prompt: '높낮이를 바꾸어 나타낸 내 모습 두 가지를 그리세요.' },
      ],
      easy: {
        note: '손을 머리 위(높게), 무릎 아래(낮게)로 가져가 봐요.',
        items: [
          { type: 'choice', prompt: '높은 곳에 있는 것에 ○ 하세요.', options: ['하늘의 연', '땅속 두더지'], answer: '하늘의 연' },
          { type: 'choice', prompt: '씨앗을 나타내는 자세에 ○ 하세요.', options: ['작게 웅크려요', '높이 뛰어요'], answer: '작게 웅크려요' },
          { type: 'draw', prompt: '큰 나무를 나타내는 내 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 맞게 놓으면 초록 테두리가 생기고, 공 튀기기 카드 두 장이 바른 자리에 놓인 채 시작해요.',
      base: '높낮이·방향으로 나누고, 장면 카드 차례를 세워 몸으로 나타내요.',
      challenge: '방향 카드에 함정 카드가 섞여 있어요. 모둠 표현에 방향 바꾸기를 하나 더 넣어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 높낮이를 키 크기로만 생각한다 → 같은 사람도 웅크리면 낮아진다는 것을 몸으로 보여 준다. ② 공 튀기기에서 점점 높아지게 놓는다 → 공을 실제로 떨어뜨려 보여 준다. ③ 모둠 표현에서 차례가 흐트러진다 → 북소리 한 번에 한 장면으로 약속한다.',
  }));

  // ───────────────────────── 17~20차시: 흉내 내고 친구와 다르게 해 보기(움직임 변화로 생각과 느낌 표현) ─────────────────────────

  var HOWTO_HINTS = ['몸으로 나타내기 전에 무엇을 먼저 살펴보았는지 지난 시간들을 떠올려요. 보여 주기는 맨 나중이에요.', '놓은 차례대로 해 보세요. 움직이는 곳을 찾기 전에 몸부터 움직이는 자리가 있는지 살펴요.', '나타낼 것 고르기 → 어떤 모습인지 살피기 → 움직이는 곳 찾기 → 몸으로 흉내 내기 → 짝에게 보여 주기 차례예요.'];

  lessons.push(L(17, {
    title: '고른 동물을 몸으로 흉내 내기',
    objective: '나타낼 동물을 골라 모습과 움직이는 곳을 살핀 뒤 몸으로 흉내 내고, 친구의 흉내에서 잘 보인 점을 말할 수 있다.',
    illustration: ART('paper children waddling like penguins, hopping like kangaroos and wriggling like a snake on a classroom floor, small animal cutouts above each child', '동물 흉내 내기', [
      { motif: 'tree', x: 80, y: 214 }, { motif: 'snow', x: 360, y: 70 }, { motif: 'flower', x: 410, y: 230 }]),
    safety: [SPACE, FLOOR],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"펭귄은 어떻게 걸을까요?" 한 학생이 앞에 나와 흉내 내게 한다. "어디를 보고 펭귄 같다고 느꼈나요?" 팔을 몸에 붙인 것, 뒤뚱거린 것처럼 잘 보인 점을 짚는다. "오늘은 지난 시간까지 배운 차례대로 동물을 흉내 내 봐요. 고르고, 살피고, 움직이는 곳을 찾고, 흉내 내요." 시연 단추로 흉내 내기 차례 카드가 놓이는 모습을 보여 준다.',
        student: '펭귄 흉내를 본 뒤, 어디를 보고 펭귄 같다고 느꼈는지 말해 봐요.',
        demo: { tool: 'story', options: { cards: [{ id: 'pick', text: '나타낼 것을 골라요', motif: 'star' }, { id: 'show', text: '짝에게 보여 줘요', motif: 'flower' }], slots: ['처음', '나중'], shuffle: false }, sequence: [{ order: ['pick', 'show'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 흉내 내기 차례와 동물의 움직임', minutes: 12, tool: 'story',
            teacher: '"흉내를 잘 내려면 무엇부터 할까요?" 13~16차시에 한 것을 떠올리게 한다. 동물 카드는 소리 내어 읽고 손으로 잠깐 흉내 낸 뒤 놓게 한다. 카드를 놓은 뒤 "네가 펭귄이라면 팔은 어떻게 할래?"처럼 몸의 곳을 묻는다.',
            task: '흉내 내기 차례를 세우고, 동물마다 흉내 낼 움직임을 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '동물 흉내를 내는 차례대로 카드를 놓아 보세요.', toolOptions: { cards: [{ id: 'pick', text: '나타낼 것을 골라요', motif: 'star' }, { id: 'look', text: '어떤 모습인지 살펴요', motif: 'sun' }, { id: 'part', text: '움직이는 곳을 찾아요', motif: 'leaf' }, { id: 'move', text: '몸으로 흉내 내요', motif: 'bird' }, { id: 'show', text: '짝에게 보여 줘요', motif: 'flower' }] },
                target: { order: ['pick', 'look', 'part', 'move', 'show'] }, difficulty: 0.15, hints: HOWTO_HINTS,
                levels: { easy: { state: { at: { pick: 0, show: 4 } } } } },
              { prompt: '동물마다 흉내 낼 움직임 카드를 이어 보세요.', toolOptions: { mode: 'match', slots: [{ id: 's1', label: '펭귄' }, { id: 's2', label: '캥거루' }, { id: 's3', label: '뱀' }], cards: ['팔을 붙이고 뒤뚱뒤뚱 걸어요', '두 발을 모아 통통 뛰어요', '엎드려 구불구불 기어요'] },
                target: { match: { s1: '팔을 붙이고 뒤뚱뒤뚱 걸어요', s2: '두 발을 모아 통통 뛰어요', s3: '엎드려 구불구불 기어요' } }, difficulty: 0.05,
                levels: { challenge: { toolOptions: { cards: ['팔을 붙이고 뒤뚱뒤뚱 걸어요', '두 발을 모아 통통 뛰어요', '엎드려 구불구불 기어요', '두 팔을 크게 펄럭여요'] } } } },
              { prompt: '고릴라 흉내를 내려고 해요. 고릴라에 어울리는 움직임만 골라 보세요.', toolOptions: { mode: 'pick', basket: '고릴라 흉내', cards: ['주먹으로 가슴을 두드려요', '무릎을 굽히고 성큼성큼 걸어요', '손가락 끝으로 살살 기어요', '까치발로 사뿐사뿐 걸어요'] },
                target: { pick: ['주먹으로 가슴을 두드려요', '무릎을 굽히고 성큼성큼 걸어요'] }, difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 짝과 흉내 보여 주고 말해 주기 (표현)', minutes: 15, tool: 'emotion', pair: true,
            teacher: '짝끼리 동물 하나를 골라 번갈아 흉내 낸다. 보는 사람은 "어디가 잘 보였는지" 하나를 말해 준다. "친구가 나와 다르게 흉내 냈다면 틀린 걸까요?" 똑같이 해야 잘한 것이라고 여기는 학생에게 "펭귄을 본 사람마다 눈에 띈 곳이 달라서 흉내도 달라요"라고 짚는다.',
            task: '짝과 번갈아 동물을 흉내 내고, 보는 사람은 잘 보인 점을 하나 말해 줘요.',
            levels: CARD_LV,
            items: [
              { prompt: '짝과 동물 하나를 골라 번갈아 흉내 내 보고 "다 했어요"를 누르세요.', toolOptions: { cards: ['신남', '뿌듯함'], slots: [{ id: 's1', label: '짝에게 흉내를 보여 줬어요' }] }, free: true },
              { prompt: '친구의 흉내를 보고 해 줄 말만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', weather: false, basket: '해 줄 말', cards: ['"뒤뚱뒤뚱 걷는 게 꼭 펭귄 같아"', '"나랑 다르니까 틀렸어"', '"팔을 날개처럼 붙인 게 잘 보였어"', '"그게 뭐야"'] },
                target: { pick: ['"뒤뚱뒤뚱 걷는 게 꼭 펭귄 같아"', '"팔을 날개처럼 붙인 게 잘 보였어"'] }, difficulty: 0.1 },
              { prompt: '민지가 준호와 다르게 펭귄을 흉내 냈더니 준호가 "틀렸어"라고 해요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '민지', situation: '민지는 펭귄이 미끄러지는 모습을, 준호는 걷는 모습을 흉내 냈어요. 준호가 "나처럼 안 하면 틀린 거야"라고 해요.', choices: [
                { id: 'both', text: '"둘 다 펭귄 같아. 다르게 해도 돼"', result: '두 친구가 서로의 흉내를 배워요.', mood: '기쁨' },
                { id: 'copy', text: '민지가 준호를 그대로 따라 해요', result: '민지가 본 미끄러지는 펭귄은 아무도 못 봐요.', mood: '아쉬움', why: '민지가 본 펭귄의 모습도 나타낼 만해요.' },
                { id: 'quit', text: '민지가 흉내를 그만둬요', result: '민지가 속상해서 표현을 멈춰요.', mood: '속상함', why: '다르게 한 것은 틀린 것이 아니에요.' }] }, target: { choice: 'both' }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"오늘 짝에게 들은 말 가운데 가장 기분 좋았던 말은 무엇이에요?" 두세 명에게 듣는다. 다음 시간에는 같은 것을 친구와 일부러 다른 방법으로 나타내 본다고 예고하고 출구 질문을 푼다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { mode: 'match', slots: [{ id: 'e1', label: '토끼' }, { id: 'e2', label: '거북' }], cards: ['두 손을 귀처럼 세우고 깡충 뛰어요', '등을 둥글게 하고 느릿느릿 기어요'] }, prompt: '두 동물에 어울리는 흉내 카드를 이어 보세요.', target: { match: { e1: '두 손을 귀처럼 세우고 깡충 뛰어요', e2: '등을 둥글게 하고 느릿느릿 기어요' } }, difficulty: 0.05 },
          { type: 'choice', prompt: '같은 고양이를 서아와 하준이가 다르게 흉내 냈어요. 어떻게 생각하나요?', options: ['둘 다 고양이 같으면 잘한 거예요', '똑같이 해야만 잘한 거예요', '한 명은 틀렸어요'], answer: 0, difficulty: 0.1, explain: '같은 것도 눈에 띈 모습이 달라서 흉내가 다를 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '동물 흉내 내기',
      items: [
        { type: 'figure', wide: true, prompt: '동물과 흉내 낼 움직임을 선으로 이으세요.', tool: 'story', figures: [{ options: { mode: 'match', slots: [{ id: 's1', label: '펭귄' }, { id: 's2', label: '캥거루' }, { id: 's3', label: '뱀' }], cards: ['통통 뛰어요', '구불구불 기어요', '뒤뚱뒤뚱 걸어요'] }, caption: '' }], answer: '펭귄-뒤뚱뒤뚱, 캥거루-통통, 뱀-구불구불' },
        { type: 'table', prompt: '내가 흉내 낸 동물을 쓰세요.', columns: ['동물', '어떤 모습', '움직인 몸의 곳'], rows: 1 },
        { type: 'short', prompt: '짝의 흉내에서 잘 보인 점을 쓰세요.' },
        { type: 'draw', prompt: '동물을 흉내 내는 내 모습을 그리세요.' },
      ],
      easy: {
        note: '고르고 → 살피고 → 움직이는 곳 찾고 → 흉내 내요.',
        items: [
          { type: 'choice', prompt: '펭귄 흉내에 ○ 하세요.', options: ['뒤뚱뒤뚱 걸어요', '구불구불 기어요'], answer: '뒤뚱뒤뚱 걸어요' },
          { type: 'choice', prompt: '친구 흉내를 보고 할 말에 ○ 하세요.', options: ['"잘 보였어"', '"틀렸어"'], answer: '"잘 보였어"' },
          { type: 'draw', prompt: '흉내 낸 동물을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '흉내 내기 차례 카드 두 장이 바른 자리에 놓인 채 시작하고, 맞게 놓으면 초록 테두리가 생겨요.',
      base: '차례를 세우고 동물 흉내를 이은 뒤 짝과 보여 주고 말해 줘요.',
      challenge: '흉내 카드에 함정 카드가 섞여 있어요. 짝에게 잘 보인 점을 두 가지 말해 줘요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 흉내는 똑같이 해야 잘한 것이라고 여긴다 → 같은 동물을 다르게 한 두 학생을 함께 칭찬한다. ② 보는 사람이 웃기만 한다 → "어디가 잘 보였는지" 한 가지를 꼭 말하게 한다. ③ 바닥에 엎드리는 흉내에서 부딪힌다 → 모둠마다 바닥 공간을 정해 준다.',
  }));

  lessons.push(L(18, {
    title: '같은 것을 친구와 다른 방법으로 나타내기',
    objective: '같은 것을 혼자·함께, 빠르기·크기를 바꾸어 친구와 다른 방법으로 나타내고, 짝과 찾은 서로 다른 방법을 셀 수 있다.',
    illustration: ART('two pairs of paper children showing the same tree in different ways, one standing alone with arms up and the other two leaning back to back as one big tree', '같은 나무, 다른 방법', [
      { motif: 'tree', x: 90, y: 214 }, { motif: 'tree', x: 400, y: 214, color: 'mint' }, { motif: 'sun', x: 300, y: 70, s: 0.6 }]),
    safety: [SPACE, FLOOR],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"\'나무\'를 몸으로 나타내 볼까요? 셋, 둘, 하나!" 모두 한 번에 나무가 되게 한 뒤 둘러보게 한다. "모두 똑같았나요?" 서로 다른 나무를 두세 개 찾아 보여 준다. "오늘은 같은 것을 일부러 다르게 나타내 봐요. 다를수록 더 많이 찾은 거예요." 시연 단추로 혼자·함께 가지에 방법 카드가 나뉘는 모습을 보여 준다.',
        student: '"나무!" 하면 내 방법으로 나무가 되어 봐요. 친구의 나무는 어떻게 다른가요?',
        demo: { tool: 'mindmap', options: { topic: '나무 나타내기', slots: ['혼자', '친구와 함께'], cards: ['혼자 두 팔을 뻗어요', '둘이 등을 맞대요'], shuffle: false }, sequence: [{ sort: { '혼자': ['혼자 두 팔을 뻗어요'], '친구와 함께': ['둘이 등을 맞대요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 여러 가지 방법 찾기', minutes: 12, tool: 'mindmap',
            teacher: '"나비를 나타내는 방법은 하나뿐일까요?" 카드마다 몸으로 잠깐 해 보고 나비 같은지 고르게 한다. 셋 넘게 고르는 것을 머뭇거리는 학생에게 "나비 같으면 몇 개든 다 넣어요"라고 말해 준다. 이슬비와 소나기는 같은 비지만 크기와 세기가 다르다는 것을 짚는다.',
            task: '같은 것을 나타낸 여러 방법을 나누고 고르며, 같은 비를 다르게 나타내는 방법을 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '친구들이 나타낸 방법을 혼자 한 것과 친구와 함께 한 것으로 나누어 보세요.', toolOptions: { topic: '어떻게 나타냈을까?', slots: ['혼자', '친구와 함께'], cards: ['혼자 웅크려 씨앗이 되었어요', '둘이 등을 맞대고 큰 나무가 되었어요', '혼자 까치발로 서서 꽃이 되었어요', '셋이 손을 잡고 둥근 해가 되었어요'] },
                target: { sort: { '혼자': ['혼자 웅크려 씨앗이 되었어요', '혼자 까치발로 서서 꽃이 되었어요'], '친구와 함께': ['둘이 등을 맞대고 큰 나무가 되었어요', '셋이 손을 잡고 둥근 해가 되었어요'] } }, difficulty: 0.05 },
              { prompt: '나비를 나타낸 방법을 모두 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '나비를 나타낸 방법', cards: ['두 팔을 펄럭이며 까치발로 걸어요', '짝과 등을 대고 팔을 한쪽씩 펄럭여요', '엎드려 구불구불 기어요', '두 손을 엄지끼리 걸고 팔락팔락 흔들어요'] },
                target: { pick: ['두 팔을 펄럭이며 까치발로 걸어요', '짝과 등을 대고 팔을 한쪽씩 펄럭여요', '두 손을 엄지끼리 걸고 팔락팔락 흔들어요'] }, difficulty: 0.15,
                predict: { q: '나비를 나타내는 방법은 몇 가지일까요?', options: ['한 가지', '여러 가지'], answer: 1 },
                conclude: '같은 나비도 팔, 손, 짝과 함께처럼 여러 가지 방법으로 나타낼 수 있어요.' },
              { prompt: '같은 비를 다르게 나타내는 방법 카드를 이어 보세요.', toolOptions: { mode: 'match', topic: '같은 비, 다른 방법', slots: [{ id: 's1', label: '살살 내리는 이슬비' }, { id: 's2', label: '세게 쏟아지는 소나기' }], cards: ['손가락 끝으로 살살 톡톡 두드려요', '두 손바닥으로 투두둑 세게 두드려요'] },
                target: { match: { s1: '손가락 끝으로 살살 톡톡 두드려요', s2: '두 손바닥으로 투두둑 세게 두드려요' } }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { slots: [{ id: 's1', label: '살살 내리는 이슬비' }, { id: 's2', label: '세게 쏟아지는 소나기' }, { id: 's3', label: '그쳐 가는 비' }], cards: ['손가락 끝으로 살살 톡톡 두드려요', '두 손바닥으로 투두둑 세게 두드려요', '점점 천천히, 점점 작게 두드려요'] }, target: { match: { s1: '손가락 끝으로 살살 톡톡 두드려요', s2: '두 손바닥으로 투두둑 세게 두드려요', s3: '점점 천천히, 점점 작게 두드려요' } }, prompt: '세 가지 비를 다르게 나타내는 방법 카드를 이어 보세요.' } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 짝과 다른 방법 찾기 놀이 (표현)', minutes: 15, tool: 'timer', pair: true,
            teacher: '짝끼리 나타낼 것 하나(예: 꽃, 비행기, 눈사람)를 정한다. 한 사람이 보여 주면 다른 사람은 일부러 다른 방법으로 보여 준다. 1분 동안 몇 가지를 찾는지 센다. "빠르기, 크기, 높낮이, 혼자·함께 가운데 하나만 바꿔도 새 방법이에요." 같은 방법을 되풀이하는 짝에게 바꿀 것 하나를 골라 준다.',
            task: '짝과 같은 것을 정해 번갈아 다른 방법으로 나타내요. 1분 동안 찾은 서로 다른 방법의 수를 적어요.',
            levels: TIMER_LV,
            items: [
              { prompt: '짝과 다른 방법 찾기 놀이의 차례대로 카드를 놓아 보세요.', toolOptions: { cards: ['서로 다른 점을 말해요', '나타낼 것 하나를 정해요', '짝은 다른 방법으로 보여 줘요', '내 방법으로 먼저 보여 줘요'] },
                target: { order: ['나타낼 것 하나를 정해요', '내 방법으로 먼저 보여 줘요', '짝은 다른 방법으로 보여 줘요', '서로 다른 점을 말해요'] }, difficulty: 0.1,
                hints: ['무엇을 나타낼지 정해야 보여 줄 수 있어요. 견주어 말하는 것은 둘 다 보여 준 다음이에요.', '놓은 차례대로 짝과 해 보세요. 아직 아무도 안 보여 줬는데 다른 점을 말하는 자리가 있는지 살펴요.', '정하기 → 내가 먼저 보여 주기 → 짝이 다르게 보여 주기 → 다른 점 말하기 차례예요.'] },
              { prompt: '타이머를 시작하고 1분 동안 짝과 다른 방법 찾기 놀이를 해 본 뒤 "다 했어요"를 누르세요.', toolOptions: { plan: { work: 60, rest: 10, rounds: 1 } }, free: true },
              { prompt: '1분 동안 찾은 서로 다른 방법의 수를 적어요. 두 번 해 보고 두 칸에 적어요.', toolOptions: { fields: [{ label: '1번째 놀이', unit: '가지' }, { label: '2번째 놀이', unit: '가지' }] }, target: { records: true }, difficulty: 0.1,
                levels: { easy: { toolOptions: { fields: [{ label: '1번째 놀이', unit: '가지' }] } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"가장 많은 방법을 찾은 짝은 무엇을 바꾸었나요?" 두 짝이 찾은 방법을 하나씩 보여 주게 한다. 바꾼 것(빠르기·크기·높낮이·혼자·함께)을 칠판에 바를 정(正) 자로 세어 본다. 출구 질문을 푼다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', basket: '비행기를 나타낸 방법', cards: ['두 팔을 옆으로 쭉 펴고 달려요', '짝 뒤에 붙어 서서 둘이 날개를 펴요', '몸을 작게 웅크려 굴러요'] }, prompt: '비행기를 나타낸 방법을 모두 골라 보세요.', target: { pick: ['두 팔을 옆으로 쭉 펴고 달려요', '짝 뒤에 붙어 서서 둘이 날개를 펴요'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '친구와 같은 꽃을 다르게 나타내고 싶어요. 바꾸어 볼 수 있는 것은 무엇일까요?', options: ['높낮이나 크기', '꽃 이름', '내 옷 색깔'], answer: 0, difficulty: 0.1, explain: '움직임의 높낮이·크기·빠르기를 바꾸면 새 방법이 돼요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '같은 것, 다른 방법',
      items: [
        { type: 'table', prompt: '짝과 찾은 서로 다른 방법을 쓰세요.', columns: ['나타낸 것', '나의 방법', '짝의 방법'], rows: 2 },
        { type: 'choice', prompt: '같은 것을 다르게 나타낸 친구에게 할 말에 ○ 하세요.', options: ['"새로운 방법이네!"', '"틀렸어"', '"나처럼 해"'], answer: '"새로운 방법이네!"' },
        { type: 'check', prompt: '오늘 바꾸어 본 것에 모두 ✓ 하세요.', options: ['빠르기', '크기', '높낮이', '혼자·함께'] },
        { type: 'draw', prompt: '친구와 함께 나타낸 모습을 그리세요.' },
      ],
      easy: {
        note: '하나만 바꿔도 새 방법이에요.',
        items: [
          { type: 'choice', prompt: '나비를 나타낸 방법에 ○ 하세요.', options: ['팔을 펄럭여요', '구불구불 기어요'], answer: '팔을 펄럭여요' },
          { type: 'short', prompt: '내가 찾은 방법 하나를 쓰세요.' },
          { type: 'draw', prompt: '나의 방법을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 맞게 놓으면 초록 테두리가 생기고, 기록 칸이 하나예요.',
      base: '여러 방법을 나누고 고른 뒤 짝과 놀이를 두 번 하고 기록해요.',
      challenge: '세 가지 비를 다르게 나타내는 방법을 잇고, 2번째 놀이에서 방법 수를 늘려 봐요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 짝의 방법을 그대로 따라 한다 → 빠르기·크기·높낮이 가운데 하나를 골라 바꾸게 한다. ② 다른 방법을 "틀렸다"고 한다 → 다를수록 많이 찾은 것이라고 놀이 규칙으로 정한다. ③ 함께 하기에서 몸을 세게 기댄다 → 등을 맞댈 때는 살짝 대기만 한다고 약속한다.',
  }));

  lessons.push(L(19, {
    title: '물건의 움직임을 몸으로 흉내 내기',
    objective: '가위·풍선·세탁기처럼 물건이 움직이는 모습을 살펴 몸으로 흉내 내고, 움직임이 바뀌는 차례대로 나타낼 수 있다.',
    illustration: ART('paper children imitating a pair of scissors opening and closing, a balloon inflating and a washing machine spinning, the real objects floating as paper cutouts', '물건처럼 움직여요', [
      { motif: 'house', x: 100, y: 214, color: 'lavender' }, { motif: 'star', x: 380, y: 74, s: 0.6 }, { motif: 'flower', x: 400, y: 230 }]),
    safety: [SPACE, FLOOR],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '선생님이 가위를 천천히 벌렸다 오므린다(날은 닫은 채로 보여 준다). "가위는 어떻게 움직이지요? 우리 몸으로 가위가 되어 볼까요?" 두 팔 또는 두 다리를 벌렸다 모으는 학생을 찾아 보여 준다. "물건도 몸으로 나타낼 수 있어요. 움직이는 모습을 잘 보면 돼요." 시연 단추로 \'가위\' 옆에 움직임 카드가 놓이는 모습을 보여 준다.',
        student: '두 팔로 가위가 되어 벌렸다 오므려 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '물건처럼', slots: [{ id: 's1', label: '가위' }], cards: ['두 팔을 벌렸다 오므려요', '몸을 빙글빙글 돌려요'], shuffle: false }, sequence: [{ match: { s1: '두 팔을 벌렸다 오므려요' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 물건은 어떻게 움직일까', minutes: 12, tool: 'mindmap',
            teacher: '"세탁기가 돌아갈 때 소리와 움직임을 흉내 내 볼까요?" 카드마다 몸으로 잠깐 해 본다. 열렸다 닫히는 것과 돌아가는 것을 나눌 때는 손으로 문 열기, 손가락 돌리기를 해 보게 한다. 물건의 생김새(색·크기)보다 움직이는 모습을 보게 한다.',
            task: '물건과 흉내 낼 움직임을 잇고, 물건을 움직이는 모습에 따라 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '물건마다 흉내 낼 움직임 카드를 이어 보세요.', toolOptions: { mode: 'match', topic: '물건처럼', slots: [{ id: 's1', label: '가위' }, { id: 's2', label: '풍선' }, { id: 's3', label: '세탁기' }], cards: ['두 팔을 벌렸다 오므려요', '몸을 크게 부풀렸다 쭈그러져요', '몸을 빙글빙글 돌려요'] },
                target: { match: { s1: '두 팔을 벌렸다 오므려요', s2: '몸을 크게 부풀렸다 쭈그러져요', s3: '몸을 빙글빙글 돌려요' } }, difficulty: 0.05 },
              { prompt: '열렸다 닫히는 물건과 빙글빙글 도는 물건으로 나누어 보세요.', toolOptions: { topic: '물건의 움직임', slots: ['열렸다 닫혀요', '빙글빙글 돌아요'], cards: ['교실 문', '필통 뚜껑', '선풍기 날개', '자전거 바퀴'] },
                target: { sort: { '열렸다 닫혀요': ['교실 문', '필통 뚜껑'], '빙글빙글 돌아요': ['선풍기 날개', '자전거 바퀴'] } }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['교실 문', '필통 뚜껑', '선풍기 날개', '자전거 바퀴', '움직이지 않는 칠판'] } } } },
              { prompt: '물건마다 움직이는 곳 카드를 이어 보세요.', toolOptions: { mode: 'match', topic: '움직이는 곳', slots: [{ id: 's1', label: '우산' }, { id: 's2', label: '자동차' }, { id: 's3', label: '시계' }], cards: ['살이 활짝 펴져요', '바퀴가 굴러요', '바늘이 돌아요'] },
                target: { match: { s1: '살이 활짝 펴져요', s2: '바퀴가 굴러요', s3: '바늘이 돌아요' } }, difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 움직임이 바뀌는 차례대로 나타내기 (표현)', minutes: 15, tool: 'story',
            teacher: '"풍선에 바람을 넣으면 처음엔 어떤가요?" 바람 빠진 풍선부터 시작하게 한다. 선생님이 "후-" 하고 바람 넣는 소리를 낼 때마다 조금씩 커지고, "피식" 하면 쭈그러진다. 태엽 인형은 점점 느려진다는 것을 손뼉 빠르기로 들려준다. 마지막 문항은 모둠이 함께 나타낸다.',
            task: '물건의 움직임이 바뀌는 차례대로 장면 카드를 놓고, 그 차례대로 몸으로 나타내요.',
            levels: CARD_LV,
            items: [
              { prompt: '풍선에 바람을 넣었다가 빠지는 차례대로 장면 카드를 놓아 보세요.', toolOptions: { cards: [{ id: 'flat', text: '작게 웅크려요', motif: 'leaf' }, { id: 'grow', text: '조금씩 커져요', motif: 'cloud' }, { id: 'big', text: '가장 크게 부풀어요', motif: 'sun' }, { id: 'pop', text: '피식 바람이 빠져요', motif: 'leaf' }] },
                target: { order: ['flat', 'grow', 'big', 'pop'] }, difficulty: 0.1 },
              { prompt: '태엽 인형이 멈추기까지 차례대로 장면 카드를 놓아 보세요.', toolOptions: { cards: [{ id: 'fast', text: '빠르게 걸어요', motif: 'star' }, { id: 'slow', text: '조금 느리게 걸어요', motif: 'flower' }, { id: 'slower', text: '아주 느리게 걸어요', motif: 'leaf' }, { id: 'stop', text: '딱 멈춰요', motif: 'moon' }] },
                target: { order: ['fast', 'slow', 'slower', 'stop'] }, difficulty: 0.15,
                predict: { q: '태엽이 다 풀리면 인형은 어떻게 될까요?', options: ['더 빨라져요', '점점 느려져요'], answer: 1 },
                conclude: '빠르기를 조금씩 바꾸면 태엽이 풀려 가는 모습이 잘 보여요.',
                levels: { easy: { state: { at: { fast: 0, stop: 3 } } } } },
              { prompt: '모둠이 물건 하나를 골라 움직임이 바뀌는 차례대로 몸으로 나타내 보고 "다 했어요"를 누르세요.', toolOptions: { cards: [{ id: 'flat', text: '작게 웅크려요', motif: 'leaf' }, { id: 'big', text: '가장 크게 부풀어요', motif: 'sun' }] }, free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"모둠에서 나타낸 물건 가운데 가장 그럴듯했던 것은 무엇이에요? 어디를 보고 그렇게 느꼈나요?" 두 모둠이 짧게 보여 준다(모둠당 30초). 출구 질문을 푼다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '물건처럼', slots: [{ id: 'e1', label: '엘리베이터 문' }, { id: 'e2', label: '돌아가는 팽이' }], cards: ['두 팔을 옆으로 벌렸다 모아요', '제자리에서 빙글빙글 돌아요'] }, prompt: '두 물건에 어울리는 흉내 카드를 이어 보세요.', target: { match: { e1: '두 팔을 옆으로 벌렸다 모아요', e2: '제자리에서 빙글빙글 돌아요' } }, difficulty: 0.05 },
          { type: 'choice', prompt: '팽이가 멈출 때의 모습을 나타내려면 어떻게 할까요?', options: ['점점 느리게 돌다가 비틀거리며 멈춰요', '점점 빠르게 돌아요', '처음부터 가만히 서 있어요'], answer: 0, difficulty: 0.15, explain: '팽이는 힘이 빠지면 느려지고 비틀거리다 쓰러져요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '물건처럼 움직여요',
      items: [
        { type: 'figure', wide: true, prompt: '물건과 흉내 낼 움직임을 선으로 이으세요.', tool: 'mindmap', figures: [{ options: { mode: 'match', topic: '물건처럼', slots: [{ id: 's1', label: '가위' }, { id: 's2', label: '풍선' }, { id: 's3', label: '세탁기' }], cards: ['빙글빙글 돌아요', '벌렸다 오므려요', '부풀었다 쭈그러져요'] }, caption: '' }], answer: '가위-벌렸다 오므려요, 풍선-부풀었다 쭈그러져요, 세탁기-빙글빙글' },
        { type: 'choice', prompt: '빙글빙글 도는 물건에 ○ 하세요.', options: ['자전거 바퀴', '교실 문', '필통 뚜껑'], answer: '자전거 바퀴' },
        { type: 'short', prompt: '우리 모둠이 나타낸 물건과 그 움직임을 쓰세요.' },
        { type: 'draw', prompt: '물건을 흉내 내는 내 모습을 그리세요.' },
      ],
      easy: {
        note: '물건이 움직이는 모습을 먼저 손으로 흉내 내요.',
        items: [
          { type: 'choice', prompt: '풍선 흉내에 ○ 하세요.', options: ['부풀었다 쭈그러져요', '빙글빙글 돌아요'], answer: '부풀었다 쭈그러져요' },
          { type: 'choice', prompt: '열렸다 닫히는 것에 ○ 하세요.', options: ['교실 문', '자전거 바퀴'], answer: '교실 문' },
          { type: 'draw', prompt: '흉내 낸 물건을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 맞게 놓으면 초록 테두리가 생기고, 태엽 인형 카드 두 장이 바른 자리에 놓인 채 시작해요.',
      base: '움직임을 잇고 나눈 뒤, 차례대로 놓고 몸으로 나타내요.',
      challenge: '움직이지 않는 함정 카드가 섞여 있어요. 모둠 표현에 빠르기 바꾸기를 넣어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 물건은 살아 있지 않아 흉내 낼 수 없다고 여긴다 → 움직이는 모습만 보면 된다고 짚는다. ② 가위를 흉내 내다 친구를 집는다 → 팔은 내 앞에서만 벌리고 오므린다고 약속한다. 실제 가위는 날을 닫은 채로만 보여 준다. ③ 바뀌는 차례 없이 한 모습만 한다 → 북소리마다 장면을 바꾸게 한다.',
  }));

  lessons.push(L(20, {
    title: '날씨를 세기와 빠르기로 나타내기',
    objective: '산들바람·소나기·함박눈처럼 날씨에 어울리는 움직임을 골라 세기와 빠르기를 바꾸어 나타내고, 날씨가 바뀌는 이야기를 모둠이 차례대로 표현할 수 있다.',
    illustration: ART('paper children swaying gently as a breeze, stomping as thunder, and floating down slowly as snowflakes, with clouds, raindrops and a rainbow above', '날씨를 몸으로', [
      { motif: 'cloud', x: 300, y: 70 }, { motif: 'snow', x: 80, y: 90 }, { motif: 'tree', x: 400, y: 214 }]),
    safety: [SPACE, FLOOR],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"오늘 바깥 날씨는 어때요?" 창밖을 함께 본다. "바람이 살살 불 때와 태풍이 불 때, 나무는 어떻게 다를까요?" 두 팔로 살살, 세게 흔들어 보게 한다. "날씨를 나타낼 때는 세기와 빠르기를 바꾸면 돼요." 시연 단추로 \'산들바람\' 옆에 움직임 카드가 놓이는 모습을 보여 준다.',
        student: '두 팔을 나무라고 생각하고 살살 바람, 센 바람에 흔들려 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '날씨를 몸으로', slots: [{ id: 's1', label: '산들바람' }], cards: ['팔을 살랑살랑 흔들어요', '발을 쿵 굴러요'], shuffle: false }, sequence: [{ match: { s1: '팔을 살랑살랑 흔들어요' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 날씨에 어울리는 움직임', minutes: 12, tool: 'mindmap',
            teacher: '"함박눈은 빠르게 떨어질까요, 천천히 떨어질까요?" 카드마다 손으로 먼저 흉내 내 본다. 센 날씨와 약한 날씨를 나눌 때는 손뼉을 세게, 약하게 쳐 보며 견주게 한다. 해가 뜨는 모습은 13~16차시의 높낮이를 떠올리게 한다.',
            task: '날씨와 어울리는 움직임을 잇고, 세기와 빠르기에 따라 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '날씨마다 어울리는 움직임 카드를 이어 보세요.', toolOptions: { mode: 'match', topic: '날씨를 몸으로', slots: [{ id: 's1', label: '산들바람' }, { id: 's2', label: '함박눈' }, { id: 's3', label: '천둥' }], cards: ['팔을 살랑살랑 흔들어요', '손가락을 펴고 천천히 내려앉아요', '발을 쿵 구르고 손뼉을 세게 쳐요'] },
                target: { match: { s1: '팔을 살랑살랑 흔들어요', s2: '손가락을 펴고 천천히 내려앉아요', s3: '발을 쿵 구르고 손뼉을 세게 쳐요' } }, difficulty: 0.05 },
              { prompt: '세고 빠른 날씨와 약하고 느린 날씨로 나누어 보세요.', toolOptions: { topic: '날씨의 세기', slots: ['세고 빠르게', '약하고 느리게'], cards: ['태풍', '산들바람', '소나기', '함박눈'] },
                target: { sort: { '세고 빠르게': ['태풍', '소나기'], '약하고 느리게': ['산들바람', '함박눈'] } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['태풍', '산들바람', '소나기', '함박눈', '우산'] } } } },
              { prompt: '해가 떠오르는 모습을 나타내는 움직임만 골라 보세요.', toolOptions: { mode: 'pick', basket: '해가 떠올라요', cards: ['웅크렸다가 팔을 벌리며 천천히 일어나요', '발을 쿵쿵 굴러요', '바닥에 납작 엎드려요'] },
                target: { pick: ['웅크렸다가 팔을 벌리며 천천히 일어나요'] }, difficulty: 0.1,
                predict: { q: '해가 뜨는 모습은 낮게에서 높게일까요, 높게에서 낮게일까요?', options: ['낮게에서 높게', '높게에서 낮게'], answer: 0 },
                conclude: '해가 떠오를 때는 낮은 데서 높은 데로, 천천히 몸을 펴요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 모둠 날씨 이야기 표현하기 (표현)', minutes: 15, tool: 'story',
            teacher: '"선생님이 날씨 이야기를 들려줄게요. 잘 듣고 장면 차례를 세워요." 문항 글을 천천히 읽어 준다. 차례를 세운 모둠부터 장면마다 몸으로 나타내 본다. 선생님이 북(또는 손뼉)으로 장면을 넘긴다. 무지개 장면은 모둠이 함께 둥글게 서서 나타내 보게 한다.',
            task: '날씨 이야기를 듣고 장면 차례를 세운 뒤, 모둠이 함께 장면마다 몸으로 나타내요.',
            levels: CARD_LV,
            items: [
              { prompt: '해가 쨍쨍하다가 바람이 불고, 소나기가 쏟아진 뒤 무지개가 떴어요. 이야기 차례대로 놓아 보세요.', toolOptions: { cards: [{ id: 'sun', text: '해가 쨍쨍해요', motif: 'sun' }, { id: 'wind', text: '바람이 휘익 불어요', motif: 'leaf' }, { id: 'rain', text: '소나기가 쏟아져요', motif: 'cloud' }, { id: 'bow', text: '무지개가 떠요', motif: 'star' }] },
                target: { order: ['sun', 'wind', 'rain', 'bow'] }, difficulty: 0.05 },
              { prompt: '함박눈이 내려 눈사람을 만들었는데, 해가 나자 눈사람이 녹았어요. 이야기 차례대로 놓아 보세요.', toolOptions: { cards: [{ id: 'snow', text: '함박눈이 내려요', motif: 'snow' }, { id: 'man', text: '눈사람이 서 있어요', motif: 'star' }, { id: 'sun', text: '해가 나와요', motif: 'sun' }, { id: 'melt', text: '눈사람이 녹아요', motif: 'leaf' }] },
                target: { order: ['snow', 'man', 'sun', 'melt'] }, difficulty: 0.1 },
              { prompt: '모둠이 날씨 이야기 하나를 골라 장면마다 몸으로 나타내 보고 "다 했어요"를 누르세요.', toolOptions: { cards: [{ id: 'sun', text: '해가 쨍쨍해요', motif: 'sun' }, { id: 'rain', text: '소나기가 쏟아져요', motif: 'cloud' }] }, free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"오늘 날씨 표현에서 세기와 빠르기를 어떻게 바꾸었나요?" 두세 명에게 듣는다. 17~20차시에 동물·물건·날씨를 흉내 내고, 같은 것도 다르게 나타냈다는 것을 묶어 말한다. 다음 시간에는 친구의 표현을 보고 맞히는 놀이를 한다고 예고하고 출구 질문을 푼다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '날씨의 세기', slots: ['세고 빠르게', '약하고 느리게'], cards: ['우르르 쾅 천둥', '보슬보슬 이슬비'] }, prompt: '두 날씨를 세기와 빠르기에 따라 나누어 보세요.', target: { sort: { '세고 빠르게': ['우르르 쾅 천둥'], '약하고 느리게': ['보슬보슬 이슬비'] } }, difficulty: 0.05 },
          { type: 'choice', prompt: '태풍을 나타내려면 움직임을 어떻게 할까요?', options: ['세고 빠르게 크게 흔들어요', '약하고 느리게 살살 흔들어요', '가만히 서 있어요'], answer: 0, difficulty: 0.1, explain: '태풍은 센 바람이라 몸을 세고 빠르게, 크게 움직여요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '날씨를 몸으로',
      items: [
        { type: 'figure', wide: true, prompt: '날씨 이야기 차례대로 카드 아래에 1, 2, 3, 4를 쓰세요.', tool: 'story', figures: [{ options: { cards: [{ id: 'rain', text: '소나기가 쏟아져요', motif: 'cloud' }, { id: 'sun', text: '해가 쨍쨍해요', motif: 'sun' }, { id: 'bow', text: '무지개가 떠요', motif: 'star' }, { id: 'wind', text: '바람이 불어요', motif: 'leaf' }] }, caption: '' }], answer: '해 1, 바람 2, 소나기 3, 무지개 4' },
        { type: 'table', prompt: '날씨마다 나타낼 움직임을 쓰세요.', columns: ['날씨', '나타낼 움직임'], cells: [['산들바람', ''], ['소나기', ''], ['함박눈', '']] },
        { type: 'choice', prompt: '약하고 느린 날씨에 ○ 하세요.', options: ['산들바람', '태풍', '소나기'], answer: '산들바람' },
        { type: 'draw', prompt: '우리 모둠이 나타낸 날씨 장면 하나를 그리세요.' },
      ],
      easy: {
        note: '센 날씨는 세고 빠르게, 약한 날씨는 살살 천천히!',
        items: [
          { type: 'choice', prompt: '천둥을 나타내는 움직임에 ○ 하세요.', options: ['발을 쿵 굴러요', '살랑살랑 흔들어요'], answer: '발을 쿵 굴러요' },
          { type: 'choice', prompt: '함박눈은 어떻게 떨어지나요? ○ 하세요.', options: ['천천히', '아주 빠르게'], answer: '천천히' },
          { type: 'draw', prompt: '좋아하는 날씨를 나타내는 내 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 맞게 놓으면 초록 테두리가 생겨요. 이야기는 선생님이 한 번 더 읽어 줘요.',
      base: '날씨 움직임을 잇고 나눈 뒤, 이야기 차례를 세워 모둠이 나타내요.',
      challenge: '날씨가 아닌 함정 카드가 섞여 있어요. 모둠 표현에 세기 바꾸기를 두 번 넣어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 센 날씨를 나타내다 친구와 부딪힌다 → 센 움직임은 제자리에서만 한다고 약속한다. ② 모든 날씨를 같은 세기로 한다 → 선생님 손뼉 세기에 맞추어 바꾸게 한다. ③ 이야기 차례를 놓친다 → 이야기를 한 번 더 읽고 장면마다 손가락을 접으며 센다.',
  }));

  // ───────────────────────── 21~24차시: 맞히고 더 잘 보이게 바꾸기(표현 나눔과 창의적 개선) ─────────────────────────

  lessons.push(L(21, {
    title: '친구의 몸 표현을 보고 근거 대며 맞히기',
    objective: '친구가 몸으로 나타낸 것을 끝까지 보고 무엇인지 맞히며, 맞힌 근거를 움직인 곳과 모습으로 말할 수 있다.',
    illustration: ART('a paper child making a mountain shape with arms above head while classmates watch carefully with question marks and lightbulbs above them', '무엇을 나타냈을까요?', [
      { motif: 'mountain', x: 110, y: 214 }, { motif: 'star', x: 380, y: 70, s: 0.6 }, { motif: 'flower', x: 410, y: 230 }]),
    safety: [SPACE, FLOOR],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '선생님이 두 팔을 머리 위로 모아 뾰족하게 하고 가만히 선다. "무엇일까요? 맞힌 사람은 어디를 보고 알았는지도 말해 줘요." \'산\'이라는 대답에 "팔을 뾰족하게 모아서요"처럼 근거를 붙이게 한다. 다 보기 전에 소리친 학생이 있으면 "끝까지 보고 말해요"라고 약속을 정한다. 시연 단추로 움직임 카드가 \'산\'과 이어지는 모습을 보여 준다.',
        student: '선생님이 나타낸 것을 맞혀 봐요. 어디를 보고 알았나요?',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '무엇일까?', slots: [{ id: 's1', label: '두 팔을 머리 위로 모아 뾰족하게 서 있어요' }], cards: ['산', '바다'], shuffle: false }, sequence: [{ match: { s1: '산' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 움직임을 보고 맞히고 근거 말하기', minutes: 12, tool: 'mindmap',
            teacher: '"카드에 적힌 움직임을 먼저 내 몸으로 해 봐요. 그러면 무엇인지 보여요." 맞히기 문항 뒤에는 "왜 그렇게 생각해요?"를 꼭 묻는다. 근거 없이 "그냥요"라고 답하는 학생에게 "팔이요? 다리요? 어디를 봤어요?"라고 몸의 곳을 묻는다.',
            task: '움직임을 읽고 따라 해 본 뒤 무엇을 나타냈는지 잇고, 근거가 있는 말과 잘 보는 모습을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '친구의 움직임을 읽고 무엇을 나타냈는지 카드를 이어 보세요.', toolOptions: { mode: 'match', topic: '무엇일까?', slots: [{ id: 's1', label: '한 팔을 코 앞으로 쭉 뻗어 흔들어요' }, { id: 's2', label: '손가락을 펴고 위에서 아래로 천천히 내려요' }, { id: 's3', label: '두 팔을 크게 돌리며 빙글빙글 돌아요' }], cards: ['코끼리', '함박눈', '바람개비'] },
                target: { match: { s1: '코끼리', s2: '함박눈', s3: '바람개비' } }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['코끼리', '함박눈', '바람개비', '시계'] } } } },
              { prompt: '친구가 새를 나타냈어요. 맞힌 근거가 있는 말만 골라 보세요.', toolOptions: { mode: 'pick', basket: '근거가 있는 말', cards: ['"팔을 날개처럼 펄럭여서 새예요"', '"까치발로 사뿐사뿐 뛰어서 새예요"', '"그냥 새 같아요"', '"민지가 새를 좋아해서요"'] },
                target: { pick: ['"팔을 날개처럼 펄럭여서 새예요"', '"까치발로 사뿐사뿐 뛰어서 새예요"'] }, difficulty: 0.15,
                predict: { q: '"그냥 새 같아요"도 근거가 될까요?', options: ['돼요', '안 돼요'], answer: 1 },
                conclude: '근거는 친구가 움직인 곳과 모습에서 찾아요.' },
              { prompt: '친구 표현을 볼 때의 모습을 잘 보는 모습과 고칠 모습으로 나누어 보세요.', toolOptions: { topic: '친구 표현 보기', slots: ['잘 보는 모습', '고칠 모습'], cards: ['끝까지 조용히 봐요', '다 보기 전에 소리쳐요', '움직이는 곳을 눈으로 따라가요', '틀린 답을 놀려요'] },
                target: { sort: { '잘 보는 모습': ['끝까지 조용히 봐요', '움직이는 곳을 눈으로 따라가요'], '고칠 모습': ['다 보기 전에 소리쳐요', '틀린 답을 놀려요'] } }, difficulty: 0.05 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 모둠 맞히기 놀이 (표현)', minutes: 15, tool: 'emotion', pair: true,
            teacher: '네 명 모둠에서 한 사람씩 나와 쪽지에 적힌 것(동물·물건·날씨)을 20초 동안 몸으로 나타내고, 나머지는 끝까지 본 뒤 근거를 붙여 맞힌다. "아무도 못 맞혔으면 그만둘까요? 아니에요. 한 곳을 바꾸어 한 번 더 해요." 못 맞힌 친구를 놀리면 바로 멈추게 한다.',
            task: '모둠에서 번갈아 쪽지에 적힌 것을 몸으로 나타내고, 끝까지 본 뒤 근거를 붙여 맞혀요.',
            levels: CARD_LV,
            items: [
              { prompt: '모둠에서 한 사람씩 쪽지에 적힌 것을 나타내고 맞히기 놀이를 해 본 뒤 "다 했어요"를 누르세요.', toolOptions: { cards: ['신남', '뿌듯함'], slots: [{ id: 's1', label: '맞히기 놀이를 했어요' }] }, free: true },
              { prompt: '하준이가 개구리를 나타냈는데 아무도 못 맞혔어요. 하준이는 어떻게 하면 좋을까요?', toolOptions: { mode: 'branch', who: '하준', situation: '하준이가 개구리를 나타냈는데 모둠 친구 아무도 못 맞혔어요.', choices: [
                { id: 'again', text: '쪼그렸다 펄쩍 뛰는 것을 더 크게 해서 다시 해요', result: '친구들이 "개구리!" 하고 맞혀요.', mood: '뿌듯함' },
                { id: 'quit', text: '"안 할래" 하고 그만둬요', result: '하준이는 끝까지 개구리를 보여 주지 못해요.', mood: '속상함', why: '못 맞히면 바꾸어서 다시 할 수 있어요.' },
                { id: 'tell', text: '"개구리야!" 하고 답을 말해 버려요', result: '친구들이 맞혀 보는 재미가 없어져요.', mood: '아쉬움', why: '답을 말하기보다 더 잘 보이게 바꾸어 봐요.' }] }, target: { choice: 'again' }, difficulty: 0.1 },
              { prompt: '친구들이 내 표현을 못 맞혔을 때 해 볼 것만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', weather: false, basket: '해 볼 것', cards: ['움직이는 곳을 더 크게 해요', '어울리는 소리를 함께 내요', '바로 그만둬요', '친구에게 화를 내요'] },
                target: { pick: ['움직이는 곳을 더 크게 해요', '어울리는 소리를 함께 내요'] }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"오늘 친구가 가장 근거를 잘 댄 말은 무엇이었나요?" 두세 가지를 칠판에 적는다. 못 맞힌 표현은 다음 시간에 더 잘 보이게 바꾸어 다시 해 본다고 알려 주고 출구 질문을 푼다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '무엇일까?', slots: [{ id: 'e1', label: '두 팔을 옆으로 쭉 펴고 기울이며 달려요' }, { id: 'e2', label: '엎드려 등을 둥글게 하고 느릿느릿 기어요' }], cards: ['비행기', '거북'] }, prompt: '친구의 움직임을 읽고 무엇을 나타냈는지 이어 보세요.', target: { match: { e1: '비행기', e2: '거북' } }, difficulty: 0.05 },
          { type: 'choice', prompt: '친구가 무엇을 나타냈는지 맞힐 때 알맞은 말은 무엇일까요?', options: ['"꼬리를 흔들어서 강아지 같아요"', '"몰라요, 아무거나요"', '"다 보기 전에 맞힐래요"'], answer: 0, difficulty: 0.1, explain: '움직인 곳과 모습을 근거로 말하면 친구도 내 생각을 알 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '보고 맞히기',
      items: [
        { type: 'figure', wide: true, prompt: '움직임과 나타낸 것을 선으로 이으세요.', tool: 'mindmap', figures: [{ options: { mode: 'match', topic: '무엇일까?', slots: [{ id: 's1', label: '코 앞으로 팔을 뻗어 흔들어요' }, { id: 's2', label: '손가락을 펴고 천천히 내려요' }, { id: 's3', label: '빙글빙글 돌아요' }], cards: ['바람개비', '코끼리', '함박눈'] }, caption: '' }], answer: '코-코끼리, 천천히 내려요-함박눈, 빙글빙글-바람개비' },
        { type: 'table', prompt: '모둠 친구의 표현을 맞혀 보고 쓰세요.', columns: ['친구', '맞힌 것', '근거(움직인 곳·모습)'], rows: 3 },
        { type: 'choice', prompt: '잘 보는 모습에 ○ 하세요.', options: ['끝까지 조용히 봐요', '다 보기 전에 소리쳐요', '틀린 답을 놀려요'], answer: '끝까지 조용히 봐요' },
        { type: 'short', prompt: '친구가 내 표현을 못 맞혔을 때 바꾸어 볼 것을 쓰세요.' },
      ],
      easy: {
        note: '친구가 움직이는 곳을 눈으로 따라가요.',
        items: [
          { type: 'choice', prompt: '팔을 날개처럼 펄럭이면 무엇일까요?', options: ['새', '거북'], answer: '새' },
          { type: 'choice', prompt: '근거가 있는 말에 ○ 하세요.', options: ['"팔을 펄럭여서요"', '"그냥요"'], answer: '"팔을 펄럭여서요"' },
          { type: 'draw', prompt: '내가 나타낸 것을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 맞게 놓으면 초록 테두리가 생겨요. 맞히기 놀이에서 보기 세 개 가운데 고르게 해요.',
      base: '움직임을 보고 맞히고, 근거를 한 가지 붙여 말해요.',
      challenge: '함정 카드가 섞여 있어요. 근거를 두 가지(움직인 곳, 빠르기·크기) 붙여 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 다 보기 전에 소리쳐 맞힌다 → 표현이 끝나고 선생님이 손을 들면 말한다고 약속한다. ② 근거 없이 짐작한다 → "어디를 봤어요?"를 되풀이한다. ③ 못 맞히면 표현한 친구가 그만둔다(못 맞히면 그만두는 것이 낫다는 생각) → 바꾸어 다시 하는 것을 칭찬한다.',
  }));

  lessons.push(L(22, {
    title: '더 잘 보이게 바꿀 곳 정해 다시 보여 주기',
    objective: '친구가 헷갈린 까닭을 듣고 내 움직임에서 바꿀 곳 하나를 정해 연습한 뒤, 다시 보여 주어 맞힌 친구 수를 견줄 수 있다.',
    illustration: ART('a paper child adding finger antennae to a butterfly pose after listening to friends, two speech bubbles showing before and after with more friends smiling', '한 곳만 바꾸어 다시!', [
      { motif: 'flower', x: 90, y: 228 }, { motif: 'star', x: 380, y: 70, s: 0.6 }, { motif: 'tree', x: 410, y: 214 }]),
    safety: [SPACE, FLOOR],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"지난 시간에 친구들이 못 맞힌 표현이 있었지요? 그때 친구들은 무엇과 헷갈렸나요?" 두세 명의 경험을 듣는다. "못 맞혔다고 그만두지 않아요. 친구 말을 듣고 한 곳만 바꾸면 훨씬 잘 보여요." 시연 단추로 \'너무 작아서 안 보였어요\' 옆에 \'팔을 크게 벌려요\' 카드가 놓이는 모습을 보여 준다.',
        student: '지난 시간에 친구들이 못 맞힌 표현을 떠올려 봐요. 무엇과 헷갈렸나요?',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '바꿀 곳', slots: [{ id: 's1', label: '너무 작아서 안 보였어요' }], cards: ['팔을 크게 벌려 움직여요', '더 작게 움직여요'], shuffle: false }, sequence: [{ match: { s1: '팔을 크게 벌려 움직여요' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 헷갈린 까닭과 바꿀 곳 잇기', minutes: 11, tool: 'mindmap',
            teacher: '"친구들이 나비를 새로 헷갈렸대요. 나비에만 있는 것은 무엇일까요?" 더듬이, 날개 무늬 같은 대답을 끌어낸다. 바꿀 곳은 하나만 정해야 연습하기 쉽다는 것을 짚는다. 등을 돌리고 하는 방법을 고르는 학생에게 "보는 사람 쪽에서 무엇이 보일까요?"라고 묻는다.',
            task: '친구들이 헷갈린 까닭을 읽고 바꿀 곳을 잇고, 더 잘 보이게 하는 방법을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '친구들이 헷갈린 까닭마다 바꿀 곳 카드를 이어 보세요.', toolOptions: { mode: 'match', topic: '바꿀 곳', slots: [{ id: 's1', label: '나비인지 새인지 헷갈렸어요' }, { id: 's2', label: '너무 작아서 뒤에서 안 보였어요' }, { id: 's3', label: '너무 빨라서 무엇인지 몰랐어요' }], cards: ['손가락으로 더듬이를 세워요', '팔을 크게 벌려 움직여요', '천천히 움직여요'] },
                target: { match: { s1: '손가락으로 더듬이를 세워요', s2: '팔을 크게 벌려 움직여요', s3: '천천히 움직여요' } }, difficulty: 0.15 },
              { prompt: '표현을 더 잘 보이게 하는 방법만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '더 잘 보이게', cards: ['어울리는 소리를 함께 내요', '얼굴 표정을 더해요', '등을 돌리고 해요', '아주 작게 꼼지락거려요'] },
                target: { pick: ['어울리는 소리를 함께 내요', '얼굴 표정을 더해요'] }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['어울리는 소리를 함께 내요', '얼굴 표정을 더해요', '등을 돌리고 해요', '아주 작게 꼼지락거려요', '눈을 감고 해요'] } } } },
              { prompt: '친구들이 사자를 고양이로 헷갈렸어요. 사자답게 바꾸는 방법 카드를 이어 보세요.', toolOptions: { mode: 'match', topic: '사자답게', slots: [{ id: 's1', label: '고양이처럼 작아 보였어요' }, { id: 's2', label: '소리가 없어 무섭지 않았어요' }], cards: ['어깨를 펴고 크게 성큼성큼 걸어요', '"어흥!" 하고 크게 소리 내요'] },
                target: { match: { s1: '어깨를 펴고 크게 성큼성큼 걸어요', s2: '"어흥!" 하고 크게 소리 내요' } }, difficulty: 0.15,
                predict: { q: '크기와 소리를 바꾸면 더 잘 맞힐까요?', options: ['더 잘 맞혀요', '똑같아요'], answer: 0 },
                conclude: '헷갈린 까닭을 알면 무엇을 바꿀지 정할 수 있어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 바꾸어 연습하고 다시 보여 주기 (표현)', minutes: 17, tool: 'timer',
            teacher: '"바꿀 곳 하나를 정했으면 1분 동안 연습해요. 그다음 모둠 친구에게 다시 보여 줘요." 처음 보여 줬을 때 맞힌 친구 수와 바꾼 뒤 맞힌 친구 수를 적게 한다. 수가 늘지 않은 학생에게 "그래도 바꾸어 본 것이 중요해요. 다른 곳을 하나 더 바꿔 볼까요?"라고 말한다. 수를 친구와 견주지 않게 한다.',
            task: '바꾸는 차례를 세우고 1분 동안 연습한 뒤 다시 보여 줘요. 처음과 바꾼 뒤에 맞힌 친구 수를 적어요.',
            levels: TIMER_LV,
            items: [
              { prompt: '내 표현을 더 잘 보이게 바꾸는 차례대로 카드를 놓아 보세요.', toolOptions: { cards: ['바꾸어서 연습해요', '다시 보여 줘요', '친구가 헷갈린 까닭을 들어요', '바꿀 곳 하나를 정해요'] },
                target: { order: ['친구가 헷갈린 까닭을 들어요', '바꿀 곳 하나를 정해요', '바꾸어서 연습해요', '다시 보여 줘요'] }, difficulty: 0.1,
                hints: ['무엇을 바꿀지는 친구 말을 들어야 알 수 있어요. 다시 보여 주기는 연습한 다음이에요.', '놓은 차례대로 해 보세요. 바꿀 곳을 정하기 전에 연습하는 자리가 있는지 살펴요.', '까닭 듣기 → 바꿀 곳 정하기 → 연습하기 → 다시 보여 주기 차례예요.'] },
              { prompt: '연습: 60초 연습하고 10초 쉬기를 2번 하도록 타이머를 맞추세요.', toolOptions: { plan: { work: 20, rest: 20, rounds: 1 } }, target: { plan: { work: 60, rest: 10, rounds: 2 } }, difficulty: 0.15,
                levels: { easy: { prompt: '연습: 60초 연습하기를 2번 하도록 타이머를 맞추세요. 쉬는 시간은 그대로 두어요.', target: { plan: { work: 60, rounds: 2 } } } } },
              { prompt: '타이머를 켜고 바꾼 곳을 연습한 뒤 모둠 친구에게 다시 보여 주고 "다 했어요"를 누르세요.', toolOptions: { plan: { work: 60, rest: 10, rounds: 2 } }, free: true },
              { prompt: '처음 보여 줬을 때와 바꾼 뒤에 맞힌 모둠 친구 수를 적어요.', toolOptions: { fields: [{ label: '처음에 맞힌 친구', unit: '명' }, { label: '바꾼 뒤 맞힌 친구', unit: '명' }] }, target: { records: true }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"한 곳을 바꾸었더니 무엇이 달라졌나요?" 맞힌 친구 수가 늘어난 학생, 늘지 않았지만 바꾸어 본 학생을 함께 칭찬한다. 다음 시간에는 모둠이 짧은 이야기를 몸으로 나타낼 준비를 한다고 예고하고 출구 질문을 푼다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '바꿀 곳', slots: [{ id: 'e1', label: '토끼인지 캥거루인지 헷갈렸어요' }, { id: 'e2', label: '소리가 작아 천둥 같지 않았어요' }], cards: ['두 손을 머리 위에 귀처럼 세워요', '발을 더 세게 쿵 굴러요'] }, prompt: '친구들이 헷갈린 까닭마다 바꿀 곳 카드를 이어 보세요.', target: { match: { e1: '두 손을 머리 위에 귀처럼 세워요', e2: '발을 더 세게 쿵 굴러요' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '바꾸어 보았는데도 친구들이 못 맞혔어요. 어떻게 할까요?', options: ['다른 곳을 하나 더 바꾸어 다시 해요', '이제 그만해요', '친구 탓을 해요'], answer: 0, difficulty: 0.1, explain: '한 곳씩 바꾸어 보면 무엇이 잘 보이는지 알게 돼요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '한 곳만 바꾸어 다시',
      items: [
        { type: 'table', prompt: '내 표현을 바꾼 것을 쓰세요.', columns: ['나타낸 것', '친구가 헷갈린 까닭', '바꾼 곳'], rows: 1 },
        { type: 'table', prompt: '맞힌 친구 수를 쓰세요.', columns: ['처음', '바꾼 뒤'], rows: 1 },
        { type: 'choice', prompt: '더 잘 보이게 하는 방법에 ○ 하세요.', options: ['얼굴 표정을 더해요', '등을 돌리고 해요', '아주 작게 해요'], answer: '얼굴 표정을 더해요' },
        { type: 'short', prompt: '한 곳을 바꾸고 나서 달라진 점을 쓰세요.' },
      ],
      easy: {
        note: '바꿀 곳은 하나만!',
        items: [
          { type: 'choice', prompt: '너무 작아서 안 보였어요. 무엇을 바꿀까요?', options: ['크게 움직여요', '더 작게 움직여요'], answer: '크게 움직여요' },
          { type: 'short', prompt: '내가 바꾼 곳을 쓰세요.' },
          { type: 'draw', prompt: '바꾼 뒤의 내 표현을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '타이머는 연습 시간과 횟수만 맞추어요. 카드를 맞게 놓으면 초록 테두리가 생겨요.',
      base: '헷갈린 까닭과 바꿀 곳을 잇고, 연습한 뒤 맞힌 친구 수를 견주어요.',
      challenge: '함정 카드가 섞여 있어요. 바꾼 곳을 두 군데로 늘려 다시 보여 줘요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 한꺼번에 여러 곳을 바꾸다 원래 표현을 잃는다 → 하나만 바꾸게 한다. ② 맞힌 수가 안 늘면 실망한다 → 바꾸어 본 것 자체를 칭찬하고 다른 곳을 고르게 한다. ③ 친구들에게 정답을 미리 알려 준다 → 답은 다 보여 준 뒤에만 말한다.',
  }));

  lessons.push(L(23, {
    title: '모둠이 짧은 이야기를 몸으로 연습하기',
    objective: '짧은 이야기의 장면 차례를 세우고 맡을 역할의 움직임을 정한 뒤, 모둠이 타이머에 맞추어 연습할 수 있다.',
    illustration: ART('a small paper cloud floating, then blown by wind, raining down on a sleepy flower that opens wide, paper children in the background playing each role', '아기 구름의 여행', [
      { motif: 'cloud', x: 120, y: 74 }, { motif: 'flower', x: 380, y: 228 }, { motif: 'tree', x: 80, y: 214 }]),
    safety: [SPACE, FLOOR],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '선생님이 직접 지은 이야기 \'아기 구름의 여행\'을 들려준다. "아기 구름이 하늘에서 둥실둥실 떠다녔어요. 바람을 만나 휘익 빠르게 날아갔지요. 물방울을 잔뜩 머금어 무거워진 아기 구름은 비가 되어 내렸어요. 비를 맞은 꽃이 활짝 피었답니다." "이 이야기를 몸으로 나타내려면 누가 필요할까요?" 구름, 바람, 꽃 역할을 끌어낸다. 시연 단추로 첫 장면 카드가 놓이는 모습을 보여 준다.',
        student: '이야기를 듣고 몸으로 나타내고 싶은 역할을 골라 봐요.',
        demo: { tool: 'story', options: { cards: [{ id: 'float', text: '아기 구름이 둥실 떠요', motif: 'cloud' }, { id: 'flower', text: '꽃이 활짝 피어요', motif: 'flower' }], slots: ['처음', '끝'], shuffle: false }, sequence: [{ order: ['float', 'flower'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 장면 차례와 역할 움직임 정하기', minutes: 13, tool: 'story',
            teacher: '"이야기를 다시 떠올려 봐요. 무엇이 먼저 일어났지요?" 장면 차례를 세운 뒤 역할마다 움직임을 정한다. "구름은 빠를까요, 느릴까요? 바람은요?" 15~16차시에 배운 빠르기·높낮이를 떠올리게 한다. 모둠 안에서 역할을 나눌 때 한 사람이 두 역할을 해도 된다고 알려 준다.',
            task: '이야기의 장면 차례를 세우고, 역할마다 어울리는 움직임을 정해요.',
            levels: CARD_LV,
            items: [
              { prompt: '\'아기 구름의 여행\' 장면을 이야기 차례대로 놓아 보세요.', toolOptions: { cards: [{ id: 'float', text: '아기 구름이 둥실 떠요', motif: 'cloud' }, { id: 'wind', text: '바람에 휘익 날아가요', motif: 'leaf' }, { id: 'rain', text: '비가 되어 내려요', motif: 'cloud' }, { id: 'flower', text: '꽃이 활짝 피어요', motif: 'flower' }] },
                target: { order: ['float', 'wind', 'rain', 'flower'] }, difficulty: 0.05 },
              { prompt: '역할마다 어울리는 움직임 카드를 이어 보세요.', toolOptions: { mode: 'match', slots: [{ id: 'cloud', label: '구름 역할' }, { id: 'wind', label: '바람 역할' }, { id: 'flower', label: '꽃 역할' }], cards: ['두 팔을 둥글게 하고 천천히 떠다녀요', '두 팔을 휘저으며 빠르게 달려요', '웅크렸다가 팔을 펴며 활짝 피어나요'] },
                target: { match: { cloud: '두 팔을 둥글게 하고 천천히 떠다녀요', wind: '두 팔을 휘저으며 빠르게 달려요', flower: '웅크렸다가 팔을 펴며 활짝 피어나요' } }, difficulty: 0.1,
                levels: { challenge: { prompt: '해 역할까지 넣어 역할마다 어울리는 움직임 카드를 이어 보세요.', toolOptions: { slots: [{ id: 'cloud', label: '구름 역할' }, { id: 'wind', label: '바람 역할' }, { id: 'flower', label: '꽃 역할' }, { id: 'sun', label: '해 역할' }], cards: ['두 팔을 둥글게 하고 천천히 떠다녀요', '두 팔을 휘저으며 빠르게 달려요', '웅크렸다가 팔을 펴며 활짝 피어나요', '두 팔을 머리 위로 크게 벌리고 환하게 웃어요'] }, target: { match: { cloud: '두 팔을 둥글게 하고 천천히 떠다녀요', wind: '두 팔을 휘저으며 빠르게 달려요', flower: '웅크렸다가 팔을 펴며 활짝 피어나요', sun: '두 팔을 머리 위로 크게 벌리고 환하게 웃어요' } } } } },
              { prompt: '해설하는 친구의 말풍선 빈칸에 알맞은 카드를 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['무거워져', '가벼워져'], slots: [{ id: 'b1', who: '해설', motif: 'cloud', label: '물방울을 머금은 아기 구름이 ___ 비가 되어 내려요.' }] },
                target: { fill: { b1: '무거워져' } }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 모둠 연습하기 (표현)', minutes: 15, tool: 'timer',
            teacher: '"연습할 자리를 먼저 살펴요." 모둠마다 교실 네 귀퉁이나 강당에 자리를 정한다. 타이머 한 번(60초)에 이야기 전체를 한 번 해 보고, 쉬는 동안 모둠끼리 바꿀 곳 하나를 이야기한다. 발표는 다음 시간에 한다는 것을 알려 주고, 오늘은 연습에만 마음을 쓰게 한다.',
            task: '연습 자리를 살핀 뒤 타이머를 맞추고, 이야기 전체를 모둠이 함께 세 번 연습해요.',
            levels: TIMER_LV,
            items: [
              { prompt: '모둠 연습 자리를 살펴보고 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['모둠 친구와 두 팔 간격으로 설 수 있어요', '바닥에 가방이나 의자가 없어요', '다른 모둠과 부딪히지 않을 만큼 떨어졌어요'] }, target: { safety: true }, difficulty: 0.05 },
              { prompt: '모둠 연습: 60초 연습하고 30초 이야기 나누기를 3번 하도록 타이머를 맞추세요.', toolOptions: { plan: { work: 30, rest: 10, rounds: 1 } }, target: { plan: { work: 60, rest: 30, rounds: 3 } }, difficulty: 0.15,
                levels: { easy: { prompt: '모둠 연습: 60초 연습하기를 3번 하도록 타이머를 맞추세요. 쉬는 시간은 그대로 두어요.', target: { plan: { work: 60, rounds: 3 } } } } },
              { prompt: '타이머를 켜고 모둠이 함께 이야기 전체를 세 번 연습해 본 뒤 "다 했어요"를 누르세요.', toolOptions: { plan: { work: 60, rest: 30, rounds: 3 } }, free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"연습하면서 한 번 바꾼 곳이 있나요? 무엇을 바꾸었나요?" 모둠마다 한 가지씩 말하게 한다. 다음 시간 발표회에서 보는 모둠이 장면과 역할을 맞혀 볼 거라고 알려 주고 출구 질문을 푼다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { cards: [{ id: 'sprout', text: '싹이 쏙 올라와요', motif: 'flower' }, { id: 'seed', text: '씨앗이 땅속에서 자요', motif: 'leaf' }, { id: 'tree', text: '큰 나무가 돼요', motif: 'tree' }] }, prompt: '\'씨앗의 꿈\' 이야기를 차례대로 놓아 보세요. 씨앗이 자다가, 싹이 나고, 큰 나무가 돼요.', target: { order: ['seed', 'sprout', 'tree'] }, difficulty: 0.05 },
          { type: 'choice', prompt: '바람 역할을 맡았어요. 어떤 움직임이 어울릴까요?', options: ['팔을 휘저으며 빠르게 달려요', '바닥에 가만히 누워요', '웅크리고 꼼짝 안 해요'], answer: 0, difficulty: 0.05, explain: '바람은 빠르게 움직이니 몸도 빠르게 휘저어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '아기 구름의 여행 연습',
      items: [
        { type: 'figure', wide: true, prompt: '이야기 차례대로 카드 아래에 1, 2, 3, 4를 쓰세요.', tool: 'story', figures: [{ options: { cards: [{ id: 'rain', text: '비가 되어 내려요', motif: 'cloud' }, { id: 'float', text: '구름이 둥실 떠요', motif: 'cloud' }, { id: 'flower', text: '꽃이 피어요', motif: 'flower' }, { id: 'wind', text: '바람에 날아가요', motif: 'leaf' }] }, caption: '' }], answer: '둥실 1, 바람 2, 비 3, 꽃 4' },
        { type: 'table', prompt: '우리 모둠의 역할을 쓰세요.', columns: ['역할', '맡은 친구', '움직임'], cells: [['구름', '', ''], ['바람', '', ''], ['꽃', '', '']] },
        { type: 'short', prompt: '연습하면서 바꾼 곳을 쓰세요.' },
        { type: 'draw', prompt: '내가 맡은 역할을 하는 모습을 그리세요.' },
      ],
      easy: {
        note: '이야기를 손가락으로 하나씩 세며 떠올려요.',
        items: [
          { type: 'choice', prompt: '구름 역할의 움직임에 ○ 하세요.', options: ['천천히 떠다녀요', '쿵쿵 굴러요'], answer: '천천히 떠다녀요' },
          { type: 'short', prompt: '내가 맡은 역할을 쓰세요.' },
          { type: 'draw', prompt: '내 역할을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 맞게 놓으면 초록 테두리가 생겨요. 타이머는 연습 시간과 횟수만 맞추어요.',
      base: '장면 차례와 역할 움직임을 정하고 세 번 연습해요.',
      challenge: '해 역할까지 넣어 네 역할의 움직임을 정하고, 연습마다 바꿀 곳을 하나씩 정해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 역할 다툼이 생긴다 → 연습마다 역할을 바꾸어 해 보게 한다. ② 장면이 바뀌는 때를 놓친다 → 해설 친구가 장면마다 손뼉을 치게 한다. ③ 연습하다 공연처럼 큰 소리를 낸다 → 연습은 다른 모둠이 방해받지 않는 크기로 한다.',
  }));

  lessons.push(L(24, {
    title: '몸 표현 발표회 열고 서로 맞히기',
    objective: '모둠 발표회에서 연습한 이야기를 몸으로 보여 주고, 다른 모둠의 장면과 역할을 맞히며, 빠르기·크기·높낮이를 어떻게 썼는지 말할 수 있다.',
    illustration: ART('a cozy classroom stage made of paper where one group performs a cloud story while seated classmates watch and raise hands to guess', '우리 반 몸 표현 발표회', [
      { motif: 'star', x: 100, y: 70, s: 0.7 }, { motif: 'cloud', x: 330, y: 70 }, { motif: 'flower', x: 400, y: 230 }]),
    safety: [SPACE, FLOOR],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"오늘은 우리 반 몸 표현 발표회예요. 보는 모둠이 지켜야 할 약속은 무엇이었지요?" 21차시의 잘 보는 모습(끝까지 조용히, 근거 붙여 맞히기)을 함께 말한다. 발표 차례는 제비뽑기로 정하고, 모둠마다 무대에 오르기 전 1분 동안 마지막으로 맞추어 보게 한다. 시연 단추로 발표회 차례 카드가 놓이는 모습을 보여 준다.',
        student: '발표회에서 보는 사람이 지킬 약속을 떠올려 말해 봐요.',
        demo: { tool: 'timer', options: { cards: ['잘 보인 점 말해 주기', '안전 살피기'] }, sequence: [{ order: ['안전 살피기', '잘 보인 점 말해 주기'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 발표회 열기 (표현)', minutes: 18, tool: 'timer',
            teacher: '교실 앞을 무대로 비우고 한 모둠씩 1분 동안 보여 준다(여섯 모둠이면 보여 주기 6분, 맞히기·말해 주기 모둠마다 1분 30초 남짓). 보는 모둠은 다 본 뒤 손을 들어 장면과 역할을 근거와 함께 맞힌다. "잘 보인 점 한 가지, 바꾸면 더 좋을 곳 한 가지"로 말해 주게 한다. 시간이 모자라면 말해 주기는 모둠마다 한 사람만 한다.',
            task: '발표회 차례를 세우고 무대를 살핀 뒤, 모둠이 차례로 보여 주고 서로 맞혀요.',
            levels: TIMER_LV,
            items: [
              { prompt: '발표회를 여는 차례대로 카드를 놓아 보세요.', toolOptions: { cards: ['보는 모둠이 장면과 역할을 맞혀요', '무대 둘레를 살펴요', '잘 보인 점을 말해 줘요', '한 모둠이 1분 동안 보여 줘요'] },
                target: { order: ['무대 둘레를 살펴요', '한 모둠이 1분 동안 보여 줘요', '보는 모둠이 장면과 역할을 맞혀요', '잘 보인 점을 말해 줘요'] }, difficulty: 0.1,
                hints: ['보여 주기 전에 다치지 않게 먼저 살펴요. 맞히기와 말해 주기는 다 본 다음이에요.', '놓은 차례대로 떠올려 보세요. 보여 주기 전에 맞히는 자리가 있는지 살펴요.', '무대 살피기 → 보여 주기 → 맞히기 → 잘 보인 점 말하기 차례예요.'] },
              { prompt: '무대에 오르기 전에 둘레를 살펴보고 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['무대 바닥에 물건이 없어요', '보는 친구들과 한 걸음 떨어졌어요', '모둠 친구와 두 팔 간격이에요'] }, target: { safety: true }, difficulty: 0.05 },
              { prompt: '모둠 차례가 되면 1분 동안 이야기를 보여 주고, 다른 모둠의 표현을 끝까지 본 뒤 "다 했어요"를 누르세요.', toolOptions: { plan: { work: 60, rest: 30, rounds: 1 } }, free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 몸 표현에서 바꾼 것 돌아보기', minutes: 10, tool: 'mindmap',
            teacher: '"발표회에서 어느 모둠이 빠르기를 잘 바꾸었나요? 크기는요?" 본 것을 떠올려 짝을 짓게 한다. 13~24차시에 배운 것을 칠판에 묶는다: 나타낼 것 살피기, 움직이는 곳 찾기, 빠르기·크기·높낮이 바꾸기, 친구와 다르게, 맞히고 바꾸어 다시.',
            task: '움직임에서 바꿀 수 있는 것과 그 보기를 잇고, 몸 표현을 할 때의 좋은 마음가짐을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '바꿀 수 있는 것마다 알맞은 보기 카드를 이어 보세요.', toolOptions: { mode: 'match', topic: '움직임에서 바꿀 것', slots: [{ id: 's1', label: '빠르기' }, { id: 's2', label: '크기' }, { id: 's3', label: '높낮이' }], cards: ['치타는 빠르게, 달팽이는 느리게', '파도는 크게, 빗방울은 작게', '해는 높게, 두더지는 낮게'] },
                target: { match: { s1: '치타는 빠르게, 달팽이는 느리게', s2: '파도는 크게, 빗방울은 작게', s3: '해는 높게, 두더지는 낮게' } }, difficulty: 0.1,
                levels: { challenge: { prompt: '바꿀 수 있는 네 가지마다 알맞은 보기 카드를 이어 보세요.', toolOptions: { slots: [{ id: 's1', label: '빠르기' }, { id: 's2', label: '크기' }, { id: 's3', label: '높낮이' }, { id: 's4', label: '방향' }], cards: ['치타는 빠르게, 달팽이는 느리게', '파도는 크게, 빗방울은 작게', '해는 높게, 두더지는 낮게', '게는 옆으로, 엘리베이터는 위아래로'] }, target: { match: { s1: '치타는 빠르게, 달팽이는 느리게', s2: '파도는 크게, 빗방울은 작게', s3: '해는 높게, 두더지는 낮게', s4: '게는 옆으로, 엘리베이터는 위아래로' } } } } },
              { prompt: '몸 표현을 할 때 좋은 마음가짐만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '좋은 마음가짐', cards: ['친구와 달라도 괜찮아요', '못 맞히면 바꾸어 다시 해요', '똑같이 해야만 잘한 거예요', '못 맞히면 그만둬요'] },
                target: { pick: ['친구와 달라도 괜찮아요', '못 맞히면 바꾸어 다시 해요'] }, difficulty: 0.1 },
              { prompt: '발표회에서 본 모습을 잘 보는 모습과 고칠 모습으로 나누어 보세요.', toolOptions: { topic: '발표회에서', slots: ['잘 보는 모습', '고칠 모습'], cards: ['손을 들고 근거를 붙여 맞혀요', '무대 앞으로 뛰어나가요', '박수로 응원해요', '다른 모둠이 할 때 연습해요'] },
                target: { sort: { '잘 보는 모습': ['손을 들고 근거를 붙여 맞혀요', '박수로 응원해요'], '고칠 모습': ['무대 앞으로 뛰어나가요', '다른 모둠이 할 때 연습해요'] } }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"몸 표현 공부를 마치며, 내가 가장 잘한 것과 다음에 더 해 보고 싶은 것을 짝에게 말해 봐요." 두세 명이 반 전체에 말한다. 다음 시간부터는 우리나라를 알아보는 공부를 한다고 예고하고 출구 질문을 푼다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '움직임에서 바꿀 것', slots: [{ id: 'e1', label: '빠르기' }, { id: 'e2', label: '높낮이' }], cards: ['거북은 느리게, 토끼는 빠르게', '연은 높게, 애벌레는 낮게'] }, prompt: '바꿀 것마다 알맞은 보기를 이어 보세요.', target: { match: { e1: '거북은 느리게, 토끼는 빠르게', e2: '연은 높게, 애벌레는 낮게' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '다른 모둠이 우리 이야기를 다르게 맞혔어요. 어떻게 할까요?', options: ['어디가 헷갈렸는지 듣고 바꿀 곳을 정해요', '다시는 발표하지 않아요', '맞힌 모둠을 탓해요'], answer: 0, difficulty: 0.1, explain: '헷갈린 까닭을 들으면 더 잘 보이게 바꿀 곳을 찾을 수 있어요.' },
          { type: 'tool', tool: 'emotion', options: { mode: 'scale', steps: 3, situation: '오늘 발표회에서 모둠 친구와 함께 몸으로 이야기를 보여 주었어요.', feeling: '뿌듯함', ask: '내가 모둠에서 마음을 다한 만큼 얼마나 뿌듯한가요?' }, prompt: '발표회에서 모둠과 함께한 내 모습을 솔직하게 골라 보세요. 정답은 없어요.', target: { level: 'any' }, difficulty: 0.05 },
        ],
      },
    ],
    worksheet: {
      title: '몸 표현 발표회',
      items: [
        { type: 'table', prompt: '다른 모둠의 발표를 보고 쓰세요.', columns: ['모둠', '맞힌 장면·역할', '잘 보인 점'], rows: 3 },
        { type: 'check', prompt: '우리 모둠이 바꾸어 쓴 것에 모두 ✓ 하세요.', options: ['빠르기', '크기', '높낮이', '방향'] },
        { type: 'choice', prompt: '몸 표현을 할 때 좋은 마음가짐에 ○ 하세요.', options: ['친구와 달라도 괜찮아요', '똑같이 해야만 잘한 거예요', '못 맞히면 그만둬요'], answer: '친구와 달라도 괜찮아요' },
        { type: 'short', prompt: '다음에 몸으로 나타내 보고 싶은 것을 쓰세요.' },
      ],
      easy: {
        note: '본 것 하나, 잘 보인 점 하나!',
        items: [
          { type: 'short', prompt: '다른 모둠이 나타낸 것을 하나 쓰세요.' },
          { type: 'choice', prompt: '보는 사람의 좋은 모습에 ○ 하세요.', options: ['박수로 응원해요', '무대로 뛰어나가요'], answer: '박수로 응원해요' },
          { type: 'draw', prompt: '발표회에서 내 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 맞게 놓으면 초록 테두리가 생겨요. 다른 모둠 발표를 보고 하나만 맞혀도 돼요.',
      base: '발표회 차례를 세워 보여 주고 맞힌 뒤, 바꿀 것과 보기를 이어요.',
      challenge: '방향까지 네 가지를 잇고, 다른 모둠에게 바꾸면 좋을 곳까지 말해 줘요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 다른 모둠이 할 때 자기 모둠 연습을 한다 → 보는 것도 발표회의 반이라고 짚는다. ② 잘 보인 점 없이 고칠 점만 말한다 → 잘 보인 점을 먼저 말하게 한다. ③ 시간이 모자란다 → 보여 주기는 모둠마다 1분을 지키고, 말해 주기는 모둠마다 한 사람만 한다.',
  }));

  // ───────────────────────── 25~28차시: 우리나라를 나타내는 것과 그 뜻(우리나라 이해) ─────────────────────────

  lessons.push(L(25, {
    title: '우리나라를 나타내는 것 찾아 모으기',
    objective: '태극기·무궁화·한글이 우리나라를 나타낸다는 것을 알고, 각각이 무엇인지 짝지어 말할 수 있다.',
    illustration: ART('a paper Korean flag, a pink mugunghwa flower and paper Hangul letter tiles arranged on a classroom table, children pointing at them happily', '우리나라를 나타내는 것', [
      { motif: 'flower', x: 90, y: 228 }, { motif: 'star', x: 380, y: 70, s: 0.6 }, { motif: 'tree', x: 410, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '운동회나 경기 중계 사진에서 선수들이 태극기를 흔드는 장면을 보여 준다. "왜 태극기를 흔들까요?" "우리나라 선수라는 것을 알리려고요" 같은 대답을 끌어낸다. "이렇게 우리나라를 나타내는 것이 또 있어요. 오늘 함께 찾아봐요." 시연 단추로 \'태극기\' 카드가 \'우리나라 국기\' 칸에 이어지는 모습을 보여 준다.',
        student: '선수들은 왜 태극기를 흔들까요? 생각을 말해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '우리나라를 나타내는 것', slots: [{ id: 's1', label: '우리나라 국기' }], cards: ['태극기', '무궁화'], shuffle: false }, sequence: [{ match: { s1: '태극기' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 우리나라를 나타내는 것 짝짓기', minutes: 13, tool: 'mindmap',
            teacher: '태극기, 무궁화 사진, 한글 자음·모음 카드를 칠판에 붙인다. "이것은 우리나라의 무엇일까요?" 국기·꽃·글자라는 말을 끌어낸 뒤 카드로 이어 보게 한다. 무궁화를 처음 보는 학생이 많으면 학교 화단이나 사진으로 꽃잎 다섯 장과 가운데 붉은 무늬를 함께 살핀다.',
            task: '우리나라를 나타내는 것과 그 이름을 잇고, 우리나라를 나타내는 것만 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '우리나라를 나타내는 것마다 알맞은 카드를 이어 보세요.', toolOptions: { mode: 'match', topic: '우리나라를 나타내는 것', slots: [{ id: 's1', label: '우리나라 국기' }, { id: 's2', label: '우리나라 꽃' }, { id: 's3', label: '우리나라 글자' }], cards: ['태극기', '무궁화', '한글'] },
                target: { match: { s1: '태극기', s2: '무궁화', s3: '한글' } }, difficulty: 0.05,
                levels: { challenge: { toolOptions: { cards: ['태극기', '무궁화', '한글', '해바라기'] } } } },
              { prompt: '우리나라를 나타내는 것만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '우리나라를 나타내는 것', cards: ['태극기', '무궁화', '한글', '장미', '알파벳'] },
                target: { pick: ['태극기', '무궁화', '한글'] }, difficulty: 0.1,
                predict: { q: '장미도 우리나라를 나타내는 꽃일까요?', options: ['나타내요', '나타내지 않아요'], answer: 1 },
                conclude: '우리나라를 나타내는 꽃은 무궁화예요.' },
              { prompt: '서아가 본 것을 우리나라를 나타내는 것과 아닌 것으로 나누어 보세요.', toolOptions: { topic: '서아가 본 것', slots: ['우리나라를 나타내요', '아니에요'], cards: ['교문에 걸린 태극기', '책에 쓰인 한글', '놀이터 미끄럼틀', '교실 시계'] },
                target: { sort: { '우리나라를 나타내요': ['교문에 걸린 태극기', '책에 쓰인 한글'], '아니에요': ['놀이터 미끄럼틀', '교실 시계'] } }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 색종이로 무궁화 꾸미기 (표현)', minutes: 15, tool: 'collage',
            teacher: '"무궁화 꽃잎은 몇 장이었지요? 다섯 장이에요. 가운데는 붉은 무늬가 있어요." 분홍 하트 꽃잎 다섯 장을 동그랗게 둘러 붙이고 가운데에 빨강 동그라미를 붙이게 한다. 다 꾸민 학생은 줄기와 잎을 더해도 된다고 알려 준다.',
            task: '무궁화 꽃잎 다섯 장과 가운데 무늬를 색종이 판에 꾸며요.',
            levels: { easy: { shapes: ['heart', 'circle', 'leaf', 'rect'], colors: ['분홍', '빨강', '초록', '갈색'] }, base: {}, challenge: {} },
            items: [
              { prompt: '무궁화를 꾸며요. 분홍 하트 꽃잎 다섯 장과 가운데 빨강 동그라미 한 개를 붙여 보세요.', target: { has: [{ shape: 'heart', color: '분홍', n: 5 }, { shape: 'circle', color: '빨강', n: 1 }] }, difficulty: 0.1,
                levels: { challenge: { prompt: '줄기와 잎이 있는 무궁화를 꾸며요. 분홍 하트 꽃잎 다섯 장, 빨강 동그라미 한 개, 갈색 긴 네모 줄기 한 개, 초록 나뭇잎 두 장을 붙여 보세요.', target: { has: [{ shape: 'heart', color: '분홍', n: 5 }, { shape: 'circle', color: '빨강', n: 1 }, { shape: 'rect', color: '갈색', n: 1 }, { shape: 'leaf', color: '초록', n: 2 }] } } } },
              { prompt: '무궁화 두 송이를 꾸며요. 분홍 하트 꽃잎 열 장과 빨강 동그라미 두 개를 붙여 보세요.', target: { has: [{ shape: 'heart', color: '분홍', n: 10 }, { shape: 'circle', color: '빨강', n: 2 }] }, difficulty: 0.15 },
              { prompt: '꾸민 무궁화를 살펴보고 해낸 것을 하나씩 표시해요.', target: { selfCheck: ['꽃잎을 다섯 장 붙였어요', '가운데에 붉은 무늬를 붙였어요', '짝에게 무궁화가 우리나라 꽃이라고 말했어요'], minPieces: 3 }, difficulty: 0.05 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"오늘 찾은 우리나라를 나타내는 것은 무엇이었나요?" 칠판의 세 가지를 함께 읽는다. 학교나 집 둘레에서 이것들을 본 곳을 한 가지씩 떠올려 오게 하고 출구 질문을 푼다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', basket: '우리나라를 나타내요', cards: ['무궁화', '튤립', '한글'] }, prompt: '카드 가운데 우리나라를 나타내는 것만 골라 보세요.', target: { pick: ['무궁화', '한글'] }, difficulty: 0.05 },
          { type: 'choice', prompt: '우리나라의 국기는 무엇일까요?', options: ['태극기', '무궁화', '한글'], answer: 0, difficulty: 0.05, explain: '태극기는 우리나라를 나타내는 국기예요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '우리나라를 나타내는 것',
      items: [
        { type: 'table', prompt: '빈칸에 알맞은 말을 쓰세요.', columns: ['우리나라 국기', '우리나라 꽃', '우리나라 글자'], rows: 1, answer: '태극기, 무궁화, 한글' },
        { type: 'check', prompt: '우리나라를 나타내는 것에 모두 ✓ 하세요.', options: ['태극기', '장미', '한글', '무궁화'], answer: ['태극기', '한글', '무궁화'] },
        { type: 'short', prompt: '학교나 집 둘레에서 태극기·무궁화·한글을 본 곳을 쓰세요.' },
        { type: 'draw', prompt: '무궁화를 그리세요.' },
      ],
      easy: {
        note: '국기·꽃·글자, 세 가지를 떠올려요.',
        items: [
          { type: 'choice', prompt: '우리나라 꽃에 ○ 하세요.', options: ['무궁화', '장미'], answer: '무궁화' },
          { type: 'choice', prompt: '우리나라 글자에 ○ 하세요.', options: ['한글', '알파벳'], answer: '한글' },
          { type: 'draw', prompt: '태극기를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 맞게 놓으면 초록 테두리가 생겨요. 색종이 판에는 쓸 모양과 색만 나와요.',
      base: '세 가지를 이름과 잇고, 무궁화를 꾸며요.',
      challenge: '함정 카드가 섞여 있어요. 무궁화에 줄기와 잎까지 꾸며요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 무궁화를 본 적이 없어 장미·벚꽃과 헷갈린다 → 사진으로 꽃잎 다섯 장과 가운데 붉은 무늬를 살핀다. ② 한글을 \'한국어\'와 같은 말로 쓴다 → 한글은 글자, 한국어는 말이라고 짚는다(2학년에게는 \'글자\'로만 묶어도 된다). ③ 다문화 학생이 소외감을 느끼지 않도록 집안의 다른 나라 상징도 소중하다는 것을 함께 말한다.',
  }));

  lessons.push(L(26, {
    title: '태극기와 무궁화에 담긴 뜻 알아보기',
    objective: '태극기의 흰 바탕·태극 문양·네 괘와 무궁화에 담긴 뜻을 알고, 알맞은 뜻과 이어 말할 수 있다.',
    illustration: ART('a large paper Korean flag with white background, red and blue taegeuk circle and four black trigrams, beside blooming pink mugunghwa flowers opening one after another', '태극기와 무궁화의 뜻', [
      { motif: 'flower', x: 90, y: 228 }, { motif: 'flower', x: 380, y: 228 }, { motif: 'star', x: 330, y: 70, s: 0.6 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '큰 태극기를 칠판에 걸고 "태극기에는 무슨 색이 있나요?" 흰색·빨강·파랑·검정을 함께 찾는다. "태극기의 색과 모양에는 저마다 뜻이 담겨 있어요." 시연 단추로 \'흰 바탕\'이 \'밝음과 평화를 사랑하는 마음\'과 이어지는 모습을 보여 준다.',
        student: '태극기에서 찾을 수 있는 색을 모두 말해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '태극기의 뜻', slots: [{ id: 's1', label: '흰 바탕' }], cards: ['밝음과 평화를 사랑하는 마음', '하늘·땅·물·불'], shuffle: false }, sequence: [{ match: { s1: '밝음과 평화를 사랑하는 마음' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 태극기의 모양과 뜻 잇기', minutes: 14, tool: 'mindmap',
            teacher: '태극기의 부분을 하나씩 손으로 가리키며 뜻을 들려준다. "흰 바탕은 밝음과 평화를 사랑하는 마음, 가운데 태극 문양은 빨강과 파랑이 서로 어울리는 모습, 네 모서리의 검은 괘는 하늘·땅·물·불을 나타내요." 뜻을 외우게 하기보다 "어울려요", "평화" 같은 말을 붙잡게 한다.',
            task: '태극기의 부분과 뜻을 잇고, 태극 문양의 색을 알맞은 자리에 넣어요.',
            levels: CARD_LV,
            items: [
              { prompt: '태극기의 부분마다 담긴 뜻 카드를 이어 보세요.', toolOptions: { mode: 'match', topic: '태극기의 뜻', slots: [{ id: 's1', label: '흰 바탕' }, { id: 's2', label: '가운데 태극 문양' }, { id: 's3', label: '네 모서리의 검은 괘' }], cards: ['밝음과 평화를 사랑하는 마음', '빨강과 파랑이 서로 어울리는 모습', '하늘·땅·물·불'] },
                target: { match: { s1: '밝음과 평화를 사랑하는 마음', s2: '빨강과 파랑이 서로 어울리는 모습', s3: '하늘·땅·물·불' } }, difficulty: 0.15 },
              { prompt: '해설 말풍선 빈칸에 알맞은 색 카드를 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['빨강', '파랑', '초록'], slots: [{ id: 'b1', label: '태극 문양의 위쪽은 ___이에요.' }, { id: 'b2', label: '태극 문양의 아래쪽은 ___이에요.' }] },
                target: { fill: { b1: '빨강', b2: '파랑' } }, difficulty: 0.1,
                predict: { q: '태극 문양의 위쪽은 무슨 색일까요?', options: ['빨강', '파랑'], answer: 0 },
                conclude: '태극 문양은 위가 빨강, 아래가 파랑이에요.' },
              { prompt: '태극기에 있는 것과 없는 것으로 나누어 보세요.', toolOptions: { topic: '태극기', slots: ['태극기에 있어요', '태극기에 없어요'], cards: ['흰 바탕', '검은 괘 네 개', '노란 별', '초록 줄무늬'] },
                target: { sort: { '태극기에 있어요': ['흰 바탕', '검은 괘 네 개'], '태극기에 없어요': ['노란 별', '초록 줄무늬'] } }, difficulty: 0.05 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 무궁화 이야기 차례 세우기', minutes: 14, tool: 'story',
            teacher: '"무궁화는 \'다함이 없이 피는 꽃\'이라는 뜻이에요. 여름부터 가을까지 날마다 새 꽃이 피고 지고 또 피어요." 이야기 카드를 차례대로 놓은 뒤 "날마다 또 피어나는 모습이 우리에게 무엇을 알려 줄까요?"라고 묻고 \'포기하지 않는 마음\'을 끌어낸다.',
            task: '무궁화가 피고 지는 이야기를 차례대로 놓고, 무궁화에 담긴 뜻을 넣어요.',
            levels: CARD_LV,
            items: [
              { prompt: '무궁화가 피고 지는 모습을 차례대로 놓아 보세요.', toolOptions: { cards: [{ id: 'new', text: '다음 날 새 꽃이 또 피어요', motif: 'flower' }, { id: 'bud', text: '아침에 꽃봉오리가 열려요', motif: 'leaf' }, { id: 'close', text: '저녁에 꽃이 오므라져요', motif: 'leaf' }, { id: 'open', text: '낮에 꽃이 활짝 피어요', motif: 'flower' }] },
                target: { order: ['bud', 'open', 'close', 'new'] }, difficulty: 0.1 },
              { prompt: '해설 말풍선 빈칸에 무궁화에 담긴 뜻을 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['포기하지 않는', '쉽게 그만두는'], slots: [{ id: 'b1', who: '해설', motif: 'flower', label: '날마다 또 피는 무궁화는 ___ 마음을 닮았어요.' }] },
                target: { fill: { b1: '포기하지 않는' } }, difficulty: 0.1 },
              { prompt: '무궁화의 모습과 그 뜻을 이어 보세요.', toolOptions: { mode: 'match', slots: [{ id: 's1', label: '여름부터 가을까지 피어요' }, { id: 's2', label: '\'무궁화\'라는 이름' }], cards: ['오래오래 꽃을 볼 수 있어요', '다함이 없이 피는 꽃'] },
                target: { match: { s1: '오래오래 꽃을 볼 수 있어요', s2: '다함이 없이 피는 꽃' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['오래오래 꽃을 볼 수 있어요', '다함이 없이 피는 꽃', '하루만 피고 끝나요'] } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"태극기에서 가장 기억에 남는 뜻은 무엇이에요?" 짝과 말한 뒤 두세 명이 발표한다. 다음 시간에는 우리나라의 다른 자랑거리를 찾아본다고 예고하고 출구 질문을 푼다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'fill', cards: ['파랑', '빨강'], slots: [{ id: 'e1', label: '태극 문양에서 빨강 아래에 있는 색은 ___이에요.' }] }, prompt: '빈칸에 알맞은 색 카드를 넣어 보세요.', target: { fill: { e1: '파랑' } }, difficulty: 0.05 },
          { type: 'choice', prompt: '태극기의 흰 바탕에 담긴 뜻은 무엇일까요?', options: ['밝음과 평화를 사랑하는 마음', '하늘·땅·물·불', '빨강과 파랑이 어울리는 모습'], answer: 0, difficulty: 0.15, explain: '흰 바탕은 밝음과 평화를 사랑하는 마음을 나타내요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '태극기와 무궁화의 뜻',
      items: [
        { type: 'table', prompt: '태극기의 부분과 뜻을 쓰세요.', columns: ['부분', '뜻'], cells: [['흰 바탕', ''], ['태극 문양', ''], ['네 괘', '']], answer: '밝음과 평화 / 빨강과 파랑이 어울림 / 하늘·땅·물·불' },
        { type: 'choice', prompt: '태극 문양의 위쪽 색에 ○ 하세요.', options: ['빨강', '파랑'], answer: '빨강' },
        { type: 'short', prompt: '날마다 또 피는 무궁화를 보고 배우고 싶은 마음을 쓰세요.' },
        { type: 'draw', prompt: '태극 문양을 색칠하세요.' },
      ],
      easy: {
        note: '위는 빨강, 아래는 파랑!',
        items: [
          { type: 'choice', prompt: '태극 문양의 아래쪽 색에 ○ 하세요.', options: ['파랑', '노랑'], answer: '파랑' },
          { type: 'choice', prompt: '태극기의 바탕색에 ○ 하세요.', options: ['흰색', '검정'], answer: '흰색' },
          { type: 'draw', prompt: '무궁화가 피어 있는 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 맞게 놓으면 초록 테두리가 생겨요. 뜻은 \'평화\', \'어울려요\' 같은 한 낱말로 기억해요.',
      base: '태극기의 세 부분과 뜻을 잇고, 무궁화 이야기를 차례대로 놓아요.',
      challenge: '함정 카드가 섞여 있어요. 무궁화의 뜻을 내 말로 짝에게 설명해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 태극 문양의 빨강·파랑 위치를 바꾼다 → "해는 위에, 바다는 아래에"처럼 떠올리게 한다. ② 괘의 이름(건·곤·감·리)까지 외우려 한다 → 2학년에서는 \'하늘·땅·물·불\'만 알아도 된다. ③ 뜻을 외우는 데만 마음을 쓴다 → 태극기를 소중히 다루는 마음으로 이어 준다.',
  }));

  lessons.push(L(27, {
    title: '우리나라 자랑거리를 친구에게 소개하기',
    objective: '한복·김치·태권도·한글 같은 우리나라 자랑거리를 알고, 한 가지를 골라 어떤 것인지 친구에게 소개할 수 있다.',
    illustration: ART('paper children in hanbok, a small bowl of kimchi, a child doing a taekwondo kick and Hangul tiles, all on a cozy paper stage', '우리나라 자랑거리', [
      { motif: 'flower', x: 90, y: 228 }, { motif: 'star', x: 380, y: 70, s: 0.6 }, { motif: 'tree', x: 410, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '명절에 한복을 입은 아이 사진, 김치 사진, 태권도 시범 사진을 차례로 보여 준다. "이것들은 모두 무엇일까요? 다른 나라 친구에게 자랑하고 싶은 우리나라 것이에요." 시연 단추로 \'한복\' 카드가 \'명절에 입는 우리 옷\'과 이어지는 모습을 보여 준다.',
        student: '사진 속에서 본 적 있는 것을 말해 봐요. 어디서 봤나요?',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '우리나라 자랑거리', slots: [{ id: 's1', label: '명절에 입는 우리 옷' }], cards: ['한복', '김치'], shuffle: false }, sequence: [{ match: { s1: '한복' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 자랑거리와 설명 잇기', minutes: 13, tool: 'mindmap',
            teacher: '"한복은 언제 입나요? 김치는 무엇으로 만들까요?" 학생 경험을 먼저 듣고 카드를 잇게 한다. 김치를 못 먹는 학생, 한복이 없는 학생도 있으니 "먹어 봤나요, 입어 봤나요"를 묻지 않고 "본 적 있나요"로 묻는다.',
            task: '우리나라 자랑거리와 알맞은 설명을 잇고, 소개하는 말의 빈칸을 채워요.',
            levels: CARD_LV,
            items: [
              { prompt: '자랑거리마다 알맞은 설명 카드를 이어 보세요.', toolOptions: { mode: 'match', topic: '우리나라 자랑거리', slots: [{ id: 's1', label: '한복' }, { id: 's2', label: '김치' }, { id: 's3', label: '태권도' }], cards: ['명절에 입는 우리 옷', '배추로 담그는 우리 음식', '우리나라에서 시작된 무술'] },
                target: { match: { s1: '명절에 입는 우리 옷', s2: '배추로 담그는 우리 음식', s3: '우리나라에서 시작된 무술' } }, difficulty: 0.1,
                levels: { challenge: { prompt: '자랑거리 네 가지마다 알맞은 설명 카드를 이어 보세요.', toolOptions: { slots: [{ id: 's1', label: '한복' }, { id: 's2', label: '김치' }, { id: 's3', label: '태권도' }, { id: 's4', label: '한글' }], cards: ['명절에 입는 우리 옷', '배추로 담그는 우리 음식', '우리나라에서 시작된 무술', '세종대왕이 만든 글자'] }, target: { match: { s1: '명절에 입는 우리 옷', s2: '배추로 담그는 우리 음식', s3: '우리나라에서 시작된 무술', s4: '세종대왕이 만든 글자' } } } } },
              { prompt: '준호가 태권도를 소개하는 말의 빈칸에 알맞은 카드를 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['우리나라', '다른 나라', '발차기'], slots: [{ id: 'b1', label: '태권도는 ___에서 시작된 무술이에요.' }, { id: 'b2', label: '태권도에는 멋진 ___가 있어요.' }] },
                target: { fill: { b1: '우리나라', b2: '발차기' } }, difficulty: 0.15 },
              { prompt: '친구에게 자랑거리를 소개할 때 알맞은 말만 골라 보세요.', toolOptions: { mode: 'pick', basket: '소개하는 말', cards: ['"한복은 색이 고운 우리 옷이야"', '"김치는 배추로 담가"', '"우리나라 것만 좋고 너희 것은 별로야"', '"몰라, 그냥 좋아"'] },
                target: { pick: ['"한복은 색이 고운 우리 옷이야"', '"김치는 배추로 담가"'] }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 다른 나라 것도 소중히 여기기', minutes: 15, tool: 'emotion',
            teacher: '"우리나라 자랑거리가 있듯 다른 나라에도 자랑거리가 있어요." 장면을 함께 읽고 고른 까닭을 묻는다. 우리 반에 다른 나라와 이어진 친구가 있다면 그 친구가 원할 때만 자기 나라 자랑거리를 소개하게 한다. 짝 활동에서는 고른 자랑거리 하나를 "이것은 ○○이에요. ○○해요." 두 문장으로 소개한다.',
            task: '다른 나라 것을 대하는 알맞은 모습을 고르고, 짝에게 우리나라 자랑거리 하나를 소개해요.',
            levels: CARD_LV,
            items: [
              { prompt: '서아가 "우리나라 것이 최고야. 다른 나라 옷은 이상해"라고 말했어요. 하준이는 어떻게 말하면 좋을까요?', toolOptions: { mode: 'branch', who: '하준', situation: '서아가 다른 나라 옷 사진을 보며 "이상해"라고 말했어요.', choices: [
                { id: 'respect', text: '"그 나라 사람들에게는 소중한 옷이야. 우리 한복처럼"', result: '서아가 "그렇구나, 다시 봐야겠다" 하고 사진을 다시 봐요.', mood: '뿌듯함' },
                { id: 'agree', text: '"맞아, 정말 이상해" 하고 같이 웃어요', result: '다른 나라 친구가 들으면 속상할 수 있어요.', mood: '미안함', why: '다른 나라 것도 그 나라 사람들에게는 소중해요.' },
                { id: 'ignore', text: '아무 말 없이 지나가요', result: '서아는 다른 나라 옷이 왜 소중한지 알 기회가 없어요.', mood: '아쉬움', why: '다른 나라 것도 소중하다고 말해 줄 수 있어요.' }] }, target: { choice: 'respect' }, difficulty: 0.1 },
              { prompt: '자랑거리 하나를 골라 짝에게 두 문장으로 소개하고, 짝의 소개도 끝까지 들은 뒤 "다 했어요"를 누르세요.', toolOptions: { cards: ['뿌듯함', '신남'], slots: [{ id: 's1', label: '짝에게 소개했어요' }] }, free: true },
              { prompt: '다른 나라 것을 대하는 모습 가운데 알맞은 모습만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', weather: false, basket: '알맞은 모습', cards: ['궁금한 것을 물어봐요', '그 나라 사람들에게 소중하다고 생각해요', '이상하다고 놀려요', '우리나라 것보다 못하다고 해요'] },
                target: { pick: ['궁금한 것을 물어봐요', '그 나라 사람들에게 소중하다고 생각해요'] }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"짝이 소개한 자랑거리 가운데 새로 안 것이 있나요?" 두세 명이 말한다. 우리나라 것을 아끼는 것과 다른 나라 것을 깔보는 것은 다르다는 것을 짚고 출구 질문을 푼다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '우리나라 자랑거리', slots: [{ id: 'e1', label: '김치' }, { id: 'e2', label: '한복' }], cards: ['배추로 담그는 우리 음식', '명절에 입는 우리 옷'] }, prompt: '자랑거리와 설명을 이어 보세요.', target: { match: { e1: '배추로 담그는 우리 음식', e2: '명절에 입는 우리 옷' } }, difficulty: 0.05 },
          { type: 'choice', prompt: '다른 나라 음식을 처음 보았을 때 알맞은 말은 무엇일까요?', options: ['"어떤 맛일까? 궁금해"', '"이상해, 안 먹을래"', '"우리나라 음식만 맛있어"'], answer: 0, difficulty: 0.1, explain: '다른 나라 것도 궁금한 마음으로 알아보면 좋아요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '우리나라 자랑거리',
      items: [
        { type: 'table', prompt: '자랑거리와 설명을 쓰세요.', columns: ['자랑거리', '어떤 것인가요?'], cells: [['한복', ''], ['김치', ''], ['태권도', '']] },
        { type: 'short', prompt: '친구에게 소개하고 싶은 우리나라 자랑거리 하나를 두 문장으로 쓰세요.' },
        { type: 'choice', prompt: '다른 나라 것을 대하는 알맞은 모습에 ○ 하세요.', options: ['궁금한 것을 물어봐요', '이상하다고 놀려요'], answer: '궁금한 것을 물어봐요' },
        { type: 'draw', prompt: '소개하고 싶은 자랑거리를 그리세요.' },
      ],
      easy: {
        note: '"이것은 ○○이에요." 한 문장이면 충분해요.',
        items: [
          { type: 'choice', prompt: '명절에 입는 우리 옷에 ○ 하세요.', options: ['한복', '수영복'], answer: '한복' },
          { type: 'short', prompt: '"이것은 ○○이에요." 한 문장으로 쓰세요.' },
          { type: 'draw', prompt: '좋아하는 우리나라 자랑거리를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 맞게 놓으면 초록 테두리가 생겨요. 소개는 "이것은 ○○이에요" 한 문장으로 해요.',
      base: '자랑거리와 설명을 잇고, 두 문장으로 짝에게 소개해요.',
      challenge: '한글까지 네 가지를 잇고, 다른 나라 자랑거리 하나도 찾아 함께 소개해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① \'우리나라 것이 늘 더 낫다\'고 생각한다 → 나라마다 소중한 것이 있다고 짚는다. ② 소개를 이름만 말하고 끝낸다 → "어떤 것인지 한 가지 더"를 묻는다. ③ 집에 한복이 없거나 김치를 못 먹는 학생 → 겪어 본 것을 묻지 않고 아는 것을 묻는다.',
  }));

  lessons.push(L(28, {
    title: '우리나라를 아끼는 마음 행동으로 나타내기',
    objective: '우리나라를 나타내는 것을 소중히 다루는 행동과 그렇지 않은 행동을 가려내고, 내가 할 수 있는 행동 하나를 정할 수 있다.',
    illustration: ART('a paper child gently picking up a fallen small Korean flag and brushing off dust, another child neatly writing Hangul in a notebook', '우리나라를 아끼는 마음', [
      { motif: 'flower', x: 90, y: 228 }, { motif: 'star', x: 380, y: 70, s: 0.6 }, { motif: 'tree', x: 410, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '바닥에 떨어진 작은 태극기 사진을 보여 준다. "이 태극기를 보면 어떤 마음이 드나요? 어떻게 하면 좋을까요?" "주워서 털어요" 같은 대답을 끌어낸다. "우리나라를 아끼는 마음은 이렇게 작은 행동으로 나타낼 수 있어요." 시연 단추로 \'떨어진 태극기를 주워요\' 카드가 \'아끼는 행동\' 칸에 놓이는 모습을 보여 준다.',
        student: '바닥에 떨어진 태극기를 보면 어떻게 하고 싶나요?',
        demo: { tool: 'mindmap', options: { topic: '우리나라를 아끼는 마음', slots: ['아끼는 행동', '고칠 행동'], cards: ['떨어진 태극기를 주워요'], shuffle: false }, sequence: [{ sort: { '아끼는 행동': ['떨어진 태극기를 주워요'], '고칠 행동': [] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 아끼는 행동과 고칠 행동 가르기', minutes: 13, tool: 'mindmap',
            teacher: '"우리나라를 나타내는 것을 어떻게 대하면 아끼는 걸까요?" 카드를 나눈 뒤 "고칠 행동은 어떻게 바꾸면 좋을까요?"를 묻는다. 한글을 아끼는 행동(바른 글씨, 고운 말)도 함께 짚는다.',
            task: '우리나라를 나타내는 것을 대하는 행동을 아끼는 행동과 고칠 행동으로 나누고, 고칠 행동을 바꾸어 봐요.',
            levels: CARD_LV,
            items: [
              { prompt: '행동 카드를 아끼는 행동과 고칠 행동으로 나누어 보세요.', toolOptions: { topic: '우리나라를 아끼는 마음', slots: ['아끼는 행동', '고칠 행동'], cards: ['태극기를 접어서 보관해요', '한글을 바르게 써요', '태극기로 바닥을 닦아요', '무궁화 꽃을 마구 꺾어요'] },
                target: { sort: { '아끼는 행동': ['태극기를 접어서 보관해요', '한글을 바르게 써요'], '고칠 행동': ['태극기로 바닥을 닦아요', '무궁화 꽃을 마구 꺾어요'] } }, difficulty: 0.05,
                levels: { challenge: { prompt: '여섯 장의 행동 카드를 아끼는 행동과 고칠 행동으로 나누어 보세요.', toolOptions: { cards: ['태극기를 접어서 보관해요', '한글을 바르게 써요', '태극기로 바닥을 닦아요', '무궁화 꽃을 마구 꺾어요', '고운 우리말을 써요', '태극기에 낙서해요'] }, target: { sort: { '아끼는 행동': ['태극기를 접어서 보관해요', '한글을 바르게 써요', '고운 우리말을 써요'], '고칠 행동': ['태극기로 바닥을 닦아요', '무궁화 꽃을 마구 꺾어요', '태극기에 낙서해요'] } } } } },
              { prompt: '고칠 행동마다 바꾼 행동 카드를 이어 보세요.', toolOptions: { mode: 'match', topic: '이렇게 바꿔요', slots: [{ id: 's1', label: '태극기에 낙서해요' }, { id: 's2', label: '무궁화 꽃을 마구 꺾어요' }], cards: ['태극기를 깨끗하게 두어요', '무궁화를 눈으로만 보아요'] },
                target: { match: { s1: '태극기를 깨끗하게 두어요', s2: '무궁화를 눈으로만 보아요' } }, difficulty: 0.1 },
              { prompt: '한글을 아끼는 행동만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '한글을 아끼는 행동', cards: ['글자를 또박또박 써요', '고운 말을 써요', '낙서로 벽을 채워요', '친구 이름을 놀리며 바꿔 불러요'] },
                target: { pick: ['글자를 또박또박 써요', '고운 말을 써요'] }, difficulty: 0.1,
                predict: { q: '고운 말을 쓰는 것도 한글을 아끼는 것일까요?', options: ['그래요', '아니에요'], answer: 0 },
                conclude: '바르게 쓰고 고운 말을 쓰면 우리 글과 말을 아낄 수 있어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 내가 할 수 있는 행동 정하기', minutes: 15, tool: 'emotion',
            teacher: '장면을 읽고 알맞은 행동을 고른 뒤, "이번 주에 내가 해 볼 행동 하나"를 정해 짝에게 말하게 한다. 거창한 것이 아니라 \'글씨를 또박또박 쓰기\'처럼 지금 할 수 있는 것을 고르게 한다.',
            task: '장면 속 알맞은 행동을 고르고, 이번 주에 해 볼 행동 하나를 정해 짝에게 말해요.',
            levels: CARD_LV,
            items: [
              { prompt: '운동회가 끝나고 작은 태극기가 운동장에 떨어져 있어요. 민지는 어떻게 하면 좋을까요?', toolOptions: { mode: 'branch', who: '민지', situation: '운동회가 끝난 운동장에 작은 태극기가 떨어져 있어요.', choices: [
                { id: 'pick', text: '주워서 흙을 털고 선생님께 가져다드려요', result: '태극기가 깨끗하게 보관돼요.', mood: '뿌듯함' },
                { id: 'pass', text: '못 본 척 지나가요', result: '태극기가 밟혀 더러워져요.', mood: '아쉬움', why: '떨어진 태극기를 주우면 소중히 다룰 수 있어요.' },
                { id: 'play', text: '주워서 칼싸움 놀이를 해요', result: '태극기가 찢어질 수 있어요.', mood: '미안함', why: '태극기는 놀잇감이 아니에요.' }] }, target: { choice: 'pick' }, difficulty: 0.1 },
              { prompt: '태극기를 바르게 다룬 사람의 마음을 골라 보세요.', toolOptions: { mode: 'match', weather: false, slots: [{ id: 's1', label: '떨어진 태극기를 주워 털었어요' }, { id: 's2', label: '태극기를 밟고 지나간 것을 알았어요' }], cards: ['뿌듯함', '미안함'] },
                target: { match: { s1: '뿌듯함', s2: '미안함' } }, difficulty: 0.1 },
              { prompt: '이번 주에 해 볼 행동 하나를 정해 짝에게 말하고 "다 했어요"를 누르세요.', toolOptions: { cards: ['뿌듯함', '신남'], slots: [{ id: 's1', label: '해 볼 행동을 정했어요' }] }, free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"짝이 정한 행동 가운데 나도 해 보고 싶은 것이 있나요?" 두세 가지를 칠판에 적어 둔다. 다음 시간에는 태극기를 바르게 그려 본다고 예고하고 출구 질문을 푼다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '우리나라를 아끼는 마음', slots: ['아끼는 행동', '고칠 행동'], cards: ['태극기를 바르게 걸어요', '태극기를 구겨서 버려요'] }, prompt: '두 카드를 아끼는 행동과 고칠 행동으로 나누어 보세요.', target: { sort: { '아끼는 행동': ['태극기를 바르게 걸어요'], '고칠 행동': ['태극기를 구겨서 버려요'] } }, difficulty: 0.05 },
          { type: 'choice', prompt: '한글을 아끼는 행동은 무엇일까요?', options: ['글자를 또박또박 써요', '책에 낙서해요', '거친 말을 써요'], answer: 0, difficulty: 0.05, explain: '글자를 바르게 쓰는 것도 우리 글을 아끼는 행동이에요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '우리나라를 아끼는 행동',
      items: [
        { type: 'check', prompt: '우리나라를 아끼는 행동에 모두 ✓ 하세요.', options: ['태극기를 접어서 보관해요', '태극기에 낙서해요', '한글을 바르게 써요', '무궁화를 마구 꺾어요'], answer: ['태극기를 접어서 보관해요', '한글을 바르게 써요'] },
        { type: 'short', prompt: '고칠 행동 하나를 골라 어떻게 바꿀지 쓰세요.' },
        { type: 'short', prompt: '이번 주에 내가 해 볼 행동을 쓰세요.' },
        { type: 'draw', prompt: '그 행동을 하는 내 모습을 그리세요.' },
      ],
      easy: {
        note: '지금 할 수 있는 작은 행동 하나!',
        items: [
          { type: 'choice', prompt: '떨어진 태극기를 보면 어떻게 할까요?', options: ['주워서 털어요', '밟고 지나가요'], answer: '주워서 털어요' },
          { type: 'short', prompt: '내가 해 볼 행동을 쓰세요.' },
          { type: 'draw', prompt: '그 행동을 하는 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 맞게 놓으면 초록 테두리가 생겨요. 해 볼 행동은 하나만 정해요.',
      base: '행동을 둘로 나누고, 고칠 행동을 바꾸어 이어요.',
      challenge: '카드가 늘어나요. 한글·태극기·무궁화마다 아끼는 행동을 하나씩 정해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 나라 사랑을 \'큰 일\'로만 생각한다 → 바른 글씨·고운 말처럼 날마다 하는 행동을 찾게 한다. ② 태극기를 함부로 다루는 친구를 비난한다 → 행동을 고치는 말로 바꾸어 말하게 한다. ③ 정한 행동을 잊는다 → 칠판 한쪽에 한 주 동안 붙여 둔다.',
  }));

  // ───────────────────────── 29~32차시: 태극기 바르게 그리고 달기, 나라 사랑 표현(우리나라 표현과 실천) ─────────────────────────

  lessons.push(L(29, {
    title: '태극기를 색종이로 바르게 꾸미기',
    objective: '흰 바탕 가운데 위 빨강·아래 파랑 태극 문양과 네 모서리 검은 괘를 알맞은 자리에 두어 태극기를 꾸밀 수 있다.',
    illustration: ART('paper children carefully gluing red and blue paper halves and four black bar groups onto a white paper rectangle to make a Korean flag', '태극기를 바르게 꾸며요', [
      { motif: 'star', x: 100, y: 70, s: 0.6 }, { motif: 'flower', x: 400, y: 230 }, { motif: 'tree', x: 80, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '일부러 태극 문양의 빨강과 파랑을 거꾸로 붙인 태극기를 보여 준다. "무엇이 이상한가요?" "빨강이 아래에 있어요"라는 대답을 끌어낸다. "태극기는 정해진 대로 그려야 해요. 오늘은 바르게 꾸며 봐요." 시연 단추로 \'위쪽\' 칸에 빨강이 들어가는 모습을 보여 준다.',
        student: '이 태극기에서 이상한 곳을 찾아 말해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '태극 문양', slots: [{ id: 's1', label: '위쪽' }], cards: ['빨강', '파랑'], shuffle: false }, sequence: [{ match: { s1: '빨강' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 태극기 그리는 차례와 자리 알기', minutes: 10, tool: 'mindmap',
            teacher: '"태극기는 바탕부터 그려요. 다음에 가운데 태극 문양, 마지막에 네 모서리 괘를 그려요." 차례를 세운 뒤 자리를 확인한다. 괘는 막대 모양이 서로 달라서 2학년은 \'네 모서리에 하나씩\'만 지켜도 된다고 알려 준다.',
            task: '태극기를 그리는 차례를 세우고, 태극 문양 색과 자리를 맞추어요.',
            levels: CARD_LV,
            items: [
              { prompt: '태극기를 그리는 차례대로 카드를 놓아 보세요.', toolOptions: { mode: 'order', topic: '태극기 그리기', cards: ['네 모서리에 검은 괘를 그려요', '흰 바탕을 준비해요', '가운데에 태극 문양을 그려요'] },
                target: { order: ['흰 바탕을 준비해요', '가운데에 태극 문양을 그려요', '네 모서리에 검은 괘를 그려요'] }, difficulty: 0.1 },
              { prompt: '태극기의 각 자리에 들어갈 것을 이어 보세요.', toolOptions: { mode: 'match', topic: '태극기의 자리', slots: [{ id: 's1', label: '태극 문양 위쪽' }, { id: 's2', label: '태극 문양 아래쪽' }, { id: 's3', label: '네 모서리' }], cards: ['빨강', '파랑', '검은 괘'] },
                target: { match: { s1: '빨강', s2: '파랑', s3: '검은 괘' } }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['빨강', '파랑', '검은 괘', '노랑'] } } } },
              { prompt: '태극기 바탕색을 말하는 빈칸에 알맞은 카드를 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['흰색', '노랑', '하늘색'], slots: [{ id: 'b1', label: '태극기의 바탕은 ___이에요.' }] },
                target: { fill: { b1: '흰색' } }, difficulty: 0.05 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 색종이 태극기 꾸미기 (표현)', minutes: 18, tool: 'collage',
            teacher: '"판의 바탕이 흰색이에요. 가운데에 빨강 반원을 위로, 파랑 반원을 아래로 붙여요." 반원을 돌리기 단추로 뒤집어 맞추게 한다. 진짜 태극 문양은 물결처럼 휘어 있지만 오늘은 반원 두 개로 간단히 나타낸다는 것을 알려 준다. 다 붙인 뒤 점검 목록을 하나씩 보며 표시한다.',
            task: '흰 바탕 위에 빨강·파랑 반원으로 태극 문양을 만들고, 네 모서리에 검은 긴 네모로 괘를 붙여요.',
            levels: { easy: { shapes: ['semi', 'rect'], colors: ['빨강', '파랑', '검정'], bg: '하양' }, base: { bg: '하양' }, challenge: { bg: '하양' } },
            items: [
              { prompt: '태극 문양을 만들어요. 빨강 반원 한 개와 파랑 반원 한 개를 판 가운데에 붙여 보세요.', target: { has: [{ shape: 'semi', color: '빨강', n: 1 }, { shape: 'semi', color: '파랑', n: 1 }] }, difficulty: 0.1 },
              { prompt: '태극기를 완성해요. 태극 문양 반원 두 개와 네 모서리에 검정 긴 네모를 네 개 붙인 뒤, 점검 목록을 모두 표시해 보세요.', target: { has: [{ shape: 'semi', color: '빨강', n: 1 }, { shape: 'semi', color: '파랑', n: 1 }, { shape: 'rect', color: '검정', n: 4 }], selfCheck: ['빨강이 위, 파랑이 아래에 있어요', '검은 괘가 네 모서리에 하나씩 있어요', '바탕은 흰색 그대로예요'] }, difficulty: 0.2,
                hints: ['태극 문양은 위아래 두 조각, 괘는 네 모서리에 있어요. 조각 수를 세어 보고 점검 목록도 하나씩 눌러요.', '빠진 조각이 있거나 개수가 문제와 달라요. 문제에 쓰인 개수와 하나씩 견주어 봐요.', '빨강 반원은 위, 파랑 반원은 아래에 붙이고, 네 모서리에 문제에 쓰인 개수만큼 검정 긴 네모를 나누어 붙인 뒤 점검 목록을 모두 눌러요.'],
                levels: { challenge: { prompt: '괘를 막대 모양으로 꾸며요. 태극 문양 반원 두 개와 검정 긴 네모 괘 막대를 열두 개 넘게 붙인 뒤, 점검 목록을 모두 표시해 보세요.', target: { has: [{ shape: 'semi', color: '빨강', n: 1 }, { shape: 'semi', color: '파랑', n: 1 }, { shape: 'rect', color: '검정', min: 12 }], selfCheck: ['빨강이 위, 파랑이 아래에 있어요', '네 모서리마다 막대 세 개씩 괘를 붙였어요', '바탕은 흰색 그대로예요'] } } } },
              { prompt: '짝과 태극기를 바꾸어 보고, 바르게 된 곳 하나를 말해 준 뒤 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '짝끼리 서로의 태극기를 보고 점검 목록과 견주어 본다. "짝 태극기에서 바르게 된 곳 하나를 말해 줘요." 다음 시간에는 태극기를 다는 날을 알아본다고 예고하고 출구 질문을 푼다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'order', topic: '태극기 그리기', cards: ['태극 문양', '흰 바탕', '네 괘'] }, prompt: '태극기를 그리는 차례대로 놓아 보세요.', target: { order: ['흰 바탕', '태극 문양', '네 괘'] }, difficulty: 0.05 },
          { type: 'choice', prompt: '태극기의 검은 괘는 어디에 그릴까요?', options: ['네 모서리', '태극 문양 안', '아래쪽 가운데'], answer: 0, difficulty: 0.1, explain: '괘는 태극기의 네 모서리에 하나씩 그려요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '태극기 바르게 그리기',
      items: [
        { type: 'draw', prompt: '흰 바탕 가운데에 태극 문양을 그리고 위는 빨강, 아래는 파랑으로 색칠하세요.' },
        { type: 'draw', prompt: '네 모서리에 검은 괘를 그려 태극기를 완성하세요.' },
        { type: 'check', prompt: '내 태극기를 살펴보고 ✓ 하세요.', options: ['빨강이 위에 있어요', '파랑이 아래에 있어요', '괘가 네 모서리에 있어요', '바탕이 흰색이에요'] },
        { type: 'short', prompt: '태극기를 그릴 때 어려웠던 곳을 쓰세요.' },
      ],
      easy: {
        note: '바탕 → 태극 문양 → 괘 차례로!',
        items: [
          { type: 'choice', prompt: '태극 문양의 위쪽 색에 ○ 하세요.', options: ['빨강', '초록'], answer: '빨강' },
          { type: 'draw', prompt: '태극 문양을 색칠하세요.' },
          { type: 'check', prompt: '다 그렸으면 ✓ 하세요.', options: ['괘를 네 개 그렸어요'] },
        ],
      },
    },
    differentiation: {
      easy: '색종이 판에는 반원과 긴 네모, 세 가지 색만 나와요. 괘는 긴 네모 하나씩이면 돼요.',
      base: '반원 두 개로 태극 문양을 만들고, 네 모서리에 괘를 하나씩 붙여요.',
      challenge: '괘를 막대 세 개씩으로 꾸며 실제 태극기에 더 가깝게 만들어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 빨강·파랑 위치를 바꾼다 → 도입의 거꾸로 태극기를 다시 떠올리게 한다. ② 괘 모양을 정확히 그리려다 시간이 모자란다 → 2학년은 자리만 지켜도 된다. ③ 색종이 판은 반원 두 개로 간단히 나타낸 것이라 실제 태극 문양(휘어진 모양)과 다르다는 것을 한 번 짚는다. 판정은 조각 개수만 보고, 위·아래 자리는 학생 점검 목록과 교사 눈으로 확인한다.',
  }));

  lessons.push(L(30, {
    title: '태극기를 다는 날과 다는 법 알기',
    objective: '삼일절·광복절·개천절·한글날에 태극기를 단다는 것과, 현충일에는 깃면 너비만큼 내려 다는 것을 알 수 있다.',
    illustration: ART('paper apartment balconies and houses each displaying a Korean flag on a flagpole, a calendar page with circled holidays', '태극기를 다는 날', [
      { motif: 'tree', x: 80, y: 214 }, { motif: 'star', x: 380, y: 70, s: 0.6 }, { motif: 'flower', x: 400, y: 230 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '아파트 베란다마다 태극기가 걸린 사진을 보여 준다. "이런 날을 본 적 있나요? 왜 태극기를 달았을까요?" "나라의 생일 같은 날이라서요" 같은 대답을 받는다. 달력을 펼쳐 빨간 날 가운데 태극기를 다는 날을 찾아본다고 알려 준다. 시연 단추로 \'10월 9일\' 눈금에 \'한글날\' 카드가 놓이는 모습을 보여 준다.',
        student: '집이나 길에서 태극기가 많이 걸린 날을 본 적 있나요?',
        demo: { tool: 'timeline', options: { mode: 'match', slots: [{ id: 'd1', label: '10월 9일' }], cards: [{ id: 'hangul', text: '한글날' }, { id: 'kids', text: '어린이날' }], axis: ['1월', '12월'], shuffle: false }, sequence: [{ match: { d1: 'hangul' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 태극기를 다는 날 짝짓기', minutes: 14, tool: 'timeline',
            teacher: '"삼일절은 3월 1일, 광복절은 8월 15일, 개천절은 10월 3일, 한글날은 10월 9일이에요." 달력에서 날짜를 함께 찾는다. 날마다 무슨 날인지 한 문장으로 들려준다(삼일절 — 나라를 되찾으려 만세를 부른 날, 광복절 — 나라를 되찾은 날, 개천절 — 우리나라가 처음 세워진 날, 한글날 — 한글을 널리 알린 날). 2학년은 이름과 날짜를 잇는 것까지 한다.',
            task: '날짜 눈금마다 태극기를 다는 날 카드를 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '날짜마다 그날 태극기를 다는 날 카드를 이어 보세요.', toolOptions: { mode: 'match', axis: ['1월', '12월'], slots: [{ id: 'd1', label: '3월 1일' }, { id: 'd2', label: '8월 15일' }, { id: 'd3', label: '10월 9일' }], cards: [{ id: 'samil', text: '삼일절' }, { id: 'gwang', text: '광복절' }, { id: 'hangul', text: '한글날' }] },
                target: { match: { d1: 'samil', d2: 'gwang', d3: 'hangul' } }, difficulty: 0.15,
                levels: { challenge: { prompt: '날짜 네 개마다 그날 태극기를 다는 날 카드를 이어 보세요.', toolOptions: { slots: [{ id: 'd1', label: '3월 1일' }, { id: 'd2', label: '8월 15일' }, { id: 'd4', label: '10월 3일' }, { id: 'd3', label: '10월 9일' }], cards: [{ id: 'samil', text: '삼일절' }, { id: 'gwang', text: '광복절' }, { id: 'gaecheon', text: '개천절' }, { id: 'hangul', text: '한글날' }] }, target: { match: { d1: 'samil', d2: 'gwang', d4: 'gaecheon', d3: 'hangul' } } } } },
              { prompt: '태극기를 다는 날을 한 해에 일어나는 차례대로 놓아 보세요.', toolOptions: { axis: ['1월', '12월'], cards: [{ id: 'hangul', text: '한글날 (10월 9일)' }, { id: 'samil', text: '삼일절 (3월 1일)' }, { id: 'gwang', text: '광복절 (8월 15일)' }] },
                target: { order: ['samil', 'gwang', 'hangul'] }, difficulty: 0.1,
                hints: ['카드마다 괄호 속 달을 읽어요. 1월에 가까운 달일수록 왼쪽에 놓아요.', '달의 숫자를 견주어 봐요. 3과 8과 10 가운데 가장 작은 수는 무엇인가요?', '3월 삼일절 → 8월 광복절 → 10월 한글날 차례예요.'] },
              { prompt: '6월과 10월의 날짜마다 알맞은 날 카드를 이어 보세요.', toolOptions: { mode: 'match', axis: ['1월', '12월'], slots: [{ id: 'd5', label: '6월 6일' }, { id: 'd4', label: '10월 3일' }], cards: [{ id: 'hyeon', text: '현충일' }, { id: 'gaecheon', text: '개천절' }] },
                target: { match: { d5: 'hyeon', d4: 'gaecheon' } }, difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 깃봉에 붙여 달기와 내려 달기', minutes: 14, tool: 'mindmap',
            teacher: '깃대 모형(막대와 종이 태극기)으로 보여 준다. "기쁜 날, 나라를 기념하는 날에는 깃봉 바로 아래에 붙여 달아요. 현충일(6월 6일)은 나라를 지키다 돌아가신 분들을 기리는 날이라 깃면 너비만큼 내려 달아요." 내려 다는 것을 \'조기\'라고 한다고 알려 준다.',
            task: '태극기를 다는 날을 붙여 다는 날과 내려 다는 날로 나누고, 다는 법을 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '태극기를 다는 날을 붙여 다는 날과 내려 다는 날로 나누어 보세요.', toolOptions: { topic: '태극기 다는 법', slots: ['깃봉에 붙여 달아요', '깃면 너비만큼 내려 달아요'], cards: ['삼일절', '광복절', '한글날', '현충일'] },
                target: { sort: { '깃봉에 붙여 달아요': ['삼일절', '광복절', '한글날'], '깃면 너비만큼 내려 달아요': ['현충일'] } }, difficulty: 0.15,
                predict: { q: '현충일에도 깃봉에 붙여 달까요?', options: ['붙여 달아요', '내려 달아요'], answer: 1 },
                conclude: '현충일에는 돌아가신 분들을 기리는 마음으로 내려 달아요.' },
              { prompt: '날의 뜻과 다는 법을 이어 보세요.', toolOptions: { mode: 'match', topic: '왜 그렇게 달까요?', slots: [{ id: 's1', label: '나라를 기념하는 날' }, { id: 's2', label: '나라를 지킨 분들을 기리는 날' }], cards: ['깃봉에 붙여 달아요', '깃면 너비만큼 내려 달아요'] },
                target: { match: { s1: '깃봉에 붙여 달아요', s2: '깃면 너비만큼 내려 달아요' } }, difficulty: 0.15 },
              { prompt: '태극기를 바르게 다는 모습만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '바르게 다는 모습', cards: ['밖에서 보아 깨끗하게 보이게 달아요', '비바람이 심하면 걷어 두어요', '찢어진 태극기를 그대로 달아요', '땅에 끌리게 늘어뜨려요'] },
                target: { pick: ['밖에서 보아 깨끗하게 보이게 달아요', '비바람이 심하면 걷어 두어요'] }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"집에 태극기가 있나요? 다음 태극기를 다는 날은 언제일까요?" 달력에서 함께 찾는다. 집에서 가족과 함께 태극기를 달아 보자고 권하되, 태극기가 없는 집도 있으니 학교에 걸린 태극기를 살펴봐도 된다고 말한다. 출구 질문을 푼다.',
        exitTicket: [
          { type: 'tool', tool: 'timeline', options: { mode: 'match', axis: ['1월', '12월'], slots: [{ id: 'e1', label: '3월 1일' }, { id: 'e2', label: '10월 9일' }], cards: [{ id: 'samil', text: '삼일절' }, { id: 'hangul', text: '한글날' }] }, prompt: '날짜와 태극기를 다는 날을 이어 보세요.', target: { match: { e1: 'samil', e2: 'hangul' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '현충일에는 태극기를 어떻게 달까요?', options: ['깃면 너비만큼 내려 달아요', '깃봉에 붙여 달아요', '달지 않아요'], answer: 0, difficulty: 0.15, explain: '현충일에는 나라를 지킨 분들을 기리며 내려 달아요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '태극기를 다는 날',
      items: [
        { type: 'table', prompt: '태극기를 다는 날의 날짜를 쓰세요.', columns: ['삼일절', '광복절', '개천절', '한글날'], rows: 1, answer: '3월 1일, 8월 15일, 10월 3일, 10월 9일' },
        { type: 'choice', prompt: '현충일에 태극기를 다는 법에 ○ 하세요.', options: ['내려 달아요', '붙여 달아요'], answer: '내려 달아요' },
        { type: 'short', prompt: '우리 집이나 학교에서 태극기를 다는 곳을 쓰세요.' },
        { type: 'draw', prompt: '깃봉에 붙여 단 태극기를 그리세요.' },
      ],
      easy: {
        note: '한글날은 10월 9일!',
        items: [
          { type: 'choice', prompt: '10월 9일은 무슨 날일까요?', options: ['한글날', '어린이날'], answer: '한글날' },
          { type: 'choice', prompt: '태극기를 내려 다는 날에 ○ 하세요.', options: ['현충일', '광복절'], answer: '현충일' },
          { type: 'draw', prompt: '태극기를 단 우리 집을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 맞게 놓으면 초록 테두리가 생겨요. 날짜는 달력을 보며 찾아도 돼요.',
      base: '날짜와 다는 날을 잇고, 붙여 달기와 내려 달기를 나누어요.',
      challenge: '개천절까지 네 날을 잇고, 내려 다는 까닭을 내 말로 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 빨간 날(공휴일)이면 모두 태극기를 다는 줄 안다 → 설날·추석·어린이날은 태극기를 다는 날이 아니라고 짚는다. ② 현충일의 뜻을 무섭게 받아들인다 → \'고마운 분들을 기억하는 날\'로 말한다. ③ 날짜를 외우는 데만 매달린다 → 달력에서 찾는 방법을 알려 준다.',
  }));

  lessons.push(L(31, {
    title: '국기에 대한 경례 바르게 하기',
    objective: '국기를 바라보고 오른손을 펴서 왼쪽 가슴에 얹는 국기에 대한 경례를 차례대로 바르게 할 수 있다.',
    illustration: ART('a row of paper children standing straight facing a Korean flag, each with the right hand placed flat on the left chest', '국기에 대한 경례', [
      { motif: 'tree', x: 80, y: 214 }, { motif: 'flower', x: 400, y: 230 }, { motif: 'star', x: 330, y: 70, s: 0.6 }]),
    safety: [SPACE],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '입학식이나 운동회 개회식 사진에서 모두 국기를 바라보고 선 장면을 보여 준다. "이때 사람들은 손을 어디에 두었나요?" "가슴에요"라는 대답을 끌어낸다. "이것을 국기에 대한 경례라고 해요. 오른손을 펴서 왼쪽 가슴에 얹어요." 시연 단추로 몸 그림에서 \'가슴\'이 골라지는 모습을 보여 준다.',
        student: '개회식 때 사람들이 손을 어디에 두었는지 말해 봐요.',
        demo: { tool: 'body', options: { mode: 'parts', parts: ['가슴', '배', '목'], names: true }, sequence: [{ parts: ['가슴'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 손을 얹는 곳 찾기', minutes: 9, tool: 'body',
            teacher: '"오른손을 들어 보세요. 손바닥을 쭉 펴요. 이제 왼쪽 가슴, 심장이 콩콩 뛰는 곳에 얹어요." 교사는 학생과 같은 방향(등을 보이며)으로 서서 보여 주어 좌우가 헷갈리지 않게 한다. 몸 그림에서는 \'가슴\'을 고르고, 오른손이 헷갈리는 학생에게는 "창문 쪽 손을 들어요"처럼 교실 방향으로 짚어 준다.',
            task: '국기에 대한 경례를 할 때 손을 얹는 곳과 바르게 서는 데 쓰는 몸을 골라요.',
            levels: BODY_LV,
            items: [
              { prompt: '국기에 대한 경례를 할 때 오른손을 얹는 곳을 골라 보세요.', toolOptions: { mode: 'parts', parts: ['가슴', '배', '어깨', '목'] }, target: { parts: ['가슴'] }, difficulty: 0.05,
                hints: ['심장이 콩콩 뛰는 곳에 손을 얹어요.', '배보다 위, 목보다 아래예요.', '왼쪽 가슴이에요. 그림에서 \'가슴\'을 골라요.'] },
              { prompt: '경례할 때 몸을 바르게 세우려면 곧게 펴야 하는 곳 두 곳을 골라 보세요.', toolOptions: { mode: 'parts', parts: ['허리', '무릎', '손목', '발목'] }, target: { parts: ['허리', '무릎'] }, difficulty: 0.15,
                hints: ['구부정하게 서면 어디가 굽나요? 등과 다리를 떠올려요.', '몸통 가운데와 다리 가운데를 곧게 펴요.', '허리와 무릎을 골라요.'],
                levels: { challenge: { toolOptions: { parts: ['허리', '무릎', '손목', '발목', '팔꿈치', '어깨'] } } } },
              { prompt: '경례할 때는 국기를 바라봐요. 국기를 바라보는 데 쓰는 곳을 골라 보세요.', toolOptions: { mode: 'parts', parts: ['눈', '귀', '코', '혀'] }, target: { parts: ['눈'] }, difficulty: 0.05,
                hints: ['무엇으로 국기를 볼까요?', '소리를 듣는 곳이나 냄새를 맡는 곳이 아니에요.', '눈을 골라요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 경례 차례대로 해 보기 (실천)', minutes: 18, tool: 'timer',
            teacher: '교실 앞 태극기를 바라보고 선다. "차렷 → 국기를 바라봐요 → 오른손을 펴서 왼쪽 가슴에 → 맹세문을 다 들을 때까지 → 손을 내려요." 맹세문은 교사가 읽거나 녹음을 들려준다. 경례하는 동안 장난을 치는 학생이 있으면 "국기를 보는 동안은 마음을 모아요"라고 말한다. 타이머로 30초 동안 경례 자세를 지키는 연습을 두 번 한다.',
            task: '경례 차례를 세우고, 타이머에 맞추어 30초 동안 경례 자세를 지켜요.',
            levels: TIMER_LV,
            items: [
              { prompt: '국기에 대한 경례 차례대로 카드를 놓아 보세요.', toolOptions: { cards: ['맹세문이 끝날 때까지 기다려요', '오른손을 펴서 왼쪽 가슴에 얹어요', '손을 내리고 바로 서요', '국기를 바라보고 바르게 서요'] },
                target: { order: ['국기를 바라보고 바르게 서요', '오른손을 펴서 왼쪽 가슴에 얹어요', '맹세문이 끝날 때까지 기다려요', '손을 내리고 바로 서요'] }, difficulty: 0.1,
                hints: ['먼저 국기를 바라보고 서야 손을 얹을 수 있어요. 손을 내리는 것은 맨 끝이에요.', '놓은 차례대로 몸으로 해 보세요. 손을 얹기 전에 기다리는 자리가 있는지 살펴요.', '바르게 서기 → 손 얹기 → 맹세문 기다리기 → 손 내리기 차례예요.'] },
              { prompt: '연습: 30초 경례하고 10초 쉬기를 2번 하도록 타이머를 맞추세요.', toolOptions: { plan: { work: 10, rest: 20, rounds: 1 } }, target: { plan: { work: 30, rest: 10, rounds: 2 } }, difficulty: 0.15,
                levels: { easy: { prompt: '연습: 30초 경례하기를 2번 하도록 타이머를 맞추세요. 쉬는 시간은 그대로 두어요.', target: { plan: { work: 30, rounds: 2 } } } } },
              { prompt: '타이머를 켜고 태극기를 바라보며 경례 자세를 지켜 본 뒤 "다 했어요"를 누르세요.', toolOptions: { plan: { work: 30, rest: 10, rounds: 2 } }, free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"경례할 때 마음은 어땠나요? 무엇이 어려웠나요?" 좌우를 헷갈린 학생에게는 교사가 그 학생의 오른손을 살짝 짚어 주며 확인하게 한다. 출구 질문을 푼다.',
        exitTicket: [
          { type: 'tool', tool: 'body', options: { mode: 'parts', parts: ['가슴', '배', '허벅지'] }, prompt: '국기에 대한 경례에서 손바닥이 닿는 곳을 골라 보세요.', target: { parts: ['가슴'] }, difficulty: 0.05 },
          { type: 'choice', prompt: '국기에 대한 경례에서 어느 손을 얹을까요?', options: ['오른손', '왼손', '두 손 모두'], answer: 0, difficulty: 0.1, explain: '오른손을 펴서 왼쪽 가슴에 얹어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '국기에 대한 경례',
      items: [
        { type: 'figure', prompt: '그림의 ①~④ 가운데 경례할 때 손을 얹는 곳의 번호에 ○ 하세요.', tool: 'body', figures: [{ options: { mode: 'parts', parts: ['가슴', '배', '어깨', '목'], numbers: ['어깨', '가슴', '배', '목'] }, caption: '' }], answer: '②' },
        { type: 'table', prompt: '경례 차례를 쓰세요.', columns: ['1', '2', '3', '4'], rows: 1 },
        { type: 'choice', prompt: '경례할 때 바른 모습에 ○ 하세요.', options: ['국기를 바라봐요', '옆 친구와 이야기해요'], answer: '국기를 바라봐요' },
        { type: 'short', prompt: '경례할 때 어떤 마음이 들었는지 쓰세요.' },
      ],
      easy: {
        note: '오른손을 펴서 왼쪽 가슴에!',
        items: [
          { type: 'choice', prompt: '손을 얹는 곳에 ○ 하세요.', options: ['가슴', '배'], answer: '가슴' },
          { type: 'choice', prompt: '경례할 때 어디를 바라볼까요?', options: ['국기', '친구'], answer: '국기' },
          { type: 'draw', prompt: '경례하는 내 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '몸 그림에서 고른 곳의 이름이 바로 보여요. 타이머는 경례 시간과 횟수만 맞추어요.',
      base: '손을 얹는 곳과 펴야 하는 곳을 고르고, 차례대로 경례해요.',
      challenge: '펴야 하는 곳을 세 곳 고르고, 초시계로 경례 자세를 지킨 시간을 재요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 왼손을 얹거나 오른쪽 가슴에 얹는다 → 교사가 학생과 같은 방향으로 서서 보여 준다. ② 손을 주먹 쥔다 → "손바닥을 쭉 펴요"를 되풀이한다. ③ 몸 그림은 \'가슴\'까지만 고를 수 있어 오른손·왼쪽은 판정하지 않는다 — 실제 몸 동작은 교사가 눈으로 확인한다. 종교 등으로 경례를 하지 않는 학생은 바르게 서서 국기를 바라보는 것으로 대신할 수 있다.',
  }));

  lessons.push(L(32, {
    title: '나라 사랑 마음을 담은 작품 꾸미기',
    objective: '무궁화나 태극 문양을 되풀이해 꾸민 띠 작품으로 나라를 아끼는 마음을 나타내고, 작품에 담은 마음을 말할 수 있다.',
    illustration: ART('a long paper banner decorated with repeating pink mugunghwa flowers and small red and blue circles, children hanging it on the classroom wall', '나라 사랑 띠 작품', [
      { motif: 'flower', x: 90, y: 228 }, { motif: 'flower', x: 390, y: 228 }, { motif: 'star', x: 330, y: 70, s: 0.6 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '무궁화와 태극 무늬를 되풀이해 꾸민 띠 작품 예시를 보여 준다. "무엇이 몇 번 되풀이되었나요?" 함께 세어 본다. "오늘은 나라를 아끼는 마음을 담아 띠 작품을 꾸며요. 다 꾸민 띠를 이어 붙여 교실 벽을 꾸밀 거예요." 시연 단추로 \'한 묶음을 정해요\' 카드가 첫 칸에 놓이는 모습을 보여 준다.',
        student: '띠 작품에서 되풀이된 모양을 찾아 세어 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'order', topic: '띠 작품 만들기', cards: ['한 묶음을 정해요', '되풀이해 붙여요'], shuffle: false }, sequence: [{ order: ['한 묶음을 정해요', '되풀이해 붙여요'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 만드는 차례와 담을 마음 정하기', minutes: 8, tool: 'mindmap',
            teacher: '"작품에 어떤 마음을 담고 싶나요?" 고른 마음과 어울리는 무늬를 잇게 한다. 정답이 하나인 활동은 짝짓기까지이고, 실제 작품에는 다른 모양을 써도 된다고 알려 준다.',
            task: '작품을 만드는 차례를 세우고, 담고 싶은 마음과 어울리는 무늬를 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '띠 작품을 만드는 차례대로 카드를 놓아 보세요.', toolOptions: { mode: 'order', topic: '띠 작품 만들기', cards: ['친구에게 담은 마음을 말해요', '한 묶음을 정해요', '한 묶음을 되풀이해 붙여요'] },
                target: { order: ['한 묶음을 정해요', '한 묶음을 되풀이해 붙여요', '친구에게 담은 마음을 말해요'] }, difficulty: 0.1 },
              { prompt: '담고 싶은 마음과 어울리는 무늬 카드를 이어 보세요.', toolOptions: { mode: 'match', topic: '마음과 무늬', slots: [{ id: 's1', label: '포기하지 않는 마음' }, { id: 's2', label: '서로 어울리는 마음' }], cards: ['날마다 또 피는 무궁화', '빨강과 파랑이 어울린 태극 문양'] },
                target: { match: { s1: '날마다 또 피는 무궁화', s2: '빨강과 파랑이 어울린 태극 문양' } }, difficulty: 0.15 },
              { prompt: '띠 무늬를 설명하는 빈칸에 알맞은 카드를 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['되풀이해', '흩어서'], slots: [{ id: 'b1', label: '한 묶음을 똑같이 ___ 붙이면 띠 무늬가 돼요.' }] },
                target: { fill: { b1: '되풀이해' } }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 되풀이 띠 작품 꾸미기 (표현)', minutes: 20, tool: 'collage',
            teacher: '"한 묶음을 정해요. 예를 들어 분홍 하트 하나, 빨강 동그라미 하나가 한 묶음이에요. 이 묶음을 왼쪽에서 오른쪽으로 똑같이 되풀이해요." 묶음이 바뀌면 되풀이가 아니라는 것을 짚는다. 다 꾸민 학생은 점검 목록을 표시하고 짝에게 담은 마음을 말한다.',
            task: '한 묶음을 정해 왼쪽에서 오른쪽으로 똑같이 되풀이해 붙이고, 담은 마음을 짝에게 말해요.',
            levels: { easy: { shapes: ['heart', 'circle', 'semi'], colors: ['분홍', '빨강', '파랑'] }, base: {}, challenge: {} },
            items: [
              { prompt: '분홍 하트와 빨강 동그라미를 한 묶음으로 정해, 왼쪽에서 오른쪽으로 세 번 넘게 똑같이 되풀이해 붙여 보세요.', target: { repeat: { times: 3, unit: 2 }, has: [{ shape: 'heart', color: '분홍', min: 3 }, { shape: 'circle', color: '빨강', min: 3 }] }, difficulty: 0.2,
                hints: ['한 묶음을 먼저 정하고, 왼쪽부터 그 묶음을 똑같은 차례로 되풀이해요.', '묶음 차례가 바뀐 곳이 있거나 묶음이 세 번이 안 돼요. 왼쪽 첫 묶음과 다음 묶음을 하나씩 견주어요.', '문제에 쓰인 조각 차례대로 한 묶음을 놓고, 그 묶음을 왼쪽에서 오른쪽으로 한 줄로 세 번 똑같이 놓아요.'],
                levels: { challenge: { prompt: '분홍 하트·빨강 반원·파랑 반원을 한 묶음으로 정해, 왼쪽에서 오른쪽으로 세 번 넘게 똑같이 되풀이해 붙여 보세요.', target: { repeat: { times: 3, unit: 3 }, has: [{ shape: 'heart', color: '분홍', min: 3 }, { shape: 'semi', color: '빨강', min: 3 }, { shape: 'semi', color: '파랑', min: 3 }] } } } },
              { prompt: '띠 작품을 짝에게 보여 주며 담은 마음을 말하고, 짝의 작품도 끝까지 본 뒤 "다 했어요"를 누르세요.', free: true, talk: true },
              { prompt: '내 띠 작품을 살펴보고 해낸 것을 하나씩 표시해요.', target: { selfCheck: ['한 묶음을 똑같이 되풀이했어요', '작품에 담은 마음을 짝에게 말했어요', '짝의 작품에서 좋은 점을 찾아 말해 주었어요'], minPieces: 4 }, difficulty: 0.05 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '띠 작품을 이어 붙여 교실 벽에 건다. "우리 반 띠를 보니 어떤 마음이 드나요?" 두세 명이 말한다. 다음 시간에는 우리나라에 대해 새로 안 것과 더 알고 싶은 것을 정리한다고 예고하고 출구 질문을 푼다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', basket: '되풀이된 띠', cards: ['하트-별-하트-별-하트-별', '하트-별-별-하트-동그라미', '별-하트-동그라미-하트-별'] }, prompt: '한 묶음이 똑같이 되풀이된 띠만 골라 보세요.', target: { pick: ['하트-별-하트-별-하트-별'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '나라 사랑 작품을 보고 친구에게 할 알맞은 말은 무엇일까요?', options: ['"무궁화를 되풀이해서 예뻐"', '"내 것이 더 멋져"', '"이상해"'], answer: 0, difficulty: 0.05, explain: '친구 작품에서 좋은 점을 찾아 말해 주어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '나라 사랑 띠 작품',
      items: [
        { type: 'draw', prompt: '띠 작품의 한 묶음을 그리세요.' },
        { type: 'draw', prompt: '그 묶음을 세 번 되풀이해 띠를 그리세요.' },
        { type: 'short', prompt: '작품에 담은 마음을 쓰세요.' },
        { type: 'short', prompt: '친구 작품에서 좋은 점을 쓰세요.' },
      ],
      easy: {
        note: '한 묶음을 손가락으로 짚으며 되풀이해요.',
        items: [
          { type: 'choice', prompt: '되풀이된 띠에 ○ 하세요.', options: ['꽃-공-꽃-공', '꽃-공-공-별'], answer: '꽃-공-꽃-공' },
          { type: 'draw', prompt: '무궁화를 세 번 되풀이해 그리세요.' },
          { type: 'short', prompt: '작품에 담은 마음을 한 낱말로 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '색종이 판에 쓸 모양과 색만 나와요. 두 조각 묶음을 되풀이해요.',
      base: '두 조각 묶음을 세 번 넘게 되풀이하고, 담은 마음을 말해요.',
      challenge: '세 조각 묶음으로 띠를 꾸며요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 중간에 묶음을 바꾼다 → 첫 묶음을 손가락으로 짚으며 견주게 한다. ② 조각을 위아래로 흩어 놓아 되풀이가 안 보인다 → 한 줄로 놓게 한다. ③ 꾸미기에만 빠져 담은 마음을 말하지 못한다 → 점검 목록으로 말하기까지 해내게 한다.',
  }));

  // ───────────────────────── 33~36차시: 우리나라에 대해 새로 안 것과 더 알고 싶은 물음(성찰과 습관화) ─────────────────────────

  // 우리나라 칸 지도(한반도를 6×9 칸으로 줄인 그림 — 칸 자리는 실제 위도·경도를 어림해 정했다)
  // 서울 [2,5], 부산 [3,7](바닷가 항구), 독도 [5,5](서울과 같은 줄의 동쪽 바다), 제주도 [1,8](남쪽 바다), 백두산 [2,0](맨 북쪽)
  var KOR_LAND = [[1, 0], [2, 0], [3, 0], [4, 0], [1, 1], [2, 1], [3, 1], [4, 1], [1, 2], [2, 2], [3, 2], [4, 2],
    [1, 3], [2, 3], [3, 3], [1, 4], [2, 4], [3, 4], [1, 5], [2, 5], [3, 5], [1, 6], [2, 6], [3, 6], [1, 7], [2, 7], [3, 7]];
  var KOR_SEA = [[0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8], [4, 3], [4, 4], [4, 5], [4, 6], [4, 7], [4, 8],
    [5, 2], [5, 3], [5, 4], [5, 5], [5, 6], [5, 7], [5, 8], [1, 8], [2, 8], [3, 8]];
  function KOR(places, more) {
    var o = { grid: [6, 9], title: '우리나라 칸 지도', regions: [{ name: '우리나라 땅', cells: KOR_LAND, color: 'mint' }], regionNames: false, sea: KOR_SEA, places: places };
    for (var k in (more || {})) o[k] = more[k];
    return o;
  }
  var P_SEOUL = { name: '서울', icon: 'capital', at: [2, 5] };
  var P_BUSAN = { name: '부산', icon: 'port', at: [3, 7] };
  var P_DOKDO = { name: '독도', icon: 'island', at: [5, 5] };
  var P_JEJU = { name: '제주도', icon: 'island', at: [1, 8] };
  var P_BAEKDU = { name: '백두산', icon: 'mountain', at: [2, 0] };
  var P_GYEONGJU = { name: '경주', icon: 'heritage', at: [3, 6] };
  var KOR_MAP = KOR([P_SEOUL, P_DOKDO, P_JEJU, P_BAEKDU]);
  var MAP_LV = { easy: { names: true, readout: true }, base: { names: true }, challenge: { names: false } };
  // 높이 지도: 백두산(2,744m)이 가장 높고, 한라산(제주도)·지리산은 '높은 산', 바다는 -1. 우리나라 밖 칸은 비워 둔다(null)
  var KOR_HEIGHTS = [
    [null, 1, 4, 1, 1, null],
    [null, 1, 2, 1, 1, null],
    [null, 0, 1, 2, 1, -1],
    [-1, 0, 1, 2, -1, -1],
    [-1, 0, 1, 2, -1, -1],
    [-1, 0, 0, 1, -1, -1],
    [-1, 0, 1, 2, -1, -1],
    [-1, 0, 3, 0, -1, -1],
    [-1, 3, -1, -1, -1, -1],
  ];

  lessons.push(L(33, {
    title: '우리나라에 대해 새로 안 것과 궁금한 것 나누기',
    objective: '태극기·무궁화·한글에 대해 새로 알게 된 것을 말하고, 더 알고 싶은 것을 물음 문장 하나로 만들 수 있다.',
    illustration: ART('paper children sitting in a circle holding cards with a Korean flag, a mugunghwa flower and Hangul letters, a big paper question mark floating above them', '새로 안 것과 궁금한 것', [
      { motif: 'flower', x: 90, y: 228 }, { motif: 'star', x: 380, y: 70, s: 0.6 }, { motif: 'tree', x: 410, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '지난 시간까지 만든 태극기·무궁화 띠 작품을 칠판 앞에 모아 둔다. "우리나라에 대해 이제 다 알게 되었나요?" 손을 들게 한 뒤 "그럼 무궁화는 왜 저녁에 오므라들까요?" 하고 되묻는다. 대답이 막히면 "다 안다고 생각해도 궁금한 것은 또 생겨요. 오늘은 새로 안 것을 모으고, 궁금한 것을 물음으로 만들어요." 시연 단추로 \'꽃잎이 다섯 장이에요\' 카드가 \'무궁화\' 가지에 놓이는 모습을 보여 준다.',
        student: '우리나라에 대해 새로 알게 된 것 하나를 떠올려 봐요.',
        demo: { tool: 'mindmap', options: { topic: '새로 안 것', slots: ['태극기', '무궁화', '한글'], cards: ['꽃잎이 다섯 장이에요'], shuffle: false }, sequence: [{ sort: { '태극기': [], '무궁화': ['꽃잎이 다섯 장이에요'], '한글': [] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 새로 안 것을 갈래 지어 모으기', minutes: 13, tool: 'mindmap',
            teacher: '"이 카드는 태극기 이야기일까요, 무궁화 이야기일까요?" 카드를 하나씩 소리 내어 읽고 나눈다. 틀린 말이 섞인 문항에서는 "정말 그랬나요? 우리가 만든 태극기를 다시 볼까요?" 하고 작품을 가리켜 스스로 고치게 한다. 다 안다고 말하던 학생도 헷갈리는 카드가 있으면 "그것도 새로 알게 된 거예요"라고 말해 준다.',
            task: '새로 안 것을 태극기·무궁화·한글로 나누고, 맞게 안 것과 물음에 맞는 답을 찾아요.',
            levels: CARD_LV,
            items: [
              { prompt: '새로 안 것 카드를 태극기·무궁화·한글 가지로 나누어 보세요.', toolOptions: { topic: '새로 안 것', slots: ['태극기', '무궁화', '한글'], cards: ['태극 문양은 위가 빨강이에요', '네 모서리에 검은 괘가 있어요', '꽃잎이 다섯 장이에요', '세종대왕이 만들었어요'] },
                target: { sort: { '태극기': ['태극 문양은 위가 빨강이에요', '네 모서리에 검은 괘가 있어요'], '무궁화': ['꽃잎이 다섯 장이에요'], '한글': ['세종대왕이 만들었어요'] } }, difficulty: 0.1,
                levels: { challenge: { prompt: '새로 안 것 카드 여섯 장을 태극기·무궁화·한글 가지로 나누어 보세요.', toolOptions: { cards: ['태극 문양은 위가 빨강이에요', '네 모서리에 검은 괘가 있어요', '꽃잎이 다섯 장이에요', '여름부터 가을까지 피어요', '세종대왕이 만들었어요', '자음과 모음을 모아 글자를 만들어요'] }, target: { sort: { '태극기': ['태극 문양은 위가 빨강이에요', '네 모서리에 검은 괘가 있어요'], '무궁화': ['꽃잎이 다섯 장이에요', '여름부터 가을까지 피어요'], '한글': ['세종대왕이 만들었어요', '자음과 모음을 모아 글자를 만들어요'] } } } } },
              { prompt: '맞게 안 것만 골라 바구니에 넣어 보세요. 틀린 말도 섞여 있어요.', toolOptions: { mode: 'pick', basket: '맞게 안 것', cards: ['태극기 바탕은 흰색이에요', '무궁화는 우리나라 꽃이에요', '태극기에는 노란 별이 있어요', '한글은 다른 나라 글자예요'] },
                target: { pick: ['태극기 바탕은 흰색이에요', '무궁화는 우리나라 꽃이에요'] }, difficulty: 0.1 },
              { prompt: '물음마다 알맞은 답 카드를 이어 보세요.', toolOptions: { mode: 'match', topic: '물음과 답', slots: [{ id: 's1', label: '한글은 누가 만들었을까요?' }, { id: 's2', label: '태극기 바탕은 무슨 색일까요?' }, { id: 's3', label: '무궁화는 언제 필까요?' }], cards: ['세종대왕', '흰색', '여름부터 가을까지'] },
                target: { match: { s1: '세종대왕', s2: '흰색', s3: '여름부터 가을까지' } }, difficulty: 0.1,
                hints: ['물음에 쓰인 \'누가\', \'무슨 색\', \'언제\'를 먼저 찾아요. 그 말이 무엇을 묻는지 생각해요.', '이은 답을 물음에 넣어 소리 내어 읽어 보세요. 사람을 묻는데 색을 답한 곳이 있는지 살펴요.', '\'누가\'에는 사람, \'무슨 색\'에는 색, \'언제\'에는 때를 이어요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 더 알고 싶은 것을 물음으로 만들기', minutes: 15, tool: 'emotion',
            teacher: '"물음은 끝에 \'~까요?\'가 붙고 물음표가 있어요." 칠판에 \'무궁화는 꽃잎이 다섯 장이에요.\'와 \'무궁화는 왜 꽃잎이 다섯 장일까요?\'를 나란히 쓰고 어느 것이 물음인지 묻는다. 궁금한 것이 없다는 학생에게는 "태극기를 처음 만든 사람은 누구일까?" 같은 물음을 하나 들려주고 "이런 것도 궁금하지 않나요?" 하고 기다린다. 짝 활동에서는 새로 안 것 하나와 물음 하나를 말한다.',
            task: '궁금한 것을 물음으로 바꾸고, 짝에게 새로 안 것과 물음을 하나씩 말해요.',
            levels: CARD_LV,
            items: [
              { prompt: '준호가 "우리나라는 벌써 다 알아. 더 알 게 없어"라고 말했어요. 서아는 어떻게 말하면 좋을까요?', toolOptions: { mode: 'branch', who: '서아', situation: '준호가 "우리나라는 벌써 다 알아"라고 말했어요.', choices: [
                { id: 'ask', text: '"나는 아직 궁금해. 무궁화는 왜 저녁에 오므라들까?"', result: '준호도 "그건 나도 모르겠다" 하며 함께 궁금해해요.', mood: '신남' },
                { id: 'agree', text: '"맞아, 우리는 다 알아"', result: '둘 다 더 알아볼 기회를 놓쳐요.', mood: '아쉬움', why: '다 안다고 생각해도 궁금한 것은 또 생겨요.' },
                { id: 'tease', text: '"너는 하나도 모르잖아" 하고 놀려요', result: '준호가 속상해서 말을 하지 않아요.', mood: '속상함', why: '친구를 놀리지 않고 궁금한 것을 함께 찾아요.' }] }, target: { choice: 'ask' }, difficulty: 0.1 },
              { prompt: '물음 문장만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', weather: false, basket: '물음 문장', cards: ['무궁화는 왜 저녁에 오므라들까요?', '태극기는 언제 처음 만들었을까요?', '한글은 쉬운 글자예요.', '태극기 바탕은 흰색이에요.'] },
                target: { pick: ['무궁화는 왜 저녁에 오므라들까요?', '태극기는 언제 처음 만들었을까요?'] }, difficulty: 0.1,
                predict: { q: '\'한글은 쉬운 글자예요.\'는 물음일까요?', options: ['물음이에요', '물음이 아니에요'], answer: 1 },
                conclude: '물음은 \'~까요?\'로 끝나고 물음표가 붙어요.' },
              { prompt: '궁금한 것마다 알맞은 물음 카드를 이어 보세요.', toolOptions: { mode: 'match', weather: false, slots: [{ id: 's1', label: '무궁화가 피는 때가 궁금해요' }, { id: 's2', label: '한글을 만든 까닭이 궁금해요' }, { id: 's3', label: '태극기를 다는 곳이 궁금해요' }], cards: ['무궁화는 언제 필까요?', '세종대왕은 왜 한글을 만들었을까요?', '태극기는 어디에 달까요?'] },
                target: { match: { s1: '무궁화는 언제 필까요?', s2: '세종대왕은 왜 한글을 만들었을까요?', s3: '태극기는 어디에 달까요?' } }, difficulty: 0.15,
                hints: ['궁금한 것이 \'때\'인지, \'까닭\'인지, \'곳\'인지 먼저 찾아요.', '이은 물음을 다시 읽어 보세요. 때가 궁금한데 \'어디\'로 묻는 물음을 이은 곳이 있는지 살펴요.', '때는 \'언제\', 까닭은 \'왜\', 곳은 \'어디\'로 물어요.'] },
              { prompt: '짝에게 우리나라에 대해 새로 안 것 하나와 더 알고 싶은 물음 하나를 말하고, 짝의 말도 끝까지 들은 뒤 "다 했어요"를 누르세요.', toolOptions: { cards: ['신남', '뿌듯함'], slots: [{ id: 's1', label: '짝과 나누었어요' }] }, free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '짝과 나눈 물음 가운데 서너 개를 칠판 \'우리 반 물음판\'에 붙인다. "물음판의 물음은 다음 시간부터 함께 알아볼 거예요." 물음을 못 만든 학생은 친구 물음 가운데 같이 궁금한 것에 이름 자석을 붙이게 한다. 출구 질문을 푼다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', basket: '물음 문장', cards: ['한복은 언제 입을까요?', '태권도는 어디에서 시작되었을까요?', '김치는 배추로 담가요.'] }, prompt: '카드 가운데 물음 문장만 골라 보세요.', target: { pick: ['한복은 언제 입을까요?', '태권도는 어디에서 시작되었을까요?'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '"우리나라는 다 알아"라는 생각이 들 때 하면 좋은 것은 무엇일까요?', options: ['아직 궁금한 것을 물음으로 만들어요', '더 알아보지 않고 그만둬요', '모르는 친구를 놀려요'], answer: 0, difficulty: 0.05, explain: '다 안다고 생각해도 궁금한 것을 찾으면 더 알 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '새로 안 것과 궁금한 것',
      items: [
        { type: 'table', prompt: '새로 안 것을 하나씩 쓰세요.', columns: ['태극기', '무궁화', '한글'], rows: 1 },
        { type: 'check', prompt: '물음 문장에 모두 ✓ 하세요.', options: ['한글은 누가 만들었을까요?', '무궁화는 우리나라 꽃이에요.', '태극기는 어디에 달까요?'], answer: ['한글은 누가 만들었을까요?', '태극기는 어디에 달까요?'] },
        { type: 'blank', prompt: '물음이 되게 빈칸을 채우세요.', text: '무궁화는 ( ) 필까요?', answer: '언제' },
        { type: 'short', prompt: '우리나라에 대해 더 알고 싶은 것을 물음 문장으로 쓰세요.' },
      ],
      easy: {
        note: '물음은 \'~까요?\'로 끝나요.',
        items: [
          { type: 'choice', prompt: '물음 문장에 ○ 하세요.', options: ['무궁화는 언제 필까요?', '무궁화는 예뻐요.'], answer: '무궁화는 언제 필까요?' },
          { type: 'short', prompt: '새로 안 것 하나를 쓰세요.' },
          { type: 'short', prompt: '궁금한 것 하나를 \'~까요?\'로 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 맞게 놓으면 초록 테두리가 생겨요. 물음은 \'~까요?\'로 끝내기만 하면 돼요.',
      base: '새로 안 것을 세 갈래로 나누고, 궁금한 것을 물음으로 바꾸어요.',
      challenge: '카드가 여섯 장으로 늘어나요. \'언제·왜·어디\'를 써서 물음을 두 개 만들어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① "다 알아요"라며 물음을 만들지 않는다 → 교사가 답을 모르는 물음 하나를 먼저 보여 준다. ② 물음 끝을 \'~요.\'로 맺는다 → 끝말을 \'~까요?\'로 바꾸어 소리 내어 읽게 한다. ③ 물음판의 물음을 정답 맞히기로만 여긴다 → 다음 시간에 알아볼 방법을 함께 찾을 것이라고 알려 준다.',
  }));

  lessons.push(L(34, {
    title: '우리나라 지도에서 서울·제주도·독도 찾기',
    objective: '우리나라 칸 지도에서 서울·제주도·독도를 찾아 핀을 꽂고, 지도만으로는 알 수 없어 더 알아볼 것을 고를 수 있다.',
    illustration: ART('a simple paper map of the Korean peninsula surrounded by blue paper sea, with a star for Seoul, a small island in the east sea and a larger island in the south, a child placing a pin', '우리나라 지도', [
      { motif: 'wave', x: 120, y: 236 }, { motif: 'mountain', x: 390, y: 210 }, { motif: 'star', x: 330, y: 70, s: 0.6 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '교실 벽의 우리나라 지도를 가리킨다. "우리나라는 어떻게 생겼나요? 바다는 어디에 있나요?" 학생들이 손가락으로 바다를 짚게 한다. "오늘은 칸으로 그린 쉬운 우리나라 지도에서 서울·제주도·독도를 찾아요. 지도 위쪽이 북쪽이에요." 시연 단추로 핀이 서울에 꽂히는 모습을 보여 준다. 우리 지역이 어디쯤인지도 함께 짚어 준다.',
        student: '우리나라 지도에서 바다가 있는 쪽을 손가락으로 짚어 봐요.',
        demo: { tool: 'map', options: KOR_MAP, sequence: [{ place: '서울' }] },
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 지도에서 장소 찾아 핀 꽂기', minutes: 15, tool: 'map', options: KOR_MAP,
            teacher: '"서울은 우리나라의 수도예요. 수도는 나라의 큰일을 맡아 보는 곳이 모인 도시예요." 별 모양 기호를 함께 찾는다. "제주도는 우리나라에서 가장 큰 섬, 독도는 우리나라 동쪽 끝에 있는 섬이에요." 섬 기호가 두 개라 헷갈리는 학생에게는 "남쪽 바다에 있나요, 동쪽 바다에 있나요?" 하고 묻는다. 도전 단계는 장소 이름이 보이지 않으니 기호와 방향으로 찾게 한다.',
            task: '핀을 끌거나 칸을 눌러 꽂아요. 방향키로도 한 칸씩 옮길 수 있어요.',
            levels: MAP_LV,
            items: [
              { prompt: '우리나라의 수도 서울을 찾아 핀을 꽂아 보세요.', state: { pin: null }, target: { place: '서울' }, difficulty: 0.05,
                hints: ['수도는 별이 든 동그라미 기호로 나타내요.', '핀을 꽂은 칸의 기호를 보세요. 별이 든 동그라미가 아니면 다른 곳이에요.', '지도 가운데쯤 왼쪽, 별이 든 동그라미 기호가 있는 칸에 꽂아요.'] },
              { prompt: '우리나라에서 가장 큰 섬, 남쪽 바다의 제주도를 찾아 핀을 꽂아 보세요.', state: { pin: null }, target: { place: '제주도' }, difficulty: 0.1,
                hints: ['섬은 바다 위에 땅이 떠 있는 기호예요. 지도 아래쪽이 남쪽이에요.', '섬 기호는 두 개예요. 꽂은 섬이 남쪽 바다에 있는지 살펴요.', '지도 맨 아래 줄 남쪽 바다의 섬 기호에 꽂아요.'] },
              { prompt: '우리나라 동쪽 끝에 있는 섬, 독도를 찾아 핀을 꽂아 보세요.', state: { pin: null }, target: { place: '독도' }, difficulty: 0.15,
                hints: ['지도 오른쪽이 동쪽이에요. 동쪽 바다에서 섬 기호를 찾아요.', '꽂은 칸이 동쪽 바다 맨 끝에 있는지 보세요. 남쪽 바다의 섬은 제주도예요.', '서울과 같은 줄을 따라 오른쪽 바다 끝까지 가면 섬 기호가 있어요.'],
                predict: { q: '독도는 서울에서 어느 쪽에 있을까요?', options: ['동쪽', '서쪽'], answer: 0 },
                conclude: '독도는 우리나라 동쪽 바다 끝에 있는 섬이에요.' },
              { prompt: '지도를 보고 답해요. 우리나라는 몇 쪽이 바다와 맞닿아 있나요?', toolOptions: { readOnly: true, ask: { q: '우리나라는 몇 쪽이 바다와 맞닿아 있나요?', choices: ['세 쪽', '한 쪽', '네 쪽'] } }, target: { pick: 0 }, difficulty: 0.15,
                hints: ['바다 칸을 동쪽·서쪽·남쪽·북쪽 차례로 하나씩 손가락으로 짚어 보세요.', '북쪽 끝에도 바다가 있는지 다시 보세요. 위쪽 줄은 땅으로 이어져요.', '서쪽·남쪽·동쪽에 바다가 있고 북쪽은 땅이에요. 그래서 세 쪽이에요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 지도로 알 수 있는 것과 더 알아볼 것', minutes: 13, tool: 'mindmap',
            teacher: '"지도를 보면 독도가 동쪽에 있다는 것은 알 수 있어요. 그런데 독도에 어떤 새가 사는지도 지도에 나와 있나요?" 지도에 없는 것은 더 알아보아야 한다는 것을 짚는다. 물음 카드를 장소별로 나눈 뒤, 짝 활동에서는 가 보고 싶은 곳 하나와 그곳에 대한 물음 하나를 말한다.',
            task: '지도로 알 수 있는 것을 고르고, 물음을 장소별로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '지도만 보아도 알 수 있는 것을 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '지도로 알 수 있어요', cards: ['독도는 서울의 동쪽에 있어요', '제주도는 바다로 둘러싸인 섬이에요', '독도에 사는 새의 이름', '한라산의 높이가 몇 미터인지'] },
                target: { pick: ['독도는 서울의 동쪽에 있어요', '제주도는 바다로 둘러싸인 섬이에요'] }, difficulty: 0.2,
                hints: ['지도에는 장소의 자리와 바다·땅이 그려져 있어요. 그 밖의 것은 나와 있지 않아요.', '고른 카드를 지도에서 찾아보세요. 지도에 새 그림이나 높이 숫자가 있나요?', '자리와 바다를 말하는 카드 두 장을 골라요. 새 이름과 산 높이는 더 알아보아야 해요.'] },
              { prompt: '더 알고 싶은 물음을 장소별로 나누어 보세요.', toolOptions: { topic: '더 알고 싶은 물음', slots: ['서울', '제주도', '독도'], cards: ['서울에는 어떤 옛 궁궐이 있을까요?', '제주도의 한라산은 얼마나 높을까요?', '독도에는 어떤 새가 살까요?'] },
                target: { sort: { '서울': ['서울에는 어떤 옛 궁궐이 있을까요?'], '제주도': ['제주도의 한라산은 얼마나 높을까요?'], '독도': ['독도에는 어떤 새가 살까요?'] } }, difficulty: 0.05,
                levels: { challenge: { prompt: '물음 카드 여섯 장을 장소별로 나누어 보세요.', toolOptions: { cards: ['서울에는 어떤 옛 궁궐이 있을까요?', '서울 한가운데에는 어떤 강이 흐를까요?', '제주도의 한라산은 얼마나 높을까요?', '제주도에는 어떤 과일이 많이 날까요?', '독도에는 어떤 새가 살까요?', '독도까지 배로 얼마나 걸릴까요?'] }, target: { sort: { '서울': ['서울에는 어떤 옛 궁궐이 있을까요?', '서울 한가운데에는 어떤 강이 흐를까요?'], '제주도': ['제주도의 한라산은 얼마나 높을까요?', '제주도에는 어떤 과일이 많이 날까요?'], '독도': ['독도에는 어떤 새가 살까요?', '독도까지 배로 얼마나 걸릴까요?'] } } } } },
              { prompt: '짝에게 지도에서 가 보고 싶은 곳 하나와 그곳에 대해 궁금한 물음 하나를 말하고, 짝의 말도 들은 뒤 "다 했어요"를 누르세요.', toolOptions: { topic: '가 보고 싶은 곳', slots: ['서울', '제주도', '독도'], cards: ['가 보고 싶어요'] }, free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"오늘 지도에서 새로 안 곳은 어디인가요?" 두세 명이 말한다. 짝과 말한 물음은 물음판에 더 붙인다. "지도에 없는 것은 어떻게 알아볼 수 있을까요? 다음 시간에 방법을 찾아요." 출구 질문을 푼다.',
        exitTicket: [
          { type: 'tool', tool: 'map', options: KOR([P_SEOUL, P_BUSAN, P_JEJU]), state: { pin: null }, prompt: '바닷가에 있는 항구 도시, 부산을 찾아 핀을 꽂아 보세요.', target: { place: '부산' }, difficulty: 0.1 },
          { type: 'choice', prompt: '독도는 우리나라 어느 쪽 끝에 있는 섬일까요?', options: ['동쪽', '서쪽', '북쪽'], answer: 0, difficulty: 0.1, explain: '독도는 우리나라 동쪽 바다 끝에 있는 섬이에요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '우리나라 지도',
      items: [
        { type: 'figure', prompt: '지도에서 서울에 ○, 독도에 △ 하세요.', tool: 'map', figures: [{ options: KOR([P_SEOUL, P_DOKDO, P_JEJU], { names: false }), caption: '우리나라 칸 지도' }], answer: '별이 든 동그라미 칸에 ○, 동쪽 바다 섬에 △' },
        { type: 'table', prompt: '장소마다 지도에서 안 것을 쓰세요.', columns: ['장소', '지도에서 안 것'], cells: [['서울', ''], ['제주도', ''], ['독도', '']] },
        { type: 'choice', prompt: '우리나라에서 가장 큰 섬에 ○ 하세요.', options: ['제주도', '독도'], answer: '제주도' },
        { type: 'short', prompt: '가 보고 싶은 곳에 대해 궁금한 것을 물음 문장으로 쓰세요.' },
      ],
      easy: {
        note: '지도 위쪽은 북쪽, 오른쪽은 동쪽이에요.',
        items: [
          { type: 'choice', prompt: '우리나라의 수도에 ○ 하세요.', options: ['서울', '독도'], answer: '서울' },
          { type: 'choice', prompt: '동쪽 끝에 있는 섬에 ○ 하세요.', options: ['독도', '제주도'], answer: '독도' },
          { type: 'draw', prompt: '가 보고 싶은 곳을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '지도에 장소 이름과 핀 자리 글자가 보여요. 기호를 손가락으로 짚으며 찾아요.',
      base: '장소 이름을 보고 핀을 꽂고, 지도로 알 수 있는 것과 더 알아볼 것을 나누어요.',
      challenge: '장소 이름이 보이지 않아요. 기호와 동서남북으로 찾고, 물음 카드도 여섯 장이에요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 제주도와 독도를 헷갈린다 → \'남쪽의 큰 섬\', \'동쪽 끝의 작은 섬\'으로 짝지어 말하게 한다. ② 지도의 오른쪽·왼쪽을 내 몸의 오른쪽·왼쪽과 섞는다 → 지도에서는 위가 북, 오른쪽이 동이라고 방위를 칠판에 붙여 둔다. ③ 칸 지도라 실제 모양과 다르다고 묻는다 → 칸 지도는 자리만 어림해 그린 그림이고, 실제 모양은 벽의 지도로 함께 견준다.',
  }));

  lessons.push(L(35, {
    title: '궁금한 것을 알아볼 방법 고르고 지도로 답 찾기',
    objective: '물음마다 알맞은 알아볼 방법(책·누리집, 어른께 여쭙기, 직접 둘러보기, 지도 보기)을 고르고, 지도를 읽어 물음의 답을 찾을 수 있다.',
    illustration: ART('a paper child holding a magnifying glass over a layered paper relief map of Korea with a tall mountain in the north, books and a grandmother nearby', '알아볼 방법 고르기', [
      { motif: 'mountain', x: 390, y: 210 }, { motif: 'tree', x: 80, y: 214 }, { motif: 'star', x: 330, y: 70, s: 0.6 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '물음판에서 \'독도에는 어떤 새가 살까요?\'와 \'할머니는 어릴 때 태극기를 어떻게 다셨을까요?\'를 떼어 온다. "두 물음은 같은 방법으로 알아볼 수 있을까요?" 학생 생각을 듣고 "물음마다 알맞은 방법이 달라요. 오늘은 방법을 고르고, 지도로 답을 찾아 봐요." 시연 단추로 \'부산은 서울에서 어느 쪽에 있을까요?\'에 \'지도를 살펴봐요\'가 이어지는 모습을 보여 준다.',
        student: '궁금한 것이 생기면 나는 보통 어떻게 알아보나요?',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '알아볼 방법', slots: [{ id: 's1', label: '부산은 서울에서 어느 쪽에 있을까요?' }], cards: ['지도를 살펴봐요', '어른께 여쭤봐요'], shuffle: false }, sequence: [{ match: { s1: '지도를 살펴봐요' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 물음마다 알아볼 방법 고르기', minutes: 14, tool: 'mindmap',
            teacher: '"할머니가 어릴 때 일은 책에 나올까요? 할머니께 여쭤보는 것이 가장 좋겠지요." 물음마다 \'누가 그 답을 알고 있을까\'를 먼저 생각하게 한다. 누리집을 볼 때는 꼭 어른과 함께 보고, 이름·주소 같은 내 정보는 쓰지 않는다는 약속을 짚는다.',
            task: '물음과 알아볼 방법을 잇고, 방법을 나누고, 알아볼 때 지킬 것을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '물음마다 가장 알맞은 알아볼 방법 카드를 이어 보세요.', toolOptions: { mode: 'match', topic: '알아볼 방법', slots: [{ id: 's1', label: '부산은 서울에서 어느 쪽에 있을까요?' }, { id: 's2', label: '할머니는 어릴 때 태극기를 어떻게 다셨을까요?' }, { id: 's3', label: '우리 학교에서 태극기가 걸린 곳은 어디일까요?' }], cards: ['지도를 살펴봐요', '할머니께 여쭤봐요', '학교를 직접 둘러봐요'] },
                target: { match: { s1: '지도를 살펴봐요', s2: '할머니께 여쭤봐요', s3: '학교를 직접 둘러봐요' } }, difficulty: 0.15,
                hints: ['그 물음의 답을 누가, 어디에서 알고 있을지 먼저 생각해요.', '이은 방법으로 정말 답을 알 수 있는지 하나씩 따져 보세요. 할머니 어릴 적 일이 지도에 나올까요?', '자리는 지도, 할머니 어릴 적 일은 할머니, 우리 학교에 걸린 곳은 직접 둘러보며 알아요.'],
                levels: { challenge: { prompt: '물음 네 개마다 가장 알맞은 알아볼 방법 카드를 이어 보세요.', toolOptions: { slots: [{ id: 's1', label: '부산은 서울에서 어느 쪽에 있을까요?' }, { id: 's2', label: '할머니는 어릴 때 태극기를 어떻게 다셨을까요?' }, { id: 's3', label: '우리 학교에서 태극기가 걸린 곳은 어디일까요?' }, { id: 's4', label: '독도에는 어떤 새가 살까요?' }], cards: ['지도를 살펴봐요', '할머니께 여쭤봐요', '학교를 직접 둘러봐요', '책이나 누리집에서 찾아봐요'] }, target: { match: { s1: '지도를 살펴봐요', s2: '할머니께 여쭤봐요', s3: '학교를 직접 둘러봐요', s4: '책이나 누리집에서 찾아봐요' } } } } },
              { prompt: '알아볼 방법을 \'혼자 찾아봐요\'와 \'다른 사람에게 물어요\'로 나누어 보세요.', toolOptions: { topic: '알아볼 방법', slots: ['혼자 찾아봐요', '다른 사람에게 물어요'], cards: ['책을 읽어요', '지도를 살펴봐요', '어른께 여쭤봐요', '친구에게 물어봐요'] },
                target: { sort: { '혼자 찾아봐요': ['책을 읽어요', '지도를 살펴봐요'], '다른 사람에게 물어요': ['어른께 여쭤봐요', '친구에게 물어봐요'] } }, difficulty: 0.05 },
              { prompt: '누리집으로 알아볼 때 지킬 약속만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '지킬 약속', cards: ['어른과 함께 찾아봐요', '찾은 누리집 이름을 적어 둬요', '보이는 광고를 아무거나 눌러요', '내 이름과 주소를 써 넣어요'] },
                target: { pick: ['어른과 함께 찾아봐요', '찾은 누리집 이름을 적어 둬요'] }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 높이 지도를 읽어 물음의 답 찾기', minutes: 14, tool: 'map', options: KOR([P_SEOUL, P_BUSAN, P_JEJU], { heights: KOR_HEIGHTS }),
            teacher: '"이 지도는 땅의 높이를 색으로 나타냈어요. 오른쪽 띠의 색을 보면 낮은 땅인지 높은 산인지 알 수 있어요." 높이 띠를 함께 읽는다. 가장 높은 곳을 찾은 뒤 "그곳이 우리나라에서 가장 높은 산, 백두산이에요"라고 알려 준다. 칸 지도라 실제 높이 숫자는 나오지 않는다는 것도 짚는다.',
            task: '지도의 높이 색과 기호를 읽어 물음의 답을 찾아요.',
            levels: MAP_LV,
            items: [
              { prompt: '우리나라에서 가장 높은 산은 어디에 있을까요? 높이 색을 보고 가장 높은 칸에 핀을 꽂아 보세요.', state: { pin: null }, target: { highest: true }, difficulty: 0.15,
                predict: { q: '가장 높은 산은 북쪽에 있을까요, 남쪽에 있을까요?', options: ['북쪽', '남쪽'], answer: 0 },
                conclude: '가장 높은 산은 북쪽 끝의 백두산이에요.' },
              { prompt: '지도를 보고 답해요. 서울과 부산 가운데 바다와 맞닿은 곳은 어디일까요?', toolOptions: { readOnly: true, ask: { q: '서울과 부산 가운데 바다와 맞닿은 곳은 어디일까요?', choices: ['부산', '서울'] } }, target: { pick: 0 }, difficulty: 0.1,
                hints: ['두 곳의 칸 둘레에 바다 칸이 붙어 있는지 살펴요.', '서울 칸의 둘레를 다시 보세요. 바로 옆 칸이 모두 땅인지 바다인지 봐요.', '부산 칸은 아래와 오른쪽이 바다예요. 그래서 부산은 항구 도시예요.'] },
              { prompt: '지도를 보고 답해요. 제주도에 있는 한라산은 어떤 높이 색일까요?', toolOptions: { readOnly: true, ask: { q: '제주도 칸은 어떤 높이 색일까요?', choices: ['높은 산', '낮은 땅', '바다'] } }, target: { pick: 0 }, difficulty: 0.15,
                hints: ['제주도 칸의 색을 오른쪽 높이 띠의 색과 견주어요.', '제주도 둘레는 바다이지만 제주도 칸의 색은 달라요. 칸 안의 색만 보세요.', '제주도 칸의 색은 높이 띠에서 \'높은 산\'의 색과 같아요.'] },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"오늘 지도로 답을 찾은 물음은 무엇이었나요? 지도로 답을 찾을 수 없는 물음은 어떻게 할까요?" 물음판의 물음마다 알아볼 방법 쪽지를 붙인다. 집에서 어른께 여쭤볼 물음 하나를 정해 가게 하고 출구 질문을 푼다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '알아볼 방법', slots: [{ id: 'e1', label: '아빠가 어릴 때 좋아한 놀이는 무엇일까요?' }, { id: 'e2', label: '제주도는 서울에서 어느 쪽에 있을까요?' }] , cards: ['아빠께 여쭤봐요', '지도를 살펴봐요'] }, prompt: '물음과 알아볼 방법을 이어 보세요.', target: { match: { e1: '아빠께 여쭤봐요', e2: '지도를 살펴봐요' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '누리집에서 우리나라를 알아볼 때 바른 모습은 무엇일까요?', options: ['어른과 함께 찾아봐요', '내 주소를 써 넣어요', '광고를 눌러 봐요'], answer: 0, difficulty: 0.05, explain: '누리집은 어른과 함께 보고, 내 정보는 쓰지 않아요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '알아볼 방법 고르기',
      items: [
        { type: 'table', prompt: '물음마다 알아볼 방법을 쓰세요.', columns: ['물음', '알아볼 방법'], cells: [['부산은 서울에서 어느 쪽에 있을까요?', ''], ['할머니는 어릴 때 무엇을 하고 노셨을까요?', ''], ['독도에는 어떤 새가 살까요?', '']] },
        { type: 'figure', prompt: '높이 지도에서 가장 높은 곳에 ○ 하세요.', tool: 'map', figures: [{ options: KOR([], { heights: KOR_HEIGHTS }), caption: '우리나라 높이 지도' }], answer: '맨 위 줄 가운데 칸(백두산)' },
        { type: 'check', prompt: '누리집으로 알아볼 때 지킬 약속에 모두 ✓ 하세요.', options: ['어른과 함께 봐요', '내 이름을 써 넣어요', '찾은 곳을 적어 둬요'], answer: ['어른과 함께 봐요', '찾은 곳을 적어 둬요'] },
        { type: 'short', prompt: '집에서 어른께 여쭤볼 물음 하나를 쓰세요.' },
      ],
      easy: {
        note: '"누가 그 답을 알고 있을까?" 먼저 생각해요.',
        items: [
          { type: 'choice', prompt: '할머니 어릴 적 일을 알아보는 방법에 ○ 하세요.', options: ['할머니께 여쭤봐요', '지도를 봐요'], answer: '할머니께 여쭤봐요' },
          { type: 'choice', prompt: '가장 높은 산에 ○ 하세요.', options: ['백두산', '한라산'], answer: '백두산' },
          { type: 'short', prompt: '어른께 여쭤볼 물음 하나를 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 맞게 놓으면 초록 테두리가 생겨요. 지도에는 장소 이름과 핀 자리 글자가 보여요.',
      base: '물음 세 개에 알맞은 방법을 잇고, 높이 지도를 읽어 답을 찾아요.',
      challenge: '물음이 네 개로 늘어나요. 지도에 장소 이름이 보이지 않아 기호와 색으로 답을 찾아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 모든 물음을 \'누리집\'으로 해결하려 한다 → \'그 답을 누가 알고 있을까\'를 먼저 묻는다. ② 높이 색과 바다 색을 헷갈린다 → 높이 띠를 손가락으로 짚으며 낮은 곳에서 높은 곳으로 읽게 한다. ③ 칸 지도의 높이는 어림한 것이다 — 백두산(2,744m)이 가장 높다는 것만 다루고, 한라산과 지리산의 높이 차례는 묻지 않는다.',
  }));

  lessons.push(L(36, {
    title: '지도 기호 읽고 알아낸 것 돌아보기',
    objective: '우리나라 지도의 기호 뜻을 범례에 채워 읽고, 우리나라에 대해 알아낸 것과 아직 남은 물음을 스스로 돌아볼 수 있다.',
    illustration: ART('a paper map of Korea with a small legend box showing a star circle, an island, a harbor anchor and a mountain, a child checking the legend with a finger', '지도 기호 읽기', [
      { motif: 'wave', x: 120, y: 236 }, { motif: 'mountain', x: 390, y: 210 }, { motif: 'flower', x: 90, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '지난 지도의 별이 든 동그라미 기호를 크게 보여 준다. "이 기호는 무엇을 나타냈나요?" "수도요!" "지도에서 기호의 뜻을 모아 둔 곳을 \'범례\'라고 해요. 오늘은 범례를 채우고, 지금까지 우리나라에 대해 알아낸 것을 돌아봐요." 시연 단추로 섬 기호 옆 빈칸에 \'섬\'이 채워지는 모습을 보여 준다.',
        student: '지난 시간 지도에서 본 기호를 하나 떠올려 말해 봐요.',
        demo: { tool: 'map', options: KOR([P_DOKDO], { mode: 'legend', meanings: { island: '섬' } }), sequence: [{ legend: { island: '섬' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 범례를 채우고 기호로 장소 찾기', minutes: 13, tool: 'map', options: KOR([P_SEOUL, P_BUSAN, P_JEJU, P_BAEKDU]),
            teacher: '"항구는 배가 드나드는 곳이에요. 닻 모양 기호로 나타내요." 기호의 모양과 뜻을 이어 말하게 한다. 범례를 다 채운 뒤에는 장소 이름을 가리고 기호만 보고 찾게 한다. "기호를 모르면 범례를 보면 돼요"를 되풀이한다.',
            task: '범례 빈칸을 눌러 기호의 뜻을 고르고, 기호만 보고 장소를 찾아요.',
            levels: { easy: { readout: true }, base: {}, challenge: { extra: ['공항', '학교'] } },
            items: [
              { prompt: '범례 빈칸마다 기호의 뜻을 골라 채워 보세요.', toolOptions: { mode: 'legend', meanings: { capital: '수도', port: '항구', island: '섬', mountain: '산' } }, state: { legend: {} }, target: { legend: { capital: '수도', port: '항구', island: '섬', mountain: '산' } }, difficulty: 0.15 },
              { prompt: '문화유산 기호가 더해진 지도예요. 범례 빈칸마다 기호의 뜻을 골라 채워 보세요.', toolOptions: { mode: 'legend', places: [P_SEOUL, P_BUSAN, P_GYEONGJU, P_JEJU], meanings: { capital: '수도', port: '항구', heritage: '문화유산', island: '섬' } }, state: { legend: {} }, target: { legend: { capital: '수도', port: '항구', heritage: '문화유산', island: '섬' } }, difficulty: 0.2,
                hints: ['기호의 모양을 보고 무엇을 닮았는지 떠올려요. 문 모양은 옛 건물이에요.', '채운 뜻을 기호 모양과 다시 견주어 보세요. 닻 모양에 \'섬\'을 넣은 곳이 있는지 살펴요.', '별이 든 동그라미는 수도, 닻은 항구, 아치 문은 문화유산, 바다 위 땅은 섬이에요.'] },
              { prompt: '장소 이름이 보이지 않아요. 범례를 보고 항구 기호가 있는 곳에 핀을 꽂아 보세요.', toolOptions: { names: false }, state: { pin: null }, target: { place: '부산' }, difficulty: 0.15,
                hints: ['범례에서 항구 기호의 모양을 먼저 찾아요.', '꽂은 칸의 기호가 범례의 항구 기호와 같은지 견주어 보세요.', '닻 모양 기호는 지도 아래쪽 오른쪽 바닷가에 있어요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 알아낸 것과 남은 물음 돌아보기', minutes: 15, tool: 'emotion',
            teacher: '"물음판의 물음 가운데 답을 찾은 것은 무엇인가요? 아직 못 찾은 것은요?" 답을 못 찾은 물음은 실패가 아니라 \'다음에 알아볼 물음\'이라고 말해 준다. 마음 척도는 정답이 없으니 내 마음 그대로 고르게 한다. 짝 활동에서는 우리나라를 소개하는 한 문장과 남은 물음 하나를 말한다.',
            task: '알아보는 차례를 정리하고, 답을 못 찾았을 때 할 일을 고르고, 내가 얼마나 알게 되었는지 솔직하게 표시해요.',
            levels: CARD_LV,
            items: [
              { prompt: '우리가 물음을 알아본 차례대로 카드를 놓아 보세요.', toolOptions: { mode: 'order', cards: ['알아낸 것을 친구에게 말해요', '궁금한 것을 물음으로 만들어요', '알아볼 방법을 골라요', '책·지도·어른께 알아봐요'] },
                target: { order: ['궁금한 것을 물음으로 만들어요', '알아볼 방법을 골라요', '책·지도·어른께 알아봐요', '알아낸 것을 친구에게 말해요'] }, difficulty: 0.1,
                hints: ['무엇을 알아볼지 정해야 방법을 고를 수 있어요. 지난 세 시간의 차례를 떠올려요.', '놓은 차례대로 읽어 보세요. 물음을 만들기 전에 알아보는 자리가 있는지 살펴요.', '물음 만들기 → 방법 고르기 → 알아보기 → 친구에게 말하기 차례예요.'] },
              { prompt: '하준이는 \'독도에는 어떤 새가 살까요?\'의 답을 아직 못 찾았어요. 어떻게 하면 좋을까요?', toolOptions: { mode: 'branch', who: '하준', situation: '물음의 답을 지도에서 찾지 못했어요.', choices: [
                { id: 'other', text: '도서관에서 독도 책을 빌려 다른 방법으로 알아봐요', result: '책에서 독도에 사는 새 사진을 찾았어요.', mood: '뿌듯함' },
                { id: 'quit', text: '"못 찾았으니 그만할래" 하고 물음을 버려요', result: '궁금한 것이 그대로 남아요.', mood: '아쉬움', why: '한 방법으로 못 찾으면 다른 방법을 써 볼 수 있어요.' },
                { id: 'make', text: '아무 새 이름이나 지어서 써요', result: '친구들이 틀린 것을 사실로 알게 돼요.', mood: '걱정', why: '모르는 것은 지어내지 않고 알아봐요.' }] }, target: { choice: 'other' }, difficulty: 0.1 },
              { prompt: '단원을 시작할 때보다 우리나라에 대해 새로 안 것이 얼마나 많아졌나요? 내 마음 그대로 골라요.', toolOptions: { mode: 'scale', situation: '우리나라에 대해 새로 안 것', feeling: '뿌듯함', steps: 3, scaleLabels: { 1: '조금', 2: '꽤', 3: '아주 많이' } }, target: { level: 'any' }, difficulty: 0.05 },
              { prompt: '짝에게 우리나라를 소개하는 한 문장과 아직 남은 물음 하나를 말하고 "다 했어요"를 누르세요.', toolOptions: { cards: ['뿌듯함', '신남'], slots: [{ id: 's1', label: '짝에게 말했어요' }] }, free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '물음판에서 답을 찾은 물음에는 초록 붙임딱지, 남은 물음에는 노랑 붙임딱지를 붙인다. "노랑 물음은 언제든 다시 알아볼 수 있어요." 다음 시간부터는 \'나\'에 대해 알아본다고 예고하고 출구 질문을 푼다.',
        exitTicket: [
          { type: 'tool', tool: 'map', options: KOR([P_SEOUL, P_DOKDO, P_BAEKDU], { mode: 'legend', meanings: { capital: '수도', island: '섬', mountain: '산' } }), state: { legend: {} }, prompt: '범례 빈칸마다 기호의 뜻을 골라 채워 보세요.', target: { legend: { capital: '수도', island: '섬', mountain: '산' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '지도에서 기호의 뜻을 모르면 어디를 보면 될까요?', options: ['범례', '지도 제목', '북쪽 화살표'], answer: 0, difficulty: 0.05, explain: '범례에 기호의 뜻이 모여 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '지도 기호와 알아낸 것',
      items: [
        { type: 'figure', prompt: '범례 빈칸에 기호의 뜻을 쓰세요.', tool: 'map', figures: [{ options: KOR([P_SEOUL, P_BUSAN, P_JEJU], { mode: 'legend', meanings: { capital: '수도', port: '항구', island: '섬' } }), caption: '우리나라 칸 지도' }], answer: '수도, 항구, 섬' },
        { type: 'table', prompt: '물음판의 물음을 정리하세요.', columns: ['답을 찾은 물음', '아직 남은 물음'], rows: 2 },
        { type: 'choice', prompt: '답을 못 찾았을 때 할 일에 ○ 하세요.', options: ['다른 방법으로 알아봐요', '답을 지어내요'], answer: '다른 방법으로 알아봐요' },
        { type: 'short', prompt: '우리나라를 소개하는 한 문장을 쓰세요.' },
      ],
      easy: {
        note: '기호의 뜻은 범례에 있어요.',
        items: [
          { type: 'choice', prompt: '배가 드나드는 곳을 나타내는 말에 ○ 하세요.', options: ['항구', '산'], answer: '항구' },
          { type: 'short', prompt: '우리나라에 대해 알아낸 것 하나를 쓰세요.' },
          { type: 'draw', prompt: '우리나라에서 가 보고 싶은 곳을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 맞게 놓으면 초록 테두리가 생겨요. 범례 기호를 손가락으로 짚으며 채워요.',
      base: '범례를 채우고, 기호만 보고 장소를 찾고, 알아낸 것을 돌아보아요.',
      challenge: '범례 보기에 함정 낱말(공항·학교)이 더 섞여 있어요. 남은 물음을 알아볼 방법까지 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 기호 모양을 외우려 한다 → 범례를 보면 된다는 것을 되풀이한다. ② 답을 못 찾은 물음이 있으면 부끄러워한다 → 남은 물음은 다음 탐구의 씨앗이라고 말해 준다. ③ 마음 척도에서 친구 눈치를 본다 → 정답이 없으니 내 마음 그대로 고르면 된다고 말한다.',
  }));

  // ───────────────────────── 37~40차시: 나에 대한 물음과 알아볼 방법(탐구 질문 만들기) ─────────────────────────

  lessons.push(L(37, {
    title: '나에 대해 궁금한 물음 만들어 물음 나무 꾸미기',
    objective: '나에 대한 물음과 다른 것에 대한 물음을 가려내고, 나에 대해 알고 싶은 것을 물음 문장 세 개로 만들 수 있다.',
    illustration: ART('a paper tree on a classroom wall whose green leaves each carry a small question mark, a child sticking a new leaf on a branch', '나에 대한 물음 나무', [
      { motif: 'tree', x: 90, y: 214 }, { motif: 'leaf', x: 380, y: 200 }, { motif: 'star', x: 330, y: 70, s: 0.6 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"나는 나에 대해 다 알고 있을까요?" 대부분 "네!"라고 대답한다. "그럼 내가 아기 때 처음 한 말은 무엇이었나요? 내 이름에는 어떤 뜻이 있나요?" 대답이 막히면 "나도 아직 모르는 내가 많아요. 오늘은 나에 대해 궁금한 것을 물음으로 만들어요." 시연 단추로 \'나는 무엇을 할 때 가장 즐거울까?\' 카드가 \'나에 대한 물음\' 가지에 놓이는 모습을 보여 준다.',
        student: '내가 아기 때 처음 한 말을 알고 있나요? 모르면 무엇이 궁금한지 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '물음 나누기', slots: ['나에 대한 물음', '다른 것에 대한 물음'], cards: ['나는 무엇을 할 때 가장 즐거울까?'], shuffle: false }, sequence: [{ sort: { '나에 대한 물음': ['나는 무엇을 할 때 가장 즐거울까?'], '다른 것에 대한 물음': [] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 나에 대한 물음 가려내고 만들기', minutes: 13, tool: 'mindmap',
            teacher: '"물음 속에 \'나\'나 \'내\'가 들어 있나요? 그 물음의 답을 알면 나를 더 알게 되나요?" 두 가지를 따져 카드를 나누게 한다. 빈칸 문항은 소리 내어 읽어 말이 자연스러운 카드를 고르게 한다.',
            task: '나에 대한 물음을 가려내고, 궁금한 것과 물음을 이어 물음 문장을 완성해요.',
            levels: CARD_LV,
            items: [
              { prompt: '물음 카드를 나에 대한 물음과 다른 것에 대한 물음으로 나누어 보세요.', toolOptions: { topic: '물음 나누기', slots: ['나에 대한 물음', '다른 것에 대한 물음'], cards: ['나는 무엇을 할 때 가장 즐거울까?', '나는 어떤 음식을 가장 좋아할까?', '하늘은 왜 파랄까?', '강아지는 몇 년을 살까?'] },
                target: { sort: { '나에 대한 물음': ['나는 무엇을 할 때 가장 즐거울까?', '나는 어떤 음식을 가장 좋아할까?'], '다른 것에 대한 물음': ['하늘은 왜 파랄까?', '강아지는 몇 년을 살까?'] } }, difficulty: 0.05,
                levels: { challenge: { prompt: '물음 카드 여섯 장을 나에 대한 물음과 다른 것에 대한 물음으로 나누어 보세요.', toolOptions: { cards: ['나는 무엇을 할 때 가장 즐거울까?', '나는 어떤 음식을 가장 좋아할까?', '내 이름에는 어떤 뜻이 있을까?', '하늘은 왜 파랄까?', '강아지는 몇 년을 살까?', '비는 어디에서 올까?'] }, target: { sort: { '나에 대한 물음': ['나는 무엇을 할 때 가장 즐거울까?', '나는 어떤 음식을 가장 좋아할까?', '내 이름에는 어떤 뜻이 있을까?'], '다른 것에 대한 물음': ['하늘은 왜 파랄까?', '강아지는 몇 년을 살까?', '비는 어디에서 올까?'] } } } } },
              { prompt: '궁금한 것마다 알맞은 물음 카드를 이어 보세요.', toolOptions: { mode: 'match', topic: '나에 대한 물음', slots: [{ id: 's1', label: '내가 잘하는 것' }, { id: 's2', label: '아기 때 내 모습' }, { id: 's3', label: '내 이름의 뜻' }], cards: ['나는 무엇을 잘할까?', '나는 아기 때 어떤 모습이었을까?', '내 이름에는 어떤 뜻이 있을까?'] },
                target: { match: { s1: '나는 무엇을 잘할까?', s2: '나는 아기 때 어떤 모습이었을까?', s3: '내 이름에는 어떤 뜻이 있을까?' } }, difficulty: 0.05 },
              { prompt: '물음 문장의 빈칸에 알맞은 카드를 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['무엇을', '어디를', '어떤', '언제'], slots: [{ id: 'b1', label: '나는 ___ 할 때 가장 즐거울까?' }, { id: 'b2', label: '내 이름에는 ___ 뜻이 있을까?' }] },
                target: { fill: { b1: '무엇을', b2: '어떤' } }, difficulty: 0.15,
                hints: ['카드를 빈칸에 넣고 문장을 소리 내어 읽어 보세요. 말이 자연스러운 카드를 골라요.', '넣은 카드로 문장을 다시 읽어 보세요. \'어디를 할 때\', \'언제 뜻\'처럼 어색한 말이 있는지 살펴요.', '\'나는 무엇을 할 때 가장 즐거울까?\', \'내 이름에는 어떤 뜻이 있을까?\'가 돼요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 우리 반 물음 나무 꾸미기 (표현)', minutes: 15, tool: 'collage',
            teacher: '"나뭇잎 하나에 물음 하나예요." 색종이 판에서 줄기와 나뭇잎을 붙여 내 물음 나무를 꾸미게 한다. 그다음 활동지 나뭇잎 모양 쪽지에 내 물음을 세 개 쓰고 오려 교실 뒤 \'우리 반 물음 나무\'에 붙인다. 물음을 못 만든 학생에게는 활동 1의 카드 가운데 하나를 골라 \'나는\'으로 시작해 바꾸어 쓰게 한다.',
            task: '줄기와 나뭇잎으로 물음 나무를 꾸미고, 종이 나뭇잎에 내 물음을 써서 우리 반 나무에 붙여요.',
            levels: { easy: { shapes: ['rect', 'leaf', 'circle'], colors: ['갈색', '초록', '빨강'] }, base: {}, challenge: {} },
            items: [
              { prompt: '물음 나무를 꾸며요. 갈색 긴 네모 줄기 한 개와 초록 나뭇잎 세 장을 붙여 보세요.', target: { has: [{ shape: 'rect', color: '갈색', n: 1 }, { shape: 'leaf', color: '초록', n: 3 }] }, difficulty: 0.1,
                levels: { challenge: { prompt: '열매가 달린 물음 나무를 꾸며요. 갈색 긴 네모 줄기 한 개, 초록 나뭇잎 세 장, 가장 궁금한 물음을 나타낼 빨강 동그라미 열매 한 개를 붙여 보세요.', target: { has: [{ shape: 'rect', color: '갈색', n: 1 }, { shape: 'leaf', color: '초록', n: 3 }, { shape: 'circle', color: '빨강', n: 1 }] } } } },
              { prompt: '종이 나뭇잎 세 장에 나에 대한 물음을 하나씩 쓰고, 우리 반 물음 나무에 붙인 뒤 "다 했어요"를 누르세요.', free: true, talk: true },
              { prompt: '내 물음 나무를 살펴보고 해낸 것을 하나씩 표시해요.', target: { selfCheck: ['나에 대한 물음을 세 개 썼어요', '물음을 \'~까?\'로 끝냈어요', '짝에게 가장 궁금한 물음을 말했어요'], minPieces: 4 }, difficulty: 0.05 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '우리 반 물음 나무 앞에 모인다. "친구 물음 가운데 나도 궁금한 것이 있나요?" 두세 명이 말한다. "이 물음들은 어떻게 알아볼 수 있을까요? 다음 시간에 방법을 찾아요." 출구 질문을 푼다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '물음 나누기', slots: ['나에 대한 물음', '다른 것에 대한 물음'], cards: ['나는 어떤 색을 좋아할까?', '고양이는 왜 밤에 눈이 빛날까?'] }, prompt: '두 물음을 나에 대한 물음과 다른 것에 대한 물음으로 나누어 보세요.', target: { sort: { '나에 대한 물음': ['나는 어떤 색을 좋아할까?'], '다른 것에 대한 물음': ['고양이는 왜 밤에 눈이 빛날까?'] } }, difficulty: 0.05 },
          { type: 'choice', prompt: '"나는 나를 다 알아서 궁금한 게 없어"라는 생각에 알맞은 말은 무엇일까요?', options: ['나도 아직 모르는 내가 있어요', '맞아요, 알아볼 것이 없어요', '친구만 알아보면 돼요'], answer: 0, difficulty: 0.05, explain: '아기 때 모습이나 이름의 뜻처럼 나도 모르는 내가 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '나에 대한 물음',
      items: [
        { type: 'check', prompt: '나에 대한 물음에 모두 ✓ 하세요.', options: ['나는 무엇을 잘할까?', '달은 왜 모양이 바뀔까?', '내 이름에는 어떤 뜻이 있을까?'], answer: ['나는 무엇을 잘할까?', '내 이름에는 어떤 뜻이 있을까?'] },
        { type: 'blank', prompt: '물음이 되게 빈칸을 채우세요.', text: '나는 ( ) 할 때 가장 즐거울까?', answer: '무엇을' },
        { type: 'table', prompt: '나뭇잎 쪽지에 쓸 내 물음 세 개를 쓰세요.', columns: ['나에 대한 물음'], rows: 3 },
        { type: 'draw', prompt: '내 물음 나무를 그리세요.' },
      ],
      easy: {
        note: '\'나는\'으로 시작해 \'~까?\'로 끝내요.',
        items: [
          { type: 'choice', prompt: '나에 대한 물음에 ○ 하세요.', options: ['나는 무엇을 잘할까?', '비는 왜 내릴까?'], answer: '나는 무엇을 잘할까?' },
          { type: 'short', prompt: '\'나는\'으로 시작하는 물음 하나를 쓰세요.' },
          { type: 'draw', prompt: '나뭇잎에 물음표를 그려 물음 나무를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 맞게 놓으면 초록 테두리가 생겨요. 색종이 판에는 쓸 모양과 색만 나와요. 물음은 하나만 써도 돼요.',
      base: '나에 대한 물음을 가려내고, 물음 세 개를 써서 물음 나무를 꾸며요.',
      challenge: '카드가 여섯 장이에요. 물음 나무에 가장 궁금한 물음 열매까지 달아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① "나는 나를 다 알아요"라며 물음을 만들지 못한다 → 아기 때, 이름의 뜻처럼 혼자 답할 수 없는 것을 먼저 묻는다. ② \'나는 피자를 좋아해.\'처럼 물음 대신 사실을 쓴다 → 끝을 \'~까?\'로 바꾸어 읽게 한다. ③ 가정 형편이나 아픈 기억이 드러날 물음(\'우리 집은 왜…\')을 쓰는 학생이 있으면 나무에 붙이지 않고 따로 이야기 나눈다.',
  }));

  lessons.push(L(38, {
    title: '물음마다 나를 알아볼 방법 고르고 여쭙기 연습하기',
    objective: '나에 대한 물음마다 알맞은 방법(가족께 여쭙기·친구에게 묻기·기록하기·직접 재기)을 고르고, 예의 바르게 묻는 말을 할 수 있다.',
    illustration: ART('a paper child politely asking a smiling grandmother a question while holding a small notebook, a ruler and a daily chart pinned nearby', '나를 알아볼 방법', [
      { motif: 'house', x: 90, y: 214 }, { motif: 'flower', x: 400, y: 230 }, { motif: 'star', x: 330, y: 70, s: 0.6 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '물음 나무에서 \'나는 아기 때 처음 무슨 말을 했을까?\'를 떼어 온다. "이 답은 누가 알고 있을까요? 내가 기억할 수 있나요?" "엄마요, 아빠요" 같은 대답을 받는다. "물음마다 답을 아는 사람, 알아낼 방법이 달라요." 시연 단추로 그 물음에 \'가족께 여쭤봐요\'가 이어지는 모습을 보여 준다.',
        student: '아기 때 일은 누구에게 물어보면 알 수 있을까요?',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '알아볼 방법', slots: [{ id: 's1', label: '아기 때 처음 한 말은 무엇일까?' }], cards: ['가족께 여쭤봐요', '자로 재 봐요'], shuffle: false }, sequence: [{ match: { s1: '가족께 여쭤봐요' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 물음과 알아볼 방법 잇기', minutes: 13, tool: 'mindmap',
            teacher: '"하루에 물을 몇 번 마시는지는 가족이 알까요? 내가 하루 동안 적어 봐야 알 수 있어요." 기록해야 알 수 있는 물음, 남에게 물어야 알 수 있는 물음, 직접 재야 알 수 있는 물음을 견주게 한다.',
            task: '물음마다 알맞은 방법을 잇고, 며칠 동안 적어야 알 수 있는 물음을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '물음마다 가장 알맞은 알아볼 방법 카드를 이어 보세요.', toolOptions: { mode: 'match', topic: '알아볼 방법', slots: [{ id: 's1', label: '아기 때 처음 한 말은 무엇일까?' }, { id: 's2', label: '친구들은 나를 어떤 친구라고 생각할까?' }, { id: 's3', label: '나는 하루에 물을 몇 번 마실까?' }], cards: ['가족께 여쭤봐요', '친구에게 물어봐요', '하루 동안 적어 봐요'] },
                target: { match: { s1: '가족께 여쭤봐요', s2: '친구에게 물어봐요', s3: '하루 동안 적어 봐요' } }, difficulty: 0.1,
                hints: ['그 물음의 답을 누가 알고 있는지, 아니면 내가 직접 해 봐야 아는지 생각해요.', '이은 방법으로 답을 알 수 있는지 하나씩 따져 보세요. 내가 물을 몇 번 마시는지 친구가 다 알까요?', '아기 때 일은 가족, 친구 생각은 친구, 물 마신 횟수는 하루 동안 적어 봐야 알아요.'],
                levels: { challenge: { prompt: '물음 네 개마다 가장 알맞은 알아볼 방법 카드를 이어 보세요.', toolOptions: { slots: [{ id: 's1', label: '아기 때 처음 한 말은 무엇일까?' }, { id: 's2', label: '친구들은 나를 어떤 친구라고 생각할까?' }, { id: 's3', label: '나는 하루에 물을 몇 번 마실까?' }, { id: 's4', label: '내 발 길이는 몇 cm일까?' }], cards: ['가족께 여쭤봐요', '친구에게 물어봐요', '하루 동안 적어 봐요', '자로 직접 재 봐요'] }, target: { match: { s1: '가족께 여쭤봐요', s2: '친구에게 물어봐요', s3: '하루 동안 적어 봐요', s4: '자로 직접 재 봐요' } } } } },
              { prompt: '며칠 동안 적어 봐야 답을 알 수 있는 물음만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '적어 봐야 알아요', cards: ['나는 일주일에 책을 몇 권 읽을까?', '나는 하루에 몇 번 웃을까?', '나는 몇 학년일까?', '내 짝의 이름은 무엇일까?'] },
                target: { pick: ['나는 일주일에 책을 몇 권 읽을까?', '나는 하루에 몇 번 웃을까?'] }, difficulty: 0.15,
                hints: ['\'몇 번\', \'몇 권\'처럼 여러 날 동안 세어야 하는 물음을 찾아요.', '고른 물음을 다시 읽어 보세요. 지금 바로 답할 수 있는 물음이 섞였는지 살펴요.', '책을 읽은 수와 웃은 수는 며칠 동안 적어야 알아요. 학년과 짝 이름은 지금 알아요.'] },
              { prompt: '알아볼 방법을 \'나 혼자 해요\'와 \'다른 사람이 있어야 해요\'로 나누어 보세요.', toolOptions: { topic: '알아볼 방법', slots: ['나 혼자 해요', '다른 사람이 있어야 해요'], cards: ['거울로 내 얼굴 살펴보기', '하루 기록표 쓰기', '할머니께 여쭙기', '짝에게 묻기'] },
                target: { sort: { '나 혼자 해요': ['거울로 내 얼굴 살펴보기', '하루 기록표 쓰기'], '다른 사람이 있어야 해요': ['할머니께 여쭙기', '짝에게 묻기'] } }, difficulty: 0.05 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 예의 바르게 여쭙고 묻기 연습', minutes: 15, tool: 'emotion',
            teacher: '교사가 할머니 역을 맡아 두 가지로 물어보게 한다. "빨리 말해 줘!"와 "할머니, 제가 아기 때 어땠는지 여쭤봐도 돼요?" "어느 쪽이 대답해 주고 싶나요?" 짝 활동에서는 짝에게 물음 하나를 공손하게 묻고, 들은 답을 활동지에 한 줄로 적는다. 짝이 대답하고 싶지 않다고 하면 다른 물음으로 바꾼다.',
            task: '공손하게 묻는 말을 고르고, 짝에게 물음 하나를 물어 들은 답을 적어요.',
            levels: CARD_LV,
            items: [
              { prompt: '어른께 여쭐 때 알맞은 말만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', weather: false, basket: '공손하게 여쭙는 말', cards: ['"할머니, 제가 아기 때 어땠는지 여쭤봐도 돼요?"', '"말씀해 주셔서 고맙습니다"', '"빨리 말해 줘!"', '"몰라도 돼, 그냥 아무거나 말해"'] },
                target: { pick: ['"할머니, 제가 아기 때 어땠는지 여쭤봐도 돼요?"', '"말씀해 주셔서 고맙습니다"'] }, difficulty: 0.05 },
              { prompt: '서아가 짝에게 "너는 나를 어떤 친구라고 생각해?" 하고 물었더니 짝이 "음… 말하기 어려워"라고 했어요. 서아는 어떻게 하면 좋을까요?', toolOptions: { mode: 'branch', who: '서아', situation: '짝이 "말하기 어려워"라고 했어요.', choices: [
                { id: 'wait', text: '"괜찮아. 그럼 내가 잘하는 것 하나만 말해 줄래?" 하고 바꾸어 물어요', result: '짝이 "너는 그림을 잘 그려" 하고 웃으며 말해 줘요.', mood: '고마움' },
                { id: 'push', text: '"빨리 말해! 꼭 말해야 해" 하고 다그쳐요', result: '짝이 곤란해서 고개를 숙여요.', mood: '미안함', why: '말하기 어려워하면 쉬운 물음으로 바꾸어 물어요.' },
                { id: 'angry', text: '"됐어, 너한테 안 물어" 하고 돌아서요', result: '짝도 서아도 마음이 상해요.', mood: '속상함', why: '친구 마음을 기다려 주고 다르게 물어볼 수 있어요.' }] }, target: { choice: 'wait' }, difficulty: 0.1 },
              { prompt: '대답을 들었을 때 서아와 짝의 마음을 이어 보세요.', toolOptions: { mode: 'match', weather: false, slots: [{ id: 's1', label: '짝이 내가 잘하는 것을 말해 주었어요' }, { id: 's2', label: '서아가 "고마워"라고 말해 주었어요' }], cards: ['고마움', '뿌듯함'] },
                target: { match: { s1: '고마움', s2: '뿌듯함' } }, difficulty: 0.15,
                hints: ['누가 무엇을 받았는지 먼저 살펴요. 좋은 말을 들은 사람과 고맙다는 말을 들은 사람이에요.', '좋은 말을 들은 서아는 짝에게 어떤 마음일까요? 이은 마음을 다시 읽어 봐요.', '좋은 말을 들은 서아는 고마움, 고맙다는 말을 들은 짝은 뿌듯함이에요.'] },
              { prompt: '짝에게 나에 대한 물음 하나를 공손하게 묻고, 들은 답을 활동지에 적은 뒤 "고마워"라고 말하고 "다 했어요"를 누르세요.', toolOptions: { cards: ['고마움', '뿌듯함'], slots: [{ id: 's1', label: '짝에게 묻고 적었어요' }] }, free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"짝에게 듣고 새로 안 것이 있나요?" 두세 명이 말한다. 우리 반 물음 나무의 내 물음마다 알아볼 방법을 작은 글씨로 덧붙이게 한다. 집에서 가족께 여쭐 물음 하나를 정해 가게 하고 출구 질문을 푼다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '알아볼 방법', slots: [{ id: 'e1', label: '내가 태어난 날 날씨는 어땠을까?' }, { id: 'e2', label: '나는 일주일에 우유를 몇 번 마실까?' }], cards: ['가족께 여쭤봐요', '일주일 동안 적어 봐요'] }, prompt: '물음과 알아볼 방법을 이어 보세요.', target: { match: { e1: '가족께 여쭤봐요', e2: '일주일 동안 적어 봐요' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '친구가 대답하기 어려워할 때 알맞은 모습은 무엇일까요?', options: ['쉬운 물음으로 바꾸어 물어요', '빨리 말하라고 다그쳐요', '다시는 묻지 않겠다고 해요'], answer: 0, difficulty: 0.05, explain: '친구 마음을 기다려 주고 다르게 물어볼 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '나를 알아볼 방법',
      items: [
        { type: 'table', prompt: '물음마다 알아볼 방법을 쓰세요.', columns: ['물음', '알아볼 방법'], cells: [['아기 때 처음 한 말은 무엇일까?', ''], ['나는 하루에 물을 몇 번 마실까?', ''], ['내 발 길이는 몇 cm일까?', '']] },
        { type: 'table', prompt: '짝에게 물은 것과 들은 답을 쓰세요.', columns: ['물은 것', '들은 답'], rows: 1 },
        { type: 'choice', prompt: '어른께 여쭐 때 알맞은 말에 ○ 하세요.', options: ['여쭤봐도 돼요?', '빨리 말해 줘!'], answer: '여쭤봐도 돼요?' },
        { type: 'short', prompt: '집에서 가족께 여쭐 물음을 쓰세요.' },
      ],
      easy: {
        note: '"누가 답을 알고 있을까?" 먼저 생각해요.',
        items: [
          { type: 'choice', prompt: '아기 때 일을 알아볼 방법에 ○ 하세요.', options: ['가족께 여쭤봐요', '자로 재 봐요'], answer: '가족께 여쭤봐요' },
          { type: 'short', prompt: '짝에게 들은 답을 한 줄로 쓰세요.' },
          { type: 'short', prompt: '가족께 여쭐 물음을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 맞게 놓으면 초록 테두리가 생겨요. 짝에게 물을 물음은 활동 1의 카드에서 골라도 돼요.',
      base: '물음 세 개에 방법을 잇고, 짝에게 공손하게 물어 답을 적어요.',
      challenge: '자로 재는 물음까지 네 개를 잇고, 짝에게 물음 두 개를 물어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 모든 물음을 \'엄마께 여쭤봐요\'로 해결하려 한다 → 그 사람이 정말 답을 아는지 따지게 한다. ② 짝의 답을 받아 적지 못한다 → 낱말 하나만 적어도 된다고 말한다. ③ 가족께 여쭙기 어려운 학생(돌봄 사정 등)이 있다 → \'나를 잘 아는 어른\'(돌봄 선생님, 친척)으로 넓혀 말한다.',
  }));

  lessons.push(L(39, {
    title: '자라 온 차례를 놓고 어릴 적 나에 대해 물음 만들기',
    objective: '아기 때부터 지금까지 자라 온 차례를 놓고, 어릴 적 나에 대해 가족께 여쭐 물음을 때에 맞게 만들 수 있다.',
    illustration: ART('a row of paper figures of the same child growing from a baby in a crib to a toddler, a kindergartener and a second grader with a school bag, connected by a ribbon timeline', '내가 자라 온 차례', [
      { motif: 'house', x: 80, y: 214 }, { motif: 'tree', x: 410, y: 214 }, { motif: 'star', x: 330, y: 70, s: 0.6 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '교사의 아기 때 사진(또는 아기·어린이 그림 카드)을 보여 준다. "선생님도 이렇게 작았어요. 여러분도 아기였지요?" "아기 때 나는 무엇을 할 수 있었을까요?" 학생 생각을 듣는다. 학생 사진을 가져오게 하지 않는다. 시연 단추로 \'누워서 지냈어요\' 카드가 맨 앞 눈금에 놓이는 모습을 보여 준다.',
        student: '아기 때 나는 무엇을 할 수 있었을지 말해 봐요.',
        demo: { tool: 'timeline', options: { axis: ['아기 때', '지금'], cards: ['누워서 지냈어요', '걸음마를 했어요'], shuffle: false }, sequence: [{ order: ['누워서 지냈어요', '걸음마를 했어요'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 자라 온 차례 놓기', minutes: 13, tool: 'timeline',
            teacher: '"걸음마는 누워 지낸 다음일까요, 그 전일까요?" 몸이 자라는 차례를 생각하며 놓게 한다. 사람마다 걸음마를 시작한 때는 다르지만 차례는 같다는 것을 짚는다. 준호의 이야기 문항은 \'어릴 때\'와 \'지금\'을 낱말로 가려 읽게 한다.',
            task: '아기 때부터 지금까지 자라 온 차례를 놓고, 그때 한 일을 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '아기 때부터 지금까지 자라 온 차례대로 카드를 놓아 보세요.', toolOptions: { axis: ['아기 때', '지금'], cards: ['2학년이 되었어요', '걸음마를 했어요', '누워서 지냈어요', '유치원에 다녔어요'] },
                target: { order: ['누워서 지냈어요', '걸음마를 했어요', '유치원에 다녔어요', '2학년이 되었어요'] }, difficulty: 0.05,
                levels: { challenge: { prompt: '아기 때부터 지금까지 자라 온 차례대로 카드 다섯 장을 놓아 보세요.', toolOptions: { cards: ['2학년이 되었어요', '걸음마를 했어요', '1학년에 들어갔어요', '누워서 지냈어요', '유치원에 다녔어요'] }, target: { order: ['누워서 지냈어요', '걸음마를 했어요', '유치원에 다녔어요', '1학년에 들어갔어요', '2학년이 되었어요'] } } } },
              { prompt: '때마다 그때 한 일 카드를 이어 보세요.', toolOptions: { mode: 'match', axis: ['아기 때', '지금'], slots: [{ id: 't1', label: '아기 때' }, { id: 't2', label: '유치원 때' }, { id: 't3', label: '2학년 지금' }], cards: [{ id: 'bottle', text: '젖병으로 우유를 먹었어요' }, { id: 'bus', text: '유치원 버스를 탔어요' }, { id: 'dict', text: '받아쓰기를 해요' }] },
                target: { match: { t1: 'bottle', t2: 'bus', t3: 'dict' } }, difficulty: 0.05 },
              { prompt: '준호가 쓴 글이에요. 어릴 때 한 일과 지금 하는 일로 나누어 보세요.', toolOptions: { mode: 'sort', axis: ['어릴 때', '지금'], slots: [{ id: 'past', label: '어릴 때 했어요' }, { id: 'now', label: '지금 해요' }], cards: [{ id: 'd1', text: '기저귀를 찼어요' }, { id: 'd2', text: '엄마가 밥을 먹여 주셨어요' }, { id: 'd3', text: '혼자 실내화를 빨아요' }, { id: 'd4', text: '동생에게 책을 읽어 줘요' }] },
                target: { sort: { past: ['d1', 'd2'], now: ['d3', 'd4'] } }, difficulty: 0.1,
                hints: ['\'~었어요\'로 끝난 말은 지난 일, \'~해요\'로 끝난 말은 지금 하는 일이에요.', '카드 끝말을 다시 읽어 보세요. \'빨아요\'처럼 지금 하는 말이 어릴 때 칸에 있는지 살펴요.', '기저귀·먹여 주셨어요는 어릴 때, 실내화 빨기·책 읽어 주기는 지금이에요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 어릴 적 나에 대해 여쭐 물음 만들기', minutes: 15, tool: 'mindmap',
            teacher: '"어릴 적 내 모습은 내가 기억하지 못해요. 그래서 가족께 여쭤봐야 해요." 때를 넣어 물음을 만들면 가족이 대답하기 쉽다는 것을 보여 준다(\'나는 어땠어요?\' → \'나는 아기 때 밤에 잘 잤어요?\'). 짝 활동에서는 집에서 여쭐 물음 하나를 정해 짝에게 말한다.',
            task: '물음을 때별로 나누고, 때를 넣은 물음을 골라, 집에서 여쭐 물음을 정해요.',
            levels: CARD_LV,
            items: [
              { prompt: '가족께 여쭐 물음을 때별로 나누어 보세요.', toolOptions: { topic: '어릴 적 나', slots: ['아기 때', '유치원 때'], cards: ['나는 아기 때 밤에 잘 잤어요?', '나는 아기 때 처음 무슨 말을 했어요?', '나는 유치원 때 어떤 놀이를 좋아했어요?', '나는 유치원 때 무엇을 무서워했어요?'] },
                target: { sort: { '아기 때': ['나는 아기 때 밤에 잘 잤어요?', '나는 아기 때 처음 무슨 말을 했어요?'], '유치원 때': ['나는 유치원 때 어떤 놀이를 좋아했어요?', '나는 유치원 때 무엇을 무서워했어요?'] } }, difficulty: 0.05 },
              { prompt: '가족이 대답하기 쉬운 물음만 골라 바구니에 넣어 보세요. 때와 궁금한 것이 함께 들어 있어야 해요.', toolOptions: { mode: 'pick', basket: '대답하기 쉬운 물음', cards: ['나는 아기 때 어떤 노래를 들으면 웃었어요?', '나는 유치원 때 누구와 가장 많이 놀았어요?', '나는 어땠어요?', '그때 뭐 했어요?'] },
                target: { pick: ['나는 아기 때 어떤 노래를 들으면 웃었어요?', '나는 유치원 때 누구와 가장 많이 놀았어요?'] }, difficulty: 0.15,
                hints: ['물음 속에 \'언제\'에 해당하는 말과 \'무엇이 궁금한지\'가 둘 다 있는지 살펴요.', '고른 물음을 다시 읽어 보세요. \'어땠어요?\', \'그때\'처럼 언제인지 알 수 없는 물음이 섞였는지 봐요.', '\'아기 때\', \'유치원 때\'가 들어 있고 궁금한 것이 분명한 두 물음을 골라요.'] },
              { prompt: '물음 속 빈칸에 알맞은 때 카드를 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['아기 때', '유치원 때', '지금'], slots: [{ id: 'b1', label: '나는 ___ 기저귀를 언제까지 찼어요?' }, { id: 'b2', label: '나는 ___ 처음 유치원 버스를 탔을 때 울었어요?' }] },
                target: { fill: { b1: '아기 때', b2: '유치원 때' } }, difficulty: 0.15,
                hints: ['물음 속 일이 언제 일어나는 일인지 먼저 떠올려요.', '넣은 카드로 다시 읽어 보세요. 유치원 버스를 아기 때 탔을까요?', '기저귀는 아기 때, 유치원 버스는 유치원 때예요.'] },
              { prompt: '집에서 가족께 여쭐 물음 하나를 정해 짝에게 말하고 "다 했어요"를 누르세요.', toolOptions: { topic: '여쭐 물음', slots: ['아기 때', '유치원 때'], cards: ['정했어요'] }, free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"오늘 정한 물음은 언제의 나에 대한 물음인가요?" 서너 명이 말한다. 집에서 여쭌 답은 다음 시간 계획표에 쓸 거라고 알려 준다. 가족께 여쭙기 어려운 학생은 나를 잘 아는 다른 어른께 여쭤도 된다고 말한다. 출구 질문을 푼다.',
        exitTicket: [
          { type: 'tool', tool: 'timeline', options: { axis: ['아기 때', '지금'], cards: ['혼자 가방을 메고 학교에 가요', '엄마 품에 안겨 다녔어요', '세발자전거를 탔어요'] }, prompt: '자라 온 차례대로 카드를 놓아 보세요.', target: { order: ['엄마 품에 안겨 다녔어요', '세발자전거를 탔어요', '혼자 가방을 메고 학교에 가요'] }, difficulty: 0.05 },
          { type: 'choice', prompt: '가족이 대답하기 쉬운 물음은 무엇일까요?', options: ['나는 아기 때 무엇을 먹으면 좋아했어요?', '나는 어땠어요?', '그거 뭐였어요?'], answer: 0, difficulty: 0.1, explain: '언제인지와 궁금한 것이 함께 들어 있으면 대답하기 쉬워요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '어릴 적 나에 대한 물음',
      items: [
        { type: 'table', prompt: '자라 온 차례대로 한 일을 쓰세요.', columns: ['아기 때', '유치원 때', '지금'], rows: 1 },
        { type: 'check', prompt: '가족이 대답하기 쉬운 물음에 모두 ✓ 하세요.', options: ['나는 아기 때 밤에 잘 잤어요?', '나는 어땠어요?', '나는 유치원 때 어떤 놀이를 좋아했어요?'], answer: ['나는 아기 때 밤에 잘 잤어요?', '나는 유치원 때 어떤 놀이를 좋아했어요?'] },
        { type: 'short', prompt: '집에서 가족께 여쭐 물음을 쓰세요.' },
        { type: 'short', prompt: '여쭌 뒤 들은 답을 쓰세요.' },
      ],
      easy: {
        note: '물음에 \'아기 때\'나 \'유치원 때\'를 넣어요.',
        items: [
          { type: 'choice', prompt: '먼저 한 일에 ○ 하세요.', options: ['걸음마를 했어요', '2학년이 되었어요'], answer: '걸음마를 했어요' },
          { type: 'short', prompt: '\'나는 아기 때\'로 시작하는 물음을 쓰세요.' },
          { type: 'draw', prompt: '아기 때의 나를 상상해 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 맞게 놓으면 초록 테두리가 생겨요. 물음은 활동 2의 카드에서 골라도 돼요.',
      base: '자라 온 차례를 놓고, 때를 넣은 물음을 만들어요.',
      challenge: '1학년까지 다섯 장의 차례를 놓고, 아기 때와 유치원 때 물음을 하나씩 만들어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 사람마다 걸음마·유치원 시기가 달라 차례도 다르다고 생각한다 → 때는 달라도 차례는 같다고 짚는다. ② 아기 사진이 없거나 어릴 적 이야기를 하기 어려운 학생(입양·위탁·다문화 가정 등)이 있다 → 사진을 가져오게 하지 않고, 물음은 \'상상해 보기\'로 바꾸어도 된다고 말한다. ③ \'어땠어요?\'처럼 물음이 넓다 → 때와 궁금한 것을 하나씩 넣게 한다.',
  }));

  lessons.push(L(40, {
    title: '나 탐구 계획표에 물음·방법·때 정하기',
    objective: '알고 싶은 물음, 알아볼 방법, 알아볼 때를 담아 나 탐구 계획을 세우고, 계획표에 쓰면 안 되는 정보를 가려낼 수 있다.',
    illustration: ART('a paper planning sheet with three rows of boxes, a pencil and a small calendar, a child thinking with a finger on the chin', '나 탐구 계획표', [
      { motif: 'tree', x: 80, y: 214 }, { motif: 'flower', x: 400, y: 230 }, { motif: 'star', x: 330, y: 70, s: 0.6 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"소풍 가기 전에 무엇을 정하나요?" "어디 갈지, 무엇을 챙길지, 언제 갈지요." "나를 알아볼 때도 미리 정하면 잘할 수 있어요. 오늘은 무엇을, 어떻게, 언제 알아볼지 계획표를 세워요." 시연 단추로 계획표 점검 목록에서 \'알고 싶은 물음\'이 표시되는 모습을 보여 준다.',
        student: '소풍 가기 전에 정하는 것을 말해 봐요.',
        demo: { tool: 'kitchen', options: { mode: 'checklist', title: '계획표에 쓸 것', items: [{ id: 'q', text: '알고 싶은 물음' }, { id: 'toy', text: '좋아하는 장난감 값' }] }, sequence: [{ checklist: ['q'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 계획표에 쓸 것과 챙길 것 고르기', minutes: 12, tool: 'kitchen',
            teacher: '"계획표에 친구 집 주소를 쓰면 어떻게 될까요? 다른 사람이 볼 수 있어요." 계획표에는 나를 알아보는 데 필요한 것만 쓰고, 주소·전화번호처럼 지켜야 할 정보는 쓰지 않는다는 것을 짚는다. 계획 차례 문항은 \'정해야 할 것부터\'라는 말로 이끈다.',
            task: '계획표에 꼭 쓸 것과 알아볼 때 챙길 것만 표시하고, 계획 세우는 차례를 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '나 탐구 계획표에 꼭 써야 할 것만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '계획표에 쓸 것', items: [{ id: 'q', text: '알고 싶은 물음' }, { id: 'how', text: '알아볼 방법' }, { id: 'when', text: '알아볼 때' }, { id: 'addr', text: '우리 집 주소' }, { id: 'phone', text: '가족 전화번호' }] },
                target: { checklist: ['q', 'how', 'when'] }, difficulty: 0.1,
                hints: ['무엇을, 어떻게, 언제 알아볼지가 계획표에 들어가요. 남이 보면 안 되는 정보는 쓰지 않아요.', '표시한 것을 다시 보세요. 주소나 전화번호처럼 지켜야 할 정보가 표시되었는지 살펴요.', '물음·방법·때 세 가지만 표시해요.'] },
              { prompt: '가족께 여쭤보러 갈 때 챙길 것만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '여쭤보러 갈 때 챙길 것', items: [{ id: 'note', text: '답을 적을 공책과 연필' }, { id: 'card', text: '여쭐 물음을 쓴 쪽지' }, { id: 'game', text: '게임기' }, { id: 'snack', text: '과자 봉지' }] },
                target: { checklist: ['note', 'card'] }, difficulty: 0.05 },
              { prompt: '계획을 세우는 차례대로 카드를 놓아 보세요.', toolOptions: { mode: 'order', cards: ['언제 알아볼지 정해요', '알고 싶은 물음을 정해요', '어떻게 알아볼지 정해요'] },
                target: { order: ['알고 싶은 물음을 정해요', '어떻게 알아볼지 정해요', '언제 알아볼지 정해요'] }, difficulty: 0.15,
                hints: ['무엇을 알아볼지 정해야 방법을 고를 수 있어요. 방법을 알아야 언제 할지도 정할 수 있어요.', '놓은 차례대로 읽어 보세요. 물음을 정하기 전에 방법을 정한 자리가 있는지 살펴요.', '물음 → 방법 → 때 차례예요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 서아의 계획표 고치고 내 계획 세우기', minutes: 16, tool: 'mindmap',
            teacher: '서아의 계획표를 칠판에 붙인다(물음: 나는 무엇을 할 때 가장 즐거울까? / 방법: ___ / 때: ___). "이 물음은 지도로 알 수 있을까요?" 알맞은 방법과 할 수 있는 때를 고르게 한 뒤, 활동지 계획표에 내 물음으로 계획을 써서 짝에게 말하게 한다. 지난 일(\'작년에\')은 앞으로의 계획이 될 수 없다는 것도 짚는다.',
            task: '서아의 계획표 빈칸을 채우고, 해낼 수 있는 계획을 고른 뒤, 내 계획을 세워 짝에게 말해요.',
            levels: CARD_LV,
            items: [
              { prompt: '서아의 계획표 빈칸에 알맞은 카드를 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['일주일 동안 즐거웠던 일을 적어 봐요', '우리나라 지도를 봐요', '이번 주 저녁마다', '작년 여름에'], slots: [{ id: 'b1', label: '물음: 나는 무엇을 할 때 가장 즐거울까? / 방법: ___' }, { id: 'b2', label: '때: ___' }] },
                target: { fill: { b1: '일주일 동안 즐거웠던 일을 적어 봐요', b2: '이번 주 저녁마다' } }, difficulty: 0.15,
                hints: ['물음의 답을 알아내려면 무엇을 해야 할지, 그리고 앞으로 해낼 수 있는 때인지 생각해요.', '넣은 카드를 다시 보세요. 지도로 즐거운 때를 알 수 있을까요? 지난 때에 계획을 할 수 있을까요?', '방법은 \'일주일 동안 즐거웠던 일을 적어 봐요\', 때는 \'이번 주 저녁마다\'예요.'] },
              { prompt: '해낼 수 있는 계획만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '해낼 수 있는 계획', cards: ['오늘 저녁에 할머니께 아기 때 이야기를 여쭤봐요', '내일 쉬는 시간에 짝에게 내가 잘하는 것을 물어요', '아기 때로 돌아가서 직접 봐요', '세계 모든 사람에게 나를 물어봐요'] },
                target: { pick: ['오늘 저녁에 할머니께 아기 때 이야기를 여쭤봐요', '내일 쉬는 시간에 짝에게 내가 잘하는 것을 물어요'] }, difficulty: 0.1 },
              { prompt: '활동지 계획표에 내 물음·방법·때를 쓰고, 짝에게 내 계획을 말한 뒤 "다 했어요"를 누르세요.', toolOptions: { topic: '내 계획', slots: ['물음', '방법', '때'], cards: ['다 썼어요'] }, free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '짝의 계획을 듣고 "해낼 수 있는 계획인가요?" 한 번 물어 주게 한다. 서너 명의 계획을 함께 듣고, 계획표는 다음 시간까지 실천해 오게 한다. 출구 질문을 푼다.',
        exitTicket: [
          { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '계획표에 쓸 것', items: [{ id: 'when', text: '알아볼 때' }, { id: 'pw', text: '내 비밀번호' }, { id: 'how', text: '알아볼 방법' }] }, prompt: '계획표에 써야 할 것만 표시해 보세요.', target: { checklist: ['when', 'how'] }, difficulty: 0.05 },
          { type: 'choice', prompt: '계획을 세울 때 가장 먼저 정할 것은 무엇일까요?', options: ['알고 싶은 물음', '알아볼 때', '공책 색깔'], answer: 0, difficulty: 0.1, explain: '무엇을 알아볼지 정해야 방법과 때를 정할 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '나 탐구 계획표',
      items: [
        { type: 'table', prompt: '내 탐구 계획을 쓰세요.', columns: ['알고 싶은 물음', '알아볼 방법', '알아볼 때'], rows: 1 },
        { type: 'check', prompt: '계획표에 쓰면 안 되는 것에 모두 ✓ 하세요.', options: ['우리 집 주소', '알아볼 방법', '가족 전화번호'], answer: ['우리 집 주소', '가족 전화번호'] },
        { type: 'choice', prompt: '해낼 수 있는 때에 ○ 하세요.', options: ['이번 주 저녁마다', '작년 여름에'], answer: '이번 주 저녁마다' },
        { type: 'short', prompt: '짝의 계획에서 좋은 점을 쓰세요.' },
      ],
      easy: {
        note: '무엇을 → 어떻게 → 언제!',
        items: [
          { type: 'short', prompt: '알고 싶은 물음을 쓰세요.' },
          { type: 'choice', prompt: '알아볼 방법에 ○ 하세요.', options: ['가족께 여쭤봐요', '친구에게 물어요', '하루 동안 적어 봐요'] },
          { type: 'short', prompt: '언제 알아볼지 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 맞게 놓으면 초록 테두리가 생겨요. 계획표는 활동지 보기에서 골라 써도 돼요.',
      base: '계획표에 쓸 것을 가려내고, 물음·방법·때를 담은 내 계획을 세워요.',
      challenge: '물음 두 개로 계획을 세우고, 짝의 계획이 해낼 수 있는지 까닭을 들어 말해 줘요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 계획표에 주소·전화번호를 쓰려 한다 → 계획표는 친구와 함께 보는 종이라 지켜야 할 정보는 쓰지 않는다고 짚는다. ② 해낼 수 없는 계획(\'세계 모든 사람에게\')을 세운다 → \'이번 주 안에 할 수 있나요?\'를 묻는다. ③ 활동지 쉬움의 방법 고르기는 정답이 없다 — 내 물음에 맞는 방법을 고르게 한다.',
  }));

  // ───────────────────────── 41~44차시: 하루 기록·가족과 친구에게 묻기·자료 읽기(관찰과 자료 읽기) ─────────────────────────

  lessons.push(L(41, {
    title: '하루 동안 한 일을 기록표에 빠짐없이 표시하기',
    objective: '하루 동안 한 일을 아침·낮·저녁으로 나누어 차례대로 놓고, 기록 글을 읽어 한 일을 빠짐없이 기록표에 표시할 수 있다.',
    illustration: ART('a paper daily record sheet divided into morning sun, afternoon and night moon columns with small check marks, a child holding a pencil', '나의 하루 기록표', [
      { motif: 'moon', x: 80, y: 70, s: 0.6 }, { motif: 'house', x: 90, y: 214 }, { motif: 'tree', x: 410, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"어제 하루 동안 무엇을 했나요?" 서너 명에게 묻는다. 대부분 한두 가지만 말한다. "이를 닦은 것, 밥 먹은 것도 한 일이에요. 한 일을 빠짐없이 적어 두면 나를 더 잘 알 수 있어요." 시연 단추로 \'일어나서 세수해요\' 카드가 \'아침\' 칸에 놓이는 모습을 보여 준다.',
        student: '어제 아침에 일어나서 가장 먼저 한 일을 말해 봐요.',
        demo: { tool: 'timeline', options: { mode: 'sort', axis: ['아침', '밤'], slots: [{ id: 'am', label: '아침' }, { id: 'pm', label: '저녁' }], cards: [{ id: 'wash', text: '일어나서 세수해요' }] }, sequence: [{ sort: { am: ['wash'], pm: [] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 하루 동안 한 일을 때에 맞게 놓기', minutes: 13, tool: 'timeline',
            teacher: '"점심은 아침에 먹나요, 낮에 먹나요?" 때를 나타내는 말(일어나서, 점심, 잠자리)을 찾아 놓게 한다. 시각 문항은 교실 시계를 가리키며 \'아침 8시\'에 무엇을 하는지 묻는다.',
            task: '한 일을 아침·낮·저녁으로 나누고, 하루의 차례와 시각을 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '한 일 카드를 아침·낮·저녁으로 나누어 보세요.', toolOptions: { mode: 'sort', axis: ['아침', '밤'], slots: [{ id: 'am', label: '아침' }, { id: 'noon', label: '낮' }, { id: 'pm', label: '저녁' }], cards: [{ id: 'wash', text: '일어나서 세수해요' }, { id: 'lunch', text: '학교에서 점심을 먹어요' }, { id: 'bed', text: '잠옷을 입고 잠자리에 들어요' }] },
                target: { sort: { am: ['wash'], noon: ['lunch'], pm: ['bed'] } }, difficulty: 0.05,
                levels: { challenge: { prompt: '한 일 카드 여섯 장을 아침·낮·저녁으로 나누어 보세요.', toolOptions: { cards: [{ id: 'wash', text: '일어나서 세수해요' }, { id: 'go', text: '아침밥을 먹고 학교에 가요' }, { id: 'lunch', text: '학교에서 점심을 먹어요' }, { id: 'play', text: '수업을 마치고 놀이터에서 놀아요' }, { id: 'dinner', text: '가족과 저녁밥을 먹어요' }, { id: 'bed', text: '잠옷을 입고 잠자리에 들어요' }] }, target: { sort: { am: ['wash', 'go'], noon: ['lunch', 'play'], pm: ['dinner', 'bed'] } } } } },
              { prompt: '민지의 하루를 일어난 차례대로 놓아 보세요.', toolOptions: { axis: ['아침', '밤'], cards: [{ id: 'home', text: '집에 와서 숙제를 해요' }, { id: 'up', text: '일어나서 이불을 개요' }, { id: 'sleep', text: '이를 닦고 잠을 자요' }, { id: 'school', text: '학교에서 받아쓰기를 해요' }] },
                target: { order: ['up', 'school', 'home', 'sleep'] }, difficulty: 0.05 },
              { prompt: '시각마다 하준이가 한 일 카드를 이어 보세요.', toolOptions: { mode: 'match', axis: ['아침', '밤'], slots: [{ id: 't8', label: '아침 8시' }, { id: 't12', label: '낮 12시' }, { id: 't21', label: '밤 9시' }], cards: [{ id: 'go', text: '학교에 가요' }, { id: 'lunch', text: '점심을 먹어요' }, { id: 'sleep', text: '잠을 자요' }] },
                target: { match: { t8: 'go', t12: 'lunch', t21: 'sleep' } }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 기록 글 읽고 빠짐없이 표시하기', minutes: 15, tool: 'kitchen',
            teacher: '"민지가 쓴 글을 손가락으로 짚으며 읽어요. 한 일이 나올 때마다 표시해요." 하나라도 빠뜨리면 기록이 달라진다는 것을 짚는다. 글에 없는 일은 표시하지 않는다. 마지막에는 활동지 기록표에 오늘 아침부터 지금까지 내가 한 일을 빠짐없이 표시하고, 집에 가서 저녁 칸을 채워 오게 한다.',
            task: '친구의 기록 글을 읽고 한 일만 빠짐없이 표시한 뒤, 내 기록표를 채워요.',
            levels: CARD_LV,
            items: [
              { prompt: '민지의 글: "줄넘기를 하고, 책을 읽고, 동생과 블록 놀이를 했어요." 민지가 한 일만 빠짐없이 표시해 보세요.', toolOptions: { mode: 'checklist', title: '민지가 한 일', items: [{ id: 'jump', text: '줄넘기' }, { id: 'book', text: '책 읽기' }, { id: 'draw', text: '그림 그리기' }, { id: 'block', text: '블록 놀이' }, { id: 'swim', text: '수영' }] },
                target: { checklist: ['jump', 'book', 'block'] }, difficulty: 0.1,
                hints: ['글을 처음부터 끝까지 손가락으로 짚으며 \'~하고\', \'~했어요\' 앞의 일을 찾아요.', '표시한 것을 글과 하나씩 견주어 보세요. 글에 없는 일이 있거나 빠진 일이 있어요.', '줄넘기·책 읽기·블록 놀이 세 가지만 표시해요.'] },
              { prompt: '하준이의 글: "아침에 이를 닦고, 점심 먹고 또 닦고, 자기 전에도 닦았어요." 이를 닦은 때를 빠짐없이 표시해 보세요.', toolOptions: { mode: 'checklist', title: '하준이가 이를 닦은 때', items: [{ id: 'am', text: '아침' }, { id: 'lunch', text: '점심 먹은 뒤' }, { id: 'snack', text: '간식 먹은 뒤' }, { id: 'bed', text: '자기 전' }] },
                target: { checklist: ['am', 'lunch', 'bed'] }, difficulty: 0.15,
                hints: ['글에서 \'닦고\', \'닦았어요\'가 몇 번 나오는지 세어 봐요.', '세 번 닦았어요. 표시한 수와 글에 나온 때가 같은지 살펴요.', '아침, 점심 먹은 뒤, 자기 전에 표시해요.'],
                levels: { challenge: { prompt: '하준이의 글: "아침에 이를 닦고, 점심 먹고 또 닦고, 자기 전에도 닦았어요." 이를 닦지 않은 때를 빠짐없이 표시해 보세요.', target: { checklist: ['snack'] } } } },
              { prompt: '활동지 기록표에 오늘 아침부터 지금까지 내가 한 일을 빠짐없이 표시하고 "다 했어요"를 누르세요.', toolOptions: { mode: 'checklist', title: '내 기록표', items: [{ id: 'done', text: '빠짐없이 표시했어요' }] }, free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"기록표를 보니 내가 아침에 한 일이 몇 가지인가요?" 짝과 견주어 본다. 기록표는 집에 가져가 저녁 칸까지 채우고, 일주일 동안 날마다 적어 오게 한다. 출구 질문을 푼다.',
        exitTicket: [
          { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '서아가 한 일', items: [{ id: 'water', text: '화분에 물 주기' }, { id: 'tv', text: '텔레비전 보기' }, { id: 'clean', text: '책상 정리' }] }, prompt: '서아의 글: "화분에 물을 주고 책상을 정리했어요." 서아가 한 일만 표시해 보세요.', target: { checklist: ['water', 'clean'] }, difficulty: 0.05 },
          { type: 'choice', prompt: '기록표를 쓸 때 바른 모습은 무엇일까요?', options: ['한 일을 빠짐없이 적어요', '기억나는 것 하나만 적어요', '하지 않은 일도 적어요'], answer: 0, difficulty: 0.05, explain: '한 일을 빠짐없이 적어야 나를 바르게 알 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '나의 하루 기록표',
      items: [
        { type: 'table', prompt: '오늘 내가 한 일을 빠짐없이 쓰세요.', columns: ['아침', '낮', '저녁'], rows: 3 },
        { type: 'check', prompt: '민지의 글 "줄넘기를 하고, 책을 읽었어요."에서 민지가 한 일에 모두 ✓ 하세요.', options: ['줄넘기', '수영', '책 읽기'], answer: ['줄넘기', '책 읽기'] },
        { type: 'choice', prompt: '점심을 먹는 때에 ○ 하세요.', options: ['낮', '밤'], answer: '낮' },
        { type: 'short', prompt: '기록표를 보고 내가 가장 많이 한 일을 쓰세요.' },
      ],
      easy: {
        note: '한 일이 생각날 때마다 칸에 ✓!',
        items: [
          { type: 'table', prompt: '오늘 한 일을 쓰세요.', columns: ['아침', '저녁'], rows: 2 },
          { type: 'choice', prompt: '잠을 자는 때에 ○ 하세요.', options: ['밤', '아침'], answer: '밤' },
          { type: 'draw', prompt: '오늘 한 일 하나를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 맞게 놓으면 초록 테두리가 생겨요. 기록표는 아침·저녁 두 칸만 써요.',
      base: '하루 일을 때에 맞게 놓고, 기록 글을 읽어 빠짐없이 표시해요.',
      challenge: '카드가 여섯 장이에요. 이를 닦지 않은 때를 거꾸로 찾아 표시해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 기억나는 큰일만 적는다 → 세수·양치·밥 먹기처럼 날마다 하는 일도 적게 한다. ② 하지 않은 일을 보태 적는다 → 기록은 \'한 일 그대로\'라고 짚는다. ③ 가정 사정으로 저녁 칸을 채우기 어려운 학생 → 학교에서 한 일만 적어도 된다고 말한다.',
  }));

  lessons.push(L(42, {
    title: '가족과 친구에게 나에 대해 묻고 들은 답 모으기',
    objective: '묻는 차례를 지켜 가족이나 친구에게 나에 대해 묻고, 들은 답을 누가 한 말인지 나누어 모을 수 있다.',
    illustration: ART('a paper child with a notebook interviewing a classmate, speech bubbles with small hearts and stars, a family portrait frame on the wall', '나에 대해 묻고 모으기', [
      { motif: 'house', x: 90, y: 214 }, { motif: 'flower', x: 400, y: 230 }, { motif: 'cloud', x: 330, y: 80, s: 0.6 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"어젯밤 가족께 나에 대해 여쭤본 사람?" 두세 명이 들은 답을 말한다. "나는 몰랐던 내 모습을 가족은 알고 있었네요. 친구는 학교에서의 나를 알고 있어요." 내 이야기도 다른 사람에게 물어봐야 알 수 있다는 것을 짚는다. 시연 단추로 \'인사하고 여쭤봐도 되는지 물어요\' 카드가 첫 칸에 놓이는 모습을 보여 준다.',
        student: '가족께 들은 나에 대한 답을 말해 봐요. 처음 알게 된 것이 있나요?',
        demo: { tool: 'story', options: { cards: ['인사하고 물어봐도 되는지 물어요', '물음을 말해요'], shuffle: false }, sequence: [{ order: ['인사하고 물어봐도 되는지 물어요', '물음을 말해요'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 묻는 차례와 들은 답 정리하기', minutes: 12, tool: 'story',
            teacher: '"들은 답을 적을 때 누가 한 말인지도 적어요. 그래야 나중에 \'엄마가 본 나\'와 \'친구가 본 나\'를 견줄 수 있어요." 아기 때 일은 가족이, 쉬는 시간의 일은 친구가 잘 안다는 것을 실마리로 쓰게 한다.',
            task: '묻는 차례를 놓고, 들은 답을 누가 한 말인지 나누고, 물음과 답을 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '나에 대해 묻는 차례대로 카드를 놓아 보세요.', toolOptions: { cards: ['끝까지 듣고 적어요', '고맙다고 말해요', '인사하고 물어봐도 되는지 물어요', '물음을 말해요'] },
                target: { order: ['인사하고 물어봐도 되는지 물어요', '물음을 말해요', '끝까지 듣고 적어요', '고맙다고 말해요'] }, difficulty: 0.05 },
              { prompt: '준호가 들은 답이에요. 엄마가 한 말과 짝이 한 말로 나누어 보세요.', toolOptions: { mode: 'sort', slots: [{ id: 'mom', label: '엄마가 한 말' }, { id: 'pal', label: '짝이 한 말' }], cards: ['"너는 아기 때 잘 웃었단다"', '"네가 태어난 날 눈이 왔어"', '"너는 쉬는 시간에 나랑 공기놀이를 해"', '"너는 우리 반에서 달리기가 빨라"'] },
                target: { sort: { mom: ['"너는 아기 때 잘 웃었단다"', '"네가 태어난 날 눈이 왔어"'], pal: ['"너는 쉬는 시간에 나랑 공기놀이를 해"', '"너는 우리 반에서 달리기가 빨라"'] } }, difficulty: 0.15,
                hints: ['아기 때나 태어난 날은 누가 보았을까요? 쉬는 시간과 우리 반 일은 누가 보았을까요?', '나눈 말을 다시 읽어 보세요. \'우리 반\', \'쉬는 시간\'이 들어간 말이 엄마 칸에 있는지 살펴요.', '아기 때·태어난 날은 엄마, 쉬는 시간·우리 반은 짝이 한 말이에요.'] },
              { prompt: '준호의 물음마다 들은 답 카드를 이어 보세요.', toolOptions: { mode: 'match', slots: [{ id: 'q1', label: '"내가 잘하는 건 뭐야?"' }, { id: 'q2', label: '"제가 태어난 날 어땠어요?"' }, { id: 'q3', label: '"저는 아기 때 뭘 좋아했어요?"' }], cards: ['"블록을 높이 잘 쌓아"', '"그날 아침 눈이 펑펑 왔단다"', '"딸랑이 소리를 좋아했어"'] },
                target: { match: { q1: '"블록을 높이 잘 쌓아"', q2: '"그날 아침 눈이 펑펑 왔단다"', q3: '"딸랑이 소리를 좋아했어"' } }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 친구 두 명에게 묻고 답 모으기 (실천)', minutes: 16, tool: 'emotion',
            teacher: '먼저 듣기 싫은 답을 들었을 때를 함께 생각한다. "\'너는 좀 느려\'라는 말을 들으면 기분이 어떨까요? 그래도 화내지 않고 \'어떤 때?\' 하고 물어보면 나를 더 알 수 있어요." 그다음 10분 동안 교실을 돌며 친구 두 명에게 \'내가 잘하는 것은 무엇이야?\'를 묻고 활동지 표에 누가 한 말인지와 함께 적는다. 친구가 놀리는 말을 하면 선생님께 말하게 한다.',
            task: '듣기 싫은 답을 들었을 때 할 말을 고르고, 친구 두 명에게 묻고 답을 적어요.',
            levels: CARD_LV,
            items: [
              { prompt: '짝이 "너는 좀 느려"라고 대답했어요. 하준이는 어떻게 하면 좋을까요?', toolOptions: { mode: 'branch', who: '하준', situation: '짝에게 물었더니 "너는 좀 느려"라고 대답했어요.', choices: [
                { id: 'ask', text: '"어떤 때 그렇게 보였어?" 하고 차분히 더 물어요', result: '"급식 먹을 때 꼭꼭 씹어 먹더라" 하는 답을 들어요. 나쁜 뜻이 아니었어요.', mood: '편안함' },
                { id: 'angry', text: '"너도 느려!" 하고 화를 내요', result: '짝도 기분이 상하고 더 묻기 어려워져요.', mood: '화남', why: '화내지 않고 어떤 때인지 물으면 나를 더 알 수 있어요.' },
                { id: 'skip', text: '못 들은 척하고 적지 않아요', result: '친구가 본 내 모습 하나를 놓쳐요.', mood: '아쉬움', why: '듣기 싫은 답도 나를 알 수 있는 답이에요.' }] }, target: { choice: 'ask' }, difficulty: 0.15 },
              { prompt: '친구 두 명에게 "내가 잘하는 것은 뭐야?"를 묻고, 활동지에 누가 한 말인지와 함께 적은 뒤 "다 했어요"를 누르세요.', toolOptions: { cards: ['고마움', '신남'], slots: [{ id: 's1', label: '두 명에게 묻고 적었어요' }] }, free: true },
              { prompt: '친구에게 나에 대한 답을 들었을 때 마음이 어땠나요? 내 마음 그대로 골라요.', toolOptions: { mode: 'scale', situation: '친구에게 나에 대한 답을 들었어요', feeling: '기쁨', steps: 3, scaleLabels: { 1: '조금', 2: '꽤', 3: '아주 많이' } }, target: { level: 'any' }, difficulty: 0.05 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"친구에게 들은 답 가운데 나도 몰랐던 것이 있나요?" 서너 명이 말한다. 같은 답을 두 친구가 했다면 동그라미를 쳐 두게 한다. 다음 시간에 모은 답을 묶어 본다고 예고하고 출구 질문을 푼다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { mode: 'sort', slots: [{ id: 'dad', label: '아빠가 한 말' }, { id: 'pal', label: '짝이 한 말' }], cards: ['"너는 아기 때 밤에 잘 잤단다"', '"너는 체육 시간에 공을 잘 던져"'] }, prompt: '들은 답을 아빠가 한 말과 짝이 한 말로 나누어 보세요.', target: { sort: { dad: ['"너는 아기 때 밤에 잘 잤단다"'], pal: ['"너는 체육 시간에 공을 잘 던져"'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '"내 이야기는 내가 다 아니까 물어볼 필요가 없다"는 말에 알맞은 생각은 무엇일까요?', options: ['다른 사람이 본 내 모습도 있어요', '맞아요, 묻지 않아도 돼요', '친구 말은 다 틀려요'], answer: 0, difficulty: 0.05, explain: '가족과 친구는 내가 모르는 내 모습을 알고 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '나에 대해 들은 답',
      items: [
        { type: 'table', prompt: '나에 대해 물어 들은 답을 쓰세요.', columns: ['누가', '들은 답'], rows: 3 },
        { type: 'table', prompt: '묻는 차례를 쓰세요.', columns: ['1', '2', '3', '4'], rows: 1 },
        { type: 'choice', prompt: '듣기 싫은 답을 들었을 때 알맞은 말에 ○ 하세요.', options: ['"어떤 때 그렇게 보였어?"', '"너도 그래!"'], answer: '"어떤 때 그렇게 보였어?"' },
        { type: 'short', prompt: '들은 답 가운데 처음 알게 된 것을 쓰세요.' },
      ],
      easy: {
        note: '누가 말했는지 꼭 함께 적어요.',
        items: [
          { type: 'table', prompt: '친구에게 들은 답을 쓰세요.', columns: ['누가', '들은 답'], rows: 2 },
          { type: 'choice', prompt: '다 들은 뒤 할 말에 ○ 하세요.', options: ['고마워', '몰라'], answer: '고마워' },
          { type: 'draw', prompt: '친구에게 묻는 내 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 맞게 놓으면 초록 테두리가 생겨요. 친구 한 명에게만 묻고 낱말 하나로 적어도 돼요.',
      base: '묻는 차례를 지켜 친구 두 명에게 묻고, 누가 한 말인지와 함께 적어요.',
      challenge: '친구 세 명에게 묻고, 두 사람 이상이 같게 말한 답에 동그라미를 쳐요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 들은 답을 누가 했는지 적지 않는다 → \'누가\' 칸부터 쓰게 한다. ② 친구가 놀리는 답을 한다 → 묻기 전에 \'친구가 잘하는 것만 말해 주기\' 약속을 함께 정한다. ③ 친구들에게 다가가기 어려워하는 학생 → 교사가 짝을 정해 주고 첫 물음을 함께 해 준다.',
  }));

  lessons.push(L(43, {
    title: '모은 답을 묶어 나의 특징 찾고 배지 꾸미기',
    objective: '모은 답을 좋아하는 것·잘하는 것·더 해 보고 싶은 것으로 묶고, 들은 말에서 나의 특징을 찾아 배지로 나타낼 수 있다.',
    illustration: ART('a large round paper badge decorated with a star, a heart and a leaf, surrounded by little sticky notes of collected answers', '나의 특징 배지', [
      { motif: 'star', x: 100, y: 70, s: 0.6 }, { motif: 'flower', x: 400, y: 230 }, { motif: 'leaf', x: 80, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '지난 시간 활동지의 들은 답을 펴게 한다. "답이 여러 개 모였어요. 비슷한 것끼리 묶어 보면 내가 어떤 사람인지 더 잘 보여요." 칠판에 \'좋아하는 것\', \'잘하는 것\', \'더 해 보고 싶은 것\' 세 바구니를 그린다. 시연 단추로 \'"서아는 딸기를 제일 좋아해"\' 카드가 \'좋아하는 것\' 가지에 놓이는 모습을 보여 준다.',
        student: '지난 시간에 들은 답을 하나 읽어 봐요.',
        demo: { tool: 'mindmap', options: { topic: '서아가 모은 답', slots: ['좋아하는 것', '잘하는 것', '더 해 보고 싶은 것'], cards: ['엄마: "서아는 딸기를 제일 좋아해"'], shuffle: false }, sequence: [{ sort: { '좋아하는 것': ['엄마: "서아는 딸기를 제일 좋아해"'], '잘하는 것': [], '더 해 보고 싶은 것': [] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 모은 답 묶고 특징 찾기', minutes: 13, tool: 'mindmap',
            teacher: '"\'좋아해\'가 들어 있으면 좋아하는 것, \'잘해\'가 들어 있으면 잘하는 것이에요." 낱말 실마리를 찾아 묶게 한다. 들은 말에서 특징을 찾을 때는 "이 말을 들으면 서아는 어떤 사람일까요?"를 묻는다.',
            task: '서아가 모은 답을 세 가지로 묶고, 들은 말과 특징을 이어, 서아 소개 문장을 완성해요.',
            levels: CARD_LV,
            items: [
              { prompt: '서아가 모은 답을 세 가지로 묶어 보세요.', toolOptions: { topic: '서아가 모은 답', slots: ['좋아하는 것', '잘하는 것', '더 해 보고 싶은 것'], cards: ['엄마: "서아는 딸기를 제일 좋아해"', '짝: "서아는 줄넘기를 잘해"', '서아의 기록: "피아노를 더 배워 보고 싶어요"'] },
                target: { sort: { '좋아하는 것': ['엄마: "서아는 딸기를 제일 좋아해"'], '잘하는 것': ['짝: "서아는 줄넘기를 잘해"'], '더 해 보고 싶은 것': ['서아의 기록: "피아노를 더 배워 보고 싶어요"'] } }, difficulty: 0.05,
                levels: { challenge: { prompt: '서아가 모은 답 여섯 장을 세 가지로 묶어 보세요.', toolOptions: { cards: ['엄마: "서아는 딸기를 제일 좋아해"', '아빠: "서아는 강아지를 좋아해"', '짝: "서아는 줄넘기를 잘해"', '선생님: "서아는 글씨를 또박또박 잘 써"', '서아의 기록: "피아노를 더 배워 보고 싶어요"', '서아의 기록: "수영을 해 보고 싶어요"'] }, target: { sort: { '좋아하는 것': ['엄마: "서아는 딸기를 제일 좋아해"', '아빠: "서아는 강아지를 좋아해"'], '잘하는 것': ['짝: "서아는 줄넘기를 잘해"', '선생님: "서아는 글씨를 또박또박 잘 써"'], '더 해 보고 싶은 것': ['서아의 기록: "피아노를 더 배워 보고 싶어요"', '서아의 기록: "수영을 해 보고 싶어요"'] } } } } },
              { prompt: '들은 말마다 어울리는 특징 카드를 이어 보세요.', toolOptions: { mode: 'match', topic: '나의 특징', slots: [{ id: 's1', label: '"너는 늘 먼저 인사해"' }, { id: 's2', label: '"친구가 넘어지면 일으켜 줘"' }, { id: 's3', label: '"모르는 건 꼭 물어봐"' }], cards: ['밝게 인사하는 사람', '친구를 잘 돕는 사람', '궁금한 것이 많은 사람'] },
                target: { match: { s1: '밝게 인사하는 사람', s2: '친구를 잘 돕는 사람', s3: '궁금한 것이 많은 사람' } }, difficulty: 0.1 },
              { prompt: '서아가 모은 답(딸기를 좋아해, 줄넘기를 잘해)으로 소개 문장의 빈칸을 채워 보세요.', toolOptions: { mode: 'fill', cards: ['딸기', '줄넘기', '피아노'], slots: [{ id: 'b1', label: '나는 ___를 좋아해요.' }, { id: 'b2', label: '나는 ___를 잘해요.' }] },
                target: { fill: { b1: '딸기', b2: '줄넘기' } }, difficulty: 0.1,
                hints: ['문항에 쓰인 서아의 답을 먼저 읽어요. 무엇을 좋아하고 무엇을 잘한다고 했나요?', '넣은 카드를 문항의 답과 견주어 보세요. 피아노는 아직 더 배워 보고 싶은 것이에요.', '좋아하는 것은 딸기, 잘하는 것은 줄넘기예요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 나의 특징 배지 꾸미기 (표현)', minutes: 15, tool: 'collage',
            teacher: '"큰 동그라미가 배지 판이에요. 별은 내가 잘하는 것, 하트는 내가 좋아하는 것을 나타내요." 색종이 판에서 꾸민 뒤, 종이 배지에 별·하트 그림과 낱말을 써서 가슴에 단다. 다 단 학생은 짝에게 배지를 보여 주며 별과 하트가 무엇을 나타내는지 말한다.',
            task: '큰 동그라미 위에 별(잘하는 것)과 하트(좋아하는 것)를 붙여 배지를 꾸미고, 종이 배지를 만들어 짝에게 소개해요.',
            levels: { easy: { shapes: ['circle', 'star', 'heart', 'leaf'], colors: ['노랑', '빨강', '분홍', '초록'] }, base: {}, challenge: {} },
            items: [
              { prompt: '배지를 꾸며요. 큰 동그라미 한 개 위에 별 한 개와 하트 한 개를 붙여 보세요.', target: { has: [{ shape: 'circle', size: 'l', n: 1 }, { shape: 'star', n: 1 }, { shape: 'heart', n: 1 }] }, difficulty: 0.1,
                hints: ['모양 고르개에서 동그라미를 고르고 크기를 \'크게\'로 바꾼 뒤 붙여요.', '큰 동그라미, 별, 하트가 하나씩만 있는지 세어 보세요. 더 붙였거나 크기가 다른 것이 있어요.', '큰 동그라미 하나를 붙이고, 그 위에 별 하나와 하트 하나를 붙여요.'],
                levels: { challenge: { prompt: '배지를 꾸며요. 큰 동그라미 한 개 위에 별 한 개, 하트 한 개, 더 해 보고 싶은 것을 나타낼 나뭇잎 한 장을 붙여 보세요.', target: { has: [{ shape: 'circle', size: 'l', n: 1 }, { shape: 'star', n: 1 }, { shape: 'heart', n: 1 }, { shape: 'leaf', n: 1 }] } } } },
              { prompt: '종이 배지에 잘하는 것과 좋아하는 것을 그리고 낱말로 써서 단 뒤, 짝에게 소개하고 "다 했어요"를 누르세요.', free: true, talk: true },
              { prompt: '내 배지를 살펴보고 해낸 것을 하나씩 표시해요.', target: { selfCheck: ['별에 내가 잘하는 것을 담았어요', '하트에 내가 좋아하는 것을 담았어요', '짝에게 배지를 소개했어요'], minPieces: 3 }, difficulty: 0.05 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '배지를 단 채로 둘러앉는다. "친구 배지를 보고 새로 안 것이 있나요?" 두세 명이 말한다. 배지는 다음 자기소개 시간까지 교실 게시판에 모아 둔다. 출구 질문을 푼다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '하준이가 모은 답', slots: ['좋아하는 것', '잘하는 것'], cards: ['짝: "하준이는 종이접기를 잘해"', '형: "하준이는 공룡을 좋아해"'] }, prompt: '하준이가 모은 답을 좋아하는 것과 잘하는 것으로 묶어 보세요.', target: { sort: { '좋아하는 것': ['형: "하준이는 공룡을 좋아해"'], '잘하는 것': ['짝: "하준이는 종이접기를 잘해"'] } }, difficulty: 0.05 },
          { type: 'choice', prompt: '"너는 친구가 울면 꼭 달래 줘"라는 말에서 찾을 수 있는 특징은 무엇일까요?', options: ['친구 마음을 잘 살피는 사람', '달리기가 빠른 사람', '그림을 잘 그리는 사람'], answer: 0, difficulty: 0.1, explain: '우는 친구를 달래 주는 것은 친구 마음을 살피는 모습이에요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '모은 답 묶기',
      items: [
        { type: 'table', prompt: '내가 모은 답을 묶어 쓰세요.', columns: ['좋아하는 것', '잘하는 것', '더 해 보고 싶은 것'], rows: 2 },
        { type: 'choice', prompt: '"너는 늘 먼저 인사해"에서 찾을 수 있는 특징에 ○ 하세요.', options: ['밝게 인사하는 사람', '노래를 잘하는 사람'], answer: '밝게 인사하는 사람' },
        { type: 'blank', prompt: '내 답으로 빈칸을 채우세요.', text: '나는 ( )을/를 잘해요.' },
        { type: 'draw', prompt: '나의 특징 배지를 그리세요.' },
      ],
      easy: {
        note: '\'좋아해\'와 \'잘해\'를 찾아요.',
        items: [
          { type: 'short', prompt: '내가 좋아하는 것 하나를 쓰세요.' },
          { type: 'short', prompt: '내가 잘하는 것 하나를 쓰세요.' },
          { type: 'draw', prompt: '별과 하트로 내 배지를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 맞게 놓으면 초록 테두리가 생겨요. 색종이 판에는 쓸 모양과 색만 나와요.',
      base: '모은 답을 세 가지로 묶고, 별과 하트로 배지를 꾸며요.',
      challenge: '카드가 여섯 장이에요. 배지에 더 해 보고 싶은 것 나뭇잎까지 붙여요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 잘하는 것이 없다고 말한다 → 친구에게 들은 답에서 찾아 주고, \'잘하는 것\'은 큰 재주가 아니어도 된다고 말한다. ② 좋아하는 것과 잘하는 것을 섞는다 → \'좋아해\', \'잘해\' 낱말에 밑줄을 긋게 한다. ③ 친구 배지를 견주며 놀린다 → 배지는 서로 다른 것이 당연하다고 짚는다.',
  }));

  lessons.push(L(44, {
    title: '한 주 기록 그래프를 읽고 나의 습관 말하기',
    objective: '한 주 동안 한 일을 나타낸 그래프를 완성하고 읽어, 가장 많이 한 일과 가장 적게 한 일로 나의 습관을 말할 수 있다.',
    illustration: ART('a paper picture graph with rows of small circles for reading books, jumping rope and tidying up across a week, a child pointing at the longest row', '한 주 기록 그래프', [
      { motif: 'sun', x: 100, y: 60, s: 0.6 }, { motif: 'tree', x: 410, y: 214 }, { motif: 'flower', x: 90, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '일주일 동안 적어 온 하루 기록표를 꺼내게 한다. "일곱 장이나 되니 한눈에 보기 어렵지요? 한 일마다 몇 번 했는지 동그라미로 나타내면 한눈에 볼 수 있어요." 시연 단추로 \'책 읽기\' 줄에 동그라미가 하나씩 채워지는 모습을 보여 준다. 기록을 다 못 해 온 학생에게는 오늘은 친구 기록으로 연습한다고 말해 준다.',
        student: '일주일 동안 내가 가장 많이 한 일은 무엇일 것 같나요?',
        demo: { tool: 'chart', options: { type: 'picture', title: '준호가 한 주 동안 한 일', data: [['책 읽기', 3], ['줄넘기', 2]], unit: '번', xLabel: '한 일', yLabel: '한 번 수', icons: [{ value: 5, name: '5번' }, { value: 1, name: '1번' }], given: [1] }, sequence: [{ build: true }] },
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 한 주 기록 그래프 만들고 읽기', minutes: 15, tool: 'chart',
            teacher: '"작은 동그라미 하나가 한 번이에요. 큰 동그라미 하나는 다섯 번이에요." 표의 수만큼 동그라미를 채우게 한다. 그래프를 읽을 때는 "줄이 가장 긴 것이 가장 많이 한 일"이라는 것을 손가락으로 짚어 보게 한다.',
            task: '기록표를 보고 그림그래프를 완성하고, 그래프를 읽어 물음에 답해요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '준호의 한 주 기록표를 보고 그림그래프를 완성하세요.', toolOptions: { type: 'picture', title: '준호가 한 주 동안 한 일', data: [['책 읽기', 6], ['줄넘기', 3], ['방 정리', 2]], unit: '번', xLabel: '한 일', yLabel: '한 번 수', icons: [{ value: 5, name: '5번' }, { value: 1, name: '1번' }] }, target: { build: true }, difficulty: 0.15,
                levels: { easy: { toolOptions: { given: [0] }, prompt: '준호의 한 주 기록표를 보고 그림그래프를 완성하세요. 책 읽기 줄은 미리 채워 두었어요.' } } },
              { prompt: '서아의 한 주 그래프를 보고 답해요.', toolOptions: { type: 'picture', mode: 'read', title: '서아가 한 주 동안 한 일', data: [['물 마시기', 7], ['방 정리', 2], ['줄넘기', 4]], unit: '번', xLabel: '한 일', yLabel: '한 번 수', icons: [{ value: 5, name: '5번' }, { value: 1, name: '1번' }], question: '서아가 가장 적게 한 일은 무엇일까요?', choices: ['물 마시기', '방 정리', '줄넘기'] }, target: { pick: 1 }, difficulty: 0.15,
                predict: { q: '가장 적게 한 일은 줄이 길까요, 짧을까요?', options: ['길어요', '짧아요'], answer: 1 },
                conclude: '그림그래프에서 줄이 가장 짧은 것이 가장 적게 한 일이에요.' },
              { prompt: '하준이의 한 주 그래프를 보고 줄넘기를 한 번 수를 써 보세요.', toolOptions: { type: 'picture', mode: 'read', title: '하준이가 한 주 동안 한 일', data: [['책 읽기', 3], ['줄넘기', 6], ['동생 돌보기', 5]], unit: '번', xLabel: '한 일', yLabel: '한 번 수', icons: [{ value: 5, name: '5번' }, { value: 1, name: '1번' }], question: '줄넘기를 한 번 수는 몇 번일까요?' }, target: { value: 6 }, difficulty: 0.2,
                hints: ['큰 동그라미는 5번, 작은 동그라미는 1번이에요. 줄넘기 줄의 동그라미를 세어 봐요.', '큰 동그라미를 먼저 5로 세고, 작은 동그라미를 하나씩 더해 보세요.', '줄넘기 줄에는 큰 동그라미 하나와 작은 동그라미 하나가 있어요. 5와 1을 더해요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 그래프로 나의 습관 말하기', minutes: 13, tool: 'emotion',
            teacher: '"그래프를 보고 \'나는 책을 즐겨 읽는 사람이에요\'처럼 나에 대해 말할 수 있어요. 적게 한 일은 \'더 해 보고 싶은 것\'이 될 수 있어요." 하루만 보고 \'나는 정리를 안 하는 사람\'이라고 정하지 않고, 한 주를 다 보고 말한다는 것을 짚는다. 짝 활동에서는 내 기록표에서 가장 많이 한 일을 찾아 한 문장으로 말한다.',
            task: '그래프에서 알 수 있는 것과 나에 대한 말을 잇고, 내 기록을 보고 나의 습관을 말해요.',
            levels: CARD_LV,
            items: [
              { prompt: '준호의 그래프에서 알 수 있는 것마다 어울리는 준호 소개 말을 이어 보세요.', toolOptions: { mode: 'match', weather: false, slots: [{ id: 's1', label: '책 읽기가 가장 많아요' }, { id: 's2', label: '방 정리가 가장 적어요' }], cards: ['"나는 책을 즐겨 읽어요"', '"나는 방 정리를 더 해 볼래요"'] },
                target: { match: { s1: '"나는 책을 즐겨 읽어요"', s2: '"나는 방 정리를 더 해 볼래요"' } }, difficulty: 0.1 },
              { prompt: '서아가 월요일 하루 기록만 보고 "나는 물을 안 마시는 사람이야"라고 했어요. 서아의 한 주 그래프에는 물 마시기가 가장 많아요. 어떻게 말하면 좋을까요?', toolOptions: { mode: 'branch', who: '서아', situation: '하루 기록만 보고 나를 정했어요.', choices: [
                { id: 'week', text: '"한 주를 다 보니 나는 물을 자주 마시는 사람이야"', result: '서아가 한 주 그래프를 보고 나를 바르게 알게 돼요.', mood: '뿌듯함' },
                { id: 'day', text: '"월요일에 안 마셨으니 안 마시는 사람이 맞아"', result: '하루만 보고 나를 잘못 알게 돼요.', mood: '걱정', why: '하루가 아니라 한 주 기록을 모두 보고 말해요.' }] }, target: { choice: 'week' }, difficulty: 0.2 },
              { prompt: '내 기록표에서 가장 많이 한 일을 찾아 "나는 ○○을/를 자주 하는 사람이에요"라고 짝에게 말하고 "다 했어요"를 누르세요.', toolOptions: { cards: ['뿌듯함', '신남'], slots: [{ id: 's1', label: '짝에게 말했어요' }] }, free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"내 기록에서 가장 많이 한 일은 무엇이었나요? 더 해 보고 싶은 일은요?" 두세 명이 말한다. 다음 시간에는 모은 것으로 나를 세 문장으로 소개한다고 예고하고 출구 질문을 푼다.',
        exitTicket: [
          { type: 'tool', tool: 'chart', options: { type: 'picture', mode: 'read', title: '민지가 한 주 동안 한 일', data: [['그림 그리기', 4], ['산책', 7], ['종이접기', 2]], unit: '번', icons: [{ value: 5, name: '5번' }, { value: 1, name: '1번' }], question: '민지가 가장 많이 한 일은 무엇일까요?', choices: ['그림 그리기', '산책', '종이접기'] }, prompt: '민지의 한 주 그래프를 보고 가장 많이 한 일을 골라 보세요.', target: { pick: 1 }, difficulty: 0.1 },
          { type: 'choice', prompt: '나의 습관을 말할 때 바른 방법은 무엇일까요?', options: ['한 주 기록을 모두 보고 말해요', '하루 기록만 보고 정해요', '친구 기록을 보고 말해요'], answer: 0, difficulty: 0.1, explain: '여러 날의 기록을 모두 보아야 나의 습관을 바르게 알 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '한 주 기록 그래프',
      items: [
        { type: 'figure', prompt: '그래프를 보고 물음에 답하세요.', tool: 'chart', figures: [{ options: { type: 'picture', mode: 'read', title: '하준이가 한 주 동안 한 일', data: [['책 읽기', 3], ['줄넘기', 6], ['동생 돌보기', 5]], unit: '번', icons: [{ value: 5, name: '5번' }, { value: 1, name: '1번' }] }, caption: '가장 많이 한 일: ________' }], answer: '줄넘기' },
        { type: 'table', prompt: '내 기록표를 보고 한 번 수를 쓰세요.', columns: ['한 일', '한 번 수'], rows: 3 },
        { type: 'short', prompt: '내가 가장 많이 한 일로 나를 소개하는 한 문장을 쓰세요.' },
        { type: 'short', prompt: '가장 적게 한 일 가운데 더 해 보고 싶은 것을 쓰세요.' },
      ],
      easy: {
        note: '줄이 가장 긴 것이 가장 많이 한 일!',
        items: [
          { type: 'choice', prompt: '그래프에서 가장 많이 한 일은 줄이 어떨까요?', options: ['가장 길어요', '가장 짧아요'], answer: '가장 길어요' },
          { type: 'short', prompt: '내가 가장 많이 한 일을 쓰세요.' },
          { type: 'draw', prompt: '그 일을 하는 내 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '그래프의 첫 줄을 미리 채워 두었어요. 줄의 길이만 견주어 답해요.',
      base: '그래프를 완성하고, 가장 많이·적게 한 일을 찾아 나에 대해 말해요.',
      challenge: '큰 동그라미와 작은 동그라미를 함께 세어 한 번 수를 쓰고, 내 기록으로 두 문장을 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 큰 동그라미도 1번으로 센다 → 큰 동그라미를 먼저 \'5\'라고 말하고 이어 세게 한다. ② 가장 많이 한 일과 좋아하는 일을 같다고 여긴다 → 많이 한 일이 꼭 좋아하는 일은 아니라고 짚는다(물 마시기처럼). ③ 기록을 못 해 온 학생 → 오늘 하루 기록으로 그래프를 그려도 된다고 말한다.',
  }));

  // ───────────────────────── 45~48차시: 모은 것으로 나를 소개하기(탐구 결과 설명) ─────────────────────────

  lessons.push(L(45, {
    title: '모은 자료로 세 문장 자기소개 짓기',
    objective: '모은 답과 기록표에서 소개에 넣을 말을 골라, 인사와 이름·모은 자료에서 찾은 나·가장 나다운 점이 든 세 문장 자기소개를 지을 수 있다.',
    illustration: ART('a paper child holding a small card with three lines of writing, surrounded by a daily record sheet, a badge and speech bubbles of collected answers', '세 문장으로 나를 소개해요', [
      { motif: 'star', x: 90, y: 70, s: 0.6 }, { motif: 'house', x: 90, y: 214 }, { motif: 'flower', x: 400, y: 230 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '칠판에 "안녕하세요. 저는 준호예요. 저는 2학년이에요."를 쓰고 읽어 준다. "이 소개를 듣고 준호에 대해 새로 안 것이 있나요? 2학년이라는 말은 우리 반 누구나 할 수 있지요." 이름과 나이만 말하면 그 사람이 어떤 사람인지 알 수 없다는 것을 짚는다. "지난 시간까지 모은 기록표, 들은 답, 배지가 있어요. 이것으로 나를 소개해 봐요." 칠판에 세 문장 틀(① 인사와 이름 ② 모은 자료에서 찾은 나 ③ 그래서 가장 나다운 점)을 붙이고, 시연 단추로 첫 두 문장 카드가 차례대로 놓이는 모습을 보여 준다.',
        student: '준호의 소개에서 준호에 대해 새로 알게 된 것이 있나요? 무엇을 더 들으면 좋을까요?',
        demo: { tool: 'story', options: { cards: ['안녕하세요, 저는 준호예요.', '저는 공룡 책을 즐겨 읽어요.'], shuffle: false }, sequence: [{ order: ['안녕하세요, 저는 준호예요.', '저는 공룡 책을 즐겨 읽어요.'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 모은 자료를 소개 문장으로 바꾸기', minutes: 13, tool: 'emotion',
            teacher: '"모은 답 \'너는 그림을 잘 그려\'를 내가 말하면 어떻게 바뀔까요?" "저는 그림을 잘 그려요."처럼 \'너는\'을 \'저는\'으로 바꾸어 말해 보게 한다. 자료에 없는 말을 고른 학생에게는 "그 말은 어느 자료에 있었나요?" 하고 자료를 다시 짚게 한다. 이름과 반만 말하고 끝내는 소개에는 "듣는 친구가 무엇을 새로 알게 될까요?"를 묻는다.',
            task: '모은 자료로 지은 소개 문장을 고르고, 자료와 문장을 이은 뒤, 이름만 말한 소개에 더할 말을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '민지가 모은 답은 "그림을 잘 그려", "고양이를 좋아해"예요. 이 두 답으로 지은 소개 문장만 골라 보세요.', toolOptions: { mode: 'pick', weather: false, basket: '넣을 문장', cards: ['저는 그림을 잘 그려요.', '저는 고양이를 좋아해요.', '저는 2학년이에요.', '저는 축구 선수예요.'] },
                target: { pick: ['저는 그림을 잘 그려요.', '저는 고양이를 좋아해요.'] }, difficulty: 0.1,
                hints: ['문항에 나온 두 답을 먼저 읽어요. 카드마다 그 답에서 나온 말인지 하나씩 견주어요.', '고른 카드를 두 답과 하나씩 견주어 보세요. 답에 없는 말이 들어 있거나, 답에서 나온 문장이 빠졌어요.', '"그림을 잘 그려"는 그림 카드로, "고양이를 좋아해"는 고양이 카드로 바뀌었어요. 이 두 장만 골라요.'],
                levels: { challenge: { toolOptions: { cards: ['저는 그림을 잘 그려요.', '저는 고양이를 좋아해요.', '저는 2학년이에요.', '저는 축구 선수예요.', '저는 그림 그리기를 싫어해요.'] } } } },
              { prompt: '하준이가 모은 자료마다 그것으로 지은 소개 문장을 이어 보세요.', toolOptions: { mode: 'match', weather: false, slots: [{ id: 's1', label: '기록표: 한 주에 줄넘기 7번' }, { id: 's2', label: '짝: "너는 친구를 잘 도와줘"' }, { id: 's3', label: '형: "너는 곤충을 좋아해"' }], cards: ['저는 줄넘기를 자주 해요.', '저는 친구를 잘 도와요.', '저는 곤충을 좋아해요.'] },
                target: { match: { s1: '저는 줄넘기를 자주 해요.', s2: '저는 친구를 잘 도와요.', s3: '저는 곤충을 좋아해요.' } }, difficulty: 0.1,
                hints: ['자료에 나온 낱말이 문장에도 그대로 나오는지 찾아요. \'너는\'은 \'저는\'으로 바뀌어요.', '이은 짝마다 자료의 낱말과 문장의 낱말이 같은지 살펴보세요. 낱말이 다른 짝이 있어요.', '줄넘기 기록은 줄넘기 문장, 짝의 말은 돕는 문장, 형의 말은 곤충 문장과 이어요.'] },
              { prompt: '하준이가 "저는 하준이에요. 저는 2학년 3반이에요."라고만 소개했어요. 무엇을 더하면 좋을까요?', toolOptions: { mode: 'branch', who: '하준', situation: '하준이가 이름과 반만 말하고 소개를 끝내려고 해요.', choices: [
                { id: 'data', text: '"짝이 그러는데 저는 종이접기를 잘한대요."를 더해요', result: '친구들이 하준이가 무엇을 잘하는지 새로 알게 돼요.', mood: '뿌듯함' },
                { id: 'again', text: '"저는 하준이에요."를 한 번 더 크게 말해요', result: '친구들은 하준이에 대해 새로 안 것이 없어요.', mood: '아쉬움', why: '이름은 이미 말했어요. 모은 자료에서 찾은 내 모습을 더해요.' },
                { id: 'stop', text: '이름과 반을 말했으니 그대로 끝내요', result: '하준이가 어떤 사람인지 아무도 알 수 없어요.', mood: '아쉬움', why: '이름과 반만으로는 내가 어떤 사람인지 알 수 없어요.' }] }, target: { choice: 'data' }, difficulty: 0.1,
                hints: ['듣는 친구가 하준이에 대해 새로 알게 되는 말이 무엇인지 보기마다 따져 봐요.', '고른 보기를 듣고 친구들이 하준이에 대해 무엇을 새로 알게 되는지 생각해 보세요. 이미 말한 것이거나 아무것도 더하지 않았어요.', '짝에게 들은 답(종이접기를 잘한대요)을 더하는 보기를 골라요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 내 자료로 세 문장 소개 짓기 (실천)', minutes: 15, tool: 'story',
            teacher: '"셋째 문장은 \'그래서\'로 시작해요. 앞 문장을 보고 \'그래서 나는 이런 사람이다\'를 말하는 자리예요." 빈칸 문항은 문항 글의 자료를 손가락으로 짚고 넣게 한다. 그다음 10분 동안 각자 활동지 세 문장 틀에 내 기록표·들은 답·배지를 보고 문장을 쓴다. 교사는 돌며 \'저는 2학년이에요\'처럼 누구나 할 수 있는 말만 쓴 학생에게 "기록표에서 가장 많이 한 일은 무엇이었나요?" 하고 자료를 다시 펴게 한다.',
            task: '세 문장 소개의 차례를 세우고 빈칸을 채운 뒤, 활동지에 내 세 문장 소개를 써요.',
            levels: CARD_LV,
            items: [
              { prompt: '서아의 세 문장 소개를 차례대로 놓아 보세요.', toolOptions: { cards: ['그래서 저는 만들기를 잘하는 아이예요.', '안녕하세요, 저는 서아예요.', '짝이 제가 블록을 높이 잘 쌓는다고 했어요.'] },
                target: { order: ['안녕하세요, 저는 서아예요.', '짝이 제가 블록을 높이 잘 쌓는다고 했어요.', '그래서 저는 만들기를 잘하는 아이예요.'] }, difficulty: 0.1,
                hints: ['소개는 인사와 이름으로 시작해요. \'그래서\'로 시작하는 문장은 앞에 까닭이 있어야 해요.', '놓은 차례대로 읽어 보세요. \'그래서\' 앞에 그 까닭이 되는 문장이 있는지 살펴요.', '인사와 이름 → 짝에게 들은 말 → \'그래서\' 문장 차례예요.'] },
              { prompt: '준호의 기록표에는 책 읽기가 가장 많고, 할머니는 "준호는 노래를 잘 부르지"라고 하셨어요. 빈칸을 채워 보세요.', toolOptions: { mode: 'fill', cards: ['책 읽기', '노래', '수영'], slots: [{ id: 'b1', label: '저는 한 주 동안 ___를 가장 많이 했어요.' }, { id: 'b2', label: '할머니는 제가 ___를 잘 부른다고 하셨어요.' }] },
                target: { fill: { b1: '책 읽기', b2: '노래' } }, difficulty: 0.15,
                hints: ['문항 글에서 기록표에 나온 것과 할머니가 하신 말을 따로 찾아요.', '넣은 카드를 문항 글과 견주어 보세요. 문항 글에 없는 카드가 들어갔거나 두 카드가 바뀌었어요.', '기록표 빈칸에는 책 읽기, 할머니 말 빈칸에는 노래를 넣어요.'],
                levels: { challenge: { toolOptions: { cards: ['책 읽기', '노래', '수영', '그림'] } } } },
              { prompt: '활동지 세 문장 틀에 내 이름, 모은 자료에서 찾은 나, \'그래서\'로 시작하는 나다운 점을 쓰고 "다 했어요"를 누르세요.', toolOptions: { cards: ['뿌듯함'], slots: [{ id: 's1', label: '세 문장을 다 썼어요' }] }, free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '짝에게 내가 쓴 세 문장을 소리 내어 읽어 주게 한다. "짝의 소개에서 새로 알게 된 것이 있나요?" 두세 명이 짝에 대해 새로 안 것을 말한다. 다음 시간에는 짝과 소개를 연습하고 고쳐 본다고 예고하고 출구 질문을 푼다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { cards: ['그래서 저는 바깥 놀이를 좋아하는 아이예요.', '안녕하세요, 저는 민지예요.', '기록표를 보니 제가 놀이터에 가장 자주 갔어요.'] }, prompt: '민지의 세 문장 소개를 차례대로 놓아 보세요.', target: { order: ['안녕하세요, 저는 민지예요.', '기록표를 보니 제가 놀이터에 가장 자주 갔어요.', '그래서 저는 바깥 놀이를 좋아하는 아이예요.'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '"저는 민지예요. 저는 2학년이에요."에 더하면 민지를 가장 잘 알 수 있는 말은 무엇일까요?', options: ['"저는 2학년이에요."를 한 번 더 말해요', '"짝이 제가 그림을 잘 그린대요."', '"오늘은 날씨가 맑아요."'], answer: 1, difficulty: 0.1, explain: '모은 자료에서 찾은 내 모습을 말하면 듣는 사람이 나를 더 잘 알 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '세 문장으로 나를 소개해요',
      items: [
        { type: 'table', prompt: '내 자료를 보고 세 문장 소개를 쓰세요.', columns: ['차례', '내가 쓸 문장'], cells: [['① 이름', ''], ['② 자료 속 나', ''], ['③ 그래서', '']] },
        { type: 'check', prompt: '준호가 모은 답 "너는 공룡을 좋아해"로 지은 문장에 ✓ 하세요.', options: ['저는 공룡을 좋아해요.', '저는 2학년이에요.', '저는 공룡이 무서워요.'], answer: ['저는 공룡을 좋아해요.'] },
        { type: 'choice', prompt: '나를 더 잘 알 수 있는 소개에 ○ 하세요.', options: ['저는 준호예요. 끝.', '저는 준호예요. 저는 공룡 책을 즐겨 읽어요.'], answer: '저는 준호예요. 저는 공룡 책을 즐겨 읽어요.' },
        { type: 'short', prompt: '내가 모은 자료 가운데 소개에 꼭 넣고 싶은 것을 쓰세요.' },
      ],
      easy: {
        note: '틀에 맞추어 빈칸만 채워요.',
        items: [
          { type: 'blank', prompt: '빈칸을 채워 나를 소개하세요.', text: '저는 ( )예요. 저는 ( )을/를 좋아해요.' },
          { type: 'choice', prompt: '소개의 첫 문장에 넣을 것에 ○ 하세요.', options: ['인사와 이름', '그래서'], answer: '인사와 이름' },
          { type: 'draw', prompt: '소개하는 내 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 맞게 놓으면 초록 테두리가 생겨요. 활동지는 빈칸 두 개만 채워요.',
      base: '모은 자료를 소개 문장으로 바꾸고, 세 문장 틀에 내 소개를 써요.',
      challenge: '그럴듯한 함정 카드가 섞여 있어요. 셋째 문장에 \'그래서\' 뒤 까닭이 되는 자료를 하나 더 붙여요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 자기소개는 이름과 나이만 말하면 된다고 여긴다 → "듣는 친구가 무엇을 새로 알게 될까요?"를 묻고 기록표·들은 답을 다시 펴게 한다. ② 들은 답을 그대로 옮겨 \'너는\'이라고 쓴다 → \'저는\'으로 바꾸어 소리 내어 읽게 한다. ③ 자료가 모자란 학생 → 오늘 짝에게 한 가지를 물어 그 답으로 둘째 문장을 쓰게 한다.',
  }));

  lessons.push(L(46, {
    title: '친구 소개를 듣고 고칠 점 말해 주며 연습하기',
    objective: '친구의 자기소개를 듣고 들어간 것과 빠진 것을 찾아 도움 되는 말로 알려 주고, 짝에게 들은 말로 내 소개를 고쳐 다시 말할 수 있다.',
    illustration: ART('two paper children facing each other on small chairs, one speaking while the other listens with a thumbs-up, a tiny sand timer between them', '짝과 소개 연습', [
      { motif: 'cloud', x: 330, y: 80, s: 0.6 }, { motif: 'tree', x: 90, y: 214 }, { motif: 'flower', x: 400, y: 230 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '지난 시간에 쓴 세 문장 소개를 펴게 한다. "발표하기 전에 짝에게 먼저 들려주고 고치면 더 좋은 소개가 돼요." 교사가 일부러 "저는 김선생이에요. 저는 커피를 좋아해요."라고만 소개한 뒤 묻는다. "선생님 소개에 무엇이 들어 있었나요? 빠진 것은요?" 시연 단추로 \'이름\' 칸이 표시되는 모습을 보여 준다.',
        student: '선생님 소개에 들어 있던 것과 빠진 것을 말해 봐요.',
        demo: { tool: 'kitchen', options: { mode: 'checklist', title: '선생님 소개에 들어간 것', items: [{ id: 'name', text: '이름' }, { id: 'like', text: '좋아하는 것' }, { id: 'good', text: '잘하는 것' }] }, sequence: [{ checklist: ['name'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 친구 소개에 들어간 것과 빠진 것 찾기', minutes: 10, tool: 'kitchen',
            teacher: '"친구 소개를 한 문장씩 끊어 들어요. 문장마다 이름인지, 좋아하는 것인지, 잘하는 것인지, 더 해 보고 싶은 것인지 생각해요." \'좋아해요\'와 \'잘해요\'를 헷갈리는 학생에게는 두 낱말에 밑줄을 긋게 한다. 셋째 문항은 들어간 것이 아니라 빠진 것을 묻는다는 것을 짚는다.',
            task: '친구의 소개 글을 읽고 들어간 것, 또는 빠진 것만 표시해요.',
            levels: CARD_LV,
            items: [
              { prompt: '준호의 소개: "저는 준호예요. 저는 공룡을 좋아해요." 준호 소개에 들어간 것만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '준호 소개에 들어간 것', items: [{ id: 'name', text: '이름' }, { id: 'like', text: '좋아하는 것' }, { id: 'good', text: '잘하는 것' }, { id: 'want', text: '더 해 보고 싶은 것' }] },
                target: { checklist: ['name', 'like'] }, difficulty: 0.1,
                hints: ['소개 글을 한 문장씩 끊어 읽고, 문장마다 무엇을 말했는지 생각해요.', '표시한 것과 글을 하나씩 견주어 보세요. 글에 없는 것을 표시했거나 들어간 것을 빠뜨렸어요.', '"저는 준호예요"는 이름, "공룡을 좋아해요"는 좋아하는 것이에요. 이 두 가지만 표시해요.'] },
              { prompt: '민지의 소개: "저는 민지예요. 종이접기를 잘하고, 수영을 더 배워 보고 싶어요." 들어간 것만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '민지 소개에 들어간 것', items: [{ id: 'name', text: '이름' }, { id: 'like', text: '좋아하는 것' }, { id: 'good', text: '잘하는 것' }, { id: 'want', text: '더 해 보고 싶은 것' }] },
                target: { checklist: ['name', 'good', 'want'] }, difficulty: 0.15,
                hints: ['문장 끝말을 살펴요. \'~예요\', \'~잘하고\', \'~보고 싶어요\'가 무엇을 말하는지 생각해요.', '표시한 것을 다시 보세요. 민지는 무엇을 좋아한다고 말했나요? 글에 그런 말이 있는지 찾아요.', '이름, 잘하는 것(종이접기), 더 해 보고 싶은 것(수영)을 표시해요.'] },
              { prompt: '하준이의 소개: "저는 곤충을 좋아하고, 달리기를 잘해요." 하준이가 빠뜨린 것만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '하준이 소개에 빠진 것', items: [{ id: 'name', text: '이름' }, { id: 'like', text: '좋아하는 것' }, { id: 'good', text: '잘하는 것' }, { id: 'want', text: '더 해 보고 싶은 것' }] },
                target: { checklist: ['name', 'want'] }, difficulty: 0.2,
                hints: ['이번에는 들어간 것이 아니라 빠진 것을 찾아요. 먼저 들어간 것을 손가락으로 짚어요.', '표시한 것 가운데 글에 이미 나온 것이 있는지, 빠진 것을 하나 놓쳤는지 살펴요.', '하준이는 좋아하는 것과 잘하는 것을 말했어요. 빠진 것은 이름과 더 해 보고 싶은 것이에요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 도움 되는 말로 알려 주고 받아들이기', minutes: 8, tool: 'emotion',
            teacher: '"친구 소개를 듣고 \'별로야\'라고 하면 친구는 무엇을 고쳐야 할지 알 수 있을까요?" 잘 들린 점 하나와 더하면 좋을 점 하나를 말하는 것이 도움 되는 말이라고 짚는다. 고칠 점을 들은 사람은 "고마워, 넣어 볼게"로 받아들이게 한다.',
            task: '친구 소개를 듣고 해 줄 도움 되는 말을 고르고, 고칠 점을 들었을 때 할 말을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '친구 소개를 들은 뒤 해 줄 도움 되는 말만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', weather: false, basket: '도움 되는 말', cards: ['"목소리가 또렷해서 잘 들렸어"', '"잘하는 것도 넣으면 좋겠어"', '"너는 그것밖에 못 해?"', '"내 소개가 더 재미있어"'] },
                target: { pick: ['"목소리가 또렷해서 잘 들렸어"', '"잘하는 것도 넣으면 좋겠어"'] }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['"목소리가 또렷해서 잘 들렸어"', '"잘하는 것도 넣으면 좋겠어"', '"너는 그것밖에 못 해?"', '"내 소개가 더 재미있어"', '"그냥 몰라"'] } } } },
              { prompt: '민지가 "저는 민지예요. 저는 고양이를 좋아해요."라고 소개했어요. 짝인 서아는 어떻게 말해 주면 좋을까요?', toolOptions: { mode: 'branch', who: '서아', situation: '민지의 소개를 듣고 서아가 한마디 해 주려고 해요.', choices: [
                { id: 'help', text: '"고양이 이야기가 잘 들렸어. 잘하는 것도 넣으면 좋겠어."', result: '민지가 무엇을 더 넣을지 알고 고쳐 말해요.', mood: '고마움' },
                { id: 'vague', text: '"음, 그냥 괜찮아."', result: '민지는 무엇을 고쳐야 할지 몰라요.', mood: '아쉬움', why: '잘 들린 점과 더할 점을 하나씩 말해 주면 도움이 돼요.' },
                { id: 'mean', text: '"너무 짧아서 재미없어."', result: '민지가 속상해서 다시 말하기 싫어해요.', mood: '속상함', why: '고칠 점은 친구가 해 볼 수 있는 말로 알려 줘요.' }] }, target: { choice: 'help' }, difficulty: 0.15,
                hints: ['보기마다 그 말을 들은 민지가 무엇을 고쳐야 할지 알 수 있는지 따져 봐요.', '고른 말에 잘 들린 점과 더할 점이 들어 있는지 살펴보세요.', '잘 들린 점(고양이 이야기)과 더할 점(잘하는 것)을 함께 말해 주는 보기를 골라요.'] },
              { prompt: '짝이 하준이에게 "더 해 보고 싶은 것도 넣으면 좋겠어"라고 했어요. 하준이는 어떻게 하면 좋을까요?', toolOptions: { mode: 'branch', who: '하준', situation: '짝에게 내 소개에 더할 점을 들었어요.', choices: [
                { id: 'thanks', text: '"고마워, 넣어 볼게." 하고 문장을 더해요', result: '하준이의 소개가 더 길고 하준이다워져요.', mood: '뿌듯함' },
                { id: 'no', text: '"싫어, 내 마음이야." 하고 그대로 둬요', result: '짝이 다음부터 도움 되는 말을 해 주기 어려워해요.', mood: '아쉬움', why: '들은 말을 받아들이면 소개가 더 좋아져요.' },
                { id: 'cry', text: '틀렸다는 말로 듣고 소개를 지워 버려요', result: '애써 쓴 세 문장이 없어져요.', mood: '속상함', why: '더할 점은 틀렸다는 말이 아니라 더 좋게 하는 방법이에요.' }] }, target: { choice: 'thanks' }, difficulty: 0.1,
                hints: ['더할 점은 틀렸다는 말이 아니라 소개를 더 좋게 하는 방법이에요. 보기마다 소개가 어떻게 될지 떠올려요.', '고른 보기대로 하면 하준이의 소개가 더 좋아지는지 살펴보세요.', '고맙다고 말하고 더 해 보고 싶은 것을 문장으로 더하는 보기를 골라요.'] },
            ],
          },
          {
            id: 'a3', title: '활동 3. 짝과 바꾸어 연습하고 고쳐 말하기 (실천)', minutes: 10, tool: 'timer',
            teacher: '"말하는 사람 1분, 짝이 알려 주는 말 30초, 고쳐서 다시 1분이에요." 교사가 손뼉으로 차례를 바꾼다. 말하는 사람은 활동지를 보되 짝의 얼굴도 보게 하고, 듣는 사람은 끝까지 듣고 나서 말해 준다. 고친 문장은 활동지에 빨간 색연필로 더하게 한다.',
            task: '연습 차례를 세우고, 짝과 바꾸어 소개를 연습한 뒤 해낸 것을 점검해요.',
            levels: TIMER_LV,
            items: [
              { prompt: '짝과 소개를 연습하는 차례대로 카드를 놓아 보세요.', toolOptions: { cards: ['더할 점을 넣어 문장을 고쳐요', '짝 앞에서 세 문장으로 소개해요', '고친 소개를 다시 말해요', '짝이 잘 들린 점과 더할 점을 말해 줘요'] },
                target: { order: ['짝 앞에서 세 문장으로 소개해요', '짝이 잘 들린 점과 더할 점을 말해 줘요', '더할 점을 넣어 문장을 고쳐요', '고친 소개를 다시 말해요'] }, difficulty: 0.1,
                hints: ['먼저 말해야 짝이 들을 수 있고, 짝의 말을 들어야 고칠 수 있어요.', '놓은 차례대로 해 본다고 떠올려 보세요. 고치기 전에 짝의 말을 듣는 자리가 있는지 살펴요.', '소개하기 → 짝이 말해 주기 → 문장 고치기 → 다시 말하기 차례예요.'] },
              { prompt: '짝과 차례를 바꾸어 소개하고, 들은 말로 고쳐 한 번 더 말한 뒤 "다 했어요"를 누르세요.', toolOptions: { doneLabel: '짝과 바꾸어 고쳐 말해 보았어요' }, free: true },
              { prompt: '연습하며 해낸 것을 하나씩 표시해요.', target: { selfCheck: ['짝의 얼굴을 보며 말했어요', '짝에게 잘 들리는 목소리로 말했어요', '더할 점을 넣어 다시 말했어요'] }, difficulty: 0.05 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '희망하는 두세 명이 고친 소개를 반 전체에 들려준다. 들은 학생들은 처음보다 무엇이 더해졌는지 말한다. "짝에게 들은 말 가운데 가장 도움이 된 것은 무엇이었나요?" 다음 시간에는 가장 나다운 점을 골라 까닭을 붙여 본다고 예고하고 출구 질문을 푼다.',
        exitTicket: [
          { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '서아 소개에 들어간 것', items: [{ id: 'name', text: '이름' }, { id: 'like', text: '좋아하는 것' }, { id: 'good', text: '잘하는 것' }, { id: 'want', text: '더 해 보고 싶은 것' }] }, prompt: '서아의 소개: "저는 서아예요. 저는 그림을 잘 그려요." 들어간 것만 표시해 보세요.', target: { checklist: ['name', 'good'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '친구 소개를 듣고 해 줄 말로 가장 도움 되는 것은 무엇일까요?', options: ['"별로야."', '"목소리가 잘 들렸어. 좋아하는 까닭도 말해 주면 좋겠어."', '"내가 대신 말해 줄게."'], answer: 1, difficulty: 0.1, explain: '잘한 점 하나와 더하면 좋을 점 하나를 말해 주면 친구가 고칠 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '짝과 소개 연습',
      items: [
        { type: 'table', prompt: '짝의 소개를 듣고 쓰세요.', columns: ['잘 들린 점', '더하면 좋을 점'], rows: 1 },
        { type: 'check', prompt: '하준이의 소개 "저는 하준이에요. 저는 달리기를 잘해요."에 들어간 것에 모두 ✓ 하세요.', options: ['이름', '좋아하는 것', '잘하는 것'], answer: ['이름', '잘하는 것'] },
        { type: 'choice', prompt: '고칠 점을 들었을 때 알맞은 말에 ○ 하세요.', options: ['"고마워, 넣어 볼게."', '"싫어, 내 마음이야."'], answer: '"고마워, 넣어 볼게."' },
        { type: 'short', prompt: '짝에게 들은 말로 고친 내 소개 문장을 쓰세요.' },
      ],
      easy: {
        note: '잘 들린 점 하나를 먼저 말해요.',
        items: [
          { type: 'short', prompt: '짝의 소개에서 잘 들린 것 하나를 쓰세요.' },
          { type: 'choice', prompt: '도움 되는 말에 ○ 하세요.', options: ['"잘 들렸어"', '"재미없어"'], answer: '"잘 들렸어"' },
          { type: 'draw', prompt: '짝과 소개를 연습하는 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 맞게 놓으면 초록 테두리가 생겨요. 짝에게는 잘 들린 점 하나만 말해 줘도 돼요.',
      base: '친구 소개에서 들어간 것과 빠진 것을 찾고, 짝과 바꾸어 고쳐 말해요.',
      challenge: '함정 말 카드가 더 있어요. 짝에게 잘 들린 점과 더할 점을 모두 말해 주고, 고친 문장을 하나 이상 더해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 고칠 점을 \'틀렸다\'는 말로 듣고 속상해한다 → 더할 점은 소개를 더 좋게 하는 방법이라고 짚고, 먼저 잘 들린 점을 말하게 한다. ② 듣는 사람이 말 도중에 끼어든다 → 1분 동안은 끝까지 듣고 나서 말하기로 약속한다. ③ 여전히 이름과 나이만 말하는 학생 → 기록표나 배지를 손에 들고 거기서 한 가지를 골라 말하게 한다.',
  }));

  lessons.push(L(47, {
    title: '가장 나다운 점을 고르고 까닭 대어 말하기',
    objective: '모은 자료에서 여러 번 나온 내 모습을 찾아 가장 나다운 점을 고르고, 그 까닭을 자료를 들어 말할 수 있다.',
    illustration: ART('a paper child standing beside a picture graph of collected answers, one tall row highlighted with a star, holding a card that says why', '가장 나다운 점', [
      { motif: 'star', x: 100, y: 70, s: 0.7 }, { motif: 'leaf', x: 80, y: 214 }, { motif: 'tree', x: 410, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"\'저는 2학년이에요\', \'저는 눈이 두 개예요\'는 나다운 점일까요?" 반 친구 모두에게 해당하는 말이라는 것을 함께 확인한다. "나다운 점은 다른 친구와 견주었을 때 나를 알아볼 수 있는 모습이에요. 그리고 엄마도, 짝도, 기록표도 같은 말을 하면 정말 나다운 점일 가능성이 커요." 시연 단추로 그림그래프가 그려지는 모습을 보여 준다.',
        student: '가족과 친구가 나에 대해 똑같이 말한 것이 있나요?',
        demo: { tool: 'chart', options: { type: 'picture', title: '서아에 대해 들은 말', data: [['잘 웃어요', 3], ['노래를 잘해요', 1]], unit: '명', xLabel: '들은 말', yLabel: '말한 사람 수', icons: [{ value: 5, name: '5명' }, { value: 1, name: '1명' }], given: [1] }, sequence: [{ build: true }] },
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 여러 번 나온 모습에서 나다운 점 찾기', minutes: 13, tool: 'chart',
            teacher: '"그래프의 줄이 가장 긴 것은 가장 많은 사람이 말한 내 모습이에요." 큰 동그라미는 5명, 작은 동그라미는 1명이라는 것을 다시 짚는다. 한 사람만 말한 모습도 나의 모습이지만, 여러 사람이 같게 말하면 더 믿을 만한 까닭이 된다고 말한다.',
            task: '모은 답을 센 그래프를 읽고, 가장 많이 나온 모습과 그 수를 찾아요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '하준이에 대해 모은 답을 센 그래프예요. 가장 많은 사람이 말한 하준이의 모습을 골라 보세요.', toolOptions: { type: 'picture', mode: 'read', title: '하준이에 대해 들은 말', data: [['친구를 잘 도와요', 6], ['종이접기를 잘해요', 2], ['노래를 좋아해요', 1]], unit: '명', xLabel: '들은 말', yLabel: '말한 사람 수', icons: [{ value: 5, name: '5명' }, { value: 1, name: '1명' }], question: '가장 많은 사람이 말한 하준이의 모습은 무엇일까요?', choices: ['친구를 잘 도와요', '종이접기를 잘해요', '노래를 좋아해요'] }, target: { pick: 0 }, difficulty: 0.1,
                predict: { q: '가장 많은 사람이 말한 모습은 줄이 어떨까요?', options: ['가장 길어요', '가장 짧아요'], answer: 0 },
                conclude: '여러 사람이 같게 말한 모습은 나다운 점을 말할 때 믿을 만한 까닭이 돼요.' },
              { prompt: '민지에 대해 들은 말 그래프를 완성하세요.', toolOptions: { type: 'picture', title: '민지에 대해 들은 말', data: [['책을 즐겨 읽어요', 7], ['정리를 잘해요', 3], ['춤을 좋아해요', 2]], unit: '명', xLabel: '들은 말', yLabel: '말한 사람 수', icons: [{ value: 5, name: '5명' }, { value: 1, name: '1명' }] }, target: { build: true }, difficulty: 0.15,
                levels: { easy: { toolOptions: { given: [0] }, prompt: '민지에 대해 들은 말 그래프를 완성하세요. 첫 줄은 미리 채워 두었어요.' } } },
              { prompt: '준호에 대해 들은 말 그래프에서 \'곤충을 잘 알아요\'라고 말한 사람은 몇 명인지 써 보세요.', toolOptions: { type: 'picture', mode: 'read', title: '준호에 대해 들은 말', data: [['곤충을 잘 알아요', 8], ['인사를 잘해요', 4], ['키가 커요', 1]], unit: '명', xLabel: '들은 말', yLabel: '말한 사람 수', icons: [{ value: 5, name: '5명' }, { value: 1, name: '1명' }], question: '\'곤충을 잘 알아요\'라고 말한 사람은 몇 명일까요?' }, target: { value: 8 }, difficulty: 0.2,
                hints: ['큰 동그라미는 5명, 작은 동그라미는 1명이에요. 그 줄의 동그라미를 세어 봐요.', '큰 동그라미를 먼저 5로 세고, 작은 동그라미를 하나씩 이어 세어 보세요.', '큰 동그라미 하나와 작은 동그라미 셋이 있어요. 5에서 6, 7, 8로 이어 세요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 까닭을 붙여 가장 나다운 점 말하기 (실천)', minutes: 15, tool: 'emotion',
            teacher: '"가장 나다운 점을 말할 때는 \'왜냐하면\' 뒤에 자료를 붙여요. \'그냥요\'는 까닭이 아니에요." 빈칸 문항을 함께 본 뒤, 각자 활동지에 가장 나다운 점과 까닭을 쓴다. 그다음 7분 동안 교실을 돌며 친구 세 명에게 말하고, 들은 친구는 "그 까닭이 맞아" 또는 "그 자료가 어디 있었어?"로 답해 준다.',
            task: '까닭이 있는 말을 고르고 빈칸을 채운 뒤, 내 나다운 점을 까닭과 함께 친구 세 명에게 말해요.',
            levels: CARD_LV,
            items: [
              { prompt: '서아가 가장 나다운 점을 말하려고 해요. 까닭이 알맞게 붙은 말을 골라 보세요.', toolOptions: { mode: 'branch', who: '서아', situation: '서아가 친구들 앞에서 가장 나다운 점을 한 가지 말하려고 해요.', choices: [
                { id: 'why', text: '"잘 웃는 것이 가장 저다워요. 엄마도, 짝도, 선생님도 그렇게 말했어요."', result: '친구들이 고개를 끄덕이며 서아다운 점을 알게 돼요.', mood: '뿌듯함' },
                { id: 'just', text: '"잘 웃는 것이 가장 저다워요. 그냥요."', result: '친구들이 왜 그런지 궁금해해요.', mood: '아쉬움', why: '\'그냥요\'는 까닭이 아니에요. 모은 자료를 붙여요.' },
                { id: 'grade', text: '"저는 2학년이라서 가장 저다워요."', result: '우리 반 모두가 2학년이라 서아만의 모습을 알 수 없어요.', mood: '아쉬움', why: '반 친구 모두에게 해당하는 말은 나다운 점이 아니에요.' }] }, target: { choice: 'why' }, difficulty: 0.15,
                hints: ['보기마다 \'왜냐하면\'에 해당하는 까닭이 있는지, 그 까닭이 서아만의 모습을 말하는지 따져 봐요.', '고른 보기에 모은 자료(누가 그렇게 말했는지)가 까닭으로 붙어 있는지 살펴보세요.', '엄마·짝·선생님이 똑같이 말했다는 자료를 까닭으로 붙인 보기를 골라요.'] },
              { prompt: '준호의 자료: 기록표에 책 읽기가 가장 많아요. 빈칸을 채워 준호의 나다운 점과 까닭을 완성해 보세요.', toolOptions: { mode: 'fill', weather: false, cards: ['책을 즐겨 읽는', '2학년인', '기록표에 책 읽기가 가장 많기', '오늘 날씨가 맑기'], slots: [{ id: 'b1', label: '가장 저다운 점은 ___ 것이에요.' }, { id: 'b2', label: '왜냐하면 ___ 때문이에요.' }] },
                target: { fill: { b1: '책을 즐겨 읽는', b2: '기록표에 책 읽기가 가장 많기' } }, difficulty: 0.2,
                hints: ['첫 빈칸에는 준호만의 모습, 둘째 빈칸에는 그렇게 말할 수 있는 자료가 들어가요.', '넣은 카드를 다시 보세요. 반 친구 모두에게 해당하는 말이나 준호와 상관없는 말이 들어갔어요.', '첫 빈칸은 책을 즐겨 읽는, 둘째 빈칸은 기록표에 책 읽기가 가장 많기예요.'] },
              { prompt: '활동지에 가장 나다운 점과 그 까닭을 쓰고, 친구 세 명에게 까닭과 함께 말한 뒤 "다 했어요"를 누르세요.', toolOptions: { cards: ['뿌듯함', '신남'], slots: [{ id: 's1', label: '세 명에게 말했어요' }] }, free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"친구에게 들은 나다운 점 가운데 기억에 남는 것은 무엇인가요?" 두세 명이 친구의 나다운 점을 소개한다. 다음 시간에는 모둠 발표회에서 세 문장 소개를 하고 \'나\' 단원을 마무리한다고 예고하고 출구 질문을 푼다.',
        exitTicket: [
          { type: 'tool', tool: 'chart', options: { type: 'picture', mode: 'read', title: '서아에 대해 들은 말', data: [['동생을 잘 돌봐요', 2], ['그림을 잘 그려요', 7], ['춤을 좋아해요', 3]], unit: '명', icons: [{ value: 5, name: '5명' }, { value: 1, name: '1명' }], question: '가장 많은 사람이 말한 서아의 모습은 무엇일까요?', choices: ['동생을 잘 돌봐요', '그림을 잘 그려요', '춤을 좋아해요'] }, prompt: '서아에 대해 들은 말 그래프를 보고 가장 많은 사람이 말한 모습을 골라 보세요.', target: { pick: 1 }, difficulty: 0.1 },
          { type: 'choice', prompt: '가장 나다운 점을 말할 때 까닭으로 알맞은 것은 무엇일까요?', options: ['"그냥 그런 것 같아요."', '"짝과 형이 똑같이 그렇게 말했어요."', '"저는 2학년이에요."'], answer: 1, difficulty: 0.1, explain: '여러 사람에게 들은 말이나 기록표 같은 자료가 까닭이 돼요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '가장 나다운 점',
      items: [
        { type: 'figure', prompt: '그래프를 보고 물음에 답하세요.', tool: 'chart', figures: [{ options: { type: 'picture', mode: 'read', title: '하준이에 대해 들은 말', data: [['친구를 잘 도와요', 6], ['종이접기를 잘해요', 2], ['노래를 좋아해요', 1]], unit: '명', icons: [{ value: 5, name: '5명' }, { value: 1, name: '1명' }] }, caption: '가장 많은 사람이 말한 모습: ________' }], answer: '친구를 잘 도와요' },
        { type: 'blank', prompt: '내 자료로 빈칸을 채우세요.', text: '가장 저다운 점은 ( )예요. 왜냐하면 ( ) 때문이에요.' },
        { type: 'choice', prompt: '나다운 점이 될 수 있는 말에 ○ 하세요.', options: ['저는 2학년이에요.', '저는 곤충 이름을 잘 알아요.'], answer: '저는 곤충 이름을 잘 알아요.' },
        { type: 'table', prompt: '친구 세 명에게 말하고 들은 답을 쓰세요.', columns: ['친구', '친구가 해 준 말'], rows: 3 },
      ],
      easy: {
        note: '\'왜냐하면\' 뒤에 내 자료를 써요.',
        items: [
          { type: 'short', prompt: '가장 나다운 점 하나를 쓰세요.' },
          { type: 'choice', prompt: '까닭이 될 수 있는 것에 ○ 하세요.', options: ['짝이 그렇게 말했어요', '그냥요'], answer: '짝이 그렇게 말했어요' },
          { type: 'draw', prompt: '가장 나다운 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '그래프 첫 줄을 미리 채워 두었어요. 카드를 맞게 놓으면 초록 테두리가 생겨요.',
      base: '그래프에서 가장 많이 나온 모습을 찾고, 가장 나다운 점을 까닭과 함께 말해요.',
      challenge: '큰 동그라미와 작은 동그라미를 이어 세어 수를 쓰고, 까닭을 자료 두 가지로 붙여 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 반 모두에게 해당하는 말(2학년, 우리 반)을 나다운 점으로 고른다 → "우리 반 친구 모두가 할 수 있는 말인가요?"를 묻는다. ② 까닭 없이 "그냥요"라고 한다 → 기록표·들은 답·배지를 펴고 거기서 찾게 한다. ③ 한 사람만 말한 모습은 틀렸다고 여긴다 → 그것도 나의 모습이고, 여러 사람이 말하면 더 믿을 만하다는 것만 짚는다.',
  }));

  lessons.push(L(48, {
    title: '모둠 자기소개 발표회 열고 「나」 단원 돌아보기',
    objective: '모둠 발표회에서 세 문장 자기소개를 하고, 「나」 단원에서 한 일을 네 갈래로 묶으며 내가 해낸 것을 스스로 평가할 수 있다.',
    illustration: ART('four paper children sitting in a small circle taking turns to introduce themselves, a wall behind them showing a heart for health, a dancing figure, a Korean flag and a question tree', '「나」 단원을 마치며', [
      { motif: 'star', x: 100, y: 70, s: 0.7 }, { motif: 'flower', x: 400, y: 230 }, { motif: 'tree', x: 80, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '첫 시간에 칠판 귀퉁이에 적었던 질문과 이 단원의 네 갈래(건강한 몸, 몸 표현, 우리나라, 나 탐구)를 칠판에 다시 쓴다. "48차시 동안 \'나\'에 대해 공부했어요. 오늘은 모둠에서 나를 소개하고, 단원 전체를 돌아봐요." 모둠(4명)마다 둥글게 앉게 하고, 시연 단추로 \'준비 운동\' 카드가 \'건강한 몸\' 가지에 놓이는 모습을 보여 준다.',
        student: '이 단원에서 가장 기억에 남는 시간은 언제였나요?',
        demo: { tool: 'mindmap', options: { topic: '「나」 단원', slots: ['건강한 몸', '몸 표현', '우리나라', '나 탐구'], cards: ['머리부터 발끝까지 준비 운동을 해요'], shuffle: false }, sequence: [{ sort: { '건강한 몸': ['머리부터 발끝까지 준비 운동을 해요'], '몸 표현': [], '우리나라': [], '나 탐구': [] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 모둠 자기소개 발표회 (실천)', minutes: 12, tool: 'timer',
            teacher: '모둠 안에서 한 사람씩 1분 동안 세 문장 소개를 한다(4명이면 4분). 한 사람이 끝날 때마다 듣는 친구 한 명이 "○○는 ~해서 ○○다워"라고 그 친구다운 점을 하나 말해 준다. 교사는 모둠을 돌며 이름과 나이만 말하는 학생에게 지난 시간 활동지를 펴게 한다. 모든 모둠이 끝나면 모둠마다 새로 안 것 한 가지를 정한다.',
            task: '발표회 차례를 세우고, 모둠에서 세 문장 소개를 한 뒤 해낸 것을 점검해요.',
            levels: TIMER_LV,
            items: [
              { prompt: '모둠 자기소개 발표회 차례대로 카드를 놓아 보세요.', toolOptions: { cards: ['듣는 친구가 그 친구다운 점을 말해 줘요', '모둠에서 새로 안 것을 하나 정해요', '모둠 친구와 둥글게 앉아요', '한 사람씩 세 문장으로 소개해요'] },
                target: { order: ['모둠 친구와 둥글게 앉아요', '한 사람씩 세 문장으로 소개해요', '듣는 친구가 그 친구다운 점을 말해 줘요', '모둠에서 새로 안 것을 하나 정해요'] }, difficulty: 0.1,
                hints: ['먼저 모여 앉아야 소개를 시작할 수 있어요. 친구다운 점은 소개를 들은 뒤에 말할 수 있어요.', '놓은 차례대로 떠올려 보세요. 소개를 듣기 전에 친구다운 점을 말하는 자리가 있는지 살펴요.', '둥글게 앉기 → 세 문장 소개 → 친구다운 점 말하기 → 새로 안 것 정하기 차례예요.'] },
              { prompt: '모둠에서 한 사람씩 1분 동안 세 문장으로 소개하고, 친구 소개를 끝까지 들은 뒤 "다 했어요"를 누르세요.', toolOptions: { plan: { work: 60, rest: 20, rounds: 4 } }, free: true },
              { prompt: '모둠 발표회에서 해낸 것을 하나씩 표시해요.', target: { selfCheck: ['세 문장으로 나를 소개했어요', '친구 소개를 끝까지 들었어요', '친구다운 점을 하나 말해 주었어요'] }, difficulty: 0.05 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 「나」 단원에서 한 일 묶기', minutes: 10, tool: 'mindmap',
            teacher: '"이 단원에서 한 일을 네 갈래로 묶어 봐요." 카드를 놓을 때 "그때 무엇을 알게 되었나요?"를 묻는다. 태극기 카드를 \'몸 표현\'에 놓는 학생에게는 태극기를 그리고 다는 공부가 어느 갈래였는지 칠판의 네 갈래를 다시 짚는다.',
            task: '단원에서 한 일을 네 갈래로 묶고, 한 일과 알게 된 것을 이은 뒤 앞으로 이어 갈 다짐을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '「나」 단원에서 한 일을 네 갈래로 묶어 보세요.', toolOptions: { topic: '「나」 단원', slots: ['건강한 몸', '몸 표현', '우리나라', '나 탐구'], cards: ['계단을 손잡이 잡고 올라요', '토끼를 깡충깡충 흉내 내요', '국경일에 태극기를 달아요', '하루 기록표를 써요'] },
                target: { sort: { '건강한 몸': ['계단을 손잡이 잡고 올라요'], '몸 표현': ['토끼를 깡충깡충 흉내 내요'], '우리나라': ['국경일에 태극기를 달아요'], '나 탐구': ['하루 기록표를 써요'] } }, difficulty: 0.1,
                hints: ['카드마다 그 일을 할 때 무엇을 공부했는지 떠올려요. 몸을 튼튼히 하는 일, 몸으로 나타내는 일, 나라와 관련된 일, 나를 알아보는 일이 있어요.', '놓은 카드를 갈래 이름과 견주어 보세요. 다른 갈래에 들어간 카드가 있어요.', '계단 오르기는 건강한 몸, 토끼 흉내는 몸 표현, 태극기는 우리나라, 기록표는 나 탐구예요.'],
                levels: { challenge: { prompt: '「나」 단원에서 한 일 여덟 장을 네 갈래로 묶어 보세요.', toolOptions: { cards: ['계단을 손잡이 잡고 올라요', '움직이기 전과 뒤에 숨을 세어요', '토끼를 깡충깡충 흉내 내요', '바람을 몸 크기로 나타내요', '국경일에 태극기를 달아요', '무궁화의 뜻을 알아봐요', '하루 기록표를 써요', '가족에게 나에 대해 여쭤요'] }, target: { sort: { '건강한 몸': ['계단을 손잡이 잡고 올라요', '움직이기 전과 뒤에 숨을 세어요'], '몸 표현': ['토끼를 깡충깡충 흉내 내요', '바람을 몸 크기로 나타내요'], '우리나라': ['국경일에 태극기를 달아요', '무궁화의 뜻을 알아봐요'], '나 탐구': ['하루 기록표를 써요', '가족에게 나에 대해 여쭤요'] } } } } },
              { prompt: '단원에서 한 일마다 그때 알게 된 것을 이어 보세요.', toolOptions: { mode: 'match', topic: '한 일과 알게 된 것', slots: [{ id: 's1', label: '움직이기 전과 뒤에 숨 세기' }, { id: 's2', label: '친구의 몸 표현 맞히기' }, { id: 's3', label: '가족과 친구에게 나에 대해 묻기' }], cards: ['움직이면 숨이 빨라져요', '빠르기와 크기를 바꾸면 더 잘 보여요', '남이 본 내 모습도 있어요'] },
                target: { match: { s1: '움직이면 숨이 빨라져요', s2: '빠르기와 크기를 바꾸면 더 잘 보여요', s3: '남이 본 내 모습도 있어요' } }, difficulty: 0.15 },
              { prompt: '「나」 단원을 마치며 앞으로 이어 갈 다짐으로 알맞은 것만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '앞으로의 다짐', basket: '이어 갈 다짐', cards: ['움직이기 전에 준비 운동을 해요', '궁금한 나에 대해 계속 물어봐요', '기록표는 한 번 쓰면 그만둬요', '태극기는 아무 데나 두어요'] },
                target: { pick: ['움직이기 전에 준비 운동을 해요', '궁금한 나에 대해 계속 물어봐요'] }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a3', title: '활동 3. 나를 돌아보는 스스로 평가', minutes: 6, tool: 'emotion',
            teacher: '"정답은 없어요. 내가 해낸 만큼 솔직하게 골라요. 조금이어도 괜찮아요." 고르는 동안 교사는 돌아다니지 않고 기다린다. 결과는 다음 단원에서 더 해 볼 것을 정하는 데만 쓴다고 말해 준다.',
            task: '단원에서 해낸 만큼 내 마음 그대로 골라요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '건강한 몸을 위해 준비 운동과 걷기를 얼마나 꾸준히 했나요? 내 모습 그대로 골라요.', toolOptions: { mode: 'scale', situation: '건강한 몸을 위해 준비 운동, 걷기, 계단 오르기를 해 보았어요.', feeling: '뿌듯함', steps: 3, scaleLabels: { 1: '조금', 2: '꽤', 3: '아주 많이' } }, target: { level: 'any' }, difficulty: 0.05,
                hints: ['정답은 없어요. 이 단원에서 내가 실제로 한 일을 떠올려 보고 마음 그대로 눈금을 골라요.'] },
              { prompt: '몸 표현과 우리나라 공부를 얼마나 즐겁게 했나요? 내 마음 그대로 골라요.', toolOptions: { mode: 'scale', situation: '몸으로 동물과 날씨를 나타내고, 태극기와 무궁화를 알아보았어요.', feeling: '신남', steps: 3, scaleLabels: { 1: '조금', 2: '꽤', 3: '아주 많이' } }, target: { level: 'any' }, difficulty: 0.05,
                hints: ['정답은 없어요. 이 단원에서 내가 실제로 한 일을 떠올려 보고 마음 그대로 눈금을 골라요.'] },
              { prompt: '모은 자료로 나를 소개하는 것을 얼마나 잘 해냈나요? 내 모습 그대로 골라요.', toolOptions: { mode: 'scale', situation: '기록하고 묻고 모은 자료로 세 문장 소개를 했어요.', feeling: '뿌듯함', steps: 3, scaleLabels: { 1: '조금', 2: '꽤', 3: '아주 많이' } }, target: { level: 'any' }, difficulty: 0.05,
                hints: ['정답은 없어요. 이 단원에서 내가 실제로 한 일을 떠올려 보고 마음 그대로 눈금을 골라요.'] },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '모둠마다 정한 \'새로 안 것\'을 한 가지씩 말한다(여섯 모둠, 모둠마다 30초). 첫 시간의 질문을 다시 읽는다. "달리기를 잘해야만 몸을 움직이며 놀 수 있을까요? 이제는 어떻게 생각하나요?" 두세 명의 대답을 듣고, 나에 대해 알아보는 일은 자라면서 계속된다고 말한 뒤 출구 질문을 푼다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '「나」 단원', slots: ['건강한 몸', '우리나라', '나 탐구'], cards: ['국기에 대한 경례를 해요', '나에 대해 궁금한 물음을 만들어요', '숨을 고르며 몸의 신호를 살펴요'] }, prompt: '단원에서 한 일을 세 갈래로 묶어 보세요.', target: { sort: { '건강한 몸': ['숨을 고르며 몸의 신호를 살펴요'], '우리나라': ['국기에 대한 경례를 해요'], '나 탐구': ['나에 대해 궁금한 물음을 만들어요'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '나에 대해 알아보는 일은 언제 끝날까요?', options: ['이 단원이 끝나면 끝나요', '자라면서 계속 알아볼 수 있어요', '이름을 알면 끝나요'], answer: 1, difficulty: 0.1, explain: '나는 자라면서 달라지니 나에 대해 계속 알아볼 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '「나」 단원을 마치며',
      items: [
        { type: 'table', prompt: '「나」 단원에서 한 일을 갈래마다 하나씩 쓰세요.', columns: ['갈래', '내가 한 일'], cells: [['건강한 몸', ''], ['몸 표현', ''], ['우리나라', ''], ['나 탐구', '']] },
        { type: 'choice', prompt: '\'우리나라\' 갈래에서 한 일에 ○ 하세요.', options: ['계단 오르기', '태극기 달기', '하루 기록표 쓰기'], answer: '태극기 달기' },
        { type: 'table', prompt: '모둠 친구의 소개를 듣고 쓰세요.', columns: ['친구', '그 친구다운 점'], rows: 3 },
        { type: 'short', prompt: '다음에 나에 대해 더 알아보고 싶은 것을 쓰세요.' },
      ],
      easy: {
        note: '가장 기억에 남는 것 하나부터 써요.',
        items: [
          { type: 'short', prompt: '이 단원에서 가장 기억에 남는 일을 쓰세요.' },
          { type: 'choice', prompt: '\'건강한 몸\' 갈래에서 한 일에 ○ 하세요.', options: ['준비 운동', '태극기 달기'], answer: '준비 운동' },
          { type: 'draw', prompt: '모둠에서 나를 소개하는 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 맞게 놓으면 초록 테두리가 생겨요. 발표회에서는 두 문장만 말해도 돼요.',
      base: '모둠에서 세 문장 소개를 하고, 단원에서 한 일을 네 갈래로 묶어요.',
      challenge: '카드 여덟 장을 네 갈래로 묶고, 모둠 친구마다 그 친구다운 점을 까닭과 함께 말해 줘요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 발표가 길어져 모둠 시간이 모자란다 → 한 사람 1분을 타이머로 지키고, 세 문장만 말하게 한다. ② 스스로 평가에서 모두 \'아주 많이\'를 고르거나 친구 것을 본다 → 정답이 없고 점수가 아니라고 다시 말한다. ③ 단원 앞부분(건강한 몸·몸 표현)을 잘 기억하지 못한다 → 그때 쓴 활동지와 기록표를 펴고 카드를 놓게 한다.',
  }));

  // ── 차시 끝 ──

  PaperLessons.registerUnit({
    id: 'g2-int-1-01', schema: 'edu-unit.v1', catalogUnit: UNIT,
    grade: 2, subject: '통합교과', unitTitle: TITLE,
    flow: '1~12차시는 내 몸에서 움직이는 곳과 몸을 움직이면 좋아지는 것을 알고, 준비 운동·걷기·계단 오르기를 실천한 뒤 숨과 몸의 신호를 돌아본다. 13~24차시는 나타낼 것과 움직이는 곳을 찾아 빠르기·크기·높낮이를 바꾸어 몸으로 표현하고, 서로 맞히며 고쳐 모둠 발표회를 연다. 25~36차시는 태극기·무궁화·한글처럼 우리나라를 나타내는 것과 그 뜻을 알고, 태극기를 바르게 그리고 달며, 궁금한 것을 지도로 알아본다. 37~44차시는 나에 대한 물음과 알아볼 방법을 정하고, 하루 기록표와 가족·친구에게 들은 답으로 나에 대한 자료를 모은다. 45~48차시는 모은 자료로 세 문장 자기소개를 짓고, 짝과 고쳐 말하며, 까닭을 붙여 가장 나다운 점을 말한 뒤 모둠 발표회와 스스로 평가로 단원을 마무리한다.',
    refs: {},
    lessons: lessons,
  });
})();
