/* 4학년 2학기 음악 3. 창작 — 기초 음악 요소(빠르기·셈여림)로 소리 만들기(1~4차시), 생활의 소리·장면을 흉내 내 장면 음악 만들기(5~8차시),
 * 두 요소를 귀로 구별하기(9~12차시), 만든 소리 되돌아보고 고쳐 다시 만들기(13~16차시), 학교 소리 모으기(17~20차시), 다른 모둠 장면 음악 맞히기·단원 정리(21~23차시).
 * 화면의 가락·리듬·소리 목록은 모두 이 단원을 위해 새로 지은 것이다. 기존 곡의 가락·노랫말은 싣지 않는다. 소리는 학생이 누를 때만 난다.
 */
(function () {
  const ILL = (what) => `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`;
  const U = 'g4-음악-2학기-3';
  const head = (n, standards) => ({
    id: `g4-mus-2-03-${String(n).padStart(2, '0')}`, schema: 'edu-lesson.v1', catalog: { unit: U, lesson: n },
    grade: 4, subject: '음악', unitTitle: '3. 창작', standards, minutes: 40, formats: ['chromebook', 'projector', 'print'],
  });
  const S3 = ['[4음03-03]'];
  const S4 = ['[4음03-04]'];
  const POS = {
    sun: { x: 410, y: 56, s: 0.8 }, moon: { x: 410, y: 56, s: 0.8 }, cloud: { x: 110, y: 52 }, hills: { y: 206 }, tree: { x: 70, y: 214 },
    flower: { x: 400, y: 224 }, bird: { x: 200, y: 90 }, star: { x: 90, y: 120, s: 0.6 }, house: { x: 420, y: 214 }, leaf: { x: 150, y: 190, s: 0.6 }, mountain: { x: 330, y: 210, s: 1.1 },
  };
  const sc = (text, motifs) => ({ viewBox: [480, 270], layers: motifs.map((m) => Object.assign({ motif: m }, POS[m])).concat([{ motif: 'text', x: 240, y: 150, text, size: 22 }]) });
  // 교구 단계 옵션(차시마다 새 객체)
  const mel = () => ({
    easy: { from: '도', to: '높은도', names: 'solfa', showWhileListening: true, tempo: 80 },
    base: { from: '도', to: '높은도', names: 'solfa', tempo: 96 },
    challenge: { from: '도', to: '높은도', names: 'none', nameToggle: false, black: true, tempo: 96 },
  });
  const rhy = (meter, measures) => ({
    easy: { mode: 'rhythm', meter, measures, blocks: ['q', 'e', 'h', 'qr'], showBeats: true },
    base: { mode: 'rhythm', meter, measures, blocks: ['q', 'e', 'h', 'qr', 'dh'] },
    challenge: { mode: 'rhythm', meter, measures, blocks: ['q', 'e', 'h', 'qr', 'dh', 'er', 'hr'] },
  });
  // 2분쉼표(hr)를 듣고 놓는 문항이 있는 활동: 쉬움·기본 고르개에도 hr 블록을 둔다
  const rhyHr = (meter, measures) => { const v = rhy(meter, measures); v.easy.blocks = v.easy.blocks.concat('hr'); v.base.blocks = v.base.blocks.concat('hr'); return v; };
  const cardsLv = () => ({ easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } });
  const patLv = () => ({ easy: { perRow: 5 }, base: { perRow: 8 }, challenge: { perRow: 8, revealAfterCheck: true } });
  const plain = (title, unit) => { const o = Object.assign({ title }, unit ? { unit } : {}); return { easy: Object.assign({}, o), base: Object.assign({}, o), challenge: Object.assign({}, o) }; };
  const rot = (a) => a.slice(1).concat(a.slice(0, 1));

  // ── 문항 만들기 ──
  const x2 = (o, key) => (o && o[key]) || {};
  const K = (prompt, notes, o) => Object.assign({ prompt, toolOptions: Object.assign({ melody: notes }, x2(o, 'to'), o && o.t ? { tempo: o.t } : {}), target: { notes } }, x2(o, 'x'));
  const R = (prompt, rhythm, o) => Object.assign({ prompt, toolOptions: Object.assign({ pattern: rhythm }, x2(o, 'to'), o && o.t ? { tempo: o.t } : {}), target: { rhythm } }, x2(o, 'x'));
  const CP = (prompt, compose, checks, o) => Object.assign({ prompt, toolOptions: Object.assign({}, x2(o, 'to')), target: { compose, selfCheck: checks } }, x2(o, 'x'));
  const SK = (prompt, checks, o) => Object.assign({ prompt, toolOptions: Object.assign({}, x2(o, 'to')), target: { selfCheck: checks } }, x2(o, 'x'));
  const SORT = (prompt, topic, sort, trap, x) => {
    const cards = []; Object.keys(sort).forEach((k) => sort[k].forEach((c) => cards.push(c))); (trap || []).forEach((c) => cards.push(c));
    return Object.assign({ prompt, toolOptions: { topic, slots: Object.keys(sort), cards }, target: { sort } }, x || {});
  };
  const PICK = (prompt, topic, basket, good, bad, x) => {
    const cards = []; const n = Math.max(good.length, bad.length);
    for (let i = 0; i < n; i++) { if (i < bad.length) cards.push(bad[i]); if (i < good.length) cards.push(good[i]); }
    return Object.assign({ prompt, toolOptions: { mode: 'pick', topic, basket, cards }, target: { pick: good } }, x || {});
  };
  const MATCH = (prompt, pairs, dist, x) => {
    const slots = pairs.map((p, i) => ({ id: `m${i + 1}`, label: p[0] }));
    const match = {}; pairs.forEach((p, i) => { match[`m${i + 1}`] = p[1]; });
    return Object.assign({ prompt, toolOptions: { mode: 'match', slots, cards: rot(pairs.map((p) => p[1]).concat(dist || [])) }, target: { match } }, x || {});
  };
  const FILL = (prompt, label, answer, cards, x) => Object.assign({ prompt, toolOptions: { mode: 'fill', slots: [{ id: 'f1', label }], cards }, target: { fill: { f1: answer } } }, x || {});
  const ORDER = (prompt, order, x, tool) => Object.assign({ prompt, toolOptions: { mode: 'order', cards: rot(order) }, target: { order } }, x || {});
  const TORDER = (prompt, order, x) => Object.assign({ prompt, toolOptions: { cards: rot(order) }, target: { order } }, x || {});
  const A = (n, title, tool, teacher, task, levels, items) => ({ id: `a${n}`, title: `활동 ${n}. ${title}`, tool, teacher, task, levels, items });

  // 차시 틀: 도입 6분 · 전개 26분 · 정리 8분
  const L = (n, c) => {
    const k = c.acts.length; const mins = k === 1 ? [26] : k === 2 ? [13, 13] : [9, 9, 8];
    c.acts.forEach((a, i) => { a.minutes = mins[i]; });
    return Object.assign(head(n, c.s), {
      title: c.title, objective: c.obj,
      illustration: { prompt: ILL(c.ill), scene: sc(c.txt, c.mot) },
      stages: [
        { id: 'intro', title: '도입', minutes: 6, teacher: c.it, student: c.is, demo: c.demo },
        { id: 'main', title: '전개', minutes: 26, activities: c.acts },
        { id: 'wrapup', title: '정리', minutes: 8, teacher: c.wt, exitTicket: c.exit },
      ],
      worksheet: { title: c.wsTitle, items: c.ws, easy: { note: c.easyNote, items: c.easy } },
      differentiation: c.diff, teacherNotes: c.notes,
    });
  };

  const lessons = [];

  // ───────────────────────── 1차시 (도입) ─────────────────────────
  lessons.push(L(1, {
    s: S3, title: '같은 가락을 느리게·빠르게 쳐서 느낌 견주기',
    obj: '같은 가락을 느리게 칠 때와 빠르게 칠 때 느낌이 어떻게 달라지는지 듣고 말로 나타낼 수 있다.',
    ill: 'two paper snails and two paper rabbits racing along the same winding path made of musical notes', txt: '느리게? 빠르게?', mot: ['sun', 'cloud', 'hills', 'flower'],
    it: `"3학년 때 박은 일정하게 뛰는 것이라고 배웠어요. 그 박이 천천히 뛰면 같은 노래가 어떻게 들릴까요?" 시연 단추로 같은 가락을 느리게 한 번, 빠르게 한 번 들려준다. 음이 달라졌다고 말하는 학생에게 "음 이름은 그대로예요. 무엇이 달라졌는지 다시 들어 볼까요?"라고 묻고, 달라진 것이 빠르기라고 이름 붙인다.`,
    is: '같은 가락이 천천히, 그리고 빠르게 나오는 것을 들어 보고, 느낌이 어떻게 다른지 말해 봅시다.',
    demo: { tool: 'keyboard', options: { from: '도', to: '높은도', tempo: 56 }, sequence: [{ notes: ['도', '레', '미', '레', '도'] }] },
    acts: [
      A(1, '빠르기를 바꿔 들려주는 가락 따라 치기', 'keyboard',
        `"가락 듣기를 누르면 이번엔 천천히, 다음엔 빠르게 나와요. 음 이름은 같아요. 손가락이 빨리 가야 하는 때는 언제인가요?" 느린 가락에서 건반을 서두르는 학생에게 "소리가 끝나는 것을 듣고 다음 음을 쳐요"라고 말한다. 빠른 가락에서 음을 빼먹으면 한 번 더 듣게 한다.`,
        '가락 듣기를 누르고 빠르기를 느끼며 들은 뒤, 같은 가락을 건반으로 따라 쳐요.', mel(),
        [
          K('아주 느리게 들려주는 가락이에요. 한 음씩 끝까지 듣고 따라 쳐 보세요.', ['도', '미', '솔', '미', '도'], { t: 56, x: { difficulty: 0.05 } }),
          K('빠르게 들려주는 가락이에요. 음이 짧게 이어져요. 듣고 따라 쳐 보세요.', ['도', '레', '미', '레', '도', '레', '미'], { t: 144, x: { difficulty: 0.2 } }),
          K('느리게 들려주는 내려오는 가락이에요. 듣고 따라 쳐 보세요.', ['솔', '파', '미', '레', '도'], { t: 52, x: { difficulty: 0.25, predict: { q: '같은 가락을 두 배 빠르게 치면 느낌이 어떨까요?', options: ['더 느긋해져요', '더 가볍고 바빠져요'], answer: 1 }, conclude: '음의 차례가 같아도 빠르기가 달라지면 느낌이 달라져요.' } }),
        ]),
      A(2, '빠르기에 따라 달라지는 느낌 나누기', 'mindmap',
        `"느리게 칠 때와 빠르게 칠 때 어떤 느낌이 드는지 카드에서 찾아 나눠 봐요." 카드를 읽고 몸으로 잠깐 흉내 내게 한다. '음 이름이 바뀌어요' 카드를 어느 쪽에 넣는 학생에게 "빠르기를 바꿔도 도는 도예요. 바뀌는 것은 무엇일까요?"라고 묻는다.`,
        '카드를 읽고, 느리게 칠 때와 빠르게 칠 때의 느낌으로 나누어요. 어느 쪽도 아닌 카드는 그대로 둬요.', cardsLv(),
        [
          SORT('가락을 느리게 칠 때와 빠르게 칠 때 드는 느낌으로 카드를 나누어 보세요.', '같은 가락', { '느리게 칠 때': ['느긋하고 차분해요', '졸린 걸음 같아요'], '빠르게 칠 때': ['총총 뛰어가는 것 같아요', '숨이 차게 달려요'] }, ['음 이름이 바뀌어요'], { difficulty: 0.1 }),
          SORT('걸음에 빗대어 빠르기를 나누어 보세요.', '걸음으로 말하기', { '느리게': ['산책하듯 천천히 걸어요', '달팽이처럼 기어요'], '빠르게': ['버스를 놓칠까 봐 뛰어요', '신나게 달려가요'] }, null, { difficulty: 0.15 }),
          SORT('들리는 모습을 보고 어느 빠르기인지 나누어 보세요.', '들리는 모습', { '느리게 쳤을 때': ['한 음 한 음이 또렷하게 들려요', '다음 음이 올 때까지 오래 기다려요'], '빠르게 쳤을 때': ['음들이 붙어서 이어 달려요', '가락이 금방 지나가요'] }, null, { difficulty: 0.25 }),
        ]),
    ],
    wt: `"오늘 같은 가락이 어떻게 달라졌나요?" 느낌을 한 문장으로 말하게 한다. 출구 2번에서 음이 달라졌다고 한 학생은 다음 시간 첫머리에 같은 세 음을 느리게·빠르게 두 번 치며 비교하게 한다.`,
    exit: [
      { type: 'tool', tool: 'keyboard', options: { from: '도', to: '높은도', melody: ['미', '솔', '미', '레', '도'], tempo: 60 }, prompt: '천천히 들려주는 가락을 듣고 건반으로 따라 쳐 보세요.', target: { notes: ['미', '솔', '미', '레', '도'] }, difficulty: 0.2 },
      { type: 'choice', prompt: '같은 가락을 더 빠르게 쳤어요. 무엇이 달라졌나요?', options: ['음 이름', '빠르기', '쓰인 건반'], answer: 1, difficulty: 0.15, explain: '음은 그대로이고 빠르기가 달라져서 느낌이 달라졌어요.' },
      { type: 'mood', prompt: '느린 가락과 빠른 가락 중 어느 쪽이 더 마음에 들었나요?' },
    ],
    wsTitle: '느리게와 빠르게',
    ws: [
      { type: 'figure', prompt: '선생님이 천천히 들려주는 가락을 듣고 빈칸에 계이름을 쓰세요.', tool: 'keyboard', wide: true, options: { from: '도', to: '높은도', printNames: true, printBoxes: 5 }, figures: [{ caption: '쓰고 나서 빠르게 쳐 보았나요? ( 네 · 아니요 )' }], answer: '도 미 솔 미 도 — 네' },
      { type: 'table', prompt: '느리게 칠 때와 빠르게 칠 때의 느낌을 한 가지씩 쓰세요.', columns: ['빠르기', '느낌'], cells: [['느리게', ''], ['빠르게', '']] },
      { type: 'choice', prompt: '맞는 말에 ○ 하세요.', options: ['빠르게 치면 음 이름이 바뀌어요', '같은 가락도 빠르기에 따라 느낌이 달라져요', '느리게 치면 다른 노래가 돼요'], answer: '같은 가락도 빠르기에 따라 느낌이 달라져요' },
      { type: 'short', prompt: '오늘 칠 때 느리게 치기와 빠르게 치기 중 어느 쪽이 더 어려웠는지 까닭과 함께 쓰세요.' },
    ],
    easyNote: '빠르기는 소리가 얼마나 빨리 지나가는지예요. 음 이름과는 다른 이야기예요.',
    easy: [
      { type: 'choice', prompt: '뛰어가는 것 같은 느낌은 어느 쪽일까요?', options: ['느리게', '빠르게'], answer: '빠르게' },
      { type: 'blank', prompt: '빈칸을 채우세요.', text: '같은 가락도 ___가 달라지면 느낌이 달라져요.', answer: '빠르기' },
      { type: 'short', prompt: '내가 좋아하는 빠르기를 쓰고 까닭을 한마디 쓰세요.' },
    ],
    diff: { easy: '가락을 듣는 동안 건반이 빛나고 느린 박(80)으로 들려줘요.', base: '계이름이 보이고 보통 빠르기로 들려줘요.', challenge: '계이름 없이 귀로 찾고 검은건반이 함께 나와요.' },
    notes: '자주 보이는 어려움: ① 빠르기가 달라지면 다른 가락이라 여긴다 → 도·레·미를 느리게·빠르게 두 번 쳐 같은 음임을 보인다. ② 빠르기와 소리 크기를 같은 것으로 말한다 → 오늘은 소리 크기는 그대로 두고 빠르기만 바꿔 들려준다. ③ 빠른 가락에서 음을 빼먹는다 → 듣기를 두 번 누르게 한다. 소리는 학생이 누를 때만 난다.',
  }));

  // ───────────────────────── 2차시 (연습) ─────────────────────────
  lessons.push(L(2, {
    s: S3, title: '여리게·세게·점점 세게 — 소리 크기 말과 기호 짝짓기',
    obj: '소리의 세기를 나타내는 말(여리게·세게·점점 세게·점점 여리게)과 기호를 짝지어 알 수 있다.',
    ill: 'a paper megaphone growing larger on one side and a tiny whisper bubble on the other with a ribbon of notes between them', txt: '여리게 세게', mot: ['cloud', 'hills', 'star', 'flower'],
    it: `"교실에서 속삭일 때와 운동장에서 부를 때 목소리는 무엇이 다른가요?" 속삭이는 소리와 크게 부르는 소리를 직접 내 보게 한 뒤 소리의 크고 작음을 셈여림이라고 이름 붙인다. "빠르기와 소리 크기는 같은 걸까요?" 하고 물어, 빠르게 속삭일 수도 있다는 것을 보인다.`,
    is: '속삭이는 소리와 크게 부르는 소리를 내 보고, 소리 크기를 나타내는 말을 알아봅시다.',
    acts: [
      A(1, '소리 크기 말과 기호 짝 짓기', 'story',
        `"p는 여리게, f는 세게예요. 점점 세게는 열린 입 모양 <, 점점 여리게는 닫히는 입 모양 >이에요." 칠판에 기호를 크게 그려 두고 카드를 이을 때 입 모양을 손으로 그려 보게 한다. 기호를 소리 크기가 아니라 빠르기로 읽는 학생에게 "이 기호는 소리가 커지는지 작아지는지를 말해요"라고 짚는다.`,
        '왼쪽 기호를 보고, 뜻이 맞는 말 카드를 이어요.', cardsLv(),
        [
          MATCH('기호와 뜻이 맞는 말을 이어 보세요.', [['p', '여리게'], ['f', '세게']], ['점점 세게'], { difficulty: 0.05 }),
          MATCH('입 모양 기호와 뜻이 맞는 말을 이어 보세요.', [['<', '점점 세게'], ['>', '점점 여리게']], ['세게'], { difficulty: 0.15 }),
          MATCH('네 기호와 말을 모두 이어 보세요.', [['f', '세게'], ['<', '점점 세게'], ['p', '여리게'], ['>', '점점 여리게']], null, { difficulty: 0.3, predict: { q: '< 모양은 소리가 어떻게 되라는 뜻일까요?', options: ['점점 커져요', '점점 작아져요'], answer: 0 }, conclude: '입이 열리는 < 는 점점 세게, 닫히는 > 는 점점 여리게예요.' }),
        ]),
      A(2, '소리 크기가 되풀이되는 무늬 찾기', 'pattern',
        `"여리게와 세게가 번갈아 나오는 무늬예요. 소리 내어 읽어 보면 규칙이 들려요." 칠판에 무늬를 적고 목소리 크기로 읽게 한다. 빈칸을 앞 조각과 똑같이 채우는 학생에게 "처음부터 읽어 보아요. 어느 크기가 이어서 와야 하나요?"라고 묻는다.`,
        '무늬를 소리 크기에 맞게 읽어 보고, 빈칸에 알맞은 조각을 넣어요.', patLv(),
        [
          { prompt: '여리게와 세게가 번갈아 나와요. 빈칸을 채워 보세요.', toolOptions: { seq: ['여리게', '세게', '여리게', '세게', '여리게', null], palette: ['여리게', '세게', '점점 세게'], perRow: 6 }, target: { fill: ['세게'] }, difficulty: 0.1 },
          { prompt: '여리게 둘, 세게 하나가 되풀이돼요. 빈칸을 채워 보세요.', toolOptions: { seq: ['여리게', '여리게', '세게', '여리게', null, '세게', null, '여리게'], palette: ['여리게', '세게', '점점 세게'] }, target: { fill: ['여리게', '여리게'] }, difficulty: 0.25 },
          { prompt: '점점 세게 뒤에는 늘 세게가 와요. 규칙에 맞지 않는 조각을 눌러 보세요.', toolOptions: { mode: 'odd', seq: ['점점 세게', '세게', '점점 세게', '세게', '점점 세게', '여리게', '점점 세게', '세게'], perRow: 8 }, target: { odd: 5 }, difficulty: 0.3 },
        ]),
    ],
    wt: `"p, f, <, > 가운데 오늘 새로 알게 된 기호를 하나 골라 뜻을 말해 볼까요?" 입 모양으로 설명하게 한다. 출구 2번을 틀린 학생에게는 < 를 그린 손동작을 다시 하게 한다.`,
    exit: [
      { type: 'tool', tool: 'story', options: { mode: 'match', slots: [{ id: 'x1', label: '>' }, { id: 'x2', label: 'p' }], cards: ['여리게', '점점 여리게', '점점 세게'] }, prompt: '기호와 뜻이 맞는 말을 이어 보세요.', target: { match: { x1: '점점 여리게', x2: '여리게' } }, difficulty: 0.2 },
      { type: 'choice', prompt: '‘점점 세게’를 나타내는 모양은 어느 것일까요?', options: ['입이 열리는 모양 <', '입이 닫히는 모양 >', '글자 p'], answer: 0, difficulty: 0.15, explain: '소리가 커지는 점점 세게는 입이 열리는 < 로 나타내요.' },
      { type: 'mood', prompt: '소리를 크게도 작게도 내 보니 어땠나요?' },
    ],
    wsTitle: '소리 크기 기호',
    ws: [
      { type: 'table', prompt: '기호의 뜻을 쓰세요.', columns: ['기호', '뜻'], cells: [['p', ''], ['f', ''], ['<', ''], ['>', '']] },
      { type: 'figure', prompt: '무늬의 규칙을 찾아 빈칸에 알맞은 말을 쓰세요.', tool: 'pattern', wide: true, figures: [{ options: { seq: ['여리게', '세게', '여리게', '세게', null, '세게', '여리게', null] }, caption: '' }], answer: '여리게, 세게' },
      { type: 'choice', prompt: '소리가 점점 작아지는 기호에 ○ 하세요.', options: ['<', '>', 'f'], answer: '>' },
      { type: 'short', prompt: '여리게 부르면 좋은 때와 세게 부르면 좋은 때를 한 가지씩 쓰세요.' },
    ],
    easyNote: 'p는 여리게(작게), f는 세게(크게)예요. 입이 열리면(<) 점점 커지고, 닫히면(>) 점점 작아져요.',
    easy: [
      { type: 'choice', prompt: 'f의 뜻은 무엇인가요?', options: ['여리게', '세게'], answer: '세게' },
      { type: 'blank', prompt: '빈칸을 채우세요.', text: '입이 열리는 모양 < 는 점점 ___라는 뜻이에요.', answer: '세게' },
      { type: 'short', prompt: '내가 낸 가장 작은 소리를 어떤 말로 나타낼 수 있는지 쓰세요.' },
    ],
    diff: { easy: '맞게 이은 카드에 초록 테두리가 보이고 무늬가 한 줄에 다섯 조각씩 놓여요.', base: '카드를 스스로 확인해요.', challenge: '틀린 칸을 알려 주지 않고 무늬 조각이 한 줄에 여덟 개 나와요.' },
    notes: '자주 보이는 어려움: ① 세게를 빠르게로 받아들인다 → 같은 소리를 크게·작게, 빠르게·느리게 네 가지로 내 보인다. ② <, > 를 부등호로 읽는다 → 입 모양 그림을 곁에 그린다. ③ f를 한 글자로만 외운다 → 세게 부르는 때를 생활에서 한 가지 말하게 한다.',
  }));

  // ───────────────────────── 3차시 (확장) ─────────────────────────
  lessons.push(L(3, {
    s: S3, title: '느리게 → 보통 빠르게 → 빠르게, 소리와 장면을 순서대로 놓기',
    obj: '빠르기를 느리게·보통 빠르게·빠르게로 구별하고, 장면과 어울리는 빠르기를 고를 수 있다.',
    ill: 'a paper tortoise, a walking child and a galloping horse lined up from left to right across a hill with a musical staff above them', txt: '느리게 → 빠르게', mot: ['sun', 'hills', 'tree', 'bird'],
    it: `"거북이, 걸어가는 나, 달리는 말을 빠른 순서로 놓아 볼까요?" 손뼉으로 세 걸음의 빠르기를 쳐 보이고 학생이 따라 치게 한다. "소리의 빠르기에도 이런 이름이 있어요." 하고 느리게·보통 빠르게·빠르게를 알려 준다. 보통 빠르게를 느린 것의 한 종류로 여기는 학생에게는 걷기와 기어가기를 견주어 보인다.`,
    is: '거북이와 말의 걸음을 박수로 나타내 보고, 소리의 빠르기에 이름을 붙여 봅시다.',
    acts: [
      A(1, '빠르기 순서대로 장면 놓기', 'story',
        `"느린 것부터 빠른 것까지 순서대로 놓아요. 먼저 손뼉으로 각 장면의 빠르기를 쳐 보세요." 칸 이름은 처음·가운데·끝이다. 두 장면이 비슷해 보여 순서를 바꾸는 학생에게 "한 걸음에 얼마나 걸리는지 견주어 볼까요?"라고 묻는다.`,
        '카드를 읽고 몸으로 흉내 낸 뒤, 느린 것부터 빠른 순서로 놓아요.', cardsLv(),
        [
          ORDER('느린 것부터 빠른 것까지 순서대로 놓아 보세요.', ['거북이가 기어요', '아이가 걸어요', '말이 달려요'], { difficulty: 0.1 }),
          ORDER('노래를 부르는 때를 느린 것부터 순서대로 놓아 보세요.', ['잠든 아기를 안고 부르는 노래', '소풍 길을 걸으며 부르는 노래', '운동회에서 응원하는 노래'], { difficulty: 0.2 }),
          ORDER('빠르기가 점점 빨라지는 차례로 놓아 보세요.', ['느리게 걷는 할머니', '보통 걸음의 나', '신나게 뛰는 동생', '결승선으로 달리는 선수'], { difficulty: 0.35, predict: { q: '네 장면의 빠르기는 모두 달라야 할까요?', options: ['네, 차례가 있어요', '아니요, 모두 같아요'], answer: 0 }, conclude: '장면마다 빠르기가 달라 차례를 세울 수 있어요.' }),
        ], 'order'),
      A(2, '리듬 블록을 놓고 빠르기를 바꿔 듣기', 'keyboard',
        `"같은 리듬을 천천히 한 번, 보통으로 한 번 들어 보고 블록을 놓아요." 4분음표는 한 박이라 빠르기가 달라도 박 수는 같다는 것을 짚는다. 빠르게 들리면 블록을 더 많이 놓아야 한다고 여기는 학생에게 "블록의 수는 그대로예요. 지나가는 시간이 달라졌을 뿐이에요"라고 말한다.`,
        '리듬 듣기를 누르고 들은 리듬을 블록으로 놓아요. 빠르기가 달라도 블록은 같아요.', rhy(4, 2),
        [
          R('느리게 들려주는 리듬이에요. 듣고 블록으로 놓아 보세요.', ['q', 'q', 'h', 'q', 'q', 'h'], { t: 60, x: { difficulty: 0.1 } }),
          R('같은 리듬을 보통 빠르게 들려줘요. 듣고 블록으로 놓아 보세요.', ['q', 'q', 'q', 'q', 'h', 'q', 'q'], { t: 100, x: { difficulty: 0.2 } }),
          R('빠르게 들려주는 리듬이에요. 쉼표가 숨어 있어요. 듣고 블록으로 놓아 보세요.', ['q', 'q', 'qr', 'q', 'q', 'q', 'q', 'qr'], { t: 132, x: { difficulty: 0.3, reveal: 'after-check', conclude: '빠르기가 달라도 박의 수와 블록은 그대로예요.' } }),
        ]),
    ],
    wt: `"오늘 배운 빠르기 이름 세 가지를 순서대로 말해 볼까요?" 느리게·보통 빠르게·빠르게를 손으로 거북이·사람·말 높이에 놓아 보게 한다. 출구 2번을 틀린 학생은 장면 카드를 다시 몸으로 흉내 내어 본다.`,
    exit: [
      { type: 'tool', tool: 'story', options: { mode: 'order', cards: ['걸어가는 나', '달려가는 개', '기어가는 달팽이'] }, prompt: '느린 것부터 빠른 순서대로 놓아 보세요.', target: { order: ['기어가는 달팽이', '걸어가는 나', '달려가는 개'] }, difficulty: 0.15 },
      { type: 'choice', prompt: '잠든 아기에게 불러 주는 노래에 어울리는 빠르기는 어느 것일까요?', options: ['느리게', '아주 빠르게', '빠르기는 상관없어요'], answer: 0, difficulty: 0.2, explain: '아기를 재울 때는 느리고 차분한 빠르기가 어울려요.' },
      { type: 'mood', prompt: '내 걸음으로 빠르기를 나타내 보니 어땠나요?' },
    ],
    wsTitle: '빠르기 이름과 장면',
    ws: [
      { type: 'table', prompt: '장면을 읽고 알맞은 빠르기를 쓰세요(느리게·보통 빠르게·빠르게).', columns: ['장면', '빠르기'], cells: [['잠든 동생에게 불러 주는 노래', ''], ['학교에 걸어가며 흥얼거리는 노래', ''], ['술래잡기 하며 부르는 노래', '']] },
      { type: 'figure', prompt: '리듬 블록을 보고 마디마다 몇 박인지 쓰세요.', tool: 'keyboard', wide: true, options: { mode: 'rhythm', meter: 4, measures: 2 }, figures: [{ state: { rhythm: ['q', 'q', 'h', 'h', 'q', 'q'] }, caption: '첫째 마디 ___박, 둘째 마디 ___박' }], answer: '첫째 마디 4박, 둘째 마디 4박' },
      { type: 'choice', prompt: '같은 리듬을 더 빠르게 쳤어요. 바뀌지 않는 것에 ○ 하세요.', options: ['박의 수', '지나가는 시간', '듣는 느낌'], answer: '박의 수' },
      { type: 'short', prompt: '내가 부를 때 느리게 하고 싶은 노래 장면을 한 가지 쓰세요.' },
    ],
    easyNote: '빠르기는 느리게 → 보통 빠르게 → 빠르게 순서로 빨라져요.',
    easy: [
      { type: 'choice', prompt: '가장 빠른 것은 어느 것일까요?', options: ['기어가는 달팽이', '걷는 나', '달리는 말'], answer: '달리는 말' },
      { type: 'blank', prompt: '빈칸을 채우세요.', text: '느리게 → ___ → 빠르게', answer: '보통 빠르게' },
      { type: 'short', prompt: '느리게 부르면 좋은 노래를 하나 떠올려 쓰세요.' },
    ],
    diff: { easy: '카드를 놓을 때 맞는 자리에 초록 테두리가 보이고 마디마다 박 수가 보여요.', base: '카드를 놓은 뒤 스스로 확인하고 박 수를 세어요.', challenge: '카드가 네 장이고 틀린 마디를 알려 주지 않아요.' },
    notes: '자주 보이는 어려움: ① 빠르기가 달라지면 블록 수도 달라진다고 여긴다 → 같은 리듬을 두 빠르기로 들려주며 블록 수를 센다. ② 보통 빠르게를 따로 구별하지 못한다 → 걷기 속도로 박을 치며 기준을 잡는다. ③ 빠르기와 소리 크기를 섞는다 → 지난 시간 기호를 다시 보이고 오늘은 빠르기만 이야기한다.',
  }));

  // ───────────────────────── 4차시 (확장) ─────────────────────────
  lessons.push(L(4, {
    s: S3, title: '빠르기나 셈여림을 하나 정해 네 마디 소리 짓기',
    obj: '빠르기와 셈여림 가운데 하나를 정해 그 요소가 드러나는 네 마디 소리를 짓고 연주할 수 있다.',
    ill: 'a child arranging four paper cards shaped like measures on a table, each with notes growing bigger from left to right', txt: '네 마디 소리', mot: ['sun', 'cloud', 'hills', 'flower'],
    it: `"오늘은 내가 소리를 만들어요. 그런데 길게 만든다고 좋은 작품일까요?" 네 마디도 충분하다고 말하고, 살리고 싶은 요소를 하나 먼저 정한다고 알린다. 시연 단추로 점점 빨라지는 네 마디를 들려주고 "무엇을 살린 소리일까요?"라고 묻는다. 요소가 없이 음만 많은 가락을 좋다고 하는 학생에게 "듣는 사람이 무엇을 느낄 수 있을지 생각해 볼까요?"라고 되묻는다.`,
    is: '빠르기나 셈여림 가운데 살리고 싶은 것을 하나 정해, 네 마디 길이의 소리를 만들어 봅시다.',
    demo: { tool: 'keyboard', options: { mode: 'rhythm', meter: 2, measures: 4 }, sequence: [{ rhythm: ['q', 'q', 'q', 'q', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'] }] },
    acts: [
      A(1, '살릴 요소와 방법 정하기', 'mindmap',
        `"느리게 시작해 점점 빨라지게 하면 빠르기가 드러나요. 여리게 시작해 점점 세게 하면 셈여림이 드러나요." 카드를 읽고 어느 요소를 살린 방법인지 나누게 한다. 마디마다 빠르기와 셈여림을 모두 바꾸려는 학생에게 "이번엔 하나만 정해 뚜렷하게 만들어 봐요"라고 말한다.`,
        '아이디어 카드를 읽고, 빠르기를 살리는 방법과 셈여림을 살리는 방법으로 나누어요.', cardsLv(),
        [
          SORT('아이디어 카드를 살리는 요소에 따라 나누어 보세요.', '네 마디 소리', { '빠르기를 살려요': ['처음엔 느리게, 마지막엔 빠르게', '마디마다 점점 빨라지게'], '셈여림을 살려요': ['첫 마디는 여리게, 끝 마디는 세게', '가운데에서 갑자기 세게'] }, null, { difficulty: 0.1 }),
          SORT('방법을 읽고 어느 요소가 드러나는지 나누어 보세요.', '요소 고르기', { '빠르기': ['박수를 천천히 치다 빠르게 쳐요', '한 음을 오래 끌다 짧게 끊어요'], '셈여림': ['손바닥을 살살 대다 세게 쳐요', '목소리를 점점 키워요'] }, null, { difficulty: 0.2 }),
          SORT('네 마디 소리의 아이디어를 요소에 따라 나누어 보세요. 요소가 드러나지 않는 카드는 두어요.', '요소 살리기', { '빠르기를 살려요': ['마지막 마디에서 점점 느려져요'], '셈여림을 살려요': ['둘째 마디에서 점점 세어져요'] }, ['음을 많이 넣어 길게 만들어요'], { difficulty: 0.3, predict: { q: '음을 많이 넣어 길게 만들면 요소가 더 잘 드러날까요?', options: ['네, 더 잘 드러나요', '아니요, 요소와는 상관없어요'], answer: 1 }, conclude: '길게 만든다고 요소가 드러나지 않아요. 정한 요소를 뚜렷하게 하는 것이 중요해요.' }),
        ]),
      A(2, '네 마디 가락 짓고 연주하기', 'keyboard',
        `"도에서 시작해 도로 끝나는 가락을 지어 봐요. 지은 뒤 정한 요소가 들리는지 두 번 쳐서 확인해요." 요소가 드러나지 않으면 마지막 마디의 빠르기나 세기를 바꾸어 다시 쳐 보게 한다. 한 번 만든 것을 고치지 않으려는 학생에게 "고치면 더 좋아질 수 있어요"라고 격려한다.`,
        '정한 요소가 드러나도록 가락을 짓고, 두 번 쳐 본 뒤 점검 목록을 표시해요.', mel(),
        [
          CP('도로 시작해 도로 끝나는 여덟 음 가락을 지어요. 음이 차례로 움직이게 해요.', { length: 8, startOn: '도', endOn: '도' }, ['정한 요소를 하나 정했어요', '지은 가락을 두 번 쳐 보았어요'], { x: { difficulty: 0.2 } }),
          CP('도·미·솔 세 음만 써서 여섯 음 가락을 지어요. 점점 빨리 치도록 해요.', { length: 6, only: ['도', '미', '솔'] }, ['점점 빨라지는 것이 귀로 들려요', '마지막 음에서 멈추었어요'], { x: { difficulty: 0.25 } }),
          R('네 마디 박을 맞추어 리듬을 지어요. 2분음표를 꼭 넣어요.', null, { x: { toolOptions: { mode: 'rhythm', meter: 2, measures: 4 }, target: { beats: true, use: ['h'] }, difficulty: 0.3, reveal: 'after-check', conclude: '마디마다 박 수를 맞추면 네 마디 소리가 한 덩어리로 들려요.' } }),
          SK('지은 소리를 모둠에게 들려주고 해낸 것을 표시해요.', ['정한 요소를 모둠에게 먼저 말해 주었어요', '친구들이 그 요소를 들었다고 말했어요', '더 뚜렷하게 바꿀 곳을 하나 찾았어요'], { x: { difficulty: 0.1 } }),
        ]),
    ],
    wt: `"내가 살리려던 요소는 무엇이었고, 어느 마디에서 가장 잘 드러났나요?" 요소와 마디 번호를 함께 말하게 한다. 출구 2번에서 '길게 만들었으니까'를 고른 학생에게는 요소가 드러난 마디를 다시 찾아보게 한다.`,
    exit: [
      { type: 'tool', tool: 'keyboard', options: { from: '도', to: '높은도', mode: 'melody' }, prompt: '미로 시작하고 미로 끝나는 다섯 음 가락을 지어 보세요.', target: { compose: { length: 5, startOn: '미', endOn: '미' } }, difficulty: 0.2 },
      { type: 'choice', prompt: '내 소리가 잘 만들어졌다고 말할 수 있는 까닭은 무엇일까요?', options: ['길게 만들었으니까', '정한 요소가 들리게 만들었으니까', '음을 많이 쳤으니까'], answer: 1, difficulty: 0.2, explain: '정한 요소가 듣는 사람에게 들릴 때 좋은 소리라고 할 수 있어요.' },
      { type: 'mood', prompt: '내가 만든 소리를 들려주니 어땠나요?' },
    ],
    wsTitle: '네 마디 소리 설계도',
    ws: [
      { type: 'table', prompt: '네 마디 소리의 설계도를 쓰세요(빠르기: 느리게·보통·빠르게, 셈여림: 여리게·세게).', columns: ['마디', '빠르기', '셈여림'], cells: [['1', '', ''], ['2', '', ''], ['3', '', ''], ['4', '', '']] },
      { type: 'figure', prompt: '리듬을 보고 마디마다 몇 박인지 쓰세요.', tool: 'keyboard', wide: true, options: { mode: 'rhythm', meter: 2, measures: 4 }, figures: [{ state: { rhythm: ['q', 'q', 'h', 'q', 'q', 'q', 'q'] }, caption: '첫째 마디 ___박, 셋째 마디 ___박' }], answer: '첫째 마디 2박, 셋째 마디 2박' },
      { type: 'choice', prompt: '살리려는 요소를 정하는 까닭에 ○ 하세요.', options: ['듣는 사람이 그 요소를 느끼게 하려고', '음을 더 많이 넣으려고', '다른 사람과 똑같이 만들려고'], answer: '듣는 사람이 그 요소를 느끼게 하려고' },
      { type: 'short', prompt: '내가 살리려는 요소와, 그것을 드러내려고 바꾼 마디를 쓰세요.' },
    ],
    easyNote: '네 마디 소리에서는 요소를 하나만 정해요. 빠르기를 정했으면 처음과 끝의 빠르기를 달리해요.',
    easy: [
      { type: 'choice', prompt: '점점 빨라지는 소리는 어느 요소를 살린 걸까요?', options: ['빠르기', '셈여림'], answer: '빠르기' },
      { type: 'blank', prompt: '빈칸을 채우세요.', text: '네 마디 소리에서는 살리려는 요소를 ___ 정해요.', answer: '하나' },
      { type: 'short', prompt: '내가 정한 요소를 쓰세요.' },
    ],
    diff: { easy: '카드를 놓을 때 맞는 가지에 초록 테두리가 보이고 가락이 들리는 동안 건반이 빛나요.', base: '카드와 가락을 스스로 확인해요.', challenge: '계이름 없이 짓고 박 수를 스스로 세요.' },
    notes: '자주 보이는 어려움: ① 요소를 둘 이상 섞어 어느 것도 뚜렷하지 않다 → 하나만 정해 마디마다 바꾼다. ② 길이가 길수록 좋다고 여긴다 → 네 마디면 충분함을 보이고 한 요소만 살린 짧은 예를 든다. ③ 지은 뒤 한 번만 치고 만다 → 두 번째는 귀를 기울여 요소가 들리는지 찾게 한다.',
  }));


  // ───────────────────────── 5차시 (핵심) ─────────────────────────
  lessons.push(L(5, {
    s: S4, title: '빗소리를 목소리·손·물건으로 흉내 내고 빗방울 가락 짓기',
    obj: '빗소리를 목소리·손·물건으로 흉내 내는 방법을 고르고, 빗방울 소리를 닮은 짧은 가락을 지을 수 있다.',
    ill: 'a paper window with raindrops made of tiny notes sliding down while a child taps a desk with a pencil', txt: '톡톡 후두둑', mot: ['cloud', 'hills', 'flower', 'tree'],
    it: `"창밖에 비가 와요. 눈을 감고 빗소리를 떠올려 볼까요? 어떤 소리가 나나요?" 후두둑, 톡톡, 주르륵 같은 말이 나오면 칠판에 적는다. "그 소리를 우리 몸이나 교실 물건으로 흉내 낼 수 있을까요?" 하고 묻는다. 시끄러운 소리는 음악 재료가 못 된다고 여기는 학생에게 "내 손으로 소리를 고르고 짜면 음악이 돼요"라고 말한다.`,
    is: '빗소리를 떠올리며 후두둑, 톡톡 같은 말을 말해 보고, 그 소리를 흉내 내는 방법을 찾아봅시다.',
    acts: [
      A(1, '소리를 흉내 내는 방법 나누기', 'mindmap',
        `"같은 소리라도 목소리로, 손과 몸으로, 물건으로 낼 수 있어요. 카드를 읽고 직접 해 본 뒤 나눠 봐요." 소리를 내 볼 때는 책상을 세게 치지 않도록 이르고 작은 소리로만 해 본다. 모두 한꺼번에 소리를 내는 모둠에게 "한 사람씩 낼 때 어떤 소리가 나는지 들어 볼까요?"라고 말한다.`,
        '카드를 읽고 어떻게 소리를 내는지에 따라 목소리·손과 몸·물건으로 나누어요.', cardsLv(),
        [
          SORT('빗소리를 흉내 내는 방법을 어떻게 소리 내는지에 따라 나누어 보세요.', '빗소리 흉내', { '목소리로': ['입술을 튕겨 후두둑'], '손과 몸으로': ['손가락으로 책상을 톡톡'], '물건으로': ['연필통을 살살 흔들어 사르르'] }, null, { difficulty: 0.1 }),
          SORT('바람 소리를 흉내 내는 방법을 나누어 보세요. 소리를 내지 않는 카드는 두어요.', '바람 소리 흉내', { '목소리로': ['입으로 후— 길게 불기'], '손과 몸으로': ['두 손을 비벼 스스스'], '물건으로': ['종이를 천천히 흔들기'] }, ['아무 소리도 내지 않기'], { difficulty: 0.2 }),
          SORT('발소리를 흉내 내는 방법을 나누어 보세요.', '발소리 흉내', { '목소리로': ['입으로 또각또각'], '손과 몸으로': ['손바닥으로 무릎 치기'], '물건으로': ['막대로 책상 다리 살살 두드리기'] }, null, { difficulty: 0.25 }),
        ]),
      A(2, '빗방울 가락 짓기', 'keyboard',
        `"빗방울은 높고 짧게 떨어지는 소리예요. 건반 오른쪽 높은 음들로 빗방울을 만들어 봐요." 지은 가락을 쳐 보며 소리가 하나씩 떨어지는지 듣게 한다. 낮은 음을 섞어 천둥처럼 되는 학생에게 "빗방울이라면 어떤 높이의 소리가 어울릴까요?"라고 묻는다.`,
        '높은 음 건반으로 빗방울 가락을 짓고, 들려준 가락도 따라 쳐 보아요.', mel(),
        [
          CP('라·시·높은도만 써서 여섯 음 빗방울 가락을 지어요.', { length: 6, only: ['라', '시', '높은도'] }, ['소리가 하나씩 떨어지는 것 같아요', '지은 가락을 두 번 쳐 보았어요'], { x: { difficulty: 0.15 } }),
          K('빗방울이 떨어지는 가락을 듣고 따라 쳐 보세요.', ['높은도', '시', '높은도', '라', '솔'], { t: 120, x: { difficulty: 0.2 } }),
          CP('솔로 끝나는 여덟 음 빗방울 가락을 지어요. 높은 음 위주로 써요.', { length: 8, endOn: '솔', only: ['솔', '라', '시', '높은도'] }, ['빗방울처럼 짧게 이어졌어요'], { x: { difficulty: 0.3 } }),
          SK('지은 빗방울 가락을 모둠에게 들려주고 해낸 것을 표시해요.', ['모둠이 빗소리 같다고 말했어요', '소리가 서로 겹치지 않게 쳤어요'], { x: { difficulty: 0.1 } }),
        ]),
    ],
    wt: `"오늘 빗소리를 어떻게 흉내 냈나요? 목소리와 물건 중 어느 것이 더 비슷했나요?" 까닭을 한 문장으로 말하게 한다. 출구 2번을 틀린 학생에게는 빗방울과 천둥을 소리 내어 비교하게 한다.`,
    exit: [
      { type: 'tool', tool: 'mindmap', options: { topic: '눈 내리는 소리', slots: ['목소리로', '물건으로'], cards: ['입으로 쉬— 조용히 불기', '솜뭉치를 책상에 살살 굴리기'] }, prompt: '눈 오는 소리를 흉내 내는 방법을 알맞은 가지에 넣어 보세요.', target: { sort: { 목소리로: ['입으로 쉬— 조용히 불기'], 물건으로: ['솜뭉치를 책상에 살살 굴리기'] } }, difficulty: 0.15 },
      { type: 'choice', prompt: '빗방울 소리를 건반으로 나타내려면 어떤 음이 어울릴까요?', options: ['높고 짧은 음', '낮고 긴 음', '아주 큰 소리'], answer: 0, difficulty: 0.15, explain: '빗방울은 가볍고 짧게 떨어지니 높고 짧은 음이 어울려요.' },
      { type: 'mood', prompt: '소리를 흉내 내는 활동이 어땠나요?' },
    ],
    wsTitle: '비 오는 소리 모으기',
    ws: [
      { type: 'table', prompt: '빗소리와 닮은 소리를 방법별로 하나씩 쓰세요.', columns: ['방법', '내가 낸 소리'], cells: [['목소리로', ''], ['손과 몸으로', ''], ['물건으로', '']] },
      { type: 'figure', prompt: '선생님이 들려주는 빗방울 가락을 듣고 빈칸에 계이름을 쓰세요.', tool: 'keyboard', wide: true, options: { from: '도', to: '높은도', printNames: true, printBoxes: 5 }, figures: [{ caption: '높은 음이었나요, 낮은 음이었나요? ( 높은 · 낮은 )' }], answer: '시 높은도 라 시 높은도 — 높은' },
      { type: 'choice', prompt: '빗소리를 흉내 내는 방법에 ○ 하세요.', options: ['손가락으로 책상을 톡톡 치기', '교실을 크게 뛰어다니기', '아무 소리도 내지 않기'], answer: '손가락으로 책상을 톡톡 치기' },
      { type: 'short', prompt: '내가 모은 소리 중 가장 비슷했던 것과 그 까닭을 쓰세요.' },
    ],
    easyNote: '생활 속 소리는 목소리, 손과 몸, 물건으로 흉내 낼 수 있어요.',
    easy: [
      { type: 'choice', prompt: '손가락으로 책상을 톡톡 치는 것은 어느 방법일까요?', options: ['목소리로', '손과 몸으로'], answer: '손과 몸으로' },
      { type: 'blank', prompt: '빈칸을 채우세요.', text: '빗방울 가락에는 ___ 음이 어울려요.', answer: '높은' },
      { type: 'short', prompt: '오늘 흉내 낸 소리 하나를 쓰세요.' },
    ],
    diff: { easy: '맞는 가지에 넣으면 초록 테두리가 보이고 가락을 듣는 동안 건반이 빛나요.', base: '카드와 가락을 스스로 확인해요.', challenge: '계이름 없이 가락을 짓고 검은건반도 쓸 수 있어요.' },
    notes: '자주 보이는 어려움: ① 소리를 크게만 내려 한다 → 빗방울은 작고 가벼운 소리임을 보이고 작은 소리로 해 보게 한다. ② 음이 겹쳐 빗방울처럼 들리지 않는다 → 한 음씩 건반에서 손을 떼며 친다. ③ 흉내가 소음이라 여겨 소극적이다 → 소리를 고르고 짜면 음악이 된다고 말해 준다. 소리는 학생이 누를 때만 난다.',
  }));

  // ───────────────────────── 6차시 (연습) ─────────────────────────
  lessons.push(L(6, {
    s: S4, title: '똑딱·쿵짝 되풀이 소리 무늬로 시계와 발소리 만들기',
    obj: '생활 속 되풀이되는 소리(시계·발소리)를 무늬와 리듬 블록으로 나타내고 규칙을 찾아 소리를 이어 만들 수 있다.',
    ill: 'a paper wall clock with a swinging pendulum and a pair of paper shoes stepping on matching stepping stones', txt: '똑딱 쿵짝 똑딱', mot: ['sun', 'hills', 'house', 'flower'],
    it: `"시계 소리는 어떻게 들리나요? 똑딱똑딱, 같은 소리가 되풀이되지요." 책상을 두드려 똑딱을 흉내 내게 한다. "발소리도 쿵짝쿵짝 되풀이될 수 있어요. 그렇다면 소리를 이어 가는 규칙은 어떻게 찾을까요?" 소리를 하나하나 듣고 적어야 규칙이 보인다고 안내한다. 규칙 없이 아무 소리나 잇는 학생에게는 앞의 소리를 읽어 주며 다음 소리를 떠올리게 한다.`,
    is: '시계와 발소리를 흉내 내 보고, 되풀이되는 소리의 규칙을 찾아봅시다.',
    acts: [
      A(1, '소리 무늬의 규칙 찾아 빈칸 채우기', 'pattern',
        `"소리를 입으로 읽으며 되풀이되는 묶음을 찾아봐요. 한 묶음이 몇 개인가요?" 무늬를 소리 내어 읽으며 손뼉으로 박을 치게 한다. 앞의 한 조각만 보고 같은 소리를 넣는 학생에게 "처음부터 묶음을 세어 보아요"라고 말한다.`,
        '소리 무늬를 읽고 되풀이되는 규칙을 찾은 뒤, 빈칸에 알맞은 소리를 넣어요.', patLv(),
        [
          { prompt: '시계 소리가 똑딱똑딱 되풀이돼요. 빈칸을 채워 보세요.', toolOptions: { seq: ['똑', '딱', '똑', '딱', '똑', null], palette: ['똑', '딱', '쿵'], perRow: 6 }, target: { fill: ['딱'] }, difficulty: 0.1 },
          { prompt: '발소리가 쿵 짝 짝으로 되풀이돼요. 빈칸을 채워 보세요.', toolOptions: { seq: ['쿵', '짝', '짝', '쿵', '짝', null, '쿵', null, '짝'], palette: ['쿵', '짝', '똑'] }, target: { fill: ['짝', '짝'] }, difficulty: 0.2 },
          { prompt: '장작 타는 소리를 적은 무늬예요. 어떤 규칙이 보이나요?', toolOptions: { mode: 'rule', seq: ['톡', '톡', '타닥', '톡', '톡', '타닥', '톡', '톡', '타닥'], choices: ['톡 톡 타닥이 되풀이돼요', '톡과 타닥이 번갈아 와요', '모두 같은 소리예요'], why: ['', '톡이 두 번 이어진 뒤 타닥이 와요.', '소리가 두 가지로 나뉘어 있어요.'] }, target: { pick: 0 }, difficulty: 0.3 },
        ]),
      A(2, '시계와 발소리 리듬 블록 놓기', 'keyboard',
        `"똑딱은 4분음표 두 개씩, 발소리가 잠시 멈추는 곳은 쉼표예요." 소리를 듣고 한 박마다 손뼉을 치며 블록을 놓게 한다. 쉼표에서 소리를 내는 학생에게 "쉼표 자리에서는 손을 멈추고 박만 세요"라고 짚는다.`,
        '리듬 듣기를 누르고 들은 소리를 블록으로 놓아요. 쉼표 자리를 조심해요.', rhy(4, 2),
        [
          R('시계 소리를 듣고 블록으로 놓아 보세요. 같은 길이의 소리가 이어져요.', ['q', 'q', 'q', 'q', 'q', 'q', 'q', 'q'], { t: 100, x: { difficulty: 0.1 } }),
          R('발소리가 멈췄다 이어지는 소리예요. 듣고 블록으로 놓아 보세요.', ['q', 'q', 'qr', 'q', 'q', 'q', 'qr', 'q'], { t: 92, x: { difficulty: 0.25 } }),
          R('물방울이 빠르게 떨어지는 소리예요. 짧은 소리가 섞여 있어요. 듣고 블록으로 놓아 보세요.', ['e', 'e', 'q', 'e', 'e', 'q', 'q', 'q'], { t: 88, x: { difficulty: 0.3, predict: { q: '짧은 소리 두 개(8분음표 둘)는 몇 박일까요?', options: ['한 박', '두 박'], answer: 0 }, conclude: '8분음표 두 개가 4분음표 한 개와 같은 한 박이라서 빠른 소리를 만들 수 있어요.' } }),
        ]),
    ],
    wt: `"되풀이되는 소리를 찾으면 다음 소리를 알 수 있어요. 오늘 어떤 규칙을 찾았나요?" 규칙을 소리 내어 읽게 한다. 출구 1번을 틀린 학생은 앞에서부터 묶음을 소리 내어 읽으며 다시 놓는다.`,
    exit: [
      { type: 'tool', tool: 'pattern', options: { seq: ['똑', '똑', '딱', '똑', '똑', null], palette: ['똑', '딱', '쿵'], perRow: 6 }, prompt: '소리가 되풀이돼요. 빈칸에 알맞은 소리를 넣으세요.', target: { fill: ['딱'] }, difficulty: 0.15 },
      { type: 'choice', prompt: '되풀이되는 소리의 규칙을 찾는 좋은 방법은 무엇일까요?', options: ['처음부터 소리를 읽으며 묶음을 세요', '마지막 소리만 보고 정해요', '소리를 바꾸지 않고 한 번만 들어요'], answer: 0, difficulty: 0.2, explain: '묶음을 처음부터 세어야 규칙을 찾을 수 있어요.' },
      { type: 'mood', prompt: '되풀이 소리를 만들어 보니 어땠나요?' },
    ],
    wsTitle: '되풀이되는 소리',
    ws: [
      { type: 'figure', prompt: '소리 무늬의 규칙을 찾아 빈칸에 알맞은 소리를 쓰세요.', tool: 'pattern', wide: true, figures: [{ options: { seq: ['똑', '딱', '똑', '딱', null, '딱', '똑', null] }, caption: '' }], answer: '똑, 딱' },
      { type: 'figure', prompt: '리듬을 보고 첫째 마디와 둘째 마디의 박 수를 쓰세요.', tool: 'keyboard', wide: true, options: { mode: 'rhythm', meter: 4, measures: 2 }, figures: [{ state: { rhythm: ['q', 'q', 'qr', 'q', 'h', 'q', 'q'] }, caption: '첫째 마디 ___박, 둘째 마디 ___박' }], answer: '첫째 마디 4박, 둘째 마디 4박' },
      { type: 'choice', prompt: '쉼표 자리에서 하는 일에 ○ 하세요.', options: ['소리를 내지 않고 박을 세요', '소리를 두 번 내요', '다음 마디로 건너가요'], answer: '소리를 내지 않고 박을 세요' },
      { type: 'table', prompt: '내가 찾은 되풀이 소리를 쓰세요.', columns: ['어떤 소리', '규칙(소리 순서)'], cells: [['', '']] },
    ],
    easyNote: '되풀이되는 묶음을 먼저 찾아요. 묶음 하나를 소리 내어 읽고 끝까지 이어 읽어요.',
    easy: [
      { type: 'choice', prompt: '똑 딱 똑 딱 다음에 올 소리는 무엇일까요?', options: ['똑', '딱'], answer: '똑' },
      { type: 'blank', prompt: '빈칸을 채우세요.', text: '쉼표 자리에서는 소리를 ___ 박을 세요.', answer: '내지 않고' },
      { type: 'short', prompt: '집이나 학교에서 되풀이되는 소리 하나를 쓰세요.' },
    ],
    diff: { easy: '무늬가 한 줄에 다섯 조각씩 놓이고 리듬 블록 아래에 마디마다 박 수가 보여요.', base: '무늬 여덟 조각을 보며 규칙을 스스로 찾아요.', challenge: '틀린 칸을 알려 주지 않고 블록에 쉼표 종류가 더 나와요.' },
    notes: '자주 보이는 어려움: ① 묶음 길이를 놓친다 → 손뼉으로 묶음 끝에서 크게 친다. ② 쉼표에서 소리를 낸다 → 손을 펴서 멈추는 동작으로 보인다. ③ 8분음표를 두 박으로 센다 → 두 개가 한 박임을 박수 두 번으로 보인다.',
  }));

  // ───────────────────────── 7차시 (확장) ─────────────────────────
  lessons.push(L(7, {
    s: S4, title: '천둥은 낮고 길게, 새소리는 높고 짧게 — 소리의 높낮이 나누기',
    obj: '천둥·바람·새소리 같은 생활의 소리를 음의 높낮이와 길이를 바꾸어 건반으로 나타낼 수 있다.',
    ill: 'a paper thundercloud on the left with long low waves and a small paper bird on the right with tiny high notes', txt: '낮고 길게 높고 짧게', mot: ['cloud', 'bird', 'hills', 'tree'],
    it: `"천둥소리와 새소리를 목소리로 내 볼까요? 어느 쪽이 높고 어느 쪽이 낮은가요?" 낮은 소리는 오래 끌고 높은 소리는 짧게 끊으며 흉내 내게 한다. "소리의 높낮이와 길이를 바꾸면 소리를 닮게 만들 수 있어요." 높고 낮음을 크고 작음과 같게 말하는 학생에게는 속삭이는 낮은 소리를 내 보게 한다.`,
    is: '천둥과 새소리를 목소리로 내 보고, 높은 소리와 낮은 소리가 어떻게 다른지 알아봅시다.',
    acts: [
      A(1, '소리와 표현 방법 이어 보기', 'story',
        `"천둥은 낮은 음을 길고 세게, 새소리는 높은 음을 짧고 여리게 나타내요." 카드를 이은 뒤 입으로 해 보게 한다. 바람 소리를 짧게만 표현하려는 학생에게 "바람은 한참 불어요. 소리가 이어지는 시간을 생각해 볼까요?"라고 묻는다.`,
        '왼쪽 소리를 읽고, 그 소리를 닮게 나타내는 방법 카드를 이어요.', cardsLv(),
        [
          MATCH('소리와 나타내는 방법을 이어 보세요.', [['천둥소리', '낮은 음을 길고 세게'], ['새 지저귐', '높은 음을 짧고 여리게']], ['중간 음을 길게'], { difficulty: 0.1 }),
          MATCH('소리와 나타내는 방법을 이어 보세요.', [['바람 소리', '중간 음을 길게 이어서'], ['빗방울 소리', '높은 음을 짧게 끊어서'], ['큰 북소리', '낮은 음을 세게']], null, { difficulty: 0.2 }),
          MATCH('소리와 나타내는 방법을 이어 보세요.', [['멀리서 울리는 천둥', '낮은 음을 여리게 길게'], ['가까이에서 터진 천둥', '낮은 음을 아주 세게'], ['아기 새 소리', '높은 음을 아주 여리게']], ['높은 음을 길고 세게'], { difficulty: 0.3, predict: { q: '높고 낮음과 크고 작음은 같은 것일까요?', options: ['같아요', '달라요'], answer: 1 }, conclude: '음의 높낮이와 소리의 크기는 서로 다른 요소라서 따로 정할 수 있어요.' }),
        ]),
      A(2, '낮은 소리와 높은 소리 건반으로 치기', 'keyboard',
        `"왼쪽 건반은 낮고 오른쪽 건반은 높은 소리예요. 천둥은 왼쪽 가까이, 새는 오른쪽 가까이에서 쳐요." 들은 가락을 따라 치게 한 뒤 직접 점점 높아지는 바람 가락을 짓게 한다. 오른쪽으로 갈수록 소리가 작아진다고 여기는 학생에게 "높이만 바뀌어요. 세기는 손가락 힘으로 정해요"라고 말한다.`,
        '낮은 음 가락과 높은 음 가락을 들은 대로 쳐 보고, 점점 높아지는 바람 가락을 지어요.', mel(),
        [
          K('천둥 소리를 닮은 낮은 음 가락이에요. 느리게 들려줘요. 듣고 따라 쳐 보세요.', ['도', '도', '레', '도', '도'], { t: 60, x: { difficulty: 0.1 } }),
          K('새소리를 닮은 높은 음 가락이에요. 빠르게 들려줘요. 듣고 따라 쳐 보세요.', ['솔', '라', '솔', '라', '시', '높은도'], { t: 132, x: { difficulty: 0.2 } }),
          CP('도에서 시작해 높은도로 끝나는 바람 가락을 지어요. 음이 점점 높아지게 해요.', { length: 6, startOn: '도', endOn: '높은도' }, ['음이 점점 높아지는 것이 들려요', '바람이 부는 느낌이 났어요'], { x: { difficulty: 0.25, reveal: 'after-check', conclude: '음을 한 칸씩 올리면 바람이 점점 높이 부는 소리를 나타낼 수 있어요.' } }),
        ]),
    ],
    wt: `"오늘 천둥은 어떤 음으로, 새소리는 어떤 음으로 나타냈나요?" 건반을 가리키며 말하게 한다. 출구 2번을 틀린 학생에게는 낮은 건반과 높은 건반을 번갈아 눌러 소리의 높이를 견주어 듣게 한다.`,
    exit: [
      { type: 'tool', tool: 'keyboard', options: { from: '도', to: '높은도', melody: ['도', '레', '도', '도'], tempo: 60 }, prompt: '천둥 소리를 닮은 가락을 듣고 건반으로 따라 쳐 보세요.', target: { notes: ['도', '레', '도', '도'] }, difficulty: 0.2 },
      { type: 'choice', prompt: '작은 새의 지저귐을 나타내기에 알맞은 것은 어느 것일까요?', options: ['높고 짧은 음', '낮고 긴 음', '낮고 센 음'], answer: 0, difficulty: 0.15, explain: '새소리는 높고 짧게 떨리는 소리라서 높고 짧은 음이 어울려요.' },
      { type: 'mood', prompt: '소리를 건반으로 나타내 보니 어땠나요?' },
    ],
    wsTitle: '높은 소리와 낮은 소리',
    ws: [
      { type: 'table', prompt: '소리를 어떻게 나타내면 좋을지 높이(높게·낮게)와 길이(길게·짧게)를 쓰세요.', columns: ['소리', '높이', '길이'], cells: [['천둥소리', '', ''], ['새 지저귐', '', ''], ['빗방울', '', '']] },
      { type: 'figure', prompt: '선생님이 들려주는 바람 가락을 듣고 빈칸에 계이름을 쓰세요.', tool: 'keyboard', wide: true, options: { from: '도', to: '높은도', printNames: true, printBoxes: 5 }, figures: [{ caption: '음이 올라갔나요, 내려갔나요? ( 올라갔다 · 내려갔다 )' }], answer: '도 레 미 솔 높은도 — 올라갔다' },
      { type: 'choice', prompt: '높은 소리와 낮은 소리에 대한 바른 말에 ○ 하세요.', options: ['높은 소리는 항상 큰 소리예요', '높이와 크기는 서로 다른 요소예요', '낮은 소리는 들리지 않아요'], answer: '높이와 크기는 서로 다른 요소예요' },
      { type: 'short', prompt: '내가 흉내 내고 싶은 생활의 소리와 그 소리의 높이·길이를 쓰세요.' },
    ],
    easyNote: '천둥은 낮고 길게, 새소리는 높고 짧게 나타내요. 높이와 크기는 달라요.',
    easy: [
      { type: 'choice', prompt: '천둥소리는 어느 쪽일까요?', options: ['낮은 소리', '높은 소리'], answer: '낮은 소리' },
      { type: 'blank', prompt: '빈칸을 채우세요.', text: '새소리는 ___ 음을 짧게 나타내요.', answer: '높은' },
      { type: 'short', prompt: '낮은 소리가 나는 것을 하나 쓰세요.' },
    ],
    diff: { easy: '맞게 이은 카드에 초록 테두리가 보이고 가락이 들리는 동안 건반이 빛나요.', base: '카드와 가락을 스스로 확인해요.', challenge: '계이름 없이 귀로 찾고 검은건반도 나와요.' },
    notes: '자주 보이는 어려움: ① 높은 소리를 큰 소리로 여긴다 → 낮은 건반을 세게, 높은 건반을 여리게 쳐서 두 요소가 따로임을 보인다. ② 바람 가락이 계단처럼 올라가지 않고 흩어진다 → 건반에서 한 칸씩 오르며 쳐 보게 한다. ③ 낮은 소리가 잘 안 들려 건너뛴다 → 느린 박으로 한 음을 오래 눌러 듣게 한다.',
  }));

  // ───────────────────────── 8차시 (확장) ─────────────────────────
  lessons.push(L(8, {
    s: S4, title: '등굣길 소리를 차례대로 이어 장면 음악 계획 세우기',
    obj: '등굣길 같은 장면에서 들리는 소리를 차례대로 정하고, 소리가 나오는 순서에 맞게 장면 음악을 짜 볼 수 있다.',
    ill: 'a paper road with a house at one end and a school at the other, with musical notes marking each sound along the way', txt: '집에서 학교까지', mot: ['sun', 'house', 'hills', 'tree'],
    it: `"아침에 일어나 학교까지 오는 동안 어떤 소리를 들었나요?" 학생들이 말하는 소리를 칠판에 순서 없이 적어 둔다. "이 소리를 한꺼번에 내면 어떻게 들릴까요?" 하고 물은 뒤 차례를 정해야 장면이 보인다고 안내한다. 소리를 한꺼번에 내려는 학생에게 "먼저 나온 소리와 나중에 나온 소리를 가려 보아요"라고 말한다.`,
    is: '집에서 학교까지 오는 길에 들은 소리를 떠올려 말하고, 소리가 나오는 차례를 정해 봅시다.',
    acts: [
      A(1, '장면 소리를 일어난 차례대로 놓기', 'story',
        `"장면의 소리를 일어난 순서대로 놓으면 이야기가 돼요. 나는 어떤 차례로 들었는지 떠올려 보세요." 카드를 읽고 순서를 소리 내어 말하게 한다. 차례를 모르고 그림만 보고 놓는 학생에게 "이 소리 바로 앞에는 무슨 소리가 났을까요?"라고 묻는다.`,
        '카드를 읽고 소리가 나온 차례대로 놓아요.', cardsLv(),
        [
          ORDER('등굣길에서 들리는 소리를 차례대로 놓아 보세요.', ['알람 시계가 울려요', '현관문이 닫혀요', '횡단보도 신호음이 울려요', '교문에서 친구가 인사해요'], { difficulty: 0.1 }),
          ORDER('비 오는 아침 등굣길 소리를 차례대로 놓아 보세요.', ['우산을 펼치는 소리', '빗방울이 우산에 톡톡', '물웅덩이를 밟아 첨벙', '우산을 털며 교실에 들어가요'], { difficulty: 0.2 }),
          ORDER('눈 오는 날 학교 가는 길 소리를 차례대로 놓아 보세요.', ['장갑을 끼고 현관을 나서요', '눈 밟는 소리가 뽀드득', '눈덩이가 날아가는 소리', '교실 문이 드르륵 열려요'], { difficulty: 0.3, predict: { q: '소리를 한꺼번에 내면 장면이 잘 전해질까요?', options: ['네, 더 풍성해요', '아니요, 차례가 보이지 않아요'], answer: 1 }, conclude: '소리가 나오는 차례를 정해야 듣는 사람이 장면의 흐름을 따라갈 수 있어요.' }),
        ]),
      A(2, '장면 음악 가락 짓고 점검하기', 'keyboard',
        `"등굣길의 첫 장면, 알람이 울릴 때의 가락을 지어 봐요. 지은 뒤 소리가 나오는 차례가 들리는지 확인해요." 가락을 지은 학생은 앞 활동의 카드 차례에 맞춰 쳐 보게 한다. 가락만 길게 지어 장면과 이어지지 않는 학생에게 "이 가락은 어느 장면의 소리인가요?"라고 묻는다.`,
        '장면의 한 부분을 골라 가락을 짓고, 차례대로 이어 쳐 본 뒤 점검 목록을 표시해요.', mel(),
        [
          CP('알람이 울리는 장면이에요. 높은도로 끝나는 여섯 음 가락을 지어요.', { length: 6, endOn: '높은도' }, ['알람처럼 짧게 이어졌어요'], { x: { difficulty: 0.2 } }),
          K('횡단보도 신호음을 닮은 두 음이 번갈아 나와요. 듣고 따라 쳐 보세요.', ['솔', '미', '솔', '미', '솔', '미'], { t: 112, x: { difficulty: 0.2 } }),
          CP('걸어가는 발소리를 나타내는 가락이에요. 도·레·미만 써서 일곱 음을 지어요.', { length: 7, only: ['도', '레', '미'] }, ['걸음처럼 박이 일정했어요', '장면의 차례에 맞는 자리에서 쳤어요'], { x: { difficulty: 0.3 } }),
          SK('앞 활동의 차례대로 모둠이 이어 쳐 본 뒤 해낸 것을 표시해요.', ['차례를 소리 내어 말하며 쳤어요', '앞뒤 소리가 이어지는 것을 들었어요', '고치고 싶은 곳을 하나 찾았어요'], { x: { difficulty: 0.1 } }),
        ]),
    ],
    wt: `"오늘 장면에서 가장 먼저 나는 소리와 마지막에 나는 소리는 무엇이었나요?" 차례를 한 줄로 말하게 한다. 출구 2번을 틀린 학생에게는 카드를 다시 읽으며 앞뒤 소리를 짚게 한다.`,
    exit: [
      { type: 'tool', tool: 'story', options: { mode: 'order', cards: ['교실 문이 열려요', '실내화로 갈아 신어요', '교문에 들어서요'] }, prompt: '학교에 들어서는 장면의 소리를 차례대로 놓아 보세요.', target: { order: ['교문에 들어서요', '실내화로 갈아 신어요', '교실 문이 열려요'] }, difficulty: 0.15 },
      { type: 'choice', prompt: '장면 음악에서 소리가 나오는 차례를 정하는 까닭은 무엇일까요?', options: ['듣는 사람이 장면의 흐름을 따라가게 하려고', '소리를 더 크게 하려고', '소리를 빼 버리려고'], answer: 0, difficulty: 0.2, explain: '차례가 정해져야 듣는 사람이 어떤 일이 일어나는지 알 수 있어요.' },
      { type: 'mood', prompt: '장면 음악 계획이 마음에 드나요?' },
    ],
    wsTitle: '내 등굣길 소리 지도',
    ws: [
      { type: 'table', prompt: '내가 오늘 들은 소리를 차례대로 쓰세요.', columns: ['차례', '들은 소리', '흉내 내는 방법'], cells: [['1', '', ''], ['2', '', ''], ['3', '', '']] },
      { type: 'figure', prompt: '신호음 가락을 듣고 빈칸에 계이름을 쓰세요.', tool: 'keyboard', wide: true, options: { from: '도', to: '높은도', printNames: true, printBoxes: 6 }, figures: [{ caption: '두 음이 번갈아 나왔나요? ( 네 · 아니요 )' }], answer: '솔 미 솔 미 솔 미 — 네' },
      { type: 'choice', prompt: '장면 음악에서 소리를 차례대로 놓았을 때 좋은 점에 ○ 하세요.', options: ['이야기가 이어져 들려요', '소리가 모두 사라져요', '장면과 상관없어요'], answer: '이야기가 이어져 들려요' },
      { type: 'short', prompt: '내가 만들고 싶은 장면 한 가지와, 가장 먼저 나올 소리를 쓰세요.' },
    ],
    easyNote: '장면의 소리는 일어난 차례대로 놓아요. 앞뒤 소리를 짚으며 읽어요.',
    easy: [
      { type: 'choice', prompt: '교실 문이 열리는 소리는 교문을 지난 뒤일까요, 앞일까요?', options: ['뒤', '앞'], answer: '뒤' },
      { type: 'blank', prompt: '빈칸을 채우세요.', text: '장면 음악은 소리가 나오는 ___를 정해야 흐름이 보여요.', answer: '차례' },
      { type: 'short', prompt: '오늘 들은 소리 하나를 쓰세요.' },
    ],
    diff: { easy: '맞는 자리에 놓으면 초록 테두리가 보이고 가락을 듣는 동안 건반이 빛나요.', base: '카드 차례와 가락을 스스로 확인해요.', challenge: '카드가 늘고 틀린 자리를 알려 주지 않으며 계이름 없이 치지요.' },
    notes: '자주 보이는 어려움: ① 소리를 한꺼번에 내려 한다 → 한 사람씩 차례로 내 보며 달라지는 점을 듣게 한다. ② 가락과 장면이 이어지지 않는다 → 카드마다 가락 한 조각을 맡겨 이어 친다. ③ 차례를 모르고 그림만 본다 → 카드 글을 소리 내어 읽게 한다.',
  }));


  // ───────────────────────── 9차시 (핵심) ─────────────────────────
  lessons.push(L(9, {
    s: S3, title: '두 소리 조각을 듣고 빠르기가 다른지 세기가 다른지 가려내기',
    obj: '같은 가락의 소리 조각 두 개를 듣고 두 조각이 빠르기 때문에 다른지 셈여림 때문에 다른지 가려낼 수 있다.',
    ill: 'two paper ear shapes listening to two ribbons of notes, one stretched long and thin and one short and thick', txt: '무엇이 다를까?', mot: ['cloud', 'hills', 'tree', 'star'],
    it: `"같은 가락인데 두 번 들으면 달라 보여요. 무엇이 달랐는지 말로 설명할 수 있나요?" 시연 단추로 같은 세 음을 느리게, 그 다음엔 빠르게 들려주고 "이번엔 무엇이 달랐나요?"를 묻는다. 두 번째는 크게 쳤다고 답하는 학생에게 "빠르게 치면 소리가 커졌다고 느껴지기도 해요. 박이 지나가는 시간을 먼저 비교해 볼까요?"라고 되묻는다.`,
    is: '같은 세 음을 두 번 들어 보고, 두 소리가 어떤 점에서 달랐는지 말해 봅시다.',
    demo: { tool: 'keyboard', options: { from: '도', to: '높은도', tempo: 60 }, sequence: [{ notes: ['도', '미', '솔'] }] },
    acts: [
      A(1, '빠르기를 달리해 들려주는 소리 따라 치기', 'keyboard',
        `"먼저 느린 조각, 다음에 빠른 조각을 들어요. 소리 하나하나가 지나가는 시간이 어떻게 다른지 귀를 기울여 보세요." 조각마다 박수로 박을 치며 들으면 빠르기를 느끼기 쉽다고 알려 준다. 빠른 조각에서 음 높이가 달라졌다고 하는 학생에게 "도 미 솔은 그대로예요. 지나가는 시간이 달라진 거예요"라고 짚는다.`,
        '조각 A와 B를 번갈아 듣고, 들은 가락을 건반으로 따라 쳐요.', mel(),
        [
          K('조각 A예요. 아주 느리게 들려줘요. 듣고 따라 쳐 보세요.', ['솔', '미', '솔', '도'], { t: 52, x: { difficulty: 0.1 } }),
          K('조각 B예요. 같은 가락을 빠르게 들려줘요. 듣고 따라 쳐 보세요.', ['솔', '미', '솔', '도', '솔', '미', '솔', '도'], { t: 144, x: { difficulty: 0.2 } }),
          K('조각 C예요. 두 번 들으면 어느 쪽이 더 빠른지 알 수 있어요. 듣고 따라 쳐 보세요.', ['라', '솔', '미', '레', '도'], { t: 88, x: { difficulty: 0.3, predict: { q: '조각 A와 B는 음이 달랐을까요, 빠르기가 달랐을까요?', options: ['음이 달랐어요', '빠르기가 달랐어요'], answer: 1 }, conclude: '같은 음이라도 지나가는 시간이 달라지면 빠르기가 다르게 들려요.' } }),
        ]),
      A(2, '두 조각의 다른 점을 요소별로 나누기', 'mindmap',
        `"두 소리 조각을 비교한 말을 읽고 어느 요소의 차이인지 나눠 보세요." 빠르기는 시간, 셈여림은 힘의 차이라는 것을 손 모양으로 보여 준다. 소리가 길어진 것을 세졌다고 쓰는 학생에게 "오래 울리는 것은 길이이고 센 것은 힘이에요"라고 구별해 준다.`,
        '설명 카드를 읽고, 빠르기의 차이인지 셈여림의 차이인지 나누어요. 어느 쪽도 아닌 카드는 그대로 둬요.', cardsLv(),
        [
          SORT('두 소리 조각을 비교한 말을 요소에 따라 나누어 보세요.', '두 조각 비교', { '빠르기가 달라요': ['한 조각이 훨씬 천천히 지나가요'], '셈여림이 달라요': ['한 조각이 속삭이듯 작아요'] }, ['한 조각이 음 이름이 달라요'], { difficulty: 0.1 }),
          SORT('들은 느낌을 요소에 따라 나누어 보세요.', '들은 느낌', { '빠르기가 달라요': ['박이 더 촘촘하게 지나가요', '걷는 속도와 뛰는 속도 같아요'], '셈여림이 달라요': ['한 조각은 멀리까지 들려요', '한 조각은 귀를 기울여야 들려요'] }, null, { difficulty: 0.2 }),
          SORT('조각 비교를 요소에 따라 나누어 보세요.', '요소 가려내기', { '빠르기가 달라요': ['같은 가락이 더 일찍 끝나요', '손뼉 박이 더 빨라요'], '셈여림이 달라요': ['손뼉을 세게 쳤을 때와 살짝 쳤을 때처럼 들려요'] }, ['첫 음이 도에서 솔로 바뀌었어요'], { difficulty: 0.3 }),
        ]),
    ],
    wt: `"오늘 같은 가락의 두 조각을 들으며 무엇이 달랐는지 어떻게 알아냈나요?" 박수를 치며 들었던 경험을 말하게 한다. 출구 2번을 틀린 학생에게는 두 조각을 다시 들려주며 박수 간격을 견주게 한다.`,
    exit: [
      { type: 'tool', tool: 'keyboard', options: { from: '도', to: '높은도', melody: ['미', '솔', '미', '도'], tempo: 140 }, prompt: '빠르게 들려주는 조각을 듣고 건반으로 따라 쳐 보세요.', target: { notes: ['미', '솔', '미', '도'] }, difficulty: 0.2 },
      { type: 'choice', prompt: '같은 가락을 한 번은 작게 한 번은 크게 쳤어요. 다른 요소는 무엇일까요?', options: ['빠르기', '셈여림', '음 이름'], answer: 1, difficulty: 0.2, explain: '소리의 크고 작음은 셈여림의 차이예요.' },
      { type: 'mood', prompt: '귀로 두 소리를 비교해 보니 어땠나요?' },
    ],
    wsTitle: '두 소리 조각 비교',
    ws: [
      { type: 'table', prompt: '두 조각의 차이를 읽고 어느 요소인지 쓰세요(빠르기·셈여림).', columns: ['조각 비교', '다른 요소'], cells: [['한 조각이 더 천천히 지나가요', ''], ['한 조각이 더 속삭이듯 작아요', ''], ['박수가 더 촘촘해요', '']] },
      { type: 'figure', prompt: '느리게 들려주는 가락을 듣고 빈칸에 계이름을 쓰세요.', tool: 'keyboard', wide: true, options: { from: '도', to: '높은도', printNames: true, printBoxes: 4 }, figures: [{ caption: '같은 가락을 빠르게도 쳐 보았나요? ( 네 · 아니요 )' }], answer: '솔 미 솔 도 — 네' },
      { type: 'choice', prompt: '두 조각의 음 이름이 같을 때 바뀌어도 되는 요소에 ○ 하세요.', options: ['빠르기와 셈여림', '음 이름', '조각의 이름'], answer: '빠르기와 셈여림' },
      { type: 'short', prompt: '오늘 들은 두 조각에서 가장 큰 차이가 무엇이었는지 쓰세요.' },
    ],
    easyNote: '빠르기는 소리가 지나가는 시간, 셈여림은 소리의 크고 작음이에요.',
    easy: [
      { type: 'choice', prompt: '소리가 더 천천히 지나가는 것은 어느 요소일까요?', options: ['빠르기', '셈여림'], answer: '빠르기' },
      { type: 'blank', prompt: '빈칸을 채우세요.', text: '소리의 크고 작음은 ___의 차이예요.', answer: '셈여림' },
      { type: 'short', prompt: '두 조각을 들을 때 박수를 치면 좋은 까닭을 쓰세요.' },
    ],
    diff: { easy: '가락을 듣는 동안 건반이 빛나고 느린 박(80)이에요.', base: '두 조각을 번갈아 듣고 스스로 가려내요.', challenge: '계이름 없이 귀로 듣고 비교해요.' },
    notes: '자주 보이는 어려움: ① 빠른 조각이 더 크게 들린다 → 같은 힘으로 빠르게·느리게 박수를 쳐 보인다. ② 음이 달라졌다고 말한다 → 도 미 솔을 한 음씩 짚어 같은 음임을 확인한다. ③ 요소를 둘 다라고만 말한다 → 하나씩만 바꿔 두 번 들려준다.',
  }));

  // ───────────────────────── 10차시 (연습) ─────────────────────────
  lessons.push(L(10, {
    s: S3, title: '살금살금·쿵쿵·졸린 걸음 — 느낌말을 빠르기와 세기로 풀기',
    obj: '소리가 주는 느낌을 나타내는 말(살금살금·쿵쿵·졸린 걸음)을 빠르기나 셈여림의 요소로 풀어 설명할 수 있다.',
    ill: 'a paper cat tiptoeing past a stomping paper elephant and a sleepy paper turtle, with soft notes trailing behind each', txt: '살금살금 쿵쿵', mot: ['cloud', 'hills', 'tree', 'flower'],
    it: `"고양이는 어떻게 걸을까요? 코끼리는요? 몸으로 흉내 내 볼까요?" 두 걸음을 흉내 내게 하고 "두 걸음이 소리로 들리면 무엇이 다를까요?"를 묻는다. 칠판에 '살금살금'과 '쿵쿵'을 적고 두 말을 빠르기·셈여림 중 무엇으로 풀 수 있는지 생각하게 한다. 느낌말을 감정으로만 말하는 학생에게 "소리가 크고 작은가요, 빠르고 느린가요?"로 바꾸어 묻는다.`,
    is: '고양이와 코끼리의 걸음을 흉내 내 보고, 느낌말을 빠르기와 세기로 풀어 말해 봅시다.',
    acts: [
      A(1, '느낌말과 요소 짝 짓기', 'story',
        `"느낌말은 소리의 요소로 풀 수 있어요. 살금살금은 소리가 작고, 쿵쿵은 소리가 세지요." 카드를 하나씩 읽고 몸으로 해 본 뒤 이게 한다. 빠르기와 셈여림을 섞어 말하는 학생에게 "둘 중 먼저 눈에 띄는 요소부터 골라 볼까요?"라고 말한다.`,
        '왼쪽 느낌말을 읽고, 어울리는 요소 카드를 이어요.', cardsLv(),
        [
          MATCH('느낌말과 어울리는 요소를 이어 보세요.', [['살금살금 다가가는 소리', '여리게'], ['쿵쿵 힘차게 걷는 소리', '세게']], ['느리게'], { difficulty: 0.1 }),
          MATCH('느낌말과 어울리는 요소를 이어 보세요.', [['졸린 듯 천천히 지나가는 소리', '느리게'], ['신나게 달려가는 소리', '빠르게'], ['귓속말하는 소리', '여리게']], ['세게'], { difficulty: 0.2 }),
          MATCH('느낌말과 요소를 이어 보세요.', [['숨을 죽이고 한 걸음씩', '느리고 여리게'], ['운동장을 힘껏 달려요', '빠르고 세게'], ['총총 종종걸음으로', '빠르고 여리게']], ['느리고 세게'], { difficulty: 0.3, predict: { q: '빠른 소리는 늘 세게 들려야 할까요?', options: ['네, 늘 세게요', '아니요, 따로 정해요'], answer: 1 }, conclude: '빠르기와 셈여림은 서로 따로 정할 수 있어서 빠르면서 여린 소리도 만들 수 있어요.' }),
        ]),
      A(2, '같은 리듬을 빠르기를 바꿔 듣고 따라 놓기', 'keyboard',
        `"같은 리듬이지만 한 번은 살금살금처럼 느리게, 한 번은 총총 달리듯 빠르게 들려줘요. 블록은 같게 놓아요." 한 박씩 손을 짚으며 블록을 놓게 한다. 빠르게 들리는 리듬에서 블록을 빼먹는 학생에게 "한 번 더 듣고 박을 세어 볼까요?"라고 말한다.`,
        '리듬 듣기를 누르고 빠르기를 느끼며 들은 뒤, 같은 리듬을 블록으로 놓아요.', rhy(4, 2),
        [
          R('살금살금 걷는 소리예요. 느리게 들려줘요. 듣고 블록으로 놓아 보세요.', ['q', 'qr', 'q', 'qr', 'q', 'q', 'h'], { t: 56, x: { difficulty: 0.1 } }),
          R('쿵쿵 걷는 소리예요. 일정한 박이 이어져요. 듣고 블록으로 놓아 보세요.', ['h', 'q', 'q', 'h', 'q', 'q'], { t: 84, x: { difficulty: 0.25 } }),
          R('총총 달려가는 소리예요. 빠르게 들려줘요. 듣고 블록으로 놓아 보세요.', ['e', 'e', 'e', 'e', 'q', 'q', 'q', 'q'], { t: 132, x: { difficulty: 0.3, reveal: 'after-check', conclude: '짧은 음표가 많아지면 같은 박 안에서 소리가 더 촘촘하게 지나가 빠르게 느껴져요.' } }),
        ]),
    ],
    wt: `"오늘 배운 느낌말을 빠르기와 세기로 어떻게 풀었나요?" 한 가지를 골라 말하게 한다. 출구 2번을 틀린 학생에게는 두 요소를 따로 몸으로 표현해 보게 한다.`,
    exit: [
      { type: 'tool', tool: 'story', options: { mode: 'match', slots: [{ id: 'y1', label: '조용히 책장을 넘기는 소리' }, { id: 'y2', label: '북을 세게 두드리는 소리' }], cards: ['여리게', '세게', '아주 빠르게'] }, prompt: '소리 느낌과 어울리는 요소를 이어 보세요.', target: { match: { y1: '여리게', y2: '세게' } }, difficulty: 0.2 },
      { type: 'choice', prompt: '‘졸린 듯 천천히’라는 느낌말은 어느 요소로 풀 수 있을까요?', options: ['빠르기(느리게)', '셈여림(세게)', '음 높이(높게)'], answer: 0, difficulty: 0.15, explain: '천천히는 소리가 지나가는 시간이 길다는 뜻이라 빠르기로 풀 수 있어요.' },
      { type: 'mood', prompt: '느낌말을 소리로 풀어 보니 어땠나요?' },
    ],
    wsTitle: '느낌말을 소리로 풀기',
    ws: [
      { type: 'table', prompt: '느낌말에 어울리는 요소를 쓰세요(느리게·빠르게·여리게·세게).', columns: ['느낌말', '어울리는 요소'], cells: [['살금살금', ''], ['쿵쿵', ''], ['졸린 걸음', ''], ['종종걸음', '']] },
      { type: 'figure', prompt: '리듬을 보고 첫째 마디와 둘째 마디의 박 수를 쓰세요.', tool: 'keyboard', wide: true, options: { mode: 'rhythm', meter: 4, measures: 2 }, figures: [{ state: { rhythm: ['q', 'qr', 'h', 'e', 'e', 'q', 'h'] }, caption: '첫째 마디 ___박, 둘째 마디 ___박' }], answer: '첫째 마디 4박, 둘째 마디 4박' },
      { type: 'choice', prompt: '바르게 말한 것에 ○ 하세요.', options: ['빠른 소리가 늘 세요', '빠르면서 여리게도 할 수 있어요', '셈여림은 빠르기와 같아요'], answer: '빠르면서 여리게도 할 수 있어요' },
      { type: 'short', prompt: '내가 만든 느낌말(예: 사뿐사뿐)을 빠르기와 세기로 풀어 쓰세요.' },
    ],
    easyNote: '살금살금은 여리게, 쿵쿵은 세게예요. 졸린 걸음은 느리게, 종종걸음은 빠르게예요.',
    easy: [
      { type: 'choice', prompt: '쿵쿵 걷는 소리는 어느 쪽일까요?', options: ['여리게', '세게'], answer: '세게' },
      { type: 'blank', prompt: '빈칸을 채우세요.', text: '살금살금 걷는 소리는 ___ 나요.', answer: '작게' },
      { type: 'short', prompt: '내가 아는 느낌말을 하나 쓰세요.' },
    ],
    diff: { easy: '맞게 이은 카드에 초록 테두리가 보이고 마디마다 박 수가 보여요.', base: '카드와 블록을 스스로 확인해요.', challenge: '카드가 늘고 틀린 곳을 알려 주지 않으며 블록에 쉼표 종류가 더 나와요.' },
    notes: '자주 보이는 어려움: ① 느낌말을 기분으로만 풀어 요소로 말하지 못한다 → 크기와 속도로 바꿔 묻는다. ② 빠르면 세다고 묶는다 → 빠르고 여린 소리(귓속말로 빨리 말하기)를 해 본다. ③ 블록 수를 소리 크기와 헷갈린다 → 박을 세며 짚는다.',
  }));

  // ───────────────────────── 11차시 (확장) ─────────────────────────
  lessons.push(L(11, {
    s: S3, title: '점점 빨라지고 점점 세어지는 소리 따라가며 듣기',
    obj: '소리가 점점 빨라지거나 점점 세어지는 변화를 듣고 어떤 요소가 바뀌는지 구별할 수 있다.',
    ill: 'a paper train gaining speed with wheels drawn bigger toward the right and a puff of notes growing larger behind it', txt: '점점 점점', mot: ['sun', 'hills', 'mountain', 'bird'],
    it: `"기차가 떠날 때는 어떤 소리가 나나요? 점점 어떻게 되나요?" 손뼉을 느리게 시작해 점점 빠르게 치고, 다음엔 여리게 시작해 점점 세게 치며 보여 준다. "두 번 모두 점점 달라졌는데 무엇이 달라진 걸까요?" 하고 묻는다. 빠르기와 세기가 같이 변한다고 답하는 학생에게 "손뼉 소리를 다시 들어 볼까요? 간격과 힘 중 무엇이 바뀌었나요?"라고 되묻는다.`,
    is: '점점 빨라지는 손뼉과 점점 세어지는 손뼉을 듣고, 무엇이 달라졌는지 말해 봅시다.',
    acts: [
      A(1, '변화하는 소리를 요소별로 나누기', 'mindmap',
        `"점점 빨라져요는 빠르기, 점점 세져요는 셈여림이에요. 카드를 읽고 어느 요소가 변하는지 나눠 봐요." 카드마다 손뼉으로 직접 해 보게 한다. 점점 세게를 점점 빠르게로 같이 묶는 학생에게 "소리의 힘이 변하나요, 시간이 변하나요?"라고 묻는다.`,
        '변화를 설명한 카드를 읽고, 빠르기가 변하는지 셈여림이 변하는지 나누어요.', cardsLv(),
        [
          SORT('점점 달라지는 소리를 어느 요소가 바뀌는지에 따라 나누어 보세요.', '점점 변하는 소리', { '빠르기가 변해요': ['박수 간격이 점점 짧아져요', '걸음이 점점 느려져요'], '셈여림이 변해요': ['북소리가 점점 커져요', '목소리가 점점 작아져요'] }, null, { difficulty: 0.1 }),
          SORT('변화하는 소리를 요소에 따라 나누어 보세요.', '기차 소리', { '빠르기가 변해요': ['바퀴 소리가 점점 빨라져요', '정거장에서 점점 천천히 멈춰요'], '셈여림이 변해요': ['멀리서 점점 가까이 크게 들려요', '멀어지며 점점 작게 들려요'] }, null, { difficulty: 0.2 }),
          SORT('변화를 읽고 요소에 따라 나누어 보세요. 소리가 바뀌지 않은 카드는 두어요.', '소리의 변화', { '빠르기가 변해요': ['마지막 마디에서 서서히 느려져요'], '셈여림이 변해요': ['끝 마디에서 갑자기 세져요'] }, ['처음부터 끝까지 똑같이 들려요'], { difficulty: 0.3, predict: { q: '소리가 점점 빨라지면 점점 세지기도 할까요?', options: ['꼭 함께 변해요', '따로 변할 수 있어요'], answer: 1 }, conclude: '빠르기가 변해도 셈여림은 그대로일 수 있고, 따로따로 정할 수 있어요.' }),
        ]),
      A(2, '변화하는 무늬에서 규칙 찾기', 'pattern',
        `"소리의 변화를 말로 적은 무늬예요. 어떤 규칙으로 바뀌는지 찾아봐요." 무늬를 소리 크기와 속도로 읽어 보게 한다. 규칙을 한 칸씩만 보고 다음을 짐작하는 학생에게 "처음부터 어떻게 바뀌어 왔는지 읽어 보아요"라고 말한다.`,
        '소리가 바뀌는 무늬를 읽고 규칙을 찾아요.', patLv(),
        [
          { prompt: '소리가 점점 세어지는 무늬예요. 어떤 요소가 바뀌고 있나요?', toolOptions: { mode: 'rule', seq: ['여리게', '조금 세게', '세게', '아주 세게'], choices: ['빠르기가 바뀌어요', '셈여림이 바뀌어요', '음 높이가 바뀌어요'], why: ['소리의 힘이 점점 달라지고 있어요.', '', '높이는 적혀 있지 않아요.'] }, target: { pick: 1 }, difficulty: 0.15 },
          { prompt: '소리가 점점 빨라지는 무늬예요. 빈칸에 알맞은 말을 넣어 보세요.', toolOptions: { seq: ['아주 느리게', '느리게', '보통 빠르게', null, '아주 빠르게'], palette: ['빠르게', '여리게', '느리게'], perRow: 5 }, target: { fill: ['빠르게'] }, difficulty: 0.25 },
          { prompt: '무늬에서 규칙에 맞지 않는 말을 찾아 눌러 보세요. 점점 여려지는 무늬예요.', toolOptions: { mode: 'odd', seq: ['세게', '조금 세게', '조금 여리게', '세게', '여리게', '아주 여리게'], perRow: 6 }, target: { odd: 3 }, difficulty: 0.3 },
        ]),
    ],
    wt: `"점점 빨라지는 소리와 점점 세어지는 소리는 어떻게 다르게 들렸나요?" 요소를 한 문장씩 말하게 한다. 출구 2번을 틀린 학생에게는 두 가지 손뼉을 한 번씩 더 치며 간격과 힘을 비교하게 한다.`,
    exit: [
      { type: 'tool', tool: 'mindmap', options: { topic: '소리의 변화', slots: ['빠르기가 변해요', '셈여림이 변해요'], cards: ['걸음이 점점 빨라져요', '박수 소리가 점점 작아져요'] }, prompt: '소리가 바뀌는 모습을 알맞은 가지에 넣어 보세요.', target: { sort: { '빠르기가 변해요': ['걸음이 점점 빨라져요'], '셈여림이 변해요': ['박수 소리가 점점 작아져요'] } }, difficulty: 0.15 },
      { type: 'choice', prompt: '소리의 크기가 점점 커져요. 어느 요소가 변할까요?', options: ['빠르기', '셈여림', '음 이름'], answer: 1, difficulty: 0.15, explain: '소리의 크고 작음의 변화는 셈여림의 변화예요.' },
      { type: 'mood', prompt: '점점 변하는 소리를 들어 보니 어땠나요?' },
    ],
    wsTitle: '점점 변하는 소리',
    ws: [
      { type: 'figure', prompt: '무늬를 보고 빈칸에 알맞은 말을 쓰세요(점점 세지는 소리).', tool: 'pattern', wide: true, figures: [{ options: { seq: ['여리게', '조금 세게', null, '아주 세게'] }, caption: '' }], answer: '세게' },
      { type: 'table', prompt: '변하는 요소를 쓰세요(빠르기·셈여림).', columns: ['소리의 변화', '변하는 요소'], cells: [['기차가 점점 멀어져 작게 들려요', ''], ['박수가 점점 빨라져요', ''], ['점점 천천히 걸어요', '']] },
      { type: 'choice', prompt: '점점 빨라지는 소리에서 바뀌지 않아도 되는 요소는 무엇일까요?', options: ['셈여림', '빠르기', '둘 다 바뀌어야 해요'], answer: '셈여림' },
      { type: 'short', prompt: '내가 생활에서 들은 점점 커지거나 작아지는 소리를 쓰세요.' },
    ],
    easyNote: '점점 빨라지거나 느려지면 빠르기가 변해요. 점점 커지거나 작아지면 셈여림이 변해요.',
    easy: [
      { type: 'choice', prompt: '점점 커지는 소리는 어느 요소가 변하는 걸까요?', options: ['빠르기', '셈여림'], answer: '셈여림' },
      { type: 'blank', prompt: '빈칸을 채우세요.', text: '점점 빨라지면 ___가 변하는 거예요.', answer: '빠르기' },
      { type: 'short', prompt: '내가 아는 점점 작아지는 소리를 쓰세요.' },
    ],
    diff: { easy: '맞게 넣은 카드에 초록 테두리가 보이고 무늬가 한 줄에 다섯 조각씩 놓여요.', base: '카드를 스스로 확인해요.', challenge: '틀린 칸을 알려 주지 않고 무늬 조각이 한 줄에 여덟 개 나와요.' },
    notes: '자주 보이는 어려움: ① 빠르기와 셈여림이 함께 변한다고 여긴다 → 한 번에 하나만 바꾼 손뼉을 들려준다. ② 점점 세어지는 소리를 점점 높아지는 소리로 말한다 → 높이는 건반으로, 세기는 힘으로 따로 보인다. ③ 규칙을 한 칸만 보고 짐작한다 → 처음부터 변화를 읽게 한다.',
  }));

  // ───────────────────────── 12차시 (확장) ─────────────────────────
  lessons.push(L(12, {
    s: S3, title: '빠르기가 바뀌는 자리를 리듬 블록에서 귀와 눈으로 찾기',
    obj: '리듬 블록에서 음표가 촘촘해지거나 듬성해지는 자리를 찾아 빠르기가 바뀌는 곳을 귀로 확인하고 말할 수 있다.',
    ill: 'a paper ruler with notes squeezed close on one side and spread wide on the other, a magnifying glass above the point where they change', txt: '바뀌는 자리', mot: ['cloud', 'hills', 'flower', 'tree'],
    it: `"같은 시간 동안 박수를 두 번 칠 때와 네 번 칠 때를 비교해 보세요. 어느 쪽이 더 빠른 느낌인가요?" 손뼉을 같은 시간에 두 번, 네 번 쳐 보이고 칠판에 4분음표 둘과 8분음표 넷을 나란히 적는다. "음표가 촘촘해지면 빨라지는 느낌이에요." 음표 수가 많으면 길이도 길다고 여기는 학생에게 "한 박 안에 몇 개가 들어가는지 보아요"라고 말한다.`,
    is: '같은 시간 동안 박수를 두 번 칠 때와 네 번 칠 때를 비교하고, 리듬에서 빠르게 느껴지는 자리를 찾아봅시다.',
    acts: [
      A(1, '리듬에서 빠르게 느껴지는 자리 찾기', 'pattern',
        `"음표가 촘촘하면 소리가 빠르게 느껴지는 자리예요. 무늬에서 규칙에서 벗어난 곳을 찾아봐요." 무늬를 손뼉으로 쳐 보며 바뀌는 자리를 찾게 한다. 맨 마지막 조각만 틀렸다고 보는 학생에게 "처음부터 박수를 치며 어디에서 느낌이 달라지는지 들어 보아요"라고 말한다.`,
        '무늬를 박수로 쳐 보며 규칙에서 벗어난 자리를 찾아요.', patLv(),
        [
          { prompt: '느린 박만 이어지는 무늬예요. 규칙에 맞지 않는 조각을 눌러 보세요.', toolOptions: { mode: 'odd', seq: ['한 박', '한 박', '한 박', '반 박 둘', '한 박', '한 박'], perRow: 6 }, target: { odd: 3 }, difficulty: 0.15 },
          { prompt: '촘촘한 박이 두 번 이어지다 느려지는 무늬예요. 빈칸을 채워 보세요.', toolOptions: { seq: ['반 박 둘', '반 박 둘', '한 박', '반 박 둘', '반 박 둘', null], palette: ['한 박', '반 박 둘', '두 박'], perRow: 6 }, target: { fill: ['한 박'] }, difficulty: 0.25 },
          { prompt: '소리가 점점 촘촘해지는 무늬예요. 어떤 규칙이 보이나요?', toolOptions: { mode: 'rule', seq: ['두 박', '한 박', '한 박', '반 박 둘', '반 박 둘'], choices: ['시간이 점점 짧은 음표가 늘어요', '음표가 점점 느려져요', '모든 음표가 같아요'], why: ['', '뒤로 갈수록 음표가 더 짧아져요.', '음표 종류가 서로 달라요.'] }, target: { pick: 0 }, difficulty: 0.3 },
        ]),
      A(2, '빠르게 느껴지는 리듬 블록 놓기', 'keyboard',
        `"처음엔 4분음표, 중간부터는 8분음표가 나와요. 박을 맞추어 블록을 놓아요." 4분음표 하나는 한 박, 8분음표 두 개는 한 박임을 짚는다. 8분음표 하나를 한 박으로 세는 학생에게 "작은 음표 둘이 모여야 한 박이에요"라고 알려 준다.`,
        '리듬 듣기를 누르고 들은 리듬을 블록으로 놓아요.', rhy(4, 2),
        [
          R('처음엔 느린 박이다가 끝에서 촘촘해지는 리듬이에요. 듣고 놓아 보세요.', ['q', 'q', 'q', 'q', 'e', 'e', 'e', 'e'], { t: 92, x: { difficulty: 0.15 } }),
          R('처음에 촘촘하다 점점 느려지는 리듬이에요. 듣고 놓아 보세요.', ['e', 'e', 'e', 'e', 'q', 'h', 'h'], { t: 92, x: { difficulty: 0.25 } }),
          R('쉼표가 숨어 있는 촘촘한 리듬이에요. 듣고 놓아 보세요.', ['e', 'e', 'qr', 'e', 'e', 'q', 'q', 'q'], { t: 100, x: { difficulty: 0.3, predict: { q: '8분음표 네 개는 몇 박일까요?', options: ['두 박', '네 박'], answer: 0 }, conclude: '8분음표는 두 개가 한 박이라서 네 개면 두 박이고, 촘촘해지면 빠르게 느껴져요.' } }),
        ]),
    ],
    wt: `"오늘 리듬에서 빠르게 느껴지는 자리를 어떻게 찾았나요?" 음표 모양과 귀로 들은 느낌을 함께 말하게 한다. 출구 2번을 틀린 학생에게는 칠판 음표를 보며 한 박에 몇 개씩 들어가는지 세게 한다.`,
    exit: [
      { type: 'tool', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 2, pattern: ['q', 'q', 'e', 'e', 'q', 'h', 'h'], tempo: 96 }, prompt: '리듬 듣기를 누르고 들은 리듬을 블록으로 놓아 보세요.', target: { rhythm: ['q', 'q', 'e', 'e', 'q', 'h', 'h'] }, difficulty: 0.25 },
      { type: 'choice', prompt: '음표가 촘촘하게 이어지면 소리는 어떻게 느껴질까요?', options: ['더 빠르게 느껴져요', '더 느리게 느껴져요', '아무 차이가 없어요'], answer: 0, difficulty: 0.15, explain: '같은 시간 안에 소리가 더 많이 지나가서 빠르게 느껴져요.' },
      { type: 'mood', prompt: '리듬을 귀와 눈으로 찾아 보니 어땠나요?' },
    ],
    wsTitle: '촘촘해지는 리듬',
    ws: [
      { type: 'figure', prompt: '리듬을 보고 촘촘한 박이 나오는 마디 번호를 쓰세요.', tool: 'keyboard', wide: true, options: { mode: 'rhythm', meter: 4, measures: 2 }, figures: [{ state: { rhythm: ['q', 'q', 'h', 'e', 'e', 'e', 'e', 'q', 'q'] }, caption: '촘촘한 박은 ___째 마디' }], answer: '둘째 마디' },
      { type: 'table', prompt: '한 박 안에 들어가는 음표의 수를 쓰세요.', columns: ['음표', '한 박 안의 수'], cells: [['4분음표', ''], ['8분음표', ''], ['2분음표', '']] },
      { type: 'choice', prompt: '빠르게 느껴지는 리듬은 어느 것일까요?', options: ['4분음표만 이어진 리듬', '8분음표가 많이 이어진 리듬', '2분음표만 이어진 리듬'], answer: '8분음표가 많이 이어진 리듬' },
      { type: 'short', prompt: '내가 만든 리듬에서 빠르게 느껴지는 자리가 어디인지 쓰세요.' },
    ],
    easyNote: '4분음표는 한 박에 하나, 8분음표는 한 박에 둘이 들어가요.',
    easy: [
      { type: 'choice', prompt: '한 박에 둘이 들어가는 음표는 무엇일까요?', options: ['4분음표', '8분음표'], answer: '8분음표' },
      { type: 'blank', prompt: '빈칸을 채우세요.', text: '8분음표가 많으면 소리가 ___ 느껴져요.', answer: '빠르게' },
      { type: 'short', prompt: '박수를 빠르게 칠 때 팔이 어떻게 움직이는지 쓰세요.' },
    ],
    diff: { easy: '맞는 칸에 초록 테두리가 보이고 마디마다 박 수가 보여요.', base: '무늬와 블록을 스스로 확인해요.', challenge: '틀린 칸을 알려 주지 않고 블록에 쉼표 종류가 더 나와요.' },
    notes: '자주 보이는 어려움: ① 음표 수가 많으면 길다고 여긴다 → 한 박 안에 몇 개가 들어가는지 그림으로 보인다. ② 8분음표 하나를 한 박으로 센다 → 둘이 한 박임을 박수로 보인다. ③ 바뀌는 자리를 마지막 조각에서만 찾는다 → 처음부터 박수를 치며 들어 본다.',
  }));


  // ───────────────────────── 13차시 (핵심) ─────────────────────────
  lessons.push(L(13, {
    s: S3, title: '내가 만든 네 마디 소리를 다시 듣고 요소가 들리는지 점검하기',
    obj: '내가 만든 소리를 다시 들으며 살리려던 요소가 드러났는지 마디마다 점검표로 확인할 수 있다.',
    ill: 'a child holding a paper magnifying glass over four paper measure cards while a small paper speaker plays notes', txt: '다시 들어 보기', mot: ['sun', 'cloud', 'hills', 'flower'],
    it: `"지난 시간에 만든 소리를 다시 들어 볼까요? 만들 때는 잘 되었다고 느꼈는데 다시 들으면 어떤가요?" 시연 단추로 점점 빨라지는 네 마디를 한 번 들려주고 "이 소리에서 살리려던 요소가 들렸나요?"를 묻는다. 한 번 들어서 끝내려는 학생에게 "두 번째에는 마디마다 귀를 기울여 보아요"라고 말한다.`,
    is: '내가 만든 네 마디 소리를 다시 들으며, 살리려던 요소가 잘 들리는지 마디마다 점검해 봅시다.',
    demo: { tool: 'keyboard', options: { mode: 'rhythm', meter: 2, measures: 4 }, sequence: [{ rhythm: ['h', 'q', 'q', 'e', 'e', 'e', 'e'] }] },
    acts: [
      A(1, '되돌아보는 차례 정하고 마디마다 점수 매기기', 'timer',
        `"먼저 정한 요소를 떠올리고, 소리를 다시 듣고, 마디마다 점수를 매겨요. 3점은 요소가 또렷하게 들렸을 때예요." 점검표를 칠판에 보여 주며 순서를 정하게 한다. 점수를 모두 3점으로 매기는 학생에게 "정말 모든 마디에서 요소가 들렸나요? 가장 약한 마디를 하나 찾아볼까요?"라고 묻는다.`,
        '되돌아보는 차례대로 카드를 놓고, 마디마다 요소가 얼마나 드러났는지 1~3점으로 적어요.', plain('내 소리 점검', '점'),
        [
          TORDER('만든 소리를 되돌아보는 차례대로 카드를 놓아요.', ['정한 요소를 떠올려요', '소리를 다시 들어요', '마디마다 점수를 적어요', '가장 약한 마디를 골라요'], { difficulty: 0.15 }),
          { prompt: '내 네 마디 소리에서 마디마다 요소가 드러난 정도를 1~3점으로 적어요.', toolOptions: { fields: [{ label: '첫째 마디', unit: '점', max: 3 }, { label: '둘째 마디', unit: '점', max: 3 }, { label: '셋째 마디', unit: '점', max: 3 }, { label: '넷째 마디', unit: '점', max: 3 }] }, target: { records: true }, difficulty: 0.1,
            levels: { easy: { toolOptions: { fields: [{ label: '첫째 마디', unit: '점', max: 3 }, { label: '넷째 마디', unit: '점', max: 3 }] } } } },
          SK('점수를 매긴 까닭을 떠올리며 해낸 것을 표시해요.', ['점수마다 들은 소리를 떠올렸어요', '가장 약한 마디를 하나 골랐어요', '그 마디가 약한 까닭을 한마디로 말했어요'], { x: { difficulty: 0.1 } }),
        ]),
      A(2, '친구 가락을 듣고 따라 치며 요소 들어 보기', 'keyboard',
        `"친구가 만든 가락을 듣고 따라 쳐 보면 요소가 잘 드러났는지 알 수 있어요." 따라 치는 동안 요소가 들리는지 귀를 기울이게 한다. 따라 치기만 하고 요소를 말하지 않는 학생에게 "느리게 하려고 했다면 어디가 느리게 들렸나요?"라고 묻는다.`,
        '친구가 만든 가락을 듣고 따라 친 뒤, 요소가 드러났는지 점검 목록을 표시해요.', mel(),
        [
          K('친구가 점점 빨라지게 만든 가락이에요. 처음엔 느리게 들려줘요. 듣고 따라 쳐 보세요.', ['도', '미', '솔', '라', '솔'], { t: 60, x: { difficulty: 0.15 } }),
          K('친구가 여리게 시작해 끝을 또렷하게 만든 가락이에요. 듣고 따라 쳐 보세요.', ['솔', '솔', '라', '시', '높은도'], { t: 100, x: { difficulty: 0.25 } }),
          SK('친구의 가락을 두 번 들은 뒤 요소가 드러났는지 점검 목록에 표시해요.', ['친구가 살리려던 요소를 먼저 물어보았어요', '그 요소가 들린 마디를 말했어요', '더 뚜렷해질 수 있는 마디를 하나 말했어요'], { x: { difficulty: 0.1 } }),
        ]),
    ],
    wt: `"오늘 다시 들으며 내 소리의 어느 마디가 가장 약했나요? 왜 그렇게 생각했나요?" 약한 마디와 까닭을 함께 말하게 한다. 출구 2번에서 '한 번 만들었으니 끝'을 고른 학생에게는 "다음 시간에 고쳐서 더 좋게 만들어 보자"라고 말해 준다.`,
    exit: [
      { type: 'tool', tool: 'timer', options: { cards: ['가장 약한 마디를 골라요', '소리를 다시 들어요', '정한 요소를 떠올려요'] }, prompt: '되돌아보는 차례대로 카드를 놓아 보세요.', target: { order: ['정한 요소를 떠올려요', '소리를 다시 들어요', '가장 약한 마디를 골라요'] }, difficulty: 0.15 },
      { type: 'choice', prompt: '만든 소리를 다시 듣는 까닭은 무엇일까요?', options: ['살리려던 요소가 잘 들리는지 확인하려고', '한 번 들었으니 더 들을 필요가 없어서', '친구보다 먼저 끝내려고'], answer: 0, difficulty: 0.15, explain: '다시 들어야 요소가 들리는지, 어디를 더 살릴지 알 수 있어요.' },
      { type: 'mood', prompt: '내 소리를 다시 들어 보니 어땠나요?' },
    ],
    wsTitle: '내 소리 점검표',
    ws: [
      { type: 'table', prompt: '내 소리를 마디마다 1~3점으로 점검하고 까닭을 쓰세요.', columns: ['마디', '점수', '까닭'], cells: [['첫째', '', ''], ['둘째', '', ''], ['셋째', '', ''], ['넷째', '', '']] },
      { type: 'figure', prompt: '선생님이 들려주는 가락을 듣고 빈칸에 계이름을 쓰세요.', tool: 'keyboard', wide: true, options: { from: '도', to: '높은도', printNames: true, printBoxes: 5 }, figures: [{ caption: '요소가 들린 곳에 ✓ 하세요. ( 처음 · 가운데 · 끝 )' }], answer: '도 미 솔 라 솔 — 끝' },
      { type: 'choice', prompt: '점수를 매길 때 좋은 태도에 ○ 하세요.', options: ['들은 소리를 떠올리며 점수를 매겨요', '무조건 3점을 줘요', '점수는 친구가 정해 줘요'], answer: '들은 소리를 떠올리며 점수를 매겨요' },
      { type: 'short', prompt: '내 소리에서 가장 약한 마디와 그 까닭을 쓰세요.' },
    ],
    easyNote: '다시 듣기는 요소가 들리는지 확인하는 일이에요. 마디마다 귀를 기울여요.',
    easy: [
      { type: 'choice', prompt: '3점은 어떤 뜻일까요?', options: ['요소가 또렷하게 들렸어요', '요소가 거의 안 들렸어요'], answer: '요소가 또렷하게 들렸어요' },
      { type: 'blank', prompt: '빈칸을 채우세요.', text: '만든 소리는 다시 ___ 요소가 들리는지 확인해요.', answer: '들으며' },
      { type: 'short', prompt: '오늘 내 소리에서 마음에 든 마디를 쓰세요.' },
    ],
    diff: { easy: '점검표가 두 마디만 나오고 카드를 놓을 때 맞는 자리에 초록 테두리가 보여요.', base: '네 마디를 모두 점검하고 스스로 확인해요.', challenge: '틀린 자리를 알려 주지 않고 계이름 없이 따라 쳐요.' },
    notes: '자주 보이는 어려움: ① 한 번 만든 것은 고치면 안 된다고 여긴다 → 고칠수록 요소가 더 또렷해진다고 말해 준다. ② 점수를 모두 3점으로 매긴다 → 가장 약한 마디를 꼭 하나 고르게 한다. ③ 친구 소리를 듣고 칭찬만 한다 → 요소가 어느 마디에서 들렸는지 말하게 한다.',
  }));

  // ───────────────────────── 14차시 (연습) ─────────────────────────
  lessons.push(L(14, {
    s: S3, title: '들린 마디와 약한 마디를 나누고 고칠 곳 하나 정하기',
    obj: '마디별 설명 카드를 요소가 드러난 마디와 약한 마디로 나누고, 고칠 마디를 하나 골라 고칠 방법을 말할 수 있다.',
    ill: 'four paper measure cards in a row, two glowing softly and two gray, with a small paper pencil hovering over a gray card', txt: '고칠 곳 찾기', mot: ['sun', 'hills', 'tree', 'flower'],
    it: `"요소가 잘 들린 마디와 약한 마디를 나누면 어디를 고쳐야 하는지 보여요." 칠판에 마디 카드 네 장을 붙이고 학생 하나가 하나씩 읽게 한다. "고칠 곳이 많으면 다 고쳐야 할까요?" 하고 물어 하나만 골라 뚜렷하게 하는 것이 좋다고 정리한다. 모든 마디를 고치려는 학생에게 "가장 약한 곳 하나만 바꾸면 소리가 어떻게 달라질까요?"라고 묻는다.`,
    is: '마디 설명을 읽고 요소가 잘 들린 마디와 약한 마디로 나눠 봅시다.',
    acts: [
      A(1, '마디 설명을 요소가 들린 쪽과 약한 쪽으로 나누기', 'mindmap',
        `"점검한 말을 읽고 요소가 또렷하게 드러난 말인지, 아직 약한 말인지 나눠 봐요." 말을 소리 내어 읽고 근거를 말하게 한다. 약하다는 말을 나쁘다는 말로 받아들이는 학생에게 "약한 곳은 더 좋아질 자리예요"라고 알려 준다.`,
        '점검한 말을 읽고, 요소가 드러난 마디와 아직 약한 마디로 나누어요.', cardsLv(),
        [
          SORT('점검한 말을 요소가 드러났는지에 따라 나누어 보세요.', '내 소리 점검', { '요소가 드러났어요': ['첫 마디가 느려서 천천히 시작되는 것이 들렸어요'], '아직 약해요': ['셋째 마디가 갑자기 빨라져서 들쭉날쭉해요'] }, null, { difficulty: 0.1 }),
          SORT('셈여림을 살리려던 소리의 점검 말을 나누어 보세요.', '셈여림 점검', { '요소가 드러났어요': ['끝 마디에서 소리가 점점 커져요', '첫 마디는 속삭이듯 작게 시작해요'], '아직 약해요': ['소리 크기가 모두 비슷하게 들려요', '세게 치다 중간에서 흐트러져요'] }, null, { difficulty: 0.2 }),
          SORT('빠르기를 살리려던 소리의 점검 말을 나누어 보세요. 점검과 상관없는 카드는 두어요.', '빠르기 점검', { '요소가 드러났어요': ['마지막으로 갈수록 박이 촘촘해져요'], '아직 약해요': ['처음과 끝의 빠르기가 같게 들려요'] }, ['색깔이 예쁘게 칠해졌어요'], { difficulty: 0.3 }),
        ]),
      A(2, '고쳐 보고 싶은 마디 고르기', 'mindmap',
        `"고칠 곳을 고르는 기준은 요소가 약한 마디예요. 마디의 설명을 읽고 먼저 고칠 마디를 골라 보세요." 고르는 근거를 말로 한 번 더 말하게 한다. 가장 쉬운 마디만 고치려는 학생에게 "정한 요소에 가장 가까운 곳은 어디인가요?"라고 묻는다.`,
        '마디 설명 카드에서 먼저 고쳐야 할 마디만 골라요.', cardsLv(),
        [
          PICK('요소가 약해서 먼저 고쳐야 할 마디 카드만 골라 보세요.', '고칠 마디', '먼저 고칠 마디', ['셋째 마디: 박이 흐트러졌어요', '넷째 마디: 끝인데 느려지지 않았어요'], ['첫째 마디: 천천히 시작해서 좋았어요', '둘째 마디: 음이 또렷해요'], { difficulty: 0.15 }),
          PICK('셈여림이 약한 마디 카드만 골라 보세요.', '셈여림 점검', '약한 마디', ['둘째 마디: 세기가 똑같아요'], ['첫째 마디: 여리게 시작했어요', '셋째 마디: 점점 세게 되었어요'], { difficulty: 0.25 }),
          PICK('빠르기가 뚜렷하지 않은 마디 카드만 골라 보세요.', '빠르기 점검', '뚜렷하지 않은 마디', ['첫째 마디: 처음이 이미 빨라요', '셋째 마디: 중간에서 속도가 뒤섞여요'], ['둘째 마디: 점점 빨라져요', '넷째 마디: 끝에서 가장 빨라져요'], { difficulty: 0.3 }),
        ]),
    ],
    wt: `"고칠 곳을 하나만 고른다면 어느 마디이고 어떻게 바꾸겠어요?" 마디와 방법을 한 문장으로 말하게 한다. 출구 2번에서 '모든 마디를 고친다'를 고른 학생에게는 하나만 고쳐도 변화가 크다는 것을 보여 준다.`,
    exit: [
      { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '고칠 마디', basket: '먼저 고칠 마디', cards: ['둘째 마디: 소리가 또렷해요', '셋째 마디: 세기가 들쭉날쭉해요', '넷째 마디: 끝이 아주 좋아요'] }, prompt: '요소가 약해서 먼저 고칠 마디만 골라 보세요.', target: { pick: ['셋째 마디: 세기가 들쭉날쭉해요'] }, difficulty: 0.2 },
      { type: 'choice', prompt: '내 소리를 고칠 곳을 고르는 좋은 방법은 무엇일까요?', options: ['요소가 가장 약한 마디를 고른다', '가장 쉬운 마디를 고른다', '모든 마디를 한꺼번에 바꾼다'], answer: 0, difficulty: 0.2, explain: '요소가 약한 마디를 고쳐야 정한 요소가 더 뚜렷해져요.' },
      { type: 'mood', prompt: '고칠 곳을 찾아보니 어땠나요?' },
    ],
    wsTitle: '고칠 곳 정하기',
    ws: [
      { type: 'table', prompt: '내 소리의 마디마다 점검하고, 가장 약한 마디에 ○ 하세요.', columns: ['마디', '요소가 들렸나요? (예·아니요)', '○'], cells: [['첫째', '', ''], ['둘째', '', ''], ['셋째', '', ''], ['넷째', '', '']] },
      { type: 'choice', prompt: '고칠 곳이 여러 군데일 때 어떻게 할까요?', options: ['가장 약한 곳부터 하나 고쳐요', '아무 데나 고쳐요', '한 번에 모두 고쳐요'], answer: '가장 약한 곳부터 하나 고쳐요' },
      { type: 'blank', prompt: '빈칸을 채우세요.', text: '약한 마디는 나쁜 곳이 아니라 더 ___ 질 자리예요.', answer: '좋아' },
      { type: 'short', prompt: '내 소리에서 먼저 고칠 마디와 바꿀 방법을 쓰세요.' },
    ],
    easyNote: '약한 마디는 요소가 잘 안 들린 마디예요. 약한 마디 하나를 골라 고쳐요.',
    easy: [
      { type: 'choice', prompt: '먼저 고칠 마디는 어떤 마디일까요?', options: ['요소가 약한 마디', '이미 잘 들리는 마디'], answer: '요소가 약한 마디' },
      { type: 'blank', prompt: '빈칸을 채우세요.', text: '약한 마디를 ___ 개 먼저 고쳐요.', answer: '한' },
      { type: 'short', prompt: '내 소리에서 마음에 든 마디를 쓰세요.' },
    ],
    diff: { easy: '맞게 넣은 카드에 초록 테두리가 보여요.', base: '카드를 스스로 확인해요.', challenge: '카드 수가 늘고 틀린 카드를 알려 주지 않아요.' },
    notes: '자주 보이는 어려움: ① 약하다는 말을 잘못이라 받아들인다 → 약한 곳은 더 좋아질 곳이라고 말해 준다. ② 모두 고쳐야 한다고 여긴다 → 하나만 고쳐도 소리가 달라지는 것을 한 번 들려준다. ③ 고칠 곳을 쉬운 곳으로 고른다 → 요소가 약한 마디가 기준임을 다시 짚는다.',
  }));

  // ───────────────────────── 15차시 (확장) ─────────────────────────
  lessons.push(L(15, {
    s: S3, title: '약한 마디의 요소를 더 뚜렷하게 바꿔 다시 만들기',
    obj: '약한 마디에서 빠르기나 셈여림을 더 뚜렷하게 바꾸어 소리를 다시 만들고 연주할 수 있다.',
    ill: 'a paper hand turning a dial on one paper measure card so the notes on it grow larger and clearer than before', txt: '다시 만들기', mot: ['sun', 'cloud', 'hills', 'tree'],
    it: `"고칠 곳을 찾았으니 이제 바꿔 볼 차례예요. 어떻게 바꾸면 요소가 더 뚜렷해질까요?" 칠판에 '느리게'를 더 느리게, '세게'를 더 세게 바꾸어 보며 차이를 들려준다. "한 번 만든 것을 고쳐도 되나요?" 하고 묻고 고쳐 쓰는 것이 창작의 한 부분임을 알려 준다. 모든 마디를 바꾸려는 학생에게 "약한 마디만 바꾸고 나머지는 그대로 둬 보아요"라고 말한다.`,
    is: '약한 마디를 어떻게 바꾸면 요소가 더 뚜렷해질지 생각하고, 바꾼 소리를 쳐 봅시다.',
    acts: [
      A(1, '바꾸는 방법을 문장 빈칸에 알맞게 채우기', 'story',
        `"어떻게 바꾸었는지 문장으로 말해 볼게요. 빈칸에 알맞은 말을 넣어요." 완성된 문장을 소리 내어 읽게 한다. 방법을 말하지 않고 '좋게'라고만 하는 학생에게 "무엇을 어떻게 바꾸었는지 한 가지로 말해 볼까요?"라고 묻는다.`,
        '문장의 빈칸에 알맞은 말 카드를 넣어요.', cardsLv(),
        [
          FILL('빠르기를 더 뚜렷하게 바꾼 방법의 빈칸을 채워 보세요.', '마지막 마디를 ___ 쳐서 점점 빨라지는 것이 들리게 했어요.', '더 촘촘하게', ['더 촘촘하게', '더 길게', '한 음씩 쉬며'], { difficulty: 0.1 }),
          FILL('셈여림을 더 뚜렷하게 바꾼 방법의 빈칸을 채워 보세요.', '첫 마디를 ___ 쳐서 끝의 센 소리와 차이가 나게 했어요.', '더 여리게', ['더 여리게', '더 빠르게', '더 길게'], { difficulty: 0.2 }),
          FILL('바꾼 뒤 확인하는 말의 빈칸을 채워 보세요.', '바꾼 소리를 다시 ___ 요소가 더 뚜렷해졌는지 확인했어요.', '들으며', ['들으며', '잊어버리고', '지우고'], { difficulty: 0.3, predict: { q: '바꾼 뒤에도 다시 들어 보아야 할까요?', options: ['네, 확인해야 해요', '아니요, 바로 끝내요'], answer: 0 }, conclude: '바꾼 뒤에도 다시 들어 보아야 요소가 더 뚜렷해졌는지 알 수 있어요.' }),
        ]),
      A(2, '약한 마디를 고쳐 다시 가락 짓기', 'keyboard',
        `"지난번 가락보다 요소가 더 또렷해지도록 마지막 마디를 바꿔 만들어요." 다시 만든 가락을 두 번 쳐서 이전과 비교해 보게 한다. 가락을 처음부터 전부 새로 짓는 학생에게 "고친 곳만 바꾸면 비교하기 쉬워요"라고 말한다.`,
        '약한 마디를 더 뚜렷하게 바꾸어 가락을 다시 짓고, 점검 목록을 표시해요.', mel(),
        [
          CP('도로 시작해 높은도로 끝나는 여덟 음 가락을 다시 지어요. 끝이 뚜렷하게 올라가도록 해요.', { length: 8, startOn: '도', endOn: '높은도' }, ['고치기 전보다 요소가 더 뚜렷해졌어요', '고친 마디가 어디인지 말할 수 있어요'], { x: { difficulty: 0.2 } }),
          CP('솔·라·시만 써서 여섯 음 가락을 다시 지어요. 소리가 점점 높아지게 해요.', { length: 6, only: ['솔', '라', '시'] }, ['처음보다 점점 높아져요', '고친 까닭을 한마디로 말했어요'], { x: { difficulty: 0.25 } }),
          R('네 마디 리듬을 다시 지어요. 점점 촘촘해지도록 8분음표를 꼭 넣어요.', null, { x: { toolOptions: { mode: 'rhythm', meter: 2, measures: 4 }, target: { beats: true, use: ['e'] }, difficulty: 0.3, reveal: 'after-check', conclude: '8분음표를 늘리면 빨라지는 느낌을 더 뚜렷하게 만들 수 있어요.' } }),
          SK('고치기 전과 후를 모둠에게 들려주고 해낸 것을 표시해요.', ['고치기 전 소리를 먼저 들려주었어요', '고친 소리가 더 뚜렷하다고 말한 친구가 있었어요', '아직 약한 곳이 있다면 하나 찾았어요'], { x: { difficulty: 0.1 } }),
        ]),
    ],
    wt: `"고치기 전과 후 어떤 차이가 있었나요? 어느 마디를 어떻게 바꿨나요?" 비교해서 말하게 한다. 출구 2번을 틀린 학생에게는 두 소리를 번갈아 들려주며 차이를 찾게 한다.`,
    exit: [
      { type: 'tool', tool: 'story', options: { mode: 'fill', slots: [{ id: 'h1', label: '끝 마디를 ___ 쳐서 소리가 점점 커지게 했어요.' }], cards: ['점점 세게', '더 길게', '더 낮게'] }, prompt: '문장의 빈칸에 알맞은 말을 넣어 보세요.', target: { fill: { h1: '점점 세게' } }, difficulty: 0.2 },
      { type: 'choice', prompt: '약한 마디를 고칠 때 가장 중요한 것은 무엇일까요?', options: ['정한 요소가 더 뚜렷해지게 하기', '음을 더 많이 넣기', '다른 사람 소리와 똑같이 하기'], answer: 0, difficulty: 0.2, explain: '고치는 목적은 정한 요소를 더 뚜렷하게 하는 것이에요.' },
      { type: 'mood', prompt: '다시 만들어 보니 어땠나요?' },
    ],
    wsTitle: '다시 만든 소리 기록',
    ws: [
      { type: 'table', prompt: '고치기 전과 후를 쓰세요.', columns: ['', '고치기 전', '고친 후'], cells: [['어느 마디', '', ''], ['어떻게 바꿨나요', '', ''], ['더 뚜렷해졌나요', '', '']] },
      { type: 'figure', prompt: '리듬을 보고 첫째 마디와 둘째 마디의 박 수를 쓰세요.', tool: 'keyboard', wide: true, options: { mode: 'rhythm', meter: 2, measures: 4 }, figures: [{ state: { rhythm: ['q', 'q', 'e', 'e', 'q', 'e', 'e', 'e', 'e'] }, caption: '첫째 마디 ___박, 둘째 마디 ___박' }], answer: '첫째 마디 2박, 둘째 마디 2박' },
      { type: 'choice', prompt: '요소를 더 뚜렷하게 바꾼 사람의 말에 ○ 하세요.', options: ['마지막 마디를 더 촘촘하게 바꿔서 빨라지는 느낌이 더 들어요', '음을 많이 넣어서 길어졌어요', '아무것도 바꾸지 않았어요'], answer: '마지막 마디를 더 촘촘하게 바꿔서 빨라지는 느낌이 더 들어요' },
      { type: 'short', prompt: '다시 만든 소리에서 바꾼 것 한 가지와 달라진 점을 쓰세요.' },
    ],
    easyNote: '고칠 때는 약한 마디만 바꾸고 다시 들어 봐요.',
    easy: [
      { type: 'choice', prompt: '고친 뒤에는 무엇을 하면 좋을까요?', options: ['다시 들어 확인해요', '바로 끝내요'], answer: '다시 들어 확인해요' },
      { type: 'blank', prompt: '빈칸을 채우세요.', text: '약한 ___만 바꾸고 나머지는 그대로 둬요.', answer: '마디' },
      { type: 'short', prompt: '내가 바꾼 마디를 쓰세요.' },
    ],
    diff: { easy: '맞게 넣은 카드에 초록 테두리가 보이고 가락이 들리는 동안 건반이 빛나요.', base: '카드와 가락을 스스로 확인해요.', challenge: '계이름 없이 짓고 틀린 곳을 알려 주지 않아요.' },
    notes: '자주 보이는 어려움: ① 고친다고 하면서 처음부터 다시 짓는다 → 고칠 마디만 바꾸게 한다. ② 어떻게 바꿨는지 말하지 못한다 → 문장 빈칸으로 방법을 말하게 한다. ③ 고친 뒤 다시 듣지 않는다 → 두 소리를 번갈아 듣게 한다.',
  }));

  // ───────────────────────── 16차시 (확장) ─────────────────────────
  lessons.push(L(16, {
    s: S3, title: '다시 만든 소리를 짝에게 들려주고 변화에 대해 이야기하기',
    obj: '다시 만든 소리를 짝에게 들려주고 요소가 어떻게 달라졌는지 근거를 들어 말할 수 있다.',
    ill: 'two paper children sitting side by side listening to a small paper speaker while speech bubbles with notes float between them', txt: '짝에게 들려주기', mot: ['sun', 'cloud', 'hills', 'flower'],
    it: `"짝에게 들려줄 때는 먼저 무엇을 살리려 했는지 말해 주면 좋아요. 그런 다음 소리를 듣게 해요." 칠판에 칭찬하는 말과 제안하는 말 틀을 하나씩 적는다. "좋아요라고만 말하면 어떨까요?" 하고 묻고 요소와 마디를 말하는 근거 있는 말이 도움이 된다고 알려 준다. 칭찬만 하는 학생에게 "어느 마디가 더 또렷해졌는지도 말해 볼까요?"라고 묻는다.`,
    is: '다시 만든 소리를 짝에게 들려주고, 좋아진 점과 더 바꿀 점을 근거를 들어 말해 봅시다.',
    acts: [
      A(1, '칭찬과 제안 문장에 알맞은 말 넣기', 'story',
        `"칭찬은 어느 마디에서 어떤 요소가 들렸는지를 말하고, 제안은 더 바꾸면 좋을 점을 말해요." 문장을 완성한 뒤 짝에게 소리 내어 읽어 주게 한다. 좋다는 말만 넣는 학생에게 "무엇이 어떻게 좋은지 낱말로 바꿔 볼까요?"라고 묻는다.`,
        '문장의 빈칸에 알맞은 낱말 카드를 넣어요.', cardsLv(),
        [
          FILL('칭찬 문장의 빈칸을 채워 보세요.', '끝 마디에서 ___가 점점 빨라져서 정한 요소가 잘 들렸어.', '박', ['박', '색깔', '이름'], { difficulty: 0.1 }),
          FILL('제안 문장의 빈칸을 채워 보세요.', '셋째 마디의 세기를 ___ 하면 점점 세지는 것이 더 뚜렷해질 것 같아.', '더 크게', ['더 크게', '더 길게', '더 짧게'], { difficulty: 0.2 }),
          FILL('비교하는 말의 빈칸을 채워 보세요.', '고치기 전보다 첫 마디가 ___ 들려서 차이가 잘 느껴져.', '더 여리게', ['더 여리게', '더 낮게', '더 오래'], { difficulty: 0.3 }),
        ]),
      A(2, '두 번 들려주고 비교해 기록하기', 'timer',
        `"짝의 소리를 두 번 듣고 고치기 전과 후를 점수로 비교해요. 점수가 올랐다면 어느 마디가 달라졌는지 말해 보세요." 점수만 적고 말하지 않는 학생에게 "점수가 올라간 까닭을 한마디로 말해 볼까요?"라고 묻는다.`,
        '짝의 소리를 두 번 듣고 점수를 적은 뒤, 점검 목록에 표시해요.', plain('짝에게 들려주기', '점'),
        [
          { prompt: '고치기 전과 후의 요소가 드러난 정도를 1~3점으로 적어요.', toolOptions: { fields: [{ label: '고치기 전', unit: '점', max: 3 }, { label: '고친 후', unit: '점', max: 3 }] }, target: { records: true }, difficulty: 0.1 },
          TORDER('짝에게 들려주고 이야기하는 차례대로 카드를 놓아요.', ['무엇을 살렸는지 말해 줘요', '소리를 한 번 들려줘요', '짝이 들은 것을 말해요', '더 바꿀 점을 이야기해요'], { difficulty: 0.2 }),
          SK('짝과 이야기한 뒤 해낸 것을 표시해요.', ['살리려던 요소를 먼저 말했어요', '짝이 어느 마디가 들렸는지 말했어요', '다음에 바꿀 점을 하나 정했어요'], { x: { difficulty: 0.1 } }),
        ]),
    ],
    wt: `"짝의 소리에서 좋아진 점을 어느 마디에서 어떤 요소로 말했나요?" 칭찬 한 문장을 말하게 한다. 출구 2번을 틀린 학생에게는 근거가 있는 칭찬 틀을 다시 보여 준다.`,
    exit: [
      { type: 'tool', tool: 'story', options: { mode: 'fill', slots: [{ id: 'k1', label: '마지막 마디가 ___ 들려서 요소가 잘 느껴졌어.' }], cards: ['더 뚜렷하게', '더 어둡게', '더 길게'] }, prompt: '문장의 빈칸에 알맞은 말을 넣어 보세요.', target: { fill: { k1: '더 뚜렷하게' } }, difficulty: 0.15 },
      { type: 'choice', prompt: '짝에게 도움이 되는 말은 어느 것일까요?', options: ['둘째 마디에서 점점 빨라지는 것이 잘 들려', '그냥 좋아', '난 잘 모르겠어'], answer: 0, difficulty: 0.15, explain: '어느 마디에서 어떤 요소가 들렸는지 말하면 짝이 어디를 살릴지 알 수 있어요.' },
      { type: 'mood', prompt: '짝과 소리 이야기를 나눠 보니 어땠나요?' },
    ],
    wsTitle: '짝에게 들려주기',
    ws: [
      { type: 'table', prompt: '짝의 소리를 듣고 칭찬과 제안을 쓰세요.', columns: ['', '내가 한 말'], cells: [['칭찬(어느 마디·어떤 요소)', ''], ['제안(더 바꿀 점)', '']] },
      { type: 'choice', prompt: '근거 있는 칭찬에 ○ 하세요.', options: ['첫 마디가 여려서 끝의 센 소리와 차이가 커', '잘했어', '재미있어'], answer: '첫 마디가 여려서 끝의 센 소리와 차이가 커' },
      { type: 'blank', prompt: '빈칸을 채우세요.', text: '이야기를 나눌 때는 먼저 살리려던 ___를 말해요.', answer: '요소' },
      { type: 'short', prompt: '짝의 이야기를 듣고 다음에 바꾸고 싶은 점을 쓰세요.' },
    ],
    easyNote: '칭찬과 제안에는 마디와 요소를 넣어 말해요.',
    easy: [
      { type: 'choice', prompt: '도움이 되는 말은 어느 것일까요?', options: ['끝 마디가 점점 세게 들려서 좋아', '그냥 좋아'], answer: '끝 마디가 점점 세게 들려서 좋아' },
      { type: 'blank', prompt: '빈칸을 채우세요.', text: '칭찬할 때는 어느 ___에서 요소가 들렸는지 말해요.', answer: '마디' },
      { type: 'short', prompt: '짝에게 하고 싶은 칭찬 한마디를 쓰세요.' },
    ],
    diff: { easy: '맞게 넣은 카드에 초록 테두리가 보이고 점검표가 두 칸만 나와요.', base: '카드와 점검표를 스스로 확인해요.', challenge: '틀린 칸을 알려 주지 않고 문장 빈칸의 보기가 늘어요.' },
    notes: '자주 보이는 어려움: ① 좋다는 말만 한다 → 어느 마디, 어떤 요소인지 낱말을 넣게 한다. ② 제안을 비판으로 받아들인다 → 제안은 더 좋아지게 돕는 말이라고 알려 준다. ③ 점수만 적고 까닭이 없다 → 한마디라도 말하게 한다.',
  }));


  // ───────────────────────── 17차시 (핵심) ─────────────────────────
  lessons.push(L(17, {
    s: S4, title: '학교 안 소리를 나는 자리와 함께 목록으로 적기',
    obj: '학교 안에서 들리는 소리를 찾아 나는 자리와 함께 목록으로 적을 수 있다.',
    ill: 'a cutaway paper school building with a classroom, a hallway and a playground, each with small paper notes and sound bubbles floating out', txt: '학교의 소리 지도', mot: ['sun', 'house', 'tree', 'hills'],
    it: `"눈을 감고 1분만 귀를 기울여 볼까요? 지금 교실에서 어떤 소리가 들리나요?" 학생들이 말한 소리를 칠판에 적고, 그 소리가 교실 안인지 복도나 운동장인지 함께 말하게 한다. "소리마다 나는 자리가 있어요. 목록에 자리를 함께 적으면 소리 지도가 돼요." 소리 이름만 적는 학생에게 "그 소리는 어디에서 났나요?"라고 되묻는다.`,
    is: '학교 안에서 들리는 소리를 떠올려 보고, 어디에서 나는 소리인지 함께 말해 봅시다.',
    acts: [
      A(1, '소리를 나는 자리에 따라 나누기', 'mindmap',
        `"소리를 카드에서 읽고 어디에서 들리는 소리인지 나눠 봐요. 같은 소리가 두 군데에서 날 수도 있어요." 자리가 분명하지 않으면 가장 가까이에서 들리는 곳을 고르게 한다. 소리가 나는 자리를 한 군데만 고집하는 학생에게 "다른 곳에서도 비슷한 소리가 날까요?"라고 묻는다.`,
        '소리 카드를 읽고, 나는 자리에 따라 교실·복도·운동장으로 나누어요.', cardsLv(),
        [
          SORT('학교 소리를 나는 자리에 따라 나누어 보세요.', '학교의 소리', { 교실: ['연필 사각사각', '책장 넘기는 소리'], 복도: ['실내화 끄는 소리'], 운동장: ['공 튀는 소리'] }, null, { difficulty: 0.1 }),
          SORT('아침부터 점심까지 들은 소리를 자리에 따라 나누어 보세요.', '하루의 소리', { 교실: ['출석을 부르는 소리', '의자를 당기는 소리'], 복도: ['급식 카트 굴러가는 소리'], 운동장: ['호루라기 소리', '줄넘기 돌아가는 소리'] }, null, { difficulty: 0.2 }),
          SORT('소리를 나는 자리에 따라 나누어 보세요. 학교에서 나지 않는 소리는 두어요.', '소리의 자리', { 교실: ['칠판에 분필 쓰는 소리'], 복도: ['교실 문이 드르륵 열려요'], 운동장: ['달리기 하는 발소리'] }, ['바다 파도치는 소리'], { difficulty: 0.3 }),
        ]),
      A(2, '소리 목록 만들기', 'timer',
        `"학교 안을 돌며 들은 소리를 자리별로 몇 가지 적었는지 세어 볼게요." 소리를 적을 때는 이름과 자리를 함께 적도록 한다. 돌아다닐 때는 줄을 서서 걷고 뛰지 않는다고 미리 말한다. 적은 수가 적다고 속상해하는 학생에게 "귀를 기울이는 것이 먼저예요"라고 말해 준다.`,
        '소리를 적은 수를 자리별로 적고, 목록을 잘 만들었는지 점검 목록에 표시해요.', plain('학교 소리 목록', '가지'),
        [
          { prompt: '학교에서 들은 소리를 자리마다 몇 가지씩 적었는지 적어요.', toolOptions: { fields: [{ label: '교실에서', unit: '가지' }, { label: '복도에서', unit: '가지' }, { label: '운동장에서', unit: '가지' }] }, target: { records: true }, difficulty: 0.1 },
          TORDER('소리 목록을 만드는 차례대로 카드를 놓아요.', ['귀를 기울여 소리를 들어요', '들은 소리를 이름으로 적어요', '나는 자리를 함께 적어요', '비슷한 소리끼리 묶어 봐요'], { difficulty: 0.2 }),
          SK('목록을 다시 읽어 보고 잘 만든 것을 점검 목록에 표시해요.', ['소리마다 나는 자리를 적었어요', '들리는 대로 소리를 흉내 내어 적었어요', '아직 못 들은 소리를 하나 더 찾았어요'], { x: { difficulty: 0.1 } }),
        ]),
    ],
    wt: `"오늘 학교에서 가장 신기했던 소리는 무엇이고 어디에서 났나요?" 소리 이름과 자리를 함께 말하게 한다. 출구 2번에서 '소리 이름만 적으면 돼요'를 고른 학생에게는 "나는 자리까지 적으면 소리 지도가 돼요"라고 말해 준다.`,
    exit: [
      { type: 'tool', tool: 'mindmap', options: { topic: '학교의 소리', slots: ['도서관', '급식실'], cards: ['책장을 조심스럽게 넘기는 소리', '식판이 달그락거리는 소리'] }, prompt: '소리를 나는 자리에 알맞게 넣어 보세요.', target: { sort: { 도서관: ['책장을 조심스럽게 넘기는 소리'], 급식실: ['식판이 달그락거리는 소리'] } }, difficulty: 0.15 },
      { type: 'choice', prompt: '소리 목록에 나는 자리를 함께 적는 까닭은 무엇일까요?', options: ['소리가 어디에서 나는지 알 수 있어서', '글씨를 더 쓰려고', '자리는 중요하지 않아서'], answer: 0, difficulty: 0.15, explain: '자리가 있으면 장면 음악을 만들 때 소리를 어디에 둘지 알 수 있어요.' },
      { type: 'mood', prompt: '학교 소리에 귀를 기울여 보니 어땠나요?' },
    ],
    wsTitle: '학교 소리 목록',
    ws: [
      { type: 'table', prompt: '학교에서 들은 소리를 자리와 함께 쓰세요.', columns: ['자리', '들은 소리', '흉내 내는 말'], cells: [['교실', '', ''], ['복도', '', ''], ['운동장', '', '']] },
      { type: 'choice', prompt: '소리 목록에 꼭 들어가야 하는 것에 ○ 하세요.', options: ['소리 이름과 나는 자리', '소리의 값', '소리가 비싼지'], answer: '소리 이름과 나는 자리' },
      { type: 'blank', prompt: '빈칸을 채우세요.', text: '귀를 ___ 울이면 평소에 못 듣던 소리가 들려요.', answer: '기' },
      { type: 'short', prompt: '내가 가장 좋아하는 학교 소리와 그 소리가 나는 자리를 쓰세요.' },
    ],
    easyNote: '소리 목록은 소리 이름과 나는 자리를 함께 적어요.',
    easy: [
      { type: 'choice', prompt: '칠판에 분필로 쓰는 소리는 어디에서 날까요?', options: ['교실', '운동장'], answer: '교실' },
      { type: 'blank', prompt: '빈칸을 채우세요.', text: '목록에는 소리와 나는 ___를 함께 적어요.', answer: '자리' },
      { type: 'short', prompt: '오늘 들은 소리 하나를 쓰세요.' },
    ],
    diff: { easy: '맞는 칸에 넣으면 초록 테두리가 보이고 기록칸이 두 칸만 나와요.', base: '카드와 기록을 스스로 확인해요.', challenge: '카드 수가 늘고 틀린 카드를 알려 주지 않아요.' },
    notes: '자주 보이는 어려움: ① 소리 이름만 적고 자리를 적지 않는다 → 소리마다 어디인지 한마디 덧붙이게 한다. ② 시끄러운 소리만 적는다 → 귀를 기울이면 작은 소리도 있음을 알려 준다. ③ 돌아다니며 뛴다 → 줄을 서서 걷도록 미리 약속한다.',
  }));

  // ───────────────────────── 18차시 (연습) ─────────────────────────
  lessons.push(L(18, {
    s: S4, title: '되풀이되는 소리와 한 번뿐인 소리로 갈라 표시하기',
    obj: '학교에서 찾은 소리를 되풀이되는 소리와 한 번뿐인 소리로 갈라 표시하고 되풀이 소리를 리듬 블록으로 나타낼 수 있다.',
    ill: 'a paper bouncing ball leaving a trail of repeated circles beside a single paper bell that has just rung once', txt: '반복? 한 번?', mot: ['sun', 'hills', 'flower', 'tree'],
    it: `"공 튀는 소리와 교실 문 닫는 소리를 흉내 내 볼까요? 어느 소리가 계속 이어지나요?" 두 소리를 손으로 쳐 보이며 비교하게 한다. 되풀이되는 소리는 규칙이 있어 음악의 재료로 쓰기 좋다고 말한다. 한 번뿐인 소리는 음악이 못 된다고 여기는 학생에게 "한 번 나는 소리도 장면의 시작이나 끝에 쓸 수 있어요"라고 알려 준다.`,
    is: '공 튀는 소리와 문 닫는 소리를 흉내 내 보고, 두 소리가 어떻게 다른지 말해 봅시다.',
    acts: [
      A(1, '소리를 되풀이와 한 번뿐으로 나누기', 'mindmap',
        `"되풀이되는 소리는 같은 소리가 규칙적으로 이어지고, 한 번뿐인 소리는 한 번만 나요." 카드를 읽으며 소리를 흉내 내고 나누게 한다. 한 번 났지만 여러 번 들리는 소리를 헷갈리는 학생에게 "한 번 누르면 몇 번 나는지 세어 볼까요?"라고 묻는다.`,
        '소리 카드를 읽고 되풀이되는 소리와 한 번뿐인 소리로 나누어요.', cardsLv(),
        [
          SORT('소리를 되풀이와 한 번뿐으로 나누어 보세요.', '소리의 되풀이', { '되풀이되는 소리': ['공이 통통 튀어요', '시계가 똑딱똑딱'], '한 번뿐인 소리': ['교실 문이 쾅 닫혀요', '수업 시작 종이 땡'] }, null, { difficulty: 0.1 }),
          SORT('급식 시간 소리를 되풀이와 한 번뿐으로 나누어 보세요.', '급식 소리', { '되풀이되는 소리': ['숟가락이 달그락달그락', '식판 줄이 이어지는 발소리'], '한 번뿐인 소리': ['급식 시작 알림 방송', '국자를 내려놓는 소리'] }, null, { difficulty: 0.2 }),
          SORT('운동장 소리를 되풀이와 한 번뿐으로 나누어 보세요. 학교에서 나지 않는 소리는 두어요.', '운동장 소리', { '되풀이되는 소리': ['줄넘기가 바닥을 탁탁'], '한 번뿐인 소리': ['호루라기가 삑 울려요'] }, ['지하철이 칙칙폭폭'], { difficulty: 0.3 }),
        ]),
      A(2, '되풀이 소리를 리듬 블록으로 나타내기', 'keyboard',
        `"되풀이되는 소리는 같은 길이의 블록이 이어져요. 한 번뿐인 소리는 쉼표와 함께 놓아요." 소리를 듣고 한 박마다 손뼉을 치게 한다. 쉼표를 빼고 블록을 놓는 학생에게 "소리가 쉬는 박도 세어 보아요"라고 말한다.`,
        '리듬 듣기를 누르고 들은 소리를 블록으로 놓아요.', rhyHr(4, 2),
        [
          R('공이 일정하게 튀는 소리예요. 듣고 블록으로 놓아 보세요.', ['q', 'q', 'q', 'q', 'q', 'q', 'q', 'q'], { t: 108, x: { difficulty: 0.1 } }),
          R('줄넘기를 하는 소리예요. 빠르게 이어지다 한 박 쉬어요. 듣고 놓아 보세요.', ['e', 'e', 'e', 'e', 'q', 'qr', 'q', 'q'], { t: 96, x: { difficulty: 0.25 } }),
          R('종이 한 번 울리고 쉬는 소리예요. 듣고 블록으로 놓아 보세요.', ['h', 'hr', 'h', 'hr'], { t: 72, x: { difficulty: 0.3, predict: { q: '한 번만 나는 소리 뒤에도 박은 계속 흘러갈까요?', options: ['아니요, 멈춰요', '네, 쉬는 박도 흘러가요'], answer: 1 }, conclude: '소리가 한 번 나고 쉬는 동안에도 박은 계속 흘러가서 쉼표를 놓아요.' } }),
        ]),
    ],
    wt: `"되풀이되는 소리와 한 번뿐인 소리를 어떻게 알아보나요?" 소리를 흉내 내며 설명하게 한다. 출구 2번을 틀린 학생에게는 손뼉을 연달아 치는 것과 한 번 치는 것을 비교하게 한다.`,
    exit: [
      { type: 'tool', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 2, pattern: ['q', 'q', 'q', 'qr', 'q', 'q', 'q', 'qr'], tempo: 100 }, prompt: '리듬 듣기를 누르고 들은 소리를 블록으로 놓아 보세요.', target: { rhythm: ['q', 'q', 'q', 'qr', 'q', 'q', 'q', 'qr'] }, difficulty: 0.25 },
      { type: 'choice', prompt: '수업 시작을 알리는 종이 한 번 울려요. 이 소리는 어느 쪽일까요?', options: ['한 번뿐인 소리', '되풀이되는 소리', '소리가 아니에요'], answer: 0, difficulty: 0.15, explain: '종이 한 번 울리면 한 번뿐인 소리예요.' },
      { type: 'mood', prompt: '소리를 되풀이와 한 번뿐으로 나누어 보니 어땠나요?' },
    ],
    wsTitle: '되풀이와 한 번뿐',
    ws: [
      { type: 'table', prompt: '소리를 읽고 되풀이(○)인지 한 번뿐(×)인지 표시하세요.', columns: ['소리', '○ 또는 ×'], cells: [['시계가 똑딱똑딱', ''], ['문이 쾅 닫혀요', ''], ['공이 통통 튀어요', '']] },
      { type: 'figure', prompt: '리듬을 보고 첫째 마디와 둘째 마디의 박 수를 쓰세요.', tool: 'keyboard', wide: true, options: { mode: 'rhythm', meter: 4, measures: 2 }, figures: [{ state: { rhythm: ['h', 'hr', 'q', 'q', 'q', 'qr'] }, caption: '첫째 마디 ___박, 둘째 마디 ___박' }], answer: '첫째 마디 4박, 둘째 마디 4박' },
      { type: 'choice', prompt: '되풀이되는 소리의 특징에 ○ 하세요.', options: ['같은 소리가 규칙적으로 이어져요', '한 번만 나요', '소리가 없어요'], answer: '같은 소리가 규칙적으로 이어져요' },
      { type: 'short', prompt: '내가 찾은 되풀이 소리 하나와 한 번뿐인 소리 하나를 쓰세요.' },
    ],
    easyNote: '되풀이되는 소리는 계속 이어지고, 한 번뿐인 소리는 한 번만 나요.',
    easy: [
      { type: 'choice', prompt: '시계 소리는 어느 쪽일까요?', options: ['되풀이되는 소리', '한 번뿐인 소리'], answer: '되풀이되는 소리' },
      { type: 'blank', prompt: '빈칸을 채우세요.', text: '종이 한 번 울리면 ___ 소리예요.', answer: '한 번뿐인' },
      { type: 'short', prompt: '되풀이되는 소리 하나를 쓰세요.' },
    ],
    diff: { easy: '맞는 칸에 넣으면 초록 테두리가 보이고 마디마다 박 수가 보여요.', base: '카드와 블록을 스스로 확인해요.', challenge: '카드가 늘고 블록에 쉼표 종류가 더 나와요.' },
    notes: '자주 보이는 어려움: ① 한 번뿐인 소리를 음악 재료가 아니라고 여긴다 → 장면의 시작과 끝에 쓸 수 있다고 알려 준다. ② 쉼표를 빼고 블록을 놓는다 → 쉬는 동안에도 박은 계속 흘러감을 손으로 보인다. ③ 소리 흉내를 하지 않고 글자만 본다 → 먼저 소리를 흉내 내게 한다.',
  }));

  // ───────────────────────── 19차시 (확장) ─────────────────────────
  lessons.push(L(19, {
    s: S4, title: '학교 소리의 높낮이·길이·세기를 말과 건반으로 나타내기',
    obj: '학교에서 들은 소리의 높낮이·길이·세기를 말로 설명하고 건반으로 나타내 볼 수 있다.',
    ill: 'a paper school bell with three paper rulers beside it labeled by shape for pitch, length and loudness, and tiny notes around', txt: '높이 길이 세기', mot: ['sun', 'house', 'tree', 'hills'],
    it: `"수업 시작 종소리와 교실 문 닫는 소리를 비교하면 무엇이 다를까요?" 종소리는 높고 오래 울리고, 문 닫는 소리는 낮고 짧게 끝난다는 말을 이끌어 낸다. "소리는 높낮이와 길이, 세기로 나눠서 설명할 수 있어요." 소리를 좋다·나쁘다로만 말하는 학생에게 "높은가요, 낮은가요? 길까요, 짧을까요?"로 바꾸어 묻는다.`,
    is: '종소리와 문 닫는 소리를 흉내 내 보고, 두 소리가 높이·길이·세기에서 어떻게 다른지 말해 봅시다.',
    acts: [
      A(1, '소리와 설명하는 말 이어 보기', 'story',
        `"소리를 높낮이, 길이, 세기로 나누어 말해 볼게요. 카드를 읽으며 직접 소리를 내 보고 이어요." 소리를 낼 때 작게 하도록 이른다. 소리를 크기로만 설명하는 학생에게 "높낮이나 길이로도 말해 볼까요?"라고 묻는다.`,
        '왼쪽 소리를 읽고, 알맞게 설명하는 말 카드를 이어요.', cardsLv(),
        [
          MATCH('소리와 설명하는 말을 이어 보세요.', [['종소리', '높고 오래 울려요'], ['문 닫는 소리', '낮고 짧게 끝나요']], ['낮고 오래 울려요'], { difficulty: 0.1 }),
          MATCH('소리와 설명하는 말을 이어 보세요.', [['호루라기 소리', '높고 날카로워요'], ['큰 북소리', '낮고 세게 울려요'], ['연필 사각사각', '작고 짧게 이어져요']], null, { difficulty: 0.2 }),
          MATCH('소리와 설명하는 말을 이어 보세요.', [['체육관의 공 튀는 소리', '낮은 소리가 되풀이돼요'], ['유리창을 톡 치는 소리', '높고 짧게 한 번 나요'], ['복도의 멀어지는 발소리', '점점 작아져요']], ['점점 커져요'], { difficulty: 0.3, predict: { q: '소리를 높낮이와 길이로 나누면 설명하기 쉬워질까요?', options: ['네, 더 정확해져요', '아니요, 더 어려워져요'], answer: 0 }, conclude: '높낮이·길이·세기로 나누면 소리를 정확하게 설명할 수 있어요.' }),
        ]),
      A(2, '학교 소리를 건반으로 나타내기', 'keyboard',
        `"종소리는 높은 음을 길게, 문 닫는 소리는 낮은 음을 짧게 나타내요." 들은 가락을 따라 치게 한 뒤, 학교 소리 하나를 골라 건반으로 지어 보게 한다. 높낮이를 반대로 치는 학생에게 "오른쪽 건반이 높은 소리예요. 다시 들어 볼까요?"라고 알려 준다.`,
        '학교 소리를 닮은 가락을 듣고 따라 친 뒤, 소리 하나를 골라 가락을 지어요.', mel(),
        [
          K('종소리를 닮은 높은 음 가락이에요. 느리게 들려줘요. 듣고 따라 쳐 보세요.', ['높은도', '솔', '높은도'], { t: 56, x: { difficulty: 0.1 } }),
          K('복도의 발소리를 닮은 낮은 음 가락이에요. 듣고 따라 쳐 보세요.', ['도', '레', '도', '레', '도'], { t: 90, x: { difficulty: 0.2 } }),
          CP('유리창을 톡 치는 소리를 나타내는 가락이에요. 라·시·높은도만 써서 네 음을 지어요.', { length: 4, only: ['라', '시', '높은도'] }, ['높고 짧은 소리로 들려요'], { x: { difficulty: 0.3 } }),
          SK('고른 학교 소리를 건반으로 나타낸 뒤 해낸 것을 표시해요.', ['소리의 높낮이를 말로 설명했어요', '짝이 어떤 소리인지 맞혔어요'], { x: { difficulty: 0.1 } }),
        ]),
    ],
    wt: `"오늘 내가 고른 소리는 높았나요, 낮았나요? 길었나요, 짧았나요?" 두 가지를 모두 말하게 한다. 출구 2번을 틀린 학생에게는 높은 건반과 낮은 건반을 다시 번갈아 눌러 듣게 한다.`,
    exit: [
      { type: 'tool', tool: 'story', options: { mode: 'match', slots: [{ id: 'p1', label: '풍경이 울리는 소리' }, { id: 'p2', label: '무거운 문을 닫는 소리' }], cards: ['높고 맑게 울려요', '낮고 짧게 쿵 해요', '아주 빠르게 이어져요'] }, prompt: '소리와 설명하는 말을 이어 보세요.', target: { match: { p1: '높고 맑게 울려요', p2: '낮고 짧게 쿵 해요' } }, difficulty: 0.2 },
      { type: 'choice', prompt: '소리를 설명할 때 쓸 수 있는 요소가 아닌 것은 무엇일까요?', options: ['소리가 비싼 정도', '소리의 높낮이', '소리의 길이'], answer: 0, difficulty: 0.15, explain: '소리는 높낮이·길이·세기로 설명할 수 있어요.' },
      { type: 'mood', prompt: '학교 소리를 건반으로 나타내 보니 어땠나요?' },
    ],
    wsTitle: '소리 설명하기',
    ws: [
      { type: 'table', prompt: '소리를 높낮이(높게·낮게), 길이(길게·짧게), 세기(세게·여리게)로 설명하세요.', columns: ['소리', '높낮이', '길이', '세기'], cells: [['종소리', '', '', ''], ['문 닫는 소리', '', '', ''], ['연필 소리', '', '', '']] },
      { type: 'figure', prompt: '선생님이 들려주는 가락을 듣고 빈칸에 계이름을 쓰세요.', tool: 'keyboard', wide: true, options: { from: '도', to: '높은도', printNames: true, printBoxes: 3 }, figures: [{ caption: '높은 소리였나요, 낮은 소리였나요? ( 높은 · 낮은 )' }], answer: '높은도 솔 높은도 — 높은' },
      { type: 'choice', prompt: '높은 건반은 건반의 어느 쪽에 있을까요?', options: ['오른쪽', '왼쪽', '가운데'], answer: '오른쪽' },
      { type: 'short', prompt: '내가 고른 학교 소리를 높낮이·길이·세기로 설명해 쓰세요.' },
    ],
    easyNote: '소리는 높낮이, 길이, 세기로 나누어 설명할 수 있어요. 높은 건반은 오른쪽이에요.',
    easy: [
      { type: 'choice', prompt: '종소리는 어떤 소리일까요?', options: ['높고 오래 울려요', '낮고 짧아요'], answer: '높고 오래 울려요' },
      { type: 'blank', prompt: '빈칸을 채우세요.', text: '높은 건반은 ___쪽에 있어요.', answer: '오른' },
      { type: 'short', prompt: '내가 좋아하는 학교 소리를 하나 쓰세요.' },
    ],
    diff: { easy: '맞게 이은 카드에 초록 테두리가 보이고 가락이 들리는 동안 건반이 빛나요.', base: '카드와 가락을 스스로 확인해요.', challenge: '계이름 없이 짓고 카드가 늘어요.' },
    notes: '자주 보이는 어려움: ① 소리를 크기로만 설명한다 → 높낮이와 길이도 따로 말해 보게 한다. ② 높낮이를 반대로 친다 → 오른쪽이 높은 소리임을 다시 듣게 한다. ③ 소리를 좋고 나쁨으로 평가한다 → 요소로 바꿔 설명하게 한다.',
  }));

  // ───────────────────────── 20차시 (확장) ─────────────────────────
  lessons.push(L(20, {
    s: S4, title: '시끄러운 소리도 음악 재료가 될 수 있을까? 골라 보기',
    obj: '시끄럽다고 느끼는 소리도 높낮이·길이·되풀이를 정하면 음악 재료로 쓸 수 있음을 설명할 수 있다.',
    ill: 'a paper construction crane, a whistle and a pot lid arranged like a small orchestra on a stage, with notes rising from each', txt: '소리는 재료', mot: ['sun', 'cloud', 'hills', 'flower'],
    it: `"공사장 소리나 호루라기 소리는 시끄럽다고 하지요. 이런 소리로 음악을 만들 수 있을까요?" 학생들의 의견을 몇 가지 듣고 시끄러움보다 어떻게 소리를 짜는지가 중요하다고 알려 준다. "소리가 시끄러운지, 얼마나 크게 낼지는 내가 정해요." 시끄러운 소리는 안 된다고 여기는 학생에게 "작게 두드리면 어떤 소리가 될까요?"라고 되묻는다. 귀를 다치지 않게 소리는 작게 낸다고 약속한다.`,
    is: '시끄러운 소리도 작게, 짧게, 규칙 있게 내면 어떻게 들리는지 생각해 봅시다.',
    acts: [
      A(1, '음악 재료가 될 수 있는 소리 골라 보기', 'mindmap',
        `"소리를 고르는 기준은 시끄러운지가 아니라 낼 수 있고 나만의 방법으로 짤 수 있는지예요." 카드마다 작은 소리로 흉내 내 본 뒤 고르게 한다. 시끄러운 소리를 모두 빼는 학생에게 "작게 하면 같은 소리를 쓸 수 있어요"라고 알려 준다.`,
        '소리 카드 가운데 음악 재료로 쓸 수 있는 것만 골라요.', cardsLv(),
        [
          PICK('음악 재료로 쓸 수 있는 소리 카드만 골라 보세요.', '소리 재료', '쓸 수 있는 소리', ['공사장에서 쿵쾅쿵쾅 되풀이되는 소리', '급식실 식판이 부딪히는 소리'], ['조용히 놓인 책가방', '꺼져 있는 형광등'], { difficulty: 0.1 }),
          PICK('작게 내면 장면 음악에 쓸 수 있는 소리 카드만 골라 보세요.', '작게 낼 소리', '쓸 수 있는 소리', ['호루라기 삑삑 소리', '의자가 끌리는 소리'], ['닫혀 있는 사물함', '꺼진 컴퓨터 화면'], { difficulty: 0.2 }),
          PICK('시끄럽지만 규칙을 정하면 음악 재료가 될 수 있는 소리 카드만 골라 보세요.', '규칙을 정할 소리', '재료가 될 소리', ['운동장에서 공이 통통 튀는 소리', '복도 끝 환풍기가 윙윙 도는 소리', '쓰레기통 뚜껑이 땅땅 닫히는 소리'], ['아직 켜지지 않은 방송 기계', '잠긴 교실 문'], { difficulty: 0.3, predict: { q: '시끄러운 소리는 음악 재료가 될 수 없을까요?', options: ['네, 될 수 없어요', '아니요, 짜기에 달렸어요'], answer: 1 }, conclude: '시끄러운 소리도 높낮이·길이·세기를 정해 규칙 있게 짜면 음악 재료가 돼요.' }),
        ]),
      A(2, '시끄러운 소리를 규칙 있는 리듬으로 바꾸기', 'keyboard',
        `"공사장의 쿵쾅쿵쾅을 4분음표와 쉼표로 짜면 되풀이 규칙이 생겨요." 소리를 듣고 블록으로 놓게 한 뒤 직접 규칙을 정해 보게 한다. 쉼표를 빼 버리는 학생에게 "쉬는 자리가 있어야 소리가 더 또렷해요"라고 말한다.`,
        '리듬 듣기를 누르고 들은 소리를 블록으로 놓은 뒤, 규칙 있게 내 리듬을 지어요.', rhy(4, 2),
        [
          R('공사장의 쿵쾅 소리를 규칙 있게 바꾼 리듬이에요. 듣고 블록으로 놓아 보세요.', ['q', 'q', 'qr', 'q', 'q', 'q', 'qr', 'q'], { t: 100, x: { difficulty: 0.2 } }),
          R('환풍기 윙윙 소리를 짧게 끊은 리듬이에요. 듣고 블록으로 놓아 보세요.', ['e', 'e', 'e', 'e', 'h', 'q', 'q'], { t: 110, x: { difficulty: 0.25 } }),
          R('쓰레기통 뚜껑 소리를 넣어 한 마디가 4박이 되도록 두 마디를 채워요. 쉼표를 한 번은 넣어요.', null, { x: { toolOptions: { mode: 'rhythm', meter: 4, measures: 2 }, target: { beats: true, rests: 1 }, difficulty: 0.3, reveal: 'after-check', conclude: '쉼표와 박 수를 정해 짜면 시끄러운 소리도 음악의 규칙이 생겨요.' } }),
        ]),
    ],
    wt: `"시끄러운 소리도 음악 재료가 될 수 있나요? 어떻게 하면 되나요?" 근거를 들어 한 문장으로 말하게 한다. 출구 2번에서 '시끄러운 소리는 안 돼요'를 고른 학생에게는 작게 낸 소리를 다시 듣게 한다.`,
    exit: [
      { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '소리 재료', basket: '쓸 수 있는 소리', cards: ['수돗물이 똑똑 떨어지는 소리', '꺼진 선풍기', '체육관 공 튀는 소리'] }, prompt: '장면 음악에 쓸 수 있는 소리 카드만 골라 보세요.', target: { pick: ['수돗물이 똑똑 떨어지는 소리', '체육관 공 튀는 소리'] }, difficulty: 0.2 },
      { type: 'choice', prompt: '시끄러운 소리를 음악 재료로 쓰려면 어떻게 하면 좋을까요?', options: ['높낮이·길이·세기를 정해 규칙 있게 짠다', '가장 크게 낸다', '모든 소리를 한꺼번에 낸다'], answer: 0, difficulty: 0.2, explain: '소리의 요소를 정하면 시끄러운 소리도 음악 재료가 돼요.' },
      { type: 'mood', prompt: '시끄러운 소리를 음악으로 바꿔 보니 어땠나요?' },
    ],
    wsTitle: '소리가 재료가 되는 법',
    ws: [
      { type: 'table', prompt: '시끄러운 소리 하나를 골라 어떻게 짤지 쓰세요.', columns: ['소리', '높낮이·길이·세기', '규칙(소리와 쉼)'], cells: [['', '', '']] },
      { type: 'figure', prompt: '리듬을 보고 쉼표가 들어 있는 마디를 쓰세요.', tool: 'keyboard', wide: true, options: { mode: 'rhythm', meter: 4, measures: 2 }, figures: [{ state: { rhythm: ['q', 'q', 'qr', 'q', 'h', 'q', 'q'] }, caption: '쉼표가 있는 마디는 ___째 마디' }], answer: '첫째 마디' },
      { type: 'choice', prompt: '바른 생각에 ○ 하세요.', options: ['시끄러운 소리도 짜기에 따라 음악 재료가 돼요', '시끄러운 소리는 절대 쓸 수 없어요', '소리가 클수록 좋은 음악이에요'], answer: '시끄러운 소리도 짜기에 따라 음악 재료가 돼요' },
      { type: 'short', prompt: '내가 음악 재료로 쓰고 싶은 학교의 시끄러운 소리와, 어떻게 짤지 쓰세요.' },
    ],
    easyNote: '시끄러운 소리도 작게, 짧게, 규칙 있게 짜면 음악 재료가 돼요. 귀를 다치지 않게 작게 내요.',
    easy: [
      { type: 'choice', prompt: '시끄러운 소리를 음악에 쓰려면 어떻게 할까요?', options: ['규칙을 정해 짜요', '가장 크게 내요'], answer: '규칙을 정해 짜요' },
      { type: 'blank', prompt: '빈칸을 채우세요.', text: '소리를 낼 때 귀를 다치지 않게 ___ 내요.', answer: '작게' },
      { type: 'short', prompt: '내가 쓰고 싶은 소리를 하나 쓰세요.' },
    ],
    diff: { easy: '맞게 고른 카드에 초록 테두리가 보이고 마디마다 박 수가 보여요.', base: '카드와 블록을 스스로 확인해요.', challenge: '함정 카드가 늘고 블록에 쉼표 종류가 더 나와요.' },
    notes: '자주 보이는 어려움: ① 시끄러운 소리를 음악 재료에서 모두 뺀다 → 작게 하거나 규칙을 정하면 쓸 수 있다고 직접 들려준다. ② 소리를 한꺼번에 크게 낸다 → 한 사람씩 작게 내 보게 하고 귀 건강을 먼저 짚는다. ③ 쉼표를 빼 버린다 → 쉬는 자리에서 소리가 더 또렷해짐을 들려준다.',
  }));


  // ───────────────────────── 21차시 (핵심) ─────────────────────────
  lessons.push(L(21, {
    s: S4, title: '다른 모둠의 장면 음악을 듣고 어떤 장면인지 맞혀 적기',
    obj: '다른 모둠이 들려주는 장면 음악을 듣고 어떤 장면인지 근거를 들어 맞혀 적을 수 있다.',
    ill: 'a paper stage with a small group of children playing sounds and an audience of paper cards each holding a speech bubble with a question mark', txt: '무슨 장면일까?', mot: ['sun', 'cloud', 'hills', 'tree'],
    it: `"다른 모둠의 음악을 듣고 어떤 장면인지 맞혀 볼 거예요. 맞히려면 무엇을 들어야 할까요?" 소리의 종류, 나오는 차례, 빠르기와 세기를 들어야 한다고 이끌어 낸다. 시연 단추로 점점 빨라지는 박수를 들려주고 "어떤 장면 같나요?"를 묻는다. 한 가지 소리만 듣고 정답을 말하는 학생에게 "다른 소리도 함께 들어 보아요. 차례를 보면 더 확실해져요"라고 말한다.`,
    is: '장면 음악을 듣고 어떤 장면인지 맞혀 봅시다. 맞히려면 어떤 소리를 들어야 하는지 생각해 보세요.',
    demo: { tool: 'keyboard', options: { mode: 'rhythm', meter: 2, measures: 4 }, sequence: [{ rhythm: ['q', 'q', 'e', 'e', 'e', 'e', 'e', 'e'] }] },
    acts: [
      A(1, '들은 소리와 장면 짝 짓기', 'story',
        `"들은 소리를 단서로 어떤 장면일지 짐작해 보세요. 소리가 나오는 차례도 단서예요." 카드를 읽고 소리를 흉내 내며 이어 보게 한다. 한 장면에만 어울리는 소리를 다른 장면과 헷갈리는 학생에게 "다른 장면에서도 그 소리가 날까요?"라고 되묻는다.`,
        '왼쪽 들은 소리 설명을 읽고, 어울리는 장면 카드를 이어요.', cardsLv(),
        [
          MATCH('들은 소리와 어울리는 장면을 이어 보세요.', [['톡톡 소리가 점점 많아지다 우르릉', '소나기가 쏟아지는 장면'], ['똑딱똑딱 소리가 점점 빨라져요', '시간이 없어 서두르는 장면']], ['한가로운 점심 시간'], { difficulty: 0.1 }),
          MATCH('들은 소리와 어울리는 장면을 이어 보세요.', [['쿵쿵 발소리 뒤에 문이 삐걱', '누군가 조심스레 들어오는 장면'], ['삑삑 호루라기 뒤에 함성', '운동 경기가 시작되는 장면'], ['사각사각 소리만 이어져요', '시험을 보는 교실 장면']], null, { difficulty: 0.2 }),
          MATCH('들은 소리와 어울리는 장면을 이어 보세요.', [['달그락 소리가 줄지어 나다 박수', '급식을 받는 장면'], ['바람 소리가 커졌다 문이 쾅', '폭풍이 몰아치는 장면'], ['종이 울리고 발소리가 한꺼번에', '쉬는 시간이 시작되는 장면']], ['해가 뜨는 아침 장면'], { difficulty: 0.3, predict: { q: '소리가 나오는 차례도 장면을 맞히는 단서가 될까요?', options: ['네, 단서가 돼요', '아니요, 소리 이름만 중요해요'], answer: 0 }, conclude: '소리의 종류뿐 아니라 나오는 차례도 장면을 알려 주는 중요한 단서예요.' }),
        ]),
      A(2, '장면을 맞히는 차례와 근거 적기', 'timer',
        `"듣고 → 단서 적기 → 장면 쓰기 차례로 해요. 단서가 있어야 맞혔다고 말할 수 있어요." 장면만 쓰고 단서를 쓰지 않은 학생에게 "어떤 소리를 듣고 그렇게 생각했나요?"라고 묻는다. 정답을 틀리게 맞혔어도 근거가 있으면 칭찬해 준다.`,
        '장면을 맞히는 차례대로 카드를 놓고, 모둠마다 맞힌 장면을 적은 뒤 점검 목록에 표시해요.', plain('장면 맞히기', '개'),
        [
          TORDER('장면을 맞히는 차례대로 카드를 놓아요.', ['모둠의 음악을 끝까지 들어요', '들은 소리를 단서로 적어요', '단서를 보고 장면을 짐작해요', '장면을 써서 모둠에게 알려요'], { difficulty: 0.15 }),
          { prompt: '들은 모둠 음악에서 찾은 단서의 수를 적어요.', toolOptions: { fields: [{ label: '첫째 모둠', unit: '개' }, { label: '둘째 모둠', unit: '개' }, { label: '셋째 모둠', unit: '개' }] }, target: { records: true }, difficulty: 0.1 },
          SK('맞힌 뒤 해낸 것을 점검 목록에 표시해요.', ['소리의 종류를 단서로 적었어요', '소리가 나온 차례도 단서로 적었어요', '틀렸어도 어떤 소리를 보고 짐작했는지 말했어요'], { x: { difficulty: 0.1 } }),
        ]),
    ],
    wt: `"어떤 단서를 듣고 장면을 맞혔나요?" 소리 이름과 차례를 함께 말하게 한다. 출구 2번에서 '그냥 느낌으로 맞혔어요'를 고른 학생에게는 "어떤 소리를 들었는지 하나만 더 찾아볼까요?"라고 물어본다.`,
    exit: [
      { type: 'tool', tool: 'story', options: { mode: 'match', slots: [{ id: 'z1', label: '장작이 톡톡 소리를 내다 휘익 바람이 불어요' }, { id: 'z2', label: '발소리가 점점 멀어져요' }], cards: ['모닥불을 피운 장면', '누군가 떠나가는 장면', '비가 오는 장면'] }, prompt: '들은 소리와 어울리는 장면을 이어 보세요.', target: { match: { z1: '모닥불을 피운 장면', z2: '누군가 떠나가는 장면' } }, difficulty: 0.2 },
      { type: 'choice', prompt: '장면 음악을 듣고 장면을 맞히는 가장 좋은 방법은 무엇일까요?', options: ['소리의 종류와 나오는 차례를 단서로 삼는다', '친구 표정을 보고 정한다', '마지막 소리만 듣는다'], answer: 0, difficulty: 0.15, explain: '소리의 종류와 차례가 장면을 알려 주는 단서예요.' },
      { type: 'mood', prompt: '친구들의 장면 음악을 들어 보니 어땠나요?' },
    ],
    wsTitle: '장면 맞히기 기록',
    ws: [
      { type: 'table', prompt: '들은 모둠의 장면 음악을 적으세요.', columns: ['모둠', '단서가 된 소리', '내가 맞힌 장면'], cells: [['1', '', ''], ['2', '', ''], ['3', '', '']] },
      { type: 'choice', prompt: '근거 있는 장면 맞히기에 ○ 하세요.', options: ['똑딱 소리가 점점 빨라져서 서두르는 장면 같아요', '그냥 그럴 것 같아요', '아무 장면이나 말해요'], answer: '똑딱 소리가 점점 빨라져서 서두르는 장면 같아요' },
      { type: 'blank', prompt: '빈칸을 채우세요.', text: '장면을 맞히려면 소리의 종류와 나오는 ___를 단서로 삼아요.', answer: '차례' },
      { type: 'short', prompt: '내가 만들고 싶은 장면 음악과 그 장면을 알려 줄 소리 두 가지를 쓰세요.' },
    ],
    easyNote: '장면을 맞힐 때는 소리 종류와 차례를 단서로 삼아요.',
    easy: [
      { type: 'choice', prompt: '장면을 맞히는 단서는 무엇일까요?', options: ['들은 소리와 차례', '친구의 표정'], answer: '들은 소리와 차례' },
      { type: 'blank', prompt: '빈칸을 채우세요.', text: '근거가 있어야 ___ 맞혔다고 할 수 있어요.', answer: '잘' },
      { type: 'short', prompt: '오늘 들은 장면 음악에서 인상 깊은 소리를 쓰세요.' },
    ],
    diff: { easy: '맞게 이은 카드에 초록 테두리가 보이고 점검 기록이 두 칸만 나와요.', base: '카드와 기록을 스스로 확인해요.', challenge: '함정 카드가 늘고 틀린 카드를 알려 주지 않아요.' },
    notes: '자주 보이는 어려움: ① 소리 하나만 듣고 장면을 정한다 → 다른 소리도 함께 들어 보게 한다. ② 단서를 말하지 못한다 → 들은 소리를 먼저 적게 한다. ③ 틀리면 속상해한다 → 단서가 있으면 틀려도 훌륭한 짐작이라고 말해 준다.',
  }));

  // ───────────────────────── 22차시 (연습) ─────────────────────────
  lessons.push(L(22, {
    s: S4, title: '맞히기 어려웠던 까닭을 찾아 내 작품에서 고칠 곳 정하기',
    obj: '장면을 맞히기 어려웠던 까닭을 찾아 내 장면 음악에서 고칠 곳을 정할 수 있다.',
    ill: 'a paper detective magnifying glass over a tangled ribbon of notes that straightens into a clear path when loosened', txt: '까닭 찾기', mot: ['sun', 'cloud', 'hills', 'flower'],
    it: `"장면을 맞히기 어려웠던 때가 있었나요? 왜 어려웠을까요?" 학생들의 이유를 칠판에 적고 소리 차례, 소리 세기, 소리 종류로 묶어 본다. "어려웠던 까닭은 내 작품에서도 일어날 수 있어요." 새로운 소리를 많이 넣으면 좋은 작품이라고 여기는 학생에게 "듣는 사람에게 장면이 전해지는지도 살펴보아요"라고 말한다.`,
    is: '장면을 맞히기 어려웠던 때를 떠올리고, 그 까닭을 찾아봅시다.',
    acts: [
      A(1, '맞히기 어려웠던 까닭 나누기', 'mindmap',
        `"어려웠던 까닭을 말한 카드를 읽고 어디에서 문제가 생겼는지 나눠 봐요." 카드를 소리 내어 읽고 비슷한 경험을 말하게 한다. 소리 종류를 늘리면 해결된다고 말하는 학생에게 "소리가 많아서 차례가 뒤섞이지는 않았을까요?"라고 묻는다.`,
        '까닭 카드를 읽고, 차례의 문제인지 세기의 문제인지 나누어요. 어느 쪽도 아닌 카드는 그대로 둬요.', cardsLv(),
        [
          SORT('맞히기 어려웠던 까닭을 어디의 문제인지에 따라 나누어 보세요.', '맞히기 어려운 까닭', { '소리 차례가 문제': ['여러 소리가 한꺼번에 났어요'], '소리 세기가 문제': ['한 소리가 너무 커서 다른 소리가 안 들렸어요'] }, null, { difficulty: 0.1 }),
          SORT('까닭을 문제의 종류에 따라 나누어 보세요.', '까닭 나누기', { '소리 차례가 문제': ['비 오는 장면인데 천둥이 먼저 나왔어요', '소리 사이에 쉬는 시간이 없었어요'], '소리 세기가 문제': ['끝까지 같은 크기로만 소리가 났어요', '작은 소리가 너무 작아 들리지 않았어요'] }, null, { difficulty: 0.2 }),
          SORT('까닭을 문제의 종류에 따라 나누어 보세요. 문제가 아닌 카드는 두어요.', '문제 가려내기', { '소리 차례가 문제': ['처음과 끝을 알 수 없었어요'], '소리 세기가 문제': ['장면이 바뀌는 곳을 모르겠어요'] }, ['소리가 예쁘게 났어요'], { difficulty: 0.3 }),
        ]),
      A(2, '고칠 곳 고르기와 고칠 방법 말하기', 'mindmap',
        `"어려웠던 까닭을 고치면 어떻게 좋아질지 생각해 봐요. 가장 큰 까닭 하나만 먼저 골라 보아요." 고칠 방법을 한 문장으로 말하게 한다. 방법을 말하지 않고 '잘하면 돼요'라고만 하는 학생에게 "무엇을 어떻게 바꾸면 되나요?"라고 묻는다.`,
        '까닭 카드 가운데 먼저 고쳐야 할 것만 골라요.', cardsLv(),
        [
          PICK('내 작품에서 먼저 고쳐야 할 까닭 카드만 골라 보세요.', '고칠 곳', '먼저 고칠 곳', ['소리가 겹쳐서 차례가 안 보여요', '큰 소리가 작은 소리를 가려요'], ['소리 이름이 예뻐요', '노래 제목이 길어요'], { difficulty: 0.15 }),
          PICK('차례가 분명해지도록 바꿀 방법 카드만 골라 보세요.', '차례 고치기', '쓸 방법', ['소리마다 한 번씩 번갈아 내요', '소리 사이에 한 박씩 쉬어요'], ['모두 한꺼번에 크게 내요', '가장 마지막 소리를 빼요'], { difficulty: 0.25 }),
          PICK('세기를 분명하게 하는 방법 카드만 골라 보세요.', '세기 고치기', '쓸 방법', ['처음에는 여리게 시작해요', '장면이 바뀌는 곳에서 세게 내요'], ['끝까지 똑같이 여리게 내요', '소리를 하나 더 얹어요'], { difficulty: 0.3 }),
        ]),
    ],
    wt: `"내 작품에서 가장 먼저 고칠 곳은 어디이고 어떻게 바꾸겠어요?" 까닭과 방법을 함께 말하게 한다. 출구 2번에서 '소리를 더 넣어요'를 고른 학생에게는 한 소리를 빼 보게 한다.`,
    exit: [
      { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '고칠 방법', basket: '쓸 방법', cards: ['장면이 바뀔 때 한 박 쉬어요', '모든 소리를 한꺼번에 내요', '소리마다 세기를 바꿔 봐요'] }, prompt: '장면이 더 잘 전해지는 방법만 골라 보세요.', target: { pick: ['장면이 바뀔 때 한 박 쉬어요', '소리마다 세기를 바꿔 봐요'] }, difficulty: 0.2 },
      { type: 'choice', prompt: '장면 음악이 잘 전해지지 않을 때 가장 먼저 살펴볼 것은 무엇일까요?', options: ['소리가 나오는 차례와 세기', '소리를 얼마나 많이 넣었는지', '친구의 작품이 더 좋은지'], answer: 0, difficulty: 0.2, explain: '차례와 세기가 분명해야 장면이 전해져요.' },
      { type: 'mood', prompt: '내 작품의 고칠 곳을 찾아보니 어땠나요?' },
    ],
    wsTitle: '고칠 곳 정하기',
    ws: [
      { type: 'table', prompt: '장면을 맞히기 어려웠던 까닭을 쓰고, 고칠 방법을 한 가지씩 쓰세요.', columns: ['어려웠던 까닭', '고칠 방법'], cells: [['', ''], ['', '']] },
      { type: 'choice', prompt: '고칠 곳을 정하는 좋은 방법에 ○ 하세요.', options: ['가장 큰 까닭 하나부터 고쳐요', '모든 소리를 한꺼번에 바꿔요', '고치지 않아요'], answer: '가장 큰 까닭 하나부터 고쳐요' },
      { type: 'blank', prompt: '빈칸을 채우세요.', text: '장면이 잘 전해지려면 소리의 ___가 분명해야 해요.', answer: '차례' },
      { type: 'short', prompt: '내 작품에서 가장 먼저 고칠 곳과 바꿀 방법을 쓰세요.' },
    ],
    easyNote: '맞히기 어려운 까닭은 차례와 세기에서 찾을 수 있어요.',
    easy: [
      { type: 'choice', prompt: '소리가 한꺼번에 나면 어떤 문제가 생길까요?', options: ['차례가 안 보여요', '소리가 더 예뻐져요'], answer: '차례가 안 보여요' },
      { type: 'blank', prompt: '빈칸을 채우세요.', text: '고칠 곳은 가장 큰 ___ 하나부터 골라요.', answer: '까닭' },
      { type: 'short', prompt: '내가 고치고 싶은 곳을 쓰세요.' },
    ],
    diff: { easy: '맞게 넣은 카드에 초록 테두리가 보여요.', base: '카드를 스스로 확인해요.', challenge: '함정 카드가 늘고 틀린 카드를 알려 주지 않아요.' },
    notes: '자주 보이는 어려움: ① 소리를 더 넣으면 해결된다고 여긴다 → 소리를 빼면 차례가 또렷해지는 예를 들려준다. ② 까닭을 말하지 못하고 느낌만 말한다 → 차례와 세기로 바꿔 묻는다. ③ 모든 것을 고치려 한다 → 가장 큰 까닭 하나만 고르게 한다.',
  }));

  // ───────────────────────── 23차시 (마무리) ─────────────────────────
  lessons.push(L(23, {
    s: S4, title: '창작 단원 돌아보기 — 요소·장면 음악·고치기를 묶고 나를 평가하기',
    obj: '단원에서 만든 소리와 장면 음악을 요소·모방·고치기로 묶어 설명하고 나를 평가할 수 있다.',
    ill: 'a paper trophy-shaped music stand surrounded by small paper cards showing a clock, a raindrop and a pencil with an eraser', txt: '창작 돌아보기', mot: ['sun', 'cloud', 'hills', 'flower'],
    it: `"이 단원에서 우리는 소리를 만들었어요. 가장 기억에 남는 활동은 무엇인가요?" 칠판에 활동 이름을 모아 적고 요소로 만들기, 생활의 소리 흉내 내기, 고쳐 다시 만들기로 묶어 보게 한다. "묶어 보면 내가 무엇을 해냈는지 더 분명해져요." 활동을 하나씩만 기억하는 학생에게 "그 활동은 어느 묶음에 들어갈까요?"라고 묻는다.`,
    is: '이 단원에서 한 활동을 떠올려 보고, 세 묶음으로 나누어 봅시다.',
    acts: [
      A(1, '단원 활동을 세 묶음으로 나누기', 'mindmap',
        `"활동을 요소로 만들기, 생활의 소리 흉내 내기, 고쳐 다시 만들기로 나눠 봐요." 카드마다 활동에서 한 일을 떠올려 말하게 한다. 한 활동을 두 묶음에 모두 넣는 학생에게 "그 활동에서 가장 중요한 일은 무엇이었나요?"라고 묻는다.`,
        '활동 카드를 읽고, 알맞은 묶음으로 나누어요.', cardsLv(),
        [
          SORT('단원 활동을 묶음에 따라 나누어 보세요.', '창작 단원', { '요소로 만들기': ['점점 빨라지는 네 마디 소리 만들기'], '생활의 소리 흉내 내기': ['빗소리를 물건으로 흉내 내기'], '고쳐 다시 만들기': ['약한 마디를 바꿔 다시 짓기'] }, null, { difficulty: 0.1 }),
          SORT('활동을 묶음에 따라 나누어 보세요.', '활동 묶기', { '요소로 만들기': ['소리 크기를 점점 키우는 가락 짓기', '느리게와 빠르게로 같은 가락 치기'], '생활의 소리 흉내 내기': ['학교 소리 목록 만들기', '등굣길 소리를 차례대로 놓기'], '고쳐 다시 만들기': ['짝에게 들려주고 칭찬과 제안 받기'] }, null, { difficulty: 0.2 }),
          SORT('활동을 묶음에 따라 나누어 보세요. 이 단원의 활동이 아닌 카드는 두어요.', '단원 정리', { '요소로 만들기': ['빠르기나 셈여림 하나 정해 만들기'], '생활의 소리 흉내 내기': ['시끄러운 소리도 재료로 고르기'], '고쳐 다시 만들기': ['고치기 전과 후 비교하기'] }, ['다른 나라 말로 노래하기'], { difficulty: 0.3 }),
        ]),
      A(2, '단원을 묶어 짧은 장면 음악 짓기', 'keyboard',
        `"배운 것을 모아 한 가지 장면을 가락으로 나타내 봐요. 정한 요소가 들리는지 마지막으로 점검해요." 가락을 짓고 두 번 쳐서 장면과 요소를 짝에게 설명하게 한다. 요소와 장면 중 하나만 생각하는 학생에게 "둘이 함께 들리는지 들어 보아요"라고 말한다.`,
        '장면 하나를 정해 가락을 짓고, 요소와 장면이 들리는지 점검 목록을 표시해요.', mel(),
        [
          CP('소나기 장면이에요. 도로 시작해 도로 끝나는 가락을 일곱 음으로 지어요.', { length: 7, startOn: '도', endOn: '도' }, ['빗방울처럼 높고 짧은 소리가 있어요', '점점 세지는 곳이 있어요'], { x: { difficulty: 0.25 } }),
          K('쉬는 시간이 시작되는 소리를 닮은 가락이에요. 듣고 따라 쳐 보세요.', ['높은도', '솔', '미', '솔', '높은도'], { t: 116, x: { difficulty: 0.2 } }),
          CP('시험 보는 교실 장면이에요. 도·레·미만 써서 여섯 음을 아주 여리게 칠 수 있게 지어요.', { length: 6, only: ['도', '레', '미'] }, ['조용한 장면이 떠올라요'], { x: { difficulty: 0.3 } }),
        ]),
      A(3, '나를 평가하고 다음 활동 정하기', 'timer',
        `"활동마다 1점에서 3점으로 나를 평가해요. 3점은 요소가 또렷하거나 장면이 잘 전해진 때예요." 점수의 까닭을 한마디로 말하게 한다. 모두 3점을 주는 학생에게 "가장 약했던 활동 하나를 골라 볼까요?"라고 묻는다. 다음 활동 계획은 막연하지 않게 무엇을 언제 할지 정하게 한다.`,
        '활동마다 나의 점수를 적고, 해낸 것을 점검 목록에 표시해요.', plain('나를 돌아봐요', '점'),
        [
          { prompt: '활동마다 내가 해낸 정도를 1~3점으로 적어요.', toolOptions: { fields: [{ label: '요소로 만들기', unit: '점', max: 3 }, { label: '생활의 소리 흉내 내기', unit: '점', max: 3 }, { label: '고쳐 다시 만들기', unit: '점', max: 3 }] }, target: { records: true }, difficulty: 0.1 },
          TORDER('다음 창작 활동을 계획하는 차례대로 카드를 놓아요.', ['만들고 싶은 장면을 정해요', '살릴 요소를 하나 정해요', '만든 소리를 다시 들어요', '약한 곳을 골라 고쳐요'], { difficulty: 0.2 }),
          SK('단원을 돌아본 뒤 해낸 것을 표시해요.', ['점수마다 그렇게 매긴 활동을 떠올렸어요', '가장 약한 활동을 하나 골랐어요', '다음에 해 볼 창작 활동을 하나 정했어요'], { x: { difficulty: 0.1 } }),
        ]),
    ],
    wt: `"이 단원에서 가장 자랑스러운 창작은 무엇이고 어떤 요소를 살렸나요?" 활동 하나와 요소 하나를 함께 말하게 한다. 출구 2번에서 '한 번 만들면 끝'을 고른 학생에게는 "다시 들으며 고치면 더 좋아졌지요?"라고 지난 활동을 떠올려 준다.`,
    exit: [
      { type: 'tool', tool: 'mindmap', options: { topic: '창작 단원', slots: ['요소로 만들기', '고쳐 다시 만들기'], cards: ['점점 세지는 소리 짓기', '약한 마디 바꿔 쓰기'] }, prompt: '활동을 알맞은 묶음에 넣어 보세요.', target: { sort: { '요소로 만들기': ['점점 세지는 소리 짓기'], '고쳐 다시 만들기': ['약한 마디 바꿔 쓰기'] } }, difficulty: 0.15 },
      { type: 'choice', prompt: '좋은 창작을 위해 꼭 필요한 일은 무엇일까요?', options: ['만든 소리를 다시 듣고 고쳐 보기', '한 번 만들고 끝내기', '남의 소리를 베끼기'], answer: 0, difficulty: 0.15, explain: '다시 듣고 고치는 과정에서 요소가 더 뚜렷해져요.' },
      { type: 'mood', prompt: '이 단원에서 소리를 만들어 보니 어땠나요?' },
    ],
    wsTitle: '3. 창작 단원 정리',
    ws: [
      { type: 'table', prompt: '단원 활동을 묶음마다 하나씩 쓰고, 나를 1~3점으로 평가하세요.', columns: ['묶음', '내가 한 활동', '점수', '까닭'], cells: [['요소로 만들기', '', '', ''], ['생활의 소리 흉내 내기', '', '', ''], ['고쳐 다시 만들기', '', '', '']] },
      { type: 'figure', prompt: '리듬을 보고 첫째 마디와 둘째 마디의 박 수를 쓰세요.', tool: 'keyboard', wide: true, options: { mode: 'rhythm', meter: 4, measures: 2 }, figures: [{ state: { rhythm: ['e', 'e', 'q', 'h', 'q', 'q', 'h'] }, caption: '첫째 마디 ___박, 둘째 마디 ___박' }], answer: '첫째 마디 4박, 둘째 마디 4박' },
      { type: 'choice', prompt: '고칠 말에 ○ 하세요.', options: ['소리를 많이 넣을수록 좋은 작품이에요', '정한 요소가 들리면 좋은 소리예요', '다시 들으며 고치면 더 좋아져요'], answer: '소리를 많이 넣을수록 좋은 작품이에요' },
      { type: 'table', prompt: '다음 창작 계획을 쓰세요.', columns: ['어떤 장면', '살릴 요소', '언제', '누구와'], cells: [['', '', '', '']] },
      { type: 'short', prompt: '이 단원을 배우고 나서 소리에 대해 달라진 생각을 쓰세요.' },
    ],
    easyNote: '세 묶음: 요소로 만들기(빠르기·셈여림), 생활의 소리 흉내 내기, 고쳐 다시 만들기.',
    easy: [
      { type: 'choice', prompt: '빗소리를 물건으로 흉내 낸 것은 어느 묶음일까요?', options: ['생활의 소리 흉내 내기', '고쳐 다시 만들기'], answer: '생활의 소리 흉내 내기' },
      { type: 'choice', prompt: '바른 말에 ○ 하세요.', options: ['다시 들으며 고치면 더 좋아져요', '한 번 만들면 고치면 안 돼요'], answer: '다시 들으며 고치면 더 좋아져요' },
      { type: 'short', prompt: '가장 재미있었던 창작 활동을 쓰세요.' },
      { type: 'short', prompt: '다음에 만들고 싶은 장면 하나를 쓰세요.' },
    ],
    diff: { easy: '맞게 넣은 카드에 초록 테두리가 보이고 가락이 들리는 동안 건반이 빛나요.', base: '카드와 가락을 스스로 확인해요.', challenge: '함정 카드가 늘고 계이름 없이 가락을 지어요.' },
    notes: '자주 보이는 어려움: ① 단원 활동을 묶지 못하고 하나씩만 떠올린다 → 칠판 활동 목록을 보며 묶는다. ② 자기 평가를 모두 3점으로 한다 → 그 점수를 준 장면을 말하게 한다. ③ 다음 계획이 막연하다 → 어떤 장면·살릴 요소·언제·누구와 네 칸을 채우게 한다. 계획 판은 다음 단원 첫 시간에 다시 보며 실천했는지 묻는다.',
  }));
  PaperLessons.registerUnit({
    id: 'g4-mus-2-03', schema: 'edu-unit.v1', catalogUnit: U,
    grade: 4, subject: '음악', unitTitle: '3. 창작',
    flow: "같은 가락을 느리게·빠르게, 여리게·세게 쳐 보며 빠르기와 셈여림이 느낌을 바꾼다는 것을 알고, 하나를 정해 네 마디 소리를 만듭니다(1~4차시). 이어서 빗소리·시계·천둥·등굣길처럼 생활의 소리를 목소리·몸·물건·건반으로 흉내 내고 소리의 차례를 정해 장면 음악을 짭니다(5~8차시). 같은 가락의 두 조각이 빠르기 때문에 다른지 세기 때문에 다른지 가려 듣고, 점점 변하는 소리와 음표가 촘촘해지는 자리를 찾습니다(9~12차시). 만든 소리를 다시 들어 요소가 드러났는지 점검하고, 약한 마디를 골라 고쳐 다시 만들고, 짝에게 들려주며 근거 있게 이야기합니다(13~16차시). 뒤의 일곱 차시는 학교 소리를 나는 자리·되풀이 여부·높낮이로 모으고, 시끄러운 소리도 재료로 삼는 법을 배운 뒤, 다른 모둠의 장면 음악을 맞히고 맞히기 어려운 까닭을 찾아 고치며 단원을 돌아봅니다(17~23차시).",
    refs: {},
    lessons,
  });
})();
