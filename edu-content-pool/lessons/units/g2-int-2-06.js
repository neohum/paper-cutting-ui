/* 2학년 2학기 통합교과 6. 인물 — 48차시
 * 1~16차시 [바른 생활] 여러 인물의 삶에서 공동체성 배우기: 도운 인물 이야기 듣고 한 일·까닭 말하기(1~6) → 인물처럼 지금 할 수 있는 일 해 보고 남기기(7~11) → 도운 뒤 돌아보고 우리 반이 함께 할 일 정하기(12~16)
 * 17~32차시 [슬기로운 생활] 하루의 변화와 사람들의 하루: 낮과 밤에 달라지는 것과 물음 만들기(17~22) → 정한 사람의 하루를 시간 차례로 읽고 낮·밤에 일하는 사람 나누기(23~27) → 내 하루와 견주어 설명하고 전할 말 정하기(28~32)
 * 33~48차시 [즐거운 생활] 미술 전시 둘러보기: 가 볼 전시 찾기·전시장 약속(33~38) → 작품 하나씩 오래 보고 마음에 든 작품 남기기(39~43) → 본 것을 자세히 말하고 다른 감상 받아들이기·단원 정리(44~48)
 * 성취기준: units-map 단원 목록이 비어 있고 미확인(standardsVerified:false)이라 모든 차시 standards: [] (지어내지 않는다).
 * 인물 이야기(김만덕·방정환·나이팅게일·이태석·장기려·세종대왕)는 널리 알려진 사실만 쉬운 말로 직접 다시 썼다. 감상 작품은 저작권이 끝난 옛 작품
 * (김홍도 「씨름」「서당」, 고흐 「별이 빛나는 밤」, 모네 「수련」)만 쓰고, 교구 속 '작품'은 직접 만든 색종이 그림이다. 학생 이름은 가명(민지·준호·하준·서아·지우)만 쓴다.
 */
(function () {
  var UNIT = 'g2-통합교과-2학기-6';
  var TITLE = '6. 인물';
  var HEAD = 'Layered paper-cut illustration of ';
  var TAIL = ', with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.';
  function two(n) { return (n < 10 ? '0' : '') + n; }
  // 차시 머리(같은 칸)를 채운다 — 차시마다 다른 내용은 x에 그대로 적는다
  function L(n, x) {
    var head = {
      id: 'g2-int-2-06-' + two(n), schema: 'edu-lesson.v1', catalog: { unit: UNIT, lesson: n },
      grade: 2, subject: '통합교과', unitTitle: TITLE,
    };
    var tail = { standards: [], minutes: 40, formats: ['chromebook', 'projector', 'print'] };
    var out = {};
    [head, { title: x.title, objective: x.objective }, tail].forEach(function (o) { for (var k in o) out[k] = o[k]; });
    for (var k in x) if (!(k in out)) out[k] = x[k];
    return out;
  }
  // 그림: prompt 틀 + 벡터 장면(배경 + 차시 모티프 + 한 줄 글). night면 해 대신 달과 별
  function ART(what, text, more, night) {
    var sky = night ? [{ motif: 'moon', x: 410, y: 56, s: 0.8 }, { motif: 'star', x: 120, y: 48, s: 0.6 }, { motif: 'star', x: 300, y: 36, s: 0.5 }]
      : [{ motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 110, y: 52 }];
    return {
      prompt: HEAD + what + TAIL,
      scene: { viewBox: [480, 270], layers: sky.concat([{ motif: 'hills', y: 204 }]).concat(more || []).concat([{ motif: 'text', x: 240, y: 140, text: text, size: 22 }]) },
    };
  }
  var MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };
  // 카드 판 교구 단계: 쉬움은 맞는 칸에 초록 테두리·틀린 칸은 바로 되돌림, 도전은 문항마다 함정 카드나 카드를 더 넣는다
  var CARD_LV = { easy: { live: true, instant: true }, base: {}, challenge: {} };
  // 하루 시간 띠(timeline): 기본 1단계 힌트가 '옛날·요즘' 말을 써서, 하루의 때를 읽게 하는 글로 바꾼다
  var DAY_H = '카드에서 때를 알려 주는 말(몇 시, 언제 같은 말)을 먼저 찾아 소리 내어 읽고, 하루 가운데 언제 하는 일인지 견주어 놓아요.';
  var DAY_LV = { easy: { live: true, instant: true, hint1: DAY_H }, base: { hint1: DAY_H }, challenge: { hint1: DAY_H } };
  var SCALE_LV = { easy: { live: true, instant: true, steps: 3 }, base: {}, challenge: {} };

  var lessons = [];

  // ───────────────────────── 1~6차시: 도운 인물 이야기(생활 맥락 이해) ─────────────────────────

  lessons.push(L(1, {
    title: '나를 도와준 사람 떠올려 짝 짓기',
    objective: '나를 도와준 사람과 그 사람이 한 일을 짝 지어 말하고, 도움을 받았을 때의 마음을 마음 카드로 나타낼 수 있다.',
    illustration: ART('a school gate in the morning where a crossing volunteer holds a small flag, a school guard waves, and children walk in smiling', '나를 도와준 사람은 누구일까요?', [
      { motif: 'house', x: 120, y: 214 }, { motif: 'tree', x: 250, y: 214 }, { motif: 'flower', x: 370, y: 228, color: 'rose' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 7,
        teacher: '"오늘 아침 학교에 오는 길에 나를 도와준 사람이 있었나요?" 횡단보도에서 깃발을 들어 준 교통 봉사자, 교문에서 인사해 준 보안관 선생님처럼 두세 명의 경험을 듣는다. 시연 단추로 \'길을 건너게 도와주셨어요\' 옆에 고마움 카드가 놓이는 모습을 보여 준다. "이번 단원에서는 다른 사람을 도운 여러 인물을 만나고, 여러 사람의 하루와 미술 전시도 둘러봐요." 떠올리지 못하는 학생에게 "급식 시간에 밥을 주신 분은 누구예요?" 하고 먼저 건넨다.',
        student: '학교에 오는 길이나 교실에서 나를 도와준 사람을 한 명 떠올려 짝에게 말해 봐요.',
        demo: { tool: 'emotion', options: { cards: ['고마움', '화남'], slots: [{ id: 's1', label: '길을 건너게 도와주셨어요' }], shuffle: false }, sequence: [{ match: { s1: '고마움' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 누가 나를 도와주었을까', minutes: 13, tool: 'mindmap',
            teacher: '"다친 무릎에 약을 발라 주신 분은 누구였지요? 그분은 학교 어디에 계세요?" 카드를 소리 내어 읽고 그 사람을 만난 곳을 함께 말한다. 사람 이름보다 하는 일을 보고 짝을 짓게 한다. 도와준 일과 괴롭힌 일을 섞어 고르는 학생에게 "그 일을 겪은 친구는 고마웠을까요?" 하고 되묻는다.',
            task: '도움을 받은 일을 읽고, 그 일을 해 준 사람 카드를 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '학교에서 도움을 받은 일과 도와준 분을 이어 보세요.', toolOptions: { mode: 'match', topic: '나를 도와준 사람', slots: [{ id: 's1', label: '점심밥을 만들어 주셨어요' }, { id: 's2', label: '다친 무릎에 약을 발라 주셨어요' }], cards: ['조리사 선생님', '보건 선생님'] },
                target: { match: { s1: '조리사 선생님', s2: '보건 선생님' } }, difficulty: 0.05 },
              { prompt: '세 가지 도움과 도와준 사람을 이어 보세요.', toolOptions: { mode: 'match', topic: '나를 도와준 사람', slots: [{ id: 's1', label: '길을 건널 때 깃발을 들어 주셨어요' }, { id: 's2', label: '떨어뜨린 필통을 주워 주었어요' }, { id: 's3', label: '읽을 책을 찾아 주셨어요' }], cards: ['교통 봉사자', '짝꿍', '사서 선생님'] },
                target: { match: { s1: '교통 봉사자', s2: '짝꿍', s3: '사서 선생님' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['교통 봉사자', '짝꿍', '사서 선생님', '버스 운전기사'] } } } },
              { prompt: '나를 도와준 일만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '도와준 일', cards: ['넘어진 나를 일으켜 주었어요', '줄을 설 때 나를 밀었어요', '모르는 낱말을 알려 주었어요', '내 지우개를 말없이 가져갔어요'] },
                target: { pick: ['넘어진 나를 일으켜 주었어요', '모르는 낱말을 알려 주었어요'] }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['넘어진 나를 일으켜 주었어요', '줄을 설 때 나를 밀었어요', '모르는 낱말을 알려 주었어요', '내 지우개를 말없이 가져갔어요', '혼자 놀던 나에게 같이 놀자고 했어요'] }, prompt: '나를 도와준 일만 모두 바구니에 넣어 보세요. 세 가지예요.', target: { pick: ['넘어진 나를 일으켜 주었어요', '모르는 낱말을 알려 주었어요', '혼자 놀던 나에게 같이 놀자고 했어요'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 도움을 받았을 때 내 마음', minutes: 13, tool: 'emotion',
            teacher: '"비 오는 날 친구가 우산을 씌워 주면 마음이 어떤 날씨일까요?" 마음 이름 대신 "좋았어요"라고만 말하는 학생에게 "좋은 마음 가운데 어떤 마음일까? 기쁨일까, 고마움일까?" 하고 고르게 한다. 도움을 받은 뒤 고맙다고 말하는 것도 상대에게 마음을 돌려주는 일이라는 것을 짚는다. 활동 끝 2분은 짝과 마주 서서 "고맙습니다" 인사를 허리 숙여 해 보게 하고, 말없이 고개만 끄덕이는 짝에게는 무엇이 고마웠는지 한 마디 붙이게 한다.',
            task: '도움을 받은 일을 읽고 그때의 마음을 고르거나, 어떻게 할지 골라요. 끝에 짝과 고맙다는 인사를 몸짓으로 해 봐요.',
            levels: SCALE_LV,
            items: [
              { prompt: '두 일에 어울리는 마음 카드를 놓아 보세요.', toolOptions: { cards: ['고마움', '속상함', '신남'], slots: [{ id: 's1', label: '비 오는 날 친구가 우산을 씌워 주었어요' }, { id: 's2', label: '아끼던 우산이 바람에 망가졌어요' }] },
                target: { match: { s1: '고마움', s2: '속상함' } }, difficulty: 0.1,
                levels: { challenge: { prompt: '세 일에 어울리는 마음 카드를 놓아 보세요.', toolOptions: { cards: ['고마움', '속상함', '신남', '미안함'], slots: [{ id: 's1', label: '비 오는 날 친구가 우산을 씌워 주었어요' }, { id: 's2', label: '아끼던 우산이 바람에 망가졌어요' }, { id: 's3', label: '내가 친구 우산을 밟아 망가뜨렸어요' }] }, target: { match: { s1: '고마움', s2: '속상함', s3: '미안함' } } } } },
              { prompt: '길을 잃었을 때 경찰관이 집까지 데려다주셨어요. 고마운 마음의 크기를 골라 보세요.', toolOptions: { mode: 'scale', situation: '시장에서 엄마를 잃어버렸는데, 경찰관이 손을 잡고 집까지 데려다주셨어요.', feeling: '고마움', after: '이만큼 고마울 때는 "고맙습니다" 하고 꼭 말해요.' }, target: { level: [3, 5] }, difficulty: 0.1,
                levels: { easy: { prompt: '길을 잃었을 때 경찰관이 집까지 데려다주셨어요. 고마운 마음을 세 칸에서 골라 보세요.', target: { level: [2, 3] } } } },
              { prompt: '보안관 선생님이 떨어뜨린 실내화 주머니를 주워 주셨어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '교문에서 보안관 선생님이 내가 떨어뜨린 실내화 주머니를 주워 주셨어요.', choices: [
                { id: 'thank', text: '"고맙습니다" 하고 인사해요', result: '선생님이 웃으며 손을 흔들어 주세요.', mood: '기쁨' },
                { id: 'grab', text: '말없이 받아서 뛰어가요', result: '선생님은 내 마음을 알 수 없어요.', mood: '걱정', why: '말하지 않으면 고마운 마음이 전해질까요?' },
                { id: 'mine', text: '"내 거예요!" 하고 낚아채요', result: '도와준 선생님이 머쓱해져요.', mood: '속상함', why: '도와준 사람이 그 말을 들으면 어떤 마음일까요?' }] }, target: { choice: 'thank' }, difficulty: 0.05 },
              { prompt: '짝에게 나를 도와준 사람과 그분이 한 일을 말하고, 고맙다는 인사를 몸짓과 함께 해 보세요. 다 했으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"오늘 떠올린 사람들은 어디에서 만난 사람들이었나요?" 학교·길·집처럼 만난 곳을 칠판에 모아 적는다. 출구 질문을 마친 뒤 2번에서 \'유명한 사람만\'이나 \'어른만\'을 고른 학생이 있으면, 다음 시간 도입에서 오늘 칠판에 적은 사람들을 다시 보여 준다. 다음 시간에는 옛날 제주에서 많은 사람을 도운 인물을 만난다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '나를 도와준 사람', slots: [{ id: 'e1', label: '아침에 교문을 열어 주셨어요' }, { id: 'e2', label: '아픈 강아지를 고쳐 주셨어요' }], cards: ['학교 보안관', '수의사'] }, prompt: '도와준 일과 도와준 사람을 이어 보세요.', target: { match: { e1: '학교 보안관', e2: '수의사' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '다른 사람을 돕는 일은 누가 할 수 있을까요?', options: ['유명한 사람만 해요', '어른만 해요', '누구나 할 수 있어요'], answer: 2, difficulty: 0.15, explain: '필통을 주워 준 짝꿍처럼 누구나 다른 사람을 도울 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '나를 도와준 사람',
      items: [
        { type: 'figure', wide: true, prompt: '도와준 일과 도와준 사람을 선으로 이으세요.', tool: 'mindmap', figures: [{ options: { mode: 'match', topic: '도와준 사람', slots: [{ id: 's1', label: '점심밥을 만들어 주셨어요' }, { id: 's2', label: '약을 발라 주셨어요' }], cards: ['보건 선생님', '조리사 선생님'], shuffle: false }, caption: '' }], answer: '점심밥-조리사 선생님, 약-보건 선생님' },
        { type: 'choice', prompt: '도움을 받았을 때 하면 좋은 말에 ○ 하세요.', options: ['"고맙습니다"', '"비켜요"', '"몰라요"'], answer: '"고맙습니다"' },
        { type: 'table', prompt: '나를 도와준 사람과 그 사람이 한 일을 쓰세요.', columns: ['도와준 사람', '한 일'], rows: 2 },
        { type: 'draw', prompt: '나를 도와준 사람의 모습을 그려 보세요.' },
      ],
      easy: {
        note: '오늘 아침부터 지금까지 만난 사람을 차례로 떠올려요.',
        items: [
          { type: 'choice', prompt: '다친 무릎에 약을 발라 주신 분에 ○ 하세요.', options: ['보건 선생님', '버스 운전기사'], answer: '보건 선생님' },
          { type: 'choice', prompt: '도움을 받았을 때 마음에 ○ 하세요.', options: ['고마워요', '화나요'], answer: '고마워요' },
          { type: 'draw', prompt: '나를 도와준 사람을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 놓으면 초록 테두리가 생기고 틀리면 카드가 돌아와요. 마음 크기는 세 칸이에요.',
      base: '모두 놓은 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '관계없는 사람 카드와 고를 카드가 더 섞여 있고, 마음 카드 짝 짓기에 미안한 장면이 하나 더 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 도와준 사람을 떠올리지 못한다(도움을 특별한 일로만 여김) → 급식·보건실·횡단보도처럼 매일 있는 장면을 먼저 건넨다. ② 사람 이름을 말하려 한다 → 이름 대신 하는 일(조리사 선생님)로 말하게 한다. ③ "좋았어요"로만 마음을 말한다 → 고마움·기쁨처럼 마음 이름을 골라 말하게 한다.',
  }));

  lessons.push(L(2, {
    title: '김만덕 이야기를 차례대로 놓기',
    objective: '김만덕이 굶주린 제주 사람들을 도운 이야기를 차례대로 놓고, 만덕이 한 일과 그때의 마음을 말할 수 있다.',
    illustration: ART('a kind woman in a traditional hanbok handing sacks of rice to hungry villagers on Jeju island, with stone walls and a small boat by the sea', '김만덕은 무엇을 했을까요?', [
      { motif: 'wave', x: 120, y: 226 }, { motif: 'house', x: 260, y: 214, color: 'buttercup' }, { motif: 'mountain', x: 380, y: 200, s: 0.8 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 8,
        teacher: '선생님이 이야기를 들려준다. "옛날 조선 시대, 제주에 큰 흉년이 들었어요. 비바람에 곡식이 다 쓰러져 먹을 것이 없었지요. 장사를 해서 돈을 모은 김만덕은 그 돈으로 육지에서 쌀을 사 와 굶주린 사람들에게 나누어 주었어요." 이야기 뒤에 "흉년은 곡식이 잘 자라지 않은 해예요" 하고 낱말을 풀어 준다. 시연 단추로 이야기 카드가 차례대로 놓이는 모습을 보여 준다. "만덕은 어떤 사람이었을까요? 왜 그렇게 했을까요?"',
        student: '이야기를 듣고 김만덕이 한 일을 한 가지 손가락으로 꼽아 말해 봐요.',
        demo: { tool: 'story', options: { cards: [{ id: '흉년', text: '제주에 흉년이 들었어요', motif: 'cloud' }, { id: '나눔', text: '쌀을 나누어 주었어요', motif: 'flower' }], slots: ['처음', '끝'], shuffle: false }, sequence: [{ order: ['흉년', '나눔'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 25,
        activities: [
          {
            id: 'a1', title: '활동 1. 김만덕 이야기 차례 놓기', minutes: 12, tool: 'story',
            teacher: '"무엇이 먼저 일어났기 때문에 만덕이 쌀을 사 왔을까요?" 카드마다 \'그래서\'를 넣어 이어 읽게 한다(흉년이 들었어요 → 그래서 사람들이 굶주렸어요). 나누는 장면을 맨 앞에 놓는 학생에게 "쌀을 나누려면 먼저 쌀이 있어야 하지요?" 하고 묻는다.',
            task: '김만덕 이야기 장면 카드를 일어난 차례대로 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '이야기 장면 세 장을 차례대로 놓아 보세요.', toolOptions: { cards: [{ id: '흉년', text: '제주에 큰 흉년이 들었어요', motif: 'cloud' }, { id: '쌀', text: '만덕이 쌀을 사 왔어요', motif: 'wave' }, { id: '나눔', text: '사람들에게 쌀을 나누었어요', motif: 'flower' }], slots: ['처음', '가운데', '끝'] },
                target: { order: ['흉년', '쌀', '나눔'] }, difficulty: 0.05 },
              { prompt: '네 장면을 차례대로 놓아 보세요.', toolOptions: { cards: [{ id: '굶주림', text: '사람들이 굶주렸어요', motif: 'cloud' }, { id: '고마움', text: '사람들이 고마워했어요', motif: 'star' }, { id: '흉년', text: '비바람에 곡식이 쓰러졌어요', motif: 'leaf' }, { id: '쌀', text: '만덕이 쌀을 사 왔어요', motif: 'wave' }] },
                target: { order: ['흉년', '굶주림', '쌀', '고마움'] }, difficulty: 0.15,
                levels: { challenge: { prompt: '네 장면을 차례대로 놓아 보세요. 이야기에 없는 카드는 남겨요.', toolOptions: { slots: 4, cards: [{ id: '굶주림', text: '사람들이 굶주렸어요', motif: 'cloud' }, { id: '고마움', text: '사람들이 고마워했어요', motif: 'star' }, { id: '흉년', text: '비바람에 곡식이 쓰러졌어요', motif: 'leaf' }, { id: '쌀', text: '만덕이 쌀을 사 왔어요', motif: 'wave' }, { id: '비싸게', text: '만덕이 쌀을 비싸게 팔았어요', motif: 'house' }] } } } },
              { prompt: '만덕이 돈을 모은 때부터 차례대로 놓아 보세요.', toolOptions: { cards: [{ id: '나눔', text: '쌀을 나누어 주었어요', motif: 'flower' }, { id: '장사', text: '장사를 해서 돈을 모았어요', motif: 'house' }, { id: '흉년', text: '제주에 흉년이 들었어요', motif: 'cloud' }, { id: '쌀', text: '모은 돈으로 쌀을 샀어요', motif: 'wave' }] },
                target: { order: ['장사', '흉년', '쌀', '나눔'] }, difficulty: 0.2,
                predict: { q: '만덕은 쌀을 살 돈이 어디서 났을까요?', options: ['장사로 모았어요', '임금님이 주었어요', '잘 모르겠어요'], answer: 0 },
                conclude: '만덕은 자기가 애써 모은 돈을 굶주린 이웃을 위해 썼어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 만덕과 이웃의 마음 알기', minutes: 13, tool: 'emotion',
            teacher: '"굶는 이웃을 보았을 때 만덕의 마음은 어땠을까요?" 이야기 속 말(사람들이 굶주렸어요)을 손가락으로 짚고 마음을 고르게 한다. "만덕이 쌀을 나눈 건 칭찬을 받으려고였을까요?" 하고 물어, 걱정하는 마음에서 시작했다는 것을 이야기에서 찾게 한다. 활동 끝 3분은 짝끼리 만덕과 제주 사람이 되어 빈손으로 쌀 자루를 건네고 받게 한다. 받는 사람이 "고맙습니다", 주는 사람이 "힘내세요"처럼 마음이 담긴 말을 하는지 둘러보며 듣는다.',
            task: '만덕과 제주 사람들의 마음을 고르고, 만덕이 한 일을 골라요. 끝에 짝과 쌀을 나누는 장면을 몸짓으로 해 봐요.',
            levels: CARD_LV,
            items: [
              { prompt: '빈칸에 들어갈 만덕의 마음 카드를 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['걱정', '신남', '편안함'], slots: [{ id: 'b1', label: '굶는 이웃을 보고 만덕은 ___을 느꼈어요.' }] },
                target: { fill: { b1: '걱정' } }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['걱정', '신남', '편안함', '심심함'] } } } },
              { prompt: '제주 사람들의 마음에 어울리는 카드를 놓아 보세요.', toolOptions: { cards: ['고마움', '슬픔', '화남'], slots: [{ id: 's1', label: '먹을 것이 없어 배고파요' }, { id: 's2', label: '만덕이 준 쌀로 밥을 지었어요' }] },
                target: { match: { s1: '슬픔', s2: '고마움' } }, difficulty: 0.1 },
              { prompt: '김만덕이 한 일만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '만덕이 한 일', cards: ['모은 돈으로 쌀을 샀어요', '쌀을 비싸게 팔았어요', '굶는 사람에게 쌀을 나누었어요', '쌀을 혼자 숨겨 두었어요'] },
                target: { pick: ['모은 돈으로 쌀을 샀어요', '굶는 사람에게 쌀을 나누었어요'] }, difficulty: 0.1 },
              { prompt: '짝과 만덕과 제주 사람이 되어, 쌀을 건네고 받는 장면을 말과 몸짓으로 해 보세요. 다 했으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"만덕 이야기에서 가장 기억에 남는 장면은 무엇이에요?" 두세 명이 장면과 까닭을 말한다. 출구 질문 1번은 만덕 이야기가 아니라 처음 듣는 이웃 이야기라는 것만 알려 주고 차례는 말해 주지 않는다. 다음 시간에는 어린이를 위해 애쓴 인물을 만난다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { cards: [{ id: '나눔', text: '김치를 나누어 드렸어요', motif: 'flower' }, { id: '김치', text: '할머니가 김치를 담갔어요', motif: 'leaf' }, { id: '생각', text: '혼자 사는 이웃이 생각났어요', motif: 'house' }] }, prompt: '처음 듣는 이웃 이야기예요. 차례대로 놓아 보세요.', target: { order: ['김치', '생각', '나눔'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '김만덕이 쌀을 나누어 준 까닭으로 알맞은 것은?', options: ['굶는 이웃이 걱정되어서', '쌀이 너무 무거워서', '장사가 싫어져서'], answer: 0, difficulty: 0.1, explain: '만덕은 굶주린 이웃을 걱정하는 마음으로 쌀을 나누었어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '김만덕 이야기',
      items: [
        { type: 'figure', wide: true, prompt: '이야기 차례대로 빈칸에 1, 2, 3을 쓰세요.', tool: 'story', figures: [{ options: { cards: [{ id: '나눔', text: '쌀을 나누었어요', motif: 'flower' }, { id: '흉년', text: '흉년이 들었어요', motif: 'cloud' }, { id: '쌀', text: '쌀을 사 왔어요', motif: 'wave' }], shuffle: false }, caption: '' }], answer: '흉년 1, 쌀을 사 옴 2, 나눔 3' },
        { type: 'choice', prompt: '흉년의 뜻에 ○ 하세요.', options: ['곡식이 잘 자라지 않은 해', '눈이 많이 온 해', '새해 첫날'], answer: '곡식이 잘 자라지 않은 해' },
        { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '만덕은 모은 돈으로 ___을 사서 이웃에게 나누었어요.', answer: '쌀' },
        { type: 'short', prompt: '내가 만덕이라면 이웃에게 무슨 말을 했을지 쓰세요.' },
      ],
      easy: {
        note: '"그래서"를 넣어 이야기를 이어 읽어 봐요.',
        items: [
          { type: 'choice', prompt: '만덕이 나누어 준 것에 ○ 하세요.', options: ['쌀', '장난감'], answer: '쌀' },
          { type: 'choice', prompt: '쌀을 받은 사람들의 마음에 ○ 하세요.', options: ['고마워요', '심심해요'], answer: '고마워요' },
          { type: 'draw', prompt: '만덕이 쌀을 나누어 주는 장면을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 놓으면 초록 테두리가 생기고 틀리면 카드가 돌아와요.',
      base: '모두 놓은 뒤 확인을 눌러요. "그래서"로 이어 읽으며 차례를 고쳐요.',
      challenge: '이야기에 없는 함정 장면을 골라내며 네 장면을 놓고, 만덕이 돈을 모은 때부터 이야기를 이어요. 마음 카드도 더 섞여 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 결과(나눔)를 먼저 놓는다 → 까닭과 결과를 \'그래서\'로 이어 읽게 한다. ② "만덕은 부자라서 쉽게 나누었다"고 여긴다 → 장사로 애써 모은 돈이었다는 것을 다시 들려준다. ③ 흉년을 모른다 → 비바람에 쓰러진 벼 그림을 보여 준다.',
  }));

  lessons.push(L(3, {
    title: '방정환이 어린이를 위해 한 일 알기',
    objective: '방정환이 어린이를 위해 한 일을 고르고, 그가 왜 어린이날을 만드는 데 앞장섰을지 말할 수 있다.',
    illustration: ART('a gentle man in a 1920s suit telling a story to a circle of happy children, with paper kites and a banner for Children\'s Day', '어린이도 소중해요', [
      { motif: 'house', x: 110, y: 214, color: 'sky' }, { motif: 'flower', x: 230, y: 228, color: 'buttercup' }, { motif: 'tree', x: 380, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 7,
        teacher: '"5월 5일은 무슨 날이에요?" 어린이날이라는 대답을 들은 뒤 이야기를 들려준다. "아주 옛날에는 아이를 함부로 대하는 어른이 많았어요. 방정환은 아이들도 한 사람으로 존중해야 한다고 생각했어요. 그래서 \'어린이\'라는 말을 널리 쓰고, 재미있는 이야기를 들려주고, 어린이날을 만드는 데 앞장섰어요." 시연 단추로 말풍선 빈칸에 \'존중하며\'가 들어가는 모습을 보여 준다.',
        student: '어른에게 존중받는다고 느낀 때를 떠올려 짝에게 말해 봐요.',
        demo: { tool: 'story', options: { mode: 'fill', cards: ['존중하며', '함부로'], slots: [{ id: 'b1', who: '방정환', motif: 'flower', label: '어린이를 ___ 대해 주세요.' }], shuffle: false }, sequence: [{ fill: { b1: '존중하며' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 방정환 이야기 살펴보기', minutes: 13, tool: 'story',
            teacher: '"방정환이 아이들에게 해 준 일은 무엇이었나요?" 이야기를 한 번 더 들려주고, 카드 글을 함께 읽는다. 어린이날을 \'선물 받는 날\'로만 말하는 학생에게 "방정환은 어린이날에 어른들이 무엇을 하기를 바랐을까요?" 하고 묻는다.',
            task: '방정환 이야기 카드를 차례대로 놓고, 방정환의 말 빈칸을 채워요.',
            levels: CARD_LV,
            items: [
              { prompt: '방정환 이야기 세 장면을 차례대로 놓아 보세요.', toolOptions: { cards: [{ id: '날', text: '어린이날을 만드는 데 앞장섰어요', motif: 'star' }, { id: '옛날', text: '아이를 함부로 대하는 어른이 많았어요', motif: 'cloud' }, { id: '생각', text: '아이도 소중하다고 생각했어요', motif: 'flower' }], slots: ['처음', '가운데', '끝'] },
                target: { order: ['옛날', '생각', '날'] }, difficulty: 0.1,
                levels: { challenge: { prompt: '방정환 이야기 세 장면을 차례대로 놓아 보세요. 이야기에 없는 카드는 남겨요.', toolOptions: { cards: [{ id: '날', text: '어린이날을 만드는 데 앞장섰어요', motif: 'star' }, { id: '옛날', text: '아이를 함부로 대하는 어른이 많았어요', motif: 'cloud' }, { id: '생각', text: '아이도 소중하다고 생각했어요', motif: 'flower' }, { id: '숙제', text: '아이들에게 숙제를 많이 냈어요', motif: 'house' }] } } } },
              { prompt: '방정환의 말풍선 빈칸에 알맞은 카드를 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['이야기', '숙제', '심부름'], slots: [{ id: 'b1', who: '방정환', motif: 'flower', label: '오늘은 재미있는 ___를 들려줄게요.' }] },
                target: { fill: { b1: '이야기' } }, difficulty: 0.1 },
              { prompt: '방정환이 어린이를 위해 한 일만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '방정환이 한 일', cards: ['\'어린이\'라는 말을 널리 썼어요', '아이들에게 이야기를 들려주었어요', '아이들에게 일을 많이 시켰어요', '어린이날을 만드는 데 앞장섰어요'] },
                target: { pick: ['\'어린이\'라는 말을 널리 썼어요', '아이들에게 이야기를 들려주었어요', '어린이날을 만드는 데 앞장섰어요'] }, difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 존중받을 때와 무시당할 때', minutes: 13, tool: 'emotion',
            teacher: '"\'넌 어려서 몰라\' 하는 말을 들으면 마음이 어떤 날씨일까요?" 방정환이 왜 어린이를 존중하자고 했는지 학생 자신의 마음에서 찾게 한다. 동생이나 어린 친구에게 같은 말을 한 적이 있는지도 떠올려, 나도 어린 사람을 존중할 수 있다는 것을 짚는다. 활동 끝 3분은 짝끼리 1분씩 좋아하는 놀이 이야기를 하고, 듣는 사람은 끼어들지 않고 끝까지 듣게 한다. 말하는 도중에 끼어든 짝이 있으면 "방정환은 어린이의 말을 어떻게 들었을까요?" 하고 묻는다.',
            task: '어린이가 존중받을 때와 무시당할 때의 마음을 고르고, 어떻게 할지 골라요. 끝에 짝의 말을 끝까지 들어 주는 연습을 해요.',
            levels: CARD_LV,
            items: [
              { prompt: '두 말을 들었을 때의 마음 카드를 놓아 보세요.', toolOptions: { cards: ['뿌듯함', '속상함', '놀람'], slots: [{ id: 's1', label: '"네 생각도 들어 볼게" 하고 말해 주었어요' }, { id: 's2', label: '"넌 어려서 몰라도 돼" 하고 말했어요' }] },
                target: { match: { s1: '뿌듯함', s2: '속상함' } }, difficulty: 0.1 },
              { prompt: '동생이 이야기하는데 형이 듣지 않아요. 어떻게 하면 좋을까요?', toolOptions: { mode: 'branch', who: '하준', situation: '여섯 살 동생이 그림 이야기를 하는데, 하준이는 게임만 하며 대답하지 않아요.', choices: [
                { id: 'listen', text: '게임을 멈추고 눈을 보며 들어요', result: '동생이 신나서 그림을 더 보여 줘요.', mood: '기쁨' },
                { id: 'later', text: '"넌 어려서 몰라" 하고 말해요', result: '동생이 그림을 감추고 울어요.', mood: '슬픔', why: '방정환은 어린 사람을 어떻게 대하자고 했나요?' }] }, target: { choice: 'listen' }, difficulty: 0.1 },
              { prompt: '빈칸에 들어갈 마음 카드를 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['기쁨', '화남', '무서움'], slots: [{ id: 'b1', label: '어른이 내 말을 끝까지 들어 주어서 ___을 느꼈어요.' }] },
                target: { fill: { b1: '기쁨' } }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['기쁨', '화남', '무서움', '걱정'] } } } },
              { prompt: '짝과 번갈아 하고 싶은 이야기를 하고, 듣는 사람은 눈을 보며 끝까지 들은 뒤 "네 생각을 들려줘서 고마워" 하고 말해 보세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"방정환이 오늘 우리 반에 온다면 우리에게 무슨 말을 할까요?" 한두 명의 생각을 듣는다. 출구 질문 뒤에 "다음 어린이날에 우리가 동생이나 친구에게 해 줄 수 있는 일은 무엇일까요?"를 생각해 오게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'fill', cards: ['고마움', '심심함', '화남'], slots: [{ id: 'e1', label: '선생님이 내 생각을 칭찬해 주셔서 ___을 느꼈어요.' }] }, prompt: '빈칸에 어울리는 마음 카드를 넣어 보세요.', target: { fill: { e1: '고마움' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '방정환이 어린이날을 만드는 데 앞장선 까닭으로 알맞은 것은?', options: ['어린이도 소중하게 대해야 해서', '학교에 쉬는 날이 많아지라고', '선물을 많이 받으려고'], answer: 0, difficulty: 0.15, explain: '방정환은 어린이를 한 사람으로 존중해야 한다고 생각했어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '방정환과 어린이날',
      items: [
        { type: 'check', prompt: '방정환이 한 일에 모두 ✓ 하세요.', options: ['\'어린이\'라는 말을 널리 썼어요', '아이들에게 이야기를 들려주었어요', '아이들에게 일을 많이 시켰어요', '어린이날을 만드는 데 앞장섰어요'] },
        { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '방정환은 어린이를 ___하며 대해 달라고 했어요.', answer: '존중' },
        { type: 'choice', prompt: '어린 동생을 존중하는 말에 ○ 하세요.', options: ['"네 생각은 어때?"', '"넌 몰라도 돼"', '"저리 가"'], answer: '"네 생각은 어때?"' },
        { type: 'short', prompt: '다음 어린이날에 동생이나 친구에게 해 주고 싶은 일을 쓰세요.' },
      ],
      easy: {
        note: '방정환은 "어린이도 소중해요"라고 말한 사람이에요.',
        items: [
          { type: 'choice', prompt: '방정환이 만드는 데 앞장선 날에 ○ 하세요.', options: ['어린이날', '설날'], answer: '어린이날' },
          { type: 'choice', prompt: '존중하는 말에 ○ 하세요.', options: ['"네 생각도 들어 볼게"', '"넌 몰라도 돼"'], answer: '"네 생각도 들어 볼게"' },
          { type: 'draw', prompt: '방정환이 이야기를 들려주는 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 놓으면 초록 테두리가 생기고 틀리면 카드가 돌아와요.',
      base: '모두 놓은 뒤 확인을 눌러요. 고른 까닭을 짝에게 말해요.',
      challenge: '고를 카드가 더 섞여 있어요. 방정환의 생각을 내 말로 바꾸어 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 어린이날을 선물 받는 날로만 안다 → 방정환이 바란 것은 어린이를 존중하는 마음이라는 것을 이야기로 다시 짚는다. ② 존중을 \'말 잘 듣기\'로 여긴다 → 존중은 상대의 말을 끝까지 듣고 함부로 대하지 않는 것이라고 예를 들어 준다. ③ 연도를 외우려 한다 → 2학년은 한 일과 까닭만 말하면 된다.',
  }));

  lessons.push(L(4, {
    title: '나이팅게일이 한 일과 까닭 잇기',
    objective: '나이팅게일이 다친 군인을 돌보며 한 일을 차례대로 놓고, 그 일을 한 까닭을 짝 지어 말할 수 있다.',
    illustration: ART('a nurse in a long dress walking through a quiet hospital at night holding a small glowing lamp, checking on resting patients', '등불을 든 간호사', [
      { motif: 'house', x: 130, y: 214, color: 'lavender' }, { motif: 'tree', x: 360, y: 214 }], true),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 7,
        teacher: '선생님이 이야기를 들려준다. "아주 옛날 영국에 나이팅게일이라는 간호사가 있었어요. 전쟁으로 다친 군인이 많은 병원에 가 보니 병원이 몹시 더러웠어요. 나이팅게일은 병원을 깨끗하게 치우고, 밤에도 등불을 들고 다니며 아픈 군인을 살폈어요. 그래서 사람들은 그를 \'등불을 든 여인\'이라고 불렀어요." 시연 단추로 \'밤에 등불을 들고 다녔어요\'에 까닭 카드가 이어지는 모습을 보여 준다. "왜 밤에도 다녔을까요?"',
        student: '아플 때 누가 나를 돌봐 주었는지 떠올려 말해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '왜 그랬을까?', slots: [{ id: 's1', label: '밤에 등불을 들고 다녔어요' }], cards: ['아픈 군인을 살피려고', '산책하고 싶어서'], shuffle: false }, sequence: [{ match: { s1: '아픈 군인을 살피려고' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 나이팅게일 이야기 차례 놓기', minutes: 12, tool: 'story',
            teacher: '"나이팅게일이 병원에 가서 가장 먼저 본 것은 무엇이었지요?" 이야기를 떠올려 차례를 말하게 한다. 등불 장면을 맨 앞에 놓는 학생에게 "더러운 병원을 그대로 두고 밤에만 다녔을까요?" 하고 이야기를 다시 짚는다.',
            task: '나이팅게일 이야기 장면 카드를 일어난 차례대로 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '이야기 장면 세 장을 차례대로 놓아 보세요.', toolOptions: { cards: [{ id: '등불', text: '밤에 등불을 들고 살폈어요', motif: 'moon' }, { id: '전쟁', text: '전쟁으로 다친 군인이 많았어요', motif: 'cloud' }, { id: '병원', text: '나이팅게일이 병원에 갔어요', motif: 'house' }], slots: ['처음', '가운데', '끝'] },
                target: { order: ['전쟁', '병원', '등불'] }, difficulty: 0.1 },
              { prompt: '네 장면을 차례대로 놓아 보세요.', toolOptions: { cards: [{ id: '병원', text: '병원에 가 보니 더러웠어요', motif: 'house' }, { id: '이름', text: '\'등불을 든 여인\'이라 불렸어요', motif: 'star' }, { id: '청소', text: '병원을 깨끗하게 치웠어요', motif: 'leaf' }, { id: '등불', text: '밤에도 군인을 살폈어요', motif: 'moon' }] },
                target: { order: ['병원', '청소', '등불', '이름'] }, difficulty: 0.2,
                levels: { challenge: { prompt: '네 장면을 차례대로 놓아 보세요. 이야기에 없는 카드는 남겨요.', toolOptions: { slots: 4, cards: [{ id: '병원', text: '병원에 가 보니 더러웠어요', motif: 'house' }, { id: '이름', text: '\'등불을 든 여인\'이라 불렸어요', motif: 'star' }, { id: '청소', text: '병원을 깨끗하게 치웠어요', motif: 'leaf' }, { id: '등불', text: '밤에도 군인을 살폈어요', motif: 'moon' }, { id: '집', text: '더러워서 집으로 돌아갔어요', motif: 'cloud' }] } } } },
              { prompt: '나이팅게일의 말풍선 빈칸에 알맞은 카드를 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['깨끗해야', '시끄러워야', '어두워야'], slots: [{ id: 'b1', who: '나이팅게일', motif: 'house', label: '병원이 ___ 아픈 사람이 빨리 나아요.' }] },
                target: { fill: { b1: '깨끗해야' } }, difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 한 일과 까닭 잇기', minutes: 14, tool: 'mindmap',
            teacher: '"나이팅게일은 왜 병원을 깨끗이 치웠을까요?" 손을 씻는 까닭과 견주어 말하게 한다(더러우면 병이 옮아요). 까닭을 \'시켜서\'라고만 말하는 학생에게 "아무도 시키지 않았다면 그래도 했을까요?" 하고 묻는다. 남을 돕는 사람은 상대가 무엇이 필요한지 먼저 살핀다는 것을 짚는다. 활동 끝 3분은 짝끼리 한 사람은 군인, 한 사람은 손전등 대신 주먹을 등불처럼 든 나이팅게일이 되어 살피는 장면을 하게 한다. 살피는 사람이 상대의 대답을 듣고 무엇을 해 줄지 말하는지 본다.',
            task: '나이팅게일이 한 일마다 그렇게 한 까닭 카드를 이어요. 끝에 짝과 등불을 들고 살피는 장면을 몸짓으로 해 봐요.',
            levels: CARD_LV,
            items: [
              { prompt: '나이팅게일이 한 일과 까닭을 이어 보세요.', toolOptions: { mode: 'match', topic: '왜 그랬을까?', slots: [{ id: 's1', label: '병원을 깨끗하게 치웠어요' }, { id: 's2', label: '밤에도 등불을 들고 다녔어요' }], cards: ['더러우면 병이 옮아서', '밤에 아픈 군인이 있는지 보려고'] },
                target: { match: { s1: '더러우면 병이 옮아서', s2: '밤에 아픈 군인이 있는지 보려고' } }, difficulty: 0.1 },
              { prompt: '한 일과 까닭을 이어 보세요. 까닭이 아닌 카드는 남겨요.', toolOptions: { mode: 'match', topic: '왜 그랬을까?', slots: [{ id: 's1', label: '군인에게 따뜻한 밥을 주었어요' }, { id: 's2', label: '군인의 편지를 대신 써 주었어요' }], cards: ['힘을 내 빨리 낫게 하려고', '다쳐서 글을 쓰기 어려워서', '자랑하고 싶어서'] },
                target: { match: { s1: '힘을 내 빨리 낫게 하려고', s2: '다쳐서 글을 쓰기 어려워서' } }, difficulty: 0.2 },
              { prompt: '나이팅게일처럼 아픈 친구를 돕는 일만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '아픈 친구 돕기', cards: ['보건실에 같이 가 줘요', '아픈 친구 앞에서 크게 떠들어요', '물을 떠다 줘요', '아픈 친구 간식을 먹어요'] },
                target: { pick: ['보건실에 같이 가 줘요', '물을 떠다 줘요'] }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['보건실에 같이 가 줘요', '아픈 친구 앞에서 크게 떠들어요', '물을 떠다 줘요', '아픈 친구 간식을 먹어요', '친구 가방을 대신 들어 줘요'] }, prompt: '아픈 친구를 돕는 일만 모두 바구니에 넣어 보세요. 세 가지예요.', target: { pick: ['보건실에 같이 가 줘요', '물을 떠다 줘요', '친구 가방을 대신 들어 줘요'] } } } },
              { prompt: '짝과 나이팅게일과 다친 군인이 되어, 등불을 든 몸짓으로 "어디가 아파요?" 하고 살피는 장면을 해 보세요. 다 했으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"나이팅게일은 왜 \'등불을 든 여인\'이라고 불렸나요?" 이야기에서 찾아 말하게 한다. 출구 질문 1번은 오늘 배운 인물이 아니라 우리 둘레의 사람 이야기라는 것만 알려 준다. 다음 시간에는 아프리카에서 아픈 사람과 아이들을 도운 인물을 만난다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '왜 그랬을까?', slots: [{ id: 'e1', label: '소방관이 불이 난 집에 들어갔어요' }, { id: 'e2', label: '보건 선생님이 상처를 씻었어요' }], cards: ['안에 있는 사람을 구하려고', '상처에 병균이 들어가지 않게'] }, prompt: '한 일과 그렇게 한 까닭을 이어 보세요.', target: { match: { e1: '안에 있는 사람을 구하려고', e2: '상처에 병균이 들어가지 않게' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '나이팅게일이 밤에도 등불을 들고 다닌 까닭은?', options: ['아픈 군인을 살피려고', '밤하늘을 보려고', '잠이 오지 않아서'], answer: 0, difficulty: 0.1, explain: '밤에 아픈 군인이 있는지 살피려고 등불을 들고 다녔어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '등불을 든 간호사',
      items: [
        { type: 'figure', wide: true, prompt: '한 일과 까닭을 선으로 이으세요.', tool: 'mindmap', figures: [{ options: { mode: 'match', topic: '왜 그랬을까?', slots: [{ id: 's1', label: '병원을 치웠어요' }, { id: 's2', label: '등불을 들고 다녔어요' }], cards: ['밤에 군인을 살피려고', '병이 옮지 않게'], shuffle: false }, caption: '' }], answer: '병원을 치움-병이 옮지 않게, 등불-밤에 군인을 살피려고' },
        { type: 'choice', prompt: '나이팅게일이 하던 일에 ○ 하세요.', options: ['간호사', '요리사', '화가'], answer: '간호사' },
        { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '사람들은 나이팅게일을 \'___을 든 여인\'이라고 불렀어요.', answer: '등불' },
        { type: 'short', prompt: '아픈 친구를 위해 내가 할 수 있는 일을 쓰세요.' },
      ],
      easy: {
        note: '"왜 그랬을까?"를 물으며 이야기를 떠올려요.',
        items: [
          { type: 'choice', prompt: '나이팅게일이 돌본 사람에 ○ 하세요.', options: ['다친 군인', '배고픈 고양이'], answer: '다친 군인' },
          { type: 'choice', prompt: '병원을 깨끗하게 한 까닭에 ○ 하세요.', options: ['병이 옮지 않게', '예뻐 보이게'], answer: '병이 옮지 않게' },
          { type: 'draw', prompt: '등불을 든 나이팅게일을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 놓으면 초록 테두리가 생기고 틀리면 카드가 돌아와요.',
      base: '모두 놓은 뒤 확인을 눌러요. 까닭을 "왜냐하면"으로 말해요.',
      challenge: '네 장면을 놓고, 까닭이 아닌 카드와 함정 카드를 골라내요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 한 일과 까닭을 섞는다 → "무엇을 했나요?"와 "왜 했나요?"를 따로 물어 두 칸에 적는다. ② 까닭을 \'시켜서\'로만 말한다 → 상대에게 무엇이 필요했는지 묻는다. ③ 나이팅게일만 특별하다고 여긴다 → 보건 선생님·소방관처럼 오늘도 같은 일을 하는 사람을 떠올리게 한다.',
  }));

  lessons.push(L(5, {
    title: '이태석 신부가 톤즈에서 한 일 나누기',
    objective: '이태석 신부가 남수단 톤즈에서 한 일을 치료·가르침·음악으로 나누고, 그 일을 한 까닭을 짐작해 말할 수 있다.',
    illustration: ART('a doctor priest playing a trumpet with smiling children holding brass instruments under a big tree in a dry African village, a small clinic behind them', '톤즈의 아이들과 함께', [
      { motif: 'tree', x: 120, y: 214 }, { motif: 'house', x: 250, y: 216, color: 'peach' }, { motif: 'star', x: 380, y: 96, s: 0.6 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 7,
        teacher: '세계 지도에서 아프리카를 짚고 이야기를 들려준다. "이태석 신부는 의사이기도 했어요. 남수단의 톤즈라는 마을에 가 보니 아파도 갈 병원이 없고, 공부할 학교도 없었어요. 그래서 아픈 사람을 치료하고, 학교를 지어 아이들을 가르치고, 악기를 가르쳐 아이들과 밴드를 만들었어요." 시연 단추로 \'약을 주었어요\' 카드가 \'아픈 사람을 치료해요\' 가지에 들어가는 모습을 보여 준다. "신부님은 왜 이렇게 먼 곳까지 갔을까요?"',
        student: '이야기에서 이태석 신부가 한 일을 세 가지 손가락으로 꼽아 봐요.',
        demo: { tool: 'mindmap', options: { topic: '이태석이 한 일', slots: ['아픈 사람을 치료해요', '아이들을 가르쳐요'], cards: ['약을 주었어요'], shuffle: false }, sequence: [{ sort: { '아픈 사람을 치료해요': ['약을 주었어요'], '아이들을 가르쳐요': [] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 한 일을 가지에 나누기', minutes: 14, tool: 'mindmap',
            teacher: '"\'먼 마을까지 찾아갔어요\'는 무엇을 하려고 간 걸까요?" 카드 글에서 치료·가르침·음악을 알려 주는 말(진료·글자·나팔)을 찾아 밑줄 긋듯 짚게 한다. 한 가지 일만 했다고 여기는 학생에게 세 가지를 손가락으로 다시 꼽게 한다.',
            task: '이태석 신부가 한 일 카드를 알맞은 가지에 나누어 넣어요.',
            levels: CARD_LV,
            items: [
              { prompt: '한 일 카드를 두 가지로 나누어 보세요.', toolOptions: { topic: '이태석이 한 일', slots: ['아픈 사람을 치료해요', '아이들을 가르쳐요'], cards: ['병원에서 약을 주었어요', '먼 마을까지 가서 진료했어요', '학교를 지었어요', '글자와 셈을 가르쳤어요'] },
                target: { sort: { '아픈 사람을 치료해요': ['병원에서 약을 주었어요', '먼 마을까지 가서 진료했어요'], '아이들을 가르쳐요': ['학교를 지었어요', '글자와 셈을 가르쳤어요'] } }, difficulty: 0.1 },
              { prompt: '세 가지 가지로 나누어 보세요.', toolOptions: { topic: '이태석이 한 일', slots: ['아픈 사람을 치료해요', '아이들을 가르쳐요', '음악을 함께 해요'], cards: ['다친 다리를 치료했어요', '나팔 부는 법을 알려 주었어요', '교실에서 수업을 했어요', '아이들과 밴드를 만들었어요'] },
                target: { sort: { '아픈 사람을 치료해요': ['다친 다리를 치료했어요'], '아이들을 가르쳐요': ['교실에서 수업을 했어요'], '음악을 함께 해요': ['나팔 부는 법을 알려 주었어요', '아이들과 밴드를 만들었어요'] } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['다친 다리를 치료했어요', '나팔 부는 법을 알려 주었어요', '교실에서 수업을 했어요', '아이들과 밴드를 만들었어요', '혼자 여행을 다녔어요'] } } } },
              { prompt: '이태석 신부가 톤즈에서 한 일만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '톤즈에서 한 일', cards: ['아픈 사람을 치료했어요', '아이들 땅을 빼앗았어요', '아이들에게 악기를 가르쳤어요', '병원 문을 닫았어요'] },
                target: { pick: ['아픈 사람을 치료했어요', '아이들에게 악기를 가르쳤어요'] }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 톤즈 사람들의 마음 짐작하기', minutes: 12, tool: 'emotion',
            teacher: '"아파도 병원이 너무 멀면 마음이 어떨까요?" 톤즈 사람의 자리에 서서 마음을 고르게 한다. "신부님은 그 마음을 알았기 때문에 무엇을 했을까요?" 하고 이어 물어, 남을 도운 까닭이 상대의 어려움을 알아차린 데서 시작했다는 것을 짚는다. 활동 끝 3분은 짝끼리 붕대 감기·칠판에 글씨 쓰기·나팔 불기 가운데 하나를 말없이 몸짓으로 보여 주고 맞히게 한다. 맞힌 뒤 "그 일로 누가 도움을 받았나요?"까지 말하게 한다.',
            task: '톤즈 사람들과 이태석 신부의 마음을 짐작해 골라요. 끝에 짝과 신부님이 한 일을 몸짓으로 알아맞혀요.',
            levels: SCALE_LV,
            items: [
              { prompt: '두 장면에 어울리는 마음 카드를 놓아 보세요.', toolOptions: { cards: ['걱정', '신남', '외로움'], slots: [{ id: 's1', label: '아이가 아픈데 병원이 아주 멀어요' }, { id: 's2', label: '처음으로 나팔을 불어 소리가 났어요' }] },
                target: { match: { s1: '걱정', s2: '신남' } }, difficulty: 0.1 },
              { prompt: '빈칸에 들어갈 신부님의 마음 카드를 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['걱정', '심심함', '화남'], slots: [{ id: 'b1', label: '아파도 치료받지 못하는 사람을 보고 신부님은 ___을 느꼈을 거예요.' }] },
                target: { fill: { b1: '걱정' } }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['걱정', '심심함', '화남', '신남', '편안함'] } } } },
              { prompt: '학교가 생겨 처음 글자를 배운 톤즈 아이의 기쁜 마음 크기를 골라 보세요.', toolOptions: { mode: 'scale', situation: '톤즈에 학교가 생겨, 한 번도 학교에 가 보지 못한 아이가 처음으로 자기 이름을 썼어요.', feeling: '기쁨', after: '배울 수 있는 것은 이렇게 큰 기쁨이 될 수 있어요.' }, target: { level: [3, 5] }, difficulty: 0.1,
                levels: { easy: { prompt: '처음 글자를 배운 톤즈 아이의 기쁜 마음을 세 칸에서 골라 보세요.', target: { level: [2, 3] } } } },
              { prompt: '짝과 번갈아 이태석 신부가 한 일 하나(치료·가르침·음악)를 몸짓으로 보여 주고 알아맞혀 보세요. 다 했으면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"지금까지 만난 인물 네 명은 모두 무엇을 보고 돕기 시작했나요?" 굶주림·무시·아픔·배울 곳 없음처럼 상대의 어려움을 칠판에 모아 적는다. 다음 시간에는 이름난 인물이 아니라 우리 동네에서 돕는 사람을 찾아본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '도서관 봉사자가 한 일', slots: ['책을 정리해요', '책을 읽어 줘요'], cards: ['반납된 책을 꽂았어요', '동생들에게 그림책을 읽어 주었어요'] }, prompt: '도서관 봉사자가 한 일을 알맞은 가지에 넣어 보세요.', target: { sort: { '책을 정리해요': ['반납된 책을 꽂았어요'], '책을 읽어 줘요': ['동생들에게 그림책을 읽어 주었어요'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '이태석 신부가 톤즈 아이들에게 가르친 것이 아닌 것은?', options: ['글자', '악기', '자동차 운전'], answer: 2, difficulty: 0.15, explain: '신부님은 글자와 셈, 악기를 가르쳤어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '톤즈의 이태석 신부',
      items: [
        { type: 'table', prompt: '이태석 신부가 한 일을 가지마다 하나씩 쓰세요.', columns: ['치료해요', '가르쳐요', '음악을 해요'], rows: 1 },
        { type: 'choice', prompt: '이태석 신부가 간 곳에 ○ 하세요.', options: ['남수단 톤즈', '제주', '영국'], answer: '남수단 톤즈' },
        { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '신부님은 아이들과 함께 ___를 만들어 악기를 연주했어요.', answer: '밴드' },
        { type: 'short', prompt: '신부님이 먼 곳까지 간 까닭을 짐작해 쓰세요.' },
      ],
      easy: {
        note: '치료, 가르치기, 음악 — 세 가지를 기억해요.',
        items: [
          { type: 'choice', prompt: '신부님이 한 일에 ○ 하세요.', options: ['아픈 사람 치료', '병원 문 닫기'], answer: '아픈 사람 치료' },
          { type: 'choice', prompt: '처음 나팔을 분 아이의 마음에 ○ 하세요.', options: ['신나요', '무서워요'], answer: '신나요' },
          { type: 'draw', prompt: '톤즈 아이들이 악기를 부는 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 가지에 초록 테두리가 생기고 틀리면 카드가 돌아와요. 마음 크기는 세 칸이에요.',
      base: '모두 나눈 뒤 확인을 눌러요. 나눈 까닭을 카드의 낱말에서 찾아요.',
      challenge: '가지가 세 개로 늘고 함정 카드가 섞여 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 아프리카를 \'모두 가난한 곳\'으로 한데 묶어 말한다 → 톤즈라는 한 마을의 이야기라는 것을 짚는다. ② 신부님이 의사라서 쉬웠다고 여긴다 → 가르치기·음악처럼 의사 일이 아닌 것도 했다는 것을 견준다. ③ 까닭을 짐작하지 못한다 → "아파도 병원이 없으면 어떨까?"부터 묻는다.',
  }));

  lessons.push(L(6, {
    title: '우리 동네 숨은 도우미 찾기',
    objective: '우리 둘레에서 다른 사람을 돕는 이웃을 찾아 한 일을 말하고, 돕는 일은 이름난 사람만 하는 것이 아님을 말할 수 있다.',
    illustration: ART('a snowy apartment neighborhood in the early morning where a security guard sweeps snow, a grandmother picks up litter at the playground, and a child holds the door for a neighbor', '우리 동네의 숨은 도우미', [
      { motif: 'house', x: 110, y: 214, color: 'sky' }, { motif: 'house', x: 200, y: 218, color: 'peach', s: 0.8 }, { motif: 'snow', x: 340, y: 96 }, { motif: 'tree', x: 400, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 7,
        teacher: '"눈 온 다음 날 아침, 아파트 길이 미끄럽지 않았던 까닭은 무엇일까요?" 누군가 새벽에 눈을 쓸었다는 것을 떠올리게 한다. "김만덕이나 나이팅게일처럼 책에 나오는 사람만 남을 돕나요?" 학생 생각을 듣고 답을 정해 주지 않는다. 시연 단추로 \'눈길에 모래를 뿌린 경비원\' 카드가 \'도운 일\' 바구니에 들어가는 모습을 보여 준다.',
        student: '우리 동네에서 누군가를 돕는 사람을 본 적이 있는지 떠올려 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'pick', basket: '도운 일', cards: ['눈길에 모래를 뿌렸어요', '눈을 뭉쳐 던졌어요'], shuffle: false }, sequence: [{ pick: ['눈길에 모래를 뿌렸어요'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 이름난 인물과 우리 이웃', minutes: 13, tool: 'mindmap',
            teacher: '"이 사람은 책에 나오는 인물인가요, 우리 동네에서 만날 수 있는 이웃인가요?" 카드를 나눈 뒤 "두 가지 모두에 들어 있는 같은 점은 무엇일까요?" 하고 묻는다. 두 무리 모두 다른 사람을 도왔다는 것을 학생 입으로 말하게 한다.',
            task: '돕는 사람 카드를 책에 나오는 인물과 우리 둘레의 이웃으로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '네 사람을 책에 나오는 인물과 우리 이웃으로 나누어 보세요.', toolOptions: { topic: '다른 사람을 도운 사람', slots: ['책에 나오는 인물', '우리 둘레 이웃'], cards: ['쌀을 나눈 김만덕', '어린이날에 앞장선 방정환', '눈을 쓴 경비원 아저씨', '길을 알려 준 가게 주인'] },
                target: { sort: { '책에 나오는 인물': ['쌀을 나눈 김만덕', '어린이날에 앞장선 방정환'], '우리 둘레 이웃': ['눈을 쓴 경비원 아저씨', '길을 알려 준 가게 주인'] } }, difficulty: 0.1 },
              { prompt: '이웃이 한 일 가운데 다른 사람을 도운 일만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '도운 일', cards: ['놀이터 쓰레기를 주웠어요', '엘리베이터 문을 잡아 주었어요', '밤늦게 큰 소리로 노래했어요', '무거운 짐을 들어 드렸어요'] },
                target: { pick: ['놀이터 쓰레기를 주웠어요', '엘리베이터 문을 잡아 주었어요', '무거운 짐을 들어 드렸어요'] }, difficulty: 0.15,
                levels: { easy: { toolOptions: { cards: ['놀이터 쓰레기를 주웠어요', '밤늦게 큰 소리로 노래했어요', '무거운 짐을 들어 드렸어요'] }, prompt: '이웃이 다른 사람을 도운 일만 바구니에 넣어 보세요. 두 가지예요.', target: { pick: ['놀이터 쓰레기를 주웠어요', '무거운 짐을 들어 드렸어요'] } } } },
              { prompt: '도운 사람과 도움을 받은 사람을 이어 보세요.', toolOptions: { mode: 'match', topic: '누가 도움을 받았을까?', slots: [{ id: 's1', label: '경비원이 눈길에 모래를 뿌렸어요' }, { id: 's2', label: '약사가 약 먹는 법을 알려 주었어요' }], cards: ['길을 걷는 사람들', '감기에 걸린 할머니'] },
                target: { match: { s1: '길을 걷는 사람들', s2: '감기에 걸린 할머니' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['길을 걷는 사람들', '감기에 걸린 할머니', '놀이공원 직원'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 몸짓으로 숨은 도우미 알리기', minutes: 13, tool: 'emotion',
            teacher: '"우리 동네에서 본 숨은 도우미를 말 없이 몸짓으로만 보여 주세요." 짝이 맞히게 한 뒤, 그분 덕분에 누가 어떤 마음이었을지 고르게 한다. "아무도 모르게 도운 그분은 칭찬을 받았을까요?" 하고 물어 다음 차시들로 이어 둔다.',
            task: '짝과 몸짓으로 숨은 도우미를 알아맞히고, 도움을 받은 사람의 마음을 골라요.',
            levels: SCALE_LV,
            items: [
              { prompt: '짝에게 우리 동네 숨은 도우미를 몸짓으로 보여 주고, 서로 맞혔으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '두 장면에 어울리는 마음 카드를 놓아 보세요.', toolOptions: { cards: ['편안함', '걱정', '신남'], slots: [{ id: 's1', label: '눈길이 미끄러워 넘어질 것 같아요' }, { id: 's2', label: '모래를 뿌린 길을 걸어요' }] },
                target: { match: { s1: '걱정', s2: '편안함' } }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['편안함', '걱정', '신남', '심심함', '미안함'] } } } },
              { prompt: '엘리베이터 앞에서 짐을 든 이웃이 와요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '엘리베이터를 탔는데, 양손에 짐을 든 이웃 할아버지가 걸어오세요.', choices: [
                { id: 'hold', text: '열림 단추를 누르고 기다려요', result: '할아버지가 "고맙다" 하고 타세요.', mood: '고마움' },
                { id: 'close', text: '얼른 닫힘 단추를 눌러요', result: '할아버지가 다음 엘리베이터를 오래 기다리세요.', mood: '속상함', why: '양손에 짐을 든 할아버지는 단추를 누르기 어려워요.' }] }, target: { choice: 'hold' }, difficulty: 0.05 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"오늘 찾은 숨은 도우미에게 붙여 줄 별명을 지어 볼까요?" \'눈길 지킴이\'처럼 하는 일을 담은 별명을 두세 개 듣는다. 출구 2번 결과를 보고 \'특별한 사람만\'을 고른 학생에게는 오늘 몸짓으로 보여 준 이웃을 다시 떠올리게 한다. 다음 시간부터는 나도 인물처럼 도울 수 있는 일을 찾는다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '다른 사람을 도운 사람', slots: ['책에 나오는 인물', '우리 둘레 이웃'], cards: ['등불을 든 나이팅게일', '횡단보도의 교통 봉사자'] }, prompt: '두 사람을 알맞은 가지에 넣어 보세요.', target: { sort: { '책에 나오는 인물': ['등불을 든 나이팅게일'], '우리 둘레 이웃': ['횡단보도의 교통 봉사자'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '남을 돕는 일에 대해 바르게 말한 친구는?', options: ['민지: 특별한 사람만 할 수 있어요', '준호: 우리 이웃도 날마다 해요', '서아: 책에 나와야 돕는 거예요'], answer: 1, difficulty: 0.15, explain: '눈을 쓰는 경비원처럼 우리 이웃도 날마다 다른 사람을 도와요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '우리 동네 숨은 도우미',
      items: [
        { type: 'choice', prompt: '다른 사람을 도운 일에 ○ 하세요.', options: ['놀이터 쓰레기 줍기', '밤늦게 큰 소리로 노래하기', '엘리베이터 문 빨리 닫기'], answer: '놀이터 쓰레기 줍기' },
        { type: 'table', prompt: '우리 동네 숨은 도우미를 찾아 쓰세요.', columns: ['누가', '어디에서', '무엇을 했나요'], rows: 2 },
        { type: 'short', prompt: '숨은 도우미에게 붙여 줄 별명을 쓰세요.' },
        { type: 'draw', prompt: '숨은 도우미가 돕는 모습을 그려 보세요.' },
      ],
      easy: {
        note: '집에서 학교까지 오는 길을 떠올려요.',
        items: [
          { type: 'choice', prompt: '눈길에 모래를 뿌린 사람은?', options: ['도운 사람', '장난친 사람'], answer: '도운 사람' },
          { type: 'short', prompt: '우리 동네에서 돕는 사람을 한 명 쓰세요.' },
          { type: 'draw', prompt: '그 사람을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 고를 카드가 세 장으로 줄어요.',
      base: '모두 나눈 뒤 확인을 눌러요. 두 무리의 같은 점을 말해요.',
      challenge: '관계없는 사람 카드가 섞여 있어요. 숨은 도우미의 별명과 까닭을 함께 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 돕는 일을 이름난 인물만 한다고 여긴다(이 단원의 핵심 오개념) → 오늘 찾은 이웃과 책 속 인물의 같은 점을 말하게 한다. ② 직업이라서 하는 일은 돕는 것이 아니라고 말한다 → 그 일 덕분에 누가 편해졌는지 묻는다. ③ 몸짓 맞히기에서 장난이 커진다 → 30초 안에 한 사람씩 하도록 시간을 정한다.',
  }));

  // ───────────────────────── 7~11차시: 인물처럼 지금 할 수 있는 일(바른 생활 실천) ─────────────────────────

  lessons.push(L(7, {
    title: '인물이 한 일을 내가 할 일로 바꾸기',
    objective: '인물이 한 일과 비슷하게 지금 내가 할 수 있는 일을 짝 짓고, 어린이도 지금 할 수 있는 일을 골라 말할 수 있다.',
    illustration: ART('a child sharing snacks with a friend, another child walking a classmate to the nurse office, with faint paper portraits of helpers from stories floating behind them', '나도 할 수 있어요', [
      { motif: 'flower', x: 110, y: 228, color: 'buttercup' }, { motif: 'house', x: 250, y: 214 }, { motif: 'star', x: 380, y: 96, s: 0.6 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"김만덕은 쌀을 나누었어요. 우리는 쌀 가게가 없는데, 만덕처럼 나눌 수 있을까요?" 학생 생각을 듣는다. 시연 단추로 \'먹을 것을 나누었어요\'에 \'간식을 친구와 나누어요\'가 이어지는 모습을 보여 준다. "인물이 한 일을 크기만 줄이면 우리도 오늘 할 수 있어요." \'어린이는 아직 못 해요\'라고 말하는 학생의 말은 칠판 한쪽에 적어 두고 차시 끝에 다시 본다.',
        student: '지금까지 만난 인물 가운데 가장 닮고 싶은 사람을 골라 말해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '나도 할 수 있어요', slots: [{ id: 's1', label: '김만덕: 먹을 것을 나누었어요' }], cards: ['간식을 친구와 나누어요', '쌀 가게를 열어요'], shuffle: false }, sequence: [{ match: { s1: '간식을 친구와 나누어요' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 인물이 한 일과 내가 할 일 잇기', minutes: 13, tool: 'mindmap',
            teacher: '"나이팅게일은 아픈 사람을 돌보았어요. 우리 교실에서 아픈 친구가 있으면 무엇을 할 수 있을까요?" 인물이 한 일에서 \'누구를, 어떻게\'를 찾고, 그것을 교실 크기로 바꾸게 한다. 큰일을 그대로 따라 하려는 학생(병원을 지어요)에게 "오늘 쉬는 시간에 할 수 있는 것으로 바꿔 볼까요?" 하고 묻는다.',
            task: '인물이 한 일과 가장 닮은, 지금 내가 할 수 있는 일 카드를 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '인물이 한 일과 닮은 내가 할 일을 이어 보세요.', toolOptions: { mode: 'match', topic: '나도 할 수 있어요', slots: [{ id: 's1', label: '김만덕: 먹을 것을 나누었어요' }, { id: 's2', label: '나이팅게일: 아픈 사람을 돌보았어요' }], cards: ['간식을 친구와 나누어요', '아픈 친구와 보건실에 가요'] },
                target: { match: { s1: '간식을 친구와 나누어요', s2: '아픈 친구와 보건실에 가요' } }, difficulty: 0.05 },
              { prompt: '세 인물이 한 일과 닮은 내가 할 일을 이어 보세요.', toolOptions: { mode: 'match', topic: '나도 할 수 있어요', slots: [{ id: 's1', label: '방정환: 어린이의 말을 들어 주었어요' }, { id: 's2', label: '이태석: 아이들을 가르쳤어요' }, { id: 's3', label: '경비원: 눈길을 쓸었어요' }], cards: ['동생 말을 끝까지 들어 줘요', '친구에게 모르는 문제를 알려 줘요', '교실 앞 쓰레기를 주워요'] },
                target: { match: { s1: '동생 말을 끝까지 들어 줘요', s2: '친구에게 모르는 문제를 알려 줘요', s3: '교실 앞 쓰레기를 주워요' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['동생 말을 끝까지 들어 줘요', '친구에게 모르는 문제를 알려 줘요', '교실 앞 쓰레기를 주워요', '친구 숙제를 대신 해 줘요'] } } } },
              { prompt: '세종대왕이 한 일과 닮은 내가 할 일을 골라 이어 보세요.', toolOptions: { mode: 'match', topic: '나도 할 수 있어요', slots: [{ id: 's1', label: '세종대왕: 백성이 쉽게 쓰도록 한글을 만들었어요' }], cards: ['글을 모르는 동생에게 그림책을 읽어 줘요', '동생 공책에 낙서해요', '나만 아는 글자로 편지를 써요'] },
                target: { match: { s1: '글을 모르는 동생에게 그림책을 읽어 줘요' } }, difficulty: 0.2,
                predict: { q: '세종대왕처럼 글자를 새로 만들어야만 닮은 일일까요?', options: ['꼭 만들어야 해요', '글을 쉽게 읽게 도우면 돼요'], answer: 1 },
                conclude: '인물이 한 일의 뜻(글을 몰라 힘든 사람을 도움)을 살리면 나도 비슷한 일을 할 수 있어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 어린이도 지금 할 수 있을까', minutes: 13, tool: 'mindmap',
            teacher: '"이 일은 2학년인 내가 오늘 할 수 있나요, 어른이 되어야 할 수 있나요?" 카드마다 손을 들어 투표한 뒤 나누게 한다. 칠판에 적어 둔 \'어린이는 아직 못 해요\'를 다시 읽고 "정말 그런가요?" 하고 묻는다. 어른의 일로 나눈 것도 어린이가 도울 수 있는 작은 몫(병원 대신 아픈 친구 곁 지키기)이 있다는 것을 덧붙인다. 활동 끝 3분은 짝끼리 오늘 해 볼 일 하나를 정해 몸짓으로 보여 주게 한다. 어른의 일을 고른 짝에게는 그 가운데 어린이가 할 수 있는 작은 몫을 다시 찾게 한다.',
            task: '돕는 일 카드를 어린이가 지금 할 수 있는 일과 어른이 되어야 할 수 있는 일로 나누어요. 끝에 짝과 오늘 해 볼 일을 정해 몸짓으로 보여 줘요.',
            levels: CARD_LV,
            items: [
              { prompt: '네 가지 일을 나누어 보세요.', toolOptions: { topic: '누가 할 수 있을까?', slots: ['어린이도 지금 할 수 있어요', '어른이 되어야 할 수 있어요'], cards: ['친구에게 연필을 빌려줘요', '병원에서 수술을 해요', '동생 신발 끈을 묶어 줘요', '학교 건물을 지어요'] },
                target: { sort: { '어린이도 지금 할 수 있어요': ['친구에게 연필을 빌려줘요', '동생 신발 끈을 묶어 줘요'], '어른이 되어야 할 수 있어요': ['병원에서 수술을 해요', '학교 건물을 지어요'] } }, difficulty: 0.1,
                levels: { challenge: { prompt: '네 가지 일을 나누어 보세요. 누구도 하면 안 되는 일은 카드 칸에 남겨요.', toolOptions: { cards: ['친구에게 연필을 빌려줘요', '병원에서 수술을 해요', '동생 신발 끈을 묶어 줘요', '학교 건물을 지어요', '친구 물건을 몰래 가져가요'] } } } },
              { prompt: '다섯 가지 일을 나누어 보세요.', toolOptions: { topic: '누가 할 수 있을까?', slots: ['어린이도 지금 할 수 있어요', '어른이 되어야 할 수 있어요'], cards: ['혼자 있는 친구에게 말을 걸어요', '버스를 운전해요', '화분에 물을 줘요', '불난 집에 들어가 불을 꺼요', '떨어진 물건을 주워 줘요'] },
                target: { sort: { '어린이도 지금 할 수 있어요': ['혼자 있는 친구에게 말을 걸어요', '화분에 물을 줘요', '떨어진 물건을 주워 줘요'], '어른이 되어야 할 수 있어요': ['버스를 운전해요', '불난 집에 들어가 불을 꺼요'] } }, difficulty: 0.15 },
              { prompt: '어린이가 혼자 하면 위험해서 어른께 알려야 하는 일만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '어른께 알려요', cards: ['깨진 유리 조각 치우기', '친구 우산 같이 쓰기', '물에 빠진 사람 구하러 들어가기', '친구 가방 들어 주기'] },
                target: { pick: ['깨진 유리 조각 치우기', '물에 빠진 사람 구하러 들어가기'] }, difficulty: 0.2,
                conclude: '위험한 일은 어른께 바로 알리는 것이 어린이가 도울 수 있는 방법이에요.' },
              { prompt: '짝과 오늘 해 볼 돕는 일을 하나씩 정하고, 그 일을 하는 몸짓을 보여 준 뒤 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 나는 인물처럼 무엇을 해 볼래요?" 한 사람씩 짧게 말하고 활동지에 적는다. 위험한 일은 어른께 알리는 것도 돕는 방법이라는 것을 다시 한 번 짚는다. 다음 시간에는 교실에서 정한 일을 실제로 해 본다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '나도 할 수 있어요', slots: [{ id: 'e1', label: '이태석: 아이들에게 악기를 가르쳤어요' }], cards: ['리코더 운지를 친구에게 알려 줘요', '친구 리코더를 숨겨요'] }, prompt: '인물이 한 일과 닮은 내가 할 일을 이어 보세요.', target: { match: { e1: '리코더 운지를 친구에게 알려 줘요' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '어린이가 남을 돕는 일에 대해 알맞은 말은?', options: ['어린이는 아직 도울 수 없어요', '어린이도 지금 할 수 있는 일이 있어요', '어른이 시킬 때만 도와요'], answer: 1, difficulty: 0.1, explain: '연필 빌려주기, 말 걸기처럼 어린이도 지금 도울 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '인물처럼 나도',
      items: [
        { type: 'figure', wide: true, prompt: '인물이 한 일과 닮은 내가 할 일을 선으로 이으세요.', tool: 'mindmap', figures: [{ options: { mode: 'match', topic: '나도 할 수 있어요', slots: [{ id: 's1', label: '김만덕: 나누었어요' }, { id: 's2', label: '나이팅게일: 돌보았어요' }], cards: ['아픈 친구 곁에 있어요', '간식을 나누어요'], shuffle: false }, caption: '' }], answer: '김만덕-간식을 나누어요, 나이팅게일-아픈 친구 곁에 있어요' },
        { type: 'check', prompt: '어린이도 지금 할 수 있는 일에 모두 ✓ 하세요.', options: ['연필 빌려주기', '버스 운전하기', '화분에 물 주기', '수술하기'] },
        { type: 'choice', prompt: '깨진 유리 조각을 보면 어떻게 할까요?', options: ['어른께 알려요', '손으로 주워요'], answer: '어른께 알려요' },
        { type: 'short', prompt: '인물처럼 내가 오늘 해 볼 일을 쓰세요.' },
      ],
      easy: {
        note: '인물이 한 일을 작게 바꾸면 내가 할 수 있는 일이 돼요.',
        items: [
          { type: 'choice', prompt: '내가 지금 할 수 있는 일에 ○ 하세요.', options: ['간식 나누기', '학교 짓기'], answer: '간식 나누기' },
          { type: 'short', prompt: '내가 오늘 해 볼 일을 쓰세요.' },
          { type: 'draw', prompt: '그 일을 하는 내 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고 틀리면 카드가 돌아와요.',
      base: '모두 놓은 뒤 확인을 눌러요. 고른 일을 교실에서 언제 할지 말해요.',
      challenge: '함정 카드(숙제 대신 해 주기)를 골라내고, 왜 돕는 일이 아닌지 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 어린이는 도울 수 없다고 여긴다(이 차시의 오개념) → 지금 할 수 있는 일 카드를 몸으로 해 보게 한다. ② 숙제를 대신 해 주는 것처럼 상대에게 도움이 안 되는 일을 돕는 일로 여긴다 → "그 친구가 다음에 혼자 할 수 있을까?"를 묻는다. ③ 위험한 일에 뛰어들려 한다 → 어른께 알리는 것도 돕는 일이라고 분명히 말한다.',
  }));

  lessons.push(L(8, {
    title: '교실에서 도울 일 정해 실제로 해 보기',
    objective: '교실에서 도울 일을 상대에게 먼저 물어 정하고, 실제로 해 본 뒤 한 일을 점검표에 표시할 수 있다.',
    illustration: ART('a busy classroom where children help each other: carrying a milk crate together, wiping the board, and lending a pencil with a smile', '교실 도우미가 되어요', [
      { motif: 'house', x: 120, y: 214, color: 'mint' }, { motif: 'flower', x: 250, y: 228 }, { motif: 'tree', x: 380, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"지난 시간에 정한 \'인물처럼 해 볼 일\'을 해 본 사람 있나요?" 한두 명의 경험을 듣는다. "도와주려고 했는데 친구가 싫어한 적은 없었나요?" 하고 물은 뒤, 시연 단추로 \'도와줄까?\' 하고 먼저 묻는 보기를 고르는 모습을 보여 준다. 돕기 전에 상대가 원하는지 묻는 것이 첫걸음이라는 것을 짚는다.',
        student: '교실에서 누군가에게 도움이 필요해 보였던 때를 떠올려 봐요.',
        demo: { tool: 'emotion', options: { mode: 'branch', situation: '짝이 무거운 책을 옮기고 있어요.', choices: [{ id: 'ask', text: '"도와줄까?" 하고 물어요', result: '짝이 "응, 같이 들자" 해요.', mood: '고마움' }, { id: 'grab', text: '말없이 책을 빼앗아 들어요', result: '짝이 깜짝 놀라 책을 떨어뜨려요.', mood: '놀람' }] }, sequence: [{ choice: 'ask' }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 이럴 때 어떻게 도울까', minutes: 10, tool: 'emotion',
            teacher: '"친구가 혼자 하고 싶어 할 때도 도와야 할까요?" 보기를 고른 뒤 결과 칸을 소리 내어 읽게 한다. 대신 해 주는 보기를 고른 학생에게 "그 친구는 다음에 혼자 할 수 있을까요?" 하고 묻는다. 묻기 → 원하면 함께 하기 → 원하지 않으면 기다리기 차례를 칠판에 적는다.',
            task: '교실에서 생기는 일을 읽고, 친구에게 도움이 되는 방법을 골라요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '친구가 우유 상자를 혼자 들고 와요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '우유 당번 지우가 무거운 우유 상자를 혼자 들고 와요.', choices: [
                { id: 'ask', text: '"한쪽 들어 줄까?" 하고 물어요', result: '둘이 함께 들어 금방 옮겼어요.', mood: '고마움' },
                { id: 'watch', text: '그냥 앉아서 구경해요', result: '지우가 힘들어 상자를 떨어뜨릴 뻔했어요.', mood: '걱정', why: '무거운 것을 혼자 드는 친구는 어떤 마음일까요?' }] }, target: { choice: 'ask' }, difficulty: 0.05,
                levels: { challenge: { toolOptions: { choices: [
                  { id: 'ask', text: '"한쪽 들어 줄까?" 하고 물어요', result: '둘이 함께 들어 금방 옮겼어요.', mood: '고마움' },
                  { id: 'grab', text: '"내가 다 들게" 하고 빼앗아요', result: '혼자 들다가 비틀거려 넘어질 뻔했어요.', mood: '놀람', why: '무거운 상자를 한 사람이 빼앗아 들면 어떻게 될까요?' },
                  { id: 'watch', text: '그냥 앉아서 구경해요', result: '지우가 힘들어 상자를 떨어뜨릴 뻔했어요.', mood: '걱정', why: '무거운 것을 혼자 드는 친구는 어떤 마음일까요?' }] } } } },
              { prompt: '짝이 그림을 혼자 끝까지 그리고 싶대요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '짝이 "이 그림은 내가 혼자 끝까지 그려 볼래"라고 말했어요.', choices: [
                { id: 'take', text: '크레파스를 빼앗아 대신 칠해 줘요', result: '짝이 속상해서 그림을 덮었어요.', mood: '속상함', why: '짝이 혼자 해 보고 싶다고 했어요.' },
                { id: 'wait', text: '"필요하면 말해 줘" 하고 기다려요', result: '짝이 끝까지 그리고 뿌듯해했어요.', mood: '뿌듯함' },
                { id: 'laugh', text: '"너는 못 그려" 하고 웃어요', result: '짝이 그리기를 그만뒀어요.', mood: '슬픔', why: '그 말을 들은 짝의 마음을 떠올려 봐요.' }] }, target: { choice: 'wait' }, difficulty: 0.15,
                levels: { easy: { toolOptions: { choices: [
                  { id: 'take', text: '크레파스를 빼앗아 대신 칠해 줘요', result: '짝이 속상해서 그림을 덮었어요.', mood: '속상함', why: '짝이 혼자 해 보고 싶다고 했어요.' },
                  { id: 'wait', text: '"필요하면 말해 줘" 하고 기다려요', result: '짝이 끝까지 그리고 뿌듯해했어요.', mood: '뿌듯함' }] } } } },
              { prompt: '전학 온 친구가 급식실을 몰라요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '오늘 전학 온 서아가 점심시간에 교실 문 앞에 혼자 서 있어요.', choices: [
                { id: 'together', text: '"같이 가자" 하고 줄에 함께 서요', result: '서아가 웃으며 따라와요.', mood: '편안함' },
                { id: 'point', text: '저쪽이라고 손짓만 하고 뛰어가요', result: '서아가 복도에서 길을 헤매요.', mood: '걱정', why: '처음 온 친구는 손짓만으로 길을 찾기 어려워요.' }] }, target: { choice: 'together' }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { choices: [
                  { id: 'point', text: '저쪽이라고 손짓만 하고 뛰어가요', result: '서아가 복도에서 길을 헤매요.', mood: '걱정', why: '처음 온 친구는 손짓만으로 길을 찾기 어려워요.' },
                  { id: 'follow', text: '"알아서 따라와" 하고 먼저 가요', result: '서아가 줄을 놓쳐 혼자 남았어요.', mood: '외로움', why: '처음 온 친구가 혼자 따라오기 쉬울까요?' },
                  { id: 'together', text: '"같이 가자" 하고 줄에 함께 서요', result: '서아가 웃으며 따라와요.', mood: '편안함' }] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 정한 일을 해 보고 점검하기', minutes: 17, tool: 'kitchen', pair: true,
            teacher: '"돕기 전에 꼭 해야 할 일은 무엇이었지요?" 점검 목록에서 알맞은 것을 고르게 한 뒤, 8분 동안 짝과 교실 도우미 일(칠판 지우기, 책꽂이 정리, 화분 물 주기, 친구에게 연필 빌려주기 가운데 하나)을 실제로 해 본다. 다 한 뒤 "도와주고 나서 값을 받아야 할까요?" 하고 물어, 도운 뒤에 할 일을 고르게 한다.',
            task: '돕기 전에 할 일을 고르고, 짝과 교실 도우미 일을 실제로 해 본 뒤, 도운 뒤에 할 일을 골라요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '돕기 전에 할 일만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '돕기 전에 할 일', items: [{ id: 'ask', text: '"도와줄까?" 하고 물어요' }, { id: 'safe', text: '위험하지 않은지 살펴요' }, { id: 'show', text: '다른 친구에게 자랑부터 해요' }, { id: 'grab', text: '말없이 먼저 가져가요' }] },
                target: { checklist: ['ask', 'safe'] }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { items: [{ id: 'ask', text: '"도와줄까?" 하고 물어요' }, { id: 'safe', text: '위험하지 않은지 살펴요' }, { id: 'show', text: '다른 친구에게 자랑부터 해요' }, { id: 'grab', text: '말없이 먼저 가져가요' }, { id: 'listen', text: '친구가 원하는 것을 들어요' }] }, prompt: '돕기 전에 할 일만 모두 표시해 보세요. 세 가지예요.', target: { checklist: ['ask', 'safe', 'listen'] } } } },
              { prompt: '짝과 교실 도우미 일 하나를 정해 8분 동안 실제로 해 보고 "다 했어요"를 누르세요.', free: true },
              { prompt: '도운 일을 마친 뒤에 할 일만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '도운 뒤에 할 일', items: [{ id: 'tidy', text: '쓴 물건을 제자리에 두어요' }, { id: 'brag', text: '"내가 해 줬어" 하고 돌아다녀요' }, { id: 'tell', text: '다 했다고 친구에게 알려요' }, { id: 'pay', text: '도와준 값으로 간식을 달라고 해요' }] },
                target: { checklist: ['tidy', 'tell'] }, difficulty: 0.15,
                levels: { easy: { toolOptions: { items: [{ id: 'tidy', text: '쓴 물건을 제자리에 두어요' }, { id: 'tell', text: '다 했다고 친구에게 알려요' }, { id: 'pay', text: '도와준 값으로 간식을 달라고 해요' }] } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"오늘 도움을 받은 친구는 어떤 표정이었나요?" 두세 명이 짧게 말한다. 8분 안에 정한 일을 다 하지 못한 짝에게 "다음 쉬는 시간에 이어서 해 볼까요?" 하고 묻는다. 다음 시간에는 오늘 한 일을 그림일기로 남긴다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'branch', situation: '친구가 줄넘기 줄이 엉켜서 풀고 있어요.', choices: [{ id: 'ask', text: '"같이 풀어 줄까?" 하고 물어요', result: '친구가 "응!" 하고 줄 한쪽을 건네요.', mood: '고마움' }, { id: 'pull', text: '줄을 확 잡아당겨요', result: '줄이 더 엉켜 버렸어요.', mood: '속상함' }] }, prompt: '친구를 돕는 알맞은 방법을 골라 보세요.', target: { choice: 'ask' }, difficulty: 0.05 },
          { type: 'choice', prompt: '친구가 "혼자 해 볼래"라고 하면 어떻게 할까요?', options: ['억지로 대신 해 줘요', '"필요하면 말해 줘" 하고 기다려요', '못 한다고 놀려요'], answer: 1, difficulty: 0.15, explain: '돕는 것은 상대가 원하는 방법으로 하는 거예요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '교실 도우미',
      items: [
        { type: 'figure', prompt: '돕기 전에 할 일에 ✓ 하세요.', tool: 'kitchen', figures: [{ options: { mode: 'checklist', title: '돕기 전에 할 일', items: [{ id: 'ask', text: '"도와줄까?" 하고 물어요' }, { id: 'grab', text: '말없이 가져가요' }, { id: 'safe', text: '위험한지 살펴요' }] }, caption: '' }], answer: '묻기, 위험한지 살피기' },
        { type: 'choice', prompt: '전학 온 친구를 돕는 방법에 ○ 하세요.', options: ['함께 급식실에 가요', '손짓만 하고 뛰어가요'], answer: '함께 급식실에 가요' },
        { type: 'table', prompt: '오늘 한 교실 도우미 일을 쓰세요.', columns: ['누구를', '무엇을 도왔나요', '친구의 표정'], rows: 2 },
        { type: 'short', prompt: '다음에 또 해 보고 싶은 교실 도우미 일을 쓰세요.' },
      ],
      easy: {
        note: '먼저 "도와줄까?" 하고 물어요.',
        items: [
          { type: 'choice', prompt: '돕기 전에 하는 말에 ○ 하세요.', options: ['"도와줄까?"', '"비켜!"'], answer: '"도와줄까?"' },
          { type: 'short', prompt: '오늘 도운 일을 쓰세요.' },
          { type: 'draw', prompt: '교실에서 도운 내 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '보기마다 결과를 소리 내어 읽고 골라요. 활동지는 두 가지 보기에서 골라요.',
      base: '스스로 고르고, 짝과 정한 도우미 일을 실제로 해요.',
      challenge: '돕기 전에 할 일이 하나 더 숨어 있어요. 도운 일과 친구의 표정까지 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 묻지 않고 대신 해 준다 → 묻기-함께 하기-기다리기 차례를 칠판에 붙여 둔다. ② 도와준 값(간식·칭찬)을 바란다 → 도움을 받은 친구가 편해진 것 자체를 보게 한다(12~13차시에서 다시 다룬다). ③ 도우미 일 하나에 여럿이 몰린다 → 짝마다 일을 하나씩 정해 준다.',
  }));

  lessons.push(L(9, {
    title: '도운 일을 그림일기로 남기기',
    objective: '내가 도운 일을 언제·무엇을·상대의 말·내 마음 차례로 글로 쓰고, 그 장면을 색종이 그림으로 남길 수 있다.',
    illustration: ART('an open paper picture diary on a desk showing two smiling children picking up spilled marbles together, with crayons and pink paper hearts around it', '오늘 내가 도운 일', [
      { motif: 'flower', x: 110, y: 228, color: 'rose' }, { motif: 'house', x: 380, y: 214, color: 'buttercup' }, { motif: 'star', x: 250, y: 96, s: 0.5 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"지난 시간에 교실 도우미가 되어 무엇을 했나요?" 두세 명이 말한 것을 칠판에 적는다. 선생님이 직접 쓴 짧은 그림일기를 읽어 준다. "쉬는 시간에 교실에서, 짝의 떨어진 구슬을 함께 주웠다. 짝이 고맙다고 했다. 나도 기뻤다." 시연 단추로 일기 문장이 차례대로 놓이는 모습을 보여 준다. "도운 일을 남겨 두면 나중에 다시 볼 수 있어요."',
        student: '내가 도운 일 가운데 그림일기로 남기고 싶은 일을 하나 골라요.',
        demo: { tool: 'story', options: { cards: [{ id: 'when', text: '쉬는 시간에 교실에서', motif: 'house' }, { id: 'act', text: '구슬을 함께 주웠다', motif: 'star' }], slots: ['언제·어디서', '한 일'], shuffle: false }, sequence: [{ order: ['when', 'act'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 그림일기 문장 차례 정하기', minutes: 12, tool: 'story',
            teacher: '"일기 첫 문장에는 무엇을 쓰면 읽는 사람이 바로 알 수 있을까요?" 언제·어디서 → 한 일 → 상대가 한 말 → 내 마음 차례를 손가락 네 개로 꼽게 한다. 마음을 맨 앞에 쓰는 학생에게 "무엇을 했는지 모르면 왜 기뻤는지 알 수 있을까요?" 하고 묻는다.',
            task: '그림일기 문장을 차례대로 놓고, 빈칸에 알맞은 낱말을 넣어요.',
            levels: CARD_LV,
            items: [
              { prompt: '그림일기 문장 세 개를 차례대로 놓아 보세요.', toolOptions: { hint1: '그림일기는 언제·어디서 → 한 일 → (들은 말) → 내 마음 차례로 써요. 카드마다 이 가운데 무엇을 말하는지 먼저 찾아요.', cards: [{ id: 'feel', text: '동생이 웃어서 나도 뿌듯했다', motif: 'star' }, { id: 'when', text: '아침에 현관에서', motif: 'house' }, { id: 'act', text: '동생 신발 끈을 묶어 주었다', motif: 'leaf' }], slots: ['언제·어디서', '한 일', '내 마음'] },
                target: { order: ['when', 'act', 'feel'] }, difficulty: 0.1 },
              { prompt: '그림일기 문장 네 개를 차례대로 놓아 보세요.', toolOptions: { hint1: '그림일기는 언제·어디서 → 한 일 → (들은 말) → 내 마음 차례로 써요. 카드마다 이 가운데 무엇을 말하는지 먼저 찾아요.', cards: [{ id: 'said', text: '할머니가 "고맙다" 하셨다', motif: 'flower' }, { id: 'when', text: '저녁에 시장 앞에서', motif: 'house' }, { id: 'feel', text: '내 마음이 따뜻했다', motif: 'sun' }, { id: 'act', text: '할머니 장바구니를 들었다', motif: 'leaf' }], slots: ['언제·어디서', '한 일', '상대가 한 말', '내 마음'] },
                target: { order: ['when', 'act', 'said', 'feel'] }, difficulty: 0.15,
                levels: { challenge: { prompt: '그림일기 문장 네 개를 차례대로 놓아 보세요. 이 일기와 맞지 않는 문장은 남겨요.', toolOptions: { cards: [{ id: 'said', text: '할머니가 "고맙다" 하셨다', motif: 'flower' }, { id: 'when', text: '저녁에 시장 앞에서', motif: 'house' }, { id: 'feel', text: '내 마음이 따뜻했다', motif: 'sun' }, { id: 'act', text: '할머니 장바구니를 들었다', motif: 'leaf' }, { id: 'pass', text: '할머니를 못 본 척 지나갔다', motif: 'cloud' }] } } } },
              { prompt: '일기 빈칸 두 곳에 알맞은 카드를 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['연필을', '간식을', '"고마워"', '"저리 가"'], slots: [{ id: 'b1', who: '나', motif: 'star', label: '짝이 연필을 잃어버려서 내 ___ 빌려주었다.' }, { id: 'b2', who: '짝', motif: 'flower', label: '짝이 ___ 하고 웃었다.' }] },
                target: { fill: { b1: '연필을', b2: '"고마워"' } }, difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 도운 장면을 색종이로 꾸미기', minutes: 15, tool: 'collage',
            teacher: '"도운 나와 도움을 받은 사람을 어떤 모양으로 나타낼까요?" 큰 동그라미 얼굴 두 개로 두 사람을, 하트로 마음을 나타내는 방법을 보여 준다. 얼굴 표정을 반원 방향으로 바꿔 보게 하고, 판에서 만든 뒤에는 활동지 그림일기 칸에 실제 색종이나 색연필로 장면을 남긴다.',
            task: '판에 도운 장면을 꾸미고, 활동지 그림일기 칸에 그림과 글로 남겨요.',
            levels: {
              easy: { shapes: ['circle', 'semi', 'heart'], colors: ['노랑', '빨강', '분홍', '검정'] },
              base: { shapes: ['circle', 'semi', 'heart', 'square', 'triangle', 'star'], colors: ['노랑', '빨강', '분홍', '검정', '파랑', '초록', '갈색'] },
              challenge: {},
            },
            items: [
              { prompt: '나와 도움을 받은 사람을 노랑 큰 동그라미 얼굴 두 개로 붙여 보세요.', target: { has: [{ shape: 'circle', color: '노랑', size: 'l', n: 2 }] }, difficulty: 0.05,
                levels: { challenge: { prompt: '노랑 큰 동그라미 얼굴 두 개를 붙이고, 얼굴마다 검정 작은 동그라미 눈을 두 개씩 붙여 보세요.', target: { has: [{ shape: 'circle', color: '노랑', size: 'l', n: 2 }, { shape: 'circle', color: '검정', size: 's', n: 4 }] } } } },
              { prompt: '두 얼굴 사이에 고마운 마음을 분홍 하트로 적어도 세 개 붙여 보세요.', state: { pieces: [{ shape: 'circle', color: '노랑', size: 'l', x: 160, y: 200, r: 0 }, { shape: 'circle', color: '노랑', size: 'l', x: 400, y: 200, r: 0 }] }, target: { has: [{ shape: 'heart', color: '분홍', min: 3 }] }, difficulty: 0.1 },
              { prompt: '내가 도운 장면을 조각 적어도 다섯 개 써서 꾸미고 점검해 보세요.', target: { selfCheck: ['도운 나와 상대가 보여요', '두 사람의 표정을 붙였어요', '무슨 장면인지 짝에게 말했어요'], minPieces: 5 }, difficulty: 0.1 },
              { prompt: '활동지 그림일기 칸에 그림을 그리고 네 문장을 썼으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"짝의 그림일기를 읽고 짝이 누구를 도왔는지 말해 볼까요?" 두세 짝이 서로의 일기를 읽어 준다. 다 쓴 그림일기는 교실 뒤 \'우리가 도운 일\' 판에 모은다. 다음 시간에는 집에서 가족을 도울 계획을 세운다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { cards: [{ id: 'feel', text: '내 마음이 기뻤다', motif: 'sun' }, { id: 'when', text: '점심시간에 급식실에서', motif: 'house' }, { id: 'act', text: '친구 식판을 같이 들었다', motif: 'leaf' }], slots: ['언제·어디서', '한 일', '내 마음'] }, prompt: '처음 보는 일기 문장을 차례대로 놓아 보세요.', target: { order: ['when', 'act', 'feel'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '그림일기 첫 문장으로 가장 알맞은 것은?', options: ['정말 기뻤다.', '쉬는 시간에 운동장에서,', '친구가 고맙다고 했다.'], answer: 1, difficulty: 0.15, explain: '첫 문장에는 언제·어디서를 써야 읽는 사람이 장면을 떠올려요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '내가 도운 일 그림일기',
      items: [
        { type: 'draw', prompt: '내가 도운 장면을 그려 보세요.' },
        { type: 'table', prompt: '그림일기 네 문장을 쓰세요.', columns: ['차례', '쓸 것'], cells: [['언제·어디서', ''], ['한 일', ''], ['상대가 한 말', ''], ['내 마음', '']] },
        { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '그림일기 첫 문장에는 언제, ___를 써요.', answer: '어디서' },
        { type: 'choice', prompt: '내 마음을 쓴 문장에 ○ 하세요.', options: ['나도 뿌듯했다.', '아침에 현관에서', '신발 끈을 묶었다.'], answer: '나도 뿌듯했다.' },
      ],
      easy: {
        note: '언제·어디서 → 한 일 → 마음 차례로 써요.',
        items: [
          { type: 'draw', prompt: '내가 도운 장면을 그려 보세요.' },
          { type: 'short', prompt: '내가 한 일을 한 문장으로 쓰세요.' },
          { type: 'choice', prompt: '그때 내 마음에 ○ 하세요.', options: ['뿌듯했어요', '심심했어요'], answer: '뿌듯했어요' },
        ],
      },
    },
    differentiation: {
      easy: '모양 세 가지, 색 네 가지만 나와요. 일기는 세 문장으로 써요.',
      base: '문장 네 개를 차례대로 쓰고, 장면을 색종이로 꾸며요.',
      challenge: '일기와 맞지 않는 함정 문장을 골라내고, 얼굴에 눈까지 붙여요. 모든 모양과 색을 쓰고, 일기에 상대가 한 말을 따옴표로 넣어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 마음부터 쓴다 → 손가락 네 개 차례를 다시 꼽는다. ② 도운 일이 없다고 말한다 → 8차시 교실 도우미 일이나 오늘 아침 일을 함께 떠올린다. ③ 그림에만 시간을 다 쓴다 → 판 꾸미기 7분, 활동지 8분으로 나누어 알린다.',
  }));

  lessons.push(L(10, {
    title: '집에서 가족을 도울 일과 때 정하기',
    objective: '집에서 혼자 안전하게 할 수 있는 일을 고르고, 하루 가운데 언제 가족을 도울지 짝 지어 계획할 수 있다.',
    illustration: ART('a warm paper family home at dinner time where a child sets spoons on the table, another folds a blanket, and a parent cooks at the stove in the back', '가족을 돕는 나', [
      { motif: 'house', x: 120, y: 214, color: 'peach' }, { motif: 'tree', x: 380, y: 214 }, { motif: 'flower', x: 250, y: 228 }]),
    safety: ['칼·가스레인지·뜨거운 냄비는 어린이 혼자 만지지 않아요. 어른께 부탁해요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"우리 집에서 밥을 차리고 치우는 일은 누가 하나요?" 학생 대답을 듣고 가족마다 다르다는 것을 받아들인다. "그 일 가운데 내가 도울 수 있는 일은 무엇일까요?" 시연 단추로 \'수저를 놓아요\'가 바구니에 들어가는 모습을 보여 준다. 뜨거운 냄비 옮기기처럼 위험한 일은 돕는 일이 아니라 다칠 수 있는 일이라는 것을 먼저 말해 둔다.',
        student: '어제 우리 집에서 누가 어떤 일을 했는지 떠올려 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'pick', basket: '혼자 할 수 있어요', cards: ['수저를 놓아요', '뜨거운 냄비를 옮겨요'], shuffle: false }, sequence: [{ pick: ['수저를 놓아요'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 혼자 안전하게 할 수 있는 일 고르기', minutes: 12, tool: 'mindmap',
            teacher: '"이 일을 2학년이 혼자 하면 다칠 수 있나요?" 칼·불·뜨거운 것·높은 곳이 들어간 카드에 손으로 X를 그리게 한다. 위험한 일을 \'어른과 함께\'로 나누는 까닭을 말하게 하고, 어른과 함께라도 칼과 불은 어른이 잡는다는 것을 짚는다.',
            task: '집안일 카드를 혼자 할 수 있는 일과 어른과 함께 해야 하는 일로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '혼자 안전하게 할 수 있는 일만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '혼자 할 수 있어요', cards: ['내 이불 개기', '칼로 과일 자르기', '빨래 개기', '가스레인지 켜기'] },
                levels: { challenge: { toolOptions: { cards: ['내 이불 개기', '칼로 과일 자르기', '빨래 개기', '가스레인지 켜기', '뜨거운 다리미 옮기기'] } } },
                target: { pick: ['내 이불 개기', '빨래 개기'] }, difficulty: 0.05 },
              { prompt: '다섯 가지 일을 나누어 보세요.', toolOptions: { topic: '집안일', slots: ['혼자 할 수 있어요', '어른과 함께 해요'], cards: ['신발 정리하기', '뜨거운 국 옮기기', '화분에 물 주기', '높은 선반 위 그릇 꺼내기', '장난감 정리하기'] },
                target: { sort: { '혼자 할 수 있어요': ['신발 정리하기', '화분에 물 주기', '장난감 정리하기'], '어른과 함께 해요': ['뜨거운 국 옮기기', '높은 선반 위 그릇 꺼내기'] } }, difficulty: 0.15 },
              { prompt: '가족을 돕는 일이 아닌 카드는 남기고 나누어 보세요.', toolOptions: { topic: '집안일', slots: ['혼자 할 수 있어요', '어른과 함께 해요'], cards: ['식탁 닦기', '다리미질하기', '게임 오래 하기', '분리수거 상자 옮기기'] },
                target: { sort: { '혼자 할 수 있어요': ['식탁 닦기', '분리수거 상자 옮기기'], '어른과 함께 해요': ['다리미질하기'] } }, difficulty: 0.2,
                predict: { q: '\'게임 오래 하기\' 카드는 어디에 놓을까요?', options: ['혼자 할 수 있어요', '어른과 함께 해요', '아무 데도 안 놓아요'], answer: 2 },
                conclude: '가족을 돕는 일이 아닌 것은 어느 가지에도 넣지 않아요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 하루 가운데 언제 도울까', minutes: 14, tool: 'timeline',
            teacher: '"이불은 언제 개는 게 알맞을까요? 수저는요?" 하루 띠를 손가락으로 왼쪽(아침)에서 오른쪽(밤)으로 따라가며 때마다 할 일을 짝 짓게 한다. 우리 집은 다르다고 말하는 학생에게는 "카드에 적힌 때를 잘 읽어요. 밥 먹기 \'전\'인가요, \'뒤\'인가요?" 하고 글자를 짚게 한다.',
            task: '하루 띠의 때마다 그때 하기 알맞은 돕는 일 카드를 놓아요.',
            levels: DAY_LV,
            items: [
              { prompt: '하루 띠의 때마다 알맞은 돕는 일을 놓아 보세요.', toolOptions: { mode: 'match', axis: ['아침', '밤'], slots: [{ id: 't1', label: '일어나서' }, { id: 't2', label: '저녁 먹기 전' }, { id: 't3', label: '저녁 먹은 뒤' }], cards: ['빈 그릇을 싱크대로 옮겨요', '내 이불을 개요', '수저를 놓아요'] },
                target: { match: { t1: '내 이불을 개요', t2: '수저를 놓아요', t3: '빈 그릇을 싱크대로 옮겨요' } }, difficulty: 0.1 },
              { prompt: '학교 다녀온 뒤부터 잘 때까지 알맞은 일을 놓아 보세요.', toolOptions: { mode: 'match', axis: ['오후', '밤'], slots: [{ id: 't1', label: '학교 다녀와서' }, { id: 't2', label: '빨래가 다 마르면' }, { id: 't3', label: '자기 전에' }], cards: ['마른 빨래를 개요', '내일 입을 옷을 꺼내 둬요', '실내화 주머니를 제자리에 걸어요'] },
                target: { match: { t1: '실내화 주머니를 제자리에 걸어요', t2: '마른 빨래를 개요', t3: '내일 입을 옷을 꺼내 둬요' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['마른 빨래를 개요', '내일 입을 옷을 꺼내 둬요', '실내화 주머니를 제자리에 걸어요', '가스레인지로 라면을 끓여요'] } } } },
              { prompt: '주말 아침에 동생의 이부자리 정리를 도와요. 하는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', axis: ['먼저', '나중'], cards: ['동생과 이불을 함께 개요', '동생을 깨워요', '갠 이불을 장롱에 넣어요'] },
                target: { order: ['동생을 깨워요', '동생과 이불을 함께 개요', '갠 이불을 장롱에 넣어요'] }, difficulty: 0.1,
                hints: ['어떤 일을 하려면 먼저 끝나 있어야 하는 일이 있어요. 카드마다 "이걸 하려면 무엇이 먼저 되어 있어야 할까?" 하고 물어요.', '동생이 누워 자는 채로 이불을 갤 수 있을까요? 개지 않은 이불을 장롱에 넣을 수 있을까요?', '깨우기 → 함께 개기 → 장롱에 넣기 차례예요.'],
                levels: { challenge: { prompt: '주말 아침에 동생의 이부자리 정리를 도와요. 하는 차례대로 놓고, 할 일이 아닌 카드는 남겨요.', toolOptions: { slots: 3, cards: ['동생과 이불을 함께 개요', '동생을 깨워요', '갠 이불을 장롱에 넣어요', '동생 이불 위에서 뛰어요'] } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"이번 주에 집에서 해 볼 일 하나와 그 일을 할 때를 정해 볼까요?" 활동지 계획표에 적게 한다. 가족마다 하는 일이 다르니 집에서 어른께 먼저 "제가 이 일을 해도 될까요?" 하고 여쭈어 보라고 한다. 해 본 뒤 가족이 한 말을 기억해 오면 12차시에 함께 나눈다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', basket: '혼자 할 수 있어요', cards: ['현관 신발 가지런히 놓기', '전기 콘센트 고치기', '강아지 물그릇 채우기'] }, prompt: '혼자 안전하게 할 수 있는 일만 바구니에 넣어 보세요.', target: { pick: ['현관 신발 가지런히 놓기', '강아지 물그릇 채우기'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '엄마가 뜨거운 냄비를 옮기려고 해요. 내가 도울 수 있는 일은?', options: ['냄비를 대신 들어요', '식탁 위에 냄비 받침을 놓아요', '냄비 뚜껑을 열어 봐요'], answer: 1, difficulty: 0.15, explain: '뜨거운 냄비는 어른이 옮기고, 나는 받침을 놓아 도울 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '가족 돕기 계획표',
      items: [
        { type: 'check', prompt: '혼자 안전하게 할 수 있는 일에 모두 ✓ 하세요.', options: ['이불 개기', '칼로 자르기', '수저 놓기', '가스레인지 켜기'] },
        { type: 'table', prompt: '이번 주 가족 돕기 계획을 쓰세요.', columns: ['언제', '무엇을', '해 보았나요(○)'], rows: 3 },
        { type: 'choice', prompt: '저녁 먹기 전에 하기 알맞은 일에 ○ 하세요.', options: ['수저 놓기', '이불 개기', '빈 그릇 옮기기'], answer: '수저 놓기' },
        { type: 'short', prompt: '가족을 도운 뒤 가족이 한 말을 써 오세요.' },
      ],
      easy: {
        note: '칼·불·뜨거운 것은 어른이 해요.',
        items: [
          { type: 'choice', prompt: '내가 혼자 할 수 있는 일에 ○ 하세요.', options: ['수저 놓기', '칼로 자르기'], answer: '수저 놓기' },
          { type: 'short', prompt: '이번 주에 집에서 해 볼 일을 쓰세요.' },
          { type: 'draw', prompt: '가족을 돕는 내 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고 틀리면 카드가 돌아와요.',
      base: '모두 놓은 뒤 확인을 눌러요. 계획표에 두 가지를 적어요.',
      challenge: '위험한 함정 카드가 섞여 있어요. 계획표에 세 가지를 적고 해 본 뒤 표시해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 요리처럼 큰일을 하고 싶어 한다 → 칼·불은 어른 몫이고, 어린이는 받침 놓기·수저 놓기처럼 곁에서 도울 수 있다고 말한다. ② 집안일을 엄마 일로만 말한다 → 가족 모두가 나눌 수 있는 일이라고 짚는다. ③ 집마다 형편이 달라 계획을 못 세운다 → 내 물건 정리처럼 어느 집이나 할 수 있는 일부터 고르게 한다.',
  }));

  lessons.push(L(11, {
    title: '동네 지도에서 이웃을 도울 곳 찾기',
    objective: '동네 이야기를 읽고 이웃에게 도움이 필요한 곳을 칸 지도에서 찾아 표시하고, 그곳에서 할 수 있는 일을 말할 수 있다.',
    illustration: ART('a simple paper map of a neighborhood with a bus stop, a playground, a library and an apartment building, small pins standing where people need help', '이웃을 도울 곳은 어디일까요?', [
      { motif: 'house', x: 110, y: 214, color: 'sky' }, { motif: 'tree', x: 250, y: 214 }, { motif: 'house', x: 380, y: 216, color: 'buttercup', s: 0.9 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 7,
        teacher: '"교실과 집에서 도울 일을 찾아봤어요. 우리 동네에서는 누구를 도울 수 있을까요?" 동네 칸 지도를 띄우고 버스 정류장·놀이터·도서관 자리를 함께 짚는다. 시연 단추로 핀이 놀이터에 꽂히는 모습을 보여 준다. "핀은 이야기 속에서 도움이 필요한 곳에 꽂아요." 지도를 어려워하는 학생에게는 칸에 적힌 이름을 먼저 소리 내어 읽게 한다.',
        student: '우리 동네에서 내가 자주 가는 곳 두 군데를 말해 봐요.',
        demo: { tool: 'map', options: { grid: [5, 3], places: [{ name: '놀이터', icon: 'park', at: [1, 1] }, { name: '도서관', icon: 'library', at: [3, 0] }] }, sequence: [{ place: '놀이터' }] },
      },
      {
        id: 'main', title: '전개', minutes: 25,
        activities: [
          {
            id: 'a1', title: '활동 1. 이야기 속 도울 곳에 핀 꽂기', minutes: 13, tool: 'map',
            teacher: '"이야기에서 누가 어떤 어려움을 겪고 있나요?" 문항을 함께 읽고 어려움을 겪는 사람과 곳을 찾게 한다. 장소 이름만 보고 꽂는 학생에게 "그곳에서 어떤 일이 있었지요?" 하고 되묻는다. 핀을 꽂은 뒤 그곳에서 할 수 있는 일을 짝에게 한 문장으로 말하게 한다.',
            task: '이야기를 읽고 이웃에게 도움이 필요한 곳에 핀을 꽂아요.',
            levels: {
              easy: { grid: [4, 3] },
              base: { grid: [5, 3] },
              challenge: { grid: [6, 4] },
            },
            items: [
              { prompt: '버스를 기다리는 사람들이 앉는 의자에 과자 봉지가 떨어져 있어요. 내가 주우러 갈 곳에 핀을 꽂아 보세요.', toolOptions: { places: [{ name: '버스 정류장', icon: 'bus', at: [0, 1] }, { name: '놀이터', icon: 'park', at: [2, 2] }, { name: '도서관', icon: 'library', at: [3, 0] }] }, target: { place: '버스 정류장' }, difficulty: 0.1 },
              { prompt: '책을 한 아름 안은 할머니가 문을 열지 못하고 계세요. 책을 빌리는 곳 앞이에요. 핀을 꽂아 보세요.', toolOptions: { places: [{ name: '시장', icon: 'market', at: [0, 0] }, { name: '도서관', icon: 'library', at: [2, 1] }, { name: '우체국', icon: 'post', at: [3, 2] }] }, target: { place: '도서관' }, difficulty: 0.15 },
              { prompt: '동생들이 미끄럼틀 아래에서 깨진 병 조각을 보았어요. 어른께 알려야 할 곳에 핀을 꽂아 보세요.', toolOptions: { places: [{ name: '놀이터', icon: 'park', at: [1, 0] }, { name: '병원', icon: 'hospital', at: [3, 1] }, { name: '아파트', icon: 'apartment', at: [0, 2] }] }, target: { place: '놀이터' }, difficulty: 0.15,
                conclude: '깨진 병 조각은 직접 줍지 않고 어른께 알리는 것이 이웃을 돕는 방법이에요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 이웃을 위한 마음과 행동', minutes: 12, tool: 'emotion',
            teacher: '"아랫집에 아기가 자고 있을 때 쿵쿵 뛰면 아랫집 사람은 어떤 마음일까요?" 눈에 보이지 않는 이웃을 떠올리게 한다. 조용히 걷기, 인사하기처럼 아주 작은 일도 이웃을 돕는 일이라는 것을 짚는다. 보기를 고른 뒤 결과를 소리 내어 읽게 한다.',
            task: '동네에서 생기는 일을 읽고 이웃의 마음과 내가 할 일을 골라요.',
            levels: SCALE_LV,
            items: [
              { prompt: '밤에 아랫집 아기가 자고 있어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '밤 9시, 아랫집에서 아기가 자고 있다고 엄마가 말씀하셨어요.', choices: [
                { id: 'jump', text: '거실에서 줄넘기를 해요', result: '아기가 깨서 울어요.', mood: '속상함', why: '아래층에는 쿵쿵 소리가 크게 들려요.' },
                { id: 'quiet', text: '발뒤꿈치를 들고 살살 걸어요', result: '아기가 푹 잠들어요.', mood: '편안함' }] }, target: { choice: 'quiet' }, difficulty: 0.05 },
              { prompt: '두 장면에서 이웃의 마음 카드를 놓아 보세요.', toolOptions: { cards: ['반가움', '걱정', '화남'], slots: [{ id: 's1', label: '엘리베이터에서 내가 먼저 인사했어요' }, { id: 's2', label: '키우는 강아지가 길을 잃었어요' }] },
                target: { match: { s1: '반가움', s2: '걱정' } }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['반가움', '걱정', '화남', '심심함'] } } } },
              { prompt: '경비원 아저씨께 "수고하셨습니다" 하고 인사했어요. 아저씨의 기쁜 마음 크기를 골라 보세요.', toolOptions: { mode: 'scale', situation: '새벽부터 눈을 쓸던 경비원 아저씨께 "수고하셨습니다" 하고 인사했더니 아저씨가 활짝 웃으셨어요.', feeling: '기쁨', after: '작은 인사도 이웃에게 큰 힘이 될 수 있어요.' }, target: { level: [3, 5] }, difficulty: 0.1,
                levels: { easy: { prompt: '경비원 아저씨께 인사했어요. 아저씨의 기쁜 마음을 세 칸에서 골라 보세요.', target: { level: [2, 3] } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"우리 동네에서 내가 가장 먼저 해 볼 일은 무엇인가요?" 활동지에 곳과 할 일을 적게 한다. 쓰레기를 주울 때는 장갑을 끼거나 집게를 쓰고, 깨진 것·날카로운 것은 만지지 않는다는 것을 다시 짚는다. 다음 시간부터는 도운 뒤에 상대가 어땠는지 돌아본다.',
        exitTicket: [
          { type: 'tool', tool: 'map', options: { grid: [5, 3], places: [{ name: '버스 정류장', icon: 'bus', at: [0, 0] }, { name: '도서관', icon: 'library', at: [2, 2] }, { name: '공원', icon: 'park', at: [4, 1] }] }, prompt: '공원 산책길에 잃어버린 강아지를 찾는다는 쪽지가 붙었어요. 강아지를 찾아볼 곳에 핀을 꽂아 보세요.', target: { place: '공원' }, difficulty: 0.1 },
          { type: 'choice', prompt: '아파트에서 이웃을 돕는 일로 알맞은 것은?', options: ['밤에 쿵쿵 뛰기', '먼저 인사하기', '엘리베이터 단추 다 누르기'], answer: 1, difficulty: 0.05, explain: '먼저 인사하는 것도 이웃을 기쁘게 하는 일이에요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '이웃을 도울 곳',
      items: [
        { type: 'figure', prompt: '동네 지도를 보고 쓰레기를 주울 수 있는 곳 하나에 ○ 하세요.', tool: 'map', options: { grid: [5, 3], places: [{ name: '버스 정류장', icon: 'bus', at: [0, 1] }, { name: '놀이터', icon: 'park', at: [2, 2] }, { name: '도서관', icon: 'library', at: [4, 0] }] }, figures: [{ caption: '우리 동네 지도' }], answer: '버스 정류장, 놀이터 등' },
        { type: 'choice', prompt: '놀이터에서 깨진 병 조각을 보면 어떻게 할까요?', options: ['어른께 알려요', '손으로 주워요', '발로 차요'], answer: '어른께 알려요' },
        { type: 'table', prompt: '우리 동네에서 이웃을 도울 곳과 할 일을 쓰세요.', columns: ['곳', '내가 할 일'], rows: 2 },
        { type: 'short', prompt: '이웃에게 해 보고 싶은 인사말을 쓰세요.' },
      ],
      easy: {
        note: '먼저 인사하기, 조용히 걷기도 이웃을 돕는 일이에요.',
        items: [
          { type: 'choice', prompt: '밤에 아랫집을 돕는 방법에 ○ 하세요.', options: ['살살 걷기', '쿵쿵 뛰기'], answer: '살살 걷기' },
          { type: 'short', prompt: '우리 동네에서 도울 곳을 쓰세요.' },
          { type: 'draw', prompt: '이웃을 돕는 내 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '칸 지도가 작고 곳이 세 군데예요. 마음 크기는 세 칸이에요.',
      base: '이야기에서 어려움을 찾아 핀을 꽂고 할 일을 말해요.',
      challenge: '칸 지도가 커지고 마음 카드가 더 섞여 있어요. 할 일을 두 가지 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 도울 곳을 장소 이름으로만 찾는다 → 이야기에서 어려움을 겪는 사람을 먼저 찾게 한다. ② 깨진 것·날카로운 것을 직접 치우려 한다 → 어른께 알리는 것이 돕는 일이라고 분명히 말한다. ③ 눈에 보이지 않는 이웃(아랫집)을 떠올리지 못한다 → 교실 바닥을 쿵 굴러 소리가 아래로 간다는 것을 느끼게 한다.',
  }));

  // ───────────────────────── 12~16차시: 도운 뒤 돌아보기와 우리 반이 함께 할 일(성찰과 습관화) ─────────────────────────

  lessons.push(L(12, {
    title: '도운 뒤 상대의 표정과 말 살피기',
    objective: '도운 뒤 상대가 보인 표정·말·몸짓을 보고 상대의 마음을 짐작해 말할 수 있다.',
    illustration: ART('two children after helping, one smiling and nodding, another waving a hand to say no thanks, with paper speech bubbles above them', '도운 뒤 친구는 어땠나요?', [
      { motif: 'flower', x: 110, y: 228, color: 'mint' }, { motif: 'house', x: 380, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"집에서 가족을 도와 본 사람 있나요? 도운 뒤 가족은 어떤 표정이었나요?" 10차시 계획을 해 본 학생 두세 명의 이야기를 듣는다. 시연 단추로 \'웃으며 고개를 끄덕여요\'에 \'고마워해요\'가 이어지는 모습을 보여 준다. "상대의 얼굴과 몸짓을 보면 내 도움이 어땠는지 알 수 있어요."',
        student: '가족이나 친구를 도운 뒤 그 사람이 한 말이나 표정을 떠올려 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '어떤 마음일까?', slots: [{ id: 's1', label: '웃으며 고개를 끄덕여요' }], cards: ['고마워해요', '싫어해요'], shuffle: false }, sequence: [{ match: { s1: '고마워해요' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 표정과 몸짓으로 마음 읽기', minutes: 13, tool: 'mindmap',
            teacher: '"손을 저으며 \'혼자 할게\' 하는 친구는 어떤 마음일까요?" 선생님이 표정과 몸짓을 직접 해 보이고 학생들이 마음을 맞히게 한다. 싫다는 몸짓을 보고도 계속 도우려는 학생에게 "친구가 원하지 않으면 어떻게 하면 좋을까요?" 하고 묻는다. 상대의 반응을 살피는 것도 돕는 일의 한 부분이라는 것을 짚는다.',
            task: '도운 뒤 상대가 보인 표정·몸짓 카드에 알맞은 마음 카드를 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '표정·몸짓과 마음을 이어 보세요.', toolOptions: { mode: 'match', topic: '어떤 마음일까?', slots: [{ id: 's1', label: '활짝 웃으며 "고마워" 해요' }, { id: 's2', label: '손을 저으며 "혼자 할게" 해요' }], cards: ['고마워해요', '혼자 하고 싶어 해요'] },
                target: { match: { s1: '고마워해요', s2: '혼자 하고 싶어 해요' } }, difficulty: 0.05 },
              { prompt: '세 가지 반응과 마음을 이어 보세요.', toolOptions: { mode: 'match', topic: '어떤 마음일까?', slots: [{ id: 's1', label: '고개를 숙이고 작은 소리로 "고마워"' }, { id: 's2', label: '얼굴을 찡그리고 물건을 다시 가져가요' }, { id: 's3', label: '눈물을 닦으며 손을 꼭 잡아요' }], cards: ['부끄럽지만 고마워요', '내 방법이 마음에 안 들어요', '많이 위로가 되었어요'] },
                target: { match: { s1: '부끄럽지만 고마워요', s2: '내 방법이 마음에 안 들어요', s3: '많이 위로가 되었어요' } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['부끄럽지만 고마워요', '내 방법이 마음에 안 들어요', '많이 위로가 되었어요', '배가 고파요'] } } } },
              { prompt: '상대가 원하지 않는다는 반응만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '원하지 않아요', cards: ['"괜찮아, 내가 할게" 해요', '"고마워" 하고 웃어요', '몸을 돌려 피해요', '"같이 하자" 해요'] },
                target: { pick: ['"괜찮아, 내가 할게" 해요', '몸을 돌려 피해요'] }, difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 마음이 바뀐 차례 알기', minutes: 13, tool: 'emotion',
            teacher: '"도움을 받기 전과 받은 뒤, 친구의 마음은 어떻게 달라졌을까요?" 이야기 속 \'처음에는\', \'그런데\', \'그래서\' 같은 말을 짚으며 차례를 찾게 한다. 내 마음만 말하는 학생에게 "도움을 받은 친구의 마음은요?" 하고 상대 쪽으로 돌려 묻는다.',
            task: '이야기를 읽고 도움을 받은 사람의 마음이 바뀐 차례대로 마음 카드를 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '준호는 숙제 공책을 집에 두고 와 걱정했는데, 짝이 같이 보자고 해서 고마웠어요. 마음이 바뀐 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['고마움', '걱정'], slots: ['도움 받기 전', '도움 받은 뒤'] },
                target: { order: ['걱정', '고마움'] }, difficulty: 0.05 },
              { prompt: '서아의 마음 카드를 장면에 놓아 보세요.', toolOptions: { cards: ['속상함', '놀람', '기쁨'], slots: [{ id: 's1', label: '그린 그림이 바람에 날아갔어요' }, { id: 's2', label: '하준이가 갑자기 달려 나갔어요' }, { id: 's3', label: '하준이가 그림을 잡아다 주었어요' }] },
                target: { match: { s1: '속상함', s2: '놀람', s3: '기쁨' } }, difficulty: 0.15 },
              { prompt: '할아버지는 길을 몰라 걱정하시다가, 지우가 길을 알려 드리자 편안해지셨고, 헤어질 때 고마워하셨어요. 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['편안함', '고마움', '걱정'] },
                target: { order: ['걱정', '편안함', '고마움'] }, difficulty: 0.2,
                levels: { challenge: { prompt: '할아버지는 길을 몰라 걱정하시다가, 지우가 길을 알려 드리자 편안해지셨고, 헤어질 때 고마워하셨어요. 차례대로 놓고, 이야기에 없는 마음은 남겨요.', toolOptions: { slots: 3, cards: ['편안함', '고마움', '걱정', '화남'] } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"친구가 \'혼자 할게\' 하고 손을 저으면 내 도움은 실패한 걸까요?" 학생 생각을 듣고 결론은 다음 시간에 이어 이야기한다고 한다. 출구 질문 2번은 오늘 본 장면과 다른 장면이니 반응을 잘 읽으라고만 말한다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'order', cards: ['기쁨', '속상함'], slots: ['도움 받기 전', '도움 받은 뒤'] }, prompt: '동생은 블록 탑이 무너져 속상했는데, 형이 같이 쌓아 줘서 기뻤어요. 마음이 바뀐 차례대로 놓아 보세요.', target: { order: ['속상함', '기쁨'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '연필을 빌려주려는데 친구가 "나 연필 있어" 하고 웃어요. 친구의 마음은?', options: ['지금은 필요 없어요', '나를 싫어해요', '화가 났어요'], answer: 0, difficulty: 0.15, explain: '웃으며 있다고 말한 것은 지금은 필요 없다는 뜻이에요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '도운 뒤 상대의 마음',
      items: [
        { type: 'figure', wide: true, prompt: '반응과 마음을 선으로 이으세요.', tool: 'mindmap', figures: [{ options: { mode: 'match', topic: '어떤 마음일까?', slots: [{ id: 's1', label: '웃으며 "고마워"' }, { id: 's2', label: '손을 저으며 "혼자 할게"' }], cards: ['혼자 하고 싶어요', '고마워요'], shuffle: false }, caption: '' }], answer: '웃으며-고마워요, 손을 저으며-혼자 하고 싶어요' },
        { type: 'choice', prompt: '친구가 "혼자 할게" 하면 어떻게 할까요?', options: ['기다려 줘요', '억지로 해 줘요'], answer: '기다려 줘요' },
        { type: 'table', prompt: '내가 도운 뒤 상대가 보인 반응을 쓰세요.', columns: ['누구를 도왔나요', '상대의 표정·말', '상대의 마음'], rows: 2 },
        { type: 'short', prompt: '도움을 받은 사람의 마음이 어떻게 바뀌었는지 쓰세요.' },
      ],
      easy: {
        note: '얼굴, 말, 몸짓 세 가지를 살펴요.',
        items: [
          { type: 'choice', prompt: '활짝 웃는 친구의 마음에 ○ 하세요.', options: ['고마워요', '싫어요'], answer: '고마워요' },
          { type: 'choice', prompt: '손을 젓는 친구에게 할 일에 ○ 하세요.', options: ['기다려요', '억지로 해 줘요'], answer: '기다려요' },
          { type: 'draw', prompt: '도움을 받은 친구의 표정을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고 틀리면 카드가 돌아와요.',
      base: '모두 놓은 뒤 확인을 눌러요. 표정과 말 가운데 무엇을 보고 알았는지 말해요.',
      challenge: '반응과 마음이 섞인 카드가 늘어요. 마음이 세 번 바뀐 차례를 놓아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 상대가 거절하면 \'나를 싫어한다\'고 여긴다 → 지금 필요 없다는 뜻일 수 있다는 것을 짚는다. ② 내 마음과 상대 마음을 섞는다 → "누구의 마음인가요?"를 먼저 묻는다. ③ 표정만 보고 말은 듣지 않는다 → 얼굴·말·몸짓 세 가지를 손가락으로 꼽게 한다.',
  }));

  lessons.push(L(13, {
    title: '아무도 몰라도 도움에 뜻이 있을까 생각하기',
    objective: '아무도 알아주지 않은 도움이 누구에게 어떤 도움이 되었는지 찾고, 칭찬과 상관없이 도움에 뜻이 있음을 말할 수 있다.',
    illustration: ART('an empty school hallway after class where a child quietly picks up a fallen paper towel, while a little first grader walks by safely later', '아무도 몰라도 괜찮아요', [
      { motif: 'house', x: 120, y: 214, color: 'lavender' }, { motif: 'leaf', x: 260, y: 228 }, { motif: 'tree', x: 390, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"지난 시간 끝에 물었던 것 기억나요? 친구가 \'혼자 할게\' 하면 내 도움은 실패한 걸까요?" 두세 명의 생각을 듣는다. 이어 이야기를 들려준다. "하준이는 아무도 없는 복도에서 떨어진 물 묻은 휴지를 주웠어요. 아무도 보지 못했고, 칭찬도 못 받았어요." 시연 단추로 하준이가 휴지를 줍는 보기를 고르고 결과를 함께 읽는다. "하준이가 한 일은 뜻이 있었을까요?"',
        student: '아무도 모르게 누군가를 도운 적이 있는지 떠올려 봐요.',
        demo: { tool: 'emotion', options: { mode: 'branch', who: '하준', situation: '아무도 없는 복도에 물 묻은 휴지가 떨어져 있어요.', choices: [{ id: 'pick', text: '휴지를 주워 버려요', result: '뒤에 온 1학년 동생이 미끄러지지 않았어요.', mood: '편안함' }, { id: 'pass', text: '아무도 안 보니 그냥 가요', result: '뒤에 온 동생이 휴지를 밟고 미끄러졌어요.', mood: '속상함' }] }, sequence: [{ choice: 'pick' }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 아무도 안 볼 때 어떻게 할까', minutes: 13, tool: 'emotion',
            teacher: '"아무도 안 보니까 그냥 지나가도 될까요?" 보기를 고른 뒤 결과를 소리 내어 읽고 "그 일로 누가 편해졌나요?" 하고 묻는다. 칭찬을 받지 못하면 소용없다고 말하는 학생에게 도움을 받은 사람이 누구인지 결과 칸에서 찾게 한다.',
            task: '아무도 보지 않는 상황을 읽고, 어떻게 할지 골라 결과를 봐요.',
            levels: SCALE_LV,
            items: [
              { prompt: '쉬는 시간이 끝났는데 교실 바닥에 크레파스가 굴러다녀요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '친구들이 모두 운동장에 나갔어요. 교실 바닥에 크레파스가 여기저기 굴러다녀요.', choices: [
                { id: 'tidy', text: '크레파스를 주워 통에 넣어요', result: '돌아온 친구들이 걸려 넘어지지 않았어요.', mood: '편안함' },
                { id: 'leave', text: '내 것이 아니니 그냥 나가요', result: '뛰어 들어온 친구가 크레파스를 밟고 넘어졌어요.', mood: '속상함', why: '내 것이 아니어도 치우면 누가 편해질까요?' }] }, target: { choice: 'tidy' }, difficulty: 0.05 },
              { prompt: '화장실 수도꼭지에서 물이 졸졸 새요. 아무도 몰라요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '화장실에 혼자 있는데, 누가 잠그지 않은 수도꼭지에서 물이 졸졸 흘러요.', choices: [
                { id: 'off', text: '수도꼭지를 꼭 잠가요', result: '물이 아껴지고 바닥도 젖지 않았어요.', mood: '뿌듯함' },
                { id: 'later', text: '누가 보면 잠그려고 기다려요', result: '그사이 물이 바닥에 흘러넘쳤어요.', mood: '걱정', why: '누가 볼 때까지 기다리는 동안 물은 어떻게 될까요?' }] }, target: { choice: 'off' }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { choices: [
                  { id: 'later', text: '누가 보면 잠그려고 기다려요', result: '그사이 물이 바닥에 흘러넘쳤어요.', mood: '걱정', why: '누가 볼 때까지 기다리는 동안 물은 어떻게 될까요?' },
                  { id: 'brag', text: '잠그고 반 친구들에게 자랑부터 해요', result: '물은 잠갔지만, 바닥에 흘린 물은 그대로 두었어요.', mood: '걱정', why: '자랑보다 먼저 할 일이 남아 있지 않나요?' },
                  { id: 'off', text: '수도꼭지를 꼭 잠가요', result: '물이 아껴지고 바닥도 젖지 않았어요.', mood: '뿌듯함' }] } } } },
              { prompt: '아무도 모르게 도운 뒤 내 마음은 어땠을지, 내 생각대로 크기를 골라 보세요.', toolOptions: { mode: 'scale', situation: '아침 일찍 교실에 와서, 아무도 모르게 시든 화분에 물을 주었어요.', feeling: '뿌듯함', after: '아무도 몰라도, 화분과 교실 친구들은 도움을 받았어요.' }, target: { level: 'any' }, difficulty: 0.05 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 칭찬과 상관없이 도움이 된 일', minutes: 13, tool: 'mindmap',
            teacher: '"칭찬을 받았는지가 아니라, 그 일로 누가 편해졌는지 보세요." 카드마다 \'누가 편해졌나요?\'를 묻는다. 칭찬받으려고 친구 물건을 숨겼다가 찾아 준 카드에서 "그건 도운 걸까요?" 하고 묻고, 도움은 상대를 위한 일이어야 한다는 것을 짚는다.',
            task: '카드를 읽고 다른 사람에게 도움이 된 일과 도움이 되지 않은 일로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '네 가지 일을 나누어 보세요.', toolOptions: { topic: '누가 편해졌을까?', slots: ['도움이 되었어요', '도움이 되지 않았어요'], cards: ['칭찬은 못 받았지만 길이 깨끗해졌어요', '칭찬받으려고 친구 필통을 숨겼다 찾아 줬어요', '아무도 몰랐지만 동생이 넘어지지 않았어요', '치우는 척하며 쓰레기를 책상 밑에 숨겼어요'] },
                target: { sort: { '도움이 되었어요': ['칭찬은 못 받았지만 길이 깨끗해졌어요', '아무도 몰랐지만 동생이 넘어지지 않았어요'], '도움이 되지 않았어요': ['칭찬받으려고 친구 필통을 숨겼다 찾아 줬어요', '치우는 척하며 쓰레기를 책상 밑에 숨겼어요'] } }, difficulty: 0.2 },
              { prompt: '아무도 몰랐지만 누군가에게 도움이 된 일만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '몰래 한 도움', cards: ['밤사이 쌓인 눈을 몰래 쓸었어요', '친구 신발장을 몰래 어질렀어요', '잃어버린 장갑을 주워 분실함에 넣었어요', '몰래 친구 간식을 먹었어요'] },
                target: { pick: ['밤사이 쌓인 눈을 몰래 쓸었어요', '잃어버린 장갑을 주워 분실함에 넣었어요'] }, difficulty: 0.1 },
              { prompt: '몰래 한 도움과 도움을 받은 사람을 이어 보세요.', toolOptions: { mode: 'match', topic: '누가 도움을 받았을까?', slots: [{ id: 's1', label: '분실함에 장갑을 넣었어요' }, { id: 's2', label: '현관의 눈을 쓸었어요' }], cards: ['장갑을 잃어버린 친구', '아침에 걸어오는 사람들'] },
                target: { match: { s1: '장갑을 잃어버린 친구', s2: '아침에 걸어오는 사람들' } }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['장갑을 잃어버린 친구', '아침에 걸어오는 사람들', '눈사람을 만든 친구'] } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 이야기 속 하준이에게 해 주고 싶은 말이 있나요?" 두세 명의 말을 듣는다. 출구 질문을 마친 뒤 결과를 보고, 2번에서 \'알아줄 때만 뜻이 있다\'를 고른 학생과는 도움을 받은 사람을 다시 함께 찾는다. 다음 시간에는 우리 반이 함께 할 수 있는 일을 정한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '누가 도움을 받았을까?', slots: [{ id: 'e1', label: '아무도 모르게 책꽂이 책을 바로 꽂았어요' }], cards: ['책을 찾는 친구들', '책꽂이를 만든 회사'] }, prompt: '몰래 한 도움으로 누가 편해졌을지 이어 보세요.', target: { match: { e1: '책을 찾는 친구들' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '아무도 모르게 한 도움에 대해 알맞은 말은?', options: ['남이 알아줄 때만 뜻이 있어요', '도움을 받은 사람이 있으면 뜻이 있어요', '칭찬을 못 받으면 하지 말아요'], answer: 1, difficulty: 0.15, explain: '칭찬을 받지 않아도 누군가 편해졌다면 뜻이 있는 도움이에요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '아무도 몰라도',
      items: [
        { type: 'choice', prompt: '도움이 된 일에 ○ 하세요.', options: ['치우는 척하며 쓰레기를 책상 밑에 숨겼어요', '아무도 몰랐지만 바닥의 휴지를 주웠어요', '칭찬받으려고 물건을 숨겼어요'], answer: '아무도 몰랐지만 바닥의 휴지를 주웠어요' },
        { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '칭찬을 받지 않아도 누군가 ___졌다면 뜻이 있는 도움이에요.', answer: '편해' },
        { type: 'table', prompt: '아무도 모르게 할 수 있는 도움과 도움을 받을 사람을 쓰세요.', columns: ['몰래 할 도움', '도움을 받을 사람'], rows: 2 },
        { type: 'short', prompt: '이야기 속 하준이에게 해 주고 싶은 말을 쓰세요.' },
      ],
      easy: {
        note: '"그 일로 누가 편해졌나요?"를 물어요.',
        items: [
          { type: 'choice', prompt: '아무도 안 볼 때 물이 새면?', options: ['수도꼭지를 잠가요', '그냥 가요'], answer: '수도꼭지를 잠가요' },
          { type: 'short', prompt: '아무도 모르게 할 수 있는 도움을 쓰세요.' },
          { type: 'draw', prompt: '몰래 돕는 내 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '보기 결과를 소리 내어 읽고 골라요. 맞는 칸에 초록 테두리가 생겨요.',
      base: '모두 나눈 뒤 확인을 눌러요. 누가 편해졌는지 말해요.',
      challenge: '그럴듯한 보기와 함정 카드가 더 섞여 있어요. 몰래 할 도움 계획을 두 가지 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 돕는 일은 남이 알아줄 때만 뜻이 있다고 여긴다(이 차시의 오개념) → 도움을 받은 사람을 결과 칸에서 찾게 한다. ② 선생님이 볼 때만 하는 정리도 도움이라고 한다 → 선생님이 없을 때는 어떻게 되는지 묻는다. ③ 마음 크기 문항에 정답이 있다고 여긴다 → 내 마음대로 골라도 된다고 미리 말한다.',
  }));

  lessons.push(L(14, {
    title: '우리 반이 함께 할 일 제안하기',
    objective: '우리 반 모두가 함께 할 수 있는 돕는 일을 골라, 할 일과 까닭을 넣은 제안 문장으로 말할 수 있다.',
    illustration: ART('a class meeting where small groups of children hold up paper suggestion cards like watering school plants and reading picture books to first graders', '우리 반이 함께 해요', [
      { motif: 'flower', x: 110, y: 228, color: 'buttercup' }, { motif: 'house', x: 250, y: 214, color: 'mint' }, { motif: 'tree', x: 390, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"지금까지는 혼자 도울 일을 찾았어요. 우리 반 스물몇 명이 함께 하면 무엇을 할 수 있을까요?" 학생 생각을 칠판에 모은다. 시연 단추로 \'우리 반이 함께 ___ 하면 좋겠어요\' 빈칸에 카드가 들어가는 모습을 보여 준다. "제안할 때는 무엇을 할지와 왜 하면 좋은지를 함께 말해요."',
        student: '우리 반이 다 같이 하면 좋을 일을 하나 떠올려 봐요.',
        demo: { tool: 'story', options: { mode: 'fill', cards: ['화분에 물 주기를', '복도에서 뛰기를'], slots: [{ id: 'b1', who: '민지', motif: 'flower', label: '우리 반이 함께 ___ 하면 좋겠어요.' }], shuffle: false }, sequence: [{ fill: { b1: '화분에 물 주기를' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 우리 반이 할 수 있는 일 고르기', minutes: 11, tool: 'mindmap',
            teacher: '"이 일은 우리 반이 이번 주 안에, 우리 힘으로 할 수 있나요?" 돈이 많이 들거나 어른의 공사가 필요한 일은 \'하기 어려워요\'로 나누게 한다. 큰일을 고른 학생의 마음은 칭찬하고, 그 일 가운데 우리가 할 수 있는 작은 몫을 찾게 한다(운동장 공사 대신 운동장 쓰레기 줍기).',
            task: '제안 카드를 우리 반이 함께 할 수 있는 일과 하기 어려운 일로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '네 가지 제안을 나누어 보세요.', toolOptions: { topic: '우리 반 제안', slots: ['우리 반이 할 수 있어요', '우리 힘으로 하기 어려워요'], cards: ['복도 화분에 물 주기', '운동장에 수영장 만들기', '1학년에게 그림책 읽어 주기', '학교 앞 도로 넓히기'] },
                target: { sort: { '우리 반이 할 수 있어요': ['복도 화분에 물 주기', '1학년에게 그림책 읽어 주기'], '우리 힘으로 하기 어려워요': ['운동장에 수영장 만들기', '학교 앞 도로 넓히기'] } }, difficulty: 0.1 },
              { prompt: '다섯 가지 제안을 나누어 보세요.', toolOptions: { topic: '우리 반 제안', slots: ['우리 반이 할 수 있어요', '우리 힘으로 하기 어려워요'], cards: ['교실 재활용 나누어 버리기', '급식실 새로 짓기', '경비원께 감사 편지 쓰기', '운동장 쓰레기 줍기', '학교 버스 사기'] },
                target: { sort: { '우리 반이 할 수 있어요': ['교실 재활용 나누어 버리기', '경비원께 감사 편지 쓰기', '운동장 쓰레기 줍기'], '우리 힘으로 하기 어려워요': ['급식실 새로 짓기', '학교 버스 사기'] } }, difficulty: 0.15 },
              { prompt: '다른 사람을 돕는 제안만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '돕는 제안', cards: ['아픈 친구에게 응원 쪽지 쓰기', '우리 반만 놀이터 차지하기', '도서실 책 정리 돕기', '쉬는 시간 늘려 달라고 떼쓰기'] },
                target: { pick: ['아픈 친구에게 응원 쪽지 쓰기', '도서실 책 정리 돕기'] }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['아픈 친구에게 응원 쪽지 쓰기', '우리 반만 놀이터 차지하기', '도서실 책 정리 돕기', '쉬는 시간 늘려 달라고 떼쓰기', '교문 앞 낙엽 쓸기'] }, prompt: '다른 사람을 돕는 제안만 모두 바구니에 넣어 보세요. 세 가지예요.', target: { pick: ['아픈 친구에게 응원 쪽지 쓰기', '도서실 책 정리 돕기', '교문 앞 낙엽 쓸기'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 할 일과 까닭을 넣어 제안하기', minutes: 16, tool: 'story', pair: true,
            teacher: '"\'화분에 물 주자\'만 말하면 친구들이 왜 해야 하는지 알까요?" 제안 문장의 두 빈칸(할 일, 까닭)을 손가락으로 짚게 한다. 문장을 다 채운 뒤 모둠(4명)마다 제안 하나를 정하고, 여섯 모둠이 1분씩 앞에 나와 제안 문장을 읽는다. 듣는 모둠은 할 일과 까닭을 모두 들었는지 손가락 두 개로 알려 준다.',
            task: '제안 문장의 빈칸에 할 일과 까닭을 넣고, 모둠 제안을 정해 발표해요.',
            levels: CARD_LV,
            items: [
              { prompt: '제안 문장의 빈칸 두 곳에 알맞은 카드를 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['그림책을 읽어 주면', '1학년 동생들이 글을 더 좋아하게', '놀이터를 차지하면', '우리만 신나게'], slots: [{ id: 'b1', who: '서아', motif: 'flower', label: '우리 반이 1학년에게 ___ 좋겠어요.' }, { id: 'b2', who: '서아', motif: 'star', label: '왜냐하면 ___ 될 것 같아서예요.' }] },
                target: { fill: { b1: '그림책을 읽어 주면', b2: '1학년 동생들이 글을 더 좋아하게' } }, difficulty: 0.15 },
              { prompt: '제안과 까닭을 알맞게 이어 보세요.', toolOptions: { mode: 'match', slots: [{ id: 's1', label: '교문 앞 낙엽을 쓸어요' }, { id: 's2', label: '경비원께 감사 편지를 써요' }], cards: ['아침에 미끄러지지 않게', '새벽부터 애쓰시는 마음에 보답하려고'] },
                target: { match: { s1: '아침에 미끄러지지 않게', s2: '새벽부터 애쓰시는 마음에 보답하려고' } }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['아침에 미끄러지지 않게', '새벽부터 애쓰시는 마음에 보답하려고', '선물을 받고 싶어서'] } } } },
              { prompt: '모둠 제안 하나를 정하고, 할 일과 까닭을 넣어 1분 동안 발표했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"여섯 모둠의 제안을 칠판에 붙였어요. 다음 시간에 이 가운데 하나를 투표로 정해요." 비슷한 제안은 함께 묶는다. 투표 전에 제안마다 \'우리 힘으로 할 수 있는지\'를 한 번 더 생각해 오게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { mode: 'fill', cards: ['응원 쪽지를 쓰면', '친구가 힘을 낼 수 있게', '숙제를 안 하면'], slots: [{ id: 'e1', who: '준호', motif: 'flower', label: '아픈 친구에게 ___ 좋겠어요.' }, { id: 'e2', who: '준호', motif: 'star', label: '왜냐하면 ___ 하고 싶어서예요.' }] }, prompt: '제안 문장의 빈칸에 알맞은 카드를 넣어 보세요.', target: { fill: { e1: '응원 쪽지를 쓰면', e2: '친구가 힘을 낼 수 있게' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '우리 반이 이번 주에 함께 할 수 있는 일은?', options: ['학교 앞에 다리 놓기', '교실 재활용 나누어 버리기', '새 체육관 짓기'], answer: 1, difficulty: 0.05, explain: '재활용 나누기는 우리 반 힘으로 이번 주에 할 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '우리 반 제안서',
      items: [
        { type: 'check', prompt: '우리 반이 함께 할 수 있는 일에 모두 ✓ 하세요.', options: ['화분에 물 주기', '수영장 만들기', '감사 편지 쓰기', '도로 넓히기'] },
        { type: 'blank', prompt: '제안 문장을 완성하세요.', text: '우리 반이 함께 ___ 하면 좋겠어요. 왜냐하면 ___ 때문이에요.', answer: '(할 일), (까닭)' },
        { type: 'table', prompt: '모둠 친구들의 제안을 듣고 쓰세요.', columns: ['모둠', '할 일', '까닭'], rows: 3 },
        { type: 'short', prompt: '가장 해 보고 싶은 제안과 그 까닭을 쓰세요.' },
      ],
      easy: {
        note: '할 일 + 까닭, 두 가지를 말해요.',
        items: [
          { type: 'choice', prompt: '우리 반이 할 수 있는 일에 ○ 하세요.', options: ['쓰레기 줍기', '버스 사기'], answer: '쓰레기 줍기' },
          { type: 'short', prompt: '우리 반이 함께 하고 싶은 일을 쓰세요.' },
          { type: 'draw', prompt: '우리 반이 함께 하는 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고 틀리면 카드가 돌아와요.',
      base: '모두 놓은 뒤 확인을 눌러요. 모둠 제안을 할 일과 까닭으로 말해요.',
      challenge: '함정 카드가 더 섞여 있어요. 제안에 언제 할지까지 넣어 발표해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 우리 힘으로 하기 어려운 큰일을 제안한다 → 그 일의 작은 몫을 찾게 한다. ② 까닭 없이 할 일만 말한다 → 듣는 모둠이 손가락 두 개로 확인하게 한다. ③ 우리 반에만 좋은 제안(놀이터 차지)을 한다 → "다른 반 친구들은 어떨까요?" 하고 묻는다. 모둠 발표는 1분씩, 여섯 모둠 6분 안에 끝낸다.',
  }));

  lessons.push(L(15, {
    title: '함께 할 일을 투표하고 그림그래프로 보기',
    objective: '우리 반 투표 결과를 그림그래프로 나타내고, 가장 많은 표를 받은 일을 읽어 함께 할 일을 정할 수 있다.',
    illustration: ART('children dropping paper voting slips into a box, and a big paper picture graph on the board with round stickers in rows', '우리 반 투표 결과', [
      { motif: 'star', x: 120, y: 96, s: 0.6 }, { motif: 'house', x: 250, y: 214, color: 'sky' }, { motif: 'flower', x: 390, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 7,
        teacher: '"지난 시간 여섯 모둠의 제안을 비슷한 것끼리 묶었더니 네 가지가 되었어요. 한 사람이 한 표씩, 가장 하고 싶은 일에 손을 들어요." 칠판의 네 제안에 손을 들게 하고 함께 센 수를 칠판 표에 적는다. 시연 단추로 그림그래프에서 동그라미 하나가 한 사람이라는 것을 보여 준다. "가장 많은 표를 받은 일을 우리 반이 한 주 동안 해 봐요."',
        student: '네 가지 제안 가운데 내가 고를 일을 정하고, 손을 들어 투표해요.',
        demo: { tool: 'chart', options: { type: 'picture', mode: 'read', data: [['화분 물 주기', 3], ['책 읽어 주기', 5]], unit: '명', icons: [{ value: 1, name: '1명' }], question: '더 많이 고른 일은?', choices: ['화분 물 주기', '책 읽어 주기'] }, sequence: [{ pick: 1 }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 투표 결과로 그림그래프 만들기', minutes: 12, tool: 'chart',
            teacher: '"표에서 \'화분 물 주기\'는 몇 명이었지요? 동그라미를 그만큼 놓아요." 한 줄을 다 놓을 때마다 소리 내어 세게 한다. 동그라미를 칸 밖에 흩어 놓거나 크기를 다르게 놓는 학생에게 "줄을 맞춰 놓아야 어느 쪽이 많은지 한눈에 보여요" 하고 말한다.',
            task: '투표 결과 표를 보고 동그라미를 놓아 그림그래프를 완성해요.',
            levels: { easy: { showValues: true }, base: {}, challenge: {} },
            items: [
              { prompt: '투표 표를 보고 그림그래프를 완성해 보세요.', toolOptions: { type: 'picture', title: '우리 반이 함께 할 일', data: [['화분 물 주기', 4], ['책 읽어 주기', 7], ['낙엽 쓸기', 3]], unit: '명', xLabel: '할 일', yLabel: '고른 사람 수', icons: [{ value: 1, name: '1명' }], given: [0] }, target: { build: true }, difficulty: 0.1,
                levels: { challenge: { prompt: '투표 표를 보고 그림그래프의 세 줄을 모두 그려 보세요.', toolOptions: { given: [] } } } },
              { prompt: '네 가지 할 일의 투표 표를 보고 그림그래프를 완성해 보세요.', toolOptions: { type: 'picture', title: '우리 반이 함께 할 일', data: [['화분 물 주기', 5], ['책 읽어 주기', 8], ['낙엽 쓸기', 6], ['감사 편지', 4]], unit: '명', xLabel: '할 일', yLabel: '고른 사람 수', icons: [{ value: 1, name: '1명' }] }, target: { build: true }, difficulty: 0.15,
                levels: { easy: { toolOptions: { given: [0, 1] } } } },
              { prompt: '옆 반 투표 표를 보고 그림그래프를 완성해 보세요.', toolOptions: { type: 'picture', title: '옆 반이 함께 할 일', data: [['재활용 나누기', 9], ['응원 쪽지', 6], ['책 정리', 7]], unit: '명', xLabel: '할 일', yLabel: '고른 사람 수', icons: [{ value: 1, name: '1명' }] }, target: { build: true }, difficulty: 0.2 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 그림그래프 읽고 함께 할 일 정하기', minutes: 14, tool: 'chart',
            teacher: '"가장 많은 사람이 고른 일은 무엇인가요? 몇 명이 더 많나요?" 동그라미를 손가락으로 하나씩 짚으며 세게 한다. 표를 받지 못한 일을 고른 친구의 마음도 떠올리게 하고, "두 번째로 많은 일은 다음 주에 해 볼까요?" 하고 함께 정한다.',
            task: '그림그래프를 읽고 물음에 답한 뒤, 우리 반이 함께 할 일을 정해요.',
            levels: { easy: { showValues: true }, base: {}, challenge: {} },
            items: [
              { prompt: '그림그래프를 보고 고르세요. 가장 많은 사람이 고른 일은?', toolOptions: { type: 'picture', mode: 'read', title: '우리 반이 함께 할 일', unit: '명', data: [['화분 물 주기', 5], ['책 읽어 주기', 9], ['낙엽 쓸기', 6], ['감사 편지', 4]], icons: [{ value: 1, name: '1명' }], question: '가장 많은 사람이 고른 일은?', choices: ['화분 물 주기', '책 읽어 주기', '낙엽 쓸기', '감사 편지'] }, target: { pick: 1 }, difficulty: 0.05 },
              { prompt: '그림그래프를 보고 고르세요. 두 번째로 많은 사람이 고른 일은?', toolOptions: { type: 'picture', mode: 'read', title: '우리 반이 함께 할 일', unit: '명', data: [['화분 물 주기', 7], ['책 읽어 주기', 4], ['낙엽 쓸기', 8], ['감사 편지', 5]], icons: [{ value: 1, name: '1명' }], question: '두 번째로 많은 사람이 고른 일은?', choices: ['화분 물 주기', '책 읽어 주기', '낙엽 쓸기', '감사 편지'] }, target: { pick: 0 }, difficulty: 0.15 },
              { prompt: '그림그래프를 보고 고르세요. 책 읽어 주기는 감사 편지보다 몇 명 더 많나요?', toolOptions: { type: 'picture', mode: 'read', title: '우리 반이 함께 할 일', unit: '명', data: [['화분 물 주기', 4], ['책 읽어 주기', 8], ['낙엽 쓸기', 6], ['감사 편지', 5]], icons: [{ value: 1, name: '1명' }], question: '몇 명 더 많나요?', choices: ['2명', '3명', '5명'] }, target: { pick: 1 }, difficulty: 0.2,
                levels: { challenge: { prompt: '그림그래프를 보고 고르세요. 투표한 사람은 모두 몇 명인가요?', toolOptions: { question: '모두 몇 명인가요?', choices: ['21명', '23명', '25명'] }, target: { pick: 1 } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"우리 반이 함께 할 일이 정해졌어요. 언제, 누가, 어떻게 할까요?" 요일별 당번을 칠판 표에 정하고 교실 앞에 붙인다. 한 주 동안 하고 다음 시간에 돌아본다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'chart', options: { type: 'picture', mode: 'read', title: '2반이 함께 할 일', unit: '명', data: [['급식 감사 인사', 6], ['복도 정리', 9], ['동생 돕기', 7]], icons: [{ value: 1, name: '1명' }], question: '가장 적은 사람이 고른 일은?', choices: ['급식 감사 인사', '복도 정리', '동생 돕기'] }, prompt: '그림그래프를 보고 가장 적은 사람이 고른 일을 고르세요.', target: { pick: 0 }, difficulty: 0.1 },
          { type: 'choice', prompt: '그림그래프에서 동그라미 하나는 무엇을 나타내나요?', options: ['고른 사람 한 명', '할 일 한 가지', '하루'], answer: 0, difficulty: 0.1, explain: '이 그림그래프에서는 동그라미 하나가 한 사람의 표예요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '우리 반 투표 그림그래프',
      items: [
        { type: 'table', prompt: '우리 반 투표 결과를 표에 쓰세요.', columns: ['할 일', '고른 사람 수'], rows: 4 },
        { type: 'figure', prompt: '그림그래프를 보고 가장 많은 사람이 고른 일을 쓰세요.', tool: 'chart', figures: [{ options: { type: 'picture', mode: 'read', title: '함께 할 일', unit: '명', data: [['화분 물 주기', 5], ['책 읽어 주기', 8], ['낙엽 쓸기', 3]], icons: [{ value: 1, name: '1명' }] }, caption: '가장 많은 일: ________' }], answer: '책 읽어 주기' },
        { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '이 그림그래프에서 동그라미 하나는 ___ 명이에요.', answer: '한' },
        { type: 'short', prompt: '우리 반이 정한 일을 언제, 어떻게 할지 쓰세요.' },
      ],
      easy: {
        note: '동그라미를 손가락으로 하나씩 짚으며 세어요.',
        items: [
          { type: 'figure', prompt: '더 많은 사람이 고른 일에 ○ 하세요.', tool: 'chart', figures: [{ options: { type: 'picture', mode: 'read', unit: '명', data: [['물 주기', 3], ['책 읽기', 6]], icons: [{ value: 1, name: '1명' }] }, caption: '' }], answer: '책 읽기' },
          { type: 'short', prompt: '우리 반이 함께 할 일을 쓰세요.' },
          { type: 'draw', prompt: '함께 하는 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '그래프 줄 끝에 수가 보이고, 미리 놓인 줄이 더 많아요.',
      base: '표를 보고 동그라미를 놓고, 그래프를 읽어 답해요.',
      challenge: '미리 그려 둔 줄 없이 그래프를 모두 그리고, 몇 명 더 많은지, 모두 몇 명인지 셈까지 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 동그라미를 줄 맞추지 않아 길이로 견주지 못한다 → 왼쪽부터 빈틈없이 놓게 한다. ② 가장 많은 일과 두 번째로 많은 일을 헷갈린다 → 많은 차례대로 손가락을 접으며 센다. ③ 자기가 고른 일이 뽑히지 않아 속상해한다 → 다음 주에 해 볼 일로 남겨 둔다. 수학 \'표와 그래프\' 단원을 배우기 전이면 칠판에서 동그라미 붙임 딱지로 먼저 해 본다.',
  }));

  lessons.push(L(16, {
    title: '한 주 동안 함께 한 일 돌아보고 다짐하기',
    objective: '우리 반이 한 주 동안 함께 한 일을 돌아보며 잘된 점과 고칠 점을 나누고, 앞으로 이어 갈 다짐을 말할 수 있다.',
    illustration: ART('a class looking at a paper weekly chart on the wall with sticker marks for each day, children smiling and writing promise cards', '한 주 동안 해 보니', [
      { motif: 'flower', x: 110, y: 228, color: 'rose' }, { motif: 'house', x: 250, y: 214 }, { motif: 'star', x: 390, y: 96, s: 0.6 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"한 주 동안 우리 반이 함께 한 일을 해 보니 어땠나요?" 칠판의 요일별 당번표를 함께 본다. 빠진 날이 있으면 누구를 탓하지 않고 "왜 그날은 못 했을까요?" 하고 까닭을 묻는다. 시연 단추로 \'모두 당번을 지켰어요\' 카드가 \'잘된 점\' 가지에 들어가는 모습을 보여 준다.',
        student: '한 주 동안 내가 맡은 일을 했던 날을 떠올려 봐요.',
        demo: { tool: 'mindmap', options: { topic: '한 주 돌아보기', slots: ['잘된 점', '고칠 점'], cards: ['모두 당번을 지켰어요'], shuffle: false }, sequence: [{ sort: { '잘된 점': ['모두 당번을 지켰어요'], '고칠 점': [] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 잘된 점과 고칠 점 나누기', minutes: 12, tool: 'mindmap',
            teacher: '"이 카드는 다음에도 그대로 하면 될 일인가요, 바꿔야 할 일인가요?" 고칠 점을 말할 때 친구 이름을 대지 않고 \'우리\'로 말하게 한다. 고칠 점이 하나도 없다는 학생에게 "다음 주에 더 잘하려면 무엇을 바꿀까요?" 하고 묻는다.',
            task: '한 주 돌아보기 카드를 잘된 점과 고칠 점으로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '돌아보기 카드를 두 가지로 나누어 보세요.', toolOptions: { topic: '한 주 돌아보기', slots: ['잘된 점', '고칠 점'], cards: ['1학년 동생들이 책을 좋아했어요', '금요일에 책 읽어 주기를 잊었어요', '읽어 줄 책을 미리 골랐어요', '목소리가 작아 뒤에서 안 들렸어요'] },
                target: { sort: { '잘된 점': ['1학년 동생들이 책을 좋아했어요', '읽어 줄 책을 미리 골랐어요'], '고칠 점': ['금요일에 책 읽어 주기를 잊었어요', '목소리가 작아 뒤에서 안 들렸어요'] } }, difficulty: 0.1 },
              { prompt: '고칠 점과 고치는 방법을 이어 보세요.', toolOptions: { mode: 'match', topic: '이렇게 고쳐요', slots: [{ id: 's1', label: '당번 날을 잊었어요' }, { id: 's2', label: '목소리가 작았어요' }], cards: ['전날 알림 쪽지를 붙여요', '천천히 크게 연습해요'] },
                target: { match: { s1: '전날 알림 쪽지를 붙여요', s2: '천천히 크게 연습해요' } }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['전날 알림 쪽지를 붙여요', '천천히 크게 연습해요', '당번을 없애요'] } } } },
              { prompt: '고칠 점을 말할 때 알맞은 말만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '알맞은 말', cards: ['"우리가 금요일을 잊었어요"', '"지우 때문에 못 했어요"', '"다음엔 쪽지를 붙여요"', '"다 너희 잘못이야"'] },
                target: { pick: ['"우리가 금요일을 잊었어요"', '"다음엔 쪽지를 붙여요"'] }, difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 내 마음 돌아보고 다짐하기', minutes: 14, tool: 'emotion',
            teacher: '"한 주 동안 해 보니 내 마음은 얼마만큼 뿌듯했나요? 정답은 없어요." 크기를 고른 학생 두세 명에게 까닭을 묻는다. 뿌듯함이 작다고 고른 학생의 말도 그대로 받아들이고 "다음 주에는 무엇을 하면 더 뿌듯할까요?" 하고 다짐으로 잇는다.',
            task: '한 주 동안의 내 마음을 크기로 나타내고, 다짐 문장을 완성해요.',
            levels: SCALE_LV,
            items: [
              { prompt: '한 주 동안 함께 한 일을 떠올리고, 내 뿌듯한 마음의 크기를 내 생각대로 골라 보세요.', toolOptions: { mode: 'scale', situation: '우리 반이 한 주 동안 1학년 동생들에게 그림책을 읽어 주었어요.', feeling: '뿌듯함', after: '내가 고른 크기와 까닭을 짝에게 말해 봐요.' }, target: { level: 'any' }, difficulty: 0.05 },
              { prompt: '다짐 문장의 빈칸에 알맞은 마음 카드를 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['뿌듯함', '짜증', '심심함'], slots: [{ id: 'b1', label: '동생들이 웃는 것을 보니 ___을 느꼈어요. 다음 주에도 할래요.' }] },
                target: { fill: { b1: '뿌듯함' } }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['뿌듯함', '짜증', '심심함', '미안함', '무서움'] } } } },
              { prompt: '당번 날 친구가 아파서 결석했어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '오늘 책 읽어 주기 당번인 서아가 아파서 학교에 오지 못했어요.', choices: [
                { id: 'skip', text: '서아 당번이니 오늘은 쉬어요', result: '1학년 동생들이 기다리다 실망했어요.', mood: '슬픔', why: '함께 하기로 한 일은 누가 이어 가면 좋을까요?' },
                { id: 'cover', text: '내가 대신 읽어 주겠다고 해요', result: '동생들이 이야기를 듣고 즐거워했어요.', mood: '기쁨' }] }, target: { choice: 'cover' }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"바른 생활 공부를 마치며, 우리가 만난 인물들과 우리 반이 한 일은 어떤 점이 같았나요?" 학생 말을 듣고 칠판에 \'다른 사람이 편해졌다\'처럼 적는다. 다짐 카드는 교실 뒤에 붙여 두고 2주 뒤에 다시 본다. 다음 시간부터는 하루의 변화와 여러 사람의 하루를 알아본다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '운동장 줍기 돌아보기', slots: ['잘된 점', '고칠 점'], cards: ['운동장이 깨끗해졌어요', '장갑을 안 가져온 친구가 많았어요'] }, prompt: '다른 반의 돌아보기 카드를 나누어 보세요.', target: { sort: { '잘된 점': ['운동장이 깨끗해졌어요'], '고칠 점': ['장갑을 안 가져온 친구가 많았어요'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '함께 한 일을 돌아볼 때 알맞은 태도는?', options: ['못 한 친구 이름을 말해요', '잘된 점과 고칠 점을 함께 찾아요', '고칠 점은 숨겨요'], answer: 1, difficulty: 0.1, explain: '잘된 점은 이어 가고, 고칠 점은 함께 바꿔요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '한 주 돌아보기와 다짐',
      items: [
        { type: 'table', prompt: '한 주 동안 함께 한 일을 돌아보며 쓰세요.', columns: ['잘된 점', '고칠 점', '고치는 방법'], rows: 2 },
        { type: 'choice', prompt: '고칠 점을 말하는 알맞은 말에 ○ 하세요.', options: ['"우리가 잊었어요"', '"너 때문이야"'], answer: '"우리가 잊었어요"' },
        { type: 'short', prompt: '다음 주에도 이어 갈 나의 다짐을 쓰세요.' },
        { type: 'draw', prompt: '함께 한 일 가운데 가장 기억에 남는 장면을 그려 보세요.' },
      ],
      easy: {
        note: '잘된 점 하나, 고칠 점 하나를 찾아요.',
        items: [
          { type: 'short', prompt: '잘된 점을 하나 쓰세요.' },
          { type: 'short', prompt: '고칠 점을 하나 쓰세요.' },
          { type: 'draw', prompt: '다음 주 다짐을 그림으로 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 마음 크기는 세 칸이에요.',
      base: '모두 나눈 뒤 확인을 눌러요. 다짐을 한 문장으로 써요.',
      challenge: '함정 카드를 골라내고, 고치는 방법을 두 가지 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 고칠 점을 친구 탓으로 말한다 → \'우리\'로 바꾸어 말하게 한다. ② 잘된 점만 말한다 → 다음에 더 잘하려면 무엇을 바꿀지 묻는다. ③ 마음 크기에 정답을 찾는다 → 정답이 없고 까닭이 중요하다고 말한다. 다짐 카드는 2주 뒤 다시 보며 이어 가는지 확인한다.',
  }));

  // ───────────────────────── 17~22차시: 낮과 밤, 물음 만들기(탐구 질문 만들기) ─────────────────────────

  lessons.push(L(17, {
    title: '낮과 밤에 달라지는 것 찾고 꾸미기',
    objective: '우리 동네의 낮과 밤에 달라지는 것을 찾아 나누고, 낮 하늘과 밤 하늘을 색종이 조각으로 나타낼 수 있다.',
    illustration: ART('a paper town split in half, the left side bright daytime with a sun and children walking to school, the right side night with a moon, stars and glowing windows', '낮과 밤은 무엇이 다를까요?', [
      { motif: 'house', x: 120, y: 214, color: 'buttercup' }, { motif: 'house', x: 360, y: 216, color: 'lavender' }, { motif: 'tree', x: 240, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"오늘 아침 학교에 올 때 하늘은 어땠나요? 어젯밤 잠들기 전 창밖은요?" 낮과 밤의 동네 모습을 견주어 말하게 한다. 시연 단추로 \'해가 떠 있어요\' 카드가 \'낮\' 가지에 들어가는 모습을 보여 준다. "이번에는 하루가 바뀔 때 무엇이 달라지는지, 그리고 사람들은 낮과 밤에 무엇을 하는지 알아봐요."',
        student: '어젯밤 창밖에서 본 것 하나와 오늘 아침 본 것 하나를 짝에게 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '낮과 밤', slots: ['낮', '밤'], cards: ['해가 떠 있어요'], shuffle: false }, sequence: [{ sort: { '낮': ['해가 떠 있어요'], '밤': [] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 낮과 밤에 볼 수 있는 것 나누기', minutes: 12, tool: 'mindmap',
            teacher: '"부엉이 소리는 언제 들어 봤나요?" 카드마다 \'언제 보았나요?\'를 묻고 손을 들어 낮·밤을 정하게 한다. 비 오는 날처럼 낮에도 밤에도 있는 것은 어느 쪽에도 넣지 않는다는 것을 미리 말한다. 낮에는 별이 없다고 말하는 학생에게 "별은 낮에도 하늘에 있지만 해가 밝아서 보이지 않아요" 하고 바로잡는다.',
            task: '카드를 읽고 낮에 볼 수 있는 것과 밤에 볼 수 있는 것으로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '네 장의 카드를 낮과 밤으로 나누어 보세요.', toolOptions: { topic: '낮과 밤', slots: ['낮', '밤'], cards: ['해가 떠 있어요', '달이 보여요', '하늘이 파래요', '창문마다 불이 켜져요'] },
                target: { sort: { '낮': ['해가 떠 있어요', '하늘이 파래요'], '밤': ['달이 보여요', '창문마다 불이 켜져요'] } }, difficulty: 0.05 },
              { prompt: '동네 모습 카드를 낮과 밤으로 나누어 보세요.', toolOptions: { topic: '우리 동네', slots: ['낮', '밤'], cards: ['아이들이 학교에 가요', '가로등이 켜져요', '부엉이가 울어요', '놀이터가 북적여요', '별이 반짝여요'] },
                target: { sort: { '낮': ['아이들이 학교에 가요', '놀이터가 북적여요'], '밤': ['가로등이 켜져요', '부엉이가 울어요', '별이 반짝여요'] } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['아이들이 학교에 가요', '가로등이 켜져요', '부엉이가 울어요', '놀이터가 북적여요', '별이 반짝여요', '비가 와요'] } } } },
              { prompt: '밤에만 볼 수 있는 것만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '밤에만 보여요', cards: ['반딧불이 빛', '쨍쨍한 햇빛', '켜진 가로등', '나무'] },
                target: { pick: ['반딧불이 빛', '켜진 가로등'] }, difficulty: 0.15,
                predict: { q: '\'나무\'는 바구니에 넣을까요?', options: ['넣어요', '안 넣어요'], answer: 1 },
                conclude: '나무처럼 낮에도 밤에도 있는 것은 밤에만 보이는 것이 아니에요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 낮 하늘과 밤 하늘 꾸미기', minutes: 15, tool: 'collage',
            teacher: '"낮 하늘에는 무엇을 붙일까요? 밤 하늘에는요?" 큰 노랑 동그라미는 해, 노랑 반원은 달, 별 모양은 별로 정한다. 판에서 꾸민 뒤 활동지에는 도화지 절반씩 낮과 밤을 크레파스로 그려 본다. 낮 하늘에 별을 붙이는 학생에게 "낮에 별이 보였나요?" 하고 묻는다.',
            task: '판에 낮 하늘과 밤 하늘을 색종이 조각으로 꾸며요.',
            levels: {
              easy: { shapes: ['circle', 'semi', 'star'], colors: ['노랑', '하양', '파랑'] },
              base: { shapes: ['circle', 'semi', 'star', 'square', 'triangle', 'leaf'], colors: ['노랑', '하양', '파랑', '주황', '초록', '갈색'] },
              challenge: {},
            },
            items: [
              { prompt: '낮 하늘이에요. 노랑 큰 동그라미 해 한 개와 하양 동그라미 구름 적어도 두 개 붙여 보세요.', target: { has: [{ shape: 'circle', color: '노랑', size: 'l', n: 1 }, { shape: 'circle', color: '하양', min: 2 }] }, difficulty: 0.05 },
              { prompt: '밤 하늘이에요. 노랑 반원 달 한 개와 별 적어도 세 개 붙여 보세요.', toolOptions: { bg: '파랑' }, target: { has: [{ shape: 'semi', color: '노랑', n: 1 }, { shape: 'star', min: 3 }] }, difficulty: 0.15,
                levels: { challenge: { prompt: '밤 하늘이에요. 노랑 반원 달 한 개와 하양 작은 별 적어도 세 개를 붙이고, 노랑 동그라미 해는 붙이지 않아요.', target: { has: [{ shape: 'semi', color: '노랑', n: 1 }, { shape: 'star', color: '하양', size: 's', min: 3 }, { shape: 'circle', color: '노랑', max: 0 }] } } } },
              { prompt: '해와 달을 한 판에 함께 붙여 낮과 밤 그림을 만들어 보세요. 별은 적어도 두 개 붙여요.', target: { has: [{ shape: 'circle', color: '노랑', size: 'l', n: 1 }, { shape: 'semi', color: '노랑', n: 1 }, { shape: 'star', min: 2 }] }, difficulty: 0.2 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"낮과 밤에 달라지는 것 가운데 가장 궁금한 것은 무엇인가요?" 학생이 말한 것을 \'궁금한 것\' 칸에 모아 적는다. 다음 시간에는 우리 하루를 차례대로 놓아 보고, 다른 사람의 하루도 나와 같을지 생각해 본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '바닷가 마을', slots: ['낮', '밤'], cards: ['등대 불빛이 빙글빙글 돌아요', '모래사장에서 조개를 주워요'] }, prompt: '바닷가 마을 카드를 낮과 밤으로 나누어 보세요.', target: { sort: { '낮': ['모래사장에서 조개를 주워요'], '밤': ['등대 불빛이 빙글빙글 돌아요'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '낮에 별이 보이지 않는 까닭은?', options: ['별이 낮에는 사라져서', '해가 밝아서 별빛이 안 보여서', '별이 잠을 자서'], answer: 1, difficulty: 0.2, explain: '별은 낮에도 하늘에 있지만 햇빛이 밝아서 보이지 않아요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '낮과 밤',
      items: [
        { type: 'table', prompt: '낮과 밤에 볼 수 있는 것을 두 가지씩 쓰세요.', columns: ['낮', '밤'], rows: 2 },
        { type: 'choice', prompt: '밤에 볼 수 있는 것에 ○ 하세요.', options: ['켜진 가로등', '등교하는 아이들', '쨍쨍한 햇빛'], answer: '켜진 가로등' },
        { type: 'draw', prompt: '도화지 왼쪽에 낮 하늘, 오른쪽에 밤 하늘을 그리세요.' },
        { type: 'short', prompt: '낮과 밤에 달라지는 것 가운데 궁금한 것을 쓰세요.' },
      ],
      easy: {
        note: '해가 있으면 낮, 달과 별이 보이면 밤이에요.',
        items: [
          { type: 'choice', prompt: '낮에 볼 수 있는 것에 ○ 하세요.', options: ['해', '달'], answer: '해' },
          { type: 'choice', prompt: '밤에 볼 수 있는 것에 ○ 하세요.', options: ['별', '파란 하늘'], answer: '별' },
          { type: 'draw', prompt: '밤 하늘을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '판에 동그라미·반원·별과 세 가지 색만 나와요. 맞는 가지에 초록 테두리가 생겨요.',
      base: '모두 나눈 뒤 확인을 눌러요. 낮과 밤 그림을 색종이로 꾸며요.',
      challenge: '낮과 밤 어느 쪽도 아닌 함정 카드가 섞여 있어요. 모든 모양과 색을 쓰고, 밤 하늘에는 해를 붙이지 않고 작은 하양 별만 붙여요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 별과 달은 밤에만 하늘에 있다고 여긴다 → 낮달 사진을 보여 주고, 별은 햇빛이 밝아 안 보이는 것이라고 짚는다. ② 낮·밤 어느 쪽도 아닌 것(비, 나무)을 억지로 넣는다 → 언제나 있는 것은 남긴다고 다시 말한다. ③ 낮과 밤 그림을 한쪽에 섞는다 → 판 가운데에 손가락으로 선을 그어 나누게 한다.',
  }));

  lessons.push(L(18, {
    title: '내 하루를 차례대로 놓고 다른 하루와 견주기',
    objective: '내 하루를 아침부터 밤까지 차례대로 놓고, 같은 시각에 다른 사람은 다른 일을 한다는 것을 말할 수 있다.',
    illustration: ART('a paper ribbon timeline from sunrise to night with small scenes of a child waking up, going to school, eating dinner and sleeping, while a baker kneads dough under the moon', '내 하루는 어떻게 흘러갈까요?', [
      { motif: 'house', x: 120, y: 214 }, { motif: 'tree', x: 250, y: 214 }, { motif: 'moon', x: 380, y: 96, s: 0.6 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"아침에 일어나서 학교에 오기까지 무엇을 했나요?" 세 가지를 차례로 말하게 한다. 시연 단추로 \'일어나요\'와 \'학교에 가요\'가 시간 띠 위에 차례대로 놓이는 모습을 보여 준다. "새벽 4시에 여러분은 무엇을 하고 있었을까요? 그때 일어나서 일하는 사람도 있을까요?" 답은 정해 주지 않고 활동 2에서 알아본다.',
        student: '오늘 아침 일어나서부터 지금까지 한 일을 세 가지 떠올려 봐요.',
        demo: { tool: 'timeline', options: { axis: ['아침', '밤'], cards: ['일어나요', '학교에 가요'], shuffle: false }, sequence: [{ order: ['일어나요', '학교에 가요'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 내 하루를 시간 띠에 놓기', minutes: 13, tool: 'timeline',
            teacher: '"점심은 학교에 가기 전에 먹나요, 학교에서 먹나요?" 시간 띠의 왼쪽이 아침, 오른쪽이 밤이라는 것을 손으로 쓸어 보이며 짚는다. 숙제와 저녁 차례가 집마다 다르다고 말하는 학생에게는 카드에 적힌 \'저녁밥을 먹고\'처럼 차례를 알려 주는 말을 찾게 한다.',
            task: '내 하루 카드를 아침부터 밤까지 시간 띠에 차례대로 놓아요.',
            levels: DAY_LV,
            items: [
              { prompt: '하루 카드 세 장을 아침부터 차례대로 놓아 보세요.', toolOptions: { axis: ['아침', '밤'], cards: ['잠자리에 들어요', '일어나 세수해요', '학교에서 공부해요'] },
                target: { order: ['일어나 세수해요', '학교에서 공부해요', '잠자리에 들어요'] }, difficulty: 0.05 },
              { prompt: '하루 카드 네 장을 차례대로 놓아 보세요.', toolOptions: { axis: ['아침', '밤'], cards: ['학교에서 점심을 먹어요', '아침밥을 먹어요', '저녁밥을 먹어요', '집에 돌아와요'] },
                target: { order: ['아침밥을 먹어요', '학교에서 점심을 먹어요', '집에 돌아와요', '저녁밥을 먹어요'] }, difficulty: 0.1,
                levels: { challenge: { prompt: '하루 카드 네 장을 차례대로 놓아 보세요. 하루에 맞지 않는 카드는 남겨요.', toolOptions: { slots: 4, cards: ['학교에서 점심을 먹어요', '아침밥을 먹어요', '저녁밥을 먹어요', '집에 돌아와요', '새벽 3시에 학교에 가요'] } } } },
              { prompt: '하루 카드 다섯 장을 차례대로 놓아 보세요.', toolOptions: { axis: ['아침', '밤'], cards: ['저녁밥을 먹고 이를 닦아요', '학교 끝나고 태권도에 가요', '책가방을 메고 집을 나서요', '이를 닦고 잠자리에 누워요', '일어나 이불을 개요'] },
                target: { order: ['일어나 이불을 개요', '책가방을 메고 집을 나서요', '학교 끝나고 태권도에 가요', '저녁밥을 먹고 이를 닦아요', '이를 닦고 잠자리에 누워요'] }, difficulty: 0.2 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 같은 시각, 다른 하루', minutes: 14, tool: 'mindmap',
            teacher: '"새벽 4시에 나는 자고 있어요. 빵집 제빵사는요?" 사람 카드에 적힌 말(새벽에 빵을 굽는, 밤에 건물을 지키는)을 짚어 그 사람이 그 시각에 할 일을 찾게 한다. "모든 사람이 나처럼 밤에 자고 낮에 일할까요?" 하고 물어, 같은 시각에도 사람마다 하는 일이 다르다는 것을 말하게 한다.',
            task: '같은 시각에 여러 사람이 하고 있을 일을 짝 지어요.',
            levels: CARD_LV,
            items: [
              { prompt: '새벽 4시예요. 사람마다 하고 있을 일을 이어 보세요.', toolOptions: { mode: 'match', topic: '새벽 4시', slots: [{ id: 's1', label: '학교에 다니는 나' }, { id: 's2', label: '새벽에 빵을 굽는 제빵사' }], cards: ['잠을 자요', '빵 반죽을 해요'] },
                target: { match: { s1: '잠을 자요', s2: '빵 반죽을 해요' } }, difficulty: 0.05 },
              { prompt: '밤 11시예요. 사람마다 하고 있을 일을 이어 보세요.', toolOptions: { mode: 'match', topic: '밤 11시', slots: [{ id: 's1', label: '학교에 다니는 나' }, { id: 's2', label: '밤에 일하는 병원 간호사' }, { id: 's3', label: '밤에 건물을 지키는 경비원' }], cards: ['잠을 자요', '환자를 살펴요', '건물을 돌며 살펴요'] },
                target: { match: { s1: '잠을 자요', s2: '환자를 살펴요', s3: '건물을 돌며 살펴요' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['잠을 자요', '환자를 살펴요', '건물을 돌며 살펴요', '학교에서 공부해요'] } } } },
              { prompt: '낮 12시예요. 사람마다 하고 있을 일을 이어 보세요.', toolOptions: { mode: 'match', topic: '낮 12시', slots: [{ id: 's1', label: '학교에 다니는 나' }, { id: 's2', label: '밤새 일하고 아침에 퇴근한 간호사' }, { id: 's3', label: '급식을 만드는 조리사' }], cards: ['점심을 먹어요', '집에서 잠을 자요', '점심을 나누어 줘요'] },
                target: { match: { s1: '점심을 먹어요', s2: '집에서 잠을 자요', s3: '점심을 나누어 줘요' } }, difficulty: 0.2,
                predict: { q: '낮 12시에 잠을 자는 사람도 있을까요?', options: ['있어요', '없어요'], answer: 0 },
                conclude: '밤에 일한 사람은 낮에 잠을 자요. 사람마다 하루가 달라요.' },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"오늘 알게 된 하루가 다른 사람은 누구였나요?" 칠판에 제빵사·간호사·경비원을 적는다. 출구 2번에서 \'모든 사람의 하루는 같다\'를 고른 학생은 활동 2의 낮 12시 문항을 다시 보게 한다. 다음 시간에는 궁금한 것을 물음으로 바꾸어 본다.',
        exitTicket: [
          { type: 'tool', tool: 'timeline', options: { axis: ['아침', '밤'], cards: ['학교 운동장에서 놀아요', '이부자리를 펴요', '알람 소리에 깨요'] }, prompt: '처음 보는 하루 카드를 아침부터 차례대로 놓아 보세요.', target: { order: ['알람 소리에 깨요', '학교 운동장에서 놀아요', '이부자리를 펴요'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '사람들의 하루에 대해 알맞은 말은?', options: ['모든 사람의 하루는 똑같아요', '같은 시각에도 사람마다 하는 일이 달라요', '밤에는 모두 잠을 자요'], answer: 1, difficulty: 0.15, explain: '새벽에 빵을 굽는 사람, 밤에 환자를 돌보는 사람처럼 하루는 사람마다 달라요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '내 하루와 다른 하루',
      items: [
        { type: 'figure', wide: true, prompt: '하루 차례대로 빈칸에 1, 2, 3을 쓰세요.', tool: 'timeline', figures: [{ options: { axis: ['아침', '밤'], cards: ['저녁밥을 먹어요', '아침밥을 먹어요', '점심을 먹어요'], shuffle: false }, caption: '' }], answer: '아침밥 1, 점심 2, 저녁밥 3' },
        { type: 'table', prompt: '내 하루를 때마다 쓰세요.', columns: ['아침', '낮', '저녁', '밤'], rows: 1 },
        { type: 'choice', prompt: '새벽 4시에 빵 반죽을 하는 사람에 ○ 하세요.', options: ['제빵사', '2학년 학생', '선생님'], answer: '제빵사' },
        { type: 'short', prompt: '나와 하루가 다를 것 같은 사람을 한 명 쓰세요.' },
      ],
      easy: {
        note: '시간 띠 왼쪽은 아침, 오른쪽은 밤이에요.',
        items: [
          { type: 'choice', prompt: '아침에 하는 일에 ○ 하세요.', options: ['세수해요', '잠자리에 들어요'], answer: '세수해요' },
          { type: 'choice', prompt: '밤에 일하는 사람에 ○ 하세요.', options: ['병원 간호사', '2학년 학생'], answer: '병원 간호사' },
          { type: 'draw', prompt: '내가 잠잘 때 일하는 사람을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 초록 테두리가 생기고 틀리면 카드가 돌아와요.',
      base: '모두 놓은 뒤 확인을 눌러요. 같은 시각에 사람마다 하는 일을 말해요.',
      challenge: '카드가 다섯 장으로 늘고, 그 시각에 맞지 않는 함정 카드가 섞여 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 모든 사람의 하루가 나와 같다고 여긴다(이 부분의 핵심 오개념) → 같은 시각에 사람마다 하는 일을 나란히 보게 한다. ② 시간 띠의 왼쪽·오른쪽을 헷갈린다 → 칠판 띠 왼쪽에 해, 오른쪽에 달을 붙여 둔다. ③ 우리 집 차례가 달라 카드 차례가 틀렸다고 한다 → 카드 글 속 차례 말(먹고, 끝나고)을 찾게 한다.',
  }));

  lessons.push(L(19, {
    title: '궁금한 것을 묻는 문장으로 바꾸기',
    objective: '낮과 밤, 사람들의 하루에 대해 궁금한 것을 \'언제·어디서·무엇을·왜\'를 넣은 묻는 문장으로 만들 수 있다.',
    illustration: ART('children holding paper question-mark cards under a half-day half-night sky, one card shaped like a moon and one like a sun', '무엇이 궁금한가요?', [
      { motif: 'star', x: 120, y: 96, s: 0.6 }, { motif: 'house', x: 250, y: 214, color: 'sky' }, { motif: 'tree', x: 390, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"\'밤에 일하는 사람이 있다\'와 \'밤에 일하는 사람은 언제 잘까요?\'는 무엇이 다를까요?" 두 문장을 칠판에 쓰고 끝을 짚는다. 묻는 문장은 끝에 물음표가 있고 \'언제·어디서·무엇을·왜\' 같은 말이 들어간다는 것을 알려 준다. 시연 단추로 묻는 문장 카드가 바구니에 들어가는 모습을 보여 준다.',
        student: '17차시에 적은 \'궁금한 것\' 가운데 하나를 골라 소리 내어 읽어 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'pick', basket: '묻는 문장', cards: ['밤에 고양이는 무엇을 할까요?', '밤은 깜깜해요.'], shuffle: false }, sequence: [{ pick: ['밤에 고양이는 무엇을 할까요?'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 묻는 문장 찾기', minutes: 12, tool: 'mindmap',
            teacher: '"이 문장을 들으면 대답하고 싶어지나요?" 카드를 읽고 묻는 문장에는 손을 들게 한다. 물음표만 붙이고 \'밤은 깜깜해요?\'처럼 답이 이미 정해진 문장을 쓰는 학생에게 "이 물음으로 새로 알게 되는 것이 있나요?" 하고 묻는다.',
            task: '카드를 읽고 묻는 문장만 골라 바구니에 넣어요.',
            levels: CARD_LV,
            items: [
              { prompt: '묻는 문장만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '묻는 문장', cards: ['밤에는 누가 길을 지킬까요?', '낮에는 해가 떠요.', '경비원은 언제 잠을 잘까요?', '가로등이 켜졌어요.'] },
                target: { pick: ['밤에는 누가 길을 지킬까요?', '경비원은 언제 잠을 잘까요?'] }, difficulty: 0.05 },
              { prompt: '하루 생활을 알아보는 묻는 문장만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '하루를 묻는 문장', cards: ['몇 시에 일을 시작하세요?', '점심은 어디에서 드세요?', '오늘 날씨가 좋아요.', '제빵사는 빵을 구워요.', '밤에 일하면 언제 쉬세요?'] },
                target: { pick: ['몇 시에 일을 시작하세요?', '점심은 어디에서 드세요?', '밤에 일하면 언제 쉬세요?'] }, difficulty: 0.15 },
              { prompt: '묻는 문장을 묻는 말에 따라 나누어 보세요.', toolOptions: { topic: '묻는 말', slots: ['언제', '어디에서'], cards: ['언제 일어나세요?', '어디에서 일하세요?', '언제 집에 가세요?', '어디에서 잠을 주무세요?'] },
                target: { sort: { '언제': ['언제 일어나세요?', '언제 집에 가세요?'], '어디에서': ['어디에서 일하세요?', '어디에서 잠을 주무세요?'] } }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { slots: ['언제', '어디에서', '왜'], cards: ['언제 일어나세요?', '어디에서 일하세요?', '왜 밤에 일하세요?', '어디에서 잠을 주무세요?', '왜 그 일을 고르셨어요?'] }, prompt: '묻는 문장을 묻는 말에 따라 세 가지로 나누어 보세요.', target: { sort: { '언제': ['언제 일어나세요?'], '어디에서': ['어디에서 일하세요?', '어디에서 잠을 주무세요?'], '왜': ['왜 밤에 일하세요?', '왜 그 일을 고르셨어요?'] } } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 묻는 말 넣어 물음 만들기', minutes: 14, tool: 'story',
            teacher: '"\'___ 일어나세요?\'에는 어떤 말이 들어가야 시각을 물을 수 있을까요?" 빈칸 앞뒤를 소리 내어 읽고 묻는 말을 넣어 보게 한다. 다 만든 뒤 짝과 내가 만든 물음 하나씩을 서로 물어보고 대답해 본다.',
            task: '물음 문장의 빈칸에 알맞은 묻는 말 카드를 넣어요.',
            levels: CARD_LV,
            items: [
              { prompt: '빈칸에 알맞은 묻는 말 카드를 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['몇 시에', '누구를', '무엇을'], slots: [{ id: 'b1', who: '민지', motif: 'sun', label: '아침 ___ 일어나세요?' }] },
                target: { fill: { b1: '몇 시에' } }, difficulty: 0.05 },
              { prompt: '두 물음의 빈칸에 알맞은 카드를 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['무엇을', '어디에서', '몇 시에'], slots: [{ id: 'b1', who: '준호', motif: 'moon', label: '밤에 일할 때 ___ 하세요? 환자를 돌보세요?' }, { id: 'b2', who: '준호', motif: 'house', label: '___ 일하세요? 병원인가요?' }] },
                target: { fill: { b1: '무엇을', b2: '어디에서' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['무엇을', '어디에서', '몇 시에', '누구를'] } } } },
              { prompt: '까닭을 묻는 물음을 만들어 보세요.', toolOptions: { mode: 'fill', cards: ['왜', '언제', '어디에서'], slots: [{ id: 'b1', who: '서아', motif: 'star', label: '___ 밤에 빵을 구우세요? 까닭이 궁금해요.' }] },
                target: { fill: { b1: '왜' } }, difficulty: 0.1 },
              { prompt: '짝과 내가 만든 물음 하나씩을 서로 묻고 대답해 보았으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 만든 물음 가운데 꼭 대답을 듣고 싶은 물음은 무엇인가요?" 두세 명이 읽는다. 물음은 \'물음 상자\'에 모아 두고 인터뷰할 때 쓴다. 다음 시간에는 이 물음으로 누구의 하루를 알아볼지 정한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', basket: '묻는 문장', cards: ['소방관은 밤에 어디에서 쉬세요?', '소방차는 빨개요.', '불이 나면 몇 분 만에 출동하세요?'] }, prompt: '묻는 문장만 바구니에 넣어 보세요.', target: { pick: ['소방관은 밤에 어디에서 쉬세요?', '불이 나면 몇 분 만에 출동하세요?'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '시각을 묻는 물음은 어느 것인가요?', options: ['어디에서 일하세요?', '몇 시에 퇴근하세요?', '왜 그 일을 하세요?'], answer: 1, difficulty: 0.1, explain: '\'몇 시에\'가 들어가면 시각을 묻는 물음이에요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '궁금한 것을 물음으로',
      items: [
        { type: 'choice', prompt: '묻는 문장에 ○ 하세요.', options: ['밤은 깜깜해요.', '밤에는 누가 일할까요?', '해가 졌어요.'], answer: '밤에는 누가 일할까요?' },
        { type: 'blank', prompt: '빈칸에 묻는 말을 넣어 물음을 완성하세요.', text: '___ 일어나세요?', answer: '몇 시에(언제)' },
        { type: 'table', prompt: '묻는 말을 넣어 물음을 하나씩 만드세요.', columns: ['묻는 말', '내가 만든 물음'], cells: [['언제', ''], ['어디에서', ''], ['무엇을', ''], ['왜', '']] },
        { type: 'short', prompt: '가장 대답을 듣고 싶은 물음을 쓰세요.' },
      ],
      easy: {
        note: '묻는 문장 끝에는 물음표(?)가 있어요.',
        items: [
          { type: 'choice', prompt: '묻는 문장에 ○ 하세요.', options: ['언제 자요?', '잠을 자요.'], answer: '언제 자요?' },
          { type: 'short', prompt: '궁금한 것을 물음으로 하나 쓰세요.' },
          { type: 'draw', prompt: '물어보고 싶은 사람을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고 틀리면 카드가 돌아와요.',
      base: '모두 놓은 뒤 확인을 눌러요. 내 물음 하나를 짝에게 물어요.',
      challenge: '\'왜\'를 묻는 갈래가 하나 더 있어요. 네 가지 묻는 말로 물음을 모두 만들어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 물음표만 붙이면 묻는 문장이라고 여긴다 → 대답으로 새로 알게 되는 것이 있는지 묻는다. ② 예/아니요로만 끝나는 물음을 만든다 → \'언제·어디서·무엇을·왜\'로 바꾸어 보게 한다. ③ 낮과 밤과 상관없는 물음을 만든다 → 칠판의 \'궁금한 것\' 칸을 다시 보게 한다.',
  }));

  lessons.push(L(20, {
    title: '학교에서 하루를 알아볼 분 정하기',
    objective: '학교에서 하루를 알아볼 분과 그분을 만날 수 있는 곳을 찾고, 공손하게 인터뷰를 부탁하는 말을 할 수 있다.',
    illustration: ART('a simple paper school map with a cafeteria, a nurse office, a library and a guard booth at the gate, a child bowing politely to a school guard', '누구의 하루를 알아볼까요?', [
      { motif: 'house', x: 120, y: 214, color: 'mint' }, { motif: 'tree', x: 250, y: 214 }, { motif: 'flower', x: 390, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"우리 학교에는 선생님 말고도 어떤 분들이 일하실까요?" 조리사·보건 선생님·사서 선생님·보안관 선생님·시설 주무관을 함께 떠올린다. 시연 단추로 학교 지도에서 급식실에 핀이 꽂히는 모습을 보여 준다. "우리 반은 모둠마다 한 분을 정해 하루 생활을 여쭈어볼 거예요. 먼저 그분을 어디에서 만날 수 있는지 알아봐요."',
        student: '우리 학교에서 일하시는 분을 떠올려 손가락으로 세어 봐요.',
        demo: { tool: 'map', options: { grid: [5, 3], places: [{ name: '급식실', icon: 'house', at: [1, 1] }, { name: '도서실', icon: 'library', at: [3, 0] }] }, sequence: [{ place: '급식실' }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 그분을 만날 곳 찾기', minutes: 12, tool: 'map',
            teacher: '"보건 선생님은 학교 어디에 계실까요?" 지도에서 장소 이름을 소리 내어 읽고 그곳에서 하는 일을 떠올려 핀을 꽂게 한다. 학교마다 장소가 다를 수 있으니 우리 학교의 실제 자리도 함께 말한다.',
            task: '하루를 알아볼 분을 만날 수 있는 곳에 핀을 꽂아요.',
            levels: {
              easy: { grid: [4, 3] },
              base: { grid: [5, 3] },
              challenge: { grid: [6, 4] },
            },
            items: [
              { prompt: '아픈 친구를 돌보시는 보건 선생님을 만날 곳에 핀을 꽂아 보세요.', toolOptions: { places: [{ name: '보건실', icon: 'hospital', at: [0, 1] }, { name: '급식실', icon: 'house', at: [2, 2] }, { name: '도서실', icon: 'library', at: [3, 0] }] }, target: { place: '보건실' }, difficulty: 0.05 },
              { prompt: '책을 빌려주시는 사서 선생님을 만날 곳에 핀을 꽂아 보세요.', toolOptions: { places: [{ name: '운동장', icon: 'park', at: [1, 2] }, { name: '도서실', icon: 'library', at: [2, 0] }, { name: '보건실', icon: 'hospital', at: [3, 1] }] }, target: { place: '도서실' }, difficulty: 0.1 },
              { prompt: '아침마다 교문에서 안전하게 맞아 주시는 보안관 선생님을 만날 곳에 핀을 꽂아 보세요.', toolOptions: { places: [{ name: '교문 지킴이실', icon: 'police', at: [0, 2] }, { name: '급식실', icon: 'house', at: [2, 1] }, { name: '도서실', icon: 'library', at: [3, 0] }] }, target: { place: '교문 지킴이실' }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 공손하게 인터뷰 부탁하기', minutes: 15, tool: 'story', pair: true,
            teacher: '"어른께 갑자기 \'몇 시에 일어나요?\' 하고 물으면 어떨까요?" 인사 → 나를 소개 → 부탁 → 고맙다는 인사 차례를 손가락으로 꼽게 한다. 차례를 정한 뒤 짝과 한 사람은 조리사 선생님, 한 사람은 2학년 학생이 되어 부탁하는 말을 역할놀이로 해 본다. 반말을 쓰는 학생에게 높임말로 바꾸어 다시 말하게 한다.',
            task: '인터뷰 부탁 차례를 정하고, 짝과 역할을 나누어 부탁하는 말을 해 봐요.',
            levels: CARD_LV,
            items: [
              { prompt: '인터뷰를 부탁하는 차례대로 놓아 보세요.', toolOptions: { hint1: '어른께 부탁할 때 처음 만나서 하는 말과, 부탁을 마치며 하는 말이 무엇인지 먼저 떠올려 보고 양 끝에 놓아요.', cards: [{ id: 'thanks', text: '"고맙습니다" 인사해요', motif: 'flower' }, { id: 'hello', text: '"안녕하세요" 인사해요', motif: 'sun' }, { id: 'ask', text: '하루를 여쭈어봐도 되는지 물어요', motif: 'star' }, { id: 'me', text: '"2학년 3반 민지예요" 소개해요', motif: 'house' }] },
                target: { order: ['hello', 'me', 'ask', 'thanks'] }, difficulty: 0.15 },
              { prompt: '부탁하는 말의 빈칸에 알맞은 카드를 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['여쭈어봐도', '물어봐', '알려 줘'], slots: [{ id: 'b1', who: '민지', motif: 'flower', label: '선생님의 하루를 ___ 될까요?' }] },
                target: { fill: { b1: '여쭈어봐도' } }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['여쭈어봐도', '물어봐', '알려 줘', '말해 봐'] } } } },
              { prompt: '짝과 역할을 나누어 인터뷰 부탁하는 말을 해 보고 역할을 바꾸었으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"우리 모둠은 어느 분의 하루를 알아볼까요?" 모둠마다 한 분을 정해 칠판에 적는다(같은 분이 겹치면 다른 분과 나눈다). 인터뷰는 담임이 미리 그분께 부탁해 둔 시간에 모둠이 함께 간다는 것을 알려 준다.',
        exitTicket: [
          { type: 'tool', tool: 'map', options: { grid: [5, 3], places: [{ name: '급식실', icon: 'house', at: [0, 0] }, { name: '보건실', icon: 'hospital', at: [2, 2] }, { name: '도서실', icon: 'library', at: [4, 1] }] }, prompt: '점심을 만드시는 조리사 선생님을 만날 곳에 핀을 꽂아 보세요.', target: { place: '급식실' }, difficulty: 0.05 },
          { type: 'choice', prompt: '어른께 인터뷰를 부탁할 때 가장 먼저 할 말은?', options: ['"몇 시에 일어나요?"', '"안녕하세요"', '"빨리 대답해 주세요"'], answer: 1, difficulty: 0.05, explain: '먼저 인사하고 나를 소개한 뒤 부탁해요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '하루를 알아볼 분',
      items: [
        { type: 'table', prompt: '우리 학교에서 일하시는 분과 만날 곳을 쓰세요.', columns: ['하시는 일', '만날 곳'], rows: 3 },
        { type: 'figure', wide: true, prompt: '부탁하는 차례대로 빈칸에 1, 2, 3, 4를 쓰세요.', tool: 'story', figures: [{ options: { cards: [{ id: 'ask', text: '여쭈어봐도 될까요?', motif: 'star' }, { id: 'thanks', text: '고맙습니다', motif: 'flower' }, { id: 'hello', text: '안녕하세요', motif: 'sun' }, { id: 'me', text: '저는 민지예요', motif: 'house' }], shuffle: false }, caption: '' }], answer: '안녕하세요 1, 저는 민지예요 2, 여쭈어봐도 될까요? 3, 고맙습니다 4' },
        { type: 'choice', prompt: '공손하게 부탁하는 말에 ○ 하세요.', options: ['"하루를 여쭈어봐도 될까요?"', '"하루 말해 봐"'], answer: '"하루를 여쭈어봐도 될까요?"' },
        { type: 'short', prompt: '우리 모둠이 하루를 알아볼 분을 쓰세요.' },
      ],
      easy: {
        note: '인사 → 소개 → 부탁 → 고맙습니다.',
        items: [
          { type: 'choice', prompt: '처음에 하는 말에 ○ 하세요.', options: ['안녕하세요', '고맙습니다'], answer: '안녕하세요' },
          { type: 'short', prompt: '하루를 알아볼 분을 쓰세요.' },
          { type: 'draw', prompt: '그분께 인사하는 내 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '칸 지도가 작고 맞는 자리에 초록 테두리가 생겨요.',
      base: '스스로 핀을 꽂고, 부탁 차례를 정해 역할놀이를 해요.',
      challenge: '칸 지도가 커지고 반말 카드가 더 섞여 있어요. 내 말로 부탁 문장을 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 인사 없이 바로 묻는다 → 네 손가락 차례를 칠판에 붙여 둔다. ② 반말로 부탁한다 → 높임말로 바꾸어 다시 말하게 한다. ③ 인터뷰할 분이 한 분에게 몰린다 → 담임이 미리 여러 분께 부탁해 두고 모둠마다 나눈다. 인터뷰 시간은 담임이 미리 그분과 약속한다.',
  }));

  lessons.push(L(21, {
    title: '밤에도 문을 여는 곳 찾고 물음 만들기',
    objective: '밤에도 문을 여는 곳과 밤에는 문을 닫는 곳을 나누고, 밤에 문을 연 곳을 보고 궁금한 것을 물음으로 만들 수 있다.',
    illustration: ART('a quiet paper street at night with a glowing hospital emergency sign, a bright convenience store, a police box with lights on, and a closed post office in the dark', '밤에도 불이 켜진 곳', [
      { motif: 'house', x: 110, y: 214, color: 'buttercup' }, { motif: 'house', x: 240, y: 218, color: 'lavender', s: 0.9 }, { motif: 'house', x: 380, y: 214, color: 'sky' }], true),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"밤 10시에 우리 동네를 걸으면 어느 건물에 불이 켜져 있을까요?" 학생 경험을 듣는다. 시연 단추로 \'밤새 불이 켜진 응급실\' 카드가 \'밤에도 문을 열어요\' 가지에 들어가는 모습을 보여 준다. "불이 켜진 곳에는 누가 있을까요?" 이 물음을 칠판에 써 두고, 오늘은 이렇게 궁금한 것을 물음으로 만들어 본다고 말한다.',
        student: '밤에 차를 타고 지나가다 불이 켜진 가게나 건물을 본 적이 있는지 떠올려 봐요.',
        demo: { tool: 'mindmap', options: { topic: '밤의 우리 동네', slots: ['밤에도 문을 열어요', '밤에는 문을 닫아요'], cards: ['밤새 불이 켜진 응급실'], shuffle: false }, sequence: [{ sort: { '밤에도 문을 열어요': ['밤새 불이 켜진 응급실'], '밤에는 문을 닫아요': [] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 밤에도 문을 여는 곳 나누기', minutes: 13, tool: 'mindmap',
            teacher: '"카드에 적힌 시각을 잘 보세요. 저녁 6시에 닫으면 밤에는 어떨까요?" 카드 속 시각과 \'밤새\', \'24시간\' 같은 말을 짚게 한다. 다 나눈 뒤 "밤에도 문을 여는 곳에는 누가 있을까요?" 하고 물어, 그곳에서 일하는 사람을 이어 보게 한다.',
            task: '동네의 곳을 밤에도 문을 여는 곳과 밤에는 닫는 곳으로 나누고, 그곳에서 밤에 일하는 사람을 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '네 곳을 나누어 보세요.', toolOptions: { topic: '밤의 우리 동네', slots: ['밤에도 문을 열어요', '밤에는 문을 닫아요'], cards: ['밤새 불이 켜진 병원 응급실', '저녁 6시에 닫는 우체국', '24시간 여는 편의점', '오후 5시에 닫는 학교 도서실'] },
                target: { sort: { '밤에도 문을 열어요': ['밤새 불이 켜진 병원 응급실', '24시간 여는 편의점'], '밤에는 문을 닫아요': ['저녁 6시에 닫는 우체국', '오후 5시에 닫는 학교 도서실'] } }, difficulty: 0.1 },
              { prompt: '다섯 곳을 나누어 보세요.', toolOptions: { topic: '밤의 우리 동네', slots: ['밤에도 문을 열어요', '밤에는 문을 닫아요'], cards: ['밤새 문을 여는 경찰 지구대', '해가 지면 닫는 동네 시장', '밤에도 불을 끄러 나가는 소방서', '오후 4시에 닫는 은행', '저녁 7시에 닫는 꽃집'] },
                target: { sort: { '밤에도 문을 열어요': ['밤새 문을 여는 경찰 지구대', '밤에도 불을 끄러 나가는 소방서'], '밤에는 문을 닫아요': ['해가 지면 닫는 동네 시장', '오후 4시에 닫는 은행', '저녁 7시에 닫는 꽃집'] } }, difficulty: 0.15 },
              { prompt: '밤에도 문을 여는 곳과 그곳에서 밤에 일하는 사람을 이어 보세요.', toolOptions: { mode: 'match', topic: '밤에 일하는 사람', slots: [{ id: 's1', label: '병원 응급실' }, { id: 's2', label: '24시간 편의점' }, { id: 's3', label: '경찰 지구대' }], cards: ['의사와 간호사', '편의점 점원', '경찰관'] },
                target: { match: { s1: '의사와 간호사', s2: '편의점 점원', s3: '경찰관' } }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['의사와 간호사', '편의점 점원', '경찰관', '학교 사서'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 밤의 거리 꾸미고 물음 만들기', minutes: 14, tool: 'collage',
            teacher: '"밤에도 문을 연 건물은 창문을 어떻게 나타낼까요?" 파란 밤 바탕에 노랑 네모로 불 켜진 창문을 붙이는 방법을 보여 준다. 다 꾸민 학생은 짝에게 그림 속 건물을 가리키며 "이곳에서 밤에 일하는 분은 언제 잠을 잘까요?"처럼 물음 하나를 말하고, 활동지에 적는다.',
            task: '파란 밤 판에 불 켜진 건물을 꾸미고, 그 그림을 보고 궁금한 것을 물음으로 말해요.',
            levels: {
              easy: { shapes: ['square', 'rect', 'semi', 'star'], colors: ['노랑', '갈색', '하양'], bg: '파랑' },
              base: { shapes: ['square', 'rect', 'semi', 'star', 'triangle', 'circle'], colors: ['노랑', '갈색', '하양', '빨강', '초록'], bg: '파랑' },
              challenge: { bg: '파랑' },
            },
            items: [
              { prompt: '갈색 건물에 노랑 네모 창문을 적어도 세 개 붙여 불 켜진 곳을 만들어 보세요.', state: { pieces: [{ shape: 'rect', color: '갈색', size: 'l', x: 280, y: 240, r: 0 }] }, target: { has: [{ shape: 'square', color: '노랑', min: 3 }] }, difficulty: 0.05 },
              { prompt: '건물 위 밤 하늘에 노랑 반원 달 한 개와 하양 별 적어도 두 개 붙여 보세요.', state: { pieces: [{ shape: 'rect', color: '갈색', size: 'l', x: 280, y: 280, r: 0 }, { shape: 'square', color: '노랑', size: 's', x: 240, y: 280, r: 0 }] }, target: { has: [{ shape: 'semi', color: '노랑', n: 1 }, { shape: 'star', color: '하양', min: 2 }] }, difficulty: 0.15 },
              { prompt: '밤에도 문을 여는 곳 하나를 골라 조각 적어도 다섯 개 써서 꾸미고 점검해 보세요.', target: { selfCheck: ['불 켜진 창문을 붙였어요', '밤 하늘을 꾸몄어요', '그림을 보고 만든 물음을 짝에게 말했어요'], minPieces: 5 }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"오늘 그림을 보고 만든 물음을 읽어 볼까요?" 두세 명의 물음을 \'물음 상자\'에 더한다. 다음 시간에는 지금까지 모은 물음으로 인터뷰 물음 목록을 완성한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '기차역 둘레', slots: ['밤에도 문을 열어요', '밤에는 문을 닫아요'], cards: ['밤 기차를 기다리는 대합실', '오후 6시에 닫는 빵집'] }, prompt: '기차역 둘레의 곳을 나누어 보세요.', target: { sort: { '밤에도 문을 열어요': ['밤 기차를 기다리는 대합실'], '밤에는 문을 닫아요': ['오후 6시에 닫는 빵집'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '밤에 불 켜진 편의점을 보고 만든 물음으로 알맞은 것은?', options: ['편의점은 밝아요.', '밤에 일하는 점원은 언제 주무실까요?', '편의점에 갔어요.'], answer: 1, difficulty: 0.15, explain: '끝에 물음표가 있고 궁금한 것을 묻는 문장이 물음이에요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '밤에도 불이 켜진 곳',
      items: [
        { type: 'check', prompt: '밤에도 문을 여는 곳에 모두 ✓ 하세요.', options: ['병원 응급실', '오후 4시에 닫는 은행', '24시간 편의점', '경찰 지구대'] },
        { type: 'table', prompt: '밤에도 문을 여는 곳과 그곳에서 일하는 사람을 쓰세요.', columns: ['곳', '일하는 사람'], rows: 2 },
        { type: 'short', prompt: '밤에 불 켜진 곳을 보고 궁금한 것을 물음으로 쓰세요.' },
        { type: 'draw', prompt: '밤에도 불이 켜진 우리 동네 건물을 그려 보세요.' },
      ],
      easy: {
        note: '\'밤새\', \'24시간\'이 있으면 밤에도 문을 열어요.',
        items: [
          { type: 'choice', prompt: '밤에도 문을 여는 곳에 ○ 하세요.', options: ['응급실', '학교 도서실'], answer: '응급실' },
          { type: 'short', prompt: '밤에 일하는 사람을 한 명 쓰세요.' },
          { type: 'draw', prompt: '불 켜진 건물을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '판에 모양 네 가지, 색 세 가지만 나와요. 맞는 가지에 초록 테두리가 생겨요.',
      base: '모두 나눈 뒤 확인을 눌러요. 그림을 보고 물음을 하나 말해요.',
      challenge: '관계없는 사람 카드가 섞여 있어요. 그림을 보고 물음을 두 가지 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 가게마다 여는 시간이 같다고 여긴다 → 카드 속 시각을 소리 내어 읽게 한다. ② 그림만 꾸미고 물음을 만들지 않는다 → 점검 셋째 줄을 먼저 읽어 준다. ③ 물음 대신 \'편의점은 밝아요\'처럼 설명을 쓴다 → 끝에 물음표와 묻는 말이 있는지 확인하게 한다.',
  }));

  lessons.push(L(22, {
    title: '인터뷰 물음 목록 완성하기',
    objective: '하루 생활을 알아보는 물음과 여쭈지 않을 개인적인 물음을 가려내고, 물음을 하루 차례로 정리해 인터뷰 목록을 만들 수 있다.',
    illustration: ART('children at a table arranging paper question cards in a row from morning to night, with a small notebook and pencil ready for an interview', '무엇을 여쭈어볼까요?', [
      { motif: 'star', x: 120, y: 96, s: 0.6 }, { motif: 'house', x: 250, y: 214, color: 'peach' }, { motif: 'tree', x: 390, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"물음 상자에 우리가 만든 물음이 가득 찼어요. 이 가운데 인터뷰에서 여쭈면 안 되는 물음도 있을까요?" 학생 생각을 듣는다. 시연 단추로 \'집 주소가 어디예요?\'가 \'여쭈지 않을 물음\' 가지로 가는 모습을 보여 준다. "하루 생활을 알아보는 데 필요 없고, 그분만 알고 싶은 개인적인 것은 묻지 않아요."',
        student: '누군가 나에게 물으면 대답하기 싫은 물음이 있는지 떠올려 봐요.',
        demo: { tool: 'mindmap', options: { topic: '인터뷰 물음', slots: ['여쭈어볼 물음', '여쭈지 않을 물음'], cards: ['집 주소가 어디예요?'], shuffle: false }, sequence: [{ sort: { '여쭈어볼 물음': [], '여쭈지 않을 물음': ['집 주소가 어디예요?'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 여쭈어볼 물음 가려내기', minutes: 12, tool: 'mindmap',
            teacher: '"이 물음의 대답을 들으면 그분의 하루를 알 수 있나요?" 카드마다 묻는다. 주소·전화번호·돈처럼 개인적인 것은 하루를 아는 데 필요 없고, 물으면 그분이 불편할 수 있다는 것을 짚는다. 나와 친구의 개인정보도 같은 까닭으로 지킨다는 것을 덧붙인다.',
            task: '물음 카드를 인터뷰에서 여쭈어볼 물음과 여쭈지 않을 물음으로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '네 물음을 나누어 보세요.', toolOptions: { topic: '인터뷰 물음', slots: ['여쭈어볼 물음', '여쭈지 않을 물음'], cards: ['몇 시에 일을 시작하세요?', '집 주소가 어디예요?', '가장 바쁜 때는 언제예요?', '전화번호를 알려 주세요.'] },
                target: { sort: { '여쭈어볼 물음': ['몇 시에 일을 시작하세요?', '가장 바쁜 때는 언제예요?'], '여쭈지 않을 물음': ['집 주소가 어디예요?', '전화번호를 알려 주세요.'] } }, difficulty: 0.05 },
              { prompt: '다섯 물음을 나누어 보세요.', toolOptions: { topic: '인터뷰 물음', slots: ['여쭈어볼 물음', '여쭈지 않을 물음'], cards: ['점심은 언제 드세요?', '한 달에 돈을 얼마나 버세요?', '일을 마치면 무엇을 하세요?', '통장 비밀번호가 뭐예요?', '왜 이 일을 하게 되셨어요?'] },
                target: { sort: { '여쭈어볼 물음': ['점심은 언제 드세요?', '일을 마치면 무엇을 하세요?', '왜 이 일을 하게 되셨어요?'], '여쭈지 않을 물음': ['한 달에 돈을 얼마나 버세요?', '통장 비밀번호가 뭐예요?'] } }, difficulty: 0.15 },
              { prompt: '조리사 선생님께 여쭈어볼 물음만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '조리사 선생님께', cards: ['급식은 몇 시부터 만드세요?', '하루에 밥을 몇 그릇이나 푸세요?', '어젯밤에 무슨 꿈을 꾸셨어요?', '휴대 전화를 보여 주세요.'] },
                target: { pick: ['급식은 몇 시부터 만드세요?', '하루에 밥을 몇 그릇이나 푸세요?'] }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['급식은 몇 시부터 만드세요?', '하루에 밥을 몇 그릇이나 푸세요?', '어젯밤에 무슨 꿈을 꾸셨어요?', '휴대 전화를 보여 주세요.', '집 현관 비밀번호가 뭐예요?'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 물음을 하루 차례로 정리하기', minutes: 14, tool: 'story', pair: true,
            teacher: '"물음을 하루 차례대로 여쭈면 대답을 받아 적기 쉬워요. 아침에 일어나는 것부터 볼까요?" 물음 카드를 하루 차례로 놓게 한다. 대답을 놓쳤을 때 쓰는 말도 함께 익힌다. 마지막에 짝과 한 사람은 인터뷰하는 사람, 한 사람은 대답하는 사람이 되어 물음 목록으로 연습 인터뷰를 한다.',
            task: '물음을 하루 차례대로 놓고, 대답을 놓쳤을 때 쓰는 말을 익힌 뒤 짝과 연습 인터뷰를 해요.',
            levels: CARD_LV,
            items: [
              { prompt: '물음을 하루 차례대로 놓아 보세요.', toolOptions: { hint1: '물음마다 하루 가운데 언제 일을 묻는지 찾아요. 하루를 아침에 일어날 때부터 차례로 떠올려 견주어 놓아요.', cards: [{ id: 'lunch', text: '점심은 언제 드세요?', motif: 'sun' }, { id: 'wake', text: '몇 시에 일어나세요?', motif: 'star' }, { id: 'end', text: '일은 몇 시에 끝나요?', motif: 'moon' }, { id: 'start', text: '몇 시에 일을 시작하세요?', motif: 'house' }] },
                target: { order: ['wake', 'start', 'lunch', 'end'] }, difficulty: 0.15 },
              { prompt: '대답을 잘 못 들었을 때 하는 말의 빈칸을 채워 보세요.', toolOptions: { mode: 'fill', cards: ['한 번 더', '빨리', '크게 좀'], slots: [{ id: 'b1', who: '하준', motif: 'flower', label: '죄송하지만, ___ 말씀해 주시겠어요?' }] },
                target: { fill: { b1: '한 번 더' } }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['한 번 더', '빨리', '크게 좀', '다시 말해 봐'] } } } },
              { prompt: '짝과 역할을 나누어 물음 목록으로 연습 인터뷰를 하고, 대답을 한 줄씩 받아 적었으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"연습 인터뷰에서 대답을 받아 적기 어려웠던 때는 언제였나요?" 짧게 적는 방법(시각과 한 일만 적기)을 알려 준다. 모둠별 물음 목록을 활동지에 옮겨 적고, 다음 시간 전까지 담임이 약속한 시간에 모둠이 실제 인터뷰를 다녀온다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '인터뷰 물음', slots: ['여쭈어볼 물음', '여쭈지 않을 물음'], cards: ['밤에는 몇 시에 퇴근하세요?', '사는 아파트가 몇 동이에요?'] }, prompt: '경비원께 드릴 물음을 나누어 보세요.', target: { sort: { '여쭈어볼 물음': ['밤에는 몇 시에 퇴근하세요?'], '여쭈지 않을 물음': ['사는 아파트가 몇 동이에요?'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '인터뷰에서 대답을 놓쳤을 때 알맞은 말은?', options: ['"다시 말해 봐요"', '"죄송하지만 한 번 더 말씀해 주시겠어요?"', '아무 말 없이 넘어가요'], answer: 1, difficulty: 0.1, explain: '높임말로 정중하게 한 번 더 부탁해요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '우리 모둠 인터뷰 물음 목록',
      items: [
        { type: 'table', prompt: '여쭈어볼 물음을 하루 차례로 쓰고, 인터뷰 때 대답을 받아 적으세요.', columns: ['차례', '물음', '대답'], cells: [['1', '', ''], ['2', '', ''], ['3', '', ''], ['4', '', '']] },
        { type: 'check', prompt: '여쭈지 않을 물음에 모두 ✓ 하세요.', options: ['집 주소', '일을 시작하는 시각', '전화번호', '점심 먹는 때'] },
        { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '죄송하지만, ___ 말씀해 주시겠어요?', answer: '한 번 더' },
        { type: 'short', prompt: '인터뷰할 분을 쓰세요.' },
      ],
      easy: {
        note: '하루를 아는 데 필요한 것만 여쭈어요.',
        items: [
          { type: 'choice', prompt: '여쭈어볼 물음에 ○ 하세요.', options: ['몇 시에 일을 시작하세요?', '집 주소가 어디예요?'], answer: '몇 시에 일을 시작하세요?' },
          { type: 'short', prompt: '여쭈어볼 물음을 하나 쓰세요.' },
          { type: 'draw', prompt: '인터뷰하는 내 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고 틀리면 카드가 돌아와요.',
      base: '모두 나눈 뒤 확인을 눌러요. 물음 목록을 네 개 만들어요.',
      challenge: '반말 카드가 더 섞여 있어요. 물음 목록에 \'왜\' 물음을 하나 넣어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 개인적인 것(주소·돈·나이)을 묻고 싶어 한다 → 하루를 아는 데 필요한지, 그분이 불편하지 않을지 묻는다. ② 물음을 생각나는 대로 늘어놓는다 → 하루 차례로 놓으면 받아 적기 쉽다는 것을 연습 인터뷰로 느끼게 한다. ③ 대답을 다 받아 적으려다 놓친다 → 시각과 한 일만 짧게 적게 한다. 실제 인터뷰는 담임이 그분과 시간을 약속하고 모둠이 함께 간다.',
  }));

  // ───────────────────────── 23~27차시: 사람들의 하루 읽기(관찰과 자료 읽기) ─────────────────────────

  lessons.push(L(23, {
    title: '조리사 선생님의 하루를 차례로 놓고 시각 읽기',
    objective: '인터뷰 기록을 읽고 조리사 선생님의 하루를 시간 차례로 놓으며, 일을 하는 시각을 시계로 나타낼 수 있다.',
    illustration: ART('school cooks in white caps washing vegetables in the morning, cooking big pots, and serving lunch trays to children, with a wall clock above', '조리사 선생님의 하루', [
      { motif: 'house', x: 120, y: 214, color: 'mint' }, { motif: 'flower', x: 250, y: 228 }, { motif: 'tree', x: 390, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '한 모둠이 다녀온 인터뷰 기록(예시)을 읽어 준다. "조리사 선생님은 아침 7시 30분에 학교에 오세요. 재료를 씻고 다듬은 뒤 10시부터 밥과 반찬을 만드세요. 12시에 우리에게 급식을 나누어 주시고, 1시 30분부터 설거지와 청소를 하세요. 오후 3시에 집에 가세요." 시연 단추로 시간 띠에 \'재료를 씻어요\'와 \'급식을 나누어 줘요\'가 차례대로 놓이는 모습을 보여 준다.',
        student: '인터뷰 기록을 들으며 조리사 선생님이 하신 일을 손가락으로 꼽아 봐요.',
        demo: { tool: 'timeline', options: { axis: ['아침', '오후'], cards: ['재료를 씻어요', '급식을 나누어 줘요'], shuffle: false }, sequence: [{ order: ['재료를 씻어요', '급식을 나누어 줘요'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 인터뷰 기록을 시간 띠에 놓기', minutes: 13, tool: 'timeline',
            teacher: '"기록에서 \'10시부터\', \'12시에\'처럼 시각을 알려 주는 말에 밑줄을 그어 볼까요?" 활동지 기록에 밑줄을 그은 뒤 카드를 놓게 한다. 우리가 급식을 먹는 12시만 떠올리고 조리사 선생님이 그 전부터 일하신 것을 놓치는 학생에게 "밥은 언제부터 만드셨지요?" 하고 기록을 다시 짚는다.',
            task: '기록: 아침 7시 30분 학교에 와요 → 재료를 씻고 다듬어요 → 10시부터 밥과 반찬을 만들어요 → 12시 급식을 나누어 줘요 → 1시 30분 설거지와 청소 → 오후 3시 집에 가요. 기록을 읽고 하신 일을 시간 띠에 차례대로 놓아요.',
            levels: DAY_LV,
            items: [
              { prompt: '조리사 선생님의 일을 차례대로 놓아 보세요.', toolOptions: { axis: ['아침', '오후'], cards: ['급식을 나누어 줘요', '재료를 씻고 다듬어요', '밥과 반찬을 만들어요'] },
                target: { order: ['재료를 씻고 다듬어요', '밥과 반찬을 만들어요', '급식을 나누어 줘요'] }, difficulty: 0.05 },
              { prompt: '출근부터 퇴근까지 다섯 장을 차례대로 놓아 보세요.', toolOptions: { axis: ['아침', '오후'], cards: ['설거지와 청소를 해요', '아침 7시 30분에 학교에 와요', '12시에 급식을 나누어 줘요', '오후 3시에 집에 가요', '10시부터 밥과 반찬을 만들어요'] },
                target: { order: ['아침 7시 30분에 학교에 와요', '10시부터 밥과 반찬을 만들어요', '12시에 급식을 나누어 줘요', '설거지와 청소를 해요', '오후 3시에 집에 가요'] }, difficulty: 0.15 },
              { prompt: '시각 눈금마다 조리사 선생님이 하시는 일을 놓아 보세요.', toolOptions: { mode: 'match', axis: ['아침', '오후'], slots: [{ id: 't1', label: '아침 7시 30분' }, { id: 't2', label: '낮 12시' }, { id: 't3', label: '오후 1시 30분' }], cards: ['학교에 와요', '설거지를 해요', '급식을 나누어 줘요'] },
                target: { match: { t1: '학교에 와요', t2: '급식을 나누어 줘요', t3: '설거지를 해요' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['학교에 와요', '설거지를 해요', '급식을 나누어 줘요', '잠자리에 들어요'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 일하는 시각을 시계로 나타내기', minutes: 14, tool: 'clock',
            teacher: '"12시에는 긴바늘과 짧은바늘이 어디를 가리킬까요?" 수학 시간에 배운 \'몇 시\', \'몇 시 30분\'을 떠올리게 한다. 30분을 만들 때 짧은바늘을 숫자에 딱 맞추는 학생에게 "30분이면 짧은바늘은 두 숫자 사이 가운데쯤이에요" 하고 짚는다.',
            task: '기록: 아침 7시 30분 학교에 와요 → 재료를 씻고 다듬어요 → 10시부터 밥과 반찬을 만들어요 → 12시 급식을 나누어 줘요 → 1시 30분 설거지와 청소 → 오후 3시 집에 가요. 기록 속 시각을 시계에 나타내거나 읽어요.',
            levels: {
              easy: { minuteStep: 30, showMinuteNumbers: true, hourZone: true },
              base: { minuteStep: 30 },
              challenge: { minuteStep: 5 },
            },
            items: [
              { prompt: '조리사 선생님은 12시에 급식을 나누어 주세요. 12시를 만들어 보세요.', state: { h: 9, m: 0 }, target: { h: 12, m: 0 }, difficulty: 0.05 },
              { prompt: '조리사 선생님은 오후 3시에 집에 가세요. 3시를 만들어 보세요.', state: { h: 12, m: 0 }, target: { h: 3, m: 0 }, difficulty: 0.1 },
              { prompt: '조리사 선생님은 아침 7시 30분에 학교에 오세요. 7시 30분을 만들어 보세요.', state: { h: 6, m: 0 }, target: { h: 7, m: 30 }, difficulty: 0.2 },
              { prompt: '시계를 보고 설거지를 시작하시는 시각을 골라 보세요.', state: { h: 1, m: 30 }, toolOptions: { readOnly: true, choices: ['1시 30분', '2시 30분', '6시 5분'] }, target: { pick: 0, h: 1, m: 30 }, difficulty: 0.15 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"조리사 선생님은 우리가 학교에 오기 전부터 일을 시작하셨어요. 우리 하루와 무엇이 달랐나요?" 짧게 이야기를 나눈다. 우리 모둠의 인터뷰 기록도 같은 방법으로 시간 띠에 정리해 오게 한다. 다음 시간에는 낮에 일하는 사람과 밤에 일하는 사람을 나누어 본다.',
        exitTicket: [
          { type: 'tool', tool: 'timeline', options: { axis: ['아침', '오후'], cards: ['반납된 책을 꽂아요', '아침 8시 30분에 도서실 문을 열어요', '오후 4시에 문을 닫아요'] }, prompt: '사서 선생님의 하루 기록이에요. 차례대로 놓아 보세요.', target: { order: ['아침 8시 30분에 도서실 문을 열어요', '반납된 책을 꽂아요', '오후 4시에 문을 닫아요'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '조리사 선생님이 우리보다 먼저 학교에 오시는 까닭은?', options: ['급식을 미리 만들어야 해서', '학교가 가까워서', '수업을 들으려고'], answer: 0, difficulty: 0.1, explain: '12시에 먹는 급식을 만들려면 아침부터 준비해야 해요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '조리사 선생님의 하루',
      items: [
        { type: 'table', prompt: '기록: 아침 7시 30분 학교에 와요 → 재료를 씻고 다듬어요 → 10시부터 밥과 반찬을 만들어요 → 12시 급식을 나누어 줘요 → 1시 30분 설거지와 청소 → 오후 3시 집에 가요. 기록을 읽고 시각마다 하신 일을 쓰세요.', columns: ['시각', '하신 일'], cells: [['아침 7시 30분', ''], ['10시', ''], ['낮 12시', ''], ['오후 3시', '']] },
        { type: 'figure', prompt: '시계에 12시를 그려 넣으세요.', tool: 'clock', options: { hideHands: true }, figures: [{ state: { h: 12, m: 0 }, caption: '12시' }], answer: '긴바늘 12, 짧은바늘 12' },
        { type: 'choice', prompt: '조리사 선생님이 설거지를 하시는 때에 ○ 하세요.', options: ['급식을 나누어 준 뒤', '학교에 오시기 전'], answer: '급식을 나누어 준 뒤' },
        { type: 'short', prompt: '우리 모둠이 인터뷰한 분이 가장 먼저 하시는 일을 쓰세요.' },
      ],
      easy: {
        note: '기록: 아침 7시 30분 학교에 와요 → 재료를 씻고 다듬어요 → 10시부터 밥과 반찬을 만들어요 → 12시 급식을 나누어 줘요 → 1시 30분 설거지와 청소 → 오후 3시 집에 가요. 시각에 밑줄을 그어 보세요.',
        items: [
          { type: 'choice', prompt: '급식을 나누어 주시는 시각에 ○ 하세요.', options: ['12시', '밤 9시'], answer: '12시' },
          { type: 'choice', prompt: '먼저 하시는 일에 ○ 하세요.', options: ['재료 씻기', '설거지'], answer: '재료 씻기' },
          { type: 'draw', prompt: '조리사 선생님이 일하시는 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 초록 테두리가 생겨요. 시계에 5·10·15… 분 숫자와 짧은바늘 자리가 보여요.',
      base: '시간 띠에 카드를 놓고, 30분 단위로 시계를 만들어요.',
      challenge: '카드가 다섯 장이고 함정 카드가 섞여 있어요. 시계는 5분 단위로 움직여요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 급식 먹는 12시에만 조리사 선생님이 일하신다고 여긴다 → 기록에서 7시 30분과 10시를 다시 찾게 한다. ② 30분에서 짧은바늘을 숫자에 맞춘다 → 두 숫자 사이 가운데라는 것을 짚는다. ③ 시각 낱말(오전·오후)을 헷갈린다 → \'아침\', \'낮\', \'오후\' 같은 말로 바꾸어 읽는다. 인터뷰 기록은 예시이므로, 우리 학교 분의 실제 기록으로 바꾸어 써도 된다.',
  }));

  lessons.push(L(24, {
    title: '낮에 일하는 사람과 밤에 일하는 사람 나누기',
    objective: '여러 사람이 일하는 때를 읽고 주로 낮에 일하는 사람과 밤에 일하는 사람으로 나누며, 밤에도 일하는 사람이 있음을 말할 수 있다.',
    illustration: ART('a paper scene split into day and night: a mail carrier and a teacher under the sun, a nurse, a security guard and a firefighter under the moon', '언제 일하는 사람일까요?', [
      { motif: 'house', x: 120, y: 214, color: 'buttercup' }, { motif: 'house', x: 360, y: 216, color: 'lavender' }, { motif: 'moon', x: 300, y: 80, s: 0.5 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"밤 12시에 우리 동네에서 일하는 사람이 있을까요?" 손을 들어 \'있다\', \'없다\'를 정하게 하고 수를 칠판에 적는다. 시연 단추로 \'밤새 환자를 돌보는 간호사\' 카드가 \'밤에 일해요\' 가지에 들어가는 모습을 보여 준다. 처음 투표 결과는 차시 끝에 다시 본다.',
        student: '내가 잠잘 때 일하는 사람이 있을지 생각해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '언제 일할까?', slots: ['주로 낮에 일해요', '밤에 일해요'], cards: ['밤새 환자를 돌보는 간호사'], shuffle: false }, sequence: [{ sort: { '주로 낮에 일해요': [], '밤에 일해요': ['밤새 환자를 돌보는 간호사'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 일하는 때로 나누기', minutes: 13, tool: 'mindmap',
            teacher: '"카드에서 \'밤새\', \'밤 12시\', \'오후\'처럼 일하는 때를 알려 주는 말을 찾아요." 직업 이름만 보고 나누는 학생에게 "간호사는 낮에도 밤에도 일해요. 이 카드의 간호사는 언제 일한다고 적혀 있나요?" 하고 글을 다시 읽게 한다. 경찰관·소방관·간호사처럼 낮과 밤을 나누어 번갈아 일하는 사람이 많다는 것도 알려 준다.',
            task: '카드에 적힌 일하는 때를 읽고, 주로 낮에 일하는 사람과 밤에 일하는 사람으로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '네 사람을 일하는 때로 나누어 보세요.', toolOptions: { topic: '언제 일할까?', slots: ['주로 낮에 일해요', '밤에 일해요'], cards: ['아침 9시에 문을 여는 우체국 직원', '밤새 환자를 돌보는 간호사', '낮에 수업하는 선생님', '밤에 건물을 지키는 경비원'] },
                target: { sort: { '주로 낮에 일해요': ['아침 9시에 문을 여는 우체국 직원', '낮에 수업하는 선생님'], '밤에 일해요': ['밤새 환자를 돌보는 간호사', '밤에 건물을 지키는 경비원'] } }, difficulty: 0.05 },
              { prompt: '다섯 사람을 일하는 때로 나누어 보세요.', toolOptions: { topic: '언제 일할까?', slots: ['주로 낮에 일해요', '밤에 일해요'], cards: ['밤 12시에 불을 끄러 나간 소방관', '밤에 손님을 맞는 편의점 점원', '낮에 버스를 운전하는 기사님', '오후에 책을 빌려주는 사서', '밤하늘 별을 살피는 천문대 연구원'] },
                target: { sort: { '주로 낮에 일해요': ['낮에 버스를 운전하는 기사님', '오후에 책을 빌려주는 사서'], '밤에 일해요': ['밤 12시에 불을 끄러 나간 소방관', '밤에 손님을 맞는 편의점 점원', '밤하늘 별을 살피는 천문대 연구원'] } }, difficulty: 0.15 },
              { prompt: '내가 잠자는 밤 12시에 일하고 있는 사람만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '밤 12시에 일해요', cards: ['밤새 순찰하는 경찰관', '오후 5시에 퇴근한 은행원', '새벽까지 환자를 돌보는 의사', '저녁 6시에 문을 닫은 꽃집 주인'] },
                levels: { challenge: { toolOptions: { cards: ['밤새 순찰하는 경찰관', '오후 5시에 퇴근한 은행원', '새벽까지 환자를 돌보는 의사', '저녁 6시에 문을 닫은 꽃집 주인', '오후 4시에 수업을 마친 선생님'] } } },
                target: { pick: ['밤새 순찰하는 경찰관', '새벽까지 환자를 돌보는 의사'] }, difficulty: 0.15,
                predict: { q: '밤 12시에도 일하는 사람이 있을까요?', options: ['있어요', '아무도 없어요'], answer: 0 },
                conclude: '모두 잠든 밤에도 우리를 지키고 돌보는 사람들이 일하고 있어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 밤에 일하는 사람 덕분에', minutes: 14, tool: 'emotion',
            teacher: '"밤에 갑자기 아플 때 응급실에 아무도 없다면 어떨까요?" 밤에 일하는 사람 덕분에 생기는 마음을 고르게 한다. 밤에 일하는 사람을 \'힘들어서 불쌍하다\'로만 말하는 학생에게 "그분 덕분에 누가 편해졌나요?" 하고 묻는다.',
            task: '밤에 일하는 사람 덕분에 생기는 일을 읽고 마음을 고르거나, 어떻게 할지 골라요.',
            levels: SCALE_LV,
            items: [
              { prompt: '밤에 동생이 아팠던 두 장면에 어울리는 마음 카드를 놓아 보세요.', toolOptions: { cards: ['편안함', '걱정', '신남'], slots: [{ id: 's1', label: '밤에 동생이 열이 나요' }, { id: 's2', label: '응급실 의사 선생님이 동생을 치료해 주셨어요' }] },
                target: { match: { s1: '걱정', s2: '편안함' } }, difficulty: 0.05,
                levels: { challenge: { toolOptions: { cards: ['편안함', '걱정', '신남', '심심함', '미안함'] } } } },
              { prompt: '밤새 순찰하는 경찰관 덕분에 마음 놓고 잘 수 있어요. 편안한 마음의 크기를 골라 보세요.', toolOptions: { mode: 'scale', situation: '밤에 바람 소리가 무서웠는데, 창밖에 순찰차 불빛이 지나가는 것을 보았어요.', feeling: '편안함', after: '밤에 일하는 분들 덕분에 우리는 마음 놓고 잘 수 있어요.' }, target: { level: [3, 5] }, difficulty: 0.1,
                levels: { easy: { prompt: '순찰하는 경찰관 덕분에 마음 놓고 잘 수 있어요. 편안한 마음을 세 칸에서 골라 보세요.', target: { level: [2, 3] } } } },
              { prompt: '밤늦게 편의점에서 일하는 점원께 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '저녁 늦게 가족과 편의점에 갔어요. 점원이 피곤해 보이지만 웃으며 계산해 주세요.', choices: [
                { id: 'thanks', text: '"감사합니다" 하고 인사해요', result: '점원이 "고마워" 하며 더 환하게 웃어요.', mood: '기쁨' },
                { id: 'rush', text: '"빨리요" 하고 재촉해요', result: '점원이 서두르다 물건을 떨어뜨렸어요.', mood: '속상함', why: '밤늦게까지 일하는 분께 어떤 말이 힘이 될까요?' }] }, target: { choice: 'thanks' }, difficulty: 0.05 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"차시를 시작할 때 \'밤 12시에 일하는 사람은 없다\'에 손을 든 친구가 있었어요. 지금은 어떻게 생각하나요?" 처음 투표와 견주어 본다. 다음 시간에는 밤에 일하는 소방관의 하루를 자세히 읽어 본다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '언제 일할까?', slots: ['주로 낮에 일해요', '밤에 일해요'], cards: ['밤에 배달 짐을 나르는 택배 기사', '낮에 아이들을 돌보는 어린이집 선생님'] }, prompt: '두 사람을 일하는 때로 나누어 보세요.', target: { sort: { '주로 낮에 일해요': ['낮에 아이들을 돌보는 어린이집 선생님'], '밤에 일해요': ['밤에 배달 짐을 나르는 택배 기사'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '밤에 대해 알맞은 말은?', options: ['밤에는 아무도 일하지 않아요', '밤에도 우리를 위해 일하는 사람이 있어요', '밤에는 병원도 모두 문을 닫아요'], answer: 1, difficulty: 0.1, explain: '간호사·경찰관·소방관처럼 밤에도 일하는 사람이 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '낮에 일해요, 밤에 일해요',
      items: [
        { type: 'table', prompt: '일하는 때로 나누어 쓰세요.', columns: ['주로 낮에 일해요', '밤에 일해요'], rows: 3 },
        { type: 'choice', prompt: '밤 12시에 일하고 있는 사람에 ○ 하세요.', options: ['밤새 순찰하는 경찰관', '오후 5시에 퇴근한 은행원'], answer: '밤새 순찰하는 경찰관' },
        { type: 'short', prompt: '밤에 일하는 사람 덕분에 좋은 점을 쓰세요.' },
        { type: 'draw', prompt: '내가 잠잘 때 일하는 사람을 그려 보세요.' },
      ],
      easy: {
        note: '카드에서 \'밤\', \'낮\'이라는 말을 찾아요.',
        items: [
          { type: 'choice', prompt: '밤에 일하는 사람에 ○ 하세요.', options: ['밤새 환자를 돌보는 간호사', '낮에 수업하는 선생님'], answer: '밤새 환자를 돌보는 간호사' },
          { type: 'short', prompt: '밤에 일하는 사람을 한 명 쓰세요.' },
          { type: 'draw', prompt: '그 사람을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 가지에 초록 테두리가 생겨요. 마음 크기는 세 칸이에요.',
      base: '모두 나눈 뒤 확인을 눌러요. 카드에서 때를 알려 주는 말을 찾아요.',
      challenge: '카드가 다섯 장이에요. 밤에 일하는 사람 덕분에 좋은 점을 두 가지 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 밤에는 아무도 일하지 않는다고 여긴다(이 부분의 핵심 오개념) → 처음 투표와 차시 끝 생각을 견주게 한다. ② 직업 이름만으로 나눈다 → 같은 직업도 낮·밤을 번갈아 일한다는 것을 짚고 카드 속 때를 읽게 한다. ③ 밤에 일하는 사람을 불쌍하게만 여긴다 → 그 덕분에 편해진 사람을 찾게 한다.',
  }));

  lessons.push(L(25, {
    title: '밤에 일하는 소방관의 하루 읽기',
    objective: '밤에 일하는 날 소방관의 하루 기록을 읽고 일한 차례와 때를 정리하며, 기록 속 시각을 시계로 읽을 수 있다.',
    illustration: ART('a fire station at night with a red fire truck leaving under the moon, firefighters checking hoses, and the same firefighter sleeping at home in the daytime', '소방관의 밤과 낮', [
      { motif: 'house', x: 120, y: 214, color: 'rose' }, { motif: 'tree', x: 250, y: 214 }, { motif: 'house', x: 380, y: 216, color: 'buttercup' }], true),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '소방관 인터뷰 기록(예시)을 읽어 준다. "밤에 일하는 날에는 저녁 6시에 소방서에 와요. 먼저 소방차와 장비를 살펴요. 밤 11시에 불이 났다는 신고가 와서 출동했어요. 새벽에 돌아와 젖은 장비를 닦았어요. 아침 9시에 다음 소방관에게 일을 넘기고 집에 가요. 그리고 낮에 잠을 자요." 시연 단추로 \'소방서에 와요\'와 \'출동해요\'가 시간 띠에 놓이는 모습을 보여 준다. "소방관은 언제 잠을 잘까요?"',
        student: '기록을 들으며 소방관이 잠을 자는 때를 찾아봐요.',
        demo: { tool: 'timeline', options: { axis: ['저녁', '다음 날'], cards: ['저녁 6시에 소방서에 와요', '밤 11시에 출동해요'], shuffle: false }, sequence: [{ order: ['저녁 6시에 소방서에 와요', '밤 11시에 출동해요'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 소방관의 하루를 차례로 놓기', minutes: 13, tool: 'timeline',
            teacher: '"이 하루는 저녁에 시작해서 다음 날 낮에 끝나요. 시간 띠 왼쪽 끝이 저녁이에요." 시작이 아침이 아니라는 것을 손으로 짚어 보인다. 잠자기를 맨 앞에 놓는 학생에게 "소방관은 밤새 일한 뒤에 잠을 잤지요?" 하고 기록을 다시 읽게 한다.',
            task: '기록: 저녁 6시 소방서에 와요 → 소방차와 장비를 살펴요 → 밤 11시 출동해요 → 새벽에 젖은 장비를 닦아요 → 아침 9시 일을 넘기고 집에 가요 → 낮에 잠을 자요. 기록을 읽고 일한 차례대로 놓거나 때에 따라 나누어요.',
            levels: DAY_LV,
            items: [
              { prompt: '소방관의 하루를 차례대로 놓아 보세요.', toolOptions: { axis: ['저녁', '다음 날'], cards: ['아침 9시에 집에 가요', '저녁 6시에 소방서에 와요', '밤 11시에 출동해요'] },
                target: { order: ['저녁 6시에 소방서에 와요', '밤 11시에 출동해요', '아침 9시에 집에 가요'] }, difficulty: 0.05 },
              { prompt: '다섯 장을 차례대로 놓아 보세요.', toolOptions: { axis: ['저녁', '다음 날'], cards: ['새벽에 젖은 장비를 닦아요', '낮에 집에서 잠을 자요', '소방차와 장비를 살펴요', '밤 11시에 출동해요', '아침 9시에 일을 넘겨요'] },
                target: { order: ['소방차와 장비를 살펴요', '밤 11시에 출동해요', '새벽에 젖은 장비를 닦아요', '아침 9시에 일을 넘겨요', '낮에 집에서 잠을 자요'] }, difficulty: 0.15 },
              { prompt: '소방관이 한 일을 일한 때와 쉰 때로 나누어 보세요.', toolOptions: { mode: 'sort', axis: ['저녁', '다음 날'], slots: ['밤새 일했어요', '낮에 쉬었어요'], cards: ['불을 끄러 출동했어요', '집에서 잠을 잤어요', '장비를 닦았어요', '가족과 점심을 먹었어요'] },
                target: { sort: { '밤새 일했어요': ['불을 끄러 출동했어요', '장비를 닦았어요'], '낮에 쉬었어요': ['집에서 잠을 잤어요', '가족과 점심을 먹었어요'] } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['불을 끄러 출동했어요', '집에서 잠을 잤어요', '장비를 닦았어요', '가족과 점심을 먹었어요', '학교에서 받아쓰기를 했어요'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 기록 속 시각 읽기', minutes: 14, tool: 'clock',
            teacher: '"시계를 보고 소방관이 무엇을 하는 시각인지 기록에서 찾아봐요." 짧은바늘부터 읽게 한다. 밤 11시와 낮 11시가 시계로는 같다는 것을 묻는 학생에게 "시계는 같아요. 그래서 기록에 \'밤\', \'아침\'을 함께 적어요" 하고 짚는다.',
            task: '기록: 저녁 6시 소방서에 와요 → 소방차와 장비를 살펴요 → 밤 11시 출동해요 → 새벽에 젖은 장비를 닦아요 → 아침 9시 일을 넘기고 집에 가요 → 낮에 잠을 자요. 기록 속 시각을 시계에서 고르거나 만들어요.',
            levels: {
              easy: { hourZone: true, showMinuteNumbers: true, minuteStep: 30 },
              base: { minuteStep: 30 },
              challenge: { minuteStep: 5 },
            },
            items: [
              { prompt: '시계를 보고 소방관이 소방서에 오는 시각을 골라 보세요.', state: { h: 6, m: 0 }, toolOptions: { readOnly: true, choices: ['12시 30분', '6시', '9시'] }, target: { pick: 1, h: 6, m: 0 }, difficulty: 0.05 },
              { prompt: '소방관은 밤 11시에 출동했어요. 11시를 만들어 보세요.', state: { h: 6, m: 0 }, target: { h: 11, m: 0 }, difficulty: 0.1 },
              { prompt: '소방관은 아침 9시에 일을 넘기고 집에 가요. 9시를 만들어 보세요.', state: { h: 3, m: 0 }, target: { h: 9, m: 0 }, difficulty: 0.1 },
              { prompt: '소방관은 새벽 4시 30분에 장비를 다 닦았어요. 4시 30분을 만들어 보세요.', state: { h: 2, m: 0 }, target: { h: 4, m: 30 }, difficulty: 0.2 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"소방관이 낮에 잠을 자는 까닭은 무엇일까요?" 기록에서 밤새 일했다는 것을 근거로 말하게 한다. 다음 시간에는 새벽에 일하는 사람들의 하루를 알아본다.',
        exitTicket: [
          { type: 'tool', tool: 'timeline', options: { axis: ['저녁', '다음 날'], cards: ['아침 8시에 집에 가요', '밤 10시에 순찰차를 타요', '저녁 7시에 지구대에 와요'] }, prompt: '밤에 일하는 경찰관의 기록이에요. 차례대로 놓아 보세요.', target: { order: ['저녁 7시에 지구대에 와요', '밤 10시에 순찰차를 타요', '아침 8시에 집에 가요'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '밤에 일한 소방관이 낮에 잠을 자는 까닭은?', options: ['게을러서', '밤새 일해서 쉬어야 해서', '낮에는 불이 안 나서'], answer: 1, difficulty: 0.1, explain: '밤새 일했기 때문에 낮에 잠을 자며 쉬어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '소방관의 밤과 낮',
      items: [
        { type: 'table', prompt: '기록: 저녁 6시 소방서에 와요 → 소방차와 장비를 살펴요 → 밤 11시 출동해요 → 새벽에 젖은 장비를 닦아요 → 아침 9시 일을 넘기고 집에 가요 → 낮에 잠을 자요. 기록을 읽고 시각마다 한 일을 쓰세요.', columns: ['시각', '한 일'], cells: [['저녁 6시', ''], ['밤 11시', ''], ['아침 9시', ''], ['낮', '']] },
        { type: 'figure', prompt: '시계를 보고 소방관이 무엇을 하는 시각인지 쓰세요.', tool: 'clock', options: { readOnly: true }, figures: [{ state: { h: 11, m: 0 }, caption: '밤 (    )시: ________' }], answer: '11시, 출동해요' },
        { type: 'choice', prompt: '소방관이 잠을 자는 때에 ○ 하세요.', options: ['다음 날 낮', '밤 11시'], answer: '다음 날 낮' },
        { type: 'short', prompt: '소방관에게 묻고 싶은 것을 하나 쓰세요.' },
      ],
      easy: {
        note: '이 하루는 저녁에 시작해요. 기록: 저녁 6시 소방서에 와요 → 소방차와 장비를 살펴요 → 밤 11시 출동해요 → 새벽에 젖은 장비를 닦아요 → 아침 9시 일을 넘기고 집에 가요 → 낮에 잠을 자요.',
        items: [
          { type: 'choice', prompt: '소방관이 출동한 때에 ○ 하세요.', options: ['밤', '낮'], answer: '밤' },
          { type: 'choice', prompt: '소방관이 잠을 잔 때에 ○ 하세요.', options: ['낮', '밤 11시'], answer: '낮' },
          { type: 'draw', prompt: '밤에 출동하는 소방차를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 초록 테두리가 생겨요. 시계에 분 숫자와 짧은바늘 자리가 보여요.',
      base: '시간 띠에 카드를 놓고, 시계를 30분 단위로 만들어요.',
      challenge: '함정 카드가 섞여 있어요. 시계는 5분 단위로 움직여요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 하루는 아침에 시작한다고 여겨 저녁 카드를 뒤에 놓는다 → 시간 띠 왼쪽 끝이 저녁이라는 것을 다시 짚는다. ② 낮에 자는 것을 게으르다고 말한다 → 밤새 일한 기록을 근거로 다시 생각하게 한다(28차시에서 더 다룬다). ③ 밤 11시와 낮 11시를 시계로 구분하려 한다 → 시계는 같고 \'밤\', \'낮\'을 말로 붙인다고 알려 준다. 기록은 예시이며, 실제 소방서의 근무 방식은 곳마다 다르다.',
  }));

  lessons.push(L(26, {
    title: '새벽에 일하는 사람들의 하루 알아보기',
    objective: '새벽·낮·밤에 일하는 사람을 때에 따라 나누고, 새벽에 일하는 환경미화원의 하루를 차례대로 놓을 수 있다.',
    illustration: ART('a dim blue dawn street where a street cleaner sweeps leaves, a baker pulls bread from an oven in a lit window, and a milk delivery person walks by', '새벽에 일하는 사람들', [
      { motif: 'house', x: 120, y: 214, color: 'sky' }, { motif: 'leaf', x: 250, y: 228 }, { motif: 'house', x: 380, y: 216, color: 'peach' }], true),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"아침에 학교에 올 때 길이 깨끗했던 까닭은 무엇일까요? 빵집에 갓 구운 빵이 있는 까닭은요?" 학생 생각을 들은 뒤 "우리가 자고 있는 새벽에 일하는 사람이 있어요" 하고 말한다. 시연 단추로 \'새벽 5시에 거리를 청소하는 환경미화원\' 카드가 \'새벽\' 칸에 놓이는 모습을 보여 준다.',
        student: '새벽에 일하는 사람을 본 적이 있는지 떠올려 봐요.',
        demo: { tool: 'timeline', options: { mode: 'sort', slots: ['새벽', '낮'], cards: ['새벽 5시에 거리를 청소하는 환경미화원'], shuffle: false }, sequence: [{ sort: { '새벽': ['새벽 5시에 거리를 청소하는 환경미화원'], '낮': [] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 새벽·낮·밤에 일하는 사람', minutes: 12, tool: 'timeline',
            teacher: '"카드에 적힌 시각을 보고 하루 띠의 어느 칸에 놓을지 정해요." 새벽은 해가 뜨기 전 아주 이른 때라는 것을 알려 준다. 새벽 4시를 \'밤\'에 놓는 학생에게 "새벽 4시는 날이 밝기 전 아침 쪽이에요. 오늘은 새벽 칸에 따로 놓아요" 하고 칸 이름을 짚는다.',
            task: '카드에 적힌 시각을 읽고 하루 띠의 새벽·낮·밤 칸에 나누어 놓아요.',
            levels: DAY_LV,
            items: [
              { prompt: '네 사람을 일하는 때에 따라 나누어 보세요.', toolOptions: { mode: 'sort', axis: ['새벽', '밤'], slots: ['새벽', '낮', '밤'], cards: ['새벽 4시에 빵을 굽는 제빵사', '낮 12시에 점심을 차리는 조리사', '밤 11시에 환자를 살피는 간호사', '새벽 5시에 거리를 청소하는 환경미화원'] },
                target: { sort: { '새벽': ['새벽 4시에 빵을 굽는 제빵사', '새벽 5시에 거리를 청소하는 환경미화원'], '낮': ['낮 12시에 점심을 차리는 조리사'], '밤': ['밤 11시에 환자를 살피는 간호사'] } }, difficulty: 0.1 },
              { prompt: '다섯 사람을 일하는 때에 따라 나누어 보세요.', toolOptions: { mode: 'sort', axis: ['새벽', '밤'], slots: ['새벽', '낮', '밤'], cards: ['새벽 5시에 우유를 배달하는 배달원', '오후 2시에 편지를 나르는 집배원', '밤 10시에 순찰하는 경찰관', '새벽 4시 50분에 첫 버스를 모는 기사님', '오후 3시에 내일 수업을 준비하는 선생님'] },
                target: { sort: { '새벽': ['새벽 5시에 우유를 배달하는 배달원', '새벽 4시 50분에 첫 버스를 모는 기사님'], '낮': ['오후 2시에 편지를 나르는 집배원', '오후 3시에 내일 수업을 준비하는 선생님'], '밤': ['밤 10시에 순찰하는 경찰관'] } }, difficulty: 0.15 },
              { prompt: '새벽에 일하는 사람 덕분에 아침에 볼 수 있는 것을 이어 보세요.', toolOptions: { mode: 'match', slots: [{ id: 's1', label: '새벽에 빵을 굽는 제빵사' }, { id: 's2', label: '새벽에 거리를 쓰는 환경미화원' }], cards: ['갓 구운 아침 빵', '깨끗한 등굣길'] },
                target: { match: { s1: '갓 구운 아침 빵', s2: '깨끗한 등굣길' } }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['갓 구운 아침 빵', '깨끗한 등굣길', '밤하늘의 별'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 환경미화원의 하루 차례 놓기', minutes: 14, tool: 'story',
            teacher: '환경미화원 인터뷰 기록(예시)을 읽어 준다. "새벽 4시에 일어나요. 새벽 5시부터 거리를 쓸어요. 해가 뜨면 쓰레기를 차에 실어요. 낮 1시쯤 일을 마치고 집에서 쉬어요." "우리가 일어나는 7시에 환경미화원은 무엇을 하고 있을까요?" 하고 묻는다. 새벽 일을 \'힘든 일\'로만 말하는 학생에게 그 덕분에 깨끗해진 길을 떠올리게 한다.',
            task: '환경미화원의 하루 기록을 듣고 장면 카드를 차례대로 놓고, 빈칸을 채워요.',
            levels: CARD_LV,
            items: [
              { prompt: '환경미화원의 하루를 차례대로 놓아 보세요.', toolOptions: { hint1: '카드에서 때를 알려 주는 말(몇 시, 해가 뜨면 같은 말)을 먼저 찾아 소리 내어 읽고, 이른 때부터 놓아요.', cards: [{ id: 'truck', text: '쓰레기를 차에 실어요', motif: 'house' }, { id: 'wake', text: '새벽 4시에 일어나요', motif: 'moon' }, { id: 'sweep', text: '새벽 5시에 거리를 쓸어요', motif: 'leaf' }] },
                target: { order: ['wake', 'sweep', 'truck'] }, difficulty: 0.05 },
              { prompt: '네 장면을 차례대로 놓아 보세요.', toolOptions: { hint1: '카드에서 때를 알려 주는 말(몇 시, 해가 뜨면 같은 말)을 먼저 찾아 소리 내어 읽고, 이른 때부터 놓아요.', cards: [{ id: 'rest', text: '낮 1시쯤 집에서 쉬어요', motif: 'sun' }, { id: 'sweep', text: '새벽 5시에 거리를 쓸어요', motif: 'leaf' }, { id: 'wake', text: '새벽 4시에 일어나요', motif: 'moon' }, { id: 'truck', text: '해가 뜨면 쓰레기를 실어요', motif: 'house' }] },
                target: { order: ['wake', 'sweep', 'truck', 'rest'] }, difficulty: 0.15,
                levels: { challenge: { prompt: '네 장면을 차례대로 놓아 보세요. 기록에 없는 카드는 남겨요.', toolOptions: { slots: 4, cards: [{ id: 'rest', text: '낮 1시쯤 집에서 쉬어요', motif: 'sun' }, { id: 'sweep', text: '새벽 5시에 거리를 쓸어요', motif: 'leaf' }, { id: 'wake', text: '새벽 4시에 일어나요', motif: 'moon' }, { id: 'truck', text: '해가 뜨면 쓰레기를 실어요', motif: 'house' }, { id: 'school', text: '오후에 학교에서 공부해요', motif: 'star' }] } } } },
              { prompt: '기록을 읽고 빈칸에 알맞은 카드를 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['거리를 쓸고', '잠을 자고', '학교에 가고'], slots: [{ id: 'b1', who: '환경미화원', motif: 'leaf', label: '내가 아침 7시에 일어날 때, 환경미화원은 ___ 있어요.' }] },
                target: { fill: { b1: '거리를 쓸고' } }, difficulty: 0.15 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 알게 된 새벽에 일하는 사람은 누구였나요?" 칠판의 하루 띠(새벽·낮·밤)에 사람 카드를 붙여 우리 반 하루 지도를 만든다. 다음 시간에는 간호사 선생님의 밤 근무 기록을 읽어 본다.',
        exitTicket: [
          { type: 'tool', tool: 'timeline', options: { mode: 'sort', slots: ['새벽', '낮', '밤'], cards: ['새벽 4시에 생선을 사러 시장에 가는 횟집 사장님', '밤 9시에 마지막 손님을 받는 미용사', '낮 11시에 놀이터를 고치는 시설 기사님'] }, prompt: '세 사람을 일하는 때에 따라 나누어 보세요.', target: { sort: { '새벽': ['새벽 4시에 생선을 사러 시장에 가는 횟집 사장님'], '낮': ['낮 11시에 놀이터를 고치는 시설 기사님'], '밤': ['밤 9시에 마지막 손님을 받는 미용사'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '새벽에 일하는 환경미화원 덕분에 생기는 일은?', options: ['등굣길이 깨끗해요', '밤이 길어져요', '학교가 일찍 끝나요'], answer: 0, difficulty: 0.05, explain: '새벽에 거리를 쓸어 우리가 걷는 길이 깨끗해져요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '새벽에 일하는 사람들',
      items: [
        { type: 'table', prompt: '일하는 때에 따라 사람을 나누어 쓰세요.', columns: ['새벽', '낮', '밤'], rows: 2 },
        { type: 'figure', wide: true, prompt: '환경미화원의 하루 차례대로 빈칸에 1, 2, 3을 쓰세요.', tool: 'story', figures: [{ options: { cards: [{ id: 'truck', text: '쓰레기를 실어요', motif: 'house' }, { id: 'wake', text: '새벽 4시에 일어나요', motif: 'moon' }, { id: 'sweep', text: '거리를 쓸어요', motif: 'leaf' }], shuffle: false }, caption: '' }], answer: '일어나요 1, 쓸어요 2, 실어요 3' },
        { type: 'choice', prompt: '새벽에 빵을 굽는 사람 덕분에 아침에 먹을 수 있는 것에 ○ 하세요.', options: ['갓 구운 빵', '저녁밥'], answer: '갓 구운 빵' },
        { type: 'short', prompt: '새벽에 일하는 분께 하고 싶은 말을 쓰세요.' },
      ],
      easy: {
        note: '새벽은 해가 뜨기 전 아주 이른 때예요.',
        items: [
          { type: 'choice', prompt: '새벽에 일하는 사람에 ○ 하세요.', options: ['새벽 5시 환경미화원', '오후 2시 집배원'], answer: '새벽 5시 환경미화원' },
          { type: 'short', prompt: '새벽에 일하는 사람을 한 명 쓰세요.' },
          { type: 'draw', prompt: '새벽 거리를 쓰는 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고 틀리면 카드가 돌아와요.',
      base: '모두 놓은 뒤 확인을 눌러요. 카드의 시각을 소리 내어 읽어요.',
      challenge: '사람 카드가 다섯 장으로 늘고 함정 카드가 섞여 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 새벽과 밤을 헷갈린다 → 새벽은 해 뜨기 전 아침 쪽, 밤은 해 진 뒤라고 칠판 띠에 해·달 그림을 붙인다. ② 새벽 일을 힘든 일로만 말한다 → 그 덕분에 생긴 것(깨끗한 길, 갓 구운 빵)을 찾게 한다. ③ 시각을 읽지 않고 직업으로 짐작한다 → 카드 속 시각에 밑줄을 긋게 한다. 기록은 예시이며 실제 근무 시각은 지역마다 다르다.',
  }));

  lessons.push(L(27, {
    title: '간호사 선생님의 밤 근무 기록 읽기',
    objective: '간호사 선생님의 밤 근무 인터뷰 기록을 읽고 시각마다 한 일을 짝 지으며, 기록과 맞는 문장을 골라낼 수 있다.',
    illustration: ART('a calm hospital ward at night where a nurse with a small flashlight checks on sleeping patients, a clock on the wall and a notebook on the desk', '간호사 선생님의 밤', [
      { motif: 'house', x: 120, y: 214, color: 'lavender' }, { motif: 'star', x: 250, y: 90, s: 0.5 }, { motif: 'tree', x: 390, y: 214 }], true),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '간호사 인터뷰 기록(예시)을 화면에 띄우고 함께 읽는다. "밤 근무를 하는 날에는 밤 10시에 병원에 가요. 낮 근무 간호사에게 환자 이야기를 전해 들어요. 밤 12시와 새벽 3시에 병실을 돌며 환자를 살펴요. 새벽 6시에 아침 약을 챙겨요. 아침 7시에 다음 간호사에게 환자 이야기를 전해 주고 집에 가요. 집에 가서 낮에 잠을 자요." 시연 단추로 \'밤 10시\' 눈금에 \'병원에 와요\'가 놓이는 모습을 보여 준다.',
        student: '기록에서 시각을 알려 주는 말을 모두 찾아 손가락으로 짚어 봐요.',
        demo: { tool: 'timeline', options: { mode: 'match', slots: [{ id: 't1', label: '밤 10시' }], cards: ['병원에 와요', '집에 가요'], shuffle: false }, sequence: [{ match: { t1: '병원에 와요' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 시각마다 한 일 짝 짓기', minutes: 13, tool: 'timeline',
            teacher: '"새벽 6시에는 무엇을 하셨다고 적혀 있나요?" 기록을 다시 보며 시각 눈금마다 카드를 놓게 한다. 기억으로만 놓는 학생에게 활동지 기록의 그 줄을 손가락으로 짚고 놓게 한다. 같은 일(환자 살피기)을 두 번 한 것도 기록에서 찾게 한다.',
            task: '기록: 밤 10시 병원에 와서 낮 근무 간호사에게 이야기를 들어요 → 밤 12시·새벽 3시 병실을 돌며 환자를 살펴요 → 새벽 6시 아침 약을 챙겨요 → 아침 7시 다음 간호사에게 전하고 집에 가요 → 낮에 잠을 자요. 시각 눈금마다 그때 한 일 카드를 놓아요.',
            levels: DAY_LV,
            items: [
              { prompt: '기록을 보고 세 시각에 한 일을 놓아 보세요.', toolOptions: { mode: 'match', axis: ['밤', '아침'], slots: [{ id: 't1', label: '밤 10시' }, { id: 't2', label: '새벽 6시' }, { id: 't3', label: '아침 7시' }], cards: ['아침 약을 챙겨요', '병원에 와요', '다음 간호사에게 전하고 집에 가요'] },
                target: { match: { t1: '병원에 와요', t2: '아침 약을 챙겨요', t3: '다음 간호사에게 전하고 집에 가요' } }, difficulty: 0.1 },
              { prompt: '기록을 보고 네 시각에 한 일을 놓아 보세요.', toolOptions: { mode: 'match', axis: ['밤', '아침'], slots: [{ id: 't1', label: '밤 10시' }, { id: 't2', label: '밤 12시' }, { id: 't3', label: '새벽 6시' }, { id: 't4', label: '아침 7시' }], cards: ['병실을 돌며 환자를 살펴요', '낮 근무 간호사에게 이야기를 들어요', '다음 간호사에게 전하고 집에 가요', '아침 약을 챙겨요'] },
                target: { match: { t1: '낮 근무 간호사에게 이야기를 들어요', t2: '병실을 돌며 환자를 살펴요', t3: '아침 약을 챙겨요', t4: '다음 간호사에게 전하고 집에 가요' } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['병실을 돌며 환자를 살펴요', '낮 근무 간호사에게 이야기를 들어요', '다음 간호사에게 전하고 집에 가요', '아침 약을 챙겨요', '점심 급식을 먹어요'] } } } },
              { prompt: '간호사 선생님의 하루를 차례대로 놓아 보세요.', toolOptions: { mode: 'order', axis: ['밤', '다음 날 낮'], cards: ['집에서 낮잠을 자요', '새벽 3시에 환자를 살펴요', '밤 10시에 병원에 와요', '새벽 6시에 약을 챙겨요'] },
                target: { order: ['밤 10시에 병원에 와요', '새벽 3시에 환자를 살펴요', '새벽 6시에 약을 챙겨요', '집에서 낮잠을 자요'] }, difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 기록과 맞는 문장 찾기', minutes: 13, tool: 'mindmap',
            teacher: '"이 문장이 기록에 있는 내용인가요? 기록의 어느 줄에서 찾았나요?" 문장마다 근거 줄을 짚게 한다. \'간호사는 밤에 잠을 잔다\'처럼 내 생각으로 고르는 학생에게 기록에서 잠자는 때를 다시 찾게 한다.',
            task: '기록: 밤 10시 병원에 와서 낮 근무 간호사에게 이야기를 들어요 → 밤 12시·새벽 3시 병실을 돌며 환자를 살펴요 → 새벽 6시 아침 약을 챙겨요 → 아침 7시 다음 간호사에게 전하고 집에 가요 → 낮에 잠을 자요. 기록과 맞는 문장만 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '기록과 맞는 문장만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '기록과 맞아요', cards: ['밤 10시에 병원에 가요', '밤에 집에서 잠을 자요', '새벽 6시에 약을 챙겨요', '낮 12시에 병원에 가요'] },
                target: { pick: ['밤 10시에 병원에 가요', '새벽 6시에 약을 챙겨요'] }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['밤 10시에 병원에 가요', '밤에 집에서 잠을 자요', '새벽 6시에 약을 챙겨요', '낮 12시에 병원에 가요', '아침 7시에 병원에 와요'] } } } },
              { prompt: '기록에 맞는 문장과 맞지 않는 문장으로 나누어 보세요.', toolOptions: { topic: '간호사의 밤 기록', slots: ['기록과 맞아요', '기록과 달라요'], cards: ['환자를 두 번 살펴요', '아침 7시에 집에 가요', '밤새 한 번도 일어나지 않아요', '혼자서만 일하고 아무에게도 전하지 않아요'] },
                target: { sort: { '기록과 맞아요': ['환자를 두 번 살펴요', '아침 7시에 집에 가요'], '기록과 달라요': ['밤새 한 번도 일어나지 않아요', '혼자서만 일하고 아무에게도 전하지 않아요'] } }, difficulty: 0.2 },
              { prompt: '기록에서 알 수 있는 것만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '기록에서 알 수 있어요', cards: ['간호사 선생님이 낮에 자는 까닭', '간호사 선생님이 좋아하는 음식', '환자를 살피는 시각', '간호사 선생님의 집 주소'] },
                target: { pick: ['간호사 선생님이 낮에 자는 까닭', '환자를 살피는 시각'] }, difficulty: 0.2,
                conclude: '기록에 없는 것은 짐작하지 않고, 다시 여쭈어보아야 알 수 있어요.' },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"기록에 없어서 더 알고 싶은 것은 무엇인가요?" 학생이 말한 것을 \'더 여쭈어볼 것\'으로 적는다. 우리 모둠이 인터뷰한 기록도 시각마다 한 일로 정리해 온다. 다음 시간부터는 알아낸 하루를 내 하루와 견주어 본다.',
        exitTicket: [
          { type: 'tool', tool: 'timeline', options: { mode: 'match', slots: [{ id: 'e1', label: '새벽 5시' }, { id: 'e2', label: '낮 2시' }], cards: ['첫 버스를 몰아요', '집에서 쉬어요'] }, prompt: '버스 기사님 기록: "새벽 5시에 첫 버스를 몰고, 일을 마친 낮 2시에는 집에서 쉬어요." 시각마다 한 일을 놓아 보세요.', target: { match: { e1: '첫 버스를 몰아요', e2: '집에서 쉬어요' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '기록에 없는 것을 알고 싶을 때 알맞은 방법은?', options: ['내 마음대로 짐작해 적어요', '그분께 다시 여쭈어봐요', '친구 것을 베껴요'], answer: 1, difficulty: 0.1, explain: '기록에 없는 것은 다시 여쭈어 알아봐요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '간호사 선생님의 밤 근무 기록',
      items: [
        { type: 'table', prompt: '기록: 밤 10시 병원에 와서 낮 근무 간호사에게 이야기를 들어요 → 밤 12시·새벽 3시 병실을 돌며 환자를 살펴요 → 새벽 6시 아침 약을 챙겨요 → 아침 7시 다음 간호사에게 전하고 집에 가요 → 낮에 잠을 자요. 기록을 읽고 시각마다 한 일을 쓰세요.', columns: ['시각', '한 일'], cells: [['밤 10시', ''], ['밤 12시', ''], ['새벽 6시', ''], ['아침 7시', '']] },
        { type: 'check', prompt: '기록과 맞는 문장에 모두 ✓ 하세요.', options: ['밤 10시에 병원에 가요', '밤에 집에서 자요', '새벽 6시에 약을 챙겨요', '낮에 잠을 자요'] },
        { type: 'short', prompt: '기록에 없어서 더 여쭈어보고 싶은 것을 쓰세요.' },
        { type: 'short', prompt: '우리 모둠이 인터뷰한 분이 가장 바쁜 시각과 하시는 일을 쓰세요.' },
      ],
      easy: {
        note: '기록: 밤 10시 병원에 와서 낮 근무 간호사에게 이야기를 들어요 → 밤 12시·새벽 3시 병실을 돌며 환자를 살펴요 → 새벽 6시 아침 약을 챙겨요 → 아침 7시 다음 간호사에게 전하고 집에 가요 → 낮에 잠을 자요. 시각에 밑줄을 그어요.',
        items: [
          { type: 'choice', prompt: '간호사 선생님이 병원에 가는 시각에 ○ 하세요.', options: ['밤 10시', '낮 12시'], answer: '밤 10시' },
          { type: 'choice', prompt: '간호사 선생님이 잠을 자는 때에 ○ 하세요.', options: ['낮', '밤'], answer: '낮' },
          { type: 'draw', prompt: '밤에 환자를 살피는 간호사 선생님을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 초록 테두리가 생기고 틀리면 카드가 돌아와요.',
      base: '모두 놓은 뒤 확인을 눌러요. 고른 문장의 근거 줄을 짚어요.',
      challenge: '눈금이 네 개로 늘고 함정 카드가 섞여 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 기록을 읽지 않고 내 하루처럼 짐작한다(간호사도 밤에 잔다) → 근거 줄을 짚게 한다. ② 기록에 없는 것을 지어낸다 → 다시 여쭈어볼 것으로 남기게 한다. ③ 시각과 일이 한 줄에 둘 있으면 놓친다(12시와 3시) → 기록에 번호를 붙여 읽는다. 기록은 예시이며 실제 근무 시각은 병원마다 다르다.',
  }));

  // ───────────────────────── 28~32차시: 내 하루와 견주어 설명하기(탐구 결과 설명) ─────────────────────────

  lessons.push(L(28, {
    title: '내 하루와 간호사 선생님의 하루 견주기',
    objective: '내 하루와 밤에 일하는 간호사 선생님의 하루를 나란히 놓고 같은 점과 다른 점을 말하며, 다른 하루도 존중할 수 있다.',
    illustration: ART('two paper ribbons side by side, one showing a child going to school by day and sleeping at night, the other showing a nurse working at night and sleeping by day', '나와 무엇이 다를까요?', [
      { motif: 'house', x: 120, y: 214, color: 'buttercup' }, { motif: 'house', x: 360, y: 216, color: 'lavender' }, { motif: 'moon', x: 300, y: 80, s: 0.5 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '칠판에 두 줄 시간 띠를 붙인다. 윗줄은 내 하루, 아랫줄은 27차시 간호사 선생님의 하루다. "밤 10시에 나는 무엇을 하나요? 간호사 선생님은요?" 두 줄을 손가락으로 나란히 짚게 한다. 시연 단추로 \'둘 다 밥을 먹어요\'가 \'같은 점\' 가지에 들어가는 모습을 보여 준다. "다른 점도 있지만 같은 점도 있어요."',
        student: '내가 잠자리에 드는 시각을 떠올려 짝에게 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '나와 간호사', slots: ['같은 점', '다른 점'], cards: ['둘 다 밥을 먹어요'], shuffle: false }, sequence: [{ sort: { '같은 점': ['둘 다 밥을 먹어요'], '다른 점': [] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 같은 점과 다른 점 나누기', minutes: 13, tool: 'mindmap',
            teacher: '"\'둘 다\'라는 말이 들어가면 어느 쪽일까요? \'나는 ~, 간호사는 ~\'이라고 다르게 말하면요?" 문장의 짜임을 짚어 준다. 다 나눈 뒤 다른 점 하나를 골라 "나는 밤에 자고 간호사 선생님은 낮에 자요"처럼 두 사람을 넣어 말하게 한다.',
            task: '두 사람의 하루를 견준 문장을 같은 점과 다른 점으로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '나와 간호사 선생님의 하루를 견준 문장을 나누어 보세요.', toolOptions: { topic: '나와 간호사', slots: ['같은 점', '다른 점'], cards: ['둘 다 일어나면 세수를 해요', '나는 밤에 자고 간호사는 낮에 자요', '둘 다 하루에 밥을 세 번 먹어요', '나는 낮에 학교에 가고 간호사는 밤에 병원에 가요'] },
                target: { sort: { '같은 점': ['둘 다 일어나면 세수를 해요', '둘 다 하루에 밥을 세 번 먹어요'], '다른 점': ['나는 밤에 자고 간호사는 낮에 자요', '나는 낮에 학교에 가고 간호사는 밤에 병원에 가요'] } }, difficulty: 0.1 },
              { prompt: '나와 제빵사의 하루를 견준 문장을 나누어 보세요.', toolOptions: { topic: '나와 제빵사', slots: ['같은 점', '다른 점'], cards: ['나는 7시에 일어나고 제빵사는 새벽 3시에 일어나요', '둘 다 밥을 먹기 전에 손을 씻어요', '둘 다 잠을 자야 힘이 나요', '나는 저녁 9시에 자고 제빵사는 저녁 7시에 자요', '나는 빵을 먹고 제빵사는 빵을 만들어요'] },
                target: { sort: { '같은 점': ['둘 다 밥을 먹기 전에 손을 씻어요', '둘 다 잠을 자야 힘이 나요'], '다른 점': ['나는 7시에 일어나고 제빵사는 새벽 3시에 일어나요', '나는 저녁 9시에 자고 제빵사는 저녁 7시에 자요', '나는 빵을 먹고 제빵사는 빵을 만들어요'] } }, difficulty: 0.2 },
              { prompt: '밤 10시 두 사람의 모습을 빈칸에 넣어 보세요.', toolOptions: { mode: 'match', topic: '밤 10시', slots: [{ id: 's1', label: '밤 10시의 나' }, { id: 's2', label: '밤 10시의 간호사 선생님' }], cards: ['잠자리에 들어요', '병원에서 일을 시작해요'] },
                target: { match: { s1: '잠자리에 들어요', s2: '병원에서 일을 시작해요' } }, difficulty: 0.05,
                levels: { challenge: { toolOptions: { slots: [{ id: 's1', label: '밤 10시의 나' }, { id: 's2', label: '밤 10시의 간호사 선생님' }, { id: 's3', label: '낮 1시의 간호사 선생님' }], cards: ['잠자리에 들어요', '병원에서 일을 시작해요', '집에서 잠을 자요'] }, prompt: '두 시각, 두 사람의 모습을 이어 보세요.', target: { match: { s1: '잠자리에 들어요', s2: '병원에서 일을 시작해요', s3: '집에서 잠을 자요' } } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 다른 하루를 대하는 마음', minutes: 13, tool: 'emotion',
            teacher: '"친구가 \'낮에 자는 건 게으른 거야\'라고 말하면 어떻게 대답할까요?" 25·27차시 기록을 근거로 말하게 한다. 나와 다른 하루는 틀린 것이 아니라 하는 일이 달라서 생긴 것이라는 것을 학생 입으로 정리하게 한다.',
            task: '나와 다른 하루를 사는 사람에 대한 말을 읽고 알맞은 생각과 행동을 골라요.',
            levels: SCALE_LV,
            items: [
              { prompt: '친구가 "낮에 자는 건 게으른 거야" 하고 말해요. 어떻게 대답할까요?', toolOptions: { mode: 'branch', who: '지우', situation: '지우가 "간호사가 낮에 자다니, 게으른 거야" 하고 말했어요.', choices: [
                { id: 'agree', text: '"맞아, 게을러" 하고 따라 말해요', result: '밤새 일한 간호사 선생님이 들으면 속상하실 거예요.', mood: '속상함', why: '간호사 선생님은 언제 일했나요?' },
                { id: 'explain', text: '"밤새 일해서 낮에 자는 거야" 하고 말해요', result: '지우가 "아, 그렇구나" 하고 고개를 끄덕여요.', mood: '편안함' }] }, target: { choice: 'explain' }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { choices: [
                  { id: 'agree', text: '"맞아, 게을러" 하고 따라 말해요', result: '밤새 일한 간호사 선생님이 들으면 속상하실 거예요.', mood: '속상함', why: '간호사 선생님은 언제 일했나요?' },
                  { id: 'silent', text: '못 들은 척 다른 이야기를 해요', result: '지우는 계속 그렇게 생각해요.', mood: '걱정', why: '지우가 바르게 알도록 무엇을 말해 줄 수 있을까요?' },
                  { id: 'explain', text: '"밤새 일해서 낮에 자는 거야" 하고 말해요', result: '지우가 "아, 그렇구나" 하고 고개를 끄덕여요.', mood: '편안함' }] } } } },
              { prompt: '두 말을 들은 간호사 선생님의 마음 카드를 놓아 보세요.', toolOptions: { cards: ['고마움', '속상함', '놀람'], slots: [{ id: 's1', label: '"밤새 환자를 지켜 주셔서 감사해요"' }, { id: 's2', label: '"낮에 자다니 이상해요"' }] },
                target: { match: { s1: '고마움', s2: '속상함' } }, difficulty: 0.1 },
              { prompt: '나와 하루가 아주 다른 사람을 알게 되었을 때, 내가 놀란 마음의 크기를 내 생각대로 골라 보세요.', toolOptions: { mode: 'scale', situation: '간호사 선생님은 내가 잘 때 일하고, 내가 공부할 때 잔다는 것을 알게 되었어요.', feeling: '놀람', after: '놀란 까닭을 짝에게 말해 봐요.' }, target: { level: 'any' }, difficulty: 0.05 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 견주어 본 것 가운데 가장 놀라웠던 다른 점은 무엇인가요?" 두세 명이 \'나는 ~, 간호사 선생님은 ~\' 틀로 말한다. 모둠이 인터뷰한 분의 하루도 내 하루와 나란히 적어 오게 한다. 다음 시간에는 왜 사람마다 일하는 때가 다른지 알아본다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '나와 경비원', slots: ['같은 점', '다른 점'], cards: ['둘 다 아침밥을 먹어요', '나는 밤에 자고 경비원은 밤에 건물을 지켜요'] }, prompt: '나와 경비원의 하루를 견준 문장을 나누어 보세요.', target: { sort: { '같은 점': ['둘 다 아침밥을 먹어요'], '다른 점': ['나는 밤에 자고 경비원은 밤에 건물을 지켜요'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '나와 다른 하루를 사는 사람에 대해 알맞은 생각은?', options: ['나와 다르면 잘못된 거예요', '하는 일이 달라 하루가 다를 수 있어요', '모두 나처럼 살아야 해요'], answer: 1, difficulty: 0.1, explain: '하는 일에 따라 일하고 쉬는 때가 달라요. 틀린 것이 아니에요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '나와 간호사 선생님의 하루',
      items: [
        { type: 'table', prompt: '두 사람의 하루를 나란히 쓰세요.', columns: ['때', '나', '간호사 선생님'], cells: [['아침 7시', '', ''], ['낮 1시', '', ''], ['밤 10시', '', '']] },
        { type: 'short', prompt: '두 사람의 같은 점을 하나 쓰세요.' },
        { type: 'blank', prompt: '다른 점을 문장으로 완성하세요.', text: '나는 밤에 ___, 간호사 선생님은 밤에 ___.', answer: '자고, 일해요' },
        { type: 'choice', prompt: '"낮에 자면 게을러"라는 말에 알맞은 대답에 ○ 하세요.', options: ['"밤새 일해서 낮에 자는 거야"', '"맞아, 이상해"'], answer: '"밤새 일해서 낮에 자는 거야"' },
      ],
      easy: {
        note: '\'둘 다\' → 같은 점, \'나는 ~, 간호사는 ~\' → 다른 점.',
        items: [
          { type: 'choice', prompt: '같은 점에 ○ 하세요.', options: ['둘 다 밥을 먹어요', '나는 밤에 자고 간호사는 낮에 자요'], answer: '둘 다 밥을 먹어요' },
          { type: 'short', prompt: '다른 점을 하나 쓰세요.' },
          { type: 'draw', prompt: '밤 10시의 나와 간호사 선생님을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 가지에 초록 테두리가 생겨요. 마음 크기는 세 칸이에요.',
      base: '모두 나눈 뒤 확인을 눌러요. 다른 점을 두 사람을 넣어 말해요.',
      challenge: '견줄 시각이 늘고 그럴듯한 보기가 더 있어요. 같은 점과 다른 점을 두 가지씩 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 나와 다른 하루를 잘못이라고 여긴다(이 부분의 핵심 오개념) → 기록 속 일하는 때를 근거로 말하게 한다. ② 다른 점만 찾는다 → \'둘 다\'로 시작하는 문장을 함께 만들어 본다. ③ 다른 점을 한 사람만 넣어 말한다 → \'나는 ~, 간호사 선생님은 ~\' 틀을 칠판에 붙여 둔다.',
  }));

  lessons.push(L(29, {
    title: '사람마다 일하는 때가 다른 까닭 찾기',
    objective: '밤이나 새벽에 일하는 사람이 있는 까닭을 그 사람이 하는 일과 이어 설명할 수 있다.',
    illustration: ART('a split paper scene: on one side a sleeping town under the moon with a lit hospital window and fire station, on the other side the same town waking at dawn with fresh bread in a bakery window', '왜 밤에도 일할까요?', [
      { motif: 'house', x: 120, y: 214, color: 'lavender' }, { motif: 'house', x: 250, y: 216, color: 'rose' }, { motif: 'house', x: 380, y: 214, color: 'peach' }], true),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"밤에 갑자기 배가 많이 아프면 어디로 가야 할까요? 그때 병원에 아무도 없다면요?" 학생 대답을 듣고 "그래서 밤에도 일하는 사람이 있어요" 하고 말한다. 시연 단추로 \'간호사\'와 \'아픈 사람은 밤에도 돌봄이 필요해서\'가 이어지는 모습을 보여 준다.',
        student: '밤에 꼭 문을 열어야 하는 곳을 하나 떠올려 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '일하는 때', slots: [{ id: 's1', label: '밤에 일하는 간호사' }], cards: ['아픈 사람은 밤에도 돌봄이 필요해서'], shuffle: false }, sequence: [{ match: { s1: '아픈 사람은 밤에도 돌봄이 필요해서' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 사람과 까닭 잇기', minutes: 13, tool: 'mindmap',
            teacher: '"이분이 밤에 일하지 않으면 어떤 일이 생길까요?" 하고 거꾸로 물어 까닭을 찾게 한다. \'돈을 많이 벌려고\'처럼 하는 일과 상관없는 까닭을 고르는 학생에게 "그 사람이 하는 일과 이어지는 까닭인가요?" 하고 되묻는다.',
            task: '밤이나 새벽에 일하는 사람과 그때 일하는 까닭을 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '세 사람과 그때 일하는 까닭을 이어 보세요.', toolOptions: { mode: 'match', topic: '일하는 때', slots: [{ id: 's1', label: '밤에 일하는 소방관' }, { id: 's2', label: '새벽에 일하는 제빵사' }, { id: 's3', label: '밤에 일하는 간호사' }], cards: ['아침에 갓 구운 빵을 팔려고', '불은 밤에도 날 수 있어서', '아픈 사람은 밤에도 돌봄이 필요해서'] },
                target: { match: { s1: '불은 밤에도 날 수 있어서', s2: '아침에 갓 구운 빵을 팔려고', s3: '아픈 사람은 밤에도 돌봄이 필요해서' } }, difficulty: 0.1 },
              { prompt: '네 사람과 그때 일하는 까닭을 이어 보세요.', toolOptions: { mode: 'match', topic: '일하는 때', slots: [{ id: 's1', label: '새벽에 일하는 환경미화원' }, { id: 's2', label: '밤에 순찰하는 경찰관' }, { id: 's3', label: '새벽에 첫 버스를 모는 기사님' }, { id: 's4', label: '밤에 건물을 지키는 경비원' }], cards: ['사람들이 다니기 전에 길을 치우려고', '밤에도 동네가 안전하도록', '일찍 일하러 가는 사람을 태우려고', '아무도 없는 건물에 도둑이 들지 않게'] },
                target: { match: { s1: '사람들이 다니기 전에 길을 치우려고', s2: '밤에도 동네가 안전하도록', s3: '일찍 일하러 가는 사람을 태우려고', s4: '아무도 없는 건물에 도둑이 들지 않게' } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['사람들이 다니기 전에 길을 치우려고', '밤에도 동네가 안전하도록', '일찍 일하러 가는 사람을 태우려고', '아무도 없는 건물에 도둑이 들지 않게', '낮에는 할 일이 하나도 없어서'] } } } },
              { prompt: '밤에도 일하는 사람이 있어야 하는 까닭만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '알맞은 까닭', cards: ['밤에도 아픈 사람이 생겨요', '밤에도 불이 날 수 있어요', '밤에 일하면 게을러도 돼요', '밤에는 아무 일도 일어나지 않아요'] },
                target: { pick: ['밤에도 아픈 사람이 생겨요', '밤에도 불이 날 수 있어요'] }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 밤에도 문을 여는 곳 덕분에', minutes: 13, tool: 'emotion',
            teacher: '"밤에 할머니가 갑자기 아프셨는데 구급대원이 바로 왔어요. 나는 어떤 마음이 들까요?" 장면마다 마음 카드를 고르고, 그 마음이 생긴 까닭을 \'~ 덕분에\'로 말하게 한다.',
            task: '밤에 일하는 사람 덕분에 생긴 장면을 읽고 알맞은 마음을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '장면에 어울리는 마음 카드를 빈칸에 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['안심', '짜증', '심심함'], slots: [{ id: 'b1', who: '나', label: '밤에 할머니가 아프셨는데 구급대원이 바로 와 주었어요. 나는 ___을 느꼈어요.' }] },
                target: { fill: { b1: '안심' } }, difficulty: 0.05 },
              { prompt: '두 장면에 어울리는 마음 카드를 놓아 보세요.', toolOptions: { cards: ['고마움', '걱정', '심심함'], slots: [{ id: 's1', label: '밤에 길을 잃었는데 순찰하던 경찰관이 집까지 데려다주었어요.' }, { id: 's2', label: '밤에 열이 나는데 문을 연 병원을 찾지 못하고 있어요.' }] },
                target: { match: { s1: '고마움', s2: '걱정' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['고마움', '걱정', '심심함', '부끄러움'] } } } },
              { prompt: '밤에 일하는 소방관이 있는 까닭을 말하는 문장을 완성해 보세요.', toolOptions: { mode: 'fill', cards: ['불이 날 수 있어서', '잠이 안 와서', '심심해서'], slots: [{ id: 'b1', who: '소방관', label: '밤에도 ___ 소방관은 밤에도 소방서를 지켜요.' }] },
                target: { fill: { b1: '불이 날 수 있어서' } }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"모둠이 인터뷰한 분은 왜 그때 일하시는지 말해 볼까요?" 모둠마다 한 문장으로 말한다. 까닭을 모르는 모둠은 \'다시 여쭈어볼 것\'에 적는다. 다음 시간에는 그분께 고마운 마음을 전할 말을 만든다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '일하는 때', slots: [{ id: 's1', label: '새벽에 신문을 나르는 배달원' }, { id: 's2', label: '밤에 문을 연 약국의 약사' }] , cards: ['아침에 신문을 읽을 수 있게', '밤에 아픈 사람이 약을 살 수 있게'] }, prompt: '두 사람과 그때 일하는 까닭을 이어 보세요.', target: { match: { s1: '아침에 신문을 읽을 수 있게', s2: '밤에 아픈 사람이 약을 살 수 있게' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '경찰관이 밤에도 순찰하는 까닭으로 알맞은 것은?', options: ['밤에도 동네를 안전하게 지키려고', '낮에 할 일이 없어서', '밤 산책을 좋아해서'], answer: 0, difficulty: 0.05, explain: '사고나 위험한 일은 밤에도 생길 수 있어서 밤에도 지켜요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '왜 그때 일할까요?',
      items: [
        { type: 'table', prompt: '사람과 그때 일하는 까닭을 쓰세요.', columns: ['사람', '일하는 때', '까닭'], cells: [['소방관', '밤', ''], ['제빵사', '새벽', ''], ['우리 모둠이 인터뷰한 분', '', '']] },
        { type: 'choice', prompt: '간호사가 밤에도 일하는 까닭에 ○ 하세요.', options: ['아픈 사람은 밤에도 돌봄이 필요해서', '밤에는 병원이 조용해서'], answer: '아픈 사람은 밤에도 돌봄이 필요해서' },
        { type: 'blank', prompt: '문장을 완성하세요.', text: '밤에 일하는 사람 덕분에 나는 밤에도 ___ 지낼 수 있어요.', answer: '안전하게(마음 놓고)' },
        { type: 'short', prompt: '밤에 일하는 사람이 없다면 어떤 일이 생길지 쓰세요.' },
      ],
      easy: {
        note: '"이분이 밤에 일하지 않으면?" 하고 생각해 봐요.',
        items: [
          { type: 'choice', prompt: '소방관이 밤에도 일하는 까닭에 ○ 하세요.', options: ['밤에도 불이 날 수 있어서', '밤이 좋아서'], answer: '밤에도 불이 날 수 있어서' },
          { type: 'short', prompt: '밤에 일하는 사람을 한 명 쓰세요.' },
          { type: 'draw', prompt: '밤에 일하는 사람 덕분에 도움을 받는 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 초록 테두리가 생기고 틀리면 카드가 돌아와요.',
      base: '모두 이은 뒤 확인을 눌러요. 까닭을 \'~해서\'로 소리 내어 말해요.',
      challenge: '사람이 네 명으로 늘고, 하는 일과 상관없는 함정 까닭이 섞여 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 까닭을 \'돈 때문에\', \'좋아해서\'처럼 하는 일과 떨어져 말한다 → "이분이 밤에 일하지 않으면?" 하고 거꾸로 묻는다. ② 밤에 일하는 것을 불쌍하게만 여긴다 → 그 덕분에 우리가 받는 도움에 초점을 둔다. ③ 모든 직업이 밤에도 일한다고 넓혀 말한다 → 낮에만 문을 여는 곳(문구점 등)과 견주어 본다.',
  }));

  lessons.push(L(30, {
    title: '고마운 분께 전할 말 만들기',
    objective: '조사한 분이 해 주시는 일을 넣어 고마운 마음을 구체적으로 전하는 문장을 만들 수 있다.',
    illustration: ART('a child holding a folded paper speech bubble toward a smiling school cook in an apron, with paper hearts floating between them', '고마운 마음 전하기', [
      { motif: 'flower', x: 110, y: 228, color: 'rose' }, { motif: 'house', x: 380, y: 214, color: 'buttercup' }, { motif: 'star', x: 250, y: 96, s: 0.5 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '두 문장을 칠판에 붙인다. ① "감사합니다." ② "매일 아침 일찍 맛있는 점심을 만들어 주셔서 감사합니다." "어느 말을 들으면 조리사 선생님이 더 기쁘실까요? 왜 그럴까요?" 무엇이 고마운지 들어 있으면 마음이 더 잘 전해진다는 것을 학생 입으로 말하게 한다. 시연 단추로 ②번 문장이 바구니에 들어가는 모습을 보여 준다.',
        student: '내가 고마운 분께 들려드리고 싶은 말을 속으로 떠올려 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'pick', basket: '고마운 일이 들어 있어요', cards: ['매일 맛있는 점심을 만들어 주셔서 감사합니다', '감사합니다'], shuffle: false }, sequence: [{ pick: ['매일 맛있는 점심을 만들어 주셔서 감사합니다'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 마음이 잘 전해지는 말 고르기', minutes: 11, tool: 'mindmap',
            teacher: '"이 문장에서 그분이 해 주신 일은 어디에 있나요?" 고른 문장마다 해 주신 일에 밑줄을 긋게 한다. 길기만 하고 해 주신 일이 없는 문장(예: "정말 정말 감사합니다")을 고르는 학생에게 무엇이 고마운지 찾게 한다.',
            task: '고마운 분이 해 주신 일이 들어 있는 문장을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '해 주신 일이 들어 있는 고마운 말만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '마음이 잘 전해져요', cards: ['밤새 아픈 사람을 돌봐 주셔서 감사합니다', '정말 정말 감사합니다', '새벽에 길을 깨끗하게 쓸어 주셔서 감사합니다', '안녕하세요'] },
                target: { pick: ['밤새 아픈 사람을 돌봐 주셔서 감사합니다', '새벽에 길을 깨끗하게 쓸어 주셔서 감사합니다'] }, difficulty: 0.1 },
              { prompt: '고마운 말과 고마운 말이 아닌 것으로 나누어 보세요.', toolOptions: { topic: '보건 선생님께', slots: ['고마운 말', '고마운 말이 아니에요'], cards: ['넘어졌을 때 상처를 치료해 주셔서 고맙습니다', '보건실은 약 냄새가 나요', '아플 때 따뜻하게 말해 주셔서 고맙습니다', '다음에는 사탕을 주세요'] },
                target: { sort: { '고마운 말': ['넘어졌을 때 상처를 치료해 주셔서 고맙습니다', '아플 때 따뜻하게 말해 주셔서 고맙습니다'], '고마운 말이 아니에요': ['보건실은 약 냄새가 나요', '다음에는 사탕을 주세요'] } }, difficulty: 0.15 },
              { prompt: '고마운 분과 그분께 드릴 말을 이어 보세요.', toolOptions: { mode: 'match', topic: '고마운 말', slots: [{ id: 's1', label: '학교 지킴이 선생님' }, { id: 's2', label: '도서관 사서 선생님' }, { id: 's3', label: '집배원' }], cards: ['등굣길 건널목을 지켜 주셔서 감사합니다', '재미있는 책을 찾아 주셔서 감사합니다', '할머니 편지를 전해 주셔서 감사합니다'] },
                target: { match: { s1: '등굣길 건널목을 지켜 주셔서 감사합니다', s2: '재미있는 책을 찾아 주셔서 감사합니다', s3: '할머니 편지를 전해 주셔서 감사합니다' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['등굣길 건널목을 지켜 주셔서 감사합니다', '재미있는 책을 찾아 주셔서 감사합니다', '할머니 편지를 전해 주셔서 감사합니다', '맛있는 빵을 구워 주셔서 감사합니다'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 내가 전할 말 짓기', minutes: 15, tool: 'story',
            teacher: '"부르는 말 → 해 주신 일 → 내 마음 → 바라는 말" 틀을 칠판에 붙인다. 빈칸 채우기로 틀을 익힌 뒤, 활동지에 모둠이 인터뷰한 분께 드릴 말을 내 말로 쓰게 한다. 다 쓴 학생은 짝에게 읽어 주고, 짝은 "해 주신 일이 어디 있어?" 하고 물으며 함께 찾는다.',
            task: '고마운 말의 차례를 정하고 빈칸을 채운 뒤, 인터뷰한 분께 드릴 말을 내 말로 써요.',
            levels: CARD_LV,
            items: [
              { prompt: '고마운 말 세 문장을 차례대로 놓아 보세요.', toolOptions: { hint1: '고마운 말은 누구에게 하는 말인지 부르는 말로 시작해요. 카드마다 부르는 말인지, 해 주신 일인지, 내 마음인지 먼저 나눠 봐요.', cards: [{ id: 'feel', text: '덕분에 배가 든든해요', motif: 'sun' }, { id: 'call', text: '조리사 선생님께', motif: 'house' }, { id: 'did', text: '매일 따뜻한 점심을 만들어 주셔서 감사합니다', motif: 'flower' }], slots: ['부르는 말', '해 주신 일', '내 마음'] },
                target: { order: ['call', 'did', 'feel'] }, difficulty: 0.1 },
              { prompt: '고마운 말 네 문장을 차례대로 놓아 보세요.', toolOptions: { hint1: '고마운 말은 누구에게 하는 말인지 부르는 말로 시작해요. 카드마다 부르는 말인지, 해 주신 일인지, 내 마음인지 먼저 나눠 봐요.', cards: [{ id: 'wish', text: '늘 건강하세요', motif: 'star' }, { id: 'did', text: '밤에 우리 동네를 지켜 주셔서 감사합니다', motif: 'moon' }, { id: 'call', text: '지구대 경찰관님께', motif: 'house' }, { id: 'feel', text: '덕분에 마음 놓고 잠을 자요', motif: 'sun' }], slots: ['부르는 말', '해 주신 일', '내 마음', '바라는 말'] },
                target: { order: ['call', 'did', 'feel', 'wish'] }, difficulty: 0.15,
                levels: { challenge: { prompt: '고마운 말 네 문장을 차례대로 놓아 보세요. 고마운 말에 어울리지 않는 카드는 남겨요.', toolOptions: { cards: [{ id: 'wish', text: '늘 건강하세요', motif: 'star' }, { id: 'did', text: '밤에 우리 동네를 지켜 주셔서 감사합니다', motif: 'moon' }, { id: 'call', text: '지구대 경찰관님께', motif: 'house' }, { id: 'feel', text: '덕분에 마음 놓고 잠을 자요', motif: 'sun' }, { id: 'noisy', text: '순찰차 소리가 시끄러워요', motif: 'cloud' }] } } } },
              { prompt: '빈칸에 알맞은 카드를 넣어 고마운 말을 완성해 보세요.', toolOptions: { mode: 'fill', cards: ['쓸어 주셔서', '자랑해 주셔서', '상쾌해요', '귀찮아요'], slots: [{ id: 'b1', who: '나', motif: 'leaf', label: '새벽에 등굣길을 깨끗하게 ___ 감사합니다.' }, { id: 'b2', who: '나', motif: 'sun', label: '덕분에 학교 가는 길이 ___.' }] },
                target: { fill: { b1: '쓸어 주셔서', b2: '상쾌해요' } }, difficulty: 0.15 },
              { prompt: '활동지에 모둠이 인터뷰한 분께 드릴 말을 네 부분으로 쓰고 짝에게 읽어 주었으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"짝이 쓴 말에서 \'해 주신 일\'은 무엇이었나요?" 두세 짝이 서로의 말을 소개한다. 오늘 쓴 말은 32차시에 감사 카드로 만들어 직접 전해 드린다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', basket: '마음이 잘 전해져요', cards: ['밤에 불을 꺼 주셔서 감사합니다', '고마워요 고마워요', '소방차가 멋있어요'] }, prompt: '소방관께 드릴 말 가운데 해 주신 일이 들어 있는 말을 골라 보세요.', target: { pick: ['밤에 불을 꺼 주셔서 감사합니다'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '고마운 말에 꼭 넣으면 좋은 것은?', options: ['그분이 해 주신 일', '내가 갖고 싶은 것', '친구 이름'], answer: 0, difficulty: 0.05, explain: '무엇이 고마운지 들어 있으면 마음이 더 잘 전해져요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '고마운 분께 전할 말',
      items: [
        { type: 'table', prompt: '틀에 맞추어 고마운 말을 쓰세요.', columns: ['차례', '내가 쓴 말'], cells: [['부르는 말', ''], ['해 주신 일', ''], ['내 마음', ''], ['바라는 말', '']] },
        { type: 'choice', prompt: '마음이 더 잘 전해지는 말에 ○ 하세요.', options: ['감사합니다', '아픈 친구를 돌봐 주셔서 감사합니다'], answer: '아픈 친구를 돌봐 주셔서 감사합니다' },
        { type: 'blank', prompt: '빈칸을 채워 문장을 완성하세요.', text: '도서관에서 책을 ___ 감사합니다.', answer: '찾아 주셔서' },
        { type: 'short', prompt: '짝이 쓴 말에서 \'해 주신 일\'을 찾아 쓰세요.' },
      ],
      easy: {
        note: '"~해 주셔서 감사합니다" 틀을 써요.',
        items: [
          { type: 'choice', prompt: '해 주신 일이 들어 있는 말에 ○ 하세요.', options: ['점심을 만들어 주셔서 감사합니다', '안녕하세요'], answer: '점심을 만들어 주셔서 감사합니다' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '_____ 해 주셔서 감사합니다.' },
          { type: 'draw', prompt: '고마운 분께 말을 전하는 내 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 초록 테두리가 생겨요. 활동지는 "~해 주셔서 감사합니다" 틀에 한 칸만 채워요.',
      base: '틀 네 부분을 내 말로 써요.',
      challenge: '함정 카드가 섞여 있어요. 해 주신 일을 두 가지 넣어 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① "감사합니다"만 쓴다 → "무엇이 고마웠나요?" 하고 물어 해 주신 일을 덧붙이게 한다. ② 부탁이나 바라는 것을 고마운 말로 여긴다(사탕을 주세요) → 해 주신 일과 바라는 것을 나누어 본다. ③ 인터뷰한 분의 일을 기억하지 못한다 → 27차시 기록표를 다시 펼쳐 본다.',
  }));

  lessons.push(L(31, {
    title: '알아낸 하루를 모둠별로 발표하기',
    objective: '모둠이 알아낸 분의 하루와 내 하루의 같은 점·다른 점을 차례에 맞게 발표하고, 다른 모둠의 발표를 바른 태도로 들을 수 있다.',
    illustration: ART('four small groups of children standing beside paper posters in a classroom gallery, one child pointing to a two-row day ribbon while others listen', '우리 모둠이 알아낸 하루', [
      { motif: 'house', x: 110, y: 214, color: 'sky' }, { motif: 'star', x: 250, y: 96, s: 0.5 }, { motif: 'flower', x: 390, y: 228, color: 'buttercup' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"발표할 때 무엇부터 말하면 듣는 사람이 알아듣기 쉬울까요?" 발표 차례(누구를 만났는지 → 그분의 하루 → 나와 다른 점 → 느낀 점)를 칠판에 붙인다. 시연 단추로 첫 두 카드가 차례대로 놓이는 모습을 보여 준다. 모둠마다 발표 시간은 2분이라고 알린다.',
        student: '우리 모둠에서 내가 맡아 말할 부분을 정해요.',
        demo: { tool: 'story', options: { cards: [{ id: 'who', text: '우리는 간호사 선생님을 만났어요', motif: 'house' }, { id: 'day', text: '선생님은 밤 10시에 일을 시작해요', motif: 'moon' }], slots: ['누구를', '그분의 하루'], shuffle: false }, sequence: [{ order: ['who', 'day'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 발표 차례와 내용 정리하기', minutes: 10, tool: 'story',
            teacher: '"발표 카드가 뒤섞이면 듣는 사람이 헷갈려요." 모둠별로 발표 차례를 맞춰 보게 한 뒤, 같은 점·다른 점 카드를 정리하게 한다. 4분이 지나면 모둠 안에서 맡은 부분을 한 번씩 소리 내어 연습한다.',
            task: '발표 문장을 차례대로 놓고, 우리 모둠 발표 내용을 같은 점과 다른 점으로 정리해요.',
            levels: CARD_LV,
            items: [
              { prompt: '발표 문장 세 개를 차례대로 놓아 보세요.', toolOptions: { hint1: '발표는 듣는 친구가 처음 듣는다고 생각하고, 누구 이야기인지부터 알려 줘요. 카드마다 무엇을 알려 주는 문장인지 먼저 찾아요.', cards: [{ id: 'diff', text: '나와 달리 낮에 잠을 자요', motif: 'sun' }, { id: 'who', text: '우리는 경비원 아저씨를 만났어요', motif: 'house' }, { id: 'day', text: '아저씨는 밤새 아파트를 돌아요', motif: 'moon' }], slots: ['누구를', '그분의 하루', '나와 다른 점'] },
                target: { order: ['who', 'day', 'diff'] }, difficulty: 0.1 },
              { prompt: '발표 문장 네 개를 차례대로 놓아 보세요.', toolOptions: { hint1: '발표는 듣는 친구가 처음 듣는다고 생각하고, 누구 이야기인지부터 알려 줘요. 카드마다 무엇을 알려 주는 문장인지 먼저 찾아요.', cards: [{ id: 'felt', text: '새벽에 길이 깨끗한 까닭을 알게 되어 고마웠어요', motif: 'flower' }, { id: 'day', text: '그분은 새벽 5시부터 거리를 쓸어요', motif: 'leaf' }, { id: 'diff', text: '나는 그때 자고 있어요', motif: 'moon' }, { id: 'who', text: '우리는 환경미화원을 만났어요', motif: 'house' }], slots: ['누구를', '그분의 하루', '나와 다른 점', '느낀 점'] },
                target: { order: ['who', 'day', 'diff', 'felt'] }, difficulty: 0.15 },
              { prompt: '발표에 넣을 문장의 빈칸을 채워 보세요.', toolOptions: { mode: 'fill', cards: ['낮에', '밤에', '새벽에'], slots: [{ id: 'b1', who: '나', motif: 'moon', label: '나는 밤에 자고, 경비원 아저씨는 ___ 자요.' }] },
                target: { fill: { b1: '낮에' } }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['낮에', '밤에', '새벽에', '저녁에'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 모둠 발표와 듣기', minutes: 18, tool: 'kitchen',
            teacher: '"발표를 들을 때 꼭 할 일은 무엇일까요?" 점검 목록으로 듣는 태도를 정한 뒤, 네 모둠이 차례로 2분씩 발표한다(모두 8분). 모둠이 바뀔 때마다 듣는 사람은 \'나와 다른 점\' 하나를 활동지에 적는다. 끝난 뒤 질문을 하나씩 받는다.',
            task: '듣는 태도를 정하고, 모둠별로 2분씩 발표한 뒤 다른 모둠의 발표를 듣고 적어요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '발표를 들을 때 할 일만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '발표를 들을 때', items: [{ id: 'look', text: '발표하는 친구를 바라봐요' }, { id: 'talk', text: '옆 친구와 다른 이야기를 해요' }, { id: 'note', text: '나와 다른 점을 하나 적어요' }, { id: 'laugh', text: '틀린 말에 크게 웃어요' }] },
                target: { checklist: ['look', 'note'] }, difficulty: 0.05,
                levels: { easy: { toolOptions: { items: [{ id: 'look', text: '발표하는 친구를 바라봐요' }, { id: 'talk', text: '옆 친구와 다른 이야기를 해요' }, { id: 'note', text: '나와 다른 점을 하나 적어요' }] } }, challenge: { toolOptions: { items: [{ id: 'look', text: '발표하는 친구를 바라봐요' }, { id: 'talk', text: '옆 친구와 다른 이야기를 해요' }, { id: 'note', text: '나와 다른 점을 하나 적어요' }, { id: 'laugh', text: '틀린 말에 크게 웃어요' }, { id: 'ask', text: '끝난 뒤에 손을 들고 물어요' }] }, prompt: '발표를 들을 때 할 일만 모두 표시해 보세요. 세 가지예요.', target: { checklist: ['look', 'note', 'ask'] } } } },
              { prompt: '우리 모둠 차례에 2분 동안 발표했으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '다른 세 모둠의 발표를 듣고 활동지에 \'나와 다른 점\'을 하나씩 적었으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"다른 모둠 발표에서 가장 놀라웠던 하루는 누구의 하루였나요?" 두세 명이 까닭과 함께 말한다. 다음 시간에는 우리가 만난 분께 감사 카드를 만들어 전한다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { cards: [{ id: 'day', text: '그분은 새벽 4시에 빵을 구워요', motif: 'sun' }, { id: 'who', text: '우리는 제빵사를 만났어요', motif: 'house' }] }, prompt: '발표 문장 두 개를 차례대로 놓아 보세요.', target: { order: ['who', 'day'] }, difficulty: 0.05 },
          { type: 'choice', prompt: '친구가 발표하다 말이 막혔을 때 알맞은 행동은?', options: ['크게 웃어요', '조용히 기다려 줘요', '대신 말해 버려요'], answer: 1, difficulty: 0.05, explain: '친구가 다시 말할 수 있게 조용히 기다려 줘요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '모둠 발표 듣기',
      items: [
        { type: 'table', prompt: '다른 모둠의 발표를 듣고 쓰세요.', columns: ['모둠', '만난 분', '나와 다른 점'], rows: 3 },
        { type: 'table', prompt: '우리 모둠 발표 차례를 쓰세요.', columns: ['차례', '말할 내용', '맡은 사람'], cells: [['누구를', '', ''], ['그분의 하루', '', ''], ['나와 다른 점', '', ''], ['느낀 점', '', '']] },
        { type: 'choice', prompt: '발표를 들을 때 할 일에 ○ 하세요.', options: ['발표하는 친구를 바라봐요', '옆 친구와 이야기해요'], answer: '발표하는 친구를 바라봐요' },
        { type: 'short', prompt: '발표를 듣고 더 묻고 싶은 것을 쓰세요.' },
      ],
      easy: {
        note: '발표 차례: 누구를 → 그분의 하루 → 나와 다른 점 → 느낀 점',
        items: [
          { type: 'short', prompt: '우리 모둠이 만난 분을 쓰세요.' },
          { type: 'choice', prompt: '발표를 들을 때 할 일에 ○ 하세요.', options: ['조용히 들어요', '크게 웃어요'], answer: '조용히 들어요' },
          { type: 'draw', prompt: '가장 기억에 남는 발표 속 분을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 초록 테두리가 생겨요. 발표에서는 \'누구를\' 한 문장을 맡아요.',
      base: '발표 차례를 맞추고 맡은 부분을 말해요.',
      challenge: '함정 카드가 섞여 있어요. 발표 뒤 질문을 하나 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 발표가 한 사람에게 몰린다 → 네 부분을 한 명씩 나누어 맡긴다. ② 2분을 넘긴다 → 모래시계나 타이머를 앞에 둔다. ③ 듣는 학생이 적지 않는다 → 모둠이 바뀔 때 30초씩 적을 시간을 준다. 발표 순서는 미리 정해 칠판에 적어 둔다.',
  }));

  lessons.push(L(32, {
    title: '고마운 분께 감사 카드 만들어 전하기',
    objective: '30차시에 쓴 고마운 말을 넣어 감사 카드를 만들고, 그분께 전할 방법과 때를 정할 수 있다.',
    illustration: ART('a folded paper thank-you card decorated with hearts and flowers, being handed with both hands to a smiling school guard by the school gate', '마음을 담은 감사 카드', [
      { motif: 'flower', x: 110, y: 228, color: 'rose' }, { motif: 'house', x: 380, y: 214, color: 'sky' }, { motif: 'star', x: 250, y: 96, s: 0.5 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '선생님이 만든 감사 카드를 보여 준다. "카드 앞면에는 무엇이 있고, 안쪽에는 무엇을 썼나요?" 앞면은 그림, 안쪽은 30차시에 쓴 고마운 말이라는 것을 짚는다. 시연 단추로 카드 만드는 첫 두 단계가 차례대로 놓이는 모습을 보여 준다.',
        student: '30차시에 쓴 고마운 말을 활동지에서 찾아 펼쳐 둬요.',
        demo: { tool: 'story', options: { cards: [{ id: 'fold', text: '종이를 반으로 접어요', motif: 'leaf' }, { id: 'front', text: '앞면에 그림을 꾸며요', motif: 'flower' }], shuffle: false }, sequence: [{ order: ['fold', 'front'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 카드 만드는 차례 정하기', minutes: 7, tool: 'story',
            teacher: '"글을 먼저 쓸까요, 접기부터 할까요?" 접지 않고 쓰면 글이 접힌 자리에 걸린다는 것을 보여 준다. 차례를 맞춘 뒤 칠판에 붙여 두고 그대로 만든다.',
            task: '감사 카드 만드는 차례를 정해요.',
            levels: CARD_LV,
            items: [
              { prompt: '감사 카드 만드는 차례 세 단계를 놓아 보세요.', toolOptions: { hint1: '카드마다 "이 일을 하려면 무엇이 먼저 되어 있어야 할까?" 하고 물어 보고, 맨 먼저 할 일부터 놓아요.', cards: [{ id: 'write', text: '접은 종이 안쪽에 고마운 말을 써요', motif: 'star' }, { id: 'pick', text: '카드로 쓸 색도화지를 골라요', motif: 'flower' }, { id: 'fold', text: '고른 종이를 반으로 접어요', motif: 'leaf' }] },
                target: { order: ['pick', 'fold', 'write'] }, difficulty: 0.05 },
              { prompt: '감사 카드 만들고 전하는 차례 네 단계를 놓아 보세요.', toolOptions: { hint1: '카드마다 "이 일을 하려면 무엇이 먼저 되어 있어야 할까?" 하고 물어 보고, 맨 먼저 할 일부터 놓아요.', cards: [{ id: 'give', text: '두 손으로 드리며 인사해요', motif: 'sun' }, { id: 'write', text: '안쪽에 고마운 말을 써요', motif: 'star' }, { id: 'name', text: '맨 아래에 내 이름을 써요', motif: 'house' }, { id: 'fold', text: '종이를 반으로 접어요', motif: 'leaf' }] },
                target: { order: ['fold', 'write', 'name', 'give'] }, difficulty: 0.15 },
              { prompt: '카드를 전할 때 하는 말의 빈칸을 채워 보세요.', toolOptions: { mode: 'fill', cards: ['받아 주세요', '가져가세요', '버려 주세요'], slots: [{ id: 'b1', who: '나', motif: 'sun', label: '"고마운 마음을 담았어요. ___."' }] },
                target: { fill: { b1: '받아 주세요' } }, difficulty: 0.05,
                levels: { challenge: { toolOptions: { cards: ['받아 주세요', '가져가세요', '버려 주세요', '빨리 읽어요'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 감사 카드 꾸미고 쓰기', minutes: 21, tool: 'collage',
            teacher: '판에서 앞면 그림을 먼저 꾸며 본 뒤, 실제 도화지 카드에 색종이를 오려 붙이고 안쪽에 고마운 말을 쓴다(12분). 다 만든 학생은 점검 목록으로 스스로 확인한다. 그분이 하시는 일을 떠올릴 수 있는 그림(빵, 소방차, 책 등)을 넣도록 권한다.',
            task: '판에서 카드 앞면을 꾸며 보고, 실제 카드를 만들어 고마운 말을 써요.',
            levels: {
              easy: { shapes: ['circle', 'heart', 'star'], colors: ['빨강', '분홍', '노랑'] },
              base: { shapes: ['circle', 'heart', 'star', 'square', 'triangle', 'leaf'], colors: ['빨강', '분홍', '노랑', '초록', '파랑', '주황'] },
              challenge: {},
            },
            items: [
              { prompt: '카드 앞면에 빨강 하트 두 개와 노랑 별 적어도 한 개 붙여 보세요.', target: { has: [{ shape: 'heart', color: '빨강', min: 2 }, { shape: 'star', color: '노랑', min: 1 }] }, difficulty: 0.05,
                levels: { challenge: { prompt: '카드 앞면에 빨강 하트 두 개와 노랑 별 적어도 한 개를 붙이고, 노랑 별 하나를 하트에 겹쳐 붙여 보세요.', target: { has: [{ shape: 'heart', color: '빨강', min: 2 }, { shape: 'star', color: '노랑', min: 1 }], overlap: 1 } } } },
              { prompt: '그분이 하시는 일을 떠올릴 수 있게 조각 적어도 여섯 개 써서 앞면을 꾸미고 점검해 보세요.', target: { selfCheck: ['그분이 하시는 일이 그림에 보여요', '고마운 마음을 나타내는 모양을 넣었어요', '짝에게 무슨 그림인지 말했어요'], minPieces: 6 }, difficulty: 0.1 },
              { prompt: '실제 카드를 만들고 안쪽에 고마운 말과 내 이름을 썼으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"이 카드를 언제, 어떻게 전해 드릴까요?" 모둠마다 전할 때(점심시간, 하굣길 등)와 함께 갈 사람을 정한다. 학교 밖 분께는 선생님이나 보호자와 함께 전한다는 약속을 한다. 다음 시간부터는 \'전시\'를 주제로 새 공부를 시작한다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { cards: [{ id: 'give', text: '카드를 드리며 인사해요', motif: 'sun' }, { id: 'make', text: '카드에 고마운 말을 써요', motif: 'star' }] }, prompt: '두 일을 차례대로 놓아 보세요.', target: { order: ['make', 'give'] }, difficulty: 0.05 },
          { type: 'choice', prompt: '학교 밖에서 일하시는 분께 카드를 전할 때 알맞은 방법은?', options: ['밤에 혼자 찾아가요', '보호자나 선생님과 함께 가요', '모르는 길로 가요'], answer: 1, difficulty: 0.1, explain: '학교 밖에서는 어른과 함께 가야 안전해요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '감사 카드 만들기',
      items: [
        { type: 'table', prompt: '카드를 받을 분과 전할 계획을 쓰세요.', columns: ['받을 분', '전할 때', '함께 갈 사람'], rows: 1 },
        { type: 'draw', prompt: '카드 앞면에 넣을 그림을 먼저 그려 보세요.' },
        { type: 'short', prompt: '카드 안쪽에 쓸 고마운 말을 쓰세요.' },
        { type: 'choice', prompt: '카드를 전할 때 알맞은 모습에 ○ 하세요.', options: ['두 손으로 드리며 인사해요', '던져 주고 뛰어가요'], answer: '두 손으로 드리며 인사해요' },
      ],
      easy: {
        note: '접기 → 앞면 꾸미기 → 안쪽에 쓰기',
        items: [
          { type: 'short', prompt: '카드를 받을 분을 쓰세요.' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '_____ 해 주셔서 감사합니다.' },
          { type: 'draw', prompt: '카드 앞면 그림을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 초록 테두리가 생겨요. 조각 모양과 색이 적어요. 고마운 말은 한 문장이에요.',
      base: '카드를 꾸미고 고마운 말을 네 부분으로 써요.',
      challenge: '함정 카드가 섞여 있어요. 모든 모양과 색을 쓸 수 있고, 별을 하트에 겹쳐 붙이며, 그분이 하시는 일을 그림 두 가지로 나타내요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 꾸미기에만 시간을 쓴다 → 꾸미기 8분, 쓰기 4분으로 나누어 알린다. ② 고마운 말을 다시 처음부터 쓰려 한다 → 30차시 활동지를 옮겨 쓰게 한다. ③ 학교 밖 분께 혼자 전하러 가려 한다 → 어른과 함께 간다는 약속을 정리에서 꼭 짚는다. 카드를 전한 뒤의 소감은 다음 날 아침 시간에 짧게 나눈다.',
  }));

  // ───────────────────────── 33~38차시: 전시를 찾아 관람 계획 세우기 ─────────────────────────

  lessons.push(L(33, {
    title: '작품을 볼 수 있는 곳 찾기',
    objective: '미술관·박물관·학교 게시판처럼 작품을 볼 수 있는 곳을 찾고, 우리 반 게시판의 작품을 실제로 둘러볼 수 있다.',
    illustration: ART('a cut-paper town with a museum with columns, a library with a small exhibit corner, and a school hallway with children\'s drawings pinned on a board', '작품을 볼 수 있는 곳', [
      { motif: 'house', x: 120, y: 214, color: 'lavender' }, { motif: 'tree', x: 250, y: 214 }, { motif: 'house', x: 380, y: 216, color: 'mint' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"그림이나 만들기 작품을 본 적이 있는 곳을 말해 볼까요?" 학생이 말한 곳을 칠판에 적는다. "여러 사람이 작품을 볼 수 있게 늘어놓아 보여 주는 것을 \'전시\'라고 해요." 우리 교실 뒤 게시판도 작은 전시라는 것을 짚는다. 시연 단추로 \'미술관\' 카드가 바구니에 들어가는 모습을 보여 준다.',
        student: '작품을 본 적이 있는 곳을 하나 떠올려 짝에게 말해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'pick', basket: '작품을 볼 수 있어요', cards: ['미술관', '주차장'], shuffle: false }, sequence: [{ pick: ['미술관'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 전시를 볼 수 있는 곳 고르기', minutes: 10, tool: 'mindmap',
            teacher: '"이곳에 가면 작품을 늘어놓아 보여 주나요?" 카드마다 묻는다. \'문구점\'을 고르는 학생에게 "문구점에는 그림 도구를 팔지요. 작품을 보여 주려고 늘어놓은 곳인가요?" 하고 되묻는다.',
            task: '작품을 늘어놓아 보여 주는 곳을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '작품을 볼 수 있는 곳만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '작품을 볼 수 있어요', cards: ['미술관', '세탁소', '박물관', '주유소'] },
                target: { pick: ['미술관', '박물관'] }, difficulty: 0.05 },
              { prompt: '작품을 볼 수 있는 곳과 그렇지 않은 곳으로 나누어 보세요.', toolOptions: { topic: '어디서 볼까요?', slots: ['작품을 볼 수 있어요', '작품을 보여 주는 곳이 아니에요'], cards: ['학교 복도 작품 게시판', '문구점', '도서관 전시 코너', '버스 정류장 의자', '미술관'] },
                target: { sort: { '작품을 볼 수 있어요': ['학교 복도 작품 게시판', '도서관 전시 코너', '미술관'], '작품을 보여 주는 곳이 아니에요': ['문구점', '버스 정류장 의자'] } }, difficulty: 0.15 },
              { prompt: '전시하는 곳과 그곳에서 볼 수 있는 것을 이어 보세요.', toolOptions: { mode: 'match', topic: '무엇을 볼까요?', slots: [{ id: 's1', label: '미술관' }, { id: 's2', label: '박물관' }, { id: 's3', label: '교실 뒤 게시판' }], cards: ['화가가 그린 그림', '옛날 사람이 쓰던 물건', '우리 반 친구의 그림'] },
                target: { match: { s1: '화가가 그린 그림', s2: '옛날 사람이 쓰던 물건', s3: '우리 반 친구의 그림' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['화가가 그린 그림', '옛날 사람이 쓰던 물건', '우리 반 친구의 그림', '오늘 먹을 반찬'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 동네 지도에서 찾고 교실 전시 둘러보기', minutes: 16, tool: 'map',
            teacher: '"우리 동네 지도에서 작품을 보러 갈 수 있는 곳은 어디일까요?" 기둥 건물 기호가 박물관·미술관이라는 것을 짚는다. 지도 문항을 마친 뒤 6분 동안 교실 뒤 게시판과 복도 작품을 실제로 둘러보며 마음에 드는 작품 하나를 정하게 한다. 작품을 만지지 않고 눈으로만 본다는 것을 미리 말한다.',
            task: '동네 지도에서 작품을 볼 수 있는 곳에 핀을 꽂고, 교실과 복도의 작품을 실제로 둘러봐요.',
            levels: { easy: { readout: true }, base: {}, challenge: {} },
            items: [
              { prompt: '작품을 보러 갈 수 있는 곳에 핀을 꽂아 보세요.', toolOptions: { grid: [5, 3], places: [{ name: '시립 미술관', icon: 'museum', at: [3, 1] }, { name: '시장', icon: 'market', at: [1, 0] }, { name: '공원', icon: 'park', at: [0, 2] }] }, target: { place: '시립 미술관' }, difficulty: 0.05,
                levels: { challenge: { toolOptions: { grid: [6, 4], places: [{ name: '시립 미술관', icon: 'museum', at: [4, 1] }, { name: '시장', icon: 'market', at: [1, 0] }, { name: '공원', icon: 'park', at: [0, 3] }, { name: '병원', icon: 'hospital', at: [2, 2] }, { name: '우체국', icon: 'post', at: [5, 3] }] } } } },
              { prompt: '옛날 사람이 쓰던 물건을 보러 갈 곳에 핀을 꽂아 보세요.', toolOptions: { grid: [5, 3], places: [{ name: '역사 박물관', icon: 'museum', at: [4, 2] }, { name: '우체국', icon: 'post', at: [2, 0] }, { name: '소방서', icon: 'fire', at: [0, 1] }, { name: '아파트', icon: 'apartment', at: [2, 2] }] }, target: { place: '역사 박물관' }, difficulty: 0.1 },
              { prompt: '교실 뒤 게시판과 복도 작품을 6분 동안 눈으로 둘러보고 마음에 드는 작품을 하나 정했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"둘러본 작품 가운데 마음에 든 작품은 누구의 무엇이었나요?" 두세 명이 작품 이름과 까닭을 말한다. 다음 시간에는 전시를 볼 때 지킬 약속을 정한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', basket: '작품을 볼 수 있어요', cards: ['박물관', '세차장', '학교 작품 게시판'] }, prompt: '작품을 볼 수 있는 곳을 모두 골라 보세요.', target: { pick: ['박물관', '학교 작품 게시판'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '\'전시\'의 뜻으로 알맞은 것은?', options: ['작품을 늘어놓아 여러 사람에게 보여 주는 것', '물건을 싸게 파는 것', '작품을 혼자 숨겨 두는 것'], answer: 0, difficulty: 0.1, explain: '여러 사람이 볼 수 있게 늘어놓아 보여 주는 것이 전시예요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '작품을 볼 수 있는 곳',
      items: [
        { type: 'check', prompt: '작품을 볼 수 있는 곳에 모두 ✓ 하세요.', options: ['미술관', '세탁소', '박물관', '학교 작품 게시판', '주유소'] },
        { type: 'figure', prompt: '지도에서 작품을 보러 갈 수 있는 곳을 찾아 이름을 쓰세요.', tool: 'map', options: { grid: [5, 3], places: [{ name: '어린이 미술관', icon: 'museum', at: [1, 1] }, { name: '시장', icon: 'market', at: [3, 0] }, { name: '병원', icon: 'hospital', at: [4, 2] }] }, figures: [{ caption: '우리 동네 지도' }], answer: '어린이 미술관' },
        { type: 'table', prompt: '오늘 둘러본 작품 가운데 마음에 든 것을 쓰세요.', columns: ['작품을 본 곳', '누구의 무엇', '마음에 든 까닭'], rows: 1 },
        { type: 'short', prompt: '가 보고 싶은 전시를 쓰세요.' },
      ],
      easy: {
        note: '여러 사람에게 작품을 보여 주는 것을 \'전시\'라고 해요.',
        items: [
          { type: 'choice', prompt: '작품을 볼 수 있는 곳에 ○ 하세요.', options: ['미술관', '세탁소'], answer: '미술관' },
          { type: 'short', prompt: '오늘 본 작품 가운데 마음에 든 것을 쓰세요.' },
          { type: 'draw', prompt: '마음에 든 작품을 떠올려 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 초록 테두리가 생기고, 지도에 핀 자리 이름이 보여요.',
      base: '모두 고른 뒤 확인을 눌러요.',
      challenge: '함정 카드가 섞여 있어요. 지도에 장소가 더 많아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 물건을 파는 곳(문구점·화방)을 전시하는 곳으로 고른다 → \'보여 주려고 늘어놓았나, 팔려고 늘어놓았나\'를 묻는다. ② 학교 게시판은 전시가 아니라고 여긴다 → 여러 사람이 볼 수 있게 붙여 둔 것도 전시라고 알려 준다. ③ 둘러보기 중에 작품을 만진다 → 둘러보기 전에 손을 뒤로 하는 약속을 정한다(34차시에서 자세히 다룬다).',
  }));

  lessons.push(L(34, {
    title: '전시를 볼 때 지킬 약속 정하기',
    objective: '전시장에서 지킬 약속과 그 까닭을 말하고, 약속을 어기려는 친구에게 알맞게 말할 수 있다.',
    illustration: ART('children quietly looking at framed paintings in a gallery, one child with hands behind the back, a small sign with a crossed-out hand next to a sculpture', '전시장 약속', [
      { motif: 'house', x: 120, y: 214, color: 'lavender' }, { motif: 'flower', x: 250, y: 228, color: 'rose' }, { motif: 'star', x: 380, y: 96, s: 0.5 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"우리가 만든 작품을 누가 함부로 만지거나 뛰어다니다 부딪치면 어떤 마음이 들까요?" 학생 대답을 듣고 "작품을 지키고, 다른 사람도 편하게 보려면 약속이 필요해요" 하고 말한다. 시연 단추로 \'작품은 눈으로만 봐요\'가 \'지켜요\' 가지에 들어가는 모습을 보여 준다.',
        student: '도서관이나 박물관에서 지켰던 약속을 하나 떠올려 봐요.',
        demo: { tool: 'mindmap', options: { topic: '전시장 약속', slots: ['지켜요', '하면 안 돼요'], cards: ['작품은 눈으로만 봐요'], shuffle: false }, sequence: [{ sort: { '지켜요': ['작품은 눈으로만 봐요'], '하면 안 돼요': [] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 약속과 그 까닭', minutes: 13, tool: 'mindmap',
            teacher: '"이 약속을 지키지 않으면 무슨 일이 생길까요?" 약속마다 까닭을 말하게 한다. \'사진은 아무 데서나 찍어도 돼요\'를 지켜요에 놓는 학생에게 "전시장마다 사진을 찍지 말라는 곳도 있어요. 안내판을 먼저 봐야 해요" 하고 짚는다.',
            task: '전시장에서 지킬 일과 하면 안 되는 일을 나누고, 약속과 그 까닭을 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '전시장에서 지킬 일과 하면 안 되는 일로 나누어 보세요.', toolOptions: { topic: '전시장 약속', slots: ['지켜요', '하면 안 돼요'], cards: ['작은 목소리로 말해요', '작품 앞에서 뛰어다녀요', '줄을 서서 차례대로 봐요', '작품을 손으로 쓸어 봐요'] },
                target: { sort: { '지켜요': ['작은 목소리로 말해요', '줄을 서서 차례대로 봐요'], '하면 안 돼요': ['작품 앞에서 뛰어다녀요', '작품을 손으로 쓸어 봐요'] } }, difficulty: 0.05 },
              { prompt: '여섯 장을 지킬 일과 하면 안 되는 일로 나누어 보세요.', toolOptions: { topic: '전시장 약속', slots: ['지켜요', '하면 안 돼요'], cards: ['사진을 찍기 전에 안내판을 봐요', '음료수를 들고 들어가요', '작품과 한 걸음 떨어져서 봐요', '친구를 큰 소리로 불러요', '다른 사람이 보고 있으면 기다려요', '작품 앞 줄을 넘어가요'] },
                target: { sort: { '지켜요': ['사진을 찍기 전에 안내판을 봐요', '작품과 한 걸음 떨어져서 봐요', '다른 사람이 보고 있으면 기다려요'], '하면 안 돼요': ['음료수를 들고 들어가요', '친구를 큰 소리로 불러요', '작품 앞 줄을 넘어가요'] } }, difficulty: 0.2 },
              { prompt: '약속과 그 까닭을 이어 보세요.', toolOptions: { mode: 'match', topic: '왜 지킬까요?', slots: [{ id: 's1', label: '작품은 눈으로만 봐요' }, { id: 's2', label: '작은 목소리로 말해요' }, { id: 's3', label: '음료수는 밖에 두어요' }], cards: ['손때가 묻으면 작품이 상해요', '다른 사람이 조용히 볼 수 있어요', '쏟으면 작품이 젖어요'] },
                target: { match: { s1: '손때가 묻으면 작품이 상해요', s2: '다른 사람이 조용히 볼 수 있어요', s3: '쏟으면 작품이 젖어요' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['손때가 묻으면 작품이 상해요', '다른 사람이 조용히 볼 수 있어요', '쏟으면 작품이 젖어요', '빨리 집에 갈 수 있어요'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 이럴 때는 어떻게 말할까요?', minutes: 13, tool: 'emotion',
            teacher: '"친구가 작품을 만지려고 해요. 화를 내지 않고 어떻게 알려 줄 수 있을까요?" 학생 둘이 나와 짧게 역할놀이를 한 뒤 도구에서 고른다. 소리치는 방법을 고른 학생에게 "그러면 전시장이 더 시끄러워지지 않을까요?" 하고 묻는다.',
            task: '전시장에서 생긴 일을 읽고 약속을 지키는 알맞은 행동을 골라요.',
            levels: SCALE_LV,
            items: [
              { prompt: '친구가 조각 작품을 만지려고 해요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '도윤', situation: '도윤이가 "이거 매끈해 보여" 하며 조각에 손을 뻗어요.', choices: [
                { id: 'shout', text: '"만지지 마!" 하고 크게 소리쳐요', result: '전시장 사람들이 모두 놀라서 돌아봐요.', mood: '부끄러움', why: '전시장에서는 어떤 목소리로 말하기로 했나요?' },
                { id: 'whisper', text: '"눈으로만 보자" 하고 작게 말해요', result: '도윤이가 손을 내리고 고개를 끄덕여요.', mood: '편안함' }] }, target: { choice: 'whisper' }, difficulty: 0.05,
                levels: { challenge: { toolOptions: { choices: [
                  { id: 'shout', text: '"만지지 마!" 하고 크게 소리쳐요', result: '전시장 사람들이 모두 놀라서 돌아봐요.', mood: '부끄러움', why: '전시장에서는 어떤 목소리로 말하기로 했나요?' },
                  { id: 'same', text: '나도 같이 만져 봐요', result: '조각에 손자국이 생겼어요.', mood: '걱정', why: '손때가 묻으면 작품은 어떻게 될까요?' },
                  { id: 'whisper', text: '"눈으로만 보자" 하고 작게 말해요', result: '도윤이가 손을 내리고 고개를 끄덕여요.', mood: '편안함' }] } } } },
              { prompt: '그림 앞에 다른 사람이 오래 서 있어요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '하린', situation: '하린이가 보고 싶은 그림 앞에 할아버지가 서서 오래 보고 계세요.', choices: [
                { id: 'push', text: '할아버지 앞으로 끼어들어요', result: '할아버지가 그림을 보지 못하게 되었어요.', mood: '속상함', why: '먼저 보고 있던 사람은 누구였나요?' },
                { id: 'wait', text: '옆 그림을 보며 차례를 기다려요', result: '할아버지가 "먼저 보렴" 하며 자리를 비켜 주셨어요.', mood: '고마움' }] }, target: { choice: 'wait' }, difficulty: 0.1 },
              { prompt: '전시장 약속을 잘 지킬 수 있을지, 내 마음의 자신감을 내 생각대로 골라 보세요.', toolOptions: { mode: 'scale', situation: '다음 주에 반 친구들과 전시를 보러 가요.', feeling: '자신감', after: '가장 지키기 어려울 것 같은 약속을 짝에게 말해 봐요.' }, target: { level: 'any' }, difficulty: 0.05 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"우리 반 전시장 약속을 세 가지로 정한다면 무엇이 좋을까요?" 학생 의견을 모아 칠판에 \'우리 반 전시장 약속\' 세 줄을 적고 교실에 붙인다. 다음 시간에는 전시 안내문을 읽고 언제 갈 수 있는지 알아본다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '전시장 약속', slots: ['지켜요', '하면 안 돼요'], cards: ['사진을 찍어도 되는지 안내판을 먼저 봐요', '그림에 바짝 얼굴을 대요'] }, prompt: '두 행동을 지킬 일과 하면 안 되는 일로 나누어 보세요.', target: { sort: { '지켜요': ['사진을 찍어도 되는지 안내판을 먼저 봐요'], '하면 안 돼요': ['그림에 바짝 얼굴을 대요'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '전시장에서 작품을 만지면 안 되는 까닭은?', options: ['손때가 묻어 작품이 상할 수 있어서', '작품이 뜨거워서', '만지면 돈을 내야 해서'], answer: 0, difficulty: 0.1, explain: '손때나 힘 때문에 작품이 상할 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '전시장 약속',
      items: [
        { type: 'table', prompt: '전시장에서 지킬 일과 하면 안 되는 일을 쓰세요.', columns: ['지켜요', '하면 안 돼요'], rows: 3 },
        { type: 'choice', prompt: '친구가 작품을 만지려 할 때 알맞은 말에 ○ 하세요.', options: ['"눈으로만 보자"(작게)', '"만지지 마!"(크게)'], answer: '"눈으로만 보자"(작게)' },
        { type: 'short', prompt: '\'작은 목소리로 말해요\'를 지켜야 하는 까닭을 쓰세요.' },
        { type: 'short', prompt: '우리 반 전시장 약속 세 가지를 쓰세요.' },
      ],
      easy: {
        note: '작품은 눈으로만, 목소리는 작게, 차례는 지켜요.',
        items: [
          { type: 'choice', prompt: '전시장에서 지킬 일에 ○ 하세요.', options: ['작은 목소리로 말해요', '뛰어다녀요'], answer: '작은 목소리로 말해요' },
          { type: 'choice', prompt: '하면 안 되는 일에 ○ 하세요.', options: ['작품을 만져요', '차례를 기다려요'], answer: '작품을 만져요' },
          { type: 'draw', prompt: '전시장 약속을 지키는 내 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 가지에 초록 테두리가 생겨요. 마음 크기는 세 칸이에요.',
      base: '모두 나눈 뒤 확인을 눌러요. 약속마다 까닭을 말해요.',
      challenge: '카드가 여섯 장으로 늘고 함정 까닭이 섞여 있어요. 고를 행동도 셋이에요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 약속을 외우기만 하고 까닭을 모른다 → \'지키지 않으면?\' 하고 거꾸로 묻는다. ② 친구의 잘못을 큰 소리로 알린다 → 작게 말하기 역할놀이를 한 번 더 한다. ③ 사진 찍기는 늘 된다/안 된다로 단정한다 → 전시장마다 다르니 안내판을 먼저 본다고 알려 준다.',
  }));

  lessons.push(L(35, {
    title: '전시 안내문 읽고 갈 수 있는 때 고르기',
    objective: '전시 안내문에서 여는 날·여는 시각·쉬는 날을 찾아 읽고, 전시를 보러 갈 수 있는 때를 고를 수 있다.',
    illustration: ART('a paper poster for a children\'s art exhibition taped on a wall, showing a calendar strip with one day crossed out and a clock showing ten', '전시 안내문 읽기', [
      { motif: 'flower', x: 110, y: 228, color: 'buttercup' }, { motif: 'house', x: 380, y: 214, color: 'lavender' }, { motif: 'sun', x: 250, y: 90, s: 0.5 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '전시 안내문(예시)을 화면에 띄운다. "어린이 그림 전시 · 여는 날: 화요일~일요일 · 여는 시각: 오전 10시~오후 6시 · 들어가는 시각: 오후 5시까지 · 쉬는 날: 월요일." "월요일에 가면 어떻게 될까요?" 하고 묻는다. 시연 단추로 \'수요일 오전 11시\'가 \'갈 수 있어요\' 바구니에 들어가는 모습을 보여 준다.',
        student: '안내문에서 요일과 시각이 적힌 곳을 손가락으로 짚어 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'pick', basket: '갈 수 있어요', cards: ['수요일 오전 11시', '월요일 오전 11시'], shuffle: false }, sequence: [{ pick: ['수요일 오전 11시'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 갈 수 있는 때와 갈 수 없는 때', minutes: 14, tool: 'mindmap',
            teacher: '"요일 먼저, 그다음 시각을 봐요." 두 단계로 따지게 한다. \'토요일 오후 5시 30분\'을 갈 수 있다고 고르는 학생에게 "문은 6시까지 열려 있지만 들어가는 시각은 언제까지라고 적혀 있나요?" 하고 안내문의 그 줄을 짚게 한다.',
            task: '안내문: 화요일~일요일 오전 10시~오후 6시에 열어요 · 들어가는 것은 오후 5시까지 · 월요일은 쉬어요. 안내문을 읽고 전시를 보러 갈 수 있는 때를 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '안내문을 보고 갈 수 있는 때만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '갈 수 있어요', cards: ['화요일 오후 2시', '월요일 오후 2시', '일요일 오전 10시 30분', '목요일 밤 8시'] },
                target: { pick: ['화요일 오후 2시', '일요일 오전 10시 30분'] }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['화요일 오후 2시', '월요일 오후 2시', '일요일 오전 10시 30분', '목요일 밤 8시', '금요일 오후 5시 30분'] } } } },
              { prompt: '갈 수 있는 때와 갈 수 없는 때로 나누어 보세요.', toolOptions: { topic: '어린이 그림 전시', slots: ['갈 수 있어요', '갈 수 없어요'], cards: ['토요일 오후 4시', '토요일 오후 5시 30분', '월요일 오전 10시', '금요일 오전 9시', '수요일 오후 3시'] },
                target: { sort: { '갈 수 있어요': ['토요일 오후 4시', '수요일 오후 3시'], '갈 수 없어요': ['토요일 오후 5시 30분', '월요일 오전 10시', '금요일 오전 9시'] } }, difficulty: 0.25 },
              { prompt: '갈 수 없는 때와 그 까닭을 이어 보세요.', toolOptions: { mode: 'match', topic: '왜 못 갈까요?', slots: [{ id: 's1', label: '월요일 오후 1시' }, { id: 's2', label: '목요일 오전 8시' }, { id: 's3', label: '일요일 오후 5시 30분' }], cards: ['쉬는 날이에요', '아직 문을 열지 않았어요', '들어가는 시각이 지났어요'] },
                target: { match: { s1: '쉬는 날이에요', s2: '아직 문을 열지 않았어요', s3: '들어가는 시각이 지났어요' } }, difficulty: 0.2 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 안내문 속 시각 읽기', minutes: 12, tool: 'clock',
            teacher: '"안내문에 적힌 시각을 시계로 만들어 봐요." 여는 시각·들어가는 마지막 시각·닫는 시각을 차례로 만든다. 분침과 시침을 바꿔 돌리는 학생에게 "짧은바늘은 몇 시를 가리켜요" 하고 짚는다.',
            task: '전시 안내문 속 시각을 시계로 만들거나 읽어요.',
            levels: {
              easy: { hourZone: true, showMinuteNumbers: true, minuteStep: 30 },
              base: { minuteStep: 30 },
              challenge: { minuteStep: 5 },
            },
            items: [
              { prompt: '전시장이 문을 여는 시각 10시를 만들어 보세요.', state: { h: 12, m: 0 }, target: { h: 10, m: 0 }, difficulty: 0.05 },
              { prompt: '들어가는 마지막 시각 오후 5시를 만들어 보세요.', state: { h: 12, m: 0 }, target: { h: 5, m: 0 }, difficulty: 0.1 },
              { prompt: '시계를 보세요. 이 시각에 도착하면 전시장에 들어갈 수 있을까요?', state: { h: 5, m: 30 }, toolOptions: { readOnly: true, choices: ['들어갈 수 있어요', '들어갈 수 없어요'] }, target: { pick: 1, h: 5, m: 30 }, difficulty: 0.2 },
              { prompt: '오후 3시 30분에 도착하기로 했어요. 3시 30분을 만들어 보세요.', state: { h: 1, m: 0 }, target: { h: 3, m: 30 }, difficulty: 0.15 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"우리 가족이 이 전시를 보러 간다면 언제가 좋을까요?" 두세 명이 요일과 시각을 말하고, 친구들이 안내문에 맞는지 엄지로 표시한다. 다음 시간에는 전시장 안내도를 보고 길을 찾는다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', basket: '갈 수 있어요', cards: ['금요일 오후 1시', '화요일 오후 1시', '수요일 오전 7시'] }, prompt: '곤충 사진 전시 안내문: 수요일~일요일 오전 9시~오후 4시에 열어요, 월요일·화요일은 쉬어요. 갈 수 있는 때를 골라 보세요.', target: { pick: ['금요일 오후 1시'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '안내문에서 \'쉬는 날\'을 보는 까닭은?', options: ['그날은 문을 열지 않아서', '그날은 표가 공짜라서', '그날만 작품이 바뀌어서'], answer: 0, difficulty: 0.1, explain: '쉬는 날에는 문을 열지 않으니 다른 날에 가야 해요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '전시 안내문 읽기',
      items: [
        { type: 'table', prompt: '안내문: 화요일~일요일 오전 10시~오후 6시에 열어요 · 들어가는 것은 오후 5시까지 · 월요일은 쉬어요. 안내문을 읽고 빈칸을 채우세요.', columns: ['알아볼 것', '안내문 내용'], cells: [['여는 날', ''], ['여는 시각', ''], ['들어가는 마지막 시각', ''], ['쉬는 날', '']] },
        { type: 'check', prompt: '갈 수 있는 때에 모두 ✓ 하세요.', options: ['화요일 오후 2시', '월요일 오후 2시', '토요일 오전 11시', '일요일 오후 5시 30분'] },
        { type: 'figure', prompt: '시계가 가리키는 시각을 쓰고, 이 시각에 들어갈 수 있는지 ○, × 하세요.', tool: 'clock', options: { readOnly: true }, figures: [{ state: { h: 10, m: 30 }, caption: '(    )시 (    )분 → ○ / ×' }], answer: '10시 30분, ○' },
        { type: 'short', prompt: '우리 가족이 전시를 보러 갈 요일과 시각을 쓰세요.' },
      ],
      easy: {
        note: '안내문: 화요일~일요일 오전 10시~오후 6시에 열어요 · 들어가는 것은 오후 5시까지 · 월요일은 쉬어요.',
        items: [
          { type: 'choice', prompt: '쉬는 날에 ○ 하세요.', options: ['월요일', '수요일'], answer: '월요일' },
          { type: 'choice', prompt: '갈 수 있는 때에 ○ 하세요.', options: ['수요일 오후 2시', '월요일 오후 2시'], answer: '수요일 오후 2시' },
          { type: 'short', prompt: '가고 싶은 요일을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 카드에 초록 테두리가 생겨요. 시계에 분 숫자와 짧은바늘 자리가 보여요.',
      base: '요일을 먼저, 시각을 다음에 따져요.',
      challenge: '들어가는 마지막 시각까지 따져야 하는 카드가 섞여 있어요. 시계는 5분 단위로 움직여요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 요일만 보고 시각을 보지 않는다(금요일 오전 9시) → 요일·시각 두 칸에 차례로 ✓ 하게 한다. ② 닫는 시각과 들어가는 마지막 시각을 헷갈린다 → 두 줄을 다른 색으로 밑줄 긋는다. ③ 오전·오후를 시계로 구분하려 한다 → 시계는 같고 말로 붙인다고 알려 준다. 안내문은 예시이며 실제 전시는 안내문을 직접 확인해야 한다.',
  }));

  lessons.push(L(36, {
    title: '전시장 안내도 보고 길 찾기',
    objective: '전시장 안내도에서 가고 싶은 곳을 찾고, 관람하는 차례를 정할 수 있다.',
    illustration: ART('a simple paper floor plan of a small gallery with an entrance, an information desk, two exhibition rooms, a rest area and restrooms, a child pointing at it', '전시장 안내도', [
      { motif: 'house', x: 120, y: 214, color: 'lavender' }, { motif: 'tree', x: 250, y: 214 }, { motif: 'house', x: 380, y: 216, color: 'mint' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"전시장에 처음 가면 어디부터 가야 할지 어떻게 알 수 있을까요?" 들어가는 곳 옆 안내도를 보여 준다. "안내도는 전시장을 위에서 내려다본 그림이에요." 시연 단추로 \'안내 데스크\'에 핀이 꽂히는 모습을 보여 준다.',
        student: '안내도에서 \'들어가는 곳\'을 찾아 손가락으로 짚어 봐요.',
        demo: { tool: 'map', options: { grid: [5, 3], title: '어린이 미술관 안내도', places: [{ name: '들어가는 곳', icon: 'dot', at: [0, 2] }, { name: '안내 데스크', icon: 'office', at: [1, 2] }] }, sequence: [{ place: '안내 데스크' }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 안내도에서 가고 싶은 곳 찾기', minutes: 13, tool: 'map',
            teacher: '"그림을 보려면 어느 방으로 가야 할까요? 안내도 이름을 읽어 봐요." 방 이름에 적힌 내용을 읽고 핀을 꽂게 한다. 기호만 보고 짐작하는 학생에게 이름을 소리 내어 읽게 한다.',
            task: '전시장 안내도를 보고 알맞은 곳에 핀을 꽂아요.',
            levels: { easy: { readout: true }, base: {}, challenge: {} },
            items: [
              { prompt: '그림을 보러 갈 곳에 핀을 꽂아 보세요.', toolOptions: { grid: [5, 3], title: '어린이 미술관 안내도', places: [{ name: '들어가는 곳', icon: 'dot', at: [0, 2] }, { name: '그림 전시실', icon: 'museum', at: [2, 0] }, { name: '쉼터', icon: 'park', at: [4, 2] }] }, target: { place: '그림 전시실' }, difficulty: 0.05,
                levels: { challenge: { toolOptions: { places: [{ name: '들어가는 곳', icon: 'dot', at: [0, 2] }, { name: '조각 전시실', icon: 'museum', at: [1, 0] }, { name: '그림 전시실', icon: 'museum', at: [3, 0] }, { name: '쉼터', icon: 'park', at: [4, 2] }, { name: '안내 데스크', icon: 'office', at: [2, 2] }] } } } },
              { prompt: '다리가 아파 잠깐 앉아 쉬고 싶어요. 쉴 곳에 핀을 꽂아 보세요.', toolOptions: { grid: [5, 3], title: '어린이 미술관 안내도', places: [{ name: '들어가는 곳', icon: 'dot', at: [0, 2] }, { name: '그림 전시실', icon: 'museum', at: [1, 0] }, { name: '조각 전시실', icon: 'museum', at: [3, 0] }, { name: '쉼터', icon: 'park', at: [4, 2] }, { name: '안내 데스크', icon: 'office', at: [1, 2] }] }, target: { place: '쉼터' }, difficulty: 0.1 },
              { prompt: '친구와 떨어졌어요. 도움을 받을 수 있는 곳에 핀을 꽂아 보세요.', toolOptions: { grid: [5, 3], title: '어린이 미술관 안내도', places: [{ name: '들어가는 곳', icon: 'dot', at: [0, 2] }, { name: '그림 전시실', icon: 'museum', at: [1, 0] }, { name: '조각 전시실', icon: 'museum', at: [3, 0] }, { name: '쉼터', icon: 'park', at: [4, 2] }, { name: '안내 데스크', icon: 'office', at: [2, 2] }] }, target: { place: '안내 데스크' }, difficulty: 0.15 },
              { prompt: '안내도를 보고 물음에 답해 보세요.', toolOptions: { grid: [5, 3], title: '어린이 미술관 안내도', readOnly: true, places: [{ name: '들어가는 곳', icon: 'dot', at: [0, 2] }, { name: '그림 전시실', icon: 'museum', at: [1, 0] }, { name: '조각 전시실', icon: 'museum', at: [3, 0] }, { name: '쉼터', icon: 'park', at: [4, 2] }], ask: { q: '돌로 만든 작품을 보려면 어디로 갈까요?', choices: ['그림 전시실', '조각 전시실', '쉼터'] } }, target: { pick: 1 }, difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 관람 차례 정하기', minutes: 13, tool: 'story',
            teacher: '"들어가자마자 쉼터부터 갈까요?" 들어가는 곳 → 안내도 보기 → 전시실 → 쉼터 → 나가는 곳 차례를 함께 정한다. 모둠마다 우리 반이 볼 전시실 차례를 정해 활동지에 쓰게 한다.',
            task: '전시장에서 관람하는 차례를 정해요.',
            levels: CARD_LV,
            items: [
              { prompt: '관람 차례 세 장을 놓아 보세요.', toolOptions: { hint1: '전시장에 들어갈 때, 보는 동안, 나올 때 하는 일을 나누어 보고 들어갈 때 할 일부터 놓아요.', cards: [{ id: 'room', text: '전시실에서 작품을 봐요', motif: 'flower' }, { id: 'map', text: '들어가서 안내도를 봐요', motif: 'house' }, { id: 'out', text: '나가는 곳으로 나와요', motif: 'sun' }] },
                target: { order: ['map', 'room', 'out'] }, difficulty: 0.05 },
              { prompt: '우리 반은 그림 전시실을 먼저, 조각 전시실을 다음에 보기로 했어요. 관람 차례 다섯 장을 놓아 보세요.', toolOptions: { cards: [{ id: 'rest', text: '쉼터에서 본 것을 이야기해요', motif: 'leaf' }, { id: 'room1', text: '그림 전시실을 봐요', motif: 'flower' }, { id: 'map', text: '안내도에서 차례를 정해요', motif: 'house' }, { id: 'out', text: '나가는 곳으로 나와요', motif: 'sun' }, { id: 'room2', text: '조각 전시실을 봐요', motif: 'star' }] },
                levels: { challenge: { prompt: '우리 반은 그림 전시실을 먼저, 조각 전시실을 다음에 보기로 했어요. 관람 차례 다섯 장을 놓고, 전시장에서 하지 않을 일은 남겨요.', toolOptions: { slots: 5, cards: [{ id: 'rest', text: '쉼터에서 본 것을 이야기해요', motif: 'leaf' }, { id: 'room1', text: '그림 전시실을 봐요', motif: 'flower' }, { id: 'map', text: '안내도에서 차례를 정해요', motif: 'house' }, { id: 'out', text: '나가는 곳으로 나와요', motif: 'sun' }, { id: 'room2', text: '조각 전시실을 봐요', motif: 'star' }, { id: 'touch', text: '조각을 손으로 만져 봐요', motif: 'cloud' }] } } },
                target: { order: ['map', 'room1', 'room2', 'rest', 'out'] }, difficulty: 0.2,
                hints: ['오늘 정한 차례는 그림 전시실이 먼저, 조각 전시실이 다음이에요.', '전시실을 다 본 뒤에 쉼터에서 쉬어요.', '안내도 → 그림 → 조각 → 쉼터 → 나가는 곳이에요.'] },
              { prompt: '빈칸에 알맞은 카드를 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['안내 데스크', '쉼터', '전시실'], slots: [{ id: 'b1', who: '나', motif: 'house', label: '길을 잃으면 ___ 에 가서 도움을 청해요.' }] },
                target: { fill: { b1: '안내 데스크' } }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"전시장에서 길을 잃으면 어떻게 할까요?" 그 자리에 서서 기다리거나 안내 데스크에 가는 약속을 다시 말한다. 다음 시간에는 작품 옆에 붙은 이름표를 읽는 방법을 배운다.',
        exitTicket: [
          { type: 'tool', tool: 'map', options: { grid: [5, 3], title: '박물관 안내도', places: [{ name: '옛날 그릇 방', icon: 'museum', at: [1, 0] }, { name: '옛날 옷 방', icon: 'museum', at: [3, 0] }, { name: '쉼터', icon: 'park', at: [2, 2] }] }, prompt: '옛날 사람들이 입던 옷을 보러 갈 곳에 핀을 꽂아 보세요.', target: { place: '옛날 옷 방' }, difficulty: 0.1 },
          { type: 'choice', prompt: '전시장 안내도를 보는 까닭은?', options: ['가고 싶은 곳을 찾으려고', '작품을 사려고', '그림을 그리려고'], answer: 0, difficulty: 0.05, explain: '안내도에는 전시실과 쉼터 같은 곳이 그려져 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '전시장 안내도',
      items: [
        { type: 'figure', prompt: '안내도를 보고 그림을 보러 갈 곳에 ○ 하세요.', tool: 'map', options: { grid: [5, 3], title: '어린이 미술관 안내도', places: [{ name: '들어가는 곳', icon: 'dot', at: [0, 2] }, { name: '그림 전시실', icon: 'museum', at: [2, 0] }, { name: '조각 전시실', icon: 'museum', at: [4, 0] }, { name: '쉼터', icon: 'park', at: [3, 2] }] }, figures: [{ caption: '어린이 미술관 안내도' }], answer: '그림 전시실' },
        { type: 'table', prompt: '우리 모둠의 관람 차례를 쓰세요.', columns: ['차례', '갈 곳'], cells: [['1', ''], ['2', ''], ['3', ''], ['4', '']] },
        { type: 'choice', prompt: '길을 잃었을 때 갈 곳에 ○ 하세요.', options: ['안내 데스크', '전시실 안쪽 구석'], answer: '안내 데스크' },
        { type: 'short', prompt: '안내도에서 가장 가 보고 싶은 곳과 까닭을 쓰세요.' },
      ],
      easy: {
        note: '안내도는 전시장을 위에서 내려다본 그림이에요.',
        items: [
          { type: 'choice', prompt: '쉬고 싶을 때 갈 곳에 ○ 하세요.', options: ['쉼터', '그림 전시실'], answer: '쉼터' },
          { type: 'short', prompt: '가장 먼저 보고 싶은 전시실을 쓰세요.' },
          { type: 'draw', prompt: '우리 교실을 위에서 본 안내도로 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '지도에 핀 자리 이름이 보이고, 차례 카드가 맞으면 초록 테두리가 생겨요.',
      base: '장소 이름을 읽고 핀을 꽂아요.',
      challenge: '장소가 늘고, 전시장에서 하지 않을 함정 카드를 골라내며 다섯 단계 관람 차례를 정해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 안내도의 기호만 보고 이름을 읽지 않는다 → 이름을 소리 내어 읽고 핀을 꽂게 한다. ② 안내도를 실제 그림처럼 옆에서 본 것으로 여긴다 → 교실을 위에서 본 그림을 그려 견주어 본다. ③ 길을 잃으면 혼자 찾아다니려 한다 → 그 자리에서 기다리거나 안내 데스크로 간다는 약속을 정한다.',
  }));

  lessons.push(L(37, {
    title: '작품 이름표 읽고 내 작품 이름표 만들기',
    objective: '작품 옆 이름표에서 작품 이름·만든 사람·만든 해·재료를 찾아 읽고, 내 작품의 이름표를 만들 수 있다.',
    illustration: ART('a small white paper label card pinned beside a framed painting of swirling night sky, a child reading the label with a finger under the words', '작품 이름표 읽기', [
      { motif: 'star', x: 120, y: 90, s: 0.5 }, { motif: 'moon', x: 380, y: 86, s: 0.5 }, { motif: 'house', x: 250, y: 214, color: 'sky' }], true),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '고흐의 「별이 빛나는 밤」 사진과 이름표(예시)를 함께 띄운다. "「별이 빛나는 밤」 · 빈센트 반 고흐 · 1889년 · 캔버스에 유화 물감." "이 작은 종이에는 무엇이 적혀 있을까요?" 이름표는 작품을 소개하는 짧은 글이라는 것을 알려 준다. 시연 단추로 \'빈센트 반 고흐\'가 \'만든 사람\' 칸에 놓이는 모습을 보여 준다.',
        student: '이름표에서 사람 이름을 찾아 손가락으로 짚어 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '작품 이름표', slots: [{ id: 's1', label: '만든 사람' }], cards: ['빈센트 반 고흐'], shuffle: false }, sequence: [{ match: { s1: '빈센트 반 고흐' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 이름표의 네 가지 읽기', minutes: 12, tool: 'mindmap',
            teacher: '"숫자 뒤에 \'년\'이 붙어 있으면 무엇일까요? \'~에 물감\'처럼 적힌 것은요?" 낱말의 생김새로 칸을 찾게 한다. 작품 이름과 만든 사람을 바꿔 놓는 학생에게 "「 」 안에 든 것이 작품 이름이에요" 하고 짚는다.',
            task: '작품 이름표에 적힌 것을 작품 이름·만든 사람·만든 해·재료 칸에 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '이름표 「수련」 · 클로드 모네 · 1906년 을 읽고 칸에 놓아 보세요.', toolOptions: { mode: 'match', topic: '작품 이름표', slots: [{ id: 's1', label: '작품 이름' }, { id: 's2', label: '만든 사람' }, { id: 's3', label: '만든 해' }], cards: ['1906년', '「수련」', '클로드 모네'] },
                target: { match: { s1: '「수련」', s2: '클로드 모네', s3: '1906년' } }, difficulty: 0.1 },
              { prompt: '이름표 「씨름」 · 김홍도 · 1700년대 · 종이에 먹과 물감 을 읽고 칸에 놓아 보세요.', toolOptions: { mode: 'match', topic: '작품 이름표', slots: [{ id: 's1', label: '작품 이름' }, { id: 's2', label: '만든 사람' }, { id: 's3', label: '만든 때' }, { id: 's4', label: '재료' }], cards: ['종이에 먹과 물감', '김홍도', '「씨름」', '1700년대'] },
                target: { match: { s1: '「씨름」', s2: '김홍도', s3: '1700년대', s4: '종이에 먹과 물감' } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['종이에 먹과 물감', '김홍도', '「씨름」', '1700년대', '입장료 1,000원'] } } } },
              { prompt: '이름표에 들어갈 것만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '이름표에 써요', cards: ['작품 이름', '만든 사람', '만든 사람의 집 주소', '재료', '작품 값을 깎는 방법'] },
                target: { pick: ['작품 이름', '만든 사람', '재료'] }, difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 내 작품 이름표 만들기', minutes: 14, tool: 'story',
            teacher: '"33차시에 마음에 들었던 작품이나 내가 만든 작품에 이름표를 붙여 볼까요?" 이름표 차례(작품 이름 → 만든 사람 → 만든 때 → 재료)를 맞춘 뒤, 카드 종이에 내 작품 이름표를 실제로 쓴다. 이름은 내 이름 대신 별명을 써도 된다고 알려 준다.',
            task: '이름표 차례를 정하고, 카드 종이에 내 작품 이름표를 써서 작품 옆에 붙여요.',
            levels: CARD_LV,
            items: [
              { prompt: '이름표에 쓰는 차례대로 놓아 보세요.', toolOptions: { hint1: '이름표 칸의 이름(작품 이름·만든 사람…)을 먼저 읽고, 카드마다 어느 칸의 내용인지 찾아 놓아요.', cards: [{ id: 'year', text: '2026년', motif: 'sun' }, { id: 'title', text: '「우리 동네 밤」', motif: 'moon' }, { id: 'maker', text: '2학년 별빛반 하늘', motif: 'star' }], slots: ['작품 이름', '만든 사람', '만든 때'] },
                target: { order: ['title', 'maker', 'year'] }, difficulty: 0.1 },
              { prompt: '네 줄 이름표를 차례대로 놓아 보세요.', toolOptions: { hint1: '이름표 칸의 이름(작품 이름·만든 사람…)을 먼저 읽고, 카드마다 어느 칸의 내용인지 찾아 놓아요.', cards: [{ id: 'stuff', text: '색종이와 풀', motif: 'leaf' }, { id: 'maker', text: '2학년 별빛반 바다', motif: 'star' }, { id: 'title', text: '「고마운 급식실」', motif: 'house' }, { id: 'year', text: '2026년 11월', motif: 'sun' }], slots: ['작품 이름', '만든 사람', '만든 때', '재료'] },
                levels: { challenge: { prompt: '네 줄 이름표를 차례대로 놓아 보세요. 이름표에 쓰지 않는 카드는 남겨요.', toolOptions: { cards: [{ id: 'stuff', text: '색종이와 풀', motif: 'leaf' }, { id: 'maker', text: '2학년 별빛반 바다', motif: 'star' }, { id: 'title', text: '「고마운 급식실」', motif: 'house' }, { id: 'year', text: '2026년 11월', motif: 'sun' }, { id: 'home', text: '우리 집 주소', motif: 'cloud' }] } } },
                target: { order: ['title', 'maker', 'year', 'stuff'] }, difficulty: 0.15 },
              { prompt: '카드 종이에 내 작품 이름표를 네 줄로 쓰고 작품 옆에 붙였으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"친구 작품 이름표에서 가장 재미있는 작품 이름은 무엇이었나요?" 두세 명이 친구 작품의 이름을 읽어 준다. 다음 시간에는 실제 전시와 온라인 전시를 알아보고 우리 반 전시 알림판을 만든다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '작품 이름표', slots: [{ id: 's1', label: '작품 이름' }, { id: 's2', label: '만든 사람' }], cards: ['신사임당', '「초충도」'] }, prompt: '이름표 「초충도」 · 신사임당 을 읽고 칸에 놓아 보세요.', target: { match: { s1: '「초충도」', s2: '신사임당' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '작품 이름표를 읽으면 알 수 있는 것은?', options: ['작품을 만든 사람', '전시장 가는 버스 번호', '오늘 날씨'], answer: 0, difficulty: 0.05, explain: '이름표에는 작품 이름, 만든 사람, 만든 때, 재료가 적혀 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '작품 이름표',
      items: [
        { type: 'table', prompt: '이름표 「별이 빛나는 밤」 · 빈센트 반 고흐 · 1889년 · 캔버스에 유화 물감 을 읽고 쓰세요.', columns: ['알아볼 것', '이름표 내용'], cells: [['작품 이름', ''], ['만든 사람', ''], ['만든 해', ''], ['재료', '']] },
        { type: 'check', prompt: '이름표에 들어갈 것에 모두 ✓ 하세요.', options: ['작품 이름', '만든 사람의 전화번호', '재료', '만든 때'] },
        { type: 'table', prompt: '내 작품 이름표를 쓰세요.', columns: ['작품 이름', '만든 사람', '만든 때', '재료'], rows: 1 },
        { type: 'short', prompt: '작품 이름을 그렇게 지은 까닭을 쓰세요.' },
      ],
      easy: {
        note: '「 」 안에 든 것이 작품 이름이에요.',
        items: [
          { type: 'choice', prompt: '「수련」 · 클로드 모네 에서 작품 이름에 ○ 하세요.', options: ['「수련」', '클로드 모네'], answer: '「수련」' },
          { type: 'short', prompt: '내 작품 이름을 지어 쓰세요.' },
          { type: 'draw', prompt: '내 작품 이름표를 꾸며 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 이름표는 세 줄이에요.',
      base: '네 줄 이름표를 읽고 칸에 놓아요.',
      challenge: '이름표에 없는 함정 카드가 섞여 있어요. 작품 이름을 지은 까닭도 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 작품 이름과 만든 사람을 헷갈린다 → 「 」 표시를 짚게 한다. ② 재료를 \'그림\'이라고만 쓴다 → 무엇으로 만들었는지(색종이·크레파스) 묻는다. ③ 내 이름표에 실명 전체를 쓰기 꺼린다 → 별명이나 이름 한 글자로 써도 된다고 알린다. 보여 주는 작품(고흐·모네·김홍도·신사임당)은 모두 저작권 보호 기간이 끝난 작품이다.',
  }));

  lessons.push(L(38, {
    title: '실제 전시와 온라인 전시 알아보고 알림판 만들기',
    objective: '직접 가서 보는 전시와 화면으로 보는 온라인 전시의 특징을 나누고, 우리 반 전시를 알리는 알림판을 만들 수 있다.',
    illustration: ART('on the left children walking through a real gallery room, on the right a child looking at the same painting on a tablet screen at home, a paper poster between them', '직접 보는 전시, 화면으로 보는 전시', [
      { motif: 'house', x: 120, y: 214, color: 'lavender' }, { motif: 'star', x: 250, y: 96, s: 0.5 }, { motif: 'house', x: 380, y: 216, color: 'sky' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '미술관 누리집의 온라인 전시 화면(예시)을 잠깐 보여 준다. "전시장에 가지 않고도 작품을 볼 수 있어요. 직접 가서 볼 때와 무엇이 다를까요?" 학생 생각을 두세 개 듣는다. 시연 단추로 \'작품 크기를 몸으로 느껴요\'가 \'직접 가서 봐요\' 가지에 들어가는 모습을 보여 준다.',
        student: '화면으로 그림을 본 적이 있는지 떠올려 봐요.',
        demo: { tool: 'mindmap', options: { topic: '두 가지 전시', slots: ['직접 가서 봐요', '화면으로 봐요'], cards: ['작품 크기를 몸으로 느껴요'], shuffle: false }, sequence: [{ sort: { '직접 가서 봐요': ['작품 크기를 몸으로 느껴요'], '화면으로 봐요': [] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 두 가지 전시 견주기', minutes: 11, tool: 'mindmap',
            teacher: '"집에서 밤에도 볼 수 있는 것은 어느 쪽일까요? 붓 자국의 두께를 눈앞에서 볼 수 있는 것은요?" 카드마다 \'가야 할 수 있나, 집에서도 할 수 있나\'를 묻는다. 한쪽이 더 좋다고만 말하는 학생에게 두 쪽의 좋은 점을 하나씩 말하게 한다.',
            task: '직접 가서 보는 전시와 화면으로 보는 온라인 전시의 특징을 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '네 장을 두 가지 전시로 나누어 보세요.', toolOptions: { topic: '두 가지 전시', slots: ['직접 가서 봐요', '화면으로 봐요'], cards: ['집에서 밤에도 볼 수 있어요', '작품 앞에 서 볼 수 있어요', '먼 나라 미술관도 볼 수 있어요', '조각을 빙 돌며 볼 수 있어요'] },
                target: { sort: { '직접 가서 봐요': ['작품 앞에 서 볼 수 있어요', '조각을 빙 돌며 볼 수 있어요'], '화면으로 봐요': ['집에서 밤에도 볼 수 있어요', '먼 나라 미술관도 볼 수 있어요'] } }, difficulty: 0.1,
                levels: { challenge: { prompt: '네 장을 두 가지 전시로 나누어 보세요. 어느 전시에서도 할 수 없는 일은 카드 칸에 남겨요.', toolOptions: { cards: ['집에서 밤에도 볼 수 있어요', '작품 앞에 서 볼 수 있어요', '먼 나라 미술관도 볼 수 있어요', '조각을 빙 돌며 볼 수 있어요', '작품을 마음대로 만질 수 있어요'] } } } },
              { prompt: '여섯 장을 두 가지 전시와 둘 다로 나누어 보세요.', toolOptions: { topic: '두 가지 전시', slots: ['직접 가서 봐요', '화면으로 봐요', '둘 다'], cards: ['쉬는 날에도 볼 수 있어요', '붓 자국 두께를 눈앞에서 봐요', '작품 이름표를 읽을 수 있어요', '화면을 키워 작은 곳을 크게 봐요', '전시장 약속을 지켜야 해요', '느낀 점을 이야기할 수 있어요'] },
                target: { sort: { '직접 가서 봐요': ['붓 자국 두께를 눈앞에서 봐요', '전시장 약속을 지켜야 해요'], '화면으로 봐요': ['쉬는 날에도 볼 수 있어요', '화면을 키워 작은 곳을 크게 봐요'], '둘 다': ['작품 이름표를 읽을 수 있어요', '느낀 점을 이야기할 수 있어요'] } }, difficulty: 0.25 },
              { prompt: '친구의 바람과 알맞은 전시를 이어 보세요.', toolOptions: { mode: 'match', topic: '어떤 전시가 좋을까요?', slots: [{ id: 's1', label: '"프랑스 미술관 그림을 오늘 보고 싶어요"' }, { id: 's2', label: '"큰 조각을 둘레를 돌며 보고 싶어요"' }], cards: ['화면으로 보는 온라인 전시', '직접 가서 보는 전시'] },
                target: { match: { s1: '화면으로 보는 온라인 전시', s2: '직접 가서 보는 전시' } }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 우리 반 전시 알림판 만들기', minutes: 17, tool: 'collage',
            teacher: '"다음 주에 교실 뒤에서 우리 반 작품 전시를 열어요. 다른 반 친구들이 오고 싶게 알림판을 만들어 볼까요?" 알림판에 들어갈 것(전시 이름·여는 날·여는 곳·그림)을 칠판에 적는다. 판에서 꾸민 뒤 모둠별 도화지에 알림판을 실제로 만든다(10분).',
            task: '판에서 알림판 그림을 꾸며 보고, 모둠별로 도화지에 우리 반 전시 알림판을 만들어요.',
            levels: {
              easy: { shapes: ['square', 'circle', 'star'], colors: ['노랑', '파랑', '빨강'] },
              base: { shapes: ['square', 'circle', 'star', 'triangle', 'heart', 'leaf'], colors: ['노랑', '파랑', '빨강', '초록', '분홍', '주황'] },
              challenge: {},
            },
            items: [
              { prompt: '알림판 가운데에 큰 네모 액자 한 개를 붙이고, 둘레에 노랑 별을 적어도 세 개 붙여 보세요.', target: { has: [{ shape: 'square', size: 'l', n: 1 }, { shape: 'star', color: '노랑', min: 3 }] }, difficulty: 0.1,
                levels: { challenge: { prompt: '큰 네모 액자 한 개, 노랑 별 꼭 네 개, 빨강 하트 적어도 두 개로 알림판을 꾸며 보세요.', target: { has: [{ shape: 'square', size: 'l', n: 1 }, { shape: 'star', color: '노랑', n: 4 }, { shape: 'heart', color: '빨강', min: 2 }] } } } },
              { prompt: '조각을 적어도 여섯 개 써서 알림판 그림을 꾸미고 점검해 보세요.', target: { selfCheck: ['전시라는 것이 그림으로 보여요', '멀리서도 눈에 띄는 색을 썼어요', '전시 이름을 쓸 빈자리를 남겼어요'], minPieces: 6 }, difficulty: 0.1 },
              { prompt: '모둠 도화지 알림판에 전시 이름·여는 날·여는 곳을 쓰고 그림을 붙였으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"우리 모둠 알림판을 보고 다른 반 친구가 알 수 있는 것은 무엇일까요?" 알림판 두세 개를 앞에서 보여 주고, 빠진 것(여는 날 등)이 있으면 함께 찾는다. 완성한 알림판은 복도에 붙인다. 다음 시간에는 작품 하나를 천천히 오래 보는 방법을 배운다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '두 가지 전시', slots: ['직접 가서 봐요', '화면으로 봐요'], cards: ['비가 와도 집에서 볼 수 있어요', '작품 진짜 크기를 볼 수 있어요'] }, prompt: '두 장을 두 가지 전시로 나누어 보세요.', target: { sort: { '직접 가서 봐요': ['작품 진짜 크기를 볼 수 있어요'], '화면으로 봐요': ['비가 와도 집에서 볼 수 있어요'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '전시 알림판에 꼭 들어가야 할 것은?', options: ['여는 날과 여는 곳', '만든 사람의 전화번호', '오늘 급식 메뉴'], answer: 0, difficulty: 0.1, explain: '언제, 어디서 하는지 알아야 보러 올 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '두 가지 전시와 알림판',
      items: [
        { type: 'table', prompt: '두 가지 전시의 좋은 점을 쓰세요.', columns: ['직접 가서 보는 전시', '화면으로 보는 전시'], rows: 2 },
        { type: 'choice', prompt: '먼 나라 미술관의 그림을 오늘 보고 싶을 때 알맞은 것에 ○ 하세요.', options: ['화면으로 보는 온라인 전시', '직접 가서 보는 전시'], answer: '화면으로 보는 온라인 전시' },
        { type: 'table', prompt: '우리 반 전시 알림판에 쓸 내용을 정하세요.', columns: ['전시 이름', '여는 날', '여는 곳'], rows: 1 },
        { type: 'draw', prompt: '알림판에 넣을 그림을 그려 보세요.' },
      ],
      easy: {
        note: '알림판에는 전시 이름, 여는 날, 여는 곳을 써요.',
        items: [
          { type: 'choice', prompt: '집에서 볼 수 있는 전시에 ○ 하세요.', options: ['온라인 전시', '직접 가서 보는 전시'], answer: '온라인 전시' },
          { type: 'short', prompt: '우리 반 전시 이름을 지어 쓰세요.' },
          { type: 'draw', prompt: '알림판 그림을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 가지에 초록 테두리가 생겨요. 조각 모양과 색이 적어요.',
      base: '두 가지 전시로 나누고 알림판을 꾸며요.',
      challenge: '\'둘 다\' 가지와 어느 전시에도 맞지 않는 함정 카드가 있어요. 모든 모양과 색을 쓰고, 별 개수를 꼭 맞추어 알림판을 꾸며요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 온라인 전시가 늘 더 좋다(또는 나쁘다)고 단정한다 → 두 쪽의 좋은 점을 하나씩 말하게 한다. ② 알림판에 그림만 그리고 날짜·곳을 빠뜨린다 → 칠판의 세 가지를 체크하며 만든다. ③ 온라인 전시를 혼자 찾아 들어가려 한다 → 누리집은 선생님이나 보호자와 함께 연다고 알려 준다.',
  }));

  // ───────────────────────── 39~43차시: 천천히 보고 느끼기(감상) ─────────────────────────

  lessons.push(L(39, {
    title: '김홍도의 「씨름」 천천히 오래 보기',
    objective: '옛 그림 「씨름」을 천천히 오래 보며 사람과 물건을 하나씩 찾고, 오래 볼수록 새로 보이는 것을 말할 수 있다.',
    illustration: ART('children sitting on the classroom floor quietly looking at a large print of an old Korean ink painting of a wrestling match with spectators sitting in a circle', '천천히 오래 보면', [
      { motif: 'tree', x: 120, y: 214 }, { motif: 'star', x: 250, y: 96, s: 0.5 }, { motif: 'house', x: 380, y: 216, color: 'peach' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '김홍도의 「씨름」을 크게 띄우고 10초만 보여 준 뒤 끈다. "무엇을 보았나요?" 대답을 들은 뒤 다시 띄우고 "이번에는 1분 동안 말없이 천천히 봐요" 하고 말한다. 다 본 뒤 "아까 못 본 것이 보였나요?" 하고 묻는다. 시연 단추로 \'가운데서 씨름하는 두 사람\'이 바구니에 들어가는 모습을 보여 준다.',
        student: '1분 동안 말없이 그림을 보고 새로 찾은 것을 마음속으로 세어 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'pick', basket: '그림에 있어요', cards: ['가운데서 씨름하는 두 사람', '자동차'], shuffle: false }, sequence: [{ pick: ['가운데서 씨름하는 두 사람'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 그림 속에서 찾기', minutes: 12, tool: 'mindmap',
            teacher: '「씨름」을 계속 띄워 둔다. "카드에 적힌 것이 그림에 있는지 눈으로 찾아 손가락으로 가리켜 봐요." 찾지 못한 카드는 그림의 가장자리부터 다시 보게 한다. 그림에 없는 것을 고르는 학생에게 "그림 어디에서 보았는지 가리켜 줄래요?" 하고 묻는다.',
            task: '화면의 「씨름」을 천천히 보며 그림에 있는 것만 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '「씨름」에 있는 것만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '그림에 있어요', cards: ['둘러앉아 구경하는 사람들', '축구공', '씨름하는 두 사람', '자전거'] },
                target: { pick: ['둘러앉아 구경하는 사람들', '씨름하는 두 사람'] }, difficulty: 0.05 },
              { prompt: '더 오래 보아야 찾을 수 있는 작은 것도 있어요. 그림에 있는 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '그림에 있어요', cards: ['엿판을 멘 아이', '벗어 놓은 신발', '휴대 전화를 든 사람', '하늘을 나는 비행기', '부채를 든 사람'] },
                target: { pick: ['엿판을 멘 아이', '벗어 놓은 신발', '부채를 든 사람'] }, difficulty: 0.2 },
              { prompt: '그림 속 사람과 하는 일을 이어 보세요.', toolOptions: { mode: 'match', topic: '「씨름」 속 사람들', slots: [{ id: 's1', label: '가운데 두 사람' }, { id: 's2', label: '둥글게 앉은 사람들' }, { id: 's3', label: '엿판을 멘 아이' }], cards: ['씨름을 해요', '씨름을 구경해요', '엿을 팔아요'] },
                target: { match: { s1: '씨름을 해요', s2: '씨름을 구경해요', s3: '엿을 팔아요' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['씨름을 해요', '씨름을 구경해요', '엿을 팔아요', '그림을 그려요'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 천천히 보는 차례 익히고 짝과 보기', minutes: 15, tool: 'story',
            teacher: '"천천히 보는 데도 차례가 있어요. 전체 → 사람 → 작은 것 → 궁금한 것." 차례를 익힌 뒤, 모네의 「수련」을 띄우고 짝과 2분 동안 그 차례로 보며 찾은 것 세 가지를 활동지에 적게 한다. 빨리 끝냈다는 학생에게 "가장자리에도 무엇이 있는지 다시 볼까요?" 하고 권한다.',
            task: '천천히 보는 차례를 정하고, 짝과 「수련」을 그 차례로 보며 찾은 것을 적어요.',
            levels: CARD_LV,
            items: [
              { prompt: '천천히 보는 차례 세 장을 놓아 보세요.', toolOptions: { hint1: '그림을 볼 때 넓게 보다가 점점 좁혀 자세히 보는 차례를 떠올리고, 다 본 뒤에 하는 일을 마지막에 놓아요.', cards: [{ id: 'small', text: '작은 것을 찾아요', motif: 'star' }, { id: 'whole', text: '그림 전체를 봐요', motif: 'sun' }, { id: 'people', text: '사람이나 동물을 찾아요', motif: 'flower' }], slots: ['먼저', '다음', '그다음'] },
                target: { order: ['whole', 'people', 'small'] }, difficulty: 0.1 },
              { prompt: '천천히 보는 차례 네 장을 놓아 보세요.', toolOptions: { hint1: '그림을 볼 때 넓게 보다가 점점 좁혀 자세히 보는 차례를 떠올리고, 다 본 뒤에 하는 일을 마지막에 놓아요.', cards: [{ id: 'ask', text: '궁금한 것을 말해요', motif: 'moon' }, { id: 'small', text: '작은 것을 찾아요', motif: 'star' }, { id: 'whole', text: '그림 전체를 봐요', motif: 'sun' }, { id: 'people', text: '사람이나 동물을 찾아요', motif: 'flower' }], slots: ['1', '2', '3', '4'] },
                levels: { challenge: { prompt: '천천히 보는 차례 네 장을 놓아 보세요. 천천히 보는 방법이 아닌 카드는 남겨요.', toolOptions: { cards: [{ id: 'ask', text: '궁금한 것을 말해요', motif: 'moon' }, { id: 'small', text: '작은 것을 찾아요', motif: 'star' }, { id: 'whole', text: '그림 전체를 봐요', motif: 'sun' }, { id: 'people', text: '사람이나 동물을 찾아요', motif: 'flower' }, { id: 'skip', text: '1초 보고 다음 그림으로 가요', motif: 'cloud' }] } } },
                target: { order: ['whole', 'people', 'small', 'ask'] }, difficulty: 0.15 },
              { prompt: '짝과 「수련」을 2분 동안 천천히 보고 찾은 것 세 가지를 활동지에 적었으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오래 보았더니 새로 보인 것은 무엇이었나요?" 두세 짝이 「수련」에서 찾은 것을 말한다. 그림 속 궁금한 것(엿장수 아이는 무엇을 보고 있을까?)을 칠판에 남긴다. 다음 시간에는 마음에 든 작품을 따라 만들어 본다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', basket: '「씨름」에 있어요', cards: ['구경꾼', '텔레비전', '씨름꾼'] }, prompt: '「씨름」에 있었던 것을 모두 골라 보세요.', target: { pick: ['구경꾼', '씨름꾼'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '그림을 천천히 오래 보면 좋은 점은?', options: ['처음에 못 본 것을 찾을 수 있어요', '그림이 커져요', '빨리 끝낼 수 있어요'], answer: 0, difficulty: 0.05, explain: '오래 볼수록 작은 것과 궁금한 것이 더 보여요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '천천히 오래 보기',
      items: [
        { type: 'table', prompt: '「씨름」을 보고 찾은 것을 쓰세요.', columns: ['사람', '물건', '궁금한 것'], rows: 2 },
        { type: 'check', prompt: '「씨름」에 있는 것에 모두 ✓ 하세요.', options: ['씨름하는 두 사람', '자동차', '구경하는 사람들', '엿판을 멘 아이'] },
        { type: 'table', prompt: '짝과 「수련」을 보고 찾은 것 세 가지를 쓰세요.', columns: ['1', '2', '3'], rows: 1 },
        { type: 'short', prompt: '처음에는 못 보았는데 오래 보니 보인 것을 쓰세요.' },
      ],
      easy: {
        note: '전체 → 사람 → 작은 것 → 궁금한 것 차례로 봐요.',
        items: [
          { type: 'choice', prompt: '「씨름」 가운데에 있는 것에 ○ 하세요.', options: ['씨름하는 두 사람', '축구공'], answer: '씨름하는 두 사람' },
          { type: 'short', prompt: '그림에서 찾은 것을 하나 쓰세요.' },
          { type: 'draw', prompt: '그림에서 찾은 작은 것 하나를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 카드에 초록 테두리가 생겨요. 그림에서 찾을 것이 크게 보이는 것부터 나와요.',
      base: '그림을 보고 카드마다 그림 속 자리를 가리킨 뒤 골라요.',
      challenge: '작은 것과 함정 카드가 섞여 있어요. 궁금한 것을 두 가지 써요.',
    },
    teacherNotes: '그림 자료: 김홍도 「씨름」(1700년대, 국립중앙박물관 소장)과 모네 「수련」은 저작권 보호 기간이 끝난 작품이다. 교구 화면에는 그림이 나오지 않으므로 교사 화면에 그림을 계속 띄워 둔다. 자주 보이는 어려움: ① 10초 만에 다 봤다고 한다 → 1분 타이머를 쓰고 가장자리부터 보게 한다. ② 그림에 없는 것을 있다고 한다 → 그림에서 그 자리를 가리키게 한다. ③ 엿장수 아이를 찾지 못한다 → 그림 아래쪽 가장자리를 보라고만 알려 준다.',
  }));

  lessons.push(L(40, {
    title: '마음에 든 작품 색종이로 따라 만들기',
    objective: '작품에서 본 색과 모양을 찾아 색종이 조각으로 따라 만들고, 나만의 생각을 하나 더해 꾸밀 수 있다.',
    illustration: ART('a child gluing yellow paper circles as swirling stars onto a deep blue paper sheet, with a print of a starry night painting and another of water lilies beside the desk', '따라 만들며 느끼기', [
      { motif: 'star', x: 120, y: 90, s: 0.5 }, { motif: 'moon', x: 380, y: 86, s: 0.5 }, { motif: 'flower', x: 250, y: 228, color: 'rose' }], true),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '고흐의 「별이 빛나는 밤」과 모네의 「수련」을 나란히 띄운다. "두 그림에서 가장 많이 보이는 색은 무엇인가요? 어떤 모양이 보이나요?" 학생 대답을 칠판에 색·모양으로 나누어 적는다. 시연 단추로 \'노랑 동그라미\'가 \'별이 빛나는 밤의 별\'과 이어지는 모습을 보여 준다.',
        student: '두 그림 가운데 따라 만들고 싶은 그림을 하나 골라요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '색과 모양', slots: [{ id: 's1', label: '「별이 빛나는 밤」의 별' }], cards: ['노랑 동그라미'], shuffle: false }, sequence: [{ match: { s1: '노랑 동그라미' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 그림 속 색과 모양 찾기', minutes: 9, tool: 'mindmap',
            teacher: '"그림 속 이것을 색종이로 만든다면 어떤 색, 어떤 모양을 쓸까요?" 그림을 계속 띄워 두고 카드마다 그림의 그 자리를 가리키게 한다.',
            task: '그림 속 대상과 그것을 나타낼 색종이 조각을 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '「별이 빛나는 밤」 속 대상과 색종이 조각을 이어 보세요.', toolOptions: { mode: 'match', topic: '「별이 빛나는 밤」', slots: [{ id: 's1', label: '밤하늘' }, { id: 's2', label: '빛나는 별' }, { id: 's3', label: '마을의 집' }], cards: ['파랑 큰 바탕', '노랑 동그라미', '작은 네모'] },
                target: { match: { s1: '파랑 큰 바탕', s2: '노랑 동그라미', s3: '작은 네모' } }, difficulty: 0.1 },
              { prompt: '「수련」 속 대상과 색종이 조각을 이어 보세요.', toolOptions: { mode: 'match', topic: '「수련」', slots: [{ id: 's1', label: '연못 물' }, { id: 's2', label: '물에 뜬 잎' }, { id: 's3', label: '수련 꽃' }], cards: ['파랑 큰 바탕', '초록 동그라미', '분홍 꽃잎 모양'] },
                target: { match: { s1: '파랑 큰 바탕', s2: '초록 동그라미', s3: '분홍 꽃잎 모양' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['파랑 큰 바탕', '초록 동그라미', '분홍 꽃잎 모양', '빨강 하트'] } } } },
              { prompt: '「별이 빛나는 밤」에서 볼 수 있는 것만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '그림에 있어요', cards: ['소용돌이치는 하늘', '노란 달', '물에 뜬 수련 잎', '높이 솟은 검은 나무'] },
                target: { pick: ['소용돌이치는 하늘', '노란 달', '높이 솟은 검은 나무'] }, difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 색종이로 따라 만들고 나만의 생각 더하기', minutes: 19, tool: 'collage',
            teacher: '"따라 만들기는 똑같이 베끼는 것이 아니라, 그림에서 느낀 것을 내 손으로 다시 만들어 보는 거예요." 판에서 고른 그림을 따라 만든 뒤, 도화지에 실제 색종이를 찢어 붙여 만든다(10분). 끝으로 그림에 없던 것 하나(나, 우리 집, 친구)를 더하게 한다.',
            task: '판에서 고른 그림을 따라 만들고, 도화지에 실제 색종이로 만들며 나만의 생각을 하나 더해요.',
            levels: {
              easy: { shapes: ['circle', 'semi', 'square'], colors: ['노랑', '초록', '분홍', '검정'] },
              base: { shapes: ['circle', 'semi', 'square', 'triangle', 'star', 'leaf', 'heart'], colors: ['노랑', '초록', '분홍', '검정', '하양', '갈색', '주황'] },
              challenge: {},
            },
            items: [
              { prompt: '「별이 빛나는 밤」처럼 파란 바탕에 노랑 동그라미 별을 적어도 다섯 개, 노랑 반원 달을 한 개 붙여 보세요.', toolOptions: { bg: '파랑' }, target: { has: [{ shape: 'circle', color: '노랑', min: 5 }, { shape: 'semi', color: '노랑', n: 1 }] }, difficulty: 0.1,
                levels: { challenge: { prompt: '「별이 빛나는 밤」처럼 파란 바탕에 노랑 동그라미 별 적어도 다섯 개, 노랑 반원 달 한 개, 높이 솟은 나무로 검정 세모 한 개를 붙여 보세요.', target: { has: [{ shape: 'circle', color: '노랑', min: 5 }, { shape: 'semi', color: '노랑', n: 1 }, { shape: 'triangle', color: '검정', n: 1 }] } } } },
              { prompt: '「수련」처럼 파란 바탕에 초록 동그라미 잎을 적어도 네 개, 분홍 꽃을 적어도 두 개 붙여 보세요.', toolOptions: { bg: '파랑' }, state: { pieces: [] }, target: { has: [{ shape: 'circle', color: '초록', min: 4 }, { color: '분홍', min: 2 }] }, difficulty: 0.15 },
              { prompt: '고른 그림을 따라 만든 판에 그림에 없던 나만의 것을 더하고 점검해 보세요.', toolOptions: { bg: '파랑' }, target: { selfCheck: ['그림 속 색을 따라 썼어요', '그림 속 모양을 따라 썼어요', '그림에 없던 나만의 것을 하나 더했어요'], minPieces: 7 }, difficulty: 0.15 },
              { prompt: '도화지에 실제 색종이를 찢어 붙여 따라 만들기를 마쳤으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"내가 더한 나만의 것은 무엇이고, 왜 넣었나요?" 두세 명이 작품을 들고 말한다. 완성한 작품에는 37차시에 배운 대로 이름표를 붙인다(예: 「고흐를 따라 그린 우리 동네 밤」). 다음 시간에는 그림 속 사람들의 마음을 짐작해 본다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '색과 모양', slots: [{ id: 's1', label: '「수련」의 잎' }, { id: 's2', label: '「별이 빛나는 밤」의 달' }], cards: ['초록 동그라미', '노랑 반원'] }, prompt: '그림 속 대상과 색종이 조각을 이어 보세요.', target: { match: { s1: '초록 동그라미', s2: '노랑 반원' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '작품을 따라 만들 때 알맞은 생각은?', options: ['똑같지 않으면 실패예요', '느낀 것을 내 손으로 다시 만들어 봐요', '친구 것을 그대로 베껴요'], answer: 1, difficulty: 0.1, explain: '따라 만들기는 그림에서 느낀 것을 내 방법으로 다시 만들어 보는 거예요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '따라 만들기',
      items: [
        { type: 'table', prompt: '고른 그림에서 본 색과 모양을 쓰세요.', columns: ['그림 속 대상', '쓸 색', '쓸 모양'], rows: 3 },
        { type: 'choice', prompt: '「별이 빛나는 밤」의 하늘을 나타낼 바탕색에 ○ 하세요.', options: ['파랑', '분홍'], answer: '파랑' },
        { type: 'short', prompt: '내가 더한 나만의 것과 그 까닭을 쓰세요.' },
        { type: 'table', prompt: '내 작품 이름표를 쓰세요.', columns: ['작품 이름', '만든 사람', '재료'], rows: 1 },
      ],
      easy: {
        note: '그림의 색을 먼저 고르고, 모양을 골라요.',
        items: [
          { type: 'choice', prompt: '「수련」의 잎 색에 ○ 하세요.', options: ['초록', '빨강'], answer: '초록' },
          { type: 'short', prompt: '내가 고른 그림의 이름을 쓰세요.' },
          { type: 'draw', prompt: '따라 만들고 싶은 그림을 크레파스로 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 조각 모양과 색이 적어요.',
      base: '그림 속 색과 모양을 찾아 따라 만들어요.',
      challenge: '함정 카드가 섞여 있어요. 모든 모양과 색을 쓸 수 있고, 검정 나무까지 따라 만든 뒤 나만의 것을 두 가지 더해요.',
    },
    teacherNotes: '그림 자료: 고흐 「별이 빛나는 밤」(1889)과 모네 「수련」(1906 무렵)은 저작권 보호 기간이 끝난 작품이다. 자주 보이는 어려움: ① 똑같이 만들지 못해 속상해한다 → 따라 만들기는 베끼기가 아니라고 다시 알려 준다. ② 색은 따라 했지만 모양을 아무렇게나 붙인다 → 그림의 그 자리를 다시 가리키게 한다. ③ 나만의 것을 더하지 않는다 → "이 그림 속에 내가 있다면 어디에 있을까요?" 하고 묻는다.',
  }));

  // 정답이 없는 스스로 평가 눈금(level 'any')의 힌트 — 교구 기본 글은 '인물이 겪은 일'·'1에서 5'를 말해 쉬움(3칸)·자기 평가와 어긋난다
  var SELF_H = ['그 상황을 떠올려 보고, 지금 내 마음에 가장 가까운 눈금을 골라요.', '정답이 없는 문항이에요. 눈금 하나를 골라 눌러요.', '어느 눈금이든 내 마음이면 맞아요. 고른 까닭을 짝에게 말해 봐요.'];

  lessons.push(L(41, {
    title: '「서당」 속 사람들의 마음 짐작하기',
    objective: '김홍도의 「서당」에서 얼굴 표정과 몸짓을 단서로 그림 속 사람의 마음을 짐작하고, 그 사람에게 해 줄 말을 고를 수 있다.',
    illustration: ART('children looking at a large print of an old Korean ink painting of a village schoolroom where a small boy wipes his tears in front of a teacher while the other boys laugh', '그림 속 마음 읽기', [
      { motif: 'house', x: 120, y: 216, color: 'peach' }, { motif: 'tree', x: 380, y: 214 }, { motif: 'flower', x: 250, y: 228, color: 'lavender' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '김홍도의 「서당」을 크게 띄운다. "서당은 옛날 아이들이 글을 배우던 곳이에요. 1분 동안 말없이 보고, 가운데 아이의 얼굴을 살펴봐요." 1분 뒤 "가운데 아이는 지금 어떤 마음일까요? 그렇게 생각한 까닭은 그림 어디에 있나요?" 하고 묻는다. 까닭 없이 "슬퍼요"라고만 말하면 "손은 무엇을 하고 있나요?" 하고 단서로 돌아가게 한다. 시연 단추로 \'선생님이 입꼬리를 올리고 웃어요\' 옆에 기쁨 카드가 놓이는 모습을 보여 준다.',
        student: '그림 속 가운데 아이의 얼굴과 손을 1분 동안 살펴봐요.',
        demo: { tool: 'emotion', options: { cards: ['기쁨', '걱정'], slots: [{ id: 's1', label: '선생님이 입꼬리를 올리고 웃어요' }], shuffle: false }, sequence: [{ match: { s1: '기쁨' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 얼굴과 몸짓에서 마음 찾기', minutes: 14, tool: 'emotion',
            teacher: '「서당」을 계속 띄워 둔다. "마음은 그림에 글로 쓰여 있지 않아요. 얼굴, 손, 몸이 어디를 향하는지가 단서예요." 카드를 놓기 전에 그 사람을 손가락으로 가리키게 한다. 옷 색이나 그림 크기처럼 마음과 상관없는 것을 단서로 고르는 학생에게 "내가 슬플 때 옷 색이 바뀌나요?" 하고 되묻는다. 아이가 왜 우는지는 그림만으로 다 알 수 없으니, 단서로 짐작한 것이면 받아 준다.',
            task: '「서당」 속 사람의 얼굴과 몸짓을 보고 마음을 짐작해요.',
            levels: CARD_LV,
            items: [
              { prompt: '「서당」 속 두 사람의 마음을 짐작해 카드를 놓아 보세요.', toolOptions: { cards: ['슬픔', '즐거움', '화남'], slots: [{ id: 's1', label: '손등으로 눈물을 닦는 가운데 아이' }, { id: 's2', label: '입을 벌리고 웃는 둘레 아이들' }] },
                target: { match: { s1: '슬픔', s2: '즐거움' } }, difficulty: 0.05,
                levels: { challenge: { toolOptions: { cards: ['슬픔', '즐거움', '화남', '뿌듯함'] } } } },
              { prompt: '마음을 짐작한 까닭이 된 단서를 이어 보세요.', toolOptions: { slots: [{ id: 's1', label: '가운데 아이가 슬퍼 보여요' }, { id: 's2', label: '둘레 아이들이 즐거워 보여요' }], cards: ['눈물을 닦고 있어요', '입을 벌리고 웃어요', '옷이 하얀색이에요'], weather: false },
                target: { match: { s1: '눈물을 닦고 있어요', s2: '입을 벌리고 웃어요' } }, difficulty: 0.15,
                hints: ['그 마음일 때 얼굴이나 손이 어떻게 되는지 떠올려 보세요.', '옷 색은 마음을 알려 주는 단서일까요? 얼굴과 손을 말하는 카드를 찾아요.', '슬플 때는 눈물을 닦고, 즐거울 때는 입을 벌리고 웃어요.'] },
              { prompt: '사람의 마음을 짐작할 때 볼 단서만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '마음 단서', cards: ['얼굴 표정', '손이 하는 일', '몸이 향한 쪽', '그림을 그린 해', '종이의 크기'], weather: false },
                target: { pick: ['얼굴 표정', '손이 하는 일', '몸이 향한 쪽'] }, difficulty: 0.2,
                hints: ['내 마음이 바뀌면 내 몸에서 무엇이 달라지는지 떠올려 보세요.', '그림 바깥의 것(만든 때, 종이)은 그림 속 사람의 마음과 상관이 있을까요?', '얼굴 표정, 손이 하는 일, 몸이 향한 쪽이 마음 단서예요.'],
                levels: { easy: { toolOptions: { cards: ['얼굴 표정', '손이 하는 일', '그림을 그린 해'] }, prompt: '마음을 짐작할 때 볼 단서만 바구니에 넣어 보세요. 두 가지예요.', target: { pick: ['얼굴 표정', '손이 하는 일'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 그림 속 사람에게 반응하기', minutes: 13, tool: 'emotion',
            teacher: '"그림 속 아이가 우리 반 친구라면 무슨 말을 해 줄까요?" 웃는 아이들처럼 놀리는 쪽을 고른 학생에게 "놀림을 들은 아이의 얼굴은 어떻게 바뀔까요?" 하고 묻는다. 걱정되는 마음의 크기는 사람마다 달라도 된다고 말해 준다. 끝으로 짝과 그림 속 사람의 몸짓을 따라 하며 마음을 말하게 한다(4분).',
            task: '그림 속 아이에게 해 줄 말을 고르고, 짝과 몸짓을 따라 하며 마음을 말해요.',
            levels: SCALE_LV,
            items: [
              { prompt: '가운데 아이에게 어떤 말을 해 주면 좋을까요?', toolOptions: { mode: 'branch', situation: '「서당」 가운데 아이가 훈장님 앞에서 훌쩍이며 눈물을 닦고 있어요.', choices: [
                { id: 'cheer', text: '"다음에는 잘할 수 있을 거야" 하고 힘을 줘요', result: '아이가 눈물을 그치고 고개를 들어요.', mood: '고마움' },
                { id: 'tease', text: '"울보다!" 하고 같이 놀려요', result: '아이가 더 크게 울어요.', mood: '슬픔', why: '놀리는 말을 들으면 우는 아이의 마음은 어떨까요?' },
                { id: 'turn', text: '못 본 척 고개를 돌려요', result: '아이는 혼자라고 느껴요.', mood: '외로움', why: '아무도 봐 주지 않으면 아이의 마음은 어떨까요?' }] }, target: { choice: 'cheer' }, difficulty: 0.05,
                levels: { challenge: { toolOptions: { choices: [
                  { id: 'loud', text: '"울지 마, 뚝!" 하고 크게 말해요', result: '아이가 깜짝 놀라 더 움츠러들어요.', mood: '무서움', why: '큰 소리로 그치라고 하면 우는 아이의 마음이 나아질까요?' },
                  { id: 'cheer', text: '"다음에는 잘할 수 있을 거야" 하고 힘을 줘요', result: '아이가 눈물을 그치고 고개를 들어요.', mood: '고마움' },
                  { id: 'tease', text: '"울보다!" 하고 같이 놀려요', result: '아이가 더 크게 울어요.', mood: '슬픔', why: '놀리는 말을 들으면 우는 아이의 마음은 어떨까요?' },
                  { id: 'turn', text: '못 본 척 고개를 돌려요', result: '아이는 혼자라고 느껴요.', mood: '외로움', why: '아무도 봐 주지 않으면 아이의 마음은 어떨까요?' }] } } } },
              { prompt: '그림 속 아이를 보는 내 걱정의 크기를 내 생각대로 골라 보세요.', toolOptions: { mode: 'scale', situation: '「서당」 가운데 아이가 혼자 눈물을 닦고 있어요.', feeling: '걱정', after: '내가 고른 크기와 그 까닭을 짝에게 말해 봐요.' }, target: { level: 'any' }, difficulty: 0.05, hints: SELF_H },
              { prompt: '짝과 번갈아 그림 속 한 사람의 몸짓을 따라 해요. 짝은 누구인지 맞히고 그 사람의 마음을 말해요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"「서당」 아이들의 마음을 짐작해 보니 그림이 처음과 어떻게 다르게 보였나요?" 두세 명의 대답을 듣는다. 아이가 왜 우는지는 그림만으로 다 알 수 없고, 글을 다 외우지 못해서라는 짐작이 널리 알려져 있다고 덧붙인다. 다음 시간에는 그림 속에서 들릴 것 같은 소리를 떠올려 본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { cards: ['기쁨', '속상함'], slots: [{ id: 'e1', label: '그림 속 아이가 상장을 들고 활짝 웃어요' }, { id: 'e2', label: '그림 속 아이가 깨진 그릇 앞에서 고개를 숙였어요' }] }, prompt: '그림 속 아이의 마음을 짐작해 카드를 놓아 보세요.', target: { match: { e1: '기쁨', e2: '속상함' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '그림 속 사람의 마음을 짐작할 때 무엇을 보면 좋을까요?', options: ['그림을 넣은 액자', '얼굴 표정과 몸짓', '그림의 값'], answer: 1, difficulty: 0.1, explain: '얼굴 표정과 손, 몸짓이 마음을 알려 주는 단서예요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '그림 속 마음 짐작하기',
      items: [
        { type: 'figure', wide: true, prompt: '「서당」 속 사람과 어울리는 마음을 선으로 이으세요.', tool: 'emotion', figures: [{ options: { cards: ['즐거움', '슬픔'], slots: [{ id: 's1', label: '눈물을 닦는 아이' }, { id: 's2', label: '입을 벌리고 웃는 아이들' }], shuffle: false }, caption: '' }], answer: '눈물을 닦는 아이-슬픔, 웃는 아이들-즐거움' },
        { type: 'table', prompt: '그림 속 사람의 마음과 그렇게 짐작한 단서를 쓰세요.', columns: ['그림 속 사람', '마음', '단서'], rows: 2 },
        { type: 'choice', prompt: '마음을 짐작할 때 볼 단서에 ○ 하세요.', options: ['그림을 그린 해', '얼굴 표정', '종이의 크기'], answer: '얼굴 표정' },
        { type: 'short', prompt: '가운데 아이에게 해 주고 싶은 말을 쓰세요.' },
      ],
      easy: {
        note: '얼굴, 손, 몸이 마음을 알려 줘요.',
        items: [
          { type: 'choice', prompt: '눈물을 닦는 아이의 마음에 ○ 하세요.', options: ['신남', '슬픔'], answer: '슬픔' },
          { type: 'short', prompt: '아이에게 해 주고 싶은 말을 한 가지 쓰세요.' },
          { type: 'draw', prompt: '슬플 때 내 얼굴을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 단서 카드가 적어요. 마음 크기는 세 칸에서 골라요.',
      base: '그림 속 사람을 가리킨 뒤 얼굴·손·몸을 단서로 마음을 짐작해요.',
      challenge: '함정 마음 카드와 그럴듯한 보기가 더 있어요. 짐작한 마음마다 단서를 두 가지씩 말해요.',
    },
    teacherNotes: '그림 자료: 김홍도 「서당」(『단원 풍속도첩』, 1700년대 후반, 국립중앙박물관 소장, 보물)은 저작권 보호 기간이 끝난 작품이다. 교구 화면에는 그림이 나오지 않으므로 교사 화면에 그림을 계속 띄워 둔다. 아이가 우는 까닭은 그림에 적혀 있지 않으므로 하나로 정하지 않는다. 자주 보이는 어려움: ① 까닭 없이 마음만 말한다 → "그림 어디를 보고 알았나요?" 하고 손가락으로 가리키게 한다. ② 웃는 아이들 편을 들어 놀리는 말을 고른다 → 놀림을 들은 아이의 표정을 몸으로 해 보게 한다. ③ 몸짓 따라 하기가 장난이 된다 → 따라 한 뒤 3초 동안 멈추는 약속을 먼저 정한다.',
  }));

  lessons.push(L(42, {
    title: '그림 속 소리 상상하고 몸으로 따라 하기',
    objective: '옛 그림을 보고 그림 속에서 들릴 것 같은 소리와 사람의 자세를 찾아, 모둠 친구들과 소리와 몸짓으로 나타낼 수 있다.',
    illustration: ART('a group of children frozen in poses copying people from an old painting of a wrestling match while other children cup their ears to listen, a large print of the painting on the wall', '그림 속 소리 듣기', [
      { motif: 'bird', x: 130, y: 96 }, { motif: 'mountain', x: 360, y: 200 }, { motif: 'tree', x: 240, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '김홍도의 「씨름」을 다시 띄운다. "그림 속 구경꾼 사이에 내가 앉아 있다고 생각해 봐요. 무슨 소리가 들릴까요?" 1분 동안 말없이 보게 한 뒤 두세 명의 대답을 듣는다. "그 소리는 그림 속 누가, 무엇이 내는 소리인가요?" 하고 소리의 주인을 가리키게 한다. 시연 단추로 \'우산을 쓴 사람이 걷는 그림\'과 \'톡톡 빗소리\'가 이어지는 모습을 보여 준다.',
        student: '그림 속에 들어가 앉아 있다고 생각하고 들릴 소리를 떠올려 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '그림 속 소리', slots: [{ id: 's1', label: '우산을 쓴 사람이 걷는 그림' }], cards: ['톡톡 빗소리'], shuffle: false }, sequence: [{ match: { s1: '톡톡 빗소리' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 그림과 소리, 그림과 자세 잇기', minutes: 13, tool: 'mindmap',
            teacher: '「씨름」, 정선의 「인왕제색도」, 밀레의 「이삭 줍는 사람들」을 나란히 띄운다. "「인왕제색도」는 비가 그친 뒤의 인왕산을 그린 그림이에요." 그림마다 무엇이 있는지 먼저 말한 뒤 카드를 고르게 한다. 그림에 없는 것에서 나는 소리를 고르는 학생에게 "그 소리를 내는 것이 그림 어디에 있나요?" 하고 묻는다. 자세 카드는 읽은 뒤 제자리에서 직접 해 보고 고르게 한다.',
            task: '그림을 보고 들릴 것 같은 소리와 따라 할 자세를 찾아요.',
            levels: CARD_LV,
            items: [
              { prompt: '그림마다 들릴 것 같은 소리를 이어 보세요.', toolOptions: { mode: 'match', topic: '그림 속 소리', slots: [{ id: 's1', label: '김홍도 「씨름」' }, { id: 's2', label: '정선 「인왕제색도」' }, { id: 's3', label: '밀레 「이삭 줍는 사람들」' }], cards: ['"와아!" 구경꾼들의 소리', '비 그친 산에 물 흐르는 소리', '들판에서 이삭 줍는 조용한 소리'] },
                target: { match: { s1: '"와아!" 구경꾼들의 소리', s2: '비 그친 산에 물 흐르는 소리', s3: '들판에서 이삭 줍는 조용한 소리' } }, difficulty: 0.1,
                hints: ['그림 속에 무엇이 있는지 먼저 떠올리고, 그것에서 날 수 있는 소리를 찾아요.', '그림 속 사람·산·들판 가운데 그 소리를 낼 수 있는 것이 있는지 다시 봐요.', '씨름 구경꾼은 소리치고, 비 그친 산에는 물이 흐르고, 들판에서는 이삭을 조용히 주워요.'],
                levels: { challenge: { toolOptions: { cards: ['"와아!" 구경꾼들의 소리', '비 그친 산에 물 흐르는 소리', '들판에서 이삭 줍는 조용한 소리', '자동차 경적 소리'] } } } },
              { prompt: '그림 속 사람과 따라 할 자세를 이어 보세요.', toolOptions: { mode: 'match', topic: '그림 속 자세', slots: [{ id: 's1', label: '「씨름」의 씨름꾼' }, { id: 's2', label: '「이삭 줍는 사람들」의 세 사람' }, { id: 's3', label: '「서당」의 가운데 아이' }], cards: ['두 팔로 상대를 붙잡아요', '허리를 굽혀 땅에서 주워요', '손등으로 눈을 비벼요'] },
                target: { match: { s1: '두 팔로 상대를 붙잡아요', s2: '허리를 굽혀 땅에서 주워요', s3: '손등으로 눈을 비벼요' } }, difficulty: 0.15,
                hints: ['그림 속 사람이 무엇을 하고 있는지 떠올리고, 그 일을 할 때의 몸을 생각해요.', '자세 카드를 직접 해 보고, 그 몸이 그림 속 일과 어울리는지 다시 봐요.', '씨름꾼은 상대를 붙잡고, 이삭 줍는 사람은 허리를 굽히고, 서당 아이는 눈을 비벼요.'],
                levels: { challenge: { toolOptions: { cards: ['두 팔로 상대를 붙잡아요', '허리를 굽혀 땅에서 주워요', '손등으로 눈을 비벼요', '두 팔을 벌리고 날아요'] } } } },
              { prompt: '「이삭 줍는 사람들」 속에서 들릴 것 같은 소리만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '들릴 것 같은 소리', cards: ['바람이 들판을 스치는 소리', '사각사각 이삭 줍는 소리', '자동차 경적 소리', '휴대 전화 벨 소리'] },
                target: { pick: ['바람이 들판을 스치는 소리', '사각사각 이삭 줍는 소리'] }, difficulty: 0.15,
                hints: ['그림 속 들판에 있는 것과, 그림을 그린 옛날에 있었던 것만 떠올려요.', '그림이 그려진 옛날 들판에 그 물건이 있었을까요?', '바람과 이삭 줍는 손에서 나는 소리만 들릴 수 있어요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 모둠 소리 그림 만들기', minutes: 15, tool: 'story',
            teacher: '"소리 그림은 그림 속 자세로 멈춘 채, 그 그림에서 들릴 소리를 내는 놀이예요." 차례를 정한 뒤 모둠(4명)마다 그림 하나를 고르고 자세 맡을 사람과 소리 맡을 사람을 나누어 5분 연습한다. 모둠마다 30초씩 보여 주고 다른 모둠이 어떤 그림인지 맞힌다(6모둠 약 6분). 소리가 너무 커지면 "그림 속 사람들도 이렇게 크게 소리쳤을까요?" 하고 크기를 조절하게 한다.',
            task: '모둠이 그림 하나를 골라 자세와 소리로 나타내고, 다른 모둠의 소리 그림을 맞혀요.',
            levels: CARD_LV,
            items: [
              { prompt: '모둠 소리 그림을 보여 주는 차례를 놓아 보세요.', toolOptions: { cards: [{ id: 'pose', text: '그림 속 자세로 멈춰요', motif: 'flower' }, { id: 'guess', text: '친구들이 그림을 맞혀요', motif: 'sun' }, { id: 'pick', text: '모둠이 그림 하나를 골라요', motif: 'star' }, { id: 'sound', text: '멈춘 채 소리를 내요', motif: 'bird' }], slots: ['1', '2', '3', '4'] },
                levels: { challenge: { prompt: '모둠 소리 그림을 보여 주는 차례를 놓아 보세요. 소리 그림에서 하지 않을 일은 남겨요.', toolOptions: { cards: [{ id: 'pose', text: '그림 속 자세로 멈춰요', motif: 'flower' }, { id: 'guess', text: '친구들이 그림을 맞혀요', motif: 'sun' }, { id: 'pick', text: '모둠이 그림 하나를 골라요', motif: 'star' }, { id: 'sound', text: '멈춘 채 소리를 내요', motif: 'bird' }, { id: 'tell', text: '그림 이름을 먼저 말해 줘요', motif: 'cloud' }] } } },
                target: { order: ['pick', 'pose', 'sound', 'guess'] }, difficulty: 0.1,
                hints: ['보여 주기 전에 할 일과, 다 보여 준 뒤에 할 일을 먼저 나눠 봐요.', '소리는 자세로 멈춘 다음에 내요. 맞히기는 언제 할 수 있을까요?', '그림 고르기 → 자세로 멈추기 → 소리 내기 → 친구들이 맞히기예요.'] },
              { prompt: '모둠이 그림 하나를 골라 자세 맡을 사람과 소리 맡을 사람을 나누어 연습해요.', free: true, talk: true },
              { prompt: '모둠마다 30초씩 소리 그림을 보여 주고, 다른 모둠은 어떤 그림인지 맞혀요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"친구 모둠의 소리 그림을 보고 나니, 그 그림이 어떻게 다르게 느껴졌나요?" 두세 명의 대답을 듣는다. 그림을 보며 소리와 몸짓으로 반응하는 것도 작품을 즐기는 한 가지 방법이라고 정리한다. 다음 시간에는 우리 반 작품을 작은 미술관처럼 걸어 두고 둘러본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '그림 속 소리', slots: [{ id: 'e1', label: '눈 쌓인 마을 길 그림' }, { id: 'e2', label: '파도치는 바닷가 그림' }], cards: ['뽀드득 눈 밟는 소리', '철썩 파도 소리'] }, prompt: '그림마다 들릴 것 같은 소리를 이어 보세요.', target: { match: { e1: '뽀드득 눈 밟는 소리', e2: '철썩 파도 소리' } }, difficulty: 0.05 },
          { type: 'choice', prompt: '그림을 보고 소리를 떠올릴 때 알맞은 것은?', options: ['그림 속에 있는 것에서 날 소리를 떠올려요', '그림과 상관없는 소리를 크게 내요', '눈을 감고 아무 소리나 말해요'], answer: 0, difficulty: 0.1, explain: '그림 속 사람·물건·자연에서 날 소리를 떠올려요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '그림 속 소리와 자세',
      items: [
        { type: 'figure', wide: true, prompt: '그림과 들릴 것 같은 소리를 선으로 이으세요.', tool: 'mindmap', figures: [{ options: { mode: 'match', topic: '그림 속 소리', slots: [{ id: 's1', label: '「씨름」' }, { id: 's2', label: '「이삭 줍는 사람들」' }], cards: ['이삭 줍는 조용한 소리', '구경꾼들의 소리'], shuffle: false }, caption: '' }], answer: '「씨름」-구경꾼들의 소리, 「이삭 줍는 사람들」-이삭 줍는 조용한 소리' },
        { type: 'table', prompt: '우리 모둠의 소리 그림을 쓰세요.', columns: ['고른 그림', '내가 맡은 일', '낸 소리나 자세'], rows: 1 },
        { type: 'check', prompt: '소리 그림을 보여 줄 때 지킨 것에 모두 ✓ 하세요.', options: ['자세로 멈추었어요', '그림에 어울리는 소리를 냈어요', '다른 모둠이 할 때 조용히 보았어요'] },
        { type: 'short', prompt: '친구 모둠의 소리 그림 가운데 가장 잘 맞힌 그림과 까닭을 쓰세요.' },
      ],
      easy: {
        note: '그림 속에 있는 것에서 소리가 나요.',
        items: [
          { type: 'choice', prompt: '「씨름」에서 들릴 것 같은 소리에 ○ 하세요.', options: ['자동차 소리', '구경꾼들의 소리'], answer: '구경꾼들의 소리' },
          { type: 'short', prompt: '내가 낸 소리를 흉내 내는 말로 쓰세요.' },
          { type: 'draw', prompt: '내가 따라 한 그림 속 자세를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 자세 카드는 직접 해 보고 골라요.',
      base: '그림마다 무엇이 있는지 말한 뒤 소리와 자세를 이어요.',
      challenge: '함정 카드가 섞여 있어요. 모둠에서 소리를 두 가지 겹쳐 내 봐요.',
    },
    teacherNotes: '그림 자료: 김홍도 「씨름」·「서당」(『단원 풍속도첩』, 보물), 정선 「인왕제색도」(1751, 국보, 비가 그친 뒤의 인왕산을 그림), 밀레 「이삭 줍는 사람들」(1857, 오르세 미술관)은 모두 저작권 보호 기간이 끝난 작품이다. 교구 화면에는 그림이 나오지 않으므로 교사 화면에 띄워 둔다. 자주 보이는 어려움: ① 그림과 상관없는 우스운 소리를 낸다 → 그 소리를 내는 것이 그림 어디에 있는지 가리키게 한다. ② 자세를 오래 멈추지 못한다 → 셋을 세는 동안만 멈추게 한다. ③ 발표 시간이 길어진다 → 모둠마다 30초 타이머를 쓴다.',
  }));

  lessons.push(L(43, {
    title: '우리 반 작은 미술관 둘러보고 마음에 든 작품 남기기',
    objective: '친구 작품을 한 작품씩 멈추어 살피며 본 것과 느낀 것을 붙임쪽지에 남기고, 마음에 든 작품 하나를 골라 그림으로 남길 수 있다.',
    illustration: ART('a classroom turned into a small gallery with children’s paper collages hung on the wall, children standing still in front of one artwork each and sticking small notes beside them', '우리 반 작은 미술관', [
      { motif: 'house', x: 120, y: 216, color: 'mint' }, { motif: 'star', x: 250, y: 96, s: 0.5 }, { motif: 'flower', x: 380, y: 228, color: 'buttercup' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '40차시에 만든 작품을 이름표와 함께 교실 벽에 걸어 두고 "오늘 우리 교실은 작은 미술관이에요" 하고 연다. "전시를 다 봤다는 건 무슨 뜻일까요? 한 바퀴 빨리 돈 것과 한 작품씩 멈춰 본 것은 같을까요?" 하고 묻고 두세 명의 생각을 듣는다. 시연 단추로 \'이 작품에는 별이 많아요\'가 \'살펴본 흔적\' 바구니에 들어가는 모습을 보여 준다.',
        student: '작품 앞에서 멈추어 보는 것과 지나가는 것이 어떻게 다른지 생각해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'pick', basket: '살펴본 흔적', cards: ['이 작품에는 별이 많아요', '휙 지나갔어요'], shuffle: false }, sequence: [{ pick: ['이 작품에는 별이 많아요'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 한 작품씩 살피고 쪽지 남기기', minutes: 13, tool: 'mindmap',
            teacher: '"작품을 정말 살펴보았는지는 무엇으로 알 수 있을까요? 그 작품에 대해 말할 수 있으면 본 거예요." 붙임쪽지에는 본 것 한 줄, 느낀 것 한 줄을 쓴다고 알려 준다. 본 것과 느낀 것을 헷갈리면 "눈으로 세거나 가리킬 수 있으면 본 것, 내 마음이 어땠는지면 느낀 것"이라고 기준을 말한다. 화면 활동을 마치면 한 작품 앞에 1분씩 머물며 세 작품에 쪽지를 남기게 한다.',
            task: '한 작품씩 살핀 흔적을 고르고, 쪽지 말을 본 것과 느낀 것으로 나눠요.',
            levels: CARD_LV,
            items: [
              { prompt: '작품을 하나씩 살펴보았다는 것을 알 수 있는 말만 골라 보세요.', toolOptions: { mode: 'pick', basket: '살펴본 흔적', cards: ['이 작품은 별이 소용돌이처럼 돌아요', '이 작품 구석에 작은 하트가 있어요', '나는 열 작품을 다 지나갔어요', '내가 제일 먼저 끝났어요'] },
                target: { pick: ['이 작품은 별이 소용돌이처럼 돌아요', '이 작품 구석에 작은 하트가 있어요'] }, difficulty: 0.1,
                hints: ['그 말을 한 친구가 작품 속 무엇을 말하고 있는지 찾아보세요.', '몇 개를 지나갔는지, 누가 먼저 끝났는지는 작품에 대한 말일까요?', '작품 속 별과 하트를 말한 두 말이 살펴본 흔적이에요.'] },
              { prompt: '붙임쪽지 말을 본 것과 느낀 것으로 나누어 보세요.', toolOptions: { slots: ['본 것', '느낀 것'], topic: '붙임쪽지', cards: ['노란 별이 다섯 개 있어요', '파란 바탕이 넓어요', '보니까 마음이 편해요', '밤하늘이 신나 보여요'] },
                target: { sort: { '본 것': ['노란 별이 다섯 개 있어요', '파란 바탕이 넓어요'], '느낀 것': ['보니까 마음이 편해요', '밤하늘이 신나 보여요'] } }, difficulty: 0.15,
                hints: ['눈으로 세거나 가리킬 수 있는 말인지, 내 마음을 말한 것인지 따져 봐요.', '마음이나 느낌을 나타내는 말이 들어 있는 카드를 다시 봐요.', '별의 수와 바탕은 본 것, 편함과 신남은 느낀 것이에요.'],
                levels: { challenge: { toolOptions: { cards: ['노란 별이 다섯 개 있어요', '파란 바탕이 넓어요', '보니까 마음이 편해요', '밤하늘이 신나 보여요', '빨리 다음 작품으로 가요'] }, prompt: '붙임쪽지 말을 본 것과 느낀 것으로 나누어 보세요. 어디에도 맞지 않는 카드는 남겨 두세요.' } } },
              { prompt: '작은 미술관을 잘 둘러본 친구만 골라 보세요.', toolOptions: { mode: 'pick', basket: '잘 둘러보았어요', cards: ['하준: 세 작품 앞에서 오래 보고 쪽지를 남겼어요', '서아: 1분 만에 모든 작품을 지나갔어요', '지우: 한 작품의 색과 모양을 짝에게 말했어요', '준호: 작품을 보지 않고 친구와 놀았어요'] },
                target: { pick: ['하준: 세 작품 앞에서 오래 보고 쪽지를 남겼어요', '지우: 한 작품의 색과 모양을 짝에게 말했어요'] }, difficulty: 0.15,
                hints: ['둘러본 뒤에 그 작품에 대해 말할 수 있는 친구를 찾아요.', '빨리 지나간 친구는 작품에 대해 무엇을 말할 수 있을까요?', '오래 보고 쪽지를 남긴 친구와 색과 모양을 말한 친구예요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 마음에 든 작품 그림으로 남기기', minutes: 15, tool: 'collage',
            teacher: '"둘러본 작품 가운데 마음에 든 작품 하나를 엽서에 남겨요. 똑같이 베끼지 않아도 돼요. 가장 눈에 띈 색과 모양을 남겨요." 판에서 두 친구의 엽서를 먼저 만들어 본 뒤 내 엽서를 만든다. 끝으로 실제 엽서 종이에 크레파스로 그리고 작품 이름과 고른 까닭을 쓴다(7분). 친구 작품을 고르지 못하는 학생에게 "쪽지를 가장 길게 쓴 작품은 무엇이었나요?" 하고 묻는다.',
            task: '마음에 든 작품에서 가장 눈에 띈 색과 모양을 골라 엽서로 남겨요.',
            levels: {
              easy: { shapes: ['star', 'circle', 'heart'], colors: ['노랑', '파랑', '빨강'] },
              base: { shapes: ['circle', 'square', 'triangle', 'semi', 'star', 'heart', 'leaf'], colors: ['노랑', '파랑', '빨강', '초록', '분홍', '검정'] },
              challenge: {},
            },
            items: [
              { prompt: '민지는 큰 노랑 별이 마음에 들었어요. 큰 노랑 별 한 개와 작은 파랑 동그라미 세 개를 붙여 보세요.', toolOptions: { bg: '하양' }, target: { has: [{ shape: 'star', color: '노랑', size: 'l', n: 1 }, { shape: 'circle', color: '파랑', size: 's', n: 3 }] }, difficulty: 0.1,
                levels: { challenge: { prompt: '민지는 큰 노랑 별이 마음에 들었어요. 큰 노랑 별 한 개, 작은 파랑 동그라미 세 개, 초록 나뭇잎 두 개를 붙여 보세요.', target: { has: [{ shape: 'star', color: '노랑', size: 'l', n: 1 }, { shape: 'circle', color: '파랑', size: 's', n: 3 }, { shape: 'leaf', color: '초록', n: 2 }] } } },
                hints: ['문제 글에서 모양·색·크기와 개수를 하나씩 찾아, 한 가지씩 차례로 붙여요.', '붙인 조각의 모양·색·크기와 개수를 문제 글과 하나씩 견주어 봐요.', '크기를 크게로 고른 노랑 별 1개, 작게로 고른 파랑 동그라미 3개예요.'] },
              { prompt: '준호는 빨강 하트가 많은 작품을 골랐어요. 빨강 하트 네 개와 노랑 동그라미 두 개를 붙여 보세요.', toolOptions: { bg: '하양' }, target: { has: [{ shape: 'heart', color: '빨강', n: 4 }, { shape: 'circle', color: '노랑', n: 2 }] }, difficulty: 0.15,
                hints: ['문제 글에서 모양·색과 개수를 하나씩 찾아, 한 가지씩 차례로 붙여요.', '붙인 조각을 모양과 색별로 세어 문제 글의 개수와 견주어 봐요.', '빨강 하트 4개와 노랑 동그라미 2개를 붙여요.'] },
              { prompt: '내가 고른 작품을 엽서로 남기고 점검해 보세요.', toolOptions: { bg: '하양' }, target: { selfCheck: ['작품에서 가장 눈에 띈 색을 썼어요', '작품 속 모양을 하나 넣었어요', '고른 까닭을 짝에게 말했어요'], minPieces: 4 }, difficulty: 0.1 },
              { prompt: '엽서 종이에 고른 작품을 크레파스로 그리고, 작품 이름과 고른 까닭을 썼으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"내가 고른 작품과 고른 까닭을 한 문장으로 말해 볼까요?" 세 명 정도 엽서를 들고 말한다. 붙임쪽지는 작품을 만든 친구에게 돌려주어 읽게 한다. 다음 시간에는 본 것을 친구에게 자세히 이야기하는 방법을 배운다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { slots: ['본 것', '느낀 것'], topic: '「수련」 쪽지', cards: ['초록 잎이 동그래요', '물이 시원해 보여요'] }, prompt: '「수련」을 보고 쓴 쪽지 말을 나누어 보세요.', target: { sort: { '본 것': ['초록 잎이 동그래요'], '느낀 것': ['물이 시원해 보여요'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '전시를 잘 보았다고 할 수 있는 것은?', options: ['빨리 한 바퀴 돌았어요', '작품을 하나씩 멈추어 살폈어요', '가장 먼저 나왔어요'], answer: 1, difficulty: 0.1, explain: '빨리 지나가면 작품에 대해 말할 것이 남지 않아요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '작은 미술관 둘러보기',
      items: [
        { type: 'table', prompt: '세 작품 앞에서 본 것과 느낀 것을 쓰세요.', columns: ['작품 이름', '본 것', '느낀 것'], rows: 3 },
        { type: 'check', prompt: '작은 미술관에서 내가 한 것에 모두 ✓ 하세요.', options: ['한 작품 앞에서 1분 동안 멈추었어요', '쪽지를 세 장 남겼어요', '작품을 손으로 만지지 않았어요'] },
        { type: 'choice', prompt: '느낀 것을 쓴 쪽지에 ○ 하세요.', options: ['하트가 세 개 있어요', '보니까 기분이 좋아요', '바탕이 노래요'], answer: '보니까 기분이 좋아요' },
        { type: 'draw', prompt: '마음에 든 작품을 엽서로 그려 보세요.' },
        { type: 'short', prompt: '그 작품을 고른 까닭을 쓰세요.' },
      ],
      easy: {
        note: '본 것은 눈으로 가리킬 수 있는 것, 느낀 것은 내 마음이에요.',
        items: [
          { type: 'choice', prompt: '본 것을 쓴 쪽지에 ○ 하세요.', options: ['별이 다섯 개 있어요', '마음이 편해요'], answer: '별이 다섯 개 있어요' },
          { type: 'short', prompt: '마음에 든 작품의 이름을 쓰세요.' },
          { type: 'draw', prompt: '그 작품에서 가장 눈에 띈 것을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 엽서 판의 모양과 색이 세 가지씩이에요.',
      base: '쪽지 말을 본 것과 느낀 것으로 나누고, 고른 작품을 엽서로 남겨요.',
      challenge: '어디에도 맞지 않는 함정 카드가 있고, 따라 만들 조각이 하나 더 늘어요. 쪽지를 적어도 네 장 남기고, 엽서에 고른 까닭을 두 가지 써요.',
    },
    teacherNotes: '준비물: 40차시 작품과 이름표, 붙임쪽지(한 사람에 세 장), 엽서 크기 종이, 크레파스. 작품이 없는 학생은 39~40차시 그림 인쇄본을 걸어 둔다. 쪽지에는 놀리는 말을 쓰지 않는 약속을 먼저 한다. 자주 보이는 어려움: ① 한 바퀴 빨리 돌고 "다 봤어요" 한다 → 한 작품 앞에서 1분 타이머가 울릴 때까지 머물게 한다. ② 쪽지에 "좋아요"만 쓴다 → 본 것 한 줄을 먼저 쓰게 한다. ③ 자기 작품 앞에만 서 있다 → 내 작품은 고르지 않는 약속을 둔다.',
  }));

  lessons.push(L(44, {
    title: '본 작품을 네 가지로 자세히 들려주기',
    objective: '전시에서 본 작품을 작품 이름, 본 것, 있던 자리, 느낌의 네 가지로 친구에게 자세히 이야기할 수 있다.',
    illustration: ART('two children sitting face to face, one describing an artwork with hand gestures while the other listens and counts on her fingers, small framed paintings floating above them', '자세히 들려주기', [
      { motif: 'star', x: 130, y: 96, s: 0.5 }, { motif: 'flower', x: 250, y: 228, color: 'rose' }, { motif: 'tree', x: 380, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '두 말을 들려준다. ① "그림이 좋았어요." ② "「별이 빛나는 밤」 위쪽에 노란 별이 소용돌이처럼 돌고 있어서 신기했어요." "어느 말을 들으면 그림이 눈앞에 떠오르나요?" 그리고 "전시에서 본 것은 말할 거리가 못 된다고 여기는 친구도 있어요. 하지만 본 것을 자세히 들려주면 듣는 친구도 그 작품을 같이 볼 수 있어요" 하고 말한다. 시연 단추로 \'어떤 작품인가요?\' 옆에 \'「서당」\' 카드가 놓이는 모습을 보여 준다.',
        student: '두 말 가운데 그림이 더 잘 떠오르는 말을 골라 손을 들어요.',
        demo: { tool: 'story', options: { mode: 'match', slots: [{ id: 's1', label: '어떤 작품인가요?' }], cards: ['「서당」'], shuffle: false }, sequence: [{ match: { s1: '「서당」' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 자세히 말하는 네 가지', minutes: 14, tool: 'story',
            teacher: '칠판에 네 가지(작품 이름 → 본 것 → 있던 자리 → 느낌)를 적는다. "\'좋았어요\'만 들으면 친구는 어떤 그림인지 알 수 있을까요?" 네 가지 가운데 빠진 것을 찾는 질문을 한다. 느낌만 길게 말하는 학생에게 "무엇을 보고 그렇게 느꼈나요?" 하고 본 것을 먼저 말하게 한다.',
            task: '자세히 말한 것을 고르고, 네 가지 물음에 맞는 대답을 찾아요.',
            levels: CARD_LV,
            items: [
              { prompt: '듣는 친구가 그림을 떠올릴 수 있게 자세히 말한 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '자세한 말', cards: ['그림이 좋았어요', '파란 하늘에 노란 별이 소용돌이처럼 돌았어요', '재미있었어요', '「씨름」 가운데서 두 사람이 서로 붙잡고 있었어요'] },
                levels: { challenge: { toolOptions: { cards: ['그림이 좋았어요', '파란 하늘에 노란 별이 소용돌이처럼 돌았어요', '재미있었어요', '「씨름」 가운데서 두 사람이 서로 붙잡고 있었어요', '정말정말 멋졌어요'] } } },
                target: { pick: ['파란 하늘에 노란 별이 소용돌이처럼 돌았어요', '「씨름」 가운데서 두 사람이 서로 붙잡고 있었어요'] }, difficulty: 0.1,
                hints: ['그 말만 듣고 눈을 감았을 때 그림이 떠오르는지 생각해 봐요.', '색, 모양, 사람이 하는 일이 들어 있는 말인지 다시 봐요.', '별이 소용돌이처럼 돈 말과 씨름하는 두 사람을 말한 것이 자세한 말이에요.'] },
              { prompt: '묻는 말과 알맞은 대답을 이어 보세요.', toolOptions: { mode: 'match', slots: [{ id: 's1', label: '어떤 작품인가요?' }, { id: 's2', label: '무엇이 보였나요?' }, { id: 's3', label: '어디에 있었나요?' }, { id: 's4', label: '어떤 느낌이었나요?' }], cards: ['「별이 빛나는 밤」', '노란 별', '하늘 위쪽에', '신기했어요'] },
                target: { match: { s1: '「별이 빛나는 밤」', s2: '노란 별', s3: '하늘 위쪽에', s4: '신기했어요' } }, difficulty: 0.15,
                hints: ['묻는 말의 \'무엇\', \'어디\', \'어떤\'이 무엇을 묻는지 먼저 살펴봐요.', '자리를 묻는 말에는 \'~에\'로 끝나는 대답이 어울려요. 나머지도 다시 봐요.', '작품 이름 → 노란 별 → 하늘 위쪽에 → 신기했어요 차례로 이어요.'] },
              { prompt: '「수련」을 본 준호가 할 말을 완성해 보세요.', toolOptions: { mode: 'fill', cards: ['모네의 「수련」', '김홍도의 「씨름」', '초록 잎', '편안했어요'], slots: [{ id: 's1', who: '준호', label: '나는 ___ 그림을 보았어요.' }, { id: 's2', who: '준호', label: '연못 물 위에 동그란 ___ 여러 장이 떠 있었어요.' }, { id: 's3', who: '준호', label: '잔잔한 물빛을 보니 마음이 ___.' }] },
                target: { fill: { s1: '모네의 「수련」', s2: '초록 잎', s3: '편안했어요' } }, difficulty: 0.2,
                hints: ['준호가 본 작품이 무엇인지 문항 글에서 먼저 찾아요.', '물 위에 떠 있을 수 있는 것과 마음을 나타내는 말을 나눠 봐요.', '모네의 「수련」 → 초록 잎 → 편안했어요예요.'],
                levels: { easy: { toolOptions: { cards: ['모네의 「수련」', '초록 잎', '편안했어요'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 짝에게 들려주고 들어 주기', minutes: 13, tool: 'emotion',
            teacher: '먼저 짝이 "그건 말할 거리도 아니야"라고 할 때를 함께 생각한다. 그다음 43차시에 고른 작품을 네 가지로 짝에게 1분 동안 들려주고, 듣는 짝은 들은 가지 수를 손가락으로 세어 준다. 역할을 바꾸어 한 번 더 한다(모두 6분). 세 가지 이하이면 빠진 것을 짝이 물어봐 준다.',
            task: '본 것을 들려줄 때의 마음가짐을 고르고, 짝에게 네 가지로 들려줘요.',
            levels: SCALE_LV,
            items: [
              { prompt: '하준이는 어떻게 하면 좋을까요?', toolOptions: { mode: 'branch', who: '하준', situation: '하준이가 전시에서 본 그림 이야기를 하려는데, 짝이 "그건 말할 거리도 아니야" 했어요.', choices: [
                { id: 'tell', text: '"들어 보면 너도 그 그림이 보일 거야" 하고 이야기해요', result: '짝이 귀를 기울이고 질문을 해요.', mood: '기쁨' },
                { id: 'stop', text: '"맞아, 별것 아니야" 하고 그만둬요', result: '하준이가 본 멋진 그림을 아무도 몰라요.', mood: '속상함', why: '본 것을 들려주면 듣는 친구는 무엇을 얻을까요?' },
                { id: 'angry', text: '"너랑 말 안 해!" 하고 화를 내요', result: '두 친구 모두 기분이 상해요.', mood: '화남', why: '화를 내면 그림 이야기를 나눌 수 있을까요?' }] }, target: { choice: 'tell' }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { choices: [
                  { id: 'short', text: '"그냥 좋았어" 한마디만 하고 끝내요', result: '짝은 어떤 그림인지 떠올리지 못해요.', mood: '걱정', why: '한마디만 들으면 짝이 그림을 떠올릴 수 있을까요?' },
                  { id: 'tell', text: '"들어 보면 너도 그 그림이 보일 거야" 하고 이야기해요', result: '짝이 귀를 기울이고 질문을 해요.', mood: '기쁨' },
                  { id: 'stop', text: '"맞아, 별것 아니야" 하고 그만둬요', result: '하준이가 본 멋진 그림을 아무도 몰라요.', mood: '속상함', why: '본 것을 들려주면 듣는 친구는 무엇을 얻을까요?' },
                  { id: 'angry', text: '"너랑 말 안 해!" 하고 화를 내요', result: '두 친구 모두 기분이 상해요.', mood: '화남', why: '화를 내면 그림 이야기를 나눌 수 있을까요?' }] } } } },
              { prompt: '43차시에 고른 작품을 네 가지로 짝에게 1분 동안 들려줘요. 듣는 짝은 들은 가지 수를 손가락으로 세어 줘요.', free: true, talk: true },
              { prompt: '짝에게 들려준 뒤 내 뿌듯함의 크기를 내 생각대로 골라 보세요.', toolOptions: { mode: 'scale', situation: '짝에게 내가 본 작품을 네 가지로 들려주었어요.', feeling: '뿌듯함', after: '빠뜨린 것이 있었다면 다음에 무엇을 더 말할지 생각해 봐요.' }, target: { level: 'any' }, difficulty: 0.05, hints: SELF_H },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"짝이 들려준 이야기 가운데 가장 기억에 남는 것은 무엇인가요?" 두세 명이 짝에게 들은 작품 이야기를 대신 들려주고, 짝은 빠진 것이 있으면 덧붙인다. 다음 시간에는 같은 그림을 보고 서로 다르게 느낀 것을 나눈다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { mode: 'pick', basket: '자세한 말', cards: ['멋있었어요', '「서당」 가운데 아이가 손등으로 눈물을 닦고 있었어요', '그냥 그랬어요'] }, prompt: '친구가 그림을 떠올릴 수 있는 말을 골라 보세요.', target: { pick: ['「서당」 가운데 아이가 손등으로 눈물을 닦고 있었어요'] }, difficulty: 0.05 },
          { type: 'choice', prompt: '전시에서 본 것을 친구에게 자세히 들려주면 어떻게 될까요?', options: ['듣는 친구도 그 작품을 떠올릴 수 있어요', '말할 거리가 못 돼서 친구가 지루해해요', '작품이 없어져요'], answer: 0, difficulty: 0.1, explain: '본 것을 자세히 들려주면 듣는 친구도 그 작품을 함께 볼 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '네 가지로 들려주기',
      items: [
        { type: 'table', prompt: '내가 들려줄 작품을 네 가지로 쓰세요.', columns: ['네 가지', '내가 쓸 말'], cells: [['작품 이름', ''], ['본 것', ''], ['있던 자리', ''], ['느낌', '']] },
        { type: 'choice', prompt: '더 자세히 말한 것에 ○ 하세요.', options: ['그림이 예뻤어요', '연못 위에 초록 잎이 떠 있어서 시원했어요'], answer: '연못 위에 초록 잎이 떠 있어서 시원했어요' },
        { type: 'check', prompt: '짝에게 들려줄 때 한 것에 모두 ✓ 하세요.', options: ['작품 이름을 말했어요', '본 것을 말했어요', '있던 자리를 말했어요', '느낌을 말했어요'] },
        { type: 'short', prompt: '짝이 들려준 작품 이야기에서 기억나는 것을 쓰세요.' },
      ],
      easy: {
        note: '이름 → 본 것 → 자리 → 느낌 차례로 말해요.',
        items: [
          { type: 'choice', prompt: '그림이 더 잘 떠오르는 말에 ○ 하세요.', options: ['좋았어요', '노란 별이 하늘에 있었어요'], answer: '노란 별이 하늘에 있었어요' },
          { type: 'short', prompt: '내가 본 작품의 이름을 쓰세요.' },
          { type: 'draw', prompt: '그 작품에서 본 것을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 빈칸 카드에 함정 카드가 없어요.',
      base: '네 가지 물음에 맞는 대답을 찾고, 짝에게 네 가지로 들려줘요.',
      challenge: '두루뭉술한 함정 카드와 그럴듯한 보기가 더 있어요. 들려줄 때 본 것을 적어도 두 가지 말해요.',
    },
    teacherNotes: '그림 자료: 고흐 「별이 빛나는 밤」(1889), 모네 「수련」(1906 무렵), 김홍도 「씨름」·「서당」은 저작권 보호 기간이 끝난 작품이다. 칠판의 네 가지(작품 이름·본 것·있던 자리·느낌)는 45~47차시에도 쓰므로 남겨 둔다. 자주 보이는 어려움: ① "좋았어요"만 말한다 → "무엇을 보고 좋았나요?" 하고 본 것으로 돌아가게 한다. ② 자리를 말하지 못한다 → 위쪽·아래쪽·가운데·구석 같은 말을 칠판에 적어 둔다. ③ 듣는 짝이 끼어든다 → 1분 동안은 손가락만 세는 약속을 둔다.',
  }));

  lessons.push(L(45, {
    title: '같은 그림을 다르게 느낀 까닭 듣고 받아 주기',
    objective: '같은 작품을 보고 친구가 나와 다르게 느낀 까닭을 듣고, "그렇게 볼 수도 있구나" 하고 받아들이는 말을 할 수 있다.',
    illustration: ART('three children in front of a swirling starry night painting print, one smiling with arms raised, one hugging herself a little scared, one calm with eyes half closed, speech bubbles above them', '같은 그림, 다른 느낌', [
      { motif: 'tree', x: 120, y: 214 }, { motif: 'house', x: 380, y: 216, color: 'sky' }, { motif: 'star', x: 250, y: 100, s: 0.5 }], true),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '고흐의 「별이 빛나는 밤」을 띄우고 30초 동안 보게 한 뒤 묻는다. "이 그림을 보니 신나는 사람? 조금 무서운 사람? 편안한 사람?" 손이 여러 곳에서 올라가는 것을 함께 본다. "같은 그림인데 왜 느낌이 다를까요?" 한 사람만 맞고 나머지는 틀렸다고 여기는 학생이 있으면 그 생각을 칠판에 적어 두고 오늘 끝에 다시 본다. 시연 단추로 \'「수련」의 물빛이 잔잔해요\' 옆에 편안함 카드가 놓이는 모습을 보여 준다.',
        student: '「별이 빛나는 밤」을 보고 든 느낌에 손을 들어요.',
        demo: { tool: 'emotion', options: { cards: ['편안함', '화남'], slots: [{ id: 's1', label: '「수련」의 물빛이 잔잔해요' }], shuffle: false }, sequence: [{ match: { s1: '편안함' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 친구마다 다르게 느낀 까닭 찾기', minutes: 13, tool: 'mindmap',
            teacher: '「별이 빛나는 밤」과 「씨름」을 띄워 두고 카드의 까닭이 그림 어디에 있는지 가리키게 한다. "민지는 신난다고 했어요. 그림 어디를 보고 그랬을까요?" 느낌이 다른 까닭은 보는 곳과 떠올린 것이 달라서라는 것을 짚는다. \'선생님과 같은 느낌이 정답\'이라고 여기는 학생에게 "선생님도 이 그림이 조금 무서워요. 그럼 민지는 틀렸을까요?" 하고 되묻는다.',
            task: '친구가 느낀 것과 그 까닭을 잇고, 감상에 대한 맞는 생각을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '친구들이 「별이 빛나는 밤」을 보고 느낀 것과 그 까닭을 이어 보세요.', toolOptions: { mode: 'match', topic: '「별이 빛나는 밤」', slots: [{ id: 's1', label: '민지: 신나요' }, { id: 's2', label: '준호: 조금 무서워요' }, { id: 's3', label: '서아: 편안해요' }], cards: ['소용돌이가 춤추는 것 같아서', '커다란 검은 나무가 어두워서', '마을 집들이 조용히 잠든 것 같아서'] },
                target: { match: { s1: '소용돌이가 춤추는 것 같아서', s2: '커다란 검은 나무가 어두워서', s3: '마을 집들이 조용히 잠든 것 같아서' } }, difficulty: 0.1,
                hints: ['친구마다 그림의 어느 곳을 보았는지 떠올려 보세요.', '그 느낌이 들 만한 모습인지 카드와 느낌을 한 번 더 견주어 봐요.', '춤추는 소용돌이는 신남, 어두운 나무는 무서움, 잠든 마을은 편안함이에요.'] },
              { prompt: '친구들이 「씨름」을 보고 느낀 것과 그 까닭을 이어 보세요.', toolOptions: { mode: 'match', topic: '「씨름」', slots: [{ id: 's1', label: '하준: 가슴이 떨려요' }, { id: 's2', label: '지우: 웃음이 나요' }], cards: ['내가 씨름꾼이 된 것 같아서', '구경꾼들 얼굴이 재미있어서', '종이가 누래서'] },
                target: { match: { s1: '내가 씨름꾼이 된 것 같아서', s2: '구경꾼들 얼굴이 재미있어서' } }, difficulty: 0.15,
                hints: ['그 느낌이 들려면 그림 속 무엇을 보았거나 무엇을 떠올렸을지 생각해 봐요.', '종이 색이 그 느낌의 까닭이 될까요? 그림 속 사람을 말한 카드를 다시 봐요.', '씨름꾼이 된 것 같으면 떨리고, 구경꾼 얼굴이 재미있으면 웃음이 나요.'] },
              { prompt: '같은 그림을 보고 느낀 것에 대해 맞는 생각만 골라 보세요.', toolOptions: { mode: 'pick', basket: '맞는 생각', cards: ['사람마다 다르게 느낄 수 있어요', '까닭을 들으면 친구 생각을 알 수 있어요', '선생님과 같은 느낌만 정답이에요', '나와 다르면 틀린 거예요'] },
                levels: { challenge: { toolOptions: { cards: ['사람마다 다르게 느낄 수 있어요', '까닭을 들으면 친구 생각을 알 수 있어요', '선생님과 같은 느낌만 정답이에요', '나와 다르면 틀린 거예요', '많은 친구가 고른 느낌만 맞아요'] } } },
                target: { pick: ['사람마다 다르게 느낄 수 있어요', '까닭을 들으면 친구 생각을 알 수 있어요'] }, difficulty: 0.15,
                hints: ['오늘 손을 들었을 때 느낌이 몇 가지로 나뉘었는지 떠올려 보세요.', '느낌에 정답이 하나뿐이라면 손이 여러 곳에서 올라갔을까요?', '느낌은 사람마다 다를 수 있고, 까닭을 들으면 친구를 알게 돼요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 다른 감상 받아 주기', minutes: 14, tool: 'emotion',
            teacher: '"친구가 나와 다르게 느꼈을 때 어떤 말을 들으면 기분이 좋을까요?" 받아 주는 말을 함께 읽고 따라 말한다. 모둠 감상 나누기(6분)에서는 한 사람씩 「씨름」을 보고 느낌 한 낱말과 까닭을 말하고, 나머지는 "그렇게 볼 수도 있구나" 하고 받아 준다. "틀렸어"라는 말이 나오면 멈추고 "까닭을 물어볼까요?" 하고 바꾸어 말하게 한다.',
            task: '다른 감상을 받아 주는 말을 고르고, 모둠에서 감상을 나누며 받아 줘요.',
            levels: SCALE_LV,
            items: [
              { prompt: '친구가 나와 다르게 느꼈을 때 받아 주는 말만 골라 보세요.', toolOptions: { mode: 'pick', basket: '받아 주는 말', cards: ['"그렇게 볼 수도 있구나"', '"왜 그렇게 느꼈어?"', '"네 생각은 틀렸어"', '"그게 뭐가 무서워?"'], weather: false },
                levels: { challenge: { toolOptions: { cards: ['"그렇게 볼 수도 있구나"', '"왜 그렇게 느꼈어?"', '"네 생각은 틀렸어"', '"그게 뭐가 무서워?"', '"그런 생각은 이상해"'] } } },
                target: { pick: ['"그렇게 볼 수도 있구나"', '"왜 그렇게 느꼈어?"'] }, difficulty: 0.1,
                hints: ['그 말을 들은 친구가 다시 말하고 싶어질지 떠올려 봐요.', '친구의 느낌을 깎아내리는 말이 섞여 있지 않은지 다시 봐요.', '"그렇게 볼 수도 있구나"와 까닭을 묻는 말이 받아 주는 말이에요.'] },
              { prompt: '지우는 어떻게 하면 좋을까요?', toolOptions: { mode: 'branch', who: '지우', situation: '하준이는 「수련」이 지루하다고 했어요. 지우는 「수련」이 정말 좋아요.', choices: [
                { id: 'ask', text: '지루한 까닭을 묻고, 내가 좋은 까닭도 말해요', result: '두 친구가 그림을 한 번 더 함께 봐요.', mood: '기쁨' },
                { id: 'force', text: '좋다고 말할 때까지 우겨요', result: '하준이가 더 말하기 싫어져요.', mood: '화남', why: '우기면 하준이가 왜 그렇게 느꼈는지 알 수 있을까요?' },
                { id: 'sulk', text: '말없이 토라져요', result: '두 친구 모두 기분이 상해요.', mood: '속상함', why: '말하지 않으면 서로의 생각을 알 수 있을까요?' }] }, target: { choice: 'ask' }, difficulty: 0.1 },
              { prompt: '모둠에서 한 사람씩 「씨름」을 보고 느낌 한 낱말과 까닭을 말해요. 다른 친구들은 "그렇게 볼 수도 있구나" 하고 받아 줘요.', free: true, talk: true },
              { prompt: '친구의 다른 느낌을 듣고 그림이 새롭게 보여 놀란 정도를 내 생각대로 골라 보세요.', toolOptions: { mode: 'scale', situation: '나는 편안하게 본 그림을 친구는 무섭다고 했어요. 까닭을 듣고 그림을 다시 보았어요.', feeling: '놀람', after: '친구 덕분에 새로 보인 것을 짝에게 말해 봐요.' }, target: { level: 'any' }, difficulty: 0.05, hints: SELF_H },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"오늘 들은 느낌 가운데 나와 가장 달랐던 것은 무엇이었나요? 그 까닭을 듣고 어떤 생각이 들었나요?" 두세 명의 대답을 듣는다. 출구 질문을 마친 뒤 도입 때 칠판에 적어 둔 생각을 다시 읽고 지금은 어떻게 생각하는지 묻는다. 다음 시간에는 묻는 말을 골라 짝의 감상을 더 깊이 들어 본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'branch', situation: '서아는 「서당」이 재미있다고 했고, 준호는 「서당」이 슬프다고 했어요.', ask: '두 친구의 느낌을 어떻게 생각하나요?', choices: [
            { id: 'both', text: '둘 다 그렇게 느낄 수 있어요', result: '두 친구가 서로의 까닭을 물어봐요.', mood: '기쁨' },
            { id: 'only1', text: '서아만 맞게 느꼈어요', result: '준호가 속상해해요.', mood: '속상함', why: '준호에게도 그렇게 느낀 까닭이 있지 않을까요?' },
            { id: 'only2', text: '준호만 맞게 느꼈어요', result: '서아가 속상해해요.', mood: '속상함', why: '서아에게도 그렇게 느낀 까닭이 있지 않을까요?' }] }, prompt: '두 친구의 느낌을 어떻게 생각하는지 골라 보세요.', target: { choice: 'both' }, difficulty: 0.1 },
          { type: 'choice', prompt: '친구가 나와 다르게 느꼈어요. 알맞은 말은?', options: ['"네 까닭이 궁금해"', '"너는 틀렸어"', '"내 말을 따라 해"'], answer: 0, difficulty: 0.05, explain: '까닭을 물으면 친구가 무엇을 보았는지 알 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '같은 그림, 다른 느낌',
      items: [
        { type: 'table', prompt: '「별이 빛나는 밤」을 보고 느낀 것과 까닭을 쓰세요.', columns: ['누구', '느낌', '까닭'], cells: [['나', '', ''], ['짝', '', ''], ['모둠 친구', '', '']] },
        { type: 'choice', prompt: '받아 주는 말에 ○ 하세요.', options: ['"그건 틀렸어"', '"그렇게 볼 수도 있구나"', '"몰라"'], answer: '"그렇게 볼 수도 있구나"' },
        { type: 'check', prompt: '모둠 감상 나누기에서 내가 한 것에 모두 ✓ 하세요.', options: ['느낌과 까닭을 함께 말했어요', '친구 말을 끝까지 들었어요', '"그렇게 볼 수도 있구나"라고 말했어요'] },
        { type: 'short', prompt: '친구의 느낌을 듣고 그림에서 새로 보인 것을 쓰세요.' },
      ],
      easy: {
        note: '느낌은 사람마다 달라도 돼요.',
        items: [
          { type: 'choice', prompt: '친구가 나와 다르게 느꼈을 때 할 말에 ○ 하세요.', options: ['"왜 그렇게 느꼈어?"', '"틀렸어"'], answer: '"왜 그렇게 느꼈어?"' },
          { type: 'short', prompt: '「별이 빛나는 밤」을 보고 든 내 느낌을 한 낱말로 쓰세요.' },
          { type: 'draw', prompt: '그 느낌이 든 그림 속 부분을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 마음 크기는 세 칸에서 골라요.',
      base: '친구가 느낀 것과 까닭을 잇고, 받아 주는 말을 골라요.',
      challenge: '함정 생각 카드와 받아 주지 않는 말이 더 섞여 있어요. 모둠 감상 나누기에서 친구의 까닭을 한 번 더 묻고, 들은 까닭을 활동지에 써요.',
    },
    teacherNotes: '그림 자료: 고흐 「별이 빛나는 밤」(1889), 모네 「수련」(1906 무렵), 김홍도 「씨름」·「서당」은 저작권 보호 기간이 끝난 작품이다. 감상에는 정답이 없지만, 까닭은 그림 속에서 찾을 수 있어야 한다는 것을 함께 지킨다. 자주 보이는 어려움: ① 친구 느낌을 고쳐 주려 한다 → 고치기 전에 까닭을 먼저 묻게 한다. ② 친구를 따라 같은 느낌만 말한다 → 쪽지에 먼저 내 느낌을 적고 말하게 한다. ③ 무서운 느낌을 말한 친구를 놀린다 → 선생님도 같은 느낌이 들 수 있다고 말해 준다.',
  }));

  lessons.push(L(46, {
    title: '물음을 골라 짝의 감상 인터뷰하기',
    objective: '짝이 길게 대답할 수 있는 물음을 골라 감상을 인터뷰하고, 들은 감상을 "제 짝은 ~래요"로 다른 친구에게 전할 수 있다.',
    illustration: ART('two children holding a paper microphone, one asking and the other answering while pointing at a framed painting, a small notebook with question marks between them', '감상 인터뷰', [
      { motif: 'flower', x: 120, y: 228, color: 'peach' }, { motif: 'cloud', x: 300, y: 96 }, { motif: 'tree', x: 380, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '두 가지 짧은 대화를 학생 한 명과 해 보인다. ① "그림 봤어?" "응." ② "그림에서 누가 제일 눈에 띄었어?" "가운데서 우는 아이요. 친구들이 웃어서 더 슬퍼 보였어요." "어느 물음에 대답이 더 길었나요? 왜 그럴까요?" 21~22차시에 인터뷰 물음을 만든 경험을 떠올리게 한다. 시연 단추로 \'그림에서 무슨 색이 가장 많았어?\'가 바구니에 들어가는 모습을 보여 준다.',
        student: '두 대화 가운데 대답이 더 긴 쪽을 손가락으로 표시해요.',
        demo: { tool: 'mindmap', options: { mode: 'pick', basket: '길게 대답할 물음', cards: ['그림에서 무슨 색이 가장 많았어?', '봤어?'], shuffle: false }, sequence: [{ pick: ['그림에서 무슨 색이 가장 많았어?'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 감상을 끌어내는 물음 고르기', minutes: 12, tool: 'mindmap',
            teacher: '"\'응\'이나 \'아니\'로 끝나는 물음은 대답이 짧아요. \'무엇·누가·어디·왜·어떤\'이 들어간 물음은 대답이 길어요." 물음 카드를 소리 내어 읽고, 대답을 직접 해 보며 고르게 한다. 본 것을 묻는 물음과 느낌을 묻는 물음을 섞어 쓰면 감상을 더 자세히 들을 수 있다고 알려 준다.',
            task: '짝이 길게 대답할 물음을 고르고, 대답에 맞는 물음을 찾아요.',
            levels: CARD_LV,
            items: [
              { prompt: '짝이 길게 대답할 수 있는 물음만 골라 보세요.', toolOptions: { mode: 'pick', basket: '길게 대답할 물음', cards: ['어디가 가장 마음에 들었어?', '그걸 보고 무슨 생각이 났어?', '좋았어?', '다 봤어?'] },
                target: { pick: ['어디가 가장 마음에 들었어?', '그걸 보고 무슨 생각이 났어?'] }, difficulty: 0.1,
                hints: ['물음마다 "응"이나 "아니"로 대답이 끝나는지 직접 대답해 봐요.', '\'어디\'나 \'무슨\' 같은 말이 들어 있는 물음을 다시 찾아봐요.', '마음에 든 곳을 묻는 물음과 떠오른 생각을 묻는 물음이에요.'] },
              { prompt: '짝의 대답을 읽고, 어떤 물음에 한 대답인지 이어 보세요.', toolOptions: { mode: 'match', topic: '대답에 맞는 물음', slots: [{ id: 's1', label: '「서당」 가운데 우는 아이요.' }, { id: 's2', label: '친구들이 웃어서 아이가 더 속상할 것 같았어요.' }, { id: 's3', label: '박물관에 가서 진짜 그림을 보고 싶어요.' }], cards: ['누가 가장 눈에 띄었어?', '보면서 무슨 생각이 들었어?', '다음에 무엇을 해 보고 싶어?'] },
                target: { match: { s1: '누가 가장 눈에 띄었어?', s2: '보면서 무슨 생각이 들었어?', s3: '다음에 무엇을 해 보고 싶어?' } }, difficulty: 0.15,
                hints: ['대답이 사람인지, 생각인지, 앞으로 할 일인지 먼저 나눠 봐요.', '\'누가\'에는 사람, \'무슨 생각\'에는 생각을 대답해요. 남은 것을 맞춰 봐요.', '우는 아이는 누가, 속상할 것 같다는 생각, 박물관은 해 보고 싶은 일이에요.'],
                levels: { challenge: { toolOptions: { cards: ['누가 가장 눈에 띄었어?', '보면서 무슨 생각이 들었어?', '다음에 무엇을 해 보고 싶어?', '그림 봤어?'] } } } },
              { prompt: '물음을 본 것을 묻는 물음과 느낌을 묻는 물음으로 나누어 보세요.', toolOptions: { slots: ['본 것을 묻는 물음', '느낌을 묻는 물음'], topic: '감상 물음', cards: ['무슨 색이 보였어?', '어떤 사람이 있었어?', '보니까 어떤 기분이었어?', '그림 속에 들어가면 어떤 마음일 것 같아?'] },
                target: { sort: { '본 것을 묻는 물음': ['무슨 색이 보였어?', '어떤 사람이 있었어?'], '느낌을 묻는 물음': ['보니까 어떤 기분이었어?', '그림 속에 들어가면 어떤 마음일 것 같아?'] } }, difficulty: 0.15,
                hints: ['대답이 눈으로 가리킬 수 있는 것인지, 마음인지 떠올려 봐요.', '\'기분\'이나 \'마음\'을 묻는 물음이 어느 칸에 있는지 다시 봐요.', '색과 사람은 본 것, 기분과 마음은 느낌을 묻는 물음이에요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 짝 인터뷰하고 들은 감상 전하기', minutes: 16, tool: 'story',
            teacher: '인터뷰 차례를 정한 뒤 종이 마이크를 쥐고 짝 인터뷰를 한다(한 사람 2분씩, 물음 세 가지). 짝이 "몰라"라고 하면 "그림에서 무슨 색이 보여?"처럼 쉬운 본 것 물음부터 다시 묻게 한다. 인터뷰가 끝나면 모둠에서 "제 짝은 ~을 보고 ~라고 느꼈대요"로 짝의 감상을 전한다(6분). 내 생각을 섞어 전하는 학생에게 "짝이 정말 그렇게 말했나요?" 하고 묻는다.',
            task: '인터뷰 차례를 정하고, 짝을 인터뷰한 뒤 들은 감상을 모둠에 전해요.',
            levels: CARD_LV,
            items: [
              { prompt: '인터뷰하는 차례를 놓아 보세요.', toolOptions: { cards: [{ id: 'listen', text: '대답을 끝까지 들어요', motif: 'leaf' }, { id: 'hello', text: '인사해요', motif: 'sun' }, { id: 'thanks', text: '고맙다고 말해요', motif: 'flower' }, { id: 'ask', text: '물음을 하나 물어요', motif: 'star' }, { id: 'repeat', text: '들은 대답을 다시 말해 줘요', motif: 'bird' }], slots: ['1', '2', '3', '4', '5'] },
                levels: { challenge: { prompt: '인터뷰하는 차례를 놓아 보세요. 인터뷰할 때 하지 않을 일은 남겨요.', toolOptions: { cards: [{ id: 'listen', text: '대답을 끝까지 들어요', motif: 'leaf' }, { id: 'hello', text: '인사해요', motif: 'sun' }, { id: 'thanks', text: '고맙다고 말해요', motif: 'flower' }, { id: 'ask', text: '물음을 하나 물어요', motif: 'star' }, { id: 'repeat', text: '들은 대답을 다시 말해 줘요', motif: 'bird' }, { id: 'cut', text: '대답 중간에 끼어들어요', motif: 'cloud' }] } } },
                target: { order: ['hello', 'ask', 'listen', 'repeat', 'thanks'] }, difficulty: 0.15,
                hints: ['인터뷰를 시작할 때와 끝낼 때 하는 말을 먼저 찾아 양 끝에 놓아 봐요.', '대답을 다시 말해 주려면 그 전에 무엇을 해야 할까요?', '인사 → 물음 → 끝까지 듣기 → 다시 말해 주기 → 고맙다는 말이에요.'] },
              { prompt: '지우는 「수련」을 보고 시원하다고 느꼈대요. 지우의 감상을 전하는 말을 완성해 보세요.', toolOptions: { mode: 'fill', cards: ['「수련」', '「씨름」', '시원하다고', '무섭다고'], slots: [{ id: 's1', who: '나', label: '제 짝 지우는 ___ 을 보았대요.' }, { id: 's2', who: '나', label: '그리고 ___ 느꼈대요.' }] },
                target: { fill: { s1: '「수련」', s2: '시원하다고' } }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['「수련」', '「씨름」', '「별이 빛나는 밤」', '시원하다고', '무섭다고', '신난다고'] } } },
                hints: ['짝이 말한 작품과 느낌을 문항 글에서 먼저 찾아요.', '전하는 말에는 내 생각이 아니라 짝이 말한 것을 넣어요.', '「수련」을 보고 시원하다고 느꼈대요.'] },
              { prompt: '종이 마이크로 짝에게 고른 물음 세 가지를 묻고, 대답을 활동지에 적어요. 역할을 바꿔서 한 번 더 해요.', free: true, talk: true },
              { prompt: '모둠에서 "제 짝은 ~을 보고 ~라고 느꼈대요"로 짝의 감상을 전해요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"인터뷰로 들은 짝의 감상 가운데 나는 생각하지 못한 것이 있었나요?" 두세 명의 대답을 듣는다. 인터뷰를 받은 학생에게 "끝까지 들어 줄 때 기분이 어땠나요?" 하고 묻는다. 다음 시간에는 또 가 보고 싶은 전시를 골라 까닭을 말한다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', basket: '길게 대답할 물음', cards: ['그림 속 하늘은 어떤 색이었어?', '봤어?', '재밌었어?'] }, prompt: '친구가 길게 대답할 수 있는 물음을 골라 보세요.', target: { pick: ['그림 속 하늘은 어떤 색이었어?'] }, difficulty: 0.05 },
          { type: 'choice', prompt: '인터뷰에서 친구가 대답하는 동안 나는 어떻게 할까요?', options: ['끝까지 들어요', '내 이야기를 먼저 해요', '다른 곳을 봐요'], answer: 0, difficulty: 0.05, explain: '끝까지 들어야 친구의 감상을 다시 전할 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '짝 감상 인터뷰',
      items: [
        { type: 'table', prompt: '짝에게 물은 것과 짝의 대답을 쓰세요.', columns: ['내가 물은 것', '짝의 대답'], rows: 3 },
        { type: 'choice', prompt: '짝이 길게 대답할 수 있는 물음에 ○ 하세요.', options: ['봤어?', '그림 속 누가 눈에 띄었어?', '좋았어?'], answer: '그림 속 누가 눈에 띄었어?' },
        { type: 'blank', prompt: '짝의 감상을 전하는 말을 완성하세요.', text: '제 짝은 ___을 보고 ___ 느꼈대요.' },
        { type: 'short', prompt: '짝에게 들은 감상 가운데 나는 생각하지 못한 것을 쓰세요.' },
      ],
      easy: {
        note: '\'누가·무엇·어디·왜\'가 들어간 물음은 대답이 길어요.',
        items: [
          { type: 'choice', prompt: '대답이 더 길게 나오는 물음에 ○ 하세요.', options: ['봤어?', '무슨 색이 보였어?'], answer: '무슨 색이 보였어?' },
          { type: 'short', prompt: '짝에게 물어볼 물음을 하나 쓰세요.' },
          { type: 'draw', prompt: '짝이 말한 그림 속 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 인터뷰는 물음 두 가지로 해요.',
      base: '길게 대답할 물음을 골라 짝을 인터뷰하고 들은 감상을 전해요.',
      challenge: '함정 물음 카드와 인터뷰에서 하지 않을 일 카드가 있어요. 인터뷰에서 짝의 대답을 듣고 "왜?"를 한 번 더 물어요.',
    },
    teacherNotes: '준비물: 종이 마이크(종이를 말아 만든 것). 21~22차시에 만든 인터뷰 물음 목록을 떠올리게 하면 좋다. 활동지의 빈칸(blank) 문항은 짝의 대답에 따라 답이 달라진다. 자주 보이는 어려움: ① "응/아니" 물음만 한다 → \'누가·무엇·어디·왜\' 낱말 카드를 책상에 놓아 준다. ② 짝의 말을 끊고 내 생각을 말한다 → 마이크를 쥔 사람만 말하는 약속을 둔다. ③ 전할 때 내 생각을 섞는다 → "짝이 한 말 그대로"를 먼저 말하고, 내 생각은 따로 말하게 한다.',
  }));

  lessons.push(L(47, {
    title: '또 가 보고 싶은 전시 고르고 까닭 말하기',
    objective: '여러 전시 가운데 또 가 보고 싶은 전시를 하나 골라, "왜냐하면"을 넣어 그 까닭을 말할 수 있다.',
    illustration: ART('children in front of a board with small posters of different exhibitions such as old paintings, picture book art and pottery, each child pointing at one poster and talking', '또 가 보고 싶은 전시', [
      { motif: 'house', x: 120, y: 216, color: 'lavender' }, { motif: 'flower', x: 250, y: 228, color: 'buttercup' }, { motif: 'house', x: 380, y: 216, color: 'peach' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '33차시에 찾은 전시와 38차시에 만든 알림판을 다시 보여 준다. "또 가 보고 싶은 전시가 있나요? 왜요?" "그냥요"라고 하면 "그 전시에서 무엇을 보고 싶은데요?" 하고 한 번 더 묻는다. "가 보고 싶은 까닭을 말하면 친구도 그 전시가 궁금해져요." 시연 단추로 \'공룡을 좋아하는 하준\' 옆에 \'공룡 화석 전시\'가 이어지는 모습을 보여 준다.',
        student: '또 가 보고 싶은 전시를 하나 떠올려 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '가 보고 싶은 전시', slots: [{ id: 's1', label: '공룡을 좋아하는 하준' }], cards: ['공룡 화석 전시'], shuffle: false }, sequence: [{ match: { s1: '공룡 화석 전시' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 좋아하는 것과 어울리는 전시 찾기', minutes: 13, tool: 'mindmap',
            teacher: '"좋아하는 것이나 궁금한 것이 있으면 가 보고 싶은 전시를 고르기 쉬워요." 전시 이름을 읽고 그 전시에서 무엇을 볼 수 있을지 먼저 말하게 한다. \'그림책 그림 전시\'는 그림책에 실린 그림을 걸어 두는 전시라고 알려 준다. \'그냥요\'를 까닭으로 고르는 학생에게 "그냥요를 들은 친구는 그 전시가 궁금해질까요?" 하고 묻는다.',
            task: '친구가 좋아하는 것과 어울리는 전시를 잇고, 까닭이 되는 말을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '친구가 좋아하는 것과 어울리는 전시를 이어 보세요.', toolOptions: { mode: 'match', topic: '어울리는 전시', slots: [{ id: 's1', label: '민지: 옛날 사람들 이야기가 궁금해요' }, { id: 's2', label: '준호: 그림책 읽기를 좋아해요' }, { id: 's3', label: '서아: 흙으로 만든 그릇이 좋아요' }], cards: ['옛 그림 전시', '그림책 그림 전시', '도자기 전시'] },
                target: { match: { s1: '옛 그림 전시', s2: '그림책 그림 전시', s3: '도자기 전시' } }, difficulty: 0.1,
                hints: ['친구가 좋아하는 것을 볼 수 있는 전시가 어디일지 떠올려 봐요.', '전시 이름 속에 친구가 좋아하는 것이 들어 있는지 한 번 더 견주어 봐요.', '옛날 이야기는 옛 그림, 그림책은 그림책 그림, 그릇은 도자기 전시예요.'],
                levels: { challenge: { toolOptions: { cards: ['옛 그림 전시', '그림책 그림 전시', '도자기 전시', '자동차 전시'] } } } },
              { prompt: '가 보고 싶은 까닭을 말한 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '까닭을 말했어요', cards: ['「씨름」을 진짜 크기로 보고 싶어서요', '도자기 만드는 모습을 직접 보고 싶어서요', '그냥요', '몰라요'] },
                target: { pick: ['「씨름」을 진짜 크기로 보고 싶어서요', '도자기 만드는 모습을 직접 보고 싶어서요'] }, difficulty: 0.1,
                hints: ['그 말을 들은 친구가 전시에 가고 싶은 까닭을 알 수 있는지 생각해 봐요.', '무엇을 보고 싶은지가 들어 있지 않은 말이 섞여 있어요.', '진짜 크기의 「씨름」과 도자기 만드는 모습을 말한 것이 까닭이에요.'] },
              { prompt: '하준이는 흙으로 컵을 만들어 본 뒤 옛 그릇이 궁금해졌어요. 하준이의 말을 완성해 보세요.', toolOptions: { mode: 'fill', cards: ['도자기 전시', '옛 그릇 모양이 궁금하기', '빛 그림 전시', '빛이 움직이는 게 좋기'], slots: [{ id: 's1', label: '나는 ___ 에 또 가 보고 싶어요.' }, { id: 's2', label: '왜냐하면 ___ 때문이에요.' }] },
                target: { fill: { s1: '도자기 전시', s2: '옛 그릇 모양이 궁금하기' } }, difficulty: 0.15,
                hints: ['하준이가 무엇을 해 보고 무엇이 궁금해졌는지 문항 글에서 찾아요.', '고른 전시와 까닭이 서로 어울리는지 한 번 더 봐요.', '도자기 전시에, 옛 그릇 모양이 궁금하기 때문이에요.'],
                levels: { easy: { toolOptions: { cards: ['도자기 전시', '옛 그릇 모양이 궁금하기', '빛 그림 전시'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 내가 가 보고 싶은 전시 말하기', minutes: 15, tool: 'emotion',
            teacher: '짝과 가 보고 싶은 전시가 다를 때를 먼저 생각한다. 그다음 짝에게 "나는 ○○ 전시에 또 가 보고 싶어요. 왜냐하면 ~ 때문이에요."로 말하고, 짝은 "거기서 무엇을 제일 보고 싶어?" 하고 한 번 더 물어 준다(4분). 끝으로 활동지에 가족에게 보낼 \'같이 가요\' 쪽지를 쓴다(5분). 가 본 전시가 없는 학생은 33~38차시에 알아본 전시나 우리 반 작은 미술관에서 고르게 한다.',
            task: '가 보고 싶은 전시와 까닭을 짝에게 말하고, 가족에게 보낼 쪽지를 써요.',
            levels: SCALE_LV,
            items: [
              { prompt: '서아는 어떻게 말하면 좋을까요?', toolOptions: { mode: 'branch', who: '서아', situation: '서아는 도자기 전시에 가고 싶고, 짝 지우는 그림책 그림 전시에 가고 싶어 해요.', choices: [
                { id: 'reason', text: '"나는 옛 그릇이 궁금해서 가고 싶어. 너는 왜?" 하고 물어요', result: '두 친구가 서로의 까닭을 듣고 둘 다 궁금해져요.', mood: '기쁨' },
                { id: 'mock', text: '"그림책 그림 전시는 시시해" 하고 말해요', result: '지우가 속상해서 말을 안 해요.', mood: '속상함', why: '지우가 가고 싶은 까닭을 들어 보았나요?' },
                { id: 'follow', text: '내 생각은 말하지 않고 짝을 따라가요', result: '서아가 보고 싶던 그릇은 아무도 몰라요.', mood: '걱정', why: '내가 가고 싶은 까닭도 말해 볼 수 있지 않을까요?' }] }, target: { choice: 'reason' }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { choices: [
                  { id: 'only', text: '"도자기 전시가 더 좋아" 하고 까닭 없이 말해요', result: '지우는 서아가 왜 그 전시를 고르는지 몰라요.', mood: '걱정', why: '까닭을 말하지 않으면 지우가 서아 마음을 알 수 있을까요?' },
                  { id: 'mock', text: '"그림책 그림 전시는 시시해" 하고 말해요', result: '지우가 속상해서 말을 안 해요.', mood: '속상함', why: '지우가 가고 싶은 까닭을 들어 보았나요?' },
                  { id: 'reason', text: '"나는 옛 그릇이 궁금해서 가고 싶어. 너는 왜?" 하고 물어요', result: '두 친구가 서로의 까닭을 듣고 둘 다 궁금해져요.', mood: '기쁨' },
                  { id: 'follow', text: '내 생각은 말하지 않고 짝을 따라가요', result: '서아가 보고 싶던 그릇은 아무도 몰라요.', mood: '걱정', why: '내가 가고 싶은 까닭도 말해 볼 수 있지 않을까요?' }] } } } },
              { prompt: '내가 고른 전시에 가 보고 싶은 마음의 크기를 내 생각대로 골라 보세요.', toolOptions: { mode: 'scale', situation: '또 가 보고 싶은 전시를 하나 골랐어요.', feeling: '설렘', after: '가장 보고 싶은 것을 짝에게 말해 봐요.' }, target: { level: 'any' }, difficulty: 0.05, hints: SELF_H },
              { prompt: '짝에게 "나는 ○○ 전시에 또 가 보고 싶어요. 왜냐하면 ~ 때문이에요."로 말해요. 짝은 무엇을 제일 보고 싶은지 한 번 더 물어 줘요.', free: true, talk: true },
              { prompt: '활동지에 가족에게 보낼 \'같이 가요\' 쪽지를 썼으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"친구가 고른 전시 가운데 나도 가 보고 싶어진 곳이 있나요?" 두세 명의 대답을 듣는다. \'같이 가요\' 쪽지는 집에 가져가 가족에게 전하게 한다. 다음 시간은 단원을 마무리하며 지금까지 배운 것을 돌아본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '어울리는 전시', slots: [{ id: 'e1', label: '별과 달을 좋아하는 지우' }, { id: 'e2', label: '옛날 옷이 궁금한 하준' }], cards: ['밤하늘 그림 전시', '옛날 옷 전시'] }, prompt: '친구가 좋아하는 것과 어울리는 전시를 이어 보세요.', target: { match: { e1: '밤하늘 그림 전시', e2: '옛날 옷 전시' } }, difficulty: 0.05 },
          { type: 'choice', prompt: '가 보고 싶은 전시를 말할 때 까닭을 함께 말하면?', options: ['친구가 내 마음을 더 잘 알 수 있어요', '말이 길어져서 좋지 않아요', '까닭은 없어도 돼요'], answer: 0, difficulty: 0.1, explain: '까닭을 들으면 친구도 그 전시가 궁금해질 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '또 가 보고 싶은 전시',
      items: [
        { type: 'blank', prompt: '내가 또 가 보고 싶은 전시와 까닭을 쓰세요.', text: '나는 ___ 에 또 가 보고 싶어요. 왜냐하면 ___ 때문이에요.' },
        { type: 'choice', prompt: '까닭을 말한 것에 ○ 하세요.', options: ['그냥요', '옛 그릇을 직접 보고 싶어서요', '몰라요'], answer: '옛 그릇을 직접 보고 싶어서요' },
        { type: 'table', prompt: '짝이 가 보고 싶은 전시와 까닭을 쓰세요.', columns: ['짝이 고른 전시', '까닭'], rows: 1 },
        { type: 'short', prompt: '가족에게 보낼 \'같이 가요\' 쪽지를 쓰세요.' },
      ],
      easy: {
        note: '"왜냐하면"을 넣어 까닭을 말해요.',
        items: [
          { type: 'choice', prompt: '까닭이 들어 있는 말에 ○ 하세요.', options: ['그냥요', '그림을 크게 보고 싶어서요'], answer: '그림을 크게 보고 싶어서요' },
          { type: 'short', prompt: '또 가 보고 싶은 전시의 이름을 쓰세요.' },
          { type: 'draw', prompt: '그 전시에서 보고 싶은 것을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 빈칸 카드에 함정 카드가 하나뿐이에요. 마음 크기는 세 칸에서 골라요.',
      base: '어울리는 전시를 잇고, "왜냐하면"을 넣어 까닭을 말해요.',
      challenge: '함정 전시 카드와 까닭 없이 말하는 그럴듯한 보기가 있어요. 까닭을 두 가지 말하고, 짝의 까닭을 한 번 더 물어요.',
    },
    teacherNotes: '전시 이름은 특정 기관의 실제 전시가 아니라 종류를 나타낸 것이다. 지역 미술관·박물관의 어린이 전시를 함께 찾아보면 좋다. 가족과 전시에 가기 어려운 학생도 있으므로 온라인 전시(38차시)나 학교 안 전시도 고를 수 있게 한다. 자주 보이는 어려움: ① "그냥요", "재밌어서요"로 끝낸다 → "그 전시에서 무엇을 보고 싶은데요?" 하고 묻는다. ② 친구가 고른 전시를 깎아내린다 → 45차시의 받아 주는 말을 다시 떠올리게 한다. ③ 고를 전시가 떠오르지 않는다 → 알림판(38차시)에서 고르게 한다.',
  }));

  lessons.push(L(48, {
    title: '인물·하루·전시를 돌아보고 스스로 평가하기',
    objective: '단원에서 만난 인물, 하루를 알아본 사람들, 미술 전시에서 배운 것을 묶어 말하고, 내가 잘한 것과 더 해 볼 일을 스스로 평가할 수 있다.',
    illustration: ART('a classroom table displaying a picture diary, a thank-you card, and a painted postcard side by side, children sitting around it sharing what they learned', '우리가 만난 사람과 작품', [
      { motif: 'flower', x: 120, y: 228, color: 'rose' }, { motif: 'house', x: 250, y: 216, color: 'mint' }, { motif: 'star', x: 380, y: 96, s: 0.5 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '단원에서 만든 그림일기(9차시), 감사 카드(32차시), 엽서(43차시)를 칠판 앞에 나란히 놓는다. "이번 단원에서 우리는 세 갈래 길을 다녀왔어요. 이야기 속 인물을 만나고, 여러 사람의 하루를 알아보고, 미술 전시를 둘러보았어요." 시연 단추로 \'톤즈 아이들을 치료한 이태석\'이 \'이야기 속 인물\' 칸에 들어가는 모습을 보여 준다.',
        student: '세 가지 가운데 가장 기억에 남는 것을 하나 떠올려 봐요.',
        demo: { tool: 'mindmap', options: { slots: ['이야기 속 인물'], topic: '우리 단원', cards: ['톤즈 아이들을 치료한 이태석'], shuffle: false }, sequence: [{ sort: { '이야기 속 인물': ['톤즈 아이들을 치료한 이태석'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 단원 세 갈래 묶기', minutes: 14, tool: 'mindmap',
            teacher: '"카드에 적힌 일이 이야기로 만난 사람인지, 하루를 알아본 사람인지, 전시에서 한 일인지 생각해 봐요." 칸 이름을 먼저 소리 내어 읽는다. 소방관과 간호사도 다른 사람을 돕지만 이 단원에서는 \'하루\'를 알아본 사람이었다는 것을 떠올리게 한다. 바른 생각을 고를 때는 그렇게 생각한 차시를 함께 떠올리게 한다.',
            task: '단원에서 만난 것을 세 갈래로 묶고, 배운 것과 바른 생각을 찾아요.',
            levels: CARD_LV,
            items: [
              { prompt: '카드를 단원의 세 갈래로 나누어 보세요.', toolOptions: { slots: ['이야기 속 인물', '하루를 알아본 사람', '전시에서 한 일'], topic: '우리 단원', cards: ['흉년에 쌀을 나눈 김만덕', '어린이날을 만든 방정환', '밤에 출동을 기다리는 소방관', '밤새 환자를 돌보는 간호사', '「씨름」을 천천히 오래 보기', '친구와 다른 감상 받아 주기'] },
                target: { sort: { '이야기 속 인물': ['흉년에 쌀을 나눈 김만덕', '어린이날을 만든 방정환'], '하루를 알아본 사람': ['밤에 출동을 기다리는 소방관', '밤새 환자를 돌보는 간호사'], '전시에서 한 일': ['「씨름」을 천천히 오래 보기', '친구와 다른 감상 받아 주기'] } }, difficulty: 0.15,
                hints: ['옛날 이야기로 들은 사람, 하루 시간표를 알아본 사람, 작품을 보며 한 일로 나눠 봐요.', '소방관과 간호사는 이야기로 만났나요, 하루를 알아보았나요?', '김만덕·방정환은 이야기 속 인물, 소방관·간호사는 하루, 「씨름」 보기와 감상 받아 주기는 전시예요.'],
                levels: { easy: { toolOptions: { cards: ['흉년에 쌀을 나눈 김만덕', '밤에 출동을 기다리는 소방관', '「씨름」을 천천히 오래 보기'] }, prompt: '카드 세 장을 단원의 세 갈래로 나누어 보세요.', target: { sort: { '이야기 속 인물': ['흉년에 쌀을 나눈 김만덕'], '하루를 알아본 사람': ['밤에 출동을 기다리는 소방관'], '전시에서 한 일': ['「씨름」을 천천히 오래 보기'] } } } } },
              { prompt: '단원의 세 갈래에서 배운 것과 지금 할 수 있는 일을 이어 보세요.', toolOptions: { mode: 'match', topic: '배운 것과 할 일', slots: [{ id: 's1', label: '이야기 속 인물에게 배운 것' }, { id: 's2', label: '사람들의 하루에서 배운 것' }, { id: 's3', label: '미술 전시에서 배운 것' }], cards: ['어려운 사람을 먼저 도와요', '밤에도 일하는 분께 고마워해요', '작품을 천천히 오래 봐요'] },
                target: { match: { s1: '어려운 사람을 먼저 도와요', s2: '밤에도 일하는 분께 고마워해요', s3: '작품을 천천히 오래 봐요' } }, difficulty: 0.1,
                hints: ['세 갈래마다 어떤 차시를 했는지 하나씩 떠올려 봐요.', '그 갈래에서 만난 사람이나 작품과 이어지는 일인지 다시 견주어 봐요.', '인물은 돕기, 하루는 고마워하기, 전시는 천천히 보기예요.'] },
              { prompt: '이 단원에서 알게 된 바른 생각만 모두 골라 보세요.', toolOptions: { mode: 'pick', basket: '바른 생각', cards: ['돕는 일은 누구나 할 수 있어요', '사람마다 일하는 때가 달라요', '전시는 빨리 한 바퀴 돌면 다 본 거예요', '같은 그림도 사람마다 다르게 느낄 수 있어요'] },
                target: { pick: ['돕는 일은 누구나 할 수 있어요', '사람마다 일하는 때가 달라요', '같은 그림도 사람마다 다르게 느낄 수 있어요'] }, difficulty: 0.15,
                hints: ['카드마다 그 생각을 배운 차시를 떠올리고, 그때 무엇을 알게 되었는지 견주어 봐요.', '작은 미술관을 둘러볼 때 빨리 지나간 친구는 작품에 대해 말할 수 있었나요?', '빨리 한 바퀴 돌기만 빼고 세 가지가 바른 생각이에요.'],
                levels: { challenge: { toolOptions: { cards: ['돕는 일은 누구나 할 수 있어요', '사람마다 일하는 때가 달라요', '전시는 빨리 한 바퀴 돌면 다 본 거예요', '같은 그림도 사람마다 다르게 느낄 수 있어요', '밤에는 아무도 일하지 않아요'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 스스로 평가하고 다짐하기', minutes: 13, tool: 'emotion',
            teacher: '"이번에는 정답이 없어요. 내가 한 만큼 솔직하게 골라요." 세 갈래마다 눈금을 고른 뒤 그렇게 고른 까닭을 활동지에 한 줄씩 쓰게 한다. 낮게 고른 학생에게는 "다음에 하나만 더 해 본다면 무엇을 할까요?" 하고 다짐으로 잇는다. 끝으로 짝에게 가장 기억에 남는 시간과 앞으로 더 해 볼 일을 말하게 한다(4분).',
            task: '세 갈래마다 내가 한 만큼을 솔직하게 고르고, 짝에게 다짐을 말해요.',
            levels: SCALE_LV,
            items: [
              { prompt: '이야기 속 인물처럼 내가 다른 사람을 도운 만큼 뿌듯함의 크기를 골라 보세요.', toolOptions: { mode: 'scale', situation: '이번 단원에서 교실·집·동네에서 다른 사람을 도와 보았어요.', feeling: '뿌듯함', after: '가장 기억에 남는 도운 일을 활동지에 써요.' }, target: { level: 'any' }, difficulty: 0.05, hints: SELF_H },
              { prompt: '일하는 분들께 고마운 마음을 전한 만큼 크기를 골라 보세요.', toolOptions: { mode: 'scale', situation: '감사 카드와 전할 말로 일하는 분들께 고마운 마음을 전했어요.', feeling: '고마움', after: '고마운 마음을 더 전하고 싶은 분을 떠올려 봐요.' }, target: { level: 'any' }, difficulty: 0.05, hints: SELF_H },
              { prompt: '작품을 천천히 보고 자세히 들려준 만큼 자신감의 크기를 골라 보세요.', toolOptions: { mode: 'scale', situation: '작품을 한 작품씩 오래 보고, 본 것을 네 가지로 친구에게 들려주었어요.', feeling: '자신감', after: '다음 전시에서 더 해 볼 것을 생각해 봐요.' }, target: { level: 'any' }, difficulty: 0.05, hints: SELF_H },
              { prompt: '짝에게 이 단원에서 가장 기억에 남는 시간과 앞으로 더 해 볼 일 한 가지를 말해요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"이 단원을 한 문장으로 말한다면 어떻게 말할까요?" 세 명 정도의 문장을 듣고 칠판에 적는다. 짝에게 말한 다짐 가운데 한 가지를 활동지 맨 아래에 쓰게 한다. 단원에서 만든 그림일기·감사 카드·엽서를 모아 집에 가져가 가족에게 보여 주게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '사람과 한 일', slots: [{ id: 'e1', label: '이태석 신부' }, { id: 'e2', label: '소방관' }], cards: ['톤즈에서 아이들을 치료하고 가르쳤어요', '밤에도 불이 나면 출동해요'] }, prompt: '사람과 그 사람이 한 일을 이어 보세요.', target: { match: { e1: '톤즈에서 아이들을 치료하고 가르쳤어요', e2: '밤에도 불이 나면 출동해요' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '이 단원에서 배운 것을 내일 해 본다면 무엇이 알맞을까요?', options: ['급식을 만들어 주신 분께 고맙다고 인사해요', '전시장에서 뛰어다녀요', '도움이 필요한 친구를 못 본 척해요'], answer: 0, difficulty: 0.05, explain: '우리를 위해 일하는 분께 고마운 마음을 전할 수 있어요.' },
          { type: 'short', prompt: '이 단원에서 앞으로 더 해 보고 싶은 일 한 가지를 써 보세요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '6. 인물 단원 돌아보기',
      items: [
        { type: 'table', prompt: '세 갈래마다 가장 기억에 남는 것을 쓰세요.', columns: ['갈래', '가장 기억에 남는 것'], cells: [['이야기 속 인물', ''], ['하루를 알아본 사람', ''], ['미술 전시', '']] },
        { type: 'check', prompt: '이 단원에서 내가 한 것에 ✓ 하세요.', options: ['다른 사람을 도와 보았어요', '일하는 분께 고마운 마음을 전했어요', '작품을 천천히 오래 보았어요', '친구의 다른 감상을 받아 주었어요'] },
        { type: 'choice', prompt: '전시를 잘 보는 방법에 ○ 하세요.', options: ['한 바퀴 빨리 돌아요', '한 작품씩 멈추어 살펴요', '작품을 손으로 만져요'], answer: '한 작품씩 멈추어 살펴요' },
        { type: 'short', prompt: '앞으로 더 해 볼 일 한 가지를 쓰세요.' },
      ],
      easy: {
        note: '인물 → 하루 → 전시 차례로 떠올려 봐요.',
        items: [
          { type: 'choice', prompt: '흉년에 쌀을 나눈 사람에 ○ 하세요.', options: ['김만덕', '고흐'], answer: '김만덕' },
          { type: 'short', prompt: '이 단원에서 가장 재미있었던 시간을 쓰세요.' },
          { type: 'draw', prompt: '앞으로 해 보고 싶은 일을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드가 세 장이고 맞는 칸에 초록 테두리가 생겨요. 마음 크기는 세 칸에서 골라요.',
      base: '여섯 장을 세 갈래로 나누고, 배운 것과 할 일을 이어요.',
      challenge: '함정 생각 카드가 더 있어요. 스스로 평가한 까닭을 갈래마다 한 줄씩 써요.',
    },
    teacherNotes: '이 차시는 단원 정리이므로 1~47차시에서 만든 결과물(그림일기·감사 카드·엽서·붙임쪽지)을 미리 모아 둔다. 스스로 평가 눈금은 정답이 없으며(어느 칸이나 맞음), 낮게 고른 학생을 나무라지 않고 다짐으로 잇는다. 결과 화면의 눈금 값은 다음 학기 상담 자료로만 쓴다. 자주 보이는 어려움: ① 소방관·간호사를 \'이야기 속 인물\'에 넣는다 → 그분들은 이야기가 아니라 하루를 알아본 사람이라는 것을 차시 결과물로 보여 준다. ② 스스로 평가를 모두 가장 높게 고른다 → 그렇게 고른 까닭을 한 줄 쓰게 한다. ③ 다짐이 막연하다(착하게 살기) → "내일 할 수 있는 일"로 좁혀 말하게 한다.',
  }));

  // @@NEXT@@

  // ── 차시 끝 ──

  PaperLessons.registerUnit({
    id: 'g2-int-2-06', schema: 'edu-unit.v1', catalogUnit: UNIT,
    grade: 2, subject: '통합교과', unitTitle: TITLE,
    flow: '1~6차시는 나를 도와준 사람을 떠올린 뒤 김만덕·방정환·나이팅게일·이태석처럼 다른 사람을 도운 인물의 이야기를 차례대로 놓고, 한 일과 그렇게 한 까닭을 짝 지으며, 우리 동네의 숨은 도우미로 넓혀 돕는 일은 누구나 할 수 있음을 확인합니다. 7~11차시는 인물이 한 일을 지금 내가 할 수 있는 일로 바꾸어 교실·집·동네에서 하나씩 해 보고 그림일기로 남깁니다. 12~16차시는 도운 뒤 상대의 마음을 떠올리고, 알아주지 않아도 도움에는 뜻이 있음을 생각하며, 우리 반이 함께 할 일을 제안·투표해 한 주 동안 실천하고 돌아봅니다. 17~32차시는 낮과 밤에 달라지는 것에서 물음을 만들고 알아볼 사람을 정한 뒤, 급식 조리사·소방관·간호사처럼 하루가 다른 사람들의 하루를 시간 차례로 읽고 낮·밤에 일하는 사람으로 나누며, 내 하루와 견주어 그분들께 전할 말과 감사 카드를 만듭니다. 33~48차시는 가 볼 수 있는 전시를 찾고 전시장 약속·안내문·안내도를 익힌 뒤, 옛 그림과 친구 작품을 하나씩 오래 보며 마음에 든 작품을 색종이로 남기고, 본 것과 느낀 것을 자세히 말하며 친구의 다른 감상을 받아들이고, 마지막 시간에 단원 전체를 스스로 평가합니다.',
    refs: {},
    lessons: lessons,
  });
})();
