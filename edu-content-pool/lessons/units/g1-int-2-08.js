/* 1학년 2학기 통합교과 8. 이야기 — 48차시
 * 1~16차시 [바른 생활] 다양한 생각에 열린 태도: 이야기 나눔 약속·새로 안 생각(1~4) → 모양과 색 모아 나누기(5~8, 즐거운 생활)
 *   → 같은 것을 보고 다르게 생각하기(9~12) → 끝까지 듣고 옮겨 말하기(13~16)
 * 17~28차시 [즐거운 생활] 소리 이야기: 긴·짧은, 높은·낮은 소리(17~20) → 눈 감고 듣고 소리 내기(21~24) → 소리를 그림·몸짓으로(25~28)
 * 29~40차시 [즐거운 생활] 감각 이야기: 보고 만져 견주기(29~32) → 여러 감각으로 살피고 나타내기(33~36) → 친구와 견주고 다음 살필 것 고르기(37~40)
 * 41~48차시 [즐거운 생활] 모양과 색 이야기: 둘레에서 모양과 색 찾기(41~44) → 그림으로 남기고 선·모양·색 표시하기, 단원 정리(45~48)
 * 성취기준: units-map 단원 목록이 비어 있고 미확인(standardsVerified:false)이라 모든 차시 standards: [] (지어내지 않는다).
 * 이야기·예문·소리 흉내 글은 모두 직접 지었다. '토끼와 거북'은 저작권이 끝난 이솝 우화 줄거리만 쓴다. 학생 이름은 가명(민지·준호·하준·서아)만.
 */
(function () {
  var UNIT = 'g1-통합교과-2학기-8';
  var TITLE = '8. 이야기';
  var HEAD = 'Layered paper-cut illustration of ';
  var TAIL = ', with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.';
  function two(n) { return (n < 10 ? '0' : '') + n; }
  function L(n, x) {
    var head = {
      id: 'g1-int-2-08-' + two(n), schema: 'edu-lesson.v1', catalog: { unit: UNIT, lesson: n },
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
  var MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };
  // 카드 판 교구 단계: 쉬움은 맞는 칸에 초록 테두리·틀린 칸은 바로 되돌림, 도전은 문항마다 함정 카드를 더 넣는다
  var CARD_LV = { easy: { live: true, instant: true }, base: {}, challenge: {} };
  // 감각 기관 고르기(body parts): 쉬움은 이름이 보이고, 도전은 감각과 상관없는 곳이 섞인다
  var SENSE = ['눈', '귀', '코', '혀', '피부'];
  var BODY_LV = {
    easy: { mode: 'parts', parts: SENSE, names: true },
    base: { mode: 'parts', parts: SENSE },
    challenge: { mode: 'parts', parts: SENSE.concat(['목', '어깨', '손목', '무릎']) },
  };
  // body를 과학 밖(감각)에서 쓰므로 문항마다 힌트 세 단계를 직접 쓴다
  function BH(a, b, c) { return [a, b, c]; }
  // 콜라주 단계: 쉬움은 고르개를 그 문항에 필요한 것만 남긴다(문항 levels.easy), 도전은 조건을 더한다(문항 levels.challenge)
  var COL_LV = { easy: {}, base: {}, challenge: {} };
  // 건반 단계: 쉬움은 듣는 동안 건반이 비치고, 도전은 맞힐 때까지 계이름을 가린다
  var KEY_LV = { easy: { from: '도', to: '높은도', showWhileListening: true }, base: { from: '도', to: '높은도' }, challenge: { from: '도', to: '높은도', names: 'none', nameToggle: false } };
  var RHY_LV = { easy: { mode: 'rhythm', blocks: ['q', 'h'], showBeats: true }, base: { mode: 'rhythm', blocks: ['q', 'h'] }, challenge: { mode: 'rhythm', blocks: ['q', 'h', 'qr'] } };

  var lessons = [];

  // ───────────────────────── 1~4차시: 이야기 나눔 약속·새로 안 생각(성찰과 습관화) ─────────────────────────

  lessons.push(L(1, {
    title: '이야기 나눔 약속 처음 정해 보기',
    objective: '짝의 이야기를 끝까지 들은 뒤 새로 알게 된 것을 한 가지 말하고, 우리 반 듣기 약속을 하나 고를 수 있다.',
    illustration: ART('a circle of paper children sitting on a rug and taking turns to talk, one child holding a paper talking stick while the others listen with big paper ears', '이야기를 나누어요', [
      { motif: 'tree', x: 90, y: 214 }, { motif: 'flower', x: 380, y: 228, color: 'rose' }, { motif: 'bird', x: 300, y: 80 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 7,
        teacher: '"이번 단원 이름은 \'이야기\'예요. 소리에도, 물건을 만진 느낌에도, 교실의 모양과 색에도 이야기가 숨어 있어요. 그 이야기를 친구와 나누려면 무엇이 필요할까요?" 두세 명의 생각을 듣는다. 시연 단추로 \'말하는 친구를 봐요\' 카드가 잘 듣는 모습 가지로 가는 것을 보여 준다. "친구 말을 들으면 내 생각이 없어질까요?" 하고 물어 손을 들게 하고, 답은 오늘 끝에 다시 묻는다고 말해 둔다.',
        student: '친구와 이야기할 때 내가 좋았던 때를 하나 떠올려 봐요.',
        demo: { tool: 'mindmap', options: { topic: '이야기 나눌 때', slots: ['잘 듣는 모습', '아쉬운 모습'], cards: ['말하는 친구를 봐요', '딴 데를 봐요'], shuffle: false }, sequence: [{ sort: { '잘 듣는 모습': ['말하는 친구를 봐요'], '아쉬운 모습': ['딴 데를 봐요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 잘 듣는 모습 찾기', minutes: 12, tool: 'emotion',
            teacher: '"말하는 친구가 \'아, 내 말을 잘 듣는구나\' 하고 느끼는 때는 언제일까요?" 카드를 하나씩 소리 내어 읽고, 그 모습을 몸으로 해 보게 한다(고개 끄덕이기, 친구 보기). "먼저 말하면 이기는 거예요"라는 학생에게 "이야기 나누기는 이기고 지는 놀이일까요?" 하고 되묻는다.',
            task: '카드를 읽고 잘 듣는 모습과 아쉬운 모습을 가려 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '카드를 잘 듣는 모습과 아쉬운 모습으로 나누어 보세요.', toolOptions: { mode: 'sort', slots: ['잘 듣는 모습', '아쉬운 모습'], cards: ['고개를 끄덕여요', '중간에 끼어들어요', '말하는 친구를 봐요', '손으로 장난쳐요'] },
                target: { sort: { '잘 듣는 모습': ['고개를 끄덕여요', '말하는 친구를 봐요'], '아쉬운 모습': ['중간에 끼어들어요', '손으로 장난쳐요'] } }, difficulty: 0.05 },
              { prompt: '친구가 말할 때 하면 좋은 일만 바구니에 담아 보세요.', toolOptions: { mode: 'pick', basket: '잘 듣는 모습', cards: ['말이 끝날 때까지 기다려요', '"그래서 어떻게 됐어?" 하고 물어요', '혼자 그림을 그려요'] },
                target: { pick: ['말이 끝날 때까지 기다려요', '"그래서 어떻게 됐어?" 하고 물어요'] }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['말이 끝날 때까지 기다려요', '"그래서 어떻게 됐어?" 하고 물어요', '혼자 그림을 그려요', '"내 말이 맞아!" 하고 외쳐요'] } } } },
              { prompt: '하준이가 말하는데 나도 하고 싶은 말이 생겼어요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '하준', situation: '하준이가 주말에 간 바닷가 이야기를 하고 있어요. 나도 바다에 간 일이 떠올랐어요.', choices: [
                { id: 'cut', text: '"나도!" 하고 바로 끼어들어요', result: '하준이가 하던 말을 잊어버렸어요.', mood: '속상함', why: '말이 끊긴 하준이의 마음을 떠올려 봐요.' },
                { id: 'wait', text: '하준이 말이 끝난 뒤 내 이야기를 해요', result: '두 친구가 바다 이야기를 끝까지 나누었어요.', mood: '기쁨' },
                { id: 'leave', text: '내 말을 못 하니 딴 데를 봐요', result: '하준이가 혼자 말하는 것 같아 쓸쓸해요.', mood: '외로움', why: '딴 데를 보면 하준이는 어떤 마음일까요?' }] }, target: { choice: 'wait' }, difficulty: 0.1,
                predict: { q: '먼저 말한 사람이 이기는 걸까요?', options: ['이겨요', '이기고 지는 게 아니에요'], answer: 1 },
                conclude: '이야기 나누기는 이기는 놀이가 아니라 서로의 이야기를 주고받는 일이에요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 짝 이야기 듣고 듣기 배지 만들기', minutes: 14, tool: 'collage',
            teacher: '"짝에게 주말에 한 일을 하나씩 말해요. 짝이 말할 때는 짝의 눈을 보고 끝까지 들어요." 2분씩 바꾸어 말하게 하고 타이머를 칠판에 띄운다. 다 들은 뒤 "짝 이야기에서 처음 안 것이 있나요?" 하고 서너 명에게 묻는다. "그냥 똑같아요"라는 학생에게는 "짝이 누구와 갔대요? 무엇을 먹었대요?"처럼 들은 것을 하나씩 짚게 한다. 배지는 귀를 닮은 반원 두 개로 \'잘 들어요\'를 나타낸다고 설명해 준다.',
            task: '짝과 주말 이야기를 주고받은 뒤, 귀 모양 조각으로 나의 듣기 배지를 만들어요.',
            levels: COL_LV,
            items: [
              { prompt: '짝과 주말에 한 일을 바꾸어 말하고 끝까지 들었으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '큰 동그라미 하나 위에 귀를 닮은 반원 두 개를 붙여 듣기 배지를 만들어 보세요.', toolOptions: { shapes: ['circle', 'semi', 'heart', 'star', 'square'], colors: ['노랑', '분홍', '파랑', '초록'] },
                target: { has: [{ shape: 'circle', size: 'l', n: 1 }, { shape: 'semi', n: 2 }] }, difficulty: 0.1,
                levels: { easy: { toolOptions: { shapes: ['circle', 'semi'], colors: ['노랑', '분홍'] } }, challenge: { prompt: '큰 동그라미 하나, 귀 반원 두 개에 \'마음으로 들어요\' 하트 하나를 더해 배지를 만들어 보세요.', target: { has: [{ shape: 'circle', size: 'l', n: 1 }, { shape: 'semi', n: 2 }, { shape: 'heart', n: 1 }] } } } },
              { prompt: '배지를 더 꾸미고 오늘 한 일을 점검 목록에 표시해 보세요.', toolOptions: { shapes: ['circle', 'semi', 'heart', 'star', 'square'], colors: ['노랑', '분홍', '파랑', '초록'] },
                target: { selfCheck: ['짝 이야기를 끝까지 들었어요', '짝 이야기에서 새로 안 것을 하나 말했어요'], minPieces: 3 }, difficulty: 0.05,
                levels: { easy: { toolOptions: { shapes: ['circle', 'semi', 'heart'] } }, challenge: { prompt: '배지를 꾸미고 점검 목록에 표시해요. 새로 안 것을 짝에게 다시 말해 주어요.', target: { selfCheck: ['짝 이야기를 끝까지 들었어요', '짝 이야기에서 새로 안 것을 하나 말했어요', '새로 안 것을 짝에게 다시 말해 주었어요'], minPieces: 4 } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"오늘 친구 이야기를 들은 뒤에 내 생각은 어떻게 되었나요?" 두세 명의 대답을 듣고, 도입에서 손을 든 질문으로 돌아간다. 출구 질문을 마친 뒤 오늘 고른 듣기 약속을 교실 앞 \'이야기 나눔 약속\' 판에 붙인다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '이야기 나눌 때', slots: ['잘 듣는 모습', '아쉬운 모습'], cards: ['몸을 친구 쪽으로 돌려요', '하품을 크게 해요'] }, prompt: '두 카드를 알맞은 가지에 놓아 보세요.', target: { sort: { '잘 듣는 모습': ['몸을 친구 쪽으로 돌려요'], '아쉬운 모습': ['하품을 크게 해요'] } }, difficulty: 0.05 },
          { type: 'choice', prompt: '친구 이야기를 들으면 내 생각은 어떻게 될까요?', options: ['내 생각이 없어져요', '내 생각에 새 생각이 더해져요'], answer: 1, difficulty: 0.15, explain: '친구 말을 들어도 내 생각은 그대로 있고, 새로 안 것이 더해져요.' },
          { type: 'tool', tool: 'emotion', options: { mode: 'scale', situation: '오늘 짝 이야기를 들을 때', feeling: '뿌듯함', steps: 3, scaleLabels: ['조금', '', '아주 많이'], ask: '끝까지 잘 들었다는 마음이 얼마나 드나요?' }, prompt: '오늘 짝 이야기를 끝까지 들은 내 모습을 눈금에 솔직하게 골라 보세요.', target: { level: 'any' }, difficulty: 0.05 },
        ],
      },
    ],
    worksheet: {
      title: '우리 반 이야기 나눔 약속',
      items: [
        { type: 'choice', prompt: '잘 듣는 모습에 ○ 하세요.', options: ['친구를 보며 끄덕여요', '중간에 끼어들어요', '딴 데를 봐요'], answer: '친구를 보며 끄덕여요' },
        { type: 'blank', prompt: '짝 이야기에서 새로 안 것을 쓰세요.', text: '짝은 주말에 ________________ 했어요.' },
        { type: 'check', prompt: '내가 지키고 싶은 듣기 약속에 ✓ 하세요.', options: ['말하는 친구를 봐요', '끝까지 기다려요', '고개를 끄덕여요', '"그래서?" 하고 물어요'] },
        { type: 'draw', prompt: '나의 듣기 배지를 그려 보세요.' },
      ],
      easy: {
        note: '친구를 보고, 끝까지 기다려요.',
        items: [
          { type: 'choice', prompt: '잘 듣는 모습에 ○ 하세요.', options: ['친구를 봐요', '장난쳐요'], answer: '친구를 봐요' },
          { type: 'short', prompt: '짝이 주말에 한 일을 한 낱말로 쓰세요.' },
          { type: 'draw', prompt: '나의 듣기 배지를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 가지에 초록 테두리가 생기고, 틀리면 카드가 돌아와요. 배지 고르개에는 동그라미와 반원만 있어요.',
      base: '모두 놓은 뒤 확인을 눌러요. 배지는 다섯 가지 모양에서 골라요.',
      challenge: '듣기와 상관없는 함정 카드가 섞이고, 배지에 하트까지 넣어 세 조건을 맞춰요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 먼저 말하면 이긴다고 여겨 끼어든다 → 말하는 사람이 쥐는 \'이야기 막대\'(연필 한 자루도 된다)를 정해 막대가 넘어올 때 말하게 한다. ② 친구 말을 들으면 내 생각이 없어진다고 여긴다 → "네 생각은 그대로 있고, 하나 더 생겼지?"라고 짚는다. ③ 새로 안 것을 말하지 못한다 → "누구와, 어디서, 무엇을"을 묻는 손가락 세 개를 보여 준다.',
  }));

  lessons.push(L(2, {
    title: '토끼와 거북 이야기 듣고 친구 생각 모으기',
    objective: '같은 옛이야기를 듣고 친구가 말한 생각 가운데 내가 처음 듣는 생각을 찾아 "네 말을 듣고 새로 알았어"라고 말할 수 있다.',
    illustration: ART('a paper rabbit sleeping under a tree while a paper turtle walks slowly toward a finish flag, children around it sharing thoughts in speech bubbles', '친구 생각을 모아요', [
      { motif: 'tree', x: 110, y: 212 }, { motif: 'flower', x: 360, y: 228 }, { motif: 'leaf', x: 300, y: 222, color: 'mint' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 7,
        teacher: '이솝 우화 \'토끼와 거북\'의 줄거리를 3분 동안 들려준다(토끼가 뽐내다 낮잠을 자고, 거북이 쉬지 않고 걸어 이긴다). "이 이야기를 듣고 떠오른 생각을 하나씩 말해 볼까요?" 두세 명의 생각을 칠판에 적고, 생각이 서로 다르다는 것을 짚는다. 시연 단추로 \'낮잠을 잤어요\' 카드가 토끼 가지로 가는 것을 보여 준다.',
        student: '토끼와 거북 가운데 누가 더 기억에 남는지 짝에게 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '토끼와 거북', slots: ['토끼', '거북'], cards: ['낮잠을 잤어요', '쉬지 않고 걸었어요'], shuffle: false }, sequence: [{ sort: { '토끼': ['낮잠을 잤어요'], '거북': ['쉬지 않고 걸었어요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 친구들이 말한 생각 나누어 모으기', minutes: 12, tool: 'emotion',
            teacher: '"민지는 토끼 이야기를, 준호는 거북 이야기를 했어요. 같은 이야기를 듣고도 보는 곳이 달랐지요?" 카드마다 누구에 대한 생각인지 먼저 말하게 한다. 새로 안 생각을 말할 때 쓰는 말 "네 말을 듣고 새로 알았어"를 함께 세 번 따라 말한다. "내 생각이랑 다르면 틀린 거예요"라는 학생에게는 "토끼 이야기도, 거북 이야기도 다 이야기 안에 있었지요?" 하고 되묻는다.',
            task: '친구들이 말한 생각 카드를 누구에 대한 생각인지 나누고, 새 생각을 반기는 말을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '친구들이 말한 생각을 토끼와 거북 가지로 나누어 보세요.', toolOptions: { mode: 'sort', slots: ['토끼', '거북'], cards: ['빠르다고 뽐냈어요', '느려도 쉬지 않았어요', '경주 중에 잠들었어요', '끝까지 걸어 이겼어요'] },
                target: { sort: { '토끼': ['빠르다고 뽐냈어요', '경주 중에 잠들었어요'], '거북': ['느려도 쉬지 않았어요', '끝까지 걸어 이겼어요'] } }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['빠르다고 뽐냈어요', '느려도 쉬지 않았어요', '경주 중에 잠들었어요', '끝까지 걸어 이겼어요', '오늘 급식은 국수예요'] } } } },
              { prompt: '친구의 새 생각을 들었을 때 하면 좋은 말만 바구니에 담아 보세요.', toolOptions: { mode: 'pick', basket: '반기는 말', cards: ['"네 말을 듣고 새로 알았어"', '"그렇게 볼 수도 있구나"', '"내 말만 맞아"', '"그건 몰라도 돼"'] },
                target: { pick: ['"네 말을 듣고 새로 알았어"', '"그렇게 볼 수도 있구나"'] }, difficulty: 0.1 },
              { prompt: '민지가 "토끼가 불쌍해요"라고 했어요. 나는 거북이 대단하다고 생각해요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '민지', situation: '민지는 토끼가 불쌍하다고 하고, 나는 거북이 대단하다고 생각해요.', choices: [
                { id: 'no', text: '"토끼는 안 불쌍해!" 하고 말해요', result: '민지가 말하기 싫어졌어요.', mood: '속상함', why: '내 생각과 다르다고 민지 생각이 틀린 것일까요?' },
                { id: 'ask', text: '"왜 그렇게 생각해?" 하고 물어요', result: '민지가 "혼자 잠들어 아무도 안 깨워 줬잖아"라고 까닭을 말해 주었어요.', mood: '기쁨' },
                { id: 'quiet', text: '아무 말도 안 하고 내 생각만 해요', result: '민지가 왜 그렇게 생각했는지 끝내 몰랐어요.', mood: '걱정', why: '물어보지 않으면 민지의 까닭을 알 수 있을까요?' }] }, target: { choice: 'ask' }, difficulty: 0.15,
                conclude: '생각이 다를 때 까닭을 물으면 내가 몰랐던 생각을 새로 알게 돼요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 모둠 생각 나무 꾸미기', minutes: 14, tool: 'collage',
            teacher: '"모둠에서 돌아가며 이야기에 대한 생각을 하나씩 말해요. 말하는 친구 말고는 모두 그 친구를 봐요." 모둠마다 생각 나무 활동지를 한 장 나누어 준다. 내 생각은 초록 잎, 친구에게 듣고 새로 안 생각은 노랑 별로 붙인다고 칠판에 그림으로 보여 준다. 별이 하나도 없는 학생에게 "모둠 친구 가운데 나와 다르게 말한 친구는 누구였어요?" 하고 묻는다.',
            task: '모둠에서 생각을 돌아가며 말한 뒤, 내 생각은 초록 잎, 새로 들은 생각은 노랑 별로 생각 나무를 꾸며요.',
            levels: COL_LV,
            items: [
              { prompt: '모둠에서 한 사람씩 생각을 말하고 모두 끝까지 들었으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '내 생각은 초록 잎 한 장, 친구에게 새로 들은 생각은 노랑 별 두 개로 붙여 보세요.', toolOptions: { shapes: ['leaf', 'star', 'circle', 'rect'], colors: ['초록', '노랑', '갈색', '빨강'] },
                target: { has: [{ shape: 'leaf', color: '초록', n: 1 }, { shape: 'star', color: '노랑', n: 2 }] }, difficulty: 0.15,
                levels: { easy: { toolOptions: { shapes: ['leaf', 'star'], colors: ['초록', '노랑'] } }, challenge: { prompt: '갈색 긴 네모로 나무줄기를 세우고, 초록 잎 한 장과 노랑 별 세 개를 붙여 보세요.', target: { has: [{ shape: 'rect', color: '갈색', min: 1 }, { shape: 'leaf', color: '초록', n: 1 }, { shape: 'star', color: '노랑', n: 3 }] } } } },
              { prompt: '모둠 친구 셋에게서 들은 생각을 노랑 별 세 개로, 내 생각을 초록 잎 두 장으로 나타내 보세요.', toolOptions: { shapes: ['leaf', 'star', 'circle', 'rect'], colors: ['초록', '노랑', '갈색', '빨강'] },
                target: { has: [{ shape: 'leaf', color: '초록', n: 2 }, { shape: 'star', color: '노랑', n: 3 }] }, difficulty: 0.2,
                levels: { easy: { toolOptions: { shapes: ['leaf', 'star'], colors: ['초록', '노랑'] } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"생각 나무에 별이 붙었다는 건 무엇을 뜻할까요?" 두세 모둠의 나무를 칠판에 붙여 보며 별을 하나 골라 그 생각을 처음 말한 친구에게 "네 말을 듣고 새로 알았어"라고 말해 주게 한다. 다음 시간에는 오늘 말한 생각을 바탕으로 우리 반 듣기 약속을 고른다고 예고한다.',
        exitTicket: [
          { type: 'choice', prompt: '하준이는 "거북이 끝까지 해서 좋아요", 서아는 "토끼가 다음엔 안 잘 거예요"라고 했어요. 맞는 말은?', options: ['하준이만 맞아요', '서아만 맞아요', '둘 다 이야기를 듣고 한 생각이에요'], answer: 2, difficulty: 0.2, explain: '같은 이야기를 듣고도 친구마다 다른 곳을 보고 생각할 수 있어요.' },
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', basket: '반기는 말', cards: ['"새로 알았어, 고마워"', '"그런 생각은 이상해"', '"네 생각도 들어 볼게"'] }, prompt: '친구의 새 생각을 반기는 말만 골라 보세요.', target: { pick: ['"새로 알았어, 고마워"', '"네 생각도 들어 볼게"'] }, difficulty: 0.1 },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '토끼와 거북 생각 나무',
      items: [
        { type: 'table', prompt: '내 생각과 친구에게 새로 들은 생각을 쓰세요.', columns: ['내 생각', '새로 들은 생각'], rows: 2 },
        { type: 'choice', prompt: '친구 생각이 나와 다를 때 하는 말에 ○ 하세요.', options: ['"왜 그렇게 생각해?"', '"틀렸어"', '"몰라"'], answer: '"왜 그렇게 생각해?"' },
        { type: 'blank', prompt: '빈칸을 채우세요.', text: '___의 말을 듣고 __________________ 새로 알았어요.' },
        { type: 'draw', prompt: '초록 잎과 노랑 별이 달린 생각 나무를 그려 보세요.' },
      ],
      easy: {
        note: '내 생각은 잎, 친구 생각은 별이에요.',
        items: [
          { type: 'choice', prompt: '경주 중에 잠든 동물에 ○ 하세요.', options: ['토끼', '거북'], answer: '토끼' },
          { type: 'choice', prompt: '친구 생각을 반기는 말에 ○ 하세요.', options: ['"새로 알았어"', '"이상해"'], answer: '"새로 알았어"' },
          { type: 'draw', prompt: '생각 나무를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드에 초록 테두리가 생기고, 생각 나무는 잎과 별만 골라요.',
      base: '모두 놓은 뒤 확인을 눌러요. 잎과 별의 수를 맞춰요.',
      challenge: '이야기와 상관없는 함정 카드가 섞이고, 생각 나무에 줄기와 별 세 개까지 넣어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 나와 다른 생각을 "틀렸다"고 한다 → 이야기 안에서 그 생각이 나온 곳을 함께 찾아 준다. ② 새로 들은 생각이 없다고 한다 → 모둠에서 들은 말을 하나씩 다시 말하게 하고 그중 내 것과 다른 것을 고르게 한다. ③ 별을 많이 붙이는 데만 신경 쓴다 → 별 하나마다 누구의 생각인지 말하게 한다. 이솝 우화 줄거리는 저작권이 끝난 옛이야기이며 교사가 직접 다듬어 들려준다.',
  }));

  lessons.push(L(3, {
    title: '우리 반 듣기 약속 하나 골라 다짐하기',
    objective: '이야기를 나눌 때 쓸 듣기 약속과 상관없는 약속을 가려내고, 다음 이야기 시간에 지킬 듣기 약속 하나를 골라 말할 수 있다.',
    illustration: ART('a classroom board with paper promise cards pinned on it, a big paper ear and a heart, children placing their chosen cards', '듣기 약속을 골라요', [
      { motif: 'house', x: 110, y: 214, color: 'sky' }, { motif: 'star', x: 330, y: 90, s: 0.6 }, { motif: 'flower', x: 400, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"지난 두 시간 동안 친구 이야기를 들으며 좋았던 때를 떠올려 봐요. 친구가 어떻게 해 주었을 때 좋았나요?" 서너 명의 대답을 칠판에 짧게 적는다. 시연 단추로 \'끝까지 기다려요\' 카드가 듣기 약속 가지에 놓이는 것을 보여 준다. "약속은 선생님이 정해 주는 게 아니라 오늘 우리가 골라요."',
        student: '친구가 내 이야기를 잘 들어 주었을 때 어떤 마음이었는지 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '우리 반 약속', slots: ['듣기 약속', '다른 약속'], cards: ['끝까지 기다려요', '복도에서 걸어요'], shuffle: false }, sequence: [{ sort: { '듣기 약속': ['끝까지 기다려요'], '다른 약속': ['복도에서 걸어요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 듣기 약속 가려내기', minutes: 12, tool: 'mindmap',
            teacher: '"이 약속은 이야기를 들을 때 쓰는 약속일까요, 다른 때 쓰는 약속일까요?" 카드마다 \'언제 쓰는 약속인지\' 먼저 말하게 한다. 복도·급식 약속도 좋은 약속이지만 오늘 고르는 것은 듣기 약속이라는 것을 짚는다. 약속을 행동으로 말하지 않고 "잘 들어요"처럼 넓게 말하는 학생에게 "잘 들으려면 눈은? 입은?" 하고 몸으로 나누어 묻는다.',
            task: '약속 카드를 듣기 약속과 다른 약속으로 나누고, 듣기 약속을 지키는 차례를 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '약속 카드를 듣기 약속과 다른 때 쓰는 약속으로 나누어 보세요.', toolOptions: { topic: '우리 반 약속', slots: ['듣기 약속', '다른 약속'], cards: ['말하는 친구를 봐요', '손을 씻고 밥을 먹어요', '친구 말에 끄덕여요', '신발을 가지런히 놓아요'] },
                target: { sort: { '듣기 약속': ['말하는 친구를 봐요', '친구 말에 끄덕여요'], '다른 약속': ['손을 씻고 밥을 먹어요', '신발을 가지런히 놓아요'] } }, difficulty: 0.1 },
              { prompt: '친구가 말을 시작해서 끝낼 때까지, 듣는 사람이 하는 일을 차례대로 놓아 보세요.', toolOptions: { mode: 'order', topic: '듣기 차례', slots: ['처음', '가운데', '끝'], cards: ['하던 일을 멈추고 친구를 봐요', '끄덕이며 끝까지 들어요', '다 들은 뒤 내 생각을 말해요'] },
                target: { order: ['하던 일을 멈추고 친구를 봐요', '끄덕이며 끝까지 들어요', '다 들은 뒤 내 생각을 말해요'] }, difficulty: 0.15,
                predict: { q: '내 생각은 언제 말하면 좋을까요?', options: ['친구 말 중간에', '친구 말이 끝난 뒤'], answer: 1 },
                conclude: '친구 말이 끝난 뒤에 내 생각을 말하면 두 사람 생각을 모두 나눌 수 있어요.' },
              { prompt: '약속 카드에서 이야기를 들을 때 지키는 약속만 골라 보세요.', toolOptions: { mode: 'pick', basket: '듣기 약속', cards: ['궁금한 것은 다 듣고 물어요', '친구 말을 놀리지 않아요', '줄을 서서 기다려요', '쓴 물건은 제자리에 둬요'] },
                target: { pick: ['궁금한 것은 다 듣고 물어요', '친구 말을 놀리지 않아요'] }, difficulty: 0.2,
                levels: { easy: { toolOptions: { cards: ['궁금한 것은 다 듣고 물어요', '친구 말을 놀리지 않아요', '쓴 물건은 제자리에 둬요'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 내 듣기 약속 카드 만들기', minutes: 15, tool: 'collage',
            teacher: '"오늘 나온 듣기 약속 가운데 다음 이야기 시간에 꼭 지키고 싶은 것 하나를 골라요." 고른 약속을 활동지 카드에 쓰게 하고(못 쓰는 학생은 선생님이 받아 적어 준다), 화면에서 약속 카드를 꾸민다. "왜 그 약속을 골랐어요?" 하고 까닭을 짝에게 말하게 한다. 약속을 여러 개 고르려는 학생에게 "하나를 꼭 지키는 것이 더 멋져요"라고 말해 준다.',
            task: '지킬 듣기 약속 하나를 골라 활동지에 쓰고, 화면에서 약속 카드를 꾸며 짝에게 까닭을 말해요.',
            levels: COL_LV,
            items: [
              { prompt: '활동지 약속 카드에 내가 고른 듣기 약속 하나를 썼으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '긴 네모 카드 한 장 위에 하트 두 개를 붙여 약속 카드 바탕을 만들어 보세요.', toolOptions: { shapes: ['rect', 'heart', 'star', 'circle'], colors: ['하양', '빨강', '분홍', '노랑'] },
                target: { has: [{ shape: 'rect', n: 1 }, { shape: 'heart', n: 2 }] }, difficulty: 0.1,
                levels: { easy: { toolOptions: { shapes: ['rect', 'heart'], colors: ['하양', '빨강'] } }, challenge: { prompt: '긴 네모 한 장, 하트 두 개, 네 귀퉁이를 꾸밀 작은 별 네 개로 약속 카드를 만들어 보세요.', target: { has: [{ shape: 'rect', n: 1 }, { shape: 'heart', n: 2 }, { shape: 'star', size: 's', n: 4 }] } } } },
              { prompt: '약속 카드를 마저 꾸미고 점검 목록에 표시해 보세요.', toolOptions: { shapes: ['rect', 'heart', 'star', 'circle'], colors: ['하양', '빨강', '분홍', '노랑'] },
                target: { selfCheck: ['듣기 약속을 하나 골랐어요', '고른 까닭을 짝에게 말했어요'], minPieces: 3 }, difficulty: 0.05,
                levels: { easy: { toolOptions: { shapes: ['rect', 'heart'] } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"내 약속 카드를 우리 반 약속 판에 붙이면서 한 문장으로 말해 볼까요? \'나는 ___ 약속을 지킬래요.\'" 다섯 명 정도만 말하고 나머지는 모둠 안에서 말한다. 이 약속을 지켰는지는 4차시 모둠 이야기 뒤에 돌아본다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '우리 반 약속', slots: ['듣기 약속', '다른 약속'], cards: ['친구 말이 끝나면 박수 쳐요', '우유갑을 접어 버려요'] }, prompt: '두 약속 카드를 알맞은 가지에 놓아 보세요.', target: { sort: { '듣기 약속': ['친구 말이 끝나면 박수 쳐요'], '다른 약속': ['우유갑을 접어 버려요'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '듣기 약속을 지키는 차례에서 가장 나중에 하는 일은 무엇일까요?', options: ['친구를 봐요', '끝까지 들어요', '내 생각을 말해요'], answer: 2, difficulty: 0.15, explain: '친구 말을 끝까지 다 들은 뒤에 내 생각을 말해요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '나의 듣기 약속 카드',
      items: [
        { type: 'blank', prompt: '내가 지킬 듣기 약속을 쓰세요.', text: '나는 이야기를 들을 때 ____________________ 약속을 지킬래요.' },
        { type: 'short', prompt: '그 약속을 고른 까닭을 쓰세요.' },
        { type: 'choice', prompt: '듣기 약속이 아닌 것에 ○ 하세요.', options: ['친구를 봐요', '끝까지 들어요', '복도에서 걸어요'], answer: '복도에서 걸어요' },
        { type: 'draw', prompt: '약속을 지키며 친구 이야기를 듣는 내 모습을 그려 보세요.' },
      ],
      easy: {
        note: '약속은 하나만 골라요.',
        items: [
          { type: 'check', prompt: '지킬 약속 하나에 ✓ 하세요.', options: ['친구를 봐요', '끝까지 기다려요', '끄덕여요'] },
          { type: 'choice', prompt: '듣기 약속에 ○ 하세요.', options: ['끝까지 들어요', '줄을 서요'], answer: '끝까지 들어요' },
          { type: 'draw', prompt: '약속 카드를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드에 초록 테두리가 생겨요. 고르기 카드가 세 장이고, 약속 카드는 네모와 하트만 써요.',
      base: '모두 놓은 뒤 확인을 눌러요. 약속을 고른 까닭을 짝에게 말해요.',
      challenge: '약속 카드에 별 네 개까지 더해 조건 세 가지를 맞추고, 까닭을 활동지에 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 듣기 약속과 생활 약속을 섞는다 → "이야기를 들을 때 쓰는 약속인가요?"를 기준 질문으로 되풀이한다. ② "잘 들어요"처럼 넓은 약속만 고른다 → 눈·입·손으로 나누어 무엇을 하는지 말하게 한다. ③ 약속을 많이 고른다 → 하나를 고르고 나머지는 다음에 더한다. 약속 판은 4차시 돌아보기에 다시 쓴다.',
  }));

  lessons.push(L(4, {
    title: '모둠 이야기 나눈 뒤 내 듣기 돌아보기',
    objective: '모둠에서 이야기를 나눈 뒤 친구에게서 새로 알게 된 생각을 말하고, 내가 고른 듣기 약속을 얼마나 지켰는지 스스로 평가할 수 있다.',
    illustration: ART('a small group of paper children around a table with a paper talking stick, one child looking back at a promise card on the wall with a thoughtful face', '내 듣기를 돌아봐요', [
      { motif: 'tree', x: 380, y: 214 }, { motif: 'flower', x: 110, y: 228, color: 'buttercup' }, { motif: 'cloud', x: 300, y: 70, s: 0.7 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"지난 시간에 붙인 내 듣기 약속 카드를 찾아볼까요?" 약속 판을 함께 본다. "오늘 모둠 이야기에서 그 약속을 지켜 보고, 끝나면 스스로 돌아봐요." 오늘 이야기 주제 \'내가 가장 좋아하는 놀이\'를 칠판에 쓴다. 시연 단추로 이야기 나눔 차례 카드가 놓이는 것을 보여 준다.',
        student: '내 듣기 약속이 무엇이었는지 짝에게 말해 봐요.',
        demo: { tool: 'story', options: { slots: ['처음', '가운데', '끝'], cards: ['이야기 막대를 받아요', '내 놀이를 말해요', '막대를 다음 친구에게 줘요'], shuffle: false }, sequence: [{ order: ['이야기 막대를 받아요', '내 놀이를 말해요', '막대를 다음 친구에게 줘요'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 이야기 막대로 모둠 이야기 나누기', minutes: 13, tool: 'story',
            teacher: '"이야기 막대를 가진 친구만 말해요. 나머지는 그 친구를 봐요." 모둠마다 연필 한 자루를 막대로 쓰게 하고, 한 사람당 1분씩 \'가장 좋아하는 놀이와 그 까닭\'을 말하게 한다. 다 돈 뒤에 "누구 놀이가 처음 들어 보는 놀이였어요?" 하고 묻는다. 막대 없이 말하는 학생이 있으면 막대를 가리키기만 한다.',
            task: '이야기 막대를 돌리며 모둠 이야기를 나누고, 이야기 나눔 차례와 새로 안 생각을 카드로 정리해요.',
            levels: CARD_LV,
            items: [
              { prompt: '모둠 친구 모두가 이야기 막대를 들고 좋아하는 놀이를 말했으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '이야기 막대로 이야기를 나누는 차례대로 카드를 놓아 보세요.', toolOptions: { slots: ['1', '2', '3', '4'], cards: ['막대를 받은 친구가 말해요', '모두 그 친구를 보며 들어요', '말이 끝나면 박수를 쳐요', '막대를 다음 친구에게 줘요'] },
                target: { order: ['막대를 받은 친구가 말해요', '모두 그 친구를 보며 들어요', '말이 끝나면 박수를 쳐요', '막대를 다음 친구에게 줘요'] }, difficulty: 0.2,
                levels: { easy: { toolOptions: { slots: ['1', '2', '3'], cards: ['막대를 받은 친구가 말해요', '말이 끝나면 박수를 쳐요', '막대를 다음 친구에게 줘요'] }, target: { order: ['막대를 받은 친구가 말해요', '말이 끝나면 박수를 쳐요', '막대를 다음 친구에게 줘요'] }, prompt: '이야기 막대로 나누는 차례대로 세 카드를 놓아 보세요.' } } },
              { prompt: '서아가 "숨바꼭질은 숨을 때 두근거려서 좋아"라고 했어요. 빈칸에 알맞은 카드를 넣어 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'f1', who: '나', label: '서아 말을 듣고 숨바꼭질은 ___ 좋다는 것을 새로 알았어.' }], cards: ['두근거려서', '빨리 끝나서', '혼자 해서'] },
                target: { fill: { f1: '두근거려서' } }, difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 내 듣기 약속 돌아보기', minutes: 14, tool: 'emotion',
            teacher: '"민지와 하준이의 모습을 보고 듣기 약속을 지킨 때와 못 지킨 때를 가려 봐요. 그다음에 내 모습도 떠올려 봐요." 못 지킨 모습을 찾으면 "그럼 다음에는 어떻게 하면 될까?"를 꼭 이어 묻는다. 친구가 약속을 못 지켰다고 일러바치는 학생에게는 "오늘은 이야기 속 친구와 내 모습만 돌아봐요"라고 말해 준다.',
            task: '이야기 속 친구가 듣기 약속을 지킨 모습을 고르고, 다음에 할 일과 마음을 골라요.',
            levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
            items: [
              { prompt: '민지의 모둠 이야기 모습이에요. 듣기 약속을 지킨 모습만 골라 보세요.', toolOptions: { mode: 'pick', basket: '약속을 지켰어요', cards: ['서아가 말할 때 서아를 봤어요', '준호 말 중간에 "나도!" 했어요', '박수를 치고 막대를 넘겼어요'] },
                target: { pick: ['서아가 말할 때 서아를 봤어요', '박수를 치고 막대를 넘겼어요'] }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['서아가 말할 때 서아를 봤어요', '준호 말 중간에 "나도!" 했어요', '박수를 치고 막대를 넘겼어요', '하준이 놀이를 듣고 웃음을 터뜨렸어요'] } } } },
              { prompt: '하준이는 오늘 친구 말에 두 번 끼어들었어요. 하준이가 다음에 할 일로 알맞은 것은?', toolOptions: { mode: 'branch', who: '하준', situation: '하준이는 오늘 모둠 이야기에서 친구 말에 두 번 끼어들었어요.', choices: [
                { id: 'stick', text: '막대가 올 때까지 손을 무릎에 두어요', result: '친구 말을 끝까지 듣고 자기 차례에 말했어요.', mood: '뿌듯함' },
                { id: 'stop', text: '다음부터 이야기 시간에 말을 안 해요', result: '하준이 생각을 아무도 듣지 못했어요.', mood: '외로움', why: '말을 아예 안 하면 하준이 생각은 어떻게 될까요?' },
                { id: 'same', text: '끼어든 것은 괜찮으니 그대로 해요', result: '친구들이 또 하던 말을 잊었어요.', mood: '속상함', why: '말이 끊긴 친구의 마음을 떠올려 봐요.' }] }, target: { choice: 'stick' }, difficulty: 0.15 },
              { prompt: '친구 말을 듣고 생각이 바뀐 민지는 어떤 마음일까요? 알맞은 마음 카드를 놓아 보세요.', toolOptions: { cards: ['뿌듯함', '화남', '고마움'], slots: [{ id: 's1', label: '친구 덕분에 처음 듣는 놀이를 알게 되었어요' }, { id: 's2', label: '친구 말을 끝까지 들은 내가 대견해요' }] },
                target: { match: { s1: '고마움', s2: '뿌듯함' } }, difficulty: 0.15 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"친구 이야기를 들은 뒤에 내 생각이 없어졌나요, 더 많아졌나요?" 손을 들어 보게 하고, 1차시 도입의 질문을 다시 떠올리게 한다. 출구 3번 눈금은 선생님께 잘 보이려고 고르는 것이 아니라 다음에 더 잘하려고 고르는 것이라고 말해 준다. 이 시간으로 이야기 나눔 약속 공부를 마치고, 다음 시간부터는 교실에서 모양과 색을 찾아 모아 이야기 나눈다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { mode: 'fill', slots: [{ id: 'e1', who: '나', label: '준호 말을 듣고 공기놀이는 ___ 할 수 있다는 것을 알았어.' }], cards: ['다섯 알로', '혼자서만', '공으로'] }, prompt: '준호가 "공기놀이는 작은 돌 다섯 알이면 돼"라고 했어요. 빈칸에 알맞은 카드를 넣어 보세요.', target: { fill: { e1: '다섯 알로' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '내 듣기 약속을 다 못 지킨 날에는 어떻게 하면 좋을까요?', options: ['약속을 버려요', '다음 이야기 시간에 다시 해 봐요', '친구 탓을 해요'], answer: 1, difficulty: 0.1, explain: '못 지킨 것을 알아챈 것이 첫걸음이에요. 다음에 다시 해 보면 돼요.' },
          { type: 'tool', tool: 'emotion', options: { mode: 'scale', situation: '오늘 모둠에서 친구들이 좋아하는 놀이를 말할 때', feeling: '뿌듯함', ask: '내 듣기 약속을 얼마나 지켰나요?', scaleLabels: ['조금', '', '', '', '아주 잘'] }, prompt: '오늘 내 듣기 약속을 얼마나 지켰는지 솔직하게 골라 보세요. 정답은 없어요.', target: { level: 'any' }, difficulty: 0.05 },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '나의 듣기 돌아보기',
      items: [
        { type: 'blank', prompt: '모둠 친구에게서 새로 안 놀이를 쓰세요.', text: '___의 이야기를 듣고 ________ 놀이를 새로 알았어요.' },
        { type: 'check', prompt: '오늘 내가 한 일에 ✓ 하세요.', options: ['막대를 가진 친구를 보았어요', '끼어들지 않았어요', '박수를 쳤어요', '내 차례에 말했어요'] },
        { type: 'choice', prompt: '이야기 막대를 가진 사람은 누구일까요?', options: ['지금 말하는 사람', '듣는 사람', '선생님만'], answer: '지금 말하는 사람' },
        { type: 'short', prompt: '다음 이야기 시간에 더 잘하고 싶은 것을 쓰세요.' },
      ],
      easy: {
        note: '막대를 가진 친구만 말해요.',
        items: [
          { type: 'choice', prompt: '지금 말하는 사람은 누구일까요?', options: ['막대를 가진 친구', '막대가 없는 친구'], answer: '막대를 가진 친구' },
          { type: 'short', prompt: '새로 안 놀이 이름을 쓰세요.' },
          { type: 'draw', prompt: '모둠 이야기 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '차례 카드가 세 장이고 초록 테두리가 생겨요. 눈금은 세 칸이에요.',
      base: '차례 카드 네 장을 놓고 확인을 눌러요. 눈금 다섯 칸에서 골라요.',
      challenge: '하준이가 다음에 할 일을 고른 뒤, 내가 다음에 더할 약속도 활동지에 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 자기 평가를 늘 가장 높게 고른다 → 정답이 없고 다음을 위한 것이라는 것을 다시 말하고, 선생님이 먼저 "선생님은 오늘 세 칸"처럼 솔직한 예를 보인다. ② 친구의 잘못을 일러바친다 → 오늘은 내 모습만 돌아본다. ③ 막대가 없으면 말하지 못한다 → 막대는 연습 도구이고 나중에는 \'눈 맞추고 기다리기\'로 바꾼다고 알려 준다.',
  }));

  // ───────────────────────── 5~8차시: 찾은 모양과 색 늘어놓고 이야기하기(탐색 경험 나누고 호기심 잇기) ─────────────────────────

  lessons.push(L(5, {
    title: '교실에서 찾은 모양 늘어놓고 이야기하기',
    objective: '교실에서 찾은 물건을 동그라미·네모·세모 모양끼리 늘어놓고, 친구가 찾은 것과 내가 찾은 것을 견주어 말할 수 있다.',
    illustration: ART('a paper classroom where children point at a round wall clock, a square window and a triangle instrument, paper shape cards laid out on the floor', '찾은 모양을 늘어놓아요', [
      { motif: 'house', x: 110, y: 214, color: 'peach' }, { motif: 'star', x: 330, y: 90, s: 0.6 }, { motif: 'tree', x: 400, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 7,
        teacher: '"자리에 앉은 채로 교실을 둘러보고, 동그라미 모양을 하나 찾으면 손가락으로 가리켜 보세요." 서너 명이 가리킨 것을 말하게 한다(시계, 단추, 컵 아래). "같은 교실인데 친구마다 찾은 것이 다르지요?" 시연 단추로 \'벽시계\' 카드가 동그라미 가지로 가는 것을 보여 준다. 모양은 그림책에만 있는 것이 아니라 우리 둘레 어디에나 있다고 말해 준다.',
        student: '교실에서 네모 모양을 하나 찾아 짝에게 가리켜 봐요.',
        demo: { tool: 'mindmap', options: { topic: '교실에서 찾은 모양', slots: ['동그라미 모양', '네모 모양'], cards: ['벽시계', '칠판'], shuffle: false }, sequence: [{ sort: { '동그라미 모양': ['벽시계'], '네모 모양': ['칠판'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 찾은 것을 모양끼리 늘어놓기', minutes: 12, tool: 'mindmap',
            teacher: '"이 물건을 앞에서 보면 어떤 모양이에요? 손가락으로 공중에 그려 볼까요?" 카드마다 손가락으로 모양을 그려 보고 놓게 한다. 지우개처럼 모서리가 둥근 것을 헷갈리면 "가장 비슷한 모양"을 고르면 된다고 말해 준다. 소리나 냄새처럼 눈에 보이지 않는 것은 모양으로 나눌 수 없다는 것을 함정 카드로 짚는다.',
            task: '교실에서 찾은 물건 카드를 모양이 같은 것끼리 늘어놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '교실에서 찾은 물건을 동그라미 모양과 네모 모양으로 나누어 보세요.', toolOptions: { topic: '교실에서 찾은 모양', slots: ['동그라미 모양', '네모 모양'], cards: ['벽시계', '창문', '옷 단추', '게시판'] },
                target: { sort: { '동그라미 모양': ['벽시계', '옷 단추'], '네모 모양': ['창문', '게시판'] } }, difficulty: 0.05 },
              { prompt: '세 가지 모양 가지에 찾은 물건을 나누어 보세요.', toolOptions: { topic: '모양 모으기', slots: ['동그라미', '네모', '세모'], cards: ['동전', '공책', '삼각김밥', '트라이앵글'] },
                target: { sort: { '동그라미': ['동전'], '네모': ['공책'], '세모': ['삼각김밥', '트라이앵글'] } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['동전', '공책', '삼각김밥', '트라이앵글', '종소리'] } } } },
              { prompt: '준호가 운동장 창고에서 찾은 것이에요. 동그라미 모양만 골라 보세요.', toolOptions: { mode: 'pick', basket: '동그라미 모양', cards: ['훌라후프', '자전거 바퀴', '네모난 매트', '세모 깃발'] },
                target: { pick: ['훌라후프', '자전거 바퀴'] }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 찾은 물건을 조각으로 꾸미기', minutes: 14, tool: 'collage',
            teacher: '"교실을 한 바퀴 걸으며 찾은 모양 두 가지를 활동지에 그려요. 3분이에요." 걸을 때는 친구와 부딪히지 않게 천천히 걷게 한다. 돌아와서 화면으로 찾은 물건을 조각으로 꾸민다. "시계 바늘은 어떤 모양으로 하면 좋을까요?" 하고 물어 긴 네모를 떠올리게 한다. 다 꾸민 학생은 짝과 화면을 바꾸어 보고 "나는 ○○를 찾았는데 너는 △△를 찾았구나"라고 말한다.',
            task: '교실을 걸으며 찾은 모양을 활동지에 그리고, 화면에서 그 물건을 색종이 조각으로 꾸며요.',
            levels: COL_LV,
            items: [
              { prompt: '교실을 걸으며 찾은 모양 두 가지를 활동지에 그렸으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '하양 큰 동그라미 하나와 검정 긴 네모 두 개로 벽시계를 꾸며 보세요.', toolOptions: { shapes: ['circle', 'rect', 'square', 'triangle'], colors: ['하양', '검정', '빨강', '파랑'] },
                target: { has: [{ shape: 'circle', color: '하양', size: 'l', n: 1 }, { shape: 'rect', color: '검정', n: 2 }] }, difficulty: 0.15,
                levels: { easy: { toolOptions: { shapes: ['circle', 'rect'], colors: ['하양', '검정'] } }, challenge: { prompt: '하양 큰 동그라미, 검정 긴 네모 바늘 두 개에 빨강 작은 동그라미 가운데 점까지 더해 시계를 꾸며요.', target: { has: [{ shape: 'circle', color: '하양', size: 'l', n: 1 }, { shape: 'rect', color: '검정', n: 2 }, { shape: 'circle', color: '빨강', size: 's', n: 1 }] } } } },
              { prompt: '파랑 네모 네 개를 붙여 교실 창문을 꾸며 보세요.', toolOptions: { shapes: ['circle', 'rect', 'square', 'triangle'], colors: ['하양', '검정', '빨강', '파랑'] },
                target: { has: [{ shape: 'square', color: '파랑', n: 4 }] }, difficulty: 0.1,
                levels: { easy: { toolOptions: { shapes: ['square', 'circle'], colors: ['파랑', '하양'] } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"친구가 찾은 것 가운데 \'아, 저것도 동그라미구나\' 하고 새로 본 것이 있나요?" 두세 명이 말하게 한다. "오늘 찾은 교실을 다음 시간에 다시 보면 찾을 것이 없을까요?" 하고 물어 생각을 듣고, 다음 시간에는 복도에서 색을 찾아 모은다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '모양 모으기', slots: ['동그라미', '네모'], cards: ['접시 바닥', '책상 윗면'] }, prompt: '두 카드를 알맞은 모양 가지에 놓아 보세요.', target: { sort: { '동그라미': ['접시 바닥'], '네모': ['책상 윗면'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '모양은 어디에서 찾을 수 있을까요?', options: ['그림책에서만', '교실과 둘레 어디에서나'], answer: 1, difficulty: 0.1, explain: '시계, 창문, 단추처럼 우리 둘레의 물건에도 모양이 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '교실에서 찾은 모양',
      items: [
        { type: 'table', prompt: '교실에서 찾은 물건을 모양에 맞게 쓰세요.', columns: ['동그라미', '네모', '세모'], rows: 2 },
        { type: 'draw', prompt: '교실을 걸으며 찾은 모양 두 가지를 그리세요.' },
        { type: 'choice', prompt: '네모 모양인 것에 ○ 하세요.', options: ['창문', '동전', '단추'], answer: '창문' },
        { type: 'short', prompt: '짝이 찾은 것 가운데 내가 못 찾은 것을 쓰세요.' },
      ],
      easy: {
        note: '손가락으로 공중에 모양을 그려 보고 골라요.',
        items: [
          { type: 'choice', prompt: '동그라미 모양에 ○ 하세요.', options: ['시계', '칠판'], answer: '시계' },
          { type: 'draw', prompt: '교실에서 찾은 동그라미를 그리세요.' },
          { type: 'draw', prompt: '교실에서 찾은 네모를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 가지에 초록 테두리가 생겨요. 조각 고르개에는 필요한 모양과 색만 있어요.',
      base: '모두 놓은 뒤 확인을 눌러요. 고르개에서 알맞은 모양과 색을 찾아 꾸며요.',
      challenge: '눈에 보이지 않는 함정 카드가 섞이고, 시계에 가운데 점까지 더해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 모서리가 둥근 네모(지우개)를 동그라미라고 한다 → 앞에서 본 테두리를 손가락으로 따라 그려 보게 한다. ② 모양을 그림책 속 그림에서만 찾는다 → 손에 닿는 물건부터 가리키게 한다. ③ 친구가 찾은 것을 따라 말한다 → "친구가 찾지 않은 것을 하나 더"라고 도전을 준다. 이 차시에서 찾은 모양은 41차시에서 더 넓은 곳(복도·급식실·운동장)으로 이어진다.',
  }));

  lessons.push(L(6, {
    title: '복도에서 찾은 색 모아 같은 색끼리 놓기',
    objective: '복도에서 찾은 물건을 같은 색끼리 모아 놓고, 더 찾아보고 싶은 곳 하나를 골라 짝에게 말할 수 있다.',
    illustration: ART('a paper school hallway with a red fire extinguisher, a green exit sign and a yellow safety line, children holding paper color cards', '복도의 색을 모아요', [
      { motif: 'flower', x: 110, y: 228, color: 'rose' }, { motif: 'leaf', x: 380, y: 222, color: 'mint' }, { motif: 'star', x: 250, y: 84, s: 0.6 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 7,
        teacher: '"지난 시간에는 교실에서 모양을 찾았어요. 오늘은 복도에서 색을 찾아요." 빨강·초록·노랑 색종이를 한 장씩 들어 보인다. "복도에서 빨강을 본 적이 있나요?" 두세 명의 대답을 듣고, 시연 단추로 \'소화기\' 카드가 빨강 가지로 가는 것을 보여 준다. 복도에서는 걸어 다니고 다른 반 수업을 방해하지 않게 작은 목소리로 말한다는 약속을 먼저 정한다.',
        student: '복도에서 본 색 가운데 기억나는 것을 하나 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '복도에서 찾은 색', slots: ['빨강', '초록'], cards: ['소화기', '화분 잎'], shuffle: false }, sequence: [{ sort: { '빨강': ['소화기'], '초록': ['화분 잎'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 복도 색 찾기 산책', minutes: 13, tool: 'collage',
            teacher: '복도로 나가 5분 동안 모둠별로 걸으며 색을 찾는다. "빨강을 찾으면 빨강 색종이를 그 옆에 대 보고, 같은 색인지 견주어 보세요." 돌아와서 찾은 것을 조각으로 모은다. 같은 빨강이어도 소화기 빨강과 우체통 빨강이 조금 다를 수 있다는 것을 말해 준다. 찾은 것이 적다고 아쉬워하는 학생에게 "다음에 다시 가면 또 보일 거예요"라고 말해 준다.',
            task: '복도를 걸으며 색종이를 대 보고 같은 색을 찾은 뒤, 찾은 색을 조각으로 모음판에 모아요.',
            levels: COL_LV,
            items: [
              { prompt: '모둠과 복도를 걸으며 색종이와 같은 색을 세 가지 넘게 찾았으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '복도에서 찾은 색 모음판이에요. 빨강 동그라미 두 개와 초록 나뭇잎 세 장을 붙여 보세요.', toolOptions: { shapes: ['circle', 'leaf', 'star', 'square'], colors: ['빨강', '초록', '노랑', '파랑', '보라'] },
                target: { has: [{ shape: 'circle', color: '빨강', n: 2 }, { shape: 'leaf', color: '초록', n: 3 }] }, difficulty: 0.15,
                levels: { easy: { toolOptions: { shapes: ['circle', 'leaf'], colors: ['빨강', '초록'] } }, challenge: { prompt: '빨강 동그라미 두 개, 초록 나뭇잎 세 장, 노랑 네모 한 개로 복도 색 모음판을 만들어 보세요.', target: { has: [{ shape: 'circle', color: '빨강', n: 2 }, { shape: 'leaf', color: '초록', n: 3 }, { shape: 'square', color: '노랑', n: 1 }] } } } },
              { prompt: '노랑 별 세 개와 파랑 네모 하나로 내가 찾은 색을 더 모아 보세요.', toolOptions: { shapes: ['circle', 'leaf', 'star', 'square'], colors: ['빨강', '초록', '노랑', '파랑', '보라'] },
                target: { has: [{ shape: 'star', color: '노랑', n: 3 }, { shape: 'square', color: '파랑', n: 1 }] }, difficulty: 0.15,
                levels: { easy: { toolOptions: { shapes: ['star', 'square'], colors: ['노랑', '파랑'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 같은 색끼리 늘어놓고 더 찾을 곳 고르기', minutes: 13, tool: 'mindmap',
            teacher: '"모둠에서 찾은 것을 같은 색끼리 놓아 볼까요?" 화면 카드로 정리한 뒤, 모둠마다 \'더 찾아보고 싶은 곳\'을 하나 정하게 한다. "도서실은 어떨까요? 급식실은요?" 하고 장소를 건넨다. 색이 두 가지 섞인 물건은 가장 넓게 칠해진 색으로 놓는다고 기준을 미리 말한다.',
            task: '찾은 물건을 같은 색끼리 놓고, 더 찾아보고 싶은 곳을 하나 골라 짝에게 말해요.',
            levels: CARD_LV,
            items: [
              { prompt: '복도에서 찾은 물건을 같은 색 가지로 나누어 보세요.', toolOptions: { topic: '복도에서 찾은 색', slots: ['빨강', '초록', '노랑'], cards: ['소화기', '비상구 표시등', '화분 잎', '노란 안전선'] },
                target: { sort: { '빨강': ['소화기'], '초록': ['비상구 표시등', '화분 잎'], '노랑': ['노란 안전선'] } }, difficulty: 0.15 },
              { prompt: '빨강을 찾을 수 있는 것만 바구니에 담아 보세요.', toolOptions: { mode: 'pick', basket: '빨강이 있어요', cards: ['신호등의 멈춤 불', '잘 익은 딸기', '맑은 하늘', '풀밭'] },
                target: { pick: ['신호등의 멈춤 불', '잘 익은 딸기'] }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['신호등의 멈춤 불', '잘 익은 딸기', '맑은 하늘', '풀밭', '흰 우유'] } } } },
              { prompt: '모둠에서 더 찾아보고 싶은 곳을 하나 정해 짝에게 말했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"우리가 찾은 색 가운데 가장 많이 나온 색은 무엇일까요?" 모둠 모음판을 칠판에 붙여 견주어 본다. 모둠마다 정한 \'더 찾아보고 싶은 곳\'을 한 줄씩 칠판에 적어 두고, 다음 시간에 같은 곳을 다시 볼 때 무엇이 달라 보일지 생각해 오게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '색 모으기', slots: ['초록', '노랑'], cards: ['개구리', '병아리'] }, prompt: '두 카드를 같은 색 가지에 놓아 보세요.', target: { sort: { '초록': ['개구리'], '노랑': ['병아리'] } }, difficulty: 0.05 },
          { type: 'choice', prompt: '복도에서 색을 찾을 때 지킬 약속은 무엇일까요?', options: ['뛰어다녀요', '천천히 걷고 작게 말해요', '크게 소리쳐요'], answer: 1, difficulty: 0.05, explain: '복도는 다른 반도 쓰는 곳이라 천천히 걷고 작게 말해요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '복도에서 찾은 색',
      items: [
        { type: 'table', prompt: '찾은 물건을 색에 맞게 쓰세요.', columns: ['빨강', '초록', '노랑'], rows: 2 },
        { type: 'choice', prompt: '초록인 것에 ○ 하세요.', options: ['화분 잎', '소화기', '노란 우산'], answer: '화분 잎' },
        { type: 'blank', prompt: '더 찾아보고 싶은 곳을 쓰세요.', text: '나는 ________에서 색을 더 찾아보고 싶어요.' },
        { type: 'draw', prompt: '복도에서 찾은 것 하나를 그 색으로 그려 보세요.' },
      ],
      easy: {
        note: '색종이를 물건 옆에 대 보고 견주어요.',
        items: [
          { type: 'choice', prompt: '빨강인 것에 ○ 하세요.', options: ['소화기', '풀밭'], answer: '소화기' },
          { type: 'short', prompt: '복도에서 찾은 색 하나를 쓰세요.' },
          { type: 'draw', prompt: '찾은 물건을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '모음판 고르개에 필요한 모양과 색만 있어요. 카드에는 초록 테두리가 생겨요.',
      base: '다섯 가지 색 가운데 알맞은 색을 골라 모음판을 만들어요.',
      challenge: '모음판에 조건이 하나 더 붙고, 고르기 카드에 함정 카드가 하나 더 있어요.',
    },
    safety: ['복도에서는 걷고, 모둠 친구와 떨어지지 않아요.', '소화기·전기 콘센트는 만지지 않고 눈으로만 봐요.'],
    teacherNotes: '자주 보이는 어려움: ① 비슷한 색(주황과 빨강)을 헷갈린다 → 색종이를 물건에 대어 보고 더 비슷한 쪽을 고르게 한다. ② 여러 색이 섞인 물건을 어디에 놓을지 모른다 → 가장 넓게 칠해진 색을 기준으로 한다. ③ 소화기를 만지려 한다 → 눈으로만 보는 약속을 산책 전에 정한다. 모둠이 정한 \'더 찾아볼 곳\'은 7차시에 다시 쓴다.',
  }));

  lessons.push(L(7, {
    title: '같은 곳을 다시 보고 새로 보이는 것 찾기',
    objective: '같은 곳도 날씨와 때가 바뀌면 새로운 모습이 보인다는 것을 알고, 다시 본 곳에서 처음에 못 본 것을 하나 찾아 말할 수 있다.',
    illustration: ART('the same paper schoolyard shown twice side by side, one sunny with dry sand and one after rain with puddles reflecting clouds, a child looking through a window', '다시 보면 보여요', [
      { motif: 'cloud', x: 330, y: 70, s: 0.8 }, { motif: 'tree', x: 110, y: 212 }, { motif: 'wave', x: 380, y: 236, s: 0.6 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"지난 시간에 복도에서 색을 다 찾았으니, 이제 복도에는 찾을 것이 없을까요?" 손을 들어 \'있다\', \'없다\'를 정하게 한다. 맑은 날과 비 온 날 운동장 사진(또는 그림)을 나란히 보여 준다. "같은 운동장인데 무엇이 달라 보여요?" 시연 단추로 \'웅덩이에 구름이 비쳐요\' 카드가 비 온 뒤 가지로 가는 것을 보여 준다.',
        student: '창밖을 보고, 오늘 처음 눈에 들어온 것을 하나 찾아봐요.',
        demo: { tool: 'mindmap', options: { topic: '같은 운동장', slots: ['맑은 날', '비 온 뒤'], cards: ['모래가 보송보송해요', '웅덩이에 구름이 비쳐요'], shuffle: false }, sequence: [{ sort: { '맑은 날': ['모래가 보송보송해요'], '비 온 뒤': ['웅덩이에 구름이 비쳐요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 날씨와 때가 바뀌면 달라지는 모습', minutes: 13, tool: 'mindmap',
            teacher: '"비가 온 뒤에만 볼 수 있는 것은 무엇일까요? 가을이 되어야 볼 수 있는 것은요?" 카드마다 \'언제 볼 수 있는지\'를 먼저 말하고 놓게 한다. "한 번 본 곳은 다 봤어요"라는 학생에게 "봄에 본 나무와 가을에 본 나무는 똑같았나요?" 하고 되묻는다.',
            task: '같은 곳의 모습 카드를 날씨나 때에 따라 나누고, 다시 볼 때 새로 보이는 것을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '같은 운동장의 모습을 맑은 날과 비 온 뒤로 나누어 보세요.', toolOptions: { topic: '같은 운동장', slots: ['맑은 날', '비 온 뒤'], cards: ['미끄럼틀에 물방울이 맺혔어요', '나무 그늘이 또렷해요', '모래가 마른 노란색이에요', '웅덩이에 하늘이 비쳐요'] },
                target: { sort: { '맑은 날': ['나무 그늘이 또렷해요', '모래가 마른 노란색이에요'], '비 온 뒤': ['미끄럼틀에 물방울이 맺혔어요', '웅덩이에 하늘이 비쳐요'] } }, difficulty: 0.15 },
              { prompt: '봄에 본 학교 앞 나무를 가을에 다시 보면 새로 보이는 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '가을에 새로 보여요', cards: ['빨갛게 물든 잎', '바닥에 쌓인 낙엽', '하얀 벚꽃', '나뭇가지 위 눈'] },
                target: { pick: ['빨갛게 물든 잎', '바닥에 쌓인 낙엽'] }, difficulty: 0.2,
                predict: { q: '봄에 본 나무를 가을에 다시 보면 똑같을까요?', options: ['똑같아요', '달라 보여요'], answer: 1 },
                conclude: '같은 나무도 때가 바뀌면 새로운 색과 모양이 보여요.' },
              { prompt: '교실 앞 화단을 한 주 동안 보았어요. 본 차례대로 카드를 놓아 보세요.', toolOptions: { mode: 'order', topic: '한 주 동안 본 화단', slots: ['월요일', '수요일', '금요일'], cards: ['꽃봉오리가 꼭 닫혀 있어요', '꽃이 활짝 피었어요', '꽃잎이 바닥에 떨어졌어요'] },
                target: { order: ['꽃봉오리가 꼭 닫혀 있어요', '꽃이 활짝 피었어요', '꽃잎이 바닥에 떨어졌어요'] }, difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 창밖 다시 보고 새로 본 것 남기기', minutes: 14, tool: 'collage',
            teacher: '"창가로 와서 1분 동안 아무 말 없이 창밖을 봐요. 지난주에는 못 본 것을 하나 찾아요." 모둠별로 돌아가며 창가에 서게 한다. 오늘 날씨에 맞게 그림을 고르도록 말해 주고(비 온 날이면 웅덩이, 맑은 날이면 그림자), 화면 조각으로 남긴다. "새로 본 것이 없어요"라는 학생에게는 "하늘 색은 어때요? 구름 모양은요?" 하고 묻는다.',
            task: '창밖을 1분 동안 조용히 보고 새로 본 것을 찾은 뒤, 화면에 비 온 뒤 운동장을 조각으로 꾸며요.',
            levels: COL_LV,
            items: [
              { prompt: '창밖을 1분 동안 보고 지난번에 못 본 것을 하나 찾았으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '비 온 뒤 운동장이에요. 파랑 동그라미 웅덩이 두 개와 하양 동그라미 구름 하나를 붙여 보세요.', toolOptions: { shapes: ['circle', 'semi', 'leaf', 'rect'], colors: ['파랑', '하양', '갈색', '초록'] },
                target: { has: [{ shape: 'circle', color: '파랑', n: 2 }, { shape: 'circle', color: '하양', n: 1 }] }, difficulty: 0.15,
                levels: { easy: { toolOptions: { shapes: ['circle'], colors: ['파랑', '하양'] } }, challenge: { prompt: '비 온 뒤 운동장에 파랑 웅덩이 두 개, 하양 구름 하나, 웅덩이에 비친 작은 하양 구름 두 개를 꾸며요.', target: { has: [{ shape: 'circle', color: '파랑', n: 2 }, { shape: 'circle', color: '하양', size: 's', min: 2 }, { shape: 'circle', color: '하양', min: 3 }] } } } },
              { prompt: '가을 나무를 꾸며 보세요. 갈색 긴 네모 줄기 하나와 빨강 나뭇잎 세 장을 붙여요.', toolOptions: { shapes: ['circle', 'semi', 'leaf', 'rect'], colors: ['파랑', '하양', '갈색', '초록', '빨강'] },
                target: { has: [{ shape: 'rect', color: '갈색', n: 1 }, { shape: 'leaf', color: '빨강', n: 3 }] }, difficulty: 0.15,
                levels: { easy: { toolOptions: { shapes: ['rect', 'leaf'], colors: ['갈색', '빨강'] } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"도입에서 \'찾을 것이 없다\'고 생각한 친구, 지금은 어때요?" 두세 명의 생각을 듣는다. 6차시에 모둠이 정한 \'더 찾아볼 곳\'을 다시 보여 주고, 이번 주 안에 쉬는 시간에 한 번 가 보고 새로 본 것을 알려 달라고 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', basket: '눈 온 날 새로 보여요', cards: ['하얗게 덮인 미끄럼틀', '눈 위의 발자국', '활짝 핀 해바라기'] }, prompt: '늘 보던 놀이터에 눈이 왔어요. 눈 온 날에 새로 보이는 것만 골라 보세요.', target: { pick: ['하얗게 덮인 미끄럼틀', '눈 위의 발자국'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '한 번 본 곳을 다시 보면 어떨까요?', options: ['볼 것이 하나도 없어요', '새로운 것이 보일 수 있어요'], answer: 1, difficulty: 0.1, explain: '날씨와 때가 바뀌면 같은 곳에서도 새로운 모습이 보여요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '다시 보면 보여요',
      items: [
        { type: 'table', prompt: '같은 곳을 두 번 보고 쓰세요.', columns: ['처음 본 모습', '다시 본 모습'], rows: 2 },
        { type: 'choice', prompt: '비 온 뒤에 볼 수 있는 것에 ○ 하세요.', options: ['웅덩이', '마른 모래', '또렷한 그늘'], answer: '웅덩이' },
        { type: 'short', prompt: '오늘 창밖에서 새로 본 것을 쓰세요.' },
        { type: 'draw', prompt: '다시 보고 싶은 곳과 그때 보일 것 같은 모습을 그려 보세요.' },
      ],
      easy: {
        note: '하늘, 나무, 바닥을 차례로 봐요.',
        items: [
          { type: 'choice', prompt: '가을 나무에서 볼 수 있는 것에 ○ 하세요.', options: ['물든 잎', '하얀 벚꽃'], answer: '물든 잎' },
          { type: 'short', prompt: '창밖에서 새로 본 것을 쓰세요.' },
          { type: 'draw', prompt: '오늘 창밖 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드에 초록 테두리가 생기고, 조각 고르개에는 필요한 모양과 색만 있어요.',
      base: '모두 놓은 뒤 확인을 눌러요. 조각 모양과 색을 골라 꾸며요.',
      challenge: '웅덩이에 비친 작은 구름까지 더해 조건을 세 가지 맞춰요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 한 번 본 곳은 다시 볼 것이 없다고 여긴다 → 같은 곳의 다른 날 사진을 나란히 놓고 견주게 한다. ② 계절과 날씨의 모습을 섞는다(봄에 낙엽) → "그때 날씨는 어땠나요?"를 먼저 묻는다. ③ 창가에서 장난친다 → 1분 동안 말없이 보기 규칙을 모래시계와 함께 쓴다. 창밖 활동은 그날 날씨에 맞추어 비 오는 날 그림 대신 실제 모습을 고르게 해도 된다.',
  }));

  lessons.push(L(8, {
    title: '우리 반 모양과 색 전시회 열기',
    objective: '찾아 모은 모양과 색 작품을 전시하고, 친구 작품을 둘러본 뒤 더 찾아보고 싶은 곳을 골라 말할 수 있다.',
    illustration: ART('a little paper gallery on a classroom wall with collages of shapes and colors, name tags under each, children walking slowly and pointing', '우리 반 전시회', [
      { motif: 'house', x: 100, y: 214, color: 'lavender' }, { motif: 'flower', x: 380, y: 228, color: 'buttercup' }, { motif: 'star', x: 300, y: 84, s: 0.6 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"오늘은 우리 반이 작은 전시회를 열어요. 전시회에 가 본 적이 있나요? 그곳에서는 어떻게 걸어 다녔나요?" 두세 명의 경험을 듣는다. 시연 단추로 전시회 준비 차례가 놓이는 것을 보여 준다. "전시회에서는 작품을 만지지 않고, 작게 말하고, 천천히 걸어요."',
        student: '전시회에 걸고 싶은 내 작품을 하나 떠올려 봐요.',
        demo: { tool: 'story', options: { slots: ['처음', '가운데', '끝'], cards: ['작품을 만들어요', '이름표를 붙여요', '벽에 걸어요'], shuffle: false }, sequence: [{ order: ['작품을 만들어요', '이름표를 붙여요', '벽에 걸어요'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 전시할 작품 만들고 걸기', minutes: 12, tool: 'collage',
            teacher: '"지난 시간까지 찾은 모양과 색 가운데 가장 마음에 든 것으로 작품을 하나 만들어요." 5~7차시 활동지를 돌려주어 고르게 한다. 화면 작품과 같은 것을 색종이로도 오려 붙여 이름표와 함께 모둠 벽에 건다. "작품 이름을 지어 볼까요? \'복도의 빨강\'처럼요." 이름을 못 짓는 학생에게 "어디서 찾은 무엇인지"를 이름에 넣게 한다.',
            task: '지금까지 찾은 모양과 색으로 작품을 만들고, 색종이 작품에 이름표를 붙여 모둠 벽에 걸어요.',
            levels: COL_LV,
            items: [
              { prompt: '찾은 모양과 색으로 전시할 작품을 만들고 점검 목록에 표시해 보세요.', toolOptions: { shapes: ['circle', 'square', 'triangle', 'rect', 'star', 'leaf'], colors: ['빨강', '노랑', '초록', '파랑', '하양', '갈색'] },
                target: { selfCheck: ['내가 찾은 모양을 넣었어요', '내가 찾은 색을 넣었어요', '작품 이름을 지었어요'], minPieces: 4 }, difficulty: 0.1,
                levels: { easy: { toolOptions: { shapes: ['circle', 'square', 'leaf'], colors: ['빨강', '초록', '파랑'] } }, challenge: { prompt: '찾은 모양과 색으로 작품을 만들되 세 가지 모양을 꼭 넣고, 점검 목록에 표시해 보세요.', target: { selfCheck: ['내가 찾은 모양을 넣었어요', '내가 찾은 색을 넣었어요', '작품 이름을 지었어요'], minPieces: 6, has: [{ shape: 'circle', min: 1 }, { shape: 'square', min: 1 }, { shape: 'triangle', min: 1 }] } } } },
              { prompt: '색종이 작품에 이름표를 붙여 모둠 벽에 걸었으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '전시회 입구 표지판이에요. 노랑 큰 네모 하나 위에 빨강 별 두 개를 붙여 보세요.', toolOptions: { shapes: ['circle', 'square', 'triangle', 'rect', 'star', 'leaf'], colors: ['빨강', '노랑', '초록', '파랑', '하양', '갈색'] },
                target: { has: [{ shape: 'square', color: '노랑', size: 'l', n: 1 }, { shape: 'star', color: '빨강', n: 2 }] }, difficulty: 0.15,
                levels: { easy: { toolOptions: { shapes: ['square', 'star'], colors: ['노랑', '빨강'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 전시회 둘러보고 더 찾을 곳 말하기', minutes: 15, tool: 'story',
            teacher: '반을 두 무리로 나눈다. 7분 동안 한 무리는 자기 작품 옆에 서서 소개하고, 다른 무리는 둘러본 뒤 바꾼다(한 사람이 모두에게 발표하지 않고 동시에 여러 곳에서 이야기한다). "친구 작품을 보고 \'나는 못 본 곳이다\' 싶은 것이 있었나요?" 돌아와서 이야기 카드로 정리한다. 작품을 손으로 만지는 학생에게는 눈으로 보는 약속을 다시 말해 준다.',
            task: '두 무리로 나누어 작품을 소개하고 둘러본 뒤, 전시회 차례와 친구 작품 이야기를 카드로 정리해요.',
            levels: CARD_LV,
            items: [
              { prompt: '반을 두 무리로 나누어 작품을 소개하고 둘러보았으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '우리 반 전시회를 연 차례대로 카드를 놓아 보세요.', toolOptions: { slots: ['1', '2', '3', '4'], cards: ['찾은 모양과 색으로 작품을 만들어요', '작품에 이름표를 붙여요', '모둠 벽에 작품을 걸어요', '친구 작품을 둘러봐요'] },
                target: { order: ['찾은 모양과 색으로 작품을 만들어요', '작품에 이름표를 붙여요', '모둠 벽에 작품을 걸어요', '친구 작품을 둘러봐요'] }, difficulty: 0.15,
                levels: { easy: { prompt: '전시회 차례대로 세 카드를 놓아 보세요.', toolOptions: { slots: ['1', '2', '3'], cards: ['작품에 이름표를 붙여요', '모둠 벽에 작품을 걸어요', '친구 작품을 둘러봐요'] }, target: { order: ['작품에 이름표를 붙여요', '모둠 벽에 작품을 걸어요', '친구 작품을 둘러봐요'] } } } },
              { prompt: '준호가 서아 작품 \'급식실의 노랑\'을 보았어요. 빈칸에 알맞은 카드를 넣어 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'f1', who: '준호', label: '나는 ___에 가서 노랑을 더 찾아보고 싶어.' }], cards: ['급식실', '내 책상 서랍', '내 꿈속'] },
                target: { fill: { f1: '급식실' } }, difficulty: 0.15 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"오늘 전시회에서 가장 기억에 남는 친구 작품은 무엇이었나요? 왜 그랬나요?" 세 명 정도의 대답을 듣는다. 출구 질문 뒤에 전시는 한 주 동안 두고, 쉬는 시간에 다시 둘러보며 처음에 못 본 것을 찾아보자고 한다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { slots: ['처음', '가운데', '끝'], cards: ['친구 작품 앞에 서요', '작품을 눈으로 살펴요', '더 찾고 싶은 곳을 말해요'] }, prompt: '친구 작품을 감상하는 차례대로 카드를 놓아 보세요.', target: { order: ['친구 작품 앞에 서요', '작품을 눈으로 살펴요', '더 찾고 싶은 곳을 말해요'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '전시회에서 친구 작품을 볼 때 지킬 약속은 무엇일까요?', options: ['손으로 만져 봐요', '눈으로 보고 작게 말해요', '뛰어서 빨리 봐요'], answer: 1, difficulty: 0.05, explain: '작품이 망가지지 않게 눈으로 보고, 다른 친구를 위해 작게 말해요.' },
          { type: 'tool', tool: 'emotion', options: { mode: 'scale', situation: '오늘 친구 작품을 둘러볼 때', feeling: '신남', steps: 3, scaleLabels: ['조금', '', '아주 많이'], ask: '더 찾아보고 싶은 마음이 얼마나 드나요?' }, prompt: '친구 작품을 보고 더 찾아보고 싶어진 마음을 솔직하게 골라 보세요.', target: { level: 'any' }, difficulty: 0.05 },
        ],
      },
    ],
    worksheet: {
      title: '우리 반 전시회',
      items: [
        { type: 'blank', prompt: '내 작품 이름을 쓰세요.', text: '내 작품 이름: ____________________' },
        { type: 'short', prompt: '가장 기억에 남는 친구 작품과 그 까닭을 쓰세요.' },
        { type: 'choice', prompt: '전시회 약속에 ○ 하세요.', options: ['눈으로 봐요', '만져 봐요', '뛰어요'], answer: '눈으로 봐요' },
        { type: 'blank', prompt: '더 찾아보고 싶은 곳을 쓰세요.', text: '나는 ________에서 ________을(를) 더 찾아보고 싶어요.' },
      ],
      easy: {
        note: '어디서 찾은 무엇인지 이름에 넣어요.',
        items: [
          { type: 'short', prompt: '내 작품 이름을 쓰세요.' },
          { type: 'choice', prompt: '전시회 약속에 ○ 하세요.', options: ['눈으로 봐요', '만져요'], answer: '눈으로 봐요' },
          { type: 'draw', prompt: '기억에 남는 친구 작품을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '작품 고르개에 모양 세 가지와 색 세 가지만 있어요. 차례 카드는 세 장이에요.',
      base: '여섯 가지 모양과 색으로 작품을 만들고, 차례 카드 네 장을 놓아요.',
      challenge: '작품에 동그라미·네모·세모를 모두 넣어 여섯 조각 넘게 만들어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 작품 소개를 "예뻐요"로 끝낸다 → "어디서 찾은 어떤 모양·색인지"를 소개 틀로 준다. ② 감상하다 작품을 만진다 → 손을 뒤로 하고 보는 \'미술관 손\'을 약속한다. ③ 둘러보기가 길어져 시간이 모자란다 → 두 무리로 나누어 동시에 소개하므로 한 무리 3분 30초씩 신호를 준다. 이 차시로 1~8차시 \'찾아 모으기\'를 마무리한다.',
  }));

  // ───────────────────────── 9~12차시: 같은 것을 보고 다르게 생각하기(생활 맥락 이해) ─────────────────────────

  lessons.push(L(9, {
    title: '구름 그림 보고 떠오른 것 친구와 견주기',
    objective: '같은 구름 그림을 보고 친구와 떠오른 것이 같은지 다른지 가려 말하고, 다르게 생각할 수 있음을 짧은 말로 밝힐 수 있다.',
    illustration: ART('a big fluffy paper cloud in the sky with children below imagining different things in thought bubbles, a sheep, a cotton candy and a rabbit', '무엇이 떠오르나요?', [
      { motif: 'cloud', x: 240, y: 70, s: 1.3 }, { motif: 'tree', x: 90, y: 214 }, { motif: 'flower', x: 390, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 7,
        teacher: '몽글몽글한 구름 그림 한 장을 칠판에 붙인다. "이 구름을 보면 무엇이 떠오르나요? 아무에게도 말하지 말고 마음속으로만 정해요." 셋을 세고 한꺼번에 작게 말하게 한 뒤, 몇 명에게 묻는다(양, 솜사탕, 토끼, 베개). "같은 구름인데 떠오른 것이 다 달라요. 누가 틀렸을까요?" 시연 단추로 \'양·솜사탕\' 카드가 생각이 달라요 가지로 가는 것을 보여 준다.',
        student: '구름 그림을 보고 떠오른 것을 마음속으로 하나 정해요.',
        demo: { tool: 'mindmap', options: { topic: '구름을 보고', slots: ['생각이 같아요', '생각이 달라요'], cards: ['민지 양 · 준호 솜사탕', '서아 토끼 · 하준 토끼'], shuffle: false }, sequence: [{ sort: { '생각이 같아요': ['서아 토끼 · 하준 토끼'], '생각이 달라요': ['민지 양 · 준호 솜사탕'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 같은 생각, 다른 생각 가리기', minutes: 13, tool: 'emotion',
            teacher: '"민지는 양, 준호는 솜사탕이래요. 둘의 생각은 같아요, 달라요?" 카드마다 두 친구의 말을 소리 내어 읽고 가리게 한다. 다른 생각을 들은 친구에게 할 말을 고를 때 "내 생각과 다르면 친구가 틀린 걸까요?"를 꼭 묻는다. "솜사탕이 맞아요!"라고 우기는 학생에게 "양처럼 보이는 곳도 찾아볼까?" 하고 구름의 둥근 털 같은 곳을 짚어 준다.',
            task: '두 친구가 떠올린 것을 읽고 생각이 같은지 다른지 나눈 뒤, 다른 생각을 들었을 때 할 말을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '두 친구가 구름을 보고 떠올린 것이에요. 생각이 같은지 다른지 나누어 보세요.', toolOptions: { mode: 'sort', slots: ['생각이 같아요', '생각이 달라요'], cards: ['민지 양 · 준호 솜사탕', '서아 토끼 · 하준 토끼', '준호 베개 · 서아 강아지', '하준 고래 · 민지 고래'] },
                target: { sort: { '생각이 같아요': ['서아 토끼 · 하준 토끼', '하준 고래 · 민지 고래'], '생각이 달라요': ['민지 양 · 준호 솜사탕', '준호 베개 · 서아 강아지'] } }, difficulty: 0.1 },
              { prompt: '준호가 "그건 양이 아니라 솜사탕이야!"라고 했어요. 민지는 어떻게 말하면 좋을까요?', toolOptions: { mode: 'branch', who: '민지', situation: '같은 구름을 보고 민지는 양, 준호는 솜사탕이 떠올랐어요. 준호가 "양이 아니야!"라고 해요.', choices: [
                { id: 'fight', text: '"아니야, 양이 맞아!" 하고 소리쳐요', result: '둘 다 화가 나서 구름 이야기를 그만했어요.', mood: '화남', why: '둘 중 한 사람만 맞아야 할까요?' },
                { id: 'both', text: '"나는 양으로 보여. 너는 솜사탕으로 보이는구나" 해요', result: '준호가 "어, 여기 털이 양 같네!" 하고 웃었어요.', mood: '기쁨' },
                { id: 'give', text: '"그럼 내가 틀렸나 봐" 하고 내 생각을 버려요', result: '민지 생각은 아무도 듣지 못했어요.', mood: '속상함', why: '민지가 본 양도 구름 안에 있었어요. 버려야 할까요?' }] }, target: { choice: 'both' }, difficulty: 0.15,
                predict: { q: '양과 솜사탕 가운데 하나만 맞을까요?', options: ['하나만 맞아요', '둘 다 그렇게 보일 수 있어요'], answer: 1 },
                conclude: '같은 것을 보고도 사람마다 떠오르는 것이 달라요. 다르다고 틀린 것이 아니에요.' },
              { prompt: '두 가지 말을 들었을 때의 마음 카드를 놓아 보세요.', toolOptions: { cards: ['속상함', '기쁨', '무서움'], slots: [{ id: 's1', label: '내 생각에 "그건 틀렸어"라는 말을 들었어요' }, { id: 's2', label: '내 생각에 "그렇게도 보이네!"라는 말을 들었어요' }] },
                target: { match: { s1: '속상함', s2: '기쁨' } }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 구름 조각으로 내가 떠올린 것 만들기', minutes: 13, tool: 'collage',
            teacher: '"화면의 구름 조각에 조각을 더 붙여 내가 떠올린 것으로 바꾸어 봐요." 다 만든 뒤 짝과 화면을 바꾸어 보고, 짝이 만든 것을 맞혀 보게 한다. 맞히지 못해도 괜찮다고 말하고 "짝은 이 구름을 무엇으로 보았대요?" 하고 다시 묻게 한다. 둘째 문항은 모두 같은 양을 만들되 꾸미는 자리는 저마다 달라도 된다고 말해 준다.',
            task: '같은 구름 조각에 조각을 더해 내가 떠올린 것으로 바꾸고, 짝이 만든 것과 견주어 말해요.',
            levels: COL_LV,
            items: [
              { prompt: '하양 동그라미 세 개로 된 구름이에요. 조각을 두 개 넘게 더 붙여 내가 떠올린 것으로 바꾸고 점검해 보세요.', toolOptions: { shapes: ['circle', 'semi', 'triangle', 'rect', 'heart', 'star'], colors: ['하양', '검정', '분홍', '노랑', '파랑'] },
                state: { pieces: [{ shape: 'circle', color: '하양', size: 'l', x: 240, y: 200, r: 0 }, { shape: 'circle', color: '하양', size: 'l', x: 320, y: 200, r: 0 }, { shape: 'circle', color: '하양', size: 'm', x: 280, y: 160, r: 0 }] },
                target: { selfCheck: ['구름에 조각을 더 붙였어요', '짝에게 무엇으로 보이는지 말했어요'], minPieces: 5 }, difficulty: 0.1,
                levels: { easy: { toolOptions: { shapes: ['circle', 'semi', 'triangle'], colors: ['하양', '검정', '분홍'] } }, challenge: { prompt: '구름에 조각을 네 개 넘게 더 붙여 내가 떠올린 것으로 바꾸고, 짝이 떠올린 것과 다른 점까지 말한 뒤 점검해요.', target: { selfCheck: ['구름에 조각을 더 붙였어요', '짝에게 무엇으로 보이는지 말했어요', '짝과 다른 점을 말했어요'], minPieces: 7 } } } },
              { prompt: '구름을 양으로 바꾸어 보세요. 검정 작은 동그라미 눈 하나와 검정 긴 네모 다리 네 개를 붙여요.', toolOptions: { shapes: ['circle', 'semi', 'triangle', 'rect', 'heart', 'star'], colors: ['하양', '검정', '분홍', '노랑', '파랑'] },
                state: { pieces: [{ shape: 'circle', color: '하양', size: 'l', x: 240, y: 200, r: 0 }, { shape: 'circle', color: '하양', size: 'l', x: 320, y: 200, r: 0 }, { shape: 'circle', color: '하양', size: 'm', x: 280, y: 160, r: 0 }] },
                target: { has: [{ shape: 'circle', color: '검정', size: 's', n: 1 }, { shape: 'rect', color: '검정', n: 4 }] }, difficulty: 0.15,
                levels: { easy: { toolOptions: { shapes: ['circle', 'rect'], colors: ['하양', '검정'] } } } },
              { prompt: '짝과 화면을 바꾸어 보고 짝이 떠올린 것을 맞혀 보았으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"오늘 구름 하나로 몇 가지가 나왔는지 세어 볼까요?" 칠판에 나온 것을 적어 세어 본다. "이렇게 많이 나온 건 누가 틀려서일까요, 생각이 다양해서일까요?" 다음 시간에는 동그라미 하나로 떠오르는 것을 모아 본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'sort', slots: ['생각이 같아요', '생각이 달라요'], cards: ['민지 나비 · 하준 꽃', '서아 공 · 준호 공'] }, prompt: '물감 얼룩을 보고 떠올린 것이에요. 생각이 같은지 다른지 나누어 보세요.', target: { sort: { '생각이 같아요': ['서아 공 · 준호 공'], '생각이 달라요': ['민지 나비 · 하준 꽃'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '같은 그림을 보고 친구가 나와 다르게 말했어요. 맞는 생각은?', options: ['친구가 틀렸어요', '사람마다 다르게 보일 수 있어요', '내가 틀렸어요'], answer: 1, difficulty: 0.15, explain: '같은 것을 보고도 떠오르는 것은 사람마다 달라요. 다르다고 틀린 것이 아니에요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '구름을 보고 떠오른 것',
      items: [
        { type: 'table', prompt: '구름을 보고 떠오른 것을 쓰세요.', columns: ['나', '짝'], rows: 1 },
        { type: 'choice', prompt: '생각이 다른 친구에게 하는 말에 ○ 하세요.', options: ['"너는 그렇게 보이는구나"', '"틀렸어"', '"따라 하지 마"'], answer: '"너는 그렇게 보이는구나"' },
        { type: 'blank', prompt: '빈칸을 채우세요.', text: '같은 것을 보고도 사람마다 ________ 생각할 수 있어요.', answer: '다르게' },
        { type: 'draw', prompt: '구름을 보고 떠오른 것을 그려 보세요.' },
      ],
      easy: {
        note: '다른 생각도 틀린 것이 아니에요.',
        items: [
          { type: 'short', prompt: '구름을 보고 떠오른 것을 쓰세요.' },
          { type: 'choice', prompt: '좋은 말에 ○ 하세요.', options: ['"그렇게도 보이네"', '"틀렸어"'], answer: '"그렇게도 보이네"' },
          { type: 'draw', prompt: '구름을 보고 떠오른 것을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드에 초록 테두리가 생기고, 조각 고르개에는 모양 세 가지만 있어요.',
      base: '모두 놓은 뒤 확인을 눌러요. 구름을 내가 떠올린 것으로 바꾸어요.',
      challenge: '구름에 조각을 네 개 넘게 더하고, 짝과 다른 점까지 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 내 생각과 다르면 친구가 틀렸다고 우긴다 → 친구가 본 것을 그림에서 함께 찾아 준다. ② 친구 말을 듣고 내 생각을 버린다 → "네가 본 것도 구름 안에 있었지?"라고 짚어 두 생각이 함께 있을 수 있음을 보인다. ③ 떠오른 것이 없다고 한다 → 동물·먹을 것·물건 가운데 하나를 골라 보게 한다.',
  }));

  lessons.push(L(10, {
    title: '동그라미 하나로 떠오르는 것 여러 가지 모으기',
    objective: '동그라미 같은 단순한 모양을 보고 떠오르는 것을 여러 가지 모으고, 친구가 그렇게 떠올린 까닭을 짝 지어 말할 수 있다.',
    illustration: ART('a single big paper circle in the middle surrounded by many ideas it could be, a sun, a ball, a button, a donut and a full moon', '동그라미는 무엇일까요?', [
      { motif: 'sun', x: 120, y: 90, s: 0.6 }, { motif: 'moon', x: 360, y: 90, s: 0.6 }, { motif: 'flower', x: 400, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '칠판에 커다란 동그라미 하나를 그린다. "이 동그라미는 무엇일까요? 생각나는 대로 말해 봐요." 나오는 대로 동그라미 둘레에 적는다(해, 공, 단추, 접시). "벌써 몇 가지예요? 다 맞을 수 있을까요?" 시연 단추로 \'공\' 카드가 동그라미 바구니에 담기는 것을 보여 준다.',
        student: '동그라미를 보고 떠오르는 것을 두 가지 말해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'pick', basket: '동그라미로 보여요', cards: ['공', '삼각김밥'], shuffle: false }, sequence: [{ pick: ['공'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 모양 하나, 떠오르는 것 여럿', minutes: 13, tool: 'mindmap',
            teacher: '"동그라미를 보고 \'공\'이 떠오른 친구도 맞고, \'해\'가 떠오른 친구도 맞아요. 그런데 \'삼각김밥\'은 어떨까요?" 모양과 맞지 않는 생각만 함정이라는 것을 짚는다. 셋째 문항에서는 두 친구가 같은 그림을 다르게 본 까닭을 이어 보게 하고 "까닭을 들으니 친구 생각이 이해되나요?"를 묻는다.',
            task: '모양을 보고 떠올릴 수 있는 것을 고르고, 친구가 그렇게 떠올린 까닭을 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '동그라미를 보고 떠올릴 수 있는 것을 모두 바구니에 담아 보세요.', toolOptions: { mode: 'pick', basket: '동그라미로 보여요', cards: ['해', '공', '옷 단추', '삼각김밥'] },
                target: { pick: ['해', '공', '옷 단추'] }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['해', '공', '옷 단추', '삼각김밥', '네모난 지우개'] } } } },
              { prompt: '떠올린 것을 동그라미와 세모 가지로 나누어 보세요.', toolOptions: { topic: '모양을 보고', slots: ['동그라미를 보고', '세모를 보고'], cards: ['보름달', '피자 한 조각', '자동차 바퀴', '뾰족한 산'] },
                target: { sort: { '동그라미를 보고': ['보름달', '자동차 바퀴'], '세모를 보고': ['피자 한 조각', '뾰족한 산'] } }, difficulty: 0.15 },
              { prompt: '가운데에 구멍이 뚫린 노란 동그라미 그림이에요. 친구가 떠올린 것과 그 까닭을 이어 보세요.', toolOptions: { mode: 'match', topic: '왜 그렇게 보였을까?', slots: [{ id: 's1', label: '하준: "해 같아요"' }, { id: 's2', label: '서아: "도넛 같아요"' }], cards: ['노랗고 둥글어서', '가운데 구멍이 있어서'] },
                target: { match: { s1: '노랗고 둥글어서', s2: '가운데 구멍이 있어서' } }, difficulty: 0.2,
                predict: { q: '하준이와 서아 가운데 누가 맞을까요?', options: ['하준', '서아', '둘 다'], answer: 2 },
                conclude: '까닭을 들어 보면 서로 다른 생각도 모두 그림에서 나왔다는 것을 알 수 있어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 반원 하나로 내 생각 꾸미기', minutes: 14, tool: 'collage',
            teacher: '"반원 하나를 보면 무엇이 떠오르나요?" 무지개, 우산, 수박 한 조각, 해가 뜨는 모습 등을 듣는다. 먼저 모두 같은 무지개를 만들어 본 뒤, 둘째 문항에서 저마다 떠올린 것을 만든다. 모둠 친구와 작품을 늘어놓고 "같은 반원인데 몇 가지가 나왔는지" 세어 보게 한다.',
            task: '반원 조각으로 무지개를 만든 뒤, 같은 반원으로 내가 떠올린 것을 만들어 모둠 친구 작품과 견주어요.',
            levels: COL_LV,
            items: [
              { prompt: '빨강, 노랑, 파랑 반원을 하나씩 붙여 무지개를 만들어 보세요.', toolOptions: { shapes: ['semi', 'circle', 'triangle', 'rect'], colors: ['빨강', '노랑', '파랑', '초록', '갈색'] },
                target: { has: [{ shape: 'semi', color: '빨강', n: 1 }, { shape: 'semi', color: '노랑', n: 1 }, { shape: 'semi', color: '파랑', n: 1 }] }, difficulty: 0.1,
                levels: { easy: { toolOptions: { shapes: ['semi'], colors: ['빨강', '노랑', '파랑'] } }, challenge: { prompt: '빨강, 노랑, 초록, 파랑 반원을 하나씩 붙이고 하양 동그라미 구름 두 개를 더해 무지개를 만들어요.', target: { has: [{ shape: 'semi', color: '빨강', n: 1 }, { shape: 'semi', color: '노랑', n: 1 }, { shape: 'semi', color: '초록', n: 1 }, { shape: 'semi', color: '파랑', n: 1 }, { shape: 'circle', color: '하양', n: 2 }] }, toolOptions: { colors: ['빨강', '노랑', '파랑', '초록', '갈색', '하양'] } } } },
              { prompt: '반원 하나를 붙이고 그 반원이 내가 떠올린 것이 되도록 꾸민 뒤 점검해 보세요.', toolOptions: { shapes: ['semi', 'circle', 'triangle', 'rect'], colors: ['빨강', '노랑', '파랑', '초록', '갈색'] },
                target: { has: [{ shape: 'semi', min: 1 }], selfCheck: ['반원으로 내가 떠올린 것을 만들었어요', '모둠 친구에게 무엇인지 말했어요'], minPieces: 3 }, difficulty: 0.1,
                levels: { easy: { toolOptions: { shapes: ['semi', 'circle'] } } } },
              { prompt: '모둠 친구 작품을 늘어놓고 같은 반원으로 몇 가지가 나왔는지 세었으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"반원 하나로 우리 모둠에서는 몇 가지가 나왔나요?" 모둠마다 수를 말하게 하고 가장 많이 나온 모둠의 작품을 함께 본다. "친구가 나와 다른 것을 만들었을 때 어떤 마음이 들었나요?" 다음 시간에는 좋아하는 것이 서로 다른 까닭을 들어 본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', basket: '세모로 보여요', cards: ['고깔모자', '뾰족한 지붕', '수박 한 통'] }, prompt: '세모를 보고 떠올릴 수 있는 것만 바구니에 담아 보세요.', target: { pick: ['고깔모자', '뾰족한 지붕'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '네모 그림을 보고 민지는 "창문", 준호는 "선물 상자"라고 했어요. 맞는 말은?', options: ['민지만 맞아요', '준호만 맞아요', '둘 다 네모를 보고 떠올린 것이에요'], answer: 2, difficulty: 0.15, explain: '창문도 선물 상자도 네모 모양이라 둘 다 그렇게 보일 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '동그라미는 무엇일까요?',
      items: [
        { type: 'draw', prompt: '동그라미 하나에 그림을 더해 내가 떠올린 것으로 바꾸어 그리세요.' },
        { type: 'table', prompt: '모양을 보고 떠오른 것을 쓰세요.', columns: ['동그라미', '세모', '반원'], rows: 2 },
        { type: 'choice', prompt: '동그라미를 보고 떠올릴 수 없는 것에 ○ 하세요.', options: ['보름달', '바퀴', '삼각김밥'], answer: '삼각김밥' },
        { type: 'short', prompt: '친구가 떠올린 것 가운데 나는 생각하지 못한 것을 쓰세요.' },
      ],
      easy: {
        note: '모양이 닮은 것을 찾아요.',
        items: [
          { type: 'choice', prompt: '동그라미로 보이는 것에 ○ 하세요.', options: ['공', '삼각김밥'], answer: '공' },
          { type: 'draw', prompt: '동그라미로 무엇을 그릴지 정해 그려 보세요.' },
          { type: 'short', prompt: '친구가 떠올린 것을 하나 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드에 초록 테두리가 생기고, 무지개 고르개에는 반원과 세 가지 색만 있어요.',
      base: '모두 고른 뒤 확인을 눌러요. 반원으로 내가 떠올린 것을 만들어요.',
      challenge: '모양과 맞지 않는 함정 카드가 하나 더 있고, 무지개를 네 가지 색과 구름으로 만들어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 정답이 하나라고 여겨 "진짜는 뭐예요?"라고 묻는다 → "모양과 닮았으면 모두 맞아요"라고 기준을 말해 준다. ② 모양과 닮지 않은 것을 말한다 → 칠판 동그라미를 손가락으로 따라 그리며 닮았는지 견주게 한다. ③ 친구 작품을 흉내 낸다 → 흉내 낸 뒤 한 곳을 바꾸어 나만의 것으로 만들게 한다.',
  }));

  lessons.push(L(11, {
    title: '좋아하는 계절이 다른 까닭 들어 보기',
    objective: '친구가 좋아하는 계절과 그 까닭을 끝까지 듣고 짝 지을 수 있으며, 나와 다른 까닭도 그럴 수 있다고 말할 수 있다.',
    illustration: ART('four paper children each standing in a different season corner, spring flowers, summer water, autumn leaves and winter snowman, sharing reasons with each other', '왜 그 계절이 좋아요?', [
      { motif: 'flower', x: 90, y: 228, color: 'rose' }, { motif: 'leaf', x: 300, y: 222, color: 'peach' }, { motif: 'snow', x: 400, y: 90, s: 0.7 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"선생님은 가을이 좋아요. 낙엽 밟는 바스락 소리가 좋거든요." 교사가 먼저 까닭을 붙여 말하는 본을 보인다. "여러분은 어느 계절이 좋아요?" 네 귀퉁이에 계절 이름을 붙이고 좋아하는 계절 쪽으로 손을 들게 한다. "같은 반인데 좋아하는 계절이 다 다르네요. 까닭도 다를까요?" 시연 단추로 친구와 까닭이 이어지는 것을 보여 준다.',
        student: '내가 좋아하는 계절과 그 까닭을 마음속으로 정해요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '좋아하는 계절', slots: [{ id: 's1', label: '선생님은 가을이 좋아요' }], cards: ['낙엽 밟는 소리가 좋아서', '눈이 와서'], shuffle: false }, sequence: [{ match: { s1: '낙엽 밟는 소리가 좋아서' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 친구와 까닭 짝 짓기', minutes: 13, tool: 'mindmap',
            teacher: '"민지는 여름이 좋대요. 까닭을 들어 보니 \'물놀이를 할 수 있어서\'래요." 카드를 이어 보며 까닭이 그 계절에 맞는지 견주게 한다. 둘째 문항에서는 까닭을 말한 말과 까닭이 없는 말을 가린다. "\'그냥\'이라고 하면 친구가 내 생각을 알 수 있을까요?" 하고 묻는다. "여름은 더워서 싫은데 왜 좋아해?"라는 학생에게 "민지의 까닭을 들어 보니 어때요?" 하고 되묻는다.',
            task: '친구가 좋아하는 계절과 그 까닭을 잇고, 까닭을 붙여 말한 말을 찾아요.',
            levels: CARD_LV,
            items: [
              { prompt: '친구가 좋아하는 계절과 그 까닭을 이어 보세요.', toolOptions: { mode: 'match', topic: '좋아하는 계절', slots: [{ id: 's1', label: '민지는 여름이 좋아요' }, { id: 's2', label: '준호는 겨울이 좋아요' }, { id: 's3', label: '서아는 봄이 좋아요' }], cards: ['물놀이를 할 수 있어서', '눈사람을 만들 수 있어서', '꽃이 활짝 피어서'] },
                target: { match: { s1: '물놀이를 할 수 있어서', s2: '눈사람을 만들 수 있어서', s3: '꽃이 활짝 피어서' } }, difficulty: 0.1,
                levels: { easy: { toolOptions: { slots: [{ id: 's1', label: '민지는 여름이 좋아요' }, { id: 's2', label: '준호는 겨울이 좋아요' }], cards: ['물놀이를 할 수 있어서', '눈사람을 만들 수 있어서'] }, target: { match: { s1: '물놀이를 할 수 있어서', s2: '눈사람을 만들 수 있어서' } }, prompt: '민지와 준호가 좋아하는 계절과 그 까닭을 이어 보세요.' } } },
              { prompt: '까닭을 붙여 말한 말과 까닭이 없는 말로 나누어 보세요.', toolOptions: { topic: '좋아하는 계절 말하기', slots: ['까닭이 있어요', '까닭이 없어요'], cards: ['"가을이 좋아, 단풍이 예쁘거든"', '"그냥 겨울"', '"봄이 좋아, 소풍을 가니까"', '"몰라, 다 좋아"'] },
                target: { sort: { '까닭이 있어요': ['"가을이 좋아, 단풍이 예쁘거든"', '"봄이 좋아, 소풍을 가니까"'], '까닭이 없어요': ['"그냥 겨울"', '"몰라, 다 좋아"'] } }, difficulty: 0.15 },
              { prompt: '하준이는 더운 여름이 싫대요. 여름을 좋아하는 민지에게 할 알맞은 말만 골라 보세요.', toolOptions: { mode: 'pick', basket: '알맞은 말', cards: ['"너는 물놀이 때문에 여름이 좋구나"', '"여름은 나도 궁금해, 더 말해 줘"', '"여름을 좋아하는 건 이상해"'] },
                target: { pick: ['"너는 물놀이 때문에 여름이 좋구나"', '"여름은 나도 궁금해, 더 말해 줘"'] }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['"너는 물놀이 때문에 여름이 좋구나"', '"여름은 나도 궁금해, 더 말해 줘"', '"여름을 좋아하는 건 이상해"', '"내 말대로 겨울로 바꿔"'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 짝에게 까닭 묻고 옮겨 말하기', minutes: 14, tool: 'story',
            teacher: '"짝에게 \'너는 어느 계절이 좋아? 왜?\' 하고 물어요. 짝이 말하면 끝까지 듣고 활동지에 그림으로 남겨요." 2분씩 바꾸어 묻게 한다. 화면에서는 들은 말을 문장 빈칸에 넣어 옮겨 본다. 짝과 좋아하는 계절이 같아도 까닭은 다를 수 있다는 것을 짚는다.',
            task: '짝에게 좋아하는 계절과 까닭을 묻고, 들은 말을 문장 빈칸에 알맞게 옮겨 넣어요.',
            levels: CARD_LV,
            items: [
              { prompt: '짝에게 좋아하는 계절과 까닭을 묻고 활동지에 그렸으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '서아가 "나는 가을이 좋아. 밤을 주워 먹을 수 있거든"이라고 했어요. 빈칸에 알맞은 카드를 넣어 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'f1', who: '나', label: '서아는 ___이 좋대.' }, { id: 'f2', who: '나', label: '왜냐하면 ___ 수 있어서래.' }], cards: ['가을', '밤을 주워 먹을', '여름', '눈싸움을 할'] },
                target: { fill: { f1: '가을', f2: '밤을 주워 먹을' } }, difficulty: 0.2,
                levels: { easy: { toolOptions: { cards: ['가을', '밤을 주워 먹을', '여름'] } } } },
              { prompt: '준호와 하준이는 둘 다 겨울이 좋대요. 준호는 썰매, 하준이는 붕어빵 때문이래요. 빈칸을 채워 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'f1', who: '나', label: '준호는 ___ 때문에 겨울이 좋대.' }, { id: 'f2', who: '나', label: '하준이는 ___ 때문에 겨울이 좋대.' }], cards: ['썰매', '붕어빵', '수박'] },
                target: { fill: { f1: '썰매', f2: '붕어빵' } }, difficulty: 0.15,
                conclude: '좋아하는 계절이 같아도 까닭은 친구마다 다를 수 있어요.' },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"짝의 까닭을 듣고 \'아, 그래서 좋구나\' 하고 생각이 바뀐 친구가 있나요?" 두세 명의 말을 듣는다. 나와 다른 계절을 좋아하는 친구의 까닭을 하나 골라 칠판에 적고, "다르지만 그럴 수 있다"는 말을 함께 해 본다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '좋아하는 계절', slots: [{ id: 'e1', label: '하준이는 가을이 좋아요' }, { id: 'e2', label: '민지는 봄이 좋아요' }], cards: ['감이 빨갛게 익어서', '새싹이 돋아서'] }, prompt: '친구가 좋아하는 계절과 그 까닭을 이어 보세요.', target: { match: { e1: '감이 빨갛게 익어서', e2: '새싹이 돋아서' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '나는 겨울이 좋은데 짝은 여름이 좋대요. 알맞은 생각은?', options: ['짝이 틀렸어요', '짝도 까닭이 있을 거예요', '짝 말은 안 들어도 돼요'], answer: 1, difficulty: 0.1, explain: '좋아하는 것이 달라도 저마다 까닭이 있어요. 까닭을 물어 들어 봐요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '좋아하는 계절과 까닭',
      items: [
        { type: 'table', prompt: '나와 짝이 좋아하는 계절과 까닭을 쓰세요.', columns: ['', '좋아하는 계절', '까닭'], cells: [['나', '', ''], ['짝', '', '']] },
        { type: 'choice', prompt: '까닭을 붙여 말한 것에 ○ 하세요.', options: ['"봄이 좋아, 꽃이 피거든"', '"그냥 봄"'], answer: '"봄이 좋아, 꽃이 피거든"' },
        { type: 'blank', prompt: '빈칸을 채우세요.', text: '나는 ______이 좋아요. 왜냐하면 ______________ 때문이에요.' },
        { type: 'draw', prompt: '짝이 좋아하는 계절의 모습을 그려 보세요.' },
      ],
      easy: {
        note: '"왜냐하면"을 넣어 말해요.',
        items: [
          { type: 'choice', prompt: '눈사람을 만들 수 있는 계절에 ○ 하세요.', options: ['겨울', '여름'], answer: '겨울' },
          { type: 'short', prompt: '내가 좋아하는 계절을 쓰세요.' },
          { type: 'draw', prompt: '좋아하는 계절의 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '짝 잇기가 두 쌍이고 카드에 초록 테두리가 생겨요. 빈칸 카드도 한 장 줄어요.',
      base: '세 친구와 까닭을 잇고, 들은 말을 빈칸 두 곳에 옮겨요.',
      challenge: '고르기 카드에 함정 말이 하나 더 있어요. 활동지에 짝의 까닭을 내 말로 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 나와 다른 계절을 좋아하는 친구를 이상하다고 한다 → 까닭을 먼저 묻게 한다. ② 까닭 없이 "그냥"이라고 한다 → "그 계절에 무엇을 할 수 있어요?"로 까닭을 끌어낸다. ③ 짝의 말을 옮기지 못한다 → 짝에게 한 번 더 말해 달라고 부탁하는 말("다시 말해 줄래?")을 알려 준다.',
  }));

  lessons.push(L(12, {
    title: '생각이 다를 때 함께 정하는 말 연습하기',
    objective: '놀이를 정할 때 친구와 생각이 다르면 열린 말로 까닭을 묻고, 함께 정하는 방법을 골라 역할극으로 해 볼 수 있다.',
    illustration: ART('two paper children standing face to face, one holding a jump rope and one holding a ball, a speech bubble with a heart between them', '생각이 다를 때', [
      { motif: 'tree', x: 90, y: 214 }, { motif: 'flower', x: 390, y: 228, color: 'lavender' }, { motif: 'cloud', x: 330, y: 70, s: 0.7 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"쉬는 시간에 민지는 줄넘기, 준호는 공놀이를 하고 싶대요. 둘 다 하고 싶은 게 달라요. 어떻게 하면 좋을까요?" 두세 명의 생각을 듣는다. "먼저 말한 사람 뜻대로 하면 될까요?" 하고 묻고, 오늘은 생각이 다를 때 쓰는 \'열린 말\'을 연습한다고 말한다. 시연 단추로 \'"네 생각도 좋다"\' 카드가 열린 말 칸으로 가는 것을 보여 준다.',
        student: '친구와 하고 싶은 놀이가 달랐던 때를 떠올려 봐요.',
        demo: { tool: 'emotion', options: { mode: 'sort', slots: ['열린 말', '닫힌 말'], cards: ['"네 생각도 좋다"', '"싫어, 내 거만 해"'], shuffle: false }, sequence: [{ sort: { '열린 말': ['"네 생각도 좋다"'], '닫힌 말': ['"싫어, 내 거만 해"'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 열린 말과 닫힌 말 가리기', minutes: 13, tool: 'emotion',
            teacher: '"열린 말은 친구 생각이 들어올 문을 열어 주는 말이에요. 닫힌 말은 문을 꽝 닫는 말이에요." 손으로 문을 열고 닫는 몸짓을 함께 한다. 카드를 읽을 때 목소리 크기와 표정도 함께 흉내 내 보게 한다. 마음 크기를 고를 때는 이야기 속 \'모두 들리게 웃었어요\'를 손가락으로 짚게 한다.',
            task: '생각이 다를 때 하는 말을 열린 말과 닫힌 말로 나누고, 친구의 마음과 함께 정하는 방법을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '생각이 다를 때 하는 말을 열린 말과 닫힌 말로 나누어 보세요.', toolOptions: { mode: 'sort', slots: ['열린 말', '닫힌 말'], cards: ['"너는 왜 그게 하고 싶어?"', '"그건 말도 안 돼"', '"둘 다 해 보자"', '"싫으면 저리 가"'] },
                target: { sort: { '열린 말': ['"너는 왜 그게 하고 싶어?"', '"둘 다 해 보자"'], '닫힌 말': ['"그건 말도 안 돼"', '"싫으면 저리 가"'] } }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['"너는 왜 그게 하고 싶어?"', '"그건 말도 안 돼"', '"둘 다 해 보자"', '"싫으면 저리 가"', '"오늘 하늘이 맑다"'] } } } },
              { prompt: '서아가 "공룡은 하늘을 날았을 것 같아"라고 하자 친구들이 모두 들리게 웃었어요. 서아의 속상한 마음 크기를 골라 보세요.', toolOptions: { mode: 'scale', who: '서아', situation: '서아가 떠올린 생각을 말하자 친구들이 모두 들리게 웃었어요. 서아는 고개를 숙였어요.', feeling: '속상함', after: '그럴 때는 "그렇게 생각한 까닭이 뭐야?" 하고 물어 줘요.' }, target: { level: [3, 5] }, difficulty: 0.15,
                levels: { easy: { prompt: '서아의 생각을 듣고 친구들이 크게 웃었어요. 서아의 속상한 마음을 세 칸에서 골라 보세요.', toolOptions: { steps: 3 }, target: { level: [2, 3] } } } },
              { prompt: '민지는 줄넘기, 준호는 공놀이를 하고 싶어요. 쉬는 시간은 20분이에요. 어떻게 정할까요?', toolOptions: { mode: 'branch', situation: '민지는 줄넘기, 준호는 공놀이를 하고 싶어요. 쉬는 시간은 20분이에요.', choices: [
                { id: 'turn', text: '10분씩 차례로 둘 다 해요', result: '둘 다 하고 싶은 놀이를 했어요.', mood: '기쁨' },
                { id: 'first', text: '먼저 말한 민지 뜻대로 해요', result: '준호는 하고 싶은 놀이를 못 해 속상해요.', mood: '속상함', why: '먼저 말한 사람이 이기는 것일까요?' },
                { id: 'alone', text: '서로 따로 놀아요', result: '둘이 함께 놀지 못해 쓸쓸해요.', mood: '외로움', why: '함께 놀고 싶었던 마음은 어떻게 되었을까요?' }] }, target: { choice: 'turn' }, difficulty: 0.15,
                conclude: '생각이 다를 때는 서로의 까닭을 듣고 둘 다 좋은 방법을 함께 찾아요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 짝과 역할극으로 함께 정해 보기', minutes: 14, tool: 'story',
            teacher: '"짝과 한 사람은 민지, 한 사람은 준호가 되어요. 열린 말을 써서 놀이를 함께 정해 봐요." 역할극 순서 카드(듣기 → 까닭 묻기 → 함께 정하기)를 칠판에 붙여 둔다. 2분씩 역할을 바꾼다. 닫힌 말이 나오면 멈추고 "문이 닫혔네. 다시 열어 볼까?" 하고 다시 하게 한다. 끝까지 정하지 못한 짝에게는 가위바위보나 차례 정하기를 알려 준다.',
            task: '짝과 역할을 나누어 생각이 다른 상황을 연기하고, 함께 정하는 차례를 카드로 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '짝과 역할을 바꾸어 가며 열린 말로 놀이를 함께 정해 보았으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '생각이 다를 때 함께 정하는 차례대로 카드를 놓아 보세요.', toolOptions: { slots: ['처음', '가운데', '끝'], cards: ['친구 생각을 끝까지 들어요', '"왜 그게 좋아?" 하고 까닭을 물어요', '둘 다 좋은 방법을 함께 정해요'] },
                target: { order: ['친구 생각을 끝까지 들어요', '"왜 그게 좋아?" 하고 까닭을 물어요', '둘 다 좋은 방법을 함께 정해요'] }, difficulty: 0.15 },
              { prompt: '모둠에서 그림 색을 정해요. 하준이는 파랑, 서아는 노랑을 원해요. 빈칸에 알맞은 열린 말을 넣어 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'f1', who: '하준', label: '서아야, 너는 ___?' }, { id: 'f2', who: '서아', label: '그럼 하늘은 파랑, 해는 노랑으로 ___.' }], cards: ['왜 노랑이 좋아', '둘 다 쓰자', '노랑은 싫어', '내 맘대로 할래'] },
                target: { fill: { f1: '왜 노랑이 좋아', f2: '둘 다 쓰자' } }, difficulty: 0.2,
                levels: { easy: { toolOptions: { cards: ['왜 노랑이 좋아', '둘 다 쓰자', '노랑은 싫어'] } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"오늘 역할극에서 어떤 열린 말을 써 보았나요?" 세 명 정도에게 묻고 칠판에 \'열린 말\' 목록을 만든다. "다음 시간에는 친구 말을 끝까지 듣고 \'네 말은 이런 뜻이지?\' 하고 옮겨 말하는 연습을 해요." 이 시간으로 같은 것을 다르게 생각하는 공부를 마친다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'sort', slots: ['열린 말', '닫힌 말'], cards: ['"네 생각도 들어 볼게"', '"그만 말해"'] }, prompt: '두 말을 열린 말과 닫힌 말로 나누어 보세요.', target: { sort: { '열린 말': ['"네 생각도 들어 볼게"'], '닫힌 말': ['"그만 말해"'] } }, difficulty: 0.05 },
          { type: 'choice', prompt: '모둠에서 그릴 동물을 정해요. 생각이 셋 다 달라요. 알맞은 방법은?', options: ['목소리 큰 친구 뜻대로 해요', '까닭을 듣고 함께 정해요', '그리지 않아요'], answer: 1, difficulty: 0.15, explain: '목소리가 크거나 먼저 말했다고 정하지 않고, 까닭을 들은 뒤 함께 정해요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '생각이 다를 때 쓰는 열린 말',
      items: [
        { type: 'choice', prompt: '열린 말에 ○ 하세요.', options: ['"너는 왜 그게 좋아?"', '"말도 안 돼"', '"저리 가"'], answer: '"너는 왜 그게 좋아?"' },
        { type: 'blank', prompt: '열린 말을 완성하세요.', text: '"너는 그렇게 ________________구나. 왜 그렇게 생각해?"' },
        { type: 'table', prompt: '역할극에서 쓴 말을 쓰세요.', columns: ['내가 한 열린 말', '짝이 한 열린 말'], rows: 1 },
        { type: 'draw', prompt: '친구와 함께 정해서 놀이하는 모습을 그려 보세요.' },
      ],
      easy: {
        note: '열린 말은 친구 생각이 들어올 문을 열어요.',
        items: [
          { type: 'choice', prompt: '열린 말에 ○ 하세요.', options: ['"둘 다 해 보자"', '"싫어"'], answer: '"둘 다 해 보자"' },
          { type: 'choice', prompt: '함께 정하는 방법에 ○ 하세요.', options: ['차례로 둘 다 해요', '먼저 말한 사람 뜻대로 해요'], answer: '차례로 둘 다 해요' },
          { type: 'draw', prompt: '친구와 함께 노는 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드에 초록 테두리가 생기고, 마음 크기는 세 칸이에요. 빈칸 카드도 한 장 줄어요.',
      base: '모두 놓은 뒤 확인을 눌러요. 역할극에서 열린 말을 두 번 넘게 써요.',
      challenge: '상관없는 함정 말이 섞이고, 역할극에서 함께 정한 방법을 활동지에 내 말로 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 먼저 말한 사람이 정한다고 여긴다 → "먼저 말하면 이기는 놀이일까?"를 되묻고 차례 정하기를 보여 준다. ② 열린 말을 외워 말하지만 표정은 닫혀 있다 → 목소리와 표정까지 함께 연습한다. ③ 친구 생각을 비웃는다 → 비웃음을 들은 친구 마음 크기를 함께 고른 뒤 사과하는 말을 연습한다.',
  }));

  // ───────────────────────── 13~16차시: 끝까지 듣고 옮겨 말하기(바른 생활 실천) ─────────────────────────

  lessons.push(L(13, {
    title: '끝까지 듣고 "네 말은 ~구나" 하고 옮기기',
    objective: '친구가 말할 때 끼어들지 않고 끝까지 들은 뒤, 들은 말을 "네 말은 ~라는 거지?"처럼 내 말로 옮겨 뜻을 확인할 수 있다.',
    illustration: ART('two paper children talking, one speaking with a long speech ribbon and the other waiting with hands on knees and then repeating with a mirror-like speech bubble', '네 말은 이런 뜻이지?', [
      { motif: 'tree', x: 380, y: 214 }, { motif: 'flower', x: 100, y: 228, color: 'buttercup' }, { motif: 'bird', x: 300, y: 80 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '교사가 학생 한 명과 짧게 시연한다. 학생이 "어제 비가 와서 축구를 못 했어요"라고 말하면 교사가 끝까지 듣고 "비 때문에 축구를 못 했다는 거지?" 하고 옮긴다. "선생님이 무엇을 했나요?" 학생들에게 묻는다. "이렇게 들은 말을 다시 옮기면 내가 잘 들었는지 알 수 있어요." 시연 단추로 친구의 말과 옮긴 말이 이어지는 것을 보여 준다.',
        student: '선생님이 옮긴 말을 따라 해 봐요. "네 말은 ~라는 거지?"',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '옮겨 말하기', slots: [{ id: 's1', label: '"어제 비가 와서 축구를 못 했어"' }], cards: ['"비 때문에 축구를 못 했구나"', '"축구를 실컷 했구나"'], shuffle: false }, sequence: [{ match: { s1: '"비 때문에 축구를 못 했구나"' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 바르게 옮긴 말 찾기', minutes: 13, tool: 'mindmap',
            teacher: '"친구 말을 옮길 때는 친구가 한 말에서 빠진 것도, 바뀐 것도 없어야 해요." 카드를 읽으며 친구가 한 말과 한 낱말씩 견주게 한다. 틀리게 옮긴 카드를 고른 학생에게 "하준이가 정말 버스를 탔다고 했나요?" 하고 원래 말을 다시 읽어 준다. 먼저 말해야 이긴다고 여겨 친구 말 중간에 옮기려는 학생에게는 끝까지 기다려야 옮길 수 있다는 것을 짚는다.',
            task: '친구가 한 말을 읽고, 그 뜻을 바르게 옮긴 말을 찾아 잇거나 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '친구가 한 말과 바르게 옮긴 말을 이어 보세요.', toolOptions: { mode: 'match', topic: '옮겨 말하기', slots: [{ id: 's1', label: '민지: "고양이가 좋아. 털이 보드라워서."' }, { id: 's2', label: '준호: "동생이 아파서 일찍 집에 가."' }], cards: ['"털이 보드라워서 고양이가 좋구나"', '"동생이 아파서 일찍 가는구나"'] },
                target: { match: { s1: '"털이 보드라워서 고양이가 좋구나"', s2: '"동생이 아파서 일찍 가는구나"' } }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['"털이 보드라워서 고양이가 좋구나"', '"동생이 아파서 일찍 가는구나"', '"고양이가 무섭구나"', '"네가 아파서 가는구나"'] } } } },
              { prompt: '하준: "늦잠을 자서 학교까지 뛰어왔어." 바르게 옮긴 말만 골라 보세요.', toolOptions: { mode: 'pick', basket: '바르게 옮겼어요', cards: ['"늦잠 자서 뛰어왔구나"', '"일찍 일어나서 걸어왔구나"', '"늦잠 자서 버스를 탔구나"'] },
                target: { pick: ['"늦잠 자서 뛰어왔구나"'] }, difficulty: 0.15 },
              { prompt: '서아: "토요일에 할머니 댁에서 감을 땄어." 빈칸에 알맞은 카드를 넣어 옮겨 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'f1', who: '나', label: '네 말은 ___에서 감을 땄다는 거지?' }, { id: 'f2', who: '나', label: '그리고 그날이 ___이었구나.' }], cards: ['할머니 댁', '토요일', '학교', '월요일'] },
                target: { fill: { f1: '할머니 댁', f2: '토요일' } }, difficulty: 0.2,
                levels: { easy: { toolOptions: { cards: ['할머니 댁', '토요일', '학교'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 짝 말 듣고 옮겨 주기', minutes: 14, tool: 'emotion',
            teacher: '"한 사람이 \'나는 ○○가 좋아. 왜냐하면 ○○이라서.\'라고 말해요. 짝은 끝까지 듣고 \'네 말은 ~라는 거지?\'로 옮겨요. 맞으면 말한 사람이 \'응, 맞아!\' 하고 엄지를 들어요." 세 번씩 바꾸어 한다. 옮긴 말이 틀리면 말한 사람이 한 번 더 말해 주면 된다고 말해 준다. 활동 뒤 "짝이 내 말을 옮겨 주었을 때 어떤 마음이었나요?"를 묻는다.',
            task: '짝과 번갈아 좋아하는 것과 까닭을 말하고 옮겨 준 뒤, 그때의 마음과 알맞은 행동을 골라요.',
            levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
            items: [
              { prompt: '짝과 세 번씩 번갈아 말하고 "네 말은 ~라는 거지?"로 옮겨 주었으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '두 가지 일을 겪었을 때의 마음 카드를 놓아 보세요.', toolOptions: { cards: ['기쁨', '속상함', '놀람'], slots: [{ id: 's1', label: '짝이 내 말을 끝까지 듣고 바르게 옮겨 주었어요' }, { id: 's2', label: '내 말이 끝나기 전에 짝이 끼어들었어요' }] },
                target: { match: { s1: '기쁨', s2: '속상함' } }, difficulty: 0.1 },
              { prompt: '준호의 말이 길어요. 듣다가 지루해졌어요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '준호', situation: '준호가 주말에 본 영화 이야기를 길게 하고 있어요. 듣다가 조금 지루해졌어요.', choices: [
                { id: 'cut', text: '"알았어, 이제 내 차례야!" 하고 끊어요', result: '준호가 영화 끝 이야기를 못 했어요.', mood: '속상함', why: '먼저 말해야 이기는 것일까요?' },
                { id: 'end', text: '끝까지 듣고 "영화 끝이 그렇게 됐구나" 하고 옮겨요', result: '준호가 신나서 "응, 맞아!" 하고 웃었어요.', mood: '기쁨' },
                { id: 'yawn', text: '하품을 하며 딴 데를 봐요', result: '준호가 말하다 멈추고 머뭇거렸어요.', mood: '걱정', why: '하품을 본 준호는 어떤 마음일까요?' }] }, target: { choice: 'end' }, difficulty: 0.15 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"옮겨 말하기를 하려면 친구 말을 언제까지 들어야 할까요?" 대답을 들은 뒤, 칠판에 \'네 말은 ~라는 거지?\' 틀을 붙여 두고 한 주 동안 이야기 시간마다 쓰기로 약속한다. 출구 1번은 오늘 처음 보는 친구의 말이라는 것을 알려 준다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', basket: '바르게 옮겼어요', cards: ['"강아지 산책을 시켜서 늦었구나"', '"강아지가 아파서 늦었구나"', '"늦지 않았구나"'] }, prompt: '민지: "강아지 산책을 시키느라 늦었어." 바르게 옮긴 말만 골라 보세요.', target: { pick: ['"강아지 산책을 시켜서 늦었구나"'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '이야기를 나눌 때 먼저 말하는 사람이 이기는 걸까요?', options: ['네, 먼저 말하면 이겨요', '아니요, 이기고 지는 게 아니에요'], answer: 1, difficulty: 0.1, explain: '이야기 나누기는 이기는 놀이가 아니에요. 끝까지 들어야 친구 뜻을 알 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '네 말은 이런 뜻이지?',
      items: [
        { type: 'choice', prompt: '준호: "배가 아파서 우유를 못 마셨어." 바르게 옮긴 말에 ○ 하세요.', options: ['"배가 아파서 우유를 못 마셨구나"', '"우유를 두 개 마셨구나"', '"배가 고팠구나"'], answer: '"배가 아파서 우유를 못 마셨구나"' },
        { type: 'blank', prompt: '짝이 한 말을 옮겨 쓰세요.', text: '네 말은 ______________________________라는 거지?' },
        { type: 'check', prompt: '오늘 내가 한 일에 ✓ 하세요.', options: ['끝까지 들었어요', '끼어들지 않았어요', '옮겨 말했어요', '짝이 "맞아"라고 했어요'] },
        { type: 'draw', prompt: '짝의 말을 듣는 내 모습을 그려 보세요.' },
      ],
      easy: {
        note: '친구 말이 끝날 때까지 기다려요.',
        items: [
          { type: 'choice', prompt: '옮겨 말하는 틀에 ○ 하세요.', options: ['"네 말은 ~라는 거지?"', '"내 말이 맞아"'], answer: '"네 말은 ~라는 거지?"' },
          { type: 'short', prompt: '짝이 좋아한다고 한 것을 쓰세요.' },
          { type: 'draw', prompt: '짝의 말을 듣는 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드에 초록 테두리가 생기고, 빈칸 카드가 한 장 줄어요.',
      base: '모두 놓은 뒤 확인을 눌러요. 짝과 세 번 옮겨 말해요.',
      challenge: '틀리게 옮긴 함정 카드가 두 장 더 있어요. 짝의 말을 활동지에 내 말로 옮겨 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 친구 말 중간에 옮기려 한다 → "말이 끝났다는 신호(\'끝!\' 하거나 고개 끄덕이기)"를 정한다. ② 친구 말을 그대로 따라 하기만 한다 → 따라 해도 괜찮지만 "~구나", "~라는 거지?"를 붙이게 한다. ③ 옮긴 말에 내 생각을 섞는다 → 옮기기와 내 생각 말하기는 따로 한다고 순서를 나누어 준다.',
  }));

  lessons.push(L(14, {
    title: '짝 인터뷰로 좋아하는 음식 듣고 옮기기',
    objective: '짝에게 좋아하는 음식과 까닭을 묻고 말의 끝까지 들은 뒤, 들은 내용을 바르게 옮겨 정리할 수 있다.',
    illustration: ART('two paper children interviewing each other with a paper microphone, food pictures like rice balls, fruit and soup floating in speech bubbles', '짝 인터뷰', [
      { motif: 'flower', x: 100, y: 228, color: 'peach' }, { motif: 'star', x: 360, y: 90, s: 0.6 }, { motif: 'tree', x: 400, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '종이로 만든 마이크를 들고 한 학생에게 묻는다. "좋아하는 음식이 뭐예요? 왜 좋아요?" 학생이 답하면 교사가 "아, 떡볶이가 매콤해서 좋다는 거지요?" 하고 옮긴다. "오늘은 여러분이 기자가 되어 짝을 인터뷰해요. 기자는 끝까지 듣는 사람이에요." 시연 단추로 들은 말을 빈칸에 옮기는 모습을 보여 준다.',
        student: '내가 가장 좋아하는 음식과 그 까닭을 떠올려 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'fill', slots: [{ id: 'f1', who: '기자', label: '짝은 ___을 좋아한대요.' }], cards: ['떡볶이', '피자'], shuffle: false }, sequence: [{ fill: { f1: '떡볶이' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 종이 마이크로 짝 인터뷰하기', minutes: 14, tool: 'mindmap',
            teacher: '"기자는 세 가지를 물어요. 무엇을 좋아해요? 왜 좋아해요? 언제 먹었어요?" 질문 세 개를 칠판에 붙인다. 짝이 다 말할 때까지 마이크를 짝 쪽으로 들고 있게 한다. 말이 끝나면 "네 말은 ~라는 거지?"로 옮기고 활동지 기자 수첩에 그림이나 낱말로 적는다. 셋째 문항은 말의 끝에서 뜻이 바뀌는 말이니, 중간에 멈추면 어떻게 되는지 견주게 한다.',
            task: '종이 마이크로 짝에게 세 가지를 묻고 끝까지 들은 뒤, 들은 말을 카드로 옮겨 정리해요.',
            levels: CARD_LV,
            items: [
              { prompt: '짝에게 세 가지 질문을 하고 기자 수첩에 적었으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '서아를 인터뷰했어요. "김밥이 좋아. 소풍 때 엄마가 싸 주셔서." 빈칸에 알맞은 카드를 넣어 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'f1', who: '기자', label: '서아는 ___을 좋아한대요.' }, { id: 'f2', who: '기자', label: '___ 때 엄마가 싸 주셔서래요.' }], cards: ['김밥', '소풍', '라면', '생일'] },
                target: { fill: { f1: '김밥', f2: '소풍' } }, difficulty: 0.15,
                levels: { easy: { toolOptions: { cards: ['김밥', '소풍', '라면'] } } } },
              { prompt: '준호: "오이가 싫었어. 그런데 할머니 오이무침은 맛있어." 끝까지 듣고 바르게 옮긴 말만 골라 보세요.', toolOptions: { mode: 'pick', basket: '바르게 옮겼어요', cards: ['"할머니 오이무침은 맛있구나"', '"오이는 다 싫구나"', '"할머니가 오이를 싫어하시는구나"'] },
                target: { pick: ['"할머니 오이무침은 맛있구나"'] }, difficulty: 0.2,
                predict: { q: '"오이가 싫었어"까지만 듣고 옮기면 어떻게 될까요?', options: ['바르게 옮겨요', '뜻이 달라져요'], answer: 1 },
                conclude: '말의 끝에서 뜻이 바뀔 수 있어서 끝까지 들어야 바르게 옮길 수 있어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 들은 말을 친구별로 정리하기', minutes: 13, tool: 'mindmap',
            teacher: '"모둠 친구 네 명이 한 말이 섞였어요. 누가 한 말인지 기억해서 친구 가지에 나누어 볼까요?" 인터뷰 내용을 모둠 친구 가지에 나누어 본다. 헷갈리는 학생에게 "준호는 무슨 음식을 좋아한다고 했지요?" 하고 첫 질문부터 차례로 떠올리게 한다. 남의 이야기를 바꾸어 전하면 친구가 어떤 마음일지도 함께 묻는다.',
            task: '모둠 친구들이 인터뷰에서 한 말을 누가 한 말인지 친구 가지에 나누어 정리해요.',
            levels: CARD_LV,
            items: [
              { prompt: '민지는 "딸기, 새콤달콤해서", 하준이는 "갈비, 생일에 먹어서"라고 했어요. 들은 말을 친구 가지에 나누어 보세요.', toolOptions: { topic: '인터뷰 정리', slots: ['민지', '하준'], cards: ['딸기를 좋아해요', '새콤달콤해서 좋대요', '갈비를 좋아해요', '생일에 먹어서 좋대요'] },
                target: { sort: { '민지': ['딸기를 좋아해요', '새콤달콤해서 좋대요'], '하준': ['갈비를 좋아해요', '생일에 먹어서 좋대요'] } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['딸기를 좋아해요', '새콤달콤해서 좋대요', '갈비를 좋아해요', '생일에 먹어서 좋대요', '오이를 싫어한대요'] } } } },
              { prompt: '서아는 "미역국, 따뜻해서", 준호는 "수박, 시원해서"라고 했어요. 친구와 좋아하는 까닭을 이어 보세요.', toolOptions: { mode: 'match', topic: '인터뷰 정리', slots: [{ id: 's1', label: '서아는 미역국이 좋대요' }, { id: 's2', label: '준호는 수박이 좋대요' }], cards: ['따뜻해서', '시원해서'] },
                target: { match: { s1: '따뜻해서', s2: '시원해서' } }, difficulty: 0.1 },
              { prompt: '인터뷰한 말을 다른 친구에게 전할 때 알맞은 말만 골라 보세요.', toolOptions: { mode: 'pick', basket: '알맞게 전해요', cards: ['"민지는 딸기가 새콤달콤해서 좋대"', '"민지는 딸기를 엄청 싫어한대"', '"민지가 이상한 걸 좋아해"'] },
                target: { pick: ['"민지는 딸기가 새콤달콤해서 좋대"'] }, difficulty: 0.15 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"기자가 되어 보니 끝까지 듣는 것이 왜 중요했나요?" 두세 명이 말하게 한다. 짝이 "응, 맞아!"라고 해 준 기자에게 박수를 보낸다. 다음 시간에는 귓속말 전하기 놀이로 듣고 전하는 연습을 더 한다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'fill', slots: [{ id: 'e1', who: '기자', label: '하준이는 ___을 좋아한대요.' }], cards: ['고구마', '감자', '옥수수'] }, prompt: '하준: "감자는 별로야. 군고구마가 최고야!" 빈칸에 알맞은 카드를 넣어 보세요.', target: { fill: { e1: '고구마' } }, difficulty: 0.2 },
          { type: 'choice', prompt: '인터뷰할 때 기자가 해야 할 일은 무엇일까요?', options: ['짝 말을 끝까지 들어요', '내 이야기를 먼저 해요', '짝 말을 바꾸어 적어요'], answer: 0, difficulty: 0.05, explain: '기자는 묻고, 끝까지 듣고, 들은 대로 옮기는 사람이에요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '나는 꼬마 기자',
      items: [
        { type: 'table', prompt: '짝 인터뷰를 정리하세요.', columns: ['질문', '짝의 대답'], cells: [['무엇을 좋아해요?', ''], ['왜 좋아해요?', ''], ['언제 먹었어요?', '']] },
        { type: 'blank', prompt: '짝의 말을 옮겨 쓰세요.', text: '네 말은 ________이 ________해서 좋다는 거지?' },
        { type: 'choice', prompt: '"당근은 싫어. 그런데 당근 케이크는 좋아." 이 친구가 좋아하는 것에 ○ 하세요.', options: ['당근 케이크', '당근', '둘 다 싫어요'], answer: '당근 케이크' },
        { type: 'draw', prompt: '짝이 좋아하는 음식을 그려 보세요.' },
      ],
      easy: {
        note: '마이크를 짝 쪽으로 들고 끝까지 기다려요.',
        items: [
          { type: 'short', prompt: '짝이 좋아하는 음식을 쓰세요.' },
          { type: 'choice', prompt: '기자가 할 일에 ○ 하세요.', options: ['끝까지 들어요', '먼저 말해요'], answer: '끝까지 들어요' },
          { type: 'draw', prompt: '짝이 좋아하는 음식을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드에 초록 테두리가 생기고 빈칸 카드가 한 장 줄어요. 기자 수첩에는 그림으로 적어도 돼요.',
      base: '질문 세 개로 인터뷰하고 들은 말을 카드로 옮겨요.',
      challenge: '누가 한 말도 아닌 함정 카드가 섞여 있어요. 짝의 대답을 활동지에 문장으로 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 질문하고 짝 대답 대신 자기 이야기를 한다 → 마이크를 쥔 손을 짝 쪽으로 두는 규칙을 쓴다. ② 말의 앞부분만 듣고 옮긴다 → \'그런데\', \'하지만\'이 나오면 뜻이 바뀔 수 있다고 짚는다. ③ 친구의 말을 놀림거리로 전한다 → 들은 대로만 전하는 것이 친구를 아끼는 방법이라고 말해 준다. 식품 알레르기가 있는 학생의 이야기는 놀리지 않도록 미리 살핀다.',
  }));

  lessons.push(L(15, {
    title: '귓속말 전하기 놀이로 끝까지 듣기',
    objective: '귓속말 전하기 놀이에서 들은 말을 끝까지 듣고 바꾸지 않고 전하며, 말이 바뀐 까닭을 듣기 습관과 이어 말할 수 있다.',
    illustration: ART('a line of paper children whispering a message from ear to ear, the first child holding a card and the last child holding a slightly different card, with curious faces', '말이 바뀌었어요?', [
      { motif: 'cloud', x: 330, y: 70, s: 0.7 }, { motif: 'flower', x: 100, y: 228, color: 'lavender' }, { motif: 'tree', x: 400, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"오늘은 귓속말 전하기 놀이를 해요. 모둠 맨 앞 친구가 선생님 말을 듣고, 다음 친구에게 귓속말로 전해요. 맨 끝 친구가 들은 말을 크게 말해요." 놀이 전에 "말이 그대로 전해질까요?" 하고 예상하게 한다. 시연 단추로 처음 말과 같은 말이 바구니에 담기는 모습을 보여 준다.',
        student: '귓속말을 받을 때 귀를 어떻게 하면 잘 들릴지 생각해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'pick', basket: '처음 말과 같아요', cards: ['"사과 세 개"', '"사과 네 개"'], shuffle: false }, sequence: [{ pick: ['"사과 세 개"'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 모둠 귓속말 전하기 놀이', minutes: 13, tool: 'story',
            teacher: '모둠마다 맨 앞 친구에게 카드에 적힌 말(\'노란 우산을 쓴 강아지가 웃어요\')을 보여 준다. 전할 때는 한 번만 말하고, 받는 사람은 끝까지 들은 뒤 \'응\' 하고 고개를 끄덕인다. 맨 끝 친구가 크게 말하면 처음 말과 견주어 본다. "어디에서 바뀌었을까요?" 바뀐 모둠을 놀리지 않고 까닭을 찾게 한다. 두 번째 판은 말을 바꾸어 한 번 더 한다.',
            task: '모둠 귓속말 전하기 놀이를 두 번 하고, 놀이 차례와 바뀐 말을 카드로 정리해요.',
            levels: CARD_LV,
            items: [
              { prompt: '모둠 귓속말 전하기 놀이를 두 번 했으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '귓속말 전하기 놀이를 하는 차례대로 카드를 놓아 보세요.', toolOptions: { slots: ['1', '2', '3', '4'], cards: ['맨 앞 친구가 카드의 말을 봐요', '다음 친구에게 귓속말로 전해요', '끝까지 듣고 고개를 끄덕여요', '맨 끝 친구가 크게 말해요'] },
                target: { order: ['맨 앞 친구가 카드의 말을 봐요', '다음 친구에게 귓속말로 전해요', '끝까지 듣고 고개를 끄덕여요', '맨 끝 친구가 크게 말해요'] }, difficulty: 0.15,
                levels: { easy: { prompt: '귓속말 전하기 놀이 차례대로 세 카드를 놓아 보세요.', toolOptions: { slots: ['1', '2', '3'], cards: ['맨 앞 친구가 카드의 말을 봐요', '다음 친구에게 귓속말로 전해요', '맨 끝 친구가 크게 말해요'] }, target: { order: ['맨 앞 친구가 카드의 말을 봐요', '다음 친구에게 귓속말로 전해요', '맨 끝 친구가 크게 말해요'] } } } },
              { prompt: '처음 말은 "노란 우산을 쓴 강아지가 웃어요"예요. 맨 끝 친구 말에서 바뀐 곳에 들어갈 처음 낱말을 넣어 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'f1', who: '맨 끝', label: '"파란 우산을 쓴 강아지가 웃어요" → 처음 말은 ___ 우산이었어요.' }], cards: ['노란', '빨간', '파란'] },
                target: { fill: { f1: '노란' } }, difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 말이 바뀐 까닭 찾기', minutes: 14, tool: 'mindmap',
            teacher: '"말이 바뀐 모둠, 어디서 바뀌었는지 찾았나요? 왜 바뀌었을까요?" 대답을 듣고 카드로 정리한다. "말이 바뀐 건 누구 잘못일까요?" 하고 물으면 한 사람 탓이 아니라 듣는 습관을 고치면 된다는 쪽으로 이끈다. 다음 판에서 지킬 약속을 모둠마다 하나 정하게 한다.',
            task: '말이 바뀐 까닭과 그대로 전해진 까닭을 나누고, 처음 말과 같은 말을 찾아요.',
            levels: CARD_LV,
            items: [
              { prompt: '귓속말 놀이에서 말이 바뀐 까닭과 그대로 전해진 까닭으로 나누어 보세요.', toolOptions: { topic: '귓속말 놀이', slots: ['말이 바뀐 까닭', '그대로 전해진 까닭'], cards: ['끝까지 안 듣고 돌아섰어요', '받는 친구가 끝까지 들었어요', '주변이 시끄러웠어요', '천천히 또박또박 말했어요'] },
                target: { sort: { '말이 바뀐 까닭': ['끝까지 안 듣고 돌아섰어요', '주변이 시끄러웠어요'], '그대로 전해진 까닭': ['받는 친구가 끝까지 들었어요', '천천히 또박또박 말했어요'] } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['끝까지 안 듣고 돌아섰어요', '받는 친구가 끝까지 들었어요', '주변이 시끄러웠어요', '천천히 또박또박 말했어요', '모둠 이름이 별님이에요'] } } } },
              { prompt: '처음 말: "토끼가 당근 두 개를 먹었어요." 처음 말과 똑같이 전해진 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '처음 말과 같아요', cards: ['"토끼가 당근 두 개를 먹었어요"', '"토끼가 당근 세 개를 먹었어요"', '"거북이 당근 두 개를 먹었어요"'] },
                target: { pick: ['"토끼가 당근 두 개를 먹었어요"'] }, difficulty: 0.15,
                predict: { q: '한 낱말만 바뀌어도 다른 말이 될까요?', options: ['같은 말이에요', '다른 말이에요'], answer: 1 },
                conclude: '낱말 하나만 바뀌어도 뜻이 달라져요. 그래서 끝까지 듣고 그대로 전해요.' },
              { prompt: '다음 판에서 지킬 약속만 바구니에 담아 보세요.', toolOptions: { mode: 'pick', basket: '다음 판 약속', cards: ['말이 끝날 때까지 귀를 대고 있어요', '모르면 "한 번 더"라고 말해요', '빨리 전하려고 반만 들어요', '재미있게 말을 바꾸어 전해요'] },
                target: { pick: ['말이 끝날 때까지 귀를 대고 있어요', '모르면 "한 번 더"라고 말해요'] }, difficulty: 0.2 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"정한 약속을 지키고 셋째 판을 해 볼까요?" 짧은 말로 한 판 더 하고 그대로 전해진 모둠에 박수를 보낸다(2분). "생활에서 말을 전할 일이 언제 있을까요?" 하고 묻고, 다음 시간에는 선생님 심부름 말을 끝까지 듣고 전하는 연습을 한다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', basket: '처음 말과 같아요', cards: ['"곰이 꿀단지를 들고 가요"', '"곰이 물통을 들고 가요"', '"곰이 꿀단지를 두고 가요"'] }, prompt: '처음 말: "곰이 꿀단지를 들고 가요." 똑같이 전해진 말만 골라 보세요.', target: { pick: ['"곰이 꿀단지를 들고 가요"'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '귓속말이 잘 들리지 않았을 때 어떻게 하면 좋을까요?', options: ['들은 척하고 전해요', '"한 번 더 말해 줄래?" 하고 물어요', '내 마음대로 지어 전해요'], answer: 1, difficulty: 0.1, explain: '잘 못 들었을 때는 다시 물어야 바르게 전할 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '귓속말 전하기 놀이',
      items: [
        { type: 'table', prompt: '놀이 결과를 쓰세요.', columns: ['처음 말', '맨 끝 친구가 들은 말'], rows: 2 },
        { type: 'choice', prompt: '말이 그대로 전해지는 까닭에 ○ 하세요.', options: ['끝까지 들어요', '반만 들어요', '시끄럽게 떠들어요'], answer: '끝까지 들어요' },
        { type: 'blank', prompt: '빈칸을 채우세요.', text: '잘 못 들었을 때는 "____________ 말해 줄래?" 하고 물어요.', answer: '한 번 더' },
        { type: 'short', prompt: '우리 모둠이 다음 판에 지킬 약속을 쓰세요.' },
      ],
      easy: {
        note: '귀를 대고 끝까지 들어요.',
        items: [
          { type: 'choice', prompt: '잘 듣는 모습에 ○ 하세요.', options: ['끝까지 귀를 대요', '반만 듣고 돌아서요'], answer: '끝까지 귀를 대요' },
          { type: 'short', prompt: '처음 말을 쓰세요.' },
          { type: 'draw', prompt: '귓속말을 전하는 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '차례 카드가 세 장이고, 카드에 초록 테두리가 생겨요. 귓속말은 다섯 낱말 안쪽으로 해요.',
      base: '차례 카드 네 장을 놓고, 바뀐 까닭을 나누어요.',
      challenge: '상관없는 함정 카드가 섞여 있어요. 귓속말은 일곱 낱말 넘게 길게 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 바뀐 말을 전한 친구를 탓한다 → 한 사람이 아니라 듣는 습관 때문이라는 것을 짚고, 탓하는 말 대신 "다음엔 한 번 더 묻자"를 쓰게 한다. ② 재미로 일부러 말을 바꾼다 → 놀이 전에 바꾸지 않기 약속을 하고, 바꾸면 그 판은 다시 한다. ③ 귓속말이 커서 다른 모둠에 들린다 → 손으로 입을 가리고 작게 말하는 연습을 먼저 한다.',
  }));

  lessons.push(L(16, {
    title: '심부름 말 끝까지 듣고 그대로 전하기',
    objective: '어른이 부탁한 심부름 말을 끝까지 듣고, 무엇을 몇 개 어디로 가져갈지 빠짐없이 골라 그대로 전할 수 있다.',
    illustration: ART('a paper child carrying a small basket to the school nurse office with two bandages and an ice pack, a teacher waving from the classroom door', '심부름 말 전하기', [
      { motif: 'house', x: 110, y: 214, color: 'mint' }, { motif: 'house', x: 370, y: 216, color: 'rose', s: 0.9 }, { motif: 'flower', x: 240, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"심부름을 갔다가 무엇을 가져와야 할지 잊어버린 적이 있나요?" 두세 명의 경험을 듣는다. 교사가 "공책 두 권과 풀 하나를 가져다줄래요?"라고 말하고 한 학생이 해 보게 한다. 다 가져오면 "선생님 말을 끝까지 들어서 하나도 빠뜨리지 않았네요." 시연 단추로 심부름 물건을 바구니에 담는 모습을 보여 준다.',
        student: '심부름 말을 들을 때 손가락을 접으며 세는 방법을 따라 해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'pick', basket: '가져갈 것', cards: ['공책 두 권', '풀 하나', '가위'], shuffle: false }, sequence: [{ pick: ['공책 두 권', '풀 하나'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 심부름 말 듣고 가져갈 것 고르기', minutes: 13, tool: 'mindmap',
            teacher: '"심부름 말을 들을 때는 손가락을 접으며 세어요. 무엇을, 몇 개, 어디로." 교사가 문항의 심부름 말을 한 번 천천히 읽어 준다. 다 듣기 전에 고르기 시작하는 학생에게 "선생님 말이 끝났나요?" 하고 묻는다. 셋째 문항처럼 말 끝에 \'아, 그건 빼고\'가 붙으면 앞에서 들은 것이 바뀐다는 것을 짚는다.',
            task: '심부름 말을 끝까지 듣고, 가져갈 것과 가져가지 않을 것을 바르게 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '"보건실에서 반창고와 얼음주머니를 받아 오세요." 가져올 것만 바구니에 담아 보세요.', toolOptions: { mode: 'pick', basket: '가져올 것', cards: ['반창고', '얼음주머니', '체온계', '물티슈'] },
                target: { pick: ['반창고', '얼음주머니'] }, difficulty: 0.1 },
              { prompt: '"도서실에 그림책 두 권을 돌려주고, 새 책 한 권을 빌려 오세요." 할 일을 나누어 보세요.', toolOptions: { topic: '도서실 심부름', slots: ['가져갈 것', '가져올 것'], cards: ['돌려줄 그림책 두 권', '새로 빌릴 책 한 권'] },
                target: { sort: { '가져갈 것': ['돌려줄 그림책 두 권'], '가져올 것': ['새로 빌릴 책 한 권'] } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['돌려줄 그림책 두 권', '새로 빌릴 책 한 권', '내 필통'] } } } },
              { prompt: '"색종이, 풀, 가위를 가져오세요. 아, 가위는 빼고요." 끝까지 듣고 가져올 것만 골라 보세요.', toolOptions: { mode: 'pick', basket: '가져올 것', cards: ['색종이', '풀', '가위', '크레파스'] },
                target: { pick: ['색종이', '풀'] }, difficulty: 0.2,
                predict: { q: '말 끝의 "가위는 빼고요"를 못 들으면 어떻게 될까요?', options: ['바르게 가져와요', '가위까지 가져와요'], answer: 1 },
                conclude: '말 끝에 바뀌는 것이 있어서 심부름 말은 끝까지 들어야 해요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 심부름 말 그대로 전하기 놀이', minutes: 14, tool: 'story',
            teacher: '짝 놀이를 한다. 한 사람이 \'선생님\'이 되어 심부름 카드(예: \'옆 반 선생님께 출석부를 드리고, 고맙다고 말씀드리세요\')를 읽어 주면, 다른 사람이 끝까지 듣고 "출석부를 드리고 고맙다고 말씀드리라는 거지요?" 하고 옮긴 뒤 교실 안 정해진 자리까지 걸어가 전하는 흉내를 낸다. 세 장씩 바꾼다. 전할 때 \'누가 보냈는지\'를 꼭 먼저 말하게 한다.',
            task: '짝과 심부름 카드를 읽어 주고 옮겨 말한 뒤, 전하는 말을 빈칸에 알맞게 넣어요.',
            levels: CARD_LV,
            items: [
              { prompt: '짝과 심부름 카드 세 장씩을 읽어 주고 옮겨 말하며 전해 보았으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '선생님이 "옆 반 선생님께 출석부를 드리고, 고맙다고 말씀드리세요"라고 했어요. 전하는 말을 완성해 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'f1', who: '나', label: '1반 선생님이 ___을 드리래요.' }, { id: 'f2', who: '나', label: '그리고 ___고 말씀하셨어요.' }], cards: ['출석부', '고맙다', '공책', '미안하다'] },
                target: { fill: { f1: '출석부', f2: '고맙다' } }, difficulty: 0.2,
                levels: { easy: { toolOptions: { cards: ['출석부', '고맙다', '공책'] } } } },
              { prompt: '엄마가 "할머니께 내일 세 시에 간다고 전해 줘"라고 하셨어요. 전하는 말을 완성해 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'f1', who: '나', label: '할머니, 엄마가 ___ 세 시에 간대요.' }], cards: ['내일', '오늘', '다음 주'] },
                target: { fill: { f1: '내일' } }, difficulty: 0.15 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"오늘 심부름 말을 들을 때 손가락으로 무엇을 세었나요?" 무엇을·몇 개·어디로를 함께 말해 본다. 이 시간으로 듣기 공부(1~16차시)를 마치고, 다음 시간부터는 주변에서 들리는 소리를 귀 기울여 들어 본다고 알린다. "끝까지 듣는 귀로 이번에는 소리를 들어 봐요."',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', basket: '가져올 것', cards: ['우유 두 개', '빨대', '숟가락'] }, prompt: '"급식실에서 우유 두 개와 빨대를 받아 오세요." 가져올 것만 골라 보세요.', target: { pick: ['우유 두 개', '빨대'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '"연필 두 자루를 가져와요. 아니다, 세 자루요." 몇 자루를 가져가야 할까요?', options: ['두 자루', '세 자루', '다섯 자루'], answer: 1, difficulty: 0.2, explain: '말 끝에서 세 자루로 바뀌었어요. 끝까지 들어야 알 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '심부름 말 끝까지 듣기',
      items: [
        { type: 'table', prompt: '심부름 말을 듣고 쓰세요. "교무실에 이 종이 한 장을 갖다드리세요."', columns: ['무엇을', '몇 개', '어디로'], rows: 1 },
        { type: 'choice', prompt: '"풀과 가위를 가져와요. 가위는 빼고요." 가져갈 것에 ○ 하세요.', options: ['풀', '가위', '풀과 가위'], answer: '풀' },
        { type: 'blank', prompt: '전하는 말을 완성하세요.', text: '______ 선생님이 ______을(를) 가져오라고 하셨어요.' },
        { type: 'short', prompt: '집에서 심부름 말을 들을 때 지킬 약속을 쓰세요.' },
      ],
      easy: {
        note: '손가락을 접으며 세어요.',
        items: [
          { type: 'choice', prompt: '"공책 한 권을 가져와요." 가져갈 것에 ○ 하세요.', options: ['공책 한 권', '공책 두 권'], answer: '공책 한 권' },
          { type: 'short', prompt: '심부름 말을 들을 때 세는 것 하나를 쓰세요.' },
          { type: 'draw', prompt: '심부름을 가는 내 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드에 초록 테두리가 생기고, 빈칸 카드가 한 장 줄어요. 심부름 말을 한 번 더 들려줘요.',
      base: '심부름 말을 끝까지 듣고 골라요. 짝과 세 장씩 전해요.',
      challenge: '상관없는 함정 카드가 섞여 있어요. 짝 놀이에서 말 끝이 바뀌는 심부름 카드를 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 첫 낱말만 듣고 출발한다 → 손가락 세 개(무엇을·몇 개·어디로)를 다 접은 뒤 움직이게 한다. ② 말 끝에서 바뀐 것을 놓친다 → \'아, 아니다\', \'빼고\' 같은 말을 신호로 알려 준다. ③ 전할 때 누가 보냈는지 빠뜨린다 → 전하는 말 틀(\'○○ 선생님이 ~래요\')을 붙여 둔다. 실제 심부름은 교실 안에서 흉내만 내고, 교실 밖으로 혼자 보내지 않는다.',
  }));

  // ───────────────────────── 17~20차시: 긴·짧은 소리, 높은·낮은 소리(소리의 특징 이해) ─────────────────────────

  lessons.push(L(17, {
    title: '긴 소리 짧은 소리 손짓으로 나누기',
    objective: '들려주는 소리를 듣고 긴 소리는 팔을 쭉 펴고 짧은 소리는 주먹을 톡 내밀어 나누며, 들은 차례대로 긴·짧은 소리 블록을 놓을 수 있다.',
    illustration: ART('paper children listening with hands behind their ears, one stretching an arm wide for a long sound and one tapping a small fist for a short sound, sound ribbons long and short floating around', '긴 소리, 짧은 소리', [
      { motif: 'bird', x: 120, y: 80 }, { motif: 'wave', x: 380, y: 236, s: 0.6 }, { motif: 'tree', x: 400, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"지금까지는 친구 말을 끝까지 들었지요? 오늘은 그 귀로 소리를 들어요." 트라이앵글을 한 번 치고 울림이 끝날 때까지 기다린 뒤, 캐스터네츠를 \'짝\' 친다. "두 소리는 무엇이 달랐나요?" 긴 소리는 팔을 옆으로 쭉 펴고, 짧은 소리는 주먹을 톡 내미는 손짓을 정한다. 시연 단추로 \'바람 "휘이이잉~"\' 카드가 긴 소리 가지로 가는 것을 보여 준다.',
        student: '"아~~~" 하고 길게, "앗!" 하고 짧게 소리를 내 봐요.',
        demo: { tool: 'mindmap', options: { topic: '소리의 길이', slots: ['긴 소리', '짧은 소리'], cards: ['바람 "휘이이잉~"', '손뼉 "짝"'], shuffle: false }, sequence: [{ sort: { '긴 소리': ['바람 "휘이이잉~"'], '짧은 소리': ['손뼉 "짝"'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 듣고 손짓으로 나누기', minutes: 12, tool: 'mindmap',
            teacher: '교사가 트라이앵글·캐스터네츠·목소리로 소리를 하나씩 낸다. 학생은 듣고 손짓으로 나타낸다. "팔이 쭉 펴졌나요, 주먹이 톡 나왔나요?" 그다음 화면 카드로 정리한다. 소리 흉내말의 \'~\'(물결)가 길게 이어지는 소리라는 것을 알려 준다. 큰 소리를 긴 소리로 헷갈리는 학생에게는 아주 작게 길게 "으~~~" 하고 들려준다.',
            task: '선생님이 내는 소리를 듣고 손짓으로 나타낸 뒤, 소리 카드를 긴 소리와 짧은 소리로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '선생님이 내는 소리를 듣고 긴 소리는 팔을 쭉, 짧은 소리는 주먹을 톡 내밀었으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '소리 카드를 긴 소리와 짧은 소리로 나누어 보세요.', toolOptions: { topic: '소리의 길이', slots: ['긴 소리', '짧은 소리'], cards: ['배 고동 "뿌우우웅~"', '문 두드림 "똑"', '사이렌 "애애애앵~"', '공 튀는 "통"'] },
                target: { sort: { '긴 소리': ['배 고동 "뿌우우웅~"', '사이렌 "애애애앵~"'], '짧은 소리': ['문 두드림 "똑"', '공 튀는 "통"'] } }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['배 고동 "뿌우우웅~"', '문 두드림 "똑"', '사이렌 "애애애앵~"', '공 튀는 "통"', '빨간 사과'] } } } },
              { prompt: '짧은 소리만 바구니에 담아 보세요.', toolOptions: { mode: 'pick', basket: '짧은 소리', cards: ['연필 내려놓는 "톡"', '종 울림 "디이이잉~"', '박수 한 번 "짝"', '노래 "라아아아~"'] },
                target: { pick: ['연필 내려놓는 "톡"', '박수 한 번 "짝"'] }, difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 들은 차례대로 소리 블록 놓기', minutes: 15, tool: 'keyboard',
            teacher: '"하얀 동그라미 음표는 2박, 길게 이어지는 소리예요. 까만 음표는 1박, 짧은 소리예요." 칠판에 두 블록을 크게 붙이고 손짓과 짝 짓는다. 리듬 듣기를 함께 한 번 누르고 손짓으로 따라 한 뒤 블록을 놓게 한다. 소리는 리듬 듣기를 누를 때만 나오니, 교실이 시끄러우면 한 모둠씩 차례로 듣게 한다.',
            task: '리듬 듣기를 누르고 손짓으로 따라 한 뒤, 들은 차례대로 긴 소리·짧은 소리 블록을 놓아요.',
            levels: RHY_LV,
            items: [
              { prompt: '리듬 듣기를 누르고 들은 차례대로 긴 소리·짧은 소리 블록을 놓아 보세요.', toolOptions: { measures: 1, pattern: ['h', 'q', 'q'] }, target: { rhythm: ['h', 'q', 'q'] }, difficulty: 0.15,
                hints: ['리듬을 다시 듣고 팔을 쭉 펴는 소리와 주먹을 톡 내미는 소리를 차례로 손짓해요.', '첫 소리가 길었는지 짧았는지 다시 들어 봐요.', '처음은 긴 소리 하나, 그 뒤는 짧은 소리 두 개예요.'] },
              { prompt: '이번 리듬을 듣고 블록을 놓아 보세요. 긴 소리가 끝에 있어요.', toolOptions: { measures: 1, pattern: ['q', 'q', 'h'] }, target: { rhythm: ['q', 'q', 'h'] }, difficulty: 0.15,
                hints: ['짧은 소리를 몇 번 들었는지 손가락으로 세어 봐요.', '긴 소리가 끝에 한 번 있어요. 그 앞의 짧은 소리 수를 다시 세요.', '짧은 소리 두 개, 그 뒤 긴 소리 하나예요.'] },
              { prompt: '두 마디 리듬을 듣고 블록을 놓아 보세요.', toolOptions: { measures: 2, pattern: ['h', 'h', 'q', 'q', 'h'] }, target: { rhythm: ['h', 'h', 'q', 'q', 'h'] }, difficulty: 0.3,
                hints: ['한 마디씩 끊어서 듣고, 마디마다 긴 소리와 짧은 소리를 손짓해요.', '첫 마디는 긴 소리만, 둘째 마디는 짧은 소리가 먼저 나와요. 다시 들어 봐요.', '첫 마디: 긴, 긴. 둘째 마디: 짧은, 짧은, 긴.'],
                levels: { easy: { prompt: '리듬을 듣고 블록을 놓아 보세요. 긴 소리로 시작해요.', toolOptions: { measures: 1 }, target: { rhythm: ['h', 'h'] } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"오늘 교실에서 들린 소리 가운데 긴 소리는 무엇이었나요?" 두세 명의 대답을 듣고 손짓으로 함께 나타낸다. 출구 질문은 소리 카드를 읽고 고르면 된다고 말한다. 다음 시간에는 높은 소리와 낮은 소리를 가려 본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '소리의 길이', slots: ['긴 소리', '짧은 소리'], cards: ['뱃고동처럼 "부우웅~"', '발 구르기 "쿵"'] }, prompt: '두 소리 카드를 긴 소리와 짧은 소리로 나누어 보세요.', target: { sort: { '긴 소리': ['뱃고동처럼 "부우웅~"'], '짧은 소리': ['발 구르기 "쿵"'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '긴 소리를 들었을 때 하기로 한 손짓은 무엇일까요?', options: ['팔을 옆으로 쭉 펴요', '주먹을 톡 내밀어요'], answer: 0, difficulty: 0.05, explain: '긴 소리는 팔을 쭉, 짧은 소리는 주먹을 톡으로 나타내요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '긴 소리, 짧은 소리',
      items: [
        { type: 'table', prompt: '교실에서 들은 소리를 쓰세요.', columns: ['긴 소리', '짧은 소리'], rows: 2 },
        { type: 'choice', prompt: '짧은 소리에 ○ 하세요.', options: ['손뼉 "짝"', '바람 "휘이잉~"', '종 "디잉~"'], answer: '손뼉 "짝"' },
        { type: 'figure', prompt: '선생님이 들려주는 리듬을 듣고 빈 마디에 긴 소리는 ━, 짧은 소리는 ● 로 그리세요.', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 1 }, figures: [{ caption: '들은 리듬: ____________' }] },
        { type: 'draw', prompt: '긴 소리를 내는 것과 짧은 소리를 내는 것을 하나씩 그려 보세요.' },
      ],
      easy: {
        note: '팔이 쭉 = 긴 소리, 주먹 톡 = 짧은 소리',
        items: [
          { type: 'choice', prompt: '긴 소리에 ○ 하세요.', options: ['"아~~~"', '"앗!"'], answer: '"아~~~"' },
          { type: 'short', prompt: '교실에서 들은 짧은 소리를 하나 쓰세요.' },
          { type: 'draw', prompt: '긴 소리를 내는 것을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '리듬 블록은 긴 소리와 짧은 소리 두 가지뿐이고, 마디마다 박 수가 보여요. 셋째 리듬은 한 마디예요.',
      base: '리듬을 듣고 블록 두 가지로 놓아요.',
      challenge: '쉼표 블록이 섞여 있어 헷갈리지 않게 골라야 하고, 소리와 상관없는 함정 카드가 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 큰 소리를 긴 소리라고 한다 → 아주 작게 길게, 아주 크게 짧게 소리를 내어 견주게 한다. ② 음표 모양을 외우기 어려워한다 → 블록에 팔·주먹 그림 붙임쪽지를 붙여 손짓과 잇는다. ③ 리듬 듣기를 계속 눌러 교실이 시끄럽다 → 모둠별로 차례를 정하거나 이어폰을 쓴다. 이 차시 활동지 리듬은 교사가 직접 손뼉으로 들려준다.',
  }));

  lessons.push(L(18, {
    title: '높은 소리 낮은 소리 건반으로 찾기',
    objective: '높은 소리와 낮은 소리를 듣고 가려 이름을 대며, 종이 건반에서 오른쪽이 높은 소리, 왼쪽이 낮은 소리라는 것을 써서 들은 소리를 칠 수 있다.',
    illustration: ART('a long paper piano keyboard with a tiny paper bird sitting on the right high keys and a big paper bear sitting on the left low keys, musical notes floating', '높은 소리, 낮은 소리', [
      { motif: 'bird', x: 380, y: 80 }, { motif: 'tree', x: 90, y: 214 }, { motif: 'flower', x: 300, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"병아리는 \'삐약\', 소는 \'음매~\' 하고 울어요. 두 소리를 흉내 내 볼까요? 어느 쪽이 더 높아요?" 목소리로 흉내 내며 손을 머리 위(높은 소리)와 배 앞(낮은 소리)으로 움직이는 손짓을 정한다. 실로폰이나 피아노가 있으면 오른쪽 끝과 왼쪽 끝을 쳐서 들려준다. 시연 단추로 \'병아리\' 카드가 높은 소리 가지로 가는 것을 보여 준다.',
        student: '목소리로 높은 "아~"와 낮은 "아~"를 내 봐요.',
        demo: { tool: 'mindmap', options: { topic: '소리의 높낮이', slots: ['높은 소리', '낮은 소리'], cards: ['병아리 "삐약"', '소 "음매~"'], shuffle: false }, sequence: [{ sort: { '높은 소리': ['병아리 "삐약"'], '낮은 소리': ['소 "음매~"'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 높은 소리와 낮은 소리 가리기', minutes: 12, tool: 'mindmap',
            teacher: '"이 소리를 흉내 내 보면 손이 머리 위로 가나요, 배 앞에 있나요?" 카드마다 목소리로 흉내 내고 손짓한 뒤 놓게 한다. 크게 소리치는 것을 높은 소리로 헷갈리면 "크게 \'음매~\' 해도 낮은 소리지요?" 하고 들려준다. 짝과 높은 소리·낮은 소리를 번갈아 내 보는 놀이로 마무리한다.',
            task: '소리 카드를 목소리로 흉내 내며 손짓한 뒤, 높은 소리와 낮은 소리로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '소리 카드를 높은 소리와 낮은 소리로 나누어 보세요.', toolOptions: { topic: '소리의 높낮이', slots: ['높은 소리', '낮은 소리'], cards: ['호루라기 "삑"', '큰북 "둥"', '새 "짹짹"', '트럭 엔진 "부릉부릉"'] },
                target: { sort: { '높은 소리': ['호루라기 "삑"', '새 "짹짹"'], '낮은 소리': ['큰북 "둥"', '트럭 엔진 "부릉부릉"'] } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['호루라기 "삑"', '큰북 "둥"', '새 "짹짹"', '트럭 엔진 "부릉부릉"', '노란 바나나'] } } } },
              { prompt: '높은 소리만 바구니에 담아 보세요.', toolOptions: { mode: 'pick', basket: '높은 소리', cards: ['모기 "앵~"', '곰 울음 "으르렁"', '작은 종 "딸랑"', '천둥 "우르릉"'] },
                target: { pick: ['모기 "앵~"', '작은 종 "딸랑"'] }, difficulty: 0.15 },
              { prompt: '짝과 목소리로 높은 소리와 낮은 소리를 번갈아 내고 손짓으로 맞혀 보았으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 종이 건반으로 높은 소리 낮은 소리 치기', minutes: 15, tool: 'keyboard',
            teacher: '"건반을 왼쪽 끝부터 오른쪽 끝까지 차례로 눌러 봐요. 소리가 어떻게 바뀌나요?" 오른쪽으로 갈수록 높아진다는 것을 학생 입으로 말하게 한다. 가락 듣기를 누르고 손을 머리 위·배 앞으로 움직이며 들은 뒤 건반을 친다. 계이름을 몰라도 \'오른쪽 끝\', \'왼쪽 끝\'으로 찾으면 된다고 말해 준다.',
            task: '건반을 왼쪽에서 오른쪽으로 눌러 높낮이를 알아본 뒤, 가락을 듣고 따라 치거나 높은·낮은 소리로 가락을 지어요.',
            levels: KEY_LV,
            items: [
              { prompt: '가락 듣기를 누르고 낮은 소리, 높은 소리 두 음을 들은 차례대로 쳐 보세요.', toolOptions: { melody: ['도', '높은도'] }, target: { notes: ['도', '높은도'] }, difficulty: 0.15,
                hints: ['들으면서 손을 배 앞이나 머리 위로 움직여요. 건반은 오른쪽으로 갈수록 높은 소리예요.', '첫 소리가 낮았는지 높았는지 다시 들어 봐요.', '첫 소리는 왼쪽 끝 건반, 둘째 소리는 오른쪽 끝 건반이에요.'] },
              { prompt: '가락을 듣고 세 음을 따라 쳐 보세요. 높은 소리로 시작해요.', toolOptions: { melody: ['높은도', '도', '높은도'] }, target: { notes: ['높은도', '도', '높은도'] }, difficulty: 0.2,
                hints: ['세 소리를 하나씩 손짓하며 들어요. 높은 소리는 오른쪽, 낮은 소리는 왼쪽이에요.', '가운데 소리가 높았는지 낮았는지 다시 들어 봐요.', '오른쪽 끝, 왼쪽 끝, 다시 오른쪽 끝이에요.'] },
              { prompt: '작은 새가 노래해요. 건반 오른쪽 네 개 가운데서만 골라 높은 소리 세 음을 지어 보세요.', target: { compose: { length: 3, only: ['솔', '라', '시', '높은도'] } }, difficulty: 0.2,
                hints: ['새는 높은 소리로 노래해요. 건반의 어느 쪽이 높은 소리였는지 떠올려요.', '왼쪽 건반을 쳤다면 지우고 오른쪽 건반으로 바꾸어요.', '오른쪽 끝에서 네 개 안에서 아무 건반이나 세 번 쳐요.'] },
              { prompt: '곰이 쿵쿵 걸어요. 건반 왼쪽 세 개 가운데서만 골라 낮은 소리 네 음을 지어 보세요.', target: { compose: { length: 4, only: ['도', '레', '미'] } }, difficulty: 0.25,
                hints: ['곰의 발소리는 낮은 소리예요. 낮은 소리 건반은 어느 쪽인지 떠올려요.', '오른쪽 건반을 쳤다면 지우고 왼쪽 건반으로 바꾸어요.', '왼쪽 끝에서 세 개 안에서 네 번 쳐요.'] },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"건반 오른쪽은 어떤 소리였나요? 왼쪽은요?" 손짓과 함께 대답하게 한다. "크게 소리치면 높은 소리가 될까요?" 하고 물어 생각을 듣고, 답은 20차시에 직접 소리를 내 보며 알아본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'keyboard', options: { from: '도', to: '높은도', melody: ['높은도', '도'] }, prompt: '가락을 듣고 높은 소리, 낮은 소리 두 음을 들은 차례대로 쳐 보세요.', target: { notes: ['높은도', '도'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '종이 건반에서 높은 소리가 나는 쪽은 어디일까요?', options: ['왼쪽', '오른쪽'], answer: 1, difficulty: 0.1, explain: '건반은 오른쪽으로 갈수록 높은 소리가 나요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '높은 소리, 낮은 소리',
      items: [
        { type: 'table', prompt: '높은 소리와 낮은 소리를 내는 것을 쓰세요.', columns: ['높은 소리', '낮은 소리'], rows: 2 },
        { type: 'choice', prompt: '낮은 소리에 ○ 하세요.', options: ['큰북 "둥"', '호루라기 "삑"', '병아리 "삐약"'], answer: '큰북 "둥"' },
        { type: 'figure', prompt: '건반에서 높은 소리가 나는 쪽 끝에 ○, 낮은 소리가 나는 쪽 끝에 △ 하세요.', tool: 'keyboard', options: { from: '도', to: '높은도', names: 'none' }, figures: [{ caption: '' }] },
        { type: 'draw', prompt: '높은 소리를 내는 동물과 낮은 소리를 내는 동물을 그려 보세요.' },
      ],
      easy: {
        note: '손이 머리 위 = 높은 소리, 배 앞 = 낮은 소리',
        items: [
          { type: 'choice', prompt: '높은 소리에 ○ 하세요.', options: ['새 "짹짹"', '소 "음매~"'], answer: '새 "짹짹"' },
          { type: 'short', prompt: '낮은 소리를 내는 것을 하나 쓰세요.' },
          { type: 'draw', prompt: '높은 소리를 내는 동물을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '가락을 듣는 동안 건반이 비쳐요. 카드에는 초록 테두리가 생겨요.',
      base: '건반 계이름이 보이고, 귀로 듣고 쳐요.',
      challenge: '건반의 계이름이 가려져 오른쪽·왼쪽 자리로만 찾고, 함정 카드가 하나 더 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 큰 소리를 높은 소리라고 한다(큰 소리 = 높은 소리 오개념) → 크게 "음매~", 작게 "삐약"을 들려주고 손짓으로 높낮이만 따로 가리게 한다. 20차시에서 다시 다룬다. ② 건반 왼쪽·오른쪽을 헷갈린다 → 건반 오른쪽 끝에 새, 왼쪽 끝에 곰 붙임쪽지를 붙인다. ③ 계이름을 읽어야 한다고 여긴다 → 이 차시는 자리(오른쪽·왼쪽)로 찾으면 된다고 말해 준다.',
  }));

  lessons.push(L(19, {
    title: '숲속 음악회 이야기에 소리 붙이기',
    objective: '숲속 동물 이야기를 듣고 동물마다 어울리는 길이와 높낮이의 소리를 골라, 건반과 리듬 블록과 목소리로 나타낼 수 있다.',
    illustration: ART('a paper forest stage where a bird sings high on a branch, a bear hums low on the ground and a rabbit hops with short taps, paper music notes of different sizes', '숲속 음악회', [
      { motif: 'tree', x: 90, y: 212 }, { motif: 'tree', x: 400, y: 212, color: 'mint' }, { motif: 'bird', x: 300, y: 80 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '교사가 직접 지은 짧은 이야기를 들려준다. "숲속에 음악회가 열렸어요. 작은 새가 나뭇가지에서 높고 짧게 \'삐삐\' 노래했어요. 곰은 낮고 길게 \'우우웅~\' 답했어요. 토끼는 짧게 \'톡톡\' 뛰며 박자를 맞췄어요." 이야기를 들으며 손짓(높은·낮은, 긴·짧은)으로 따라 하게 한다. 시연 단추로 동물과 소리 특징이 이어지는 것을 보여 준다.',
        student: '이야기 속 동물 가운데 하나를 골라 그 소리를 흉내 내 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '숲속 음악회', slots: [{ id: 's1', label: '작은 새' }], cards: ['높고 짧게 "삐삐"', '낮고 길게 "우우웅~"'], shuffle: false }, sequence: [{ match: { s1: '높고 짧게 "삐삐"' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 동물과 소리 특징 짝 짓기', minutes: 10, tool: 'mindmap',
            teacher: '"작은 새는 몸이 작고 가벼워요. 어떤 소리가 어울릴까요?" 동물의 몸과 움직임을 떠올리며 소리를 고르게 한다. 정답 칸에 놓은 뒤에는 목소리로 그 소리를 꼭 내 보게 한다. 셋째 문항에서는 이야기 차례를 떠올리게 한다.',
            task: '이야기 속 동물과 어울리는 소리 특징을 잇고, 음악회 차례대로 소리 카드를 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '이야기 속 동물과 그 동물이 낸 소리를 이어 보세요.', toolOptions: { mode: 'match', topic: '숲속 음악회', slots: [{ id: 's1', label: '작은 새' }, { id: 's2', label: '곰' }, { id: 's3', label: '토끼' }], cards: ['높고 짧게 "삐삐"', '낮고 길게 "우우웅~"', '짧게 "톡톡"'] },
                target: { match: { s1: '높고 짧게 "삐삐"', s2: '낮고 길게 "우우웅~"', s3: '짧게 "톡톡"' } }, difficulty: 0.15,
                levels: { easy: { prompt: '작은 새와 곰이 낸 소리를 이어 보세요.', toolOptions: { slots: [{ id: 's1', label: '작은 새' }, { id: 's2', label: '곰' }], cards: ['높고 짧게 "삐삐"', '낮고 길게 "우우웅~"'] }, target: { match: { s1: '높고 짧게 "삐삐"', s2: '낮고 길게 "우우웅~"' } } } } },
              { prompt: '숲속 음악회에서 소리가 난 차례대로 카드를 놓아 보세요.', toolOptions: { mode: 'order', topic: '음악회 차례', slots: ['처음', '가운데', '끝'], cards: ['새가 높고 짧게 노래해요', '곰이 낮고 길게 답해요', '토끼가 짧게 톡톡 뛰어요'] },
                target: { order: ['새가 높고 짧게 노래해요', '곰이 낮고 길게 답해요', '토끼가 짧게 톡톡 뛰어요'] }, difficulty: 0.15 },
              { prompt: '음악회에 개구리가 왔어요. 개구리는 낮고 짧게 "개굴"이에요. 낮은 소리 동물만 골라 보세요.', toolOptions: { mode: 'pick', basket: '낮은 소리 동물', cards: ['곰 "우우웅~"', '개구리 "개굴"', '작은 새 "삐삐"', '병아리 "삐약"'] },
                target: { pick: ['곰 "우우웅~"', '개구리 "개굴"'] }, difficulty: 0.2 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 건반과 블록으로 음악회 소리 만들기', minutes: 17, tool: 'keyboard',
            teacher: '"코끼리가 높은 언덕에서 쿵쿵 내려와요. 소리는 높은 데서 낮은 데로 갈까요, 낮은 데서 높은 데로 갈까요?" 가락 듣기를 누르기 전에 예상하게 한다. 리듬 문항은 토끼(짧은 소리)와 거북(긴 소리) 걸음을 손짓으로 먼저 해 본다. 다 만든 모둠은 이야기 차례대로 건반·손뼉·목소리로 이어 연주해 보고, 마지막 4분에 두 모둠이 서로에게 들려준다.',
            task: '이야기 속 동물의 소리를 건반 가락과 리듬 블록으로 만들고, 모둠이 차례대로 이어 연주해요.',
            levels: KEY_LV,
            items: [
              { prompt: '코끼리가 언덕에서 내려와요. 가락 듣기를 누르고 들은 네 음을 차례대로 쳐 보세요.', toolOptions: { melody: ['높은도', '솔', '미', '도'] }, target: { notes: ['높은도', '솔', '미', '도'] }, difficulty: 0.3,
                predict: { q: '소리는 어느 쪽으로 갈까요?', options: ['높은 데서 낮은 데로', '낮은 데서 높은 데로'], answer: 0 },
                conclude: '언덕을 내려오듯 소리도 높은 데서 낮은 데로 내려갔어요.',
                hints: ['들으면서 손을 머리 위에서 배 앞으로 천천히 내려 봐요.', '소리가 내려갈 때 건반은 오른쪽에서 왼쪽으로 가요. 다시 들어 봐요.', '오른쪽 끝에서 시작해 한 칸씩 건너뛰며 왼쪽 끝까지 내려와요.'] },
              { prompt: '토끼가 깡충 뛰어요. 리듬 블록 고르개를 써서 짧은 소리 네 번으로 한 마디를 채워 보세요.', toolOptions: { mode: 'rhythm', measures: 1, blocks: ['q', 'h'] }, target: { rhythm: ['q', 'q', 'q', 'q'] }, difficulty: 0.15,
                levels: { easy: { toolOptions: { showBeats: true } }, challenge: { prompt: '토끼가 깡충깡충 뛰다 쉬어요. 짧은 소리 세 번 뒤에 쉼표 하나로 한 마디를 채워 보세요.', toolOptions: { blocks: ['q', 'h', 'qr'] }, target: { rhythm: ['q', 'q', 'q', 'qr'] } } },
                hints: ['토끼 걸음은 주먹을 톡 내미는 짧은 소리예요. 한 마디에 몇 번 들어갈지 세어 봐요.', '긴 소리 블록이 있으면 빼고 짧은 소리 블록으로 바꾸어요.', '짧은 소리 블록 네 개를 놓아요.'] },
              { prompt: '거북이 느릿느릿 걸어요. 긴 소리 두 번으로 한 마디를 채워 보세요.', toolOptions: { mode: 'rhythm', measures: 1, blocks: ['q', 'h'] }, target: { rhythm: ['h', 'h'] }, difficulty: 0.15,
                levels: { easy: { toolOptions: { showBeats: true } } },
                hints: ['거북 걸음은 팔을 쭉 펴는 긴 소리예요.', '짧은 소리 블록이 있으면 빼고 긴 소리 블록으로 바꾸어요.', '긴 소리 블록 두 개를 놓아요.'] },
              { prompt: '모둠이 이야기 차례대로 건반·손뼉·목소리로 이어 연주하고 다른 모둠에게 들려주었으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"다른 모둠 연주에서 곰 소리는 어떻게 났나요? 우리 모둠과 같았나요?" 두세 명이 말하게 한다. 같은 동물이어도 모둠마다 소리를 다르게 만들 수 있다는 것을 짚는다. 다음 시간에는 큰 소리와 높은 소리가 같은지 직접 소리를 내 보며 알아본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '숲속 음악회', slots: [{ id: 'e1', label: '쥐' }, { id: 'e2', label: '코끼리' }], cards: ['높고 짧게 "찍찍"', '낮고 길게 "뿌우우~"'] }, prompt: '음악회에 온 동물과 그 동물이 낸 소리를 이어 보세요.', target: { match: { e1: '높고 짧게 "찍찍"', e2: '낮고 길게 "뿌우우~"' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '느릿느릿 걷는 거북 걸음에 어울리는 소리는 무엇일까요?', options: ['긴 소리', '짧은 소리'], answer: 0, difficulty: 0.1, explain: '천천히 이어지는 걸음은 길게 이어지는 소리와 어울려요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '숲속 음악회',
      items: [
        { type: 'table', prompt: '동물의 소리를 쓰세요.', columns: ['동물', '높은/낮은', '긴/짧은'], cells: [['작은 새', '', ''], ['곰', '', ''], ['토끼', '', '']] },
        { type: 'choice', prompt: '코끼리가 언덕을 내려올 때 소리는 어떻게 될까요?', options: ['높은 데서 낮은 데로', '낮은 데서 높은 데로'], answer: '높은 데서 낮은 데로' },
        { type: 'short', prompt: '음악회에 부르고 싶은 동물과 그 동물의 소리를 쓰세요.' },
        { type: 'draw', prompt: '숲속 음악회 모습을 그려 보세요.' },
      ],
      easy: {
        note: '몸이 작은 동물은 높은 소리, 큰 동물은 낮은 소리가 많아요.',
        items: [
          { type: 'choice', prompt: '곰의 소리에 ○ 하세요.', options: ['낮은 소리', '높은 소리'], answer: '낮은 소리' },
          { type: 'choice', prompt: '토끼가 뛰는 소리에 ○ 하세요.', options: ['짧은 소리', '긴 소리'], answer: '짧은 소리' },
          { type: 'draw', prompt: '음악회에 온 동물을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '짝 잇기가 두 쌍이고, 가락을 듣는 동안 건반이 비쳐요. 리듬 마디마다 박 수가 보여요.',
      base: '세 동물의 소리를 잇고, 건반과 블록으로 소리를 만들어요.',
      challenge: '건반 계이름이 가려지고, 토끼 리듬에 쉼표를 넣어 만들어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 몸이 크면 늘 큰 소리라고 여긴다 → 크기(세기)와 높낮이를 손짓으로 따로 나타내게 한다. ② 가락이 내려가는 것을 듣지 못한다 → 손을 머리 위에서 배 앞으로 내리며 함께 듣는다. ③ 모둠 연주가 시끄러워진다 → 한 동물씩 차례로 소리 내고 나머지는 손을 무릎에 둔다. 이야기는 교사가 직접 지은 것이다.',
  }));

  lessons.push(L(20, {
    title: '큰 소리와 높은 소리 견주어 보기',
    objective: '같은 높이의 소리를 크게, 작게 내 보고 크기와 높낮이가 다르다는 것을 알아, 소리를 높고 작은 소리와 낮고 큰 소리로 가를 수 있다.',
    illustration: ART('a paper xylophone and a paper drum side by side, a child tapping the same xylophone bar softly and loudly while sound ribbons grow bigger but stay at the same height', '크기와 높이는 달라요', [
      { motif: 'star', x: 120, y: 84, s: 0.6 }, { motif: 'flower', x: 380, y: 228 }, { motif: 'cloud', x: 300, y: 70, s: 0.7 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"18차시에 \'크게 소리치면 높은 소리가 될까?\' 하고 물었지요. 오늘 직접 알아봐요." 실로폰(또는 피아노)의 같은 건반 하나를 아주 작게, 아주 크게 친다. "소리가 커졌나요, 높아졌나요?" 손을 머리 위로 올리는 학생이 있으면 한 번 더 들려준다. 크기는 손을 넓게 벌리고, 높이는 손을 위아래로 움직이는 손짓을 따로 정한다.',
        student: '"아" 소리를 같은 높이로 작게 냈다가 크게 내 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'pick', basket: '같은 건반을 세게 치면', cards: ['소리가 커져요', '소리가 높아져요'], shuffle: false }, sequence: [{ pick: ['소리가 커져요'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 크게 내도 높이는 그대로', minutes: 12, tool: 'keyboard',
            teacher: '모둠마다 실로폰이나 컵 실로폰(물 높이가 다른 유리컵)을 하나씩 나눈다. "같은 막대를 살살, 세게 쳐 봐요. 손짓으로 크기와 높이를 따로 나타내요." 그다음 화면 건반으로 높은 소리·낮은 소리 문항을 푼다. 화면 건반은 세기가 같으니 높낮이만 들으면 된다고 알려 준다. 컵 실로폰은 숟가락으로 살살 치고, 유리컵은 책상 가운데에 둔다.',
            task: '실로폰의 같은 막대를 살살, 세게 쳐 보고 크기와 높이를 손짓으로 나타낸 뒤, 화면 건반으로 높낮이 문항을 풀어요.',
            levels: KEY_LV,
            items: [
              { prompt: '모둠에서 실로폰의 같은 막대를 살살, 세게 쳐 보고 크기와 높이를 손짓했으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '가락 듣기를 누르고 들은 네 음을 쳐 보세요. 높은 소리와 낮은 소리가 번갈아 나와요.', toolOptions: { melody: ['미', '높은도', '미', '높은도'] }, target: { notes: ['미', '높은도', '미', '높은도'] }, difficulty: 0.3,
                hints: ['들으면서 손을 위아래로 움직여 높낮이만 따라가요.', '높은 소리가 몇 번째에 나왔는지 다시 들어 봐요.', '조금 낮은 소리와 오른쪽 끝 소리가 두 번씩 번갈아 나와요.'] },
              { prompt: '오른쪽 끝 건반으로 시작해 왼쪽 끝 건반으로 끝나는 네 음 가락을 지어 보세요.', target: { compose: { length: 4, startOn: '높은도', endOn: '도' } }, difficulty: 0.25,
                hints: ['처음 음과 마지막 음이 건반의 어느 끝인지 먼저 정해요.', '첫 음이나 마지막 음이 끝 건반이 아니면 지우고 다시 쳐요.', '오른쪽 끝을 치고, 아무 건반 두 개를 친 뒤, 왼쪽 끝으로 끝내요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 크기와 높이를 함께 따져 나누기', minutes: 15, tool: 'mindmap',
            teacher: '"모기 소리는 높아요, 낮아요? 커요, 작아요?" 소리마다 두 가지를 따로 물으며 손짓한다. 천둥처럼 크고 낮은 소리, 모기처럼 작고 높은 소리를 견주어 "크다고 높은 소리가 아니에요"를 함께 말한다. 사자 울음을 높은 소리라고 하는 학생에게 목소리로 "어흥" 해 보게 하고 손이 어디로 가는지 본다.',
            task: '소리마다 높낮이와 크기를 따로 따져 보고, 알맞은 가지로 나누거나 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '소리 카드를 높고 작은 소리와 낮고 큰 소리로 나누어 보세요.', toolOptions: { topic: '크기와 높이', slots: ['높고 작은 소리', '낮고 큰 소리'], cards: ['모기 "앵~"', '천둥 "우르릉 쾅"', '작은 방울 "딸랑"', '큰북 세게 "둥!"'] },
                target: { sort: { '높고 작은 소리': ['모기 "앵~"', '작은 방울 "딸랑"'], '낮고 큰 소리': ['천둥 "우르릉 쾅"', '큰북 세게 "둥!"'] } }, difficulty: 0.2 },
              { prompt: '크지만 낮은 소리만 바구니에 담아 보세요.', toolOptions: { mode: 'pick', basket: '크지만 낮은 소리', cards: ['사자 울음 "어흥!"', '큰 트럭 경적 "빠아앙"', '병아리 "삐약"', '작게 부는 호루라기 "삑"'] },
                target: { pick: ['사자 울음 "어흥!"', '큰 트럭 경적 "빠아앙"'] }, difficulty: 0.25,
                predict: { q: '큰 소리는 모두 높은 소리일까요?', options: ['네', '아니요'], answer: 1 },
                conclude: '소리가 크다고 높은 것이 아니에요. 크기와 높이는 따로 따져요.' },
              { prompt: '같은 피아노 건반 하나를 살살 치다가 세게 쳤어요. 맞는 말만 골라 보세요.', toolOptions: { mode: 'pick', basket: '맞는 말', cards: ['소리가 커져요', '높이는 그대로예요', '소리가 높아져요'] },
                target: { pick: ['소리가 커져요', '높이는 그대로예요'] }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['소리가 커져요', '높이는 그대로예요', '소리가 높아져요', '소리가 길어져요'] } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"이제 \'크게 소리치면 높은 소리가 된다\'는 말이 맞을까요?" 손짓으로 크기와 높이를 따로 나타내며 대답하게 한다. 이 시간으로 소리의 길이와 높낮이 공부를 마치고, 다음 시간에는 눈을 감고 소리만 듣고 무엇인지 알아맞히는 놀이를 한다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '크기와 높이', slots: ['높고 작은 소리', '낮고 큰 소리'], cards: ['아기 새 "삐삐"', '큰 종 세게 "데엥!"'] }, prompt: '두 소리 카드를 알맞은 가지에 놓아 보세요.', target: { sort: { '높고 작은 소리': ['아기 새 "삐삐"'], '낮고 큰 소리': ['큰 종 세게 "데엥!"'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '하준이가 낮은 목소리로 크게 "음매!"를 했어요. 이 소리는 어떤 소리일까요?', options: ['높은 소리', '낮고 큰 소리', '높고 작은 소리'], answer: 1, difficulty: 0.2, explain: '크게 냈어도 낮은 목소리면 낮은 소리예요. 크기와 높이는 따로예요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '크기와 높이는 달라요',
      items: [
        { type: 'table', prompt: '소리를 듣고 ✓ 하세요.', columns: ['소리', '높은', '낮은', '큰', '작은'], cells: [['모기', '', '', '', ''], ['천둥', '', '', '', ''], ['사자', '', '', '', '']] },
        { type: 'choice', prompt: '같은 건반을 세게 치면 어떻게 될까요?', options: ['소리가 커져요', '소리가 높아져요', '소리가 사라져요'], answer: '소리가 커져요' },
        { type: 'blank', prompt: '빈칸을 채우세요.', text: '소리가 크다고 ________ 소리인 것은 아니에요.', answer: '높은' },
        { type: 'draw', prompt: '높고 작은 소리를 내는 것과 낮고 큰 소리를 내는 것을 그려 보세요.' },
      ],
      easy: {
        note: '크기는 손을 넓게, 높이는 손을 위아래로!',
        items: [
          { type: 'choice', prompt: '천둥 소리에 ○ 하세요.', options: ['낮고 큰 소리', '높고 작은 소리'], answer: '낮고 큰 소리' },
          { type: 'choice', prompt: '모기 소리에 ○ 하세요.', options: ['높고 작은 소리', '낮고 큰 소리'], answer: '높고 작은 소리' },
          { type: 'draw', prompt: '큰 소리를 내는 것을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '가락을 듣는 동안 건반이 비쳐요. 카드에는 초록 테두리가 생겨요.',
      base: '실로폰으로 크기와 높이를 견주고, 소리를 두 가지 기준으로 나누어요.',
      challenge: '건반 계이름이 가려지고, 고르기 카드에 함정 말이 하나 더 있어요.',
    },
    safety: ['유리컵 실로폰은 책상 가운데에 두고 숟가락으로 살살 쳐요.', '실로폰 채를 휘두르지 않아요.'],
    teacherNotes: '자주 보이는 어려움: ① 큰 소리 = 높은 소리라고 여긴다(이 차시 중심 오개념) → 같은 막대를 세기만 바꾸어 치는 것을 여러 번 들려주고, 손짓을 크기·높이 둘로 나눈다. ② 손짓 두 가지를 동시에 하기 어려워한다 → 크기 먼저, 높이 다음으로 차례로 묻는다. ③ 실로폰 소리로 교실이 시끄럽다 → 모둠마다 \'치는 사람\' 한 명만 정하고 30초씩 돌아가며 친다.',
  }));

  // ───────────────────────── 21~24차시: 눈 감고 듣고 소리 내기(감각으로 탐색하고 나타내기) ─────────────────────────

  lessons.push(L(21, {
    title: '눈 감고 들은 소리 알아맞히기',
    objective: '눈을 감고 소리만 듣고 무엇에서 난 소리인지 알아맞혀 말하고, 소리를 듣는 데 쓰는 몸의 부분을 고를 수 있다.',
    illustration: ART('paper children sitting with eyes closed and hands cupped behind their ears, behind a paper screen a teacher crumples paper and pours water into a cup', '눈 감고 들어요', [
      { motif: 'wave', x: 380, y: 236, s: 0.6 }, { motif: 'leaf', x: 110, y: 222, color: 'mint' }, { motif: 'star', x: 300, y: 84, s: 0.6 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"모두 눈을 감아요. 선생님이 소리를 하나 낼게요. 무엇인지 알 것 같으면 눈은 감은 채 손만 들어요." 가림판 뒤에서 종이를 구긴다. 몇 명에게 묻고 눈을 뜨게 해 보여 준다. "눈을 감았는데 어떻게 알았을까요?" 시연 단추로 \'바스락바스락\' 소리와 \'종이를 구겨요\'가 이어지는 것을 보여 준다.',
        student: '눈을 감고 지금 교실에서 들리는 소리를 하나 찾아봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '무슨 소리일까?', slots: [{ id: 's1', label: '"바스락바스락"' }], cards: ['종이를 구겨요', '물을 부어요'], shuffle: false }, sequence: [{ match: { s1: '종이를 구겨요' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 가림판 뒤 소리 알아맞히기', minutes: 15, tool: 'mindmap',
            teacher: '가림판 뒤에서 소리를 네 가지 낸다(종이 구기기, 컵에 물 붓기, 열쇠 꾸러미 흔들기, 연필로 종이에 쓰기). 소리마다 "눈을 감고 들어요. 무엇일까요? 짝에게만 작게 말해요." 맞혀도 못 맞혀도 괜찮다고 말해 준다. 화면 카드로 소리 흉내말과 소리 낸 것을 이어 정리한다. "소리는 악기에서만 나나요?" 하고 묻고 오늘 들은 소리 가운데 악기가 있었는지 세어 본다.',
            task: '눈을 감고 가림판 뒤 소리를 들어 알아맞힌 뒤, 소리 흉내말과 소리를 낸 것을 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '눈을 감고 가림판 뒤 소리 네 가지를 듣고 짝에게 알아맞혀 말했으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '들은 소리와 그 소리를 낸 것을 이어 보세요.', toolOptions: { mode: 'match', topic: '무슨 소리일까?', slots: [{ id: 's1', label: '"졸졸졸"' }, { id: 's2', label: '"짤랑짤랑"' }, { id: 's3', label: '"사각사각"' }], cards: ['컵에 물을 부어요', '열쇠 꾸러미를 흔들어요', '연필로 글씨를 써요'] },
                target: { match: { s1: '컵에 물을 부어요', s2: '열쇠 꾸러미를 흔들어요', s3: '연필로 글씨를 써요' } }, difficulty: 0.15,
                levels: { easy: { prompt: '들은 두 소리와 그 소리를 낸 것을 이어 보세요.', toolOptions: { slots: [{ id: 's1', label: '"졸졸졸"' }, { id: 's2', label: '"짤랑짤랑"' }], cards: ['컵에 물을 부어요', '열쇠 꾸러미를 흔들어요'] }, target: { match: { s1: '컵에 물을 부어요', s2: '열쇠 꾸러미를 흔들어요' } } }, challenge: { toolOptions: { cards: ['컵에 물을 부어요', '열쇠 꾸러미를 흔들어요', '연필로 글씨를 써요', '종이를 구겨요'] } } } },
              { prompt: '물로 낸 소리만 바구니에 담아 보세요.', toolOptions: { mode: 'pick', basket: '물로 낸 소리', cards: ['물 붓는 "졸졸"', '웅덩이 밟는 "첨벙"', '종이 구기는 "바스락"', '문 닫는 "탁"'] },
                target: { pick: ['물 붓는 "졸졸"', '웅덩이 밟는 "첨벙"'] }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 소리를 들을 때 쓰는 곳', minutes: 12, tool: 'body',
            teacher: '"눈을 감고 소리를 맞혔어요. 그때 눈을 썼나요?" 눈을 감았으니 눈은 쓰지 않았다는 것을 짚는다. 기준은 \'눈을 감고도 알 수 있으면 눈으로 안 것이 아니다\'로 정해 칠판에 붙인다. 몸 그림에서 고른 곳을 내 몸에서도 손으로 짚어 보게 한다. 만져서 안 것은 \'피부\'로 고른다고 알려 준다.',
            task: '소리를 알아맞힐 때 쓴 몸의 부분을 몸 그림에서 고르고, 내 몸에서도 손으로 짚어 봐요.',
            levels: BODY_LV,
            items: [
              { prompt: '눈을 감고 가림판 뒤 소리를 알아맞힐 때 쓴 곳을 몸 그림에서 골라 보세요.', target: { parts: ['귀'] }, difficulty: 0.05,
                hints: BH('눈을 감았으니 눈은 쓰지 않았어요. 소리는 어디로 들어오는지 떠올려요.', '고른 곳을 내 몸에서 짚어 보고, 그곳으로 소리가 들어오는지 생각해요.', '머리 양옆에 있는 곳 하나만 골라요.') },
              { prompt: '눈을 감고 주머니 속 방울을 흔들어 소리를 듣고 손으로 만져 보았어요. 쓴 곳 두 곳을 골라 보세요.', target: { parts: ['귀', '피부'] }, difficulty: 0.15,
                hints: BH('눈을 감았으니 눈은 빼요. 소리를 들은 곳과 만져서 안 곳을 하나씩 떠올려요.', '소리로 안 것과 손으로 안 것이 둘 다 골라졌는지 다시 봐요.', '소리는 귀, 만져서 안 것은 피부예요.') },
              { prompt: '눈을 감고 컵에 물 붓는 소리를 듣다가 물 냄새는 없는지 맡아 보았어요. 쓴 곳 두 곳을 골라 보세요.', target: { parts: ['귀', '코'] }, difficulty: 0.15,
                hints: BH('눈을 감고 한 일 두 가지를 떠올려요. 듣기와 냄새 맡기예요.', '소리를 들은 곳과 냄새를 맡은 곳이 둘 다 골라졌는지 봐요.', '소리는 귀, 냄새는 얼굴 가운데의 코예요.') },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"오늘 들은 소리 가운데 악기 소리는 몇 개였나요?" 하나도 없었다는 것을 함께 세어 본다. "소리는 악기에서만 날까요?" 다음 시간에는 교실에서 악기가 아닌 것으로 소리를 세 가지 내 본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '무슨 소리일까?', slots: [{ id: 'e1', label: '"딸깍"' }, { id: 'e2', label: '"부스럭"' }], cards: ['형광등 스위치를 눌러요', '과자 봉지를 만져요'] }, prompt: '들은 소리와 그 소리를 낸 것을 이어 보세요.', target: { match: { e1: '형광등 스위치를 눌러요', e2: '과자 봉지를 만져요' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '소리는 어디에서 날까요?', options: ['악기에서만 나요', '물건과 물, 사람 몸에서도 나요'], answer: 1, difficulty: 0.1, explain: '종이, 물, 열쇠처럼 악기가 아닌 것에서도 소리가 나요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '눈 감고 들은 소리',
      items: [
        { type: 'table', prompt: '들은 소리와 내가 맞힌 것을 쓰세요.', columns: ['소리 흉내말', '내가 맞힌 것', '진짜'], rows: 3 },
        { type: 'choice', prompt: '"졸졸졸" 소리를 낸 것에 ○ 하세요.', options: ['물', '종이', '열쇠'], answer: '물' },
        { type: 'figure', prompt: '소리를 들을 때 쓰는 곳에 ○ 하세요.', tool: 'body', options: { mode: 'parts', parts: SENSE }, figures: [{ caption: '' }] },
        { type: 'short', prompt: '집에서 눈을 감고 들어 보고 싶은 소리를 쓰세요.' },
      ],
      easy: {
        note: '눈을 감고 귀를 기울여요.',
        items: [
          { type: 'choice', prompt: '"바스락" 소리를 낸 것에 ○ 하세요.', options: ['종이', '물'], answer: '종이' },
          { type: 'choice', prompt: '소리를 듣는 곳에 ○ 하세요.', options: ['귀', '코'], answer: '귀' },
          { type: 'draw', prompt: '오늘 들은 소리를 낸 것을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '짝 잇기가 두 쌍이고 초록 테두리가 생겨요. 몸 그림에 이름이 보여요.',
      base: '세 쌍을 잇고, 몸 그림에서 이름 없이 골라요.',
      challenge: '함정 카드가 하나 더 있고, 몸 그림에 감각과 상관없는 곳이 섞여 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 눈을 살짝 뜨고 본다 → 맞히기가 목적이 아니라 귀로 듣는 연습이라는 것을 말하고 안대 대신 손바닥으로 눈을 가리게 한다. ② 소리는 악기에서만 난다고 여긴다 → 오늘 들은 소리의 출처를 함께 세어 본다. ③ 만져서 안 것도 눈으로 알았다고 한다 → \'눈을 감고도 알 수 있으면 눈이 아니다\' 기준을 되풀이한다. 가림판 소리는 날카롭거나 큰 소리를 피한다(청각이 예민한 학생 배려).',
  }));

  lessons.push(L(22, {
    title: '교실에서 악기 없이 소리 세 가지 내기',
    objective: '교실에서 악기가 아닌 물건으로 소리를 낼 수 있는 것을 찾아 두드리기·흔들기·문지르기로 세 가지 소리를 내고, 소리 낸 방법을 말할 수 있다.',
    illustration: ART('paper children making sounds with classroom things, tapping a desk, shaking a paper cup with beans, rubbing palms together, a zipper pencil case being pulled', '악기 없이 소리 내기', [
      { motif: 'house', x: 110, y: 214, color: 'buttercup' }, { motif: 'star', x: 330, y: 84, s: 0.6 }, { motif: 'flower', x: 400, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"지난 시간에 들은 소리 가운데 악기 소리는 없었지요? 오늘은 악기 없이 소리를 내 봐요." 교사가 책상을 손가락으로 톡톡 두드리고, 종이를 흔들고, 두 손바닥을 비빈다. "선생님은 무엇으로 소리를 냈나요? 어떻게 냈나요?" 시연 단추로 \'책상\' 카드가 \'악기가 아닌데 소리가 나요\' 바구니에 담기는 것을 보여 준다.',
        student: '내 자리에서 악기가 아닌 것으로 아주 작은 소리를 하나 내 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'pick', basket: '악기가 아닌데 소리가 나요', cards: ['책상', '탬버린'], shuffle: false }, sequence: [{ pick: ['책상'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 소리 나는 물건 세 가지 찾아 내기', minutes: 14, tool: 'mindmap',
            teacher: '"3분 동안 내 자리와 모둠 책상에서 소리를 낼 수 있는 것을 세 가지 찾아요. 악기는 빼요." 찾은 뒤 모둠 안에서 한 사람씩 세 가지 소리를 들려주고, 다른 친구들은 눈을 감고 맞힌다. 친구 물건은 허락받고 쓰고, 책상을 너무 세게 치지 않게 \'개미 소리\' 크기로 내게 한다. 화면 카드로 악기와 악기가 아닌 것을 나누어 정리한다.',
            task: '자리에서 악기가 아닌 것으로 소리 세 가지를 찾아 내고, 소리 나는 것을 악기와 악기가 아닌 것으로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '악기가 아닌 것으로 소리 세 가지를 찾아 모둠 친구에게 들려주었으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '소리 나는 것을 악기와 악기가 아닌 물건으로 나누어 보세요.', toolOptions: { topic: '소리 나는 것', slots: ['악기', '악기가 아닌 물건'], cards: ['캐스터네츠', '플라스틱 컵', '작은북', '지퍼 필통'] },
                target: { sort: { '악기': ['캐스터네츠', '작은북'], '악기가 아닌 물건': ['플라스틱 컵', '지퍼 필통'] } }, difficulty: 0.1,
                levels: { challenge: { prompt: '소리 나는 것 여섯 가지를 악기와 악기가 아닌 물건으로 나누어 보세요.', toolOptions: { cards: ['캐스터네츠', '플라스틱 컵', '작은북', '지퍼 필통', '리코더', '종이 상자'] }, target: { sort: { '악기': ['캐스터네츠', '작은북', '리코더'], '악기가 아닌 물건': ['플라스틱 컵', '지퍼 필통', '종이 상자'] } } } } },
              { prompt: '악기가 아닌데 소리를 낼 수 있는 것만 바구니에 담아 보세요.', toolOptions: { mode: 'pick', basket: '악기가 아닌데 소리가 나요', cards: ['책상', '공책', '탬버린', '실로폰'] },
                target: { pick: ['책상', '공책'] }, difficulty: 0.1,
                predict: { q: '공책으로도 소리를 낼 수 있을까요?', options: ['낼 수 있어요', '낼 수 없어요'], answer: 0 },
                conclude: '공책을 펄럭이거나 두드리면 소리가 나요. 소리는 악기가 아닌 물건에서도 나요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 소리 낸 방법 견주기', minutes: 13, tool: 'mindmap',
            teacher: '"같은 컵도 두드리면 \'톡톡\', 안에 콩을 넣고 흔들면 \'차르르\' 소리가 나요. 소리를 낸 방법이 달라요." 두드려요·흔들어요·문질러요를 몸짓으로 함께 해 본다. 카드마다 그 소리를 낸 몸짓을 먼저 해 보고 놓게 한다. 마지막 문항은 모둠이 찾은 소리를 떠올리며 고른다.',
            task: '소리 카드를 두드리기·흔들기·문지르기 가운데 소리 낸 방법에 따라 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '소리 카드를 소리 낸 방법에 따라 나누어 보세요.', toolOptions: { topic: '소리 낸 방법', slots: ['두드려요', '흔들어요', '문질러요'], cards: ['책상을 톡톡', '콩 넣은 컵을 차르르', '손바닥을 비벼 슥슥', '방울 꾸러미를 딸랑'] },
                target: { sort: { '두드려요': ['책상을 톡톡'], '흔들어요': ['콩 넣은 컵을 차르르', '방울 꾸러미를 딸랑'], '문질러요': ['손바닥을 비벼 슥슥'] } }, difficulty: 0.2,
                levels: { easy: { prompt: '소리 카드를 두드려요와 흔들어요로 나누어 보세요.', toolOptions: { slots: ['두드려요', '흔들어요'], cards: ['책상을 톡톡', '콩 넣은 컵을 차르르', '공책 표지를 탁탁'] }, target: { sort: { '두드려요': ['책상을 톡톡', '공책 표지를 탁탁'], '흔들어요': ['콩 넣은 컵을 차르르'] } } } } },
              { prompt: '소리를 낸 물건과 그 소리를 이어 보세요.', toolOptions: { mode: 'match', topic: '어떤 소리가 날까?', slots: [{ id: 's1', label: '종이를 흔들면' }, { id: 's2', label: '필통 지퍼를 당기면' }], cards: ['"펄럭펄럭"', '"지이익"'] },
                target: { match: { s1: '"펄럭펄럭"', s2: '"지이익"' } }, difficulty: 0.1 },
              { prompt: '모둠에서 같은 컵으로 두드리기와 흔들기 소리를 둘 다 내 보고 견주었으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"우리 모둠이 찾은 소리 세 가지를 \'두드려서\', \'흔들어서\', \'문질러서\'처럼 방법과 함께 말해 볼까요?" 모둠마다 하나씩 들려준다. 다음 시간에는 소리로 이야기를 들려주는 놀이를 한다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', basket: '악기가 아닌데 소리가 나요', cards: ['빈 우유갑', '숟가락', '트라이앵글'] }, prompt: '악기가 아닌데 소리를 낼 수 있는 것만 골라 보세요.', target: { pick: ['빈 우유갑', '숟가락'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '콩을 넣은 컵으로 "차르르" 소리를 내려면 어떻게 할까요?', options: ['흔들어요', '문질러요', '가만히 두어요'], answer: 0, difficulty: 0.1, explain: '컵 속 콩이 부딪치도록 흔들면 "차르르" 소리가 나요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '악기 없이 소리 내기',
      items: [
        { type: 'table', prompt: '내가 찾은 소리 세 가지를 쓰세요.', columns: ['무엇으로', '어떻게', '어떤 소리'], rows: 3 },
        { type: 'choice', prompt: '악기가 아닌 것에 ○ 하세요.', options: ['종이컵', '작은북', '캐스터네츠'], answer: '종이컵' },
        { type: 'choice', prompt: '손바닥을 비비는 것은 어떤 방법일까요?', options: ['두드려요', '흔들어요', '문질러요'], answer: '문질러요' },
        { type: 'draw', prompt: '내가 소리를 낸 물건을 그려 보세요.' },
      ],
      easy: {
        note: '두드리고, 흔들고, 문질러 봐요.',
        items: [
          { type: 'choice', prompt: '악기가 아닌데 소리가 나는 것에 ○ 하세요.', options: ['책상', '탬버린'], answer: '책상' },
          { type: 'short', prompt: '내가 낸 소리 하나를 흉내 내어 쓰세요.' },
          { type: 'draw', prompt: '소리를 낸 물건을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '소리 낸 방법이 두 가지로 줄고, 카드에 초록 테두리가 생겨요.',
      base: '세 가지 방법으로 소리 카드를 나누어요.',
      challenge: '악기와 물건 카드가 여섯 장으로 늘어요. 같은 물건으로 소리 두 가지를 내 활동지에 써요.',
    },
    safety: ['책상은 손가락으로 작게 두드리고, 연필이나 가위로 두드리지 않아요.', '친구 물건은 먼저 묻고 빌려 써요.'],
    teacherNotes: '자주 보이는 어려움: ① 소리는 악기에서만 난다고 여긴다(이 차시 중심 오개념) → 악기를 치운 책상에서 소리를 찾게 한다. ② 소리를 크게만 내려 한다 → \'개미 소리\' 크기를 약속하고, 작은 소리도 잘 들리면 칭찬한다. ③ 소리 낸 방법을 말하지 못한다 → 손 몸짓(두드리기·흔들기·문지르기)을 먼저 하고 말로 옮긴다. 콩 넣은 컵은 뚜껑을 테이프로 막아 콩이 쏟아지지 않게 한다.',
  }));

  lessons.push(L(23, {
    title: '아침 소리 이야기 듣고 차례대로 놓기',
    objective: '하루 이야기 속 소리를 듣고 일이 일어난 차례대로 소리 카드를 놓으며, 소리 세 개로 짧은 소리 이야기를 지어 들려줄 수 있다.',
    illustration: ART('a paper home in the morning with an alarm clock ringing, a water tap running, a spoon clinking in a bowl and a front door opening, sound words floating in a row', '아침 소리 이야기', [
      { motif: 'sun', x: 100, y: 70, s: 0.7 }, { motif: 'house', x: 380, y: 214, color: 'peach' }, { motif: 'tree', x: 240, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"눈을 감고 들어 봐요. 선생님이 소리로 이야기를 들려줄게요." \'따르릉\'(입으로), \'쏴아\'(물병 기울이기), \'달그락\'(숟가락과 그릇), \'철컥\'(문고리)을 차례로 낸다. "무슨 이야기 같아요?" 아침 이야기라고 알아챈 학생에게 까닭을 묻는다. 시연 단추로 소리 카드가 차례대로 놓이는 것을 보여 준다.',
        student: '내 아침에 들리는 소리를 하나 떠올려 봐요.',
        demo: { tool: 'story', options: { slots: ['처음', '끝'], cards: ['알람 "따르릉"', '문 "철컥"'], shuffle: false }, sequence: [{ order: ['알람 "따르릉"', '문 "철컥"'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 소리 이야기 차례대로 놓기', minutes: 12, tool: 'story',
            teacher: '"민지는 일어나서, 세수하고, 밥을 먹고, 학교에 가요. 그때마다 어떤 소리가 났을까요?" 문항의 이야기 글을 함께 읽고, 일마다 손가락을 하나씩 접게 한다. 소리 카드를 놓은 뒤 그 소리를 입으로 흉내 내며 처음부터 끝까지 이어 들려 보게 한다. 차례가 헷갈리면 이야기 글로 돌아가 \'다음에 무엇을 했나요?\'를 묻는다.',
            task: '이야기 글을 읽고 일이 일어난 차례대로 소리 카드를 놓은 뒤, 입으로 소리를 이어 내 봐요.',
            levels: CARD_LV,
            items: [
              { prompt: '민지는 일어나서 세수하고, 밥을 먹고, 학교에 가요. 차례대로 소리 카드를 놓아 보세요.', toolOptions: { slots: ['1', '2', '3', '4'], cards: ['알람 "따르릉"', '세숫물 "쏴아"', '숟가락 "달그락"', '현관문 "철컥"'] },
                target: { order: ['알람 "따르릉"', '세숫물 "쏴아"', '숟가락 "달그락"', '현관문 "철컥"'] }, difficulty: 0.15,
                levels: { easy: { prompt: '민지는 일어나서 밥을 먹고 학교에 가요. 차례대로 소리 카드를 놓아 보세요.', toolOptions: { slots: ['1', '2', '3'], cards: ['알람 "따르릉"', '숟가락 "달그락"', '현관문 "철컥"'] }, target: { order: ['알람 "따르릉"', '숟가락 "달그락"', '현관문 "철컥"'] } } } },
              { prompt: '준호는 학교에서 공부하고, 점심을 먹고, 운동장에서 놀았어요. 차례대로 소리 카드를 놓아 보세요.', toolOptions: { slots: ['1', '2', '3'], cards: ['수업 종 "딩동댕"', '식판 "달각달각"', '공 차는 "뻥"'] },
                target: { order: ['수업 종 "딩동댕"', '식판 "달각달각"', '공 차는 "뻥"'] }, difficulty: 0.1 },
              { prompt: '서아의 비 오는 오후 이야기예요. 빈칸에 알맞은 소리 카드를 넣어 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'f1', who: '서아', label: '창밖에서 ___ 소리가 나서 비가 오는 줄 알았어요.' }, { id: 'f2', who: '서아', label: '우산을 펴니 ___ 소리가 났어요.' }], cards: ['"토독토독"', '"팡"', '"따르릉"'] },
                target: { fill: { f1: '"토독토독"', f2: '"팡"' } }, difficulty: 0.2 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 모둠 소리 이야기 짓고 들려주기', minutes: 15, tool: 'emotion',
            teacher: '"모둠에서 소리 세 개로 짧은 이야기를 지어요. 물건이나 몸으로 소리를 내요." 6분 동안 짓고 연습하게 한다. 연습을 마친 뒤 두 모둠씩 짝을 지어 들려주고 듣는 모둠은 눈을 감고 무슨 이야기인지 맞힌다(4분). 화면에서는 소리를 들었을 때 마음을 고른다. 갑작스러운 \'쾅\' 소리는 놀라거나 무서울 수 있으니 이야기 속에서도 작게 낸다고 약속한다.',
            task: '모둠에서 소리 세 개로 이야기를 지어 연습한 뒤 다른 모둠에게 들려주고, 소리를 들었을 때의 마음을 골라요.',
            levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
            items: [
              { prompt: '모둠에서 소리 세 개로 이야기를 짓고 끝까지 연습했으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '다른 모둠에게 소리 이야기를 들려주고, 그 모둠 이야기도 눈을 감고 들었으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '이야기 속 소리를 들었을 때 마음 카드를 놓아 보세요.', toolOptions: { cards: ['놀람', '편안함', '화남'], slots: [{ id: 's1', label: '조용한 밤에 갑자기 "쾅!" 소리가 났어요' }, { id: 's2', label: '창밖에서 빗소리가 "토독토독" 들려요' }] },
                target: { match: { s1: '놀람', s2: '편안함' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['놀람', '편안함', '화남', '뿌듯함'] } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"눈을 감고 다른 모둠 이야기를 들었을 때, 무슨 이야기인지 알 수 있었나요? 무엇 덕분이었나요?" 소리만으로도 이야기를 전할 수 있다는 것을 짚는다. 다음 시간에는 학교 둘레를 걸으며 소리를 찾고 소리 지도를 만든다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { slots: ['1', '2', '3'], cards: ['빗소리 "쏴아아"', '천둥 "우르릉"', '새소리 "짹짹"'] }, prompt: '비가 쏟아지고, 천둥이 치고, 비가 그친 뒤 새가 울었어요. 차례대로 소리 카드를 놓아 보세요.', target: { order: ['빗소리 "쏴아아"', '천둥 "우르릉"', '새소리 "짹짹"'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '"따르릉, 쏴아, 달그락" 소리 이야기는 언제의 이야기일까요?', options: ['아침', '밤에 잘 때'], answer: 0, difficulty: 0.1, explain: '알람이 울리고 세수하고 밥 먹는 소리는 아침에 들려요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '소리 이야기',
      items: [
        { type: 'table', prompt: '우리 모둠 소리 이야기를 쓰세요.', columns: ['처음 소리', '가운데 소리', '끝 소리'], rows: 1 },
        { type: 'choice', prompt: '아침에 일어날 때 들리는 소리에 ○ 하세요.', options: ['알람 "따르릉"', '하교 종소리', '자장가'], answer: '알람 "따르릉"' },
        { type: 'short', prompt: '다른 모둠 소리 이야기는 무슨 이야기였는지 쓰세요.' },
        { type: 'draw', prompt: '내 아침 소리 이야기를 세 칸 그림으로 그려 보세요.' },
      ],
      easy: {
        note: '처음, 가운데, 끝으로 나누어요.',
        items: [
          { type: 'choice', prompt: '밥 먹을 때 나는 소리에 ○ 하세요.', options: ['숟가락 "달그락"', '알람 "따르릉"'], answer: '숟가락 "달그락"' },
          { type: 'short', prompt: '우리 모둠 이야기의 첫 소리를 쓰세요.' },
          { type: 'draw', prompt: '소리 이야기 한 장면을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '아침 이야기 카드가 세 장이고, 카드에 초록 테두리가 생겨요.',
      base: '이야기 글을 읽고 소리 카드 네 장을 차례대로 놓아요.',
      challenge: '마음 카드에 함정이 하나 더 있어요. 모둠 이야기에 소리를 네 개 넣어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 소리 차례를 내 생활대로 바꾼다 → "이야기 글에서는 무엇을 먼저 했나요?"로 글을 기준으로 삼게 한다. ② 모둠 이야기가 소리 없이 말로만 된다 → 말은 빼고 소리만 내기로 약속한다. ③ 큰 소리를 내서 다른 모둠이 놀란다 → 이야기 속 큰 소리도 작게 흉내 내기로 한다. 청각이 예민한 학생은 귀마개를 쓰거나 맨 끝에 서게 한다.',
  }));

  lessons.push(L(24, {
    title: '학교 둘레 걸으며 소리 지도 만들기',
    objective: '학교 둘레를 걸으며 들은 소리를 떠올려, 그 소리가 들린 곳을 칸 지도에서 찾아 핀을 꽂을 수 있다.',
    illustration: ART('a simple paper map of a school with a playground, a small school forest, a library and the front gate road, little sound symbols floating above each place', '소리 지도', [
      { motif: 'tree', x: 400, y: 212 }, { motif: 'house', x: 110, y: 214, color: 'sky' }, { motif: 'bird', x: 300, y: 80 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"오늘은 귀로 학교를 탐험해요. 걸으면서 들리는 소리를 찾아요." 소리 탐험 약속(줄 서서 걷기, 말하지 않고 듣기, 선생님 손 신호에 멈추기)을 정한다. 학교 칸 지도를 보여 주고 놀이터·학교 숲·도서실·정문 앞 길을 함께 짚는다. 시연 단추로 \'놀이터\'에 핀이 꽂히는 것을 보여 준다.',
        student: '탐험 약속 세 가지를 짝과 함께 말해 봐요.',
        demo: { tool: 'map', options: { grid: [6, 4], title: '우리 학교', places: [{ name: '교실', icon: 'school', at: [1, 1] }, { name: '놀이터', icon: 'park', at: [4, 1] }] }, sequence: [{ place: '놀이터' }] },
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 귀로 하는 학교 탐험', minutes: 13, tool: 'map',
            teacher: '반 전체가 줄을 서서 놀이터 → 학교 숲 → 도서실 앞 → 정문 안쪽 순서로 걷는다. 곳마다 30초 동안 멈추어 눈을 감고 듣는다. "여기서 들린 소리를 머릿속에 하나 담아 두세요." 정문 밖으로는 나가지 않는다. 돌아와서 화면 지도에서 처음 문항을 함께 풀며 "그네 소리는 어디서 들었지요?" 하고 떠올리게 한다.',
            task: '반 전체가 학교 둘레 네 곳을 걸으며 곳마다 소리를 듣고, 돌아와서 그 소리가 들린 곳에 핀을 꽂아요.',
            levels: { easy: { readout: true }, base: {}, challenge: {} },
            items: [
              { prompt: '선생님과 학교 둘레 네 곳을 걸으며 곳마다 눈을 감고 소리를 들었으면 "다 했어요"를 누르세요.', free: true,
                toolOptions: { grid: [6, 4], title: '우리 학교 소리 지도', places: [{ name: '교실', icon: 'school', at: [1, 1] }, { name: '놀이터', icon: 'park', at: [4, 1] }, { name: '학교 숲', icon: 'forest', at: [4, 3] }, { name: '도서실', icon: 'library', at: [2, 2] }, { name: '정문 앞 길', icon: 'bus', at: [0, 3] }] } },
              { prompt: '그네가 "삐걱삐걱" 흔들리는 소리를 들은 곳에 핀을 꽂아 보세요.', toolOptions: { grid: [6, 4], title: '우리 학교 소리 지도', places: [{ name: '교실', icon: 'school', at: [1, 1] }, { name: '놀이터', icon: 'park', at: [4, 1] }, { name: '학교 숲', icon: 'forest', at: [4, 3] }, { name: '도서실', icon: 'library', at: [2, 2] }, { name: '정문 앞 길', icon: 'bus', at: [0, 3] }] },
                target: { place: '놀이터' }, difficulty: 0.1,
                hints: ['그네는 어디에 있는지 떠올려요. 걸을 때 처음 멈춘 곳이에요.', '핀을 꽂은 곳에 그네가 있는지 지도 기호를 다시 봐요.', '미끄럼틀과 그네가 있는 놀이터 칸에 꽂아요.'] },
              { prompt: '새가 "짹짹" 울고 나뭇잎이 "사르르" 흔들리는 소리를 들은 곳에 핀을 꽂아 보세요.', toolOptions: { grid: [6, 4], title: '우리 학교 소리 지도', places: [{ name: '교실', icon: 'school', at: [1, 1] }, { name: '놀이터', icon: 'park', at: [4, 1] }, { name: '학교 숲', icon: 'forest', at: [4, 3] }, { name: '도서실', icon: 'library', at: [2, 2] }, { name: '정문 앞 길', icon: 'bus', at: [0, 3] }] },
                target: { place: '학교 숲' }, difficulty: 0.15,
                hints: ['새와 나뭇잎이 많은 곳은 어디일지 떠올려요.', '꽂은 칸에 나무가 많은지 지도 기호를 봐요.', '나무 기호가 있는 학교 숲 칸에 꽂아요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 소리 지도 완성하기', minutes: 15, tool: 'map',
            teacher: '"조용한 곳에서는 작은 소리가, 차가 다니는 곳에서는 큰 소리가 들렸지요?" 곳마다 들린 소리를 떠올리며 핀을 꽂는다. 다 꽂은 학생은 모둠 큰 종이 지도에 소리 흉내말 붙임쪽지를 붙인다. "같은 놀이터에서도 친구마다 다른 소리를 들었나요?" 하고 견주게 한다. 도전 문항은 칸 지도에 장소 이름이 없으니 기호만 보고 찾는다.',
            task: '들은 소리를 떠올려 칸 지도에 핀을 꽂고, 모둠 큰 지도에 소리 흉내말 붙임쪽지를 붙여 소리 지도를 완성해요.',
            levels: { easy: { readout: true }, base: {}, challenge: { names: false } },
            items: [
              { prompt: '버스가 "부릉부릉" 지나가는 소리를 들은 곳에 핀을 꽂아 보세요.', toolOptions: { grid: [6, 4], title: '우리 학교 소리 지도', places: [{ name: '교실', icon: 'school', at: [1, 1] }, { name: '놀이터', icon: 'park', at: [4, 1] }, { name: '학교 숲', icon: 'forest', at: [4, 3] }, { name: '도서실', icon: 'library', at: [2, 2] }, { name: '정문 앞 길', icon: 'bus', at: [0, 3] }] },
                target: { place: '정문 앞 길' }, difficulty: 0.1,
                hints: ['버스는 어디로 다니는지 떠올려요.', '꽂은 칸에 버스 기호가 있는지 봐요.', '버스 기호가 있는 정문 앞 길 칸에 꽂아요.'] },
              { prompt: '아주 조용해서 책장 넘기는 "사락" 소리만 들린 곳에 핀을 꽂아 보세요.', toolOptions: { grid: [6, 4], title: '우리 학교 소리 지도', places: [{ name: '교실', icon: 'school', at: [1, 1] }, { name: '놀이터', icon: 'park', at: [4, 1] }, { name: '학교 숲', icon: 'forest', at: [4, 3] }, { name: '도서실', icon: 'library', at: [2, 2] }, { name: '정문 앞 길', icon: 'bus', at: [0, 3] }] },
                target: { place: '도서실' }, difficulty: 0.15,
                hints: ['책을 읽느라 모두 조용히 하는 곳을 떠올려요.', '꽂은 칸에 책 기호가 있는지 봐요.', '책 기호가 있는 도서실 칸에 꽂아요.'] },
              { prompt: '모둠 큰 종이 지도에 곳마다 들은 소리 흉내말 붙임쪽지를 붙였으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"우리 학교에서 가장 시끄러운 곳과 가장 조용한 곳은 어디였나요?" 모둠 지도를 보며 말하게 한다. "같은 곳에서 친구는 어떤 소리를 들었대요?" 다음 시간에는 찾은 소리를 선과 모양으로 그려 본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'map', options: { grid: [6, 4], title: '우리 학교 소리 지도', places: [{ name: '교실', icon: 'school', at: [1, 1] }, { name: '놀이터', icon: 'park', at: [4, 1] }, { name: '학교 숲', icon: 'forest', at: [4, 3] }, { name: '도서실', icon: 'library', at: [2, 2] }, { name: '정문 앞 길', icon: 'bus', at: [0, 3] }] }, prompt: '친구들이 "하나, 둘" 함께 책 읽는 소리와 선생님 목소리가 들리는 곳에 핀을 꽂아 보세요.', target: { place: '교실' }, difficulty: 0.15 },
          { type: 'choice', prompt: '소리 탐험을 할 때 지킬 약속은 무엇일까요?', options: ['혼자 정문 밖으로 가요', '줄 서서 걷고 말없이 들어요', '뛰어다니며 소리 쳐요'], answer: 1, difficulty: 0.05, explain: '줄 서서 걷고 말없이 들어야 안전하고 소리도 잘 들려요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '우리 학교 소리 지도',
      items: [
        { type: 'figure', wide: true, prompt: '곳마다 들은 소리를 지도 옆에 쓰세요.', tool: 'map', options: { grid: [6, 4], title: '우리 학교', places: [{ name: '교실', icon: 'school', at: [1, 1] }, { name: '놀이터', icon: 'park', at: [4, 1] }, { name: '학교 숲', icon: 'forest', at: [4, 3] }, { name: '도서실', icon: 'library', at: [2, 2] }, { name: '정문 앞 길', icon: 'bus', at: [0, 3] }] }, figures: [{ caption: '' }] },
        { type: 'table', prompt: '들은 소리를 쓰세요.', columns: ['곳', '들은 소리'], cells: [['놀이터', ''], ['학교 숲', ''], ['도서실', '']] },
        { type: 'choice', prompt: '가장 조용했던 곳에 ○ 하세요.', options: ['도서실', '정문 앞 길', '놀이터'], answer: '도서실' },
        { type: 'short', prompt: '다음에 소리를 들으러 가 보고 싶은 곳을 쓰세요.' },
      ],
      easy: {
        note: '곳마다 들은 소리를 하나씩만 떠올려요.',
        items: [
          { type: 'choice', prompt: '그네 소리가 나는 곳에 ○ 하세요.', options: ['놀이터', '도서실'], answer: '놀이터' },
          { type: 'short', prompt: '학교 숲에서 들은 소리를 쓰세요.' },
          { type: 'draw', prompt: '소리를 들은 곳을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '핀을 꽂으면 그 칸 이름이 읽기 글자로 보여요.',
      base: '지도 이름을 보고 소리가 들린 곳에 핀을 꽂아요.',
      challenge: '지도에 장소 이름이 없어 기호만 보고 찾아요. 모둠 지도에 소리를 두 개씩 붙여요.',
    },
    safety: ['줄을 서서 걷고, 선생님 손 신호가 나오면 그 자리에 멈춰요.', '정문 밖이나 찻길로는 나가지 않아요.', '놀이 기구는 오늘 타지 않고 소리만 들어요.'],
    teacherNotes: '자주 보이는 어려움: ① 걷는 동안 떠들어 소리가 안 들린다 → 곳마다 30초 \'말 없는 귀\' 시간을 정하고 손 신호로 시작·끝을 알린다. ② 지도 기호를 읽지 못한다 → 걷기 전에 지도와 실제 곳을 한 번씩 짝 지어 본다. ③ 소리와 곳을 잇지 못한다 → 그 곳에 무엇이 있었는지(그네, 나무, 책) 먼저 떠올리게 한다. 날씨가 나쁘면 복도·계단·급식실 앞 등 건물 안 네 곳으로 바꾼다.',
  }));

  // ───────────────────────── 25~28차시: 소리를 그림·몸짓으로 나타내기(탐색 경험 나누고 호기심 잇기) ─────────────────────────

  lessons.push(L(25, {
    title: '소리를 점과 선과 모양으로 그려 보기',
    objective: '짧은 소리는 점, 긴 소리는 이어진 선, 큰 소리는 크고 굵은 모양처럼 소리의 특징을 그림 기호로 나타내고, 친구의 소리 그림을 보고 소리를 낼 수 있다.',
    illustration: ART('a paper sketchbook where sounds become marks, tiny dots for tapping, a long wavy ribbon for wind, a big bold circle for a drum boom, children holding crayons', '소리를 그려요', [
      { motif: 'wave', x: 380, y: 236, s: 0.6 }, { motif: 'star', x: 120, y: 84, s: 0.6 }, { motif: 'flower', x: 300, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"소리는 눈에 보이지 않는데, 그림으로 그릴 수 있을까요?" 손을 들어 생각을 정하게 한다. 교사가 \'톡 톡 톡\' 소리를 내며 칠판에 점 세 개를 찍고, \'쭈우욱~\' 소리를 내며 긴 선을 긋는다. "선생님이 그린 그림만 보고 소리를 내 볼까요?" 시연 단추로 \'"톡 톡 톡"\'과 점 세 개 그림이 이어지는 것을 보여 준다.',
        student: '칠판의 점 세 개와 긴 선을 보고 소리를 내 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '소리 그림', slots: [{ id: 's1', label: '"톡 톡 톡"' }], cards: ['작은 점 세 개 ● ● ●', '길게 이어진 선 ━━━'], shuffle: false }, sequence: [{ match: { s1: '작은 점 세 개 ● ● ●' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 소리와 소리 그림 짝 짓기', minutes: 12, tool: 'mindmap',
            teacher: '"짧은 소리는 점, 긴 소리는 선, 큰 소리는 크고 굵게, 높은 소리는 종이 위쪽에 그려요." 우리 반 소리 그림 약속을 칠판에 붙인다. 카드마다 소리를 입으로 내면서 그림을 손가락으로 공중에 그려 보게 한다. 약속과 다르게 그리고 싶어 하는 학생에게는 오늘은 약속대로 그리고, 28차시에 나만의 소리 그림을 더한다고 말해 준다.',
            task: '우리 반 소리 그림 약속에 따라 소리와 그 소리를 그린 그림을 잇고 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '소리와 그 소리를 그린 그림을 이어 보세요.', toolOptions: { mode: 'match', topic: '소리 그림', slots: [{ id: 's1', label: '"쭈우욱~"' }, { id: 's2', label: '"쿵!"' }, { id: 's3', label: '"톡 톡 톡"' }], cards: ['길게 이어진 선 ━━━', '크고 굵은 동그라미 하나', '작은 점 세 개 ● ● ●'] },
                target: { match: { s1: '길게 이어진 선 ━━━', s2: '크고 굵은 동그라미 하나', s3: '작은 점 세 개 ● ● ●' } }, difficulty: 0.15,
                levels: { easy: { prompt: '두 소리와 그 소리를 그린 그림을 이어 보세요.', toolOptions: { slots: [{ id: 's1', label: '"쭈우욱~"' }, { id: 's3', label: '"톡 톡 톡"' }], cards: ['길게 이어진 선 ━━━', '작은 점 세 개 ● ● ●'] }, target: { match: { s1: '길게 이어진 선 ━━━', s3: '작은 점 세 개 ● ● ●' } } } } },
              { prompt: '소리 카드를 점으로 그릴 소리와 긴 선으로 그릴 소리로 나누어 보세요.', toolOptions: { topic: '어떻게 그릴까?', slots: ['점으로 그려요', '긴 선으로 그려요'], cards: ['빗방울 "똑 똑"', '바람 "휘이이잉~"', '박수 "짝 짝"', '뱃고동 "뿌우우웅~"'] },
                target: { sort: { '점으로 그려요': ['빗방울 "똑 똑"', '박수 "짝 짝"'], '긴 선으로 그려요': ['바람 "휘이이잉~"', '뱃고동 "뿌우우웅~"'] } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['빗방울 "똑 똑"', '바람 "휘이이잉~"', '박수 "짝 짝"', '뱃고동 "뿌우우웅~"', '파란 하늘'] } } } },
              { prompt: '높은 소리는 위쪽, 낮은 소리는 아래쪽에 그리기로 했어요. 맞게 그린 그림만 골라 보세요.', toolOptions: { mode: 'pick', basket: '맞게 그렸어요', cards: ['새소리 "삐삐"를 위쪽에 점으로', '큰북 "둥"을 아래쪽에 크게', '새소리 "삐삐"를 아래쪽에 크게'] },
                target: { pick: ['새소리 "삐삐"를 위쪽에 점으로', '큰북 "둥"을 아래쪽에 크게'] }, difficulty: 0.25 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 색종이 조각으로 소리 그림 만들기', minutes: 15, tool: 'collage',
            teacher: '"작은 동그라미는 짧은 소리, 긴 네모는 긴 소리예요. 조각으로 소리를 그려 봐요." 문항의 소리를 입으로 내 보고 조각을 붙이게 한다. 다 만든 학생은 짝에게 화면을 보여 주고, 짝이 그림만 보고 소리를 낸다. "짝이 낸 소리가 내가 생각한 소리와 같았나요?" 하고 묻는다. 소리를 그림으로 나타낼 수 없다는 학생에게 짝이 소리를 맞힌 것을 함께 보게 한다.',
            task: '소리를 입으로 내 본 뒤 조각으로 소리 그림을 만들고, 짝이 내 그림만 보고 소리를 내 봐요.',
            levels: COL_LV,
            items: [
              { prompt: '"톡 톡 톡" 소리를 작은 동그라미 세 개로 그려 보세요.', toolOptions: { shapes: ['circle', 'rect', 'square', 'star'], colors: ['검정', '파랑', '빨강', '노랑'] },
                target: { has: [{ shape: 'circle', size: 's', n: 3 }] }, difficulty: 0.05,
                levels: { easy: { toolOptions: { shapes: ['circle', 'rect'], sizes: ['s', 'l'] } } } },
              { prompt: '"쿵! 톡 톡" 소리를 큰 동그라미 하나와 작은 동그라미 두 개로 그려 보세요.', toolOptions: { shapes: ['circle', 'rect', 'square', 'star'], colors: ['검정', '파랑', '빨강', '노랑'] },
                target: { has: [{ shape: 'circle', size: 'l', n: 1 }, { shape: 'circle', size: 's', n: 2 }] }, difficulty: 0.2,
                levels: { easy: { toolOptions: { shapes: ['circle'], sizes: ['s', 'l'] } }, challenge: { prompt: '"쿵! 톡 톡 쭈우욱~" 소리를 큰 동그라미 하나, 작은 동그라미 두 개, 긴 네모 하나로 그려 보세요.', target: { has: [{ shape: 'circle', size: 'l', n: 1 }, { shape: 'circle', size: 's', n: 2 }, { shape: 'rect', n: 1 }] } } } },
              { prompt: '짝에게 내 소리 그림을 보여 주고 짝이 그림만 보고 소리를 내 보았으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"도입에서 \'소리는 그림으로 못 그린다\'고 생각한 친구, 지금은 어때요?" 짝이 그림만 보고 소리를 맞힌 경험을 두세 명이 말하게 한다. 다음 시간에는 그림 대신 몸짓으로 소리를 나타내 본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '소리 그림', slots: [{ id: 'e1', label: '"딩동 딩동"' }, { id: 'e2', label: '"부우우웅~"' }], cards: ['점 네 개 ● ● ● ●', '길게 이어진 선 ━━━━'] }, prompt: '소리와 그 소리를 그린 그림을 이어 보세요.', target: { match: { e1: '점 네 개 ● ● ● ●', e2: '길게 이어진 선 ━━━━' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '소리를 그림으로 나타낼 수 있을까요?', options: ['없어요, 소리는 안 보여요', '있어요, 점과 선과 모양으로 그려요'], answer: 1, difficulty: 0.1, explain: '짧은 소리는 점, 긴 소리는 선처럼 소리의 특징을 그림으로 나타낼 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '소리를 그려요',
      items: [
        { type: 'table', prompt: '소리를 듣고 그림으로 그리세요.', columns: ['소리', '소리 그림'], cells: [['"톡 톡 톡"', ''], ['"쭈우욱~"', ''], ['"쿵!"', '']] },
        { type: 'choice', prompt: '긴 소리를 그리는 방법에 ○ 하세요.', options: ['길게 이어진 선', '작은 점 하나', '세모 하나'], answer: '길게 이어진 선' },
        { type: 'draw', prompt: '교실에서 들은 소리 하나를 소리 그림으로 그리고, 무슨 소리인지 쓰세요.' },
        { type: 'short', prompt: '짝의 소리 그림을 보고 낸 소리를 흉내 내어 쓰세요.' },
      ],
      easy: {
        note: '짧은 소리는 점, 긴 소리는 선!',
        items: [
          { type: 'choice', prompt: '"톡 톡" 소리 그림에 ○ 하세요.', options: ['● ●', '━━━'], answer: '● ●' },
          { type: 'draw', prompt: '"쭈우욱~" 소리를 그려 보세요.' },
          { type: 'draw', prompt: '"쿵!" 소리를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '짝 잇기가 두 쌍이고, 조각 고르개에는 작게·크게 두 가지 크기만 있어요.',
      base: '소리 그림 약속대로 잇고 나누어, 조각으로 소리 그림을 만들어요.',
      challenge: '함정 카드가 섞이고, 소리 네 개를 조각 세 가지로 그려요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 소리는 보이지 않아 그릴 수 없다고 여긴다(이 차시 중심 오개념) → 그림만 보고 짝이 소리를 낸 경험을 증거로 삼는다. ② 소리 대신 소리 낸 물건(북)을 그린다 → 물건이 아니라 소리의 길이·크기를 그리는 것이라고 짚는다. ③ 소리 그림 약속을 외우기 어려워한다 → 칠판에 약속 그림(점·선·큰 동그라미·위아래)을 붙여 둔다.',
  }));

  lessons.push(L(26, {
    title: '소리를 몸짓으로 나타내고 맞히기',
    objective: '소리의 길이·크기·느낌을 몸짓으로 나타내고, 친구의 몸짓을 보고 어떤 소리인지 알아맞힐 수 있다.',
    illustration: ART('paper children acting out sounds, one stomping big steps for boom, one waving arms slowly like a breeze, one hopping lightly like a bouncing ball, sound words around them', '몸으로 소리를 나타내요', [
      { motif: 'cloud', x: 330, y: 70, s: 0.7 }, { motif: 'leaf', x: 110, y: 222, color: 'mint' }, { motif: 'tree', x: 400, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"선생님이 소리 없이 몸짓만 할게요. 무슨 소리인지 맞혀 봐요." 발을 크게 굴러 \'쿵쿵\'을, 두 팔을 천천히 흔들어 \'살랑살랑\'을 나타낸다. "어떻게 알았어요?" 몸짓도 소리를 나타내는 방법이라는 것을 짚는다. 책상과 의자를 밀어 몸짓할 자리를 만들고, 팔을 벌려 친구와 닿지 않는지 먼저 살피게 한다.',
        student: '자리에서 팔을 벌려 친구와 닿지 않는지 살펴봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '소리 몸짓', slots: [{ id: 's1', label: '"쿵쿵"' }], cards: ['발을 크게 굴러요', '팔을 천천히 흔들어요'], shuffle: false }, sequence: [{ match: { s1: '발을 크게 굴러요' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 소리 몸짓 퀴즈', minutes: 13, tool: 'mindmap',
            teacher: '"소리가 크면 몸짓도 크게, 작으면 몸짓도 작게 해요. 길면 천천히 이어서, 짧으면 톡 끊어서 해요." 카드로 소리와 몸짓을 먼저 이어 본 뒤, 모둠 퀴즈를 한다. 한 사람이 소리 카드를 몰래 보고 몸짓을 하면 모둠 친구가 맞힌다. 뛰는 몸짓은 제자리에서 가볍게만 하게 한다.',
            task: '소리와 어울리는 몸짓을 잇고, 모둠에서 몸짓만 보고 소리를 알아맞히는 퀴즈를 해요.',
            levels: CARD_LV,
            items: [
              { prompt: '소리와 그 소리를 나타낸 몸짓을 이어 보세요.', toolOptions: { mode: 'match', topic: '소리 몸짓', slots: [{ id: 's1', label: '공 튀는 "통통"' }, { id: 's2', label: '바람 "살랑살랑"' }, { id: 's3', label: '풍선 바람 빠지는 "쉬이익"' }], cards: ['제자리에서 가볍게 콩콩 뛰어요', '두 팔을 천천히 흔들어요', '몸을 점점 작게 웅크려요'] },
                target: { match: { s1: '제자리에서 가볍게 콩콩 뛰어요', s2: '두 팔을 천천히 흔들어요', s3: '몸을 점점 작게 웅크려요' } }, difficulty: 0.15,
                levels: { easy: { prompt: '두 소리와 그 소리를 나타낸 몸짓을 이어 보세요.', toolOptions: { slots: [{ id: 's1', label: '공 튀는 "통통"' }, { id: 's2', label: '바람 "살랑살랑"' }], cards: ['제자리에서 가볍게 콩콩 뛰어요', '두 팔을 천천히 흔들어요'] }, target: { match: { s1: '제자리에서 가볍게 콩콩 뛰어요', s2: '두 팔을 천천히 흔들어요' } } } } },
              { prompt: '작은 소리를 나타내는 몸짓만 바구니에 담아 보세요.', toolOptions: { mode: 'pick', basket: '작은 소리 몸짓', cards: ['발끝으로 살금살금 걸어요', '손을 작게 오므려요', '두 팔을 크게 벌려요', '발을 쿵쿵 세게 굴러요'] },
                target: { pick: ['발끝으로 살금살금 걸어요', '손을 작게 오므려요'] }, difficulty: 0.15 },
              { prompt: '모둠에서 돌아가며 몸짓만 보고 소리를 알아맞히는 퀴즈를 했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 비 오는 날 소리 몸짓 공연', minutes: 15, tool: 'story',
            teacher: '"비 오는 날 소리 이야기를 몸짓으로 이어 봐요. 빗방울이 톡톡, 비가 쏴아, 천둥이 쿵!" 먼저 화면에서 차례를 정하고 몸짓을 하나씩 맞춘 뒤, 모둠별로 4분 연습한다. 연습이 끝나면 두 모둠씩 마주 보고 공연한다(한 모둠 1분). 공연을 본 모둠은 어느 몸짓이 가장 소리 같았는지 말해 준다.',
            task: '비 오는 날 소리 차례와 몸짓을 맞춘 뒤, 모둠에서 연습하고 다른 모둠과 마주 보고 공연해요.',
            levels: CARD_LV,
            items: [
              { prompt: '비가 조금씩 오다가 쏟아지고, 천둥이 쳤어요. 차례대로 몸짓 카드를 놓아 보세요.', toolOptions: { slots: ['1', '2', '3'], cards: ['손가락으로 톡톡 빗방울', '두 손을 비벼 쏴아 소낙비', '발을 한 번 쿵 천둥'] },
                target: { order: ['손가락으로 톡톡 빗방울', '두 손을 비벼 쏴아 소낙비', '발을 한 번 쿵 천둥'] }, difficulty: 0.15 },
              { prompt: '비가 그친 뒤 이야기예요. 빈칸에 알맞은 몸짓 카드를 넣어 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'f1', who: '나', label: '비가 그치고 해가 나면 ___.' }, { id: 'f2', who: '나', label: '처마에서 물방울이 똑, 똑 떨어지면 ___.' }], cards: ['두 팔을 머리 위로 활짝 펴요', '손가락 하나로 천천히 톡, 톡', '발을 쿵쿵 굴러요'] },
                target: { fill: { f1: '두 팔을 머리 위로 활짝 펴요', f2: '손가락 하나로 천천히 톡, 톡' } }, difficulty: 0.2 },
              { prompt: '모둠에서 비 오는 날 몸짓을 연습하고 다른 모둠과 마주 보고 공연했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"다른 모둠 공연에서 가장 소리 같았던 몸짓은 무엇이었나요? 왜 그렇게 느꼈나요?" 두세 명이 말하게 한다. "같은 빗소리도 모둠마다 몸짓이 달랐지요?" 다음 시간에는 그림 기호로 소리 악보를 만들어 손뼉과 발로 연주한다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '소리 몸짓', slots: [{ id: 'e1', label: '큰북 "둥!"' }, { id: 'e2', label: '방울 "딸랑딸랑"' }], cards: ['두 팔을 크게 한 번 내려요', '손목을 작게 흔들어요'] }, prompt: '소리와 그 소리를 나타낸 몸짓을 이어 보세요.', target: { match: { e1: '두 팔을 크게 한 번 내려요', e2: '손목을 작게 흔들어요' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '길게 이어지는 소리 "부우웅~"을 몸짓으로 나타내려면 어떻게 할까요?', options: ['팔을 천천히 길게 움직여요', '손뼉을 한 번 톡 쳐요'], answer: 0, difficulty: 0.1, explain: '긴 소리는 몸짓도 끊지 않고 천천히 이어서 해요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '몸으로 소리를 나타내요',
      items: [
        { type: 'table', prompt: '소리와 내가 한 몸짓을 쓰세요.', columns: ['소리', '내 몸짓'], cells: [['"쿵쿵"', ''], ['"살랑살랑"', ''], ['"통통"', '']] },
        { type: 'choice', prompt: '큰 소리를 나타내는 몸짓에 ○ 하세요.', options: ['두 팔을 크게 벌려요', '손가락만 살짝 움직여요'], answer: '두 팔을 크게 벌려요' },
        { type: 'short', prompt: '다른 모둠 공연에서 가장 소리 같았던 몸짓을 쓰세요.' },
        { type: 'draw', prompt: '빗소리를 몸짓으로 나타내는 내 모습을 그려 보세요.' },
      ],
      easy: {
        note: '큰 소리는 크게, 작은 소리는 작게 움직여요.',
        items: [
          { type: 'choice', prompt: '"쿵쿵" 몸짓에 ○ 하세요.', options: ['발을 크게 굴러요', '손을 오므려요'], answer: '발을 크게 굴러요' },
          { type: 'short', prompt: '내가 한 몸짓 하나를 쓰세요.' },
          { type: 'draw', prompt: '몸짓하는 내 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '짝 잇기가 두 쌍이고, 카드에 초록 테두리가 생겨요.',
      base: '세 쌍을 잇고, 비 오는 날 몸짓 차례를 정해요.',
      challenge: '모둠 공연에 비가 그친 뒤 몸짓까지 넣어 이어서 해요.',
    },
    safety: ['몸짓하기 전에 팔을 벌려 친구와 닿지 않는지 살펴요.', '뛰는 몸짓은 제자리에서 가볍게 하고, 책상 위에 올라가지 않아요.'],
    teacherNotes: '자주 보이는 어려움: ① 몸짓이 모두 같은 크기다 → 작은 소리·큰 소리를 번갈아 말해 주며 몸짓 크기를 바꾸어 보게 한다. ② 공연 중 장난이 커진다 → 몸짓 시작과 끝을 손 신호로 정하고, 끝나면 \'얼음\'으로 멈춘다. ③ 몸짓을 부끄러워한다 → 처음에는 손만 쓰는 몸짓으로 시작하고, 모둠이 함께 하게 한다.',
  }));

  lessons.push(L(27, {
    title: '쿵짝 소리 악보 만들어 몸으로 연주하기',
    objective: '"쿵"(발 구르기)과 "짝"(손뼉)이 되풀이되는 소리 악보에서 규칙을 찾아 빈칸을 채우고, 내가 만든 소리 악보를 몸으로 연주할 수 있다.',
    illustration: ART('a long paper strip score with repeating stomp and clap symbols, paper children stomping and clapping along with the pattern, a big arrow showing the order', '쿵짝 소리 악보', [
      { motif: 'star', x: 120, y: 84, s: 0.6 }, { motif: 'flower', x: 380, y: 228, color: 'rose' }, { motif: 'tree', x: 240, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"쿵(발 구르기), 짝(손뼉), 짝(손뼉)! 따라 해 볼까요?" 세 번 되풀이하며 함께 몸으로 연주한다. 칠판에 \'쿵 짝 쿵 짝\'을 쓰고 "다음에는 무엇이 올까요?" 하고 묻는다. 시연 단추로 빈칸이 채워지는 모습을 보여 준다. "소리를 글자나 모양으로 적어 두면 언제든 다시 연주할 수 있어요. 이것을 소리 악보라고 해요."',
        student: '"쿵 짝 짝"을 몸으로 세 번 따라 해 봐요.',
        demo: { tool: 'pattern', options: { seq: ['쿵', '짝', '쿵', '짝', null] }, sequence: [{ fill: ['쿵'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 소리 악보의 규칙 찾기', minutes: 13, tool: 'pattern',
            teacher: '"악보를 소리 내어 읽으면서 몸으로 해 봐요. 쿵은 발, 짝은 손뼉이에요." 빈칸 앞까지 몸으로 연주하고, 빈칸에서 멈춰 "다음은?" 하고 함께 생각한다. 동그라미·별 악보에서는 동그라미가 손뼉, 별이 발 구르기라는 것을 칠판에 붙여 둔다. 틀린 조각 찾기는 몸으로 연주해 보면 \'어, 이상하다\' 싶은 곳이 있다고 알려 준다.',
            task: '소리 악보를 몸으로 연주하며 규칙을 찾아 빈칸을 채우고, 규칙에서 벗어난 조각을 찾아요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '"쿵 짝 짝"이 되풀이되는 소리 악보예요. 빈칸 두 곳을 채워 보세요.', toolOptions: { seq: ['쿵', '짝', '짝', '쿵', '짝', '짝', null, null] }, target: { fill: ['쿵', '짝'] }, difficulty: 0.15,
                levels: { easy: { prompt: '"쿵 짝"이 되풀이되는 소리 악보예요. 빈칸을 채워 보세요.', toolOptions: { seq: ['쿵', '짝', '쿵', '짝', '쿵', null] }, target: { fill: ['짝'] } }, challenge: { prompt: '"쿵 짝 짝"이 되풀이돼요. 가운데와 끝의 빈칸 세 곳을 채워 보세요.', toolOptions: { seq: ['쿵', '짝', '짝', '쿵', null, '짝', null, null, '짝'] }, target: { fill: ['짝', '쿵', '짝'] } } },
                hints: ['악보를 처음부터 몸으로 연주해 보고, 몇 개가 한 묶음으로 되풀이되는지 찾아요.', '빈칸 바로 앞 묶음이 끝났는지 다시 세어 봐요.', '한 묶음은 발 한 번, 손뼉 두 번이에요. 다음 묶음의 처음부터 채워요.'] },
              { prompt: '동그라미는 손뼉, 별은 발 구르기예요. 규칙을 찾아 빈칸 세 곳을 채워 보세요.', toolOptions: { seq: ['circle:sky', 'circle:sky', 'star:buttercup', 'circle:sky', 'circle:sky', 'star:buttercup', null, null, null] }, target: { fill: ['circle:sky', 'circle:sky', 'star:buttercup'] }, difficulty: 0.2,
                hints: ['손뼉과 발 구르기로 처음부터 연주하며 묶음을 찾아요.', '빈칸의 첫 자리는 새 묶음의 처음이에요. 묶음이 무엇으로 시작하는지 봐요.', '손뼉, 손뼉, 발 구르기 순서로 채워요.'] },
              { prompt: '"쿵 짝" 악보에 규칙에서 벗어난 조각이 하나 있어요. 그 조각을 찾아 보세요.', toolOptions: { mode: 'odd', seq: ['쿵', '짝', '쿵', '짝', '짝', '짝', '쿵', '짝'] }, target: { odd: 4 }, difficulty: 0.25,
                hints: ['처음부터 몸으로 연주하다가 이상한 곳에서 멈춰요.', '쿵과 짝이 번갈아 나와야 해요. 짝이 이어서 나온 곳을 찾아요.', '앞에서부터 다섯째 조각이 쿵이어야 할 자리예요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 내 소리 악보 만들어 연주하기', minutes: 15, tool: 'pattern',
            teacher: '"쿵, 짝, 쉿(쉬기) 세 가지로 나만의 소리 악보를 만들어요. 한 묶음을 정해서 두 번 넘게 되풀이해요." 만든 뒤 짝에게 악보를 보여 주고 짝이 먼저 연주해 보게 한다. 마지막 4분에는 모둠 네 명이 각자 악보를 차례로 연주하는 \'모둠 연주회\'를 한다. \'쉿\'은 소리를 내지 않고 손을 입에 대는 몸짓으로 정한다.',
            task: '쿵·짝·쉿으로 되풀이되는 소리 악보를 만들고, 짝과 바꾸어 연주한 뒤 모둠 연주회를 해요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '쿵·짝·쉿으로 한 묶음을 정해 두 번 넘게 되풀이되는 소리 악보 여덟 칸을 만들어 보세요.', toolOptions: { mode: 'make', palette: ['쿵', '짝', '쉿'], length: 8 }, target: { rule: 'repeat', minRepeats: 2 }, difficulty: 0.2,
                levels: { easy: { prompt: '쿵·짝으로 한 묶음을 정해 되풀이되는 소리 악보 여섯 칸을 만들어 보세요.', toolOptions: { palette: ['쿵', '짝'], length: 6 } }, challenge: { prompt: '쿵·짝·쉿을 모두 넣은 세 칸 묶음을 정해 세 번 되풀이되는 아홉 칸 악보를 만들어 보세요.', toolOptions: { length: 9 }, target: { rule: 'repeat', period: 3, minRepeats: 3, uses: 3 } } } },
              { prompt: '짝과 악보를 바꾸어 짝의 악보를 몸으로 연주해 보았으면 "다 했어요"를 누르세요.', free: true, toolOptions: { mode: 'make', palette: ['쿵', '짝', '쉿'], length: 8 } },
              { prompt: '모둠 연주회에서 내 악보를 연주하고 친구 악보 연주도 끝까지 들었으면 "다 했어요"를 누르세요.', free: true, toolOptions: { mode: 'make', palette: ['쿵', '짝', '쉿'], length: 8 } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"악보로 적어 두니 무엇이 좋았나요?" 친구 악보도 바로 연주할 수 있었다는 것을 짚는다. 반 전체가 한 학생의 악보를 함께 연주하며 마친다. 다음 시간에는 더 듣고 싶은 소리를 골라 짝에게 소개한다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'pattern', options: { seq: ['짝', '짝', '쿵', '짝', '짝', '쿵', null] }, prompt: '"짝 짝 쿵"이 되풀이되는 악보예요. 빈칸 한 곳을 채워 보세요.', target: { fill: ['짝'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '소리 악보 "쿵 짝 쿵 짝"을 연주하려면 어떻게 할까요?', options: ['발, 손뼉, 발, 손뼉', '손뼉, 손뼉, 손뼉, 손뼉'], answer: 0, difficulty: 0.1, explain: '쿵은 발 구르기, 짝은 손뼉이라서 발과 손뼉을 번갈아 해요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '쿵짝 소리 악보',
      items: [
        { type: 'figure', prompt: '규칙을 찾아 빈칸에 쿵 또는 짝을 쓰세요.', tool: 'pattern', options: { seq: ['쿵', '짝', '짝', '쿵', '짝', '짝', null, null] }, figures: [{ caption: '' }], answer: '쿵, 짝' },
        { type: 'blank', prompt: '나만의 소리 악보를 쓰세요(쿵·짝·쉿).', text: '_____ _____ _____ _____ _____ _____ _____ _____' },
        { type: 'choice', prompt: '"쉿"을 연주하는 방법에 ○ 하세요.', options: ['소리 내지 않고 쉬어요', '발을 세게 굴러요', '손뼉을 두 번 쳐요'], answer: '소리 내지 않고 쉬어요' },
        { type: 'short', prompt: '친구 악보 가운데 연주하기 재미있었던 것을 쓰세요.' },
      ],
      easy: {
        note: '쿵 = 발, 짝 = 손뼉',
        items: [
          { type: 'choice', prompt: '"쿵 짝 쿵 짝 쿵 ___" 빈칸에 들어갈 것에 ○ 하세요.', options: ['짝', '쿵'], answer: '짝' },
          { type: 'blank', prompt: '나만의 소리 악보를 쓰세요.', text: '_____ _____ _____ _____' },
          { type: 'draw', prompt: '쿵짝 연주를 하는 내 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '"쿵 짝" 두 칸 묶음 악보로 빈칸 하나를 채우고, 쿵·짝 두 가지로 여섯 칸 악보를 만들어요.',
      base: '세 칸 묶음 악보의 빈칸을 채우고, 쿵·짝·쉿으로 여덟 칸 악보를 만들어요.',
      challenge: '빈칸이 가운데에도 있고, 세 가지를 모두 넣은 아홉 칸 악보를 만들어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 빈칸 앞 조각만 보고 같은 것을 넣는다 → 처음부터 몸으로 연주해 묶음을 찾게 한다. ② 악보를 만들 때 규칙 없이 섞는다 → 한 묶음을 먼저 정해 손가락으로 짚고, 그 묶음을 베껴 이어 붙이게 한다. ③ 발 구르기가 커져 아래층에 울린다 → 발은 \'살짝 쿵\'으로 약속한다. 쿵짝 악보는 교사가 직접 만든 것이다.',
  }));

  lessons.push(L(28, {
    title: '더 듣고 싶은 소리 골라 짝에게 소개하기',
    objective: '어디에서 들을 수 있는 소리인지 견주어 보고, 더 듣고 싶은 소리 하나를 골라 소리 그림과 까닭을 붙여 짝에게 소개할 수 있다.',
    illustration: ART('a paper child dreaming of sounds in thought bubbles, ocean waves crashing, cicadas on a summer tree and a train on tracks, while telling a friend about it', '더 듣고 싶은 소리', [
      { motif: 'wave', x: 380, y: 236, s: 0.7 }, { motif: 'tree', x: 100, y: 212 }, { motif: 'sun', x: 410, y: 56, s: 0.5 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"지금까지 학교에서 많은 소리를 들었어요. 학교 밖에는 어떤 소리가 있을까요?" 바닷가·숲·기차역에서 들어 본 소리를 두세 명에게 묻는다. "그 가운데 꼭 다시 듣고 싶은 소리가 있나요?" 시연 단추로 \'파도 "철썩"\'과 \'바닷가\'가 이어지는 것을 보여 준다.',
        student: '가장 기억에 남는 학교 밖 소리를 하나 떠올려 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '어디서 들을까?', slots: [{ id: 's1', label: '파도 "철썩"' }], cards: ['바닷가', '도서실'], shuffle: false }, sequence: [{ match: { s1: '바닷가' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 소리를 들을 수 있는 곳 찾기', minutes: 12, tool: 'mindmap',
            teacher: '"매미 소리를 들으려면 어디로, 언제 가야 할까요?" 소리마다 그 소리가 나는 곳과 때를 떠올리게 한다. 학교 안 소리와 학교 밖 소리를 나눌 때 "오늘 학교에서 들을 수 있나요?"를 기준으로 삼는다. 소개할 때 쓸 말 틀 \'나는 ___ 소리를 더 듣고 싶어. 왜냐하면 ___.\'을 칠판에 붙인다.',
            task: '소리와 그 소리를 들을 수 있는 곳을 잇고, 학교 안에서 들을 수 있는 소리와 밖에서 들을 소리로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '소리와 그 소리를 들을 수 있는 곳을 이어 보세요.', toolOptions: { mode: 'match', topic: '어디서 들을까?', slots: [{ id: 's1', label: '매미 "맴맴"' }, { id: 's2', label: '기차 "칙칙폭폭"' }, { id: 's3', label: '파도 "철썩철썩"' }], cards: ['여름 나무 아래', '기찻길 옆', '바닷가'] },
                target: { match: { s1: '여름 나무 아래', s2: '기찻길 옆', s3: '바닷가' } }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['여름 나무 아래', '기찻길 옆', '바닷가', '조용한 도서실'] } } } },
              { prompt: '소리 카드를 학교 안에서 들을 수 있는 소리와 학교 밖에 가야 들을 소리로 나누어 보세요.', toolOptions: { topic: '어디 소리일까?', slots: ['학교 안 소리', '학교 밖 소리'], cards: ['수업 종 "딩동댕"', '식판 "달각달각"', '배 고동 "뿌우웅"', '소 울음 "음매~"'] },
                target: { sort: { '학교 안 소리': ['수업 종 "딩동댕"', '식판 "달각달각"'], '학교 밖 소리': ['배 고동 "뿌우웅"', '소 울음 "음매~"'] } }, difficulty: 0.15 },
              { prompt: '더 듣고 싶은 소리를 소개하는 말이에요. 무엇을, 왜 듣고 싶은지 다 들어 있는 말만 골라 보세요.', toolOptions: { mode: 'pick', basket: '잘 소개했어요', cards: ['"파도 소리를 더 듣고 싶어. 철썩 소리가 시원하거든"', '"바다"', '"매미 소리가 궁금해. 왜 맴맴 우는지 알고 싶어"', '"몰라, 아무거나"'] },
                target: { pick: ['"파도 소리를 더 듣고 싶어. 철썩 소리가 시원하거든"', '"매미 소리가 궁금해. 왜 맴맴 우는지 알고 싶어"'] }, difficulty: 0.2 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 듣고 싶은 소리 그림 카드 만들어 소개하기', minutes: 15, tool: 'collage',
            teacher: '"더 듣고 싶은 소리를 하나 골라 25차시의 소리 그림 약속(점·선·크기·위아래)으로 소리 그림 카드를 만들어요. 오늘은 약속에 나만의 그림을 더해도 좋아요." 다 만든 뒤 짝에게 말 틀로 소개하고, 짝은 끝까지 듣고 "네 말은 ~라는 거지?"로 옮겨 준다(13차시 듣기 약속). 짝의 소리가 나와 다르면 "그 소리도 궁금하다"는 말을 해 보게 한다.',
            task: '더 듣고 싶은 소리 하나를 골라 소리 그림 카드를 만들고, 말 틀로 짝에게 소개한 뒤 짝의 말을 옮겨 줘요.',
            levels: COL_LV,
            items: [
              { prompt: '더 듣고 싶은 소리를 조각으로 소리 그림 카드에 나타내고 점검해 보세요.', toolOptions: { shapes: ['circle', 'rect', 'semi', 'star', 'leaf', 'triangle'], colors: ['파랑', '초록', '노랑', '검정', '빨강', '하양'] },
                target: { selfCheck: ['더 듣고 싶은 소리를 하나 골랐어요', '소리의 길이나 크기를 조각으로 나타냈어요'], minPieces: 3 }, difficulty: 0.1,
                levels: { easy: { toolOptions: { shapes: ['circle', 'rect', 'semi'], colors: ['파랑', '초록', '검정'] } }, challenge: { prompt: '더 듣고 싶은 소리를 조각으로 나타내되 높낮이까지 위아래로 보이게 하고 점검해 보세요.', target: { selfCheck: ['더 듣고 싶은 소리를 하나 골랐어요', '소리의 길이나 크기를 조각으로 나타냈어요', '소리의 높낮이를 위아래로 나타냈어요'], minPieces: 5 } } } },
              { prompt: '파도 "철썩, 철썩" 소리 카드예요. 파랑 반원 두 개와 하양 작은 동그라미 세 개로 나타내 보세요.', toolOptions: { shapes: ['circle', 'rect', 'semi', 'star', 'leaf', 'triangle'], colors: ['파랑', '초록', '노랑', '검정', '빨강', '하양'] },
                target: { has: [{ shape: 'semi', color: '파랑', n: 2 }, { shape: 'circle', color: '하양', size: 's', n: 3 }] }, difficulty: 0.15,
                levels: { easy: { toolOptions: { shapes: ['semi', 'circle'], colors: ['파랑', '하양'] } } } },
              { prompt: '짝에게 말 틀로 소리를 소개하고, 짝의 소개를 듣고 옮겨 주었으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"짝은 어떤 소리를 더 듣고 싶대요?" 서너 명이 짝의 소리를 옮겨 말하게 한다. 소리 그림 카드는 교실 \'듣고 싶은 소리\' 판에 붙이고, 주말에 들으면 이야기해 달라고 한다. 이 시간으로 소리 공부(17~28차시)를 마치고, 다음 시간부터는 물건을 보고 만지며 느낌을 살펴본다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '어디서 들을까?', slots: [{ id: 'e1', label: '개구리 "개굴개굴"' }, { id: 'e2', label: '비행기 "슈우웅"' }], cards: ['논 옆 물가', '공항'] }, prompt: '소리와 그 소리를 들을 수 있는 곳을 이어 보세요.', target: { match: { e1: '논 옆 물가', e2: '공항' } }, difficulty: 0.1 },
          { type: 'tool', tool: 'emotion', options: { mode: 'scale', situation: '더 듣고 싶은 소리를 떠올릴 때', feeling: '설렘', steps: 3, scaleLabels: ['조금', '', '아주 많이'], ask: '그 소리를 듣고 싶은 마음이 얼마나 큰가요?' }, prompt: '더 듣고 싶은 소리를 떠올리면 얼마나 궁금하고 설레는지 솔직하게 골라 보세요.', target: { level: 'any' }, difficulty: 0.05 },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '더 듣고 싶은 소리',
      items: [
        { type: 'blank', prompt: '말 틀을 채우세요.', text: '나는 ________ 소리를 더 듣고 싶어. 왜냐하면 ______________________.' },
        { type: 'draw', prompt: '더 듣고 싶은 소리를 소리 그림으로 그리세요.' },
        { type: 'choice', prompt: '매미 소리를 들을 수 있는 곳에 ○ 하세요.', options: ['여름 나무 아래', '겨울 눈밭', '도서실'], answer: '여름 나무 아래' },
        { type: 'short', prompt: '짝이 더 듣고 싶은 소리를 옮겨 쓰세요.' },
      ],
      easy: {
        note: '무엇을, 왜 듣고 싶은지 말해요.',
        items: [
          { type: 'short', prompt: '더 듣고 싶은 소리를 쓰세요.' },
          { type: 'choice', prompt: '파도 소리를 들을 수 있는 곳에 ○ 하세요.', options: ['바닷가', '교실'], answer: '바닷가' },
          { type: 'draw', prompt: '그 소리가 나는 곳을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '조각 고르개에 모양 세 가지, 색 세 가지만 있어요. 카드에 초록 테두리가 생겨요.',
      base: '여섯 가지 모양과 색으로 소리 그림 카드를 만들어요.',
      challenge: '소리의 높낮이까지 위아래로 나타내고, 함정 장소 카드가 섞여 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 듣고 싶은 소리를 고르지 못한다 → 21~27차시 활동지를 돌려주고 그중에서 골라도 된다고 말해 준다. ② 소개에 까닭이 빠진다 → 말 틀의 \'왜냐하면\'을 손가락으로 짚게 한다. ③ 짝의 소리를 이상하다고 한다 → 9~12차시 열린 말("그 소리도 궁금하다")을 다시 떠올리게 한다.',
  }));

  // ───────────────────────── 29~32차시: 보고 만져 견주기 ─────────────────────────

  lessons.push(L(29, {
    title: '눈으로 안 것과 만져서 안 것 나누기',
    objective: '솔방울을 보고 만져 본 뒤, 눈으로 알게 된 것과 손으로 만져서 알게 된 것을 나누어 말할 수 있다.',
    illustration: ART('a paper child holding a big brown pine cone, one paper eye looking at it and one paper hand touching its rough scales, arrows showing look and touch', '보고 만져요', [
      { motif: 'tree', x: 90, y: 212 }, { motif: 'leaf', x: 380, y: 226, color: 'mint' }, { motif: 'bird', x: 300, y: 80 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"오늘부터는 소리 대신 물건이 들려주는 이야기를 들어요. 물건 이야기는 눈으로도, 손으로도 들을 수 있어요." 모둠마다 솔방울 하나를 나누어 주고 1분 동안 보기만 하게 한 뒤, 다음 1분은 눈을 감고 만지기만 하게 한다. "보기만 할 때와 만질 때 알게 된 것이 같았나요?" 시연 단추로 \'갈색이에요\' 카드가 \'눈으로 알았어요\' 칸으로 가는 것을 보여 준다.',
        student: '솔방울을 1분은 보기만 하고, 1분은 눈을 감고 만지기만 해요.',
        demo: { tool: 'mindmap', options: { topic: '솔방울 이야기', slots: ['눈으로 알았어요', '만져서 알았어요'], cards: ['갈색이에요', '까끌까끌해요'], shuffle: false }, sequence: [{ sort: { '눈으로 알았어요': ['갈색이에요'], '만져서 알았어요': ['까끌까끌해요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 솔방울 이야기 나누기', minutes: 13, tool: 'mindmap',
            teacher: '"헷갈리면 이렇게 물어봐요. \'눈을 감고도 알 수 있나요?\' 눈을 감고도 알 수 있으면 만져서 안 것이고, 눈을 감으면 모르면 눈으로 안 것이에요." 이 기준을 칠판에 붙인다. 카드마다 실제로 눈을 감고 솔방울을 만져 보며 견주게 한다. 모양처럼 보고도 만져서도 알 수 있는 것은 오늘 카드에 넣지 않았다고 알려 준다.',
            task: '솔방울에 대해 알게 된 것을 눈으로 안 것과 만져서 안 것으로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '솔방울에 대해 알게 된 것을 눈으로 안 것과 만져서 안 것으로 나누어 보세요.', toolOptions: { topic: '솔방울 이야기', slots: ['눈으로 알았어요', '만져서 알았어요'], cards: ['갈색이에요', '끝이 조금 하얘요', '까끌까끌해요', '가벼워요'] },
                target: { sort: { '눈으로 알았어요': ['갈색이에요', '끝이 조금 하얘요'], '만져서 알았어요': ['까끌까끌해요', '가벼워요'] } }, difficulty: 0.15,
                levels: { challenge: { prompt: '솔방울에 대해 알게 된 여섯 가지를 눈으로 안 것과 만져서 안 것으로 나누어 보세요.', toolOptions: { cards: ['갈색이에요', '끝이 조금 하얘요', '그림자가 생겨요', '까끌까끌해요', '가벼워요', '끝이 조금 따끔해요'] }, target: { sort: { '눈으로 알았어요': ['갈색이에요', '끝이 조금 하얘요', '그림자가 생겨요'], '만져서 알았어요': ['까끌까끌해요', '가벼워요', '끝이 조금 따끔해요'] } } } } },
              { prompt: '눈을 감고 만지기만 해도 알 수 있는 것만 바구니에 담아 보세요.', toolOptions: { mode: 'pick', basket: '눈 감고도 알아요', cards: ['차가워요', '딱딱해요', '초록색이에요', '반짝반짝 빛나요'] },
                target: { pick: ['차가워요', '딱딱해요'] }, difficulty: 0.15 },
              { prompt: '솔방울을 보기만 하고, 눈을 감고 만지기만 해 본 뒤 모둠에서 알게 된 것을 말했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 알 때 쓴 몸의 부분', minutes: 14, tool: 'body',
            teacher: '"색을 알 때는 몸의 어디를 썼나요? 까끌까끌한 것은요?" 몸 그림에서 고르기 전에 내 몸에서 먼저 손으로 짚게 한다. 만져서 안 것은 손가락 끝의 \'피부\'로 고른다고 알려 준다. 솔방울을 입에 넣거나 냄새를 세게 맡지 않도록 한다.',
            task: '솔방울을 살필 때 쓴 몸의 부분을 몸 그림에서 고르고, 내 몸에서도 짚어 봐요.',
            levels: BODY_LV,
            items: [
              { prompt: '솔방울이 갈색이라는 것을 알 때 쓴 곳을 몸 그림에서 골라 보세요.', target: { parts: ['눈'] }, difficulty: 0.05,
                hints: BH('눈을 감으면 색을 알 수 있는지 떠올려요.', '색은 손으로 만져서는 알 수 없어요. 무엇으로 보았는지 생각해요.', '얼굴에서 보는 일을 하는 곳 하나만 골라요.') },
              { prompt: '눈을 감고 솔방울이 까끌까끌하다는 것을 알았어요. 쓴 곳을 골라 보세요.', target: { parts: ['피부'] }, difficulty: 0.1,
                hints: BH('눈을 감았으니 눈은 쓰지 않았어요.', '까끌까끌한 느낌은 솔방울에 닿은 곳으로 느껴요.', '손가락 끝을 덮고 있는 곳, 몸 전체를 감싼 곳을 골라요.') },
              { prompt: '솔방울을 보고 갈색인 것을 알고, 만져서 가벼운 것도 알았어요. 쓴 곳 두 곳을 골라 보세요.', target: { parts: ['눈', '피부'] }, difficulty: 0.15,
                hints: BH('알게 된 것이 두 가지예요. 하나는 보고, 하나는 만져서 알았어요.', '본 곳과 만진 곳이 둘 다 골라졌는지 봐요.', '색은 눈, 무게와 느낌은 피부예요.') },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"보기만 했을 때는 몰랐는데 만져 보고 알게 된 것이 있나요?" 두세 명이 말하게 한다. "물건 이야기를 더 많이 들으려면 보기도 하고 만지기도 하면 좋겠지요?" 다음 시간에는 주머니 속 물건을 보지 않고 만져서만 알아맞힌다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '조약돌 이야기', slots: ['눈으로 알았어요', '만져서 알았어요'], cards: ['하얀 줄무늬가 있어요', '매끈매끈해요'] }, prompt: '조약돌에 대해 알게 된 것을 눈으로 안 것과 만져서 안 것으로 나누어 보세요.', target: { sort: { '눈으로 알았어요': ['하얀 줄무늬가 있어요'], '만져서 알았어요': ['매끈매끈해요'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '눈을 감고 만지기만 해서 알 수 있는 것은 무엇일까요?', options: ['나뭇잎 색이 노래요', '나뭇잎이 바삭바삭해요'], answer: 1, difficulty: 0.1, explain: '색은 눈으로 보아야 알고, 바삭바삭한 느낌은 눈을 감고 만져도 알아요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '보고 만져요',
      items: [
        { type: 'table', prompt: '솔방울에 대해 알게 된 것을 쓰세요.', columns: ['눈으로 알았어요', '만져서 알았어요'], rows: 2 },
        { type: 'choice', prompt: '눈을 감고도 알 수 있는 것에 ○ 하세요.', options: ['딱딱해요', '갈색이에요'], answer: '딱딱해요' },
        { type: 'figure', prompt: '만져서 알 때 쓰는 곳에 ○ 하세요.', tool: 'body', options: { mode: 'parts', parts: SENSE }, figures: [{ caption: '' }] },
        { type: 'draw', prompt: '내가 살펴본 솔방울을 그려 보세요.' },
      ],
      easy: {
        note: '눈을 감고도 알 수 있나요? 그러면 만져서 안 거예요.',
        items: [
          { type: 'choice', prompt: '솔방울 색은 무엇으로 알았나요? ○ 하세요.', options: ['눈', '손'], answer: '눈' },
          { type: 'short', prompt: '솔방울을 만진 느낌을 쓰세요.' },
          { type: 'draw', prompt: '솔방울을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드에 초록 테두리가 생기고, 몸 그림에 이름이 보여요.',
      base: '네 장을 두 칸으로 나누고, 감각 기관 다섯 곳 가운데서 골라요.',
      challenge: '여섯 장을 나누고, 몸 그림에 감각과 상관없는 곳이 섞여 있어요.',
    },
    safety: ['솔방울을 입에 넣지 않아요.', '끝이 뾰족한 곳은 손가락으로 세게 누르지 않아요.'],
    teacherNotes: '자주 보이는 어려움: ① 모양을 어느 칸에 둘지 다툰다 → 모양은 보고도 만져서도 알 수 있어 오늘 카드에서 뺐다고 말해 주고, 33차시에서 여러 감각으로 다시 다룬다. ② 눈을 감지 않고 만진다 → 짝이 눈을 가려 주는 대신 스스로 눈을 감게 한다(안대는 쓰지 않는다). ③ 만져서 안 것을 \'손\'이라고 고르려 한다 → 몸 그림에서는 닿는 느낌을 아는 곳을 \'피부\'라고 부른다고 알려 준다.',
  }));

  lessons.push(L(30, {
    title: '주머니 속 물건 만져서 알아맞히기',
    objective: '주머니 속 물건을 보지 않고 만져서 느낌을 말하고, 그 느낌을 실마리로 어떤 물건인지 알아맞힐 수 있다.',
    illustration: ART('a cloth paper pouch with a child hand reaching inside, thought bubbles showing a soft ball, a pencil and a ball of yarn, friends guessing around', '주머니 속에 무엇이 있을까?', [
      { motif: 'star', x: 120, y: 84, s: 0.6 }, { motif: 'flower', x: 380, y: 228, color: 'rose' }, { motif: 'tree', x: 420, y: 210 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"이 주머니 속에 물건이 하나 있어요. 보지 않고 만져서만 맞혀 볼 사람?" 한 학생이 손을 넣어 만지며 느낌을 말하게 하고("말랑말랑해요, 동그래요"), 반 친구들이 맞힌다. "느낌을 말해 주니까 친구들도 맞힐 수 있었지요?" 시연 단추로 \'말랑말랑하고 동그래요\'가 \'고무공\'과 이어지는 것을 보여 준다.',
        student: '주머니에 손을 넣은 친구가 말하는 느낌을 잘 들어요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '주머니 속 물건', slots: [{ id: 's1', label: '말랑말랑하고 동그래요' }], cards: ['고무공', '연필'], shuffle: false }, sequence: [{ match: { s1: '고무공' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 느낌말로 물건 맞히기', minutes: 12, tool: 'mindmap',
            teacher: '"느낌말을 듣고 어떤 물건인지 이어 봐요. 느낌말이 두 개면 두 가지가 다 맞는 물건을 찾아요." 카드를 읽을 때 실제 물건을 보이지 않게 들고 만져 보게 한다. 색이나 글자처럼 만져서 알 수 없는 말은 실마리가 될 수 없다는 것을 짚는다.',
            task: '주머니 속 물건을 만진 느낌말을 읽고, 어떤 물건인지 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '만진 느낌말과 주머니 속 물건을 이어 보세요.', toolOptions: { mode: 'match', topic: '주머니 속 물건', slots: [{ id: 's1', label: '딱딱하고 길쭉해요' }, { id: 's2', label: '보들보들하고 가벼워요' }, { id: 's3', label: '차갑고 동글납작해요' }], cards: ['연필', '털실 뭉치', '동전'] },
                target: { match: { s1: '연필', s2: '털실 뭉치', s3: '동전' } }, difficulty: 0.15,
                levels: { easy: { prompt: '두 느낌말과 주머니 속 물건을 이어 보세요.', toolOptions: { slots: [{ id: 's1', label: '딱딱하고 길쭉해요' }, { id: 's2', label: '보들보들하고 가벼워요' }], cards: ['연필', '털실 뭉치'] }, target: { match: { s1: '연필', s2: '털실 뭉치' } } }, challenge: { toolOptions: { cards: ['연필', '털실 뭉치', '동전', '고무공'] } } } },
              { prompt: '주머니 속 물건을 맞힐 실마리가 되는 말만 바구니에 담아 보세요.', toolOptions: { mode: 'pick', basket: '만져서 알 수 있어요', cards: ['울퉁불퉁해요', '말랑말랑해요', '빨간색이에요', '글자가 쓰여 있어요'] },
                target: { pick: ['울퉁불퉁해요', '말랑말랑해요'] }, difficulty: 0.15 },
              { prompt: '주머니 속 물건을 만진 친구의 느낌말이에요. "폭신폭신하고 네모나요." 어떤 물건일까요?', toolOptions: { mode: 'pick', basket: '이 물건이에요', cards: ['지우개', '작은 쿠션', '유리구슬'] },
                target: { pick: ['작은 쿠션'] }, difficulty: 0.2 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 모둠 주머니 놀이', minutes: 16, tool: 'body',
            teacher: '"모둠마다 주머니 하나, 물건 세 개가 있어요. 한 사람씩 주머니에 손을 넣고 느낌말 두 개를 말하면, 나머지 친구가 맞혀요." 차례를 돌려 모두 한 번씩 손을 넣게 한다(8분). 주머니에는 교사가 미리 고른 안전한 물건만 넣는다. 놀이가 끝나면 몸 그림에서 쓴 곳을 고른다.',
            task: '모둠에서 주머니 놀이를 하고, 물건을 알아맞힐 때 쓴 몸의 부분을 몸 그림에서 골라요.',
            levels: BODY_LV,
            items: [
              { prompt: '모둠에서 돌아가며 주머니에 손을 넣고 느낌말 두 개로 물건을 소개했으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '주머니 속을 보지 않고 손으로 만져서 물건을 맞혔어요. 쓴 곳을 몸 그림에서 골라 보세요.', target: { parts: ['피부'] }, difficulty: 0.1,
                hints: BH('주머니 속은 보이지 않았으니 눈은 쓰지 않았어요.', '물건에 닿아서 느낌을 알려 준 곳을 떠올려요.', '손가락과 손바닥을 덮고 있는 곳을 골라요.') },
              { prompt: '주머니에서 꺼낸 물건을 보고 색을 말하고, 친구의 느낌말도 귀 기울여 들었어요. 쓴 곳 두 곳을 골라 보세요.', target: { parts: ['눈', '귀'] }, difficulty: 0.2,
                hints: BH('색을 말한 일과 친구 말을 들은 일, 두 가지를 떠올려요.', '이번에는 만지지 않았어요. 보고 들은 곳만 골라요.', '색은 눈, 친구 말은 귀예요.') },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"친구가 어떤 말을 할 때 맞히기 쉬웠나요?" 느낌말이 둘일 때 맞히기 쉬웠다는 이야기를 모은다. "다음 시간에는 만진 느낌을 세 가지 말로 나타내 봐요." 주머니와 물건은 모둠 바구니에 다시 담게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '주머니 속 물건', slots: [{ id: 'e1', label: '매끈하고 동그래요' }, { id: 'e2', label: '까슬까슬하고 납작해요' }], cards: ['유리구슬', '사포 조각'] }, prompt: '만진 느낌말과 주머니 속 물건을 이어 보세요.', target: { match: { e1: '유리구슬', e2: '사포 조각' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '주머니 속 물건을 맞힐 실마리가 될 수 없는 말은 무엇일까요?', options: ['노란색이에요', '딱딱해요'], answer: 0, difficulty: 0.1, explain: '주머니 속은 보이지 않으니 색은 만져서 알 수 없어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '주머니 속에 무엇이 있을까?',
      items: [
        { type: 'table', prompt: '만진 물건의 느낌말과 내가 맞힌 것을 쓰세요.', columns: ['느낌말', '내가 맞힌 것', '진짜'], rows: 3 },
        { type: 'choice', prompt: '주머니 속 물건을 맞힐 실마리가 되는 말에 ○ 하세요.', options: ['말랑말랑해요', '파란색이에요'], answer: '말랑말랑해요' },
        { type: 'short', prompt: '친구가 맞히기 쉬웠던 느낌말을 쓰세요.' },
        { type: 'draw', prompt: '주머니에서 꺼낸 물건 하나를 그려 보세요.' },
      ],
      easy: {
        note: '만져서 알 수 있는 말로 말해요.',
        items: [
          { type: 'choice', prompt: '"말랑말랑하고 동그래요"에 맞는 것에 ○ 하세요.', options: ['고무공', '연필'], answer: '고무공' },
          { type: 'short', prompt: '내가 만진 물건의 느낌을 쓰세요.' },
          { type: 'draw', prompt: '만진 물건을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '느낌말 두 쌍을 잇고, 카드에 초록 테두리가 생겨요.',
      base: '세 쌍을 잇고, 실마리가 되는 말을 골라요.',
      challenge: '함정 물건 카드가 섞여 있고, 몸 그림에 감각과 상관없는 곳이 섞여 있어요.',
    },
    safety: ['주머니에는 선생님이 넣은 물건만 넣어요.', '물건을 입에 넣거나 친구에게 던지지 않아요.'],
    teacherNotes: '준비물: 모둠마다 천 주머니 하나와 끝이 둥근 물건 세 개(고무공·털실 뭉치·지우개 등). 자주 보이는 어려움: ① 손을 넣자마자 이름을 말한다 → 이름 대신 느낌말 두 개를 먼저 말하는 것이 놀이 규칙이라고 다시 알려 준다. ② 주머니를 몰래 들여다본다 → 주머니 입구를 손목에서 오므려 준다. ③ 느낌말이 \'이상해요\'뿐이다 → 칠판의 느낌말 모음(말랑·딱딱·보들·까끌·매끈)을 가리켜 고르게 한다.',
  }));

  lessons.push(L(31, {
    title: '만진 느낌을 세 가지 말로 나타내기',
    objective: '물건을 만진 느낌을 부드러운 느낌말과 거친 느낌말로 나누고, 한 물건의 느낌을 세 가지 말로 나타낼 수 있다.',
    illustration: ART('paper samples on a table, a fluffy cotton ball, a rough sandpaper square, a smooth glass marble and a bumpy walnut, each with a little word card beside it', '느낌을 말로 나타내요', [
      { motif: 'leaf', x: 110, y: 222, color: 'mint' }, { motif: 'flower', x: 380, y: 228, color: 'rose' }, { motif: 'cloud', x: 330, y: 70, s: 0.7 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"이 솜을 만지면 어떤 느낌이에요?" 몇 명이 만지고 말하게 한다. "\'좋아요\'라고만 하면 친구가 느낌을 알 수 있을까요? \'폭신폭신해요\'라고 하면 어때요?" 시연 단추로 \'솜\'과 \'폭신폭신\'이 이어지는 것을 보여 주고, 오늘은 느낌을 세 가지 말로 나타낸다고 말한다.',
        student: '솜을 만지고 떠오르는 느낌말을 하나 말해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '느낌말', slots: [{ id: 's1', label: '솜' }], cards: ['폭신폭신', '까끌까끌'], shuffle: false }, sequence: [{ match: { s1: '폭신폭신' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 느낌말 모으기', minutes: 13, tool: 'mindmap',
            teacher: '"부드러운 느낌은 손이 미끄러지듯 편하고, 거친 느낌은 손에 걸리거나 따끔해요." 모둠마다 솜·사포·유리구슬·호두를 돌려 만지게 한다. 느낌말 카드를 소리 내어 읽으며 손가락으로 물건을 쓸어 보게 한다. 같은 물건에 느낌말이 여러 개 붙을 수 있다는 것도 알려 준다.',
            task: '물건을 돌려 만지며, 느낌말을 부드러운 느낌과 거친 느낌으로 나누고 물건과 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '느낌말을 부드러운 느낌과 거친 느낌으로 나누어 보세요.', toolOptions: { topic: '느낌말', slots: ['부드러운 느낌', '거친 느낌'], cards: ['보들보들', '매끈매끈', '까끌까끌', '울퉁불퉁'] },
                target: { sort: { '부드러운 느낌': ['보들보들', '매끈매끈'], '거친 느낌': ['까끌까끌', '울퉁불퉁'] } }, difficulty: 0.1,
                levels: { challenge: { prompt: '느낌말 여섯 개를 부드러운 느낌과 거친 느낌으로 나누어 보세요.', toolOptions: { cards: ['보들보들', '매끈매끈', '폭신폭신', '까끌까끌', '울퉁불퉁', '따끔따끔'] }, target: { sort: { '부드러운 느낌': ['보들보들', '매끈매끈', '폭신폭신'], '거친 느낌': ['까끌까끌', '울퉁불퉁', '따끔따끔'] } } } } },
              { prompt: '물건과 그 물건을 만진 느낌말을 이어 보세요.', toolOptions: { mode: 'match', topic: '느낌말', slots: [{ id: 's1', label: '사포' }, { id: 's2', label: '유리구슬' }, { id: 's3', label: '호두' }], cards: ['까끌까끌', '매끈매끈', '울퉁불퉁'] },
                target: { match: { s1: '까끌까끌', s2: '매끈매끈', s3: '울퉁불퉁' } }, difficulty: 0.15 },
              { prompt: '물건을 만진 느낌을 가장 잘 알려 주는 말만 바구니에 담아 보세요.', toolOptions: { mode: 'pick', basket: '느낌이 잘 보여요', cards: ['"차갑고 매끈매끈해요"', '"좋아요"', '"보들보들하고 따뜻해요"', '"그냥 그래요"'] },
                target: { pick: ['"차갑고 매끈매끈해요"', '"보들보들하고 따뜻해요"'] }, difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 한 물건을 세 가지 말로', minutes: 15, tool: 'story',
            teacher: '"느낌말 세 가지를 쓰려면 한 번만 만지지 말고, 쓸어 보고, 눌러 보고, 들어 보세요." 쓸면 매끈·까끌, 누르면 말랑·딱딱, 들면 가볍다·무겁다를 알 수 있다고 칠판에 정리한다. 빈칸 문장을 채운 뒤, 짝에게 물건 이름을 말하지 않고 느낌말 세 개만 말해 맞히게 한다.',
            task: '쓸고, 누르고, 들어 보며 알게 된 느낌을 빈칸에 넣고, 짝에게 느낌말 세 개로 물건 퀴즈를 내요.',
            levels: CARD_LV,
            items: [
              { prompt: '돌멩이를 쓸어 보고, 눌러 보고, 들어 보았어요. 빈칸에 알맞은 느낌말을 넣어 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'f1', who: '나', label: '손으로 쓸어 보니 ___.' }, { id: 'f2', who: '나', label: '꾹 눌러 보니 ___.' }, { id: 'f3', who: '나', label: '손에 들어 보니 ___.' }], cards: ['매끈매끈해요', '딱딱해요', '묵직해요'] },
                target: { fill: { f1: '매끈매끈해요', f2: '딱딱해요', f3: '묵직해요' } }, difficulty: 0.2,
                levels: { easy: { prompt: '돌멩이를 쓸어 보고 눌러 보았어요. 빈칸에 알맞은 느낌말을 넣어 보세요.', toolOptions: { slots: [{ id: 'f1', who: '나', label: '손으로 쓸어 보니 ___.' }, { id: 'f2', who: '나', label: '꾹 눌러 보니 ___.' }], cards: ['매끈매끈해요', '딱딱해요'] }, target: { fill: { f1: '매끈매끈해요', f2: '딱딱해요' } } }, challenge: { toolOptions: { cards: ['매끈매끈해요', '딱딱해요', '묵직해요', '폭신폭신해요', '깃털처럼 가벼워요'] } } } },
              { prompt: '스펀지를 쓸어 보고, 눌러 보고, 들어 보았어요. 빈칸에 알맞은 느낌말을 넣어 보세요.', toolOptions: { mode: 'fill', slots: [{ id: 'f1', who: '나', label: '손으로 쓸어 보니 ___.' }, { id: 'f2', who: '나', label: '꾹 눌러 보니 ___.' }, { id: 'f3', who: '나', label: '손에 들어 보니 ___.' }], cards: ['구멍이 송송 까슬해요', '푹 들어갔다 올라와요', '아주 가벼워요'] },
                target: { fill: { f1: '구멍이 송송 까슬해요', f2: '푹 들어갔다 올라와요', f3: '아주 가벼워요' } }, difficulty: 0.2 },
              { prompt: '짝에게 물건 이름을 말하지 않고 느낌말 세 개만으로 퀴즈를 내고, 짝의 퀴즈도 맞혀 보았으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"짝의 퀴즈를 맞힐 때 도움이 된 느낌말은 무엇이었나요?" 서너 명에게 묻고 칠판 느낌말 모음에 새 말을 더한다. "다음 시간에는 보기와 만진 느낌이 다른 물건을 찾아봐요."',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '느낌말', slots: [{ id: 'e1', label: '털 장갑' }, { id: 'e2', label: '밤송이' }], cards: ['보들보들', '따끔따끔'] }, prompt: '물건과 그 물건을 만진 느낌말을 이어 보세요.', target: { match: { e1: '보들보들', e2: '따끔따끔' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '물건이 말랑한지 딱딱한지 알려면 어떻게 해 볼까요?', options: ['꾹 눌러 봐요', '멀리서 봐요'], answer: 0, difficulty: 0.1, explain: '눌러 보면 들어가는지, 그대로인지로 말랑함과 딱딱함을 알 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '느낌을 말로 나타내요',
      items: [
        { type: 'table', prompt: '물건을 쓸고, 누르고, 들어 본 느낌을 쓰세요.', columns: ['물건', '쓸어 보니', '눌러 보니', '들어 보니'], rows: 2 },
        { type: 'choice', prompt: '거친 느낌말에 ○ 하세요.', options: ['까끌까끌', '보들보들'], answer: '까끌까끌' },
        { type: 'blank', prompt: '짝에게 낸 느낌말 퀴즈를 쓰세요.', text: '이 물건은 ________, ________, ________. 무엇일까요?' },
        { type: 'short', prompt: '새로 알게 된 느낌말을 하나 쓰세요.' },
      ],
      easy: {
        note: '쓸어 보고, 눌러 보고, 들어 봐요.',
        items: [
          { type: 'choice', prompt: '솜을 만진 느낌에 ○ 하세요.', options: ['폭신폭신', '딱딱'], answer: '폭신폭신' },
          { type: 'short', prompt: '내가 만진 물건의 느낌말을 하나 쓰세요.' },
          { type: 'draw', prompt: '만진 물건을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '느낌 빈칸이 두 개이고, 카드에 초록 테두리가 생겨요.',
      base: '느낌말 네 개를 나누고, 빈칸 세 개를 채워요.',
      challenge: '느낌말 여섯 개를 나누고, 빈칸 카드에 함정 느낌말이 섞여 있어요.',
    },
    safety: ['사포와 호두는 손가락으로 살살 쓸기만 해요.'],
    teacherNotes: '준비물: 모둠마다 솜·사포 조각·유리구슬·호두·돌멩이·스펀지. 밤송이는 만지지 않고 사진으로만 보여 준다. 자주 보이는 어려움: ① 느낌말 대신 \'좋다·싫다\'로 말한다 → 좋고 싫은 것은 내 마음이고, 느낌말은 물건이 어떤지라고 구분해 준다. ② 세 가지를 다 같은 방법으로 찾는다 → 쓸기·누르기·들기 손 동작을 하나씩 해 보게 한다. ③ 매끈매끈을 거친 느낌으로 둔다 → 사포와 유리구슬을 번갈아 쓸어 보게 한다.',
  }));

  lessons.push(L(32, {
    title: '보기와 만진 느낌이 다른 것 찾기',
    objective: '보기만 하고 짐작한 느낌과 실제로 만진 느낌을 견주어 보고, 보기와 다르게 느껴진 물건을 찾아 말할 수 있다.',
    illustration: ART('a paper child comparing a shiny metal spoon, a fluffy foxtail grass and a rough tree bark, a thought bubble of guessing next to a hand touching', '보기와 만지기가 달라요', [
      { motif: 'tree', x: 90, y: 212 }, { motif: 'leaf', x: 380, y: 226, color: 'mint' }, { motif: 'star', x: 300, y: 80, s: 0.5 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"이 쇠 숟가락을 보기만 하고 만졌을 때 느낌을 짐작해 볼까요?" 짐작을 두세 명에게 듣고 칠판에 쓴다. 그다음 실제로 만지게 한다. "짐작과 같았나요, 달랐나요?" 시연 단추로 \'쇠 숟가락\'과 \'차갑고 매끈해요\'가 이어지는 것을 보여 준다.',
        student: '숟가락을 만지기 전에 느낌을 먼저 짐작해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '만져 보니', slots: [{ id: 's1', label: '쇠 숟가락' }], cards: ['차갑고 매끈해요', '말랑하고 따뜻해요'], shuffle: false }, sequence: [{ match: { s1: '차갑고 매끈해요' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 짐작하고 만져 보기', minutes: 14, tool: 'mindmap',
            teacher: '"물건마다 짐작을 먼저 활동지에 쓰고, 그다음 만져 봐요." 모둠마다 강아지풀·나무껍질 조각·쇠 숟가락·지점토 덩이를 돌린다. 화면에서는 만져 본 진짜 느낌과 물건을 잇게 한다. "짐작이 틀려도 괜찮아요. 만져 보고 고치면 새로 알게 된 거예요."',
            task: '물건의 느낌을 먼저 짐작하고 만져 본 뒤, 만져 보니 어땠는지 물건과 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '물건과 만져 보니 어땠는지를 이어 보세요.', toolOptions: { mode: 'match', topic: '만져 보니', slots: [{ id: 's1', label: '강아지풀' }, { id: 's2', label: '나무껍질' }, { id: 's3', label: '지점토 덩이' }], cards: ['간질간질 부드러워요', '울퉁불퉁 딱딱해요', '말랑하고 촉촉해요'] },
                target: { match: { s1: '간질간질 부드러워요', s2: '울퉁불퉁 딱딱해요', s3: '말랑하고 촉촉해요' } }, difficulty: 0.15,
                levels: { easy: { prompt: '두 물건과 만져 보니 어땠는지를 이어 보세요.', toolOptions: { slots: [{ id: 's1', label: '강아지풀' }, { id: 's2', label: '나무껍질' }], cards: ['간질간질 부드러워요', '울퉁불퉁 딱딱해요'] }, target: { match: { s1: '간질간질 부드러워요', s2: '울퉁불퉁 딱딱해요' } } }, challenge: { toolOptions: { cards: ['간질간질 부드러워요', '울퉁불퉁 딱딱해요', '말랑하고 촉촉해요', '차갑고 매끈해요'] } } } },
              { prompt: '서아의 짐작과 만져 본 느낌이에요. 짐작과 만진 느낌이 달랐던 것만 바구니에 담아 보세요.', toolOptions: { mode: 'pick', basket: '짐작과 달랐어요', cards: ['딱딱할 줄 알았는데 지점토가 말랑했어요', '부드러울 줄 알았는데 강아지풀이 정말 부드러웠어요', '따뜻할 줄 알았는데 숟가락이 차가웠어요', '울퉁불퉁할 줄 알았는데 나무껍질이 정말 울퉁불퉁했어요'] },
                target: { pick: ['딱딱할 줄 알았는데 지점토가 말랑했어요', '따뜻할 줄 알았는데 숟가락이 차가웠어요'] }, difficulty: 0.25 },
              { prompt: '물건마다 느낌을 먼저 짐작해 쓰고, 만져 본 뒤 모둠에서 짐작과 같았는지 말했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 짐작할 때와 만질 때 쓴 곳', minutes: 13, tool: 'body',
            teacher: '"짐작할 때는 보기만 했고, 알아볼 때는 만졌어요. 그때마다 쓴 곳이 같았나요?" 몸 그림에서 고르기 전에 내 몸을 짚게 한다. 볼에 대어 느낀 것도 \'피부\'라고 알려 준다. 처음 보는 열매나 풀은 만지기 전에 꼭 선생님께 묻는 약속을 다시 말한다.',
            task: '짐작할 때와 만져서 알아볼 때 쓴 몸의 부분을 몸 그림에서 골라요.',
            levels: BODY_LV,
            items: [
              { prompt: '만지기 전에 강아지풀을 보기만 하고 느낌을 짐작했어요. 그때 쓴 곳을 골라 보세요.', target: { parts: ['눈'] }, difficulty: 0.1,
                hints: BH('만지기 전이에요. 손은 아직 강아지풀에 닿지 않았어요.', '보기만 할 때 쓰는 곳을 내 몸에서 짚어 봐요.', '얼굴에서 보는 일을 하는 곳 하나만 골라요.') },
              { prompt: '강아지풀을 볼에 살살 대어 보고 간질간질한 것을 알았어요. 쓴 곳을 골라 보세요.', target: { parts: ['피부'] }, difficulty: 0.15,
                hints: BH('강아지풀이 볼에 닿아서 알게 되었어요.', '볼도, 손도 같은 것으로 덮여 있어서 닿는 느낌을 알려 줘요.', '몸 전체를 덮고 있어 닿는 느낌을 아는 곳을 골라요.') },
              { prompt: '숟가락을 보고 반짝이는 것을 알고, 손에 쥐어 차가운 것도 알았어요. 쓴 곳 두 곳을 골라 보세요.', target: { parts: ['눈', '피부'] }, difficulty: 0.15,
                hints: BH('반짝임과 차가움, 두 가지를 알게 되었어요.', '반짝임은 보아야 알고, 차가움은 닿아야 알아요.', '본 곳 하나, 닿아서 느낀 곳 하나를 골라요.') },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"보기와 만진 느낌이 달랐던 물건은 무엇이었나요?" 두세 명이 말하게 한다. "보기만 하면 놓치는 이야기가 있었지요?" 다음 시간에는 눈과 손 말고 귀·코까지 여러 감각으로 솔방울을 다시 살핀다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '만져 보니', slots: [{ id: 'e1', label: '얼음 조각' }, { id: 'e2', label: '털 목도리' }], cards: ['차갑고 미끄러워요', '보들보들 따뜻해요'] }, prompt: '물건과 만져 보니 어땠는지를 이어 보세요.', target: { match: { e1: '차갑고 미끄러워요', e2: '보들보들 따뜻해요' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '처음 보는 열매를 만져 보고 싶을 때는 어떻게 할까요?', options: ['먼저 선생님께 여쭈어 봐요', '바로 꾹 눌러 봐요'], answer: 0, difficulty: 0.05, explain: '처음 보는 열매나 풀은 가시나 즙이 있을 수 있어 먼저 여쭈어 봐요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '보기와 만지기가 달라요',
      items: [
        { type: 'table', prompt: '짐작한 느낌과 만져 본 느낌을 쓰세요.', columns: ['물건', '보고 짐작한 느낌', '만져 본 느낌'], rows: 3 },
        { type: 'choice', prompt: '만지기 전에 느낌을 짐작할 때 쓰는 곳에 ○ 하세요.', options: ['눈', '혀'], answer: '눈' },
        { type: 'short', prompt: '보기와 만진 느낌이 가장 달랐던 물건을 쓰세요.' },
        { type: 'draw', prompt: '그 물건을 그리고 만진 느낌말을 옆에 쓰세요.' },
      ],
      easy: {
        note: '먼저 짐작하고, 그다음 만져요.',
        items: [
          { type: 'choice', prompt: '쇠 숟가락을 만진 느낌에 ○ 하세요.', options: ['차가워요', '폭신해요'], answer: '차가워요' },
          { type: 'short', prompt: '짐작과 달랐던 물건을 쓰세요.' },
          { type: 'draw', prompt: '그 물건을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '두 쌍을 잇고, 몸 그림에 이름이 보여요.',
      base: '세 쌍을 잇고, 짐작과 달랐던 것을 골라요.',
      challenge: '함정 느낌 카드가 섞여 있고, 몸 그림에 감각과 상관없는 곳이 섞여 있어요.',
    },
    safety: ['처음 보는 열매나 풀은 선생님께 먼저 여쭈어 보고 만져요.', '강아지풀은 눈 가까이 대지 않아요.'],
    teacherNotes: '자주 보이는 어려움: ① 짐작을 쓰지 않고 바로 만진다 → 활동지 짐작 칸을 다 쓴 모둠부터 물건 바구니를 건넨다. ② 짐작이 틀려 속상해한다 → "짐작이 달라서 새로 알게 됐다"는 말을 칭찬한다. ③ 같았던 것과 달랐던 것을 헷갈린다 → 짐작 칸과 만진 칸을 손가락으로 번갈아 짚으며 견주게 한다.',
  }));

  // ───────────────────────── 33~36차시: 여러 감각으로 살피고 나타내기 ─────────────────────────

  lessons.push(L(33, {
    title: '솔방울을 여러 감각으로 다시 살피기',
    objective: '솔방울을 눈·귀·코·피부로 살펴 감각마다 알게 된 것을 말하고, 먹을 수 없는 것은 맛보지 않는다는 약속을 지킬 수 있다.',
    illustration: ART('a paper child exploring a pine cone with four senses, looking closely with a magnifier, shaking it near an ear, sniffing it gently and touching its scales, four little sense icons around', '여러 감각으로 살펴요', [
      { motif: 'tree', x: 90, y: 212 }, { motif: 'leaf', x: 380, y: 226, color: 'mint' }, { motif: 'bird', x: 300, y: 80 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"29차시에는 솔방울을 눈과 손으로 살폈어요. 오늘은 솔방울 이야기를 더 많이 들어 볼 거예요. 무엇으로 더 살필 수 있을까요?" 귀·코가 나오면 칠판에 감각 그림 카드를 붙인다. "혀로 맛보는 것은 어떨까요?" 먹는 것인지 모르는 것은 맛보지 않는다는 약속을 정한다. 시연 단추로 \'흔들면 바스락\' 카드가 \'귀\' 칸으로 가는 것을 보여 준다.',
        student: '솔방울을 살필 수 있는 감각을 손가락으로 세어 봐요.',
        demo: { tool: 'mindmap', options: { topic: '솔방울 감각', slots: ['귀로 알았어요', '코로 알았어요'], cards: ['흔들면 바스락', '나무 냄새가 나요'], shuffle: false }, sequence: [{ sort: { '귀로 알았어요': ['흔들면 바스락'], '코로 알았어요': ['나무 냄새가 나요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 감각마다 솔방울 이야기', minutes: 13, tool: 'mindmap',
            teacher: '"한 번에 한 감각만 써 봐요. 먼저 보기만, 다음은 귀에 대고 흔들기만, 그다음 코를 살짝 대고 냄새 맡기만, 마지막에 눈을 감고 만지기만." 감각을 바꿀 때마다 손뼉으로 신호를 준다(감각마다 1분). 냄새는 코를 바짝 대지 말고 손으로 부채질해 맡게 한다. 카드를 나눌 때는 "그때 어디를 썼나요?"를 기준으로 삼는다.',
            task: '솔방울을 한 감각씩 살피고, 알게 된 것을 쓴 감각에 따라 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '솔방울에 대해 알게 된 것을 쓴 감각에 따라 나누어 보세요.', toolOptions: { topic: '솔방울 감각', slots: ['눈으로 알았어요', '귀로 알았어요', '코로 알았어요', '피부로 알았어요'], cards: ['비늘이 빙글빙글 돌아 붙어 있어요', '흔들면 바스락', '나무 냄새가 나요', '비늘 끝이 까칠해요'] },
                target: { sort: { '눈으로 알았어요': ['비늘이 빙글빙글 돌아 붙어 있어요'], '귀로 알았어요': ['흔들면 바스락'], '코로 알았어요': ['나무 냄새가 나요'], '피부로 알았어요': ['비늘 끝이 까칠해요'] } }, difficulty: 0.15,
                levels: { easy: { prompt: '솔방울에 대해 알게 된 것을 귀로 안 것과 코로 안 것으로 나누어 보세요.', toolOptions: { slots: ['귀로 알았어요', '코로 알았어요'], cards: ['흔들면 바스락', '책상에 떨어뜨리면 톡', '나무 냄새가 나요', '흙 냄새가 조금 나요'] }, target: { sort: { '귀로 알았어요': ['흔들면 바스락', '책상에 떨어뜨리면 톡'], '코로 알았어요': ['나무 냄새가 나요', '흙 냄새가 조금 나요'] } } },
                  challenge: { prompt: '솔방울에 대해 알게 된 여덟 가지를 쓴 감각에 따라 나누어 보세요.', toolOptions: { cards: ['비늘이 빙글빙글 돌아 붙어 있어요', '갈색과 고동색이 섞여 있어요', '흔들면 바스락', '책상에 떨어뜨리면 톡', '나무 냄새가 나요', '흙 냄새가 조금 나요', '비늘 끝이 까칠해요', '생각보다 가벼워요'] }, target: { sort: { '눈으로 알았어요': ['비늘이 빙글빙글 돌아 붙어 있어요', '갈색과 고동색이 섞여 있어요'], '귀로 알았어요': ['흔들면 바스락', '책상에 떨어뜨리면 톡'], '코로 알았어요': ['나무 냄새가 나요', '흙 냄새가 조금 나요'], '피부로 알았어요': ['비늘 끝이 까칠해요', '생각보다 가벼워요'] } } } } },
              { prompt: '솔방울을 살필 때 지킬 약속만 바구니에 담아 보세요.', toolOptions: { mode: 'pick', basket: '살필 때 약속', cards: ['냄새는 손으로 부채질해 맡아요', '먹는 것인지 모르면 맛보지 않아요', '혀로 살짝 핥아 맛을 봐요', '귓구멍에 바짝 넣어 흔들어요'] },
                target: { pick: ['냄새는 손으로 부채질해 맡아요', '먹는 것인지 모르면 맛보지 않아요'] }, difficulty: 0.1 },
              { prompt: '솔방울을 감각마다 1분씩 살피고 모둠에서 감각마다 알게 된 것을 하나씩 말했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 오늘 쓴 감각 찾기', minutes: 15, tool: 'body',
            teacher: '"오늘은 몇 곳을 썼는지 몸 그림에서 찾아봐요." 내 몸에서 먼저 짚고 몸 그림에서 고르게 한다. 혀는 오늘 쓰지 않았다는 것을 함께 말한다. 다 고른 학생은 짝에게 \'○○로 무엇을 알았어\' 하고 말해 준다.',
            task: '솔방울을 살필 때 쓴 몸의 부분을 몸 그림에서 고르고, 짝에게 무엇을 알았는지 말해요.',
            levels: BODY_LV,
            items: [
              { prompt: '솔방울을 귀에 대고 흔들어 바스락 소리를 들었어요. 쓴 곳을 골라 보세요.', target: { parts: ['귀'] }, difficulty: 0.05,
                hints: BH('바스락은 소리예요. 소리를 알아챈 곳을 떠올려요.', '흔들 때 솔방울을 머리 옆에 가까이 댔어요.', '머리 양옆에 있는 곳 하나만 골라요.') },
              { prompt: '손으로 부채질해 솔방울의 나무 냄새를 맡았어요. 쓴 곳을 골라 보세요.', target: { parts: ['코'] }, difficulty: 0.05,
                hints: BH('부채질은 냄새를 내 쪽으로 보내 주는 일이에요. 냄새를 맡은 곳을 떠올려요.', '손은 부채질만 했고, 솔방울을 만지지는 않았어요.', '얼굴 가운데에 있는 곳 하나만 골라요.') },
              { prompt: '오늘 솔방울을 보고, 흔들어 듣고, 냄새 맡고, 만져 보았어요. 쓴 곳 네 곳을 모두 골라 보세요.', target: { parts: ['눈', '귀', '코', '피부'] }, difficulty: 0.25,
                hints: BH('오늘 한 일 네 가지를 손가락으로 세며 하나씩 떠올려요.', '보기, 듣기, 냄새 맡기, 만지기에 쓴 곳이 하나씩 골라졌는지 봐요.', '오늘 맛보기는 하지 않았어요. 혀만 빼고 네 곳을 골라요.') },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"29차시보다 솔방울 이야기를 더 많이 알게 되었나요? 무엇으로 더 알았나요?" 두세 명이 말하게 한다. "다음 시간에는 먹을 수 있는 귤로 다섯 감각을 모두 써 봐요." 귤 알레르기가 있는 학생은 미리 알려 달라고 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '조약돌 감각', slots: ['귀로 알았어요', '피부로 알았어요'], cards: ['두 개를 부딪치면 딱딱', '손에 쥐면 차가워요'] }, prompt: '조약돌에 대해 알게 된 것을 귀로 안 것과 피부로 안 것으로 나누어 보세요.', target: { sort: { '귀로 알았어요': ['두 개를 부딪치면 딱딱'], '피부로 알았어요': ['손에 쥐면 차가워요'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '처음 본 열매를 살필 때 하지 않는 일은 무엇일까요?', options: ['혀로 맛보기', '눈으로 자세히 보기'], answer: 0, difficulty: 0.05, explain: '먹는 것인지 모르는 것은 맛보지 않아요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '여러 감각으로 살펴요',
      items: [
        { type: 'table', prompt: '감각마다 솔방울에 대해 알게 된 것을 쓰세요.', columns: ['감각', '알게 된 것'], cells: [['눈', ''], ['귀', ''], ['코', ''], ['피부', '']] },
        { type: 'choice', prompt: '냄새를 맡는 좋은 방법에 ○ 하세요.', options: ['손으로 부채질해 맡아요', '코에 바짝 대고 세게 맡아요'], answer: '손으로 부채질해 맡아요' },
        { type: 'figure', prompt: '오늘 쓴 곳에 모두 ○ 하세요.', tool: 'body', options: { mode: 'parts', parts: SENSE }, figures: [{ caption: '' }] },
        { type: 'short', prompt: '오늘 새로 알게 된 솔방울 이야기를 쓰세요.' },
      ],
      easy: {
        note: '한 번에 한 감각씩 살펴요.',
        items: [
          { type: 'choice', prompt: '솔방울 흔드는 소리는 어디로 알았나요? ○ 하세요.', options: ['귀', '코'], answer: '귀' },
          { type: 'short', prompt: '솔방울 냄새를 쓰세요.' },
          { type: 'draw', prompt: '솔방울을 살피는 내 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '귀로 안 것과 코로 안 것 두 칸만 나누고, 몸 그림에 이름이 보여요.',
      base: '네 감각 칸에 하나씩 나누어요.',
      challenge: '여덟 장을 네 감각 칸에 나누고, 몸 그림에 감각과 상관없는 곳이 섞여 있어요.',
    },
    safety: ['먹는 것인지 모르는 것은 맛보지 않아요.', '냄새는 손으로 부채질해 맡아요.', '솔방울을 귓구멍에 넣지 않아요.'],
    teacherNotes: '자주 보이는 어려움: ① 한꺼번에 여러 감각을 써서 무엇으로 알았는지 헷갈린다 → 손뼉 신호로 감각을 하나씩 바꾼다. ② 냄새가 안 난다고 한다 → 솔방울을 두 손으로 비벼 따뜻하게 한 뒤 다시 맡게 한다. ③ \'가벼워요\'를 눈으로 안 것이라 한다 → 눈을 감고 손에 올려 보게 한다.',
  }));

  lessons.push(L(34, {
    title: '귤 하나를 다섯 감각으로 살피기',
    objective: '손을 씻고 귤 하나를 눈·귀·코·혀·피부로 차례대로 살펴, 감각마다 알게 된 것을 말할 수 있다.',
    illustration: ART('a round paper tangerine on a plate with peel curling off, a paper child smelling the fresh peel, a hand feeling the bumpy skin, five small sense icons in a row', '귤 이야기', [
      { motif: 'leaf', x: 110, y: 222, color: 'mint' }, { motif: 'flower', x: 380, y: 228, color: 'rose' }, { motif: 'cloud', x: 330, y: 70, s: 0.7 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"오늘은 먹을 수 있는 귤이에요. 그래서 다섯 감각을 모두 쓸 수 있어요." 먼저 모두 손을 씻고 온다(교실 손 소독제 사용 가능). 귤 알레르기가 있는 학생은 맛보기를 빼고 다른 감각만 쓴다고 정한다. 시연 단추로 \'혀\' 칸에 \'새콤달콤해요\'가 이어지는 것을 보여 준다.',
        student: '손을 깨끗이 씻고 와서 귤을 앞에 두고 기다려요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '귤 이야기', slots: [{ id: 's1', label: '혀' }], cards: ['새콤달콤해요', '사각사각 소리'], shuffle: false }, sequence: [{ match: { s1: '새콤달콤해요' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 귤 다섯 감각 살피기', minutes: 14, tool: 'mindmap',
            teacher: '"차례를 지켜요. 보기 → 만지기 → 껍질 벗기며 듣기 → 냄새 맡기 → 마지막에 한 조각 맛보기." 맛보기를 맨 마지막에 하는 까닭(먹으면 다른 감각으로 살필 귤이 없어진다)을 말해 준다. 감각마다 1분 30초씩 신호를 준다. 화면에서는 감각과 알게 된 것을 잇는다.',
            task: '귤을 차례대로 다섯 감각으로 살피고, 감각과 그 감각으로 알게 된 것을 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '감각과 그 감각으로 알게 된 귤 이야기를 이어 보세요.', toolOptions: { mode: 'match', topic: '귤 이야기', slots: [{ id: 's1', label: '눈' }, { id: 's2', label: '귀' }, { id: 's3', label: '코' }, { id: 's4', label: '혀' }, { id: 's5', label: '피부' }], cards: ['주황색이에요', '껍질 벗길 때 사각사각', '상큼한 냄새가 나요', '새콤달콤해요', '껍질이 오돌토돌해요'] },
                target: { match: { s1: '주황색이에요', s2: '껍질 벗길 때 사각사각', s3: '상큼한 냄새가 나요', s4: '새콤달콤해요', s5: '껍질이 오돌토돌해요' } }, difficulty: 0.2,
                levels: { easy: { prompt: '세 감각과 그 감각으로 알게 된 귤 이야기를 이어 보세요.', toolOptions: { slots: [{ id: 's1', label: '눈' }, { id: 's3', label: '코' }, { id: 's4', label: '혀' }], cards: ['주황색이에요', '상큼한 냄새가 나요', '새콤달콤해요'] }, target: { match: { s1: '주황색이에요', s3: '상큼한 냄새가 나요', s4: '새콤달콤해요' } } }, challenge: { toolOptions: { cards: ['주황색이에요', '껍질 벗길 때 사각사각', '상큼한 냄새가 나요', '새콤달콤해요', '껍질이 오돌토돌해요', '하얀 실이 붙어 있어요'] } } } },
              { prompt: '귤을 살피는 차례예요. 맛보기를 맨 마지막에 하는 까닭으로 알맞은 것만 바구니에 담아 보세요.', toolOptions: { mode: 'pick', basket: '마지막에 맛봐요', cards: ['먹고 나면 다른 감각으로 살필 귤이 없어져요', '먼저 다른 감각으로 다 살피고 나서 먹어요', '맛은 아무 때나 봐도 돼요'] },
                target: { pick: ['먹고 나면 다른 감각으로 살필 귤이 없어져요', '먼저 다른 감각으로 다 살피고 나서 먹어요'] }, difficulty: 0.15 },
              { prompt: '손을 씻고 귤을 차례대로 다섯 감각으로 살핀 뒤 남은 껍질을 모둠 접시에 모았으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 감각마다 쓴 곳', minutes: 13, tool: 'body',
            teacher: '"귤을 먹을 때는 어디를 썼나요? 껍질을 벗길 때는요?" 하나씩 내 몸을 짚고 몸 그림에서 고르게 한다. 맛보기를 하지 않은 학생도 \'친구는 혀를 썼구나\' 하고 생각해 고르면 된다고 말해 준다.',
            task: '귤을 살필 때 쓴 몸의 부분을 몸 그림에서 골라요.',
            levels: BODY_LV,
            items: [
              { prompt: '귤 한 조각을 먹어 새콤달콤한 맛을 알았어요. 쓴 곳을 골라 보세요.', target: { parts: ['혀'] }, difficulty: 0.05,
                hints: BH('맛은 먹을 때 알게 되어요. 귤이 입안에서 닿은 곳을 떠올려요.', '이는 씹는 일을 하고, 맛을 알려 주는 곳은 따로 있어요.', '입안에서 움직이는 곳 하나만 골라요.') },
              { prompt: '귤껍질을 벗기며 사각 소리를 듣고, 상큼한 냄새도 맡았어요. 쓴 곳 두 곳을 골라 보세요.', target: { parts: ['귀', '코'] }, difficulty: 0.15,
                hints: BH('소리와 냄새, 두 가지를 알게 되었어요.', '손은 껍질을 벗기기만 했어요. 알게 된 두 가지에 쓴 곳만 골라요.', '소리는 귀, 냄새는 코예요.') },
              { prompt: '오늘 귤을 보고, 만지고, 소리 듣고, 냄새 맡고, 맛보았어요. 쓴 곳 다섯 곳을 모두 골라 보세요.', target: { parts: ['눈', '귀', '코', '혀', '피부'] }, difficulty: 0.25,
                hints: BH('오늘 한 일 다섯 가지를 손가락으로 하나씩 세어요.', '감각마다 한 곳씩, 모두 다섯 곳이 골라졌는지 봐요.', '눈·귀·코·혀와 몸을 덮은 곳을 모두 골라요.') },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"다섯 감각 가운데 귤 이야기를 가장 많이 알려 준 감각은 무엇이었나요?" 몇 명이 고르고 까닭을 말하게 한다. 귤껍질은 모아 버리고 책상을 닦는다. 다음 시간에는 오늘 알게 된 것을 말·그림·몸짓으로 나타낸다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '사과 이야기', slots: [{ id: 'e1', label: '코' }, { id: 'e2', label: '귀' }], cards: ['달콤한 냄새가 나요', '깨물면 아삭'] }, prompt: '감각과 그 감각으로 알게 된 사과 이야기를 이어 보세요.', target: { match: { e1: '달콤한 냄새가 나요', e2: '깨물면 아삭' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '먹을 것을 살피기 전에 먼저 할 일은 무엇일까요?', options: ['손을 깨끗이 씻어요', '바로 한 입 먹어요'], answer: 0, difficulty: 0.05, explain: '먹을 것을 만지기 전에는 손을 씻어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '귤 이야기',
      items: [
        { type: 'table', prompt: '감각마다 귤에 대해 알게 된 것을 쓰세요.', columns: ['감각', '알게 된 것'], cells: [['눈', ''], ['귀', ''], ['코', ''], ['혀', ''], ['피부', '']] },
        { type: 'choice', prompt: '귤을 맛보는 차례에 ○ 하세요.', options: ['다른 감각으로 다 살핀 뒤 마지막에', '가장 먼저'], answer: '다른 감각으로 다 살핀 뒤 마지막에' },
        { type: 'short', prompt: '귤 이야기를 가장 많이 알려 준 감각과 그 까닭을 쓰세요.' },
        { type: 'draw', prompt: '껍질을 벗긴 귤을 그려 보세요.' },
      ],
      easy: {
        note: '보기 → 만지기 → 듣기 → 냄새 → 맛',
        items: [
          { type: 'choice', prompt: '귤 맛은 어디로 알았나요? ○ 하세요.', options: ['혀', '귀'], answer: '혀' },
          { type: 'short', prompt: '귤 냄새를 쓰세요.' },
          { type: 'draw', prompt: '귤을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '세 감각만 잇고, 몸 그림에 이름이 보여요.',
      base: '다섯 감각을 모두 잇고, 맛보기 차례의 까닭을 골라요.',
      challenge: '함정 카드가 섞여 있고, 몸 그림에 감각과 상관없는 곳이 섞여 있어요.',
    },
    safety: ['귤을 만지기 전에 손을 씻어요.', '귤 알레르기가 있는 친구는 맛보지 않고 다른 감각으로만 살펴요.', '귤즙이 눈에 들어가지 않게 얼굴에서 떨어뜨려 껍질을 벗겨요.'],
    teacherNotes: '준비물: 학생 수만큼 작은 귤, 모둠 접시, 물티슈. 사전에 가정통신으로 과일 알레르기를 확인한다. 자주 보이는 어려움: ① 맛보기를 먼저 한다 → 칠판 차례 카드를 가리키며 기다리게 한다. ② 껍질 소리가 작아 못 듣는다 → 귤을 귀 가까이 들고 천천히 벗기게 한다. ③ \'맛있어요\'로만 말한다 → 새콤·달콤·시원 가운데 고르게 한다.',
  }));

  lessons.push(L(35, {
    title: '알게 된 것을 말·그림·몸짓으로 나타내기',
    objective: '감각으로 알게 된 것을 말, 그림, 몸짓 가운데 알맞은 방법으로 골라 나타낼 수 있다.',
    illustration: ART('three paper children showing what they learned about a tangerine, one speaking with a speech bubble, one holding a drawing of an orange circle, one making a sour face gesture', '여러 가지로 나타내요', [
      { motif: 'star', x: 120, y: 84, s: 0.6 }, { motif: 'flower', x: 380, y: 228, color: 'rose' }, { motif: 'tree', x: 420, y: 210 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"어제 귤이 새콤했지요? 그 새콤함을 친구에게 알려 주려면 어떻게 할 수 있을까요?" \'새콤해\'라고 말하기, 얼굴 찡그리기, 그림 그리기가 나오면 칠판에 세 칸(말·그림·몸짓)으로 적는다. 시연 단추로 \'얼굴을 찡그려요\' 카드가 \'몸짓으로\' 칸에 가는 것을 보여 준다.',
        student: '귤의 새콤한 맛을 얼굴로 나타내 봐요.',
        demo: { tool: 'mindmap', options: { topic: '나타내는 방법', slots: ['말로', '몸짓으로'], cards: ['"새콤해요"라고 말해요', '얼굴을 찡그려요'], shuffle: false }, sequence: [{ sort: { '말로': ['"새콤해요"라고 말해요'], '몸짓으로': ['얼굴을 찡그려요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 나타내는 방법 나누기', minutes: 10, tool: 'mindmap',
            teacher: '"입으로 소리 내면 말, 종이나 조각에 남기면 그림, 몸을 움직이면 몸짓이에요." 이 기준을 칠판 세 칸 위에 쓴다. 카드를 읽고 실제로 해 보며 어느 칸인지 정하게 한다. 한 가지를 여러 방법으로 나타낼 수 있다는 것도 말해 준다.',
            task: '알게 된 것을 나타낸 모습을 말, 그림, 몸짓으로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '귤 이야기를 나타낸 모습을 말, 그림, 몸짓으로 나누어 보세요.', toolOptions: { topic: '나타내는 방법', slots: ['말로', '그림으로', '몸짓으로'], cards: ['"껍질이 오돌토돌해"라고 말해요', '주황 동그라미를 그려요', '코를 킁킁 움직여요'] },
                target: { sort: { '말로': ['"껍질이 오돌토돌해"라고 말해요'], '그림으로': ['주황 동그라미를 그려요'], '몸짓으로': ['코를 킁킁 움직여요'] } }, difficulty: 0.1,
                levels: { challenge: { prompt: '귤 이야기를 나타낸 여섯 모습을 말, 그림, 몸짓으로 나누어 보세요.', toolOptions: { cards: ['"껍질이 오돌토돌해"라고 말해요', '"상큼한 냄새야"라고 말해요', '주황 동그라미를 그려요', '귤 조각을 반달처럼 그려요', '코를 킁킁 움직여요', '두 손으로 껍질 벗기는 흉내를 내요'] }, target: { sort: { '말로': ['"껍질이 오돌토돌해"라고 말해요', '"상큼한 냄새야"라고 말해요'], '그림으로': ['주황 동그라미를 그려요', '귤 조각을 반달처럼 그려요'], '몸짓으로': ['코를 킁킁 움직여요', '두 손으로 껍질 벗기는 흉내를 내요'] } } } } },
              { prompt: '친구가 귤 이야기를 잘 알 수 있게 말로 나타낸 것만 바구니에 담아 보세요.', toolOptions: { mode: 'pick', basket: '잘 나타낸 말', cards: ['"새콤하고 달콤해서 침이 나와"', '"껍질을 벗기면 사각 소리가 나"', '"그냥 귤이야"'] },
                target: { pick: ['"새콤하고 달콤해서 침이 나와"', '"껍질을 벗기면 사각 소리가 나"'] }, difficulty: 0.15 },
              { prompt: '귤 이야기 하나를 몸짓으로 나타내 짝에게 보여 주고, 짝이 무엇인지 맞혔으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 귤 이야기를 조각 그림으로', minutes: 18, tool: 'collage',
            teacher: '"이번에는 그림으로 남겨요. 색종이 조각을 골라 귤을 만들어 봐요." 먼저 함께 귤 하나를 만들고, 그다음 내가 알게 된 귤 이야기(냄새·맛·소리 가운데 하나)를 조각으로 더해 나타내게 한다. 냄새는 물결 선처럼 작은 조각을 이어 붙여도 된다고 예를 보여 준다. 다 만들면 짝에게 무엇을 나타냈는지 말해 준다.',
            task: '조각으로 귤을 만들고, 내가 알게 된 귤 이야기 하나를 더해 나타낸 뒤 짝에게 설명해요.',
            levels: COL_LV,
            items: [
              { prompt: '주황 큰 동그라미 한 개와 초록 나뭇잎 한 개로 귤을 만들어 보세요.', toolOptions: { shapes: ['circle', 'leaf', 'semi', 'star', 'rect', 'triangle'], colors: ['주황', '초록', '노랑', '갈색', '하양', '파랑'] },
                target: { has: [{ shape: 'circle', color: '주황', size: 'l', n: 1 }, { shape: 'leaf', color: '초록', n: 1 }] }, difficulty: 0.1,
                levels: { easy: { toolOptions: { shapes: ['circle', 'leaf'], colors: ['주황', '초록'] } }, challenge: { prompt: '주황 큰 동그라미 한 개, 초록 나뭇잎 두 개, 껍질 속 귤 조각인 주황 반원 세 개로 귤을 만들어 보세요.', target: { has: [{ shape: 'circle', color: '주황', size: 'l', n: 1 }, { shape: 'leaf', color: '초록', n: 2 }, { shape: 'semi', color: '주황', n: 3 }] } } } },
              { prompt: '귤 그림에 내가 알게 된 귤 이야기 하나를 조각으로 더해 나타내고 점검해 보세요.', toolOptions: { shapes: ['circle', 'leaf', 'semi', 'star', 'rect', 'triangle'], colors: ['주황', '초록', '노랑', '갈색', '하양', '파랑'] },
                target: { selfCheck: ['귤을 조각으로 만들었어요', '냄새·맛·소리 가운데 하나를 조각으로 더했어요'], minPieces: 3 }, difficulty: 0.15,
                levels: { easy: { toolOptions: { shapes: ['circle', 'leaf', 'star'], colors: ['주황', '초록', '노랑'] } }, challenge: { prompt: '귤 그림에 내가 알게 된 귤 이야기 두 가지를 조각으로 더해 나타내고 점검해 보세요.', target: { selfCheck: ['귤을 조각으로 만들었어요', '냄새·맛·소리 가운데 두 가지를 조각으로 더했어요', '짝에게 무엇을 나타냈는지 말했어요'], minPieces: 5 } } } },
              { prompt: '내 조각 그림이 무엇을 나타내는지 짝에게 말하고, 짝의 그림 이야기도 끝까지 들었으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"말, 그림, 몸짓 가운데 어떤 방법이 가장 잘 나타났나요? 왜 그렇게 생각해요?" 서너 명이 말하게 한다. "같은 귤인데 친구마다 나타낸 것이 달랐지요?" 다음 시간에는 비 오는 날 창가에서 여러 감각으로 운동장을 살핀다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '나타내는 방법', slots: ['그림으로', '몸짓으로'], cards: ['솔방울을 갈색으로 칠해요', '몸을 웅크려 솔방울 흉내를 내요'] }, prompt: '솔방울 이야기를 나타낸 모습을 그림과 몸짓으로 나누어 보세요.', target: { sort: { '그림으로': ['솔방울을 갈색으로 칠해요'], '몸짓으로': ['몸을 웅크려 솔방울 흉내를 내요'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '"사각사각" 소리를 친구에게 알려 주기에 알맞은 방법은 무엇일까요?', options: ['"사각사각" 하고 소리 내어 말해요', '주황색을 칠해요'], answer: 0, difficulty: 0.15, explain: '소리는 흉내 내는 말로 들려주면 친구가 잘 알 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '여러 가지로 나타내요',
      items: [
        { type: 'table', prompt: '귤 이야기 하나를 세 가지 방법으로 나타내 보세요.', columns: ['말로', '그림으로', '몸짓으로'], rows: 1 },
        { type: 'choice', prompt: '몸짓으로 나타낸 것에 ○ 하세요.', options: ['얼굴을 찡그려요', '"새콤해"라고 써요'], answer: '얼굴을 찡그려요' },
        { type: 'draw', prompt: '귤의 냄새나 맛을 그림으로 나타내 보세요.' },
        { type: 'short', prompt: '가장 잘 나타났던 방법과 그 까닭을 쓰세요.' },
      ],
      easy: {
        note: '말 · 그림 · 몸짓',
        items: [
          { type: 'choice', prompt: '그림으로 나타낸 것에 ○ 하세요.', options: ['주황 동그라미를 그려요', '"새콤해요"라고 말해요'], answer: '주황 동그라미를 그려요' },
          { type: 'draw', prompt: '귤을 그려 보세요.' },
          { type: 'short', prompt: '귤 맛을 말로 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '조각 고르개에 그 문항에 필요한 모양과 색만 있어요. 카드에 초록 테두리가 생겨요.',
      base: '세 가지 방법으로 나누고, 귤 그림에 이야기 하나를 더해요.',
      challenge: '여섯 장을 나누고, 귤 조각까지 넣은 그림에 이야기 두 가지를 더해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 글로 쓴 것을 \'말로\'와 \'그림으로\' 가운데 어디에 둘지 헷갈린다 → 오늘은 소리 내어 말한 것만 \'말로\'로 정했다고 알려 준다. ② 냄새를 어떻게 그릴지 모른다 → 작은 하양·노랑 동그라미를 줄지어 붙이는 예를 보여 준다. ③ 몸짓을 부끄러워한다 → 얼굴이나 손만 쓰는 작은 몸짓부터 하게 한다.',
  }));

  lessons.push(L(36, {
    title: '비 오는 날 창가에서 여러 감각으로 살피기',
    objective: '비 오는 날 창가와 현관 처마 밑에서 눈·귀·코·피부로 바깥을 살피고, 감각마다 알게 된 것을 말할 수 있다.',
    illustration: ART('paper children standing under a school porch roof on a rainy day, raindrops falling, puddles with rings, one child holding out a palm to feel the drops, another listening', '비 오는 날 살펴요', [
      { motif: 'cloud', x: 330, y: 70, s: 0.9 }, { motif: 'tree', x: 90, y: 212 }, { motif: 'leaf', x: 380, y: 226, color: 'mint' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"오늘 밖에 비가 와요. 비 오는 날 운동장은 어떤 이야기를 들려줄까요?" 비가 오지 않는 날에는 지난 비 오는 날 사진과 빗소리 녹음을 쓴다고 미리 정해 둔다. 현관 처마 밑에서만 살피고 비를 맞으러 나가지 않는다는 약속을 정한다. 시연 단추로 \'빗방울이 톡톡\' 카드가 \'귀\'와 이어지는 것을 보여 준다.',
        student: '창밖을 보며 지금 들리는 소리를 하나 떠올려 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '비 오는 날', slots: [{ id: 's1', label: '귀' }], cards: ['빗방울이 톡톡', '흙 냄새가 나요'], shuffle: false }, sequence: [{ match: { s1: '빗방울이 톡톡' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 현관 처마 밑에서 살피기', minutes: 15, tool: 'mindmap',
            teacher: '"줄을 서서 현관으로 가요. 처마 밑 노란 선 안에서만 살펴요." 현관에서 감각마다 1분씩 신호를 주고(보기·듣기·냄새·손바닥 내밀기), 교실로 돌아와 화면에서 감각과 알게 된 것을 잇는다. 손바닥을 내밀 때는 처마 끝에서 떨어지는 물만 살짝 받게 한다. 돌아오면 손을 닦는다.',
            task: '현관 처마 밑에서 감각마다 비 오는 날을 살피고, 교실에 돌아와 감각과 알게 된 것을 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '현관 처마 밑에서 살핀 것이에요. 감각과 알게 된 것을 이어 보세요.', toolOptions: { mode: 'match', topic: '비 오는 날', slots: [{ id: 's1', label: '눈' }, { id: 's2', label: '귀' }, { id: 's3', label: '코' }, { id: 's4', label: '피부' }], cards: ['웅덩이에 동그라미가 생겨요', '처마에서 똑똑 떨어져요', '젖은 흙 냄새가 나요', '손바닥에 닿은 물이 차가워요'] },
                target: { match: { s1: '웅덩이에 동그라미가 생겨요', s2: '처마에서 똑똑 떨어져요', s3: '젖은 흙 냄새가 나요', s4: '손바닥에 닿은 물이 차가워요' } }, difficulty: 0.15,
                levels: { easy: { prompt: '현관 처마 밑에서 살핀 것이에요. 두 감각과 알게 된 것을 이어 보세요.', toolOptions: { slots: [{ id: 's1', label: '눈' }, { id: 's2', label: '귀' }], cards: ['웅덩이에 동그라미가 생겨요', '처마에서 똑똑 떨어져요'] }, target: { match: { s1: '웅덩이에 동그라미가 생겨요', s2: '처마에서 똑똑 떨어져요' } } }, challenge: { toolOptions: { cards: ['웅덩이에 동그라미가 생겨요', '처마에서 똑똑 떨어져요', '젖은 흙 냄새가 나요', '손바닥에 닿은 물이 차가워요', '빗물이 달콤해요'] } } } },
              { prompt: '비 오는 날 현관에서 살필 때 지킬 약속만 바구니에 담아 보세요.', toolOptions: { mode: 'pick', basket: '현관 약속', cards: ['처마 밑 선 안에서만 살펴요', '젖은 바닥에서는 뛰지 않아요', '빗물을 받아 맛을 봐요', '웅덩이에 들어가 첨벙 뛰어요'] },
                target: { pick: ['처마 밑 선 안에서만 살펴요', '젖은 바닥에서는 뛰지 않아요'] }, difficulty: 0.1 },
              { prompt: '현관 처마 밑에서 감각마다 1분씩 비 오는 날을 살피고 교실에 돌아와 손을 닦았으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 비 오는 날 쓴 감각', minutes: 13, tool: 'body',
            teacher: '"비 오는 날은 맛보기를 했나요?" 빗물은 깨끗하지 않아 맛보지 않았다는 것을 다시 짚는다. 고른 곳을 내 몸에서 먼저 짚게 한다. 다 고른 학생은 비 오는 날 가장 좋았던 감각을 짝에게 말한다.',
            task: '비 오는 날을 살필 때 쓴 몸의 부분을 몸 그림에서 고르고, 가장 좋았던 감각을 짝에게 말해요.',
            levels: BODY_LV,
            items: [
              { prompt: '웅덩이에 동그라미가 생기는 것을 보고, 처마에서 똑똑 떨어지는 소리도 들었어요. 쓴 곳 두 곳을 골라 보세요.', target: { parts: ['눈', '귀'] }, difficulty: 0.1,
                hints: BH('본 것 하나, 들은 것 하나를 알게 되었어요.', '이번에는 만지거나 냄새 맡지 않았어요.', '보는 곳 하나, 듣는 곳 하나를 골라요.') },
              { prompt: '젖은 흙 냄새를 맡고, 손바닥에 떨어진 물이 차가운 것을 알았어요. 쓴 곳 두 곳을 골라 보세요.', target: { parts: ['코', '피부'] }, difficulty: 0.15,
                hints: BH('냄새 하나, 차가운 느낌 하나를 알게 되었어요.', '차가운 느낌은 손바닥에 물이 닿아서 알았어요.', '냄새는 코, 닿는 느낌은 피부예요.') },
              { prompt: '오늘 비 오는 날을 살필 때 쓴 곳을 모두 골라 보세요. 빗물은 맛보지 않았어요.', target: { parts: ['눈', '귀', '코', '피부'] }, difficulty: 0.2,
                hints: BH('오늘 감각마다 1분씩 살핀 차례를 떠올려요.', '보기, 듣기, 냄새 맡기, 손바닥에 닿기가 모두 골라졌는지 봐요.', '맛보기는 하지 않았으니 혀만 빼요.') },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"맑은 날 운동장과 비 오는 날 운동장은 어떤 이야기가 달랐나요?" 두세 명이 말하게 한다. "다음 시간에는 친구가 나타낸 감각 이야기를 내 것과 견주어 봐요." 젖은 실내화는 신발장 옆에 말려 둔다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '눈 오는 날', slots: [{ id: 'e1', label: '귀' }, { id: 'e2', label: '피부' }], cards: ['밟으면 뽀드득', '눈송이가 볼에 닿으면 차가워요'] }, prompt: '눈 오는 날 감각과 알게 된 것을 이어 보세요.', target: { match: { e1: '밟으면 뽀드득', e2: '눈송이가 볼에 닿으면 차가워요' } }, difficulty: 0.1 },
          { type: 'tool', tool: 'emotion', options: { mode: 'scale', situation: '비 오는 날 현관에서 살필 때', feeling: '즐거움', steps: 3, scaleLabels: ['조금', '', '아주 많이'], ask: '오늘 살피기가 얼마나 즐거웠나요?' }, prompt: '비 오는 날 여러 감각으로 살펴본 시간이 얼마나 즐거웠는지 솔직하게 골라 보세요.', target: { level: 'any' }, difficulty: 0.05 },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '비 오는 날 살펴요',
      items: [
        { type: 'table', prompt: '감각마다 비 오는 날에 알게 된 것을 쓰세요.', columns: ['감각', '알게 된 것'], cells: [['눈', ''], ['귀', ''], ['코', ''], ['피부', '']] },
        { type: 'choice', prompt: '빗물을 맛보아도 될까요? 알맞은 것에 ○ 하세요.', options: ['맛보지 않아요', '조금은 맛봐도 돼요'], answer: '맛보지 않아요' },
        { type: 'short', prompt: '맑은 날과 다르게 느껴진 것을 하나 쓰세요.' },
        { type: 'draw', prompt: '비 오는 날 현관에서 본 모습을 그려 보세요.' },
      ],
      easy: {
        note: '보고, 듣고, 냄새 맡고, 손바닥으로 느껴요.',
        items: [
          { type: 'choice', prompt: '"똑똑" 소리는 어디로 알았나요? ○ 하세요.', options: ['귀', '혀'], answer: '귀' },
          { type: 'short', prompt: '비 오는 날 맡은 냄새를 쓰세요.' },
          { type: 'draw', prompt: '비 오는 날을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '두 감각만 잇고, 몸 그림에 이름이 보여요.',
      base: '네 감각을 잇고, 현관 약속을 골라요.',
      challenge: '맞지 않는 함정 카드가 섞여 있고, 몸 그림에 감각과 상관없는 곳이 섞여 있어요.',
    },
    safety: ['현관 처마 밑 선 안에서만 살피고 비를 맞으러 나가지 않아요.', '젖은 바닥에서는 뛰지 않아요.', '빗물은 맛보지 않아요.'],
    teacherNotes: '비가 오지 않는 날 대신하는 방법: 지난 비 오는 날 사진과 교사가 녹음한 빗소리, 분무기로 손바닥에 물 한 번 뿌리기. 흙 냄새는 젖은 흙 한 줌을 컵에 담아 돌린다. 자주 보이는 어려움: ① 현관에서 들떠 장난이 커진다 → 감각을 바꿀 때마다 손뼉 신호 뒤 \'얼음\'으로 멈춘다. ② 빗소리와 처마 물소리를 구분하지 못한다 → 눈을 감고 가까운 소리와 먼 소리를 차례로 들어 보게 한다.',
  }));

  // ───────────────────────── 37~40차시: 친구와 견주고 다음 살필 것 고르기 ─────────────────────────

  lessons.push(L(37, {
    title: '같은 솔방울, 친구와 다르게 나타낸 것 견주기',
    objective: '같은 물건을 살핀 친구의 나타내기와 내 나타내기를 견주어 같은 점과 다른 점을 찾아 말할 수 있다.',
    illustration: ART('two paper children side by side each holding up their own picture of the same pine cone, one drawn round and brown, one tall with many scales and sound marks, a pine cone between them', '친구와 견주어요', [
      { motif: 'tree', x: 90, y: 212 }, { motif: 'leaf', x: 380, y: 226, color: 'mint' }, { motif: 'bird', x: 300, y: 80 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"민지와 하준이가 같은 솔방울을 살피고 이야기를 썼어요. 두 사람 이야기가 똑같을까요?" 칠판에 두 친구의 이야기 카드를 붙이고 함께 읽는다. "같은 것을 살펴도 친구마다 알아챈 것이 달라요. 그래서 견주어 보면 더 많이 알게 돼요." 시연 단추로 두 사람이 모두 말한 \'갈색이에요\'가 \'둘 다 말했어요\' 칸으로 가는 것을 보여 준다.',
        student: '민지와 하준이의 이야기를 소리 내어 따라 읽어요.',
        demo: { tool: 'mindmap', options: { topic: '민지와 하준', slots: ['둘 다 말했어요', '한 사람만 말했어요'], cards: ['갈색이에요', '나무 냄새가 나요'], shuffle: false }, sequence: [{ sort: { '둘 다 말했어요': ['갈색이에요'], '한 사람만 말했어요': ['나무 냄새가 나요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 같은 점, 다른 점 찾기', minutes: 13, tool: 'mindmap',
            teacher: '"민지 이야기: 갈색이에요, 까끌까끌해요, 흔들면 바스락. 하준 이야기: 갈색이에요, 나무 냄새가 나요, 흔들면 바스락." 칠판 두 줄을 손가락으로 짚으며 견주는 방법을 보여 준다. 카드 하나를 고르면 두 줄 모두에 있는지 찾아보게 한다. 이어서 모둠에서 각자 29·33차시 활동지를 펴고 친구와 견주게 한다.',
            task: '민지와 하준이의 솔방울 이야기를 견주어 같은 것과 다른 것을 나누고, 모둠 친구와도 견주어요.',
            levels: CARD_LV,
            items: [
              { prompt: '민지와 하준이의 솔방울 이야기를 둘 다 말한 것과 한 사람만 말한 것으로 나누어 보세요.', toolOptions: { topic: '민지와 하준', slots: ['둘 다 말했어요', '한 사람만 말했어요'], cards: ['갈색이에요', '흔들면 바스락', '까끌까끌해요', '나무 냄새가 나요'] },
                target: { sort: { '둘 다 말했어요': ['갈색이에요', '흔들면 바스락'], '한 사람만 말했어요': ['까끌까끌해요', '나무 냄새가 나요'] } }, difficulty: 0.15,
                levels: { challenge: { prompt: '서아도 이야기를 더했어요(갈색이에요, 비늘이 빙글빙글, 흔들면 바스락). 세 사람 모두 말한 것과 아닌 것으로 나누어 보세요.', toolOptions: { slots: ['셋 다 말했어요', '셋 다는 아니에요'], cards: ['갈색이에요', '흔들면 바스락', '까끌까끌해요', '나무 냄새가 나요', '비늘이 빙글빙글'] }, target: { sort: { '셋 다 말했어요': ['갈색이에요', '흔들면 바스락'], '셋 다는 아니에요': ['까끌까끌해요', '나무 냄새가 나요', '비늘이 빙글빙글'] } } } } },
              { prompt: '친구와 이야기가 다를 때 하면 좋은 말만 바구니에 담아 보세요.', toolOptions: { mode: 'pick', basket: '견줄 때 하는 말', cards: ['"너는 냄새를 맡았구나. 나도 맡아 볼래"', '"나는 소리를 들었는데 너는 어땠어?"', '"네 것은 틀렸어"', '"내 것만 맞아"'] },
                target: { pick: ['"너는 냄새를 맡았구나. 나도 맡아 볼래"', '"나는 소리를 들었는데 너는 어땠어?"'] }, difficulty: 0.1 },
              { prompt: '모둠 친구와 솔방울 활동지를 견주어 같은 것 하나, 다른 것 하나를 찾아 말했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 친구 이야기를 더해 다시 나타내기', minutes: 15, tool: 'collage',
            teacher: '"친구가 알아챘는데 나는 몰랐던 이야기가 있었나요? 그것을 내 솔방울 그림에 더해 봐요." 먼저 갈색 조각으로 솔방울을 함께 만든 뒤, 친구에게서 얻은 이야기 하나를 더하게 한다. 소리는 작은 노랑 별, 냄새는 작은 하양 동그라미처럼 우리 반 약속으로 정해 칠판에 그려 둔다.',
            task: '조각으로 솔방울을 만들고, 친구에게서 얻은 이야기 하나를 더해 다시 나타내요.',
            levels: COL_LV,
            items: [
              { prompt: '갈색 세모 다섯 개로 솔방울을 만들어 보세요.', toolOptions: { shapes: ['triangle', 'circle', 'star', 'leaf', 'semi', 'rect'], colors: ['갈색', '노랑', '하양', '초록', '검정', '주황'] },
                target: { has: [{ shape: 'triangle', color: '갈색', n: 5 }] }, difficulty: 0.1,
                levels: { easy: { prompt: '갈색 세모 세 개로 솔방울을 만들어 보세요.', toolOptions: { shapes: ['triangle', 'circle'], colors: ['갈색', '노랑'] }, target: { has: [{ shape: 'triangle', color: '갈색', n: 3 }] } } } },
              { prompt: '솔방울 그림에 "흔들면 바스락" 소리를 우리 반 약속대로 작은 노랑 별 두 개로 더해 보세요. 갈색 세모는 네 개 넘게 있어야 해요.', toolOptions: { shapes: ['triangle', 'circle', 'star', 'leaf', 'semi', 'rect'], colors: ['갈색', '노랑', '하양', '초록', '검정', '주황'] },
                target: { has: [{ shape: 'triangle', color: '갈색', min: 5 }, { shape: 'star', color: '노랑', size: 's', n: 2 }] }, difficulty: 0.2,
                levels: { easy: { prompt: '솔방울 그림에 "흔들면 바스락" 소리를 작은 노랑 별 하나로 더해 보세요. 갈색 세모도 하나 넘게 있어야 해요.', toolOptions: { shapes: ['triangle', 'star'], colors: ['갈색', '노랑'] }, target: { has: [{ shape: 'triangle', color: '갈색', min: 2 }, { shape: 'star', color: '노랑', size: 's', n: 1 }] } } } },
              { prompt: '친구에게서 얻은 이야기 하나를 솔방울 그림에 더하고 점검해 보세요.', toolOptions: { shapes: ['triangle', 'circle', 'star', 'leaf', 'semi', 'rect'], colors: ['갈색', '노랑', '하양', '초록', '검정', '주황'] },
                target: { selfCheck: ['친구가 알아챈 이야기를 하나 골랐어요', '그 이야기를 조각으로 더했어요'], minPieces: 4 }, difficulty: 0.15,
                levels: { challenge: { prompt: '친구 두 명에게서 얻은 이야기를 솔방울 그림에 더하고 점검해 보세요.', target: { selfCheck: ['친구가 알아챈 이야기를 두 가지 골랐어요', '두 이야기를 조각으로 더했어요', '누구에게서 얻은 이야기인지 말할 수 있어요'], minPieces: 6 } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"친구 이야기를 더하니 내 솔방울 그림이 어떻게 달라졌나요?" 두세 명이 그림을 들어 보이며 말하게 한다. "친구 덕분에 새로 알게 된 것을 고맙다고 말해 봐요." 다음 시간에는 친구의 조각 그림을 보고 똑같이 따라 만들어 본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '준호와 서아', slots: ['둘 다 말했어요', '한 사람만 말했어요'], cards: ['주황색이에요', '껍질이 오돌토돌해요'] }, prompt: '준호는 "주황색이에요, 껍질이 오돌토돌해요", 서아는 "주황색이에요, 새콤해요"라고 했어요. 카드를 나누어 보세요.', target: { sort: { '둘 다 말했어요': ['주황색이에요'], '한 사람만 말했어요': ['껍질이 오돌토돌해요'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '친구가 나와 다르게 나타냈을 때 알맞은 말은 무엇일까요?', options: ['"그렇게도 볼 수 있구나"', '"그건 틀렸어"'], answer: 0, difficulty: 0.05, explain: '같은 것을 살펴도 알아챈 것이 다를 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '친구와 견주어요',
      items: [
        { type: 'table', prompt: '나와 친구의 솔방울 이야기를 견주어 쓰세요.', columns: ['나', '친구', '같아요/달라요'], rows: 3 },
        { type: 'short', prompt: '친구에게서 새로 알게 된 이야기를 쓰세요.' },
        { type: 'choice', prompt: '친구와 이야기가 다를 때 할 말에 ○ 하세요.', options: ['"너는 어떻게 알았어?"', '"내 것만 맞아"'], answer: '"너는 어떻게 알았어?"' },
        { type: 'draw', prompt: '친구 이야기를 더한 내 솔방울 그림을 그려 보세요.' },
      ],
      easy: {
        note: '같은 것에 ○, 다른 것에 △',
        items: [
          { type: 'short', prompt: '친구가 말한 솔방울 이야기를 하나 쓰세요.' },
          { type: 'choice', prompt: '친구와 다를 때 할 말에 ○ 하세요.', options: ['"그렇구나"', '"틀렸어"'], answer: '"그렇구나"' },
          { type: 'draw', prompt: '솔방울을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '세모 세 개로 솔방울을 만들고, 별 하나만 더해요. 카드에 초록 테두리가 생겨요.',
      base: '두 친구의 이야기를 견주고, 솔방울에 소리 별 두 개를 더해요.',
      challenge: '세 친구의 이야기를 견주고, 두 친구에게서 얻은 이야기를 더해요.',
    },
    teacherNotes: '소리 = 작은 노랑 별, 냄새 = 작은 하양 동그라미는 이 단원에서 교사가 정한 반 약속이다. 자주 보이는 어려움: ① 같은 말인데 표현이 조금 달라 다른 것으로 둔다 → 뜻이 같으면 같은 것으로 본다고 정해 준다. ② 친구 이야기를 따라 하면 베끼는 것이라 생각한다 → 친구에게 배운 것을 더하는 것은 좋은 일이고, 누구에게서 배웠는지 말하면 된다고 알려 준다.',
  }));

  lessons.push(L(38, {
    title: '친구 조각 그림 보고 똑같이 따라 만들기',
    objective: '친구의 조각 그림을 자세히 보고 모양·색·크기·자리를 견주어 똑같이 따라 만들 수 있다.',
    illustration: ART('two paper collage boards side by side, the left one a finished flower of colored circles and leaves, the right one half done with a child placing a matching piece, a magnifier between them', '보고 따라 만들어요', [
      { motif: 'flower', x: 380, y: 228, color: 'rose' }, { motif: 'star', x: 120, y: 84, s: 0.6 }, { motif: 'leaf', x: 110, y: 222, color: 'mint' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"서아가 만든 꽃 그림이에요. 똑같이 따라 만들려면 무엇을 잘 보아야 할까요?" 모양·색·크기·자리 네 가지를 칠판에 쓴다. "눈으로 자세히 보는 것도 감각을 쓰는 거예요." 시연 단추로 보기 작품의 가운데 노랑 동그라미를 같은 자리에 붙이는 모습을 보여 준다.',
        student: '보기 그림에서 조각이 몇 개인지 손가락으로 세어 봐요.',
        demo: { tool: 'collage', options: { shapes: ['circle'], colors: ['노랑'] }, sequence: [{ add: { shape: 'circle', color: '노랑', size: 'm', x: 280, y: 200 } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 서아의 꽃 그림 따라 만들기', minutes: 15, tool: 'collage',
            teacher: '"조각 하나를 붙일 때마다 보기 그림과 번갈아 봐요. 판의 점선 칸을 세면 자리를 맞추기 쉬워요." 가운데 조각부터 붙이고 둘레로 나가는 차례를 알려 준다. 나뭇잎처럼 방향이 있는 조각은 \'돌리기\'로 맞춘다. 다 만든 학생은 짝 화면과도 견주어 본다.',
            task: '보기 그림의 모양·색·크기·자리·방향을 견주며 똑같이 따라 만들어요.',
            levels: COL_LV,
            items: [
              { prompt: '서아의 꽃 그림과 똑같이 만들어 보세요. 가운데 노랑 동그라미와 위·아래 분홍 동그라미예요.', toolOptions: { shapes: ['circle', 'leaf', 'heart', 'star'], colors: ['노랑', '분홍', '초록', '파랑'] },
                target: { match: [{ shape: 'circle', color: '노랑', size: 'm', x: 280, y: 200 }, { shape: 'circle', color: '분홍', size: 'm', x: 280, y: 140 }, { shape: 'circle', color: '분홍', size: 'm', x: 280, y: 260 }] }, difficulty: 0.15,
                levels: { easy: { toolOptions: { shapes: ['circle'], colors: ['노랑', '분홍'] } } } },
              { prompt: '서아의 꽃 그림과 똑같이 만들어 보세요. 가운데 노랑 동그라미 둘레에 분홍 동그라미 네 개가 있어요.', toolOptions: { shapes: ['circle', 'leaf', 'heart', 'star'], colors: ['노랑', '분홍', '초록', '파랑'] },
                target: { match: [{ shape: 'circle', color: '노랑', size: 'm', x: 280, y: 200 }, { shape: 'circle', color: '분홍', size: 'm', x: 280, y: 140 }, { shape: 'circle', color: '분홍', size: 'm', x: 280, y: 260 }, { shape: 'circle', color: '분홍', size: 'm', x: 220, y: 200 }, { shape: 'circle', color: '분홍', size: 'm', x: 340, y: 200 }] }, difficulty: 0.25,
                levels: { easy: { toolOptions: { shapes: ['circle'], colors: ['노랑', '분홍'] } }, challenge: { prompt: '서아의 꽃 그림과 똑같이 만들어 보세요. 꽃 아래 줄기 옆에 비스듬한 초록 나뭇잎이 하나 더 있어요.', target: { match: [{ shape: 'circle', color: '노랑', size: 'm', x: 280, y: 200 }, { shape: 'circle', color: '분홍', size: 'm', x: 280, y: 140 }, { shape: 'circle', color: '분홍', size: 'm', x: 280, y: 260 }, { shape: 'circle', color: '분홍', size: 'm', x: 220, y: 200 }, { shape: 'circle', color: '분홍', size: 'm', x: 340, y: 200 }, { shape: 'leaf', color: '초록', size: 'm', x: 340, y: 320, r: 45 }] } } } },
              { prompt: '다 만든 그림을 짝 화면과 견주어 다른 곳이 없는지 살펴보았으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 짝에게 내 그림 따라 만들게 하기', minutes: 12, tool: 'collage',
            teacher: '"이번에는 내가 보기 그림을 만들어요. 조각은 네 개만 써요." 짝은 화면을 보며 따라 만들고, 만든 사람은 \'더 위로\', \'오른쪽으로 한 칸\'처럼 자리 말로만 도와준다. 짝 그림을 만지거나 대신 붙여 주지 않게 한다. 바꾸어 한 번 더 한다.',
            task: '조각 네 개로 보기 그림을 만들고, 짝이 따라 만들 때 자리 말로 도와줘요. 바꾸어서도 해요.',
            levels: COL_LV,
            items: [
              { prompt: '짝이 따라 만들 보기 그림을 조각 네 개로 만들고 점검해 보세요.', toolOptions: { shapes: ['circle', 'leaf', 'heart', 'star', 'triangle', 'square'], colors: ['노랑', '분홍', '초록', '파랑', '빨강', '보라'] },
                target: { selfCheck: ['조각을 네 개 썼어요', '짝이 볼 수 있게 조각이 겹치지 않아요'], minPieces: 4 }, difficulty: 0.15,
                levels: { easy: { toolOptions: { shapes: ['circle', 'square'], colors: ['노랑', '파랑'] } }, challenge: { prompt: '짝이 따라 만들 보기 그림을 조각 다섯 개로 만들고, 하나는 돌려서 붙인 뒤 점검해 보세요.', target: { selfCheck: ['조각을 다섯 개 썼어요', '짝이 볼 수 있게 조각이 겹치지 않아요', '돌려서 붙인 조각이 하나 있어요'], minPieces: 5 } } } },
              { prompt: '짝이 내 그림을 따라 만들 때 "위로", "오른쪽으로 한 칸" 같은 자리 말로만 도와주었으면 "다 했어요"를 누르세요.', free: true },
              { prompt: '짝과 바꾸어 짝의 보기 그림을 따라 만들어 보았으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"따라 만들 때 가장 어려웠던 것은 모양, 색, 크기, 자리 가운데 무엇이었나요?" 손을 들어 세어 본다. "자세히 보면 친구 그림에서도 많은 것을 배울 수 있어요." 다음 시간에는 진짜 나뭇잎을 살피고 나뭇잎 조각 그림을 만든다고 예고한다. 학교 화단의 낙엽을 하나씩 주워 오게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'collage', options: { shapes: ['circle', 'square', 'triangle'], colors: ['빨강', '파랑', '노랑'] }, prompt: '보기 그림과 똑같이 만들어 보세요. 왼쪽에 빨강 네모, 오른쪽에 파랑 동그라미가 있어요.', target: { match: [{ shape: 'square', color: '빨강', size: 'm', x: 220, y: 200 }, { shape: 'circle', color: '파랑', size: 'm', x: 340, y: 200 }] }, difficulty: 0.15 },
          { type: 'choice', prompt: '친구 그림을 똑같이 따라 만들 때 무엇을 견주어 볼까요?', options: ['모양·색·크기·자리', '내가 좋아하는 색만'], answer: 0, difficulty: 0.05, explain: '모양, 색, 크기, 자리가 모두 같아야 똑같은 그림이에요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '보고 따라 만들어요',
      items: [
        { type: 'draw', prompt: '짝의 보기 그림을 보고 똑같이 그려 보세요.' },
        { type: 'table', prompt: '따라 만들 때 견준 것에 ○ 하세요.', columns: ['모양', '색', '크기', '자리'], rows: 1 },
        { type: 'choice', prompt: '짝을 도울 때 알맞은 말에 ○ 하세요.', options: ['"오른쪽으로 한 칸 옮겨 봐"', '"내가 해 줄게"'], answer: '"오른쪽으로 한 칸 옮겨 봐"' },
        { type: 'short', prompt: '따라 만들 때 가장 어려웠던 것을 쓰세요.' },
      ],
      easy: {
        note: '모양 · 색 · 크기 · 자리를 봐요.',
        items: [
          { type: 'draw', prompt: '보기 그림을 따라 그려 보세요.' },
          { type: 'choice', prompt: '따라 만들 때 보는 것에 ○ 하세요.', options: ['자리', '내 기분'], answer: '자리' },
          { type: 'short', prompt: '짝 그림에서 본 색을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '고르개에 필요한 모양과 색만 있어 고르기가 쉬워요.',
      base: '여러 모양과 색 가운데서 골라 보기 그림을 따라 만들어요.',
      challenge: '돌려서 붙인 나뭇잎까지 맞추고, 내 보기 그림에도 돌린 조각을 넣어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 자리를 한두 칸씩 틀린다 → 판 점선 칸을 가운데부터 손가락으로 세게 한다. ② 크기를 놓친다 → 고르개의 \'크기\' 줄을 먼저 보고 고르게 한다. ③ 짝 그림을 대신 붙여 준다 → 도움은 말로만 한다는 규칙을 다시 말한다.',
  }));

  lessons.push(L(39, {
    title: '가을 나뭇잎 살피고 조각 그림으로 나타내기',
    objective: '가을 나뭇잎의 색과 느낌을 여러 감각으로 살피고, 나뭇잎 조각을 규칙 있게 늘어놓아 가을 이야기를 나타낼 수 있다.',
    illustration: ART('autumn paper leaves in red, yellow and brown lined up in a repeating row like a border, a paper child holding a crunchy leaf near the ear', '가을 나뭇잎 이야기', [
      { motif: 'tree', x: 90, y: 212 }, { motif: 'leaf', x: 380, y: 226, color: 'rose' }, { motif: 'leaf', x: 300, y: 90, color: 'mint' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"주워 온 나뭇잎을 꺼내 볼까요? 친구 나뭇잎과 색이 같나요?" 빨강·노랑·갈색 나뭇잎을 칠판 아래에 모은다. "나뭇잎을 귀에 대고 살짝 구부려 보세요. 무슨 소리가 나요?" 시연 단추로 빨강·노랑 나뭇잎이 번갈아 놓이는 모습을 보여 준다.',
        student: '주워 온 나뭇잎을 귀에 대고 살짝 구부려 소리를 들어 봐요.',
        demo: { tool: 'collage', options: { shapes: ['leaf'], colors: ['빨강', '노랑'] }, sequence: [{ add: { shape: 'leaf', color: '빨강', size: 'm', x: 160, y: 200 } }, { add: { shape: 'leaf', color: '노랑', size: 'm', x: 220, y: 200 } }] },
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 나뭇잎을 여러 감각으로', minutes: 12, tool: 'mindmap',
            teacher: '"나뭇잎을 보고, 구부려 듣고, 냄새 맡고, 만져 봐요. 나뭇잎은 맛보지 않아요." 감각마다 1분씩 신호를 준다. 바싹 마른 잎과 덜 마른 잎을 견주어 소리와 느낌이 다른지 살피게 한다. 카드를 나눌 때는 "그때 무엇을 했나요?"를 기준으로 삼는다.',
            task: '나뭇잎을 여러 감각으로 살피고, 알게 된 것을 쓴 감각에 따라 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '가을 나뭇잎에 대해 알게 된 것을 쓴 감각에 따라 나누어 보세요.', toolOptions: { topic: '나뭇잎 감각', slots: ['눈으로 알았어요', '귀로 알았어요', '피부로 알았어요'], cards: ['끝이 빨갛게 물들었어요', '구부리면 바스락', '잎맥이 오돌토돌해요'] },
                target: { sort: { '눈으로 알았어요': ['끝이 빨갛게 물들었어요'], '귀로 알았어요': ['구부리면 바스락'], '피부로 알았어요': ['잎맥이 오돌토돌해요'] } }, difficulty: 0.1,
                levels: { challenge: { prompt: '가을 나뭇잎에 대해 알게 된 여섯 가지를 쓴 감각에 따라 나누어 보세요.', toolOptions: { cards: ['끝이 빨갛게 물들었어요', '구멍이 송송 났어요', '구부리면 바스락', '밟으면 바사삭', '잎맥이 오돌토돌해요', '마른 잎은 가볍고 바삭해요'] }, target: { sort: { '눈으로 알았어요': ['끝이 빨갛게 물들었어요', '구멍이 송송 났어요'], '귀로 알았어요': ['구부리면 바스락', '밟으면 바사삭'], '피부로 알았어요': ['잎맥이 오돌토돌해요', '마른 잎은 가볍고 바삭해요'] } } } } },
              { prompt: '바싹 마른 잎과 덜 마른 잎을 견주었어요. 바싹 마른 잎에 맞는 것만 바구니에 담아 보세요.', toolOptions: { mode: 'pick', basket: '바싹 마른 잎', cards: ['구부리면 바스락 부서져요', '갈색이고 가벼워요', '구부려도 소리 없이 휘어요', '초록빛이 남아 촉촉해요'] },
                target: { pick: ['구부리면 바스락 부서져요', '갈색이고 가벼워요'] }, difficulty: 0.2 },
              { prompt: '주워 온 나뭇잎을 감각마다 1분씩 살피고 친구 잎과 색을 견주어 보았으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 나뭇잎 조각 띠 만들기', minutes: 16, tool: 'collage',
            teacher: '"나뭇잎 조각을 왼쪽에서 오른쪽으로 늘어놓아 가을 띠를 만들어요. 한 묶음을 정해 같은 차례로 되풀이해요." 칠판에 \'빨강-노랑\' 묶음을 세 번 이어 붙인 예를 보여 준다. 다 만든 띠는 짝에게 묶음이 무엇인지 맞히게 한다.',
            task: '나뭇잎 조각으로 한 묶음이 되풀이되는 가을 띠를 만들고, 짝에게 묶음을 맞히게 해요.',
            levels: COL_LV,
            items: [
              { prompt: '빨강 나뭇잎 세 개, 노랑 나뭇잎 두 개, 갈색 나뭇잎 한 개로 가을 나뭇잎 모음을 만들어 보세요.', toolOptions: { shapes: ['leaf', 'circle', 'triangle', 'rect'], colors: ['빨강', '노랑', '갈색', '초록', '주황', '파랑'] },
                target: { has: [{ shape: 'leaf', color: '빨강', n: 3 }, { shape: 'leaf', color: '노랑', n: 2 }, { shape: 'leaf', color: '갈색', n: 1 }] }, difficulty: 0.15,
                levels: { easy: { prompt: '빨강 나뭇잎 두 개와 노랑 나뭇잎 한 개로 가을 나뭇잎 모음을 만들어 보세요.', toolOptions: { shapes: ['leaf'], colors: ['빨강', '노랑'] }, target: { has: [{ shape: 'leaf', color: '빨강', n: 2 }, { shape: 'leaf', color: '노랑', n: 1 }] } } } },
              { prompt: '나뭇잎 조각 두 개를 한 묶음으로 정해, 왼쪽에서 오른쪽으로 세 번 이상 되풀이되는 가을 띠를 만들어 보세요.', toolOptions: { shapes: ['leaf', 'circle', 'triangle', 'rect'], colors: ['빨강', '노랑', '갈색', '초록', '주황', '파랑'] },
                target: { repeat: { times: 3, unit: 2 } }, difficulty: 0.25,
                levels: { easy: { prompt: '빨강·노랑 나뭇잎 두 개를 한 묶음으로 정해, 왼쪽에서 오른쪽으로 두 번 이상 되풀이되는 가을 띠를 만들어 보세요.', toolOptions: { shapes: ['leaf'], colors: ['빨강', '노랑'] }, target: { repeat: { times: 2, unit: 2 } } }, challenge: { prompt: '나뭇잎 조각 세 개를 한 묶음으로 정해, 왼쪽에서 오른쪽으로 세 번 이상 되풀이되는 가을 띠를 만들어 보세요.', target: { repeat: { times: 3, unit: 3 } } } } },
              { prompt: '내 가을 띠의 묶음을 짝이 맞혀 보고, 짝의 띠 묶음도 맞혀 보았으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"짝의 가을 띠는 어떤 묶음이 되풀이되었나요?" 두세 명이 짝의 띠를 소개하게 한다. 진짜 나뭇잎은 모아 교실 뒤 \'가을 상자\'에 넣는다. 다음 시간에는 지금까지 살핀 것을 돌아보고 다음에 살펴보고 싶은 것을 고른다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '나뭇잎 감각', slots: ['귀로 알았어요', '피부로 알았어요'], cards: ['낙엽을 밟으면 바사삭', '젖은 잎은 축축해요'] }, prompt: '나뭇잎에 대해 알게 된 것을 귀로 안 것과 피부로 안 것으로 나누어 보세요.', target: { sort: { '귀로 알았어요': ['낙엽을 밟으면 바사삭'], '피부로 알았어요': ['젖은 잎은 축축해요'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '"빨강, 노랑, 빨강, 노랑, 빨강, ___" 빈칸에 올 나뭇잎은 무엇일까요?', options: ['노랑', '빨강'], answer: 0, difficulty: 0.1, explain: '빨강과 노랑이 번갈아 되풀이되어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '가을 나뭇잎 이야기',
      items: [
        { type: 'table', prompt: '나뭇잎을 살피고 감각마다 알게 된 것을 쓰세요.', columns: ['눈', '귀', '피부'], rows: 1 },
        { type: 'draw', prompt: '내가 만든 가을 띠를 색칠해 그려 보세요.' },
        { type: 'blank', prompt: '내 가을 띠의 묶음을 쓰세요.', text: '나의 묶음: ________ → ________ (되풀이)' },
        { type: 'short', prompt: '바싹 마른 잎과 덜 마른 잎이 다른 점을 쓰세요.' },
      ],
      easy: {
        note: '한 묶음을 정해 되풀이해요.',
        items: [
          { type: 'choice', prompt: '마른 나뭇잎을 구부리면 나는 소리에 ○ 하세요.', options: ['바스락', '첨벙'], answer: '바스락' },
          { type: 'draw', prompt: '빨강·노랑 나뭇잎을 번갈아 그려 보세요.' },
          { type: 'short', prompt: '내가 주운 나뭇잎 색을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '나뭇잎 조각과 두 가지 색만 있고, 두 번 되풀이하면 돼요.',
      base: '두 조각 묶음을 세 번 이상 되풀이해요.',
      challenge: '여섯 가지 감각 카드를 나누고, 세 조각 묶음을 세 번 이상 되풀이해요.',
    },
    safety: ['나뭇잎은 맛보지 않아요.', '나뭇잎을 만진 뒤에는 손을 씻어요.'],
    teacherNotes: '전날 알림장으로 낙엽 한두 장을 주워 오게 하고, 못 가져온 학생을 위해 교사가 여분을 준비한다. 자주 보이는 어려움: ① 띠를 위아래로 만든다 → 띠는 왼쪽에서 오른쪽으로 늘어놓는다고 칠판 화살표로 알려 준다. ② 묶음 중간에 다른 색을 넣는다 → 첫 묶음을 손가락으로 짚고 같은 차례로 따라 놓게 한다.',
  }));

  lessons.push(L(40, {
    title: '다음에 살펴보고 싶은 것 골라 계획하기',
    objective: '지금까지 감각으로 살핀 것을 돌아보고, 다음에 살펴보고 싶은 것과 쓸 감각을 골라 짧은 살피기 계획을 세울 수 있다.',
    illustration: ART('a paper child holding a plan card with pictures of a pine cone, a tangerine and a leaf checked off, and a new question mark next to a snail and a flower', '다음에 살필 것', [
      { motif: 'flower', x: 380, y: 228, color: 'rose' }, { motif: 'tree', x: 90, y: 212 }, { motif: 'star', x: 300, y: 80, s: 0.5 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"29차시부터 무엇을 살폈나요?" 솔방울·주머니 속 물건·귤·비 오는 날·나뭇잎 사진을 차례로 칠판에 붙이며 함께 떠올린다. "다음에 또 살펴보고 싶은 것이 있나요?" 서너 명의 생각을 듣는다. 시연 단추로 \'달팽이\'가 \'눈으로 살펴요\'와 이어지는 것을 보여 준다.',
        student: '지금까지 살핀 것 가운데 가장 재미있었던 것을 하나 떠올려 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '어떻게 살필까?', slots: [{ id: 's1', label: '교실 달팽이' }], cards: ['눈으로 살펴요', '맛을 봐요'], shuffle: false }, sequence: [{ match: { s1: '눈으로 살펴요' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 무엇으로 살필까?', minutes: 12, tool: 'mindmap',
            teacher: '"살피고 싶은 것마다 쓸 수 있는 감각과 쓰면 안 되는 감각이 있어요." 살아 있는 동물은 만지지 않고 보기·듣기로, 먹을 수 없는 것은 맛보지 않는다는 기준을 다시 붙인다. 카드를 읽고 \'그렇게 해도 안전한가요?\'를 함께 묻게 한다.',
            task: '살펴보고 싶은 것과 알맞은 살피기 방법을 잇고, 안전한 계획을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '살펴보고 싶은 것과 알맞은 살피기 방법을 이어 보세요.', toolOptions: { mode: 'match', topic: '어떻게 살필까?', slots: [{ id: 's1', label: '교실 어항의 물고기' }, { id: 's2', label: '빵집에서 사 온 식빵' }, { id: 's3', label: '운동장 모래' }], cards: ['어항 밖에서 눈으로 지켜봐요', '손을 씻고 냄새 맡고 맛봐요', '손으로 쥐어 느낌을 살펴요'] },
                target: { match: { s1: '어항 밖에서 눈으로 지켜봐요', s2: '손을 씻고 냄새 맡고 맛봐요', s3: '손으로 쥐어 느낌을 살펴요' } }, difficulty: 0.15,
                levels: { easy: { prompt: '살펴보고 싶은 두 가지와 알맞은 살피기 방법을 이어 보세요.', toolOptions: { slots: [{ id: 's1', label: '교실 어항의 물고기' }, { id: 's2', label: '빵집에서 사 온 식빵' }], cards: ['어항 밖에서 눈으로 지켜봐요', '손을 씻고 냄새 맡고 맛봐요'] }, target: { match: { s1: '어항 밖에서 눈으로 지켜봐요', s2: '손을 씻고 냄새 맡고 맛봐요' } } }, challenge: { toolOptions: { cards: ['어항 밖에서 눈으로 지켜봐요', '손을 씻고 냄새 맡고 맛봐요', '손으로 쥐어 느낌을 살펴요', '손을 넣어 물고기를 잡아 봐요'] } } } },
              { prompt: '하준이가 세운 살피기 계획이에요. 안전하게 살필 수 있는 계획만 바구니에 담아 보세요.', toolOptions: { mode: 'pick', basket: '안전한 계획', cards: ['화단 꽃을 꺾지 않고 냄새를 맡아요', '교실 달팽이가 기어가는 소리를 가까이서 들어 봐요', '처음 보는 버섯을 맛봐요', '벌집을 막대로 찔러 봐요'] },
                target: { pick: ['화단 꽃을 꺾지 않고 냄새를 맡아요', '교실 달팽이가 기어가는 소리를 가까이서 들어 봐요'] }, difficulty: 0.2 },
              { prompt: '모둠에서 다음에 살펴보고 싶은 것을 한 사람씩 말하고, 그것을 무엇으로 살필지도 말했으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 내 살피기 계획 카드', minutes: 15, tool: 'collage',
            teacher: '"살펴보고 싶은 것을 조각으로 만들고, 옆에 쓸 감각을 우리 반 약속 조각으로 붙여요." 눈은 파랑 동그라미, 귀는 노랑 별, 코는 하양 동그라미, 피부는 분홍 하트, 혀는 빨강 반원으로 정해 칠판에 붙인다. 다 만든 학생은 짝에게 계획을 말하고, 짝은 안전한지 함께 살핀다.',
            task: '살펴보고 싶은 것과 쓸 감각을 조각으로 나타낸 계획 카드를 만들고, 짝과 안전한지 살펴요.',
            levels: COL_LV,
            items: [
              { prompt: '"교실 화분 꽃을 보고 냄새 맡기" 계획 카드예요. 감각 약속대로 파랑 동그라미 한 개와 하양 동그라미 한 개를 붙여 보세요.', toolOptions: { shapes: ['circle', 'star', 'heart', 'semi', 'leaf', 'triangle'], colors: ['파랑', '노랑', '하양', '분홍', '빨강', '초록'] },
                target: { has: [{ shape: 'circle', color: '파랑', n: 1 }, { shape: 'circle', color: '하양', n: 1 }] }, difficulty: 0.15,
                levels: { easy: { toolOptions: { shapes: ['circle', 'star'], colors: ['파랑', '하양'] } }, challenge: { prompt: '"교실 화분 꽃을 보고 냄새 맡고 잎을 살짝 만지기" 계획 카드예요. 감각 약속대로 파랑 동그라미, 하양 동그라미, 분홍 하트를 하나씩 붙이고 혀 조각은 붙이지 마세요.', target: { has: [{ shape: 'circle', color: '파랑', n: 1 }, { shape: 'circle', color: '하양', n: 1 }, { shape: 'heart', color: '분홍', n: 1 }, { shape: 'semi', color: '빨강', n: 0 }] } } } },
              { prompt: '내가 살펴보고 싶은 것과 쓸 감각을 조각으로 나타낸 계획 카드를 만들고 점검해 보세요.', toolOptions: { shapes: ['circle', 'star', 'heart', 'semi', 'leaf', 'triangle'], colors: ['파랑', '노랑', '하양', '분홍', '빨강', '초록'] },
                target: { selfCheck: ['살펴보고 싶은 것을 하나 골랐어요', '쓸 감각을 약속 조각으로 붙였어요', '안전하게 살필 수 있는 계획이에요'], minPieces: 3 }, difficulty: 0.15,
                levels: { easy: { prompt: '내가 살펴보고 싶은 것과 쓸 감각 하나를 조각으로 나타낸 계획 카드를 만들고 점검해 보세요.', toolOptions: { shapes: ['circle', 'star', 'heart'], colors: ['파랑', '노랑', '하양'] }, target: { selfCheck: ['살펴보고 싶은 것을 하나 골랐어요', '쓸 감각을 약속 조각으로 붙였어요'], minPieces: 2 } } } },
              { prompt: '짝에게 내 계획 카드를 말하고, 짝과 함께 안전한 계획인지 살펴보았으면 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"내 계획 카드를 한 문장으로 말해 볼까요? \'나는 ___을 ___로 살펴볼 거예요.\'" 서너 명이 말하게 한다. 계획 카드는 교실 \'살피기 판\'에 붙이고, 쉬는 시간이나 집에서 해 보면 이야기해 달라고 한다. 감각 공부(29~40차시)를 마치고, 다음 시간부터는 우리 둘레의 모양과 색 이야기를 살핀다고 알린다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '어떻게 살필까?', slots: [{ id: 'e1', label: '이웃집 강아지' }, { id: 'e2', label: '집에서 깎은 사과' }], cards: ['멀리서 보고 짖는 소리를 들어요', '손을 씻고 맛봐요'] }, prompt: '살펴보고 싶은 것과 알맞은 살피기 방법을 이어 보세요.', target: { match: { e1: '멀리서 보고 짖는 소리를 들어요', e2: '손을 씻고 맛봐요' } }, difficulty: 0.1 },
          { type: 'tool', tool: 'emotion', options: { mode: 'scale', situation: '내 살피기 계획을 생각할 때', feeling: '기대', steps: 3, scaleLabels: ['조금', '', '아주 많이'], ask: '내 계획대로 살펴보는 날이 얼마나 기다려지나요?' }, prompt: '내 살피기 계획을 해 볼 날이 얼마나 기다려지는지 솔직하게 골라 보세요.', target: { level: 'any' }, difficulty: 0.05 },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '다음에 살필 것',
      items: [
        { type: 'blank', prompt: '내 살피기 계획을 쓰세요.', text: '나는 ________을(를) ________(으)로 살펴볼 거예요.' },
        { type: 'table', prompt: '지금까지 살핀 것과 가장 많이 쓴 감각을 쓰세요.', columns: ['살핀 것', '가장 많이 쓴 감각'], rows: 3 },
        { type: 'choice', prompt: '살아 있는 동물을 살필 때 알맞은 방법에 ○ 하세요.', options: ['멀리서 보고 들어요', '손으로 꽉 잡아요'], answer: '멀리서 보고 들어요' },
        { type: 'draw', prompt: '내가 살펴보고 싶은 것을 그려 보세요.' },
      ],
      easy: {
        note: '무엇을, 무엇으로 살필지 정해요.',
        items: [
          { type: 'short', prompt: '살펴보고 싶은 것을 쓰세요.' },
          { type: 'choice', prompt: '어항 물고기를 살피는 방법에 ○ 하세요.', options: ['눈으로 지켜봐요', '손으로 잡아요'], answer: '눈으로 지켜봐요' },
          { type: 'draw', prompt: '살펴보고 싶은 것을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '두 쌍만 잇고, 계획 카드에 감각 하나만 붙여도 돼요.',
      base: '세 쌍을 잇고, 계획 카드에 쓸 감각을 모두 붙여요.',
      challenge: '위험한 함정 카드가 섞여 있고, 쓰면 안 되는 감각 조각은 빼고 붙여요.',
    },
    safety: ['살아 있는 동물은 만지지 않고 보고 들어요.', '처음 보는 버섯이나 열매는 맛보지 않아요.'],
    teacherNotes: '감각 약속 조각(눈=파랑 동그라미, 귀=노랑 별, 코=하양 동그라미, 피부=분홍 하트, 혀=빨강 반원)은 교사가 정한 반 약속이며, 37차시 약속(소리=노랑 별, 냄새=하양 동그라미)과 이어진다. 자주 보이는 어려움: ① 살펴보고 싶은 것을 못 고른다 → 교실·운동장·집 가운데 한 곳을 먼저 정하게 한다. ② 위험한 계획을 세운다 → 짝과 \'안전한가요?\' 질문을 함께 하게 하고, 다른 방법으로 바꾸어 준다.',
  }));

  // ── 차시 끝 ──

  PaperLessons.registerUnit({
    id: 'g1-int-2-08', schema: 'edu-unit.v1', catalogUnit: UNIT,
    grade: 1, subject: '통합교과', unitTitle: TITLE,
    flow: 'FLOW',
    refs: {},
    lessons: lessons,
  });
})();
