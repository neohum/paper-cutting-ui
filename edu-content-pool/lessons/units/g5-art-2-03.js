/* 5학년 2학기 미술 3. 감상 — 작품을 시대·지역 배경과 연결해 이해하기(1~10차시), 작품의 내용과 형식을 분석해 특징 설명하기(11~19차시).
 * 같은 꼴이 되풀이되는 칸(차시 머리·카드 판 문항 모양)만 아래 도우미로 만들고, 차시 내용은 모두 그대로 적는다.
 * 작품은 이름·작가·때·곳만 글로 말하고 그림은 싣지 않는다. 쓴 작품은 모두 작가가 세상을 떠난 지 오래된 작품이거나 전통 미술이다:
 * 몽유도원도(안견), 세한도(김정희), 인왕제색도(정선), 씨름도·서당도(김홍도 풍속화), 단오풍정(신윤복), 까치호랑이 민화, 책가도, 무용총 수렵도·사신도(고구려 고분 벽화),
 * 신라 금관, 반가사유상, 석굴암, 고려 상감 청자·수월관음도·팔만대장경판·나전 칠기, 분청사기, 조선 달항아리, 단청·오방색·색동·조각보,
 * 서양 작품은 모나리자(레오나르도 다 빈치), 별이 빛나는 밤(고흐), 인상, 해돋이(모네)뿐이다.
 */
(function () {
  'use strict';
  const UNIT = 'g5-미술-2학기-3';
  const TITLE = '3. 감상';
  const S1 = '[6미03-01]';
  const S2 = '[6미03-02]';
  const art = (what) => `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`;
  const scene = (layers) => ({ viewBox: [480, 270], layers });
  // 그림 장면: 기본 바탕(해·구름·언덕) 위에 차시마다 다른 모티프와 문구를 얹는다
  const scn = (more, text, size) => scene([{ motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 110, y: 50 }, { motif: 'hills', y: 212 }].concat(more, [{ motif: 'text', x: 250, y: 146, text, size: size || 22 }]));
  const lessonHead = (n, std) => ({
    id: `g5-art-2-03-${String(n).padStart(2, '0')}`, schema: 'edu-lesson.v1',
    catalog: { unit: UNIT, lesson: n }, grade: 5, subject: '미술', unitTitle: TITLE,
    standards: Array.isArray(std) ? std : [std], minutes: 40, formats: ['chromebook', 'projector', 'print'],
  });
  // 짝 활동(말하기·실제 재료) 문항: 화면에는 할 일을 떠올리게 하는 낱말 판만 보이고, 하고 나서 '다 했어요'를 누른다
  const talk = (prompt, topic, labels, words) => ({
    prompt, free: true, talk: true, difficulty: 0,
    toolOptions: { topic, slots: labels.map((label, i) => ({ id: `k${i + 1}`, label })), cards: words.map((text, i) => ({ id: `w${i + 1}`, text })) },
  });
  const ids = (p, texts) => texts.map((text, i) => ({ id: p + (i + 1), text }));
  // 나누기: slots[i] 칸에 groups[i] 카드들. extra는 어느 칸에도 안 들어가는 함정 카드(도전 단계에서만 나온다)
  const sortItem = (o) => {
    const flat = []; const map = {};
    o.slots.forEach((s, i) => { map[s] = []; o.groups[i].forEach((t) => { const id = 'c' + (flat.length + 1); flat.push({ id, text: t }); map[s].push(id); }); });
    const it = { prompt: o.p, toolOptions: Object.assign({ topic: o.topic, slots: o.slots, cards: flat }, o.mode ? { mode: o.mode } : {}), hints: o.hint ? [o.hint] : undefined, target: { sort: map }, difficulty: o.d || 0.2 };
    if (o.extra) it.levels = { challenge: { toolOptions: { cards: flat.concat([{ id: 'cx', text: o.extra }]) } } };
    if (o.predict) it.predict = o.predict;
    if (o.conclude) it.conclude = o.conclude;
    return it;
  };
  // 잇기: pairs[i] = [왼쪽 말, 맞는 카드]. extra는 짝이 없는 함정 카드
  const matchItem = (o) => {
    const slots = o.pairs.map((q, i) => ({ id: 's' + (i + 1), label: q[0] }));
    const cards = o.pairs.map((q, i) => ({ id: 'c' + (i + 1), text: q[1] }));
    const mt = {}; o.pairs.forEach((q, i) => { mt['s' + (i + 1)] = 'c' + (i + 1); });
    const withX = (o.dist || []).map((t, i) => ({ id: 'cx' + (i + 1), text: t }));
    const it = { prompt: o.p, toolOptions: { mode: 'match', topic: o.topic, slots, cards: cards.concat(withX) }, hints: o.hint ? [o.hint] : undefined, target: { match: mt }, difficulty: o.d || 0.2 };
    if (o.extra) it.levels = { challenge: { toolOptions: { cards: cards.concat(withX, [{ id: 'cy', text: o.extra }]) } } };
    if (o.predict) it.predict = o.predict;
    if (o.conclude) it.conclude = o.conclude;
    return it;
  };
  // 고르기: yes 카드만 바구니에 담는다
  const pickItem = (o) => {
    const cards = o.yes.concat(o.no).map((text, i) => ({ id: 'c' + (i + 1), text }));
    const it = { prompt: o.p, toolOptions: { mode: 'pick', topic: o.topic, basket: o.basket, cards }, hints: o.hint ? [o.hint] : undefined, target: { pick: o.yes.map((_, i) => 'c' + (i + 1)) }, difficulty: o.d || 0.2 };
    if (o.predict) it.predict = o.predict;
    if (o.conclude) it.conclude = o.conclude;
    return it;
  };
  // 차례 놓기: texts는 바른 차례. 교구가 섞어서 보여 준다
  const orderItem = (o) => {
    const cards = o.texts.map((text, i) => ({ id: 'o' + (i + 1), text }));
    const opts = { mode: 'order', cards }; if (o.axis) opts.axis = o.axis; if (o.slots) opts.slots = o.slots;
    const it = { prompt: o.p, toolOptions: opts, hints: o.hint ? [o.hint] : undefined, target: { order: cards.map((c) => c.id) }, difficulty: o.d || 0.2 };
    if (o.predict) it.predict = o.predict;
    if (o.conclude) it.conclude = o.conclude;
    return it;
  };
  // 빈칸 채우기: lines[i] = [빈칸이 든 글('___'), 맞는 카드]. dist는 맞는 칸이 없는 함정 카드
  const fillItem = (o) => {
    const slots = o.lines.map((q, i) => ({ id: 'b' + (i + 1), label: q[0] }));
    const cards = o.lines.map((q, i) => ({ id: 'c' + (i + 1), text: q[1] })).concat((o.dist || []).map((t, i) => ({ id: 'cx' + (i + 1), text: t })));
    const ft = {}; o.lines.forEach((q, i) => { ft['b' + (i + 1)] = 'c' + (i + 1); });
    const it = { prompt: o.p, toolOptions: { mode: 'fill', topic: o.topic, slots, cards }, hints: o.hint ? [o.hint] : undefined, target: { fill: ft }, difficulty: o.d || 0.2 };
    if (o.predict) it.predict = o.predict;
    if (o.conclude) it.conclude = o.conclude;
    return it;
  };
  // 차시 한 편을 짜는 틀: 도입·전개(활동 2~3개)·정리 세 단계의 모양만 맞춘다
  const build = (o) => {
    const mins = o.acts.length === 3 ? [9, 9, 8] : [13, 13];
    return Object.assign({
      title: o.title, objective: o.objective,
      illustration: { prompt: art(o.ill), scene: o.scene },
      stages: [
        { id: 'intro', title: '도입', minutes: 6, teacher: o.intro.teacher, student: o.intro.student, demo: o.intro.demo },
        {
          id: 'main', title: '전개', minutes: 26,
          activities: o.acts.map((a, i) => Object.assign({
            id: 'a' + (i + 1), title: `활동 ${i + 1}. ${a.title}`, minutes: mins[i], tool: a.tool,
            teacher: a.teacher, task: a.task, levels: a.levels || (a.tool === 'mindmap' || a.tool === 'timeline' || a.tool === 'story' ? { easy: { live: true, instant: true }, base: {}, challenge: {} } : { easy: {}, base: {}, challenge: {} }),
            items: a.items,
          }, a.pair ? { pair: true } : {})),
        },
        { id: 'wrapup', title: '정리', minutes: 8, teacher: o.wrap.teacher, exitTicket: o.wrap.exit },
      ],
      worksheet: o.ws, differentiation: o.diff, teacherNotes: o.notes,
    }, o.safety ? { safety: o.safety } : {});
  };
  const lessons = [];
  const L = (n, std, o) => lessons.push(Object.assign(lessonHead(n, std), build(o)));

    // ───────────── 1차시 (단원 도입) ─────────────
  L(1, S1, {
    title: '작품 설명표에서 누가·언제·왜를 찾아 읽기',
    objective: '작품 옆 설명표에서 만든 사람과 만든 때, 만든 까닭을 찾아 나누고, 그 정보가 작품을 이해하는 데 어떻게 쓰이는지 말할 수 있다.',
    ill: 'a child reading a small label card beside a long hanging scroll painting of misty mountains in a quiet museum hall',
    scene: scn([{ motif: 'mountain', x: 120, y: 210, s: 1.2 }, { motif: 'tree', x: 380, y: 218, s: 1 }, { motif: 'bird', x: 300, y: 92 }], '설명표에는 단서가 있어요'),
    intro: {
      teacher: '미술관 작품 옆 설명표를 크게 띄우거나 칠판에 흉내 내어 쓴다(작품 이름·작가·연도). "작품 이름만 보고 지나가는 것과, 이 작은 글을 읽고 다시 보는 것은 무엇이 다를까요?" 두세 명의 대답을 받는다. "그림만 봐도 충분하다"는 생각이 나오면 "이 그림을 그린 사람이 언제 살았는지 그림만 보고 알 수 있나요?"라고 되묻는다. 오늘은 설명표에서 \'누가·언제·무슨 일로\' 세 가지를 찾아 읽는다고 연다. 시연 단추로 설명 카드가 세 칸으로 나뉘는 모습을 보여 준다.',
      student: '미술관에서 작품 옆에 붙은 작은 설명표를 본 적이 있나요? 거기에 어떤 정보가 적혀 있었는지 떠올려 봅시다.',
      demo: { tool: 'mindmap', options: { topic: '작품 설명표', slots: ['누가', '언제', '어떤 일로'], cards: [{ id: 'd1', text: '화가가 그렸어요' }, { id: 'd2', text: '조선 시대에 그렸어요' }, { id: 'd3', text: '친구에게 선물하려고 그렸어요' }] }, sequence: [{ sort: { 누가: ['d1'], 언제: ['d2'], '어떤 일로': ['d3'] } }] },
    },
    acts: [
      {
        title: '설명표 글을 세 칸으로 나누기', tool: 'mindmap',
        teacher: '"이 글은 만든 사람을 말하나요, 만든 때를 말하나요, 만든 까닭을 말하나요?" 카드마다 먼저 물어 칸을 정하게 한다. \'조선 세종 때예요\'와 \'1447년에 그렸어요\'가 모두 \'언제\'라는 것을 짚는다. \'어떤 일로\'에는 그림을 그리게 된 사정이 들어간다고 알려 준다. 도전 단계의 \'그림이 마음에 들어요\'는 설명표 정보가 아니라 내 느낌이므로 어디에도 넣지 않게 한다.',
        task: '설명표 글을 읽고, 누가·언제·어떤 일로 가운데 어느 정보인지 칸에 나누어 넣어요.',
        items: [
          sortItem({ p: '몽유도원도 설명표 카드를 누가·언제·어떤 일로 칸에 나누어 보세요.', topic: '몽유도원도', slots: ['누가', '언제', '어떤 일로'], groups: [['안견이 그렸어요'], ['1447년에 그렸어요', '조선 세종 때예요'], ['안평대군의 꿈 이야기를 듣고 그렸어요']], extra: '그림이 마음에 들어요', hint: '카드가 사람 이름, 때, 그리게 된 사정 가운데 무엇을 말하는지 먼저 정해요.', d: 0.15 }),
          sortItem({ p: '세한도 설명표 카드를 누가·언제·어떤 일로 칸에 나누어 보세요.', topic: '세한도', slots: ['누가', '언제', '어떤 일로'], groups: [['김정희가 그렸어요'], ['1844년에 그렸어요', '조선 후기예요'], ['제주도 귀양살이 중에 제자 이상적에게 그려 주었어요']], extra: '소나무가 멋있어요', d: 0.2 }),
          sortItem({ p: '인왕제색도 설명표 카드를 누가·언제·어떤 일로 칸에 나누어 보세요.', topic: '인왕제색도', slots: ['누가', '언제', '어떤 일로'], groups: [['정선이 그렸어요', '화가 정선이에요'], ['1751년에 그렸어요'], ['비가 갠 뒤의 인왕산을 보고 그렸어요']], extra: '산이 커서 놀랐어요', d: 0.25,
            predict: { q: '설명표에 \'어떤 일로\'가 없으면 작품을 이해하기 쉬울까요?', options: ['더 쉬워요', '그림 뒤 이야기를 놓쳐요'], answer: 1 }, conclude: '그린 사정을 알면 같은 그림도 이야기가 있는 그림으로 다시 보여요.' }),
        ],
      },
      {
        title: '몽유도원도 구도를 도형으로 옮기기', tool: 'collage',
        teacher: '"꿈속 복숭아밭은 그림 어느 쪽에 펼쳐져 있었을까요?" 설명표에서 알게 된 \'꿈 이야기\'를 구도와 이어 말하게 한다. 도형은 그림을 똑같이 베끼는 것이 아니라 어디에 무엇이 있는지 간단히 나타내는 지도라고 말해 준다. 모양을 고르다 시간이 가는 학생에게는 "산은 세모, 꽃은 동그라미로 정해요"라고 말해 준다.',
        task: '설명표를 읽고 알게 된 꿈속 복숭아밭을 산(세모)과 꽃(동그라미)으로 간단히 나타내요.',
        levels: { easy: { shapes: ['triangle', 'circle', 'square', 'leaf'], colors: ['갈색', '분홍', '초록', '하양'], sizes: ['m', 'l'] }, base: { shapes: ['triangle', 'circle', 'square', 'leaf', 'star', 'rect'] }, challenge: {} },
        items: [
          { prompt: '꿈속 복숭아밭을 나타내요. 갈색 세모(산) 두 개 이상과 분홍 동그라미(복숭아꽃) 다섯 개 이상을 붙여요.', target: { has: [{ shape: 'triangle', color: '갈색', min: 2 }, { shape: 'circle', color: '분홍', min: 5 }] }, difficulty: 0.15, hints: ['산과 꽃이 각각 몇 개 필요한지 세면서 붙여요.'] },
          { prompt: '산 둘레에 복숭아밭이 둘러싼 모습을 나타내요. 갈색 큰 세모 하나 위에 분홍 동그라미 세 개 이상을 겹쳐요.', target: { has: [{ shape: 'triangle', color: '갈색', size: 'l', n: 1 }, { shape: 'circle', color: '분홍', min: 3 }], overlap: 1 }, difficulty: 0.25 },
          { prompt: '내가 읽은 설명표 정보를 도형 그림에 담고 점검해요.', target: { selfCheck: ['누가 그렸는지 짝에게 말했어요', '그린 때를 짝에게 말했어요', '그린 까닭을 도형으로 하나 표시했어요'], minPieces: 4 }, difficulty: 0.1 },
        ],
      },
      {
        title: '설명표를 소리 내어 읽고 알려 주기 (짝 활동)', tool: 'mindmap', pair: true,
        teacher: '짝끼리 가져온 작품 사진이나 교실에 붙은 작품 설명표 한 장을 정해 "누가, 언제, 무슨 일로" 순서로 읽어 주게 한다. 이름만 읽고 끝내는 짝에게는 "이 사람이 살던 때는 우리와 얼마나 다를까요?"라고 물어 때 정보를 더 말하게 한다. 짝에게 새로 알게 된 것은 활동지 3번에 쓰게 한다.',
        task: '짝에게 설명표를 읽어 주고, 새로 알게 된 것 하나를 이야기해요.',
        levels: { easy: { live: true }, base: {}, challenge: {} },
        items: [
          talk('설명표를 보고 만든 사람과 만든 때를 짝에게 읽어 주고 "다 했어요"를 누르세요.', '설명표 읽어 주기', ['누가', '언제'], ['이름', '연도', '시대']),
          talk('만든 사정이 적혀 있다면 짝에게 한 문장으로 말하고 "다 했어요"를 누르세요.', '만든 까닭 말하기', ['사정', '내 말로'], ['그리게 된 일', '받을 사람']),
          talk('설명표를 읽고 나서 그림이 다르게 보인 점을 짝에게 말하고 활동지에 쓴 뒤 "다 했어요"를 누르세요.', '다시 보기', ['처음 느낌', '읽은 뒤 느낌'], ['그림만 봤을 때', '설명을 읽은 뒤']),
        ],
      },
    ],
    wrap: {
      teacher: '"설명표에서 가장 도움이 된 정보는 무엇인가요?" 두세 명이 말하게 한다. "그냥 이름과 연도만 외우면 돼요"라고 말하는 학생에게는 "그 정보가 그림을 보는 눈을 어떻게 바꿨나요?"라고 되묻는다. 출구 1번에서 \'언제\'와 \'어떤 일로\'를 바꿔 놓은 학생은 다음 시간 도입에 설명표 한 장을 함께 다시 읽는다.',
      exit: [
        { type: 'tool', tool: 'mindmap', options: { topic: '단오풍정', slots: ['누가', '언제', '어떤 일로'], cards: [{ id: 'e1', text: '신윤복이 그렸어요' }, { id: 'e2', text: '조선 후기에 그렸어요' }, { id: 'e3', text: '단옷날 풍속을 그렸어요' }] }, prompt: '단오풍정 설명표 카드를 누가·언제·어떤 일로 칸에 나누어 보세요.', target: { sort: { 누가: ['e1'], 언제: ['e2'], '어떤 일로': ['e3'] } }, difficulty: 0.15 },
        { type: 'choice', prompt: '작품 설명표를 읽는 까닭으로 가장 알맞은 것은 무엇인가요?', options: ['작품 값을 알려고', '작품이 만들어진 사정을 알고 더 깊이 보려고', '작품에 점수를 매기려고'], answer: 1, difficulty: 0.15, explain: '설명표는 그림 뒤의 사람·때·사정을 알려 주어 작품을 더 깊이 보게 도와요.' },
        { type: 'short', prompt: '오늘 읽은 설명표에서 가장 궁금했던 점 한 가지와 그 까닭을 쓰세요.' },
      ],
    },
    ws: {
      title: '작품 설명표 읽기',
      items: [
        { type: 'table', prompt: '짝과 읽은 설명표에서 정보를 찾아 쓰세요.', columns: ['작품 이름', '누가', '언제', '어떤 일로'], cells: [['', '', '', ''], ['', '', '', '']] },
        { type: 'choice', prompt: '\'언제\'에 해당하는 정보에 ○ 하세요.', options: ['안견이 그렸어요', '1447년에 그렸어요', '꿈 이야기를 그렸어요', '산이 멋있어요'], answer: '1447년에 그렸어요' },
        { type: 'short', prompt: '설명표를 읽고 나서 작품이 다르게 보인 점을 쓰세요.' },
        { type: 'draw', prompt: '설명표에서 알게 된 정보 가운데 하나를 골라 그림이나 기호로 나타내세요.' },
      ],
      easy: {
        note: '누가는 사람, 언제는 때, 어떤 일로는 그리게 된 사정이에요.',
        items: [
          { type: 'choice', prompt: '만든 사람을 알려 주는 말에 ○ 하세요.', options: ['조선 후기', '김정희가 그렸어요'], answer: '김정희가 그렸어요' },
          { type: 'short', prompt: '설명표에서 찾은 정보 하나를 쓰세요.' },
          { type: 'draw', prompt: '설명표에서 알게 된 것을 그리세요.' },
        ],
      },
    },
    diff: {
      easy: '카드를 놓으면 바로 맞는지 표시되고, 색종이는 모양 네 가지·색 네 가지·크기 두 가지만 나와요.',
      base: '스스로 나눈 뒤 확인하고, 모양 여섯 가지와 모든 색을 써요.',
      challenge: '설명표 정보가 아닌 \'내 느낌\' 카드가 섞여 있어 남겨야 하고, 산과 꽃을 겹친 구도를 만들어요.',
    },
    notes: '자주 보이는 어려움: ① 연도와 시대 이름을 서로 다른 칸에 넣는다 → 둘 다 \'언제\'에 속한다고 짚는다. ② 내 느낌(마음에 들어요)을 설명표 정보로 여긴다 → 설명표에는 만든 사람·때·사정처럼 사실이 적힌다고 말해 준다. ③ 외우는 것이 감상이라고 생각한다 → 정보를 알면 그림이 어떻게 달라 보이는지를 묻는다. 확인 필요: 작품 연도와 작가는 수업 전에 미술관 누리집 설명과 한 번 맞춰 본다. 준비물: 작품 설명표 사진 3~4장(작품 이미지는 따로 싣지 않았다).',
  });

  // ───────────── 2차시 (연습) ─────────────
  L(2, S1, {
    title: '풍속화 소개 글에서 때와 곳을 말한 문장 고르기',
    objective: '풍속화를 소개한 글 가운데 그림이 그려진 때와 곳, 그 시절 생활을 알려 주는 문장을 골라 고쳐 쓸 거리를 찾을 수 있다.',
    ill: 'a village market square with children watching two wrestlers in a ring, with thatched roofs behind them in muted paper colors',
    scene: scn([{ motif: 'house', x: 90, y: 214, s: 1 }, { motif: 'house', x: 390, y: 218, s: 0.9 }, { motif: 'tree', x: 250, y: 214, s: 0.8 }], '때와 곳을 말하는 글', 22),
    intro: {
      teacher: '조선 후기 풍속화라는 말을 칠판에 쓴다. "풍속화는 무엇을 그린 그림일까요?" 학생 말을 듣고 "그때 사람들이 살던 모습, 하던 놀이와 일"이라고 정리한다. "누가 \'씨름도는 사람들이 씨름하는 그림이다\'라고만 소개한다면 이 글에서 빠진 것은 무엇일까요?" 때·곳 정보가 없다는 것을 학생이 말하게 한다. 오늘은 소개 글 가운데 때와 곳을 알려 주는 문장을 골라내고 고칠 곳을 찾는다고 연다.',
      student: '"씨름도는 사람들이 씨름하는 그림이다"라는 소개 글에서 빠진 정보는 무엇일지 말해 봅시다.',
      demo: { tool: 'mindmap', options: { mode: 'pick', topic: '씨름도 소개', basket: '때와 곳을 알려 주는 글', cards: [{ id: 'd1', text: '조선 후기 풍속화예요' }, { id: 'd2', text: '그림이 재미있어요' }] }, sequence: [{ pick: ['d1'] }] },
    },
    acts: [
      {
        title: '때와 곳을 알려 주는 문장 고르기', tool: 'mindmap',
        teacher: '"이 문장을 읽으면 언제, 어디의 이야기인지 알 수 있나요?" 문장마다 \'조선 후기\', \'장터\', \'단옷날\'처럼 때나 곳을 말하는 낱말을 손가락으로 짚게 한다. \'재미있어요\'처럼 느낌만 있는 문장은 때와 곳 정보가 아니므로 남긴다. 도전 단계에서는 사실처럼 보이지만 때·곳을 말하지 않는 문장(그림에는 사람이 많아요)이 섞여 있다.',
        task: '소개 글 카드 가운데 그림이 그려진 때나 곳, 그 시절 생활을 알려 주는 문장만 골라요.',
        items: [
          pickItem({ p: '씨름도 소개 글에서 때나 곳, 그 시절 생활을 알려 주는 문장을 모두 고르세요.', topic: '씨름도 소개', basket: '때와 곳을 알려 주는 글', yes: ['조선 후기 풍속화예요', '김홍도가 그렸어요', '구경꾼이 씨름판을 둥글게 둘러앉았어요'], no: ['정말 재미있어요', '나도 씨름이 하고 싶어요'], hint: '언제·어디·누가가 들어 있는 사실 문장인지, 내 느낌인지 나누어 읽어요.', d: 0.15 }),
          pickItem({ p: '단오풍정 소개 글에서 때나 곳, 그 시절 생활을 알려 주는 문장을 모두 고르세요.', topic: '단오풍정 소개', basket: '때와 곳을 알려 주는 글', yes: ['신윤복이 그렸어요', '단옷날 풍속을 그렸어요', '개울가에서 머리를 감고 그네를 타요'], no: ['옷 색이 예뻐요', '나도 그네를 타고 싶어요'], d: 0.2 }),
          pickItem({ p: '서당도 소개 글에서 때나 곳, 그 시절 생활을 알려 주는 문장을 모두 고르세요.', topic: '서당도 소개', basket: '때와 곳을 알려 주는 글', yes: ['조선 후기 풍속화예요', '서당에서 글을 배우는 아이들을 그렸어요', '훈장님 앞에 아이들이 모여 앉았어요'], no: ['아이들 표정이 웃겨요', '공부하기 싫어 보여요'], d: 0.25,
            predict: { q: '때와 곳이 없는 소개 글은 작품을 이해하는 데 어떨까요?', options: ['충분해요', '부족해요'], answer: 1 }, conclude: '때와 곳을 알려 주는 글이 있어야 그림 속 생활을 그 시대 모습으로 읽어요.' }),
        ],
      },
      {
        title: '씨름도처럼 둘러앉은 구도 만들기', tool: 'collage',
        teacher: '"씨름하는 두 사람은 그림 어디쯤 있고 구경꾼은 어떻게 둘러앉아 있나요?" 가운데 큰 도형과 둘러앉은 작은 도형으로 구도를 나타내게 한다. 구경꾼을 한 줄로 늘어놓는 학생에게는 "씨름판을 둘러싼 모양을 떠올려 봐요"라고 안내한다. 이 도형은 구도를 간단히 나타낸 지도이며 그림을 똑같이 베끼는 것이 아니라고 말해 준다.',
        task: '씨름판 가운데에 큰 도형 둘, 둘레에 구경꾼 작은 도형을 둥글게 놓아요.',
        levels: { easy: { shapes: ['circle', 'square', 'triangle', 'semi'], colors: ['갈색', '노랑', '하양', '검정'], sizes: ['s', 'l'] }, base: { shapes: ['circle', 'square', 'triangle', 'semi', 'rect', 'star'] }, challenge: {} },
        items: [
          { prompt: '씨름하는 두 사람은 갈색 큰 동그라미 두 개로, 구경꾼은 노랑 작은 동그라미 여섯 개 이상으로 나타내요.', target: { has: [{ shape: 'circle', color: '갈색', size: 'l', n: 2 }, { shape: 'circle', color: '노랑', size: 's', min: 6 }] }, difficulty: 0.15 },
          { prompt: '씨름판 모래는 하양 큰 동그라미 하나로, 그 위에 갈색 큰 동그라미 두 개를 겹쳐요.', target: { has: [{ shape: 'circle', color: '하양', size: 'l', n: 1 }, { shape: 'circle', color: '갈색', size: 'l', n: 2 }], overlap: 2 }, difficulty: 0.25 },
          { prompt: '둘러앉은 구경꾼 구도를 만들고 점검해요.', target: { selfCheck: ['가운데에 큰 도형을 두 개 놓았어요', '작은 도형으로 둥글게 둘러쌌어요', '이 구도가 왜 구경꾼의 마음을 모으는지 말했어요'], minPieces: 6 }, difficulty: 0.1 },
        ],
      },
    ],
    wrap: {
      teacher: '"오늘 고른 문장에서 \'조선 후기\'와 \'장터\' 같은 낱말은 무엇을 알려 주었나요?" 때·곳 낱말을 짚게 한다. "재미있어요도 중요한 정보잖아요"라는 학생에게는 "그 말은 내 느낌이에요. 그림이 그려진 때와 곳과는 따로 쓰는 말이에요"라고 짚는다. 출구 2번을 틀린 학생은 다음 시간 도입에 소개 글 두 개를 견주어 읽는다.',
      exit: [
        { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '책가도 소개', basket: '때와 곳을 알려 주는 글', cards: [{ id: 'e1', text: '조선 후기에 그린 그림이에요' }, { id: 'e2', text: '책장과 문방구를 그렸어요' }, { id: 'e3', text: '그림이 화려해요' }] }, prompt: '책가도 소개 글에서 때나 그린 내용을 알려 주는 문장을 모두 고르세요.', target: { pick: ['e1', 'e2'] }, difficulty: 0.2 },
        { type: 'choice', prompt: '다음 가운데 그림이 그려진 때를 알려 주는 말은 무엇인가요?', options: ['정말 멋져요', '조선 후기에 그렸어요', '나도 그리고 싶어요'], answer: 1, difficulty: 0.1, explain: '\'조선 후기\'는 그림이 그려진 때를 말하는 사실이에요.' },
        { type: 'short', prompt: '내가 아는 작품의 소개 글에 때나 곳 정보를 한 문장 더해 쓰세요.' },
      ],
    },
    ws: {
      title: '소개 글에서 때와 곳 찾기',
      items: [
        { type: 'table', prompt: '소개 글에서 때를 알려 주는 말, 곳을 알려 주는 말, 내 느낌을 찾아 쓰세요.', columns: ['때를 알려 주는 말', '곳을 알려 주는 말', '내 느낌'], cells: [['', '', ''], ['', '', '']] },
        { type: 'choice', prompt: '곳을 알려 주는 문장에 ○ 하세요.', options: ['정말 재미있어요', '장터에서 씨름을 해요', '나도 해 보고 싶어요', '그림이 예뻐요'], answer: '장터에서 씨름을 해요' },
        { type: 'figure', wide: true, prompt: '씨름판 구경꾼을 더 그려 넣어 구도를 완성하세요.', tool: 'collage', options: { printColors: false }, figures: [{ state: { pieces: [{ shape: 'circle', color: '갈색', size: 'l', x: 240, y: 200, r: 0 }, { shape: 'circle', color: '갈색', size: 'l', x: 320, y: 200, r: 0 }] }, caption: '가운데 두 사람 · 둘레 구경꾼 그리기' }], answer: '가운데 둘레에 작은 동그라미를 둥글게' },
        { type: 'short', prompt: '내가 고친 소개 글을 한두 문장으로 쓰세요.' },
      ],
      easy: {
        note: '때는 \'조선 후기\' 같은 말, 곳은 \'장터\'·\'서당\' 같은 말이에요.',
        items: [
          { type: 'choice', prompt: '때를 알려 주는 말에 ○ 하세요.', options: ['조선 후기', '정말 재미있어요'], answer: '조선 후기' },
          { type: 'short', prompt: '그림에서 곳을 알려 주는 말 하나를 쓰세요.' },
          { type: 'draw', prompt: '풍속화 속 한 장면을 그리세요.' },
        ],
      },
    },
    diff: {
      easy: '카드를 담으면 바로 맞는지 표시되고, 색종이는 모양 네 가지·색 네 가지·크기 두 가지만 나와요.',
      base: '스스로 고른 뒤 확인하고, 모양 여섯 가지와 모든 색을 써요.',
      challenge: '느낌과 사실이 헷갈리게 섞여 있고, 겹치는 구도 문항이 있어요.',
    },
    notes: '자주 보이는 어려움: ① 느낌 문장("재미있어요")을 정보로 담는다 → 때·곳·한 일이 나온 문장만 담는다고 다시 정한다. ② 사실이지만 때와 곳이 없는 문장("사람이 많아요")을 담는다 → "언제, 어디인지 알 수 있나요?"를 묻는다. ③ 구도 도형을 그림 베끼기로 여긴다 → 어디에 무엇이 있는지 나타낸 지도라고 말한다. 확인 필요: 풍속화 소개 문장은 수업 전에 미술관 누리집 설명과 한 번 맞춰 본다. 준비물: 풍속화 소개 글 인쇄물, 도형 색종이.',
  });

    // ───────────── 3차시 (확장) ─────────────
  L(3, S1, {
    title: '짝의 소개 글에 빠진 정보를 찾아 보태 주기',
    objective: '소개 글에서 때·곳·까닭 가운데 빠진 정보를 찾아, 알맞은 보탤 말과 이어 소개 글을 고쳐 줄 수 있다.',
    ill: 'two children placing sticky notes with extra information beside a folk painting of a tiger and a magpie',
    scene: scn([{ motif: 'tree', x: 110, y: 216, s: 1.1 }, { motif: 'bird', x: 330, y: 96 }, { motif: 'star', x: 400, y: 150, s: 0.7 }], '빠진 정보를 보태 줘요'),
    intro: {
      teacher: '"짝이 쓴 소개 글이 \'호랑이와 까치를 그렸어요\' 한 줄뿐이에요. 이 글을 읽은 사람이 더 알고 싶은 것은 무엇일까요?" 학생이 말한 궁금증(언제 그렸어요? 왜 그렸어요?)을 칠판에 받아 적는다. "좋은 소개 글은 그림에 없는 것을 말해 주는 글이에요. 눈에 보이는 것만 적으면 그림을 보면 되니까요"라고 정리한다. 오늘은 빠진 정보를 찾아 보태는 법을 익힌다고 연다.',
      student: '"호랑이와 까치를 그렸어요"라는 소개 글을 읽고 더 알고 싶은 것이 무엇인지 말해 봅시다.',
      demo: { tool: 'mindmap', options: { mode: 'match', topic: '까치호랑이', slots: [{ id: 's1', label: '때를 알 수 없어요' }], cards: [{ id: 'c1', text: '조선 후기에 널리 그려졌어요' }, { id: 'c2', text: '호랑이가 귀여워요' }] }, sequence: [{ match: { s1: 'c1' } }] },
    },
    acts: [
      {
        title: '약점마다 보탤 말 잇기', tool: 'mindmap',
        teacher: '"이 약점을 고치려면 어떤 정보를 보태야 할까요?" 왼쪽 약점이 때·곳·까닭 가운데 무엇이 빠졌다는 말인지 먼저 짚게 한 뒤 카드를 잇게 한다. 도전 단계의 \'호랑이가 귀여워요\' 같은 카드는 정보를 보태는 말이 아니라 느낌이므로 어디에도 잇지 않는다. 같은 약점에 다른 정보를 이은 학생에게는 "이 말을 소개 글에 넣으면 빠진 것이 채워지나요?"라고 되묻는다.',
        task: '소개 글의 약점마다, 그 약점을 채워 주는 보탤 말 카드를 하나씩 이어요.',
        items: [
          matchItem({ p: '까치호랑이 민화 소개 글의 약점마다 보탤 말을 이어 보세요.', topic: '까치호랑이', pairs: [['때를 알 수 없어요', '조선 후기에 널리 그려졌어요'], ['누가 즐겼는지 알 수 없어요', '일반 백성도 집에 걸어 두었어요'], ['왜 그렸는지 알 수 없어요', '새해 복을 바라며 그렸어요']], extra: '호랑이가 귀여워요', hint: '약점이 때·사람·까닭 가운데 무엇을 묻는지 읽고, 그 물음에 답하는 말을 찾아요.', d: 0.2 }),
          matchItem({ p: '책가도 소개 글의 약점마다 보탤 말을 이어 보세요.', topic: '책가도', pairs: [['때를 알 수 없어요', '조선 후기에 유행했어요'], ['무엇을 그렸는지 알 수 없어요', '책장에 책과 문방구가 가득 쌓여 있어요'], ['왜 그렸는지 알 수 없어요', '학문을 귀하게 여기는 마음을 담았어요']], extra: '책이 많아서 부러워요', d: 0.25 }),
          matchItem({ p: '무용총 수렵도 소개 글의 약점마다 보탤 말을 이어 보세요.', topic: '무용총 수렵도', pairs: [['어느 시대인지 알 수 없어요', '삼국 시대 고구려 무덤 벽화예요'], ['어디에 그렸는지 알 수 없어요', '무덤 방의 벽에 그렸어요'], ['무엇을 그렸는지 알 수 없어요', '말 탄 사람이 활로 사냥하는 모습이에요']], extra: '말이 빨라 보여요', d: 0.3,
            predict: { q: '보탤 말을 넣으면 소개 글은 어떻게 달라질까요?', options: ['글만 길어져요', '그림 뒤 이야기가 보여요'], answer: 1 }, conclude: '빠진 때·곳·까닭을 보태면 눈에 안 보이는 이야기가 전해져요.' }),
        ],
      },
      {
        title: '책가도 책장을 도형으로 나타내기', tool: 'collage',
        teacher: '"책가도는 책장 칸마다 무엇이 쌓여 있다고 했지요?" 소개 글에서 읽은 \'책장·책·문방구\'를 도형으로 바꾸게 한다. 책장 칸을 먼저 만든 뒤 그 위에 책을 올리는 순서가 자연스럽다고 알려 준다. 칸을 모두 같은 크기로 하려다 시간이 걸리는 학생에게는 "칸의 느낌만 나게 놓아요"라고 말한다.',
        task: '책장 칸을 갈색 네모로, 책을 색깔 긴 네모로 나타내요.',
        levels: { easy: { shapes: ['square', 'rect', 'circle', 'triangle'], colors: ['갈색', '빨강', '파랑', '초록'], sizes: ['m', 'l'] }, base: { shapes: ['square', 'rect', 'circle', 'triangle', 'star', 'leaf'] }, challenge: {} },
        items: [
          { prompt: '책장 칸을 만들어요. 갈색 네모 여섯 개 이상을 붙여요.', target: { has: [{ shape: 'square', color: '갈색', min: 6 }] }, difficulty: 0.1 },
          { prompt: '책을 쌓아요. 빨강·파랑·초록 긴 네모를 각각 두 개 이상 붙여요.', target: { has: [{ shape: 'rect', color: '빨강', min: 2 }, { shape: 'rect', color: '파랑', min: 2 }, { shape: 'rect', color: '초록', min: 2 }] }, difficulty: 0.2 },
          { prompt: '책가도 한 칸을 만들고 점검해요.', target: { selfCheck: ['책장 칸을 만들었어요', '책이나 문방구를 칸 안에 놓았어요', '이 그림에 보탤 말 하나를 짝에게 말했어요'], minPieces: 5 }, difficulty: 0.1 },
        ],
      },
    ],
    wrap: {
      teacher: '"오늘 짝의 소개 글에 보탠 말은 때·곳·까닭 가운데 어느 것이었나요?" 두세 명에게 보탠 정보를 말하게 한다. "그림이 멋있다고 쓰면 되잖아요"라고 하는 학생에게는 "그 말이 그림을 보지 않은 사람에게 무엇을 알려 주나요?"라고 되묻는다. 출구 1번에서 느낌 카드를 정보로 잇는 학생은 다음 시간 시작에 약점 읽기를 다시 한다.',
      exit: [
        { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '서당도', slots: [{ id: 's1', label: '때를 알 수 없어요' }, { id: 's2', label: '곳을 알 수 없어요' }], cards: [{ id: 'e1', text: '조선 후기에 그렸어요' }, { id: 'e2', text: '마을 서당 안을 그렸어요' }, { id: 'e3', text: '아이들이 귀여워요' }] }, prompt: '서당도 소개 글의 약점마다 보탤 말을 이어 보세요. 정보가 아닌 카드는 남겨 두세요.', target: { match: { s1: 'e1', s2: 'e2' } }, difficulty: 0.2 },
        { type: 'choice', prompt: '소개 글에 보태면 가장 도움이 되는 말은 무엇인가요?', options: ['정말 멋진 그림이에요', '조선 후기 서민들의 새해 풍습을 담았어요', '나는 이 그림이 좋아요'], answer: 1, difficulty: 0.15, explain: '때와 사람, 풍습처럼 그림에 안 보이는 사실을 알려 주는 말이 소개 글을 풍부하게 해요.' },
        { type: 'short', prompt: '내가 소개하고 싶은 작품 하나에 빠진 정보를 찾아 한 문장으로 보태 쓰세요.' },
      ],
    },
    ws: {
      title: '소개 글 고쳐 쓰기',
      items: [
        { type: 'table', prompt: '짝의 소개 글에서 빠진 것과 보탤 말을 쓰세요.', columns: ['빠진 정보', '보탤 말'], cells: [['때', ''], ['곳', ''], ['까닭', '']] },
        { type: 'choice', prompt: '정보를 보태는 말에 ○ 하세요.', options: ['그림이 예뻐요', '조선 후기에 널리 그려졌어요', '나는 이 그림이 좋아요', '색이 멋있어요'], answer: '조선 후기에 널리 그려졌어요' },
        { type: 'short', prompt: '빠진 정보를 보탠 새 소개 글을 쓰세요.' },
        { type: 'draw', prompt: '소개 글에 보탠 정보를 그림이나 기호로 나타내세요.' },
      ],
      easy: {
        note: '소개 글에는 때·곳·까닭 가운데 빠진 것이 있어요.',
        items: [
          { type: 'choice', prompt: '때를 보태는 말에 ○ 하세요.', options: ['조선 후기에 그렸어요', '귀여워요'], answer: '조선 후기에 그렸어요' },
          { type: 'short', prompt: '소개 글에 보탤 말을 하나 쓰세요.' },
          { type: 'draw', prompt: '보탠 말을 그림으로 나타내세요.' },
        ],
      },
    },
    diff: {
      easy: '카드를 이으면 바로 맞는지 표시되고, 색종이는 모양 네 가지·색 네 가지·크기 두 가지만 나와요.',
      base: '스스로 이은 뒤 확인하고, 모양 여섯 가지와 모든 색을 써요.',
      challenge: '이을 짝이 없는 느낌 카드가 섞여 있어 남겨야 해요.',
    },
    notes: '자주 보이는 어려움: ① 느낌 카드를 보탤 정보로 잇는다 → 그림을 안 본 사람이 알 수 없는 사실인지 묻는다. ② 같은 약점에 두 카드를 잇거나 약점과 상관없는 카드를 잇는다 → 약점이 때·곳·까닭 가운데 무엇인지 먼저 소리 내어 읽게 한다. ③ 소개 글을 길게 쓰는 것이 좋은 글이라고 여긴다 → 정보가 늘어야 한다고 말한다. 확인 필요: 책가도·민화 소개 문장은 수업 전에 박물관 누리집 설명과 맞춰 본다. 준비물: 약점 카드 인쇄물, 접착 메모지.',
  });

  // ───────────── 4차시 (확장) ─────────────
  L(4, S1, {
    title: '전통 그릇 소개 글에서 잘못 이은 때와 곳 고치기',
    objective: '전통 그릇과 불상의 소개 글에서 시대·재료가 잘못 이어진 문장을 찾아 고쳐 쓸 문장으로 표시할 수 있다.',
    ill: 'a table of old celadon and white-glazed pottery pieces with small paper labels, and a stone Buddha statue silhouette behind them',
    scene: scn([{ motif: 'house', x: 100, y: 214, s: 1.1 }, { motif: 'star', x: 370, y: 100, s: 0.8 }, { motif: 'leaf', x: 330, y: 200, r: 25 }], '틀린 설명을 찾아 고쳐요'),
    intro: {
      teacher: '"소개 글에 \'상감 청자는 삼국 시대에 만들었어요\'라고 적혀 있어요. 이 글을 믿고 외우면 어떻게 될까요?" 학생의 반응을 듣고 "그림이나 도자기를 잘못된 때와 이어 알면 그 작품의 이야기가 틀려져요"라고 정리한다. 오늘은 소개 글에서 틀린 문장을 찾아 표시하는 연습을 한다고 연다. 시연 단추로 틀린 문장 카드가 바구니에 담기는 모습을 보여 준다.',
      student: '"상감 청자는 삼국 시대에 만들었어요"라는 문장이 왜 문제가 될지 생각해 말해 봅시다.',
      demo: { tool: 'mindmap', options: { mode: 'pick', topic: '상감 청자 소개', basket: '고쳐야 할 문장', cards: [{ id: 'd1', text: '삼국 시대에 만들었어요' }, { id: 'd2', text: '고려 시대 청자예요' }] }, sequence: [{ pick: ['d1'] }] },
    },
    acts: [
      {
        title: '잘못 이어진 문장 찾아 담기', tool: 'mindmap',
        teacher: '"이 문장은 작품의 시대나 재료와 맞나요?" 문장마다 앞 문장이나 소개 글에서 읽은 내용과 맞춰 보게 한다. 틀린 문장만 \'고쳐야 할 문장\' 바구니에 담는다. 모두 담거나 하나도 안 담는 학생에게는 "맞는 문장도 있어요. 하나씩 이유를 말해 볼까요?"라고 묻는다. 문장이 틀렸는지 아닌지 알기 어려우면 모른다고 말하고 설명표를 다시 확인하게 한다.',
        task: '소개 글 카드 가운데 때나 재료가 잘못 이어진 문장만 골라 바구니에 담아요.',
        items: [
          pickItem({ p: '상감 청자 소개 글에서 때나 재료가 잘못 이어진 문장을 모두 담으세요.', topic: '상감 청자 소개', basket: '고쳐야 할 문장', yes: ['삼국 시대에 만들었어요', '무늬를 붓으로 그려서 흙을 메우지 않아요'], no: ['고려 시대 청자예요', '표면을 파고 다른 흙을 메워 무늬를 냈어요', '푸른 빛 유약을 입혀 구웠어요'], hint: '앞에서 읽은 시대와 만드는 법에 어긋나는 문장이 있는지 하나씩 대어 봐요.', d: 0.2 }),
          pickItem({ p: '분청사기 소개 글에서 때나 만든 방법이 잘못 이어진 문장을 모두 담으세요.', topic: '분청사기 소개', basket: '고쳐야 할 문장', yes: ['오늘날 공장에서 만들었어요'], no: ['조선 초에 많이 만들었어요', '그릇 표면에 흰 흙을 입혀 무늬를 냈어요', '손으로 긁거나 붓으로 무늬를 냈어요'], d: 0.25 }),
          pickItem({ p: '석굴암 소개 글에서 때나 곳이 잘못 이어진 문장을 모두 담으세요.', topic: '석굴암 소개', basket: '고쳐야 할 문장', yes: ['조선 시대에 만든 석굴 절이에요', '바닷가 모래 위에 지었어요'], no: ['통일신라 때 만들었어요', '돌을 다듬어 석굴로 만든 절이에요', '경주 토함산에 있어요'], d: 0.3,
            predict: { q: '틀린 문장을 그대로 두면 작품 이야기는 어떻게 될까요?', options: ['그대로예요', '엉뚱하게 전해져요'], answer: 1 }, conclude: '시대나 곳이 틀리면 그 작품이 살던 삶의 이야기도 틀리게 전해져요.' }),
        ],
      },
      {
        title: '청자와 분청 무늬를 도형으로 나타내기', tool: 'collage',
        teacher: '"고려 청자의 푸른빛 몸통에 하얀 무늬가 있었지요. 분청사기는 어떻게 달랐나요?" 앞 활동에서 확인한 사실을 색과 모양으로 나타내게 한다. 청자는 초록 몸통과 하양 무늬, 분청은 갈색 몸통과 하양 무늬로 대비해 보게 한다. 도형은 작품을 베끼는 것이 아니라 특징을 간단히 보여 주는 표지라고 말해 준다.',
        task: '청자 몸통은 초록, 분청 몸통은 갈색으로 나타내고 하양 도형으로 무늬를 붙여요.',
        levels: { easy: { shapes: ['circle', 'square', 'leaf', 'star'], colors: ['초록', '갈색', '하양', '검정'], sizes: ['s', 'l'] }, base: { shapes: ['circle', 'square', 'leaf', 'star', 'triangle', 'heart'] }, challenge: {} },
        items: [
          { prompt: '청자를 나타내요. 초록 큰 동그라미 하나(몸통)와 하양 작은 동그라미 세 개 이상(무늬)을 붙여요.', target: { has: [{ shape: 'circle', color: '초록', size: 'l', n: 1 }, { shape: 'circle', color: '하양', size: 's', min: 3 }] }, difficulty: 0.15 },
          { prompt: '분청을 나타내요. 갈색 큰 네모 하나(몸통)와 하양 나뭇잎 네 개 이상(무늬)을 붙여요.', target: { has: [{ shape: 'square', color: '갈색', size: 'l', n: 1 }, { shape: 'leaf', color: '하양', min: 4 }] }, difficulty: 0.2 },
          { prompt: '두 그릇을 나란히 만들고 점검해요.', target: { selfCheck: ['청자는 초록 몸통으로 나타냈어요', '분청은 갈색 몸통으로 나타냈어요', '두 그릇의 다른 점을 짝에게 말했어요'], minPieces: 6 }, difficulty: 0.1 },
        ],
      },
    ],
    wrap: {
      teacher: '"틀린 문장을 어떻게 알아냈나요?" 앞에서 읽은 내용과 맞춰 본 방법을 말하게 한다. "그냥 이상해서요"라고 하는 학생에게는 "어느 낱말이 이상했나요? 시대인가요, 재료인가요?"라고 짚어 묻는다. 출구 1번에서 맞는 문장을 담은 학생은 다음 시간 도입에 설명표와 한 번 더 맞춰 본다.',
      exit: [
        { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '백자 소개', basket: '고쳐야 할 문장', cards: [{ id: 'e1', text: '삼국 시대에 만든 백자예요' }, { id: 'e2', text: '조선 시대에 널리 쓰였어요' }, { id: 'e3', text: '흰 흙으로 빚고 유약을 입혀 구웠어요' }] }, prompt: '백자 소개 글에서 때가 잘못 이어진 문장을 담으세요.', target: { pick: ['e1'] }, difficulty: 0.2 },
        { type: 'choice', prompt: '소개 글이 틀렸는지 확인하는 가장 좋은 방법은 무엇인가요?', options: ['친구에게 물어 그대로 믿어요', '설명표나 믿을 만한 자료와 맞춰 봐요', '내 느낌대로 정해요'], answer: 1, difficulty: 0.15, explain: '설명표나 박물관 자료처럼 믿을 만한 자료와 맞춰 보면 틀린 곳을 알 수 있어요.' },
        { type: 'short', prompt: '오늘 알게 된 작품의 때나 재료를 바르게 한 문장으로 쓰세요.' },
      ],
    },
    ws: {
      title: '틀린 문장 고치기',
      items: [
        { type: 'table', prompt: '소개 글에서 틀린 문장을 찾아 고쳐 쓰세요.', columns: ['틀린 문장', '고친 문장'], cells: [['', ''], ['', '']] },
        { type: 'choice', prompt: '다음 가운데 고려 시대 작품에 ○ 하세요.', options: ['상감 청자', '신라 금관', '달항아리', '세한도'], answer: '상감 청자' },
        { type: 'short', prompt: '틀린 문장을 믿으면 어떤 일이 생길지 쓰세요.' },
        { type: 'draw', prompt: '내가 고친 문장을 그림 카드로 만들어 그리세요.' },
      ],
      easy: {
        note: '소개 글에서 시대·재료·곳이 설명표와 다르면 고쳐야 해요.',
        items: [
          { type: 'choice', prompt: '고쳐야 할 말에 ○ 하세요.', options: ['고려 시대 청자예요', '삼국 시대 청자예요'], answer: '삼국 시대 청자예요' },
          { type: 'short', prompt: '고친 문장을 하나 쓰세요.' },
          { type: 'draw', prompt: '그릇 하나를 그리세요.' },
        ],
      },
    },
    diff: {
      easy: '카드를 담으면 바로 맞는지 표시되고, 색종이는 모양 네 가지·색 네 가지·크기 두 가지만 나와요.',
      base: '스스로 담은 뒤 확인하고, 모양 여섯 가지와 모든 색을 써요.',
      challenge: '틀린 문장이 둘인 문항이 있고, 짝과 소개 글 하나를 더 확인해요.',
    },
    notes: '자주 보이는 어려움: ① 틀린 문장을 하나도 못 찾거나 모두 담는다 → 문장마다 \'시대\', \'재료\', \'곳\' 가운데 무엇을 말하는지 먼저 짚게 한다. ② 아는 것과 다르면 무조건 틀렸다고 한다 → 설명표와 맞춰 보게 한다. ③ 틀린 문장을 보여 주면 그것을 외운다 → 고친 문장을 소리 내어 읽게 한다. 확인 필요: 도자기와 석굴암의 시대·재료 문장은 수업 전에 박물관 누리집 설명과 맞춰 본다. 준비물: 틀린 문장이 든 소개 글 인쇄물.',
  });

  // ───────────── 5차시 (핵심) ─────────────
  L(5, S1, {
    title: '삼국·고려·조선 시간 띠에 작품 놓아 보기',
    objective: '이름을 들은 우리나라 옛 작품을 삼국·고려·조선 시대 띠에 알맞게 놓고, 시대마다 다른 작품의 모습을 말할 수 있다.',
    ill: 'a long paper timeline strip with three colored zones and small paper models of a crown, a celadon vase and a white moon jar placed on it',
    scene: scn([{ motif: 'house', x: 90, y: 214, s: 1 }, { motif: 'mountain', x: 250, y: 214, s: 1 }, { motif: 'tree', x: 400, y: 218, s: 0.9 }], '시대 띠 위의 작품', 22),
    intro: {
      teacher: '칠판에 긴 띠를 그리고 왼쪽에 \'옛날\', 오른쪽에 \'오늘날\'을 쓴다. "우리나라 역사에서 삼국, 고려, 조선 가운데 가장 먼저인 시대는 무엇일까요?" 학생이 순서를 말하면 띠 위에 세 칸으로 나눈다. "신라 금관은 왼쪽 칸일까요, 오른쪽 칸일까요?" 한 학생이 답한 뒤 "작품마다 만들어진 시대가 달라요. 오늘은 작품을 시대 띠에 놓아 보며 작품의 시대가 어떻게 다른지 알아봐요"라고 연다. 시연 단추로 카드가 시대 칸에 놓이는 모습을 보여 준다.',
      student: '삼국, 고려, 조선 가운데 가장 먼저인 시대는 무엇일까요? 옛날부터 순서대로 말해 봅시다.',
      demo: { tool: 'timeline', options: { mode: 'sort', slots: ['삼국 시대', '고려 시대', '조선 시대'], cards: [{ id: 'd1', text: '신라 금관' }, { id: 'd2', text: '상감 청자' }, { id: 'd3', text: '달항아리' }] }, sequence: [{ sort: { '삼국 시대': ['d1'], '고려 시대': ['d2'], '조선 시대': ['d3'] } }] },
    },
    acts: [
      {
        title: '작품을 시대 칸에 나누어 놓기', tool: 'timeline',
        teacher: '"이 작품은 삼국, 고려, 조선 가운데 어느 때에 만들어졌을까요?" 작품 이름 속 단서(신라·고구려는 삼국, 청자·팔만대장경판은 고려, 달항아리·단오풍정은 조선)를 짚게 한다. 모르는 작품은 억지로 놓지 않고 설명표에서 확인한다. 도전 단계에서는 시대 칸이 부족한 \'통일신라\'가 낀 카드가 있어 어디에도 넣지 않는다.',
        task: '작품 카드를 읽고 삼국·고려·조선 가운데 만들어진 시대 칸에 놓아요.',
        items: [
          sortItem({ p: '작품 카드를 만들어진 시대 칸에 나누어 놓아 보세요.', mode: 'sort', topic: '시대별 작품 1', slots: ['삼국 시대', '고려 시대', '조선 시대'], groups: [['고구려 무용총 수렵도', '신라 금관'], ['상감 청자'], ['몽유도원도', '달항아리']], extra: '통일신라 석굴암', hint: '작품 이름 속 나라나 그릇 종류가 시대의 단서가 돼요.', d: 0.2 }),
          sortItem({ p: '작품 카드를 만들어진 시대 칸에 나누어 놓아 보세요.', mode: 'sort', topic: '시대별 작품 2', slots: ['삼국 시대', '고려 시대', '조선 시대'], groups: [['삼국 시대 반가사유상'], ['고려 불화 수월관음도', '팔만대장경판'], ['분청사기', '세한도']], extra: '통일신라 석굴암', d: 0.25 }),
          sortItem({ p: '작품 카드를 만들어진 시대 칸에 나누어 놓아 보세요.', mode: 'sort', topic: '시대별 작품 3', slots: ['삼국 시대', '고려 시대', '조선 시대'], groups: [['고구려 사신도'], ['고려 나전 칠기'], ['인왕제색도', '단오풍정']], extra: '통일신라 석굴암', d: 0.3,
            predict: { q: '같은 시대의 작품끼리는 어떤 점이 비슷할까요?', options: ['모양이 똑같아요', '그 시대 사람들의 생활과 생각이 담겨요'], answer: 1 }, conclude: '같은 시대 작품에는 그 시절 사람들의 생활과 생각이 닮은 모습으로 담겨요.' }),
        ],
      },
      {
        title: '작품을 먼저 만들어진 순서로 놓기', tool: 'timeline',
        teacher: '"어느 작품이 가장 먼저 만들어졌을까요?" 시대 순서와 연도 순서를 함께 쓰게 한다. 한 시대 안에서는 시대 순서만으로 정할 수 없어 연도(몽유도원도 1447년, 인왕제색도 1751년, 세한도 1844년)를 단서로 쓴다. 틀린 학생에게는 "시대가 다른 것끼리는 시대로, 같은 시대끼리는 연도로 비교해 봐요"라고 말한다.',
        task: '작품 카드를 먼저 만들어진 것부터 오른쪽 방향으로 차례대로 놓아요.',
        levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          orderItem({ p: '작품을 먼저 만들어진 것부터 놓아 보세요.', texts: ['삼국 시대 신라 금관', '고려 시대 상감 청자', '조선 시대 달항아리'], axis: ['먼저', '나중'], hint: '시대 순서를 먼저 떠올려 가장 이른 시대의 작품을 맨 앞에 놓아요.', d: 0.15 }),
          orderItem({ p: '같은 조선 시대 작품을 만들어진 해가 이른 것부터 놓아 보세요.', texts: ['몽유도원도 1447년', '인왕제색도 1751년', '세한도 1844년'], axis: ['먼저', '나중'], d: 0.2 }),
          orderItem({ p: '네 작품을 만들어진 시대가 이른 것부터 놓아 보세요.', texts: ['고구려 사신도', '고려 상감 청자', '조선 분청사기', '조선 후기 단오풍정'], axis: ['먼저', '나중'], d: 0.3 }),
        ],
      },
      {
        title: '시대 띠에 붙인 작품 말하기 (짝 활동)', tool: 'mindmap', pair: true,
        teacher: '짝끼리 시대 띠 활동지에 작품 이름을 붙여 놓고 "이 작품은 어느 시대이고, 그렇게 생각한 단서는 무엇이에요?"라고 서로 묻게 한다. 시대만 말하고 단서를 말하지 못하는 짝에게는 "작품 이름 속 낱말이나 설명표에 적힌 연도를 단서로 말해 봐요"라고 말해 준다.',
        task: '시대 띠에 붙인 작품을 짝에게 소개하고, 그 시대라고 생각한 단서를 말해요.',
        levels: { easy: { live: true }, base: {}, challenge: {} },
        items: [
          talk('시대 띠에 붙인 작품 하나를 짝에게 소개하고 "다 했어요"를 누르세요.', '작품 소개', ['작품 이름', '시대'], ['삼국', '고려', '조선']),
          talk('그 시대라고 생각한 단서를 말하고 짝의 단서도 들은 뒤 "다 했어요"를 누르세요.', '단서 말하기', ['내 단서', '짝의 단서'], ['작품 이름 속 낱말', '설명표의 연도']),
          talk('가장 먼저 만들어진 작품과 가장 나중 작품을 짝과 정해 말하고 "다 했어요"를 누르세요.', '먼저와 나중', ['가장 먼저', '가장 나중'], ['삼국', '조선']),
        ],
      },
    ],
    wrap: {
      teacher: '"오늘 시대 띠에서 가장 놀라웠던 점은 무엇이었나요?" 두세 명의 대답을 받는다. "삼국 시대 그릇이 조선보다 더 예뻐요"처럼 시대를 비교해 좋고 나쁨을 말하는 학생에게는 "그 시대 사람들이 다른 것을 아꼈을 수 있어요. 무엇이 달랐는지 말해 볼까요?"라고 묻는다. 출구 1번에서 고려와 조선을 바꾼 학생은 다음 시간 도입에 띠를 한 번 더 놓는다.',
      exit: [
        { type: 'tool', tool: 'timeline', options: { mode: 'sort', slots: ['삼국 시대', '고려 시대', '조선 시대'], cards: [{ id: 'e1', text: '고구려 고분 벽화' }, { id: 'e2', text: '고려 불화' }, { id: 'e3', text: '조선 백자' }] }, prompt: '작품 카드를 만들어진 시대 칸에 놓아 보세요.', target: { sort: { '삼국 시대': ['e1'], '고려 시대': ['e2'], '조선 시대': ['e3'] } }, difficulty: 0.15 },
        { type: 'choice', prompt: '다음 작품 가운데 가장 먼저 만들어진 것은 무엇인가요?', options: ['조선 백자', '신라 금관', '고려 상감 청자'], answer: 1, difficulty: 0.1, explain: '신라는 삼국 시대에 속해서 고려와 조선보다 먼저예요.' },
        { type: 'short', prompt: '시대 띠에서 가장 마음에 든 작품 하나와 그 시대를 쓰세요.' },
      ],
    },
    ws: {
      title: '시대 띠에 작품 붙이기',
      items: [
        { type: 'table', prompt: '시대 칸에 알맞은 작품 이름을 쓰세요.', columns: ['삼국 시대', '고려 시대', '조선 시대'], cells: [['', '', ''], ['', '', '']] },
        { type: 'choice', prompt: '고려 시대 작품에 ○ 하세요.', options: ['신라 금관', '상감 청자', '달항아리', '단오풍정'], answer: '상감 청자' },
        { type: 'short', prompt: '그 시대라고 생각한 단서를 한 가지 쓰세요.' },
        { type: 'draw', prompt: '가장 마음에 드는 작품의 모양을 간단히 그리고 시대를 쓰세요.' },
      ],
      easy: {
        note: '삼국 → 고려 → 조선 순서로 시간이 흘러요.',
        items: [
          { type: 'choice', prompt: '가장 먼저인 시대에 ○ 하세요.', options: ['삼국', '조선'], answer: '삼국' },
          { type: 'short', prompt: '작품 이름 하나와 시대를 쓰세요.' },
          { type: 'draw', prompt: '작품 하나를 그리세요.' },
        ],
      },
    },
    diff: {
      easy: '카드를 놓으면 바로 맞는지 표시되고 틀리면 까닭을 말해 줘요.',
      base: '스스로 놓은 뒤 확인해요.',
      challenge: '시대 칸에 없는 통일신라 카드가 섞여 있어 남겨야 해요.',
    },
    notes: '자주 보이는 어려움: ① 고려와 조선의 순서를 바꾼다 → 역사 연표를 칠판 옆에 붙여 둔다. ② 신라 작품을 삼국이 아닌 곳에 놓는다 → 신라는 삼국에 속한다고 짚는다. ③ 같은 시대 안 순서를 시대 이름으로 정하려 한다 → 연도를 단서로 쓴다. 확인 필요: 통일신라 석굴암은 삼국 칸이 아니어서 이번 칸 나누기에서는 남기는 카드로 쓴다. 준비물: 시대 띠 활동지, 작품 이름 카드.',
  });

    // ───────────── 6차시 (연습) ─────────────
  L(6, S1, {
    title: '작품 속 모습과 그 시절 사람들의 생활 이어 보기',
    objective: '작품에 그려지거나 만들어진 모습을 보고, 그 모습이 나온 그 시절 사람들의 생활이나 풍습과 이어 설명할 수 있다.',
    ill: 'a girl on a swing hanging from a willow tree beside a stream with small paper boats, and a horseback hunter on a wall painting behind',
    scene: scn([{ motif: 'tree', x: 130, y: 218, s: 1.3 }, { motif: 'wave', x: 330, y: 224 }, { motif: 'bird', x: 280, y: 94 }], '모습과 생활 이어 보기', 22),
    intro: {
      teacher: '"단오풍정에서 그네를 타는 여인을 보았지요. 왜 그림에 그네가 있을까요?" 학생이 짐작한 것을 말한다. "그림 속 모습은 그냥 그린 것이 아니라 그때 사람들이 하던 일일 때가 많아요"라고 정리한다. "그림에 있는 모습을 보면 그 시절 생활을 알 수 있고, 그 시절 생활을 알면 그림이 더 잘 보여요." 오늘은 모습과 생활을 짝지어 본다고 연다. 시연 단추로 한 쌍이 이어지는 모습을 보여 준다.',
      student: '그림에 그네 타는 모습이 있다면 그 시절 사람들은 어떤 생활을 했을지 말해 봅시다.',
      demo: { tool: 'mindmap', options: { mode: 'match', topic: '단오풍정', slots: [{ id: 's1', label: '그네를 타는 모습' }], cards: [{ id: 'c1', text: '단옷날에 그네를 타는 풍속이 있었어요' }, { id: 'c2', text: '오늘 점심을 먹었어요' }] }, sequence: [{ match: { s1: 'c1' } }] },
    },
    acts: [
      {
        title: '모습과 생활 짝 짓기', tool: 'mindmap',
        teacher: '"왼쪽의 모습은 오른쪽의 어떤 생활에서 나왔을까요?" 카드의 낱말(말, 활, 그네, 책장)을 왼쪽 모습과 맞춰 보게 한다. 소리 내어 \'말 탄 사냥꾼 → 말을 타고 사냥하던 생활\'처럼 읽어 맞는지 다시 듣게 한다. 도전 단계의 함정 카드는 시대가 달라 이을 곳이 없는 말이므로 남겨 둔다.',
        task: '왼쪽의 작품 속 모습마다, 그 모습이 나온 그 시절 생활 카드를 하나씩 이어요.',
        items: [
          matchItem({ p: '삼국과 조선의 작품 속 모습마다 그 시절 생활을 이어 보세요.', topic: '모습과 생활 1', pairs: [['무용총 벽화의 말 탄 사냥꾼', '말을 타고 활로 사냥하던 생활'], ['신라 금관의 금빛 장식', '왕이 높은 지위를 금으로 나타내던 생활'], ['단오풍정의 그네 타는 여인', '단옷날에 그네를 타고 머리를 감던 풍속']], extra: '버스를 타고 학교에 가요', hint: '왼쪽 모습에 나온 물건(말·금·그네)이 오른쪽 생활의 어디에 나오는지 찾아요.', d: 0.2 }),
          matchItem({ p: '그릇과 풍속화의 모습마다 그 시절 생활을 이어 보세요.', topic: '모습과 생활 2', pairs: [['달항아리의 크고 둥근 몸통', '조선 사람들이 곡식이나 물건을 담아 쓰던 생활'], ['상감 청자의 학과 구름 무늬', '고려 귀족이 하늘과 학을 새긴 청자를 즐기던 생활'], ['씨름도의 둘러앉은 구경꾼', '장터와 마을에서 모여 놀이를 즐기던 생활']], extra: '전자 책으로 책을 읽어요', d: 0.25 }),
          matchItem({ p: '그림 속 모습마다 그 시절 생활이나 풍습을 이어 보세요.', topic: '모습과 생활 3', pairs: [['서당도에서 글을 배우는 아이들', '마을 서당에서 글을 익히던 생활'], ['책가도의 책장과 문방구', '선비가 책과 학문을 귀하게 여기던 생활'], ['까치호랑이 민화', '새해 복을 바라며 집에 붙이던 풍습']], extra: '지하철을 타고 출근해요', d: 0.3,
            predict: { q: '작품 속 모습은 그 시절 생활과 관계가 있을까요?', options: ['관계없어요', '관계가 깊어요'], answer: 1 }, conclude: '작품 속 모습은 그 시절 사람들이 쓰고 즐기던 것에서 나온 경우가 많아요.' }),
        ],
      },
      {
        title: '단오 그네 장면을 도형으로 짓기', tool: 'collage',
        teacher: '"단오풍정에는 어떤 모습이 있었지요? 나무, 그네, 개울이에요." 앞에서 이은 모습을 도형으로 나타내게 한다. 도형을 꾸미다 단오의 풍속이라는 점을 잊는 학생에게는 "이 장면은 어떤 날의 생활을 보여 주나요?"라고 묻는다. 도형은 장면의 짜임만 나타내는 간단한 표시라고 말해 준다.',
        task: '나무와 그네를 도형으로 나타내고, 단오날 장면의 느낌을 담아요.',
        levels: { easy: { shapes: ['leaf', 'rect', 'semi', 'circle'], colors: ['초록', '갈색', '빨강', '파랑'], sizes: ['m', 'l'] }, base: { shapes: ['leaf', 'rect', 'semi', 'circle', 'triangle', 'star'] }, challenge: {} },
        items: [
          { prompt: '그네 기둥을 만들어요. 갈색 긴 네모 두 개와 빨강 반원 하나(그네 타는 사람)를 붙여요.', target: { has: [{ shape: 'rect', color: '갈색', n: 2 }, { shape: 'semi', color: '빨강', n: 1 }] }, difficulty: 0.15 },
          { prompt: '그네를 매단 버드나무를 나타내요. 갈색 긴 네모 하나(줄기)와 초록 나뭇잎 여섯 개 이상을 붙여요.', target: { has: [{ shape: 'rect', color: '갈색', n: 1 }, { shape: 'leaf', color: '초록', min: 6 }] }, difficulty: 0.2 },
          { prompt: '단오 그네 장면을 만들고 점검해요.', target: { selfCheck: ['그네와 나무를 모두 붙였어요', '이 장면이 단옷날 생활이라는 것을 짝에게 말했어요', '그네를 타는 사람이 보이도록 겹치지 않게 놓았어요'], minPieces: 5 }, difficulty: 0.1 },
        ],
      },
      {
        title: '우리 집 옛 풍습과 이어 말하기 (짝 활동)', tool: 'mindmap', pair: true,
        teacher: '짝에게 가족에게 들은 명절 놀이나 풍습(그네, 연날리기, 윷놀이)을 하나 말하게 한다. "그 풍습을 그림으로 그렸다면 어떤 모습이 그림에 있을까요?"라고 묻는다. 어른들께 들은 이야기가 없으면 교실에서 아는 놀이로 해도 된다. 그림 속 모습이 풍습에서 나왔다는 것을 활동지 3번에 쓰게 한다.',
        task: '아는 옛 풍습 하나를 짝에게 말하고, 그 풍습이 그림에 어떻게 나올지 말해요.',
        levels: { easy: { live: true }, base: {}, challenge: {} },
        items: [
          talk('내가 아는 명절이나 옛 놀이 하나를 짝에게 말하고 "다 했어요"를 누르세요.', '아는 풍습', ['풍습 이름', '언제 해요'], ['명절', '놀이', '음식']),
          talk('그 풍습을 그림으로 그리면 어떤 모습이 나올지 짝에게 말한 뒤 "다 했어요"를 누르세요.', '그림 속 모습', ['풍습', '그림 속 모습'], ['사람', '물건', '곳']),
          talk('짝의 풍습 이야기에서 새로 알게 된 것을 활동지에 쓴 뒤 "다 했어요"를 누르세요.', '새로 알게 된 것', ['짝의 풍습', '새로 안 것'], ['처음 들었어요', '우리 집과 달라요']),
        ],
      },
    ],
    wrap: {
      teacher: '"작품 속 모습 하나와 이어진 생활을 말해 볼까요?" 두세 명이 말하게 한다. "그냥 그린 거예요"라고 하는 학생에게는 "화가가 아무 모습이나 그렸다면 그 그림에서 그 시절을 알 수 있을까요?"라고 되묻는다. 출구 2번을 틀린 학생은 다음 시간 도입에 모습과 생활 짝짓기를 한 번 더 한다.',
      exit: [
        { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '모습과 생활 4', slots: [{ id: 's1', label: '고구려 무덤 벽화의 활 쏘는 사람' }, { id: 's2', label: '서당도의 훈장과 아이들' }], cards: [{ id: 'e1', text: '말을 타고 활로 사냥하던 생활' }, { id: 'e2', text: '마을 서당에서 글을 배우던 생활' }, { id: 'e3', text: '컴퓨터로 숙제하는 생활' }] }, prompt: '작품 속 모습마다 그 시절 생활을 이어 보세요. 시대가 맞지 않는 카드는 남겨 두세요.', target: { match: { s1: 'e1', s2: 'e2' } }, difficulty: 0.2 },
        { type: 'choice', prompt: '작품 속 모습과 생활을 이어 보는 까닭은 무엇인가요?', options: ['그림을 똑같이 그리려고', '그 시절 사람들의 삶을 알고 작품을 더 깊이 이해하려고', '옛날 물건을 모으려고'], answer: 1, difficulty: 0.15, explain: '작품 속 모습은 그 시절 삶에서 나온 것이어서 둘을 이으면 작품 이야기가 풍부해져요.' },
        { type: 'short', prompt: '오늘 이은 작품 속 모습과 그 시절 생활을 한 문장으로 쓰세요.' },
      ],
    },
    ws: {
      title: '모습과 생활 이어 쓰기',
      items: [
        { type: 'table', prompt: '작품 속 모습과 그 시절 생활을 짝지어 쓰세요.', columns: ['작품 속 모습', '그 시절 생활'], cells: [['말 탄 사냥꾼', ''], ['그네 타는 여인', ''], ['', '']] },
        { type: 'choice', prompt: '단오풍정과 이어지는 생활에 ○ 하세요.', options: ['단옷날에 그네를 타던 풍속', '학교에서 급식을 먹는 모습', '지하철을 타는 모습', '게임을 하는 모습'], answer: '단옷날에 그네를 타던 풍속' },
        { type: 'short', prompt: '내가 아는 옛 풍습을 그림으로 그리면 어떤 모습이 나올지 쓰세요.' },
        { type: 'draw', prompt: '옛 풍습 하나를 그림으로 그리고 이름을 쓰세요.' },
      ],
      easy: {
        note: '작품 속 모습은 그 시절 사람들이 하던 일에서 나와요.',
        items: [
          { type: 'choice', prompt: '그네와 이어지는 생활에 ○ 하세요.', options: ['단옷날 풍속', '지하철 타기'], answer: '단옷날 풍속' },
          { type: 'short', prompt: '작품 속 모습 하나를 쓰세요.' },
          { type: 'draw', prompt: '옛 풍습 장면을 그리세요.' },
        ],
      },
    },
    diff: {
      easy: '카드를 이으면 바로 맞는지 표시되고, 색종이는 모양 네 가지·색 네 가지·크기 두 가지만 나와요.',
      base: '스스로 이은 뒤 확인하고, 모양 여섯 가지와 모든 색을 써요.',
      challenge: '시대가 맞지 않아 이을 곳이 없는 카드가 섞여 있어 남겨야 해요.',
    },
    notes: '자주 보이는 어려움: ① 낱말만 보고 이어 엉뚱한 생활을 짝짓는다 → 모습과 생활을 하나의 문장으로 소리 내어 읽게 한다. ② 오늘날 생활 카드를 옛 작품과 이으려 한다 → 그림이 그려진 때가 언제인지 묻는다. ③ 그림은 화가의 상상일 뿐이라고 여긴다 → 풍속화는 그 시절 모습을 보고 그렸다고 짚는다. 확인 필요: 풍습 설명은 수업 전에 박물관 누리집과 맞춰 본다. 준비물: 모습·생활 카드 인쇄물, 도형 색종이.',
  });

  // ───────────── 7차시 (확장) ─────────────
  L(7, S1, {
    title: '우리나라 그림과 서양 그림을 때와 곳으로 견주기',
    objective: '우리나라 옛 그림과 서양 그림을 만든 사람·때·재료로 나누고, 곳이 다르면 그림의 재료와 소재가 어떻게 달라지는지 말할 수 있다.',
    ill: 'two framed paintings side by side on a gallery wall, a misty ink mountain scroll and a swirling starry night sky, with a child comparing them',
    scene: scn([{ motif: 'mountain', x: 110, y: 212, s: 1.2 }, { motif: 'star', x: 330, y: 96, s: 0.9 }, { motif: 'moon', x: 400, y: 120 }], '곳이 다르면 그림도 달라요', 22),
    intro: {
      teacher: '"한쪽은 먹으로 산을 그린 그림, 다른 쪽은 파랑·노랑으로 밤하늘을 그린 그림이에요. 두 그림이 이렇게 다른 까닭은 무엇일까요?" 학생이 말한 까닭(그린 사람이 다르다, 나라가 다르다)을 칠판에 적는다. "그린 곳과 때가 다르면 쓰는 재료와 그리는 것도 달라져요"라고 연다. 오늘은 우리나라 옛 그림과 서양 그림을 견주어 본다. 시연 단추로 카드가 두 작품 칸으로 나뉘는 모습을 보여 준다.',
      student: '먹으로 그린 산 그림과 파랑·노랑으로 그린 밤하늘 그림이 서로 다른 까닭이 무엇일지 말해 봅시다.',
      demo: { tool: 'mindmap', options: { topic: '두 그림 견주기', slots: ['몽유도원도', '모나리자'], cards: [{ id: 'd1', text: '비단에 먹과 옅은 색으로 그렸어요' }, { id: 'd2', text: '나무판에 유화 물감으로 그렸어요' }] }, sequence: [{ sort: { 몽유도원도: ['d1'], 모나리자: ['d2'] } }] },
    },
    acts: [
      {
        title: '두 작품의 정보 나누어 담기', tool: 'mindmap',
        teacher: '"이 카드는 왼쪽 작품 이야기일까요, 오른쪽 작품 이야기일까요?" 작가 이름과 나라, 재료 낱말(먹·비단·유화·캔버스)을 짚어 칸을 정하게 한다. 한 작품의 정보가 다른 작품에도 해당된다고 여기는 학생에게는 "두 작품이 같은 재료로 그려졌나요?"라고 묻는다. 도전 단계의 \'그림이 아름다워요\'는 정보가 아니라 느낌이라 어디에도 넣지 않는다.',
        task: '카드를 읽고 어느 작품의 정보인지 알맞은 칸에 나누어 넣어요.',
        items: [
          sortItem({ p: '몽유도원도와 모나리자의 정보 카드를 알맞은 작품 칸에 나누어 보세요.', topic: '동서양 그림 1', slots: ['몽유도원도', '모나리자'], groups: [['안견이 그렸어요', '조선 세종 때 그렸어요', '비단에 먹과 옅은 색으로 그렸어요'], ['레오나르도 다 빈치가 그렸어요', '이탈리아에서 16세기 초에 그렸어요', '나무판에 유화 물감으로 그렸어요']], extra: '그림이 아름다워요', hint: '화가 이름과 나라, 재료 낱말이 어느 작품의 설명에 나왔는지 떠올려요.', d: 0.2 }),
          sortItem({ p: '별이 빛나는 밤과 인왕제색도의 정보 카드를 알맞은 작품 칸에 나누어 보세요.', topic: '동서양 그림 2', slots: ['별이 빛나는 밤', '인왕제색도'], groups: [['고흐가 그렸어요', '프랑스 남쪽 생레미에서 1889년에 그렸어요', '유화 물감을 두껍게 발랐어요'], ['정선이 그렸어요', '1751년 서울 인왕산을 그렸어요', '종이에 먹으로 짙게 그렸어요']], extra: '그림이 아름다워요', d: 0.25 }),
          sortItem({ p: '인상, 해돋이와 세한도의 정보 카드를 알맞은 작품 칸에 나누어 보세요.', topic: '동서양 그림 3', slots: ['인상, 해돋이', '세한도'], groups: [['모네가 그렸어요', '1872년 프랑스 르아브르 항의 아침을 그렸어요', '빠른 붓질로 빛의 느낌을 살렸어요'], ['김정희가 그렸어요', '1844년 제주도에서 그렸어요', '마른 붓으로 소나무와 집을 간결하게 그렸어요']], extra: '그림이 아름다워요', d: 0.3,
            predict: { q: '그린 곳이 다르면 재료와 그림 소재도 다를까요?', options: ['똑같아요', '달라지는 경우가 많아요'], answer: 1 }, conclude: '곳이 다르면 쓰는 재료와 그리는 풍경도 달라져 그림의 모습이 달라져요.' }),
        ],
      },
      {
        title: '곳을 알려 주는 문장 가려내기', tool: 'mindmap',
        teacher: '"이 문장은 그림이 그려진 곳을 알려 주나요, 때를 알려 주나요?" 앞에서는 때·곳·재료를 모두 다루었지만 이번에는 곳만 가려낸다고 알려 준다. 연도 문장(1889년에 그렸어요)이 곳이 아니라는 것을 짚는다. 곳 이름이 나온 문장이라도 그림이 그려진 곳이 아니라 화가의 고향이라면 곳 문장이 아니라고 가르쳐 준다.',
        task: '문장 카드 가운데 그림이 그려진 곳이나 그림 속 곳을 알려 주는 문장만 담아요.',
        levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          pickItem({ p: '별이 빛나는 밤 소개에서 곳을 알려 주는 문장을 모두 담으세요.', topic: '별이 빛나는 밤', basket: '곳을 알려 주는 글', yes: ['프랑스 남쪽 생레미 마을이에요', '밤하늘 아래 마을과 사이프러스 나무가 보여요'], no: ['1889년에 그렸어요', '그림이 어두워요'], d: 0.2 }),
          pickItem({ p: '인상, 해돋이 소개에서 곳을 알려 주는 문장을 모두 담으세요.', topic: '인상, 해돋이', basket: '곳을 알려 주는 글', yes: ['프랑스 르아브르 항구예요', '바다 위에 작은 배들이 떠 있어요'], no: ['1872년에 그렸어요', '주황 해가 예뻐요'], d: 0.25 }),
          pickItem({ p: '인왕제색도 소개에서 곳을 알려 주는 문장을 모두 담으세요.', topic: '인왕제색도', basket: '곳을 알려 주는 글', yes: ['서울 인왕산을 그렸어요', '실제 바위산 모습을 그렸어요'], no: ['1751년에 그렸어요', '먹이 번져 멋있어요'], d: 0.3 }),
        ],
      },
    ],
    wrap: {
      teacher: '"우리나라 옛 그림과 서양 그림의 가장 큰 차이는 무엇이었나요?" 재료와 때, 곳으로 나누어 말하게 한다. "서양 그림은 다 밝고 우리 그림은 다 어두워요"처럼 하나로 일반화하는 학생에게는 "별이 빛나는 밤과 모네 그림도 같은 색인가요?"라고 반례를 묻는다. 출구 1번에서 두 작품의 정보를 섞은 학생은 다음 시간에 재료 카드를 한 번 더 나눈다.',
      exit: [
        { type: 'tool', tool: 'mindmap', options: { topic: '두 그림 견주기', slots: ['단오풍정', '별이 빛나는 밤'], cards: [{ id: 'e1', text: '신윤복이 조선 후기에 그렸어요' }, { id: 'e2', text: '고흐가 프랑스에서 1889년에 그렸어요' }, { id: 'e3', text: '단옷날 풍속을 그렸어요' }, { id: 'e4', text: '유화 물감을 두껍게 발랐어요' }] }, prompt: '정보 카드를 알맞은 작품 칸에 나누어 보세요.', target: { sort: { 단오풍정: ['e1', 'e3'], '별이 빛나는 밤': ['e2', 'e4'] } }, difficulty: 0.2 },
        { type: 'choice', prompt: '그림이 그려진 곳을 알려 주는 말은 무엇인가요?', options: ['1872년에 그렸어요', '프랑스 르아브르 항구예요', '그림이 예뻐요'], answer: 1, difficulty: 0.1, explain: '곳 이름이 나온 말이 그림이 그려진 곳을 알려 줘요.' },
        { type: 'short', prompt: '우리나라 그림과 서양 그림의 다른 점 한 가지를 쓰세요.' },
      ],
    },
    ws: {
      title: '두 그림 견주기',
      items: [
        { type: 'table', prompt: '두 작품의 정보를 찾아 쓰세요.', columns: ['', '누가·언제', '어디서', '재료'], cells: [['몽유도원도', '', '', ''], ['모나리자', '', '', '']] },
        { type: 'choice', prompt: '서양 그림의 재료에 ○ 하세요.', options: ['비단에 먹', '유화 물감', '종이에 먹', '색동 천'], answer: '유화 물감' },
        { type: 'short', prompt: '그린 곳이 다르면 그림에서 달라지는 점을 한 가지 쓰세요.' },
        { type: 'draw', prompt: '내가 사는 곳의 풍경을 그리고 쓴 재료를 쓰세요.' },
      ],
      easy: {
        note: '그린 사람과 나라, 재료를 보면 어느 작품인지 알 수 있어요.',
        items: [
          { type: 'choice', prompt: '서양 그림에 ○ 하세요.', options: ['몽유도원도', '모나리자'], answer: '모나리자' },
          { type: 'short', prompt: '우리나라 그림의 재료를 하나 쓰세요.' },
          { type: 'draw', prompt: '좋아하는 그림을 그리세요.' },
        ],
      },
    },
    diff: {
      easy: '카드를 놓으면 바로 맞는지 표시되고 틀리면 까닭을 말해 줘요.',
      base: '스스로 나눈 뒤 확인해요.',
      challenge: '정보가 아닌 느낌 카드가 섞여 있어 남겨야 해요.',
    },
    notes: '자주 보이는 어려움: ① 먹이나 유화가 어느 쪽 재료인지 몰라 찍는다 → 두 재료를 직접 보여 주거나 사진으로 보여 준다. ② 우리 그림은 모두 어둡고 서양 그림은 모두 밝다고 일반화한다 → 별이 빛나는 밤과 인왕제색도처럼 반례를 보여 준다. ③ 때와 곳을 섞는다 → 연도는 때, 곳 이름은 곳이라고 구별한다. 확인 필요: 작품 재료·연도는 수업 전에 미술관 누리집 설명과 맞춰 본다. 준비물: 두 그림 재료 사진.',
  });

  // ───────────── 8차시 (핵심) ─────────────
  L(8, S1, {
    title: '점토로 상감 무늬를 새기는 순서 짜 보기',
    objective: '상감 청자와 분청사기를 만든 방법을 순서대로 말하고, 같은 방법을 종이 도형으로 되풀이하는 무늬로 나타낼 수 있다.',
    ill: 'a potter hands pressing a pattern into a clay dish with a wooden stick, small celadon bowls and a white clay pot on the shelf behind',
    scene: scn([{ motif: 'house', x: 100, y: 214, s: 1.1 }, { motif: 'leaf', x: 330, y: 196, r: 20 }, { motif: 'star', x: 400, y: 150, s: 0.7 }], '새기고 메워 만드는 무늬', 22),
    safety: ['점토에 무늬를 새길 때 쓰는 나무 막대나 이쑤시개의 끝은 자기나 짝 쪽으로 향하지 않아요.', '쓰고 나면 바로 통에 꽂아 두고, 손을 씻은 뒤 다음 활동을 해요.'],
    intro: {
      teacher: '점토 접시 하나와 이쑤시개를 보여 준다. "이 접시 표면에 학 모양을 새기려고 해요. 어떻게 하면 그 무늬가 흰색으로 보이게 할 수 있을까요?" 학생 의견을 받는다. "옛날 도공들은 그릇 표면을 파서 다른 색 흙으로 메웠어요. 이것을 상감이라고 불러요. 고려 청자에서 많이 보여요"라고 알려 준다. 오늘은 상감의 순서를 정리하고 종이 도형으로 되풀이 무늬를 만들어 본다. 시연 단추로 순서 카드가 놓이는 모습을 보여 준다.',
      student: '점토 접시에 학 모양을 새기고 흰색으로 보이게 하려면 어떻게 하면 좋을지 생각을 말해 봅시다.',
      demo: { tool: 'story', options: { cards: [{ id: 'd1', text: '그릇을 빚어요' }, { id: 'd2', text: '무늬를 파요' }, { id: 'd3', text: '흙을 메워요' }], slots: ['처음', '가운데', '끝'] }, sequence: [{ order: ['d1', 'd2', 'd3'] }] },
    },
    acts: [
      {
        title: '도자기와 점토 작업 순서 놓기', tool: 'story',
        teacher: '"그릇을 굽기 전에 무늬를 파야 할까요, 구운 뒤에 파야 할까요?" 학생 의견을 받고 카드를 읽으며 순서를 바꿔 보게 한다. 청자는 무늬를 파고 다른 흙을 메운 뒤 유약을 입혀 굽는다는 순서를, 분청은 흰 흙을 입힌 뒤 무늬를 긁어낸다는 순서를 짚는다. 순서를 거꾸로 놓은 학생에게는 "파낸 곳을 메우려면 먼저 무엇이 있어야 할까요?"라고 되묻는다.',
        task: '그릇을 만드는 순서나 점토 작업 순서가 맞도록 카드를 처음부터 끝까지 놓아요.',
        items: [
          orderItem({ p: '상감 청자를 만드는 순서대로 카드를 놓아 보세요.', texts: ['흙으로 그릇을 빚어요', '표면에 무늬를 파요', '파낸 곳에 다른 색 흙을 메워요', '유약을 입혀 가마에서 구워요'], hint: '파낸 곳이 있어야 메울 수 있어요. 굽는 일은 모양이 다 만들어진 뒤에 해요.', d: 0.2 }),
          orderItem({ p: '분청사기를 만드는 순서대로 카드를 놓아 보세요.', texts: ['흙으로 그릇을 빚어요', '표면에 흰 흙을 입혀요', '흰 흙을 긁어 무늬를 내요', '유약을 입혀 가마에서 구워요'], d: 0.25 }),
          orderItem({ p: '교실에서 점토로 상감 접시를 만드는 순서대로 카드를 놓아 보세요.', texts: ['점토를 밀어 납작한 접시를 만들어요', '막대로 학 모양을 얕게 새겨요', '다른 색 점토를 새긴 곳에 눌러 채워요', '겉을 매끈하게 닦아 말려요'], d: 0.3,
            predict: { q: '파낸 곳에 다른 색 점토를 채우면 무늬는 어떻게 보일까요?', options: ['주변과 같은 색이에요', '색이 달라 또렷해요'], answer: 1 }, conclude: '다른 색 흙을 파낸 곳에 채우면 그 자리 색이 달라져 무늬가 또렷이 보여요.' }),
        ],
      },
      {
        title: '상감 무늬 되풀이하기', tool: 'collage',
        teacher: '"청자의 학과 구름 무늬는 한 번만 있지 않고 계속 되풀이되었지요." 한 묶음을 정해 같은 모양과 색, 같은 크기로 되풀이하게 한다. 묶음 사이에 다른 도형을 끼우는 학생에게는 "한 묶음이 무엇인지 소리 내어 말해 볼까요?"라고 묻는다. 한 묶음을 하나만 만들고 복사하듯 되풀이하는 법을 알려 준다.',
        task: '도형 두 개 한 묶음을 정해 같은 순서와 색, 크기로 줄지어 세 번 이상 되풀이해요.',
        levels: { easy: { shapes: ['circle', 'leaf', 'star', 'square'], colors: ['하양', '초록', '갈색', '검정'], sizes: ['m'] }, base: { shapes: ['circle', 'leaf', 'star', 'square', 'triangle', 'heart'] }, challenge: {} },
        items: [
          { prompt: '하양 동그라미와 초록 나뭇잎을 한 묶음으로 왼쪽에서 오른쪽으로 세 번 이상 되풀이해 붙여요.', target: { repeat: { times: 3, unit: 2 } }, state: { pieces: [{ shape: 'circle', color: '하양', size: 'm', x: 80, y: 200, r: 0 }, { shape: 'leaf', color: '초록', size: 'm', x: 140, y: 200, r: 0 }] }, difficulty: 0.2 },
          { prompt: '노랑 별과 하양 동그라미를 한 묶음으로 위에서 아래로 세 번 이상 되풀이해 붙여요.', target: { repeat: { times: 3, unit: 2, axis: 'y' } }, state: { pieces: [{ shape: 'star', color: '노랑', size: 'm', x: 280, y: 80, r: 0 }, { shape: 'circle', color: '하양', size: 'm', x: 280, y: 140, r: 0 }] }, difficulty: 0.3 },
          { prompt: '내가 만든 되풀이 무늬를 점검해요.', target: { selfCheck: ['한 묶음을 정했어요', '같은 묶음을 세 번 이상 되풀이했어요', '청자나 분청에서 본 무늬와 비슷한 점을 말했어요'], minPieces: 6 }, difficulty: 0.1 },
        ],
      },
      {
        title: '점토 상감 접시를 짝과 확인하기 (짝 활동)', tool: 'mindmap', pair: true,
        teacher: '점토 접시가 준비되면 짝끼리 서로 순서에 맞게 만들었는지 확인하게 한다. "처음에 한 일, 가운데 한 일, 마지막에 한 일을 말해 줄래요?" 순서를 말하지 못하는 짝에게는 순서 카드를 다시 읽어 준다. 점토 도구는 한 사람이 쓸 때 다른 사람이 지켜보고 쓰고 나면 통에 꽂게 한다.',
        task: '점토로 상감 접시를 만들고, 짝에게 만든 순서를 말해요.',
        levels: { easy: { live: true }, base: {}, challenge: {} },
        items: [
          talk('점토를 납작하게 밀어 접시를 만들고 짝에게 한 일을 말한 뒤 "다 했어요"를 누르세요.', '점토 접시', ['한 일', '짝 확인'], ['점토 밀기', '모양 다듬기']),
          talk('막대로 무늬를 새긴 뒤 다른 색 점토를 채우고 "다 했어요"를 누르세요.', '무늬 새기고 채우기', ['새긴 무늬', '채운 색'], ['학', '구름', '꽃']),
          talk('만든 순서를 짝에게 차례대로 말하고 활동지에 쓴 뒤 "다 했어요"를 누르세요.', '만든 순서 말하기', ['처음', '가운데', '마지막'], ['빚기', '새기기', '채우기']),
        ],
      },
    ],
    wrap: {
      teacher: '"상감과 분청에서 무늬를 만드는 방법은 어떻게 달랐나요?" 두세 명이 말하게 한다. "둘 다 그냥 구우면 돼요"라고 하는 학생에게는 "청자는 파낸 곳을 메웠고, 분청은 흰 흙을 입혀 긁어냈어요. 무엇이 달랐지요?"라고 짚는다. 출구 1번에서 순서를 거꾸로 놓은 학생은 다음 시간 도입에 카드를 한 번 더 놓는다.',
      exit: [
        { type: 'tool', tool: 'story', options: { cards: [{ id: 'e1', text: '표면에 무늬를 파요' }, { id: 'e2', text: '파낸 곳에 흰 흙을 메워요' }, { id: 'e3', text: '유약을 입혀 구워요' }], slots: ['처음', '가운데', '끝'] }, prompt: '청자 무늬를 만드는 순서대로 카드를 놓아 보세요.', target: { order: ['e1', 'e2', 'e3'] }, difficulty: 0.15 },
        { type: 'choice', prompt: '상감 기법으로 무늬를 만드는 방법은 무엇인가요?', options: ['표면에 그림을 그려요', '표면을 파고 다른 흙을 메워요', '그릇 위에 천을 붙여요'], answer: 1, difficulty: 0.15, explain: '상감은 표면을 파고 그곳에 다른 색 흙을 메워 무늬를 내는 방법이에요.' },
        { type: 'short', prompt: '오늘 만든 되풀이 무늬에서 한 묶음이 무엇인지 쓰세요.' },
      ],
    },
    ws: {
      title: '상감 순서와 되풀이 무늬',
      items: [
        { type: 'table', prompt: '상감 무늬를 만드는 순서를 번호 칸에 쓰세요.', columns: ['번호', '한 일'], cells: [['1', ''], ['2', ''], ['3', ''], ['4', '']] },
        { type: 'choice', prompt: '파낸 곳에 다른 색 흙을 메워 무늬를 내는 방법에 ○ 하세요.', options: ['상감', '그림 그리기', '천 붙이기', '실 꿰기'], answer: '상감' },
        { type: 'figure', wide: true, prompt: '한 묶음이 되풀이되도록 오른쪽 빈자리에 같은 모양을 그려 넣으세요.', tool: 'collage', options: { printColors: false }, figures: [{ state: { pieces: [{ shape: 'circle', color: '하양', size: 'm', x: 80, y: 200, r: 0 }, { shape: 'leaf', color: '초록', size: 'm', x: 140, y: 200, r: 0 }, { shape: 'circle', color: '하양', size: 'm', x: 200, y: 200, r: 0 }, { shape: 'leaf', color: '초록', size: 'm', x: 260, y: 200, r: 0 }] }, caption: '동그라미 · 나뭇잎 · 동그라미 · 나뭇잎 · …' }], answer: '동그라미, 나뭇잎' },
        { type: 'draw', prompt: '내가 만든 점토 접시의 무늬를 그리세요.' },
      ],
      easy: {
        note: '그릇을 빚고 → 무늬를 파고 → 다른 흙을 메우고 → 구워요.',
        items: [
          { type: 'choice', prompt: '가장 먼저 하는 일에 ○ 하세요.', options: ['그릇 빚기', '굽기'], answer: '그릇 빚기' },
          { type: 'short', prompt: '무늬를 낼 때 한 일을 하나 쓰세요.' },
          { type: 'draw', prompt: '접시 무늬를 그리세요.' },
        ],
      },
    },
    diff: {
      easy: '카드를 놓으면 바로 맞는지 표시되고, 색종이는 모양 네 가지·색 네 가지·크기 하나만 나와요.',
      base: '스스로 놓은 뒤 확인하고, 모양 여섯 가지와 모든 색을 써요.',
      challenge: '위에서 아래로 되풀이하는 문항이 있어요.',
    },
    notes: '자주 보이는 어려움: ① 굽는 일을 먼저 놓는다 → 모양과 무늬가 다 만들어진 뒤에 굽는다고 짚는다. ② 청자와 분청의 방법을 섞는다 → 청자는 파고 메우기, 분청은 흰 흙 입혀 긁기라고 다시 정한다. ③ 한 묶음을 하나의 도형으로만 보고 되풀이를 못 센다 → 두 도형이 한 묶음이라고 소리 내어 센다. 확인 필요: 도자기 만드는 순서는 박물관 누리집 설명과 맞춰 본다. 준비물: 점토, 나무 막대, 색 점토, 접시 받침(점토 도구를 쓸 때 위 안전 사항을 먼저 읽는다).',
  });

  // ───────────── 9차시 (연습) ─────────────
  L(9, S1, {
    title: '다섯 방위 색으로 우리 옛 색의 뜻 읽기',
    objective: '동·서·남·북·가운데에 짝지어진 다섯 가지 옛 색을 방위와 이어 말하고, 그 색이 옛 사람들의 생각에서 나왔음을 설명할 수 있다.',
    ill: 'a traditional wooden pavilion eaves painted with blue red yellow white and black decorative stripes against a clear sky',
    scene: scn([{ motif: 'house', x: 250, y: 214, s: 1.5 }, { motif: 'cloud', x: 380, y: 110 }, { motif: 'star', x: 120, y: 130, s: 0.8 }], '다섯 방위, 다섯 색', 22),
    intro: {
      teacher: '"전통 건물의 처마 아래에 알록달록한 무늬를 본 적이 있나요?" 단청 사진을 보여 준다. "저 색은 아무렇게나 칠한 것이 아니에요. 옛 사람들은 방향마다 색을 하나씩 정해 두었어요." 청·백·적·흑·황 다섯 색을 칠판에 쓰고 "오늘은 방위와 색을 짝지어 봐요"라고 연다. 시연 단추로 방위 칸과 색 카드가 이어지는 모습을 보여 준다.',
      student: '전통 건물 처마 밑 알록달록한 무늬를 떠올려 어떤 색들이 있었는지 말해 봅시다.',
      demo: { tool: 'mindmap', options: { mode: 'match', topic: '옛 방위 색', slots: [{ id: 's1', label: '동쪽' }], cards: [{ id: 'c1', text: '파란색' }, { id: 'c2', text: '검은색' }] }, sequence: [{ match: { s1: 'c1' } }] },
    },
    acts: [
      {
        title: '방위와 색 짝 짓기', tool: 'mindmap',
        teacher: '"동쪽은 해가 뜨는 쪽이에요. 옛 사람들은 이 방향에 어떤 색을 짝지었을까요?" 먼저 짐작하게 한 뒤 카드를 이어 맞춰 본다. 다섯 방위 색은 동 파랑, 서 하양, 남 빨강, 북 검정, 가운데 노랑이라고 짚는다. 헷갈리는 학생에게는 해 뜨는 곳이 동쪽인데 새싹이 돋는 푸른 느낌과 이어졌다는 이야기를 들려준다. 도전 단계에는 짝이 없는 보라 카드가 섞여 있다.',
        task: '왼쪽 방위마다 짝이 되는 옛 색 카드를 하나씩 이어요.',
        items: [
          matchItem({ p: '동·서·남·북에 짝지어진 옛 색을 이어 보세요.', topic: '방위와 색 1', pairs: [['동쪽', '파란색'], ['서쪽', '흰색'], ['남쪽', '붉은색'], ['북쪽', '검은색']], extra: '보라색', hint: '해 뜨는 쪽, 해 지는 쪽, 따뜻한 쪽, 추운 쪽을 떠올려 색과 이어 봐요.', d: 0.2 }),
          matchItem({ p: '가운데를 포함한 다섯 방위에 짝지어진 옛 색을 이어 보세요.', topic: '방위와 색 2', pairs: [['동쪽', '파란색'], ['서쪽', '흰색'], ['남쪽', '붉은색'], ['북쪽', '검은색'], ['가운데', '노란색']], extra: '분홍색', d: 0.25 }),
          matchItem({ p: '색마다 짝지어진 방위를 이어 보세요.', topic: '색과 방위', pairs: [['노란색', '가운데'], ['붉은색', '남쪽'], ['검은색', '북쪽'], ['흰색', '서쪽']], extra: '바닥', d: 0.3,
            predict: { q: '옛 사람들이 방위마다 색을 정한 까닭은 무엇일까요?', options: ['우연히 정했어요', '방위와 자연의 생각을 색에 담았어요'], answer: 1 }, conclude: '옛 사람들은 방위와 자연의 생각을 색에 담아 건물과 옷, 그림에 썼어요.' }),
        ],
      },
      {
        title: '다섯 색을 한 조각씩 붙이기', tool: 'collage',
        teacher: '"다섯 색이 모두 들어가야 해요. 한 색이 두 번 들어가도 되나요?" 먼저 방위 색 하나씩 붙이고, 그다음 한 색이 다른 색과 맞닿는 곳을 살펴보게 한다. 색을 하나 빠뜨린 학생에게는 "오방색 이름을 다시 불러 볼까요?"라고 묻는다. 도형은 색 조각을 보기 쉽게 놓는 판일 뿐이라고 말해 준다.',
        task: '파랑·하양·빨강·검정·노랑 도형을 하나씩 붙여 다섯 방위 색을 모두 나타내요.',
        levels: { easy: { shapes: ['circle', 'square', 'rect'], colors: ['파랑', '하양', '빨강', '검정', '노랑'], sizes: ['m', 'l'] }, base: { shapes: ['circle', 'square', 'triangle', 'rect', 'star', 'diamond'] }, challenge: {} },
        items: [
          { prompt: '파랑·하양·빨강·검정·노랑 동그라미를 한 개씩 붙여 다섯 방위 색을 나타내요.', target: { has: [{ shape: 'circle', color: '파랑', n: 1 }, { shape: 'circle', color: '하양', n: 1 }, { shape: 'circle', color: '빨강', n: 1 }, { shape: 'circle', color: '검정', n: 1 }, { shape: 'circle', color: '노랑', n: 1 }] }, difficulty: 0.15 },
          { prompt: '파랑 긴 네모와 빨강 긴 네모를 겹치도록 붙이고, 노랑 큰 네모를 가운데에 놓아요.', target: { has: [{ shape: 'rect', color: '파랑', n: 1 }, { shape: 'rect', color: '빨강', n: 1 }, { shape: 'square', color: '노랑', size: 'l', n: 1 }], overlap: 1 }, difficulty: 0.25 },
          { prompt: '단청처럼 색을 쓴 무늬를 만들고 점검해요.', target: { selfCheck: ['다섯 색을 모두 썼어요', '방위와 색을 짝지어 짝에게 말했어요', '색이 맞닿는 곳이 또렷이 보여요'], minPieces: 5 }, difficulty: 0.1 },
        ],
      },
      {
        title: '우리 둘레의 다섯 색 찾기 (짝 활동)', tool: 'mindmap', pair: true,
        teacher: '교실이나 복도, 사진 속 전통 건물, 색동 천 같은 곳에서 오방색을 찾아 짝에게 보여 주게 한다. "이 색은 어느 방위의 색일까요?"라고 서로 묻게 한다. 색이 비슷해 헷갈릴 때는 한 색씩 짚으며 이름을 말하게 한다. 찾은 곳은 활동지 3번에 쓰게 한다.',
        task: '둘레에서 방위 색을 찾아 짝에게 보여 주고, 어느 방위의 색인지 말해요.',
        levels: { easy: { live: true }, base: {}, challenge: {} },
        items: [
          talk('교실이나 사진에서 방위 색 하나를 찾아 짝에게 보여 주고 "다 했어요"를 누르세요.', '둘레의 방위 색', ['찾은 곳', '색'], ['파랑', '빨강', '노랑']),
          talk('찾은 색이 어느 방위의 색인지 짝과 정한 뒤 "다 했어요"를 누르세요.', '방위 맞히기', ['색', '방위'], ['동쪽', '남쪽', '가운데']),
          talk('짝이 찾은 색에서 새로 알게 된 것을 활동지에 쓴 뒤 "다 했어요"를 누르세요.', '새로 알게 된 것', ['짝의 색', '새로 안 것'], ['색동', '단청']),
        ],
      },
    ],
    wrap: {
      teacher: '"오늘 알게 된 방위와 색을 한 쌍 말해 볼까요?" 두세 명이 말하게 한다. "빨강은 그냥 화나는 색이에요"라고 하는 학생에게는 "옛 사람들은 남쪽의 따뜻함과 이어 보았어요. 나라마다 색의 뜻이 달라요"라고 짚는다. 출구 2번을 틀린 학생은 다음 시간 도입에 방위 칸 짝짓기를 한 번 더 한다.',
      exit: [
        { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '방위와 색 3', slots: [{ id: 's1', label: '서쪽' }, { id: 's2', label: '북쪽' }], cards: [{ id: 'e1', text: '흰색' }, { id: 'e2', text: '검은색' }, { id: 'e3', text: '초록색' }] }, prompt: '방위마다 짝지어진 옛 색을 이어 보세요. 짝이 없는 카드는 남겨 두세요.', target: { match: { s1: 'e1', s2: 'e2' } }, difficulty: 0.2 },
        { type: 'choice', prompt: '가운데에 짝지어진 옛 색은 무엇인가요?', options: ['노란색', '검은색', '흰색'], answer: 0, difficulty: 0.1, explain: '다섯 방위 색에서 가운데는 노란색이에요.' },
        { type: 'short', prompt: '우리 둘레에서 찾은 방위 색 하나와 그 방위를 쓰세요.' },
      ],
    },
    ws: {
      title: '다섯 방위 색',
      items: [
        { type: 'table', prompt: '방위마다 짝지어진 옛 색을 쓰세요.', columns: ['방위', '색'], cells: [['동쪽', ''], ['서쪽', ''], ['남쪽', ''], ['북쪽', ''], ['가운데', '']] },
        { type: 'choice', prompt: '남쪽에 짝지어진 옛 색에 ○ 하세요.', options: ['파란색', '붉은색', '검은색', '흰색'], answer: '붉은색' },
        { type: 'short', prompt: '내 둘레에서 찾은 방위 색과 찾은 곳을 쓰세요.' },
        { type: 'draw', prompt: '다섯 색을 사용해 단청 같은 무늬를 그려 보세요.' },
      ],
      easy: {
        note: '동쪽은 파랑, 서쪽은 하양, 남쪽은 빨강, 북쪽은 검정, 가운데는 노랑이에요.',
        items: [
          { type: 'choice', prompt: '동쪽의 색에 ○ 하세요.', options: ['파란색', '빨간색'], answer: '파란색' },
          { type: 'short', prompt: '아는 색 하나와 방위를 쓰세요.' },
          { type: 'draw', prompt: '색 무늬를 그리세요.' },
        ],
      },
    },
    diff: {
      easy: '카드를 이으면 바로 맞는지 표시되고, 색종이는 동그라미와 네모, 크기 하나만 나와요.',
      base: '스스로 이은 뒤 확인하고, 모양 여섯 가지를 써요.',
      challenge: '짝이 없는 카드가 섞여 있고, 겹치는 문항이 있어요.',
    },
    notes: '자주 보이는 어려움: ① 가운데를 빼먹는다 → 방위가 다섯이라고 손가락으로 센다. ② 색의 뜻을 오늘날 느낌으로만 해석한다 → 옛 사람들의 생각에서 나왔다고 짚는다. ③ 흰색을 색이 아니라고 여긴다 → 오방색에는 흰색과 검정도 들어간다고 말한다. 확인 필요: 오방색의 방위 짝은 수업 전에 전통 색 자료와 한 번 맞춰 본다. 준비물: 단청·색동 사진, 오방색 색종이.',
  });

  // ───────────── 10차시 (확장) ─────────────
  L(10, S1, {
    title: '자투리 천을 이어 조각보 구성하기',
    objective: '조각보가 남은 천을 이어 만든 것임을 알고, 그 쓰임과 만드는 순서를 말하며 도형 조각으로 조각보를 구성할 수 있다.',
    ill: 'a patchwork cloth bojagi made of small colorful square cloth pieces hanging on a clothes line in sunlight with scissors and needle beside it',
    scene: scn([{ motif: 'house', x: 110, y: 216, s: 1 }, { motif: 'flower', x: 370, y: 220, color: 'rose' }, { motif: 'leaf', x: 300, y: 204, r: 15 }], '남은 천으로 만든 보자기', 22),
    intro: {
      teacher: '교실의 자투리 색종이를 여러 장 책상에 펼쳐 놓는다. "이 조각들로 보자기 한 장을 만든다면 어떻게 할까요?" 학생이 말한 방법(이어 붙인다, 색을 맞춘다)을 듣고 "옛날에는 옷을 짓고 남은 천을 버리지 않고 모아 조각보를 만들었어요"라고 알려 준다. 오늘은 조각보를 만드는 마음과 순서를 알고 도형으로 구성해 본다고 연다. 시연 단추로 카드가 사실 칸에 담기는 모습을 보여 준다.',
      student: '자투리 색종이로 보자기를 만든다면 어떻게 이어 붙일지 말해 봅시다.',
      demo: { tool: 'mindmap', options: { mode: 'pick', topic: '조각보', basket: '조각보 설명', cards: [{ id: 'd1', text: '남은 천을 모아 이어 만들었어요' }, { id: 'd2', text: '금속으로 만들었어요' }] }, sequence: [{ pick: ['d1'] }] },
    },
    acts: [
      {
        title: '조각보 이야기 사실 골라 담기', tool: 'mindmap',
        teacher: '"이 문장은 조각보에 대한 사실일까요?" 문장마다 \'남은 천\', \'이어 붙임\', \'싸는 데 씀\' 같은 낱말을 짚게 한다. 틀린 문장은 이유를 한 번 말하게 한다. 도전 단계에서는 사실처럼 보이지만 조각보와 상관없는 문장이 섞여 있다. 문장이 사실인지 모르면 모른다고 말하고 그림책이나 사진 설명을 다시 읽게 한다.',
        task: '카드 가운데 조각보에 대한 사실을 알려 주는 문장만 골라 담아요.',
        items: [
          pickItem({ p: '조각보에 대한 사실을 알려 주는 문장을 모두 고르세요.', topic: '조각보 이야기', basket: '조각보 설명', yes: ['쓰고 남은 작은 천을 모아 이어 붙였어요', '물건을 싸거나 덮는 데 썼어요', '네모 조각이 이어져 무늬가 생겼어요'], no: ['한 장의 큰 비단으로만 만들었어요', '금속으로 만들었어요'], hint: '남은 천을 이어 붙인 점과 쓰임에 어긋나는 문장은 담지 않아요.', d: 0.2 }),
          orderItem({ p: '조각보를 만드는 순서대로 카드를 놓아 보세요.', texts: ['남은 천 조각을 모아요', '색과 크기를 맞춰 놓아 봐요', '조각을 이어 붙여요', '가장자리를 정리해요'], d: 0.25 }),
          sortItem({ p: '조각보의 쓰임과 만든 방법을 카드로 나누어 보세요.', topic: '조각보 쓰임과 방법', slots: ['쓰임', '만든 방법'], groups: [['물건을 싸는 데 썼어요', '밥상을 덮는 데 썼어요'], ['천 조각을 이어 붙였어요', '바늘로 꿰맸어요']], extra: '벽에 걸어 두기만 했어요', d: 0.3 }),
        ],
      },
      {
        title: '조각보 조각을 도형으로 구성하기', tool: 'collage',
        teacher: '"조각마다 색이 달라도 이어 놓으면 한 장이 돼요. 이웃한 조각끼리는 어떤 색이 어울릴까요?" 이웃한 조각의 밝고 어두운 색 대비를 살펴보게 한다. 색을 한 가지로 맞추려는 학생에게는 "조각보는 서로 다른 조각이 모여서 예뻐요. 다른 색 하나를 옆에 놓아 볼까요?"라고 말한다.',
        task: '네모 도형을 이웃하게 붙여 조각보를 만들고, 밝은 색과 어두운 색이 맞닿게 해요.',
        levels: { easy: { shapes: ['square', 'rect', 'triangle', 'diamond'], colors: ['빨강', '파랑', '노랑', '초록', '하양', '검정'], sizes: ['m'] }, base: { shapes: ['square', 'rect', 'triangle', 'diamond', 'circle', 'star'] }, challenge: {} },
        items: [
          { prompt: '빨강·파랑·노랑·초록 네모를 각각 두 개 이상 붙여 조각보 조각을 모아요.', target: { has: [{ shape: 'square', color: '빨강', min: 2 }, { shape: 'square', color: '파랑', min: 2 }, { shape: 'square', color: '노랑', min: 2 }, { shape: 'square', color: '초록', min: 2 }] }, difficulty: 0.2 },
          { prompt: '밝은 네모와 어두운 네모를 맞닿게 붙여 조각 사이가 또렷하게 보이게 해요.', target: { contrast: 'light-dark', has: [{ shape: 'square', min: 4 }] }, difficulty: 0.25 },
          { prompt: '내가 구성한 조각보를 점검해요.', target: { selfCheck: ['네모 조각을 이어 붙였어요', '색이 다른 조각을 이웃하게 놓았어요', '남은 천을 모아 만든 마음을 짝에게 말했어요'], minPieces: 8 }, difficulty: 0.1 },
        ],
      },
      {
        title: '조각보 설계 이야기 나누기 (짝 활동)', tool: 'mindmap', pair: true,
        teacher: '짝끼리 자투리 색종이로 조각보 한 장을 어떻게 이을지 계획을 나누게 한다. "어떤 색 조각을 가운데 두고 싶나요? 그 까닭은 무엇인가요?" 색을 정하는 까닭을 말하지 못하는 학생에게는 "색 조각을 옆에 놓아 보고 어느 쪽이 더 잘 어울리는지 고르면 돼요"라고 말한다. 둘의 계획 가운데 하나를 골라 활동지에 쓰게 한다.',
        task: '짝과 조각보 계획을 나누고, 가운데에 놓을 조각과 그 까닭을 말해요.',
        levels: { easy: { live: true }, base: {}, challenge: {} },
        items: [
          talk('조각보에 쓸 색 조각 몇 개를 짝에게 말하고 "다 했어요"를 누르세요.', '쓸 색 조각', ['고른 색', '조각 수'], ['빨강', '파랑', '노랑']),
          talk('가운데에 놓을 조각과 그 까닭을 짝에게 말하고 "다 했어요"를 누르세요.', '가운데 조각', ['고른 조각', '까닭'], ['눈에 잘 띄어요', '색이 어울려요']),
          talk('둘이 정한 조각보 계획을 활동지에 쓴 뒤 "다 했어요"를 누르세요.', '조각보 계획', ['정한 계획', '짝의 생각'], ['색 맞추기', '조각 이어 붙이기']),
        ],
      },
    ],
    wrap: {
      teacher: '"조각보를 만든 옛 사람들의 마음은 무엇이었을까요?" 두세 명의 대답을 받는다. "그냥 돈이 없어서 만든 거예요"라고 하는 학생에게는 "남은 천도 버리지 않고 쓰면서 아름답게 이었다는 점은 무엇을 보여 줄까요?"라고 되묻는다. 출구 1번에서 만든 순서를 거꾸로 놓은 학생은 다음 시간에 조각보 순서 카드를 한 번 더 놓는다.',
      exit: [
        { type: 'tool', tool: 'mindmap', options: { topic: '조각보 쓰임과 방법', slots: ['쓰임', '만든 방법'], cards: [{ id: 'e1', text: '선물을 싸는 데 썼어요' }, { id: 'e2', text: '천 조각을 이어 꿰맸어요' }, { id: 'e3', text: '밥상을 덮는 데 썼어요' }] }, prompt: '조각보 카드를 쓰임과 만든 방법으로 나누어 보세요.', target: { sort: { 쓰임: ['e1', 'e3'], '만든 방법': ['e2'] } }, difficulty: 0.2 },
        { type: 'choice', prompt: '조각보에 담긴 옛 사람들의 마음으로 가장 알맞은 것은 무엇인가요?', options: ['새 천만 쓰려는 마음', '남은 것도 아껴 쓰고 아름답게 만드는 마음', '크게 보이려는 마음'], answer: 1, difficulty: 0.15, explain: '조각보는 남은 천을 이어 붙여 아끼고 아름답게 쓴 생활의 지혜를 보여 줘요.' },
        { type: 'short', prompt: '조각보 한 장을 만든다면 가운데에 놓을 조각과 까닭을 쓰세요.' },
      ],
    },
    ws: {
      title: '조각보 구성하기',
      items: [
        { type: 'table', prompt: '조각보 계획을 쓰세요.', columns: ['쓸 색', '놓을 자리', '까닭'], cells: [['', '', ''], ['', '', '']] },
        { type: 'choice', prompt: '조각보에 대한 사실에 ○ 하세요.', options: ['남은 천을 이어 붙여 만들었어요', '한 장의 큰 천으로만 만들었어요', '금속 조각을 이어 붙였어요', '그림으로만 그렸어요'], answer: '남은 천을 이어 붙여 만들었어요' },
        { type: 'short', prompt: '조각보를 만든 옛 사람들의 마음을 한 문장으로 쓰세요.' },
        { type: 'draw', prompt: '네모 조각 아홉 개로 조각보를 그리고 색을 이름으로 적으세요.' },
      ],
      easy: {
        note: '조각보는 남은 천을 이어 붙여 만들어요.',
        items: [
          { type: 'choice', prompt: '조각보를 만드는 재료에 ○ 하세요.', options: ['남은 천', '쇠붙이'], answer: '남은 천' },
          { type: 'short', prompt: '조각보에 쓸 색 하나를 쓰세요.' },
          { type: 'draw', prompt: '조각보를 그리세요.' },
        ],
      },
    },
    diff: {
      easy: '카드를 놓으면 바로 맞는지 표시되고, 색종이는 모양 네 가지·색 여섯 가지·크기 하나만 나와요.',
      base: '스스로 정리한 뒤 확인하고, 모양 여섯 가지와 모든 색을 써요.',
      challenge: '사실과 비슷해 보이지만 틀린 카드가 섞여 있고, 밝고 어두운 색이 맞닿게 해요.',
    },
    notes: '자주 보이는 어려움: ① 조각보를 단순히 가난해서 만든 물건으로만 본다 → 남은 것을 아끼고 아름답게 만든 점을 함께 말한다. ② 색을 한 가지로 맞추려 한다 → 서로 다른 색이 모여 아름답다는 점을 보여 준다. ③ 순서를 거꾸로 놓는다 → 조각을 모아야 이을 수 있다고 짚는다. 확인 필요: 조각보 설명은 박물관 누리집 자료와 한 번 맞춰 본다. 준비물: 자투리 색종이, 풀, 도화지.',
  });

    // ───────────── 11차시 (핵심) ─────────────
  L(11, S2, {
    title: '그림 속 이야기와 표현 방법을 내용과 형식으로 가르기',
    objective: '작품에서 무엇을 그렸는지(내용)와 어떻게 나타냈는지(형식)를 구별해, 한 작품에 대해 두 가지를 따로 말할 수 있다.',
    ill: 'a child pointing at a swirling night sky painting with a split speech bubble, one half showing a village and the other half showing brush strokes',
    scene: scn([{ motif: 'moon', x: 380, y: 100 }, { motif: 'star', x: 120, y: 120, s: 0.9 }, { motif: 'tree', x: 250, y: 218, s: 1.1 }], '무엇을, 어떻게', 24),
    intro: {
      teacher: '교실 창밖 풍경이나 학급 게시판 사진을 보여 주며 "이 그림에서 무엇이 보이나요?"라고 묻는다. 학생이 말한 것(나무, 건물, 사람)을 칠판 왼쪽에 적는다. "이번에는 그것을 어떻게 그렸는지 말해 볼까요? 선이 굵은지, 색이 밝은지, 붓 자국이 보이는지요." 학생이 말한 것을 오른쪽에 적는다. "왼쪽은 내용, 오른쪽은 형식이라고 불러요. 감상할 때는 이 둘을 따로 보면 더 많이 보여요." 시연 단추로 카드가 두 칸으로 나뉘는 모습을 보여 준다.',
      student: '그림에서 무엇이 보이는지 하나, 그것을 어떻게 그렸는지 하나를 말해 봅시다.',
      demo: { tool: 'mindmap', options: { topic: '별이 빛나는 밤', slots: ['내용', '형식'], cards: [{ id: 'd1', text: '밤하늘 아래 마을이 있어요' }, { id: 'd2', text: '짧은 붓질이 소용돌이쳐요' }] }, sequence: [{ sort: { 내용: ['d1'], 형식: ['d2'] } }] },
    },
    acts: [
      {
        title: '내용과 형식으로 문장 나누기', tool: 'mindmap',
        teacher: '"이 문장은 무엇을 그렸는지를 말하나요, 어떻게 그렸는지를 말하나요?" 문장마다 \'~가 있어요\'는 내용, \'~로 칠했어요/~하게 그렸어요\'는 형식이라고 말을 붙여 가르친다. 형식 문장에는 붓질·색·먹의 짙고 옅음 같은 낱말이 나온다. 도전 단계의 \'그림이 아름다워요\'는 내용도 형식도 아니고 내 느낌이므로 어디에도 넣지 않는다.',
        task: '작품 설명 카드를 읽고, 무엇을 그렸는지(내용)와 어떻게 그렸는지(형식)로 나누어 넣어요.',
        items: [
          sortItem({ p: '별이 빛나는 밤의 카드를 내용과 형식으로 나누어 보세요.', topic: '별이 빛나는 밤', slots: ['내용', '형식'], groups: [['밤하늘 아래 마을이 있어요', '큰 사이프러스 나무가 서 있어요'], ['짧은 붓질이 소용돌이쳐요', '파랑과 노랑을 맞닿게 썼어요']], extra: '그림이 아름다워요', hint: '무엇이 있는지를 말하면 내용, 어떻게 그리고 칠했는지를 말하면 형식이에요.', d: 0.2 }),
          sortItem({ p: '인왕제색도의 카드를 내용과 형식으로 나누어 보세요.', topic: '인왕제색도', slots: ['내용', '형식'], groups: [['비 갠 뒤 인왕산 바위산이에요', '산 아래 집과 나무가 있어요'], ['짙은 먹으로 바위를 크게 칠했어요', '아래쪽 안개는 옅은 먹으로 나타냈어요']], extra: '산이 멋있어요', d: 0.25 }),
          sortItem({ p: '씨름도의 카드를 내용과 형식으로 나누어 보세요.', topic: '씨름도', slots: ['내용', '형식'], groups: [['두 사람이 씨름을 해요', '구경꾼이 둘러앉아 있어요'], ['구경꾼을 둥글게 둘러앉혀 구도를 잡았어요', '배경을 거의 그리지 않았어요']], extra: '재미있어요', d: 0.3,
            predict: { q: '내용만 말하고 형식을 말하지 않으면 작품 설명이 어떨까요?', options: ['충분해요', '반쪽만 말한 거예요'], answer: 1 }, conclude: '내용과 형식을 함께 말해야 작품이 무엇을 어떻게 나타냈는지 온전히 설명돼요.' }),
        ],
      },
      {
        title: '내용과 형식을 도형으로 나타내기', tool: 'collage',
        teacher: '"별빛이 환하게 보이는 까닭은 색이 어떻게 놓였기 때문일까요?" 형식 가운데 색 대비를 도형으로 보게 한다. 인왕제색도는 큰 바위를 크게 놓는 구도로 형식을 보게 한다. 내용(무엇)과 형식(어떻게)을 도형 하나에서 각각 짚어 보게 한다. 도형을 그림처럼 꾸미려는 학생에게는 "어디가 내용이고 어디가 형식인지 말할 수 있게 놓아요"라고 말한다.',
        task: '도형으로 색 대비나 큰 모양 같은 형식을 나타내고, 어떤 내용을 담았는지 말해요.',
        levels: { easy: { shapes: ['square', 'star', 'triangle', 'circle'], colors: ['파랑', '노랑', '검정', '하양', '갈색'], sizes: ['s', 'l'] }, base: { shapes: ['square', 'star', 'triangle', 'circle', 'rect', 'leaf'] }, challenge: {} },
        items: [
          { prompt: '별빛이 환하게 보이게 해요. 파랑 큰 네모(밤하늘)에 노랑 별 세 개 이상을 맞닿게 붙여요.', target: { contrast: 'warm-cool', has: [{ shape: 'square', color: '파랑', size: 'l', min: 1 }, { shape: 'star', color: '노랑', min: 3 }] }, difficulty: 0.2 },
          { prompt: '바위산을 크게 나타내요. 검정 큰 세모 하나와 갈색 작은 네모(집) 하나를 붙여요.', target: { has: [{ shape: 'triangle', color: '검정', size: 'l', n: 1 }, { shape: 'square', color: '갈색', size: 's', min: 1 }] }, difficulty: 0.2 },
          { prompt: '내용과 형식이 함께 보이는 도형 그림을 만들고 점검해요.', target: { selfCheck: ['무엇을 나타냈는지 짝에게 말했어요', '어떻게 나타냈는지 색이나 크기로 말했어요', '내용과 형식을 나누어 말했어요'], minPieces: 4 }, difficulty: 0.1 },
        ],
      },
      {
        title: '내용 한 문장, 형식 한 문장 말하기 (짝 활동)', tool: 'mindmap', pair: true,
        teacher: '짝끼리 작품 사진이나 교실 그림 한 장을 정해 "이 그림은 무엇을 그렸어요. 그리고 이렇게 그렸어요" 순서로 두 문장을 말하게 한다. 두 문장이 모두 내용인 짝에게는 "두 번째 문장은 색이나 선, 붓 자국을 말했나요?"라고 되묻는다. 말한 문장은 활동지 3번에 두 줄로 쓰게 한다.',
        task: '작품 하나를 골라 내용 한 문장, 형식 한 문장을 짝에게 말해요.',
        levels: { easy: { live: true }, base: {}, challenge: {} },
        items: [
          talk('작품 하나를 골라 무엇을 그렸는지 한 문장으로 짝에게 말하고 "다 했어요"를 누르세요.', '내용 말하기', ['작품', '내용'], ['사람', '풍경', '물건']),
          talk('같은 작품을 어떻게 그렸는지 한 문장으로 짝에게 말하고 "다 했어요"를 누르세요.', '형식 말하기', ['작품', '형식'], ['색', '선', '붓 자국']),
          talk('짝의 두 문장이 내용과 형식인지 확인하고 활동지에 쓴 뒤 "다 했어요"를 누르세요.', '짝 확인', ['짝의 내용', '짝의 형식'], ['내용이 맞아요', '형식이 맞아요']),
        ],
      },
    ],
    wrap: {
      teacher: '"오늘 작품에서 내용 하나와 형식 하나를 말해 볼 사람?" 두세 명이 말하게 한다. "내용이 형식이에요, 같은 거예요"라고 하는 학생에게는 "무엇을 그렸는지와 어떻게 그렸는지는 서로 다른 질문이에요"라고 짚는다. 출구 1번에서 형식을 내용 칸에 넣은 학생은 다음 시간 도입에 같은 작품을 다시 나눈다.',
      exit: [
        { type: 'tool', tool: 'mindmap', options: { topic: '해돋이 그림', slots: ['내용', '형식'], cards: [{ id: 'e1', text: '항구의 아침 풍경이에요' }, { id: 'e2', text: '붓 자국을 짧게 끊어 빛을 나타냈어요' }, { id: 'e3', text: '작은 배들이 떠 있어요' }] }, prompt: '해돋이 그림 카드를 내용과 형식으로 나누어 보세요.', target: { sort: { 내용: ['e1', 'e3'], 형식: ['e2'] } }, difficulty: 0.2 },
        { type: 'choice', prompt: '다음 가운데 형식을 말한 문장은 무엇인가요?', options: ['두 사람이 씨름을 해요', '짙은 먹으로 크게 칠했어요', '마을이 있어요'], answer: 1, difficulty: 0.1, explain: '무엇으로 어떻게 칠했는지를 말하면 형식이에요.' },
        { type: 'short', prompt: '좋아하는 그림에서 내용 한 가지와 형식 한 가지를 쓰세요.' },
      ],
    },
    ws: {
      title: '내용과 형식 가르기',
      items: [
        { type: 'table', prompt: '작품 하나를 골라 내용과 형식을 쓰세요.', columns: ['작품 이름', '내용(무엇을)', '형식(어떻게)'], cells: [['', '', ''], ['', '', '']] },
        { type: 'choice', prompt: '내용을 말한 문장에 ○ 하세요.', options: ['짧은 붓질을 썼어요', '밤하늘 아래 마을이 있어요', '파랑과 노랑을 맞닿게 썼어요', '먹을 짙게 칠했어요'], answer: '밤하늘 아래 마을이 있어요' },
        { type: 'short', prompt: '내가 고른 작품에서 형식을 한 문장으로 쓰세요.' },
        { type: 'draw', prompt: '좋아하는 그림을 간단히 그리고 내용과 형식을 한 줄씩 적으세요.' },
      ],
      easy: {
        note: '무엇이 있는지는 내용, 어떻게 그렸는지는 형식이에요.',
        items: [
          { type: 'choice', prompt: '형식을 말한 문장에 ○ 하세요.', options: ['마을이 있어요', '붓질이 짧아요'], answer: '붓질이 짧아요' },
          { type: 'short', prompt: '그림에서 보이는 것 한 가지를 쓰세요.' },
          { type: 'draw', prompt: '좋아하는 그림을 그리세요.' },
        ],
      },
    },
    diff: {
      easy: '카드를 놓으면 바로 맞는지 표시되고, 색종이는 모양 네 가지·색 다섯 가지·크기 두 가지만 나와요.',
      base: '스스로 나눈 뒤 확인하고, 모양 여섯 가지와 모든 색을 써요.',
      challenge: '내용도 형식도 아닌 느낌 카드가 섞여 있어 남겨야 해요.',
    },
    notes: '자주 보이는 어려움: ① 내용(무엇이 있다)과 형식(어떻게 그렸다)을 섞는다 → 문장 끝이 \'있어요\'인지 \'칠했어요\'인지를 본다. ② 느낌(멋있어요)을 형식으로 센다 → 느낌은 내 마음이고 형식은 그림에서 찾은 사실이라고 짚는다. ③ 형식을 색 하나로만 본다 → 선·붓질·크기·놓은 자리도 형식이라고 알려 준다. 확인 필요: 작품 특징 문장은 수업 전에 미술관 누리집 설명과 맞춰 본다. 준비물: 작품 사진 3장(작품 이미지는 따로 싣지 않았다).',
  });

  // ───────────── 12차시 (연습) ─────────────
  L(12, S2, {
    title: '선·색·모양으로 나누어 달항아리와 해돋이 살피기',
    objective: '작품의 형식을 선·색·모양으로 나누어 말하고, 각각이 작품의 느낌에 어떻게 이어지는지 설명할 수 있다.',
    ill: 'a large round white jar on a wooden stand beside a gentle sunrise over a harbor with tiny boats in soft paper layers',
    scene: scn([{ motif: 'wave', x: 120, y: 222 }, { motif: 'moon', x: 340, y: 106 }, { motif: 'cloud', x: 390, y: 70 }], '선·색·모양', 22),
    intro: {
      teacher: '"달항아리를 떠올려 봐요. 처음 보면 무엇이 눈에 들어오나요?" 학생이 흰색, 둥글다, 크다 같은 말을 하면 \'색\'과 \'모양\' 칸으로 나누어 적는다. "여기에 선은 없었나요? 몸통 둘레의 곡선은 선이에요." 형식을 말할 때는 선·색·모양 세 가지로 나누면 쉽다고 알려 준다. 시연 단추로 카드가 세 칸으로 나뉘는 모습을 보여 준다.',
      student: '달항아리를 떠올려 눈에 들어온 것을 선, 색, 모양 가운데 하나로 말해 봅시다.',
      demo: { tool: 'mindmap', options: { topic: '달항아리', slots: ['선', '색', '모양'], cards: [{ id: 'd1', text: '부드럽고 둥근 곡선이에요' }, { id: 'd2', text: '맑은 흰색이에요' }, { id: 'd3', text: '둥글고 넉넉한 몸통이에요' }] }, sequence: [{ sort: { 선: ['d1'], 색: ['d2'], 모양: ['d3'] } }] },
    },
    acts: [
      {
        title: '형식을 선·색·모양으로 나누기', tool: 'mindmap',
        teacher: '"이 문장은 선 이야기인가요, 색 이야기인가요, 모양 이야기인가요?" 낱말(곡선·줄무늬는 선, 흰색·주황은 색, 둥글다·네모는 모양)을 짚게 한다. 둥근 곡선처럼 선과 모양이 겹치는 말은 더 가까운 쪽에 넣고 까닭을 말하게 한다. 도전 단계의 \'조선 시대 도자기예요\'는 형식이 아니라 배경이므로 남긴다.',
        task: '작품 설명 카드를 읽고 선·색·모양 가운데 어디에 속하는지 나누어 넣어요.',
        items: [
          sortItem({ p: '달항아리 형식 카드를 선·색·모양으로 나누어 보세요.', topic: '달항아리', slots: ['선', '색', '모양'], groups: [['몸통 둘레가 부드러운 곡선이에요'], ['맑고 은은한 흰색이에요'], ['위아래가 둥글고 넉넉해요']], extra: '조선 시대 도자기예요', hint: '선·색·모양 가운데 어느 낱말이 카드에 나오는지 짚어요.', d: 0.15 }),
          sortItem({ p: '인상, 해돋이 형식 카드를 선·색·모양으로 나누어 보세요.', topic: '인상, 해돋이', slots: ['선', '색', '모양'], groups: [['붓 자국이 짧게 끊겨 있어요'], ['주황 해와 파란 바다가 맞닿았어요'], ['작은 배가 흐릿한 덩어리로 보여요']], extra: '1872년에 그렸어요', d: 0.2 }),
          sortItem({ p: '책가도 형식 카드를 선·색·모양으로 나누어 보세요.', topic: '책가도', slots: ['선', '색', '모양'], groups: [['책장 칸이 곧은 가로 세로선이에요'], ['책과 문방구가 알록달록해요'], ['네모난 칸이 되풀이돼요']], extra: '조선 후기에 유행했어요', d: 0.25,
            predict: { q: '선·색·모양을 나누어 보면 작품 설명이 어떻게 달라질까요?', options: ['똑같아요', '더 구체적으로 말할 수 있어요'], answer: 1 }, conclude: '선·색·모양으로 나누어 보면 형식의 특징을 구체적으로 말할 수 있어요.' }),
        ],
      },
      {
        title: '대칭과 칸 짜임을 도형으로 만들기', tool: 'collage',
        teacher: '"달항아리는 가운데를 접으면 양쪽이 어떻게 되나요?" 접는 선을 기준으로 양쪽이 같은 모양이 되게 해 보며 대칭이 형식의 한 모양임을 알게 한다. 책가도의 칸은 같은 네모가 되풀이되는 모양으로 나타내게 한다. 한쪽만 붙이고 다른 쪽을 흐트러뜨리는 학생에게는 "접는 선에서 같은 거리를 맞춰 보아요"라고 말한다.',
        task: '접는 선을 기준으로 양쪽이 같은 항아리를 만들고, 네모 칸을 되풀이해 책장을 만들어요.',
        levels: { easy: { shapes: ['circle', 'semi', 'square', 'rect'], colors: ['하양', '갈색', '파랑', '노랑'], sizes: ['m', 'l'] }, base: { shapes: ['circle', 'semi', 'square', 'rect', 'leaf', 'star'] }, challenge: {} },
        items: [
          { prompt: '접는 선을 기준으로 양쪽이 같은 항아리를 만들어요. 조각 네 개 이상을 써요.', target: { symmetry: 'vertical', pieces: { min: 4 } }, difficulty: 0.25 },
          { prompt: '갈색 네모 여섯 개 이상을 되풀이해 책장 칸을 만들어요.', target: { has: [{ shape: 'square', color: '갈색', min: 6 }] }, difficulty: 0.15 },
          { prompt: '선·색·모양이 보이는 도형 작품을 만들고 점검해요.', target: { selfCheck: ['선 모양 조각을 썼어요', '색이 눈에 띄게 골랐어요', '모양이 되풀이되거나 대칭인 곳을 말했어요'], minPieces: 5 }, difficulty: 0.1 },
        ],
      },
    ],
    wrap: {
      teacher: '"오늘 달항아리의 선·색·모양을 한 가지씩 말해 볼까요?" 두세 명이 말하게 한다. "둥근 모양이라서 곡선은 없어요"라는 학생에게는 "몸통 둘레를 따라 손가락으로 그려 볼까요? 그 선이 곡선이에요"라고 짚는다. 출구 1번에서 색과 모양을 바꾼 학생은 다음 시간 도입에 카드를 다시 나눈다.',
      exit: [
        { type: 'tool', tool: 'mindmap', options: { topic: '별이 빛나는 밤 형식', slots: ['선', '색', '모양'], cards: [{ id: 'e1', text: '짧은 선이 소용돌이쳐요' }, { id: 'e2', text: '파랑과 노랑이 맞닿아 있어요' }, { id: 'e3', text: '별이 큰 동그라미 모양이에요' }] }, prompt: '별이 빛나는 밤의 형식 카드를 선·색·모양으로 나누어 보세요.', target: { sort: { 선: ['e1'], 색: ['e2'], 모양: ['e3'] } }, difficulty: 0.2 },
        { type: 'choice', prompt: '형식을 선·색·모양으로 나누어 말하는 좋은 점은 무엇인가요?', options: ['더 길게 말할 수 있어요', '작품의 특징을 구체적으로 말할 수 있어요', '그림을 다시 그릴 수 있어요'], answer: 1, difficulty: 0.15, explain: '세 가지로 나누면 \'예뻐요\'보다 어떤 점이 그런지 구체적으로 말할 수 있어요.' },
        { type: 'short', prompt: '내가 좋아하는 작품의 선·색·모양 가운데 한 가지와 느낌을 쓰세요.' },
      ],
    },
    ws: {
      title: '선·색·모양 살피기',
      items: [
        { type: 'table', prompt: '작품 하나를 골라 선·색·모양을 쓰세요.', columns: ['선', '색', '모양'], cells: [['', '', ''], ['', '', '']] },
        { type: 'choice', prompt: '색을 말한 문장에 ○ 하세요.', options: ['부드러운 곡선이에요', '맑은 흰색이에요', '둥근 몸통이에요', '붓 자국이 짧아요'], answer: '맑은 흰색이에요' },
        { type: 'figure', wide: true, prompt: '접는 선 왼쪽 반원을 보고 오른쪽에 같은 모양을 그려 항아리를 완성하세요.', tool: 'collage', options: { guide: 'vertical', printColors: false }, figures: [{ state: { pieces: [{ shape: 'semi', color: '하양', size: 'l', x: 240, y: 200, r: 90 }] }, caption: '접는 선 왼쪽 반원 · 오른쪽 짝 그리기' }], answer: '접는 선에서 같은 거리에 같은 반원' },
        { type: 'short', prompt: '선·색·모양 가운데 느낌을 가장 크게 만든 것과 까닭을 쓰세요.' },
      ],
      easy: {
        note: '곡선은 선, 흰색은 색, 둥근 몸통은 모양이에요.',
        items: [
          { type: 'choice', prompt: '모양을 말한 문장에 ○ 하세요.', options: ['둥근 몸통이에요', '흰색이에요'], answer: '둥근 몸통이에요' },
          { type: 'short', prompt: '작품에서 눈에 띄는 색 하나를 쓰세요.' },
          { type: 'draw', prompt: '좋아하는 모양을 그리세요.' },
        ],
      },
    },
    diff: {
      easy: '카드를 놓으면 바로 맞는지 표시되고, 색종이는 모양 네 가지·색 네 가지·크기 두 가지만 나와요.',
      base: '스스로 나눈 뒤 확인하고, 모양 여섯 가지와 모든 색을 써요.',
      challenge: '형식이 아닌 배경 카드가 섞여 있어 남겨야 해요.',
    },
    notes: '자주 보이는 어려움: ① 곡선을 모양에만 넣는다 → 선의 모양과 물체의 모양이 겹칠 수 있으니 까닭을 말하게 한다. ② 색을 이름만 말하고 느낌을 못 말한다 → 흰색이 어떤 느낌인지 한마디 더 묻는다. ③ 배경 정보(시대·곳)를 형식으로 센다 → 형식은 그림에서 눈으로 찾는 것이라고 짚는다. 확인 필요: 작품 형식 문장은 수업 전에 미술관 누리집 설명과 맞춰 본다. 준비물: 작품 사진, 접는 선 활동지.',
  });

  // ───────────── 13차시 (확장) ─────────────
  L(13, S2, {
    title: '형식을 말한 문장만 골라 느낌과 이어 보기',
    objective: '작품 설명 문장에서 형식을 말한 문장만 가려내고, 그 형식이 주는 느낌과 이어 한 문장으로 말할 수 있다.',
    ill: 'a long folding screen painting of bookshelves in bright colors next to a swirling brush stroke pattern and a bold black ink mountain in layered paper',
    scene: scn([{ motif: 'mountain', x: 130, y: 212, s: 1.1 }, { motif: 'house', x: 350, y: 214, s: 1 }, { motif: 'leaf', x: 250, y: 200, r: 20 }], '형식이 만드는 느낌', 22),
    intro: {
      teacher: '"이 그림을 보면 웅장해 보여요. 왜 웅장하게 느껴질까요?" 학생에게 이유를 묻는다. 학생이 "산이 커요"라고 말하면 내용인지 형식인지 되묻는다. "산이 크다는 것은 내용이고, 크게 칠했다는 것은 형식이에요. 느낌은 형식에서 나와요"라고 정리한다. 오늘은 형식 문장을 골라 느낌과 이어 본다고 연다. 시연 단추로 형식 문장 하나가 바구니에 담기는 모습을 보여 준다.',
      student: '그림이 웅장해 보인다면 어떻게 그렸기 때문일지 말해 봅시다.',
      demo: { tool: 'mindmap', options: { mode: 'pick', topic: '인왕제색도', basket: '형식을 말한 문장', cards: [{ id: 'd1', text: '짙은 먹으로 크게 칠했어요' }, { id: 'd2', text: '산 아래 집이 있어요' }] }, sequence: [{ pick: ['d1'] }] },
    },
    acts: [
      {
        title: '형식을 말한 문장 고르기', tool: 'mindmap',
        teacher: '"이 문장은 무엇이 있는지를 말하나요, 어떻게 그렸는지를 말하나요?" 문장마다 \'그렸어요/칠했어요/썼어요\'가 나오면 형식, \'있어요\'가 나오면 내용이라고 먼저 짚게 한다. 도전 단계에서는 배경(시대·곳) 문장이 섞여 있어 담지 않는다. 담은 뒤 소리 내어 읽어 \'어떻게\'라는 말이 되는지 확인하게 한다.',
        task: '카드 가운데 어떻게 그렸는지(형식)를 말한 문장만 골라 담아요.',
        items: [
          pickItem({ p: '책가도 설명에서 형식을 말한 문장을 모두 고르세요.', topic: '책가도', basket: '형식을 말한 문장', yes: ['책장 칸이 가로 세로로 되풀이돼요', '책 색이 알록달록하게 이어져요'], no: ['책장 안에 책과 문방구가 있어요', '선비의 방을 떠올리게 해요'], hint: '무엇이 있는지가 아니라 어떻게 놓고 칠했는지를 말한 문장을 담아요.', d: 0.2 }),
          pickItem({ p: '단오풍정 설명에서 형식을 말한 문장을 모두 고르세요.', topic: '단오풍정', basket: '형식을 말한 문장', yes: ['인물을 가는 선으로 섬세하게 그렸어요', '옷을 곱고 선명한 색으로 칠했어요'], no: ['그네를 타는 여인이 있어요', '개울가에서 머리를 감아요'], d: 0.25 }),
          pickItem({ p: '분청사기 설명에서 형식을 말한 문장을 모두 고르세요.', topic: '분청사기', basket: '형식을 말한 문장', yes: ['흰 흙 위에 거칠고 자유로운 붓자국이 보여요', '무늬를 긁어 새겨 선이 시원해요'], no: ['조선 초기에 많이 만들어졌어요', '그릇으로 쓰였어요'], d: 0.3 }),
        ],
      },
      {
        title: '형식과 그 느낌 이어 보기', tool: 'mindmap',
        teacher: '"이 형식은 보는 사람에게 어떤 느낌을 줄까요?" 왼쪽 형식을 소리 내어 읽고, 오른쪽 느낌 카드를 하나씩 대어 보게 한다. 같은 형식이 사람에 따라 다른 느낌을 줄 수 있음을 인정하되, 이 활동에서는 가장 어울리는 느낌을 고른다고 알려 준다. 느낌을 형식과 상관없이 고르는 학생에게는 "어떤 부분 때문에 그 느낌이 났나요?"라고 묻는다.',
        task: '왼쪽 형식마다 그 형식이 주는 느낌 카드를 하나씩 이어요.',
        levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          matchItem({ p: '별이 빛나는 밤의 형식마다 그 느낌을 이어 보세요.', topic: '별이 빛나는 밤', pairs: [['소용돌이치는 짧은 붓질', '하늘이 살아 움직이는 느낌'], ['파랑과 노랑의 대비', '별빛이 더 환하게 보이는 느낌'], ['두껍게 바른 물감', '손에 만져질 듯한 느낌']], extra: '조용히 잠든 느낌', d: 0.25 }),
          matchItem({ p: '달항아리의 형식마다 그 느낌을 이어 보세요.', topic: '달항아리', pairs: [['둥근 곡선', '부드럽고 넉넉한 느낌'], ['맑은 흰색', '소박하고 깨끗한 느낌'], ['조금 기울어진 둥근 몸통', '자연스럽고 따뜻한 느낌']], extra: '차갑고 날카로운 느낌', d: 0.25 }),
          matchItem({ p: '인왕제색도의 형식마다 그 느낌을 이어 보세요.', topic: '인왕제색도', pairs: [['짙은 먹으로 칠한 큰 바위', '묵직하고 웅장한 느낌'], ['옅은 먹의 안개', '촉촉하고 고요한 느낌'], ['화면 가득 솟은 산', '우뚝 솟은 듯한 느낌']], extra: '가볍고 장난스러운 느낌', d: 0.3,
            predict: { q: '느낌은 형식에서 나올까요, 내용에서만 나올까요?', options: ['내용에서만 나와요', '형식에서도 나와요'], answer: 1 }, conclude: '같은 내용도 선·색·크기 같은 형식에 따라 느낌이 달라져요.' }),
        ],
      },
    ],
    wrap: {
      teacher: '"형식과 느낌이 이어지는 예를 하나 말해 볼까요?" 두세 명이 말하게 한다. "그냥 그림이 웅장해서 웅장한 거예요"라고 하는 학생에게는 "어떤 부분이 웅장하게 만들었나요?"라고 되묻는다. 출구 1번에서 내용 문장을 담은 학생은 다음 시간 도입에 \'무엇이 있다\'와 \'어떻게 그렸다\'를 다시 가른다.',
      exit: [
        { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '세한도', basket: '형식을 말한 문장', cards: [{ id: 'e1', text: '마른 붓으로 간결하게 그렸어요' }, { id: 'e2', text: '소나무와 잣나무, 집이 있어요' }, { id: 'e3', text: '빈 곳을 많이 남겼어요' }] }, prompt: '세한도 설명에서 형식을 말한 문장을 모두 고르세요.', target: { pick: ['e1', 'e3'] }, difficulty: 0.2 },
        { type: 'choice', prompt: '형식이 주는 느낌을 말한 문장은 무엇인가요?', options: ['소나무가 두 그루 있어요', '굵고 짙은 먹선이 묵직한 느낌을 줘요', '1844년에 그렸어요'], answer: 1, difficulty: 0.15, explain: '선의 굵기와 먹의 짙기 같은 형식이 느낌을 만들어요.' },
        { type: 'short', prompt: '작품의 형식 하나와 그것이 주는 느낌을 한 문장으로 쓰세요.' },
      ],
    },
    ws: {
      title: '형식과 느낌 잇기',
      items: [
        { type: 'table', prompt: '작품의 형식과 그 느낌을 짝지어 쓰세요.', columns: ['형식', '그 느낌'], cells: [['', ''], ['', ''], ['', '']] },
        { type: 'choice', prompt: '형식을 말한 문장에 ○ 하세요.', options: ['선비의 방을 떠올리게 해요', '책 색이 알록달록하게 이어져요', '조선 후기에 유행했어요', '책장 안에 책이 있어요'], answer: '책 색이 알록달록하게 이어져요' },
        { type: 'short', prompt: '색이나 선 때문에 느낌이 달라진 작품 하나와 느낌을 쓰세요.' },
        { type: 'draw', prompt: '같은 물건을 두 가지 형식(굵고 짙게, 가늘고 옅게)으로 그리고 느낌을 써 보세요.' },
      ],
      easy: {
        note: '굵고 짙은 선은 묵직하고, 가늘고 옅은 선은 가볍게 느껴져요.',
        items: [
          { type: 'choice', prompt: '둥근 곡선과 어울리는 느낌에 ○ 하세요.', options: ['부드러워요', '날카로워요'], answer: '부드러워요' },
          { type: 'short', prompt: '형식 하나를 쓰세요.' },
          { type: 'draw', prompt: '굵은 선과 가는 선을 그려 보세요.' },
        ],
      },
    },
    diff: {
      easy: '카드를 담거나 이으면 바로 맞는지 표시되고 틀리면 까닭을 말해 줘요.',
      base: '스스로 정리한 뒤 확인해요.',
      challenge: '짝이 없는 느낌 카드가 섞여 있어 남겨야 해요.',
    },
    notes: '자주 보이는 어려움: ① 내용 문장(~가 있어요)을 형식으로 센다 → 문장 끝이 \'있어요\'인지 \'그렸어요/칠했어요\'인지를 본다. ② 형식과 상관없이 마음대로 느낌을 고른다 → 어느 부분 때문인지 한마디 물어 형식과 이어 말하게 한다. ③ 느낌이 하나뿐이라고 여긴다 → 같은 형식도 사람마다 느낌이 다를 수 있다고 말해 준다. 확인 필요: 작품 형식 문장은 수업 전에 미술관 누리집 설명과 맞춰 본다. 준비물: 작품 사진, 형식·느낌 카드.',
  });

  // ───────────── 14차시 (핵심) ─────────────
  L(14, S2, {
    title: '세한도의 빈 곳과 구도를 도형으로 옮겨 분석하기',
    objective: '작품의 구도를 도형으로 옮겨 분석해 무엇을 어디에 놓았고 어디를 비웠는지 말하고, 그 형식이 내용을 어떻게 돕는지 설명할 수 있다.',
    ill: 'a minimal composition with a small cottage and two evergreen trees on a large blank sheet, with a child drawing the layout with simple paper shapes',
    scene: scn([{ motif: 'tree', x: 130, y: 216, s: 1.2 }, { motif: 'house', x: 260, y: 216, s: 0.8 }, { motif: 'tree', x: 380, y: 216, s: 1.2 }], '빈 곳도 형식이에요', 22),
    intro: {
      teacher: '칠판에 \'세한도\'를 쓰고 소나무 두 그루와 집 하나만 간단히 그려 보인다. "이 그림에서 비어 있는 곳이 많은데, 화가는 왜 그렇게 그렸을까요?" 학생의 짐작(쓸쓸해 보이려고, 소나무가 눈에 띄게)을 받는다. "비운 곳도 화가가 선택한 형식이에요. 오늘은 구도를 도형으로 바꿔 어디에 무엇을 놓고 어디를 비웠는지 분석해요"라고 연다. 시연 단추로 카드가 놓이는 모습을 보여 준다.',
      student: '그림에 빈 곳이 많다면 화가가 왜 그렇게 그렸을지 생각을 말해 봅시다.',
      demo: { tool: 'mindmap', options: { mode: 'fill', topic: '세한도 구도', slots: [{ id: 'b1', label: '세한도는 빈 곳이 ___ 그려졌어요.' }], cards: [{ id: 'c1', text: '많게' }, { id: 'c2', text: '없게' }] }, sequence: [{ fill: { b1: 'c1' } }] },
    },
    acts: [
      {
        title: '구도를 도형으로 옮기기', tool: 'collage',
        teacher: '"세한도처럼 조각이 적고 빈 곳이 많게 만들어 볼게요. 조각을 많이 붙이고 싶겠지만 일부러 참아 봐요." 조각 수를 제한한 문항으로 비운 곳을 선택해 보게 한다. 몽유도원도에서는 두 세계를 나누어 놓는 구도를 보게 한다. 조각이 많다고 좋은 도식이 아니라, 무엇을 어디에 둘지 선택하는 것이 분석이라고 알려 준다.',
        task: '작품의 구도를 도형으로 옮기고, 비운 곳과 놓은 곳을 말해요.',
        levels: { easy: { shapes: ['triangle', 'rect', 'square', 'circle'], colors: ['초록', '갈색', '분홍', '하양'], sizes: ['m', 'l'] }, base: { shapes: ['triangle', 'rect', 'square', 'circle', 'leaf', 'star'] }, challenge: {} },
        items: [
          { prompt: '세한도처럼 빈 곳을 많이 남겨요. 초록 세모 두 개와 갈색 네모 하나만 쓰고 모두 다섯 조각 이하로 만들어요.', target: { has: [{ shape: 'triangle', color: '초록', n: 2 }, { shape: 'square', color: '갈색', n: 1 }], pieces: { max: 5 } }, difficulty: 0.25 },
          { prompt: '몽유도원도처럼 두 세계를 나누어요. 초록 네모 세 개(현실)와 분홍 동그라미 세 개(꿈속)를 붙여요.', target: { has: [{ shape: 'square', color: '초록', n: 3 }, { shape: 'circle', color: '분홍', n: 3 }] }, difficulty: 0.2 },
          { prompt: '내가 분석한 구도를 도형으로 옮기고 점검해요.', target: { selfCheck: ['어디를 비웠는지 짝에게 말했어요', '무엇을 가장 크게 놓았는지 말했어요', '이 구도가 주는 느낌을 한 마디로 말했어요'], minPieces: 3 }, difficulty: 0.1 },
        ],
      },
      {
        title: '분석 문장 완성하기', tool: 'mindmap',
        teacher: '"이 빈칸에 들어갈 말은 내용일까요, 형식일까요?" 빈칸이 든 문장을 먼저 읽고 \'무엇을\'인지 \'어떻게\'인지에 맞는 카드를 넣어 보게 한다. 분석 문장은 \'무엇을 그렸는지\'와 \'어떻게 그렸는지\'를 함께 담아야 한다고 말해 준다. 도전 단계에서는 배경(때) 카드가 섞여 있어 빈칸에 넣지 않는다.',
        task: '문장의 빈칸에 내용 또는 형식에 알맞은 카드를 하나씩 넣어요.',
        levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          fillItem({ p: '세한도 분석 문장의 빈칸에 알맞은 카드를 넣어 보세요.', topic: '세한도 분석', lines: [['세한도의 내용은 ___ 예요.', '추운 겨울에도 푸른 소나무와 잣나무'], ['세한도의 형식은 ___ 예요.', '마른 붓으로 간결하게 그리고 빈 곳을 남긴 것']], dist: ['1844년에 그렸다는 점'], hint: '내용은 무엇이 있는지, 형식은 어떻게 그렸는지를 말하는 카드예요.', d: 0.25 }),
          fillItem({ p: '몽유도원도 분석 문장의 빈칸에 알맞은 카드를 넣어 보세요.', topic: '몽유도원도 분석', lines: [['몽유도원도의 내용은 ___ 예요.', '꿈속에서 본 복숭아밭 이야기'], ['몽유도원도의 형식은 ___ 예요.', '현실과 꿈의 두 세계를 나누어 놓은 구도']], dist: ['조선 세종 때 그렸다는 점'], d: 0.3 }),
          fillItem({ p: '인왕제색도 분석 문장의 빈칸에 알맞은 카드를 넣어 보세요.', topic: '인왕제색도 분석', lines: [['인왕제색도의 내용은 ___ 예요.', '비 갠 뒤의 인왕산'], ['인왕제색도의 형식은 ___ 예요.', '짙은 먹으로 바위를 크게 칠한 구도']], dist: ['정선이 그렸다는 점'], d: 0.3 }),
        ],
      },
    ],
    wrap: {
      teacher: '"오늘 도식에서 일부러 비운 곳은 어디였나요? 왜 비웠나요?" 두세 명이 말하게 한다. "조각이 모자라서 그랬어요"라고 하는 학생에게는 "일부러 비웠다고 말할 수 있으려면 무엇이 필요할까요?"라고 되묻는다. 출구 2번을 틀린 학생은 다음 시간 도입에 구도 도식을 한 번 더 보여 준다.',
      exit: [
        { type: 'tool', tool: 'mindmap', options: { mode: 'fill', topic: '단오풍정 분석', slots: [{ id: 'b1', label: '단오풍정의 내용은 ___ 예요.' }, { id: 'b2', label: '단오풍정의 형식은 ___ 예요.' }], cards: [{ id: 'c1', text: '단옷날 개울가 여인들' }, { id: 'c2', text: '가는 선과 곱고 선명한 색' }, { id: 'c3', text: '조선 후기에 그렸다는 점' }] }, prompt: '단오풍정 분석 문장의 빈칸에 알맞은 카드를 넣어 보세요. 알맞지 않은 카드는 남겨 두세요.', target: { fill: { b1: 'c1', b2: 'c2' } }, difficulty: 0.25 },
        { type: 'choice', prompt: '그림의 구도를 분석한다는 것은 무엇일까요?', options: ['그림을 똑같이 그리는 것', '무엇을 어디에 놓고 어디를 비웠는지 살피는 것', '그림값을 매기는 것'], answer: 1, difficulty: 0.15, explain: '구도 분석은 놓인 곳과 비운 곳을 살펴 화가의 선택을 읽는 일이에요.' },
        { type: 'short', prompt: '오늘 도식으로 만든 구도에서 가장 크게 놓은 것과 까닭을 쓰세요.' },
      ],
    },
    ws: {
      title: '구도 분석하기',
      items: [
        { type: 'table', prompt: '작품 하나의 구도를 분석해 쓰세요.', columns: ['가장 크게 놓은 것', '비운 곳', '느낌'], cells: [['', '', ''], ['', '', '']] },
        { type: 'choice', prompt: '세한도의 형식에 ○ 하세요.', options: ['마른 붓으로 간결하게 그렸어요', '화려한 색으로 칠했어요', '조각을 가득 채웠어요', '붉은 해를 크게 그렸어요'], answer: '마른 붓으로 간결하게 그렸어요' },
        { type: 'figure', wide: true, prompt: '비운 곳이 많은 구도가 되도록 오른쪽에 집 하나만 더 그려 넣으세요.', tool: 'collage', options: { printColors: false }, figures: [{ state: { pieces: [{ shape: 'triangle', color: '초록', size: 'l', x: 120, y: 200, r: 0 }, { shape: 'triangle', color: '초록', size: 'l', x: 440, y: 200, r: 0 }] }, caption: '소나무 둘 · 가운데 집 그리기' }], answer: '가운데 작은 네모 하나' },
        { type: 'short', prompt: '구도에서 비운 곳이 주는 느낌을 한 문장으로 쓰세요.' },
      ],
      easy: {
        note: '구도는 무엇을 어디에 놓았는지를 말해요.',
        items: [
          { type: 'choice', prompt: '비운 곳이 많은 그림에 ○ 하세요.', options: ['세한도', '조각이 가득 찬 그림'], answer: '세한도' },
          { type: 'short', prompt: '가장 큰 조각을 하나 쓰세요.' },
          { type: 'draw', prompt: '빈 곳이 많은 구도를 그리세요.' },
        ],
      },
    },
    diff: {
      easy: '카드를 놓으면 바로 맞는지 표시되고, 색종이는 모양 네 가지·색 네 가지·크기 두 가지만 나와요.',
      base: '스스로 만든 뒤 확인하고, 모양 여섯 가지와 모든 색을 써요.',
      challenge: '조각 수를 제한한 문항이 있고, 배경 카드가 섞인 빈칸 문항이 있어요.',
    },
    notes: '자주 보이는 어려움: ① 조각을 많이 붙여야 잘한 도식이라고 여긴다 → 비운 곳도 선택이라고 말해 준다. ② 빈칸 카드를 내용과 형식에 거꾸로 넣는다 → 문장 앞의 \'내용은/형식은\'을 소리 내어 읽게 한다. ③ 분석을 느낌 말하기로만 생각한다 → 구도 도식은 눈으로 찾은 사실이라고 짚는다. 확인 필요: 세한도·몽유도원도 구도 설명은 수업 전에 미술관 누리집과 맞춰 본다. 준비물: 도형 색종이, 도화지.',
  });

  // ───────────── 15차시 (연습) ─────────────
  L(15, S2, {
    title: '색 대비가 보이는 도형으로 해돋이와 인왕산 분석하기',
    objective: '작품의 색이 서로 어떻게 맞닿아 느낌을 만드는지 도형으로 나타내고, 보색·밝고 어두운 대비를 구별해 말할 수 있다.',
    ill: 'a bright orange sun above a deep blue sea and a dark rocky mountain beside pale white mist, shown as layered paper shapes',
    scene: scn([{ motif: 'wave', x: 140, y: 222 }, { motif: 'mountain', x: 380, y: 212, s: 1.1 }, { motif: 'star', x: 250, y: 100, s: 0.9 }], '색이 만나는 곳', 22),
    intro: {
      teacher: '주황 색종이와 파랑 색종이를 맞대어 보여 준다. "어느 색이 더 또렷해 보이나요?" 학생에게 말하게 한다. 이번에는 노랑과 하양을 맞대어 보여 주고 "이 둘은 서로 또렷하게 보이나요?"라고 묻는다. "서로 반대되는 색이 맞닿으면 더 또렷해져요. 색을 나란히 놓는 것도 화가의 형식이에요." 시연 단추로 카드가 두 칸으로 나뉘는 모습을 보여 준다.',
      student: '주황과 파랑을 맞대면 어떻게 보이는지, 노랑과 하양은 어떤지 비교해 말해 봅시다.',
      demo: { tool: 'mindmap', options: { topic: '색 대비', slots: ['보색 대비', '밝고 어두운 대비'], cards: [{ id: 'd1', text: '주황 해와 파란 바다' }, { id: 'd2', text: '하양 안개와 검정 바위' }] }, sequence: [{ sort: { '보색 대비': ['d1'], '밝고 어두운 대비': ['d2'] } }] },
    },
    acts: [
      {
        title: '색 대비를 도형으로 만들기', tool: 'collage',
        teacher: '"해는 어떤 색 도형으로, 바다는 어떤 색으로 놓을까요?" 맞닿게 놓아야 대비가 보인다는 점을 먼저 보여 준다. 색 조각이 떨어져 있는 학생에게는 "두 색의 가장자리가 만나게 옮겨 볼까요?"라고 말한다. 같은 색 조각만 쓴 학생에게는 대비 규칙(보색 또는 밝고 어두운 색)이 있는지 다시 묻는다.',
        task: '색 조각을 맞닿게 놓아 해돋이의 보색 대비와 인왕산의 밝고 어두운 대비를 나타내요.',
        levels: { easy: { shapes: ['circle', 'square', 'triangle', 'leaf'], colors: ['주황', '파랑', '검정', '하양'], sizes: ['m', 'l'] }, base: { shapes: ['circle', 'square', 'triangle', 'leaf', 'rect', 'star'] }, challenge: {} },
        items: [
          { prompt: '해돋이를 나타내요. 주황 동그라미 하나와 파랑 큰 네모 하나를 서로 맞닿게 붙여요.', target: { contrast: 'complement', has: [{ shape: 'circle', color: '주황', n: 1 }, { shape: 'square', color: '파랑', size: 'l', min: 1 }] }, difficulty: 0.2 },
          { prompt: '인왕제색도를 나타내요. 검정 큰 세모 하나와 하양 동그라미 두 개 이상(안개)을 맞닿게 붙여요.', target: { contrast: 'light-dark', has: [{ shape: 'triangle', color: '검정', size: 'l', n: 1 }, { shape: 'circle', color: '하양', min: 2 }] }, difficulty: 0.25 },
          { prompt: '색 대비를 살린 도형 그림을 만들고 점검해요.', target: { selfCheck: ['맞닿은 색 두 가지를 정했어요', '그 대비의 종류를 짝에게 말했어요', '대비가 그림의 느낌을 어떻게 바꿨는지 말했어요'], minPieces: 4 }, difficulty: 0.1 },
        ],
      },
      {
        title: '색 대비의 종류 나누기', tool: 'mindmap',
        teacher: '"이 짝은 서로 반대되는 색이에요, 밝고 어두운 차이일까요?" 주황-파랑, 빨강-초록, 노랑-보라는 서로 반대되는 보색이고, 하양-검정은 밝기 차이라고 알려 준다. 따뜻한 색(빨강·주황·노랑)과 차가운 색(파랑·초록·보라)도 따로 구분하게 한다. 도전 단계에서는 어느 쪽에도 속하지 않는 카드가 섞여 있어 남긴다.',
        task: '카드를 읽고 색 대비의 종류나 색의 느낌에 따라 칸에 나누어 넣어요.',
        levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          sortItem({ p: '색 짝 카드를 보색 대비와 밝고 어두운 대비로 나누어 보세요.', topic: '색 대비 1', slots: ['보색 대비', '밝고 어두운 대비'], groups: [['주황 해와 파란 바다', '빨강 꽃과 초록 잎'], ['하양 안개와 검정 바위', '노랑 달빛과 짙은 갈색 기둥']], extra: '파랑 바다와 파랑 하늘', hint: '서로 반대되는 색 짝인지, 밝은 색과 어두운 색 짝인지 먼저 정해요.', d: 0.25 }),
          sortItem({ p: '색 카드를 따뜻한 색과 차가운 색으로 나누어 보세요.', topic: '색의 느낌', slots: ['따뜻한 색', '차가운 색'], groups: [['타는 듯한 주황 해', '밝은 노랑 별빛'], ['푸른 밤하늘', '깊은 초록 숲']], extra: '검은 바위', d: 0.2 }),
          sortItem({ p: '색 카드를 밝은 쪽과 어두운 쪽으로 나누어 보세요.', topic: '밝기 비교', slots: ['밝은 쪽', '어두운 쪽'], groups: [['하양 구름', '노랑 달빛'], ['검정 바위', '짙은 갈색 기둥']], extra: '중간 밝기의 파랑 하늘', d: 0.25 }),
        ],
      },
    ],
    wrap: {
      teacher: '"맞닿은 색 한 쌍을 말하고 어떤 대비인지 이름을 붙여 볼까요?" 두세 명이 말하게 한다. "주황과 빨강도 반대 색이에요"라고 하는 학생에게는 "둘은 비슷한 따뜻한 색이에요. 반대되는 색은 주황과 파랑처럼 따뜻한 색과 차가운 색이에요"라고 짚는다. 출구 1번에서 짝을 바꾼 학생은 다음 시간 도입에 색 짝을 다시 나눈다.',
      exit: [
        { type: 'tool', tool: 'mindmap', options: { topic: '색 대비 2', slots: ['보색 대비', '밝고 어두운 대비'], cards: [{ id: 'e1', text: '노랑 별과 보라 하늘' }, { id: 'e2', text: '하양 눈과 검정 나무' }, { id: 'e3', text: '파랑 물결과 주황 돛' }] }, prompt: '색 짝 카드를 보색 대비와 밝고 어두운 대비로 나누어 보세요.', target: { sort: { '보색 대비': ['e1', 'e3'], '밝고 어두운 대비': ['e2'] } }, difficulty: 0.25 },
        { type: 'choice', prompt: '다음 색 짝 가운데 서로 반대되는 보색 짝은 무엇인가요?', options: ['빨강과 주황', '파랑과 주황', '하양과 노랑'], answer: 1, difficulty: 0.15, explain: '파랑과 주황은 색상환에서 서로 마주 보는 보색이에요.' },
        { type: 'short', prompt: '오늘 만든 색 대비가 그림의 느낌을 어떻게 바꾸었는지 쓰세요.' },
      ],
    },
    ws: {
      title: '색 대비 살피기',
      items: [
        { type: 'table', prompt: '맞닿은 색 짝과 대비의 종류를 쓰세요.', columns: ['색 짝', '대비의 종류', '느낌'], cells: [['주황 해와 파란 바다', '', ''], ['', '', '']] },
        { type: 'choice', prompt: '밝고 어두운 대비에 ○ 하세요.', options: ['주황과 파랑', '빨강과 초록', '하양과 검정', '노랑과 보라'], answer: '하양과 검정' },
        { type: 'figure', wide: true, prompt: '주황 해 옆에 서로 반대되는 색의 바다를 그려 넣어 대비가 보이게 하세요.', tool: 'collage', options: { printColors: false }, figures: [{ state: { pieces: [{ shape: 'circle', color: '주황', size: 'm', x: 280, y: 120, r: 0 }] }, caption: '주황 해(색은 글로 풀어요): 반대되는 색은 파랑 · 바다 그리기' }], answer: '파랑 큰 네모 바다' },
        { type: 'short', prompt: '두 색을 맞대었을 때 더 또렷해 보이는 짝과 까닭을 쓰세요.' },
      ],
      easy: {
        note: '주황과 파랑, 빨강과 초록, 노랑과 보라는 서로 반대되는 보색이에요.',
        items: [
          { type: 'choice', prompt: '파랑과 보색인 색에 ○ 하세요.', options: ['주황', '초록'], answer: '주황' },
          { type: 'short', prompt: '맞닿은 색 짝 하나를 쓰세요.' },
          { type: 'draw', prompt: '두 색을 맞닿게 그리세요.' },
        ],
      },
    },
    diff: {
      easy: '카드를 놓으면 바로 맞는지 표시되고, 색종이는 모양 네 가지·색 네 가지·크기 두 가지만 나와요.',
      base: '스스로 나눈 뒤 확인하고, 모양 여섯 가지와 모든 색을 써요.',
      challenge: '어느 쪽에도 속하지 않는 카드가 섞여 있어 남겨야 해요.',
    },
    notes: '자주 보이는 어려움: ① 색 짝을 떨어뜨려 붙인다 → 가장자리가 만나게 옮기게 한다. ② 빨강과 주황 같은 비슷한 색을 보색으로 센다 → 색상환에서 마주 보는 색이 보색이라고 짚는다. ③ 밝고 어두운 대비를 색 이름만 보고 판단한다 → 밝기를 눈으로 견주게 한다. 확인 필요: 보색 짝은 색상환 자료와 한 번 맞춰 본다. 준비물: 색종이, 색상환 그림, 도화지.',
  });

    // ───────────── 16차시 (확장) ─────────────
  L(16, S2, {
    title: '대칭과 되풀이가 보이는 작품을 도형으로 짓기',
    objective: '작품에서 좌우 대칭과 되풀이를 찾아 가르고, 같은 형식을 도형으로 만들어 그것이 주는 안정감이나 리듬을 말할 수 있다.',
    ill: 'a gold crown with branch shaped ornaments repeating evenly, and a seated stone Buddha seen from the front with two identical sides in layered paper',
    scene: scn([{ motif: 'star', x: 130, y: 130, s: 0.9 }, { motif: 'star', x: 370, y: 130, s: 0.9 }, { motif: 'house', x: 250, y: 216, s: 1.2 }], '같은 모양, 같은 간격', 22),
    intro: {
      teacher: '교실 문이나 창문을 가리키며 "가운데를 접는다면 양쪽이 같을까요?"라고 묻는다. 같다면 좌우 대칭이라고 알려 준다. 이어 교실 바닥 타일이나 칠판 아래 줄무늬를 가리키며 "같은 모양이 계속 이어지면 무엇이라고 부를까요?" 하고 묻고 되풀이라고 말해 준다. "대칭은 안정감을, 되풀이는 리듬을 줘요. 작품에서도 이 둘을 찾아봐요." 시연 단추로 카드가 두 칸으로 나뉘는 모습을 보여 준다.',
      student: '교실에서 양쪽이 같은 것, 같은 모양이 계속 이어지는 것을 하나씩 찾아 말해 봅시다.',
      demo: { tool: 'mindmap', options: { topic: '대칭과 되풀이', slots: ['좌우 대칭', '되풀이'], cards: [{ id: 'd1', text: '문 두 짝' }, { id: 'd2', text: '바닥 타일' }] }, sequence: [{ sort: { '좌우 대칭': ['d1'], 되풀이: ['d2'] } }] },
    },
    acts: [
      {
        title: '대칭과 되풀이 찾아 가르기', tool: 'mindmap',
        teacher: '"가운데를 접으면 양쪽이 같아지나요, 같은 모양이 줄지어 이어지나요?" 문장마다 접어 보는 몸짓을 하게 한다. 석굴암 본존불의 앉은 정면 모습은 좌우가 같고, 책가도의 책장 칸은 같은 네모가 이어진다. 한 작품이 둘 다 가진 경우는 먼저 눈에 띄는 쪽에 넣고 다른 쪽도 말하게 한다. 도전 단계에서는 둘 다 아닌 카드가 섞여 있다.',
        task: '카드를 읽고 좌우 대칭인지, 같은 모양이 되풀이되는지 가려 칸에 넣어요.',
        items: [
          sortItem({ p: '작품 카드를 좌우 대칭과 되풀이로 나누어 보세요.', topic: '대칭과 되풀이 1', slots: ['좌우 대칭', '되풀이'], groups: [['달항아리의 몸통 모양', '석굴암 본존불의 정면 모습'], ['청자 병의 구름무늬 띠', '책가도의 책장 칸']], extra: '인왕제색도의 큰 바위 하나', hint: '가운데에서 접어 양쪽이 같은지, 같은 모양이 줄지어 이어지는지 따져 봐요.', d: 0.25 }),
          sortItem({ p: '금관과 조각보 카드를 좌우 대칭과 되풀이로 나누어 보세요.', topic: '대칭과 되풀이 2', slots: ['좌우 대칭', '되풀이'], groups: [['신라 금관의 정면 모양'], ['신라 금관의 나뭇가지 모양 장식', '조각보의 네모 조각']], extra: '씨름도의 두 씨름꾼', d: 0.3 }),
          sortItem({ p: '건물과 옷 카드를 좌우 대칭과 되풀이로 나누어 보세요.', topic: '대칭과 되풀이 3', slots: ['좌우 대칭', '되풀이'], groups: [['한옥 대문의 좌우 같은 문짝'], ['단청의 되풀이 줄무늬', '색동 저고리의 줄무늬 띠']], extra: '해돋이의 흐릿한 배', d: 0.3,
            predict: { q: '대칭과 되풀이는 보는 사람에게 어떤 느낌을 줄까요?', options: ['어지러운 느낌', '안정감이나 리듬감'], answer: 1 }, conclude: '대칭은 안정된 느낌을, 되풀이는 리듬이 있는 느낌을 줘요.' }),
        ],
      },
      {
        title: '대칭 불상과 되풀이 금관 장식 짓기', tool: 'collage',
        teacher: '"접는 선이 가운데 있어요. 왼쪽에 놓은 조각의 짝을 오른쪽에 어떻게 놓을까요?" 접는 선에서 같은 거리와 같은 방향을 맞추게 한다. 금관 장식은 같은 모양을 같은 간격으로 줄지어 놓게 하고, 한 개만 다르게 놓은 학생에게는 "어느 장식이 다른지 짚어 볼까요?"라고 묻는다.',
        task: '접는 선을 기준으로 양쪽이 같은 불상을 만들고, 같은 장식을 줄지어 되풀이한 금관을 만들어요.',
        levels: { easy: { shapes: ['circle', 'triangle', 'square', 'diamond'], colors: ['노랑', '갈색', '검정', '하양'], sizes: ['m', 'l'] }, base: { shapes: ['circle', 'triangle', 'square', 'diamond', 'semi', 'star'] }, challenge: {} },
        items: [
          { prompt: '접는 선을 기준으로 양쪽이 같은 본존불을 만들어요. 조각 여섯 개 이상을 써요.', target: { symmetry: 'vertical', pieces: { min: 6 } }, difficulty: 0.3 },
          { prompt: '노랑 세모 장식을 같은 모양과 크기로 왼쪽에서 오른쪽으로 네 번 이상 줄지어 붙여요.', target: { repeat: { times: 4, unit: 1 }, has: [{ shape: 'triangle', color: '노랑', min: 4 }] }, difficulty: 0.25 },
          { prompt: '대칭이나 되풀이가 보이는 작품을 만들고 점검해요.', target: { selfCheck: ['대칭인지 되풀이인지 정해 말했어요', '같은 모양을 같은 간격이나 같은 거리로 놓았어요', '그 형식이 주는 느낌을 한마디로 말했어요'], minPieces: 5 }, difficulty: 0.1 },
        ],
      },
      {
        title: '둘레에서 대칭과 되풀이 찾기 (짝 활동)', tool: 'mindmap', pair: true,
        teacher: '짝끼리 교실, 복도, 학교 건물 사진에서 좌우 대칭인 것과 되풀이되는 것을 하나씩 찾아 말하게 한다. "가운데를 접으면 양쪽이 같아요", "같은 모양이 이어져요"처럼 근거를 한 문장으로 말하게 한다. 근거를 대지 못하는 짝에게는 손으로 접는 몸짓을 해 보이게 한다. 찾은 것은 활동지 3번에 쓰게 한다.',
        task: '둘레에서 대칭인 것과 되풀이되는 것을 찾아 짝에게 소개하고, 근거를 말해요.',
        levels: { easy: { live: true }, base: {}, challenge: {} },
        items: [
          talk('교실이나 복도에서 대칭인 것을 하나 찾아 짝에게 근거와 함께 말하고 "다 했어요"를 누르세요.', '대칭 찾기', ['찾은 것', '근거'], ['문', '창문', '칠판']),
          talk('같은 모양이 되풀이되는 것을 하나 찾아 짝에게 근거와 함께 말하고 "다 했어요"를 누르세요.', '되풀이 찾기', ['찾은 것', '근거'], ['타일', '창살', '줄무늬']),
          talk('짝이 찾은 것이 맞는지 확인하고 활동지에 쓴 뒤 "다 했어요"를 누르세요.', '짝 확인', ['짝이 찾은 것', '내 생각'], ['맞아요', '다시 살펴봐요']),
        ],
      },
    ],
    wrap: {
      teacher: '"오늘 찾은 대칭과 되풀이는 각각 어떤 느낌을 주었나요?" 두세 명에게 느낌을 말하게 한다. "같은 모양이면 다 대칭이에요"라는 학생에게는 "가운데에서 접어 양쪽이 같으면 대칭, 같은 모양이 이어지면 되풀이예요"라고 짚는다. 출구 1번에서 두 가지를 바꾼 학생은 다음 시간 도입에 접는 몸짓으로 다시 가른다.',
      exit: [
        { type: 'tool', tool: 'mindmap', options: { topic: '대칭과 되풀이 4', slots: ['좌우 대칭', '되풀이'], cards: [{ id: 'e1', text: '나비 날개 무늬' }, { id: 'e2', text: '울타리 말뚝 줄' }, { id: 'e3', text: '도자기의 양쪽 손잡이' }] }, prompt: '카드를 좌우 대칭과 되풀이로 나누어 보세요.', target: { sort: { '좌우 대칭': ['e1', 'e3'], 되풀이: ['e2'] } }, difficulty: 0.25 },
        { type: 'choice', prompt: '같은 모양이 줄지어 이어질 때 이 형식을 무엇이라고 하나요?', options: ['대칭', '되풀이', '대비'], answer: 1, difficulty: 0.1, explain: '같은 모양이 계속 이어지는 것은 되풀이예요.' },
        { type: 'short', prompt: '작품에서 찾은 대칭이나 되풀이 하나와 그것이 주는 느낌을 쓰세요.' },
      ],
    },
    ws: {
      title: '대칭과 되풀이 찾기',
      items: [
        { type: 'table', prompt: '둘레에서 찾은 대칭과 되풀이를 쓰세요.', columns: ['찾은 것', '대칭 / 되풀이', '근거'], cells: [['', '', ''], ['', '', '']] },
        { type: 'choice', prompt: '되풀이되는 것에 ○ 하세요.', options: ['한 장의 달항아리 몸통', '청자 병의 구름무늬 띠', '하나만 있는 나무', '해돋이의 해 하나'], answer: '청자 병의 구름무늬 띠' },
        { type: 'figure', wide: true, prompt: '같은 장식이 계속 이어지도록 오른쪽 빈자리에 같은 모양을 두 개 더 그리세요.', tool: 'collage', options: { printColors: false }, figures: [{ state: { pieces: [{ shape: 'triangle', color: '노랑', size: 'm', x: 80, y: 200, r: 0 }, { shape: 'triangle', color: '노랑', size: 'm', x: 160, y: 200, r: 0 }, { shape: 'triangle', color: '노랑', size: 'm', x: 240, y: 200, r: 0 }] }, caption: '같은 세모 · 같은 간격으로 이어 그리기' }], answer: '같은 세모 두 개를 같은 간격으로' },
        { type: 'short', prompt: '내가 만든 도형 작품에서 대칭이나 되풀이가 주는 느낌을 쓰세요.' },
      ],
      easy: {
        note: '가운데를 접어 양쪽이 같으면 대칭, 같은 모양이 이어지면 되풀이예요.',
        items: [
          { type: 'choice', prompt: '양쪽이 같은 것에 ○ 하세요.', options: ['문 두 짝', '들쭉날쭉한 돌길'], answer: '문 두 짝' },
          { type: 'short', prompt: '둘레에서 되풀이되는 것 하나를 쓰세요.' },
          { type: 'draw', prompt: '대칭 모양을 그리세요.' },
        ],
      },
    },
    diff: {
      easy: '카드를 놓으면 바로 맞는지 표시되고, 색종이는 모양 네 가지·색 네 가지·크기 두 가지만 나와요.',
      base: '스스로 나눈 뒤 확인하고, 모양 여섯 가지와 모든 색을 써요.',
      challenge: '대칭도 되풀이도 아닌 카드가 섞여 있어 남겨야 해요.',
    },
    notes: '자주 보이는 어려움: ① 대칭과 되풀이를 섞는다 → 접는 몸짓을 해 보게 한다. ② 한 개만 다른 장식을 붙인다 → 같은 간격과 같은 크기를 소리 내어 확인한다. ③ 대칭이 되려면 조각 수가 같아야 하는 줄 모른다 → 짝이 되는 조각이 하나씩 있어야 한다고 알려 준다. 확인 필요: 석굴암·금관 모양 설명은 수업 전에 박물관 자료와 맞춰 본다. 준비물: 접는 선 활동지, 도형 색종이.',
  });

  // ───────────── 17차시 (핵심) ─────────────
  L(17, S2, {
    title: '작품 설명 글의 빈칸을 구체적인 말로 채워 고치기',
    objective: '내용과 형식을 한 글에 함께 담은 작품 설명에서 빈칸을 알맞은 낱말로 채우고, 막연한 말을 구체적인 말로 고칠 수 있다.',
    ill: 'a child writing a short description beside a painting, crossing out vague words and writing precise words on a paper slip',
    scene: scn([{ motif: 'house', x: 100, y: 214, s: 1 }, { motif: 'star', x: 370, y: 110, s: 0.8 }, { motif: 'leaf', x: 300, y: 200, r: 15 }], '구체적인 말로 고쳐 쓰기', 22),
    intro: {
      teacher: '칠판에 "이 그림은 멋있어요"를 쓴다. "이 말을 들은 친구는 그림을 떠올릴 수 있을까요?" 학생에게 묻는다. 이어 "붓 자국이 짧게 끊겨서 빛이 흔들리는 것 같아요"를 쓰고 두 문장을 견주게 한다. "두 번째 글은 무엇을 어떻게 그렸는지가 담겼어요. 오늘은 막연한 설명을 구체적인 말로 채워 고쳐 봐요." 시연 단추로 빈칸이 채워지는 모습을 보여 준다.',
      student: '"이 그림은 멋있어요"라는 말을 듣고 그림을 떠올릴 수 있는지, 왜 그런지 말해 봅시다.',
      demo: { tool: 'mindmap', options: { mode: 'fill', topic: '설명 고치기', slots: [{ id: 'b1', label: '붓 자국을 ___ 끊어 빛을 나타냈어요.' }], cards: [{ id: 'c1', text: '짧게' }, { id: 'c2', text: '멋있게' }] }, sequence: [{ fill: { b1: 'c1' } }] },
    },
    acts: [
      {
        title: '설명 글 빈칸 채우기', tool: 'mindmap',
        teacher: '"이 빈칸에는 내용을 말하는 낱말이 들어갈까요, 형식을 말하는 낱말이 들어갈까요?" 문장을 소리 내어 읽어 알맞은 카드를 대어 보게 한다. 카드의 낱말이 구체적인지(짙은, 짧은, 둥근) 막연한지(멋있는, 예쁜) 따져 보게 한다. 도전 단계에서는 문장과 상관없는 배경 카드가 섞여 있어 남겨 둔다.',
        task: '작품 설명 글의 빈칸에 알맞은 낱말 카드를 하나씩 넣어요.',
        items: [
          fillItem({ p: '별이 빛나는 밤 설명 글의 빈칸에 알맞은 카드를 넣어 보세요.', topic: '별이 빛나는 밤 설명', lines: [['이 그림에는 ___가 그려져 있어요.', '밤하늘과 마을'], ['그림은 ___ 붓질로 그렸어요.', '짧고 소용돌이치는'], ['파랑과 노랑을 맞대어 별빛이 ___ 보이게 했어요.', '더 환하게']], dist: ['조선 후기에'], hint: '앞뒤 낱말을 읽어 보고 무엇을 그렸는지와 어떻게 그렸는지에 맞는 카드를 골라요.', d: 0.25 }),
          fillItem({ p: '인왕제색도 설명 글의 빈칸에 알맞은 카드를 넣어 보세요.', topic: '인왕제색도 설명', lines: [['정선은 비 갠 뒤의 ___을 그렸어요.', '인왕산'], ['짙은 먹으로 바위를 ___ 칠했어요.', '크고 묵직하게'], ['아래쪽 안개는 ___ 먹으로 나타냈어요.', '옅은']], dist: ['푸른'], d: 0.3 }),
          fillItem({ p: '달항아리 설명 글의 빈칸에 알맞은 카드를 넣어 보세요.', topic: '달항아리 설명', lines: [['이 항아리는 몸통이 ___ 곡선이에요.', '둥글고 부드러운'], ['색은 ___ 흰색이에요.', '맑고 은은한'], ['몸통이 둥글어서 ___ 느낌이 나요.', '넉넉하고 따뜻한']], dist: ['날카롭고 차가운'], d: 0.3,
            predict: { q: '구체적인 낱말로 고치면 설명이 어떻게 달라질까요?', options: ['달라지지 않아요', '그림을 더 잘 떠올릴 수 있어요'], answer: 1 }, conclude: '구체적인 낱말은 그림을 보지 않은 사람도 모습을 떠올리게 해요.' }),
        ],
      },
      {
        title: '구체적인 설명만 골라 담기', tool: 'mindmap',
        teacher: '"이 문장을 읽고 그림을 떠올릴 수 있나요? 어떤 낱말 때문인가요?" 구체적인 낱말(짧게 끊어, 짙은 먹, 가는 선)과 막연한 낱말(멋있어요, 예뻐요)을 가려 짚게 한다. 구체적인 문장이라도 사실이 틀리면 안 된다는 점도 함께 말해 준다. 다 담았다는 학생에게는 "막연한 말을 구체적인 말로 하나 고쳐 볼까요?"라고 묻는다.',
        task: '카드 가운데 구체적으로 설명한 문장만 골라 바구니에 담아요.',
        levels: { easy: { live: true, instant: true }, base: {}, challenge: {} },
        items: [
          pickItem({ p: '해돋이 그림 설명에서 구체적인 문장을 모두 고르세요.', topic: '인상, 해돋이', basket: '구체적인 설명', yes: ['주황 해가 파란 바다 위에서 또렷이 보여요', '붓 자국을 짧게 끊어 빛이 흔들리는 느낌을 줘요'], no: ['그림이 멋있어요', '잘 그렸어요'], hint: '그림을 떠올릴 수 있는 색·붓질·위치가 있는 문장을 골라요.', d: 0.2 }),
          pickItem({ p: '단오풍정 설명에서 구체적인 문장을 모두 고르세요.', topic: '단오풍정', basket: '구체적인 설명', yes: ['고운 색 옷이 짙은 바위와 대비돼요', '가는 선으로 얼굴과 옷 주름을 그렸어요'], no: ['예뻐요', '옛날 그림이에요'], d: 0.25 }),
          pickItem({ p: '몽유도원도 설명에서 구체적인 문장을 모두 고르세요.', topic: '몽유도원도', basket: '구체적인 설명', yes: ['왼쪽의 현실 풍경과 오른쪽의 복숭아밭이 나뉘어요', '분홍 꽃이 모여 꿈속 세계가 부드럽게 보여요'], no: ['신기해요', '좋은 그림이에요'], d: 0.3 }),
        ],
      },
      {
        title: '짝의 설명을 구체적으로 고쳐 주기 (짝 활동)', tool: 'mindmap', pair: true,
        teacher: '짝이 쓴 작품 설명 두세 줄에서 막연한 말(멋있어요, 예뻐요)에 밑줄을 긋게 한다. "어떤 색이 예쁜가요? 어떤 선이 멋있나요?" 하고 물어 구체적인 말로 고쳐 쓰게 한다. 고치다 사실과 달라진 부분이 있으면 작품 사진과 맞춰 보게 한다. 고친 글은 활동지 3번에 쓰게 한다.',
        task: '짝의 설명에서 막연한 말을 찾아 구체적인 말로 함께 고쳐요.',
        levels: { easy: { live: true }, base: {}, challenge: {} },
        items: [
          talk('짝의 설명에서 막연한 말 하나를 찾아 밑줄을 긋고 "다 했어요"를 누르세요.', '막연한 말 찾기', ['막연한 말', '찾은 짝'], ['멋있어요', '예뻐요']),
          talk('그 말을 구체적인 말로 짝과 함께 고쳐 말하고 "다 했어요"를 누르세요.', '구체적으로 고치기', ['고친 말', '까닭'], ['색', '선', '붓 자국']),
          talk('고친 설명을 활동지에 쓰고 작품 사진과 맞는지 확인한 뒤 "다 했어요"를 누르세요.', '고친 설명 확인', ['고친 글', '확인'], ['사진과 맞아요', '다시 고쳐요']),
        ],
      },
    ],
    wrap: {
      teacher: '"막연한 말을 구체적인 말로 고친 예를 하나 말해 볼까요?" 두세 명이 말하게 한다. "길게 쓰면 구체적인 거 아니에요?"라고 하는 학생에게는 "길어도 어떤 색, 어떤 선인지가 없으면 막연해요. 구체적인 낱말이 있는지 보세요"라고 짚는다. 출구 1번에서 형식 카드를 내용 칸에 넣은 학생은 다음 시간 도입에 빈칸 문장을 다시 읽는다.',
      exit: [
        { type: 'tool', tool: 'mindmap', options: { mode: 'fill', topic: '세한도 설명', slots: [{ id: 'b1', label: '세한도에는 ___ 소나무가 그려져 있어요.' }, { id: 'b2', label: '마른 붓으로 ___ 그렸어요.' }], cards: [{ id: 'c1', text: '꼿꼿한' }, { id: 'c2', text: '간결하게' }, { id: 'c3', text: '멋있게' }] }, prompt: '세한도 설명 글의 빈칸에 알맞은 카드를 넣어 보세요. 알맞지 않은 카드는 남겨 두세요.', target: { fill: { b1: 'c1', b2: 'c2' } }, difficulty: 0.25 },
        { type: 'choice', prompt: '다음 가운데 가장 구체적인 설명은 무엇인가요?', options: ['그림이 예뻐요', '짧게 끊긴 붓 자국으로 빛이 흔들리는 느낌을 줘요', '정말 잘 그렸어요'], answer: 1, difficulty: 0.15, explain: '붓 자국의 모양과 느낌이 나와 있어 그림을 떠올릴 수 있어요.' },
        { type: 'short', prompt: '내가 쓴 막연한 설명 한 줄을 구체적인 말로 고쳐 쓰세요.' },
      ],
    },
    ws: {
      title: '설명 글 고쳐 쓰기',
      items: [
        { type: 'table', prompt: '막연한 설명을 구체적인 설명으로 고쳐 쓰세요.', columns: ['막연한 설명', '구체적인 설명'], cells: [['그림이 멋있어요', ''], ['색이 예뻐요', ''], ['', '']] },
        { type: 'choice', prompt: '구체적인 설명에 ○ 하세요.', options: ['신기해요', '분홍 꽃이 모여 꿈속 세계가 부드럽게 보여요', '좋은 그림이에요', '정말 잘 그렸어요'], answer: '분홍 꽃이 모여 꿈속 세계가 부드럽게 보여요' },
        { type: 'short', prompt: '내가 좋아하는 작품에 대해 내용과 형식이 모두 들어간 설명을 두 문장으로 쓰세요.' },
        { type: 'draw', prompt: '설명에 나온 색과 모양을 도형으로 그려 보며 설명이 맞는지 확인하세요.' },
      ],
      easy: {
        note: '색·선·붓 자국처럼 눈으로 본 것을 말하면 구체적이에요.',
        items: [
          { type: 'choice', prompt: '구체적인 말에 ○ 하세요.', options: ['멋있어요', '짙은 먹으로 칠했어요'], answer: '짙은 먹으로 칠했어요' },
          { type: 'short', prompt: '막연한 말 하나를 구체적인 말로 고쳐 쓰세요.' },
          { type: 'draw', prompt: '설명에 맞는 그림을 그리세요.' },
        ],
      },
    },
    diff: {
      easy: '카드를 넣으면 바로 맞는지 표시되고 틀리면 까닭을 말해 줘요.',
      base: '스스로 채운 뒤 확인해요.',
      challenge: '문장과 상관없는 카드가 섞여 있어 남겨야 해요.',
    },
    notes: '자주 보이는 어려움: ① 길게 쓰는 것이 구체적이라고 여긴다 → 어떤 색·선·붓 자국인지가 있는지 본다. ② 내용 낱말과 형식 낱말을 섞어 빈칸에 넣는다 → 문장 앞뒤를 소리 내어 읽게 한다. ③ 구체적으로 쓰다 사실과 다른 말을 쓴다 → 작품 사진과 맞춰 본다. 확인 필요: 작품 설명 문장은 수업 전에 미술관 누리집과 맞춰 본다. 준비물: 짝 설명 쪽지, 작품 사진.',
  });

  // ───────────── 18차시 (연습) ─────────────
  L(18, S2, {
    title: '짝의 감상 글에서 잘한 점과 고칠 점 찾아 말해 주기',
    objective: '내용과 형식을 모두 담았는지를 기준으로 감상 글의 잘한 점과 고칠 점을 구분하고, 고치는 방법을 한 가지씩 말할 수 있다.',
    ill: 'two children exchanging short written notes about a painting with a checklist of three items on a paper clipboard',
    scene: scn([{ motif: 'house', x: 130, y: 214, s: 1 }, { motif: 'star', x: 350, y: 110, s: 0.8 }, { motif: 'leaf', x: 280, y: 202, r: 20 }], '잘한 점, 고칠 점', 22),
    intro: {
      teacher: '짝의 글 세 줄을 칠판에 적어 둔다: "이 그림은 멋있어요. 파란 바다와 주황 해가 있어요." "이 글에서 잘한 점은 무엇일까요?" 학생에게 묻고 구체적으로 색을 쓴 점을 짚는다. "고칠 점은 무엇일까요?" 학생이 말한 것(멋있다는 말만 있다, 형식이 없다)을 받는다. "친구 글을 고쳐 줄 때는 잘한 점을 먼저 말하고 고칠 점은 방법과 함께 말해요." 시연 단추로 카드가 두 칸으로 나뉘는 모습을 보여 준다.',
      student: '"이 그림은 멋있어요. 파란 바다와 주황 해가 있어요"라는 글에서 잘한 점 하나와 고칠 점 하나를 말해 봅시다.',
      demo: { tool: 'mindmap', options: { topic: '감상 글 살피기', slots: ['잘한 점', '고칠 점'], cards: [{ id: 'd1', text: '색 이름을 구체적으로 썼어요' }, { id: 'd2', text: '멋있다는 말만 썼어요' }] }, sequence: [{ sort: { '잘한 점': ['d1'], '고칠 점': ['d2'] } }] },
    },
    acts: [
      {
        title: '감상 글 살피고 고치는 방법 찾기', tool: 'mindmap',
        teacher: '"이 말은 글의 잘한 점일까요, 고칠 점일까요?" 먼저 내용과 형식이 모두 있는지를 기준으로 삼게 한다. 고칠 점 카드에는 반드시 고치는 방법을 함께 떠올리게 한다. 짝에게 말할 때는 \'~가 없어요\'가 아니라 \'~를 더 써 주면 좋겠어요\'로 말하게 한다. 도전 단계의 \'글씨가 예뻐요\'는 감상의 내용·형식 기준과 상관없으므로 남겨 둔다.',
        task: '카드를 읽고 잘한 점과 고칠 점으로 나누고, 고칠 점에는 고치는 방법도 이어요.',
        items: [
          sortItem({ p: '짝의 감상 글에 대한 카드를 잘한 점과 고칠 점으로 나누어 보세요.', topic: '감상 글 평가', slots: ['잘한 점', '고칠 점'], groups: [['색과 붓질을 구체적으로 말했어요', '내용과 형식을 나누어 말했어요'], ['멋있다는 말만 있어요', '작품 이름과 만든 사람을 말하지 않았어요']], extra: '글씨가 예뻐요', hint: '내용과 형식을 함께 담았는지, 구체적인 낱말이 있는지로 가려요.', d: 0.2 }),
          matchItem({ p: '감상 글의 문제마다 고치는 방법을 이어 보세요.', topic: '고치는 방법', pairs: [['"그냥 예뻐요"라고만 했어요', '어떤 색과 선이 예쁜지 하나 더 말해요'], ['내용만 말했어요', '색·선·모양 같은 형식도 말해요'], ['때와 곳을 말하지 않았어요', '만든 때나 곳을 한 문장 더해요']], extra: '글을 더 짧게 줄여요', d: 0.25 }),
          orderItem({ p: '작품을 설명하는 순서대로 카드를 놓아 보세요.', texts: ['작품 이름과 만든 때 말하기', '그림 속 내용 말하기', '색·선·모양의 특징 말하기', '내가 느낀 점 말하기'], d: 0.3,
            predict: { q: '이 순서로 말하면 듣는 사람이 이해하기 쉬울까요?', options: ['어려워요', '쉬워요'], answer: 1 }, conclude: '때와 곳, 내용, 형식, 느낌 순서로 말하면 듣는 사람이 따라가기 쉬워요.' }),
        ],
      },
      {
        title: '설명에 맞는 도형 분석 도식 만들기', tool: 'collage',
        teacher: '"이 설명대로 도형을 놓으면 어떤 모습이 될까요?" 설명을 읽고 도형으로 옮겨 설명이 맞는지 확인하게 한다. 설명대로 놓았는데 그림과 다르면 설명이 부족하다는 뜻이라고 말해 준다. 도식을 만들다 설명에 없는 조각을 넣은 학생에게는 "설명에 나온 것만 놓아 볼까요?"라고 묻는다.',
        task: '설명을 읽고 그대로 도형으로 놓아, 설명이 구체적인지 확인해요.',
        levels: { easy: { shapes: ['triangle', 'square', 'star', 'circle'], colors: ['초록', '갈색', '노랑', '파랑'], sizes: ['s', 'm', 'l'] }, base: { shapes: ['triangle', 'square', 'star', 'circle', 'rect', 'leaf'] }, challenge: {} },
        items: [
          { prompt: '세한도 설명대로 놓아요. 초록 세모 둘 사이에 갈색 작은 네모 하나를 놓아요.', target: { has: [{ shape: 'triangle', color: '초록', n: 2 }, { shape: 'square', color: '갈색', size: 's', n: 1 }] }, difficulty: 0.2 },
          { prompt: '별이 빛나는 밤 설명대로 놓아요. 파랑 큰 네모 위에 노랑 별 다섯 개 이상을 붙여요.', target: { has: [{ shape: 'square', color: '파랑', size: 'l', min: 1 }, { shape: 'star', color: '노랑', min: 5 }] }, difficulty: 0.25 },
          { prompt: '짝의 설명을 도형으로 옮기고 점검해요.', target: { selfCheck: ['설명에 나온 도형만 놓았어요', '설명이 부족한 곳을 찾았어요', '고치면 좋은 말을 짝에게 알려 주었어요'], minPieces: 4 }, difficulty: 0.1 },
        ],
      },
    ],
    wrap: {
      teacher: '"오늘 짝에게 고치는 방법을 어떻게 말해 주었나요?" 두세 명이 말하게 한다. "그냥 틀렸다고 했어요"라는 학생에게는 "무엇을 어떻게 고치면 좋을지 한 가지만 더 말해 줄 수 있나요?"라고 되묻는다. 출구 1번에서 짝을 바꾼 학생은 다음 시간 도입에 고치는 방법 짝짓기를 다시 한다.',
      exit: [
        { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '고치는 방법 2', slots: [{ id: 's1', label: '형식을 말하지 않았어요' }, { id: 's2', label: '때와 곳이 없어요' }], cards: [{ id: 'e1', text: '색이나 선에 대해 한 문장 더해요' }, { id: 'e2', text: '만든 때나 곳을 더해요' }, { id: 'e3', text: '글씨를 더 크게 써요' }] }, prompt: '감상 글의 문제마다 고치는 방법을 이어 보세요. 알맞지 않은 카드는 남겨 두세요.', target: { match: { s1: 'e1', s2: 'e2' } }, difficulty: 0.2 },
        { type: 'choice', prompt: '짝의 글을 고쳐 줄 때 가장 알맞은 말은 무엇인가요?', options: ['이 글은 별로예요', '색을 구체적으로 한 번 더 쓰면 더 좋겠어요', '내 글이 더 나아요'], answer: 1, difficulty: 0.15, explain: '잘한 점을 인정하고 고치는 방법을 함께 말해 주면 짝이 쉽게 고칠 수 있어요.' },
        { type: 'short', prompt: '오늘 짝의 글에서 찾은 잘한 점 하나와 고칠 점 하나를 쓰세요.' },
      ],
    },
    ws: {
      title: '감상 글 고쳐 주기',
      items: [
        { type: 'table', prompt: '짝의 감상 글을 읽고 평가해 쓰세요.', columns: ['잘한 점', '고칠 점', '고치는 방법'], cells: [['', '', ''], ['', '', '']] },
        { type: 'choice', prompt: '고치는 방법으로 알맞은 것에 ○ 하세요.', options: ['글을 줄여요', '어떤 색이 예쁜지 구체적으로 더 써요', '글씨를 크게 써요', '다른 작품으로 바꿔요'], answer: '어떤 색이 예쁜지 구체적으로 더 써요' },
        { type: 'figure', wide: true, prompt: '설명대로 소나무 두 그루 사이에 집을 그려 넣어 보세요.', tool: 'collage', options: { printColors: false }, figures: [{ state: { pieces: [{ shape: 'triangle', color: '초록', size: 'l', x: 160, y: 200, r: 0 }, { shape: 'triangle', color: '초록', size: 'l', x: 400, y: 200, r: 0 }] }, caption: '소나무 둘 · 가운데 집 그리기' }], answer: '가운데 작은 네모 하나' },
        { type: 'short', prompt: '고친 글을 한두 문장으로 쓰세요.' },
      ],
      easy: {
        note: '잘한 점을 먼저 말하고, 고칠 점은 방법과 함께 말해요.',
        items: [
          { type: 'choice', prompt: '고치는 방법에 ○ 하세요.', options: ['색을 더 구체적으로 써요', '글을 지워요'], answer: '색을 더 구체적으로 써요' },
          { type: 'short', prompt: '짝의 글에서 잘한 점 하나를 쓰세요.' },
          { type: 'draw', prompt: '설명에 맞는 그림을 그리세요.' },
        ],
      },
    },
    diff: {
      easy: '카드를 놓으면 바로 맞는지 표시되고, 색종이는 모양 네 가지·색 네 가지·크기 두 가지만 나와요.',
      base: '스스로 나눈 뒤 확인하고, 모양 여섯 가지와 모든 색을 써요.',
      challenge: '기준과 상관없는 카드가 섞여 있어 남겨야 해요.',
    },
    notes: '자주 보이는 어려움: ① 고칠 점만 말하고 잘한 점은 말하지 않는다 → 잘한 점을 먼저 말하게 한다. ② 글씨나 길이 같은 기준과 상관없는 것을 고칠 점으로 든다 → 내용과 형식을 함께 담았는지가 기준이라고 다시 짚는다. ③ 고치는 방법 없이 \'별로예요\'라고만 한다 → 방법 한 가지를 더 말하게 한다. 확인 필요: 작품 설명 문장은 수업 전에 미술관 누리집과 맞춰 본다. 준비물: 짝의 감상 글 쪽지, 도형 색종이.',
  });

  // ───────────── 19차시 (단원 정리) ─────────────
  L(19, [S1, S2], {
    title: '배경·내용·형식으로 작품 하나를 묶어 설명하고 되돌아보기',
    objective: '한 작품을 시대·지역 배경, 내용, 형식으로 갈라 묶어 설명하고, 단원에서 배운 감상 방법과 앞으로 고칠 점을 스스로 말할 수 있다.',
    ill: 'a child standing before three paper panels labeled background content and form on a gallery wall, pointing to a painting while holding a small checklist',
    scene: scn([{ motif: 'house', x: 100, y: 214, s: 1 }, { motif: 'star', x: 370, y: 112, s: 0.9 }, { motif: 'tree', x: 300, y: 216, s: 1 }], '세 가지로 묶어 설명해요', 22),
    intro: {
      teacher: '칠판에 \'배경 · 내용 · 형식\' 세 칸을 그린다. "이번 단원에서 우리는 작품을 세 방향으로 살펴봤어요. 무엇이었는지 기억나나요?" 학생이 말한 것을 세 칸에 나눠 적는다. "오늘은 작품 하나를 이 세 칸으로 묶어 설명하고, 단원 전체를 돌아봐요." 시연 단추로 카드가 세 칸으로 나뉘는 모습을 보여 준다.',
      student: '이번 단원에서 작품을 살펴본 세 가지 방법이 무엇이었는지 기억나는 대로 말해 봅시다.',
      demo: { tool: 'mindmap', options: { topic: '별이 빛나는 밤', slots: ['시대·지역 배경', '내용', '형식'], cards: [{ id: 'd1', text: '프랑스 남쪽 마을에서 그렸어요' }, { id: 'd2', text: '밤하늘과 마을이에요' }, { id: 'd3', text: '짧은 붓질이 소용돌이쳐요' }] }, sequence: [{ sort: { '시대·지역 배경': ['d1'], 내용: ['d2'], 형식: ['d3'] } }] },
    },
    acts: [
      {
        title: '작품 설명을 배경·내용·형식으로 묶기', tool: 'mindmap',
        teacher: '"이 문장은 언제 어디서 그렸는지를 말하나요, 무엇을 그렸는지인가요, 어떻게 그렸는지인가요?" 문장마다 세 가지 가운데 하나로 정하게 한다. 헷갈리는 문장은 \'언제·어디\'인지, \'무엇\'인지, \'어떻게\'인지 질문 말로 바꿔 보게 한다. 도전 단계의 \'나는 이 그림이 좋아요\'는 세 가지 어디에도 속하지 않는 내 느낌이다.',
        task: '작품 설명 카드를 읽고 시대·지역 배경, 내용, 형식 세 칸에 나누어 넣어요.',
        items: [
          sortItem({ p: '별이 빛나는 밤의 설명 카드를 배경·내용·형식으로 나누어 보세요.', topic: '별이 빛나는 밤 정리', slots: ['시대·지역 배경', '내용', '형식'], groups: [['프랑스 남쪽 생레미에서 1889년에 그렸어요'], ['밤하늘 아래 마을과 사이프러스 나무를 그렸어요'], ['짧은 붓질이 소용돌이쳐요', '파랑과 노랑이 맞닿아 있어요']], extra: '나는 이 그림이 좋아요', hint: '언제·어디면 배경, 무엇이면 내용, 어떻게면 형식이에요.', d: 0.25 }),
          sortItem({ p: '인왕제색도의 설명 카드를 배경·내용·형식으로 나누어 보세요.', topic: '인왕제색도 정리', slots: ['시대·지역 배경', '내용', '형식'], groups: [['정선이 1751년 서울 인왕산을 그렸어요'], ['비 갠 뒤의 바위산과 집, 나무를 그렸어요'], ['짙은 먹으로 바위를 크게 칠했어요', '옅은 먹으로 안개를 나타냈어요']], extra: '산이 멋있어요', d: 0.3 }),
          sortItem({ p: '모나리자의 설명 카드를 배경·내용·형식으로 나누어 보세요.', topic: '모나리자 정리', slots: ['시대·지역 배경', '내용', '형식'], groups: [['이탈리아에서 16세기 초에 그렸어요'], ['한 여인의 모습을 그렸어요'], ['나무판에 유화 물감으로 그렸어요']], extra: '나는 이 그림이 신기해요', d: 0.3,
            predict: { q: '세 가지로 묶어 설명하면 작품 이야기가 어떻게 될까요?', options: ['더 복잡해져요', '더 빠짐없이 전할 수 있어요'], answer: 1 }, conclude: '배경·내용·형식을 함께 말하면 작품 이야기를 빠짐없이 전할 수 있어요.' }),
        ],
      },
      {
        title: '작품 한 점을 도형으로 정리하기', tool: 'collage',
        teacher: '"오늘은 단원에서 배운 대칭, 색 대비, 구도를 도형 한 장에 담아 봐요." 앞 활동에서 정리한 설명을 도형으로 옮기게 한다. 대칭 문항은 접는 선을 기준으로, 색 대비 문항은 맞닿게 놓도록 안내한다. 마지막 문항은 자유 작품이므로 점검 목록을 하나씩 말하며 표시하게 한다.',
        task: '배운 형식을 도형으로 나타내고, 마지막에 내 작품을 스스로 점검해요.',
        levels: { easy: { shapes: ['circle', 'square', 'star', 'triangle'], colors: ['파랑', '노랑', '하양', '갈색'], sizes: ['m', 'l'] }, base: { shapes: ['circle', 'square', 'star', 'triangle', 'rect', 'leaf'] }, challenge: {} },
        items: [
          { prompt: '별빛이 또렷하게 보이게 해요. 노랑 별 네 개 이상과 파랑 큰 네모 하나를 맞닿게 붙여요.', target: { contrast: 'warm-cool', has: [{ shape: 'square', color: '파랑', size: 'l', min: 1 }, { shape: 'star', color: '노랑', min: 4 }] }, difficulty: 0.2 },
          { prompt: '접는 선을 기준으로 양쪽이 같은 항아리를 만들어요. 조각 여덟 개 이상을 써요.', target: { symmetry: 'vertical', pieces: { min: 8 } }, difficulty: 0.3 },
          { prompt: '단원에서 배운 것을 담은 작품을 만들고 점검해요.', target: { selfCheck: ['배경 정보를 하나 떠올렸어요', '내용과 형식을 나누어 말했어요', '대칭·대비·구도 가운데 하나를 도형에 담았어요'], minPieces: 5 }, difficulty: 0.1 },
        ],
      },
      {
        title: '단원 자기 평가 짝과 나누기 (짝 활동)', tool: 'mindmap', pair: true,
        teacher: '짝끼리 단원에서 가장 재미있었던 활동과 어려웠던 활동을 하나씩 말하게 한다. "다음에 작품을 볼 때 가장 먼저 해 볼 것은 무엇이에요?" 하고 묻는다. 어려웠던 것을 \'못해서\'가 아니라 \'아직 연습이 필요한 것\'으로 말하게 한다. 말한 것은 활동지 3번에 쓰게 한다.',
        task: '단원에서 재미있었던 것과 어려웠던 것을 짝과 이야기하고, 다음에 해 볼 것을 정해요.',
        levels: { easy: { live: true }, base: {}, challenge: {} },
        items: [
          talk('단원에서 가장 재미있었던 활동과 그 까닭을 짝에게 말하고 "다 했어요"를 누르세요.', '재미있었던 활동', ['활동', '까닭'], ['설명표 읽기', '도형 분석']),
          talk('어려웠던 활동과 그것을 연습하는 방법을 짝에게 말하고 "다 했어요"를 누르세요.', '어려웠던 활동', ['활동', '연습 방법'], ['형식 말하기', '시대 띠']),
          talk('작품을 볼 때 가장 먼저 해 볼 것을 정해 활동지에 쓴 뒤 "다 했어요"를 누르세요.', '다음에 해 볼 것', ['먼저 할 것', '까닭'], ['설명표 읽기', '내용과 형식 나누기']),
        ],
      },
    ],
    wrap: {
      teacher: '"오늘 작품 하나를 배경·내용·형식으로 묶어 설명해 볼 사람?" 한두 명이 앞에서 말하게 한다. "형식은 어려워서 잘 못 해요"라고 하는 학생에게는 "선·색·모양 가운데 하나만 골라 말해 볼까요?"라고 작게 나누어 준다. 출구 3번의 마음 표현은 점수로 매기지 않고 다음 감상 수업의 시작 질문으로 삼는다.',
      exit: [
        { type: 'tool', tool: 'mindmap', options: { topic: '단원 정리', slots: ['시대·지역 배경', '내용', '형식'], cards: [{ id: 'e1', text: '조선 후기에 그렸어요' }, { id: 'e2', text: '단옷날 풍속을 그렸어요' }, { id: 'e3', text: '가는 선과 고운 색을 썼어요' }] }, prompt: '단오풍정의 설명 카드를 배경·내용·형식으로 나누어 보세요.', target: { sort: { '시대·지역 배경': ['e1'], 내용: ['e2'], 형식: ['e3'] } }, difficulty: 0.25 },
        { type: 'choice', prompt: '작품을 깊이 감상하려고 할 때 가장 알맞은 순서는 무엇인가요?', options: ['느낌만 말하고 끝내요', '때와 곳, 내용, 형식을 살펴 느낌과 이어 말해요', '이름만 외워요'], answer: 1, difficulty: 0.15, explain: '배경·내용·형식을 살핀 뒤 느낌을 이어 말하면 작품 이야기가 풍부해져요.' },
        { type: 'short', prompt: '이 단원에서 가장 자란 것 한 가지와 다음에 해 볼 것 한 가지를 쓰세요.' },
        { type: 'mood', prompt: '감상 단원을 마친 지금 마음은 어떤가요?' },
      ],
    },
    ws: {
      title: '감상 단원 되돌아보기',
      items: [
        { type: 'table', prompt: '단원 자기 평가를 하세요. (○ 잘해요 △ 조금 어려워요 × 더 연습해요)', columns: ['배운 것', '○△×', '이유'], cells: [['설명표 읽기', '', ''], ['시대와 곳 이어 이해하기', '', ''], ['내용과 형식 나누어 말하기', '', '']] },
        { type: 'choice', prompt: '작품을 설명할 때 알맞은 말에 ○ 하세요.', options: ['그냥 예뻐요', '짧은 붓질과 파랑·노랑 대비 때문에 별빛이 환해 보여요', '옛날 그림이에요', '잘 그렸어요'], answer: '짧은 붓질과 파랑·노랑 대비 때문에 별빛이 환해 보여요' },
        { type: 'short', prompt: '이 단원에서 가장 자란 것과 다음에 해 볼 것을 한 가지씩 쓰세요.' },
        { type: 'draw', prompt: '이 단원에서 가장 마음에 든 작품을 간단히 그리고 배경·내용·형식을 한 줄씩 적으세요.' },
      ],
      easy: {
        note: '시대·지역 배경, 내용, 형식 세 가지를 떠올려요.',
        items: [
          { type: 'choice', prompt: '가장 재미있었던 활동에 ○ 하세요.', options: ['설명표 읽기', '도형으로 분석하기', '짝과 말하기'], answer: '' },
          { type: 'short', prompt: '이 단원에서 새로 알게 된 것을 하나 쓰세요.' },
          { type: 'draw', prompt: '마음에 든 작품을 그리세요.' },
        ],
      },
    },
    diff: {
      easy: '카드를 놓으면 바로 맞는지 표시되고, 색종이는 모양 네 가지·색 네 가지·크기 두 가지만 나와요.',
      base: '스스로 나눈 뒤 확인하고, 모양 여섯 가지와 모든 색을 써요.',
      challenge: '세 가지 어디에도 속하지 않는 느낌 카드가 섞여 있어 남겨야 해요.',
    },
    notes: '자주 보이는 어려움: ① 시대·지역 배경, 내용, 형식을 섞는다 → \'언제·어디\', \'무엇\', \'어떻게\' 질문 말로 바꿔 본다. ② 자기 평가를 모두 ○로 하거나 모두 ×로 한다 → 가장 쉬웠던 것과 어려웠던 것을 하나씩 말하게 한다. ③ 어려웠다는 것을 못한다는 뜻으로 받아들인다 → 아직 연습이 필요한 것이라고 말해 준다. 확인 필요: 작품 설명 문장은 수업 전에 미술관 누리집과 맞춰 본다. 준비물: 단원에서 쓴 활동지, 작품 사진, 접착 메모지.',
  });

  // @@NEXT@@

  PaperLessons.registerUnit({
    id: 'g5-art-2-03', schema: 'edu-unit.v1', catalogUnit: UNIT,
    grade: 5, subject: '미술', unitTitle: TITLE,
    flow: '이 단원은 작품을 시대·지역 배경과 이어 이해하는 일(1~10차시)에서 시작해 작품의 내용과 형식을 분석해 특징을 설명하는 일(11~19차시)로 나아가는 19차시이다. 1~4차시에서는 설명표에서 만든 사람·때·까닭을 찾고, 소개 글에 빠진 정보를 보태거나 틀린 문장을 고쳐 보며 설명을 바로잡는 눈을 기른다. 5~7차시에서는 작품을 삼국·고려·조선 시간 띠에 놓고 모습과 그 시절 생활을 잇고 우리나라 그림과 서양 그림을 때·곳·재료로 견준다. 8~10차시에서는 상감·오방색·조각보를 직접 구성해 배경을 몸으로 익힌다. 11~16차시에서는 내용과 형식을 가르고, 선·색·모양, 구도, 색 대비, 대칭과 되풀이를 도형으로 분석해 느낌과 이어 말한다. 17~19차시에서는 막연한 설명을 구체적으로 고치고 짝의 글을 고쳐 준 뒤, 작품 하나를 배경·내용·형식으로 묶어 설명하며 단원을 되돌아본다.',
    refs: {},
    lessons,
  });
})();
