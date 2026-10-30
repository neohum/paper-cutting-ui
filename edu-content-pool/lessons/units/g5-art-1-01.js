/* 5학년 1학기 미술 1. 미적 체험 — 여러 감각과 매체로 자신과 대상을 탐색하기(1~10차시), 감각적 특징·느낌·생각을 관련지어 나타내기(11~19차시).
 * 같은 꼴이 되풀이되는 칸(차시 머리·그림 문장 틀·카드 판 옵션)만 아래 도우미로 만들고, 차시 내용은 모두 그대로 적는다.
 */
(function () {
  'use strict';
  const UNIT = 'g5-미술-1학기-1';
  const TITLE = '1. 미적 체험';
  const S1 = '[6미01-01]';
  const S2 = '[6미01-02]';
  const art = (what) => `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`;
  const scene = (layers) => ({ viewBox: [480, 270], layers });
  const lesson = (n, std, body) => Object.assign({
    id: `g5-art-1-01-${String(n).padStart(2, '0')}`, schema: 'edu-lesson.v1',
    catalog: { unit: UNIT, lesson: n }, grade: 5, subject: '미술', unitTitle: TITLE,
    standards: [std], minutes: 40, formats: ['chromebook', 'projector', 'print'],
  }, body);
  const cards = (list) => list.map(([id, text]) => ({ id, text }));
  const slotsOf = (list) => list.map((s) => (Array.isArray(s) ? { id: s[0], label: s[1] } : s));
  // 카드 나누기(sort): extra = 어느 칸에도 넣지 않는 카드(도전 단계에서만 섞인다)
  const sortItem = (o) => {
    const base = cards(o.cards);
    const it = { prompt: o.prompt, toolOptions: { topic: o.topic, slots: slotsOf(o.slots), cards: base }, target: { sort: o.sort }, difficulty: o.d };
    if (o.extra) it.levels = { challenge: { toolOptions: { cards: base.concat(cards([o.extra])) } } };
    if (o.hint) it.hints = [o.hint];
    if (o.predict) it.predict = o.predict;
    if (o.conclude) it.conclude = o.conclude;
    return it;
  };
  // 카드 잇기(match): 칸마다 카드 하나
  const matchItem = (o) => {
    const base = cards(o.cards);
    const it = { prompt: o.prompt, toolOptions: { mode: 'match', topic: o.topic, slots: slotsOf(o.slots), cards: base }, target: { match: o.match }, difficulty: o.d };
    if (o.extra) it.levels = { challenge: { toolOptions: { cards: base.concat(cards([o.extra])) } } };
    if (o.hint) it.hints = [o.hint];
    if (o.predict) it.predict = o.predict;
    if (o.conclude) it.conclude = o.conclude;
    return it;
  };
  // 카드 고르기(pick): 알맞은 카드만 담는다
  const pickItem = (o) => {
    const it = { prompt: o.prompt, toolOptions: { mode: 'pick', topic: o.topic, cards: cards(o.cards) }, target: { pick: o.pick }, difficulty: o.d };
    if (o.hint) it.hints = [o.hint];
    if (o.predict) it.predict = o.predict;
    if (o.conclude) it.conclude = o.conclude;
    return it;
  };
  // 색종이 조각(collage): ch = 도전 단계의 더 어려운 문항
  const colItem = (o) => {
    const it = { prompt: o.prompt, target: o.target, difficulty: o.d };
    if (o.hint) it.hints = [o.hint];
    if (o.ch) it.levels = { challenge: o.ch };
    if (o.predict) it.predict = o.predict;
    if (o.conclude) it.conclude = o.conclude;
    return it;
  };
  const pick0 = (id, title, minutes, teacher, task, items) => ({
    id, title, minutes, tool: 'mindmap', teacher, task, items,
    levels: { easy: { live: true }, base: {}, challenge: {} },
  });
  const mind = (id, title, minutes, teacher, task, items) => ({
    id, title, minutes, tool: 'mindmap', teacher, task, items,
    levels: { easy: items[0].toolOptions.mode === 'match' ? { live: true } : { live: true, instant: true }, base: {}, challenge: {} },
  });
  // 쉬움·기본 고르개: shapes·colors는 그 활동 목표에 쓰이는 것, 기본 단계는 몇 가지를 더 얹는다
  const col = (id, title, minutes, teacher, task, shapes, colors, items) => ({
    id, title, minutes, tool: 'collage', teacher, task, items,
    levels: {
      easy: { shapes, colors },
      base: { shapes: [...new Set([...shapes, 'semi', 'star'])], colors: [...new Set([...colors, '하양', '검정'])] },
      challenge: shapes.includes('diamond') ? { shapes: ['circle', 'square', 'triangle', 'rect', 'semi', 'star', 'heart', 'leaf', 'diamond'] } : {},
    },
  });
  const pair = (id, title, minutes, teacher, task, topic, slots, prompts) => ({
    id, title: `${title} (짝 활동)`, minutes, tool: 'mindmap', pair: true, teacher, task,
    levels: { easy: { live: true }, base: {}, challenge: {} },
    items: prompts.map(([prompt, cs]) => ({ prompt, toolOptions: { topic, slots: slotsOf(slots), cards: cards(cs) }, free: true, talk: true, difficulty: 0 })),
  });
  const lessons = [];

  // 차시 한 개: 도입(7분)·전개(활동 분 합 25분)·정리(8분)로 stages를 짜 맞춘다
  const make = (n, std, o) => {
    const body = {
      title: o.title, objective: o.objective,
      illustration: { prompt: art(o.art), scene: scene(o.scene) },
      stages: [
        { id: 'intro', title: '도입', minutes: 7, teacher: o.intro.teacher, student: o.intro.student, demo: o.intro.demo },
        { id: 'main', title: '전개', minutes: 25, activities: o.acts },
        { id: 'wrapup', title: '정리', minutes: 8, teacher: o.wrap.teacher, exitTicket: o.wrap.exit },
      ],
      worksheet: o.ws, differentiation: o.diff, teacherNotes: o.notes,
    };
    if (o.safety) body.safety = o.safety;
    lessons.push(lesson(n, std, body));
  };
  const fig = (prompt, pieces, caption, answer) => ({ type: 'figure', wide: true, prompt, tool: 'collage', options: { printColors: false }, figures: [{ state: { pieces }, caption }], answer });
  const pc = (shape, color, size, x, y, r) => ({ shape, color, size, x, y, r: r || 0 });

  // ───────────── 1차시 (도입) ─────────────
  make(1, S1, {
    title: '지우개 하나를 연필·색종이·점토로 나타내 보며 매체 알아보기',
    objective: '같은 물건도 연필·색종이·점토·사진 같은 매체에 따라 잘 드러나는 특징이 다르다는 것을 말하고, 색종이 면으로 물건의 특징을 나타낼 수 있다.',
    art: 'a child comparing an eraser drawn in pencil, cut from colored paper and shaped from clay on a classroom desk',
    scene: [
      { motif: 'sun', x: 410, y: 58, s: 0.8 }, { motif: 'cloud', x: 110, y: 52 }, { motif: 'hills', y: 208 },
      { motif: 'house', x: 90, y: 214, s: 0.9 }, { motif: 'flower', x: 360, y: 222, color: 'buttercup' }, { motif: 'leaf', x: 410, y: 214, r: 20 },
      { motif: 'text', x: 240, y: 140, text: '같은 물건, 다른 매체', size: 22 },
    ],
    intro: {
      teacher: '필통에서 지우개를 하나 꺼내 들고 "이 지우개를 한 번도 못 본 친구에게 알려 준다면 어떤 방법이 있을까요?"라고 묻는다. 말로, 그림으로, 점토로 빚어서, 사진으로 찍어서 같은 답이 나오면 칠판에 모아 쓴다. "생각이나 느낌을 담아 나타내는 재료와 방법을 매체라고 불러요. 연필도 매체, 사진도 매체예요." 매체를 그림 도구만으로 좁혀 말하거나 사진은 미술이 아니라고 하는 학생의 생각은, 칠판의 답 목록에서 사진과 점토가 함께 있는 것을 가리키며 짚는다. 시연 단추로 지우개를 색종이 면으로 붙이는 모습을 보여 준다.',
      student: '지우개를 한 번도 못 본 친구에게 알려 줄 방법을 한 가지씩 말해 봅시다.',
      demo: { tool: 'collage', options: { shapes: ['rect'], colors: ['하양', '파랑'] }, sequence: [{ has: [{ shape: 'rect', color: '하양', size: 'l', n: 1 }, { shape: 'rect', color: '파랑', size: 'm', n: 1 }], overlap: 1 }] },
    },
    acts: [
      mind('a1', '활동 1. 매체마다 잘 나타나는 특징 나누기', 12,
        '"이 설명은 연필로 나타낼 때 쉬울까요, 점토로 만들 때 쉬울까요?" 카드마다 낱말 단서(가는 선, 평평한 면, 두께, 빛)를 찾아 밑줄 긋게 한다. 점토는 손으로 만지는 두께를, 사진은 빛과 그림자를, 색종이는 단순한 면을, 연필은 가는 선과 진하고 옅은 정도를 잘 나타낸다고 기준을 세운다. "어느 매체든 다 똑같이 나타낼 수 있어요"라고 하는 학생에게는 지우개 옆면의 두께를 연필로 보여 주는 것과 점토로 보여 주는 것을 견주게 한다.',
        '카드를 읽고, 그 특징을 가장 잘 나타내는 매체 칸에 넣어요.',
        [
          sortItem({ prompt: '지우개를 나타내는 방법 카드를 매체 칸에 나누어 보세요.', topic: '지우개', slots: ['연필', '색종이', '점토'], d: 0.15,
            cards: [['p1', '모서리와 글자를 가는 선으로 그려요'], ['p2', '하얀 면과 파란 면을 나누어 붙여요'], ['p3', '두께와 둥근 모서리를 손으로 빚어요'], ['p4', '진하고 옅은 선으로 그림자를 나타내요'], ['p5', '눌러 보면 말랑한 느낌까지 담아요']],
            sort: { 연필: ['p1', 'p4'], 색종이: ['p2'], 점토: ['p3', 'p5'] }, extra: ['px', '지우개는 글씨를 지울 때 써요'],
            hint: '가는 선인지, 평평한 면인지, 손으로 만져지는 두께인지 낱말 단서를 찾아요.' }),
          sortItem({ prompt: '운동화를 나타내는 방법 카드를 매체 칸에 나누어 보세요.', topic: '운동화', slots: ['연필', '색종이', '사진'], d: 0.2,
            cards: [['s1', '끈 구멍을 하나하나 선으로 세어 그려요'], ['s2', '신발 모양을 큰 면 두 개로 오려 붙여요'], ['s3', '밑창에 진 그림자까지 있는 그대로 담겨요'], ['s4', '흙이 묻은 얼룩이 빛 따라 보이는 대로 남아요'], ['s5', '색 면을 겹쳐 신발 끈을 나타내요']],
            sort: { 연필: ['s1'], 색종이: ['s2', 's5'], 사진: ['s3', 's4'] }, extra: ['sx', '운동화는 체육 시간에 신어요'] }),
          sortItem({ prompt: '단풍잎을 나타내는 방법 카드를 네 매체 칸에 나누어 보세요.', topic: '단풍잎', slots: ['연필', '색종이', '점토', '사진'], d: 0.3,
            cards: [['m1', '잎맥 가닥을 가는 선으로 그려요'], ['m2', '주황과 빨강 면을 겹쳐 붙여요'], ['m3', '잎이 말려 올라간 두께를 손으로 만들어요'], ['m4', '창가 빛이 잎을 비추는 모습을 그대로 담아요']],
            sort: { 연필: ['m1'], 색종이: ['m2'], 점토: ['m3'], 사진: ['m4'] }, extra: ['mx', '단풍잎은 가을에 물들어요'],
            predict: { q: '모든 특징을 한 가지 매체로 똑같이 잘 나타낼 수 있을까요?', options: ['모두 잘 나타내요', '매체마다 잘 나타나는 특징이 달라요'], answer: 1 },
            conclude: '매체마다 잘 나타내는 특징이 달라서, 나타내고 싶은 것에 맞춰 고를 수 있어요.' }),
        ]),
      col('a2', '활동 2. 색종이 면으로 물건의 특징 나타내기', 13,
        '"색종이는 선이 아니라 면으로 나타내요. 지우개에서 가장 큰 면은 어디일까요?" 큰 면부터 붙이고 작은 면을 위에 겹치게 한다. 단풍잎 문항에서 잎맥 선을 색종이로 잇느라 오래 걸리는 학생에게는 "색종이는 선보다 덩어리를 나타내기 쉬워요. 작은 잎 몇 장으로 줄여 볼까요?"라고 말한다. 마지막 문항은 짝에게 왜 그 물건을 골랐는지 말한 뒤에만 점검을 표시하게 한다.',
        '색종이 모양을 골라 면으로 붙여요. 큰 면부터 붙이고 작은 면을 위에 겹쳐요.',
        ['rect', 'leaf', 'circle', 'square'], ['하양', '파랑', '주황', '빨강', '노랑'],
        [
          colItem({ prompt: '지우개를 색종이 면으로 나타내요. 큰 하양 긴 네모 하나 위에 보통 파랑 긴 네모를 겹쳐 붙여요.', d: 0.2,
            target: { has: [{ shape: 'rect', color: '하양', size: 'l', n: 1 }, { shape: 'rect', color: '파랑', size: 'm', n: 1 }], overlap: 1 },
            ch: { prompt: '글자 띠가 있는 지우개를 만들어요. 큰 하양 긴 네모 하나 위에 보통 파랑 긴 네모와 작은 노랑 네모 둘 이상을 겹쳐 붙여요.', target: { has: [{ shape: 'rect', color: '하양', size: 'l', n: 1 }, { shape: 'rect', color: '파랑', size: 'm', n: 1 }, { shape: 'square', color: '노랑', size: 's', min: 2 }], overlap: 3 } } }),
          colItem({ prompt: '단풍잎을 색종이 면으로 나타내요. 큰 주황 나뭇잎 하나 둘레에 작은 빨강 나뭇잎을 셋 이상 붙여요.', d: 0.25,
            target: { has: [{ shape: 'leaf', color: '주황', size: 'l', n: 1 }, { shape: 'leaf', color: '빨강', size: 's', min: 3 }] },
            ch: { prompt: '붉게 물든 가장자리가 보이는 단풍잎을 만들어요. 큰 주황 나뭇잎 하나 위에 작은 빨강 나뭇잎 다섯 장 이상을 겹쳐 붙여요.', target: { has: [{ shape: 'leaf', color: '주황', size: 'l', n: 1 }, { shape: 'leaf', color: '빨강', size: 's', min: 5 }], overlap: 5 } } }),
          colItem({ prompt: '내 필통 속 물건 하나를 색종이 면으로 나타내고 점검해요.', d: 0.1,
            target: { selfCheck: ['필통 속 물건 하나를 골랐어요', '가장 큰 면부터 붙였어요', '짝에게 그 물건을 고른 까닭을 말했어요'], minPieces: 3 } }),
        ]),
    ],
    wrap: {
      teacher: '"오늘 같은 지우개를 연필과 색종이로 나타냈더니 무엇이 달랐나요?" 짝의 작품과 견주어, 연필은 가는 선이 잘 나타났고 색종이는 큰 면이 잘 나타났다고 말하게 한다. 출구 1번에서 사진 칸에 "가는 선으로 그려요"를 넣은 학생은 사진이 선을 그리는 매체인지 되묻는다. 2번에서 "한 가지 매체면 충분하다"를 고른 학생이 많으면 다음 시간 첫머리에 같은 물건을 다른 매체로 다시 보여 준다.',
      exit: [
        { type: 'tool', tool: 'mindmap', options: { topic: '컵', slots: ['연필', '점토', '사진'], cards: cards([['e1', '손잡이 곡선을 가는 선으로 그려요'], ['e2', '컵의 두께와 둥근 모양을 손으로 빚어요'], ['e3', '컵 안쪽에 들어온 빛과 그림자를 그대로 담아요']]) }, prompt: '컵을 나타내는 방법 카드를 알맞은 매체 칸에 넣어 보세요.', target: { sort: { 연필: ['e1'], 점토: ['e2'], 사진: ['e3'] } }, difficulty: 0.15 },
        { type: 'choice', prompt: '"물건은 한 가지 매체로 나타내면 충분해."라는 말에 대한 생각으로 알맞은 것은?', options: ['맞아요. 어떤 매체든 똑같아요.', '매체마다 잘 나타내는 특징이 달라서 골라 쓸 수 있어요.', '매체는 연필뿐이에요.'], answer: 1, difficulty: 0.15, explain: '오늘 연필은 선, 색종이는 면, 점토는 두께를 잘 나타냈어요.' },
        { type: 'mood', prompt: '오늘 여러 매체를 견주어 본 느낌은 어땠나요?' },
      ],
    },
    ws: {
      title: '같은 물건, 다른 매체',
      items: [
        { type: 'table', prompt: '지우개를 나타낼 때 매체마다 잘 나타나는 특징을 쓰세요.', columns: ['매체', '잘 나타나는 특징'], cells: [['연필', '가는 선, 진하고 옅은 정도'], ['색종이', ''], ['점토', ''], ['사진', '']] },
        fig('지우개를 색종이 면으로 완성하세요. 큰 면 위에 작은 면을 한 개 더 겹쳐 그리세요.', [pc('rect', '하양', 'l', 280, 200, 0), pc('rect', '파랑', 'm', 280, 200, 0)], '큰 면 위에 작은 면 겹치기', '큰 면 위에 작은 색 면을 겹쳐 붙인 모양'),
        { type: 'choice', prompt: '손으로 만지는 두께를 가장 잘 나타내는 매체에 ○ 하세요.', options: ['연필', '색종이', '점토', '사진'], answer: '점토' },
        { type: 'short', prompt: '내 필통 속 물건 하나를 고르고, 어떤 매체로 나타내면 좋을지 까닭과 함께 쓰세요.' },
      ],
      easy: { note: '가는 선은 연필, 평평한 색 면은 색종이, 손으로 만지는 두께는 점토예요.', items: [
        { type: 'choice', prompt: '가는 선을 잘 나타내는 매체에 ○ 하세요.', options: ['연필', '점토'], answer: '연필' },
        { type: 'table', prompt: '매체와 잘 나타나는 특징을 이으며 쓰세요.', columns: ['매체', '잘 나타나는 특징'], cells: [['색종이', ''], ['점토', '']] },
        { type: 'draw', prompt: '필통 속 물건 하나를 색종이 면처럼 크게 그리세요.' },
      ] },
    },
    diff: {
      easy: '맞는 칸에 넣으면 초록 테두리가 생기고, 색종이 고르개는 모양 네 가지·색 다섯 가지예요.',
      base: '스스로 나눈 뒤 확인하고, 색종이 고르개에 반원·별과 검정·하양이 더해져요.',
      challenge: '어느 칸에도 넣지 않는 카드가 하나 섞여 있어요. 색종이는 겹침을 더 많이 써서 글자 띠·잎 가장자리까지 나타내요.',
    },
    notes: '자주 보이는 어려움: ① 매체를 그림 도구로만 여긴다 → 점토·사진도 매체임을 칠판 목록으로 보인다. ② 사진은 미술이 아니라고 여긴다 → 빛과 구도를 고르는 선택이 들어간다고 말한다. ③ 색종이로 가는 선을 나타내려다 오래 걸린다 → 색종이는 면이 장점이라고 말한다. 준비물: 모둠마다 지우개 하나, 점토 한 덩이(없으면 활동 2의 색종이만 써도 된다).',
  });

  // ───────────── 2차시 (연습) ─────────────
  make(2, S1, {
    title: '내 손바닥을 눈·손으로 살펴 알아낸 것 짝지어 보기',
    objective: '내 손을 눈으로 보고 손가락으로 만져 알아낸 것을 감각과 이어 말하고, 지문 같은 소용돌이 무늬를 겹쳐 붙인 조각으로 나타낼 수 있다.',
    art: 'a child studying the swirling lines of a fingertip through a paper magnifier beside a hand tracing',
    scene: [
      { motif: 'sun', x: 404, y: 60, s: 0.7 }, { motif: 'cloud', x: 120, y: 54 }, { motif: 'hills', y: 210 },
      { motif: 'flower', x: 150, y: 222, color: 'buttercup', s: 1.1 }, { motif: 'bird', x: 300, y: 84 }, { motif: 'tree', x: 400, y: 216, s: 0.9 },
      { motif: 'text', x: 240, y: 146, text: '나를 살펴봐요', size: 22 },
    ],
    intro: {
      teacher: '"내 손은 내가 제일 잘 아는 물건일까요? 손바닥을 얼굴 가까이에 대고 10초만 말없이 살펴보세요." 10초 뒤 "처음 보는 것이 하나라도 있었나요?" 손을 든 학생에게 무엇이었는지 한 명만 말하게 한다. "자기 자신도 탐색할 수 있는 대상이에요. 눈으로 보는 것, 손끝으로 만져 보는 것으로 나눠 알아봐요." 나는 이미 다 안다는 생각이 오개념이라, 처음 보는 것이 있었는지로 확인한다. 시연 단추로 소용돌이 무늬가 조각으로 나타나는 모습을 보여 준다.',
      student: '손바닥을 10초 동안 말없이 살펴보고, 처음 본 것을 하나 말해 봅시다.',
      demo: { tool: 'collage', options: { shapes: ['circle'], colors: ['갈색', '하양'] }, sequence: [{ has: [{ shape: 'circle', color: '갈색', size: 'l', n: 1 }, { shape: 'circle', color: '하양', size: 'm', n: 1 }, { shape: 'circle', color: '갈색', size: 's', n: 1 }], overlap: 2 }] },
    },
    acts: [
      mind('a1', '활동 1. 내 몸을 살핀 말과 알아낸 방법 잇기', 12,
        '"민지가 한 이 말은 눈으로 알아낸 걸까요, 손끝으로 만져 알아낸 걸까요?" 말에서 단서가 되는 낱말(색이 옅어요, 오돌토돌해요, 따뜻해요)에 밑줄을 긋게 한다. "내 몸이니 방법과 상관없이 다 알 수 있다"는 학생에게는 눈을 감고도 손바닥의 색을 알 수 있는지 묻는다. 눈으로 보아 알 수 있는 것(색·무늬·모양)과 만져서 알 수 있는 것(거칠기·온도·말랑함)을 나누는 기준을 한 번 더 말해 준다.',
        '친구가 내 몸을 살피고 한 말을 읽고, 어느 방법으로 알아냈는지 카드를 이어요.',
        [
          matchItem({ prompt: '손바닥을 살핀 친구들의 말에 알아낸 방법 카드를 이어 보세요.', topic: '내 손바닥', d: 0.2,
            slots: [['m1', '손금 사이가 빨갛게 보여'], ['m2', '손끝이 오돌토돌해'], ['m3', '손바닥 가운데가 따뜻해']],
            cards: [['eye', '눈으로 보기'], ['touch', '손끝으로 만지기'], ['warm', '피부로 온도 느끼기'], ['ear', '귀로 듣기']],
            match: { m1: 'eye', m2: 'touch', m3: 'warm' }, extra: ['smell', '코로 냄새 맡기'],
            hint: '눈을 감아도 알 수 있는지, 감으면 알 수 없는지 말마다 따져요.' }),
          matchItem({ prompt: '손톱을 살핀 친구들의 말에 알아낸 방법 카드를 이어 보세요.', topic: '내 손톱', d: 0.25,
            slots: [['n1', '끝이 하얗고 가운데는 분홍빛이야'], ['n2', '두드리면 딱딱 소리가 나'], ['n3', '가장자리가 까칠까칠해']],
            cards: [['eye', '눈으로 보기'], ['ear', '귀로 듣기'], ['touch', '손끝으로 만지기'], ['warm', '피부로 온도 느끼기']],
            match: { n1: 'eye', n2: 'ear', n3: 'touch' }, extra: ['smell', '코로 냄새 맡기'] }),
          matchItem({ prompt: '머리카락을 살핀 친구들의 말에 알아낸 방법 카드를 이어 보세요.', topic: '내 머리카락', d: 0.3,
            slots: [['h1', '햇빛에서는 밤색으로 보여'], ['h2', '비비면 사각사각 소리가 나'], ['h3', '한 올이 아주 가늘고 매끈해']],
            cards: [['eye', '눈으로 보기'], ['ear', '귀로 듣기'], ['touch', '손끝으로 만지기'], ['warm', '피부로 온도 느끼기']],
            match: { h1: 'eye', h2: 'ear', h3: 'touch' }, extra: ['smell', '코로 냄새 맡기'],
            predict: { q: '가장 잘 아는 내 몸도 자세히 살피면 새로 알게 될 것이 있을까요?', options: ['거의 없어요', '있어요'], answer: 1 },
            conclude: '내 몸도 눈과 손끝으로 자세히 살피면 몰랐던 모습을 더 찾을 수 있어요.' }),
        ]),
      col('a2', '활동 2. 소용돌이 지문 무늬를 겹쳐 붙이기', 13,
        '"손끝을 돋보기로 보면 선이 동그랗게 돌아요. 가장 바깥 동그라미부터 붙이고 안쪽으로 점점 작은 동그라미를 겹쳐 볼까요?" 큰 조각부터 붙이고 작은 조각을 위에 올리게 한다. 동그라미를 같은 크기로만 붙이는 학생에게는 "안으로 갈수록 작아지면 어떻게 보이나요?"라고 묻는다. 마지막 문항은 자기 손끝에서 본 무늬를 짝에게 설명한 뒤에만 점검을 표시하게 한다.',
        '내가 본 손끝 무늬를 떠올려, 큰 동그라미부터 작은 동그라미를 겹쳐 붙여요.',
        ['circle', 'semi', 'square'], ['갈색', '하양', '분홍', '노랑'],
        [
          colItem({ prompt: '손끝 무늬를 만들어요. 큰 갈색 동그라미 위에 보통 하양 동그라미, 그 위에 작은 갈색 동그라미를 겹쳐 붙여요.', d: 0.2,
            target: { has: [{ shape: 'circle', color: '갈색', size: 'l', n: 1 }, { shape: 'circle', color: '하양', size: 'm', n: 1 }, { shape: 'circle', color: '갈색', size: 's', n: 1 }], overlap: 2 },
            ch: { prompt: '소용돌이가 더 많이 도는 손끝 무늬를 만들어요. 큰 갈색 동그라미 위에 하양·갈색·하양·갈색 동그라미를 차례로 줄여 가며 겹치되, 작은 동그라미를 둘 이상 넣어요.', target: { has: [{ shape: 'circle', color: '갈색', size: 'l', n: 1 }, { shape: 'circle', color: '하양', min: 2 }, { shape: 'circle', color: '갈색', size: 's', min: 2 }], overlap: 4 } } }),
          colItem({ prompt: '손바닥 위 손가락을 나타내요. 큰 분홍 반원 하나(손바닥) 위에 작은 노랑 동그라미 손톱을 셋 이상 겹쳐 붙여요.', d: 0.25,
            target: { has: [{ shape: 'semi', color: '분홍', size: 'l', n: 1 }, { shape: 'circle', color: '노랑', size: 's', min: 3 }], overlap: 3 } }),
          colItem({ prompt: '내 손에서 가장 새로 찾은 특징 하나를 골라 조각으로 나타내고 점검해요.', d: 0.1,
            target: { selfCheck: ['내 손에서 처음 본 특징 하나를 골랐어요', '그 특징이 잘 보이게 큰 조각부터 붙였어요', '짝에게 눈과 손끝 중 무엇으로 알았는지 말했어요'], minPieces: 4 } }),
        ]),
    ],
    wrap: {
      teacher: '"오늘 내 손에서 새로 알게 된 것은 무엇이고, 눈과 손끝 중 어느 것으로 알았나요?" 두세 명이 손끝 무늬·손톱 아래 반달 같은 새로 안 점을 말하게 한다. 출구 1번에서 "따뜻해요"를 눈 카드에 이은 학생은 눈을 감아도 알 수 있는지 되묻는다. 2번에서 "자기 몸은 이미 다 안다"를 고른 학생에게는 활동 1에서 처음 본 것이 있었는지 떠올리게 한다.',
      exit: [
        { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '내 팔꿈치', slots: slotsOf([['a1', '안쪽에 가로로 잔주름이 보여'], ['a2', '만져 보면 단단한 뼈가 느껴져']]), cards: cards([['eye', '눈으로 보기'], ['touch', '손끝으로 만지기'], ['ear', '귀로 듣기']]) }, prompt: '팔꿈치를 살핀 말에 알아낸 방법 카드를 이어 보세요.', target: { match: { a1: 'eye', a2: 'touch' } }, difficulty: 0.15 },
        { type: 'choice', prompt: '"내 몸이니까 자세히 살필 필요가 없어."라는 말에 대한 생각으로 알맞은 것은?', options: ['맞아요. 이미 다 알아요.', '내 몸도 자세히 살피면 새로 알게 되는 것이 있어요.', '남의 몸만 살필 수 있어요.'], answer: 1, difficulty: 0.15, explain: '손끝 무늬처럼 잘 아는 내 몸에도 처음 보는 모습이 있었어요.' },
        { type: 'mood', prompt: '오늘 내 몸을 살펴본 느낌은 어땠나요?' },
      ],
    },
    ws: {
      title: '내 손 탐색하기',
      items: [
        { type: 'table', prompt: '내 손에서 살펴 알아낸 것을 방법마다 쓰세요.', columns: ['알아낸 방법', '내 손에서 알아낸 것'], cells: [['눈으로 보기', ''], ['손끝으로 만지기', ''], ['피부로 온도 느끼기', '']] },
        fig('손끝 무늬를 완성하세요. 가운데로 갈수록 작은 동그라미를 한 개 더 그려 넣으세요.', [pc('circle', '갈색', 'l', 280, 200, 0), pc('circle', '하양', 'm', 280, 200, 0)], '안으로 갈수록 작아지는 동그라미', '가운데로 갈수록 작아지는 동그라미가 겹친 소용돌이'),
        { type: 'choice', prompt: '손끝으로 만져 알아낸 것에 ○ 하세요.', options: ['손톱 끝이 하얀 것', '손끝이 오돌토돌한 것', '손바닥이 분홍빛인 것', '손금이 굽은 모양인 것'], answer: '손끝이 오돌토돌한 것' },
        { type: 'draw', prompt: '내 손에서 새로 찾은 특징 하나를 크게 그리세요.' },
      ],
      easy: { note: '눈을 감아도 알 수 있으면 눈으로 본 것이 아니에요. 거칠기·온도는 손끝과 피부로 알아요.', items: [
        { type: 'choice', prompt: '눈으로 보아 알아낸 것에 ○ 하세요.', options: ['손톱이 분홍빛이에요', '손끝이 오돌토돌해요'], answer: '손톱이 분홍빛이에요' },
        { type: 'table', prompt: '손바닥을 살펴 알아낸 것을 쓰세요.', columns: ['방법', '알아낸 것'], cells: [['눈으로 보기', ''], ['손끝으로 만지기', '']] },
        { type: 'draw', prompt: '손끝 무늬를 그리세요.' },
      ] },
    },
    diff: {
      easy: '맞게 이은 카드에 초록 테두리가 생기고, 색종이는 모양 세 가지·색 네 가지만 나와요.',
      base: '스스로 이은 뒤 확인하고, 색종이 고르개에 별과 검정이 더해져요.',
      challenge: '이을 수 없는 방법 카드가 하나 섞여 있어요. 지문 무늬는 동그라미를 네 겹까지 줄여 가며 붙여요.',
    },
    notes: '자주 보이는 어려움: ① 내 몸이니 이미 다 안다고 여긴다 → 도입의 10초 관찰에서 처음 본 것이 있었는지로 확인한다. ② 눈·촉감·온도를 구별하지 못한다 → 눈을 감아도 알 수 있는지로 가른다. ③ 동그라미를 같은 크기로만 붙인다 → 안으로 갈수록 작아지는 모양을 견주어 보인다. 준비물: 돋보기(없으면 손바닥만 살펴도 된다). 손끝 무늬는 손바닥보다 작은 부분이라 가까이 대고 보게 한다.',
  });

  // ───────────── 3차시 (확장) ─────────────
  make(3, S1, {
    title: '손전등으로 비춘 연필 그림자가 길어지고 짧아지는 모습 찾기',
    objective: '빛이 오는 방향과 높이에 따라 그림자의 길이와 진하기가 달라지는 것을 말하고, 밝은 물건과 어두운 그림자를 붙여 나타낼 수 있다.',
    art: 'a child shining a small flashlight on a pencil standing on a desk so a long thin shadow stretches across the paper',
    scene: [
      { motif: 'moon', x: 400, y: 56, s: 0.7 }, { motif: 'star', x: 330, y: 84, s: 0.5 }, { motif: 'hills', y: 212 },
      { motif: 'house', x: 100, y: 216, s: 1 }, { motif: 'tree', x: 380, y: 216, s: 1.2 }, { motif: 'cloud', x: 140, y: 56 },
      { motif: 'text', x: 240, y: 140, text: '빛이 만든 그림자', size: 22 },
    ],
    safety: ['손전등 빛은 친구의 눈에 비추지 않고, 물건 위와 종이 위에만 비춰요.'],
    intro: {
      teacher: '불을 끄고 손전등으로 연필을 세워 비춘 뒤 "벽에 무엇이 생겼나요?"라고 묻는다. 손전등을 위로 올렸다 옆으로 내렸다 하면서 "그림자가 어떻게 달라지나요?" 학생이 말한 낱말(길어져요, 흐려져요)을 칠판에 적는다. "그림자는 빛이 막혀서 생긴 어두운 모양이에요. 그림자도 미술에서는 탐색할 수 있는 모습이에요." 그림자가 물건의 그림이 아니라 빛이 막힌 자리라는 점을 짚는다. 시연 단추로 밝은 물건에 어두운 그림자가 맞닿는 모습을 보여 준다.',
      student: '손전등으로 비춘 연필 그림자가 어떻게 달라지는지 낱말 하나로 말해 봅시다.',
      demo: { tool: 'collage', options: { shapes: ['circle'], colors: ['노랑', '검정'] }, sequence: [{ contrast: 'light-dark', has: [{ shape: 'circle', color: '노랑', n: 1 }, { shape: 'circle', color: '검정', n: 1 }] }] },
    },
    acts: [
      mind('a1', '활동 1. 빛의 높이에 따라 달라진 그림자 나누기', 12,
        '"이 그림자는 빛이 높은 곳에서 왔을까요, 낮게 옆에서 왔을까요?" 카드의 낱말 단서(짧고 진해요, 길게 늘어져요)에 밑줄을 긋게 한다. 손전등을 연필 바로 위에서 비추면 그림자가 짧고 진하고, 옆에서 낮게 비추면 길고 옅다는 기준을 직접 보여 준다. "그림자 길이는 물건 크기에 따라서만 달라진다"는 학생에게는 같은 연필의 그림자를 두 방향에서 보여 준다.',
        '그림자를 설명한 카드를 읽고, 빛이 높이 있을 때와 낮게 있을 때로 나누어요.',
        [
          sortItem({ prompt: '연필 그림자를 설명한 카드를 빛이 높을 때와 낮을 때로 나누어 보세요.', topic: '연필 그림자', d: 0.2,
            slots: [['high', '빛이 높을 때'], ['low', '빛이 낮을 때']],
            cards: [['a1', '그림자가 연필 발치에 짧게 모여요'], ['a2', '그림자가 책상 끝까지 길게 늘어져요'], ['a3', '그림자 색이 진하고 또렷해요'], ['a4', '그림자 끝이 흐릿하게 번져요'], ['a5', '그림자가 연필 굵기만 해요']],
            sort: { high: ['a1', 'a3', 'a5'], low: ['a2', 'a4'] }, extra: ['ax', '연필은 나무로 만들어요'],
            hint: '손전등이 연필 바로 위에 있을 때와 옆에 누워 있을 때를 떠올려 그림자 길이를 따져요.' }),
          sortItem({ prompt: '운동장 철봉 그림자를 설명한 카드를 빛이 높을 때와 낮을 때로 나누어 보세요.', topic: '철봉 그림자', d: 0.25,
            slots: [['high', '빛이 높을 때'], ['low', '빛이 낮을 때']],
            cards: [['b1', '한낮에 그림자가 발밑에 작게 있어요'], ['b2', '저녁에 그림자가 운동장을 가로질러요'], ['b3', '그림자 둘레가 선명하게 잘려요'], ['b4', '그림자가 철봉보다 훨씬 길어요']],
            sort: { high: ['b1', 'b3'], low: ['b2', 'b4'] }, extra: ['bx', '철봉은 쇠로 만들어요'] }),
          sortItem({ prompt: '나무 그림자를 설명한 카드를 빛이 높을 때와 낮을 때로 나누어 보세요.', topic: '나무 그림자', d: 0.3,
            slots: [['high', '빛이 높을 때'], ['low', '빛이 낮을 때']],
            cards: [['c1', '나뭇잎 그림자가 동그란 점으로 흩어져요'], ['c2', '줄기 그림자가 길게 누워요'], ['c3', '그림자가 나무 가까이에 짧게 있어요'], ['c4', '가지 그림자가 건너편 담까지 닿아요']],
            sort: { high: ['c1', 'c3'], low: ['c2', 'c4'] }, extra: ['cx', '나무는 봄에 새잎이 나요'],
            predict: { q: '해가 낮게 떠 있는 아침과 저녁에 그림자는 어떨까요?', options: ['짧아요', '길어요'], answer: 1 },
            conclude: '빛이 낮게 오면 그림자는 길어지고, 높이 있으면 짧아져요.' }),
        ]),
      col('a2', '활동 2. 밝은 물건과 어두운 그림자 붙이기', 13,
        '"공은 밝고 그림자는 어두워요. 둘이 맞닿아야 그림자처럼 보여요." 물건을 먼저 붙이고 그림자를 닿게 이어 붙이게 한다. 기둥 문항에서 그림자를 물건과 떨어뜨려 붙이는 학생에게는 "그림자는 물건 발에서 시작되나요?"라고 묻는다. 마지막 문항은 손전등이 어느 쪽에 있는지 짝에게 말한 뒤에만 점검을 표시하게 한다.',
        '밝은 색 물건을 붙이고, 어두운 색 그림자를 물건에 맞닿게 붙여요.',
        ['circle', 'rect', 'semi'], ['노랑', '검정', '하양', '갈색'],
        [
          colItem({ prompt: '공과 그림자를 만들어요. 보통 노랑 동그라미 공 하나와 보통 검정 반원 그림자 하나를 서로 닿게 붙여요.', d: 0.2,
            target: { contrast: 'light-dark', has: [{ shape: 'circle', color: '노랑', size: 'm', n: 1 }, { shape: 'semi', color: '검정', size: 'm', n: 1 }] },
            ch: { prompt: '해가 낮은 날의 공을 만들어요. 보통 노랑 동그라미 하나에 큰 검정 긴 네모 그림자를 닿게 붙이고, 작은 하양 동그라미 빛 반사를 하나 더해요.', target: { contrast: 'light-dark', has: [{ shape: 'circle', color: '노랑', size: 'm', n: 1 }, { shape: 'rect', color: '검정', size: 'l', n: 1 }, { shape: 'circle', color: '하양', size: 's', n: 1 }] } } }),
          colItem({ prompt: '기둥과 긴 그림자를 만들어요. 큰 하양 긴 네모 기둥 하나에 큰 검정 긴 네모 그림자를 겹쳐 붙여요.', d: 0.25,
            target: { contrast: 'light-dark', has: [{ shape: 'rect', color: '하양', size: 'l', n: 1 }, { shape: 'rect', color: '검정', size: 'l', n: 1 }], overlap: 1 } }),
          colItem({ prompt: '손전등으로 내가 비춘 물건 하나와 그 그림자를 조각으로 나타내고 점검해요.', d: 0.1,
            target: { selfCheck: ['밝은 색으로 물건을 붙였어요', '어두운 색 그림자를 물건에 닿게 붙였어요', '짝에게 손전등이 어느 쪽에 있었는지 말했어요'], minPieces: 2 } }),
        ]),
    ],
    wrap: {
      teacher: '"그림자가 길어지게 하려면 빛을 어디에 두어야 하나요?" 두 학생이 손전등을 직접 옮겨 가며 대답하게 한다. 출구 1번에서 "짧게 모여요"를 낮은 빛 칸에 넣은 학생은 연필 바로 위에서 비춘 그림자를 다시 보여 준다. 2번에서 "그림자는 물건 그림과 같은 색"을 고른 학생이 많으면 다음 시간에 검은 종이 위 그림자를 함께 본다.',
      exit: [
        { type: 'tool', tool: 'mindmap', options: { topic: '의자 그림자', slots: slotsOf([['high', '빛이 높을 때'], ['low', '빛이 낮을 때']]), cards: cards([['e1', '그림자가 의자 아래에 작게 있어요'], ['e2', '그림자가 교실 바닥을 길게 건너가요']]) }, prompt: '의자 그림자를 설명한 카드를 빛의 높이에 맞게 나누어 보세요.', target: { sort: { high: ['e1'], low: ['e2'] } }, difficulty: 0.15 },
        { type: 'choice', prompt: '그림자가 가장 길게 늘어나는 때는 언제인가요?', options: ['빛이 머리 바로 위에 있을 때', '빛이 낮게 옆에서 올 때', '빛이 아주 밝을 때'], answer: 1, difficulty: 0.15, explain: '빛이 낮게 옆에서 오면 물건보다 훨씬 긴 그림자가 생겨요.' },
        { type: 'mood', prompt: '오늘 그림자를 살펴본 느낌은 어땠나요?' },
      ],
    },
    ws: {
      title: '빛과 그림자',
      items: [
        { type: 'table', prompt: '손전등 위치에 따른 연필 그림자를 살핀 결과를 쓰세요.', columns: ['손전등 위치', '그림자 길이', '그림자 진하기'], cells: [['연필 바로 위', '', ''], ['연필 옆 낮은 곳', '', '']] },
        fig('공 옆에 그림자를 그려 넣으세요. 공이 밝으니 그림자는 어둡게 칠하세요.', [pc('circle', '노랑', 'm', 220, 200, 0)], '그림자는 공에 닿게', '공 오른쪽에 닿은 어두운 그림자'),
        { type: 'choice', prompt: '해가 낮게 뜬 저녁 그림자에 ○ 하세요.', options: ['짧고 진해요', '길고 늘어져요', '그림자가 없어요'], answer: '길고 늘어져요' },
        { type: 'draw', prompt: '교실 물건 하나와 그 그림자를 크게 그리세요.' },
      ],
      easy: { note: '빛이 높이 있으면 그림자가 짧아요. 빛이 낮으면 그림자가 길어요.', items: [
        { type: 'choice', prompt: '그림자가 짧을 때에 ○ 하세요.', options: ['빛이 높을 때', '빛이 낮을 때'], answer: '빛이 높을 때' },
        { type: 'table', prompt: '빛의 높이와 그림자 길이를 쓰세요.', columns: ['빛', '그림자 길이'], cells: [['높을 때', ''], ['낮을 때', '']] },
        { type: 'draw', prompt: '공과 그림자를 그리세요.' },
      ] },
    },
    diff: {
      easy: '맞는 칸에 넣으면 초록 테두리가 생기고, 색종이는 모양 세 가지·색 네 가지만 나와요.',
      base: '스스로 나눈 뒤 확인하고, 색종이 고르개에 별·정사각형 대신 반원과 별이 더해져요.',
      challenge: '어느 칸에도 넣지 않는 카드가 섞여 있어요. 그림자는 더 크게 붙이고 빛 반사 조각까지 더해요.',
    },
    notes: '자주 보이는 어려움: ① 그림자가 물건의 그림이라고 여긴다 → 빛이 막힌 자리라고 말하고 손으로 빛을 가려 보인다. ② 빛이 높을수록 그림자가 길어진다고 거꾸로 여긴다 → 손전등을 연필 바로 위에 두고 다시 비춘다. ③ 그림자를 물건과 떨어뜨려 붙인다 → 물건 발에서 시작함을 짚는다. 준비물: 모둠마다 손전등(없으면 휴대용 조명)과 연필 하나.',
  });

  // ───────────── 4차시 (확장) ─────────────
  make(4, S1, {
    title: '짝을 인터뷰하고 닮은 색과 모양으로 나를 소개하기',
    objective: '내가 직접 살펴 알아낸 나의 모습과 짐작한 모습을 구별해 말하고, 나를 닮은 색·모양을 골라 소개하는 작품으로 나타낼 수 있다.',
    art: 'two children interviewing each other with paper notebooks and a small mirror, colorful paper shapes floating around them',
    scene: [
      { motif: 'sun', x: 408, y: 58, s: 0.8 }, { motif: 'cloud', x: 118, y: 52 }, { motif: 'hills', y: 208 },
      { motif: 'flower', x: 120, y: 222, color: 'buttercup', s: 1.1 }, { motif: 'flower', x: 360, y: 222, s: 1.1 }, { motif: 'star', x: 250, y: 74, s: 0.6 },
      { motif: 'text', x: 240, y: 140, text: '나를 소개해요', size: 22 },
    ],
    intro: {
      teacher: '거울을 한 장 보여 주며 "거울 속 내 얼굴에서 오늘 가장 눈에 띄는 것은 무엇인가요?"라고 묻는다. 눈, 앞머리, 웃을 때 생기는 보조개처럼 학생이 찾은 것을 두세 가지 받아 쓴다. "내가 직접 살펴 안 것과 남이 말해 줘서 알게 된 것은 달라요. 오늘은 내가 살핀 것으로 나를 소개해 볼 거예요." 그저 짐작한 것("나는 용감해")을 살핀 것으로 여기는 생각을 짚는다. 시연 단추로 별과 동그라미로 나를 소개하는 작품이 모이는 모습을 보여 준다.',
      student: '거울을 보고 오늘 내 얼굴에서 눈에 띄는 것을 한 가지 말해 봅시다.',
      demo: { tool: 'collage', options: { shapes: ['star', 'circle'], colors: ['노랑', '주황'] }, sequence: [{ has: [{ shape: 'star', color: '노랑', min: 3 }, { shape: 'circle', color: '주황', n: 1 }] }] },
    },
    acts: [
      pick0('a1', '활동 1. 내가 살펴 안 것만 골라 담기', 9,
        '"이 말은 거울을 보거나 내 몸을 만져 보고 직접 알아낸 걸까요, 그냥 짐작한 걸까요?" 카드마다 "~로 보여요, ~가 느껴져요"처럼 감각이 들어 있는지 찾게 한다. "나는 착해"처럼 보거나 만져서는 알 수 없는 말은 살핀 것이 아니라 생각임을 짚는다. 마지막 문항에서는 이긴 학생과 진 학생의 기분처럼 살핀 것이 아닌 카드가 섞여 있다는 점을 알려 준다.',
        '카드를 읽고, 내가 보거나 만지거나 들어서 직접 알아낸 것만 바구니에 담아요.',
        [
          pickItem({ prompt: '나를 소개한 카드 가운데 직접 살펴 알아낸 것만 담아 보세요.', topic: '살펴서 안 나', d: 0.2,
            cards: [['k1', '웃으면 왼쪽 볼에 보조개가 생겨요'], ['k2', '나는 누구보다 용감해요'], ['k3', '머리카락이 햇빛에서 밤색으로 보여요'], ['k4', '친구들이 나를 좋아할 거예요']], pick: ['k1', 'k3'],
            hint: '거울을 보거나 만지거나 들어서 알 수 있는 말인지 따져요.' }),
          pickItem({ prompt: '내 목소리를 소개한 카드 가운데 직접 들어서 알아낸 것만 담아 보세요.', topic: '들어서 안 나', d: 0.25,
            cards: [['v1', '이름을 부르면 끝이 높게 올라가요'], ['v2', '나는 노래를 잘할 거예요'], ['v3', '속삭이면 바람 소리처럼 얇게 들려요'], ['v4', '목소리가 클수록 멋있어요']], pick: ['v1', 'v3'] }),
          pickItem({ prompt: '내 신발을 소개한 카드 가운데 직접 만지고 살펴 알아낸 것만 담아 보세요.', topic: '만져서 안 신발', d: 0.3,
            cards: [['s1', '오른쪽 뒤꿈치가 더 많이 닳았어요'], ['s2', '새 신발이라 아주 튼튼할 거예요'], ['s3', '끈이 한쪽만 올이 풀렸어요'], ['s4', '이 신발은 비싼 신발이에요']], pick: ['s1', 's3'],
            predict: { q: '나를 소개할 때 짐작과 직접 살핀 것 가운데 무엇이 더 믿을 만할까요?', options: ['짐작이 더 믿을 만해요', '직접 살핀 것이 더 믿을 만해요'], answer: 1 },
            conclude: '직접 살펴 알아낸 것은 근거가 있어서 나를 소개하는 말로 더 잘 쓰여요.' }),
        ]),
      col('a2', '활동 2. 나를 닮은 색과 모양으로 소개하기', 9,
        '"활발한 나를 별과 따뜻한 색으로, 차분한 나를 동그라미와 차가운 색으로 나타낼 수 있어요." 먼저 자기가 살핀 한 가지를 정하고 그에 맞는 모양을 고르게 한다. "나는 활발하니까 모든 조각을 별로 해야 해요"라는 학생에게는 별 사이에 동그라미가 있으면 어떻게 달라 보이는지 묻는다. 마지막 문항은 짝이 인터뷰한 내용을 조각으로 옮겨 짝에게 보여 주게 한다.',
        '내가 살핀 나의 특징에 어울리는 색과 모양을 골라 소개하는 작품을 만들어요.',
        ['star', 'circle', 'semi', 'heart'], ['노랑', '주황', '파랑', '하양', '분홍'],
        [
          colItem({ prompt: '활발한 나를 나타내요. 노란 별 세 개 이상과 큰 주황 동그라미 하나를 붙여요.', d: 0.2,
            target: { has: [{ shape: 'star', color: '노랑', min: 3 }, { shape: 'circle', color: '주황', size: 'l', n: 1 }] },
            ch: { prompt: '활발한 나를 더 힘차게 나타내요. 노란 별 다섯 개 이상과 큰 주황 동그라미 하나, 작은 분홍 하트 둘 이상을 붙여요.', target: { has: [{ shape: 'star', color: '노랑', min: 5 }, { shape: 'circle', color: '주황', size: 'l', n: 1 }, { shape: 'heart', color: '분홍', size: 's', min: 2 }] } } }),
          colItem({ prompt: '차분한 나를 나타내요. 큰 파랑 반원 하나 위에 작은 하양 동그라미 둘 이상을 겹쳐 붙여요.', d: 0.25,
            target: { has: [{ shape: 'semi', color: '파랑', size: 'l', n: 1 }, { shape: 'circle', color: '하양', size: 's', min: 2 }], overlap: 2 } }),
          colItem({ prompt: '짝을 인터뷰해 알아낸 짝의 특징 하나를 조각으로 나타내고 점검해요.', d: 0.1,
            target: { selfCheck: ['짝에게 직접 물어 알아낸 특징 하나를 골랐어요', '그 특징에 어울리는 색과 모양을 골랐어요', '짝에게 작품을 보여 주고 맞는지 물었어요'], minPieces: 3 } }),
        ]),
      pair('a3', '활동 3. 짝에게 눈으로 본 것 묻고 적기', 7,
        '준비물: 짝마다 작은 거울 하나와 인터뷰 칸이 있는 활동지. "짝에게 물어서 알게 된 것과, 직접 본 것을 나누어 적어요." 먼저 짝이 자기 모습에서 직접 살핀 것 두 가지를 말하게 하고, 한 사람이 받아 적는다. "친절해요"처럼 살핀 것이 아닌 말이 나오면 "어디서 보였어요?"라고 되묻게 한다.',
        '짝과 번갈아 서로를 인터뷰해요. 짝이 직접 살핀 것을 활동지 1번에 받아 적어요.',
        '짝 인터뷰', [['see', '눈으로 본 것'], ['touch', '손으로 만진 것']],
        [
          ['짝에게 거울을 보며 눈으로 본 자기 모습 두 가지를 말해 달라고 하고, 활동지 1번 표에 받아 적은 뒤 "다 했어요"를 누르세요.', [['q1', '색'], ['q2', '모양']]],
          ['짝이 손으로 만져 알아낸 자기 모습 한 가지를 받아 적은 뒤 "다 했어요"를 누르세요.', [['q1', '거칠기'], ['q2', '온도']]],
          ['역할을 바꾸어 내가 말한 것을 짝이 읽어 주면 맞는지 확인하고 "다 했어요"를 누르세요.', [['q1', '맞아요'], ['q2', '고쳐요']]],
        ]),
    ],
    wrap: {
      teacher: '"짝이 알려 준 것 가운데 몰랐던 내 모습이 있었나요?" 두세 명이 발표한 뒤 직접 살핀 것과 짐작한 것을 칠판에서 가른다. 출구 1번에서 "나는 용감해요"를 담은 학생은 어디서 보거나 만져서 알았는지 되묻는다. 2번에서 "짐작도 살핀 것"을 고른 학생에게는 활동 1에서 담지 않은 카드를 떠올리게 한다.',
      exit: [
        { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '직접 살핀 내 모습', cards: cards([['e1', '손목에 작은 점이 하나 있어요'], ['e2', '나는 인기가 많을 거예요'], ['e3', '웃을 때 눈이 가늘어져요'], ['e4', '나는 반에서 제일 멋있어요']]) }, prompt: '직접 살펴 알아낸 것만 바구니에 담아 보세요.', target: { pick: ['e1', 'e3'] }, difficulty: 0.15 },
        { type: 'choice', prompt: '나를 소개하는 말로 직접 살펴 알아낸 것은 어느 것인가요?', options: ['나는 용감해요.', '손등에 작은 흉터가 있어요.', '나는 언제나 착해요.'], answer: 1, difficulty: 0.15, explain: '손등의 흉터는 눈으로 보아 알 수 있지만 용감함·착함은 보아서 알기 어려워요.' },
        { type: 'mood', prompt: '짝을 인터뷰하고 나를 소개해 본 느낌은 어땠나요?' },
      ],
    },
    ws: {
      title: '나를 살펴 소개하기',
      items: [
        { type: 'table', prompt: '짝을 인터뷰해 직접 살펴 알아낸 것을 쓰세요.', columns: ['살핀 방법', '짝이 알아낸 것'], cells: [['눈으로 보기', ''], ['손으로 만지기', ''], ['귀로 듣기', '']] },
        fig('나를 소개하는 작품을 완성하세요. 나를 닮은 모양 두 개를 더 그려 넣으세요.', [pc('star', '노랑', 'm', 220, 160, 0), pc('circle', '주황', 'l', 300, 220, 0)], '나를 닮은 모양 더하기', '내 특징과 어울리는 모양이 더해진 작품'),
        { type: 'choice', prompt: '직접 살펴 알아낸 것에 ○ 하세요.', options: ['웃으면 보조개가 생겨요', '나는 용감해요', '친구들이 나를 좋아해요', '나는 노래를 잘할 거예요'], answer: '웃으면 보조개가 생겨요' },
        { type: 'short', prompt: '내가 직접 살펴 알아낸 내 모습 한 가지와 그것을 알아낸 방법을 쓰세요.' },
      ],
      easy: { note: '거울로 보거나 만져서 알 수 있으면 직접 살핀 것이에요. "착해요"처럼 볼 수 없는 말은 짐작이에요.', items: [
        { type: 'choice', prompt: '직접 살핀 것에 ○ 하세요.', options: ['눈썹이 짙은 갈색이에요', '나는 용감해요'], answer: '눈썹이 짙은 갈색이에요' },
        { type: 'table', prompt: '내 모습을 쓰세요.', columns: ['방법', '내 모습'], cells: [['눈으로 보기', ''], ['손으로 만지기', '']] },
        { type: 'draw', prompt: '나를 닮은 모양 하나를 그리세요.' },
      ] },
    },
    diff: {
      easy: '카드를 바구니에 넣으면 맞는지 바로 알려 주고, 색종이는 모양 네 가지·색 다섯 가지만 나와요.',
      base: '스스로 골라 담은 뒤 확인하고, 색종이에 검정·하양이 더해져요.',
      challenge: '소개 작품에 하트 같은 조각을 더 넣어 나의 여러 모습을 한 작품에 담아요.',
    },
    notes: '자주 보이는 어려움: ① 짐작("나는 용감해")을 직접 살핀 것으로 여긴다 → "어디서 보였어요?"로 근거를 묻는다. ② 한 모양만 쓰면 나를 나타낼 수 있다고 여긴다 → 서로 다른 모양이 섞인 작품을 견주어 보인다. ③ 짝 인터뷰에서 짝의 말을 바꿔 적는다 → 짝이 말한 낱말 그대로 적게 한다. 준비물: 모둠마다 작은 거울(없으면 휴대용 거울 앱 대신 유리창에 비친 모습을 써도 된다).',
  });

  // ───────────── 5차시 (핵심) ─────────────
  make(5, S1, {
    title: '찢어 붙인 가장자리와 오려 붙인 가장자리를 견주어 풍경 만들기',
    objective: '종이를 찢거나 오려 붙였을 때 가장자리가 어떻게 다르게 보이는지 말하고, 알맞은 방법으로 풍경의 한 부분을 나타낼 수 있다.',
    art: 'a child tearing white paper into soft cloud edges and cutting straight rooftops from brown paper on a table',
    scene: [
      { motif: 'sun', x: 410, y: 60, s: 0.8 }, { motif: 'cloud', x: 100, y: 52 }, { motif: 'cloud', x: 220, y: 78, s: 0.7 },
      { motif: 'mountain', x: 350, y: 200, s: 1 }, { motif: 'hills', y: 214 }, { motif: 'house', x: 100, y: 218 },
      { motif: 'text', x: 240, y: 142, text: '찢고 오려 붙여요', size: 22 },
    ],
    safety: ['가위는 날 끝을 아래로 향하게 들고, 자리에서 앉아서 쓰며, 친구에게 건넬 때는 손잡이를 먼저 줘요.'],
    intro: {
      teacher: '같은 하양 종이 두 장을 들고 한 장은 손으로 찢고 다른 한 장은 가위로 오려 칠판에 나란히 붙인다. "두 가장자리를 비교하면 어떻게 다른가요?" 찢은 쪽은 솜털처럼 거칠고 흐릿하고, 오린 쪽은 매끈하고 또렷하다는 말이 나오게 한다. "방법이 달라지면 같은 종이도 다른 느낌을 줘요. 풍경의 구름과 건물에는 어느 방법이 어울릴까요?" 어느 한 방법만 옳다고 여기는 생각을 짚는다. 시연 단추로 반원을 겹쳐 구름을 만드는 모습을 보여 준다.',
      student: '찢은 종이와 오린 종이의 가장자리를 비교해 어떻게 다른지 말해 봅시다.',
      demo: { tool: 'collage', options: { shapes: ['semi'], colors: ['하양'] }, sequence: [{ has: [{ shape: 'semi', color: '하양', min: 4 }], overlap: 3 }] },
    },
    acts: [
      mind('a1', '활동 1. 가장자리 모습에 알맞은 방법 잇기', 12,
        '"구름 가장자리는 흐릿하고 포근해 보여요. 손으로 찢을까요, 가위로 오릴까요?" 카드마다 가장자리 말(포근해요, 또렷해요, 삐죽삐죽해요)에 밑줄을 긋게 한다. 찢기는 부드럽고 거친 가장자리, 곧게 오리기는 또렷한 가장자리, 톱니로 오리기는 삐죽한 가장자리를 만든다고 기준을 세운다. "가위로 오리면 어떤 것이든 만들 수 있으니 찢기는 필요 없다"는 학생에게는 구름 가장자리를 가위로 매끈하게 오렸을 때 어떻게 달라 보이는지 칠판에 붙여 견주게 한다.',
        '풍경에서 나타내고 싶은 가장자리 모습에 알맞은 방법 카드를 이어요.',
        [
          matchItem({ prompt: '하늘 풍경의 가장자리 모습에 알맞은 방법 카드를 이어 보세요.', topic: '하늘 풍경', d: 0.2,
            slots: [['t1', '구름의 포근하고 흐릿한 가장자리'], ['t2', '건물의 또렷하고 곧은 가장자리'], ['t3', '풀밭의 삐죽삐죽한 가장자리']],
            cards: [['tear', '손으로 찢어 붙이기'], ['cut', '가위로 곧게 오려 붙이기'], ['zig', '가위로 톱니처럼 오려 붙이기']],
            match: { t1: 'tear', t2: 'cut', t3: 'zig' }, extra: ['fold', '접어서 세우기'],
            hint: '가장자리가 부드럽고 흐린지, 또렷하고 곧은지, 삐죽한지 말마다 따져요.' }),
          matchItem({ prompt: '바다 풍경의 가장자리 모습에 알맞은 방법 카드를 이어 보세요.', topic: '바다 풍경', d: 0.25,
            slots: [['s1', '파도 거품의 거칠고 번지는 가장자리'], ['s2', '배 돛의 반듯하고 또렷한 가장자리'], ['s3', '조개 껍데기의 톱니 같은 가장자리']],
            cards: [['tear', '손으로 찢어 붙이기'], ['cut', '가위로 곧게 오려 붙이기'], ['zig', '가위로 톱니처럼 오려 붙이기']],
            match: { s1: 'tear', s2: 'cut', s3: 'zig' }, extra: ['fold', '접어서 세우기'] }),
          matchItem({ prompt: '숲 풍경의 가장자리 모습에 알맞은 방법 카드를 이어 보세요.', topic: '숲 풍경', d: 0.3,
            slots: [['f1', '안개 낀 먼 산의 번지는 가장자리'], ['f2', '오두막 지붕의 곧은 가장자리'], ['f3', '소나무 가지의 뾰족뾰족한 가장자리']],
            cards: [['tear', '손으로 찢어 붙이기'], ['cut', '가위로 곧게 오려 붙이기'], ['zig', '가위로 톱니처럼 오려 붙이기']],
            match: { f1: 'tear', f2: 'cut', f3: 'zig' }, extra: ['fold', '접어서 세우기'],
            predict: { q: '한 가지 방법으로만 풍경 전체를 만들면 어떨까요?', options: ['모든 부분이 잘 나타나요', '나타내기 어려운 부분이 생겨요'], answer: 1 },
            conclude: '풍경의 부분마다 가장자리 모습이 달라서 찢기와 오리기를 골라 쓰면 더 잘 나타나요.' }),
        ]),
      col('a2', '활동 2. 찢은 듯 겹친 구름과 오려 붙인 건물 만들기', 13,
        '"찢은 가장자리 느낌을 내려면 작은 조각을 많이 겹쳐요. 오린 가장자리 느낌을 내려면 큰 면 하나를 또렷하게 붙여요." 구름은 반원을 여러 겹 겹치고, 건물은 큰 면 위에 창문을 올리게 한다. 건물 문항에서 창문을 건물 밖에 붙이는 학생에게는 "창문은 벽 위에 있지요?"라고 묻는다. 마지막 문항은 짝에게 어느 부분을 찢어 붙인 느낌으로 만들었는지 말한 뒤에만 점검을 표시하게 한다.',
        '구름은 작은 조각을 겹쳐 찢은 느낌으로, 건물은 큰 면을 또렷하게 붙여요.',
        ['semi', 'square', 'rect', 'triangle'], ['하양', '갈색', '노랑', '파랑'],
        [
          colItem({ prompt: '찢은 느낌의 구름을 만들어요. 하양 반원 다섯 개 이상을 서로 겹쳐 붙이고, 겹친 곳이 세 군데 이상 되게 해요.', d: 0.2,
            target: { has: [{ shape: 'semi', color: '하양', min: 5 }], overlap: 3 },
            ch: { prompt: '파란 하늘 위 구름을 만들어요. 하양 반원 일곱 개 이상을 겹쳐 붙이고, 큰 파랑 긴 네모 하늘 하나를 함께 붙여요.', target: { has: [{ shape: 'semi', color: '하양', min: 7 }, { shape: 'rect', color: '파랑', size: 'l', n: 1 }], overlap: 5 } } }),
          colItem({ prompt: '오려 붙인 건물을 만들어요. 큰 갈색 네모 하나 위에 작은 노랑 네모 창문 넷 이상을 겹쳐 붙여요.', d: 0.25,
            target: { has: [{ shape: 'square', color: '갈색', size: 'l', n: 1 }, { shape: 'square', color: '노랑', size: 's', min: 4 }], overlap: 4 } }),
          colItem({ prompt: '내가 찢은 느낌과 오린 느낌을 한 풍경에 나누어 담고 점검해요.', d: 0.1,
            target: { selfCheck: ['찢은 느낌으로 만들 부분을 정했어요', '오려 붙인 느낌으로 만들 부분을 정했어요', '짝에게 두 방법을 고른 까닭을 말했어요'], minPieces: 6 } }),
        ]),
    ],
    wrap: {
      teacher: '"구름과 건물을 왜 다른 방법으로 붙였나요?" 학생 작품에서 구름 쪽 겹침과 건물의 큰 면을 가리키며 짝에게 설명하게 한다. 출구 1번에서 "손으로 찢어 붙이기"를 건물에 이은 학생은 건물의 또렷하고 곧은 가장자리를 다시 보게 한다. 2번에서 "한 방법이면 충분하다"를 고른 학생이 많으면 다음 시간 첫머리에 같은 풍경을 한 방법으로만 만든 작품과 견주어 보인다.',
      exit: [
        { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '들판 풍경', slots: slotsOf([['g1', '민들레 씨앗의 번지는 가장자리'], ['g2', '울타리 기둥의 곧은 가장자리']]), cards: cards([['tear', '손으로 찢어 붙이기'], ['cut', '가위로 곧게 오려 붙이기'], ['zig', '가위로 톱니처럼 오려 붙이기']]) }, prompt: '들판 풍경의 가장자리 모습에 알맞은 방법 카드를 이어 보세요.', target: { match: { g1: 'tear', g2: 'cut' } }, difficulty: 0.15 },
        { type: 'choice', prompt: '"풍경은 한 가지 방법으로만 만들어야 해."라는 말에 대한 생각으로 알맞은 것은?', options: ['맞아요. 한 방법이 가장 좋아요.', '부분마다 어울리는 방법이 달라서 섞어 쓸 수 있어요.', '가위만 써야 해요.'], answer: 1, difficulty: 0.15, explain: '구름은 찢기, 건물은 오리기처럼 부분마다 어울리는 방법이 달랐어요.' },
        { type: 'mood', prompt: '오늘 종이를 찢고 오려 본 느낌은 어땠나요?' },
      ],
    },
    ws: {
      title: '찢기와 오리기',
      items: [
        { type: 'table', prompt: '가장자리 모습에 알맞은 방법을 쓰세요.', columns: ['풍경 속 모습', '알맞은 방법'], cells: [['구름의 포근한 가장자리', ''], ['건물의 곧은 가장자리', ''], ['풀의 삐죽한 가장자리', '']] },
        fig('구름이 더 포근해 보이도록 반원 두 개를 겹쳐 더 그리세요.', [pc('semi', '하양', 'm', 220, 200, 0), pc('semi', '하양', 'm', 280, 190, 0)], '반원을 겹쳐 구름 만들기', '반원이 서로 겹쳐 포근한 구름 모양이 된 그림'),
        { type: 'choice', prompt: '또렷하고 곧은 가장자리를 만들기에 알맞은 방법에 ○ 하세요.', options: ['손으로 찢기', '가위로 곧게 오리기', '손으로 구기기'], answer: '가위로 곧게 오리기' },
        { type: 'draw', prompt: '찢어 붙일 부분과 오려 붙일 부분이 있는 풍경을 간단히 그리세요.' },
      ],
      easy: { note: '포근하고 번지는 가장자리는 찢기, 또렷하고 곧은 가장자리는 오리기예요.', items: [
        { type: 'choice', prompt: '구름 가장자리에 알맞은 방법에 ○ 하세요.', options: ['손으로 찢기', '가위로 곧게 오리기'], answer: '손으로 찢기' },
        { type: 'table', prompt: '방법과 가장자리 모습을 이어 쓰세요.', columns: ['방법', '가장자리 모습'], cells: [['찢기', ''], ['오리기', '']] },
        { type: 'draw', prompt: '구름 하나를 그리세요.' },
      ] },
    },
    diff: {
      easy: '맞게 이은 카드에 초록 테두리가 생기고, 색종이는 모양 네 가지·색 네 가지만 나와요.',
      base: '스스로 이은 뒤 확인하고, 색종이에 별·동그라미와 검정이 더해져요.',
      challenge: '이을 수 없는 방법 카드가 섞여 있어요. 구름은 반원을 일곱 개 넘게 겹치고 하늘 면까지 함께 만들어요.',
    },
    notes: '자주 보이는 어려움: ① 오리기가 항상 더 좋다고 여긴다 → 구름을 매끈하게 오린 것과 찢은 것을 나란히 붙여 보인다. ② 찢을 때 종이를 구겨 버린다 → 손으로 결 따라 천천히 당기게 한다. ③ 건물 창문을 벽 밖에 붙인다 → 벽 위에 올린다고 말한다. 준비물: 하양·갈색 색종이, 가위, 풀(활동 2 전에 종이 찢기 시범을 보여 준다).',
  });

  // ───────────── 6차시 (연습) ─────────────
  make(6, S1, {
    title: '먼 산부터 가까운 꽃까지 붙이는 순서를 정해 겹쳐 붙이기',
    objective: '풍경에서 멀리 있는 것을 먼저, 가까이 있는 것을 나중에 겹쳐 붙이면 어떻게 보이는지 말하고, 순서를 정해 겹친 풍경을 나타낼 수 있다.',
    art: 'a child layering a blue paper mountain, a brown cottage and a small yellow sun on a landscape board',
    scene: [
      { motif: 'sun', x: 90, y: 60, s: 0.8 }, { motif: 'cloud', x: 300, y: 50 }, { motif: 'mountain', x: 360, y: 190, s: 1.2 },
      { motif: 'hills', y: 208 }, { motif: 'house', x: 120, y: 220, s: 1.1 }, { motif: 'flower', x: 250, y: 232, s: 1.4 },
      { motif: 'text', x: 240, y: 138, text: '뒤부터 앞으로 겹쳐요', size: 22 },
    ],
    intro: {
      teacher: '칠판에 파란 산 종이를 붙이고 그 위에 집 종이를 붙인 뒤, 같은 종이를 거꾸로(집 먼저, 산 나중) 붙인 것과 나란히 보여 준다. "어느 풍경이 더 자연스러운가요? 왜 그럴까요?" 가까운 것이 먼 것을 가려야 거리가 느껴진다는 말이 나오도록 이끈다. "붙이는 순서도 미술에서 정하는 방법이에요. 뒤에 있는 것부터 먼저 붙여요." 순서는 상관없다고 여기는 생각을 짚는다. 시연 단추로 큰 산 위에 집이 겹치는 모습을 보여 준다.',
      student: '산과 집을 두 가지 순서로 붙인 풍경을 보고 어느 쪽이 더 자연스러운지 말해 봅시다.',
      demo: { tool: 'collage', options: { shapes: ['triangle', 'square'], colors: ['파랑', '갈색'] }, sequence: [{ has: [{ shape: 'triangle', color: '파랑', size: 'l', n: 1 }, { shape: 'square', color: '갈색', size: 'm', n: 1 }], overlap: 1 }] },
    },
    acts: [
      mind('a1', '활동 1. 먼저 붙일 것과 나중에 붙일 것 나누기', 12,
        '"하늘과 먼 산은 풍경의 맨 뒤에 있어요. 맨 앞에 있는 것은 무엇일까요?" 카드마다 사물이 멀리 있는지 가까이 있는지 손으로 가리켜 보게 한다. 멀리 있는 것은 뒤에서 먼저 붙이고, 가까운 것은 앞에서 나중에 붙인다는 기준을 말해 준다. 가장 큰 것을 무조건 먼저 붙인다는 학생에게는 가까운 꽃이 먼 산보다 작아도 앞에 와야 한다고 짚는다.',
        '풍경 속 사물 카드를 읽고, 먼저 붙일 것과 나중에 붙일 것으로 나누어요.',
        [
          sortItem({ prompt: '학교 풍경에서 먼저 붙일 것과 나중에 붙일 것으로 나누어 보세요.', topic: '학교 풍경', d: 0.2,
            slots: [['back', '먼저 붙이기(뒤)'], ['front', '나중에 붙이기(앞)']],
            cards: [['a1', '하늘'], ['a2', '먼 산'], ['a3', '운동장 철봉'], ['a4', '앞에 선 화단 꽃'], ['a5', '멀리 보이는 아파트']],
            sort: { back: ['a1', 'a2', 'a5'], front: ['a3', 'a4'] }, extra: ['ax', '우리 학교 이름'],
            hint: '풍경에서 눈에서 멀리 있는 것인지 가까이 있는 것인지 따져요.' }),
          sortItem({ prompt: '바닷가 풍경에서 먼저 붙일 것과 나중에 붙일 것으로 나누어 보세요.', topic: '바닷가 풍경', d: 0.25,
            slots: [['back', '먼저 붙이기(뒤)'], ['front', '나중에 붙이기(앞)']],
            cards: [['b1', '수평선'], ['b2', '먼 바다 돛단배'], ['b3', '모래밭 소라 껍데기'], ['b4', '발 앞 조개'], ['b5', '하늘 구름']],
            sort: { back: ['b1', 'b2', 'b5'], front: ['b3', 'b4'] }, extra: ['bx', '바다는 짠물이에요'] }),
          sortItem({ prompt: '시장 풍경에서 먼저 붙일 것과 나중에 붙일 것으로 나누어 보세요.', topic: '시장 풍경', d: 0.3,
            slots: [['back', '먼저 붙이기(뒤)'], ['front', '나중에 붙이기(앞)']],
            cards: [['c1', '골목 끝 간판'], ['c2', '멀리 보이는 지붕'], ['c3', '가게 앞 과일 상자'], ['c4', '앞에 선 손수레']],
            sort: { back: ['c1', 'c2'], front: ['c3', 'c4'] }, extra: ['cx', '시장은 사고파는 곳이에요'],
            predict: { q: '가까운 것을 먼저 붙이고 먼 것을 위에 붙이면 어떻게 보일까요?', options: ['자연스러워요', '멀고 가까움이 거꾸로 보여요'], answer: 1 },
            conclude: '먼 것을 먼저, 가까운 것을 나중에 붙여야 겹침에서 거리감이 살아요.' }),
        ]),
      col('a2', '활동 2. 뒤에서 앞으로 순서를 정해 풍경 겹치기', 13,
        '"먼저 붙일 것부터 소리 내어 말해 볼까요?" 산 → 집 → 꽃 순서를 말로 먼저 정한 뒤 붙이게 한다. 겹침이 하나도 없이 흩어 놓은 학생에게는 "가까운 집이 산의 어디를 가리고 있나요?"라고 묻는다. 마지막 문항은 자기 풍경에서 가장 뒤에 붙인 것이 무엇인지 짝에게 말하고 점검을 표시하게 한다.',
        '뒤에 있는 것부터 붙이고, 앞에 있는 것은 위에 겹쳐 붙여요.',
        ['triangle', 'square', 'circle', 'leaf'], ['파랑', '갈색', '노랑', '빨강', '초록'],
        [
          colItem({ prompt: '산 마을 풍경을 만들어요. 큰 파랑 세모 산 위에 보통 갈색 네모 집 하나를 겹쳐 붙이고, 작은 노랑 동그라미 해를 하나 붙여요.', d: 0.2,
            target: { has: [{ shape: 'triangle', color: '파랑', size: 'l', n: 1 }, { shape: 'square', color: '갈색', size: 'm', n: 1 }, { shape: 'circle', color: '노랑', size: 's', n: 1 }], overlap: 1 },
            ch: { prompt: '꽃밭 마을 풍경을 만들어요. 큰 파랑 세모 산 위에 보통 갈색 네모 집을 겹치고, 그 위에 작은 빨강 동그라미 꽃을 셋 이상 겹쳐 붙여요.', target: { has: [{ shape: 'triangle', color: '파랑', size: 'l', n: 1 }, { shape: 'square', color: '갈색', size: 'm', n: 1 }, { shape: 'circle', color: '빨강', size: 's', min: 3 }], overlap: 4 } } }),
          colItem({ prompt: '숲길 풍경을 만들어요. 큰 초록 세모 나무 둘 위에 작은 노랑 동그라미 열매를 셋 이상 겹쳐 붙여요.', d: 0.25,
            target: { has: [{ shape: 'triangle', color: '초록', size: 'l', n: 2 }, { shape: 'circle', color: '노랑', size: 's', min: 3 }], overlap: 3 } }),
          colItem({ prompt: '내가 정한 순서대로 풍경을 겹쳐 붙이고 점검해요.', d: 0.1,
            target: { selfCheck: ['가장 먼 것부터 붙였어요', '가까운 것을 나중에 위에 겹쳤어요', '짝에게 가장 뒤에 붙인 것을 말했어요'], minPieces: 5 } }),
        ]),
    ],
    wrap: {
      teacher: '"내 풍경에서 가장 먼저 붙인 것은 무엇이고 가장 나중에 붙인 것은 무엇인가요?" 두 쌍의 작품에서 맨 앞 조각을 짚게 한다. 출구 1번에서 꽃을 먼저에 넣은 학생은 꽃이 산을 가리는지 산이 꽃을 가리는지 되묻는다. 2번에서 "순서는 상관없다"를 고른 학생에게는 활동 1의 거꾸로 붙인 풍경을 다시 보여 준다.',
      exit: [
        { type: 'tool', tool: 'mindmap', options: { topic: '공원 풍경', slots: slotsOf([['back', '먼저 붙이기(뒤)'], ['front', '나중에 붙이기(앞)']]), cards: cards([['e1', '먼 언덕'], ['e2', '발 앞 벤치'], ['e3', '하늘']]) }, prompt: '공원 풍경에서 먼저 붙일 것과 나중에 붙일 것으로 나누어 보세요.', target: { sort: { back: ['e1', 'e3'], front: ['e2'] } }, difficulty: 0.15 },
        { type: 'choice', prompt: '풍경에서 가장 먼저 붙여야 하는 것은 무엇인가요?', options: ['가장 앞에 있는 것', '가장 멀리 있는 것', '가장 작은 것'], answer: 1, difficulty: 0.15, explain: '멀리 있는 것을 먼저 붙이고 가까운 것을 위에 겹쳐야 거리가 느껴져요.' },
        { type: 'mood', prompt: '오늘 순서를 정해 붙여 본 느낌은 어땠나요?' },
      ],
    },
    ws: {
      title: '뒤에서 앞으로 겹치기',
      items: [
        { type: 'table', prompt: '내 풍경에서 사물을 붙인 순서를 쓰세요.', columns: ['순서', '붙인 것', '멀리·가까이'], cells: [['처음', '', ''], ['다음', '', ''], ['마지막', '', '']] },
        fig('집이 산 위에 겹치도록 집 하나를 그려 넣으세요.', [pc('triangle', '파랑', 'l', 280, 160, 0)], '산 위에 집 겹치기', '산 위에 겹쳐 그린 집'),
        { type: 'choice', prompt: '가장 나중에 붙일 것에 ○ 하세요.', options: ['하늘', '먼 산', '발 앞의 꽃', '수평선'], answer: '발 앞의 꽃' },
        { type: 'draw', prompt: '뒤에서 앞으로 순서를 정해 붙일 풍경을 간단히 그리세요.' },
      ],
      easy: { note: '눈에서 먼 것을 먼저, 가까운 것을 나중에 붙여요.', items: [
        { type: 'choice', prompt: '먼저 붙일 것에 ○ 하세요.', options: ['먼 산', '앞의 꽃'], answer: '먼 산' },
        { type: 'table', prompt: '붙이는 순서를 쓰세요.', columns: ['순서', '붙인 것'], cells: [['먼저', ''], ['나중에', '']] },
        { type: 'draw', prompt: '산과 집이 겹친 풍경을 그리세요.' },
      ] },
    },
    diff: {
      easy: '맞는 칸에 넣으면 초록 테두리가 생기고, 색종이는 모양 네 가지·색 다섯 가지만 나와요.',
      base: '스스로 나눈 뒤 확인하고, 색종이에 반원·별과 검정·하양이 더해져요.',
      challenge: '어느 칸에도 넣지 않는 카드가 섞여 있어요. 풍경에 꽃·열매 같은 작은 조각을 더 겹쳐요.',
    },
    notes: '자주 보이는 어려움: ① 붙이는 순서는 상관없다고 여긴다 → 거꾸로 붙인 풍경과 견주어 보인다. ② 가장 큰 것만 먼저 붙인다 → 거리가 기준임을 짚는다. ③ 겹치지 않고 흩어 놓는다 → 가까운 것이 먼 것의 어디를 가리는지 묻는다. 겹쳐 붙인 작품은 결과에 그대로 남으니 교사 화면에서 순서가 살아난 작품을 골라 정리 때 띄운다.',
  });

  // ───────────── 7차시 (확장) ─────────────
  make(7, S1, {
    title: '큰 조각과 작은 조각으로 가깝고 먼 느낌 만들기',
    objective: '같은 모양도 크게 붙이면 가깝게, 작게 붙이면 멀게 보인다는 것을 말하고, 크기를 달리해 거리감이 있는 풍경을 나타낼 수 있다.',
    art: 'a long road with one big tree near the viewer and many tiny trees shrinking toward a small mountain far away',
    scene: [
      { motif: 'sun', x: 412, y: 56, s: 0.7 }, { motif: 'cloud', x: 110, y: 54 }, { motif: 'mountain', x: 330, y: 190, s: 0.7 },
      { motif: 'hills', y: 212 }, { motif: 'tree', x: 90, y: 220, s: 1.6 }, { motif: 'tree', x: 260, y: 212, s: 0.5 },
      { motif: 'text', x: 240, y: 138, text: '크게, 작게, 멀리, 가까이', size: 22 },
    ],
    intro: {
      teacher: '교실 창가에 선 학생과 운동장 끝에 선 학생을 비교하며 "운동장 끝의 친구는 어떻게 보이나요?"라고 묻는다. 작게 보인다는 말이 나오면, 같은 사람인데 왜 작아 보이는지 짝과 이야기하게 한다. "멀리 있는 것은 작게 보이고 가까이 있는 것은 크게 보여요. 그림에서도 크기를 다르게 붙이면 거리가 생겨요." 멀리 있는 사람이 실제로 작은 것이라는 생각을 짚는다. 시연 단추로 큰 세모와 작은 세모가 함께 놓이는 모습을 보여 준다.',
      student: '운동장 끝에 선 친구는 왜 작게 보이는지 짝과 이야기해 봅시다.',
      demo: { tool: 'collage', options: { shapes: ['triangle'], colors: ['초록'] }, sequence: [{ has: [{ shape: 'triangle', color: '초록', size: 'l', n: 1 }, { shape: 'triangle', color: '초록', size: 's', min: 3 }] }] },
    },
    acts: [
      pick0('a1', '활동 1. 멀게 보이게 하는 방법만 골라 담기', 12,
        '"이 방법을 쓰면 풍경 속 나무가 멀어 보일까요, 가까워 보일까요?" 카드를 소리 내어 읽고, 작게 붙이기·종이 위쪽에 붙이기·옅은 색을 쓰기가 멀게 보이는 방법이라고 기준을 세운다. "가까이 있는 것도 작게 그리면 더 귀엽다"고 말하는 학생에게는 가까운 곳에 작게 붙인 나무와 크게 붙인 나무를 견주어 보게 한다.',
        '카드를 읽고, 풍경 속 사물이 멀게 보이게 하는 방법만 바구니에 담아요.',
        [
          pickItem({ prompt: '길가 나무가 멀리 있는 것처럼 보이게 하는 방법만 담아 보세요.', topic: '멀게 보이게', d: 0.2,
            cards: [['p1', '나무를 작게 붙여요'], ['p2', '나무를 종이 맨 아래에 붙여요'], ['p3', '나무를 종이 위쪽에 붙여요'], ['p4', '나무를 아주 크게 붙여요']], pick: ['p1', 'p3'],
            hint: '멀리 있는 것은 작고 위쪽에 보이는지 운동장 끝의 친구를 떠올려요.' }),
          pickItem({ prompt: '바닷가 돛단배가 멀리 있는 것처럼 보이게 하는 방법만 담아 보세요.', topic: '멀게 보이게', d: 0.25,
            cards: [['q1', '돛단배를 아주 작게 붙여요'], ['q2', '돛단배를 수평선 가까이 붙여요'], ['q3', '돛단배를 화면 가득 크게 붙여요'], ['q4', '돛단배를 모래밭 앞에 붙여요']], pick: ['q1', 'q2'] }),
          pickItem({ prompt: '학교 건물이 멀리 있는 것처럼 보이게 하는 방법만 담아 보세요.', topic: '멀게 보이게', d: 0.3,
            cards: [['r1', '건물을 작게 붙여요'], ['r2', '건물 앞에 큰 나무를 붙여요'], ['r3', '건물을 종이 위쪽에 붙여요'], ['r4', '건물 위에 큰 해를 붙여요']], pick: ['r1', 'r3'],
            predict: { q: '큰 조각을 앞에, 작은 조각을 뒤에 두면 풍경이 어떻게 보일까요?', options: ['평평해 보여요', '깊어 보여요'], answer: 1 },
            conclude: '크기를 다르게 붙이면 가까운 것과 먼 것이 생겨 풍경이 깊어 보여요.' }),
        ]),
      col('a2', '활동 2. 큰 나무와 작은 나무로 거리감 만들기', 13,
        '"가장 가까운 나무를 크게, 멀리 있는 나무는 작게 붙여 볼까요?" 큰 조각 하나를 먼저 붙이고 작은 조각을 여러 개 위쪽에 붙이게 한다. 크기를 모두 같게 붙이는 학생에게는 "운동장 끝의 친구와 가까운 친구가 같은 크기로 보였나요?"라고 묻는다. 마지막 문항은 짝에게 어느 쪽이 멀어 보이는지 말하고 점검을 표시하게 한다.',
        '가까운 것은 큰 조각으로, 먼 것은 작은 조각으로 붙여요.',
        ['triangle', 'semi', 'circle'], ['초록', '검정', '노랑'],
        [
          colItem({ prompt: '길가 나무를 만들어요. 가까운 큰 초록 세모 하나와 먼 작은 초록 세모 셋 이상을 붙여요.', d: 0.2,
            target: { has: [{ shape: 'triangle', color: '초록', size: 'l', n: 1 }, { shape: 'triangle', color: '초록', size: 's', min: 3 }] },
            ch: { prompt: '길 끝까지 이어진 나무를 만들어요. 큰 초록 세모 하나, 보통 초록 세모 둘 이상, 작은 초록 세모 셋 이상을 크기별로 붙여요.', target: { has: [{ shape: 'triangle', color: '초록', size: 'l', n: 1 }, { shape: 'triangle', color: '초록', size: 'm', min: 2 }, { shape: 'triangle', color: '초록', size: 's', min: 3 }] } } }),
          colItem({ prompt: '하늘을 나는 새 떼를 만들어요. 큰 검정 반원 새 하나와 작은 검정 반원 새 넷 이상을 붙여요.', d: 0.25,
            target: { has: [{ shape: 'semi', color: '검정', size: 'l', n: 1 }, { shape: 'semi', color: '검정', size: 's', min: 4 }] } }),
          colItem({ prompt: '가까운 것과 먼 것이 모두 있는 풍경을 크기로 나타내고 점검해요.', d: 0.1,
            target: { selfCheck: ['가까운 것을 크게 붙였어요', '먼 것을 작게 붙였어요', '짝에게 어느 쪽이 더 멀어 보이는지 말했어요'], minPieces: 5 } }),
        ]),
    ],
    wrap: {
      teacher: '"내 풍경에서 가장 멀리 있는 것은 무엇이고, 어떻게 멀어 보이게 했나요?" 두 쌍의 작품을 띄워 크기 차이를 가리키게 한다. 출구 1번에서 "아주 크게 붙여요"를 담은 학생은 운동장 끝의 친구가 큰지 작은지 되묻는다. 2번에서 "멀리 있는 것도 크게 그려야 한다"를 고른 학생이 많으면 다음 시간 첫머리에 큰 조각만 있는 풍경과 견주어 보인다.',
      exit: [
        { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '멀게 보이게', cards: cards([['e1', '산을 종이 위쪽에 작게 붙여요'], ['e2', '산을 종이 앞에 크게 붙여요'], ['e3', '산을 옅고 작게 붙여요'], ['e4', '산을 가장 먼저 크게 붙여요']]) }, prompt: '산이 멀리 있는 것처럼 보이게 하는 방법만 담아 보세요.', target: { pick: ['e1', 'e3'] }, difficulty: 0.15 },
        { type: 'choice', prompt: '멀리 있는 것을 그림에서 어떻게 나타내면 좋을까요?', options: ['작게 나타내요.', '아주 크게 나타내요.', '가장 앞에 붙여요.'], answer: 0, difficulty: 0.15, explain: '멀리 있는 것은 작게 보이므로 작게 나타내면 거리가 느껴져요.' },
        { type: 'mood', prompt: '오늘 크기로 거리를 만들어 본 느낌은 어땠나요?' },
      ],
    },
    ws: {
      title: '크기로 거리감 만들기',
      items: [
        { type: 'table', prompt: '풍경 속 사물을 가깝게 또는 멀게 보이게 하는 방법을 쓰세요.', columns: ['사물', '가깝게/멀게', '붙이는 크기'], cells: [['앞의 나무', '', ''], ['먼 산', '', ''], ['', '', '']] },
        fig('큰 나무 뒤에 작은 나무를 두 개 더 그려 거리감을 만드세요.', [pc('triangle', '초록', 'l', 220, 210, 0)], '큰 나무 뒤 작은 나무 더하기', '큰 나무 뒤에 작은 나무가 위쪽에 놓인 풍경'),
        { type: 'choice', prompt: '멀게 보이게 하는 것에 ○ 하세요.', options: ['작게 붙이기', '크게 붙이기', '맨 앞에 붙이기'], answer: '작게 붙이기' },
        { type: 'draw', prompt: '가까운 것과 먼 것이 모두 있는 풍경을 그리세요.' },
      ],
      easy: { note: '작은 것은 멀리, 큰 것은 가까이 있어 보여요.', items: [
        { type: 'choice', prompt: '멀리 있어 보이는 것에 ○ 하세요.', options: ['작은 나무', '큰 나무'], answer: '작은 나무' },
        { type: 'table', prompt: '크기와 거리를 이어 쓰세요.', columns: ['크기', '거리'], cells: [['큰 것', ''], ['작은 것', '']] },
        { type: 'draw', prompt: '큰 나무와 작은 나무를 그리세요.' },
      ] },
    },
    diff: {
      easy: '맞는 카드를 담으면 초록 테두리가 생기고, 색종이는 모양 세 가지·색 세 가지만 나와요.',
      base: '스스로 골라 담은 뒤 확인하고, 색종이에 별·네모와 하양이 더해져요.',
      challenge: '나무를 큰 것·보통·작은 것 세 크기로 나누어 길 끝까지 이어 붙여요.',
    },
    notes: '자주 보이는 어려움: ① 멀리 있는 것이 실제로 작다고 여긴다 → 운동장 끝의 친구 사례로 보이는 크기가 다름을 보인다. ② 크기를 모두 같게 붙인다 → 큰 조각 하나만 먼저 붙이게 한다. ③ 작은 조각을 아래쪽에 붙인다 → 멀리 있는 것은 위쪽에 붙인다고 짚는다.',
  });

  // ───────────── 8차시 (핵심) ─────────────
  make(8, S1, {
    title: '내 작품을 무엇을·어떻게·왜로 나누어 설명하기',
    objective: '내 작품을 무엇을 나타냈는지, 어떤 매체와 방법을 썼는지, 왜 그렇게 했는지로 나누어 설명할 수 있다.',
    art: 'a child pointing at a small paper-cut umbrella artwork while two classmates listen with speech bubbles',
    scene: [
      { motif: 'cloud', x: 120, y: 54 }, { motif: 'cloud', x: 330, y: 62, s: 0.8 }, { motif: 'hills', y: 210 },
      { motif: 'flower', x: 130, y: 224, s: 1.2 }, { motif: 'flower', x: 350, y: 224, color: 'buttercup' }, { motif: 'bird', x: 250, y: 90 },
      { motif: 'text', x: 240, y: 142, text: '무엇을, 어떻게, 왜', size: 22 },
    ],
    intro: {
      teacher: '교사가 미리 만든 작품(색종이 우산) 하나를 들고 "이 작품에 대해 한마디로 설명해 볼까요?" 한마디로는 어렵다는 말이 나오면 "무엇을 나타냈는지, 어떻게 만들었는지, 왜 그렇게 했는지 세 가지로 나누면 쉬워져요."라고 연다. 작품 설명이 "예뻐요"에서 멈추는 오개념을 짚으며, 어떻게(매체·방법)와 왜(까닭)가 빠지면 설명이 부족하다고 말한다. 시연 단추로 우산 작품이 만들어지는 모습을 보여 준다.',
      student: '교사가 든 작품을 보고, 무엇을 나타냈는지 한 문장으로 말해 봅시다.',
      demo: { tool: 'collage', options: { shapes: ['semi', 'circle'], colors: ['파랑', '하양'] }, sequence: [{ has: [{ shape: 'semi', color: '파랑', size: 'l', n: 1 }, { shape: 'circle', color: '하양', size: 's', min: 3 }], overlap: 3 }] },
    },
    acts: [
      mind('a1', '활동 1. 설명 문장을 무엇을·어떻게·왜로 나누기', 9,
        '"이 문장은 무엇을 나타냈는지, 어떻게 만들었는지, 왜 그렇게 했는지 가운데 어느 것에 답하나요?" 문장 끝말(~를 나타냈어요, ~로 붙였어요, ~해서)을 찾게 한다. 무엇을은 주제, 어떻게는 쓴 조각과 방법, 왜는 까닭이라고 기준을 말해 준다. 어떻게 칸에 느낌 문장을 넣는 학생에게는 "만든 방법을 말해 주나요, 마음을 말해 주나요?"라고 묻는다.',
        '작품 설명 문장을 읽고, 무엇을·어떻게·왜 가운데 어느 것인지 칸에 넣어요.',
        [
          sortItem({ prompt: '비 오는 날 작품을 설명한 문장을 세 칸에 나누어 보세요.', topic: '비 오는 날 작품', d: 0.2,
            slots: [['what', '무엇을'], ['how', '어떻게'], ['why', '왜']],
            cards: [['a1', '우산을 쓴 사람을 나타냈어요'], ['a2', '파란 반원 위에 하양 동그라미를 겹쳐 붙였어요'], ['a3', '비 오는 날의 차분함을 담고 싶었어요'], ['a4', '빗방울 소리가 들리는 것 같아서 작은 조각을 많이 썼어요']],
            sort: { what: ['a1'], how: ['a2'], why: ['a3', 'a4'] }, extra: ['ax', '비는 하늘에서 내려요'],
            hint: '문장이 주제를 말하는지, 만든 방법을 말하는지, 까닭을 말하는지 끝말을 보고 따져요.' }),
          sortItem({ prompt: '내 신발 작품을 설명한 문장을 세 칸에 나누어 보세요.', topic: '신발 작품', d: 0.25,
            slots: [['what', '무엇을'], ['how', '어떻게'], ['why', '왜']],
            cards: [['b1', '닳은 운동화 한 켤레를 나타냈어요'], ['b2', '갈색 큰 면을 먼저 붙이고 작은 면으로 끈을 겹쳤어요'], ['b3', '오래 신은 신발이 정이 들어서 골랐어요'], ['b4', '작은 면을 겹쳐야 끈이 또렷해 보여서 그렇게 했어요']],
            sort: { what: ['b1'], how: ['b2'], why: ['b3', 'b4'] }, extra: ['bx', '신발은 가게에서 팔아요'] }),
          sortItem({ prompt: '내 책상 위 작품을 설명한 문장을 세 칸에 나누어 보세요.', topic: '책상 작품', d: 0.3,
            slots: [['what', '무엇을'], ['how', '어떻게'], ['why', '왜']],
            cards: [['c1', '필통과 지우개가 있는 책상 위를 나타냈어요'], ['c2', '큰 네모로 책상을 깔고 그 위에 작은 면을 올렸어요'], ['c3', '매일 쓰는 물건이 소중해서 이 장면을 골랐어요'], ['c4', '손전등 빛이 닿은 곳을 밝은 색으로 해서 그림자를 더했어요']],
            sort: { what: ['c1'], how: ['c2', 'c4'], why: ['c3'] }, extra: ['cx', '책상은 나무로 만들어요'],
            predict: { q: '"예뻐요"만으로 작품을 설명하면 충분할까요?', options: ['충분해요', '무엇을·어떻게·왜가 빠져서 부족해요'], answer: 1 },
            conclude: '무엇을·어떻게·왜를 함께 말하면 듣는 사람이 내 작품을 더 잘 알 수 있어요.' }),
        ]),
      col('a2', '활동 2. 설명할 작품 만들기', 9,
        '"설명할 거리가 있는 작품을 만들어 볼까요? 무엇을 나타내고 어떤 조각을 쓸지 먼저 정해요." 우산·꽃 작품은 만들고 나서 무엇을·어떻게 두 칸을 말로 채워 보게 한다. 꽃의 꽃잎을 겹치지 않고 흩뜨리는 학생에게는 "꽃잎이 가운데 둘레에 모여야 꽃으로 보이지요?"라고 묻는다. 마지막 문항은 무엇을·어떻게·왜를 짝에게 차례로 말한 뒤에만 점검을 표시하게 한다.',
        '설명하기 쉬운 작품을 만들어요. 무엇을 나타낼지 먼저 정하고 조각을 붙여요.',
        ['semi', 'circle', 'heart'], ['파랑', '하양', '노랑', '분홍'],
        [
          colItem({ prompt: '우산 작품을 만들어요. 큰 파랑 반원 우산 하나 위에 작은 하양 동그라미 빗방울을 넷 이상 겹쳐 붙여요.', d: 0.2,
            target: { has: [{ shape: 'semi', color: '파랑', size: 'l', n: 1 }, { shape: 'circle', color: '하양', size: 's', min: 4 }], overlap: 4 },
            ch: { prompt: '우산 둘 작품을 만들어요. 큰 파랑 반원 우산 하나, 작은 파랑 반원 우산 하나, 작은 하양 동그라미 빗방울 여섯 이상을 겹쳐 붙여요.', target: { has: [{ shape: 'semi', color: '파랑', size: 'l', n: 1 }, { shape: 'semi', color: '파랑', size: 's', n: 1 }, { shape: 'circle', color: '하양', size: 's', min: 6 }], overlap: 6 } } }),
          colItem({ prompt: '꽃 작품을 만들어요. 큰 노랑 동그라미 한 개 둘레에 보통 분홍 하트 꽃잎을 다섯 장 이상 붙여요.', d: 0.25,
            target: { has: [{ shape: 'circle', color: '노랑', size: 'l', n: 1 }, { shape: 'heart', color: '분홍', size: 'm', min: 5 }] } }),
          colItem({ prompt: '내 작품을 만들고 무엇을·어떻게·왜로 나누어 설명한 뒤 점검해요.', d: 0.1,
            target: { selfCheck: ['무엇을 나타냈는지 말했어요', '어떤 조각과 방법을 썼는지 말했어요', '왜 그렇게 했는지 까닭을 말했어요'], minPieces: 4 } }),
        ]),
      pair('a3', '활동 3. 짝에게 작품 설명하고 질문 듣기', 7,
        '"설명하는 사람은 무엇을·어떻게·왜 순서로 말하고, 듣는 사람은 더 알고 싶은 것을 하나 물어요." 설명자가 "예뻐요"에서 멈추면 "어떻게 만들었는지 한 번 더 말해 줄래요?"라고 되묻게 한다. 듣는 학생은 질문을 활동지 1번에 한 줄로 적는다. 질문을 비판으로 받아들이는 학생에게는 질문은 더 알고 싶다는 뜻이라고 말한다.',
        '짝과 번갈아 작품을 설명하고, 듣는 사람은 궁금한 점을 질문 칸에 적어요.',
        '작품 설명', [['what', '무엇을'], ['how', '어떻게'], ['why', '왜']],
        [
          ['내 작품을 무엇을·어떻게·왜 순서로 짝에게 설명한 뒤 "다 했어요"를 누르세요.', [['q1', '주제'], ['q2', '방법'], ['q3', '까닭']]],
          ['짝의 설명을 듣고 더 알고 싶은 점을 질문으로 활동지 1번에 적은 뒤 "다 했어요"를 누르세요.', [['q1', '궁금한 점']]],
          ['역할을 바꾸어 같은 순서로 한 번 더 설명하고 질문을 주고받은 뒤 "다 했어요"를 누르세요.', [['q1', '바뀐 점'], ['q2', '더하고 싶은 점']]],
        ]),
    ],
    wrap: {
      teacher: '"짝의 설명에서 무엇을·어떻게·왜 가운데 가장 잘 알려 준 것은 어느 것이었나요?" 두 학생이 설명 한 부분씩만 다시 말하게 한다. 출구 1번에서 "빗방울 소리가 들리는 것 같아서"를 어떻게 칸에 넣은 학생은 방법을 말하는지 까닭을 말하는지 되묻는다. 2번에서 "예뻐요면 충분하다"를 고른 학생에게는 활동 1에서 부족했던 설명을 떠올리게 한다.',
      exit: [
        { type: 'tool', tool: 'mindmap', options: { topic: '꽃 작품', slots: slotsOf([['what', '무엇을'], ['how', '어떻게'], ['why', '왜']]), cards: cards([['e1', '꽃 한 송이를 나타냈어요'], ['e2', '노랑 동그라미 둘레에 분홍 하트를 붙였어요'], ['e3', '봄 꽃밭의 밝은 기분을 담고 싶었어요']]) }, prompt: '꽃 작품을 설명한 문장을 세 칸에 나누어 보세요.', target: { sort: { what: ['e1'], how: ['e2'], why: ['e3'] } }, difficulty: 0.15 },
        { type: 'choice', prompt: '내 작품 설명에 꼭 들어가면 좋은 것은 무엇인가요?', options: ['무엇을·어떻게·왜', '값이 얼마인지', '누가 더 잘 만들었는지'], answer: 0, difficulty: 0.15, explain: '무엇을·어떻게·왜를 말하면 듣는 사람이 내 작품을 더 잘 알 수 있어요.' },
        { type: 'mood', prompt: '오늘 작품을 설명해 본 느낌은 어땠나요?' },
      ],
    },
    ws: {
      title: '내 작품 설명하기',
      items: [
        { type: 'table', prompt: '내 작품을 설명하는 말을 칸마다 쓰세요.', columns: ['설명 칸', '내 작품 설명'], cells: [['무엇을', ''], ['어떻게', ''], ['왜', '']] },
        fig('우산 작품에 빗방울 조각을 두 개 더 그려 넣으세요.', [pc('semi', '파랑', 'l', 280, 160, 0), pc('circle', '하양', 's', 240, 200, 0)], '빗방울 조각 더하기', '우산 아래나 위에 빗방울이 더해진 그림'),
        { type: 'choice', prompt: '"파란 반원 위에 하양 동그라미를 겹쳐 붙였어요."는 어느 칸의 설명인가요?', options: ['무엇을', '어떻게', '왜'], answer: '어떻게' },
        { type: 'short', prompt: '친구 작품을 보고 더 알고 싶은 점을 질문으로 한 줄 쓰세요.' },
      ],
      easy: { note: '주제는 무엇을, 만든 방법은 어떻게, 까닭은 왜예요.', items: [
        { type: 'choice', prompt: '"비 오는 날의 차분함을 담고 싶었어요."는 어느 칸일까요?', options: ['어떻게', '왜'], answer: '왜' },
        { type: 'table', prompt: '내 작품을 설명하세요.', columns: ['설명 칸', '내 작품 설명'], cells: [['무엇을', ''], ['어떻게', '']] },
        { type: 'draw', prompt: '설명하고 싶은 작품을 그리세요.' },
      ] },
    },
    diff: {
      easy: '맞는 칸에 넣으면 초록 테두리가 생기고, 색종이는 모양 세 가지·색 네 가지만 나와요.',
      base: '스스로 나눈 뒤 확인하고, 색종이에 네모·별과 검정이 더해져요.',
      challenge: '칸에 넣지 않는 카드가 하나 섞여 있어요. 작품은 우산 둘과 빗방울 여섯 이상으로 설명할 거리를 더 많이 만들어요.',
    },
    notes: '자주 보이는 어려움: ① "예뻐요"에서 설명을 멈춘다 → 어떻게와 왜를 말하게 한다. ② 어떻게 칸에 마음(까닭)을 넣는다 → 방법과 까닭을 가르는 질문을 한다. ③ 짝의 질문을 비판으로 받아들인다 → 질문은 더 알고 싶다는 뜻이라고 말한다. 작품은 결과에 그대로 남으니 교사 화면에서 설명하기 좋은 작품을 골라 정리 때 띄운다.',
  });

  // ───────────── 9차시 (연습) ─────────────
  make(9, S1, {
    title: '친구 작품에 칭찬·질문·제안을 나누어 말하기',
    objective: '친구 작품에 대한 의견을 칭찬·질문·제안으로 나누어 말하고, 받은 제안을 반영해 조각을 더해 고칠 수 있다.',
    art: 'three children placing small sticky notes of praise, question and suggestion next to a paper-cut moon artwork on a board',
    scene: [
      { motif: 'moon', x: 410, y: 58, s: 0.8 }, { motif: 'star', x: 330, y: 70, s: 0.5 }, { motif: 'hills', y: 210 },
      { motif: 'house', x: 100, y: 216 }, { motif: 'tree', x: 380, y: 218, s: 1.1 }, { motif: 'cloud', x: 160, y: 56 },
      { motif: 'text', x: 240, y: 140, text: '칭찬, 질문, 제안', size: 22 },
    ],
    intro: {
      teacher: '칠판에 작품 사진 한 장을 붙이고 학생에게 "이 작품을 본 느낌을 친구에게 말해 준다면 어떻게 말할래요?"라고 묻는다. "별로예요"처럼 근거 없는 말이 나오면 "그 말을 들은 친구는 무엇을 고쳐야 할까요?"라고 되묻는다. "의견은 세 가지 방법으로 말할 수 있어요. 잘한 점을 말하는 칭찬, 궁금한 것을 묻는 질문, 이렇게 하면 어떨까를 말하는 제안이에요." 비판은 모두 나쁘다는 생각을 짚는다. 시연 단추로 작품에 조각이 더해지는 모습을 보여 준다.',
      student: '작품 사진을 보고 느낀 점을 친구에게 어떻게 말할지 한 문장으로 말해 봅시다.',
      demo: { tool: 'collage', options: { shapes: ['square', 'circle'], colors: ['하양', '파랑'] }, sequence: [{ has: [{ shape: 'square', color: '하양', size: 'l', n: 1 }, { shape: 'circle', color: '파랑', size: 's', min: 3 }], overlap: 3 }] },
    },
    acts: [
      mind('a1', '활동 1. 의견을 칭찬·질문·제안으로 나누기', 12,
        '"이 말은 잘한 점을 말하는 걸까요, 궁금한 걸 묻는 걸까요, 고치자는 걸까요?" 문장 끝말(~좋았어요, ~했나요?, ~하면 어때요?)에 밑줄을 긋게 한다. 칭찬은 잘한 점과 그 까닭을 함께, 질문은 궁금한 점을, 제안은 어떻게 고치면 좋을지를 말한다고 기준을 세운다. "좋아요"만 쓴 학생에게는 무엇이 어떻게 좋았는지 한 가지만 더 붙이게 한다.',
        '친구 작품에 대한 말을 읽고, 칭찬·질문·제안 가운데 어느 것인지 칸에 넣어요.',
        [
          sortItem({ prompt: '달 그림 작품에 대한 말을 칭찬·질문·제안으로 나누어 보세요.', topic: '달 그림 작품', d: 0.2,
            slots: ['칭찬', '질문', '제안'],
            cards: [['a1', '노랑 달이 어두운 하늘에서 또렷하게 보여서 좋았어요'], ['a2', '별은 어떤 조각으로 붙였나요?'], ['a3', '달 둘레에 작은 별을 더하면 어때요?'], ['a4', '큰 조각을 먼저 붙인 순서가 자연스러웠어요']],
            sort: { 칭찬: ['a1', 'a4'], 질문: ['a2'], 제안: ['a3'] }, extra: ['ax', '그림이 별로예요'],
            hint: '문장 끝이 잘한 점을 말하는지, 묻는지, 고치자고 하는지 따져요.' }),
          sortItem({ prompt: '물고기 그림 작품에 대한 말을 칭찬·질문·제안으로 나누어 보세요.', topic: '물고기 그림 작품', d: 0.25,
            slots: ['칭찬', '질문', '제안'],
            cards: [['b1', '비늘을 반원으로 겹쳐서 진짜 비늘 같아요'], ['b2', '왜 하늘색을 가장자리에 썼나요?'], ['b3', '꼬리를 더 크게 붙이면 어떨까요?'], ['b4', '큰 몸통 위에 작은 조각이 올라가 있어서 좋았어요']],
            sort: { 칭찬: ['b1', 'b4'], 질문: ['b2'], 제안: ['b3'] }, extra: ['bx', '물고기는 싫어요'] }),
          sortItem({ prompt: '나무 그림 작품에 대한 말을 칭찬·질문·제안으로 나누어 보세요.', topic: '나무 그림 작품', d: 0.3,
            slots: ['칭찬', '질문', '제안'],
            cards: [['c1', '큰 나무와 작은 나무를 섞어 거리가 느껴져서 좋았어요'], ['c2', '구름은 왜 한쪽에만 붙였나요?'], ['c3', '나무 위쪽에 새 한 마리를 더하면 어때요?'], ['c4', '열매를 노랑으로 해서 눈에 잘 띄었어요']],
            sort: { 칭찬: ['c1', 'c4'], 질문: ['c2'], 제안: ['c3'] }, extra: ['cx', '나무는 누구나 알아요'],
            predict: { q: '"별로예요"라는 말은 친구가 작품을 고치는 데 도움이 될까요?', options: ['도움이 돼요', '무엇을 고칠지 몰라서 도움이 안 돼요'], answer: 1 },
            conclude: '칭찬·질문·제안으로 근거를 대어 말하면 친구가 작품을 고치기 쉬워요.' }),
        ]),
      col('a2', '활동 2. 받은 제안을 반영해 조각 더하기', 13,
        '"친구가 배경이 비어 보인다고 제안했어요. 어떤 조각을 어디에 더하면 좋을까요?" 제안이 가리키는 빈 곳을 먼저 손으로 짚게 한다. 제안을 반영하다 원래 작품을 모두 덮어 버리는 학생에게는 더하는 것과 바꾸는 것이 다르다고 말한다. 마지막 문항은 받은 제안을 말한 뒤에만 점검을 표시하게 한다.',
        '친구의 제안을 읽고, 그 제안에 맞게 조각을 더해 작품을 고쳐요.',
        ['square', 'circle', 'star'], ['하양', '파랑', '주황'],
        [
          colItem({ prompt: '"배경이 비어 보여요"라는 제안을 반영해요. 큰 하양 네모 배경 하나 위에 작은 파랑 동그라미 구름을 셋 이상 겹쳐 붙여요.', d: 0.2,
            target: { has: [{ shape: 'square', color: '하양', size: 'l', n: 1 }, { shape: 'circle', color: '파랑', size: 's', min: 3 }], overlap: 3 },
            ch: { prompt: '"배경도 주인공도 모두 비어 보여요"라는 제안을 반영해요. 큰 하양 네모 배경 하나에 작은 파랑 동그라미 다섯 이상과 큰 주황 별 하나를 겹쳐 붙여요.', target: { has: [{ shape: 'square', color: '하양', size: 'l', n: 1 }, { shape: 'circle', color: '파랑', size: 's', min: 5 }, { shape: 'star', color: '주황', size: 'l', n: 1 }], overlap: 6 } } }),
          colItem({ prompt: '"주인공이 눈에 안 띄어요"라는 제안을 반영해요. 큰 주황 별 하나를 가운데에 붙이고 작은 하양 별 넷 이상을 둘레에 붙여요.', d: 0.25,
            target: { has: [{ shape: 'star', color: '주황', size: 'l', n: 1 }, { shape: 'star', color: '하양', size: 's', min: 4 }] } }),
          colItem({ prompt: '친구에게 받은 제안 하나를 골라 내 작품에 반영하고 점검해요.', d: 0.1,
            target: { selfCheck: ['친구의 제안 하나를 정확히 옮겨 말했어요', '그 제안에 맞게 조각을 더했어요', '고친 곳을 짝에게 보여 주었어요'], minPieces: 4 } }),
        ]),
    ],
    wrap: {
      teacher: '"받은 제안 가운데 내 작품에 가장 도움이 된 것은 무엇이었나요?" 두 학생이 고친 곳을 직접 가리키게 한다. 출구 1번에서 "그림이 별로예요"를 칭찬에 넣은 학생은 무엇이 어떻게 좋았는지 말했는지 되묻는다. 2번에서 "의견은 말하지 않는 게 좋다"를 고른 학생에게는 활동 2에서 제안을 받아 더 좋아진 작품을 떠올리게 한다.',
      exit: [
        { type: 'tool', tool: 'mindmap', options: { topic: '꽃 그림 작품', slots: ['칭찬', '질문', '제안'], cards: cards([['e1', '꽃잎을 겹쳐 붙인 곳이 포근해서 좋았어요'], ['e2', '줄기는 왜 구부렸나요?'], ['e3', '꽃 옆에 나비를 더하면 어때요?']]) }, prompt: '꽃 그림 작품에 대한 말을 칭찬·질문·제안으로 나누어 보세요.', target: { sort: { 칭찬: ['e1'], 질문: ['e2'], 제안: ['e3'] } }, difficulty: 0.15 },
        { type: 'choice', prompt: '친구 작품에 의견을 말할 때 알맞은 것은 무엇인가요?', options: ['별로예요.', '큰 조각이 또렷해서 좋았어요. 작은 별을 더하면 어때요?', '내가 만든 게 더 나아요.'], answer: 1, difficulty: 0.15, explain: '잘한 점과 이렇게 하면 어떨까를 근거와 함께 말하면 도움이 돼요.' },
        { type: 'mood', prompt: '오늘 의견을 나누고 고쳐 본 느낌은 어땠나요?' },
      ],
    },
    ws: {
      title: '칭찬·질문·제안',
      items: [
        { type: 'table', prompt: '친구 작품을 보고 칭찬·질문·제안을 하나씩 쓰세요.', columns: ['의견', '내용'], cells: [['칭찬', ''], ['질문', ''], ['제안', '']] },
        fig('큰 네모 배경이 비어 보여요. 작은 동그라미를 두 개 더 겹쳐 그려 넣으세요.', [pc('square', '하양', 'l', 280, 200, 0)], '비어 보이는 배경에 조각 더하기', '배경 위에 작은 동그라미가 더해진 그림'),
        { type: 'choice', prompt: '"꼬리를 더 크게 붙이면 어떨까요?"는 무슨 의견인가요?', options: ['칭찬', '질문', '제안'], answer: '제안' },
        { type: 'short', prompt: '친구에게 받은 제안 하나와 내가 어떻게 고쳤는지 쓰세요.' },
      ],
      easy: { note: '잘한 점은 칭찬, 궁금한 점은 질문, 이렇게 하면 어떨까는 제안이에요.', items: [
        { type: 'choice', prompt: '"별은 어떤 조각으로 붙였나요?"는 무슨 의견인가요?', options: ['질문', '제안'], answer: '질문' },
        { type: 'table', prompt: '친구 작품에 대한 의견을 쓰세요.', columns: ['의견', '내용'], cells: [['칭찬', ''], ['제안', '']] },
        { type: 'draw', prompt: '친구 제안대로 고친 작품 한 부분을 그리세요.' },
      ] },
    },
    diff: {
      easy: '맞는 칸에 넣으면 초록 테두리가 생기고, 색종이는 모양 세 가지·색 세 가지만 나와요.',
      base: '스스로 나눈 뒤 확인하고, 색종이에 반원·세모와 검정이 더해져요.',
      challenge: '칸에 넣지 않는 말이 섞여 있어요. 제안을 둘 한꺼번에 받아 배경과 주인공을 함께 고쳐요.',
    },
    notes: '자주 보이는 어려움: ① "별로예요" 같은 근거 없는 말을 의견으로 여긴다 → 무엇이 어떻게 별로인지 한 가지를 더 붙이게 한다. ② 제안을 받으면 작품을 모두 지운다 → 더하는 것과 바꾸는 것을 가른다. ③ 질문을 비판으로 받아들인다 → 질문은 더 알고 싶다는 뜻이라고 말한다. 서로의 작품에 붙임쪽지로 의견을 남기게 하면 더 편하게 말할 수 있다.',
  });

  // ───────────── 10차시 (확장) ─────────────
  make(10, S1, {
    title: '고치기 전과 고친 뒤 작품에서 달라진 점 찾아 말하기',
    objective: '작품을 고치기 전과 뒤를 견주어 무엇이 어떻게 달라졌는지 말하고, 색과 크기를 바꾸어 작품을 고칠 수 있다.',
    art: 'two paper-cut moon artworks side by side, a plain pale one on the left and a bolder one with a dark night sky on the right',
    scene: [
      { motif: 'moon', x: 100, y: 64, s: 0.9 }, { motif: 'moon', x: 380, y: 64, s: 0.9 }, { motif: 'star', x: 330, y: 100, s: 0.5 },
      { motif: 'hills', y: 212 }, { motif: 'tree', x: 120, y: 220 }, { motif: 'tree', x: 360, y: 220 },
      { motif: 'text', x: 240, y: 142, text: '고치기 전, 고친 뒤', size: 22 },
    ],
    intro: {
      teacher: '밋밋한 노랑 달 하나만 있는 작품과 어두운 보라 하늘을 더한 작품을 나란히 보여 준다. "두 작품에서 달라진 것은 무엇인가요?" 학생이 말한 낱말(밝아요, 또렷해요)을 칠판에 적고, "무엇을 바꿔서 그렇게 보일까요?"라고 묻는다. "고친 작품이 항상 더 많은 조각을 가진 것은 아니에요. 무엇을 왜 바꿨는지가 중요해요." 고치면 항상 조각이 늘어난다는 생각을 짚는다. 시연 단추로 달에 어두운 하늘이 겹쳐지는 모습을 보여 준다.',
      student: '고치기 전과 고친 뒤의 달 작품에서 달라진 점을 한 가지 말해 봅시다.',
      demo: { tool: 'collage', options: { shapes: ['circle', 'square'], colors: ['노랑', '보라'] }, sequence: [{ contrast: 'light-dark', has: [{ shape: 'circle', color: '노랑', size: 'l', n: 1 }, { shape: 'square', color: '보라', size: 'l', n: 1 }], overlap: 1 }] },
    },
    acts: [
      mind('a1', '활동 1. 고친 방법과 달라진 점 잇기', 12,
        '"이렇게 고치니 작품이 어떻게 달라졌나요?" 고친 방법 카드와 달라진 점 카드의 짝을 손가락으로 따라가며 말하게 한다. 어두운 색을 더하면 밝은 색이 또렷해지고, 크기를 섞으면 중심이 생기고, 겹침을 늘리면 깊이가 생긴다고 정리한다. 고치기 전 작품이 틀렸다고 여기는 학생에게는 처음 작품에서 좋았던 점도 한 가지 말하게 한다.',
        '작품을 고친 방법에 알맞은 달라진 점을 이어요.',
        [
          matchItem({ prompt: '달 작품을 고친 방법에 알맞은 달라진 점을 이어 보세요.', topic: '달 작품', d: 0.2,
            slots: [['m1', '어두운 보라 하늘을 뒤에 깔았어요'], ['m2', '달을 크게 붙였어요'], ['m3', '작은 별을 둘레에 겹쳤어요']],
            cards: [['bright', '밝은 달이 더 또렷해졌어요'], ['center', '달이 작품의 중심이 되었어요'], ['depth', '하늘이 깊어 보여요'], ['calm', '소리가 조용해졌어요']],
            match: { m1: 'bright', m2: 'center', m3: 'depth' }, extra: ['x1', '종이 값이 줄었어요'],
            hint: '고친 말이 색을 바꿨는지, 크기를 바꿨는지, 겹침을 바꿨는지 보고 달라진 점을 골라요.' }),
          matchItem({ prompt: '바다 작품을 고친 방법에 알맞은 달라진 점을 이어 보세요.', topic: '바다 작품', d: 0.25,
            slots: [['s1', '하양 파도를 파랑 위에 겹쳤어요'], ['s2', '배를 작게 줄여 위쪽에 붙였어요'], ['s3', '어두운 파랑 바다를 아래에 깔았어요']],
            cards: [['wave', '파도가 살아 있어 보여요'], ['far', '배가 멀리 있어 보여요'], ['deep', '바다가 깊어 보여요'], ['calm', '파도 소리가 커졌어요']],
            match: { s1: 'wave', s2: 'far', s3: 'deep' }, extra: ['x1', '종이 값이 줄었어요'] }),
          matchItem({ prompt: '집 작품을 고친 방법에 알맞은 달라진 점을 이어 보세요.', topic: '집 작품', d: 0.3,
            slots: [['h1', '지붕을 큰 빨강 세모로 바꿨어요'], ['h2', '창문을 작은 노랑 네모로 겹쳤어요'], ['h3', '문 앞에 작은 꽃을 더했어요']],
            cards: [['roof', '집이 더 눈에 띄어요'], ['warm', '불 켜진 집처럼 따뜻해 보여요'], ['cute', '집 앞이 정다워 보여요'], ['calm', '집이 작아졌어요']],
            match: { h1: 'roof', h2: 'warm', h3: 'cute' }, extra: ['x1', '종이 값이 줄었어요'],
            predict: { q: '작품을 고치면 항상 조각 수가 늘어날까요?', options: ['늘어나요', '늘지 않을 때도 있어요'], answer: 1 },
            conclude: '조각을 더하든 바꾸든 무엇을 왜 바꾸었는지가 작품을 달라 보이게 해요.' }),
        ]),
      col('a2', '활동 2. 색과 크기를 바꾸어 작품 고치기', 13,
        '"밋밋한 달 작품을 어떻게 고치면 달이 더 또렷해질까요?" 밝은 달 뒤에 어두운 색 하늘을 깔게 한다. 같은 크기만 쓴 하트 문항에서 크기를 바꾸지 않고 색만 바꾸는 학생에게는 "큰 것 하나가 가운데 있으면 어디를 먼저 보나요?"라고 묻는다. 마지막 문항은 고치기 전과 뒤를 짝에게 견주어 말한 뒤에만 점검을 표시하게 한다.',
        '고친 방법을 정해 색이나 크기를 바꾸고, 달라진 점을 짝에게 말해요.',
        ['circle', 'square', 'heart'], ['노랑', '보라', '분홍'],
        [
          colItem({ prompt: '달 작품을 고쳐요. 큰 노랑 동그라미 달 하나와 큰 보라 네모 하늘 하나를 겹쳐 붙여요.', d: 0.2,
            target: { contrast: 'light-dark', has: [{ shape: 'circle', color: '노랑', size: 'l', n: 1 }, { shape: 'square', color: '보라', size: 'l', n: 1 }], overlap: 1 },
            ch: { prompt: '밤하늘 달 작품을 더 고쳐요. 큰 보라 네모 하늘 하나 위에 큰 노랑 동그라미 달 하나와 작은 노랑 동그라미 별 넷 이상을 겹쳐 붙여요.', target: { contrast: 'light-dark', has: [{ shape: 'square', color: '보라', size: 'l', n: 1 }, { shape: 'circle', color: '노랑', size: 'l', n: 1 }, { shape: 'circle', color: '노랑', size: 's', min: 4 }], overlap: 5 } } }),
          colItem({ prompt: '크기를 섞어 고쳐요. 큰 분홍 하트 하나를 가운데에 붙이고 작은 분홍 하트 넷 이상을 둘레에 붙여요.', d: 0.25,
            target: { has: [{ shape: 'heart', color: '분홍', size: 'l', n: 1 }, { shape: 'heart', color: '분홍', size: 's', min: 4 }] } }),
          colItem({ prompt: '내 작품을 고칠 점 하나를 정해 고치고, 고치기 전과 뒤를 견주어 점검해요.', d: 0.1,
            target: { selfCheck: ['고칠 점 하나를 정했어요', '색이나 크기를 바꾸어 고쳤어요', '고치기 전과 뒤에 달라진 점을 짝에게 말했어요'], minPieces: 4 } }),
        ]),
    ],
    wrap: {
      teacher: '"고치기 전과 고친 뒤 가장 달라진 점은 무엇이고, 무엇을 바꿔서였나요?" 두 학생이 처음 작품과 고친 작품을 번갈아 보여 주며 말하게 한다. 출구 1번에서 "소리가 조용해졌어요"를 잇는 학생은 눈으로 본 달라진 점인지 되묻는다. 2번에서 "고치면 조각이 꼭 늘어난다"를 고른 학생에게는 활동 1의 마지막 문항을 떠올리게 한다.',
      exit: [
        { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '꽃 작품', slots: slotsOf([['f1', '큰 꽃잎을 가운데에 더했어요'], ['f2', '어두운 초록 줄기를 뒤에 깔았어요']]), cards: cards([['center', '꽃이 작품의 중심이 되었어요'], ['bright', '밝은 꽃잎이 또렷해졌어요'], ['calm', '소리가 커졌어요']]) }, prompt: '꽃 작품을 고친 방법에 알맞은 달라진 점을 이어 보세요.', target: { match: { f1: 'center', f2: 'bright' } }, difficulty: 0.15 },
        { type: 'choice', prompt: '작품을 고칠 때 가장 먼저 해야 할 일은 무엇인가요?', options: ['고칠 점 하나를 정하고 까닭을 말해요.', '모든 조각을 새로 붙여요.', '친구 작품을 따라 만들어요.'], answer: 0, difficulty: 0.15, explain: '무엇을 왜 고치는지 정해야 달라진 점을 말할 수 있어요.' },
        { type: 'mood', prompt: '오늘 작품을 고쳐 본 느낌은 어땠나요?' },
      ],
    },
    ws: {
      title: '고치기 전과 고친 뒤',
      items: [
        { type: 'table', prompt: '내 작품을 고친 방법과 달라진 점을 쓰세요.', columns: ['고친 방법', '달라진 점'], cells: [['', ''], ['', '']] },
        fig('달 작품을 고쳐 보세요. 달 뒤에 어두운 하늘을 칠해 그리세요.', [pc('circle', '노랑', 'l', 280, 200, 0)], '달 뒤에 하늘 더하기', '달 뒤에 어두운 하늘이 깔린 그림'),
        { type: 'choice', prompt: '어두운 하늘을 뒤에 깔았더니 달라진 점에 ○ 하세요.', options: ['달이 더 또렷해요', '달이 작아졌어요', '달이 사라졌어요'], answer: '달이 더 또렷해요' },
        { type: 'short', prompt: '고치기 전과 뒤 가운데 가장 크게 달라진 점 한 가지를 쓰세요.' },
      ],
      easy: { note: '어두운 색을 뒤에 깔면 밝은 색이 또렷해져요. 큰 것 하나를 두면 중심이 생겨요.', items: [
        { type: 'choice', prompt: '어두운 하늘을 깔면 밝은 달이 어떻게 보일까요?', options: ['더 또렷해요', '더 흐려져요'], answer: '더 또렷해요' },
        { type: 'table', prompt: '고친 방법과 달라진 점을 쓰세요.', columns: ['고친 방법', '달라진 점'], cells: [['', '']] },
        { type: 'draw', prompt: '고친 뒤 작품 한 부분을 그리세요.' },
      ] },
    },
    diff: {
      easy: '맞게 이은 카드에 초록 테두리가 생기고, 색종이는 모양 세 가지·색 세 가지만 나와요.',
      base: '스스로 이은 뒤 확인하고, 색종이에 반원·별과 검정·하양이 더해져요.',
      challenge: '이을 수 없는 카드가 섞여 있어요. 달 작품에 별을 넷 넘게 더해 고쳐요.',
    },
    notes: '자주 보이는 어려움: ① 고치기 전 작품이 틀렸다고 여긴다 → 처음 작품의 좋은 점도 한 가지 말하게 한다. ② 고치면 조각이 늘어나야 한다고 여긴다 → 바꾸기만 해도 달라짐을 보인다. ③ 달라진 점을 "좋아졌어요"로만 말한다 → 무엇이 어떻게 달라졌는지 낱말로 말하게 한다. 활동 2는 작품이 결과에 남으니 고치기 전 작품을 사진으로 남겨 두게 한다.',
  });

  // ───────────── 11차시 (핵심) ─────────────
  make(11, S2, {
    title: '따뜻한 색과 차가운 색이 주는 느낌 짝지어 보기',
    objective: '따뜻한 색과 차가운 색이 주는 느낌이 다르다는 것을 말하고, 느낌에 어울리는 색을 골라 붙일 수 있다.',
    art: 'a split paper landscape with a warm orange sunset on the left and a cool blue snowy field on the right',
    scene: [
      { motif: 'sun', x: 110, y: 66, s: 1.1 }, { motif: 'snow', x: 380, y: 60 }, { motif: 'hills', y: 210 },
      { motif: 'tree', x: 90, y: 218 }, { motif: 'mountain', x: 360, y: 200, s: 0.9 }, { motif: 'cloud', x: 300, y: 58, s: 0.8 },
      { motif: 'text', x: 240, y: 140, text: '따뜻한 색, 차가운 색', size: 22 },
    ],
    intro: {
      teacher: '주황 종이와 하늘색 종이를 각각 화면 가득 띄우고 "이 색을 보면 어떤 장소가 떠오르나요?"라고 묻는다. 주황은 난로 옆이나 노을, 하늘색은 바다나 얼음이라는 말이 나오면 "색에서 따뜻하거나 차가운 느낌이 와요. 빨강·주황·노랑·분홍은 따뜻한 색, 초록·파랑·보라는 차가운 색이에요." 색의 느낌은 사람마다 같은 것이 아니라 대체로 비슷하게 느끼는 경향임을 짚는다. 시연 단추로 따뜻한 색 해와 차가운 색 바다가 맞닿는 모습을 보여 준다.',
      student: '주황 종이와 하늘색 종이를 보고 떠오르는 장소를 한 곳씩 말해 봅시다.',
      demo: { tool: 'collage', options: { shapes: ['circle', 'semi'], colors: ['주황', '파랑'] }, sequence: [{ contrast: 'warm-cool', has: [{ shape: 'circle', color: '주황', n: 1 }, { shape: 'semi', color: '파랑', n: 1 }] }] },
    },
    acts: [
      mind('a1', '활동 1. 장면 속 색을 따뜻한 색과 차가운 색으로 나누기', 12,
        '"난로 불꽃의 색은 눈으로 보았을 때 따뜻한 느낌이 드나요?" 카드마다 색이 어떤 느낌을 주는지 몸을 감싸는 몸짓으로 말하게 한다. 빨강·주황·노랑 계열은 따뜻하고, 파랑·초록·보라 계열은 차갑다는 기준을 세운다. 분홍은 따뜻한 색, 갈색은 가운데에 가깝다는 점도 알려 준다. "차가운 색은 나쁜 색"이라는 학생에게는 여름 바다의 시원함을 떠올리게 한다.',
        '장면 속 색 카드를 읽고, 따뜻한 느낌인지 차가운 느낌인지 나누어요.',
        [
          sortItem({ prompt: '겨울과 여름 장면 속 색을 따뜻한 느낌과 차가운 느낌으로 나누어 보세요.', topic: '계절 장면', d: 0.2,
            slots: [['warm', '따뜻한 느낌'], ['cool', '차가운 느낌']],
            cards: [['a1', '난로 속 주황 불꽃'], ['a2', '얼어붙은 호수의 하늘색'], ['a3', '노을에 물든 빨강 하늘'], ['a4', '눈 덮인 산의 푸른 그림자'], ['a5', '군고구마의 노릇한 노랑']],
            sort: { warm: ['a1', 'a3', 'a5'], cool: ['a2', 'a4'] }, extra: ['ax', '겨울 방학 날짜'],
            hint: '색이 불·햇빛에 가까운지 물·얼음에 가까운지 따져요.' }),
          sortItem({ prompt: '음식과 음료 장면 속 색을 따뜻한 느낌과 차가운 느낌으로 나누어 보세요.', topic: '음식 장면', d: 0.25,
            slots: [['warm', '따뜻한 느낌'], ['cool', '차가운 느낌']],
            cards: [['b1', '김이 나는 국물의 붉은빛'], ['b2', '얼음 위 푸른 음료'], ['b3', '갓 구운 빵의 황금빛'], ['b4', '박하 아이스크림의 연초록']],
            sort: { warm: ['b1', 'b3'], cool: ['b2', 'b4'] }, extra: ['bx', '음식은 맛있어요'] }),
          sortItem({ prompt: '교실 물건의 색을 따뜻한 느낌과 차가운 느낌으로 나누어 보세요.', topic: '교실 물건', d: 0.3,
            slots: [['warm', '따뜻한 느낌'], ['cool', '차가운 느낌']],
            cards: [['c1', '주황 색연필'], ['c2', '남색 필통'], ['c3', '노랑 붙임쪽지'], ['c4', '초록 칠판'], ['c5', '분홍 지우개']],
            sort: { warm: ['c1', 'c3', 'c5'], cool: ['c2', 'c4'] }, extra: ['cx', '교실은 학교에 있어요'],
            predict: { q: '같은 방을 빨강 벽지와 파랑 벽지로 꾸미면 느낌이 같을까요?', options: ['같아요', '달라요'], answer: 1 },
            conclude: '색마다 따뜻하거나 차가운 느낌을 주어서 같은 장소도 색에 따라 느낌이 달라져요.' }),
        ]),
      col('a2', '활동 2. 따뜻한 색과 차가운 색으로 느낌 나타내기', 13,
        '"해와 바다를 맞닿게 붙이면 어떤 느낌이 날까요? 따뜻한 색만 붙이면요?" 두 가지를 번갈아 붙여 보며 느낌이 다르다는 것을 말하게 한다. 따뜻한 색만 쓰는 문항에서 차가운 색을 섞는 학생에게는 목표 느낌을 다시 떠올리게 한다. 마지막 문항은 고른 색이 어떤 느낌을 주는지 짝에게 말한 뒤에만 점검을 표시하게 한다.',
        '나타내고 싶은 느낌에 맞는 색을 골라 붙이고, 색이 주는 느낌을 말해요.',
        ['circle', 'semi', 'leaf'], ['주황', '빨강', '파랑', '초록'],
        [
          colItem({ prompt: '따뜻함과 시원함이 만나는 장면을 만들어요. 큰 주황 동그라미 해 하나와 큰 파랑 반원 바다 하나를 맞닿게 붙여요.', d: 0.2,
            target: { contrast: 'warm-cool', has: [{ shape: 'circle', color: '주황', size: 'l', n: 1 }, { shape: 'semi', color: '파랑', size: 'l', n: 1 }] },
            ch: { prompt: '노을 바닷가를 만들어요. 큰 주황 동그라미 하나, 작은 빨강 동그라미 둘 이상, 큰 파랑 반원 하나, 작은 초록 나뭇잎 하나 이상을 붙여요.', target: { contrast: 'warm-cool', has: [{ shape: 'circle', color: '주황', size: 'l', n: 1 }, { shape: 'circle', color: '빨강', size: 's', min: 2 }, { shape: 'semi', color: '파랑', size: 'l', n: 1 }, { shape: 'leaf', color: '초록', size: 's', min: 1 }] } } }),
          colItem({ prompt: '난로 옆 포근한 느낌을 만들어요. 빨강 동그라미 셋 이상과 주황 동그라미 둘 이상을 서로 겹쳐 붙여요.', d: 0.25,
            target: { has: [{ shape: 'circle', color: '빨강', min: 3 }, { shape: 'circle', color: '주황', min: 2 }], overlap: 3 } }),
          colItem({ prompt: '내가 나타내고 싶은 느낌 하나를 정해, 알맞은 색을 골라 붙이고 점검해요.', d: 0.1,
            target: { selfCheck: ['나타낼 느낌 하나를 정했어요', '그 느낌에 어울리는 색을 골랐어요', '고른 색이 주는 느낌을 짝에게 말했어요'], minPieces: 3 } }),
        ]),
    ],
    wrap: {
      teacher: '"오늘 붙인 색에서 어떤 느낌이 났나요? 그 느낌은 따뜻한 색 때문일까요, 차가운 색 때문일까요?" 두 작품을 띄워 색과 느낌을 이어 말하게 한다. 출구 1번에서 "눈 덮인 산의 푸른 그림자"를 따뜻한 느낌에 넣은 학생은 얼음과 눈을 떠올리게 한다. 2번에서 "색은 느낌을 주지 않는다"를 고른 학생에게는 빨강과 파랑 벽지를 떠올리게 한다.',
      exit: [
        { type: 'tool', tool: 'mindmap', options: { topic: '여름 장면', slots: slotsOf([['warm', '따뜻한 느낌'], ['cool', '차가운 느낌']]), cards: cards([['e1', '한낮의 샛노란 해'], ['e2', '시원한 계곡의 초록 물']]) }, prompt: '여름 장면 속 색을 따뜻한 느낌과 차가운 느낌으로 나누어 보세요.', target: { sort: { warm: ['e1'], cool: ['e2'] } }, difficulty: 0.15 },
        { type: 'choice', prompt: '추운 겨울 아침의 쓸쓸함을 나타내려면 어떤 색이 알맞을까요?', options: ['차가운 파랑 계열', '뜨거운 빨강 계열', '색은 상관없어요'], answer: 0, difficulty: 0.15, explain: '차가운 색은 쌀쌀하고 고요한 느낌을 주어 겨울 아침 느낌에 어울려요.' },
        { type: 'mood', prompt: '오늘 색의 느낌을 살펴본 마음은 어땠나요?' },
      ],
    },
    ws: {
      title: '색이 주는 느낌',
      items: [
        { type: 'table', prompt: '색을 보고 떠오른 장소와 느낌을 쓰세요.', columns: ['색', '떠오른 장소', '느낌'], cells: [['주황', '', ''], ['하늘색', '', ''], ['', '', '']] },
        fig('해와 바다가 맞닿은 그림이에요. 해와 바다 조각 옆에 어울리는 느낌을 쓰세요.', [pc('circle', '주황', 'l', 220, 200, 0), pc('semi', '파랑', 'l', 340, 200, 0)], '왼쪽은 따뜻한 느낌, 오른쪽은 시원한 느낌 쓰기', '해는 따뜻하고 포근한 느낌, 바다는 시원하고 차분한 느낌'),
        { type: 'choice', prompt: '따뜻한 색에 ○ 하세요.', options: ['파랑', '초록', '주황', '보라'], answer: '주황' },
        { type: 'draw', prompt: '따뜻한 색만 써서 포근한 장면 하나를 그리세요.' },
      ],
      easy: { note: '빨강·주황·노랑·분홍은 따뜻한 색, 초록·파랑·보라는 차가운 색이에요.', items: [
        { type: 'choice', prompt: '차가운 색에 ○ 하세요.', options: ['빨강', '파랑'], answer: '파랑' },
        { type: 'table', prompt: '색과 느낌을 쓰세요.', columns: ['색', '느낌'], cells: [['주황', ''], ['파랑', '']] },
        { type: 'draw', prompt: '따뜻한 색 동그라미 하나를 그리세요.' },
      ] },
    },
    diff: {
      easy: '맞는 칸에 넣으면 초록 테두리가 생기고, 색종이는 모양 세 가지·색 네 가지만 나와요.',
      base: '스스로 나눈 뒤 확인하고, 색종이에 별·세모와 검정·하양이 더해져요.',
      challenge: '어느 칸에도 넣지 않는 카드가 섞여 있어요. 해 둘레 빨강 조각과 바닷가 초록 나뭇잎까지 더해 풍경을 완성해요.',
    },
    notes: '자주 보이는 어려움: ① 색의 느낌이 모두에게 똑같다고 여긴다 → 같은 색에서 다른 느낌을 말한 친구를 찾는다. ② 분홍·갈색을 어느 쪽에 둘지 헤맨다 → 분홍은 따뜻한 쪽, 갈색은 가운데임을 알려 준다. ③ 따뜻한 색만 쓰라는 문항에서 파랑을 섞는다 → 목표 느낌을 다시 읽게 한다.',
  });

  // ───────────── 12차시 (연습) ─────────────
  make(12, S2, {
    title: '곧은 선·물결선·뾰족한 선이 주는 느낌 찾아 잇기',
    objective: '곧은 선, 물결선, 뾰족한 선이 주는 느낌이 다르다는 것을 말하고, 선의 느낌을 조각을 이어 붙여 나타낼 수 있다.',
    art: 'three paper ribbons laid on a table, one straight, one wavy and one zigzag, with a child tracing them with a finger',
    scene: [
      { motif: 'sun', x: 410, y: 56, s: 0.7 }, { motif: 'wave', x: 120, y: 200 }, { motif: 'cloud', x: 120, y: 54 },
      { motif: 'mountain', x: 360, y: 196, s: 1 }, { motif: 'hills', y: 214 }, { motif: 'bird', x: 250, y: 84 },
      { motif: 'text', x: 240, y: 140, text: '선도 느낌이 있어요', size: 22 },
    ],
    intro: {
      teacher: '칠판에 곧은 선, 물결선, 뾰족한 선을 한 줄씩 그리고 "이 선을 따라 손가락을 움직여 보세요. 마음이 어떻게 달라지나요?"라고 묻는다. 곧은 선은 차분하고, 물결선은 출렁이고, 뾰족한 선은 긴장된다는 말이 나오게 한다. "화가 고흐가 그린 「별이 빛나는 밤」(1889)에는 밤하늘이 소용돌이치듯 구불구불한 붓 자국이 있어요. 그 선 때문에 하늘이 움직이는 느낌이 나요." 선은 느낌 없이 모양만 있다는 생각을 짚는다. 시연 단추로 반원이 이어져 물결선이 되는 모습을 보여 준다.',
      student: '곧은 선, 물결선, 뾰족한 선을 손가락으로 따라가 보고, 마음이 어떤지 낱말 하나로 말해 봅시다.',
      demo: { tool: 'collage', options: { shapes: ['semi'], colors: ['파랑', '하양'] }, sequence: [{ repeat: { times: 3, unit: 2 }, has: [{ shape: 'semi', color: '파랑', min: 3 }, { shape: 'semi', color: '하양', min: 3 }] }] },
    },
    acts: [
      mind('a1', '활동 1. 선의 모습과 느낌 잇기', 12,
        '"출렁이는 물결선을 보면 마음이 어떨까요?" 선 모습 말에 밑줄을 긋고 어울리는 느낌 카드와 이어 보게 한다. 곧은 선은 차분하고 안정된 느낌, 물결선은 부드럽고 출렁이는 느낌, 뾰족한 선은 긴장되고 날카로운 느낌이라고 기준을 세운다. 세 번째 문항은 이름난 그림 속 선도 같은 기준으로 읽을 수 있음을 짚는다. "선은 모양일 뿐 느낌은 없다"는 학생에게는 곧은 선과 뾰족한 선을 번갈아 보며 마음이 달라지는지 묻는다.',
        '선의 모습 말과 어울리는 느낌 카드를 이어요.',
        [
          matchItem({ prompt: '교실 둘레에서 찾은 선의 모습과 어울리는 느낌을 이어 보세요.', topic: '교실의 선', d: 0.2,
            slots: [['l1', '칠판 아래 긴 수평선'], ['l2', '커튼의 구불구불한 주름 선'], ['l3', '깨진 유리의 뾰족한 금']],
            cards: [['calm', '차분하고 안정돼요'], ['soft', '부드럽고 출렁여요'], ['sharp', '날카롭고 긴장돼요'], ['hot', '뜨거워요']],
            match: { l1: 'calm', l2: 'soft', l3: 'sharp' }, extra: ['x1', '번호를 세요'],
            hint: '선을 손가락으로 따라가 보며 마음이 편한지 출렁이는지 날카로운지 느껴요.' }),
          matchItem({ prompt: '자연에서 찾은 선의 모습과 어울리는 느낌을 이어 보세요.', topic: '자연의 선', d: 0.25,
            slots: [['n1', '잔잔한 호수의 수평선'], ['n2', '바람에 흔들리는 풀의 곡선'], ['n3', '번개가 꺾이며 내리친 선']],
            cards: [['calm', '차분하고 안정돼요'], ['soft', '부드럽고 출렁여요'], ['sharp', '날카롭고 긴장돼요'], ['hot', '뜨거워요']],
            match: { n1: 'calm', n2: 'soft', n3: 'sharp' }, extra: ['x1', '번호를 세요'] }),
          matchItem({ prompt: '이름난 그림 「별이 빛나는 밤」 속 구불구불 소용돌이 선과 어울리는 느낌을 이어 보세요.', topic: '밤하늘 그림 속 선', d: 0.3,
            slots: [['v1', '하늘에서 소용돌이치는 구불구불한 붓 선'], ['v2', '아래 마을 집을 따라 놓인 수평 선'], ['v3', '높이 솟은 나무의 뾰족한 선']],
            cards: [['move', '하늘이 움직이는 것 같아요'], ['calm', '마을이 고요해요'], ['sharp', '하늘을 찌를 듯 긴장돼요'], ['hot', '뜨거워요']],
            match: { v1: 'move', v2: 'calm', v3: 'sharp' }, extra: ['x1', '번호를 세요'],
            predict: { q: '같은 그림 속에서도 선마다 주는 느낌이 다를까요?', options: ['모두 같아요', '선마다 달라요'], answer: 1 },
            conclude: '선의 모습에 따라 느낌이 달라서 화가는 선을 골라 느낌을 전해요.' }),
        ]),
      col('a2', '활동 2. 선의 느낌을 조각을 이어 나타내기', 13,
        '"반원을 파랑·하양 번갈아 이어 붙이면 어떤 선처럼 보일까요?" 묶음을 정해 같은 차례로 이어 붙이게 한다. 곧은 선 문항에서 조각을 삐뚤게 놓는 학생에게는 한 줄에 놓이는지 눈으로 견주게 한다. 마지막 문항은 뾰족한 선의 느낌을 어떤 조각으로 나타냈는지 짝에게 말한 뒤에만 점검을 표시하게 한다.',
        '선의 느낌에 어울리는 조각을 골라 이어 붙여요.',
        ['rect', 'semi', 'triangle'], ['파랑', '하양', '검정'],
        [
          colItem({ prompt: '차분한 곧은 선을 만들어요. 파랑 긴 네모 다섯 개 이상을 한 줄로 이어 붙여요.', d: 0.2,
            target: { has: [{ shape: 'rect', color: '파랑', min: 5 }] },
            ch: { prompt: '단정한 곧은 선을 만들어요. 파랑 긴 네모와 하양 긴 네모를 한 묶음으로 왼쪽에서 오른쪽으로 네 번 이상 되풀이해요.', target: { repeat: { times: 4, unit: 2 }, has: [{ shape: 'rect', color: '파랑', min: 4 }, { shape: 'rect', color: '하양', min: 4 }] } } }),
          colItem({ prompt: '출렁이는 물결선을 만들어요. 파랑 반원과 하양 반원을 한 묶음으로 왼쪽에서 오른쪽으로 세 번 이상 되풀이해요.', d: 0.25,
            target: { repeat: { times: 3, unit: 2 }, has: [{ shape: 'semi', color: '파랑', min: 3 }, { shape: 'semi', color: '하양', min: 3 }] } }),
          colItem({ prompt: '뾰족한 선의 날카로운 느낌을 조각으로 나타내고 점검해요.', d: 0.1,
            target: { selfCheck: ['뾰족한 모양의 조각을 골랐어요', '조각을 한 줄로 이어 선처럼 붙였어요', '그 선이 주는 느낌을 짝에게 말했어요'], minPieces: 5 } }),
        ]),
    ],
    wrap: {
      teacher: '"오늘 만든 선을 보면 마음이 어땠나요? 그 느낌은 곧은 선 때문일까요, 물결선 때문일까요?" 두 학생이 자기 선을 손가락으로 따라가며 말하게 한다. 출구 1번에서 "굽이치는 파도"를 차분함에 이은 학생은 그 선이 곧은지 굽은지 되묻는다. 2번에서 "선은 느낌이 없다"를 고른 학생에게는 활동 1에서 같은 그림의 선마다 느낌이 달랐던 것을 떠올리게 한다.',
      exit: [
        { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '바닷가의 선', slots: slotsOf([['s1', '밀려오는 파도의 굽이치는 선'], ['s2', '먼 바다의 수평선']]), cards: cards([['soft', '부드럽고 출렁여요'], ['calm', '차분하고 안정돼요'], ['sharp', '날카롭고 긴장돼요']]) }, prompt: '바닷가에서 찾은 선과 어울리는 느낌을 이어 보세요.', target: { match: { s1: 'soft', s2: 'calm' } }, difficulty: 0.15 },
        { type: 'choice', prompt: '긴장되고 날카로운 느낌을 나타낼 때 알맞은 선은 무엇인가요?', options: ['곧은 수평선', '뾰족하게 꺾인 선', '부드러운 물결선'], answer: 1, difficulty: 0.15, explain: '뾰족하게 꺾인 선은 날카롭고 긴장되는 느낌을 줘요.' },
        { type: 'mood', prompt: '오늘 선의 느낌을 찾아본 마음은 어땠나요?' },
      ],
    },
    ws: {
      title: '선이 주는 느낌',
      items: [
        { type: 'table', prompt: '선의 모습과 느낌을 이어 쓰세요.', columns: ['선의 모습', '주는 느낌'], cells: [['곧은 선', ''], ['물결선', ''], ['뾰족한 선', '']] },
        fig('반원을 이어 물결선을 만들어요. 오른쪽에 반원 두 개를 더 그려 이어 보세요.', [pc('semi', '파랑', 'm', 160, 200, 0), pc('semi', '하양', 'm', 220, 200, 0), pc('semi', '파랑', 'm', 280, 200, 0)], '반원을 이어 물결선 만들기', '반원이 같은 차례로 이어진 물결선'),
        { type: 'choice', prompt: '차분하고 안정된 느낌을 주는 선에 ○ 하세요.', options: ['곧은 수평선', '뾰족하게 꺾인 선', '구불구불한 소용돌이 선'], answer: '곧은 수평선' },
        { type: 'draw', prompt: '내가 느낀 기분을 선으로 나타내 보세요.' },
      ],
      easy: { note: '곧은 선은 차분함, 물결선은 출렁임, 뾰족한 선은 날카로움을 줘요.', items: [
        { type: 'choice', prompt: '물결선과 어울리는 느낌에 ○ 하세요.', options: ['출렁이는 느낌', '날카로운 느낌'], answer: '출렁이는 느낌' },
        { type: 'table', prompt: '선과 느낌을 쓰세요.', columns: ['선', '느낌'], cells: [['곧은 선', ''], ['뾰족한 선', '']] },
        { type: 'draw', prompt: '물결선을 그리세요.' },
      ] },
    },
    diff: {
      easy: '맞게 이은 카드에 초록 테두리가 생기고, 색종이는 모양 세 가지·색 세 가지만 나와요.',
      base: '스스로 이은 뒤 확인하고, 색종이에 동그라미·별과 노랑이 더해져요.',
      challenge: '이을 수 없는 카드가 섞여 있어요. 곧은 선도 두 색을 번갈아 놓아 묶음을 되풀이해요.',
    },
    notes: '자주 보이는 어려움: ① 선은 느낌이 없는 모양일 뿐이라고 여긴다 → 곧은 선과 뾰족한 선을 번갈아 따라 그리며 마음이 달라지는지 묻는다. ② 물결선 묶음을 중간에 바꾼다 → 묶음을 손가락으로 감싸 견주게 한다. ③ 곧은 선을 삐뚤게 놓는다 → 눈높이를 맞추어 보게 한다. 「별이 빛나는 밤」은 작품 이미지를 싣지 않고 이름과 특징만 말로 소개한다.',
  });

  // ───────────── 13차시 (확장) ─────────────
  make(13, S2, {
    title: '소리와 냄새를 색과 모양으로 바꾸어 말해 보기',
    objective: '귀로 들은 소리나 코로 맡은 냄새의 느낌을 색·모양·크기로 바꾸어 말하고, 밝고 어두운 색 조각으로 나타낼 수 있다.',
    art: 'a child with eyes closed listening to a drum and a small bell while colorful paper shapes float out of them',
    scene: [
      { motif: 'moon', x: 410, y: 56, s: 0.6 }, { motif: 'star', x: 330, y: 80, s: 0.6 }, { motif: 'star', x: 200, y: 60, s: 0.5 },
      { motif: 'hills', y: 210 }, { motif: 'house', x: 110, y: 218 }, { motif: 'tree', x: 380, y: 218 },
      { motif: 'text', x: 240, y: 140, text: '소리를 모양으로', size: 22 },
    ],
    intro: {
      teacher: '교사가 책상을 낮고 천천히 두드린 뒤 작은 종을 짧게 흔들고 "눈을 감고 들어 보세요. 첫 번째 소리는 어떤 색과 모양일까요, 두 번째 소리는요?"라고 묻는다. 낮고 묵직한 소리는 크고 어두운 네모, 맑은 소리는 작고 밝은 별처럼 말한 학생의 이유를 한두 명에게 듣는다. "소리에도 색과 모양을 붙여 말할 수 있어요. 정답은 없고 이유를 말하는 것이 중요해요." 감각마다 따로 노는 것이 아니라 서로 바꿔 말할 수 있음을 짚는다. 시연 단추로 어두운 조각이 모이는 모습을 보여 준다.',
      student: '눈을 감고 소리 두 가지를 듣고, 각각 어떤 색과 모양 같은지 말해 봅시다.',
      demo: { tool: 'collage', options: { shapes: ['square'], colors: ['갈색', '검정'] }, sequence: [{ has: [{ shape: 'square', color: '갈색', size: 'l', min: 2 }, { shape: 'square', color: '검정', min: 1 }] }] },
    },
    acts: [
      mind('a1', '활동 1. 소리나 냄새와 어울리는 색·모양 잇기', 12,
        '"쿵쿵 낮은 북소리는 어떤 모양일까요? 작고 둥근 모양일까요, 크고 네모난 모양일까요?" 소리의 높낮이·크기·부드러움을 모양의 크기·각·색의 밝기와 이어 보게 한다. 낮고 묵직한 소리는 어둡고 큰 모양에, 높고 맑은 소리는 밝고 작은 모양에 어울린다고 기준을 세운다. 정답이 하나뿐이라고 여기는 학생에게는 이유를 말하면 다른 답도 가능하다고 말한다. 냄새 문항도 같은 방법으로 이끈다.',
        '소리나 냄새를 듣고 맡은 느낌과 어울리는 색·모양 카드를 이어요.',
        [
          matchItem({ prompt: '낱말 소리와 어울리는 색·모양 카드를 이어 보세요.', topic: '소리의 모양', d: 0.2,
            slots: [['s1', '쿵쿵 낮고 묵직한 북소리'], ['s2', '딩동 맑고 높은 종소리'], ['s3', '바스락 부서지는 낙엽 소리']],
            cards: [['dark', '크고 어두운 네모'], ['light', '작고 밝은 별'], ['rough', '뾰족한 갈색 세모들'], ['soft', '둥근 분홍 동그라미']],
            match: { s1: 'dark', s2: 'light', s3: 'rough' }, extra: ['x1', '번호를 세요'],
            hint: '소리가 낮은지 높은지, 부드러운지 거친지 먼저 정해 보세요.' }),
          matchItem({ prompt: '냄새와 어울리는 색·모양 카드를 이어 보세요.', topic: '냄새의 모양', d: 0.25,
            slots: [['n1', '갓 구운 빵의 고소한 냄새'], ['n2', '비 온 뒤 흙냄새'], ['n3', '박하사탕의 알싸한 냄새']],
            cards: [['warm', '둥글고 노릇한 동그라미'], ['earth', '낮고 어두운 갈색 면'], ['cool', '뾰족하고 시원한 초록 조각'], ['pink', '큰 분홍 하트']],
            match: { n1: 'warm', n2: 'earth', n3: 'cool' }, extra: ['x1', '번호를 세요'] }),
          matchItem({ prompt: '낯선 소리와 어울리는 색·모양 카드를 이어 보세요.', topic: '낯선 소리의 모양', d: 0.3,
            slots: [['v1', '주르륵 길게 이어지는 빗소리'], ['v2', '탁 짧게 끊기는 박수 소리'], ['v3', '웅웅 크게 울리는 종소리']],
            cards: [['line', '길게 이어진 파랑 선'], ['dot', '짧고 또렷한 노랑 점'], ['big', '크게 번지는 보라 동그라미'], ['x', '작은 갈색 세모']],
            match: { v1: 'line', v2: 'dot', v3: 'big' }, extra: ['x1', '번호를 세요'],
            predict: { q: '소리에 어울리는 색·모양은 하나의 정답만 있을까요?', options: ['하나뿐이에요', '이유를 말하면 여러 답이 가능해요'], answer: 1 },
            conclude: '소리나 냄새를 색·모양으로 바꾸는 데는 정해진 답이 없고 까닭을 말하는 것이 중요해요.' }),
        ]),
      col('a2', '활동 2. 밝고 어두운 색으로 소리 나타내기', 13,
        '"묵직한 북소리는 어두운 색을 크게, 맑은 종소리는 밝은 색을 작게 나타내 볼까요?" 소리의 높낮이를 밝기와 크기로 바꾸게 한다. 북소리 문항에서 밝은 노랑만 쓰는 학생에게는 낮고 묵직한 소리를 다시 들려주며 밝은 색이 어울리는지 묻는다. 마지막 문항은 선택한 소리가 어떤 색과 모양인지 짝에게 말한 뒤에만 점검을 표시하게 한다.',
        '소리의 높낮이와 크기를 색의 밝기와 조각 크기로 바꾸어 붙여요.',
        ['square', 'star', 'circle'], ['갈색', '검정', '노랑', '하양'],
        [
          colItem({ prompt: '낮고 묵직한 북소리를 만들어요. 큰 갈색 네모 둘 이상과 보통 검정 네모 하나 이상을 붙여요.', d: 0.2,
            target: { has: [{ shape: 'square', color: '갈색', size: 'l', min: 2 }, { shape: 'square', color: '검정', size: 'm', min: 1 }] },
            ch: { prompt: '쿵쿵 울리는 큰 북소리를 만들어요. 큰 갈색 네모 셋 이상과 큰 검정 네모 하나 이상, 작은 하양 동그라미 하나를 붙여요.', target: { has: [{ shape: 'square', color: '갈색', size: 'l', min: 3 }, { shape: 'square', color: '검정', size: 'l', min: 1 }, { shape: 'circle', color: '하양', size: 's', n: 1 }] } } }),
          colItem({ prompt: '맑게 울리는 종소리를 만들어요. 작은 노랑 별 네 개 이상과 작은 하양 동그라미 둘 이상을 붙여요.', d: 0.25,
            target: { has: [{ shape: 'star', color: '노랑', size: 's', min: 4 }, { shape: 'circle', color: '하양', size: 's', min: 2 }] } }),
          colItem({ prompt: '오늘 들은 소리 하나를 색과 모양으로 바꾸어 나타내고 점검해요.', d: 0.1,
            target: { selfCheck: ['소리 하나를 골랐어요', '소리의 높낮이를 색의 밝기와 크기로 바꾸었어요', '짝에게 왜 그 색과 모양을 골랐는지 말했어요'], minPieces: 4 } }),
        ]),
    ],
    wrap: {
      teacher: '"같은 종소리를 짝은 어떤 색과 모양으로 나타냈나요? 나와 다른 점이 있다면 왜 그럴까요?" 두 쌍의 작품을 띄워 이유를 말하게 한다. 출구 1번에서 "짹짹 높고 가벼운 새소리"를 크고 어두운 네모에 이은 학생은 소리가 높은지 낮은지 되묻는다. 2번에서 "정답은 하나뿐"을 고른 학생에게는 짝과 달랐던 작품을 떠올리게 한다.',
      exit: [
        { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '소리의 모양', slots: slotsOf([['s1', '쿵 낮게 닫히는 문소리'], ['s2', '짹짹 높고 가벼운 새소리']]), cards: cards([['dark', '크고 어두운 네모'], ['light', '작고 밝은 노랑 점'], ['x', '뾰족한 검정 세모']]) }, prompt: '소리와 어울리는 색·모양 카드를 이어 보세요.', target: { match: { s1: 'dark', s2: 'light' } }, difficulty: 0.15 },
        { type: 'choice', prompt: '높고 맑은 소리를 색과 모양으로 바꿀 때 어울리는 것은 무엇인가요?', options: ['크고 어두운 면', '작고 밝은 조각', '아무것도 어울리지 않아요'], answer: 1, difficulty: 0.15, explain: '맑고 높은 소리는 가볍고 밝은 느낌과 이어지기 쉬워요.' },
        { type: 'mood', prompt: '소리를 색으로 바꾸어 본 느낌은 어땠나요?' },
      ],
    },
    ws: {
      title: '소리를 색과 모양으로',
      items: [
        { type: 'table', prompt: '들은 소리를 색과 모양으로 바꾸어 쓰세요.', columns: ['소리', '색', '모양', '까닭'], cells: [['북소리', '', '', ''], ['종소리', '', '', ''], ['', '', '', '']] },
        fig('북소리를 나타낸 조각 옆에 맑은 종소리를 나타낼 조각 두 개를 더 그리세요.', [pc('square', '갈색', 'l', 200, 200, 0), pc('square', '검정', 'm', 300, 200, 0)], '북소리 옆에 종소리 더하기', '밝고 작은 조각으로 나타낸 종소리'),
        { type: 'choice', prompt: '낮고 묵직한 소리와 어울리는 것에 ○ 하세요.', options: ['작은 노랑 별', '크고 어두운 네모', '얇은 하양 선'], answer: '크고 어두운 네모' },
        { type: 'draw', prompt: '오늘 들은 소리 하나를 색과 모양으로 그리세요.' },
      ],
      easy: { note: '낮고 묵직한 소리는 크고 어두운 모양, 높고 맑은 소리는 작고 밝은 모양과 어울려요.', items: [
        { type: 'choice', prompt: '맑은 종소리와 어울리는 것에 ○ 하세요.', options: ['작고 밝은 별', '크고 어두운 네모'], answer: '작고 밝은 별' },
        { type: 'table', prompt: '소리와 색을 쓰세요.', columns: ['소리', '색'], cells: [['북소리', ''], ['종소리', '']] },
        { type: 'draw', prompt: '소리 하나를 모양으로 그리세요.' },
      ] },
    },
    diff: {
      easy: '맞게 이은 카드에 초록 테두리가 생기고, 색종이는 모양 세 가지·색 네 가지만 나와요.',
      base: '스스로 이은 뒤 확인하고, 색종이에 세모·반원과 파랑이 더해져요.',
      challenge: '이을 수 없는 카드가 섞여 있어요. 북소리는 큰 조각을 셋 넘게 붙이고 작은 하양 조각으로 소리의 울림을 더해요.',
    },
    notes: '자주 보이는 어려움: ① 소리에 어울리는 색·모양이 하나뿐이라고 여긴다 → 이유를 말하면 다른 답도 가능함을 짝의 작품으로 보인다. ② 소리의 높낮이를 밝기가 아닌 다른 것으로만 바꾼다 → 높낮이를 밝기·크기로 옮기는 연습을 한 번 더 한다. ③ 소리를 아예 듣지 않고 만든다 → 눈을 감고 다시 듣게 한다. 준비물: 작은 종(없으면 책상 두드리기와 손뼉).',
  });

  // ───────────── 14차시 (핵심) ─────────────
  make(14, S2, {
    title: '"포근함"과 "상쾌함"을 색·모양·크기로 정해 나타내기',
    objective: '나타내고 싶은 느낌 낱말을 정하고, 그 느낌에 어울리는 색·모양·크기를 골라 작품으로 나타낼 수 있다.',
    art: 'two small paper-cut panels, one with soft round pink and orange shapes and one with fresh green leaves and blue waves',
    scene: [
      { motif: 'sun', x: 100, y: 62, s: 0.9 }, { motif: 'cloud', x: 330, y: 56 }, { motif: 'hills', y: 210 },
      { motif: 'flower', x: 110, y: 224, s: 1.2 }, { motif: 'leaf', x: 360, y: 210, r: 20 }, { motif: 'leaf', x: 410, y: 222, r: -20 },
      { motif: 'text', x: 240, y: 140, text: '느낌 낱말을 정해요', size: 22 },
    ],
    intro: {
      teacher: '"오늘 아침 기분을 낱말 하나로 말해 볼까요?" 신남, 졸림, 설렘처럼 학생이 말한 낱말을 칠판에 적는다. 그중 하나를 골라 "신남은 어떤 색과 모양일까요?"라고 묻는다. 학생이 말한 색·모양을 그대로 받아 적고, 같은 느낌도 사람마다 다르게 나타낼 수 있다고 알려 준다. "작품을 만들기 전에 나타낼 느낌 낱말을 정하면, 어떤 색·모양·크기를 쓸지 정하기 쉬워져요." 느낌은 만들고 나서 정하는 것이라는 생각을 짚는다. 시연 단추로 둥근 분홍 조각이 모이는 모습을 보여 준다.',
      student: '오늘 아침 기분을 낱말 하나로 말하고, 어떤 색과 모양 같은지 말해 봅시다.',
      demo: { tool: 'collage', options: { shapes: ['circle'], colors: ['분홍', '주황'] }, sequence: [{ has: [{ shape: 'circle', color: '분홍', min: 3 }, { shape: 'circle', color: '주황', min: 2 }], overlap: 3 }] },
    },
    acts: [
      mind('a1', '활동 1. 느낌 낱말에 어울리는 표현 방법 나누기', 12,
        '"포근함에 어울리는 모양은 둥근 모양일까요, 뾰족한 모양일까요?" 카드를 읽고 느낌 낱말 아래로 나누어 보게 한다. 포근함은 둥근 모양·따뜻한 색·큰 조각, 상쾌함은 시원한 색·가벼운 잎 모양·작은 조각이 어울린다고 정리한다. "포근함에도 뾰족한 모양을 쓸 수 있다"는 학생에게는 뾰족한 모양을 섞었을 때 느낌이 달라지는지 묻는다. 정답은 하나가 아니므로 까닭을 말하게 한다.',
        '표현 방법 카드를 읽고, 포근함과 상쾌함 가운데 어느 느낌에 어울리는지 나누어요.',
        [
          sortItem({ prompt: '색 카드를 포근함과 상쾌함으로 나누어 보세요.', topic: '느낌의 색', d: 0.2,
            slots: ['포근함', '상쾌함'],
            cards: [['a1', '연한 분홍'], ['a2', '따뜻한 주황'], ['a3', '시원한 하늘색'], ['a4', '새싹 같은 연초록'], ['a5', '부드러운 노랑']],
            sort: { 포근함: ['a1', 'a2', 'a5'], 상쾌함: ['a3', 'a4'] }, extra: ['ax', '번쩍이는 검정'],
            hint: '이불 속처럼 따뜻한 색인지 아침 바람처럼 시원한 색인지 따져요.' }),
          sortItem({ prompt: '모양 카드를 포근함과 상쾌함으로 나누어 보세요.', topic: '느낌의 모양', d: 0.25,
            slots: ['포근함', '상쾌함'],
            cards: [['b1', '둥근 동그라미'], ['b2', '통통한 하트'], ['b3', '가볍게 뻗은 나뭇잎'], ['b4', '물결치는 반원']],
            sort: { 포근함: ['b1', 'b2'], 상쾌함: ['b3', 'b4'] }, extra: ['bx', '날카로운 별'] }),
          sortItem({ prompt: '크기와 배치 카드를 포근함과 상쾌함으로 나누어 보세요.', topic: '느낌의 크기', d: 0.3,
            slots: ['포근함', '상쾌함'],
            cards: [['c1', '큰 조각을 서로 겹쳐요'], ['c2', '큰 조각을 가운데에 모아요'], ['c3', '작은 조각을 가볍게 흩어요'], ['c4', '조각 사이를 넓게 비워요']],
            sort: { 포근함: ['c1', 'c2'], 상쾌함: ['c3', 'c4'] }, extra: ['cx', '조각을 모두 같게 붙여요'],
            predict: { q: '같은 느낌 낱말이면 모든 사람이 똑같은 작품을 만들까요?', options: ['똑같이 만들어요', '사람마다 달라요'], answer: 1 },
            conclude: '느낌 낱말이 같아도 색·모양·크기를 고르는 방법은 여러 가지가 있어요.' }),
        ]),
      col('a2', '활동 2. 느낌 낱말에 맞게 색·모양·크기 골라 만들기', 13,
        '"포근함을 만들기 전에 어떤 색을 쓸지 먼저 말해 볼까요?" 느낌 낱말 → 색 → 모양 → 크기 순으로 정한 뒤 붙이게 한다. 상쾌함 문항에서 따뜻한 색을 섞는 학생에게는 처음 정한 낱말을 다시 읽게 한다. 마지막 문항은 정한 느낌 낱말과 쓴 색·모양을 짝에게 말한 뒤에만 점검을 표시하게 한다.',
        '느낌 낱말을 정하고, 그 느낌에 맞게 색·모양·크기를 골라 붙여요.',
        ['circle', 'leaf', 'semi'], ['분홍', '주황', '초록', '파랑'],
        [
          colItem({ prompt: '포근함을 만들어요. 분홍 동그라미 셋 이상과 주황 동그라미 둘 이상을 서로 겹쳐 붙여요.', d: 0.2,
            target: { has: [{ shape: 'circle', color: '분홍', min: 3 }, { shape: 'circle', color: '주황', min: 2 }], overlap: 3 },
            ch: { prompt: '더 포근한 느낌을 만들어요. 큰 분홍 동그라미 둘 이상과 큰 주황 동그라미 하나 이상, 작은 분홍 동그라미 셋 이상을 겹쳐 붙여요.', target: { has: [{ shape: 'circle', color: '분홍', size: 'l', min: 2 }, { shape: 'circle', color: '주황', size: 'l', min: 1 }, { shape: 'circle', color: '분홍', size: 's', min: 3 }], overlap: 5 } } }),
          colItem({ prompt: '상쾌함을 만들어요. 초록 나뭇잎 네 장 이상과 파랑 반원 두 개 이상을 붙여요.', d: 0.25,
            target: { has: [{ shape: 'leaf', color: '초록', min: 4 }, { shape: 'semi', color: '파랑', min: 2 }] } }),
          colItem({ prompt: '내가 정한 느낌 낱말에 어울리는 색·모양·크기를 골라 붙이고 점검해요.', d: 0.1,
            target: { selfCheck: ['느낌 낱말을 먼저 정했어요', '낱말에 어울리는 색과 모양을 골랐어요', '짝에게 정한 느낌과 고른 까닭을 말했어요'], minPieces: 4 } }),
        ]),
    ],
    wrap: {
      teacher: '"짝은 어떤 느낌 낱말을 정했고, 어떤 색과 모양으로 나타냈나요?" 두 쌍의 작품을 띄워 낱말과 표현을 이어 말하게 한다. 출구 1번에서 "날카로운 별"을 포근함에 넣은 학생은 별의 뾰족한 끝이 포근한지 되묻는다. 2번에서 "만들고 나서 느낌을 정한다"를 고른 학생에게는 활동 2에서 낱말을 먼저 정해 만든 작품을 떠올리게 한다.',
      exit: [
        { type: 'tool', tool: 'mindmap', options: { topic: '느낌의 색', slots: ['포근함', '상쾌함'], cards: cards([['e1', '연한 살구색'], ['e2', '박하 같은 연두색'], ['e3', '따뜻한 노랑']]) }, prompt: '색 카드를 포근함과 상쾌함으로 나누어 보세요.', target: { sort: { 포근함: ['e1', 'e3'], 상쾌함: ['e2'] } }, difficulty: 0.15 },
        { type: 'choice', prompt: '작품을 만들기 전에 느낌 낱말을 정하면 좋은 까닭은 무엇인가요?', options: ['쓸 색과 모양을 정하기 쉬워져요.', '조각을 적게 붙여도 돼요.', '친구와 똑같이 만들 수 있어요.'], answer: 0, difficulty: 0.15, explain: '느낌 낱말이 있으면 그 느낌에 어울리는 색·모양·크기를 고르기 쉬워요.' },
        { type: 'mood', prompt: '오늘 느낌 낱말을 정해 만들어 본 마음은 어땠나요?' },
      ],
    },
    ws: {
      title: '느낌 낱말로 표현하기',
      items: [
        { type: 'table', prompt: '내가 정한 느낌 낱말에 어울리는 표현을 쓰세요.', columns: ['느낌 낱말', '색', '모양', '크기'], cells: [['포근함', '', '', ''], ['상쾌함', '', '', ''], ['', '', '', '']] },
        fig('포근함을 나타내는 작품이에요. 둥근 조각을 겹쳐 두 개 더 그려 넣으세요.', [pc('circle', '분홍', 'l', 250, 200, 0), pc('circle', '주황', 'm', 310, 180, 0)], '둥근 조각을 겹쳐 포근함 더하기', '둥근 따뜻한 색 조각이 서로 겹친 그림'),
        { type: 'choice', prompt: '상쾌함에 어울리는 색과 모양에 ○ 하세요.', options: ['연초록 나뭇잎', '진한 빨강 별', '검정 네모'], answer: '연초록 나뭇잎' },
        { type: 'draw', prompt: '내가 정한 느낌 낱말을 색과 모양으로 그리세요.' },
      ],
      easy: { note: '포근함은 둥근 모양과 따뜻한 색, 상쾌함은 가벼운 잎 모양과 시원한 색이 어울려요.', items: [
        { type: 'choice', prompt: '포근함에 어울리는 색에 ○ 하세요.', options: ['연한 분홍', '진한 파랑'], answer: '연한 분홍' },
        { type: 'table', prompt: '느낌 낱말과 색을 쓰세요.', columns: ['느낌', '색'], cells: [['포근함', ''], ['상쾌함', '']] },
        { type: 'draw', prompt: '포근함을 동그라미로 그리세요.' },
      ] },
    },
    diff: {
      easy: '맞는 칸에 넣으면 초록 테두리가 생기고, 색종이는 모양 세 가지·색 네 가지만 나와요.',
      base: '스스로 나눈 뒤 확인하고, 색종이에 별·세모와 검정·하양이 더해져요.',
      challenge: '어느 칸에도 넣지 않는 카드가 섞여 있어요. 포근한 작품에 큰 조각과 작은 조각을 함께 넣어 겹침을 더 많이 만들어요.',
    },
    notes: '자주 보이는 어려움: ① 만들고 나서 느낌을 정한다 → 낱말을 먼저 말하게 한다. ② 한 느낌에는 한 가지 표현만 있다고 여긴다 → 짝 작품과 견주어 다르게 나타낸 방법을 찾는다. ③ 상쾌함에 따뜻한 색을 섞는다 → 처음 정한 낱말을 다시 읽게 한다.',
  });

  // ───────────── 15차시 (연습) ─────────────
  make(15, S2, {
    title: '같은 묶음을 되풀이하고 마주 보게 놓아 안정된 느낌 만들기',
    objective: '같은 모양을 되풀이하거나 가운데 선을 기준으로 마주 보게 놓으면 안정되고 질서 있는 느낌이 난다는 것을 말하고, 그렇게 나타낼 수 있다.',
    art: 'a symmetrical paper-cut pattern of blue diamonds mirrored along a vertical fold line, with a repeating row of circles and squares below',
    scene: [
      { motif: 'star', x: 120, y: 56, s: 0.6 }, { motif: 'star', x: 360, y: 56, s: 0.6 }, { motif: 'hills', y: 212 },
      { motif: 'house', x: 100, y: 218 }, { motif: 'house', x: 380, y: 218 }, { motif: 'tree', x: 240, y: 220, s: 1.2 },
      { motif: 'text', x: 240, y: 138, text: '되풀이와 마주 보기', size: 22 },
    ],
    intro: {
      teacher: '색종이 한 장을 반으로 접어 한쪽에만 모양을 그리고 오려 펼치면 양쪽이 같아진다는 것을 보여 준다. "펼친 모양은 어떤 느낌인가요? 왼쪽과 오른쪽 가운데 어디를 더 크게 보게 되나요?" 마주 보는 모양은 차분하고 반듯하며, 같은 묶음이 줄지어 되풀이되면 질서가 느껴진다고 정리한다. 전통 문양인 단청이나 창살처럼 우리 둘레 많은 무늬가 이 방법을 쓴다고 알려 준다. 안정된 느낌이 지루함과 같다는 생각은 다음 시간에 짚는다. 시연 단추로 마주 보는 마름모가 놓이는 모습을 보여 준다.',
      student: '반으로 접어 오린 모양을 펼쳐 보고, 왼쪽과 오른쪽이 어떤지 말해 봅시다.',
      demo: { tool: 'collage', options: { shapes: ['diamond'], colors: ['파랑'] }, sequence: [{ symmetry: 'vertical', has: [{ shape: 'diamond', color: '파랑', min: 2 }], pieces: { min: 4 } }] },
    },
    acts: [
      mind('a1', '활동 1. 안정된 구성과 어수선한 구성 나누기', 12,
        '"이 설명은 줄을 맞춘 구성일까요, 제멋대로 흩어 놓은 구성일까요?" 카드의 낱말(같은 간격, 마주 보게, 흩어서, 크기가 제각각)에 밑줄을 긋게 한다. 같은 묶음을 되풀이하거나 가운데 선을 기준으로 마주 보게 놓으면 안정된 느낌이 난다고 기준을 세운다. "어수선한 구성은 나쁘다"는 학생에게는 신나는 느낌을 낼 때 일부러 어수선하게 쓰기도 한다고 말한다.',
        '구성 설명 카드를 읽고, 안정된 구성인지 어수선한 구성인지 나누어요.',
        [
          sortItem({ prompt: '창살 문양을 설명한 카드를 안정된 구성과 어수선한 구성으로 나누어 보세요.', topic: '문양 구성', d: 0.2,
            slots: [['stable', '안정된 구성'], ['messy', '어수선한 구성']],
            cards: [['a1', '같은 모양이 같은 간격으로 줄지어 있어요'], ['a2', '가운데 선을 기준으로 양쪽이 같아요'], ['a3', '조각 크기가 제각각이고 흩어져 있어요'], ['a4', '방향이 모두 달라서 눈이 어지러워요']],
            sort: { stable: ['a1', 'a2'], messy: ['a3', 'a4'] }, extra: ['ax', '창살은 나무로 만들어요'],
            hint: '줄을 맞추었는지 가운데 선을 기준으로 같은지 낱말에서 찾아요.' }),
          sortItem({ prompt: '교실 사물함 배치를 설명한 카드를 안정된 구성과 어수선한 구성으로 나누어 보세요.', topic: '사물함 배치', d: 0.25,
            slots: [['stable', '안정된 구성'], ['messy', '어수선한 구성']],
            cards: [['b1', '문이 일정한 간격으로 가지런해요'], ['b2', '위아래 줄이 맞아요'], ['b3', '문이 삐뚤게 열려 있어요'], ['b4', '물건이 여기저기 튀어나와 있어요']],
            sort: { stable: ['b1', 'b2'], messy: ['b3', 'b4'] }, extra: ['bx', '사물함 번호는 1번부터예요'] }),
          sortItem({ prompt: '무늬 천을 설명한 카드를 안정된 구성과 어수선한 구성으로 나누어 보세요.', topic: '무늬 천', d: 0.3,
            slots: [['stable', '안정된 구성'], ['messy', '어수선한 구성']],
            cards: [['c1', '꽃 한 묶음이 가로로 되풀이돼요'], ['c2', '가운데 줄기를 기준으로 잎이 마주 보아요'], ['c3', '꽃과 별이 아무렇게나 섞여 있어요'], ['c4', '색이 칸마다 제멋대로 바뀌어요']],
            sort: { stable: ['c1', 'c2'], messy: ['c3', 'c4'] }, extra: ['cx', '천은 옷을 만들 때 써요'],
            predict: { q: '같은 묶음을 되풀이하면 어떤 느낌이 날까요?', options: ['어수선해요', '질서 있고 안정돼요'], answer: 1 },
            conclude: '같은 묶음을 되풀이하거나 마주 보게 놓으면 질서 있고 안정된 느낌이 나요.' }),
        ]),
      col('a2', '활동 2. 마주 보게 놓고 되풀이해 무늬 만들기', 13,
        '"가운데 선을 기준으로 왼쪽에 놓은 조각은 오른쪽에도 같은 자리에 놓여야 해요." 먼저 한쪽을 놓고 거울에 비친 것처럼 반대쪽을 놓게 한다. 되풀이 무늬 문항에서 묶음의 차례를 바꾸는 학생에게는 첫 묶음을 손가락으로 감싸 견주게 한다. 마지막 문항은 안정된 느낌이 나는지 짝에게 물은 뒤에만 점검을 표시하게 한다.',
        '가운데 선을 기준으로 마주 보게 놓거나, 한 묶음을 정해 되풀이해 붙여요.',
        ['diamond', 'circle', 'square', 'triangle'], ['파랑', '주황', '노랑'],
        [
          colItem({ prompt: '마주 보는 무늬를 만들어요. 가운데 세로 선을 기준으로 파랑 마름모를 양쪽에 같은 자리에 두 개 이상 붙여요.', d: 0.25,
            target: { symmetry: 'vertical', has: [{ shape: 'diamond', color: '파랑', min: 2 }], pieces: { min: 4 } },
            ch: { prompt: '더 복잡한 마주 보는 무늬를 만들어요. 가운데 세로 선을 기준으로 파랑 마름모와 노랑 동그라미를 양쪽에 같은 자리에 두 개씩 이상 붙여요.', target: { symmetry: 'vertical', has: [{ shape: 'diamond', color: '파랑', min: 2 }, { shape: 'circle', color: '노랑', min: 2 }], pieces: { min: 6 } } } }),
          colItem({ prompt: '되풀이 무늬를 만들어요. 주황 동그라미와 파랑 네모를 한 묶음으로 왼쪽에서 오른쪽으로 네 번 이상 되풀이해요.', d: 0.3,
            target: { repeat: { times: 4, unit: 2 }, has: [{ shape: 'circle', color: '주황', min: 4 }, { shape: 'square', color: '파랑', min: 4 }] } }),
          colItem({ prompt: '안정된 느낌의 무늬 하나를 정해 만들고 점검해요.', d: 0.1,
            target: { selfCheck: ['되풀이하거나 마주 보게 놓을 방법을 정했어요', '같은 모양을 같은 간격으로 붙였어요', '짝에게 안정된 느낌이 나는지 물었어요'], minPieces: 6 } }),
        ]),
    ],
    wrap: {
      teacher: '"내 무늬를 안정되게 만든 방법은 되풀이였나요, 마주 보기였나요?" 두 작품을 띄워 방법을 말하게 하고 가운데 선이나 묶음을 손가락으로 짚게 한다. 출구 1번에서 "방향이 모두 달라서 눈이 어지러워요"를 안정된 구성에 넣은 학생은 방향이 같은지 되묻는다. 2번에서 "안정된 구성이 항상 좋다"를 고른 학생에게는 신나는 느낌을 낼 때 일부러 어수선하게도 쓴다고 알려 준다.',
      exit: [
        { type: 'tool', tool: 'mindmap', options: { topic: '타일 바닥', slots: slotsOf([['stable', '안정된 구성'], ['messy', '어수선한 구성']]), cards: cards([['e1', '같은 타일이 줄지어 되풀이돼요'], ['e2', '타일 모양이 마구 섞여 있어요']]) }, prompt: '타일 바닥 설명을 안정된 구성과 어수선한 구성으로 나누어 보세요.', target: { sort: { stable: ['e1'], messy: ['e2'] } }, difficulty: 0.15 },
        { type: 'choice', prompt: '안정되고 질서 있는 느낌을 내는 방법으로 알맞은 것은?', options: ['같은 묶음을 되풀이해요.', '크기와 방향을 모두 제각각으로 해요.', '조각을 한곳에 몰아 붙여요.'], answer: 0, difficulty: 0.15, explain: '같은 묶음을 되풀이하면 줄이 맞아 질서와 안정감이 생겨요.' },
        { type: 'mood', prompt: '오늘 되풀이와 마주 보기로 만들어 본 마음은 어땠나요?' },
      ],
    },
    ws: {
      title: '되풀이와 마주 보기',
      items: [
        { type: 'table', prompt: '안정된 구성을 만드는 방법과 그 느낌을 쓰세요.', columns: ['방법', '내 무늬에서 한 일', '느낌'], cells: [['되풀이', '', ''], ['마주 보기', '', '']] },
        fig('가운데 세로 선을 기준으로 오른쪽 마름모와 같은 마름모를 왼쪽에 그려 넣으세요.', [pc('diamond', '파랑', 'm', 360, 200, 0), pc('diamond', '파랑', 'm', 400, 140, 0)], '왼쪽에도 같은 마름모 두 개 그리기', '가운데 선을 기준으로 마름모 두 개가 왼쪽에 대칭으로 놓인 그림'),
        { type: 'choice', prompt: '안정된 느낌을 주는 구성에 ○ 하세요.', options: ['같은 모양을 같은 간격으로 놓기', '크기와 방향을 마음대로 놓기', '한쪽에만 몰아 놓기'], answer: '같은 모양을 같은 간격으로 놓기' },
        { type: 'draw', prompt: '반으로 접어 오린 것처럼 양쪽이 같은 모양을 그리세요.' },
      ],
      easy: { note: '같은 묶음을 되풀이하거나 가운데 선을 기준으로 양쪽을 같게 놓으면 안정된 느낌이 나요.', items: [
        { type: 'choice', prompt: '안정된 느낌에 ○ 하세요.', options: ['줄 맞춘 되풀이 무늬', '아무렇게나 흩어진 무늬'], answer: '줄 맞춘 되풀이 무늬' },
        { type: 'table', prompt: '방법과 느낌을 쓰세요.', columns: ['방법', '느낌'], cells: [['되풀이', ''], ['마주 보기', '']] },
        { type: 'draw', prompt: '동그라미와 네모를 번갈아 줄지어 그리세요.' },
      ] },
    },
    diff: {
      easy: '맞는 칸에 넣으면 초록 테두리가 생기고, 색종이는 모양 네 가지·색 세 가지만 나와요.',
      base: '스스로 나눈 뒤 확인하고, 색종이에 별·반원과 검정·하양이 더해져요.',
      challenge: '어느 칸에도 넣지 않는 카드가 섞여 있어요. 마주 보는 무늬에 모양을 둘 섞어 조각을 여섯 개 이상 놓아요.',
    },
    notes: '자주 보이는 어려움: ① 마주 보기에서 한쪽만 놓고 반대쪽 자리를 놓친다 → 거울에 비친 것처럼 같은 거리에 놓는다고 짚는다. ② 되풀이 묶음의 차례를 바꾼다 → 묶음을 손가락으로 감싸 견주게 한다. ③ 안정된 느낌이 항상 좋다고 여긴다 → 신나는 느낌에는 일부러 어수선하게도 쓴다고 알려 준다. 단청·창살은 이름과 쓰임만 말로 소개하고 이미지는 싣지 않는다.',
  });

  // ───────────── 16차시 (확장) ─────────────
  make(16, S2, {
    title: '보색을 나란히 놓아 눈에 확 띄는 느낌 만들기',
    objective: '보색을 나란히 놓으면 서로 더 선명하게 보이는 강한 느낌이 난다는 것을 말하고, 보색 조각으로 눈에 띄는 작품을 만들 수 있다.',
    art: 'a bold paper-cut poster with a yellow star beside a purple square and an orange triangle beside a blue diamond',
    scene: [
      { motif: 'star', x: 110, y: 66, s: 1.1 }, { motif: 'moon', x: 400, y: 62, s: 0.8 }, { motif: 'hills', y: 212 },
      { motif: 'flower', x: 130, y: 224, color: 'buttercup', s: 1.2 }, { motif: 'tree', x: 380, y: 218 }, { motif: 'cloud', x: 250, y: 74 },
      { motif: 'text', x: 240, y: 140, text: '마주 보는 색', size: 22 },
    ],
    intro: {
      teacher: '노랑 종이 위에 보라 동그라미, 노랑 종이 위에 연한 노랑 동그라미를 각각 붙여 나란히 보여 준다. "어느 동그라미가 더 눈에 확 띄나요?" 보라 쪽이라는 대답이 나오면 "색상환에서 서로 마주 보는 색을 보색이라고 해요. 노랑과 보라, 주황과 파랑, 빨강과 초록이 보색이에요." 보색은 나란히 놓으면 서로를 더 선명하게 만든다고 알려 준다. 보색을 쓰면 항상 좋은 작품이 된다는 생각을 짚는다. 시연 단추로 노랑 별과 보라 네모가 맞닿는 모습을 보여 준다.',
      student: '노랑 위의 보라 동그라미와 연한 노랑 동그라미 가운데 어느 쪽이 더 눈에 띄는지 말해 봅시다.',
      demo: { tool: 'collage', options: { shapes: ['star', 'square'], colors: ['노랑', '보라'] }, sequence: [{ contrast: 'complement', has: [{ shape: 'star', color: '노랑', min: 1 }, { shape: 'square', color: '보라', min: 1 }] }] },
    },
    acts: [
      pick0('a1', '활동 1. 보색 짝만 골라 담기', 12,
        '"색상환에서 노랑의 맞은편은 무슨 색일까요?" 색상환을 보여 주며 서로 마주 보는 색을 손가락으로 이어 보게 한다. 노랑-보라, 주황-파랑, 빨강-초록이 보색 짝이라고 확인한다. 비슷한 색끼리(주황-노랑)는 보색이 아니라 이웃한 색임을 짚는다. "눈에 띄는 색이면 모두 보색"이라는 학생에게는 색상환의 맞은편만 보색이라고 다시 보여 준다.',
        '카드를 읽고, 서로 마주 보는 보색 짝만 바구니에 담아요.',
        [
          pickItem({ prompt: '색 짝 카드 가운데 보색인 것만 담아 보세요.', topic: '보색 짝', d: 0.2,
            cards: [['p1', '노랑과 보라'], ['p2', '빨강과 주황'], ['p3', '파랑과 주황'], ['p4', '초록과 연두']], pick: ['p1', 'p3'],
            hint: '색상환에서 서로 맞은편에 있는 색끼리 짝인지 따져요.' }),
          pickItem({ prompt: '색 짝 카드 가운데 보색인 것만 담아 보세요.', topic: '보색 짝 둘', d: 0.25,
            cards: [['q1', '빨강과 초록'], ['q2', '파랑과 보라'], ['q3', '노랑과 연두'], ['q4', '보라와 노랑']], pick: ['q1', 'q4'] }),
          pickItem({ prompt: '눈에 띄는 포스터 색 짝 가운데 보색인 것만 담아 보세요.', topic: '포스터 색 짝', d: 0.3,
            cards: [['r1', '주황 배경에 파랑 글씨'], ['r2', '노랑 배경에 주황 글씨'], ['r3', '초록 배경에 빨강 글씨'], ['r4', '분홍 배경에 하양 글씨']], pick: ['r1', 'r3'],
            predict: { q: '보색을 나란히 놓으면 두 색이 더 또렷해질까요, 흐려질까요?', options: ['더 또렷해져요', '더 흐려져요'], answer: 0 },
            conclude: '보색을 나란히 놓으면 서로 더 선명하게 보여 눈에 확 띄는 느낌이 나요.' }),
        ]),
      col('a2', '활동 2. 보색 조각을 나란히 붙여 눈에 띄게 하기', 13,
        '"노랑 별 옆에 어떤 색 네모를 붙이면 더 눈에 띌까요?" 색상환의 맞은편 색을 말한 뒤 붙이게 한다. 보색을 넓게 섞어 붙인 학생에게는 한 색을 크게, 다른 색을 작게 붙이면 포인트가 생긴다고 말한다. 마지막 문항은 고른 보색 짝과 그 느낌을 짝에게 말한 뒤에만 점검을 표시하게 한다.',
        '서로 마주 보는 보색 조각을 맞닿게 붙여 눈에 띄게 만들어요.',
        ['star', 'square', 'triangle', 'diamond'], ['노랑', '보라', '주황', '파랑'],
        [
          colItem({ prompt: '노랑과 보라로 눈에 띄는 작품을 만들어요. 노랑 별 셋 이상과 큰 보라 네모 하나를 서로 닿게 붙여요.', d: 0.2,
            target: { contrast: 'complement', has: [{ shape: 'star', color: '노랑', min: 3 }, { shape: 'square', color: '보라', size: 'l', n: 1 }] },
            ch: { prompt: '노랑·보라에 주황·파랑까지 더해요. 노랑 별 셋 이상, 큰 보라 네모 하나, 작은 주황 세모 둘 이상, 작은 파랑 마름모 둘 이상을 붙여요.', target: { contrast: 'complement', has: [{ shape: 'star', color: '노랑', min: 3 }, { shape: 'square', color: '보라', size: 'l', n: 1 }, { shape: 'triangle', color: '주황', size: 's', min: 2 }, { shape: 'diamond', color: '파랑', size: 's', min: 2 }] } } }),
          colItem({ prompt: '주황과 파랑으로 눈에 띄는 작품을 만들어요. 큰 주황 세모 하나와 파랑 마름모 셋 이상을 서로 닿게 붙여요.', d: 0.25,
            target: { contrast: 'complement', has: [{ shape: 'triangle', color: '주황', size: 'l', n: 1 }, { shape: 'diamond', color: '파랑', min: 3 }] } }),
          colItem({ prompt: '내가 고른 보색 짝으로 눈에 띄는 작품을 만들고 점검해요.', d: 0.1,
            target: { selfCheck: ['보색 짝 하나를 골랐어요', '두 색을 서로 닿게 붙였어요', '짝에게 눈에 띄는 까닭을 말했어요'], minPieces: 4 } }),
        ]),
    ],
    wrap: {
      teacher: '"내 작품에서 눈에 가장 먼저 들어오는 곳은 어디였나요? 그곳에는 어떤 보색이 있었나요?" 두 작품을 띄워 눈이 가는 곳을 손가락으로 짚게 한다. 출구 1번에서 "노랑과 연두"를 보색에 담은 학생은 색상환에서 맞은편인지 되묻는다. 2번에서 "보색을 쓰면 항상 좋은 작품"을 고른 학생에게는 작품 전체에 보색만 가득하면 어떨지 묻는다.',
      exit: [
        { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '보색 짝', cards: cards([['e1', '빨강과 초록'], ['e2', '파랑과 연두'], ['e3', '주황과 파랑'], ['e4', '노랑과 주황']]) }, prompt: '색 짝 가운데 보색인 것만 담아 보세요.', target: { pick: ['e1', 'e3'] }, difficulty: 0.15 },
        { type: 'choice', prompt: '보색을 나란히 놓으면 어떤 느낌이 날까요?', options: ['서로 더 선명해서 눈에 확 띄어요.', '서로 흐려져서 조용해져요.', '아무 변화가 없어요.'], answer: 0, difficulty: 0.15, explain: '보색은 서로를 선명하게 만들어 눈에 확 띄는 강한 느낌을 줘요.' },
        { type: 'mood', prompt: '오늘 보색을 나란히 붙여 본 마음은 어땠나요?' },
      ],
    },
    ws: {
      title: '보색 대비',
      items: [
        { type: 'table', prompt: '보색 짝을 이어 쓰세요.', columns: ['색', '보색(마주 보는 색)'], cells: [['노랑', ''], ['주황', ''], ['빨강', '']] },
        fig('노랑 별 옆에 보색인 보라 네모를 붙이려고 해요. 네모를 별 옆에 그려 넣으세요.', [pc('star', '노랑', 'm', 220, 200, 0)], '별 옆에 보라 네모 그리기', '노랑 별 옆에 맞닿은 네모'),
        { type: 'choice', prompt: '파랑의 보색에 ○ 하세요.', options: ['초록', '보라', '주황', '분홍'], answer: '주황' },
        { type: 'draw', prompt: '보색 두 가지로 눈에 띄는 모양 하나를 그리세요.' },
      ],
      easy: { note: '노랑-보라, 주황-파랑, 빨강-초록은 색상환에서 마주 보는 보색 짝이에요.', items: [
        { type: 'choice', prompt: '노랑의 보색에 ○ 하세요.', options: ['보라', '연두'], answer: '보라' },
        { type: 'table', prompt: '보색 짝을 쓰세요.', columns: ['색', '보색'], cells: [['주황', ''], ['빨강', '']] },
        { type: 'draw', prompt: '별과 네모를 보색으로 칠할 색을 쓰며 그리세요.' },
      ] },
    },
    diff: {
      easy: '맞는 카드를 담으면 초록 테두리가 생기고, 색종이는 모양 네 가지·색 네 가지만 나와요.',
      base: '스스로 골라 담은 뒤 확인하고, 색종이에 동그라미·반원과 검정·하양이 더해져요.',
      challenge: '보색 짝을 둘 함께 써서 노랑·보라와 주황·파랑이 한 작품에서 만나도록 붙여요.',
    },
    notes: '자주 보이는 어려움: ① 이웃한 색(주황-노랑)을 보색으로 여긴다 → 색상환에서 맞은편만 보색임을 짚는다. ② 보색을 같은 넓이로 섞어 붙인다 → 한 색을 크게, 한 색을 작게 놓아 포인트를 만들게 한다. ③ 보색을 쓰면 항상 좋은 작품이라고 여긴다 → 작품 전체에 보색만 있으면 눈이 피곤해진다고 말한다. 색상환 그림을 화면에 띄워 준비한다.',
  });

  // ───────────── 17차시 (핵심) ─────────────
  make(17, S2, {
    title: '작품에서 보이는 특징·느낌·생각을 이어서 설명하기',
    objective: '작품에서 보이는 특징과 그것이 주는 느낌, 그 느낌에서 떠오른 생각을 차례로 이어 설명할 수 있다.',
    art: 'a child pointing to a paper-cut artwork with three small cards beside it labeled with a picture, a heart and a lightbulb',
    scene: [
      { motif: 'sun', x: 400, y: 58, s: 0.8 }, { motif: 'cloud', x: 120, y: 54 }, { motif: 'hills', y: 210 },
      { motif: 'flower', x: 120, y: 224, color: 'buttercup', s: 1.1 }, { motif: 'tree', x: 370, y: 218 }, { motif: 'bird', x: 250, y: 90 },
      { motif: 'text', x: 240, y: 142, text: '특징, 느낌, 생각', size: 22 },
    ],
    intro: {
      teacher: '교사가 만든 작품(파랑 반원 여러 개가 겹친 물결 그림)을 보여 주고 "이 작품을 보고 느낀 점을 말해 볼까요?" 학생이 "시원해요"라고만 하면 "무엇을 보고 시원하다고 느꼈나요?"라고 되묻는다. "작품 설명은 보이는 특징 → 느낌 → 생각 순서로 이어 하면 말이 쉬워져요. 보이는 특징은 색·모양·크기, 느낌은 그것이 주는 기분, 생각은 그 느낌에서 떠오른 장면이나 뜻이에요." 느낌만 말하고 근거를 빼는 오개념을 짚는다. 시연 단추로 파랑 반원이 겹치는 모습을 보여 준다.',
      student: '교사가 보여 준 작품에서 보이는 특징 하나와 그것이 주는 느낌을 말해 봅시다.',
      demo: { tool: 'collage', options: { shapes: ['semi'], colors: ['파랑', '하양'] }, sequence: [{ has: [{ shape: 'semi', color: '파랑', min: 4 }, { shape: 'semi', color: '하양', min: 2 }], overlap: 3 }] },
    },
    acts: [
      mind('a1', '활동 1. 설명 문장을 특징·느낌·생각으로 나누기', 9,
        '"이 문장은 눈에 보이는 것을 말하나요, 마음에 드는 기분을 말하나요, 떠오른 생각을 말하나요?" 문장 끝말(~가 있어요, ~해요, ~같아요)을 찾아 밑줄 긋게 한다. 보이는 특징은 색·모양·크기를, 느낌은 기분을, 생각은 떠오른 장면·뜻을 말한다고 기준을 세운다. 느낌 칸에 보이는 것을 넣는 학생에게는 눈을 감으면 알 수 있는지 묻는다.',
        '작품 설명 문장을 읽고, 특징·느낌·생각 가운데 어느 칸인지 넣어요.',
        [
          sortItem({ prompt: '물결 작품 설명 문장을 특징·느낌·생각 세 칸에 나누어 보세요.', topic: '물결 작품', d: 0.2,
            slots: ['특징', '느낌', '생각'],
            cards: [['a1', '파랑 반원이 겹겹이 이어져 있어요'], ['a2', '시원하고 차분해요'], ['a3', '여름 바다에서 파도가 밀려오는 장면이 떠올라요'], ['a4', '맨 아래 조각이 가장 커요']],
            sort: { 특징: ['a1', 'a4'], 느낌: ['a2'], 생각: ['a3'] }, extra: ['ax', '파랑은 하늘색이에요'],
            hint: '눈에 보이는 것인지, 기분인지, 떠오른 장면인지 끝말을 보고 따져요.' }),
          sortItem({ prompt: '낙엽 작품 설명 문장을 특징·느낌·생각 세 칸에 나누어 보세요.', topic: '낙엽 작품', d: 0.25,
            slots: ['특징', '느낌', '생각'],
            cards: [['b1', '주황과 갈색 잎 모양이 흩어져 있어요'], ['b2', '쓸쓸하고 조용해요'], ['b3', '가을이 끝나 가는 때가 떠올라요'], ['b4', '잎마다 크기가 달라요']],
            sort: { 특징: ['b1', 'b4'], 느낌: ['b2'], 생각: ['b3'] }, extra: ['bx', '낙엽은 가을에 떨어져요'] }),
          sortItem({ prompt: '불꽃 작품 설명 문장을 특징·느낌·생각 세 칸에 나누어 보세요.', topic: '불꽃 작품', d: 0.3,
            slots: ['특징', '느낌', '생각'],
            cards: [['c1', '빨강과 노랑 세모가 위로 뾰족해요'], ['c2', '뜨겁고 힘이 넘쳐요'], ['c3', '캠프파이어에서 친구들과 모였던 일이 떠올라요'], ['c4', '한가운데 가장 큰 세모가 있어요']],
            sort: { 특징: ['c1', 'c4'], 느낌: ['c2'], 생각: ['c3'] }, extra: ['cx', '불은 위험해요'],
            predict: { q: '"시원해요"만 말해도 작품 설명이 충분할까요?', options: ['충분해요', '무엇을 보고 그렇게 느꼈는지가 빠졌어요'], answer: 1 },
            conclude: '보이는 특징을 근거로 느낌과 생각을 이어 말해야 듣는 사람이 이해해요.' }),
        ]),
      col('a2', '활동 2. 설명할 거리가 있는 작품 만들기', 9,
        '"느낌 낱말을 정하고, 그 느낌을 보여 주는 특징을 만들어요." 낱말을 정한 뒤 색·모양·크기를 정하는 순서를 지키게 한다. 물결 문항에서 하양을 거의 쓰지 않는 학생에게는 겹쳐진 곳이 어디인지 가리켜 보게 한다. 마지막 문항은 특징·느낌·생각을 차례로 이어 짝에게 말한 뒤에만 점검을 표시하게 한다.',
        '느낌을 보여 주는 특징을 만들고, 특징·느낌·생각을 이어 설명해요.',
        ['semi', 'circle', 'triangle'], ['파랑', '하양', '보라', '노랑'],
        [
          colItem({ prompt: '시원함이 보이는 물결 작품을 만들어요. 큰 파랑 반원 셋 이상과 작은 하양 반원 둘 이상을 겹쳐 붙여요.', d: 0.2,
            target: { has: [{ shape: 'semi', color: '파랑', size: 'l', min: 3 }, { shape: 'semi', color: '하양', size: 's', min: 2 }], overlap: 3 },
            ch: { prompt: '시원함과 고요함이 함께 보이는 작품을 만들어요. 큰 파랑 반원 넷 이상, 작은 하양 반원 셋 이상, 작은 노랑 동그라미 하나를 붙이고 반원들을 겹쳐요.', target: { has: [{ shape: 'semi', color: '파랑', size: 'l', min: 4 }, { shape: 'semi', color: '하양', size: 's', min: 3 }, { shape: 'circle', color: '노랑', size: 's', n: 1 }], overlap: 5 } } }),
          colItem({ prompt: '쓸쓸함이 보이는 작품을 만들어요. 큰 보라 세모 하나와 작은 보라 세모 둘 이상을 서로 떨어뜨려 붙여요.', d: 0.25,
            target: { has: [{ shape: 'triangle', color: '보라', size: 'l', n: 1 }, { shape: 'triangle', color: '보라', size: 's', min: 2 }] } }),
          colItem({ prompt: '내 작품의 특징·느낌·생각을 차례로 이어 설명하고 점검해요.', d: 0.1,
            target: { selfCheck: ['눈에 보이는 특징을 말했어요', '그 특징이 주는 느낌을 말했어요', '그 느낌에서 떠오른 생각을 말했어요'], minPieces: 4 } }),
        ]),
      pair('a3', '활동 3. 짝의 작품 설명 듣고 이어 말하기', 7,
        '"설명을 들은 사람은 짝이 말한 특징을 한 번 더 말하고, 내 느낌도 하나 보태요." 설명자가 특징을 건너뛰고 느낌만 말하면 "무엇을 보고 그렇게 느꼈어요?"라고 되묻게 한다. 활동지 1번에 짝의 설명을 특징·느낌·생각 칸에 받아 적게 한다. 짝의 설명과 내 느낌이 다를 때는 틀린 것이 아니라 다르게 느낀 것임을 말한다.',
        '짝과 번갈아 작품을 설명하고, 듣는 사람은 활동지 1번 표에 받아 적어요.',
        '작품 설명 듣기', [['look', '특징'], ['feel', '느낌'], ['idea', '생각']],
        [
          ['짝의 작품에서 보이는 특징을 짝이 말하게 하고, 활동지 1번 표 특징 칸에 받아 적은 뒤 "다 했어요"를 누르세요.', [['q1', '색'], ['q2', '모양']]],
          ['짝이 말한 느낌과 생각을 이어 받아 적고, 내가 느낀 점도 하나 말한 뒤 "다 했어요"를 누르세요.', [['q1', '기분'], ['q2', '떠오른 장면']]],
          ['역할을 바꾸어 내 설명을 짝이 요약해 말하면 맞는지 확인한 뒤 "다 했어요"를 누르세요.', [['q1', '맞아요'], ['q2', '더 말할래요']]],
        ]),
    ],
    wrap: {
      teacher: '"짝의 설명에서 특징·느낌·생각 가운데 빠진 것은 없었나요?" 두 학생이 짝의 설명을 세 칸에 맞추어 다시 말하게 한다. 출구 1번에서 "맨 아래 조각이 가장 커요"를 느낌에 넣은 학생은 눈에 보이는지 되묻는다. 2번에서 "느낌만 말해도 충분하다"를 고른 학생에게는 활동 1에서 근거가 빠져 이해하기 어려웠던 문장을 떠올리게 한다.',
      exit: [
        { type: 'tool', tool: 'mindmap', options: { topic: '눈 작품', slots: ['특징', '느낌', '생각'], cards: cards([['e1', '하양 동그라미가 크고 작게 쌓여 있어요'], ['e2', '포근하고 조용해요'], ['e3', '눈 오는 아침 학교 가는 길이 떠올라요']]) }, prompt: '눈 작품 설명 문장을 특징·느낌·생각 세 칸에 나누어 보세요.', target: { sort: { 특징: ['e1'], 느낌: ['e2'], 생각: ['e3'] } }, difficulty: 0.15 },
        { type: 'choice', prompt: '작품을 설명할 때 알맞은 순서는 무엇인가요?', options: ['보이는 특징 → 느낌 → 생각', '생각 → 느낌 → 특징', '느낌만 말해요'], answer: 0, difficulty: 0.15, explain: '보이는 특징을 근거로 느낌과 생각을 이어야 듣는 사람이 이해해요.' },
        { type: 'mood', prompt: '오늘 작품을 이어서 설명해 본 마음은 어땠나요?' },
      ],
    },
    ws: {
      title: '특징·느낌·생각 이어 설명하기',
      items: [
        { type: 'table', prompt: '내 작품 설명을 칸마다 쓰세요.', columns: ['설명 칸', '내 작품 설명'], cells: [['보이는 특징', ''], ['주는 느낌', ''], ['떠오른 생각', '']] },
        fig('시원함이 보이는 물결 작품이에요. 반원을 겹쳐 두 개 더 그려 시원함을 더하세요.', [pc('semi', '파랑', 'l', 220, 200, 0), pc('semi', '하양', 's', 280, 180, 0)], '반원을 겹쳐 시원함 더하기', '반원이 겹겹이 놓여 물결처럼 보이는 그림'),
        { type: 'choice', prompt: '"여름 바다에서 파도가 밀려오는 장면이 떠올라요."는 어느 칸인가요?', options: ['보이는 특징', '주는 느낌', '떠오른 생각'], answer: '떠오른 생각' },
        { type: 'short', prompt: '친구 작품의 특징·느낌·생각을 한 문장으로 이어 쓰세요.' },
      ],
      easy: { note: '눈에 보이는 것은 특징, 마음의 기분은 느낌, 떠오른 장면은 생각이에요.', items: [
        { type: 'choice', prompt: '"파랑 반원이 겹겹이 있어요."는 어느 칸인가요?', options: ['특징', '생각'], answer: '특징' },
        { type: 'table', prompt: '작품 설명을 쓰세요.', columns: ['설명 칸', '내 작품 설명'], cells: [['보이는 특징', ''], ['주는 느낌', '']] },
        { type: 'draw', prompt: '설명하고 싶은 작품 한 부분을 그리세요.' },
      ] },
    },
    diff: {
      easy: '맞는 칸에 넣으면 초록 테두리가 생기고, 색종이는 모양 세 가지·색 네 가지만 나와요.',
      base: '스스로 나눈 뒤 확인하고, 색종이에 네모·별과 검정이 더해져요.',
      challenge: '칸에 넣지 않는 카드가 섞여 있어요. 작품에 시원함과 고요함이 함께 보이도록 노랑 달 조각까지 더해요.',
    },
    notes: '자주 보이는 어려움: ① 느낌만 말하고 근거(보이는 특징)를 빼 버린다 → "무엇을 보고 그렇게 느꼈어요?"로 되묻는다. ② 특징 칸에 느낌을 섞는다 → 눈을 감으면 알 수 있는지로 가른다. ③ 짝의 느낌과 내 느낌이 다르면 틀렸다고 여긴다 → 느낌은 다를 수 있음을 알려 준다. 작품은 결과에 그대로 남으니 교사 화면에서 설명하기 좋은 작품을 골라 정리 때 띄운다.',
  });

  // ───────────── 18차시 (연습) ─────────────
  make(18, S2, {
    title: '"쓸쓸함"이라는 설명에 맞게 작품을 고쳐 보기',
    objective: '내가 한 설명과 작품이 어울리는지 따져 어울리지 않는 곳을 찾고, 설명한 느낌에 맞게 조각을 고칠 수 있다.',
    art: 'a lonely small blue circle on a wide pale paper next to a cheerful crowded scene of stars and hearts being compared',
    scene: [
      { motif: 'moon', x: 100, y: 60, s: 0.8 }, { motif: 'star', x: 340, y: 58, s: 0.6 }, { motif: 'hills', y: 212 },
      { motif: 'tree', x: 90, y: 220, s: 0.8 }, { motif: 'flower', x: 370, y: 224, s: 1.2 }, { motif: 'cloud', x: 220, y: 60, s: 0.8 },
      { motif: 'text', x: 240, y: 140, text: '설명과 작품이 어울릴까', size: 22 },
    ],
    intro: {
      teacher: '교사가 칠판에 "쓸쓸함"이라고 쓰고, 별과 하트가 가득 찬 작품을 보여 준다. "이 작품은 쓸쓸함이라는 설명과 어울리나요?" 어울리지 않는다는 대답이 나오면 "어디를 보고 그렇게 생각했나요?"라고 묻는다. "설명한 느낌과 작품의 특징이 서로 맞는지 살펴 고쳐 보면 작품이 더 좋아져요. 쓸쓸함은 비어 있고 작은 조각이 외따로 있는 모습과 어울려요." 설명에 맞게 작품을 고치는 것이 작품을 틀렸다고 하는 것은 아니라고 말한다. 시연 단추로 넓은 빈 바탕 위에 작은 조각 하나가 놓이는 모습을 보여 준다.',
      student: '별과 하트가 가득 찬 작품이 "쓸쓸함"이라는 설명과 어울리는지 말해 봅시다.',
      demo: { tool: 'collage', options: { shapes: ['square', 'circle'], colors: ['하양', '파랑'] }, sequence: [{ has: [{ shape: 'square', color: '하양', size: 'l', n: 1 }, { shape: 'circle', color: '파랑', size: 's', n: 1 }], pieces: { max: 3 } }] },
    },
    acts: [
      mind('a1', '활동 1. 설명과 어울리는 특징과 어울리지 않는 특징 나누기', 12,
        '"쓸쓸함이라는 설명에 이 특징이 어울리나요, 어울리지 않나요?" 카드마다 비어 있는지, 외따로 있는지, 조각이 많은지 손가락으로 짚게 한다. 쓸쓸함에는 빈 곳·작은 조각 하나·차가운 색이 어울리고, 조각이 많고 밝은 색은 어울리지 않는다고 기준을 세운다. "쓸쓸한 작품에 밝은 노랑을 쓰면 안 된다"는 학생에게는 작은 노랑 점이 쓸쓸함을 더 크게 보이게 할 수도 있다고 말한다.',
        '설명한 느낌에 어울리는 특징인지 어울리지 않는 특징인지 나누어요.',
        [
          sortItem({ prompt: '"쓸쓸함" 설명에 어울리는 특징과 어울리지 않는 특징으로 나누어 보세요.', topic: '쓸쓸함 작품', d: 0.2,
            slots: [['fit', '어울려요'], ['nofit', '어울리지 않아요']],
            cards: [['a1', '넓은 빈 바탕이 있어요'], ['a2', '작은 조각 하나가 외따로 있어요'], ['a3', '조각이 가득 겹쳐 있어요'], ['a4', '밝은 색 별이 빽빽해요'], ['a5', '차가운 파랑 계열이에요']],
            sort: { fit: ['a1', 'a2', 'a5'], nofit: ['a3', 'a4'] }, extra: ['ax', '쓸쓸함은 낱말이에요'],
            hint: '빈 곳과 외따로 있는 모습, 차가운 색이 쓸쓸함을 보여 주는지 따져요.' }),
          sortItem({ prompt: '"신나는 느낌" 설명에 어울리는 특징과 어울리지 않는 특징으로 나누어 보세요.', topic: '신나는 작품', d: 0.25,
            slots: [['fit', '어울려요'], ['nofit', '어울리지 않아요']],
            cards: [['b1', '여러 가지 밝은 색이 섞여 있어요'], ['b2', '별과 하트가 흩날려요'], ['b3', '조각이 하나뿐이에요'], ['b4', '어두운 한 가지 색이에요']],
            sort: { fit: ['b1', 'b2'], nofit: ['b3', 'b4'] }, extra: ['bx', '신나는 날이 있어요'] }),
          sortItem({ prompt: '"고요함" 설명에 어울리는 특징과 어울리지 않는 특징으로 나누어 보세요.', topic: '고요한 작품', d: 0.3,
            slots: [['fit', '어울려요'], ['nofit', '어울리지 않아요']],
            cards: [['c1', '곧은 수평선이 있어요'], ['c2', '옅은 한 가지 계열 색이에요'], ['c3', '뾰족한 조각이 여기저기 있어요'], ['c4', '진한 대비 색이 어지럽게 섞여요']],
            sort: { fit: ['c1', 'c2'], nofit: ['c3', 'c4'] }, extra: ['cx', '고요함은 조용함이에요'],
            predict: { q: '설명한 느낌과 작품의 특징이 어긋나면 어떻게 하면 좋을까요?', options: ['그대로 둬요', '어울리게 고쳐요'], answer: 1 },
            conclude: '설명과 특징이 어긋나면 어울리는 쪽으로 조각을 고쳐 느낌을 더 잘 전할 수 있어요.' }),
        ]),
      col('a2', '활동 2. 설명한 느낌에 맞게 조각을 고쳐 만들기', 13,
        '"쓸쓸함을 만들려면 조각을 많이 붙일까요, 적게 붙일까요?" 빈 곳이 느낌을 만든다는 것을 짚으며 조각을 줄여 붙이게 한다. 신나는 느낌 문항에서 조각을 아주 조금만 붙이는 학생에게는 설명한 느낌을 다시 읽게 한다. 마지막 문항은 바꾼 점과 까닭을 짝에게 말한 뒤에만 점검을 표시하게 한다.',
        '설명한 느낌에 어울리도록 조각의 수와 색을 정해 붙여요.',
        ['square', 'circle', 'star', 'heart'], ['하양', '파랑', '노랑', '분홍'],
        [
          colItem({ prompt: '쓸쓸함을 만들어요. 큰 하양 네모 바탕 하나 위에 작은 파랑 동그라미 하나만 붙여요. 조각은 모두 셋 이하로 해요.', d: 0.2,
            target: { has: [{ shape: 'square', color: '하양', size: 'l', n: 1 }, { shape: 'circle', color: '파랑', size: 's', n: 1 }], pieces: { max: 3 } },
            ch: { prompt: '쓸쓸함을 더 크게 만들어요. 큰 하양 네모 바탕 하나 위에 작은 파랑 동그라미 하나만 붙이고, 작은 노랑 별은 바탕 밖에 하나만 두어요. 조각은 모두 셋 이하로 해요.', target: { has: [{ shape: 'square', color: '하양', size: 'l', n: 1 }, { shape: 'circle', color: '파랑', size: 's', n: 1 }, { shape: 'star', color: '노랑', size: 's', n: 1 }], pieces: { max: 3 } } } }),
          colItem({ prompt: '신나는 느낌을 만들어요. 노랑 별 다섯 개 이상과 분홍 하트 셋 이상을 흩어 붙여요.', d: 0.25,
            target: { has: [{ shape: 'star', color: '노랑', min: 5 }, { shape: 'heart', color: '분홍', min: 3 }] } }),
          colItem({ prompt: '내 작품 설명과 어긋난 곳 하나를 찾아 고치고 점검해요.', d: 0.1,
            target: { selfCheck: ['설명한 느낌 낱말을 다시 읽었어요', '어울리지 않는 곳 하나를 찾아 고쳤어요', '바꾼 점과 까닭을 짝에게 말했어요'], minPieces: 3 } }),
        ]),
    ],
    wrap: {
      teacher: '"내 작품에서 설명과 어긋났던 곳은 어디였고 어떻게 고쳤나요?" 두 학생이 고치기 전과 뒤를 말로 견주게 한다. 출구 1번에서 "빽빽한 별"을 쓸쓸함에 어울린다고 고른 학생은 빈 곳이 있는지 되묻는다. 2번에서 "설명이 틀렸으니 설명을 지운다"를 고른 학생에게는 작품을 고치거나 설명을 고치는 두 길이 모두 있음을 알려 준다.',
      exit: [
        { type: 'tool', tool: 'mindmap', options: { topic: '쓸쓸함 작품', slots: slotsOf([['fit', '어울려요'], ['nofit', '어울리지 않아요']]), cards: cards([['e1', '작은 조각 하나가 넓은 빈 곳에 있어요'], ['e2', '밝은 조각이 가득 차 있어요'], ['e3', '차가운 색 한 가지만 썼어요']]) }, prompt: '"쓸쓸함" 설명에 어울리는 특징과 어울리지 않는 특징으로 나누어 보세요.', target: { sort: { fit: ['e1', 'e3'], nofit: ['e2'] } }, difficulty: 0.15 },
        { type: 'choice', prompt: '설명과 작품이 어울리지 않을 때 할 수 있는 일로 알맞은 것은?', options: ['작품이나 설명을 어울리게 고쳐요.', '그냥 두어요.', '다른 친구 작품을 베껴요.'], answer: 0, difficulty: 0.15, explain: '설명과 작품이 어긋나면 어느 쪽이든 고쳐 서로 맞게 할 수 있어요.' },
        { type: 'mood', prompt: '오늘 설명에 맞게 작품을 고쳐 본 마음은 어땠나요?' },
      ],
    },
    ws: {
      title: '설명과 작품 맞추기',
      items: [
        { type: 'table', prompt: '내 설명과 작품이 어긋난 곳과 고친 방법을 쓰세요.', columns: ['어긋난 곳', '고친 방법'], cells: [['', ''], ['', '']] },
        fig('쓸쓸한 느낌을 만들어요. 조각을 한 개 더 지우거나 그리지 말고 빈 곳을 남겨 두세요.', [pc('square', '하양', 'l', 280, 200, 0), pc('circle', '파랑', 's', 340, 240, 0)], '빈 곳을 남겨 쓸쓸함 나타내기', '넓은 빈 곳에 작은 조각 하나만 있는 그림'),
        { type: 'choice', prompt: '쓸쓸함에 어울리는 특징에 ○ 하세요.', options: ['넓은 빈 곳에 작은 조각 하나', '밝은 별이 빽빽한 모습', '여러 색이 어지럽게 섞인 모습'], answer: '넓은 빈 곳에 작은 조각 하나' },
        { type: 'draw', prompt: '신나는 느낌의 작품 한 부분을 그리세요.' },
      ],
      easy: { note: '쓸쓸함은 빈 곳과 외따로 있는 작은 조각, 신나는 느낌은 많은 밝은 조각과 어울려요.', items: [
        { type: 'choice', prompt: '쓸쓸함에 어울리는 것에 ○ 하세요.', options: ['빈 곳이 많아요', '조각이 가득해요'], answer: '빈 곳이 많아요' },
        { type: 'table', prompt: '느낌과 어울리는 특징을 쓰세요.', columns: ['느낌', '어울리는 특징'], cells: [['쓸쓸함', ''], ['신나는 느낌', '']] },
        { type: 'draw', prompt: '쓸쓸한 느낌의 작은 조각 하나를 그리세요.' },
      ] },
    },
    diff: {
      easy: '맞는 칸에 넣으면 초록 테두리가 생기고, 색종이는 모양 네 가지·색 네 가지만 나와요.',
      base: '스스로 나눈 뒤 확인하고, 색종이에 반원·세모와 검정·초록이 더해져요.',
      challenge: '칸에 넣지 않는 카드가 섞여 있어요. 쓸쓸한 작품에 작은 별 하나를 바탕 밖에 더해 느낌을 더 깊게 해요.',
    },
    notes: '자주 보이는 어려움: ① 설명에 맞지 않으면 작품이 틀렸다고 여긴다 → 설명을 고칠 수도 있음을 알려 준다. ② 쓸쓸함에 조각을 많이 붙인다 → 빈 곳이 느낌을 만든다고 짚는다. ③ 신나는 느낌에 조각을 너무 적게 쓴다 → 설명한 느낌을 다시 읽게 한다. 조각 수 제한이 있는 문항은 붙인 조각 수를 학생이 직접 세어 보게 한다.',
  });

  // ───────────── 19차시 (마무리) ─────────────
  make(19, S2, {
    title: '탐색·표현·설명으로 배운 것을 묶고 마지막 작품 완성하기',
    objective: '이 단원에서 배운 탐색하기·느낌 나타내기·설명하기를 묶어 말하고, 마지막 작품을 만들어 스스로 점검할 수 있다.',
    art: 'a child placing a final paper-cut collage on a classroom wall next to three labeled cards for exploring, expressing and explaining',
    scene: [
      { motif: 'sun', x: 410, y: 58, s: 0.9 }, { motif: 'cloud', x: 120, y: 54 }, { motif: 'hills', y: 208 },
      { motif: 'flower', x: 110, y: 224, color: 'buttercup', s: 1.2 }, { motif: 'tree', x: 380, y: 216 }, { motif: 'star', x: 250, y: 76, s: 0.6 },
      { motif: 'text', x: 240, y: 140, text: '살피고, 나타내고, 설명해요', size: 22 },
    ],
    intro: {
      teacher: '단원 동안 만든 작품 사진들을 화면에 한꺼번에 보여 주며 "이 작품들을 만들며 가장 먼저 한 일은 무엇이었나요?"라고 묻는다. 눈·손·귀로 살펴 알아낸 일이 나오면 칠판에 탐색하기, 색·모양·선으로 느낌을 나타낸 일이 나오면 나타내기, 무엇을·어떻게·왜 말한 일이 나오면 설명하기라고 묶어 쓴다. "오늘은 세 가지를 모두 써서 마지막 작품을 만들어요." 배운 것이 서로 따로 놀지 않고 이어진다는 점을 짚는다. 시연 단추로 따뜻한 색 조각이 모이는 모습을 보여 준다.',
      student: '이 단원 작품들을 보며 가장 기억에 남는 활동을 하나 말해 봅시다.',
      demo: { tool: 'collage', options: { shapes: ['circle', 'star'], colors: ['노랑', '분홍'] }, sequence: [{ has: [{ shape: 'circle', color: '노랑', size: 'l', n: 1 }, { shape: 'star', color: '분홍', min: 3 }] }] },
    },
    acts: [
      mind('a1', '활동 1. 배운 일을 탐색하기·나타내기·설명하기로 묶기', 9,
        '"이 일은 살펴서 알아내는 일일까요, 느낌을 나타내는 일일까요, 설명하는 일일까요?" 카드마다 동사(살폈어요, 붙였어요, 말했어요)를 찾아 밑줄 긋게 한다. 눈·손·귀로 살피는 것은 탐색하기, 색·모양·선을 골라 붙이는 것은 나타내기, 무엇을·어떻게·왜를 말하는 것은 설명하기라고 정리한다. "세 가지는 따로따로 하는 일"이라는 학생에게는 한 작품 안에서 세 가지가 모두 쓰였음을 보여 준다.',
        '이 단원에서 한 일 카드를 읽고, 탐색하기·나타내기·설명하기로 나누어요.',
        [
          sortItem({ prompt: '단원에서 한 일 카드를 탐색하기·나타내기·설명하기로 나누어 보세요.', topic: '단원에서 한 일', d: 0.2,
            slots: ['탐색하기', '나타내기', '설명하기'],
            cards: [['a1', '눈을 감고 만져서 알아냈어요'], ['a2', '따뜻한 색 조각을 겹쳐 붙였어요'], ['a3', '무엇을·어떻게·왜 짝에게 말했어요'], ['a4', '손전등으로 비춰 그림자를 살폈어요']],
            sort: { 탐색하기: ['a1', 'a4'], 나타내기: ['a2'], 설명하기: ['a3'] }, extra: ['ax', '숙제를 했어요'],
            hint: '살피는 일인지, 조각으로 표현한 일인지, 말로 알려 준 일인지 동사를 보고 따져요.' }),
          sortItem({ prompt: '친구와 함께한 일 카드를 탐색하기·나타내기·설명하기로 나누어 보세요.', topic: '친구와 한 일', d: 0.25,
            slots: ['탐색하기', '나타내기', '설명하기'],
            cards: [['b1', '짝을 인터뷰해 눈으로 본 것을 적었어요'], ['b2', '소리를 색과 모양으로 바꾸어 붙였어요'], ['b3', '친구 작품에 칭찬·질문·제안을 말했어요'], ['b4', '보색을 나란히 붙여 눈에 띄게 했어요']],
            sort: { 탐색하기: ['b1'], 나타내기: ['b2', 'b4'], 설명하기: ['b3'] }, extra: ['bx', '친구와 놀았어요'] }),
          sortItem({ prompt: '작품을 고친 일 카드를 탐색하기·나타내기·설명하기로 나누어 보세요.', topic: '작품을 고친 일', d: 0.3,
            slots: ['탐색하기', '나타내기', '설명하기'],
            cards: [['c1', '고치기 전과 뒤를 견주어 살폈어요'], ['c2', '쓸쓸함에 맞게 조각을 줄여 붙였어요'], ['c3', '달라진 점을 짝에게 말해 주었어요'], ['c4', '설명과 작품이 어울리는지 살펴보았어요']],
            sort: { 탐색하기: ['c1', 'c4'], 나타내기: ['c2'], 설명하기: ['c3'] }, extra: ['cx', '작품을 벽에 붙였어요'],
            predict: { q: '탐색하기·나타내기·설명하기는 서로 이어져 있을까요?', options: ['따로따로예요', '서로 이어져 있어요'], answer: 1 },
            conclude: '잘 살피면 나타낼 거리가 생기고, 나타낸 것을 설명하면 더 깊이 이해해요.' }),
        ]),
      col('a2', '활동 2. 마지막 작품 만들고 자기 점검하기', 16,
        '"이 단원에서 가장 마음에 든 느낌 하나를 골라 마지막 작품으로 만들어요." 느낌 낱말을 정하고, 알맞은 색·모양·크기를 정한 뒤 붙이게 한다. 노랑 해 문항에서 별만 붙이는 학생에게는 가운데 큰 동그라미가 있는지 묻는다. 마지막 문항은 활동지 자기 평가 표를 채우며 탐색·나타내기·설명하기를 스스로 돌아본 뒤에만 점검을 표시하게 한다.',
        '이 단원에서 배운 것을 모두 써서 마지막 작품을 만들고, 스스로 점검해요.',
        ['circle', 'star', 'heart', 'leaf'], ['노랑', '분홍', '초록', '파랑'],
        [
          colItem({ prompt: '밝은 마음을 나타내요. 큰 노랑 동그라미 하나 둘레에 분홍 별 셋 이상을 붙여요.', d: 0.2,
            target: { has: [{ shape: 'circle', color: '노랑', size: 'l', n: 1 }, { shape: 'star', color: '분홍', min: 3 }] },
            ch: { prompt: '밝고 포근한 마음을 나타내요. 큰 노랑 동그라미 하나 둘레에 분홍 별 다섯 이상과 작은 분홍 하트 셋 이상을 붙이고 일부를 겹쳐요.', target: { has: [{ shape: 'circle', color: '노랑', size: 'l', n: 1 }, { shape: 'star', color: '분홍', min: 5 }, { shape: 'heart', color: '분홍', size: 's', min: 3 }], overlap: 3 } } }),
          colItem({ prompt: '싱그러운 마음을 나타내요. 초록 나뭇잎 다섯 장 이상과 파랑 동그라미 둘 이상을 붙여요.', d: 0.25,
            target: { has: [{ shape: 'leaf', color: '초록', min: 5 }, { shape: 'circle', color: '파랑', min: 2 }] } }),
          colItem({ prompt: '내가 정한 느낌으로 마지막 작품을 만들고, 단원에서 배운 세 가지를 돌아보며 점검해요.', d: 0.1,
            target: { selfCheck: ['잘 살펴 알아낸 것을 하나 골랐어요', '느낌에 어울리는 색·모양·크기로 나타냈어요', '무엇을·어떻게·왜를 짝에게 설명했어요', '활동지 자기 평가 표를 채웠어요'], minPieces: 5 } }),
        ]),
    ],
    wrap: {
      teacher: '"이 단원에서 가장 잘한 일은 탐색하기, 나타내기, 설명하기 가운데 무엇인가요? 앞으로 더 해 보고 싶은 것은요?" 두세 명의 자기 평가를 듣고 다음 단원에서 이어질 일을 한 줄로 알려 준다. 출구 1번에서 "무엇을·어떻게·왜 말했어요"를 나타내기에 넣은 학생은 말로 하는 일인지 조각으로 하는 일인지 되묻는다. 2번에서 "한 가지만 잘하면 된다"를 고른 학생에게는 활동 1의 마지막 문항을 떠올리게 한다.',
      exit: [
        { type: 'tool', tool: 'mindmap', options: { topic: '단원에서 한 일', slots: ['탐색하기', '나타내기', '설명하기'], cards: cards([['e1', '눈과 귀로 살펴 알아냈어요'], ['e2', '느낌에 맞게 색과 모양을 골라 붙였어요'], ['e3', '무엇을·어떻게·왜를 말했어요']]) }, prompt: '단원에서 한 일 카드를 탐색하기·나타내기·설명하기로 나누어 보세요.', target: { sort: { 탐색하기: ['e1'], 나타내기: ['e2'], 설명하기: ['e3'] } }, difficulty: 0.15 },
        { type: 'choice', prompt: '이 단원에서 배운 세 가지가 서로 이어지는 모습으로 알맞은 것은?', options: ['살펴 알아낸 것을 나타내고, 나타낸 것을 설명해요.', '살피기와 나타내기는 서로 상관이 없어요.', '설명은 작품과 상관이 없어요.'], answer: 0, difficulty: 0.15, explain: '살펴서 알아낸 것이 나타낼 거리가 되고, 나타낸 것을 설명하면 더 깊이 이해해요.' },
        { type: 'mood', prompt: '이 단원을 마친 마음은 어떤가요?' },
      ],
    },
    ws: {
      title: '미적 체험 돌아보기',
      items: [
        { type: 'table', prompt: '이 단원에서 배운 세 가지를 스스로 돌아보세요.', columns: ['배운 일', '잘한 점', '더 해 보고 싶은 점'], cells: [['탐색하기', '', ''], ['나타내기', '', ''], ['설명하기', '', '']] },
        fig('마지막 작품에 쓸 큰 동그라미 둘레에 작은 조각 두 개를 더 그려 넣으세요.', [pc('circle', '노랑', 'l', 280, 200, 0), pc('star', '분홍', 's', 200, 200, 0)], '둘레에 조각 더하기', '큰 동그라미 둘레에 작은 조각이 더해진 그림'),
        { type: 'choice', prompt: '"무엇을·어떻게·왜를 말했어요."는 어느 일인가요?', options: ['탐색하기', '나타내기', '설명하기'], answer: '설명하기' },
        { type: 'short', prompt: '이 단원에서 가장 기억에 남는 활동과 까닭을 한 문장으로 쓰세요.' },
      ],
      easy: { note: '살피는 일은 탐색하기, 색·모양으로 표현하는 일은 나타내기, 말로 알려 주는 일은 설명하기예요.', items: [
        { type: 'choice', prompt: '눈과 손으로 살펴 알아내는 일에 ○ 하세요.', options: ['탐색하기', '설명하기'], answer: '탐색하기' },
        { type: 'table', prompt: '배운 일과 잘한 점을 쓰세요.', columns: ['배운 일', '잘한 점'], cells: [['탐색하기', ''], ['설명하기', '']] },
        { type: 'draw', prompt: '가장 마음에 든 작품 한 부분을 그리세요.' },
      ] },
    },
    diff: {
      easy: '맞는 칸에 넣으면 초록 테두리가 생기고, 색종이는 모양 네 가지·색 네 가지만 나와요.',
      base: '스스로 나눈 뒤 확인하고, 색종이에 반원·네모와 검정·하양이 더해져요.',
      challenge: '칸에 넣지 않는 카드가 섞여 있어요. 마지막 작품에 별과 하트를 함께 겹쳐 느낌을 더 풍부하게 나타내요.',
    },
    notes: '이 단원의 오개념을 한 번에 점검한다: ① 매체는 그림 도구뿐이다 ② 아는 대상은 살필 필요가 없다 ③ 색·선의 느낌은 모두에게 똑같다 ④ 작품 설명은 "예뻐요"면 된다 ⑤ 설명과 작품이 어긋나면 작품이 틀렸다. 활동 1의 3번과 출구 1번 결과로 남은 오개념을 학생별로 확인하고, 자기 평가 표의 "더 해 보고 싶은 점"과 견주어 다음 단원 첫 시간에 짧게 다시 다룬다.',
  });

  PaperLessons.registerUnit({
    id: 'g5-art-1-01', schema: 'edu-unit.v1', catalogUnit: UNIT,
    grade: 5, subject: '미술', unitTitle: TITLE,
    flow: '앞의 열 차시는 여러 감각과 매체로 자신과 대상을 탐색하는 힘을 쌓습니다. 1~4차시는 매체마다 잘 나타나는 특징을 견주고, 내 몸을 눈과 손끝으로 살피며, 빛과 그림자·직접 살핀 나의 모습을 찾습니다. 5~7차시는 찢기·오리기와 겹쳐 붙이는 순서·크기 차이로 거리감을 내는 방법을 직접 써 보고, 8~10차시는 작품을 무엇을·어떻게·왜로 설명하고 칭찬·질문·제안을 나누어 고칩니다. 뒤의 아홉 차시는 감각적 특징과 느낌·생각을 관련지어 나타냅니다. 11~13차시에서 색·선·소리가 주는 느낌을 찾고, 14~16차시에서 느낌 낱말에 맞게 색·모양·구성·보색을 골라 만들며, 17~19차시에서 특징·느낌·생각을 이어 설명하고 설명에 맞게 고쳐 단원을 스스로 돌아봅니다.',
    refs: {},
    lessons,
  });
})();
