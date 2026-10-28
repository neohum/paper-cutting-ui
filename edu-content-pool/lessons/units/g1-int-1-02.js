/* 1학년 1학기 통합교과 2. 사람들 — 48차시
 * 1~12차시 [바른 생활] 가족과 주변 사람: 집집마다 다른 가족 모습(1~4) → 집에서 돕고 고마움 전하기(5~8) → 도운 뒤 돌아보고 습관 만들기(9~12)
 * 13~24차시 [슬기로운 생활] 함께 살아가는 사람들 탐구: 물음 만들기(13~16) → 묻고 들은 것 적고 읽기(17~20) → 묶어 말하고 고마움 전하기(21~24)
 * 25~36차시 [즐거운 생활·건강] 친구와 움직임 잇기: 움직임 이름과 잇는 방법(25~28) → 차례 지켜 이어 하기(29~32) → 함께 움직인 것 돌아보기(33~36)
 * 37~48차시 [바른 생활] 여럿이 함께하기: 혼자와 함께 견주기(37~40) → 맡을 일 고르고 돕기(41~44) → 잘된 점·역할 바꾸기와 단원 정리(45~48)
 * 성취기준: units-map 단원 목록이 비어 있고 미확인(standardsVerified:false)이라 모든 차시 standards: [] (지어내지 않는다).
 * 이야기·인터뷰 글·예문은 모두 직접 지었다. 학생 이름은 가명(민지·준호·하준·서아)만 쓴다.
 */
(function () {
  var UNIT = 'g1-통합교과-1학기-2';
  var TITLE = '2. 사람들';
  var HEAD = 'Layered paper-cut illustration of ';
  var TAIL = ', with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.';
  function two(n) { return (n < 10 ? '0' : '') + n; }
  // 차시 머리(같은 칸)를 채운다 — 차시마다 다른 내용은 x에 그대로 적는다
  function L(n, x) {
    var head = {
      id: 'g1-int-1-02-' + two(n), schema: 'edu-lesson.v1', catalog: { unit: UNIT, lesson: n },
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
  // 콜라주 단계: 쉬움은 모양·크기를 줄여 고르기 쉽게, 도전은 모양을 다 쓴다
  var COL_LV = { easy: { shapes: ['circle', 'square', 'triangle', 'heart'], sizes: ['m', 'l'] }, base: { shapes: ['circle', 'square', 'triangle', 'rect', 'semi', 'heart', 'star'] }, challenge: {} };
  // 몸으로 움직이는 차시의 안전 약속
  var MOVE_SAFE = ['두 팔을 벌려 친구와 닿지 않을 만큼 떨어져 서요.', '실내화 뒤축을 꺾어 신지 않고, 바닥에 떨어진 물건이 없는지 먼저 봐요.', '선생님이 손뼉을 두 번 치면 그 자리에 멈춰요.'];

  var lessons = [];

  // ───────────────────────── 1~4차시: 집집마다 다른 가족 모습(생활 맥락 이해) ─────────────────────────

  lessons.push(L(1, {
    title: '우리 집 식구 얼굴 꾸며 소개하기',
    objective: '우리 집에서 함께 사는 사람을 색종이 조각으로 꾸미고, 누구와 사는지 짝에게 한 문장으로 소개할 수 있다.',
    illustration: ART('a paper house with open windows, in each window a different family member smiling, a child waving at the door', '우리 집에는 누가 살까요?', [
      { motif: 'house', x: 240, y: 214, s: 1.2 }, { motif: 'tree', x: 100, y: 214 }, { motif: 'flower', x: 380, y: 228, color: 'rose' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 7,
        teacher: '"선생님 집에는 누가 살까요? 맞혀 볼래요?" 교사가 직접 그린 식구 그림을 한 장씩 보여 주며 "이분은 우리 엄마예요"처럼 소개한다. "이번 단원에서는 우리 둘레의 여러 사람들을 만나요. 오늘은 가장 가까운 사람, 우리 집 식구부터예요." 식구 수를 묻는 대신 "아침에 누구랑 인사했어요?"처럼 떠올리기 쉬운 물음을 건넨다.',
        student: '오늘 아침에 우리 집에서 누구와 인사했는지 떠올려 봐요.',
        demo: { tool: 'collage', options: { readOnly: true }, sequence: [{ has: [{ shape: 'circle', min: 2 }] }] },
      },
      {
        id: 'main', title: '전개', minutes: 25,
        activities: [
          {
            id: 'a1', title: '활동 1. 우리 집 식구 얼굴 꾸미기', minutes: 13, tool: 'collage',
            teacher: '"식구 한 명에 동그라미 얼굴 하나씩 붙여요. 나도 꼭 넣어요." 반려동물도 함께 산다면 넣어도 된다고 말한다. 식구 수가 적다며 머뭇거리는 학생에게 "둘이 사는 집도, 여섯이 사는 집도 모두 가족이에요"라고 먼저 말해 준다. 다 꾸민 학생은 짝에게 "우리 집에는 ○○와 ○○가 살아요"라고 소개하게 한다.',
            task: '함께 사는 식구마다 얼굴 조각을 하나씩 붙이고, 짝에게 소개해요.',
            levels: COL_LV,
            items: [
              { prompt: '우리 집 식구 수만큼 동그라미 얼굴을 붙이고, 해낸 것을 표시해 보세요.', target: { selfCheck: ['식구마다 얼굴을 하나씩 붙였어요', '나도 그림 속에 넣었어요', '얼굴마다 누구인지 짝에게 말했어요'], minPieces: 2 }, difficulty: 0.05 },
              { prompt: '식구 얼굴 옆에 그 사람이 좋아하는 것을 조각 하나로 붙여 보세요.', state: { pieces: [{ shape: 'circle', color: '분홍', size: 'l', x: 160, y: 200, r: 0 }, { shape: 'circle', color: '노랑', size: 'l', x: 320, y: 200, r: 0 }] }, target: { selfCheck: ['좋아하는 것을 얼굴 옆에 붙였어요', '그 까닭을 짝에게 말했어요'], minPieces: 4 }, difficulty: 0.15 },
              { prompt: '짝과 그림을 바꿔 보고, 짝네 식구를 한 문장으로 말해 준 뒤 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 가족과 함께할 때의 마음', minutes: 12, tool: 'emotion',
            teacher: '"할머니가 안아 주실 때 마음은 어떤 날씨일까요?" 카드를 놓은 뒤 까닭을 한 문장으로 말하게 한다. 같은 일에도 사람마다 마음이 다를 수 있으니, 맞는 카드가 둘인 칸이 있다는 것을 알려 준다. 집 이야기를 하기 싫어하는 학생은 이야기 속 민지의 마음으로만 말해도 된다.',
            task: '가족과 함께한 일을 읽고, 그때의 마음 카드를 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '민지네 집 일에 어울리는 마음 카드를 놓아 보세요.', toolOptions: { cards: ['기쁨', '속상함', '고마움'], slots: [{ id: 's1', label: '할머니가 꼭 안아 주셨어요' }, { id: 's2', label: '아빠가 아파서 놀이공원에 못 갔어요' }] },
                target: { match: { s1: ['기쁨', '고마움'], s2: '속상함' } }, difficulty: 0.05 },
              { prompt: '준호네 집 일에 어울리는 마음 카드를 놓아 보세요.', toolOptions: { cards: ['신남', '미안함', '걱정'], slots: [{ id: 's1', label: '동생과 함께 눈사람을 만들었어요' }, { id: 's2', label: '내가 동생 장난감을 망가뜨렸어요' }, { id: 's3', label: '엄마가 늦게까지 안 오세요' }] },
                target: { match: { s1: '신남', s2: '미안함', s3: '걱정' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['신남', '미안함', '걱정', '뿌듯함'] } } } },
              { prompt: '하준이는 일주일 만에 집에 온 아빠를 만났어요. 하준이의 기쁜 마음 크기를 골라 보세요.', toolOptions: { mode: 'scale', who: '하준', situation: '멀리 일하러 가셨던 아빠가 일주일 만에 집에 오셔서, 하준이가 달려가 안겼어요.', feeling: '기쁨', after: '반가운 마음은 "보고 싶었어요"처럼 말로도 전할 수 있어요.' }, target: { level: [4, 5] }, difficulty: 0.1,
                levels: { easy: { toolOptions: { steps: 3 }, prompt: '하준이는 일주일 만에 집에 온 아빠를 만났어요. 기쁜 마음 크기를 세 칸에서 골라 보세요.', target: { level: 3 } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 짝네 식구 소개를 들으니 우리 집과 같았나요, 달랐나요?" 두세 명의 대답을 듣고, 집마다 식구 수와 함께 사는 사람이 다르다는 것을 짚는다. 다음 시간에는 여러 집 이야기를 더 읽어 본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { cards: ['고마움', '속상함'], slots: [{ id: 'e1', label: '형이 숙제를 도와줬어요' }, { id: 'e2', label: '할아버지가 멀리 이사 가셨어요' }] }, prompt: '두 일에 어울리는 마음 카드를 놓아 보세요.', target: { match: { e1: '고마움', e2: '속상함' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '우리 반 친구들 집의 식구 수는 어떨까요?', options: ['모두 똑같아요', '집마다 달라요'], answer: 1, difficulty: 0.1, explain: '함께 사는 사람과 식구 수는 집마다 달라요.' },
          { type: 'tool', tool: 'emotion', options: { mode: 'scale', steps: 3, situation: '식구들과 둘러앉아 저녁을 먹어요.', feeling: '편안함', ask: '그때 내 마음은 얼마나 편안한가요?' }, prompt: '식구와 저녁을 먹을 때 내 마음을 솔직하게 골라 보세요. 정답은 없어요.', target: { level: 'any' }, difficulty: 0.05 },
        ],
      },
    ],
    worksheet: {
      title: '우리 집 식구',
      items: [
        { type: 'draw', prompt: '우리 집에서 함께 사는 사람을 모두 그려 보세요.' },
        { type: 'blank', prompt: '빈칸에 알맞게 쓰세요.', text: '우리 집에는 ___ 명이 함께 살아요.', answer: '(학생마다 다름)' },
        { type: 'choice', prompt: '가족에 대해 맞는 말에 ○ 하세요.', options: ['집마다 식구가 달라요', '가족은 꼭 네 명이에요'], answer: '집마다 식구가 달라요' },
        { type: 'short', prompt: '식구와 함께해서 기뻤던 일을 한 가지 쓰세요.' },
      ],
      easy: {
        note: '오늘 아침에 인사한 사람부터 떠올려요.',
        items: [
          { type: 'draw', prompt: '우리 집 식구 얼굴을 그려 보세요.' },
          { type: 'choice', prompt: '맞는 말에 ○ 하세요.', options: ['집마다 식구가 달라요', '모든 집은 똑같아요'], answer: '집마다 식구가 달라요' },
          { type: 'short', prompt: '함께 사는 사람 한 명을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '모양은 네 가지, 크기는 보통·크게만 나와요. 마음 카드는 맞는 칸에 초록 테두리가 생겨요.',
      base: '얼굴을 꾸민 뒤 좋아하는 것까지 붙이고, 마음 카드는 모두 놓은 뒤 확인을 눌러요.',
      challenge: '모든 모양을 쓸 수 있고, 마음 카드에 맞지 않는 카드가 하나 더 섞여 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 가족은 엄마·아빠·나·동생처럼 정해진 모습이라고 여긴다 → 교사 가족 그림과 여러 집 이야기로 다른 모습을 먼저 보여 준다. ② 따로 사는 부모·조부모를 넣을지 고민한다 → "함께 사는 사람"과 "가족이라고 생각하는 사람" 모두 그려도 된다고 말한다. ③ 집 이야기를 꺼리는 학생이 있다 → 발표를 강요하지 않고 이야기 속 인물로 말하게 한다. 가정 형편을 묻는 질문(집 크기, 부모 직업)은 하지 않는다.',
  }));

  lessons.push(L(2, {
    title: '여러 집 이야기 읽고 가족 모습 견주기',
    objective: '여러 집의 이야기를 읽고 함께 사는 사람을 찾아 나누며, 집집마다 가족 모습이 다르다는 것을 말할 수 있다.',
    illustration: ART('three small paper houses side by side, one with a grandmother and a child, one with two parents and a baby, one with a father, a child and a cat', '집집마다 달라요', [
      { motif: 'house', x: 110, y: 216, color: 'peach' }, { motif: 'house', x: 240, y: 216, color: 'sky' }, { motif: 'house', x: 370, y: 216, color: 'mint' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"지난 시간 짝네 식구 그림은 우리 집과 똑같았나요?" 몇 명의 대답을 듣는다. 시연 단추로 \'하준이네 집\' 가지에 식구 카드가 놓이는 모습을 보여 준다. "오늘은 세 친구의 집 이야기를 읽고, 누가 함께 사는지 찾아볼 거예요."',
        student: '짝네 식구와 우리 집 식구에서 다른 점을 하나 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '하준이네 집', slots: ['하준이와 함께 살아요'], cards: ['할머니', '고모'], shuffle: false }, sequence: [{ sort: { '하준이와 함께 살아요': ['할머니', '고모'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 이야기 속 집에 식구 나누기', minutes: 14, tool: 'mindmap',
            teacher: '"이야기를 손가락으로 짚으며 같이 읽어요. 민지는 누구와 산다고 했지요?" 문항 글에 나온 사람만 넣는다는 것을 짚는다. 이야기에 없는 사람을 \'보통 있으니까\' 넣는 학생에게 "글에 그 사람이 나왔나요?"라고 되묻는다.',
            task: '이야기를 읽고, 그 집에서 함께 사는 사람 카드를 집 가지에 나누어 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '민지는 할머니와 둘이 살아요. 준호는 엄마, 아빠, 누나와 살아요. 카드를 두 집에 나누어 보세요.', toolOptions: { topic: '누구와 살까?', slots: ['민지네 집', '준호네 집'], cards: [{ id: 'm1', text: '할머니' }, { id: 'j1', text: '엄마' }, { id: 'j2', text: '아빠' }, { id: 'j3', text: '누나' }] },
                target: { sort: { '민지네 집': ['m1'], '준호네 집': ['j1', 'j2', 'j3'] } }, difficulty: 0.1 },
              { prompt: '서아는 아빠, 강아지와 살아요. 하준이는 엄마, 이모, 사촌 동생과 살아요. 카드를 나누어 보세요.', toolOptions: { topic: '누구와 살까?', slots: ['서아네 집', '하준이네 집'], cards: [{ id: 's1', text: '아빠' }, { id: 's2', text: '강아지' }, { id: 'h1', text: '엄마' }, { id: 'h2', text: '이모' }, { id: 'h3', text: '사촌 동생' }] },
                target: { sort: { '서아네 집': ['s1', 's2'], '하준이네 집': ['h1', 'h2', 'h3'] } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: [{ id: 's1', text: '아빠' }, { id: 's2', text: '강아지' }, { id: 'h1', text: '엄마' }, { id: 'h2', text: '이모' }, { id: 'h3', text: '사촌 동생' }, { id: 'x1', text: '할아버지' }] } } },
                hints: ['문항 글을 한 사람씩 다시 읽어요. 글에 나온 사람만 그 집에 넣어요.', '집마다 글에 나온 사람 수와 놓은 카드 수가 같은지 세어 보세요.', '서아 글에는 두 가지, 하준이 글에는 세 사람이 나와요. 글에 없는 카드는 남겨 두어요.'] },
              { prompt: '세 집 이야기를 보고, 가족에 대해 맞는 말만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '맞는 말', cards: ['집마다 함께 사는 사람이 달라요', '둘이 사는 집도 가족이에요', '가족은 꼭 엄마, 아빠가 다 있어야 해요', '식구가 많아야 가족이에요'] },
                target: { pick: ['집마다 함께 사는 사람이 달라요', '둘이 사는 집도 가족이에요'] }, difficulty: 0.15,
                predict: { q: '할머니와 둘이 사는 민지네도 가족일까요?', options: ['가족이에요', '아니에요'], answer: 0 },
                conclude: '함께 살며 서로 아끼는 사람들이 가족이고, 모습은 집마다 달라요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 다른 모습을 보고 하는 말', minutes: 12, tool: 'emotion',
            teacher: '"친구가 \'우리 집은 아빠랑 둘이 살아\'라고 말했어요. 어떤 말을 해 주면 좋을까요?" 보기를 고르기 전에 그 말을 들은 친구의 마음을 먼저 떠올리게 한다. "왜 엄마가 없어?"처럼 캐묻는 말도 친구를 속상하게 할 수 있다는 것을 짚는다.',
            task: '친구네 가족 이야기를 들을 때 할 말과 행동을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '서아가 "우리 집은 아빠랑 둘이 살아"라고 해요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '서아', situation: '서아가 "우리 집은 아빠랑 강아지랑 살아"라고 말했어요.', choices: [
                { id: 'ask', text: '"왜 엄마는 없어?" 하고 자꾸 물어요', result: '서아가 대답하기 싫어 고개를 숙여요.', mood: '속상함', why: '자꾸 캐물으면 서아는 어떤 마음일까요?' },
                { id: 'nice', text: '"강아지 이름이 뭐야?" 하고 웃으며 물어요', result: '서아가 신나서 강아지 이야기를 해요.', mood: '신남' },
                { id: 'weird', text: '"이상하다" 하고 말해요', result: '서아가 울먹여요.', mood: '슬픔', why: '집마다 모습이 다른 것은 이상한 일이 아니에요.' }] }, target: { choice: 'nice' }, difficulty: 0.1 },
              { prompt: '친구네 가족 이야기를 들을 때 하면 좋은 말만 골라 보세요.', toolOptions: { mode: 'pick', basket: '좋은 말', cards: ['"너희 집도 재미있겠다"', '"우리 집이랑 달라서 신기해"', '"그건 가족이 아니야"', '"너희 집은 왜 그래?"'] },
                target: { pick: ['"너희 집도 재미있겠다"', '"우리 집이랑 달라서 신기해"'] }, difficulty: 0.15 },
              { prompt: '준호가 "가족은 꼭 네 명이야"라는 말을 들었어요. 할머니와 사는 친구의 마음 크기를 골라 보세요.', toolOptions: { mode: 'scale', situation: '할머니와 둘이 사는 친구가 "가족은 꼭 네 명이야"라는 말을 들었어요.', feeling: '속상함', after: '집마다 다른 모습을 그대로 아껴 주면 모두 편안해요.' }, target: { level: [3, 5] }, difficulty: 0.1,
                levels: { easy: { toolOptions: { steps: 3 }, prompt: '할머니와 사는 친구가 "가족은 꼭 네 명이야"라는 말을 들었어요. 마음 크기를 세 칸에서 골라 보세요.', target: { level: [2, 3] } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"세 집 가운데 가족이 아닌 집이 있었나요?" 모두 가족이라는 대답을 듣고, 함께 사는 사람의 수와 모습은 달라도 서로 아끼면 가족이라는 것을 짚는다. 출구 1번에서 글에 없는 사람을 넣은 학생은 글을 다시 짚어 읽게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '누구와 살까?', slots: ['지우네 집', '도윤이네 집'], cards: [{ id: 'a', text: '엄마' }, { id: 'b', text: '할아버지' }, { id: 'c', text: '삼촌' }] }, prompt: '지우는 엄마와 살고, 도윤이는 할아버지, 삼촌과 살아요. 카드를 나누어 보세요.', target: { sort: { '지우네 집': ['a'], '도윤이네 집': ['b', 'c'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '친구네 가족이 우리 집과 다를 때 알맞은 생각은?', options: ['이상한 가족이에요', '집마다 다를 수 있어요', '우리 집이 맞아요'], answer: 1, difficulty: 0.1, explain: '가족의 모습은 집마다 달라요. 다른 것은 틀린 것이 아니에요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '집집마다 다른 가족',
      items: [
        { type: 'figure', wide: true, prompt: '민지는 할머니와 살고, 준호는 엄마, 아빠와 살아요. 함께 사는 사람을 선으로 이으세요.', tool: 'mindmap', figures: [{ options: { topic: '누구와 살까?', slots: ['민지네 집', '준호네 집'], cards: [{ id: 'm1', text: '할머니' }, { id: 'j1', text: '엄마' }, { id: 'j2', text: '아빠' }] }, caption: '' }], answer: '민지네-할머니, 준호네-엄마·아빠' },
        { type: 'choice', prompt: '친구네 가족 이야기를 들을 때 좋은 말에 ○ 하세요.', options: ['"너희 집도 재미있겠다"', '"그건 이상해"', '"왜 그래?"'], answer: '"너희 집도 재미있겠다"' },
        { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '가족의 모습은 집마다 ___.', answer: '달라요' },
        { type: 'short', prompt: '우리 집과 짝네 집에서 다른 점을 하나 쓰세요.' },
      ],
      easy: {
        note: '이야기에 나온 사람만 찾아요.',
        items: [
          { type: 'choice', prompt: '민지는 할머니와 살아요. 민지와 사는 사람에 ○ 하세요.', options: ['할머니', '동생'], answer: '할머니' },
          { type: 'choice', prompt: '맞는 말에 ○ 하세요.', options: ['둘이 사는 집도 가족이에요', '넷이어야 가족이에요'], answer: '둘이 사는 집도 가족이에요' },
          { type: 'draw', prompt: '짝네 식구를 그려 보세요.' },
          { type: 'short', prompt: '짝네 식구 한 명을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 가지에 놓으면 초록 테두리가 생기고, 마음 크기는 세 칸이에요.',
      base: '모두 나눈 뒤 확인을 눌러요. 고른 말의 까닭을 짝에게 말해요.',
      challenge: '이야기에 없는 사람 카드가 섞여 있어 골라내야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 이야기에 없는 사람을 \'보통 있으니까\' 넣는다 → 글에 나온 사람만 손가락으로 짚게 한다. ② 다른 가족 모습을 "불쌍해"로 말한다 → 모습이 다를 뿐 아끼는 마음은 같다고 바로잡는다. ③ 반 친구의 실제 가정 형편을 묻는 학생이 있다 → 이야기 속 인물로만 이야기하도록 한다.',
  }));

  lessons.push(L(3, {
    title: '가족과 지내며 생기는 마음 알아보기',
    objective: '가족과 지내며 생기는 여러 일에 어울리는 마음을 찾고, 식구의 마음을 생각해 할 말을 고를 수 있다.',
    illustration: ART('a paper family at a dinner table, a child spilling juice and a parent smiling kindly, a small rain cloud and a sun above them', '식구의 마음은 어떨까요?', [
      { motif: 'house', x: 110, y: 214 }, { motif: 'flower', x: 360, y: 228, color: 'buttercup' }, { motif: 'tree', x: 420, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"집에서 가장 신났던 일, 가장 속상했던 일을 하나씩 떠올려 봐요." 손으로 해 모양, 비 모양을 만들어 보이게 한다. 시연 단추로 \'동생이 그림을 찢었어요\' 옆에 \'화남\' 카드가 놓이는 모습을 보여 준다. "식구끼리도 마음이 서로 다를 수 있어요. 오늘은 식구의 마음을 읽어 봐요."',
        student: '집에서 신났던 일 하나를 손으로 해 모양을 만들며 짝에게 말해 봐요.',
        demo: { tool: 'emotion', options: { cards: ['화남', '기쁨'], slots: [{ id: 's1', label: '동생이 내 그림을 찢었어요' }], shuffle: false }, sequence: [{ match: { s1: '화남' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 같은 일, 서로 다른 마음', minutes: 13, tool: 'emotion',
            teacher: '"엄마가 아끼는 컵을 하준이가 깼어요. 하준이 마음과 엄마 마음은 같을까요?" 한 일을 두 사람 자리에서 따로 보게 한다. 엄마 마음에 \'화남\'만 떠올리는 학생에게 "다치지 않았을까 하는 마음도 있을까요?"를 묻는다.',
            task: '한 가지 일을 두 사람 자리에서 보고, 각자의 마음 카드를 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '하준이가 엄마 컵을 깼어요. 두 사람의 마음 카드를 놓아 보세요.', toolOptions: { cards: ['미안함', '걱정', '신남'], slots: [{ id: 's1', label: '컵을 깬 하준이의 마음' }, { id: 's2', label: '하준이가 다쳤을까 하는 엄마 마음' }] },
                target: { match: { s1: '미안함', s2: '걱정' } }, difficulty: 0.15 },
              { prompt: '민지 생일에 할아버지가 직접 만든 연을 주셨어요. 두 사람의 마음 카드를 놓아 보세요.', toolOptions: { cards: ['기쁨', '뿌듯함', '무서움'], slots: [{ id: 's1', label: '연을 받은 민지의 마음' }, { id: 's2', label: '손녀가 좋아해서 웃는 할아버지 마음' }] },
                target: { match: { s1: '기쁨', s2: '뿌듯함' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['기쁨', '뿌듯함', '무서움', '화남'] } } } },
              { prompt: '아빠가 일하고 늦게 오셨는데 준호가 장난감을 어질러 놓았어요. 두 사람의 마음 카드를 놓아 보세요.', toolOptions: { cards: ['신남', '속상함', '미안함'], slots: [{ id: 's1', label: '힘들게 집에 와 어질러진 방을 본 아빠' }, { id: 's2', label: '아빠 얼굴을 보고 미안해진 준호' }] },
                target: { match: { s1: '속상함', s2: '미안함' } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['신남', '속상함', '미안함', '뿌듯함'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 식구 마음을 생각해 할 말 고르기', minutes: 13, tool: 'emotion',
            teacher: '"하준이라면 엄마에게 어떤 말을 할까요?" 보기를 고른 뒤 결과 칸을 소리 내어 읽게 한다. \'몰래 치우기\'를 고르는 학생이 많으면 "깨진 조각에 다칠 수 있어요. 어른께 먼저 말해요"라고 안전을 함께 짚는다.',
            task: '식구의 마음을 생각해 어떻게 말하고 행동할지 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '컵을 깬 하준이는 어떻게 하면 좋을까요?', toolOptions: { mode: 'branch', who: '하준', situation: '하준이가 엄마가 아끼는 컵을 바닥에 떨어뜨려 깼어요.', choices: [
                { id: 'hide', text: '깨진 조각을 몰래 치워요', result: '손을 베일 수 있고, 엄마는 나중에 알고 더 속상해요.', mood: '걱정', why: '깨진 조각은 위험해요. 몰래 치우면 어떤 일이 생길까요?' },
                { id: 'tell', text: '"엄마, 미안해요. 컵을 깼어요" 하고 말해요', result: '엄마가 다친 데 없냐고 묻고 함께 치워요.', mood: '편안함' },
                { id: 'blame', text: '"동생이 그랬어요" 하고 말해요', result: '동생이 억울해서 울어요.', mood: '슬픔', why: '거짓말을 들은 동생은 어떤 마음일까요?' }] }, target: { choice: 'tell' }, difficulty: 0.1 },
              { prompt: '아빠가 지쳐서 들어오셨어요. 아빠 마음을 생각한 말만 골라 보세요.', toolOptions: { mode: 'pick', basket: '아빠께 할 말', cards: ['"아빠, 힘드셨지요?"', '"제가 장난감 치울게요"', '"빨리 놀아 줘요!"', '"왜 이렇게 늦었어요?"'] },
                target: { pick: ['"아빠, 힘드셨지요?"', '"제가 장난감 치울게요"'] }, difficulty: 0.15 },
              { prompt: '동생이 내 그림을 찢었어요. 동생에게 할 말을 골라 보세요.', toolOptions: { mode: 'branch', who: '민지', situation: '동생이 민지가 그린 그림을 모르고 찢었어요.', choices: [
                { id: 'hit', text: '동생 손을 때려요', result: '동생이 아파서 크게 울어요.', mood: '슬픔', why: '때리면 동생은 아프고 마음도 다쳐요.' },
                { id: 'say', text: '"그건 내가 아끼는 그림이야. 다음엔 물어봐 줘"', result: '동생이 "미안해" 하고 테이프를 가져와요.', mood: '편안함' },
                { id: 'quiet', text: '아무 말 없이 문을 쾅 닫아요', result: '동생은 왜 그러는지 몰라 어리둥절해요.', mood: '놀람', why: '말하지 않으면 동생이 내 마음을 알 수 있을까요?' }] }, target: { choice: 'say' }, difficulty: 0.15 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"식구 마음을 알고 나니 어떤 말을 해 주고 싶어졌나요?" 오늘 집에 가서 해 볼 말을 하나씩 정하게 한다. 출구 1번에서 두 사람에게 같은 마음을 놓은 학생은 "그 사람 자리에 서 보세요"라고 다시 묻는다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { cards: ['고마움', '미안함'], slots: [{ id: 'e1', label: '늦잠 자서 누나를 늦게 만든 나' }, { id: 'e2', label: '나를 기다려 준 누나에게 드는 마음' }] }, prompt: '두 칸에 어울리는 마음 카드를 놓아 보세요.', target: { match: { e1: '미안함', e2: '고마움' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '같은 일을 겪어도 식구마다 마음은?', options: ['늘 똑같아요', '다를 수 있어요'], answer: 1, difficulty: 0.1, explain: '같은 일이라도 서 있는 자리에 따라 마음이 달라요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '식구의 마음 읽기',
      items: [
        { type: 'figure', wide: true, prompt: '두 사람의 마음을 선으로 이으세요.', tool: 'emotion', figures: [{ options: { cards: ['미안함', '걱정'], slots: [{ id: 's1', label: '컵을 깬 하준이' }, { id: 's2', label: '다쳤을까 하는 엄마' }] }, caption: '' }], answer: '하준이-미안함, 엄마-걱정' },
        { type: 'choice', prompt: '컵을 깼을 때 알맞은 행동에 ○ 하세요.', options: ['어른께 말해요', '몰래 치워요', '동생 탓을 해요'], answer: '어른께 말해요' },
        { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '같은 일도 식구마다 마음이 ___ 수 있어요.', answer: '다를' },
        { type: 'short', prompt: '오늘 집에서 식구에게 해 줄 말을 쓰세요.' },
      ],
      easy: {
        note: '그 사람이 되어 보았다고 생각해요.',
        items: [
          { type: 'choice', prompt: '컵을 깬 하준이 마음에 ○ 하세요.', options: ['미안해요', '신나요'], answer: '미안해요' },
          { type: 'choice', prompt: '컵을 깼을 때 할 일에 ○ 하세요.', options: ['어른께 말해요', '몰래 치워요'], answer: '어른께 말해요' },
          { type: 'draw', prompt: '식구에게 고운 말을 하는 내 모습을 그려 보세요.' },
          { type: 'short', prompt: '식구에게 해 줄 말을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 놓으면 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '두 사람의 마음을 모두 놓은 뒤 확인을 눌러요.',
      challenge: '맞지 않는 마음 카드가 하나 더 섞여 있어요. 고른 말의 까닭도 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 어른은 늘 화만 낸다고 여긴다 → 걱정·속상함처럼 화 뒤에 있는 마음을 함께 찾는다. ② 내 마음과 식구 마음을 같다고 놓는다 → 그 사람의 자리에 서는 몸짓(의자 바꿔 앉기)을 해 본다. ③ 잘못을 숨기는 보기를 고른다 → 숨기면 다칠 수 있고 마음도 더 무거워진다는 결과를 읽게 한다.',
  }));

  lessons.push(L(4, {
    title: '이웃과 주변 어른께 인사 나누기',
    objective: '집 둘레에서 만나는 이웃과 어른을 떠올리고, 상황에 맞는 인사말을 골라 실제로 해 볼 수 있다.',
    illustration: ART('a paper apartment entrance where a child bows to an elderly neighbor and a security guard waves, flowers in pots by the door', '안녕하세요!', [
      { motif: 'house', x: 120, y: 214, color: 'lavender' }, { motif: 'house', x: 360, y: 214, color: 'sky' }, { motif: 'flower', x: 240, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"엘리베이터에서 옆집 할머니를 만나면 뭐라고 해요?" 서너 명에게 인사를 실제로 해 보게 한다. 시연 단추로 \'아침에 이웃을 만나요\' 옆에 \'안녕하세요\' 카드가 놓이는 모습을 보여 준다. "가족 말고도 우리 둘레에는 함께 사는 사람이 많아요."',
        student: '집 둘레에서 자주 만나는 어른을 한 명 떠올려 짝에게 말해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '알맞은 인사', slots: [{ id: 's1', label: '아침에 이웃을 만나요' }], cards: ['"안녕하세요"', '"잘 먹겠습니다"'], shuffle: false }, sequence: [{ match: { s1: '"안녕하세요"' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 때와 곳에 맞는 인사말', minutes: 12, tool: 'mindmap',
            teacher: '"헤어질 때도 \'안녕하세요\'라고 할까요?" 상황을 몸으로 해 보며 인사말을 붙인다. 어른께 \'안녕\'이라고 하는 학생에게 높여 말하는 인사를 함께 연습한다.',
            task: '상황을 읽고 알맞은 인사말 카드를 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '상황마다 알맞은 인사말 카드를 이어 보세요.', toolOptions: { mode: 'match', topic: '알맞은 인사', slots: [{ id: 's1', label: '경비 아저씨가 문을 열어 주셨어요' }, { id: 's2', label: '옆집 할머니와 헤어져요' }] , cards: ['"고맙습니다"', '"안녕히 가세요"'] },
                target: { match: { s1: '"고맙습니다"', s2: '"안녕히 가세요"' } }, difficulty: 0.1 },
              { prompt: '세 상황에 알맞은 인사말 카드를 이어 보세요.', toolOptions: { mode: 'match', topic: '알맞은 인사', slots: [{ id: 's1', label: '아랫집 아주머니를 아침에 만났어요' }, { id: 's2', label: '가게 아저씨가 거스름돈을 주셨어요' }, { id: 's3', label: '내가 이웃 아기 발을 밟았어요' }], cards: ['"안녕하세요"', '"고맙습니다"', '"죄송합니다"'] },
                target: { match: { s1: '"안녕하세요"', s2: '"고맙습니다"', s3: '"죄송합니다"' } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['"안녕하세요"', '"고맙습니다"', '"죄송합니다"', '"안녕"'] } } },
                hints: ['만났을 때, 도움을 받았을 때, 내가 잘못했을 때 하는 인사가 서로 달라요.', '어른께는 높여 말하는 인사를 써요. 이은 카드를 상황과 함께 소리 내어 읽어 보세요.', '발을 밟았으면 내가 잘못한 것이니 사과하는 인사를 해요.'] },
              { prompt: '어른께 하는 인사말만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '어른께 하는 인사', cards: ['"안녕하세요"', '"안녕히 계세요"', '"안녕, 잘 가"', '"야, 고마워"'] },
                target: { pick: ['"안녕하세요"', '"안녕히 계세요"'] }, difficulty: 0.15,
                predict: { q: '할머니께 "안녕, 잘 가"라고 해도 될까요?', options: ['돼요', '안 돼요'], answer: 1 },
                conclude: '어른께는 "안녕히 가세요"처럼 높여서 인사해요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 짝과 인사 놀이', minutes: 14, tool: 'emotion',
            teacher: '"짝은 이웃 할머니, 나는 나예요. 허리를 숙이며 인사해 볼까요?" 짝끼리 역할을 바꿔 세 상황을 해 보게 한다. 인사를 받았을 때 마음을 고르는 문항에서는 인사가 받는 사람도 기분 좋게 한다는 것을 짚는다. 처음 보는 어른이 따라오라고 하면 인사만 하고 따라가지 않는다는 것도 함께 말한다.',
            task: '짝과 이웃이 되어 인사를 주고받고, 인사를 받은 사람의 마음을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '짝은 이웃 할머니, 나는 어린이가 되어 만날 때·도움받을 때·헤어질 때 인사를 해 보고 "다 했어요"를 누르세요.', free: true, talk: true },
              { prompt: '인사를 받은 이웃 할머니는 어떤 마음일까요? 알맞은 카드를 놓아 보세요.', toolOptions: { cards: ['기쁨', '화남', '서운함'], slots: [{ id: 's1', label: '준호가 웃으며 "안녕하세요" 했어요' }, { id: 's2', label: '준호가 못 본 척 지나갔어요' }] },
                target: { match: { s1: '기쁨', s2: ['서운함', '화남'] } }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['기쁨', '화남', '서운함', '무서움'] } } } },
              { prompt: '처음 보는 아저씨가 "강아지 보러 같이 가자"고 해요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '서아', situation: '놀이터에서 처음 보는 아저씨가 "강아지 보여 줄게, 같이 가자"고 해요.', choices: [
                { id: 'go', text: '인사하고 따라가요', result: '어디로 가는지 아무도 몰라 위험해요.', mood: '무서움', why: '처음 보는 사람을 따라가면 어떤 일이 생길 수 있을까요?' },
                { id: 'no', text: '"안 가요" 하고 어른이 있는 곳으로 가요', result: '서아가 집 앞 경비실로 가서 안전해요.', mood: '편안함' },
                { id: 'wait', text: '아무 말 없이 기다려요', result: '아저씨가 계속 같이 가자고 해요.', mood: '걱정', why: '분명하게 말하고 어른이 있는 곳으로 가야 해요.' }] }, target: { choice: 'no' }, difficulty: 0.15 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 집에 가는 길에 누구에게 인사해 볼까요?" 한 명씩 떠올린 사람을 손가락으로 세게 한다. 인사는 아는 이웃에게 하고, 처음 보는 사람이 따라오라고 하면 따라가지 않는다는 것을 한 번 더 말한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '알맞은 인사', slots: [{ id: 'e1', label: '택배 아저씨가 짐을 들어 주셨어요' }, { id: 'e2', label: '이웃 할아버지 댁을 나와요' }], cards: ['"고맙습니다"', '"안녕히 계세요"'] }, prompt: '두 상황에 알맞은 인사말 카드를 이어 보세요.', target: { match: { e1: '"고맙습니다"', e2: '"안녕히 계세요"' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '이웃 어른을 아침에 만났을 때 알맞은 인사는?', options: ['"안녕!"', '"안녕하세요"', '아무 말 안 해요'], answer: 1, difficulty: 0.1, explain: '어른께는 높여서 "안녕하세요"라고 인사해요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '이웃과 나누는 인사',
      items: [
        { type: 'figure', wide: true, prompt: '상황과 인사말을 선으로 이으세요.', tool: 'mindmap', figures: [{ options: { mode: 'match', topic: '알맞은 인사', slots: [{ id: 's1', label: '도움을 받았어요' }, { id: 's2', label: '헤어져요' }], cards: ['"고맙습니다"', '"안녕히 가세요"'] }, caption: '' }], answer: '도움-고맙습니다, 헤어짐-안녕히 가세요' },
        { type: 'choice', prompt: '처음 보는 사람이 따라오라고 할 때 알맞은 것에 ○ 하세요.', options: ['따라가요', '"안 가요" 하고 어른께 가요', '기다려요'], answer: '"안 가요" 하고 어른께 가요' },
        { type: 'check', prompt: '내가 자주 만나는 이웃에 ✓ 하세요.', options: ['옆집 사람', '경비원', '가게 주인', '버스 기사'] },
        { type: 'short', prompt: '내일 인사할 사람과 인사말을 쓰세요.' },
      ],
      easy: {
        note: '만날 때, 고마울 때, 헤어질 때 인사가 달라요.',
        items: [
          { type: 'choice', prompt: '어른을 만났을 때 인사에 ○ 하세요.', options: ['"안녕하세요"', '"안녕"'], answer: '"안녕하세요"' },
          { type: 'choice', prompt: '도움을 받았을 때 인사에 ○ 하세요.', options: ['"고맙습니다"', '"잘 가"'], answer: '"고맙습니다"' },
          { type: 'draw', prompt: '이웃에게 인사하는 내 모습을 그려 보세요.' },
          { type: 'short', prompt: '인사할 사람 한 명을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 놓으면 초록 테두리가 생겨요. 인사 놀이는 선생님과 먼저 해 봐요.',
      base: '모두 이은 뒤 확인을 눌러요. 짝과 세 상황을 모두 해 봐요.',
      challenge: '어른께 맞지 않는 인사 카드와 맞지 않는 마음 카드가 섞여 있어요.',
    },
    safety: ['처음 보는 사람이 따라오라고 하면 "안 가요" 하고 아는 어른이 있는 곳으로 가요.'],
    teacherNotes: '자주 보이는 어려움: ① 어른께 반말 인사를 한다 → 높임 인사를 몸짓(허리 숙이기)과 함께 연습한다. ② 이웃은 모르는 사람이라 인사하지 않아도 된다고 여긴다 → 인사를 받은 이웃의 마음을 떠올리게 한다. ③ 친절한 인사와 낯선 사람 따라가기를 헷갈린다 → 인사는 하되 따라가지 않는다는 선을 분명히 한다.',
  }));

  // ───────────────────────── 5~8차시: 집에서 돕고 고마움 전하기(바른 생활 실천) ─────────────────────────

  lessons.push(L(5, {
    title: '집에서 내가 할 수 있는 도움 고르기',
    objective: '집안일 가운데 1학년이 혼자 안전하게 할 수 있는 도움을 골라 내고, 오늘 집에서 할 도움을 하나 정할 수 있다.',
    illustration: ART('a paper child setting spoons on a family table while a parent cooks at a stove in the background, a row of neatly arranged shoes by the door', '내가 할 수 있는 도움', [
      { motif: 'house', x: 120, y: 214, color: 'peach' }, { motif: 'flower', x: 360, y: 228 }, { motif: 'star', x: 250, y: 84, s: 0.6 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"어젯밤 우리 집에서 저녁밥이 차려지기까지 누가 무슨 일을 했을까요?" 장보기, 밥 짓기, 상 차리기, 설거지를 칠판에 적는다. "이 가운데 여러분이 할 수 있는 일은 무엇일까요?" 시연 단추로 \'수저 놓기\'에 표시가 되는 모습을 보여 준다. 가스불·칼처럼 위험한 일은 어른과 함께 한다는 것을 먼저 짚는다.',
        student: '어제 우리 집에서 식구들이 한 일을 하나 떠올려 봐요.',
        demo: { tool: 'kitchen', options: { mode: 'checklist', title: '내가 할 수 있는 일', items: [{ id: 'spoon', text: '수저를 놓아요' }, { id: 'fire', text: '가스불을 켜요' }] }, sequence: [{ checklist: ['spoon'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 혼자 할 수 있는 도움 찾기', minutes: 14, tool: 'kitchen',
            teacher: '"이 일을 하다가 다칠 수 있을까요?" 항목마다 다칠 수 있는지 먼저 묻는다. 칼질이나 뜨거운 냄비 나르기를 "할 수 있어요"라고 하는 학생에게 "어른과 함께라면 할 수 있지만 혼자는 위험해요"라고 구별해 준다.',
            task: '집안일을 읽고, 1학년이 혼자 안전하게 할 수 있는 일을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '1학년이 혼자 안전하게 할 수 있는 일에만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '혼자 할 수 있는 도움', items: [{ id: 'shoes', text: '현관 신발을 가지런히 놓아요' }, { id: 'knife', text: '칼로 과일을 깎아요' }, { id: 'spoon', text: '식탁에 수저를 놓아요' }, { id: 'fire', text: '가스불을 켜서 물을 끓여요' }] },
                target: { checklist: ['shoes', 'spoon'] }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { items: [{ id: 'shoes', text: '현관 신발을 가지런히 놓아요' }, { id: 'knife', text: '칼로 과일을 깎아요' }, { id: 'spoon', text: '식탁에 수저를 놓아요' }, { id: 'fire', text: '가스불을 켜서 물을 끓여요' }, { id: 'iron', text: '다리미로 옷을 다려요' }, { id: 'plug', text: '젖은 손으로 플러그를 꽂아요' }] } } },
                hints: ['하나씩 읽고 "이 일을 하다가 다칠 수 있을까?" 하고 물어보세요.', '불, 칼, 전기를 쓰는 일인지 살펴보세요. 그런 일은 어른과 함께 해요.', '신발 놓기와 수저 놓기는 다칠 일이 없어 혼자 할 수 있어요.'] },
              { prompt: '집안일 카드를 혼자 할 일과 어른과 함께 할 일로 나누어 보세요.', toolOptions: { mode: 'sort', groups: false, slots: ['혼자 할 수 있어요', '어른과 함께해요'], cards: ['내 장난감 정리하기', '빨래 개기', '뜨거운 국 나르기', '높은 선반 그릇 꺼내기'] },
                target: { sort: { '혼자 할 수 있어요': ['내 장난감 정리하기', '빨래 개기'], '어른과 함께해요': ['뜨거운 국 나르기', '높은 선반 그릇 꺼내기'] } }, difficulty: 0.15,
                levels: { challenge: { prompt: '집안일 카드 여섯 장을 혼자 할 일과 어른과 함께 할 일로 모두 나누어 보세요.', toolOptions: { cards: ['내 장난감 정리하기', '빨래 개기', '뜨거운 국 나르기', '높은 선반 그릇 꺼내기', '화분에 물 주기', '칼로 파 썰기'] },
                  target: { sort: { '혼자 할 수 있어요': ['내 장난감 정리하기', '빨래 개기', '화분에 물 주기'], '어른과 함께해요': ['뜨거운 국 나르기', '높은 선반 그릇 꺼내기', '칼로 파 썰기'] } } } } },
              { prompt: '식구를 도울 수 있는 일만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '식구를 돕는 일', cards: ['다 먹은 그릇을 개수대에 가져다 놓아요', '동생 옷 입는 것을 도와줘요', '거실에서 공을 차요', '텔레비전을 크게 틀어요'] },
                target: { pick: ['다 먹은 그릇을 개수대에 가져다 놓아요', '동생 옷 입는 것을 도와줘요'] }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 시키지 않아도 할 수 있어요', minutes: 12, tool: 'emotion',
            teacher: '"엄마가 \'도와줘\'라고 말하지 않으셨어요. 그래도 도울 수 있을까요?" 결과 칸을 소리 내어 읽게 한다. \'시키면 할게요\'를 고르는 학생에게 "엄마가 무거운 짐을 들고 계신 걸 보면 어떤 마음이 들어요?"를 묻는다. 마지막에 오늘 집에서 할 도움을 짝에게 약속하게 한다.',
            task: '도움이 필요한 때를 알아보고 어떻게 할지 골라요. 오늘 할 도움을 짝에게 말해요.',
            levels: CARD_LV,
            items: [
              { prompt: '엄마가 장 본 짐을 양손에 들고 들어오셨어요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '준호', situation: '엄마가 무거운 장바구니를 양손에 들고 현관문을 여세요. 아무도 도와 달라고 하지 않았어요.', choices: [
                { id: 'wait', text: '시키실 때까지 기다려요', result: '엄마가 혼자 짐을 옮기느라 힘드세요.', mood: '속상함', why: '말하지 않아도 엄마가 힘든 것이 보이지요?' },
                { id: 'help', text: '"제가 가벼운 봉지 들게요" 하고 받아요', result: '엄마가 "고마워" 하며 웃으세요.', mood: '고마움' },
                { id: 'play', text: '하던 게임을 계속해요', result: '엄마가 짐을 내려놓다 하나를 떨어뜨려요.', mood: '걱정', why: '엄마 손이 모자랄 때 내가 할 수 있는 일이 있을까요?' }] }, target: { choice: 'help' }, difficulty: 0.1 },
              { prompt: '스스로 도운 민지와 그것을 본 할머니의 마음 카드를 놓아 보세요.', toolOptions: { cards: ['뿌듯함', '고마움', '화남'], slots: [{ id: 's1', label: '아무도 안 시켰는데 신발을 정리한 민지' }, { id: 's2', label: '정리된 현관을 본 할머니' }] },
                target: { match: { s1: '뿌듯함', s2: '고마움' } }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['뿌듯함', '고마움', '화남', '부끄러움'] } } } },
              { prompt: '오늘 집에서 할 도움을 하나 정해 짝에게 "나는 오늘 ___ 할 거야"라고 말하고 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 정한 도움을 언제 할 거예요? 저녁 먹기 전, 먹은 뒤?" 때까지 정하면 잊지 않는다는 것을 말한다. 출구 1번에서 위험한 일을 고른 학생은 "그 일을 할 때 무엇에 다칠 수 있을까?"를 다시 묻는다. 다음 시간 전까지 정한 도움을 해 오기로 한다.',
        exitTicket: [
          { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '혼자 할 수 있는 도움', items: [{ id: 'towel', text: '마른 수건을 개어요' }, { id: 'pot', text: '끓는 냄비를 옮겨요' }, { id: 'plant', text: '화분에 물을 줘요' }] }, prompt: '1학년이 혼자 안전하게 할 수 있는 일에만 표시해 보세요.', target: { checklist: ['towel', 'plant'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '식구를 돕는 일은 언제 할까요?', options: ['시킬 때만 해요', '도움이 필요해 보이면 먼저 해요', '안 해도 돼요'], answer: 1, difficulty: 0.1, explain: '시키지 않아도 식구가 힘들어 보이면 먼저 도울 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '내가 할 수 있는 도움',
      items: [
        { type: 'figure', wide: true, prompt: '혼자 안전하게 할 수 있는 일에 ✓ 하세요.', tool: 'kitchen', figures: [{ options: { mode: 'checklist', title: '혼자 할 수 있는 도움', items: [{ id: 'shoes', text: '신발 정리하기' }, { id: 'knife', text: '칼로 과일 깎기' }, { id: 'spoon', text: '수저 놓기' }] }, caption: '' }], answer: '신발 정리하기, 수저 놓기' },
        { type: 'table', prompt: '집안일을 나누어 쓰세요.', columns: ['혼자 할 수 있어요', '어른과 함께해요'], rows: 2 },
        { type: 'blank', prompt: '오늘 할 도움을 쓰세요.', text: '나는 오늘 ___ 를 할 거예요.', answer: '(학생마다 다름)' },
        { type: 'draw', prompt: '식구를 돕는 내 모습을 그려 보세요.' },
      ],
      easy: {
        note: '다칠 수 있는 일인지 먼저 생각해요.',
        items: [
          { type: 'choice', prompt: '혼자 할 수 있는 일에 ○ 하세요.', options: ['수저 놓기', '가스불 켜기'], answer: '수저 놓기' },
          { type: 'choice', prompt: '엄마가 무거운 짐을 드셨어요. 알맞은 것에 ○ 하세요.', options: ['가벼운 봉지를 들어요', '기다려요'], answer: '가벼운 봉지를 들어요' },
          { type: 'draw', prompt: '오늘 할 도움을 그려 보세요.' },
          { type: 'short', prompt: '오늘 할 도움을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드는 맞는 칸에 초록 테두리가 생겨요. 오늘 할 도움은 그림으로 정해도 돼요.',
      base: '모두 고른 뒤 확인을 눌러요. 오늘 할 도움을 때와 함께 말해요.',
      challenge: '위험한 일 항목과 카드가 더 섞여 있어요. 왜 위험한지도 말해요.',
    },
    safety: ['불, 칼, 전기를 쓰는 집안일은 혼자 하지 않고 어른과 함께 해요.'],
    teacherNotes: '자주 보이는 어려움: ① 도움은 어른이 시킬 때만 하는 것이라고 여긴다 → 식구가 힘들어 보이는 장면을 보여 주고 "그때 무엇을 할 수 있을까?"를 묻는다. ② 위험한 일도 할 수 있다고 자랑한다 → 칭찬 대신 "혼자 할 때와 어른과 함께 할 때"를 나눈다. ③ 너무 큰 도움(설거지 다 하기)을 정한다 → 오늘 꼭 할 수 있는 작은 일로 줄인다. 가정 통신으로 정한 도움을 알려 가정에서 칭찬해 주도록 부탁한다.',
  }));

  lessons.push(L(6, {
    title: '수저 놓기와 빨래 개기 차례대로 해 보기',
    objective: '수저 놓기와 빨래 개기를 차례대로 말하고 교실에서 실제로 해 보며, 물건을 제자리에 둘 수 있다.',
    illustration: ART('a paper child folding a small towel on a low table next to a neat stack of folded clothes and a tray of spoons and chopsticks', '차례대로 해 봐요', [
      { motif: 'house', x: 110, y: 214, color: 'mint' }, { motif: 'leaf', x: 380, y: 220 }, { motif: 'flower', x: 300, y: 228, color: 'lavender' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"지난 시간에 정한 도움을 해 본 사람?" 해 본 일과 그때 들은 말을 두세 명에게 듣는다. 못 한 학생도 탓하지 않고 "오늘 연습하고 다시 해 봐요"라고 말한다. 시연 단추로 빨래 개기 카드가 차례대로 놓이는 모습을 보여 준다.',
        student: '지난 시간에 정한 도움을 해 보았는지 짝에게 말해 봐요.',
        demo: { tool: 'kitchen', options: { mode: 'order', cards: [{ id: '펴기', text: '수건을 펴요' }, { id: '접기', text: '반으로 접어요' }], shuffle: false }, sequence: [{ order: ['펴기', '접기'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 차례대로 놓고 직접 해 보기', minutes: 16, tool: 'kitchen',
            teacher: '"수건을 바로 서랍에 넣으면 어떻게 될까요?" 차례를 놓은 뒤 모둠마다 준비한 손수건 네 장과 플라스틱 수저로 실제로 해 본다. 끝을 맞추지 않고 접는 학생에게 "모서리끼리 만나게"라고 손으로 보여 준다. 상 차리기 전에 손을 씻는다는 것도 짚는다.',
            task: '집안일 차례대로 카드를 놓고, 모둠 물건으로 실제로 해 봐요.',
            levels: CARD_LV,
            items: [
              { prompt: '빨래를 개는 차례대로 카드를 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: '넣기', text: '서랍에 넣어요' }, { id: '펴기', text: '수건을 평평하게 펴요' }, { id: '반', text: '모서리를 맞춰 반으로 접어요' }, { id: '또', text: '한 번 더 반으로 접어요' }] },
                target: { order: ['펴기', '반', '또', '넣기'] }, difficulty: 0.1 },
              { prompt: '밥상에 수저를 놓는 차례대로 카드를 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: '놓기', text: '식구 자리마다 수저를 놓아요' }, { id: '손', text: '비누로 손을 씻어요' }, { id: '세기', text: '식구 수만큼 수저를 세어요' }, { id: '말', text: '"진지 드세요" 하고 불러요' }] },
                target: { order: ['손', '세기', '놓기', '말'] }, difficulty: 0.15,
                levels: { easy: { state: { at: { '손': 0 } } } },
                hints: ['수저를 만지기 전에 먼저 할 일이 있어요. 마지막에는 식구를 불러요.', '몇 개가 필요한지 알아야 자리마다 놓을 수 있어요.', '손 씻기 → 수 세기 → 자리마다 놓기 → 식구 부르기 차례예요.'] },
              { prompt: '모둠 손수건 네 장을 개고, 친구 네 명 자리에 수저를 놓아 본 뒤 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 물건의 제자리 찾기', minutes: 12, tool: 'kitchen',
            teacher: '"우산은 어디에 두면 다음에 바로 찾을 수 있을까요?" 물건을 제자리에 두면 식구 모두가 편하다는 것을 짚는다. 집마다 두는 곳이 조금씩 다를 수 있으니, 카드에 적힌 우리 집 이야기에 맞추어 고르게 한다.',
            task: '물건을 제자리에 두는 일을 이어 보고, 정리를 잘한 모습을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '물건과 제자리를 이어 보세요.', toolOptions: { mode: 'match', slots: [{ id: 's1', label: '벗은 신발' }, { id: 's2', label: '젖은 우산' }, { id: 's3', label: '다 읽은 그림책' }], cards: ['신발장', '우산꽂이', '책꽂이'] },
                target: { match: { s1: '신발장', s2: '우산꽂이', s3: '책꽂이' } }, difficulty: 0.05,
                levels: { challenge: { toolOptions: { cards: ['신발장', '우산꽂이', '책꽂이', '냉장고'] } } } },
              { prompt: '정리를 잘해서 식구가 편해진 모습만 골라 보세요.', toolOptions: { mode: 'pick', basket: '정리를 잘했어요', cards: ['양말을 빨래 바구니에 넣었어요', '장난감을 상자에 넣었어요', '가방을 현관 바닥에 던져 두었어요', '과자 봉지를 소파에 두었어요'] },
                target: { pick: ['양말을 빨래 바구니에 넣었어요', '장난감을 상자에 넣었어요'] }, difficulty: 0.1 },
              { prompt: '식사를 마친 뒤 할 일을 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: '닦기', text: '내 자리를 행주로 닦아요' }, { id: '인사', text: '"잘 먹었습니다" 인사해요' }, { id: '그릇', text: '내 그릇을 개수대에 놓아요' }] },
                target: { order: ['인사', '그릇', '닦기'] }, difficulty: 0.2,
                hints: ['다 먹으면 먼저 말로 마음을 전해요.', '자리를 닦으려면 그 위에 있는 것을 먼저 치워야 해요.', '인사 → 그릇 옮기기 → 자리 닦기 차례예요.'] },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"오늘 연습한 것 가운데 집에서 해 볼 것을 하나 골라요." 모둠 손수건 개기에서 모서리를 잘 맞춘 모둠을 칭찬한다. 출구 1번에서 차례를 바꾼 학생은 실제로 손수건을 들고 다시 해 보게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'kitchen', options: { mode: 'order', cards: [{ id: '꺼내기', text: '빨래 바구니에서 양말을 꺼내요' }, { id: '짝', text: '같은 양말끼리 짝을 맞춰요' }, { id: '넣기', text: '양말 서랍에 넣어요' }] }, prompt: '양말을 정리하는 차례대로 놓아 보세요.', target: { order: ['꺼내기', '짝', '넣기'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '수저를 놓기 전에 먼저 할 일은?', options: ['손을 씻어요', '텔레비전을 켜요', '수저를 닦지 않고 바로 놓아요'], answer: 0, difficulty: 0.1, explain: '입에 닿는 수저를 만지기 전에는 손을 씻어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '차례대로 도와요',
      items: [
        { type: 'figure', wide: true, prompt: '빨래를 개는 차례대로 카드 아래에 1, 2, 3 번호를 쓰세요.', tool: 'kitchen', figures: [{ options: { mode: 'order', cards: [{ id: '넣기', text: '서랍에 넣어요' }, { id: '펴기', text: '수건을 펴요' }, { id: '접기', text: '반으로 접어요' }] }, caption: '' }], answer: '펴기 1, 접기 2, 넣기 3' },
        { type: 'table', prompt: '물건의 제자리를 쓰세요.', columns: ['물건', '제자리'], cells: [['신발', ''], ['우산', ''], ['그림책', '']] },
        { type: 'choice', prompt: '식사를 마친 뒤 하는 인사에 ○ 하세요.', options: ['"잘 먹었습니다"', '"안녕히 주무세요"'], answer: '"잘 먹었습니다"' },
        { type: 'short', prompt: '집에서 해 볼 정리를 하나 쓰세요.' },
      ],
      easy: {
        note: '오늘 교실에서 손수건을 갰던 것을 떠올려요.',
        items: [
          { type: 'choice', prompt: '수건을 갤 때 처음에 할 일에 ○ 하세요.', options: ['평평하게 펴요', '서랍에 넣어요'], answer: '평평하게 펴요' },
          { type: 'choice', prompt: '신발의 제자리에 ○ 하세요.', options: ['신발장', '책꽂이'], answer: '신발장' },
          { type: 'draw', prompt: '수저를 놓는 내 모습을 그려 보세요.' },
          { type: 'short', prompt: '집에서 해 볼 정리를 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 초록 테두리가 생기고, 수저 놓기 차례는 첫 카드가 놓여 있어요.',
      base: '차례를 모두 놓은 뒤 확인을 누르고, 모둠 물건으로 직접 해 봐요.',
      challenge: '제자리에 맞지 않는 카드가 섞여 있어요. 손수건은 두 번 접어 모서리를 맞춰요.',
    },
    teacherNotes: '준비물: 모둠마다 손수건 4장, 플라스틱 숟가락·젓가락 4벌, 바구니. 자주 보이는 어려움: ① 접기를 서두르다 모서리가 어긋난다 → 모서리끼리 손가락으로 맞대고 눌러 접는다. ② 젓가락 두 짝을 따로 놓는다 → 짝을 맞춘 뒤 숟가락 옆에 둔다. ③ 우리 집은 다르게 한다며 반박한다 → 집마다 방법이 조금 다를 수 있고, 차례를 지키면 더 쉬워진다는 점만 짚는다.',
  }));

  lessons.push(L(7, {
    title: '고마운 마음 담아 짧은 편지 쓰기',
    objective: '식구에게 고마웠던 일을 떠올려 받는 사람·고마운 일·보내는 사람이 들어간 짧은 편지를 써서 전할 수 있다.',
    illustration: ART('a paper child writing a small card with a heart on it at a desk, an envelope and colored pencils beside it', '고마운 마음을 써요', [
      { motif: 'flower', x: 110, y: 226, color: 'rose' }, { motif: 'house', x: 380, y: 214 }, { motif: 'star', x: 240, y: 80, s: 0.6 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"선생님이 어릴 때 할머니께 받은 편지예요." 교사가 직접 쓴 짧은 편지(받는 사람·고마운 일·보내는 사람)를 읽어 준다. "편지에는 누구에게, 무엇이 고마운지, 누가 보내는지가 들어 있어요." 시연 단추로 편지 빈칸에 \'할머니\' 카드가 들어가는 모습을 보여 준다.',
        student: '요즘 식구에게 고마웠던 일을 하나 떠올려 짝에게 말해 봐요.',
        demo: { tool: 'story', options: { mode: 'fill', cards: ['할머니', '동생'], slots: [{ id: 'b1', who: '민지', motif: 'flower', label: '___께, 안녕하세요?' }], shuffle: false }, sequence: [{ fill: { b1: '할머니' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 편지 빈칸 채우기', minutes: 11, tool: 'story',
            teacher: '"민지가 할머니께 쓴 편지예요. 누구에게 쓰는지는 어디에 쓸까요?" 편지의 맨 위, 가운데, 맨 아래를 손가락으로 짚게 한다. \'고맙습니다\' 대신 \'미안해요\'를 넣는 학생에게 "밥을 해 주셔서 미안할까요?" 하고 함께 소리 내어 읽어 본다.',
            task: '편지의 빈칸에 알맞은 낱말 카드를 넣어요.',
            levels: CARD_LV,
            items: [
              { prompt: '민지가 할머니께 쓰는 편지예요. 빈칸에 알맞은 카드를 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['할머니', '고맙습니다', '민지', '미안해요'], slots: [{ id: 'b1', who: '민지', motif: 'flower', label: '___께, 안녕하세요?' }, { id: 'b2', who: '민지', motif: 'flower', label: '맛있는 밥을 해 주셔서 ___.' }, { id: 'b3', who: '민지', motif: 'flower', label: '손녀 ___ 올림' }] },
                target: { fill: { b1: '할머니', b2: '고맙습니다', b3: '민지' } }, difficulty: 0.15 },
              { prompt: '준호가 형에게 쓰는 쪽지예요. 빈칸에 알맞은 카드를 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['형', '자전거', '고마워', '준호'], slots: [{ id: 'b1', who: '준호', motif: 'star', label: '___에게' }, { id: 'b2', who: '준호', motif: 'star', label: '___ 타는 법을 알려 줘서' }, { id: 'b3', who: '준호', motif: 'star', label: '정말 ___. 동생 준호가' }] },
                target: { fill: { b1: '형', b2: '자전거', b3: '고마워' } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['형', '자전거', '고마워', '준호', '미워'] } } } },
              { prompt: '고마운 마음이 잘 드러난 편지 글만 골라 보세요.', toolOptions: { mode: 'pick', basket: '고마운 마음', cards: ['"아침마다 깨워 주셔서 고마워요"', '"넘어졌을 때 약을 발라 줘서 고마워"', '"내일 장난감 사 줘"', '"숙제 대신 해 줘"'] },
                target: { pick: ['"아침마다 깨워 주셔서 고마워요"', '"넘어졌을 때 약을 발라 줘서 고마워"'] }, difficulty: 0.1,
                predict: { q: '"내일 장난감 사 줘"는 고마운 마음일까요?', options: ['고마운 마음', '부탁하는 말'], answer: 1 },
                conclude: '고마운 편지에는 무엇이 고마웠는지를 써요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 내 편지 쓰고 전하는 연습', minutes: 16, tool: 'emotion',
            teacher: '"편지지를 나누어 줄게요. 세 줄만 쓰면 돼요." 받는 사람·고마운 일·보내는 사람 세 칸이 있는 편지지에 직접 쓰게 한다. 글씨 쓰기가 어려운 학생은 고마운 일을 그림으로 그리고 낱말 하나만 써도 된다. 다 쓴 뒤 짝에게 편지를 건네는 말("할머니, 이거 제가 썼어요")을 연습하게 한다.',
            task: '편지지에 고마운 사람에게 편지를 쓰고, 건네는 말을 짝과 연습해요.',
            levels: CARD_LV,
            items: [
              { prompt: '편지지에 받는 사람, 고마운 일, 내 이름을 써서 편지를 완성하고 "다 했어요"를 누르세요.', free: true, talk: true },
              { prompt: '편지를 받은 사람과 편지를 준 사람의 마음 카드를 놓아 보세요.', toolOptions: { cards: ['기쁨', '뿌듯함', '짜증'], slots: [{ id: 's1', label: '손녀의 편지를 읽은 할머니' }, { id: 's2', label: '할머니가 웃는 모습을 본 민지' }] },
                target: { match: { s1: '기쁨', s2: '뿌듯함' } }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['기쁨', '뿌듯함', '짜증', '걱정'] } } } },
              { prompt: '편지를 언제 건네면 좋을까요?', toolOptions: { mode: 'branch', who: '준호', situation: '준호가 아빠께 드릴 편지를 다 썼어요. 아빠는 지금 전화 통화를 하고 계세요.', choices: [
                { id: 'now', text: '통화하는 아빠 앞에서 편지를 흔들어요', result: '아빠가 통화를 제대로 못 하세요.', mood: '짜증', why: '아빠가 통화 중이에요. 언제 드리면 좋을까요?' },
                { id: 'later', text: '통화가 끝나면 "아빠, 편지 썼어요" 하고 드려요', result: '아빠가 편지를 천천히 읽고 꼭 안아 주세요.', mood: '기쁨' },
                { id: 'never', text: '부끄러워서 서랍에 넣어 둬요', result: '아빠는 준호 마음을 알 수 없어요.', mood: '아쉬움', why: '편지는 전해야 마음이 닿아요.' }] }, target: { choice: 'later' }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"오늘 쓴 편지는 누구에게 언제 드릴 거예요?" 편지를 봉투에 넣어 가방에 넣게 한다. 출구 1번에서 빈칸을 바꾸어 넣은 학생은 편지를 처음부터 소리 내어 읽게 한다. 편지를 드린 뒤 식구의 표정을 잘 보고 오라고 다음 시간을 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { mode: 'fill', cards: ['아빠', '그네', '고맙습니다', '미안해요'], slots: [{ id: 'e1', who: '서아', motif: 'sun', label: '___께' }, { id: 'e2', who: '서아', motif: 'sun', label: '공원에서 ___를 밀어 주셔서' }, { id: 'e3', who: '서아', motif: 'sun', label: '___. 서아 올림' }] }, prompt: '서아가 아빠께 쓰는 편지의 빈칸을 채워 보세요.', target: { fill: { e1: '아빠', e2: '그네', e3: '고맙습니다' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '고마운 편지에 꼭 들어갈 것은?', options: ['무엇이 고마웠는지', '갖고 싶은 선물', '친구 이름'], answer: 0, difficulty: 0.1, explain: '무엇이 고마웠는지 써야 받는 사람이 내 마음을 알아요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '고마운 마음 편지',
      items: [
        { type: 'blank', prompt: '편지를 완성하세요.', text: '___께 / ___ 해 주셔서 고맙습니다. / ___ 올림', answer: '(받는 사람 / 고마운 일 / 내 이름)' },
        { type: 'choice', prompt: '고마운 마음이 드러난 말에 ○ 하세요.', options: ['"깨워 주셔서 고마워요"', '"장난감 사 줘"', '"숙제 해 줘"'], answer: '"깨워 주셔서 고마워요"' },
        { type: 'draw', prompt: '고마웠던 일을 그림으로 그려 보세요.' },
        { type: 'short', prompt: '편지를 언제, 어떻게 드릴지 쓰세요.' },
      ],
      easy: {
        note: '그림으로 그리고 낱말 하나만 써도 돼요.',
        items: [
          { type: 'blank', prompt: '받는 사람을 쓰세요.', text: '___께', answer: '(받는 사람)' },
          { type: 'draw', prompt: '고마웠던 일을 그려 보세요.' },
          { type: 'choice', prompt: '편지 끝에 쓸 말에 ○ 하세요.', options: ['"고맙습니다"', '"빨리 줘"'], answer: '"고맙습니다"' },
          { type: 'short', prompt: '내 이름을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '빈칸에 맞는 카드에 초록 테두리가 생겨요. 편지는 그림과 낱말 하나로 써도 돼요.',
      base: '빈칸을 모두 채운 뒤 확인을 누르고, 편지지에 세 줄로 써요.',
      challenge: '맞지 않는 낱말 카드가 섞여 있어요. 편지에 고마운 일을 두 가지 써요.',
    },
    teacherNotes: '준비물: 세 칸 편지지(받는 사람·고마운 일·보내는 사람)와 봉투. 자주 보이는 어려움: ① 고마운 일 대신 바라는 것(선물)을 쓴다 → "무엇이 고마웠나요?"를 다시 묻는다. ② 받는 사람에게 \'께\'를 붙이는 것을 헷갈린다 → 어른께는 \'께\', 형·친구에게는 \'에게\'를 함께 읽는다. ③ 글씨 쓰기를 힘들어한다 → 그림 편지도 마음이 담긴 편지라고 말해 준다. 집안 사정상 편지를 전할 식구가 없는 학생은 돌봄 선생님·이웃 등 고마운 누구에게든 써도 된다.',
  }));

  lessons.push(L(8, {
    title: '도움이 필요한 때 알아보고 먼저 나서기',
    objective: '식구가 도움이 필요한 때를 알아차리고, 스스로 한 도움과 시켜서 한 도움을 견주어 먼저 나서는 차례를 말할 수 있다.',
    illustration: ART('a paper child noticing a grandmother looking for her glasses and pointing to them on the sofa, a lamp and a cat nearby', '먼저 살펴보아요', [
      { motif: 'house', x: 120, y: 214, color: 'buttercup' }, { motif: 'tree', x: 380, y: 214 }, { motif: 'moon', x: 70, y: 70, s: 0.5 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"편지를 드렸을 때 식구의 얼굴이 어땠나요?" 두세 명에게 듣는다. 이어 교사가 안경을 찾는 흉내를 낸다. "선생님이 아무 말도 안 했는데, 무엇이 필요해 보여요?" 시연 단추로 살펴보기 → 묻기 → 돕기 카드가 놓이는 모습을 보여 준다.',
        student: '선생님이 무엇을 찾는 것 같은지 살펴보고 짝에게 말해 봐요.',
        demo: { tool: 'story', options: { cards: [{ id: '보기', text: '식구를 살펴봐요', motif: 'star' }, { id: '묻기', text: '"도와드릴까요?"', motif: 'flower' }, { id: '돕기', text: '함께 해요', motif: 'sun' }], slots: ['처음', '가운데', '끝'], shuffle: false }, sequence: [{ order: ['보기', '묻기', '돕기'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 스스로 한 도움, 시켜서 한 도움', minutes: 12, tool: 'mindmap',
            teacher: '"민지는 누가 말하기 전에 했나요, 들은 뒤에 했나요?" 카드마다 \'누가 말했는지\'를 찾게 한다. 시켜서 한 도움도 좋은 일이라는 것을 먼저 말해 주고, 스스로 하면 식구가 말하지 않아도 되어 더 편하다는 것을 짚는다.',
            task: '도움 이야기를 읽고, 스스로 한 도움과 시켜서 한 도움으로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '도움 이야기를 스스로 한 것과 시켜서 한 것으로 나누어 보세요.', toolOptions: { topic: '누가 먼저?', slots: ['스스로 했어요', '시켜서 했어요'], cards: ['신발이 흩어진 걸 보고 정리했어요', '엄마가 "수저 놓아라" 해서 놓았어요', '아빠가 "불 꺼" 해서 껐어요', '동생이 우는 걸 보고 달래 주었어요'] },
                target: { sort: { '스스로 했어요': ['신발이 흩어진 걸 보고 정리했어요', '동생이 우는 걸 보고 달래 주었어요'], '시켜서 했어요': ['엄마가 "수저 놓아라" 해서 놓았어요', '아빠가 "불 꺼" 해서 껐어요'] } }, difficulty: 0.15,
                levels: { challenge: { prompt: '도움 이야기 여섯 장을 스스로 한 것과 시켜서 한 것으로 모두 나누어 보세요.', toolOptions: { cards: ['신발이 흩어진 걸 보고 정리했어요', '엄마가 "수저 놓아라" 해서 놓았어요', '아빠가 "불 꺼" 해서 껐어요', '동생이 우는 걸 보고 달래 주었어요', '할머니가 두리번거리셔서 안경을 찾아 드렸어요', '누나가 "책 줘" 해서 건넸어요'] },
                  target: { sort: { '스스로 했어요': ['신발이 흩어진 걸 보고 정리했어요', '동생이 우는 걸 보고 달래 주었어요', '할머니가 두리번거리셔서 안경을 찾아 드렸어요'], '시켜서 했어요': ['엄마가 "수저 놓아라" 해서 놓았어요', '아빠가 "불 꺼" 해서 껐어요', '누나가 "책 줘" 해서 건넸어요'] } } } },
                hints: ['카드마다 누군가 "해라"라고 말했는지 찾아보세요.', '"○○ 해서 했어요"처럼 누가 말한 다음에 한 일인지, 보고 먼저 한 일인지 견주어 보세요.', '따옴표 속 말을 듣고 한 일이 시켜서 한 도움이에요.'] },
              { prompt: '도움이 필요해 보이는 장면만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '도움이 필요해요', cards: ['할머니가 안경을 찾으며 두리번거리세요', '아빠가 빨래를 한 아름 안고 계세요', '형이 소파에서 책을 읽어요', '강아지가 잠을 자요'] },
                target: { pick: ['할머니가 안경을 찾으며 두리번거리세요', '아빠가 빨래를 한 아름 안고 계세요'] }, difficulty: 0.15 },
              { prompt: '먼저 나서서 돕는 차례대로 장면 카드를 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: '돕기', text: '안경을 찾아 드려요', motif: 'sun' }, { id: '보기', text: '두리번거리는 할머니를 봐요', motif: 'star' }, { id: '묻기', text: '"무엇을 찾으세요?" 여쭈어요', motif: 'flower' }] },
                target: { order: ['보기', '묻기', '돕기'] }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 이럴 때 나라면', minutes: 14, tool: 'emotion',
            teacher: '"하준이가 \'시키면 할게\'라고 생각했어요. 아빠는 어떤 마음이 될까요?" 결과 칸을 읽고 마음을 말하게 한다. 짝과 함께 장면 하나를 골라 몸으로 해 보게 한다(한 사람은 힘든 식구, 한 사람은 먼저 나서는 아이).',
            task: '식구가 힘들어하는 장면에서 어떻게 할지 고르고, 짝과 몸으로 해 봐요.',
            levels: CARD_LV,
            items: [
              { prompt: '아빠가 빨래를 한 아름 안고 문을 못 여세요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '하준', situation: '아빠가 빨래를 한 아름 안고 베란다 문 앞에 서 계세요. 손이 모자라 문을 못 여세요.', choices: [
                { id: 'wait', text: '"시키면 할게" 하고 기다려요', result: '아빠가 빨래를 내려놓고 문을 여시느라 힘드세요.', mood: '속상함', why: '아빠가 말하지 않아도 무엇이 필요한지 보이지요?' },
                { id: 'open', text: '얼른 가서 문을 열어 드려요', result: '아빠가 "고마워, 하준아" 하세요.', mood: '고마움' },
                { id: 'laugh', text: '아빠 모습을 보고 웃어요', result: '아빠가 서운해하세요.', mood: '서운함', why: '힘들어하는 사람을 보고 웃으면 어떤 마음일까요?' }] }, target: { choice: 'open' }, difficulty: 0.1 },
              { prompt: '아무도 시키지 않았는데 동생을 도운 서아의 뿌듯한 마음 크기를 골라 보세요.', toolOptions: { mode: 'scale', who: '서아', situation: '동생이 혼자 단추를 못 잠가 울먹이자, 서아가 먼저 다가가 하나씩 잠그는 법을 알려 주었어요.', feeling: '뿌듯함', after: '먼저 나서서 도우면 나도 뿌듯해요.' }, target: { level: [3, 5] }, difficulty: 0.1,
                levels: { easy: { toolOptions: { steps: 3 }, prompt: '먼저 동생을 도운 서아의 뿌듯한 마음 크기를 세 칸에서 골라 보세요.', target: { level: [2, 3] } } } },
              { prompt: '짝과 식구·나 역할을 나누어 "도와드릴까요?" 하고 먼저 나서는 장면을 한 번씩 해 보고 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 집에 가서 식구를 살펴볼 때 무엇을 볼 거예요?" 손이 모자란 때, 찾는 물건이 있을 때, 아플 때처럼 살펴볼 것을 칠판에 남긴다. 출구 1번을 틀린 학생과 \'누가 말했는지\' 찾기를 한 번 더 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '누가 먼저?', slots: ['스스로 했어요', '시켜서 했어요'], cards: ['비가 오자 보고 창문을 닫았어요', '엄마가 "우유 넣어" 해서 넣었어요', '할아버지 지팡이를 보고 먼저 갖다 드렸어요'] }, prompt: '도움 이야기를 스스로 한 것과 시켜서 한 것으로 나누어 보세요.', target: { sort: { '스스로 했어요': ['비가 오자 보고 창문을 닫았어요', '할아버지 지팡이를 보고 먼저 갖다 드렸어요'], '시켜서 했어요': ['엄마가 "우유 넣어" 해서 넣었어요'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '먼저 나서서 도울 때 가장 처음 하는 일은?', options: ['식구를 살펴봐요', '선물을 사요', '기다려요'], answer: 0, difficulty: 0.1, explain: '먼저 살펴보아야 무엇이 필요한지 알 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '먼저 나서서 도와요',
      items: [
        { type: 'figure', wide: true, prompt: '먼저 나서서 돕는 차례대로 카드 아래에 1, 2, 3 번호를 쓰세요.', tool: 'story', figures: [{ options: { cards: [{ id: '돕기', text: '함께 해요', motif: 'sun' }, { id: '보기', text: '식구를 살펴봐요', motif: 'star' }, { id: '묻기', text: '"도와드릴까요?"', motif: 'flower' }] }, caption: '' }], answer: '살펴봐요 1, 도와드릴까요 2, 함께 해요 3' },
        { type: 'check', prompt: '도움이 필요해 보이는 때에 ✓ 하세요.', options: ['손에 짐이 가득할 때', '찾는 물건이 있을 때', '편히 쉬고 있을 때', '아파서 누워 있을 때'] },
        { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '시키지 않아도 ___ 나서서 도울 수 있어요.', answer: '먼저' },
        { type: 'short', prompt: '이번 주에 먼저 나서서 해 볼 도움을 쓰세요.' },
      ],
      easy: {
        note: '식구가 무엇을 하고 있는지 먼저 봐요.',
        items: [
          { type: 'choice', prompt: '도움이 필요해 보이는 사람에 ○ 하세요.', options: ['짐을 든 엄마', '자는 강아지'], answer: '짐을 든 엄마' },
          { type: 'choice', prompt: '먼저 하는 말에 ○ 하세요.', options: ['"도와드릴까요?"', '"시키면 할게요"'], answer: '"도와드릴까요?"' },
          { type: 'draw', prompt: '먼저 나서서 돕는 내 모습을 그려 보세요.' },
          { type: 'short', prompt: '해 볼 도움을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 마음 크기는 세 칸이에요.',
      base: '모두 나눈 뒤 확인을 누르고, 짝과 장면을 몸으로 해 봐요.',
      challenge: '도움 이야기 카드가 여섯 장으로 늘어요. 장면 놀이에서 돕는 말을 두 가지 써 봐요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 도움은 어른이 시킬 때만 하는 것이라고 여긴다 → 식구가 말하지 않아도 보이는 신호(손이 모자람, 두리번거림)를 찾게 한다. ② 시켜서 한 도움은 나쁜 것이라고 오해한다 → 시켜서 한 것도 좋은 도움이고, 스스로 하면 더 편해진다고 정리한다. ③ 돕겠다며 묻지 않고 물건을 옮겨 놓는다 → 먼저 "무엇을 찾으세요?" 하고 묻는 차례를 지키게 한다.',
  }));

  // ───────────────────────── 9~12차시: 도운 뒤 돌아보고 습관 만들기(성찰과 습관화) ─────────────────────────

  lessons.push(L(9, {
    title: '도운 뒤 식구의 표정 떠올려 말하기',
    objective: '집에서 한 도움을 말하고, 도운 뒤 식구의 표정과 마음을 떠올려 마음 카드로 나타낼 수 있다.',
    illustration: ART('a paper grandmother smiling widely while a child hands her a folded towel, small paper stars floating above them', '그때 식구의 얼굴은?', [
      { motif: 'house', x: 110, y: 214, color: 'rose' }, { motif: 'star', x: 330, y: 90, s: 0.6 }, { motif: 'flower', x: 380, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 7,
        teacher: '"이번 주에 집에서 도운 일이 있나요? 그때 식구는 어떤 얼굴이었어요?" 교사가 웃는 얼굴, 놀란 얼굴을 직접 지어 보이고 따라 하게 한다. 시연 단추로 \'수저를 놓았어요\' 다음에 \'엄마가 웃으셨어요\' 카드가 오는 모습을 보여 준다. 아직 돕지 못한 학생에게는 "앞으로 도우면 어떤 얼굴을 보게 될까?"로 바꿔 묻는다.',
        student: '도운 뒤 식구가 지은 얼굴을 짝 앞에서 따라 지어 봐요.',
        demo: { tool: 'story', options: { cards: [{ id: '돕기', text: '수저를 놓았어요', motif: 'star' }, { id: '얼굴', text: '엄마가 웃으셨어요', motif: 'sun' }], slots: ['먼저', '그다음'], shuffle: false }, sequence: [{ order: ['돕기', '얼굴'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 25,
        activities: [
          {
            id: 'a1', title: '활동 1. 도움 다음에 생긴 일', minutes: 12, tool: 'story',
            teacher: '"하준이가 도운 다음에 무슨 일이 있었나요?" 장면을 차례로 놓고 식구의 얼굴이 언제 바뀌었는지 짚는다. \'도움\'과 \'칭찬받기\'만 놓고 식구의 마음을 건너뛰는 학생에게 "할아버지는 어떤 마음이셨을까?"를 묻는다.',
            task: '도움 이야기를 차례대로 놓고, 식구의 얼굴이 바뀐 때를 찾아요.',
            levels: CARD_LV,
            items: [
              { prompt: '하준이 이야기를 차례대로 놓아 보세요.', toolOptions: { cards: [{ id: '웃음', text: '할아버지가 활짝 웃으세요', motif: 'sun' }, { id: '보기', text: '할아버지 허리가 아파 보여요', motif: 'cloud' }, { id: '돕기', text: '하준이가 신문을 가져다 드려요', motif: 'star' }] },
                target: { order: ['보기', '돕기', '웃음'] }, difficulty: 0.1 },
              { prompt: '서아 이야기를 차례대로 놓아 보세요.', toolOptions: { cards: [{ id: '마음', text: '서아도 마음이 따뜻해져요', motif: 'flower' }, { id: '돕기', text: '서아가 동생 신발 끈을 묶어 줘요', motif: 'star' }, { id: '울음', text: '동생이 신발 끈 때문에 울어요', motif: 'cloud' }, { id: '웃음', text: '동생이 "고마워" 하고 웃어요', motif: 'sun' }] },
                target: { order: ['울음', '돕기', '웃음', '마음'] }, difficulty: 0.2,
                levels: { easy: { state: { at: { '울음': 0 } } } } },
              { prompt: '도운 뒤에 식구의 얼굴을 살핀 말만 골라 보세요.', toolOptions: { mode: 'pick', basket: '얼굴을 살핀 말', cards: ['"엄마가 눈을 크게 뜨고 웃으셨어요"', '"아빠 목소리가 밝아지셨어요"', '"나는 장난감을 받았어요"', '"내가 제일 잘했어요"'] },
                target: { pick: ['"엄마가 눈을 크게 뜨고 웃으셨어요"', '"아빠 목소리가 밝아지셨어요"'] }, difficulty: 0.15,
                predict: { q: '"나는 장난감을 받았어요"는 식구의 얼굴을 살핀 말일까요?', options: ['살핀 말', '아니에요'], answer: 1 },
                conclude: '식구의 눈, 입, 목소리를 살피면 식구의 마음을 알 수 있어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 내가 본 식구의 마음', minutes: 13, tool: 'emotion',
            teacher: '"내가 도운 일과 식구의 얼굴을 짝에게 말해 볼까요?" 짝 이야기 뒤 판에서 식구의 마음을 고르게 한다. 도왔는데 식구가 바빠서 알아채지 못했다는 학생에게 "그래도 도움은 식구를 편하게 했어요"라고 말해 준다.',
            task: '내가 한 도움을 짝에게 말하고, 도움을 받은 식구의 마음을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '내가 이번 주에 한 도움과 그때 식구의 얼굴을 짝에게 말하고 "다 했어요"를 누르세요.', free: true, talk: true },
              { prompt: '도움을 받은 식구의 마음 카드를 놓아 보세요.', toolOptions: { cards: ['고마움', '편안함', '화남'], slots: [{ id: 's1', label: '설거지한 그릇을 닦아 준 준호를 본 아빠' }, { id: 's2', label: '조용히 놀아 줘서 푹 쉰 아픈 엄마' }] },
                target: { match: { s1: '고마움', s2: '편안함' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['고마움', '편안함', '화남', '외로움'] } } } },
              { prompt: '민지가 화분에 물을 주자 할머니가 "우리 민지 다 컸네" 하셨어요. 할머니의 기쁜 마음 크기를 골라 보세요.', toolOptions: { mode: 'scale', who: '민지', situation: '민지가 아무도 시키지 않았는데 시든 화분에 물을 주었어요. 할머니가 웃으며 "우리 민지 다 컸네" 하셨어요.', feeling: '기쁨', after: '내 도움이 식구를 기쁘게 할 수 있어요.' }, target: { level: [3, 5] }, difficulty: 0.1,
                levels: { easy: { toolOptions: { steps: 3 }, prompt: '할머니가 "우리 민지 다 컸네" 하셨어요. 기쁜 마음 크기를 세 칸에서 골라 보세요.', target: { level: [2, 3] } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"식구의 웃는 얼굴을 보았을 때 내 마음은 어땠나요?" 두세 명에게 듣는다. 출구 1번에서 차례를 바꾼 학생에게 "식구가 웃은 것은 도움 전이었을까, 뒤였을까?"를 묻는다. 다음 시간에는 한 번 하고 끝내지 않는 방법을 알아본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { cards: [{ id: '돕기', text: '누나 가방을 들어 줘요', motif: 'star' }, { id: '힘듦', text: '누나가 짐이 많아 힘들어해요', motif: 'cloud' }, { id: '웃음', text: '누나가 "고마워" 해요', motif: 'sun' }] }, prompt: '이야기를 차례대로 놓아 보세요.', target: { order: ['힘듦', '돕기', '웃음'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '식구의 마음을 알려면 무엇을 살펴볼까요?', options: ['식구의 얼굴과 목소리', '내가 받은 선물', '텔레비전'], answer: 0, difficulty: 0.1, explain: '얼굴과 목소리를 살피면 식구의 마음을 알 수 있어요.' },
          { type: 'tool', tool: 'emotion', options: { mode: 'scale', steps: 3, situation: '내가 도운 뒤 식구의 얼굴을 떠올려 봐요.', feeling: '뿌듯함', ask: '그때 내 마음은 얼마나 뿌듯했나요?' }, prompt: '식구를 도운 뒤 내 마음을 솔직하게 골라 보세요. 정답은 없어요.', target: { level: 'any' }, difficulty: 0.05 },
        ],
      },
    ],
    worksheet: {
      title: '도운 뒤 식구의 얼굴',
      items: [
        { type: 'figure', wide: true, prompt: '이야기 차례대로 카드 아래에 1, 2, 3 번호를 쓰세요.', tool: 'story', figures: [{ options: { cards: [{ id: '웃음', text: '할아버지가 웃으세요', motif: 'sun' }, { id: '보기', text: '할아버지가 아파 보여요', motif: 'cloud' }, { id: '돕기', text: '신문을 가져다 드려요', motif: 'star' }] }, caption: '' }], answer: '아파 보여요 1, 신문 2, 웃으세요 3' },
        { type: 'draw', prompt: '내가 도운 뒤 식구의 얼굴을 그려 보세요.' },
        { type: 'blank', prompt: '빈칸에 알맞게 쓰세요.', text: '내가 ___ 을 도왔더니 ___ 가 웃었어요.', answer: '(학생마다 다름)' },
        { type: 'short', prompt: '그때 내 마음을 쓰세요.' },
      ],
      easy: {
        note: '식구의 눈과 입을 떠올려요.',
        items: [
          { type: 'draw', prompt: '도운 뒤 식구의 얼굴을 그려 보세요.' },
          { type: 'choice', prompt: '식구가 웃은 때에 ○ 하세요.', options: ['내가 도운 뒤', '내가 떼쓴 뒤'], answer: '내가 도운 뒤' },
          { type: 'short', prompt: '그때 내 마음을 낱말 하나로 쓰세요.' },
          { type: 'short', prompt: '도운 일을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 초록 테두리가 생기고, 서아 이야기는 첫 장면이 놓여 있어요. 마음 크기는 세 칸이에요.',
      base: '차례를 모두 놓은 뒤 확인을 눌러요. 짝에게 도운 일과 식구의 얼굴을 말해요.',
      challenge: '맞지 않는 마음 카드가 섞여 있어요. 식구의 얼굴을 눈·입·목소리로 나누어 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 도운 뒤 받은 칭찬·선물만 말한다 → 식구의 얼굴과 목소리를 묻는다. ② 도와도 식구가 알아주지 않았다며 속상해한다 → 식구가 편해진 것 자체가 도움의 보람이라고 말해 준다. ③ 아직 돕지 못한 학생이 위축된다 → 앞으로의 장면으로 바꾸어 말하게 하고 탓하지 않는다.',
  }));

  lessons.push(L(10, {
    title: '날마다 되풀이하는 도움 찾기',
    objective: '한 번 하고 끝나는 도움과 날마다 되풀이하는 도움을 견주고, 내가 날마다 할 도움 띠를 정할 수 있다.',
    illustration: ART('a paper calendar strip with five days, each day showing a small pair of shoes neatly placed, a child smiling beside it', '날마다 해요', [
      { motif: 'house', x: 110, y: 214 }, { motif: 'leaf', x: 380, y: 220 }, { motif: 'flower', x: 300, y: 228, color: 'sky' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"어제 신발을 정리했어요. 오늘 현관은 어떨까요?" 다시 흩어진 신발 그림을 보여 준다. "도움은 한 번 하면 끝일까요?" 시연 단추로 \'신발\' \'수저\'가 되풀이되는 띠의 빈칸이 채워지는 모습을 보여 준다. 날마다 되풀이하면 습관이 된다는 것을 짚는다.',
        student: '어제 정리한 것이 오늘 다시 흐트러진 적이 있는지 떠올려 봐요.',
        demo: { tool: 'pattern', options: { seq: ['신발', '수저', '신발', '수저', null], palette: ['신발', '수저'] }, sequence: [{ fill: ['신발'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 한 번이면 끝일까', minutes: 12, tool: 'mindmap',
            teacher: '"수건 개기는 오늘 하면 다음 주에는 안 해도 될까요?" 카드마다 \'내일 또 생기는 일인가?\'를 묻게 한다. \'생신 편지\'처럼 날마다 할 수 없는 도움도 좋은 도움이라는 것을 함께 말한다.',
            task: '도움 카드를 날마다 생기는 일과 가끔 하는 일로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '도움 카드를 날마다 하는 일과 가끔 하는 일로 나누어 보세요.', toolOptions: { topic: '언제 할까?', slots: ['날마다 해요', '가끔 해요'], cards: ['저녁마다 수저 놓기', '아침마다 이불 개기', '할머니 생신에 편지 쓰기', '설날에 집 대청소 돕기'] },
                target: { sort: { '날마다 해요': ['저녁마다 수저 놓기', '아침마다 이불 개기'], '가끔 해요': ['할머니 생신에 편지 쓰기', '설날에 집 대청소 돕기'] } }, difficulty: 0.1,
                levels: { challenge: { prompt: '도움 카드 여섯 장을 날마다 하는 일과 가끔 하는 일로 모두 나누어 보세요.', toolOptions: { cards: ['저녁마다 수저 놓기', '아침마다 이불 개기', '할머니 생신에 편지 쓰기', '설날에 집 대청소 돕기', '학교 다녀와서 신발 정리하기', '이사하는 날 짐 나르기 돕기'] },
                  target: { sort: { '날마다 해요': ['저녁마다 수저 놓기', '아침마다 이불 개기', '학교 다녀와서 신발 정리하기'], '가끔 해요': ['할머니 생신에 편지 쓰기', '설날에 집 대청소 돕기', '이사하는 날 짐 나르기 돕기'] } } } },
                hints: ['카드마다 "이 일은 내일 또 생길까?" 하고 물어보세요.', '\'마다\'가 붙은 말과 특별한 날이 적힌 말을 견주어 보세요.', '아침마다·저녁마다 하는 일은 날마다, 생신·설날처럼 특별한 날 하는 일은 가끔이에요.'] },
              { prompt: '준호는 어제 신발을 정리했는데 오늘 또 흩어져 있어요. 준호가 할 알맞은 생각만 골라 보세요.', toolOptions: { mode: 'pick', basket: '알맞은 생각', cards: ['"오늘도 가지런히 놓자"', '"내일도 내가 살펴봐야지"', '"어제 했으니까 끝"', '"누가 또 그랬어!"'] },
                target: { pick: ['"오늘도 가지런히 놓자"', '"내일도 내가 살펴봐야지"'] }, difficulty: 0.1,
                predict: { q: '"어제 했으니까 끝"은 알맞은 생각일까요?', options: ['알맞아요', '아니에요'], answer: 1 },
                conclude: '신발은 날마다 다시 흐트러져요. 날마다 살피면 도움이 습관이 돼요.' },
              { prompt: '날마다 되풀이하면 좋은 도움만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '날마다 하는 도움', cards: ['내 가방을 제자리에 걸어요', '먹은 그릇을 개수대에 놓아요', '김장하는 날 배추를 날라요', '가족 여행 짐을 싸요'] },
                target: { pick: ['내 가방을 제자리에 걸어요', '먹은 그릇을 개수대에 놓아요'] }, difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 나의 날마다 도움 띠 만들기', minutes: 14, tool: 'pattern',
            teacher: '"민지는 아침에 이불, 저녁에 수저를 날마다 해요. 띠에서 다음에 올 것은?" 띠를 손가락으로 짚으며 \'아침 이불, 저녁 수저\'를 소리 내어 읽게 한다. 마지막 문항은 활동지 띠에 내 도움 두 가지를 정해 그려 오게 한다.',
            task: '날마다 되풀이하는 도움 띠의 빈칸을 채우고, 내 도움 띠를 정해요.',
            levels: CARD_LV,
            items: [
              { prompt: '민지는 아침에 이불, 저녁에 수저를 날마다 해요. 빈칸 두 곳을 채워 보세요.', toolOptions: { seq: ['이불', '수저', '이불', '수저', null, null], palette: ['이불', '수저', '신발'] }, target: { fill: ['이불', '수저'] }, difficulty: 0.05 },
              { prompt: '하준이는 신발, 신발, 그릇 차례로 날마다 되풀이해요. 빈칸을 채워 보세요.', toolOptions: { seq: ['신발', '신발', '그릇', '신발', null, '그릇', null, '신발', '그릇'], palette: ['신발', '그릇', '이불'] }, target: { fill: ['신발', '신발'] }, difficulty: 0.2,
                hints: ['처음부터 세 칸씩 끊어 읽어 보세요. 묶음이 되풀이돼요.', '빈칸 앞뒤의 묶음을 처음 묶음과 견주어 보세요.', '한 묶음은 신발-신발-그릇이에요. 묶음에 맞추어 빈칸을 채워요.'] },
              { prompt: '활동지 띠에 내가 날마다 할 도움 두 가지를 번갈아 그리고 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"내 도움 띠를 얼마나 이어 갈 수 있을까요?" 냉장고에 띠를 붙이고 한 날마다 동그라미를 치게 한다(가정 통신과 함께). 출구 1번에서 \'한 번이면 끝\'을 고른 학생에게 오늘 현관 모습을 떠올리게 한다.',
        exitTicket: [
          { type: 'choice', prompt: '어제 수저를 놓았어요. 오늘 저녁은 어떻게 할까요?', options: ['어제 했으니 안 해요', '오늘도 수저를 놓아요', '동생에게 시켜요'], answer: 1, difficulty: 0.1, explain: '날마다 생기는 일은 날마다 도우면 습관이 돼요.' },
          { type: 'tool', tool: 'pattern', options: { seq: ['화분', '우유', '화분', '우유', null], palette: ['화분', '우유', '이불'] }, prompt: '서아는 화분, 우유 차례로 날마다 도와요. 빈칸을 채워 보세요.', target: { fill: ['화분'] }, difficulty: 0.1 },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '날마다 하는 도움',
      items: [
        { type: 'figure', wide: true, prompt: '빈칸에 알맞은 낱말을 쓰세요.', tool: 'pattern', figures: [{ options: { seq: ['이불', '수저', '이불', null], palette: ['이불', '수저'] }, caption: '' }], answer: '수저' },
        { type: 'table', prompt: '도움을 나누어 쓰세요.', columns: ['날마다 해요', '가끔 해요'], rows: 2 },
        { type: 'draw', prompt: '내가 날마다 할 도움 두 가지를 번갈아 그려 띠를 만드세요.' },
        { type: 'short', prompt: '내 도움 띠를 어디에 붙일지 쓰세요.' },
      ],
      easy: {
        note: '내일 또 생기는 일인지 생각해요.',
        items: [
          { type: 'choice', prompt: '날마다 하는 도움에 ○ 하세요.', options: ['수저 놓기', '이사 짐 싸기'], answer: '수저 놓기' },
          { type: 'choice', prompt: '어제 했어요. 오늘은요?', options: ['오늘도 해요', '안 해요'], answer: '오늘도 해요' },
          { type: 'draw', prompt: '날마다 할 도움을 그려 보세요.' },
          { type: 'short', prompt: '날마다 할 도움을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 띠는 두 가지가 번갈아 나와요.',
      base: '모두 나눈 뒤 확인을 누르고, 세 칸 묶음 띠까지 채워요.',
      challenge: '도움 카드가 여섯 장으로 늘어요. 내 도움 띠를 세 가지로 만들어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 도움은 한 번 하면 끝이라고 여긴다 → 정리한 것이 다음 날 다시 흐트러지는 장면을 보여 준다. ② 가끔 하는 도움을 덜 좋은 도움이라고 오해한다 → 둘 다 좋은 도움이고, 날마다 하는 것은 습관이 된다는 점이 다르다고 말한다. ③ 띠를 너무 길게(다섯 가지) 정한다 → 꼭 지킬 두 가지로 줄인다.',
  }));

  lessons.push(L(11, {
    title: '다음에 해 볼 도움 정해 그림으로 남기기',
    objective: '식구에게 필요한 일을 살펴 다음에 해 볼 도움을 하나 정하고, 그 모습을 색종이 조각 그림으로 남길 수 있다.',
    illustration: ART('a paper child gluing colored paper pieces onto a card showing a child watering plants for a grandmother, scissors and glue on the table', '다음에는 이걸 해 볼래요', [
      { motif: 'flower', x: 110, y: 228, color: 'mint' }, { motif: 'house', x: 380, y: 214, color: 'buttercup' }, { motif: 'cloud', x: 300, y: 70, s: 0.6 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"우리 집 식구가 요즘 가장 바쁜 때는 언제예요?" 아침 출근 준비, 저녁 준비처럼 때를 말하게 한다. "그때 내가 할 수 있는 새 도움을 하나 정해 그림으로 남겨요." 시연 단추로 조각 그림이 꾸며지는 모습을 보여 준다. 이미 하고 있는 도움 말고 새로운 것을 고르도록 짚는다.',
        student: '우리 식구가 가장 바쁜 때를 하나 떠올려 짝에게 말해 봐요.',
        demo: { tool: 'collage', options: { readOnly: true }, sequence: [{ has: [{ shape: 'heart', min: 1 }] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 식구에게 필요한 다음 도움', minutes: 11, tool: 'mindmap',
            teacher: '"엄마가 아침에 바쁘세요. 그때 필요한 도움은 무엇일까요?" 상황마다 식구에게 가장 필요한 도움을 잇게 한다. 상황과 상관없이 좋아 보이는 도움을 고르는 학생에게 "그때 그 식구가 하고 있는 일"을 다시 읽게 한다.',
            task: '식구의 상황을 읽고, 그때 가장 필요한 도움 카드를 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '식구의 상황마다 가장 필요한 도움 카드를 이어 보세요.', toolOptions: { mode: 'match', topic: '다음 도움', slots: [{ id: 's1', label: '아침에 엄마가 출근 준비로 바빠요' }, { id: 's2', label: '할머니가 무릎이 아파 앉아 계세요' }], cards: ['내 옷을 스스로 입어요', '할머니 안경을 가져다 드려요'] },
                target: { match: { s1: '내 옷을 스스로 입어요', s2: '할머니 안경을 가져다 드려요' } }, difficulty: 0.1 },
              { prompt: '세 상황에 가장 필요한 도움 카드를 이어 보세요.', toolOptions: { mode: 'match', topic: '다음 도움', slots: [{ id: 's1', label: '아빠가 저녁밥을 짓고 계세요' }, { id: 's2', label: '아기 동생이 막 잠들었어요' }, { id: 's3', label: '비가 와서 빨래가 젖을 것 같아요' }], cards: ['식탁에 수저를 놓아요', '작은 목소리로 놀아요', '어른께 빨래를 걷자고 알려요'] },
                target: { match: { s1: '식탁에 수저를 놓아요', s2: '작은 목소리로 놀아요', s3: '어른께 빨래를 걷자고 알려요' } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['식탁에 수저를 놓아요', '작은 목소리로 놀아요', '어른께 빨래를 걷자고 알려요', '큰 소리로 노래해요'] } } } },
              { prompt: '민지는 이미 날마다 수저를 놓아요. 민지가 새로 해 볼 도움만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '민지의 새 도움', cards: ['동생에게 그림책 읽어 주기', '화분에 물 주기', '수저 놓기'] },
                target: { pick: ['동생에게 그림책 읽어 주기', '화분에 물 주기'] }, difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 다음 도움 그림 꾸미기', minutes: 15, tool: 'collage',
            teacher: '"내가 정한 도움을 하고 있는 모습을 꾸며요. 누구를 돕는지 보이게 식구도 넣어요." 화면에서 꾸민 뒤 같은 모습을 활동지에 색연필로 옮겨 그려도 된다. 다 꾸민 학생은 짝에게 "나는 다음에 ○○를 도울 거야. ○○할 때."처럼 때까지 말하게 한다.',
            task: '다음에 해 볼 도움을 하는 내 모습을 조각으로 꾸미고, 짝에게 언제 할지 말해요.',
            levels: COL_LV,
            items: [
              { prompt: '다음에 해 볼 도움을 하는 내 모습과 도움을 받는 식구를 꾸미고, 해낸 것을 표시해 보세요.', target: { selfCheck: ['내 모습을 붙였어요', '도움을 받는 식구를 붙였어요', '무엇을 돕는지 보이게 꾸몄어요'], minPieces: 4 }, difficulty: 0.1 },
              { prompt: '그림 둘레에 하트 조각을 두 개 이상 붙여 마음을 꾸며 보세요.', state: { pieces: [{ shape: 'circle', color: '노랑', size: 'l', x: 200, y: 200, r: 0 }, { shape: 'circle', color: '분홍', size: 'l', x: 340, y: 200, r: 0 }] }, target: { has: [{ shape: 'heart', min: 2 }], pieces: { min: 4 } }, difficulty: 0.1 },
              { prompt: '짝에게 "나는 ○○할 때 ○○를 도울 거야"라고 말하고 짝의 다짐도 들은 뒤 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"짝은 어떤 도움을 정했나요? 대신 말해 줄 사람?" 서너 명이 짝의 다짐을 말하게 한다. 출구 1번에서 상황에 맞지 않는 도움을 고른 학생에게 "그때 식구는 무엇을 하고 있었지?"를 묻는다. 그림은 집에 가져가 식구에게 보여 드리게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '다음 도움', slots: [{ id: 'e1', label: '형이 숙제하느라 바빠요' }, { id: 'e2', label: '엄마가 장을 보고 오셨어요' }], cards: ['조용히 내 책을 읽어요', '장바구니를 함께 들어요'] }, prompt: '두 상황에 가장 필요한 도움 카드를 이어 보세요.', target: { match: { e1: '조용히 내 책을 읽어요', e2: '장바구니를 함께 들어요' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '다음 도움을 고를 때 먼저 살펴볼 것은?', options: ['식구에게 필요한 것', '가장 쉬운 것', '친구가 고른 것'], answer: 0, difficulty: 0.1, explain: '식구가 바쁘거나 힘든 때를 살펴야 꼭 필요한 도움을 고를 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '다음에 해 볼 도움',
      items: [
        { type: 'figure', wide: true, prompt: '상황과 필요한 도움을 선으로 이으세요.', tool: 'mindmap', figures: [{ options: { mode: 'match', topic: '다음 도움', slots: [{ id: 's1', label: '아빠가 밥을 지으세요' }, { id: 's2', label: '동생이 잠들었어요' }], cards: ['수저를 놓아요', '조용히 놀아요'] }, caption: '' }], answer: '밥-수저, 동생-조용히' },
        { type: 'draw', prompt: '다음에 해 볼 도움을 하는 내 모습을 그려 보세요.' },
        { type: 'blank', prompt: '다짐을 쓰세요.', text: '나는 ___ 할 때 ___ 를 도울 거예요.', answer: '(학생마다 다름)' },
        { type: 'short', prompt: '이 도움이 왜 필요한지 쓰세요.' },
      ],
      easy: {
        note: '식구가 바쁜 때를 먼저 떠올려요.',
        items: [
          { type: 'choice', prompt: '아빠가 밥을 지으실 때 할 도움에 ○ 하세요.', options: ['수저 놓기', '크게 노래하기'], answer: '수저 놓기' },
          { type: 'draw', prompt: '다음에 해 볼 도움을 그려 보세요.' },
          { type: 'short', prompt: '도울 사람을 쓰세요.' },
          { type: 'short', prompt: '할 도움을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '모양 네 가지, 크기 두 가지만 나와요. 맞는 짝에 초록 테두리가 생겨요.',
      base: '모두 이은 뒤 확인을 누르고, 그림에 나와 식구를 함께 꾸며요.',
      challenge: '상황에 맞지 않는 도움 카드가 섞여 있어요. 다짐에 언제 할지까지 넣어 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 이미 하고 있는 도움을 다시 고른다 → "새로 해 볼 것"이라는 조건을 다시 읽는다. ② 식구 상황과 상관없이 크고 멋진 도움을 고른다 → 그때 식구가 하고 있는 일을 떠올리게 한다. ③ 꾸미기에만 오래 머문다 → 내 모습·식구·도움 세 가지가 보이면 다짐 말하기로 넘어가게 한다.',
  }));

  lessons.push(L(12, {
    title: '멀리 사는 친척과 이웃에게도 마음 전하기',
    objective: '함께 살지 않는 친척과 이웃에게 마음을 전하는 방법을 고르고, 안부 전화 말하기를 해 볼 수 있다.',
    illustration: ART('a paper child talking on a phone with a speech bubble, and far away across paper hills a grandmother answering in her countryside house', '잘 지내세요?', [
      { motif: 'house', x: 90, y: 214, color: 'sky' }, { motif: 'mountain', x: 240, y: 214, s: 0.8 }, { motif: 'house', x: 390, y: 214, color: 'peach' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"우리 집에 함께 살지 않지만 보고 싶은 사람이 있나요?" 시골 할머니, 이모, 사촌처럼 떠올린 사람을 듣는다. "멀리 있어도 마음을 전할 수 있을까요?" 시연 단추로 전화 말풍선 빈칸에 \'잘 지내세요\' 카드가 들어가는 모습을 보여 준다.',
        student: '함께 살지 않지만 보고 싶은 사람을 한 명 떠올려 짝에게 말해 봐요.',
        demo: { tool: 'story', options: { mode: 'fill', cards: ['잘 지내세요', '빨리 와'], slots: [{ id: 'b1', who: '준호', motif: 'house', label: '할머니, ___?' }], shuffle: false }, sequence: [{ fill: { b1: '잘 지내세요' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 멀리 있는 사람에게 마음 전하기', minutes: 12, tool: 'mindmap',
            teacher: '"멀리 사는 할머니께 마음을 전하는 방법에는 무엇이 있을까요?" 전화, 영상 통화, 그림 편지를 칠판에 적는다. 같은 동네 이웃에게는 직접 인사와 작은 도움으로도 마음을 전할 수 있다는 것을 견준다. 이웃 집에 혼자 들어가지 않고 어른과 함께 간다는 것도 짚는다.',
            task: '마음을 전하는 방법을 받는 사람에 맞게 나누고 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '마음을 전하는 방법을 멀리 사는 할머니와 옆집 할아버지로 나누어 보세요.', toolOptions: { topic: '마음 전하기', slots: ['멀리 사는 할머니', '옆집 할아버지'], cards: ['안부 전화를 드려요', '그림 편지를 부쳐요', '엘리베이터에서 인사해요', '떨어진 신문을 주워 드려요'] },
                target: { sort: { '멀리 사는 할머니': ['안부 전화를 드려요', '그림 편지를 부쳐요'], '옆집 할아버지': ['엘리베이터에서 인사해요', '떨어진 신문을 주워 드려요'] } }, difficulty: 0.15,
                hints: ['멀리 사는 사람과는 얼굴을 직접 볼 수 없어요. 무엇으로 마음을 전할지 생각해 보세요.', '직접 만나야 할 수 있는 방법과 멀리서도 되는 방법을 견주어 보세요.', '전화와 편지는 멀리서도 돼요. 인사와 신문 줍기는 가까이 있어야 해요.'] },
              { prompt: '안부 전화에서 할머니께 할 말만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '안부 전화에서 할 말', cards: ['"할머니, 잘 지내세요?"', '"감기 다 나으셨어요?"', '"용돈 언제 보내 줘요?"', '"빨리 끊을게요"'] },
                target: { pick: ['"할머니, 잘 지내세요?"', '"감기 다 나으셨어요?"'] }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['"할머니, 잘 지내세요?"', '"감기 다 나으셨어요?"', '"용돈 언제 보내 줘요?"', '"빨리 끊을게요"', '"나 바빠"'] } } } },
              { prompt: '전화로 마음을 전한 뒤 할머니와 준호의 마음 카드를 이어 보세요.', toolOptions: { mode: 'match', topic: '전화한 뒤 마음', cards: ['기쁨', '뿌듯함', '짜증'], slots: [{ id: 's1', label: '손자의 전화를 받은 할머니' }, { id: 's2', label: '할머니 웃음소리를 듣고 내가 잘했다 싶은 준호' }] },
                target: { match: { s1: '기쁨', s2: '뿌듯함' } }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 안부 전화 놀이', minutes: 14, tool: 'story',
            teacher: '"종이컵 전화기로 짝과 안부 전화 놀이를 해요." 한 사람은 할머니, 한 사람은 손주가 된다. 인사 → 안부 묻기 → 내 소식 → 끝인사 차례를 지키게 하고, 끝인사 없이 끊는 학생에게 "할머니는 어떤 마음일까?"를 묻는다. 역할을 바꿔 한 번 더 한다.',
            task: '안부 전화의 차례를 놓고, 짝과 종이컵 전화기로 전화 놀이를 해요.',
            levels: CARD_LV,
            items: [
              { prompt: '안부 전화의 차례대로 카드를 놓아 보세요.', toolOptions: { cards: [{ id: '끝', text: '"안녕히 계세요"', motif: 'moon' }, { id: '인사', text: '"할머니, 저 서아예요"', motif: 'sun' }, { id: '안부', text: '"잘 지내세요?"', motif: 'flower' }, { id: '소식', text: '"저 줄넘기 열 번 했어요"', motif: 'star' }] },
                target: { order: ['인사', '안부', '소식', '끝'] }, difficulty: 0.15,
                levels: { easy: { state: { at: { '인사': 0 } } } } },
              { prompt: '전화 말풍선 빈칸에 알맞은 카드를 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['보고 싶어요', '안녕히 계세요', '빨리 끊어요'], slots: [{ id: 'b1', who: '하준', motif: 'house', label: '이모, 정말 ___.' }, { id: 'b2', who: '하준', motif: 'house', label: '또 전화할게요. ___.' }] },
                target: { fill: { b1: '보고 싶어요', b2: '안녕히 계세요' } }, difficulty: 0.15 },
              { prompt: '짝과 종이컵 전화기로 할머니와 손주가 되어 안부 전화를 하고, 역할을 바꾸어 한 번 더 한 뒤 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 집에 가서 누구에게 안부를 전해 볼까요?" 전화가 어려운 집은 그림 편지도 좋다고 말한다. 출구 1번에서 차례를 바꾼 학생은 종이컵 전화기로 다시 해 보게 한다. 다음 시간부터는 동네에서 만나는 여러 사람을 알아본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { cards: [{ id: '인사', text: '"삼촌, 저 민지예요"', motif: 'sun' }, { id: '끝', text: '"안녕히 계세요"', motif: 'moon' }, { id: '안부', text: '"허리는 괜찮으세요?"', motif: 'flower' }] }, prompt: '안부 전화의 차례대로 놓아 보세요.', target: { order: ['인사', '안부', '끝'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '멀리 사는 친척에게 마음을 전하는 방법이 아닌 것은?', options: ['안부 전화', '그림 편지', '엘리베이터에서 인사하기'], answer: 2, difficulty: 0.15, explain: '엘리베이터 인사는 가까이 사는 이웃에게 하는 방법이에요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '멀리 있어도 마음을 전해요',
      items: [
        { type: 'figure', wide: true, prompt: '안부 전화의 차례대로 카드 아래에 1, 2, 3 번호를 쓰세요.', tool: 'story', figures: [{ options: { cards: [{ id: '끝', text: '"안녕히 계세요"', motif: 'moon' }, { id: '인사', text: '"저 서아예요"', motif: 'sun' }, { id: '안부', text: '"잘 지내세요?"', motif: 'flower' }] }, caption: '' }], answer: '저 서아예요 1, 잘 지내세요 2, 안녕히 계세요 3' },
        { type: 'table', prompt: '마음을 전하는 방법을 쓰세요.', columns: ['멀리 사는 사람', '가까이 사는 이웃'], rows: 2 },
        { type: 'blank', prompt: '안부 전화에서 할 말을 쓰세요.', text: '___, 잘 지내세요?', answer: '(받는 사람)' },
        { type: 'draw', prompt: '마음을 전하고 싶은 사람에게 그림 편지를 그려 보세요.' },
      ],
      easy: {
        note: '멀리 있는 사람에게는 전화나 편지로 전해요.',
        items: [
          { type: 'choice', prompt: '멀리 사는 할머니께 마음을 전하는 방법에 ○ 하세요.', options: ['안부 전화', '엘리베이터 인사'], answer: '안부 전화' },
          { type: 'choice', prompt: '전화를 끝낼 때 하는 말에 ○ 하세요.', options: ['"안녕히 계세요"', '"끊어"'], answer: '"안녕히 계세요"' },
          { type: 'draw', prompt: '그림 편지를 그려 보세요.' },
          { type: 'short', prompt: '마음을 전할 사람을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 전화 차례는 첫 카드가 놓여 있어요.',
      base: '모두 놓은 뒤 확인을 누르고, 짝과 전화 놀이를 두 번 해요.',
      challenge: '할 말이 아닌 카드가 더 섞여 있어요. 전화 놀이에서 내 소식을 두 가지 전해요.',
    },
    safety: ['이웃 집에는 혼자 들어가지 않고 어른과 함께 가요.'],
    teacherNotes: '준비물: 종이컵 전화기(종이컵 2개와 실). 자주 보이는 어려움: ① 함께 살지 않으면 가족이 아니라고 여긴다 → 떨어져 살아도 서로 아끼는 친척도 가족이라고 짚는다. ② 전화에서 바라는 것만 말한다 → 안부를 먼저 묻는 차례를 지킨다. ③ 친척이 없거나 연락이 어려운 학생이 있다 → 고마운 이웃, 돌봄 선생님께 그림 편지를 써도 된다고 미리 말한다.',
  }));

  // ───────────────────────── 13~16차시: 둘레 사람에게 물을 물음 만들기(탐구 질문 만들기) ─────────────────────────

  // 동네 칸 지도(쉬움 4×3, 기본 5×3, 도전 6×4 — 장소는 모두 0~3열·0~2행 안에 둔다)
  var MAP_LV = { easy: { grid: [4, 3] }, base: { grid: [5, 3] }, challenge: { grid: [6, 4] } };

  lessons.push(L(13, {
    title: '학교 오가는 길에 만나는 사람 떠올리기',
    objective: '학교를 오가는 길의 장소와 그곳에서 만나는 사람을 지도에서 찾고, 멀리서 우리를 돕는 사람도 둘레 사람임을 말할 수 있다.',
    illustration: ART('a paper neighborhood street with a crosswalk guard holding a flag, a mail carrier with a bag, a bakery window and a bus stop, a child walking to school', '길에서 누구를 만날까요?', [
      { motif: 'house', x: 90, y: 214, color: 'peach' }, { motif: 'house', x: 200, y: 214, color: 'sky' }, { motif: 'tree', x: 330, y: 214 }, { motif: 'house', x: 420, y: 214, color: 'mint' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"오늘 아침 집에서 학교까지 오는 동안 누구를 만났나요?" 건널목 지킴이, 가게 주인, 버스 기사처럼 대답을 칠판에 적는다. "이번에는 우리 둘레 사람들을 탐구해요. 무엇이 궁금한지 물음을 만들 거예요." 시연 단추로 지도의 우체국 칸에 핀이 꽂히는 모습을 보여 준다.',
        student: '오늘 아침 학교에 오는 길에 만난 사람을 한 명 떠올려 봐요.',
        demo: { tool: 'map', options: { grid: [5, 3], places: [{ name: '우리 집', icon: 'house', at: [0, 2] }, { name: '우체국', icon: 'post', at: [2, 1] }, { name: '학교', icon: 'school', at: [4, 0] }] }, sequence: [{ place: '우체국' }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 길에서 그분을 만나는 곳', minutes: 13, tool: 'map',
            teacher: '"편지를 부치려면 어디로 가야 할까요?" 문항을 함께 읽고, 그 일을 하는 사람이 있는 곳에 핀을 꽂게 한다. 장소 이름만 훑어보고 꽂는 학생에게 "그분은 무슨 일을 하신다고 했지요?"를 되묻는다.',
            task: '이야기에 나온 사람을 만나는 곳을 지도에서 찾아 핀을 꽂아요.',
            levels: MAP_LV,
            items: [
              { prompt: '민지는 할머니께 편지를 부치러 가요. 편지를 받아 주시는 분을 만나는 곳에 핀을 꽂아 보세요.', toolOptions: { places: [{ name: '우리 집', icon: 'house', at: [0, 2] }, { name: '우체국', icon: 'post', at: [2, 0] }, { name: '빵집', icon: 'market', at: [3, 2] }, { name: '학교', icon: 'school', at: [1, 1] }] }, target: { place: '우체국' }, difficulty: 0.05 },
              { prompt: '준호는 아침마다 깃발을 든 분이 길을 건너게 도와주세요. 그분을 만나는 곳에 핀을 꽂아 보세요.', toolOptions: { places: [{ name: '학교 앞 건널목', icon: 'dot', at: [1, 0] }, { name: '도서관', icon: 'library', at: [3, 1] }, { name: '공원', icon: 'park', at: [0, 2] }, { name: '병원', icon: 'hospital', at: [2, 2] }] }, target: { place: '학교 앞 건널목' }, difficulty: 0.1 },
              { prompt: '서아는 감기에 걸려 진찰을 받으러 가요. 서아를 낫게 도와주실 분을 만나는 곳에 핀을 꽂아 보세요.', toolOptions: { places: [{ name: '시장', icon: 'market', at: [0, 0] }, { name: '경찰서', icon: 'police', at: [3, 0] }, { name: '병원', icon: 'hospital', at: [2, 2] }, { name: '버스 정류장', icon: 'bus', at: [1, 1] }] }, target: { place: '병원' }, difficulty: 0.1,
                conclude: '아플 때 우리를 도와주시는 분들은 병원에서 일해요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 우리 둘레 사람은 누구일까', minutes: 13, tool: 'mindmap',
            teacher: '"택배 기사님은 우리 동네에 사시지 않아요. 그래도 우리 둘레 사람일까요?" 멀리서 와서 우리를 돕는 사람도 함께 살아가는 둘레 사람이라는 것을 짚는다. 장소와 사람을 이은 뒤 "그분은 무슨 일을 하실까?"를 칠판에 물음으로 적어 두고 다음 시간으로 잇는다.',
            task: '장소와 그곳에서 일하는 사람을 잇고, 우리 둘레 사람을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '장소마다 그곳에서 일하는 사람 카드를 이어 보세요.', toolOptions: { mode: 'match', topic: '어디서 일할까?', slots: [{ id: 's1', label: '우체국' }, { id: 's2', label: '빵집' }, { id: 's3', label: '소방서' }], cards: ['집배원', '제빵사', '소방관'] },
                target: { match: { s1: '집배원', s2: '제빵사', s3: '소방관' } }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['집배원', '제빵사', '소방관', '우주 비행사'] } } } },
              { prompt: '우리를 돕는 둘레 사람을 모두 골라 바구니에 넣어 보세요. 사는 곳이 멀어도 괜찮아요.', toolOptions: { mode: 'pick', basket: '우리를 돕는 둘레 사람', cards: ['물건을 갖다주는 택배 기사님', '학교로 오는 버스 기사님', '옆집 할머니', '그림책 속 공룡'] },
                target: { pick: ['물건을 갖다주는 택배 기사님', '학교로 오는 버스 기사님', '옆집 할머니'] }, difficulty: 0.2,
                predict: { q: '동네에 살지 않는 택배 기사님도 우리 둘레 사람일까요?', options: ['둘레 사람이에요', '아니에요'], answer: 0 },
                conclude: '멀리서 와서 우리를 돕는 사람도 함께 살아가는 둘레 사람이에요.',
                hints: ['카드마다 "이분이 우리 생활을 돕나요?"를 물어보세요. 사는 곳은 따지지 않아요.', '정말 있는 사람인지, 우리를 돕는 일을 하는지 다시 살펴보세요.', '그림책 속 공룡만 우리 둘레 사람이 아니에요.'] },
              { prompt: '사람마다 하는 일 카드를 이어 보세요.', toolOptions: { mode: 'match', topic: '무슨 일을 할까?', slots: [{ id: 's1', label: '버스 기사' }, { id: 's2', label: '교통 안전 지킴이' }], cards: ['사람들을 태우고 다녀요', '건널목에서 길 건너기를 도와요'] },
                target: { match: { s1: '사람들을 태우고 다녀요', s2: '건널목에서 길 건너기를 도와요' } }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 찾은 분들 가운데 가장 궁금한 분은 누구예요?" 두세 명이 고른 분과 궁금한 점을 칠판에 남겨 다음 시간 물음 만들기로 잇는다. 출구 1번을 틀린 학생은 그분이 하는 일을 다시 읽게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'map', options: { grid: [5, 3], places: [{ name: '도서관', icon: 'library', at: [1, 0] }, { name: '소방서', icon: 'fire', at: [3, 2] }, { name: '빵집', icon: 'market', at: [0, 2] }] }, prompt: '하준이는 그림책을 빌려주시는 분을 만나러 가요. 그곳에 핀을 꽂아 보세요.', target: { place: '도서관' }, difficulty: 0.1 },
          { type: 'choice', prompt: '우리 둘레 사람에 대해 맞는 말은?', options: ['우리 집 옆에 사는 사람만이에요', '멀리서 와서 돕는 사람도 둘레 사람이에요'], answer: 1, difficulty: 0.15, explain: '택배 기사님, 버스 기사님처럼 멀리서 오는 분도 우리와 함께 살아가요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '길에서 만나는 사람들',
      items: [
        { type: 'figure', wide: true, prompt: '편지를 부치는 곳에 ○ 하세요.', tool: 'map', figures: [{ options: { grid: [5, 3], places: [{ name: '우리 집', icon: 'house', at: [0, 2] }, { name: '우체국', icon: 'post', at: [2, 0] }, { name: '빵집', icon: 'market', at: [3, 2] }] }, caption: '' }], answer: '우체국' },
        { type: 'table', prompt: '장소와 그곳에서 일하는 사람을 쓰세요.', columns: ['장소', '일하는 사람'], cells: [['우체국', ''], ['병원', ''], ['소방서', '']] },
        { type: 'choice', prompt: '우리 둘레 사람이 아닌 것에 ○ 하세요.', options: ['택배 기사님', '버스 기사님', '그림책 속 공룡'], answer: '그림책 속 공룡' },
        { type: 'draw', prompt: '학교에 오는 길에 만난 사람을 그려 보세요.' },
      ],
      easy: {
        note: '그분이 하는 일을 먼저 떠올려요.',
        items: [
          { type: 'choice', prompt: '편지를 부치는 곳에 ○ 하세요.', options: ['우체국', '빵집'], answer: '우체국' },
          { type: 'choice', prompt: '아플 때 가는 곳에 ○ 하세요.', options: ['병원', '공원'], answer: '병원' },
          { type: 'draw', prompt: '길에서 만난 사람을 그려 보세요.' },
          { type: 'short', prompt: '만난 사람 한 명을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '지도가 4칸×3줄로 작아요. 카드는 맞는 칸에 초록 테두리가 생겨요.',
      base: '지도가 5칸×3줄이에요. 모두 이은 뒤 확인을 눌러요.',
      challenge: '지도가 6칸×4줄로 넓어지고, 맞지 않는 사람 카드가 섞여 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 가까이 사는 사람만 둘레 사람이라고 여긴다 → 택배·버스처럼 멀리서 오는 분의 도움을 떠올리게 한다. ② 하는 일과 장소를 헷갈린다 → "그분은 어디에서 무엇을 하실까?"를 짝지어 말하게 한다. ③ 직업 이름을 모른다 → 이름보다 하는 일을 먼저 말해도 된다고 한다.',
  }));

  lessons.push(L(14, {
    title: '궁금한 것을 묻는 말로 바꾸어 보기',
    objective: '둘레 사람에 대해 궁금한 것을 "무엇을, 언제, 왜"가 들어간 묻는 말로 바꾸어 말할 수 있다.',
    illustration: ART('a paper child holding a big question mark card in front of a friendly bakery owner, speech bubbles with question marks floating', '무엇이 궁금할까요?', [
      { motif: 'house', x: 110, y: 214, color: 'buttercup' }, { motif: 'cloud', x: 330, y: 80, s: 0.6 }, { motif: 'flower', x: 380, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"\'빵집 아저씨는 일찍 일어나요\'와 \'빵집 아저씨는 몇 시에 일어나세요?\'는 무엇이 다를까요?" 두 문장을 칠판에 쓰고 끝의 물음표와 말끝을 짚는다. 시연 단추로 \'몇 시에 일어나세요?\' 카드가 묻는 말 가지에 놓이는 모습을 보여 준다.',
        student: '빵집 아저씨에게 궁금한 것을 하나 떠올려 짝에게 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '빵집 아저씨', slots: ['묻는 말'], cards: ['몇 시에 일어나세요?', '빵은 맛있어요'], shuffle: false }, sequence: [{ sort: { '묻는 말': ['몇 시에 일어나세요?'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 묻는 말 찾기', minutes: 12, tool: 'mindmap',
            teacher: '"말끝을 올려 읽어 볼까요? \'몇 시에 일어나세요↗\'" 카드를 소리 내어 읽고, 대답이 필요한 말인지 묻는다. 물음표만 보고 고르는 학생에게 "대답할 수 있는 말인가요?"를 함께 따지게 한다.',
            task: '카드를 읽고, 그분에게 대답을 들을 수 있는 묻는 말과 그냥 하는 말로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '집배원께 하는 말을 묻는 말과 그냥 하는 말로 나누어 보세요.', toolOptions: { topic: '집배원', slots: ['묻는 말', '그냥 하는 말'], cards: ['하루에 편지를 몇 통 나르세요?', '비 오는 날에는 어떻게 하세요?', '가방이 무거워 보여요', '아저씨 옷은 파란색이에요'] },
                target: { sort: { '묻는 말': ['하루에 편지를 몇 통 나르세요?', '비 오는 날에는 어떻게 하세요?'], '그냥 하는 말': ['가방이 무거워 보여요', '아저씨 옷은 파란색이에요'] } }, difficulty: 0.1 },
              { prompt: '도서관 사서 선생님께 하는 말을 나누어 보세요.', toolOptions: { topic: '사서 선생님', slots: ['묻는 말', '그냥 하는 말'], cards: ['책을 어떻게 고르세요?', '왜 도서관에서 일하세요?', '도서관은 조용해요', '책이 아주 많아요'] },
                target: { sort: { '묻는 말': ['책을 어떻게 고르세요?', '왜 도서관에서 일하세요?'], '그냥 하는 말': ['도서관은 조용해요', '책이 아주 많아요'] } }, difficulty: 0.15,
                levels: { challenge: { prompt: '사서 선생님께 하는 말 여섯 장을 묻는 말과 그냥 하는 말로 모두 나누어 보세요.', toolOptions: { cards: ['책을 어떻게 고르세요?', '왜 도서관에서 일하세요?', '도서관은 조용해요', '책이 아주 많아요', '언제 가장 바쁘세요?', '선생님 안경이 예뻐요'] },
                  target: { sort: { '묻는 말': ['책을 어떻게 고르세요?', '왜 도서관에서 일하세요?', '언제 가장 바쁘세요?'], '그냥 하는 말': ['도서관은 조용해요', '책이 아주 많아요', '선생님 안경이 예뻐요'] } } } } },
              { prompt: '그분이 하는 일을 알 수 있는 묻는 말만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '하는 일을 묻는 말', cards: ['"소방관은 불이 나면 무엇을 하세요?"', '"경찰관은 밤에도 일하세요?"', '"소방차는 빨간색이에요"', '"경찰관 모자는 멋져요"'] },
                target: { pick: ['"소방관은 불이 나면 무엇을 하세요?"', '"경찰관은 밤에도 일하세요?"'] }, difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 궁금한 것을 묻는 말로 바꾸기', minutes: 14, tool: 'story',
            teacher: '"\'언제\', \'무엇을\', \'왜\'를 넣으면 묻는 말이 돼요." 말풍선 빈칸에 묻는 낱말을 넣고 말끝을 올려 읽게 한다. 마지막 문항에서는 내가 궁금한 분에게 할 물음을 한 가지 직접 써서 짝에게 들려준다. 어른께는 "~세요?"로 높여 묻는다는 것을 짚는다.',
            task: '말풍선의 빈칸에 묻는 낱말을 넣어 묻는 말을 만들고, 내 물음을 하나 써요.',
            levels: CARD_LV,
            items: [
              { prompt: '빵집 아저씨께 묻는 말풍선을 완성해 보세요.', toolOptions: { mode: 'fill', cards: ['몇 시에', '무엇', '빵이'], slots: [{ id: 'b1', who: '준호', motif: 'sun', label: '아침 ___ 일어나세요?' }, { id: 'b2', who: '준호', motif: 'sun', label: '가장 많이 팔리는 빵은 ___예요?' }] },
                target: { fill: { b1: '몇 시에', b2: '무엇' } }, difficulty: 0.15 },
              { prompt: '경찰관께 묻는 말풍선을 완성해 보세요.', toolOptions: { mode: 'fill', cards: ['왜', '언제', '경찰차'], slots: [{ id: 'b1', who: '서아', motif: 'star', label: '___ 경찰관이 되셨어요?' }, { id: 'b2', who: '서아', motif: 'star', label: '___ 가장 바쁘세요?' }] },
                target: { fill: { b1: '왜', b2: '언제' } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['왜', '언제', '경찰차', '빨리'] } } } },
              { prompt: '내가 궁금한 분에게 할 물음을 활동지에 "~세요?"로 하나 쓰고, 짝에게 말끝을 올려 들려준 뒤 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"짝이 만든 물음 가운데 나도 궁금해진 것이 있나요?" 서너 명의 물음을 칠판에 붙인다. 출구 1번에서 그냥 하는 말을 고른 학생에게 "그 말을 들으면 그분이 대답할 것이 있나요?"를 묻는다. 다음 시간에는 이 물음을 누구에게 물을지 정한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '급식실 조리사님', basket: '묻는 말', cards: ['"밥을 몇 시부터 지으세요?"', '"오늘 국이 뜨거워요"', '"반찬은 누가 정하세요?"'] }, prompt: '조리사님께 하는 말 가운데 묻는 말만 골라 보세요.', target: { pick: ['"밥을 몇 시부터 지으세요?"', '"반찬은 누가 정하세요?"'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '"소방관은 용감해요"를 묻는 말로 바꾼 것은?', options: ['"소방관은 무섭지 않으세요?"', '"소방관은 정말 용감해요"', '"소방차가 멋져요"'], answer: 0, difficulty: 0.2, explain: '말끝이 "~세요?"로 끝나 대답을 들을 수 있는 말이 묻는 말이에요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '묻는 말 만들기',
      items: [
        { type: 'figure', wide: true, prompt: '묻는 말과 그냥 하는 말을 선으로 이으세요.', tool: 'mindmap', figures: [{ options: { topic: '집배원', slots: ['묻는 말', '그냥 하는 말'], cards: ['비 오는 날엔 어떻게 하세요?', '가방이 무거워 보여요'] }, caption: '' }], answer: '비 오는 날엔 어떻게 하세요?-묻는 말' },
        { type: 'blank', prompt: '묻는 낱말을 넣어 쓰세요.', text: '아침 ___ 일어나세요?', answer: '몇 시에' },
        { type: 'check', prompt: '묻는 말에 넣을 수 있는 낱말에 ✓ 하세요.', options: ['언제', '무엇을', '왜', '빨갛다'] },
        { type: 'short', prompt: '내가 궁금한 분에게 할 물음을 "~세요?"로 쓰세요.' },
      ],
      easy: {
        note: '말끝을 올려 읽어 보면 묻는 말인지 알 수 있어요.',
        items: [
          { type: 'choice', prompt: '묻는 말에 ○ 하세요.', options: ['몇 시에 일어나세요?', '빵이 맛있어요'], answer: '몇 시에 일어나세요?' },
          { type: 'choice', prompt: '빈칸에 알맞은 낱말에 ○ 하세요. (___ 경찰관이 되셨어요?)', options: ['왜', '빨리'], answer: '왜' },
          { type: 'draw', prompt: '궁금한 분을 그려 보세요.' },
          { type: 'short', prompt: '그분께 묻고 싶은 것을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 틀린 카드는 돌아와요.',
      base: '모두 나눈 뒤 확인을 누르고, 내 물음을 하나 써요.',
      challenge: '말 카드가 여섯 장으로 늘고, 빈칸에 맞지 않는 낱말이 더 섞여 있어요. 내 물음을 두 개 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 생각을 말하는 것과 묻는 것을 헷갈린다 → 말끝을 올려 읽고 "대답할 수 있나요?"로 견준다. ② 어른께 "~해?"로 묻는다 → "~세요?"로 높여 묻는 말을 함께 읽는다. ③ "예/아니요"로만 끝나는 물음만 만든다 → "무엇을, 왜"를 넣으면 이야기를 더 들을 수 있다고 알려 준다.',
  }));

  lessons.push(L(15, {
    title: '물음마다 누구에게 물어볼지 정하기',
    objective: '만든 물음을 읽고 대답해 줄 수 있는 사람을 골라 정하고, 묻기 좋은 때를 말할 수 있다.',
    illustration: ART('a paper child pinning question cards onto a board with small portraits of a librarian, a cook and a school guard, strings connecting cards to portraits', '누구에게 물어볼까요?', [
      { motif: 'house', x: 110, y: 214, color: 'lavender' }, { motif: 'star', x: 250, y: 84, s: 0.6 }, { motif: 'tree', x: 380, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"\'급식 반찬은 누가 정하세요?\'를 경비 아저씨께 여쭈면 대답을 들을 수 있을까요?" 물음마다 잘 아는 사람이 따로 있다는 것을 짚는다. 시연 단추로 물음 옆에 \'영양 선생님\' 카드가 이어지는 모습을 보여 준다. 학교 안에도 물어볼 분이 많다는 것을 떠올리게 한다.',
        student: '우리 학교에서 일하시는 분을 생각나는 대로 짝과 함께 세어 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '누구에게 물을까?', slots: [{ id: 's1', label: '급식 반찬은 누가 정하세요?' }], cards: ['영양 선생님', '버스 기사님'], shuffle: false }, sequence: [{ match: { s1: '영양 선생님' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 물음과 대답해 줄 사람 잇기', minutes: 13, tool: 'mindmap',
            teacher: '"이 물음에 가장 잘 대답해 주실 분은 누구일까요?" 물음 속에서 장소나 하는 일 낱말(도서관, 반찬, 다쳤을 때)을 찾아 동그라미 치게 한다. 아무나 이어도 된다고 생각하는 학생에게 "그분이 그 일을 하시나요?"를 묻는다.',
            task: '물음을 읽고, 대답해 줄 수 있는 사람 카드를 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '물음마다 대답해 줄 사람 카드를 이어 보세요.', toolOptions: { mode: 'match', topic: '누구에게 물을까?', slots: [{ id: 's1', label: '책은 몇 권까지 빌릴 수 있어요?' }, { id: 's2', label: '다쳤을 때 어떻게 치료하세요?' }], cards: ['사서 선생님', '보건 선생님'] },
                target: { match: { s1: '사서 선생님', s2: '보건 선생님' } }, difficulty: 0.1 },
              { prompt: '세 물음마다 대답해 줄 사람 카드를 이어 보세요.', toolOptions: { mode: 'match', topic: '누구에게 물을까?', slots: [{ id: 's1', label: '밤에 학교는 누가 지키세요?' }, { id: 's2', label: '국은 얼마나 큰 솥에 끓이세요?' }, { id: 's3', label: '편지는 어디를 거쳐 와요?' }], cards: ['학교 보안관님', '급식 조리사님', '집배원'] },
                target: { match: { s1: '학교 보안관님', s2: '급식 조리사님', s3: '집배원' } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['학교 보안관님', '급식 조리사님', '집배원', '제빵사'] } } },
                hints: ['물음 속에서 장소나 하는 일을 알려 주는 낱말을 찾아보세요.', '그 낱말과 관계있는 일을 하는 사람이 누구인지 견주어 보세요.', '\'밤에 학교\'는 학교를 지키는 분, \'국·솥\'은 급식을 만드는 분, \'편지\'는 편지를 나르는 분이에요.'] },
              { prompt: '"교실 창문은 누가 고쳐 주세요?"를 물어볼 수 있는 분만 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '물어볼 분', cards: ['학교 시설 주무관님', '담임 선생님', '제빵사', '택배 기사님'] },
                target: { pick: ['학교 시설 주무관님', '담임 선생님'] }, difficulty: 0.2,
                predict: { q: '담임 선생님도 이 물음에 대답해 주실 수 있을까요?', options: ['있어요', '없어요'], answer: 0 },
                conclude: '고치시는 분과 그 일을 아는 분, 두 분 모두에게 물어볼 수 있어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 언제 물어보면 좋을까', minutes: 13, tool: 'emotion',
            teacher: '"조리사님이 배식하느라 바쁘실 때 물으면 어떨까요?" 묻기 좋은 때와 나쁜 때를 견준다. 결과 칸을 읽고 그분의 마음을 말하게 한다. 끝으로 내 물음과 물어볼 분, 물어볼 때를 활동지에 함께 적게 한다.',
            task: '묻기 좋은 때를 고르고, 내 물음을 누구에게 언제 물을지 정해요.',
            levels: CARD_LV,
            items: [
              { prompt: '조리사님께 물음이 있어요. 언제 여쭈면 좋을까요?', toolOptions: { mode: 'branch', who: '하준', situation: '하준이는 조리사님께 "국은 몇 시부터 끓이세요?"를 여쭈고 싶어요. 지금은 배식 시간이라 줄이 길어요.', choices: [
                { id: 'now', text: '배식 줄 앞에서 바로 여쭈어요', result: '조리사님이 바빠서 대답하기 어려우세요.', mood: '걱정', why: '배식하느라 바쁘실 때 물으면 조리사님은 어떤 마음일까요?' },
                { id: 'later', text: '선생님과 함께 배식이 끝난 뒤 여쭈어요', result: '조리사님이 웃으며 천천히 대답해 주세요.', mood: '기쁨' },
                { id: 'shout', text: '멀리서 큰 소리로 물어요', result: '둘레 친구들이 놀라고 조리사님은 잘 못 들으세요.', mood: '놀람', why: '큰 소리로 멀리서 물으면 잘 들릴까요?' }] }, target: { choice: 'later' }, difficulty: 0.1 },
              { prompt: '물음을 받은 분의 마음 카드를 놓아 보세요.', toolOptions: { cards: ['기쁨', '짜증', '편안함'], slots: [{ id: 's1', label: '바쁘지 않을 때 공손하게 물어 온 서아' }, { id: 's2', label: '바쁜데 자꾸 옷을 잡아당기며 묻는 아이' }] },
                target: { match: { s1: ['기쁨', '편안함'], s2: '짜증' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['기쁨', '짜증', '편안함', '무서움'] } } } },
              { prompt: '내 물음, 물어볼 분, 물어볼 때를 활동지에 적고 짝과 바꿔 읽은 뒤 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"내 물음을 누구에게 물어보기로 했나요?" 물어볼 분이 같은 학생끼리 모둠을 만들어 다음 시간 연습으로 잇는다. 출구 1번을 틀린 학생은 물음 속 낱말에 동그라미를 다시 치게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '누구에게 물을까?', slots: [{ id: 'e1', label: '빵 반죽은 어떻게 하세요?' }, { id: 'e2', label: '불이 나면 몇 분 만에 출동하세요?' }], cards: ['제빵사', '소방관'] }, prompt: '두 물음에 대답해 줄 사람 카드를 이어 보세요.', target: { match: { e1: '제빵사', e2: '소방관' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '어른께 무엇을 여쭐 때 알맞은 때는?', options: ['바쁘지 않으실 때', '아주 바쁘실 때', '아무 때나'], answer: 0, difficulty: 0.1, explain: '바쁘지 않으실 때 여쭈면 천천히 대답해 주실 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '누구에게 물어볼까요',
      items: [
        { type: 'figure', wide: true, prompt: '물음과 대답해 줄 사람을 선으로 이으세요.', tool: 'mindmap', figures: [{ options: { mode: 'match', topic: '누구에게?', slots: [{ id: 's1', label: '책은 몇 권 빌려요?' }, { id: 's2', label: '다치면 어떻게 해요?' }], cards: ['사서 선생님', '보건 선생님'] }, caption: '' }], answer: '책-사서 선생님, 다침-보건 선생님' },
        { type: 'table', prompt: '내 물음 계획을 쓰세요.', columns: ['내 물음', '물어볼 분', '물어볼 때'], rows: 1 },
        { type: 'choice', prompt: '묻기 좋은 때에 ○ 하세요.', options: ['일이 끝난 뒤', '아주 바쁠 때', '수업 중에 큰 소리로'], answer: '일이 끝난 뒤' },
        { type: 'short', prompt: '그분께 물어볼 때 첫인사를 쓰세요.' },
      ],
      easy: {
        note: '물음 속에서 장소나 하는 일을 찾아요.',
        items: [
          { type: 'choice', prompt: '"책은 몇 권 빌려요?"를 물어볼 분에 ○ 하세요.', options: ['사서 선생님', '제빵사'], answer: '사서 선생님' },
          { type: 'choice', prompt: '묻기 좋은 때에 ○ 하세요.', options: ['바쁘지 않을 때', '바쁠 때'], answer: '바쁘지 않을 때' },
          { type: 'short', prompt: '물어볼 분을 쓰세요.' },
          { type: 'short', prompt: '내 물음을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 짝에 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '모두 이은 뒤 확인을 누르고, 내 물음 계획을 써요.',
      challenge: '맞지 않는 사람 카드가 섞여 있어요. 물어볼 분을 두 분 정해 견주어 봐요.',
    },
    teacherNotes: '준비: 실제로 물어볼 수 있게 학교 안 여러 분(사서·보건·조리·보안관·시설 주무관)께 미리 인터뷰 시간을 부탁해 둔다. 자주 보이는 어려움: ① 아무에게나 물어도 된다고 여긴다 → 물음 속 낱말과 하는 일을 이어 보게 한다. ② 바쁜 때를 살피지 않는다 → 그분의 마음을 고르는 문항으로 짚는다. ③ 혼자 낯선 어른을 찾아가려 한다 → 학교 안에서 선생님과 함께 간다고 약속한다.',
  }));

  lessons.push(L(16, {
    title: '질문 카드 꾸미고 묻는 차례 연습하기',
    objective: '내 물음을 적은 질문 카드를 꾸미고, 인사부터 감사 인사까지 묻는 차례를 지켜 짝과 연습할 수 있다.',
    illustration: ART('two paper children practicing an interview, one holding a decorated question card and a pencil, the other playing a librarian with a stack of books', '여쭈어볼게요!', [
      { motif: 'flower', x: 100, y: 228, color: 'rose' }, { motif: 'house', x: 380, y: 214, color: 'sky' }, { motif: 'star', x: 240, y: 84, s: 0.6 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"갑자기 \'몇 시에 일어나세요?\' 하고만 물으면 그분은 어떤 마음일까요?" 교사가 인사 없이 묻는 모습과 인사하고 묻는 모습을 두 번 보여 준다. 시연 단추로 인사 → 묻기 → 고맙습니다 카드가 놓이는 모습을 보여 준다.',
        student: '선생님의 두 번 묻는 모습에서 다른 점을 짝에게 말해 봐요.',
        demo: { tool: 'story', options: { cards: [{ id: '인사', text: '"안녕하세요"', motif: 'sun' }, { id: '묻기', text: '"여쭈어봐도 될까요?"', motif: 'star' }, { id: '감사', text: '"고맙습니다"', motif: 'flower' }], slots: ['처음', '가운데', '끝'], shuffle: false }, sequence: [{ order: ['인사', '묻기', '감사'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 내 질문 카드 꾸미기', minutes: 12, tool: 'collage',
            teacher: '"질문 카드 가운데에는 물어볼 분의 얼굴을, 둘레에는 물음표를 꾸며요." 화면에서 꾸민 모습을 보고 종이 카드(8절 반쪽)에 내 물음을 크게 쓰고 색종이로 꾸미게 한다. 꾸미기에 오래 걸리는 학생에게는 물음 쓰기를 먼저 마치게 한다.',
            task: '물어볼 분의 얼굴과 물음표 조각으로 질문 카드를 꾸미고, 종이 카드에 내 물음을 써요.',
            levels: COL_LV,
            items: [
              { prompt: '물어볼 분의 얼굴을 가운데에 큰 동그라미로 붙이고, 둘레를 꾸민 뒤 해낸 것을 표시해 보세요.', target: { selfCheck: ['물어볼 분의 얼굴을 붙였어요', '둘레를 조각으로 꾸몄어요', '종이 카드에 내 물음을 썼어요'], minPieces: 3 }, difficulty: 0.1 },
              { prompt: '질문 카드 네 귀퉁이에 별을 하나씩 붙여 보세요. 별은 네 개 넘게 붙여도 돼요.', state: { pieces: [{ shape: 'circle', color: '노랑', size: 'l', x: 280, y: 200, r: 0 }] }, target: { has: [{ shape: 'star', min: 4 }], pieces: { min: 5 } }, difficulty: 0.15,
                levels: { easy: { toolOptions: { shapes: ['circle', 'star', 'heart'] } } } },
              { prompt: '짝에게 내 질문 카드를 보여 주고, 물음을 소리 내어 읽은 뒤 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 묻는 차례 연습', minutes: 16, tool: 'story',
            teacher: '"짝이 사서 선생님, 나는 묻는 사람이에요. 카드를 보며 차례대로 해 봐요." 받아 적기 차례에서 연필로 낱말 하나만 적어도 된다고 말한다. \'고맙습니다\'를 빼먹는 짝에게는 끝인사 카드를 손가락으로 짚어 준다. 역할을 바꿔 한 번 더 한다.',
            task: '묻는 차례 카드를 놓고, 짝과 역할을 바꾸며 묻는 연습을 해요.',
            levels: CARD_LV,
            items: [
              { prompt: '어른께 여쭈어보는 차례대로 장면 카드를 놓아 보세요.', toolOptions: { cards: [{ id: '감사', text: '"고맙습니다" 인사해요', motif: 'flower' }, { id: '인사', text: '"안녕하세요" 인사해요', motif: 'sun' }, { id: '적기', text: '들은 말을 적어요', motif: 'leaf' }, { id: '묻기', text: '질문 카드를 읽어요', motif: 'star' }] },
                target: { order: ['인사', '묻기', '적기', '감사'] }, difficulty: 0.15,
                levels: { easy: { state: { at: { '인사': 0 } } } } },
              { prompt: '처음 인사 말풍선을 완성해 보세요.', toolOptions: { mode: 'fill', cards: ['1학년', '여쭈어봐도', '빨리'], slots: [{ id: 'b1', who: '민지', motif: 'sun', label: '안녕하세요. 저는 ___ 민지예요.' }, { id: 'b2', who: '민지', motif: 'sun', label: '궁금한 것을 ___ 될까요?' }] },
                target: { fill: { b1: '1학년', b2: '여쭈어봐도' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['1학년', '여쭈어봐도', '빨리', '말해'] } } } },
              { prompt: '짝과 역할을 바꾸어 인사 → 묻기 → 받아 적기 → 감사 인사 차례로 두 번 연습하고 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"짝이 물을 때 가장 잘한 점은 무엇이었나요?" 인사, 말끝 올리기, 끝인사처럼 잘한 점을 한 가지씩 말하게 한다. 출구 1번에서 차례를 바꾼 학생은 짝과 한 번 더 해 보게 한다. 다음 시간까지 정한 분께 선생님과 함께 실제로 여쭈어 보자고 약속한다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { cards: [{ id: '적기', text: '들은 말을 적어요', motif: 'leaf' }, { id: '인사', text: '"안녕하세요"', motif: 'sun' }, { id: '감사', text: '"고맙습니다"', motif: 'flower' }] }, prompt: '여쭈어보는 차례대로 놓아 보세요.', target: { order: ['인사', '적기', '감사'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '대답을 들은 뒤 꼭 하는 말은?', options: ['"고맙습니다"', '"또 물어볼게"', '아무 말 안 해요'], answer: 0, difficulty: 0.1, explain: '시간을 내 대답해 주신 분께 고마운 마음을 전해요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '내 질문 카드',
      items: [
        { type: 'figure', wide: true, prompt: '여쭈어보는 차례대로 카드 아래에 1, 2, 3 번호를 쓰세요.', tool: 'story', figures: [{ options: { cards: [{ id: '감사', text: '"고맙습니다"', motif: 'flower' }, { id: '인사', text: '"안녕하세요"', motif: 'sun' }, { id: '묻기', text: '질문 카드를 읽어요', motif: 'star' }] }, caption: '' }], answer: '안녕하세요 1, 질문 2, 고맙습니다 3' },
        { type: 'blank', prompt: '첫인사를 완성하세요.', text: '안녕하세요. 저는 ___ 학년 ___ 이에요.', answer: '1 / (내 이름)' },
        { type: 'short', prompt: '내 질문 카드에 쓴 물음을 쓰세요.' },
        { type: 'draw', prompt: '물어볼 분의 얼굴을 그려 질문 카드를 꾸미세요.' },
      ],
      easy: {
        note: '인사로 시작해서 인사로 끝나요.',
        items: [
          { type: 'choice', prompt: '처음에 하는 말에 ○ 하세요.', options: ['"안녕하세요"', '"고맙습니다"'], answer: '"안녕하세요"' },
          { type: 'choice', prompt: '끝에 하는 말에 ○ 하세요.', options: ['"고맙습니다"', '"안녕하세요"'], answer: '"고맙습니다"' },
          { type: 'draw', prompt: '물어볼 분을 그려 보세요.' },
          { type: 'short', prompt: '내 물음을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '모양은 동그라미·별·하트 위주로 나와요. 묻는 차례는 첫 카드가 놓여 있어요.',
      base: '질문 카드를 꾸미고, 차례 카드를 모두 놓은 뒤 확인을 눌러요.',
      challenge: '모든 모양을 쓸 수 있고, 인사 빈칸에 맞지 않는 낱말이 더 섞여 있어요. 물음을 두 개 연습해요.',
    },
    teacherNotes: '준비물: 8절 반쪽 질문 카드, 색종이, 풀. 자주 보이는 어려움: ① 인사 없이 묻는다 → 차례 카드를 책상에 놓고 손가락으로 짚으며 연습한다. ② 들은 말을 다 적으려다 멈춘다 → 낱말 하나나 그림으로 적어도 된다고 말한다(다음 시간에 더 연습). ③ 꾸미기에 시간을 다 쓴다 → 물음 쓰기를 먼저 마치게 한다. 실제 인터뷰는 반드시 교사가 함께하거나 미리 약속된 학교 안 분께만 한다.',
  }));

  // ───────────────────────── 17~20차시: 묻고 들은 것 적고 읽기(관찰과 자료 읽기) ─────────────────────────

  lessons.push(L(17, {
    title: '들은 대답을 낱말과 그림으로 적기',
    objective: '어른의 대답을 듣고 중요한 낱말이나 그림으로 짧게 적어, 적은 것을 보고 들은 내용을 다시 말할 수 있다.',
    illustration: ART('a paper baker in a white hat talking while a child writes a few words and draws a small bread on a notepad', '낱말 하나만 적어도 돼요', [
      { motif: 'house', x: 110, y: 214, color: 'buttercup' }, { motif: 'moon', x: 80, y: 70, s: 0.5 }, { motif: 'flower', x: 380, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"선생님이 지금부터 빵집 아저씨가 되어 대답할게요. 다 받아 적을 수 있을까요?" 아주 빠르게 길게 말해 보이고 "다 못 적겠지요? 그럼 어떻게 하면 될까요?"라고 묻는다. "중요한 낱말 하나, 그림 하나만 적어도 돼요." 시연 단추로 대답 속 낱말 카드가 바구니에 들어가는 모습을 보여 준다.',
        student: '선생님 말을 다 적을 수 있을지 손을 들어 대답해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'pick', topic: '빵집 아저씨', basket: '대답에 나온 낱말', cards: ['새벽', '수영'], shuffle: false }, sequence: [{ pick: ['새벽'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 대답에서 중요한 낱말 찾기', minutes: 13, tool: 'mindmap',
            teacher: '선생님이 빵집 아저씨가 되어 문항의 대답을 천천히 두 번 읽어 준다. "대답에 나온 낱말을 손가락으로 짚어 볼까요?" 대답에 없는 낱말을 \'빵집이니까\' 고르는 학생에게 "아저씨가 그 말을 하셨나요?"라고 되묻는다.',
            task: '대답을 듣고 읽은 뒤, 대답에 나온 낱말을 골라 메모 빈칸에 넣어요.',
            levels: CARD_LV,
            items: [
              { prompt: '빵집 아저씨: "새벽에 일어나 반죽을 하고 오븐에 빵을 구워요." 대답에 나온 낱말만 골라 보세요.', toolOptions: { mode: 'pick', topic: '빵집 아저씨', basket: '대답에 나온 낱말', cards: ['새벽', '반죽', '오븐', '자전거', '수영장'] },
                target: { pick: ['새벽', '반죽', '오븐'] }, difficulty: 0.1 },
              { prompt: '사서 선생님: "날마다 새 책에 번호를 붙이고, 돌아온 책을 책꽂이에 꽂아요." 대답에 나온 낱말만 골라 보세요.', toolOptions: { mode: 'pick', topic: '사서 선생님', basket: '대답에 나온 낱말', cards: ['번호', '책꽂이', '새 책', '운동장', '급식'] },
                target: { pick: ['번호', '책꽂이', '새 책'] }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['번호', '책꽂이', '새 책', '운동장', '급식', '그림'] } } } },
              { prompt: '보건 선생님: "다친 곳을 깨끗이 씻고 약을 발라요. 많이 다치면 부모님께 전화해요." 들은 것과 맞지 않는 메모만 골라 보세요.', toolOptions: { mode: 'pick', topic: '보건 선생님 메모', basket: '맞지 않는 메모', cards: ['다친 곳 씻기', '약 바르기', '부모님께 전화', '주사 놓기'] },
                target: { pick: ['주사 놓기'] }, difficulty: 0.2,
                predict: { q: '\'주사 놓기\'는 선생님이 말씀하신 것일까요?', options: ['말씀하셨어요', '안 하셨어요'], answer: 1 },
                conclude: '메모에는 들은 말만 적어요. 내 생각은 따로 적어요.',
                hints: ['대답을 처음부터 다시 읽고, 메모 카드마다 대답 속에 있는지 찾아보세요.', '대답에 없는 일을 한다고 적은 메모가 있는지 살펴보세요.', '대답에는 씻기, 약 바르기, 전화하기만 나와요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 못 들었을 때와 메모하기', minutes: 13, tool: 'story',
            teacher: '"말이 빨라서 못 적었어요. 그럴 때 뭐라고 여쭐까요?" 말풍선을 채운 뒤 직접 말해 보게 한다. 마지막 문항에서는 선생님이 급식 조리사님 역할로 대답을 들려주고, 활동지 메모 칸에 낱말 두 개나 그림 하나를 적게 한다.',
            task: '다시 여쭈는 말을 완성하고, 선생님의 대답을 들으며 낱말과 그림으로 메모해요.',
            levels: CARD_LV,
            items: [
              { prompt: '말이 빨라 못 적었을 때 다시 여쭈는 말을 완성해 보세요.', toolOptions: { mode: 'fill', cards: ['천천히', '다시', '빨리'], slots: [{ id: 'b1', who: '준호', motif: 'leaf', label: '죄송하지만 ___ 말씀해 주시겠어요?' }, { id: 'b2', who: '준호', motif: 'leaf', label: '조금 ___ 말씀해 주세요.' }] },
                target: { fill: { b1: ['다시', '천천히'], b2: '천천히' } }, difficulty: 0.15 },
              { prompt: '대답을 듣고 메모하는 차례대로 카드를 놓아 보세요.', toolOptions: { cards: [{ id: '읽기', text: '메모를 보고 다시 말해요', motif: 'star' }, { id: '듣기', text: '대답을 끝까지 들어요', motif: 'leaf' }, { id: '적기', text: '중요한 낱말을 적어요', motif: 'flower' }] },
                target: { order: ['듣기', '적기', '읽기'] }, difficulty: 0.1,
                levels: { challenge: { prompt: '대답을 듣고 메모하는 차례대로 카드 네 장을 놓아 보세요.', toolOptions: { cards: [{ id: '읽기', text: '메모를 보고 다시 말해요', motif: 'star' }, { id: '듣기', text: '대답을 끝까지 들어요', motif: 'leaf' }, { id: '적기', text: '중요한 낱말을 적어요', motif: 'flower' }, { id: '인사', text: '"안녕하세요" 인사해요', motif: 'sun' }] },
                  target: { order: ['인사', '듣기', '적기', '읽기'] } } } },
              { prompt: '선생님이 조리사님이 되어 들려주는 대답을 듣고, 활동지 메모 칸에 낱말 두 개나 그림 하나를 적은 뒤 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"메모를 보고 조리사님 대답을 다시 말해 볼 사람?" 낱말 두 개만 적은 학생도 다시 말할 수 있었다는 것을 칭찬한다. 출구 1번에서 대답에 없는 낱말을 고른 학생과 대답을 한 번 더 읽는다. 다음 시간에는 여러 사람의 대답을 견주어 본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '경비 아저씨', basket: '대답에 나온 낱말', cards: ['문', '밤', '택배', '수박'] }, prompt: '경비 아저씨: "밤에는 문을 잠그고, 낮에는 택배를 받아 두어요." 대답에 나온 낱말만 골라 보세요.', target: { pick: ['문', '밤', '택배'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '어른의 대답이 길 때 어떻게 적을까요?', options: ['적지 않아요', '중요한 낱말이나 그림만 적어요', '다 적을 때까지 기다리게 해요'], answer: 1, difficulty: 0.1, explain: '낱말 하나, 그림 하나로도 들은 것을 기억할 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '들은 대답 메모하기',
      items: [
        { type: 'figure', wide: true, prompt: '빵집 아저씨 대답 "새벽에 반죽을 해요"에 나온 낱말에 ○ 하세요.', tool: 'mindmap', figures: [{ options: { mode: 'pick', topic: '빵집 아저씨', basket: '나온 낱말', cards: ['새벽', '반죽', '수영장'] }, caption: '' }], answer: '새벽, 반죽' },
        { type: 'table', prompt: '조리사님 대답 메모', columns: ['들은 낱말', '그림'], rows: 2 },
        { type: 'blank', prompt: '다시 여쭈는 말을 쓰세요.', text: '죄송하지만 ___ 말씀해 주시겠어요?', answer: '다시 / 천천히' },
        { type: 'short', prompt: '메모를 보고 들은 것을 한 문장으로 쓰세요.' },
      ],
      easy: {
        note: '낱말 하나, 그림 하나만 적어도 돼요.',
        items: [
          { type: 'choice', prompt: '대답이 길 때 알맞은 것에 ○ 하세요.', options: ['중요한 낱말만 적어요', '안 적어요'], answer: '중요한 낱말만 적어요' },
          { type: 'choice', prompt: '못 들었을 때 하는 말에 ○ 하세요.', options: ['"다시 말씀해 주시겠어요?"', '"몰라요"'], answer: '"다시 말씀해 주시겠어요?"' },
          { type: 'draw', prompt: '들은 대답을 그림으로 그려 보세요.' },
          { type: 'short', prompt: '들은 낱말 하나를 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '고른 카드가 맞으면 초록 테두리가 생겨요. 메모는 그림 하나로 해도 돼요.',
      base: '모두 고른 뒤 확인을 누르고, 메모 칸에 낱말 두 개를 적어요.',
      challenge: '대답에 없는 낱말이 더 섞여 있고, 메모 차례가 네 단계예요. 메모를 보고 두 문장으로 다시 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 어른의 말은 어려워서 적을 수 없다고 여긴다 → 낱말 하나·그림 하나 메모로 다시 말하는 경험을 하게 한다. ② 대답에 없는 내 생각을 메모에 섞는다 → "그분이 그 말을 하셨나요?"로 들은 것과 생각을 나눈다. ③ 못 들은 것을 묻기 부끄러워한다 → 다시 여쭈는 말을 함께 소리 내어 연습한다. 실제 인터뷰를 다녀온 학생은 그 메모를 들고 와 다시 말하게 한다.',
  }));

  lessons.push(L(18, {
    title: '여러 분의 대답에서 같은 말 찾기',
    objective: '세 분의 대답을 견주어 여러 분이 함께 한 말을 찾아 표시하고, 그 말이 무엇을 뜻하는지 말할 수 있다.',
    illustration: ART('three paper speech bubbles from a mail carrier, a firefighter and a school cook, with the same word highlighted in each bubble', '모두 같은 말을 했어요', [
      { motif: 'house', x: 90, y: 214, color: 'sky' }, { motif: 'house', x: 240, y: 214, color: 'rose' }, { motif: 'house', x: 390, y: 214, color: 'buttercup' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"지난 시간 메모를 보면, 친구마다 다른 분을 만났어요. 그런데 다들 비슷한 말을 들은 것 같아요." 메모 두세 장을 칠판에 붙이고 같은 낱말에 동그라미를 친다. 시연 단추로 \'사람들\' 카드가 \'세 분 모두 말했어요\' 가지로 가는 모습을 보여 준다.',
        student: '짝의 메모와 내 메모에서 같은 낱말이 있는지 찾아봐요.',
        demo: { tool: 'mindmap', options: { topic: '같은 말 찾기', slots: ['모두 말했어요', '한 분만 말했어요'], cards: ['사람들', '편지'], shuffle: false }, sequence: [{ sort: { '모두 말했어요': ['사람들'], '한 분만 말했어요': ['편지'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 세 대답에 모두 나온 말', minutes: 14, tool: 'mindmap',
            teacher: '대답 세 개를 한 줄씩 읽어 주고 칠판에도 붙인다. "이 낱말은 몇 분의 대답에 나왔나요? 손가락으로 세어 봐요." 한 대답에만 나온 낱말을 \'모두\'에 넣는 학생에게 대답마다 손가락으로 짚어 다시 세게 한다.',
            task: '세 분의 대답을 읽고, 낱말이 세 분 모두에게 나왔는지 한 분에게만 나왔는지 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '집배원 "사람들 편지를 날라요" · 소방관 "사람들을 불에서 지켜요" · 조리사 "사람들 밥을 지어요". 낱말을 나누어 보세요.', toolOptions: { topic: '같은 말 찾기', slots: ['세 분 모두 말했어요', '한 분만 말했어요'], cards: ['사람들', '편지', '불', '밥'] },
                target: { sort: { '세 분 모두 말했어요': ['사람들'], '한 분만 말했어요': ['편지', '불', '밥'] } }, difficulty: 0.15 },
              { prompt: '버스 기사 "아침 일찍 첫차를 몰아요" · 환경미화원 "아침 일찍 거리를 쓸어요" · 제빵사 "아침 일찍 빵을 구워요". 낱말을 나누어 보세요.', toolOptions: { topic: '같은 말 찾기', slots: ['세 분 모두 말했어요', '한 분만 말했어요'], cards: ['아침 일찍', '첫차', '거리', '빵'] },
                target: { sort: { '세 분 모두 말했어요': ['아침 일찍'], '한 분만 말했어요': ['첫차', '거리', '빵'] } }, difficulty: 0.15,
                levels: { challenge: { prompt: '버스 기사 "아침 일찍 첫차를 몰아요" · 환경미화원 "아침 일찍 거리를 쓸어요" · 제빵사 "아침 일찍 빵을 구워요". 낱말 다섯 장을 나누어 보세요.', toolOptions: { cards: ['아침 일찍', '첫차', '거리', '빵', '밤 늦게'] },
                  target: { sort: { '세 분 모두 말했어요': ['아침 일찍'], '한 분만 말했어요': ['첫차', '거리', '빵'] } } } },
                hints: ['낱말 하나를 고르고, 세 대답에 그 낱말이 있는지 차례로 찾아보세요.', '세 대답에 모두 있는 낱말은 하나뿐이에요. 대답에 아예 없는 낱말은 남겨 두어요.', '세 대답 모두 "아침 일찍"으로 시작해요.'] },
              { prompt: '사서 "아이들이 책을 좋아하면 기뻐요" · 보건 선생님 "아이들이 안 다치면 기뻐요" · 보안관 "아이들이 안전하면 기뻐요". 모두 말한 낱말만 골라 보세요.', toolOptions: { mode: 'pick', topic: '같은 말 찾기', basket: '모두 말한 낱말', cards: ['아이들', '기뻐요', '책', '안전'] },
                target: { pick: ['아이들', '기뻐요'] }, difficulty: 0.2,
                predict: { q: '세 분이 모두 말한 낱말은 몇 개일까요?', options: ['한 개', '두 개'], answer: 1 },
                conclude: '여러 분이 함께 한 말에는 그분들이 소중히 여기는 것이 담겨 있어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 같은 말 속의 마음', minutes: 12, tool: 'emotion',
            teacher: '"세 분 모두 \'사람들\'을 위해 일한다고 하셨어요. 그분들은 어떤 마음으로 일하실까요?" 대답 속 마음 낱말(기뻐요, 뿌듯해요)을 먼저 찾게 한다. 대답에 마음 낱말이 없으면 그분의 얼굴과 목소리를 떠올리게 한다.',
            task: '대답 속 마음 낱말을 찾아 그분의 마음 카드를 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '대답을 읽고 그분의 마음 카드를 놓아 보세요.', toolOptions: { cards: ['기쁨', '뿌듯함', '걱정'], slots: [{ id: 's1', label: '집배원: "편지를 받은 분이 웃으면 기뻐요"' }, { id: 's2', label: '소방관: "비 오는 날 미끄러질까 걱정돼요"' }] },
                target: { match: { s1: '기쁨', s2: '걱정' } }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['기쁨', '뿌듯함', '걱정', '화남'] } } } },
              { prompt: '세 분의 대답에 같이 나온 마음을 골라 보세요. 조리사 "다 먹은 식판을 보면 뿌듯해요" · 사서 "책을 고른 아이를 보면 뿌듯해요" · 보안관 "아이들이 무사히 가면 뿌듯해요"', toolOptions: { mode: 'pick', basket: '같이 나온 마음', cards: ['뿌듯함', '무서움', '짜증', '외로움'] },
                target: { pick: ['뿌듯함'] }, difficulty: 0.15 },
              { prompt: '환경미화원이 "깨끗해진 길을 보면 기분이 좋아요"라고 하셨어요. 그분의 기쁜 마음 크기를 골라 보세요.', toolOptions: { mode: 'scale', situation: '환경미화원이 새벽부터 쓴 길이 깨끗해졌어요. 지나가던 아이가 "고맙습니다" 하고 인사했어요.', feeling: '기쁨', after: '우리가 건넨 인사 한마디가 그분의 하루를 기쁘게 해요.' }, target: { level: [3, 5] }, difficulty: 0.1,
                levels: { easy: { toolOptions: { steps: 3 }, prompt: '깨끗해진 길에서 아이가 "고맙습니다" 했어요. 환경미화원의 기쁜 마음을 세 칸에서 골라 보세요.', target: { level: [2, 3] } } } },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"여러 분이 함께 한 말을 찾아보니 무엇을 알게 되었나요?" \'사람들을 위해\', \'아침 일찍\'처럼 찾은 말을 칠판에 남긴다. 출구 1번에서 한 대답에만 나온 낱말을 고른 학생과 세 대답을 함께 짚어 센다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '같은 말 찾기', basket: '모두 말한 낱말', cards: ['손님', '약', '버스', '꽃'] }, prompt: '약사 "손님께 약을 드려요" · 버스 기사 "손님을 태워요" · 꽃집 "손님께 꽃을 팔아요". 모두 말한 낱말만 골라 보세요.', target: { pick: ['손님'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '여러 분의 대답에서 같은 말을 찾는 방법은?', options: ['낱말마다 대답에 있는지 하나씩 세어요', '가장 긴 대답만 읽어요', '처음 대답만 읽어요'], answer: 0, difficulty: 0.15, explain: '낱말 하나를 정해 대답마다 있는지 세어 보면 같은 말을 찾을 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '같은 말 찾기',
      items: [
        { type: 'figure', wide: true, prompt: '세 분 모두 말한 낱말과 한 분만 말한 낱말을 선으로 이으세요.', tool: 'mindmap', figures: [{ options: { topic: '같은 말', slots: ['모두 말했어요', '한 분만'], cards: ['사람들', '편지', '불'] }, caption: '' }], answer: '사람들-모두, 편지·불-한 분만' },
        { type: 'table', prompt: '세 분의 대답에서 같은 말을 찾아 쓰세요.', columns: ['대답한 분', '같은 말'], cells: [['집배원', ''], ['소방관', ''], ['조리사', '']] },
        { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '세 분은 모두 ___ 을 위해 일해요.', answer: '사람들' },
        { type: 'short', prompt: '같은 말을 찾고 알게 된 것을 쓰세요.' },
      ],
      easy: {
        note: '낱말 하나를 정하고 대답마다 있는지 세어요.',
        items: [
          { type: 'choice', prompt: '"사람들 편지" · "사람들 밥" 두 대답에 모두 있는 낱말에 ○ 하세요.', options: ['사람들', '편지'], answer: '사람들' },
          { type: 'choice', prompt: '"편지를 받은 분이 웃으면 기뻐요"의 마음에 ○ 하세요.', options: ['기쁨', '화남'], answer: '기쁨' },
          { type: 'draw', prompt: '사람들을 위해 일하는 분을 그려 보세요.' },
          { type: 'short', prompt: '찾은 같은 말을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 마음 크기는 세 칸이에요.',
      base: '모두 나눈 뒤 확인을 눌러요. 낱말마다 몇 분이 말했는지 세어요.',
      challenge: '대답에 없는 낱말 카드가 섞여 있어 골라내야 해요. 찾은 같은 말의 뜻을 한 문장으로 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 한 대답에만 나온 낱말도 \'모두\'라고 한다 → 대답마다 손가락을 하나씩 접으며 센다. ② 대답에 없는 낱말을 뜻이 비슷하다며 고른다 → 오늘은 \'똑같은 말\'을 찾는다고 기준을 다시 말한다. ③ 같은 말을 찾고 끝낸다 → "그 말에서 무엇을 알 수 있나요?"까지 묻는다.',
  }));

  lessons.push(L(19, {
    title: '동네에서 일하는 분의 하루 따라가 보기',
    objective: '동네에서 일하는 분의 하루 이야기를 읽고 일의 차례를 정리하며, 그분 덕분에 우리가 하는 일을 이을 수 있다.',
    illustration: ART('a paper street cleaner at dawn sweeping a road under a fading moon, then at noon resting under a tree, the street sparkling clean', '그분의 하루', [
      { motif: 'moon', x: 80, y: 70, s: 0.5 }, { motif: 'tree', x: 380, y: 214 }, { motif: 'house', x: 200, y: 214, color: 'lavender' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"우리가 자고 있는 새벽에 일하시는 분이 있어요. 누구일까요?" 환경미화원, 제빵사, 첫차 버스 기사처럼 대답을 듣는다. 시연 단추로 환경미화원의 하루 카드가 차례대로 놓이는 모습을 보여 준다. 이야기는 선생님이 지은 것이고, 실제로 하시는 일은 분마다 조금씩 다를 수 있다고 말한다.',
        student: '우리가 자는 새벽에 일하는 분을 한 분 떠올려 봐요.',
        demo: { tool: 'story', options: { cards: [{ id: '새벽', text: '새벽에 길을 쓸어요', motif: 'moon' }, { id: '낮', text: '낮에 쓰레기를 실어요', motif: 'sun' }], slots: ['먼저', '나중'], shuffle: false }, sequence: [{ order: ['새벽', '낮'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 하루 이야기 차례 정하기', minutes: 13, tool: 'story',
            teacher: '이야기를 천천히 읽어 준다. "새벽, 아침, 낮, 저녁 가운데 언제 하신 일이에요?" 때를 나타내는 낱말에 동그라미를 치게 한다. 그림만 보고 놓는 학생에게 카드 속 때 낱말을 소리 내어 읽게 한다.',
            task: '일하는 분의 하루 이야기를 읽고, 때를 나타내는 낱말을 보며 차례대로 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '환경미화원 아저씨의 하루를 차례대로 놓아 보세요.', toolOptions: { cards: [{ id: '낮', text: '낮에 쓰레기차에 실어요', motif: 'sun' }, { id: '새벽', text: '새벽에 큰길을 쓸어요', motif: 'moon' }, { id: '저녁', text: '저녁에 집에서 쉬어요', motif: 'house' }, { id: '아침', text: '아침에 골목 쓰레기를 모아요', motif: 'cloud' }] },
                target: { order: ['새벽', '아침', '낮', '저녁'] }, difficulty: 0.15,
                levels: { easy: { state: { at: { '새벽': 0 } } } } },
              { prompt: '첫차 버스 기사님의 하루를 차례대로 놓아 보세요.', toolOptions: { cards: [{ id: '운전', text: '해 뜰 무렵 첫 손님을 태워요', motif: 'sun' }, { id: '점검', text: '깜깜한 새벽에 버스 바퀴를 살펴요', motif: 'moon' }, { id: '교대', text: '점심때 다음 기사님과 바꿔요', motif: 'cloud' }] },
                target: { order: ['점검', '운전', '교대'] }, difficulty: 0.15 },
              { prompt: '약국 약사님의 하루를 차례대로 놓아 보세요.', toolOptions: { cards: [{ id: '정리', text: '문을 닫고 약을 정리해요', motif: 'moon' }, { id: '열기', text: '아침 아홉 시에 약국 문을 열어요', motif: 'sun' }, { id: '상담', text: '낮에 아픈 분께 약을 설명해요', motif: 'cloud' }, { id: '받기', text: '아침에 새로 온 약을 받아요', motif: 'leaf' }] },
                target: { order: ['열기', '받기', '상담', '정리'] }, difficulty: 0.25,
                levels: { easy: { state: { at: { '열기': 0 } } } },
                hints: ['카드마다 때를 알려 주는 낱말이나 일의 앞뒤를 찾아보세요.', '문을 열어야 약을 받을 수 있고, 문을 닫는 일은 하루 끝이에요.', '문 열기 → 새 약 받기 → 낮에 설명하기 → 문 닫고 정리하기 차례예요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 그분 덕분에 우리가 하는 일', minutes: 13, tool: 'mindmap',
            teacher: '"환경미화원 아저씨 덕분에 우리는 무엇을 할 수 있나요?" \'깨끗한 길로 학교에 와요\'처럼 우리 생활과 잇게 한다. 그분이 하는 일과 우리가 하게 된 일을 헷갈리는 학생에게 "그건 그분이 하신 일, 우리는 그 덕분에 무엇을 하지?"로 나누어 묻는다.',
            task: '일하는 분과 그분 덕분에 우리가 할 수 있는 일을 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '일하는 분과 그분 덕분에 우리가 할 수 있는 일을 이어 보세요.', toolOptions: { mode: 'match', topic: '덕분에', slots: [{ id: 's1', label: '환경미화원' }, { id: 's2', label: '첫차 버스 기사' }, { id: 's3', label: '약사' }], cards: ['깨끗한 길로 학교에 와요', '아침 일찍 할머니 댁에 가요', '감기약을 바르게 먹어요'] },
                target: { match: { s1: '깨끗한 길로 학교에 와요', s2: '아침 일찍 할머니 댁에 가요', s3: '감기약을 바르게 먹어요' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['깨끗한 길로 학교에 와요', '아침 일찍 할머니 댁에 가요', '감기약을 바르게 먹어요', '혼자 비행기를 몰아요'] } } } },
              { prompt: '그분이 하신 일과 그 덕분에 우리가 하게 된 일로 나누어 보세요.', toolOptions: { topic: '제빵사', slots: ['제빵사가 한 일', '덕분에 우리가 한 일'], cards: ['새벽에 빵을 구웠어요', '반죽을 했어요', '아침에 따뜻한 빵을 먹었어요', '생일 케이크로 잔치를 했어요'] },
                target: { sort: { '제빵사가 한 일': ['새벽에 빵을 구웠어요', '반죽을 했어요'], '덕분에 우리가 한 일': ['아침에 따뜻한 빵을 먹었어요', '생일 케이크로 잔치를 했어요'] } }, difficulty: 0.2 },
              { prompt: '그분들께 고마운 마음을 전하는 행동만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '고마움을 전해요', cards: ['환경미화원께 "고맙습니다" 인사해요', '쓰레기를 쓰레기통에 버려요', '버스에서 큰 소리로 떠들어요', '길에 껌을 뱉어요'] },
                target: { pick: ['환경미화원께 "고맙습니다" 인사해요', '쓰레기를 쓰레기통에 버려요'] }, difficulty: 0.15,
                predict: { q: '쓰레기를 쓰레기통에 버리는 것도 고마움을 전하는 일일까요?', options: ['그래요', '아니에요'], answer: 0 },
                conclude: '그분들의 일을 덜어 드리는 행동도 고마움을 전하는 방법이에요.' },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"우리가 자는 동안에도, 노는 동안에도 우리를 위해 일하시는 분들이 있어요. 내일 그분들을 만나면 무엇을 할까요?" 출구 1번에서 차례를 바꾼 학생에게 때 낱말을 다시 찾게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { cards: [{ id: '배달', text: '낮에 집집마다 편지를 날라요', motif: 'sun' }, { id: '분류', text: '아침에 우체국에서 편지를 나눠요', motif: 'cloud' }, { id: '정리', text: '저녁에 남은 편지를 정리해요', motif: 'moon' }] }, prompt: '집배원의 하루를 차례대로 놓아 보세요.', target: { order: ['분류', '배달', '정리'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '"새벽에 빵을 구웠어요"는 누가 한 일일까요?', options: ['제빵사', '덕분에 빵을 먹은 우리'], answer: 0, difficulty: 0.1, explain: '빵을 구운 것은 제빵사이고, 우리는 그 덕분에 빵을 먹어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '그분의 하루',
      items: [
        { type: 'figure', wide: true, prompt: '환경미화원의 하루를 차례대로 카드 아래에 1, 2, 3 번호를 쓰세요.', tool: 'story', figures: [{ options: { cards: [{ id: '낮', text: '낮에 쓰레기를 실어요', motif: 'sun' }, { id: '새벽', text: '새벽에 길을 쓸어요', motif: 'moon' }, { id: '저녁', text: '저녁에 쉬어요', motif: 'house' }] }, caption: '' }], answer: '새벽 1, 낮 2, 저녁 3' },
        { type: 'table', prompt: '그분 덕분에 우리가 하는 일을 쓰세요.', columns: ['일하는 분', '덕분에 우리가 하는 일'], cells: [['환경미화원', ''], ['약사', '']] },
        { type: 'check', prompt: '고마움을 전하는 행동에 ✓ 하세요.', options: ['"고맙습니다" 인사하기', '쓰레기 바르게 버리기', '길에 껌 뱉기'] },
        { type: 'short', prompt: '내일 만날 일하는 분께 할 말을 쓰세요.' },
      ],
      easy: {
        note: '새벽 → 아침 → 낮 → 저녁 차례예요.',
        items: [
          { type: 'choice', prompt: '먼저 하는 일에 ○ 하세요.', options: ['새벽에 길 쓸기', '저녁에 쉬기'], answer: '새벽에 길 쓸기' },
          { type: 'choice', prompt: '고마움을 전하는 행동에 ○ 하세요.', options: ['쓰레기통에 버리기', '길에 버리기'], answer: '쓰레기통에 버리기' },
          { type: 'draw', prompt: '일하는 분의 모습을 그려 보세요.' },
          { type: 'short', prompt: '그분께 할 말을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 초록 테두리가 생기고, 하루의 첫 카드가 놓여 있어요.',
      base: '차례를 모두 놓은 뒤 확인을 눌러요. 때 낱말에 동그라미를 쳐요.',
      challenge: '맞지 않는 카드가 섞여 있어요. 그분의 하루를 내 말로 이어서 이야기해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 그분이 한 일과 우리가 하게 된 일을 섞는다 → 누가 한 일인지 주어를 먼저 찾게 한다. ② 그림만 보고 차례를 놓는다 → 카드 속 때 낱말(새벽·아침·낮·저녁)을 소리 내어 읽게 한다. ③ 하루 이야기를 모든 분이 똑같이 한다고 여긴다 → 지은 이야기이며 실제로는 분마다 다르다고 말해 준다.',
  }));

  lessons.push(L(20, {
    title: '그림 자료에서 서로 돕는 모습 찾기',
    objective: '시장과 동네 그림 자료를 보고 서로 돕는 모습을 찾아, 도움을 준 사람과 받은 사람을 말할 수 있다.',
    illustration: ART('a busy paper market street where a fruit seller hands apples to a grandmother, a child holds a door for a woman with a stroller, and a delivery worker carries boxes', '누가 누구를 도울까요?', [
      { motif: 'house', x: 100, y: 214, color: 'peach' }, { motif: 'tree', x: 240, y: 214 }, { motif: 'house', x: 380, y: 214, color: 'mint' }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"이 그림에서 누가 누구를 돕고 있나요?" 삽화를 띄우고 학생이 손가락으로 짚게 한다. 시연 단추로 \'유모차 문 잡아 주기\' 장면이 \'서로 돕는 모습\' 바구니에 들어가는 모습을 보여 준다. 도움을 준 사람과 받은 사람을 둘 다 말하게 한다.',
        student: '그림에서 누군가를 돕는 사람을 손가락으로 짚어 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'pick', topic: '시장 그림', basket: '서로 돕는 모습', cards: [{ id: '문', text: '유모차를 위해 문을 잡아 줘요', motif: 'house' }, { id: '낮잠', text: '고양이가 낮잠을 자요', motif: 'sun' }], shuffle: false }, sequence: [{ pick: ['문'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 그림 속 돕는 모습 고르기', minutes: 12, tool: 'mindmap',
            teacher: '"이 장면에서 누군가가 힘든 일을 덜었나요?" 장면 카드마다 도움을 받은 사람이 있는지 묻는다. 그냥 일하는 모습(장사하기)과 돕는 모습을 헷갈리면 "누가 편해졌나요?"를 다시 묻는다.',
            task: '그림 장면 카드를 보고 서로 돕는 모습만 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '시장 그림의 장면 가운데 서로 돕는 모습만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '시장 그림', basket: '서로 돕는 모습', cards: [{ id: '짐', text: '상인이 할머니 짐을 들어 드려요', motif: 'house' }, { id: '길', text: '아이가 길 잃은 동생 손을 잡아요', motif: 'star' }, { id: '구름', text: '하늘에 구름이 떠 있어요', motif: 'cloud' }, { id: '꽃', text: '화분에 꽃이 피었어요', motif: 'flower' }] },
                target: { pick: ['짐', '길'] }, difficulty: 0.1 },
              { prompt: '공원 그림의 장면 가운데 서로 돕는 모습만 골라 보세요.', toolOptions: { mode: 'pick', topic: '공원 그림', basket: '서로 돕는 모습', cards: [{ id: '공', text: '넘어진 친구를 일으켜 줘요', motif: 'leaf' }, { id: '쓰레기', text: '떨어진 쓰레기를 주워 버려요', motif: 'tree' }, { id: '그네', text: '혼자 그네를 타요', motif: 'sun' }, { id: '나무', text: '큰 나무가 서 있어요', motif: 'tree' }] },
                target: { pick: ['공', '쓰레기'] }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: [{ id: '공', text: '넘어진 친구를 일으켜 줘요', motif: 'leaf' }, { id: '쓰레기', text: '떨어진 쓰레기를 주워 버려요', motif: 'tree' }, { id: '그네', text: '혼자 그네를 타요', motif: 'sun' }, { id: '나무', text: '큰 나무가 서 있어요', motif: 'tree' }, { id: '새', text: '새가 노래해요', motif: 'bird' }] } } },
                hints: ['장면마다 "이 일로 누가 편해졌나요?" 하고 물어보세요.', '사람이 나오지 않거나 혼자 노는 장면에는 도움을 받은 사람이 없어요.', '쓰레기를 주우면 공원을 쓰는 모두가 편해져요. 그것도 돕는 모습이에요.'] },
              { prompt: '장면마다 도움을 받은 사람 카드를 이어 보세요.', toolOptions: { mode: 'match', topic: '누가 도움을 받았나?', slots: [{ id: 's1', label: '상인이 짐을 들어 드려요' }, { id: 's2', label: '아이가 유모차를 위해 문을 잡아요' }], cards: ['할머니', '아기 엄마'] },
                target: { match: { s1: '할머니', s2: '아기 엄마' } }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 도움을 주고받은 마음', minutes: 14, tool: 'emotion',
            teacher: '"도움을 받은 할머니는 어떤 마음일까요? 도와준 상인은요?" 두 사람의 마음을 따로 고르게 한다. 짝과 그림 속 장면 하나를 골라 몸으로 해 본 뒤, 도움을 받은 역할을 해 본 학생에게 그때 마음을 묻는다.',
            task: '그림 속 도움을 주고받은 두 사람의 마음을 고르고, 짝과 장면을 몸으로 해 봐요.',
            levels: CARD_LV,
            items: [
              { prompt: '도움을 받은 사람과 도운 사람의 마음 카드를 놓아 보세요.', toolOptions: { cards: ['고마움', '뿌듯함', '심심함'], slots: [{ id: 's1', label: '짐을 받아 든 상인을 본 할머니' }, { id: 's2', label: '할머니의 웃음을 본 상인' }] },
                target: { match: { s1: '고마움', s2: '뿌듯함' } }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['고마움', '뿌듯함', '심심함', '무서움'] } } } },
              { prompt: '길 잃은 동생이 울고 있어요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '서아', situation: '시장에서 다섯 살쯤 된 아이가 엄마를 잃고 울고 있어요.', choices: [
                { id: 'take', text: '내가 아이를 데리고 엄마를 찾으러 멀리 가요', result: '둘 다 길을 잃을 수 있어요.', mood: '걱정', why: '어린이 둘이 멀리 가면 더 위험해요. 누구에게 알릴까요?' },
                { id: 'tell', text: '가까운 가게 어른께 알려요', result: '가게 주인이 방송으로 엄마를 찾아 주세요.', mood: '편안함' },
                { id: 'pass', text: '모른 척 지나가요', result: '아이가 계속 혼자 울어요.', mood: '슬픔', why: '혼자 우는 아이를 두고 가면 아이는 어떤 마음일까요?' }] }, target: { choice: 'tell' }, difficulty: 0.15 },
              { prompt: '짝과 그림 속 돕는 장면 하나를 골라 도와주는 사람과 도움을 받는 사람이 되어 몸으로 해 보고 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"그림 속 사람들은 서로 어떻게 살아가고 있나요?" \'서로 도우며\'라는 말을 학생이 스스로 하게 기다린다. 출구 1번에서 돕는 모습이 아닌 장면을 고른 학생에게 "누가 편해졌나요?"를 묻는다. 다음 시간에는 지금까지 모은 이야기를 묶어 본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '버스 그림', basket: '서로 돕는 모습', cards: [{ id: '자리', text: '할아버지께 자리를 양보해요', motif: 'star' }, { id: '창', text: '창밖으로 산이 보여요', motif: 'mountain' }, { id: '짐', text: '기사님이 짐 싣는 걸 기다려 줘요', motif: 'house' }] }, prompt: '버스 그림의 장면 가운데 서로 돕는 모습만 골라 보세요.', target: { pick: ['자리', '짐'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '길 잃은 어린 아이를 보았을 때 알맞은 행동은?', options: ['가까운 어른께 알려요', '데리고 멀리 가요', '모른 척해요'], answer: 0, difficulty: 0.1, explain: '어린이끼리 움직이지 말고 가까운 어른께 알려요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '서로 돕는 모습',
      items: [
        { type: 'figure', wide: true, prompt: '서로 돕는 모습에 ○ 하세요.', tool: 'mindmap', figures: [{ options: { mode: 'pick', topic: '시장 그림', basket: '돕는 모습', cards: [{ id: '짐', text: '짐을 들어 드려요', motif: 'house' }, { id: '구름', text: '구름이 떠 있어요', motif: 'cloud' }, { id: '길', text: '동생 손을 잡아요', motif: 'star' }] }, caption: '' }], answer: '짐을 들어 드려요, 동생 손을 잡아요' },
        { type: 'table', prompt: '도움을 준 사람과 받은 사람을 쓰세요.', columns: ['도운 사람', '도움을 받은 사람'], cells: [['상인', ''], ['', '아기 엄마']] },
        { type: 'choice', prompt: '길 잃은 아이를 보면 어떻게 할까요?', options: ['가까운 어른께 알려요', '데리고 멀리 가요'], answer: '가까운 어른께 알려요' },
        { type: 'draw', prompt: '우리 동네에서 본 서로 돕는 모습을 그려 보세요.' },
      ],
      easy: {
        note: '"누가 편해졌나요?"를 물어봐요.',
        items: [
          { type: 'choice', prompt: '돕는 모습에 ○ 하세요.', options: ['짐을 들어 드려요', '구름이 떠 있어요'], answer: '짐을 들어 드려요' },
          { type: 'choice', prompt: '도움을 받은 할머니의 마음에 ○ 하세요.', options: ['고마워요', '심심해요'], answer: '고마워요' },
          { type: 'draw', prompt: '돕는 모습을 그려 보세요.' },
          { type: 'short', prompt: '도운 사람을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 카드에 초록 테두리가 생기고, 틀리면 카드가 돌아와요.',
      base: '모두 고른 뒤 확인을 눌러요. 도운 사람과 받은 사람을 둘 다 말해요.',
      challenge: '돕는 모습이 아닌 장면 카드가 더 섞여 있어요. 그림 속 다른 돕는 모습을 하나 더 찾아 말해요.',
    },
    safety: ['길 잃은 아이를 보면 어린이끼리 데려가지 않고 가까운 어른께 알려요.'],
    teacherNotes: '준비: 시장·공원·버스 그림(교사가 직접 그리거나 저작권이 없는 그림)을 크게 띄운다. 자주 보이는 어려움: ① 일하는 모습과 돕는 모습을 헷갈린다 → "누가 편해졌나요?"로 가른다. ② 도움을 받은 사람을 빼고 말한다 → 두 사람을 모두 짚게 한다. ③ 길 잃은 아이를 직접 데려가겠다고 한다 → 어른께 알리는 것이 돕는 방법이라고 분명히 한다.',
  }));

  // ───────────────────────── 21~24차시: 묶어 말하고 고마움 전하기(탐구 결과 설명) ─────────────────────────

  lessons.push(L(21, {
    title: '모은 이야기를 묶어 함께 사는 모습 말하기',
    objective: '모은 이야기를 하는 일에 따라 묶고, "우리 둘레 사람들은 서로 도우며 살아요"처럼 함께 사는 모습을 한 문장으로 말할 수 있다.',
    illustration: ART('a paper bulletin board with three groups of small cards labeled with a bread, a fire helmet and a medicine bottle, children pointing at them', '이야기를 묶어 봐요', [
      { motif: 'house', x: 110, y: 214, color: 'sky' }, { motif: 'star', x: 240, y: 84, s: 0.6 }, { motif: 'tree', x: 380, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"지금까지 우리가 만난 분들을 떠올려 볼까요?" 칠판에 붙여 둔 메모(제빵사, 소방관, 약사, 조리사…)를 함께 읽는다. "이분들을 비슷한 일끼리 묶으면 어떻게 될까요?" 시연 단추로 \'빵을 구워요\' 카드가 \'먹을 것\' 가지로 가는 모습을 보여 준다.',
        student: '지금까지 만나거나 알아본 분을 손가락으로 세어 봐요.',
        demo: { tool: 'mindmap', options: { topic: '우리를 돕는 일', slots: ['먹을 것을 만들어요'], cards: ['제빵사가 빵을 구워요', '소방관이 불을 꺼요'], shuffle: false }, sequence: [{ sort: { '먹을 것을 만들어요': ['제빵사가 빵을 구워요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 하는 일끼리 묶기', minutes: 14, tool: 'mindmap',
            teacher: '"이분은 우리가 무엇을 하도록 도와주시나요?" 카드마다 \'먹기·안전·아플 때\' 가운데 하나를 말하게 한다. 사람 이름만 보고 넣는 학생에게 카드의 하는 일을 소리 내어 읽게 한다. 묶은 뒤 "가지마다 몇 분이 있나요?"를 세어 본다.',
            task: '모은 이야기 카드를 그분이 하는 일에 따라 가지에 묶어요.',
            levels: CARD_LV,
            items: [
              { prompt: '이야기 카드를 하는 일에 따라 두 가지로 묶어 보세요.', toolOptions: { topic: '우리를 돕는 일', slots: ['먹을 것을 만들어요', '안전을 지켜요'], cards: ['제빵사가 빵을 구워요', '조리사가 급식을 지어요', '소방관이 불을 꺼요', '경찰관이 길을 살펴요'] },
                target: { sort: { '먹을 것을 만들어요': ['제빵사가 빵을 구워요', '조리사가 급식을 지어요'], '안전을 지켜요': ['소방관이 불을 꺼요', '경찰관이 길을 살펴요'] } }, difficulty: 0.1 },
              { prompt: '이야기 카드를 하는 일에 따라 세 가지로 묶어 보세요.', toolOptions: { topic: '우리를 돕는 일', slots: ['먹을 것을 만들어요', '안전을 지켜요', '아플 때 도와요'], cards: ['농부가 쌀을 길러요', '교통 지킴이가 건널목을 지켜요', '약사가 약을 지어 줘요', '보건 선생님이 상처에 약을 발라요', '보안관이 교문을 지켜요', '제빵사가 빵을 구워요'] },
                target: { sort: { '먹을 것을 만들어요': ['농부가 쌀을 길러요', '제빵사가 빵을 구워요'], '안전을 지켜요': ['교통 지킴이가 건널목을 지켜요', '보안관이 교문을 지켜요'], '아플 때 도와요': ['약사가 약을 지어 줘요', '보건 선생님이 상처에 약을 발라요'] } }, difficulty: 0.25,
                levels: { easy: { state: { at: { '농부가 쌀을 길러요': 0, '약사가 약을 지어 줘요': 2 } } } },
                hints: ['카드마다 "이분 덕분에 우리가 무엇을 할 수 있지?"를 물어보세요. 먹기, 안전, 아플 때 가운데 하나예요.', '\'지켜요\'가 들어간 카드와 \'약\'이 들어간 카드를 견주어 보세요.', '쌀·빵은 먹을 것, 건널목·교문을 지키는 일은 안전, 약은 아플 때예요.'] },
              { prompt: '묶은 이야기를 보고 함께 사는 모습을 말하는 문장을 완성해 보세요.', toolOptions: { mode: 'fill', topic: '함께 사는 모습', cards: ['도우며', '혼자서', '싸우며'], slots: [{ id: 'b1', label: '우리 둘레 사람들은 서로 ___ 함께 살아가요.' }] },
                target: { fill: { b1: '도우며' } }, difficulty: 0.1,
                predict: { q: '빵, 안전, 약을 모두 혼자 해결할 수 있을까요?', options: ['혼자 할 수 있어요', '서로 도와야 해요'], answer: 1 },
                conclude: '여러 사람이 서로 다른 일을 맡아 도우며 함께 살아가요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 알게 된 것 말하기 연습', minutes: 12, tool: 'story',
            teacher: '"말할 때는 누구를 만났는지, 무엇을 들었는지, 알게 된 것을 차례로 말해요." 말하기 틀을 칠판에 쓴다. 메모를 보며 짝에게 세 문장으로 말하게 하고, \'재미있었어요\'로만 끝내는 학생에게 "그래서 무엇을 알게 되었나요?"를 묻는다.',
            task: '알게 된 것을 말하는 차례를 놓고, 내 메모를 보며 짝에게 세 문장으로 말해요.',
            levels: CARD_LV,
            items: [
              { prompt: '알게 된 것을 말하는 차례대로 카드를 놓아 보세요.', toolOptions: { cards: [{ id: '알게', text: '"그래서 ○○를 알게 되었어요"', motif: 'star' }, { id: '누구', text: '"저는 ○○를 만났어요"', motif: 'sun' }, { id: '들은', text: '"○○라고 말씀하셨어요"', motif: 'leaf' }] },
                target: { order: ['누구', '들은', '알게'] }, difficulty: 0.1 },
              { prompt: '준호의 말하기에서 빈칸에 알맞은 카드를 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['소방관', '새벽에도', '알게', '재미'], slots: [{ id: 'b1', who: '준호', motif: 'sun', label: '저는 ___ 아저씨를 만났어요.' }, { id: 'b2', who: '준호', motif: 'sun', label: '불이 나면 ___ 달려간다고 하셨어요.' }, { id: 'b3', who: '준호', motif: 'sun', label: '그래서 밤에도 우리를 지켜 주신다는 것을 ___ 되었어요.' }] },
                target: { fill: { b1: '소방관', b2: '새벽에도', b3: '알게' } }, difficulty: 0.2 },
              { prompt: '내 메모를 보며 짝에게 만난 분·들은 말·알게 된 것을 세 문장으로 말하고, 짝의 말도 들은 뒤 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"우리 반이 모은 이야기를 한 문장으로 말하면?" 학생이 \'서로 도우며 살아요\'를 스스로 말하도록 기다린다. 출구 1번에서 사람 이름만 보고 묶은 학생에게 하는 일을 다시 읽게 한다. 다음 시간에는 모둠별로 발표한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '우리를 돕는 일', slots: ['먹을 것을 만들어요', '아플 때 도와요'], cards: ['어부가 물고기를 잡아요', '의사가 진찰해요', '간호사가 주사를 놓아요'] }, prompt: '이야기 카드를 하는 일에 따라 묶어 보세요.', target: { sort: { '먹을 것을 만들어요': ['어부가 물고기를 잡아요'], '아플 때 도와요': ['의사가 진찰해요', '간호사가 주사를 놓아요'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '알게 된 것을 말할 때 마지막에 할 말은?', options: ['"그래서 ○○를 알게 되었어요"', '"저는 ○○를 만났어요"', '"끝!"'], answer: 0, difficulty: 0.15, explain: '만난 분, 들은 말 다음에 알게 된 것을 말해요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '모은 이야기 묶기',
      items: [
        { type: 'figure', wide: true, prompt: '하는 일이 같은 것끼리 선으로 이으세요.', tool: 'mindmap', figures: [{ options: { topic: '우리를 돕는 일', slots: ['먹을 것', '안전'], cards: ['빵을 구워요', '불을 꺼요', '급식을 지어요'] }, caption: '' }], answer: '빵·급식-먹을 것, 불-안전' },
        { type: 'table', prompt: '내가 알아본 분을 쓰세요.', columns: ['만난 분', '하는 일', '알게 된 것'], rows: 2 },
        { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '우리 둘레 사람들은 서로 ___ 함께 살아가요.', answer: '도우며' },
        { type: 'short', prompt: '알게 된 것을 한 문장으로 쓰세요.' },
      ],
      easy: {
        note: '그분 덕분에 무엇을 할 수 있는지 생각해요.',
        items: [
          { type: 'choice', prompt: '빵을 굽는 일은 무엇을 돕나요?', options: ['먹을 것', '안전'], answer: '먹을 것' },
          { type: 'choice', prompt: '불을 끄는 일은 무엇을 돕나요?', options: ['안전', '먹을 것'], answer: '안전' },
          { type: 'draw', prompt: '내가 알아본 분을 그려 보세요.' },
          { type: 'short', prompt: '그분이 하는 일을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 가지에 초록 테두리가 생기고, 세 가지 묶기는 두 장이 먼저 놓여 있어요.',
      base: '모두 묶은 뒤 확인을 누르고, 짝에게 세 문장으로 말해요.',
      challenge: '세 가지로 여섯 장을 묶어요. 말하기에 내 생각 한 문장을 더 넣어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 사람 이름(소방관)만 보고 묶는다 → 카드의 하는 일을 읽고 "덕분에 무엇을 할 수 있나"로 묶게 한다. ② 알게 된 것 대신 "재미있었어요"로 끝낸다 → 말하기 틀의 세 번째 문장을 짚는다. ③ 조사를 못 한 학생이 있다 → 친구 메모나 수업 중 읽은 대답으로 말하게 한다.',
  }));

  lessons.push(L(22, {
    title: '모둠별로 알게 된 것 발표하고 듣기',
    objective: '모둠에서 맡은 차례대로 알게 된 것을 발표하고, 다른 모둠의 발표를 바른 자세로 들은 뒤 들은 내용을 한 가지 말할 수 있다.',
    illustration: ART('a paper group of four children standing in front of a class holding drawings of community helpers, classmates sitting and listening with hands on knees', '우리 모둠이 알아본 분', [
      { motif: 'house', x: 100, y: 214, color: 'lavender' }, { motif: 'star', x: 240, y: 84, s: 0.6 }, { motif: 'flower', x: 390, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"오늘은 여섯 모둠이 차례로 2분씩 발표해요. 모둠 안에서 누가 무엇을 말할지 먼저 정해요." 발표 차례 카드(만난 분 → 들은 말 → 알게 된 것 → 감사)를 칠판에 붙이고 시연 단추로 차례가 놓이는 모습을 보여 준다. 듣는 사람의 약속(눈 보기, 끝까지 듣기)도 함께 말한다.',
        student: '우리 모둠에서 내가 무엇을 말할지 정해 봐요.',
        demo: { tool: 'story', options: { cards: [{ id: '누구', text: '만난 분을 말해요', motif: 'sun' }, { id: '들은', text: '들은 말을 말해요', motif: 'leaf' }], slots: ['먼저', '그다음'], shuffle: false }, sequence: [{ order: ['누구', '들은'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 모둠 발표 준비', minutes: 8, tool: 'story',
            teacher: '"네 명이 한 문장씩 맡아요." 모둠마다 맡을 문장을 정하고 한 번 연습하게 한다. 한 명이 다 말하려는 모둠에게 "모두 한 문장씩"이라는 약속을 다시 짚는다.',
            task: '모둠 발표의 차례를 정하고, 내가 맡은 문장을 연습해요.',
            levels: CARD_LV,
            items: [
              { prompt: '모둠 발표의 차례대로 카드를 놓아 보세요.', toolOptions: { cards: [{ id: '감사', text: '"들어 주셔서 고맙습니다"', motif: 'flower' }, { id: '알게', text: '알게 된 것을 말해요', motif: 'star' }, { id: '누구', text: '만난 분을 말해요', motif: 'sun' }, { id: '들은', text: '들은 말을 말해요', motif: 'leaf' }] },
                target: { order: ['누구', '들은', '알게', '감사'] }, difficulty: 0.1,
                levels: { easy: { state: { at: { '누구': 0 } } } } },
              { prompt: '모둠 네 명이 한 가지씩 맡아요. 민지 모둠의 맡은 일을 이어 보세요.', toolOptions: { mode: 'match', slots: [{ id: 's1', label: '민지: 첫째 문장' }, { id: 's2', label: '준호: 둘째 문장' }, { id: 's3', label: '서아: 셋째 문장' }], cards: ['"저희는 사서 선생님을 만났어요"', '"책에 번호를 붙인다고 하셨어요"', '"책을 쉽게 찾게 도와주신다는 걸 알았어요"'] },
                target: { match: { s1: '"저희는 사서 선생님을 만났어요"', s2: '"책에 번호를 붙인다고 하셨어요"', s3: '"책을 쉽게 찾게 도와주신다는 걸 알았어요"' } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['"저희는 사서 선생님을 만났어요"', '"책에 번호를 붙인다고 하셨어요"', '"책을 쉽게 찾게 도와주신다는 걸 알았어요"', '"도서관은 지루해요"'] } } } },
              { prompt: '모둠에서 내가 맡은 문장을 정해 두 번 연습하고 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
          {
            id: 'a2', title: '활동 2. 발표하고 잘 듣기', minutes: 20, tool: 'emotion',
            teacher: '여섯 모둠이 2분씩 발표한다(모둠 사이 30초 박수와 자리 바꾸기). 발표가 끝날 때마다 듣던 학생 한 명에게 "무엇을 알게 되었대요?"를 묻는다. 발표 중 떠드는 학생에게 발표하는 친구의 마음을 떠올리게 한다. 발표가 끝나면 판의 문항을 함께 푼다.',
            task: '모둠별로 발표하고, 다른 모둠의 발표를 들은 뒤 듣는 태도와 마음을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '우리 모둠이 발표하고, 다른 모둠 발표를 끝까지 들은 뒤 "다 했어요"를 누르세요.', free: true, talk: true },
              { prompt: '친구가 발표할 때 듣는 사람의 바른 태도만 골라 보세요.', toolOptions: { mode: 'pick', basket: '바른 듣기', cards: ['발표하는 친구의 얼굴을 봐요', '끝까지 듣고 손을 들어 물어요', '짝과 다른 이야기를 해요', '틀린 말을 하면 크게 웃어요'] },
                target: { pick: ['발표하는 친구의 얼굴을 봐요', '끝까지 듣고 손을 들어 물어요'] }, difficulty: 0.1 },
              { prompt: '발표 중에 친구가 문장을 잊어버렸어요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '하준', situation: '하준이가 발표하다가 맡은 문장을 잊어버려 말이 멈췄어요.', choices: [
                { id: 'laugh', text: '"까먹었대!" 하고 웃어요', result: '하준이가 얼굴이 빨개져 더 말을 못 해요.', mood: '부끄러움', why: '웃음소리를 들은 하준이는 어떤 마음일까요?' },
                { id: 'wait', text: '조용히 기다리며 고개를 끄덕여 줘요', result: '하준이가 메모를 보고 다시 말해요.', mood: '편안함' },
                { id: 'say', text: '내가 대신 다 말해 버려요', result: '하준이는 맡은 일을 못 해 속상해요.', mood: '속상함', why: '하준이가 스스로 말할 기회를 주면 어떨까요?' }] }, target: { choice: 'wait' }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"다른 모둠 발표에서 새로 알게 된 분은 누구예요?" 학생 서너 명이 들은 내용을 말하게 한다. 출구 1번에서 차례를 바꾼 학생에게 발표 차례 카드를 다시 보게 한다. 다음 시간에는 알아본 분께 고마운 마음을 전한다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { cards: [{ id: '알게', text: '알게 된 것', motif: 'star' }, { id: '누구', text: '만난 분', motif: 'sun' }, { id: '감사', text: '"고맙습니다"', motif: 'flower' }] }, prompt: '발표 차례대로 놓아 보세요.', target: { order: ['누구', '알게', '감사'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '친구가 발표하다 멈추었을 때 듣는 사람이 할 일은?', options: ['웃어요', '조용히 기다려요', '대신 말해요'], answer: 1, difficulty: 0.1, explain: '조용히 기다려 주면 친구가 다시 말할 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '발표하고 듣기',
      items: [
        { type: 'figure', wide: true, prompt: '발표 차례대로 카드 아래에 1, 2, 3 번호를 쓰세요.', tool: 'story', figures: [{ options: { cards: [{ id: '감사', text: '"고맙습니다"', motif: 'flower' }, { id: '누구', text: '만난 분', motif: 'sun' }, { id: '들은', text: '들은 말', motif: 'leaf' }] }, caption: '' }], answer: '만난 분 1, 들은 말 2, 고맙습니다 3' },
        { type: 'blank', prompt: '내가 맡은 문장을 쓰세요.', text: '저는 ___ 을 말해요.', answer: '(학생마다 다름)' },
        { type: 'table', prompt: '다른 모둠 발표에서 들은 것을 쓰세요.', columns: ['모둠', '만난 분', '알게 된 것'], rows: 2 },
        { type: 'check', prompt: '오늘 내가 지킨 듣기 약속에 ✓ 하세요.', options: ['친구 얼굴 보기', '끝까지 듣기', '손 들고 묻기'] },
      ],
      easy: {
        note: '내가 맡은 문장 하나만 잘 말하면 돼요.',
        items: [
          { type: 'choice', prompt: '발표할 때 처음 할 말에 ○ 하세요.', options: ['만난 분', '고맙습니다'], answer: '만난 분' },
          { type: 'choice', prompt: '바른 듣기에 ○ 하세요.', options: ['친구 얼굴 보기', '짝과 떠들기'], answer: '친구 얼굴 보기' },
          { type: 'short', prompt: '내가 맡은 문장을 쓰세요.' },
          { type: 'draw', prompt: '발표하는 우리 모둠을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 초록 테두리가 생기고, 발표 차례는 첫 카드가 놓여 있어요. 발표는 메모를 보고 읽어도 돼요.',
      base: '차례를 모두 놓은 뒤 확인을 눌러요. 맡은 문장을 외워서 말해요.',
      challenge: '맞지 않는 문장 카드가 섞여 있어요. 다른 모둠에게 물음을 하나 해요.',
    },
    teacherNotes: '시간: 여섯 모둠 × 2분 + 바꾸기 30초 ≈ 15분, 판 문항 5분. 자주 보이는 어려움: ① 한 학생이 모둠 발표를 다 한다 → 네 명 모두 한 문장씩 맡게 한다. ② 듣는 학생이 자기 발표 준비만 한다 → 발표마다 듣던 학생에게 들은 내용을 묻는다. ③ 발표가 멈추면 웃음이 나온다 → 기다려 주는 태도를 미리 연습한다.',
  }));

  lessons.push(L(23, {
    title: '알아본 분께 고마운 마음 직접 전하기',
    objective: '알아본 분이 해 주신 일을 넣어 고마운 마음을 전하는 말을 만들고, 감사 카드를 써서 직접 전할 수 있다.',
    illustration: ART('a paper child handing a thank-you card with a flower drawing to a smiling school cook in a white apron by the cafeteria door', '고맙습니다!', [
      { motif: 'flower', x: 100, y: 228, color: 'rose' }, { motif: 'house', x: 380, y: 214, color: 'peach' }, { motif: 'sun', x: 80, y: 70, s: 0.5 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"\'고맙습니다\'와 \'맛있는 급식을 지어 주셔서 고맙습니다\' 가운데 어느 말이 마음에 더 닿을까요?" 두 말을 들려주고 차이를 묻는다. "무엇이 고마운지 넣어 말하면 그분이 더 기뻐하세요." 시연 단추로 고마운 일 빈칸에 카드가 들어가는 모습을 보여 준다.',
        student: '알아본 분께 고마운 일을 하나 떠올려 짝에게 말해 봐요.',
        demo: { tool: 'story', options: { mode: 'fill', cards: ['급식을 지어 주셔서', '빨리'], slots: [{ id: 'b1', who: '민지', motif: 'flower', label: '맛있는 ___ 고맙습니다.' }], shuffle: false }, sequence: [{ fill: { b1: '급식을 지어 주셔서' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 해 주신 일을 넣어 고마움 말하기', minutes: 12, tool: 'emotion',
            teacher: '"이 말에는 그분이 해 주신 일이 들어 있나요?" 고르기 전에 말을 소리 내어 읽게 한다. \'고마워\'처럼 어른께 반말로 전하는 말도 바로잡는다.',
            task: '고마운 마음이 잘 전해지는 말을 고르고, 해 주신 일을 넣어 말을 완성해요.',
            levels: CARD_LV,
            items: [
              { prompt: '보안관님께 고마운 일을 넣어 마음을 전하는 말만 골라 보세요.', toolOptions: { mode: 'pick', basket: '마음이 전해지는 말', cards: ['"교문에서 안전하게 지켜 주셔서 고맙습니다"', '"비 오는 날 우산을 씌워 주셔서 고맙습니다"', '"고마워"', '"내일도 사탕 주세요"'] },
                target: { pick: ['"교문에서 안전하게 지켜 주셔서 고맙습니다"', '"비 오는 날 우산을 씌워 주셔서 고맙습니다"'] }, difficulty: 0.15 },
              { prompt: '고마운 분과 그분께 전할 말 카드를 이어 보세요.', toolOptions: { slots: [{ id: 's1', label: '사서 선생님' }, { id: 's2', label: '보건 선생님' }, { id: 's3', label: '환경미화원' }], cards: ['"재미있는 책을 찾아 주셔서 고맙습니다"', '"다친 무릎을 치료해 주셔서 고맙습니다"', '"길을 깨끗이 쓸어 주셔서 고맙습니다"'], weather: false },
                target: { match: { s1: '"재미있는 책을 찾아 주셔서 고맙습니다"', s2: '"다친 무릎을 치료해 주셔서 고맙습니다"', s3: '"길을 깨끗이 쓸어 주셔서 고맙습니다"' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['"재미있는 책을 찾아 주셔서 고맙습니다"', '"다친 무릎을 치료해 주셔서 고맙습니다"', '"길을 깨끗이 쓸어 주셔서 고맙습니다"', '"불을 꺼 주셔서 고맙습니다"'] } } } },
              { prompt: '감사 인사를 받은 조리사님의 기쁜 마음 크기를 골라 보세요.', toolOptions: { mode: 'scale', situation: '1학년 아이들이 줄지어 와서 "날마다 맛있는 급식을 지어 주셔서 고맙습니다" 하고 카드를 드렸어요.', feeling: '기쁨', after: '해 주신 일을 넣어 말하면 마음이 더 잘 전해져요.' }, target: { level: [4, 5] }, difficulty: 0.1,
                levels: { easy: { toolOptions: { steps: 3 }, prompt: '아이들이 감사 카드를 드렸어요. 조리사님의 기쁜 마음을 세 칸에서 골라 보세요.', target: { level: 3 } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 감사 카드 쓰고 전하기', minutes: 14, tool: 'story',
            teacher: '"카드에 받는 분, 해 주신 일, 고맙습니다, 내 이름을 써요." 카드를 쓴 뒤 선생님과 함께 학교 안 그분을 찾아가 직접 드린다(미리 약속해 둔 시간). 부끄러워 말을 못 하는 학생은 카드만 드리고 고개 숙여 인사해도 된다.',
            task: '감사 카드의 빈칸을 채우고, 종이 카드를 써서 선생님과 함께 직접 전해요.',
            levels: CARD_LV,
            items: [
              { prompt: '서아가 쓴 감사 카드의 빈칸을 채워 보세요.', toolOptions: { mode: 'fill', cards: ['보건 선생님', '치료해 주셔서', '서아', '혼내 주셔서'], slots: [{ id: 'b1', who: '서아', motif: 'flower', label: '___께' }, { id: 'b2', who: '서아', motif: 'flower', label: '넘어진 무릎을 ___ 고맙습니다.' }, { id: 'b3', who: '서아', motif: 'flower', label: '1학년 ___ 올림' }] },
                target: { fill: { b1: '보건 선생님', b2: '치료해 주셔서', b3: '서아' } }, difficulty: 0.15 },
              { prompt: '감사 카드를 전하는 차례대로 놓아 보세요.', toolOptions: { cards: [{ id: '드리기', text: '두 손으로 카드를 드려요', motif: 'flower' }, { id: '인사', text: '"안녕하세요" 인사해요', motif: 'sun' }, { id: '말', text: '고마운 일을 말해요', motif: 'star' }] },
                target: { order: ['인사', '말', '드리기'] }, difficulty: 0.1,
                levels: { challenge: { prompt: '감사 카드를 전하는 차례대로 카드 네 장을 놓아 보세요.', toolOptions: { cards: [{ id: '드리기', text: '두 손으로 카드를 드려요', motif: 'flower' }, { id: '인사', text: '"안녕하세요" 인사해요', motif: 'sun' }, { id: '말', text: '고마운 일을 말해요', motif: 'star' }, { id: '끝', text: '"안녕히 계세요" 하고 와요', motif: 'moon' }] },
                  target: { order: ['인사', '말', '드리기', '끝'] } } } },
              { prompt: '종이 감사 카드를 써서 선생님과 함께 그분께 직접 드리고 교실에 돌아와 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"카드를 받으신 분의 얼굴이 어땠나요?" 두세 명에게 듣는다. 출구 1번에서 해 주신 일이 없는 말을 고른 학생에게 "무엇이 고마웠나요?"를 다시 묻는다. 다음 시간에는 발표와 감사 다음에 무엇을 더 할 수 있을지 생각해 보자고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'emotion', options: { mode: 'pick', basket: '마음이 전해지는 말', cards: ['"건널목을 건너게 도와주셔서 고맙습니다"', '"고마워"', '"아침마다 웃으며 인사해 주셔서 고맙습니다"'] }, prompt: '교통 지킴이께 고마운 일을 넣어 전하는 말만 골라 보세요.', target: { pick: ['"건널목을 건너게 도와주셔서 고맙습니다"', '"아침마다 웃으며 인사해 주셔서 고맙습니다"'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '고마운 마음이 더 잘 전해지는 말은?', options: ['"고맙습니다"', '"책을 찾아 주셔서 고맙습니다"'], answer: 1, difficulty: 0.1, explain: '해 주신 일을 넣어 말하면 무엇이 고마운지 잘 전해져요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '감사 카드',
      items: [
        { type: 'blank', prompt: '감사 카드를 완성하세요.', text: '___께 / ___ 주셔서 고맙습니다. / 1학년 ___ 올림', answer: '(받는 분 / 해 주신 일 / 내 이름)' },
        { type: 'choice', prompt: '마음이 잘 전해지는 말에 ○ 하세요.', options: ['"치료해 주셔서 고맙습니다"', '"고마워"', '"사탕 주세요"'], answer: '"치료해 주셔서 고맙습니다"' },
        { type: 'draw', prompt: '감사 카드에 넣을 그림을 그려 보세요.' },
        { type: 'short', prompt: '카드를 드렸을 때 그분의 얼굴을 쓰세요.' },
      ],
      easy: {
        note: '받는 분과 해 주신 일만 써도 돼요.',
        items: [
          { type: 'blank', prompt: '받는 분을 쓰세요.', text: '___께', answer: '(받는 분)' },
          { type: 'choice', prompt: '어른께 드리는 말에 ○ 하세요.', options: ['"고맙습니다"', '"고마워"'], answer: '"고맙습니다"' },
          { type: 'draw', prompt: '카드에 넣을 그림을 그려 보세요.' },
          { type: 'short', prompt: '해 주신 일을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 카드에 초록 테두리가 생기고, 마음 크기는 세 칸이에요. 카드는 받는 분과 해 주신 일만 써도 돼요.',
      base: '빈칸을 모두 채운 뒤 확인을 누르고, 카드를 직접 드려요.',
      challenge: '맞지 않는 말 카드가 섞여 있고, 전하는 차례가 네 단계예요. 카드에 고마운 일을 두 가지 써요.',
    },
    teacherNotes: '준비: 학교 안 여러 분께 카드를 받으실 시간을 미리 부탁해 두고, 교사가 모둠별로 함께 간다. 자주 보이는 어려움: ① "고마워"처럼 반말로 전한다 → 어른께 드리는 말로 함께 고친다. ② 해 주신 일 없이 "고맙습니다"만 쓴다 → "무엇이 고마웠나요?"를 다시 묻는다. ③ 부끄러워 직접 못 드린다 → 카드만 드리고 인사해도 된다고 말해 준다.',
  }));

  lessons.push(L(24, {
    title: '알아본 뒤 생활에서 이어서 할 일 정하기',
    objective: '조사한 내용과 이어지는 실천을 찾아 내가 생활에서 이어서 할 일을 하나 정하고, 조사는 발표로 끝나지 않음을 말할 수 있다.',
    illustration: ART('a paper child putting litter into a bin on a clean street while a street cleaner waves, a small checklist card in the child pocket', '알았으니 이제 해 봐요', [
      { motif: 'tree', x: 100, y: 214 }, { motif: 'house', x: 240, y: 214, color: 'mint' }, { motif: 'flower', x: 390, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"환경미화원께서 새벽부터 길을 쓰신다는 걸 알았어요. 발표하고 카드도 드렸어요. 이제 다 끝났을까요?" 학생의 생각을 듣고, 알게 된 것으로 내가 바꿀 수 있는 일이 있는지 묻는다. 시연 단추로 \'쓰레기를 쓰레기통에\' 항목에 표시되는 모습을 보여 준다.',
        student: '조사한 분 덕분에 내가 바꿔 볼 수 있는 일을 하나 떠올려 봐요.',
        demo: { tool: 'kitchen', options: { mode: 'checklist', title: '이어서 할 일', items: [{ id: 'bin', text: '쓰레기는 쓰레기통에' }, { id: 'tv', text: '텔레비전 보기' }] }, sequence: [{ checklist: ['bin'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 알게 된 것과 이어서 할 일', minutes: 13, tool: 'mindmap',
            teacher: '"사서 선생님이 책에 번호를 붙여 정리하신다는 걸 알았어요. 그럼 나는 무엇을 할 수 있을까요?" 알게 된 것과 실천을 이어 보게 한다. 알게 된 것과 상관없는 착한 일을 고르는 학생에게 "그 일이 그분의 일과 이어져 있나요?"를 묻는다.',
            task: '알게 된 것마다 이어서 할 수 있는 일 카드를 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '알게 된 것마다 이어서 할 일 카드를 이어 보세요.', toolOptions: { mode: 'match', topic: '이어서 할 일', slots: [{ id: 's1', label: '환경미화원이 새벽부터 길을 쓸어요' }, { id: 's2', label: '사서 선생님이 책을 번호대로 꽂아요' }], cards: ['쓰레기를 쓰레기통에 버려요', '읽은 책을 제자리에 꽂아요'] },
                target: { match: { s1: '쓰레기를 쓰레기통에 버려요', s2: '읽은 책을 제자리에 꽂아요' } }, difficulty: 0.1 },
              { prompt: '세 가지 알게 된 것에 이어서 할 일 카드를 이어 보세요.', toolOptions: { mode: 'match', topic: '이어서 할 일', slots: [{ id: 's1', label: '조리사님이 새벽부터 급식을 지어요' }, { id: 's2', label: '보안관님이 교문을 지켜요' }, { id: 's3', label: '집배원이 비 와도 편지를 날라요' }], cards: ['급식을 남기지 않고 먹어요', '교문에서 보안관님께 인사해요', '집배원께 "수고하셨어요" 인사해요'] },
                target: { match: { s1: '급식을 남기지 않고 먹어요', s2: '교문에서 보안관님께 인사해요', s3: '집배원께 "수고하셨어요" 인사해요' } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['급식을 남기지 않고 먹어요', '교문에서 보안관님께 인사해요', '집배원께 "수고하셨어요" 인사해요', '복도에서 뛰어요'] } } } },
              { prompt: '조사한 뒤에 이어서 하는 일을 발표로 끝난 일과 생활에서 이어 하는 일로 나누어 보세요.', toolOptions: { topic: '조사한 뒤', slots: ['발표로 끝났어요', '생활에서 이어 해요'], cards: ['알게 된 것을 모둠에서 말했어요', '보건 선생님 이야기를 듣고 손을 자주 씻어요', '조리사님 이야기를 듣고 급식을 남기지 않아요', '알아본 분 그림을 게시판에 붙였어요'] },
                target: { sort: { '발표로 끝났어요': ['알게 된 것을 모둠에서 말했어요', '알아본 분 그림을 게시판에 붙였어요'], '생활에서 이어 해요': ['보건 선생님 이야기를 듣고 손을 자주 씻어요', '조리사님 이야기를 듣고 급식을 남기지 않아요'] } }, difficulty: 0.2,
                predict: { q: '조사는 발표하면 끝일까요?', options: ['끝이에요', '생활에서 이어 해요'], answer: 1 },
                conclude: '알게 된 것을 생활에서 해 보면 그분들의 일을 덜어 드릴 수 있어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 내가 이어서 할 일 정하기', minutes: 13, tool: 'kitchen',
            teacher: '"오늘부터 일주일 동안 할 일을 고르세요." 판에서 조사와 이어진 일만 골라 표시한 뒤, 그 가운데 내가 할 일 하나를 활동지에 적고 짝에게 말하게 한다. 너무 많이 고른 학생에게 "꼭 지킬 한 가지"를 정하게 한다.',
            task: '조사와 이어진 실천만 골라 표시하고, 내가 일주일 동안 할 일을 하나 정해요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '우리 반이 알아본 분들의 이야기와 이어진 실천에만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '이어서 할 일', items: [{ id: 'hand', text: '보건 선생님 말씀대로 손 자주 씻기' }, { id: 'food', text: '급식 남기지 않기' }, { id: 'game', text: '게임 오래 하기' }, { id: 'book', text: '읽은 책 제자리에 꽂기' }] },
                target: { checklist: ['hand', 'food', 'book'] }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { items: [{ id: 'hand', text: '보건 선생님 말씀대로 손 자주 씻기' }, { id: 'food', text: '급식 남기지 않기' }, { id: 'game', text: '게임 오래 하기' }, { id: 'book', text: '읽은 책 제자리에 꽂기' }, { id: 'run', text: '복도에서 달리기' }, { id: 'gum', text: '길에 껌 뱉기' }] } } } },
              { prompt: '실천을 이어 가는 차례대로 카드를 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: '돌아', text: '주말에 잘했는지 돌아봐요' }, { id: '정하기', text: '할 일을 하나 정해요' }, { id: '날마다', text: '날마다 해 봐요' }] },
                target: { order: ['정하기', '날마다', '돌아'] }, difficulty: 0.1 },
              { prompt: '내가 일주일 동안 이어서 할 일을 활동지에 쓰고, 짝에게 "나는 ○○를 할 거야"라고 말한 뒤 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"우리가 이어서 하면 둘레 분들은 어떤 마음일까요?" 함께 사는 사람들이 서로의 일을 덜어 준다는 것을 짚는다. 출구 1번을 틀린 학생에게 그분이 하는 일을 다시 읽게 한다. 일주일 뒤 실천을 돌아보는 시간을 미리 정해 둔다. 다음 시간부터는 친구들과 몸을 움직이는 놀이를 시작한다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '이어서 할 일', slots: [{ id: 'e1', label: '소방관이 불을 끄느라 애써요' }, { id: 'e2', label: '버스 기사님이 안전하게 운전해요' }], cards: ['불장난을 하지 않아요', '버스에서 자리에 앉아 있어요'] }, prompt: '알게 된 것마다 이어서 할 일을 이어 보세요.', target: { match: { e1: '불장난을 하지 않아요', e2: '버스에서 자리에 앉아 있어요' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '조사한 것을 발표한 뒤에는?', options: ['끝이에요', '생활에서 이어서 해 봐요', '다 잊어요'], answer: 1, difficulty: 0.1, explain: '알게 된 것을 생활에서 해 보아야 조사가 쓸모 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '이어서 할 일',
      items: [
        { type: 'figure', wide: true, prompt: '알게 된 것과 이어서 할 일을 선으로 이으세요.', tool: 'mindmap', figures: [{ options: { mode: 'match', topic: '이어서 할 일', slots: [{ id: 's1', label: '길을 쓰시는 분' }, { id: 's2', label: '책을 정리하시는 분' }], cards: ['쓰레기통에 버리기', '책 제자리에 꽂기'] }, caption: '' }], answer: '길-쓰레기통, 책-제자리' },
        { type: 'blank', prompt: '나의 다짐을 쓰세요.', text: '나는 ___ 덕분에 알게 되어, 일주일 동안 ___ 를 할 거예요.', answer: '(학생마다 다름)' },
        { type: 'table', prompt: '일주일 동안 한 날에 ○ 하세요.', columns: ['월', '화', '수', '목', '금'], rows: 1 },
        { type: 'short', prompt: '이어서 하면 그분이 어떤 마음일지 쓰세요.' },
      ],
      easy: {
        note: '그분이 하는 일을 덜어 드릴 수 있는 일을 골라요.',
        items: [
          { type: 'choice', prompt: '길을 쓰시는 분을 위해 할 일에 ○ 하세요.', options: ['쓰레기통에 버리기', '길에 버리기'], answer: '쓰레기통에 버리기' },
          { type: 'choice', prompt: '발표한 뒤에는?', options: ['생활에서 해 봐요', '끝이에요'], answer: '생활에서 해 봐요' },
          { type: 'short', prompt: '내가 할 일을 쓰세요.' },
          { type: 'draw', prompt: '이어서 하는 내 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 짝에 초록 테두리가 생겨요. 할 일은 그림으로 정해도 돼요.',
      base: '모두 이은 뒤 확인을 누르고, 일주일 동안 할 일 하나를 정해요.',
      challenge: '맞지 않는 카드와 항목이 더 섞여 있어요. 할 일을 하는 때까지 정해 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 조사한 내용은 발표만 하면 끝이라고 여긴다 → 알게 된 것과 내 생활을 잇는 질문("그래서 나는?")을 한다. ② 조사와 상관없는 착한 일을 고른다 → 그분의 일과 이어진 실천인지 견주게 한다. ③ 할 일을 너무 많이 정한다 → 꼭 지킬 한 가지로 줄인다. 일주일 기록표는 교실 뒤에 붙여 함께 본다.',
  }));

  // ───────────────────────── 25~28차시: 움직임 이름과 잇는 방법(움직임 특성과 상황 파악) ─────────────────────────

  lessons.push(L(25, {
    title: '배운 움직임 떠올려 이름 대고 나누기',
    objective: '지금까지 해 본 움직임을 몸으로 해 보며 이름을 차례로 대고, 자리를 옮기는 움직임과 제자리 움직임으로 나눌 수 있다.',
    illustration: ART('paper children in a gym each doing a different movement: walking, hopping on one foot, crawling, and balancing with arms out', '어떤 움직임을 해 봤나요?', [
      { motif: 'sun', x: 80, y: 70, s: 0.5 }, { motif: 'star', x: 240, y: 84, s: 0.6 }, { motif: 'flower', x: 390, y: 228 }]),
    safety: MOVE_SAFE,
    stages: [
      {
        id: 'intro', title: '도입', minutes: 7,
        teacher: '"선생님이 하는 움직임의 이름을 맞혀 볼까요?" 교사가 걷기, 한 발로 서기, 깡충 뛰기를 차례로 보여 주고 이름을 함께 말한다. "이번에는 친구들과 함께 여러 움직임을 이어서 해 볼 거예요. 오늘은 그 움직임들의 이름부터 모아요." 시연 단추로 움직임 카드가 가지에 나뉘는 모습을 보여 준다. 안전 약속을 함께 읽는다.',
        student: '선생님이 하는 움직임을 보고 이름을 크게 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '움직임', slots: ['자리를 옮겨요', '제자리에서 해요'], cards: ['걷기', '한 발로 서기'], shuffle: false }, sequence: [{ sort: { '자리를 옮겨요': ['걷기'], '제자리에서 해요': ['한 발로 서기'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 25,
        activities: [
          {
            id: 'a1', title: '활동 1. 몸으로 해 보고 이름 대기', minutes: 12, tool: 'timer',
            teacher: '"선생님이 북을 치면 카드의 움직임을 10초 동안 해요." 움직임 카드를 한 장씩 들고 다 함께 몸으로 해 본다. 해 본 차례대로 이름을 대게 한 뒤 판에 차례를 놓는다. 한 발로 서기를 오래 못 하는 학생에게 "친구 어깨를 살짝 잡아도 돼요"라고 말해 준다.',
            task: '선생님 신호에 맞추어 움직임을 해 보고, 해 본 차례대로 이름 카드를 놓아요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '움직이기 전에 둘레를 살펴보고 확인한 것을 눌러 표시해요.', toolOptions: { safety: ['두 팔을 벌려도 친구와 닿지 않아요', '바닥에 떨어진 물건이 없어요', '실내화를 바르게 신었어요'] }, target: { safety: true }, difficulty: 0.05 },
              { prompt: '오늘 해 본 차례(걷기 → 한 발로 서기 → 깡충 뛰기 → 기어가기)대로 카드를 놓아요.', toolOptions: { cards: ['한 발로 서기', '기어가기', '걷기', '깡충 뛰기'] }, target: { order: ['걷기', '한 발로 서기', '깡충 뛰기', '기어가기'] }, difficulty: 0.1,
                levels: { easy: { state: { order: ['걷기', '기어가기', '한 발로 서기', '깡충 뛰기'] } } } },
              { prompt: '한 발로 서기를 세 번 해 보고, 다섯을 셀 때까지 버틴 번수를 적어요.', toolOptions: { fields: ['1번째', '2번째', '3번째'], unit: '초' }, target: { records: true }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { fields: ['오른발 1번째', '오른발 2번째', '왼발 1번째', '왼발 2번째'], unit: '초' } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 움직임 나누기', minutes: 13, tool: 'mindmap',
            teacher: '"걸을 때 내 자리가 바뀌나요?" 카드마다 일어나서 잠깐 해 보고 나누게 한다. \'제자리 뛰기\'를 \'자리를 옮겨요\'에 넣는 학생에게 직접 해 보고 발 자리를 보게 한다.',
            task: '움직임 카드를 직접 해 보며 자리를 옮기는 움직임과 제자리 움직임, 손과 발을 쓰는 움직임으로 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '움직임 카드를 자리를 옮기는 것과 제자리에서 하는 것으로 나누어 보세요.', toolOptions: { topic: '움직임', slots: ['자리를 옮겨요', '제자리에서 해요'], cards: ['걷기', '기어가기', '한 발로 서기', '제자리 뛰기'] },
                target: { sort: { '자리를 옮겨요': ['걷기', '기어가기'], '제자리에서 해요': ['한 발로 서기', '제자리 뛰기'] } }, difficulty: 0.1,
                levels: { challenge: { prompt: '움직임 카드 여섯 장을 자리를 옮기는 것과 제자리에서 하는 것으로 모두 나누어 보세요.', toolOptions: { cards: ['걷기', '기어가기', '한 발로 서기', '제자리 뛰기', '옆으로 걷기', '팔 벌려 버티기'] },
                  target: { sort: { '자리를 옮겨요': ['걷기', '기어가기', '옆으로 걷기'], '제자리에서 해요': ['한 발로 서기', '제자리 뛰기', '팔 벌려 버티기'] } } } },
                hints: ['카드의 움직임을 직접 해 보고, 끝났을 때 내 발이 처음 자리에 있는지 보세요.', '이름에 \'제자리\', \'서기\', \'버티기\'가 들어간 움직임과 \'걷기\', \'가기\'가 들어간 움직임을 견주어 보세요.', '걷기·기어가기는 자리를 옮기고, 한 발로 서기·제자리 뛰기는 제자리에서 해요.'] },
              { prompt: '공 놀이 움직임을 손으로 하는 것과 발로 하는 것으로 나누어 보세요.', toolOptions: { topic: '공 놀이 움직임', slots: ['손으로 해요', '발로 해요'], cards: ['공 던지기', '공 받기', '공 차기', '공 밟고 멈추기'] },
                target: { sort: { '손으로 해요': ['공 던지기', '공 받기'], '발로 해요': ['공 차기', '공 밟고 멈추기'] } }, difficulty: 0.15 },
              { prompt: '우리가 해 본 움직임 이름만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '오늘 해 본 움직임', basket: '해 본 움직임', cards: ['걷기', '깡충 뛰기', '기어가기', '수영하기', '스키 타기'] },
                target: { pick: ['걷기', '깡충 뛰기', '기어가기'] }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 해 본 움직임 가운데 두 가지를 이어서 할 수 있을까요? 걷다가 한 발로 서기는 어때요?" 두세 명이 잠깐 해 보게 한다. 출구 1번을 틀린 학생은 그 움직임을 다시 해 보고 발 자리를 보게 한다. 다음 시간에는 두 움직임을 잇는 방법을 짝과 정한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '움직임', slots: ['자리를 옮겨요', '제자리에서 해요'], cards: ['달리기', '두 발로 서서 팔 돌리기', '게걸음'] }, prompt: '움직임 카드를 자리를 옮기는 것과 제자리에서 하는 것으로 나누어 보세요.', target: { sort: { '자리를 옮겨요': ['달리기', '게걸음'], '제자리에서 해요': ['두 발로 서서 팔 돌리기'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '움직임은 한 번에 하나만 할 수 있을까요?', options: ['하나만 할 수 있어요', '이어서 할 수 있어요'], answer: 1, difficulty: 0.15, explain: '걷다가 멈춰 한 발로 서기처럼 움직임을 이어서 할 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '내가 해 본 움직임',
      items: [
        { type: 'figure', wide: true, prompt: '움직임을 알맞은 쪽에 선으로 이으세요.', tool: 'mindmap', figures: [{ options: { topic: '움직임', slots: ['자리를 옮겨요', '제자리에서 해요'], cards: ['걷기', '한 발로 서기', '기어가기'] }, caption: '' }], answer: '걷기·기어가기-옮겨요, 한 발로 서기-제자리' },
        { type: 'table', prompt: '움직임을 나누어 쓰세요.', columns: ['손으로 해요', '발로 해요'], rows: 2 },
        { type: 'check', prompt: '오늘 해 본 움직임에 ✓ 하세요.', options: ['걷기', '한 발로 서기', '깡충 뛰기', '기어가기'] },
        { type: 'draw', prompt: '가장 재미있던 움직임을 하는 내 모습을 그려 보세요.' },
      ],
      easy: {
        note: '직접 해 보면 쉽게 나눌 수 있어요.',
        items: [
          { type: 'choice', prompt: '자리를 옮기는 움직임에 ○ 하세요.', options: ['걷기', '한 발로 서기'], answer: '걷기' },
          { type: 'choice', prompt: '손으로 하는 움직임에 ○ 하세요.', options: ['공 던지기', '공 차기'], answer: '공 던지기' },
          { type: 'draw', prompt: '재미있던 움직임을 그려 보세요.' },
          { type: 'short', prompt: '움직임 이름 하나를 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '움직임 차례는 첫 카드가 놓여 있고, 나누기는 맞는 칸에 초록 테두리가 생겨요. 한 발로 서기는 친구 어깨를 잡아도 돼요.',
      base: '차례와 나누기를 모두 한 뒤 확인을 눌러요. 한 발로 서기를 세 번 재어요.',
      challenge: '움직임 카드가 여섯 장으로 늘고, 한 발로 서기를 양쪽 발로 재어요.',
    },
    teacherNotes: '준비: 강당이나 책상을 민 교실 공간, 작은 북. 자주 보이는 어려움: ① 움직임은 하나씩만 할 수 있다고 여긴다 → 정리에서 두 움직임을 잇는 모습을 보여 준다. ② 이름과 움직임을 헷갈린다 → 카드를 들 때마다 몸으로 먼저 해 본다. ③ 신이 나서 친구와 부딪힌다 → 손뼉 두 번이면 멈추는 신호를 처음에 연습한다. 몸이 불편한 학생은 앉아서 할 수 있는 움직임(팔 돌리기)으로 바꾼다.',
  }));

  lessons.push(L(26, {
    title: '두 움직임을 어떻게 이을지 짝과 정하기',
    objective: '두 움직임을 고르고 "○○ 하다가 ○○ 해요"처럼 잇는 방법과 신호를 짝과 정해 말하고 해 볼 수 있다.',
    illustration: ART('two paper children side by side, one walking then freezing on one leg, arrows between the poses, a small drum beside them', '걷다가 멈춰요!', [
      { motif: 'star', x: 240, y: 84, s: 0.6 }, { motif: 'leaf', x: 100, y: 220 }, { motif: 'flower', x: 390, y: 228 }]),
    safety: MOVE_SAFE,
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"걷기와 한 발로 서기를 이으려면 언제 바꿀까요?" 교사가 북을 치는 동안 걷다가 북이 멈추면 한 발로 서는 모습을 보여 준다. "바꾸는 때를 알려 주는 것을 신호라고 해요." 시연 단추로 \'걷기\'와 \'한 발로 서기\'가 되풀이되는 띠가 채워지는 모습을 보여 준다.',
        student: '북소리가 멈추면 한 발로 서는 놀이를 한 번 따라 해 봐요.',
        demo: { tool: 'pattern', options: { seq: ['걷기', '서기', '걷기', '서기', null], palette: ['걷기', '서기'] }, sequence: [{ fill: ['걷기'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 잇는 말과 신호 정하기', minutes: 12, tool: 'story',
            teacher: '"\'걷다가\'처럼 \'-다가\'를 붙이면 두 움직임이 이어져요." 말풍선 빈칸을 채운 뒤 짝과 함께 소리 내어 읽게 한다. 신호 없이 각자 바꾸면 어떻게 되는지 두 명이 해 보여 준다.',
            task: '두 움직임을 잇는 말의 빈칸을 채우고, 바꾸는 신호를 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '민지와 짝이 정한 잇는 방법이에요. 빈칸을 채워 보세요.', toolOptions: { mode: 'fill', cards: ['걷다가', '한 발로', '자다가'], slots: [{ id: 'b1', who: '민지', motif: 'leaf', label: '___ 북소리가 멈추면' }, { id: 'b2', who: '민지', motif: 'leaf', label: '___ 서요.' }] },
                target: { fill: { b1: '걷다가', b2: '한 발로' } }, difficulty: 0.1 },
              { prompt: '준호와 짝이 정한 잇는 방법이에요. 빈칸을 채워 보세요.', toolOptions: { mode: 'fill', cards: ['깡충 뛰다가', '손뼉', '빙글 돌아요', '잠을 자요'], slots: [{ id: 'b1', who: '준호', motif: 'star', label: '___' }, { id: 'b2', who: '준호', motif: 'star', label: '___ 소리가 나면' }, { id: 'b3', who: '준호', motif: 'star', label: '제자리에서 ___.' }] },
                target: { fill: { b1: '깡충 뛰다가', b2: '손뼉', b3: '빙글 돌아요' } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { cards: ['깡충 뛰다가', '손뼉', '빙글 돌아요', '잠을 자요', '노래'] } } } },
              { prompt: '두 움직임을 바꾸는 때를 알려 주는 신호만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '바꾸는 신호', cards: ['북소리가 멈춰요', '손뼉을 두 번 쳐요', '"하나, 둘, 셋, 바꿔!"', '친구를 밀어요'] },
                target: { pick: ['북소리가 멈춰요', '손뼉을 두 번 쳐요', '"하나, 둘, 셋, 바꿔!"'] }, difficulty: 0.1,
                predict: { q: '신호 없이 각자 바꾸면 짝과 잘 맞을까요?', options: ['잘 맞아요', '어긋나요'], answer: 1 },
                conclude: '신호를 정하면 짝과 같은 때에 움직임을 바꿀 수 있어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 짝과 정해 이어 보기', minutes: 14, tool: 'pattern',
            teacher: '"짝과 두 움직임을 정했나요? 띠처럼 되풀이해 볼까요?" 판에서 되풀이 띠를 채운 뒤 짝끼리 정한 움직임을 세 번 되풀이해 본다. 한 사람이 정하고 다른 사람은 따르기만 하는 짝에게 "둘이 하나씩 골라요"라고 말해 준다.',
            task: '움직임이 되풀이되는 띠의 빈칸을 채우고, 짝과 정한 두 움직임을 이어서 세 번 해 봐요.',
            levels: CARD_LV,
            items: [
              { prompt: '깡충과 빙글이 되풀이돼요. 빈칸 두 곳을 채워 보세요.', toolOptions: { seq: ['깡충', '빙글', '깡충', '빙글', null, null], palette: ['깡충', '빙글', '멈춤'] }, target: { fill: ['깡충', '빙글'] }, difficulty: 0.05 },
              { prompt: '걷기, 걷기, 서기가 되풀이돼요. 빈칸을 채워 보세요.', toolOptions: { seq: ['걷기', '걷기', '서기', '걷기', null, '서기', null, '걷기', '서기'], palette: ['걷기', '서기', '깡충'] }, target: { fill: ['걷기', '걷기'] }, difficulty: 0.2,
                hints: ['처음부터 세 칸씩 끊어 읽어 보세요.', '빈칸이 묶음의 몇 번째 자리인지 세어 보세요.', '한 묶음은 걷기-걷기-서기예요.'] },
              { prompt: '짝과 두 움직임과 신호를 정해 이어서 세 번 되풀이해 보고 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"우리 짝은 어떤 두 움직임을 어떤 신호로 이었나요?" 세 짝이 앞에 나와 보여 준다. 출구 1번에서 신호가 아닌 것을 고른 학생에게 "그것으로 바꾸는 때를 알 수 있나요?"를 묻는다.',
        exitTicket: [
          { type: 'tool', tool: 'pattern', options: { seq: ['기기', '서기', '기기', '서기', null], palette: ['기기', '서기', '깡충'] }, prompt: '기기와 서기가 되풀이돼요. 빈칸을 채워 보세요.', target: { fill: ['기기'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '두 움직임을 짝과 같은 때에 바꾸려면?', options: ['신호를 정해요', '각자 바꿔요', '빨리 해요'], answer: 0, difficulty: 0.1, explain: '북소리나 손뼉 같은 신호를 정하면 짝과 함께 바꿀 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '두 움직임 잇기',
      items: [
        { type: 'figure', wide: true, prompt: '빈칸에 알맞은 움직임을 쓰세요.', tool: 'pattern', figures: [{ options: { seq: ['깡충', '빙글', '깡충', null], palette: ['깡충', '빙글'] }, caption: '' }], answer: '빙글' },
        { type: 'blank', prompt: '짝과 정한 잇는 방법을 쓰세요.', text: '___ 하다가 ___ 신호가 나면 ___ 해요.', answer: '(짝마다 다름)' },
        { type: 'check', prompt: '바꾸는 신호에 ✓ 하세요.', options: ['북소리 멈춤', '손뼉 두 번', '"하나, 둘, 셋"', '친구 밀기'] },
        { type: 'draw', prompt: '짝과 이은 두 움직임을 차례로 그려 보세요.' },
      ],
      easy: {
        note: '"-다가"를 붙이면 두 움직임이 이어져요.',
        items: [
          { type: 'choice', prompt: '두 움직임을 잇는 말에 ○ 하세요.', options: ['걷다가 서요', '걸어요 서요'], answer: '걷다가 서요' },
          { type: 'choice', prompt: '신호에 ○ 하세요.', options: ['손뼉 두 번', '친구 밀기'], answer: '손뼉 두 번' },
          { type: 'draw', prompt: '짝과 한 움직임을 그려 보세요.' },
          { type: 'short', prompt: '이은 두 움직임을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 짝 활동은 선생님 북소리에 맞추어 해요.',
      base: '빈칸을 모두 채운 뒤 확인을 누르고, 짝과 세 번 되풀이해요.',
      challenge: '맞지 않는 카드가 섞여 있어요. 짝과 세 움직임을 이어 보아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 움직임은 하나씩만 할 수 있다고 여긴다 → "-다가"로 이어 말하고 바로 몸으로 해 본다. ② 신호 없이 각자 바꿔 짝과 어긋난다 → 북소리·손뼉 신호를 정해 함께 바꾼다. ③ 한 학생이 다 정한다 → 짝이 하나씩 고르도록 한다. 빙글 돌기는 세 바퀴 넘게 돌지 않게 해 어지럼을 막는다.',
  }));

  lessons.push(L(27, {
    title: '전래 놀이 속에 숨은 움직임 찾기',
    objective: '사방치기·비석치기·꼬리잡기 같은 전래 놀이에서 쓰는 움직임을 찾아 잇고, 한 놀이에 여러 움직임이 이어짐을 말할 수 있다.',
    illustration: ART('paper children playing traditional Korean games in a schoolyard: hopscotch squares drawn on the ground, a child tossing a flat stone, and a line of children holding waists in a tail-catching game', '놀이 속 움직임', [
      { motif: 'tree', x: 90, y: 214 }, { motif: 'sun', x: 80, y: 70, s: 0.5 }, { motif: 'flower', x: 390, y: 228 }]),
    safety: MOVE_SAFE,
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"할머니, 할아버지가 어렸을 때 하던 놀이를 아나요?" 사방치기 칸 그림을 보여 주고 "이 놀이를 하려면 어떤 움직임이 필요할까요?"라고 묻는다. 시연 단추로 \'사방치기\' 가지에 \'한 발로 뛰기\' 카드가 이어지는 모습을 보여 준다.',
        student: '알고 있는 옛날 놀이를 하나 떠올려 짝에게 말해 봐요.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '놀이 속 움직임', slots: [{ id: 's1', label: '사방치기' }], cards: ['한 발로 뛰기', '헤엄치기'], shuffle: false }, sequence: [{ match: { s1: '한 발로 뛰기' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 놀이와 움직임 잇기', minutes: 12, tool: 'mindmap',
            teacher: '놀이마다 짧게 몸으로 흉내 내 본다(사방치기는 칸 없이 제자리에서 한 발 뛰기, 비석치기는 던지는 시늉). "이 놀이에서 가장 많이 하는 움직임은 무엇일까요?" 놀이 이름만 알고 움직임을 모르는 학생에게 교사가 한 번 보여 준다.',
            task: '전래 놀이를 몸으로 흉내 내 보고, 그 놀이에서 쓰는 움직임 카드를 이어요.',
            levels: CARD_LV,
            items: [
              { prompt: '놀이마다 가장 많이 쓰는 움직임 카드를 이어 보세요.', toolOptions: { mode: 'match', topic: '놀이 속 움직임', slots: [{ id: 's1', label: '사방치기' }, { id: 's2', label: '비석치기' }, { id: 's3', label: '꼬리잡기' }], cards: ['한 발로 뛰기', '돌 던지기', '달리기'] },
                target: { match: { s1: '한 발로 뛰기', s2: '돌 던지기', s3: '달리기' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['한 발로 뛰기', '돌 던지기', '달리기', '헤엄치기'] } } } },
              { prompt: '사방치기를 할 때 이어서 하는 움직임만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '사방치기', basket: '사방치기 움직임', cards: ['돌 던지기', '한 발로 뛰기', '두 발로 내려서기', '공 차기'] },
                target: { pick: ['돌 던지기', '한 발로 뛰기', '두 발로 내려서기'] }, difficulty: 0.2,
                predict: { q: '사방치기에는 움직임이 하나만 있을까요?', options: ['하나만 있어요', '여러 개가 이어져요'], answer: 1 },
                conclude: '사방치기는 던지기, 한 발 뛰기, 두 발 내려서기가 이어진 놀이예요.' },
              { prompt: '꼬리잡기에서 하는 일을 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: '잡기', text: '머리가 꼬리를 잡으러 달려요', motif: 'star' }, { id: '줄', text: '앞 친구 허리를 잡고 한 줄로 서요', motif: 'leaf' }, { id: '피하기', text: '꼬리는 잡히지 않게 피해요', motif: 'sun' }] },
                target: { order: ['줄', '잡기', '피하기'] }, difficulty: 0.15,
                hints: ['놀이를 시작하려면 먼저 어떻게 서야 할지 생각해 보세요.', '누가 먼저 움직이고, 누가 그에 맞춰 움직이는지 견주어 보세요.', '한 줄로 서기 → 머리가 잡으러 달리기 → 꼬리가 피하기 차례예요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 놀이 속 마음 살피기', minutes: 14, tool: 'emotion',
            teacher: '"꼬리잡기에서 꼬리가 잡혔어요. 어떤 마음일까요?" 놀이 속에서 생기는 마음과 그때 할 말을 고른다. 교실 뒤 빈 곳에서 네 명씩 꼬리잡기를 걷는 빠르기로 한 판 해 본다(달리지 않고 빠르게 걷기). 넘어진 친구가 생기면 바로 멈춘다.',
            task: '놀이 속에서 생기는 마음을 고르고, 모둠이 걷는 빠르기로 꼬리잡기를 해 봐요.',
            levels: CARD_LV,
            items: [
              { prompt: '놀이 속 일에 어울리는 마음 카드를 놓아 보세요.', toolOptions: { cards: ['아쉬움', '신남', '무서움'], slots: [{ id: 's1', label: '꼬리잡기에서 내가 잡혔어요' }, { id: 's2', label: '사방치기에서 끝 칸까지 갔어요' }] },
                target: { match: { s1: '아쉬움', s2: '신남' } }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['아쉬움', '신남', '무서움', '미안함'] } } } },
              { prompt: '비석치기에서 내 돌이 친구 돌을 못 맞혔어요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '준호', situation: '준호가 비석치기에서 던진 돌이 친구 돌 옆으로 빗나갔어요.', choices: [
                { id: 'throw', text: '화가 나서 돌을 아무 데나 던져요', result: '돌이 친구 쪽으로 튀어 위험해요.', mood: '무서움', why: '화가 나서 던진 돌은 친구를 다치게 할 수 있어요.' },
                { id: 'again', text: '"다음엔 맞힐 거야" 하고 차례를 기다려요', result: '다음 차례에 더 잘 겨누어 던져요.', mood: '편안함' },
                { id: 'quit', text: '"안 해!" 하고 놀이를 그만둬요', result: '함께 놀던 친구들이 아쉬워해요.', mood: '아쉬움', why: '한 번 못 맞혔다고 그만두면 친구들은 어떤 마음일까요?' }] }, target: { choice: 'again' }, difficulty: 0.1 },
              { prompt: '네 명씩 걷는 빠르기로 꼬리잡기를 한 판 해 보고, 잡히거나 잡은 뒤 서로 "괜찮아"라고 말한 다음 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 찾은 놀이들에는 움직임이 몇 가지씩 있었나요?" 하나의 놀이에 여러 움직임이 이어져 있다는 것을 학생이 스스로 말하게 기다린다. 출구 1번을 틀린 학생은 그 놀이를 다시 흉내 내 보게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '놀이 속 움직임', slots: [{ id: 'e1', label: '줄넘기' }, { id: 'e2', label: '수건돌리기' }], cards: ['두 발 모아 뛰기', '동그랗게 앉았다 달리기'] }, prompt: '놀이마다 쓰는 움직임 카드를 이어 보세요.', target: { match: { e1: '두 발 모아 뛰기', e2: '동그랗게 앉았다 달리기' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '사방치기에 들어 있는 움직임은?', options: ['한 발로 뛰기만', '던지기·한 발 뛰기·두 발 내려서기', '헤엄치기'], answer: 1, difficulty: 0.15, explain: '사방치기는 여러 움직임이 이어진 놀이예요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '놀이 속 움직임',
      items: [
        { type: 'figure', wide: true, prompt: '놀이와 움직임을 선으로 이으세요.', tool: 'mindmap', figures: [{ options: { mode: 'match', topic: '놀이 속 움직임', slots: [{ id: 's1', label: '사방치기' }, { id: 's2', label: '꼬리잡기' }], cards: ['한 발로 뛰기', '달리기'] }, caption: '' }], answer: '사방치기-한 발로 뛰기, 꼬리잡기-달리기' },
        { type: 'table', prompt: '놀이와 그 놀이의 움직임을 쓰세요.', columns: ['놀이', '움직임'], cells: [['사방치기', ''], ['비석치기', ''], ['줄넘기', '']] },
        { type: 'choice', prompt: '놀이에서 졌을 때 알맞은 말에 ○ 하세요.', options: ['"다음엔 잘할 거야"', '"안 해!"'], answer: '"다음엔 잘할 거야"' },
        { type: 'draw', prompt: '가장 해 보고 싶은 전래 놀이를 그려 보세요.' },
      ],
      easy: {
        note: '놀이를 몸으로 흉내 내 보면 움직임을 알 수 있어요.',
        items: [
          { type: 'choice', prompt: '사방치기에서 하는 움직임에 ○ 하세요.', options: ['한 발로 뛰기', '헤엄치기'], answer: '한 발로 뛰기' },
          { type: 'choice', prompt: '꼬리잡기에서 하는 움직임에 ○ 하세요.', options: ['달리기', '돌 던지기'], answer: '달리기' },
          { type: 'draw', prompt: '해 보고 싶은 놀이를 그려 보세요.' },
          { type: 'short', prompt: '놀이 이름을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 꼬리잡기는 선생님과 함께 천천히 걸어요.',
      base: '모두 이은 뒤 확인을 누르고, 모둠 꼬리잡기를 한 판 해요.',
      challenge: '맞지 않는 움직임 카드가 섞여 있어요. 한 놀이에 들어 있는 움직임을 세 가지 넘게 찾아 말해요.',
    },
    teacherNotes: '전래 놀이 안내: 사방치기·비석치기·꼬리잡기·수건돌리기는 오래전부터 전해 오는 놀이로 규칙은 지역마다 조금씩 다르다. 교실에서는 비석치기 대신 종이 비석과 콩주머니를 쓴다. 자주 보이는 어려움: ① 놀이 하나에 움직임 하나만 있다고 여긴다 → 놀이 차례를 몸으로 따라 하며 움직임을 센다. ② 졌을 때 화를 낸다 → "다음엔"이라는 말을 함께 연습한다. ③ 꼬리잡기에서 세게 당긴다 → 걷는 빠르기와 허리를 살짝 잡는 약속을 먼저 지킨다.',
  }));

  lessons.push(L(28, {
    title: '안전하게 이어 하려면 무엇을 살필까',
    objective: '움직임을 이어서 하기 전에 살필 것을 점검하고, 준비 운동·이어 하기·정리 운동 차례를 정할 수 있다.',
    illustration: ART('paper children stretching in a circle before play, a teacher checking the floor for objects, cones placed at safe distances', '움직이기 전에 살펴요', [
      { motif: 'sun', x: 80, y: 70, s: 0.5 }, { motif: 'tree', x: 380, y: 214 }, { motif: 'leaf', x: 110, y: 220 }]),
    safety: MOVE_SAFE,
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"지난 시간 꼬리잡기를 할 때 넘어질 뻔한 친구가 있었나요? 왜 그랬을까요?" 대답(바닥에 가방, 너무 가까이, 갑자기 달림)을 칠판에 적는다. "오늘은 안전하게 움직임을 이으려면 무엇을 살필지 정해요." 시연 단추로 준비 운동 → 이어 하기 → 정리 운동 카드가 놓이는 모습을 보여 준다.',
        student: '움직이다가 넘어질 뻔했던 때를 하나 떠올려 봐요.',
        demo: { tool: 'timer', options: { cards: ['준비 운동', '정리 운동'] }, sequence: [{ order: ['준비 운동', '정리 운동'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 움직이기 전 점검과 차례', minutes: 13, tool: 'timer',
            teacher: '"점검 목록은 눈으로 직접 보고 눌러요." 모둠마다 자리 둘레를 살핀 뒤 표시하게 한다. 이어 준비 운동(목·어깨·발목 돌리기)을 함께 하고, 왜 먼저 하는지 묻는다. 정리 운동을 빼먹으려는 학생에게 "숨이 찬 채로 바로 앉으면 어떨까요?"를 묻는다.',
            task: '자리 둘레를 직접 살펴 점검하고, 준비 운동부터 정리 운동까지 차례를 정해요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '움직임을 잇기 전에 우리 모둠 자리를 직접 살펴보고 확인한 것을 표시해요.', toolOptions: { safety: ['친구와 두 팔 간격으로 떨어졌어요', '바닥에 가방과 물통이 없어요', '신발 끈이 묶여 있어요', '멈춤 신호를 모두 알아요'] }, target: { safety: true }, difficulty: 0.05 },
              { prompt: '움직임 놀이의 차례대로 카드를 놓아요.', toolOptions: { cards: ['정리 운동', '두 움직임 이어 하기', '준비 운동', '물 마시고 쉬기'] }, target: { order: ['준비 운동', '두 움직임 이어 하기', '정리 운동', '물 마시고 쉬기'] }, difficulty: 0.15,
                levels: { easy: { state: { order: ['준비 운동', '정리 운동', '두 움직임 이어 하기', '물 마시고 쉬기'] } } },
                hints: ['몸을 데우는 운동과 몸을 쉬게 하는 운동이 각각 언제 오는지 생각해 보세요.', '본 놀이 앞에 오는 운동과 뒤에 오는 운동을 견주어 보세요.', '준비 운동 → 이어 하기 → 정리 운동 → 물 마시고 쉬기 차례예요.'] },
              { prompt: '준비 운동으로 목, 어깨, 발목을 차례로 돌려 보고, 모두 했는지 표시해요.', target: { selfCheck: ['목을 천천히 돌렸어요', '어깨를 앞뒤로 돌렸어요', '발목을 양쪽 다 돌렸어요'] }, difficulty: 0.05 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 위험할 때는 이렇게', minutes: 14, tool: 'emotion',
            teacher: '"이어 하다가 친구와 부딪힐 것 같아요. 어떻게 할까요?" 고른 뒤 결과를 소리 내어 읽게 한다. 멈춤 신호(손뼉 두 번)를 다섯 번 연습한다. 멈추지 않고 계속 뛰는 학생에게 "멈추지 않으면 누가 다칠 수 있을까요?"를 묻는다.',
            task: '움직이다 생기는 위험한 때에 어떻게 할지 고르고, 멈춤 신호를 연습해요.',
            levels: CARD_LV,
            items: [
              { prompt: '깡충 뛰다가 앞 친구와 너무 가까워졌어요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '서아', situation: '서아가 깡충 뛰며 나아가는데, 앞 친구가 갑자기 멈춰 바로 앞에 있어요.', choices: [
                { id: 'push', text: '친구를 밀고 지나가요', result: '친구가 넘어져 무릎을 다쳐요.', mood: '슬픔', why: '밀린 친구는 어떻게 될까요?' },
                { id: 'stop', text: '그 자리에 멈추고 한 걸음 떨어져요', result: '둘 다 다치지 않고 다시 이어서 해요.', mood: '편안함' },
                { id: 'jump', text: '친구를 뛰어넘어요', result: '발이 걸려 둘 다 넘어질 뻔해요.', mood: '무서움', why: '뛰어넘다가 걸리면 어떻게 될까요?' }] }, target: { choice: 'stop' }, difficulty: 0.1 },
              { prompt: '안전 약속을 지켰을 때와 어겼을 때의 마음 카드를 놓아 보세요.', toolOptions: { cards: ['편안함', '무서움', '신남'], slots: [{ id: 's1', label: '바닥의 물통을 치우고 마음껏 뛰었어요' }, { id: 's2', label: '가까이 붙어 뛰다가 머리를 부딪혔어요' }] },
                target: { match: { s1: ['편안함', '신남'], s2: '무서움' } }, difficulty: 0.1 },
              { prompt: '선생님이 손뼉을 두 번 치면 그 자리에 멈추는 연습을 다섯 번 하고 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"정리 운동으로 숨을 크게 세 번 쉬어 볼까요?" 함께 정리 운동을 한 뒤 오늘 정한 차례를 다시 말하게 한다. 출구 1번에서 차례를 바꾼 학생에게 준비 운동을 하는 까닭을 묻는다. 다음 시간부터 정한 움직임을 직접 이어서 해 본다고 예고한다.',
        exitTicket: [
          { type: 'tool', tool: 'timer', options: { cards: ['정리 운동', '준비 운동', '깡충 뛰고 돌기'] }, prompt: '움직임 놀이 차례대로 카드를 놓아 보세요.', target: { order: ['준비 운동', '깡충 뛰고 돌기', '정리 운동'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '움직이다 친구와 부딪힐 것 같을 때는?', options: ['멈추고 떨어져요', '밀고 가요', '더 빨리 뛰어요'], answer: 0, difficulty: 0.1, explain: '멈추고 한 걸음 떨어지면 둘 다 다치지 않아요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '안전하게 움직여요',
      items: [
        { type: 'figure', wide: true, prompt: '차례대로 카드 아래에 1, 2, 3 번호를 쓰세요.', tool: 'timer', figures: [{ options: { cards: ['정리 운동', '준비 운동', '이어 하기'] }, caption: '' }], answer: '준비 운동 1, 이어 하기 2, 정리 운동 3' },
        { type: 'check', prompt: '움직이기 전에 살필 것에 ✓ 하세요.', options: ['친구와의 간격', '바닥의 물건', '신발 끈', '멈춤 신호'] },
        { type: 'choice', prompt: '친구와 부딪힐 것 같을 때 알맞은 것에 ○ 하세요.', options: ['멈추고 떨어져요', '밀고 가요', '뛰어넘어요'], answer: '멈추고 떨어져요' },
        { type: 'short', prompt: '준비 운동을 먼저 하는 까닭을 쓰세요.' },
      ],
      easy: {
        note: '준비 운동으로 시작해서 정리 운동으로 끝나요.',
        items: [
          { type: 'choice', prompt: '먼저 하는 운동에 ○ 하세요.', options: ['준비 운동', '정리 운동'], answer: '준비 운동' },
          { type: 'choice', prompt: '손뼉 두 번이면?', options: ['멈춰요', '뛰어요'], answer: '멈춰요' },
          { type: 'draw', prompt: '준비 운동을 하는 내 모습을 그려 보세요.' },
          { type: 'short', prompt: '살필 것 하나를 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '차례 카드는 첫 카드가 바른 자리에 있어요. 맞는 마음 칸에 초록 테두리가 생겨요.',
      base: '점검·차례·준비 운동을 모두 하고 확인을 눌러요.',
      challenge: '점검을 마치고 우리 모둠만의 안전 약속을 하나 더 만들어 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 점검 항목을 보지 않고 다 누른다 → "눈으로 본 것만" 누르게 하고 모둠 자리를 함께 둘러본다. ② 준비·정리 운동을 귀찮아한다 → 하지 않았을 때 몸이 어떤지 짧게 이야기 나눈다. ③ 멈춤 신호에 늦게 멈춘다 → 신호 연습을 놀이처럼 되풀이한다.',
  }));

  // ───────────────────────── 29~32차시: 친구와 움직임 이어 하기(실제로 해 보기) ─────────────────────────

  lessons.push(L(29, {
    title: '걷다가 멈춰 한 발로 서기 이어 하기',
    objective: '북소리에 맞춰 걷다가 멈춰 한 발로 서기를 이어서 하고, 버틴 시간을 재어 적을 수 있다.',
    illustration: ART('paper children walking in a circle around the room, then freezing on one leg with arms spread like airplane wings when a drum stops', '북이 멈추면 한 발로!', [
      { motif: 'star', x: 240, y: 84, s: 0.6 }, { motif: 'sun', x: 80, y: 70, s: 0.5 }, { motif: 'leaf', x: 380, y: 220 }]),
    safety: MOVE_SAFE,
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"한 발로 서면 몸이 흔들려요. 어떻게 하면 덜 흔들릴까요?" 팔을 비행기처럼 벌리기, 앞의 한 곳 보기를 함께 해 본다. 시연 단추로 오늘 할 차례 카드가 놓이는 모습을 보여 준다.',
        student: '팔을 벌리고 한 발로 서서 다섯을 세어 봐요.',
        demo: { tool: 'timer', options: { cards: ['북소리 들으며 걷기', '멈춰 한 발로 서기'] }, sequence: [{ order: ['북소리 들으며 걷기', '멈춰 한 발로 서기'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 이어 하고 시간 재기', minutes: 17, tool: 'timer',
            teacher: '준비 운동을 한 뒤 반을 둘로 나눈다. 한 모둠이 북소리에 걷다가 멈춰 한 발로 서면, 다른 모둠이 손가락으로 초를 세어 준다. "걷기에서 서기로 바로 바뀌었나요, 몇 걸음 더 갔나요?" 한 발 서기만 잘하고 멈추는 때를 놓치는 학생에게 "북소리를 듣는 것도 잇기예요"라고 말해 준다.',
            task: '북소리에 맞추어 걷다가 멈춰 한 발로 서고, 친구가 세어 준 시간을 적어요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '움직이기 전에 우리 모둠 자리를 살펴보고 확인한 것을 표시해요.', toolOptions: { safety: ['둘레에 부딪힐 책상이 없어요', '실내화 뒤꿈치를 꺾어 신지 않았어요', '손뼉 두 번이면 멈춰요'] }, target: { safety: true }, difficulty: 0.05 },
              { prompt: '오늘 이어 하는 차례대로 카드를 놓아요.', toolOptions: { cards: ['멈춰 한 발로 서기', '준비 운동', '북소리 들으며 걷기', '정리 운동'] }, target: { order: ['준비 운동', '북소리 들으며 걷기', '멈춰 한 발로 서기', '정리 운동'] }, difficulty: 0.1,
                levels: { easy: { state: { order: ['준비 운동', '멈춰 한 발로 서기', '북소리 들으며 걷기', '정리 운동'] } } } },
              { prompt: '걷다가 멈춰 한 발로 서기를 세 번 하고, 친구가 세어 준 버틴 시간을 적어요.', toolOptions: { fields: ['1번째', '2번째', '3번째'], unit: '초' }, target: { records: true }, difficulty: 0.15,
                levels: { challenge: { prompt: '걷다가 멈춰 오른발, 왼발로 번갈아 서기를 두 번씩 하고 버틴 시간을 적어요.', toolOptions: { fields: ['오른발 1번째', '왼발 1번째', '오른발 2번째', '왼발 2번째'], unit: '초' } } } },
              { prompt: '이어 하기를 마치고 내가 한 것을 모두 표시해요.', target: { selfCheck: ['북소리가 멈추자 바로 섰어요', '서 있을 때 팔을 벌렸어요', '친구 시간도 세어 주었어요'] }, difficulty: 0.05 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 더 잘 잇는 방법', minutes: 10, tool: 'emotion',
            teacher: '"멈출 때 휘청했던 친구, 어떻게 하면 좋을까요?" 고른 방법으로 한 번 더 해 본다. 버틴 시간이 짧아 속상한 학생에게 "처음보다 늘었는지 보세요"라고 말해 준다.',
            task: '멈출 때 흔들렸을 때 어떻게 할지 고르고, 그 방법으로 한 번 더 해 봐요.',
            levels: CARD_LV,
            items: [
              { prompt: '북소리가 멈췄는데 몸이 휘청해 두 발이 땅에 닿았어요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '하준', situation: '하준이가 걷다가 멈춰 한 발로 서려는데 몸이 앞으로 쏠려 두 발을 디뎠어요.', choices: [
                { id: 'slow', text: '조금 천천히 걷다가 멈춰 봐요', result: '멈출 때 몸이 덜 쏠려 한 발로 섰어요.', mood: '뿌듯함' },
                { id: 'give', text: '"나는 못 해" 하고 앉아 있어요', result: '다시 해 볼 기회를 놓쳐요.', mood: '속상함', why: '앉아 있으면 더 잘할 수 있을까요?' },
                { id: 'grab', text: '옆 친구 옷을 세게 붙잡아요', result: '친구도 같이 휘청해요.', mood: '미안함', why: '세게 붙잡힌 친구는 어떻게 될까요?' }] }, target: { choice: 'slow' }, difficulty: 0.1 },
              { prompt: '이어 하기를 하며 생긴 마음 카드를 알맞은 일에 놓아 보세요.', toolOptions: { cards: ['뿌듯함', '속상함', '졸림'], slots: [{ id: 's1', label: '처음보다 두 초 더 버텼어요' }, { id: 's2', label: '세 번 모두 바로 넘어졌어요' }] },
                target: { match: { s1: '뿌듯함', s2: '속상함' } }, difficulty: 0.1 },
              { prompt: '고른 방법으로 한 번 더 이어 해 보고 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"세 번 가운데 언제 가장 오래 버텼나요? 왜 그랬을까요?" 두세 명의 기록을 듣는다. 정리 운동으로 다리를 털고 숨을 고른다. 다음 시간에는 모둠이 차례를 지켜 이어 한다.',
        exitTicket: [
          { type: 'tool', tool: 'timer', options: { cards: ['멈춰 한 발로 서기', '정리 운동', '북소리 들으며 걷기'] }, prompt: '이어 하기 차례대로 카드를 놓아 보세요.', target: { order: ['북소리 들으며 걷기', '멈춰 한 발로 서기', '정리 운동'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '한 발로 설 때 덜 흔들리려면?', options: ['팔을 벌리고 앞의 한 곳을 봐요', '눈을 감고 빨리 돌아요', '친구를 세게 잡아요'], answer: 0, difficulty: 0.1, explain: '팔을 벌리고 한 곳을 보면 몸이 덜 흔들려요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '걷다가 한 발로 서기',
      items: [
        { type: 'table', prompt: '버틴 시간을 쓰세요.', columns: ['몇 번째', '버틴 시간(초)'], cells: [['1번째', ''], ['2번째', ''], ['3번째', '']] },
        { type: 'figure', wide: true, prompt: '차례대로 카드 아래에 1, 2, 3 번호를 쓰세요.', tool: 'timer', figures: [{ options: { cards: ['멈춰 한 발로 서기', '준비 운동', '북소리 들으며 걷기'] }, caption: '' }], answer: '준비 운동 1, 걷기 2, 한 발로 서기 3' },
        { type: 'choice', prompt: '흔들리지 않는 방법에 ○ 하세요.', options: ['팔 벌리기', '눈 감고 돌기'], answer: '팔 벌리기' },
        { type: 'short', prompt: '가장 오래 버틴 때는 왜 잘됐는지 쓰세요.' },
      ],
      easy: {
        note: '팔을 벌리면 덜 흔들려요.',
        items: [
          { type: 'choice', prompt: '북소리가 멈추면?', options: ['한 발로 서요', '계속 걸어요'], answer: '한 발로 서요' },
          { type: 'choice', prompt: '흔들리지 않는 방법에 ○ 하세요.', options: ['팔 벌리기', '친구 밀기'], answer: '팔 벌리기' },
          { type: 'draw', prompt: '한 발로 선 내 모습을 그려 보세요.' },
          { type: 'short', prompt: '가장 오래 버틴 시간을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '차례 카드는 첫 카드가 바른 자리에 있어요. 한 발로 서기는 벽에 손을 대고 해도 돼요.',
      base: '세 번 이어 하고 시간을 적은 뒤 확인을 눌러요.',
      challenge: '오른발, 왼발을 번갈아 서고 양쪽 시간을 견주어요.',
    },
    teacherNotes: '준비: 작은 북(없으면 손뼉), 걷는 원 표시. 자주 보이는 어려움: ① 움직임을 하나씩 따로 하려 한다 → 북이 멈추는 때가 \'잇는 때\'임을 알려 준다. ② 버틴 시간만 겨룬다 → 내 처음 기록과 견주게 한다. ③ 친구를 붙잡아 같이 넘어진다 → 흔들리면 두 발을 디디는 것이 안전하다고 말해 준다.',
  }));

  lessons.push(L(30, {
    title: '모둠에서 차례 지켜 이어달리듯 움직이기',
    objective: '모둠 친구와 차례를 정해 앞 친구의 움직임을 이어받아 하고, 내 차례가 아닐 때 할 일을 말할 수 있다.',
    illustration: ART('a line of four paper children passing a soft beanbag from one to the next, each doing a different movement—walking, crawling, hopping—while waiting friends cheer', '내 차례가 오면 이어받아요', [
      { motif: 'star', x: 240, y: 84, s: 0.6 }, { motif: 'flower', x: 390, y: 228 }, { motif: 'heart', x: 100, y: 80, s: 0.5 }]),
    safety: MOVE_SAFE,
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"이어달리기를 본 적 있나요? 앞 친구가 막대를 건네면 다음 친구가 달려요." 오늘은 콩주머니를 건네받으면 정해진 움직임을 한다고 알려 준다. 시연 단추로 모둠 차례 카드가 놓이는 모습을 보여 준다.',
        student: '이어달리기에서 다음 사람은 언제 달리는지 말해 봐요.',
        demo: { tool: 'kitchen', options: { mode: 'order', cards: [{ id: '건네기', text: '앞 친구가 콩주머니를 건네요' }, { id: '받기', text: '내가 받아서 움직여요' }], shuffle: false }, sequence: [{ order: ['건네기', '받기'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 모둠 차례 정하기', minutes: 11, tool: 'kitchen',
            teacher: '"한 사람이 끝나면 다음 사람이 시작해요. 기다리는 사람은 무엇을 할까요?" 차례 카드를 놓고 기다릴 때 할 일을 고른다. \'자기 차례만 잘하면 된다\'고 말하는 학생에게 "앞 친구가 콩주머니를 떨어뜨렸어요. 어떻게 할까요?"를 묻는다.',
            task: '모둠 이어 하기 차례를 놓고, 차례를 기다리는 동안 할 일을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '모둠 이어 하기 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: '받기', text: '콩주머니를 받으면 반환점까지 기어가요' }, { id: '줄', text: '모둠이 한 줄로 서요' }, { id: '건네기', text: '돌아와 다음 친구에게 건네요' }, { id: '앉기', text: '끝난 친구는 줄 끝에 앉아요' }] },
                target: { order: ['줄', '받기', '건네기', '앉기'] }, difficulty: 0.15,
                levels: { easy: { state: { order: ['줄', '건네기', '받기', '앉기'] } } },
                hints: ['놀이를 시작하기 전에 모둠이 먼저 해야 할 일을 찾아보세요.', '콩주머니를 받는 일과 건네는 일 가운데 무엇이 먼저일까요?', '한 줄로 서기 → 받아서 기어가기 → 돌아와 건네기 → 줄 끝에 앉기예요.'] },
              { prompt: '내 차례가 아닐 때 할 일에만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '기다리는 동안', items: [{ id: 'cheer', text: '"힘내!" 하고 응원해요' }, { id: 'watch', text: '앞 친구가 어디까지 갔는지 봐요' }, { id: 'run', text: '먼저 뛰어나가요' }, { id: 'ready', text: '두 손을 내밀고 받을 준비를 해요' }] },
                target: { checklist: ['cheer', 'watch', 'ready'] }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { items: [{ id: 'cheer', text: '"힘내!" 하고 응원해요' }, { id: 'watch', text: '앞 친구가 어디까지 갔는지 봐요' }, { id: 'run', text: '먼저 뛰어나가요' }, { id: 'ready', text: '두 손을 내밀고 받을 준비를 해요' }, { id: 'blame', text: '늦은 친구에게 "너 때문이야" 해요' }, { id: 'turn', text: '줄 밖으로 나가 혼자 놀아요' }] } } } },
              { prompt: '판마다 이어 할 움직임 카드를 놓아 보세요. 첫 판은 몸을 낮추어 가고, 둘째 판은 게처럼 옆으로 가요.', toolOptions: { mode: 'match', cards: ['기어가기', '옆으로 걷기', '헤엄치기'], slots: [{ id: 'r1', label: '첫 판' }, { id: 'r2', label: '둘째 판' }] },
                target: { match: { r1: '기어가기', r2: '옆으로 걷기' } }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 실제로 이어 하기', minutes: 16, tool: 'emotion',
            teacher: '네 명 모둠으로 반환점(의자)까지 기어갔다 와서 콩주머니를 건네는 이어 하기를 두 판 한다. 첫 판은 기어가기, 둘째 판은 옆으로 걷기로 바꾼다. 콩주머니를 떨어뜨린 모둠에게 "어떻게 다시 이어 갈까요?"를 묻는다.',
            task: '모둠이 차례를 지켜 이어 하기를 두 판 하고, 생긴 일에 어떻게 할지 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '모둠이 반환점까지 기어갔다 오며 콩주머니를 건네는 이어 하기를 두 판 하고 "다 했어요"를 누르세요.', free: true, talk: true },
              { prompt: '앞 친구가 콩주머니를 건네다 떨어뜨렸어요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '서아', situation: '서아 앞 친구가 돌아와 콩주머니를 건네다 바닥에 떨어뜨렸어요.', choices: [
                { id: 'pick', text: '"괜찮아" 하고 주워서 바로 출발해요', result: '모둠이 멈추지 않고 이어 가요.', mood: '편안함' },
                { id: 'yell', text: '"왜 떨어뜨려!" 하고 소리쳐요', result: '친구가 울상이 되고 모둠이 멈춰요.', mood: '속상함', why: '소리를 들은 친구는 어떤 마음일까요?' },
                { id: 'wait', text: '친구가 주워 줄 때까지 팔짱 끼고 기다려요', result: '시간이 흘러 모둠이 늦어져요.', mood: '답답함', why: '팔짱 끼고 기다리면 이어 하기가 이어질까요?' }] }, target: { choice: 'pick' }, difficulty: 0.1 },
              { prompt: '이어 하기를 하며 생긴 마음 카드를 알맞은 일에 놓아 보세요.', toolOptions: { cards: ['고마움', '미안함', '졸림'], slots: [{ id: 's1', label: '친구들이 "힘내!" 하고 응원해 주었어요' }, { id: 's2', label: '내가 차례를 모르고 먼저 뛰어나갔어요' }] },
                target: { match: { s1: '고마움', s2: '미안함' } }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"둘째 판이 첫 판보다 잘된 모둠은 무엇이 달랐나요?" 모둠마다 한 가지를 말하게 한다. 출구 1번을 틀린 학생에게는 기다리는 사람도 이어 하기의 한 부분임을 다시 말해 준다.',
        exitTicket: [
          { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '차례를 기다릴 때', items: [{ id: 'hand', text: '손을 내밀고 준비해요' }, { id: 'push', text: '앞 친구를 밀어요' }, { id: 'say', text: '"잘한다!" 하고 말해요' }] }, prompt: '차례를 기다리는 동안 할 일에만 표시해 보세요.', target: { checklist: ['hand', 'say'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '모둠 이어 하기가 잘되려면?', options: ['내 차례만 잘하면 돼요', '기다릴 때도 응원하고 준비해요'], answer: 1, difficulty: 0.15, explain: '기다리는 친구가 준비하고 응원해야 이어 하기가 끊기지 않아요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '모둠 이어 하기',
      items: [
        { type: 'figure', wide: true, prompt: '차례대로 카드 아래에 1, 2, 3 번호를 쓰세요.', tool: 'kitchen', figures: [{ options: { mode: 'order', cards: [{ id: '건네기', text: '돌아와 건네요' }, { id: '줄', text: '한 줄로 서요' }, { id: '받기', text: '받아서 기어가요' }] }, caption: '' }], answer: '줄 1, 받기 2, 건네기 3' },
        { type: 'check', prompt: '기다릴 때 할 일에 ✓ 하세요.', options: ['응원하기', '준비하기', '먼저 뛰어나가기', '앞 친구 보기'] },
        { type: 'blank', prompt: '친구가 콩주머니를 떨어뜨렸을 때 할 말을 쓰세요.', text: '"___"', answer: '(학생마다 다름)' },
        { type: 'draw', prompt: '모둠이 이어 하는 모습을 그려 보세요.' },
      ],
      easy: {
        note: '기다리는 친구도 이어 하기를 함께해요.',
        items: [
          { type: 'choice', prompt: '기다릴 때 할 일에 ○ 하세요.', options: ['응원하기', '먼저 뛰기'], answer: '응원하기' },
          { type: 'choice', prompt: '친구가 떨어뜨렸을 때 할 말에 ○ 하세요.', options: ['"괜찮아"', '"왜 그래!"'], answer: '"괜찮아"' },
          { type: 'draw', prompt: '모둠 친구들을 그려 보세요.' },
          { type: 'short', prompt: '내 차례가 몇 번째였는지 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '차례 카드는 첫 카드가 바른 자리에 있고, 맞는 칸에 초록 테두리가 생겨요. 기어가기가 힘들면 걷기로 바꿔요.',
      base: '차례와 기다릴 일을 모두 정한 뒤 확인을 눌러요. 이어 하기를 두 판 해요.',
      challenge: '기다릴 때 할 일에 맞지 않는 것이 더 섞여 있어요. 셋째 판 움직임을 모둠이 직접 정해요.',
    },
    teacherNotes: '준비: 모둠마다 콩주머니 1개, 반환점 의자. 자주 보이는 어려움: ① 자기 차례만 잘하면 된다고 여긴다 → 기다리는 친구의 응원과 준비가 이어 하기를 빠르게 한다는 것을 둘째 판에서 견주게 한다. ② 서로 이기려고 서두르다 부딪힌다 → 모둠끼리 겨루지 않고 우리 모둠 첫 판과 둘째 판을 견준다. ③ 떨어뜨린 친구를 탓한다 → "괜찮아"를 모둠 약속으로 정한다.',
  }));

  lessons.push(L(31, {
    title: '손뼉 장단에 맞춰 세 움직임 되풀이하기',
    objective: '되풀이되는 장단 띠에서 빈칸의 움직임을 찾고, 짝과 정한 세 움직임을 손뼉 장단에 맞추어 이어 할 수 있다.',
    illustration: ART('paper children in pairs clapping, stamping, and jumping in rhythm while musical notes float above them', '짝, 쿵, 폴짝!', [
      { motif: 'star', x: 240, y: 84, s: 0.6 }, { motif: 'heart', x: 100, y: 80, s: 0.5 }, { motif: 'flower', x: 390, y: 228 }]),
    safety: MOVE_SAFE,
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"짝(손뼉), 쿵(발 구르기), 짝, 쿵. 다음은 무엇일까요?" 교사가 몸으로 장단을 보여 주고 학생이 따라 한다. "움직임이 정해진 차례로 되풀이되면 장단이 돼요." 시연 단추로 장단 띠의 빈칸이 채워지는 모습을 보여 준다.',
        student: '선생님을 따라 짝, 쿵, 짝, 쿵을 해 봐요.',
        demo: { tool: 'pattern', options: { seq: ['짝', '쿵', '짝', '쿵', null], palette: ['짝', '쿵'] }, sequence: [{ fill: ['짝'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 장단 띠 채우기', minutes: 13, tool: 'pattern',
            teacher: '"띠를 소리 내어 읽으며 몸으로 해 보면 빈칸이 들려요." 띠를 채울 때마다 다 함께 몸으로 따라 한다. 바로 앞 칸만 보고 채우는 학생에게 "한 묶음이 몇 칸인지 먼저 끊어 보세요"라고 말해 준다.',
            task: '장단 띠를 몸으로 따라 하며 빈칸에 들어갈 움직임을 채워요.',
            levels: CARD_LV,
            items: [
              { prompt: '짝, 쿵, 폴짝이 되풀이돼요. 빈칸을 채워 보세요.', toolOptions: { seq: ['짝', '쿵', '폴짝', '짝', null, '폴짝', '짝', '쿵', null], palette: ['짝', '쿵', '폴짝'] }, target: { fill: ['쿵', '폴짝'] }, difficulty: 0.15,
                hints: ['처음부터 세 칸씩 끊어 읽어 보세요.', '빈칸이 묶음의 몇 번째 자리인지 세어 보세요.', '한 묶음은 짝-쿵-폴짝이에요.'] },
              { prompt: '짝, 짝, 쿵이 되풀이돼요. 빈칸을 채워 보세요.', toolOptions: { seq: ['짝', '짝', '쿵', null, '짝', '쿵', '짝', null, '쿵'], palette: ['짝', '쿵', '폴짝'] }, target: { fill: ['짝', '짝'] }, difficulty: 0.2 },
              { prompt: '쿵, 폴짝, 폴짝, 짝이 되풀이돼요. 빈칸을 채워 보세요.', toolOptions: { seq: ['쿵', '폴짝', '폴짝', '짝', '쿵', null, '폴짝', null], palette: ['짝', '쿵', '폴짝'] }, target: { fill: ['폴짝', '짝'] }, difficulty: 0.25,
                levels: { easy: { prompt: '짝, 폴짝이 되풀이돼요. 빈칸을 채워 보세요.', toolOptions: { seq: ['짝', '폴짝', '짝', '폴짝', null, '폴짝'] }, target: { fill: ['짝'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 짝과 우리 장단 만들기', minutes: 14, tool: 'story',
            teacher: '"짝과 세 움직임을 골라 우리 장단을 만들어요." 말풍선 빈칸으로 장단을 정한 뒤 짝끼리 마주 보고 세 번 되풀이한다. 한 학생만 정하는 짝에게 "하나씩 번갈아 골라요"라고 말해 준다. 폴짝은 제자리에서 낮게 뛴다.',
            task: '짝과 세 움직임으로 장단을 정해 빈칸을 채우고, 마주 보고 세 번 되풀이해요.',
            levels: CARD_LV,
            items: [
              { prompt: '지우와 짝이 만든 장단이에요. "짝, 쿵, 폴짝"이 되도록 빈칸을 채워 보세요.', toolOptions: { mode: 'fill', cards: ['짝', '쿵', '폴짝', '쉿'], slots: [{ id: 'b1', who: '지우', motif: 'star', label: '처음엔 손뼉 ___' }, { id: 'b2', who: '지우', motif: 'star', label: '다음엔 발 구르기 ___' }, { id: 'b3', who: '지우', motif: 'star', label: '마지막엔 제자리 뛰기 ___' }] },
                target: { fill: { b1: '짝', b2: '쿵', b3: '폴짝' } }, difficulty: 0.15 },
              { prompt: '짝과 장단을 맞추는 방법을 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: '해보기', text: '천천히 한 번 해 봐요', motif: 'leaf' }, { id: '정하기', text: '세 움직임을 하나씩 번갈아 골라요', motif: 'star' }, { id: '빠르게', text: '조금 빠르게 세 번 되풀이해요', motif: 'sun' }] },
                target: { order: ['정하기', '해보기', '빠르게'] }, difficulty: 0.15 },
              { prompt: '짝과 정한 세 움직임 장단을 마주 보고 세 번 되풀이한 뒤 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"우리 짝 장단을 반 친구들이 따라 해 볼까요?" 두 짝의 장단을 반 전체가 따라 한다. 움직임은 세 개도 넘게 이어서 할 수 있다는 것을 학생 말로 정리하게 기다린다.',
        exitTicket: [
          { type: 'tool', tool: 'pattern', options: { seq: ['쿵', '짝', '짝', '쿵', '짝', null], palette: ['짝', '쿵', '폴짝'] }, prompt: '쿵, 짝, 짝이 되풀이돼요. 빈칸을 채워 보세요.', target: { fill: ['짝'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '움직임은 몇 개까지 이어서 할 수 있을까요?', options: ['하나만', '두 개까지만', '세 개도 넘게 이을 수 있어요'], answer: 2, difficulty: 0.15, explain: '짝, 쿵, 폴짝처럼 여러 움직임을 차례로 이어서 할 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '우리 장단',
      items: [
        { type: 'figure', wide: true, prompt: '빈칸에 알맞은 움직임을 쓰세요.', tool: 'pattern', figures: [{ options: { seq: ['짝', '쿵', '폴짝', '짝', null, '폴짝'], palette: ['짝', '쿵', '폴짝'] }, caption: '' }], answer: '쿵' },
        { type: 'blank', prompt: '짝과 만든 장단을 쓰세요.', text: '___, ___, ___', answer: '(짝마다 다름)' },
        { type: 'table', prompt: '움직임과 소리를 이어 쓰세요.', columns: ['움직임', '소리'], cells: [['손뼉', ''], ['발 구르기', ''], ['제자리 뛰기', '']] },
        { type: 'draw', prompt: '짝과 장단을 맞추는 모습을 그려 보세요.' },
      ],
      easy: {
        note: '소리 내어 읽으며 몸으로 해 보아요.',
        items: [
          { type: 'choice', prompt: '짝, 쿵, 짝, 쿵 다음은?', options: ['짝', '폴짝'], answer: '짝' },
          { type: 'choice', prompt: '손뼉 소리는?', options: ['짝', '쿵'], answer: '짝' },
          { type: 'draw', prompt: '좋아하는 움직임을 그려 보세요.' },
          { type: 'short', prompt: '우리 장단을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 셋째 띠는 두 움직임으로 줄어요. 짝 장단은 두 움직임으로 해도 돼요.',
      base: '띠를 모두 채운 뒤 확인을 누르고, 짝과 세 움직임 장단을 세 번 되풀이해요.',
      challenge: '맞지 않는 카드가 섞여 있어요. 네 움직임 장단을 만들어 반에 보여 주어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 움직임은 하나씩만 할 수 있다고 여긴다 → 장단으로 세 움직임이 끊기지 않고 이어지는 것을 몸으로 느끼게 한다. ② 바로 앞 칸만 보고 채운다 → 띠를 소리 내어 읽으며 묶음을 끊는다. ③ 빨리 하려다 장단이 흐트러진다 → 천천히 한 번 하고 빠르게 한다. 폴짝은 낮게, 착지는 무릎을 굽혀 소리 없이 한다.',
  }));

  lessons.push(L(32, {
    title: '놀이 길을 따라가며 자리마다 다른 움직임 잇기',
    objective: '교실 놀이 길의 자리마다 어울리는 움직임을 찾아 정하고, 모둠이 차례로 길을 따라가며 움직임을 이어 할 수 있다.',
    illustration: ART('a paper obstacle course on a classroom floor: a tape line, a tunnel made of chairs, paper stepping stones, and a hoop, with children moving through it one after another', '자리마다 다른 움직임', [
      { motif: 'star', x: 240, y: 84, s: 0.6 }, { motif: 'leaf', x: 100, y: 220 }, { motif: 'sun', x: 80, y: 70, s: 0.5 }]),
    safety: MOVE_SAFE,
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"교실 바닥에 놀이 길을 만들었어요. 테이프 선, 의자 굴, 종이 징검다리, 훌라후프가 있어요." 길을 함께 걸어 보며 자리마다 이름을 말한다. 시연 단추로 지도에서 \'의자 굴\' 자리를 찾는 모습을 보여 준다.',
        student: '놀이 길을 보고 어느 자리가 가장 재미있어 보이는지 말해 봐요.',
        demo: { tool: 'map', options: { grid: [5, 3], places: [{ name: '출발', icon: 'dot', at: [0, 2] }, { name: '의자 굴', icon: 'dot', at: [2, 1] }, { name: '도착', icon: 'dot', at: [4, 0] }] }, sequence: [{ place: '의자 굴' }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 자리마다 어울리는 움직임', minutes: 11, tool: 'map',
            teacher: '"이 지도는 우리 교실 놀이 길이에요. 문항의 움직임을 하기 좋은 자리에 핀을 꽂아요." 지도를 보는 일이 낯선 학생에게 "출발 깃발부터 손가락으로 길을 따라가 보세요"라고 말해 준다. 자리 이름이 아니라 그 자리의 생김새를 떠올리게 한다.',
            task: '놀이 길 지도에서 문항의 움직임을 하기 좋은 자리를 찾아 핀을 꽂아요.',
            levels: MAP_LV,
            items: [
              { prompt: '몸을 낮추고 기어가야 지나갈 수 있는 자리에 핀을 꽂아 보세요.', toolOptions: { places: [{ name: '출발', icon: 'dot', at: [0, 2] }, { name: '테이프 선', icon: 'dot', at: [1, 1] }, { name: '의자 굴', icon: 'dot', at: [2, 0] }, { name: '종이 징검다리', icon: 'dot', at: [3, 2] }] }, target: { place: '의자 굴' }, difficulty: 0.1,
                hints: ['이 지도는 우리 교실 놀이 길을 위에서 내려다본 그림이에요. 출발부터 손가락으로 따라가 보세요.', '자리 이름을 읽고 그 자리가 높은지 낮은지 떠올려 보세요.', '의자를 붙여 만든 굴은 낮아서 기어가야 지나갈 수 있어요.'] },
              { prompt: '선 밖으로 나가지 않게 두 팔을 벌리고 천천히 걸어야 하는 자리에 핀을 꽂아 보세요.', toolOptions: { places: [{ name: '훌라후프', icon: 'dot', at: [3, 0] }, { name: '테이프 선', icon: 'dot', at: [1, 2] }, { name: '의자 굴', icon: 'dot', at: [2, 1] }, { name: '도착', icon: 'dot', at: [4, 2] }] }, target: { place: '테이프 선' }, difficulty: 0.1 },
              { prompt: '돌 하나에서 다음 돌로 두 발 모아 뛰어 건너는 자리에 핀을 꽂아 보세요.', toolOptions: { places: [{ name: '종이 징검다리', icon: 'dot', at: [2, 2] }, { name: '훌라후프', icon: 'dot', at: [3, 0] }, { name: '출발', icon: 'dot', at: [0, 0] }, { name: '의자 굴', icon: 'dot', at: [1, 1] }] }, target: { place: '종이 징검다리' }, difficulty: 0.15,
                conclude: '자리의 생김새를 보면 어떤 움직임을 이어야 할지 알 수 있어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 놀이 길 이어 가기', minutes: 16, tool: 'timer',
            teacher: '모둠마다 차례로 놀이 길을 따라간다. 앞 친구가 의자 굴을 빠져나오면 다음 친구가 출발한다. "굴 안에서 친구 발에 머리가 닿지 않게, 앞 친구가 나오면 들어가요." 기다리는 친구는 길 옆에 앉아 응원한다.',
            task: '놀이 길 차례를 정하고, 모둠이 차례로 길을 따라가며 움직임을 이어 해요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '놀이 길을 출발하기 전에 살펴보고 확인한 것을 표시해요.', toolOptions: { safety: ['의자 굴의 의자가 단단히 붙어 있어요', '종이 징검다리가 미끄러지지 않게 붙어 있어요', '앞 친구가 다음 자리로 가면 출발해요'] }, target: { safety: true }, difficulty: 0.05 },
              { prompt: '놀이 길 자리 차례대로 카드를 놓아요.', toolOptions: { cards: ['의자 굴 기어가기', '테이프 선 걷기', '훌라후프 안에서 한 발로 서기', '종이 징검다리 뛰기'] }, target: { order: ['테이프 선 걷기', '의자 굴 기어가기', '종이 징검다리 뛰기', '훌라후프 안에서 한 발로 서기'] }, difficulty: 0.2,
                levels: { easy: { state: { order: ['테이프 선 걷기', '훌라후프 안에서 한 발로 서기', '의자 굴 기어가기', '종이 징검다리 뛰기'] } } },
                hints: ['교실 놀이 길을 출발 깃발부터 손가락으로 따라가 보세요.', '출발 바로 다음 자리와 도착 바로 앞 자리를 먼저 찾아보세요.', '테이프 선 → 의자 굴 → 종이 징검다리 → 훌라후프 차례예요.'] },
              { prompt: '모둠이 차례로 놀이 길을 두 번 따라가고, 내가 한 것을 모두 표시해요.', target: { selfCheck: ['자리마다 정한 움직임으로 바꾸었어요', '앞 친구가 다음 자리로 간 뒤 출발했어요', '기다릴 때 친구를 응원했어요'] }, difficulty: 0.05 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"자리가 바뀔 때 움직임을 바꾸는 것이 어려웠나요, 쉬웠나요?" 어렵던 자리와 까닭을 두세 명에게 듣는다. 놀이 길을 함께 치우며 의자는 둘이 함께 든다.',
        exitTicket: [
          { type: 'tool', tool: 'map', options: { grid: [5, 3], places: [{ name: '훌라후프', icon: 'dot', at: [3, 1] }, { name: '테이프 선', icon: 'dot', at: [1, 0] }, { name: '의자 굴', icon: 'dot', at: [0, 2] }] }, prompt: '동그란 테 안에서 한 발로 서서 버티는 자리에 핀을 꽂아 보세요.', target: { place: '훌라후프' }, difficulty: 0.1 },
          { type: 'choice', prompt: '의자 굴에 들어가도 되는 때는?', options: ['앞 친구가 굴을 빠져나왔을 때', '앞 친구가 굴에 들어가자마자'], answer: 0, difficulty: 0.1, explain: '앞 친구가 나온 뒤 들어가야 부딪히지 않아요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '우리 교실 놀이 길',
      items: [
        { type: 'figure', wide: true, prompt: '기어가는 자리에 ○ 하세요.', tool: 'map', figures: [{ options: { grid: [5, 3], places: [{ name: '테이프 선', icon: 'dot', at: [1, 1] }, { name: '의자 굴', icon: 'dot', at: [2, 0] }, { name: '종이 징검다리', icon: 'dot', at: [3, 2] }] }, caption: '' }], answer: '의자 굴' },
        { type: 'table', prompt: '자리와 그 자리의 움직임을 쓰세요.', columns: ['자리', '움직임'], cells: [['테이프 선', ''], ['의자 굴', ''], ['종이 징검다리', ''], ['훌라후프', '']] },
        { type: 'check', prompt: '놀이 길에서 지킨 것에 ✓ 하세요.', options: ['앞 친구가 간 뒤 출발', '기다리며 응원', '자리마다 움직임 바꾸기'] },
        { type: 'draw', prompt: '내가 만들고 싶은 놀이 길 자리를 하나 그려 보세요.' },
      ],
      easy: {
        note: '자리의 생김새를 보면 움직임을 알 수 있어요.',
        items: [
          { type: 'choice', prompt: '의자 굴에서 하는 움직임에 ○ 하세요.', options: ['기어가기', '깡충 뛰기'], answer: '기어가기' },
          { type: 'choice', prompt: '테이프 선에서 하는 움직임에 ○ 하세요.', options: ['천천히 걷기', '구르기'], answer: '천천히 걷기' },
          { type: 'draw', prompt: '놀이 길을 지나는 내 모습을 그려 보세요.' },
          { type: 'short', prompt: '가장 재미있던 자리를 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '지도 칸이 적고, 놀이 길 차례는 첫 카드가 바른 자리에 있어요. 징검다리는 걸어서 건너도 돼요.',
      base: '자리를 모두 찾고 차례를 정한 뒤 놀이 길을 두 번 따라가요.',
      challenge: '지도 칸이 늘어나요. 놀이 길에 새 자리 하나를 넣고 어울리는 움직임을 정해 보아요.',
    },
    teacherNotes: '준비: 바닥 테이프, 의자 4개(굴), 종이 징검다리(바닥에 테이프로 고정), 훌라후프. 지도 도구를 통합교과 놀이 길 지도로 쓴다. 자주 보이는 어려움: ① 자리가 바뀌어도 같은 움직임으로 달린다 → 자리마다 움직임 그림 카드를 붙인다. ② 의자 굴에서 앞 친구에게 부딪힌다 → 앞 친구가 나온 뒤 들어가는 약속을 지킨다. ③ 지도와 실제 길을 잇기 어려워한다 → 지도를 들고 실제 길을 한 번 걸어 본다.',
  }));

  // ───────────────────────── 33~36차시: 함께 움직인 경험 나누고 다시 해 보기(함께하는 마음) ─────────────────────────

  lessons.push(L(33, {
    title: '친구와 함께 움직여서 좋았던 점 말하기',
    objective: '혼자 할 때와 친구와 함께 이어 할 때를 견주어, 함께해서 좋았던 점을 한 문장으로 말할 수 있다.',
    illustration: ART('two scenes side by side: one paper child jumping rope alone looking bored, and a group of paper children jumping a long rope together laughing', '혼자, 그리고 함께', [
      { motif: 'heart', x: 100, y: 80, s: 0.5 }, { motif: 'star', x: 240, y: 84, s: 0.6 }, { motif: 'flower', x: 390, y: 228 }]),
    safety: MOVE_SAFE,
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"혼자 줄넘기를 할 때와 친구 둘이 긴 줄을 돌려 줄 때, 무엇이 다를까요?" 짧게 생각을 듣는다. "오늘은 친구와 함께 움직여서 좋았던 점을 찾아 말해요." 시연 단추로 \'함께해서 좋았어요\' 가지에 카드가 놓이는 모습을 보여 준다.',
        student: '친구와 함께 움직였던 놀이 가운데 가장 재미있던 것을 떠올려 봐요.',
        demo: { tool: 'mindmap', options: { topic: '움직임 놀이', slots: ['혼자 해요', '함께해요'], cards: ['혼자 공 튀기기', '긴 줄넘기'], shuffle: false }, sequence: [{ sort: { '혼자 해요': ['혼자 공 튀기기'], '함께해요': ['긴 줄넘기'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 혼자와 함께 해 보고 견주기', minutes: 12, tool: 'mindmap',
            teacher: '먼저 혼자 콩주머니를 위로 던져 받기를 열 번 한 뒤, 짝과 마주 보고 주고받기를 열 번 한다. "어느 쪽이 더 웃음이 났나요? 어느 쪽이 더 오래 이어졌나요?" 함께하면 늘 더 쉽다고 말하는 학생에게 "짝과 맞추느라 어려운 점은 없었나요?"를 묻는다.',
            task: '혼자 던져 받기와 짝과 주고받기를 해 본 뒤, 놀이와 좋았던 점을 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '혼자 콩주머니를 위로 던져 받기를 열 번, 짝과 주고받기를 열 번 해 보고 "다 했어요"를 누르세요.', free: true, talk: true },
              { prompt: '놀이를 혼자 하는 것과 여럿이 함께하는 것으로 나누어 보세요.', toolOptions: { topic: '움직임 놀이', slots: ['혼자 해요', '함께해요'], cards: ['혼자 콩주머니 던져 받기', '짝과 콩주머니 주고받기', '꼬리잡기', '혼자 한 발로 서기'] },
                target: { sort: { '혼자 해요': ['혼자 콩주머니 던져 받기', '혼자 한 발로 서기'], '함께해요': ['짝과 콩주머니 주고받기', '꼬리잡기'] } }, difficulty: 0.1 },
              { prompt: '친구와 함께 움직여서 좋았던 점만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '함께 움직이기', basket: '함께해서 좋았어요', cards: ['같이 웃어서 더 재미있었어요', '친구가 응원해 줘서 힘이 났어요', '혼자서는 못 하는 놀이를 했어요', '친구를 이겨서 놀렸어요'] },
                target: { pick: ['같이 웃어서 더 재미있었어요', '친구가 응원해 줘서 힘이 났어요', '혼자서는 못 하는 놀이를 했어요'] }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['같이 웃어서 더 재미있었어요', '친구가 응원해 줘서 힘이 났어요', '혼자서는 못 하는 놀이를 했어요', '친구를 이겨서 놀렸어요', '내 차례만 하고 딴짓했어요'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 좋았던 점을 한 문장으로', minutes: 14, tool: 'story',
            teacher: '"\'○○와 함께 ○○를 해서 ○○했어요\'로 말해 볼까요?" 말풍선 빈칸을 채운 뒤 짝에게 내 문장을 말한다. 사람 이름 없이 "재미있었어요"만 말하는 학생에게 "누구와, 무엇을 했나요?"를 되묻는다.',
            task: '함께해서 좋았던 점을 말풍선 빈칸으로 문장을 만들고, 짝에게 내 문장을 말해요.',
            levels: CARD_LV,
            items: [
              { prompt: '민준이가 말한 좋았던 점이에요. 빈칸을 채워 보세요.', toolOptions: { mode: 'fill', cards: ['짝과 함께', '주고받기', '웃음이 났어요', '혼자서'], slots: [{ id: 'b1', who: '민준', motif: 'heart', label: '___' }, { id: 'b2', who: '민준', motif: 'heart', label: '콩주머니 ___를 해서' }, { id: 'b3', who: '민준', motif: 'heart', label: '자꾸 ___.' }] },
                target: { fill: { b1: '짝과 함께', b2: '주고받기', b3: '웃음이 났어요' } }, difficulty: 0.15 },
              { prompt: '함께해서 좋았던 점을 말하는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: '무엇', text: '무엇을 했는지 말해요', motif: 'star' }, { id: '누구', text: '누구와 했는지 말해요', motif: 'heart' }, { id: '마음', text: '그래서 어떤 마음이었는지 말해요', motif: 'sun' }] },
                target: { order: ['누구', '무엇', '마음'] }, difficulty: 0.15,
                hints: ['민준이 문장에서 맨 앞에 나온 말이 무엇이었는지 보세요.', '\'○○와 함께 ○○를 해서 ○○했어요\'의 차례를 떠올려 보세요.', '누구와 → 무엇을 → 어떤 마음 차례예요.'] },
              { prompt: '내 문장을 짝에게 말하고, 짝의 문장도 끝까지 들은 뒤 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"친구 문장 가운데 내 생각과 같은 것이 있었나요?" 서너 명이 짝의 문장을 대신 말해 준다. 출구 2번에서 \'이겨서\'를 고른 학생에게는 함께해서 좋은 점과 이겨서 좋은 점이 다른지 묻는다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '움직임 놀이', slots: ['혼자 해요', '함께해요'], cards: ['혼자 줄넘기', '긴 줄넘기', '짝과 손잡고 깡충 뛰기'] }, prompt: '놀이를 혼자 하는 것과 여럿이 함께하는 것으로 나누어 보세요.', target: { sort: { '혼자 해요': ['혼자 줄넘기'], '함께해요': ['긴 줄넘기', '짝과 손잡고 깡충 뛰기'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '함께 움직여서 좋은 점으로 알맞은 것은?', options: ['친구를 이겨 놀릴 수 있어요', '서로 응원해서 힘이 나요'], answer: 1, difficulty: 0.15, explain: '함께하면 서로 응원하고 같이 웃을 수 있어요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '함께해서 좋았어요',
      items: [
        { type: 'table', prompt: '혼자 할 때와 함께할 때를 견주어 쓰세요.', columns: ['', '혼자 했을 때', '짝과 했을 때'], cells: [['몇 번 이어졌나요', '', ''], ['어떤 마음이었나요', '', '']] },
        { type: 'blank', prompt: '좋았던 점을 문장으로 쓰세요.', text: '___와 함께 ___를 해서 ___.', answer: '(학생마다 다름)' },
        { type: 'check', prompt: '함께해서 좋았던 점에 ✓ 하세요.', options: ['같이 웃었어요', '응원받았어요', '혼자 못 하는 놀이를 했어요'] },
        { type: 'draw', prompt: '친구와 함께 움직이는 모습을 그려 보세요.' },
      ],
      easy: {
        note: '누구와, 무엇을, 어떤 마음이었는지 떠올려요.',
        items: [
          { type: 'choice', prompt: '여럿이 함께하는 놀이에 ○ 하세요.', options: ['꼬리잡기', '혼자 한 발로 서기'], answer: '꼬리잡기' },
          { type: 'choice', prompt: '함께해서 좋은 점에 ○ 하세요.', options: ['같이 웃어요', '친구를 놀려요'], answer: '같이 웃어요' },
          { type: 'draw', prompt: '함께 놀았던 친구를 그려 보세요.' },
          { type: 'short', prompt: '함께 놀았던 친구 이름을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 문장은 선생님이 첫 낱말을 함께 말해 줘요.',
      base: '나누기·고르기·문장을 모두 하고 확인을 눌러요. 짝과 문장을 나누어요.',
      challenge: '맞지 않는 카드가 더 섞여 있어요. 함께할 때 어려웠던 점도 하나 찾아 말해요.',
    },
    teacherNotes: '준비: 짝마다 콩주머니 1개. 자주 보이는 어려움: ① 자기 차례만 잘하면 된다고 여겨 함께한 경험을 떠올리지 못한다 → 짝 주고받기에서 짝이 잘 던져 줘야 내가 받을 수 있었음을 짚는다. ② "재미있었어요"로만 말한다 → 누구와·무엇을·어떤 마음 틀을 칠판에 둔다. ③ 함께가 늘 쉽다고만 여긴다 → 맞추기 어려웠던 점도 말해도 된다고 열어 둔다.',
  }));

  lessons.push(L(34, {
    title: '눈에 덜 띄는 친구의 잘한 점 찾아 칭찬하기',
    objective: '함께 움직이는 동안 친구가 한 일을 살펴, 무엇을 잘했는지 구체적으로 넣어 칭찬하는 말을 할 수 있다.',
    illustration: ART('paper children in a circle, one holding up a paper star badge for a quiet child who helped hold the rope, others clapping', '너는 이걸 잘했어!', [
      { motif: 'star', x: 240, y: 84, s: 0.6 }, { motif: 'heart', x: 100, y: 80, s: 0.5 }, { motif: 'flower', x: 390, y: 228 }]),
    safety: MOVE_SAFE,
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"긴 줄넘기에서 가장 잘한 친구는 누구일까요?" 뛰는 친구 이름이 먼저 나오면 "줄을 돌려 준 친구가 없었다면 어땠을까요?"를 묻는다. "오늘은 눈에 잘 띄지 않아도 잘한 친구를 찾아 칭찬해요." 시연 단추로 칭찬 말이 이어지는 모습을 보여 준다.',
        student: '긴 줄넘기에서 줄을 돌린 친구는 무엇을 잘해야 하는지 생각해 봐요.',
        demo: { tool: 'emotion', options: { cards: ['고마움', '심심함'], slots: [{ id: 's1', label: '친구가 줄을 끝까지 돌려 주었어요' }], shuffle: false }, sequence: [{ match: { s1: '고마움' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 함께 움직이며 잘한 점 살피기', minutes: 13, tool: 'emotion',
            teacher: '네 명 모둠이 긴 줄넘기(줄 돌리기 2명, 뛰기 2명)를 하고 역할을 바꾼다. 놀이 뒤 "친구가 한 일 가운데 잘한 것을 찾아요." 빨리 뛴 친구만 고르는 학생에게 "줄을 돌린 친구, 기다리며 숫자를 세어 준 친구는요?"를 묻는다.',
            task: '모둠이 긴 줄넘기를 한 뒤, 친구가 한 일 가운데 잘한 점과 칭찬하는 말을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '모둠이 줄 돌리기 두 명, 뛰기 두 명으로 긴 줄넘기를 하고 역할을 바꾸어 한 번 더 한 뒤 "다 했어요"를 누르세요.', free: true, talk: true },
              { prompt: '친구가 한 일 가운데 칭찬할 만한 잘한 점만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '칭찬할 점', cards: ['줄을 같은 빠르기로 끝까지 돌렸어요', '친구가 걸리자 "괜찮아" 했어요', '뛴 횟수를 큰 소리로 세어 주었어요', '자기 차례가 아닐 때 딴 데 갔어요'] },
                target: { pick: ['줄을 같은 빠르기로 끝까지 돌렸어요', '친구가 걸리자 "괜찮아" 했어요', '뛴 횟수를 큰 소리로 세어 주었어요'] }, difficulty: 0.15,
                predict: { q: '잘한 친구는 가장 많이 뛴 친구 한 명뿐일까요?', options: ['한 명뿐이에요', '여러 친구가 저마다 잘했어요'], answer: 1 },
                conclude: '줄을 돌리고, 세어 주고, 응원한 친구도 모두 잘한 거예요.' },
              { prompt: '칭찬을 들었을 때 생기는 마음 카드를 놓아 보세요.', toolOptions: { cards: ['뿌듯함', '쑥스러움', '화남'], slots: [{ id: 's1', label: '"줄을 끝까지 잘 돌려 줬어"라는 말을 들었어요' }] },
                target: { match: { s1: ['뿌듯함', '쑥스러움'] } }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 구체적으로 칭찬하기', minutes: 13, tool: 'story',
            teacher: '"\'잘했어\'보다 \'○○를 잘했어\'가 더 기분 좋아요." 빈칸으로 칭찬 말을 만든 뒤, 모둠 친구 한 명에게 직접 말한다. 모든 친구가 칭찬을 한 번은 받도록 모둠 안에서 오른쪽 친구에게 칭찬하게 한다.',
            task: '친구가 잘한 일을 넣어 칭찬하는 말을 만들고, 오른쪽 친구에게 직접 말해요.',
            levels: CARD_LV,
            items: [
              { prompt: '하은이가 줄을 돌린 지호에게 하는 칭찬이에요. 빈칸을 채워 보세요.', toolOptions: { mode: 'fill', cards: ['지호야', '끝까지 돌려 줘서', '고마워', '빨리 비켜'], slots: [{ id: 'b1', who: '하은', motif: 'heart', label: '___,' }, { id: 'b2', who: '하은', motif: 'heart', label: '줄을 ___' }, { id: 'b3', who: '하은', motif: 'heart', label: '덕분에 많이 뛰었어. ___!' }] },
                target: { fill: { b1: '지호야', b2: '끝까지 돌려 줘서', b3: '고마워' } }, difficulty: 0.15 },
              { prompt: '내가 줄에 걸렸을 때 숫자를 처음부터 다시 세어 준 서준이에게 하는 칭찬이에요. 서준이가 잘한 일이 들어가도록 빈칸을 채워 보세요.', toolOptions: { mode: 'fill', cards: ['서준아', '숫자를 다시 세어 줘서', '그냥', '줄에 걸려서'], slots: [{ id: 'b1', who: '나', motif: 'star', label: '___,' }, { id: 'b2', who: '나', motif: 'star', label: '___ 고마워.' }] },
                target: { fill: { b1: '서준아', b2: '숫자를 다시 세어 줘서' } }, difficulty: 0.15 },
              { prompt: '모둠에서 오른쪽 친구가 잘한 일을 넣어 칭찬하고, 칭찬을 받으면 "고마워"라고 답한 뒤 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 칭찬을 받았을 때 어떤 마음이었나요?" 두세 명의 마음을 듣는다. 줄을 돌리거나 세어 준 친구처럼 눈에 덜 띄던 일을 칭찬받은 학생에게 소감을 묻는다.',
        exitTicket: [
          { type: 'choice', prompt: '함께하는 놀이에서 잘한 친구는?', options: ['가장 많이 뛴 친구만', '줄 돌리기·세어 주기·응원한 친구도 모두'], answer: 1, difficulty: 0.15, explain: '저마다 맡은 일을 잘해서 놀이가 이어졌어요.' },
          { type: 'tool', tool: 'emotion', options: { mode: 'pick', basket: '잘한 일이 들어 있는 칭찬', cards: ['"줄을 천천히 돌려 줘서 고마워"', '"잘했어"', '"응원해 줘서 힘이 났어"'] }, prompt: '친구가 잘한 일이 들어 있는 칭찬만 골라 보세요.', target: { pick: ['"줄을 천천히 돌려 줘서 고마워"', '"응원해 줘서 힘이 났어"'] }, difficulty: 0.15 },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '친구 칭찬하기',
      items: [
        { type: 'blank', prompt: '친구에게 할 칭찬을 쓰세요.', text: '___야, ___해 줘서 고마워.', answer: '(학생마다 다름)' },
        { type: 'table', prompt: '모둠 친구가 잘한 일을 쓰세요.', columns: ['친구 이름', '잘한 일'], rows: 3 },
        { type: 'choice', prompt: '더 기분 좋은 칭찬에 ○ 하세요.', options: ['"잘했어"', '"끝까지 돌려 줘서 고마워"'], answer: '"끝까지 돌려 줘서 고마워"' },
        { type: 'draw', prompt: '칭찬을 주고받는 모습을 그려 보세요.' },
      ],
      easy: {
        note: '친구가 한 일을 넣어 칭찬해요.',
        items: [
          { type: 'choice', prompt: '칭찬하는 말에 ○ 하세요.', options: ['"세어 줘서 고마워"', '"빨리 비켜"'], answer: '"세어 줘서 고마워"' },
          { type: 'choice', prompt: '칭찬을 받으면?', options: ['"고마워"', '모른 척해요'], answer: '"고마워"' },
          { type: 'draw', prompt: '칭찬해 준 친구를 그려 보세요.' },
          { type: 'short', prompt: '칭찬한 친구 이름을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 칭찬 말은 "○○ 해 줘서 고마워" 틀을 보고 말해요.',
      base: '고르기와 칭찬 문장을 모두 하고 확인을 눌러요. 모둠 친구에게 직접 칭찬해요.',
      challenge: '칭찬할 점이 아닌 카드가 섞여 있어요. 모둠 친구 모두에게 서로 다른 칭찬을 해 보아요.',
    },
    teacherNotes: '준비: 모둠마다 긴 줄. 자주 보이는 어려움: ① 잘하는 친구만 눈에 띈다 → 줄 돌리기·세어 주기처럼 놀이를 받쳐 준 일을 먼저 칭찬하게 한다. ② "잘했어"만 말한다 → 잘한 일을 넣는 틀을 칠판에 둔다. ③ 칭찬을 받고 쑥스러워 피한다 → "고마워"로 답하는 연습을 함께한다. 칭찬을 한 번도 받지 못하는 학생이 없도록 오른쪽 친구 칭찬 규칙을 쓴다.',
  }));

  lessons.push(L(35, {
    title: '다음 놀이에 넣을 움직임 함께 골라 정하기',
    objective: '모둠 친구의 생각을 듣고, 다음 놀이에 넣을 움직임 세 가지를 함께 골라 차례를 정할 수 있다.',
    illustration: ART('a paper group of children around a table sorting movement picture cards into a plan strip, one child raising a hand to share an idea', '우리 놀이를 만들어요', [
      { motif: 'star', x: 240, y: 84, s: 0.6 }, { motif: 'leaf', x: 100, y: 220 }, { motif: 'sun', x: 80, y: 70, s: 0.5 }]),
    safety: MOVE_SAFE,
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"다음 시간에는 우리 모둠이 직접 만든 놀이를 해요. 움직임을 어떻게 정하면 모두가 좋을까요?" 한 사람이 다 정할 때와 하나씩 말해 정할 때를 견주어 묻는다. 시연 단추로 움직임 카드가 판에 차례로 놓이는 모습을 보여 준다.',
        student: '다음 놀이에 꼭 넣고 싶은 움직임 하나를 생각해 봐요.',
        demo: { tool: 'pattern', options: { seq: ['기기', '깡충', '서기', '기기', '깡충', null], palette: ['기기', '깡충', '서기'] }, sequence: [{ fill: ['서기'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 넣을 움직임 고르기', minutes: 13, tool: 'mindmap',
            teacher: '모둠마다 한 사람씩 넣고 싶은 움직임을 말한다. "교실에서 안전하게 할 수 있는지, 모두가 할 수 있는지 살펴서 골라요." 위험한 움직임(높은 데서 뛰어내리기)을 고르는 학생에게 "교실 바닥에서 하면 어떻게 될까요?"를 묻는다.',
            task: '모둠 친구들이 말한 움직임 가운데 교실에서 안전하게 할 수 있는 것을 고르고 나누어요.',
            levels: CARD_LV,
            items: [
              { prompt: '교실 놀이에 넣을 수 있는 움직임과 넣으면 안 되는 움직임으로 나누어 보세요.', toolOptions: { topic: '다음 놀이 움직임', slots: ['넣을 수 있어요', '위험해서 빼요'], cards: ['옆으로 걷기', '책상 위에서 뛰어내리기', '제자리 뛰기', '친구 등에 올라타기'] },
                target: { sort: { '넣을 수 있어요': ['옆으로 걷기', '제자리 뛰기'], '위험해서 빼요': ['책상 위에서 뛰어내리기', '친구 등에 올라타기'] } }, difficulty: 0.1,
                levels: { challenge: { prompt: '움직임 카드 여섯 장을 교실 놀이에 넣을 수 있는 것과 위험해서 빼는 것으로 모두 나누어 보세요.', toolOptions: { cards: ['옆으로 걷기', '책상 위에서 뛰어내리기', '제자리 뛰기', '친구 등에 올라타기', '두 팔 벌려 빙글 한 바퀴', '의자 위에 서서 춤추기'] },
                  target: { sort: { '넣을 수 있어요': ['옆으로 걷기', '제자리 뛰기', '두 팔 벌려 빙글 한 바퀴'], '위험해서 빼요': ['책상 위에서 뛰어내리기', '친구 등에 올라타기', '의자 위에 서서 춤추기'] } } } } },
              { prompt: '모둠이 움직임을 함께 정하는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: '고르기', text: '모두 할 수 있는 것 세 가지를 골라요', motif: 'star' }, { id: '말하기', text: '한 사람씩 넣고 싶은 움직임을 말해요', motif: 'heart' }, { id: '살피기', text: '안전한지 함께 살펴요', motif: 'leaf' }] },
                target: { order: ['말하기', '살피기', '고르기'] }, difficulty: 0.15,
                hints: ['세 가지를 정하려면 모둠에게 먼저 무엇이 있어야 할지 생각해 보세요.', '모두의 생각을 듣는 일과 안전을 살피는 일 가운데 무엇이 먼저일까요?', '말하기 → 안전 살피기 → 세 가지 고르기 차례예요.'] },
              { prompt: '친구와 생각이 달라 고를 때 알맞은 말만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '함께 정하는 말', cards: ['"네 것도 하나 넣자"', '"번갈아 하나씩 고르자"', '"내 것만 해!"'] },
                target: { pick: ['"네 것도 하나 넣자"', '"번갈아 하나씩 고르자"'] }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 우리 놀이 차례 만들기', minutes: 14, tool: 'pattern',
            teacher: '"고른 세 움직임을 어떤 차례로 되풀이할까요?" 판에서 되풀이 띠를 완성한 뒤 모둠이 정한 차례를 활동지에 적고, 한 번 천천히 해 본다. 모둠 친구 모두가 하나씩은 고른 움직임이 들어갔는지 확인하게 한다.',
            task: '되풀이 띠의 빈칸을 채우고, 모둠이 고른 세 움직임의 차례를 정해 한 번 천천히 해 봐요.',
            levels: CARD_LV,
            items: [
              { prompt: '옆걸음, 제자리 뛰기, 빙글이 되풀이돼요. 빈칸을 채워 보세요.', toolOptions: { seq: ['옆걸음', '제자리 뛰기', '빙글', '옆걸음', null, '빙글', null, '제자리 뛰기', '빙글'], palette: ['옆걸음', '제자리 뛰기', '빙글'] }, target: { fill: ['제자리 뛰기', '옆걸음'] }, difficulty: 0.15 },
              { prompt: '서기, 서기, 깡충, 기기가 되풀이돼요. 빈칸을 채워 보세요.', toolOptions: { seq: ['서기', '서기', '깡충', '기기', '서기', null, '깡충', null], palette: ['서기', '깡충', '기기'] }, target: { fill: ['서기', '기기'] }, difficulty: 0.25,
                levels: { easy: { prompt: '서기, 깡충이 되풀이돼요. 빈칸을 채워 보세요.', toolOptions: { seq: ['서기', '깡충', '서기', '깡충', null, '깡충'] }, target: { fill: ['서기'] } } } },
              { prompt: '모둠이 고른 세 움직임을 정한 차례대로 한 번 천천히 해 보고 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"우리 모둠 놀이에는 누구의 움직임이 들어갔나요?" 모둠마다 세 움직임과 고른 친구를 말하게 한다. 다음 시간에는 이 놀이를 다시 해 보고 처음과 견주어 본다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '다음 놀이 움직임', slots: ['넣을 수 있어요', '위험해서 빼요'], cards: ['게걸음', '창틀에 매달리기', '두 발 모아 뛰기'] }, prompt: '교실 놀이에 넣을 수 있는 움직임과 위험해서 빼는 움직임으로 나누어 보세요.', target: { sort: { '넣을 수 있어요': ['게걸음', '두 발 모아 뛰기'], '위험해서 빼요': ['창틀에 매달리기'] } }, difficulty: 0.1 },
          { type: 'choice', prompt: '모둠 놀이 움직임을 정할 때 알맞은 것은?', options: ['한 사람이 다 정해요', '모두 말하고 함께 골라요'], answer: 1, difficulty: 0.1, explain: '모두의 생각을 듣고 함께 고르면 모두가 즐거워요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '우리 모둠 놀이 계획',
      items: [
        { type: 'table', prompt: '모둠 친구가 넣고 싶은 움직임을 쓰세요.', columns: ['친구 이름', '넣고 싶은 움직임', '안전한가요(○/×)'], rows: 4 },
        { type: 'blank', prompt: '우리 모둠이 고른 움직임 차례를 쓰세요.', text: '① ___ → ② ___ → ③ ___', answer: '(모둠마다 다름)' },
        { type: 'check', prompt: '교실 놀이에서 빼야 하는 움직임에 ✓ 하세요.', options: ['책상에서 뛰어내리기', '친구 등에 타기', '의자 위에 서기'] },
        { type: 'draw', prompt: '우리 모둠 놀이를 하는 모습을 그려 보세요.' },
      ],
      easy: {
        note: '안전하고 모두 할 수 있는 움직임을 골라요.',
        items: [
          { type: 'choice', prompt: '교실에서 해도 되는 움직임에 ○ 하세요.', options: ['옆으로 걷기', '책상에서 뛰어내리기'], answer: '옆으로 걷기' },
          { type: 'choice', prompt: '함께 정하는 말에 ○ 하세요.', options: ['"하나씩 고르자"', '"내 것만 해!"'], answer: '"하나씩 고르자"' },
          { type: 'draw', prompt: '넣고 싶은 움직임을 그려 보세요.' },
          { type: 'short', prompt: '내가 고른 움직임을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 둘째 띠는 두 움직임으로 줄어요.',
      base: '나누기·차례·띠를 모두 한 뒤 확인을 눌러요. 모둠 놀이 차례를 정해요.',
      challenge: '움직임 카드가 여섯 장으로 늘어요. 우리 놀이에 신호도 정해 넣어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 목소리 큰 학생 생각만 들어간다 → 한 사람씩 말하고 번갈아 고르는 순서를 지킨다. ② 재미만 보고 위험한 움직임을 고른다 → 교실 바닥·책상·창틀을 함께 둘러보며 판단한다. ③ 몸이 불편한 친구가 할 수 없는 움직임만 고른다 → "모두 할 수 있는지"를 고르는 기준에 넣는다.',
  }));

  lessons.push(L(36, {
    title: '우리 모둠 놀이 다시 해 보고 처음과 견주기',
    objective: '모둠이 만든 움직임 놀이를 두 번 해 보고, 처음보다 나아진 점과 함께하며 지킨 약속을 말할 수 있다.',
    illustration: ART('a paper group of children performing their own movement game a second time, a small chart on the wall showing "1st try" and "2nd try" with more stars on the second', '두 번째는 더 잘했어요', [
      { motif: 'star', x: 240, y: 84, s: 0.6 }, { motif: 'heart', x: 100, y: 80, s: 0.5 }, { motif: 'flower', x: 390, y: 228 }]),
    safety: MOVE_SAFE,
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"지난 시간 정한 우리 모둠 놀이, 기억나나요?" 모둠마다 세 움직임을 말로 먼저 되짚는다. "오늘은 두 번 해 보고 무엇이 나아졌는지 견주어 봐요." 시연 단추로 놀이 차례 카드가 놓이는 모습을 보여 준다.',
        student: '우리 모둠 놀이의 세 움직임을 차례대로 말해 봐요.',
        demo: { tool: 'timer', options: { cards: ['첫 번째 해 보기', '고칠 점 말하기'] }, sequence: [{ order: ['첫 번째 해 보기', '고칠 점 말하기'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 두 번 해 보고 견주기', minutes: 17, tool: 'timer',
            teacher: '모둠마다 놀이를 한 번 하고, 끊긴 곳이 어디였는지 말한 뒤 고쳐서 한 번 더 한다. "끊기지 않고 몇 바퀴 이어졌는지 세어 봐요." 첫 번째에 끊긴 까닭을 한 친구 탓으로 돌리는 모둠에게 "우리 모둠이 함께 고칠 수 있는 것은 무엇일까요?"를 묻는다.',
            task: '모둠 놀이를 두 번 해 보며 끊기지 않고 이어진 바퀴 수를 적고, 함께 고칠 점을 정해요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '놀이를 시작하기 전에 모둠 자리를 살펴보고 확인한 것을 표시해요.', toolOptions: { safety: ['모둠 둘레에 의자와 가방이 없어요', '모두 우리 놀이 차례를 알아요', '멈춤 신호를 정했어요'] }, target: { safety: true }, difficulty: 0.05 },
              { prompt: '오늘 활동 차례대로 카드를 놓아요.', toolOptions: { cards: ['고칠 점 말하기', '두 번째 해 보기', '첫 번째 해 보기', '나아진 점 견주기'] }, target: { order: ['첫 번째 해 보기', '고칠 점 말하기', '두 번째 해 보기', '나아진 점 견주기'] }, difficulty: 0.15,
                levels: { easy: { state: { order: ['첫 번째 해 보기', '두 번째 해 보기', '고칠 점 말하기', '나아진 점 견주기'] } } },
                hints: ['고칠 점은 언제 알 수 있을지 생각해 보세요.', '두 번째 해 보기 앞에 무엇이 있어야 더 잘할 수 있을까요?', '첫 번째 → 고칠 점 말하기 → 두 번째 → 견주기 차례예요.'] },
              { prompt: '첫 번째와 두 번째에 끊기지 않고 이어진 바퀴 수를 적어요.', toolOptions: { fields: ['첫 번째', '두 번째'], unit: '바퀴' }, target: { records: true }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 돌아보기', minutes: 10, tool: 'emotion',
            teacher: '"두 번째가 더 잘된 모둠도, 아닌 모둠도 있어요. 무엇이 달랐을까요?" 나아진 점과 그때의 마음을 고른다. 바퀴 수가 줄어든 모둠에게 "그래도 함께 고친 것이 있나요?"를 묻는다.',
            task: '두 번 해 본 뒤 나아진 까닭을 고르고, 함께 움직인 내 모습을 돌아보아요.',
            levels: CARD_LV,
            items: [
              { prompt: '두 번째에 더 오래 이어진 까닭으로 알맞은 것만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '나아진 까닭', cards: ['바꾸는 신호를 함께 외쳤어요', '끊긴 곳을 천천히 연습했어요', '기다리는 친구가 응원했어요', '잘 못한 친구를 빼고 했어요'] },
                target: { pick: ['바꾸는 신호를 함께 외쳤어요', '끊긴 곳을 천천히 연습했어요', '기다리는 친구가 응원했어요'] }, difficulty: 0.15 },
              { prompt: '돌아보기 하며 생긴 마음 카드를 알맞은 일에 놓아 보세요.', toolOptions: { cards: ['뿌듯함', '아쉬움', '졸림'], slots: [{ id: 's1', label: '두 번째에 세 바퀴 더 이어졌어요' }, { id: 's2', label: '두 번째에도 같은 곳에서 끊겼어요' }] },
                target: { match: { s1: '뿌듯함', s2: '아쉬움' } }, difficulty: 0.1 },
              { prompt: '모둠 친구 한 명에게 오늘 놀이에서 고마웠던 일을 한 가지 말하고 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"친구와 움직임을 이어 하면서 알게 된 것을 한 가지씩 말해 볼까요?" 움직임 여러 개를 이을 수 있었던 일, 기다리는 친구도 함께했던 일을 학생 말로 모은다. 정리 운동을 하고 마친다. 다음 시간부터는 여럿이 함께 무언가를 만들어 본다.',
        exitTicket: [
          { type: 'choice', prompt: '두 번째에 더 잘하려면?', options: ['끊긴 곳을 함께 고쳐요', '못한 친구를 빼요', '그냥 다시 해요'], answer: 0, difficulty: 0.1, explain: '끊긴 곳을 함께 찾아 고치면 더 오래 이어져요.' },
          { type: 'tool', tool: 'emotion', options: { mode: 'pick', basket: '이어 하기에서 알게 된 것', cards: ['여러 움직임을 이어서 할 수 있어요', '기다리는 친구도 놀이를 함께해요', '내 차례만 잘하면 돼요'] }, prompt: '움직임 이어 하기에서 알게 된 것으로 맞는 것만 골라 보세요.', target: { pick: ['여러 움직임을 이어서 할 수 있어요', '기다리는 친구도 놀이를 함께해요'] }, difficulty: 0.15 },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '처음과 두 번째',
      items: [
        { type: 'table', prompt: '이어진 바퀴 수를 쓰세요.', columns: ['', '첫 번째', '두 번째'], cells: [['이어진 바퀴', '', '']] },
        { type: 'short', prompt: '두 번째에 함께 고친 점을 쓰세요.' },
        { type: 'check', prompt: '오늘 내가 한 일에 ✓ 하세요.', options: ['차례 지키기', '응원하기', '고칠 점 말하기'] },
        { type: 'draw', prompt: '우리 모둠 놀이를 하는 모습을 그려 보세요.' },
      ],
      easy: {
        note: '끊긴 곳을 함께 고치면 더 잘돼요.',
        items: [
          { type: 'choice', prompt: '더 잘하는 방법에 ○ 하세요.', options: ['함께 고쳐요', '친구를 빼요'], answer: '함께 고쳐요' },
          { type: 'choice', prompt: '이어진 바퀴가 늘면 어떤 마음일까요?', options: ['뿌듯해요', '화나요'], answer: '뿌듯해요' },
          { type: 'draw', prompt: '모둠 친구들과 놀이하는 모습을 그려 보세요.' },
          { type: 'short', prompt: '몇 바퀴 이어졌는지 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '차례 카드는 첫 카드가 바른 자리에 있고, 맞는 칸에 초록 테두리가 생겨요.',
      base: '두 번 해 보고 바퀴 수를 적은 뒤 돌아보기를 해요.',
      challenge: '두 번째에 고친 점을 다른 모둠에게 설명하고, 그 모둠 놀이도 한 번 따라 해 보아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 움직임을 하나씩 따로 하던 습관이 남아 끊긴다 → 바꾸는 신호를 모둠이 함께 외치게 한다. ② 끊긴 까닭을 한 친구 탓으로 돌린다 → "우리 모둠이 고칠 것"으로 말을 바꾸게 한다. ③ 바퀴 수만 겨룬다 → 다른 모둠과 견주지 않고 우리 첫 번째와만 견준다.',
  }));

  // ───────────────────────── 37~40차시: 여럿이 함께하면 좋은 점 알기(바른 생활) ─────────────────────────

  lessons.push(L(37, {
    title: '종이컵 탑을 혼자 쌓기와 함께 쌓기 견주기',
    objective: '종이컵 탑을 혼자 쌓을 때와 모둠이 함께 쌓을 때를 해 보고, 무엇이 달랐는지 견주어 말할 수 있다.',
    illustration: ART('on the left one paper child stacking a short wobbly tower of paper cups alone; on the right four paper children stacking a tall pyramid of cups together, smiling', '혼자 쌓을 때, 함께 쌓을 때', [
      { motif: 'star', x: 240, y: 84, s: 0.6 }, { motif: 'heart', x: 100, y: 80, s: 0.5 }, { motif: 'flower', x: 390, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"종이컵 열 개로 탑을 쌓아요. 혼자 쌓는 것과 넷이 함께 쌓는 것 중 어느 쪽이 더 높을까요?" 손을 들어 짐작을 모은다. "오늘은 직접 해 보고 견주어요." 시연 단추로 네모 조각이 탑처럼 쌓이는 모습을 보여 준다.',
        student: '혼자와 함께 중 어느 쪽 탑이 더 높을지 짐작해 손을 들어 봐요.',
        demo: { tool: 'collage', options: { readOnly: true }, sequence: [{ has: [{ shape: 'square', min: 3 }] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 직접 쌓아 보고 견주기', minutes: 15, tool: 'collage',
            teacher: '먼저 1분 동안 혼자 컵 탑을 쌓고 몇 층인지 센다. 다음 1분은 모둠 넷이 함께 쌓는다. "함께 쌓을 때는 누가 무엇을 했나요?" 함께 쌓다 무너뜨린 모둠에게 "어떻게 하면 서로 손이 부딪히지 않을까요?"를 묻는다. 화면에는 우리 모둠 탑 모양을 조각으로 남긴다.',
            task: '혼자와 모둠이 함께 종이컵 탑을 쌓아 보고, 우리 모둠 탑을 조각으로 꾸며 남겨요.',
            levels: COL_LV,
            items: [
              { prompt: '혼자 1분, 모둠이 함께 1분 동안 종이컵 탑을 쌓고 층수를 세어 본 뒤 "다 했어요"를 누르세요.', free: true, talk: true },
              { prompt: '우리 모둠이 함께 쌓은 탑을 네모 조각 여섯 개 넘게 붙여 꾸며 보세요.', target: { has: [{ shape: 'square', min: 6 }] }, difficulty: 0.1,
                hints: ['종이컵 하나를 네모 조각 하나로 생각해요.', '아래층부터 옆으로 나란히 붙이고 그 위에 올려 보세요.', '네모 조각을 여섯 개 넘게 붙이면 돼요.'] },
              { prompt: '탑 꼭대기에 모둠 친구 수만큼 동그라미 얼굴을 붙이고, 해낸 것을 표시해 보세요.', state: { pieces: [{ shape: 'square', color: '하양', size: 'm', x: 240, y: 320, r: 0 }, { shape: 'square', color: '하양', size: 'm', x: 320, y: 320, r: 0 }, { shape: 'square', color: '하양', size: 'm', x: 280, y: 260, r: 0 }] }, target: { selfCheck: ['친구 수만큼 얼굴을 붙였어요', '누가 무엇을 했는지 짝에게 말했어요'], minPieces: 5 }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 무엇이 달랐을까', minutes: 12, tool: 'mindmap',
            teacher: '"혼자 쌓을 때 좋은 점도 있었나요?" 혼자일 때의 좋은 점(내 마음대로, 부딪힘 없음)도 인정해 준다. 그런 뒤 함께일 때 달랐던 점을 나눈다. \'함께하면 늘 더 빠르다\'고만 말하는 학생에게 처음에 손이 부딪혔던 일을 떠올리게 한다.',
            task: '혼자 쌓기와 함께 쌓기에서 있었던 일을 나누고, 함께 쌓을 때 도움이 된 일을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '있었던 일을 혼자 쌓을 때와 함께 쌓을 때로 나누어 보세요.', toolOptions: { topic: '종이컵 탑', slots: ['혼자 쌓을 때', '함께 쌓을 때'], cards: ['컵을 모두 내가 날랐어요', '한 친구가 컵을 건네주었어요', '내 마음대로 모양을 정했어요', '"하나, 둘" 맞춰 올렸어요'] },
                target: { sort: { '혼자 쌓을 때': ['컵을 모두 내가 날랐어요', '내 마음대로 모양을 정했어요'], '함께 쌓을 때': ['한 친구가 컵을 건네주었어요', '"하나, 둘" 맞춰 올렸어요'] } }, difficulty: 0.15 },
              { prompt: '함께 쌓을 때 탑이 더 높아지게 도운 일만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '함께 쌓기', basket: '도움이 된 일', cards: ['컵 건네주기', '탑 잡아 주기', '말로 맞추기', '혼자 먼저 다 쌓기'] },
                target: { pick: ['컵 건네주기', '탑 잡아 주기', '말로 맞추기'] }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['컵 건네주기', '탑 잡아 주기', '말로 맞추기', '혼자 먼저 다 쌓기', '친구 컵 빼앗기'] } } },
                predict: { q: '함께 쌓으면 저절로 높아질까요?', options: ['저절로 높아져요', '서로 도와야 높아져요'], answer: 1 },
                conclude: '여럿이 모여도 서로 도와야 탑이 높아져요.' },
              { prompt: '혼자 쌓은 층수와 함께 쌓은 층수를 짝에게 말하고, 무엇이 달랐는지 한 가지 말한 뒤 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"짐작과 결과가 같았나요?" 모둠마다 혼자 층수와 함께 층수를 말한다. 함께 쌓은 탑이 더 낮았던 모둠도 "무엇을 고치면 될까요?"로 이어 간다. 다음 시간에는 함께하면 좋은 점을 더 찾아본다.',
        exitTicket: [
          { type: 'choice', prompt: '여럿이 함께 탑을 쌓을 때 높이 쌓으려면?', options: ['각자 빨리 올려요', '컵을 건네고 잡아 주며 도와요'], answer: 1, difficulty: 0.15, explain: '서로 건네주고 잡아 주면 탑이 무너지지 않고 높아져요.' },
          { type: 'tool', tool: 'mindmap', options: { topic: '종이컵 탑', slots: ['혼자 쌓을 때', '함께 쌓을 때'], cards: ['친구와 번갈아 올렸어요', '모양을 혼자 정했어요'] }, prompt: '있었던 일을 혼자 쌓을 때와 함께 쌓을 때로 나누어 보세요.', target: { sort: { '혼자 쌓을 때': ['모양을 혼자 정했어요'], '함께 쌓을 때': ['친구와 번갈아 올렸어요'] } }, difficulty: 0.1 },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '종이컵 탑 쌓기',
      items: [
        { type: 'table', prompt: '쌓은 층수를 쓰세요.', columns: ['', '혼자 쌓기', '함께 쌓기'], cells: [['짐작한 층수', '', ''], ['쌓은 층수', '', '']] },
        { type: 'check', prompt: '함께 쌓을 때 도움이 된 일에 ✓ 하세요.', options: ['컵 건네주기', '탑 잡아 주기', '"하나, 둘" 맞추기'] },
        { type: 'short', prompt: '혼자 쌓을 때와 함께 쌓을 때 달랐던 점을 쓰세요.' },
        { type: 'draw', prompt: '우리 모둠이 쌓은 탑을 그려 보세요.' },
      ],
      easy: {
        note: '혼자일 때와 함께일 때를 견주어 보아요.',
        items: [
          { type: 'choice', prompt: '함께 쌓을 때 도움이 된 일에 ○ 하세요.', options: ['컵 건네주기', '컵 빼앗기'], answer: '컵 건네주기' },
          { type: 'short', prompt: '혼자 쌓은 층수를 쓰세요.' },
          { type: 'draw', prompt: '우리 탑을 그려 보세요.' },
          { type: 'short', prompt: '함께 쌓은 층수를 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '조각 모양이 네 가지로 줄고, 나누기는 맞는 칸에 초록 테두리가 생겨요.',
      base: '탑 꾸미기와 나누기·고르기를 모두 한 뒤 확인을 눌러요.',
      challenge: '맞지 않는 카드가 더 섞여 있어요. 다시 쌓는다면 모둠이 무엇을 바꿀지 정해 말해요.',
    },
    teacherNotes: '준비: 모둠마다 종이컵 20개, 1분 모래시계(또는 화면 시계). 자주 보이는 어려움: ① 함께하면 저절로 잘된다고 여긴다 → 처음에 손이 부딪혀 무너진 일을 짚고 역할을 나누게 한다. ② 함께하면 내가 할 몫이 줄어 손해라고 여긴다 → 혼자 열 층, 함께 스무 층처럼 결과를 견주어 본다(다음 차시 이어서). ③ 무너졌을 때 탓한다 → "다시 하자"를 모둠 약속으로 정한다.',
  }));

  lessons.push(L(38, {
    title: '함께하면 내 몫이 줄어드는지 따져 보기',
    objective: '함께할 때 내 차례나 몫이 줄어드는 것처럼 보여도 얻는 것이 있음을 이야기 속 일로 따져 말할 수 있다.',
    illustration: ART('paper children painting one long mural together, one child looks a little unhappy holding a single brush while the finished mural behind them is huge and colorful', '함께하면 손해일까?', [
      { motif: 'heart', x: 100, y: 80, s: 0.5 }, { motif: 'star', x: 240, y: 84, s: 0.6 }, { motif: 'leaf', x: 380, y: 220 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"하준이는 \'혼자 그리면 내가 다 칠할 수 있는데, 같이 하면 한 칸밖에 못 칠해서 싫어\'라고 했어요. 하준이 말이 맞을까요?" 손해라고 느끼는 마음도 있을 수 있다고 먼저 인정한다. 시연 단추로 하준이의 말풍선이 채워지는 모습을 보여 준다.',
        student: '함께할 때 손해 본 것 같았던 적이 있는지 떠올려 봐요.',
        demo: { tool: 'story', options: { mode: 'fill', cards: ['한 칸밖에', '다'], slots: [{ id: 'b1', who: '하준', motif: 'leaf', label: '같이 하면 ___ 못 칠해.' }], shuffle: false }, sequence: [{ fill: { b1: '한 칸밖에' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 하준이 이야기 따라가기', minutes: 13, tool: 'story',
            teacher: '이야기 장면을 차례로 놓으며 하준이의 마음이 어떻게 바뀌는지 본다. "끝 장면에서 하준이는 무엇을 얻었나요?" \'한 칸밖에 못 칠했으니 손해\'라는 말에 "그 그림은 혼자 그릴 수 있는 크기였을까요?"를 묻는다.',
            task: '하준이 이야기 장면을 차례대로 놓고, 하준이가 마지막에 한 말의 빈칸을 채워요.',
            levels: CARD_LV,
            items: [
              { prompt: '하준이 이야기를 차례대로 놓아 보세요.', toolOptions: { mode: 'order', slots: ['처음', '가운데', '끝'], cards: [{ id: '완성', text: '반 친구들이 칠한 칸이 모여 복도만큼 긴 그림이 되었어요', motif: 'star' }, { id: '불만', text: '하준이는 한 칸만 칠하게 되어 입을 삐죽였어요', motif: 'leaf' }, { id: '칠하기', text: '하준이가 맡은 칸에 바다를 정성껏 칠했어요', motif: 'sun' }] },
                target: { order: ['불만', '칠하기', '완성'] }, difficulty: 0.15 },
              { prompt: '끝 장면에서 하준이가 한 말이에요. 빈칸을 채워 보세요.', toolOptions: { mode: 'fill', cards: ['혼자서는', '함께해서', '한 칸뿐이라', '심심해'], slots: [{ id: 'b1', who: '하준', motif: 'star', label: '___ 이렇게 큰 그림을 못 그렸을 거야.' }, { id: 'b2', who: '하준', motif: 'star', label: '___ 좋았어.' }] },
                target: { fill: { b1: '혼자서는', b2: '함께해서' } }, difficulty: 0.15,
                levels: { easy: { toolOptions: { cards: ['혼자서는', '함께해서'] } } } },
              { prompt: '이야기 속 하준이 마음이 바뀐 차례대로 놓아 보세요.', toolOptions: { mode: 'order', slots: ['처음', '가운데', '끝'], cards: [{ id: '뿌듯', text: '큰 그림을 보며 뿌듯했어요', motif: 'star' }, { id: '싫음', text: '한 칸뿐이라 싫었어요', motif: 'leaf' }, { id: '정성', text: '내 칸을 예쁘게 칠하고 싶어졌어요', motif: 'heart' }] },
                target: { order: ['싫음', '정성', '뿌듯'] }, difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 손해일까, 아닐까', minutes: 13, tool: 'emotion',
            teacher: '"이럴 때 손해라고 느낄 수 있어요. 그래도 어떻게 하면 좋을까요?" 고른 뒤 결과를 소리 내어 읽는다. 손해라고 느끼는 마음을 나무라지 않고, 그 마음을 말로 하는 방법도 좋은 선택임을 알려 준다.',
            task: '함께할 때 손해라고 느끼는 상황에서 어떻게 할지 고르고, 그때의 마음을 살펴요.',
            levels: CARD_LV,
            items: [
              { prompt: '모둠 정리를 하는데 나만 많이 하는 것 같아요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '서아', situation: '모둠이 함께 교실 바닥을 줍는데, 서아는 자기만 많이 줍는 것 같아 속상해요.', choices: [
                { id: 'stop', text: '"나만 하잖아!" 하고 그만둬요', result: '바닥이 반만 치워진 채로 남아요.', mood: '속상함', why: '그만두면 모둠 일은 어떻게 될까요?' },
                { id: 'say', text: '"우리 한 줄씩 나누어 줍자"라고 말해요', result: '모둠이 줄을 나누어 금방 다 치워요.', mood: '편안함' },
                { id: 'quiet', text: '아무 말 없이 속상한 채로 혼자 다 해요', result: '다 치웠지만 서아는 계속 속상해요.', mood: '서운함', why: '말하지 않으면 친구들이 서아 마음을 알 수 있을까요?' }] }, target: { choice: 'say' }, difficulty: 0.15 },
              { prompt: '함께해서 얻은 일과 그때의 마음 카드를 놓아 보세요.', toolOptions: { cards: ['뿌듯함', '고마움', '부끄러움'], slots: [{ id: 's1', label: '함께 칠한 큰 그림이 복도에 걸렸어요' }, { id: 's2', label: '무거운 상자를 친구가 같이 들어 주었어요' }] },
                target: { match: { s1: '뿌듯함', s2: '고마움' } }, difficulty: 0.1 },
              { prompt: '함께할 때 생기는 일을 손해인 것 같은 일과 얻는 일로 나누어 보세요.', toolOptions: { mode: 'sort', cards: ['내 차례를 기다려야 해요', '혼자 못 하는 일을 해요', '친구가 도와줘요', '내 마음대로 못 정해요'], slots: [{ id: 'loss', label: '손해인 것 같은 일' }, { id: 'gain', label: '함께해서 얻는 일' }] },
                target: { sort: { loss: ['내 차례를 기다려야 해요', '내 마음대로 못 정해요'], gain: ['혼자 못 하는 일을 해요', '친구가 도와줘요'] } }, difficulty: 0.2,
                conclude: '기다리거나 양보할 때도 있지만, 함께하면 혼자서는 못 얻는 것이 생겨요.' },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"함께하면 손해만 볼까요?" 학생이 자기 말로 얻는 것을 말하게 기다린다. 손해라고 느껴질 때 그 마음을 말로 하는 것도 함께하기의 한 방법이라고 정리한다.',
        exitTicket: [
          { type: 'choice', prompt: '함께할 때 나만 많이 하는 것 같으면?', options: ['그만둬요', '일을 나누자고 말해요', '친구를 탓해요'], answer: 1, difficulty: 0.15, explain: '마음을 말하고 일을 나누면 모두가 함께할 수 있어요.' },
          { type: 'tool', tool: 'emotion', options: { mode: 'pick', basket: '함께해서 얻는 것', cards: ['혼자 못 드는 책상을 옮겨요', '내 마음대로만 해요', '친구와 함께 웃어요'] }, prompt: '함께해서 얻는 것만 골라 보세요.', target: { pick: ['혼자 못 드는 책상을 옮겨요', '친구와 함께 웃어요'] }, difficulty: 0.15 },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '함께하면 손해일까?',
      items: [
        { type: 'table', prompt: '함께할 때를 나누어 쓰세요.', columns: ['손해인 것 같은 일', '함께해서 얻는 일'], rows: 2 },
        { type: 'blank', prompt: '하준이처럼 말해 보세요.', text: '___서는 못 했을 거야. 함께해서 ___.', answer: '(학생마다 다름)' },
        { type: 'choice', prompt: '나만 많이 하는 것 같을 때 알맞은 말에 ○ 하세요.', options: ['"나누어 하자"', '"나 안 해!"'], answer: '"나누어 하자"' },
        { type: 'draw', prompt: '함께해서 해낸 일을 그려 보세요.' },
      ],
      easy: {
        note: '함께하면 혼자 못 하는 일을 할 수 있어요.',
        items: [
          { type: 'choice', prompt: '함께해서 얻는 일에 ○ 하세요.', options: ['큰 그림 완성', '내 마음대로'], answer: '큰 그림 완성' },
          { type: 'choice', prompt: '속상할 때 알맞은 것에 ○ 하세요.', options: ['마음을 말해요', '그만둬요'], answer: '마음을 말해요' },
          { type: 'draw', prompt: '친구와 함께 한 일을 그려 보세요.' },
          { type: 'short', prompt: '함께해서 좋았던 일을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 말풍선 카드가 두 장으로 줄어요.',
      base: '이야기 차례·말풍선·나누기를 모두 한 뒤 확인을 눌러요.',
      challenge: '함께하면서 손해라고 느꼈던 내 경험을 하나 말하고, 그때 얻은 것도 찾아 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 함께하면 내 몫이 줄어 손해라고 여긴다 → 손해처럼 보이는 일(기다림·양보)과 얻는 일(큰 결과·도움·즐거움)을 나란히 놓아 본다. ② 손해라고 느끼는 마음을 나쁜 것으로 여긴다 → 그 마음을 말로 하고 일을 나누자고 하는 것이 좋은 방법임을 알려 준다. ③ 늘 양보하는 학생이 생긴다 → 일을 고르게 나누는 방법을 함께 정한다.',
  }));

  lessons.push(L(39, {
    title: '집과 학교와 마을에서 여럿이 하는 일 찾기',
    objective: '집, 학교, 마을에서 여러 사람이 함께해야 하는 일을 찾아 장소별로 나누고, 그 까닭을 말할 수 있다.',
    illustration: ART('three paper panels: a family moving furniture together at home, classmates cleaning a classroom together, and neighbors planting flowers in a village garden', '여럿이 함께해요', [
      { motif: 'tree', x: 90, y: 214 }, { motif: 'sun', x: 80, y: 70, s: 0.5 }, { motif: 'flower', x: 390, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"우리 반 김장 체험 사진이에요. 몇 명이 함께하고 있나요?" 사진(또는 그림)을 보며 사람 수를 센다. "오늘은 우리 둘레에서 여럿이 함께하는 일을 찾아요." 시연 단추로 \'학교\' 가지에 카드가 놓이는 모습을 보여 준다.',
        student: '집이나 학교에서 여러 사람이 함께했던 일을 하나 떠올려 봐요.',
        demo: { tool: 'mindmap', options: { topic: '여럿이 하는 일', slots: ['집', '학교'], cards: ['이삿짐 나르기', '운동회 줄다리기'], shuffle: false }, sequence: [{ sort: { '집': ['이삿짐 나르기'], '학교': ['운동회 줄다리기'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 장소마다 여럿이 하는 일', minutes: 14, tool: 'mindmap',
            teacher: '"이 일은 어디에서 여럿이 함께하나요?" 카드를 읽고 장소별로 나눈다. 혼자 해도 되는 일(이 닦기)을 넣는 학생에게 "이 일은 여럿이 꼭 함께해야 하나요?"를 묻는다.',
            task: '여럿이 하는 일 카드를 집, 학교, 마을로 나누고, 혼자 하는 일은 골라내요.',
            levels: CARD_LV,
            items: [
              { prompt: '여럿이 하는 일을 집과 학교와 마을로 나누어 보세요. 혼자 하는 일은 넣지 않아요.', toolOptions: { topic: '여럿이 하는 일', slots: ['집', '학교', '마을'], cards: ['식구가 함께 김장하기', '반 친구들과 합창하기', '이웃과 마을 꽃밭 가꾸기', '혼자 이 닦기'] },
                target: { sort: { '집': ['식구가 함께 김장하기'], '학교': ['반 친구들과 합창하기'], '마을': ['이웃과 마을 꽃밭 가꾸기'] } }, difficulty: 0.15,
                levels: { challenge: { prompt: '여럿이 하는 일 여섯 가지를 집과 학교와 마을로 나누어 보세요. 혼자 하는 일은 넣지 않아요.', toolOptions: { cards: ['식구가 함께 김장하기', '반 친구들과 합창하기', '이웃과 마을 꽃밭 가꾸기', '혼자 이 닦기', '식구가 함께 이불 털기', '운동회 줄다리기', '마을 놀이터 함께 청소하기', '혼자 그림책 읽기'] },
                  target: { sort: { '집': ['식구가 함께 김장하기', '식구가 함께 이불 털기'], '학교': ['반 친구들과 합창하기', '운동회 줄다리기'], '마을': ['이웃과 마을 꽃밭 가꾸기', '마을 놀이터 함께 청소하기'] } } } } },
              { prompt: '여럿이 함께해야 하는 까닭을 일마다 이어 보세요.', toolOptions: { mode: 'match', topic: '함께하는 까닭', slots: [{ id: 's1', label: '줄다리기' }, { id: 's2', label: '큰 책상 옮기기' }, { id: 's3', label: '합창' }], cards: ['한 편이 되어 힘을 모아야 해요', '혼자 들기엔 너무 무거워요', '여러 목소리가 어울려야 해요'] },
                target: { match: { s1: '한 편이 되어 힘을 모아야 해요', s2: '혼자 들기엔 너무 무거워요', s3: '여러 목소리가 어울려야 해요' } }, difficulty: 0.2,
                hints: ['그 일을 혼자 한다고 생각해 보세요. 무엇이 안 될까요?', '힘이 필요한 일인지, 소리가 어울려야 하는 일인지 살펴보세요.', '줄다리기는 힘 모으기, 책상은 무거움, 합창은 목소리 어울림이에요.'] },
              { prompt: '혼자서는 할 수 없어 꼭 여럿이 해야 하는 일만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '꼭 함께해야 해요', basket: '여럿이 해야 해요', cards: ['줄다리기', '긴 줄넘기 돌리기', '손 씻기', '실내화 신기'] },
                target: { pick: ['줄다리기', '긴 줄넘기 돌리기'] }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 우리 반에서 여럿이 할 일', minutes: 13, tool: 'kitchen',
            teacher: '"우리 반에서 여럿이 함께하면 좋을 일은 무엇일까요?" 목록에서 고른 뒤, 고른 일 하나를 지금 모둠이 함께 해 본다(모둠 책상 줄 맞추기). 한 학생이 다 맞추는 모둠에게 "책상 하나씩 맡아 볼까요?"라고 말해 준다.',
            task: '우리 반에서 여럿이 함께하면 좋을 일을 고르고, 모둠이 함께 책상 줄을 맞춰 봐요.',
            levels: CARD_LV,
            items: [
              { prompt: '우리 반에서 여럿이 함께하면 좋을 일에만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '우리 반에서 함께', items: [{ id: 'clean', text: '교실 바닥 함께 줍기' }, { id: 'plant', text: '반 화분 돌아가며 물 주기' }, { id: 'name', text: '내 이름표 쓰기' }, { id: 'board', text: '게시판 함께 꾸미기' }] },
                target: { checklist: ['clean', 'plant', 'board'] }, difficulty: 0.15 },
              { prompt: '모둠 책상 줄을 함께 맞추는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: '맡기', text: '책상을 한 사람이 하나씩 맡아요' }, { id: '보기', text: '앞에서 줄이 맞는지 봐 줘요' }, { id: '옮기기', text: '"하나, 둘" 하고 함께 들어 옮겨요' }] },
                target: { order: ['맡기', '옮기기', '보기'] }, difficulty: 0.15 },
              { prompt: '모둠이 책상을 하나씩 맡아 줄을 맞추고, 앞에서 한 친구가 봐 준 뒤 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"책상 줄을 여럿이 맞추니 어땠나요?" 한두 모둠의 말을 듣는다. 출구 1번에서 혼자 하는 일을 넣은 학생에게 그 일을 혼자 해 보면 되는지 묻는다. 다음 시간에는 모둠이 함께 큰 그림을 만든다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '여럿이 하는 일', basket: '여럿이 해요', cards: ['마을 운동회 이어달리기', '혼자 양말 신기', '모둠 연극 하기'] }, prompt: '여럿이 함께하는 일만 골라 바구니에 넣어 보세요.', target: { pick: ['마을 운동회 이어달리기', '모둠 연극 하기'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '합창을 여럿이 하는 까닭은?', options: ['여러 목소리가 어울려야 해요', '혼자 부르면 안 돼서요'], answer: 0, difficulty: 0.15, explain: '합창은 여러 사람의 목소리가 어울려야 해요.' },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '여럿이 하는 일',
      items: [
        { type: 'figure', wide: true, prompt: '여럿이 하는 일을 알맞은 곳에 선으로 이으세요.', tool: 'mindmap', figures: [{ options: { topic: '여럿이 하는 일', slots: ['집', '학교', '마을'], cards: ['김장하기', '합창하기', '꽃밭 가꾸기'] }, caption: '' }], answer: '김장-집, 합창-학교, 꽃밭-마을' },
        { type: 'table', prompt: '장소마다 여럿이 하는 일을 쓰세요.', columns: ['장소', '여럿이 하는 일'], cells: [['집', ''], ['학교', ''], ['마을', '']] },
        { type: 'check', prompt: '꼭 여럿이 해야 하는 일에 ✓ 하세요.', options: ['줄다리기', '긴 줄넘기 돌리기', '손 씻기'] },
        { type: 'draw', prompt: '우리 반이 여럿이 함께하는 모습을 그려 보세요.' },
      ],
      easy: {
        note: '혼자 하면 안 되는 일을 찾아요.',
        items: [
          { type: 'choice', prompt: '여럿이 하는 일에 ○ 하세요.', options: ['줄다리기', '이 닦기'], answer: '줄다리기' },
          { type: 'choice', prompt: '학교에서 여럿이 하는 일에 ○ 하세요.', options: ['합창', '혼자 낮잠'], answer: '합창' },
          { type: 'draw', prompt: '여럿이 함께하는 모습을 그려 보세요.' },
          { type: 'short', prompt: '여럿이 하는 일 하나를 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 책상 옮기기는 선생님과 함께 해요.',
      base: '나누기·잇기·고르기를 모두 하고 확인을 눌러요.',
      challenge: '카드가 여덟 장으로 늘고 혼자 하는 일이 두 장 섞여 있어요. 우리 마을에서 여럿이 하는 일을 하나 더 찾아 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 사람이 여럿 있으면 다 함께하는 일이라고 여긴다 → "꼭 함께해야 하나?"로 다시 묻는다. ② 마을 일을 떠올리기 어려워한다 → 마을 축제·꽃밭·청소 사진을 보여 준다. ③ 책상을 혼자 끈다 → 둘이 함께 들어 옮기는 약속을 먼저 지킨다.',
  }));

  lessons.push(L(40, {
    title: '모둠이 함께 큰 나무 그림 꾸미기',
    objective: '모둠 친구와 맡을 부분을 나누어 하나의 큰 나무 그림을 함께 꾸미고, 내가 맡은 부분을 말할 수 있다.',
    illustration: ART('four paper children around one big sheet, each adding a different part to a giant paper tree: trunk, green leaves, red apples, and a bird', '우리 모둠 큰 나무', [
      { motif: 'tree', x: 240, y: 200, s: 1.2 }, { motif: 'heart', x: 100, y: 80, s: 0.5 }, { motif: 'sun', x: 400, y: 70, s: 0.5 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"모둠이 함께 큰 나무를 꾸며요. 넷이 동시에 줄기만 붙이면 어떻게 될까요?" 학생들의 생각을 듣는다. "그래서 먼저 맡을 부분을 나눠요." 시연 단추로 판에 동그라미 열매가 붙는 모습을 보여 준다.',
        student: '나무를 꾸밀 때 어떤 부분이 있어야 하는지 말해 봐요.',
        demo: { tool: 'collage', options: { readOnly: true }, sequence: [{ has: [{ shape: 'circle', min: 3 }] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 맡을 부분 나누기', minutes: 9, tool: 'kitchen',
            teacher: '"줄기, 잎, 열매, 새 가운데 하나씩 맡아요." 판에서 맡을 부분을 이은 뒤 모둠이 실제로 정한다. 모두 열매만 하고 싶어 하는 모둠에게 "가위바위보나 번갈아 고르기로 정해 볼까요?"라고 말해 준다.',
            task: '큰 나무 그림에서 맡을 부분을 정하고, 함께 꾸미는 차례를 놓아요.',
            levels: CARD_LV,
            items: [
              { prompt: '모둠 친구마다 맡은 부분 카드를 놓아 보세요. 민지는 갈색, 준호는 초록, 서아는 빨강, 하준이는 하늘을 맡았어요.', toolOptions: { mode: 'match', cards: ['줄기', '잎', '열매', '새'], slots: [{ id: 'm1', label: '민지(갈색)' }, { id: 'm2', label: '준호(초록)' }, { id: 'm3', label: '서아(빨강)' }, { id: 'm4', label: '하준(하늘)' }] },
                target: { match: { m1: '줄기', m2: '잎', m3: '열매', m4: '새' } }, difficulty: 0.15 },
              { prompt: '큰 나무를 함께 꾸미는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: '열매', text: '잎 사이에 열매를 붙여요' }, { id: '줄기', text: '가운데에 줄기를 붙여요' }, { id: '잎', text: '줄기 위에 잎을 붙여요' }] },
                target: { order: ['줄기', '잎', '열매'] }, difficulty: 0.1,
                hints: ['다른 부분을 붙이려면 무엇이 먼저 있어야 할지 생각해 보세요.', '어떤 부분이 다른 부분 \'위에\', \'사이에\' 붙는지 문장을 읽어 보세요.', '줄기 → 잎 → 열매 차례예요.'] },
              { prompt: '모둠에서 맡을 부분을 정하는 알맞은 방법만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '정하는 방법', cards: ['번갈아 하나씩 고르기', '가위바위보로 정하기', '목소리 큰 사람이 다 정하기'] },
                target: { pick: ['번갈아 하나씩 고르기', '가위바위보로 정하기'] }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 함께 큰 나무 꾸미기', minutes: 18, tool: 'collage',
            teacher: '모둠은 큰 종이에, 화면에서는 각자 맡은 부분을 넣어 나무를 꾸민다. "친구가 붙인 자리를 덮지 않게, 붙이기 전에 \'여기 붙여도 돼?\'라고 물어요." 다 붙인 모둠은 나무 이름을 함께 짓는다.',
            task: '맡은 부분을 붙여 모둠이 함께 큰 나무를 꾸미고, 내가 맡은 부분을 친구에게 말해요.',
            levels: COL_LV,
            items: [
              { prompt: '줄기와 잎이 붙은 나무에 빨강 동그라미 열매를 세 개 넘게 붙여 보세요.', state: { pieces: [{ shape: 'square', color: '갈색', size: 'l', x: 280, y: 300, r: 0 }, { shape: 'circle', color: '초록', size: 'l', x: 240, y: 180, r: 0 }, { shape: 'circle', color: '초록', size: 'l', x: 320, y: 180, r: 0 }] }, target: { has: [{ shape: 'circle', color: '빨강', min: 3 }] }, difficulty: 0.1 },
              { prompt: '나무 둘레에 세모 조각으로 새 두 마리 넘게, 하트 조각으로 마음 하나 넘게 붙여 보세요.', state: { pieces: [{ shape: 'square', color: '갈색', size: 'l', x: 280, y: 300, r: 0 }, { shape: 'circle', color: '초록', size: 'l', x: 280, y: 180, r: 0 }] }, target: { has: [{ shape: 'triangle', min: 2 }, { shape: 'heart', min: 1 }] }, difficulty: 0.15 },
              { prompt: '모둠이 함께 꾸민 큰 나무를 보고, 해낸 것을 표시해 보세요.', target: { selfCheck: ['내가 맡은 부분을 붙였어요', '붙이기 전에 친구에게 물었어요', '나무 이름을 함께 지었어요'], minPieces: 3 }, difficulty: 0.05 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"우리 모둠 나무 이름은 무엇인가요? 누가 어느 부분을 맡았나요?" 모둠마다 나무를 들고 소개한다. 한 부분이 빠졌다면 어떤 나무가 되었을지 묻는다.',
        exitTicket: [
          { type: 'choice', prompt: '모둠이 함께 그림을 꾸밀 때 먼저 할 일은?', options: ['맡을 부분을 나눠요', '각자 아무 데나 붙여요'], answer: 0, difficulty: 0.1, explain: '맡을 부분을 나누면 겹치지 않고 함께 완성할 수 있어요.' },
          { type: 'tool', tool: 'kitchen', options: { mode: 'order', cards: [{ id: '꾸미기', text: '맡은 부분을 붙여요' }, { id: '나누기', text: '맡을 부분을 정해요' }, { id: '소개', text: '함께 만든 그림을 소개해요' }] }, prompt: '모둠이 함께 그림을 꾸미는 차례대로 놓아 보세요.', target: { order: ['나누기', '꾸미기', '소개'] }, difficulty: 0.1 },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '우리 모둠 큰 나무',
      items: [
        { type: 'table', prompt: '모둠 친구가 맡은 부분을 쓰세요.', columns: ['친구 이름', '맡은 부분'], rows: 4 },
        { type: 'short', prompt: '우리 모둠 나무 이름을 쓰세요.' },
        { type: 'choice', prompt: '친구가 붙인 자리에 붙이고 싶을 때 알맞은 말에 ○ 하세요.', options: ['"여기 붙여도 돼?"', '그냥 덮어 붙여요'], answer: '"여기 붙여도 돼?"' },
        { type: 'draw', prompt: '우리 모둠 나무를 그리고, 내가 맡은 부분에 ○ 하세요.' },
      ],
      easy: {
        note: '맡을 부분을 나누면 함께 꾸밀 수 있어요.',
        items: [
          { type: 'choice', prompt: '먼저 붙이는 부분에 ○ 하세요.', options: ['줄기', '열매'], answer: '줄기' },
          { type: 'choice', prompt: '정하는 좋은 방법에 ○ 하세요.', options: ['번갈아 고르기', '혼자 다 정하기'], answer: '번갈아 고르기' },
          { type: 'draw', prompt: '내가 맡은 부분을 그려 보세요.' },
          { type: 'short', prompt: '내가 맡은 부분을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '조각 모양이 네 가지로 줄고, 맡기 카드는 맞는 칸에 초록 테두리가 생겨요.',
      base: '맡기·차례·꾸미기를 모두 하고 확인을 눌러요.',
      challenge: '모둠 나무에 계절을 정해 넣고(예: 가을 나무), 그 까닭을 함께 말해요.',
    },
    teacherNotes: '준비: 모둠마다 큰 도화지 1장, 색종이(갈색·초록·빨강·하늘), 풀. 콜라주 판을 바른 생활 협력 활동에 쓴다. 자주 보이는 어려움: ① 함께 꾸밀 때 남의 자리를 덮는다 → 붙이기 전에 묻는 말을 약속한다. ② 모두 같은 부분을 하려 한다 → 번갈아 고르기·가위바위보로 정한다. ③ 맡은 부분만 하고 나머지는 모른 척한다 → 다 붙인 뒤 나무 이름을 함께 짓게 한다.',
  }));

  // ───────────────────────── 41~44차시: 맡을 일 고르고 서로 돕기(바른 생활 실천) ─────────────────────────

  lessons.push(L(41, {
    title: '모둠 일을 스스로 골라 먼저 손 들기',
    objective: '모둠에서 해야 할 일을 살펴보고, 내가 맡을 일을 스스로 골라 손을 들어 "내가 할게"라고 말할 수 있다.',
    illustration: ART('a paper classroom group table with scissors, glue and a half-made paper flag; one child raising a hand high while friends smile and point at tasks', '내가 할게!', [
      { motif: 'star', x: 240, y: 84, s: 0.6 }, { motif: 'flower', x: 90, y: 228, color: 'rose' }, { motif: 'tree', x: 400, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"선생님이 \'칠판 지울 사람?\' 하고 물었어요. 그런데 아무도 손을 안 들었어요. 모두 \'누가 하겠지\' 생각했대요. 칠판은 어떻게 되었을까요?" 대답을 기다린다(글씨가 그대로 남아요). "오늘은 모둠 일을 내가 먼저 골라 손 드는 연습을 해요." 시연 단추로 이야기 장면이 차례로 놓이는 모습을 보여 준다.',
        student: '"누가 하겠지" 하고 기다린 적이 있는지 떠올려 봐요.',
        demo: { tool: 'story', options: { mode: 'order', slots: ['처음', '가운데', '끝'], cards: [{ id: '물음', text: '"칠판 지울 사람?"' }, { id: '조용', text: '아무도 손을 안 들어요' }, { id: '남음', text: '칠판 글씨가 그대로 남았어요' }], shuffle: false }, sequence: [{ order: ['물음', '조용', '남음'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. "누가 하겠지" 하면 어떻게 될까', minutes: 12, tool: 'emotion',
            teacher: '"하준이처럼 \'누가 하겠지\' 하면 어떻게 될까요?" 보기를 고른 뒤 결과를 소리 내어 읽는다. \'내가 나서지 않아도 누군가는 한다\'고 말하는 학생에게 "모두 그렇게 생각하면 누가 할까요?"를 되묻는다. 손을 드는 말은 큰 목소리가 아니어도 된다고 알려 준다.',
            task: '"누가 하겠지" 하는 상황에서 어떻게 할지 고르고, 먼저 나서는 말을 찾아요.',
            levels: CARD_LV,
            items: [
              { prompt: '모둠이 쓴 가위와 풀을 정리해야 해요. 하준이는 어떻게 하면 좋을까요?', toolOptions: { mode: 'branch', who: '하준', motif: 'house', situation: '모둠 활동이 끝났어요. 책상에 가위와 풀이 흩어져 있는데, 하준이는 "누가 하겠지" 생각이 들어요.', choices: [
                { id: 'wait', text: '다른 친구가 하겠지 하고 가만히 있어요', result: '모두 기다리다 쉬는 시간이 끝났어요. 가위가 책상에 그대로예요.', mood: '걱정', why: '모두 같은 생각을 하면 누가 정리할까요?' },
                { id: 'raise', text: '"내가 가위를 모을게!" 하고 손을 들어요', result: '친구들도 "나는 풀!" 하며 금방 다 정리했어요.', mood: '뿌듯함' },
                { id: 'boss', text: '"너희가 해!" 하고 친구들에게 시켜요', result: '친구들은 서운하고, 하준이는 아무것도 하지 않았어요.', mood: '속상함', why: '시키기만 하면 하준이가 맡은 일은 무엇일까요?' }] }, target: { choice: 'raise' }, difficulty: 0.15 },
              { prompt: '모둠 일을 내가 먼저 맡겠다는 말만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '먼저 나서는 말', cards: ['"내가 할게!"', '"나는 풀을 모을게."', '"누가 하겠지."', '"난 안 할래."'] },
                target: { pick: ['"내가 할게!"', '"나는 풀을 모을게."'] }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['"내가 할게!"', '"나는 풀을 모을게."', '"누가 하겠지."', '"난 안 할래."', '"너가 해."', '"나중에 할게."'] } } },
                hints: ['지금 그 일을 내가 맡겠다는 말인지 하나씩 살펴보세요.', '고른 말 가운데 일을 남에게 미루거나 뒤로 미루는 말이 있는지 보세요.', '"내가 할게!"와 "나는 풀을 모을게."가 먼저 나서는 말이에요.'] },
              { prompt: '모둠 일을 맡을 때 하는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: '살피기', text: '모둠에서 할 일을 살펴봐요' }, { id: '손들기', text: '손을 들고 "내가 할게"라고 말해요' }, { id: '고르기', text: '내가 할 수 있는 일을 골라요' }] },
                target: { order: ['살피기', '고르기', '손들기'] }, difficulty: 0.15,
                hints: ['무엇이 있는지 알아야 고를 수 있어요. 맨 처음에 할 일을 찾아보세요.', '고르기 전에 손부터 들면 무엇을 맡겠다고 말할까요?', '살펴보기 → 고르기 → 손 들고 말하기 차례예요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 손 들고 맡아 모둠 깃발 만들기', minutes: 14, tool: 'collage',
            teacher: '칠판에 모둠 깃발 만들 일 네 가지(바탕 붙이기, 무늬 붙이기, 모둠 이름 쓰기, 풀·종이 조각 정리)를 적는다. "할 일을 살펴보고, 내가 할 일을 골라 손을 들어요." 손을 들지 못한 학생에게는 남은 일 가운데 고르게 하고, 정리 일을 아무도 고르지 않으면 "정리도 모둠 일이에요"라고 짚는다. 화면에는 우리 모둠 깃발을 조각으로 남긴다.',
            task: '모둠 깃발 만드는 일 가운데 내가 맡을 일을 골라 손을 들고, 맡은 일을 해서 깃발을 완성해요.',
            levels: COL_LV,
            items: [
              { prompt: '모둠 깃발 만들 일 네 가지를 보고, 내가 맡을 일을 골라 손을 들어 말해요. 맡은 일을 다 하면 "다 했어요"를 누르세요.', free: true, talk: true },
              { prompt: '파랑 바탕 깃발에 하트 조각을 세 개 넘게 붙여 무늬를 꾸며 보세요.', state: { pieces: [{ shape: 'square', color: '파랑', size: 'l', x: 280, y: 200, r: 0 }] }, target: { has: [{ shape: 'heart', min: 3 }] }, difficulty: 0.1,
                levels: { challenge: { prompt: '파랑 바탕 깃발에 하트 조각 세 개 넘게, 노랑 동그라미 두 개 넘게를 붙여 무늬를 꾸며 보세요.', target: { has: [{ shape: 'heart', min: 3 }, { shape: 'circle', color: '노랑', min: 2 }] } } } },
              { prompt: '모둠 깃발을 다 만든 뒤, 해낸 것을 표시해 보세요.', state: { pieces: [{ shape: 'square', color: '파랑', size: 'l', x: 280, y: 200, r: 0 }] }, target: { selfCheck: ['내가 맡을 일을 골라 손을 들었어요', '맡은 일을 끝까지 했어요', '정리할 때 함께 도왔어요'], minPieces: 3 }, difficulty: 0.05 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 손을 먼저 들었을 때 어떤 마음이었나요?" 두세 명에게 듣는다. "누가 하겠지" 하고 기다린 순간이 있었다면 솔직히 말해 보게 하고, 탓하지 않는다. 다음 시간에는 힘들어하는 친구를 알아보는 방법을 배운다.',
        exitTicket: [
          { type: 'choice', prompt: '모둠 화분에 물 줄 사람을 찾는데 아무도 손을 안 들어요. 나는?', options: ['누가 하겠지 하고 기다려요', '"내가 할게" 하고 손을 들어요', '못 들은 척해요'], answer: 1, difficulty: 0.1, explain: '내가 먼저 나서면 모둠 일이 남지 않아요.' },
          { type: 'tool', tool: 'emotion', options: { mode: 'pick', basket: '먼저 나서는 말', cards: ['"제가 나눠 줄게요."', '"쟤가 하면 돼요."', '"제가 모을게요."'] }, prompt: '일을 내가 먼저 맡겠다는 말만 골라 보세요.', target: { pick: ['"제가 나눠 줄게요."', '"제가 모을게요."'] }, difficulty: 0.1 },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '내가 할게!',
      items: [
        { type: 'check', prompt: '모둠에서 내가 할 수 있는 일에 모두 ✓ 하세요.', options: ['바탕 붙이기', '무늬 붙이기', '이름 쓰기', '정리하기'] },
        { type: 'choice', prompt: '아무도 손을 안 들 때 알맞은 말에 ○ 하세요.', options: ['"내가 할게!"', '"누가 하겠지."'], answer: '"내가 할게!"' },
        { type: 'blank', prompt: '내가 맡고 싶은 일을 넣어 말해 보세요.', text: '"나는 ___ 할게!"', answer: '(학생마다 다름)' },
        { type: 'draw', prompt: '모둠에서 내가 맡은 일을 하는 모습을 그려 보세요.' },
      ],
      easy: {
        note: '할 일을 보고 내가 먼저 손을 들어요.',
        items: [
          { type: 'choice', prompt: '먼저 나서는 말에 ○ 하세요.', options: ['"내가 할게!"', '"난 안 할래."'], answer: '"내가 할게!"' },
          { type: 'choice', prompt: '정리도 모둠 일일까요? ○ 하세요.', options: ['네', '아니요'], answer: '네' },
          { type: 'draw', prompt: '우리 모둠 깃발을 그려 보세요.' },
          { type: 'short', prompt: '내가 맡은 일을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 조각 모양이 네 가지로 줄어요. 맡을 일은 선생님이 두 가지 가운데 고르게 도와줘요.',
      base: '보기 고르기·말 고르기·차례 놓기와 깃발 꾸미기를 하고 확인을 눌러요.',
      challenge: '미루는 말 카드가 더 섞이고, 깃발 무늬 조건이 늘어요. 아무도 맡지 않은 일이 있으면 그 일도 내가 맡아 봐요.',
    },
    teacherNotes: '준비: 모둠마다 큰 색지 1장, 색종이, 풀, 가위, 네임펜. 자주 보이는 어려움: ① 내가 나서지 않아도 누군가는 한다고 여긴다 → 아무도 손을 안 든 칠판 이야기를 떠올리게 한다. ② 늘 같은 학생만 손을 든다 → "아직 안 든 친구 먼저" 규칙을 둔다. ③ 시키는 것을 맡는 것으로 여긴다 → "내가"가 들어간 말로 바꾸어 말하게 한다.',
  }));

  lessons.push(L(42, {
    title: '힘들어하는 친구 알아채고 "도와줄까?" 묻기',
    objective: '친구의 표정·몸짓·말을 보고 도움이 필요한 친구를 알아채고, 먼저 다가가 "도와줄까?"라고 물을 수 있다.',
    illustration: ART('a paper child struggling to carry a tall stack of books, another child walking over with an open hand and a speech bubble, colorful paper chains hanging above', '도와줄까?', [
      { motif: 'heart', x: 100, y: 80, s: 0.5 }, { motif: 'cloud', x: 360, y: 70 }, { motif: 'flower', x: 400, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '교사가 무거운 상자를 드는 시늉을 하며 "끙끙" 소리를 내고 얼굴을 찡그린다. "선생님은 \'도와줘\'라고 말하지 않았어요. 그런데 무엇이 필요해 보여요?" 표정, 몸짓, 소리처럼 말없이도 알 수 있는 단서를 찾는다. 시연 단추로 상황에 마음 카드가 놓이는 모습을 보여 준다.',
        student: '선생님 모습에서 "도움이 필요하구나" 하고 알 수 있는 것을 찾아봐요.',
        demo: { tool: 'emotion', options: { cards: ['걱정', '기쁨'], slots: [{ id: 's1', label: '친구가 혼자 무거운 상자를 들고 끙끙대요' }], shuffle: false }, sequence: [{ match: { s1: '걱정' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 도움이 필요한 친구 알아채기', minutes: 12, tool: 'emotion',
            teacher: '"이 친구는 지금 도움이 필요할까요? 무엇을 보고 알았나요?" 단서(비틀거려요, 구겨요, 혼자 서 있어요)를 말하게 한다. 도와준다며 말없이 빼앗는 보기를 고른 학생에게 "친구는 그때 어떤 마음일까요?"를 묻는다.',
            task: '도움이 필요한 친구를 찾고, 어떻게 다가가면 좋을지 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '도움이 필요해 보이는 친구만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', basket: '도움이 필요해요', cards: ['가위질이 안 돼 종이를 구겨요', '책 더미를 들고 비틀거려요', '친구와 웃으며 블록을 쌓아요', '콧노래를 부르며 그림을 그려요'] },
                target: { pick: ['가위질이 안 돼 종이를 구겨요', '책 더미를 들고 비틀거려요'] }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['가위질이 안 돼 종이를 구겨요', '책 더미를 들고 비틀거려요', '친구와 웃으며 블록을 쌓아요', '콧노래를 부르며 그림을 그려요', '심부름을 신나게 다녀와요'] } } },
                hints: ['친구의 얼굴과 몸짓을 떠올려 보세요. 잘 안 되는 일이 있는 친구는 누구일까요?', '웃거나 노래하는 친구는 지금 어떤 마음일지 생각해 보세요.', '종이를 구기는 친구와 비틀거리는 친구가 도움이 필요해요.'] },
              { prompt: '서아가 가위질이 어려워 종이를 구기고 있어요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '서아', motif: 'leaf', situation: '서아가 동그라미를 오리는데 가위가 자꾸 미끄러져요. 서아는 종이를 구기며 한숨을 쉬어요.', choices: [
                { id: 'ask', text: '"도와줄까?" 하고 먼저 물어봐요', result: '서아가 "응, 종이를 잡아 줘" 해서 함께 오렸어요.', mood: '고마움' },
                { id: 'grab', text: '말없이 가위를 가져가 대신 다 오려요', result: '서아는 깜짝 놀랐어요. 스스로 오려 보고 싶었대요.', mood: '속상함', why: '서아에게 먼저 물어보았나요?' },
                { id: 'mine', text: '내 것만 빨리 끝내요', result: '서아는 혼자 끙끙대다 오리기를 그만두었어요.', mood: '슬픔', why: '한숨 쉬는 서아를 보았나요?' }] }, target: { choice: 'ask' }, difficulty: 0.15 },
              { prompt: '친구가 힘들어하는 모습과 알맞은 도움을 이어 보세요.', toolOptions: { mode: 'match', weather: false, cards: ['함께 뚜껑 돌려 보기', '함께 크레파스 줍기', '"같이 하자"고 부르기'], slots: [{ id: 's1', label: '물통 뚜껑이 안 열려 끙끙대요' }, { id: 's2', label: '크레파스를 바닥에 쏟고 울상이에요' }, { id: 's3', label: '놀이에 끼지 못하고 혼자 서 있어요' }] },
                target: { match: { s1: '함께 뚜껑 돌려 보기', s2: '함께 크레파스 줍기', s3: '"같이 하자"고 부르기' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['함께 뚜껑 돌려 보기', '함께 크레파스 줍기', '"같이 하자"고 부르기', '못 본 척 지나가기'] } } },
                hints: ['친구가 무엇 때문에 힘든지 먼저 찾아보세요.', '그 일을 함께 하면 친구가 덜 힘들어지는 도움을 골라요.', '뚜껑은 함께 돌리기, 크레파스는 함께 줍기, 혼자 선 친구는 부르기예요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 서로 도우며 종이 사슬 만들기', minutes: 14, tool: 'collage',
            teacher: '모둠마다 색종이 띠로 고리를 이어 교실에 걸 종이 사슬을 만든다. 고리 끝을 붙이기 어려워하는 친구가 꼭 생긴다. "끙끙대는 친구가 보이면 먼저 \'도와줄까?\'라고 물어요." 묻지 않고 대신 붙여 주는 학생이 보이면 그 자리에서 "먼저 물어볼까요?"라고 다시 해 보게 한다. 화면에는 사슬 무늬를 조각으로 남긴다.',
            task: '모둠이 서로 도우며 종이 사슬을 만들고, 사슬 무늬를 조각으로 꾸며요.',
            levels: COL_LV,
            items: [
              { prompt: '색종이 띠로 고리를 이어 종이 사슬을 만들어요. 힘들어하는 친구에게 "도와줄까?" 묻고 함께 한 뒤 "다 했어요"를 누르세요.', free: true, talk: true },
              { prompt: '빨강·노랑 동그라미를 번갈아 왼쪽부터 놓아 사슬 무늬를 만들어 보세요. 한 쌍이 세 번 넘게 되풀이되게 해요.', target: { repeat: { times: 3, unit: 2 }, has: [{ shape: 'circle', color: '빨강', min: 3 }, { shape: 'circle', color: '노랑', min: 3 }] }, difficulty: 0.2,
                levels: { easy: { prompt: '빨강·노랑 동그라미를 번갈아 왼쪽부터 놓아 사슬 무늬를 만들어 보세요. 한 쌍이 두 번 넘게 되풀이되게 해요.', target: { repeat: { times: 2, unit: 2 }, has: [{ shape: 'circle', color: '빨강', min: 2 }, { shape: 'circle', color: '노랑', min: 2 }] } } },
                hints: ['두 색 동그라미 하나씩을 한 묶음으로 생각해요. 왼쪽부터 차례로 놓아요.', '왼쪽부터 손가락으로 짚으며 색이 번갈아 나오는지 살펴보세요.', '빨강-노랑-빨강-노랑…처럼 왼쪽에서 오른쪽으로 나란히 놓아요.'] },
              { prompt: '종이 사슬을 다 만든 뒤, 해낸 것을 표시해 보세요.', target: { selfCheck: ['짝에게 "도와줄까?"라고 묻는 말을 해 보았어요', '내 고리를 끝까지 만들었어요', '다 만든 사슬을 모둠과 함께 걸었어요'], minPieces: 2 }, difficulty: 0.05 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 종이 사슬을 만들며 누가 누구를 도왔나요?" 도움을 받은 학생에게 그때 마음을 묻는다. 묻지 않고 대신 해 준 일이 있었다면 그때 친구 마음이 어땠을지 함께 떠올린다. 다음 시간에는 반 화분을 심으며 맡을 일과 도움을 함께 해 본다.',
        exitTicket: [
          { type: 'choice', prompt: '짝이 우유갑을 못 열어 끙끙대요. 먼저 할 말은?', options: ['"도와줄까?"', '"그것도 못 해?"', '말없이 빼앗아 열어요'], answer: 0, difficulty: 0.1, explain: '먼저 물어보면 친구가 어떤 도움을 바라는지 알 수 있어요.' },
          { type: 'tool', tool: 'emotion', options: { mode: 'pick', basket: '도움이 필요해요', cards: ['신발 끈이 풀려 자꾸 넘어질 뻔해요', '친구와 사이좋게 그네를 타요', '우산이 안 펴져 비를 맞고 있어요'] }, prompt: '도움이 필요해 보이는 친구만 골라 보세요.', target: { pick: ['신발 끈이 풀려 자꾸 넘어질 뻔해요', '우산이 안 펴져 비를 맞고 있어요'] }, difficulty: 0.1 },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '도와줄까?',
      items: [
        { type: 'check', prompt: '도움이 필요해 보이는 모습에 ✓ 하세요.', options: ['비틀거려요', '한숨을 쉬어요', '웃으며 놀아요', '혼자 서 있어요'] },
        { type: 'blank', prompt: '힘들어하는 친구에게 먼저 할 말을 쓰세요.', text: '"___?"', answer: '도와줄까' },
        { type: 'choice', prompt: '친구가 힘들어할 때 알맞은 것에 ○ 하세요.', options: ['먼저 물어봐요', '말없이 대신 해요'], answer: '먼저 물어봐요' },
        { type: 'draw', prompt: '모둠이 함께 만든 종이 사슬을 그려 보세요.' },
      ],
      easy: {
        note: '친구 얼굴과 몸짓을 잘 보아요.',
        items: [
          { type: 'choice', prompt: '도움이 필요한 친구에 ○ 하세요.', options: ['비틀거리는 친구', '웃는 친구'], answer: '비틀거리는 친구' },
          { type: 'choice', prompt: '먼저 할 말에 ○ 하세요.', options: ['"도와줄까?"', '"비켜!"'], answer: '"도와줄까?"' },
          { type: 'draw', prompt: '친구를 돕는 내 모습을 그려 보세요.' },
          { type: 'short', prompt: '오늘 도와준 일이나 도움받은 일을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 사슬 무늬는 두 쌍만 되풀이해요.',
      base: '고르기·보기 고르기·잇기와 사슬 무늬를 하고 확인을 눌러요.',
      challenge: '헷갈리는 카드가 더 섞여 있어요. 오늘 내가 알아챈 단서(표정·몸짓·소리)를 짝에게 말해요.',
    },
    teacherNotes: '준비: 색종이 띠(2cm×15cm) 모둠마다 30장, 풀 또는 테이프. 자주 보이는 어려움: ① 돕는다며 묻지 않고 대신 다 해 준다 → 먼저 "도와줄까?" 묻기를 짝과 소리 내어 연습한다. ② 친구가 말로 하지 않으면 모른다 → 표정·몸짓·소리 단서를 함께 찾는다. ③ 도움받는 것을 부끄러워한다 → 도움받은 학생도 "고마워"로 답하면 된다고 알려 준다.',
  }));

  lessons.push(L(43, {
    title: '반 화분 심기에서 맡을 일 나누고 서로 돕기',
    objective: '모둠이 화분을 심는 일을 나누어 각자 맡을 일을 고르고, 친구가 힘들어하는 단계에서 함께 도울 수 있다.',
    illustration: ART('four paper children around a clay flower pot: one scooping soil, one dropping seeds, two holding a watering can together, a small name tag in the pot', '우리 모둠 화분', [
      { motif: 'flower', x: 100, y: 222, color: 'rose' }, { motif: 'leaf', x: 380, y: 220 }, { motif: 'sun', x: 400, y: 60, s: 0.5 }]),
    safety: ['흙을 만진 손은 눈이나 입에 대지 않고, 끝나면 비누로 씻어요.', '물이 바닥에 흘렀으면 바로 닦아 미끄러지지 않게 해요.', '모종삽은 끝이 아래를 보게 들고 다녀요.'],
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"오늘은 모둠마다 반 화분 하나를 심어요. 화분을 심으려면 무슨 일이 있을까요?" 학생 말을 받아 흙 담기, 씨앗 넣기, 물 주기, 이름표 꽂기를 칠판에 적는다. "지난 시간처럼 맡을 일을 스스로 고르고, 힘들어하는 친구를 도와요." 시연 단추로 화분에 싹 조각이 붙는 모습을 보여 준다.',
        student: '화분을 심을 때 내가 맡고 싶은 일을 하나 떠올려 봐요.',
        demo: { tool: 'collage', options: { readOnly: true }, sequence: [{ has: [{ color: '초록', min: 2 }] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 화분 심는 일 나누기', minutes: 11, tool: 'kitchen',
            teacher: '"화분 심는 차례를 먼저 알아야 내 일을 언제 하는지 알 수 있어요." 차례를 놓은 뒤 친구들이 손을 들어 한 말을 읽고 맡은 일을 잇는다. 서로 돕는 모습을 고를 때 \'혼자 다 넣기\'에 표시한 학생에게 "그러면 씨앗을 맡은 친구는 무엇을 할까요?"를 묻는다.',
            task: '화분 심는 차례를 놓고, 친구가 맡은 일과 서로 돕는 모습을 찾아요.',
            levels: CARD_LV,
            items: [
              { prompt: '화분을 심는 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: [{ id: '물', text: '물뿌리개로 물을 줘요' }, { id: '흙', text: '화분에 흙을 담아요' }, { id: '씨앗', text: '씨앗을 넣고 흙을 덮어요' }] },
                target: { order: ['흙', '씨앗', '물'] }, difficulty: 0.1,
                levels: { challenge: { prompt: '화분을 심는 차례대로 네 장을 놓아 보세요.', toolOptions: { cards: [{ id: '물', text: '물뿌리개로 물을 줘요' }, { id: '흙', text: '화분에 흙을 담아요' }, { id: '구멍', text: '손가락으로 흙에 구멍을 내요' }, { id: '씨앗', text: '씨앗을 넣고 흙을 덮어요' }] }, target: { order: ['흙', '구멍', '씨앗', '물'] } } },
                hints: ['씨앗을 넣으려면 화분에 무엇이 먼저 있어야 할까요?', '물은 씨앗을 넣기 전과 뒤 가운데 언제 주는지 생각해 보세요.', '흙 담기 → 씨앗 넣고 덮기 → 물 주기예요.'] },
              { prompt: '친구들이 손을 들고 한 말을 읽고, 맡은 일 카드를 놓아 보세요.', toolOptions: { mode: 'match', cards: ['물 주기', '씨앗 넣기', '흙 담기'], slots: [{ id: 'm1', label: '민지: "물뿌리개는 내가 들게!"' }, { id: 'm2', label: '준호: "씨앗은 내가 넣을래."' }, { id: 'm3', label: '서아: "흙은 내가 담을게."' }] },
                target: { match: { m1: '물 주기', m2: '씨앗 넣기', m3: '흙 담기' } }, difficulty: 0.1,
                hints: ['친구가 한 말에 나오는 물건이나 일을 찾아 밑줄을 그어 보세요.', '물뿌리개·씨앗·흙 가운데 친구 말에 나온 것과 카드가 같은 일인지 보세요.', '물뿌리개는 물 주기, 씨앗은 씨앗 넣기, 흙은 흙 담기예요.'],
                levels: { challenge: { toolOptions: { cards: ['물 주기', '씨앗 넣기', '흙 담기', '구경하기'] } } } },
              { prompt: '화분을 심을 때 서로 돕는 모습에만 표시해 보세요.', toolOptions: { mode: 'checklist', title: '서로 돕는 모습', items: [{ id: 'hold', text: '흙 담을 때 화분을 잡아 줘요' }, { id: 'carry', text: '무거운 물뿌리개를 같이 들어요' }, { id: 'alone', text: '씨앗을 혼자 다 넣어 버려요' }, { id: 'sweep', text: '흘린 흙을 함께 쓸어요' }] },
                target: { checklist: ['hold', 'carry', 'sweep'] }, difficulty: 0.15,
                hints: ['친구와 함께 하거나 친구의 일을 거들어 주는 모습을 찾아요.', '혼자 다 해 버리면 그 일을 맡은 친구는 어떻게 될지 생각해 보세요.', '화분 잡아 주기, 물뿌리개 같이 들기, 흙 함께 쓸기에 표시해요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 함께 화분 심고 꾸미기', minutes: 16, tool: 'collage',
            teacher: '모둠마다 화분 1개, 흙, 강낭콩, 물뿌리개를 나눠 준다. 맡은 일대로 심되 힘들어하는 친구가 보이면 먼저 "도와줄까?"를 묻게 한다. 물뿌리개를 혼자 들기 무거워하는 모습이 자주 보인다. 그때 다가간 학생을 바로 칭찬하고, "내 일은 끝났어" 하고 앉는 학생에게 "아직 힘들어하는 친구가 있나요?"를 묻는다. 다 심은 모둠은 화면에서 화분 그림을 꾸민다.',
            task: '맡은 일대로 모둠 화분을 심고, 힘들어하는 친구를 도운 뒤 화분 그림을 꾸며요.',
            levels: COL_LV,
            items: [
              { prompt: '모둠이 맡은 일대로 화분에 흙을 담고 씨앗을 심어요. 힘들어하는 친구가 있으면 함께 한 뒤 "다 했어요"를 누르세요.', free: true, talk: true },
              { prompt: '갈색 화분 위에 초록 조각을 두 개 넘게 붙여 싹을 꾸며 보세요.', state: { pieces: [{ shape: 'square', color: '갈색', size: 'l', x: 280, y: 300, r: 0 }] }, target: { has: [{ color: '초록', min: 2 }] }, difficulty: 0.1,
                levels: { challenge: { prompt: '갈색 화분 위에 초록 조각 두 개 넘게로 싹을 붙이고, 노랑 동그라미 해를 꼭 하나 붙여 보세요.', target: { has: [{ color: '초록', min: 2 }, { shape: 'circle', color: '노랑', n: 1 }] } } } },
              { prompt: '모둠 화분을 다 심은 뒤, 해낸 것을 표시해 보세요.', state: { pieces: [{ shape: 'square', color: '갈색', size: 'l', x: 280, y: 300, r: 0 }] }, target: { selfCheck: ['내가 맡은 일을 했어요', '내 일이 끝난 뒤 둘레를 살펴보았어요', '흘린 흙과 물을 함께 치웠어요'], minPieces: 2 }, difficulty: 0.05 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 내 일이 끝난 뒤에 무엇을 했나요?" 끝나고 다른 친구를 도운 학생의 말을 듣는다. 모둠 화분을 창가에 나란히 놓고 물 주는 날을 정한다. 다음 시간에는 "도와줄까?"라고 물은 뒤 친구 대답에 맞게 돕는 법을 배운다.',
        exitTicket: [
          { type: 'choice', prompt: '모둠이 무거운 화분을 옮겨요. 한 친구가 힘들어해요. 알맞은 것은?', options: ['"같이 들까?" 하고 함께 들어요', '내 몫이 아니니 구경해요', '빨리 하라고 재촉해요'], answer: 0, difficulty: 0.1, explain: '힘들어하는 친구에게 먼저 다가가 함께 들면 안전하게 옮길 수 있어요.' },
          { type: 'tool', tool: 'kitchen', options: { mode: 'order', cards: [{ id: '덮기', text: '모종을 넣고 흙을 덮어요' }, { id: '담기', text: '새 화분에 흙을 반쯤 담아요' }, { id: '주기', text: '흙이 젖도록 물을 줘요' }] }, prompt: '모종을 새 화분에 옮겨 심는 차례대로 놓아 보세요.', target: { order: ['담기', '덮기', '주기'] }, difficulty: 0.15 },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '우리 모둠 화분 심기',
      items: [
        { type: 'table', prompt: '모둠 친구가 맡은 일을 쓰세요.', columns: ['친구 이름', '맡은 일'], rows: 4 },
        { type: 'check', prompt: '오늘 내가 한 도움에 ✓ 하세요.', options: ['화분 잡아 주기', '물뿌리개 같이 들기', '흘린 흙 쓸기', '이름표 함께 꾸미기'] },
        { type: 'short', prompt: '내 일이 끝난 뒤에 무엇을 했는지 쓰세요.' },
        { type: 'draw', prompt: '우리 모둠 화분을 그려 보세요.' },
      ],
      easy: {
        note: '맡은 일을 하고, 친구도 도와요.',
        items: [
          { type: 'choice', prompt: '가장 먼저 할 일에 ○ 하세요.', options: ['흙 담기', '물 주기'], answer: '흙 담기' },
          { type: 'choice', prompt: '서로 돕는 모습에 ○ 하세요.', options: ['물뿌리개 같이 들기', '혼자 다 하기'], answer: '물뿌리개 같이 들기' },
          { type: 'draw', prompt: '우리 화분을 그려 보세요.' },
          { type: 'short', prompt: '내가 맡은 일을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고 조각 모양이 네 가지로 줄어요. 화분 심기는 선생님이 차례 그림을 보여 줘요.',
      base: '차례·잇기·표시하기와 화분 꾸미기를 하고 확인을 눌러요.',
      challenge: '차례 카드가 네 장으로 늘고 맞지 않는 카드가 섞여 있어요. 화분에 물 주는 날을 모둠이 나누어 정해요.',
    },
    teacherNotes: '준비: 모둠마다 작은 화분, 상토, 강낭콩 3~4알, 물뿌리개, 모종삽, 이름표, 신문지. 자주 보이는 어려움: ① 내 일이 끝나면 다 끝났다고 여긴다 → "내 일이 끝나면 둘레를 봐요"를 약속한다. ② 모두 물 주기만 하려 한다 → 번갈아 고르기로 정한다. ③ 흙을 흘리고 탓한다 → 함께 쓰는 것도 돕기라고 짚는다. 콜라주 판은 화분 그림 남기기에 쓴다.',
  }));

  lessons.push(L(44, {
    title: '친구 대답에 맞게 돕는 방법 고르기',
    objective: '친구에게 도움이 필요한지 먼저 묻고, 친구의 대답에 따라 함께 하거나 기다려 주는 방법을 고를 수 있다.',
    illustration: ART('two paper children at a desk: one rebuilding a fallen block castle, the other sitting beside with a cheering gesture and a small speech bubble', '혼자 해 볼래? 기다릴게', [
      { motif: 'star', x: 240, y: 80, s: 0.6 }, { motif: 'heart', x: 100, y: 80, s: 0.5 }, { motif: 'tree', x: 400, y: 214 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"선생님이 신발 끈을 묶고 있었어요. 민지가 와서 끈을 확 묶어 주었어요. 그런데 선생님은 혼자 묶어 보고 싶었어요." 잠시 기다린 뒤 "민지는 무엇을 먼저 했으면 좋았을까요?"를 묻는다. 도와주려는 마음은 고마운 것이라고 먼저 짚어 준다. 시연 단추로 민지의 말풍선이 채워지는 모습을 보여 준다.',
        student: '친구가 나를 도와줬을 때 고마웠던 일과 아쉬웠던 일을 떠올려 봐요.',
        demo: { tool: 'story', options: { mode: 'fill', cards: ['"도와줄까?"', '"비켜!"'], slots: [{ id: 'b1', who: '민지', motif: 'heart', label: '___ 하고 먼저 물어요.' }], shuffle: false }, sequence: [{ fill: { b1: '"도와줄까?"' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 친구 대답 듣고 고르기', minutes: 13, tool: 'emotion',
            teacher: '"\'도와줄까?\'라고 물은 다음이 중요해요." 친구가 뭐라고 대답했는지 상황 글을 함께 읽는다. 친구가 "혼자 해 볼래"라고 했는데도 대신 해 주는 보기를 고른 학생에게 "하준이는 뭐라고 대답했나요?"를 되묻는다. 기다려 주는 것도 돕는 방법이라고 정리한다.',
            task: '친구의 대답을 잘 듣고 알맞게 돕는 방법을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '하준이가 "혼자 다시 해 볼래"라고 대답했어요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '하준', motif: 'star', situation: '하준이가 쌓던 블록 성이 무너졌어요. "도와줄까?" 물으니 하준이가 "아니, 혼자 다시 해 볼래." 했어요.', choices: [
                { id: 'wait', text: '"그래, 힘내!" 하고 옆에서 기다려요', result: '하준이가 혼자 다시 쌓고 뿌듯하게 웃어요.', mood: '뿌듯함' },
                { id: 'push', text: '"내가 해 줄게" 하고 블록을 쌓아 버려요', result: '하준이가 "내가 한다고 했잖아" 하며 속상해해요.', mood: '속상함', why: '하준이는 뭐라고 대답했나요?' },
                { id: 'leave', text: '"그럼 몰라" 하고 화내며 가 버려요', result: '하준이는 혼자 남아 쓸쓸해요.', mood: '슬픔', why: '친구가 혼자 하겠다고 하면 화낼 일일까요?' }] }, target: { choice: 'wait' }, difficulty: 0.15 },
              { prompt: '서아가 "응, 끝을 잡아 줘"라고 대답했어요. 어떻게 할까요?', toolOptions: { mode: 'branch', who: '서아', motif: 'leaf', situation: '서아가 큰 종이를 오리는데 종이가 자꾸 말려요. "도와줄까?" 물으니 서아가 "응, 끝을 잡아 줘." 했어요.', choices: [
                { id: 'hold', text: '종이 끝을 잡아 줘요', result: '종이가 펴져서 서아가 쉽게 오렸어요.', mood: '고마움' },
                { id: 'cut', text: '가위를 받아 대신 다 오려요', result: '서아는 오리는 것을 못 해서 아쉬워요.', mood: '속상함', why: '서아가 부탁한 것은 무엇이었나요?' }] }, target: { choice: 'hold' }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { choices: [
                  { id: 'hold', text: '종이 끝을 잡아 줘요', result: '종이가 펴져서 서아가 쉽게 오렸어요.', mood: '고마움' },
                  { id: 'cut', text: '가위를 받아 대신 다 오려요', result: '서아는 오리는 것을 못 해서 아쉬워요.', mood: '속상함', why: '서아가 부탁한 것은 무엇이었나요?' },
                  { id: 'tape', text: '종이를 책상에 테이프로 다 붙여 버려요', result: '종이가 책상에 붙어 서아가 오릴 수 없어요.', mood: '걱정', why: '서아가 부탁한 대로 했나요?' }] } } } },
              { prompt: '친구를 돕는 말과 친구 마음을 다치게 하는 말로 나누어 보세요.', toolOptions: { mode: 'sort', weather: false, cards: ['"도와줄까?"', '"어디를 잡아 줄까?"', '"그것도 못 해?"', '"느림보야!"'], slots: [{ id: 'kind', label: '돕는 말' }, { id: 'hurt', label: '마음을 다치게 하는 말' }] },
                target: { sort: { kind: ['"도와줄까?"', '"어디를 잡아 줄까?"'], hurt: ['"그것도 못 해?"', '"느림보야!"'] } }, difficulty: 0.1,
                levels: { challenge: { prompt: '친구를 돕는 말과 마음을 다치게 하는 말로 나누어 보세요. 카드가 더 있어요.', toolOptions: { cards: ['"도와줄까?"', '"어디를 잡아 줄까?"', '"그것도 못 해?"', '"느림보야!"', '"힘내, 기다릴게."', '"내가 더 잘해."'] },
                  target: { sort: { kind: ['"도와줄까?"', '"어디를 잡아 줄까?"', '"힘내, 기다릴게."'], hurt: ['"그것도 못 해?"', '"느림보야!"', '"내가 더 잘해."'] } } } },
                hints: ['그 말을 들은 친구 얼굴을 떠올려 보세요. 웃을까요, 시무룩할까요?', '친구를 놀리거나 깎아내리는 말이 \'돕는 말\'에 들어가 있지 않은지 보세요.', '묻는 말과 기다려 주는 말은 돕는 말, 놀리는 말은 마음을 다치게 하는 말이에요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 짝과 물어 가며 집 그림 꾸미기', minutes: 13, tool: 'collage',
            teacher: '짝과 큰 종이 한 장에 번갈아 색종이 조각을 붙여 집을 꾸민다. 붙이기 전에 "여기 붙여도 될까?", 짝이 힘들어하면 "도와줄까?"를 묻는다. 짝이 "혼자 할래"라고 하면 기다려 준다. 한 사람이 다 붙이는 짝에게는 "짝의 차례를 기다려 볼까요?"라고 말해 준다.',
            task: '짝과 물어 가며 번갈아 조각을 붙여 집 그림을 함께 꾸며요.',
            levels: COL_LV,
            items: [
              { prompt: '짝과 번갈아 집 그림 조각을 붙여요. 붙이기 전에 "여기 붙여도 될까?" 묻고, 짝 대답대로 한 뒤 "다 했어요"를 누르세요.', free: true, talk: true },
              { prompt: '노랑 네모 벽 위에 세모 지붕 하나 넘게, 동그라미 창문 두 개 넘게를 붙여 집을 꾸며 보세요.', state: { pieces: [{ shape: 'square', color: '노랑', size: 'l', x: 280, y: 260, r: 0 }] }, target: { has: [{ shape: 'triangle', min: 1 }, { shape: 'circle', min: 2 }] }, difficulty: 0.1,
                levels: { challenge: { prompt: '노랑 네모 벽 위에 빨강 세모 지붕 하나 넘게, 파랑 동그라미 창문 두 개 넘게, 하트 하나 넘게를 붙여 보세요.', target: { has: [{ shape: 'triangle', color: '빨강', min: 1 }, { shape: 'circle', color: '파랑', min: 2 }, { shape: 'heart', min: 1 }] } } } },
              { prompt: '짝과 집 그림을 다 꾸민 뒤, 해낸 것을 표시해 보세요.', state: { pieces: [{ shape: 'square', color: '노랑', size: 'l', x: 280, y: 260, r: 0 }] }, target: { selfCheck: ['붙이기 전에 짝에게 물었어요', '짝의 대답을 끝까지 들었어요', '짝과 번갈아 붙였어요'], minPieces: 3 }, difficulty: 0.05 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"짝이 내 대답을 듣고 도와주었을 때 마음이 어땠나요?" 두세 짝의 이야기를 듣는다. 돕고 싶은 마음이 앞서 짝의 대답을 듣지 못한 일이 있었다면 다시 해 보면 어떻게 할지 묻는다. 다음 시간에는 지금까지 한 모둠 활동을 돌아본다.',
        exitTicket: [
          { type: 'choice', prompt: '"도와줄까?" 물었더니 친구가 "괜찮아, 혼자 할게." 해요. 나는?', options: ['그래도 대신 해 줘요', '"힘내!" 하고 기다려요', '화를 내요'], answer: 1, difficulty: 0.1, explain: '친구가 혼자 해 보고 싶어 하면 기다려 주는 것도 돕는 방법이에요.' },
          { type: 'tool', tool: 'emotion', options: { mode: 'branch', who: '준호', motif: 'house', situation: '준호의 신발주머니 끈이 엉켰어요. "도와줄까?" 물으니 준호가 "응, 같이 풀자." 했어요.', choices: [
            { id: 'together', text: '끈 한쪽을 잡고 함께 풀어요' },
            { id: 'take', text: '주머니를 가져가 혼자 다 풀어요', why: '준호는 "같이 풀자"고 했어요.' },
            { id: 'go', text: '"알아서 해" 하고 가요', why: '준호가 도와 달라고 했어요.' }] }, prompt: '준호의 대답에 맞게 돕는 방법을 골라 보세요.', target: { choice: 'together' }, difficulty: 0.1 },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '친구 대답에 맞게 돕기',
      items: [
        { type: 'table', prompt: '친구 대답을 듣고 어떻게 도울지 쓰세요.', columns: ['친구 대답', '나는 이렇게 해요'], cells: [['"혼자 해 볼래."', ''], ['"응, 잡아 줘."', ''], ['"같이 하자."', '']] },
        { type: 'check', prompt: '돕는 말에 모두 ✓ 하세요.', options: ['"도와줄까?"', '"어디를 잡아 줄까?"', '"힘내, 기다릴게."', '"그것도 못 해?"'] },
        { type: 'short', prompt: '오늘 짝이 나를 도와준 일을 쓰세요.' },
        { type: 'draw', prompt: '짝과 함께 꾸민 집을 그려 보세요.' },
      ],
      easy: {
        note: '먼저 묻고, 대답을 잘 들어요.',
        items: [
          { type: 'choice', prompt: '친구가 "혼자 할래" 하면? ○ 하세요.', options: ['기다려요', '대신 해요'], answer: '기다려요' },
          { type: 'choice', prompt: '돕는 말에 ○ 하세요.', options: ['"도와줄까?"', '"느림보야!"'], answer: '"도와줄까?"' },
          { type: 'draw', prompt: '짝과 꾸민 집을 그려 보세요.' },
          { type: 'short', prompt: '짝에게 하고 싶은 말을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고 조각 모양이 네 가지로 줄어요.',
      base: '보기 두 개 고르기·말 나누기와 집 꾸미기를 하고 확인을 눌러요.',
      challenge: '보기와 말 카드가 더 늘고, 집 그림의 색 조건이 붙어요. 친구가 "혼자 할래"라고 할 때 기다리며 해 줄 응원 말을 지어 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 돕는 것은 대신 다 해 주는 것이라고 여긴다 → 친구가 부탁한 만큼만 돕는 장면을 짝과 해 본다. ② 친구가 거절하면 서운해하거나 화낸다 → "혼자 해 볼래"는 나를 싫어하는 말이 아니라고 짚는다. ③ 대답을 듣기 전에 손이 먼저 간다 → 묻고 셋을 센 뒤 움직이는 연습을 한다.',
  }));

  // ───────────────────────── 45~48차시: 잘된 점 찾고 역할 바꾸기, 단원 정리(성찰과 습관화) ─────────────────────────

  lessons.push(L(45, {
    title: '모둠 활동에서 잘된 점 찾고 다음 역할 정하기',
    objective: '지난 모둠 활동을 돌아보며 잘된 점을 하나 찾아 말하고, 다음에 바꾸어 맡을 역할을 정해 모둠에 알릴 수 있다.',
    illustration: ART('a paper group of four children sitting in a circle around their sprouting flower pot, one holding a small role card, a chart with swapped role arrows behind them', '잘된 점 하나, 바꿀 역할 하나', [
      { motif: 'leaf', x: 100, y: 222 }, { motif: 'star', x: 240, y: 84, s: 0.6 }, { motif: 'flower', x: 390, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '지난번에 심은 모둠 화분을 가져와 함께 본다. "화분을 심을 때 우리 모둠에서 무엇이 잘되었나요?" \'다 좋았어요\'라고 말하면 "무엇이 좋았는지 하나만 콕 집어 볼까요?"라고 되묻는다. 시연 단추로 \'잘된 점\' 가지에 카드가 놓이는 모습을 보여 준다.',
        student: '화분을 심을 때 우리 모둠이 잘한 일을 하나 떠올려 봐요.',
        demo: { tool: 'mindmap', options: { topic: '모둠 화분 심기', slots: ['잘된 점', '다음에 바꿀 점'], cards: ['이름표를 함께 꾸몄어요', '한 친구만 계속 흙을 날랐어요'], shuffle: false }, sequence: [{ sort: { '잘된 점': ['이름표를 함께 꾸몄어요'], '다음에 바꿀 점': ['한 친구만 계속 흙을 날랐어요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 잘된 점과 다음에 바꿀 점', minutes: 13, tool: 'mindmap',
            teacher: '"잘된 점은 무엇이, 왜 좋았는지 말해야 친구들이 알아들어요." \'그냥 좋았어\'를 고른 학생에게 "그 말을 들으면 무엇이 좋았는지 알 수 있나요?"를 묻는다. 다음 역할을 정할 때는 친구가 하고 싶은 말을 먼저 듣는다. \'역할은 처음 정한 대로 계속 가야 한다\'는 말이 나오면 활동 2에서 다시 짚는다.',
            task: '모둠 활동에서 잘된 점과 바꿀 점을 나누고, 다음에 맡을 역할을 정해요.',
            levels: CARD_LV,
            items: [
              { prompt: '모둠 화분을 심을 때 있었던 일을 잘된 점과 다음에 바꿀 점으로 나누어 보세요.', toolOptions: { topic: '모둠 화분 심기', slots: ['잘된 점', '다음에 바꿀 점'], cards: ['흙을 흘리면 함께 쓸었어요', '씨앗 넣기를 서로 하겠다고 다투었어요', '물뿌리개를 둘이 같이 들었어요', '한 친구는 할 일이 없어 구경만 했어요'] },
                target: { sort: { '잘된 점': ['흙을 흘리면 함께 쓸었어요', '물뿌리개를 둘이 같이 들었어요'], '다음에 바꿀 점': ['씨앗 넣기를 서로 하겠다고 다투었어요', '한 친구는 할 일이 없어 구경만 했어요'] } }, difficulty: 0.15,
                levels: { challenge: { prompt: '있었던 일 여섯 가지를 잘된 점과 다음에 바꿀 점으로 나누어 보세요.', toolOptions: { cards: ['흙을 흘리면 함께 쓸었어요', '씨앗 넣기를 서로 하겠다고 다투었어요', '물뿌리개를 둘이 같이 들었어요', '한 친구는 할 일이 없어 구경만 했어요', '차례를 지켜 씨앗을 넣었어요', '끝나고 아무도 정리를 안 했어요'] },
                  target: { sort: { '잘된 점': ['흙을 흘리면 함께 쓸었어요', '물뿌리개를 둘이 같이 들었어요', '차례를 지켜 씨앗을 넣었어요'], '다음에 바꿀 점': ['씨앗 넣기를 서로 하겠다고 다투었어요', '한 친구는 할 일이 없어 구경만 했어요', '끝나고 아무도 정리를 안 했어요'] } } } },
                hints: ['그 일이 있었을 때 모둠 친구들 얼굴이 웃었을지 찡그렸을지 떠올려 보세요.', '다툼이나 구경만 한 일이 \'잘된 점\'에 들어가 있지 않은지 보세요.', '함께 쓸기·같이 들기는 잘된 점, 다툼·구경만 하기는 바꿀 점이에요.'] },
              { prompt: '무엇이 잘되었는지 알 수 있게 말한 것만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '잘된 점 말하기', basket: '알 수 있게 말했어요', cards: ['"화분을 잡아 줘서 흙이 안 흘렀어."', '"그냥 좋았어."', '"번갈아 넣어서 다툼이 없었어."', '"몰라."'] },
                target: { pick: ['"화분을 잡아 줘서 흙이 안 흘렀어."', '"번갈아 넣어서 다툼이 없었어."'] }, difficulty: 0.15,
                hints: ['그 말만 듣고 무엇이 좋았는지 알 수 있는지 하나씩 따져 보세요.', '\'그냥\'이나 \'몰라\'에는 무엇이 좋았는지가 들어 있나요?', '흙이 안 흘렀다는 말과 다툼이 없었다는 말이 무엇이 잘되었는지 알려 줘요.'] },
              { prompt: '친구들이 다음에 해 보고 싶은 일을 말했어요. 모두 다른 일을 맡도록 카드를 놓아 보세요.', toolOptions: { mode: 'match', topic: '다음 역할', cards: ['물 주기', '이름표 꾸미기', '흙 담기', '씨앗 넣기'], slots: [{ id: 'm1', label: '민지: "물 주기를 해 볼래."' }, { id: 'm2', label: '준호: "이름표를 꾸며 볼래."' }, { id: 'm3', label: '서아: "흙을 담아 볼래."' }, { id: 'm4', label: '하준: "나는 남는 일을 할게."' }] },
                target: { match: { m1: '물 주기', m2: '이름표 꾸미기', m3: '흙 담기', m4: '씨앗 넣기' } }, difficulty: 0.2,
                hints: ['먼저 하고 싶은 일을 말한 친구들부터 카드를 놓아요.', '세 친구에게 카드를 놓고 나면 남는 카드가 무엇인지 보세요.', '하준이는 남은 씨앗 넣기를 맡아요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 역할은 바꿀 수 있을까', minutes: 13, tool: 'emotion',
            teacher: '"물 주기는 지난번에도 준호가 했어요. 서아도 해 보고 싶대요. 처음 정한 대로 해야 할까요?" 보기를 고른 뒤 결과를 읽는다. 바꾸고 싶을 때 몰래 가져가지 않고 말로 알리는 것이 중요하다고 짚는다. 모둠마다 다음 역할을 정해 서로 알리게 하고, 교사는 돌아다니며 "왜 그 일을 골랐나요?"를 묻는다.',
            task: '역할을 바꾸고 싶을 때 어떻게 할지 고르고, 내 마음을 돌아본 뒤 다음 역할을 모둠에 알려요.',
            levels: CARD_LV,
            items: [
              { prompt: '서아도 물 주기를 해 보고 싶대요. 어떻게 하면 좋을까요?', toolOptions: { mode: 'branch', who: '서아', motif: 'flower', situation: '물 주기는 지난번에도 준호가 했어요. 서아도 물을 주고 싶은데 아직 한 번도 못 해 봤어요.', choices: [
                { id: 'same', text: '"처음 정한 대로 준호가 계속해야 해."', result: '서아는 이번에도 물을 못 줘서 서운해요.', mood: '속상함', why: '역할은 꼭 처음 정한 대로만 해야 할까요?' },
                { id: 'swap', text: '"이번엔 서로 바꿔 해 볼까?" 하고 말해요', result: '서아는 물을 주고, 준호는 처음으로 이름표를 꾸며 봐요.', mood: '신남' },
                { id: 'sneak', text: '서아가 말없이 물뿌리개를 가져가요', result: '준호가 놀라고 모둠이 다투었어요.', mood: '화남', why: '바꾸고 싶을 때는 어떻게 알려야 할까요?' }] }, target: { choice: 'swap' }, difficulty: 0.15 },
              { prompt: '모둠 화분을 심을 때 내가 맡은 일을 얼마나 해냈는지 솔직하게 골라 보세요. 정답은 없어요.', toolOptions: { mode: 'scale', steps: 3, situation: '모둠 화분을 심을 때 내가 맡은 일을 떠올려 봐요.', feeling: '뿌듯함', ask: '내가 맡은 일을 얼마나 해냈나요?', scaleLabels: { 1: '조금', 3: '끝까지' } }, target: { level: 'any' }, difficulty: 0.05,
                hints: ['지금 내 모습을 떠올려 보고, 가장 가까운 눈금 하나를 눌러요. 어느 눈금이든 괜찮아요.', '아직 고르지 않았다면 눈금 하나를 눌러요. 잘하고 못하고를 재는 것이 아니에요.', '눈금 가운데 하나를 고르면 돼요. 고른 눈금이 지금의 내 모습이에요.'] },
              { prompt: '모둠에서 잘된 점 하나를 말하고, "나는 다음에 ○○를 할게." 하고 다음 역할을 알려요. 다 하면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '모둠마다 정한 다음 역할을 칠판 역할표에 붙인다. "다음 역할을 어떻게 정했나요?" 한두 모둠의 방법을 듣는다. 하고 싶은 일이 겹친 모둠이 어떻게 풀었는지도 나눈다. 다음 시간에는 바꾼 역할로 모둠 활동을 다시 해 본다.',
        exitTicket: [
          { type: 'choice', prompt: '모둠 놀이에서 늘 같은 친구만 공을 나눠 줬어요. 다음 놀이에서는?', options: ['처음 정한 대로 계속해요', '다른 친구와 바꾸어 해 봐요'], answer: 1, difficulty: 0.1, explain: '역할을 바꾸면 여러 친구가 새로운 일을 해 볼 수 있어요.' },
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '잘된 점 말하기', basket: '알 수 있게 말했어요', cards: ['"서로 기다려 줘서 줄이 안 엉켰어."', '"좋았어."', '"공을 번갈아 차서 모두 해 봤어."'] }, prompt: '무엇이 잘되었는지 알 수 있게 말한 것만 골라 보세요.', target: { pick: ['"서로 기다려 줘서 줄이 안 엉켰어."', '"공을 번갈아 차서 모두 해 봤어."'] }, difficulty: 0.15 },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '잘된 점과 다음 역할',
      items: [
        { type: 'table', prompt: '우리 모둠 활동을 돌아보고 쓰세요.', columns: ['잘된 점', '다음에 바꿀 점'], rows: 2 },
        { type: 'table', prompt: '모둠 역할표를 채우세요.', columns: ['친구 이름', '지난번 역할', '다음 역할'], rows: 4 },
        { type: 'choice', prompt: '역할에 대해 알맞은 말에 ○ 하세요.', options: ['때때로 바꾸어 해 볼 수 있어요', '처음 정한 대로만 해야 해요'], answer: '때때로 바꾸어 해 볼 수 있어요' },
        { type: 'blank', prompt: '다음 역할을 모둠에 알리는 말을 완성하세요.', text: '"나는 다음에 ___ 할게."', answer: '(학생마다 다름)' },
      ],
      easy: {
        note: '잘된 점 하나, 다음 역할 하나를 정해요.',
        items: [
          { type: 'choice', prompt: '잘된 점에 ○ 하세요.', options: ['함께 흙을 쓸었어요', '서로 다투었어요'], answer: '함께 흙을 쓸었어요' },
          { type: 'choice', prompt: '역할을 바꾸고 싶을 때 알맞은 것에 ○ 하세요.', options: ['말로 알려요', '몰래 가져가요'], answer: '말로 알려요' },
          { type: 'short', prompt: '다음에 내가 맡을 일을 쓰세요.' },
          { type: 'draw', prompt: '다음 역할을 하는 내 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생겨요. 잘된 점은 선생님이 보여 주는 화분 사진을 보며 찾아요.',
      base: '나누기·고르기·역할 정하기와 보기 고르기를 하고 확인을 눌러요.',
      challenge: '나눌 카드가 여섯 장으로 늘어요. 하고 싶은 일이 겹치면 모둠이 어떻게 정할지 방법을 말해요.',
    },
    teacherNotes: '준비: 지난 차시 모둠 화분(또는 활동 사진), 칠판 역할표(모둠 이름과 역할 칸). 자주 보이는 어려움: ① 역할은 처음 정한 대로 계속 가야 한다고 여긴다 → 바꾸어 해 본 결과를 다음 차시에서 직접 견주게 한다. ② 잘된 점을 \'다 좋았어\'로만 말한다 → "무엇이, 왜"를 넣은 말틀을 칠판에 둔다. ③ 바꿀 점을 말하며 친구를 탓한다 → 사람 대신 일(구경만 했어요 → 할 일을 더 나누어요)로 말하게 한다.',
  }));

  lessons.push(L(46, {
    title: '바꾼 역할로 바다 그림 다시 꾸미기',
    objective: '지난번과 다른 역할을 맡아 모둠 그림을 다시 꾸며 보고, 바꾸어 해 보니 새로 알게 된 점을 말할 수 있다.',
    illustration: ART('four paper children decorating a big blue sea mural together with paper fish and seaweed, each wearing a new role badge, one child showing another how to glue a fish tail', '역할을 바꾸어 꾸며요', [
      { motif: 'wave', x: 240, y: 230 }, { motif: 'star', x: 100, y: 80, s: 0.5 }, { motif: 'cloud', x: 380, y: 70 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '지난 시간 칠판 역할표를 다시 본다. "오늘 처음 해 보는 일을 맡은 사람 손 들어 볼까요? 처음 하는 일이 어려우면 누구에게 물어보면 될까요?" 지난번 그 일을 맡았던 친구에게 물으면 된다는 답을 기다린다. 시연 단추로 바다에 물고기 조각이 붙는 모습을 보여 준다.',
        student: '오늘 내가 새로 맡은 일을 짝에게 말해 봐요.',
        demo: { tool: 'collage', options: { readOnly: true }, sequence: [{ has: [{ shape: 'triangle', min: 2 }] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 바꾼 역할로 바다 그림 꾸미기', minutes: 16, tool: 'collage',
            teacher: '모둠 역할은 바다 칠하기, 물고기 붙이기, 바닷말 붙이기, 이름 쓰기와 정리 네 가지다. 지난번과 다른 일을 맡는다. 처음 맡은 일이 어려운 학생이 "못 하겠어"라고 하면 "지난번에 그 일을 한 친구에게 물어볼까요?"로 잇는다. 알려 주는 학생에게는 대신 해 주지 말고 말로 알려 주게 한다. 화면에서는 우리 모둠 바다를 조각으로 꾸민다.',
            task: '바꾼 역할대로 모둠 바다 그림을 꾸미고, 어려우면 그 일을 해 본 친구에게 물어요.',
            levels: COL_LV,
            items: [
              { prompt: '모둠이 바꾼 역할대로 큰 종이에 바다 그림을 꾸며요. 어려우면 그 일을 해 본 친구에게 묻고, 다 하면 "다 했어요"를 누르세요.', free: true, talk: true },
              { prompt: '파랑 바다에 물고기를 꾸며요. 동그라미 몸 두 개 넘게와 세모 꼬리 두 개 넘게를 붙여 보세요.', state: { pieces: [{ shape: 'square', color: '파랑', size: 'l', x: 280, y: 200, r: 0 }] }, target: { has: [{ shape: 'circle', min: 2 }, { shape: 'triangle', min: 2 }] }, difficulty: 0.1,
                levels: { challenge: { prompt: '파랑 바다에 주황 동그라미 몸 세 개 넘게와 세모 꼬리 세 개 넘게를 붙여 물고기를 꾸며 보세요.', target: { has: [{ shape: 'circle', color: '주황', min: 3 }, { shape: 'triangle', min: 3 }] } } } },
              { prompt: '물고기 둘레에 초록 조각을 세 개 넘게 붙여 바닷말을 꾸며 보세요.', state: { pieces: [{ shape: 'square', color: '파랑', size: 'l', x: 280, y: 200, r: 0 }, { shape: 'circle', color: '주황', size: 'm', x: 200, y: 140, r: 0 }, { shape: 'triangle', color: '주황', size: 'm', x: 140, y: 140, r: 90 }] }, target: { has: [{ color: '초록', min: 3 }] }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 바꾸어 해 보니 어땠나', minutes: 11, tool: 'emotion',
            teacher: '"처음 해 보는 일을 맡았을 때 마음이 어땠나요?" 걱정했던 마음도 자연스러운 것이라고 받아 준다. \'늘 하던 일만 하면 편해서 좋다\'는 말이 나오면 "그러면 다른 친구는 그 일을 언제 해 볼 수 있을까요?"를 묻는다.',
            task: '역할을 바꾸어 해 본 마음과 좋은 점을 찾고, 새로 알게 된 점을 짝에게 말해요.',
            levels: CARD_LV,
            items: [
              { prompt: '역할을 바꾸어 해 보며 생긴 일에 알맞은 마음 카드를 놓아 보세요.', toolOptions: { cards: ['걱정', '고마움', '뿌듯함'], slots: [{ id: 's1', label: '처음 해 보는 일이라 잘할 수 있을지 몰랐어요' }, { id: 's2', label: '모르는 것을 친구가 친절하게 알려 주었어요' }, { id: 's3', label: '새 역할을 끝까지 해내서 바다 그림이 완성됐어요' }] },
                target: { match: { s1: '걱정', s2: '고마움', s3: '뿌듯함' } }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['걱정', '고마움', '뿌듯함', '화남'] } } } },
              { prompt: '역할을 바꾸어 해 보아서 좋은 점만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', weather: false, basket: '바꾸면 좋은 점', cards: ['새로운 일을 해 볼 수 있어요', '친구 일이 얼마나 힘든지 알게 돼요', '늘 하던 일만 해서 편해요', '한 사람만 계속 쉬어요'] },
                target: { pick: ['새로운 일을 해 볼 수 있어요', '친구 일이 얼마나 힘든지 알게 돼요'] }, difficulty: 0.15,
                levels: { challenge: { toolOptions: { cards: ['새로운 일을 해 볼 수 있어요', '친구 일이 얼마나 힘든지 알게 돼요', '늘 하던 일만 해서 편해요', '한 사람만 계속 쉬어요', '잘하는 사람만 계속해요'] } } },
                hints: ['그 카드가 \'바꾸었기 때문에\' 생기는 일인지 따져 보세요.', '늘 하던 일만 하거나 한 사람만 쉬는 것은 역할을 바꾼 것일까요?', '새 일을 해 보는 것과 친구 일의 어려움을 아는 것이 좋은 점이에요.'] },
              { prompt: '바꾸어 맡아 보니 새로 알게 된 점 하나를 짝에게 말한 뒤 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '모둠마다 바다 그림을 들고 "이번에 처음 해 본 일"을 한 사람씩 짧게 말한다. 지난번 화분 심기 때와 견주어 달라진 점이 있는지 묻는다. 다음 시간에는 지금까지 배운 것을 모둠 약속으로 만든다.',
        exitTicket: [
          { type: 'choice', prompt: '새로 맡은 공 나눠 주기가 어려워요. 먼저 할 일은?', options: ['해 본 친구에게 물어봐요', '그만둬요', '예전 역할로 바꿔 달라고 떼써요'], answer: 0, difficulty: 0.1, explain: '그 일을 해 본 친구에게 물으면 처음 하는 일도 해낼 수 있어요.' },
          { type: 'tool', tool: 'emotion', options: { cards: ['걱정', '뿌듯함'], slots: [{ id: 's1', label: '처음 맡은 줄 세우기, 잘할 수 있을까?' }, { id: 's2', label: '처음 맡은 줄 세우기를 끝까지 해냈어요' }] }, prompt: '상황에 알맞은 마음 카드를 놓아 보세요.', target: { match: { s1: '걱정', s2: '뿌듯함' } }, difficulty: 0.1 },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '역할을 바꾸어 해 보니',
      items: [
        { type: 'table', prompt: '지난번과 이번을 견주어 쓰세요.', columns: ['', '지난번', '이번'], cells: [['내가 맡은 일', '', ''], ['어려웠던 점', '', '']] },
        { type: 'check', prompt: '역할을 바꾸어 좋았던 점에 ✓ 하세요.', options: ['새로운 일을 해 봤어요', '친구 일이 힘든 것을 알았어요', '친구에게 배웠어요'] },
        { type: 'short', prompt: '바꾸어 해 보니 새로 알게 된 점을 쓰세요.' },
        { type: 'draw', prompt: '우리 모둠 바다 그림에서 내가 꾸민 부분을 그려 보세요.' },
      ],
      easy: {
        note: '새로 맡은 일이 어려우면 친구에게 물어요.',
        items: [
          { type: 'choice', prompt: '어려울 때 알맞은 것에 ○ 하세요.', options: ['친구에게 물어요', '그만둬요'], answer: '친구에게 물어요' },
          { type: 'short', prompt: '오늘 처음 해 본 일을 쓰세요.' },
          { type: 'draw', prompt: '바다 그림을 그려 보세요.' },
          { type: 'choice', prompt: '역할을 바꾸면 좋은 점에 ○ 하세요.', options: ['새 일을 해 봐요', '늘 같은 일만 해요'], answer: '새 일을 해 봐요' },
        ],
      },
    },
    differentiation: {
      easy: '조각 모양이 네 가지로 줄고, 마음 카드는 맞는 칸에 초록 테두리가 생겨요.',
      base: '물고기·바닷말 꾸미기와 마음 잇기·고르기를 하고 확인을 눌러요.',
      challenge: '물고기 조건이 늘고, 헷갈리는 카드가 더 섞여 있어요. 내 새 역할을 다음에 맡을 친구에게 알려 줄 방법을 말해요.',
    },
    teacherNotes: '준비: 모둠마다 큰 도화지(파랑 칠할 것), 색종이(주황·초록 등), 풀, 크레파스, 칠판 역할표. 자주 보이는 어려움: ① 처음 하는 일이라 손을 놓는다 → 그 일을 해 본 친구에게 묻는 길을 미리 알려 준다. ② 알려 주는 학생이 대신 다 해 준다 → 말로만 알려 주기를 약속한다. ③ 역할은 바꾸면 안 된다고 여긴다 → 지난번과 이번의 그림과 마음을 견주어 본다.',
  }));

  lessons.push(L(47, {
    title: '모둠 약속 정하고 약속판 꾸미기',
    objective: '여럿이 함께할 때 지킬 모둠 약속을 골라 약속판을 꾸미고, 각 약속이 필요한 때를 말할 수 있다.',
    illustration: ART('a decorated paper promise board on a classroom wall with three hand-drawn promise lines, hearts on both sides, and four paper children pinky-promising in front of it', '우리 모둠 약속', [
      { motif: 'heart', x: 100, y: 80, s: 0.5 }, { motif: 'star', x: 380, y: 80, s: 0.5 }, { motif: 'flower', x: 400, y: 228 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"지금까지 모둠 활동을 하며 우리가 배운 것이 무엇이 있었나요?" 먼저 손 들기, "도와줄까?" 묻기, 잘된 점 말하기, 역할 바꾸기를 학생 말로 모아 칠판에 적는다. "오늘은 이것을 모둠 약속으로 만들어 늘 지켜요." 시연 단추로 약속판에 하트 조각이 붙는 모습을 보여 준다.',
        student: '모둠 활동에서 꼭 지키고 싶은 것을 하나 떠올려 봐요.',
        demo: { tool: 'collage', options: { readOnly: true }, sequence: [{ has: [{ shape: 'heart', min: 2 }] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 모둠 약속 고르고 쓰임 알기', minutes: 12, tool: 'mindmap',
            teacher: '"약속은 모두가 지킬 수 있고, 모두에게 좋아야 해요." \'잘하는 친구만 칭찬하기\'를 좋은 약속에 넣은 학생에게 "그러면 다른 친구들의 잘한 점은 누가 찾아 줄까요?"를 묻는다. 약속마다 언제 쓰는지 이어 본 뒤, 모둠 활동의 처음·가운데·끝에 놓아 본다.',
            task: '모둠 약속으로 좋은 것을 고르고, 약속이 필요한 때와 차례를 알아봐요.',
            levels: CARD_LV,
            items: [
              { prompt: '모둠 약속으로 좋은 것과 알맞지 않은 것으로 나누어 보세요.', toolOptions: { topic: '모둠 약속', slots: ['약속으로 좋아요', '알맞지 않아요'], cards: ['할 일을 먼저 골라 손 들기', '힘들어하는 친구에게 "도와줄까?" 묻기', '목소리 큰 사람이 다 정하기', '잘하는 친구만 칭찬하기'] },
                target: { sort: { '약속으로 좋아요': ['할 일을 먼저 골라 손 들기', '힘들어하는 친구에게 "도와줄까?" 묻기'], '알맞지 않아요': ['목소리 큰 사람이 다 정하기', '잘하는 친구만 칭찬하기'] } }, difficulty: 0.15,
                levels: { challenge: { prompt: '모둠 약속 카드 여섯 장을 좋은 것과 알맞지 않은 것으로 나누어 보세요.', toolOptions: { cards: ['할 일을 먼저 골라 손 들기', '힘들어하는 친구에게 "도와줄까?" 묻기', '목소리 큰 사람이 다 정하기', '잘하는 친구만 칭찬하기', '역할을 돌아가며 맡기', '내 일만 끝내면 쉬기'] },
                  target: { sort: { '약속으로 좋아요': ['할 일을 먼저 골라 손 들기', '힘들어하는 친구에게 "도와줄까?" 묻기', '역할을 돌아가며 맡기'], '알맞지 않아요': ['목소리 큰 사람이 다 정하기', '잘하는 친구만 칭찬하기', '내 일만 끝내면 쉬기'] } } } },
                hints: ['모둠 친구 모두가 지킬 수 있고, 모두에게 좋은 약속인지 따져 보세요.', '몇 사람만 좋거나 몇 사람만 하게 되는 카드가 \'좋아요\'에 있는지 보세요.', '손 들기·"도와줄까?" 묻기는 좋은 약속, 큰 목소리로 다 정하기·잘하는 친구만 칭찬하기는 알맞지 않아요.'] },
              { prompt: '모둠 약속을 쓰는 때와 이어 보세요.', toolOptions: { mode: 'match', topic: '약속이 필요한 때', slots: [{ id: 'm1', label: '모둠 일을 나눌 때' }, { id: 'm2', label: '친구가 끙끙댈 때' }, { id: 'm3', label: '활동이 끝났을 때' }], cards: ['먼저 손 들고 맡기', '"도와줄까?" 묻기', '잘된 점 하나씩 말하기'] },
                target: { match: { m1: '먼저 손 들고 맡기', m2: '"도와줄까?" 묻기', m3: '잘된 점 하나씩 말하기' } }, difficulty: 0.15,
                hints: ['그때 모둠에서 무슨 일이 일어나는지 떠올려 보세요.', '일을 나누는 때, 친구가 힘든 때, 다 끝난 때에 각각 무엇을 하면 좋을지 보세요.', '나눌 때는 손 들기, 끙끙댈 때는 "도와줄까?", 끝났을 때는 잘된 점 말하기예요.'] },
              { prompt: '모둠 활동을 하는 차례대로 약속 카드를 놓아 보세요.', toolOptions: { mode: 'order', topic: '약속 차례', slots: ['처음', '가운데', '끝'], cards: ['잘된 점 말하기', '맡을 일 고르기', '함께 하며 돕기'] },
                target: { order: ['맡을 일 고르기', '함께 하며 돕기', '잘된 점 말하기'] }, difficulty: 0.1,
                hints: ['모둠 활동을 시작할 때 맨 먼저 무엇을 정하는지 떠올려 보세요.', '잘된 점은 활동을 하기 전과 다 한 뒤 가운데 언제 말할 수 있을까요?', '맡을 일 고르기 → 함께 하며 돕기 → 잘된 점 말하기예요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 우리 모둠 약속판 꾸미기', minutes: 15, tool: 'collage',
            teacher: '모둠마다 약속 세 가지를 골라 큰 종이에 쓴다. 쓸 사람, 꾸밀 사람, 읽을 사람을 스스로 골라 손을 든다. 다 쓴 모둠은 한 사람씩 약속을 소리 내어 읽고 새끼손가락을 건다. 화면에서는 약속판 양쪽을 똑같이 꾸민다. 약속판은 교실에 붙이고 지킨 날을 표시할 것이라고 알린다.',
            task: '모둠 약속 세 가지를 약속판에 쓰고, 양쪽을 똑같이 꾸며요.',
            levels: COL_LV,
            items: [
              { prompt: '모둠이 약속 세 가지를 골라 큰 종이에 쓰고, 한 사람씩 소리 내어 읽은 뒤 "다 했어요"를 누르세요.', free: true, talk: true },
              { prompt: '약속판 양쪽이 똑같아지게 꾸며요. 접는 선 오른쪽에도 하트를 붙여 왼쪽과 짝을 맞춰 보세요.', state: { pieces: [{ shape: 'square', color: '노랑', size: 'l', x: 280, y: 200, r: 0 }, { shape: 'heart', color: '분홍', size: 'm', x: 180, y: 120, r: 0 }] }, target: { symmetry: 'vertical', pieces: { min: 3 } }, difficulty: 0.2,
                levels: { challenge: { prompt: '왼쪽의 하트와 동그라미와 짝이 되게 오른쪽에도 붙여 약속판 양쪽을 똑같이 꾸며 보세요.', state: { pieces: [{ shape: 'square', color: '노랑', size: 'l', x: 280, y: 200, r: 0 }, { shape: 'heart', color: '분홍', size: 'm', x: 180, y: 120, r: 0 }, { shape: 'circle', color: '빨강', size: 'm', x: 160, y: 300, r: 0 }] }, target: { symmetry: 'vertical', pieces: { min: 5 } } } },
                hints: ['가운데 접는 선을 접었다고 생각해 보세요. 왼쪽 조각은 오른쪽 어디에 닿을까요?', '오른쪽에 붙인 조각이 접는 선에서 왼쪽 조각과 같은 거리인지, 같은 높이인지 보세요.', '왼쪽 하트와 같은 색·같은 크기 하트를 접는 선에서 같은 거리, 같은 높이에 붙여요.'] },
              { prompt: '약속판을 다 꾸민 뒤, 해낸 것을 표시해 보세요.', state: { pieces: [{ shape: 'square', color: '노랑', size: 'l', x: 280, y: 200, r: 0 }] }, target: { selfCheck: ['모둠 약속을 세 가지 골랐어요', '약속을 소리 내어 읽었어요', '약속판을 함께 꾸몄어요'], minPieces: 3 }, difficulty: 0.05 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '모둠 약속판을 교실 뒤에 나란히 붙인다. "우리 반 약속판에 똑같이 들어간 약속이 있나요?" 여러 모둠에 겹친 약속을 함께 찾는다. 활동지의 \'지킨 날\' 칸은 다음 주 모둠 활동마다 스스로 표시한다고 알린다.',
        exitTicket: [
          { type: 'choice', prompt: '친구가 무거운 책상을 혼자 옮기며 비틀거려요. 지킬 약속은?', options: ['"도와줄까?" 묻기', '잘된 점 말하기', '역할 바꾸기'], answer: 0, difficulty: 0.1, explain: '힘들어하는 친구를 보면 먼저 "도와줄까?" 하고 물어요.' },
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '모둠 약속', basket: '좋은 약속', cards: ['맡은 일을 끝까지 하기', '친구 말 끊고 내 말만 하기', '친구 말을 끝까지 듣기'] }, prompt: '모둠 약속으로 좋은 것만 골라 보세요.', target: { pick: ['맡은 일을 끝까지 하기', '친구 말을 끝까지 듣기'] }, difficulty: 0.1 },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '우리 모둠 약속',
      items: [
        { type: 'table', prompt: '우리 모둠 약속을 쓰세요.', columns: ['', '우리 모둠 약속'], cells: [['약속 1', ''], ['약속 2', ''], ['약속 3', '']] },
        { type: 'table', prompt: '약속을 지킨 날에 ○ 하세요.', columns: ['약속', '월', '화', '수', '목', '금'], cells: [['약속 1', '', '', '', '', ''], ['약속 2', '', '', '', '', ''], ['약속 3', '', '', '', '', '']] },
        { type: 'choice', prompt: '모둠 약속으로 알맞지 않은 것에 ○ 하세요.', options: ['친구 말을 끝까지 듣기', '목소리 큰 사람이 다 정하기'], answer: '목소리 큰 사람이 다 정하기' },
        { type: 'draw', prompt: '우리 모둠 약속판을 그려 보세요.' },
      ],
      easy: {
        note: '모두가 지킬 수 있는 약속을 골라요.',
        items: [
          { type: 'choice', prompt: '좋은 약속에 ○ 하세요.', options: ['"도와줄까?" 묻기', '내 일만 하기'], answer: '"도와줄까?" 묻기' },
          { type: 'short', prompt: '내가 꼭 지킬 약속 하나를 쓰세요.' },
          { type: 'draw', prompt: '약속을 지키는 내 모습을 그려 보세요.' },
          { type: 'choice', prompt: '활동이 끝나면 할 일에 ○ 하세요.', options: ['잘된 점 말하기', '그냥 가기'], answer: '잘된 점 말하기' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고 조각 모양이 네 가지로 줄어요. 약속은 선생님이 고른 다섯 가지 가운데 세 가지를 골라요.',
      base: '나누기·잇기·차례와 약속판 꾸미기를 하고 확인을 눌러요.',
      challenge: '약속 카드가 여섯 장으로 늘고, 약속판에 짝 맞출 조각이 두 개예요. 우리 모둠만의 새 약속을 하나 지어 말해요.',
    },
    teacherNotes: '준비: 모둠마다 큰 색지 1장, 색종이, 풀, 네임펜. 자주 보이는 어려움: ① 약속을 많이 넣으려 한다 → 지킬 수 있게 세 가지만 고른다. ② 잘하는 친구만 눈에 띈다고 여긴다 → 모든 친구의 잘한 점을 찾는 약속을 권한다. ③ 약속을 만들고 잊는다 → 활동지 \'지킨 날\' 칸을 다음 주 모둠 활동 끝에 함께 표시한다.',
  }));

  lessons.push(L(48, {
    title: '사람들 단원 돌아보며 고마운 사람 마음 지도 만들기',
    objective: '이 단원에서 만난 식구·이웃·친구와 함께한 일을 떠올려 나누고, 내가 잘하게 된 점을 스스로 돌아볼 수 있다.',
    illustration: ART('a paper child in the center of a heart-shaped map, surrounded by small paper figures of family at home, neighbors in a village shop, and classmates at school, connected by dotted lines of hearts', '고마운 사람들', [
      { motif: 'house', x: 90, y: 214 }, { motif: 'tree', x: 400, y: 214 }, { motif: 'heart', x: 240, y: 84, s: 0.6 }]),
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '단원 첫 시간의 식구 얼굴 그림, 동네 분께 드린 편지 사진, 모둠 화분, 약속판을 칠판 앞에 늘어놓는다. "이 단원에서 우리는 누구누구를 만났나요?" 식구, 동네에서 일하시는 분, 움직임 놀이를 한 친구, 모둠 친구를 학생 말로 모은다. 시연 단추로 \'집\' 가지에 카드가 놓이는 모습을 보여 준다.',
        student: '이 단원에서 함께한 사람 가운데 가장 먼저 떠오르는 사람을 말해 봐요.',
        demo: { tool: 'mindmap', options: { topic: '사람들', slots: ['집에서', '동네에서'], cards: ['식구 얼굴 꾸미기', '동네 분께 하는 일 여쭤보기'], shuffle: false }, sequence: [{ sort: { '집에서': ['식구 얼굴 꾸미기'], '동네에서': ['동네 분께 하는 일 여쭤보기'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 단원에서 한 일 묶기', minutes: 11, tool: 'mindmap',
            teacher: '"이 일은 어디에서 누구와 했나요?" 카드를 읽으며 장소와 사람을 함께 떠올린다. 기억이 흐린 학생에게는 칠판 앞 자료(그림·사진)를 가리킨다. 함께 사는 방법을 고를 때 \'누가 하겠지 기다리기\'를 넣은 학생에게 "칠판 지울 사람 이야기 기억나요?"로 되묻는다.',
            task: '단원에서 한 일을 집·동네·학교로 묶고, 배운 함께 사는 방법을 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '이 단원에서 한 일을 어디에서 누구와 했는지 나누어 보세요.', toolOptions: { topic: '사람들 단원', slots: ['집에서 식구와', '동네에서 이웃과', '학교에서 친구와'], cards: ['수저 놓기 돕기', '가게 사장님께 하는 일 여쭤보기', '친구와 움직임 이어 하기', '빨래 함께 개기', '이웃 어른께 먼저 인사하기', '종이컵 탑 함께 쌓기'] },
                target: { sort: { '집에서 식구와': ['수저 놓기 돕기', '빨래 함께 개기'], '동네에서 이웃과': ['가게 사장님께 하는 일 여쭤보기', '이웃 어른께 먼저 인사하기'], '학교에서 친구와': ['친구와 움직임 이어 하기', '종이컵 탑 함께 쌓기'] } }, difficulty: 0.15,
                levels: { easy: { prompt: '이 단원에서 한 일 세 가지를 어디에서 누구와 했는지 나누어 보세요.', toolOptions: { cards: ['수저 놓기 돕기', '이웃 어른께 먼저 인사하기', '종이컵 탑 함께 쌓기'] },
                  target: { sort: { '집에서 식구와': ['수저 놓기 돕기'], '동네에서 이웃과': ['이웃 어른께 먼저 인사하기'], '학교에서 친구와': ['종이컵 탑 함께 쌓기'] } } } },
                hints: ['카드마다 그 일을 한 곳이 집인지, 동네인지, 학교인지 먼저 떠올려 보세요.', '식구와 한 일, 이웃과 한 일, 친구와 한 일이 섞여 있지 않은지 보세요.', '수저·빨래는 집, 가게 사장님·이웃 어른은 동네, 움직임·컵 탑은 학교예요.'] },
              { prompt: '만난 사람과 그분들과 함께한 일을 이어 보세요.', toolOptions: { mode: 'match', topic: '함께한 일', slots: [{ id: 's1', label: '식구' }, { id: 's2', label: '동네에서 일하시는 분' }, { id: 's3', label: '모둠 친구' }], cards: ['수저 놓고 빨래 개기', '하는 일을 여쭙고 편지 드리기', '맡을 일 나누어 화분 심기'] },
                target: { match: { s1: '수저 놓고 빨래 개기', s2: '하는 일을 여쭙고 편지 드리기', s3: '맡을 일 나누어 화분 심기' } }, difficulty: 0.1,
                hints: ['그 일을 집에서 했는지, 동네에서 했는지, 교실에서 했는지 떠올려 보세요.', '편지를 드린 분과 화분을 함께 심은 사람이 누구였는지 생각해 보세요.', '식구는 수저·빨래, 동네 분은 여쭙고 편지, 모둠 친구는 화분 심기예요.'] },
              { prompt: '이 단원에서 배운 함께 사는 방법만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '함께 사는 방법', basket: '함께 사는 방법', cards: ['먼저 인사하기', '"도와줄까?" 묻기', '역할을 바꾸어 해 보기', '"누가 하겠지" 기다리기', '내 마음대로만 정하기'] },
                target: { pick: ['먼저 인사하기', '"도와줄까?" 묻기', '역할을 바꾸어 해 보기'] }, difficulty: 0.1,
                hints: ['그렇게 하면 둘레 사람들이 기쁠지, 서운할지 떠올려 보세요.', '기다리기만 하거나 내 마음대로 하는 것은 함께 사는 방법일까요?', '인사하기, "도와줄까?" 묻기, 역할 바꾸기를 골라요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 고마운 사람 마음 지도', minutes: 10, tool: 'collage',
            teacher: '"이 단원에서 만난 사람 가운데 고마운 사람은 누구인가요? 왜 고마운가요?" 짝에게 먼저 말하게 한 뒤 화면에서 마음 지도를 만든다. 가운데 동그라미가 나, 둘레의 하트가 고마운 사람이다. 종이 활동지에도 같은 지도를 그리고 하트 옆에 이름(식구는 \'엄마\'처럼 부르는 말)을 쓴다.',
            task: '고마운 사람을 짝에게 말하고, 나를 가운데 두고 고마운 사람들로 마음 지도를 만들어요.',
            levels: COL_LV,
            items: [
              { prompt: '이 단원에서 만난 고마운 사람 한 명과 고마운 까닭을 짝에게 말한 뒤 "다 했어요"를 누르세요.', free: true, talk: true },
              { prompt: '가운데 노랑 동그라미가 나예요. 둘레에 고마운 사람을 하트 조각으로 세 개 넘게 붙여 마음 지도를 만들어 보세요.', state: { pieces: [{ shape: 'circle', color: '노랑', size: 'l', x: 280, y: 200, r: 0 }] }, target: { has: [{ shape: 'heart', min: 3 }] }, difficulty: 0.1,
                levels: { challenge: { prompt: '가운데 노랑 동그라미가 나예요. 식구는 빨강, 이웃은 주황, 친구는 분홍 하트로 하나 넘게씩 붙여 마음 지도를 만들어 보세요.', target: { has: [{ shape: 'heart', color: '빨강', min: 1 }, { shape: 'heart', color: '주황', min: 1 }, { shape: 'heart', color: '분홍', min: 1 }] } } } },
              { prompt: '마음 지도를 다 만든 뒤, 해낸 것을 표시해 보세요.', state: { pieces: [{ shape: 'circle', color: '노랑', size: 'l', x: 280, y: 200, r: 0 }] }, target: { selfCheck: ['고마운 사람을 세 명 넘게 떠올렸어요', '짝에게 고마운 까닭을 말했어요', '마음 지도에 하트를 붙였어요'], minPieces: 3 }, difficulty: 0.05 },
            ],
          },
          {
            id: 'a3', title: '활동 3. 나를 돌아보기', minutes: 6, tool: 'emotion',
            teacher: '"이제 나를 돌아봐요. 정답은 없어요. 지금 내 모습 그대로 골라요." 교사는 고른 칸을 보며 칭찬하거나 나무라지 않는다. \'조금\'을 고른 학생에게는 "앞으로 해 볼 일이 생겼네요"라고 말해 준다.',
            task: '이 단원에서 배운 일을 내가 얼마나 하게 되었는지 솔직하게 골라요.',
            levels: CARD_LV,
            items: [
              { prompt: '식구를 돕거나 이웃에게 먼저 인사하는 일을 얼마나 하게 되었는지 솔직하게 골라 보세요. 정답은 없어요.', toolOptions: { mode: 'scale', steps: 3, situation: '집에서 식구를 돕고, 이웃에게 먼저 인사해요.', feeling: '기쁨', ask: '나는 얼마나 하게 되었나요?', scaleLabels: { 1: '조금', 3: '자주' } }, target: { level: 'any' }, difficulty: 0.05, hints: ['지금 내 모습을 떠올려 보고, 가장 가까운 눈금 하나를 눌러요. 어느 눈금이든 괜찮아요.', '아직 고르지 않았다면 눈금 하나를 눌러요. 잘하고 못하고를 재는 것이 아니에요.', '눈금 가운데 하나를 고르면 돼요. 고른 눈금이 지금의 내 모습이에요.'] },
              { prompt: '모둠에서 먼저 손 들고 일을 맡는 것을 얼마나 하게 되었는지 솔직하게 골라 보세요. 정답은 없어요.', toolOptions: { mode: 'scale', steps: 3, situation: '모둠 일을 살펴보고 "내가 할게" 하고 손을 들어요.', feeling: '신남', ask: '나는 얼마나 하게 되었나요?', scaleLabels: { 1: '조금', 3: '자주' } }, target: { level: 'any' }, difficulty: 0.05, hints: ['지금 내 모습을 떠올려 보고, 가장 가까운 눈금 하나를 눌러요. 어느 눈금이든 괜찮아요.', '아직 고르지 않았다면 눈금 하나를 눌러요. 잘하고 못하고를 재는 것이 아니에요.', '눈금 가운데 하나를 고르면 돼요. 고른 눈금이 지금의 내 모습이에요.'] },
              { prompt: '힘들어하는 친구에게 "도와줄까?" 묻는 것을 얼마나 하게 되었는지 솔직하게 골라 보세요. 정답은 없어요.', toolOptions: { mode: 'scale', steps: 3, situation: '힘들어하는 친구에게 다가가 "도와줄까?" 하고 물어요.', feeling: '뿌듯함', ask: '나는 얼마나 하게 되었나요?', scaleLabels: { 1: '조금', 3: '자주' } }, target: { level: 'any' }, difficulty: 0.05, hints: ['지금 내 모습을 떠올려 보고, 가장 가까운 눈금 하나를 눌러요. 어느 눈금이든 괜찮아요.', '아직 고르지 않았다면 눈금 하나를 눌러요. 잘하고 못하고를 재는 것이 아니에요.', '눈금 가운데 하나를 고르면 돼요. 고른 눈금이 지금의 내 모습이에요.'] },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '마음 지도를 교실 뒤에 붙인다. "이 단원을 마치며 앞으로도 꼭 이어서 하고 싶은 일 하나를 말해 볼까요?" 두세 명의 말을 듣는다. 스스로 돌아보기에서 \'조금\'을 고른 것은 부끄러운 일이 아니라 다음에 해 볼 일이라고 말해 준다.',
        exitTicket: [
          { type: 'choice', prompt: '새로 이사 온 이웃을 승강기에서 만났어요. 알맞은 것은?', options: ['먼저 "안녕하세요" 인사해요', '모른 척해요', '빤히 쳐다봐요'], answer: 0, difficulty: 0.1, explain: '먼저 인사하면 이웃과 가까워질 수 있어요.' },
          { type: 'tool', tool: 'mindmap', options: { topic: '함께하는 일', slots: ['집에서 식구와', '학교에서 친구와'], cards: ['동생과 장난감 함께 정리하기', '짝과 번갈아 칠판 지우기'] }, prompt: '함께하는 일을 어디에서 누구와 하는지 나누어 보세요.', target: { sort: { '집에서 식구와': ['동생과 장난감 함께 정리하기'], '학교에서 친구와': ['짝과 번갈아 칠판 지우기'] } }, difficulty: 0.1 },
          MOOD,
        ],
      },
    ],
    worksheet: {
      title: '사람들 단원 돌아보기',
      items: [
        { type: 'table', prompt: '만난 사람과 함께한 일을 쓰세요.', columns: ['만난 사람', '함께한 일'], cells: [['식구', ''], ['동네 이웃', ''], ['친구', '']] },
        { type: 'check', prompt: '이 단원에서 해 본 일에 ✓ 하세요.', options: ['식구 돕기', '이웃에게 먼저 인사하기', '"도와줄까?" 묻기', '역할 바꾸어 해 보기'] },
        { type: 'short', prompt: '가장 고마운 사람과 그 까닭을 쓰세요.' },
        { type: 'draw', prompt: '나를 가운데 두고 고마운 사람들을 그려 마음 지도를 만드세요.' },
      ],
      easy: {
        note: '이 단원에서 만난 사람들을 떠올려요.',
        items: [
          { type: 'choice', prompt: '집에서 함께한 사람에 ○ 하세요.', options: ['식구', '가게 사장님'], answer: '식구' },
          { type: 'choice', prompt: '함께 사는 방법에 ○ 하세요.', options: ['먼저 인사하기', '모른 척하기'], answer: '먼저 인사하기' },
          { type: 'short', prompt: '고마운 사람 한 명을 쓰세요.' },
          { type: 'draw', prompt: '고마운 사람을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '나누기 카드가 세 장으로 줄고 맞는 칸에 초록 테두리가 생겨요. 조각 모양도 네 가지로 줄어요.',
      base: '나누기·잇기·고르기, 마음 지도와 스스로 돌아보기를 하고 확인을 눌러요.',
      challenge: '마음 지도에 식구·이웃·친구를 색으로 나누어 붙여요. 앞으로 내가 이어서 할 일 하나를 정해 짝에게 말해요.',
    },
    teacherNotes: '준비: 단원 동안 만든 자료(식구 얼굴 그림, 편지 사진, 모둠 화분, 약속판). 자주 보이는 어려움: ① 단원 앞부분 일을 잊었다 → 자료를 보며 떠올리게 한다. ② 고마운 사람을 식구로만 쓴다 → 동네 분과 친구도 떠올리게 묻는다. ③ 스스로 돌아보기에서 모두 \'자주\'를 고른다 → 정답이 없는 활동이라고 다시 알려 주고, 고른 칸을 평가하지 않는다. 마음 지도에는 친구 실명 대신 부르는 말이나 그림을 써도 된다.',
  }));

  // @@NEXT@@
  // ── 차시 끝 ──

  PaperLessons.registerUnit({
    id: 'g1-int-1-02', schema: 'edu-unit.v1', catalogUnit: UNIT,
    grade: 1, subject: '통합교과', unitTitle: TITLE,
    flow: '1~4차시는 우리 집 식구를 꾸며 소개하고 여러 집 이야기를 견주어, 가족의 모습이 집마다 다르다는 것과 식구·이웃의 마음을 읽는 법을 익힙니다. 5~12차시는 집에서 할 수 있는 도움을 골라 실제로 하고 고마움을 편지로 전한 뒤, 도운 뒤 식구의 표정을 돌아보고 다음 도움을 정해 습관으로 잇습니다. 13~24차시는 오가며 만나는 사람들에게 물을 물음을 만들고, 묻고 들은 답을 그림과 낱말로 적어 되풀이되는 말을 찾은 뒤, 모은 이야기를 묶어 함께 사는 모습을 말하고 고마운 분께 마음을 전합니다. 25~36차시는 배운 움직임의 이름을 떠올려 두세 가지를 잇는 방법을 짝과 정하고, 모둠에서 차례를 지켜 이어 한 뒤 함께 움직이며 좋았던 점과 다음에 넣을 움직임을 돌아봅니다. 37~48차시는 혼자 할 때와 함께 할 때를 견주고, 모둠에서 맡을 일을 스스로 골라 힘들어하는 친구를 도우며, 잘된 점을 찾고 역할을 바꾸어 다시 해 본 뒤 마지막 시간에 단원 전체를 스스로 돌아봅니다.',
    refs: {},
    lessons: lessons,
  });
})();
