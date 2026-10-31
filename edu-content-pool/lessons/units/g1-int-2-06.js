/* 1학년 2학기 통합교과 6. 약속 — 48차시
 * 1~24차시 [바른 생활] 모두를 위한 생활환경: 불편한 곳 찾기(1~8) → 고칠 방법과 바로 할 일(9~16) → 달라진 것 돌아보기·습관(17~24)
 * 25~48차시 [즐거운 생활] 표현 재료와 용구: 재료 견주기·안전(25~32) → 오리고 붙이고 소리 내어 표현(33~40) → 정리·돌아보고 다시 하기(41~48)
 * 성취기준: units-map 단원 목록이 비어 있고 미확인(standardsVerified:false)이라 모든 차시 standards: [] (지어내지 않는다).
 * 노래·예문은 모두 직접 지었다. 학생 이름은 가명(민지·준호·하준·서아)만 쓴다.
 */
(function () {
  var UNIT = 'g1-통합교과-2학기-6';
  var TITLE = '6. 약속';
  var HEAD = 'Layered paper-cut illustration of ';
  var TAIL = ', with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.';
  function two(n) { return (n < 10 ? '0' : '') + n; }
  // 차시 머리(같은 칸)를 채운다 — 차시마다 다른 내용은 x에 그대로 적는다
  function L(n, x) {
    var head = {
      id: 'g1-int-2-06-' + two(n), schema: 'edu-lesson.v1', catalog: { unit: UNIT, lesson: n },
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

  var lessons = [];

  // ───────────────────────── 1~8차시: 불편한 곳 찾기(생활 맥락 이해) ─────────────────────────

  lessons.push(L(1, {
    title: '학교에서 불편했던 곳 떠올려 말하기',
    objective: '학교에서 다니기 불편했던 곳을 찾아 말하고, 그때 든 마음을 마음 카드로 나타낼 수 있다.',
    illustration: ART('a small paper school with a hallway where a school bag lies on the floor and a puddle near the water fountain, children looking around curiously', '학교에서 불편했던 곳은?', [
      { motif: 'house', x: 120, y: 214 }, { motif: 'house', x: 360, y: 216, color: 'sky', s: 0.9 }, { motif: 'tree', x: 240, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 7,
        teacher: '"오늘 학교에 오다가 걸려 넘어질 뻔한 곳이 있었나요?" 두세 명의 경험을 듣는다. 시연 단추로 마음 카드가 상황 옆에 놓이는 모습을 보여 준다. "이번 단원에서는 우리 모두가 편하게 다니는 학교를 만드는 약속을 정해요." 불편한 곳을 말하지 못하는 학생에게 "복도, 계단, 화장실 가운데 어디가 생각나요?"처럼 장소를 먼저 건넨다.',
        student: '학교에서 걸리거나 미끄러질 뻔했던 곳을 짝에게 말해 봐요.',
        demo: { tool: 'emotion', options: { cards: ['무서움', '속상함'], slots: [{ id: 's1', label: '수돗가 바닥이 젖어 있어요' }, { id: 's2', label: '가방에 걸려 넘어졌어요' }], shuffle: false }, sequence: [{ match: { s1: '무서움', s2: '속상함' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 편한 곳, 불편한 곳 나누기', minutes: 13, tool: 'mindmap',
            teacher: '"이 곳을 지나갈 때 발이 걸리나요, 잘 지나가나요?" 카드를 하나씩 소리 내어 읽고 몸으로 지나가는 흉내를 내 보게 한다. "나는 괜찮았는데"라고 말하는 학생에게 "가방을 메고 뛰어가는 친구라면 어떨까요?"라고 되묻는다.',
            task: '카드를 읽고 다니기 편한 곳과 불편한 곳으로 나누어 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '복도 카드를 편한 곳과 불편한 곳으로 나누어 보세요.', toolOptions: { topic: '우리 학교 복도', slots: ['다니기 편해요', '다니기 불편해요'], cards: ['복도에 가방이 쌓였어요', '복도가 넓고 깨끗해요', '문 앞에 의자가 있어요', '신발이 신발장에 있어요'] },
                target: { sort: { '다니기 편해요': ['복도가 넓고 깨끗해요', '신발이 신발장에 있어요'], '다니기 불편해요': ['복도에 가방이 쌓였어요', '문 앞에 의자가 있어요'] } }, difficulty: 0.05 },
              { prompt: '교실 카드를 편한 곳과 불편한 곳으로 나누어 보세요.', toolOptions: { topic: '우리 교실', slots: ['다니기 편해요', '다니기 불편해요'], cards: ['책상 사이가 넓어요', '바닥에 크레파스가 굴러요', '칠판 앞에 상자가 있어요', '의자를 책상에 넣었어요'] },
                target: { sort: { '다니기 편해요': ['책상 사이가 넓어요', '의자를 책상에 넣었어요'], '다니기 불편해요': ['바닥에 크레파스가 굴러요', '칠판 앞에 상자가 있어요'] } }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['책상 사이가 넓어요', '바닥에 크레파스가 굴러요', '칠판 앞에 상자가 있어요', '의자를 책상에 넣었어요', '창문 밖에 새가 있어요'] } } } },
              { prompt: '운동장과 계단 카드를 나누어 보세요. 다니는 것과 상관없는 카드는 남겨요.', toolOptions: { topic: '운동장과 계단', slots: ['다니기 편해요', '다니기 불편해요'], cards: ['계단에 손잡이가 있어요', '계단에 공이 놓여 있어요', '운동장에 웅덩이가 있어요', '오늘 점심은 국수예요'] },
                target: { sort: { '다니기 편해요': ['계단에 손잡이가 있어요'], '다니기 불편해요': ['계단에 공이 놓여 있어요', '운동장에 웅덩이가 있어요'] } }, difficulty: 0.2,
                predict: { q: '"오늘 점심은 국수예요" 카드는 어디에 놓을까요?', options: ['편한 곳', '불편한 곳', '아무 데도 안 놓아요'], answer: 2 },
                conclude: '다니는 길과 상관없는 일은 편한 곳도 불편한 곳도 아니에요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 불편할 때 내 마음 알기', minutes: 13, tool: 'emotion',
            teacher: '"걸려 넘어질 뻔했을 때 마음은 어떤 날씨였을까요?" 마음 낱말 대신 "아팠어요"처럼 몸의 느낌을 말하는 학생에게 "그때 마음 이름은 무엇일까?"를 묻는다. 불편한 곳은 누구의 잘못을 찾는 것이 아니라 함께 고칠 곳이라는 것을 짚는다.',
            task: '불편한 곳에서 생기는 일을 읽고, 그때의 마음을 골라요.',
            levels: { easy: { live: true, instant: true, steps: 3 }, base: {}, challenge: {} },
            items: [
              { prompt: '세 가지 일에 어울리는 마음 카드를 놓아 보세요.', toolOptions: { cards: ['무서움', '속상함', '편안함'], slots: [{ id: 's1', label: '젖은 바닥에서 미끄러질 뻔했어요' }, { id: 's2', label: '가방에 걸려 넘어졌어요' }, { id: 's3', label: '복도가 넓어서 잘 다녀요' }] },
                target: { match: { s1: ['무서움', '속상함'], s2: '속상함', s3: '편안함' } }, difficulty: 0.1 },
              { prompt: '화장실 문이 잠기지 않아요. 걱정되는 마음의 크기를 골라 보세요.', toolOptions: { mode: 'scale', situation: '화장실 문이 고장 나서 잠기지 않아요.', feeling: '걱정', after: '이만큼 걱정될 때는 선생님께 바로 알려요.' }, target: { level: [3, 5] }, difficulty: 0.15,
                levels: { easy: { prompt: '화장실 문이 잠기지 않아요. 걱정되는 마음을 세 칸에서 골라 보세요.', target: { level: [2, 3] } } } },
              { prompt: '복도에 가방이 놓여 지나가기 어려워요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '복도 가운데에 친구 가방이 놓여 있어요.', choices: [
                { id: 'kick', text: '발로 차서 밀어요', result: '가방이 더러워지고 친구가 속상해요.', mood: '속상함', why: '친구 가방을 발로 차면 친구 마음이 어떨까요?' },
                { id: 'tell', text: '가방 주인에게 걸어 두자고 말해요', result: '복도가 넓어져 모두 잘 다녀요.', mood: '편안함' },
                { id: 'jump', text: '뛰어넘어 가요', result: '발이 걸려 넘어질 수 있어요.', mood: '무서움', why: '뛰어넘다가 걸리면 어떻게 될지 떠올려 봐요.' }] }, target: { choice: 'tell' }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"내가 편하게 지나간 곳은 모든 친구에게 편할까요?" 출구 2번에서 "네"를 고른 학생이 많으면 팔을 다친 친구, 키가 작은 동생을 떠올리게 한다. 다음 시간에는 누구에게 불편한지 더 살펴본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { cards: ['걱정', '기쁨'], slots: [{ id: 'e1', label: '계단에 구슬이 굴러다녀요' }, { id: 'e2', label: '신발장이 가지런해요' }] }, prompt: '두 곳에 어울리는 마음 카드를 놓아 보세요.', target: { match: { e1: '걱정', e2: '기쁨' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '내가 편하게 지나간 곳은 누구에게나 편할까요?', options: ['네, 모두 편해요', '아니요, 불편한 친구도 있어요'], answer: 1, difficulty: 0.15, explain: '키가 작거나 다친 친구에게는 같은 곳도 불편할 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '학교에서 불편했던 곳',
      items: [
        { type: 'figure', wide: true, prompt: '어울리는 마음을 선으로 이으세요.', tool: 'emotion', figures: [{ options: { cards: ['무서움', '편안함'], slots: [{ id: 's1', label: '젖은 바닥' }, { id: 's2', label: '넓은 복도' }] }, caption: '' }], answer: '젖은 바닥-무서움, 넓은 복도-편안함' },
        { type: 'choice', prompt: '다니기 불편한 곳에 ○ 하세요.', options: ['손잡이가 있는 계단', '공이 굴러다니는 계단', '깨끗한 복도'], answer: '공이 굴러다니는 계단' },
        { type: 'table', prompt: '편한 곳과 불편한 곳을 하나씩 쓰세요.', columns: ['편한 곳', '불편한 곳'], rows: 2 },
        { type: 'draw', prompt: '학교에서 불편했던 곳을 그려 보세요.' },
      ],
      easy: {
        note: '걸려 넘어질 것 같은 곳, 미끄러질 것 같은 곳을 떠올려요.',
        items: [
          { type: 'choice', prompt: '불편한 곳에 ○ 하세요.', options: ['가방이 쌓인 복도', '넓은 복도'], answer: '가방이 쌓인 복도' },
          { type: 'choice', prompt: '미끄러질 뻔하면 어떤 마음일까요?', options: ['무서워요', '신나요'], answer: '무서워요' },
          { type: 'draw', prompt: '학교에서 불편했던 곳을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 놓으면 초록 테두리가 생기고, 틀리면 카드가 돌아와요. 마음 크기는 세 칸이에요.',
      base: '모두 놓은 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '다니는 것과 상관없는 함정 카드가 섞여 있어 골라내야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① "나는 괜찮았어요"로 끝낸다(나에게 편하면 모두 편하다고 여김) → 다른 친구 입장을 묻는 질문을 이어 간다. ② 불편한 곳을 말하다 특정 친구를 탓한다 → 사람보다 "놓인 물건, 젖은 바닥"처럼 곳을 말하게 한다. ③ 마음 대신 행동(울었어요)을 말한다 → 마음 이름을 되묻는다.',
  }));

  lessons.push(L(2, {
    title: '교실에서 누가 불편할지 짝 짓기',
    objective: '교실의 불편한 곳을 보고 그곳이 특히 누구에게 불편할지 골라 까닭을 말할 수 있다.',
    illustration: ART('a cozy paper classroom with a high shelf, narrow gaps between desks, and children of different heights including one with an arm sling', '누구에게 불편할까요?', [
      { motif: 'house', x: 110, y: 214, color: 'peach' }, { motif: 'tree', x: 380, y: 214 }, { motif: 'flower', x: 300, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"선생님은 키가 커서 높은 선반의 공책을 쉽게 꺼내요. 우리 반에서 키가 가장 작은 친구도 쉬울까요?" 학생 한 명이 의자 없이 칠판 맨 위를 짚어 보게 한다. 시연 단추로 \'불편한 곳\' 옆에 \'누구에게\' 카드가 놓이는 모습을 보여 준다. 나에게 편한 곳이 누구에게나 편한 것은 아니라는 것을 짚는다.',
        student: '내 키로 닿지 않는 곳이 교실 어디에 있는지 찾아봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '누구에게 불편할까?', slots: [{ id: 's1', label: '높은 선반에 공책이 있어요' }], cards: ['키가 작은 친구', '목이 마른 친구'], shuffle: false }, sequence: [{ match: { s1: '키가 작은 친구' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 불편한 곳과 사람 짝 짓기', minutes: 14, tool: 'mindmap',
            teacher: '"이 곳에서 가장 힘든 사람은 누구일까요? 왜 그렇게 생각해요?" 짝을 지은 뒤 반드시 까닭을 한 문장으로 말하게 한다. \'아무도 안 불편해요\'라는 학생에게 직접 한쪽 팔을 등 뒤로 하고 책가방을 열어 보게 한다.',
            task: '불편한 곳을 읽고, 그곳이 특히 누구에게 불편할지 카드를 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '불편한 곳마다 특히 불편할 사람 카드를 이어 보세요.', toolOptions: { mode: 'match', topic: '누구에게 불편할까?', slots: [{ id: 's1', label: '높은 선반에 공책이 있어요' }, { id: 's2', label: '책상 사이가 아주 좁아요' }], cards: ['키가 작은 친구', '휠체어를 탄 친구'] },
                target: { match: { s1: '키가 작은 친구', s2: '휠체어를 탄 친구' } }, difficulty: 0.1 },
              { prompt: '세 곳에 특히 불편할 사람 카드를 이어 보세요.', toolOptions: { mode: 'match', topic: '누구에게 불편할까?', slots: [{ id: 's1', label: '교실 문이 아주 무거워요' }, { id: 's2', label: '바닥에 연필이 굴러요' }, { id: 's3', label: '안내가 글로만 적혀 있어요' }], cards: ['팔을 다친 친구', '눈이 잘 안 보이는 친구', '글을 아직 못 읽는 동생'] },
                target: { match: { s1: '팔을 다친 친구', s2: '눈이 잘 안 보이는 친구', s3: '글을 아직 못 읽는 동생' } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['팔을 다친 친구', '눈이 잘 안 보이는 친구', '글을 아직 못 읽는 동생', '달리기를 잘하는 친구'] } } } },
              { prompt: '물통 놓는 곳이 아주 높아요. 누구에게 특히 불편할까요?', toolOptions: { mode: 'pick', basket: '불편한 사람', cards: ['키가 작은 친구', '휠체어를 탄 친구', '키가 큰 선생님'] },
                target: { pick: ['키가 작은 친구', '휠체어를 탄 친구'] }, difficulty: 0.2,
                predict: { q: '키가 큰 선생님에게도 불편할까요?', options: ['불편해요', '불편하지 않아요'], answer: 1 },
                conclude: '같은 곳도 키와 몸에 따라 편하기도 하고 불편하기도 해요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 그 친구라면 어떤 마음일까', minutes: 12, tool: 'emotion',
            teacher: '"내가 휠체어를 탄 친구라면 좁은 책상 사이를 지날 때 어떤 마음일까요?" 눈을 감고 그 친구가 되어 보게 한다. 마음 크기는 "한참 동안 지나가지 못했어요"처럼 이야기 속 근거를 손가락으로 짚고 고르게 한다. 놀리는 보기를 고르는 학생에게는 결과 칸을 소리 내어 읽게 한다.',
            task: '불편한 곳에 있는 친구가 되어 마음을 고르고, 어떻게 도울지 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '친구의 마음에 어울리는 카드를 놓아 보세요.', toolOptions: { cards: ['속상함', '고마움', '걱정'], slots: [{ id: 's1', label: '팔을 다쳐 문을 못 열어요' }, { id: 's2', label: '친구가 문을 잡아 줬어요' }] },
                target: { match: { s1: ['속상함', '걱정'], s2: '고마움' } }, difficulty: 0.1 },
              { prompt: '키가 작은 서아가 높은 선반의 공책을 못 꺼내요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '서아', situation: '서아가 발끝을 들어도 공책에 손이 닿지 않아요.', choices: [
                { id: 'laugh', text: '"키가 작네" 하고 웃어요', result: '서아가 부끄럽고 속상해요.', mood: '속상함', why: '웃음을 들은 서아의 마음을 떠올려 봐요.' },
                { id: 'help', text: '"꺼내 줄까?" 하고 물어요', result: '서아가 고맙다고 웃어요.', mood: '고마움' },
                { id: 'chair', text: '의자 위에 올라가라고 해요', result: '의자에서 떨어질 수 있어요.', mood: '걱정', why: '의자 위에 서면 어떤 일이 생길 수 있을까요?' }] }, target: { choice: 'help' }, difficulty: 0.15 },
              { prompt: '휠체어를 탄 서아가 의자에 길이 막혔어요. 서아의 속상한 마음 크기를 골라 보세요.', toolOptions: { mode: 'scale', who: '서아', situation: '서아가 휠체어를 타고 자리로 가려는데, 빼 둔 의자들이 길을 막아 한참 동안 지나가지 못했어요.', feeling: '속상함', after: '그럴 때는 의자를 책상 안으로 넣어 길을 넓혀 줘요.' }, target: { level: [3, 5] }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 찾은 곳 가운데 우리 반에서 가장 먼저 살펴보고 싶은 곳은 어디예요?" 출구 1번에서 짝을 반대로 놓은 학생은 몸으로 그 사람이 되어 보게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '누구에게 불편할까?', slots: [{ id: 'e1', label: '사물함 손잡이가 아주 높아요' }, { id: 'e2', label: '종소리가 아주 작아요' }], cards: ['키가 작은 친구', '귀가 잘 안 들리는 친구'] }, prompt: '두 곳에 특히 불편할 사람 카드를 이어 보세요.', target: { match: { e1: '키가 작은 친구', e2: '귀가 잘 안 들리는 친구' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '팔을 다친 친구에게 특히 불편한 곳은 어디일까요?', options: ['무거운 교실 문', '넓은 운동장', '밝은 창가'], answer: 0, difficulty: 0.15, explain: '무거운 문은 두 손으로 밀어야 해서 팔을 다친 친구에게 힘들어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '누구에게 불편할까요',
      items: [
        { type: 'figure', wide: true, prompt: '불편한 곳과 특히 불편할 사람을 선으로 이으세요.', tool: 'mindmap', figures: [{ options: { mode: 'match', topic: '누구에게?', slots: [{ id: 's1', label: '높은 선반' }, { id: 's2', label: '좁은 책상 사이' }], cards: ['키가 작은 친구', '휠체어를 탄 친구'] }, caption: '' }], answer: '높은 선반-키가 작은 친구, 좁은 책상 사이-휠체어를 탄 친구' },
        { type: 'choice', prompt: '키가 작은 친구를 돕는 말에 ○ 하세요.', options: ['"꺼내 줄까?"', '"키가 작네"', '"혼자 해"'], answer: '"꺼내 줄까?"' },
        { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '나에게 편한 곳도 다른 친구에게는 ___ 수 있어요.', answer: '불편할' },
        { type: 'short', prompt: '우리 교실에서 누구에게 불편할 것 같은 곳을 하나 쓰세요.' },
      ],
      easy: {
        note: '그 친구가 되었다고 생각하고 몸으로 흉내 내 봐요.',
        items: [
          { type: 'choice', prompt: '높은 선반이 불편한 친구에 ○ 하세요.', options: ['키가 작은 친구', '키가 큰 선생님'], answer: '키가 작은 친구' },
          { type: 'choice', prompt: '돕는 말에 ○ 하세요.', options: ['"도와줄까?"', '"비켜"'], answer: '"도와줄까?"' },
          { type: 'draw', prompt: '친구를 돕는 내 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 놓으면 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '모든 짝을 이은 뒤 확인을 눌러요. 짝마다 까닭을 말해요.',
      challenge: '관계없는 사람 카드가 하나 더 섞여 있어 골라내야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 나에게 편하면 누구에게나 편하다고 여긴다 → 직접 몸으로 해 보게 한다(한 팔로 문 열기, 발끝으로 선반 닿기). ② 장애가 있는 친구를 "불쌍하다"로만 말한다 → 고칠 것은 사람이 아니라 곳이라는 것을 짚는다. ③ 도움을 묻지 않고 대신 해 준다 → "도와줄까?" 하고 먼저 묻는 말을 함께 연습한다.',
  }));

  lessons.push(L(3, {
    title: '학교 지도에 불편한 곳 핀 꽂기',
    objective: '학교 칸 지도에서 다니기 불편한 곳을 찾아 핀을 꽂고, 그곳이 누구에게 불편할지 말할 수 있다.',
    illustration: ART('a simple paper map of a school yard with a gate, stairs, a ramp, a playground and a cafeteria, small paper pins standing on it', '불편한 곳에 핀을 꽂아요', [
      { motif: 'house', x: 140, y: 214 }, { motif: 'tree', x: 330, y: 214, color: 'mint' }, { motif: 'flower', x: 400, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 7,
        teacher: '"우리 학교를 하늘에서 내려다보면 어떻게 보일까요?" 칸 지도를 띄우고 정문, 계단, 급식실 자리를 함께 짚는다. 시연 단추로 핀이 \'계단\' 칸에 꽂히는 모습을 보여 준다. "핀은 다니기 불편한 곳에 꽂아요." 지도가 처음인 학생에게 우리가 아침에 들어오는 문부터 손가락으로 따라가게 한다.',
        student: '아침에 교문에서 우리 교실까지 오는 길을 지도에서 손가락으로 따라가 봐요.',
        demo: { tool: 'map', options: { grid: [5, 3], places: [{ name: '정문', icon: 'dot', at: [0, 2] }, { name: '계단', icon: 'dot', at: [2, 1] }, { name: '급식실', icon: 'house', at: [4, 0] }] }, sequence: [{ place: '계단' }] },
      },
      {
        id: 'main', title: '전개', minutes: 25,
        activities: [
          {
            id: 'a1', title: '활동 1. 이야기 속 불편한 곳 찾기', minutes: 15, tool: 'map',
            teacher: '"이야기를 잘 들어요. 준호는 어디에서 불편했을까요?" 문항 글을 함께 읽고 핀을 꽂게 한다. 장소 이름만 보고 아무 데나 꽂는 학생에게 "이야기에서 무엇이 불편했다고 했지요?"를 되묻는다.',
            task: '이야기를 읽고 그 친구가 불편했던 곳에 핀을 꽂아요.',
            levels: {
              easy: { grid: [4, 3] },
              base: { grid: [5, 3] },
              challenge: { grid: [6, 4] },
            },
            items: [
              { prompt: '비 오는 날 준호가 미끄러질 뻔한 곳은 물이 고인 곳이에요. 핀을 꽂아 보세요.', toolOptions: { places: [{ name: '정문', icon: 'dot', at: [0, 2] }, { name: '물 고인 현관', icon: 'dot', at: [1, 1] }, { name: '도서실', icon: 'library', at: [3, 0] }] }, target: { place: '물 고인 현관' }, difficulty: 0.05 },
              { prompt: '다리를 다친 민지는 계단 대신 비탈길로 다녀야 해요. 민지가 다닐 곳에 핀을 꽂아 보세요.', toolOptions: { places: [{ name: '계단', icon: 'dot', at: [1, 0] }, { name: '비탈길', icon: 'dot', at: [3, 2] }, { name: '운동장', icon: 'park', at: [2, 1] }] }, target: { place: '비탈길' }, difficulty: 0.15,
                conclude: '계단은 다리를 다친 친구에게 불편해서 비탈길이 필요해요.' },
              { prompt: '키가 작은 하준이가 손이 닿지 않아 물을 못 마셨어요. 그곳에 핀을 꽂아 보세요.', toolOptions: { places: [{ name: '높은 수돗가', icon: 'dot', at: [0, 0] }, { name: '낮은 의자', icon: 'dot', at: [2, 2] }, { name: '급식실', icon: 'house', at: [3, 1] }] }, target: { place: '높은 수돗가' }, difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 그곳은 누구에게 불편할까', minutes: 10, tool: 'mindmap',
            teacher: '"지도에서 찾은 곳을 누가 가장 힘들어할까요?" 두세 명이 고른 까닭을 듣고, 한 곳이 여러 사람에게 불편할 수 있다는 것을 칠판에 적는다.',
            task: '지도에서 찾은 곳을 누구에게 불편한지에 따라 나누어 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '불편한 곳을 불편한 사람의 가지에 나누어 놓아 보세요.', toolOptions: { topic: '누구에게 불편할까?', slots: ['다리를 다친 친구', '키가 작은 친구'], cards: ['긴 계단', '높은 수돗가', '높은 사물함', '문턱이 높은 문'] },
                target: { sort: { '다리를 다친 친구': ['긴 계단', '문턱이 높은 문'], '키가 작은 친구': ['높은 수돗가', '높은 사물함'] } }, difficulty: 0.15 },
              { prompt: '눈이 잘 안 보이는 친구와 귀가 잘 안 들리는 친구에게 불편한 곳을 나누어 보세요.', toolOptions: { topic: '누구에게 불편할까?', slots: ['눈이 잘 안 보이는 친구', '귀가 잘 안 들리는 친구'], cards: ['어두운 계단', '작은 글씨 안내판', '작은 종소리', '방송으로만 알려요'] },
                target: { sort: { '눈이 잘 안 보이는 친구': ['어두운 계단', '작은 글씨 안내판'], '귀가 잘 안 들리는 친구': ['작은 종소리', '방송으로만 알려요'] } }, difficulty: 0.25 },
              { prompt: '모두에게 편한 곳만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '모두에게 편한 곳', cards: ['손잡이가 있는 계단', '넓고 밝은 복도', '물이 고인 현관', '높은 수돗가'] },
                target: { pick: ['손잡이가 있는 계단', '넓고 밝은 복도'] }, difficulty: 0.15 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"우리 학교 지도에 핀을 꽂는다면 어디에 꽂고 싶나요?" 실제 학교에서 떠오른 곳을 두세 군데 칠판에 적어 다음 시간 둘러보기로 잇는다. 출구 1번을 틀린 학생은 이야기 글을 다시 읽게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'map', options: { grid: [5, 3], places: [{ name: '운동장', icon: 'park', at: [1, 1] }, { name: '어두운 계단', icon: 'dot', at: [3, 0] }, { name: '보건실', icon: 'hospital', at: [4, 2] }] }, prompt: '눈이 잘 안 보이는 친구가 넘어질 뻔한 곳에 핀을 꽂아 보세요.', target: { place: '어두운 계단' }, difficulty: 0.15 },
          { type: 'choice', prompt: '휠체어를 탄 친구에게 꼭 필요한 것은 무엇일까요?', options: ['비탈길', '높은 문턱', '긴 계단'], answer: 0, difficulty: 0.1, explain: '휠체어는 계단과 문턱을 오르기 어려워 비탈길이 필요해요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '학교 지도에서 불편한 곳 찾기',
      items: [
        { type: 'figure', wide: true, prompt: '다리를 다친 친구가 다닐 수 있는 길에 ○ 하세요.', tool: 'map', figures: [{ options: { grid: [5, 3], places: [{ name: '계단', icon: 'dot', at: [1, 0] }, { name: '비탈길', icon: 'dot', at: [3, 2] }, { name: '운동장', icon: 'park', at: [2, 1] }] }, caption: '' }], answer: '비탈길' },
        { type: 'choice', prompt: '키가 작은 친구에게 불편한 곳에 ○ 하세요.', options: ['높은 수돗가', '넓은 복도', '밝은 교실'], answer: '높은 수돗가' },
        { type: 'table', prompt: '불편한 곳과 누구에게 불편한지 쓰세요.', columns: ['불편한 곳', '누구에게'], cells: [['긴 계단', ''], ['작은 종소리', ''], ['', '']] },
        { type: 'draw', prompt: '우리 학교에서 핀을 꽂고 싶은 곳을 그려 보세요.' },
      ],
      easy: {
        note: '이야기에서 무엇이 불편했는지 먼저 찾아요.',
        items: [
          { type: 'choice', prompt: '비 오는 날 미끄러운 곳에 ○ 하세요.', options: ['물 고인 현관', '도서실'], answer: '물 고인 현관' },
          { type: 'choice', prompt: '휠체어를 탄 친구가 다닐 길에 ○ 하세요.', options: ['비탈길', '계단'], answer: '비탈길' },
          { type: 'draw', prompt: '불편한 곳을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '지도가 작아(4×3칸) 장소를 찾기 쉬워요. 나누기에서는 맞는 칸에 초록 테두리가 생겨요.',
      base: '5×3칸 지도에서 이야기를 읽고 핀을 꽂아요.',
      challenge: '6×4칸 지도에서 찾고, 나누기에는 함정 없이 모두 스스로 나누어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 지도 칸과 실제 장소를 잇지 못한다 → 교문에서 교실까지 손가락으로 따라가게 한다. ② 이야기 글을 읽지 않고 이름만 보고 꽂는다 → "무엇이 불편했지요?"를 먼저 묻는다. ③ 한 곳은 한 사람에게만 불편하다고 여긴다 → 계단은 다친 친구, 할머니, 유모차 모두에게 불편하다고 넓힌다. 지도는 실제 학교가 아닌 단순한 칸 지도이니, 우리 학교 이야기는 말로 덧붙인다.',
  }));

  lessons.push(L(4, {
    title: '화장실과 급식실 약속 살펴보기',
    objective: '화장실과 급식실에서 불편한 일이 생기는 까닭을 찾고, 누구에게 불편한지 말할 수 있다.',
    illustration: ART('a bright paper cafeteria with a tray line and a washroom sign, children waiting in a neat line', '함께 쓰는 곳을 살펴봐요', [
      { motif: 'house', x: 120, y: 214, color: 'buttercup' }, { motif: 'house', x: 360, y: 216, color: 'mint', s: 0.9 }, { motif: 'flower', x: 240, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"화장실에 갔는데 바닥에 휴지가 떨어져 있고 물이 계속 흐르면 어떤 마음일까요?" 경험을 두세 명 듣는다. 시연 단추로 \'물이 계속 흘러요\' 카드가 \'불편해요\' 가지로 들어가는 모습을 보여 준다. 화장실·급식실은 모두가 함께 쓰는 곳이라 한 사람이 어지르면 여러 사람이 불편해진다는 것을 짚는다.',
        student: '화장실이나 급식실에서 불편했던 일을 하나 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '화장실', slots: ['편해요', '불편해요'], cards: ['물이 계속 흘러요', '휴지가 걸려 있어요'], shuffle: false }, sequence: [{ sort: { '편해요': ['휴지가 걸려 있어요'], '불편해요': ['물이 계속 흘러요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 불편한 까닭 찾기', minutes: 13, tool: 'mindmap',
            teacher: '"왜 불편해졌을까요? 누가 무엇을 하지 않아서일까요?" 불편한 곳과 그 까닭을 잇게 한다. "청소하시는 분이 치우면 되잖아요"라는 학생에게 "다음에 오는 친구는 그 사이에 어떤 일을 겪을까요?"라고 묻는다.',
            task: '불편한 일과 그 일이 생긴 까닭을 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '불편한 일마다 생긴 까닭을 이어 보세요.', toolOptions: { mode: 'match', topic: '왜 불편할까?', slots: [{ id: 's1', label: '세면대 바닥이 미끄러워요' }, { id: 's2', label: '변기 칸에 휴지가 없어요' }], cards: ['손을 털어 물이 튀었어요', '휴지를 다 쓰고 말하지 않았어요'] },
                target: { match: { s1: '손을 털어 물이 튀었어요', s2: '휴지를 다 쓰고 말하지 않았어요' } }, difficulty: 0.1 },
              { prompt: '급식실의 불편한 일과 까닭을 이어 보세요.', toolOptions: { mode: 'match', topic: '왜 불편할까?', slots: [{ id: 's1', label: '줄이 엉켜 오래 기다려요' }, { id: 's2', label: '식판 놓는 곳에 국물이 흘렀어요' }, { id: 's3', label: '의자가 통로를 막아요' }], cards: ['새치기를 했어요', '식판을 기울여 들었어요', '의자를 넣지 않았어요'] },
                target: { match: { s1: '새치기를 했어요', s2: '식판을 기울여 들었어요', s3: '의자를 넣지 않았어요' } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['새치기를 했어요', '식판을 기울여 들었어요', '의자를 넣지 않았어요', '밥을 골고루 먹었어요'] } } } },
              { prompt: '함께 쓰는 곳을 불편하게 만드는 일만 골라 보세요.', toolOptions: { mode: 'pick', basket: '불편하게 만드는 일', cards: ['물을 틀어 놓고 나와요', '줄을 서서 기다려요', '바닥에 휴지를 버려요', '손을 닦고 나와요'] },
                target: { pick: ['물을 틀어 놓고 나와요', '바닥에 휴지를 버려요'] }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 다음 사람의 마음 되어 보기', minutes: 13, tool: 'emotion',
            teacher: '"내가 나간 뒤 화장실에 들어오는 다음 친구는 어떤 마음일까요?" \'다음 사람\'을 떠올리는 것이 약속의 시작이라는 것을 말해 준다. 급식실에서 "나는 빨리 먹고 싶어서"라는 학생에게 줄 뒤쪽 친구의 마음을 고르게 한다.',
            task: '함께 쓰는 곳에서 다음 사람의 마음을 고르고 어떻게 할지 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '다음에 들어온 친구의 마음 카드를 놓아 보세요.', toolOptions: { cards: ['짜증', '편안함', '걱정'], slots: [{ id: 's1', label: '세면대 물이 넘치고 있어요' }, { id: 's2', label: '화장실이 깨끗해요' }] },
                target: { match: { s1: ['짜증', '걱정'], s2: '편안함' } }, difficulty: 0.1 },
              { prompt: '급식 줄에서 친구가 앞에 끼어들었어요. 화난 마음의 크기를 골라 보세요.', toolOptions: { mode: 'scale', situation: '급식 줄을 오래 기다렸는데 친구가 앞에 끼어들었어요.', feeling: '화남', after: '화가 나도 "줄을 서 줄래?" 하고 말로 전해요.' }, target: { level: [2, 4] }, difficulty: 0.15 },
              { prompt: '손을 씻고 나니 세면대 둘레가 젖었어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '손을 씻었더니 세면대 둘레에 물이 튀었어요.', choices: [
                { id: 'go', text: '그냥 나가요', result: '다음 친구가 미끄러질 수 있어요.', mood: '걱정', why: '다음에 들어오는 친구를 떠올려 봐요.' },
                { id: 'wipe', text: '손 닦는 휴지로 물기를 닦아요', result: '다음 친구도 편하게 써요.', mood: '편안함' }] }, target: { choice: 'wipe' }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { choices: [
                  { id: 'go', text: '그냥 나가요', result: '다음 친구가 미끄러질 수 있어요.', mood: '걱정', why: '다음에 들어오는 친구를 떠올려 봐요.' },
                  { id: 'wipe', text: '손 닦는 휴지로 물기를 닦아요', result: '다음 친구도 편하게 써요.', mood: '편안함' },
                  { id: 'shake', text: '손을 털어 물기를 말려요', result: '물이 더 튀어 바닥이 젖어요.', mood: '걱정', why: '손을 털면 물이 어디로 갈까요?' }] } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"화장실과 급식실은 누구의 곳일까요?" "모두의 곳"이라는 말을 이끌어 낸다. 출구 1번을 틀린 학생은 까닭 카드와 결과 카드를 헷갈렸는지 살핀다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '왜 불편할까?', slots: [{ id: 'e1', label: '급식실 바닥에 밥알이 떨어졌어요' }, { id: 'e2', label: '화장실 문이 활짝 열려 있어요' }], cards: ['흘린 것을 줍지 않았어요', '나오면서 문을 닫지 않았어요'] }, prompt: '불편한 일과 까닭을 이어 보세요.', target: { match: { e1: '흘린 것을 줍지 않았어요', e2: '나오면서 문을 닫지 않았어요' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '함께 쓰는 곳을 쓸 때 꼭 떠올릴 사람은 누구인가요?', options: ['나만', '다음에 쓸 사람', '아무도 없어요'], answer: 1, difficulty: 0.1, explain: '내가 쓴 뒤 다음 사람이 편하게 쓸 수 있는지 떠올려요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '함께 쓰는 곳 살펴보기',
      items: [
        { type: 'figure', wide: true, prompt: '불편한 일과 까닭을 선으로 이으세요.', tool: 'mindmap', figures: [{ options: { mode: 'match', topic: '왜 불편할까?', slots: [{ id: 's1', label: '바닥이 미끄러워요' }, { id: 's2', label: '줄이 엉켰어요' }], cards: ['손을 털었어요', '새치기를 했어요'] }, caption: '' }], answer: '바닥이 미끄러워요-손을 털었어요, 줄이 엉켰어요-새치기를 했어요' },
        { type: 'check', prompt: '화장실에서 내가 지킬 일에 ✓ 하세요.', options: ['물을 잠가요', '휴지는 휴지통에', '문을 닫고 나와요', '물기를 닦아요'] },
        { type: 'choice', prompt: '다음 사람을 생각한 행동에 ○ 하세요.', options: ['의자를 넣어요', '의자를 그대로 둬요', '식판을 아무 데나 놓아요'], answer: '의자를 넣어요' },
        { type: 'short', prompt: '급식실에서 불편했던 일과 그 까닭을 쓰세요.' },
      ],
      easy: {
        note: '"다음에 쓸 친구는 어떨까?"를 떠올려요.',
        items: [
          { type: 'choice', prompt: '바른 행동에 ○ 하세요.', options: ['물을 잠가요', '물을 틀어 놓아요'], answer: '물을 잠가요' },
          { type: 'choice', prompt: '급식 줄에서 바른 행동에 ○ 하세요.', options: ['차례를 지켜요', '앞에 끼어들어요'], answer: '차례를 지켜요' },
          { type: 'draw', prompt: '깨끗한 화장실을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고 틀리면 카드가 돌아와요.',
      base: '까닭을 모두 이은 뒤 확인을 눌러요.',
      challenge: '관계없는 카드가 섞여 있고, 어떻게 할지 고르는 문항에 그럴듯한 보기가 하나 더 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 어지러진 것은 청소하시는 분이 치운다고 여긴다 → 그 사이 다음 사람이 겪는 일을 떠올리게 한다. ② 까닭(한 일)과 결과(불편한 일)를 바꾸어 잇는다 → "먼저 무엇을 해서 그렇게 됐을까요?"로 차례를 묻는다. ③ 손을 털어 말리는 것을 바른 행동으로 여긴다 → 물이 튀는 자리를 직접 보여 준다.',
  }));

  lessons.push(L(5, {
    title: '놀이터를 여러 친구 자리에서 살펴보기',
    objective: '놀이터와 운동장에서 누구나 쓸 수 있는 곳과 쓰기 어려운 친구가 있는 곳을 나누고 그 까닭을 말할 수 있다.',
    illustration: ART('a paper playground with a slide, a ramp to a play house, a sandbox and a shady bench, children of different abilities playing together', '누구나 놀 수 있을까요?', [
      { motif: 'tree', x: 90, y: 214 }, { motif: 'tree', x: 400, y: 214, color: 'mint' }, { motif: 'house', x: 250, y: 216, color: 'peach', s: 0.8 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"쉬는 시간에 미끄럼틀을 탈 때 무엇을 밟고 올라가나요?" 계단을 밟는다는 대답을 받은 뒤 "휠체어를 탄 친구는 어떻게 올라갈까요?"라고 묻는다. 시연 단추로 \'계단만 있는 미끄럼틀\' 카드가 \'쓰기 어려운 친구가 있어요\' 가지로 들어가는 모습을 보여 준다.',
        student: '우리 학교 놀이터에서 내가 좋아하는 놀이 기구를 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '놀이터', slots: ['누구나 쓸 수 있어요', '쓰기 어려운 친구가 있어요'], cards: ['계단만 있는 미끄럼틀', '넓고 낮은 벤치'], shuffle: false }, sequence: [{ sort: { '누구나 쓸 수 있어요': ['넓고 낮은 벤치'], '쓰기 어려운 친구가 있어요': ['계단만 있는 미끄럼틀'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 놀이 기구 나누어 보기', minutes: 13, tool: 'mindmap',
            teacher: '"이 놀이 기구는 휠체어를 탄 친구, 키가 작은 동생도 쓸 수 있을까요?" 놀이 기구마다 \'누가 못 쓸까\'를 먼저 말하게 한 뒤 놓는다. 모든 기구가 누구나 쓸 수 있다고 놓는 학생에게 직접 손으로 사다리를 오르는 흉내를 내 보게 한다.',
            task: '놀이 기구와 쉼터 카드를 누구나 쓸 수 있는 곳과 쓰기 어려운 친구가 있는 곳으로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '놀이 기구 카드를 두 가지로 나누어 보세요.', toolOptions: { topic: '놀이터', slots: ['누구나 쓸 수 있어요', '쓰기 어려운 친구가 있어요'], cards: ['사다리로만 오르는 정글짐', '비탈길로 오르는 놀이 집', '푹신한 모래밭', '휠체어를 탄 채 탈 수 있는 그네'] },
                target: { sort: { '누구나 쓸 수 있어요': ['비탈길로 오르는 놀이 집', '휠체어를 탄 채 탈 수 있는 그네'], '쓰기 어려운 친구가 있어요': ['사다리로만 오르는 정글짐', '푹신한 모래밭'] } }, difficulty: 0.15,
                conclude: '모래밭은 휠체어 바퀴가 빠져서 쓰기 어려운 친구가 있어요.' },
              { prompt: '놀이 기구가 누구에게 어려울지 가지에 나누어 보세요.', toolOptions: { topic: '누구에게 어려울까?', slots: ['키가 작은 동생', '눈이 잘 안 보이는 친구'], cards: ['아주 높은 철봉', '깜깜한 터널 놀이', '발이 안 닿는 그네', '그늘이 진 어두운 계단'] },
                target: { sort: { '키가 작은 동생': ['아주 높은 철봉', '발이 안 닿는 그네'], '눈이 잘 안 보이는 친구': ['깜깜한 터널 놀이', '그늘이 진 어두운 계단'] } }, difficulty: 0.2 },
              { prompt: '할머니와 동생이 함께 쉬기 좋은 곳만 골라 보세요.', toolOptions: { mode: 'pick', basket: '함께 쉬기 좋은 곳', cards: ['나무 그늘 아래 의자', '햇볕이 뜨거운 맨땅', '높은 정글짐 꼭대기', '지붕이 있는 쉼터'] },
                target: { pick: ['나무 그늘 아래 의자', '지붕이 있는 쉼터'] }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['나무 그늘 아래 의자', '햇볕이 뜨거운 맨땅', '높은 정글짐 꼭대기', '지붕이 있는 쉼터', '공이 날아오는 골대 앞'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 함께 노는 방법 고르기', minutes: 13, tool: 'emotion',
            teacher: '"놀이에 끼지 못하고 보고만 있는 친구는 어떤 마음일까요?" \'외로움\'이라는 마음 이름을 알려 준다. "우리끼리 놀아요"를 고른 학생에게 놀이 방법을 바꾸면 모두 함께 할 수 있다는 것을 결과 칸에서 찾게 한다.',
            task: '놀이에 끼지 못한 친구의 마음을 알아보고, 함께 노는 방법을 골라요.',
            levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
            items: [
              { prompt: '휠체어를 탄 하준이가 공놀이를 보고만 있어요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '하준', situation: '친구들이 운동장에서 공을 차고, 하준이는 보고만 있어요.', choices: [
                { id: 'only', text: '우리끼리 계속 공을 차요', result: '하준이는 혼자 남아 외로워요.', mood: '외로움', why: '보고만 있는 하준이의 마음을 떠올려 봐요.' },
                { id: 'roll', text: '공을 굴려 주고받는 놀이로 바꿔요', result: '하준이도 함께 웃으며 놀아요.', mood: '신남' },
                { id: 'watch', text: '하준이에게 구경만 하라고 해요', result: '하준이는 놀고 싶은데 속상해요.', mood: '속상함', why: '하준이도 놀고 싶을 거예요.' }] }, target: { choice: 'roll' }, difficulty: 0.15,
                levels: { easy: { toolOptions: { choices: [
                  { id: 'only', text: '우리끼리 계속 공을 차요', result: '하준이는 혼자 남아 외로워요.', mood: '외로움', why: '보고만 있는 하준이의 마음을 떠올려 봐요.' },
                  { id: 'roll', text: '공을 굴려 주고받는 놀이로 바꿔요', result: '하준이도 함께 웃으며 놀아요.', mood: '신남' }] } } } },
              { prompt: '놀이에 끼지 못한 친구의 외로운 마음 크기를 골라 보세요.', toolOptions: { mode: 'scale', situation: '쉬는 시간 내내 놀이에 끼지 못하고 혼자 앉아 있었어요.', feeling: '외로움', after: '이런 친구를 보면 "같이 할래?" 하고 물어봐요.' }, target: { level: [3, 5] }, difficulty: 0.15 },
              { prompt: '함께 놀자는 말을 빈칸에 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['같이 할래', '저리 가', '기다려 줄게'], slots: [{ id: 'f1', label: '혼자 있는 친구에게 "___?"' }, { id: 'f2', label: '천천히 오는 친구에게 "___."' }] },
                target: { fill: { f1: '같이 할래', f2: '기다려 줄게' } }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"우리 놀이터에서 누구나 함께 놀 수 있게 하려면 놀이 방법을 어떻게 바꿀 수 있을까요?" 두세 가지 생각을 칠판에 적어 둔다. 출구 1번에서 모래밭을 \'누구나\'에 놓은 학생은 바퀴가 모래에 빠지는 모습을 손으로 보여 준다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '운동장', slots: ['누구나 쓸 수 있어요', '쓰기 어려운 친구가 있어요'], cards: ['돌이 많은 울퉁불퉁한 길', '매끈하고 넓은 길'] }, prompt: '운동장 길 카드를 두 가지로 나누어 보세요.', target: { sort: { '누구나 쓸 수 있어요': ['매끈하고 넓은 길'], '쓰기 어려운 친구가 있어요': ['돌이 많은 울퉁불퉁한 길'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '놀이에 끼지 못한 친구에게 할 말로 알맞은 것은 무엇인가요?', options: ['"같이 할래?"', '"구경만 해."', '"너는 못 해."'], answer: 0, difficulty: 0.05, explain: '먼저 함께 하자고 물어보면 친구 마음이 편해져요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '누구나 놀 수 있는 놀이터',
      items: [
        { type: 'figure', wide: true, prompt: '누구나 쓸 수 있는 곳과 쓰기 어려운 친구가 있는 곳으로 나누어 쓰세요.', tool: 'mindmap', figures: [{ options: { topic: '놀이터', slots: ['누구나 쓸 수 있어요', '쓰기 어려운 친구가 있어요'], cards: ['비탈길 놀이 집', '사다리 정글짐', '모래밭'], printCards: true }, caption: '' }], answer: '누구나: 비탈길 놀이 집 / 어려운 친구가 있어요: 사다리 정글짐, 모래밭' },
        { type: 'choice', prompt: '휠체어를 탄 친구와 함께 할 수 있는 놀이에 ○ 하세요.', options: ['공 굴려 주고받기', '정글짐 오르기', '모래밭 달리기'], answer: '공 굴려 주고받기' },
        { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '혼자 있는 친구에게 "같이 ___?" 하고 물어요.', answer: '할래' },
        { type: 'draw', prompt: '누구나 함께 놀 수 있는 놀이터를 그려 보세요.' },
      ],
      easy: {
        note: '그 놀이 기구에 오르는 방법을 떠올려요.',
        items: [
          { type: 'choice', prompt: '휠체어를 탄 친구가 오를 수 있는 곳에 ○ 하세요.', options: ['비탈길', '사다리'], answer: '비탈길' },
          { type: 'choice', prompt: '함께 놀자는 말에 ○ 하세요.', options: ['"같이 할래?"', '"저리 가."'], answer: '"같이 할래?"' },
          { type: 'draw', prompt: '친구와 함께 노는 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 놓으면 초록 테두리가 생겨요. 어떻게 할지 고르는 문항은 보기가 두 개예요.',
      base: '모두 놓은 뒤 확인을 눌러요.',
      challenge: '쉬기 좋은 곳 고르기에 함정 카드가 하나 더 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 내가 쉽게 오르는 기구는 누구나 쓸 수 있다고 여긴다 → 손을 쓰지 않고, 다리를 쓰지 않고 오르는 흉내를 내 본다. ② 몸이 불편한 친구는 구경만 하면 된다고 말한다 → 놀이 방법을 바꾸면 함께 할 수 있다는 것을 보여 준다. ③ 모래밭이 왜 어려운지 모른다 → 바퀴가 모래에 빠지는 모습을 손바닥과 모래 그림으로 보여 준다.',
  }));

  lessons.push(L(6, {
    title: '눈을 가린 짝을 안내하며 걸어 보기',
    objective: '눈을 가리고 걷는 체험을 하며 앞이 잘 안 보이는 사람이 불편한 곳을 찾고 안전하게 돕는 차례를 말할 수 있다.',
    illustration: ART('two paper children walking slowly down a school hallway, one wearing a soft blindfold and the other gently guiding by the elbow', '짝을 믿고 천천히 걸어요', [
      { motif: 'house', x: 110, y: 214 }, { motif: 'tree', x: 380, y: 214 }, { motif: 'star', x: 250, y: 80, s: 0.6 }]),
    safety: ['눈을 가린 친구는 안내하는 짝의 팔꿈치를 잡고 천천히 걸어요.', '계단과 문턱이 없는 교실 안에서만 걸어요.', '무섭다고 말하면 바로 눈가리개를 벗어요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"눈을 감고 내 자리에서 교실 문까지 갈 수 있을까요?" 한 명이 눈을 감고 세 걸음만 걸어 보게 한다. 시연 단추로 안내하는 차례 카드가 놓이는 모습을 보여 준다. 안전 약속(팔꿈치 잡기, 천천히, 무서우면 바로 벗기)을 함께 읽는다. 눈을 가린 친구를 밀거나 놀래 주면 안 된다는 것을 분명히 말한다.',
        student: '눈을 감고 세 걸음 걸어 보면 어떤 마음이 드는지 말해 봐요.',
        demo: { tool: 'story', options: { cards: [{ id: '잡기', text: '짝이 내 팔꿈치를 잡아요', motif: 'star' }, { id: '걷기', text: '천천히 함께 걸어요', motif: 'leaf' }, { id: '앉기', text: '의자를 짚고 앉아요', motif: 'house' }], slots: ['처음', '가운데', '끝'], shuffle: false }, sequence: [{ order: ['잡기', '걷기', '앉기'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 짝과 눈 가리고 걷기 (체험)', minutes: 10, tool: 'story', pair: true,
            teacher: '"안내하는 사람은 \'왼쪽에 책상이 있어\'처럼 말로 알려 줘요." 짝끼리 역할을 바꾸어 교실 안을 한 바퀴 걷게 한다. 앞에서 끌어당기는 짝에게 "팔꿈치를 내주고 반 걸음 앞에서 걸어요"라고 바로잡는다.',
            task: '짝과 번갈아 눈을 가리고 교실 안을 천천히 걸어요. 안내하는 사람은 말로 알려 줘요.',
            levels: CARD_LV,
            items: [
              { prompt: '안내하며 걷는 차례대로 장면 카드를 놓아 보세요.', toolOptions: { cards: [{ id: '묻기', text: '"도와줄까?" 하고 물어요', motif: 'star' }, { id: '팔', text: '내 팔꿈치를 잡게 해요', motif: 'leaf' }, { id: '말', text: '"앞에 책상이 있어" 말해요', motif: 'house' }, { id: '도착', text: '자리에 닿았다고 알려요', motif: 'flower' }] },
                target: { order: ['묻기', '팔', '말', '도착'] }, difficulty: 0.15,
                conclude: '돕기 전에 먼저 묻고, 가는 길을 말로 알려 줘요.' },
              { prompt: '짝과 역할을 바꾸어 걸어 보고 "다 했어요"를 누르세요.', free: true },
              { prompt: '안내하는 말만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '안내하는 말', cards: ['"오른쪽으로 돌아"', '"빨리 뛰어"', '"문턱이 있어, 발을 들어"', '"나 먼저 간다"'] },
                target: { pick: ['"오른쪽으로 돌아"', '"문턱이 있어, 발을 들어"'] }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 눈을 가렸을 때 마음과 불편한 곳', minutes: 16, tool: 'emotion',
            teacher: '"눈을 가렸을 때 무엇이 가장 무서웠나요?" 내 마음의 크기는 정답이 없으니 손가락 하나에서 다섯 개로 솔직하게 들어 보게 한다. 판에서는 준호 이야기의 "두 번이나 부딪혔어요"를 근거로 고르게 한 뒤, 걸을 때 걸린 곳(의자, 가방)을 칠판에 적는다. "그 친구는 늘 그렇게 다녀요"라고 말하며 고칠 곳으로 잇는다.',
            task: '눈을 가린 친구의 마음을 고르고, 앞이 잘 안 보이는 사람에게 불편한 곳을 찾아요.',
            levels: { easy: { live: true, instant: true, steps: 3 }, base: {}, challenge: {} },
            items: [
              { prompt: '눈을 가린 준호가 의자에 두 번 부딪혔어요. 준호의 무서운 마음 크기를 골라 보세요.', toolOptions: { mode: 'scale', who: '준호', situation: '준호가 눈을 가리고 교실을 걷는데, 아무도 길을 알려 주지 않아 의자에 두 번이나 부딪혔어요.', feeling: '무서움', after: '앞이 안 보이는 친구에게는 "앞에 의자가 있어"처럼 말로 길을 알려 줘요.' }, target: { level: [3, 5] }, difficulty: 0.05,
                levels: { easy: { prompt: '눈을 가린 준호가 의자에 두 번 부딪혔어요. 준호의 무서운 마음을 세 칸에서 골라 보세요.', target: { level: [2, 3] } } } },
              { prompt: '안내를 받았을 때와 받지 못했을 때의 마음을 놓아 보세요.', toolOptions: { cards: ['고마움', '무서움', '신남'], slots: [{ id: 's1', label: '짝이 "앞에 의자가 있어"라고 알려 줬어요' }, { id: 's2', label: '아무도 말해 주지 않아 의자에 부딪혔어요' }] },
                target: { match: { s1: '고마움', s2: '무서움' } }, difficulty: 0.1 },
              { prompt: '앞이 잘 안 보이는 사람에게 불편한 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '불편한 것', cards: ['통로에 놓인 가방', '열려 있는 사물함 문', '소리로 알려 주는 엘리베이터', '바닥에 굴러다니는 공'] },
                target: { pick: ['통로에 놓인 가방', '열려 있는 사물함 문', '바닥에 굴러다니는 공'] }, difficulty: 0.2,
                predict: { q: '소리로 알려 주는 엘리베이터는 불편할까요?', options: ['불편해요', '도움이 돼요'], answer: 1 },
                conclude: '소리 안내는 앞이 잘 안 보이는 사람에게 도움이 돼요.' },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 체험하고 나서 우리 교실에서 치우고 싶은 것이 생겼나요?" 통로의 가방, 열린 사물함 문을 학생이 직접 말하게 한다. 출구 1번에서 \'빨리\'를 고른 학생과는 천천히 걷는 까닭을 다시 이야기한다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'branch', situation: '눈이 잘 안 보이는 할아버지가 복도에서 길을 찾고 계세요.', choices: [{ id: 'ask', text: '"도와드릴까요?" 하고 여쭈어요', result: '할아버지가 팔을 잡고 편하게 걸으세요.', mood: '고마움' }, { id: 'pull', text: '손을 잡고 빨리 끌고 가요', result: '할아버지가 놀라 넘어질 뻔해요.', mood: '놀람' }] }, prompt: '할아버지를 어떻게 도울지 골라 보세요.', target: { choice: 'ask' }, difficulty: 0.1 },
          { type: 'choice', prompt: '눈을 가린 짝을 안내할 때 어디를 잡게 하나요?', options: ['내 팔꿈치', '내 옷 뒤', '내 머리'], answer: 0, difficulty: 0.1, explain: '팔꿈치를 잡으면 내가 가는 방향을 짝이 느낄 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '앞이 잘 안 보이면',
      items: [
        { type: 'figure', wide: true, prompt: '안내하며 걷는 차례대로 1, 2, 3을 쓰세요.', tool: 'story', figures: [{ options: { cards: [{ id: '팔', text: '팔꿈치를 잡게 해요', motif: 'leaf' }, { id: '묻기', text: '"도와줄까?" 물어요', motif: 'star' }, { id: '말', text: '길을 말로 알려요', motif: 'house' }], shuffle: false }, caption: '' }], answer: '묻기 1, 팔꿈치 2, 말로 알려요 3' },
        { type: 'check', prompt: '앞이 잘 안 보이는 사람에게 불편한 것에 ✓ 하세요.', options: ['통로의 가방', '열린 사물함 문', '소리 안내', '굴러다니는 공'] },
        { type: 'choice', prompt: '안내하는 말로 알맞은 것에 ○ 하세요.', options: ['"문턱이 있어, 발을 들어"', '"빨리 와"', '"알아서 가"'], answer: '"문턱이 있어, 발을 들어"' },
        { type: 'short', prompt: '눈을 가리고 걸었을 때 내 마음을 쓰세요.' },
      ],
      easy: {
        note: '체험할 때 무엇에 부딪힐 뻔했는지 떠올려요.',
        items: [
          { type: 'choice', prompt: '도와주기 전에 하는 말에 ○ 하세요.', options: ['"도와줄까?"', '"비켜!"'], answer: '"도와줄까?"' },
          { type: 'choice', prompt: '치워야 할 것에 ○ 하세요.', options: ['통로의 가방', '내 책상 위 공책'], answer: '통로의 가방' },
          { type: 'draw', prompt: '짝을 안내하는 내 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 마음 크기는 세 칸이에요. 체험은 짝과 손을 잡고 다섯 걸음만 걸어도 돼요.',
      base: '차례를 모두 놓은 뒤 확인을 눌러요. 체험은 교실 한 바퀴예요.',
      challenge: '체험할 때 안내하는 말을 두 가지 이상 써 보고, 불편한 것을 모두 골라요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 눈을 가린 짝을 장난으로 놀래 준다 → 시작 전 안전 약속을 읽고, 어기면 체험을 멈춘다. ② 손을 잡아 끌고 간다 → 팔꿈치를 내주고 반 걸음 앞에서 걷는다. ③ 돕기 전에 묻지 않는다 → "도와줄까?"를 먼저 말한다. 눈가리개가 무서운 학생은 눈을 감기만 해도 되고, 체험을 쉬어도 된다.',
  }));

  lessons.push(L(7, {
    title: '그림 안내판이 왜 필요한지 알아보기',
    objective: '그림 안내판의 뜻을 읽고, 글을 읽기 어려운 사람에게 그림 안내가 왜 필요한지 말할 수 있다.',
    illustration: ART('friendly paper pictogram signs on a school wall showing a fork and spoon, a book, washing hands and an exit arrow', '그림만 봐도 알 수 있어요', [
      { motif: 'house', x: 120, y: 214, color: 'sky' }, { motif: 'tree', x: 370, y: 214 }, { motif: 'bird', x: 300, y: 90 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"우리말을 하나도 모르는 친구가 전학 왔어요. 화장실을 어떻게 찾을까요?" 글로만 적힌 안내와 그림 안내를 칠판에 나란히 그려 보인다. 시연 단추로 학교 그림 기호 옆 빈칸에 뜻이 채워지는 모습을 보여 준다. 미리 찍어 둔 우리 학교 안내판 사진(화장실·보건실·비상구)도 화면 옆에 띄운다.',
        student: '학교에서 본 그림 안내판을 떠올려 말해 봐요.',
        demo: { tool: 'map', options: { mode: 'legend', grid: [4, 2], places: [{ name: '학교', icon: 'school', at: [1, 0] }], meanings: { school: '우리가 공부하는 곳' }, legendIcons: ['school'], title: '그림 기호' }, sequence: [{ legend: { school: '우리가 공부하는 곳' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 그림 기호 보고 뜻 읽기', minutes: 13, tool: 'map',
            options: { names: false, title: '우리 동네 그림 기호' },
            teacher: '"이 그림 기호에는 무엇이 그려져 있나요?" 그림 속 물건(책, 십자, 버스)을 먼저 소리 내어 말하게 한 뒤 뜻을 고르게 한다. 글자를 읽어 맞히려는 학생에게 "글자는 없어요. 그림만 보고 알 수 있을까요?"라고 묻는다. 십자 기호를 \'더하기\'로 읽는 학생에게 "병원이나 보건실 문에서 이 그림을 본 적 있나요?" 하고 우리 학교 보건실 안내판 사진과 견주게 한다.',
            task: '그림 기호를 보고 무엇을 알려 주는지 뜻을 고르고, 기호만 보고 장소를 찾아요.',
            levels: {
              easy: { extra: [] },
              base: { extra: ['물건을 사는 곳'] },
              challenge: { extra: ['물건을 사는 곳', '노래 부르는 곳'] },
            },
            items: [
              { prompt: '두 그림 기호의 뜻을 빈칸에 골라 넣어 보세요.', toolOptions: { mode: 'legend', grid: [4, 2], places: [{ name: '도서관', icon: 'library', at: [0, 0] }, { name: '병원', icon: 'hospital', at: [2, 1] }], meanings: { library: '책을 빌려 읽는 곳', hospital: '아플 때 가는 곳' }, legendIcons: ['library', 'hospital'] },
                target: { legend: { library: '책을 빌려 읽는 곳', hospital: '아플 때 가는 곳' } }, difficulty: 0.05 },
              { prompt: '세 그림 기호의 뜻을 빈칸에 골라 넣어 보세요.', toolOptions: { mode: 'legend', grid: [5, 2], places: [{ name: '버스 정류장', icon: 'bus', at: [0, 1] }, { name: '공원', icon: 'park', at: [2, 0] }, { name: '경찰서', icon: 'police', at: [4, 1] }], meanings: { bus: '버스를 타는 곳', park: '뛰어 노는 곳', police: '길을 잃으면 도움을 청하는 곳' }, legendIcons: ['bus', 'park', 'police'] },
                target: { legend: { bus: '버스를 타는 곳', park: '뛰어 노는 곳', police: '길을 잃으면 도움을 청하는 곳' } }, difficulty: 0.2 },
              { prompt: '동생이 배가 아파요. 이름은 없고 그림 기호만 있어요. 아플 때 가는 곳에 핀을 꽂아 보세요.', toolOptions: { mode: 'pin', grid: [5, 3], legend: false, places: [{ name: '학교', icon: 'school', at: [0, 0] }, { name: '병원', icon: 'hospital', at: [3, 2] }, { name: '도서관', icon: 'library', at: [4, 0] }, { name: '시장', icon: 'market', at: [1, 2] }] },
                target: { place: '병원' }, difficulty: 0.15,
                levels: { easy: { toolOptions: { legend: true } } },
                predict: { q: '글자가 없어도 아플 때 가는 곳을 찾을 수 있을까요?', options: ['찾을 수 있어요', '찾을 수 없어요'], answer: 0 },
                conclude: '그림 기호는 글을 읽지 못해도 뜻을 알 수 있어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 안내가 없을 때 생기는 일', minutes: 13, tool: 'emotion',
            teacher: '"안내판이 없으면 처음 온 친구는 어떤 마음일까요?" 길을 잃었던 경험을 한 명 듣는다. "물어보면 되잖아요"라는 학생에게 "말이 통하지 않는다면요?"라고 되묻는다.',
            task: '안내가 없을 때 생기는 일과 마음을 알아보고, 도울 방법과 그림 안내가 도움이 되는 사람을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '처음 온 친구의 마음 카드를 놓아 보세요.', toolOptions: { cards: ['걱정', '편안함', '화남'], slots: [{ id: 's1', label: '화장실 안내판이 없어 한참 헤맸어요' }, { id: 's2', label: '그림 안내판을 보고 바로 찾았어요' }] },
                target: { match: { s1: '걱정', s2: '편안함' } }, difficulty: 0.05 },
              { prompt: '우리말을 모르는 친구가 보건실을 찾아요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '전학 온 친구가 배를 잡고 무언가를 찾고 있어요. 우리말을 아직 몰라요.', choices: [
                { id: 'point', text: '십자 그림 안내판을 손으로 가리키며 함께 가요', result: '친구가 보건실에 잘 가요.', mood: '고마움' },
                { id: 'shout', text: '큰 소리로 "보건실!"이라고만 말해요', result: '친구는 무슨 말인지 몰라 더 걱정해요.', mood: '걱정', why: '친구가 우리말을 모른다는 것을 떠올려 봐요.' },
                { id: 'leave', text: '모르는 척 지나가요', result: '친구는 아픈데 혼자 헤매요.', mood: '외로움', why: '아픈 친구가 혼자 있으면 어떨까요?' }] }, target: { choice: 'point' }, difficulty: 0.15 },
              { prompt: '안내가 없어 생긴 일을 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: '헤맴', text: '화장실을 못 찾아 헤매요' }, { id: '물음', text: '친구가 그림으로 알려 줘요' }, { id: '찾음', text: '화장실을 찾아 편안해요' }] },
                target: { order: ['헤맴', '물음', '찾음'] }, difficulty: 0.1 },
              { prompt: '그림 안내판이 특히 도움이 되는 사람만 골라 보세요.', toolOptions: { mode: 'pick', basket: '도움이 되는 사람', cards: ['글을 아직 못 읽는 동생', '우리말을 모르는 친구', '눈이 잘 안 보이는 친구'] },
                target: { pick: ['글을 아직 못 읽는 동생', '우리말을 모르는 친구'] }, difficulty: 0.25,
                predict: { q: '눈이 잘 안 보이는 친구에게도 그림 안내판이 도움이 될까요?', options: ['도움이 돼요', '다른 안내가 필요해요'], answer: 1 },
                conclude: '눈이 잘 안 보이는 사람에게는 소리 안내나 손으로 만지는 안내가 필요해요.' },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"우리 학교에 그림 안내판이 더 있으면 좋겠는 곳은 어디일까요?" 학생이 말한 곳을 모아 다음 시간 지도 만들기와 14차시 안내판 꾸미기에 쓴다고 알린다. 출구 2번을 틀린 학생은 그림 안내판이 누구를 돕는지 다시 말하게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'map', options: { mode: 'legend', grid: [4, 2], names: false, places: [{ name: '우체국', icon: 'post', at: [0, 0] }, { name: '소방서', icon: 'fire', at: [3, 1] }], meanings: { post: '편지를 부치는 곳', fire: '불이 나면 도와주는 곳' }, legendIcons: ['post', 'fire'], extra: ['책을 빌려 읽는 곳'] }, prompt: '처음 보는 두 그림 기호의 뜻을 골라 보세요.', target: { legend: { post: '편지를 부치는 곳', fire: '불이 나면 도와주는 곳' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '그림 안내판이 특히 도움이 되는 사람은 누구인가요?', options: ['글을 아직 못 읽는 동생', '안내판을 만든 어른', '아무도 없어요'], answer: 0, difficulty: 0.1, explain: '그림은 글을 못 읽어도 뜻을 알 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '그림 안내판 읽기',
      items: [
        { type: 'figure', wide: true, prompt: '그림 기호를 보고 뜻을 빈칸에 쓰세요.', tool: 'map', options: { mode: 'legend', grid: [5, 2], names: false, places: [{ name: '도서관', icon: 'library', at: [0, 0] }, { name: '병원', icon: 'hospital', at: [2, 1] }, { name: '공원', icon: 'park', at: [4, 0] }], meanings: { library: '책 읽는 곳', hospital: '아플 때 가는 곳', park: '노는 곳' }, legendIcons: ['library', 'hospital', 'park'] }, figures: [{ caption: '그림 기호 읽기' }], answer: '책 읽는 곳, 아플 때 가는 곳, 노는 곳' },
        { type: 'choice', prompt: '그림 안내판이 도움이 되는 사람에 ○ 하세요.', options: ['우리말을 모르는 친구', '안내판이 필요 없는 사람'], answer: '우리말을 모르는 친구' },
        { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '눈이 잘 안 보이는 사람에게는 ___ 안내가 필요해요.', answer: '소리(또는 손으로 만지는)' },
        { type: 'draw', prompt: '우리 반 손 씻는 곳에 붙일 그림 안내판을 그려 보세요.' },
      ],
      easy: {
        note: '그림 속 물건을 보면 무엇을 하는 곳인지 알 수 있어요.',
        items: [
          { type: 'figure', prompt: '그림 기호를 보고 뜻을 빈칸에 쓰세요. (책 읽는 곳, 아플 때 가는 곳)', tool: 'map', options: { mode: 'legend', grid: [4, 2], names: false, places: [{ name: '도서관', icon: 'library', at: [0, 0] }, { name: '병원', icon: 'hospital', at: [2, 1] }], meanings: { library: '책 읽는 곳', hospital: '아플 때 가는 곳' }, legendIcons: ['library', 'hospital'] }, figures: [{ caption: '그림 기호 읽기' }], answer: '책 읽는 곳, 아플 때 가는 곳' },
          { type: 'choice', prompt: '그림 안내가 도움이 되는 사람에 ○ 하세요.', options: ['글을 아직 못 읽는 동생', '안내가 필요 없는 사람'], answer: '글을 아직 못 읽는 동생' },
          { type: 'draw', prompt: '내가 만들고 싶은 그림 안내판을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '뜻 보기가 기호 수만큼만 있고, 장소 찾기에서는 범례를 보며 찾아요.',
      base: '헷갈리는 뜻 보기가 하나 더 있고, 범례 없이 그림만 보고 장소를 찾아요.',
      challenge: '헷갈리는 뜻 보기가 둘 더 있고, 그림 안내가 맞지 않는 사람을 골라내야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 그림 안내는 어린 동생만 보는 것이라 여긴다 → 외국에서 온 사람, 급할 때 빨리 봐야 하는 사람 모두에게 쓰인다는 것을 말한다. ② 그림 안내가 모든 사람에게 도움이 된다고 여긴다 → 눈이 잘 안 보이는 사람에게는 소리·점자 안내가 필요하다. ③ 화면의 그림 기호는 동네 지도 기호라 학교 안 안내판과 모양이 다르다 → 교사가 우리 학교 실제 안내판 사진(화장실·보건실·비상구)을 함께 보여 주고, 같은 뜻의 그림끼리 견주게 한다.',
  }));

  lessons.push(L(8, {
    title: '불편한 곳 모아 먼저 알릴 곳 고르기',
    objective: '지금까지 찾은 불편한 곳을 장소별로 모으고, 다칠 수 있는 곳을 골라 먼저 알려야 한다고 말할 수 있다.',
    illustration: ART('a classroom bulletin board shaped like a school map with colorful paper pins and small sticky notes', '우리 반 불편 지도', [
      { motif: 'house', x: 130, y: 214, color: 'lavender' }, { motif: 'tree', x: 350, y: 214 }, { motif: 'star', x: 200, y: 80, s: 0.6 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"지난 시간까지 찾은 불편한 곳을 기억해 볼까요?" 학생이 말하는 곳을 칠판 지도에 붙임 쪽지로 붙인다. 시연 단추로 \'깨진 유리창\' 카드가 \'먼저 알려요\' 바구니에 들어가는 모습을 보여 준다. 모든 불편한 곳이 똑같이 급한 것은 아니라는 것을 짚는다.',
        student: '지금까지 찾은 불편한 곳 가운데 기억나는 곳을 하나 말해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'pick', basket: '먼저 알려요', cards: ['깨진 유리창', '벽 그림이 낡았어요'], shuffle: false }, sequence: [{ pick: ['깨진 유리창'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 장소별로 불편한 곳 모으기', minutes: 13, tool: 'mindmap',
            teacher: '"이 불편한 곳은 교실, 복도, 운동장 가운데 어디에 있나요?" 장소별로 모으면 어디가 가장 불편한지 한눈에 보인다는 것을 말한다. 장소와 상관없이 \'불편한 곳\' 하나로 다 모으려는 학생에게 가지 이름을 다시 읽어 준다.',
            task: '불편한 곳 카드를 교실·복도·운동장 가지로 나누어 모아요.',
            levels: CARD_LV,
            items: [
              { prompt: '불편한 곳 카드를 장소 가지에 나누어 보세요.', toolOptions: { topic: '우리 반 불편 지도', slots: ['교실', '복도', '운동장'], cards: ['좁은 책상 사이', '쌓인 가방', '깊은 물웅덩이', '높은 선반'] },
                target: { sort: { '교실': ['좁은 책상 사이', '높은 선반'], '복도': ['쌓인 가방'], '운동장': ['깊은 물웅덩이'] } }, difficulty: 0.1 },
              { prompt: '화장실과 급식실의 불편한 곳을 나누어 보세요.', toolOptions: { topic: '함께 쓰는 곳', slots: ['화장실', '급식실'], cards: ['잠기지 않는 문', '높은 식판 꽂이', '물이 새는 세면대', '좁은 줄 서는 곳'] },
                target: { sort: { '화장실': ['잠기지 않는 문', '물이 새는 세면대'], '급식실': ['높은 식판 꽂이', '좁은 줄 서는 곳'] } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['잠기지 않는 문', '높은 식판 꽂이', '물이 새는 세면대', '좁은 줄 서는 곳', '맛있는 반찬'] } } } },
              { prompt: '모은 곳 가운데 누구나 편한 곳만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '누구나 편한 곳', cards: ['손잡이가 있는 계단', '쌓인 가방', '높은 선반', '밝고 넓은 복도'] },
                target: { pick: ['손잡이가 있는 계단', '밝고 넓은 복도'] }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 먼저 알릴 곳 고르기', minutes: 13, tool: 'mindmap',
            teacher: '"이대로 두면 누가 다칠 수 있는 곳은 어디일까요?" 다칠 수 있는 곳은 오늘 바로 선생님께 알린다는 기준을 세운다. \'불편하다\'와 \'위험하다\'를 헷갈리는 학생에게 "넘어지거나 베일 수 있나요?"라고 묻는다.',
            task: '다칠 수 있어 먼저 알려야 할 곳과 천천히 고쳐도 되는 곳을 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '먼저 알려야 할 곳만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '먼저 알려요', cards: ['깨진 유리창', '물이 흥건한 계단', '색이 바랜 게시판', '흔들리는 철봉'] },
                target: { pick: ['깨진 유리창', '물이 흥건한 계단', '흔들리는 철봉'] }, difficulty: 0.15,
                conclude: '다칠 수 있는 곳은 기다리지 않고 바로 어른께 알려요.' },
              { prompt: '불편한 곳을 \'바로 알려요\'와 \'천천히 고쳐요\'로 나누어 보세요.', toolOptions: { topic: '언제 알릴까?', slots: ['바로 알려요', '천천히 고쳐요'], cards: ['못이 튀어나온 의자', '안내판 글씨가 작아요', '고장 난 비상구 문', '신발장이 조금 좁아요'] },
                target: { sort: { '바로 알려요': ['못이 튀어나온 의자', '고장 난 비상구 문'], '천천히 고쳐요': ['안내판 글씨가 작아요', '신발장이 조금 좁아요'] } }, difficulty: 0.25,
                predict: { q: '안내판 글씨가 작은 것은 바로 알려야 할까요?', options: ['바로 알려요', '천천히 고쳐도 돼요'], answer: 1 } },
              { prompt: '불편한 곳을 알리는 말을 빈칸에 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['계단에', '미끄러워요', '재미있어요'], slots: [{ id: 'f1', label: '선생님, ___ 물이 고였어요.' }, { id: 'f2', label: '친구들이 넘어질 것 같아요. 바닥이 ___.' }] },
                target: { fill: { f1: '계단에', f2: '미끄러워요' } }, difficulty: 0.15 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"우리 반 불편 지도에서 오늘 선생님께 꼭 알릴 곳 하나를 정해 볼까요?" 반 전체가 고른 곳을 선생님이 학교에 알리겠다고 약속한다. 다음 시간부터는 고칠 방법을 찾는다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', basket: '먼저 알려요', cards: ['떨어질 것 같은 선반', '조금 낡은 커튼', '전깃줄이 밖으로 나온 곳'] }, prompt: '다칠 수 있어 먼저 알릴 곳만 바구니에 넣어 보세요.', target: { pick: ['떨어질 것 같은 선반', '전깃줄이 밖으로 나온 곳'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '깨진 유리창을 보았을 때 가장 먼저 할 일은 무엇인가요?', options: ['손으로 치워요', '선생님께 바로 알려요', '모르는 척해요'], answer: 1, difficulty: 0.05, explain: '깨진 유리는 만지면 다쳐요. 어른께 바로 알려요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '우리 반 불편 지도',
      items: [
        { type: 'table', prompt: '찾은 불편한 곳을 장소별로 쓰세요.', columns: ['교실', '복도', '운동장'], rows: 2 },
        { type: 'check', prompt: '바로 알려야 할 곳에 ✓ 하세요.', options: ['깨진 유리창', '흔들리는 철봉', '색이 바랜 게시판', '물이 흥건한 계단'] },
        { type: 'choice', prompt: '깨진 유리를 보았을 때 바른 행동에 ○ 하세요.', options: ['손으로 줍기', '선생님께 알리기', '발로 밀기'], answer: '선생님께 알리기' },
        { type: 'short', prompt: '선생님께 알릴 곳과 그 까닭을 한 문장으로 쓰세요.' },
      ],
      easy: {
        note: '"넘어지거나 다칠 수 있나요?"를 떠올리면 먼저 알릴 곳을 찾을 수 있어요.',
        items: [
          { type: 'choice', prompt: '먼저 알릴 곳에 ○ 하세요.', options: ['깨진 유리창', '낡은 게시판'], answer: '깨진 유리창' },
          { type: 'choice', prompt: '높은 선반은 어디에 있나요?', options: ['교실', '운동장'], answer: '교실' },
          { type: 'draw', prompt: '우리 반에서 가장 고치고 싶은 곳을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 가지에 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '모두 나눈 뒤 확인을 눌러요.',
      challenge: '장소와 상관없는 함정 카드가 있고, 바로 알릴 곳과 천천히 고칠 곳을 까닭과 함께 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 불편한 곳과 위험한 곳을 같은 것으로 본다 → "다칠 수 있나요?"를 기준으로 삼는다. ② 깨진 유리·전깃줄을 스스로 치우려 한다 → 어린이가 만지지 않고 어른께 알리는 것이 약속이라고 분명히 말한다. ③ 알리는 말에 곳·까닭이 빠진다 → "어디에, 무엇이, 왜" 차례로 말하게 한다.',
  }));

  // ───────────────────────── 9~16차시: 고칠 방법과 바로 할 일(바른 생활 실천) ─────────────────────────

  lessons.push(L(9, {
    title: '내가 할 일과 어른께 부탁할 일 나누기',
    objective: '불편한 곳을 고칠 방법을 고르고, 그 가운데 어린이가 바로 할 수 있는 일과 어른께 부탁할 일을 나눌 수 있다.',
    illustration: ART('children tidying school bags onto hooks while a teacher writes a repair note for a broken door, paper-cut school scene', '내가 할 수 있는 일은?', [
      { motif: 'house', x: 120, y: 214, color: 'mint' }, { motif: 'tree', x: 370, y: 214 }, { motif: 'flower', x: 250, y: 228, color: 'rose' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"복도에 가방이 쌓여 있어요. 이걸 고치려면 학교 공사를 해야 할까요?" 학생들이 "우리가 걸면 돼요"라고 말하게 이끈다. 시연 단추로 \'가방을 고리에 걸어요\'가 \'내가 바로 해요\' 가지로 가는 모습을 보여 준다. 학교를 고치는 일은 어른만의 일이 아니라 어린이도 할 수 있는 일이 많다는 것을 짚는다.',
        student: '지난 시간 찾은 불편한 곳 가운데 우리가 바로 고칠 수 있을 것 같은 곳을 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '어떻게 고칠까?', slots: ['내가 바로 해요', '어른께 부탁해요'], cards: ['가방을 고리에 걸어요', '깨진 유리를 바꿔요'], shuffle: false }, sequence: [{ sort: { '내가 바로 해요': ['가방을 고리에 걸어요'], '어른께 부탁해요': ['깨진 유리를 바꿔요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 불편한 곳에 고칠 방법 잇기', minutes: 12, tool: 'mindmap',
            teacher: '"이 곳이 편해지려면 무엇을 바꾸면 될까요?" 고칠 방법을 잇고 나서 그 방법을 몸짓으로 해 보게 한다. 고칠 방법 대신 \'조심해요\'만 말하는 학생에게 "조심하지 않아도 편하게 만들 방법은 무엇일까요?"라고 묻는다.',
            task: '불편한 곳을 읽고 알맞은 고칠 방법 카드를 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '불편한 곳과 고칠 방법을 이어 보세요.', toolOptions: { mode: 'match', topic: '어떻게 고칠까?', slots: [{ id: 's1', label: '복도에 가방이 쌓였어요' }, { id: 's2', label: '바닥에 크레파스가 굴러요' }], cards: ['가방을 고리에 걸어요', '주워서 통에 넣어요'] },
                target: { match: { s1: '가방을 고리에 걸어요', s2: '주워서 통에 넣어요' } }, difficulty: 0.05 },
              { prompt: '세 곳에 알맞은 고칠 방법을 이어 보세요.', toolOptions: { mode: 'match', topic: '어떻게 고칠까?', slots: [{ id: 's1', label: '계단이 어두워요' }, { id: 's2', label: '수돗가가 너무 높아요' }, { id: 's3', label: '안내가 글로만 있어요' }], cards: ['계단에 전등을 달아요', '발 받침대를 놓아요', '그림 안내판을 붙여요'] },
                target: { match: { s1: '계단에 전등을 달아요', s2: '발 받침대를 놓아요', s3: '그림 안내판을 붙여요' } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['계단에 전등을 달아요', '발 받침대를 놓아요', '그림 안내판을 붙여요', '계단을 뛰어 올라가요'] } } } },
              { prompt: '물웅덩이가 있는 현관을 고칠 방법만 골라 보세요.', toolOptions: { mode: 'pick', basket: '고칠 방법', cards: ['미끄럼 막는 깔개를 놓아요', '"미끄러워요" 안내를 붙여요', '물웅덩이에서 뛰어 놀아요', '그냥 지나가요'] },
                target: { pick: ['미끄럼 막는 깔개를 놓아요', '"미끄러워요" 안내를 붙여요'] }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 내가 할 일, 어른께 부탁할 일', minutes: 14, tool: 'mindmap',
            teacher: '"이 일은 1학년인 우리가 오늘 할 수 있을까요?" 공구·전기·높은 곳이 필요한 일은 어른께 부탁하고, 정리·말하기·안내판 그리기는 우리가 할 수 있다는 기준을 함께 세운다. 전등 달기를 \'내가 해요\'에 놓는 학생에게 사다리와 전기가 필요하다는 것을 짚는다.',
            task: '고칠 방법을 내가 바로 할 일과 어른께 부탁할 일로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '고칠 방법을 두 가지로 나누어 보세요.', toolOptions: { topic: '누가 고칠까?', slots: ['내가 바로 해요', '어른께 부탁해요'], cards: ['의자를 책상에 넣어요', '고장 난 문을 고쳐요', '굴러다니는 공을 치워요', '계단에 전등을 달아요'] },
                target: { sort: { '내가 바로 해요': ['의자를 책상에 넣어요', '굴러다니는 공을 치워요'], '어른께 부탁해요': ['고장 난 문을 고쳐요', '계단에 전등을 달아요'] } }, difficulty: 0.15 },
              { prompt: '이번에는 화장실과 운동장의 고칠 방법을 나누어 보세요.', toolOptions: { topic: '누가 고칠까?', slots: ['내가 바로 해요', '어른께 부탁해요'], cards: ['물을 꼭 잠가요', '새는 수도를 고쳐요', '흔들리는 철봉을 고쳐요', '휴지를 휴지통에 넣어요'] },
                target: { sort: { '내가 바로 해요': ['물을 꼭 잠가요', '휴지를 휴지통에 넣어요'], '어른께 부탁해요': ['새는 수도를 고쳐요', '흔들리는 철봉을 고쳐요'] } }, difficulty: 0.2,
                predict: { q: '어린이가 고칠 수 있는 일도 있을까요?', options: ['있어요', '하나도 없어요'], answer: 0 },
                conclude: '정리하고 아끼는 일은 어린이도 오늘 바로 할 수 있어요.' },
              { prompt: '어른께 부탁할 때 쓸 말만 골라 보세요.', toolOptions: { mode: 'pick', basket: '부탁하는 말', cards: ['"철봉이 흔들려요. 고쳐 주세요."', '"몰라요, 알아서 하세요."', '"수도에서 물이 새요. 봐 주세요."'] },
                target: { pick: ['"철봉이 흔들려요. 고쳐 주세요."', '"수도에서 물이 새요. 봐 주세요."'] }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 집에 가기 전에 우리 반이 바로 할 수 있는 일 하나를 정해 볼까요?" 반 전체가 한 가지를 골라 지금 해 본다(예: 의자 넣기). 활동지 그림 칸에 고칠 방법을 그리게 한다. 출구 2번에서 \'어른만\'을 고른 학생과는 오늘 한 일을 다시 떠올린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '누가 고칠까?', slots: ['내가 바로 해요', '어른께 부탁해요'], cards: ['떨어진 휴지를 주워요', '부서진 의자를 고쳐요'] }, prompt: '두 가지 일을 알맞게 나누어 보세요.', target: { sort: { '내가 바로 해요': ['떨어진 휴지를 주워요'], '어른께 부탁해요': ['부서진 의자를 고쳐요'] } }, difficulty: 0.05 },
          { type: 'choice', prompt: '학교를 편하게 만드는 일은 누가 할 수 있나요?', options: ['어른만 해요', '어린이도 할 수 있어요', '아무도 못 해요'], answer: 1, difficulty: 0.1, explain: '정리하기, 알리기처럼 어린이가 할 수 있는 일이 많아요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '어떻게 고칠까요',
      items: [
        { type: 'table', prompt: '고칠 방법을 알맞은 칸에 쓰세요.', columns: ['내가 바로 해요', '어른께 부탁해요'], rows: 2 },
        { type: 'choice', prompt: '내가 바로 할 수 있는 일에 ○ 하세요.', options: ['의자를 책상에 넣어요', '전등을 달아요', '문을 고쳐요'], answer: '의자를 책상에 넣어요' },
        { type: 'blank', prompt: '부탁하는 말을 완성하세요.', text: '선생님, ___이(가) 흔들려요. 고쳐 주세요.' },
        { type: 'draw', prompt: '우리 학교의 불편한 곳을 고친 모습을 그려 보세요.' },
      ],
      easy: {
        note: '공구나 사다리가 필요하면 어른께 부탁해요.',
        items: [
          { type: 'choice', prompt: '내가 할 수 있는 일에 ○ 하세요.', options: ['공을 치워요', '문을 고쳐요'], answer: '공을 치워요' },
          { type: 'choice', prompt: '어른께 부탁할 일에 ○ 하세요.', options: ['전등을 달아요', '휴지를 주워요'], answer: '전등을 달아요' },
          { type: 'draw', prompt: '고친 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 가지에 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '모두 나눈 뒤 확인을 눌러요.',
      challenge: '고칠 방법이 아닌 함정 카드가 섞여 있어요. 고른 까닭을 짝에게 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 학교 시설을 고치는 일은 어린이와 상관없다고 여긴다 → 정리·알리기·안내판 만들기처럼 어린이 몫이 있다는 것을 오늘 직접 해 본다. ② 위험한 수리(전등, 유리)를 스스로 하겠다고 한다 → 공구·전기·높은 곳은 어른께 부탁하는 기준을 세운다. ③ 고칠 방법 대신 "조심해요"만 말한다 → 조심하지 않아도 편한 곳을 만드는 방법을 묻는다.',
  }));

  lessons.push(L(10, {
    title: '교실 통로를 넓히는 정리 약속 해 보기',
    objective: '교실 통로를 넓히기 위해 할 일을 차례대로 정하고, 실제로 정리한 뒤 해낸 일을 스스로 점검할 수 있다.',
    illustration: ART('a paper classroom where children hang bags on hooks, push chairs under desks and leave a wide clear path between rows', '통로를 넓혀요', [
      { motif: 'house', x: 110, y: 214, color: 'peach' }, { motif: 'tree', x: 380, y: 214, color: 'mint' }, { motif: 'star', x: 240, y: 84, s: 0.6 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"휠체어를 탄 친구가 우리 교실 뒷문에서 칠판까지 올 수 있을까요?" 교사가 의자 하나를 굴리며 통로를 지나가 본다. 걸리는 곳에서 멈추고 무엇이 막았는지 묻는다. 시연 단추로 정리 차례 카드가 놓이는 모습을 보여 준다.',
        student: '내 자리 둘레에 통로를 막는 것이 있는지 살펴봐요.',
        demo: { tool: 'kitchen', options: { mode: 'order', cards: ['책상 위를 치워요', '떨어진 것을 주워요', '바닥을 쓸어요'], shuffle: false }, sequence: [{ order: ['책상 위를 치워요', '떨어진 것을 주워요', '바닥을 쓸어요'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 정리 차례 정하기', minutes: 10, tool: 'kitchen',
            teacher: '"무엇부터 해야 다시 하지 않아도 될까요?" 바닥을 먼저 쓸고 책상 위를 치우면 지우개 가루가 떨어져 바닥을 다시 쓸어야 한다는 것을 예로 든다. "위에서 아래로, 큰 것은 줍고 나서 쓸어요"를 함께 말한 뒤, 차례를 정한 까닭을 한 명씩 말하게 한다.',
            task: '통로를 넓히는 정리 차례를 카드로 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '"위에서 아래로" 약속대로 정리 차례를 놓아 보세요.', toolOptions: { mode: 'order', cards: ['책상 위 물건을 서랍에 넣어요', '바닥에 떨어진 것을 주워요', '바닥을 빗자루로 쓸어요', '쓰레받기를 쓰레기통에 비워요'] },
                target: { order: ['책상 위 물건을 서랍에 넣어요', '바닥에 떨어진 것을 주워요', '바닥을 빗자루로 쓸어요', '쓰레받기를 쓰레기통에 비워요'] }, difficulty: 0.2,
                conclude: '위에서 아래로, 큰 것을 먼저 줍고 쓸면 다시 하지 않아도 돼요.' },
              { prompt: '물건마다 제자리를 이어 보세요.', toolOptions: { mode: 'match', cards: ['고리', '사물함', '책상 밑'], slots: [{ id: 's1', label: '가방' }, { id: 's2', label: '실내화 주머니' }, { id: 's3', label: '의자' }] },
                target: { match: { s1: '고리', s2: '사물함', s3: '책상 밑' } }, difficulty: 0.1 },
              { prompt: '통로를 넓히는 일만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '통로를 넓혀요', items: [{ id: 'bag', text: '가방을 고리에 걸어요' }, { id: 'chair', text: '의자를 넣어요' }, { id: 'box', text: '상자를 통로에 놓아요' }, { id: 'pick', text: '떨어진 것을 주워요' }] },
                target: { checklist: ['bag', 'chair', 'pick'] }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 모둠별로 정리해 보기 (실천)', minutes: 17, tool: 'kitchen', pair: true,
            teacher: '"모둠별로 내 자리 둘레 통로를 정리해 봐요. 다 하면 의자 바퀴 검사를 할게요." 교사가 의자를 굴려 통로를 지나가며 확인한다. 남의 물건을 대신 치워 주는 학생에게는 "친구에게 먼저 말해 줘요"라고 짚는다. 정리 뒤 점검표에 실제로 한 일만 표시하게 한다.',
            task: '모둠 친구와 내 자리 둘레 통로를 실제로 정리하고, 한 일을 점검표에 표시해요.',
            levels: CARD_LV,
            items: [
              { prompt: '모둠 친구와 통로를 정리하고 "다 했어요"를 누르세요.', free: true },
              { prompt: '휠체어가 지나가려면 꼭 살펴볼 것만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '통로 검사', items: [{ id: 'bag', text: '통로에 가방이 없어요' }, { id: 'chair', text: '의자가 들어가 있어요' }, { id: 'vase', text: '책상에 꽃이 있어요' }, { id: 'ball', text: '바닥에 공이 없어요' }] },
                target: { checklist: ['bag', 'chair', 'ball'] }, difficulty: 0.1 },
              { prompt: '물건을 담는 곳에 맞게 나누어 보세요.', toolOptions: { slots: [{ id: 'lock', label: '사물함' }, { id: 'desk', label: '책상 서랍' }], cards: ['실내화 주머니', '체육복', '필통', '공책'] },
                target: { sort: { lock: ['실내화 주머니', '체육복'], desk: ['필통', '공책'] } }, difficulty: 0.15 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"정리하기 전과 뒤에 의자를 굴려 보니 무엇이 달라졌나요?" 두 번 굴려 본 결과를 말하게 한다. 이 약속을 날마다 집에 가기 전에 하자고 정한다. 출구 1번의 차례를 틀린 학생은 \'위에서 아래로\'를 다시 말해 준다.',
        exitTicket: [
          { type: 'tool', tool: 'kitchen', options: { mode: 'order', cards: ['책상 위 책을 가방에 넣어요', '떨어진 연필을 주워요', '의자를 넣고 줄을 서요'] }, prompt: '집에 가기 전 정리 차례대로 놓아 보세요.', target: { order: ['책상 위 책을 가방에 넣어요', '떨어진 연필을 주워요', '의자를 넣고 줄을 서요'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '통로를 막는 것은 무엇인가요?', options: ['책상 밑에 넣은 의자', '통로에 놓인 가방', '고리에 건 가방'], answer: 1, difficulty: 0.05, explain: '바닥에 놓인 가방은 지나가는 친구가 걸려 넘어질 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '통로를 넓히는 정리',
      items: [
        { type: 'figure', wide: true, prompt: '정리 차례대로 빈칸에 1, 2, 3, 4를 쓰세요.', tool: 'kitchen', figures: [{ options: { mode: 'order', cards: ['바닥을 쓸어요', '책상 위를 치워요', '쓰레받기를 비워요', '떨어진 것을 주워요'], shuffle: false }, caption: '' }], answer: '책상 위 1, 줍기 2, 쓸기 3, 쓰레받기 4' },
        { type: 'check', prompt: '오늘 내가 한 일에 ✓ 하세요.', options: ['가방을 걸었어요', '의자를 넣었어요', '바닥을 살폈어요', '친구에게 말해 주었어요'] },
        { type: 'choice', prompt: '실내화 주머니의 제자리에 ○ 하세요.', options: ['통로', '사물함', '창틀'], answer: '사물함' },
        { type: 'short', prompt: '정리한 뒤 교실이 어떻게 달라졌는지 쓰세요.' },
      ],
      easy: {
        note: '위에서 아래로 정리해요. 책상 위 → 떨어진 것 줍기 → 바닥 쓸기.',
        items: [
          { type: 'choice', prompt: '가방의 제자리에 ○ 하세요.', options: ['고리', '통로'], answer: '고리' },
          { type: 'check', prompt: '오늘 한 일에 ✓ 하세요.', options: ['가방 걸기', '의자 넣기'] },
          { type: 'draw', prompt: '정리한 내 자리를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 초록 테두리가 생기고, 틀리면 카드가 돌아와요. 정리는 내 자리만 해요.',
      base: '차례를 모두 놓은 뒤 확인을 눌러요. 내 자리와 앞뒤 통로를 정리해요.',
      challenge: '모둠 통로 전체를 맡아, 휠체어가 지나갈 만큼 넓어졌는지 의자로 직접 확인해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 바닥부터 쓸고 나서 가방을 내려놓아 다시 어질러진다 → 위에서 아래로 차례를 정한다. ② 친구 물건을 말없이 치운다 → 먼저 말해 주고 함께 치운다. ③ 점검표에 하지 않은 일도 표시한다 → 점검표는 내가 실제로 한 일만 표시하는 약속이라고 말하고, 의자 굴리기로 함께 확인한다.',
  }));

  lessons.push(L(11, {
    title: '복도와 계단에서 지킬 약속 고르기',
    objective: '복도와 계단에서 생길 수 있는 일을 보고 모두가 안전한 행동을 골라 친구에게 말로 권할 수 있다.',
    illustration: ART('a paper school staircase with a handrail, children walking on the right side in a calm line, arrows painted on the steps', '천천히, 오른쪽으로', [
      { motif: 'house', x: 120, y: 214 }, { motif: 'tree', x: 380, y: 214 }, { motif: 'cloud', x: 300, y: 80, s: 0.6 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"복도에서 친구와 부딪힌 적이 있나요? 그때 둘이 어떻게 걷고 있었나요?" 두 학생이 마주 보고 걸어오는 장면을 천천히 재연해 보게 한다. 시연 단추로 뛰는 장면의 결과 카드를 보여 주고, "약속은 나를 묶는 것이 아니라 모두를 지키는 것"이라는 말을 함께 읽는다.',
        student: '복도에서 부딪힐 뻔했던 일을 짝에게 말해 봐요.',
        demo: { tool: 'emotion', options: { mode: 'branch', situation: '쉬는 시간, 복도 끝에 친구가 서 있어요.', choices: [{ id: 'walk', text: '걸어서 가요', result: '서로 부딪히지 않아요.', mood: '편안함' }, { id: 'run', text: '뛰어가요', result: '모퉁이에서 부딪혀요.', mood: '속상함' }] }, sequence: [{ choice: 'walk' }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 이럴 때 어떻게 할까', minutes: 14, tool: 'emotion',
            teacher: '"이렇게 하면 다음에 무슨 일이 생길까요?" 보기를 고르기 전에 결과를 먼저 짐작하게 한다. 급해서 뛰는 것은 괜찮다고 말하는 학생에게 "급할수록 부딪히면 더 늦어져요"라고 짚는다.',
            task: '복도와 계단에서 생긴 일을 읽고 모두가 안전한 행동을 골라요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '계단을 내려가는데 앞 친구가 천천히 가요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '계단을 내려가는데 앞 친구가 손잡이를 잡고 천천히 내려가요.', choices: [
                { id: 'push', text: '"빨리 가!" 하고 밀어요', result: '친구가 계단에서 넘어질 뻔해요.', mood: '무서움', why: '계단에서 밀리면 어떤 일이 생길까요?' },
                { id: 'wait', text: '뒤에서 손잡이를 잡고 따라가요', result: '둘 다 안전하게 내려가요.', mood: '편안함' },
                { id: 'jump', text: '두 칸씩 뛰어 앞질러요', result: '발을 헛디뎌 넘어질 수 있어요.', mood: '걱정', why: '계단을 뛰어 내려가면 어떻게 될까요?' }] }, target: { choice: 'wait' }, difficulty: 0.1,
                levels: { easy: { toolOptions: { choices: [
                  { id: 'push', text: '"빨리 가!" 하고 밀어요', result: '친구가 계단에서 넘어질 뻔해요.', mood: '무서움', why: '계단에서 밀리면 어떤 일이 생길까요?' },
                  { id: 'wait', text: '뒤에서 손잡이를 잡고 따라가요', result: '둘 다 안전하게 내려가요.', mood: '편안함' }] } } } },
              { prompt: '모퉁이를 돌 때 어떻게 할까요? 맞게 고르면 결과가 보여요.', reveal: 'after-check', toolOptions: { mode: 'branch', situation: '복도 모퉁이를 돌아 화장실에 가려고 해요. 모퉁이 너머는 보이지 않아요.', choices: [
                { id: 'slow', text: '오른쪽으로 붙어 천천히 돌아요', result: '마주 오는 친구와 부딪히지 않아요.', mood: '편안함' },
                { id: 'center', text: '복도 가운데로 빠르게 돌아요', result: '마주 오던 친구와 쿵 부딪혀요.', mood: '속상함', why: '모퉁이 너머에 누가 있을지 떠올려 봐요.' },
                { id: 'back', text: '뒤로 걸으며 돌아요', result: '앞이 안 보여 걸려 넘어져요.', mood: '놀람', why: '앞을 보지 않고 걸으면 어떻게 될까요?' }] }, target: { choice: 'slow' }, difficulty: 0.2,
                predict: { q: '모퉁이에서 가장 조심할 것은 무엇일까요?', options: ['보이지 않는 친구', '내 신발', '창문'], answer: 0 },
                conclude: '모퉁이 너머는 보이지 않으니 오른쪽으로 붙어 천천히 돌아요.' },
              { prompt: '복도에서 공을 들고 가요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '체육 시간이 끝나고 공을 들고 교실로 가요.', choices: [
                { id: 'hold', text: '공을 두 손으로 안고 걸어요', result: '공이 굴러가지 않아요.', mood: '편안함' },
                { id: 'bounce', text: '공을 튀기며 걸어요', result: '공이 굴러가 친구 발에 걸려요.', mood: '걱정', why: '공이 손에서 빠지면 어디로 갈까요?' }] }, target: { choice: 'hold' }, difficulty: 0.05 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 친구에게 약속을 말로 권하기', minutes: 12, tool: 'story',
            teacher: '"친구가 뛰고 있을 때 \'야, 뛰지 마!\'와 \'천천히 걸어 줄래?\' 가운데 어느 말을 들으면 기분이 좋을까요?" 두 말을 다른 목소리로 들려준다. 약속을 권하는 말은 부탁하는 말투로 한다는 것을 짚는다.',
            task: '말풍선 빈칸에 약속을 권하는 알맞은 말을 넣어요.',
            levels: CARD_LV,
            items: [
              { prompt: '뛰는 친구에게 할 말을 말풍선에 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['천천히 걸어 줄래', '뛰지 마, 바보야'], slots: [{ id: 'b1', who: '민지', motif: 'flower', label: '부딪힐 수 있어. ___?' }] },
                target: { fill: { b1: '천천히 걸어 줄래' } }, difficulty: 0.05 },
              { prompt: '두 말풍선에 알맞은 말을 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['손잡이를 잡자', '오른쪽으로 가자', '먼저 가'], slots: [{ id: 'b1', who: '준호', motif: 'leaf', label: '계단에서는 ___.' }, { id: 'b2', who: '서아', motif: 'star', label: '복도에서는 ___.' }] },
                target: { fill: { b1: '손잡이를 잡자', b2: '오른쪽으로 가자' } }, difficulty: 0.15 },
              { prompt: '복도·계단 약속에 알맞은 말만 골라 보세요.', toolOptions: { mode: 'pick', basket: '복도·계단 약속', cards: ['오른쪽으로 걸어요', '계단은 한 칸씩', '복도에서 술래잡기', '손잡이를 잡아요'] },
                target: { pick: ['오른쪽으로 걸어요', '계단은 한 칸씩', '손잡이를 잡아요'] }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"우리 반 복도·계단 약속 세 가지를 정해 볼까요?" 학생이 고른 약속을 짧은 말로 칠판에 적고 함께 읽는다. 쉬는 시간에 지켰는지 다음 시간 첫머리에 묻겠다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'branch', situation: '비 오는 날 젖은 계단을 내려가요.', choices: [{ id: 'rail', text: '손잡이를 잡고 한 칸씩 내려가요', result: '미끄러지지 않고 잘 내려가요.', mood: '편안함' }, { id: 'slide', text: '미끄럼 타듯 빨리 내려가요', result: '미끄러져 엉덩방아를 찧어요.', mood: '속상함' }] }, prompt: '젖은 계단에서 어떻게 할지 골라 보세요.', target: { choice: 'rail' }, difficulty: 0.05 },
          { type: 'choice', prompt: '복도에서 친구가 뛸 때 알맞은 말은 무엇인가요?', options: ['"천천히 걸어 줄래?"', '"너 혼날 거야!"', '"나도 뛸래!"'], answer: 0, difficulty: 0.1, explain: '부탁하는 말로 권하면 친구가 기분 좋게 약속을 지켜요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '복도와 계단 약속',
      items: [
        { type: 'check', prompt: '복도와 계단에서 지킬 약속에 ✓ 하세요.', options: ['오른쪽으로 걸어요', '계단은 한 칸씩', '손잡이를 잡아요', '공을 튀기며 걸어요'] },
        { type: 'choice', prompt: '모퉁이를 돌 때 바른 행동에 ○ 하세요.', options: ['천천히 돌아요', '빠르게 돌아요', '뒤로 걸어요'], answer: '천천히 돌아요' },
        { type: 'blank', prompt: '친구에게 권하는 말을 완성하세요.', text: '계단에서는 ___를 잡자.', answer: '손잡이' },
        { type: 'draw', prompt: '복도에서 약속을 지키는 내 모습을 그려 보세요.' },
      ],
      easy: {
        note: '"그다음에 무슨 일이 생길까?"를 먼저 떠올려요.',
        items: [
          { type: 'choice', prompt: '계단에서 바른 행동에 ○ 하세요.', options: ['한 칸씩 내려가요', '뛰어 내려가요'], answer: '한 칸씩 내려가요' },
          { type: 'choice', prompt: '친구에게 할 말에 ○ 하세요.', options: ['"천천히 걸어 줄래?"', '"비켜!"'], answer: '"천천히 걸어 줄래?"' },
          { type: 'draw', prompt: '손잡이를 잡은 내 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '고르는 보기가 두 개이고, 말풍선 카드를 맞게 놓으면 초록 테두리가 생겨요.',
      base: '보기가 세 개예요. 모두 고른 뒤 확인을 눌러요.',
      challenge: '모퉁이 문항은 맞힌 뒤에만 결과가 보여 결과를 먼저 짐작해야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 급하면 뛰어도 된다고 여긴다 → 부딪히면 더 늦어진다는 것을 결과로 보여 준다. ② 약속을 권할 때 명령하거나 탓하는 말을 쓴다 → "~해 줄래?" 부탁하는 말로 바꾸어 말해 본다. ③ \'오른쪽으로\'를 헷갈린다 → 교실 벽과 복도 바닥에 화살표를 붙여 두고 함께 따라 걷는다.',
  }));

  lessons.push(L(12, {
    title: '함께 쓰는 놀잇감을 제자리에 돌려놓기',
    objective: '함께 쓰는 놀잇감과 물건의 제자리를 알고, 다 쓴 뒤 돌려놓는 차례를 말하며 실천할 수 있다.',
    illustration: ART('a paper toy corner with labeled baskets for balls, jump ropes and picture books, a child placing a ball back into its basket', '다 쓰면 제자리에', [
      { motif: 'house', x: 120, y: 214, color: 'buttercup' }, { motif: 'tree', x: 370, y: 214 }, { motif: 'flower', x: 250, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"쉬는 시간에 줄넘기를 하려는데 줄넘기가 보이지 않아요. 왜 그럴까요?" 누군가 제자리에 두지 않았다는 답을 이끈다. 시연 단추로 \'공\'이 \'공 바구니\'에 이어지는 모습을 보여 준다. 함께 쓰는 물건은 다음 사람을 위해 돌려놓는다는 것을 짚는다.',
        student: '우리 반에서 함께 쓰는 물건을 세 가지 말해 봐요.',
        demo: { tool: 'kitchen', options: { mode: 'match', cards: ['공 바구니', '책꽂이'], slots: [{ id: 's1', label: '공' }, { id: 's2', label: '그림책' }], shuffle: false }, sequence: [{ match: { s1: '공 바구니', s2: '책꽂이' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 놀잇감의 제자리 찾기', minutes: 12, tool: 'kitchen',
            teacher: '"이 물건은 어디에 두면 다음 친구가 바로 찾을까요?" 물건마다 제자리를 정한 까닭을 묻는다. 아무 바구니에나 넣으면 된다는 학생에게 "그림책이 공 바구니에 있으면 찾을 수 있을까요?"라고 묻는다.',
            task: '함께 쓰는 물건과 그 물건의 제자리를 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '함께 쓰는 물건마다 제자리를 이어 보세요.', toolOptions: { mode: 'match', cards: ['고리', '공 바구니', '책꽂이'], slots: [{ id: 's1', label: '줄넘기' }, { id: 's2', label: '피구공' }, { id: 's3', label: '그림책' }] },
                target: { match: { s1: '고리', s2: '공 바구니', s3: '책꽂이' } }, difficulty: 0.05 },
              { prompt: '교실 놀이 상자의 물건을 알맞은 칸으로 나누어 보세요.', toolOptions: { slots: [{ id: 'blk', label: '블록 상자' }, { id: 'brd', label: '보드게임 칸' }], cards: ['쌓기 블록', '자석 블록', '주사위 놀이판', '말판 놀이'] },
                target: { sort: { blk: ['쌓기 블록', '자석 블록'], brd: ['주사위 놀이판', '말판 놀이'] } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['쌓기 블록', '자석 블록', '주사위 놀이판', '말판 놀이', '내 필통'] } } } },
              { prompt: '다 쓴 놀잇감을 돌려놓는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['조각을 모두 모아요', '빠진 것이 없는지 세어요', '상자에 담아 뚜껑을 닫아요', '제자리에 올려요'] },
                target: { order: ['조각을 모두 모아요', '빠진 것이 없는지 세어요', '상자에 담아 뚜껑을 닫아요', '제자리에 올려요'] }, difficulty: 0.2,
                conclude: '빠진 조각을 세어 보고 넣어야 다음 친구도 끝까지 놀 수 있어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 제자리에 없으면 생기는 일', minutes: 14, tool: 'emotion',
            teacher: '"줄넘기가 운동장에 버려져 있으면 누가 어떤 마음일까요?" 다음 사람의 마음과 물건이 겪는 일(비에 젖음, 잃어버림)을 함께 말하게 한다. 다른 사람이 어지른 것은 내 일이 아니라는 학생에게 "모두의 물건은 모두가 지켜요"라고 말해 준다.',
            task: '제자리에 두지 않았을 때 생기는 일과 마음을 알아보고, 어떻게 할지 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '두 상황에 어울리는 마음 카드를 놓아 보세요.', toolOptions: { cards: ['속상함', '고마움', '신남'], slots: [{ id: 's1', label: '보드게임 말이 하나 없어 놀이를 못 해요' }, { id: 's2', label: '친구가 공을 바구니에 넣어 줬어요' }] },
                target: { match: { s1: '속상함', s2: '고마움' } }, difficulty: 0.05 },
              { prompt: '운동장에 내가 쓰지 않은 줄넘기가 떨어져 있어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '집에 가는 길, 운동장에 우리 반 줄넘기가 떨어져 있어요. 내가 쓴 것은 아니에요.', choices: [
                { id: 'mine', text: '내 것이 아니니 그냥 가요', result: '밤새 비를 맞아 줄넘기가 망가져요.', mood: '속상함', why: '우리 반 친구 모두가 쓰는 줄넘기예요.' },
                { id: 'bring', text: '주워서 교실 고리에 걸어요', result: '내일 친구들이 바로 줄넘기를 해요.', mood: '뿌듯함' },
                { id: 'hide', text: '내 사물함에 몰래 넣어요', result: '친구들이 줄넘기를 찾아 헤매요.', mood: '걱정', why: '함께 쓰는 물건은 제자리에 있어야 해요.' }] }, target: { choice: 'bring' }, difficulty: 0.15 },
              { prompt: '함께 쓰는 물건을 아끼는 행동만 골라 보세요.', toolOptions: { mode: 'pick', basket: '아끼는 행동', cards: ['다 쓰면 제자리에 둬요', '크레파스를 부러뜨려요', '빠진 조각을 찾아 넣어요', '책장을 접어 둬요'] },
                target: { pick: ['다 쓰면 제자리에 둬요', '빠진 조각을 찾아 넣어요'] }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 쓴 놀잇감을 지금 바로 제자리에 돌려놓아 볼까요?" 1분 동안 실제로 돌려놓고, 놀이 상자 뚜껑이 닫혔는지 함께 본다. 출구 1번을 틀린 학생은 물건과 제자리 그림을 다시 짝 짓는다.',
        exitTicket: [
          { type: 'tool', tool: 'kitchen', options: { mode: 'match', cards: ['상자', '꽂이'], slots: [{ id: 'e1', label: '퍼즐 조각' }, { id: 'e2', label: '색연필' }] }, prompt: '물건마다 제자리를 이어 보세요.', target: { match: { e1: '상자', e2: '꽂이' } }, difficulty: 0.05 },
          { type: 'choice', prompt: '내가 쓰지 않은 공이 복도에 있을 때 알맞은 행동은 무엇인가요?', options: ['모른 척해요', '주워서 제자리에 둬요', '발로 차요'], answer: 1, difficulty: 0.1, explain: '함께 쓰는 물건은 모두가 아껴요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '다 쓰면 제자리에',
      items: [
        { type: 'figure', wide: true, prompt: '물건과 제자리를 선으로 이으세요.', tool: 'kitchen', figures: [{ options: { mode: 'match', cards: ['공 바구니', '책꽂이', '고리'], slots: [{ id: 's1', label: '공' }, { id: 's2', label: '그림책' }, { id: 's3', label: '줄넘기' }] }, caption: '' }], answer: '공-공 바구니, 그림책-책꽂이, 줄넘기-고리' },
        { type: 'choice', prompt: '놀잇감을 돌려놓기 전에 먼저 할 일에 ○ 하세요.', options: ['빠진 조각을 세어요', '뚜껑을 버려요', '아무 칸에 넣어요'], answer: '빠진 조각을 세어요' },
        { type: 'table', prompt: '우리 반 물건과 제자리를 쓰세요.', columns: ['물건', '제자리'], rows: 3 },
        { type: 'short', prompt: '함께 쓰는 물건이 제자리에 없어 불편했던 일을 쓰세요.' },
      ],
      easy: {
        note: '물건 그림을 보고 같은 그림이 붙은 바구니를 찾아요.',
        items: [
          { type: 'choice', prompt: '공의 제자리에 ○ 하세요.', options: ['공 바구니', '책꽂이'], answer: '공 바구니' },
          { type: 'choice', prompt: '바른 행동에 ○ 하세요.', options: ['다 쓰면 제자리에', '아무 데나'], answer: '다 쓰면 제자리에' },
          { type: 'draw', prompt: '놀잇감을 정리하는 내 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '모두 놓은 뒤 확인을 눌러요.',
      challenge: '놀이 상자에 넣지 않을 내 물건 카드가 섞여 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 내가 쓰지 않은 물건은 치우지 않아도 된다고 여긴다 → 함께 쓰는 물건은 모두가 지킨다는 것을 결과로 보여 준다. ② 아무 바구니에나 넣는다 → 바구니에 그림 이름표를 붙여 두면 1학년도 쉽게 찾는다. ③ 조각을 세지 않고 넣는다 → 상자 뚜껑에 조각 수를 적어 둔다.',
  }));

  lessons.push(L(13, {
    title: '손 씻는 곳에서 물과 휴지 아껴 쓰기',
    objective: '손을 씻는 차례를 알고, 물을 잠그고 휴지를 알맞게 쓰는 행동을 골라 실천할 수 있다.',
    illustration: ART('a paper washbasin with a closed tap, a small soap, one paper towel and a child smiling with clean hands, water droplets as paper circles', '물은 꼭, 휴지는 한 장', [
      { motif: 'house', x: 120, y: 214, color: 'sky' }, { motif: 'tree', x: 370, y: 214 }, { motif: 'flower', x: 250, y: 228, color: 'mint' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"손을 씻는 동안 물을 계속 틀어 두면 물이 얼마나 흘러갈까요?" 컵 하나를 들고 "이 컵으로 여러 번 가득 찰 만큼"이라고 보여 준다. 시연 단추로 손 씻는 차례 카드가 놓이는 모습을 보여 주고, 마지막에 \'물을 잠가요\'가 오는 것을 짚는다. 물을 아끼는 것도 다음 사람을 위한 약속이라는 것을 말한다.',
        student: '나는 손을 씻을 때 무엇부터 하는지 말해 봐요.',
        demo: { tool: 'kitchen', options: { mode: 'order', cards: ['손에 물을 묻혀요', '비누로 문질러요', '물로 헹궈요', '물을 잠가요'], shuffle: false }, sequence: [{ order: ['손에 물을 묻혀요', '비누로 문질러요', '물로 헹궈요', '물을 잠가요'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 손 씻는 차례 정하기', minutes: 13, tool: 'kitchen',
            teacher: '"비누로 문지르는 동안 물은 어떻게 할까요?" 문지르는 동안 물을 잠그면 물을 아낄 수 있다는 것을 몸짓으로 보여 준다. 손바닥만 비비는 학생에게 손등과 손가락 사이도 문지르게 한다.',
            task: '손 씻는 차례와 물·휴지를 아끼는 방법을 알아봐요.',
            levels: CARD_LV,
            items: [
              { prompt: '물을 아끼며 손 씻는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['물을 묻히고 잠가요', '비누로 구석구석 문질러요', '다시 틀어 헹궈요', '물을 꼭 잠가요', '휴지 한 장으로 닦아요'] },
                target: { order: ['물을 묻히고 잠가요', '비누로 구석구석 문질러요', '다시 틀어 헹궈요', '물을 꼭 잠가요', '휴지 한 장으로 닦아요'] }, difficulty: 0.25,
                levels: { easy: { prompt: '손 씻는 차례대로 놓아 보세요.', target: { order: ['물을 묻히고 잠가요', '비누로 구석구석 문질러요', '다시 틀어 헹궈요', '물을 꼭 잠가요'] }, toolOptions: { cards: ['물을 묻히고 잠가요', '비누로 구석구석 문질러요', '다시 틀어 헹궈요', '물을 꼭 잠가요'] } } } },
              { prompt: '손을 씻을 때 문지를 곳을 모두 표시해 보세요.', toolOptions: { mode: 'checklist', title: '구석구석 문질러요', items: [{ id: 'palm', text: '손바닥' }, { id: 'back', text: '손등' }, { id: 'gap', text: '손가락 사이' }, { id: 'nail', text: '손톱 밑' }, { id: 'elbow', text: '팔꿈치 뒤' }] },
                target: { checklist: ['palm', 'back', 'gap', 'nail'] }, difficulty: 0.15,
                predict: { q: '손바닥만 문지르면 깨끗해질까요?', options: ['깨끗해요', '덜 깨끗해요'], answer: 1 },
                conclude: '손등, 손가락 사이, 손톱 밑까지 문질러야 깨끗해져요.' },
              { prompt: '물과 휴지를 아끼는 행동만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '아껴 써요', items: [{ id: 'off', text: '문지르는 동안 물을 잠가요' }, { id: 'one', text: '휴지는 한 장만 써요' }, { id: 'many', text: '휴지를 여러 장 뽑아요' }, { id: 'play', text: '물장난을 해요' }] },
                target: { checklist: ['off', 'one'] }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 수돗가에서 어떻게 할까', minutes: 13, tool: 'emotion',
            teacher: '"물이 똑똑 새는 수도를 보면 어떻게 하나요?" 내가 쓰지 않은 수도라도 잠그거나 알리는 것이 약속이라는 것을 짚는다. 수도가 고장 나 잠기지 않으면 억지로 돌리지 말고 어른께 알리게 한다.',
            task: '수돗가에서 생긴 일을 읽고 물을 아끼는 행동을 골라요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '아무도 없는데 수도에서 물이 흘러요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '쉬는 시간, 아무도 없는 수돗가에서 물이 졸졸 흘러요.', choices: [
                { id: 'close', text: '수도꼭지를 꼭 잠가요', result: '물이 더 흘러가지 않아요.', mood: '뿌듯함' },
                { id: 'pass', text: '내가 튼 게 아니니 지나가요', result: '물이 하루 내내 흘러가요.', mood: '걱정', why: '내가 틀지 않았어도 물은 모두의 것이에요.' },
                { id: 'play', text: '손으로 막아 물을 튀겨요', result: '바닥이 젖어 미끄러워요.', mood: '놀람', why: '물이 튀면 다음 친구가 어떻게 될까요?' }] }, target: { choice: 'close' }, difficulty: 0.1 },
              { prompt: '수도꼭지를 돌려도 물이 멈추지 않아요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '수도꼭지를 끝까지 돌렸는데도 물이 계속 나와요.', choices: [
                { id: 'force', text: '더 세게 돌려요', result: '수도꼭지가 부러질 수 있어요.', mood: '걱정', why: '고장 난 것은 어린이가 고치지 않아요.' },
                { id: 'tell', text: '선생님께 바로 알려요', result: '어른이 수도를 고쳐 주세요.', mood: '편안함' }] }, target: { choice: 'tell' }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { choices: [
                  { id: 'force', text: '더 세게 돌려요', result: '수도꼭지가 부러질 수 있어요.', mood: '걱정', why: '고장 난 것은 어린이가 고치지 않아요.' },
                  { id: 'tell', text: '선생님께 바로 알려요', result: '어른이 수도를 고쳐 주세요.', mood: '편안함' },
                  { id: 'cup', text: '컵으로 물을 받아 버려요', result: '물은 계속 흘러가요.', mood: '걱정', why: '물이 멈추려면 수도를 고쳐야 해요.' }] } } } },
              { prompt: '휴지를 쓴 두 친구의 마음 카드를 놓아 보세요.', toolOptions: { cards: ['뿌듯함', '미안함', '화남'], slots: [{ id: 's1', label: '휴지 한 장으로 닦고 휴지통에 넣었어요' }, { id: 's2', label: '휴지를 잔뜩 뽑아 바닥에 버렸어요' }] },
                target: { match: { s1: '뿌듯함', s2: '미안함' } }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 점심 먹기 전에 손을 씻으면서 물을 몇 번 잠갔는지 세어 볼까요?" 실제로 씻고 와서 말하게 한다. 출구 1번을 틀린 학생은 \'잠그기\'가 어디에 오는지 다시 본다.',
        exitTicket: [
          { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '양치할 때', items: [{ id: 'cup', text: '컵에 물을 받아 써요' }, { id: 'run', text: '물을 틀어 놓고 닦아요' }, { id: 'off', text: '다 쓰면 물을 잠가요' }] }, prompt: '양치할 때 물을 아끼는 행동만 표시해 보세요.', target: { checklist: ['cup', 'off'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '고장 나서 잠기지 않는 수도를 보면 어떻게 하나요?', options: ['세게 돌려요', '어른께 알려요', '그냥 가요'], answer: 1, difficulty: 0.05, explain: '고장 난 것은 어른께 알려 고쳐요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '물과 휴지 아껴 쓰기',
      items: [
        { type: 'figure', wide: true, prompt: '손 씻는 차례대로 빈칸에 번호를 쓰세요.', tool: 'kitchen', figures: [{ options: { mode: 'order', cards: ['헹궈요', '물을 묻혀요', '닦아요', '비누로 문질러요'], shuffle: false }, caption: '' }], answer: '물을 묻혀요 1, 비누로 문질러요 2, 헹궈요 3, 닦아요 4' },
        { type: 'check', prompt: '손을 씻을 때 문지를 곳에 ✓ 하세요.', options: ['손바닥', '손등', '손가락 사이', '손톱 밑'] },
        { type: 'choice', prompt: '휴지를 아껴 쓰는 친구에 ○ 하세요.', options: ['한 장으로 닦아요', '다섯 장을 뽑아요', '바닥에 버려요'], answer: '한 장으로 닦아요' },
        { type: 'short', prompt: '우리 집에서 물을 아낄 수 있는 방법을 하나 쓰세요.' },
      ],
      easy: {
        note: '비누로 문지를 때는 물을 잠가요.',
        items: [
          { type: 'choice', prompt: '물을 아끼는 행동에 ○ 하세요.', options: ['물을 잠가요', '물을 틀어 놓아요'], answer: '물을 잠가요' },
          { type: 'choice', prompt: '휴지는 몇 장 쓸까요?', options: ['한 장', '많이'], answer: '한 장' },
          { type: 'draw', prompt: '손을 깨끗이 씻는 내 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '손 씻는 차례 카드가 네 장이고, 맞는 자리에 초록 테두리가 생겨요.',
      base: '차례 카드 다섯 장을 놓고 확인을 눌러요.',
      challenge: '고장 난 수도 문항에 그럴듯한 보기가 하나 더 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 문지르는 동안 물을 틀어 둔다 → 묻히고 잠그고, 헹굴 때 다시 튼다. ② 손바닥만 비빈다 → 손등·손가락 사이·손톱 밑까지 차례로 문지른다. ③ 고장 난 수도를 억지로 돌린다 → 고장 난 것은 어른께 알리는 것이 약속이다. 손 씻기 노래 대신 "하나부터 스물까지" 함께 세며 문지르게 하면 시간을 지키기 쉽다.',
  }));

  lessons.push(L(14, {
    title: '색종이 조각으로 그림 안내판 꾸미기',
    objective: '안내판이 필요한 곳을 고르고, 색종이 조각을 붙여 뜻이 잘 보이는 그림 안내판을 꾸밀 수 있다.',
    illustration: ART('handmade paper signboards on a classroom wall: blue water drops for a sink, a green arrow for the exit and a book for the reading corner', '그림으로 알려 줘요', [
      { motif: 'house', x: 120, y: 214, color: 'lavender' }, { motif: 'tree', x: 370, y: 214 }, { motif: 'leaf', x: 250, y: 220 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"7차시에 그림 안내판이 누구에게 도움이 되는지 알아보았지요. 오늘은 우리가 직접 만들어요." 시연 단추로 파란 동그라미가 모여 물방울 안내판이 되는 모습을 보여 준다. 글자보다 모양과 색으로 뜻을 알리는 것이 안내판의 약속이라는 것을 짚는다.',
        student: '우리 교실에서 그림 안내판을 붙이고 싶은 곳을 말해 봐요.',
        demo: { tool: 'collage', options: { readOnly: true }, sequence: [{ has: [{ shape: 'circle', color: '파랑', min: 3 }] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 안내판이 필요한 곳 정하기', minutes: 8, tool: 'mindmap',
            teacher: '"어디에 안내판이 있으면 처음 온 친구가 헤매지 않을까요?" 안내판이 꼭 필요한 곳과 이미 잘 아는 곳을 나누게 한다. 모든 곳에 다 붙이자는 학생에게 "안내판이 너무 많으면 어떤 것이 중요한지 찾기 어려워요"라고 말해 준다.',
            task: '안내판이 있으면 좋은 곳과 그 안내판의 뜻을 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '안내판을 붙일 곳과 알맞은 뜻을 이어 보세요.', toolOptions: { mode: 'match', topic: '우리 반 안내판', slots: [{ id: 's1', label: '세면대 위' }, { id: 's2', label: '책꽂이 옆' }, { id: 's3', label: '뒷문' }], cards: ['손 씻는 곳', '책 읽는 곳', '나가는 곳'] },
                target: { match: { s1: '손 씻는 곳', s2: '책 읽는 곳', s3: '나가는 곳' } }, difficulty: 0.1 },
              { prompt: '안내판이 꼭 필요한 곳만 골라 보세요.', toolOptions: { mode: 'pick', basket: '안내판이 필요해요', cards: ['처음 온 친구가 헤매는 화장실', '미끄러운 현관', '내 필통 안', '내 신발 속'] },
                target: { pick: ['처음 온 친구가 헤매는 화장실', '미끄러운 현관'] }, difficulty: 0.1 },
              { prompt: '안내판 뜻과 어울리는 모양을 이어 보세요.', toolOptions: { mode: 'match', topic: '모양으로 알려요', slots: [{ id: 's1', label: '손 씻는 곳' }, { id: 's2', label: '나가는 곳' }, { id: 's3', label: '조용히 해요' }], cards: ['물방울 동그라미', '화살표 세모', '입 앞 손가락 하나'] },
                target: { match: { s1: '물방울 동그라미', s2: '화살표 세모', s3: '입 앞 손가락 하나' } }, difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 색종이 안내판 꾸미기', minutes: 18, tool: 'collage',
            teacher: '"멀리서도 뜻이 보이려면 조각을 크게, 색을 분명하게 붙여요." 판에 조각을 붙이며 \'붙이기·옮기기·돌리기\' 단추를 함께 눌러 본다. 조각을 너무 많이 붙여 뜻이 흐려지는 학생에게 "가장 중요한 모양 하나가 크게 보이나요?"라고 묻는다.',
            task: '색종이 조각을 붙이고 옮기고 돌려 안내판을 꾸며요.',
            levels: {
              easy: { shapes: ['circle', 'square', 'triangle', 'rect', 'star'], colors: ['파랑', '초록', '빨강', '노랑', '하양'], sizes: ['m', 'l'] },
              base: { shapes: ['circle', 'square', 'rect', 'triangle', 'star', 'heart'], colors: ['빨강', '주황', '노랑', '초록', '파랑', '보라', '하양'] },
              challenge: {},
            },
            items: [
              { prompt: '손 씻는 곳 안내판이에요. 파랑 동그라미 물방울을 세 개 이상 붙여 보세요.', target: { has: [{ shape: 'circle', color: '파랑', min: 3 }] }, difficulty: 0.1 },
              { prompt: '나가는 곳 안내판을 보기처럼 만들어요. 초록 큰 긴 네모 가운데에 하양 세모를 놓아요.', state: { pieces: [{ shape: 'rect', color: '초록', size: 'l', x: 280, y: 200, r: 0 }] }, target: { match: [{ shape: 'rect', color: '초록', size: 'l', x: 280, y: 200, r: 0 }, { shape: 'triangle', color: '하양', size: 'm', x: 280, y: 200, r: 0 }] }, difficulty: 0.2,
                conclude: '진한 바탕에 밝은 모양을 놓으면 멀리서도 잘 보여요.' },
              { prompt: '책 읽는 곳 안내판이에요. 네모는 두 개 이상, 별은 한 개만 붙여 보세요.', target: { has: [{ shape: 'square', min: 2 }, { shape: 'star', n: 1 }] }, difficulty: 0.15 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"짝의 안내판만 보고 뜻을 맞혀 볼까요?" 짝이 뜻을 바로 맞히면 잘 만든 안내판이라고 말해 준다. 활동지에 직접 그린 안내판은 교실의 실제 자리에 붙인다. 출구 2번을 틀린 학생은 바탕색과 모양색을 견주어 보게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'collage', options: { shapes: ['circle', 'square', 'heart'], colors: ['빨강', '분홍', '하양'] }, prompt: '보건실 안내판이에요. 빨강 하트를 한 개 붙여 보세요.', target: { has: [{ shape: 'heart', color: '빨강', n: 1 }] }, difficulty: 0.05 },
          { type: 'choice', prompt: '멀리서도 잘 보이는 안내판은 어느 것인가요?', options: ['초록 바탕에 하양 화살표', '하양 바탕에 노랑 화살표', '조각이 아주 많은 그림'], answer: 0, difficulty: 0.2, explain: '진한 바탕에 밝은 모양을 놓으면 뚜렷하게 보여요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '그림 안내판 만들기',
      items: [
        { type: 'figure', wide: true, prompt: '보기 안내판의 뜻을 쓰세요.', tool: 'collage', figures: [{ options: { readOnly: true, printColors: false }, state: { pieces: [{ shape: 'circle', color: '파랑', size: 'm', x: 220, y: 160, r: 0 }, { shape: 'circle', color: '파랑', size: 'm', x: 280, y: 220, r: 0 }, { shape: 'circle', color: '파랑', size: 'm', x: 340, y: 160, r: 0 }] }, caption: '뜻: ____________' }], answer: '손 씻는 곳(물)' },
        { type: 'choice', prompt: '안내판이 꼭 필요한 곳에 ○ 하세요.', options: ['미끄러운 현관', '내 필통 안', '내 신발 속'], answer: '미끄러운 현관' },
        { type: 'check', prompt: '내 안내판에서 잘한 점에 ✓ 하세요.', options: ['모양이 크게 보여요', '색이 분명해요', '짝이 뜻을 맞혔어요'] },
        { type: 'draw', prompt: '우리 반에 붙일 그림 안내판을 그려 보세요. 글자 없이 그림으로만 그려요.' },
      ],
      easy: {
        note: '가장 중요한 모양 하나를 크게 그려요.',
        items: [
          { type: 'choice', prompt: '물방울 안내판의 뜻에 ○ 하세요.', options: ['손 씻는 곳', '책 읽는 곳'], answer: '손 씻는 곳' },
          { type: 'choice', prompt: '나가는 곳 안내판에 어울리는 모양에 ○ 하세요.', options: ['화살표', '별'], answer: '화살표' },
          { type: 'draw', prompt: '손 씻는 곳 안내판을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '모양 네 가지, 색 다섯 가지, 크기 두 가지만 나와요. 안내판 자리 잇기는 맞으면 초록 테두리가 생겨요.',
      base: '모양 여섯 가지, 색 일곱 가지로 꾸며요.',
      challenge: '모든 모양·색·크기를 쓰고, 짝이 뜻을 맞힐 수 있게 조각 수를 스스로 줄여 봐요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 조각을 많이 붙일수록 좋은 안내판이라고 여긴다 → 짝이 뜻을 바로 맞히는지로 견준다. ② 바탕과 모양을 비슷한 색으로 고른다 → 진한 바탕에 밝은 모양. ③ 화면 조작이 서툴다 → 붙이기 뒤 끌어 옮기기, R 키나 돌리기 단추를 함께 연습한다. 활동지에 그린 안내판을 실제로 붙이면 다음 성찰 차시(17차시)에서 달라진 점을 견줄 수 있다.',
  }));

  lessons.push(L(15, {
    title: '도움이 필요한 친구에게 먼저 묻고 돕기',
    objective: '도움이 필요해 보이는 친구에게 먼저 묻고, 친구가 원하는 방법으로 도울 수 있다.',
    illustration: ART('a paper child with an arm cast carrying a lunch tray while a friend asks to help, in a bright school cafeteria', '도와줄까?', [
      { motif: 'house', x: 120, y: 214, color: 'peach' }, { motif: 'tree', x: 370, y: 214 }, { motif: 'flower', x: 250, y: 228, color: 'rose' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"내가 신발 끈을 묶고 있는데 친구가 말없이 확 묶어 주면 어떤 마음일까요?" 고맙다는 학생과 속상하다는 학생이 모두 있을 수 있다는 것을 듣는다. 시연 단추로 \'도와줄까?\' 하고 묻는 보기를 고르는 모습을 보여 준다. 도움은 내가 하고 싶은 방법이 아니라 친구가 원하는 방법으로 한다는 것을 짚는다.',
        student: '친구에게 도움을 받았을 때 고마웠던 일을 말해 봐요.',
        demo: { tool: 'emotion', options: { mode: 'branch', situation: '친구가 무거운 상자를 들고 있어요.', choices: [{ id: 'ask', text: '"도와줄까?" 하고 물어요', result: '친구가 한쪽을 들어 달라고 해요.', mood: '고마움' }, { id: 'grab', text: '말없이 확 빼앗아 들어요', result: '친구가 놀라 상자를 떨어뜨려요.', mood: '놀람' }] }, sequence: [{ choice: 'ask' }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 먼저 묻고 돕기', minutes: 14, tool: 'emotion',
            teacher: '"친구가 \'괜찮아, 혼자 할게\'라고 하면 어떻게 하나요?" 친구의 대답을 존중하고, 필요하면 부르라고 말하는 보기를 함께 찾는다. 억지로 돕는 것이 친절이라고 여기는 학생에게 결과 칸을 읽게 한다.',
            task: '도움이 필요해 보이는 친구에게 어떻게 할지 고르고 결과를 읽어요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '팔에 붕대를 한 준호가 식판을 들어요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '준호', situation: '팔에 붕대를 감은 준호가 한 손으로 식판을 들려고 해요.', choices: [
                { id: 'ask', text: '"식판 들어 줄까?" 하고 물어요', result: '준호가 고맙다며 자리를 알려 줘요.', mood: '고마움' },
                { id: 'look', text: '어떻게 하나 구경해요', result: '준호가 국을 쏟을 뻔해요.', mood: '걱정', why: '준호에게 도움이 필요해 보이지 않나요?' },
                { id: 'grab', text: '말없이 식판을 가져가요', result: '준호가 깜짝 놀라요.', mood: '놀람', why: '돕기 전에 무엇을 먼저 할까요?' }] }, target: { choice: 'ask' }, difficulty: 0.1 },
              { prompt: '서아에게 도와줄지 물었더니 "혼자 해 볼래"래요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '서아', situation: '서아가 단추를 잠그고 있어요. 도와줄까 물었더니 "혼자 해 볼래" 했어요.', choices: [
                { id: 'force', text: '그래도 내가 잠가 줘요', result: '서아가 속상해해요.', mood: '속상함', why: '서아가 원하는 것을 다시 떠올려 봐요.' },
                { id: 'wait', text: '"필요하면 불러" 하고 기다려요', result: '서아가 혼자 해내고 뿌듯해해요.', mood: '뿌듯함' },
                { id: 'laugh', text: '"그것도 못 해?" 하고 웃어요', result: '서아가 부끄러워해요.', mood: '부끄러움', why: '그 말을 들은 서아의 마음은 어떨까요?' }] }, target: { choice: 'wait' }, difficulty: 0.25,
                predict: { q: '친구가 혼자 하겠다고 하면 어떻게 할까요?', options: ['그래도 해 줘요', '기다려 줘요'], answer: 1 },
                conclude: '도움은 친구가 원할 때 원하는 방법으로 해요.' },
              { prompt: '목발을 짚은 친구가 문 앞에 서 있어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '목발을 짚은 친구가 무거운 교실 문 앞에 서 있어요.', choices: [
                { id: 'door', text: '"문 잡아 줄게" 하고 문을 잡아 줘요', result: '친구가 편하게 들어와요.', mood: '고마움' },
                { id: 'first', text: '내가 먼저 들어가요', result: '문이 닫혀 친구가 기다려요.', mood: '속상함', why: '친구가 문을 열기 어렵지 않을까요?' }] }, target: { choice: 'door' }, difficulty: 0.05 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 돕는 말 넣어 보기', minutes: 12, tool: 'story',
            teacher: '"돕는 말은 묻는 말, 알려 주는 말, 기다려 주는 말이 있어요." 세 말을 칠판에 적고 따라 읽는다. 명령하는 말("이리 줘")을 고르는 학생에게 같은 뜻을 묻는 말로 바꾸어 보게 한다.',
            task: '말풍선 빈칸에 친구를 돕는 말을 넣어요.',
            levels: CARD_LV,
            items: [
              { prompt: '친구를 돕는 말을 말풍선에 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['같이 들어 줄까', '이리 내놔'], slots: [{ id: 'b1', who: '하준', motif: 'leaf', label: '상자가 무거워 보여. ___?' }] },
                target: { fill: { b1: '같이 들어 줄까' } }, difficulty: 0.05 },
              { prompt: '두 친구의 말풍선에 알맞은 말을 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['천천히 가도 돼', '필요하면 불러', '빨리 좀 와'], slots: [{ id: 'b1', who: '민지', motif: 'flower', label: '목발 짚은 친구에게 "___."' }, { id: 'b2', who: '준호', motif: 'star', label: '혼자 하겠다는 친구에게 "___."' }] },
                target: { fill: { b1: '천천히 가도 돼', b2: '필요하면 불러' } }, difficulty: 0.15 },
              { prompt: '친구를 돕는 말만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '돕는 말', cards: ['"도와줄까?"', '"내가 문 잡을게"', '"느려서 답답해"', '"혼자 해!"'] },
                target: { pick: ['"도와줄까?"', '"내가 문 잡을게"'] }, difficulty: 0.05,
                levels: { challenge: { toolOptions: { cards: ['"도와줄까?"', '"내가 문 잡을게"', '"느려서 답답해"', '"혼자 해!"', '"내가 다 해 줄게, 비켜"'] } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 배운 돕는 말 가운데 내일 꼭 써 보고 싶은 말은 무엇인가요?" 짝과 돕는 말을 한 번씩 주고받는다. 출구 2번에서 \'말없이 해 준다\'를 고른 학생과는 도입의 신발 끈 이야기를 다시 떠올린다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'branch', situation: '전학 온 친구가 급식실 가는 길을 몰라 서성여요.', choices: [{ id: 'with', text: '"같이 갈래?" 하고 물어요', result: '친구가 웃으며 따라와요.', mood: '고마움' }, { id: 'alone', text: '혼자 찾아가라고 해요', result: '친구가 길을 잃고 늦어요.', mood: '외로움' }] }, prompt: '전학 온 친구에게 어떻게 할지 골라 보세요.', target: { choice: 'with' }, difficulty: 0.05 },
          { type: 'choice', prompt: '친구를 돕기 전에 먼저 할 일은 무엇인가요?', options: ['말없이 해 줘요', '도와줄지 물어봐요', '다른 친구를 불러 구경해요'], answer: 1, difficulty: 0.1, explain: '먼저 물어보면 친구가 원하는 방법으로 도울 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '먼저 묻고 도와요',
      items: [
        { type: 'figure', wide: true, prompt: '어떻게 할지 고른 보기에 ○ 하고, 그러면 어떻게 될지 쓰세요.', tool: 'emotion', figures: [{ options: { mode: 'branch', situation: '목발을 짚은 친구가 무거운 문 앞에 있어요.', choices: [{ id: 'door', text: '문을 잡아 줘요' }, { id: 'first', text: '먼저 들어가요' }] }, caption: '' }], answer: '1번(문을 잡아 줘요)' },
        { type: 'choice', prompt: '친구가 "혼자 해 볼래"라고 하면 할 말에 ○ 하세요.', options: ['"필요하면 불러"', '"내가 해 줄게"', '"그것도 못 해?"'], answer: '"필요하면 불러"' },
        { type: 'blank', prompt: '돕는 말을 완성하세요.', text: '상자가 무거워 보여. 같이 ___ 줄까?', answer: '들어' },
        { type: 'short', prompt: '내가 친구를 도왔던 일과 그때 한 말을 쓰세요.' },
      ],
      easy: {
        note: '돕기 전에 "도와줄까?" 하고 물어요.',
        items: [
          { type: 'choice', prompt: '돕는 말에 ○ 하세요.', options: ['"도와줄까?"', '"비켜!"'], answer: '"도와줄까?"' },
          { type: 'choice', prompt: '목발 짚은 친구에게 해 줄 일에 ○ 하세요.', options: ['문 잡아 주기', '먼저 들어가기'], answer: '문 잡아 주기' },
          { type: 'draw', prompt: '친구를 돕는 내 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '말풍선 카드를 맞게 놓으면 초록 테두리가 생겨요.',
      base: '보기 세 개 가운데 고르고, 말풍선을 모두 채운 뒤 확인을 눌러요.',
      challenge: '돕는 척하지만 친구 뜻을 무시하는 함정 말이 하나 더 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 묻지 않고 대신 해 주는 것을 친절로 여긴다 → 도입의 신발 끈 예로 상대의 마음을 떠올린다. ② 친구가 거절하면 서운해한다 → "혼자 해 보고 싶은 마음도 있어요"를 함께 말한다. ③ 장애가 있는 친구를 늘 도와야 하는 사람으로만 본다 → 그 친구도 나를 도울 수 있다는 것을 이야기한다.',
  }));

  lessons.push(L(16, {
    title: '지킬 수 있는 우리 반 약속 정하기',
    objective: '우리 반 약속을 까닭과 함께 고르고, 눈으로 보이고 지킬 수 있는 말로 정할 수 있다.',
    illustration: ART('a paper classroom promise board with star stickers and small handprints of children around three short rules', '우리 반 약속판', [
      { motif: 'star', x: 120, y: 90, s: 0.6 }, { motif: 'star', x: 360, y: 90, s: 0.6, color: 'rose' }, { motif: 'house', x: 240, y: 216, color: 'mint' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"\'착하게 지내요\'와 \'복도에서는 걸어요\' 가운데 어느 약속이 지켰는지 알기 쉬울까요?" 두 약속을 칠판에 나란히 쓴다. 시연 단추로 \'걸어요\' 약속이 \'부딪히지 않아요\' 까닭과 이어지는 모습을 보여 준다. 9~15차시에 해 본 일을 떠올리며 우리 반 약속을 정한다고 알린다.',
        student: '지금까지 지켜 본 약속 가운데 가장 잘 지킨 것을 말해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '왜 지킬까?', slots: [{ id: 's1', label: '복도에서는 걸어요' }], cards: ['부딪히지 않아요', '더 빨라요'], shuffle: false }, sequence: [{ match: { s1: '부딪히지 않아요' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 약속과 까닭 잇기', minutes: 12, tool: 'mindmap',
            teacher: '"이 약속을 지키면 누구에게 무엇이 좋아지나요?" 까닭이 있어야 약속을 지키고 싶어진다는 것을 말한다. \'선생님께 혼나지 않으려고\'를 까닭으로 고르는 학생에게 "선생님이 안 보실 때도 지켜야 할까요?"라고 묻는다.',
            task: '우리 반 약속과 그 약속을 지키는 까닭을 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '약속과 까닭을 이어 보세요.', toolOptions: { mode: 'match', topic: '왜 지킬까?', slots: [{ id: 's1', label: '가방은 고리에 걸어요' }, { id: 's2', label: '물을 꼭 잠가요' }], cards: ['통로가 넓어져요', '물을 아껴요'] },
                target: { match: { s1: '통로가 넓어져요', s2: '물을 아껴요' } }, difficulty: 0.05 },
              { prompt: '세 가지 약속과 까닭을 이어 보세요.', toolOptions: { mode: 'match', topic: '왜 지킬까?', slots: [{ id: 's1', label: '놀잇감은 제자리에' }, { id: 's2', label: '돕기 전에 먼저 물어요' }, { id: 's3', label: '계단은 한 칸씩' }], cards: ['다음 친구가 바로 찾아요', '친구가 원하는 대로 도와요', '넘어지지 않아요'] },
                target: { match: { s1: '다음 친구가 바로 찾아요', s2: '친구가 원하는 대로 도와요', s3: '넘어지지 않아요' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['다음 친구가 바로 찾아요', '친구가 원하는 대로 도와요', '넘어지지 않아요', '선생님께 혼나지 않아요'] } } } },
              { prompt: '약속을 지키는 까닭으로 알맞은 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '지키는 까닭', cards: ['모두가 편해요', '다치지 않아요', '선생님이 보실 때만 지켜요', '칭찬 스티커를 받으려고만 해요'] },
                target: { pick: ['모두가 편해요', '다치지 않아요'] }, difficulty: 0.2,
                conclude: '약속은 누가 볼 때만이 아니라 모두를 위해 지켜요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 지킬 수 있는 약속 고르기', minutes: 14, tool: 'mindmap',
            teacher: '"이 약속을 지켰는지 눈으로 볼 수 있나요?" \'바르게 생활해요\'처럼 넓은 말은 무엇을 하라는 것인지 모르겠다는 것을 함께 확인한다. 약속을 많이 정하려는 학생에게 "세 가지만 정해야 모두 기억해요"라고 말해 준다.',
            task: '눈으로 보이고 지킬 수 있는 약속만 골라 우리 반 약속판을 만들어요.',
            levels: CARD_LV,
            items: [
              { prompt: '지켰는지 눈으로 알 수 있는 약속만 골라 보세요.', toolOptions: { mode: 'pick', basket: '우리 반 약속판', cards: ['의자는 책상에 넣어요', '착하게 지내요', '휴지는 휴지통에', '바르게 생활해요'] },
                target: { pick: ['의자는 책상에 넣어요', '휴지는 휴지통에'] }, difficulty: 0.2,
                predict: { q: '"착하게 지내요"는 지켰는지 알기 쉬울까요?', options: ['쉬워요', '어려워요'], answer: 1 } },
              { prompt: '약속을 지킬 곳의 가지에 나누어 보세요.', toolOptions: { topic: '우리 반 약속', slots: ['교실', '복도', '화장실'], cards: ['의자는 책상에 넣어요', '오른쪽으로 걸어요', '물을 꼭 잠가요', '가방은 고리에'] },
                target: { sort: { '교실': ['의자는 책상에 넣어요', '가방은 고리에'], '복도': ['오른쪽으로 걸어요'], '화장실': ['물을 꼭 잠가요'] } }, difficulty: 0.1 },
              { prompt: '넓은 약속을 지킬 수 있는 약속으로 바꾼 것을 이어 보세요.', toolOptions: { mode: 'match', topic: '알기 쉽게 바꾸기', slots: [{ id: 's1', label: '깨끗하게 해요' }, { id: 's2', label: '안전하게 다녀요' }], cards: ['떨어진 것은 주워요', '계단에서 손잡이를 잡아요'] },
                target: { match: { s1: '떨어진 것은 주워요', s2: '계단에서 손잡이를 잡아요' } }, difficulty: 0.25 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"우리 반 약속 세 가지를 정하고 손도장을 찍어 볼까요?" 반 전체가 고른 세 약속을 약속판에 적고 손도장이나 이름 스티커를 붙인다. 이 약속판을 17차시부터 한 주 동안 지켜 보고 무엇이 달라졌는지 돌아본다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', basket: '지킬 수 있는 약속', cards: ['급식 줄에 차례대로 서요', '예쁘게 행동해요', '책은 책꽂이에 꽂아요'] }, prompt: '지켰는지 눈으로 알 수 있는 약속만 골라 보세요.', target: { pick: ['급식 줄에 차례대로 서요', '책은 책꽂이에 꽂아요'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '약속을 지키는 가장 알맞은 까닭은 무엇인가요?', options: ['혼나지 않으려고', '모두가 편하고 안전하려고', '선생님이 보실 때만'], answer: 1, difficulty: 0.1, explain: '약속은 우리 모두가 편하고 안전하게 지내려고 지켜요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '우리 반 약속',
      items: [
        { type: 'table', prompt: '우리 반 약속과 지키는 까닭을 쓰세요.', columns: ['약속', '까닭'], rows: 3 },
        { type: 'choice', prompt: '지켰는지 알기 쉬운 약속에 ○ 하세요.', options: ['의자는 책상에 넣어요', '착하게 지내요', '바르게 생활해요'], answer: '의자는 책상에 넣어요' },
        { type: 'blank', prompt: '넓은 약속을 알기 쉽게 바꾸어 쓰세요.', text: '"깨끗하게 해요" → "떨어진 ___는 주워요."', answer: '것(휴지)' },
        { type: 'draw', prompt: '우리 반 약속을 지키는 모습을 그려 보세요.' },
      ],
      easy: {
        note: '"눈으로 볼 수 있나요?"를 물어보면 좋은 약속을 찾을 수 있어요.',
        items: [
          { type: 'choice', prompt: '좋은 약속에 ○ 하세요.', options: ['휴지는 휴지통에', '착하게 지내요'], answer: '휴지는 휴지통에' },
          { type: 'choice', prompt: '약속을 지키는 까닭에 ○ 하세요.', options: ['모두가 편하려고', '혼나지 않으려고'], answer: '모두가 편하려고' },
          { type: 'draw', prompt: '내가 지킬 약속 하나를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '모두 놓은 뒤 확인을 눌러요.',
      challenge: '그럴듯하지만 알맞지 않은 까닭 카드가 섞여 있어요. 넓은 약속을 스스로 바꾸어 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① "착하게", "바르게"처럼 넓은 말로 약속을 정한다 → 눈으로 보이는 행동으로 바꾼다. ② 혼나지 않으려고 지킨다고 여긴다 → 약속의 까닭을 모두의 편함과 안전에서 찾는다. ③ 약속을 너무 많이 정한다 → 세 가지만 정해 한 주 동안 지켜 본다(17차시부터 돌아보기).',
  }));

  // ───────────────────────── 17~24차시: 달라진 것 돌아보기·습관(성찰과 습관화) ─────────────────────────

  lessons.push(L(17, {
    title: '고치기 전과 뒤를 견주어 달라진 점 찾기',
    objective: '우리가 고친 곳을 고치기 전과 뒤로 견주어 무엇이 달라졌는지 말할 수 있다.',
    illustration: ART('a split paper scene of the same hallway: on the left messy bags on the floor, on the right bags neatly on hooks and a wide clear path', '무엇이 달라졌을까요?', [
      { motif: 'house', x: 120, y: 214, color: 'peach' }, { motif: 'house', x: 360, y: 214, color: 'mint' }, { motif: 'star', x: 360, y: 90, s: 0.6 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"16차시에 정한 우리 반 약속을 한 주 동안 지켜 보았어요. 교실이 달라졌나요?" 정리하기 전 교실 사진(또는 칠판 그림)과 지금 교실을 나란히 보게 한다. 시연 단추로 \'전 → 한 일 → 뒤\' 차례 카드를 보여 준다. 달라진 것을 \'좋아졌어요\'로만 말하지 않고 무엇이 어떻게 바뀌었는지 말하게 한다.',
        student: '지난주와 지금 우리 교실에서 달라진 곳을 하나 찾아 말해 봐요.',
        demo: { tool: 'story', options: { cards: [{ id: 'before', text: '가방이 통로에 있어요', motif: 'cloud' }, { id: 'do', text: '가방을 고리에 걸어요', motif: 'leaf' }, { id: 'after', text: '통로가 넓어졌어요', motif: 'sun' }], slots: ['고치기 전', '한 일', '고친 뒤'], shuffle: false }, sequence: [{ order: ['before', 'do', 'after'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 전 · 한 일 · 뒤 차례로 놓기', minutes: 13, tool: 'story',
            teacher: '"고치기 전에는 어땠고, 우리는 무엇을 했고, 그 뒤에 어떻게 되었나요?" 세 칸을 손가락으로 짚으며 소리 내어 이야기하게 한다. \'한 일\'과 \'고친 뒤\'를 바꾸는 학생에게 "먼저 해야 바뀌겠지요?"라고 묻는다.',
            task: '고치기 전, 우리가 한 일, 고친 뒤 장면을 차례대로 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '수돗가 이야기를 차례대로 놓아 보세요.', toolOptions: { slots: ['고치기 전', '한 일', '고친 뒤'], cards: [{ id: 'before', text: '수돗가 바닥이 젖었어요', motif: 'cloud' }, { id: 'do', text: '물을 잠그고 닦았어요', motif: 'leaf' }, { id: 'after', text: '아무도 미끄러지지 않아요', motif: 'sun' }] },
                target: { order: ['before', 'do', 'after'] }, difficulty: 0.05 },
              { prompt: '놀이 상자 이야기를 차례대로 놓아 보세요.', toolOptions: { slots: ['고치기 전', '한 일', '고친 뒤'], cards: [{ id: 'before', text: '블록 조각이 자꾸 없어져요', motif: 'cloud' }, { id: 'do', text: '조각을 세어 상자에 넣어요', motif: 'star' }, { id: 'after', text: '끝까지 블록을 쌓아요', motif: 'house' }] },
                target: { order: ['before', 'do', 'after'] }, difficulty: 0.1,
                levels: { challenge: { prompt: '놀이 상자 이야기를 네 칸에 차례대로 놓아 보세요.', target: { order: ['before', 'do', 'with', 'after'] }, toolOptions: { slots: ['고치기 전', '한 일', '함께 한 일', '고친 뒤'], cards: [{ id: 'before', text: '블록 조각이 자꾸 없어져요', motif: 'cloud' }, { id: 'do', text: '조각을 세어 상자에 넣어요', motif: 'star' }, { id: 'with', text: '상자에 조각 수를 적어요', motif: 'leaf' }, { id: 'after', text: '끝까지 블록을 쌓아요', motif: 'house' }] } } } },
              { prompt: '안내판 이야기를 차례대로 놓아 보세요.', toolOptions: { slots: ['고치기 전', '한 일', '고친 뒤'], cards: [{ id: 'before', text: '동생이 화장실을 못 찾아요', motif: 'cloud' }, { id: 'do', text: '그림 안내판을 붙여요', motif: 'flower' }, { id: 'after', text: '동생이 혼자 찾아가요', motif: 'sun' }] },
                target: { order: ['before', 'do', 'after'] }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 달라진 점과 마음 견주기', minutes: 13, tool: 'mindmap',
            teacher: '"고친 뒤 누가 편해졌나요?" 달라진 점을 고치기 전·고친 뒤로 나누고, 누가 편해졌는지 이름 대신 \'키가 작은 친구\'처럼 말하게 한다. 고친 뒤에도 남은 불편함이 있는지 묻고, "한 번 고쳤다고 끝이 아니에요"라고 다음 시간을 예고한다.',
            task: '모습 카드를 고치기 전과 고친 뒤로 나누고, 달라진 마음을 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '복도 모습 카드를 고치기 전과 고친 뒤로 나누어 보세요.', toolOptions: { topic: '우리 복도', slots: ['고치기 전', '고친 뒤'], cards: ['가방에 걸려 넘어져요', '휠체어가 지나가요', '친구와 자꾸 부딪혀요', '오른쪽으로 줄지어 걸어요'] },
                target: { sort: { '고치기 전': ['가방에 걸려 넘어져요', '친구와 자꾸 부딪혀요'], '고친 뒤': ['휠체어가 지나가요', '오른쪽으로 줄지어 걸어요'] } }, difficulty: 0.1 },
              { prompt: '고치기 전과 뒤의 마음을 이어 보세요.', toolOptions: { mode: 'match', topic: '달라진 마음', cards: ['걱정', '편안함', '뿌듯함'], slots: [{ id: 's1', label: '고치기 전: 계단이 어두워 무서웠어요' }, { id: 's2', label: '고친 뒤: 전등이 밝아 편하게 다녀요' }, { id: 's3', label: '우리가 알려서 고쳐졌어요' }] },
                target: { match: { s1: '걱정', s2: '편안함', s3: '뿌듯함' } }, difficulty: 0.15 },
              { prompt: '고친 뒤에도 더 살펴볼 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '더 살펴볼 것', cards: ['비 오는 날 현관은 어떨까', '새로 온 친구도 편할까', '이제 다 끝났어요', '살펴볼 것은 없어요'] },
                target: { pick: ['비 오는 날 현관은 어떨까', '새로 온 친구도 편할까'] }, difficulty: 0.2,
                predict: { q: '한 번 고치면 더 살펴볼 것이 없을까요?', options: ['없어요', '더 있어요'], answer: 1 },
                conclude: '날씨가 바뀌거나 새 친구가 오면 다시 살펴봐야 해요.' },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"우리가 고친 곳 가운데 가장 많이 달라진 곳은 어디예요? 무엇이 달라졌나요?" 대답을 \'전에는 ~했는데, 지금은 ~해요\' 틀로 말하게 한다. 출구 1번에서 차례를 틀린 학생은 \'한 일\' 카드를 먼저 찾게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { slots: ['고치기 전', '한 일', '고친 뒤'], cards: [{ id: 'before', text: '급식 줄이 엉켜요', motif: 'cloud' }, { id: 'do', text: '바닥에 발자국을 붙여요', motif: 'star' }, { id: 'after', text: '줄이 반듯해요', motif: 'sun' }] }, prompt: '급식 줄 이야기를 차례대로 놓아 보세요.', target: { order: ['before', 'do', 'after'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '"전에는 ~했는데, 지금은 ~해요."에 알맞은 말은 무엇인가요?', options: ['전에는 넘어졌는데, 지금은 안 넘어져요', '전에도 지금도 똑같아요', '잘 모르겠어요'], answer: 0, difficulty: 0.1, explain: '고친 뒤 달라진 점을 전과 견주어 말해요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '고치기 전과 뒤',
      items: [
        { type: 'table', prompt: '고친 곳을 하나 골라 쓰세요.', columns: ['고치기 전', '우리가 한 일', '고친 뒤'], rows: 2 },
        { type: 'blank', prompt: '달라진 점을 쓰세요.', text: '전에는 ________________, 지금은 ________________.' },
        { type: 'choice', prompt: '고친 뒤에 할 일에 ○ 하세요.', options: ['다시 살펴봐요', '이제 신경 쓰지 않아요'], answer: '다시 살펴봐요' },
        { type: 'draw', prompt: '고치기 전과 고친 뒤를 나란히 그려 보세요.' },
      ],
      easy: {
        note: '"전에는?" "지금은?" 두 번 물어보며 견주어요.',
        items: [
          { type: 'choice', prompt: '고친 뒤 모습에 ○ 하세요.', options: ['통로가 넓어요', '가방에 걸려요'], answer: '통로가 넓어요' },
          { type: 'choice', prompt: '고친 뒤 마음에 ○ 하세요.', options: ['편안해요', '무서워요'], answer: '편안해요' },
          { type: 'draw', prompt: '고친 뒤 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '세 칸을 모두 놓은 뒤 확인을 눌러요.',
      challenge: '놀이 상자 이야기가 네 칸이고, 고친 뒤에도 살펴볼 것을 스스로 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 달라진 점을 "좋아졌어요"로만 말한다 → "전에는 ~, 지금은 ~" 틀을 쓴다. ② 한 일과 결과를 바꾼다 → "먼저 한 일이 무엇이었지?"로 차례를 세운다. ③ 한 번 고치면 끝이라고 여긴다 → 날씨·새 친구처럼 바뀌는 것을 떠올려 다시 살펴보게 한다. 정리 전 교실 사진을 찍어 두었다면 이 시간에 함께 보면 좋다.',
  }));

  lessons.push(L(18, {
    title: '한 주 약속 기록을 보고 나를 돌아보기',
    objective: '한 주 동안의 약속 기록을 읽고 지킨 날과 못 지킨 날을 나누어, 나의 약속 지키기를 돌아볼 수 있다.',
    illustration: ART('a paper weekly promise chart from Monday to Friday with sun stickers on kept days and small clouds on missed days', '이번 주 나는 어땠나요?', [
      { motif: 'sun', x: 140, y: 110, s: 0.5 }, { motif: 'cloud', x: 240, y: 110, s: 0.5 }, { motif: 'sun', x: 340, y: 110, s: 0.5 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"한 주 동안 약속판의 약속을 며칠이나 지켰는지 기억나나요?" 기억만으로는 정확하지 않다는 것을 말하고, 날마다 붙인 해·구름 스티커 기록을 함께 본다. 시연 단추로 민지의 월요일 기록이 \'지켰어요\' 가지로 가는 모습을 보여 준다. 못 지킨 날이 있어도 괜찮고, 돌아보는 것이 중요하다는 것을 짚는다.',
        student: '이번 주에 가장 잘 지킨 약속과 어려웠던 약속을 하나씩 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '민지의 한 주', slots: ['지켰어요', '못 지켰어요'], cards: ['월: 가방을 고리에 걸었어요', '화: 가방을 바닥에 뒀어요'], shuffle: false }, sequence: [{ sort: { '지켰어요': ['월: 가방을 고리에 걸었어요'], '못 지켰어요': ['화: 가방을 바닥에 뒀어요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 한 주 기록 나누어 보기', minutes: 13, tool: 'mindmap',
            teacher: '"이 날은 약속을 지켰나요?" 기록 카드를 하나씩 읽고 나눈다. 다 나눈 뒤 "어느 쪽이 더 많아요?"를 세어 보게 한다. 못 지킨 날을 \'나쁜 날\'로 말하는 학생에게 "다음에 다시 하면 돼요"라고 말해 준다.',
            task: '친구들의 한 주 약속 기록 카드를 지킨 날과 못 지킨 날로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '민지의 한 주 기록을 나누어 보세요.', toolOptions: { topic: '민지의 한 주', slots: ['지켰어요', '못 지켰어요'], cards: ['수: 가방을 고리에 걸었어요', '목: 가방을 의자에 걸쳐 뒀어요', '금: 가방을 고리에 걸었어요', '월: 친구 가방도 걸어 줬어요'] },
                target: { sort: { '지켰어요': ['수: 가방을 고리에 걸었어요', '금: 가방을 고리에 걸었어요', '월: 친구 가방도 걸어 줬어요'], '못 지켰어요': ['목: 가방을 의자에 걸쳐 뒀어요'] } }, difficulty: 0.1 },
              { prompt: '준호의 물 잠그기 기록을 나누어 보세요.', toolOptions: { topic: '준호의 한 주', slots: ['지켰어요', '못 지켰어요'], cards: ['월: 문지를 때 물을 잠갔어요', '화: 물을 튼 채 나왔어요', '수: 물을 꼭 잠갔어요', '목: 급해서 물을 안 잠갔어요'] },
                target: { sort: { '지켰어요': ['월: 문지를 때 물을 잠갔어요', '수: 물을 꼭 잠갔어요'], '못 지켰어요': ['화: 물을 튼 채 나왔어요', '목: 급해서 물을 안 잠갔어요'] } }, difficulty: 0.15 },
              { prompt: '준호가 약속을 못 지킨 까닭만 골라 보세요.', toolOptions: { mode: 'pick', basket: '못 지킨 까닭', cards: ['쉬는 시간이 짧아 급했어요', '물 잠그기를 깜빡했어요', '물을 꼭 잠갔어요'] },
                target: { pick: ['쉬는 시간이 짧아 급했어요', '물 잠그기를 깜빡했어요'] }, difficulty: 0.1,
                conclude: '못 지킨 까닭을 알면 다음에 지킬 방법을 찾을 수 있어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 내 마음 돌아보기', minutes: 13, tool: 'emotion',
            teacher: '"다섯 날 가운데 네 날을 지켰다면 마음이 어떨까요?" 마음 크기를 고른 뒤 까닭을 말하게 한다. 한 번 못 지킨 것 때문에 아주 속상하다는 학생에게 "지킨 날이 더 많아요"라고 기록을 함께 센다.',
            task: '약속 기록을 읽고 마음의 크기를 고르고, 다음 주에 할 일을 골라요.',
            levels: { easy: { steps: 3 }, base: {}, challenge: {} },
            items: [
              { prompt: '다섯 날 가운데 네 날 약속을 지켰어요. 뿌듯한 마음의 크기를 골라 보세요.', toolOptions: { mode: 'scale', situation: '이번 주 다섯 날 가운데 네 날 약속을 지켰어요.', feeling: '뿌듯함', after: '잘 지킨 나를 칭찬해 줘요.' }, target: { level: [3, 5] }, difficulty: 0.1,
                levels: { easy: { prompt: '다섯 날 가운데 네 날 지켰어요. 뿌듯한 마음을 세 칸에서 골라 보세요.', target: { level: [2, 3] } } } },
              { prompt: '한 주 내내 한 번도 못 지켰어요. 다음 주에는 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '이번 주에는 의자 넣기 약속을 한 번도 못 지켰어요.', choices: [
                { id: 'quit', text: '나는 원래 못 해요 하고 그만둬요', result: '다음 주에도 의자가 통로를 막아요.', mood: '속상함', why: '방법을 바꾸면 다시 할 수 있어요.' },
                { id: 'plan', text: '책상에 "의자" 쪽지를 붙여요', result: '쪽지를 보고 의자를 넣게 돼요.', mood: '뿌듯함' },
                { id: 'hide', text: '기록을 지켰다고 고쳐 써요', result: '내가 나아졌는지 알 수 없어요.', mood: '걱정', why: '기록은 있는 그대로 써야 도움이 돼요.' }] }, target: { choice: 'plan' }, difficulty: 0.2 },
              { prompt: '약속 기록을 쓰는 바른 방법만 골라 보세요.', toolOptions: { mode: 'pick', basket: '바른 기록', cards: ['한 일을 있는 그대로 써요', '날마다 같은 때에 써요', '못 지킨 날은 지켰다고 써요'] },
                target: { pick: ['한 일을 있는 그대로 써요', '날마다 같은 때에 써요'] }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"다음 주에 더 잘 지키고 싶은 약속 하나와 그 방법을 말해 볼까요?" 짝과 서로의 방법을 듣고 좋은 생각을 칭찬하게 한다. 출구 2번에서 \'고쳐 쓴다\'를 고른 학생과는 기록을 있는 그대로 쓰는 까닭을 다시 이야기한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '서아의 한 주', slots: ['지켰어요', '못 지켰어요'], cards: ['월: 휴지를 휴지통에 넣었어요', '화: 휴지를 책상에 두고 갔어요', '수: 바닥 휴지도 주웠어요'] }, prompt: '서아의 한 주 기록을 나누어 보세요.', target: { sort: { '지켰어요': ['월: 휴지를 휴지통에 넣었어요', '수: 바닥 휴지도 주웠어요'], '못 지켰어요': ['화: 휴지를 책상에 두고 갔어요'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '약속을 못 지킨 날 기록은 어떻게 쓰나요?', options: ['지켰다고 고쳐 써요', '있는 그대로 써요', '쓰지 않아요'], answer: 1, difficulty: 0.1, explain: '있는 그대로 써야 다음에 무엇을 고칠지 알 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '나의 한 주 약속 기록',
      items: [
        { type: 'table', prompt: '한 주 동안 약속을 지킨 날에 ○, 못 지킨 날에 △ 하세요.', columns: ['약속', '월', '화', '수', '목', '금'], rows: 2 },
        { type: 'choice', prompt: '약속 기록을 바르게 쓰는 방법에 ○ 하세요.', options: ['있는 그대로 써요', '지켰다고만 써요'], answer: '있는 그대로 써요' },
        { type: 'blank', prompt: '빈칸을 채우세요.', text: '나는 이번 주에 ___ 약속을 가장 잘 지켰어요.' },
        { type: 'short', prompt: '다음 주에 더 잘 지키고 싶은 약속과 그 방법을 쓰세요.' },
      ],
      easy: {
        note: '날마다 해 스티커가 몇 개인지 세어 봐요.',
        items: [
          { type: 'table', prompt: '지킨 날에 ○ 하세요.', columns: ['약속', '월', '화', '수', '목', '금'], cells: [['가방 걸기', '', '', '', '', '']] },
          { type: 'choice', prompt: '못 지킨 날 할 일에 ○ 하세요.', options: ['다음에 다시 해요', '그만둬요'], answer: '다음에 다시 해요' },
          { type: 'draw', prompt: '약속을 지킨 나를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 가지에 초록 테두리가 생기고, 마음 크기는 세 칸이에요.',
      base: '모두 나눈 뒤 확인을 눌러요. 마음 크기는 다섯 칸이에요.',
      challenge: '못 지킨 까닭을 찾아 다음 주 계획을 스스로 세워 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 기억에만 기대어 "다 지켰어요"라고 한다 → 날마다 같은 때(하교 전)에 해·구름 스티커로 기록한다. ② 못 지킨 날을 숨기거나 고쳐 쓴다 → 있는 그대로 써야 나아질 방법을 찾는다고 말한다. ③ 한 번 못 지키면 "나는 못 해"로 끝낸다 → 쪽지·짝 알림처럼 방법을 바꾸어 다시 해 본다.',
  }));

  lessons.push(L(19, {
    title: '약속을 못 지켰을 때 다시 해 보기',
    objective: '약속을 지키지 못했을 때 솔직하게 말하고 사과한 뒤 다시 하는 차례를 알고 실천할 수 있다.',
    illustration: ART('a paper child picking up a fallen jump rope again and hanging it on the hook while a friend smiles, soft rainbow behind', '괜찮아, 다시 해 보자', [
      { motif: 'house', x: 120, y: 214, color: 'lavender' }, { motif: 'tree', x: 370, y: 214 }, { motif: 'cloud', x: 300, y: 80, s: 0.6 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"선생님도 어제 약속을 깜빡했어요. 컵을 씻지 않고 두었거든요. 그럼 선생님은 어떻게 하면 될까요?" 교사의 실수를 먼저 말하며 못 지킨 것을 말해도 괜찮은 분위기를 만든다. 시연 단추로 \'미안함 → 다시 함 → 뿌듯함\' 마음 차례를 보여 준다.',
        student: '약속을 깜빡했던 일이 있으면 짝에게 살짝 말해 봐요.',
        demo: { tool: 'emotion', options: { mode: 'order', cards: [{ id: '미안', text: '깜빡해서 미안해요' }, { id: '다시', text: '바로 다시 해요' }, { id: '뿌듯', text: '해내서 뿌듯해요' }], shuffle: false }, sequence: [{ order: ['미안', '다시', '뿌듯'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 못 지켰을 때 어떻게 할까', minutes: 14, tool: 'emotion',
            teacher: '"핑계를 대면 무엇이 달라지나요? 다시 하면 무엇이 달라지나요?" 결과 칸을 견주게 한다. 남 탓하는 보기를 고르는 학생에게 "내가 할 수 있는 일은 무엇일까요?"를 묻는다.',
            task: '약속을 못 지킨 상황에서 어떻게 할지 고르고 결과를 읽어요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '줄넘기를 운동장에 두고 왔어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '체육 시간이 끝났는데 줄넘기를 운동장에 두고 교실에 왔어요.', choices: [
                { id: 'blame', text: '"준호가 안 챙겼어요" 하고 말해요', result: '준호가 억울해하고 줄넘기는 그대로예요.', mood: '속상함', why: '내가 두고 온 줄넘기예요.' },
                { id: 'back', text: '선생님께 말하고 가져와 걸어요', result: '줄넘기가 제자리에 돌아와요.', mood: '뿌듯함' },
                { id: 'quiet', text: '모른 척해요', result: '다음 날 줄넘기가 젖어 있어요.', mood: '걱정', why: '그대로 두면 줄넘기는 어떻게 될까요?' }] }, target: { choice: 'back' }, difficulty: 0.1 },
              { prompt: '복도에서 뛰다가 친구와 부딪혔어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '급해서 복도에서 뛰다가 친구와 부딪혔어요. 친구가 팔을 문질러요.', choices: [
                { id: 'sorry', text: '"미안해, 괜찮아?" 하고 묻고 걸어가요', result: '친구가 괜찮다고 해요. 다음엔 걸어요.', mood: '편안함' },
                { id: 'run', text: '그냥 계속 뛰어가요', result: '친구가 더 속상해해요.', mood: '속상함', why: '부딪힌 친구는 어떤 마음일까요?' }] }, target: { choice: 'sorry' }, difficulty: 0.05,
                levels: { challenge: { toolOptions: { choices: [
                  { id: 'sorry', text: '"미안해, 괜찮아?" 하고 묻고 걸어가요', result: '친구가 괜찮다고 해요. 다음엔 걸어요.', mood: '편안함' },
                  { id: 'run', text: '그냥 계속 뛰어가요', result: '친구가 더 속상해해요.', mood: '속상함', why: '부딪힌 친구는 어떤 마음일까요?' },
                  { id: 'your', text: '"네가 앞에 있어서 그래" 해요', result: '둘이 다투게 돼요.', mood: '화남', why: '뛴 것은 누구였나요?' }] } } } },
              { prompt: '물을 잠그지 않은 것을 알았을 때의 마음 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: '알아', text: '물이 흐르는 걸 알았어요' }, { id: '미안', text: '미안한 마음이 들어요' }, { id: '잠가', text: '달려가 물을 잠가요' }, { id: '뿌듯', text: '다시 해내서 뿌듯해요' }] },
                target: { order: ['알아', '미안', '잠가', '뿌듯'] }, difficulty: 0.15,
                conclude: '못 지킨 것을 알아차리고 바로 다시 하면 마음도 가벼워져요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 사과하고 다시 하는 말', minutes: 12, tool: 'story',
            teacher: '"사과할 때는 무엇을 잘못했는지 말하고, 다음에 어떻게 할지 말해요." 사과의 세 부분(잘못한 일, 미안해, 다음엔)을 손가락 세 개로 세며 말한다. "미안" 한마디로 끝내는 학생에게 나머지 두 부분을 더 말하게 한다.',
            task: '말풍선 빈칸에 사과하고 다시 하겠다는 말을 넣어요.',
            levels: CARD_LV,
            items: [
              { prompt: '사과하는 말을 말풍선에 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['미안해', '어쩌라고'], slots: [{ id: 'b1', who: '하준', motif: 'leaf', label: '블록 조각을 잃어버렸어. ___.' }] },
                target: { fill: { b1: '미안해' } }, difficulty: 0.05 },
              { prompt: '사과의 세 부분을 차례대로 놓아 보세요.', toolOptions: { slots: ['무엇을', '마음', '다음엔'], cards: [{ id: 'what', text: '"의자를 안 넣었어"', motif: 'house' }, { id: 'sorry', text: '"미안해"', motif: 'cloud' }, { id: 'next', text: '"내일은 꼭 넣을게"', motif: 'sun' }] },
                target: { order: ['what', 'sorry', 'next'] }, difficulty: 0.15 },
              { prompt: '다시 하겠다는 약속의 말만 골라 보세요.', toolOptions: { mode: 'pick', basket: '다시 하는 말', cards: ['"다음엔 꼭 잠글게"', '"지금 가서 걸어 둘게"', '"원래 못 하는 거야"', '"다른 애도 안 했어"'] },
                target: { pick: ['"다음엔 꼭 잠글게"', '"지금 가서 걸어 둘게"'] }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"약속을 못 지킨 친구에게 우리는 뭐라고 말해 줄까요?" "괜찮아, 다시 해 보자"를 함께 말한다. 못 지킨 친구를 놀리지 않는 것도 약속이라고 덧붙인다. 출구 1번을 틀린 학생은 결과 칸을 소리 내어 다시 읽게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'branch', situation: '그림책을 보고 책꽂이에 꽂지 않고 책상에 두었어요.', choices: [{ id: 'put', text: '알아차리고 바로 꽂아요', result: '다음 친구가 책을 찾아 읽어요.', mood: '뿌듯함' }, { id: 'later', text: '누군가 꽂겠지 하고 둬요', result: '책이 떨어져 찢어져요.', mood: '속상함' }] }, prompt: '책을 꽂지 않은 것을 알았을 때 어떻게 할지 골라 보세요.', target: { choice: 'put' }, difficulty: 0.05 },
          { type: 'choice', prompt: '약속을 못 지킨 친구에게 알맞은 말은 무엇인가요?', options: ['"넌 맨날 그래"', '"괜찮아, 다시 해 보자"', '"선생님께 이를 거야"'], answer: 1, difficulty: 0.05, explain: '다시 할 수 있게 응원하는 말이 친구를 도와요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '다시 해 보자',
      items: [
        { type: 'figure', wide: true, prompt: '마음이 바뀐 차례대로 1, 2, 3을 쓰세요.', tool: 'emotion', figures: [{ options: { mode: 'order', cards: [{ id: '뿌듯', text: '해내서 뿌듯해요' }, { id: '미안', text: '깜빡해서 미안해요' }, { id: '다시', text: '바로 다시 해요' }], shuffle: false }, caption: '' }], answer: '미안해요 1, 다시 해요 2, 뿌듯해요 3' },
        { type: 'blank', prompt: '사과하는 말을 완성하세요.', text: '"___을(를) 안 했어. 미안해. 다음엔 꼭 ___."' },
        { type: 'choice', prompt: '약속을 못 지켰을 때 알맞은 행동에 ○ 하세요.', options: ['남 탓을 해요', '바로 다시 해요', '모른 척해요'], answer: '바로 다시 해요' },
        { type: 'short', prompt: '약속을 못 지켰다가 다시 해낸 일을 쓰세요.' },
      ],
      easy: {
        note: '사과는 "무엇을 + 미안해 + 다음엔" 세 부분이에요.',
        items: [
          { type: 'choice', prompt: '사과하는 말에 ○ 하세요.', options: ['"미안해"', '"어쩌라고"'], answer: '"미안해"' },
          { type: 'choice', prompt: '친구에게 할 말에 ○ 하세요.', options: ['"다시 해 보자"', '"넌 맨날 그래"'], answer: '"다시 해 보자"' },
          { type: 'draw', prompt: '다시 해내는 내 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '말풍선 카드를 맞게 놓으면 초록 테두리가 생겨요.',
      base: '모든 칸을 채운 뒤 확인을 눌러요.',
      challenge: '남 탓하는 그럴듯한 보기가 하나 더 있어요. 사과 세 부분을 모두 넣어 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 못 지킨 것을 숨기거나 남 탓을 한다 → 교사가 먼저 자기 실수를 말해 괜찮은 분위기를 만든다. ② "미안" 한마디로 끝낸다 → 무엇을·미안해·다음엔 세 부분을 손가락으로 센다. ③ 못 지킨 친구를 놀린다 → "괜찮아, 다시 해 보자"를 반 전체의 말로 정한다.',
  }));

  lessons.push(L(20, {
    title: '더 고칠 곳을 선생님께 알리는 말 만들기',
    objective: '더 고치고 싶은 곳을 하나 골라 어디에, 무엇이, 누구에게 불편한지 넣어 선생님께 알릴 수 있다.',
    illustration: ART('a paper child raising a hand and talking to a teacher at the desk during break time, pointing at a wobbly chair', '선생님, 알려 드릴게요', [
      { motif: 'house', x: 120, y: 214, color: 'buttercup' }, { motif: 'tree', x: 370, y: 214 }, { motif: 'bird', x: 300, y: 90 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"\'선생님, 저기 이상해요!\'라고만 하면 선생님이 무엇을 고칠지 알 수 있을까요?" 학생 한 명이 일부러 그렇게 말하게 하고, 교사가 "어디요? 무엇이요?"라고 되묻는 장면을 보여 준다. 시연 단추로 알리는 말의 차례 카드를 보여 준다. 알릴 때는 \'어디에, 무엇이, 누구에게\' 세 가지를 넣는다고 정한다.',
        student: '선생님께 무언가를 알렸던 일이 있으면 말해 봐요.',
        demo: { tool: 'story', options: { cards: [{ id: '어디', text: '"뒷문 옆에"', motif: 'house' }, { id: '무엇', text: '"의자가 흔들려요"', motif: 'cloud' }, { id: '누구', text: '"앉으면 넘어질 수 있어요"', motif: 'star' }], slots: ['어디에', '무엇이', '누구에게 어떻게'], shuffle: false }, sequence: [{ order: ['어디', '무엇', '누구'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 알리는 말 차례 세우기', minutes: 13, tool: 'story',
            teacher: '"어디에, 무엇이, 누구에게 어떻게 — 세 칸을 채우면 선생님이 바로 알 수 있어요." 카드를 놓은 뒤 세 칸을 이어 한 번에 소리 내어 말하게 한다. 한 칸이 빠진 말을 들려주고 무엇이 빠졌는지 찾게 한다.',
            task: '알리는 말 카드를 어디에, 무엇이, 누구에게 어떻게 차례로 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '알리는 말 카드를 차례대로 놓아 보세요.', toolOptions: { slots: ['어디에', '무엇이', '누구에게 어떻게'], cards: [{ id: '어디', text: '"2층 계단에"', motif: 'house' }, { id: '무엇', text: '"전등이 꺼졌어요"', motif: 'moon' }, { id: '누구', text: '"동생들이 넘어질 수 있어요"', motif: 'star' }] },
                target: { order: ['어디', '무엇', '누구'] }, difficulty: 0.1 },
              { prompt: '운동장 이야기로 알리는 말 카드를 차례대로 놓아 보세요.', toolOptions: { slots: ['어디에', '무엇이', '누구에게 어떻게'], cards: [{ id: '어디', text: '"그네 아래에"', motif: 'tree' }, { id: '무엇', text: '"물웅덩이가 생겼어요"', motif: 'cloud' }, { id: '누구', text: '"그네 타는 친구가 미끄러져요"', motif: 'leaf' }] },
                target: { order: ['어디', '무엇', '누구'] }, difficulty: 0.15 },
              { prompt: '빈 곳을 채워 알리는 말을 완성해 보세요.', toolOptions: { mode: 'fill', cards: ['급식실 문에', '손잡이가 빠졌어요', '그냥 그래요'], slots: [{ id: 'b1', who: '서아', motif: 'flower', label: '선생님, ___.' }, { id: 'b2', who: '서아', motif: 'flower', label: '문을 열 수 없게 ___.' }] },
                target: { fill: { b1: '급식실 문에', b2: '손잡이가 빠졌어요' } }, difficulty: 0.2,
                conclude: '어디에, 무엇이 불편한지 말하면 선생님이 바로 알 수 있어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 언제, 어떻게 알릴까', minutes: 13, tool: 'emotion',
            teacher: '"수업 중에 갑자기 소리쳐 알리는 것과 쉬는 시간에 가서 말하는 것은 어떻게 다를까요?" 위험한 일은 바로, 불편한 일은 쉬는 시간에 알린다는 기준을 세운다. 8차시의 \'먼저 알릴 곳\'을 떠올리게 한다.',
            task: '알리는 때와 방법을 고르고, 더 고치고 싶은 곳을 골라요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '수업 중에 창밖 화단 안내판이 쓰러진 것이 보여요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '국어 시간, 창밖 화단의 안내판이 쓰러진 것이 보여요. 다칠 일은 아니에요.', choices: [
                { id: 'shout', text: '"선생님, 저기요!" 하고 소리쳐요', result: '수업이 멈추고 모두 창밖만 봐요.', mood: '놀람', why: '다칠 일이 아니라면 언제 알리면 될까요?' },
                { id: 'break', text: '쉬는 시간에 선생님께 가서 말해요', result: '선생님이 수업 뒤에 고쳐 주세요.', mood: '편안함' },
                { id: 'forget', text: '그냥 잊어버려요', result: '안내판이 계속 쓰러져 있어요.', mood: '걱정', why: '알리지 않으면 아무도 모를 수 있어요.' }] }, target: { choice: 'break' }, difficulty: 0.2 },
              { prompt: '쉬는 시간에 계단 손잡이가 빠진 것을 보았어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '쉬는 시간, 계단 손잡이 한쪽이 빠져 덜렁거려요. 친구들이 붙잡고 내려가요.', choices: [
                { id: 'now', text: '바로 선생님께 달려가 알려요', result: '선생님이 계단을 막고 고쳐 주세요.', mood: '편안함' },
                { id: 'tomorrow', text: '내일 알려요', result: '그사이 친구가 넘어질 수 있어요.', mood: '걱정', why: '다칠 수 있는 곳은 언제 알려야 할까요?' }] }, target: { choice: 'now' }, difficulty: 0.1 },
              { prompt: '더 고치고 싶은 곳 가운데 선생님께 알릴 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '선생님께 알려요', cards: ['흔들리는 책상 다리', '빠진 계단 손잡이', '내 연필이 짧아요', '친구 그림이 마음에 안 들어요'] },
                target: { pick: ['흔들리는 책상 다리', '빠진 계단 손잡이'] }, difficulty: 0.15 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"지금 우리 교실이나 학교에서 더 고치고 싶은 곳 하나를 골라, 세 칸 말로 선생님께 알려 볼까요?" 몇 명이 실제로 알리고, 선생님은 들은 것을 \'알림 쪽지\'에 적어 게시한다. 정말로 고칠 수 있는 곳은 학교에 전하겠다고 약속한다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { slots: ['어디에', '무엇이', '누구에게 어떻게'], cards: [{ id: '어디', text: '"화장실 세면대에"', motif: 'house' }, { id: '무엇', text: '"비누가 없어요"', motif: 'cloud' }, { id: '누구', text: '"손을 깨끗이 못 씻어요"', motif: 'leaf' }] }, prompt: '세면대 이야기로 알리는 말을 차례대로 놓아 보세요.', target: { order: ['어디', '무엇', '누구'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '다칠 수 있는 곳은 언제 알리나요?', options: ['바로 알려요', '내일 알려요', '알리지 않아요'], answer: 0, difficulty: 0.05, explain: '다칠 수 있는 곳은 기다리지 않고 바로 어른께 알려요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '선생님께 알리는 말',
      items: [
        { type: 'table', prompt: '더 고치고 싶은 곳을 세 칸에 나누어 쓰세요.', columns: ['어디에', '무엇이', '누구에게 어떻게'], rows: 2 },
        { type: 'choice', prompt: '수업 중에 위험하지 않은 일을 보았을 때 알맞은 행동에 ○ 하세요.', options: ['쉬는 시간에 알려요', '소리쳐 알려요', '잊어버려요'], answer: '쉬는 시간에 알려요' },
        { type: 'blank', prompt: '알리는 말을 완성하세요.', text: '선생님, ________에 ________이(가) 있어서 ________이(가) 불편해요.' },
        { type: 'draw', prompt: '더 고치고 싶은 곳을 그려 보세요.' },
      ],
      easy: {
        note: '"어디에? 무엇이?" 두 가지만 먼저 말해 봐요.',
        items: [
          { type: 'choice', prompt: '알리는 말에 꼭 넣을 것에 ○ 하세요.', options: ['어디에', '내 이름 자랑'], answer: '어디에' },
          { type: 'choice', prompt: '빠진 손잡이를 보면 언제 알리나요?', options: ['바로', '내일'], answer: '바로' },
          { type: 'draw', prompt: '고치고 싶은 곳을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '세 칸을 모두 놓은 뒤 확인을 눌러요.',
      challenge: '알리는 말을 카드 없이 세 칸 말로 스스로 지어 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① "저기 이상해요"처럼 곳·내용이 빠진 말로 알린다 → 어디에·무엇이·누구에게 세 칸을 채운다. ② 위험한 일과 불편한 일을 구별하지 않는다 → 다칠 수 있으면 바로, 아니면 쉬는 시간에. ③ 친구 잘못을 고자질하는 것과 헷갈린다 → 알리는 것은 사람이 아니라 곳을 고치기 위한 일이다. 학생이 알린 곳은 실제로 학교에 전하고 결과를 다시 알려 주면 습관이 된다.',
  }));

  lessons.push(L(21, {
    title: '날씨가 바뀌면 다시 살펴볼 곳 찾기',
    objective: '비·눈·더위처럼 날씨가 바뀌면 다시 불편하거나 위험해지는 곳을 찾고, 그때 지킬 약속을 고를 수 있다.',
    illustration: ART('the same paper school entrance shown in rain with umbrellas, in snow with icy steps, and in summer sun with a hot slide', '날씨가 바뀌면?', [
      { motif: 'snow', x: 130, y: 100, s: 0.7 }, { motif: 'leaf', x: 330, y: 200, color: 'peach' }, { motif: 'tree', x: 380, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"17차시에 우리가 고친 현관은 비 오는 날에도 괜찮을까요?" 우산에서 떨어진 물로 현관이 미끄러워지는 모습을 몸짓으로 보여 준다. 시연 단추로 \'우산 물이 떨어진 현관\'이 \'비 오는 날\' 가지에 들어가는 모습을 보여 준다. 한 번 고친 곳도 날씨가 바뀌면 다시 살펴봐야 한다는 것을 짚는다.',
        student: '비나 눈이 온 날 학교에서 미끄러질 뻔한 곳이 있었는지 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '날씨가 바뀌면', slots: ['비 오는 날', '눈 오는 날'], cards: ['우산 물이 떨어진 현관', '얼음이 언 계단'], shuffle: false }, sequence: [{ sort: { '비 오는 날': ['우산 물이 떨어진 현관'], '눈 오는 날': ['얼음이 언 계단'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 날씨마다 달라지는 곳', minutes: 13, tool: 'mindmap',
            teacher: '"햇볕이 아주 뜨거운 날 미끄럼틀을 만지면 어떨까요?" 날씨마다 몸으로 느끼는 것(미끄럽다, 뜨겁다, 차갑다)을 먼저 말하게 한다. 날씨와 상관없는 카드를 억지로 넣는 학생에게 "그 날씨 때문에 생긴 일인가요?"라고 묻는다.',
            task: '불편하거나 위험해지는 곳을 그 날씨 가지에 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '세 가지 날씨에 생기는 일을 나누어 보세요.', toolOptions: { topic: '날씨가 바뀌면', slots: ['비 오는 날', '눈 오는 날', '아주 더운 날'], cards: ['젖은 우산이 복도에 있어요', '얼음이 언 운동장', '햇볕에 달궈진 미끄럼틀', '물웅덩이가 생긴 놀이터'] },
                target: { sort: { '비 오는 날': ['젖은 우산이 복도에 있어요', '물웅덩이가 생긴 놀이터'], '눈 오는 날': ['얼음이 언 운동장'], '아주 더운 날': ['햇볕에 달궈진 미끄럼틀'] } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['젖은 우산이 복도에 있어요', '얼음이 언 운동장', '햇볕에 달궈진 미끄럼틀', '물웅덩이가 생긴 놀이터', '오늘은 월요일이에요'] } } } },
              { prompt: '그날 생길 일과 지킬 약속을 이어 보세요.', toolOptions: { mode: 'match', topic: '그날의 약속', slots: [{ id: 's1', label: '젖은 우산을 들고 들어와요' }, { id: 's2', label: '계단에 얼음이 얼었어요' }, { id: 's3', label: '미끄럼틀이 뜨거워요' }], cards: ['우산꽂이에 꽂아요', '손잡이 잡고 천천히', '그늘에서 놀아요'] },
                target: { match: { s1: '우산꽂이에 꽂아요', s2: '손잡이 잡고 천천히', s3: '그늘에서 놀아요' } }, difficulty: 0.15 },
              { prompt: '가을에 다시 살펴볼 곳만 골라 보세요.', toolOptions: { mode: 'pick', basket: '가을에 살펴볼 곳', cards: ['젖은 낙엽이 쌓인 계단', '낙엽이 막은 빗물 구멍', '얼음이 언 수돗가', '눈사람이 있는 운동장'] },
                target: { pick: ['젖은 낙엽이 쌓인 계단', '낙엽이 막은 빗물 구멍'] }, difficulty: 0.25,
                predict: { q: '젖은 낙엽을 밟으면 어떨까요?', options: ['미끄러워요', '아무렇지 않아요'], answer: 0 },
                conclude: '젖은 낙엽은 미끄러워서 가을에도 다시 살펴봐야 해요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 날씨가 바뀐 날 어떻게 할까', minutes: 13, tool: 'emotion',
            teacher: '"비 오는 날 현관에서 내가 할 수 있는 일은 무엇일까요?" 9차시의 \'내가 할 일·어른께 부탁할 일\'을 떠올리게 한다. 얼음을 깨려는 학생에게 얼음 치우기는 어른께 부탁한다고 짚는다.',
            task: '날씨가 바뀐 날 생긴 일에서 어떻게 할지 골라요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '비 오는 날 젖은 우산을 들고 교실에 왔어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '비 오는 날, 물이 뚝뚝 떨어지는 우산을 들고 교실에 왔어요.', choices: [
                { id: 'stand', text: '우산을 접어 우산꽂이에 꽂아요', result: '교실 바닥이 젖지 않아요.', mood: '편안함' },
                { id: 'desk', text: '우산을 펴서 책상 옆에 둬요', result: '통로가 막히고 바닥이 젖어요.', mood: '걱정', why: '펼친 우산이 통로에 있으면 어떻게 될까요?' },
                { id: 'shake', text: '교실 안에서 우산을 털어요', result: '친구들 옷에 물이 튀어요.', mood: '짜증', why: '물이 어디로 튈지 떠올려 봐요.' }] }, target: { choice: 'stand' }, difficulty: 0.1 },
              { prompt: '아침에 운동장 가는 길이 꽁꽁 얼었어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '눈이 온 다음 날 아침, 운동장으로 가는 길이 꽁꽁 얼었어요.', choices: [
                { id: 'slide', text: '얼음 위에서 미끄럼을 타요', result: '넘어져 다칠 수 있어요.', mood: '무서움', why: '얼음 위에서 넘어지면 어떻게 될까요?' },
                { id: 'tell', text: '선생님께 알리고 다른 길로 가요', result: '어른이 모래를 뿌려 주세요.', mood: '편안함' },
                { id: 'break', text: '발로 얼음을 깨 봐요', result: '미끄러져 엉덩방아를 찧어요.', mood: '속상함', why: '얼음 치우기는 누구에게 부탁할까요?' }] }, target: { choice: 'tell' }, difficulty: 0.15 },
              { prompt: '아주 더운 날 놀이터에 갔어요. 마음 카드를 놓아 보세요.', toolOptions: { cards: ['놀람', '편안함', '슬픔'], slots: [{ id: 's1', label: '뜨거운 미끄럼틀에 손이 닿았어요' }, { id: 's2', label: '나무 그늘 아래에서 쉬어요' }] },
                target: { match: { s1: '놀람', s2: '편안함' } }, difficulty: 0.05 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"다음에 비가 오면 우리 반이 꼭 살펴볼 곳은 어디일까요?" 반 약속판에 \'비 오는 날 약속\' 한 줄을 더한다. 출구 2번에서 \'다시 볼 필요 없다\'를 고른 학생과 젖은 낙엽 이야기를 다시 나눈다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '날씨가 바뀌면', slots: ['비 오는 날', '아주 더운 날'], cards: ['빗물이 고인 신발장 앞', '햇볕에 뜨거워진 의자'] }, prompt: '두 가지 일을 그 날씨 가지에 나누어 보세요.', target: { sort: { '비 오는 날': ['빗물이 고인 신발장 앞'], '아주 더운 날': ['햇볕에 뜨거워진 의자'] } }, difficulty: 0.05 },
          { type: 'choice', prompt: '한 번 고친 곳은 어떻게 하면 좋을까요?', options: ['다시 볼 필요 없어요', '날씨가 바뀌면 다시 살펴봐요', '어른만 살펴봐요'], answer: 1, difficulty: 0.1, explain: '날씨가 바뀌면 고친 곳도 다시 불편해질 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '날씨가 바뀌면 다시 살펴봐요',
      items: [
        { type: 'table', prompt: '날씨마다 살펴볼 곳과 약속을 쓰세요.', columns: ['날씨', '살펴볼 곳', '약속'], cells: [['비 오는 날', '', ''], ['눈 오는 날', '', ''], ['아주 더운 날', '', '']] },
        { type: 'choice', prompt: '젖은 우산은 어디에 두나요?', options: ['우산꽂이', '통로', '책상 위'], answer: '우산꽂이' },
        { type: 'check', prompt: '가을에 살펴볼 곳에 ✓ 하세요.', options: ['젖은 낙엽 계단', '막힌 빗물 구멍', '눈사람', '얼음 수돗가'] },
        { type: 'draw', prompt: '비 오는 날 약속을 지키는 내 모습을 그려 보세요.' },
      ],
      easy: {
        note: '"그날 몸으로 느끼는 것은? 미끄럽다, 뜨겁다, 차갑다"를 떠올려요.',
        items: [
          { type: 'choice', prompt: '눈 오는 날 미끄러운 곳에 ○ 하세요.', options: ['얼음 계단', '교실 책상'], answer: '얼음 계단' },
          { type: 'choice', prompt: '더운 날 놀기 좋은 곳에 ○ 하세요.', options: ['나무 그늘', '뜨거운 미끄럼틀'], answer: '나무 그늘' },
          { type: 'draw', prompt: '우산을 꽂는 내 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 가지에 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '모두 나눈 뒤 확인을 눌러요.',
      challenge: '날씨와 상관없는 함정 카드가 섞여 있고, 가을에 살펴볼 곳을 스스로 하나 더 찾아 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 한 번 고치면 더 살펴볼 것이 없다고 여긴다 → 날씨·계절마다 같은 곳이 달라진다는 것을 보여 준다. ② 얼음·눈을 스스로 치우려 한다 → 어른께 알리고 다른 길로 간다. ③ 더운 날 위험을 모른다 → 햇볕에 달궈진 놀이 기구는 데일 수 있으니 손등으로 먼저 살짝 대어 본다. 계절이 바뀔 때마다 이 차시의 표를 다시 꺼내 쓰면 좋다.',
  }));

  lessons.push(L(22, {
    title: '동네에서 함께 쓰는 곳의 약속 지키기',
    objective: '아파트 승강기, 놀이터, 버스 정류장처럼 동네에서 함께 쓰는 곳의 약속을 알고 알맞은 행동을 고를 수 있다.',
    illustration: ART('a paper neighborhood with an apartment elevator, a small park playground and a bus stop where people wait in line', '우리 동네도 함께 써요', [
      { motif: 'house', x: 100, y: 214, color: 'sky' }, { motif: 'house', x: 200, y: 210, color: 'peach', s: 1.1 }, { motif: 'tree', x: 380, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"학교 밖에도 여러 사람이 함께 쓰는 곳이 있어요. 어디가 있을까요?" 승강기, 놀이터, 버스 정류장, 도서관 같은 대답을 칠판에 적는다. 시연 단추로 \'버스 줄에 차례대로 서요\' 카드가 \'버스 정류장\' 가지로 가는 모습을 보여 준다. 학교에서 배운 약속이 동네에서도 이어진다는 것을 짚는다.',
        student: '우리 동네에서 여러 사람이 함께 쓰는 곳을 하나 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '동네 약속', slots: ['승강기', '버스 정류장'], cards: ['내리는 사람 먼저', '버스 줄에 차례대로 서요'], shuffle: false }, sequence: [{ sort: { '승강기': ['내리는 사람 먼저'], '버스 정류장': ['버스 줄에 차례대로 서요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 곳마다 지킬 약속', minutes: 12, tool: 'mindmap',
            teacher: '"승강기에서 내리는 사람이 먼저일까요, 타는 사람이 먼저일까요?" 문 앞에서 비켜서는 몸짓을 함께 해 본다. 학교 약속과 비슷한 것을 찾으면(차례 지키기, 제자리에 두기) 칭찬한다.',
            task: '동네 약속 카드를 그 약속을 지킬 곳의 가지에 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '약속 카드를 지킬 곳의 가지에 나누어 보세요.', toolOptions: { topic: '동네 약속', slots: ['승강기', '놀이터', '버스 정류장'], cards: ['내리는 사람 먼저', '그네는 차례대로', '버스 줄에 서요', '승강기 안에서 뛰지 않아요'] },
                target: { sort: { '승강기': ['내리는 사람 먼저', '승강기 안에서 뛰지 않아요'], '놀이터': ['그네는 차례대로'], '버스 정류장': ['버스 줄에 서요'] } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['내리는 사람 먼저', '그네는 차례대로', '버스 줄에 서요', '승강기 안에서 뛰지 않아요', '집에서 손을 씻어요'] } } } },
              { prompt: '학교 약속과 닮은 동네 약속을 이어 보세요.', toolOptions: { mode: 'match', topic: '학교와 동네', slots: [{ id: 's1', label: '급식 줄에 차례대로' }, { id: 's2', label: '놀잇감은 제자리에' }, { id: 's3', label: '도서실에서는 조용히' }], cards: ['버스 줄에 차례대로', '공원 쓰레기는 쓰레기통에', '동네 도서관에서 작은 소리로'] },
                target: { match: { s1: '버스 줄에 차례대로', s2: '공원 쓰레기는 쓰레기통에', s3: '동네 도서관에서 작은 소리로' } }, difficulty: 0.2,
                conclude: '학교에서 지킨 약속은 동네에서도 똑같이 지킬 수 있어요.' },
              { prompt: '함께 쓰는 곳에서 지킬 약속만 골라 보세요.', toolOptions: { mode: 'pick', basket: '동네 약속', cards: ['공원 의자에 쓰레기를 두지 않아요', '승강기 단추를 모두 눌러요', '놀이터 모래를 밖으로 뿌려요', '줄을 서서 기다려요'] },
                target: { pick: ['공원 의자에 쓰레기를 두지 않아요', '줄을 서서 기다려요'] }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 동네에서 이럴 땐 어떻게', minutes: 14, tool: 'emotion',
            teacher: '"유모차를 밀고 오시는 분이 승강기를 타려고 해요. 나는 이미 탔어요. 어떻게 할까요?" 문 열림 단추를 누르고 기다려 주는 행동을 몸으로 해 보게 한다. 모르는 어른과 관련된 상황에서는 가까운 어른(부모님)과 함께 있을 때 돕는다는 것도 짚는다.',
            task: '동네에서 생긴 일을 읽고 함께 쓰는 사람을 생각한 행동을 골라요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '유모차를 민 이웃이 승강기를 타려고 해요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '엄마와 승강기를 탔는데, 유모차를 민 이웃이 오고 있어요.', choices: [
                { id: 'hold', text: '열림 단추를 누르고 기다려요', result: '이웃이 고맙다며 함께 타요.', mood: '고마움' },
                { id: 'close', text: '닫힘 단추를 얼른 눌러요', result: '이웃이 다음 승강기를 오래 기다려요.', mood: '속상함', why: '기다리는 이웃의 마음을 떠올려 봐요.' }] }, target: { choice: 'hold' }, difficulty: 0.05,
                levels: { challenge: { toolOptions: { choices: [
                  { id: 'hold', text: '열림 단추를 누르고 기다려요', result: '이웃이 고맙다며 함께 타요.', mood: '고마움' },
                  { id: 'close', text: '닫힘 단추를 얼른 눌러요', result: '이웃이 다음 승강기를 오래 기다려요.', mood: '속상함', why: '기다리는 이웃의 마음을 떠올려 봐요.' },
                  { id: 'all', text: '층 단추를 모두 눌러 장난쳐요', result: '승강기가 층마다 서서 모두 늦어요.', mood: '짜증', why: '단추를 모두 누르면 누가 불편할까요?' }] } } } },
              { prompt: '놀이터 그네를 오래 타고 있는데 동생이 기다려요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '놀이터에서 그네를 한참 탔어요. 옆에서 동생이 기다리고 있어요.', choices: [
                { id: 'more', text: '못 본 척 계속 타요', result: '동생이 울면서 집에 가요.', mood: '슬픔', why: '기다리는 동생은 어떤 마음일까요?' },
                { id: 'count', text: '"열까지 세고 바꿔 줄게" 말해요', result: '동생이 웃으며 기다려요.', mood: '기쁨' },
                { id: 'go', text: '"저리 가" 하고 말해요', result: '동생이 속상해해요.', mood: '속상함', why: '그 말을 들은 동생의 마음은 어떨까요?' }] }, target: { choice: 'count' }, difficulty: 0.15 },
              { prompt: '공원에서 생긴 일에 어울리는 마음 카드를 놓아 보세요.', toolOptions: { cards: ['짜증', '고마움', '뿌듯함'], slots: [{ id: 's1', label: '공원 의자에 과자 봉지가 버려져 있어요' }, { id: 's2', label: '내가 쓰레기를 주워 쓰레기통에 넣었어요' }] },
                target: { match: { s1: '짜증', s2: '뿌듯함' } }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"이번 주말에 우리 동네에서 지켜 볼 약속 하나를 정해 볼까요?" 집에서 가족과 함께 지켜 보고 다음 주에 이야기하자고 한다. 출구 1번을 틀린 학생은 \'내리는 사람 먼저\'를 몸으로 다시 해 본다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '동네 약속', slots: ['동네 도서관', '공원'], cards: ['책은 제자리에 꽂아요', '꽃을 꺾지 않아요'] }, prompt: '두 약속을 지킬 곳의 가지에 나누어 보세요.', target: { sort: { '동네 도서관': ['책은 제자리에 꽂아요'], '공원': ['꽃을 꺾지 않아요'] } }, difficulty: 0.05 },
          { type: 'choice', prompt: '승강기 앞에서 바른 행동은 무엇인가요?', options: ['타는 사람이 먼저 들어가요', '내리는 사람이 다 내린 뒤 타요', '문이 열리면 밀고 들어가요'], answer: 1, difficulty: 0.1, explain: '내리는 사람이 먼저 내려야 부딪히지 않아요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '동네에서 함께 쓰는 곳',
      items: [
        { type: 'table', prompt: '함께 쓰는 곳과 그곳의 약속을 쓰세요.', columns: ['함께 쓰는 곳', '약속'], cells: [['승강기', ''], ['놀이터', ''], ['', '']] },
        { type: 'choice', prompt: '그네를 기다리는 동생에게 할 말에 ○ 하세요.', options: ['"열까지 세고 바꿔 줄게"', '"저리 가"', '"내 거야"'], answer: '"열까지 세고 바꿔 줄게"' },
        { type: 'blank', prompt: '빈칸을 채우세요.', text: '승강기에서는 ___ 사람이 먼저예요.', answer: '내리는' },
        { type: 'draw', prompt: '우리 동네에서 약속을 지키는 모습을 그려 보세요.' },
      ],
      easy: {
        note: '학교에서 지킨 약속과 닮은 약속을 찾아봐요.',
        items: [
          { type: 'choice', prompt: '버스 정류장 약속에 ○ 하세요.', options: ['줄을 서요', '새치기해요'], answer: '줄을 서요' },
          { type: 'choice', prompt: '공원 쓰레기는 어디에 넣나요?', options: ['쓰레기통', '의자 위'], answer: '쓰레기통' },
          { type: 'draw', prompt: '놀이터에서 차례를 지키는 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 가지에 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '모두 나눈 뒤 확인을 눌러요.',
      challenge: '동네와 상관없는 함정 카드와 장난치는 보기가 하나 더 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 학교 약속과 동네 약속을 따로 생각한다 → 닮은 약속을 잇는 활동으로 같은 마음이라는 것을 보여 준다. ② 승강기에서 타는 사람이 먼저 들어간다 → 문 옆으로 비켜서는 몸짓을 연습한다. ③ 모르는 어른을 혼자 도우려 한다 → 낯선 사람의 부탁은 보호자와 함께 있을 때만 돕고, 혼자일 때는 어른을 부른다는 안전 약속을 함께 말한다.',
  }));

  lessons.push(L(23, {
    title: '하루 동안 약속을 지킬 때 차례로 놓기',
    objective: '학교에 오는 때부터 집에 가는 때까지 하루의 차례에 맞추어 지킬 약속을 놓고, 내 하루 약속을 세울 수 있다.',
    illustration: ART('a paper day path from sunrise to sunset with small stops: arriving at school, break time, lunch and going home, each with a tiny promise flag', '하루 내내 약속', [
      { motif: 'sun', x: 90, y: 90, s: 0.6 }, { motif: 'moon', x: 400, y: 70, s: 0.6 }, { motif: 'house', x: 240, y: 214, color: 'buttercup' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"학교에 와서 가장 먼저 하는 일은 무엇인가요? 그다음은요?" 학생들의 하루를 칠판에 아침부터 차례로 적는다. 시연 단추로 하루 띠에 약속 카드가 차례대로 놓이는 모습을 보여 준다. 약속은 따로 지키는 것이 아니라 하루의 때마다 들어 있다는 것을 짚는다.',
        student: '오늘 아침 교실에 들어와서 한 일을 차례대로 말해 봐요.',
        demo: { tool: 'timeline', options: { axis: ['아침', '저녁'], cards: ['실내화로 갈아 신어요', '점심 줄을 서요', '의자를 넣고 집에 가요'], shuffle: false }, sequence: [{ order: ['실내화로 갈아 신어요', '점심 줄을 서요', '의자를 넣고 집에 가요'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 하루 띠에 약속 놓기', minutes: 13, tool: 'timeline',
            teacher: '"이 약속은 하루 가운데 언제 지킬까요?" 카드를 읽고 그때를 먼저 말한 뒤 놓게 한다. 점심 약속을 아침 자리에 놓는 학생에게 "점심은 몇 교시가 끝난 뒤였지요?"라고 묻는다.',
            task: '하루 띠에 약속 카드를 먼저 지키는 것부터 차례대로 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '하루에 약속을 지키는 차례대로 놓아 보세요.', toolOptions: { axis: ['아침', '저녁'], cards: ['가방을 고리에 걸어요', '쉬는 시간에 복도는 걸어요', '점심 전에 손을 씻어요', '집에 가기 전 의자를 넣어요'] },
                target: { order: ['가방을 고리에 걸어요', '쉬는 시간에 복도는 걸어요', '점심 전에 손을 씻어요', '집에 가기 전 의자를 넣어요'] }, difficulty: 0.15 },
              { prompt: '체육이 든 날의 약속을 차례대로 놓아 보세요.', toolOptions: { axis: ['아침', '저녁'], cards: ['체육복으로 갈아입어요', '공을 바구니에 돌려놔요', '손을 씻고 교실로 와요'] },
                target: { order: ['체육복으로 갈아입어요', '공을 바구니에 돌려놔요', '손을 씻고 교실로 와요'] }, difficulty: 0.1,
                levels: { challenge: { prompt: '체육이 든 날의 약속 다섯 가지를 차례대로 놓아 보세요.', target: { order: ['체육복으로 갈아입어요', '줄 서서 운동장에 가요', '공을 바구니에 돌려놔요', '손을 씻고 교실로 와요', '체육복을 가방에 넣어요'] }, toolOptions: { cards: ['체육복으로 갈아입어요', '줄 서서 운동장에 가요', '공을 바구니에 돌려놔요', '손을 씻고 교실로 와요', '체육복을 가방에 넣어요'] } } } },
              { prompt: '비 오는 날 아침, 현관에 닿아서 교실에 들어가기까지의 약속을 차례대로 놓아 보세요.', toolOptions: { axis: ['먼저', '나중'], cards: ['현관 밖에서 우산을 털고 접어요', '현관 우산꽂이에 우산을 꽂아요', '젖은 신발을 벗어 실내화로 갈아 신어요', '교실에 들어가 가방을 걸어요'] },
                target: { order: ['현관 밖에서 우산을 털고 접어요', '현관 우산꽂이에 우산을 꽂아요', '젖은 신발을 벗어 실내화로 갈아 신어요', '교실에 들어가 가방을 걸어요'] }, difficulty: 0.2,
                conclude: '그때그때 할 약속을 차례로 알면 하루가 편해져요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 때마다 지킬 약속 잇기', minutes: 13, tool: 'kitchen',
            teacher: '"하루 가운데 내가 약속을 가장 자주 잊는 때는 언제인가요?" 때와 약속을 잇고 나서 자기가 잘 잊는 때에 별표를 그리게 한다. 모든 때에 같은 약속을 놓는 학생에게 그때 하는 일을 먼저 말하게 한다.',
            task: '하루의 때와 그때 지킬 약속을 잇고, 내가 잊기 쉬운 약속을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '하루의 때와 그때 지킬 약속을 이어 보세요.', toolOptions: { mode: 'match', slots: [{ id: 't1', label: '아침에 교실에 와서' }, { id: 't2', label: '점심을 먹고 나서' }, { id: 't3', label: '집에 가기 전에' }], cards: ['가방을 고리에 걸어요', '식판을 제자리에 놓아요', '내 자리 바닥을 살펴요'] },
                target: { match: { t1: '가방을 고리에 걸어요', t2: '식판을 제자리에 놓아요', t3: '내 자리 바닥을 살펴요' } }, difficulty: 0.1 },
              { prompt: '쉬는 시간에 지킬 약속만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '쉬는 시간 약속', items: [{ id: 'walk', text: '복도에서 걸어요' }, { id: 'line', text: '화장실 줄을 서요' }, { id: 'lunch', text: '식판을 받아요' }, { id: 'back', text: '종이 치면 자리에 앉아요' }] },
                target: { checklist: ['walk', 'line', 'back'] }, difficulty: 0.15 },
              { prompt: '쉬는 시간에 생기는 때와 그때 지킬 약속을 이어 보세요.', toolOptions: { mode: 'match', slots: [{ id: 't1', label: '화장실에 다녀와서' }, { id: 't2', label: '물을 마시러 갔는데 줄이 길 때' }, { id: 't3', label: '학급 문고 책을 다 읽고' }], cards: ['손을 비누로 씻어요', '줄을 서서 차례를 기다려요', '책을 제자리에 꽂아요'] },
                target: { match: { t1: '손을 비누로 씻어요', t2: '줄을 서서 차례를 기다려요', t3: '책을 제자리에 꽂아요' } }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"내일 하루 동안 \'이때는 꼭!\' 하고 지킬 약속 하나를 정해 볼까요?" 활동지 하루 띠에 적고 책상에 붙여 두게 한다. 출구 1번에서 차례를 바꾼 학생은 하루 띠를 손가락으로 따라가며 다시 놓는다.',
        exitTicket: [
          { type: 'tool', tool: 'timeline', options: { axis: ['아침', '저녁'], cards: ['교문에서 인사해요', '급식 줄을 서요', '청소 도구를 제자리에 둬요'] }, prompt: '하루의 약속을 차례대로 놓아 보세요.', target: { order: ['교문에서 인사해요', '급식 줄을 서요', '청소 도구를 제자리에 둬요'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '점심을 먹기 전에 지킬 약속은 무엇인가요?', options: ['손을 씻어요', '의자를 넣고 집에 가요', '실내화로 갈아 신어요'], answer: 0, difficulty: 0.05, explain: '밥을 먹기 전에 손을 씻어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '나의 하루 약속',
      items: [
        { type: 'figure', wide: true, prompt: '하루의 차례대로 빈칸에 1, 2, 3을 쓰세요.', tool: 'timeline', figures: [{ options: { axis: ['아침', '저녁'], cards: ['점심 전에 손 씻기', '집에 가기 전 의자 넣기', '아침에 가방 걸기'], shuffle: false }, caption: '' }], answer: '가방 걸기 1, 손 씻기 2, 의자 넣기 3' },
        { type: 'table', prompt: '하루의 때마다 내가 지킬 약속을 쓰세요.', columns: ['때', '내 약속'], cells: [['아침', ''], ['쉬는 시간', ''], ['점심', ''], ['집에 가기 전', '']] },
        { type: 'choice', prompt: '종이 치면 할 약속에 ○ 하세요.', options: ['자리에 앉아요', '복도에서 놀아요'], answer: '자리에 앉아요' },
        { type: 'short', prompt: '하루 가운데 내가 약속을 가장 잘 잊는 때와 그 까닭을 쓰세요.' },
      ],
      easy: {
        note: '아침 → 쉬는 시간 → 점심 → 집에 가기 전 차례예요.',
        items: [
          { type: 'choice', prompt: '아침에 할 약속에 ○ 하세요.', options: ['가방 걸기', '의자 넣고 집에 가기'], answer: '가방 걸기' },
          { type: 'choice', prompt: '점심 전에 할 약속에 ○ 하세요.', options: ['손 씻기', '실내화 갈아 신기'], answer: '손 씻기' },
          { type: 'draw', prompt: '내일 꼭 지킬 약속을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '모두 놓은 뒤 확인을 눌러요.',
      challenge: '체육이 든 날의 약속이 다섯 장이에요. 내 하루 약속을 스스로 세워 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 약속을 하루의 때와 떼어서 외운다 → 그때 하는 일을 먼저 말하고 그 안의 약속을 찾는다. ② 쉬는 시간과 점심시간의 약속을 섞는다 → 우리 반 시간표를 하루 띠 옆에 붙여 둔다. ③ 잊기 쉬운 때를 스스로 알지 못한다 → 18차시 기록을 꺼내 못 지킨 때를 함께 찾는다.',
  }));

  lessons.push(L(24, {
    title: '약속 지킴이 활동을 돌아보고 서로 칭찬하기',
    objective: '그동안의 약속 지킴이 활동에서 잘한 점과 더 해 볼 점을 나누고, 친구를 구체적인 말로 칭찬할 수 있다.',
    illustration: ART('paper children giving each other small star badges in front of a promise board full of sun stickers', '약속 지킴이 칭찬해요', [
      { motif: 'star', x: 130, y: 90, s: 0.7 }, { motif: 'star', x: 350, y: 90, s: 0.7, color: 'rose' }, { motif: 'house', x: 240, y: 216, color: 'mint' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"\'잘했어\'와 \'오늘 친구 가방까지 걸어 줘서 고마워\' 가운데 어떤 칭찬이 더 기분 좋을까요?" 두 칭찬을 들려주고 무엇이 다른지 말하게 한다. 시연 단추로 구체적인 칭찬 카드가 바구니에 들어가는 모습을 보여 준다. 1~23차시 동안 찾은 곳·고친 곳·지킨 약속을 약속판에서 함께 훑어본다.',
        student: '그동안 내가 가장 잘 지킨 약속을 하나 떠올려 봐요.',
        demo: { tool: 'emotion', options: { mode: 'pick', basket: '구체적인 칭찬', cards: ['"계단에서 손잡이를 잡아 멋졌어"', '"그냥 잘했어"'], shuffle: false }, sequence: [{ pick: ['"계단에서 손잡이를 잡아 멋졌어"'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 잘한 점과 더 해 볼 점', minutes: 13, tool: 'mindmap',
            teacher: '"하준이의 돌아보기 카드를 읽고 잘한 점과 더 해 볼 점으로 나누어 봐요." 다른 사람의 기록으로 먼저 연습한 뒤 내 것으로 옮긴다. 더 해 볼 점을 \'못한 점\'으로만 말하는 학생에게 "다음에 어떻게 하면 될까?"로 바꾸어 말하게 한다.',
            task: '돌아보기 카드를 잘한 점과 더 해 볼 점으로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '하준이의 돌아보기 카드를 나누어 보세요.', toolOptions: { topic: '하준이 돌아보기', slots: ['잘한 점', '더 해 볼 점'], cards: ['날마다 가방을 걸었어요', '비 오는 날 우산꽂이를 잊었어요', '계단 손잡이를 알렸어요', '쉬는 시간에 가끔 뛰었어요'] },
                target: { sort: { '잘한 점': ['날마다 가방을 걸었어요', '계단 손잡이를 알렸어요'], '더 해 볼 점': ['비 오는 날 우산꽂이를 잊었어요', '쉬는 시간에 가끔 뛰었어요'] } }, difficulty: 0.1 },
              { prompt: '더 해 볼 점과 다음에 할 방법을 이어 보세요.', toolOptions: { mode: 'match', topic: '다음에는', slots: [{ id: 's1', label: '우산꽂이를 잊었어요' }, { id: 's2', label: '쉬는 시간에 뛰었어요' }], cards: ['현관에 들어서면 우산부터 접어요', '종이 치면 걸어서 가요'] },
                target: { match: { s1: '현관에 들어서면 우산부터 접어요', s2: '종이 치면 걸어서 가요' } }, difficulty: 0.15 },
              { prompt: '더 고치고 싶은 곳 가운데 선생님께 알릴 곳 하나만 골라 보세요.', toolOptions: { mode: 'pick', basket: '이번에 알릴 곳', cards: ['물이 새는 2층 수도', '친구 필통이 예뻐요', '내 연필이 짧아요'] },
                target: { pick: ['물이 새는 2층 수도'] }, difficulty: 0.1,
                conclude: '돌아보고 나면 더 고칠 곳을 찾아 다시 알릴 수 있어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 구체적으로 칭찬하기', minutes: 13, tool: 'emotion',
            teacher: '"무엇을 했는지 넣어 칭찬해 볼까요?" \'누가 + 무엇을 + 그래서 좋았어\' 틀을 칠판에 쓴다. 짝의 약속 지킴이 활동을 하나 골라 그 틀로 칭찬하게 한다. 외모나 물건을 칭찬하는 학생에게 "약속을 지킨 행동을 칭찬해 줘요"라고 짚는다.',
            task: '약속을 지킨 행동을 넣은 칭찬 말을 고르고 마음을 알아봐요.',
            levels: CARD_LV,
            items: [
              { prompt: '약속을 지킨 행동을 넣은 칭찬만 골라 보세요.', toolOptions: { mode: 'pick', basket: '구체적인 칭찬', cards: ['"물을 꼭 잠가 줘서 고마워"', '"너 옷이 예쁘다"', '"공을 바구니에 넣어 줘서 고마워"', '"그냥 최고야"'] },
                target: { pick: ['"물을 꼭 잠가 줘서 고마워"', '"공을 바구니에 넣어 줘서 고마워"'] }, difficulty: 0.15 },
              { prompt: '칭찬을 들었을 때와 내가 해낸 때의 마음을 놓아 보세요.', toolOptions: { cards: ['고마움', '뿌듯함', '무서움'], slots: [{ id: 's1', label: '친구가 내가 한 일을 알아봐 줬어요' }, { id: 's2', label: '한 주 내내 약속을 지켰어요' }] },
                target: { match: { s1: ['고마움', '뿌듯함'], s2: '뿌듯함' } }, difficulty: 0.05 },
              { prompt: '복도에서 자주 뛰던 준호가 이제는 날마다 걸어요. 준호의 뿌듯한 마음 크기를 골라 보세요.', toolOptions: { mode: 'scale', who: '준호', situation: '준호는 처음에는 복도에서 자주 뛰었어요. 약속을 정한 뒤로는 날마다 걸어 다니고, 친구에게도 "걸어가자" 하고 말해요.', feeling: '뿌듯함', after: '나도 달라진 내 모습 하나를 찾아 칭찬해 줘요.' }, target: { level: [3, 5] }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"짝에게 약속 지킴이 칭찬 한마디를 해 볼까요?" 짝끼리 \'누가 + 무엇을 + 그래서 좋았어\'로 칭찬을 주고받고 별 스티커를 붙여 준다. 다음 시간부터는 그리기·만들기 재료를 쓰는 약속을 배운다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'pick', basket: '구체적인 칭찬', cards: ['"줄을 반듯하게 서 줘서 고마워"', '"너 키가 크다"', '"휴지를 주워 줘서 멋졌어"'] }, prompt: '약속을 지킨 행동을 넣은 칭찬만 골라 보세요.', target: { pick: ['"줄을 반듯하게 서 줘서 고마워"', '"휴지를 주워 줘서 멋졌어"'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '돌아보기를 하는 까닭으로 알맞은 것은 무엇인가요?', options: ['잘못한 친구를 찾으려고', '다음에 더 잘하려고', '선생님께 혼나지 않으려고'], answer: 1, difficulty: 0.1, explain: '잘한 점은 이어 가고 더 해 볼 점은 다음에 고치려고 돌아봐요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '약속 지킴이 돌아보기',
      items: [
        { type: 'table', prompt: '나의 약속 지킴이 활동을 돌아보세요.', columns: ['잘한 점', '더 해 볼 점'], rows: 2 },
        { type: 'blank', prompt: '짝을 칭찬하는 말을 쓰세요.', text: '___아(야), ________ 해 줘서 고마워.' },
        { type: 'choice', prompt: '구체적인 칭찬에 ○ 하세요.', options: ['"물을 꼭 잠가 줘서 고마워"', '"그냥 잘했어"'], answer: '"물을 꼭 잠가 줘서 고마워"' },
        { type: 'short', prompt: '선생님께 더 알리고 싶은 곳을 하나 쓰세요.' },
      ],
      easy: {
        note: '칭찬은 "무엇을 했는지"를 넣어요.',
        items: [
          { type: 'choice', prompt: '내가 잘한 약속에 ○ 하세요.', options: ['가방 걸기', '물 잠그기', '손잡이 잡기'] },
          { type: 'choice', prompt: '구체적인 칭찬에 ○ 하세요.', options: ['"공을 넣어 줘서 고마워"', '"그냥 최고"'], answer: '"공을 넣어 줘서 고마워"' },
          { type: 'draw', prompt: '약속 지킴이 나를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '모두 나눈 뒤 확인을 눌러요.',
      challenge: '더 해 볼 점마다 다음 방법을 스스로 지어 말하고, 칭찬 틀 없이 칭찬해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 돌아보기를 잘못한 사람 찾기로 여긴다 → 잘한 점부터 말하고, 더 해 볼 점은 "다음에는"으로 바꾼다. ② 칭찬이 "잘했어"에서 멈춘다 → 누가·무엇을·그래서 좋았어 틀을 쓴다. ③ 외모·물건을 칭찬한다 → 약속을 지킨 행동을 칭찬하게 한다. 이 차시로 바른 생활(1~24차시)을 마무리하고, 48차시 단원 정리에서 다시 함께 돌아본다.',
  }));

  // ───────────────────────── 25~32차시: 표현 재료 견주기·용구 안전(표현의 기초 요소와 재료 이해) ─────────────────────────

  lessons.push(L(25, {
    title: '색연필과 크레파스로 같은 칸 칠해 견주기',
    objective: '색연필과 크레파스로 같은 칸을 칠해 보고, 선의 굵기·진하기·칠하는 빠르기가 어떻게 다른지 말할 수 있다.',
    illustration: ART('a paper drawing table with a box of colored pencils and a box of crayons, two squares colored side by side, one finely and one boldly', '무엇으로 칠할까요?', [
      { motif: 'flower', x: 110, y: 226, color: 'rose' }, { motif: 'tree', x: 380, y: 214 }, { motif: 'star', x: 250, y: 84, s: 0.6 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"색연필로 칠해도, 크레파스로 칠해도 똑같을까요?" 손을 들어 생각을 말하게 한 뒤, 칠판에 두 재료로 같은 크기의 네모를 칠해 보인다. 시연 단추로 \'가는 선을 그어요\'가 색연필 가지로 가는 모습을 보여 준다. "오늘은 직접 칠해 보고 다른 점을 찾아요."',
        student: '색연필과 크레파스 가운데 어느 것을 더 자주 쓰는지 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '칠해 보니', slots: ['색연필', '크레파스'], cards: ['가는 선을 그어요', '굵고 진하게 칠해져요'], shuffle: false }, sequence: [{ sort: { '색연필': ['가는 선을 그어요'], '크레파스': ['굵고 진하게 칠해져요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 같은 칸 두 번 칠해 보기 (재료 탐색)', minutes: 12, tool: 'mindmap',
            teacher: '"활동지의 두 칸을 하나는 색연필로, 하나는 크레파스로 칠해 봐요. 어느 쪽이 빨리 칠해졌나요? 손가락으로 만져 보면 어때요?" 칠한 뒤 손가락에 묻는지, 선이 얼마나 굵은지 견주게 한다. "똑같아요"라는 학생에게 두 칸을 나란히 들어 멀리서 보게 한다.',
            task: '활동지 두 칸을 색연필과 크레파스로 칠해 보고, 알게 된 점을 카드로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '두 칸을 다 칠했으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '칠해 보고 알게 된 점을 재료 가지에 나누어 보세요.', toolOptions: { topic: '칠해 보니', slots: ['색연필', '크레파스'], cards: ['가는 선을 그을 수 있어요', '넓은 곳이 빨리 칠해져요', '종이 결이 보여요', '손가락에 잘 묻어요'] },
                target: { sort: { '색연필': ['가는 선을 그을 수 있어요', '종이 결이 보여요'], '크레파스': ['넓은 곳이 빨리 칠해져요', '손가락에 잘 묻어요'] } }, difficulty: 0.15,
                predict: { q: '넓은 하늘을 빨리 칠하려면 무엇이 좋을까요?', options: ['색연필', '크레파스'], answer: 1 },
                conclude: '재료마다 칠해지는 모습이 달라서 그리고 싶은 것에 맞게 골라요.' },
              { prompt: '두 재료를 견준 말 가운데 맞는 말만 골라 보세요.', toolOptions: { mode: 'pick', basket: '맞는 말', cards: ['색연필 선이 더 가늘어요', '크레파스가 더 진하게 칠해져요', '두 재료는 칠하면 똑같아요'] },
                target: { pick: ['색연필 선이 더 가늘어요', '크레파스가 더 진하게 칠해져요'] }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 그리고 싶은 것에 맞는 재료 고르기', minutes: 14, tool: 'mindmap',
            teacher: '"개미 다리처럼 아주 가는 것은 무엇으로 그릴까요? 넓은 바다는요?" 그리고 싶은 것의 크기와 굵기를 먼저 말하고 재료를 고르게 한다. 정답이 하나만은 아니지만 더 알맞은 재료가 있다는 것을 짚는다.',
            task: '그리고 싶은 것과 그것에 더 알맞은 재료를 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '그리고 싶은 것과 더 알맞은 재료를 이어 보세요.', toolOptions: { mode: 'match', topic: '무엇으로 그릴까?', slots: [{ id: 's1', label: '개미의 가는 다리' }, { id: 's2', label: '넓고 파란 바다' }], cards: ['색연필', '크레파스'] },
                target: { match: { s1: '색연필', s2: '크레파스' } }, difficulty: 0.1 },
              { prompt: '그리고 싶은 것을 더 알맞은 재료 가지에 나누어 보세요.', toolOptions: { topic: '무엇으로 그릴까?', slots: ['색연필', '크레파스'], cards: ['나뭇잎의 잎맥', '해가 비치는 넓은 하늘', '작은 글씨 이름표', '운동장 바닥 전체'] },
                target: { sort: { '색연필': ['나뭇잎의 잎맥', '작은 글씨 이름표'], '크레파스': ['해가 비치는 넓은 하늘', '운동장 바닥 전체'] } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['나뭇잎의 잎맥', '해가 비치는 넓은 하늘', '작은 글씨 이름표', '운동장 바닥 전체', '가위로 오리기'] } } } },
              { prompt: '그림 그릴 때의 마음을 놓아 보세요.', tool: 'mindmap', toolOptions: { mode: 'match', topic: '그릴 때 마음', slots: [{ id: 's1', label: '넓은 하늘을 색연필로만 칠하느라 오래 걸렸어요' }, { id: 's2', label: '크레파스로 금방 칠하고 뿌듯했어요' }], cards: ['힘들어요', '신나요'] },
                target: { match: { s1: '힘들어요', s2: '신나요' } }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 칠해 보니 재료는 무엇으로 칠해도 똑같았나요?" 활동지의 두 칸을 짝과 견주며 다른 점 하나를 말하게 한다. 크레파스를 쓴 손은 씻고 오게 한다. 출구 2번을 틀린 학생은 두 칸을 다시 나란히 보여 준다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '무엇으로 그릴까?', slots: [{ id: 'e1', label: '꽃잎의 가는 무늬' }, { id: 'e2', label: '넓은 초록 들판' }], cards: ['색연필', '크레파스'] }, prompt: '그리고 싶은 것과 더 알맞은 재료를 이어 보세요.', target: { match: { e1: '색연필', e2: '크레파스' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '색연필과 크레파스로 칠하면 어떤가요?', options: ['똑같아요', '굵기와 진하기가 달라요', '둘 다 물에 녹아요'], answer: 1, difficulty: 0.1, explain: '색연필은 가늘고 연하게, 크레파스는 굵고 진하게 칠해져요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '색연필과 크레파스',
      items: [
        { type: 'draw', prompt: '왼쪽 칸은 색연필, 오른쪽 칸은 크레파스로 같은 색을 칠해 보세요.' },
        { type: 'table', prompt: '칠해 보고 알게 된 점을 쓰세요.', columns: ['', '색연필', '크레파스'], cells: [['선의 굵기', '', ''], ['진하기', '', ''], ['손에 묻나요', '', '']] },
        { type: 'choice', prompt: '넓은 하늘을 빨리 칠하기 좋은 재료에 ○ 하세요.', options: ['색연필', '크레파스'], answer: '크레파스' },
        { type: 'short', prompt: '다음에 색연필로 그리고 싶은 것을 쓰세요.' },
      ],
      easy: {
        note: '두 칸을 멀리서 보며 어느 쪽이 진한지 견주어요.',
        items: [
          { type: 'draw', prompt: '색연필과 크레파스로 한 칸씩 칠해 보세요.' },
          { type: 'choice', prompt: '가는 선을 긋기 좋은 재료에 ○ 하세요.', options: ['색연필', '크레파스'], answer: '색연필' },
          { type: 'choice', prompt: '손에 잘 묻는 재료에 ○ 하세요.', options: ['크레파스', '색연필'], answer: '크레파스' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 가지에 초록 테두리가 생기고, 틀리면 카드가 돌아와요. 칠하기는 한 가지 색만 써요.',
      base: '모두 나눈 뒤 확인을 눌러요. 두 가지 색으로 칠해 견주어요.',
      challenge: '재료와 상관없는 함정 카드가 있어요. 꾹 눌러 칠할 때와 살살 칠할 때도 견주어 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 재료는 무엇으로 칠해도 똑같다고 여긴다 → 같은 칸을 두 재료로 칠해 나란히 보게 한다. ② 크레파스 손으로 옷·책을 만진다 → 칠한 뒤 손을 씻는 약속. ③ "무엇이 정답이에요?" 하고 묻는다 → 더 알맞은 재료가 있을 뿐 섞어 써도 된다고 말해 준다. 교구 문항은 칠해 본 경험을 정리하는 것이므로, 먼저 실제로 칠하게 한다.',
  }));

  lessons.push(L(26, {
    title: '여러 가지 종이를 만져 보고 쓰임 찾기',
    objective: '색종이·도화지·골판지·한지·신문지를 만져 보고 두께와 느낌을 견주어, 만들고 싶은 것에 알맞은 종이를 고를 수 있다.',
    illustration: ART('a paper texture table with stacked colored paper, thick drawing paper, wavy corrugated cardboard, soft Korean hanji and newspaper', '종이마다 느낌이 달라요', [
      { motif: 'leaf', x: 110, y: 214, color: 'mint' }, { motif: 'tree', x: 380, y: 214 }, { motif: 'cloud', x: 300, y: 80, s: 0.6 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"눈을 감고 만져 보세요. 어떤 종이일까요?" 짝에게 종이 한 장씩 건네 눈을 감고 만져 맞혀 보게 한다. 시연 단추로 \'울퉁불퉁 단단해요\'가 골판지 가지로 가는 모습을 보여 준다. 종이마다 두께와 느낌이 다르다는 것을 짚는다.',
        student: '책상 위 종이를 하나씩 만져 보고 느낌을 한 낱말로 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '만져 보니', slots: ['색종이', '골판지'], cards: ['얇고 잘 접혀요', '울퉁불퉁 단단해요'], shuffle: false }, sequence: [{ sort: { '색종이': ['얇고 잘 접혀요'], '골판지': ['울퉁불퉁 단단해요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 만져 보고 느낌 나누기', minutes: 13, tool: 'mindmap',
            teacher: '"접어 보고, 살짝 구겨 보고, 손가락으로 쓸어 보세요." 종이마다 세 가지를 해 보게 한다. 한지는 잘 찢어지지 않고 질기다는 것, 신문지는 얇아서 잘 찢어진다는 것을 직접 당겨 보며 확인한다. 찢기 활동에서 친구 쪽으로 세게 당기지 않게 한다.',
            task: '종이를 만지고 접고 당겨 본 느낌을 종이 가지에 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '종이의 느낌 카드를 알맞은 종이 가지에 나누어 보세요.', toolOptions: { topic: '만져 보니', slots: ['색종이', '도화지', '골판지'], cards: ['얇아서 잘 접혀요', '두껍고 매끈해요', '물결 모양 골이 있어요'] },
                target: { sort: { '색종이': ['얇아서 잘 접혀요'], '도화지': ['두껍고 매끈해요'], '골판지': ['물결 모양 골이 있어요'] } }, difficulty: 0.1 },
              { prompt: '한지와 신문지를 당겨 본 느낌을 나누어 보세요.', toolOptions: { topic: '당겨 보니', slots: ['한지', '신문지'], cards: ['잘 찢어지지 않고 질겨요', '쉽게 찢어져요', '부드럽고 빛이 비쳐요', '글자가 인쇄되어 있어요'] },
                target: { sort: { '한지': ['잘 찢어지지 않고 질겨요', '부드럽고 빛이 비쳐요'], '신문지': ['쉽게 찢어져요', '글자가 인쇄되어 있어요'] } }, difficulty: 0.2,
                predict: { q: '한지와 신문지 가운데 더 잘 찢어지는 것은?', options: ['한지', '신문지'], answer: 1 },
                conclude: '한지는 질겨서 잘 찢어지지 않고, 신문지는 얇아 쉽게 찢어져요.' },
              { prompt: '두꺼운 종이만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '두꺼운 종이', cards: ['골판지', '도화지', '색종이', '신문지'] },
                target: { pick: ['골판지', '도화지'] }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 만들고 싶은 것에 맞는 종이', minutes: 13, tool: 'mindmap',
            teacher: '"종이비행기를 골판지로 접으면 어떻게 될까요?" 직접 골판지를 접어 보며 잘 접히지 않는 것을 확인한다. 만들고 싶은 것의 쓰임(접기, 세우기, 그리기)을 먼저 말한 뒤 종이를 고르게 한다.',
            task: '만들고 싶은 것과 알맞은 종이를 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '만들고 싶은 것과 알맞은 종이를 이어 보세요.', toolOptions: { mode: 'match', topic: '어떤 종이로?', slots: [{ id: 's1', label: '종이비행기 접기' }, { id: 's2', label: '세워 두는 집 만들기' }, { id: 's3', label: '크레파스로 그림 그리기' }], cards: ['색종이', '골판지', '도화지'] },
                target: { match: { s1: '색종이', s2: '골판지', s3: '도화지' } }, difficulty: 0.15 },
              { prompt: '빛이 은은하게 비치는 등을 만들 종이를 골라 보세요.', toolOptions: { mode: 'pick', basket: '등 만들 종이', cards: ['한지', '골판지', '신문지'] },
                target: { pick: ['한지'] }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['한지', '골판지', '신문지', '은박 종이'] } } } },
              { prompt: '종이를 고른 까닭을 이어 보세요.', toolOptions: { mode: 'match', topic: '왜 골랐을까?', slots: [{ id: 's1', label: '색종이로 꽃을 접어요' }, { id: 's2', label: '골판지로 상자를 만들어요' }], cards: ['얇아서 잘 접혀요', '단단해서 잘 서요'] },
                target: { match: { s1: '얇아서 잘 접혀요', s2: '단단해서 잘 서요' } }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 만져 본 종이 가운데 다음에 꼭 써 보고 싶은 종이와 만들고 싶은 것을 말해 볼까요?" 남은 종이 조각은 \'다시 쓸 종이\' 상자에 모은다(41~42차시에 정리 약속으로 다시 다룬다).',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '어떤 종이로?', slots: [{ id: 'e1', label: '딱지 접기' }, { id: 'e2', label: '튼튼한 필통 꽂이 만들기' }], cards: ['색종이', '골판지'] }, prompt: '만들고 싶은 것과 알맞은 종이를 이어 보세요.', target: { match: { e1: '색종이', e2: '골판지' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '잘 찢어지지 않고 질긴 종이는 무엇인가요?', options: ['신문지', '한지', '휴지'], answer: 1, difficulty: 0.15, explain: '한지는 섬유가 길게 얽혀 있어 질겨요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '여러 가지 종이',
      items: [
        { type: 'table', prompt: '종이를 만져 보고 느낌을 쓰세요.', columns: ['종이', '두께', '느낌'], cells: [['색종이', '', ''], ['골판지', '', ''], ['한지', '', '']] },
        { type: 'choice', prompt: '종이비행기를 접기 좋은 종이에 ○ 하세요.', options: ['색종이', '골판지', '두꺼운 상자'], answer: '색종이' },
        { type: 'blank', prompt: '빈칸을 채우세요.', text: '골판지는 ___해서 세워 두는 것을 만들기 좋아요.', answer: '단단' },
        { type: 'draw', prompt: '골판지로 만들고 싶은 것을 그려 보세요.' },
      ],
      easy: {
        note: '접어 보고, 당겨 보고, 쓸어 보며 느낌을 찾아요.',
        items: [
          { type: 'choice', prompt: '얇아서 잘 접히는 종이에 ○ 하세요.', options: ['색종이', '골판지'], answer: '색종이' },
          { type: 'choice', prompt: '울퉁불퉁한 종이에 ○ 하세요.', options: ['골판지', '도화지'], answer: '골판지' },
          { type: 'draw', prompt: '좋아하는 종이로 만든 것을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 가지에 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '모두 나눈 뒤 확인을 눌러요.',
      challenge: '종이 가짓수가 더 많고, 고른 까닭을 종이 느낌으로 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 종이는 다 똑같다고 여긴다 → 접기·구기기·당기기 세 가지로 직접 견준다. ② 한지를 신문지처럼 쉽게 찢어지는 종이로 안다 → 두 종이를 당겨 보게 한다. ③ 찢기 놀이가 장난으로 번진다 → 내 앞에서 내 쪽으로 당기는 약속. 종이는 모둠마다 같은 크기로 미리 잘라 두면 견주기 쉽다.',
  }));

  lessons.push(L(27, {
    title: '가위를 안전하게 쓰고 건네는 약속',
    objective: '가위를 안전하게 잡고 들고 다니며, 친구에게 건네는 방법을 차례대로 말하고 해 볼 수 있다.',
    illustration: ART('a paper child handing safety scissors to a friend with the blades held closed in the palm and the handles facing the friend', '가위는 이렇게 건네요', [
      { motif: 'house', x: 120, y: 214, color: 'sky' }, { motif: 'tree', x: 370, y: 214 }, { motif: 'star', x: 250, y: 84, s: 0.6 }]),
    safety: ['가위를 쓰지 않을 때는 날을 닫아 가위통에 꽂아요.', '가위를 들고 걸을 때는 날을 감싸 쥐고 아래로 향하게 해요.', '가위로 장난치거나 친구 쪽으로 날을 향하지 않아요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"가위 날이 친구 얼굴 쪽을 향하면 어떤 일이 생길 수 있을까요?" 안전 가위를 들고 \'날을 감싸 쥐고 손잡이를 내미는\' 모습을 천천히 보여 준다. 시연 단추로 가위 건네는 차례 카드가 놓이는 모습을 보여 준다. 오늘은 오리기보다 먼저 잡고·들고·건네는 약속을 익힌다고 알린다.',
        student: '가위를 쓰다가 놀랐던 일이 있으면 말해 봐요.',
        demo: { tool: 'story', options: { cards: [{ id: 'close', text: '가위 날을 닫아요', motif: 'leaf' }, { id: 'hold', text: '날을 손으로 감싸 쥐어요', motif: 'star' }, { id: 'give', text: '손잡이를 친구 쪽으로 내밀어요', motif: 'flower' }], slots: ['1', '2', '3'], shuffle: false }, sequence: [{ order: ['close', 'hold', 'give'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 가위 건네고 들고 다니기 (연습)', minutes: 12, tool: 'story', pair: true,
            teacher: '"짝에게 가위를 건네 볼까요? 받는 사람은 손잡이를 잡고 \'고마워\'라고 말해요." 짝끼리 세 번씩 주고받게 한다. 날 쪽을 내미는 학생이 있으면 그 자리에서 멈추고 다시 하게 한다. 교실을 한 바퀴 걸을 때 날을 감싸 쥐고 아래로 향하게 한다.',
            task: '가위 건네는 차례를 카드로 놓고, 짝과 실제로 주고받아 봐요.',
            levels: CARD_LV,
            items: [
              { prompt: '가위를 건네는 차례대로 놓아 보세요.', toolOptions: { slots: ['1', '2', '3', '4'], cards: [{ id: 'close', text: '가위 날을 닫아요', motif: 'leaf' }, { id: 'hold', text: '날을 감싸 쥐어요', motif: 'star' }, { id: 'give', text: '손잡이를 내밀어요', motif: 'flower' }, { id: 'thanks', text: '"고마워" 하고 받아요', motif: 'sun' }] },
                target: { order: ['close', 'hold', 'give', 'thanks'] }, difficulty: 0.15 },
              { prompt: '짝과 가위를 세 번 주고받고 "다 했어요"를 누르세요.', free: true },
              { prompt: '가위를 들고 걸을 때 알맞은 말을 말풍선에 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['날을 아래로', '날을 위로', '빙빙 돌리며'], slots: [{ id: 'b1', who: '준호', motif: 'leaf', label: '가위를 들고 걸을 때는 ___ 해요.' }] },
                target: { fill: { b1: '날을 아래로' } }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 가위 안전 약속 점검', minutes: 14, tool: 'kitchen',
            teacher: '"이 행동은 안전한가요, 위험한가요?" 안전 약속만 표시하게 한다. \'손잡이에 손가락을 넣고 돌리기\'를 재미있다고 하는 학생에게 가위가 빠져 날아갈 수 있다는 것을 말해 준다.',
            task: '가위를 쓸 때 지킬 안전 약속만 골라 표시해요.',
            levels: CARD_LV,
            items: [
              { prompt: '가위를 쓸 때 지킬 약속만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '가위 안전 약속', items: [{ id: 'sit', text: '자리에 앉아서 써요' }, { id: 'close', text: '안 쓸 때는 날을 닫아요' }, { id: 'spin', text: '손가락에 끼워 돌려요' }, { id: 'case', text: '다 쓰면 가위통에 꽂아요' }] },
                target: { checklist: ['sit', 'close', 'case'] }, difficulty: 0.1 },
              { prompt: '안전한 행동과 위험한 행동으로 나누어 보세요.', toolOptions: { slots: [{ id: 'safe', label: '안전해요' }, { id: 'danger', label: '위험해요' }], cards: ['종이만 오려요', '친구 머리카락을 잘라요', '날을 내 몸 밖으로 향해요', '가위를 들고 뛰어요'] },
                target: { sort: { safe: ['종이만 오려요', '날을 내 몸 밖으로 향해요'], danger: ['친구 머리카락을 잘라요', '가위를 들고 뛰어요'] } }, difficulty: 0.15,
                predict: { q: '가위를 들고 뛰면 어떻게 될까요?', options: ['넘어지면 다칠 수 있어요', '괜찮아요'], answer: 0 },
                conclude: '가위는 앉아서 종이만 오리고, 다 쓰면 날을 닫아 꽂아요.' },
              { prompt: '친구가 가위 날을 내 쪽으로 내밀어요. 어떻게 할까요?', tool: 'kitchen', toolOptions: { mode: 'order', cards: ['"잠깐!" 하고 멈춰요', '"손잡이를 내밀어 줘" 말해요', '손잡이를 잡고 받아요'] },
                target: { order: ['"잠깐!" 하고 멈춰요', '"손잡이를 내밀어 줘" 말해요', '손잡이를 잡고 받아요'] }, difficulty: 0.15 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"가위 약속 세 가지를 손가락으로 세며 말해 볼까요?" 앉아서 쓰기, 날 닫기, 손잡이 내밀어 건네기를 함께 말한다. 교실 가위통 위에 가위 안전 그림을 붙인다. 출구 1번을 틀린 학생은 한 번 더 짝과 주고받아 본다.',
        exitTicket: [
          { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '가위를 다 쓰면', items: [{ id: 'close', text: '날을 닫아요' }, { id: 'case', text: '가위통에 꽂아요' }, { id: 'floor', text: '바닥에 던져 둬요' }] }, prompt: '가위를 다 쓴 뒤 할 일만 표시해 보세요.', target: { checklist: ['close', 'case'] }, difficulty: 0.05 },
          { type: 'choice', prompt: '친구에게 가위를 건넬 때 어느 쪽을 내미나요?', options: ['날 쪽', '손잡이 쪽', '아무 쪽이나'], answer: 1, difficulty: 0.05, explain: '날을 감싸 쥐고 손잡이를 내밀어야 친구가 안전해요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '가위 안전 약속',
      items: [
        { type: 'figure', wide: true, prompt: '가위를 건네는 차례대로 1, 2, 3을 쓰세요.', tool: 'story', figures: [{ options: { cards: [{ id: 'give', text: '손잡이를 내밀어요', motif: 'flower' }, { id: 'close', text: '날을 닫아요', motif: 'leaf' }, { id: 'hold', text: '날을 감싸 쥐어요', motif: 'star' }], shuffle: false }, caption: '' }], answer: '날을 닫아요 1, 감싸 쥐어요 2, 손잡이를 내밀어요 3' },
        { type: 'check', prompt: '가위 안전 약속에 ✓ 하세요.', options: ['앉아서 써요', '날을 닫아 둬요', '들고 뛰어요', '손잡이를 내밀어 건네요'] },
        { type: 'choice', prompt: '가위를 들고 걸을 때 날은 어디로 향하나요?', options: ['아래', '위', '친구 쪽'], answer: '아래' },
        { type: 'draw', prompt: '가위를 안전하게 건네는 모습을 그려 보세요.' },
      ],
      easy: {
        note: '가위는 날을 감싸 쥐고, 손잡이를 내밀어요.',
        items: [
          { type: 'choice', prompt: '안전한 행동에 ○ 하세요.', options: ['앉아서 오려요', '들고 뛰어요'], answer: '앉아서 오려요' },
          { type: 'choice', prompt: '건넬 때 내미는 쪽에 ○ 하세요.', options: ['손잡이', '날'], answer: '손잡이' },
          { type: 'draw', prompt: '가위통에 꽂힌 가위를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 초록 테두리가 생기고, 틀리면 카드가 돌아와요. 실제 연습은 교사와 함께 한 번 더 해요.',
      base: '차례를 모두 놓은 뒤 확인을 눌러요. 짝과 세 번 주고받아요.',
      challenge: '친구에게 가위 약속을 말로 알려 주는 역할을 맡아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 날 쪽을 내밀어 건넨다 → 그 자리에서 멈추고 다시 하게 한다. ② 쓰지 않는 가위를 벌린 채 책상에 둔다 → 날을 닫아 가위통에. ③ 가위를 손가락에 끼워 돌린다 → 빠져 날아갈 수 있다는 것을 말한다. 1학년은 끝이 둥근 안전 가위를 쓰고, 왼손잡이 학생에게는 왼손용 가위를 준비한다.',
  }));

  lessons.push(L(28, {
    title: '딱풀과 물풀을 알맞게 골라 쓰기',
    objective: '딱풀과 물풀의 다른 점을 알고, 붙이려는 재료에 알맞은 풀을 골라 뚜껑을 닫는 데까지 바르게 쓸 수 있다.',
    illustration: ART('a glue stick and a bottle of liquid glue on a craft table, paper leaves and a cotton ball being attached to a picture', '어떤 풀이 좋을까요?', [
      { motif: 'leaf', x: 120, y: 214 }, { motif: 'flower', x: 360, y: 226, color: 'buttercup' }, { motif: 'tree', x: 250, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"딱풀과 물풀은 어떻게 다를까요?" 두 풀을 보여 주고 하나는 고체, 하나는 물처럼 흐른다는 것을 손에 조금 묻혀 비교해 보인다. 시연 단추로 \'빨리 말라요\'가 딱풀 가지로 가는 모습을 보여 준다. 뚜껑을 닫지 않으면 굳는다는 것도 짚는다.',
        student: '딱풀과 물풀 가운데 써 본 풀을 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '풀 견주기', slots: ['딱풀', '물풀'], cards: ['빨리 말라요', '물처럼 흘러요'], shuffle: false }, sequence: [{ sort: { '딱풀': ['빨리 말라요'], '물풀': ['물처럼 흘러요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 두 풀 견주어 보기', minutes: 13, tool: 'mindmap',
            teacher: '"종이 두 장에 각각 딱풀과 물풀을 발라 붙여 보세요. 어느 쪽이 먼저 말랐나요? 종이가 우는 쪽은요?" 직접 붙여 본 뒤 카드를 나누게 한다. 물풀을 많이 짜 종이가 젖는 학생이 있으면 그대로 두고 마른 뒤 어떻게 되었는지 함께 본다.',
            task: '두 풀을 써 보고 알게 된 점을 풀 가지에 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '써 보고 알게 된 점을 풀 가지에 나누어 보세요.', toolOptions: { topic: '풀 견주기', slots: ['딱풀', '물풀'], cards: ['빨리 말라요', '물처럼 흘러요', '종이에 문질러 발라요', '많이 짜면 종이가 젖어요'] },
                target: { sort: { '딱풀': ['빨리 말라요', '종이에 문질러 발라요'], '물풀': ['물처럼 흘러요', '많이 짜면 종이가 젖어요'] } }, difficulty: 0.15 },
              { prompt: '붙일 것과 더 알맞은 풀을 이어 보세요.', toolOptions: { mode: 'match', topic: '어떤 풀로?', slots: [{ id: 's1', label: '색종이를 도화지에' }, { id: 's2', label: '솜을 도화지에' }], cards: ['딱풀', '물풀'] },
                target: { match: { s1: '딱풀', s2: '물풀' } }, difficulty: 0.2,
                predict: { q: '폭신한 솜은 딱풀로 문지르면 잘 붙을까요?', options: ['잘 붙어요', '잘 안 붙어요'], answer: 1 },
                conclude: '울퉁불퉁하거나 폭신한 재료는 물풀이 더 잘 붙어요.' },
              { prompt: '풀을 다 쓴 뒤 할 일만 골라 보세요.', toolOptions: { mode: 'pick', basket: '다 쓴 뒤', cards: ['뚜껑을 꼭 닫아요', '딱풀을 끝까지 내려 넣어요', '뚜껑을 바닥에 둬요'] },
                target: { pick: ['뚜껑을 꼭 닫아요', '딱풀을 끝까지 내려 넣어요'] }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 풀칠하는 차례', minutes: 13, tool: 'kitchen',
            teacher: '"풀은 어느 면에 바를까요? 앞면일까요, 뒷면일까요?" 보이는 앞면에 풀칠을 하는 학생이 많으니, 붙일 조각의 뒷면에 바른다는 것을 직접 보여 준다. 받침 종이를 깔고 바르면 책상이 끈적이지 않는다는 것도 짚는다.',
            task: '풀칠하는 차례를 놓고, 바르게 쓰는 방법을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '풀칠해서 붙이는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['받침 종이를 깔아요', '조각 뒷면에 풀을 발라요', '붙일 자리에 대고 눌러요', '풀 뚜껑을 닫아요'] },
                target: { order: ['받침 종이를 깔아요', '조각 뒷면에 풀을 발라요', '붙일 자리에 대고 눌러요', '풀 뚜껑을 닫아요'] }, difficulty: 0.15 },
              { prompt: '풀을 바르게 쓰는 방법만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '풀 쓰는 방법', items: [{ id: 'back', text: '뒷면에 발라요' }, { id: 'paper', text: '받침 종이를 깔아요' }, { id: 'desk', text: '책상에 바로 발라요' }, { id: 'close', text: '쓰고 나면 뚜껑을 닫아요' }] },
                target: { checklist: ['back', 'paper', 'close'] }, difficulty: 0.1 },
              { prompt: '풀 뚜껑을 열어 둔 친구에게 할 말을 골라 보세요.', tool: 'kitchen', toolOptions: { mode: 'match', slots: [{ id: 's1', label: '뚜껑을 열어 둔 친구에게' }], cards: ['"풀이 마르니 닫아 줄래?"', '"풀 말라도 몰라"'] },
                target: { match: { s1: '"풀이 마르니 닫아 줄래?"' } }, difficulty: 0.05 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 붙인 종이 두 장을 견주어 볼까요? 물풀을 많이 짠 종이는 어떻게 되었나요?" 다음 시간들(33~34차시)에 풀을 알맞은 양만큼 바르는 연습을 한다고 예고한다. "우리 모둠 풀 뚜껑이 모두 닫혔나요? 하나씩 들어 보여 주세요."',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '어떤 풀로?', slots: [{ id: 'e1', label: '단추를 도화지에' }, { id: 'e2', label: '신문지 조각을 도화지에' }], cards: ['물풀', '딱풀'] }, prompt: '붙일 것과 더 알맞은 풀을 이어 보세요.', target: { match: { e1: '물풀', e2: '딱풀' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '풀은 조각의 어느 면에 바르나요?', options: ['보이는 앞면', '붙일 뒷면', '양쪽 모두 많이'], answer: 1, difficulty: 0.1, explain: '붙일 조각의 뒷면에 발라야 앞면이 깨끗해요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '딱풀과 물풀',
      items: [
        { type: 'table', prompt: '두 풀을 견주어 쓰세요.', columns: ['', '딱풀', '물풀'], cells: [['생김새', '', ''], ['마르는 빠르기', '', ''], ['붙이기 좋은 것', '', '']] },
        { type: 'choice', prompt: '솜을 붙일 때 더 알맞은 풀에 ○ 하세요.', options: ['딱풀', '물풀'], answer: '물풀' },
        { type: 'check', prompt: '풀을 바르게 쓰는 방법에 ✓ 하세요.', options: ['뒷면에 발라요', '받침 종이를 깔아요', '뚜껑을 닫아요', '책상에 발라요'] },
        { type: 'short', prompt: '풀을 쓰고 나서 내가 할 일을 쓰세요.' },
      ],
      easy: {
        note: '풀은 뒷면에, 쓰고 나면 뚜껑을 꼭!',
        items: [
          { type: 'choice', prompt: '빨리 마르는 풀에 ○ 하세요.', options: ['딱풀', '물풀'], answer: '딱풀' },
          { type: 'choice', prompt: '풀을 바르는 면에 ○ 하세요.', options: ['뒷면', '앞면'], answer: '뒷면' },
          { type: 'draw', prompt: '뚜껑을 닫은 풀을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 가지에 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '모두 나눈 뒤 확인을 눌러요.',
      challenge: '붙일 재료마다 풀을 고른 까닭을 말하고, 붙인 종이 두 장을 견주어 설명해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 보이는 앞면에 풀을 바른다 → 뒷면에 바르는 모습을 직접 보여 준다. ② 물풀을 많이 짜 종이가 젖고 운다 → 마른 뒤 모습을 함께 보고 34차시로 잇는다. ③ 뚜껑을 닫지 않아 풀이 굳는다 → 다 쓴 뒤 뚜껑 점검을 모둠 약속으로 정한다. 솜·단추처럼 종이가 아닌 재료는 물풀이 더 잘 붙지만, 마르는 데 시간이 걸린다는 것도 함께 말한다.',
  }));

  lessons.push(L(29, {
    title: '힘을 바꿔 칠하고 진한 색과 연한 색 맞대기',
    objective: '크레파스를 꾹꾹 눌러 칠할 때와 살살 칠할 때를 견주고, 진한 바탕에 연한 조각을 맞대어 눈에 띄는 그림을 꾸밀 수 있다.',
    illustration: ART('a paper night sky colored deep blue with bright yellow paper stars touching it, next to a pale morning sky colored softly', '꾹꾹, 살살', [
      { motif: 'star', x: 120, y: 90, s: 0.7 }, { motif: 'moon', x: 380, y: 84, s: 0.7 }, { motif: 'tree', x: 250, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"같은 크레파스로 칠했는데 왜 한쪽이 더 진할까요?" 같은 파랑 크레파스로 한 칸은 꾹꾹, 한 칸은 살살 칠한 것을 보여 준다. 지난 시간 "재료는 무엇으로 칠해도 똑같다"던 생각을 떠올리며, 같은 재료라도 힘에 따라 달라진다는 것을 짚는다. 시연 단추로 \'진하고 또렷해요\'가 꾹꾹 가지로 가는 모습을 보여 준다.',
        student: '손에 힘을 주었다가 빼 보며 크레파스를 잡아 봐요.',
        demo: { tool: 'mindmap', options: { topic: '힘을 바꾸면', slots: ['꾹꾹 눌러', '살살'], cards: ['진하고 또렷해요', '연하고 부드러워요'], shuffle: false }, sequence: [{ sort: { '꾹꾹 눌러': ['진하고 또렷해요'], '살살': ['연하고 부드러워요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 꾹꾹·살살 칠해 견주기', minutes: 12, tool: 'mindmap',
            teacher: '"하나, 둘, 셋 하면 꾹꾹! 이번에는 살살!" 구령에 맞춰 활동지 두 칸을 칠하게 한다. 너무 세게 눌러 크레파스가 부러지는 학생에게 "손목이 아닌 손가락 힘으로 눌러 봐요"라고 말한다. 칠한 뒤 두 칸을 멀리서 견주어 보게 한다.',
            task: '힘을 바꿔 칠해 보고, 알게 된 점과 어울리는 그림을 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '두 칸을 칠했으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '칠해 보고 알게 된 점을 힘 가지에 나누어 보세요.', toolOptions: { topic: '힘을 바꾸면', slots: ['꾹꾹 눌러', '살살'], cards: ['종이 결이 안 보여요', '종이 결이 비쳐 보여요', '색이 짙어요', '색이 옅어요'] },
                target: { sort: { '꾹꾹 눌러': ['종이 결이 안 보여요', '색이 짙어요'], '살살': ['종이 결이 비쳐 보여요', '색이 옅어요'] } }, difficulty: 0.15,
                predict: { q: '같은 크레파스로 살살 칠하면 어떻게 될까요?', options: ['더 진해져요', '더 연해져요', '똑같아요'], answer: 1 },
                conclude: '같은 재료도 누르는 힘에 따라 진하기가 달라져요.' },
              { prompt: '그리고 싶은 것과 어울리는 칠하기를 이어 보세요.', toolOptions: { mode: 'match', topic: '어떻게 칠할까?', slots: [{ id: 's1', label: '깜깜한 밤하늘' }, { id: 's2', label: '뿌연 아침 안개' }], cards: ['꾹꾹 눌러', '살살'] },
                target: { match: { s1: '꾹꾹 눌러', s2: '살살' } }, difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 진한 바탕에 연한 조각 맞대기', minutes: 14, tool: 'collage',
            teacher: '"까만 밤하늘에 노란 별을 붙이면 어때요? 파란 별을 붙이면요?" 두 가지를 칠판에 붙여 견주어 보여 준다. 연한 조각이 진한 바탕에 닿아야 또렷하다는 것을 짚고, 판에서 조각을 바탕에 맞대어 붙이게 한다.',
            task: '진한 바탕 조각에 연한 조각을 맞대어 눈에 띄게 꾸며요.',
            levels: {
              easy: { shapes: ['star', 'circle', 'rect'], colors: ['검정', '보라', '파랑', '노랑', '하양'], sizes: ['m', 'l'] },
              base: { shapes: ['star', 'circle', 'rect', 'leaf', 'square'], colors: ['검정', '보라', '파랑', '갈색', '노랑', '하양', '분홍'] },
              challenge: {},
            },
            items: [
              { prompt: '검정 밤하늘에 노랑 별을 두 개 이상 맞대어 붙여 보세요.', state: { pieces: [{ shape: 'rect', color: '검정', size: 'l', x: 280, y: 200, r: 0 }] }, target: { contrast: 'light-dark', has: [{ shape: 'star', color: '노랑', min: 2 }] }, difficulty: 0.15,
                predict: { q: '검정 바탕에 더 잘 보이는 별은?', options: ['노랑 별', '파랑 별'], answer: 0 },
                conclude: '진한 바탕에 연한 색을 맞대면 멀리서도 또렷해요.' },
              { prompt: '갈색 나무줄기에 하양 꽃을 세 개 이상 맞대어 붙여 보세요.', state: { pieces: [{ shape: 'rect', color: '갈색', size: 'l', x: 280, y: 220, r: 90 }] }, target: { contrast: 'light-dark', has: [{ color: '하양', min: 3 }] }, difficulty: 0.2 },
              { prompt: '보라 밤바다 바탕을 놓고, 연한 색 물고기를 맞대어 꾸며 보세요.', target: { contrast: 'light-dark', has: [{ color: '보라', min: 1 }], pieces: { min: 3 } }, difficulty: 0.25,
                predict: { q: '파랑 바다에 노랑 물고기와 보라 밤바다에 노랑 물고기 가운데 더 또렷한 것은?', options: ['파랑 바다', '보라 밤바다'], answer: 1 },
                conclude: '파랑은 아주 진한 색이 아니에요. 연한 조각은 검정·보라·갈색처럼 진한 바탕에서 가장 또렷해요.' },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"같은 크레파스였는데 진하기가 달랐지요? 재료가 같아도 칠하는 힘이 다르면 달라져요." 짝의 판을 보고 가장 또렷한 곳을 손가락으로 가리키게 한다. 부러진 크레파스는 버리지 말고 모아 두었다가 겹쳐 칠하기에 쓴다고 말한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '어떻게 칠할까?', slots: [{ id: 'e1', label: '진한 까만 머리카락' }, { id: 'e2', label: '연한 분홍 볼' }], cards: ['꾹꾹 눌러', '살살'] }, prompt: '그리고 싶은 것과 어울리는 칠하기를 이어 보세요.', target: { match: { e1: '꾹꾹 눌러', e2: '살살' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '보라 바탕에 붙였을 때 가장 또렷한 조각은?', options: ['하양 조각', '파랑 조각', '검정 조각'], answer: 0, difficulty: 0.2, explain: '진한 보라에 연한 하양이 맞닿으면 또렷해요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '꾹꾹, 살살',
      items: [
        { type: 'draw', prompt: '한 칸은 꾹꾹 눌러, 한 칸은 살살 같은 색으로 칠하세요.' },
        { type: 'choice', prompt: '더 진하게 칠해지는 것에 ○ 하세요.', options: ['꾹꾹 눌러 칠하기', '살살 칠하기'], answer: '꾹꾹 눌러 칠하기' },
        { type: 'choice', prompt: '검정 바탕에 붙이면 잘 보이는 조각에 ○ 하세요.', options: ['노랑', '갈색', '보라'], answer: '노랑' },
        { type: 'draw', prompt: '진한 바탕에 연한 색으로 별이나 꽃을 그려 보세요.' },
      ],
      easy: {
        note: '두 칸을 멀리서 보며 어느 쪽이 진한지 말해요.',
        items: [
          { type: 'draw', prompt: '꾹꾹 눌러 한 칸 칠하세요.' },
          { type: 'draw', prompt: '살살 한 칸 칠하세요.' },
          { type: 'choice', prompt: '더 연한 칸에 ○ 하세요.', options: ['살살 칠한 칸', '꾹꾹 칠한 칸'], answer: '살살 칠한 칸' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 가지에 초록 테두리가 생기고, 판에서는 색이 네 가지만 나와요.',
      base: '모두 나눈 뒤 확인을 눌러요. 바탕과 조각을 직접 골라요.',
      challenge: '모든 색과 모양을 쓰고, 바다 바탕도 스스로 놓아요. 진하기를 세 단계로 칠해 보아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 재료가 같으면 칠한 모습도 늘 같다고 여긴다 → 같은 크레파스로 힘만 바꿔 두 칸을 칠하게 한다. ② 너무 세게 눌러 크레파스가 부러진다 → 손가락 힘으로 누르게 하고, 부러진 조각은 모아 둔다. ③ 진한 바탕에 진한 조각을 붙여 잘 보이지 않는다 → 멀리서 보게 하고 연한 조각으로 바꾸어 견준다.',
  }));

  lessons.push(L(30, {
    title: '색종이 모양을 붙여 웃는 얼굴 꾸미기',
    objective: '동그라미·세모·반달 같은 색종이 모양을 골라 눈·코·입 자리에 붙여 얼굴을 꾸밀 수 있다.',
    illustration: ART('a smiling paper face made of a big yellow circle, two small black circles as eyes, a small orange triangle nose and a red half-moon mouth', '모양으로 얼굴을 만들어요', [
      { motif: 'flower', x: 110, y: 226, color: 'rose' }, { motif: 'star', x: 390, y: 84, s: 0.6 }, { motif: 'tree', x: 400, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"동그라미 하나, 세모 하나, 반달 하나로 무엇을 만들 수 있을까요?" 큰 노랑 동그라미 위에 조각을 하나씩 붙이며 웃는 얼굴을 만들어 보인다. 시연 단추로 판에 얼굴이 완성되는 모습을 보여 준다. 반달을 거꾸로 돌리면 우는 얼굴이 되는 것도 보여 준다.',
        student: '내 얼굴에서 동그라미 모양을 찾아 손가락으로 짚어 봐요.',
        demo: { tool: 'collage', options: { readOnly: true }, sequence: [{ has: [{ shape: 'circle', color: '노랑', size: 'l', n: 1 }, { shape: 'semi', color: '빨강', n: 1 }] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 얼굴 부분에 맞는 모양 찾기', minutes: 10, tool: 'mindmap',
            teacher: '"눈은 어떤 모양을 닮았을까요? 귀는요?" 거울을 보며 얼굴 부분의 모양을 말해 보게 한다. 모양이 꼭 하나로 정해지지 않았다는 것도 말해 주고, 가장 닮은 모양을 고르게 한다.',
            task: '얼굴 부분과 가장 닮은 색종이 모양을 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '얼굴 부분과 가장 닮은 모양을 이어 보세요.', toolOptions: { mode: 'match', topic: '얼굴 모양', slots: [{ id: 's1', label: '동그란 눈' }, { id: 's2', label: '뾰족한 코' }, { id: 's3', label: '웃는 입' }], cards: ['동그라미', '세모', '반달'] },
                target: { match: { s1: '동그라미', s2: '세모', s3: '반달' } }, difficulty: 0.1 },
              { prompt: '반달을 돌렸을 때 생기는 얼굴을 이어 보세요.', toolOptions: { mode: 'match', topic: '반달을 돌리면', slots: [{ id: 's1', label: '반달 둥근 쪽이 아래' }, { id: 's2', label: '반달 둥근 쪽이 위' }], cards: ['웃는 얼굴', '슬픈 얼굴'] },
                target: { match: { s1: '웃는 얼굴', s2: '슬픈 얼굴' } }, difficulty: 0.2,
                predict: { q: '반달 입을 거꾸로 돌리면 어떤 얼굴이 될까요?', options: ['웃는 얼굴', '슬픈 얼굴'], answer: 1 },
                conclude: '같은 모양도 돌리는 방향에 따라 다른 표정이 돼요.' },
              { prompt: '얼굴 꾸미기에 쓸 모양만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '얼굴 재료', cards: ['동그라미', '반달', '세모', '물풀 뚜껑'] },
                target: { pick: ['동그라미', '반달', '세모'] }, difficulty: 0.05 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 판에 얼굴 꾸미기', minutes: 16, tool: 'collage',
            teacher: '"얼굴 바탕을 먼저 놓고, 눈·코·입 차례로 붙여요." 판에서 조각을 붙이고 옮기고 돌리는 방법을 함께 해 본다. 조각을 겹쳐 붙이는 학생에게 "눈이 바탕 위에 보이나요?" 하고 묻는다. 다 만든 학생은 활동지에 실제 색종이로 얼굴을 꾸민다.',
            task: '색종이 조각으로 얼굴 바탕과 눈·코·입을 꾸며요.',
            levels: {
              easy: { shapes: ['circle', 'triangle', 'semi'], colors: ['노랑', '검정', '빨강', '주황'], sizes: ['s', 'm', 'l'] },
              base: { shapes: ['circle', 'triangle', 'semi', 'heart', 'square'], colors: ['노랑', '검정', '빨강', '주황', '분홍', '갈색'] },
              challenge: {},
            },
            items: [
              { prompt: '노랑 얼굴에 검정 작은 동그라미 눈 두 개를 붙여 보세요.', state: { pieces: [{ shape: 'circle', color: '노랑', size: 'l', x: 280, y: 200, r: 0 }] }, target: { has: [{ shape: 'circle', color: '검정', size: 's', n: 2 }] }, difficulty: 0.1 },
              { prompt: '보기처럼 웃는 입을 만들어요. 빨강 반달을 얼굴 아래쪽 가운데에 놓아요.', state: { pieces: [{ shape: 'circle', color: '노랑', size: 'l', x: 280, y: 200, r: 0 }, { shape: 'circle', color: '검정', size: 's', x: 240, y: 180, r: 0 }, { shape: 'circle', color: '검정', size: 's', x: 320, y: 180, r: 0 }] },
                target: { match: [{ shape: 'circle', color: '노랑', size: 'l', x: 280, y: 200, r: 0 }, { shape: 'circle', color: '검정', size: 's', x: 240, y: 180, r: 0 }, { shape: 'circle', color: '검정', size: 's', x: 320, y: 180, r: 0 }, { shape: 'semi', color: '빨강', size: 'm', x: 280, y: 240, r: 0 }] }, difficulty: 0.25 },
              { prompt: '나만의 얼굴을 꾸미고, 해낸 것을 점검해 보세요.', target: { selfCheck: ['얼굴 바탕을 먼저 놓았어요', '눈·코·입을 모두 붙였어요', '표정을 짝에게 말했어요'], minPieces: 4 }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"짝의 얼굴은 어떤 표정인가요? 무엇을 보고 알았나요?" 입 모양과 눈 모양을 말로 짚게 한다. 실제 색종이로 꾸민 얼굴은 교실 뒤 \'우리 반 얼굴\' 판에 붙인다. 남은 조각은 \'다시 쓸 종이\' 상자에 넣는다.',
        exitTicket: [
          { type: 'tool', tool: 'collage', options: { shapes: ['circle', 'triangle', 'semi'], colors: ['노랑', '주황', '검정'] }, state: { pieces: [{ shape: 'circle', color: '노랑', size: 'l', x: 280, y: 200, r: 0 }] }, prompt: '노랑 얼굴에 주황 세모 코를 한 개 붙여 보세요.', target: { has: [{ shape: 'triangle', color: '주황', n: 1 }] }, difficulty: 0.05 },
          { type: 'choice', prompt: '고양이 귀를 만들기에 가장 알맞은 모양은?', options: ['세모', '반달', '긴 네모'], answer: 0, difficulty: 0.15, explain: '고양이 귀는 뾰족해서 세모를 닮았어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '모양으로 꾸민 얼굴',
      items: [
        { type: 'figure', wide: true, prompt: '보기 얼굴에서 쓴 모양을 모두 쓰세요.', tool: 'collage', figures: [{ options: { readOnly: true, printColors: false }, state: { pieces: [{ shape: 'circle', color: '노랑', size: 'l', x: 280, y: 200, r: 0 }, { shape: 'circle', color: '검정', size: 's', x: 240, y: 180, r: 0 }, { shape: 'circle', color: '검정', size: 's', x: 320, y: 180, r: 0 }, { shape: 'triangle', color: '주황', size: 's', x: 280, y: 210, r: 0 }, { shape: 'semi', color: '빨강', size: 'm', x: 280, y: 250, r: 0 }] }, caption: '쓴 모양: ____________' }], answer: '동그라미, 세모, 반달' },
        { type: 'choice', prompt: '웃는 입에 알맞은 모양에 ○ 하세요.', options: ['반달', '별', '네모'], answer: '반달' },
        { type: 'draw', prompt: '색종이를 오려 붙여 내 얼굴을 꾸미세요.' },
        { type: 'short', prompt: '내가 꾸민 얼굴의 표정을 쓰세요.' },
      ],
      easy: {
        note: '바탕 먼저, 그다음 눈·코·입!',
        items: [
          { type: 'choice', prompt: '눈에 알맞은 모양에 ○ 하세요.', options: ['동그라미', '세모'], answer: '동그라미' },
          { type: 'choice', prompt: '코에 알맞은 모양에 ○ 하세요.', options: ['세모', '반달'], answer: '세모' },
          { type: 'draw', prompt: '웃는 얼굴을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '판에 모양 세 가지와 색 네 가지만 나와요. 보기 얼굴을 보며 따라 붙여요.',
      base: '바탕부터 눈·코·입까지 스스로 놓아요.',
      challenge: '모든 모양을 쓰고, 귀·머리카락까지 꾸며 표정을 말로 설명해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 얼굴 바탕보다 눈을 먼저 붙여 바탕에 가려진다 → 큰 것에서 작은 것 차례를 말해 준다. ② 반달 방향을 바꾸면 표정이 바뀌는 것을 모른다 → 반달을 돌려 보이며 견준다. ③ 재료는 무엇이든 똑같다고 여겨 아무 조각이나 붙인다 → "어떤 모양이 코를 더 닮았나요?" 하고 묻는다.',
  }));

  lessons.push(L(31, {
    title: '자연물과 재활용품에서 만들기 재료 찾기',
    objective: '나뭇잎·솔방울 같은 자연물과 상자·병뚜껑 같은 재활용품을 구분하고, 안전하게 모을 수 있는 재료를 고를 수 있다.',
    illustration: ART('a paper basket holding fallen leaves, pine cones, a small cardboard box and plastic bottle caps, with a child washing a cap at the sink', '무엇으로 만들까요?', [
      { motif: 'leaf', x: 110, y: 214, color: 'mint' }, { motif: 'tree', x: 380, y: 214 }, { motif: 'flower', x: 250, y: 226, color: 'buttercup' }]),
    safety: ['깨진 유리·찌그러진 캔처럼 날카로운 것은 줍지 말고 어른께 알려요.', '재활용품은 씻어 말린 것만 써요.', '살아 있는 꽃과 나뭇가지는 꺾지 않고 떨어진 것만 모아요.', '작은 병뚜껑·구슬은 입에 넣지 않아요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"색종이가 없어도 만들기를 할 수 있을까요?" 솔방울과 병뚜껑으로 만든 작은 꽃을 보여 준다. 시연 단추로 \'솔방울\'이 자연물 가지로 가는 모습을 보여 준다. 오늘은 주변에서 재료를 찾되 안전하게 모으는 약속을 함께 정한다고 말한다.',
        student: '집에서 버리려던 것 가운데 만들기에 쓸 수 있는 것을 하나 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '만들기 재료', slots: ['자연물', '재활용품'], cards: ['솔방울', '병뚜껑'], shuffle: false }, sequence: [{ sort: { '자연물': ['솔방울'], '재활용품': ['병뚜껑'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 자연물과 재활용품 나누기', minutes: 12, tool: 'mindmap',
            teacher: '"자연에서 온 것일까요, 사람이 만들어 쓰고 남은 것일까요?" 실물 바구니에서 하나씩 꺼내며 묻는다. 돌멩이를 재활용품이라고 하는 학생에게 "누가 만들었나요?" 하고 되물어 생각하게 한다.',
            task: '모은 재료를 자연물과 재활용품으로 나누고, 쓸 수 있는 것을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '모은 재료를 알맞은 가지에 나누어 보세요.', toolOptions: { topic: '만들기 재료', slots: ['자연물', '재활용품'], cards: ['떨어진 나뭇잎', '작은 돌멩이', '우유갑', '휴지 심'] },
                target: { sort: { '자연물': ['떨어진 나뭇잎', '작은 돌멩이'], '재활용품': ['우유갑', '휴지 심'] } }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['떨어진 나뭇잎', '작은 돌멩이', '우유갑', '휴지 심', '조개껍데기', '과자 상자'] }, target: { sort: { '자연물': ['떨어진 나뭇잎', '작은 돌멩이', '조개껍데기'], '재활용품': ['우유갑', '휴지 심', '과자 상자'] } }, prompt: '여섯 가지 재료를 알맞은 가지에 나누어 보세요.' } } },
              { prompt: '안전하게 모을 수 있는 재료만 골라 보세요.', toolOptions: { mode: 'pick', basket: '모아도 돼요', cards: ['씻어 말린 병뚜껑', '깨진 유리 조각', '떨어진 솔방울', '뚜껑이 날카로운 캔'] },
                target: { pick: ['씻어 말린 병뚜껑', '떨어진 솔방울'] }, difficulty: 0.15,
                predict: { q: '깨진 유리 조각을 주우면 어떻게 될까요?', options: ['손을 벨 수 있어요', '괜찮아요'], answer: 0 },
                conclude: '날카로운 것은 줍지 않고 어른께 알려요.' },
              { prompt: '재료와 만들 수 있는 것을 이어 보세요.', toolOptions: { mode: 'match', topic: '무엇을 만들까?', slots: [{ id: 's1', label: '휴지 심' }, { id: 's2', label: '나뭇잎' }], cards: ['망원경', '나뭇잎 왕관'] },
                target: { match: { s1: '망원경', s2: '나뭇잎 왕관' } }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 재료 모으기 약속 정하기', minutes: 14, tool: 'emotion',
            teacher: '"화단에 핀 예쁜 꽃을 꺾어 와도 될까요?" 꽃이 아파하고 다른 친구들이 더 볼 수 없다는 것을 함께 생각한다. 재활용품은 씻어 말려 가져온다는 약속을 정하고, 칠판에 그림으로 붙인다.',
            task: '재료를 모을 때 생기는 일에서 알맞은 행동을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '화단의 꽃이 예뻐요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '서아', situation: '서아가 만들기에 쓰려고 화단의 꽃을 보고 있어요.', choices: [
                { id: 'pick', text: '꽃을 꺾어 가요', result: '꽃이 시들고 다른 친구들이 볼 수 없어요.', mood: '속상함', why: '꺾인 꽃은 다시 자랄 수 있을까요?' },
                { id: 'fallen', text: '바닥에 떨어진 꽃잎만 주워요', result: '화단은 그대로 예쁘고 재료도 생겼어요.', mood: '뿌듯함' },
                { id: 'many', text: '친구 것까지 잔뜩 꺾어요', result: '화단이 텅 비어 버렸어요.', mood: '미안함', why: '모두의 화단이 비면 어떤 마음이 들까요?' }] }, target: { choice: 'fallen' }, difficulty: 0.1 },
              { prompt: '우유갑을 씻지 않고 가져왔어요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '준호', situation: '준호가 마시고 남은 우유갑을 그대로 가방에 넣어 왔어요.', choices: [
                { id: 'use', text: '그대로 만들기에 써요', result: '냄새가 나고 끈적여요.', mood: '불편함', why: '남은 우유가 마르면 어떻게 될까요?' },
                { id: 'wash', text: '씻어 말린 뒤에 써요', result: '깨끗하고 냄새 없는 재료가 되었어요.', mood: '편안함' }] }, target: { choice: 'wash' }, difficulty: 0.1 },
              { prompt: '찌그러진 캔을 주운 친구의 걱정 크기를 골라 보세요.', toolOptions: { mode: 'scale', situation: '운동장에서 날카롭게 찌그러진 캔을 보았어요.', feeling: '걱정', after: '이럴 때는 만지지 말고 선생님께 알려요.' }, target: { level: [3, 5] }, difficulty: 0.15 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"다음 시간까지 집에서 씻어 말린 재활용품 하나를 가져와 볼까요?" 가져올 수 있는 것과 없는 것을 그림 표로 보여 준다. 작은 병뚜껑은 동생이 입에 넣지 않도록 봉투에 담아 오라고 말한다. 출구 2번을 틀린 학생은 실물 재료를 다시 만져 보며 나누게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', basket: '가져와도 돼요', cards: ['씻어 말린 요구르트 병', '먹다 남은 과자 봉지', '바닥의 도토리', '깨진 거울'] }, prompt: '가져와도 되는 재료만 골라 보세요.', target: { pick: ['씻어 말린 요구르트 병', '바닥의 도토리'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '다음 가운데 자연물은 무엇인가요?', options: ['페트병', '조개껍데기', '종이컵'], answer: 1, difficulty: 0.1, explain: '조개껍데기는 바다에서 온 자연물이에요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '자연물과 재활용품',
      items: [
        { type: 'table', prompt: '재료 이름을 알맞은 칸에 쓰세요. (솔방울, 상자, 나뭇잎, 병뚜껑)', columns: ['자연물', '재활용품'], cells: [['', ''], ['', '']] },
        { type: 'check', prompt: '안전하게 모을 수 있는 것에 ✓ 하세요.', options: ['떨어진 나뭇잎', '깨진 유리', '씻은 우유갑', '꺾은 꽃'] },
        { type: 'blank', prompt: '빈칸을 채우세요.', text: '재활용품은 ___ 말린 것만 가져와요.', answer: '씻어' },
        { type: 'draw', prompt: '모은 재료로 만들고 싶은 것을 그리세요.' },
      ],
      easy: {
        note: '누가 만들었는지 생각하면 쉽게 나눌 수 있어요.',
        items: [
          { type: 'choice', prompt: '자연물에 ○ 하세요.', options: ['솔방울', '휴지 심'], answer: '솔방울' },
          { type: 'choice', prompt: '재활용품에 ○ 하세요.', options: ['우유갑', '나뭇잎'], answer: '우유갑' },
          { type: 'choice', prompt: '주우면 안 되는 것에 ○ 하세요.', options: ['깨진 유리', '도토리'], answer: '깨진 유리' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 가지에 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '모두 나눈 뒤 확인을 눌러요.',
      challenge: '재료가 여섯 가지로 늘어나요. 만들 수 있는 것을 하나 더 생각해 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 예쁜 꽃을 꺾어 와도 된다고 여긴다 → 떨어진 것만 모으는 약속. ② 씻지 않은 재활용품을 가져온다 → 미리 가정 통신으로 "씻어 말려 보내 주세요"를 알린다. ③ 날카로운 캔·유리를 줍는다 → 만지지 말고 알리는 행동을 역할놀이로 해 본다. 알레르기가 있는 학생을 위해 꽃가루가 많은 재료는 피한다.',
  }));

  lessons.push(L(32, {
    title: '모둠 재료를 필요한 만큼 나누어 쓰기',
    objective: '모둠이 함께 쓰는 재료를 필요한 만큼만 가져가고, 다 쓰면 돌려놓으며, 부족할 때 말로 부탁할 수 있다.',
    illustration: ART('a paper group table with a shared tray of colored paper and glue in the middle, four children each taking a few sheets', '함께 쓰는 재료', [
      { motif: 'house', x: 110, y: 214, color: 'sky' }, { motif: 'star', x: 390, y: 84, s: 0.6 }, { motif: 'tree', x: 380, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"모둠 바구니의 색종이를 한 친구가 다 가져가면 어떻게 될까요?" 바구니 하나를 들고 한 학생이 다 가져가는 장면을 짧게 보여 준다. 시연 단추로 재료를 쓰는 차례가 놓이는 모습을 보여 준다. 오늘은 함께 쓰는 재료의 약속을 정한다고 말한다.',
        student: '모둠 바구니에 들어 있는 재료를 함께 세어 봐요.',
        demo: { tool: 'kitchen', options: { mode: 'order', cards: ['필요한 만큼 가져가요', '아껴서 써요', '남은 것은 돌려놓아요'], shuffle: false }, sequence: [{ order: ['필요한 만큼 가져가요', '아껴서 써요', '남은 것은 돌려놓아요'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 혼자 많이 가져가면 생기는 일', minutes: 13, tool: 'emotion',
            teacher: '"하준이가 빨강 색종이를 모두 가져갔어요. 민지는 어떤 마음일까요?" 마음의 크기를 손가락으로 나타내 보게 한다. "먼저 가져간 사람이 임자"라고 말하는 학생에게 모둠 재료는 모두의 것이라는 것을 짚는다.',
            task: '재료를 나누어 쓰는 장면에서 마음과 알맞은 행동을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '빨강 색종이가 하나도 남지 않았어요. 민지의 속상한 마음 크기를 골라 보세요.', toolOptions: { mode: 'scale', who: '민지', situation: '민지 차례에 바구니를 보니 빨강 색종이가 하나도 없어요.', feeling: '속상함', after: '이럴 때는 "나도 한 장 줄래?" 하고 부탁해요.' }, target: { level: [3, 5] }, difficulty: 0.1 },
              { prompt: '하준이가 색종이를 너무 많이 가져갔어요. 하준이는 어떻게 할까요?', toolOptions: { mode: 'branch', who: '하준', situation: '하준이 책상에 빨강 색종이가 열 장 있는데, 두 장만 쓰려고 해요.', choices: [
                { id: 'keep', text: '나중에 쓰려고 다 가지고 있어요', result: '친구들이 빨강을 하나도 쓰지 못해요.', mood: '속상함', why: '바구니가 비면 친구는 어떻게 꾸밀까요?' },
                { id: 'return', text: '쓸 만큼 두고 나머지는 돌려놓아요', result: '친구들도 빨강으로 꾸밀 수 있어요.', mood: '기쁨' },
                { id: 'hide', text: '서랍에 몰래 넣어 둬요', result: '모둠 재료가 자꾸 모자라요.', mood: '미안함', why: '함께 쓰는 재료를 숨기면 어떻게 될까요?' }] }, target: { choice: 'return' }, difficulty: 0.1,
                predict: { q: '쓰지 않을 색종이를 돌려놓으면 어떻게 될까요?', options: ['친구도 쓸 수 있어요', '나만 손해예요'], answer: 0 },
                conclude: '필요한 만큼만 가져가면 모두가 함께 쓸 수 있어요.' },
              { prompt: '풀이 하나뿐이에요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '모둠에 풀이 하나뿐인데 두 친구가 동시에 쓰려고 해요.', choices: [
                { id: 'grab', text: '먼저 잡은 사람이 끝까지 써요', result: '한 친구는 한참 기다리며 속상해요.', mood: '속상함', why: '기다리는 친구는 어떤 마음일까요?' },
                { id: 'turn', text: '"먼저 쓰고 줄게" 하고 차례를 정해요', result: '둘 다 마음 편하게 붙였어요.', mood: '편안함' }] }, target: { choice: 'turn' }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 우리 모둠 재료 약속', minutes: 13, tool: 'kitchen',
            teacher: '"재료가 모자랄 때는 뭐라고 말할까요?" 부탁하는 말과 빌려준 뒤 돌려받는 말을 짝과 연습한다. 정한 약속은 모둠 바구니에 붙인다. 약속을 잘 지킨 모둠은 바구니에 웃는 얼굴 붙임 딱지를 붙인다.',
            task: '모둠 재료를 쓸 때마다 지킬 약속을 정해요.',
            levels: CARD_LV,
            items: [
              { prompt: '모둠 재료를 쓰는 때마다 지킬 약속을 이어 보세요.', toolOptions: { mode: 'match', slots: [{ id: 'm1', label: '바구니에서 가져갈 때' }, { id: 'm2', label: '쓰다가 모자랄 때' }, { id: 'm3', label: '다 쓰고 남았을 때' }], cards: ['필요한 만큼 세어 가져가요', '친구에게 말로 부탁해요', '바구니에 돌려놓아요'] },
                target: { match: { m1: '필요한 만큼 세어 가져가요', m2: '친구에게 말로 부탁해요', m3: '바구니에 돌려놓아요' } }, difficulty: 0.15 },
              { prompt: '우리 모둠 재료 약속만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '모둠 재료 약속', items: [{ id: 'need', text: '필요한 만큼만 가져가요' }, { id: 'ask', text: '모자라면 부탁해요' }, { id: 'all', text: '좋은 색은 먼저 다 가져가요' }, { id: 'back', text: '남은 것은 돌려놓아요' }] },
                target: { checklist: ['need', 'ask', 'back'] }, difficulty: 0.1 },
              { prompt: '상황과 알맞은 말을 이어 보세요.', toolOptions: { mode: 'match', slots: [{ id: 's1', label: '가위가 없을 때' }, { id: 's2', label: '빌린 풀을 다 썼을 때' }], cards: ['"가위 좀 빌려줄래?"', '"고마워, 잘 썼어"'] },
                target: { match: { s1: '"가위 좀 빌려줄래?"', s2: '"고마워, 잘 썼어"' } }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 우리 모둠 바구니는 처음처럼 채워져 있나요?" 바구니를 들어 남은 재료를 함께 본다. 부탁하는 말을 쓴 친구를 칭찬하며, 다음 시간부터 오리고 붙이는 활동에서도 이 약속을 지키자고 말한다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'branch', situation: '크레파스 바구니에 하양만 하나 남았는데, 짝도 하양이 필요해요.', choices: [
            { id: 'share', text: '"같이 쓰자, 먼저 써" 하고 건네요', result: '짝과 기분 좋게 나누어 썼어요.', mood: '기쁨' },
            { id: 'mine', text: '"내가 먼저 봤어" 하고 쥐고 있어요', result: '짝이 속상해 그림을 멈췄어요.', mood: '속상함', why: '짝도 하양이 필요할 때 어떻게 하면 좋을까요?' }] }, prompt: '하나 남은 크레파스를 짝도 쓰고 싶어 해요. 어떻게 할까요?', target: { choice: 'share' }, difficulty: 0.1 },
          { type: 'choice', prompt: '모둠 재료를 가져갈 때 알맞은 것은?', options: ['많을수록 좋아요', '필요한 만큼만 가져가요', '친구 몫까지 가져가요'], answer: 1, difficulty: 0.05, explain: '필요한 만큼만 가져가야 모두가 쓸 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '함께 쓰는 재료',
      items: [
        { type: 'check', prompt: '모둠 재료 약속에 ✓ 하세요.', options: ['필요한 만큼 가져가요', '좋은 것은 숨겨요', '남은 것은 돌려놓아요', '모자라면 부탁해요'] },
        { type: 'blank', prompt: '빈칸에 부탁하는 말을 쓰세요.', text: '"풀 좀 ______?"', answer: '빌려줄래' },
        { type: 'choice', prompt: '빌린 것을 돌려줄 때 하는 말에 ○ 하세요.', options: ['"고마워, 잘 썼어"', '"이제 내 거야"'], answer: '"고마워, 잘 썼어"' },
        { type: 'draw', prompt: '친구와 재료를 나누어 쓰는 모습을 그리세요.' },
      ],
      easy: {
        note: '필요한 만큼, 다 쓰면 돌려놓기!',
        items: [
          { type: 'choice', prompt: '알맞은 행동에 ○ 하세요.', options: ['필요한 만큼 가져가요', '다 가져가요'], answer: '필요한 만큼 가져가요' },
          { type: 'choice', prompt: '남은 재료는 어디에 두나요?', options: ['바구니', '내 서랍'], answer: '바구니' },
          { type: 'draw', prompt: '모둠 바구니를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '고른 행동의 결과가 바로 보이고, 다시 고를 수 있어요.',
      base: '차례를 모두 놓은 뒤 확인을 눌러요.',
      challenge: '부탁하는 말과 고마워하는 말을 짝과 역할을 바꾸어 연습해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 먼저 가져간 사람이 임자라고 여긴다 → 모둠 재료는 모두의 것이라는 것을 바구니 그림으로 보여 준다. ② 쓰지 않을 재료를 서랍에 쌓아 둔다 → 활동 끝에 모둠 바구니를 함께 채우는 시간을 둔다. ③ 모자랄 때 말없이 친구 것을 가져간다 → "빌려줄래?" 말하기 연습. 41차시 정리 약속으로 이어진다.',
  }));

  // ── 33~40차시: 자르고 붙이고 소리 내어 표현하기(표현 방법의 탐색과 활용) ──

  lessons.push(L(33, {
    title: '곧은 선과 굽은 선을 따라 가위로 오리기',
    objective: '가위를 바르게 잡고, 종이를 돌려 가며 곧은 선과 굽은 선을 따라 오릴 수 있다.',
    illustration: ART('a paper worksheet with a dotted straight line and a dotted wavy line, a child cutting along the wavy line while turning the paper with the other hand', '선을 따라 오려요', [
      { motif: 'leaf', x: 110, y: 214 }, { motif: 'flower', x: 380, y: 226, color: 'rose' }, { motif: 'cloud', x: 250, y: 80, s: 0.6 }]),
    safety: ['가위 날은 몸 밖으로 향하게 하고, 종이를 잡은 손가락은 날에서 멀리 둬요.', '오릴 때는 자리에 앉아서만 해요.', '다 쓰면 날을 닫아 가위통에 꽂아요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"굽은 선을 오릴 때 가위를 돌릴까요, 종이를 돌릴까요?" 두 가지로 오려 보이며 견주게 한다. 가위는 그대로 두고 종이를 잡은 손으로 종이를 돌리면 선이 더 고르게 오려진다는 것을 보여 준다. 시연 단추로 오리는 차례가 놓이는 모습을 보여 준다. 27차시의 가위 약속을 다시 함께 말한다.',
        student: '가위에 엄지와 다른 손가락을 끼우고 벌렸다 오므렸다 해 봐요.',
        demo: { tool: 'kitchen', options: { mode: 'order', cards: ['엄지를 위 구멍에 끼워요', '날을 크게 벌려요', '선을 따라 싹둑 오려요'], shuffle: false }, sequence: [{ order: ['엄지를 위 구멍에 끼워요', '날을 크게 벌려요', '선을 따라 싹둑 오려요'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 활동지 선 따라 오리기 (실습)', minutes: 14, tool: 'kitchen',
            teacher: '"곧은 선은 날을 크게 벌려 싹둑, 굽은 선은 날을 조금만 벌려 사각사각." 활동지의 곧은 선부터 오리게 하고, 굽은 선은 종이를 돌리며 오리게 한다. 선을 벗어난 학생에게 "가위를 멈추고 종이를 조금 돌려 봐요"라고 말한다. 손가락이 날 가까이 가면 바로 멈추게 한다.',
            task: '활동지의 선을 따라 오리고, 오리는 차례와 방법을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '곧은 선과 굽은 선을 다 오렸으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '굽은 선을 오리는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['종이 끝에서 선을 찾아요', '날을 조금만 벌려 오려요', '종이를 조금씩 돌려요', '선 끝까지 이어 오려요'] },
                target: { order: ['종이 끝에서 선을 찾아요', '날을 조금만 벌려 오려요', '종이를 조금씩 돌려요', '선 끝까지 이어 오려요'] }, difficulty: 0.2,
                predict: { q: '굽은 선에서는 무엇을 돌리면 더 잘 오려질까요?', options: ['가위', '종이'], answer: 1 },
                conclude: '가위는 그대로, 종이를 돌리면 굽은 선을 고르게 오려요.' },
              { prompt: '오릴 때 지킬 방법만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '오리기 방법', items: [{ id: 'away', text: '손가락을 날에서 멀리 둬요' }, { id: 'turn', text: '굽은 선은 종이를 돌려요' }, { id: 'fast', text: '빨리 끝내려고 마구 오려요' }, { id: 'seat', text: '앉아서 오려요' }] },
                target: { checklist: ['away', 'turn', 'seat'] }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 곧은 선·굽은 선 찾기', minutes: 12, tool: 'mindmap',
            teacher: '"창문 테두리는 곧은 선일까요, 굽은 선일까요?" 교실의 물건을 가리키며 묻는다. 오릴 모양을 보고 어떤 선이 있는지 먼저 말해야 가위를 어떻게 쓸지 정할 수 있다는 것을 짚는다.',
            task: '오리고 싶은 모양을 곧은 선과 굽은 선으로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '오릴 모양을 선 가지에 나누어 보세요.', toolOptions: { topic: '어떤 선일까?', slots: ['곧은 선', '굽은 선'], cards: ['네모 창문', '동그란 해', '세모 지붕', '구불구불 뱀'] },
                target: { sort: { '곧은 선': ['네모 창문', '세모 지붕'], '굽은 선': ['동그란 해', '구불구불 뱀'] } }, difficulty: 0.1 },
              { prompt: '오릴 선과 가위를 벌리는 방법을 이어 보세요.', toolOptions: { mode: 'match', topic: '가위를 어떻게?', slots: [{ id: 's1', label: '길고 곧은 선' }, { id: 's2', label: '작고 동그란 선' }], cards: ['날을 크게 벌려 싹둑', '날을 조금 벌려 사각사각'] },
                target: { match: { s1: '날을 크게 벌려 싹둑', s2: '날을 조금 벌려 사각사각' } }, difficulty: 0.2 },
              { prompt: '곧은 선과 굽은 선이 모두 있는 모양만 골라 보세요.', toolOptions: { mode: 'pick', basket: '두 선 모두', cards: ['반달', '물고기', '동그라미', '네모'] },
                target: { pick: ['반달', '물고기'] }, difficulty: 0.3 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오린 조각을 들어 보세요. 선을 따라 고르게 오려졌나요?" 짝과 오린 조각을 견주어 가장 고르게 오린 곳을 칭찬하게 한다. 가위는 날을 닫아 가위통에 꽂고, 종이 부스러기는 \'다시 쓸 종이\' 상자에 모은다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '어떤 선일까?', slots: ['곧은 선', '굽은 선'], cards: ['책 모서리', '사과 둘레', '사다리', '구름 테두리'] }, prompt: '물건의 테두리를 선 가지에 나누어 보세요.', target: { sort: { '곧은 선': ['책 모서리', '사다리'], '굽은 선': ['사과 둘레', '구름 테두리'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '하트 모양을 오릴 때 알맞은 방법은?', options: ['가위를 빙빙 돌려요', '종이를 조금씩 돌려요', '선 밖을 크게 오려요'], answer: 1, difficulty: 0.2, explain: '굽은 선은 종이를 돌리며 오려야 고르게 돼요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '선 따라 오리기',
      items: [
        { type: 'draw', wide: true, prompt: '선생님이 그어 준 곧은 점선을 따라 오리세요. 다 오리면 ○ 하세요.' },
        { type: 'draw', wide: true, prompt: '구불구불 점선을 종이를 돌려 가며 오리세요. 다 오리면 ○ 하세요.' },
        { type: 'choice', prompt: '굽은 선을 오릴 때 돌리는 것에 ○ 하세요.', options: ['종이', '가위'], answer: '종이' },
        { type: 'check', prompt: '오리기 안전 약속에 ✓ 하세요.', options: ['손가락은 날에서 멀리', '앉아서 오려요', '오리며 걸어 다녀요'] },
      ],
      easy: {
        note: '곧은 선 먼저, 굽은 선은 천천히!',
        items: [
          { type: 'draw', wide: true, prompt: '곧은 점선 한 줄을 따라 오리세요.' },
          { type: 'choice', prompt: '동그란 해는 어떤 선인가요?', options: ['굽은 선', '곧은 선'], answer: '굽은 선' },
          { type: 'choice', prompt: '오릴 때 앉아 있나요?', options: ['네, 앉아서 오려요', '아니요, 걸으며 오려요'], answer: '네, 앉아서 오려요' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 초록 테두리가 생겨요. 실제 오리기는 곧은 선 한 줄부터 해요.',
      base: '차례를 모두 놓은 뒤 확인을 눌러요. 곧은 선과 굽은 선을 다 오려요.',
      challenge: '두 선이 섞인 모양을 찾고, 별처럼 꺾인 선도 오려 보아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 굽은 선에서 가위를 비틀어 종이가 찢어진다 → 가위는 그대로, 종이를 돌리게 한다. ② 종이를 잡은 손가락이 날 가까이 간다 → 바로 멈추고 손 위치를 다시 잡아 준다. ③ 날 끝만 써서 조금씩 뜯긴다 → 곧은 선은 날을 크게 벌려 깊이 넣게 한다. 활동지에는 교사가 굵은 점선(곧은 선 1줄, 굽은 선 1줄)을 미리 그어 둔다.',
  }));

  lessons.push(L(34, {
    title: '풀을 알맞게 발라 제자리에 붙이기',
    objective: '조각 뒷면 가장자리에 풀을 알맞게 바르고, 붙일 자리를 먼저 정해 제자리에 붙일 수 있다.',
    illustration: ART('a paper house picture where a child presses a triangle roof onto the right place, glue applied thinly along the edges of the piece', '풀은 알맞게!', [
      { motif: 'house', x: 250, y: 200, color: 'sky' }, { motif: 'tree', x: 400, y: 214 }, { motif: 'sun', x: 100, y: 84, s: 0.6 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"풀을 많이 바를수록 더 잘 붙을까요?" 손을 들게 한 뒤, 풀을 잔뜩 바른 조각과 가장자리에 얇게 바른 조각을 붙여 보인다. 잔뜩 바른 쪽은 풀이 삐져나오고 종이가 울어 미끄러진다는 것을 보여 준다. 시연 단추로 판에서 지붕이 제자리에 붙는 모습을 보여 준다.',
        student: '지난번 물풀을 많이 짠 종이가 어떻게 되었는지 떠올려 말해 봐요.',
        demo: { tool: 'collage', options: { readOnly: true }, sequence: [{ has: [{ shape: 'square', color: '파랑', size: 'l', n: 1 }, { shape: 'triangle', color: '빨강', n: 1 }] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 풀의 양에 따라 달라지는 것', minutes: 12, tool: 'mindmap',
            teacher: '"세 조각을 붙여 볼까요? 하나는 아주 조금, 하나는 가장자리에 알맞게, 하나는 듬뿍." 마른 뒤 들어 보며 어느 것이 가장 깔끔하게 붙었는지 견준다. "듬뿍 바르면 더 잘 붙어요"라는 학생에게 울퉁불퉁해진 종이를 만져 보게 한다.',
            task: '풀의 양에 따라 생기는 일을 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '세 조각을 붙여 보았으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '풀의 양에 따라 생기는 일을 가지에 나누어 보세요.', toolOptions: { topic: '풀의 양', slots: ['너무 조금', '알맞게', '너무 많이'], cards: ['모서리가 들떠요', '깔끔하게 붙어요', '풀이 삐져나와요'] },
                target: { sort: { '너무 조금': ['모서리가 들떠요'], '알맞게': ['깔끔하게 붙어요'], '너무 많이': ['풀이 삐져나와요'] } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['모서리가 들떠요', '깔끔하게 붙어요', '풀이 삐져나와요', '종이가 울퉁불퉁 울어요', '금방 떨어져요'] }, target: { sort: { '너무 조금': ['모서리가 들떠요', '금방 떨어져요'], '알맞게': ['깔끔하게 붙어요'], '너무 많이': ['풀이 삐져나와요', '종이가 울퉁불퉁 울어요'] } }, prompt: '다섯 가지 일을 풀의 양 가지에 나누어 보세요.' } },
                predict: { q: '풀을 듬뿍 바르면 어떻게 될까요?', options: ['더 깔끔해요', '삐져나오고 종이가 울어요'], answer: 1 },
                conclude: '풀은 많을수록 좋은 게 아니라, 가장자리에 알맞게 발라야 깔끔해요.' },
              { prompt: '풀을 바를 곳만 골라 보세요.', toolOptions: { mode: 'pick', basket: '풀 바를 곳', cards: ['조각 뒷면 가장자리', '조각 뒷면 가운데 조금', '조각 앞면 전체', '책상 위'] },
                target: { pick: ['조각 뒷면 가장자리', '조각 뒷면 가운데 조금'] }, difficulty: 0.2 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 붙일 자리 먼저 정하고 붙이기', minutes: 14, tool: 'collage',
            teacher: '"풀을 바르기 전에 조각을 먼저 대어 보세요. 자리가 정해지면 그때 발라요." 판에서도 조각을 옮겨 제자리를 찾게 한다. 풀을 바른 뒤 자리를 찾느라 여기저기 대어 보다 그림이 지저분해지는 학생에게 "먼저 대어 보기"를 다시 말한다.',
            task: '보기 그림의 제자리에 조각을 옮겨 붙여요.',
            levels: {
              easy: { shapes: ['square', 'triangle', 'rect', 'circle'], colors: ['파랑', '빨강', '갈색', '노랑', '초록'], sizes: ['m', 'l'] },
              base: { shapes: ['square', 'triangle', 'rect', 'circle', 'leaf'], colors: ['파랑', '빨강', '갈색', '노랑', '초록', '하양'] },
              challenge: {},
            },
            items: [
              { prompt: '파랑 집 위에 빨강 세모 지붕을 제자리에 놓아 보세요.', state: { pieces: [{ shape: 'square', color: '파랑', size: 'l', x: 280, y: 240, r: 0 }] },
                target: { match: [{ shape: 'square', color: '파랑', size: 'l', x: 280, y: 240, r: 0 }, { shape: 'triangle', color: '빨강', size: 'l', x: 280, y: 160, r: 0 }] }, difficulty: 0.2,
                conclude: '붙이기 전에 대어 보면 제자리에 깔끔하게 붙일 수 있어요.' },
              { prompt: '집에 노랑 네모 창문 두 개를 붙여 보세요.', state: { pieces: [{ shape: 'square', color: '파랑', size: 'l', x: 280, y: 240, r: 0 }, { shape: 'triangle', color: '빨강', size: 'l', x: 280, y: 160, r: 0 }] }, target: { has: [{ shape: 'square', color: '노랑', n: 2 }] }, difficulty: 0.15 },
              { prompt: '집 옆에 갈색 긴 네모 나무줄기와 초록 동그라미 잎을 붙여 보세요.', state: { pieces: [{ shape: 'square', color: '파랑', size: 'l', x: 280, y: 240, r: 0 }] }, target: { has: [{ shape: 'rect', color: '갈색', min: 1 }, { shape: 'circle', color: '초록', min: 1 }] }, difficulty: 0.2 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"풀을 많이 바를수록 잘 붙었나요?" 세 조각을 다시 들어 견주며 "가장자리에 알맞게"를 함께 말한다. 손에 묻은 풀은 물티슈로 닦고, 풀 뚜껑을 닫는다. 출구 2번을 틀린 학생은 듬뿍 바른 조각을 다시 만져 보게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'collage', options: { shapes: ['circle', 'square', 'triangle'], colors: ['초록', '빨강', '노랑'] }, state: { pieces: [{ shape: 'circle', color: '초록', size: 'l', x: 280, y: 200, r: 0 }] }, prompt: '초록 나무에 빨강 동그라미 사과를 세 개 이상 붙여 보세요.', target: { has: [{ shape: 'circle', color: '빨강', min: 3 }] }, difficulty: 0.1 },
          { type: 'choice', prompt: '작은 별 조각에 풀을 바르는 알맞은 방법은?', options: ['듬뿍 짜서 발라요', '뒷면에 살짝 발라요', '앞면에 발라요'], answer: 1, difficulty: 0.15, explain: '작은 조각은 뒷면에 살짝만 발라도 잘 붙어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '풀은 알맞게',
      items: [
        { type: 'figure', prompt: '보기 집 그림에서 지붕은 어디에 붙였나요? 쓰세요.', tool: 'collage', figures: [{ options: { readOnly: true }, state: { pieces: [{ shape: 'square', color: '파랑', size: 'l', x: 280, y: 240, r: 0 }, { shape: 'triangle', color: '빨강', size: 'l', x: 280, y: 160, r: 0 }] }, caption: '지붕 자리: ________' }], answer: '집 위' },
        { type: 'table', prompt: '풀을 바른 양과 붙은 모습을 쓰세요.', columns: ['풀의 양', '붙은 모습'], cells: [['너무 조금', ''], ['알맞게', ''], ['너무 많이', '']] },
        { type: 'choice', prompt: '풀을 바르기 전에 먼저 할 일에 ○ 하세요.', options: ['붙일 자리에 대어 봐요', '풀을 듬뿍 짜요'], answer: '붙일 자리에 대어 봐요' },
        { type: 'draw', prompt: '색종이를 오려 집 그림을 붙여 꾸미세요.' },
      ],
      easy: {
        note: '먼저 대어 보고, 가장자리에 살짝!',
        items: [
          { type: 'choice', prompt: '깔끔하게 붙는 풀의 양에 ○ 하세요.', options: ['알맞게', '듬뿍'], answer: '알맞게' },
          { type: 'choice', prompt: '풀을 바르는 곳에 ○ 하세요.', options: ['뒷면 가장자리', '앞면 전체'], answer: '뒷면 가장자리' },
          { type: 'draw', prompt: '색종이 지붕을 붙인 집을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '판에 모양 세 가지와 색 네 가지만 나와요. 맞는 가지에 초록 테두리가 생겨요.',
      base: '스스로 자리를 정해 조각을 놓아요.',
      challenge: '결과 카드가 다섯 장으로 늘고, 집 둘레를 더 꾸며요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 풀은 많이 바를수록 잘 붙는다고 여긴다 → 세 가지 양으로 붙여 견주게 한다. ② 풀을 바른 뒤 자리를 찾느라 그림이 지저분해진다 → "먼저 대어 보기" 차례를 지킨다. ③ 앞면에 바른다 → 28차시처럼 뒷면에 바르는 모습을 다시 보여 준다. 물풀은 점을 콕콕 찍듯 바르게 하면 양을 줄일 수 있다.',
  }));

  lessons.push(L(35, {
    title: '오리고 붙여 우리 반 약속 그림 만들기',
    objective: '정한 우리 반 약속 하나를 골라, 색종이를 오리고 붙여 뜻이 보이는 그림으로 꾸밀 수 있다.',
    illustration: ART('a paper poster showing two children holding hands in a hallway made of cut colored paper shapes, with a big green check mark', '약속을 그림으로', [
      { motif: 'house', x: 110, y: 214, color: 'sky' }, { motif: 'heart', x: 390, y: 90, s: 0.6 }, { motif: 'flower', x: 380, y: 226, color: 'rose' }]),
    safety: ['가위는 앉아서 쓰고, 다 쓰면 날을 닫아 꽂아요.', '풀이 묻은 손으로 눈을 비비지 않아요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"16차시에 정한 우리 반 약속 가운데 그림으로 꾸미고 싶은 것은 무엇인가요?" 칠판의 약속 목록을 함께 읽는다. 시연 단추로 판에 하트 조각이 놓이는 모습을 보여 주며 "고운 말 약속은 하트로 나타낼 수 있어요"라고 말한다. 오늘은 지금까지 익힌 오리기·풀칠을 모두 써 본다고 알린다.',
        student: '내가 꾸미고 싶은 약속 하나를 짝에게 말해 봐요.',
        demo: { tool: 'collage', options: { readOnly: true }, sequence: [{ has: [{ shape: 'heart', color: '분홍', min: 2 }] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 약속 그림 계획하기', minutes: 8, tool: 'story',
            teacher: '"만들기 전에 차례를 정해요. 무엇을 먼저 할까요?" 약속 고르기 → 모양 정하기 → 오리기 → 대어 보기 → 붙이기 차례를 함께 세운다. 바로 오리기부터 하려는 학생에게 "무엇을 오릴지 정했나요?" 하고 묻는다.',
            task: '약속 그림을 만드는 차례를 정해요.',
            levels: CARD_LV,
            items: [
              { prompt: '약속 그림을 만드는 차례대로 놓아 보세요.', toolOptions: { slots: ['1', '2', '3', '4'], cards: [{ id: 'pick', text: '꾸밀 약속을 골라요', motif: 'star' }, { id: 'cut', text: '모양을 오려요', motif: 'leaf' }, { id: 'try', text: '도화지에 대어 봐요', motif: 'flower' }, { id: 'glue', text: '풀칠해 붙여요', motif: 'heart' }] },
                target: { order: ['pick', 'cut', 'try', 'glue'] }, difficulty: 0.15 },
              { prompt: '약속과 어울리는 모양을 말풍선에 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['하트', '세모 화살표', '물방울'], slots: [{ id: 'b1', who: '민지', motif: 'heart', label: '고운 말 약속은 ___ 모양으로 꾸밀래.' }] },
                target: { fill: { b1: '하트' } }, difficulty: 0.1 },
              { prompt: '친구들의 약속 그림 계획을 말풍선에 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['물방울', '세모 화살표', '하트'], slots: [{ id: 'b1', who: '준호', motif: 'leaf', label: '복도에서 걷기 약속은 ___로 가는 쪽을 보여 줄래.' }, { id: 'b2', who: '서아', motif: 'flower', label: '물 아껴 쓰기 약속은 ___ 모양을 붙일래.' }] },
                target: { fill: { b1: '세모 화살표', b2: '물방울' } }, difficulty: 0.2 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 오리고 붙여 꾸미기', minutes: 18, tool: 'collage',
            teacher: '"멀리서도 약속이 보이게, 큰 모양 하나를 먼저 붙여요." 판으로 먼저 꾸며 보고, 같은 모양을 실제 색종이로 오려 도화지에 붙이게 한다. 풀을 듬뿍 바르는 학생에게 34차시를 떠올리게 한다. 다 만든 학생은 약속 문장을 아래에 쓴다.',
            task: '판에서 약속 그림을 꾸미고, 같은 그림을 색종이로 만들어요.',
            levels: {
              easy: { shapes: ['heart', 'circle', 'triangle', 'square'], colors: ['분홍', '빨강', '파랑', '초록', '노랑'], sizes: ['m', 'l'] },
              base: { shapes: ['heart', 'circle', 'triangle', 'square', 'rect', 'star'], colors: ['분홍', '빨강', '파랑', '초록', '노랑', '하양', '검정'] },
              challenge: {},
            },
            items: [
              { prompt: '고운 말 약속이에요. 분홍 하트를 세 개 이상 붙여 보세요.', target: { has: [{ shape: 'heart', color: '분홍', min: 3 }] }, difficulty: 0.1 },
              { prompt: '복도에서 걸어요 약속이에요. 초록 세모 화살표를 두 개 이상 붙여 보세요.', target: { has: [{ shape: 'triangle', color: '초록', min: 2 }] }, difficulty: 0.15 },
              { prompt: '내가 고른 약속 그림을 조각 다섯 개 이상 써서 꾸미고 점검해 보세요.', target: { selfCheck: ['약속의 뜻이 보이는 큰 모양이 있어요', '조각을 제자리에 대어 보고 붙였어요', '풀이 삐져나오지 않았어요'], minPieces: 5 }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"그림만 보고 짝의 약속을 맞혀 볼까요?" 짝이 맞히지 못하면 어떤 모양을 더 크게 하면 좋을지 함께 말하게 한다. 완성한 약속 그림은 교실 벽에 붙여 47차시 전시로 이어 간다. 쓴 가위와 풀은 제자리에 둔다.',
        exitTicket: [
          { type: 'tool', tool: 'collage', options: { shapes: ['circle', 'square', 'star'], colors: ['파랑', '노랑', '하양'] }, prompt: '물 아껴 쓰기 약속이에요. 파랑 동그라미 물방울을 두 개 이상 붙여 보세요.', target: { has: [{ shape: 'circle', color: '파랑', min: 2 }] }, difficulty: 0.1 },
          { type: 'choice', prompt: '약속 그림을 만들 때 가장 먼저 할 일은?', options: ['풀을 발라요', '꾸밀 약속을 골라요', '가위로 마구 오려요'], answer: 1, difficulty: 0.1, explain: '무엇을 꾸밀지 정해야 무엇을 오릴지 알 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '우리 반 약속 그림',
      items: [
        { type: 'short', prompt: '내가 꾸밀 약속을 쓰세요.' },
        { type: 'draw', prompt: '어떤 모양으로 꾸밀지 먼저 연필로 그리세요.' },
        { type: 'draw', wide: true, prompt: '색종이를 오리고 붙여 약속 그림을 완성하세요.' },
        { type: 'check', prompt: '해낸 것에 ✓ 하세요.', options: ['선을 따라 오렸어요', '먼저 대어 보았어요', '풀을 알맞게 발랐어요'] },
      ],
      easy: {
        note: '큰 모양 하나만 먼저 붙여도 좋아요.',
        items: [
          { type: 'choice', prompt: '고운 말 약속에 어울리는 모양에 ○ 하세요.', options: ['하트', '세모'], answer: '하트' },
          { type: 'draw', prompt: '하트를 오려 붙이세요.' },
          { type: 'short', prompt: '내 약속 그림의 이름을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '판에 모양 네 가지와 색 다섯 가지만 나와요. 큰 모양 하나로 약속을 나타내요.',
      base: '조각 다섯 개 이상 써서 꾸며요.',
      challenge: '모든 모양을 쓰고, 약속을 지키는 사람까지 꾸며 넣어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 무엇을 꾸밀지 정하지 않고 오리기부터 한다 → 계획 차례 카드를 칠판에 붙여 둔다. ② 작은 조각이 너무 많아 뜻이 흐려진다 → "큰 모양 하나가 보이나요?" 하고 묻는다. ③ 풀을 듬뿍 발라 종이가 운다 → 34차시의 세 조각을 다시 보여 준다. 그림을 다 못 끝낸 학생은 41차시 전까지 쉬는 시간에 이어 하게 한다.',
  }));

  lessons.push(L(36, {
    title: '종이를 구기고 흔들어 여러 가지 소리 내기',
    objective: '종이를 구기기·흔들기·두드리기·문지르기로 여러 가지 소리를 만들고, 소리를 정해진 차례대로 되풀이해 낼 수 있다.',
    illustration: ART('paper children making sounds with paper: one crumples newspaper, one shakes a sheet like a flag, one taps a paper cup, one rubs sandpaper-like cardboard', '종이에서도 소리가 나요', [
      { motif: 'star', x: 120, y: 84, s: 0.6 }, { motif: 'tree', x: 400, y: 214 }, { motif: 'cloud', x: 300, y: 80, s: 0.6 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"눈을 감고 들어 보세요. 선생님이 종이로 무엇을 했을까요?" 신문지를 구기고, 흔들고, 두드리는 소리를 차례로 들려준다. 시연 단추로 \'바스락바스락\'이 구기기 가지로 가는 모습을 보여 준다. 같은 종이도 어떻게 하느냐에 따라 소리가 다르다는 것을 짚는다.',
        student: '종이 한 장으로 낼 수 있는 소리를 하나씩 내 봐요.',
        demo: { tool: 'mindmap', options: { topic: '종이 소리', slots: ['구기기', '흔들기'], cards: ['바스락바스락', '펄럭펄럭'], shuffle: false }, sequence: [{ sort: { '구기기': ['바스락바스락'], '흔들기': ['펄럭펄럭'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 종이 소리 찾기', minutes: 12, tool: 'mindmap',
            teacher: '"신문지, 골판지, 종이컵으로 해 보세요. 어느 종이가 가장 큰 소리가 날까요?" 모둠마다 종이 세 가지로 소리를 내 보게 한다. 너무 큰 소리로 장난치는 학생에게 "선생님 손이 올라가면 멈춰요" 신호를 정한다.',
            task: '종이로 소리를 내 보고, 소리와 내는 방법을 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '모둠 종이로 소리를 다 내 보았으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '소리를 내는 방법 가지에 나누어 보세요.', toolOptions: { topic: '종이 소리', slots: ['구기기', '흔들기', '두드리기', '문지르기'], cards: ['바스락바스락', '펄럭펄럭', '통통통', '사각사각'] },
                target: { sort: { '구기기': ['바스락바스락'], '흔들기': ['펄럭펄럭'], '두드리기': ['통통통'], '문지르기': ['사각사각'] } }, difficulty: 0.2,
                predict: { q: '골판지를 손톱으로 문지르면 어떤 소리가 날까요?', options: ['드르륵', '펄럭펄럭'], answer: 0 },
                conclude: '같은 종이도 구기고, 흔들고, 두드리고, 문지르면 소리가 달라져요.' },
              { prompt: '빗소리를 흉내 내기 좋은 방법을 골라 보세요.', toolOptions: { mode: 'pick', basket: '빗소리', cards: ['신문지를 손가락으로 톡톡 두드려요', '종이를 찢어요', '종이를 접어 둬요'] },
                target: { pick: ['신문지를 손가락으로 톡톡 두드려요'] }, difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 소리 차례 되풀이하기', minutes: 14, tool: 'pattern',
            teacher: '"\'탁\'은 종이컵 두드리기, \'싹\'은 종이 문지르기예요. 탁 싹, 탁 싹… 다음은 무엇일까요?" 판의 차례를 함께 손으로 소리 내며 읽는다. 빈칸을 채운 뒤 모둠이 함께 소리로 연주하게 한다.',
            task: '되풀이되는 소리 차례를 찾아 빈칸을 채우고, 소리로 내 봐요.',
            levels: CARD_LV,
            items: [
              { prompt: '탁과 싹이 되풀이돼요. 빈칸 두 곳을 채워 보세요.', toolOptions: { seq: ['탁', '싹', '탁', '싹', null, null], palette: ['탁', '싹', '쿵'] }, target: { fill: ['탁', '싹'] }, difficulty: 0.05 },
              { prompt: '탁 탁 싹이 되풀이돼요. 빈칸을 채워 보세요.', toolOptions: { seq: ['탁', '탁', '싹', '탁', null, '싹', null, '탁', '싹'], palette: ['탁', '싹', '쿵'] }, target: { fill: ['탁', '탁'] }, difficulty: 0.2,
                conclude: '같은 묶음이 같은 차례로 이어지면 되풀이 소리가 돼요.' },
              { prompt: '세 가지 소리가 차례로 되풀이되도록 만들어 보세요.', toolOptions: { mode: 'make', palette: ['탁', '싹', '쿵'], length: 6 }, target: { rule: 'repeat', period: 3 }, difficulty: 0.25 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"우리 모둠이 만든 소리 차례를 들려줄까요?" 모둠마다 짧게 연주하고 다른 모둠은 몇 가지 소리였는지 맞힌다. 구긴 신문지는 펴서 \'다시 쓸 종이\' 상자에 넣는다. 다음 시간에는 재활용품으로 흔들 악기를 만든다고 예고하고, 씻어 말린 작은 플라스틱 병(요구르트 병) 하나를 가져오도록 알림장에 적게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'pattern', options: { seq: ['쿵', '탁', '탁', '쿵', '탁', null], palette: ['쿵', '탁', '싹'] }, prompt: '쿵 탁 탁이 되풀이돼요. 빈칸을 채워 보세요.', target: { fill: ['탁'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '깃발이 바람에 날리는 소리를 내려면?', options: ['종이를 흔들어요', '종이를 접어요', '종이를 오려요'], answer: 0, difficulty: 0.1, explain: '종이를 흔들면 펄럭펄럭 깃발 소리가 나요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '종이 소리',
      items: [
        { type: 'table', prompt: '종이로 낸 소리를 흉내 내는 말로 쓰세요.', columns: ['하는 방법', '소리'], cells: [['구기기', ''], ['흔들기', ''], ['두드리기', '']] },
        { type: 'blank', prompt: '되풀이되는 소리의 빈칸을 채우세요.', text: '탁 싹 탁 싹 탁 ___', answer: '싹' },
        { type: 'choice', prompt: '빗소리를 흉내 내기 좋은 방법에 ○ 하세요.', options: ['톡톡 두드리기', '접어 두기'], answer: '톡톡 두드리기' },
        { type: 'short', prompt: '우리 모둠이 만든 소리 차례를 쓰세요.' },
      ],
      easy: {
        note: '손으로 소리를 내 보며 빈칸을 찾아요.',
        items: [
          { type: 'choice', prompt: '종이를 구기면 나는 소리에 ○ 하세요.', options: ['바스락', '통통'], answer: '바스락' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '탁 싹 탁 ___', answer: '싹' },
          { type: 'draw', prompt: '소리를 내는 종이를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 가지에 초록 테두리가 생기고, 판의 빈칸에 바로 표시가 나와요.',
      base: '모두 채운 뒤 확인을 눌러요.',
      challenge: '세 가지 소리로 되풀이 차례를 스스로 만들고, 모둠과 연주해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 종이는 소리 재료가 아니라고 여긴다 → 눈을 감고 소리만 들어 보게 한다. ② 큰 소리 장난으로 번진다 → 손 신호로 멈추는 약속을 먼저 정한다. ③ 되풀이 묶음을 찾지 못한다 → 손뼉으로 묶음마다 끊어 읽어 준다. 종이를 찢는 소리는 재료를 버리게 되므로 신문지 한 장만 쓰게 한다.',
  }));

  lessons.push(L(37, {
    title: '병에 콩을 넣어 흔들 악기 만들고 박 맞추기',
    objective: '씻어 말린 작은 병에 콩을 넣어 흔들 악기를 만들고, 네 박에 맞춰 흔들고 쉬는 리듬을 칠 수 있다.',
    illustration: ART('a paper shaker made from a small washed yogurt bottle with beans inside, decorated with colored paper, a child shaking it to a beat', '흔들흔들 악기', [
      { motif: 'star', x: 110, y: 84, s: 0.6 }, { motif: 'flower', x: 390, y: 226, color: 'buttercup' }, { motif: 'tree', x: 400, y: 214 }]),
    safety: ['콩·쌀 같은 작은 알갱이는 입이나 코, 귀에 넣지 않아요.', '병 뚜껑은 테이프로 단단히 감아 알갱이가 쏟아지지 않게 해요.', '흔들 때는 친구와 팔 하나만큼 떨어져요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"이 병 안에 무엇이 들었을까요? 흔들어 볼게요." 콩·쌀을 넣은 병을 차례로 흔들어 소리를 견주게 한다. 콩이 든 병은 \'차르르\' 크게, 쌀이 든 병은 \'사르르\' 작게 난다는 것을 짚는다. 시연 단추로 만드는 차례가 놓이는 모습을 보여 준다. 작은 알갱이를 입에 넣지 않는 약속을 먼저 말한다.',
        student: '빈 병을 흔들 때와 콩이 든 병을 흔들 때 소리를 견주어 들어 봐요.',
        demo: { tool: 'kitchen', options: { mode: 'order', cards: ['병에 콩을 넣어요', '뚜껑을 닫고 테이프를 감아요', '흔들어 소리를 내요'], shuffle: false }, sequence: [{ order: ['병에 콩을 넣어요', '뚜껑을 닫고 테이프를 감아요', '흔들어 소리를 내요'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 흔들 악기 만들기 (실습)', minutes: 12, tool: 'kitchen',
            teacher: '"콩은 한 숟가락만 넣어요. 너무 많이 넣으면 어떻게 될까요?" 병을 가득 채우면 알갱이가 움직이지 못해 소리가 작아진다는 것을 직접 흔들어 보인다. 뚜껑은 교사가 테이프를 함께 감아 준다. 오늘은 콩 넣기와 뚜껑 감기까지만 하고 겉 꾸미기는 하지 않는다 — 꾸미기는 38차시 무늬 띠 시간에 짧은 띠를 하나 더 만들어 병에 감는다. 병을 가져오지 못한 학생을 위해 교사가 여분 병을 준비한다.',
            task: '흔들 악기를 만드는 차례를 정하고, 콩을 넣고 뚜껑을 감아 직접 만들어요.',
            levels: CARD_LV,
            items: [
              { prompt: '흔들 악기를 만드는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['씻어 말린 병을 준비해요', '콩을 한 숟가락 넣어요', '뚜껑을 닫고 테이프로 감아요', '흔들어 소리를 들어 봐요'] },
                target: { order: ['씻어 말린 병을 준비해요', '콩을 한 숟가락 넣어요', '뚜껑을 닫고 테이프로 감아요', '흔들어 소리를 들어 봐요'] }, difficulty: 0.15,
                predict: { q: '병에 콩을 가득 채우면 소리가 어떻게 될까요?', options: ['더 커져요', '작아져요'], answer: 1 },
                conclude: '알갱이가 움직일 자리가 있어야 소리가 잘 나요.' },
              { prompt: '흔들 악기를 다 만들었으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '넣은 것과 나는 소리를 이어 보세요.', toolOptions: { mode: 'match', slots: [{ id: 's1', label: '콩을 넣은 병' }, { id: 's2', label: '쌀을 넣은 병' }], cards: ['차르르 큰 소리', '사르르 작은 소리'] },
                target: { match: { s1: '차르르 큰 소리', s2: '사르르 작은 소리' } }, difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 네 박에 맞춰 흔들기', minutes: 14, tool: 'keyboard',
            teacher: '"하나 둘 셋 넷, 박에 맞춰 흔들어요. 쉼표에서는 악기를 멈춰요." 손뼉으로 박을 함께 센 뒤 판의 리듬 블록을 놓게 한다. 블록을 놓은 리듬을 흔들 악기로 쳐 보게 하고, 쉼표에서도 계속 흔드는 학생에게 "쉼표는 악기도 쉬어요"라고 말한다.',
            task: '들은 리듬을 블록으로 놓고, 흔들 악기로 쳐 봐요.',
            levels: {
              easy: { mode: 'rhythm', meter: 4, measures: 1, blocks: ['q', 'h', 'qr'], showBeats: true },
              base: { mode: 'rhythm', meter: 4, measures: 2, blocks: ['q', 'e', 'h', 'qr'] },
              challenge: { mode: 'rhythm', meter: 4, measures: 2, blocks: ['q', 'e', 'h', 'qr', 'er'] },
            },
            items: [
              { prompt: '리듬 듣기를 누르고, 한 마디 흔들 악기 리듬을 블록으로 놓아 보세요.', toolOptions: { pattern: ['q', 'q', 'h'], measures: 1 }, target: { rhythm: ['q', 'q', 'h'] }, difficulty: 0.15 },
              { prompt: '흔들고 한 번 쉬는 두 마디 리듬을 듣고 블록으로 놓아 보세요.', toolOptions: { pattern: ['q', 'qr', 'q', 'qr', 'q', 'q', 'h'] }, target: { rhythm: ['q', 'qr', 'q', 'qr', 'q', 'q', 'h'] }, difficulty: 0.2,
                levels: { easy: { prompt: '흔들고 한 번 쉬는 한 마디 리듬을 듣고 블록으로 놓아 보세요.', toolOptions: { pattern: ['q', 'qr', 'q', 'qr'] }, target: { rhythm: ['q', 'qr', 'q', 'qr'] } } },
                conclude: '쉼표에서는 악기를 멈추면 리듬이 또렷해져요.' },
              { prompt: '마디가 모두 4박이 되도록 나만의 흔들 리듬을 놓아 보세요.', target: { beats: true }, difficulty: 0.25 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"모둠이 함께 같은 리듬을 흔들어 볼까요? 하나 둘 셋 넷!" 모둠마다 한 번씩 연주한다. 다 쓴 악기는 뚜껑 테이프가 풀리지 않았는지 살펴 사물함에 넣는다. 바닥에 떨어진 콩이 있으면 주워 통에 모은다.',
        exitTicket: [
          { type: 'tool', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 1, blocks: ['q', 'h', 'qr'] }, prompt: '한 마디를 4박으로 채우는 흔들 리듬을 놓아 보세요.', target: { beats: true }, difficulty: 0.2 },
          { type: 'choice', prompt: '흔들 악기 소리를 작게 내려면 무엇을 넣을까요?', options: ['쌀', '큰 구슬', '콩 가득'], answer: 0, difficulty: 0.2, explain: '작은 쌀알은 사르르 작은 소리가 나요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '흔들흔들 악기',
      items: [
        { type: 'check', prompt: '흔들 악기를 만들 때 지킬 약속에 ✓ 하세요.', options: ['콩을 입에 넣지 않아요', '뚜껑에 테이프를 감아요', '친구 귀에 대고 흔들어요'] },
        { type: 'choice', prompt: '콩을 넣은 병에서 나는 소리에 ○ 하세요.', options: ['차르르', '쿵쿵'], answer: '차르르' },
        { type: 'table', prompt: '하나 둘 셋 넷 가운데 흔들 박에 ○, 쉬는 박에 × 하세요.', columns: ['하나', '둘', '셋', '넷'], cells: [['', '', '', '']] },
        { type: 'draw', prompt: '내가 만든 흔들 악기를 그리세요.' },
      ],
      easy: {
        note: '박에 맞춰 손뼉 먼저, 그다음 흔들기!',
        items: [
          { type: 'choice', prompt: '병에 넣는 콩의 양에 ○ 하세요.', options: ['한 숟가락', '병 가득'], answer: '한 숟가락' },
          { type: 'choice', prompt: '쉼표에서는 어떻게 하나요?', options: ['멈춰요', '더 세게 흔들어요'], answer: '멈춰요' },
          { type: 'draw', prompt: '흔들 악기를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '모든 리듬을 한 마디로 놓고, 박 표시가 함께 보여요.',
      base: '쉬는 리듬과 나만의 리듬은 두 마디를 채워요.',
      challenge: '8분쉼표까지 써서 두 마디를 채우고, 짝과 주고받으며 연주해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 콩을 많이 넣을수록 소리가 크다고 여긴다 → 가득 채운 병과 견주어 흔들어 보인다. ② 쉼표에서도 계속 흔든다 → 쉼표에서 악기를 가슴에 붙이는 동작을 정한다. ③ 작은 알갱이를 입·코에 넣는다 → 시작 전에 약속하고, 알갱이는 교사가 나누어 준다. 병은 깨지지 않는 플라스틱(요구르트 병 등)만 쓴다.',
  }));

  lessons.push(L(38, {
    title: '같은 조각을 되풀이해 무늬 띠 꾸미기',
    objective: '두세 가지 색종이 조각을 한 묶음으로 정해 같은 차례로 되풀이하며 무늬 띠를 꾸밀 수 있다.',
    illustration: ART('a long paper strip decorated with a repeating pattern of red circles and green triangles, being worn as a paper crown', '되풀이 무늬', [
      { motif: 'flower', x: 110, y: 226, color: 'rose' }, { motif: 'flower', x: 170, y: 226, color: 'sky' }, { motif: 'flower', x: 230, y: 226, color: 'rose' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"빨강 동그라미, 초록 세모, 빨강 동그라미, 초록 세모… 다음은 무엇일까요?" 칠판의 띠 무늬를 손으로 짚으며 함께 읽는다. 시연 단추로 빈칸이 채워지는 모습을 보여 준다. 같은 묶음이 같은 차례로 이어지는 것이 되풀이 무늬라고 짚는다.',
        student: '교실에서 되풀이 무늬를 찾아 손가락으로 가리켜 봐요.',
        demo: { tool: 'pattern', options: { seq: ['circle:rose', 'triangle:mint', 'circle:rose', 'triangle:mint', null, null] }, sequence: [{ fill: ['circle:rose', 'triangle:mint'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 되풀이 무늬 빈칸 채우기', minutes: 10, tool: 'pattern',
            teacher: '"묶음을 손가락으로 끊어 읽어 볼까요? 동그라미-세모 / 동그라미-세모." 묶음마다 손뼉을 치며 읽게 한다. 빈칸 앞 조각만 보고 답하는 학생에게 맨 앞부터 다시 읽어 보게 한다.',
            task: '되풀이되는 묶음을 찾아 빈칸을 채워요.',
            levels: CARD_LV,
            items: [
              { prompt: '노랑 별과 파랑 동그라미가 되풀이돼요. 빈칸을 채워 보세요.', toolOptions: { seq: ['star:buttercup', 'circle:sky', 'star:buttercup', 'circle:sky', null, null] }, target: { fill: ['star:buttercup', 'circle:sky'] }, difficulty: 0.05 },
              { prompt: '하트 하나, 동그라미 두 개가 되풀이돼요. 빈칸을 채워 보세요.', toolOptions: { seq: ['heart:rose', 'circle:mint', 'circle:mint', 'heart:rose', null, 'circle:mint', null, 'circle:mint', 'circle:mint'], palette: ['heart:rose', 'circle:mint', 'star:buttercup'] }, target: { fill: ['circle:mint', 'heart:rose'] }, difficulty: 0.25,
                conclude: '맨 앞부터 묶음을 끊어 읽으면 빈칸을 찾을 수 있어요.' },
              { prompt: '되풀이 무늬에서 틀린 조각 하나를 찾아 눌러 보세요.', toolOptions: { mode: 'odd', seq: ['circle:rose', 'square:sky', 'circle:rose', 'square:sky', 'circle:rose', 'circle:rose', 'circle:rose', 'square:sky'] }, target: { odd: 5 }, difficulty: 0.3 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 무늬 띠 꾸미기', minutes: 16, tool: 'collage',
            teacher: '"두 조각을 한 묶음으로 정하고, 그 묶음을 세 번 이상 이어 붙여요." 판에서 먼저 띠를 꾸미고, 같은 무늬를 긴 종이 띠에 실제 색종이로 붙여 머리띠를 만든다. 빨리 끝낸 학생은 짧은 띠를 하나 더 꾸며 37차시 흔들 악기 병에 감는다. 묶음 차례가 바뀌는 학생에게 "처음 묶음과 같은 차례인가요?" 하고 묻는다.',
            task: '조각 묶음을 되풀이해 무늬 띠를 꾸며요.',
            levels: {
              easy: { shapes: ['circle', 'triangle', 'square', 'heart'], colors: ['빨강', '초록', '노랑', '파랑', '분홍'], sizes: ['m'] },
              base: { shapes: ['circle', 'triangle', 'square', 'heart', 'star'], colors: ['빨강', '초록', '노랑', '파랑', '분홍'] },
              challenge: {},
            },
            items: [
              { prompt: '두 조각 묶음을 세 번 이상 되풀이해 띠를 꾸며 보세요.', target: { repeat: { times: 3, unit: 2 } }, difficulty: 0.2 },
              { prompt: '시작한 묶음을 보고 같은 차례로 두 번 더 이어 붙여 보세요.', state: { pieces: [{ shape: 'heart', color: '분홍', size: 'm', x: 80, y: 200, r: 0 }, { shape: 'circle', color: '노랑', size: 'm', x: 140, y: 200, r: 0 }] }, target: { repeat: { times: 3, unit: 2 } , has: [{ shape: 'heart', color: '분홍', min: 3 }] }, difficulty: 0.25 },
              { prompt: '세 조각 묶음을 세 번 되풀이해 띠를 꾸며 보세요.', target: { repeat: { times: 3, unit: 3 } }, difficulty: 0.35 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"짝의 머리띠 묶음을 끊어 읽어 볼까요?" 짝의 묶음이 몇 조각인지 맞히게 한다. 남은 작은 조각은 버리지 말고 \'다시 쓸 종이\' 상자에 넣는다(42차시에 다시 쓴다).',
        exitTicket: [
          { type: 'tool', tool: 'pattern', options: { seq: ['square:sky', 'square:sky', 'star:buttercup', 'square:sky', 'square:sky', null] }, prompt: '네모 두 개, 별 하나가 되풀이돼요. 빈칸을 채워 보세요.', target: { fill: ['star:buttercup'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '되풀이 무늬가 맞는 것은?', options: ['○△○△○△', '○△△○○△', '○○△○△△'], answer: 0, difficulty: 0.15, explain: '○△ 묶음이 같은 차례로 이어져요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '되풀이 무늬 띠',
      items: [
        { type: 'figure', wide: true, prompt: '되풀이되는 묶음을 ○로 묶고, 다음에 올 조각을 쓰세요.', tool: 'collage', figures: [{ options: { readOnly: true, printColors: false }, state: { pieces: [{ shape: 'circle', color: '빨강', size: 'm', x: 60, y: 200, r: 0 }, { shape: 'triangle', color: '초록', size: 'm', x: 120, y: 200, r: 0 }, { shape: 'circle', color: '빨강', size: 'm', x: 180, y: 200, r: 0 }, { shape: 'triangle', color: '초록', size: 'm', x: 240, y: 200, r: 0 }, { shape: 'circle', color: '빨강', size: 'm', x: 300, y: 200, r: 0 }] }, caption: '빨강 동그라미 · 초록 세모 · 빨강 동그라미 · 초록 세모 · 빨강 동그라미 · ? 다음 조각: ________' }], answer: '초록 세모' },
        { type: 'blank', prompt: '빈칸을 채우세요.', text: '★ ● ★ ● ★ ___', answer: '●' },
        { type: 'draw', wide: true, prompt: '두 가지 모양으로 되풀이 무늬 띠를 그리세요.' },
        { type: 'short', prompt: '내 무늬 띠의 묶음을 쓰세요.' },
      ],
      easy: {
        note: '묶음마다 손뼉을 치며 읽어요.',
        items: [
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '○ △ ○ △ ___', answer: '○' },
          { type: 'choice', prompt: '되풀이 무늬에 ○ 하세요.', options: ['● ■ ● ■', '● ● ■ ●'], answer: '● ■ ● ■' },
          { type: 'draw', wide: true, prompt: '○ △ 묶음을 세 번 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '두 조각 묶음만 해요. 판에 같은 크기 조각만 나와요.',
      base: '시작한 묶음을 이어 붙여요.',
      challenge: '세 조각 묶음을 만들고, 틀린 조각 찾기도 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 빈칸 바로 앞 조각만 보고 답한다 → 맨 앞부터 묶음을 끊어 읽게 한다. ② 붙이다 보면 묶음 차례가 바뀐다 → 붙이기 전에 판·종이 위에 먼저 늘어놓아 보게 한다. ③ 띠를 다 채우려 조각을 너무 작게 오린다 → 조각 크기를 미리 정해 준다. 머리띠는 스테이플러 대신 교사가 테이프로 이어 준다.',
  }));

  lessons.push(L(39, {
    title: '반으로 접어 오려 양쪽이 같은 모양 만들기',
    objective: '종이를 반으로 접어 접힌 쪽에 반쪽 모양을 그려 오리고, 펼쳤을 때 양쪽이 같은 모양이 되는 까닭을 말할 수 있다.',
    illustration: ART('a paper butterfly cut from folded paper, unfolded to show two matching wings, with a dotted fold line in the middle', '접어서 오리면', [
      { motif: 'butterfly', x: 250, y: 140 }, { motif: 'flower', x: 110, y: 226, color: 'rose' }, { motif: 'flower', x: 390, y: 226, color: 'sky' }]),
    safety: ['접은 종이는 두꺼우니 날을 깊이 넣고 천천히 오려요.', '종이를 잡은 손가락은 날에서 멀리 둬요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"반으로 접어 반쪽 하트를 오리면, 펼쳤을 때 어떤 모양이 될까요?" 학생들이 말한 뒤 직접 오려 펼쳐 보인다. 접힌 선을 손가락으로 따라가며 "이 선을 접는 선이라고 해요"라고 말한다. 시연 단추로 판에서 양쪽이 같은 모양이 되는 모습을 보여 준다.',
        student: '내 얼굴이나 몸에서 양쪽이 같은 곳을 찾아 짚어 봐요.',
        demo: { tool: 'collage', options: { readOnly: true }, sequence: [{ symmetry: 'vertical', has: [{ shape: 'heart', color: '분홍', size: 'l', min: 2 }] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 접어 오려 펼쳐 보기 (실습)', minutes: 12, tool: 'story',
            teacher: '"반쪽 모양은 꼭 접힌 쪽에 붙여 그려요. 열린 쪽에 그리면 어떻게 될까요?" 두 가지로 오려 펼쳐 보이며 열린 쪽에 그리면 두 조각으로 떨어진다는 것을 보여 준다. 접은 종이가 두꺼워 잘 안 오려지는 학생은 날을 깊이 넣게 한다.',
            task: '접어 오리는 차례를 정하고, 직접 오려 펼쳐 봐요.',
            levels: CARD_LV,
            items: [
              { prompt: '접어 오리는 차례대로 놓아 보세요.', toolOptions: { slots: ['1', '2', '3', '4'], cards: [{ id: 'fold', text: '종이를 반으로 접어요', motif: 'leaf' }, { id: 'draw', text: '접힌 쪽에 반쪽을 그려요', motif: 'star' }, { id: 'cut', text: '선을 따라 오려요', motif: 'flower' }, { id: 'open', text: '살짝 펼쳐요', motif: 'butterfly' }] },
                target: { order: ['fold', 'draw', 'cut', 'open'] }, difficulty: 0.15,
                predict: { q: '반쪽 그림을 열린 쪽에 그려 오리면?', options: ['한 모양으로 펼쳐져요', '두 조각으로 떨어져요'], answer: 1 },
                conclude: '반쪽은 접힌 쪽에 붙여 그려야 펼쳤을 때 하나로 이어져요.' },
              { prompt: '반쪽 하트를 오려 펼쳤으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '접어 오린 친구의 말을 말풍선에 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['접힌 쪽', '열린 쪽'], slots: [{ id: 'b1', who: '하준', motif: 'butterfly', label: '나비 반쪽은 ___에 붙여 그렸어.' }] },
                target: { fill: { b1: '접힌 쪽' } }, difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 판에서 양쪽 같게 만들기', minutes: 14, tool: 'collage',
            teacher: '"가운데 접는 선에서 왼쪽 조각과 같은 거리에 짝 조각을 놓아요." 판에 나타나는 접는 선을 손가락으로 짚게 한다. 짝 조각을 같은 방향으로 놓는 학생에게 "거울에 비치면 방향은 어떻게 되나요?" 하고 묻는다.',
            task: '접는 선을 기준으로 양쪽이 같은 모양이 되게 조각을 놓아요.',
            levels: {
              easy: { shapes: ['heart', 'circle', 'leaf'], colors: ['분홍', '노랑', '초록', '보라'], sizes: ['m', 'l'], guide: 'vertical' },
              base: { shapes: ['heart', 'circle', 'leaf', 'triangle', 'semi'], colors: ['분홍', '노랑', '초록', '파랑', '보라'], guide: 'vertical' },
              challenge: { guide: 'vertical' },
            },
            items: [
              { prompt: '왼쪽 날개를 보고 오른쪽 날개를 놓아 나비를 완성해 보세요.', state: { pieces: [{ shape: 'heart', color: '보라', size: 'l', x: 200, y: 180, r: 270 }] }, target: { symmetry: 'vertical' }, difficulty: 0.25 },
              { prompt: '왼쪽 나뭇잎의 짝을 오른쪽에 놓아 보세요.', state: { pieces: [{ shape: 'leaf', color: '초록', size: 'm', x: 220, y: 240, r: 315 }, { shape: 'circle', color: '노랑', size: 'm', x: 280, y: 160, r: 0 }] }, target: { symmetry: 'vertical' }, difficulty: 0.25 },
              { prompt: '접는 선을 기준으로 양쪽이 같은 얼굴 가면을 조각 네 개 이상 써서 만들어 보세요.', target: { symmetry: 'vertical', pieces: { min: 4 } }, difficulty: 0.35 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"접어 오리면 왜 양쪽이 같을까요?" 두 겹을 한 번에 오렸기 때문이라는 것을 오린 조각을 다시 접어 겹쳐 보이며 말하게 한다. 오린 나비는 35차시 약속 그림 둘레에 붙여도 좋다. 종이 부스러기는 상자에 모은다.',
        exitTicket: [
          { type: 'tool', tool: 'collage', options: { shapes: ['triangle', 'circle', 'heart'], colors: ['파랑', '노랑'], guide: 'vertical' }, state: { pieces: [{ shape: 'triangle', color: '파랑', size: 'm', x: 200, y: 200, r: 0 }] }, prompt: '접는 선을 기준으로 파랑 세모의 짝을 놓아 보세요.', target: { symmetry: 'vertical' }, difficulty: 0.2 },
          { type: 'choice', prompt: '종이를 반으로 접어 반쪽 동그라미를 오려 펼치면?', options: ['동그라미', '세모', '반쪽만 남아요'], answer: 0, difficulty: 0.2, explain: '두 겹을 한 번에 오려 펼치면 양쪽이 이어진 동그라미가 돼요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '접어서 오리기',
      items: [
        { type: 'figure', prompt: '접는 선을 기준으로 나머지 반쪽을 그리세요.', tool: 'collage', options: { guide: 'vertical' }, figures: [{ options: { readOnly: true, guide: 'vertical' }, state: { pieces: [{ shape: 'heart', color: '보라', size: 'l', x: 200, y: 180, r: 270 }] }, caption: '반쪽 완성하기' }], answer: '오른쪽에 같은 거리, 반대 방향의 하트' },
        { type: 'choice', prompt: '반쪽 그림은 어디에 붙여 그리나요?', options: ['접힌 쪽', '열린 쪽'], answer: '접힌 쪽' },
        { type: 'draw', prompt: '종이를 접어 오린 모양을 펼쳐 붙이세요.' },
        { type: 'short', prompt: '펼쳤을 때 양쪽이 같은 까닭을 쓰세요.' },
      ],
      easy: {
        note: '접힌 쪽에 붙여 그리기!',
        items: [
          { type: 'choice', prompt: '양쪽이 같은 모양에 ○ 하세요.', options: ['나비', '달팽이'], answer: '나비' },
          { type: 'choice', prompt: '먼저 할 일에 ○ 하세요.', options: ['반으로 접어요', '바로 오려요'], answer: '반으로 접어요' },
          { type: 'draw', prompt: '접어 오린 하트를 붙이세요.' },
        ],
      },
    },
    differentiation: {
      easy: '판에 접는 선이 보이고, 모양 세 가지만 나와요. 실제로는 반쪽 하트를 교사가 그려 준 선대로 오려요.',
      base: '스스로 반쪽 모양을 그려 오려요.',
      challenge: '조각 네 개 이상 써서 양쪽이 같은 가면을 만들고, 접어 오린 나비에 무늬도 대칭으로 그려요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 반쪽을 열린 쪽에 그려 두 조각으로 떨어진다 → 접힌 쪽을 손가락으로 짚고 그리게 한다. ② 짝 조각을 같은 방향으로 놓는다 → 거울에 비춰 보이며 방향이 반대라는 것을 보여 준다. ③ 두꺼운 접은 종이에서 가위가 미끄러진다 → 날을 깊이 넣고 천천히 오리게 한다. 1학년은 색종이 한 번 접기까지만 한다.',
  }));

  lessons.push(L(40, {
    title: '모둠 친구와 큰 그림을 나누어 함께 꾸미기',
    objective: '모둠이 한 장의 큰 그림을 꾸밀 때 맡을 부분을 나누고, 재료를 주고받으며 함께 완성할 수 있다.',
    illustration: ART('four paper children around one large sheet decorating a shared picture of a park together, each working on a different corner', '함께 꾸며요', [
      { motif: 'tree', x: 120, y: 214 }, { motif: 'tree', x: 380, y: 214 }, { motif: 'sun', x: 250, y: 84, s: 0.6 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"넷이 한 장에 함께 그리는데, 모두 가운데에 해를 그리면 어떻게 될까요?" 웃으며 대답하게 한 뒤 맡을 부분을 나누면 그림이 고르게 채워진다는 것을 짚는다. 시연 단추로 함께 꾸미는 차례가 놓이는 모습을 보여 준다. 오늘은 지금까지 익힌 칠하기·오리기·붙이기를 모두 쓴다고 알린다.',
        student: '친구와 함께 무언가를 만들어 본 일을 말해 봐요.',
        demo: { tool: 'kitchen', options: { mode: 'order', cards: ['무엇을 꾸밀지 정해요', '맡을 부분을 나눠요', '함께 꾸며요'], shuffle: false }, sequence: [{ order: ['무엇을 꾸밀지 정해요', '맡을 부분을 나눠요', '함께 꾸며요'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 맡을 부분 나누기', minutes: 10, tool: 'kitchen',
            teacher: '"우리 모둠은 공원을 꾸며요. 하늘, 나무, 놀이터, 꽃밭 가운데 누가 무엇을 맡을까요?" 가위바위보보다 "내가 해도 될까?" 하고 묻는 방법으로 정하게 한다. 같은 곳을 맡고 싶어 다투면 32차시의 차례 약속을 떠올리게 한다.',
            task: '함께 꾸밀 차례를 놓고, 맡을 부분을 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '모둠이 함께 꾸미는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['무엇을 꾸밀지 함께 정해요', '맡을 부분을 나눠요', '내 부분을 꾸며요', '모아 붙이고 함께 살펴요'] },
                target: { order: ['무엇을 꾸밀지 함께 정해요', '맡을 부분을 나눠요', '내 부분을 꾸며요', '모아 붙이고 함께 살펴요'] }, difficulty: 0.15 },
              { prompt: '친구가 하고 싶다고 한 부분을 이어 보세요.', toolOptions: { mode: 'match', slots: [{ id: 's1', label: '민지: "나는 하늘을 칠할래."' }, { id: 's2', label: '준호: "나는 나무를 오려 붙일래."' }, { id: 's3', label: '서아: "나는 꽃을 접어 붙일래."' }], cards: ['하늘', '나무', '꽃밭'] },
                target: { match: { s1: '하늘', s2: '나무', s3: '꽃밭' } }, difficulty: 0.1 },
              { prompt: '함께 꾸밀 때 지킬 약속만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '함께 꾸밀 때', items: [{ id: 'ask', text: '"이거 해도 될까?" 물어봐요' }, { id: 'mine', text: '친구 부분도 내 마음대로 고쳐요' }, { id: 'share', text: '재료를 주고받아요' }, { id: 'praise', text: '친구 부분을 칭찬해요' }] },
                target: { checklist: ['ask', 'share', 'praise'] }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 함께 꾸미기', minutes: 16, tool: 'collage',
            teacher: '"내 부분을 다 꾸몄으면 친구에게 \'도와줄까?\' 물어봐요." 판에서 모둠 그림의 한 부분을 꾸며 보고, 실제로 큰 종이에 모둠이 함께 꾸민다. 친구 부분을 허락 없이 고치는 학생에게 먼저 물어보게 한다. 다 꾸민 모둠은 그림의 이름을 함께 정한다.',
            task: '내가 맡은 부분을 꾸미고, 친구와 함께 그림을 완성해요.',
            levels: {
              easy: { shapes: ['circle', 'triangle', 'rect', 'leaf'], colors: ['초록', '갈색', '파랑', '노랑', '분홍', '하양'], sizes: ['m', 'l'] },
              base: { shapes: ['circle', 'triangle', 'rect', 'leaf', 'heart', 'star'], colors: ['초록', '갈색', '파랑', '노랑', '분홍', '빨강', '하양'] },
              challenge: {},
            },
            items: [
              { prompt: '나무를 맡았어요. 갈색 줄기 위에 초록 잎을 겹쳐 붙여 보세요.', state: { pieces: [{ shape: 'rect', color: '갈색', size: 'l', x: 280, y: 260, r: 90 }] }, target: { overlap: 1, has: [{ shape: 'leaf', color: '초록', min: 2 }] }, difficulty: 0.2 },
              { prompt: '하늘을 맡았어요. 노랑 해 한 개와 하양 구름을 두 개 이상 붙여 보세요.', target: { has: [{ shape: 'circle', color: '노랑', n: 1 }, { color: '하양', min: 2 }] }, difficulty: 0.15 },
              { prompt: '꽃밭을 맡았어요. 친구 꽃 옆에 내 꽃을 더해 다섯 송이 이상 꾸미고 점검해 보세요.', state: { pieces: [{ shape: 'heart', color: '분홍', size: 'm', x: 160, y: 300, r: 0 }, { shape: 'heart', color: '빨강', size: 'm', x: 220, y: 300, r: 0 }] }, target: { selfCheck: ['내가 맡은 부분을 꾸몄어요', '친구 꽃을 옮기지 않았어요', '재료를 친구와 나누어 썼어요'], minPieces: 5 }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"우리 모둠 그림에서 친구가 꾸민 곳 가운데 가장 마음에 드는 곳은 어디인가요?" 모둠마다 친구 부분을 하나씩 칭찬하게 한다. 쓴 가위·풀·크레파스는 모둠 바구니에 모아 둔다. 다음 시간부터는 쓴 재료를 정리하는 약속을 배운다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'branch', situation: '모둠 그림에서 친구가 칠한 하늘 색이 내 마음에 들지 않아요.', choices: [
            { id: 'redo', text: '말없이 내가 다시 칠해요', result: '친구가 속상해 그림을 그만두었어요.', mood: '속상함', why: '친구가 칠한 곳을 말없이 바꾸면 어떤 마음일까요?' },
            { id: 'ask', text: '"여기 조금 더 칠해도 될까?" 물어봐요', result: '친구가 좋다고 해서 함께 칠했어요.', mood: '기쁨' }] }, prompt: '친구가 꾸민 곳을 바꾸고 싶어요. 어떻게 할까요?', target: { choice: 'ask' }, difficulty: 0.1 },
          { type: 'choice', prompt: '함께 꾸밀 때 먼저 할 일은?', options: ['맡을 부분을 나눠요', '좋은 곳을 먼저 차지해요', '혼자 다 꾸며요'], answer: 0, difficulty: 0.05, explain: '맡을 부분을 나누면 모두 함께 꾸밀 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '함께 꾸미는 그림',
      items: [
        { type: 'table', prompt: '우리 모둠이 맡은 부분을 쓰세요.', columns: ['이름', '맡은 부분'], cells: [['', ''], ['', ''], ['', ''], ['', '']] },
        { type: 'check', prompt: '함께 꾸밀 때 지킨 약속에 ✓ 하세요.', options: ['먼저 물어봤어요', '재료를 나눴어요', '친구 부분을 칭찬했어요'] },
        { type: 'short', prompt: '친구가 꾸민 곳을 칭찬하는 말을 쓰세요.' },
        { type: 'draw', prompt: '내가 맡은 부분을 그리세요.' },
      ],
      easy: {
        note: '"해도 될까?" 하고 먼저 물어봐요.',
        items: [
          { type: 'choice', prompt: '친구 부분을 바꾸고 싶을 때 하는 말에 ○ 하세요.', options: ['"바꿔도 될까?"', '"내가 할래!"'], answer: '"바꿔도 될까?"' },
          { type: 'short', prompt: '내가 맡은 부분을 쓰세요.' },
          { type: 'draw', prompt: '모둠 그림을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '판에 모양 네 가지만 나와요. 맡을 부분은 교사가 함께 정해 줘요.',
      base: '맡을 부분을 모둠이 스스로 정해요.',
      challenge: '내 부분을 다 꾸미면 친구를 도와주고, 모둠 그림의 이름과 까닭을 발표해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 좋은 부분을 먼저 차지하려 다툰다 → "내가 해도 될까?" 묻는 말로 정하게 한다. ② 친구 부분을 허락 없이 고친다 → 출구 문항의 장면처럼 먼저 묻는 연습을 한다. ③ 혼자 맡은 부분만 하고 기다린다 → "도와줄까?" 말하기. 큰 종이는 모둠 책상 두 개를 붙여 펼친다.',
  }));

  // ── 41~48차시: 정리하고 돌아보기(경험과 활동의 성찰) ──

  lessons.push(L(41, {
    title: '쓴 재료와 용구를 제자리에 정리하기',
    objective: '만들기를 마친 뒤 가위·풀·크레파스·종이를 정해진 자리에 스스로 정리할 수 있다.',
    illustration: ART('a tidy paper classroom shelf with labeled bins for scissors, glue, crayons and colored paper, a child putting scissors in the scissors cup', '제자리에 쏙', [
      { motif: 'house', x: 110, y: 214, color: 'sky' }, { motif: 'star', x: 390, y: 84, s: 0.6 }, { motif: 'tree', x: 400, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"만들기가 끝나고 책상이 어지러우면 누가 치워야 할까요?" "선생님이요" "엄마가요" 하는 대답을 칠판에 적는다. "내가 쓴 것은 내가 정리하면 다음 사람이 바로 쓸 수 있어요"라고 말하며, 어지러운 책상과 정리된 책상 사진을 견주어 보여 준다. 시연 단추로 가위가 가위통 칸에 들어가는 모습을 보여 준다.',
        student: '지금 내 책상 위에 꺼내 둔 것을 세어 봐요.',
        demo: { tool: 'kitchen', options: { slots: [{ id: 'cup', label: '가위통' }, { id: 'glue', label: '풀 바구니' }], cards: ['가위', '딱풀'], shuffle: false }, sequence: [{ sort: { cup: ['가위'], glue: ['딱풀'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 제자리 찾기', minutes: 12, tool: 'kitchen',
            teacher: '"크레파스는 어디로 갈까요? 남은 색종이는요?" 교실 정리 칸의 이름표를 함께 읽는다. 크레파스를 색 차례대로 넣으면 다음에 꺼내기 쉽다는 것도 보여 준다. 정리는 나중에 어른이 해 주는 것이라고 여기는 학생에게 "내일 아침 이 가위를 쓸 친구는 누구일까요?" 하고 묻는다.',
            task: '쓴 재료와 용구를 알맞은 정리 칸에 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '쓴 것을 알맞은 정리 칸에 나누어 보세요.', toolOptions: { slots: [{ id: 'cup', label: '가위통' }, { id: 'glue', label: '풀 바구니' }, { id: 'box', label: '크레파스 상자' }, { id: 'paper', label: '다시 쓸 종이 상자' }], cards: ['안전 가위', '물풀', '빨강 크레파스', '남은 색종이'] },
                target: { sort: { cup: ['안전 가위'], glue: ['물풀'], box: ['빨강 크레파스'], paper: ['남은 색종이'] } }, difficulty: 0.1 },
              { prompt: '풀이 마르지 않게 용구부터 닫아 넣어요. 정리하는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['풀 뚜껑과 가위 날을 닫아 넣어요', '종이 조각을 모아요', '책상을 물티슈로 닦아요', '손을 씻어요'] },
                target: { order: ['풀 뚜껑과 가위 날을 닫아 넣어요', '종이 조각을 모아요', '책상을 물티슈로 닦아요', '손을 씻어요'] }, difficulty: 0.2,
                predict: { q: '풀 뚜껑을 닫지 않고 정리하면 어떻게 될까요?', options: ['풀이 말라 굳어요', '아무 일 없어요'], answer: 0 },
                conclude: '쓴 것을 바로 닫고 제자리에 두면 다음에도 바로 쓸 수 있어요.' },
              { prompt: '정리를 잘한 모습만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '정리 점검', items: [{ id: 'lid', text: '풀 뚜껑이 닫혀 있어요' }, { id: 'floor', text: '바닥에 종이 조각이 있어요' }, { id: 'cup', text: '가위가 가위통에 있어요' }, { id: 'order', text: '크레파스가 색 차례로 있어요' }] },
                target: { checklist: ['lid', 'cup', 'order'] }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 정리를 미루고 싶을 때', minutes: 14, tool: 'emotion',
            teacher: '"놀이 시간이 되었는데 아직 정리를 안 했어요. 어떻게 할까요?" 실제 장면을 짧게 역할놀이한다. 정리 노래를 정해 노래가 끝날 때까지 정리하는 약속을 만든다. 모둠 친구의 정리를 도와준 학생을 칭찬한다.',
            task: '정리를 미루고 싶은 장면에서 알맞은 행동을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '쉬는 시간 종이 울렸어요. 하준이는 어떻게 할까요?', toolOptions: { mode: 'branch', who: '하준', situation: '만들기를 마치자 종이 울렸어요. 하준이 책상에 가위와 종이 조각이 그대로 있어요.', choices: [
                { id: 'later', text: '선생님이 치워 주실 거야 하고 나가요', result: '다음 시간 친구가 가위를 찾지 못해 기다렸어요.', mood: '미안함', why: '내가 쓴 것을 남이 치우면 그 사람은 어떤 마음일까요?' },
                { id: 'now', text: '얼른 정리하고 나가요', result: '책상이 깨끗하고 마음도 가벼워요.', mood: '뿌듯함' },
                { id: 'push', text: '친구 책상으로 밀어 두고 나가요', result: '친구가 치우느라 놀지 못했어요.', mood: '속상함', why: '친구 자리로 밀면 친구는 어떻게 될까요?' }] }, target: { choice: 'now' }, difficulty: 0.1 },
              { prompt: '하준이가 말하기 전에 스스로 정리했어요. 하준이의 뿌듯한 마음 크기를 골라 보세요.', toolOptions: { mode: 'scale', who: '하준', situation: '하준이는 선생님이 말하기 전에 스스로 책상과 모둠 바구니를 깨끗하게 정리했어요.', feeling: '뿌듯함', after: '나도 스스로 정리하고 이 마음을 느껴 봐요.' }, target: { level: [3, 5] }, difficulty: 0.1 },
              { prompt: '짝이 정리를 혼자 하기 힘들어해요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '서아', situation: '서아 책상에 종이 조각이 아주 많아 혼자 치우기 힘들어해요.', choices: [
                { id: 'help', text: '"같이 모아 줄까?" 하고 도와요', result: '둘이 함께 금방 끝냈어요.', mood: '기쁨' },
                { id: 'watch', text: '구경만 해요', result: '서아만 늦게까지 치웠어요.', mood: '외로움', why: '혼자 늦게까지 치우는 친구는 어떤 마음일까요?' }] }, target: { choice: 'help' }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"정리 노래가 끝나기 전에 모두 정리해 볼까요?" 노래 한 곡 동안 실제로 정리한다. 끝난 뒤 정리 칸을 함께 보며 제자리에 없는 것을 찾는다. "내가 쓴 것은 내가 정리해요"를 함께 말하며 마친다.',
        exitTicket: [
          { type: 'tool', tool: 'kitchen', options: { slots: [{ id: 'cup', label: '가위통' }, { id: 'paper', label: '다시 쓸 종이 상자' }, { id: 'bin', label: '쓰레기통' }], cards: ['날을 닫은 가위', '큰 색종이 조각', '풀이 묻은 휴지'] }, prompt: '정리할 것을 알맞은 칸에 나누어 보세요.', target: { sort: { cup: ['날을 닫은 가위'], paper: ['큰 색종이 조각'], bin: ['풀이 묻은 휴지'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '만들기에 쓴 재료는 누가 정리하나요?', options: ['선생님', '쓴 내가', '다음에 쓸 친구'], answer: 1, difficulty: 0.05, explain: '내가 쓴 것을 내가 정리하면 모두가 편해요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '제자리에 정리해요',
      items: [
        { type: 'table', prompt: '정리할 곳을 쓰세요.', columns: ['쓴 것', '정리할 곳'], cells: [['가위', ''], ['풀', ''], ['남은 색종이', '']] },
        { type: 'check', prompt: '오늘 내가 한 정리에 ✓ 하세요.', options: ['풀 뚜껑을 닫았어요', '가위를 꽂았어요', '종이 조각을 모았어요', '책상을 닦았어요'] },
        { type: 'choice', prompt: '정리를 미루면 생기는 일에 ○ 하세요.', options: ['다음 사람이 찾지 못해요', '아무 일 없어요'], answer: '다음 사람이 찾지 못해요' },
        { type: 'draw', prompt: '정리가 끝난 내 책상을 그리세요.' },
      ],
      easy: {
        note: '닫고, 꽂고, 모으고, 닦아요.',
        items: [
          { type: 'choice', prompt: '가위는 어디에 두나요?', options: ['가위통', '바닥'], answer: '가위통' },
          { type: 'choice', prompt: '내가 쓴 것은 누가 정리하나요?', options: ['나', '선생님'], answer: '나' },
          { type: 'draw', prompt: '깨끗한 책상을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '모두 나눈 뒤 확인을 눌러요.',
      challenge: '정리 칸 이름표를 직접 만들고, 모둠 정리 도우미를 맡아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 정리는 나중에 어른이 해 주면 된다고 여긴다 → 다음에 쓸 친구를 떠올리게 하고, 정리 노래로 정리 시간을 정한다. ② 정리 칸이 어디인지 모른다 → 칸마다 그림 이름표를 붙인다. ③ 정리를 친구에게 미룬다 → "내가 쓴 것은 내가" 약속을 모둠마다 붙인다. 정리 시간은 활동 시간 안에 미리 넣어 둔다.',
  }));

  lessons.push(L(42, {
    title: '남은 종이 조각을 다시 쓸 것과 버릴 것으로 나누기',
    objective: '남은 종이 조각을 크기와 상태로 살펴 다시 쓸 것과 버릴 것으로 나누고, 다시 쓸 조각으로 작은 작품을 꾸밀 수 있다.',
    illustration: ART('a paper box labeled for reusable scraps full of colorful paper pieces, next to a small trash bin with tiny crumpled bits, and a small mosaic made of scraps', '다시 쓸까, 버릴까?', [
      { motif: 'leaf', x: 110, y: 214, color: 'mint' }, { motif: 'flower', x: 390, y: 226, color: 'rose' }, { motif: 'tree', x: 250, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"지난 시간들에 모은 \'다시 쓸 종이\' 상자를 열어 볼까요?" 상자를 쏟아 큰 조각과 아주 작은 부스러기, 풀이 묻은 조각을 보여 준다. 시연 단추로 \'손바닥만 한 조각\'이 다시 쓸 것 가지로 가는 모습을 보여 준다. 오늘은 조각을 나누고 다시 쓰는 방법을 찾는다고 말한다.',
        student: '상자에서 가장 큰 조각과 가장 작은 조각을 찾아 봐요.',
        demo: { tool: 'mindmap', options: { topic: '남은 종이', slots: ['다시 쓸 것', '버릴 것'], cards: ['손바닥만 한 조각', '젖은 휴지'], shuffle: false }, sequence: [{ sort: { '다시 쓸 것': ['손바닥만 한 조각'], '버릴 것': ['젖은 휴지'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 다시 쓸 것과 버릴 것', minutes: 10, tool: 'mindmap',
            teacher: '"이 조각은 다시 쓸 수 있을까요?" 하나씩 들어 보이며 크기, 풀이 묻었는지, 젖었는지를 살피게 한다. 모든 조각을 버리려는 학생과 모든 조각을 모으려는 학생이 있으니, 다시 쓸 수 있는 것을 고르는 까닭을 말하게 한다. "종이면 모두 종이 분리배출함에 넣는다"고 여기는 학생에게 "풀이 묻은 종이나 코 푼 휴지도 새 종이로 다시 만들 수 있을까요?" 하고 물어, 더러운 종이와 휴지는 일반 쓰레기통으로 간다는 것을 짚는다.',
            task: '남은 종이를 다시 쓸 것과 버릴 것으로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '남은 종이를 알맞은 가지에 나누어 보세요.', toolOptions: { topic: '남은 종이', slots: ['다시 쓸 것', '버릴 것'], cards: ['깨끗한 색종이 띠', '구긴 신문지를 편 것', '풀이 잔뜩 묻은 조각', '먼지보다 작은 부스러기'] },
                target: { sort: { '다시 쓸 것': ['깨끗한 색종이 띠', '구긴 신문지를 편 것'], '버릴 것': ['풀이 잔뜩 묻은 조각', '먼지보다 작은 부스러기'] } }, difficulty: 0.15,
                predict: { q: '구긴 신문지를 펴면 다시 쓸 수 있을까요?', options: ['쓸 수 있어요', '쓸 수 없어요'], answer: 0 },
                conclude: '깨끗하고 어느 정도 큰 조각은 다시 써서 종이를 아낄 수 있어요.' },
              { prompt: '다시 쓸 조각과 쓸 곳을 이어 보세요.', toolOptions: { mode: 'match', topic: '어디에 쓸까?', slots: [{ id: 's1', label: '작은 색종이 조각' }, { id: 's2', label: '긴 종이 띠' }], cards: ['모자이크 그림', '고리 사슬'] },
                target: { match: { s1: '모자이크 그림', s2: '고리 사슬' } }, difficulty: 0.15 },
              { prompt: '다시 쓰지 않을 종이를 버리는 곳에 나누어 보세요.', toolOptions: { topic: '버릴 종이', slots: ['종이 분리배출함', '일반 쓰레기통'], cards: ['다 쓴 깨끗한 공책 종이', '납작하게 편 과자 상자', '풀이 잔뜩 묻은 조각', '코 푼 휴지'] },
                target: { sort: { '종이 분리배출함': ['다 쓴 깨끗한 공책 종이', '납작하게 편 과자 상자'], '일반 쓰레기통': ['풀이 잔뜩 묻은 조각', '코 푼 휴지'] } }, difficulty: 0.2,
                conclude: '깨끗한 종이만 종이 분리배출함에 넣어요. 풀이 묻거나 젖은 종이와 휴지는 일반 쓰레기통에 버려요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 남은 조각으로 모자이크 꾸미기', minutes: 16, tool: 'collage',
            teacher: '"작은 조각도 여러 개 모으면 멋진 그림이 돼요." 판에서 작은 조각으로 꾸며 보고, 실제로 상자의 조각을 골라 도화지에 붙인다. 조각을 붙일 때는 34차시처럼 풀을 알맞게 바르게 한다. 다 쓰고 남은 조각은 다시 상자에 넣는다.',
            task: '작은 조각을 모아 모자이크 그림을 꾸며요.',
            levels: {
              easy: { shapes: ['square', 'circle', 'triangle'], colors: ['빨강', '노랑', '초록', '파랑'], sizes: ['s'] },
              base: { shapes: ['square', 'circle', 'triangle', 'diamond'], colors: ['빨강', '주황', '노랑', '초록', '파랑', '보라'], sizes: ['s'] },
              challenge: { sizes: ['s'] },
            },
            items: [
              { prompt: '작은 노랑 네모를 다섯 개 이상 모아 해를 꾸며 보세요.', target: { has: [{ shape: 'square', color: '노랑', size: 's', min: 5 }] }, difficulty: 0.15 },
              { prompt: '작은 초록 세모 네 개 이상, 빨강 동그라미 두 개 이상으로 사과나무를 꾸며 보세요.', target: { has: [{ shape: 'triangle', color: '초록', min: 4 }, { shape: 'circle', color: '빨강', min: 2 }] }, difficulty: 0.2 },
              { prompt: '남은 조각으로 나만의 모자이크를 꾸미고 점검해 보세요.', target: { selfCheck: ['작은 조각을 여덟 개 이상 썼어요', '조각 사이를 조금씩 띄웠어요', '남은 조각을 상자에 다시 넣었어요'], minPieces: 8 }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 다시 쓴 조각이 몇 개쯤일까요? 그만큼 새 종이를 아꼈어요." 모자이크 그림을 모아 보며 조각을 아낀 점을 칭찬한다. 깨끗한 종이는 종이 분리배출함에, 풀 묻은 조각과 젖은 종이·휴지는 일반 쓰레기통에 직접 넣게 한다. 다시 쓸 종이 상자는 늘 같은 자리에 둔다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '남은 종이', slots: ['다시 쓸 것', '버릴 것'], cards: ['반쯤 쓴 도화지', '물에 젖어 찢어진 종이', '깨끗한 포장지', '코 푼 휴지'] }, prompt: '집에서 나온 종이를 알맞은 가지에 나누어 보세요.', target: { sort: { '다시 쓸 것': ['반쯤 쓴 도화지', '깨끗한 포장지'], '버릴 것': ['물에 젖어 찢어진 종이', '코 푼 휴지'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '작은 색종이 조각을 다시 쓰는 좋은 방법은?', options: ['모두 버려요', '모아서 모자이크를 해요', '바닥에 뿌려요'], answer: 1, difficulty: 0.05, explain: '작은 조각도 모으면 모자이크 그림이 돼요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '다시 쓰는 종이',
      items: [
        { type: 'table', prompt: '남은 종이를 나누어 쓰세요. (색종이 띠, 젖은 종이, 포장지, 부스러기)', columns: ['다시 쓸 것', '버릴 것'], cells: [['', ''], ['', '']] },
        { type: 'choice', prompt: '긴 종이 띠로 만들기 좋은 것에 ○ 하세요.', options: ['고리 사슬', '물병'], answer: '고리 사슬' },
        { type: 'draw', prompt: '남은 색종이 조각을 붙여 모자이크를 만드세요.' },
        { type: 'short', prompt: '종이를 다시 쓰면 좋은 점을 쓰세요.' },
      ],
      easy: {
        note: '깨끗하고 큰 조각은 다시 써요.',
        items: [
          { type: 'choice', prompt: '다시 쓸 것에 ○ 하세요.', options: ['깨끗한 색종이', '젖은 휴지'], answer: '깨끗한 색종이' },
          { type: 'choice', prompt: '버릴 것에 ○ 하세요.', options: ['코 푼 휴지', '포장지'], answer: '코 푼 휴지' },
          { type: 'draw', prompt: '작은 조각을 붙여 꾸미세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 가지에 초록 테두리가 생겨요. 판에 작은 조각과 네 가지 색만 나와요.',
      base: '모두 나눈 뒤 확인을 눌러요.',
      challenge: '모든 색을 써서 조각 여덟 개 이상으로 모자이크를 꾸미고, 무엇을 꾸몄는지 설명해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 남은 조각은 모두 쓰레기라고 여긴다 → 다시 쓸 종이 상자로 모자이크를 해 보게 한다. ② 너무 작은 부스러기까지 모아 상자가 넘친다 → "손톱보다 작으면 버려요" 같은 기준을 정한다. ③ 정리는 나중에 어른이 해 준다고 여겨 바닥에 둔다 → 깨끗한 종이는 분리배출함, 더러운 종이는 일반 쓰레기통에 직접 넣게 한다.',
  }));

  lessons.push(L(43, {
    title: '내 작품에서 잘된 곳과 고칠 곳 찾기',
    objective: '내가 만든 작품을 살펴 잘된 곳 하나와 고칠 곳 하나를 찾아, 까닭과 함께 말할 수 있다.',
    illustration: ART('a paper child holding up their own collage and pointing at one part with a smile and another part with a thinking face', '잘된 곳, 고칠 곳', [
      { motif: 'star', x: 120, y: 84, s: 0.6 }, { motif: 'flower', x: 390, y: 226, color: 'buttercup' }, { motif: 'tree', x: 400, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"선생님이 만든 작품이에요. 잘된 곳은 어디이고 고치면 좋을 곳은 어디일까요?" 풀이 삐져나오고 지붕이 비뚤어진 집 그림을 보여 준다. 고칠 곳은 \'못한 곳\'이 아니라 \'더 좋아질 곳\'이라고 말해 준다. 시연 단추로 \'색이 또렷해요\'가 잘된 곳 가지로 가는 모습을 보여 준다.',
        student: '내 작품을 꺼내 가장 마음에 드는 곳을 손가락으로 짚어 봐요.',
        demo: { tool: 'mindmap', options: { topic: '내 작품', slots: ['잘된 곳', '고칠 곳'], cards: ['색이 또렷해요', '풀이 삐져나왔어요'], shuffle: false }, sequence: [{ sort: { '잘된 곳': ['색이 또렷해요'], '고칠 곳': ['풀이 삐져나왔어요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 잘된 곳과 고칠 곳 나누기', minutes: 12, tool: 'mindmap',
            teacher: '"오리기, 붙이기, 색칠하기를 하나씩 살펴봐요." 세 가지 기준으로 작품을 보게 한다. "다 잘했어요" 또는 "다 못했어요" 하는 학생에게 기준 하나씩 짚어 가며 다시 보게 한다.',
            task: '작품을 보고 잘된 곳과 고칠 곳을 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '준호 작품을 보고 잘된 곳과 고칠 곳으로 나누어 보세요.', toolOptions: { topic: '준호 작품', slots: ['잘된 곳', '고칠 곳'], cards: ['선을 따라 고르게 오렸어요', '모서리가 들떠 있어요', '진한 바탕에 연한 별이 또렷해요', '지붕이 집에서 떨어져 있어요'] },
                target: { sort: { '잘된 곳': ['선을 따라 고르게 오렸어요', '진한 바탕에 연한 별이 또렷해요'], '고칠 곳': ['모서리가 들떠 있어요', '지붕이 집에서 떨어져 있어요'] } }, difficulty: 0.15 },
              { prompt: '고칠 곳과 고치는 방법을 이어 보세요.', toolOptions: { mode: 'match', topic: '어떻게 고칠까?', slots: [{ id: 's1', label: '모서리가 들떠 있어요' }, { id: 's2', label: '풀이 삐져나왔어요' }, { id: 's3', label: '색이 너무 연해요' }], cards: ['가장자리에 풀을 살짝 더 발라요', '물티슈로 살살 닦아요', '꾹꾹 눌러 다시 칠해요'] },
                target: { match: { s1: '가장자리에 풀을 살짝 더 발라요', s2: '물티슈로 살살 닦아요', s3: '꾹꾹 눌러 다시 칠해요' } }, difficulty: 0.25,
                predict: { q: '모서리가 들뜬 곳은 무엇이 모자랐을까요?', options: ['풀', '가위'], answer: 0 },
                conclude: '고칠 곳을 찾으면 무엇이 모자랐는지 알고 다시 할 수 있어요.' },
              { prompt: '고칠 곳을 말하는 좋은 말만 골라 보세요.', toolOptions: { mode: 'pick', basket: '좋은 말', cards: ['여기를 고치면 더 좋아질 것 같아', '나는 다 못했어', '모서리를 다시 붙여 볼래'] },
                target: { pick: ['여기를 고치면 더 좋아질 것 같아', '모서리를 다시 붙여 볼래'] }, difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 내 작품을 돌아보는 마음', minutes: 14, tool: 'emotion',
            teacher: '"고칠 곳을 찾으면 속상한가요?" 속상한 마음도 괜찮다고 받아 준 뒤, 판에서는 준호 이야기의 "조금 달라요"와 "다른 곳은 잘 만들었어요"를 근거로 아쉬움이 아주 크지는 않다는 것을 찾게 한다. 그리고 고칠 곳을 찾은 것은 다음에 더 잘할 수 있는 길을 찾은 것이라고 말한다. 짝에게 내 작품의 잘된 곳 하나와 고칠 곳 하나를 말하게 한다.',
            task: '작품을 돌아보는 친구의 마음과 다음 행동을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '준호가 나비 작품에서 고칠 곳을 찾았어요. 준호의 아쉬운 마음 크기를 골라 보세요.', toolOptions: { mode: 'scale', who: '준호', situation: '준호의 나비는 날개가 양쪽이 조금 달라요. 다른 곳은 마음에 들게 잘 만들었어요.', feeling: '아쉬움', after: '아쉬운 곳은 다음 시간에 고쳐서 다시 만들어요.' }, target: { level: [2, 3] }, difficulty: 0.1 },
              { prompt: '민지가 작품이 마음에 들지 않아요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '민지', situation: '민지가 만든 얼굴 작품의 입이 비뚤어졌어요.', choices: [
                { id: 'tear', text: '작품을 찢어 버려요', result: '잘된 눈까지 사라졌어요.', mood: '속상함', why: '잘된 곳까지 버리면 어떻게 될까요?' },
                { id: 'fix', text: '잘된 곳은 두고 입만 다시 붙여요', result: '얼굴이 활짝 웃게 되었어요.', mood: '뿌듯함' },
                { id: 'hide', text: '아무에게도 안 보여 줘요', result: '혼자서는 고칠 방법을 찾기 어려웠어요.', mood: '외로움', why: '친구에게 보여 주면 어떤 도움을 받을 수 있을까요?' }] }, target: { choice: 'fix' }, difficulty: 0.1 },
              { prompt: '짝에게 내 작품을 말하는 말을 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['잘된 곳을 말해요', '고칠 곳을 말해요', '고칠 방법을 말해요'] },
                target: { order: ['잘된 곳을 말해요', '고칠 곳을 말해요', '고칠 방법을 말해요'] }, difficulty: 0.15 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"내 작품의 잘된 곳 하나, 고칠 곳 하나를 붙임쪽지에 써서 작품에 붙여 볼까요?" 고칠 곳 쪽지는 다음 시간 다시 만들기에 쓴다고 알려 준다. 작품과 쪽지는 각자 작품 파일에 넣어 정리한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '어떻게 고칠까?', slots: [{ id: 'e1', label: '오린 선이 삐뚤빼뚤해요' }, { id: 'e2', label: '되풀이 무늬 차례가 바뀌었어요' }], cards: ['종이를 돌리며 천천히 오려요', '묶음을 끊어 읽고 다시 붙여요'] }, prompt: '고칠 곳과 고치는 방법을 이어 보세요.', target: { match: { e1: '종이를 돌리며 천천히 오려요', e2: '묶음을 끊어 읽고 다시 붙여요' } }, difficulty: 0.2 },
          { type: 'choice', prompt: '고칠 곳을 찾은 것은 어떤 뜻인가요?', options: ['작품을 망쳤어요', '더 좋아질 곳을 찾았어요', '다시는 안 만들어요'], answer: 1, difficulty: 0.1, explain: '고칠 곳은 다음에 더 잘할 수 있는 곳이에요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '내 작품 돌아보기',
      items: [
        { type: 'short', prompt: '내 작품에서 잘된 곳을 쓰세요.' },
        { type: 'short', prompt: '내 작품에서 고칠 곳을 쓰세요.' },
        { type: 'choice', prompt: '모서리가 들떴을 때 고치는 방법에 ○ 하세요.', options: ['풀을 살짝 더 발라요', '작품을 버려요'], answer: '풀을 살짝 더 발라요' },
        { type: 'check', prompt: '내 작품을 살펴본 것에 ✓ 하세요.', options: ['오리기', '붙이기', '색칠하기'] },
      ],
      easy: {
        note: '잘된 곳 먼저 찾아요.',
        items: [
          { type: 'draw', prompt: '내 작품에서 가장 잘된 곳을 그리세요.' },
          { type: 'choice', prompt: '고칠 곳을 찾았을 때 하는 말에 ○ 하세요.', options: ['"고쳐 볼래"', '"다 못했어"'], answer: '"고쳐 볼래"' },
          { type: 'short', prompt: '고칠 곳 하나를 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 가지에 초록 테두리가 생기고, 고른 행동의 결과가 바로 보여요.',
      base: '모두 나눈 뒤 확인을 눌러요.',
      challenge: '오리기·붙이기·색칠하기 세 기준으로 내 작품을 모두 살펴 쓰고, 짝 작품도 살펴 줘요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 고칠 곳을 "못한 곳"으로 여겨 속상해한다 → 더 좋아질 곳이라고 말을 바꾸어 준다. ② "다 잘했어요"로 끝낸다 → 오리기·붙이기·색칠하기 기준 하나씩 짚는다. ③ 마음에 안 드는 작품을 찢는다 → 잘된 곳을 먼저 찾게 한다. 붙임쪽지는 44차시 다시 만들기의 출발점이 된다.',
  }));

  lessons.push(L(44, {
    title: '고칠 곳을 고쳐 작품을 다시 만들기',
    objective: '지난 시간에 찾은 고칠 곳 하나를 골라 알맞은 방법으로 고치고, 고치기 전과 뒤를 견주어 말할 수 있다.',
    illustration: ART('two paper butterflies side by side, the left one with uneven wings and the right one fixed with matching wings, an arrow between them', '고쳐서 다시 만들어요', [
      { motif: 'butterfly', x: 250, y: 140 }, { motif: 'flower', x: 110, y: 226, color: 'rose' }, { motif: 'tree', x: 400, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"지난 시간 작품에 붙인 고칠 곳 쪽지를 읽어 볼까요?" 두세 명이 읽게 한다. 날개가 다른 나비를 고쳐 양쪽이 같아지는 모습을 시연 단추로 보여 준다. "고친 작품은 처음 작품보다 무엇이 나아졌는지 꼭 견주어 봐요"라고 말한다.',
        student: '내 고칠 곳 쪽지를 소리 내어 읽어 봐요.',
        demo: { tool: 'collage', options: { readOnly: true, guide: 'vertical' }, sequence: [{ symmetry: 'vertical' }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 판에서 고쳐 보기', minutes: 12, tool: 'collage',
            teacher: '"어디가 고칠 곳인지 먼저 손가락으로 짚어요." 판의 작품마다 잘못된 곳을 찾게 한 뒤 고치게 한다. 다 지우고 처음부터 하려는 학생에게 "잘된 곳은 그대로 두고, 고칠 곳만 바꿔요"라고 말한다.',
            task: '고칠 곳이 있는 작품을 판에서 고쳐요.',
            levels: {
              easy: { shapes: ['heart', 'circle', 'triangle', 'square', 'star'], colors: ['분홍', '노랑', '빨강', '초록', '파랑', '보라'], sizes: ['m', 'l'], guide: 'vertical' },
              base: { shapes: ['heart', 'circle', 'triangle', 'square', 'leaf', 'star'], colors: ['분홍', '노랑', '빨강', '초록', '파랑', '보라'], guide: 'vertical' },
              challenge: { guide: 'vertical' },
            },
            items: [
              { prompt: '나비 오른쪽 날개가 빠졌어요. 왼쪽과 양쪽이 같게 고쳐 보세요.', state: { pieces: [{ shape: 'heart', color: '분홍', size: 'l', x: 200, y: 180, r: 270 }, { shape: 'circle', color: '노랑', size: 's', x: 280, y: 200, r: 0 }] }, target: { symmetry: 'vertical' }, difficulty: 0.25,
                conclude: '잘된 곳은 두고 고칠 곳만 바꾸면 작품이 더 나아져요.' },
              { prompt: '빨강 동그라미와 초록 세모의 되풀이 무늬가 짧아요. 세 번 이상 되풀이되게 고쳐 보세요.', state: { pieces: [{ shape: 'circle', color: '빨강', size: 'm', x: 80, y: 200, r: 0 }, { shape: 'triangle', color: '초록', size: 'm', x: 140, y: 200, r: 0 }, { shape: 'circle', color: '빨강', size: 'm', x: 200, y: 200, r: 0 }] }, target: { repeat: { times: 3, unit: 2 } }, difficulty: 0.25 },
              { prompt: '보라 밤하늘에 보라 별을 붙였더니 잘 안 보여요. 연한 색 별을 하나 더 맞대어 또렷하게 고쳐 보세요.', state: { pieces: [{ shape: 'rect', color: '보라', size: 'l', x: 280, y: 200, r: 0 }, { shape: 'star', color: '보라', size: 'm', x: 220, y: 200, r: 0 }] }, target: { contrast: 'light-dark', has: [{ shape: 'star', min: 2 }] }, difficulty: 0.2 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 내 작품 고치기 (실습)', minutes: 14, tool: 'kitchen',
            teacher: '"내 쪽지의 고칠 곳 하나만 골라 고쳐요." 실제 작품을 고치게 하고, 고친 뒤 처음 사진(교사가 미리 찍어 둔 것)과 견주게 한다. 고치는 데 쓴 재료는 41차시 약속대로 제자리에 둔다.',
            task: '고치는 차례를 정하고 실제로 고친 뒤 점검해요.',
            levels: CARD_LV,
            items: [
              { prompt: '작품을 고치는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['고칠 곳 쪽지를 읽어요', '고칠 방법을 정해요', '고칠 곳만 고쳐요', '처음 작품과 견주어 봐요'] },
                target: { order: ['고칠 곳 쪽지를 읽어요', '고칠 방법을 정해요', '고칠 곳만 고쳐요', '처음 작품과 견주어 봐요'] }, difficulty: 0.15,
                predict: { q: '작품을 고칠 때 잘된 곳은 어떻게 할까요?', options: ['그대로 둬요', '모두 다시 해요'], answer: 0 } },
              { prompt: '내 작품을 고쳤으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '고친 뒤 할 일만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '고친 뒤에', items: [{ id: 'compare', text: '처음 작품과 견주어요' }, { id: 'tell', text: '나아진 점을 짝에게 말해요' }, { id: 'mess', text: '쓴 재료를 그대로 둬요' }, { id: 'tidy', text: '쓴 재료를 제자리에 둬요' }] },
                target: { checklist: ['compare', 'tell', 'tidy'] }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"고치기 전과 뒤, 무엇이 나아졌나요?" 두세 명이 처음 사진과 고친 작품을 나란히 들고 말하게 한다. 한 번에 다 고치지 못해도 괜찮다고 말해 주고, 고친 작품은 47차시 전시에 낸다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'collage', options: { shapes: ['circle', 'leaf', 'heart'], colors: ['초록', '노랑'], guide: 'vertical' }, state: { pieces: [{ shape: 'leaf', color: '초록', size: 'm', x: 220, y: 200, r: 315 }, { shape: 'circle', color: '노랑', size: 'm', x: 280, y: 120, r: 0 }] }, prompt: '왼쪽 나뭇잎의 짝이 빠졌어요. 양쪽이 같게 고쳐 보세요.', target: { symmetry: 'vertical' }, difficulty: 0.2 },
          { type: 'choice', prompt: '꽃 그림의 색이 너무 연해요. 어떻게 고칠까요?', options: ['꾹꾹 눌러 다시 칠해요', '작품을 버려요', '그냥 둬요'], answer: 0, difficulty: 0.1, explain: '힘을 주어 칠하면 색이 진해져요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '고쳐서 다시 만들기',
      items: [
        { type: 'short', prompt: '내가 고친 곳을 쓰세요.' },
        { type: 'table', prompt: '고치기 전과 뒤를 견주어 쓰세요.', columns: ['고치기 전', '고친 뒤'], cells: [['', '']] },
        { type: 'figure', wide: true, prompt: '빠진 날개를 그려 나비를 고치세요.', tool: 'collage', options: { guide: 'vertical' }, figures: [{ options: { readOnly: true, printColors: false, guide: 'vertical' }, state: { pieces: [{ shape: 'heart', color: '분홍', size: 'l', x: 200, y: 180, r: 270 }, { shape: 'circle', color: '노랑', size: 's', x: 280, y: 200, r: 0 }] }, caption: '오른쪽 날개 그리기' }], answer: '오른쪽에 같은 거리, 반대 방향의 하트 날개' },
        { type: 'choice', prompt: '작품을 고칠 때 잘된 곳은 어떻게 하나요?', options: ['그대로 둬요', '모두 다시 해요'], answer: '그대로 둬요' },
      ],
      easy: {
        note: '고칠 곳 하나만 골라 고쳐요.',
        items: [
          { type: 'short', prompt: '고칠 곳 하나를 쓰세요.' },
          { type: 'draw', prompt: '고친 뒤의 모습을 그리세요.' },
          { type: 'check', prompt: '고친 뒤 기분에 ✓ 하세요.', options: ['뿌듯해요', '그저 그래요', '아쉬워요'] },
        ],
      },
    },
    differentiation: {
      easy: '판에 접는 선이 보이고 모양·색이 줄어요. 실제 작품은 고칠 곳 하나만 고쳐요.',
      base: '판의 세 작품을 모두 고치고, 실제 작품도 고쳐요.',
      challenge: '고칠 곳 두 군데를 고치고, 고친 방법을 친구에게 알려 줘요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 처음부터 다시 만들려 한다 → 잘된 곳은 두고 고칠 곳만 바꾸게 한다. ② 무엇이 나아졌는지 말하지 못한다 → 처음 사진과 나란히 놓고 견주게 한다. ③ 고치느라 쓴 재료를 그대로 둔다 → 41차시 정리 약속을 다시 말한다. 43차시에 작품 사진을 미리 찍어 두면 견주기 쉽다.',
  }));

  lessons.push(L(45, {
    title: '친구 작품을 감상하고 고운 말로 칭찬하기',
    objective: '친구 작품에서 눈에 띄는 곳을 찾아, 무엇이 왜 좋은지 고운 말로 칭찬할 수 있다.',
    illustration: ART('paper children walking slowly past a row of classmates artworks on the wall, one pointing at a picture and smiling while speaking kindly', '친구 작품 보기', [
      { motif: 'heart', x: 120, y: 90, s: 0.6 }, { motif: 'flower', x: 390, y: 226, color: 'rose' }, { motif: 'tree', x: 400, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"\'예뻐요\'라는 말만 들으면 무엇이 예쁜지 알 수 있을까요?" "노란 별이 까만 하늘에서 반짝여서 예뻐요"처럼 무엇이 왜 좋은지 말하면 듣는 친구가 더 기쁘다는 것을 견주어 들려준다. 시연 단추로 칭찬하는 말의 차례가 놓이는 모습을 보여 준다.',
        student: '내가 들었던 칭찬 가운데 가장 기뻤던 말을 떠올려 봐요.',
        demo: { tool: 'story', options: { cards: [{ id: 'look', text: '작품을 천천히 봐요', motif: 'star' }, { id: 'find', text: '좋은 곳을 찾아요', motif: 'flower' }, { id: 'say', text: '까닭과 함께 말해요', motif: 'heart' }], slots: ['1', '2', '3'], shuffle: false }, sequence: [{ order: ['look', 'find', 'say'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 무엇이 왜 좋은지 말하기', minutes: 12, tool: 'mindmap',
            teacher: '"까닭이 있는 칭찬과 까닭이 없는 칭찬을 나누어 볼까요?" 카드를 소리 내어 읽고 나누게 한다. 놀리는 말이나 견주는 말("내 것보다 못해")을 칭찬이라고 여기는 학생에게 듣는 친구의 마음을 물어본다.',
            task: '감상하는 말을 나누고, 고운 칭찬을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '감상하는 말을 알맞은 가지에 나누어 보세요.', toolOptions: { topic: '감상하는 말', slots: ['까닭이 있는 칭찬', '까닭이 없는 말'], cards: ['하트가 되풀이되어서 리듬이 느껴져', '좋아', '양쪽 날개가 똑같아서 나비 같아', '그냥 멋져'] },
                target: { sort: { '까닭이 있는 칭찬': ['하트가 되풀이되어서 리듬이 느껴져', '양쪽 날개가 똑같아서 나비 같아'], '까닭이 없는 말': ['좋아', '그냥 멋져'] } }, difficulty: 0.2,
                predict: { q: '어떤 칭찬을 들으면 더 기쁠까요?', options: ['"좋아"', '"색이 또렷해서 멀리서도 잘 보여"'], answer: 1 },
                conclude: '무엇이 왜 좋은지 말하면 친구가 더 기쁘고 다음에도 힘이 나요.' },
              { prompt: '친구에게 해도 되는 고운 말만 골라 보세요.', toolOptions: { mode: 'pick', basket: '고운 말', cards: ['반달 입이 웃는 것 같아 재미있어', '내 것보다 못하네', '풀을 깔끔하게 붙였구나', '이상해'] },
                target: { pick: ['반달 입이 웃는 것 같아 재미있어', '풀을 깔끔하게 붙였구나'] }, difficulty: 0.1 },
              { prompt: '작품과 어울리는 칭찬을 이어 보세요.', toolOptions: { mode: 'match', topic: '어떤 칭찬?', slots: [{ id: 's1', label: '까만 밤하늘의 노랑 별' }, { id: 's2', label: '접어 오린 하트' }], cards: ['별이 또렷하게 반짝여', '양쪽이 똑같이 예뻐'] },
                target: { match: { s1: '별이 또렷하게 반짝여', s2: '양쪽이 똑같이 예뻐' } }, difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 작품 둘러보며 칭찬 쪽지 쓰기 (실습)', minutes: 14, tool: 'story',
            teacher: '"작품 앞에서 천천히 보고, 좋은 곳 하나를 찾아 칭찬 쪽지를 붙여요." 모둠별로 돌아가며 친구 작품을 감상한다. 쪽지에는 "무엇이 + 왜 좋은지"를 쓰게 하고, 글자가 어려운 학생은 그림과 한 낱말로 쓰게 한다.',
            task: '칭찬하는 말을 만들고, 친구 작품에 칭찬 쪽지를 붙여요.',
            levels: CARD_LV,
            items: [
              { prompt: '칭찬하는 말의 빈칸을 채워 보세요.', toolOptions: { mode: 'fill', cards: ['색이 또렷해서', '조각이 많아서', '크기가 작아서'], slots: [{ id: 'b1', who: '서아', motif: 'star', label: '하준아, 네 별 그림은 ___ 멀리서도 잘 보여.' }] },
                target: { fill: { b1: '색이 또렷해서' } }, difficulty: 0.15 },
              { prompt: '친구 작품에 칭찬 쪽지를 두 장 이상 붙였으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '칭찬을 들은 친구의 말을 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['고마워, 힘이 나', '흥, 알아', '몰라'], slots: [{ id: 'b1', who: '민지', motif: 'heart', label: '"___!" 하고 웃었어요.' }] },
                target: { fill: { b1: '고마워, 힘이 나' } }, difficulty: 0.05 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"내 작품에 붙은 칭찬 쪽지를 읽어 볼까요? 가장 기뻤던 쪽지는 무엇인가요?" 두세 명이 읽고 까닭을 말한다. 칭찬 쪽지는 작품 파일에 함께 넣어 간직하게 한다. 작품을 감상할 때 손으로 만지지 않는 약속을 다시 말한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', basket: '까닭이 있는 칭찬', cards: ['초록 잎을 겹쳐 붙여 나무가 풍성해 보여', '음, 좋네', '빨강 동그라미 무늬가 고르게 이어져'] }, prompt: '까닭이 있는 칭찬만 골라 보세요.', target: { pick: ['초록 잎을 겹쳐 붙여 나무가 풍성해 보여', '빨강 동그라미 무늬가 고르게 이어져'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '친구 작품에 고칠 곳이 보이면 어떻게 말할까요?', options: ['"이상해"', '"여기를 이렇게 하면 더 좋을 것 같아"', '"내 것이 더 좋아"'], answer: 1, difficulty: 0.15, explain: '고칠 곳도 고운 말로, 방법과 함께 말해요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '친구 작품 감상',
      items: [
        { type: 'short', prompt: '친구 작품에서 좋은 곳을 쓰세요.' },
        { type: 'blank', prompt: '칭찬하는 말을 완성하세요.', text: '네 작품은 _______해서 좋아.', answer: '(예) 색이 또렷' },
        { type: 'check', prompt: '고운 감상 말에 ✓ 하세요.', options: ['양쪽이 똑같아서 멋져', '이상해', '풀을 깔끔하게 붙였구나'] },
        { type: 'draw', prompt: '가장 마음에 든 친구 작품을 그리세요.' },
      ],
      easy: {
        note: '무엇이 + 왜 좋은지!',
        items: [
          { type: 'choice', prompt: '고운 말에 ○ 하세요.', options: ['멋지다', '이상해'], answer: '멋지다' },
          { type: 'short', prompt: '친구 작품에서 좋은 곳 하나를 쓰세요.' },
          { type: 'draw', prompt: '칭찬 쪽지를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 가지에 초록 테두리가 생겨요. 칭찬 쪽지는 그림과 한 낱말로 써요.',
      base: '모두 나눈 뒤 확인을 눌러요. 칭찬 쪽지에 까닭을 써요.',
      challenge: '칭찬과 함께 더 좋아질 방법도 고운 말로 하나 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① "예뻐요"만 말한다 → "무엇이? 왜?" 두 질문을 되묻는다. ② 견주는 말이나 놀리는 말을 한다 → 듣는 친구의 마음을 묻는다. ③ 작품을 손으로 만진다 → 눈으로만 보는 감상 약속을 먼저 정한다. 칭찬 쪽지는 이름 대신 별명 없이 실제 이름으로 쓰되, 받은 쪽지는 본인만 보게 한다.',
  }));

  lessons.push(L(46, {
    title: '다음에 써 보고 싶은 재료를 고르고 계획하기',
    objective: '이번 단원에서 써 본 재료를 돌아보고, 다음에 만들고 싶은 것과 써 볼 재료를 까닭과 함께 고를 수 있다.',
    illustration: ART('a paper child looking at a shelf of materials, crayons, hanji, cardboard, bottle caps and leaves, with a thought bubble showing a planned craft', '다음엔 무엇으로?', [
      { motif: 'leaf', x: 110, y: 214, color: 'mint' }, { motif: 'star', x: 390, y: 84, s: 0.6 }, { motif: 'tree', x: 400, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"이번 단원에서 어떤 재료를 써 봤나요?" 색연필·크레파스·여러 종이·풀·가위·자연물·재활용품을 칠판에 그림 카드로 붙이며 함께 말한다. 시연 단추로 \'써 봤어요\'와 \'더 써 보고 싶어요\' 가지에 카드가 놓이는 모습을 보여 준다.',
        student: '가장 재미있었던 재료 하나를 손가락으로 가리켜 봐요.',
        demo: { tool: 'mindmap', options: { topic: '재료 돌아보기', slots: ['써 봤어요', '더 써 보고 싶어요'], cards: ['크레파스', '한지'], shuffle: false }, sequence: [{ sort: { '써 봤어요': ['크레파스'], '더 써 보고 싶어요': ['한지'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 만들 것에 맞는 재료 고르기', minutes: 12, tool: 'mindmap',
            teacher: '"다음에 등을 만들고 싶다면 어떤 종이가 좋을까요? 26차시에 무엇을 알았지요?" 지난 경험을 떠올려 까닭을 말하게 한다. 재료는 무엇이든 똑같다고 말하는 학생에게 25~26차시 활동지를 다시 펴 보게 한다.',
            task: '만들고 싶은 것에 맞는 재료를 고르고 까닭을 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '만들고 싶은 것과 알맞은 재료를 이어 보세요.', toolOptions: { mode: 'match', topic: '다음에 만들 것', slots: [{ id: 's1', label: '빛이 은은한 등' }, { id: 's2', label: '튼튼한 로봇' }, { id: 's3', label: '소리 나는 악기' }], cards: ['한지', '상자 골판지', '병과 콩'] },
                target: { match: { s1: '한지', s2: '상자 골판지', s3: '병과 콩' } }, difficulty: 0.15 },
              { prompt: '재료와 고른 까닭을 이어 보세요.', toolOptions: { mode: 'match', topic: '왜 골랐을까?', slots: [{ id: 's1', label: '크레파스' }, { id: 's2', label: '물풀' }], cards: ['넓은 곳을 진하게 칠하려고', '솜을 붙이려고'] },
                target: { match: { s1: '넓은 곳을 진하게 칠하려고', s2: '솜을 붙이려고' } }, difficulty: 0.2,
                predict: { q: '로봇을 신문지로 만들면 어떨까요?', options: ['쉽게 찌그러져요', '아주 튼튼해요'], answer: 0 },
                conclude: '만들 것에 맞는 재료를 고르면 생각한 대로 만들 수 있어요.' },
              { prompt: '다음 시간에 처음 써 보고 싶은 재료만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '처음 써 볼 재료', cards: ['수수깡', '털실', '크레파스'] },
                target: { pick: ['수수깡', '털실'] }, difficulty: 0.2 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 다음 만들기 계획 세우기', minutes: 14, tool: 'kitchen',
            teacher: '"계획에는 무엇을 만들지, 어떤 재료를 쓸지, 어떤 약속을 지킬지가 들어가요." 계획 차례를 함께 세우고 활동지에 계획을 그리게 한다. 지킬 약속에는 이번 단원에서 배운 안전·나누기·정리 약속을 넣게 한다.',
            task: '다음 만들기 계획의 차례를 놓고, 지킬 약속을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '만들기 계획을 세우는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['만들 것을 정해요', '쓸 재료를 골라요', '지킬 약속을 정해요', '계획을 그려요'] },
                target: { order: ['만들 것을 정해요', '쓸 재료를 골라요', '지킬 약속을 정해요', '계획을 그려요'] }, difficulty: 0.15 },
              { prompt: '다음 만들기에서도 지킬 약속만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '다음에도 지킬 약속', items: [{ id: 'safe', text: '가위는 앉아서 써요' }, { id: 'share', text: '재료를 나누어 써요' }, { id: 'tidy', text: '쓴 것은 내가 정리해요' }, { id: 'waste', text: '새 종이를 마음껏 써요' }] },
                target: { checklist: ['safe', 'share', 'tidy'] }, difficulty: 0.1 },
              { prompt: '계획을 활동지에 그렸으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"내 계획을 짝에게 소개해 볼까요? 무엇을, 무엇으로, 어떤 약속을 지키며 만들지 말해요." 두세 명이 발표한다. 계획 활동지는 교실 \'다음에 만들 것\' 판에 붙여 두고, 다음 학기 만들기에서 다시 꺼내 본다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '다음에 만들 것', slots: [{ id: 'e1', label: '바람에 날리는 바람개비' }, { id: 'e2', label: '세워 두는 연필꽂이' }], cards: ['얇은 색종이', '단단한 휴지 심'] }, prompt: '만들 것과 알맞은 재료를 이어 보세요.', target: { match: { e1: '얇은 색종이', e2: '단단한 휴지 심' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '재료를 고를 때 가장 먼저 생각할 것은?', options: ['무엇을 만들지', '가장 비싼 재료', '친구가 고른 재료'], answer: 0, difficulty: 0.1, explain: '만들 것을 정해야 알맞은 재료를 고를 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '다음 만들기 계획',
      items: [
        { type: 'short', prompt: '다음에 만들고 싶은 것을 쓰세요.' },
        { type: 'table', prompt: '쓸 재료와 고른 까닭을 쓰세요.', columns: ['재료', '고른 까닭'], cells: [['', ''], ['', '']] },
        { type: 'check', prompt: '지킬 약속에 ✓ 하세요.', options: ['가위 안전', '재료 나누기', '스스로 정리'] },
        { type: 'draw', prompt: '만들고 싶은 것을 계획 그림으로 그리세요.' },
      ],
      easy: {
        note: '무엇을 → 무엇으로 → 어떤 약속!',
        items: [
          { type: 'short', prompt: '만들고 싶은 것을 쓰세요.' },
          { type: 'choice', prompt: '빛이 비치는 등에 알맞은 종이에 ○ 하세요.', options: ['한지', '골판지'], answer: '한지' },
          { type: 'draw', prompt: '만들고 싶은 것을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 초록 테두리가 생기고, 틀리면 카드가 돌아와요. 계획은 그림으로 해요.',
      base: '모두 이은 뒤 확인을 눌러요. 계획에 재료와 까닭을 써요.',
      challenge: '재료를 두 가지 이상 섞어 쓰는 계획을 세우고, 섞는 까닭을 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 재료는 무엇이든 똑같다고 여긴다 → 25~26차시 활동지를 다시 펴 견주게 한다. ② 만들 것보다 재료부터 고른다 → "무엇을 만들까?"를 먼저 묻는다. ③ 계획에 약속을 빠뜨린다 → 안전·나누기·정리 세 그림 카드를 칠판에 붙여 둔다.',
  }));

  lessons.push(L(47, {
    title: '우리 반 작품 전시회를 약속 지키며 둘러보기',
    objective: '작품 전시회를 열고, 작품을 만지지 않기·차례로 둘러보기·작게 말하기 같은 관람 약속을 지키며 감상할 수 있다.',
    illustration: ART('a paper classroom exhibition with artworks hanging on strings, children walking in a line, one child hosting at their artwork', '우리 반 전시회', [
      { motif: 'star', x: 120, y: 84, s: 0.6 }, { motif: 'heart', x: 380, y: 90, s: 0.6 }, { motif: 'flower', x: 250, y: 226, color: 'buttercup' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"미술관에 가 본 적이 있나요? 그곳에서는 어떤 약속을 지켰나요?" 학생들의 경험을 듣고, 오늘은 우리 반이 전시회를 연다고 말한다. 시연 단추로 전시회 준비 차례가 놓이는 모습을 보여 준다. 작품 이름표에는 작품 이름과 만든 사람, 쓴 재료를 쓴다는 것도 알린다.',
        student: '내 작품에 어떤 이름을 붙일지 떠올려 봐요.',
        demo: { tool: 'kitchen', options: { mode: 'order', cards: ['작품 이름표를 써요', '작품을 걸어요', '차례로 둘러봐요'], shuffle: false }, sequence: [{ order: ['작품 이름표를 써요', '작품을 걸어요', '차례로 둘러봐요'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 전시회 준비하기', minutes: 10, tool: 'kitchen',
            teacher: '"작품 이름표에 무엇을 쓸까요?" 이름표 예시(작품 이름·만든 사람·쓴 재료)를 보여 주고 쓰게 한다. 작품을 걸 때 끈과 집게는 모둠 바구니에서 필요한 만큼만 가져가게 한다.',
            task: '전시회 준비 차례를 놓고, 이름표에 쓸 것을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '전시회를 준비하는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['작품 이름을 정해요', '이름표를 써요', '작품을 집게로 걸어요', '남은 집게를 바구니에 돌려놓아요'] },
                target: { order: ['작품 이름을 정해요', '이름표를 써요', '작품을 집게로 걸어요', '남은 집게를 바구니에 돌려놓아요'] }, difficulty: 0.15 },
              { prompt: '작품 이름표에 쓸 것만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '작품 이름표', items: [{ id: 'title', text: '작품 이름' }, { id: 'maker', text: '만든 사람' }, { id: 'stuff', text: '쓴 재료' }, { id: 'price', text: '작품 값' }] },
                target: { checklist: ['title', 'maker', 'stuff'] }, difficulty: 0.15 },
              { prompt: '작품을 다 걸었으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 관람 약속 지키며 둘러보기', minutes: 16, tool: 'emotion',
            teacher: '"작품 앞에 사람이 많을 때는 어떻게 할까요?" 관람 약속(만지지 않기·차례로 걷기·작게 말하기)을 함께 정하고, 모둠의 반은 작품 옆에서 설명하고 반은 둘러본 뒤 바꾼다. 45차시처럼 칭찬 쪽지를 붙이게 한다.',
            task: '전시회에서 생기는 일에서 알맞은 행동을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '친구 작품이 신기해서 만져 보고 싶어요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '준호', situation: '준호가 보들보들한 솜이 붙은 작품을 보고 만져 보고 싶어 해요.', choices: [
                { id: 'touch', text: '살짝 만져 봐요', result: '솜이 떨어져 작품이 망가졌어요.', mood: '미안함', why: '여러 사람이 만지면 작품은 어떻게 될까요?' },
                { id: 'ask', text: '만든 친구에게 어떻게 만들었는지 물어봐요', result: '친구가 신나서 만든 방법을 알려 주었어요.', mood: '기쁨' }] }, target: { choice: 'ask' }, difficulty: 0.1,
                predict: { q: '모두가 작품을 한 번씩 만지면 어떻게 될까요?', options: ['작품이 망가질 수 있어요', '더 예뻐져요'], answer: 0 },
                conclude: '전시된 작품은 눈으로 보고, 궁금한 것은 말로 물어봐요.' },
              { prompt: '작품 앞에 친구들이 모여 있어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '보고 싶은 작품 앞에 친구 세 명이 서 있어요.', choices: [
                { id: 'push', text: '앞으로 비집고 들어가요', result: '친구가 밀려 넘어질 뻔했어요.', mood: '무서움', why: '밀린 친구는 어떻게 될까요?' },
                { id: 'wait', text: '뒤에서 차례를 기다려요', result: '차례가 되어 천천히 볼 수 있었어요.', mood: '편안함' },
                { id: 'shout', text: '"비켜!" 하고 크게 외쳐요', result: '전시회가 시끄러워졌어요.', mood: '불편함', why: '크게 외치면 다른 친구들은 어떨까요?' }] }, target: { choice: 'wait' }, difficulty: 0.1 },
              { prompt: '서아의 작품에 칭찬 쪽지가 세 장 붙었어요. 서아의 기쁜 마음 크기를 골라 보세요.', toolOptions: { mode: 'scale', who: '서아', situation: '서아의 작품 옆에 "양쪽이 똑같아 멋져", "색이 또렷해" 같은 칭찬 쪽지가 세 장이나 붙어 있어요.', feeling: '기쁨', after: '나도 친구 작품에 고운 쪽지를 남겨요.' }, target: { level: [3, 5] }, difficulty: 0.05 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"전시회에서 우리가 지킨 관람 약속은 무엇이었나요?" 함께 세 가지를 말한다. 전시가 끝난 뒤 작품을 내리고 집게와 끈을 제자리에 돌려놓는 일을 모둠이 함께 한다. 칭찬 쪽지는 작품과 함께 집에 가져가 가족에게 보여 주자고 말한다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'branch', situation: '도서관 그림 전시를 보러 갔는데, 동생이 그림 앞에서 뛰어다녀요.', choices: [
            { id: 'run', text: '같이 뛰어요', result: '그림 받침이 흔들려 넘어질 뻔했어요.', mood: '무서움', why: '전시장에서 뛰면 어떤 일이 생길까요?' },
            { id: 'tell', text: '"여기서는 천천히 걷자" 하고 손을 잡아요', result: '동생과 천천히 그림을 보았어요.', mood: '편안함' }] }, prompt: '다른 전시회에서 동생이 뛰어다녀요. 어떻게 할까요?', target: { choice: 'tell' }, difficulty: 0.1 },
          { type: 'choice', prompt: '전시회에서 지킬 약속이 아닌 것은?', options: ['작게 말해요', '작품을 만져요', '차례로 둘러봐요'], answer: 1, difficulty: 0.05, explain: '작품은 눈으로만 봐요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '우리 반 전시회',
      items: [
        { type: 'table', prompt: '내 작품 이름표를 쓰세요.', columns: ['작품 이름', '만든 사람', '쓴 재료'], cells: [['', '', '']] },
        { type: 'check', prompt: '내가 지킨 관람 약속에 ✓ 하세요.', options: ['작품을 만지지 않았어요', '차례로 둘러봤어요', '작게 말했어요'] },
        { type: 'short', prompt: '가장 기억에 남는 친구 작품과 그 까닭을 쓰세요.' },
        { type: 'draw', prompt: '우리 반 전시회 모습을 그리세요.' },
      ],
      easy: {
        note: '보기만, 차례로, 작게!',
        items: [
          { type: 'short', prompt: '내 작품 이름을 쓰세요.' },
          { type: 'choice', prompt: '전시회에서 알맞은 행동에 ○ 하세요.', options: ['눈으로만 봐요', '손으로 만져요'], answer: '눈으로만 봐요' },
          { type: 'draw', prompt: '마음에 든 작품을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '고른 행동의 결과가 바로 보이고, 다시 고를 수 있어요. 이름표는 작품 이름만 써요.',
      base: '차례와 약속을 모두 놓은 뒤 확인을 눌러요. 이름표 세 칸을 모두 써요.',
      challenge: '작품 옆에서 해설하는 역할을 맡아, 만든 방법과 쓴 재료를 설명해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 작품을 만지거나 떼어 본다 → 관람 약속 그림을 전시대 앞에 붙인다. ② 한 작품 앞에 몰린다 → 모둠별로 시작 자리를 정해 한 방향으로 돈다. ③ 전시가 끝나면 정리는 어른이 할 일이라고 여긴다 → 작품 내리기·집게 돌려놓기를 모둠 역할로 나눈다.',
  }));

  lessons.push(L(48, {
    title: '약속 단원을 돌아보며 내가 지킨 약속 평가하기',
    objective: '이 단원에서 배운 생활 약속과 재료·용구 약속을 돌아보고, 내가 잘 지킨 약속과 더 노력할 약속을 하나씩 골라 말할 수 있다.',
    illustration: ART('a paper classroom wall with a timeline of the unit: a school map with pins, a promise poster, scissors safety picture and an artwork exhibition, a child placing a star sticker', '약속을 돌아봐요', [
      { motif: 'star', x: 120, y: 84, s: 0.6 }, { motif: 'house', x: 380, y: 214, color: 'sky' }, { motif: 'flower', x: 250, y: 226, color: 'rose' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"이번 단원에서 우리가 함께 만든 약속을 떠올려 볼까요?" 교실 벽의 학교 지도, 우리 반 약속, 가위 안전 그림, 전시회 사진을 차례로 가리킨다. 시연 단추로 단원에서 한 일이 차례대로 놓이는 모습을 보여 준다. "오늘은 내가 지킨 약속을 스스로 평가해요"라고 말한다.',
        student: '단원에서 가장 기억에 남는 시간을 하나 떠올려 봐요.',
        demo: { tool: 'story', options: { cards: [{ id: 'find', text: '불편한 곳을 찾았어요', motif: 'house' }, { id: 'keep', text: '약속을 정해 지켰어요', motif: 'star' }, { id: 'make', text: '재료로 작품을 만들었어요', motif: 'flower' }], slots: ['1', '2', '3'], shuffle: false }, sequence: [{ order: ['find', 'keep', 'make'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 단원 약속 모아 보기', minutes: 12, tool: 'mindmap',
            teacher: '"이 약속은 학교 생활 약속일까요, 만들기 재료 약속일까요?" 두 갈래로 나누며 단원 전체를 돌아본다. 약속은 선생님이 지키게 하는 것이라고 여기는 학생에게 "약속을 지켰을 때 누가 편해졌나요?" 하고 묻는다.',
            task: '단원에서 배운 약속을 두 갈래로 모아 정리해요.',
            levels: CARD_LV,
            items: [
              { prompt: '단원에서 배운 약속을 알맞은 가지에 나누어 보세요.', toolOptions: { topic: '우리가 배운 약속', slots: ['생활 약속', '만들기 약속'], cards: ['복도에서는 걸어요', '가위는 손잡이를 내밀어 건네요', '놀잇감은 제자리에 돌려놓아요', '풀은 알맞게 발라요'] },
                target: { sort: { '생활 약속': ['복도에서는 걸어요', '놀잇감은 제자리에 돌려놓아요'], '만들기 약속': ['가위는 손잡이를 내밀어 건네요', '풀은 알맞게 발라요'] } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['복도에서는 걸어요', '가위는 손잡이를 내밀어 건네요', '놀잇감은 제자리에 돌려놓아요', '풀은 알맞게 발라요', '도움이 필요한 친구에게 먼저 물어요', '쓴 재료는 내가 정리해요'] }, target: { sort: { '생활 약속': ['복도에서는 걸어요', '놀잇감은 제자리에 돌려놓아요', '도움이 필요한 친구에게 먼저 물어요'], '만들기 약속': ['가위는 손잡이를 내밀어 건네요', '풀은 알맞게 발라요', '쓴 재료는 내가 정리해요'] } }, prompt: '여섯 가지 약속을 알맞은 가지에 나누어 보세요.' } } },
              { prompt: '약속과 지켰을 때 좋아진 점을 이어 보세요.', toolOptions: { mode: 'match', topic: '지키니까', slots: [{ id: 's1', label: '교실 통로를 넓게 정리해요' }, { id: 's2', label: '재료를 나누어 써요' }, { id: 's3', label: '쓴 것은 내가 정리해요' }], cards: ['휠체어 친구도 편히 다녀요', '모두가 함께 꾸며요', '다음 사람이 바로 써요'] },
                target: { match: { s1: '휠체어 친구도 편히 다녀요', s2: '모두가 함께 꾸며요', s3: '다음 사람이 바로 써요' } }, difficulty: 0.2,
                predict: { q: '약속을 지키면 누가 편해질까요?', options: ['나만', '나와 친구 모두'], answer: 1 },
                conclude: '약속은 나와 친구 모두가 편하게 지내려고 함께 지키는 거예요.' },
              { prompt: '이번 단원에서 한 일만 골라 보세요.', toolOptions: { mode: 'pick', basket: '이번 단원에서 한 일', cards: ['학교 지도에 불편한 곳 표시하기', '접어 오려 나비 만들기', '수영장에서 헤엄치기'] },
                target: { pick: ['학교 지도에 불편한 곳 표시하기', '접어 오려 나비 만들기'] }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 스스로 평가하기', minutes: 14, tool: 'emotion',
            teacher: '먼저 하준이 이야기를 함께 읽고 "하준이가 무엇을 했기에 뿌듯할까요?" 하고 물어 근거(앉아서 쓰기, 손잡이 내밀어 건네기)를 찾은 뒤 마음 크기를 고르게 한다. 그다음 활동지 표에 "내 약속을 지킨 만큼 ○를 하나에서 세 개까지 솔직하게 그려요. 내 평가에는 정답이 없어요"라고 말한다. 잘 지킨 약속에는 별 붙임 딱지를, 더 노력할 약속에는 하트 붙임 딱지를 활동지에 붙이게 한다. 더 노력할 약속을 고른 학생에게 "그걸 찾은 것도 잘한 거예요"라고 말해 준다.',
            task: '하준이의 마음 크기를 근거를 찾아 고르고, 다음 다짐을 골라요. 내 약속은 활동지에 ○로 평가해요.',
            levels: CARD_LV,
            items: [
              { prompt: '단원 내내 가위 약속을 지킨 하준이의 뿌듯한 마음 크기를 골라 보세요.', toolOptions: { mode: 'scale', who: '하준', situation: '하준이는 단원 내내 가위를 앉아서 쓰고, 손잡이를 내밀어 건넸어요.', feeling: '뿌듯함', after: '나도 지킨 약속을 떠올리며 별 붙임 딱지를 붙여요.' }, target: { level: [3, 5] }, difficulty: 0.05 },
              { prompt: '더 노력할 약속이 생겼어요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '서아', situation: '서아는 만들기 뒤에 정리를 자주 잊었어요.', choices: [
                { id: 'giveup', text: '"나는 원래 못해" 하고 그만둬요', result: '다음에도 정리를 잊었어요.', mood: '속상함', why: '"원래 못해"라고 하면 바뀔 수 있을까요?' },
                { id: 'plan', text: '"정리 노래가 나오면 바로 정리할래" 하고 다짐해요', result: '다음 시간에는 정리를 제일 먼저 끝냈어요.', mood: '뿌듯함' }] }, target: { choice: 'plan' }, difficulty: 0.1 },
              { prompt: '단원을 마치며 나에게 하는 말을 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['잘 지킨 약속을 말해요', '더 노력할 약속을 말해요', '나에게 응원의 말을 해요'] },
                target: { order: ['잘 지킨 약속을 말해요', '더 노력할 약속을 말해요', '나에게 응원의 말을 해요'] }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"내가 잘 지킨 약속 하나, 더 노력할 약속 하나를 말해 볼까요?" 모두가 한 문장씩 말하고 친구들은 손뼉으로 응원한다. 더 노력할 약속은 이름표 뒤에 붙여 두고, 2주 뒤에 다시 꺼내 지켰는지 함께 본다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '새 곳에서도', slots: [{ id: 'e1', label: '도서관에서 책을 다 읽었을 때' }, { id: 'e2', label: '놀이터 그네를 친구도 타고 싶어 할 때' }], cards: ['책을 제자리에 꽂아요', '차례를 정해 번갈아 타요'] }, prompt: '새로운 곳에서 지킬 약속을 이어 보세요.', target: { match: { e1: '책을 제자리에 꽂아요', e2: '차례를 정해 번갈아 타요' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '약속을 지키는 까닭으로 알맞은 것은?', options: ['선생님께 혼나지 않으려고', '나와 친구 모두가 편하게 지내려고', '상을 받으려고'], answer: 1, difficulty: 0.1, explain: '약속은 함께 편하고 안전하게 지내려고 지켜요.' },
          { type: 'short', prompt: '다음 주에 꼭 지킬 약속 하나를 쓰세요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '약속 돌아보기',
      items: [
        { type: 'table', prompt: '약속을 지킨 만큼 ○를 그리세요. (○ 1~3개)', columns: ['약속', '지킨 만큼'], cells: [['복도에서 걸어요', ''], ['가위를 안전하게 써요', ''], ['재료를 나누어 써요', ''], ['쓴 것은 내가 정리해요', '']] },
        { type: 'short', prompt: '내가 잘 지킨 약속을 쓰세요.' },
        { type: 'short', prompt: '더 노력할 약속을 쓰세요.' },
        { type: 'draw', prompt: '약속을 지키는 내 모습을 그리세요.' },
      ],
      easy: {
        note: '잘 지킨 것 하나, 더 노력할 것 하나!',
        items: [
          { type: 'check', prompt: '잘 지킨 약속에 ✓ 하세요.', options: ['복도에서 걸어요', '가위를 안전하게 써요', '쓴 것은 내가 정리해요'] },
          { type: 'short', prompt: '더 노력할 약속을 쓰세요.' },
          { type: 'draw', prompt: '약속을 지키는 내 모습을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 가지에 초록 테두리가 생기고, 고른 행동의 결과가 바로 보여요. 평가는 붙임 딱지로 해요.',
      base: '모두 나눈 뒤 확인을 눌러요. 평가표 네 줄을 채워요.',
      challenge: '약속이 여섯 가지로 늘어요. 더 노력할 약속을 지키는 방법까지 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 약속은 선생님이 시켜서 지키는 것이라고 여긴다 → 지켰을 때 누가 편해졌는지 떠올리게 한다. ② 모든 약속을 "다 잘 지켰어요"라고 한다 → 기록(18차시 한 주 기록)을 다시 보게 한다. ③ 더 노력할 약속을 부끄러워한다 → 찾은 것 자체를 칭찬한다. 2주 뒤 다짐 점검 시간을 미리 정해 둔다.',
  }));

  // ── 차시 끝 ──

  PaperLessons.registerUnit({
    id: 'g1-int-2-06', schema: 'edu-unit.v1', catalogUnit: UNIT,
    grade: 1, subject: '통합교과', unitTitle: TITLE,
    flow: '1~8차시는 학교와 동네를 둘러보며 다니기 불편한 곳을 찾고, 그곳이 특히 누구에게 불편할지 다른 사람의 자리에서 생각합니다. 9~16차시는 찾은 곳을 고칠 방법을 그리고, 어린이가 바로 할 수 있는 일과 어른께 부탁할 일을 나누어 우리 반 약속으로 실천합니다. 17~24차시는 고친 뒤 무엇이 달라졌는지 견주고, 지키지 못한 날은 다시 하며, 더 고칠 곳을 선생님께 알리는 습관을 기릅니다. 25~40차시는 표현 재료와 용구로 넘어가 색연필·크레파스·종이·풀·가위를 견주고 안전하게 쓰는 약속을 익힌 뒤, 오리고 붙이고 소리 내어 작품을 만듭니다. 41~48차시는 쓴 재료를 제자리에 정리하고 내 작품을 돌아보아 다시 만들며, 마지막 시간에 단원 전체의 약속을 스스로 평가합니다.',
    refs: {},
    lessons: lessons,
  });
})();
