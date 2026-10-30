/* 3학년 2학기 음악 3. 창작 — 느낌과 상상을 즉흥적인 소리로 표현하기(1~4, 8~13차시), 악곡 일부를 바꾸고 간단한 악보로 나타내기(5~7, 14~19차시).
 * 화면 건반으로 들려주는 가락·리듬은 모두 이 단원을 위해 새로 지은 것이다. 바꾸기 연습의 바탕 가락은 저작권이 끝난 '작은 별'(프랑스 민요,
 * 모차르트 변주곡 K.265의 주제)의 첫머리 몇 음만 쓴다. 노랫말은 싣지 않는다. 학급에서 부르는 노래와 노랫말은 교사가 정한다.
 * 학생 이름 예시(민지·준호·서아·지우)는 가명이다. 소리는 학생이 건반·블록을 누르거나 '듣기'를 누를 때만 난다.
 */
(function () {
  const ILL = (what) => `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`;
  const U = 'g3-음악-2학기-3';
  const head = (n, standards) => ({
    id: `g3-mus-2-03-${String(n).padStart(2, '0')}`, schema: 'edu-lesson.v1', catalog: { unit: U, lesson: n },
    grade: 3, subject: '음악', unitTitle: '3. 창작', standards, minutes: 40, formats: ['chromebook', 'projector', 'print'],
  });
  const S1 = ['[4음03-01]'];
  const S2 = ['[4음03-02]'];
  const SC = [
    (t) => [{ motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 110, y: 52 }, { motif: 'hills', y: 206 }, { motif: 'bird', x: 210, y: 86 }, { motif: 'tree', x: 70, y: 214 }, { motif: 'flower', x: 400, y: 224 }, { motif: 'text', x: 240, y: 150, text: t, size: 22 }],
    (t) => [{ motif: 'moon', x: 400, y: 58, s: 0.8 }, { motif: 'star', x: 90, y: 60, s: 0.6 }, { motif: 'star', x: 330, y: 40, s: 0.5 }, { motif: 'mountain', x: 120, y: 214 }, { motif: 'house', x: 380, y: 216 }, { motif: 'wave', y: 236 }, { motif: 'text', x: 240, y: 150, text: t, size: 22 }],
    (t) => [{ motif: 'cloud', x: 120, y: 56 }, { motif: 'cloud', x: 360, y: 44, s: 0.8 }, { motif: 'hills', y: 208 }, { motif: 'house', x: 110, y: 214, color: 'buttercup' }, { motif: 'leaf', x: 300, y: 216 }, { motif: 'star', x: 420, y: 120, s: 0.6 }, { motif: 'text', x: 240, y: 150, text: t, size: 22 }],
  ];
  const scene = (k, t) => ({ viewBox: [480, 270], layers: SC[k % 3](t) });
  const mel = (from = '도', to = '높은도') => ({
    easy: { from, to, names: 'solfa', showWhileListening: true },
    base: { from, to, names: 'solfa' },
    challenge: { from, to, names: 'none', nameToggle: false },
  });
  const rhy = (meter, measures) => ({
    easy: { mode: 'rhythm', meter, measures, blocks: ['q', 'e', 'h', 'qr'], showBeats: true },
    base: { mode: 'rhythm', meter, measures, blocks: ['q', 'e', 'h', 'qr'] },
    challenge: { mode: 'rhythm', meter, measures, blocks: ['q', 'e', 'h', 'qr', 'dh', 'er', 'hr'] },
  });
  const cardsLv = () => ({ easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } });
  const BODY_SAFE = ['팔을 벌려 친구와 부딪히지 않을 만큼 떨어져 서요.', '소리를 낼 때 친구 귀 가까이에서 치거나 소리 지르지 않아요.'];
  // 차시 한 개를 3단계 틀에 맞춰 조립한다(도입 6분·전개 26분·정리 8분)
  const lesson = (n, std, o) => Object.assign(head(n, std), {
    title: o.title, objective: o.objective,
    illustration: { prompt: ILL(o.ill), scene: scene(n - 1, o.sceneText) },
    stages: [
      Object.assign({ id: 'intro', title: '도입', minutes: 6, teacher: o.intro.teacher, student: o.intro.student }, o.intro.demo ? { demo: o.intro.demo } : {}),
      { id: 'main', title: '전개', minutes: 26, activities: o.acts.map((a, i) => Object.assign({ id: `a${i + 1}` }, a)) },
      { id: 'wrapup', title: '정리', minutes: 8, teacher: o.wrap, exitTicket: o.exit },
    ],
    worksheet: o.ws, differentiation: o.diff, teacherNotes: o.notes,
  }, o.safety ? { safety: o.safety } : {});
  const lessons = [];

  // ───────────────────────── 1차시 (도입) ─────────────────────────
  lessons.push(lesson(1, S1, {
    title: '빗방울과 천둥 장면을 바로 소리로 바꾸어 내기',
    objective: '장면을 보고 미리 정하지 않은 채 곧바로 소리로 바꾸어 내는 것이 즉흥 표현임을 알고, 장면에 어울리는 소리 내는 방법을 고를 수 있다.',
    ill: 'a child under a paper umbrella listening to raindrops and thunder that turn into musical notes',
    sceneText: '바로 소리로!',
    safety: BODY_SAFE,
    intro: {
      teacher: '"창밖에서 갑자기 비가 쏟아진다고 상상해 봐요. 연습 없이 지금 바로 입이나 손으로 빗소리를 내 볼까요?" 3초 안에 내 보게 한 뒤 "이렇게 미리 정하지 않고 그 자리에서 내는 소리를 즉흥 표현이라고 해요"라고 알려 준다. "틀리면 어쩌죠?" 하는 학생에게는 "즉흥에는 틀린 소리가 없고, 장면에 어울리는지만 들어요"라고 말한다.',
      student: '비 오는 장면을 상상하며 지금 바로 소리를 내어 봅시다. 어떤 소리를 냈나요?',
      demo: { tool: 'keyboard', options: { from: '도', to: '높은도' }, sequence: [{ notes: ['높은도', '시', '높은도', '라', '시'] }] },
    },
    acts: [
      {
        title: '활동 1. 장면에 어울리는 소리 내는 방법 고르기', minutes: 12, tool: 'mindmap',
        teacher: '"빗방울은 작고 가벼운데 천둥은 크고 무거워요. 손으로 어떻게 내면 닮을까요?" 카드마다 직접 해 보고 이어 보게 한다. 3번 문항에서 ‘모두 큰 소리가 어울린다’고 고르는 학생에게는 "보슬비와 소나기가 같은 소리일까요?"라고 되묻는다.',
        task: '장면 카드를 읽고 직접 소리를 내 본 뒤, 어울리는 소리 내는 방법에 이어요.',
        levels: cardsLv(),
        items: [
          { prompt: '장면에 어울리는 소리 내는 방법을 이어 보세요.', toolOptions: { mode: 'match', topic: '장면과 소리', slots: [{ id: 'r', label: '빗방울이 톡톡 떨어져요' }, { id: 't', label: '천둥이 우르릉 울려요' }, { id: 'w', label: '바람이 휘익 불어요' }], cards: ['손가락 끝으로 책상을 톡톡 두드려요', '손바닥으로 무릎을 크게 쿵쿵 쳐요', '입을 오므리고 후— 하고 길게 불어요'] }, target: { match: { r: '손가락 끝으로 책상을 톡톡 두드려요', t: '손바닥으로 무릎을 크게 쿵쿵 쳐요', w: '입을 오므리고 후— 하고 길게 불어요' } }, difficulty: 0.1,
            hints: ['장면의 소리가 작은지 큰지, 짧은지 긴지 먼저 떠올리고 카드를 직접 해 본 소리와 견주어요.', '이은 카드를 해 보고 장면과 소리의 크기가 맞는지 들어 보세요. 천둥을 손끝으로 내면 작아서 닮지 않아요.', '톡톡은 손끝, 우르릉은 손바닥으로 크게, 휘익은 숨을 길게 내쉬는 소리예요.'],
            levels: { challenge: { toolOptions: { cards: ['손가락 끝으로 책상을 톡톡 두드려요', '손바닥으로 무릎을 크게 쿵쿵 쳐요', '입을 오므리고 후— 하고 길게 불어요', '발로 바닥을 빠르게 구르며 달려요'] } } } },
          { prompt: '즉흥 표현에 해당하는 것만 골라 보세요.', toolOptions: { mode: 'pick', topic: '즉흥 표현', basket: '즉흥 표현', cards: ['장면을 보고 바로 소리를 내요', '어제 외워 둔 소리를 그대로 내요', '떠오르는 대로 목소리와 손으로 소리를 이어 내요', '악보에 적힌 음을 차례대로 쳐요'] }, target: { pick: ['장면을 보고 바로 소리를 내요', '떠오르는 대로 목소리와 손으로 소리를 이어 내요'] }, reveal: 'after-check', difficulty: 0.2,
            predict: { q: '외워 둔 소리를 그대로 내는 것도 즉흥 표현일까요?', options: ['즉흥이에요', '즉흥이 아니에요', '잘 모르겠어요'], answer: 1 },
            conclude: '즉흥 표현은 그 자리에서 떠올려 바로 내는 소리예요. 외워 둔 것이나 악보를 따르는 것과 달라요.' },
          { prompt: '고요한 보슬비 장면이에요. 어울리는 소리 내는 방법을 모두 골라 보세요.', toolOptions: { mode: 'pick', topic: '보슬비', basket: '어울려요', cards: ['손가락으로 책상을 아주 가볍게 톡톡', '손톱으로 종이를 살살 긁어요', '책상을 주먹으로 쾅쾅 쳐요', '큰 소리로 소리 질러요'] }, target: { pick: ['손가락으로 책상을 아주 가볍게 톡톡', '손톱으로 종이를 살살 긁어요'] }, difficulty: 0.25,
            hints: ['보슬비는 가늘고 조용히 내려요. 소리의 크기부터 정해 보세요.', '고른 카드를 직접 내 보고 보슬비처럼 여린지 들어 보세요.', '아주 가볍게 톡톡 치는 것과 살살 긁는 것만 여린 소리예요.'] },
        ],
      },
      {
        title: '활동 2. 건반으로 빗방울과 천둥 소리 내기', minutes: 14, tool: 'keyboard',
        teacher: '"높은 쪽 건반은 작은 빗방울, 낮은 쪽 건반은 먼 천둥처럼 들려요. 어떤 음을 칠지 미리 정하지 말고 장면을 떠올리며 바로 눌러 봐요." 같은 음을 여러 번 눌러도 괜찮다고 말한다. 3번에서 계이름을 외워 둔 순서대로만 치려는 학생에게 "장면을 보고 손이 가는 대로 눌러 보세요"라고 권한다.',
        task: '장면을 떠올리고 규칙에 맞게 건반을 바로 쳐요. 소리는 누를 때만 나요.',
        levels: mel(),
        items: [
          { prompt: '빗방울이 톡톡 떨어져요. 높은 음 솔·라·시·높은도만 써서 네 음을 바로 쳐 보세요.', target: { compose: { length: 4, only: ['솔', '라', '시', '높은도'] } }, difficulty: 0.15 },
          { prompt: '멀리서 천둥이 울려요. 낮은 음 도와 레만 써서 세 음을 쳐 보세요.', target: { compose: { length: 3, only: ['도', '레'] }, selfCheck: ['쿵 하고 울리는 천둥을 떠올리며 쳤어요'] }, difficulty: 0.2 },
          { prompt: '두 장면을 이어 하나의 소리 이야기로 쳐 보고 점검해요.', target: { selfCheck: ['처음에는 빗방울 소리로 시작했어요', '천둥 소리를 한 번 넣었어요', '미리 정하지 않고 떠오르는 대로 쳤어요'], minNotes: 6 }, difficulty: 0.15 },
        ],
      },
    ],
    wrap: '"오늘 미리 정하지 않고 바로 낸 소리는 무엇이었나요?" 두 학생에게 장면과 소리를 한 문장으로 말하게 한다. 출구 2번에서 외워 둔 소리를 즉흥이라고 고른 학생에게는 "그 소리는 어제 정한 걸까요, 지금 떠올린 걸까요?"라고 되묻는다.',
    exit: [
      { type: 'tool', tool: 'keyboard', options: { from: '도', to: '높은도' }, prompt: '바람이 휘익 부는 장면이에요. 도에서 시작해 높은 쪽으로 올라가는 세 음을 바로 쳐 보세요.', target: { compose: { length: 3, startOn: '도' } }, difficulty: 0.2 },
      { type: 'choice', prompt: '갑자기 소나기가 내려요. 즉흥 표현은 어느 것일까요?', options: ['그 자리에서 떠올라 소리로 바꾸어 내요', '지난주에 정해 둔 소리를 그대로 내요', '악보를 보고 음을 차례대로 쳐요'], answer: 0, difficulty: 0.2, explain: '즉흥 표현은 장면을 보고 그 자리에서 떠올려 바로 내는 소리예요.' },
      { type: 'mood', prompt: '미리 정하지 않고 바로 소리를 내 보니 어땠나요?' },
    ],
    ws: {
      title: '장면을 소리로 바꾸기',
      items: [
        { type: 'table', prompt: '장면마다 소리를 어떻게 낼지 쓰세요.', columns: ['장면', '소리 내는 방법'], cells: [['빗방울이 톡톡', ''], ['천둥이 우르릉', ''], ['바람이 휘익', '']] },
        { type: 'figure', prompt: '빗방울 소리를 낼 때 눌러 보고 싶은 건반 세 개에 ○ 하세요.', tool: 'keyboard', wide: true, options: { from: '도', to: '높은도' }, figures: [{ caption: '높은 쪽과 낮은 쪽 가운데 어느 쪽을 골랐나요? ( 높은 쪽 · 낮은 쪽 )' }], answer: '오른쪽(높은 쪽) 건반 세 개에 ○' },
        { type: 'choice', prompt: '즉흥 표현에 ○ 하세요.', options: ['장면을 보고 바로 소리를 내요', '외워 둔 소리를 그대로 내요', '악보대로 쳐요'], answer: '장면을 보고 바로 소리를 내요' },
        { type: 'short', prompt: '오늘 내가 낸 소리 가운데 가장 마음에 든 소리와 그 장면을 쓰세요.' },
      ],
      easy: {
        note: '즉흥 표현은 미리 정하지 않고 그 자리에서 떠올려 바로 내는 소리예요. 작은 소리는 손끝, 큰 소리는 손바닥으로 내요.',
        items: [
          { type: 'choice', prompt: '천둥에 어울리는 소리 내는 방법에 ○ 하세요.', options: ['손끝으로 톡톡', '손바닥으로 쿵쿵'], answer: '손바닥으로 쿵쿵' },
          { type: 'choice', prompt: '빗방울에 어울리는 건반은 어느 쪽일까요?', options: ['높은 쪽', '낮은 쪽'], answer: '높은 쪽' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '미리 정하지 않고 바로 내는 소리를 ___ 표현이라고 해요.', answer: '즉흥' },
          { type: 'short', prompt: '바람 장면에 어울리는 소리 하나를 쓰세요.' },
        ],
      },
    },
    diff: {
      easy: '카드를 맞는 칸에 놓으면 초록 테두리가 보이고, 건반을 듣는 동안 건반이 빛나요.',
      base: '카드를 스스로 놓고 확인해요. 계이름을 켜고 끌 수 있어요.',
      challenge: '장면과 맞지 않는 카드가 하나 더 있고, 건반은 계이름 없이 귀와 느낌으로 쳐요.',
    },
    notes: '자주 보이는 어려움: ① 즉흥이면 아무 소리나 내도 된다고 여긴다 → 장면에 어울리는지를 기준으로 삼는다. ② 틀릴까 봐 소리를 내지 못한다 → 교사가 먼저 서툰 소리를 내 보인다. ③ 큰 소리가 센 표현이라고 여긴다 → 보슬비처럼 여린 소리도 장면에 어울리면 좋은 표현이다. 소리는 학생이 누를 때만 난다.',
  }));

  // ───────────────────────── 2차시 (연습) ─────────────────────────
  lessons.push(lesson(2, S1, {
    title: '짝이 낸 소리 끝에 내 소리를 이어 붙이기',
    objective: '짝이 낸 소리를 끝까지 듣고 그 끝에 자기 소리를 이어 붙여 짧은 소리 흐름을 만들 수 있다.',
    ill: 'two children passing glowing sound bubbles to each other along a ribbon of musical notes',
    sceneText: '소리를 이어요',
    intro: {
      teacher: '"민지가 톡톡 하고 책상을 두 번 쳤어요. 준호는 어떻게 이어 가면 좋을까요?" 두 학생에게 시켜 보고 "준호는 민지 소리가 끝난 뒤에 소리를 냈나요, 겹쳐서 냈나요?"를 묻는다. ‘내 소리만 크게 내면 된다’는 학생에게 "이어 붙이려면 짝 소리를 먼저 들어야 해요"라고 짚는다.',
      student: '짝이 낸 소리를 듣고 그 끝에 내 소리를 이어 보려면 무엇을 해야 할까요?',
    },
    acts: [
      {
        title: '활동 1. 소리를 이어 가는 차례와 방법 알기', minutes: 12, tool: 'story',
        teacher: '"소리를 주고받는 데에도 차례가 있어요." 카드를 읽고 짝과 번갈아 실제로 해 보게 한다. 2번 문항에서 ‘짝 소리를 끊고 들어간다’를 고르는 학생에게 "그렇게 하면 짝 소리가 들릴까요?"라고 묻는다.',
        task: '짝과 소리를 주고받는 차례대로 카드를 놓고, 이어 붙이기에 알맞은 방법을 골라요.',
        levels: cardsLv(),
        items: [
          { prompt: '소리를 이어 가는 차례대로 카드를 놓아 보세요.', toolOptions: { slots: 4, cards: [{ id: 'a', text: '짝이 톡톡 두 번 소리를 내요', motif: 'cloud' }, { id: 'b', text: '나는 끝까지 듣고 기다려요', motif: 'star' }, { id: 'c', text: '그 끝에 톡 하나를 더 이어 내요', motif: 'flower' }, { id: 'd', text: '짝이 내 소리를 듣고 다시 이어요', motif: 'sun' }] }, target: { order: ['a', 'b', 'c', 'd'] }, difficulty: 0.15,
            hints: ['소리를 먼저 내는 사람과 그 소리를 듣는 사람이 누구인지 생각해요.', '내 소리를 내기 전에 해야 할 일이 하나 있어요. 짝 소리가 끝났는지 들어 보세요.', '짝이 소리를 내고, 내가 끝까지 들은 뒤, 이어 내고, 짝이 다시 이어요.'] },
          { prompt: '짝 소리에 잘 이어 붙이는 방법만 골라 보세요.', toolOptions: { mode: 'pick', topic: '잘 이어 붙이기', basket: '잘 이어요', cards: ['짝 소리가 끝나기를 기다려요', '짝 소리 위에 겹쳐 크게 내요', '짝 소리와 어울리는 높이를 골라요', '내가 정해 둔 소리만 내요'] }, target: { pick: ['짝 소리가 끝나기를 기다려요', '짝 소리와 어울리는 높이를 골라요'] }, difficulty: 0.2 },
          { prompt: '짝이 손바닥으로 무릎을 천천히 쿵…… 쿵…… 하고 쳤어요. 알맞은 것을 골라 보세요.', toolOptions: { mode: 'pick', topic: '알맞은 말과 행동', basket: '알맞아요', cards: ['손끝으로 아주 빠르게 타다다닥 쳐요', '같은 느린 박으로 낮은 소리를 하나 더 보태요', '소리를 내지 않고 가만히 있어요'] }, target: { pick: ['같은 느린 박으로 낮은 소리를 하나 더 보태요'] }, difficulty: 0.25, hints: ['상황을 다시 읽고, 읽는 사람이나 짝의 마음이 어떨지 먼저 떠올려 보세요.', '고른 카드를 짝에게 말했다고 생각해 보세요. 짝이 속상해하거나 소리가 끊기지 않는지 살펴요.', '같은 느린 박으로 낮은 소리를 하나 더 보태요 — 짝 소리와 하나로 이어지는 느낌이 나요.'], conclude: '짝 소리와 하나로 이어지는 느낌이 나요.' },
        ],
      },
      {
        title: '활동 2. 짝이 친 음 끝에 내 음 이어 치기', minutes: 14, tool: 'keyboard',
        teacher: '"짝이 친 마지막 음을 귀에 담았다가 그 음에서 출발해 보세요." 가락 듣기를 눌러 짝의 소리를 대신 들려준다. 마지막 음을 놓친 학생에게 한 번 더 들려주고 "끝 음이 올라갔나요, 내려갔나요?" 하고 묻는다. 2번은 같은 음으로 시작해야 이어졌다고 느껴지는 까닭을 학생 말로 들어 본다.',
        task: '짝이 친 가락을 듣고 따라 친 뒤, 마지막 음에서 이어 새 음을 보태요.',
        levels: mel(),
        items: [
          { prompt: '짝이 친 세 음이에요. 가락 듣기를 누르고 따라 쳐 보세요.', toolOptions: { melody: ['미', '솔', '미'] }, target: { notes: ['미', '솔', '미'] }, difficulty: 0.15 },
          { prompt: '짝의 마지막 음은 미예요. 같은 미에서 시작해 네 음을 이어 쳐 보세요.', target: { compose: { length: 4, startOn: '미' } }, difficulty: 0.2 },
          { prompt: '짝에게 내가 이어 친 가락을 들려주고 점검해요.', target: { selfCheck: ['짝의 소리가 끝난 뒤에 내 소리를 냈어요', '짝의 마지막 음에서 이어서 시작했어요', '짝과 역할을 바꾸어 한 번 더 해 보았어요'], minNotes: 4 }, difficulty: 0.15 },
        ],
      },
    ],
    wrap: '"짝의 소리에 이어 붙일 때 가장 중요한 것은 무엇이었나요?" 두 학생이 말하게 한다. 출구 1번에서 시작 음을 마음대로 고른 학생에게는 짝이 친 마지막 음을 다시 들려주고 같은 음에서 출발해 보게 한다.',
    exit: [
      { type: 'tool', tool: 'keyboard', options: { from: '도', to: '높은도' }, prompt: '짝의 마지막 음이 솔이에요. 솔에서 시작해 세 음을 이어 쳐 보세요.', target: { compose: { length: 3, startOn: '솔' } }, difficulty: 0.2 },
      { type: 'choice', prompt: '짝 소리에 이어 붙이려면 소리를 내기 전에 무엇을 해야 할까요?', options: ['짝 소리를 끝까지 들어요', '내 소리를 가장 크게 내요', '짝 소리를 가로막고 먼저 내요'], answer: 0, difficulty: 0.15, explain: '짝 소리를 끝까지 들어야 그 끝에서 자연스럽게 이어 갈 수 있어요.' },
      { type: 'mood', prompt: '짝과 소리를 이어 보니 어땠나요?' },
    ],
    ws: {
      title: '소리 이어 붙이기',
      items: [
        { type: 'table', prompt: '짝이 낸 소리에 내가 이어 붙일 소리를 쓰세요.', columns: ['짝이 낸 소리', '내가 이어 낼 소리'], cells: [['톡톡 가볍게', ''], ['쿵…… 쿵…… 느리게', ''], ['휘익 길게', '']] },
        { type: 'figure', prompt: '짝이 마지막으로 친 음이 ‘미’예요. 같은 음에서 시작하는 건반에 ○ 하세요.', tool: 'keyboard', wide: true, options: { from: '도', to: '높은도', printNames: true }, figures: [{ caption: '○ 한 건반의 계이름: ____' }], answer: '미' },
        { type: 'choice', prompt: '소리를 이어 붙이는 방법으로 알맞은 것에 ○ 하세요.', options: ['짝 소리가 끝난 뒤에 내요', '짝 소리 위에 겹쳐 내요', '정해 둔 소리만 내요'], answer: '짝 소리가 끝난 뒤에 내요' },
        { type: 'short', prompt: '짝의 소리에 이어 붙일 때 어려웠던 점과 해결한 방법을 쓰세요.' },
      ],
      easy: {
        note: '짝 소리를 끝까지 듣고, 그 소리의 느낌이나 높이에 맞추어 이어요.',
        items: [
          { type: 'choice', prompt: '먼저 해야 할 일에 ○ 하세요.', options: ['짝 소리 듣기', '내 소리 크게 내기'], answer: '짝 소리 듣기' },
          { type: 'choice', prompt: '짝이 느리고 낮게 쳤어요. 이어 붙이기에 어울리는 소리는?', options: ['느리고 낮은 소리', '빠르고 높은 소리'], answer: '느리고 낮은 소리' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '짝의 마지막 음에서 ___해요.', answer: '이어서 시작' },
          { type: 'short', prompt: '오늘 짝과 소리를 주고받은 느낌을 한 줄로 쓰세요.' },
        ],
      },
    },
    diff: {
      easy: '카드가 맞는 자리에 놓이면 초록 테두리가 보이고, 짝의 가락을 듣는 동안 건반이 빛나요.',
      base: '카드를 스스로 놓고 확인해요. 계이름을 켜고 끌 수 있어요.',
      challenge: '건반은 계이름 없이 귀로 짝의 마지막 음을 찾아 이어요.',
    },
    notes: '자주 보이는 어려움: ① 짝 소리를 듣지 않고 자기 소리만 낸다 → 짝이 끝날 때까지 손을 무릎에 올리고 기다리는 약속을 정한다. ② 이어 붙이는 것을 똑같이 따라 하는 것으로 여긴다 → 느낌은 닮고 소리는 새로 보태는 것이라고 말해 준다. ③ 시작 음을 놓친다 → 가락 듣기를 한 번 더 들려준다. 소리는 누를 때만 난다.',
  }));

  // ───────────────────────── 3차시 (확장) ─────────────────────────
  lessons.push(lesson(3, S1, {
    title: '낱말 카드를 뽑아 장면에 맞는 세기와 리듬으로 바로 표현하기',
    objective: '뽑은 낱말 카드의 장면을 떠올려 소리의 세기와 리듬의 길고 짧음을 곧바로 정해 표현할 수 있다.',
    ill: 'a child drawing word cards from a paper hat, each card turning into a quiet snow scene or a busy market scene made of rhythm blocks',
    sceneText: '카드 한 장, 소리 한 번',
    intro: {
      teacher: '"낱말 카드에 ‘눈 오는 밤’이 나왔어요. 소리를 내기 전에 마음속으로 무엇을 정하면 좋을까요?" 소리의 크기, 길고 짧음, 빠르기가 나오기를 기다려 칠판에 적는다. ‘카드 글자를 그대로 읽으면 된다’는 학생에게는 "읽는 것과 소리로 바꾸는 것은 달라요. 눈이 쌓이는 소리는 어떨까요?"라고 묻는다.',
      student: '낱말 카드를 뽑았을 때 소리를 내기 전에 무엇을 정하면 좋을까요?',
    },
    acts: [
      {
        title: '활동 1. 장면에 어울리는 소리의 세기와 행동 고르기', minutes: 12, tool: 'emotion',
        teacher: '"눈 오는 밤은 소리가 어느 정도로 세면 어울릴까요?" 척도에서 고른 칸을 손으로 크기를 나타내며 말하게 한다. 시장 장면에서 ‘시끄러우니 나쁘다’고 하는 학생에게 "시장은 사람이 많아 소리가 센 것이 장면에 어울리는 거예요"라고 짚는다. 3번은 소리가 안 나올 때의 마음을 나누며 즉흥은 한 가지만 해도 된다고 알려 준다.',
        task: '장면을 읽고 어울리는 소리의 세기 칸을 고르거나, 망설이는 친구에게 해 줄 행동을 골라요.',
        levels: cardsLv(),
        items: [
          { prompt: '눈이 소복소복 쌓이는 고요한 밤이에요. 어울리는 소리의 세기는 어디일까요?', toolOptions: { mode: 'scale', situation: '눈이 소복소복 쌓이는 고요한 밤이에요.', feeling: '편안함', steps: 5, scaleLabels: { 1: '아주 여리게', 5: '아주 세게' } }, target: { level: [1, 2] }, difficulty: 0.15 },
          { prompt: '사람이 북적이는 시장 장면이에요. 어울리는 소리의 세기는 어디일까요?', toolOptions: { mode: 'scale', situation: '사람들이 북적이며 물건을 사고파는 시장이에요.', feeling: '신남', steps: 5, scaleLabels: { 1: '아주 여리게', 5: '아주 세게' } }, target: { level: [4, 5] }, difficulty: 0.2 },
          { prompt: '짝이 카드를 뽑고 소리를 내지 못해요. 어떻게 도우면 좋을까요?', toolOptions: { mode: 'branch', situation: '짝이 ‘무지개’ 카드를 뽑았는데 틀릴까 봐 한참 가만히 있어요.', choices: [{ id: 'laugh', text: '"그것도 못 해?" 하고 웃어요', result: '짝이 더 움츠러들어 소리를 내지 못해요.', mood: '속상함', why: '즉흥에서는 서툰 소리도 하나의 표현이에요.' }, { id: 'wait', text: '"한 가지만 내 봐, 나도 같이 해 볼게" 하고 먼저 소리를 내요', result: '짝이 용기를 내어 작은 소리부터 시작해요.', mood: '뿌듯함' }, { id: 'skip', text: '내 차례만 하고 짝은 건너뛰어요', result: '짝이 소리를 낼 기회를 놓쳐요.', mood: '걱정', why: '함께 만드는 즉흥 표현은 서로 기다려 주는 데서 시작해요.' }] }, target: { choice: 'wait' }, difficulty: 0.2 },
        ],
      },
      {
        title: '활동 2. 장면에 맞는 두 마디 리듬 바로 짓기', minutes: 14, tool: 'keyboard',
        teacher: '"눈 오는 밤은 긴 소리를 많이 쓰면 어떨까요? 시장은 짧은 소리를 빠르게 이어 볼까요?" 리듬 블록을 놓은 뒤 리듬 듣기로 들어 보고 장면과 닮았는지 묻는다. 2분음표를 놓았다가 박 수가 넘쳐 속상해하는 학생에게 "마디마다 4박이 되면 돼요, 하나 빼 볼까요?"라고 말한다.',
        task: '장면에 맞는 리듬을 두 마디(마디마다 4박) 안에서 블록으로 지어요. 듣기를 눌러 소리가 장면과 닮았는지 들어요.',
        levels: rhy(4, 2),
        items: [
          { prompt: '눈 오는 고요한 밤이에요. 두 마디를 4박씩 채우고 2분음표를 꼭 넣어 보세요.', target: { beats: true, use: ['h'] }, difficulty: 0.15 },
          { prompt: '북적이는 시장이에요. 두 마디를 4박씩 채우고 8분음표를 꼭 넣어 보세요.', target: { beats: true, use: ['e'] }, difficulty: 0.2 },
          { prompt: '내가 뽑은 낱말 카드 장면의 리듬을 두 마디 지어 짝에게 들려주고 점검해요.', target: { beats: true, selfCheck: ['장면의 낱말을 짝에게 비밀로 하고 쳤어요', '짝이 어떤 장면인지 한 번에 말했거나 힌트를 주었어요', '긴 소리와 짧은 소리를 함께 썼어요'] }, difficulty: 0.15 },
        ],
      },
    ],
    wrap: '"오늘 카드 장면에 맞게 정한 것은 소리의 무엇이었나요?" 세기와 길고 짧음이 나오는지 듣는다. 출구 2번에서 눈 오는 밤에 센 소리를 고른 학생에게는 척도 위에서 눈이 쌓이는 모습을 손으로 나타내 보게 한 뒤 다시 고르게 한다.',
    exit: [
      { type: 'tool', tool: 'keyboard', options: { mode: 'rhythm', meter: 3, measures: 2, blocks: ['q', 'e', 'h', 'qr'] }, prompt: '천천히 걷는 거북 장면이에요. 두 마디를 3박씩 채우고 2분음표를 넣어 보세요.', target: { beats: true, use: ['h'] }, difficulty: 0.25 },
      { type: 'choice', prompt: '번개가 번쩍 치는 장면에 어울리는 소리는 어느 것일까요?', options: ['짧고 센 소리를 한 번 내요', '아주 길고 여린 소리를 내요', '소리를 내지 않고 읽기만 해요'], answer: 0, difficulty: 0.2, explain: '번쩍하는 순간은 짧고 센 소리로 나타낼 수 있어요.' },
      { type: 'mood', prompt: '카드를 뽑아 바로 소리를 내 보니 어땠나요?' },
    ],
    ws: {
      title: '카드 장면을 소리로',
      items: [
        { type: 'table', prompt: '장면마다 알맞은 세기와 소리 길이를 쓰세요.', columns: ['장면', '세기(여리게·세게)', '소리 길이(길게·짧게)'], cells: [['눈 오는 밤', '', ''], ['북적이는 시장', '', ''], ['졸고 있는 고양이', '', '']] },
        { type: 'figure', prompt: '4박 한 마디를 소리가 긴 리듬으로 채우려고 해요. 아래 블록 가운데 알맞은 것에 ○ 하세요.', tool: 'keyboard', wide: true, options: { mode: 'rhythm', meter: 4, measures: 1 }, figures: [{ state: { rhythm: ['h', 'q', 'q'] }, caption: '이 리듬은 4박이 맞나요? ( 맞다 · 아니다 )' }], answer: '맞다(2박+1박+1박)' },
        { type: 'choice', prompt: '눈 오는 밤에 가장 어울리는 소리에 ○ 하세요.', options: ['길고 여린 소리', '짧고 센 소리', '아주 빠른 소리'], answer: '길고 여린 소리' },
        { type: 'short', prompt: '내가 뽑고 싶은 낱말 카드 하나와 그 장면의 소리를 어떻게 낼지 쓰세요.' },
      ],
      easy: {
        note: '조용한 장면은 여리고 길게, 북적이는 장면은 세고 짧게 소리를 내 볼 수 있어요.',
        items: [
          { type: 'choice', prompt: '고요한 밤에 어울리는 세기에 ○ 하세요.', options: ['여리게', '세게'], answer: '여리게' },
          { type: 'choice', prompt: '북적이는 시장에 어울리는 소리는?', options: ['짧은 소리를 빠르게', '긴 소리를 천천히'], answer: '짧은 소리를 빠르게' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '2분음표는 ___박만큼 길게 소리 내요.', answer: '2' },
          { type: 'short', prompt: '오늘 가장 마음에 든 장면 하나를 쓰세요.' },
        ],
      },
    },
    diff: {
      easy: '고른 칸에 맞는지 바로 초록 테두리로 알려 주고, 박 수를 마디마다 보여 줘요.',
      base: '카드와 척도를 스스로 고르고 확인해요.',
      challenge: '리듬 블록에 점2분음표와 쉼표가 더 있고, 마디의 박 수를 스스로 세요.',
    },
    notes: '자주 보이는 어려움: ① 센 소리만 좋은 표현이라고 여긴다 → 장면에 맞는 세기를 기준으로 삼는다. ② 마디의 박 수를 넘긴다 → 4박이 되도록 하나씩 세어 가며 놓는다. ③ 카드 글자를 그대로 읽는 것으로 끝낸다 → 읽은 뒤 소리로 바꾸는 시간을 따로 준다. 소리는 학생이 누를 때만 난다.',
  }));

  // ───────────────────────── 4차시 (확장) ─────────────────────────
  lessons.push(lesson(4, S1, {
    title: '같은 가락을 느리게·빠르게, 여리게·세게 바꾸어 다른 느낌 내기',
    objective: '같은 소리를 빠르기와 세기만 바꾸어 쳐 보고, 바꾼 것에 따라 표현의 느낌이 달라짐을 말할 수 있다.',
    ill: 'a paper cat tiptoeing and a paper elephant stomping on the same row of piano keys, one soft and slow, one loud and fast',
    sceneText: '같은 소리, 다른 느낌',
    safety: BODY_SAFE,
    intro: {
      teacher: '"같은 ‘쿵쿵쿵’ 세 번을 살금살금 걷는 고양이처럼도, 쿵쾅쿵쾅 달리는 코끼리처럼도 칠 수 있어요. 무엇을 바꾸면 될까요?" 무릎 치기로 느리고 여리게 한 번, 빠르고 세게 한 번 해 보이고 바뀐 것을 학생 말로 듣는다. ‘음이 달라졌다’고 하는 학생에게는 "친 곳은 같은 무릎이었는데 바뀐 것은 무엇이에요?"라고 짚는다.',
      student: '같은 세 번의 소리를 고양이처럼, 코끼리처럼 내 볼 때 무엇이 달라졌는지 말해 봅시다.',
    },
    acts: [
      {
        title: '활동 1. 바꾼 것과 느낌 짝 짓기', minutes: 12, tool: 'mindmap',
        teacher: '"빠르기는 걸음이 빠른지 느린지, 세기는 소리가 큰지 작은지예요." 카드를 읽고 무릎 치기로 직접 내 보게 한다. 2번에서 코끼리를 ‘빠르고 세게’로 고르는 학생에게 "커다란 코끼리가 종종걸음으로 걸을까요?"라고 되물어 느린 걸음과 센 소리를 함께 떠올리게 한다.',
        task: '카드를 직접 소리 내 본 뒤, 바꾼 것을 나누거나 어울리는 소리와 이어요.',
        levels: cardsLv(),
        items: [
          { prompt: '같은 소리를 바꾼 방법이 빠르기인지 세기인지 나누어 보세요.', toolOptions: { mode: 'sort', topic: '무엇을 바꿨나', slots: ['빠르기를 바꿔요', '세기를 바꿔요'], cards: ['같은 걸음을 점점 빨리 쳐요', '같은 걸음을 아주 천천히 쳐요', '같은 걸음을 아주 작게 쳐요', '같은 걸음을 힘껏 크게 쳐요'] }, target: { sort: { '빠르기를 바꿔요': ['같은 걸음을 점점 빨리 쳐요', '같은 걸음을 아주 천천히 쳐요'], '세기를 바꿔요': ['같은 걸음을 아주 작게 쳐요', '같은 걸음을 힘껏 크게 쳐요'] } }, difficulty: 0.15,
            hints: ['카드에서 ‘빨리·천천히’처럼 걸음 빠르기를 말하는지, ‘작게·크게’처럼 소리의 크기를 말하는지 보세요.', '넣은 카드를 소리 내 보고 빠르기가 달라지는지 크기가 달라지는지 들어 보세요.', '빨리·천천히는 빠르기, 작게·크게는 세기예요.'] },
          { prompt: '동물마다 어울리게 소리를 바꾸려면 어떻게 할까요? 이어 보세요.', toolOptions: { mode: 'match', topic: '동물과 소리', slots: [{ id: 'c', label: '살금살금 걷는 고양이' }, { id: 'd', label: '쫓아오는 강아지' }, { id: 'e', label: '쿵쿵 걷는 코끼리' }], cards: ['여리고 느리게', '세고 빠르게', '세고 느리게'] }, target: { match: { c: '여리고 느리게', d: '세고 빠르게', e: '세고 느리게' } }, difficulty: 0.25,
            levels: { challenge: { toolOptions: { cards: ['여리고 느리게', '세고 빠르게', '세고 느리게', '여리고 빠르게'] } } } },
          { prompt: '‘졸린 아기 곰’ 소리에 어울리게 바꾼 것만 골라 보세요.', toolOptions: { mode: 'pick', topic: '졸린 아기 곰', basket: '어울려요', cards: ['아주 느리게 쳐요', '아주 여리게 쳐요', '힘차게 빠르게 쳐요', '점점 빨라지며 세게 쳐요'] }, target: { pick: ['아주 느리게 쳐요', '아주 여리게 쳐요'] }, reveal: 'after-check', difficulty: 0.3,
            conclude: '졸린 곰은 느리고 여린 소리가 어울려요. 빠르기와 세기를 바꾸면 느낌이 달라져요.' },
        ],
      },
      {
        title: '활동 2. 같은 세 음을 느리게·빠르게 듣고 쳐 보기', minutes: 14, tool: 'keyboard',
        teacher: '"같은 도·미·솔을 느리게 들려주고 빠르게도 들려줄게요. 음이 바뀌었을까요, 빠르기만 바뀌었을까요?" 예상을 고르게 한 뒤 듣게 한다. 빠르게 들으면 음이 바뀐 줄 아는 학생에게는 한 번 더 들려주고 손가락으로 음 수를 세게 한다. 3번은 스스로 느낌을 바꾸어 두 번 친 뒤 짝에게 어느 느낌인지 묻는 활동이에요.',
        task: '가락 듣기를 눌러 듣고 따라 친 뒤, 같은 음을 다른 빠르기로 쳐 다른 느낌을 내요.',
        levels: mel(),
        items: [
          { prompt: '느린 세 음이에요. 가락 듣기를 누르고 따라 쳐 보세요.', toolOptions: { melody: ['도', '미', '솔'], tempo: 56 }, target: { notes: ['도', '미', '솔'] }, difficulty: 0.15 },
          { prompt: '같은 세 음을 빠르게 들려줘요. 듣고 따라 쳐 보세요.', toolOptions: { melody: ['도', '미', '솔'], tempo: 156 }, target: { notes: ['도', '미', '솔'] }, difficulty: 0.2,
            predict: { q: '빠르게 들려주면 음도 바뀔까요?', options: ['음도 바뀌어요', '음은 그대로예요', '잘 모르겠어요'], answer: 1 },
            conclude: '음은 그대로이고 빠르기만 바뀌었어요. 빠르기가 달라지면 느낌이 달라져요.' },
          { prompt: '같은 세 음을 고양이처럼 한 번, 코끼리처럼 한 번 쳐 보고 점검해요.', target: { selfCheck: ['고양이는 여리고 느리게 쳤어요', '코끼리는 세고 느리게 쳤어요', '짝이 두 번의 느낌 차이를 말했어요'], minNotes: 3 }, difficulty: 0.15 },
        ],
      },
    ],
    wrap: '"같은 소리를 두 가지 느낌으로 낼 때 무엇을 바꾸었나요?" 두 학생이 빠르기와 세기를 말하게 한다. 출구 2번에서 음을 바꾼다고 고른 학생에게는 같은 음을 빠르게·느리게 쳐 보이고 한 번 더 고르게 한다.',
    exit: [
      { type: 'tool', tool: 'keyboard', options: { from: '도', to: '높은도', melody: ['솔', '미', '도'], tempo: 140 }, prompt: '빠른 가락을 듣고 건반으로 따라 쳐 보세요.', target: { notes: ['솔', '미', '도'] }, difficulty: 0.2 },
      { type: 'choice', prompt: '같은 가락을 아주 여리고 느리게 쳤더니 잠든 아기 같았어요. 바꾼 것은 무엇일까요?', options: ['빠르기와 세기', '음의 이름', '건반의 모양'], answer: 0, difficulty: 0.2, explain: '여리게는 세기, 느리게는 빠르기예요. 음은 그대로예요.' },
      { type: 'mood', prompt: '같은 소리로 다른 느낌을 내 보니 어땠나요?' },
    ],
    ws: {
      title: '느낌을 바꾸는 두 가지',
      items: [
        { type: 'table', prompt: '장면마다 빠르기와 세기를 정해 쓰세요.', columns: ['장면', '빠르기(빠르게·느리게)', '세기(세게·여리게)'], cells: [['살금살금 고양이', '', ''], ['달려오는 강아지', '', ''], ['쿵쿵 코끼리', '', '']] },
        { type: 'figure', prompt: '선생님이 도·미·솔을 두 번 쳐 줘요. 건반 아래에 음을 쓰고, 두 번 모두 같은 음이면 ○ 하세요.', tool: 'keyboard', wide: true, options: { from: '도', to: '높은도', printBoxes: 3 }, figures: [{ caption: '느릴 때와 빠를 때 음이 같았나요? ( 같다 · 다르다 )' }], answer: '도 미 솔 — 같다' },
        { type: 'choice', prompt: '같은 소리를 빨리 치면 바뀌는 것에 ○ 하세요.', options: ['빠르기', '음의 이름', '악기 이름'], answer: '빠르기' },
        { type: 'short', prompt: '같은 소리를 두 가지 느낌으로 내 보고 느낀 점을 쓰세요.' },
      ],
      easy: {
        note: '빠르기는 빠르고 느린 정도, 세기는 세고 여린 정도예요. 같은 음도 바꾸면 느낌이 달라요.',
        items: [
          { type: 'choice', prompt: '졸린 곰에 어울리는 빠르기는?', options: ['느리게', '빠르게'], answer: '느리게' },
          { type: 'choice', prompt: '코끼리에 어울리는 세기는?', options: ['세게', '여리게'], answer: '세게' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '같은 음을 빠르게 쳐도 음은 ___해요.', answer: '그대로' },
          { type: 'short', prompt: '내가 바꾸어 보고 싶은 동물을 쓰세요.' },
        ],
      },
    },
    diff: {
      easy: '맞게 나눈 카드에 초록 테두리가 보이고, 가락을 듣는 동안 건반이 빛나요.',
      base: '카드를 스스로 놓고 확인해요. 계이름을 켜고 끌 수 있어요.',
      challenge: '동물 짝짓기에 함정 카드가 하나 더 있고, 건반은 계이름 없이 귀로 따라 쳐요.',
    },
    notes: '자주 보이는 어려움: ① 빠르게 치면 다른 음이라고 여긴다 → 같은 음 수를 손가락으로 세어 보게 한다. ② 빠르기와 세기를 한 가지로 묶는다 → 느리고 세게, 빠르고 여리게도 해 본다. ③ 몸으로 낼 때 지나치게 크게 쿵쿵거린다 → 정해진 자리에서 손과 무릎으로만 내게 한다. 소리는 누를 때만 난다.',
  }));

  // ───────────────────────── 5차시 (핵심) ─────────────────────────
  lessons.push(lesson(5, S2, {
    title: '익숙한 가락의 마지막 음 하나를 바꾸어 치고 바꾼 곳 적기',
    objective: '익숙한 곡의 첫머리에서 음 하나를 골라 바꾸어 치고, 어디를 어떻게 바꾸었는지 적을 수 있다.',
    ill: 'a child swapping one glowing paper note on a row of piano keys while writing in a small notebook',
    sceneText: '하나만 바꿔 봐요',
    intro: {
      teacher: '"우리가 아는 노래의 일부를 바꾸면 새로운 곡이 될 수 있어요. 바꿀 수 있는 것에는 무엇이 있을까요?" 음, 리듬, 노랫말이 나오기를 기다려 칠판에 적는다. 오늘은 음 하나만 바꾼다고 알려 준다. "다 바꾸면 되죠?" 하는 학생에게는 "하나만 바꾸어야 원래 곡과 견주기 쉬워요. 바꾼 곳을 적어 두지 않으면 나도 잊어요"라고 말한다.',
      student: '아는 노래의 일부를 바꾼다면 무엇을 바꿀 수 있을까요? 오늘은 음 하나만 바꾸어 봅시다.',
      demo: { tool: 'keyboard', options: { from: '도', to: '높은도', tempo: 80 }, sequence: [{ notes: ['도', '도', '솔', '솔', '라', '라', '솔'] }, { notes: ['도', '도', '솔', '솔', '라', '라', '미'] }] },
    },
    acts: [
      {
        title: '활동 1. 일부를 바꾸는 순서와 바꾼 곳 찾기', minutes: 12, tool: 'story',
        teacher: '"바꾸기에도 순서가 있어요. 먼저 바꿀 곳을 정하고, 바꾼 뒤에 연주하고, 마지막으로 어디를 바꿨는지 적어 둡니다." 카드를 읽고 순서대로 놓게 한다. 2번에서 두 가락을 소리 내 읽어 다른 칸을 찾게 한다. 마지막 칸이 아니라 앞쪽이 달라졌다고 하는 학생에게 칸마다 손가락으로 짚어 가며 견주게 한다.',
        task: '바꾸는 차례대로 카드를 놓고, 원래 가락과 바꾼 가락에서 달라진 칸을 찾아요.',
        levels: cardsLv(),
        items: [
          { prompt: '곡의 일부를 바꾸는 차례대로 카드를 놓아 보세요.', toolOptions: { slots: 4, cards: [{ id: 'a', text: '원래 가락을 먼저 쳐 봐요', motif: 'star' }, { id: 'b', text: '바꿀 곳 하나를 정해요', motif: 'flower' }, { id: 'c', text: '바꾼 가락을 쳐 봐요', motif: 'sun' }, { id: 'd', text: '무엇을 어떻게 바꿨는지 적어요', motif: 'leaf' }] }, target: { order: ['a', 'b', 'c', 'd'] }, difficulty: 0.15,
            hints: ['바꾸기 전에 해야 할 일, 바꾼 뒤에 해야 할 일을 나누어 생각해 보세요.', '바꿀 곳을 정하기 전에 원래 가락을 알아야 해요. 적는 일은 가장 마지막이에요.', '원래 가락 → 바꿀 곳 정하기 → 바꾼 가락 치기 → 바꾼 곳 적기예요.'] },
          { prompt: '원래 가락은 ‘도 도 솔 솔 라 라 솔’이에요. 바꾼 가락에서 달라진 음을 골라 보세요.', toolOptions: { mode: 'pick', topic: '달라진 음', basket: '달라진 칸', cards: ['여섯째 음 라', '일곱째 음 솔 → 미', '첫째 음 도', '넷째 음 솔'] }, target: { pick: ['일곱째 음 솔 → 미'] }, reveal: 'after-check', difficulty: 0.2,
            conclude: '바꾼 가락은 ‘도 도 솔 솔 라 라 미’예요. 일곱째 음 하나만 솔에서 미로 바뀌었어요.' },
          { prompt: '준호는 가락의 셋째 음을 솔에서 라로 바꾸었어요. 알맞은 것을 골라 보세요.', toolOptions: { mode: 'pick', topic: '알맞은 말과 행동', basket: '알맞아요', cards: ['"조금 바꿨어요"라고만 적어요', '"셋째 음 솔을 라로 바꿨어요"라고 적어요', '가락 전체를 다시 새로 써요'] }, target: { pick: ['"셋째 음 솔을 라로 바꿨어요"라고 적어요'] }, difficulty: 0.25, hints: ['상황을 다시 읽고, 읽는 사람이나 짝의 마음이 어떨지 먼저 떠올려 보세요.', '고른 카드를 짝에게 말했다고 생각해 보세요. 짝이 속상해하거나 소리가 끊기지 않는지 살펴요.', '"셋째 음 솔을 라로 바꿨어요"라고 적어요 — 친구가 같은 곳을 바꿔 쳐 볼 수 있어요.'], conclude: '친구가 같은 곳을 바꿔 쳐 볼 수 있어요.' },
        ],
      },
      {
        title: '활동 2. 마지막 음을 바꾸어 연주하기', minutes: 14, tool: 'keyboard',
        teacher: '"원래 가락의 끝 음은 솔이에요. 끝 음을 다른 음으로 바꾸면 이야기가 이어질 것 같기도, 끝난 것 같기도 해요. 어떤 느낌인지 들어 봐요." 원래 가락과 바꾼 가락을 번갈아 들려주고 느낌을 말하게 한다. 마지막만이 아니라 여러 음을 바꾼 학생에게는 하나만 바꾼 가락으로 돌아와 보자고 권한다.',
        task: '원래 가락을 따라 친 뒤, 마지막 음 하나만 바꾼 가락을 치고 바꾼 곳을 점검해요.',
        levels: mel(),
        items: [
          { prompt: '원래 가락이에요. 가락 듣기를 누르고 따라 쳐 보세요.', toolOptions: { melody: ['도', '도', '솔', '솔', '라', '라', '솔'] }, target: { notes: ['도', '도', '솔', '솔', '라', '라', '솔'] }, difficulty: 0.15 },
          { prompt: '마지막 음을 미로 바꾼 가락이에요. 듣고 따라 쳐 보세요.', toolOptions: { melody: ['도', '도', '솔', '솔', '라', '라', '미'] }, target: { notes: ['도', '도', '솔', '솔', '라', '라', '미'] }, reveal: 'after-check', difficulty: 0.25,
            conclude: '앞의 여섯 음은 그대로이고 마지막 음 하나만 솔에서 미로 바뀌었어요.' },
          { prompt: '마지막 음을 내가 고른 음으로 바꾸어 일곱 음 가락을 쳐 보고 점검해요.', target: { compose: { length: 7, startOn: '도' }, selfCheck: ['앞의 여섯 음은 원래대로 쳤어요', '마지막 음 하나만 바꾸었어요', '바꾼 곳을 공책에 적었어요'] }, difficulty: 0.25 },
        ],
      },
    ],
    wrap: '"오늘 나는 몇째 음을 무엇에서 무엇으로 바꾸었나요?" 두 학생이 바꾼 곳을 소리 내어 말하게 한다. 출구 2번에서 ‘조금 바꿨다’를 고른 학생에게는 칸을 짚어 가며 다시 말해 보게 한다.',
    exit: [
      { type: 'tool', tool: 'keyboard', options: { from: '도', to: '높은도', melody: ['도', '도', '솔', '솔', '라', '라', '도'] }, prompt: '마지막 음이 바뀐 가락을 듣고 건반으로 따라 쳐 보세요.', target: { notes: ['도', '도', '솔', '솔', '라', '라', '도'] }, difficulty: 0.2 },
      { type: 'choice', prompt: '곡의 일부를 바꾸었어요. 바꾼 곳을 어떻게 적어 두면 좋을까요?', options: ['몇째 음을 무엇에서 무엇으로 바꿨는지 적어요', '“바꿨다”고만 적어요', '아무것도 적지 않아요'], answer: 0, difficulty: 0.2, explain: '자리와 바뀐 내용을 적어 두어야 나도 친구도 다시 같은 곳을 바꿔 칠 수 있어요.' },
      { type: 'mood', prompt: '아는 가락의 일부를 바꾸어 보니 어땠나요?' },
    ],
    ws: {
      title: '가락 일부 바꾸기',
      items: [
        { type: 'table', prompt: '원래 가락과 바꾼 가락을 비교해 쓰세요.', columns: ['', '1 2 3 4 5 6 7'], cells: [['원래', '도 도 솔 솔 라 라 솔'], ['바꾼 것', '']] },
        { type: 'figure', prompt: '선생님이 들려주는 바꾼 가락을 듣고 건반 아래 빈칸에 계이름을 쓰세요.', tool: 'keyboard', wide: true, options: { from: '도', to: '높은도', printBoxes: 7 }, figures: [{ caption: '바꾼 곳은 몇째 음인가요? ____째' }], answer: '도 도 솔 솔 라 라 미 — 일곱째' },
        { type: 'choice', prompt: '곡의 일부를 바꾼 것에 ○ 하세요.', options: ['앞의 음은 그대로 두고 마지막 음 하나를 바꿨어요', '처음부터 끝까지 모두 새로 지었어요'], answer: '앞의 음은 그대로 두고 마지막 음 하나를 바꿨어요' },
        { type: 'short', prompt: '내가 바꾼 곳과 바꾼 뒤 달라진 느낌을 쓰세요.' },
      ],
      easy: {
        note: '일부를 바꿀 때는 바꿀 곳 하나를 정하고, 나머지는 그대로 두어요. 바꾼 곳은 몇째 음인지 적어요.',
        items: [
          { type: 'choice', prompt: '일부를 바꿀 때 나머지는 어떻게 할까요?', options: ['그대로 둬요', '모두 지워요'], answer: '그대로 둬요' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '‘도 도 솔 솔 라 라 솔’의 마지막 음을 미로 바꾸면 ___째 음이 바뀐 거예요.', answer: '일곱' },
          { type: 'choice', prompt: '바꾼 곳을 적어 두는 까닭은?', options: ['친구도 같은 곳을 바꿔 칠 수 있어요', '글씨를 연습해요'], answer: '친구도 같은 곳을 바꿔 칠 수 있어요' },
          { type: 'short', prompt: '내가 바꾼 음의 이름을 쓰세요.' },
        ],
      },
    },
    diff: {
      easy: '맞는 카드에 초록 테두리가 보이고, 가락을 듣는 동안 건반이 빛나요.',
      base: '카드와 건반을 스스로 쓰고 확인해요. 계이름을 켜고 끌 수 있어요.',
      challenge: '바꾼 가락의 달라진 음을 귀로 찾아 쓰고, 건반은 계이름 없이 쳐요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 일부를 바꾼다면서 가락 전체를 바꾼다 → 앞 여섯 음을 그대로 치게 한 뒤 마지막만 바꾼다. ② 바꾼 곳을 적지 않는다 → 몇째 음을 무엇에서 무엇으로 바꿨는지를 한 문장으로 적게 한다. ③ 틀린 음이라고 걱정한다 → 바꾼 음도 하나의 선택이다. 노랫말은 싣지 않으며, 학급에서 부르는 노래는 교사가 정한다.',
  }));

  // ───────────────────────── 6차시 (연습) ─────────────────────────
  lessons.push(lesson(6, S2, {
    title: '한 마디 리듬의 일부를 바꾸어 치고 리듬 블록으로 적기',
    objective: '네 박 리듬에서 한 곳을 골라 빠른 소리 둘로 바꾸어 치고, 바꾼 리듬을 블록으로 나타낼 수 있다.',
    ill: 'a row of paper rhythm blocks where one big block splits into two small blocks, with a child clapping beside it',
    sceneText: '한 곳만 쪼개요',
    intro: {
      teacher: '"‘따 따 따 따’ 손뼉을 쳐 볼게요. 이 중 한 곳만 ‘따따’로 바꾸면 어떻게 들릴까요?" 원래와 바꾼 것을 번갈아 치며 달라진 곳을 손가락으로 짚게 한다. ‘박이 늘었다’고 하는 학생에게는 "‘따따’는 한 박 안에 소리가 둘 들어간 거예요. 박 수는 그대로예요"라고 짚는다.',
      student: '‘따 따 따 따’에서 한 곳만 바꾸면 어떻게 달라질까요? 바꾼 곳을 짚어 봅시다.',
    },
    acts: [
      {
        title: '활동 1. 리듬 말과 블록 짝 짓기', minutes: 12, tool: 'mindmap',
        teacher: '"리듬 말 ‘따’는 4분음표 한 박, ‘따따’는 8분음표 둘이 한 박이에요." 말로 치고 블록과 이어 보게 한다. 2번에서 ‘따-’를 4분음표로 고른 학생에게 손뼉을 치고 팔을 길게 뻗어 두 박을 나타내 보게 한다.',
        task: '리듬 말을 입으로 치면서 같은 리듬의 블록에 이어요.',
        levels: cardsLv(),
        items: [
          { prompt: '리듬 말과 같은 블록을 이어 보세요.', toolOptions: { mode: 'match', topic: '리듬 말과 블록', slots: [{ id: 'a', label: '따 따 따 따' }, { id: 'b', label: '따 따따 따 따' }, { id: 'c', label: '따- 따 따' }], cards: ['4분음표 네 개', '4분음표, 8분음표 둘, 4분음표 둘', '2분음표, 4분음표 둘'] }, target: { match: { a: '4분음표 네 개', b: '4분음표, 8분음표 둘, 4분음표 둘', c: '2분음표, 4분음표 둘' } }, difficulty: 0.15,
            hints: ['리듬 말을 입으로 치면서 박 수와 소리 수를 세어 보세요.', '이은 블록의 박 수가 4박인지 세어 보세요. ‘따따’는 한 박 안에 소리가 둘이에요.', '따 네 개는 4분음표 넷, 따따는 8분음표 둘, 따-는 2분음표예요.'],
            levels: { challenge: { toolOptions: { cards: ['4분음표 네 개', '4분음표, 8분음표 둘, 4분음표 둘', '2분음표, 4분음표 둘', '8분음표 네 개, 4분음표 둘'] } } } },
          { prompt: '‘따 따 따 따’의 셋째 박만 ‘따따’로 바꾼 리듬 말을 골라 보세요.', toolOptions: { mode: 'pick', topic: '셋째 박만 바꾸기', basket: '맞아요', cards: ['따 따 따따 따', '따따 따 따 따', '따 따 따 따따', '따 따 따-'] }, target: { pick: ['따 따 따따 따'] }, reveal: 'after-check', difficulty: 0.2,
            conclude: '셋째 박만 따따로 바뀌어도 박은 여전히 네 개예요.' },
          { prompt: '바꾼 리듬 말이 틀린 까닭을 찾아 이어 보세요.', toolOptions: { mode: 'match', topic: '틀린 까닭', slots: [{ id: 'x', label: '따 따따 따 따 따' }, { id: 'y', label: '따 따 따' }], cards: ['박이 다섯 박이라 한 마디를 넘어요', '박이 세 박뿐이라 한 마디가 비어요'] }, target: { match: { x: '박이 다섯 박이라 한 마디를 넘어요', y: '박이 세 박뿐이라 한 마디가 비어요' } }, difficulty: 0.3 },
        ],
      },
      {
        title: '활동 2. 리듬 일부를 바꾸어 블록으로 놓기', minutes: 14, tool: 'keyboard',
        teacher: '"먼저 원래 리듬을 블록으로 놓고, 한 곳만 쪼개 볼게요." 놓은 뒤 리듬 듣기로 두 가지를 번갈아 들려준다. 8분음표를 하나만 놓고 박이 비었다고 하는 학생에게 "8분음표는 둘이 모여 한 박이 돼요"라고 말한다.',
        task: '들려준 리듬을 블록으로 놓은 뒤, 한 곳을 바꾼 리듬을 4박 안에서 놓아요.',
        levels: rhy(4, 1),
        items: [
          { prompt: '원래 리듬이에요. 리듬 듣기를 누르고 블록으로 놓아 보세요.', toolOptions: { pattern: ['q', 'q', 'q', 'q'] }, target: { rhythm: ['q', 'q', 'q', 'q'] }, difficulty: 0.15 },
          { prompt: '셋째 박을 바꾼 리듬이에요. 듣고 블록으로 놓아 보세요.', toolOptions: { pattern: ['q', 'q', 'e', 'e', 'q'] }, target: { rhythm: ['q', 'q', 'e', 'e', 'q'] }, reveal: 'after-check', difficulty: 0.25,
            conclude: '셋째 박의 4분음표 하나가 8분음표 둘로 바뀌었어요. 네 박은 그대로예요.' },
          { prompt: '둘째 박을 8분음표 둘로 바꾼 리듬을 내가 놓고 점검해요. 한 마디를 4박으로 채워요.', target: { beats: true, use: ['e'], selfCheck: ['바꾼 곳은 한 곳뿐이에요', '‘따 따따 따 따’로 입으로 먼저 말해 보았어요', '손뼉으로 두 번 쳐 보았어요'] }, difficulty: 0.25 },
        ],
      },
    ],
    wrap: '"리듬의 일부를 바꾸어도 한 마디의 박 수는 어떻게 되었나요?" 두 학생이 4박 그대로라는 것을 말하게 한다. 출구 2번에서 박이 늘어난다고 고른 학생에게는 8분음표 둘을 합쳐 한 박이 되는 것을 손뼉으로 다시 쳐 보여 준다.',
    exit: [
      { type: 'tool', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 1, blocks: ['q', 'e', 'h', 'qr'], pattern: ['e', 'e', 'q', 'q', 'q'] }, prompt: '첫째 박을 바꾼 리듬을 듣고 블록으로 놓아 보세요.', target: { rhythm: ['e', 'e', 'q', 'q', 'q'] }, difficulty: 0.2 },
      { type: 'choice', prompt: '‘따 따 따 따’의 한 박을 ‘따따’로 바꾸면 한 마디는 몇 박일까요?', options: ['4박 그대로예요', '5박이 돼요', '3박이 돼요'], answer: 0, difficulty: 0.2, explain: '8분음표 둘이 모여 한 박이 되니, 박 수는 그대로 4박이에요.' },
      { type: 'mood', prompt: '리듬의 일부를 바꾸어 보니 어땠나요?' },
    ],
    ws: {
      title: '리듬 일부 바꾸기',
      items: [
        { type: 'table', prompt: '리듬 말을 보고 박 수를 쓰세요.', columns: ['리듬 말', '박 수'], cells: [['따 따 따 따', ''], ['따 따따 따 따', ''], ['따- 따 따', '']] },
        { type: 'figure', prompt: '이 리듬은 어느 박을 바꾼 걸까요? 바뀐 곳에 ○ 하세요.', tool: 'keyboard', wide: true, options: { mode: 'rhythm', meter: 4, measures: 1 }, figures: [{ state: { rhythm: ['q', 'e', 'e', 'q', 'q'] }, caption: '바뀐 곳: ____째 박' }], answer: '둘째 박' },
        { type: 'choice', prompt: '한 박을 8분음표 둘로 바꿔도 변하지 않는 것에 ○ 하세요.', options: ['한 마디의 박 수', '소리의 수'], answer: '한 마디의 박 수' },
        { type: 'short', prompt: '내가 바꾼 리듬 말을 ‘따’와 ‘따따’로 쓰세요.' },
      ],
      easy: {
        note: '따 = 한 박, 따따 = 한 박 안에 소리 둘, 따- = 두 박이에요.',
        items: [
          { type: 'choice', prompt: '‘따따’는 몇 박일까요?', options: ['한 박', '두 박'], answer: '한 박' },
          { type: 'choice', prompt: '‘따-’는 몇 박일까요?', options: ['두 박', '한 박'], answer: '두 박' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '‘따 따 따 따’의 한 박을 바꾸어도 모두 ___박이에요.', answer: '4' },
          { type: 'short', prompt: '오늘 바꾼 리듬 말을 한 줄 쓰세요.' },
        ],
      },
    },
    diff: {
      easy: '마디마다 지금 몇 박인지 보여 주고, 맞는 카드에 초록 테두리가 보여요.',
      base: '박 수를 스스로 세며 블록을 놓고 확인해요.',
      challenge: '점2분음표와 쉼표 블록이 더 있고, 박 수를 스스로 세요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 8분음표 둘을 두 박으로 센다 → 손뼉을 한 번 치는 동안 ‘따따’ 두 소리를 내 보게 한다. ② 한 곳만 바꾼다는 약속을 잊고 여러 곳을 바꾼다 → 바꿀 박 하나에 스티커를 붙여 표시한다. ③ 마디가 넘치는 줄 모른다 → 마디마다 박 수 알림을 켜 준다. 소리는 누를 때만 난다.',
  }));

  // ───────────────────────── 7차시 (확장) ─────────────────────────
  lessons.push(lesson(7, S2, {
    title: '박 수에 맞는 낱말을 골라 곡의 한 부분 바꾸고 기호로 적기',
    objective: '곡의 한 부분에 들어갈 낱말을 박 수에 맞게 골라 바꾸고, 바꾼 부분을 그림이나 기호로 적을 수 있다.',
    ill: 'word cards with fruits and animals sliding into boxes of rhythm beats along a paper music ribbon',
    sceneText: '낱말도 바꿔요',
    intro: {
      teacher: '"노래의 한 부분에 들어가는 말을 내가 고른 낱말로 바꿀 수 있어요. 그런데 아무 낱말이나 들어갈까요?" 세 박 자리에 ‘무지개’를, 한 박 자리에 ‘포도’를 넣어 손뼉으로 쳐 보며 맞고 틀림을 듣게 한다. ‘뜻만 맞으면 된다’는 학생에게는 "박에 맞지 않으면 노래가 어색해져요, 글자를 세어 볼까요?"라고 되묻는다.',
      student: '노래 속 한 부분의 말을 바꿀 때, 아무 낱말이나 넣어도 될까요?',
    },
    acts: [
      {
        title: '활동 1. 박 수에 맞는 낱말 나누기', minutes: 12, tool: 'mindmap',
        teacher: '"낱말을 박수로 쳐 보세요. ‘포·도’는 두 번 쳐요." 낱말마다 손뼉으로 쳐 보고 글자 수를 세게 한다. ‘딸기잼’처럼 합친 낱말은 세 글자로 센다. 받침이 있는 글자를 따로 센다는 학생에게는 "한 글자는 한 박이에요, 받침은 따로 안 세요"라고 알려 준다.',
        task: '낱말을 손뼉으로 쳐 보고 글자 수가 맞는 칸에 나누어요.',
        levels: cardsLv(),
        items: [
          { prompt: '낱말을 손뼉으로 쳐 보고 세 박 자리와 두 박 자리로 나누어 보세요.', toolOptions: { mode: 'sort', topic: '낱말 박 수', slots: ['세 박 자리', '두 박 자리'], cards: ['무지개', '바나나', '포도', '구름'] }, target: { sort: { '세 박 자리': ['무지개', '바나나'], '두 박 자리': ['포도', '구름'] } }, difficulty: 0.15 },
          { prompt: '한 박 자리, 두 박 자리, 세 박 자리에 들어갈 낱말을 이어 보세요.', toolOptions: { mode: 'match', topic: '박 자리와 낱말', slots: [{ id: 'one', label: '한 박 자리' }, { id: 'two', label: '두 박 자리' }, { id: 'three', label: '세 박 자리' }], cards: ['별', '토끼', '코스모스'] }, target: { match: { one: '별', two: '토끼', three: '코스모스' } }, difficulty: 0.2,
            hints: ['낱말을 손뼉으로 쳐 보세요. 몇 번 치는지 세어 자리 이름과 견주어요.', '이은 낱말의 글자 수를 세어 보세요. 박 자리 수와 같아야 해요.', '별은 한 번, 토끼는 두 번, 코스모스는 세 번 쳐요.'] },
          { prompt: '두 박 자리에 어울리는 낱말만 모두 골라 보세요.', toolOptions: { mode: 'pick', topic: '두 박 자리', basket: '두 박이에요', cards: ['사과', '호랑이', '바람', '꽃'] }, target: { pick: ['사과', '바람'] }, reveal: 'after-check', difficulty: 0.25,
            conclude: '사과와 바람은 두 글자, 호랑이는 세 글자, 꽃은 한 글자예요. 글자 수가 박 수와 맞아야 해요.' },
        ],
      },
      {
        title: '활동 2. 낱말 리듬을 블록으로 놓아 바꾼 부분 적기', minutes: 14, tool: 'keyboard',
        teacher: '"고른 낱말을 손뼉으로 치고 블록으로 옮기면 바꾼 부분이 악보처럼 남아요." 낱말마다 4분음표 한 개가 한 글자라고 약속한다. ‘바나나’처럼 세 글자는 4분음표 세 개, 한 박 자리에 두 글자를 넣으면 8분음표 둘이 되는 것을 짚는다. 3번에서 바꾼 부분을 기호로 어떻게 적을지 모둠에서 정하게 한다.',
        task: '낱말의 글자 수에 맞게 블록을 놓고, 바꾼 부분을 약속한 기호로 적어요.',
        levels: rhy(4, 1),
        items: [
          { prompt: '‘바나나’와 같이 세 글자 낱말이에요. 4분음표 세 개와 쉼표 하나로 4박을 채워 보세요.', toolOptions: { blocks: ['q', 'e', 'h', 'qr'] }, target: { rhythm: ['q', 'q', 'q', 'qr'] }, difficulty: 0.15 },
          { prompt: '‘포도’ 두 글자와 ‘별’ 한 글자를 이어 읽은 리듬이에요. 듣고 블록으로 놓아 보세요.', toolOptions: { pattern: ['q', 'q', 'h'] }, target: { rhythm: ['q', 'q', 'h'] }, difficulty: 0.2 },
          { prompt: '내가 고른 낱말로 바꾼 한 마디를 블록으로 놓고, 바꾼 부분을 기호로 적고 점검해요.', target: { beats: true, selfCheck: ['글자 수와 박 수가 맞는지 손뼉으로 세어 보았어요', '바꾼 낱말 아래에 ○ 기호를 그렸어요', '짝이 내 기호를 보고 같은 부분을 찾았어요'] }, difficulty: 0.25 },
        ],
      },
    ],
    wrap: '"낱말을 바꿀 때 가장 먼저 확인할 것은 무엇이었나요?" 글자 수와 박 수를 말하는지 듣는다. 출구 2번에서 ‘아무 낱말이나 된다’를 고른 학생에게는 두 박 자리에 네 글자를 넣고 손뼉으로 쳐 보게 한다.',
    exit: [
      { type: 'tool', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 1, blocks: ['q', 'e', 'h', 'qr'], pattern: ['q', 'q', 'q', 'q'] }, prompt: '‘강아지’ 세 글자 뒤에 ‘별’ 한 글자를 이은 리듬을 듣고 블록으로 놓아 보세요.', target: { rhythm: ['q', 'q', 'q', 'q'] }, difficulty: 0.25 },
      { type: 'choice', prompt: '두 박 자리에 낱말을 바꾸어 넣을 때 알맞은 것은?', options: ['두 글자 낱말', '여섯 글자 낱말', '아무 낱말이나'], answer: 0, difficulty: 0.15, explain: '한 글자가 한 박이므로 두 박 자리에는 두 글자 낱말이 알맞아요.' },
      { type: 'mood', prompt: '낱말을 바꾸어 넣어 보니 어땠나요?' },
    ],
    ws: {
      title: '박에 맞는 낱말 바꾸기',
      items: [
        { type: 'table', prompt: '낱말을 손뼉으로 치고 글자 수(박 수)를 쓰세요.', columns: ['낱말', '손뼉 수'], cells: [['사과', ''], ['코스모스', ''], ['별', ''], ['토끼풀', '']] },
        { type: 'figure', prompt: '세 글자 낱말 하나와 쉼표 하나로 채운 리듬이에요. 쉼표 블록에 ○ 하세요.', tool: 'keyboard', wide: true, options: { mode: 'rhythm', meter: 4, measures: 1 }, figures: [{ state: { rhythm: ['q', 'q', 'q', 'qr'] }, caption: '이 한 마디는 모두 몇 박인가요? ____박' }], answer: '4박(쉼표에 ○)' },
        { type: 'choice', prompt: '한 박 자리에 들어갈 낱말에 ○ 하세요.', options: ['꽃', '무지개', '코스모스'], answer: '꽃' },
        { type: 'short', prompt: '내가 바꾸어 넣고 싶은 낱말 두 개와 그 글자 수를 쓰세요.' },
      ],
      easy: {
        note: '낱말은 한 글자가 한 박이에요. 박 수에 맞는 낱말을 골라요.',
        items: [
          { type: 'choice', prompt: '두 글자 낱말에 ○ 하세요.', options: ['사과', '무지개'], answer: '사과' },
          { type: 'choice', prompt: '세 박 자리에 맞는 낱말에 ○ 하세요.', options: ['바나나', '별'], answer: '바나나' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '‘포도’는 ___번 손뼉을 쳐요.', answer: '2' },
          { type: 'short', prompt: '내가 고른 낱말과 박 수를 쓰세요.' },
        ],
      },
    },
    diff: {
      easy: '낱말 카드를 맞는 칸에 놓으면 초록 테두리가 보이고, 박 수를 마디마다 보여 줘요.',
      base: '낱말을 스스로 나누고 블록을 놓은 뒤 확인해요.',
      challenge: '함정 낱말이 하나 더 있고, 박 수 알림 없이 마디를 스스로 채워요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 뜻만 보고 글자 수를 세지 않는다 → 낱말을 손뼉으로 쳐 보게 한다. ② 받침 글자를 따로 센다 → 한 글자는 한 박이라고 반복해 알려 준다. ③ 쉼표를 빠뜨려 한 마디가 비어 보인다 → 쉼표도 한 박이라는 것을 블록으로 보인다. 학급에서 부르는 노래와 노랫말은 교사가 정하며, 이 차시에는 노랫말을 싣지 않는다.',
  }));

  // ───────────────────────── 8차시 (핵심) ─────────────────────────
  lessons.push(lesson(8, S1, {
    title: '교실 물체의 소리를 높은 소리와 낮은 소리로 나누어 적기',
    objective: '교실 물체를 두드려 나는 소리를 높은 소리와 낮은 소리로 나누어 적고, 물체의 크기와 연결 지어 말할 수 있다.',
    ill: 'a classroom desk with a pencil case, a water bottle and a ruler each making a paper sound wave, tall waves for high sounds and wide waves for low sounds',
    sceneText: '높은 소리, 낮은 소리',
    intro: {
      teacher: '"연필통과 큰 책상을 같은 손가락으로 톡 두드려 볼게요. 소리가 같을까요?" 두 번 두드려 들려주고 어느 쪽이 높은 소리였는지 손으로 높이를 나타내게 한다. ‘책상이 더 크게 들렸으니 높다’고 하는 학생에게는 "크게 들리는 것과 높게 들리는 것은 달라요. 새 소리와 천둥소리를 떠올려 볼까요?"라고 되묻는다.',
      student: '연필통과 책상을 두드려 보고 어느 쪽이 더 높은 소리인지 손으로 나타내 봅시다.',
    },
    acts: [
      {
        title: '활동 1. 물체 소리를 높낮이로 나누기', minutes: 12, tool: 'mindmap',
        teacher: '"작고 얇은 것은 높은 소리, 크고 두꺼운 것은 낮은 소리가 나는 경우가 많아요." 카드의 물체를 교실에서 직접 두드려 확인하게 한다. 같은 물체라도 두드리는 힘에 따라 크기가 달라질 뿐 높낮이는 물체가 정한다는 것을 짚는다. 3번에서 ‘소리가 큰 것’을 낮은 소리에 넣는 학생에게는 세기와 높낮이를 따로 말하게 한다.',
        task: '카드의 물체를 직접 두드려 본 뒤, 높은 소리와 낮은 소리로 나누거나 이어요.',
        levels: cardsLv(),
        items: [
          { prompt: '작고 얇을수록 높은 소리가 나요. 물체를 높은 소리와 낮은 소리로 나누어 보세요.', toolOptions: { mode: 'sort', topic: '소리의 높낮이', slots: ['높은 소리', '낮은 소리'], cards: ['얇은 철자를 튕겨요', '작은 연필 두 자루를 부딪쳐요', '큰 책상 가운데를 쳐요', '속이 빈 큰 통을 두드려요'] }, target: { sort: { '높은 소리': ['얇은 철자를 튕겨요', '작은 연필 두 자루를 부딪쳐요'], '낮은 소리': ['큰 책상 가운데를 쳐요', '속이 빈 큰 통을 두드려요'] } }, difficulty: 0.15,
            hints: ['물체의 크기와 두께를 먼저 보고, 작고 얇은 것과 크고 두꺼운 것으로 나누어 생각해요.', '낮은 칸에 작은 물체가 들어갔는지 보세요. 직접 두드려 두 소리를 견주어도 좋아요.', '철자와 연필은 작고 얇아서 높은 소리, 책상과 큰 통은 크고 두꺼워서 낮은 소리예요.'] },
          { prompt: '크기가 다른 세 컵을 두드렸어요. 컵과 소리의 높낮이를 이어 보세요.', toolOptions: { mode: 'match', topic: '크기와 높낮이', slots: [{ id: 's', label: '작은 종이컵' }, { id: 'm', label: '보통 크기 컵' }, { id: 'l', label: '아주 큰 통' }], cards: ['가장 높은 소리', '가운데쯤 소리', '가장 낮은 소리'] }, target: { match: { s: '가장 높은 소리', m: '가운데쯤 소리', l: '가장 낮은 소리' } }, difficulty: 0.2 },
          { prompt: '소리를 바르게 적은 기록을 모두 골라 보세요.', toolOptions: { mode: 'pick', topic: '소리 기록', basket: '바른 기록', cards: ['연필통 / 높은 소리 / 톡', '큰 책상 / 낮은 소리 / 쿵', '연필통 / 소리가 커요', '책상 / 좋은 소리'] }, target: { pick: ['연필통 / 높은 소리 / 톡', '큰 책상 / 낮은 소리 / 쿵'] }, reveal: 'after-check', difficulty: 0.3,
            conclude: '소리를 적을 때는 물체 이름과 높은 소리인지 낮은 소리인지를 함께 적어요.' },
        ],
      },
      {
        title: '활동 2. 높은 음과 낮은 음을 건반으로 견주기', minutes: 14, tool: 'keyboard',
        teacher: '"물체 소리를 건반의 높은 음과 낮은 음에 견주어 볼까요?" 오른쪽으로 갈수록 높은 음이라는 것을 눌러 확인하게 한다. 2번에서 높은 음만 쓰라고 했는데 낮은 음이 섞였다는 안내가 뜨면 왼쪽과 오른쪽을 손으로 짚으며 고쳐 보게 한다. 3번은 활동 1에서 적은 물체 소리를 건반 소리로 바꾸는 활동이에요.',
        task: '높은 소리와 낮은 소리를 건반으로 듣고 따라 치거나 규칙에 맞게 쳐요.',
        levels: mel('낮은솔', '높은도'),
        items: [
          { prompt: '낮은 소리에서 높은 소리로 가는 두 음이에요. 가락 듣기를 누르고 따라 쳐 보세요.', toolOptions: { melody: ['도', '높은도'] }, target: { notes: ['도', '높은도'] }, difficulty: 0.15 },
          { prompt: '작은 연필 소리를 흉내 내요. 높은 음 라·시·높은도만 써서 세 음을 쳐 보세요.', target: { compose: { length: 3, only: ['라', '시', '높은도'] } }, difficulty: 0.2 },
          { prompt: '큰 책상 소리를 낮은 음으로, 연필 소리를 높은 음으로 쳐 보고 점검해요.', target: { selfCheck: ['책상 소리는 건반 왼쪽의 낮은 음으로 쳤어요', '연필 소리는 건반 오른쪽의 높은 음으로 쳤어요', '두 소리를 번갈아 두 번씩 들어 보았어요'], minNotes: 4 }, difficulty: 0.2 },
        ],
      },
    ],
    wrap: '"오늘 높은 소리가 났던 물체와 낮은 소리가 났던 물체의 크기는 어땠나요?" 두 학생이 크기와 두께를 말하게 한다. 출구 2번에서 큰 소리를 높은 소리로 고른 학생에게는 한 물체를 세게·약하게 두드려 높낮이가 그대로인 것을 들려준다.',
    exit: [
      { type: 'tool', tool: 'keyboard', options: { from: '도', to: '높은도', melody: ['높은도', '라', '솔'] }, prompt: '높은 소리에서 내려오는 세 음을 듣고 건반으로 따라 쳐 보세요.', target: { notes: ['높은도', '라', '솔'] }, difficulty: 0.2 },
      { type: 'choice', prompt: '크고 두꺼운 통을 두드렸더니 소리가 깊고 낮았어요. 알맞은 말은 무엇일까요?', options: ['크고 두꺼운 것은 낮은 소리가 나는 경우가 많아요', '큰 통은 언제나 높은 소리가 나요', '두드리는 힘이 높낮이를 정해요'], answer: 0, difficulty: 0.2, explain: '높낮이는 물체의 크기와 두께에 따라 달라지는 경우가 많고, 세기는 두드리는 힘에 따라 달라져요.' },
      { type: 'mood', prompt: '교실 물체의 소리를 귀 기울여 들어 보니 어땠나요?' },
    ],
    ws: {
      title: '물체 소리 기록하기',
      items: [
        { type: 'table', prompt: '교실에서 두드려 본 물체와 소리를 기록하세요.', columns: ['물체', '높은 소리·낮은 소리', '소리를 말로 나타내기'], rows: 4 },
        { type: 'figure', prompt: '높은 소리가 나는 건반에 ○, 낮은 소리가 나는 건반에 △ 하세요.', tool: 'keyboard', wide: true, options: { from: '낮은솔', to: '높은도' }, figures: [{ caption: '○는 오른쪽·왼쪽 중 어느 쪽에 있나요? ( 오른쪽 · 왼쪽 )' }], answer: '오른쪽 끝에 ○, 왼쪽 끝에 △ — 오른쪽' },
        { type: 'choice', prompt: '작고 얇은 물체에서 많이 나는 소리에 ○ 하세요.', options: ['높은 소리', '낮은 소리'], answer: '높은 소리' },
        { type: 'short', prompt: '가장 낮은 소리가 났던 물체와 그 물체의 모양을 쓰세요.' },
      ],
      easy: {
        note: '높고 낮음은 건반의 오른쪽과 왼쪽, 작고 얇은 것과 크고 두꺼운 것으로 생각해요.',
        items: [
          { type: 'choice', prompt: '건반에서 오른쪽으로 갈수록 소리는?', options: ['높아져요', '낮아져요'], answer: '높아져요' },
          { type: 'choice', prompt: '큰 통을 두드린 소리는?', options: ['낮은 소리', '높은 소리'], answer: '낮은 소리' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '작고 얇은 철자는 ___ 소리가 나요.', answer: '높은' },
          { type: 'short', prompt: '오늘 두드려 본 물체 하나를 쓰세요.' },
        ],
      },
    },
    diff: {
      easy: '맞게 나눈 카드에 초록 테두리가 보이고, 가락을 듣는 동안 건반이 빛나요.',
      base: '카드를 스스로 나누고 확인해요. 계이름을 켜고 끌 수 있어요.',
      challenge: '컵 이어 보기에 가운데 높이 하나가 더 있고, 건반은 계이름 없이 귀로 따라 쳐요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 큰 소리를 높은 소리로 여긴다 → 한 물체를 세게·약하게 쳐 높낮이는 그대로임을 들려준다. ② 소리의 높낮이를 물체의 이름으로만 적는다 → 소리를 ‘쿵·톡’ 같은 말로도 적게 한다. ③ 물체를 세게 내리쳐 다친다 → 손가락과 손바닥으로만 가볍게 두드리게 한다. 소리는 학생이 누를 때만 난다.',
  }));

  // ───────────────────────── 9차시 (연습) ─────────────────────────
  lessons.push(lesson(9, S1, {
    title: '울림이 긴 소리와 짧은 소리로 나누어 적고 리듬으로 옮기기',
    objective: '교실 물체 소리를 울림이 긴 소리와 짧은 소리로 나누어 적고, 그 길이를 리듬 블록으로 나타낼 수 있다.',
    ill: 'a glass bell with long paper ripples beside a desk with short paper dots, connected to a row of long and short rhythm blocks',
    sceneText: '길게 울릴까, 짧게 끊길까',
    intro: {
      teacher: '"유리컵을 톡 치면 소리가 한참 울려요. 책상을 톡 치면 금방 끊기지요. 눈을 감고 소리가 사라질 때까지 손을 들고 있어 봐요." 두 소리를 번갈아 들려주고 손을 내리는 시간을 견주게 한다. ‘세게 치면 소리가 길어진다’고 하는 학생에게 "세게 쳐도 책상은 금방 끊겨요. 오래 울리는 것은 물체의 성질이에요"라고 알려 준다.',
      student: '유리컵과 책상을 두드렸을 때 소리가 사라지는 시간을 견주어 봅시다.',
    },
    acts: [
      {
        title: '활동 1. 소리가 이어지는 길이로 물체 나누기', minutes: 13, tool: 'mindmap',
        teacher: '"소리가 오래 울리면 긴 소리, 금방 끊기면 짧은 소리예요." 카드의 물체마다 교사가 시연하거나 학생이 가볍게 쳐 보게 한다. 2번에서 높낮이와 길이를 섞는 학생에게 "높은 소리와 긴 소리는 서로 다른 말이에요. 낮은 소리도 짧을 수 있어요"라고 말한다.',
        task: '소리가 오래 울리는지 금방 끊기는지 생각하며 카드를 나누고, 높낮이와 길이를 함께 적은 기록을 골라요.',
        levels: cardsLv(),
        items: [
          { prompt: '울림이 오래가는 소리와 금방 끊기는 소리로 나누어 보세요.', toolOptions: { mode: 'sort', topic: '소리의 길이', slots: ['길게 울려요', '금방 끊겨요'], cards: ['유리컵을 톡 쳐요', '작은 종을 한 번 쳐요', '책상을 손가락으로 톡 쳐요', '손뼉을 한 번 쳐요'] }, target: { sort: { '길게 울려요': ['유리컵을 톡 쳐요', '작은 종을 한 번 쳐요'], '금방 끊겨요': ['책상을 손가락으로 톡 쳐요', '손뼉을 한 번 쳐요'] } }, difficulty: 0.15,
            hints: ['소리를 낸 뒤 귀에 남는 시간을 떠올려 보세요. 오래 남으면 긴 소리예요.', '유리나 금속처럼 단단하고 울리는 것인지, 책상이나 손처럼 금방 멎는 것인지 생각해요.', '유리컵과 작은 종은 길게 울리고, 책상 두드리기와 손뼉은 금방 끊겨요.'] },
          { prompt: '높낮이와 길이를 함께 바르게 적은 기록을 골라 보세요.', toolOptions: { mode: 'pick', topic: '두 가지 기록', basket: '바른 기록', cards: ['작은 종 / 높고 길게 울려요', '큰 북 / 낮고 짧게 끊겨요', '작은 종 / 낮고 짧아요', '손뼉 / 높고 길게 울려요'] }, target: { pick: ['작은 종 / 높고 길게 울려요', '큰 북 / 낮고 짧게 끊겨요'] }, reveal: 'after-check', difficulty: 0.25,
            predict: { q: '높은 소리는 반드시 짧을까요?', options: ['반드시 짧아요', '길 수도 있어요', '잘 모르겠어요'], answer: 1 },
            conclude: '높낮이와 길이는 따로 적어요. 높은 소리도 길 수 있고 낮은 소리도 짧을 수 있어요.' },
          { prompt: '소리의 길이를 리듬 블록 이름과 이어 보세요.', toolOptions: { mode: 'match', topic: '길이와 블록', slots: [{ id: 'l', label: '아주 길게 울리는 소리' }, { id: 's', label: '짧게 끊기는 소리' }, { id: 'v', label: '소리가 없는 순간' }], cards: ['2분음표', '4분음표', '4분쉼표'] }, target: { match: { l: '2분음표', s: '4분음표', v: '4분쉼표' } }, difficulty: 0.3 },
        ],
      },
      {
        title: '활동 2. 길고 짧은 소리를 리듬 블록으로 옮기기', minutes: 13, tool: 'keyboard',
        teacher: '"종은 길게, 책상은 짧게 울려요. 같은 길이를 블록으로 나타내 볼게요." 놓은 뒤 리듬 듣기를 눌러 귀로 확인하게 한다. 2분음표를 놓았는데 소리가 짧게 끝난다고 하는 학생에게 "화면의 소리는 그 박만큼 이어서 들려요, 손을 올려 길이를 느껴 보세요"라고 말한다.',
        task: '들려준 길고 짧은 소리를 블록으로 놓고, 내가 쓴 물체 소리를 리듬으로 지어요.',
        levels: rhy(4, 2),
        items: [
          { prompt: '종 한 번, 손뼉 둘, 쉼이에요. 듣고 블록으로 놓아 보세요.', toolOptions: { pattern: ['h', 'q', 'q', 'q', 'q', 'h'] }, target: { rhythm: ['h', 'q', 'q', 'q', 'q', 'h'] }, difficulty: 0.15 },
          { prompt: '유리컵 소리가 길게 울리다 책상 소리 셋이 이어져요. 듣고 놓아 보세요.', toolOptions: { pattern: ['h', 'q', 'q', 'q', 'q', 'q', 'q'] }, target: { rhythm: ['h', 'q', 'q', 'q', 'q', 'q', 'q'] }, reveal: 'after-check', difficulty: 0.25,
            conclude: '긴 소리는 2분음표, 짧은 소리는 4분음표로 놓았어요. 마디마다 4박이에요.' },
          { prompt: '길게 울리는 소리 하나와 짧은 소리 둘로 두 마디를 채우고 점검해요.', target: { beats: true, use: ['h'], selfCheck: ['어떤 물체의 소리인지 이름을 붙였어요', '긴 소리를 2분음표로 나타냈어요', '짝에게 손뼉과 팔 뻗기로 들려주었어요'] }, difficulty: 0.25 },
        ],
      },
    ],
    wrap: '"긴 소리와 짧은 소리를 어떻게 나누어 적었나요?" 두 학생이 울림이 남는 시간을 말하게 한다. 출구 2번에서 높은 소리는 항상 짧다고 고른 학생에게는 작은 종을 쳐 보이며 높고 길게 울리는 소리를 다시 듣게 한다.',
    exit: [
      { type: 'tool', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 1, blocks: ['q', 'e', 'h', 'qr'], pattern: ['q', 'q', 'h'] }, prompt: '짧은 소리 둘 뒤에 긴 소리가 이어져요. 듣고 블록으로 놓아 보세요.', target: { rhythm: ['q', 'q', 'h'] }, difficulty: 0.2 },
      { type: 'choice', prompt: '작은 종은 높게 울려서 오래 남았어요. 이 소리를 알맞게 적은 것은?', options: ['높고 길게 울려요', '낮고 짧게 끊겨요', '높고 짧게 끊겨요'], answer: 0, difficulty: 0.2, explain: '높낮이와 길이는 따로 살펴요. 이 종은 높고 길게 울려요.' },
      { type: 'mood', prompt: '소리가 이어지는 시간을 귀로 재 보니 어땠나요?' },
    ],
    ws: {
      title: '길고 짧은 소리 적기',
      items: [
        { type: 'table', prompt: '물체의 소리를 높낮이와 길이로 나누어 쓰세요.', columns: ['물체', '높낮이', '길이'], cells: [['작은 종', '', ''], ['큰 북', '', ''], ['책상 두드리기', '', '']] },
        { type: 'figure', prompt: '긴 소리는 몇 박일까요? 긴 소리 블록 아래에 박 수를 쓰세요.', tool: 'keyboard', wide: true, options: { mode: 'rhythm', meter: 4, measures: 1 }, figures: [{ state: { rhythm: ['h', 'q', 'q'] }, caption: '긴 소리는 ____박, 짧은 소리 둘은 모두 ____박' }], answer: '2박, 2박' },
        { type: 'choice', prompt: '소리가 오래 남는 것에 ○ 하세요.', options: ['작은 종', '손뼉', '책상 두드리기'], answer: '작은 종' },
        { type: 'short', prompt: '오래 울리는 물체와 금방 끊기는 물체를 교실에서 하나씩 찾아 쓰세요.' },
      ],
      easy: {
        note: '오래 남는 소리는 긴 소리, 금방 끊기는 소리는 짧은 소리예요. 높낮이와 길이는 따로 적어요.',
        items: [
          { type: 'choice', prompt: '금방 끊기는 소리에 ○ 하세요.', options: ['손뼉', '종'], answer: '손뼉' },
          { type: 'choice', prompt: '긴 소리를 나타내는 블록은?', options: ['2분음표', '4분음표'], answer: '2분음표' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '높은 소리도 ___ 수 있어요.', answer: '길' },
          { type: 'short', prompt: '내가 낸 가장 긴 소리를 쓰세요.' },
        ],
      },
    },
    diff: {
      easy: '맞는 카드에 초록 테두리가 보이고, 마디마다 지금 몇 박인지 보여 줘요.',
      base: '카드와 블록을 스스로 놓고 확인해요.',
      challenge: '점2분음표와 쉼표 블록이 더 있고, 박 수 알림이 없어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 높은 소리와 짧은 소리를 한 가지로 묶는다 → 두 칸을 따로 적는 기록표를 쓴다. ② 세게 치면 소리가 길어진다고 여긴다 → 같은 물체를 세게·약하게 쳐 울림이 남는 시간을 견준다. ③ 유리컵을 세게 쳐 깨뜨릴 수 있다 → 플라스틱 컵이나 교구를 쓴다. 소리는 누를 때만 난다.',
  }));

  // ───────────────────────── 10차시 (확장) ─────────────────────────
  lessons.push(lesson(10, S1, {
    title: '같은 물체에서 서로 다른 소리를 내는 방법 두 가지 찾기',
    objective: '한 가지 물체에서 두드리는 곳이나 방법을 바꾸어 서로 다른 소리를 두 가지 이상 내고, 그 방법을 말할 수 있다.',
    ill: 'one paper pencil case with three arrows leading to a tap, a scrape and a shake, each making a different musical shape',
    sceneText: '한 물체, 여러 소리',
    safety: BODY_SAFE,
    intro: {
      teacher: '"필통 하나로 몇 가지 소리를 낼 수 있을까요? 뚜껑을 톡, 옆면을 쓱, 흔들면 달그락." 시연으로 세 가지 소리를 들려주고 달라진 것이 무엇인지 묻는다. ‘악기가 아니니 소리를 만들 수 없다’고 하는 학생에게는 "필통도 두드리는 곳이 다르면 소리가 달라져요, 해 볼까요?"라고 말한다.',
      student: '필통 하나로 서로 다른 소리를 몇 가지나 낼 수 있는지 찾아봅시다.',
    },
    acts: [
      {
        title: '활동 1. 같은 물체의 다른 소리 방법 모으기', minutes: 13, tool: 'mindmap',
        teacher: '"같은 필통이라도 두드리는 곳, 도구, 힘이 달라지면 소리가 달라져요." 카드를 읽고 필통을 직접 두드려 보게 한다. 2번에서 ‘필통 두 개를 쓰는 것’이 같은 물체의 다른 방법인지 묻는다. 다른 물체를 가져오는 것은 이번 활동의 방법이 아니라는 것을 짚는다.',
        task: '한 물체로 소리를 다르게 내는 방법을 모으고, 같은 물체의 다른 방법만 골라요.',
        levels: cardsLv(),
        items: [
          { prompt: '필통 하나로 낸 소리와 방법을 이어 보세요.', toolOptions: { mode: 'match', topic: '필통 소리', slots: [{ id: 'a', label: '톡 하고 짧은 소리' }, { id: 'b', label: '쓱 하고 긁는 소리' }, { id: 'c', label: '달그락 흔드는 소리' }], cards: ['손가락 끝으로 뚜껑을 쳐요', '손톱으로 옆면을 쓸어요', '필통을 들고 흔들어요'] }, target: { match: { a: '손가락 끝으로 뚜껑을 쳐요', b: '손톱으로 옆면을 쓸어요', c: '필통을 들고 흔들어요' } }, difficulty: 0.15 },
          { prompt: '같은 필통으로 다른 소리를 내는 방법만 골라 보세요.', toolOptions: { mode: 'pick', topic: '같은 물체 다른 소리', basket: '같은 물체의 방법', cards: ['뚜껑 가운데와 모서리를 쳐요', '손바닥과 손끝으로 번갈아 쳐요', '필통 대신 책상을 쳐요', '필통 두 개를 가져와 쳐요'] }, target: { pick: ['뚜껑 가운데와 모서리를 쳐요', '손바닥과 손끝으로 번갈아 쳐요'] }, reveal: 'after-check', difficulty: 0.25,
            hints: ['물체가 바뀌지 않았는지 먼저 보세요. 필통 하나만 쓰는 방법이어야 해요.', '고른 카드에 다른 물체나 둘째 필통이 들어 있는지 보세요.', '필통 하나에서 치는 곳을 바꾸거나 치는 손 모양을 바꾼 카드만 골라요.'],
            conclude: '같은 물체도 치는 곳이나 손 모양을 바꾸면 서로 다른 소리가 나요.' },
          { prompt: '소리를 다르게 낸 방법이 무엇을 바꾼 것인지 나누어 보세요.', toolOptions: { mode: 'sort', topic: '바꾼 것', slots: ['치는 곳을 바꿨어요', '치는 방법을 바꿨어요'], cards: ['뚜껑 가운데 대신 모서리를 쳐요', '옆면 대신 바닥을 쳐요', '톡 치는 대신 쓱 긁어요', '두드리는 대신 흔들어요'] }, target: { sort: { '치는 곳을 바꿨어요': ['뚜껑 가운데 대신 모서리를 쳐요', '옆면 대신 바닥을 쳐요'], '치는 방법을 바꿨어요': ['톡 치는 대신 쓱 긁어요', '두드리는 대신 흔들어요'] } }, difficulty: 0.3 },
        ],
      },
      {
        title: '활동 2. 같은 물체로 두 가지 리듬 지어 번갈아 들려주기', minutes: 13, tool: 'keyboard',
        teacher: '"필통을 톡 치는 소리와 쓱 긁는 소리를 각각 다른 블록으로 나타내 봐요. 톡은 짧은 4분음표, 쓱은 긴 2분음표로 약속해요." 약속을 칠판에 적어 둔다. 한 가지 소리로만 리듬을 지은 학생에게 "다른 방법으로 한 번 더 내면 어떻게 될까요?"라고 되묻는다.',
        task: '톡과 쓱을 블록으로 정해 한 마디 리듬 두 가지를 짓고, 짝과 번갈아 들려줘요.',
        levels: rhy(4, 1),
        items: [
          { prompt: '톡 톡 쓱은 짧은 소리 둘과 긴 소리 하나예요. 듣고 블록으로 놓아 보세요.', toolOptions: { pattern: ['q', 'q', 'h'] }, target: { rhythm: ['q', 'q', 'h'] }, difficulty: 0.15 },
          { prompt: '쓱 톡 톡이에요. 순서가 달라진 리듬을 듣고 놓아 보세요.', toolOptions: { pattern: ['h', 'q', 'q'] }, target: { rhythm: ['h', 'q', 'q'] }, difficulty: 0.2 },
          { prompt: '두 가지 소리를 섞어 한 마디를 4박으로 짓고 점검해요.', target: { beats: true, use: ['q', 'h'], selfCheck: ['톡과 쓱 두 가지 소리를 모두 썼어요', '짝에게 내 리듬을 쳐 주고 소리가 두 가지로 들렸는지 물었어요', '짝의 리듬과 다른 점을 한 가지 말했어요'] }, difficulty: 0.25 },
        ],
      },
    ],
    wrap: '"오늘 필통 하나로 낸 소리를 몇 가지 말할 수 있나요?" 두 학생이 방법과 소리를 함께 말하게 한다. 출구 2번에서 다른 물체를 쓰는 것을 고른 학생에게는 필통 하나만 쓴다는 조건을 다시 읽게 한다.',
    exit: [
      { type: 'tool', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 1, blocks: ['q', 'e', 'h', 'qr'], pattern: ['q', 'h', 'q'] }, prompt: '톡, 쓱, 톡 순서로 낸 리듬을 듣고 블록으로 놓아 보세요.', target: { rhythm: ['q', 'h', 'q'] }, difficulty: 0.2 },
      { type: 'choice', prompt: '물병 하나로 서로 다른 소리를 내는 방법은 어느 것일까요?', options: ['뚜껑과 몸통을 번갈아 두드려요', '물병 대신 책상을 두드려요', '친구 필통을 가져와 두드려요'], answer: 0, difficulty: 0.2, explain: '같은 물병에서 치는 곳을 바꾸면 소리가 달라져요.' },
      { type: 'mood', prompt: '같은 물체에서 다른 소리를 찾아보니 어땠나요?' },
    ],
    ws: {
      title: '한 물체, 두 가지 소리',
      items: [
        { type: 'table', prompt: '내가 고른 물체로 낸 소리 두 가지를 쓰세요.', columns: ['방법', '소리를 말로 나타내기'], cells: [['방법 1:', ''], ['방법 2:', '']] },
        { type: 'figure', prompt: '톡은 짧은 소리, 쓱은 긴 소리예요. 이 리듬에서 쓱에 해당하는 블록에 ○ 하세요.', tool: 'keyboard', wide: true, options: { mode: 'rhythm', meter: 4, measures: 1 }, figures: [{ state: { rhythm: ['q', 'q', 'h'] }, caption: '쓱은 ____번째 블록' }], answer: '셋째 블록' },
        { type: 'choice', prompt: '같은 물체로 다른 소리를 내는 방법에 ○ 하세요.', options: ['치는 곳을 바꿔요', '물체를 모두 바꿔요'], answer: '치는 곳을 바꿔요' },
        { type: 'short', prompt: '내가 찾은 두 가지 소리 가운데 더 마음에 드는 소리와 까닭을 쓰세요.' },
      ],
      easy: {
        note: '한 물체에서도 치는 곳, 치는 손 모양, 힘을 바꾸면 다른 소리가 나요.',
        items: [
          { type: 'choice', prompt: '필통 뚜껑과 옆면을 번갈아 치는 것은?', options: ['치는 곳 바꾸기', '물체 바꾸기'], answer: '치는 곳 바꾸기' },
          { type: 'choice', prompt: '손가락 끝과 손바닥으로 치는 것은?', options: ['치는 방법 바꾸기', '물체 바꾸기'], answer: '치는 방법 바꾸기' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '같은 물체도 ___ 곳을 바꾸면 소리가 달라져요.', answer: '치는' },
          { type: 'short', prompt: '필통으로 낸 소리 한 가지를 쓰세요.' },
        ],
      },
    },
    diff: {
      easy: '맞는 카드에 초록 테두리가 보이고, 마디마다 지금 몇 박인지 보여 줘요.',
      base: '카드와 블록을 스스로 놓고 확인해요.',
      challenge: '쉼표와 8분음표 블록이 더 있고, 박 수 알림이 없어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 다른 물체를 가져와 방법을 늘린다 → 한 물체만 쓰는 조건을 칠판에 적어 둔다. ② 소리를 말로 나타내지 못한다 → 톡·쓱·달그락 같은 소리 말을 먼저 정한다. ③ 소리를 만들려고 물체를 세게 내리쳐 망가뜨린다 → 가볍게 쓰다듬거나 두드리게 한다. 소리는 누를 때만 난다.',
  }));

  // ───────────────────────── 11차시 (핵심) ─────────────────────────
  lessons.push(lesson(11, S1, {
    title: '내 즉흥 소리 가운데 마음에 남은 소리 하나 골라 까닭 말하기',
    objective: '즉흥으로 낸 소리 가운데 마음에 남은 소리 하나를 고르고, 소리의 특징이나 내 마음을 들어 까닭을 말할 수 있다.',
    ill: 'a child holding a glowing paper music note chosen from a jar of colorful sound bubbles with a speech bubble',
    sceneText: '마음에 남은 소리',
    intro: {
      teacher: '"지난 시간까지 여러 가지 소리를 즉흥으로 내 보았어요. 그중 아직도 귀에 남아 있는 소리가 있나요?" 한두 학생이 낸 소리를 흉내 내 보게 한다. ‘그냥 좋아서요’라고만 하는 학생에게 "그 소리는 높았나요, 느렸나요? 어떤 장면이 떠올랐나요?" 하고 묻는다.',
      student: '지금까지 즉흥으로 낸 소리 가운데 귀에 남은 소리가 있나요? 왜 남았는지 생각해 봅시다.',
    },
    acts: [
      {
        title: '활동 1. 까닭을 말하는 두 가지 방법 알기', minutes: 13, tool: 'mindmap',
        teacher: '"까닭을 말하는 방법은 두 가지예요. 소리의 특징을 말하거나, 그 소리를 낼 때나 들을 때 내 마음을 말해요." 학생 말을 두 칸에 나누어 적어 본다. ‘좋아서요’ 같은 말은 구체적이지 않으니 한 가지를 더하게 한다. 2번은 구체적인 까닭 문장을 고르는 연습이에요.',
        task: '까닭 카드를 소리의 특징과 내 마음으로 나누고, 구체적으로 말한 까닭을 골라요.',
        levels: cardsLv(),
        items: [
          { prompt: '마음에 남은 까닭을 소리의 특징과 내 마음으로 나누어 보세요.', toolOptions: { mode: 'sort', topic: '까닭 나누기', slots: ['소리의 특징', '내 마음'], cards: ['높은 소리가 톡톡 튀어서요', '천천히 길게 이어져서요', '들으니 마음이 편안해서요', '비 오는 날이 떠올라 포근했어요'] }, target: { sort: { '소리의 특징': ['높은 소리가 톡톡 튀어서요', '천천히 길게 이어져서요'], '내 마음': ['들으니 마음이 편안해서요', '비 오는 날이 떠올라 포근했어요'] } }, difficulty: 0.15,
            hints: ['소리가 어떻게 들렸는지를 말하는 카드와 내가 어떻게 느꼈는지를 말하는 카드로 나누어 보세요.', '높낮이·길이처럼 귀로 알 수 있는 것은 소리의 특징, 편안함·포근함은 내 마음이에요.', '높은 소리·천천히 길게는 소리의 특징, 편안해서·포근했어요는 내 마음이에요.'] },
          { prompt: '구체적으로 까닭을 말한 문장만 골라 보세요.', toolOptions: { mode: 'pick', topic: '구체적인 까닭', basket: '구체적이에요', cards: ['그냥 좋아요', '낮은 소리가 천천히 이어져서 졸린 곰 같았어요', '친구가 하니까 따라서요', '빠르고 짧은 소리가 시장처럼 들썩여서요'] }, target: { pick: ['낮은 소리가 천천히 이어져서 졸린 곰 같았어요', '빠르고 짧은 소리가 시장처럼 들썩여서요'] }, reveal: 'after-check', difficulty: 0.25,
            conclude: '소리의 특징이나 떠오른 장면을 함께 말하면 까닭이 구체적으로 전해져요.' },
          { prompt: '서아가 "그 소리는 마음에 안 들어"라고 했어요. 나는 그 소리가 마음에 남았어요. 알맞은 것을 골라 보세요.', toolOptions: { mode: 'pick', topic: '알맞은 말과 행동', basket: '알맞아요', cards: ['소리를 버리고 서아가 좋아하는 소리로 바꿔요', '내가 고른 까닭을 말하고 서아의 생각도 들어요', '"네가 몰라서 그래"라고 말해요'] }, target: { pick: ['내가 고른 까닭을 말하고 서아의 생각도 들어요'] }, difficulty: 0.25, hints: ['상황을 다시 읽고, 읽는 사람이나 짝의 마음이 어떨지 먼저 떠올려 보세요.', '고른 카드를 짝에게 말했다고 생각해 보세요. 짝이 속상해하거나 소리가 끊기지 않는지 살펴요.', '내가 고른 까닭을 말하고 서아의 생각도 들어요 — 서로 다른 생각을 알고 둘 다 존중해요.'], conclude: '서로 다른 생각을 알고 둘 다 존중해요.' },
        ],
      },
      {
        title: '활동 2. 마음에 남은 소리를 다시 쳐 보고 까닭 점검하기', minutes: 13, tool: 'keyboard',
        teacher: '"마음에 남은 소리를 건반으로 다시 쳐 볼게요. 똑같이 못 쳐도 괜찮아요, 비슷한 느낌이면 돼요." 건반에서 느린지 빠른지, 높은지 낮은지를 손으로 나타내며 말하게 한다. 3번은 점검 목록을 하나씩 표시하며 까닭을 문장으로 말해 보는 활동이에요. 까닭을 짧게 끝내는 학생에게는 한 가지를 더 말해 보게 한다.',
        task: '마음에 남은 소리를 건반으로 다시 지어 치고, 까닭을 말했는지 점검해요.',
        levels: mel(),
        items: [
          { prompt: '졸린 곰 소리처럼 낮고 느린 세 음이에요. 가락 듣기를 누르고 따라 쳐 보세요.', toolOptions: { melody: ['도', '도', '솔'], tempo: 52 }, target: { notes: ['도', '도', '솔'] }, difficulty: 0.15 },
          { prompt: '마음에 남은 소리를 나타내는 네 음 가락을 지어 쳐 보세요.', target: { compose: { length: 4 }, selfCheck: ['소리를 낼 때 어떤 장면을 떠올렸어요'] }, difficulty: 0.2 },
          { prompt: '내가 고른 소리를 짝에게 쳐 주고 까닭을 말한 뒤 점검해요.', target: { selfCheck: ['소리의 특징 한 가지를 말했어요', '내 마음 한 가지를 말했어요', '짝의 이야기도 끝까지 들었어요'], minNotes: 4 }, difficulty: 0.15 },
        ],
      },
    ],
    wrap: '"마음에 남은 소리와 그 까닭을 한 문장으로 말해 볼까요?" 두 학생이 소리의 특징과 마음을 하나씩 넣어 말하게 한다. 출구 2번에서 ‘그냥 좋다’를 고른 학생에게는 소리가 높았는지 낮았는지만 더해 다시 말해 보게 한다.',
    exit: [
      { type: 'tool', tool: 'keyboard', options: { from: '도', to: '높은도' }, prompt: '마음에 남은 소리를 높은 쪽에서 시작하는 세 음 가락으로 지어 보세요.', target: { compose: { length: 3, startOn: '높은도' } }, difficulty: 0.25 },
      { type: 'choice', prompt: '마음에 남은 소리의 까닭으로 가장 구체적인 것은 무엇일까요?', options: ['길게 이어지는 소리가 파도처럼 느껴져서요', '그냥 좋아서요', '남들이 좋다고 해서요'], answer: 0, difficulty: 0.2, explain: '소리의 길이와 떠오른 장면을 함께 말해야 까닭이 구체적이에요.' },
      { type: 'mood', prompt: '내 소리의 까닭을 말해 보니 어땠나요?' },
    ],
    ws: {
      title: '마음에 남은 소리 기록',
      items: [
        { type: 'table', prompt: '마음에 남은 소리를 소개하세요.', columns: ['소리', '소리의 특징', '내 마음'], rows: 2 },
        { type: 'figure', prompt: '내가 고른 소리를 높은 소리인지 낮은 소리인지 건반에서 한 곳에 ○ 하세요.', tool: 'keyboard', wide: true, options: { from: '낮은솔', to: '높은도' }, figures: [{ caption: '○ 한 소리는 ( 높은 소리 · 낮은 소리 )' }], answer: '학생마다 다름(높낮이를 맞게 표시했는지 본다)' },
        { type: 'choice', prompt: '소리의 특징을 말한 까닭에 ○ 하세요.', options: ['빠르고 짧게 이어져서요', '마음이 포근해서요'], answer: '빠르고 짧게 이어져서요' },
        { type: 'short', prompt: '마음에 남은 소리 하나와 그 까닭을 두 문장으로 쓰세요.' },
      ],
      easy: {
        note: '까닭에는 소리의 특징(높낮이·길이·세기)과 내 마음을 말할 수 있어요.',
        items: [
          { type: 'choice', prompt: '내 마음을 말한 까닭에 ○ 하세요.', options: ['들으니 신났어요', '낮고 길게 이어졌어요'], answer: '들으니 신났어요' },
          { type: 'choice', prompt: '소리의 특징을 말한 까닭에 ○ 하세요.', options: ['빠르고 짧았어요', '기분이 좋았어요'], answer: '빠르고 짧았어요' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '까닭을 말할 때 소리의 ___이나 내 마음을 함께 말해요.', answer: '특징' },
          { type: 'short', prompt: '마음에 남은 소리를 한 줄 쓰세요.' },
        ],
      },
    },
    diff: {
      easy: '맞게 나눈 카드에 초록 테두리가 보이고, 가락을 듣는 동안 건반이 빛나요.',
      base: '카드를 스스로 나누고 확인해요. 계이름을 켜고 끌 수 있어요.',
      challenge: '구체적인 까닭 고르기에 비슷한 함정 문장이 더 있고, 건반은 계이름 없이 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 까닭을 ‘그냥’으로 끝낸다 → 소리의 특징 한 가지를 보태게 한다. ② 친구 생각과 다르면 내 소리가 틀렸다고 여긴다 → 까닭이 다를 뿐 틀린 것이 아님을 말해 준다. ③ 똑같이 다시 치지 못해 속상해한다 → 비슷한 느낌이면 충분하다고 알려 준다. 소리는 누를 때만 난다.',
  }));

  // ───────────────────────── 12차시 (연습) ─────────────────────────
  lessons.push(lesson(12, S1, {
    title: '친구의 즉흥 가락에서 새로웠던 점 찾아 말하기',
    objective: '친구가 즉흥으로 친 가락을 듣고 내 것과 다른 점과 새로웠던 점을 찾아 구체적으로 말할 수 있다.',
    ill: 'two children listening to each other with paper headphones while sparkling musical notes of different shapes float between them',
    sceneText: '친구 소리에서 배워요',
    intro: {
      teacher: '"민지가 친 가락을 들었어요. 내가 몰랐던 소리가 하나 있었나요?" 한 학생의 가락을 건반으로 쳐 보여 주고, 새로웠던 점을 손가락 하나로 짚어 말하게 한다. ‘그냥 이상했다’고 하는 학생에게 "이상한 것과 새로운 것은 같을까요? 무엇이 달랐는지 말해 볼까요?"라고 묻는다.',
      student: '친구가 친 가락에서 내가 몰랐던 새로운 소리가 있었나요? 무엇이 달랐는지 찾아봅시다.',
    },
    acts: [
      {
        title: '활동 1. 새로운 점을 바르게 말하는 연습', minutes: 12, tool: 'mindmap',
        teacher: '"새로운 점을 말할 때는 ‘무엇이, 어떻게 달랐는지’를 말해요." 카드마다 소리 내어 읽게 하고 평가하는 말과 설명하는 말을 가른다. ‘못했다’처럼 평가하는 말을 설명하는 말에 넣는 학생에게 "그 말은 소리를 설명한 걸까요, 점수를 매긴 걸까요?"라고 묻는다.',
        task: '새로운 점을 설명하는 말과 평가하는 말을 나누고, 친구에게 알맞은 말을 골라요.',
        levels: cardsLv(),
        items: [
          { prompt: '친구 가락에 대한 말을 설명하는 말과 평가하는 말로 나누어 보세요.', toolOptions: { mode: 'sort', topic: '친구 가락에 대한 말', slots: ['소리를 설명해요', '점수를 매겨요'], cards: ['끝 음이 위로 올라갔어요', '가운데에서 쉬었다가 이어졌어요', '너는 잘 못해', '내 것보다 훨씬 나아'] }, target: { sort: { '소리를 설명해요': ['끝 음이 위로 올라갔어요', '가운데에서 쉬었다가 이어졌어요'], '점수를 매겨요': ['너는 잘 못해', '내 것보다 훨씬 나아'] } }, difficulty: 0.15,
            hints: ['소리가 어떻게 들렸는지 알려 주는 말인지, 잘하고 못함을 가리는 말인지 나누어 보세요.', '넣은 카드가 소리를 다시 그려 볼 수 있게 해 주는지 따져 보세요.', '올라갔어요·쉬었다가 이어졌어요는 소리 설명, 잘 못해·훨씬 나아는 점수를 매기는 말이에요.'] },
          { prompt: '준호의 가락과 내 가락을 견준 말 가운데 새로운 점을 찾은 말만 골라 보세요.', toolOptions: { mode: 'pick', topic: '새로운 점', basket: '새로운 점이에요', cards: ['준호는 처음에 낮은 음으로 시작했어요', '준호는 같은 음을 세 번 이어서 쳤어요', '나도 똑같이 쳤어요', '준호가 더 잘 쳤어요'] }, target: { pick: ['준호는 처음에 낮은 음으로 시작했어요', '준호는 같은 음을 세 번 이어서 쳤어요'] }, reveal: 'after-check', difficulty: 0.25,
            conclude: '친구에게서 배운 점은 점수가 아니라 ‘무엇이 달랐는지’로 말해요.' },
          { prompt: '지우의 가락은 내가 처음 듣는 높은 소리로 끝났어요. 알맞은 것을 골라 보세요.', toolOptions: { mode: 'pick', topic: '알맞은 말과 행동', basket: '알맞아요', cards: ['"이상한 소리야" 하고 웃어요', '"끝 음이 높아서 새로웠어, 어떻게 생각했어?" 하고 물어요', '아무 말 없이 그대로 따라 쳐요'] }, target: { pick: ['"끝 음이 높아서 새로웠어, 어떻게 생각했어?" 하고 물어요'] }, difficulty: 0.25, hints: ['상황을 다시 읽고, 읽는 사람이나 짝의 마음이 어떨지 먼저 떠올려 보세요.', '고른 카드를 짝에게 말했다고 생각해 보세요. 짝이 속상해하거나 소리가 끊기지 않는지 살펴요.', '"끝 음이 높아서 새로웠어, 어떻게 생각했어?" 하고 물어요 — 지우의 생각을 알고 내 가락에도 써 보고 싶어져요.'], conclude: '지우의 생각을 알고 내 가락에도 써 보고 싶어져요.' },
        ],
      },
      {
        title: '활동 2. 친구 가락과 내 가락의 다른 음 찾기', minutes: 14, tool: 'keyboard',
        teacher: '"친구 가락을 따라 친 뒤 내 가락과 어디가 달랐는지 찾아 보아요." 친구 가락을 듣고 따라 친 뒤 내 가락의 같은 자리와 견주게 한다. 2번은 맞힌 뒤에만 달라진 곳을 알려 준다. 모두 달랐다고 하는 학생에게 칸마다 손가락으로 짚어 같은 음과 다른 음을 세어 보게 한다.',
        task: '친구가 친 가락을 듣고 따라 친 뒤, 내 가락과 다른 곳을 찾고 새로웠던 점을 말해요.',
        levels: mel(),
        items: [
          { prompt: '내 가락은 ‘도 레 미 레 도’였어요. 준호의 가락을 듣고 따라 쳐 보세요.', toolOptions: { melody: ['도', '레', '미', '솔', '높은도'] }, target: { notes: ['도', '레', '미', '솔', '높은도'] }, difficulty: 0.15 },
          { prompt: '서아의 가락이에요. 듣고 따라 친 뒤 내 가락과 달랐던 곳을 찾아보세요.', toolOptions: { melody: ['도', '레', '솔', '레', '도'] }, target: { notes: ['도', '레', '솔', '레', '도'] }, reveal: 'after-check', difficulty: 0.25,
            conclude: '내 가락 ‘도 레 미 레 도’와 서아의 가락은 셋째 음이 미에서 솔로 달랐어요.' },
          { prompt: '친구 가락에서 새로웠던 점을 말하고 내 가락에 한 가지 써 본 뒤 점검해요.', target: { selfCheck: ['친구 가락에서 새로웠던 점을 설명하는 말로 말했어요', '그 점을 내 가락에 한 가지 써 보았어요', '친구에게 고마웠던 점도 말했어요'], minNotes: 4 }, difficulty: 0.2 },
        ],
      },
    ],
    wrap: '"친구 가락에서 새로웠던 점을 설명하는 말로 말해 볼까요?" 두 학생이 ‘무엇이 어떻게 달랐는지’를 넣어 말하게 한다. 출구 2번에서 점수를 매기는 말을 고른 학생에게는 같은 가락을 설명하는 말로 바꾸어 말해 보게 한다.',
    exit: [
      { type: 'tool', tool: 'keyboard', options: { from: '도', to: '높은도', melody: ['미', '솔', '라', '솔', '미'] }, prompt: '친구의 가락을 듣고 건반으로 따라 쳐 보세요.', target: { notes: ['미', '솔', '라', '솔', '미'] }, difficulty: 0.2 },
      { type: 'choice', prompt: '친구 가락에서 새로웠던 점을 말한 문장은 어느 것일까요?', options: ['가운데에 쉬는 곳이 있어서 새로웠어요', '너보다 내가 더 잘해', '그냥 이상했어요'], answer: 0, difficulty: 0.2, explain: '무엇이 어떻게 달랐는지 말해야 새로운 점이 전해져요.' },
      { type: 'mood', prompt: '친구 소리에서 새로운 점을 찾아보니 어땠나요?' },
    ],
    ws: {
      title: '친구 가락에서 배운 점',
      items: [
        { type: 'table', prompt: '친구 가락과 내 가락을 견주어 쓰세요.', columns: ['', '처음 음', '마지막 음', '쉬는 곳'], cells: [['내 가락', '', '', ''], ['친구 가락', '', '', '']] },
        { type: 'figure', prompt: '친구 가락의 ‘마지막 음’이 나는 건반에 ○ 하세요.', tool: 'keyboard', wide: true, options: { from: '도', to: '높은도', printNames: true }, figures: [{ caption: '○ 한 건반의 계이름: ____' }], answer: '선생님이 정한 가락의 마지막 음' },
        { type: 'choice', prompt: '새로운 점을 말하는 바른 말에 ○ 하세요.', options: ['끝 음이 높아서 놀랐어요', '못 쳤어요'], answer: '끝 음이 높아서 놀랐어요' },
        { type: 'short', prompt: '친구 가락에서 내 가락에 써 보고 싶은 점을 쓰세요.' },
      ],
      easy: {
        note: '새로운 점은 ‘무엇이 어떻게 달랐는지’로 말해요. 잘했다·못했다는 점수이지 설명이 아니에요.',
        items: [
          { type: 'choice', prompt: '설명하는 말에 ○ 하세요.', options: ['끝 음이 높아요', '못했어요'], answer: '끝 음이 높아요' },
          { type: 'choice', prompt: '친구에게 고마움을 전하는 말은?', options: ['덕분에 새로운 방법을 알았어', '난 이미 다 알아'], answer: '덕분에 새로운 방법을 알았어' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '새로운 점을 말할 때는 무엇이 ___ 달랐는지 말해요.', answer: '어떻게' },
          { type: 'short', prompt: '친구 가락에서 놀란 점을 한 줄 쓰세요.' },
        ],
      },
    },
    diff: {
      easy: '맞게 나눈 카드에 초록 테두리가 보이고, 친구 가락을 듣는 동안 건반이 빛나요.',
      base: '카드를 스스로 놓고 확인해요. 계이름을 켜고 끌 수 있어요.',
      challenge: '건반은 계이름 없이 귀로 따라 치고, 맞힌 뒤에야 달랐던 곳이 보여요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 새로운 점을 점수로 말한다 → ‘무엇이, 어떻게’ 문장 틀을 칠판에 적어 둔다. ② 친구 가락을 낯설다고 웃는다 → 다름과 틀림은 다르다고 말하고 교사가 먼저 시범을 보인다. ③ 가락을 못 따라 쳐 견주기를 포기한다 → 가락 듣기를 몇 번이고 다시 들려준다. 소리는 누를 때만 난다.',
  }));

  // ───────────────────────── 13차시 (확장) ─────────────────────────
  lessons.push(lesson(13, S1, {
    title: '다음에 써 볼 것을 정하고 다시 즉흥으로 표현해 비교하기',
    objective: '앞선 즉흥 표현을 돌아보고 다음에 써 볼 것 한 가지를 정해 다시 표현한 뒤, 달라진 점을 말할 수 있다.',
    ill: 'a child planting a small paper flag labeled with a new idea on a winding path of musical notes that goes upward',
    sceneText: '다음엔 이것을!',
    intro: {
      teacher: '"처음 즉흥으로 소리를 냈을 때와 지금을 견주어 보면 무엇이 달라졌나요? 다음에 해 보고 싶은 것을 하나만 정해 봐요." 두세 학생이 말한 계획을 칠판에 ‘더 낮게’, ‘쉬는 곳 넣기’처럼 짧게 적는다. 계획을 세 가지 넘게 말하는 학생에게 "한 번에 하나만 바꾸어야 무엇이 달라졌는지 알 수 있어요"라고 짚는다.',
      student: '다음 즉흥에서 써 보고 싶은 것을 한 가지만 정해 봅시다.',
    },
    acts: [
      {
        title: '활동 1. 다음에 써 볼 것 한 가지 정하기', minutes: 12, tool: 'mindmap',
        teacher: '"써 볼 것은 소리의 높낮이, 길이, 세기, 빠르기, 쉼 가운데 하나로 정해요." 카드를 읽고 모둠이 각자 하나를 고르게 한다. 2번에서 여러 가지를 한꺼번에 바꾸는 계획을 고르는 학생에게 "무엇이 달라졌는지 알려면 몇 가지만 바꾸는 것이 좋을까요?"라고 되묻는다.',
        task: '써 볼 것을 소리의 어떤 부분인지로 나누고, 한 번에 하나만 바꾸는 계획을 골라요.',
        levels: cardsLv(),
        items: [
          { prompt: '써 보고 싶은 것을 높낮이·길이·세기 가운데 어디에 속하는지 나누어 보세요.', toolOptions: { mode: 'sort', topic: '다음에 써 볼 것', slots: ['높낮이·길이', '세기·빠르기'], cards: ['처음을 더 낮은 음으로 시작하기', '가운데에 긴 소리 넣기', '끝을 점점 여리게 하기', '중간부터 점점 빠르게 하기'] }, target: { sort: { '높낮이·길이': ['처음을 더 낮은 음으로 시작하기', '가운데에 긴 소리 넣기'], '세기·빠르기': ['끝을 점점 여리게 하기', '중간부터 점점 빠르게 하기'] } }, difficulty: 0.15 },
          { prompt: '한 번에 하나만 바꾸는 계획을 골라 보세요.', toolOptions: { mode: 'pick', topic: '좋은 계획', basket: '좋은 계획이에요', cards: ['가운데에 쉬는 곳을 한 번 넣어 보기', '높낮이·세기·빠르기를 모두 한꺼번에 바꾸기', '끝 음을 한 칸 더 높이기', '아무것도 정하지 않고 시작하기'] }, target: { pick: ['가운데에 쉬는 곳을 한 번 넣어 보기', '끝 음을 한 칸 더 높이기'] }, reveal: 'after-check', difficulty: 0.25,
            conclude: '한 번에 한 가지씩 바꾸면 무엇이 달라졌는지 알 수 있어요.' },
          { prompt: '민지는 ‘끝을 점점 여리게’ 하기로 하고 다시 쳤어요. 알맞은 것을 골라 보세요.', toolOptions: { mode: 'pick', topic: '알맞은 말과 행동', basket: '알맞아요', cards: ['다시 쳐 놓고 그냥 끝내요', '처음 가락과 다시 친 가락을 번갈아 들으며 달라졌는지 견주어요', '처음 가락은 지우고 새것만 남겨요'] }, target: { pick: ['처음 가락과 다시 친 가락을 번갈아 들으며 달라졌는지 견주어요'] }, difficulty: 0.25, hints: ['상황을 다시 읽고, 읽는 사람이나 짝의 마음이 어떨지 먼저 떠올려 보세요.', '고른 카드를 짝에게 말했다고 생각해 보세요. 짝이 속상해하거나 소리가 끊기지 않는지 살펴요.', '처음 가락과 다시 친 가락을 번갈아 들으며 달라졌는지 견주어요 — 끝이 여려졌는지 귀로 확인해요.'], conclude: '끝이 여려졌는지 귀로 확인해요.' },
        ],
      },
      {
        title: '활동 2. 정한 것을 써서 다시 즉흥으로 치고 견주기', minutes: 14, tool: 'keyboard',
        teacher: '"정한 것 한 가지만 바꾸어 같은 장면을 다시 쳐 볼게요." 처음 가락과 다시 친 가락을 번갈아 들려주고 달라진 곳을 말하게 한다. 여러 곳을 바꿔 놓은 학생에게 한 가지만 남기고 나머지는 처음처럼 치게 한다. 3번은 계획 칸을 쓴 뒤 점검 목록을 표시하는 활동이에요.',
        task: '정한 한 가지만 바꾸어 다시 치고, 처음 가락과 어디가 달라졌는지 점검해요.',
        levels: mel(),
        items: [
          { prompt: '처음 가락이에요. 가락 듣기를 누르고 따라 쳐 보세요.', toolOptions: { melody: ['솔', '미', '레', '도'] }, target: { notes: ['솔', '미', '레', '도'] }, difficulty: 0.15 },
          { prompt: '끝 음만 한 칸 더 낮추어 다시 쳐요. 솔 미 레 낮은솔 가락을 따라 쳐 보세요.', toolOptions: { melody: ['솔', '미', '레', '낮은솔'], from: '낮은솔', to: '높은도' }, target: { notes: ['솔', '미', '레', '낮은솔'] }, difficulty: 0.25 },
          { prompt: '내가 정한 한 가지만 바꾸어 네 음 가락을 다시 치고 점검해요.', target: { compose: { length: 4 }, selfCheck: ['바꿀 것 한 가지를 먼저 말로 정했어요', '처음 가락과 다시 친 가락을 번갈아 들어 보았어요', '달라진 곳을 한 문장으로 말했어요'] }, difficulty: 0.25 },
        ],
      },
    ],
    wrap: '"다음에 써 보려던 것은 무엇이었고, 처음과 어떻게 달라졌나요?" 두 학생이 계획과 결과를 한 문장으로 말하게 한다. 출구 2번에서 모두 바꾸는 쪽을 고른 학생에게는 한 가지만 바꾼 가락과 비교해 보게 한다.',
    exit: [
      { type: 'tool', tool: 'keyboard', options: { from: '도', to: '높은도' }, prompt: '끝 음을 높은도로 바꾸어 도로 시작하는 네 음 가락을 다시 지어 보세요.', target: { compose: { length: 4, startOn: '도', endOn: '높은도' } }, difficulty: 0.25 },
      { type: 'choice', prompt: '다음 즉흥에서 무엇이 달라졌는지 알려면 어떻게 계획할까요?', options: ['한 가지만 정해 바꾸어요', '모든 것을 한꺼번에 바꿔요', '정하지 않고 처음과 똑같이 해요'], answer: 0, difficulty: 0.2, explain: '한 가지만 바꾸면 무엇 때문에 달라졌는지 알 수 있어요.' },
      { type: 'mood', prompt: '다시 즉흥으로 표현해 보니 어땠나요?' },
    ],
    ws: {
      title: '다음에 써 볼 것',
      items: [
        { type: 'table', prompt: '처음과 다시 표현한 것을 견주어 쓰세요.', columns: ['', '높낮이', '길이·빠르기', '느낌'], cells: [['처음', '', '', ''], ['다시', '', '', '']] },
        { type: 'figure', prompt: '다시 칠 때 끝 음을 올리고 싶어요. 끝 음으로 쓸 건반 하나에 ○ 하세요.', tool: 'keyboard', wide: true, options: { from: '도', to: '높은도', printNames: true }, figures: [{ caption: '○ 한 건반의 계이름: ____' }], answer: '학생마다 다름(가장 높은 쪽 건반이면 알맞음)' },
        { type: 'choice', prompt: '무엇이 달라졌는지 알려면 한 번에 바꿀 것은?', options: ['한 가지', '모든 것'], answer: '한 가지' },
        { type: 'short', prompt: '다음 즉흥 표현에서 써 보고 싶은 것 한 가지와 그 까닭을 쓰세요.' },
      ],
      easy: {
        note: '다음에 써 볼 것은 높낮이, 길이, 세기, 빠르기, 쉼 가운데 한 가지로 정해요.',
        items: [
          { type: 'choice', prompt: '바꿀 것은 몇 가지로 정하면 좋을까요?', options: ['한 가지', '열 가지'], answer: '한 가지' },
          { type: 'choice', prompt: '처음과 다시 친 것을 어떻게 하면 달라진 점을 알 수 있을까요?', options: ['번갈아 들어요', '하나만 들어요'], answer: '번갈아 들어요' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '써 볼 것을 정하면 처음과 ___ 하며 확인해요.', answer: '견주기' },
          { type: 'short', prompt: '다음에 써 볼 것을 한 줄 쓰세요.' },
        ],
      },
    },
    diff: {
      easy: '맞게 나눈 카드에 초록 테두리가 보이고, 가락을 듣는 동안 건반이 빛나요.',
      base: '카드를 스스로 놓고 확인해요. 계이름을 켜고 끌 수 있어요.',
      challenge: '건반은 계이름 없이 귀로 따라 치고, 낮은 쪽 음역도 함께 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 여러 가지를 한꺼번에 바꾼다 → 한 가지만 정한 계획 카드를 쓴다. ② 처음 가락을 기억하지 못해 견줄 수 없다 → 처음 가락을 공책에 계이름으로 적어 둔다. ③ 다시 쳤더니 처음보다 못하다고 속상해한다 → 달라지는 것이 목표이지 더 나아지는 것이 목표가 아님을 말해 준다. 소리는 누를 때만 난다.',
  }));

  // ───────────────────────── 14차시 (핵심) ─────────────────────────
  lessons.push(lesson(14, S2, {
    title: '원래 가락과 바꾼 가락을 번갈아 듣고 달라진 칸 짚기',
    objective: '같은 곡의 원래 대목과 바꾼 대목을 번갈아 듣고, 몇째 음이 달라졌는지 짚어 표시할 수 있다.',
    ill: 'two paper melody ribbons running side by side with one glowing note in a different color that a child points to with a small paper arrow',
    sceneText: '어디가 달라졌을까?',
    intro: {
      teacher: '"같은 노래 같은데 어딘가 달라졌어요. 한 번 들려줄게요. 어디가 다를까요?" 원래 가락과 한 음만 바꾼 가락을 번갈아 들려주고 손가락으로 칸을 짚어 보게 한다. ‘전부 다르다’고 하는 학생에게 "처음 몇 음은 같지 않았나요? 칸마다 하나씩 견주어 볼까요?"라고 묻는다.',
      student: '같은 가락처럼 들리는 두 가락에서 어디가 달라졌는지 귀로 찾아봅시다.',
      demo: { tool: 'keyboard', options: { from: '도', to: '높은도', tempo: 84 }, sequence: [{ notes: ['솔', '솔', '미', '레', '도'] }, { notes: ['솔', '솔', '미', '레', '솔'] }] },
    },
    acts: [
      {
        title: '활동 1. 달라진 곳을 찾는 바른 방법 알기', minutes: 12, tool: 'mindmap',
        teacher: '"칸을 하나씩 짚으며 견주면 달라진 곳이 보여요." 카드를 읽고 두 가락을 손가락으로 번갈아 짚게 한다. 한 번만 듣고 ‘느낌으로’ 말하는 방법을 고르는 학생에게는 "느낌만으로는 몇째 음인지 알려 주기 어려워요"라고 짚는다.',
        task: '같은 점과 달라진 점을 나누고, 달라진 곳을 찾는 바른 방법을 골라요.',
        levels: cardsLv(),
        items: [
          { prompt: '원래 ‘솔 솔 미 레 도’와 바꾼 ‘솔 솔 미 레 솔’을 견준 말을 같은 점과 다른 점으로 나누어 보세요.', toolOptions: { mode: 'sort', topic: '두 가락 견주기', slots: ['같은 점', '다른 점'], cards: ['첫째부터 넷째 음은 같아요', '음의 수는 다섯 개로 같아요', '다섯째 음이 도에서 솔로 바뀌었어요', '마지막 음이 더 높아졌어요'] }, target: { sort: { '같은 점': ['첫째부터 넷째 음은 같아요', '음의 수는 다섯 개로 같아요'], '다른 점': ['다섯째 음이 도에서 솔로 바뀌었어요', '마지막 음이 더 높아졌어요'] } }, difficulty: 0.15,
            hints: ['두 가락의 음을 칸마다 나란히 놓고 하나씩 견주어 보세요.', '다른 점 칸에 두 가락에서 똑같은 것이 들어 있지 않은지 보세요.', '앞의 네 음과 음의 수는 같고, 다섯째 음이 바뀌어 마지막 음이 더 높아졌어요.'] },
          { prompt: '달라진 곳을 찾는 바른 방법을 모두 골라 보세요.', toolOptions: { mode: 'pick', topic: '달라진 곳 찾기', basket: '바른 방법', cards: ['두 가락을 번갈아 들어요', '칸을 하나씩 짚으며 견주어요', '한 번만 듣고 느낌으로 말해요', '바꾼 가락만 계속 들어요'] }, target: { pick: ['두 가락을 번갈아 들어요', '칸을 하나씩 짚으며 견주어요'] }, reveal: 'after-check', difficulty: 0.2,
            conclude: '원래와 바꾼 가락을 번갈아 들으며 칸을 하나씩 견주면 달라진 곳이 보여요.' },
          { prompt: '무엇이 달라졌는지 설명과 이어 보세요.', toolOptions: { mode: 'match', topic: '달라진 요소', slots: [{ id: 'p', label: '음이 바뀌었어요' }, { id: 'r', label: '길이가 바뀌었어요' }, { id: 't', label: '빠르기가 바뀌었어요' }], cards: ['한 칸의 소리 높이가 달라졌어요', '음은 같은데 한 소리가 더 길어졌어요', '음과 길이는 같고 전체가 더 빨라졌어요'] }, target: { match: { p: '한 칸의 소리 높이가 달라졌어요', r: '음은 같은데 한 소리가 더 길어졌어요', t: '음과 길이는 같고 전체가 더 빨라졌어요' } }, difficulty: 0.3 },
        ],
      },
      {
        title: '활동 2. 원래 가락과 바꾼 가락 들어 보고 따라 치기', minutes: 14, tool: 'keyboard',
        teacher: '"원래 가락을 따라 친 뒤 바꾼 가락도 따라 쳐 보세요. 몇째 음이 달라졌는지 알 수 있나요?" 2번은 맞힌 뒤에만 계이름이 보여 귀로 먼저 찾게 한다. 3번은 짝이 한 음만 바꾼 가락을 쳐 주고 달라진 칸을 손가락으로 짚는 활동이에요. 달라진 칸을 한 칸씩 어긋나게 짚는 학생에게는 처음부터 한 음씩 세게 한다.',
        task: '원래 가락과 바꾼 가락을 듣고 따라 친 뒤, 달라진 곳을 짚고 점검해요.',
        levels: mel(),
        items: [
          { prompt: '원래 가락이에요. 가락 듣기를 누르고 따라 쳐 보세요.', toolOptions: { melody: ['솔', '솔', '미', '레', '도'] }, target: { notes: ['솔', '솔', '미', '레', '도'] }, difficulty: 0.15 },
          { prompt: '바꾼 가락이에요. 듣고 따라 친 뒤 몇째 음이 달라졌는지 찾아보세요.', toolOptions: { melody: ['솔', '솔', '미', '레', '솔'] }, target: { notes: ['솔', '솔', '미', '레', '솔'] }, reveal: 'after-check', difficulty: 0.25,
            conclude: '다섯째 음이 도에서 솔로 바뀌었어요. 앞의 네 음은 그대로예요.' },
          { prompt: '짝이 한 음만 바꾼 가락을 쳐 주면 달라진 칸을 짚고 점검해요.', target: { selfCheck: ['두 가락을 번갈아 들어 보았어요', '달라진 칸을 손가락으로 짚었어요', '몇째 음이 어떻게 바뀌었는지 말했어요'], minNotes: 4 }, difficulty: 0.2 },
        ],
      },
    ],
    wrap: '"달라진 곳을 어떻게 찾았나요?" 두 학생이 번갈아 듣고 칸을 짚은 과정을 말하게 한다. 출구 2번에서 느낌으로 말하는 방법을 고른 학생에게는 칸을 짚는 방법으로 다시 찾아보게 한다.',
    exit: [
      { type: 'tool', tool: 'keyboard', options: { from: '도', to: '높은도', melody: ['솔', '미', '미', '레', '도'] }, prompt: '첫 음이 바뀐 가락을 듣고 건반으로 따라 쳐 보세요.', target: { notes: ['솔', '미', '미', '레', '도'] }, difficulty: 0.25 },
      { type: 'choice', prompt: '두 가락에서 달라진 곳을 가장 잘 찾는 방법은 무엇일까요?', options: ['번갈아 들으며 칸을 하나씩 견주어요', '느낌으로만 말해요', '한 가락만 계속 들어요'], answer: 0, difficulty: 0.2, explain: '칸을 하나씩 견주어야 몇째 음이 달라졌는지 정확히 알 수 있어요.' },
      { type: 'mood', prompt: '귀로 달라진 곳을 찾아보니 어땠나요?' },
    ],
    ws: {
      title: '달라진 곳 찾기',
      items: [
        { type: 'table', prompt: '원래 가락과 바꾼 가락을 칸마다 견주어 쓰세요.', columns: ['칸', '원래', '바꾼 것', '같음·다름'], cells: [['1', '솔', '', ''], ['2', '솔', '', ''], ['3', '미', '', ''], ['4', '레', '', ''], ['5', '도', '', '']] },
        { type: 'figure', prompt: '바꾼 가락의 마지막 음이 나는 건반에 ○ 하세요.', tool: 'keyboard', wide: true, options: { from: '도', to: '높은도', printNames: true }, figures: [{ caption: '○ 한 음: ____ / 몇째 음? ____째' }], answer: '솔 / 다섯째(바꾼 가락이 솔 솔 미 레 솔일 때)' },
        { type: 'choice', prompt: '달라진 곳을 찾는 바른 방법에 ○ 하세요.', options: ['칸마다 견주어요', '느낌으로만 말해요'], answer: '칸마다 견주어요' },
        { type: 'short', prompt: '짝이 바꾼 가락에서 달라진 곳을 찾은 방법을 쓰세요.' },
      ],
      easy: {
        note: '두 가락을 번갈아 듣고 칸마다 견주면 달라진 곳이 보여요.',
        items: [
          { type: 'choice', prompt: '두 가락을 견주려면 먼저 무엇을 할까요?', options: ['번갈아 들어요', '한 번만 들어요'], answer: '번갈아 들어요' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '‘솔 솔 미 레 도’의 마지막 음이 솔로 바뀌면 ___째 음이 바뀐 거예요.', answer: '다섯' },
          { type: 'choice', prompt: '앞의 음이 같으면 바뀐 곳은?', options: ['뒤쪽에 있을 수 있어요', '없어요'], answer: '뒤쪽에 있을 수 있어요' },
          { type: 'short', prompt: '달라진 곳을 한 줄로 쓰세요.' },
        ],
      },
    },
    diff: {
      easy: '맞게 나눈 카드에 초록 테두리가 보이고, 가락을 듣는 동안 건반이 빛나요.',
      base: '카드를 스스로 놓고 확인해요. 계이름을 켜고 끌 수 있어요.',
      challenge: '건반은 계이름 없이 귀로 따라 치고, 맞힌 뒤에야 달라진 곳이 보여요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 한 번 듣고 전부 달라졌다고 말한다 → 칸마다 번갈아 견주게 한다. ② 달라진 칸이 몇째인지 한 칸씩 어긋난다 → 손가락으로 첫 음부터 센다. ③ 바꾼 가락이 틀린 가락이라고 여긴다 → 바꾼 것은 새로운 선택이다. 소리는 누를 때만 난다.',
  }));

  // ───────────────────────── 15차시 (연습) ─────────────────────────
  lessons.push(lesson(15, S2, {
    title: '점과 막대 그림, 숫자로 적은 악보 읽고 무엇을 나타내는지 말하기',
    objective: '그림이나 숫자로 적은 악보를 읽고 각 기호가 소리의 무엇을 나타내는지 말하며, 오선지만 악보가 아님을 안다.',
    ill: 'a paper scroll showing the same tune as dots and bars, number cards and drawn pictures, with a child pointing at each symbol',
    sceneText: '소리를 적는 방법',
    intro: {
      teacher: '"옛날 사람들은 소리를 어떻게 적어 두었을까요? 오늘은 점과 막대, 숫자로 소리를 적어 볼 거예요." 칠판에 ‘● ━’을 그리고 학생에게 어떤 소리일 것 같은지 묻는다. ‘오선지에 그린 것만 악보’라고 하는 학생에게는 "약속을 정해서 읽을 수 있다면 점과 선도 악보가 될 수 있어요"라고 알려 준다.',
      student: '소리를 점과 막대나 숫자로 적는다면 어떻게 읽을 수 있을까요?',
    },
    acts: [
      {
        title: '활동 1. 기호와 뜻 짝 짓고 악보의 조건 찾기', minutes: 12, tool: 'mindmap',
        teacher: '"기호만 적고 약속을 모르면 읽을 수 없어요. 그림 악보에는 약속이 꼭 있어야 해요." 약속을 칠판에 적고 기호를 읽게 한다. 2번에서 위치를 길이로 읽는 학생에게 "막대를 길게 그리면 소리가 길어지고, 점을 위에 찍으면 높은 소리예요"라고 알려 준다.',
        task: '기호와 뜻을 이어 보고, 막대와 점이 나타내는 것을 나누고, 악보가 될 수 있는 것을 골라요.',
        levels: cardsLv(),
        items: [
          { prompt: '그림 악보의 기호와 뜻을 이어 보세요.', toolOptions: { mode: 'match', topic: '기호와 뜻', slots: [{ id: 'd', label: '● (점)' }, { id: 'b', label: '━ (긴 막대)' }, { id: 'u', label: '↑ (위로 가는 화살표)' }], cards: ['짧은 소리 한 번', '길게 이어지는 소리', '소리가 높아져요'] }, target: { match: { d: '짧은 소리 한 번', b: '길게 이어지는 소리', u: '소리가 높아져요' } }, difficulty: 0.15 },
          { prompt: '그림 악보의 모양이 높낮이를 나타내는지 길이를 나타내는지 나누어 보세요.', toolOptions: { mode: 'sort', topic: '그림이 나타내는 것', slots: ['높낮이를 나타내요', '길이를 나타내요'], cards: ['점을 종이 위쪽에 찍어요', '점을 종이 아래쪽에 찍어요', '막대를 길게 그려요', '막대를 짧게 그려요'] }, target: { sort: { '높낮이를 나타내요': ['점을 종이 위쪽에 찍어요', '점을 종이 아래쪽에 찍어요'], '길이를 나타내요': ['막대를 길게 그려요', '막대를 짧게 그려요'] } }, difficulty: 0.2,
            hints: ['점이 놓인 자리를 보는지, 막대의 길이를 보는지 생각해 보세요.', '위아래 자리를 말한 카드와 길고 짧음을 말한 카드를 따로 모아 보세요.', '위·아래에 찍은 점은 높낮이, 길고 짧은 막대는 소리의 길이예요.'] },
          { prompt: '소리를 적은 악보라고 할 수 있는 것만 골라 보세요.', toolOptions: { mode: 'pick', topic: '악보의 조건', basket: '악보가 될 수 있어요', cards: ['점과 막대로 그리고 약속을 적은 표', '계이름을 차례로 적은 줄', '오선지에 적은 음표', '약속 없이 아무렇게나 그은 낙서'] }, target: { pick: ['점과 막대로 그리고 약속을 적은 표', '계이름을 차례로 적은 줄', '오선지에 적은 음표'] }, reveal: 'after-check', difficulty: 0.3,
            predict: { q: '오선지에 그린 것만 악보일까요?', options: ['오선지만 악보예요', '약속이 있으면 다른 것도 악보예요', '잘 모르겠어요'], answer: 1 },
            conclude: '소리를 읽을 수 있는 약속이 있다면 점과 막대나 숫자도 악보가 될 수 있어요.' },
        ],
      },
      {
        title: '활동 2. 그림 악보와 숫자 악보를 읽어 치기', minutes: 14, tool: 'keyboard',
        teacher: '"● 하나는 한 박, ●● 는 반 박 둘, ━ 는 두 박으로 약속했어요. 약속대로 읽어 블록으로 놓아 봐요." 숫자 악보는 1=도, 3=미, 5=솔로 약속하고 읽어 치게 한다. 숫자를 건반 순서대로 세는 학생에게 "숫자는 계이름 약속표를 보고 읽어요"라고 알려 준다.',
        task: '약속에 따라 그림 악보와 숫자 악보를 읽고 블록과 건반으로 옮기고, 내 약속을 점검해요.',
        levels: rhy(4, 1),
        items: [
          { prompt: '그림 악보 ‘● ●● ━’예요(●=한 박, ●●=반 박 둘, ━=두 박). 읽어서 블록으로 놓아 보세요.', toolOptions: { pattern: ['q', 'e', 'e', 'h'], blocks: ['q', 'e', 'h', 'qr'] }, target: { rhythm: ['q', 'e', 'e', 'h'] }, difficulty: 0.2 },
          { prompt: '이번에는 ‘━ ● ●’이에요. 같은 약속으로 읽어 블록으로 놓아 보세요.', toolOptions: { pattern: ['h', 'q', 'q'], blocks: ['q', 'e', 'h', 'qr'] }, target: { rhythm: ['h', 'q', 'q'] }, difficulty: 0.25 },
          { prompt: '내가 정한 약속으로 한 마디를 그림 악보로 나타내고 점검해요.', target: { beats: true, selfCheck: ['점·막대·화살표 가운데 약속을 두 가지 이상 정했어요', '약속을 악보 옆에 적었어요', '짝이 내 약속을 보고 읽을 수 있었어요'] }, difficulty: 0.25 },
        ],
      },
    ],
    wrap: '"그림 악보가 악보가 되려면 꼭 필요한 것은 무엇인가요?" 두 학생이 ‘읽는 약속’이라고 말하는지 듣는다. 출구 2번에서 오선지만 악보라고 고른 학생에게는 오늘 읽은 점과 막대를 다시 읽어 보게 한다.',
    exit: [
      { type: 'tool', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 1, blocks: ['q', 'e', 'h', 'qr'], pattern: ['e', 'e', 'q', 'h'] }, prompt: '그림 악보 ‘●● ● ━’를 약속대로 읽어 블록으로 놓아 보세요.', target: { rhythm: ['e', 'e', 'q', 'h'] }, difficulty: 0.25 },
      { type: 'choice', prompt: '점과 막대로 그린 그림도 악보가 될 수 있는 까닭은 무엇일까요?', options: ['읽는 약속이 있기 때문이에요', '예쁘게 그렸기 때문이에요', '오선지에 그렸기 때문이에요'], answer: 0, difficulty: 0.2, explain: '읽는 약속이 있으면 어떤 소리인지 다시 읽을 수 있어서 악보가 될 수 있어요.' },
      { type: 'mood', prompt: '약속을 보고 악보를 읽어 보니 어땠나요?' },
    ],
    ws: {
      title: '소리를 적는 약속',
      items: [
        { type: 'table', prompt: '약속표를 완성하세요.', columns: ['기호', '뜻'], cells: [['●', ''], ['━', ''], ['↑', ''], ['1 3 5', '']] },
        { type: 'figure', prompt: '그림 악보 ‘● ● ━’를 블록으로 옮긴 것이에요. 소리가 가장 긴 블록에 ○ 하세요.', tool: 'keyboard', wide: true, options: { mode: 'rhythm', meter: 4, measures: 1 }, figures: [{ state: { rhythm: ['q', 'q', 'h'] }, caption: '○ 한 블록은 몇째? ____째' }], answer: '셋째(2분음표)' },
        { type: 'choice', prompt: '악보가 될 수 있는 것에 ○ 하세요.', options: ['약속이 있는 점과 막대 그림', '약속 없는 낙서'], answer: '약속이 있는 점과 막대 그림' },
        { type: 'short', prompt: '나만의 기호 하나를 만들고 그 뜻을 쓰세요.' },
      ],
      easy: {
        note: '그림 악보에는 읽는 약속이 있어야 해요. 점은 짧은 소리, 막대는 긴 소리를 나타내요.',
        items: [
          { type: 'choice', prompt: '긴 소리를 나타내는 기호는?', options: ['━', '●'], answer: '━' },
          { type: 'choice', prompt: '약속이 없으면 그림 악보를 읽을 수 있을까요?', options: ['읽기 어려워요', '잘 읽어요'], answer: '읽기 어려워요' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '숫자 악보에서 1은 ___를 뜻하도록 약속했어요.', answer: '도' },
          { type: 'short', prompt: '내가 정한 약속을 한 줄 쓰세요.' },
        ],
      },
    },
    diff: {
      easy: '맞게 이은 카드에 초록 테두리가 보이고, 마디마다 지금 몇 박인지 보여 줘요.',
      base: '카드와 블록을 스스로 놓고 확인해요.',
      challenge: '쉼표와 점2분음표가 더 있고, 박 수 알림 없이 마디를 채워요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 오선지에 그린 것만 악보라고 여긴다 → 약속이 있어 읽을 수 있으면 악보가 됨을 보여 준다. ② 막대 길이를 박 수와 연결하지 못한다 → 팔을 길게 뻗어 소리의 길이를 몸으로 느끼게 한다. ③ 숫자를 건반 위치로만 읽는다 → 약속표를 곁에 두고 읽게 한다. 소리는 누를 때만 난다.',
  }));

  // ───────────────────────── 16차시 (확장) ─────────────────────────
  lessons.push(lesson(16, S2, {
    title: '같은 가락을 계이름·숫자·막대 그림으로 읽고 어울리는 쓰임 찾기',
    objective: '같은 가락을 계이름, 숫자, 막대 그림으로 읽어 같은 가락임을 확인하고, 상황에 알맞은 적는 방법을 고를 수 있다.',
    ill: 'one small tune shown three ways as solfege syllable cards, number tiles and colored bars, all pointing to the same glowing musical note',
    sceneText: '같은 가락, 세 가지 악보',
    intro: {
      teacher: '"같은 가락을 계이름으로도, 숫자로도, 막대 그림으로도 적을 수 있어요. 어느 쪽이 더 읽기 쉬울까요?" 세 가지 악보를 칠판에 붙이고 학생이 좋아하는 쪽에 손을 들게 한다. ‘한 가지만 맞고 나머지는 틀렸다’고 하는 학생에게는 "약속이 맞으면 모두 같은 가락을 나타내요"라고 짚는다.',
      student: '같은 가락을 계이름·숫자·막대 그림으로 적으면 읽기에 어떤 차이가 있을까요?',
    },
    acts: [
      {
        title: '활동 1. 같은 가락 표현 찾고 쓰임 고르기', minutes: 13, tool: 'mindmap',
        teacher: '"도 미 솔 미 도는 숫자로 1 3 5 3 1이에요. 막대 그림은 높이로 높낮이를 보여 줘요." 세 가지를 소리 내 읽게 한다. 2번에서 계이름 악보는 높낮이를 한눈에 못 본다는 점을 짚고, 3번에서 문자로 전할 때 어떤 방법이 알맞은지 이유를 말하게 한다.',
        task: '같은 가락을 적은 표현을 모두 고르고, 상황에 알맞은 적는 방법에 이어요.',
        levels: cardsLv(),
        items: [
          { prompt: '‘도 미 솔 미 도’와 같은 가락을 적은 표현을 모두 골라 보세요.', toolOptions: { mode: 'pick', topic: '같은 가락', basket: '같은 가락이에요', cards: ['1 3 5 3 1', '막대가 낮음-가운데-높음-가운데-낮음 순서로 놓인 그림', '1 5 3 5 1', '막대가 높음-높음-낮음-낮음-낮음 순서로 놓인 그림'] }, target: { pick: ['1 3 5 3 1', '막대가 낮음-가운데-높음-가운데-낮음 순서로 놓인 그림'] }, difficulty: 0.2,
            hints: ['먼저 계이름을 숫자 약속(1=도, 3=미, 5=솔)으로 바꾸어 순서를 써 보세요.', '고른 숫자나 그림의 순서가 처음 계이름의 오르내림과 같은지 견주어 보세요.', '도 미 솔 미 도는 1 3 5 3 1이고, 막대는 낮은→가운데→높은→가운데→낮은 순서예요.'] },
          { prompt: '적는 방법마다 잘 보여 주는 것을 이어 보세요.', toolOptions: { mode: 'match', topic: '적는 방법의 장점', slots: [{ id: 'k', label: '계이름 악보' }, { id: 'n', label: '숫자 악보' }, { id: 'b', label: '막대 그림 악보' }], cards: ['어느 음인지 이름으로 바로 알아요', '글자판 없이도 짧게 적을 수 있어요', '높낮이가 한눈에 보여요'] }, target: { match: { k: '어느 음인지 이름으로 바로 알아요', n: '글자판 없이도 짧게 적을 수 있어요', b: '높낮이가 한눈에 보여요' } }, difficulty: 0.25 },
          { prompt: '친구에게 가락을 알리고 싶어요. 상황에 알맞은 적는 방법을 이어 보세요.', toolOptions: { mode: 'match', topic: '상황과 방법', slots: [{ id: 'm', label: '문자로 짧게 보내요' }, { id: 'h', label: '높아지고 낮아지는 모습을 보여 주고 싶어요' }, { id: 'c', label: '건반 이름으로 천천히 따라 치게 하고 싶어요' }], cards: ['숫자 악보', '막대 그림 악보', '계이름 악보'] }, target: { match: { m: '숫자 악보', h: '막대 그림 악보', c: '계이름 악보' } }, difficulty: 0.3 },
        ],
      },
      {
        title: '활동 2. 세 가지 악보로 같은 가락 치기', minutes: 13, tool: 'keyboard',
        teacher: '"숫자 악보 5 5 3 1은 솔 솔 미 도예요. 막대 그림은 높이를 따라 건반을 눌러 봐요." 약속표(1=도, 3=미, 5=솔)를 칠판에 적어 둔다. 숫자를 건반 위치로만 읽어 틀린 음을 누른 학생에게 약속표를 짚으며 다시 읽게 한다.',
        task: '숫자 악보와 막대 그림 악보를 읽어 같은 가락을 건반으로 치고, 나만의 악보 방법을 점검해요.',
        levels: mel(),
        items: [
          { prompt: '숫자 악보 ‘5 5 3 1’을 약속대로 읽어 건반으로 쳐 보세요(1=도, 3=미, 5=솔).', target: { notes: ['솔', '솔', '미', '도'] }, difficulty: 0.2 },
          { prompt: '막대 그림 악보예요. 낮음-높음-가운데-낮음 순서 막대를 읽어 도 높은도 미 도로 쳐 보세요.', target: { notes: ['도', '높은도', '미', '도'] }, difficulty: 0.25 },
          { prompt: '같은 가락을 두 가지 방법으로 적고 짝이 읽어 치게 한 뒤 점검해요.', target: { selfCheck: ['같은 가락을 두 가지 방법으로 적었어요', '짝이 두 가지 모두 읽어 쳤어요', '어느 방법이 더 읽기 쉬웠는지 말했어요'], minNotes: 4 }, difficulty: 0.25 },
        ],
      },
    ],
    wrap: '"어떤 상황에서 어떤 악보가 편했나요?" 두 학생이 상황과 까닭을 함께 말하게 한다. 출구 2번에서 한 가지만 맞다고 고른 학생에게는 두 악보를 읽어 같은 소리가 나는지 직접 쳐 보게 한다.',
    exit: [
      { type: 'tool', tool: 'keyboard', options: { from: '도', to: '높은도' }, prompt: '숫자 악보 ‘1 3 5’를 읽어 건반으로 쳐 보세요(1=도, 3=미, 5=솔).', target: { notes: ['도', '미', '솔'] }, difficulty: 0.2 },
      { type: 'choice', prompt: '같은 가락을 숫자와 막대 그림으로 적었어요. 두 악보는 어떨까요?', options: ['약속이 맞으면 같은 가락을 나타내요', '한쪽은 틀린 악보예요', '서로 다른 가락이에요'], answer: 0, difficulty: 0.2, explain: '적는 방법이 달라도 약속이 맞으면 같은 가락을 나타낼 수 있어요.' },
      { type: 'mood', prompt: '같은 가락을 여러 가지로 적어 보니 어땠나요?' },
    ],
    ws: {
      title: '세 가지 악보로 읽기',
      items: [
        { type: 'table', prompt: '같은 가락을 세 가지로 적어 보세요.', columns: ['계이름', '숫자(1=도)', '높낮이 화살표'], cells: [['도 미 솔 미 도', '', ''], ['솔 솔 미 도', '', '']] },
        { type: 'figure', prompt: '건반에서 ‘도 미 솔’을 눌러야 하는 건반에 ○ 하고 번호를 쓰세요.', tool: 'keyboard', wide: true, options: { from: '도', to: '높은도', printNames: true }, figures: [{ caption: '순서대로 ○ 한 건반: ____ → ____ → ____' }], answer: '도 → 미 → 솔' },
        { type: 'choice', prompt: '높낮이를 한눈에 보여 주기 좋은 악보에 ○ 하세요.', options: ['막대 그림 악보', '글자만 적은 악보'], answer: '막대 그림 악보' },
        { type: 'short', prompt: '내가 친구에게 가락을 알릴 때 쓰고 싶은 적는 방법과 까닭을 쓰세요.' },
      ],
      easy: {
        note: '숫자는 1=도, 3=미, 5=솔로 약속하고 읽어요. 막대 그림은 높을수록 높은 소리예요.',
        items: [
          { type: 'choice', prompt: '5는 어느 음일까요?', options: ['솔', '도'], answer: '솔' },
          { type: 'choice', prompt: '높낮이가 한눈에 보이는 악보는?', options: ['막대 그림 악보', '계이름만 쓴 악보'], answer: '막대 그림 악보' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '‘도 미 솔’을 숫자로 쓰면 ___ 3 5예요.', answer: '1' },
          { type: 'short', prompt: '내가 읽기 편한 악보를 한 줄로 쓰세요.' },
        ],
      },
    },
    diff: {
      easy: '맞는 카드에 초록 테두리가 보이고, 건반 이름이 보여요.',
      base: '카드를 스스로 고르고 확인해요. 계이름을 켜고 끌 수 있어요.',
      challenge: '건반은 계이름 없이 약속표만 보고 쳐요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 숫자를 건반 순서(1=첫째 건반)와 같다고 여긴다 → 약속표에서 3이 미임을 짚는다. ② 막대 그림에서 높낮이를 반대로 읽는다 → 위쪽이 높은 소리라고 몸으로 보인다. ③ 적는 방법 하나가 옳다고 우긴다 → 쓰임에 따라 편한 방법이 다름을 말한다. 소리는 누를 때만 난다.',
  }));

  // ───────────────────────── 17차시 (핵심) ─────────────────────────
  lessons.push(lesson(17, S2, {
    title: '내 악보를 친구에게 주고 내가 바꾼 대로 연주되는지 확인하기',
    objective: '내가 바꾸어 적은 악보를 친구에게 주어 친구가 연주한 소리가 내 생각과 같은지 견주고, 같은 점과 다른 점을 말할 수 있다.',
    ill: 'a child handing a paper score to a friend sitting at paper piano keys, with a thought bubble of the intended melody beside a bubble of the played melody',
    sceneText: '친구가 읽으면?',
    intro: {
      teacher: '"내가 바꿔 적은 악보를 친구에게 주고 말없이 쳐 보게 하면 내 생각과 같을까요?" 두 학생이 앞에서 해 보게 하고 같은 점과 다른 점을 학급이 말해 본다. ‘다르게 쳤으니 친구가 틀렸다’고 하는 학생에게는 "악보가 충분히 알려 주었는지 먼저 살펴볼까요?"라고 되묻는다.',
      student: '내 악보를 친구가 쳤을 때 내 생각과 같은 소리가 나올지 예상해 봅시다.',
    },
    acts: [
      {
        title: '활동 1. 악보에 꼭 적어야 할 것과 확인 방법 정하기', minutes: 12, tool: 'mindmap',
        teacher: '"친구가 내 악보를 읽을 때 꼭 필요한 정보는 무엇일까요?" 카드를 읽고 필요한 것과 필요 없는 것을 가르게 한다. ‘친구가 알아서 해석하면 된다’고 하는 학생에게는 "친구가 몰라서 못 치면 누구 잘못일까요?"라고 묻는다. 3번은 결과가 달랐을 때 어떻게 말할지 정하는 활동이에요.',
        task: '악보에 꼭 적어야 할 것을 나누고, 친구가 쳐 본 뒤 서로 이야기하는 순서를 정해요.',
        levels: cardsLv(),
        items: [
          { prompt: '악보에 꼭 적어야 할 것과 없어도 되는 것으로 나누어 보세요.', toolOptions: { mode: 'sort', topic: '악보에 적을 것', slots: ['꼭 적어요', '없어도 돼요'], cards: ['몇째 음을 어떻게 바꿨는지', '기호의 약속(점=짧은 소리 등)', '악보를 그린 색연필 이름', '악보에 붙인 스티커 모양'] }, target: { sort: { '꼭 적어요': ['몇째 음을 어떻게 바꿨는지', '기호의 약속(점=짧은 소리 등)'], '없어도 돼요': ['악보를 그린 색연필 이름', '악보에 붙인 스티커 모양'] } }, difficulty: 0.15,
            hints: ['친구가 이 정보 없이도 같은 소리를 칠 수 있는지 생각해 보세요.', '꼭 적는 칸에 소리와 상관없는 꾸밈이 들어갔는지 보세요.', '바꾼 곳과 기호의 약속은 소리를 읽는 데 꼭 필요하고, 색연필 이름과 스티커는 소리와 상관없어요.'] },
          { prompt: '친구가 내 악보를 치기 전과 친 뒤에 하면 좋은 순서대로 카드를 놓아 보세요.', toolOptions: { mode: 'order', topic: '악보 나누기', slots: 4, cards: [{ id: 'a', text: '악보를 말없이 친구에게 줘요', motif: 'flower' }, { id: 'b', text: '친구가 읽고 쳐요', motif: 'sun' }, { id: 'c', text: '내가 생각한 소리와 견주어요', motif: 'star' }, { id: 'd', text: '같은 점과 다른 점을 말해요', motif: 'leaf' }] }, target: { order: ['a', 'b', 'c', 'd'] }, difficulty: 0.2 },
          { prompt: '준호가 내 악보를 쳤는데 둘째 음이 내가 생각한 소리와 달랐어요. 알맞은 것을 골라 보세요.', toolOptions: { mode: 'pick', topic: '알맞은 말과 행동', basket: '알맞아요', cards: ['"왜 틀리게 쳤어?" 하고 말해요', '"둘째 음을 어떻게 읽었어?" 하고 물어요', '아무 말 하지 않고 지나가요'] }, target: { pick: ['"둘째 음을 어떻게 읽었어?" 하고 물어요'] }, difficulty: 0.25, hints: ['상황을 다시 읽고, 읽는 사람이나 짝의 마음이 어떨지 먼저 떠올려 보세요.', '고른 카드를 짝에게 말했다고 생각해 보세요. 짝이 속상해하거나 소리가 끊기지 않는지 살펴요.', '"둘째 음을 어떻게 읽었어?" 하고 물어요 — 어느 부분이 잘 전해지지 않았는지 찾을 수 있어요.'], conclude: '어느 부분이 잘 전해지지 않았는지 찾을 수 있어요.' },
        ],
      },
      {
        title: '활동 2. 친구의 악보를 읽어 치고 내 생각과 견주기', minutes: 14, tool: 'keyboard',
        teacher: '"짝이 준 악보를 말없이 읽어 쳐 보세요. 내 생각과 같은지는 악보를 쓴 사람이 말해 줘요." 숫자 악보와 약속표를 함께 주게 한다. 약속표를 보지 않고 쳐 틀린 학생에게 "악보 옆의 약속표를 먼저 찾아볼까요?"라고 권한다.',
        task: '짝의 숫자 악보를 읽어 치고, 쓴 사람의 생각과 같은지 점검해요.',
        levels: mel(),
        items: [
          { prompt: '짝의 숫자 악보 ‘3 3 5 1’이에요(1=도, 3=미, 5=솔). 읽어서 건반으로 쳐 보세요.', target: { notes: ['미', '미', '솔', '도'] }, difficulty: 0.2 },
          { prompt: '짝이 한 음을 바꾼 숫자 악보 ‘3 3 5 3’이에요. 읽어서 쳐 보세요.', target: { notes: ['미', '미', '솔', '미'] }, difficulty: 0.25 },
          { prompt: '내 악보를 짝이 친 뒤 내가 생각한 소리와 견주고 점검해요.', target: { selfCheck: ['짝에게 악보만 주고 말은 하지 않았어요', '짝이 친 소리와 내 생각이 같은 곳을 찾았어요', '다르게 들린 곳을 한 군데 짚었어요'], minNotes: 4 }, difficulty: 0.2 },
        ],
      },
    ],
    wrap: '"친구가 내 악보를 읽어 쳤을 때 같았던 곳과 달랐던 곳은 어디였나요?" 두 학생이 소리를 들은 대로 말하게 한다. 출구 2번에서 친구 탓을 고른 학생에게는 악보에 무엇이 더 필요했을지 함께 찾아보게 한다.',
    exit: [
      { type: 'tool', tool: 'keyboard', options: { from: '도', to: '높은도' }, prompt: '짝의 숫자 악보 ‘5 3 1 3’을 읽어 건반으로 쳐 보세요(1=도, 3=미, 5=솔).', target: { notes: ['솔', '미', '도', '미'] }, difficulty: 0.25 },
      { type: 'choice', prompt: '친구가 내 악보를 다르게 읽었어요. 가장 먼저 할 일은?', options: ['어떻게 읽었는지 물어요', '친구가 틀렸다고 말해요', '아무 말도 하지 않아요'], answer: 0, difficulty: 0.2, explain: '어떻게 읽었는지 물어야 악보에서 고칠 곳을 찾을 수 있어요.' },
      { type: 'mood', prompt: '내 악보를 친구가 쳐 주니 어땠나요?' },
    ],
    ws: {
      title: '내 악보 점검표',
      items: [
        { type: 'table', prompt: '내 악보를 친구가 읽은 결과를 기록하세요.', columns: ['칸', '내가 생각한 음', '친구가 친 음', '같음·다름'], cells: [['1', '', '', ''], ['2', '', '', ''], ['3', '', '', ''], ['4', '', '', '']] },
        { type: 'figure', prompt: '친구가 친 마지막 음이 나는 건반에 ○, 내가 생각한 마지막 음이 나는 건반에 △ 하세요.', tool: 'keyboard', wide: true, options: { from: '도', to: '높은도', printNames: true }, figures: [{ caption: '○ 와 △ 가 같은 건반인가요? ( 같다 · 다르다 )' }], answer: '학생마다 다름(같은 건반이면 같다)' },
        { type: 'choice', prompt: '악보에 꼭 적어야 하는 것에 ○ 하세요.', options: ['바꾼 곳과 기호의 약속', '스티커 모양'], answer: '바꾼 곳과 기호의 약속' },
        { type: 'short', prompt: '친구가 다르게 읽은 곳과 그때 내가 한 말을 쓰세요.' },
      ],
      easy: {
        note: '악보에는 바꾼 곳과 읽는 약속을 적어 두어야 친구가 같은 소리를 쳐요.',
        items: [
          { type: 'choice', prompt: '친구가 다르게 쳤을 때 할 말은?', options: ['어떻게 읽었어?', '왜 틀렸어?'], answer: '어떻게 읽었어?' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '악보 옆에는 기호의 ___을 적어요.', answer: '약속' },
          { type: 'choice', prompt: '친구가 칠 때 내가 해야 할 일은?', options: ['말없이 기다려요', '계속 설명해요'], answer: '말없이 기다려요' },
          { type: 'short', prompt: '내 악보에서 친구가 잘 읽은 곳을 쓰세요.' },
        ],
      },
    },
    diff: {
      easy: '맞는 카드에 초록 테두리가 보이고, 건반 이름이 보여요.',
      base: '카드를 스스로 놓고 확인해요. 계이름을 켜고 끌 수 있어요.',
      challenge: '건반은 계이름 없이 약속표만 보고 쳐요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 친구가 못 쳤다고 탓한다 → 악보가 충분히 알려 주었는지 먼저 살피게 한다. ② 친구가 칠 때 말로 설명해 버린다 → 악보만 주고 말은 하지 않는 약속을 정한다. ③ 약속표 없이 숫자만 적는다 → 약속표를 악보 옆에 꼭 적는다. 소리는 누를 때만 난다.',
  }));

  // ───────────────────────── 18차시 (연습) ─────────────────────────
  lessons.push(lesson(18, S2, {
    title: '잘 전해지지 않은 부분을 찾아 표시 방법을 고쳐 다시 적기',
    objective: '친구가 다르게 읽은 부분을 찾아 까닭을 짐작하고, 표시 방법을 고쳐 다시 적을 수 있다.',
    ill: 'a child erasing a blurry symbol on a paper score and drawing a clearer one with a bright crayon while a friend points at the old symbol',
    sceneText: '다시 고쳐 적어요',
    intro: {
      teacher: '"지난 시간에 친구가 내 악보를 다르게 읽은 곳이 있었지요? 오늘은 그 곳이 왜 그렇게 읽혔는지 찾고 고쳐 적어 봐요." 친구가 다르게 읽은 악보 한 장을 칠판에 붙이고 학급이 이유를 말하게 한다. ‘친구가 대충 읽었다’고 하는 학생에게는 "기호가 서로 닮았거나 약속이 없었던 건 아닐까요?"라고 되묻는다.',
      student: '친구가 내 악보를 다르게 읽은 까닭을 찾아 고쳐 적어 봅시다.',
    },
    acts: [
      {
        title: '활동 1. 헷갈린 까닭 찾아 고치는 방법 이어 보기', minutes: 12, tool: 'mindmap',
        teacher: '"헷갈린 까닭에 따라 고치는 방법이 달라요." 까닭 카드를 읽고 고치는 방법과 이어 보게 한다. 3번에서 기호를 더 크게만 그려도 되는지 학생 의견을 듣고 ‘약속을 적었는지’를 먼저 확인하게 한다.',
        task: '헷갈린 까닭과 고치는 방법을 이어 보고, 고친 악보가 바른지 골라요.',
        levels: cardsLv(),
        items: [
          { prompt: '헷갈린 까닭과 고치는 방법을 이어 보세요.', toolOptions: { mode: 'match', topic: '까닭과 고치기', slots: [{ id: 'a', label: '점과 막대의 길이가 비슷해서 헷갈렸어요' }, { id: 'b', label: '약속을 적지 않아서 읽을 수 없었어요' }, { id: 'c', label: '높은 음과 낮은 음을 거꾸로 읽었어요' }], cards: ['막대를 더 길게, 점을 더 작게 그려요', '악보 옆에 약속표를 적어요', '위쪽이 높은 소리라고 화살표를 그려요'] }, target: { match: { a: '막대를 더 길게, 점을 더 작게 그려요', b: '악보 옆에 약속표를 적어요', c: '위쪽이 높은 소리라고 화살표를 그려요' } }, difficulty: 0.15,
            hints: ['헷갈린 까닭을 먼저 읽고, 그 까닭을 없애 주는 방법이 무엇일지 생각해 보세요.', '이은 방법이 정말 그 까닭을 없애 주는지 보세요. 약속이 없어서 헷갈렸다면 약속이 필요해요.', '길이가 비슷하면 길이 차이를 크게, 약속이 없으면 약속표를, 거꾸로 읽으면 방향 화살표를 적어요.'] },
          { prompt: '고쳐 적은 악보에 알맞은 방법만 골라 보세요.', toolOptions: { mode: 'pick', topic: '바르게 고치기', basket: '알맞게 고쳤어요', cards: ['약속표를 악보 옆에 적었어요', '바꾼 곳에 ○ 표시를 했어요', '악보를 색칠만 예쁘게 했어요', '헷갈린 곳은 지우고 비워 뒀어요'] }, target: { pick: ['약속표를 악보 옆에 적었어요', '바꾼 곳에 ○ 표시를 했어요'] }, reveal: 'after-check', difficulty: 0.25,
            conclude: '약속과 바꾼 곳을 분명히 적으면 다른 사람도 같은 소리로 읽을 수 있어요.' },
          { prompt: '서아가 "여기 점이 막대처럼 보여서 헷갈렸어"라고 말해 주었어요. 알맞은 것을 골라 보세요.', toolOptions: { mode: 'pick', topic: '알맞은 말과 행동', basket: '알맞아요', cards: ['"나는 그렇게 안 그렸어" 하고 화를 내요', '"고마워, 점을 더 작게 다시 그려 볼게" 하고 말해요', '못 들은 척해요'] }, target: { pick: ['"고마워, 점을 더 작게 다시 그려 볼게" 하고 말해요'] }, difficulty: 0.25, hints: ['상황을 다시 읽고, 읽는 사람이나 짝의 마음이 어떨지 먼저 떠올려 보세요.', '고른 카드를 짝에게 말했다고 생각해 보세요. 짝이 속상해하거나 소리가 끊기지 않는지 살펴요.', '"고마워, 점을 더 작게 다시 그려 볼게" 하고 말해요 — 더 읽기 쉬운 악보를 함께 만들어요.'], conclude: '더 읽기 쉬운 악보를 함께 만들어요.' },
        ],
      },
      {
        title: '활동 2. 고치기 전과 후 악보를 읽어 치고 견주기', minutes: 14, tool: 'keyboard',
        teacher: '"고치기 전 악보와 고친 악보를 같은 사람이 읽어 쳐 봐요. 두 번째가 내 생각과 더 가까워졌나요?" 같은 가락을 두 가지 악보로 읽게 한다. 고친 뒤에도 달라졌다고 하는 학생에게는 어디가 아직 헷갈리는지 칸을 짚게 한다.',
        task: '고치기 전과 후의 악보를 읽어 치고, 내 악보를 고쳤을 때 달라진 점을 점검해요.',
        levels: rhy(4, 1),
        items: [
          { prompt: '고치기 전 악보에서 막대가 모두 비슷해 보여요. 선생님이 들려주는 리듬을 듣고 블록으로 놓아 보세요.', toolOptions: { pattern: ['q', 'q', 'q', 'q'], blocks: ['q', 'e', 'h', 'qr'] }, target: { rhythm: ['q', 'q', 'q', 'q'] }, difficulty: 0.15 },
          { prompt: '막대 길이를 고쳐 그린 악보예요. 짧은 막대 둘, 긴 막대 하나를 읽어 블록으로 놓아 보세요.', toolOptions: { pattern: ['q', 'q', 'h'], blocks: ['q', 'e', 'h', 'qr'] }, target: { rhythm: ['q', 'q', 'h'] }, difficulty: 0.2 },
          { prompt: '고친 내 악보를 짝이 읽어 치게 한 뒤 점검해요.', target: { beats: true, selfCheck: ['헷갈린 까닭을 한 가지 찾았어요', '표시 방법을 한 군데 고쳤어요', '짝이 고친 악보는 내 생각대로 읽었어요'] }, difficulty: 0.25 },
        ],
      },
    ],
    wrap: '"악보에서 헷갈린 곳을 어떻게 고쳤나요?" 두 학생이 까닭과 고친 방법을 짝지어 말하게 한다. 출구 2번에서 색칠만 예쁘게 하면 된다고 고른 학생에게는 소리가 전해지는지를 기준으로 다시 고르게 한다.',
    exit: [
      { type: 'tool', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 1, blocks: ['q', 'e', 'h', 'qr'], pattern: ['h', 'e', 'e', 'q'] }, prompt: '고쳐 그린 악보 ‘━ ●● ●’를 읽어 블록으로 놓아 보세요(●=한 박, ●●=반 박 둘, ━=두 박).', target: { rhythm: ['h', 'e', 'e', 'q'] }, difficulty: 0.25 },
      { type: 'choice', prompt: '친구가 악보를 다르게 읽었어요. 가장 알맞은 고치기는 무엇일까요?', options: ['헷갈린 까닭을 찾아 그 부분의 표시를 분명히 고쳐요', '색을 더 예쁘게 칠해요', '악보를 지우고 새로 만들지 않아요'], answer: 0, difficulty: 0.2, explain: '헷갈린 까닭을 찾아 표시를 분명히 고쳐야 다른 사람도 같은 소리로 읽을 수 있어요.' },
      { type: 'mood', prompt: '악보를 고쳐 보니 어땠나요?' },
    ],
    ws: {
      title: '악보 고치기 기록',
      items: [
        { type: 'table', prompt: '헷갈린 곳과 고친 방법을 쓰세요.', columns: ['헷갈린 곳', '헷갈린 까닭', '고친 방법'], rows: 3 },
        { type: 'figure', prompt: '이 리듬 악보에서 소리의 길이를 읽기 어려운 블록 하나에 ○ 하고 고칠 방법을 쓰세요.', tool: 'keyboard', wide: true, options: { mode: 'rhythm', meter: 4, measures: 1 }, figures: [{ state: { rhythm: ['q', 'e', 'e', 'h'] }, caption: '고칠 방법: ________' }], answer: '학생마다 다름(길이 차이를 더 분명히 그린다 등)' },
        { type: 'choice', prompt: '약속이 없어 헷갈렸을 때 고치는 방법에 ○ 하세요.', options: ['약속표를 적어요', '색을 칠해요'], answer: '약속표를 적어요' },
        { type: 'short', prompt: '내 악보에서 고친 곳과 고친 뒤 달라진 점을 쓰세요.' },
      ],
      easy: {
        note: '헷갈린 까닭을 찾고, 그 까닭에 맞게 표시를 분명히 고쳐요.',
        items: [
          { type: 'choice', prompt: '막대 길이가 비슷해서 헷갈렸어요. 고치는 방법은?', options: ['길이 차이를 크게 해요', '색만 바꿔요'], answer: '길이 차이를 크게 해요' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '약속을 안 적어서 헷갈렸다면 ___표를 적어요.', answer: '약속' },
          { type: 'choice', prompt: '친구가 알려 준 헷갈린 곳은 어떻게 할까요?', options: ['고치는 단서로 써요', '못 들은 척해요'], answer: '고치는 단서로 써요' },
          { type: 'short', prompt: '고치고 싶은 곳을 한 줄 쓰세요.' },
        ],
      },
    },
    diff: {
      easy: '맞게 이은 카드에 초록 테두리가 보이고, 마디마다 지금 몇 박인지 보여 줘요.',
      base: '카드와 블록을 스스로 놓고 확인해요.',
      challenge: '쉼표와 점2분음표가 더 있고, 박 수 알림 없이 마디를 채워요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 친구가 읽은 대로 받아들이지 못하고 화를 낸다 → 읽는 사람 눈에 어떻게 보였는지가 단서임을 말해 준다. ② 헷갈린 까닭을 찾지 않고 처음부터 다시 쓴다 → 고칠 곳을 한 군데로 좁힌다. ③ 약속표를 고치는 것을 잊는다 → 고친 뒤 약속표도 다시 읽어 본다. 소리는 누를 때만 난다.',
  }));

  // ───────────────────────── 19차시 (마무리) ─────────────────────────
  lessons.push(lesson(19, S2, {
    title: '단원에서 만든 소리와 악보를 묶어 연주하고 스스로 돌아보기',
    objective: '단원에서 즉흥으로 낸 소리와 바꾸어 적은 악보를 묶어 연주하고, 배운 것과 더 해 보고 싶은 것을 스스로 정리할 수 있다.',
    ill: 'a stage with a paper curtain where a child plays a small keyboard while holding a score, with glowing notes and a gold star floating above',
    sceneText: '창작 마당',
    intro: {
      teacher: '"이 단원에서 우리는 소리를 즉흥으로 만들고, 아는 가락을 바꾸고, 악보로 적었어요. 가장 기억에 남는 한 가지를 손가락으로 세어 나타내 볼까요?" 즉흥 표현과 바꾸어 적기 두 갈래로 칠판에 나누어 적는다. ‘즉흥과 악보는 서로 상관없다’고 하는 학생에게는 "즉흥으로 낸 소리를 악보로 적어 두면 어떻게 될까요?"라고 되묻는다.',
      student: '이 단원에서 한 일 가운데 가장 기억에 남는 것은 무엇인가요?',
    },
    acts: [
      {
        title: '활동 1. 배운 것 묶어 정리하기', minutes: 12, tool: 'mindmap',
        teacher: '"단원에서 한 일을 즉흥으로 소리 내기와 바꾸고 적기로 나누어 봐요. 두 갈래는 서로 이어져 있어요." 카드를 읽고 나누게 한다. 출구의 돌아보기에는 정답이 없고 개인 평가에 쓰지 않는다고 먼저 말해 준다. 3번에서 활동과 알게 된 것을 거꾸로 잇는 학생에게는 그 활동에서 실제로 한 일을 말하게 한다.',
        task: '이 단원에서 한 일을 두 갈래로 나누고, 활동마다 알게 된 것을 이어요.',
        levels: cardsLv(),
        items: [
          { prompt: '이 단원에서 한 일을 두 갈래로 나누어 보세요.', toolOptions: { mode: 'sort', topic: '단원에서 한 일', slots: ['즉흥으로 소리 내기', '바꾸고 악보로 적기'], cards: ['빗방울·천둥 장면을 소리로 바꾸기', '친구 소리에 내 소리 이어 붙이기', '가락의 음 하나를 바꾸어 치기', '약속표를 적어 악보 고치기'] }, target: { sort: { '즉흥으로 소리 내기': ['빗방울·천둥 장면을 소리로 바꾸기', '친구 소리에 내 소리 이어 붙이기'], '바꾸고 악보로 적기': ['가락의 음 하나를 바꾸어 치기', '약속표를 적어 악보 고치기'] } }, difficulty: 0.15 },
          { prompt: '두 갈래가 어떻게 이어지는지 알맞은 것만 골라 보세요.', toolOptions: { mode: 'pick', topic: '이어지는 점', basket: '맞아요', cards: ['즉흥으로 낸 소리를 약속 기호로 적어 둘 수 있어요', '악보로 적으면 친구도 같은 소리를 칠 수 있어요', '즉흥은 적어 두면 안 돼요', '악보와 즉흥은 아무 상관이 없어요'] }, target: { pick: ['즉흥으로 낸 소리를 약속 기호로 적어 둘 수 있어요', '악보로 적으면 친구도 같은 소리를 칠 수 있어요'] }, reveal: 'after-check', difficulty: 0.25,
            conclude: '즉흥으로 낸 소리도 약속 기호로 적어 두면 다시 연주하고 친구와 나눌 수 있어요.' },
          { prompt: '단원에서 한 활동과 그 활동에서 알게 된 것을 이어 보세요.', toolOptions: { mode: 'match', topic: '알게 된 것', slots: [{ id: 'a', label: '장면을 소리로 바꾸기' }, { id: 'b', label: '가락 일부 바꾸기' }, { id: 'c', label: '악보 고쳐 적기' }], cards: ['미리 정하지 않아도 장면에 맞게 낼 수 있어요', '바꾼 곳을 적어 두면 다시 칠 수 있어요', '읽는 사람이 헷갈린 곳이 고칠 곳이에요'] }, target: { match: { a: '미리 정하지 않아도 장면에 맞게 낼 수 있어요', b: '바꾼 곳을 적어 두면 다시 칠 수 있어요', c: '읽는 사람이 헷갈린 곳이 고칠 곳이에요' } }, difficulty: 0.2 },
        ],
      },
      {
        title: '활동 2. 내 소리와 악보를 묶어 연주하기', minutes: 14, tool: 'keyboard',
        teacher: '"이 단원에서 만든 소리 가운데 하나를 골라 악보로 적고 연주해 봐요." 짝에게 악보만 주고 읽어 치게 한 뒤 내 생각과 견주게 한다. 연주를 부끄러워하는 학생에게 "서툴러도 괜찮아요, 오늘 목표는 약속대로 적고 읽는 것이에요"라고 말한다.',
        task: '단원에서 배운 것을 모아 가락을 따라 치고, 내가 지은 가락과 악보를 짝과 나누고 점검해요.',
        levels: mel(),
        items: [
          { prompt: '이 단원에서 바꾼 가락이에요. 가락 듣기를 누르고 따라 쳐 보세요.', toolOptions: { melody: ['도', '미', '솔', '라', '솔'] }, target: { notes: ['도', '미', '솔', '라', '솔'] }, difficulty: 0.15 },
          { prompt: '도로 시작해 도로 끝나는 다섯 음 가락을 지어 쳐 보세요.', target: { compose: { length: 5, startOn: '도', endOn: '도' } }, difficulty: 0.2 },
          { prompt: '지은 가락을 약속 기호로 적어 짝과 나누고 단원 전체를 점검해요.', target: { selfCheck: ['내가 지은 가락을 약속 기호로 적었어요', '짝이 내 악보를 읽어 쳤어요', '즉흥으로 낸 소리와 바꾸어 적은 일 가운데 가장 좋았던 것을 말했어요'], minNotes: 5 }, difficulty: 0.2 },
        ],
      },
    ],
    wrap: '"이 단원에서 가장 자랑스러운 일은 무엇인가요? 앞으로 더 해 보고 싶은 것은 무엇인가요?" 두 학생에게 한 문장씩 말하게 한다. 돌아보기에서 모든 칸이 낮은 학생에게는 가장 잘한 일 한 가지를 찾아 말해 주어 다음 단원으로 이어 간다.',
    exit: [
      { type: 'tool', tool: 'keyboard', options: { from: '도', to: '높은도' }, prompt: '숫자 악보 ‘1 5 3 1’을 읽어 건반으로 쳐 보세요(1=도, 3=미, 5=솔).', target: { notes: ['도', '솔', '미', '도'] }, difficulty: 0.25 },
      { type: 'choice', prompt: '즉흥으로 낸 소리를 다시 연주하려면 어떻게 하면 좋을까요?', options: ['약속 기호로 적어 두어요', '마음속으로만 기억해요', '다시는 하지 않아요'], answer: 0, difficulty: 0.2, explain: '약속 기호로 적어 두면 나도 친구도 같은 소리를 다시 연주할 수 있어요.' },
      { type: 'mood', prompt: '단원을 마치며 내 창작 활동을 돌아보니 어땠나요?' },
    ],
    ws: {
      title: '창작 단원 돌아보기',
      items: [
        { type: 'table', prompt: '이 단원에서 배운 것을 정리하세요.', columns: ['배운 것', '내가 한 일'], cells: [['즉흥으로 소리 내기', ''], ['가락 일부 바꾸기', ''], ['악보로 적고 고치기', '']] },
        { type: 'figure', prompt: '내가 지은 도로 시작하는 가락의 첫 음과 마지막 음이 나는 건반에 ○ 하세요.', tool: 'keyboard', wide: true, options: { from: '도', to: '높은도', printNames: true }, figures: [{ caption: '첫 음 ____ , 마지막 음 ____' }], answer: '학생마다 다름(첫 음은 도)' },
        { type: 'choice', prompt: '이 단원에서 가장 도움이 되었던 활동에 ○ 하세요.', options: ['즉흥으로 소리 내기', '가락 일부 바꾸기', '악보로 적고 고치기'], answer: '학생마다 다름' },
        { type: 'short', prompt: '이 단원에서 새로 알게 된 점과 더 해 보고 싶은 것을 쓰세요.' },
      ],
      easy: {
        note: '즉흥으로 소리를 내고, 아는 가락을 바꾸고, 약속 기호로 적어 친구와 나누었어요.',
        items: [
          { type: 'choice', prompt: '약속 기호로 적어 두는 까닭은?', options: ['친구도 같은 소리를 칠 수 있어요', '글씨 연습을 해요'], answer: '친구도 같은 소리를 칠 수 있어요' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '미리 정하지 않고 바로 내는 소리를 ___ 표현이라고 해요.', answer: '즉흥' },
          { type: 'choice', prompt: '가락 일부를 바꿀 때 바꾼 곳은 어떻게 할까요?', options: ['적어 두어요', '잊어버려요'], answer: '적어 두어요' },
          { type: 'short', prompt: '오늘 가장 마음에 든 일을 한 줄 쓰세요.' },
        ],
      },
    },
    diff: {
      easy: '맞게 나눈 카드에 초록 테두리가 보이고, 가락을 듣는 동안 건반이 빛나요.',
      base: '카드를 스스로 놓고 확인해요. 계이름을 켜고 끌 수 있어요.',
      challenge: '건반은 계이름 없이 쓰고, 돌아보기에서 잘 된 일의 근거를 한 가지 더 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 즉흥과 악보를 별개로 여긴다 → 즉흥으로 낸 소리를 약속 기호로 적어 보게 한다. ② 돌아보기를 높게만 고른다 → 구체적으로 잘 된 일을 한 가지 말하게 한다. ③ 연주를 부끄러워한다 → 서툴러도 약속대로 적고 읽는 것이 목표임을 말해 준다. 돌아보기는 정답이 없으며 개인 평가에 쓰지 않고 수업 계획에만 쓴다. 학생 개인정보는 활동지에 쓰지 않는다.',
  }));


  PaperLessons.registerUnit({
    id: 'g3-mus-2-03', schema: 'edu-unit.v1', catalogUnit: U,
    grade: 3, subject: '음악', unitTitle: '3. 창작',
    flow: "처음 네 차시는 장면을 보고 곧바로 소리로 바꾸는 즉흥 표현을 익힙니다: 빗방울·천둥 장면을 소리로 내고(1차시), 짝의 소리 끝에 내 소리를 이어 붙이며(2차시), 낱말 카드 장면에 맞는 세기와 리듬을 정하고(3차시), 같은 소리를 빠르기·세기만 바꾸어 다른 느낌을 냅니다(4차시). 5~7차시는 아는 가락의 한 부분(음·리듬·낱말)을 바꾸고 바꾼 곳을 적어 두는 연습입니다. 8~10차시는 교실 물체 소리를 높낮이와 길이로 나누고 같은 물체에서 다른 소리를 찾으며, 11~13차시에서 마음에 남은 소리의 까닭을 말하고 친구 표현에서 새로운 점을 찾아 다음 표현에 써 봅니다. 14~16차시는 원래 가락과 바꾼 가락에서 달라진 곳을 듣고 짚으며 점·막대·숫자 같은 여러 악보를 읽고, 17~19차시는 내 악보를 친구에게 주어 읽히고 헷갈린 곳을 고쳐 적은 뒤 단원을 묶어 스스로 돌아봅니다.",
    refs: {},
    lessons,
  });
})();
