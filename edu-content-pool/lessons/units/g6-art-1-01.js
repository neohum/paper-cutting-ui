/* 6학년 1학기 미술 1. 미적 체험 — 둘레와 주고받으며 새 뜻 찾기(1~12차시), 이미지의 뜻을 따져 읽고 다시 만들기(13~23차시).
 * 미술 사실로는 클로드 모네가 같은 루앙 대성당을 빛이 다른 때마다 여러 점 그린 연작(4차시)과
 * 옛 민화에서 까치와 호랑이를 함께 그린 그림이 흔히 읽히던 뜻(16차시)만 이름으로 말한다. 작품 이미지는 싣지 않는다.
 * 같은 꼴이 되풀이되는 칸(차시 머리·그림 문장 틀·카드 문항)만 아래 도우미로 만들고, 차시 내용은 모두 그대로 적는다.
 */
(function () {
  'use strict';
  const UNIT = 'g6-미술-1학기-1';
  const TITLE = '1. 미적 체험';
  const S3 = '[6미01-03]';
  const S4 = '[6미01-04]';
  const art = (what) => `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`;
  const scene = (layers) => ({ viewBox: [480, 270], layers });
  const lesson = (n, body) => Object.assign({
    id: `g6-art-1-01-${String(n).padStart(2, '0')}`, schema: 'edu-lesson.v1',
    catalog: { unit: UNIT, lesson: n }, grade: 6, subject: '미술', unitTitle: TITLE,
    standards: [n <= 12 ? S3 : S4], minutes: 40, formats: ['chromebook', 'projector', 'print'],
  }, body);
  // 도입(7분)·전개(25분)·정리(8분) 뼈대
  const stages = (intro, activities, wrapTeacher, exitTicket) => [
    { id: 'intro', title: '도입', minutes: 7, teacher: intro.teacher, student: intro.student, demo: intro.demo },
    { id: 'main', title: '전개', minutes: 25, activities },
    { id: 'wrapup', title: '정리', minutes: 8, teacher: wrapTeacher, exitTicket },
  ];
  const cardsOf = (a) => a.map(([id, text]) => ({ id, text }));
  const slotsOf = (a) => a.map(([id, label]) => ({ id, label }));
  // 카드 판(mindmap) 문항: 도전 단계에는 어느 칸에도 들어가지 않는 카드 하나가 더 섞인다
  const mm = (o) => {
    const toolOptions = { topic: o.topic, cards: cardsOf(o.cards) };
    if (o.slots) toolOptions.slots = slotsOf(o.slots);
    if (o.mode) toolOptions.mode = o.mode;
    if (o.basket) toolOptions.basket = o.basket;
    const it = { prompt: o.p, toolOptions, target: o.target, difficulty: o.d };
    if (o.extra) it.levels = { challenge: { toolOptions: { cards: cardsOf(o.cards.concat([o.extra])) } } };
    if (o.hints) it.hints = o.hints;
    if (o.predict) it.predict = o.predict;
    if (o.conclude) it.conclude = o.conclude;
    return it;
  };
  const exMm = (o) => {
    const it = mm(o);
    const out = { type: 'tool', tool: 'mindmap', options: it.toolOptions, prompt: o.p, target: o.target, difficulty: o.d };
    return out;
  };
  // 이야기 순서(story) 문항: 카드 수만큼 칸이 생긴다
  const st = (o) => {
    const it = { prompt: o.p, toolOptions: { slots: o.slots || ['처음', '가운데', '끝'], cards: cardsOf(o.cards) }, target: { order: o.order }, difficulty: o.d };
    if (o.hints) it.hints = o.hints;
    if (o.predict) it.predict = o.predict;
    if (o.conclude) it.conclude = o.conclude;
    return it;
  };
  // 짝 활동(말하기·실물) 문항: 화면에는 할 일을 떠올리게 하는 낱말 판만 보이고, 하고 나서 '다 했어요'를 누른다
  const talk = (prompt, topic, labels, words) => ({
    prompt, free: true, talk: true, difficulty: 0,
    toolOptions: { topic, slots: labels.map((label, i) => ({ id: `k${i + 1}`, label })), cards: words.map((text, i) => ({ id: `w${i + 1}`, text })) },
  });
  const lessons = [];

  // ───────────── 1차시 (도입) ─────────────
  lessons.push(lesson(1, {
    title: '교실 물건에 새 이름을 붙이고 까닭 말하기',
    objective: '익숙한 교실 물건에 모양·하는 일·느낌에서 찾은 새 이름을 붙이고, 그렇게 부른 까닭을 말할 수 있다.',
    illustration: {
      prompt: art('a child holding open scissors that look like a crocodile mouth, with a pencil case shaped like a hippo on a classroom desk'),
      scene: scene([
        { motif: 'sun', x: 408, y: 58, s: 0.8 }, { motif: 'cloud', x: 110, y: 52 }, { motif: 'hills', y: 208 },
        { motif: 'flower', x: 90, y: 220, s: 1.1 }, { motif: 'leaf', x: 380, y: 204, r: 20 },
        { motif: 'text', x: 240, y: 140, text: '물건에 새 이름을 붙여요', size: 22 },
      ]),
    },
    stages: stages({
      teacher: '"이 물건 이름은 가위예요. 오늘만 다른 이름을 붙여 준다면 뭐라고 부르고 싶나요?" 두세 명이 말한 이름(악어 입, 입 벌린 새)을 칠판에 적고 "왜 그 이름이에요?"라고 이어 묻는다. "이름은 처음부터 정해진 거라 바꾸면 틀려요"라고 하는 학생에게는 가위라는 이름도 누군가 붙인 것이라고 짚는다. 시연 단추로 물건의 모습이 어울리는 새 이름에 이어지는 장면을 보여 준다.',
      student: '손에 든 물건 하나를 다른 이름으로 불러 보고, 왜 그렇게 불렀는지 말해 봅시다.',
      demo: { tool: 'mindmap', options: { mode: 'match', topic: '가위의 새 이름', slots: [{ id: 'd1', label: '두 날이 엇갈려 열렸다 닫혀요' }], cards: [{ id: 'dn1', text: '악어 입' }, { id: 'dn2', text: '구름 한 조각' }] }, sequence: [{ match: { d1: 'dn1' } }] },
    }, [
      {
        id: 'a1', title: '활동 1. 물건과 어울리는 새 이름 찾기', minutes: 12, tool: 'mindmap',
        teacher: '"이 이름은 물건의 어디를 닮았을까요? 모습 말에서 닮은 낱말에 밑줄을 그어 보세요." 모양·하는 일·느낌 가운데 어디서 이름이 나왔는지 갈라 말하게 한다. 까닭 없이 아무 숫자나 붙인 이름은 새 뜻을 담지 못한다고 짚는다. 도전 단계의 어울리지 않는 카드는 모습과 닮은 데가 없어 이어지지 않는다.',
        task: '물건의 모습 말과 닮은 데가 있는 새 이름을 이어요.',
        levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          mm({ p: '교실 물건의 모습과 닮은 새 이름을 이어 보세요.', mode: 'match', topic: '교실 물건 새 이름',
            slots: [['s1', '두 날이 엇갈려 열렸다 닫혀요'], ['s2', '펼치면 둥글고 접으면 길쭉해요'], ['s3', '쓸수록 모서리가 닳아 둥글어져요']],
            cards: [['n1', '악어 입'], ['n2', '접히는 버섯'], ['n3', '녹아내리는 얼음'], ['n4', '종이 비행기']], extra: ['n5', '구름 한 조각'],
            target: { match: { s1: 'n1', s2: 'n2', s3: 'n3' } }, d: 0.2,
            hints: ['물건의 모습 말과 새 이름이 닮은 데가 있는지 하나씩 견주어 봐요.'] }),
          mm({ p: '필통을 "하마"라고 부른 까닭을 알맞은 칸에 나누어 넣어 보세요.', topic: '필통 → 하마',
            slots: [['sh', '모양을 닮아서'], ['us', '하는 일을 닮아서'], ['fe', '주는 느낌이 비슷해서']],
            cards: [['r1', '지퍼가 입처럼 쩍 벌어져요'], ['r2', '연필을 꿀꺽 삼켜 품어 줘요'], ['r3', '통통하고 둥글둥글해요'], ['r4', '열 때마다 든든한 기분이에요'], ['r5', '필통은 문구점에서 팔아요']],
            extra: ['r6', '필통은 사천 원이에요'],
            target: { sort: { sh: ['r1', 'r3'], us: ['r2'], fe: ['r4'] } }, d: 0.25,
            hints: ['눈에 보이는 생김새인지, 물건이 하는 일인지, 마음에 드는 느낌인지 카드 말을 다시 읽어요.'],
            predict: { q: '같은 필통에 붙일 수 있는 새 이름은 하나뿐일까요?', options: ['하나뿐이에요', '여러 개 붙일 수 있어요'], answer: 1 },
            conclude: '보는 사람이 모양·하는 일·느낌 가운데 무엇을 살폈느냐에 따라 새 이름은 여러 가지가 될 수 있어요.' }),
          mm({ p: '우산에 붙인 새 이름 가운데, 까닭을 댈 수 있는 이름만 모두 고르세요.', mode: 'pick', topic: '우산의 새 이름', basket: '까닭이 있는 이름',
            cards: [['p1', '접히는 하늘 지붕'], ['p2', '비를 막는 둥근 방패'], ['p3', '그냥 아무 이름'], ['p4', '손잡이 달린 꽃']],
            extra: ['p5', '삼백이십일 번'],
            target: { pick: ['p1', 'p2', 'p4'] }, d: 0.3,
            hints: ['"왜 그렇게 불러?"라는 물음에 우산의 모습이나 쓰임으로 답할 수 있는지 따져 봐요.'] }),
        ],
      },
      {
        id: 'a2', title: '활동 2. 새 이름이 보이도록 색종이로 만들기', minutes: 13, tool: 'collage',
        teacher: '"이 이름을 듣고 사람들이 바로 떠올릴 모양은 뭘까요?" 구름 의자는 푹신해 보이게 크고 둥근 조각이 아래에 깔리는지 본다. 이름과 만든 모양이 어긋나면 까닭을 묻고 고치게 한다. 마지막 문항은 짝에게 이름과 까닭을 먼저 말한 뒤에 점검을 표시한다.',
        task: '새 이름이 떠오르도록 조각을 골라 붙이고, 끌어서 옮겨요.',
        levels: { easy: { shapes: ['circle', 'semi', 'rect'], colors: ['하양', '분홍', '빨강', '갈색'] }, base: { shapes: ['circle', 'semi', 'rect', 'triangle', 'star'], colors: ['하양', '분홍', '빨강', '갈색', '노랑', '파랑'] }, challenge: {} },
        items: [
          { prompt: '"구름 의자"를 만들어요. 큰 하양 동그라미 하나 위에 작은 분홍 동그라미 두 개를 겹쳐 붙여요.', target: { has: [{ shape: 'circle', color: '하양', size: 'l', n: 1 }, { shape: 'circle', color: '분홍', size: 's', n: 2 }], overlap: 2 }, difficulty: 0.2 },
          { prompt: '"접히는 버섯" 우산을 만들어요. 큰 빨강 반원 하나와 갈색 긴 네모 하나를 겹쳐 붙여요.', target: { has: [{ shape: 'semi', color: '빨강', size: 'l', n: 1 }, { shape: 'rect', color: '갈색', n: 1 }], overlap: 1 }, difficulty: 0.25 },
          { prompt: '내가 고른 교실 물건에 새 이름을 붙여 조각으로 나타내고 점검해요.', target: { selfCheck: ['새 이름을 하나 정했어요', '모양·하는 일·느낌 가운데 이름의 까닭을 말할 수 있어요', '짝에게 이름과 까닭을 말했어요'], minPieces: 3 }, difficulty: 0.1 },
        ],
      },
    ], '"처음에 부르던 이름과 새 이름은 무엇이 달라졌나요?" 새 이름 옆에 붙인 까닭 낱말(모양·일·느낌)을 칠판에 같이 적는다. 출구 1번에서 "이유 없는 이름도 이름이다"라고 답한 학생에게는 짝이 그 이름을 들었을 때 무엇을 떠올릴지 물어, 까닭이 있어야 뜻이 전해진다고 짚는다.', [
      exMm({ p: '지우개에 붙인 새 이름과 까닭을 이어 보세요.', mode: 'match', topic: '지우개의 새 이름',
        slots: [['e1', '지울수록 점점 작아져요'], ['e2', '네모나고 하얗고 폭신해요']], cards: [['x1', '작아지는 눈사람'], ['x2', '하얀 두부'], ['x3', '반짝이는 별']],
        target: { match: { e1: 'x1', e2: 'x2' } }, d: 0.15 }),
      { type: 'choice', prompt: '"가위는 처음부터 가위라서 다른 이름은 틀려."라는 말에 대한 생각으로 알맞은 것은?', options: ['맞아요. 이름은 바꿀 수 없어요.', '이름은 사람이 붙인 것이라 닮은 점을 찾아 새로 붙일 수 있어요.', '새 이름은 까닭 없이 붙여도 돼요.'], answer: 1, difficulty: 0.15, explain: '새 이름은 모양·하는 일·느낌에서 찾은 까닭이 있을 때 다른 사람에게도 뜻이 전해져요.' },
      { type: 'mood', prompt: '익숙한 물건에 새 이름을 붙여 보니 어땠나요?' },
    ]),
    worksheet: {
      title: '물건에 새 이름 붙이기',
      items: [
        { type: 'table', prompt: '교실 물건 두 가지에 새 이름을 붙이고, 까닭을 모양·일·느낌 가운데 하나로 쓰세요.', columns: ['물건', '새 이름', '붙인 까닭'], cells: [['가위', '악어 입', '두 날이 입처럼 벌어져서(모양)'], ['', '', ''], ['', '', '']] },
        { type: 'figure', wide: true, prompt: '둥근 조각 위에 작은 조각을 더 그려 "구름 의자"를 완성하세요.', tool: 'collage', options: { printColors: false }, figures: [{ state: { pieces: [{ shape: 'circle', color: '하양', size: 'l', x: 280, y: 220, r: 0 }, { shape: 'circle', color: '분홍', size: 's', x: 240, y: 200, r: 0 }] }, caption: '구름 의자 (하양 큰 동그라미 위에 분홍 작은 동그라미)' }], answer: '작은 분홍 동그라미 하나를 더 겹쳐 그린다' },
        { type: 'choice', prompt: '"풀 뚜껑을 닫힌 조개라고 불렀다"에서 새 이름의 까닭은 무엇인가요?', options: ['모양이 닮아서', '값이 싸서', '문구점에서 팔아서', '색이 하얘서'], answer: '모양이 닮아서' },
        { type: 'short', prompt: '오늘 붙인 새 이름 하나와 그 까닭을 한 문장으로 쓰세요.' },
      ],
      easy: {
        note: '새 이름의 까닭은 물건의 생김새(모양), 하는 일, 주는 느낌 가운데에서 찾아요.',
        items: [
          { type: 'table', prompt: '물건에 새 이름을 붙이고 까닭을 쓰세요.', columns: ['물건', '새 이름', '까닭'], cells: [['', '', '']] },
          { type: 'choice', prompt: '까닭이 있는 새 이름에 ○ 하세요.', options: ['둥글고 폭신해서 구름 의자', '아무 이유 없이 사백 번'], answer: '둥글고 폭신해서 구름 의자' },
          { type: 'draw', prompt: '새 이름이 떠오르도록 물건을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 알맞은 자리에 놓으면 바로 표시돼요. 색종이 고르개는 모양 세 가지, 색 네 가지예요.',
      base: '스스로 나누고 이은 뒤 확인해요. 고르개는 모양 다섯 가지, 색 여섯 가지예요.',
      challenge: '이어지지 않는 카드가 하나씩 더 섞여 있어요. 색종이는 모든 모양·색 가운데 골라 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 물건 이름은 처음부터 정해져 있어 바꾸면 틀렸다고 여긴다 → 이름은 사람이 붙인 것임을 가위·필통 사례로 보여 준다. ② 까닭 없이 재미로 이름만 붙인다 → "왜 그렇게 불러?"에 모양·일·느낌 가운데 하나로 답하게 한다. ③ 이름과 만든 모양이 어긋난다 → 이름을 들은 짝이 무엇을 떠올릴지 묻는다. 준비물: 가위·필통·우산·지우개 같은 교실 물건.',
  }));

  // ───────────── 2차시 (연습) ─────────────
  lessons.push(lesson(2, {
    title: '같은 나무가 아침과 낮에 어떻게 달라 보이는지 나누기',
    objective: '같은 대상도 보는 때에 따라 빛·그림자·색이 다르게 보이는 점을 가려내고, 따뜻한 색과 차가운 색으로 두 때의 분위기를 나타낼 수 있다.',
    illustration: {
      prompt: art('the same ginkgo tree in a schoolyard shown in the soft orange morning and the bright blue noon side by side'),
      scene: scene([
        { motif: 'sun', x: 90, y: 62, s: 0.8, color: 'peach' }, { motif: 'sun', x: 390, y: 52, s: 0.7 }, { motif: 'hills', y: 208 },
        { motif: 'tree', x: 130, y: 218, s: 1.2 }, { motif: 'tree', x: 350, y: 218, s: 1.2 },
        { motif: 'text', x: 240, y: 140, text: '아침의 나무, 낮의 나무', size: 22 },
      ]),
    },
    stages: stages({
      teacher: '운동장 나무를 아침에 찍은 사진과 한낮에 찍은 사진으로 나란히 띄운다(없으면 칠판에 두 그림). "같은 나무인데 무엇이 달라졌나요?" 그림자 길이, 잎의 색, 빛이 들어오는 쪽을 말하게 한다. "나무는 하나니까 늘 똑같이 보여요"라는 생각을 짚고, 오늘은 때가 달라지면 보이는 것도 달라지는지 찾는다고 연다. 시연 단추로 아침·낮 카드가 두 칸에 나뉘는 모습을 보여 준다.',
      student: '같은 나무가 아침과 낮에 어떻게 다른지 눈에 띄는 점 하나를 말해 봅시다.',
      demo: { tool: 'mindmap', options: { topic: '은행나무', slots: [{ id: 'am', label: '아침' }, { id: 'nn', label: '낮' }], cards: [{ id: 'd1', text: '그림자가 길게 누워요' }, { id: 'd2', text: '그림자가 발밑에 짧아요' }] }, sequence: [{ sort: { am: ['d1'], nn: ['d2'] } }] },
    }, [
      {
        id: 'a1', title: '활동 1. 아침 모습과 낮 모습 나누기', minutes: 12, tool: 'mindmap',
        teacher: '"그림자가 길다는 말은 해가 낮을 때일까요, 높을 때일까요?" 해가 낮게 있는 아침·저녁에 그림자가 길어진다고 먼저 말로 세운다. 색 카드는 "금빛·붉은 기운"이면 해가 낮은 때, "또렷하고 진한 색"이면 해가 높은 때로 가른다. 도전 단계의 "나무는 은행나무예요" 같은 카드는 때와 상관없는 사실이라 어느 칸에도 넣지 않는다.',
        task: '카드를 읽고 아침에 보이는 모습인지 낮에 보이는 모습인지 나누어요.',
        levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          mm({ p: '교문 앞 은행나무 카드를 아침 칸과 낮 칸에 나누어 넣어 보세요.', topic: '교문 앞 은행나무',
            slots: [['am', '아침 해가 낮을 때'], ['nn', '한낮 해가 높을 때']],
            cards: [['a1', '그림자가 길게 누워요'], ['a2', '잎 가장자리가 금빛으로 물들어요'], ['a3', '그림자가 발밑에 모여요'], ['a4', '잎 색이 진하고 또렷해요']], extra: ['a5', '이 나무는 은행나무예요'],
            target: { sort: { am: ['a1', 'a2'], nn: ['a3', 'a4'] } }, d: 0.2,
            hints: ['해가 낮게 비스듬히 비치는지, 머리 위에서 곧게 비치는지 상상하며 카드를 읽어요.'] }),
          mm({ p: '급식실 창가 책상 카드를 때에 맞는 칸에 나누어 넣어 보세요.', topic: '급식실 창가 책상',
            slots: [['am', '아침'], ['nn', '낮']],
            cards: [['b1', '빛이 책상 위를 비스듬히 길게 지나가요'], ['b2', '책상 위가 하얗게 밝아 눈이 부셔요'], ['b3', '식판 그림자가 길어요'], ['b4', '식판 그림자가 짧고 진해요'], ['b5', '창틀 그림자가 바닥 멀리 늘어나요']], extra: ['b6', '책상은 나무로 만들었어요'],
            target: { sort: { am: ['b1', 'b3', 'b5'], nn: ['b2', 'b4'] } }, d: 0.25,
            hints: ['"길게·비스듬히"는 해가 낮은 때, "하얗게·짧고 진한"은 해가 높은 때의 말이에요.'],
            predict: { q: '같은 책상인데 시간이 바뀌면 느낌도 달라질까요?', options: ['달라지지 않아요', '조금 달라져요', '많이 달라져요'], answer: 2 },
            conclude: '같은 물건도 빛이 오는 때가 달라지면 그림자·밝기·분위기가 달라 보여요.' }),
          mm({ p: '운동장 철봉 카드를 아침과 낮으로 나누어 넣어 보세요.', topic: '운동장 철봉',
            slots: [['am', '아침'], ['nn', '낮']],
            cards: [['c1', '이슬이 맺혀 쇠가 촉촉해 보여요'], ['c2', '쇠 막대가 햇빛에 하얗게 번쩍여요'], ['c3', '그림자가 운동장을 가로로 길게 건너요'], ['c4', '그림자가 막대 바로 아래에 가늘어요']], extra: ['c5', '철봉은 쇠로 만들어요'],
            target: { sort: { am: ['c1', 'c3'], nn: ['c2', 'c4'] } }, d: 0.3 }),
        ],
      },
      {
        id: 'a2', title: '활동 2. 아침과 낮의 분위기를 색으로 나타내기', minutes: 13, tool: 'collage',
        teacher: '"아침 햇빛은 어떤 색에 가까웠나요?" 따뜻한 색(주황·노랑)과 차가운 색(파랑·초록)이 맞닿으면 두 때의 분위기가 한 장에 놓인다고 말한다. 따뜻한 색만 여러 개 붙이고 차가운 색을 빠뜨린 학생에게는 낮의 하늘을 어떤 색으로 보았는지 되묻는다.',
        task: '따뜻한 색 조각과 차가운 색 조각을 붙여 아침과 낮의 분위기를 나타내요.',
        levels: { easy: { shapes: ['circle', 'semi', 'leaf'], colors: ['주황', '노랑', '파랑', '초록'] }, base: { shapes: ['circle', 'semi', 'leaf', 'triangle', 'star'], colors: ['주황', '노랑', '파랑', '초록', '분홍', '보라'] }, challenge: {} },
        items: [
          { prompt: '아침 해와 낮 하늘을 맞닿게 만들어요. 큰 주황 반원 하나와 큰 파랑 반원 하나를 서로 맞닿게 붙여요.', target: { has: [{ shape: 'semi', color: '주황', size: 'l', n: 1 }, { shape: 'semi', color: '파랑', size: 'l', n: 1 }], contrast: 'warm-cool' }, difficulty: 0.2 },
          { prompt: '따뜻한 색 나뭇잎과 차가운 색 나뭇잎을 맞닿게 붙여요. 노랑 나뭇잎 둘, 초록 나뭇잎 둘이에요.', target: { has: [{ shape: 'leaf', color: '노랑', n: 2 }, { shape: 'leaf', color: '초록', n: 2 }], contrast: 'warm-cool' }, difficulty: 0.25 },
          { prompt: '내가 본 나무의 아침 또는 낮 한 장면을 조각으로 나타내고 점검해요.', target: { selfCheck: ['아침이나 낮 가운데 한 때를 정했어요', '그 때의 빛이 느껴지는 색을 골랐어요', '짝에게 어느 때인지 말했어요'], minPieces: 4 }, difficulty: 0.1 },
        ],
      },
    ], '"같은 나무가 아침과 낮에 달랐던 점을 하나 말해 볼까요?" 두세 명이 그림자·색·분위기 가운데 무엇이 달랐는지 말하게 한다. 출구 2번에서 "나무는 변하지 않으니 늘 같아요"를 고른 학생에게는 활동 1에서 같은 철봉이 두 칸에 다 들어갔던 일을 떠올리게 한다.', [
      exMm({ p: '교정 벤치 카드를 아침과 낮으로 나누어 넣어 보세요.', topic: '교정 벤치',
        slots: [['am', '아침'], ['nn', '낮']], cards: [['e1', '그림자가 길게 늘어져요'], ['e2', '그림자가 의자 밑에 짧아요'], ['e3', '의자는 나무예요']],
        target: { sort: { am: ['e1'], nn: ['e2'] } }, d: 0.15 }),
      { type: 'choice', prompt: '같은 나무를 아침과 낮에 보면 다르게 보이는 까닭으로 알맞은 것은?', options: ['나무가 다른 나무로 바뀌어서', '빛이 오는 높이가 달라져 그림자·색이 달라져서', '보는 사람이 눈을 감아서'], answer: 1, difficulty: 0.15, explain: '해의 높이가 달라지면 그림자 길이와 빛깔이 달라 보여요.' },
      { type: 'mood', prompt: '때에 따라 달라 보이는 모습을 찾아보니 어땠나요?' },
    ]),
    worksheet: {
      title: '때에 따라 달라 보이는 나무',
      items: [
        { type: 'table', prompt: '같은 대상 하나를 골라 아침과 낮의 모습을 견주어 쓰세요.', columns: ['살핀 점', '아침 모습', '낮 모습'], cells: [['그림자', '길게 누워 있다', ''], ['색', '', ''], ['분위기', '', '']] },
        { type: 'figure', wide: true, prompt: '따뜻한 색 조각 곁에 차가운 색 조각을 더 그려 넣고, 두 색의 이름을 쓰세요.', tool: 'collage', options: { printColors: false }, figures: [{ state: { pieces: [{ shape: 'semi', color: '주황', size: 'l', x: 220, y: 200, r: 0 }, { shape: 'semi', color: '파랑', size: 'l', x: 340, y: 200, r: 180 }] }, caption: '왼쪽 주황, 오른쪽 파랑 반원' }], answer: '두 반원 곁에 파랑·초록 나뭇잎을 붙이고, 색은 주황(따뜻한 색)과 파랑(차가운 색)' },
        { type: 'choice', prompt: '"그림자가 길게 누워요"는 하루 가운데 언제의 모습에 가까운가요?', options: ['해가 낮은 아침·저녁', '해가 가장 높은 한낮', '밤'], answer: '해가 낮은 아침·저녁' },
        { type: 'short', prompt: '같은 대상이 때에 따라 달리 보였던 경험을 한 가지 쓰세요.' },
      ],
      easy: {
        note: '그림자가 길면 해가 낮은 때(아침·저녁), 짧으면 해가 높은 때(한낮)예요.',
        items: [
          { type: 'table', prompt: '아침과 낮의 그림자를 쓰세요.', columns: ['때', '그림자'], cells: [['아침', ''], ['낮', '']] },
          { type: 'choice', prompt: '그림자가 짧은 때에 ○ 하세요.', options: ['한낮', '아침'], answer: '한낮' },
          { type: 'draw', prompt: '같은 나무를 아침과 낮의 모습으로 두 번 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 맞는 칸에 놓으면 바로 표시돼요. 색종이는 따뜻한 색 둘과 차가운 색 둘만 나와요.',
      base: '스스로 나누고 붙인 뒤 확인해요. 고르개는 모양 다섯 가지, 색 여섯 가지예요.',
      challenge: '때와 상관없는 사실 카드가 하나씩 더 섞여 있어요. 색종이는 모든 모양·색 가운데 골라 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 나무는 하나라 늘 똑같이 보인다고 여긴다 → 두 사진을 나란히 띄우고 달라진 점을 세어 본다. ② 그림자 길이와 해의 높이를 거꾸로 말한다 → 손전등을 낮게·높게 비춰 그림자를 직접 만들어 보인다. ③ 두 때의 색을 모두 따뜻하게만 칠한다 → 낮 하늘을 본 색을 되묻는다. 준비물: 같은 장소의 아침·낮 사진 또는 손전등 한 개.',
  }));

  // ───────────── 3차시 (확장) ─────────────
  lessons.push(lesson(3, {
    title: '서 있는 자리를 바꾸어 같은 계단을 다르게 읽기',
    objective: '같은 대상도 아래에서 올려 보는지 위에서 내려 보는지에 따라 느낌과 뜻이 달라지는 점을 짚고, 두 자리에서 본 모습을 조각으로 나타낼 수 있다.',
    illustration: {
      prompt: art('two children looking at the same school staircase, one from the bottom and one from the top, with long paper-cut steps'),
      scene: scene([
        { motif: 'sun', x: 412, y: 56, s: 0.7 }, { motif: 'cloud', x: 100, y: 50 }, { motif: 'hills', y: 208 },
        { motif: 'house', x: 110, y: 214, s: 1.1 }, { motif: 'house', x: 340, y: 214, s: 1.1 }, { motif: 'bird', x: 250, y: 86 },
        { motif: 'text', x: 240, y: 142, text: '서 있는 자리가 달라요', size: 22 },
      ]),
    },
    stages: stages({
      teacher: '"계단 맨 아래에서 올려다보면 어떤 기분이 드나요? 맨 위에서 내려다보면요?" 두세 명이 말한 기분(높고 멀어요, 아찔해요, 작아 보여요)을 두 칸으로 나누어 적는다. "어디서 봐도 계단은 계단이라 느낌은 똑같아요"라는 생각을 짚는다. 시연 단추로 자리와 느낌 카드가 이어지는 모습을 보여 준다.',
      student: '교실에서 서 있는 자리를 바꾸어 같은 책상을 보고, 보이는 모습이 어떻게 달라지는지 말해 봅시다.',
      demo: { tool: 'mindmap', options: { mode: 'match', topic: '같은 계단', slots: [{ id: 'd1', label: '맨 아래에서 올려다볼 때' }], cards: [{ id: 'dc1', text: '높고 멀어 보여요' }, { id: 'dc2', text: '조용히 비어 있어요' }] }, sequence: [{ match: { d1: 'dc1' } }] },
    }, [
      {
        id: 'a1', title: '활동 1. 자리에 따라 달라지는 느낌 이어 보기', minutes: 12, tool: 'mindmap',
        teacher: '"위에서 보면 작아 보이는 것이 사실도 작아진 걸까요?" 자리가 달라지면 같은 대상이 크게·작게·멀게·가깝게 보인다고 짚는다. 대상의 크기나 이름은 변하지 않았음을 먼저 확인한 뒤 느낌을 이어 보게 한다. 도전 단계의 "계단은 열두 칸이에요" 같은 카드는 자리와 상관없는 사실이라 이어지지 않는다.',
        task: '서 있는 자리와 그 자리에서 보이는 모습 카드를 이어요.',
        levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          mm({ p: '학교 계단을 보는 자리와 보이는 모습 카드를 이어 보세요.', mode: 'match', topic: '학교 계단',
            slots: [['s1', '맨 아래에서 올려다볼 때'], ['s2', '맨 위에서 내려다볼 때'], ['s3', '계단 옆에서 비스듬히 볼 때']],
            cards: [['m1', '끝없이 높고 멀어 보여요'], ['m2', '발밑이 아찔하고 사람이 작아요'], ['m3', '층층이 쌓인 가로줄 무늬가 보여요'], ['m4', '계단은 열두 칸이에요']], extra: ['m5', '난간은 쇠로 되어 있어요'],
            target: { match: { s1: 'm1', s2: 'm2', s3: 'm3' } }, d: 0.2,
            hints: ['올려다보는지 내려다보는지 비스듬히 보는지 떠올리며, 카드가 말하는 느낌을 찾아요.'] }),
          mm({ p: '놀이터 미끄럼틀을 보는 자리와 보이는 모습 카드를 이어 보세요.', mode: 'match', topic: '놀이터 미끄럼틀',
            slots: [['t1', '꼭대기 위에서 내려다볼 때'], ['t2', '미끄럼틀 아래 땅에서 볼 때'], ['t3', '옆으로 멀리 떨어져 볼 때']],
            cards: [['q1', '길게 쭉 뻗은 반짝이는 길이에요'], ['q2', '하늘로 솟은 높은 탑 같아요'], ['q3', '작은 삼각형 한 조각이에요'], ['q4', '미끄럼틀은 노란색이에요']], extra: ['q5', '미끄럼틀은 쇠로 만들어요'],
            target: { match: { t1: 'q1', t2: 'q2', t3: 'q3' } }, d: 0.25,
            hints: ['가까이에서 올려다볼 때와 멀리서 한눈에 볼 때 크기가 어떻게 보이는지 견주어요.'] }),
          mm({ p: '운동장 국기 게양대를 어디서 보았을 때의 말인지 칸에 나누어 넣어 보세요.', topic: '국기 게양대',
            slots: [['lo', '발밑 가까이에서'], ['fa', '교실 창 멀리서']],
            cards: [['f1', '하늘을 찌를 듯 높아요'], ['f2', '연필처럼 가늘고 작아요'], ['f3', '고개가 아플 만큼 올려다봐요'], ['f4', '운동장 건물들과 함께 한눈에 들어와요']], extra: ['f5', '게양대는 은색이에요'],
            target: { sort: { lo: ['f1', 'f3'], fa: ['f2', 'f4'] } }, d: 0.3,
            predict: { q: '게양대의 진짜 키도 자리마다 달라질까요?', options: ['달라져요', '달라지지 않고 보이는 모습만 달라져요'], answer: 1 },
            conclude: '대상은 그대로인데, 서 있는 자리에 따라 보이는 모습과 느낌이 달라져요.' }),
        ],
      },
      {
        id: 'a2', title: '활동 2. 두 자리에서 본 모습을 크기와 겹침으로 나타내기', minutes: 13, tool: 'collage',
        teacher: '"올려다본 모습은 어느 쪽이 더 커 보였나요?" 가까운 것을 크게, 먼 것을 작게 붙이는 방법을 보여 준다. 크기를 모두 같게 붙인 학생에게는 한 사람은 가깝고 한 사람은 멀리 있다면 어떻게 보일지 묻는다. 마지막 문항은 어느 자리에서 본 모습인지 짝이 맞히게 한 뒤 점검한다.',
        task: '가까운 것은 크게, 먼 것은 작게 붙이고 겹쳐서 자리에 따른 모습을 나타내요.',
        levels: { easy: { shapes: ['circle', 'rect', 'triangle'], colors: ['갈색', '초록', '파랑', '노랑'] }, base: { shapes: ['circle', 'rect', 'triangle', 'semi', 'square'], colors: ['갈색', '초록', '파랑', '노랑', '하양', '검정'] }, challenge: {} },
        items: [
          { prompt: '올려다본 나무를 만들어요. 큰 갈색 긴 네모 줄기 하나 위에 큰 초록 동그라미 잎을 겹쳐 붙여요.', target: { has: [{ shape: 'rect', color: '갈색', size: 'l', n: 1 }, { shape: 'circle', color: '초록', size: 'l', n: 1 }], overlap: 1 }, difficulty: 0.2 },
          { prompt: '내려다본 나무를 만들어요. 작은 갈색 동그라미 하나 둘레에 작은 초록 동그라미를 세 개 이상 붙여요.', target: { has: [{ shape: 'circle', color: '갈색', size: 's', n: 1 }, { shape: 'circle', color: '초록', size: 's', min: 3 }] }, difficulty: 0.25 },
          { prompt: '한 자리를 정해 그 자리에서 본 교실 물건을 나타내고 점검해요.', target: { selfCheck: ['올려다보기·내려다보기·옆에서 보기 가운데 자리를 정했어요', '가까운 부분은 크게, 먼 부분은 작게 붙였어요', '짝이 어느 자리에서 본 모습인지 맞혔어요'], minPieces: 3 }, difficulty: 0.1 },
        ],
      },
    ], '"같은 계단인데 서 있는 자리가 달라지면 무엇이 달라졌나요?" 학생 말을 크기·느낌·뜻 세 낱말로 모아 칠판에 적는다. 출구 1번에서 "아래에서 보면 계단이 실제로 커진다"를 고른 학생에게는 줄자로 잰 키는 그대로임을 짚는다.', [
      exMm({ p: '운동장 큰 나무를 보는 자리와 보이는 모습을 이어 보세요.', mode: 'match', topic: '운동장 큰 나무',
        slots: [['e1', '뿌리 곁에서 올려다볼 때'], ['e2', '교실 창에서 멀리서 볼 때']], cards: [['x1', '하늘을 가리는 거인 같아요'], ['x2', '작은 초록 점 같아요'], ['x3', '나무는 은행나무예요']],
        target: { match: { e1: 'x1', e2: 'x2' } }, d: 0.15 }),
      { type: 'choice', prompt: '자리를 바꾸어 보니 대상이 달라 보였어요. 알맞은 설명은?', options: ['대상의 크기가 바뀌었어요.', '대상은 그대로이고 보는 자리 때문에 느낌이 달라졌어요.', '보는 사람이 틀렸어요.'], answer: 1, difficulty: 0.15, explain: '대상은 같고, 보는 자리가 달라 보이는 모습과 느낌이 달라져요.' },
      { type: 'mood', prompt: '서 있는 자리를 바꾸어 보니 어땠나요?' },
    ]),
    worksheet: {
      title: '서 있는 자리가 바꾸는 모습',
      items: [
        { type: 'table', prompt: '같은 물건을 두 자리에서 보고 보이는 모습과 느낌을 쓰세요.', columns: ['서 있는 자리', '보이는 모습', '느낌'], cells: [['올려다볼 때', '아주 크고 높아 보인다', ''], ['내려다볼 때', '', ''], ['멀리서 볼 때', '', '']] },
        { type: 'figure', wide: true, prompt: '가까이서 본 나무 곁에 멀리서 본 작은 나무를 그려 넣으세요.', tool: 'collage', options: { printColors: false }, figures: [{ state: { pieces: [{ shape: 'rect', color: '갈색', size: 'l', x: 160, y: 240, r: 0 }, { shape: 'circle', color: '초록', size: 'l', x: 160, y: 160, r: 0 }] }, caption: '가까이서 본 큰 나무 한 그루' }], answer: '오른쪽 위쪽에 작은 줄기와 작은 잎 조각을 그린다' },
        { type: 'choice', prompt: '맨 아래에서 올려다본 계단이 높고 멀어 보이는 까닭은?', options: ['계단이 커져서', '올려다보는 자리 때문에', '친구가 알려 줘서'], answer: '올려다보는 자리 때문에' },
        { type: 'short', prompt: '자리를 바꾸어 보니 달라 보였던 것을 한 가지 쓰세요.' },
      ],
      easy: {
        note: '대상은 그대로예요. 보는 자리가 달라서 보이는 모습이 달라져요.',
        items: [
          { type: 'table', prompt: '올려다볼 때의 느낌을 쓰세요.', columns: ['자리', '느낌'], cells: [['올려다볼 때', ''], ['내려다볼 때', '']] },
          { type: 'choice', prompt: '높고 멀어 보이는 자리에 ○ 하세요.', options: ['올려다볼 때', '내려다볼 때'], answer: '올려다볼 때' },
          { type: 'draw', prompt: '올려다본 교실 물건을 크게 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 놓으면 바로 맞는지 표시돼요. 색종이는 모양 세 가지, 색 네 가지예요.',
      base: '스스로 이은 뒤 확인해요. 고르개는 모양 다섯 가지, 색 여섯 가지예요.',
      challenge: '이어지지 않는 사실 카드가 하나씩 더 섞여 있어요. 색종이는 모든 모양·색 가운데 골라 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 어디서 봐도 느낌은 같다고 여긴다 → 교실 의자 위에 올라서는 대신 바닥에 앉아 올려다보고 일어나 내려다보게 한다(의자 위에 올라서지 않는다). ② 보이는 크기와 실제 크기를 섞는다 → 줄자로 잰 키는 그대로임을 보여 준다. ③ 모든 조각을 같은 크기로 붙인다 → 가까운 것은 크게, 먼 것은 작게 붙이는 시범을 한 번 보인다. 준비물: 줄자 한 개.',
  }));

  // ───────────── 4차시 (확장) ─────────────
  lessons.push(lesson(4, {
    title: '때와 자리가 담긴 새 이름으로 고쳐 붙이기',
    objective: '때와 자리에 따라 달라 보이는 모습을 담아 처음 붙인 이름을 고쳐 붙이고, 같은 대상을 여러 번 그린 화가가 있음을 알아 새 이름의 까닭을 말할 수 있다.',
    illustration: {
      prompt: art('a paper-cut cathedral shown three times in warm dawn light, bright noon light and cool evening light'),
      scene: scene([
        { motif: 'sun', x: 90, y: 60, s: 0.7, color: 'peach' }, { motif: 'moon', x: 400, y: 56, s: 0.7 }, { motif: 'hills', y: 208 },
        { motif: 'house', x: 100, y: 214, s: 1.1 }, { motif: 'house', x: 240, y: 214, s: 1.1 }, { motif: 'house', x: 380, y: 214, s: 1.1 },
        { motif: 'text', x: 240, y: 136, text: '때마다 다른 이름', size: 22 },
      ]),
    },
    stages: stages({
      teacher: '"화가 클로드 모네는 같은 루앙 대성당을 아침, 한낮, 저녁처럼 빛이 다른 때마다 여러 점 그렸다고 해요. 그림마다 느낌이 어땠을까요?" 이름만 말하고 작품 그림은 보여 주지 않으며, 학생이 상상한 느낌을 말하게 한다. "한 번 붙인 이름은 고치면 안 돼요"라는 생각을 짚고, 때와 자리를 담아 이름을 고칠 수 있다고 연다. 시연 단추로 이름 카드가 고르는 칸에 담기는 모습을 보여 준다.',
      student: '같은 놀이터를 아침과 저녁에 부르고 싶은 이름으로 불러 봅시다.',
      demo: { tool: 'mindmap', options: { mode: 'pick', topic: '놀이터 이름', basket: '때를 담은 이름', cards: [{ id: 'd1', text: '해 질 녘 붉은 놀이터' }, { id: 'd2', text: '그냥 놀이터' }] }, sequence: [{ pick: ['d1'] }] },
    }, [
      {
        id: 'a1', title: '활동 1. 때와 자리가 담긴 이름 골라내기', minutes: 12, tool: 'mindmap',
        teacher: '"이 이름만 듣고도 언제, 어디에서 본 모습인지 떠오르나요?" 이름에 때(아침·비 온 뒤·해 질 녘)나 자리(꼭대기·창 너머·발밑)가 들어 있는지 낱말에 밑줄을 긋게 한다. "멋진 이름이면 되지"라고 하는 학생에게는 이름이 모습에서 나와야 한다고 짚는다. 도전 단계의 이름 없는 설명 카드는 이름이 아니므로 고르지 않는다.',
        task: '때와 자리가 담긴 이름만 고르고, 처음 이름을 고친 이름과 이어요.',
        levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          mm({ p: '운동장 철봉의 새 이름 가운데 때나 자리가 담긴 이름을 모두 고르세요.', mode: 'pick', topic: '운동장 철봉', basket: '때·자리가 담긴 이름',
            cards: [['p1', '이슬 맺힌 아침 쇠다리'], ['p2', '한낮에 번쩍이는 은빛 활'], ['p3', '그냥 멋진 철봉'], ['p4', '교실 창에서 보면 작은 연필']], extra: ['p5', '철봉은 쇠로 만들었어요'],
            target: { pick: ['p1', 'p2', 'p4'] }, d: 0.2,
            hints: ['이름만 들어도 언제 또는 어디서 본 모습인지 떠오르는 이름을 찾아요.'] }),
          mm({ p: '처음 붙인 이름과, 때·자리를 담아 고친 이름을 이어 보세요.', mode: 'match', topic: '이름 고쳐 붙이기',
            slots: [['s1', '처음 이름: 눈사람 (비 오는 날 본 모습)'], ['s2', '처음 이름: 꽃 (맨 위에서 내려다본 모습)'], ['s3', '처음 이름: 달 (해 질 녘 본 모습)']],
            cards: [['n1', '젖은 눈사람'], ['n2', '내려다본 동그란 꽃판'], ['n3', '노을 속 주황 달'], ['n4', '큰 풍선']], extra: ['n5', '커다란 구름'],
            target: { match: { s1: 'n1', s2: 'n2', s3: 'n3' } }, d: 0.25,
            hints: ['처음 이름 옆 괄호에 적힌 때·자리가 고친 이름 속 낱말과 이어지는지 찾아요.'] }),
          mm({ p: '새 이름이 때와 자리를 담았는지 칸에 나누어 넣어 보세요.', topic: '새 이름 점검',
            slots: [['ti', '때를 담은 이름'], ['pl', '자리를 담은 이름']],
            cards: [['k1', '이른 아침 안개 다리'], ['k2', '꼭대기에서 본 작은 마을'], ['k3', '비 온 뒤 반짝이는 길'], ['k4', '계단 아래서 올려다본 하늘 문']], extra: ['k5', '멋진 다리'],
            target: { sort: { ti: ['k1', 'k3'], pl: ['k2', 'k4'] } }, d: 0.3,
            predict: { q: '이름에 때와 자리를 담으면 읽는 사람이 더 잘 떠올릴까요?', options: ['더 잘 떠올려요', '똑같아요'], answer: 0 },
            conclude: '때와 자리가 담긴 이름은 같은 대상도 그때 그 자리의 모습으로 떠오르게 해 줘요.' }),
        ],
      },
      {
        id: 'a2', title: '활동 2. 같은 대상을 두 때의 색으로 나란히 만들기', minutes: 13, tool: 'collage',
        teacher: '"아침 이름이 붙은 조각과 저녁 이름이 붙은 조각은 색이 어떻게 달라야 할까요?" 따뜻한 색과 차가운 색, 밝은 색과 어두운 색 가운데 하나를 골라 두 모습을 다르게 만든다. 모양은 같게 하고 색만 바꾼 학생을 칭찬하며, "같은 대상으로 보이나요?"라고 짝에게 묻게 한다.',
        task: '같은 모양을 두 개 만들고, 때가 달라 보이게 색을 다르게 붙여요.',
        levels: { easy: { shapes: ['circle', 'rect', 'triangle'], colors: ['하양', '검정', '주황', '파랑'] }, base: { shapes: ['circle', 'rect', 'triangle', 'semi', 'square'], colors: ['하양', '검정', '주황', '파랑', '노랑', '보라'] }, challenge: {} },
        items: [
          { prompt: '낮과 밤의 같은 집을 나란히 만들어요. 큰 하양 세모 하나와 큰 검정 세모 하나를 서로 맞닿게 붙여요.', target: { has: [{ shape: 'triangle', color: '하양', size: 'l', n: 1 }, { shape: 'triangle', color: '검정', size: 'l', n: 1 }], contrast: 'light-dark' }, difficulty: 0.2 },
          { prompt: '아침 하늘과 저녁 하늘을 맞닿게 붙여요. 큰 주황 동그라미 하나와 큰 파랑 동그라미 하나가 맞닿아요.', target: { has: [{ shape: 'circle', color: '주황', size: 'l', n: 1 }, { shape: 'circle', color: '파랑', size: 'l', n: 1 }], contrast: 'warm-cool' }, difficulty: 0.25 },
          { prompt: '내가 고쳐 붙인 이름이 보이는 장면을 조각으로 나타내고 점검해요.', target: { selfCheck: ['고쳐 붙인 이름에 때나 자리가 들어 있어요', '그 때나 자리가 느껴지도록 색을 골랐어요', '짝이 이름을 듣고 어떤 장면인지 맞혔어요'], minPieces: 4 }, difficulty: 0.1 },
        ],
      },
    ], '"처음 붙인 이름과 고쳐 붙인 이름은 무엇이 달라졌나요?" 고친 이름에 들어간 때·자리 낱말을 칠판에 모은다. 출구 2번에서 "이름은 한 번 정하면 못 바꿔요"를 고른 학생에게는 모네가 같은 성당을 여러 번 그린 일을 다시 떠올리게 한다.', [
      exMm({ p: '고친 이름 가운데 때나 자리가 담긴 이름을 모두 고르세요.', mode: 'pick', topic: '은행나무 새 이름', basket: '때·자리가 담긴 이름',
        cards: [['e1', '노을 아래 금빛 우산'], ['e2', '창 너머 노란 점'], ['e3', '그냥 큰 나무']], target: { pick: ['e1', 'e2'] }, d: 0.15 }),
      { type: 'choice', prompt: '같은 대상을 아침과 저녁에 다른 이름으로 불러도 되는 까닭은?', options: ['이름은 아무렇게나 정하는 것이라서', '때와 자리에 따라 보이는 모습이 달라서', '이름을 바꾸면 점수를 주어서'], answer: 1, difficulty: 0.15, explain: '때와 자리가 달라지면 같은 대상도 다르게 보이므로 그 모습을 담아 이름을 고칠 수 있어요.' },
      { type: 'mood', prompt: '이름을 고쳐 붙여 보니 어땠나요?' },
    ]),
    worksheet: {
      title: '때와 자리가 담긴 이름',
      items: [
        { type: 'table', prompt: '같은 대상의 처음 이름과 때·자리를 담아 고친 이름을 쓰세요.', columns: ['대상', '처음 이름', '고친 이름(때·자리)'], cells: [['놀이터 미끄럼틀', '미끄럼틀', '해 질 녘 붉은 슬라이드'], ['', '', ''], ['', '', '']] },
        { type: 'figure', wide: true, prompt: '같은 집이 낮과 밤으로 보이도록 오른쪽 집을 어둡게 칠할 곳을 표시하세요.', tool: 'collage', options: { printColors: false }, figures: [{ state: { pieces: [{ shape: 'triangle', color: '하양', size: 'l', x: 180, y: 200, r: 0 }, { shape: 'triangle', color: '검정', size: 'l', x: 380, y: 200, r: 0 }] }, caption: '왼쪽: 낮의 집(하양), 오른쪽: 밤의 집(검정)' }], answer: '오른쪽 집을 검정으로 칠하고 달 모양을 더한다' },
        { type: 'choice', prompt: '때와 자리가 담긴 이름은 어느 것인가요?', options: ['멋진 놀이터', '비 온 뒤 반짝이는 놀이터', '놀이터 일호'], answer: '비 온 뒤 반짝이는 놀이터' },
        { type: 'short', prompt: '내가 고쳐 붙인 이름과 그 이름에 담은 때나 자리를 쓰세요.' },
      ],
      easy: {
        note: '이름에 아침·비 온 뒤·해 질 녘 같은 때, 꼭대기·창 너머 같은 자리가 들어 있으면 돼요.',
        items: [
          { type: 'table', prompt: '이름을 고쳐 쓰세요.', columns: ['처음 이름', '고친 이름'], cells: [['철봉', ''], ['', '']] },
          { type: 'choice', prompt: '때가 담긴 이름에 ○ 하세요.', options: ['이른 아침 안개 다리', '멋진 다리'], answer: '이른 아침 안개 다리' },
          { type: 'draw', prompt: '고친 이름이 떠오르는 장면을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 놓으면 바로 맞는지 표시돼요. 색종이는 모양 세 가지, 색 네 가지예요.',
      base: '스스로 고르고 이은 뒤 확인해요. 고르개는 모양 다섯 가지, 색 여섯 가지예요.',
      challenge: '이름이 아닌 설명 카드가 하나씩 더 섞여 있어요. 색종이는 모든 모양·색 가운데 골라 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 처음 붙인 이름은 고치면 안 된다고 여긴다 → 때와 자리가 달라지면 새 모습이 보이니 이름도 새로 붙일 수 있음을 모네의 연작 이야기로 보여 준다(그림은 보여 주지 않고 이름만 말한다). ② 멋진 낱말만 붙이고 까닭을 대지 못한다 → 이름에서 때·자리 낱말에 밑줄을 긋게 한다. ③ 두 모습을 모양까지 다르게 만들어 같은 대상으로 안 보인다 → 모양은 같게, 색만 바꾸게 한다.',
  }));

  // ───────────── 5차시 (핵심) ─────────────
  lessons.push(lesson(5, {
    title: '닿을 것 같지 않은 두 물건을 이어 이야기 첫 장면 만들기',
    objective: '서로 어울리지 않아 보이는 물건 둘이 만나 일이 벌어지는 문장을 가려내고, 두 물건을 한 장면에 이어 붙여 나타낼 수 있다.',
    illustration: {
      prompt: art('an umbrella giving shade to a small cactus in a desert while a paper moon hangs behind them'),
      scene: scene([
        { motif: 'moon', x: 410, y: 56, s: 0.8 }, { motif: 'star', x: 90, y: 56 }, { motif: 'hills', y: 208 },
        { motif: 'flower', x: 130, y: 220, color: 'mint', s: 1.2 }, { motif: 'leaf', x: 340, y: 206, r: 30 },
        { motif: 'text', x: 240, y: 140, text: '두 물건이 만났어요', size: 22 },
      ]),
    },
    stages: stages({
      teacher: '책상 위에 지우개와 컵을 놓고 "이 둘이 만나서 일이 벌어진다면 어떤 이야기가 될까요?" 하고 묻는다. 두세 명이 "컵이 지우개를 배에 태웠어요"처럼 말하게 하고, 이야기는 둘이 만나 무슨 일이 벌어져야 시작된다고 짚는다. "이야기 만들기는 국어 시간에만 하는 거 아니에요?"라는 학생에게는 미술에서는 그 장면을 그림으로 이어 보여 준다고 답한다. 시연 단추로 두 물건과 사건 카드가 이어지는 모습을 보여 준다.',
      student: '눈앞의 물건 두 개를 골라, 둘이 만나면 어떤 일이 벌어질지 한 문장으로 말해 봅시다.',
      demo: { tool: 'mindmap', options: { mode: 'match', topic: '두 물건 잇기', slots: [{ id: 'd1', label: '컵 + 지우개' }], cards: [{ id: 'dc1', text: '컵이 지우개를 배에 태워 강을 건넸어요' }, { id: 'dc2', text: '컵과 지우개는 책상 위에 있어요' }] }, sequence: [{ match: { d1: 'dc1' } }] },
    }, [
      {
        id: 'a1', title: '활동 1. 두 물건을 만나게 하는 사건 문장 이어 보기', minutes: 12, tool: 'mindmap',
        teacher: '"이 문장에는 두 물건이 만나서 무슨 일이 벌어지나요, 그냥 둘의 모습만 말하나요?" 사건 문장에는 "~했어요"처럼 움직임이 있고, 모습 문장은 "~예요, ~해요"로 끝난다고 짚는다. "둘 다 뾰족해요" 같은 카드는 닮은 점이지 이야기가 아니다. 도전 단계의 설명 카드는 사건이 아니므로 이어지지 않는다.',
        task: '두 물건 짝과, 그 둘이 만나 일이 벌어지는 사건 문장을 이어요.',
        levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          mm({ p: '두 물건 짝과 사건 문장을 이어 보세요.', mode: 'match', topic: '두 물건 잇기',
            slots: [['s1', '우산 + 선인장'], ['s2', '신발주머니 + 달'], ['s3', '지우개 + 구름']],
            cards: [['e1', '가문 사막에서 우산이 선인장의 그늘이 되었어요'], ['e2', '신발주머니가 달을 담아 밤길을 밝혔어요'], ['e3', '지우개가 구름을 지워 파란 하늘이 나왔어요'], ['e4', '우산과 선인장은 둘 다 뾰족해요']], extra: ['e5', '선인장은 사막에 살아요'],
            target: { match: { s1: 'e1', s2: 'e2', s3: 'e3' } }, d: 0.2,
            hints: ['두 물건이 함께 나오고, 무엇인가 해냈다는 움직임이 담긴 문장을 찾아 이어요.'] }),
          mm({ p: '두 물건 짝과 사건 문장을 이어 보세요.', mode: 'match', topic: '두 물건 잇기',
            slots: [['t1', '자전거 + 달팽이'], ['t2', '시계 + 고양이'], ['t3', '연필 + 눈사람']],
            cards: [['q1', '달팽이가 자전거 바구니에 타고 소풍을 갔어요'], ['q2', '고양이가 시계 바늘을 붙잡아 오후를 길게 늘렸어요'], ['q3', '연필이 눈사람 배에 이름을 써 주었어요'], ['q4', '자전거는 바퀴가 둘이에요']], extra: ['q5', '눈사람은 겨울에 만들어요'],
            target: { match: { t1: 'q1', t2: 'q2', t3: 'q3' } }, d: 0.25,
            hints: ['"~이에요"로 모습만 말하는 문장 말고, 두 물건이 서로 만나 움직이는 문장을 이어요.'] }),
          mm({ p: '두 물건이 만나 일이 벌어지는 문장만 모두 고르세요.', mode: 'pick', topic: '의자 + 책가방', basket: '일이 벌어지는 문장',
            cards: [['p1', '칠판이 분필 가루를 뒤집어쓰고 눈사람이 되었어요'], ['p2', '의자는 다리가 네 개예요'], ['p3', '의자가 책가방을 업고 복도를 걸어갔어요'], ['p4', '책가방은 파란색이에요']], extra: ['p5', '복도는 길어요'],
            target: { pick: ['p1', 'p3'] }, d: 0.3,
            predict: { q: '"의자는 다리가 네 개예요"는 이야기의 한 장면이 될까요?', options: ['될 수 있어요', '일이 벌어지지 않아 아직 장면이 아니에요'], answer: 1 },
            conclude: '이야기의 첫 장면은 모습만 말하는 것이 아니라 두 대상이 만나 무슨 일이 벌어져야 해요.' }),
        ],
      },
      {
        id: 'a2', title: '활동 2. 두 물건을 한 장면에 이어 붙이기', minutes: 13, tool: 'collage',
        teacher: '"두 물건이 만나는 곳을 어디에 두면 이야기가 보일까요?" 서로 겹쳐 붙이면 두 물건이 만나는 모습이 된다고 시범을 보인다. 두 조각을 멀찍이 따로 붙인 학생에게는 둘이 만나 무슨 일이 벌어졌는지 짝에게 말해 보게 한다. 마지막 문항은 짝이 둘 사이에서 벌어진 일을 맞힌 뒤에만 점검을 표시한다.',
        task: '두 물건을 나타내는 조각을 겹치게 붙여, 둘이 만난 장면으로 만들어요.',
        levels: { easy: { shapes: ['circle', 'rect', 'semi', 'star'], colors: ['노랑', '갈색', '초록', '빨강', '파랑'] }, base: { shapes: ['circle', 'rect', 'semi', 'star', 'triangle', 'leaf'], colors: ['노랑', '갈색', '초록', '빨강', '파랑', '하양', '분홍'] }, challenge: {} },
        items: [
          { prompt: '달과 신발주머니를 만나게 해요. 큰 노랑 동그라미 달 하나와 보통 갈색 긴 네모 하나를 겹쳐 붙여요.', target: { has: [{ shape: 'circle', color: '노랑', size: 'l', n: 1 }, { shape: 'rect', color: '갈색', size: 'm', n: 1 }], overlap: 1 }, difficulty: 0.2 },
          { prompt: '우산과 선인장을 만나게 해요. 큰 빨강 반원 우산 하나와 큰 초록 긴 네모 선인장 하나를 겹쳐 붙여요.', target: { has: [{ shape: 'semi', color: '빨강', size: 'l', n: 1 }, { shape: 'rect', color: '초록', size: 'l', n: 1 }], overlap: 1 }, difficulty: 0.25 },
          { prompt: '내가 고른 두 물건을 한 장면에 붙이고, 둘이 만나 벌어진 일을 점검해요.', target: { selfCheck: ['서로 다른 두 물건을 골랐어요', '두 물건이 겹치거나 맞닿게 붙였어요', '짝이 둘 사이에서 벌어진 일을 맞혔어요'], minPieces: 3 }, difficulty: 0.1 },
        ],
      },
    ], '"오늘 이은 두 물건이 만나서 어떤 일이 벌어졌나요?" 두세 명이 한 문장씩 말하게 하고, 사건 낱말(~했어요)에 밑줄을 긋는다. 출구 2번에서 "모습만 말해도 이야기예요"를 고른 학생에게는 활동 1의 "의자는 다리가 네 개예요" 문장을 떠올리게 한다.', [
      exMm({ p: '두 물건 짝과 사건 문장을 이어 보세요.', mode: 'match', topic: '두 물건 잇기',
        slots: [['e1', '풍선 + 돌멩이'], ['e2', '양말 + 별']], cards: [['x1', '돌멩이가 풍선 줄을 붙잡고 하늘 구경을 갔어요'], ['x2', '양말이 별 한 개를 주워 발가락에 달아 주었어요'], ['x3', '풍선은 둥글어요']],
        target: { match: { e1: 'x1', e2: 'x2' } }, d: 0.15 }),
      { type: 'choice', prompt: '이야기의 첫 장면으로 알맞은 문장은?', options: ['우산은 둥글고 선인장은 뾰족해요.', '비가 오지 않는 사막에서 우산이 선인장에게 그늘을 만들어 주었어요.', '선인장은 사막에 살아요.'], answer: 1, difficulty: 0.15, explain: '두 물건이 만나 일이 벌어져야 이야기의 장면이 돼요.' },
      { type: 'mood', prompt: '두 물건을 이어 이야기를 만들어 보니 어땠나요?' },
    ]),
    worksheet: {
      title: '두 물건이 만난 이야기',
      items: [
        { type: 'table', prompt: '서로 다른 두 물건을 정해, 둘이 만나서 벌어지는 일을 한 문장으로 쓰세요.', columns: ['두 물건', '만나서 벌어지는 일'], cells: [['우산 + 선인장', '사막에서 우산이 선인장의 그늘이 되었어요'], ['', ''], ['', '']] },
        { type: 'figure', wide: true, prompt: '달과 신발주머니가 만난 장면입니다. 신발주머니 곁에 별 조각 둘을 그려 넣으세요.', tool: 'collage', options: { printColors: false }, figures: [{ state: { pieces: [{ shape: 'circle', color: '노랑', size: 'l', x: 280, y: 160, r: 0 }, { shape: 'rect', color: '갈색', size: 'm', x: 280, y: 240, r: 0 }] }, caption: '위: 노랑 큰 동그라미(달), 아래: 갈색 긴 네모(신발주머니)' }], answer: '신발주머니 양옆에 별 조각을 하나씩 그린다' },
        { type: 'choice', prompt: '두 물건이 만나 일이 벌어지는 문장에 ○ 하세요.', options: ['컵은 둥글어요', '컵이 지우개를 배에 태워 강을 건넸어요', '지우개는 하얘요'], answer: '컵이 지우개를 배에 태워 강을 건넸어요' },
        { type: 'short', prompt: '내가 고른 두 물건과 둘 사이에서 벌어진 일을 한 문장으로 쓰세요.' },
      ],
      easy: {
        note: '이야기 문장에는 두 물건이 함께 나오고 "~했어요"처럼 움직임이 있어요.',
        items: [
          { type: 'table', prompt: '두 물건과 벌어진 일을 쓰세요.', columns: ['두 물건', '벌어진 일'], cells: [['', '']] },
          { type: 'choice', prompt: '움직임이 있는 문장에 ○ 하세요.', options: ['달이 신발주머니에 들어갔어요', '달은 노래요'], answer: '달이 신발주머니에 들어갔어요' },
          { type: 'draw', prompt: '두 물건이 만나는 장면을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 놓으면 바로 맞는지 표시돼요. 색종이는 모양 네 가지, 색 다섯 가지예요.',
      base: '스스로 이은 뒤 확인해요. 고르개는 모양 여섯 가지, 색 일곱 가지예요.',
      challenge: '이어지지 않는 카드가 하나씩 더 섞여 있어요. 색종이는 모든 모양·색 가운데 골라 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 이야기 만들기는 국어에서만 한다고 여긴다 → 글 대신 장면을 조각으로 이어 보여 주는 활동임을 짚는다. ② 두 물건의 닮은 점을 나열하고 이야기로 착각한다 → "그래서 어떤 일이 벌어졌나요?"를 묻는다. ③ 두 조각을 멀리 떨어뜨려 붙인다 → 겹치거나 맞닿게 붙여 만남을 나타낸다. 준비물: 교실에서 고른 서로 다른 물건 두 개(지우개·컵).',
  }));

  // ───────────── 6차시 (연습) ─────────────
  lessons.push(lesson(6, {
    title: '이야기 카드를 처음·가운데·끝 차례로 놓고 장면 하나 그리기',
    objective: '두 대상이 만나는 이야기를 처음·가운데·끝의 차례로 놓고, 그중 한 장면을 크기와 색으로 나타낼 수 있다.',
    illustration: {
      prompt: art('a red balloon and a small stone traveling together through three paper-cut scenes of sky, field and hill'),
      scene: scene([
        { motif: 'cloud', x: 100, y: 52 }, { motif: 'sun', x: 410, y: 56, s: 0.7 }, { motif: 'hills', y: 206 },
        { motif: 'bird', x: 250, y: 84 }, { motif: 'flower', x: 120, y: 222, s: 1.1 }, { motif: 'leaf', x: 380, y: 204, r: -20 },
        { motif: 'text', x: 240, y: 140, text: '처음, 가운데, 끝', size: 24 },
      ]),
    },
    stages: stages({
      teacher: '"풍선과 돌멩이가 만났어요. 풍선이 돌멩이를 데리고 하늘에 오른다면 먼저 일어날 일은 무엇일까요?" 학생 말을 처음·가운데·끝으로 갈라 칠판에 세 줄로 적는다. 끝 장면이 먼저 나오거나 가운데가 빠지면 이야기가 이어지지 않는다고 짚는다. 시연 단추로 이야기 카드가 차례대로 놓이는 모습을 보여 준다.',
      student: '풍선과 돌멩이가 만나서 벌어질 일을 처음·가운데·끝으로 한 문장씩 말해 봅시다.',
      demo: { tool: 'story', options: { slots: ['처음', '가운데', '끝'], cards: [{ id: 'd1', text: '풍선이 돌멩이를 만났어요' }, { id: 'd2', text: '줄을 묶어 함께 날았어요' }, { id: 'd3', text: '언덕에 사뿐히 내렸어요' }] }, sequence: [{ order: ['d1', 'd2', 'd3'] }] },
    }, [
      {
        id: 'a1', title: '활동 1. 이야기 카드를 일어난 차례로 놓기', minutes: 12, tool: 'story',
        teacher: '"이 카드가 처음일까요, 끝일까요? 앞 카드에서 일어난 일이 이 카드의 까닭이 되나요?" 앞 장면이 뒤 장면의 까닭이 되도록 차례를 세운다. "먼저 헤어진 뒤 만났어요"처럼 차례가 뒤바뀐 학생에게는 두 물건이 만나기 전에 무엇이 있었는지 되묻는다.',
        task: '이야기 카드를 읽고 처음·가운데·끝 차례로 놓아요.',
        levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          st({ p: '지팡이와 무지개가 만나는 이야기 카드를 차례대로 놓아 보세요.', cards: [['a1', '비 갠 길에 지팡이가 혼자 서 있었어요'], ['a2', '무지개가 지팡이 손잡이에 걸터앉았어요'], ['a3', '지팡이는 일곱 빛깔 지팡이가 되었어요']], order: ['a1', 'a2', 'a3'], d: 0.2,
            hints: ['지팡이가 혼자 있던 일, 무지개를 만난 일, 달라진 모습을 차례로 떠올려요.'] }),
          st({ p: '양말과 별이 만나는 이야기 카드를 차례대로 놓아 보세요.', cards: [['b1', '양말 한 짝이 빨랫줄에서 떨어졌어요'], ['b2', '밤하늘에서 별 하나가 양말 속으로 내려왔어요'], ['b3', '양말은 발가락에 별빛을 달고 잠들었어요'], ['b4', '아침에 별은 하늘로 돌아갔어요']], slots: ['처음', '가운데1', '가운데2', '끝'], order: ['b1', 'b2', 'b3', 'b4'], d: 0.25,
            hints: ['떨어진 일이 먼저, 만난 일이 그다음, 헤어진 일이 맨 끝이에요.'] }),
          st({ p: '우산과 시계가 만나는 이야기 카드를 차례대로 놓아 보세요.', cards: [['c1', '시계가 비 오는 날 멈춰 서 버렸어요'], ['c2', '우산이 시계 위로 지붕이 되어 주었어요'], ['c3', '시계 바늘이 다시 똑딱똑딱 움직였어요']], order: ['c1', 'c2', 'c3'], d: 0.3,
            predict: { q: '이야기 카드의 차례를 바꾸어도 같은 이야기가 될까요?', options: ['같아요', '달라져요', '잘 모르겠어요'], answer: 1 },
            conclude: '앞 장면이 뒤 장면의 까닭이 되도록 차례를 세워야 이야기가 이어져요.' }),
        ],
      },
      {
        id: 'a2', title: '활동 2. 이야기의 한 장면을 색종이로 나타내기', minutes: 13, tool: 'collage',
        teacher: '"이 장면이 처음일까요, 끝일까요? 장면이 보이도록 어느 조각을 크게 할까요?" 중심 인물을 크게, 배경을 작게 붙이는 방법을 시범 보인다. 모든 조각을 같은 크기로 붙인 학생에게는 이야기의 주인공이 어디서 눈에 띄는지 묻는다.',
        task: '풍선과 돌멩이 이야기의 장면을 조각으로 나타내요.',
        levels: { easy: { shapes: ['circle', 'semi', 'rect'], colors: ['빨강', '갈색', '파랑', '초록'] }, base: { shapes: ['circle', 'semi', 'rect', 'triangle', 'star'], colors: ['빨강', '갈색', '파랑', '초록', '노랑', '하양'] }, challenge: {} },
        items: [
          { prompt: '처음 장면을 만들어요. 작은 빨강 동그라미 풍선 하나와 큰 갈색 동그라미 돌멩이 하나를 서로 맞닿게 붙여요.', target: { has: [{ shape: 'circle', color: '빨강', size: 's', n: 1 }, { shape: 'circle', color: '갈색', size: 'l', n: 1 }], overlap: 1 }, difficulty: 0.2 },
          { prompt: '끝 장면을 만들어요. 큰 초록 반원 언덕 하나 위에 작은 빨강 동그라미 풍선을 세 개 겹쳐 붙여요.', target: { has: [{ shape: 'semi', color: '초록', size: 'l', n: 1 }, { shape: 'circle', color: '빨강', size: 's', n: 3 }], overlap: 3 }, difficulty: 0.25 },
          { prompt: '내 이야기의 가운데 장면 하나를 조각으로 나타내고 점검해요.', target: { selfCheck: ['이야기에서 가운데에 오는 장면을 골랐어요', '중심이 되는 조각을 크게 붙였어요', '짝에게 이 장면 앞뒤에 무슨 일이 있는지 말했어요'], minPieces: 4 }, difficulty: 0.1 },
        ],
      },
    ], '"풍선과 돌멩이의 이야기에서 처음과 끝은 어떻게 달라졌나요?" 학생 말에서 달라진 점을 낱말로 모아 칠판에 적는다. 출구 1번에서 끝 장면을 맨 앞에 놓은 학생에게는 앞 카드가 뒤 카드의 까닭이 되는지 다시 읽게 한다.', [
      { type: 'tool', tool: 'story', options: { slots: ['처음', '가운데', '끝'], cards: [{ id: 'e1', text: '구름이 바위 곁에 내려앉았어요' }, { id: 'e2', text: '바위가 구름을 받쳐 높이 들어 올렸어요' }, { id: 'e3', text: '바위는 하늘 위에서 시원한 바람을 맞았어요' }] }, prompt: '구름과 바위가 만나는 이야기 카드를 차례대로 놓아 보세요.', target: { order: ['e1', 'e2', 'e3'] }, difficulty: 0.15 },
      { type: 'choice', prompt: '이야기를 처음·가운데·끝으로 나누면 좋은 까닭은?', options: ['장면이 많아 보여서', '앞 장면이 뒤 장면의 까닭이 되어 이야기가 이어져서', '짧게 쓰기 위해서'], answer: 1, difficulty: 0.15, explain: '차례가 있어야 두 대상이 만나 무엇이 달라졌는지 읽는 사람에게 전해져요.' },
      { type: 'mood', prompt: '이야기 장면을 나타내 보니 어땠나요?' },
    ]),
    worksheet: {
      title: '이야기의 처음·가운데·끝',
      items: [
        { type: 'table', prompt: '내가 정한 두 물건의 이야기를 처음·가운데·끝으로 쓰세요.', columns: ['차례', '일어난 일'], cells: [['처음', ''], ['가운데', ''], ['끝', '']] },
        { type: 'figure', wide: true, prompt: '풍선 이야기의 끝 장면입니다. 언덕 위에 풍선 조각 하나를 더 그리세요.', tool: 'collage', options: { printColors: false }, figures: [{ state: { pieces: [{ shape: 'semi', color: '초록', size: 'l', x: 280, y: 280, r: 0 }, { shape: 'circle', color: '빨강', size: 's', x: 240, y: 240, r: 0 }, { shape: 'circle', color: '빨강', size: 's', x: 320, y: 240, r: 0 }] }, caption: '초록 큰 반원 언덕과 빨강 작은 풍선 두 개' }], answer: '언덕 가운데쯤에 풍선 하나를 겹쳐 그린다' },
        { type: 'choice', prompt: '이야기의 "끝"에 들어갈 문장은?', options: ['시계가 비 오는 날 멈춰 서 버렸어요', '우산이 시계 위로 지붕이 되어 주었어요', '시계 바늘이 다시 똑딱똑딱 움직였어요'], answer: '시계 바늘이 다시 똑딱똑딱 움직였어요' },
        { type: 'short', prompt: '내 이야기에서 가운데 장면이 없으면 어떤 점이 어색한지 쓰세요.' },
      ],
      easy: {
        note: '처음에는 두 물건이 만나고, 가운데에는 일이 벌어지고, 끝에는 달라진 모습이 나와요.',
        items: [
          { type: 'table', prompt: '이야기 차례를 쓰세요.', columns: ['차례', '일어난 일'], cells: [['처음', ''], ['끝', '']] },
          { type: 'choice', prompt: '이야기의 "처음"에 알맞은 문장에 ○ 하세요.', options: ['양말 한 짝이 빨랫줄에서 떨어졌어요', '양말은 별빛을 달고 잠들었어요'], answer: '양말 한 짝이 빨랫줄에서 떨어졌어요' },
          { type: 'draw', prompt: '이야기에서 가장 마음에 드는 장면을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 놓으면 바로 맞는지 표시돼요. 색종이는 모양 세 가지, 색 네 가지예요.',
      base: '스스로 놓고 확인해요. 고르개는 모양 다섯 가지, 색 여섯 가지예요.',
      challenge: '이야기 카드가 네 장인 문항이 있어 칸이 더 많아요. 색종이는 모든 모양·색 가운데 골라 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 끝 장면을 먼저 놓는다 → 앞 카드가 뒤 카드의 까닭이 되는지 소리 내어 이어 읽게 한다. ② 가운데 장면이 빠진다 → 처음과 끝 사이에 "그래서 무슨 일이 있었어요?"를 묻는다. ③ 장면 조각을 모두 같은 크기로 붙인다 → 주인공 조각을 크게 붙이도록 시범을 보인다.',
  }));

  // ───────────── 7차시 (확장) ─────────────
  lessons.push(lesson(7, {
    title: '그림으로 보여 줄 것과 글로 적을 것을 나누어 한 장 꾸미기',
    objective: '이야기 한 장면에서 그림이 더 잘 전하는 것과 글로 적어야 전해지는 것을 나누고, 그림과 글을 함께 써서 나타낼 수 있다.',
    illustration: {
      prompt: art('a snail riding a small bicycle with speed lines and a speech bubble in a sunny paper-cut park'),
      scene: scene([
        { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 100, y: 52 }, { motif: 'hills', y: 208 },
        { motif: 'leaf', x: 130, y: 216, r: 10 }, { motif: 'leaf', x: 360, y: 206, r: -30, color: 'buttercup' }, { motif: 'bird', x: 250, y: 86 },
        { motif: 'text', x: 240, y: 142, text: '그림과 글이 함께해요', size: 22 },
      ]),
    },
    stages: stages({
      teacher: '"달팽이가 자전거를 타고 달린다는 이야기에서, 속도가 빠르다는 것을 그림으로 보여 줄 수 있을까요, 글로만 적어야 할까요?" 속도선처럼 그림에 더하면 한눈에 전해지는 것과, 달팽이의 속마음이나 일어난 때처럼 글이 있어야 전해지는 것이 있다고 짚는다. "글은 필요 없고 그림만 그리면 돼요"라는 생각을 짚는다. 시연 단추로 정보 카드가 그림 칸과 글 칸으로 나뉘는 모습을 보여 준다.',
      student: '달팽이가 자전거를 탄 장면을 보고, 그림만 보아서는 알 수 없는 것을 하나 찾아봅시다.',
      demo: { tool: 'mindmap', options: { topic: '달팽이의 소풍', slots: [{ id: 'pic', label: '그림으로 보여 줘요' }, { id: 'txt', label: '글로 적어요' }], cards: [{ id: 'd1', text: '바퀴가 굴러가는 속도감' }, { id: 'd2', text: '달팽이의 속마음' }] }, sequence: [{ sort: { pic: ['d1'], txt: ['d2'] } }] },
    }, [
      {
        id: 'a1', title: '활동 1. 그림 몫과 글 몫 나누기', minutes: 12, tool: 'mindmap',
        teacher: '"이 정보를 그림만으로 전할 수 있을까요? 글자 없이 알려 줄 수 있는지 상상해 보세요." 모양·색·속도·크기는 그림, 속마음·때·이름은 글이 잘 전한다고 기준을 세운다. 둘 다 필요한 정보는 이번 활동에서 카드로 두지 않고 활동 2에서 다룬다. 도전 단계의 "주인공 이름은 민지"처럼 이름 카드는 글 쪽으로 간다.',
        task: '카드를 읽고 그림이 잘 전하는 것인지 글로 적어야 전해지는 것인지 나누어요.',
        levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          mm({ p: '달팽이 소풍 장면의 정보 카드를 그림 칸과 글 칸에 나누어 넣어 보세요.', topic: '달팽이의 소풍',
            slots: [['pic', '그림으로 보여 줘요'], ['txt', '글로 적어요']],
            cards: [['a1', '바퀴가 굴러가는 속도감'], ['a2', '달팽이의 속마음'], ['a3', '껍데기의 소용돌이 무늬'], ['a4', '이야기가 일어난 때'], ['a5', '주인공 이름은 민지']], extra: ['a6', '자전거는 바퀴가 둘이에요'],
            target: { sort: { pic: ['a1', 'a3'], txt: ['a2', 'a4', 'a5'] } }, d: 0.2,
            hints: ['눈으로 바로 보이게 그릴 수 있는 것인지, 글자로 적어야 알 수 있는 것인지 나누어 봐요.'] }),
          mm({ p: '눈사람이 된 칠판 장면의 정보 카드를 그림 칸과 글 칸에 나누어 넣어 보세요.', topic: '눈사람이 된 칠판',
            slots: [['pic', '그림으로 보여 줘요'], ['txt', '글로 적어요']],
            cards: [['b1', '하얀 가루가 쌓인 모양'], ['b2', '눈사람의 둥근 두 덩이'], ['b3', '칠판이 처음 느낀 놀라움'], ['b4', '그날 아침 있었던 일'], ['b5', '교실 번호는 육 학년 삼 반']], extra: ['b6', '칠판은 초록색이에요'],
            target: { sort: { pic: ['b1', 'b2'], txt: ['b3', 'b4', 'b5'] } }, d: 0.25,
            hints: ['모양과 색은 그림으로 곧바로 보여 줄 수 있고, 마음과 때는 글이 있어야 알아요.'] }),
          mm({ p: '구름 지우개 장면의 정보 카드를 그림 칸과 글 칸에 나누어 넣어 보세요.', topic: '구름 지우개',
            slots: [['pic', '그림으로 보여 줘요'], ['txt', '글로 적어요']],
            cards: [['c1', '지워진 자리에 나타난 파란 하늘 색'], ['c2', '구름이 작아지는 크기'], ['c3', '지우개의 고마운 마음'], ['c4', '지우개가 한 약속'], ['c5', '지우개 가게 이름은 별빛']], extra: ['c6', '구름은 하늘에 떠요'],
            target: { sort: { pic: ['c1', 'c2'], txt: ['c3', 'c4', 'c5'] } }, d: 0.3,
            predict: { q: '속마음은 그림만으로도 모두 전할 수 있을까요?', options: ['모두 전할 수 있어요', '표정은 보이지만 속마음은 글이 필요해요'], answer: 1 },
            conclude: '그림은 모양·색·속도를, 글은 마음·때·이름을 더 잘 전해요. 그래서 함께 쓰면 뜻이 완성돼요.' }),
        ],
      },
      {
        id: 'a2', title: '활동 2. 그림 몫을 만들고 글 몫을 말하기', minutes: 13, tool: 'collage',
        teacher: '"속도감은 어떤 모양을 더하면 느껴질까요?" 긴 네모를 뒤쪽에 나란히 붙이는 속도선 시범을 보인다. 마지막 문항은 그림에 담지 못한 것을 짝에게 글로 읽어 주며 점검한다. 글을 그림 안에 빼곡히 쓰려는 학생에게는 그림 곁에 한 줄만 적게 한다.',
        task: '그림으로 보여 줄 것을 조각으로 붙이고, 글로 적을 것은 말로 정해요.',
        levels: { easy: { shapes: ['circle', 'rect', 'leaf'], colors: ['검정', '노랑', '갈색', '초록'] }, base: { shapes: ['circle', 'rect', 'leaf', 'semi', 'triangle'], colors: ['검정', '노랑', '갈색', '초록', '하양', '빨강'] }, challenge: {} },
        items: [
          { prompt: '자전거의 속도감을 그려요. 큰 검정 동그라미 바퀴 하나 뒤에 노랑 긴 네모 속도선을 세 개 이상 붙여요.', target: { has: [{ shape: 'circle', color: '검정', size: 'l', n: 1 }, { shape: 'rect', color: '노랑', min: 3 }] }, difficulty: 0.2 },
          { prompt: '달팽이를 그려요. 큰 갈색 동그라미 껍데기 위에 작은 노랑 동그라미 무늬를 둘 겹쳐 붙여요.', target: { has: [{ shape: 'circle', color: '갈색', size: 'l', n: 1 }, { shape: 'circle', color: '노랑', size: 's', n: 2 }], overlap: 2 }, difficulty: 0.25 },
          { prompt: '내 이야기의 한 장면을 그림으로 나타내고, 그림에 담지 못한 것은 글로 정해 점검해요.', target: { selfCheck: ['그림으로 보여 줄 것을 조각으로 붙였어요', '그림에 담지 못한 것을 글 한 줄로 정했어요', '짝이 그림과 글을 함께 읽고 이야기를 말했어요'], minPieces: 4 }, difficulty: 0.1 },
        ],
      },
    ], '"그림만 보았을 때와 글까지 읽었을 때 달라진 점은 무엇인가요?" 짝의 작품을 두세 개 띄워 글이 더해져 뜻이 더 분명해진 부분을 말하게 한다. 출구 2번에서 "글은 필요 없어요"를 고른 학생에게는 활동 1의 "속마음" 카드를 떠올리게 한다.', [
      exMm({ p: '눈 오는 날 장면의 정보 카드를 그림 칸과 글 칸에 나누어 넣어 보세요.', topic: '눈 오는 날',
        slots: [['pic', '그림으로 보여 줘요'], ['txt', '글로 적어요']], cards: [['e1', '하얗게 쌓인 눈의 색'], ['e2', '주인공의 속마음'], ['e3', '이야기가 일어난 때']],
        target: { sort: { pic: ['e1'], txt: ['e2', 'e3'] } }, d: 0.15 }),
      { type: 'choice', prompt: '그림과 글을 함께 쓰는 까닭으로 알맞은 것은?', options: ['그림이 못 그려서 글로 때워야 해서', '그림과 글이 서로 모자란 점을 채워 뜻이 더 분명해져서', '글이 많으면 점수가 높아서'], answer: 1, difficulty: 0.15, explain: '그림은 모양·색·속도를, 글은 마음·때를 잘 전해 서로 채워 줘요.' },
      { type: 'mood', prompt: '그림과 글을 함께 써 보니 어땠나요?' },
    ]),
    worksheet: {
      title: '그림 몫, 글 몫',
      items: [
        { type: 'table', prompt: '내 이야기의 한 장면에서 그림 몫과 글 몫을 나누어 쓰세요.', columns: ['그림으로 보여 줄 것', '글로 적을 것'], cells: [['바퀴 뒤 속도선', '달팽이의 속마음'], ['', ''], ['', '']] },
        { type: 'figure', wide: true, prompt: '자전거 바퀴 뒤에 속도선 조각을 더 그려 속도감이 느껴지게 하세요.', tool: 'collage', options: { printColors: false }, figures: [{ state: { pieces: [{ shape: 'circle', color: '검정', size: 'l', x: 380, y: 200, r: 0 }, { shape: 'rect', color: '노랑', size: 'm', x: 240, y: 200, r: 90 }] }, caption: '오른쪽 검정 큰 동그라미(바퀴), 왼쪽 노랑 긴 네모(속도선)' }], answer: '속도선을 위아래로 두세 줄 더 그린다' },
        { type: 'choice', prompt: '글로 적어야 더 잘 전해지는 것에 ○ 하세요.', options: ['껍데기의 소용돌이 무늬', '달팽이의 속마음', '바퀴 뒤 속도선'], answer: '달팽이의 속마음' },
        { type: 'short', prompt: '그림에 담지 못해서 글로 적은 것 하나와 그 까닭을 쓰세요.' },
      ],
      easy: {
        note: '모양·색·속도는 그림으로, 마음·때·이름은 글로 적으면 잘 전해져요.',
        items: [
          { type: 'table', prompt: '그림 몫과 글 몫을 한 가지씩 쓰세요.', columns: ['그림 몫', '글 몫'], cells: [['', '']] },
          { type: 'choice', prompt: '그림 몫에 ○ 하세요.', options: ['소용돌이 무늬', '속마음'], answer: '소용돌이 무늬' },
          { type: 'draw', prompt: '이야기 한 장면을 그림으로 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 놓으면 바로 맞는지 표시돼요. 색종이는 모양 세 가지, 색 네 가지예요.',
      base: '스스로 나누고 만든 뒤 확인해요. 고르개는 모양 다섯 가지, 색 여섯 가지예요.',
      challenge: '어디에도 들어가지 않는 카드가 하나씩 더 섞여 있어요. 색종이는 모든 모양·색 가운데 골라 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 글은 필요 없고 그림만 그리면 된다고 여긴다 → 속마음·때 같은 정보를 그림으로만 보여 보게 해 한계를 느끼게 한다. ② 글을 그림 안에 빼곡히 적는다 → 그림 곁에 한 줄만 적게 한다. ③ 속도선을 한 줄만 붙인다 → 세 줄 이상 겹겹이 붙이는 시범을 보인다.',
  }));

  // ───────────── 8차시 (확장) ─────────────
  lessons.push(lesson(8, {
    title: '이야기에서 빠진 장면을 찾아 이어 그리기',
    objective: '이야기 장면 사이에서 끊긴 곳을 찾아 이어 주는 장면을 고르고, 빠진 장면을 그림과 글로 채울 수 있다.',
    illustration: {
      prompt: art('a paper-cut storyboard with three scenes of a lost glove, a small bird and a warm hand, with one empty frame in the middle'),
      scene: scene([
        { motif: 'cloud', x: 100, y: 52 }, { motif: 'snow', x: 380, y: 54 }, { motif: 'hills', y: 208 },
        { motif: 'tree', x: 90, y: 216 }, { motif: 'bird', x: 250, y: 88 }, { motif: 'leaf', x: 380, y: 206, r: 10 },
        { motif: 'text', x: 240, y: 140, text: '빠진 장면을 찾아요', size: 22 },
      ]),
    },
    stages: stages({
      teacher: '"장갑이 길에 떨어져 있었어요. 다음 장면은 장갑이 따뜻한 손에 끼워져 있어요. 그 사이에 무슨 일이 있었을까요?" 학생이 말한 장면을 칠판에 한 줄씩 적고, 앞뒤 장면과 이어지는지 따져 본다. "빠진 장면이 없어도 읽는 사람이 알아서 이해해요"라는 생각을 짚는다. 시연 단추로 빈칸에 이어 주는 장면 카드가 들어가는 모습을 보여 준다.',
      student: '장갑이 길에 떨어진 장면과 따뜻한 손에 끼워진 장면 사이에 무슨 일이 있었을지 한 문장으로 말해 봅시다.',
      demo: { tool: 'mindmap', options: { mode: 'match', topic: '빠진 장면', slots: [{ id: 'd1', label: '떨어진 장갑 → (  ) → 손에 낀 장갑' }], cards: [{ id: 'dc1', text: '작은 새가 장갑을 물어 아이에게 날랐어요' }, { id: 'dc2', text: '장갑은 털실로 짰어요' }] }, sequence: [{ match: { d1: 'dc1' } }] },
    }, [
      {
        id: 'a1', title: '활동 1. 끊긴 곳을 이어 주는 장면 고르기', minutes: 12, tool: 'mindmap',
        teacher: '"앞 장면의 끝과 뒤 장면의 시작이 이 카드로 이어지나요?" 앞 장면에서 일어난 일이 이 카드의 까닭이 되고, 이 카드가 뒤 장면의 까닭이 되는지 소리 내어 읽게 한다. "그냥 재미있으면 된다"는 학생에게는 앞뒤와 이어져야 이야기라고 짚는다. 도전 단계의 카드는 앞뒤와 이어지지 않아 어디에도 들어가지 않는다.',
        task: '이야기에서 끊긴 곳마다 앞뒤를 이어 주는 장면 카드를 이어요.',
        levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          mm({ p: '끊긴 곳마다 이어 주는 장면 카드를 이어 보세요.', mode: 'match', topic: '장갑 이야기',
            slots: [['g1', '떨어진 장갑 → (  ) → 손에 낀 장갑'], ['g2', '손에 낀 장갑 → (  ) → 눈사람의 손이 된 장갑']],
            cards: [['m1', '작은 새가 장갑을 물어 아이에게 날랐어요'], ['m2', '아이가 장갑을 눈사람 손에 끼워 주었어요'], ['m3', '장갑은 털실로 짰어요']], extra: ['m4', '눈은 하얀색이에요'],
            target: { match: { g1: 'm1', g2: 'm2' } }, d: 0.2,
            hints: ['끊긴 곳 앞 장면의 끝에서 이어지고, 뒤 장면의 까닭이 되는 카드를 찾아요.'] }),
          mm({ p: '끊긴 곳마다 이어 주는 장면 카드를 이어 보세요.', mode: 'match', topic: '열쇠 이야기',
            slots: [['k1', '잃어버린 열쇠 → (  ) → 열린 보물 상자'], ['k2', '열린 보물 상자 → (  ) → 모두 나눠 먹은 사탕']],
            cards: [['n1', '개미들이 열쇠를 굴려 상자 앞까지 날랐어요'], ['n2', '상자 속 사탕을 개미들과 나누기로 했어요'], ['n3', '열쇠는 은색이에요']], extra: ['n4', '개미는 여섯 다리예요'],
            target: { match: { k1: 'n1', k2: 'n2' } }, d: 0.25,
            hints: ['앞 장면에서 시작된 일이 이 카드를 거쳐 뒤 장면으로 닿는지 확인하며 이어요.'] }),
          mm({ p: '이야기의 흐름에 꼭 필요한 장면과 없어도 되는 장면 카드를 나누어 넣어 보세요.', topic: '빗방울 이야기',
            slots: [['need', '꼭 필요한 장면'], ['skip', '없어도 되는 장면']],
            cards: [['p1', '빗방울이 구름에서 떨어졌어요'], ['p2', '꽃잎이 빗방울을 받아 안았어요'], ['p3', '구름 색깔은 회색이에요'], ['p4', '꽃은 활짝 피어났어요']], extra: ['p5', '구름은 높은 곳에 있어요'],
            target: { sort: { need: ['p1', 'p2', 'p4'], skip: ['p3'] } }, d: 0.3,
            predict: { q: '이야기에서 장면 하나를 빼면 읽는 사람이 이해하는 데 문제가 없을까요?', options: ['문제없어요', '이어지지 않을 수 있어요'], answer: 1 },
            conclude: '장면 하나가 빠지면 앞뒤가 끊겨 읽는 사람이 이야기를 따라가기 어려워요.' }),
        ],
      },
      {
        id: 'a2', title: '활동 2. 빠진 장면을 그림으로 채우기', minutes: 13, tool: 'collage',
        teacher: '"빠진 장면에는 앞 장면의 무엇이 남아 있나요?" 앞 장면의 물건(장갑)과 뒤 장면의 인물(아이)이 함께 나오면 이어진다고 시범을 보인다. 앞뒤와 상관없는 새 인물을 넣은 학생에게는 앞 장면에서 이어지는 것이 무엇인지 묻는다.',
        task: '앞뒤 장면에서 이어지는 물건을 넣어 빠진 장면을 조각으로 나타내요.',
        levels: { easy: { shapes: ['circle', 'rect', 'star'], colors: ['빨강', '노랑', '갈색', '파랑'] }, base: { shapes: ['circle', 'rect', 'star', 'semi', 'triangle'], colors: ['빨강', '노랑', '갈색', '파랑', '초록', '하양'] }, challenge: {} },
        items: [
          { prompt: '새가 장갑을 나르는 장면이에요. 큰 빨강 동그라미 장갑 하나 위에 작은 노랑 동그라미 새 하나를 겹쳐 붙여요.', target: { has: [{ shape: 'circle', color: '빨강', size: 'l', n: 1 }, { shape: 'circle', color: '노랑', size: 's', n: 1 }], overlap: 1 }, difficulty: 0.2 },
          { prompt: '아이가 장갑을 눈사람에게 끼워 주는 장면이에요. 큰 파랑 동그라미 눈사람 하나와 빨강 작은 동그라미 장갑 둘을 맞닿게 붙여요.', target: { has: [{ shape: 'circle', color: '파랑', size: 'l', n: 1 }, { shape: 'circle', color: '빨강', size: 's', n: 2 }], overlap: 2 }, difficulty: 0.25 },
          { prompt: '내 이야기에서 빠진 장면 하나를 정해 조각으로 나타내고 점검해요.', target: { selfCheck: ['앞뒤 장면에서 이어지는 것을 넣었어요', '빠진 장면을 한 줄 글로 적을 수 있어요', '짝이 앞뒤 장면과 이어지는지 읽어 보았어요'], minPieces: 4 }, difficulty: 0.1 },
        ],
      },
    ], '"빠진 장면을 넣으니 이야기가 어떻게 달라졌나요?" 앞뒤를 이어 읽으며 어색함이 사라졌는지 학생이 직접 말하게 한다. 출구 2번에서 "읽는 사람이 알아서 안다"를 고른 학생에게는 다른 모둠이 같은 장면을 어떻게 읽었는지 물어, 사람마다 다르게 채운다는 점을 짚는다.', [
      exMm({ p: '끊긴 곳을 이어 주는 장면 카드를 이어 보세요.', mode: 'match', topic: '모자 이야기',
        slots: [['e1', '바람에 날린 모자 → (  ) → 강아지 머리에 쓴 모자']], cards: [['x1', '강아지가 달려가 모자를 물고 왔어요'], ['x2', '모자는 챙이 넓어요']],
        target: { match: { e1: 'x1' } }, d: 0.15 }),
      { type: 'choice', prompt: '이야기에서 빠진 장면을 채울 때 가장 먼저 살필 것은?', options: ['앞 장면과 뒤 장면이 어떻게 이어지는지', '장면을 얼마나 크게 그릴지', '색을 몇 가지 쓸지'], answer: 0, difficulty: 0.15, explain: '앞뒤를 이어 주는 장면이어야 이야기가 끊기지 않고 읽혀요.' },
      { type: 'mood', prompt: '빠진 장면을 채워 보니 어땠나요?' },
    ]),
    worksheet: {
      title: '빠진 장면 채우기',
      items: [
        { type: 'table', prompt: '이야기에서 끊긴 곳을 한 군데 찾아, 앞 장면·빠진 장면·뒤 장면을 쓰세요.', columns: ['앞 장면', '빠진 장면', '뒤 장면'], cells: [['장갑이 길에 떨어져 있어요', '새가 장갑을 아이에게 날라요', '아이가 장갑을 껴요'], ['', '', ''], ['', '', '']] },
        { type: 'figure', wide: true, prompt: '새가 장갑을 나르는 장면입니다. 장갑 위에 새 조각을 하나 더 그려 넣으세요.', tool: 'collage', options: { printColors: false }, figures: [{ state: { pieces: [{ shape: 'circle', color: '빨강', size: 'l', x: 280, y: 220, r: 0 }, { shape: 'circle', color: '노랑', size: 's', x: 240, y: 180, r: 0 }] }, caption: '빨강 큰 동그라미(장갑)와 노랑 작은 동그라미(새)' }], answer: '장갑 오른쪽 위에 작은 동그라미를 겹쳐 새 한 마리를 더 그린다' },
        { type: 'choice', prompt: '빠진 장면으로 알맞은 것에 ○ 하세요.', options: ['장갑은 털실로 짰어요', '새가 장갑을 물어 아이에게 날랐어요', '눈은 하얀색이에요'], answer: '새가 장갑을 물어 아이에게 날랐어요' },
        { type: 'short', prompt: '내 이야기에서 장면을 하나 빼면 어디가 끊기는지 쓰세요.' },
      ],
      easy: {
        note: '빠진 장면은 앞 장면의 끝에서 이어지고, 뒤 장면의 까닭이 돼요.',
        items: [
          { type: 'table', prompt: '앞 장면과 뒤 장면 사이에 들어갈 일을 쓰세요.', columns: ['앞 장면', '빠진 장면'], cells: [['', '']] },
          { type: 'choice', prompt: '앞뒤를 이어 주는 장면에 ○ 하세요.', options: ['새가 장갑을 아이에게 날랐어요', '장갑은 털실이에요'], answer: '새가 장갑을 아이에게 날랐어요' },
          { type: 'draw', prompt: '빠진 장면 하나를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 놓으면 바로 맞는지 표시돼요. 색종이는 모양 세 가지, 색 네 가지예요.',
      base: '스스로 이은 뒤 확인해요. 고르개는 모양 다섯 가지, 색 여섯 가지예요.',
      challenge: '앞뒤와 이어지지 않는 카드가 하나씩 더 섞여 있어요. 색종이는 모든 모양·색 가운데 골라 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 빠진 장면이 없어도 읽는 사람이 알아서 이해한다고 여긴다 → 장면 하나를 가린 이야기를 짝에게 읽어 주고 이해했는지 물어본다. ② 앞뒤와 상관없는 새 인물을 넣는다 → 앞 장면의 물건과 뒤 장면의 인물이 함께 나오게 한다. ③ 장면을 모양 설명으로 채운다 → 일이 벌어지는 문장인지 따져 본다.',
  }));

  // ───────────── 9차시 (핵심) ─────────────
  lessons.push(lesson(9, {
    title: '내 작품의 뜻이 전해졌는지 알아내는 질문 고르기',
    objective: '내가 붙인 이름과 이야기가 친구에게 전해졌는지 알 수 있는 질문과 알 수 없는 질문을 가려, 짝에게 직접 물어볼 수 있다.',
    illustration: {
      prompt: art('two children comparing a paper-cut picture, one asking a question while the other points at the picture'),
      scene: scene([
        { motif: 'sun', x: 410, y: 56, s: 0.7 }, { motif: 'cloud', x: 100, y: 52 }, { motif: 'hills', y: 208 },
        { motif: 'flower', x: 120, y: 222 }, { motif: 'flower', x: 360, y: 224, color: 'buttercup' }, { motif: 'bird', x: 250, y: 86 },
        { motif: 'text', x: 240, y: 142, text: '내 뜻이 전해졌을까요', size: 22 },
      ]),
    },
    stages: stages({
      teacher: '"내가 붙인 이름과 이야기가 친구에게도 그대로 전해졌는지 어떻게 알 수 있을까요?" 학생이 "잘 그렸지?"라고 묻는 흉내를 내게 하고, 그 질문의 답이 "응"뿐이라 뜻이 전해졌는지 알 수 없다고 짚는다. "내가 붙인 뜻은 설명 안 해도 다 통해요"라는 생각을 짚고 오늘은 물어서 확인한다고 연다. 시연 단추로 질문 카드가 두 칸에 나뉘는 모습을 보여 준다.',
      student: '내가 만든 작품을 친구에게 보여 주며 묻고 싶은 질문을 하나 말해 봅시다.',
      demo: { tool: 'mindmap', options: { topic: '짝에게 하는 질문', slots: [{ id: 'ok', label: '전해졌는지 알 수 있는 질문' }, { id: 'no', label: '알 수 없는 질문' }], cards: [{ id: 'd1', text: '이 그림에서 무슨 일이 벌어지고 있어?' }, { id: 'd2', text: '잘 그렸지?' }] }, sequence: [{ sort: { ok: ['d1'], no: ['d2'] } }] },
    }, [
      {
        id: 'a1', title: '활동 1. 전해졌는지 알 수 있는 질문 가려내기', minutes: 12, tool: 'mindmap',
        teacher: '"이 질문에 친구가 \'응\'이라고만 답하면 내 뜻이 전해졌는지 알 수 있나요?" 친구가 읽은 이야기·먼저 눈에 들어온 것·근거를 말하게 하는 질문이 뜻이 전해졌는지 알려 준다고 기준을 세운다. 칭찬이나 점수를 요구하는 질문은 기분은 알려 주어도 뜻이 전해졌는지는 알려 주지 않는다. 도전 단계의 질문과 무관한 카드는 어느 칸에도 넣지 않는다.',
        task: '질문 카드를 읽고, 뜻이 전해졌는지 알 수 있는 질문인지 아닌지 나누어요.',
        levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          mm({ p: '"젖은 눈사람" 그림을 보여 주며 하는 질문을 두 칸에 나누어 넣어 보세요.', topic: '"젖은 눈사람" 그림',
            slots: [['ok', '뜻이 전해졌는지 알 수 있는 질문'], ['no', '알 수 없는 질문']],
            cards: [['q1', '이 그림에서 가장 먼저 눈에 들어온 것이 뭐야?'], ['q2', '이 그림에서 무슨 일이 벌어지고 있다고 생각해?'], ['q3', '내 그림 마음에 들어?'], ['q4', '잘 그렸지?'], ['q5', '이 그림을 한 문장으로 말하면 뭐라고 할래?']], extra: ['q6', '다음 쉬는 시간에 뭐 할래?'],
            target: { sort: { ok: ['q1', 'q2', 'q5'], no: ['q3', 'q4'] } }, d: 0.2,
            hints: ['친구가 "응·아니"로만 답할 수 있는지, 자기가 읽은 것을 말해야 하는지 따져 봐요.'] }),
          mm({ p: '우산 이야기 작품을 보여 주며 하는 질문을 두 칸에 나누어 넣어 보세요.', topic: '우산 이야기 작품',
            slots: [['ok', '뜻이 전해졌는지 알 수 있는 질문'], ['no', '알 수 없는 질문']],
            cards: [['r1', '제목을 가리고 보면 어떤 이야기로 읽혀?'], ['r2', '그림 속 어디를 보고 그렇게 생각했어?'], ['r3', '두 물건이 만나서 일이 벌어진 게 보여?'], ['r4', '예쁘다고 말해 줄 수 있어?'], ['r5', '내가 일등이지?']], extra: ['r6', '점심에 뭐 먹었어?'],
            target: { sort: { ok: ['r1', 'r2', 'r3'], no: ['r4', 'r5'] } }, d: 0.25,
            hints: ['친구의 기분이 아니라 친구가 읽은 뜻을 알려 주는 질문을 찾아요.'] }),
          mm({ p: '모둠 벽 작품에 대한 질문을 두 칸에 나누어 넣어 보세요.', topic: '모둠 벽 작품',
            slots: [['ok', '뜻이 전해졌는지 알 수 있는 질문'], ['no', '알 수 없는 질문']],
            cards: [['s1', '네가 읽은 이야기를 말해 줄래?'], ['s2', '내가 붙인 뜻과 네가 읽은 뜻이 같아?'], ['s3', '내 작품 별점 몇 개야?'], ['s4', '나 잘했지?']], extra: ['s5', '벽에 몇 장 붙였어?'],
            target: { sort: { ok: ['s1', 's2'], no: ['s3', 's4'] } }, d: 0.3,
            predict: { q: '"잘했지?"라는 질문으로 내 뜻이 전해졌는지 알 수 있을까요?', options: ['알 수 있어요', '알 수 없어요'], answer: 1 },
            conclude: '친구가 읽은 뜻을 말하게 하는 질문이어야 내가 붙인 뜻이 전해졌는지 알 수 있어요.' }),
        ],
      },
      {
        id: 'a2', title: '활동 2. 짝에게 작품을 보여 주고 읽은 뜻 듣기 (짝 활동)', minutes: 13, tool: 'mindmap', pair: true,
        teacher: '준비물: 앞 시간에 만든 이야기 그림 또는 활동지 1번 그림. "제목은 가리고 보여 주세요. 짝이 읽은 이야기를 끝까지 듣고, 고치려 하지 말고 그대로 적어요." 짝의 말에 "그게 아니야"라고 바로 고치려는 학생에게는 먼저 짝이 어디를 보고 그렇게 읽었는지 묻게 한다. 다 듣고 나서 내가 붙인 뜻과 견주게 한다.',
        task: '짝에게 제목을 가린 작품을 보여 주고, 읽은 이야기를 들어 활동지 표에 적어요.',
        levels: { easy: { live: true }, base: {}, challenge: {} },
        items: [
          talk('제목을 가린 작품을 짝에게 보여 주고 "이 그림에서 무슨 이야기가 보여?"라고 물은 뒤, 짝이 읽은 이야기를 활동지 표에 적고 "다 했어요"를 누르세요.', '짝이 읽은 이야기', ['짝이 읽은 이야기', '내가 붙인 이야기'], ['짝이 한 말', '내가 한 말']),
          talk('짝이 읽은 이야기와 내가 붙인 이야기에서 같은 곳과 다른 곳에 각각 밑줄을 긋고 "다 했어요"를 누르세요.', '같은 곳과 다른 곳', ['같은 곳', '다른 곳'], ['같게 읽은 부분', '다르게 읽은 부분']),
          talk('다른 모둠 친구에게 같은 질문을 하고, 두 사람이 읽은 뜻이 같은지 견주어 말한 뒤 "다 했어요"를 누르세요.', '두 친구가 읽은 뜻', ['첫째 친구', '둘째 친구'], ['첫째 친구가 읽은 뜻', '둘째 친구가 읽은 뜻']),
        ],
      },
    ], '"짝이 읽은 이야기와 내가 붙인 이야기는 얼마나 같았나요?" 같은 부분과 다른 부분을 칠판에 두 줄로 적는다. 출구 2번에서 "설명 안 해도 다 통해요"를 고른 학생에게는 오늘 짝이 다르게 읽은 부분을 떠올리게 한다.', [
      exMm({ p: '친구에게 물을 질문을 두 칸에 나누어 넣어 보세요.', topic: '친구에게 묻기',
        slots: [['ok', '뜻이 전해졌는지 알 수 있는 질문'], ['no', '알 수 없는 질문']], cards: [['e1', '이 작품에서 무슨 일이 벌어지고 있어?'], ['e2', '잘 그렸지?'], ['e3', '어디를 보고 그렇게 생각했어?']],
        target: { sort: { ok: ['e1', 'e3'], no: ['e2'] } }, d: 0.15 }),
      { type: 'choice', prompt: '"내가 붙인 뜻은 설명하지 않아도 모두에게 똑같이 통한다."는 말에 대한 생각으로 알맞은 것은?', options: ['맞아요. 작품은 늘 같은 뜻이에요.', '친구에게 물어보면 내가 붙인 뜻과 다르게 읽을 수도 있어요.', '친구가 틀리게 읽은 거예요.'], answer: 1, difficulty: 0.15, explain: '읽는 사람의 경험에 따라 같은 작품도 다르게 읽을 수 있으니 물어서 확인해요.' },
      { type: 'mood', prompt: '내 작품을 친구에게 보이고 물어보니 어땠나요?' },
    ]),
    worksheet: {
      title: '내 뜻이 전해졌을까?',
      items: [
        { type: 'table', prompt: '짝에게 작품을 보여 주고 읽은 이야기와 내가 붙인 이야기를 견주어 쓰세요.', columns: ['짝이 읽은 이야기', '내가 붙인 이야기', '같은가요? (○ / △)'], cells: [['', '', ''], ['', '', ''], ['', '', '']] },
        { type: 'figure', wide: true, prompt: '두 물건이 만난 장면입니다. 짝이 읽은 뜻이 잘 전해지도록 고칠 곳 하나에 ○ 하고 이유를 쓰세요.', tool: 'collage', options: { printColors: false }, figures: [{ state: { pieces: [{ shape: 'circle', color: '노랑', size: 's', x: 200, y: 200, r: 0 }, { shape: 'rect', color: '갈색', size: 'm', x: 380, y: 240, r: 0 }] }, caption: '왼쪽 노랑 작은 동그라미(달), 오른쪽 갈색 긴 네모(신발주머니). 두 조각이 떨어져 있다.' }], answer: '두 조각이 떨어져 있어 만난 장면으로 읽기 어렵다. 겹치게 붙이면 좋다' },
        { type: 'choice', prompt: '내 뜻이 전해졌는지 알 수 있는 질문에 ○ 하세요.', options: ['잘 그렸지?', '이 그림에서 어떤 이야기가 보여?', '내 그림 마음에 들어?'], answer: '이 그림에서 어떤 이야기가 보여?' },
        { type: 'short', prompt: '짝이 나와 다르게 읽은 부분 하나와 그렇게 읽은 까닭을 쓰세요.' },
      ],
      easy: {
        note: '짝이 읽은 이야기를 말하게 하는 질문이 내 뜻이 전해졌는지 알려 줘요.',
        items: [
          { type: 'table', prompt: '짝이 읽은 이야기와 내 이야기를 쓰세요.', columns: ['짝이 읽은 이야기', '내 이야기'], cells: [['', '']] },
          { type: 'choice', prompt: '알맞은 질문에 ○ 하세요.', options: ['이 그림에서 무슨 일이 벌어져?', '잘 그렸지?'], answer: '이 그림에서 무슨 일이 벌어져?' },
          { type: 'draw', prompt: '짝이 읽은 이야기를 그림으로 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '질문 카드를 놓으면 바로 맞는지 표시돼요.',
      base: '스스로 나누고 확인해요. 짝 활동에서는 짝의 말을 그대로 적어요.',
      challenge: '질문과 상관없는 카드가 하나씩 더 섞여 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 설명하지 않아도 내 뜻이 통한다고 여긴다 → 제목을 가린 작품을 짝이 다르게 읽는 경험을 하게 한다. ② 칭찬을 받으려는 질문만 한다 → 친구가 읽은 이야기를 묻는 질문으로 바꾸게 한다. ③ 짝의 말을 바로 고쳐 주려 한다 → 먼저 끝까지 듣고 그대로 적게 한다. 준비물: 앞 시간 작품이나 활동지 그림.',
  }));

  // ───────────── 10차시 (연습) ─────────────
  lessons.push(lesson(10, {
    title: '친구 반응에서 전해진 부분과 다르게 읽힌 부분 나누기',
    objective: '친구가 한 말을 읽고 내 뜻이 전해진 부분과 다르게 읽힌 부분을 나누고, 다르게 읽힌 곳을 조각으로 고쳐 나타낼 수 있다.',
    illustration: {
      prompt: art('a paper-cut picture of a yellow circle that one child reads as the moon and another reads as a lemon'),
      scene: scene([
        { motif: 'moon', x: 100, y: 62, s: 0.8 }, { motif: 'sun', x: 400, y: 58, s: 0.7, color: 'peach' }, { motif: 'hills', y: 208 },
        { motif: 'cloud', x: 250, y: 56 }, { motif: 'flower', x: 130, y: 222 }, { motif: 'leaf', x: 360, y: 204, r: 20 },
        { motif: 'text', x: 240, y: 142, text: '같게, 다르게 읽었어요', size: 22 },
      ]),
    },
    stages: stages({
      teacher: '노랑 동그라미가 그려진 그림을 보여 주고 "이것을 달로 읽은 사람과 레몬으로 읽은 사람, 누가 틀렸나요?" 하고 묻는다. 둘 다 그렇게 읽은 까닭이 있을 수 있으니 틀렸다고 하기보다 내 뜻이 전해졌는지 견주는 것이라고 짚는다. "친구가 다르게 읽으면 내가 못 그린 거예요"라는 생각을 짚는다. 시연 단추로 친구 말 카드가 두 칸으로 나뉘는 모습을 보여 준다.',
      student: '같은 노랑 동그라미를 보고 떠오르는 것을 하나 말하고, 친구와 같은지 견주어 봅시다.',
      demo: { tool: 'mindmap', options: { topic: '노랑 동그라미', slots: [{ id: 'same', label: '내 뜻이 전해졌어요' }, { id: 'diff', label: '다르게 읽었어요' }], cards: [{ id: 'd1', text: '밤하늘의 달 같아요' }, { id: 'd2', text: '레몬 한 조각 같아요' }] }, sequence: [{ sort: { same: ['d1'], diff: ['d2'] } }] },
    }, [
      {
        id: 'a1', title: '활동 1. 친구 말에서 같게·다르게 읽은 곳 나누기', minutes: 12, tool: 'mindmap',
        teacher: '"내가 붙인 뜻은 \'밤하늘의 달\'이에요. 친구 말이 같은 뜻이면 왼쪽, 다른 뜻이면 오른쪽이에요." 낱말 하나(달, 밤, 밝다)가 겹치는지 보게 한다. "다르게 읽혔다고 틀린 게 아니에요. 어디서 갈렸는지를 찾는 거예요"라고 짚는다. 도전 단계의 "그림이 컸어요" 같은 카드는 뜻이 아니라 크기 이야기라 넣지 않는다.',
        task: '친구가 한 말이 내가 붙인 뜻과 같은지 다른지 나누어요.',
        levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          mm({ p: '내가 붙인 뜻은 "밤하늘의 달"이에요. 친구 말을 두 칸에 나누어 넣어 보세요.', topic: '밤하늘의 달',
            slots: [['same', '내 뜻과 같아요'], ['diff', '다르게 읽었어요']],
            cards: [['a1', '어두운 밤에 떠 있는 둥근 달 같아요'], ['a2', '노란 레몬이 하늘에 떠 있어요'], ['a3', '밤하늘 한가운데 반짝이는 달이에요'], ['a4', '노란색 풍선이에요']], extra: ['a5', '그림이 너무 커요'],
            target: { sort: { same: ['a1', 'a3'], diff: ['a2', 'a4'] } }, d: 0.2,
            hints: ['내가 붙인 뜻의 낱말(밤·달)이 친구 말에도 있는지 찾아 견주어요.'] }),
          mm({ p: '내가 붙인 뜻은 "비 오는 날 우산의 마음"이에요. 친구 말을 두 칸에 나누어 넣어 보세요.', topic: '비 오는 날 우산',
            slots: [['same', '내 뜻과 같아요'], ['diff', '다르게 읽었어요']],
            cards: [['b1', '비를 막아 주는 든든한 우산이에요'], ['b2', '해를 가리는 양산 같아요'], ['b3', '젖은 땅 위에 서 있는 우산이에요'], ['b4', '버섯이 자라고 있어요']], extra: ['b5', '색이 너무 어두워요'],
            target: { sort: { same: ['b1', 'b3'], diff: ['b2', 'b4'] } }, d: 0.25,
            hints: ['비라는 낱말이 담긴 말과 비와 상관없이 읽은 말을 가려요.'] }),
          mm({ p: '내가 붙인 뜻은 "차갑게 식은 바다"예요. 친구 말을 두 칸에 나누어 넣어 보세요.', topic: '차갑게 식은 바다',
            slots: [['same', '내 뜻과 같아요'], ['diff', '다르게 읽었어요']],
            cards: [['c1', '파란색이 차갑고 시원해 보여요'], ['c2', '포근하게 데워진 바다예요'], ['c3', '파도가 얼어붙은 듯해요'], ['c4', '따뜻한 목욕물 같아요']], extra: ['c5', '바다에 가 본 적 없어요'],
            target: { sort: { same: ['c1', 'c3'], diff: ['c2', 'c4'] } }, d: 0.3,
            predict: { q: '친구가 다르게 읽었다면 내 작품은 잘못 만든 것일까요?', options: ['잘못 만든 거예요', '어디서 갈렸는지 찾아볼 수 있어요'], answer: 1 },
            conclude: '다르게 읽힌 곳은 틀린 곳이 아니라 내 뜻이 어디서 달리 전해졌는지 알려 주는 단서예요.' }),
        ],
      },
      {
        id: 'a2', title: '활동 2. 다르게 읽힌 곳을 고쳐 나타내기', minutes: 13, tool: 'collage',
        teacher: '"친구가 레몬으로 읽었다면 달로 읽히려면 무엇을 바꿀까요?" 밤하늘이 보이도록 어두운 바탕 조각을 깔고 노랑 동그라미를 크게 붙이는 시범을 보인다. 고친 곳이 하나이면 충분하다고 짚어, 작품을 통째로 다시 만들려는 학생을 말린다.',
        task: '친구가 다르게 읽은 곳을 한 군데만 골라 조각을 바꾸거나 더해요.',
        levels: { easy: { shapes: ['circle', 'rect', 'star', 'semi'], colors: ['노랑', '검정', '파랑', '하양'] }, base: { shapes: ['circle', 'rect', 'star', 'semi', 'triangle'], colors: ['노랑', '검정', '파랑', '하양', '보라', '갈색'] }, challenge: {} },
        items: [
          { prompt: '달로 읽히게 고쳐요. 큰 검정 긴 네모 밤하늘 위에 큰 노랑 동그라미 달 하나를 겹쳐 붙여요.', target: { has: [{ shape: 'rect', color: '검정', size: 'l', n: 1 }, { shape: 'circle', color: '노랑', size: 'l', n: 1 }], overlap: 1 }, difficulty: 0.2 },
          { prompt: '차가운 바다로 읽히게 고쳐요. 큰 파랑 반원 파도 둘과 작은 하양 동그라미 거품 셋 이상을 붙여요.', target: { has: [{ shape: 'semi', color: '파랑', size: 'l', n: 2 }, { shape: 'circle', color: '하양', size: 's', min: 3 }] }, difficulty: 0.25 },
          { prompt: '친구가 다르게 읽은 곳을 한 군데 고쳐 나타내고 점검해요.', target: { selfCheck: ['친구가 다르게 읽은 곳을 한 군데 골랐어요', '그곳을 조각으로 바꾸거나 더했어요', '고친 뒤 친구에게 다시 읽어 달라고 했어요'], minPieces: 4 }, difficulty: 0.1 },
        ],
      },
    ], '"친구 말에서 내 뜻이 전해진 곳과 다르게 읽힌 곳을 하나씩 말해 볼까요?" 두세 명이 고친 곳과 까닭을 말하게 한다. 출구 2번에서 "다르게 읽히면 내가 못 한 거예요"를 고른 학생에게는 둘 다 그렇게 읽은 까닭이 있었던 노랑 동그라미 사례를 떠올리게 한다.', [
      exMm({ p: '내가 붙인 뜻은 "아침 해"예요. 친구 말을 두 칸에 나누어 넣어 보세요.', topic: '아침 해',
        slots: [['same', '내 뜻과 같아요'], ['diff', '다르게 읽었어요']], cards: [['e1', '아침에 떠오르는 따뜻한 해예요'], ['e2', '저녁에 지는 노을이에요'], ['e3', '아침 하늘이 밝아 오는 느낌이에요']],
        target: { sort: { same: ['e1', 'e3'], diff: ['e2'] } }, d: 0.15 }),
      { type: 'choice', prompt: '친구가 내 작품을 다르게 읽었어요. 알맞은 생각은?', options: ['친구가 틀렸어요.', '어디서 읽는 뜻이 갈렸는지 찾아보고 고칠 수 있어요.', '작품을 버려야 해요.'], answer: 1, difficulty: 0.15, explain: '다르게 읽힌 곳은 내 뜻이 전해지는 길을 고칠 수 있는 단서예요.' },
      { type: 'mood', prompt: '친구 반응으로 내 작품을 돌아보니 어땠나요?' },
    ]),
    worksheet: {
      title: '같게 읽고, 다르게 읽고',
      items: [
        { type: 'table', prompt: '친구의 말에서 내 뜻이 전해진 곳과 다르게 읽힌 곳을 쓰세요.', columns: ['친구 말', '전해졌나요? (○ / △)', '고칠 곳'], cells: [['밤하늘의 달 같아요', '○', ''], ['', '', ''], ['', '', '']] },
        { type: 'figure', wide: true, prompt: '달로 읽히도록 노랑 동그라미 곁에 별 조각 둘을 더 그려 넣으세요.', tool: 'collage', options: { printColors: false }, figures: [{ state: { pieces: [{ shape: 'rect', color: '검정', size: 'l', x: 280, y: 200, r: 0 }, { shape: 'circle', color: '노랑', size: 'l', x: 380, y: 160, r: 0 }] }, caption: '검정 큰 긴 네모(밤하늘) 위 노랑 큰 동그라미' }], answer: '별 조각 두 개를 달 곁 밤하늘에 그린다' },
        { type: 'choice', prompt: '내가 붙인 뜻과 다르게 읽은 친구 말에 ○ 하세요. (내 뜻: 밤하늘의 달)', options: ['어두운 밤에 뜬 달 같아요', '노란 레몬 같아요', '밤하늘이 환해요'], answer: '노란 레몬 같아요' },
        { type: 'short', prompt: '친구가 다르게 읽은 곳을 한 군데 고친다면 어떻게 고칠지 쓰세요.' },
      ],
      easy: {
        note: '내 뜻의 낱말이 친구 말에도 있으면 같게 읽은 거예요.',
        items: [
          { type: 'table', prompt: '친구 말이 같은지 쓰세요.', columns: ['친구 말', '같아요 / 달라요'], cells: [['', '']] },
          { type: 'choice', prompt: '내 뜻과 같은 말에 ○ 하세요. (내 뜻: 차가운 바다)', options: ['파란색이 차가워 보여요', '따뜻한 목욕물 같아요'], answer: '파란색이 차가워 보여요' },
          { type: 'draw', prompt: '고친 곳이 보이는 그림을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 놓으면 바로 맞는지 표시돼요. 색종이는 모양 세 가지, 색 네 가지예요.',
      base: '스스로 나누고 확인해요. 고르개는 모양 다섯 가지, 색 여섯 가지예요.',
      challenge: '뜻과 상관없는 카드가 하나씩 더 섞여 있어요. 색종이는 모든 모양·색 가운데 골라 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 친구가 다르게 읽으면 내가 못 만든 것이라 여긴다 → 노랑 동그라미를 달·레몬으로 읽은 둘 다 까닭이 있음을 보인다. ② 작품 전체를 다시 만들려 한다 → 고칠 곳을 한 군데만 고르게 한다. ③ 친구 말의 낱말을 견주지 않고 느낌으로만 판단한다 → 내 뜻의 낱말이 친구 말에 있는지 찾아 밑줄을 긋게 한다.',
  }));

  // ───────────── 11차시 (확장) ─────────────
  lessons.push(lesson(11, {
    title: '안 전해진 까닭을 찾아 알맞은 고치는 방법 이어 보기',
    objective: '친구 반응에서 뜻이 덜 전해진 까닭을 크기·색·자리·글 가운데에서 찾고, 그에 알맞은 고치는 방법을 골라 작품에 적용할 수 있다.',
    illustration: {
      prompt: art('a child adjusting a paper-cut night scene by adding a large pale moon against a dark sky after a friend gave feedback'),
      scene: scene([
        { motif: 'moon', x: 410, y: 58, s: 0.9 }, { motif: 'star', x: 90, y: 54 }, { motif: 'hills', y: 208 },
        { motif: 'house', x: 120, y: 214 }, { motif: 'tree', x: 350, y: 216 }, { motif: 'bird', x: 250, y: 88 },
        { motif: 'text', x: 240, y: 142, text: '까닭을 찾아 고쳐요', size: 22 },
      ]),
    },
    stages: stages({
      teacher: '"친구가 \'밤인지 모르겠어요\'라고 했어요. 무엇을 바꾸면 밤으로 읽힐까요?" 크기·색·자리·글 네 가지 가운데 어디가 문제인지 학생이 말하게 한다. "친구가 못 알아본 건 친구 눈이 나빠서예요"라는 생각을 짚는다. 시연 단추로 친구 반응과 고치는 방법이 이어지는 모습을 보여 준다.',
      student: '"밤인지 모르겠어요"라는 말을 들었다면 무엇을 바꾸어 볼지 말해 봅시다.',
      demo: { tool: 'mindmap', options: { mode: 'match', topic: '고치는 방법', slots: [{ id: 'd1', label: '밤인지 모르겠어요 (바탕이 밝아요)' }], cards: [{ id: 'dc1', text: '바탕을 어두운 색으로 칠해요' }, { id: 'dc2', text: '글자를 크게 써요' }] }, sequence: [{ match: { d1: 'dc1' } }] },
    }, [
      {
        id: 'a1', title: '활동 1. 친구 반응과 알맞은 고치는 방법 이어 보기', minutes: 12, tool: 'mindmap',
        teacher: '"친구 말 속에서 \'작아서\', \'색이\', \'어디에 있는지\' 같은 단서 낱말을 찾아보세요." 단서가 크기이면 크게, 색이면 대비되는 색으로, 자리이면 중심으로 옮기고, 설명이 필요하면 글 한 줄을 더한다고 짝지어 말한다. 도전 단계의 "다시 처음부터 그려요" 카드는 필요 이상으로 크게 고치는 방법이라 짝이 없다.',
        task: '친구 반응의 단서 낱말을 찾아 알맞은 고치는 방법과 이어요.',
        levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          mm({ p: '친구 반응과 알맞은 고치는 방법 카드를 이어 보세요.', mode: 'match', topic: '반응에 맞는 고치기',
            slots: [['s1', '"달이 너무 작아서 잘 안 보여요"'], ['s2', '"밤인지 낮인지 모르겠어요"'], ['s3', '"무슨 이야기인지 모르겠어요"']],
            cards: [['m1', '달 조각을 더 크게 붙여요'], ['m2', '바탕을 어두운 색으로 바꾸어요'], ['m3', '제목이나 글 한 줄을 곁에 더해요'], ['m4', '모든 조각을 새로 그려요']], extra: ['m5', '친구를 탓하며 설명을 포기해요'],
            target: { match: { s1: 'm1', s2: 'm2', s3: 'm3' } }, d: 0.2,
            hints: ['친구 말에서 크기·바탕·이야기 단서 낱말을 찾아, 가장 작게 고쳐서 풀리는 방법을 이어요.'] }),
          mm({ p: '친구 반응과 알맞은 고치는 방법 카드를 이어 보세요.', mode: 'match', topic: '반응에 맞는 고치기',
            slots: [['t1', '"우산이 구석에 있어서 눈에 안 들어와요"'], ['t2', '"우산 색이 바탕이랑 비슷해요"'], ['t3', '"비가 오는지 모르겠어요"']],
            cards: [['q1', '우산을 가운데로 옮겨요'], ['q2', '바탕과 크게 다른 색으로 우산을 바꾸어요'], ['q3', '빗줄기 조각을 더해요'], ['q4', '우산을 지워요']], extra: ['q5', '더 이상 손대지 않아요'],
            target: { match: { t1: 'q1', t2: 'q2', t3: 'q3' } }, d: 0.25,
            hints: ['자리·색·빠진 모습 가운데 친구가 말한 문제와 맞는 고치기를 이어요.'] }),
          mm({ p: '친구 반응마다 고쳐야 할 곳을 나누어 넣어 보세요.', topic: '고쳐야 할 곳',
            slots: [['size', '크기'], ['color', '색'], ['place', '자리']],
            cards: [['c1', '"별이 점처럼 작아요"'], ['c2', '"하늘색이 땅 색이랑 섞여 보여요"'], ['c3', '"주인공이 가장자리에 있어요"'], ['c4', '"달이 손톱만 해요"'], ['c5', '"바다와 하늘이 같은 파랑이에요"']], extra: ['c6', '"제목이 마음에 들어요"'],
            target: { sort: { size: ['c1', 'c4'], color: ['c2', 'c5'], place: ['c3'] } }, d: 0.3,
            predict: { q: '친구 반응마다 고칠 곳은 똑같을까요?', options: ['똑같아요', '반응에 따라 달라요'], answer: 1 },
            conclude: '친구가 한 말의 단서를 읽으면 크기·색·자리 가운데 어디를 고칠지 알 수 있어요.' }),
        ],
      },
      {
        id: 'a2', title: '활동 2. 알맞은 방법으로 작품 고치기', minutes: 13, tool: 'collage',
        teacher: '"어두운 바탕 위에 노랑을 붙이면 달이 더 잘 보이는 까닭이 무엇일까요?" 밝은 색과 어두운 색이 맞닿으면 눈에 띈다고 대비를 짚는다. 같은 색을 붙이고 "안 보여요" 하는 학생에게는 바탕과 다른 색으로 바꾸게 한다.',
        task: '친구 반응에 맞춰 크기를 키우거나 대비되는 색으로 바꾸어 붙여요.',
        levels: { easy: { shapes: ['circle', 'rect', 'star'], colors: ['노랑', '검정', '하양', '보라'] }, base: { shapes: ['circle', 'rect', 'star', 'semi', 'triangle'], colors: ['노랑', '검정', '하양', '보라', '파랑', '갈색'] }, challenge: {} },
        items: [
          { prompt: '달이 잘 보이도록 고쳐요. 큰 검정 긴 네모 위에 큰 노랑 동그라미 하나를 맞닿게 붙여요.', target: { has: [{ shape: 'rect', color: '검정', size: 'l', n: 1 }, { shape: 'circle', color: '노랑', size: 'l', n: 1 }], contrast: 'light-dark' }, difficulty: 0.2 },
          { prompt: '별이 눈에 띄도록 고쳐요. 큰 보라 긴 네모 바탕 위에 노랑 별을 세 개 이상 겹쳐 붙여요.', target: { has: [{ shape: 'rect', color: '보라', size: 'l', n: 1 }, { shape: 'star', color: '노랑', min: 3 }], overlap: 3 }, difficulty: 0.25 },
          { prompt: '친구 반응에 맞는 방법으로 내 작품을 한 곳 고치고 점검해요.', target: { selfCheck: ['친구 반응의 단서 낱말을 찾았어요', '그 반응에 맞는 방법으로 한 곳을 고쳤어요', '고친 뒤 친구에게 뜻이 잘 전해지는지 다시 물었어요'], minPieces: 4 }, difficulty: 0.1 },
        ],
      },
    ], '"친구 말의 어떤 낱말을 보고 고칠 곳을 정했나요?" 두세 명이 단서 낱말과 고친 방법을 말하게 한다. 출구 2번에서 "친구 눈이 나빠서 못 알아봤어요"를 고른 학생에게는 오늘 반응마다 고칠 수 있는 곳이 따로 있었던 일을 떠올리게 한다.', [
      exMm({ p: '친구 반응과 알맞은 고치는 방법 카드를 이어 보세요.', mode: 'match', topic: '반응에 맞는 고치기',
        slots: [['e1', '"눈사람이 너무 작아요"'], ['e2', '"눈이랑 바탕이 똑같은 하양이에요"']], cards: [['x1', '눈사람을 더 크게 붙여요'], ['x2', '바탕을 다른 색으로 바꾸어요'], ['x3', '작품을 버려요']],
        target: { match: { e1: 'x1', e2: 'x2' } }, d: 0.15 }),
      { type: 'choice', prompt: '"무슨 이야기인지 모르겠어요"라는 말을 들었을 때 알맞은 고치기는?', options: ['모든 조각을 새로 그려요.', '그림 곁에 제목이나 글 한 줄을 더해요.', '말을 못 들은 척해요.'], answer: 1, difficulty: 0.15, explain: '이야기가 전해지지 않을 때는 글 한 줄이 그림의 뜻을 이어 줄 수 있어요.' },
      { type: 'mood', prompt: '친구 말에 맞춰 고쳐 보니 어땠나요?' },
    ]),
    worksheet: {
      title: '친구 반응에 맞춰 고치기',
      items: [
        { type: 'table', prompt: '친구 반응과 내가 고친 방법을 쓰세요.', columns: ['친구 반응', '단서 낱말', '고친 방법'], cells: [['달이 너무 작아요', '작아서', '달을 크게 붙인다'], ['', '', ''], ['', '', '']] },
        { type: 'figure', wide: true, prompt: '달이 잘 보이도록 바탕과 달의 색 차이를 살려 다시 그려 보세요. 어느 조각을 바꿀지 ○ 하세요.', tool: 'collage', options: { printColors: false }, figures: [{ state: { pieces: [{ shape: 'rect', color: '하양', size: 'l', x: 280, y: 200, r: 0 }, { shape: 'circle', color: '노랑', size: 's', x: 380, y: 160, r: 0 }] }, caption: '하양 큰 긴 네모(바탕) 위 노랑 작은 동그라미(달)' }], answer: '바탕을 어두운 검정이나 보라로 바꾸고 달을 더 크게 붙인다' },
        { type: 'choice', prompt: '"별이 점처럼 작아요"에 알맞은 고치기에 ○ 하세요.', options: ['별 조각을 더 크게 붙인다', '바탕을 전부 지운다', '글자를 줄인다'], answer: '별 조각을 더 크게 붙인다' },
        { type: 'short', prompt: '내 작품에서 고칠 곳 하나와 고치는 방법을 쓰세요.' },
      ],
      easy: {
        note: '친구 말이 크기면 크게, 색이면 다른 색으로, 자리면 가운데로, 이야기면 글 한 줄을 더해요.',
        items: [
          { type: 'table', prompt: '친구 반응에 맞는 고치기를 쓰세요.', columns: ['친구 반응', '고치기'], cells: [['너무 작아요', '']] },
          { type: 'choice', prompt: '"너무 작아요"에 알맞은 고치기에 ○ 하세요.', options: ['더 크게 붙인다', '지운다'], answer: '더 크게 붙인다' },
          { type: 'draw', prompt: '고친 작품을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 놓으면 바로 맞는지 표시돼요. 색종이는 모양 세 가지, 색 네 가지예요.',
      base: '스스로 이은 뒤 확인해요. 고르개는 모양 다섯 가지, 색 여섯 가지예요.',
      challenge: '짝이 없는 카드가 하나씩 더 섞여 있어요. 색종이는 모든 모양·색 가운데 골라 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 안 전해진 까닭을 친구 탓으로 돌린다 → 친구 말의 단서 낱말을 찾게 한다. ② 한 가지 지적에 작품 전체를 새로 만든다 → 가장 작게 고쳐서 풀리는 방법을 먼저 고르게 한다. ③ 바탕과 비슷한 색을 그대로 쓴다 → 바탕과 맞닿은 조각이 밝고 어두운지 견주게 한다.',
  }));

  // ───────────── 12차시 (확장) ─────────────
  lessons.push(lesson(12, {
    title: '학교 둘레와 나의 관계에서 새로 든 생각 적기',
    objective: '학교 안 한 곳을 다시 살피고 처음 생각과 달라진 점을 나누어, 나와 둘레가 어떤 관계인지 새로 든 생각을 한 문장으로 적을 수 있다.',
    illustration: {
      prompt: art('a child sitting beside a school flower bed noticing small details, with thought bubbles that change from plain to curious'),
      scene: scene([
        { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 100, y: 52 }, { motif: 'hills', y: 208 },
        { motif: 'flower', x: 110, y: 222, s: 1.2 }, { motif: 'flower', x: 190, y: 224, color: 'buttercup' }, { motif: 'tree', x: 360, y: 216 },
        { motif: 'text', x: 240, y: 142, text: '나와 둘레, 새로 든 생각', size: 22 },
      ]),
    },
    stages: stages({
      teacher: '"화단 곁을 지나다닌 지 오래됐는데, 오늘 처음 눈에 들어온 것이 있나요?" 학생이 처음 한 말(그냥 꽃이 있어요)과 지금 한 말(내가 지나갈 때마다 꽃잎이 흔들렸어요)을 나란히 적는다. "둘레는 늘 그 자리에 있을 뿐 나와 상관없어요"라는 생각을 짚고, 오늘은 나와 둘레가 서로 어떤 관계인지 생각해 본다고 연다. 시연 단추로 생각 카드가 이전·지금 칸으로 나뉘는 모습을 보여 준다.',
      student: '학교에서 늘 지나다니던 곳 하나를 떠올리고, 오늘 새로 눈에 띈 것을 말해 봅시다.',
      demo: { tool: 'mindmap', options: { topic: '학교 화단', slots: [{ id: 'before', label: '처음 생각' }, { id: 'after', label: '새로 든 생각' }], cards: [{ id: 'd1', text: '그냥 꽃이 있어요' }, { id: 'd2', text: '내가 지날 때마다 꽃잎이 흔들려요' }] }, sequence: [{ sort: { before: ['d1'], after: ['d2'] } }] },
    }, [
      {
        id: 'a1', title: '활동 1. 처음 생각과 새로 든 생각 나누기', minutes: 12, tool: 'mindmap',
        teacher: '"이 말은 둘레만 설명하나요, 나와 둘레가 서로 영향을 주고받는 모습까지 담았나요?" 새로 든 생각에는 \'내가 ~할 때 둘레가 ~해요\'처럼 나와 둘레가 함께 나온다고 기준을 세운다. 도전 단계의 "화단은 학교 앞에 있어요" 같은 카드는 위치만 말해 생각이 달라진 것이 아니다.',
        task: '카드를 읽고 처음 생각인지 나와 둘레의 관계를 담은 새로 든 생각인지 나누어요.',
        levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          mm({ p: '학교 화단에 대한 생각을 두 칸에 나누어 넣어 보세요.', topic: '학교 화단',
            slots: [['before', '처음 생각'], ['after', '나와 둘레를 담은 새 생각']],
            cards: [['a1', '꽃이 피어 있어요'], ['a2', '내가 지날 때마다 꽃잎이 흔들려요'], ['a3', '꽃이 있어서 내 발걸음이 느려져요'], ['a4', '그냥 화단이에요']], extra: ['a5', '화단은 학교 앞에 있어요'],
            target: { sort: { before: ['a1', 'a4'], after: ['a2', 'a3'] } }, d: 0.2,
            hints: ['말 속에 "내가"와 둘레가 함께 나오고 서로 영향을 주고받는지 찾아봐요.'] }),
          mm({ p: '복도 창문에 대한 생각을 두 칸에 나누어 넣어 보세요.', topic: '복도 창문',
            slots: [['before', '처음 생각'], ['after', '나와 둘레를 담은 새 생각']],
            cards: [['b1', '유리창이 있어요'], ['b2', '창에 얼굴을 대면 내 숨이 하얗게 맺혀요'], ['b3', '창을 닦으면 내 마음도 맑아져요'], ['b4', '창문은 그냥 창문이에요']], extra: ['b5', '창문은 네모예요'],
            target: { sort: { before: ['b1', 'b4'], after: ['b2', 'b3'] } }, d: 0.25,
            hints: ['내가 하는 행동과 창문이 달라지는 모습이 함께 있는 말을 골라요.'] }),
          mm({ p: '운동장 모래에 대한 생각을 두 칸에 나누어 넣어 보세요.', topic: '운동장 모래',
            slots: [['before', '처음 생각'], ['after', '나와 둘레를 담은 새 생각']],
            cards: [['c1', '노란 모래예요'], ['c2', '내가 걸어간 자리에 발자국 길이 남아요'], ['c3', '모래도 내가 놀 때 같이 놀아 주는 것 같아요'], ['c4', '모래는 발에 밟히는 것이에요']], extra: ['c5', '모래는 학교 뒤편에 있어요'],
            target: { sort: { before: ['c1', 'c4'], after: ['c2', 'c3'] } }, d: 0.3,
            predict: { q: '늘 보던 둘레에서도 나와의 새로운 관계를 찾을 수 있을까요?', options: ['찾을 수 없어요', '찾을 수 있어요'], answer: 1 },
            conclude: '늘 보던 곳도 내가 하는 일과 함께 다시 보면 나와 둘레의 새로운 관계가 보여요.' }),
        ],
      },
      {
        id: 'a2', title: '활동 2. 나와 둘레의 관계를 한 장면으로 나타내기', minutes: 13, tool: 'collage',
        teacher: '"나를 나타내는 조각과 둘레를 나타내는 조각이 어떻게 만나고 있나요?" 겹쳐 붙이거나 맞닿게 붙여 서로 영향을 주고받는 모습을 보인다. 둘레만 크게 붙이고 나를 빠뜨린 학생에게는 오늘 새로 든 생각에서 \'내가\'가 어디 있는지 묻는다.',
        task: '나를 나타내는 조각과 둘레를 나타내는 조각을 맞닿게 붙여 관계를 나타내요.',
        levels: { easy: { shapes: ['circle', 'leaf', 'rect'], colors: ['분홍', '초록', '노랑', '갈색'] }, base: { shapes: ['circle', 'leaf', 'rect', 'semi', 'star'], colors: ['분홍', '초록', '노랑', '갈색', '파랑', '하양'] }, challenge: {} },
        items: [
          { prompt: '내가 화단을 지나는 장면이에요. 보통 분홍 동그라미 나 하나와 초록 나뭇잎 셋 이상을 맞닿게 붙여요.', target: { has: [{ shape: 'circle', color: '분홍', size: 'm', n: 1 }, { shape: 'leaf', color: '초록', min: 3 }], overlap: 1 }, difficulty: 0.2 },
          { prompt: '내가 모래 위를 걷는 장면이에요. 큰 노랑 긴 네모 모래 위에 작은 갈색 동그라미 발자국을 네 개 이상 붙여요.', target: { has: [{ shape: 'rect', color: '노랑', size: 'l', n: 1 }, { shape: 'circle', color: '갈색', size: 's', min: 4 }], overlap: 4 }, difficulty: 0.25 },
          { prompt: '학교 둘레와 나의 관계를 한 장면으로 나타내고 점검해요.', target: { selfCheck: ['나를 나타내는 조각이 들어 있어요', '둘레를 나타내는 조각이 나와 맞닿아 있어요', '새로 든 생각을 짝에게 한 문장으로 말했어요'], minPieces: 4 }, difficulty: 0.1 },
        ],
      },
    ], '"오늘 새로 든 생각을 한 문장으로 말해 볼까요? \'나는 ~할 때 둘레가 ~해서 ~라고 생각했어요.\'" 두세 명이 이 틀로 말하게 한다. 출구 2번에서 "둘레는 나와 상관없어요"를 고른 학생에게는 활동 1의 모래 발자국 사례를 떠올리게 한다.', [
      exMm({ p: '운동장 철봉에 대한 생각을 두 칸에 나누어 넣어 보세요.', topic: '운동장 철봉',
        slots: [['before', '처음 생각'], ['after', '나와 둘레를 담은 새 생각']], cards: [['e1', '쇠 막대예요'], ['e2', '내가 매달리면 철봉이 살짝 흔들려요'], ['e3', '철봉이 있으면 내 팔이 튼튼해져요']],
        target: { sort: { before: ['e1'], after: ['e2', 'e3'] } }, d: 0.15 }),
      { type: 'choice', prompt: '나와 둘레의 관계를 담은 생각은 어느 것인가요?', options: ['교문은 크고 높아요.', '내가 교문을 지날 때마다 아침 공기가 달라져요.', '교문은 학교 앞에 있어요.'], answer: 1, difficulty: 0.15, explain: '내가 하는 일과 둘레가 함께 나와 서로 영향을 주고받는 모습이 담겨야 해요.' },
      { type: 'mood', prompt: '둘레를 다시 살펴보니 어땠나요?' },
    ]),
    worksheet: {
      title: '나와 둘레, 새로 든 생각',
      items: [
        { type: 'table', prompt: '학교 안 한 곳을 정해 처음 생각과 새로 든 생각을 쓰세요.', columns: ['장소', '처음 생각', '새로 든 생각(나와 둘레)'], cells: [['화단', '꽃이 있어요', '내가 지날 때마다 꽃잎이 흔들려요'], ['', '', ''], ['', '', '']] },
        { type: 'figure', wide: true, prompt: '나를 나타내는 조각 곁에 둘레를 나타내는 조각을 더 그려 맞닿게 하세요.', tool: 'collage', options: { printColors: false }, figures: [{ state: { pieces: [{ shape: 'circle', color: '분홍', size: 'm', x: 280, y: 200, r: 0 }, { shape: 'leaf', color: '초록', size: 'm', x: 380, y: 200, r: 90 }] }, caption: '가운데 분홍 동그라미(나), 오른쪽 초록 나뭇잎(둘레)' }], answer: '나 곁 왼쪽과 위쪽에도 나뭇잎 조각을 하나씩 맞닿게 그린다' },
        { type: 'choice', prompt: '새로 든 생각에 ○ 하세요.', options: ['꽃이 피어 있어요', '꽃이 있어서 내 발걸음이 느려져요', '화단은 학교 앞에 있어요'], answer: '꽃이 있어서 내 발걸음이 느려져요' },
        { type: 'short', prompt: '"나는 ~할 때 둘레가 ~해서 ~라고 생각했어요."의 틀로 오늘 새로 든 생각을 쓰세요.' },
      ],
      easy: {
        note: '새로 든 생각에는 "내가"와 둘레가 함께 나오고 서로 달라지는 모습이 담겨요.',
        items: [
          { type: 'table', prompt: '처음 생각과 새 생각을 쓰세요.', columns: ['처음 생각', '새로 든 생각'], cells: [['', '']] },
          { type: 'choice', prompt: '나와 둘레가 함께 나온 말에 ○ 하세요.', options: ['내가 걸으면 발자국이 남아요', '모래는 노래요'], answer: '내가 걸으면 발자국이 남아요' },
          { type: 'draw', prompt: '나와 둘레가 만난 장면을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 놓으면 바로 맞는지 표시돼요. 색종이는 모양 세 가지, 색 네 가지예요.',
      base: '스스로 나누고 확인해요. 고르개는 모양 다섯 가지, 색 여섯 가지예요.',
      challenge: '위치만 말하는 카드가 하나씩 더 섞여 있어요. 색종이는 모든 모양·색 가운데 골라 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 둘레는 나와 상관없다고 여긴다 → 내가 지나갈 때 달라지는 것을 찾게 한다. ② 새 생각이 둘레의 모습 설명에서 멈춘다 → "내가" 낱말이 있는지 밑줄로 확인한다. ③ 나를 나타내는 조각을 빠뜨린다 → 나와 둘레가 맞닿은 장면이 되도록 한다. 준비물: 학교 안 한 곳(화단·복도 창·모래터)을 미리 정해 둔다.',
  }));

  // ───────────── 13차시 (핵심) ─────────────
  lessons.push(lesson(13, {
    title: '과자 광고에서 크게 보여 준 것과 작게 적힌 것 나누기',
    objective: '광고 이미지에서 크게 강조한 것과 작은 글씨로 적힌 것을 나누고, 그렇게 배치한 까닭을 한 문장으로 말할 수 있다.',
    illustration: {
      prompt: art('a paper-cut snack package advertisement with a huge smiling face and fireworks while a tiny nutrition table sits in the corner'),
      scene: scene([
        { motif: 'star', x: 90, y: 56, s: 1.2 }, { motif: 'star', x: 400, y: 62 }, { motif: 'hills', y: 208 },
        { motif: 'flower', x: 130, y: 222, s: 1.3 }, { motif: 'cloud', x: 330, y: 56 },
        { motif: 'text', x: 240, y: 140, text: '크게, 작게, 왜 그렇게?', size: 22 },
      ]),
    },
    stages: stages({
      teacher: '가상의 과자 광고(상품 이름은 "바삭별")를 칠판에 그려 두거나 인쇄해 띄운다. "이 광고에서 가장 먼저 눈에 들어온 것은 무엇인가요? 가장 작아서 못 보고 지나갈 뻔한 것은요?" 크게 보인 것과 작게 적힌 것을 두 칸으로 나눈다. "광고에 나온 그림은 사실을 그대로 보여 줘요"라는 생각을 짚고, 무엇을 크게 하고 무엇을 작게 하는지는 만든 사람이 고른 것이라고 연다. 시연 단추로 카드가 두 칸에 나뉘는 모습을 보여 준다.',
      student: '광고에서 가장 먼저 눈에 들어온 것과 가장 작게 적힌 것을 하나씩 말해 봅시다.',
      demo: { tool: 'mindmap', options: { topic: '바삭별 과자 광고', slots: [{ id: 'big', label: '크게 보여 준 것' }, { id: 'small', label: '작게 적힌 것' }], cards: [{ id: 'd1', text: '환하게 웃는 아이 얼굴' }, { id: 'd2', text: '구석의 영양 성분표' }] }, sequence: [{ sort: { big: ['d1'], small: ['d2'] } }] },
    }, [
      {
        id: 'a1', title: '활동 1. 광고 장면에서 크게·작게 나누기', minutes: 12, tool: 'mindmap',
        teacher: '"이 카드는 광고에서 눈에 확 띄는 쪽인가요, 구석에 작게 있는 쪽인가요?" 광고는 사고 싶어지게 하는 것(웃는 얼굴·큰 글씨)을 크게, 알아야 하지만 사고 싶은 마음을 줄일 수 있는 것(성분·주의)을 작게 두는 일이 많다고 짚는다. 그렇다고 광고가 무조건 거짓은 아니며, 무엇이 크고 무엇이 작은지 읽는 것이 오늘의 공부다. 도전 단계의 "광고 모델 이름" 같은 카드는 이 광고 어디에도 없다.',
        task: '광고 카드를 읽고 크게 보여 준 것인지 작게 적힌 것인지 나누어요.',
        levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          mm({ p: '"바삭별" 과자 광고의 장면을 두 칸에 나누어 넣어 보세요.', topic: '바삭별 과자 광고',
            slots: [['big', '크게 보여 준 것'], ['small', '작게 적힌 것']],
            cards: [['g1', '"맛 폭발!" 큰 글씨'], ['g2', '환하게 웃는 아이 얼굴'], ['g3', '구석에 작게 적힌 영양 성분표'], ['g4', '"사진은 실제와 다를 수 있어요" 작은 글']], extra: ['g5', '광고 모델의 이름'],
            target: { sort: { big: ['g1', 'g2'], small: ['g3', 'g4'] } }, d: 0.2,
            hints: ['한눈에 먼저 들어오는 것인지, 일부러 찾아야 보이는 것인지 광고 크기를 떠올려요.'] }),
          mm({ p: '"얼음꽃" 아이스크림 광고의 장면을 두 칸에 나누어 넣어 보세요.', topic: '얼음꽃 아이스크림 광고',
            slots: [['big', '크게 보여 준 것'], ['small', '작게 적힌 것']],
            cards: [['h1', '하늘만큼 솟은 크림 사진'], ['h2', '"시원함 두 배!" 굵은 글씨'], ['h3', '아래쪽 작은 글씨로 적힌 열량'], ['h4', '맨 끝 줄 "보관 온도를 지켜 주세요"']], extra: ['h5', '사진 찍은 장소 이름'],
            target: { sort: { big: ['h1', 'h2'], small: ['h3', 'h4'] } }, d: 0.25,
            hints: ['광고에서 눈길을 끄는 곳과 구석에 숨은 곳으로 카드를 가려요.'] }),
          mm({ p: '"번쩍" 음료 광고의 장면을 두 칸에 나누어 넣어 보세요.', topic: '번쩍 음료 광고',
            slots: [['big', '크게 보여 준 것'], ['small', '작게 적힌 것']],
            cards: [['i1', '반짝이는 얼음 속 음료병 사진'], ['i2', '"기운이 번쩍!" 큰 글씨'], ['i3', '병 뒤쪽 작은 글씨 "당 함량"'], ['i4', '맨 아래 "많이 마시면 해로울 수 있어요"']], extra: ['i5', '병을 만든 공장 이름'],
            target: { sort: { big: ['i1', 'i2'], small: ['i3', 'i4'] } }, d: 0.3,
            predict: { q: '광고에서 크게 보인 것은 우연히 그렇게 되었을까요?', options: ['우연히 그렇게 되었어요', '만든 사람이 골라서 크게 했어요'], answer: 1 },
            conclude: '광고에서 무엇을 크게 하고 작게 할지는 만든 사람이 고른 것이라, 크기를 읽으면 뜻이 보여요.' }),
        ],
      },
      {
        id: 'a2', title: '활동 2. 크게 강조할 것과 작게 둘 것을 나누어 구성하기', minutes: 13, tool: 'collage',
        teacher: '"우리가 광고를 만든다면 가장 크게 보일 것은 무엇이고, 작아도 꼭 있어야 할 것은 무엇인가요?" 큰 조각 하나는 강조, 작은 조각은 작은 글씨로 보고 구성하는 시범을 보인다. 작은 글씨 칸을 빠뜨린 학생에게는 알아야 할 내용을 어디에 둘지 묻는다.',
        task: '크게 강조할 조각 하나와 작게 둘 조각을 나누어 붙여 광고를 구성해요.',
        levels: { easy: { shapes: ['star', 'circle', 'rect'], colors: ['빨강', '노랑', '검정', '하양'] }, base: { shapes: ['star', 'circle', 'rect', 'heart', 'triangle'], colors: ['빨강', '노랑', '검정', '하양', '파랑', '분홍'] }, challenge: {} },
        items: [
          { prompt: '과자 광고를 구성해요. 큰 빨강 별 하나를 가운데 두고, 작은 검정 긴 네모 글줄 둘을 구석에 붙여요.', target: { has: [{ shape: 'star', color: '빨강', size: 'l', n: 1 }, { shape: 'rect', color: '검정', size: 's', n: 2 }] }, difficulty: 0.2 },
          { prompt: '음료 광고를 구성해요. 큰 노랑 동그라미 하나와 작은 하양 동그라미 셋을 붙이고, 작은 검정 긴 네모 글줄 하나를 더해요.', target: { has: [{ shape: 'circle', color: '노랑', size: 'l', n: 1 }, { shape: 'circle', color: '하양', size: 's', n: 3 }, { shape: 'rect', color: '검정', size: 's', n: 1 }] }, difficulty: 0.25 },
          { prompt: '내가 정한 광고에서 크게 강조할 것과 작게 둘 것을 나누어 나타내고 점검해요.', target: { selfCheck: ['크게 강조할 것 하나를 가장 크게 붙였어요', '꼭 알려야 할 내용도 작게나마 넣었어요', '짝이 무엇이 먼저 눈에 띄는지 말했어요'], minPieces: 4 }, difficulty: 0.1 },
        ],
      },
    ], '"광고에서 크게 보인 것과 작게 적힌 것의 차이를 한 문장으로 말해 볼까요?" 두세 명이 "크게 보인 것은 ~이고 작게 적힌 것은 ~예요"의 틀로 말하게 한다. 출구 2번에서 "광고 그림은 사실 그대로예요"를 고른 학생에게는 오늘 광고마다 작은 글씨가 따로 있었던 일을 떠올리게 한다.', [
      exMm({ p: '광고의 장면을 두 칸에 나누어 넣어 보세요.', topic: '반짝 젤리 광고',
        slots: [['big', '크게 보여 준 것'], ['small', '작게 적힌 것']], cards: [['e1', '"쫀득 대폭발!" 큰 글씨'], ['e2', '맨 아래 작은 글씨 "일일 섭취량을 확인하세요"'], ['e3', '크게 웃는 아이 얼굴']],
        target: { sort: { big: ['e1', 'e3'], small: ['e2'] } }, d: 0.15 }),
      { type: 'choice', prompt: '광고에서 크기에 차이를 두는 까닭으로 알맞은 것은?', options: ['종이를 아끼려고', '사람들이 먼저 보게 하고 싶은 것을 만든 사람이 골라서', '모든 내용을 똑같이 보이게 하려고'], answer: 1, difficulty: 0.15, explain: '크게 한 것은 먼저 보여 주고 싶은 것이고, 작게 한 것은 눈에 덜 띄게 둔 것이에요.' },
      { type: 'mood', prompt: '광고를 크기로 읽어 보니 어땠나요?' },
    ]),
    worksheet: {
      title: '광고의 크게·작게 읽기',
      items: [
        { type: 'table', prompt: '내가 고른 광고에서 크게 보인 것과 작게 적힌 것을 쓰세요.', columns: ['크게 보인 것', '작게 적힌 것'], cells: [['"맛 폭발!" 큰 글씨', '구석의 영양 성분표'], ['', ''], ['', '']] },
        { type: 'figure', wide: true, prompt: '큰 별 곁에 작은 글줄 조각을 하나 더 그려 광고를 완성하세요.', tool: 'collage', options: { printColors: false }, figures: [{ state: { pieces: [{ shape: 'star', color: '빨강', size: 'l', x: 240, y: 200, r: 0 }, { shape: 'rect', color: '검정', size: 's', x: 420, y: 320, r: 0 }] }, caption: '가운데 빨강 큰 별(강조), 오른쪽 아래 검정 작은 긴 네모(작은 글)' }], answer: '작은 검정 긴 네모를 큰 별 아래나 오른쪽 구석에 하나 더 그린다' },
        { type: 'choice', prompt: '작게 적힌 것에 ○ 하세요.', options: ['"맛 폭발!" 큰 글씨', '환하게 웃는 아이 얼굴', '구석에 적힌 영양 성분표'], answer: '구석에 적힌 영양 성분표' },
        { type: 'short', prompt: '광고에서 작게 적힌 것을 일부러 찾아봐야 하는 까닭을 한 문장으로 쓰세요.' },
      ],
      easy: {
        note: '큰 글씨와 큰 그림은 먼저 보여 주고 싶은 것, 구석의 작은 글씨는 눈에 덜 띄는 것이에요.',
        items: [
          { type: 'table', prompt: '크게 보인 것과 작게 적힌 것을 쓰세요.', columns: ['크게', '작게'], cells: [['', '']] },
          { type: 'choice', prompt: '크게 보인 것에 ○ 하세요.', options: ['큰 글씨 "시원함 두 배!"', '구석의 작은 글씨'], answer: '큰 글씨 "시원함 두 배!"' },
          { type: 'draw', prompt: '크게 강조한 것과 작게 둔 것이 보이는 광고를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 놓으면 바로 맞는지 표시돼요. 색종이는 모양 세 가지, 색 네 가지예요.',
      base: '스스로 나누고 확인해요. 고르개는 모양 다섯 가지, 색 여섯 가지예요.',
      challenge: '광고에 없는 카드가 하나씩 더 섞여 있어요. 색종이는 모든 모양·색 가운데 골라 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 광고 그림은 사실을 그대로 보여 준다고 여긴다 → 무엇이 크고 작은지는 만든 사람이 고른 것임을 짚는다. ② 광고는 모두 거짓이라고 단정한다 → 거짓 여부가 아니라 크기와 배치를 읽는 활동임을 분명히 한다. ③ 작은 글씨를 아예 찾지 못한다 → 구석과 맨 아래를 손가락으로 훑게 한다. 준비물: 상표가 없는 가상 광고 그림(칠판에 그림).',
  }));

  // ───────────── 14차시 (연습) ─────────────
  lessons.push(lesson(14, {
    title: '음료 광고에 빠진 정보를 찾아 물음으로 바꾸기',
    objective: '광고 이미지에서 알려 주지 않은 정보를 찾아 궁금한 점을 물음으로 바꾸고, 빠진 정보를 적을 칸을 광고에 더해 나타낼 수 있다.',
    illustration: {
      prompt: art('a paper-cut juice bottle advertisement with a big fruit picture and an empty information box with question marks'),
      scene: scene([
        { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 100, y: 52 }, { motif: 'hills', y: 208 },
        { motif: 'flower', x: 120, y: 222, color: 'rose' }, { motif: 'leaf', x: 360, y: 204, r: 20, color: 'buttercup' },
        { motif: 'text', x: 240, y: 142, text: '없는 정보는 무엇일까', size: 22 },
      ]),
    },
    stages: stages({
      teacher: '가상의 음료 광고("과즙톡")에 큰 과일 사진, 얼음, "비타민 가득!" 문구만 있는 그림을 보여 준다. "이 광고를 보고 사려고 할 때 꼭 알고 싶은데 어디에도 없는 것은 무엇인가요?" 학생이 말한 궁금증(얼마나 들어 있어요? 가격은요?)을 칠판에 적는다. "광고에 없는 것은 중요하지 않은 거예요"라는 생각을 짚는다. 시연 단추로 궁금한 것을 고르는 모습을 보여 준다.',
      student: '이 광고를 보고 사기 전에 꼭 알고 싶은 것을 하나 말해 봅시다.',
      demo: { tool: 'mindmap', options: { mode: 'pick', topic: '과즙톡 음료 광고', basket: '광고에 없는 정보', cards: [{ id: 'd1', text: '당이 얼마나 들어 있을까?' }, { id: 'd2', text: '과일 사진이 크다' }] }, sequence: [{ pick: ['d1'] }] },
    }, [
      {
        id: 'a1', title: '활동 1. 광고에 없는 정보 골라내기', minutes: 12, tool: 'mindmap',
        teacher: '"이 카드는 광고에 나와 있나요, 없어서 궁금한가요?" 광고에 나온 것(과일 사진·얼음·문구)은 이미 알려 준 것이고, 양·가격·성분·보관은 따로 찾아봐야 하는 빠진 정보라고 갈라 말한다. 도전 단계의 "광고 문구가 멋있다"는 카드는 의견이라 빠진 정보가 아니다.',
        task: '카드를 읽고 광고에 없는 정보만 모두 골라요.',
        levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          mm({ p: '"과즙톡" 음료 광고에 없어서 궁금한 정보만 모두 고르세요.', mode: 'pick', topic: '과즙톡 음료 광고', basket: '광고에 없는 정보',
            cards: [['q1', '당이 얼마나 들어 있을까?'], ['q2', '한 병에 몇 밀리리터일까?'], ['q3', '과일 사진이 크게 나와 있다'], ['q4', '얼음이 시원하게 그려져 있다']], extra: ['q5', '광고 문구가 멋있다'],
            target: { pick: ['q1', 'q2'] }, d: 0.2,
            hints: ['광고에 이미 나온 것 말고, 사려면 따로 알아봐야 하는 정보를 찾아요.'] }),
          mm({ p: '"날쌘" 운동화 광고에 없어서 궁금한 정보만 모두 고르세요.', mode: 'pick', topic: '날쌘 운동화 광고', basket: '광고에 없는 정보',
            cards: [['r1', '발 크기별로 값이 다른가?'], ['r2', '비 오는 날에도 미끄럽지 않을까?'], ['r3', '빨강색 운동화 사진이 크다'], ['r4', '"더 높이 뛰어요!" 큰 글씨가 있다']], extra: ['r5', '운동화 사진이 예쁘다'],
            target: { pick: ['r1', 'r2'] }, d: 0.25,
            hints: ['광고 그림과 글에서 찾을 수 있는 것은 빼고, 따로 물어봐야 알 수 있는 것을 골라요.'] }),
          mm({ p: '"반짝반짝" 장난감 광고에 없어서 궁금한 정보만 모두 고르세요.', mode: 'pick', topic: '반짝반짝 장난감 광고', basket: '광고에 없는 정보',
            cards: [['s1', '건전지는 따로 사야 할까?'], ['s2', '몇 살부터 안전하게 쓸 수 있을까?'], ['s3', '장난감이 반짝이는 모습이 크다'], ['s4', '아이들이 웃는 얼굴이 나온다']], extra: ['s5', '광고가 신나 보인다'],
            target: { pick: ['s1', 's2'] }, d: 0.3,
            predict: { q: '광고에 없는 정보는 중요하지 않기 때문에 빠진 것일까요?', options: ['중요하지 않아서 빠졌어요', '중요해도 눈에 덜 띄게 빠질 수 있어요'], answer: 1 },
            conclude: '광고에서 빠진 정보 중에는 사는 사람에게 꼭 필요한 것도 있으니 따로 찾아보아야 해요.' }),
        ],
      },
      {
        id: 'a2', title: '활동 2. 빠진 정보를 적을 칸을 광고에 더하기', minutes: 13, tool: 'collage',
        teacher: '"빠진 정보를 적을 칸은 광고의 어디에 두면 눈에 잘 띌까요?" 하양 바탕 위에 검정 글줄 조각을 줄 지어 붙여 정보 상자를 만드는 시범을 보인다. 정보 상자를 너무 작게 구석에 둔 학생에게는 읽는 사람이 쉽게 찾을 수 있을지 묻는다.',
        task: '광고 그림 곁에 빠진 정보를 적을 칸을 조각으로 만들어 붙여요.',
        levels: { easy: { shapes: ['rect', 'circle', 'heart'], colors: ['하양', '검정', '주황', '노랑'] }, base: { shapes: ['rect', 'circle', 'heart', 'star', 'triangle'], colors: ['하양', '검정', '주황', '노랑', '빨강', '파랑'] }, challenge: {} },
        items: [
          { prompt: '정보 상자를 만들어요. 큰 하양 긴 네모 위에 작은 검정 긴 네모 글줄을 네 개 겹쳐 붙여요.', target: { has: [{ shape: 'rect', color: '하양', size: 'l', n: 1 }, { shape: 'rect', color: '검정', size: 's', n: 4 }], overlap: 4 }, difficulty: 0.2 },
          { prompt: '과일 사진과 정보 상자를 함께 구성해요. 큰 주황 동그라미 과일 하나와 큰 하양 긴 네모 정보 상자 하나를 붙여요.', target: { has: [{ shape: 'circle', color: '주황', size: 'l', n: 1 }, { shape: 'rect', color: '하양', size: 'l', n: 1 }] }, difficulty: 0.25 },
          { prompt: '내가 정한 광고에서 빠진 정보를 적을 칸을 나타내고 점검해요.', target: { selfCheck: ['빠진 정보 한 가지를 정했어요', '그 정보를 적을 칸을 눈에 띄는 곳에 붙였어요', '짝이 칸을 보고 무엇을 적을지 말했어요'], minPieces: 4 }, difficulty: 0.1 },
        ],
      },
    ], '"광고에 없는 정보 가운데 가장 꼭 알고 싶은 것은 무엇인가요?" 두세 명이 정보와 까닭을 말하게 한다. 출구 2번에서 "광고에 없으면 중요하지 않아요"를 고른 학생에게는 활동 1의 건전지·안전 나이 사례를 떠올리게 한다.', [
      exMm({ p: '광고에 없어서 궁금한 정보만 모두 고르세요.', mode: 'pick', topic: '말랑 과자 광고', basket: '광고에 없는 정보',
        cards: [['e1', '알레르기가 있는 사람도 먹어도 될까?'], ['e2', '과자 사진이 크게 나와 있다'], ['e3', '한 봉지에 몇 개 들었을까?']], target: { pick: ['e1', 'e3'] }, d: 0.15 }),
      { type: 'choice', prompt: '광고에 없는 정보를 알아보는 방법으로 알맞은 것은?', options: ['광고 그림만 보고 믿어요.', '포장 뒷면이나 설명서를 읽고 어른에게도 물어봐요.', '친구가 사면 따라 사요.'], answer: 1, difficulty: 0.15, explain: '광고에 없는 정보는 포장·설명서·어른에게서 따로 찾아봐야 해요.' },
      { type: 'mood', prompt: '광고에 없는 것을 찾아보니 어땠나요?' },
    ]),
    worksheet: {
      title: '광고에 없는 정보 찾기',
      items: [
        { type: 'table', prompt: '내가 고른 광고에서 알려 준 것과 없어서 궁금한 것을 쓰세요.', columns: ['광고가 알려 준 것', '없어서 궁금한 것'], cells: [['과일 사진, 얼음, "비타민 가득!"', '당이 얼마나 들어 있을까?'], ['', ''], ['', '']] },
        { type: 'figure', wide: true, prompt: '정보 상자 안에 글줄 조각을 두 줄 더 그려 빠진 정보를 적을 자리를 만드세요.', tool: 'collage', options: { printColors: false }, figures: [{ state: { pieces: [{ shape: 'rect', color: '하양', size: 'l', x: 280, y: 200, r: 0 }, { shape: 'rect', color: '검정', size: 's', x: 280, y: 160, r: 0 }, { shape: 'rect', color: '검정', size: 's', x: 280, y: 200, r: 0 }] }, caption: '하양 큰 긴 네모 정보 상자와 검정 글줄 둘' }], answer: '글줄 조각 두 개를 상자 안 아래쪽에 더 그린다' },
        { type: 'choice', prompt: '광고에 없어서 따로 알아봐야 하는 정보에 ○ 하세요.', options: ['과일 사진이 크다', '당이 얼마나 들어 있을까?', '얼음이 그려져 있다'], answer: '당이 얼마나 들어 있을까?' },
        { type: 'short', prompt: '광고에 없는 정보를 알아보려면 어디에서 무엇을 찾아볼지 쓰세요.' },
      ],
      easy: {
        note: '광고에 나온 그림과 글은 알려 준 것이고, 양·값·안전은 따로 찾아봐야 하는 정보예요.',
        items: [
          { type: 'table', prompt: '없어서 궁금한 것을 쓰세요.', columns: ['광고', '궁금한 것'], cells: [['', '']] },
          { type: 'choice', prompt: '광고에 없는 정보에 ○ 하세요.', options: ['값은 얼마일까?', '큰 과일 사진'], answer: '값은 얼마일까?' },
          { type: 'draw', prompt: '정보 상자가 있는 광고를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 고르면 바로 맞는지 표시돼요. 색종이는 모양 세 가지, 색 네 가지예요.',
      base: '스스로 고른 뒤 확인해요. 고르개는 모양 다섯 가지, 색 여섯 가지예요.',
      challenge: '정보가 아닌 의견 카드가 하나씩 더 섞여 있어요. 색종이는 모든 모양·색 가운데 골라 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 광고에 없으면 중요하지 않다고 여긴다 → 장난감 광고에서 건전지·안전 나이가 빠진 사례를 짚는다. ② 의견("예뻐 보여")과 정보를 섞는다 → 알아볼 수 있는 사실인지 따져 본다. ③ 정보 상자를 아주 작게 구석에 둔다 → 읽는 사람이 쉽게 찾을 수 있을지 묻는다. 준비물: 상표가 없는 가상 광고 그림.',
  }));

  // ───────────── 15차시 (확장) ─────────────
  lessons.push(lesson(15, {
    title: '광고 장면이 누구에게 무엇을 하려는지 근거로 밝히기',
    objective: '광고 장면의 모습을 근거로 광고가 겨냥한 사람과 하게 하려는 일을 밝히고, 겨냥한 사람에 맞게 색을 골라 나타낼 수 있다.',
    illustration: {
      prompt: art('three paper-cut advertisement posters aimed at children, parents and athletes, each with different colors and pictures'),
      scene: scene([
        { motif: 'sun', x: 90, y: 56, s: 0.7 }, { motif: 'star', x: 400, y: 56 }, { motif: 'hills', y: 208 },
        { motif: 'flower', x: 110, y: 222 }, { motif: 'tree', x: 240, y: 216, s: 0.9 }, { motif: 'flower', x: 370, y: 224, color: 'buttercup' },
        { motif: 'text', x: 240, y: 140, text: '누구에게 무엇을?', size: 24 },
      ]),
    },
    stages: stages({
      teacher: '"놀이공원 광고에 아이가 웃는 얼굴이 크게 나오면 누구에게 말을 거는 광고일까요?" 장면의 모습(누가 나오는지, 어떤 색인지, 무슨 말이 큰지)이 단서가 된다고 짚는다. "광고는 모든 사람에게 똑같이 말을 걸어요"라는 생각을 짚는다. 시연 단추로 장면과 겨냥한 사람이 이어지는 모습을 보여 준다.',
      student: '광고에 아이가 크게 나오면 누구에게 말을 거는지 말해 봅시다.',
      demo: { tool: 'mindmap', options: { mode: 'match', topic: '광고가 겨냥한 사람', slots: [{ id: 'd1', label: '웃는 아이와 장난감이 크게 나와요' }], cards: [{ id: 'dc1', text: '졸라서 사 달라고 할 어린이' }, { id: 'dc2', text: '선수가 되고 싶은 사람' }] }, sequence: [{ match: { d1: 'dc1' } }] },
    }, [
      {
        id: 'a1', title: '활동 1. 광고 장면에서 겨냥한 사람과 하게 하려는 일 찾기', minutes: 12, tool: 'mindmap',
        teacher: '"장면의 어떤 모습을 보고 그렇게 생각했나요?" 근거 낱말(웃는 아이, 가격표, 선수의 기록)에 밑줄을 긋게 하고 겨냥한 사람과 이어 말하게 한다. 광고가 하게 하려는 일은 사게 하기·기억하게 하기·행동을 바꾸게 하기 등이 있다고 안내한다. 도전 단계의 추가 카드는 어느 장면에도 근거가 없어 이어지지 않는다.',
        task: '광고 장면의 근거 낱말을 보고, 겨냥한 사람과 이어요.',
        levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          mm({ p: '광고 장면과 광고가 겨냥한 사람을 이어 보세요.', mode: 'match', topic: '광고가 겨냥한 사람',
            slots: [['s1', '웃는 아이와 반짝이는 장난감이 크게 나와요'], ['s2', '부모의 안심하는 웃음과 값이 눈에 띄어요'], ['s3', '선수의 달리는 모습과 기록이 나와요']],
            cards: [['m1', '졸라서 사 달라고 할 어린이'], ['m2', '물건을 사는 어른'], ['m3', '운동을 잘하고 싶은 사람'], ['m4', '이 광고를 못 본 사람']], extra: ['m5', '광고 속 물건을 만든 사람'],
            target: { match: { s1: 'm1', s2: 'm2', s3: 'm3' } }, d: 0.2,
            hints: ['장면에서 누가 크게 나오고 어떤 말이 눈에 띄는지 보고, 누구에게 말을 거는지 이어요.'] }),
          mm({ p: '광고 장면과 광고가 하게 하려는 일을 이어 보세요.', mode: 'match', topic: '광고가 하게 하려는 일',
            slots: [['t1', '"오늘만 반값!" 빨간 큰 글씨'], ['t2', '같은 노래가 여러 번 반복되는 광고'], ['t3', '"하루 십 분 걷기" 포스터']],
            cards: [['q1', '서둘러 사게 해요'], ['q2', '이름을 기억하게 해요'], ['q3', '생활 습관을 바꾸게 해요'], ['q4', '광고를 지우게 해요']], extra: ['q5', '값을 깎아 주게 해요'],
            target: { match: { t1: 'q1', t2: 'q2', t3: 'q3' } }, d: 0.25,
            hints: ['글이나 장면이 보는 사람에게 무슨 행동을 하게 만들려는지 생각해요.'] }),
          mm({ p: '광고 장면마다 겨냥한 사람을 나누어 넣어 보세요.', topic: '겨냥한 사람 나누기',
            slots: [['kid', '어린이'], ['adult', '어른']],
            cards: [['c1', '만화 주인공과 큰 별 모양 글씨'], ['c2', '연금과 보험료가 적힌 표'], ['c3', '놀이터가 나오고 노랑·분홍이 많아요'], ['c4', '요리하는 부모와 한 달 값']], extra: ['c5', '날씨가 맑은 하늘'],
            target: { sort: { kid: ['c1', 'c3'], adult: ['c2', 'c4'] } }, d: 0.3,
            predict: { q: '같은 광고가 어린이와 어른 모두에게 똑같이 말을 걸까요?', options: ['똑같이 말을 걸어요', '누구에게 말을 거는지 장면마다 달라요'], answer: 1 },
            conclude: '광고는 장면의 인물·색·말로 누구에게 무엇을 하게 하려는지 드러내요.' }),
        ],
      },
      {
        id: 'a2', title: '활동 2. 겨냥한 사람에 맞게 색 골라 구성하기', minutes: 13, tool: 'collage',
        teacher: '"어린이에게 말 거는 광고라면 어떤 색이 눈에 확 들어올까요?" 보색 조각을 맞닿게 하면 선명해 눈에 띄는 것을 시범으로 보인다. 어른 대상은 차분한 색과 간결한 구성으로 고를 수 있음을 말한다. 색을 많이만 붙이는 학생에게는 겨냥한 사람이 누구인지 먼저 묻는다.',
        task: '겨냥한 사람에 맞게 색 조각을 골라 맞닿게 붙여요.',
        levels: { easy: { shapes: ['circle', 'star', 'rect'], colors: ['빨강', '초록', '파랑', '주황'] }, base: { shapes: ['circle', 'star', 'rect', 'heart', 'triangle'], colors: ['빨강', '초록', '파랑', '주황', '노랑', '보라'] }, challenge: {} },
        items: [
          { prompt: '어린이 광고를 만들어요. 큰 빨강 동그라미와 큰 초록 동그라미를 서로 맞닿게 붙여요.', target: { has: [{ shape: 'circle', color: '빨강', size: 'l', n: 1 }, { shape: 'circle', color: '초록', size: 'l', n: 1 }], contrast: 'complement' }, difficulty: 0.2 },
          { prompt: '운동 광고를 만들어요. 큰 주황 별과 큰 파랑 별을 서로 맞닿게 붙여요.', target: { has: [{ shape: 'star', color: '주황', size: 'l', n: 1 }, { shape: 'star', color: '파랑', size: 'l', n: 1 }], contrast: 'complement' }, difficulty: 0.25 },
          { prompt: '겨냥할 사람을 정해 그 사람에게 맞는 색과 모양으로 광고를 구성하고 점검해요.', target: { selfCheck: ['누구에게 말 거는 광고인지 정했어요', '그 사람에게 맞는 색을 골랐어요', '짝이 누구를 겨냥했는지 맞혔어요'], minPieces: 4 }, difficulty: 0.1 },
        ],
      },
    ], '"오늘 본 광고가 누구에게 무엇을 하게 하려는지 근거와 함께 말해 볼까요?" 두세 명이 "~가 크게 나와서 ~에게 말을 걸어요"의 틀로 말하게 한다. 출구 2번에서 "광고는 누구에게나 똑같아요"를 고른 학생에게는 활동 1의 어린이·어른 광고 비교를 떠올리게 한다.', [
      exMm({ p: '광고 장면과 광고가 겨냥한 사람을 이어 보세요.', mode: 'match', topic: '광고가 겨냥한 사람',
        slots: [['e1', '큰 공룡 그림과 알록달록한 글자'], ['e2', '은행 이자와 저축 상품표']], cards: [['x1', '어린이'], ['x2', '돈을 모으려는 어른'], ['x3', '운동선수']],
        target: { match: { e1: 'x1', e2: 'x2' } }, d: 0.15 }),
      { type: 'choice', prompt: '광고가 누구에게 말을 거는지 알 수 있는 근거로 알맞은 것은?', options: ['광고를 만든 회사 이름', '장면에 나온 사람·색·큰 글씨', '광고가 나오는 시간'], answer: 1, difficulty: 0.15, explain: '장면의 인물·색·글씨가 누구에게 어떤 행동을 하게 하려는지 보여 줘요.' },
      { type: 'mood', prompt: '광고가 누구에게 말을 거는지 찾아보니 어땠나요?' },
    ]),
    worksheet: {
      title: '광고가 겨냥한 사람',
      items: [
        { type: 'table', prompt: '광고 한 장을 정해 겨냥한 사람과 근거, 하게 하려는 일을 쓰세요.', columns: ['겨냥한 사람', '근거(장면의 모습)', '하게 하려는 일'], cells: [['어린이', '웃는 아이와 장난감이 크게 나와요', '졸라서 사게 해요'], ['', '', ''], ['', '', '']] },
        { type: 'figure', wide: true, prompt: '빨강과 초록 큰 동그라미가 맞닿았습니다. 어린이 광고에 어울리는 별 조각을 곁에 하나 더 그리세요.', tool: 'collage', options: { printColors: false }, figures: [{ state: { pieces: [{ shape: 'circle', color: '빨강', size: 'l', x: 220, y: 200, r: 0 }, { shape: 'circle', color: '초록', size: 'l', x: 340, y: 200, r: 0 }] }, caption: '왼쪽 빨강, 오른쪽 초록 큰 동그라미(서로 맞닿음)' }], answer: '별 모양 조각을 두 동그라미 위쪽에 하나 더 그린다' },
        { type: 'choice', prompt: '"선수의 달리는 모습과 기록"이 나오는 광고가 겨냥한 사람은?', options: ['운동을 잘하고 싶은 사람', '잠자는 아기', '광고를 못 본 사람'], answer: '운동을 잘하고 싶은 사람' },
        { type: 'short', prompt: '내가 본 광고가 누구에게 무엇을 하게 하려는지 근거와 함께 쓰세요.' },
      ],
      easy: {
        note: '광고 장면에 크게 나온 사람과 말이 누구에게 말 거는지 알려 주는 근거예요.',
        items: [
          { type: 'table', prompt: '겨냥한 사람과 근거를 쓰세요.', columns: ['겨냥한 사람', '근거'], cells: [['', '']] },
          { type: 'choice', prompt: '어린이를 겨냥한 광고에 ○ 하세요.', options: ['만화 주인공과 큰 별 글씨', '연금 보험료 표'], answer: '만화 주인공과 큰 별 글씨' },
          { type: 'draw', prompt: '어린이를 겨냥한 광고 한 장을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 놓으면 바로 맞는지 표시돼요. 색종이는 모양 세 가지, 색 네 가지예요.',
      base: '스스로 이은 뒤 확인해요. 고르개는 모양 다섯 가지, 색 여섯 가지예요.',
      challenge: '근거가 없는 카드가 하나씩 더 섞여 있어요. 색종이는 모든 모양·색 가운데 골라 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 광고는 모든 사람에게 똑같이 말한다고 여긴다 → 어린이와 어른 광고를 견주어 보인다. ② 근거 없이 느낌으로 겨냥한 사람을 말한다 → 장면의 낱말에 밑줄을 긋게 한다. ③ 색을 많이만 붙이면 눈에 띈다고 생각한다 → 보색 두 조각이 맞닿을 때 선명하다는 점을 시범으로 보인다.',
  }));

  // ───────────── 16차시 (확장) ─────────────
  lessons.push(lesson(16, {
    title: '색·크기·자리가 주는 인상과 옛 민화의 뜻 읽기',
    objective: '이미지의 색·크기·자리가 보는 사람에게 주는 인상을 짝지어 말하고, 옛 민화처럼 이미지가 약속된 뜻으로 읽히기도 함을 알아 근거와 함께 읽을 수 있다.',
    illustration: {
      prompt: art('a paper-cut magpie perched near a tiger shape in a folk painting style with soft pastel layers'),
      scene: scene([
        { motif: 'moon', x: 400, y: 56, s: 0.8 }, { motif: 'bird', x: 120, y: 74, s: 1.1 }, { motif: 'hills', y: 208 },
        { motif: 'tree', x: 90, y: 216 }, { motif: 'mountain', x: 340, y: 214 }, { motif: 'leaf', x: 250, y: 206, r: 20 },
        { motif: 'text', x: 240, y: 142, text: '이미지가 말하는 뜻', size: 22 },
      ]),
    },
    stages: stages({
      teacher: '"빨간 큰 글씨로 \'마지막 세일!\'이라고 쓴 포스터와 파란 바탕에 하얀 물결이 있는 포스터를 보면 기분이 어떻게 다른가요?" 색과 크기가 주는 인상을 먼저 말하게 한다. 이어서 "옛날 민화 가운데 까치와 호랑이를 함께 그린 그림은 흔히 까치는 기쁜 소식, 호랑이는 나쁜 기운을 막는다는 뜻으로 읽혔다고 해요"라고 이름과 뜻만 들려준다(작품 이미지는 보여 주지 않는다). "이미지의 뜻은 누구에게나 한 가지로 정해져 있어요"라는 생각을 짚는다. 시연 단추로 이미지 요소와 뜻이 이어지는 모습을 보여 준다.',
      student: '빨간색 큰 글씨와 파란색 물결 그림이 주는 기분이 어떻게 다른지 말해 봅시다.',
      demo: { tool: 'mindmap', options: { mode: 'match', topic: '이미지가 주는 인상', slots: [{ id: 'd1', label: '빨강 큰 글씨 "마지막 세일!"' }], cards: [{ id: 'dc1', text: '서두르게 만들어요' }, { id: 'dc2', text: '시원하고 깨끗해 보여요' }] }, sequence: [{ match: { d1: 'dc1' } }] },
    }, [
      {
        id: 'a1', title: '활동 1. 색·크기·자리와 인상 이어 보기', minutes: 12, tool: 'mindmap',
        teacher: '"이 이미지가 보는 사람에게 어떤 기분을 주려고 이런 색과 크기를 골랐을까요?" 빨강·큰 글씨는 서두르게, 파랑·하양은 시원하고 깨끗하게, 가운데 크게 둔 것은 중요해 보이게 하는 쪽으로 읽힌다고 짝지어 말한다. 이런 인상은 사람마다 조금 다를 수 있으니 \'흔히\'라고 말하고 근거를 함께 대게 한다. 마지막 문항은 옛 민화를 읽는 약속이므로 뜻에 \'흔히\'가 붙는다고 짚는다.',
        task: '이미지의 색·크기·자리와 그것이 주는 인상을 이어요.',
        levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          mm({ p: '이미지의 모습과 흔히 주는 인상을 이어 보세요.', mode: 'match', topic: '이미지가 주는 인상',
            slots: [['s1', '빨강 바탕에 큰 글씨 "마지막 세일!"'], ['s2', '파랑 바탕에 하양 물결 무늬'], ['s3', '가운데에 크게 놓인 물건 하나']],
            cards: [['m1', '서두르게 만들어요'], ['m2', '시원하고 깨끗해 보여요'], ['m3', '가장 중요해 보여요'], ['m4', '졸려 보여요']], extra: ['m5', '무섭게 느껴져요'],
            target: { match: { s1: 'm1', s2: 'm2', s3: 'm3' } }, d: 0.2,
            hints: ['색의 느낌, 글씨 크기, 놓인 자리가 보는 사람에게 어떤 기분을 주는지 떠올려요.'] }),
          mm({ p: '이미지의 모습과 흔히 주는 인상을 이어 보세요.', mode: 'match', topic: '이미지가 주는 인상',
            slots: [['t1', '주황·노랑이 가득한 포스터'], ['t2', '검정 바탕에 작은 흰 글씨'], ['t3', '아래쪽 구석에 작게 놓인 물건']],
            cards: [['q1', '따뜻하고 활기차 보여요'], ['q2', '조용하고 무거워 보여요'], ['q3', '덜 중요해 보여요'], ['q4', '시끄러워 보여요']], extra: ['q5', '향기가 나는 것 같아요'],
            target: { match: { t1: 'q1', t2: 'q2', t3: 'q3' } }, d: 0.25,
            hints: ['따뜻한 색인지 어두운 색인지, 크게 놓였는지 구석에 놓였는지 살펴 인상을 이어요.'] }),
          mm({ p: '옛 민화에서 까치와 호랑이를 함께 그린 그림은 흔히 어떤 뜻으로 읽혔을까요? 이어 보세요.', mode: 'match', topic: '옛 민화의 약속된 뜻',
            slots: [['u1', '그림 속 까치'], ['u2', '그림 속 호랑이']],
            cards: [['n1', '기쁜 소식'], ['n2', '나쁜 기운을 막아 주는 힘'], ['n3', '빨리 사라는 말']], extra: ['n4', '추운 겨울'],
            target: { match: { u1: 'n1', u2: 'n2' } }, d: 0.3,
            predict: { q: '옛 그림 속 동물의 뜻은 누구에게나 지금도 똑같이 읽힐까요?', options: ['똑같이 읽혀요', '시대와 약속을 알아야 읽을 수 있어요'], answer: 1 },
            conclude: '이미지의 뜻은 색·크기·자리와 함께 그 시대의 약속을 알 때 더 잘 읽혀요.' }),
        ],
      },
      {
        id: 'a2', title: '활동 2. 원하는 인상이 나게 색과 크기 정해 붙이기', minutes: 13, tool: 'collage',
        teacher: '"시원한 느낌을 주고 싶다면 어떤 색을 크게 붙일까요?" 차가운 색을 크게, 따뜻한 색을 작게 붙이는 시범을 보인다. 마지막 문항은 짝에게 어떤 인상을 주려 했는지 말하지 않고 보여 준 뒤 짝이 말하는 인상과 견주게 한다.',
        task: '주고 싶은 인상에 맞게 색과 크기를 골라 붙여요.',
        levels: { easy: { shapes: ['circle', 'semi', 'star'], colors: ['파랑', '하양', '빨강', '노랑'] }, base: { shapes: ['circle', 'semi', 'star', 'rect', 'triangle'], colors: ['파랑', '하양', '빨강', '노랑', '초록', '보라'] }, challenge: {} },
        items: [
          { prompt: '시원한 인상을 만들어요. 큰 파랑 반원 둘과 작은 하양 동그라미 셋 이상을 붙여요.', target: { has: [{ shape: 'semi', color: '파랑', size: 'l', n: 2 }, { shape: 'circle', color: '하양', size: 's', min: 3 }] }, difficulty: 0.2 },
          { prompt: '서두르게 하는 인상을 만들어요. 큰 빨강 별 하나와 작은 노랑 별 셋 이상을 붙여요.', target: { has: [{ shape: 'star', color: '빨강', size: 'l', n: 1 }, { shape: 'star', color: '노랑', size: 's', min: 3 }] }, difficulty: 0.25 },
          { prompt: '주고 싶은 인상을 정해 색·크기·자리를 골라 나타내고 점검해요.', target: { selfCheck: ['주고 싶은 인상 하나를 정했어요', '그 인상에 맞는 색과 크기를 골랐어요', '짝이 말한 인상과 내가 정한 인상을 견주었어요'], minPieces: 4 }, difficulty: 0.1 },
        ],
      },
    ], '"색·크기·자리가 주는 인상은 어떤 근거로 말할 수 있나요?" 두세 명이 "~색이라서 ~해 보여요"의 틀로 말하게 한다. 출구 2번에서 "이미지의 뜻은 늘 한 가지예요"를 고른 학생에게는 옛 민화의 뜻이 시대와 약속에 따라 읽혔던 일을 떠올리게 한다.', [
      exMm({ p: '이미지의 모습과 흔히 주는 인상을 이어 보세요.', mode: 'match', topic: '이미지가 주는 인상',
        slots: [['e1', '초록 바탕에 나뭇잎 무늬'], ['e2', '맨 가운데 크게 놓인 별']], cards: [['x1', '편안하고 싱그러워 보여요'], ['x2', '가장 눈에 띄고 중요해 보여요'], ['x3', '차갑고 무서워 보여요']],
        target: { match: { e1: 'x1', e2: 'x2' } }, d: 0.15 }),
      { type: 'choice', prompt: '이미지의 뜻을 읽을 때 알맞은 태도는?', options: ['누구에게나 똑같은 한 가지 뜻이 있어요.', '색·크기·자리와 시대의 약속을 근거로 읽고, 사람마다 다를 수 있음을 알아요.', '느낌이 들면 근거 없이 말해도 돼요.'], answer: 1, difficulty: 0.15, explain: '이미지의 뜻은 근거와 함께 읽고, 읽는 사람과 시대에 따라 다를 수 있어요.' },
      { type: 'mood', prompt: '이미지가 주는 인상을 읽어 보니 어땠나요?' },
    ]),
    worksheet: {
      title: '이미지가 주는 인상',
      items: [
        { type: 'table', prompt: '이미지 하나를 정해 색·크기·자리와 그것이 주는 인상을 쓰세요.', columns: ['살핀 것', '이미지의 모습', '흔히 주는 인상'], cells: [['색', '파랑 바탕에 하양 물결', '시원하고 깨끗해 보여요'], ['크기', '', ''], ['자리', '', '']] },
        { type: 'figure', wide: true, prompt: '시원한 인상이 더 나도록 파랑 반원 곁에 하양 작은 동그라미를 두 개 더 그리세요.', tool: 'collage', options: { printColors: false }, figures: [{ state: { pieces: [{ shape: 'semi', color: '파랑', size: 'l', x: 200, y: 220, r: 0 }, { shape: 'semi', color: '파랑', size: 'l', x: 360, y: 220, r: 0 }, { shape: 'circle', color: '하양', size: 's', x: 280, y: 160, r: 0 }] }, caption: '파랑 큰 반원 둘과 하양 작은 동그라미 하나' }], answer: '하양 작은 동그라미 두 개를 반원 위쪽에 더 그린다' },
        { type: 'choice', prompt: '옛 민화에서 까치는 흔히 어떤 뜻으로 읽혔나요?', options: ['기쁜 소식', '무서운 소식', '비가 옴'], answer: '기쁜 소식' },
        { type: 'short', prompt: '색이나 크기를 근거로 내가 읽은 이미지의 인상을 한 문장으로 쓰세요.' },
      ],
      easy: {
        note: '따뜻한 색은 활기차게, 차가운 색은 시원하게, 큰 것은 중요해 보이게 읽히는 일이 많아요.',
        items: [
          { type: 'table', prompt: '색과 인상을 쓰세요.', columns: ['색', '인상'], cells: [['파랑', ''], ['빨강', '']] },
          { type: 'choice', prompt: '시원해 보이는 색에 ○ 하세요.', options: ['파랑', '빨강'], answer: '파랑' },
          { type: 'draw', prompt: '시원한 인상이 나는 이미지를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 놓으면 바로 맞는지 표시돼요. 색종이는 모양 세 가지, 색 네 가지예요.',
      base: '스스로 이은 뒤 확인해요. 고르개는 모양 다섯 가지, 색 여섯 가지예요.',
      challenge: '이어지지 않는 카드가 하나씩 더 섞여 있어요. 색종이는 모든 모양·색 가운데 골라 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 이미지의 뜻은 한 가지로 정해져 있다고 여긴다 → 색 인상은 사람마다 다를 수 있고 옛 민화의 뜻도 시대의 약속임을 짚는다. ② 근거 없이 느낌만 말한다 → "어떤 색이라서요?"를 묻는다. ③ 옛 작품의 이미지를 직접 보지 못해 어렵다고 느낀다 → 작품 이름과 흔히 읽히던 뜻만 말로 전하고, 이미지는 싣지 않는다.',
  }));

  // ───────────── 17차시 (핵심) ─────────────
  lessons.push(lesson(17, {
    title: '광고의 크게·작게를 맞바꾸어 뜻이 달라진 이미지 만들기',
    objective: '가상 광고에서 크게 보인 것과 작게 둔 것을 맞바꾸면 이미지의 뜻이 달라짐을 알고, 직접 맞바꾼 이미지를 만들어 나타낼 수 있다.',
    illustration: {
      prompt: art('two versions of a paper-cut snack poster, one with a huge smiling face and one with a huge nutrition table, side by side'),
      scene: scene([
        { motif: 'star', x: 100, y: 58, s: 1.1 }, { motif: 'cloud', x: 390, y: 54 }, { motif: 'hills', y: 208 },
        { motif: 'flower', x: 120, y: 222 }, { motif: 'flower', x: 350, y: 224, color: 'buttercup' },
        { motif: 'text', x: 240, y: 142, text: '크기를 바꾸면 뜻도 바뀌어요', size: 22 },
      ]),
    },
    stages: stages({
      teacher: '"지난 시간에 본 \'바삭별\' 과자 광고에서 크게 보인 것은 웃는 얼굴이었어요. 만약 영양 성분표를 가장 크게, 웃는 얼굴은 작게 바꾸면 이 광고는 어떤 말을 하게 될까요?" 학생이 말한 뜻을 칠판에 적는다. "이미지를 바꾸는 건 남의 작품을 망치는 일이에요"라는 생각을 짚고, 오늘은 우리가 연습으로 만든 가상 광고만 바꾸며 진짜 광고나 남이 만든 작품은 허락 없이 고치지 않는다고 약속을 세운다. 시연 단추로 바꾸는 방법과 달라지는 뜻이 이어지는 모습을 보여 준다.',
      student: '과자 광고에서 성분표를 가장 크게 바꾸면 어떤 말을 하게 될지 한 문장으로 말해 봅시다.',
      demo: { tool: 'mindmap', options: { mode: 'match', topic: '맞바꾸면 달라지는 뜻', slots: [{ id: 'd1', label: '성분표를 가장 크게 바꾸어요' }], cards: [{ id: 'dc1', text: '무엇이 들었는지 따져 보게 해요' }, { id: 'dc2', text: '더 사고 싶게 만들어요' }] }, sequence: [{ match: { d1: 'dc1' } }] },
    }, [
      {
        id: 'a1', title: '활동 1. 바꾸는 방법과 달라지는 뜻 이어 보기', minutes: 12, tool: 'mindmap',
        teacher: '"무엇을 크게 하고 무엇을 작게 바꾸었나요? 그러면 보는 사람은 어디부터 읽게 될까요?" 바뀐 곳을 먼저 말하고, 그 때문에 읽는 순서와 뜻이 달라진다는 것을 이어 말하게 한다. 색만 조금 바꾸고 뜻은 그대로인 경우는 뜻이 달라진 것이 아니라고 짚는다. 도전 단계의 추가 카드는 방법과 상관없는 결과라 이어지지 않는다.',
        task: '이미지를 바꾼 방법과 그 때문에 달라지는 뜻을 이어요.',
        levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          mm({ p: '이미지를 바꾼 방법과 달라지는 뜻을 이어 보세요.', mode: 'match', topic: '맞바꾸면 달라지는 뜻',
            slots: [['s1', '성분표를 가장 크게, 웃는 얼굴은 작게'], ['s2', '"맛 폭발!"을 작게, "일일 섭취량 확인"을 크게'], ['s3', '과자 사진 대신 포장을 비운 쓰레기 사진']],
            cards: [['m1', '무엇이 들었는지 따져 보게 해요'], ['m2', '맛보다 먹는 양을 먼저 생각하게 해요'], ['m3', '먹은 뒤 쓰레기도 생각하게 해요'], ['m4', '더 많이 사고 싶게 만들어요']], extra: ['m5', '색이 더 예뻐져요'],
            target: { match: { s1: 'm1', s2: 'm2', s3: 'm3' } }, d: 0.2,
            hints: ['바꾼 것이 크게 보이면 읽는 사람이 먼저 무엇을 생각하게 될지 따라가 봐요.'] }),
          mm({ p: '뜻이 달라지도록 바꾼 방법만 모두 고르세요.', mode: 'pick', topic: '이미지 바꾸기', basket: '뜻이 달라지는 방법',
            cards: [['p1', '강조하는 것과 작게 둔 것을 맞바꾼다'], ['p2', '빠진 정보를 큰 글씨로 더한다'], ['p3', '같은 그림에 색만 조금 연하게 바꾼다'], ['p4', '그림 속 사람을 다른 사람으로 바꾼다']], extra: ['p5', '그림 테두리를 지운다'],
            target: { pick: ['p1', 'p2', 'p4'] }, d: 0.25,
            hints: ['바꾸고 나서 보는 사람이 읽는 내용이 달라지는지 따져 봐요.'] }),
          mm({ p: '이미지를 바꿀 때 지킬 것과 지키지 않을 것을 나누어 넣어 보세요.', topic: '이미지를 바꿀 때',
            slots: [['do', '지킬 것'], ['not', '하지 않을 것']],
            cards: [['c1', '내가 만든 연습용 광고를 바꾼다'], ['c2', '바꾼 까닭을 짝에게 말한다'], ['c3', '남의 작품을 허락 없이 고친다'], ['c4', '진짜 광고처럼 보이게 꾸며 속인다']], extra: ['c5', '그림 도구를 챙긴다'],
            target: { sort: { do: ['c1', 'c2'], not: ['c3', 'c4'] } }, d: 0.3,
            predict: { q: '이미지를 바꾸는 일은 모두 남의 작품을 망치는 일일까요?', options: ['모두 망치는 일이에요', '내가 만든 것이고 까닭을 밝히면 새 뜻을 만드는 일이에요'], answer: 1 },
            conclude: '내가 직접 만든 연습용 이미지를 까닭과 함께 바꾸는 것은 새 뜻을 만드는 일이고, 남의 작품은 허락 없이 고치지 않아요.' }),
        ],
      },
      {
        id: 'a2', title: '활동 2. 크게·작게를 맞바꾼 광고 만들기', minutes: 13, tool: 'collage',
        teacher: '"바꾼 뒤 가장 크게 보이는 것이 무엇이어야 새 뜻이 전해질까요?" 성분표 상자를 크게, 별 모양 장식을 작게 바꾸는 시범을 보인다. 바꾸지 않고 조각만 더 붙이는 학생에게는 크게 하던 것이 작아졌는지 확인하게 한다.',
        task: '강조하던 조각과 작게 두던 조각의 크기를 맞바꾸어 새 광고를 만들어요.',
        levels: { easy: { shapes: ['rect', 'star', 'circle'], colors: ['하양', '검정', '빨강', '노랑'] }, base: { shapes: ['rect', 'star', 'circle', 'heart', 'triangle'], colors: ['하양', '검정', '빨강', '노랑', '파랑', '분홍'] }, challenge: {} },
        items: [
          { prompt: '성분표를 크게 만들어요. 큰 하양 긴 네모 위에 작은 검정 긴 네모 글줄을 네 개 겹치고, 작은 빨강 별 하나를 더해요.', target: { has: [{ shape: 'rect', color: '하양', size: 'l', n: 1 }, { shape: 'rect', color: '검정', size: 's', n: 4 }, { shape: 'star', color: '빨강', size: 's', n: 1 }], overlap: 4 }, difficulty: 0.2 },
          { prompt: '웃는 얼굴을 작게 바꿔요. 작은 노랑 동그라미 하나와 큰 검정 긴 네모 글자 바탕 하나를 붙여요.', target: { has: [{ shape: 'circle', color: '노랑', size: 's', n: 1 }, { shape: 'rect', color: '검정', size: 'l', n: 1 }] }, difficulty: 0.25 },
          { prompt: '연습용 가상 광고 하나의 크게·작게를 맞바꾸어 나타내고 점검해요.', target: { selfCheck: ['크게 하던 것을 작게 바꾸었어요', '작게 하던 것을 크게 바꾸었어요', '짝이 바뀐 뒤의 뜻을 읽어 말했어요'], minPieces: 4 }, difficulty: 0.1 },
        ],
      },
    ], '"크게·작게를 맞바꾸니 광고의 뜻이 어떻게 달라졌나요?" 바꾼 곳과 달라진 뜻을 두 줄로 칠판에 적는다. 출구 2번에서 "이미지를 바꾸면 남의 작품을 망치는 거예요"를 고른 학생에게는 오늘 약속(내가 만든 연습용만 바꾸고 까닭을 밝힌다)을 다시 읽게 한다.', [
      exMm({ p: '이미지를 바꾼 방법과 달라지는 뜻을 이어 보세요.', mode: 'match', topic: '맞바꾸면 달라지는 뜻',
        slots: [['e1', '"시원함 두 배!"를 작게, 열량 표를 크게'], ['e2', '웃는 얼굴을 작게, 쓰레기 사진을 크게']], cards: [['x1', '먹는 양을 먼저 생각하게 해요'], ['x2', '먹은 뒤 환경을 생각하게 해요'], ['x3', '더 사고 싶게 해요']],
        target: { match: { e1: 'x1', e2: 'x2' } }, d: 0.15 }),
      { type: 'choice', prompt: '이미지를 다시 만들 때 알맞은 태도는?', options: ['남의 작품을 마음대로 고쳐 쓴다.', '내가 만든 연습용 이미지를 까닭과 함께 바꾼다.', '진짜 광고처럼 꾸며 사람들을 속인다.'], answer: 1, difficulty: 0.15, explain: '내가 만든 이미지를 바꾸어 새 뜻을 만들고, 바꾼 까닭을 밝혀요.' },
      { type: 'mood', prompt: '광고를 맞바꾸어 새 뜻을 만들어 보니 어땠나요?' },
    ]),
    worksheet: {
      title: '크게·작게 맞바꾸기',
      items: [
        { type: 'table', prompt: '연습용 광고 하나를 골라 바꾸기 전과 후를 쓰세요.', columns: ['바꾸기 전 크게 한 것', '바꾼 뒤 크게 한 것', '달라진 뜻'], cells: [['웃는 얼굴', '성분표', '무엇이 들었는지 따져 보게 해요'], ['', '', ''], ['', '', '']] },
        { type: 'figure', wide: true, prompt: '성분표가 가장 크게 보이도록 글줄 조각을 두 줄 더 그려 넣으세요.', tool: 'collage', options: { printColors: false }, figures: [{ state: { pieces: [{ shape: 'rect', color: '하양', size: 'l', x: 280, y: 200, r: 0 }, { shape: 'rect', color: '검정', size: 's', x: 280, y: 160, r: 0 }, { shape: 'circle', color: '노랑', size: 's', x: 440, y: 320, r: 0 }] }, caption: '하양 큰 긴 네모 성분표와 검정 글줄 하나, 오른쪽 아래 노랑 작은 동그라미 얼굴' }], answer: '검정 글줄 조각을 성분표 안에 두 개 이상 더 그린다' },
        { type: 'choice', prompt: '뜻이 달라지도록 바꾼 것에 ○ 하세요.', options: ['글씨 색만 조금 연하게 바꿨어요', '성분표를 가장 크게, 웃는 얼굴은 작게 바꿨어요', '그림 테두리를 지웠어요'], answer: '성분표를 가장 크게, 웃는 얼굴은 작게 바꿨어요' },
        { type: 'short', prompt: '이미지를 바꾸기 전에 지킬 약속 두 가지를 쓰세요.' },
      ],
      easy: {
        note: '크게 보이는 것이 바뀌면 보는 사람이 먼저 읽는 것도 바뀌어서 뜻이 달라져요.',
        items: [
          { type: 'table', prompt: '바꾸기 전과 후를 쓰세요.', columns: ['전', '후'], cells: [['', '']] },
          { type: 'choice', prompt: '뜻이 달라지는 바꾸기에 ○ 하세요.', options: ['성분표를 크게 한다', '글자 색을 조금 바꾼다'], answer: '성분표를 크게 한다' },
          { type: 'draw', prompt: '크게·작게를 바꾼 광고를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 놓으면 바로 맞는지 표시돼요. 색종이는 모양 세 가지, 색 네 가지예요.',
      base: '스스로 이은 뒤 확인해요. 고르개는 모양 다섯 가지, 색 여섯 가지예요.',
      challenge: '이어지지 않는 카드가 하나씩 더 섞여 있어요. 색종이는 모든 모양·색 가운데 골라 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 이미지를 바꾸는 일은 남의 작품을 망치는 일이라고 여긴다 → 내가 만든 연습용만 바꾸고 까닭을 밝히며 남의 작품은 허락 없이 고치지 않는다는 약속을 세운다. ② 조각만 더 붙이고 크기를 맞바꾸지 않는다 → 크게 하던 것이 작아졌는지 확인하게 한다. ③ 색만 바꾸고 뜻이 바뀐 줄 안다 → 읽는 순서가 바뀌었는지 짝에게 묻게 한다. 진짜 광고나 상표는 쓰지 않는다.',
  }));

  // ───────────── 18차시 (연습) ─────────────
  lessons.push(lesson(18, {
    title: '학교 안내 포스터에서 알릴 것의 크기를 정해 다시 구성하기',
    objective: '학교 안내 포스터에 넣을 내용을 중요한 순서로 나누어 크게·보통·작게 정하고, 그 크기대로 포스터를 구성할 수 있다.',
    illustration: {
      prompt: art('a paper-cut school notice poster with one huge headline, a medium picture and a small footnote in layered pastel colors'),
      scene: scene([
        { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 100, y: 52 }, { motif: 'hills', y: 208 },
        { motif: 'house', x: 130, y: 214 }, { motif: 'tree', x: 350, y: 216 }, { motif: 'bird', x: 250, y: 86 },
        { motif: 'text', x: 240, y: 142, text: '알릴 것의 크기를 정해요', size: 22 },
      ]),
    },
    stages: stages({
      teacher: '"도서관 앞에 붙일 \'책은 한 번에 세 권까지 빌려요\' 포스터를 만든다면 가장 크게 보일 것은 무엇이어야 할까요?" 학생이 말한 것(책 그림, 세 권, 반납 날짜)을 중요한 순서로 세 줄 칠판에 적는다. "포스터는 그냥 예쁘게만 만들면 돼요"라는 생각을 짚고, 읽는 사람이 꼭 알아야 할 것을 가장 크게 둔다고 연다. 시연 단추로 내용 카드가 크게·보통·작게 칸에 나뉘는 모습을 보여 준다.',
      student: '도서관 포스터에서 읽는 사람이 꼭 알아야 할 것 하나를 말해 봅시다.',
      demo: { tool: 'mindmap', options: { topic: '도서관 포스터', slots: [{ id: 'big', label: '크게' }, { id: 'mid', label: '보통' }, { id: 'small', label: '작게' }], cards: [{ id: 'd1', text: '세 권까지 빌려요' }, { id: 'd2', text: '책 그림' }, { id: 'd3', text: '만든 학급 이름' }] }, sequence: [{ sort: { big: ['d1'], mid: ['d2'], small: ['d3'] } }] },
    }, [
      {
        id: 'a1', title: '활동 1. 알릴 내용을 크게·보통·작게로 나누기', minutes: 12, tool: 'mindmap',
        teacher: '"읽는 사람이 이 포스터에서 단 하나만 기억한다면 무엇이면 좋겠어요?" 그것을 크게, 있으면 도움이 되는 것을 보통, 없어도 되지만 알려야 하는 것을 작게 둔다고 기준을 세운다. 작은 글씨로 두어도 빠뜨리면 안 되는 안전 정보가 있음을 짚는다. 도전 단계의 추가 카드는 포스터에 넣을 이유가 없는 것이라 어느 칸에도 넣지 않는다.',
        task: '내용 카드를 읽고 크게·보통·작게 칸으로 나누어요.',
        levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          mm({ p: '도서관 포스터에 넣을 내용을 세 칸에 나누어 넣어 보세요.', topic: '도서관 이용 포스터',
            slots: [['big', '가장 크게'], ['mid', '보통 크기로'], ['small', '작게']],
            cards: [['a1', '책은 한 번에 세 권까지'], ['a2', '책 그림'], ['a3', '만든 모둠 이름'], ['a4', '반납 기한 안내']], extra: ['a5', '도서관 건물의 지은 해'],
            target: { sort: { big: ['a1'], mid: ['a2', 'a4'], small: ['a3'] } }, d: 0.2,
            hints: ['읽는 사람이 꼭 기억해야 할 것은 크게, 곁들이는 것은 작게 두어요.'] }),
          mm({ p: '급식실 포스터에 넣을 내용을 세 칸에 나누어 넣어 보세요.', topic: '급식실 줄서기 포스터',
            slots: [['big', '가장 크게'], ['mid', '보통 크기로'], ['small', '작게']],
            cards: [['b1', '뛰지 말고 걸어요'], ['b2', '식판 든 학생 그림'], ['b3', '학년별 급식 시간'], ['b4', '포스터 만든 날짜']], extra: ['b5', '식당 바닥 타일 개수'],
            target: { sort: { big: ['b1'], mid: ['b2', 'b3'], small: ['b4'] } }, d: 0.25,
            hints: ['다치지 않으려면 먼저 알아야 할 것을 가장 크게 두어요.'] }),
          mm({ p: '운동장 포스터에 넣을 내용을 세 칸에 나누어 넣어 보세요.', topic: '운동장 안전 포스터',
            slots: [['big', '가장 크게'], ['mid', '보통 크기로'], ['small', '작게']],
            cards: [['c1', '공이 날아오는지 살펴요'], ['c2', '공놀이하는 아이 그림'], ['c3', '쉬는 시간 이용 안내'], ['c4', '그린 사람 이름']], extra: ['c5', '운동장 넓이'],
            target: { sort: { big: ['c1'], mid: ['c2', 'c3'], small: ['c4'] } }, d: 0.3,
            predict: { q: '모든 내용을 같은 크기로 쓰면 읽는 사람이 꼭 알아야 할 것을 알아볼까요?', options: ['잘 알아봐요', '무엇이 중요한지 알기 어려워요'], answer: 1 },
            conclude: '꼭 알아야 할 것을 가장 크게 두어야 읽는 사람이 무엇이 중요한지 곧바로 알아봐요.' }),
        ],
      },
      {
        id: 'a2', title: '활동 2. 정한 크기대로 포스터 구성하기', minutes: 13, tool: 'collage',
        teacher: '"가장 크게 정한 것이 포스터에서 가장 크게 보이나요?" 큰 조각 하나, 보통 조각 둘, 작은 조각 하나로 세 단계의 크기를 나누는 시범을 보인다. 모든 조각을 같은 크기로 붙인 학생에게는 읽는 사람이 먼저 볼 것이 무엇인지 되묻는다.',
        task: '크게·보통·작게로 정한 내용을 조각 크기로 나타내요.',
        levels: { easy: { shapes: ['rect', 'circle', 'star'], colors: ['빨강', '노랑', '파랑', '검정'] }, base: { shapes: ['rect', 'circle', 'star', 'heart', 'triangle'], colors: ['빨강', '노랑', '파랑', '검정', '초록', '하양'] }, challenge: {} },
        items: [
          { prompt: '도서관 포스터를 구성해요. 큰 빨강 긴 네모 하나, 보통 노랑 동그라미 둘, 작은 검정 긴 네모 하나를 붙여요.', target: { has: [{ shape: 'rect', color: '빨강', size: 'l', n: 1 }, { shape: 'circle', color: '노랑', size: 'm', n: 2 }, { shape: 'rect', color: '검정', size: 's', n: 1 }] }, difficulty: 0.2 },
          { prompt: '운동장 포스터를 구성해요. 큰 노랑 별 하나, 보통 파랑 동그라미 하나, 작은 검정 긴 네모 하나를 붙여요.', target: { has: [{ shape: 'star', color: '노랑', size: 'l', n: 1 }, { shape: 'circle', color: '파랑', size: 'm', n: 1 }, { shape: 'rect', color: '검정', size: 's', n: 1 }] }, difficulty: 0.25 },
          { prompt: '학교에 붙일 안내 포스터를 정해 크기를 나누어 구성하고 점검해요.', target: { selfCheck: ['가장 크게 둘 것을 정해 가장 크게 붙였어요', '보통 크기와 작은 크기도 나누었어요', '짝이 먼저 보이는 것을 말했어요'], minPieces: 4 }, difficulty: 0.1 },
        ],
      },
    ], '"포스터에서 가장 크게 둔 것과 그렇게 정한 까닭을 말해 볼까요?" 두세 명이 "가장 크게 둔 것은 ~인데, 그래야 ~하기 때문이에요"의 틀로 말하게 한다. 출구 2번에서 "예쁘게만 만들면 돼요"를 고른 학생에게는 오늘 포스터마다 꼭 알아야 할 것이 달랐던 일을 떠올리게 한다.', [
      exMm({ p: '교실 포스터에 넣을 내용을 세 칸에 나누어 넣어 보세요.', topic: '교실 청소 포스터',
        slots: [['big', '가장 크게'], ['mid', '보통 크기로'], ['small', '작게']], cards: [['e1', '쓰레기는 분리해서 버려요'], ['e2', '빗자루 그림'], ['e3', '청소 당번 이름']],
        target: { sort: { big: ['e1'], mid: ['e2'], small: ['e3'] } }, d: 0.15 }),
      { type: 'choice', prompt: '포스터에서 가장 크게 둘 내용으로 알맞은 것은?', options: ['만든 사람의 이름', '읽는 사람이 꼭 알아야 할 안내', '장식용 별 그림'], answer: 1, difficulty: 0.15, explain: '꼭 알아야 할 것을 가장 크게 두어야 읽는 사람이 곧바로 알아봐요.' },
      { type: 'mood', prompt: '포스터의 크기를 정해 구성해 보니 어땠나요?' },
    ]),
    worksheet: {
      title: '알릴 것의 크기 정하기',
      items: [
        { type: 'table', prompt: '학교에 붙일 포스터 하나를 정해 내용을 크기별로 쓰세요.', columns: ['크기', '넣을 내용', '그렇게 정한 까닭'], cells: [['크게', '책은 세 권까지', '꼭 알아야 해서'], ['보통', '', ''], ['작게', '', '']] },
        { type: 'figure', wide: true, prompt: '큰 조각이 가장 눈에 띄는지 보고, 작은 조각 하나를 더 그려 넣으세요.', tool: 'collage', options: { printColors: false }, figures: [{ state: { pieces: [{ shape: 'rect', color: '빨강', size: 'l', x: 280, y: 160, r: 0 }, { shape: 'circle', color: '노랑', size: 'm', x: 200, y: 280, r: 0 }, { shape: 'circle', color: '노랑', size: 'm', x: 360, y: 280, r: 0 }] }, caption: '위: 빨강 큰 긴 네모, 아래 양쪽: 노랑 보통 동그라미' }], answer: '작은 검정 긴 네모(글줄)를 오른쪽 아래 구석에 하나 더 그린다' },
        { type: 'choice', prompt: '급식실 포스터에서 가장 크게 둘 내용은?', options: ['포스터 만든 날짜', '뛰지 말고 걸어요', '식당 타일 개수'], answer: '뛰지 말고 걸어요' },
        { type: 'short', prompt: '내 포스터에서 가장 크게 둔 것과 그 까닭을 한 문장으로 쓰세요.' },
      ],
      easy: {
        note: '다치지 않으려면, 또는 해야 할 일을 위해 꼭 알아야 하는 것을 가장 크게 둬요.',
        items: [
          { type: 'table', prompt: '크기별 내용을 쓰세요.', columns: ['크기', '내용'], cells: [['크게', ''], ['작게', '']] },
          { type: 'choice', prompt: '가장 크게 둘 내용에 ○ 하세요.', options: ['공이 날아오는지 살펴요', '그린 사람 이름'], answer: '공이 날아오는지 살펴요' },
          { type: 'draw', prompt: '크기를 나눈 포스터를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 놓으면 바로 맞는지 표시돼요. 색종이는 모양 세 가지, 색 네 가지예요.',
      base: '스스로 나누고 확인해요. 고르개는 모양 다섯 가지, 색 여섯 가지예요.',
      challenge: '포스터에 넣을 이유가 없는 카드가 하나씩 더 섞여 있어요. 색종이는 모든 모양·색 가운데 골라 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 포스터는 예쁘면 된다고 여긴다 → 읽는 사람이 꼭 알아야 할 것이 먼저 보이는지 묻는다. ② 모든 내용을 같은 크기로 쓴다 → 크게·보통·작게 세 단계로 나누게 한다. ③ 작게 둔 정보를 아예 빼 버린다 → 작아도 알려야 하는 정보는 남기게 한다. 준비물: 학교 안 안내 문구 예(도서관·급식실·운동장).',
  }));

  // ───────────── 19차시 (확장) ─────────────
  lessons.push(lesson(19, {
    title: '이미지의 뜻을 분명히 하는 짧은 문구 고르고 붙이기',
    objective: '이미지의 뜻이 또렷이 전해지는 짧은 문구와 뜻이 흐릿한 문구를 가려, 이미지 곁에 알맞은 문구를 붙여 나타낼 수 있다.',
    illustration: {
      prompt: art('a paper-cut poster of a water drop with a short clear caption under it and a long messy caption crossed out'),
      scene: scene([
        { motif: 'cloud', x: 100, y: 52 }, { motif: 'snow', x: 390, y: 54 }, { motif: 'hills', y: 208 },
        { motif: 'flower', x: 110, y: 222, color: 'mint' }, { motif: 'leaf', x: 360, y: 204, r: 25 },
        { motif: 'text', x: 240, y: 142, text: '짧고 또렷한 한 줄', size: 24 },
      ]),
    },
    stages: stages({
      teacher: '물방울 그림을 보여 주고 "이 그림 곁에 \'물을 아끼면 마르지 않는 강이 돼요\'라고 쓸까요, \'우리 모두 함께 노력하면 언젠가는 더 좋은 세상이 올 수도 있어요\'라고 쓸까요?" 하고 묻는다. 어느 문구가 그림의 뜻을 분명하게 해 주는지 말하게 한다. "문구는 길수록 뜻이 잘 전해져요"라는 생각을 짚는다. 시연 단추로 이미지와 알맞은 문구가 이어지는 모습을 보여 준다.',
      student: '물방울 그림 곁에 쓸 한 줄 문구를 하나 생각해 말해 봅시다.',
      demo: { tool: 'mindmap', options: { mode: 'match', topic: '그림에 알맞은 문구', slots: [{ id: 'd1', label: '수도꼭지에서 물방울이 떨어지는 그림' }], cards: [{ id: 'dc1', text: '꼭지를 꼭 잠가요' }, { id: 'dc2', text: '우리 모두 언젠가는 더 좋은 세상' }] }, sequence: [{ match: { d1: 'dc1' } }] },
    }, [
      {
        id: 'a1', title: '활동 1. 이미지에 알맞은 짧은 문구 고르기', minutes: 12, tool: 'mindmap',
        teacher: '"이 문구는 그림이 무엇을 말하려는지 곧바로 알려 주나요?" 한 번에 읽히고, 그림에서 본 것과 관계가 있고, 하게 하려는 행동이 보이면 알맞은 문구라고 기준을 세운다. 너무 길거나 그림과 상관없는 말은 뜻을 흐리게 한다. 도전 단계의 추가 카드는 그림과 무관한 문구라 어디에도 이어지지 않는다.',
        task: '이미지와 그 뜻을 분명히 해 주는 짧은 문구를 이어요.',
        levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          mm({ p: '이미지와 알맞은 짧은 문구를 이어 보세요.', mode: 'match', topic: '그림에 알맞은 문구',
            slots: [['s1', '수도꼭지에서 물방울이 떨어지는 그림'], ['s2', '복도에서 뛰는 아이를 가로막는 빨간 표시'], ['s3', '분리수거함에 병을 넣는 손']],
            cards: [['m1', '꼭지를 꼭 잠가요'], ['m2', '복도에서는 걸어요'], ['m3', '병은 분리해서 넣어요'], ['m4', '언제나 행복한 우리']], extra: ['m5', '구름은 흰색이에요'],
            target: { match: { s1: 'm1', s2: 'm2', s3: 'm3' } }, d: 0.2,
            hints: ['그림에서 보이는 장면이 문구의 낱말과 이어지는지 하나씩 견주어 봐요.'] }),
          mm({ p: '뜻이 또렷한 문구만 모두 고르세요.', mode: 'pick', topic: '자전거 안전 포스터', basket: '뜻이 또렷한 문구',
            cards: [['p1', '헬멧을 꼭 써요'], ['p2', '손잡이를 두 손으로 잡아요'], ['p3', '우리 모두 함께 노력하면 언젠가는 좋은 날이 올 수도 있어요'], ['p4', '어쩌면 좋을지도']], extra: ['p5', '자전거는 바퀴가 둘이에요'],
            target: { pick: ['p1', 'p2'] }, d: 0.25,
            hints: ['짧고 한 번에 읽히며 해야 할 행동이 분명하게 보이는 문구를 골라요.'] }),
          mm({ p: '문구를 알맞은 칸에 나누어 넣어 보세요.', topic: '문구 점검',
            slots: [['clear', '뜻이 또렷해요'], ['blur', '뜻이 흐릿해요']],
            cards: [['c1', '불을 끄고 나가요'], ['c2', '손은 비누로 삼십 초'], ['c3', '더 좋은 곳이 되도록 노력하는 마음을 가져 보아요'], ['c4', '그냥 잘해요']], extra: ['c5', '비누는 둥글어요'],
            target: { sort: { clear: ['c1', 'c2'], blur: ['c3', 'c4'] } }, d: 0.3,
            predict: { q: '문구가 길수록 뜻이 더 잘 전해질까요?', options: ['길수록 잘 전해져요', '짧고 또렷해야 잘 전해져요'], answer: 1 },
            conclude: '이미지를 돕는 문구는 짧고 또렷하고, 그림에서 본 것과 이어져야 뜻이 분명해져요.' }),
        ],
      },
      {
        id: 'a2', title: '활동 2. 이미지 곁에 짧은 문구 칸 붙이기', minutes: 13, tool: 'collage',
        teacher: '"문구는 그림 어디에 두면 읽기 쉬울까요? 글줄 조각은 몇 줄이 알맞을까요?" 글줄 조각을 한두 줄만 붙이는 시범을 보이고, 많이 붙일수록 읽기 어려워짐을 보여 준다. 글줄 칸을 아예 빠뜨린 학생에게는 그림만으로 전해지는지 묻는다.',
        task: '이미지 조각 곁에 짧은 문구 칸(글줄 한두 줄)을 붙여요.',
        levels: { easy: { shapes: ['circle', 'rect', 'semi', 'star'], colors: ['파랑', '검정', '하양', '노랑', '빨강'] }, base: { shapes: ['circle', 'rect', 'semi', 'star', 'triangle'], colors: ['파랑', '검정', '하양', '노랑', '빨강', '초록'] }, challenge: {} },
        items: [
          { prompt: '물방울 포스터를 만들어요. 큰 파랑 동그라미 하나 아래에 작은 검정 긴 네모 글줄을 한두 줄만 붙여요.', target: { has: [{ shape: 'circle', color: '파랑', size: 'l', n: 1 }, { shape: 'rect', color: '검정', size: 's', min: 1, max: 2 }] }, difficulty: 0.2 },
          { prompt: '안전 포스터를 만들어요. 큰 빨강 별 하나 곁에 작은 검정 긴 네모 글줄을 한 줄 이상 세 줄 이하로 붙여요.', target: { has: [{ shape: 'star', color: '빨강', size: 'l', n: 1 }, { shape: 'rect', color: '검정', size: 's', min: 1, max: 3 }] }, difficulty: 0.25 },
          { prompt: '내 이미지에 알맞은 짧은 문구를 정해 글줄 칸과 함께 나타내고 점검해요.', target: { selfCheck: ['이미지에서 본 것과 이어지는 문구를 정했어요', '문구를 짧고 또렷하게 한두 줄로 정했어요', '짝이 문구를 읽고 뜻을 말했어요'], minPieces: 3 }, difficulty: 0.1 },
        ],
      },
    ], '"내가 고른 문구가 그림의 뜻을 어떻게 분명하게 해 주나요?" 두세 명이 문구를 읽고 짝이 뜻을 맞히는지 보게 한다. 출구 2번에서 "문구는 길수록 좋아요"를 고른 학생에게는 활동 1의 길고 흐릿한 문구가 짝에게 전해지지 않았던 일을 떠올리게 한다.', [
      exMm({ p: '이미지와 알맞은 짧은 문구를 이어 보세요.', mode: 'match', topic: '그림에 알맞은 문구',
        slots: [['e1', '손을 씻는 아이 그림'], ['e2', '전등 스위치를 누르는 손 그림']], cards: [['x1', '손은 비누로 꼼꼼히'], ['x2', '나갈 땐 불을 꺼요'], ['x3', '좋은 날이 올 거예요']],
        target: { match: { e1: 'x1', e2: 'x2' } }, d: 0.15 }),
      { type: 'choice', prompt: '이미지에 붙일 문구로 가장 알맞은 것은?', options: ['길고 멋있어 보이는 말', '짧고 또렷하며 그림과 이어지는 말', '그림과 상관없는 재미있는 말'], answer: 1, difficulty: 0.15, explain: '문구는 그림에서 본 것과 이어지고 한 번에 읽혀야 뜻이 분명해져요.' },
      { type: 'mood', prompt: '짧은 문구를 골라 붙여 보니 어땠나요?' },
    ]),
    worksheet: {
      title: '이미지와 짧은 문구',
      items: [
        { type: 'table', prompt: '내 이미지에 붙일 문구 후보를 쓰고, 뜻이 또렷한지 ○ / △ 로 표시하세요.', columns: ['문구 후보', '그림과 이어지나요?', '짧고 또렷한가요?'], cells: [['꼭지를 꼭 잠가요', '○', '○'], ['', '', ''], ['', '', '']] },
        { type: 'figure', wide: true, prompt: '물방울 아래에 문구가 들어갈 글줄 조각을 한 줄 더 그려 넣으세요.', tool: 'collage', options: { printColors: false }, figures: [{ state: { pieces: [{ shape: 'circle', color: '파랑', size: 'l', x: 280, y: 160, r: 0 }, { shape: 'rect', color: '검정', size: 's', x: 280, y: 300, r: 0 }] }, caption: '위: 파랑 큰 동그라미(물방울), 아래: 검정 작은 글줄 하나' }], answer: '검정 글줄 조각을 첫 줄 아래에 한 줄 더 그린다' },
        { type: 'choice', prompt: '"복도에서 뛰는 아이" 그림에 알맞은 문구에 ○ 하세요.', options: ['복도에서는 걸어요', '언제나 행복한 우리', '구름은 흰색이에요'], answer: '복도에서는 걸어요' },
        { type: 'short', prompt: '내 이미지에 붙일 문구를 쓰고, 그 문구가 그림과 어떻게 이어지는지 쓰세요.' },
      ],
      easy: {
        note: '그림에서 본 것과 이어지고 짧고 또렷한 문구가 뜻을 분명하게 해 줘요.',
        items: [
          { type: 'table', prompt: '문구를 쓰세요.', columns: ['그림', '알맞은 문구'], cells: [['', '']] },
          { type: 'choice', prompt: '뜻이 또렷한 문구에 ○ 하세요.', options: ['손은 비누로 꼼꼼히', '그냥 잘해요'], answer: '손은 비누로 꼼꼼히' },
          { type: 'draw', prompt: '짧은 문구가 들어간 그림을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 놓으면 바로 맞는지 표시돼요. 색종이는 모양 세 가지, 색 네 가지예요.',
      base: '스스로 이은 뒤 확인해요. 고르개는 모양 다섯 가지, 색 여섯 가지예요.',
      challenge: '그림과 상관없는 문구 카드가 하나씩 더 섞여 있어요. 색종이는 모든 모양·색 가운데 골라 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 문구는 길수록 뜻이 잘 전해진다고 여긴다 → 길고 흐릿한 문구를 짝이 읽고 뜻을 말하게 해 한계를 느끼게 한다. ② 그림과 상관없이 멋있는 말을 붙인다 → 그림에서 본 장면이 문구에 나오는지 확인하게 한다. ③ 글줄을 너무 많이 붙인다 → 한두 줄로 줄이게 한다.',
  }));

  // ───────────── 20차시 (확장) ─────────────
  lessons.push(lesson(20, {
    title: '같은 이미지에 다른 문구를 붙여 뜻이 달라지는 것 보기',
    objective: '같은 이미지도 곁에 붙인 문구에 따라 읽히는 뜻이 달라짐을 확인하고, 직접 만든 이미지에만 문구를 붙여 새 뜻을 만들 수 있다.',
    illustration: {
      prompt: art('the same paper-cut umbrella picture shown twice with two different short captions that change its meaning'),
      scene: scene([
        { motif: 'cloud', x: 100, y: 52 }, { motif: 'sun', x: 400, y: 56, s: 0.7 }, { motif: 'hills', y: 208 },
        { motif: 'flower', x: 130, y: 222 }, { motif: 'flower', x: 350, y: 224, color: 'rose' },
        { motif: 'text', x: 240, y: 142, text: '같은 그림, 다른 한 줄', size: 22 },
      ]),
    },
    stages: stages({
      teacher: '우산 하나가 그려진 그림을 보여 주고 곁에 "비를 피해요"를 쓴 판과 "혼자 쓰지 말고 같이 써요"를 쓴 판을 차례로 띄운다. "같은 그림인데 어떤 뜻이 읽혔나요?" 학생이 말한 뜻을 두 줄로 칠판에 적는다. "그림이 같으면 뜻도 같아요"라는 생각을 짚는다. 문구를 붙일 이미지는 내가 직접 만든 것이거나 우리 반이 함께 만든 것만 쓰고, 남의 그림이나 사진을 허락 없이 쓰지 않는다고 약속을 세운다. 시연 단추로 문구와 읽히는 뜻이 이어지는 모습을 보여 준다.',
      student: '같은 우산 그림에 두 가지 문구를 붙였을 때 읽히는 뜻이 어떻게 다른지 말해 봅시다.',
      demo: { tool: 'mindmap', options: { mode: 'match', topic: '같은 우산 그림', slots: [{ id: 'd1', label: '"비를 피해요"' }], cards: [{ id: 'dc1', text: '비를 막는 도구로 읽혀요' }, { id: 'dc2', text: '함께 나누는 마음으로 읽혀요' }] }, sequence: [{ match: { d1: 'dc1' } }] },
    }, [
      {
        id: 'a1', title: '활동 1. 같은 그림에 문구마다 읽히는 뜻 이어 보기', minutes: 12, tool: 'mindmap',
        teacher: '"문구를 바꾸었더니 그림에서 먼저 보이는 것이 달라졌나요?" 같은 그림도 문구에 따라 크게 보이는 쪽이 달라진다고 짚는다. 마지막 문항은 이미지를 쓸 때 지킬 일을 나누는 것이므로, 내가 만든 것과 허락받고 출처를 적어야 할 것을 가려 말하게 한다.',
        task: '같은 그림에 붙인 문구와 읽히는 뜻을 이어요. 이미지를 써도 되는 경우를 나누어요.',
        levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          mm({ p: '같은 우산 그림에 붙인 문구와 읽히는 뜻을 이어 보세요.', mode: 'match', topic: '같은 우산 그림',
            slots: [['s1', '"비를 피해요"'], ['s2', '"혼자 쓰지 말고 같이 써요"'], ['s3', '"비 오는 날도 소풍처럼"']],
            cards: [['m1', '비를 막는 도구로 읽혀요'], ['m2', '함께 나누는 마음으로 읽혀요'], ['m3', '비 오는 날도 즐거운 기분으로 읽혀요'], ['m4', '우산 가게 광고로 읽혀요']], extra: ['m5', '날씨를 알려 주는 말로 읽혀요'],
            target: { match: { s1: 'm1', s2: 'm2', s3: 'm3' } }, d: 0.2,
            hints: ['문구의 낱말(피해요·같이·소풍)이 그림을 어떤 뜻으로 읽게 하는지 따져 봐요.'] }),
          mm({ p: '같은 꽃병 그림에 붙인 문구와 읽히는 뜻을 이어 보세요.', mode: 'match', topic: '같은 꽃병 그림',
            slots: [['t1', '"오늘도 고마워요"'], ['t2', '"시들기 전에 물을 줘요"'], ['t3', '"처음 만난 날을 기억해요"']],
            cards: [['q1', '고마운 마음을 전하는 선물로 읽혀요'], ['q2', '돌보라는 부탁으로 읽혀요'], ['q3', '추억을 떠올리는 물건으로 읽혀요'], ['q4', '꽃병을 팔자는 광고로 읽혀요']], extra: ['q5', '날씨 안내로 읽혀요'],
            target: { match: { t1: 'q1', t2: 'q2', t3: 'q3' } }, d: 0.25,
            hints: ['문구가 같은 꽃병을 선물·부탁·추억 가운데 어떤 쪽으로 읽게 하는지 살펴요.'] }),
          mm({ p: '이미지에 문구를 붙일 때 어떤 경우인지 칸에 나누어 넣어 보세요.', topic: '이미지를 쓸 때',
            slots: [['ok', '내가 만든 것이라 바로 써요'], ['ask', '허락받고 출처를 적어야 해요']],
            cards: [['c1', '내가 직접 그린 포스터'], ['c2', '우리 모둠이 함께 만든 포스터'], ['c3', '친구가 그린 그림'], ['c4', '인터넷에서 가져온 사진']], extra: ['c5', '내 필통 사진'],
            target: { sort: { ok: ['c1', 'c2'], ask: ['c3', 'c4'] } }, d: 0.3,
            predict: { q: '같은 그림에 문구만 바꾸어도 읽히는 뜻이 달라질까요?', options: ['달라지지 않아요', '달라질 수 있어요'], answer: 1 },
            conclude: '같은 그림도 곁에 붙인 문구에 따라 뜻이 달라져서, 내가 만든 이미지에 까닭과 함께 문구를 붙여야 해요.' }),
        ],
      },
      {
        id: 'a2', title: '활동 2. 같은 이미지에 두 문구 칸을 달리 붙이기', minutes: 13, tool: 'collage',
        teacher: '"같은 그림이니 이미지 조각은 그대로 두고 문구 칸만 바꿔요." 큰 이미지 조각은 같게 하고 글줄 조각의 자리와 개수만 달리하는 시범을 보인다. 이미지 조각까지 바꾸어 버리는 학생에게는 지금 보려는 것이 무엇인지 되묻는다. 마지막 문항은 짝이 두 문구를 읽고 읽은 뜻을 말한 뒤 점검한다.',
        task: '같은 이미지 조각에 문구 칸을 위에 붙인 것과 아래에 붙인 것을 만들어요.',
        levels: { easy: { shapes: ['semi', 'rect', 'circle'], colors: ['빨강', '검정', '하양', '파랑'] }, base: { shapes: ['semi', 'rect', 'circle', 'star', 'triangle'], colors: ['빨강', '검정', '하양', '파랑', '노랑', '초록'] }, challenge: {} },
        items: [
          { prompt: '우산 그림에 문구를 위에 붙여요. 큰 빨강 반원 우산 하나와 작은 검정 긴 네모 글줄 한 줄을 붙여요.', target: { has: [{ shape: 'semi', color: '빨강', size: 'l', n: 1 }, { shape: 'rect', color: '검정', size: 's', n: 1 }] }, difficulty: 0.2 },
          { prompt: '같은 우산 그림에 문구를 두 줄로 붙여요. 큰 빨강 반원 하나와 작은 검정 긴 네모 글줄 두 줄을 붙여요.', target: { has: [{ shape: 'semi', color: '빨강', size: 'l', n: 1 }, { shape: 'rect', color: '검정', size: 's', n: 2 }] }, difficulty: 0.25 },
          { prompt: '내가 만든 이미지에 두 가지 문구를 붙여 보고 점검해요.', target: { selfCheck: ['내가 만든 이미지만 썼어요', '문구 두 가지를 정해 곁에 번갈아 붙여 보았어요', '짝이 두 문구에서 읽은 뜻이 달랐는지 말했어요'], minPieces: 3 }, difficulty: 0.1 },
        ],
      },
    ], '"같은 그림에 문구가 다르니 읽은 뜻이 어떻게 달라졌나요?" 짝의 말에서 달라진 낱말을 칠판에 모은다. 출구 2번에서 "그림이 같으면 뜻도 같아요"를 고른 학생에게는 우산 그림의 세 문구를 떠올리게 한다.', [
      exMm({ p: '같은 책 그림에 붙인 문구와 읽히는 뜻을 이어 보세요.', mode: 'match', topic: '같은 책 그림',
        slots: [['e1', '"오늘 한 쪽만 더"'], ['e2', '"친구와 바꿔 읽어요"']], cards: [['x1', '꾸준히 읽으라는 말로 읽혀요'], ['x2', '나누어 읽자는 말로 읽혀요'], ['x3', '책 파는 말로 읽혀요']],
        target: { match: { e1: 'x1', e2: 'x2' } }, d: 0.15 }),
      { type: 'choice', prompt: '같은 이미지에 문구를 붙일 때 알맞은 태도는?', options: ['남이 만든 사진에 허락 없이 문구를 붙인다.', '내가 만든 이미지에 까닭을 밝히며 문구를 붙인다.', '진짜 광고처럼 속이려고 문구를 붙인다.'], answer: 1, difficulty: 0.15, explain: '내가 만든 이미지에 문구로 새 뜻을 만들고, 남의 것은 허락과 출처가 필요해요.' },
      { type: 'mood', prompt: '같은 그림에 문구를 달리 붙여 보니 어땠나요?' },
    ]),
    worksheet: {
      title: '같은 그림, 다른 문구',
      items: [
        { type: 'table', prompt: '같은 그림에 문구 두 가지를 붙이고 읽히는 뜻을 쓰세요.', columns: ['붙인 문구', '읽히는 뜻'], cells: [['비를 피해요', '비를 막는 도구'], ['', ''], ['', '']] },
        { type: 'figure', wide: true, prompt: '우산 그림 곁에 글줄 조각을 한 줄 더 그려 두 줄 문구 칸을 만드세요.', tool: 'collage', options: { printColors: false }, figures: [{ state: { pieces: [{ shape: 'semi', color: '빨강', size: 'l', x: 280, y: 180, r: 0 }, { shape: 'rect', color: '검정', size: 's', x: 280, y: 300, r: 0 }] }, caption: '위: 빨강 큰 반원(우산), 아래: 검정 작은 글줄 하나' }], answer: '검정 글줄 조각을 첫 줄 아래나 위에 한 줄 더 그린다' },
        { type: 'choice', prompt: '"혼자 쓰지 말고 같이 써요" 문구가 붙으면 우산 그림은 어떤 뜻으로 읽히나요?', options: ['함께 나누는 마음', '우산 가게 광고', '날씨 안내'], answer: '함께 나누는 마음' },
        { type: 'short', prompt: '이미지에 문구를 붙이기 전에 지킬 약속 두 가지를 쓰세요.' },
      ],
      easy: {
        note: '같은 그림도 곁에 붙은 문구에 따라 읽히는 뜻이 달라져요.',
        items: [
          { type: 'table', prompt: '같은 그림에 붙일 문구와 읽히는 뜻을 쓰세요.', columns: ['문구', '뜻'], cells: [['', '']] },
          { type: 'choice', prompt: '내가 만든 것이라 바로 써도 되는 것에 ○ 하세요.', options: ['내가 직접 그린 포스터', '인터넷에서 가져온 사진'], answer: '내가 직접 그린 포스터' },
          { type: 'draw', prompt: '내 그림에 문구를 붙여 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 놓으면 바로 맞는지 표시돼요. 색종이는 모양 세 가지, 색 네 가지예요.',
      base: '스스로 이은 뒤 확인해요. 고르개는 모양 다섯 가지, 색 여섯 가지예요.',
      challenge: '어디에도 이어지지 않는 카드가 하나씩 더 섞여 있어요. 색종이는 모든 모양·색 가운데 골라 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 그림이 같으면 뜻도 같다고 여긴다 → 같은 우산 그림에 문구 세 가지를 붙여 읽은 뜻을 견주게 한다. ② 이미지를 아무 데서나 가져다 쓴다 → 내가 만든 것·우리 반이 함께 만든 것만 쓰고 남의 것은 허락과 출처가 필요함을 약속한다. ③ 문구를 바꿀 때 이미지 조각까지 바꾼다 → 이미지는 그대로, 문구 칸만 바꾸게 한다.',
  }));

  // ───────────── 21차시 (핵심) ─────────────
  lessons.push(lesson(21, {
    title: '친구가 읽은 뜻과 내가 의도한 뜻을 견주어 고칠 곳 찾기',
    objective: '다시 만든 이미지를 친구에게 보이고, 친구가 읽은 뜻이 내가 의도한 뜻과 같은지 반응으로 확인해 고칠 곳을 한 군데 찾을 수 있다.',
    illustration: {
      prompt: art('two children comparing a remade paper-cut snack poster, one reading it aloud while the other points to a bigger nutrition table'),
      scene: scene([
        { motif: 'sun', x: 410, y: 56, s: 0.7 }, { motif: 'cloud', x: 100, y: 52 }, { motif: 'hills', y: 208 },
        { motif: 'flower', x: 120, y: 222 }, { motif: 'flower', x: 360, y: 224, color: 'buttercup' }, { motif: 'bird', x: 250, y: 86 },
        { motif: 'text', x: 240, y: 142, text: '친구는 어떻게 읽었을까', size: 22 },
      ]),
    },
    stages: stages({
      teacher: '"내가 다시 만든 광고가 \'먹는 양을 먼저 생각하게 해요\'라는 뜻이라고 쳐요. 친구가 \'더 사고 싶어요\'라고 읽었다면 무슨 일이 일어난 걸까요?" 학생이 말한 짐작을 칠판에 적는다. "다시 만들었으니 뜻은 당연히 내가 생각한 대로 전해져요"라는 생각을 짚고, 친구 반응으로 확인해야 한다고 연다. 시연 단추로 친구 반응이 같게·다르게 읽은 칸으로 나뉘는 모습을 보여 준다.',
      student: '내가 만든 이미지를 친구가 어떻게 읽을지 짐작해서 한 문장으로 말해 봅시다.',
      demo: { tool: 'mindmap', options: { topic: '다시 만든 과자 광고', slots: [{ id: 'same', label: '내 뜻과 같게 읽었어요' }, { id: 'diff', label: '다르게 읽었어요' }], cards: [{ id: 'd1', text: '먹는 양을 먼저 생각하게 하네요' }, { id: 'd2', text: '더 사고 싶어지네요' }] }, sequence: [{ sort: { same: ['d1'], diff: ['d2'] } }] },
    }, [
      {
        id: 'a1', title: '활동 1. 친구 반응이 내 뜻과 같은지 가르기', minutes: 12, tool: 'mindmap',
        teacher: '"친구가 한 말 속에 내가 의도한 뜻의 낱말이 있나요?" 낱말 하나(양, 따져, 쓰레기)가 겹치는지 보게 한다. 다르게 읽혔다면 어느 조각이나 문구 때문에 그렇게 읽혔는지 이미지에서 근거를 찾게 한다. 도전 단계의 이미지와 상관없는 말은 뜻을 읽은 것이 아니므로 어느 칸에도 넣지 않는다.',
        task: '친구 말을 읽고 내가 의도한 뜻과 같게 읽었는지 다르게 읽었는지 나누어요.',
        levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          mm({ p: '내가 의도한 뜻은 "먹는 양을 먼저 생각하게 해요"예요. 친구 반응을 나누어 넣어 보세요.', topic: '성분표를 크게 만든 광고',
            slots: [['same', '내 뜻과 같게 읽었어요'], ['diff', '다르게 읽었어요']],
            cards: [['a1', '먹기 전에 얼마나 먹을지 생각하게 해요'], ['a2', '성분표가 커서 양을 먼저 보게 돼요'], ['a3', '이 과자를 더 사고 싶어져요'], ['a4', '맛있다는 광고 같아요']], extra: ['a5', '그림이 예뻐요'],
            target: { sort: { same: ['a1', 'a2'], diff: ['a3', 'a4'] } }, d: 0.2,
            hints: ['내가 의도한 뜻의 낱말(양·먼저·생각)이 친구 말에도 나오는지 찾아봐요.'] }),
          mm({ p: '내가 의도한 뜻은 "쓰레기도 함께 생각해요"예요. 친구 반응을 나누어 넣어 보세요.', topic: '쓰레기 사진을 크게 만든 광고',
            slots: [['same', '내 뜻과 같게 읽었어요'], ['diff', '다르게 읽었어요']],
            cards: [['b1', '먹은 뒤 쓰레기도 생각하게 하네요'], ['b2', '버리는 것까지 챙기라는 말 같아요'], ['b3', '이 과자가 맛있다는 말 같아요'], ['b4', '쓰레기통을 파는 광고 같아요']], extra: ['b5', '글씨가 작아요'],
            target: { sort: { same: ['b1', 'b2'], diff: ['b3', 'b4'] } }, d: 0.25,
            hints: ['쓰레기와 챙김이라는 뜻이 친구 말에 담겨 있는지 가려요.'] }),
          mm({ p: '내가 의도한 뜻은 "물을 아끼자"예요. 친구 반응을 나누어 넣어 보세요.', topic: '물방울 포스터',
            slots: [['same', '내 뜻과 같게 읽었어요'], ['diff', '다르게 읽었어요']],
            cards: [['c1', '수돗물을 아껴 써야겠다고 생각했어요'], ['c2', '꼭지를 잠가야 한다는 말 같아요'], ['c3', '비가 온다는 일기예보 같아요'], ['c4', '파란 물감 광고 같아요']], extra: ['c5', '선이 가늘어요'],
            target: { sort: { same: ['c1', 'c2'], diff: ['c3', 'c4'] } }, d: 0.3,
            predict: { q: '이미지를 다시 만들면 내가 의도한 뜻이 늘 그대로 전해질까요?', options: ['늘 그대로 전해져요', '친구에게 물어봐야 알 수 있어요'], answer: 1 },
            conclude: '다시 만든 이미지도 친구 반응으로 확인해야 내가 의도한 뜻이 전해졌는지 알 수 있어요.' }),
        ],
      },
      {
        id: 'a2', title: '활동 2. 다르게 읽힌 곳을 한 군데 고치기', minutes: 13, tool: 'collage',
        teacher: '"물방울이 비로 읽혔다면 어떤 조각을 더하면 물을 아끼자는 뜻이 보일까요?" 닫힌 수도꼭지를 나타내는 작은 조각을 더하거나 글줄을 한 줄 붙이는 시범을 보인다. 한 가지 반응에 이미지를 모두 갈아엎는 학생에게는 가장 작게 고쳐서 풀릴 곳을 한 군데 고르게 한다.',
        task: '친구가 다르게 읽은 곳 한 군데를 조각으로 더하거나 바꾸어요.',
        levels: { easy: { shapes: ['circle', 'rect', 'semi'], colors: ['파랑', '검정', '하양', '노랑'] }, base: { shapes: ['circle', 'rect', 'semi', 'star', 'triangle'], colors: ['파랑', '검정', '하양', '노랑', '빨강', '초록'] }, challenge: {} },
        items: [
          { prompt: '물을 아끼자는 뜻이 보이게 고쳐요. 큰 파랑 동그라미 물방울 아래에 작은 검정 긴 네모 글줄을 한 줄 붙여요.', target: { has: [{ shape: 'circle', color: '파랑', size: 'l', n: 1 }, { shape: 'rect', color: '검정', size: 's', n: 1 }] }, difficulty: 0.2 },
          { prompt: '쓰레기도 생각하는 뜻이 보이게 고쳐요. 큰 노랑 동그라미 과자 하나와 큰 검정 긴 네모 쓰레기통 하나를 서로 맞닿게 붙여요.', target: { has: [{ shape: 'circle', color: '노랑', size: 'l', n: 1 }, { shape: 'rect', color: '검정', size: 'l', n: 1 }], overlap: 1 }, difficulty: 0.25 },
          { prompt: '친구 반응을 보고 내 이미지에서 고칠 곳 한 군데를 고쳐 나타내고 점검해요.', target: { selfCheck: ['친구가 읽은 뜻과 내가 의도한 뜻을 견주었어요', '다르게 읽힌 곳을 한 군데만 골랐어요', '고친 뒤 친구에게 다시 읽어 달라고 했어요'], minPieces: 4 }, difficulty: 0.1 },
        ],
      },
    ], '"친구 반응을 보고 내 이미지에서 고칠 곳을 하나 말해 볼까요?" 두세 명이 반응·고칠 곳·까닭을 말하게 한다. 출구 2번에서 "다시 만들었으니 뜻은 당연히 내 생각대로 전해져요"를 고른 학생에게는 오늘 친구가 다르게 읽은 사례를 떠올리게 한다.', [
      exMm({ p: '내가 의도한 뜻은 "복도에서 걸어요"예요. 친구 반응을 나누어 넣어 보세요.', topic: '복도 안전 포스터',
        slots: [['same', '내 뜻과 같게 읽었어요'], ['diff', '다르게 읽었어요']], cards: [['e1', '복도에서는 천천히 걸어야겠어요'], ['e2', '운동회 안내 같아요'], ['e3', '뛰지 말라는 말 같아요']],
        target: { sort: { same: ['e1', 'e3'], diff: ['e2'] } }, d: 0.15 }),
      { type: 'choice', prompt: '"다시 만든 이미지의 뜻은 내가 생각한 대로 늘 전해진다."는 말에 대한 생각은?', options: ['맞아요. 확인하지 않아도 돼요.', '친구 반응으로 확인해야 전해졌는지 알 수 있어요.', '친구가 틀리게 읽은 거예요.'], answer: 1, difficulty: 0.15, explain: '이미지를 읽는 사람마다 다르게 읽을 수 있어서 반응으로 확인해야 해요.' },
      { type: 'mood', prompt: '친구 반응으로 내 이미지를 돌아보니 어땠나요?' },
    ]),
    worksheet: {
      title: '친구 반응으로 확인하기',
      items: [
        { type: 'table', prompt: '내가 다시 만든 이미지의 의도와 친구 반응을 견주어 쓰세요.', columns: ['내가 의도한 뜻', '친구가 읽은 뜻', '같은가요? (○ / △)'], cells: [['먹는 양을 먼저 생각하게 해요', '', ''], ['', '', ''], ['', '', '']] },
        { type: 'figure', wide: true, prompt: '물방울이 비로 읽혔습니다. 물을 아끼자는 뜻이 보이도록 곁에 더할 조각 하나를 그려 넣으세요.', tool: 'collage', options: { printColors: false }, figures: [{ state: { pieces: [{ shape: 'circle', color: '파랑', size: 'l', x: 280, y: 180, r: 0 }, { shape: 'rect', color: '검정', size: 's', x: 440, y: 320, r: 0 }] }, caption: '파랑 큰 동그라미(물방울)와 오른쪽 아래 검정 작은 긴 네모' }], answer: '닫힌 수도꼭지를 뜻하는 작은 조각이나 글줄 한 줄을 물방울 아래에 더 그린다' },
        { type: 'choice', prompt: '내가 의도한 뜻이 "물을 아끼자"일 때, 같게 읽은 친구 말에 ○ 하세요.', options: ['수돗물을 아껴 써야겠어요', '비가 온다는 소식 같아요', '파란 물감 광고 같아요'], answer: '수돗물을 아껴 써야겠어요' },
        { type: 'short', prompt: '친구가 다르게 읽은 곳을 한 군데 고친다면 무엇을 어떻게 고칠지 쓰세요.' },
      ],
      easy: {
        note: '내가 의도한 뜻의 낱말이 친구 말에도 나오면 같게 읽은 거예요.',
        items: [
          { type: 'table', prompt: '내 뜻과 친구 말을 쓰세요.', columns: ['내가 의도한 뜻', '친구가 읽은 뜻'], cells: [['', '']] },
          { type: 'choice', prompt: '내 뜻과 같게 읽은 말에 ○ 하세요. (내 뜻: 복도에서 걸어요)', options: ['천천히 걸어야겠어요', '운동회 안내예요'], answer: '천천히 걸어야겠어요' },
          { type: 'draw', prompt: '고친 곳이 보이는 이미지를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 놓으면 바로 맞는지 표시돼요. 색종이는 모양 세 가지, 색 네 가지예요.',
      base: '스스로 나누고 확인해요. 고르개는 모양 다섯 가지, 색 여섯 가지예요.',
      challenge: '뜻과 상관없는 말 카드가 하나씩 더 섞여 있어요. 색종이는 모든 모양·색 가운데 골라 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 다시 만든 이미지의 뜻은 늘 내 생각대로 전해진다고 여긴다 → 친구가 읽은 말과 내 의도의 낱말을 견주게 한다. ② 한 가지 반응에 이미지를 통째로 갈아엎는다 → 고칠 곳을 한 군데만 고르게 한다. ③ 친구 반응을 이미지의 근거 없이 받아들인다 → 어느 조각·문구 때문에 그렇게 읽혔는지 이미지에서 찾게 한다. 준비물: 17~20차시에 만든 이미지 또는 활동지 그림.',
  }));

  // ───────────── 22차시 (연습) ─────────────
  lessons.push(lesson(22, {
    title: '이미지를 볼 때 살필 점 세 가지로 목록 만들기',
    objective: '광고와 포스터를 읽으며 해 본 질문을 살필 점(강조·빠진 정보·누구에게)으로 묶고, 내가 앞으로 쓸 살필 점 세 가지를 목록으로 정리할 수 있다.',
    illustration: {
      prompt: art('a paper-cut checklist card with three check boxes next to a poster, with a magnifying glass resting on it'),
      scene: scene([
        { motif: 'sun', x: 410, y: 56, s: 0.7 }, { motif: 'cloud', x: 100, y: 52 }, { motif: 'hills', y: 208 },
        { motif: 'flower', x: 120, y: 222, color: 'mint' }, { motif: 'leaf', x: 360, y: 204, r: 20 }, { motif: 'bird', x: 250, y: 86 },
        { motif: 'text', x: 240, y: 142, text: '이미지 읽는 세 가지', size: 22 },
      ]),
    },
    stages: stages({
      teacher: '"지난 시간까지 광고와 포스터를 볼 때 우리가 자꾸 던졌던 질문이 있어요. 기억나는 질문 하나만 말해 볼까요?" 학생이 말한 질문을 칠판에 모아 비슷한 것끼리 묶어 본다. "이미지를 따져 보는 일은 어른이 되어서 하면 돼요"라는 생각을 짚고, 오늘부터 우리가 쓸 점검 목록을 만든다고 연다. 시연 단추로 질문 카드가 살필 점 이름과 이어지는 모습을 보여 준다.',
      student: '광고를 볼 때 내가 자꾸 던진 질문 하나를 말해 봅시다.',
      demo: { tool: 'mindmap', options: { mode: 'match', topic: '이미지를 읽는 질문', slots: [{ id: 'd1', label: '무엇이 가장 크게 보이나요?' }], cards: [{ id: 'dc1', text: '강조한 것' }, { id: 'dc2', text: '빠진 정보' }] }, sequence: [{ match: { d1: 'dc1' } }] },
    }, [
      {
        id: 'a1', title: '활동 1. 질문을 살필 점 이름과 이어 묶기', minutes: 12, tool: 'mindmap',
        teacher: '"이 질문은 크기와 강조를 따지는 걸까요, 없는 정보를 찾는 걸까요, 누구에게 말하는지를 묻는 걸까요?" 질문 속 낱말(크게·작게, 없는, 누구에게)이 단서라고 짚는다. 세 가지 이름 가운데 어디에도 들어가지 않는 "마음에 드나요?" 같은 질문은 취향을 묻는 것이라 이번 목록에 넣지 않는다.',
        task: '이미지를 읽을 때 던지는 질문과 살필 점 이름을 이어요.',
        levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          mm({ p: '질문과 살필 점 이름을 이어 보세요.', mode: 'match', topic: '이미지를 읽는 질문',
            slots: [['s1', '무엇이 가장 크게 보이나요?'], ['s2', '알려 주지 않은 것은 무엇인가요?'], ['s3', '누구에게 무엇을 하게 하려나요?']],
            cards: [['m1', '강조한 것'], ['m2', '빠진 정보'], ['m3', '겨냥한 사람과 하게 하려는 일'], ['m4', '내 취향']], extra: ['m5', '그린 사람의 나이'],
            target: { match: { s1: 'm1', s2: 'm2', s3: 'm3' } }, d: 0.2,
            hints: ['질문 속 낱말(크게·알려 주지 않은·누구에게)이 어떤 살핀 점과 이어지는지 살펴요.'] }),
          mm({ p: '질문을 세 가지 살필 점 칸에 나누어 넣어 보세요.', topic: '질문 묶기',
            slots: [['em', '강조한 것'], ['miss', '빠진 정보'], ['who', '누구에게 무엇을']],
            cards: [['q1', '글씨가 가장 큰 곳은 어디인가요?'], ['q2', '값은 어디에도 적혀 있나요?'], ['q3', '어떤 사람이 크게 나오나요?'], ['q4', '작게 둔 글씨는 무엇인가요?'], ['q5', '안전 주의 문구가 있나요?']], extra: ['q6', '그림이 예쁜가요?'],
            target: { sort: { em: ['q1', 'q4'], miss: ['q2', 'q5'], who: ['q3'] } }, d: 0.25,
            hints: ['질문이 크기를 묻는지, 없는 것을 묻는지, 보는 사람을 묻는지 낱말을 읽어 봐요.'] }),
          mm({ p: '이미지를 볼 때 살필 점 목록에 넣을 질문만 모두 고르세요.', mode: 'pick', topic: '살필 점 목록', basket: '목록에 넣을 질문',
            cards: [['p1', '무엇이 크게 보이는가?'], ['p2', '빠진 정보는 없는가?'], ['p3', '누구에게 말을 거는가?'], ['p4', '나는 이 색이 좋은가?']], extra: ['p5', '광고는 몇 초인가?'],
            target: { pick: ['p1', 'p2', 'p3'] }, d: 0.3,
            predict: { q: '이미지를 따져 보는 일은 어른이 되어서야 할 수 있을까요?', options: ['어른이 되어서 해요', '지금부터 할 수 있어요'], answer: 1 },
            conclude: '이미지를 볼 때 살필 점은 지금부터 목록으로 만들어 쓰면 광고도 포스터도 더 또렷하게 읽혀요.' }),
        ],
      },
      {
        id: 'a2', title: '활동 2. 살필 점 목록 카드 만들기', minutes: 13, tool: 'collage',
        teacher: '"목록 카드는 한눈에 읽혀야 해요. 질문 세 줄이면 충분할까요?" 하양 바탕에 검정 글줄 조각 세 줄을 겹쳐 붙이는 시범을 보인다. 줄이 너무 많아져 읽기 어려운 학생에게는 가장 자주 쓸 세 가지만 남기게 한다.',
        task: '이미지를 읽을 때 쓸 살필 점 목록 카드를 글줄 조각으로 만들어요.',
        levels: { easy: { shapes: ['rect', 'circle', 'star'], colors: ['하양', '검정', '노랑', '파랑'] }, base: { shapes: ['rect', 'circle', 'star', 'heart', 'triangle'], colors: ['하양', '검정', '노랑', '파랑', '빨강', '초록'] }, challenge: {} },
        items: [
          { prompt: '목록 카드를 만들어요. 큰 하양 긴 네모 위에 작은 검정 긴 네모 글줄을 세 줄 겹쳐 붙여요.', target: { has: [{ shape: 'rect', color: '하양', size: 'l', n: 1 }, { shape: 'rect', color: '검정', size: 's', n: 3 }], overlap: 3 }, difficulty: 0.2 },
          { prompt: '목록 카드에 표시를 더해요. 작은 노랑 별 세 개를 큰 하양 긴 네모 위에 겹쳐 붙여요.', target: { has: [{ shape: 'rect', color: '하양', size: 'l', n: 1 }, { shape: 'star', color: '노랑', size: 's', n: 3 }], overlap: 3 }, difficulty: 0.25 },
          { prompt: '내가 쓸 살필 점 세 가지를 목록 카드로 나타내고 점검해요.', target: { selfCheck: ['살필 점 세 가지를 정했어요', '세 가지를 한눈에 읽히게 세 줄로 붙였어요', '짝이 목록으로 광고 한 장을 읽어 보았어요'], minPieces: 4 }, difficulty: 0.1 },
        ],
      },
    ], '"이미지를 볼 때 내가 쓸 살필 점 세 가지를 말해 볼까요?" 두세 명이 세 가지를 말하게 하고 칠판 목록과 견준다. 출구 2번에서 "이미지를 따지는 일은 어른이 되면 하면 돼요"를 고른 학생에게는 오늘 직접 만든 목록 카드를 떠올리게 한다.', [
      exMm({ p: '질문과 살필 점 이름을 이어 보세요.', mode: 'match', topic: '이미지를 읽는 질문',
        slots: [['e1', '작은 글씨로 적힌 것은 무엇인가요?'], ['e2', '어린이를 겨냥했나요, 어른을 겨냥했나요?']], cards: [['x1', '강조한 것'], ['x2', '겨냥한 사람'], ['x3', '내 취향']],
        target: { match: { e1: 'x1', e2: 'x2' } }, d: 0.15 }),
      { type: 'choice', prompt: '이미지를 볼 때 살필 점 목록에 알맞지 않은 것은?', options: ['무엇이 크게 보이는가?', '빠진 정보는 없는가?', '이 그림은 내 취향인가?'], answer: 2, difficulty: 0.15, explain: '취향은 사람마다 다르지만, 강조·빠진 정보·겨냥한 사람은 근거로 따져 볼 수 있어요.' },
      { type: 'mood', prompt: '이미지를 읽는 목록을 만들어 보니 어땠나요?' },
    ]),
    worksheet: {
      title: '이미지를 볼 때 살필 점',
      items: [
        { type: 'table', prompt: '이미지를 볼 때 살필 점 세 가지를 쓰고, 그 점을 살피는 질문을 한 줄씩 쓰세요.', columns: ['살필 점', '내가 던질 질문'], cells: [['강조한 것', '무엇이 가장 크게 보이나요?'], ['', ''], ['', '']] },
        { type: 'figure', wide: true, prompt: '목록 카드에 글줄 조각을 한 줄 더 그려 넣어 세 줄을 채우세요.', tool: 'collage', options: { printColors: false }, figures: [{ state: { pieces: [{ shape: 'rect', color: '하양', size: 'l', x: 280, y: 200, r: 0 }, { shape: 'rect', color: '검정', size: 's', x: 280, y: 140, r: 0 }, { shape: 'rect', color: '검정', size: 's', x: 280, y: 200, r: 0 }] }, caption: '하양 큰 긴 네모 목록 카드와 검정 글줄 둘' }], answer: '검정 글줄 조각을 카드 아래쪽에 한 줄 더 그린다' },
        { type: 'choice', prompt: '"알려 주지 않은 것은 무엇인가요?"는 어떤 살필 점인가요?', options: ['강조한 것', '빠진 정보', '내 취향'], answer: '빠진 정보' },
        { type: 'short', prompt: '이 목록을 다음에 광고를 볼 때 어떻게 쓸지 한 문장으로 쓰세요.' },
      ],
      easy: {
        note: '살필 점은 강조한 것, 빠진 정보, 누구에게 무엇을 하려는지 세 가지예요.',
        items: [
          { type: 'table', prompt: '살필 점과 질문을 쓰세요.', columns: ['살필 점', '질문'], cells: [['강조한 것', ''], ['빠진 정보', '']] },
          { type: 'choice', prompt: '살필 점 목록에 넣을 질문에 ○ 하세요.', options: ['빠진 정보는 없는가?', '이 색이 내 취향인가?'], answer: '빠진 정보는 없는가?' },
          { type: 'draw', prompt: '목록 카드를 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 놓으면 바로 맞는지 표시돼요. 색종이는 모양 세 가지, 색 네 가지예요.',
      base: '스스로 이은 뒤 확인해요. 고르개는 모양 다섯 가지, 색 여섯 가지예요.',
      challenge: '목록에 들어가지 않는 카드가 하나씩 더 섞여 있어요. 색종이는 모든 모양·색 가운데 골라 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 이미지를 따져 보는 일은 어른이 되어서 해도 된다고 여긴다 → 학교 포스터·광고를 지금 읽으며 목록을 직접 써 보게 한다. ② 취향 질문을 살필 점으로 넣는다 → 근거로 따질 수 있는지 묻는다. ③ 목록이 너무 길어 쓰지 않게 된다 → 가장 자주 쓸 세 가지만 남기게 한다.',
  }));

  // ───────────── 23차시 (정리) ─────────────
  lessons.push(lesson(23, {
    title: '단원에서 한 일과 달라진 생각 돌아보며 정리하기',
    objective: '단원에서 새 이름·이야기로 둘레에서 새 뜻을 찾은 일과, 이미지를 따져 읽고 다시 만든 일을 나누어 정리하고, 달라진 생각을 자기 평가로 말할 수 있다.',
    illustration: {
      prompt: art('a child looking back at a path of paper-cut stepping stones that lead from a small cup with a new name to a poster with a short caption'),
      scene: scene([
        { motif: 'sun', x: 410, y: 56, s: 0.9 }, { motif: 'cloud', x: 100, y: 52 }, { motif: 'hills', y: 208 },
        { motif: 'flower', x: 110, y: 222 }, { motif: 'flower', x: 190, y: 224, color: 'buttercup' }, { motif: 'tree', x: 360, y: 216 }, { motif: 'bird', x: 250, y: 88 },
        { motif: 'text', x: 240, y: 142, text: '내 눈이 달라졌어요', size: 24 },
      ]),
    },
    stages: stages({
      teacher: '"이 단원을 시작할 때 가위를 가위라고만 불렀던 나와, 지금의 나는 무엇이 달라졌나요?" 학생이 말한 달라진 점을 앞 단원과 뒤 단원으로 나누어 칠판에 적는다. "배운 것은 시험이 끝나면 쓸모가 없어요"라는 생각을 짚고, 오늘 말한 것을 다음 광고·포스터를 볼 때 쓴다고 연다. 시연 단추로 한 일이 앞뒤 두 칸으로 나뉘는 모습을 보여 준다.',
      student: '이 단원에서 가장 기억에 남는 활동 하나를 말해 봅시다.',
      demo: { tool: 'mindmap', options: { topic: '미적 체험 단원', slots: [{ id: 'first', label: '둘레에서 새 뜻 찾기' }, { id: 'second', label: '이미지를 따져 읽고 다시 만들기' }], cards: [{ id: 'd1', text: '물건에 새 이름 붙이기' }, { id: 'd2', text: '광고에서 크게 보인 것 읽기' }] }, sequence: [{ sort: { first: ['d1'], second: ['d2'] } }] },
    }, [
      {
        id: 'a1', title: '활동 1. 한 일 나누고 바른 생각 이어 보기', minutes: 12, tool: 'mindmap',
        teacher: '"이 활동은 둘레에서 새 뜻을 찾는 쪽일까요, 이미지를 따져 읽고 다시 만드는 쪽일까요?" 이름·이야기·때와 자리는 앞 단원, 강조·빠진 정보·겨냥한 사람·문구는 뒤 단원이라고 되짚는다. 오개념 문항에서는 학생이 처음 가졌던 생각을 한 줄로 읽고 바른 생각과 이어 말하게 한다. 도전 단계의 추가 카드는 이 단원에서 하지 않은 일이다.',
        task: '단원에서 한 일을 두 갈래로 나누고, 처음 생각과 바른 생각을 이어요.',
        levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          mm({ p: '단원에서 한 일을 두 칸에 나누어 넣어 보세요.', topic: '미적 체험 단원',
            slots: [['first', '둘레에서 새 뜻 찾기'], ['second', '이미지를 따져 읽고 다시 만들기']],
            cards: [['a1', '물건에 새 이름 붙이기'], ['a2', '아침과 낮의 나무 견주기'], ['a3', '두 물건을 이어 이야기 만들기'], ['a4', '광고에서 크게 보인 것 읽기'], ['a5', '크게·작게를 맞바꿔 다시 만들기']], extra: ['a6', '악기로 노래 부르기'],
            target: { sort: { first: ['a1', 'a2', 'a3'], second: ['a4', 'a5'] } }, d: 0.2,
            hints: ['물건·때·자리·이야기를 다룬 활동인지, 광고·포스터를 읽고 바꾼 활동인지 나누어 봐요.'] }),
          mm({ p: '처음 가졌던 생각과 단원에서 배운 바른 생각을 이어 보세요.', mode: 'match', topic: '생각의 변화',
            slots: [['s1', '"물건 이름은 처음부터 정해져 있어."'], ['s2', '"내 뜻은 설명 안 해도 다 통해."'], ['s3', '"광고 그림은 사실을 그대로 보여 줘."']],
            cards: [['m1', '이름은 닮은 점을 찾아 새로 붙일 수 있어요'], ['m2', '친구 반응으로 전해졌는지 확인해요'], ['m3', '크게·작게는 만든 사람이 고른 것이에요'], ['m4', '이미지는 어른만 따질 수 있어요']], extra: ['m5', '문구는 길수록 좋아요'],
            target: { match: { s1: 'm1', s2: 'm2', s3: 'm3' } }, d: 0.25,
            hints: ['처음 생각과 반대되는 말이 아니라, 단원에서 직접 해 보며 알게 된 바른 생각을 이어요.'] }),
          mm({ p: '이미지를 볼 때 쓸 살필 점만 모두 고르세요.', mode: 'pick', topic: '이미지를 읽는 눈', basket: '살필 점',
            cards: [['p1', '무엇이 크게 보이는가'], ['p2', '빠진 정보는 무엇인가'], ['p3', '누구에게 무엇을 하게 하려는가'], ['p4', '문구가 뜻을 어떻게 바꾸는가']], extra: ['p5', '그린 사람의 나이'],
            target: { pick: ['p1', 'p2', 'p3', 'p4'] }, d: 0.3,
            predict: { q: '이 단원에서 배운 눈은 학교 밖 광고를 볼 때도 쓸 수 있을까요?', options: ['학교에서만 써요', '어디서나 쓸 수 있어요'], answer: 1 },
            conclude: '이 단원에서 길러 온 눈으로 둘레와 이미지를 새롭게 읽고, 필요하면 내 방식으로 다시 만들 수 있어요.' }),
        ],
      },
      {
        id: 'a2', title: '활동 2. 가장 기억에 남는 장면을 색종이로 나타내기', minutes: 13, tool: 'collage',
        teacher: '"단원에서 가장 기억에 남는 장면은 새 이름 붙이기인가요, 광고 맞바꾸기인가요?" 큰 조각 하나로 중심을 세우고 작은 조각으로 곁들이는 구성을 시범으로 보인다. 짝에게 왜 그 장면을 골랐는지 말한 뒤 점검한다.',
        task: '단원에서 가장 기억에 남는 장면을 조각으로 나타내고 자기 평가를 해요.',
        levels: { easy: { shapes: ['circle', 'rect', 'star'], colors: ['노랑', '빨강', '파랑', '검정'] }, base: { shapes: ['circle', 'rect', 'star', 'heart', 'semi'], colors: ['노랑', '빨강', '파랑', '검정', '초록', '분홍'] }, challenge: {} },
        items: [
          { prompt: '새 이름 붙인 물건을 나타내요. 큰 노랑 동그라미 하나 위에 작은 빨강 동그라미를 두 개 겹쳐 붙여요.', target: { has: [{ shape: 'circle', color: '노랑', size: 'l', n: 1 }, { shape: 'circle', color: '빨강', size: 's', n: 2 }], overlap: 2 }, difficulty: 0.2 },
          { prompt: '광고 맞바꾸기를 나타내요. 큰 파랑 긴 네모 하나와 작은 노랑 별 하나를 붙여요.', target: { has: [{ shape: 'rect', color: '파랑', size: 'l', n: 1 }, { shape: 'star', color: '노랑', size: 's', n: 1 }] }, difficulty: 0.25 },
          { prompt: '단원에서 가장 기억에 남는 장면을 나타내고 자기 평가를 점검해요.', target: { selfCheck: ['가장 기억에 남는 장면을 하나 골랐어요', '그 장면을 큰 조각으로 나타냈어요', '짝에게 그 장면을 고른 까닭을 말했어요'], minPieces: 4 }, difficulty: 0.1 },
        ],
      },
    ], '"이 단원을 하기 전과 지금, 내가 달라진 점을 한 문장으로 말해 볼까요?" 두세 명이 "처음에는 ~라고 생각했는데 지금은 ~라고 생각해요"의 틀로 말하게 한다. 출구 2번에서 "배운 것은 학교에서만 써요"를 고른 학생에게는 다음 주에 광고를 볼 때 살필 점을 하나 정해 보게 한다.', [
      exMm({ p: '단원에서 한 일을 두 칸에 나누어 넣어 보세요.', topic: '미적 체험 단원',
        slots: [['first', '둘레에서 새 뜻 찾기'], ['second', '이미지를 따져 읽고 다시 만들기']], cards: [['e1', '같은 계단을 자리마다 다르게 읽기'], ['e2', '짧은 문구로 이미지 뜻 분명하게 하기'], ['e3', '이름 고쳐 붙이기']],
        target: { sort: { first: ['e1', 'e3'], second: ['e2'] } }, d: 0.15 }),
      { type: 'choice', prompt: '이 단원에서 배운 눈을 가장 잘 쓰는 모습은?', options: ['광고를 볼 때 무엇이 크고 무엇이 빠졌는지 살펴본다.', '광고를 한 번만 보고 믿는다.', '친구 작품을 허락 없이 고친다.'], answer: 0, difficulty: 0.15, explain: '크게 보인 것·빠진 정보·겨냥한 사람을 살피면 이미지가 더 또렷하게 읽혀요.' },
      { type: 'mood', prompt: '이 단원을 마친 지금의 기분은 어떤가요?' },
    ]),
    worksheet: {
      title: '미적 체험 돌아보기',
      items: [
        { type: 'table', prompt: '내 모습에 ○ 하고, 달라진 점을 쓰세요.', columns: ['할 수 있게 된 것', '잘해요', '더 해 볼래요'], cells: [['물건·장소에 새 이름이나 이야기를 붙여요', '', ''], ['친구 반응으로 내 뜻이 전해졌는지 확인해요', '', ''], ['광고에서 강조·빠진 정보를 찾아요', '', ''], ['이미지를 다시 만들어 새 뜻을 담아요', '', '']] },
        { type: 'figure', wide: true, prompt: '가장 기억에 남는 장면의 큰 조각에 ○ 하고, 곁에 작은 조각 하나를 더 그리세요.', tool: 'collage', options: { printColors: false }, figures: [{ state: { pieces: [{ shape: 'circle', color: '노랑', size: 'l', x: 280, y: 200, r: 0 }, { shape: 'circle', color: '빨강', size: 's', x: 240, y: 200, r: 0 }] }, caption: '노랑 큰 동그라미 위 빨강 작은 동그라미 하나' }], answer: '큰 조각 곁에 작은 조각을 하나 더 겹쳐 그리고, 가장 큰 조각에 ○ 한다' },
        { type: 'choice', prompt: '바른 생각에 ○ 하세요.', options: ['이름은 처음부터 정해져 있어 바꿀 수 없어요', '이미지는 어른만 따질 수 있어요', '내 뜻이 전해졌는지는 친구 반응으로 확인해요', '광고 그림은 사실 그대로예요'], answer: '내 뜻이 전해졌는지는 친구 반응으로 확인해요' },
        { type: 'short', prompt: '이 단원에서 가장 크게 달라진 내 생각과 앞으로 광고를 볼 때 살필 점 하나를 쓰세요.' },
      ],
      easy: {
        note: '앞쪽 = 둘레에서 새 뜻 찾기, 뒤쪽 = 이미지를 따져 읽고 다시 만들기',
        items: [
          { type: 'table', prompt: '내 모습에 ○ 하세요.', columns: ['할 수 있게 된 것', '잘해요', '더 해 볼래요'], cells: [['새 이름을 붙여요', '', ''], ['광고를 따져 읽어요', '', '']] },
          { type: 'choice', prompt: '바른 생각에 ○ 하세요.', options: ['광고는 크기와 빠진 것을 살펴 읽어요', '광고는 늘 사실 그대로예요'], answer: '광고는 크기와 빠진 것을 살펴 읽어요' },
          { type: 'draw', prompt: '이 단원에서 가장 기억에 남는 장면을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '카드를 놓으면 바로 맞는지 표시돼요. 색종이는 모양 세 가지, 색 네 가지예요.',
      base: '스스로 나누고 이은 뒤 확인해요. 고르개는 모양 다섯 가지, 색 여섯 가지예요.',
      challenge: '이 단원에서 하지 않은 일의 카드가 하나씩 더 섞여 있어요. 색종이는 모든 모양·색 가운데 골라 써요.',
    },
    teacherNotes: '이 단원의 오개념을 한 번에 점검한다: ① 물건의 뜻은 처음부터 정해져 있다 ② 이야기 만들기는 국어에서만 한다 ③ 내가 붙인 뜻은 설명하지 않아도 통한다 ④ 광고 그림은 사실을 그대로 보여 준다 ⑤ 이미지를 바꾸는 것은 남의 작품을 망치는 일이다 ⑥ 이미지를 따져 보는 일은 어른이 되어서 한다. 활동 1의 2번(생각의 변화)과 활동지 자기 평가의 "더 해 볼래요"를 견주어, 아직 남은 생각을 학생별로 확인하고 다음 단원 첫 시간에 짧게 다시 다룬다.',
  }));

  PaperLessons.registerUnit({
    id: 'g6-art-1-01', schema: 'edu-unit.v1', catalogUnit: UNIT,
    grade: 6, subject: '미술', unitTitle: TITLE,
    flow: '앞의 열두 차시는 둘레와 주고받으며 새 뜻을 찾는 힘을 쌓습니다. 1~4차시는 교실 물건에 새 이름을 붙이고, 때와 자리에 따라 같은 대상이 달라 보이는 점을 찾아 이름을 고쳐 붙입니다. 5~8차시는 서로 다른 두 대상을 이어 처음·가운데·끝이 있는 이야기를 만들고 그림과 글의 몫을 나누어 빠진 장면을 채우며, 9~12차시는 친구에게 물어 내 뜻이 전해졌는지 확인하고 고쳐서 나와 둘레의 관계에 대한 새 생각을 적습니다. 뒤의 열한 차시는 이미지의 뜻을 따져 읽고 다시 만듭니다. 13~16차시는 광고에서 크게 보인 것·빠진 정보·겨냥한 사람·색과 크기의 인상을 근거로 읽고, 17~20차시는 크게·작게를 맞바꾸고 짧은 문구를 붙여 직접 만든 이미지의 뜻을 바꾸어 봅니다. 21~23차시는 친구 반응으로 뜻을 확인하고 이미지를 볼 때 살필 점 목록을 만들며 단원 전체를 스스로 돌아봅니다.',
    refs: {},
    lessons,
  });
})();
