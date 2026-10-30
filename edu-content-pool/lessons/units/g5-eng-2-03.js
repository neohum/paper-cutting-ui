/* 5학년 영어 2학기 3단원. 말하기 — 소리(강세·억양, 1~7차시) → 사람·순서 말하기(친구 소개·행동 순서, 8~13차시)
 * → 발표(리듬 있는 발표, 14~16차시) → 보고 말하고 쓰기(실물 관찰·그림 정보·동작 연결·사물 묘사, 17~28차시)
 * → 설명하기(비교·길 안내·방법 설명문, 29~37차시).
 * 예문·대화·발표문·안내문은 모두 이 단원을 위해 새로 지은 것이다(교과서 지문·노래 가사를 옮기지 않았다).
 * 표기 약속: 대문자 = 힘주어(세게) 말하는 낱말, ● = 힘준 낱말, ○ = 가볍게 붙이는 낱말, ↗ = 끝을 올림, ↘ = 끝을 내림, ' / ' = 쉬는 자리.
 * ↗↘ 억양은 초등 수준의 대표 경향(예/아니요 질문은 대개 올림, 무엇·어디 질문과 알리는 말은 대개 내림)으로 가르친다.
 */
(function () {
  const U = { grade: 5, subject: '영어', unitTitle: '3. 말하기' };
  const CAT = 'g5-영어-2학기-3';
  const FORMATS = ['chromebook', 'projector', 'print'];
  const PROMPT = (what) => `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`;
  const lesson = (n, std, body) => Object.assign({ id: `g5-eng-2-03-${String(n).padStart(2, '0')}`, schema: 'edu-lesson.v1', catalog: { unit: CAT, lesson: n } }, U, { standards: [std], minutes: 40, formats: FORMATS }, body);
  // 장면: 위 글(영어)·아래 글(한국어 표기 약속)과 몇 개의 모티프
  const SCENE = (top, bottom, extra) => ({ viewBox: [480, 270], layers: [
    { motif: 'sun', x: 412, y: 54, s: 0.8 }, { motif: 'cloud', x: 108, y: 50 }, { motif: 'hills', y: 208 },
    ...(extra || []),
    { motif: 'text', x: 240, y: 122, text: top, size: 24 },
    { motif: 'text', x: 240, y: 160, text: bottom, size: 18 },
  ] });
  // 단계 옵션: 쉬움 = 맞는 칸 초록 테두리·틀리면 까닭 말하고 되돌림
  const LV = (o) => ({ easy: Object.assign({ live: true, instant: true }, o || {}), base: Object.assign({}, o || {}), challenge: Object.assign({}, o || {}) });
  const PICK = (basket) => ({ mode: 'pick', basket, shuffle: false });
  // 억양 칸
  const TONE = [{ id: 'up', label: '↗ 끝을 올려요' }, { id: 'down', label: '↘ 끝을 내려요' }];
  // 스스로 돌아보기(정직한 자기 평가 — 어느 칸이든 맞음)
  const SELF = (situation) => ({ mode: 'scale', situation, feeling: '뿌듯함', steps: 3, scaleLabels: { 1: '아직 어려워요', 2: '조금 할 수 있어요', 3: '자신 있게 해요' } });

  const L = [];

  // ───────────── 1차시 (intro) 강세 ─────────────
  L.push(lesson(1, '[6영02-01]', {
    title: '자기소개 문장에서 힘줄 낱말 골라 말하기',
    objective: '자기소개 문장에서 뜻을 담은 낱말을 골라 그 낱말만 길고 또렷하게 말하고, 짝이 힘준 낱말을 알아맞힐 수 있다.',
    illustration: {
      prompt: PROMPT('two children facing each other with speech bubbles where a few words are large and bold and the rest are small'),
      scene: SCENE('I PLAY SOCCER.', '● 힘주고 ○ 가볍게', [{ motif: 'tree', x: 70, y: 214 }, { motif: 'house', x: 400, y: 218, color: 'sky' }]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"이번 단원은 영어로 말하기예요. 먼저 선생님 소개를 두 번 들어 봐요." 한 번은 My name is Kim Jisu. I like hiking. 을 모든 낱말을 똑같이 크게, 한 번은 name·Jisu·like·hiking만 길고 또렷하게 말한다. "어느 쪽이 영어답게 들렸나요? 둘 다 크게 말했는데 무엇이 달랐나요?" 크게 말한 쪽이 강세라고 답하는 학생에게 "소리 크기가 아니라 힘준 낱말과 가볍게 넘긴 낱말의 차이예요."라고 짚는다.',
        student: '선생님 소개를 두 번 듣고, 어느 쪽이 영어답게 들렸는지 말해 봐요.',
        demo: { tool: 'wordcards', options: { mode: 'pick', basket: '힘줄 낱말', shuffle: false, cards: ['I', 'like', 'hiking.'] }, sequence: [{ at: {} }, { at: { like: 0, 'hiking.': 0 } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 자기소개 문장의 힘줄 낱말 고르기', minutes: 13, tool: 'wordcards',
            teacher: '"이 낱말을 빼면 친구가 나에 대해 알 수 있을까요?" 낱말을 하나씩 손으로 가리고 읽어 보게 한다. my·is·a·in 같은 짧은 낱말까지 고르는 학생에게 "그 낱말을 빼도 뜻이 통하나요?"라고 되묻는다. 고른 뒤에는 힘줄 낱말에서만 책상을 톡 치며 소리 내어 말하게 한다.',
            task: '자기소개 문장에서 뜻을 꼭 담은 낱말만 바구니에 넣어요. 고른 낱말에서 책상을 톡 치며 소리 내어 말해요.',
            levels: LV(PICK('힘줄 낱말')),
            items: [
              { prompt: 'I play soccer after school. 힘주어 말할 낱말만 골라 보세요.',
                toolOptions: { cards: [{ id: 'I', text: 'I', why: 'I는 짧게 붙여 말하는 낱말이에요.' }, 'play', 'soccer', { id: 'after', text: 'after', why: 'after는 앞뒤를 잇는 낱말이라 가볍게 말해요.' }, 'school.'] },
                target: { pick: ['play', 'soccer', 'school.'] }, difficulty: 0.15,
                hints: ['낱말을 하나씩 가리고 읽어 보세요. 가리면 무엇을 하는지, 언제인지 알 수 없게 되는 낱말이 힘줄 낱말이에요.'] },
              { prompt: 'My name is Mina. 힘주어 말할 낱말만 골라 보세요.',
                toolOptions: { cards: [{ id: 'My', text: 'My', why: 'my는 누구의 것인지 알리는 짧은 낱말이라 가볍게 말해요.' }, 'name', { id: 'is', text: 'is', why: 'is는 짧게 붙여 말해요.' }, 'Mina.'] },
                target: { pick: ['name', 'Mina.'] }, difficulty: 0.1,
                hints: ['이름을 알려 주는 문장이에요. 듣는 친구가 꼭 들어야 하는 낱말이 무엇인지 생각해 보세요.'] },
              { prompt: 'I live in a big house. 힘주어 말할 낱말만 골라 보세요.',
                toolOptions: { cards: ['I', 'live', { id: 'in', text: 'in', why: 'in은 짧게 붙여 말해요.' }, { id: 'a', text: 'a', why: 'a는 아주 짧게 붙여 말해요.' }, 'big', 'house.'] },
                target: { pick: ['live', 'big', 'house.'] }, difficulty: 0.2,
                hints: ['무엇을 하는지, 어떤 모습인지, 무엇인지 알려 주는 낱말을 찾아보세요.'],
                levels: { challenge: { prompt: 'I live in a big house near the river. 힘주어 말할 낱말만 골라 보세요.',
                  toolOptions: { cards: ['I', 'live', 'in', 'a', 'big', 'house', { id: 'near', text: 'near', why: 'near는 자리를 잇는 낱말이라 가볍게 말할 때가 많아요.' }, 'the', 'river.'] }, target: { pick: ['live', 'big', 'house', 'river.'] } } } },
              { prompt: 'I can swim very fast. 힘주어 말할 낱말만 골라 보세요.',
                toolOptions: { cards: ['I', { id: 'can', text: 'can', why: '할 수 있다는 can은 보통 짧게 "큰"처럼 붙여 말해요.' }, 'swim', 'very', 'fast.'] },
                target: { pick: ['swim', 'very', 'fast.'] }, difficulty: 0.3,
                hints: ['무엇을 하는지와 얼마나 잘하는지를 알려 주는 낱말이 힘줄 낱말이에요. can은 어떻게 말하는지 선생님 소리를 떠올려 보세요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 힘주는 낱말과 가볍게 넘길 낱말 나누어 짝과 말하기', minutes: 14, tool: 'wordcards',
            teacher: '"●는 길고 또렷하게, ○는 짧게 미끄러지듯 말해요. 크게 소리치라는 뜻이 아니에요." 문장 하나를 속삭이는 목소리로도 강세를 살려 말해 보여 주며 소리 크기와 강세가 다르다는 것을 보여 준다. 짝 활동에서는 듣는 사람이 힘준 낱말을 손가락으로 세어 말해 준다.',
            task: '문장의 낱말을 ● 힘줘요 칸과 ○ 가볍게 칸에 나누어요. 그다음 짝에게 말하고, 짝은 힘준 낱말을 알아맞혀요.',
            levels: LV({ mode: 'sort', shuffle: false }),
            items: [
              { prompt: 'My dog is very cute. 낱말을 ● 칸과 ○ 칸에 나누어 보세요.',
                toolOptions: { slots: [{ id: 'strong', label: '● 힘줘요' }, { id: 'weak', label: '○ 가볍게' }], cards: ['My', 'dog', 'is', 'very', 'cute.'] },
                target: { sort: { strong: ['dog', 'very', 'cute.'], weak: ['My', 'is'] } }, difficulty: 0.15,
                hints: ['누구의 것인지 알리는 말과 짧게 잇는 말은 가볍게, 무엇인지와 어떤지 알리는 말은 또렷하게 말해요.'] },
              { prompt: 'We have a cat at home. 낱말을 ● 칸과 ○ 칸에 나누어 보세요.',
                toolOptions: { slots: [{ id: 'strong', label: '● 힘줘요' }, { id: 'weak', label: '○ 가볍게' }], cards: ['We', 'have', 'a', 'cat', 'at', 'home.'] },
                target: { sort: { strong: ['have', 'cat', 'home.'], weak: ['We', 'a', 'at'] } }, difficulty: 0.25,
                hints: ['낱말을 하나씩 빼고 말해 보세요. 빼도 뜻이 통하는 짧은 낱말은 가볍게 넘겨요.'] },
              { prompt: '강세를 잘 살려 말한 친구만 골라 보세요.',
                toolOptions: { mode: 'pick', basket: '잘 말한 친구', cards: [{ id: 'r1', text: '힘줄 낱말은 길고 또렷하게, 나머지는 짧게' }, { id: 'r2', text: '문장 전체를 아주 큰 소리로', why: '모든 낱말이 크면 어느 낱말이 중요한지 들리지 않아요.' }, { id: 'r3', text: '모든 낱말을 똑같은 세기로', why: '강약이 없으면 로봇처럼 들려요.' }, { id: 'r4', text: 'a·is·my를 가장 세게', why: 'a·is·my는 가볍게 넘기는 낱말이에요.' }] },
                target: { pick: ['r1'] }, difficulty: 0.15,
                hints: ['강세는 소리 크기가 아니라 강약의 차이예요. 듣는 사람이 중요한 낱말을 잘 들을 수 있는 방법을 골라요.'],
                predict: { q: '문장을 아주 크게 말하면 강세를 살린 걸까요?', options: ['네, 크게 말하면 돼요', '아니요, 강약이 있어야 해요'], answer: 1 },
                conclude: '강세는 소리 크기가 아니라 힘줄 낱말과 가볍게 넘길 낱말의 차이예요.' },
              { prompt: '나를 소개하는 문장 두 개(이름, 좋아하는 것)를 짝에게 말해요. 짝은 힘준 낱말을 알아맞혀 말해 줘요. 바꾸어 한 뒤 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"오늘 강세를 살린다는 것은 무엇이었나요?" 두세 명에게 들은 뒤 "크게가 아니라 강약"이라는 말을 칠판에 남기고 출구 질문을 푼다. 1번에서 has나 a를 빼먹거나 더한 학생은 다음 시간 첫 5분에 가리고 읽기를 다시 해 본다.',
        exitTicket: [
          { type: 'tool', tool: 'wordcards', options: { mode: 'pick', basket: '힘줄 낱말', shuffle: false, cards: ['He', 'has', 'a', 'red', 'bike.'] }, prompt: 'He has a red bike. 힘주어 말할 낱말만 골라 보세요.', target: { pick: ['has', 'red', 'bike.'] }, difficulty: 0.15 },
          { type: 'choice', prompt: 'We like apples. 를 강세를 살려 말한 것은 무엇일까요? (대문자 = 힘줌)', options: ['WE LIKE APPLES.', 'We LIKE APPLES.', 'we like apples. (모두 같은 세기)'], answer: 1, difficulty: 0.2, explain: 'like와 apples가 뜻을 담은 낱말이라 둘 다 힘주고, We는 가볍게 넘겨요.' },
          { type: 'mood', prompt: '오늘 영어 말하기는 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '힘주어 말할 낱말',
      items: [
        { type: 'figure', wide: true, prompt: '힘주어 말할 낱말 카드에 ○ 하세요.', tool: 'wordcards', figures: [{ options: { mode: 'pick', basket: '힘줄 낱말', shuffle: false, cards: ['They', 'swim', 'in', 'the', 'pool.'] }, caption: '' }], answer: 'swim, pool' },
        { type: 'table', prompt: '문장을 말하며 힘줄 낱말(●)과 가볍게 넘길 낱말(○)을 표시하세요.', columns: ['문장', '●○ 표시'], cells: [['I like music.', ''], ['My cat is small.', ''], ['We play games.', '']], answer: '○ ● ● / ○ ● ○ ● / ○ ● ●' },
        { type: 'choice', prompt: '강세를 살려 말한다는 것에 알맞은 것에 ○ 하세요.', options: ['모든 낱말을 크게 말한다', '뜻을 담은 낱말은 또렷하게, 나머지는 가볍게 말한다', '빠르게 말한다'], answer: '뜻을 담은 낱말은 또렷하게, 나머지는 가볍게 말한다' },
        { type: 'short', prompt: '나를 소개하는 영어 문장 하나를 쓰고, 힘주어 말할 낱말에 밑줄을 그으세요.' },
      ],
      easy: {
        note: '낱말을 하나씩 가리고 읽어 보세요. 가리면 뜻이 통하지 않는 낱말이 힘줄 낱말이에요.',
        items: [
          { type: 'figure', wide: true, prompt: '힘주어 말할 낱말 카드에 ○ 하세요.', tool: 'wordcards', figures: [{ options: { mode: 'pick', basket: '힘줄 낱말', shuffle: false, cards: ['I', 'love', 'cats.'] }, caption: '' }], answer: 'love, cats' },
          { type: 'choice', prompt: 'My name is Jun. 에서 힘주어 말할 낱말에 ○ 하세요.', options: ['My, is', 'name, Jun', 'is, Jun'], answer: 'name, Jun' },
          { type: 'short', prompt: 'My name is ___. 에 내 이름을 넣어 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 카드를 넣으면 초록 테두리가 생기고, 가볍게 말할 낱말을 넣으면 까닭을 말해 주고 되돌려요.',
      base: '카드를 모두 고른 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '더 긴 문장(near the river)이 나와 자리를 잇는 낱말까지 가려내야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 크게 말하면 강세라고 여긴다 → 속삭이는 목소리로도 강세를 살려 들려준다. ② 우리말처럼 모든 낱말을 같은 세기로 말한다 → 가리고 읽기로 뜻에 꼭 필요한 낱말만 남긴다. ③ can을 세게 말한다 → 할 수 있다는 뜻일 때는 보통 짧게 붙여 말한다(못 한다는 can\'t는 또렷하게). ●○는 학습용 어림 규칙이며 4차시에 강조로 바뀌는 강세를 다룬다. 낱말 카드는 누를 때만 소리가 난다.',
  }));

  // ───────────── 2차시 (practice) 강세 ─────────────
  L.push(lesson(2, '[6영02-01]', {
    title: '묻는 말에 답할 때 새 정보 낱말에 힘주기',
    objective: '짧은 묻고 답하기에서 답의 새 정보를 담은 낱말을 가장 세게 말하고, 같은 문장도 묻는 말에 따라 힘줄 낱말이 달라짐을 말할 수 있다.',
    illustration: {
      prompt: PROMPT('two children at a classroom desk, one asking a question and the other answering with one big glowing word in a speech bubble'),
      scene: SCENE('Where is it? — under the DESK.', '답의 새 정보에 가장 세게', [{ motif: 'tree', x: 70, y: 214 }, { motif: 'flower', x: 410, y: 226, color: 'rose' }]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '지난 시간 출구 질문의 He has a red bike. 를 함께 말한다. 이어서 "선생님이 물어볼게요. What color is your bike?" 한 학생이 답하게 한 뒤 "My bike is BLUE. 어느 낱말이 가장 세게 들렸나요? 왜 그 낱말일까요?" 묻는 사람이 모르는 것, 즉 새로 알려 주는 낱말이 가장 세다는 것을 끌어낸다. 물은 말에 있던 bike까지 세게 말하는 학생에게 "친구가 이미 아는 낱말이에요."라고 짚는다.',
        student: '선생님 질문에 답해 보고, 내 대답에서 가장 세게 들린 낱말이 무엇이었는지 말해 봐요.',
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 대답에서 가장 세게 말할 낱말 하나 고르기', minutes: 12, tool: 'wordcards',
            teacher: '"묻는 사람이 몰랐던 것은 무엇일까요? 그 낱말이 대답의 주인공이에요." 대답 문장에도 힘줄 낱말이 여럿 있지만, 그중 묻는 말의 답이 되는 낱말이 가장 높고 길게 올라간다고 손을 올려 보여 준다. want처럼 질문에 이미 나온 낱말을 고르는 학생에게는 질문을 다시 읽게 한다.',
            task: '묻는 말을 읽고, 대답에서 가장 세게 말할 낱말 하나만 바구니에 넣어요. 그 낱말을 손을 올리며 말해요.',
            levels: LV(PICK('가장 센 낱말')),
            items: [
              { prompt: 'A: What do you want? B: I want a sandwich. B의 대답에서 가장 세게 말할 낱말 하나를 골라 보세요.',
                toolOptions: { cards: ['I', { id: 'want', text: 'want', why: 'want는 물은 말에 이미 있던 낱말이라 가장 세게 말하지 않아요.' }, 'a', 'sandwich.'] },
                target: { pick: ['sandwich.'] }, difficulty: 0.15,
                hints: ['묻는 사람이 이미 아는 낱말과 처음 듣는 낱말을 나누어 보세요. 처음 듣는 낱말이 가장 세요.'] },
              { prompt: 'A: Where is my bag? B: It\'s under the desk. B의 대답에서 가장 세게 말할 낱말 하나를 골라 보세요.',
                toolOptions: { cards: ["It's", 'under', 'the', 'desk.'] },
                target: { pick: ['desk.'] }, difficulty: 0.2,
                hints: ['어디인지 물었어요. 가방이 놓인 자리를 알려 주는 낱말 가운데 가장 꼭 들어야 하는 것을 찾아보세요.'],
                levels: { challenge: { prompt: 'A: Where is my bag? B: It\'s under the desk by the window. 가장 세게 말할 낱말 하나를 골라 보세요.',
                  toolOptions: { cards: ["It's", 'under', 'the', { id: 'desk', text: 'desk', why: 'desk 뒤에 자리를 더 알려 주는 말이 이어져요. 마지막 새 정보가 가장 세요.' }, 'by', { id: 'the2', text: 'the' }, 'window.'] }, target: { pick: ['window.'] } } } },
              { prompt: 'A: When is your birthday? B: It\'s in May. B의 대답에서 가장 세게 말할 낱말 하나를 골라 보세요.',
                toolOptions: { cards: ["It's", 'in', 'May.'] },
                target: { pick: ['May.'] }, difficulty: 0.1,
                hints: ['언제인지 물었어요. 때를 알려 주는 낱말을 찾아보세요.'] },
              { prompt: 'A: How do you go to school? B: I go by bike. B의 대답에서 가장 세게 말할 낱말 하나를 골라 보세요.',
                toolOptions: { cards: ['I', { id: 'go', text: 'go', why: 'go는 물은 말에 이미 있던 낱말이에요.' }, 'by', 'bike.'] },
                target: { pick: ['bike.'] }, difficulty: 0.2,
                hints: ['어떻게 가는지 물었어요. 탈것을 알려 주는 낱말이 새 정보예요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 같은 문장, 다른 질문 — 힘줄 낱말 짝 짓기', minutes: 15, tool: 'wordcards',
            teacher: '"It\'s a red cap. 은 같은 문장인데 질문이 바뀌면 힘주는 낱말도 바뀌어요." 세 가지 질문을 하나씩 던지고 대답을 들려준 뒤 짝 짓게 한다. 대문자가 많을수록 잘 말한 것이라 여기는 학생에게 "대문자는 이 질문에 대한 답 하나뿐이에요."라고 짚는다. 마지막 짝 활동은 질문하는 사람이 질문을 바꾸면 대답하는 사람이 힘줄 낱말을 바꾸어 말한다.',
            task: '왼쪽 질문에 알맞게 힘준 대답 카드를 옆에 놓아요(대문자 = 가장 세게). 짝과 질문을 바꾸어 가며 대답해요.',
            levels: LV({ mode: 'match' }),
            items: [
              { prompt: "It's my red cap. 을 질문마다 알맞게 힘준 대답과 짝 지어 보세요.",
                toolOptions: { slots: [{ id: 'q1', label: 'What color is it?' }, { id: 'q2', label: 'What is it?' }, { id: 'q3', label: 'Whose is it?' }],
                  cards: [{ id: 'c1', text: "It's my RED cap." }, { id: 'c2', text: "It's my red CAP." }, { id: 'c3', text: "It's MY red cap." }] },
                target: { match: { q1: 'c1', q2: 'c2', q3: 'c3' } }, difficulty: 0.25,
                hints: ['질문의 첫 낱말(What color, What, Whose)이 무엇을 묻는지 먼저 말해 보세요. 그 답이 되는 낱말이 대문자인 카드를 찾아요.'],
                predict: { q: '같은 문장이면 힘주는 낱말도 늘 같을까요?', options: ['네, 늘 같아요', '질문에 따라 달라져요'], answer: 1 },
                conclude: '같은 문장도 묻는 말에 따라 새 정보가 달라져서 가장 세게 말하는 낱말이 바뀌어요.' },
              { prompt: 'Tom can swim. 을 질문마다 알맞게 힘준 대답과 짝 지어 보세요.',
                toolOptions: { slots: [{ id: 'q1', label: 'Who can swim?' }, { id: 'q2', label: 'What can Tom do?' }, { id: 'q3', label: 'Tom can\'t swim, right?' }],
                  cards: [{ id: 'c1', text: 'TOM can swim.' }, { id: 'c2', text: 'Tom can SWIM.' }, { id: 'c3', text: 'Well, Tom CAN swim.' }] },
                target: { match: { q1: 'c1', q2: 'c2', q3: 'c3' } }, difficulty: 0.35,
                hints: ['누가, 무엇을 묻는지 먼저 보세요. 세 번째는 친구가 잘못 알고 있는 것을 바로잡는 대답이에요.'] },
              { prompt: 'We play soccer at the park. 을 질문마다 알맞게 힘준 대답과 짝 지어 보세요.',
                toolOptions: { slots: [{ id: 'q1', label: 'What do you play?' }, { id: 'q2', label: 'Where do you play?' }, { id: 'q3', label: 'Who plays soccer?' }],
                  cards: [{ id: 'c1', text: 'We play SOCCER at the park.' }, { id: 'c2', text: 'We play soccer at the PARK.' }, { id: 'c3', text: 'WE play soccer at the park.' }] },
                target: { match: { q1: 'c1', q2: 'c2', q3: 'c3' } }, difficulty: 0.25,
                hints: ['무엇, 어디, 누구 가운데 어느 것을 묻는지 보고, 그 답이 대문자인 카드를 찾아요.'],
                levels: { challenge: { toolOptions: { cards: [{ id: 'c1', text: 'We play SOCCER at the park.' }, { id: 'c2', text: 'We play soccer at the PARK.' }, { id: 'c3', text: 'WE play soccer at the park.' }, { id: 'cx', text: 'We PLAY soccer AT the park.', why: 'at은 가볍게 넘기는 낱말이라 대답의 주인공이 될 수 없어요.' }] } } } },
              { prompt: '짝이 What / Where / When 가운데 하나로 물으면 I eat lunch at school at noon. 을 그 질문에 맞게 힘주어 답해요. 세 번 바꾸어 한 뒤 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"대답에서 가장 세게 말하는 낱말은 어떻게 찾았나요?" 묻는 사람이 모르던 낱말이라는 말이 나오면 칠판에 적고 출구 질문을 푼다. 2번에서 대문자가 둘 이상인 보기를 고른 학생에게는 질문의 첫 낱말에 동그라미를 치게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'wordcards', options: { mode: 'pick', basket: '가장 센 낱말', shuffle: false, cards: ['I', { id: 'eat', text: 'eat', why: 'eat는 물은 말에 이미 있던 낱말이에요.' }, 'bread', 'for', 'breakfast.'] }, prompt: 'A: What do you eat for breakfast? B: I eat bread for breakfast. 가장 세게 말할 낱말 하나를 골라 보세요.', target: { pick: ['bread'] }, difficulty: 0.25 },
          { type: 'choice', prompt: 'A: What time do you get up? 에 알맞게 힘준 대답은 무엇일까요? (대문자 = 가장 세게)', options: ['I GET up at seven.', 'I get up at SEVEN.', 'I get UP at seven.'], answer: 1, difficulty: 0.15, explain: '몇 시인지 물었으니 시각을 알려 주는 seven이 새 정보예요.' },
          { type: 'mood', prompt: '오늘 묻고 답하기는 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '대답의 주인공 낱말',
      items: [
        { type: 'table', prompt: '대답에서 가장 세게 말할 낱말을 쓰세요.', columns: ['묻는 말', '대답', '가장 센 낱말'], cells: [['What do you like?', 'I like music.', ''], ['Where is the cat?', 'It\'s on the sofa.', ''], ['Who is your teacher?', 'Mr. Park is my teacher.', '']], answer: 'music / sofa / Park' },
        { type: 'choice', prompt: 'A: What is it? 에 알맞게 힘준 대답에 ○ 하세요. (대문자 = 가장 세게)', options: ["It's my blue PEN.", "It's MY blue pen.", "It's my BLUE pen."], answer: "It's my blue PEN." },
        { type: 'choice', prompt: 'A: Whose pen is it? 에 알맞게 힘준 대답에 ○ 하세요.', options: ["It's my blue PEN.", "It's MY blue pen.", "It's my BLUE pen."], answer: "It's MY blue pen." },
        { type: 'short', prompt: 'A: What do you do after school? 에 대한 내 대답을 쓰고, 가장 세게 말할 낱말에 밑줄을 그으세요.' },
      ],
      easy: {
        note: '묻는 사람이 몰랐던 것을 알려 주는 낱말이 가장 세요.',
        items: [
          { type: 'choice', prompt: 'A: What do you want? B: I want water. 가장 세게 말할 낱말에 ○ 하세요.', options: ['I', 'want', 'water'], answer: 'water' },
          { type: 'choice', prompt: 'A: Where is my cap? B: It\'s on the bed. 가장 세게 말할 낱말에 ○ 하세요.', options: ['It\'s', 'on', 'bed'], answer: 'bed' },
          { type: 'short', prompt: 'A: What do you like? 에 대답을 쓰세요. I like ___.' },
        ],
      },
    },
    differentiation: {
      easy: '알맞은 카드에 초록 테두리가 생기고, 물은 말에 있던 낱말을 넣으면 까닭을 말해 주고 되돌려요.',
      base: '다 놓은 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '자리를 더 알려 주는 긴 대답(by the window)과 강약이 맞지 않는 함정 대답 카드가 섞여요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 대답의 모든 힘줄 낱말을 똑같이 세게 말한다 → 손을 올리는 높이로 가장 센 낱말 하나를 보여 준다. ② 질문에 나온 낱말(want, go)을 다시 세게 말한다 → "친구가 이미 아는 말"을 짚는다. ③ 대문자를 많이 쓸수록 잘 말한 것이라 여긴다. 활동 2의 세 번째 질문(Tom can\'t swim, right?)처럼 잘못 안 것을 바로잡을 때는 can도 세게 말할 수 있다는 것을 4차시와 이어 준다.',
  }));

  // ───────────── 3차시 (extend) 낱말 강세 ─────────────
  L.push(lesson(3, '[6영02-01]', {
    title: '긴 낱말에서 힘준 마디 찾아 말하기',
    objective: '두세 마디 영어 낱말에서 힘주어 말하는 마디를 찾아 그 마디만 길고 높게 말하고, 우리말 외래어처럼 고르게 말한 것과 견주어 말할 수 있다.',
    illustration: {
      prompt: PROMPT('a banana, a tiger, a guitar and a kangaroo standing on paper steps where one step in each row is taller than the others'),
      scene: SCENE('ba-NA-na  TI-ger  gui-TAR', '힘준 마디는 길고 높게', [{ motif: 'tree', x: 70, y: 214 }, { motif: 'bird', x: 250, y: 70 }]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"바나나!" 하고 우리말로 말한 뒤 영어로 ba-NA-na라고 둘째 마디를 길고 높게 말해 준다. "두 소리가 어떻게 달랐나요? 우리말은 마디를 고르게, 영어는 한 마디를 길고 높게 말해요." 이어서 tiger와 guitar를 들려주고 손뼉 하나는 크게, 나머지는 작게 쳐서 마디를 세게 한다. 마디마다 똑같이 크게 치는 학생이 있으면 "한 마디만 큰 손뼉이에요."라고 다시 보여 준다.',
        student: '바나나와 banana를 듣고, 어느 마디가 길고 높게 들렸는지 손뼉으로 쳐 봐요.',
        demo: { tool: 'wordcards', options: { mode: 'pick', basket: '힘준 마디', shuffle: false, cards: [{ id: 'm1', text: 'ba' }, { id: 'm2', text: 'na' }, { id: 'm3', text: 'na' }] }, sequence: [{ at: {} }, { at: { m2: 0 } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 힘준 마디가 어디인지 낱말 나누기', minutes: 14, tool: 'wordcards',
            teacher: '"낱말을 두 번 말해 보세요. 한 번은 첫째 마디를, 한 번은 둘째 마디를 길게요. 어느 쪽이 들어 본 소리인가요?" 카드의 낱말을 눌러 소리를 들어 보게 한다. 호텔·기타처럼 우리말에서 첫 마디를 세게 하는 외래어를 그대로 옮기는 학생에게 영어 소리를 다시 들려준다.',
            task: '낱말 카드를 누르면 소리가 나요. 들어 보고 힘준 마디가 첫째인지 둘째인지(셋째인지) 칸에 나누어요.',
            levels: LV({ mode: 'sort', shuffle: false }),
            items: [
              { prompt: 'tiger, monkey, guitar, balloon. 힘준 마디가 어디인지 나누어 보세요.',
                toolOptions: { slots: [{ id: 'first', label: '첫째 마디 ●○' }, { id: 'second', label: '둘째 마디 ○●' }], words: [{ en: 'tiger', ko: '호랑이' }, { en: 'monkey', ko: '원숭이' }, { en: 'guitar', ko: '기타' }, { en: 'balloon', ko: '풍선' }] },
                target: { sort: { first: ['tiger', 'monkey'], second: ['guitar', 'balloon'] } }, difficulty: 0.2,
                hints: ['낱말을 두 가지로 말해 보세요. 첫 마디를 길게 한 번, 둘째 마디를 길게 한 번 — 들어 본 소리가 맞는 쪽이에요.'] },
              { prompt: 'pencil, hotel, dolphin, giraffe. 힘준 마디가 어디인지 나누어 보세요.',
                toolOptions: { slots: [{ id: 'first', label: '첫째 마디 ●○' }, { id: 'second', label: '둘째 마디 ○●' }], words: [{ en: 'pencil', ko: '연필', motif: 'pencil' }, { en: 'hotel', ko: '호텔', motif: 'house' }, { en: 'dolphin', ko: '돌고래' }, { en: 'giraffe', ko: '기린' }] },
                target: { sort: { first: ['pencil', 'dolphin'], second: ['hotel', 'giraffe'] } }, difficulty: 0.3,
                hints: ['우리말로 말하던 버릇을 잠깐 내려놓고, 카드를 눌러 영어 소리를 들어 보세요.'],
                levels: { challenge: { prompt: 'pencil, hotel, dolphin, giraffe, Korea. 힘준 마디가 어디인지 나누어 보세요.',
                  toolOptions: { words: [{ en: 'pencil', ko: '연필', motif: 'pencil' }, { en: 'hotel', ko: '호텔', motif: 'house' }, { en: 'dolphin', ko: '돌고래' }, { en: 'giraffe', ko: '기린' }, { en: 'Korea', ko: '한국' }] },
                  target: { sort: { first: ['pencil', 'dolphin'], second: ['hotel', 'giraffe', 'Korea'] } } } } },
              { prompt: 'banana, hamburger, kangaroo, elephant, tomato, afternoon. 세 마디 낱말의 힘준 마디를 나누어 보세요.',
                toolOptions: { slots: [{ id: 'first', label: '첫째 ●○○' }, { id: 'second', label: '둘째 ○●○' }, { id: 'third', label: '셋째 ○○●' }], words: [{ en: 'banana', ko: '바나나', motif: 'banana' }, { en: 'hamburger', ko: '햄버거' }, { en: 'kangaroo', ko: '캥거루' }, { en: 'elephant', ko: '코끼리' }, { en: 'tomato', ko: '토마토' }, { en: 'afternoon', ko: '오후', motif: 'sun' }] },
                target: { sort: { first: ['hamburger', 'elephant'], second: ['banana', 'tomato'], third: ['kangaroo', 'afternoon'] } }, difficulty: 0.4,
                hints: ['마디를 손가락으로 세며 말해 보세요. 한 마디만 길고 높게 올라가요. 그 손가락이 몇 번째인지 보세요.'],
                levels: { easy: { prompt: 'banana, hamburger, kangaroo, elephant. 세 마디 낱말의 힘준 마디를 나누어 보세요.',
                  toolOptions: { words: [{ en: 'banana', ko: '바나나', motif: 'banana' }, { en: 'hamburger', ko: '햄버거' }, { en: 'kangaroo', ko: '캥거루' }, { en: 'elephant', ko: '코끼리' }] },
                  target: { sort: { first: ['hamburger', 'elephant'], second: ['banana'], third: ['kangaroo'] } } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 마디 카드에서 힘준 마디 하나 고르고 짝과 말하기', minutes: 13, tool: 'wordcards',
            teacher: '"com-pu-ter, 세 마디 가운데 하나만 길고 높아요. 손가락을 하나씩 접으며 말해 볼까요?" 마디를 고른 뒤 그 마디에서 손을 들어 올리며 낱말을 말하게 한다. 짝 활동에서는 한 사람이 일부러 틀린 마디에 힘을 주어 말하면 다른 사람이 바른 마디로 고쳐 말한다.',
            task: '낱말이 마디로 나뉘어 있어요. 힘주어 말할 마디 하나만 바구니에 넣고, 그 마디에서 손을 올리며 낱말을 말해요.',
            levels: LV(PICK('힘준 마디')),
            items: [
              { prompt: 'computer (컴퓨터) 에서 힘준 마디 하나를 골라 보세요.',
                toolOptions: { cards: [{ id: 'm1', text: 'com' }, { id: 'm2', text: 'pu' }, { id: 'm3', text: 'ter' }] },
                target: { pick: ['m2'] }, difficulty: 0.25,
                hints: ['마디마다 한 번씩 길게 말해 보세요. 선생님이 들려준 소리와 같은 것이 힘준 마디예요.'] },
              { prompt: 'tomorrow (내일) 에서 힘준 마디 하나를 골라 보세요.',
                toolOptions: { cards: [{ id: 'm1', text: 'to' }, { id: 'm2', text: 'mor' }, { id: 'm3', text: 'row' }] },
                target: { pick: ['m2'] }, difficulty: 0.3,
                hints: ['to는 아주 짧게 들려요. 나머지 두 마디 가운데 어느 쪽이 길고 높은지 들어 보세요.'] },
              { prompt: 'dinosaur (공룡) 에서 힘준 마디 하나를 골라 보세요.',
                toolOptions: { cards: [{ id: 'm1', text: 'di' }, { id: 'm2', text: 'no' }, { id: 'm3', text: 'saur' }] },
                target: { pick: ['m1'] }, difficulty: 0.35,
                hints: ['우리말 "다이노사우루스"를 떠올리지 말고 영어 소리를 들어 보세요. 한 마디만 길고 높아요.'],
                levels: { challenge: { prompt: 'potato (감자) 에서 힘준 마디 하나를 골라 보세요.',
                  toolOptions: { cards: [{ id: 'm1', text: 'po' }, { id: 'm2', text: 'ta' }, { id: 'm3', text: 'to' }] }, target: { pick: ['m2'] } } } },
              { prompt: '짝에게 낱말 하나를 일부러 틀린 마디에 힘주어 말해요(예: BA-na-na). 짝은 바른 마디로 고쳐 말해요. 세 낱말을 바꾸어 한 뒤 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"우리말 외래어와 영어 낱말은 마디를 어떻게 다르게 말했나요?" 고르게 말하기와 한 마디만 길고 높게 말하기를 비교해 정리하고 출구 질문을 푼다. 1번에서 첫째 마디를 고른 학생에게 다음 시간 도입에서 그 낱말을 다시 들려준다.',
        exitTicket: [
          { type: 'tool', tool: 'wordcards', options: { mode: 'pick', basket: '힘준 마디', shuffle: false, cards: [{ id: 'm1', text: 'ze' }, { id: 'm2', text: 'bra' }] }, prompt: 'zebra (얼룩말) 에서 힘준 마디 하나를 골라 보세요.', target: { pick: ['m1'] }, difficulty: 0.3 },
          { type: 'choice', prompt: 'guitar를 영어답게 말한 것은 무엇일까요? (대문자 = 힘준 마디)', options: ['GUI-tar', 'gui-TAR', 'GUI-TAR'], answer: 1, difficulty: 0.25, explain: 'guitar는 둘째 마디를 길고 높게 말해요. 우리말 "기타"와 달라요.' },
          { type: 'mood', prompt: '오늘 마디 찾기는 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '힘준 마디 찾기',
      items: [
        { type: 'table', prompt: '낱말을 소리 내어 말하고 힘준 마디를 쓰세요.', columns: ['낱말', '마디 나누기', '힘준 마디'], cells: [['lemon', 'lem-on', ''], ['hotel', 'ho-tel', ''], ['banana', 'ba-na-na', ''], ['kangaroo', 'kan-ga-roo', '']], answer: 'lem / tel / na / roo' },
        { type: 'choice', prompt: 'balloon을 영어답게 말한 것에 ○ 하세요. (대문자 = 힘준 마디)', options: ['BAL-loon', 'bal-LOON'], answer: 'bal-LOON' },
        { type: 'choice', prompt: '영어 낱말을 말하는 방법으로 알맞은 것에 ○ 하세요.', options: ['모든 마디를 똑같이 말한다', '한 마디를 길고 높게 말한다', '마지막 마디를 늘 세게 말한다'], answer: '한 마디를 길고 높게 말한다' },
        { type: 'short', prompt: '내가 좋아하는 영어 낱말 하나를 쓰고, 힘준 마디에 ● 를 그리세요.' },
      ],
      easy: {
        note: '마디를 손가락으로 세며 말해요. 한 마디만 길고 높아요.',
        items: [
          { type: 'choice', prompt: 'tiger에서 힘준 마디에 ○ 하세요.', options: ['ti', 'ger'], answer: 'ti' },
          { type: 'choice', prompt: 'banana에서 힘준 마디에 ○ 하세요.', options: ['ba', 'na(가운데)', 'na(끝)'], answer: 'na(가운데)' },
          { type: 'short', prompt: 'computer를 마디로 나누어 쓰세요. ___ - ___ - ___' },
        ],
      },
    },
    differentiation: {
      easy: '세 마디 나누기에서 낱말이 네 개로 줄고, 맞게 놓으면 초록 테두리가 생겨요.',
      base: '낱말 카드를 눌러 소리를 들으며 스스로 나누고 확인해요.',
      challenge: 'Korea처럼 우리말과 힘준 마디가 다른 낱말이 더해지고, 마디 고르기에서 potato가 나와요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 외래어(호텔·기타·바나나)를 우리말처럼 고르게 말한다 → 우리말과 영어를 번갈아 들려주며 견준다. ② 힘준 마디를 크게만 말한다 → 길고 높게, 나머지 마디는 짧고 흐리게. ③ 마디 수를 글자 수로 센다 → 손가락을 접으며 소리 덩이를 센다. 참고: 힘준 마디는 사전 표기(미국·영국 발음 공통)를 따랐다. 카드 소리는 누를 때만 난다.',
  }));

  // ───────────── 4차시 (extend) 강조 강세 ─────────────
  L.push(lesson(4, '[6영02-01]', {
    title: '강조할 낱말을 바꿔 뜻 바로잡아 말하기',
    objective: '같은 문장에서 강조할 낱말을 바꾸어 전하려는 뜻을 달리 말하고, 친구가 잘못 안 것을 힘준 낱말로 바로잡아 답할 수 있다.',
    illustration: {
      prompt: PROMPT('a child holding up a red cap while a friend points at a blue cap, with one large word in a speech bubble'),
      scene: SCENE("It's my RED cap.", '바로잡는 낱말을 강조해요', [{ motif: 'house', x: 80, y: 218, color: 'peach' }, { motif: 'flower', x: 400, y: 226, color: 'buttercup' }]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '빨간 필통을 들고 "Is it a blue pencil case?" 하고 일부러 틀리게 묻는다. 학생이 No라고 하면 "No, it\'s a RED pencil case." 하고 red만 강하게 말해 준다. "왜 red만 세게 말했을까요?" 잘못 안 곳을 바로잡는 낱말을 세게 말한다는 것을 끌어낸다. 강조는 화난 목소리로 하는 것이라고 말하는 학생에게 "부드럽게 말해도 그 낱말만 높고 길면 돼요."라고 짚는다.',
        student: '선생님이 일부러 틀리게 물으면, 바로잡는 낱말을 세게 말해 대답해 봐요.',
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 강조한 낱말과 뜻 짝 짓기', minutes: 13, tool: 'wordcards',
            teacher: '"Mina has two cats. 를 세 번 들려줄게요. 매번 무엇을 바로잡고 있는지 들어 봐요." MINA, TWO, CATS를 차례로 강조해 말한 뒤 짝 짓기를 하게 한다. 짝 지은 뒤에는 괄호 속 말(준호가 아니라)을 먼저 말하고 영어 문장을 이어 말하게 하여 강조의 까닭을 소리로 익히게 한다.',
            task: '왼쪽의 뜻(괄호 속을 바로잡는 말)에 알맞게 강조한 문장 카드를 놓아요(대문자 = 강조). 짝지은 문장을 소리 내어 말해요.',
            levels: LV({ mode: 'match' }),
            items: [
              { prompt: 'Mina has two cats. 를 뜻에 맞게 강조한 카드와 짝 지어 보세요.',
                toolOptions: { slots: [{ id: 'who', label: '(준호가 아니라) 미나' }, { id: 'num', label: '(세 마리가 아니라) 두 마리' }, { id: 'what', label: '(개가 아니라) 고양이' }],
                  cards: [{ id: 'c1', text: 'MINA has two cats.' }, { id: 'c2', text: 'Mina has TWO cats.' }, { id: 'c3', text: 'Mina has two CATS.' }] },
                target: { match: { who: 'c1', num: 'c2', what: 'c3' } }, difficulty: 0.2,
                hints: ['괄호 속에서 무엇을 바로잡는지(사람, 수, 동물) 먼저 보고, 그것을 뜻하는 낱말이 대문자인 카드를 찾아요.'],
                predict: { q: '강조하는 낱말을 바꾸면 뜻도 달라질까요?', options: ['뜻은 그대로예요', '전하려는 뜻이 달라져요'], answer: 1 },
                conclude: '같은 문장도 강조하는 낱말에 따라 무엇을 바로잡는지가 달라져요.' },
              { prompt: 'I go to school by bus. 를 뜻에 맞게 강조한 카드와 짝 지어 보세요.',
                toolOptions: { slots: [{ id: 'how', label: '(지하철이 아니라) 버스로' }, { id: 'where', label: '(도서관이 아니라) 학교에' }],
                  cards: [{ id: 'c1', text: 'I go to school by BUS.' }, { id: 'c2', text: 'I go to SCHOOL by bus.' }, { id: 'c3', text: 'I go TO school by bus.', why: 'to를 강조해도 버스나 학교를 바로잡지 못해요.' }] },
                target: { match: { how: 'c1', where: 'c2' } }, difficulty: 0.25,
                hints: ['바로잡는 말이 탈것인지 가는 곳인지 보세요. 짧게 잇는 낱말을 강조한 카드는 어디에도 맞지 않아요.'] },
              { prompt: 'Jisu likes green apples. 를 뜻에 맞게 강조한 카드와 짝 지어 보세요.',
                toolOptions: { slots: [{ id: 'who', label: '(민호가 아니라) 지수' }, { id: 'color', label: '(빨간 것이 아니라) 초록' }, { id: 'feel', label: '(싫어하는 게 아니라) 좋아해요' }],
                  cards: [{ id: 'c1', text: 'JISU likes green apples.' }, { id: 'c2', text: 'Jisu likes GREEN apples.' }, { id: 'c3', text: 'Jisu LIKES green apples.' }] },
                target: { match: { who: 'c1', color: 'c2', feel: 'c3' } }, difficulty: 0.3,
                hints: ['괄호 속이 사람, 색, 마음 가운데 어느 것을 바로잡는지 보세요.'],
                levels: { challenge: { toolOptions: { cards: [{ id: 'c1', text: 'JISU likes green apples.' }, { id: 'c2', text: 'Jisu likes GREEN apples.' }, { id: 'c3', text: 'Jisu LIKES green apples.' }, { id: 'cx', text: 'Jisu likes green APPLES.', why: '사과를 강조하면 "배가 아니라 사과"라는 뜻이에요. 왼쪽 뜻 어디에도 맞지 않아요.' }] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. "No, it\'s ~" 바로잡는 낱말 골라 답하기', minutes: 14, tool: 'wordcards',
            teacher: '"친구가 잘못 알고 물었어요. 대답에서 바로잡는 낱말 하나에만 힘을 줘요." No, my bag is GREEN. 처럼 바로잡는 낱말만 높고 길게 말해 준다. 바로잡는 낱말 말고 bag까지 세게 말하는 학생에게 "bag은 친구도 이미 알아요."라고 짚는다. 짝 활동은 일부러 틀리게 묻기 놀이로 한다.',
            task: '묻는 말과 대답을 읽고, 대답에서 바로잡는 낱말 하나만 바구니에 넣어요. 그 낱말을 강조해 대답을 말해요.',
            levels: LV(PICK('바로잡는 낱말')),
            items: [
              { prompt: 'A: Is your bag blue? B: No, my bag is green. 바로잡는 낱말 하나를 골라 보세요.',
                toolOptions: { cards: ['No,', 'my', { id: 'bag', text: 'bag', why: 'bag은 묻는 사람도 이미 아는 낱말이에요.' }, 'is', 'green.'] },
                target: { pick: ['green.'] }, difficulty: 0.15,
                hints: ['묻는 사람이 잘못 안 것은 무엇이었나요? 그것을 바르게 고친 낱말을 찾아요.'] },
              { prompt: 'A: Do you get up at six? B: No, I get up at seven. 바로잡는 낱말 하나를 골라 보세요.',
                toolOptions: { cards: ['No,', 'I', { id: 'get', text: 'get', why: 'get up은 묻는 말에 이미 있었어요.' }, 'up', 'at', 'seven.'] },
                target: { pick: ['seven.'] }, difficulty: 0.2,
                hints: ['묻는 말과 대답에서 서로 다른 낱말을 찾아보세요.'] },
              { prompt: 'A: Is Tom your brother? B: No, Tom is my cousin. 바로잡는 낱말 하나를 골라 보세요.',
                toolOptions: { cards: ['No,', { id: 'Tom', text: 'Tom', why: 'Tom은 묻는 사람도 알고 있어요.' }, 'is', 'my', 'cousin.'] },
                target: { pick: ['cousin.'] }, difficulty: 0.2,
                hints: ['Tom이 누구인지를 잘못 알았어요. 무엇으로 바로잡았는지 찾아요.'],
                levels: { challenge: { prompt: 'A: Is Tom your little brother? B: No, Tom is my big cousin. 바로잡는 낱말을 모두 골라 보세요.',
                  toolOptions: { cards: ['No,', 'Tom', 'is', 'my', 'big', 'cousin.'] }, target: { pick: ['big', 'cousin.'] } } } },
              { prompt: '짝이 내 물건을 보고 일부러 틀리게 물어요(Is it a black pen?). 나는 바로잡는 낱말을 강조해 답해요. 서로 세 번씩 한 뒤 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"강조는 언제 썼나요? 무엇을 세게 말했나요?" 잘못 안 것을 바로잡을 때, 바로잡는 낱말을 높고 길게 말했다는 것을 정리하고 출구 질문을 푼다. 1번에서 is나 my를 고른 학생과는 묻는 말과 대답에서 다른 낱말 찾기를 한 번 더 한다.',
        exitTicket: [
          { type: 'tool', tool: 'wordcards', options: { mode: 'pick', basket: '바로잡는 낱말', shuffle: false, cards: ['No,', 'it\'s', 'on', 'Friday.'] }, prompt: 'A: Is the test on Monday? B: No, it\'s on Friday. 바로잡는 낱말 하나를 골라 보세요.', target: { pick: ['Friday.'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '(고양이가 아니라) 개를 키운다고 바로잡을 때 알맞게 강조한 것은? (대문자 = 강조)', options: ['I HAVE a dog.', 'I have a DOG.', 'I have A dog.'], answer: 1, difficulty: 0.2, explain: '고양이를 개로 바로잡으니 dog를 강조해요.' },
          { type: 'short', prompt: '친구가 Is your favorite color red? 라고 물었어요. 사실과 다르면 바로잡는 대답을 쓰고, 강조할 낱말에 밑줄을 그으세요.' },
        ],
      },
    ],
    worksheet: {
      title: '강조해서 바로잡기',
      items: [
        { type: 'table', prompt: '괄호 속 뜻에 맞게 강조할 낱말을 쓰세요.', columns: ['뜻', '문장', '강조할 낱말'], cells: [['(형이 아니라) 누나', 'My sister plays the piano.', ''], ['(바이올린이 아니라) 피아노', 'My sister plays the piano.', ''], ['(내 것이 아니라) 네 것', 'This is your pen.', '']], answer: 'sister / piano / your' },
        { type: 'choice', prompt: 'A: Is it Tuesday today? B: No, it\'s Wednesday. 에서 강조할 낱말에 ○ 하세요.', options: ['No', 'it\'s', 'Wednesday'], answer: 'Wednesday' },
        { type: 'choice', prompt: '강조에 대해 알맞은 말에 ○ 하세요.', options: ['화난 목소리로 말하는 것이다', '바로잡는 낱말을 높고 길게 말하는 것이다', '문장 전체를 크게 말하는 것이다'], answer: '바로잡는 낱말을 높고 길게 말하는 것이다' },
        { type: 'short', prompt: '짝이 일부러 틀리게 물은 말과 내가 바로잡아 답한 말을 쓰세요.' },
      ],
      easy: {
        note: '묻는 말과 대답에서 서로 다른 낱말을 찾으면, 그것이 강조할 낱말이에요.',
        items: [
          { type: 'choice', prompt: 'A: Is it a cat? B: No, it\'s a dog. 강조할 낱말에 ○ 하세요.', options: ['No', 'it\'s', 'dog'], answer: 'dog' },
          { type: 'choice', prompt: 'A: Are you ten? B: No, I\'m eleven. 강조할 낱말에 ○ 하세요.', options: ['I\'m', 'eleven'], answer: 'eleven' },
          { type: 'short', prompt: 'No, it\'s ___. 빈칸에 바로잡는 낱말을 넣어 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 카드에 초록 테두리가 생기고, 이미 아는 낱말을 고르면 까닭을 말해 주고 되돌려요.',
      base: '다 고른 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '뜻 짝 짓기에 어디에도 맞지 않는 함정 카드가 섞이고, 바로잡는 낱말이 둘인 대답(big cousin)이 나와요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 강조를 화난 목소리나 큰 소리로 여긴다 → 부드러운 목소리로 한 낱말만 높고 길게. ② 바로잡는 낱말과 함께 문장의 다른 힘줄 낱말까지 모두 세게 말한다 → 1·2차시의 ●는 그대로 두고, 바로잡는 낱말 하나만 가장 높게. ③ 대답을 No 한 낱말로 끝낸다 → 바로잡는 문장까지 말해야 뜻이 전해진다. 이 차시로 강세 부분(1~4차시)을 마친다.',
  }));

  // ───────────── 5차시 (core) 억양: 묻기와 알리기 ─────────────
  L.push(lesson(5, '[6영02-01]', {
    title: '끝을 올리고 내려 묻는 말과 알리는 말 구분하기',
    objective: '예/아니요로 답하는 질문은 끝을 올리고, 무엇·어디를 묻는 질문과 알리는 말은 끝을 내려 말하며, 억양을 듣고 알맞게 답할 수 있다.',
    illustration: {
      prompt: PROMPT('two children talking with speech bubbles shaped like an arrow going up and an arrow going down'),
      scene: SCENE('Can you swim? ↗  Where? ↘', '끝을 올려요 · 내려요', [{ motif: 'wave', x: 380, y: 230 }, { motif: 'tree', x: 70, y: 214 }]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '손을 올리며 "Do you like pizza? ↗", 손을 내리며 "I like pizza. ↘"를 들려준다. "두 문장의 끝이 어떻게 달랐나요? 끝을 올리면 듣는 사람은 무엇을 해야 할까요?" 대답(Yes/No)을 해야 한다는 신호라는 것을 끌어낸다. "억양은 노래처럼 멋을 내는 것 아닌가요?"라는 말이 나오면 "끝을 올리면 묻는 뜻, 내리면 알리는 뜻이 되니 뜻을 바꾸는 소리예요."라고 짚는다.',
        student: '선생님이 손을 올리고 내리며 말한 두 문장을 듣고, 끝소리가 어떻게 달랐는지 말해 봐요.',
        demo: { tool: 'wordcards', options: { mode: 'sort', shuffle: false, slots: TONE, cards: ['Do you like pizza?', 'I like pizza.'] }, sequence: [{ at: {} }, { at: { 'Do you like pizza?': 0, 'I like pizza.': 1 } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. ↗ 문장과 ↘ 문장 나누기', minutes: 13, tool: 'wordcards',
            teacher: '"물음표가 있으면 모두 끝을 올릴까요?" What, Where처럼 무엇을 묻는 질문은 대개 끝을 내린다는 것을 손으로 보여 준다. 물음표만 보고 나누는 학생에게 "이 질문에 Yes나 No로 답할 수 있나요?"라고 되묻는다. 나눈 뒤에는 손을 올리고 내리며 모든 문장을 소리 내어 말하게 한다.',
            task: '문장을 끝을 올려 말할 것(↗)과 내려 말할 것(↘)으로 나누어요. 손을 올리고 내리며 소리 내어 말해요.',
            levels: LV({ mode: 'sort', shuffle: false, slots: TONE }),
            items: [
              { prompt: '여섯 문장을 ↗ 칸과 ↘ 칸에 나누어 보세요(Do you like pizza? 부터).',
                toolOptions: { cards: ['Do you like pizza?', 'Is it your bag?', 'Can you swim?', 'I like pizza.', 'What is your name?', 'Where do you live?'] },
                target: { sort: { up: ['Do you like pizza?', 'Is it your bag?', 'Can you swim?'], down: ['I like pizza.', 'What is your name?', 'Where do you live?'] } }, difficulty: 0.25,
                hints: ['문장마다 Yes나 No로 답할 수 있는지 따져 보세요. 답할 수 있으면 끝을 올려요.'],
                predict: { q: '물음표가 있는 문장은 모두 끝을 올릴까요?', options: ['네, 모두 올려요', '아니요, 내리는 것도 있어요'], answer: 1 },
                conclude: '예/아니요로 답하는 질문은 끝을 올리고, What·Where처럼 무엇을 묻는 질문은 대개 끝을 내려요.' },
              { prompt: 'Are you hungry? 부터 다섯 문장을 ↗ 칸과 ↘ 칸에 나누어 보세요.',
                toolOptions: { cards: ['Are you hungry?', 'Is he your friend?', 'It is cold today.', 'How old are you?', 'Who is she?'] },
                target: { sort: { up: ['Are you hungry?', 'Is he your friend?'], down: ['It is cold today.', 'How old are you?', 'Who is she?'] } }, difficulty: 0.3,
                hints: ['첫 낱말을 보세요. Are·Is·Can·Do로 시작하는지, How·Who·What으로 시작하는지에 따라 답하는 방법이 달라요.'],
                levels: { challenge: { prompt: 'Are you hungry? 부터 여섯 문장을 ↗ 칸과 ↘ 칸에 나누어 보세요.',
                  toolOptions: { cards: ['Are you hungry?', 'Is he your friend?', 'It is cold today.', 'How old are you?', 'Who is she?', 'Can I help you?'] },
                  target: { sort: { up: ['Are you hungry?', 'Is he your friend?', 'Can I help you?'], down: ['It is cold today.', 'How old are you?', 'Who is she?'] } } } } },
              { prompt: 'When is your birthday? 부터 네 문장을 ↗ 칸과 ↘ 칸에 나누어 보세요.',
                toolOptions: { cards: ['When is your birthday?', 'Do you have a pet?', 'My birthday is in June.', 'Is this seat free?'] },
                target: { sort: { up: ['Do you have a pet?', 'Is this seat free?'], down: ['When is your birthday?', 'My birthday is in June.'] } }, difficulty: 0.2,
                hints: ['대답을 소리 내어 해 보세요. Yes, I do. 처럼 답할 수 있는 질문인지, 때나 날을 알려 줘야 하는 질문인지 보세요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 대화에서 끝을 올릴 말 찾고 주고받기', minutes: 14, tool: 'wordcards',
            teacher: '대화문을 두 번 들려준다. 한 번은 모든 끝을 내려, 한 번은 바르게. "처음 것은 무엇이 이상했나요? 친구가 질문인 줄 모르고 대답하지 않을 수 있어요." 짝 활동에서는 듣는 사람이 끝소리를 듣고 Yes/No로 답할지, 정보로 답할지 정해 대답한다.',
            task: '대화에서 끝을 올려 말할 문장만 바구니에 넣어요. 그다음 짝과 역할을 나누어 억양을 살려 대화해요.',
            levels: LV(PICK('↗ 끝을 올릴 말')),
            items: [
              { prompt: 'Hi, Jun. 으로 시작하는 대화예요. 끝을 올려 말할 문장만 골라 보세요.',
                toolOptions: { cards: [{ id: 'l1', text: 'A: Hi, Jun.' }, { id: 'l2', text: 'A: Are you free now?' }, { id: 'l3', text: 'B: Yes, I am.' }, { id: 'l4', text: 'A: Do you want to play badminton?' }, { id: 'l5', text: 'B: Sure. Where do we play?', why: 'Where로 묻는 말은 대개 끝을 내려요.' }, { id: 'l6', text: 'A: At the park.' }] },
                target: { pick: ['l2', 'l4'] }, difficulty: 0.3,
                hints: ['대화에서 상대가 Yes나 No로 대답한 말, 또는 그렇게 대답할 수 있는 말을 찾아보세요.'] },
              { prompt: 'Excuse me. 로 시작하는 가게 대화예요. 끝을 올려 말할 문장만 골라 보세요.',
                toolOptions: { cards: [{ id: 'l1', text: 'A: Excuse me.' }, { id: 'l2', text: 'A: Do you have pencils?' }, { id: 'l3', text: 'B: Yes. They are over there.' }, { id: 'l4', text: 'A: How much is it?', why: 'How much로 묻는 말은 값을 알려 줘야 하니 대개 끝을 내려요.' }, { id: 'l5', text: 'B: It is one dollar.' }, { id: 'l6', text: 'A: Can I pay by card?' }] },
                target: { pick: ['l2', 'l6'] }, difficulty: 0.3,
                hints: ['A의 질문을 하나씩 보세요. 대답이 Yes/No일 질문과 값을 알려 줘야 하는 질문을 나누어요.'],
                levels: { easy: { prompt: 'Excuse me. 로 시작하는 짧은 가게 대화예요. 끝을 올려 말할 문장만 골라 보세요.',
                  toolOptions: { cards: [{ id: 'l1', text: 'A: Excuse me.' }, { id: 'l2', text: 'A: Do you have pencils?' }, { id: 'l3', text: 'B: Yes. They are over there.' }, { id: 'l4', text: 'A: How much is it?', why: 'How much로 묻는 말은 대개 끝을 내려요.' }] }, target: { pick: ['l2'] } } } },
              { prompt: '짝이 Do you ~? 또는 What do you ~? 로 물어요. 끝소리를 듣고 Yes/No로 답할지 내용을 알려 줄지 정해 답해요. 다섯 번 주고받은 뒤 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"끝을 올리는 말은 듣는 사람에게 무엇을 해 달라는 신호였나요?" 예/아니요로 답해 달라는 신호라는 말을 정리하고 출구 질문을 푼다. 1번에서 What으로 시작하는 질문을 ↗에 넣은 학생과는 대답을 소리 내어 해 보며 다시 나눈다.',
        exitTicket: [
          { type: 'tool', tool: 'wordcards', options: { mode: 'sort', shuffle: false, slots: TONE, cards: ['Is it sunny?', 'What time is it?', 'It is three o\'clock.', 'Do you know him?'] }, prompt: 'Is it sunny? 부터 네 문장을 ↗ 칸과 ↘ 칸에 나누어 보세요.', target: { sort: { up: ['Is it sunny?', 'Do you know him?'], down: ['What time is it?', 'It is three o\'clock.'] } }, difficulty: 0.2 },
          { type: 'choice', prompt: '친구가 끝을 올려 "Can you come to my party? ↗" 라고 말했어요. 알맞은 대답은?', options: ['At six.', 'Yes, I can.', 'My name is Jun.'], answer: 1, difficulty: 0.15, explain: '끝을 올린 Can you ~? 질문은 Yes나 No로 답해요.' },
          { type: 'mood', prompt: '오늘 억양 공부는 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '끝을 올릴까, 내릴까',
      items: [
        { type: 'table', prompt: '문장 끝에 ↗ 또는 ↘ 를 쓰세요.', columns: ['문장', '↗ / ↘'], cells: [['Do you like music?', ''], ['Where is the library?', ''], ['I am from Korea.', ''], ['Is it your cap?', '']], answer: '↗ / ↘ / ↘ / ↗' },
        { type: 'choice', prompt: '끝을 올려 말하는 질문에 ○ 하세요.', options: ['What is this?', 'Can you dance?', 'Who is he?'], answer: 'Can you dance?' },
        { type: 'choice', prompt: '억양에 대해 알맞은 말에 ○ 하세요.', options: ['멋을 내려고 노래처럼 하는 것이다', '끝을 올리고 내리는 것에 따라 뜻이 달라진다', '물음표가 있으면 늘 끝을 올린다'], answer: '끝을 올리고 내리는 것에 따라 뜻이 달라진다' },
        { type: 'short', prompt: '짝에게 끝을 올려 물을 질문 하나와 끝을 내려 물을 질문 하나를 쓰세요.' },
      ],
      easy: {
        note: 'Yes나 No로 대답할 수 있는 질문은 끝을 올려요.',
        items: [
          { type: 'choice', prompt: 'Do you like cats? 의 끝은?', options: ['↗ 올려요', '↘ 내려요'], answer: '↗ 올려요' },
          { type: 'choice', prompt: 'I like cats. 의 끝은?', options: ['↗ 올려요', '↘ 내려요'], answer: '↘ 내려요' },
          { type: 'short', prompt: 'Do you like ___? 빈칸을 채워 질문을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '알맞은 칸에 넣으면 초록 테두리가 생기고, 대화 고르기는 문장 수가 줄어요.',
      base: '다 나눈 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: 'Can I help you? 처럼 부탁하는 질문이 더해지고, 대화가 길어져요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 억양을 멋 내기로 여긴다 → 끝을 내린 질문은 친구가 질문인 줄 모른다는 것을 들려준다. ② 물음표만 보고 모두 올린다 → Yes/No로 답할 수 있는지 먼저 따진다. ③ 우리말처럼 끝을 길게 끈다. 무엇·어디 질문의 끝 내림은 대표 경향이며, 다정하게 물을 때 올리기도 한다는 것은 학생이 물을 때만 알려 준다.',
  }));

  // ───────────── 6차시 (practice) 억양: 같은 문장 다른 뜻 ─────────────
  L.push(lesson(6, '[6영02-01]', {
    title: '같은 문장을 억양으로 다르게 전하고 짝과 확인하기',
    objective: '같은 문장을 끝을 내려 알리는 뜻과 끝을 올려 놀라 되묻는 뜻으로 구분해 말하고, 짝이 알아들은 뜻을 확인해 억양을 고쳐 다시 말할 수 있다.',
    illustration: {
      prompt: PROMPT('a surprised child with a big question mark and a calm child with a period mark, standing at a school gate'),
      scene: SCENE("You're here. ↘  You're here? ↗", '알려요 · 놀라 되물어요', [{ motif: 'house', x: 90, y: 218, color: 'lavender' }, { motif: 'star', x: 390, y: 80 }]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '한 학생에게 "You\'re here. ↘"(왔구나), 다른 학생에게 눈을 크게 뜨고 "You\'re here? ↗"(정말 왔어?)라고 말한다. "글자는 똑같은데 선생님 뜻은 어떻게 달랐나요?" 지난 시간 끝 올리기는 질문이었는데 오늘은 놀람·되묻기에도 쓴다는 것을 알려 준다. 얼굴 표정만으로 뜻이 바뀐다고 하는 학생에게는 눈을 감고 들어도 뜻이 구분되는지 다시 들려준다.',
        student: '같은 문장을 두 가지로 듣고, 선생님이 어떤 뜻으로 말했는지 맞혀 봐요.',
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 상황에 맞는 억양 카드 짝 짓기', minutes: 12, tool: 'wordcards',
            teacher: '"이 상황에서 나는 알려 주는 걸까요, 믿기지 않아 되묻는 걸까요?" 상황 글을 소리 내어 읽고 그 마음으로 두 억양을 모두 말해 본 뒤 고르게 한다. 짝 지은 뒤에는 카드를 상황의 마음으로 소리 내어 말한다.',
            task: '왼쪽 상황에 알맞은 억양의 문장 카드를 놓아요(↘ = 끝을 내려 알림, ↗ = 끝을 올려 놀라 되물음). 그 마음을 살려 말해요.',
            levels: LV({ mode: 'match' }),
            items: [
              { prompt: "You're here. 를 상황에 맞는 억양 카드와 짝 지어 보세요.",
                toolOptions: { slots: [{ id: 'tell', label: '약속 장소에 친구가 온 것을 보고 "왔구나"' }, { id: 'wow', label: '아파서 못 온다던 친구를 보고 깜짝 놀라' }],
                  cards: [{ id: 'd', text: "You're here. ↘" }, { id: 'u', text: "You're here? ↗" }] },
                target: { match: { tell: 'd', wow: 'u' } }, difficulty: 0.15,
                hints: ['상황 속 내 마음이 "그렇구나"인지 "정말?"인지 먼저 말해 보세요.'],
                predict: { q: '글자가 같으면 뜻도 같을까요?', options: ['네, 같아요', '억양에 따라 달라요'], answer: 1 },
                conclude: '같은 글자라도 끝을 내리면 알리는 뜻, 끝을 올리면 놀라 되묻는 뜻이 돼요.' },
              { prompt: "It's raining. 을 상황에 맞는 억양 카드와 짝 지어 보세요.",
                toolOptions: { slots: [{ id: 'tell', label: '창밖을 보고 가족에게 날씨를 알려 줄 때' }, { id: 'wow', label: '맑던 하늘인데 친구가 비가 온대서 믿기지 않을 때' }],
                  cards: [{ id: 'd', text: "It's raining. ↘" }, { id: 'u', text: "It's raining? ↗" }] },
                target: { match: { tell: 'd', wow: 'u' } }, difficulty: 0.15,
                hints: ['알려 주는 사람인지, 들은 말을 믿기지 않아 되묻는 사람인지 보세요.'],
                levels: { challenge: { toolOptions: { cards: [{ id: 'd', text: "It's raining. ↘" }, { id: 'u', text: "It's raining? ↗" }, { id: 'x', text: "It's RAINING? ↘", why: '놀라 되물을 때 끝을 내리면 그냥 알았다는 말로 들려요.' }] } } } },
              { prompt: 'Ten dollars. 를 상황에 맞는 억양 카드와 짝 지어 보세요.',
                toolOptions: { slots: [{ id: 'tell', label: '가게 주인이 손님에게 값을 알려 줄 때' }, { id: 'wow', label: '생각보다 너무 비싸서 놀라 되물을 때' }],
                  cards: [{ id: 'd', text: 'Ten dollars. ↘' }, { id: 'u', text: 'Ten dollars? ↗' }] },
                target: { match: { tell: 'd', wow: 'u' } }, difficulty: 0.2,
                hints: ['누가 말하는지 보세요. 값을 아는 사람과 값을 처음 듣고 놀란 사람은 끝소리가 달라요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 뜻을 전하는 억양 고르고 짝이 알아들었는지 확인하기', minutes: 15, tool: 'emotion',
            teacher: '"짝이 내 뜻을 다르게 알아들었다면 누구 탓일까요? 억양을 고쳐 다시 말하면 돼요." 고른 뒤 짝에게 그 억양으로 말하고, 짝이 "놀랐어?" 또는 "알려 준 거야?"를 한국어로 확인해 준다. 뜻이 다르게 전해졌으면 억양을 더 분명히 하여 다시 말하게 한다.',
            task: '상황을 읽고 내 마음을 전하는 말을 골라요. 그 말을 짝에게 해 보고, 짝이 어떤 뜻으로 알아들었는지 확인해요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '짝이 시험에서 100점을 받았다고 해요. 깜짝 놀라 되묻는 말을 골라 보세요.',
                toolOptions: { mode: 'branch', situation: '짝이 "I got 100 points." 라고 해요. 정말 놀라워서 되묻고 싶어요.', ask: '어떻게 말할까요?', choices: [
                  { id: 'u', text: '100 points? ↗ (끝을 올려)', result: '짝이 "Yes!" 하고 웃으며 시험지를 보여 줘요.', mood: '기쁨' },
                  { id: 'd', text: '100 points. ↘ (끝을 내려)', result: '짝은 내가 별로 놀라지 않았다고 생각해요.', mood: '속상함', why: '끝을 내리면 "그렇구나" 하고 알았다는 말로 들려요.' }] },
                target: { choice: 'u' }, difficulty: 0.15,
                hints: ['놀라 되물을 때 끝소리를 어떻게 했는지 활동 1을 떠올려 보세요.', '고른 말을 소리 내어 해 보세요. 짝이 놀람으로 알아들을 수 있나요?', '정말 놀라 되물을 때는 끝을 올려 "100 points? ↗"라고 말해요.'] },
              { prompt: '동생이 배가 고프다고 해서 엄마께 알려 드려요. 알맞은 말을 골라 보세요.',
                toolOptions: { mode: 'branch', situation: '동생이 배가 고프대요. 엄마께 그 사실을 알려 드려요.', ask: '어떻게 말할까요?', choices: [
                  { id: 'u', text: "He's hungry? ↗ (끝을 올려)", result: '엄마가 "나한테 묻는 거니?" 하고 되물으세요.', mood: '걱정', why: '끝을 올리면 엄마께 묻는 말로 들려요.' },
                  { id: 'd', text: "He's hungry. ↘ (끝을 내려)", result: '엄마가 "그래, 간식 줄게." 하세요.', mood: '편안함' }] },
                target: { choice: 'd' }, difficulty: 0.2,
                hints: ['내가 묻는 것인지 알려 드리는 것인지 먼저 정해 보세요.', '고른 말을 들은 엄마가 무엇이라고 답하실지 결과를 읽어 보세요.', '사실을 알려 드릴 때는 끝을 내려 "He\'s hungry. ↘"라고 말해요.'] },
              { prompt: '친구가 내일 이사 간다고 해요. 믿기지 않아 되묻는 말을 골라 보세요.',
                toolOptions: { mode: 'branch', situation: '친구가 "I\'m moving tomorrow." 라고 해요. 처음 듣는 말이라 믿기지 않아요.', ask: '어떻게 말할까요?', choices: [
                  { id: 'd', text: 'Tomorrow. ↘ (끝을 내려)', result: '친구는 내가 이미 알고 있었다고 생각해요.', mood: '속상함', why: '끝을 내리면 이미 알던 일처럼 들려요.' },
                  { id: 'u', text: 'Tomorrow? ↗ (끝을 올려)', result: '친구가 "Yes, tomorrow." 하고 다시 알려 줘요.', mood: '놀람' },
                  { id: 'f', text: 'Tomorrow (아무 억양 없이)', result: '친구가 무슨 뜻인지 몰라 고개를 갸웃해요.', mood: '걱정', why: '억양이 없으면 내 마음이 전해지지 않아요.' }] },
                target: { choice: 'u' }, difficulty: 0.25,
                hints: ['처음 듣고 믿기지 않을 때의 끝소리를 떠올려 보세요.', '고른 말의 결과를 읽어 보세요. 친구가 내 마음을 알아들었나요?', '믿기지 않아 되물을 때는 끝을 올려 "Tomorrow? ↗"라고 말해요.'] },
              { prompt: '짝에게 It\'s Friday. 를 두 뜻 가운데 하나로 말해요. 짝은 "알려 준 거야, 놀란 거야?"를 맞히고, 틀리면 억양을 고쳐 다시 말해요. 바꾸어 한 뒤 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"짝이 내 뜻을 다르게 알아들었을 때 어떻게 고쳤나요?" 두세 명의 경험을 듣고 출구 질문을 푼다. 2번에서 표정을 고른 학생에게는 전화로 말할 때를 떠올리게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'wordcards', options: { mode: 'match', slots: [{ id: 'tell', label: '친구에게 오늘이 내 생일이라고 알려 줄 때' }, { id: 'wow', label: '오늘이 내 생일인 걸 친구가 알아서 놀랄 때' }], cards: [{ id: 'd', text: 'My birthday. ↘' }, { id: 'u', text: 'My birthday? ↗' }] }, prompt: 'My birthday. 를 상황에 맞는 억양 카드와 짝 지어 보세요.', target: { match: { tell: 'd', wow: 'u' } }, difficulty: 0.2 },
          { type: 'choice', prompt: '전화로 "You won? ↗" 하고 말했어요. 표정이 보이지 않아도 놀란 뜻이 전해지는 까닭은?', options: ['목소리가 커서', '끝을 올리는 억양 때문에', '문장이 짧아서'], answer: 1, difficulty: 0.2, explain: '억양만으로도 놀라 되묻는 뜻이 전해져요.' },
          { type: 'mood', prompt: '오늘 억양으로 뜻 전하기는 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '억양으로 뜻 바꾸기',
      items: [
        { type: 'table', prompt: '상황에 맞게 문장 끝에 ↗ 또는 ↘ 를 쓰세요.', columns: ['상황', '문장', '↗ / ↘'], cells: [['친구에게 숙제가 있다고 알려 줄 때', 'We have homework.', ''], ['숙제가 있다는 말에 깜짝 놀랄 때', 'We have homework?', ''], ['값을 알려 줄 때', 'Five dollars.', '']], answer: '↘ / ↗ / ↘' },
        { type: 'figure', wide: true, prompt: '상황에 맞는 말에 ○ 하고, 결과 칸에 친구가 어떻게 답할지 쓰세요.', tool: 'emotion', figures: [{ options: { mode: 'branch', situation: '친구가 "I saw a whale." 이라고 해요. 정말 놀라워요.', choices: [{ id: 'u', text: 'A whale? ↗' }, { id: 'd', text: 'A whale. ↘' }] }, caption: '' }], answer: '1번(A whale? ↗)' },
        { type: 'choice', prompt: '억양에 대해 바른 말에 ○ 하세요.', options: ['억양은 뜻과 상관없다', '같은 문장도 억양에 따라 뜻이 달라진다', '놀랄 때는 끝을 내린다'], answer: '같은 문장도 억양에 따라 뜻이 달라진다' },
        { type: 'short', prompt: '짝이 내 뜻을 다르게 알아들었을 때 어떻게 고쳐 말했는지 쓰세요.' },
      ],
      easy: {
        note: '알려 줄 때는 ↘, 놀라 되물을 때는 ↗.',
        items: [
          { type: 'choice', prompt: '놀라 되물을 때 알맞은 말에 ○ 하세요.', options: ['Really? ↗', 'Really. ↘'], answer: 'Really? ↗' },
          { type: 'choice', prompt: '사실을 알려 줄 때 알맞은 말에 ○ 하세요.', options: ["It's cold? ↗", "It's cold. ↘"], answer: "It's cold. ↘" },
          { type: 'short', prompt: '놀랐을 때 끝을 올려 말할 영어 한 낱말을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '짝 짓기에서 맞는 카드에 초록 테두리가 생겨요. 고르기는 결과를 보며 다시 골라요.',
      base: '짝 지은 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '억양 짝 짓기에 놀람을 끝 내림으로 적은 함정 카드가 섞여요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 억양은 뜻과 상관없는 꾸밈이라 여긴다 → 눈을 감고 들어도 뜻이 갈리는 것을 들려준다. ② 놀람을 큰 소리로만 나타낸다 → 크기보다 끝 올림. ③ 짝이 잘못 알아들으면 짝 탓을 한다 → 내 억양을 고쳐 다시 말하는 것이 이 차시의 목표다. 활동 2의 고르기는 마음 날씨 교구를 영어 억양에 빌려 쓴 것이라 힌트를 문항마다 따로 적었다.',
  }));

  // ───────────── 7차시 (extend) 억양: 고르는 질문·늘어놓기 ─────────────
  L.push(lesson(7, '[6영02-01]', {
    title: '고르는 질문과 늘어놓는 말의 억양 살리기',
    objective: '둘 가운데 고르게 하는 질문과 여러 가지를 늘어놓는 말에서 앞은 올리고 마지막은 내려 말하고, 억양에 맞게 하나를 골라 답할 수 있다.',
    illustration: {
      prompt: PROMPT('a child holding a cup of milk and a cup of juice, asking a friend to choose, with rising and falling arrows'),
      scene: SCENE('milk ↗ or juice ↘?', '앞은 올리고 끝은 내려요', [{ motif: 'flower', x: 80, y: 228, color: 'peach' }, { motif: 'tree', x: 420, y: 214 }]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '우유와 주스 그림을 들고 "Do you want milk ↗ or juice ↘?"라고 묻는다. 한 학생이 Yes라고 답하면 "Yes는 무엇을 고른 걸까요?" 하고 웃으며 되묻는다. "이 질문은 끝을 내렸어요. 그래서 하나를 골라 답해 달라는 뜻이에요." 지난 시간까지 배운 ↗↘가 질문 안에서도 섞인다는 것을 알려 준다.',
        student: '선생님 질문에 대답해 봐요. Yes로 답해야 할까요, 하나를 골라 답해야 할까요?',
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 덩이마다 올릴지 내릴지 나누기', minutes: 13, tool: 'wordcards',
            teacher: '"고르는 질문은 앞 보기에서 올리고, 마지막 보기에서 내려요. 늘어놓을 때도 마찬가지예요. 아직 더 있다는 표시로 올리고, 끝났다는 표시로 내려요." 손을 올렸다 내리며 문장을 함께 말한다. 모든 덩이를 올리는 학생에게 "그럼 친구는 말이 언제 끝났는지 알 수 있을까요?"라고 묻는다.',
            task: '문장을 쉼표·or 앞뒤 덩이로 나눈 카드예요. 덩이마다 끝을 올릴지(↗) 내릴지(↘) 칸에 나누고 손을 움직이며 말해요.',
            levels: LV({ mode: 'sort', shuffle: false, slots: TONE }),
            items: [
              { prompt: 'Is it a cat or a dog? / Do you like summer or winter? 덩이마다 ↗ 칸과 ↘ 칸에 나누어 보세요.',
                toolOptions: { cards: [{ id: 'k1', text: 'Is it a cat' }, { id: 'k2', text: 'or a dog?' }, { id: 'k3', text: 'Do you like summer' }, { id: 'k4', text: 'or winter?' }] },
                target: { sort: { up: ['k1', 'k3'], down: ['k2', 'k4'] } }, difficulty: 0.2,
                hints: ['고를 거리가 아직 남았는지, 마지막 보기인지 덩이마다 따져 보세요.'],
                predict: { q: '고르는 질문의 마지막 보기는 어떻게 말할까요?', options: ['끝을 올려요', '끝을 내려요'], answer: 1 },
                conclude: '고르는 질문은 앞 보기에서 올리고 마지막 보기에서 내려, 하나를 골라 달라는 뜻을 전해요.' },
              { prompt: 'I like apples, bananas, and grapes. 덩이마다 ↗ 칸과 ↘ 칸에 나누어 보세요.',
                toolOptions: { cards: [{ id: 'k1', text: 'I like apples,' }, { id: 'k2', text: 'bananas,' }, { id: 'k3', text: 'and grapes.' }] },
                target: { sort: { up: ['k1', 'k2'], down: ['k3'] } }, difficulty: 0.2,
                hints: ['늘어놓는 말은 아직 더 있으면 올리고, 끝나면 내려요. and 뒤가 어디인지 보세요.'] },
              { prompt: 'We have English, math, science, and music today. 덩이마다 ↗ 칸과 ↘ 칸에 나누어 보세요.',
                toolOptions: { cards: [{ id: 'k1', text: 'We have English,' }, { id: 'k2', text: 'math,' }, { id: 'k3', text: 'science,' }, { id: 'k4', text: 'and music today.' }] },
                target: { sort: { up: ['k1', 'k2', 'k3'], down: ['k4'] } }, difficulty: 0.25,
                hints: ['과목이 몇 개 나오는지 세어 보고, 마지막 과목이 어느 덩이에 있는지 찾아요.'],
                levels: { challenge: { prompt: 'Would you like tea, juice, or water? / I can sing and dance. 덩이마다 ↗ 칸과 ↘ 칸에 나누어 보세요.',
                  toolOptions: { cards: [{ id: 'k1', text: 'Would you like tea,' }, { id: 'k2', text: 'juice,' }, { id: 'k3', text: 'or water?' }, { id: 'k4', text: 'I can sing' }, { id: 'k5', text: 'and dance.' }] },
                  target: { sort: { up: ['k1', 'k2', 'k4'], down: ['k3', 'k5'] } } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 억양을 듣고 알맞게 답하기', minutes: 14, tool: 'wordcards',
            teacher: '"끝을 내린 고르는 질문에는 하나를 골라 답하고, 끝까지 올린 질문에는 Yes나 No로 답해요." 같은 Do you want tea or juice?를 두 가지로 들려주고 대답이 어떻게 달라지는지 견준다. 짝 활동에서는 묻는 사람이 억양을 정해 묻고, 답하는 사람은 억양에 맞게 답한다.',
            task: '묻는 말의 억양(↗↘)을 보고 알맞은 대답 하나를 바구니에 넣어요. 짝과 억양을 바꾸어 물으며 대답해요.',
            levels: LV(PICK('알맞은 대답')),
            items: [
              { prompt: 'A: Do you want tea ↗ or juice ↘? 알맞은 대답 하나를 골라 보세요.',
                toolOptions: { cards: [{ id: 'r1', text: 'Juice, please.' }, { id: 'r2', text: 'Yes, please.', why: '끝을 내린 고르는 질문에는 Yes가 아니라 하나를 골라 답해요.' }, { id: 'r3', text: 'I am ten.', why: '묻는 말과 상관없는 대답이에요.' }] },
                target: { pick: ['r1'] }, difficulty: 0.2,
                hints: ['질문의 마지막 끝소리가 무엇을 해 달라는 신호인지 떠올려 보세요.'] },
              { prompt: 'A: Is your bag black ↗ or white ↘? 알맞은 대답 하나를 골라 보세요.',
                toolOptions: { cards: [{ id: 'r1', text: 'No, it isn\'t.', why: '두 가지 가운데 하나를 골라 달라는 질문이에요.' }, { id: 'r2', text: 'It\'s white.' }, { id: 'r3', text: 'It\'s my bag.', why: '무엇을 골랐는지 알려 주지 않았어요.' }] },
                target: { pick: ['r2'] }, difficulty: 0.2,
                hints: ['보기 두 가지 가운데 하나가 들어간 대답을 찾아보세요.'] },
              { prompt: 'A: Do you want tea or juice ↗ (끝까지 올림)? 알맞은 대답 하나를 골라 보세요.',
                toolOptions: { cards: [{ id: 'r1', text: 'Juice, please.', why: '끝까지 올리면 "마실 것 줄까?"라는 예/아니요 질문이에요.' }, { id: 'r2', text: 'Yes, please.' }, { id: 'r3', text: 'At home.', why: '어디인지 묻지 않았어요.' }] },
                target: { pick: ['r2'] }, difficulty: 0.4,
                hints: ['이번에는 끝을 내리지 않았어요. 5차시에 끝을 올린 질문에는 어떻게 답했는지 떠올려 보세요.'] },
              { prompt: '짝에게 Do you like ___ or ___? 를 억양 하나를 정해 물어요(끝을 내리거나 끝까지 올리기). 짝은 억양에 맞게 답해요. 네 번 주고받은 뒤 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"늘어놓는 말에서 끝을 내리면 듣는 사람은 무엇을 알게 되나요?" 말이 끝났다는 것을 알게 된다는 말을 듣고 출구 질문을 푼다. 2번에서 Yes를 고른 학생과는 질문 끝소리를 다시 들어 본다. 다음 시간부터는 이 억양으로 친구를 소개한다.',
        exitTicket: [
          { type: 'tool', tool: 'wordcards', options: { mode: 'sort', shuffle: false, slots: TONE, cards: [{ id: 'k1', text: 'I have a pen,' }, { id: 'k2', text: 'a ruler,' }, { id: 'k3', text: 'and an eraser.' }] }, prompt: 'I have a pen, a ruler, and an eraser. 덩이마다 ↗ 칸과 ↘ 칸에 나누어 보세요.', target: { sort: { up: ['k1', 'k2'], down: ['k3'] } }, difficulty: 0.2 },
          { type: 'choice', prompt: 'A: Is it Monday ↗ or Tuesday ↘? 에 알맞은 대답은?', options: ['Yes, it is.', "It's Tuesday.", 'At nine.'], answer: 1, difficulty: 0.2, explain: '끝을 내린 고르는 질문에는 하나를 골라 답해요.' },
          { type: 'mood', prompt: '오늘 억양 살려 말하기는 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '고르는 질문, 늘어놓는 말',
      items: [
        { type: 'table', prompt: '덩이마다 ↗ 또는 ↘ 를 쓰세요.', columns: ['덩이', '↗ / ↘'], cells: [['Do you want rice', ''], ['or bread?', ''], ['I like red,', ''], ['blue,', ''], ['and green.', '']], answer: '↗ / ↘ / ↗ / ↗ / ↘' },
        { type: 'choice', prompt: 'A: Is it hot ↗ or cold ↘? 에 알맞은 대답에 ○ 하세요.', options: ['Yes.', "It's cold.", 'No.'], answer: "It's cold." },
        { type: 'choice', prompt: '늘어놓는 말의 마지막 덩이에서 끝을 내리는 까닭에 ○ 하세요.', options: ['멋있게 들리려고', '말이 끝났다는 것을 알리려고', '질문하려고'], answer: '말이 끝났다는 것을 알리려고' },
        { type: 'short', prompt: '내가 좋아하는 음식 세 가지를 늘어놓는 문장을 쓰고, 덩이마다 ↗↘ 를 표시하세요.' },
      ],
      easy: {
        note: '더 있으면 ↗, 마지막이면 ↘.',
        items: [
          { type: 'choice', prompt: 'milk or juice? 에서 juice의 끝은?', options: ['↗', '↘'], answer: '↘' },
          { type: 'choice', prompt: 'I like cats, dogs, and birds. 에서 dogs의 끝은?', options: ['↗', '↘'], answer: '↗' },
          { type: 'short', prompt: 'Do you like ___ or ___? 빈칸을 채워 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '알맞은 칸에 넣으면 초록 테두리가 생기고, 틀린 대답을 넣으면 까닭을 말해 주고 되돌려요.',
      base: '다 나눈 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '고르는 질문과 늘어놓는 말이 한 문항에 섞이고, 보기가 세 개인 질문이 나와요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 모든 덩이를 올리거나 모두 내린다 → "아직 더 있어 ↗, 끝 ↘" 손동작. ② 고르는 질문에 Yes/No로 답한다 → 질문의 마지막 끝소리를 다시 들려준다. ③ 끝까지 올린 Do you want tea or juice?는 "마실 것 줄까?"라는 예/아니요 질문이 된다 — 도전 문항으로만 다루고 억지로 외우게 하지 않는다. 이 차시로 억양 부분(5~7차시)을 마친다.',
  }));

  // ───────────── 8차시 (core) 친구 소개 ─────────────
  const INTRO_SLOTS = [{ id: 'who', label: '누구인지(이름·나이)' }, { id: 'like', label: '좋아하는 것' }, { id: 'can', label: '잘하는 것' }];
  L.push(lesson(8, '[6영02-04]', {
    title: '짝을 세 문장으로 이어 소개하기',
    objective: '짝의 이름·나이에 좋아하는 것과 잘하는 것을 보태어 소개 문장을 세 개 이상 이어 말할 수 있다.',
    illustration: {
      prompt: PROMPT('a child presenting a smiling friend to the class, with three small paper speech bubbles showing a soccer ball, a music note and a name tag'),
      scene: SCENE('This is my friend Jiho.', '이름 + 좋아하는 것 + 잘하는 것', [{ motif: 'ball', x: 80, y: 214 }, { motif: 'star', x: 400, y: 70, color: 'buttercup' }]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '인형을 들고 "This is my friend Dori. He is eleven." 까지만 말하고 멈춘다. "도리에 대해 더 알고 싶은 것이 있나요?" 학생들이 "무엇을 좋아해요?", "무엇을 잘해요?"라고 말하면 칠판에 이름·나이 / 좋아하는 것 / 잘하는 것 세 칸을 그린다. "이름과 나이만 들으면 친구가 어떤 사람인지 알 수 있을까요?"라고 물어 소개에는 그 사람다운 정보가 들어가야 한다는 것을 끌어낸다.',
        student: '선생님의 인형 소개를 듣고, 더 알고 싶은 것을 말해 봐요.',
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 소개 문장을 알려 주는 것에 따라 나누기', minutes: 12, tool: 'wordcards',
            teacher: '"이 문장은 친구의 무엇을 알려 주나요? 이름인가요, 좋아하는 것인가요, 잘하는 것인가요?" likes가 들어 있으면 좋아하는 것, can이 들어 있으면 잘하는 것이라는 단서를 학생이 스스로 찾게 한다. 나눈 뒤 "칸이 비어 있는 소개는 무엇이 빠진 걸까요?"라고 물어, 이름·나이 칸에만 문장이 몰리는 소개가 왜 아쉬운지 말하게 한다.',
            task: '친구를 소개하는 문장 카드를 무엇을 알려 주는지에 따라 세 칸에 나누어요. 나눈 문장을 소리 내어 읽어요.',
            levels: LV({ mode: 'sort', shuffle: false, slots: INTRO_SLOTS }),
            items: [
              { prompt: '지호를 소개하는 문장이에요. 무엇을 알려 주는지에 따라 나누어 보세요.',
                toolOptions: { cards: [{ id: 's1', text: 'This is my friend Jiho.' }, { id: 's2', text: 'He is eleven.' }, { id: 's3', text: 'He likes soccer.' }, { id: 's4', text: 'He can sing well.' }] },
                target: { sort: { who: ['s1', 's2'], like: ['s3'], can: ['s4'] } }, difficulty: 0.15,
                hints: ['문장 속에서 likes와 can을 찾아보세요. 둘 다 없는 문장은 누구인지를 알려 줘요.'] },
              { prompt: '유나를 소개하는 문장이에요. 무엇을 알려 주는지에 따라 나누어 보세요.',
                toolOptions: { cards: [{ id: 's1', text: 'This is Yuna.' }, { id: 's2', text: 'She likes cats.' }, { id: 's3', text: 'She can draw well.' }, { id: 's4', text: 'She likes noodles.' }, { id: 's5', text: 'She can ride a bike.' }] },
                target: { sort: { who: ['s1'], like: ['s2', 's4'], can: ['s3', 's5'] } }, difficulty: 0.2,
                hints: ['한 칸에 문장이 두 개 들어갈 수도 있어요. 문장마다 likes인지 can인지 하나씩 짚어 보세요.'] },
              { prompt: '댄을 소개하는 문장이에요. 소개 문장만 알맞은 칸에 나누어 보세요.',
                toolOptions: { cards: [{ id: 's1', text: 'This is my friend Dan.' }, { id: 's2', text: 'He is twelve.' }, { id: 's3', text: 'He likes baseball.' }, { id: 's4', text: 'He can cook ramyeon.' }] },
                target: { sort: { who: ['s1', 's2'], like: ['s3'], can: ['s4'] } }, difficulty: 0.25,
                hints: ['문장마다 친구의 무엇을 알려 주는지 우리말로 먼저 말해 보세요.'],
                levels: { challenge: { prompt: '댄을 소개하는 말이에요. 소개 문장만 알맞은 칸에 나누고, 소개가 아닌 말은 카드 칸에 남겨 보세요.',
                  toolOptions: { cards: [{ id: 's1', text: 'This is my friend Dan.' }, { id: 's2', text: 'He is twelve.' }, { id: 's3', text: 'He likes baseball.' }, { id: 's4', text: 'He can cook ramyeon.' }, { id: 'sx', text: 'Do you like baseball?', why: '친구에게 묻는 말이라 댄을 소개하는 문장이 아니에요.' }] },
                  target: { sort: { who: ['s1', 's2'], like: ['s3'], can: ['s4'] } } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 빈칸을 채워 소개 말 완성하고 짝 소개하기', minutes: 15, tool: 'wordcards',
            teacher: '"빈칸 앞뒤를 소리 내어 읽어 보세요. She likes 다음에는 무엇이 와야 말이 될까요?" 카드를 하나씩 넣어 읽어 보고 말이 되는 것을 고르게 한다. He like처럼 s를 빠뜨리는 학생에게 "He, She 뒤에는 likes처럼 s가 붙어요."라고 짚는다. 마지막 짝 소개는 모둠(4명) 안에서 하고, 듣는 사람은 세 칸 가운데 몇 칸을 들었는지 손가락으로 보여 준다.',
            task: '소개 말의 빈칸에 알맞은 카드를 넣어 완성해요. 완성한 말을 읽은 뒤 내 짝을 모둠 친구에게 소개해요.',
            levels: LV({ mode: 'fill', shuffle: false }),
            items: [
              { prompt: '미나를 소개하는 말이에요. 빈칸에 알맞은 카드를 넣어 보세요.',
                toolOptions: { slots: [{ id: 'f1', label: 'This is my friend ___.' }, { id: 'f2', label: 'She is ___ years old.' }, { id: 'f3', label: 'She likes ___.' }, { id: 'f4', label: 'She can ___ well.' }], cards: ['Mina', 'eleven', 'music', 'swim'] },
                target: { fill: { f1: 'Mina', f2: 'eleven', f3: 'music', f4: 'swim' } }, difficulty: 0.15,
                hints: ['빈칸 앞의 낱말을 보세요. years old 앞에는 수, can 뒤에는 하는 일이 와요.'] },
              { prompt: '사촌 레오를 소개하는 말이에요. 빈칸에 알맞은 카드를 넣어 보세요.',
                toolOptions: { slots: [{ id: 'f1', label: 'This is ___.' }, { id: 'f2', label: 'He ___ eleven.' }, { id: 'f3', label: 'He ___ pizza.' }, { id: 'f4', label: 'He ___ play the drums.' }], cards: ['my cousin Leo', 'is', 'likes', 'can'] },
                target: { fill: { f1: 'my cousin Leo', f2: 'is', f3: 'likes', f4: 'can' } }, difficulty: 0.25,
                hints: ['나이를 말할 때, 좋아하는 것을 말할 때, 할 수 있는 것을 말할 때 쓰는 낱말이 서로 달라요.'],
                levels: { challenge: { prompt: '사촌 레오를 소개하는 말이에요. 빈칸에 알맞은 카드를 넣고, 맞지 않는 카드는 남겨 보세요.',
                  toolOptions: { cards: ['my cousin Leo', 'is', 'likes', 'can', { id: 'like', text: 'like', why: 'He 뒤에서는 like에 s를 붙여 likes라고 말해요.' }] } } } },
              { prompt: '하나를 소개하는 말이에요. 빈칸에 알맞은 카드를 넣어 보세요.',
                toolOptions: { slots: [{ id: 'f1', label: 'This is my friend ___.' }, { id: 'f2', label: 'She is ___ years old.' }, { id: 'f3', label: 'Her favorite color is ___.' }], cards: ['Hana', 'ten', 'yellow'] },
                target: { fill: { f1: 'Hana', f2: 'ten', f3: 'yellow' } }, difficulty: 0.1,
                hints: ['빈칸에 카드를 하나씩 넣고 소리 내어 읽어 보세요. 말이 되는 자리가 하나씩 있어요.'] },
              { prompt: '내 짝을 세 문장 이상으로 모둠 친구에게 소개해요(이름, 좋아하는 것, 잘하는 것). 모두 소개한 뒤 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"오늘 친구를 소개할 때 무엇을 넣었나요?" 두세 명에게 들은 뒤 칠판의 세 칸을 다시 가리키고 출구 질문을 푼다. 출구 1번에서 이름 문장을 고른 학생은 다음 시간에 짝과 세 칸 채우기를 한 번 더 한다.',
        exitTicket: [
          { type: 'tool', tool: 'wordcards', options: { mode: 'pick', basket: '더 알려 주는 문장', shuffle: false, cards: [{ id: 'e1', text: 'This is Tom.' }, { id: 'e2', text: 'He is ten.' }, { id: 'e3', text: 'He likes robots.' }] }, prompt: '톰 소개에서 이름·나이 말고 톰에 대해 더 알려 주는 문장을 골라 보세요.', target: { pick: ['e3'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '친구를 가장 잘 소개한 것은 무엇일까요?', options: ['This is Sena. She is eleven.', 'This is Sena. She likes tennis. She can play the piano.', 'Sena. Eleven.'], answer: 1, difficulty: 0.2, explain: '이름에 좋아하는 것과 잘하는 것을 보태어 세 문장으로 소개했어요.' },
          { type: 'mood', prompt: '오늘 친구 소개하기는 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '친구 소개 세 문장',
      items: [
        { type: 'table', prompt: '문장이 알려 주는 것에 ○ 하세요.', columns: ['문장', '이름·나이', '좋아하는 것', '잘하는 것'], cells: [['This is my friend Ara.', '', '', ''], ['She likes dogs.', '', '', ''], ['She can jump rope well.', '', '', ''], ['She is twelve.', '', '', '']], answer: '이름·나이 / 좋아하는 것 / 잘하는 것 / 이름·나이' },
        { type: 'choice', prompt: 'He ___ apples. 빈칸에 알맞은 것에 ○ 하세요.', options: ['like', 'likes', 'can'], answer: 'likes' },
        { type: 'choice', prompt: '이름과 나이만 말한 소개에 더 넣으면 좋은 것에 ○ 하세요.', options: ['친구가 좋아하는 것', '친구의 전화번호', '친구의 몸무게'], answer: '친구가 좋아하는 것' },
        { type: 'short', prompt: '내 짝을 소개하는 문장 세 개를 쓰세요. (This is ___. He/She likes ___. He/She can ___.)' },
      ],
      easy: {
        note: '세 칸을 채워요: 누구인지 → 좋아하는 것(likes) → 잘하는 것(can).',
        items: [
          { type: 'choice', prompt: 'She likes cats. 는 무엇을 알려 주나요?', options: ['이름', '좋아하는 것', '잘하는 것'], answer: '좋아하는 것' },
          { type: 'choice', prompt: 'He can swim. 은 무엇을 알려 주나요?', options: ['나이', '좋아하는 것', '잘하는 것'], answer: '잘하는 것' },
          { type: 'short', prompt: 'This is my friend ___. He/She likes ___. 빈칸을 채워 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 넣으면 초록 테두리가 생기고, 틀린 칸에 넣으면 까닭을 말해 주고 되돌려요.',
      base: '다 나누거나 채운 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '소개가 아닌 질문 카드와 s가 빠진 like 카드가 섞여 있어 가려내야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 이름과 나이만 말하고 끝낸다 → 칠판 세 칸(누구·좋아함·잘함)을 소개 내내 가리킨다. ② He/She 뒤에 like·have를 그대로 쓴다 → 이 차시에서는 likes 하나만 짚고 has는 10차시에서 다룬다. ③ 짝의 개인 정보(사는 곳 주소·전화번호)를 말하려 한다 → 좋아하는 것·잘하는 것만 소개한다고 미리 약속한다. 소개 문장에도 1~4차시의 힘줄 낱말(이름·좋아하는 것)을 살려 말하게 한다.',
  }));

  // ───────────── 9차시 (practice) 되물음에 한 문장 보태기 ─────────────
  L.push(lesson(9, '[6영02-04]', {
    title: '되묻는 말에 한 문장 보태어 답하기',
    objective: '친구 소개를 들은 사람이 되물으면 묻는 것에 맞는 정보를 담은 한 문장을 보태어 답할 수 있다.',
    illustration: {
      prompt: PROMPT('two children talking while a third child raises a hand with a question mark bubble, and an answer bubble adds a small turtle picture'),
      scene: SCENE('Does he have a pet?', '되물으면 한 문장 더', [{ motif: 'tree', x: 70, y: 214 }, { motif: 'bird', x: 250, y: 70 }]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '지난 시간 소개를 한 학생에게 다시 하게 한 뒤 선생님이 "Can he swim?" 하고 되묻는다. 학생이 "Yes."라고만 답하면 "예만 들으니 조금 아쉬워요. 한 문장을 보태면 어떨까요?"라고 하고 "Yes, he can swim very fast."를 들려준다. "되물음에 답할 때 무엇이 더 들어갔나요?" 물어, 물은 것에 맞는 정보를 한 문장으로 보태면 대화가 이어진다는 것을 끌어낸다.',
        student: '친구 소개를 듣고 선생님이 되물으면, 한 낱말 대답과 한 문장 대답을 견주어 봐요.',
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 되묻는 말과 보태는 대답 짝 짓기', minutes: 13, tool: 'wordcards',
            teacher: '"되묻는 말의 첫 낱말을 먼저 보세요. What, Can, Does, Where가 무엇을 묻는지 말해 볼까요?" 묻는 말이 바뀌면 보태는 문장도 바뀐다는 것을 확인한다. 소개에 이미 나온 말(He likes sports.)을 다시 고르는 학생에게 "친구가 더 알고 싶은 것은 무엇이었나요?"라고 되묻는다.',
            task: '친구 소개를 읽고, 왼쪽의 되묻는 말에 알맞게 보태는 대답 카드를 옆에 놓아요. 짝과 묻고 답하며 읽어요.',
            levels: LV({ mode: 'match', shuffle: false }),
            items: [
              { prompt: '"This is my friend Minho. He likes sports." 되묻는 말마다 알맞은 대답을 짝 지어 보세요.',
                toolOptions: { slots: [{ id: 'q1', label: 'What sport does he like?' }, { id: 'q2', label: 'Can he swim?' }, { id: 'q3', label: 'Does he have a pet?' }],
                  cards: [{ id: 'c1', text: 'He likes basketball.' }, { id: 'c2', text: 'Yes, he can swim very fast.' }, { id: 'c3', text: 'Yes, he has a turtle.' }] },
                target: { match: { q1: 'c1', q2: 'c2', q3: 'c3' } }, difficulty: 0.15,
                hints: ['되묻는 말에서 sport, swim, pet 같은 낱말을 찾고, 대답 카드에서 그 물음에 답하는 낱말을 찾아요.'] },
              { prompt: '"This is Sujin. She is in my class." 되묻는 말마다 알맞은 대답을 짝 지어 보세요.',
                toolOptions: { slots: [{ id: 'q1', label: 'What does she like?' }, { id: 'q2', label: 'Where does she live?' }, { id: 'q3', label: 'What can she do well?' }],
                  cards: [{ id: 'c1', text: 'She likes drawing animals.' }, { id: 'c2', text: 'She lives near the park.' }, { id: 'c3', text: 'She can play the flute.' }] },
                target: { match: { q1: 'c1', q2: 'c2', q3: 'c3' } }, difficulty: 0.2,
                hints: ['묻는 말과 대답에 같은 낱말(like, live, can)이 들어 있는지 견주어 보세요.'] },
              { prompt: '"This is my cousin Amy." 되묻는 말마다 알맞은 대답을 짝 지어 보세요.',
                toolOptions: { slots: [{ id: 'q1', label: 'How old is she?' }, { id: 'q2', label: 'Where is she from?' }, { id: 'q3', label: 'What is her favorite food?' }],
                  cards: [{ id: 'c1', text: 'She is nine years old.' }, { id: 'c2', text: 'She is from Australia.' }, { id: 'c3', text: 'Her favorite food is spaghetti.' }] },
                target: { match: { q1: 'c1', q2: 'c2', q3: 'c3' } }, difficulty: 0.25,
                hints: ['How old는 나이, Where ... from은 어느 나라에서 왔는지, favorite food는 가장 좋아하는 음식을 물어요.'],
                levels: { challenge: { prompt: '"This is my cousin Amy." 되묻는 말마다 알맞은 대답을 짝 짓고, 어디에도 맞지 않는 카드는 남겨 보세요.',
                  toolOptions: { cards: [{ id: 'c1', text: 'She is nine years old.' }, { id: 'c2', text: 'She is from Australia.' }, { id: 'c3', text: 'Her favorite food is spaghetti.' }, { id: 'cx', text: 'She likes Australia.', why: '좋아하는 곳을 말한 문장이에요. 어느 나라에서 왔는지 묻는 말의 대답이 아니에요.' }] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 정보를 보태는 대답 하나 고르고 짝과 주고받기', minutes: 14, tool: 'wordcards',
            teacher: '"이 대답을 들은 친구가 새로 알게 된 것이 있나요?" Yes. 나 After school. 처럼 물은 말을 되풀이하거나 한 낱말로 끝나는 대답은 새 정보가 없다는 것을 짚는다. 짝 활동에서는 한 사람이 자기 짝을 소개하고, 다른 사람이 되묻는 말을 세 번 하면 소개한 사람이 한 문장씩 보태어 답한다.',
            task: '되묻는 말에 알맞게 답하면서 정보를 한 문장 보태는 대답 카드 하나만 바구니에 넣어요.',
            levels: LV(PICK('보태는 대답')),
            items: [
              { prompt: '되묻는 말: Does Junho have a pet? 정보를 보태어 알맞게 답한 카드 하나를 골라 보세요.',
                toolOptions: { cards: [{ id: 'c1', text: 'Yes.', why: '한 낱말로 끝나서 친구가 새로 알게 된 것이 없어요.' }, { id: 'c2', text: 'Yes, he has a small dog.' }, { id: 'c3', text: 'He is eleven.', why: '나이는 묻지 않았어요.' }, { id: 'c4', text: 'He likes pizza.', why: '좋아하는 음식은 묻지 않았어요.' }] },
                target: { pick: ['c2'] }, difficulty: 0.15,
                hints: ['물은 것에 맞게 답했는지, 그리고 새로 알려 주는 것이 있는지 두 가지를 견주어 보세요.'] },
              { prompt: '되묻는 말: What does Mina do after school? 정보를 보태어 알맞게 답한 카드 하나를 골라 보세요.',
                toolOptions: { cards: [{ id: 'c1', text: 'She goes to a piano class.' }, { id: 'c2', text: 'Yes, she does.', why: 'What으로 물은 말에는 Yes나 No로 답하지 않아요.' }, { id: 'c3', text: 'After school.', why: '물은 말을 되풀이했을 뿐이에요.' }, { id: 'c4', text: 'She is my friend.', why: '방과 후에 무엇을 하는지 알려 주지 않아요.' }] },
                target: { pick: ['c1'] }, difficulty: 0.2,
                hints: ['What으로 물으면 무엇을 하는지 알려 주는 문장으로 답해요.'] },
              { prompt: '되묻는 말: Can Leo speak Korean? 정보를 보태어 알맞게 답한 카드 하나를 골라 보세요.',
                toolOptions: { cards: [{ id: 'c1', text: 'No.', why: '한 낱말로 끝나서 대화가 이어지지 않아요.' }, { id: 'c2', text: 'He can.', why: '무엇을 할 수 있는지 빠져서 새로 알려 주는 것이 없어요.' }, { id: 'c3', text: 'Yes, he can speak Korean a little.' }, { id: 'c4', text: 'He likes Korea.', why: '말할 수 있는지 묻는 말의 대답이 아니에요.' }] },
                target: { pick: ['c3'] }, difficulty: 0.25,
                hints: ['물은 것에 맞게 답했는지, 그리고 새로 알려 주는 정보가 있는지 두 가지를 견주어 보세요.'],
                levels: { challenge: { prompt: '되묻는 말: Does Leo have any brothers? 정보를 보태어 알맞게 답한 카드 하나를 골라 보세요.',
                  toolOptions: { cards: [{ id: 'c1', text: 'Yes.', why: '한 낱말로 끝나서 몇 명인지 알 수 없어요.' }, { id: 'c2', text: 'Yes, he has two older brothers.' }, { id: 'c3', text: 'He has.', why: '무엇을 가졌는지 빠져서 말이 끝나지 않았어요.' }, { id: 'c4', text: 'Yes, he likes brothers.', why: '형제가 있는지 물었는데 좋아한다고 답했어요.' }] }, target: { pick: ['c2'] } } } },
              { prompt: '한 사람이 짝을 소개하면, 다른 사람이 되묻는 말을 세 번 해요. 소개한 사람은 한 문장씩 보태어 답해요. 역할을 바꾼 뒤 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"되묻는 말에 Yes. 한 낱말로만 답하면 친구는 어떤 기분일까요? 어떻게 하면 대화가 이어졌나요?" 학생 말을 듣고 출구 질문을 푼다. 출구 1번에서 Yes, she does. 를 고른 학생과는 What으로 묻는 말과 Does로 묻는 말을 한 번 더 견주어 본다.',
        exitTicket: [
          { type: 'tool', tool: 'wordcards', options: { mode: 'pick', basket: '보태는 대답', shuffle: false, cards: [{ id: 'e1', text: 'Yes, she does.' }, { id: 'e2', text: 'She likes purple.' }, { id: 'e3', text: 'Color?' }] }, prompt: '되묻는 말: What color does Hana like? 알맞게 답한 카드 하나를 골라 보세요.', target: { pick: ['e2'] }, difficulty: 0.15 },
          { type: 'choice', prompt: 'A: Can your friend cook? 에 정보를 보태어 답한 것은 무엇일까요?', options: ['Yes.', 'Yes, he can make fried rice.', 'He is my friend.'], answer: 1, difficulty: 0.2, explain: '할 수 있다고 답하고 무엇을 만들 수 있는지 한 문장으로 보탰어요.' },
          { type: 'mood', prompt: '오늘 되묻고 답하기는 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '한 문장 보태어 답하기',
      items: [
        { type: 'table', prompt: '되묻는 말에 한 문장을 보태어 대답을 쓰세요.', columns: ['되묻는 말', '내 대답'], cells: [['What does your friend like?', ''], ['Can your friend swim?', ''], ['Does your friend have a pet?', '']] },
        { type: 'choice', prompt: 'Where does she live? 에 알맞은 대답에 ○ 하세요.', options: ['Yes, she does.', 'She lives near the library.', 'She likes the library.'], answer: 'She lives near the library.' },
        { type: 'choice', prompt: '되묻는 말에 답할 때 좋은 방법에 ○ 하세요.', options: ['Yes나 No 한 낱말로 끝낸다', '물은 것에 맞는 정보를 한 문장 보탠다', '물은 말을 그대로 되풀이한다'], answer: '물은 것에 맞는 정보를 한 문장 보탠다' },
        { type: 'short', prompt: '내 짝에게 되묻고 싶은 말 하나와, 짝이 한 문장을 보태어 답한 말을 쓰세요.' },
      ],
      easy: {
        note: 'What이면 무엇을, Can이면 할 수 있는지, Does ... have면 가졌는지 답해요.',
        items: [
          { type: 'choice', prompt: 'Can he run fast? 에 알맞은 대답에 ○ 하세요.', options: ['Yes, he can run very fast.', 'He likes apples.'], answer: 'Yes, he can run very fast.' },
          { type: 'choice', prompt: 'What does she like? 에 알맞은 대답에 ○ 하세요.', options: ['Yes, she does.', 'She likes tennis.'], answer: 'She likes tennis.' },
          { type: 'short', prompt: 'Yes, he has a ___. 빈칸을 채워 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 짝에 초록 테두리가 생기고, 한 낱말 대답을 고르면 까닭을 말해 주고 되돌려요.',
      base: '다 짝 지은 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '어디에도 맞지 않는 함정 대답이 섞이고, 형제 수를 보태는 새 질문이 나와요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 되물음에 Yes/No 한 낱말로만 답한다 → "한 문장 더" 손가락 하나를 들어 보인다. ② What 질문에 Yes로 답한다 → 질문의 첫 낱말에 동그라미. ③ 묻지 않은 정보(나이)를 보탠다 → 물은 낱말이 대답에도 들어 있는지 견준다. 짝 소개는 짝이 말해도 괜찮다고 한 것만 소개하게 한다.',
  }));

  // ───────────── 10차시 (extend) 가족·이웃 소개 ─────────────
  L.push(lesson(10, '[6영02-04]', {
    title: '가족이나 이웃 한 사람을 바른 문장으로 소개하기',
    objective: '가족이나 이웃 한 사람을 He/She 뒤에 알맞은 낱말(is·has·likes·can)을 써서 세 문장으로 소개하고 되물음에 답할 수 있다.',
    illustration: {
      prompt: PROMPT('a child holding a paper photo frame of a grandmother in a flower garden and an uncle in a firefighter helmet'),
      scene: SCENE('My grandma likes flowers.', 'He / She 뒤에 알맞은 낱말', [{ motif: 'flower', x: 80, y: 222, color: 'rose' }, { motif: 'house', x: 400, y: 218, color: 'peach' }]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '할머니 사진 대신 꽃 그림을 보여 주며 "This is my grandma. She like flowers. She have a garden." 하고 일부러 틀리게 말한다. "선생님 말에서 어색한 곳이 있었나요?" 친구 소개 때 배운 likes를 떠올리는 학생이 있으면 "그렇다면 have는 어떻게 바꿀까요?"라고 물어 has를 끌어낸다. 오늘은 친구가 아니라 가족이나 이웃 한 사람을 소개한다고 알린다. 실제 이름·사진 대신 "my grandma", "my neighbor"처럼 부르게 한다.',
        student: '선생님 소개에서 어색한 곳을 찾아 바르게 고쳐 말해 봐요.',
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 바르게 쓴 소개 문장만 고르기', minutes: 13, tool: 'wordcards',
            teacher: '"He와 She 뒤에서는 like가 likes, have가 has로 바뀌어요. can은 바뀌지 않아요." 칠판에 I like / He likes, I have / She has, I can / She can을 나란히 적어 둔다. can에도 s를 붙이는 학생에게 "cans라고 말하는 영어 친구는 없어요. can 뒤의 낱말도 그대로예요."라고 짚는다.',
            task: '소개 문장 카드 가운데 바르게 쓴 문장만 바구니에 넣어요. 틀린 문장은 어떻게 고칠지 짝에게 말해요.',
            levels: LV(PICK('바른 문장')),
            items: [
              { prompt: '할머니를 소개하는 문장이에요. 바르게 쓴 문장만 골라 보세요.',
                toolOptions: { cards: [{ id: 'c1', text: 'My grandma likes flowers.' }, { id: 'c2', text: 'She have a garden.', why: 'She 뒤에서는 have가 has로 바뀌어요.' }, { id: 'c3', text: 'She can make kimchi.' }, { id: 'c4', text: 'She like music.', why: 'She 뒤에서는 like에 s를 붙여요.' }] },
                target: { pick: ['c1', 'c3'] }, difficulty: 0.2,
                hints: ['문장마다 He나 She(또는 사람 한 명) 뒤의 낱말을 칠판의 짝과 견주어 보세요.'] },
              { prompt: '삼촌을 소개하는 문장이에요. 바르게 쓴 문장만 골라 보세요.',
                toolOptions: { cards: [{ id: 'c1', text: 'My uncle is a firefighter.' }, { id: 'c2', text: 'He cans run fast.', why: 'can에는 s를 붙이지 않아요.' }, { id: 'c3', text: 'He has a big truck.' }, { id: 'c4', text: 'He likes hiking.' }] },
                target: { pick: ['c1', 'c3', 'c4'] }, difficulty: 0.25,
                hints: ['can은 누가 와도 모양이 그대로예요. 나머지 문장은 He 뒤에 s가 붙었는지 보세요.'] },
              { prompt: '이웃 할아버지를 소개하는 문장이에요. 바르게 쓴 문장만 골라 보세요.',
                toolOptions: { cards: [{ id: 'c1', text: 'My neighbor is very kind.' }, { id: 'c2', text: 'He walks his dog every day.' }, { id: 'c3', text: 'He can plays the violin.', why: 'can 뒤에는 plays가 아니라 play를 써요.' }, { id: 'c4', text: 'He haves a bike.', why: 'have는 He 뒤에서 has가 돼요.' }] },
                target: { pick: ['c1', 'c2'] }, difficulty: 0.3,
                hints: ['can 바로 뒤의 낱말과 have가 바뀌는 모양을 특히 잘 보세요.'],
                levels: { challenge: { prompt: '이모를 소개하는 문장이에요. 바르게 쓴 문장만 골라 보세요.',
                  toolOptions: { cards: [{ id: 'c1', text: 'My aunt teaches English.' }, { id: 'c2', text: 'She has two cats.' }, { id: 'c3', text: 'She can speaks Chinese.', why: 'can 뒤에는 speaks가 아니라 speak를 써요.' }, { id: 'c4', text: 'She watch movies on Sunday.', why: 'She 뒤에서는 watch가 watches로 바뀌어요.' }, { id: 'c5', text: 'She can swim well.' }] },
                  target: { pick: ['c1', 'c2', 'c5'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 덩이 카드로 소개 문장 만들고 소개하기', minutes: 14, tool: 'wordcards',
            teacher: '"누가 → 어떠한지·무엇을 하는지 → 무엇을 → 언제·어디서 차례로 놓아 보세요." 우리말 차례(할머니는 / 꽃을 / 좋아해요)대로 놓는 학생에게 "영어는 누가 다음에 바로 하는 일이 와요."라고 짚는다. 마지막 짝 활동은 가족이나 이웃 한 사람을 세 문장으로 소개하고, 짝이 되물으면 한 문장을 보탠다.',
            task: '덩이 카드를 차례대로 놓아 소개 문장을 만들어요. 만든 문장을 읽은 뒤 내 가족이나 이웃 한 사람을 짝에게 소개해요.',
            levels: LV({ mode: 'order', shuffle: true }),
            items: [
              { prompt: '덩이 카드를 차례대로 놓아 "우리 삼촌은 소방관이에요."를 영어로 만들어 보세요.',
                toolOptions: { cards: ['a firefighter.', 'My uncle', 'is'] },
                target: { order: ['My uncle', 'is', 'a firefighter.'] }, difficulty: 0.1,
                hints: ['누가가 맨 앞이에요. 그다음에 is, 마지막에 무엇인지가 와요.'] },
              { prompt: '덩이 카드를 차례대로 놓아 "그는 기타를 아주 잘 쳐요."를 영어로 만들어 보세요.',
                toolOptions: { cards: ['very well.', 'He', 'the guitar', 'plays'] },
                target: { order: ['He', 'plays', 'the guitar', 'very well.'] }, difficulty: 0.25,
                hints: ['누가 → 하는 일 → 무엇을 → 얼마나 잘 차례예요. 우리말 차례와 견주어 보세요.'] },
              { prompt: '덩이 카드를 차례대로 놓아 "우리 이모는 중학교에서 영어를 가르쳐요."를 영어로 만들어 보세요.',
                toolOptions: { cards: ['at a middle school.', 'teaches', 'My aunt', 'English'] },
                target: { order: ['My aunt', 'teaches', 'English', 'at a middle school.'] }, difficulty: 0.3,
                hints: ['누가 → 하는 일 → 무엇을·어디에서 차례예요. 마침표가 붙은 카드가 맨 끝에 와요.'],
                levels: { challenge: { prompt: '덩이 카드를 차례대로 놓아 "우리 할머니는 일요일마다 공원에서 걸어요."를 만들어 보세요.',
                  toolOptions: { cards: ['in the park', 'walks', 'every Sunday.', 'My grandma'] }, target: { order: ['My grandma', 'walks', 'in the park', 'every Sunday.'] } } } },
              { prompt: '가족이나 이웃 한 사람을 세 문장으로 짝에게 소개해요(이름 대신 my grandma처럼). 짝이 되물으면 한 문장을 보태요. 바꾸어 한 뒤 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"He와 She 뒤에서 모양이 바뀐 낱말과 바뀌지 않은 낱말은 무엇이었나요?" 칠판의 짝을 함께 읽고 출구 질문을 푼다. 출구 1번에서 can 문장을 빼고 고른 학생은 can 줄을 손가락으로 짚으며 다시 읽어 본다.',
        exitTicket: [
          { type: 'tool', tool: 'wordcards', options: { mode: 'pick', basket: '바른 문장', shuffle: false, cards: [{ id: 'e1', text: 'My dad cooks dinner.' }, { id: 'e2', text: 'He have a car.' }, { id: 'e3', text: 'He can fix bikes.' }] }, prompt: '아빠를 소개하는 문장이에요. 바르게 쓴 문장만 골라 보세요.', target: { pick: ['e1', 'e3'] }, difficulty: 0.25 },
          { type: 'choice', prompt: 'My sister ___ a red bag. 빈칸에 알맞은 것은 무엇일까요?', options: ['have', 'has', 'haves'], answer: 1, difficulty: 0.2, explain: '한 사람(My sister) 뒤에서는 have가 has로 바뀌어요.' },
          { type: 'short', prompt: '가족이나 이웃 한 사람을 소개하는 문장 두 개를 쓰세요.' },
        ],
      },
    ],
    worksheet: {
      title: '가족·이웃 소개 문장',
      items: [
        { type: 'table', prompt: '빈칸에 알맞은 모양을 쓰세요.', columns: ['I', 'He / She'], cells: [['I like', ''], ['I have', ''], ['I can', ''], ['I play', '']], answer: 'likes / has / can / plays' },
        { type: 'choice', prompt: '바르게 쓴 문장에 ○ 하세요.', options: ['She can sings well.', 'She can sing well.', 'She cans sing well.'], answer: 'She can sing well.' },
        { type: 'choice', prompt: '"우리 형은 매일 축구를 해요."를 바르게 쓴 것에 ○ 하세요.', options: ['My brother soccer plays every day.', 'My brother plays soccer every day.', 'Every day my brother soccer.'], answer: 'My brother plays soccer every day.' },
        { type: 'short', prompt: '가족이나 이웃 한 사람을 세 문장으로 소개해 쓰세요(이름 대신 my grandma처럼 쓰세요).' },
      ],
      easy: {
        note: 'He, She 뒤: like → likes, have → has, can → can.',
        items: [
          { type: 'choice', prompt: 'He ___ a dog. 빈칸에 ○ 하세요.', options: ['have', 'has'], answer: 'has' },
          { type: 'choice', prompt: 'She ___ swim. 빈칸에 ○ 하세요.', options: ['can', 'cans'], answer: 'can' },
          { type: 'short', prompt: 'My mom likes ___. 빈칸을 채워 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '바른 문장에 초록 테두리가 생기고, 틀린 문장을 넣으면 고칠 곳을 말해 주고 되돌려요.',
      base: '다 고르거나 놓은 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: 'watches처럼 새로 바뀌는 모양과 can 뒤의 낱말을 함께 따져야 하고, 덩이가 넷인 긴 문장을 만들어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① He/She 뒤에 like·have를 그대로 쓴다 → I/He 짝을 칠판에 남겨 둔다. ② can에도 s를 붙이거나 can 뒤 낱말에 s를 붙인다 → "can 줄은 그대로" 약속. ③ 우리말 어순(누가-무엇을-한다)으로 놓는다 → 누가 다음에 하는 일. 가족 소개는 실제 이름·직장·사진을 쓰지 않게 하고, 소개하기 싫은 학생은 이웃이나 좋아하는 캐릭터를 소개해도 된다고 알린다.',
  }));

  // ───────────── 11차시 (core) 행동 순서: 차례 말 ─────────────
  L.push(lesson(11, '[6영02-05]', {
    title: '손 씻는 순서를 First·Then·Finally로 말하기',
    objective: '손 씻기처럼 늘 하는 일을 세 단계 이상으로 나누고, First·Then·Finally를 넣어 차례대로 말해 짝이 따라 하게 할 수 있다.',
    illustration: {
      prompt: PROMPT('a child at a sink washing hands with soap bubbles, with three numbered paper cards showing water, soap and a towel'),
      scene: SCENE('First, Then, Finally', '차례 말을 넣어 이어 말해요', [{ motif: 'cloud', x: 360, y: 80 }, { motif: 'flower', x: 80, y: 226, color: 'sky' }]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"Rinse your hands. Wet your hands. Dry your hands. Put soap on your hands." 하고 일부러 차례를 섞어 말하며 따라 해 보게 한다. "선생님 말대로 하니 어떻게 되었나요?" 비누 없이 헹구게 된 것을 웃으며 확인한 뒤 "차례대로 말하려면 무엇이 있으면 좋을까요?" 하고 묻는다. 우리말 "먼저, 그다음에, 마지막으로"가 나오면 영어로 First, Then, Finally라고 칠판에 적는다.',
        student: '선생님이 섞어 말한 손 씻기를 따라 해 보고, 무엇이 이상했는지 말해 봐요.',
        demo: { tool: 'wordcards', options: { mode: 'order', shuffle: false, cards: ['Dry your hands.', 'Wet your hands.', 'Put soap on your hands.'] }, sequence: [{ at: {} }, { at: { 'Wet your hands.': 0, 'Put soap on your hands.': 1, 'Dry your hands.': 2 } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 늘 하는 일의 단계 카드 차례대로 놓기', minutes: 12, tool: 'wordcards',
            teacher: '"카드 하나를 놓을 때마다 손으로 그 동작을 해 보세요. 다음 동작을 할 수 있나요?" 몸으로 해 보며 차례를 정하게 한다. 헹구기(Rinse)와 적시기(Wet)를 헷갈리는 학생에게 "Wet은 비누 전에, Rinse는 비누를 씻어 낼 때"라고 동작으로 보여 준다.',
            task: '단계 카드를 하는 차례대로 놓아요. 놓은 뒤 카드를 읽으며 그 동작을 해 봐요.',
            levels: LV({ mode: 'order', shuffle: true }),
            items: [
              { prompt: '손 씻는 단계 카드를 하는 차례대로 놓아 보세요.',
                toolOptions: { cards: ['Rinse your hands.', 'Put soap on your hands.', 'Wet your hands.', 'Rub your hands together.'] },
                target: { order: ['Wet your hands.', 'Put soap on your hands.', 'Rub your hands together.', 'Rinse your hands.'] }, difficulty: 0.2,
                hints: ['카드를 하나 놓을 때마다 손으로 그 동작을 해 보세요. 비누를 바르기 전에 손이 어떠해야 하는지 떠올려 보세요.'],
                levels: { easy: { prompt: '손 씻는 단계 카드 세 장을 하는 차례대로 놓아 보세요.', toolOptions: { cards: ['Rinse your hands.', 'Put soap on your hands.', 'Wet your hands.'] }, target: { order: ['Wet your hands.', 'Put soap on your hands.', 'Rinse your hands.'] } },
                  challenge: { prompt: '손 씻는 단계 카드 다섯 장을 하는 차례대로 놓아 보세요.', toolOptions: { cards: ['Rinse your hands.', 'Dry your hands with a towel.', 'Put soap on your hands.', 'Wet your hands.', 'Rub your hands together.'] }, target: { order: ['Wet your hands.', 'Put soap on your hands.', 'Rub your hands together.', 'Rinse your hands.', 'Dry your hands with a towel.'] } } } },
              { prompt: '이 닦는 단계 카드를 하는 차례대로 놓아 보세요.',
                toolOptions: { cards: ['Rinse your mouth.', 'Brush your teeth.', 'Put toothpaste on your toothbrush.'] },
                target: { order: ['Put toothpaste on your toothbrush.', 'Brush your teeth.', 'Rinse your mouth.'] }, difficulty: 0.1,
                hints: ['칫솔을 손에 들었다고 생각하고 동작을 하나씩 해 보세요.'] },
              { prompt: '씨앗 심는 단계 카드를 하는 차례대로 놓아 보세요.',
                toolOptions: { cards: ['Water it.', 'Put a seed in the hole.', 'Make a hole in the soil.', 'Cover the seed with soil.'] },
                target: { order: ['Make a hole in the soil.', 'Put a seed in the hole.', 'Cover the seed with soil.', 'Water it.'] }, difficulty: 0.25,
                hints: ['씨앗을 넣으려면 먼저 무엇이 있어야 하는지, 흙을 덮은 뒤에는 무엇을 하는지 생각해 보세요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 차례 말 넣어 말하고 짝이 따라 하기', minutes: 15, tool: 'wordcards',
            teacher: '"차례 말이 없으면 듣는 사람은 어디서 한 단계가 끝나는지 알기 어려워요. First, Then, Finally를 넣어 말해 볼까요?" 차례 말 뒤에는 쉼표를 찍고 잠깐 쉰다는 것을 소리로 보여 준다. Finally를 첫 단계에 넣는 학생에게 "Finally는 이제 끝이라는 뜻이에요."라고 짚는다. 짝 활동에서 따라 하는 사람은 들은 대로만 움직이고, 빠진 단계가 있으면 "You missed a step!"이라고 말한다.',
            task: '단계 문장 앞 빈칸에 알맞은 차례 말 카드를 넣어요. 완성한 말을 짝에게 해 주고, 짝은 들은 대로 따라 해요.',
            levels: LV({ mode: 'fill', shuffle: false }),
            items: [
              { prompt: '손 씻기 안내예요. 빈칸에 알맞은 차례 말을 넣어 보세요.',
                toolOptions: { slots: [{ id: 'f1', label: '___, wet your hands.' }, { id: 'f2', label: '___, rub them with soap.' }, { id: 'f3', label: '___, rinse your hands.' }], cards: ['Then', 'Finally', 'First'] },
                target: { fill: { f1: 'First', f2: 'Then', f3: 'Finally' } }, difficulty: 0.1,
                hints: ['차례 말에도 처음, 가운데, 끝이 있어요. 카드를 하나씩 읽으며 뜻을 떠올려 보세요.'],
                predict: { q: '차례 말 없이 단계만 말해도 똑같이 알아들을까요?', options: ['네, 똑같아요', '차례 말이 있으면 더 잘 알아들어요'], answer: 1 },
                conclude: '차례 말은 한 단계가 끝나고 다음 단계가 시작되는 곳을 듣는 사람에게 알려 줘요.' },
              { prompt: '양치질 안내예요. 빈칸에 알맞은 차례 말을 넣어 보세요.',
                toolOptions: { slots: [{ id: 'f1', label: '___, put toothpaste on your brush.' }, { id: 'f2', label: '___, brush your teeth.' }, { id: 'f3', label: '___, rinse your mouth.' }, { id: 'f4', label: '___, wash your brush.' }], cards: ['Next', 'First', 'Finally', 'Then'] },
                target: { fill: { f1: 'First', f2: ['Next', 'Then'], f3: ['Next', 'Then'], f4: 'Finally' } }, difficulty: 0.2,
                hints: ['가운데 단계에 쓸 수 있는 차례 말이 두 개 있어요. 처음과 끝에 올 말을 먼저 정해 보세요.'] },
              { prompt: '신발 신기 안내예요. 빈칸에 알맞은 차례 말을 넣고, 맞지 않는 카드는 남겨 보세요.',
                toolOptions: { slots: [{ id: 'f1', label: '___, put on your socks.' }, { id: 'f2', label: '___, put on your shoes.' }, { id: 'f3', label: '___, tie your shoelaces.' }], cards: ['First', 'Then', 'Finally', { id: 'Yesterday', text: 'Yesterday', why: 'Yesterday는 어제라는 때를 말하는 말이에요. 차례를 알려 주지 않아요.' }] },
                target: { fill: { f1: 'First', f2: 'Then', f3: 'Finally' } }, difficulty: 0.2,
                hints: ['차례를 알려 주는 말만 빈칸에 들어가요. 때를 말하는 말은 남겨 두세요.'] },
              { prompt: '손 씻는 방법을 First, Then, Finally를 넣어 짝에게 말해요. 짝은 들은 대로만 따라 하고, 빠진 단계가 있으면 알려 줘요. 바꾸어 한 뒤 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"차례를 말할 때 First, Then, Finally가 왜 필요했나요?" 짝이 따라 하다가 막혔던 때를 한두 명에게 듣고 출구 질문을 푼다. 출구 1번을 틀린 학생은 다음 시간 도입에서 몸으로 해 보며 다시 놓는다.',
        exitTicket: [
          { type: 'tool', tool: 'wordcards', options: { mode: 'order', shuffle: false, cards: ['Put on your shoes.', 'Put on your socks.', 'Open the door.'] }, prompt: '밖에 나가는 단계 카드를 하는 차례대로 놓아 보세요.', target: { order: ['Put on your socks.', 'Put on your shoes.', 'Open the door.'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '마지막 단계 앞에 쓰는 말은 무엇일까요?', options: ['First', 'Then', 'Finally'], answer: 2, difficulty: 0.1, explain: 'Finally는 "마지막으로"라는 뜻이라 끝 단계 앞에 써요.' },
          { type: 'mood', prompt: '오늘 차례대로 말하기는 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '차례 말로 순서 말하기',
      items: [
        { type: 'table', prompt: '손 씻는 단계를 차례대로 1~4 번호를 쓰세요.', columns: ['단계', '번호'], cells: [['Rinse your hands.', ''], ['Wet your hands.', ''], ['Rub your hands with soap.', ''], ['Dry your hands.', '']], answer: '3 / 1 / 2 / 4' },
        { type: 'choice', prompt: '___, wet your hands. (첫 단계) 빈칸에 알맞은 것에 ○ 하세요.', options: ['Finally', 'First', 'Then'], answer: 'First' },
        { type: 'choice', prompt: '차례 말이 하는 일에 ○ 하세요.', options: ['문장을 길게 만든다', '단계가 바뀌는 곳을 알려 준다', '목소리를 크게 한다'], answer: '단계가 바뀌는 곳을 알려 준다' },
        { type: 'short', prompt: '이 닦는 방법을 First, Then, Finally를 넣어 세 문장으로 쓰세요.' },
      ],
      easy: {
        note: 'First = 먼저, Then = 그다음에, Finally = 마지막으로.',
        items: [
          { type: 'choice', prompt: '"먼저"를 뜻하는 말에 ○ 하세요.', options: ['First', 'Finally'], answer: 'First' },
          { type: 'choice', prompt: '"마지막으로"를 뜻하는 말에 ○ 하세요.', options: ['Then', 'Finally'], answer: 'Finally' },
          { type: 'short', prompt: 'First, wet your hands. Then, ___. 빈칸을 채워 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '단계 카드가 세 장으로 줄고, 맞는 자리에 초록 테두리가 생겨요. 틀린 자리에 놓으면 되돌려요.',
      base: '다 놓은 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '수건으로 닦기까지 다섯 단계를 놓고, 차례 말이 아닌 함정 카드를 가려내요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 차례 말 없이 문장만 늘어놓는다 → 짝이 따라 하다 막히는 경험을 하게 한다. ② Finally를 "드디어"로만 알고 아무 데나 쓴다 → 끝 단계 앞에만. ③ Next와 Then 가운데 하나만 맞다고 여긴다 → 둘 다 가운데 단계에 쓸 수 있다. 손 씻기는 보건 시간의 30초 문지르기와 이어 줄 수 있다.',
  }));

  // ───────────── 12차시 (practice) 행동 순서: 빠진 단계 ─────────────
  L.push(lesson(12, '[6영02-05]', {
    title: '샌드위치 만드는 순서를 말하고 빠진 단계 보태기',
    objective: '샌드위치·라면처럼 만드는 순서를 차례 말을 넣어 말하고, 짝의 설명에서 빠진 단계를 찾아 한 문장으로 보탤 수 있다.',
    illustration: {
      prompt: PROMPT('two children making a sandwich at a table with bread slices, cheese and ham, with a speech bubble showing a numbered step card with a missing step gap'),
      scene: SCENE('First, Then, ?, Finally', '빠진 단계를 찾아 보태요', [{ motif: 'bread', x: 90, y: 220 }, { motif: 'egg', x: 390, y: 222 }]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"First, put a slice of bread on a plate. Finally, put another slice on top." 하고 두 단계만 말한 뒤, 학생 한 명에게 빈 접시 위에서 몸짓으로 따라 하게 한다. "빵 두 장만 겹쳐졌어요. 무엇이 빠졌나요?" 학생이 "햄이랑 치즈요!" 하면 "그럼 영어로 한 문장을 보태 볼까요? Then, put ham and cheese on the bread." 빠진 단계가 있으면 따라 하는 사람이 원하는 것을 만들 수 없다는 것을 끌어낸다.',
        student: '선생님의 샌드위치 설명을 듣고 따라 해 보고, 무엇이 빠졌는지 말해 봐요.',
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 설명에서 빠진 단계 찾아 고르기', minutes: 13, tool: 'wordcards',
            teacher: '"빈 곳 앞뒤 단계를 읽어 보세요. 앞 단계가 끝난 뒤, 뒤 단계를 하기 전에 꼭 해야 하는 일은 무엇일까요?" 다 만든 뒤에 하는 일(먹기, 치우기)을 고르는 학생에게 "그 일은 Finally 다음에 해요. 빈 곳은 가운데예요."라고 짚는다.',
            task: '문항의 설명을 읽고, Then 자리에 빠진 단계 카드 하나만 바구니에 넣어요. 그 단계를 넣어 설명을 처음부터 말해요.',
            levels: LV(PICK('빠진 단계')),
            items: [
              { prompt: 'First, put bread on a plate. Then, ___. Finally, put another slice on top. 빠진 단계 하나를 골라 보세요.',
                toolOptions: { cards: [{ id: 'c1', text: 'put ham and cheese on the bread' }, { id: 'c2', text: 'eat the sandwich', why: '다 만든 뒤에 하는 일이라 가운데에 올 수 없어요.' }, { id: 'c3', text: 'wash the plate', why: '접시를 씻는 일은 샌드위치를 만드는 단계가 아니에요.' }] },
                target: { pick: ['c1'] }, difficulty: 0.15,
                hints: ['빵을 놓은 뒤, 빵을 덮기 전에 무엇을 해야 샌드위치가 되는지 생각해 보세요.'] },
              { prompt: 'First, boil water in a pot. Then, ___. Finally, put the ramyeon in a bowl. 빠진 단계 하나를 골라 보세요.',
                toolOptions: { cards: [{ id: 'c1', text: 'turn off the stove', why: '불을 먼저 끄면 라면을 끓일 수 없어요.' }, { id: 'c2', text: 'put the noodles in and cook for four minutes' }, { id: 'c3', text: 'buy some water', why: '물은 이미 끓이고 있어요.' }] },
                target: { pick: ['c2'] }, difficulty: 0.2,
                hints: ['물이 끓은 뒤, 그릇에 담기 전에 냄비에서 무슨 일이 일어나야 하는지 떠올려 보세요.'] },
              { prompt: 'First, cut an apple. Then, ___. Finally, drink the juice. 빠진 단계 하나를 골라 보세요.',
                toolOptions: { cards: [{ id: 'c1', text: 'put the apple and water in a blender and blend them' }, { id: 'c2', text: 'drink some milk', why: '사과 주스를 만드는 단계가 아니에요.' }, { id: 'c3', text: 'cut the apple again', why: '자르는 일은 이미 First에서 했어요.' }] },
                target: { pick: ['c1'] }, difficulty: 0.2,
                hints: ['빈 곳 앞의 단계를 한 뒤, 뒤의 단계를 하려면 꼭 해야 하는 일을 찾아보세요.'],
                levels: { challenge: { prompt: 'First, put rice in a bowl. Then, ___. After that, roll it up. Finally, cut it. 김밥 만들기에서 빠진 단계 하나를 골라 보세요.',
                  toolOptions: { cards: [{ id: 'c1', text: 'eat the rice', why: '밥을 먹어 버리면 김밥을 만들 수 없어요.' }, { id: 'c2', text: 'put the rice and fillings on the seaweed' }, { id: 'c3', text: 'cut the seaweed into small pieces', why: '김을 잘게 자르면 말 수 없어요.' }, { id: 'c4', text: 'roll it up', why: '마는 일은 After that에 이미 있어요.' }] }, target: { pick: ['c2'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 차례 말 문장 카드 놓고 몸짓으로 따라 하기', minutes: 14, tool: 'wordcards',
            teacher: '"카드의 첫 낱말을 먼저 보세요. 차례 말이 순서를 알려 줘요." 차례 말을 가리고 읽으면 순서가 헷갈리는 것을 보여 준 뒤 다시 보이게 한다. 짝 활동에서는 한 사람이 일부러 한 단계를 빼고 말하면, 몸짓으로 따라 하던 짝이 멈추고 "You missed a step!" 하고 빠진 단계를 영어 한 문장으로 보탠다.',
            task: '차례 말이 들어 있는 문장 카드를 차례대로 놓아요. 놓은 뒤 짝이 읽어 주는 대로 몸짓으로 따라 해요.',
            levels: LV({ mode: 'order', shuffle: true }),
            items: [
              { prompt: '라면 끓이기 문장 카드를 차례대로 놓아 보세요.',
                toolOptions: { cards: ['Finally, put the ramyeon in a bowl.', 'First, boil water in a pot.', 'After that, cook them for four minutes.', 'Then, put the noodles and soup powder in.'] },
                target: { order: ['First, boil water in a pot.', 'Then, put the noodles and soup powder in.', 'After that, cook them for four minutes.', 'Finally, put the ramyeon in a bowl.'] }, difficulty: 0.2,
                hints: ['첫 낱말의 차례 말을 보고 처음과 끝 카드를 먼저 놓아 보세요. 가운데는 하는 일의 차례를 따져요.'] },
              { prompt: '잼 토스트 만들기 문장 카드를 차례대로 놓아 보세요.',
                toolOptions: { cards: ['Then, spread jam on it.', 'Finally, cut it in half.', 'First, toast the bread.'] },
                target: { order: ['First, toast the bread.', 'Then, spread jam on it.', 'Finally, cut it in half.'] }, difficulty: 0.1,
                hints: ['First, Then, Finally가 각각 어디에 오는지 떠올려 보세요.'] },
              { prompt: '물병 흔들어 만드는 미숫가루 문장 카드를 차례대로 놓아 보세요.',
                toolOptions: { cards: ['Next, close the cap tightly.', 'First, pour cold milk into a bottle.', 'Finally, shake it well.', 'Then, add two spoons of misutgaru.'] },
                target: { order: ['First, pour cold milk into a bottle.', 'Then, add two spoons of misutgaru.', 'Next, close the cap tightly.', 'Finally, shake it well.'] }, difficulty: 0.3,
                hints: ['뚜껑을 닫으면 더 넣을 수 없어요. 가루를 넣는 일과 뚜껑을 닫는 일 가운데 무엇이 먼저인지 따져 보세요.'],
                levels: { challenge: { prompt: '미숫가루 문장 카드를 차례대로 놓아 보세요. 차례 말이 없는 카드도 있어요.',
                  toolOptions: { cards: ['Close the cap tightly.', 'First, pour cold milk into a bottle.', 'Finally, shake it well.', 'Add two spoons of misutgaru.'] },
                  target: { order: ['First, pour cold milk into a bottle.', 'Add two spoons of misutgaru.', 'Close the cap tightly.', 'Finally, shake it well.'] } } } },
              { prompt: '샌드위치 만드는 방법을 짝에게 말하되 일부러 한 단계를 빼요. 짝은 몸짓으로 따라 하다 "You missed a step!" 하고 빠진 단계를 영어로 보태요. 바꾸어 한 뒤 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"짝의 설명에서 빠진 단계를 어떻게 알아챘나요?" 몸짓으로 따라 하다 막힌 순간을 두세 명에게 듣고 출구 질문을 푼다. 출구 1번에서 다 만든 뒤의 일을 고른 학생과는 앞뒤 단계 사이를 손으로 짚어 보는 연습을 한 번 더 한다.',
        exitTicket: [
          { type: 'tool', tool: 'wordcards', options: { mode: 'pick', basket: '빠진 단계', shuffle: false, cards: [{ id: 'e1', text: 'put the tea bag in the cup' }, { id: 'e2', text: 'drink the tea' }, { id: 'e3', text: 'buy a cup' }] }, prompt: 'First, pour hot water into a cup. Then, ___. Finally, take out the tea bag. 빠진 단계 하나를 골라 보세요.', target: { pick: ['e1'] }, difficulty: 0.2 },
          { type: 'choice', prompt: '짝이 "First, open the box. Finally, close the box."라고 했어요. 무엇을 보태면 좋을까요?', options: ['Then, put the toy in the box.', 'First, open the box.', 'Finally, close the box.'], answer: 0, difficulty: 0.2, explain: '열고 닫는 사이에 상자에 무엇을 하는지가 빠졌어요.' },
          { type: 'mood', prompt: '오늘 빠진 단계 찾기는 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '빠진 단계 보태기',
      items: [
        { type: 'blank', prompt: '빈칸에 빠진 단계를 영어로 쓰세요.', text: 'First, put bread on a plate. Then, ______________. Finally, put another slice on top.' },
        { type: 'table', prompt: '라면 끓이기 단계를 차례대로 1~4 번호를 쓰세요.', columns: ['단계', '번호'], cells: [['Put the ramyeon in a bowl.', ''], ['Boil water in a pot.', ''], ['Cook for four minutes.', ''], ['Put the noodles in.', '']], answer: '4 / 1 / 3 / 2' },
        { type: 'choice', prompt: '설명에서 단계가 빠지면 어떻게 될까요? ○ 하세요.', options: ['따라 하는 사람이 원하는 것을 만들 수 없다', '아무 일도 없다', '더 빨리 만들 수 있다'], answer: '따라 하는 사람이 원하는 것을 만들 수 없다' },
        { type: 'short', prompt: '내가 좋아하는 간식 만드는 방법을 차례 말을 넣어 세 문장으로 쓰세요.' },
      ],
      easy: {
        note: '빈 곳 앞의 일을 한 뒤, 뒤의 일을 하기 전에 해야 하는 일을 찾아요.',
        items: [
          { type: 'choice', prompt: 'First, toast the bread. Then, ___. Finally, eat it. 빈칸에 ○ 하세요.', options: ['spread butter on it', 'go to bed'], answer: 'spread butter on it' },
          { type: 'choice', prompt: '맨 처음 단계 앞에 쓰는 말에 ○ 하세요.', options: ['First', 'Finally'], answer: 'First' },
          { type: 'short', prompt: 'Then, put ___ on the bread. 빈칸을 채워 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '알맞은 카드에 초록 테두리가 생기고, 틀린 카드를 넣으면 까닭을 말해 주고 되돌려요.',
      base: '다 고르거나 놓은 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '네 단계 김밥 만들기에서 빠진 곳을 찾고, 차례 말이 없는 카드까지 하는 차례로 놓아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 빠진 자리에 다 만든 뒤의 일(먹기)을 넣는다 → 빈 곳 앞뒤를 손으로 짚게 한다. ② 차례 말만 보고 하는 일의 차례는 따지지 않는다 → 도전의 차례 말 없는 카드로 하는 일 자체를 따지게 한다. ③ 설명을 듣는 사람이 들은 것보다 아는 것으로 따라 한다 → "들은 대로만" 약속. 조리는 실제로 하지 않고 몸짓으로만 따라 한다.',
  }));

  // ───────────── 13차시 (extend) 놀이 방법 안내 ─────────────
  L.push(lesson(13, '[6영02-05]', {
    title: '놀이 방법을 차례대로 안내하고 막히는 단계 고치기',
    objective: '빙고·종이컵 전화기 같은 놀이 방법을 단계마다 무엇을 하는지 분명한 문장으로 차례대로 안내하고, 듣는 사람이 막히는 단계를 찾아 고칠 수 있다.',
    illustration: {
      prompt: PROMPT('children playing a word bingo game on paper grids and two children talking through paper cups joined by a string'),
      scene: SCENE('Draw. Write. Listen. Bingo!', '단계마다 무엇을 하는지 분명하게', [{ motif: 'star', x: 90, y: 80, color: 'buttercup' }, { motif: 'tree', x: 400, y: 214 }]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"오늘은 영어 빙고를 할 거예요. First, do the thing. Then, play." 하고 일부러 뭉뚱그려 안내한 뒤 "무엇을 해야 할지 알겠나요?" 묻는다. 학생들이 "칸을 그려요? 낱말을 써요?" 하고 되물으면 "맞아요. 차례 말이 있어도 단계마다 무엇을 하는지가 분명해야 따라 할 수 있어요."라고 정리한다. 이어서 Draw a 3×3 grid. 를 칠판에 쓰며 바르게 안내를 시작한다.',
        student: '선생님의 빙고 안내를 듣고, 무엇이 분명하지 않았는지 말해 봐요.',
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 놀이 방법 단계 카드 차례대로 놓기', minutes: 12, tool: 'wordcards',
            teacher: '"이 단계를 하려면 앞 단계가 꼭 끝나 있어야 하나요?" 카드마다 앞에 필요한 것을 따져 차례를 정하게 한다. 종이컵 전화기에서 실을 먼저 꿰려는 학생에게 "구멍이 없는데 실을 꿸 수 있을까요?"라고 되묻는다. 칼·송곳은 쓰지 않고 구멍은 선생님이 미리 뚫어 둔 컵을 쓴다고 알린다.',
            task: '놀이 방법 단계 카드를 하는 차례대로 놓아요. 놓은 뒤 First, Then, Finally를 붙여 소리 내어 안내해요.',
            levels: LV({ mode: 'order', shuffle: true }),
            items: [
              { prompt: '영어 빙고 놀이 방법을 차례대로 놓아 보세요.',
                toolOptions: { cards: ['Say "Bingo!" when you get three in a row.', 'Write nine English words in the grid.', 'Draw a 3×3 grid.', 'Listen and circle the word you hear.'] },
                target: { order: ['Draw a 3×3 grid.', 'Write nine English words in the grid.', 'Listen and circle the word you hear.', 'Say "Bingo!" when you get three in a row.'] }, difficulty: 0.2,
                hints: ['카드마다 그 단계를 하려면 앞에서 무엇이 끝나 있어야 하는지 따져 보세요.'] },
              { prompt: '종이컵 전화기 만드는 방법을 차례대로 놓아 보세요.',
                toolOptions: { cards: ['Tie a knot inside each cup.', 'Pull the string tight and talk.', 'Put a string through the holes in two cups.'] },
                target: { order: ['Put a string through the holes in two cups.', 'Tie a knot inside each cup.', 'Pull the string tight and talk.'] }, difficulty: 0.15,
                hints: ['매듭을 지으려면 실이 어디에 있어야 하는지 떠올려 보세요.'],
                levels: { challenge: { prompt: '종이컵 전화기 만드는 방법 네 단계를 차례대로 놓아 보세요.',
                  toolOptions: { cards: ['Tie a knot inside each cup.', 'Pull the string tight and talk.', 'Put a string through the holes in two cups.', 'Ask your teacher to make a small hole in each cup.'] },
                  target: { order: ['Ask your teacher to make a small hole in each cup.', 'Put a string through the holes in two cups.', 'Tie a knot inside each cup.', 'Pull the string tight and talk.'] } } } },
              { prompt: '숨바꼭질 놀이 방법을 차례대로 놓아 보세요.',
                toolOptions: { cards: ['Look for your friends.', 'Close your eyes and count to ten.', 'Say "Ready or not, here I come!"'] },
                target: { order: ['Close your eyes and count to ten.', 'Say "Ready or not, here I come!"', 'Look for your friends.'] }, difficulty: 0.15,
                hints: ['술래가 친구를 찾으러 가기 전에 무엇을 하는지 차례대로 떠올려 보세요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 따라 하다 막히는 단계 찾고 고쳐 말하기', minutes: 15, tool: 'wordcards',
            teacher: '"이 안내대로 해 보세요. 어느 단계에서 손이 멈췄나요?" do it, make that처럼 무엇을 하라는지 알 수 없는 말과 놀이와 상관없는 단계를 찾게 한다. 고른 뒤에는 그 단계를 분명한 문장으로 고쳐 말하게 한다(예: Do it. → Fold the paper in half.). 마지막 짝 활동에서는 한 사람이 놀이 하나를 안내하고 짝이 막히면 "I\'m stuck!" 하고 그 단계를 물어본다.',
            task: '놀이 안내 단계 가운데 따라 하는 사람이 막히는 단계 하나를 바구니에 넣어요. 그 단계를 분명하게 고쳐 짝에게 말해요.',
            levels: LV(PICK('막히는 단계')),
            items: [
              { prompt: '딱지 접기 안내예요. 따라 하다 막히는 단계 하나를 골라 보세요.',
                toolOptions: { cards: [{ id: 'c1', text: 'First, fold two papers in half.', why: '무엇을 어떻게 접는지 분명해요.' }, { id: 'c2', text: 'Then, do that thing.' }, { id: 'c3', text: 'Finally, push the corners in.', why: '무엇을 하는지 분명해요.' }] },
                target: { pick: ['c2'] }, difficulty: 0.15,
                hints: ['단계마다 그 말만 듣고 손을 움직일 수 있는지 하나씩 해 보세요.'] },
              { prompt: '공기놀이 안내예요. 따라 하다 막히는 단계 하나를 골라 보세요.',
                toolOptions: { cards: [{ id: 'c1', text: 'First, throw five stones on the floor.', why: '무엇을 하는지 분명해요.' }, { id: 'c2', text: 'Then, pick one stone and throw it up.', why: '무엇을 하는지 분명해요.' }, { id: 'c3', text: 'After that, eat a snack.' }, { id: 'c4', text: 'Finally, catch the stone in the air.', why: '무엇을 하는지 분명해요.' }] },
                target: { pick: ['c3'] }, difficulty: 0.2,
                hints: ['놀이를 하다가 갑자기 놀이와 상관없는 일을 하라는 단계가 있는지 보세요.'] },
              { prompt: '수건돌리기 안내예요. 따라 하다 막히는 단계 하나를 골라 보세요.',
                toolOptions: { cards: [{ id: 'c1', text: 'First, sit in a big circle.', why: '무엇을 하는지 분명해요.' }, { id: 'c2', text: 'Then, walk around and drop the towel.', why: '무엇을 하는지 분명해요.' }, { id: 'c3', text: 'Finally, do the next one.' }] },
                target: { pick: ['c3'] }, difficulty: 0.25,
                hints: ['"the next one"이 무엇인지 듣는 사람이 알 수 있을지 생각해 보세요.'],
                levels: { challenge: { prompt: '수건돌리기 안내예요. 따라 하다 막히는 단계를 모두 골라 보세요.',
                  toolOptions: { cards: [{ id: 'c1', text: 'First, sit in a big circle.', why: '무엇을 하는지 분명해요.' }, { id: 'c2', text: 'Then, do it.' }, { id: 'c3', text: 'Next, run around the circle.', why: '무엇을 하는지 분명해요.' }, { id: 'c4', text: 'Finally, do the next one.' }] },
                  target: { pick: ['c2', 'c4'] } } } },
              { prompt: '아는 놀이 하나를 골라 차례 말을 넣어 짝에게 안내해요. 짝이 따라 하다 막히면 "I\'m stuck!" 하고 물어요. 막힌 단계를 고쳐 다시 안내한 뒤 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"짝이 막혔던 단계는 어떻게 고쳤나요?" do it 대신 무엇을 하는지 동작 말로 바꾼 예를 두세 개 듣고 출구 질문을 푼다. 출구 2번을 틀린 학생은 고친 단계를 몸짓으로 해 보며 다시 읽는다.',
        exitTicket: [
          { type: 'tool', tool: 'wordcards', options: { mode: 'order', shuffle: false, cards: ['Run to the other team.', 'Make two teams.', 'Give the baton to your friend.'] }, prompt: '이어달리기 방법 카드를 하는 차례대로 놓아 보세요.', target: { order: ['Make two teams.', 'Run to the other team.', 'Give the baton to your friend.'] }, difficulty: 0.2 },
          { type: 'choice', prompt: '"Then, do that." 을 분명하게 고친 것은 무엇일까요? (종이비행기 접기 안내)', options: ['Then, do it again.', 'Then, fold the corners to the middle.', 'Then, that one.'], answer: 1, difficulty: 0.2, explain: '무엇을 어떻게 하는지(모서리를 가운데로 접기)가 분명해졌어요.' },
          { type: 'mood', prompt: '오늘 놀이 방법 안내하기는 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '놀이 방법 안내하기',
      items: [
        { type: 'table', prompt: '빙고 놀이 단계에 1~4 번호를 쓰세요.', columns: ['단계', '번호'], cells: [['Write nine words.', ''], ['Say "Bingo!"', ''], ['Draw a 3×3 grid.', ''], ['Listen and circle the word.', '']], answer: '2 / 4 / 1 / 3' },
        { type: 'choice', prompt: '따라 하는 사람이 막히는 단계에 ○ 하세요.', options: ['First, sit in a circle.', 'Then, do it.', 'Finally, stand up.'], answer: 'Then, do it.' },
        { type: 'blank', prompt: '"Then, make that." 을 종이컵 전화기 안내에 맞게 분명하게 고쳐 쓰세요.', text: 'Then, ______________.' },
        { type: 'short', prompt: '내가 아는 놀이 하나의 방법을 차례 말을 넣어 세 문장으로 쓰세요.' },
      ],
      easy: {
        note: '그 말만 듣고 손을 움직일 수 있으면 분명한 단계예요.',
        items: [
          { type: 'choice', prompt: '분명한 단계에 ○ 하세요.', options: ['Draw a big circle.', 'Do the thing.'], answer: 'Draw a big circle.' },
          { type: 'choice', prompt: '놀이 안내 첫 단계 앞에 쓰는 말에 ○ 하세요.', options: ['First', 'Finally'], answer: 'First' },
          { type: 'short', prompt: 'First, ___ a 3×3 grid. 빈칸을 채워 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 초록 테두리가 생기고, 분명한 단계를 고르면 까닭을 말해 주고 되돌려요.',
      base: '다 놓거나 고른 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '종이컵 전화기를 네 단계로 놓고, 막히는 단계가 둘인 안내에서 둘 다 찾아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① do it, that thing처럼 자기만 아는 말로 안내한다 → "그 말만 듣고 손이 움직이나요?" 확인. ② 놀이와 상관없는 단계를 끼워 넣어도 모른다 → 실제로 따라 해 본다. ③ 차례 말만 있으면 다 된 줄 안다 → 차례 말은 순서, 동작 말은 할 일이라는 것을 나누어 짚는다. 종이컵 구멍은 교사가 미리 뚫어 두고 학생은 날카로운 도구를 쓰지 않는다. 이 차시로 행동 순서 부분(11~13차시)을 마치고, 35~37차시 방법 설명문 쓰기와 이어진다.',
  }));

  // ───────────── 14차시 (core) 리듬 있는 발표: 덩이로 끊기 ─────────────
  L.push(lesson(14, '[6영02-01]', {
    title: '세 문장 발표문을 덩이로 끊어 말하기',
    objective: '세 문장짜리 발표문을 뜻 덩이마다 쉬는 자리(/)를 표시하고, 표시한 대로 덩이째 끊어 말할 수 있다.',
    illustration: {
      prompt: PROMPT('a child giving a short talk in front of a small group, with the words in a speech bubble cut into paper pieces with small gaps between them'),
      scene: SCENE('My favorite season / is summer.', '덩이마다 잠깐 쉬어요', [{ motif: 'sun', x: 80, y: 70 }, { motif: 'wave', y: 230 }]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"My favorite season is summer because I can swim in the sea." 를 한 번은 숨도 쉬지 않고 빠르게, 한 번은 덩이마다 살짝 쉬며 말한다. "어느 쪽이 더 잘 들렸나요? 발표는 외운 대로 쉬지 않고 해야 잘한 걸까요?" 쉬지 않아야 잘한다고 말하는 학생에게 "쉬는 자리가 있어야 듣는 사람이 뜻을 따라와요. 다만 덩이 가운데서 쉬면 오히려 어색해요."라고 짚는다.',
        student: '선생님 발표를 두 번 듣고, 어느 쪽이 더 잘 들렸는지 까닭과 함께 말해 봐요.',
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 쉬는 자리를 알맞게 표시한 문장 고르기', minutes: 12, tool: 'wordcards',
            teacher: '"함께 붙어 다니는 낱말끼리 한 덩이예요. my favorite season처럼요." 카드마다 / 자리에서 손뼉을 한 번 치며 읽어 보게 한다. 낱말마다 끊어 읽는 학생에게 "로봇처럼 들리지요? 뜻이 한 덩이인 곳은 이어서 말해요."라고 들려준다.',
            task: '같은 문장을 쉬는 자리(/)를 다르게 표시한 카드 가운데 알맞게 끊은 카드 하나를 바구니에 넣어요. 그 카드대로 끊어 읽어요.',
            levels: LV(PICK('알맞게 끊은 문장')),
            items: [
              { prompt: 'My favorite season is summer. 알맞게 끊은 카드 하나를 골라 보세요.',
                toolOptions: { cards: [{ id: 'c1', text: 'My favorite season / is summer.' }, { id: 'c2', text: 'My / favorite season is / summer.', why: 'My와 favorite season은 한 덩이라 그 사이에서 쉬지 않아요.' }, { id: 'c3', text: 'My / favorite / season / is / summer.', why: '낱말마다 끊으면 로봇처럼 들려요.' }] },
                target: { pick: ['c1'] }, difficulty: 0.15,
                hints: ['카드마다 / 자리에서 손뼉을 치며 읽어 보세요. 뜻이 한 덩이인 낱말 사이에서 끊기는 카드는 어색해요.'] },
              { prompt: 'I like summer because I can swim in the sea. 알맞게 끊은 카드 하나를 골라 보세요.',
                toolOptions: { cards: [{ id: 'c1', text: 'I like / summer because / I can swim in / the sea.', why: 'because부터 까닭이 시작돼요. because 뒤가 아니라 앞에서 쉬어요.' }, { id: 'c2', text: 'I like summer / because I can swim / in the sea.' }, { id: 'c3', text: 'I / like / summer / because / I / can / swim.', why: '낱말마다 끊으면 로봇처럼 들려요.' }] },
                target: { pick: ['c2'] }, difficulty: 0.25,
                hints: ['까닭을 말하는 덩이가 어디서 시작하는지 찾아보세요.'] },
              { prompt: 'Every Saturday, I play badminton with my dad. 알맞게 끊은 카드 하나를 골라 보세요.',
                toolOptions: { cards: [{ id: 'c1', text: 'Every / Saturday, I play / badminton with my dad.', why: 'Every Saturday는 한 덩이예요.' }, { id: 'c2', text: 'Every Saturday, / I play badminton / with my dad.' }, { id: 'c3', text: 'Every Saturday, I play badminton with / my dad.', why: 'with와 my dad는 한 덩이라 그 사이에서 쉬지 않아요.' }] },
                target: { pick: ['c2'] }, difficulty: 0.25,
                hints: ['언제, 무엇을 하는지, 누구와 하는지로 덩이를 나누어 보세요.'],
                levels: { challenge: { prompt: 'After dinner, my family and I take a walk in the park. 알맞게 끊은 카드 하나를 골라 보세요.',
                  toolOptions: { cards: [{ id: 'c1', text: 'After dinner, / my family and I / take a walk / in the park.' }, { id: 'c2', text: 'After / dinner, my family / and I take a walk in / the park.', why: 'After dinner와 my family and I가 둘 다 가운데서 끊겼어요.' }, { id: 'c3', text: 'After dinner, my family / and I / take a walk in the park.', why: 'my family and I는 한 덩이예요.' }, { id: 'c4', text: 'After dinner, / my family and I / take a / walk in the park.', why: 'take a walk는 한 덩이예요.' }] }, target: { pick: ['c1'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 발표 문장 차례대로 놓고 모둠에서 발표하기', minutes: 15, tool: 'wordcards',
            teacher: '"발표는 인사 → 무엇을 말할지 → 자세한 내용 → 끝인사 차례예요." 칠판에 네 칸을 그려 둔다. 발표문을 놓은 뒤에는 쉬는 자리에 / 를 연필로 표시하고 그대로 읽게 한다. 모둠(4명) 안에서 한 사람씩 발표하고, 듣는 사람은 덩이 가운데서 끊긴 곳이 있었는지만 말해 준다. 반 전체 앞 발표는 다음 시간에 한다.',
            task: '발표 문장 카드를 인사부터 끝인사까지 차례대로 놓아요. 쉬는 자리를 생각하며 모둠 친구들 앞에서 발표해요.',
            levels: LV({ mode: 'order', shuffle: true }),
            items: [
              { prompt: '"좋아하는 계절" 발표 문장을 차례대로 놓아 보세요.',
                toolOptions: { cards: ['Thank you for listening.', "I'm going to talk about my favorite season.", 'Hello, everyone.', 'It is summer because I love swimming.'] },
                target: { order: ['Hello, everyone.', "I'm going to talk about my favorite season.", 'It is summer because I love swimming.', 'Thank you for listening.'] }, difficulty: 0.15,
                hints: ['발표는 인사로 열고 인사로 닫아요. 그 사이에 무엇을 말할지와 자세한 내용이 와요.'] },
              { prompt: '"내 보물" 발표 문장을 차례대로 놓아 보세요.',
                toolOptions: { cards: ['My treasure is an old teddy bear.', 'Thank you.', 'Hi, I am Jiwoo.', 'My grandma gave it to me.'] },
                target: { order: ['Hi, I am Jiwoo.', 'My treasure is an old teddy bear.', 'My grandma gave it to me.', 'Thank you.'] }, difficulty: 0.2,
                hints: ['it이 무엇을 가리키는지 생각해 보세요. it이 나오기 전에 그것이 무엇인지 먼저 말해야 해요.'] },
              { prompt: '"내가 좋아하는 운동" 발표 문장을 차례대로 놓아 보세요.',
                toolOptions: { cards: ['I play it every Wednesday.', 'Hello, my name is Taeho.', 'Thank you for listening.', 'I love taekwondo.', 'It makes me strong.'] },
                target: { order: ['Hello, my name is Taeho.', 'I love taekwondo.', ['I play it every Wednesday.', 'It makes me strong.'], 'Thank you for listening.'] }, difficulty: 0.25,
                hints: ['it이 나오는 문장은 무엇을 좋아하는지 말한 문장 뒤에 와요.'] },
              { prompt: '좋아하는 계절·물건·운동 가운데 하나로 세 문장 발표문을 만들어 / 를 표시하고, 모둠 친구들 앞에서 발표해요. 모두 한 뒤 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"발표할 때 어디에서 쉬었나요? 쉬지 않고 말할 때와 무엇이 달랐나요?" 모둠에서 들은 말을 두세 개 나눈 뒤 출구 질문을 푼다. 출구 1번에서 낱말마다 끊은 카드를 고른 학생은 다음 시간 도입에서 덩이 손뼉 치기를 한 번 더 한다.',
        exitTicket: [
          { type: 'tool', tool: 'wordcards', options: { mode: 'pick', basket: '알맞게 끊은 문장', shuffle: false, cards: [{ id: 'e1', text: 'I have / a little / brother.' }, { id: 'e2', text: 'I have a little brother / at home.' }, { id: 'e3', text: 'I / have / a / little / brother.' }] }, prompt: 'I have a little brother at home. 알맞게 끊은 카드 하나를 골라 보세요.', target: { pick: ['e2'] }, difficulty: 0.2 },
          { type: 'choice', prompt: '발표를 잘하는 방법으로 알맞은 것은 무엇일까요?', options: ['외운 대로 쉬지 않고 빨리 말한다', '뜻 덩이마다 잠깐 쉬며 말한다', '낱말마다 끊어 말한다'], answer: 1, difficulty: 0.15, explain: '덩이마다 쉬면 듣는 사람이 뜻을 따라오기 쉬워요.' },
          { type: 'mood', prompt: '오늘 모둠 발표는 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '덩이로 끊어 발표하기',
      items: [
        { type: 'table', prompt: '문장을 소리 내어 읽고 쉬는 자리에 / 를 표시하세요.', columns: ['문장', '/ 표시'], cells: [['My best friend lives next to my house.', ''], ['On Sunday, I go to the library with my mom.', ''], ['I like winter because I can make a snowman.', '']], answer: 'My best friend / lives next to my house. / On Sunday, / I go to the library / with my mom. / I like winter / because I can make a snowman.' },
        { type: 'choice', prompt: '알맞게 끊은 것에 ○ 하세요.', options: ['I go / to school / by bus.', 'I go to / school by / bus.'], answer: 'I go / to school / by bus.' },
        { type: 'choice', prompt: '발표 첫 문장으로 알맞은 것에 ○ 하세요.', options: ['Thank you for listening.', 'Hello, everyone.', 'It is red.'], answer: 'Hello, everyone.' },
        { type: 'short', prompt: '세 문장 발표문을 쓰고 쉬는 자리에 / 를 표시하세요.' },
      ],
      easy: {
        note: '함께 붙어 다니는 낱말(my favorite season, every Sunday)은 한 덩이예요.',
        items: [
          { type: 'choice', prompt: '알맞게 끊은 것에 ○ 하세요.', options: ['I like / apples.', 'I / like / apples.'], answer: 'I like / apples.' },
          { type: 'choice', prompt: '발표를 마칠 때 하는 말에 ○ 하세요.', options: ['Hello.', 'Thank you.'], answer: 'Thank you.' },
          { type: 'short', prompt: 'Hello, I am ___. 빈칸을 채워 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '알맞은 카드에 초록 테두리가 생기고, 어색하게 끊은 카드를 넣으면 까닭을 말해 주고 되돌려요.',
      base: '다 고르거나 놓은 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '덩이가 넷인 긴 문장에서 가운데가 끊긴 함정 카드를 가려내야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 외운 대로 숨도 쉬지 않고 빠르게 말한다 → 덩이 사이 손뼉 한 번. ② 낱말마다 끊는다 → 한 덩이는 이어서 한 박처럼. ③ because·with 바로 뒤에서 끊는다 → 이어 주는 말은 다음 덩이의 머리. 모둠 발표 4명×약 40초로 7분 남짓이면 끝난다. 덩이 나누기는 하나로 못 박기 어려운 곳이 있어 문항에는 분명히 어색한 끊기만 함정으로 넣었다.',
  }));

  // ───────────── 15차시 (practice) 발표 뒤 스스로 짚기 ─────────────
  L.push(lesson(15, '[6영02-01]', {
    title: '발표 뒤 어색했던 곳을 짚고 고쳐 다시 말하기',
    objective: '발표를 마친 뒤 쉬는 자리와 힘준 낱말 가운데 어색했던 곳을 스스로 짚고, 그곳을 고쳐 다시 말할 수 있다.',
    illustration: {
      prompt: PROMPT('a child listening to a recording of their own short speech on a tablet, circling one part of a paper script with a pencil'),
      scene: SCENE('My dog / is CUTE.', '어색한 곳을 짚고 다시', [{ motif: 'dog', x: 90, y: 214 }, { motif: 'star', x: 400, y: 70, color: 'buttercup' }]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '선생님이 짧은 발표를 한다. "My dog / is small. She / likes to / run in the / park." 하고 마지막 문장을 일부러 덩이 가운데서 끊는다. "선생님 발표에서 어색한 곳이 있었나요? 어디였나요?" 학생이 짚으면 "발표를 마친 뒤 이렇게 스스로 짚을 수 있으면 다음 발표가 좋아져요."라고 말하고, 오늘은 어색한 곳을 쉬는 자리 문제와 힘주기 문제로 나누어 본다고 알린다.',
        student: '선생님 발표를 듣고, 어색하게 들린 곳을 짚어 말해 봐요.',
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 어색했던 까닭을 쉬는 자리와 힘주기로 나누기', minutes: 12, tool: 'wordcards',
            teacher: '"어색한 곳을 찾았으면 무엇을 고칠지 알아야 해요. 끊는 곳 문제인가요, 세게 말한 낱말 문제인가요?" 1~4차시의 ●○와 14차시의 / 를 칠판에 다시 적는다. 발표 내용(무엇을 말했는지)을 고칠 점으로 고르는 학생에게 "오늘은 말한 내용이 아니라 들리는 소리를 짚어요."라고 알려 준다.',
            task: '친구들이 발표를 마치고 짚은 어색한 점 카드를 "쉬는 자리" 칸과 "힘주기" 칸에 나누어요.',
            levels: LV({ mode: 'sort', shuffle: false, slots: [{ id: 'pause', label: '/ 쉬는 자리를 고쳐요' }, { id: 'stress', label: '● 힘주기를 고쳐요' }] }),
            items: [
              { prompt: '친구들이 스스로 짚은 어색한 점이에요. 무엇을 고쳐야 하는지 나누어 보세요.',
                toolOptions: { cards: [{ id: 'p1', text: '숨도 안 쉬고 한 번에 다 말했어요.' }, { id: 's1', text: 'a와 the를 가장 세게 말했어요.' }, { id: 'p2', text: 'my와 dog 사이에서 쉬었어요.' }, { id: 's2', text: '모든 낱말을 똑같이 세게 말했어요.' }] },
                target: { sort: { pause: ['p1', 'p2'], stress: ['s1', 's2'] } }, difficulty: 0.15,
                hints: ['카드가 언제 쉬었는지를 말하는지, 어느 낱말을 얼마나 세게 말했는지를 말하는지 보세요.'] },
              { prompt: '발표 녹음을 듣고 짚은 어색한 점이에요. 무엇을 고쳐야 하는지 나누어 보세요.',
                toolOptions: { cards: [{ id: 's1', text: '가장 중요한 낱말 soccer를 작게 말했어요.' }, { id: 'p1', text: 'because 바로 뒤에서 멈췄어요.' }, { id: 's2', text: 'banana를 BA-na-na로 말했어요.' }, { id: 'p2', text: '낱말 하나마다 끊어 말했어요.' }] },
                target: { sort: { pause: ['p1', 'p2'], stress: ['s1', 's2'] } }, difficulty: 0.25,
                hints: ['낱말 안의 마디를 잘못 세게 말한 것도 힘주기 문제예요.'] },
              { prompt: '모둠 친구가 들려준 말이에요. 소리를 고칠 점만 알맞은 칸에 나누어 보세요.',
                toolOptions: { cards: [{ id: 'p1', text: 'every와 Sunday 사이에서 쉬었어요.' }, { id: 's1', text: 'is를 문장에서 가장 세게 말했어요.' }, { id: 'p2', text: '문장이 끝났는데 쉬지 않고 다음 문장으로 갔어요.' }] },
                target: { sort: { pause: ['p1', 'p2'], stress: ['s1'] } }, difficulty: 0.2,
                hints: ['카드마다 "언제 쉬었나"와 "얼마나 세게"를 우리말로 바꾸어 말해 보세요.'],
                levels: { challenge: { prompt: '모둠 친구가 들려준 말이에요. 소리를 고칠 점만 나누고, 소리가 아닌 점은 카드 칸에 남겨 보세요.',
                  toolOptions: { cards: [{ id: 'p1', text: 'every와 Sunday 사이에서 쉬었어요.' }, { id: 's1', text: 'is를 문장에서 가장 세게 말했어요.' }, { id: 'p2', text: '문장이 끝났는데 쉬지 않고 다음 문장으로 갔어요.' }, { id: 'x1', text: '좋아하는 운동을 바꾸고 싶어요.', why: '발표 내용에 대한 생각이라 소리(쉬기·힘주기)를 고칠 점이 아니에요.' }] },
                  target: { sort: { pause: ['p1', 'p2'], stress: ['s1'] } } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 발표 기록에서 어색한 문장 찾고 고쳐 다시 말하기', minutes: 15, tool: 'wordcards',
            teacher: '"카드는 친구가 실제로 말한 대로 / 와 대문자를 적은 거예요. 소리 내어 그대로 읽어 보세요. 어느 문장이 어색한가요?" 고른 뒤 그 문장을 바르게 고쳐 말하게 한다. 마지막에는 짝끼리 지난 시간 발표를 다시 하고, 마친 사람이 먼저 "I think ... was awkward."처럼 어색했던 곳을 스스로 말한 다음 고쳐 한 번 더 말한다.',
            task: '친구가 말한 대로 적은 발표 기록 카드에서 어색하게 말한 문장 하나를 바구니에 넣어요(/ = 쉰 곳, 대문자 = 세게 말한 낱말). 그 문장을 고쳐 말해요.',
            levels: LV(PICK('어색한 문장')),
            items: [
              { prompt: '"우리 개" 발표 기록이에요. 어색하게 말한 문장 하나를 골라 보세요.',
                toolOptions: { cards: [{ id: 'c1', text: 'I have / a DOG.', why: '덩이 사이에서 쉬고 dog을 세게 말했어요.' }, { id: 'c2', text: 'Her NAME / is COCO.', why: '덩이 사이에서 쉬고 뜻을 담은 낱말에 힘을 주었어요.' }, { id: 'c3', text: 'She / likes to / run in the / park.' }] },
                target: { pick: ['c3'] }, difficulty: 0.15,
                hints: ['카드를 적힌 그대로 읽어 보세요. / 가 덩이 가운데 있는 문장을 찾아요.'] },
              { prompt: '"내 취미" 발표 기록이에요. 어색하게 말한 문장 하나를 골라 보세요.',
                toolOptions: { cards: [{ id: 'c1', text: 'My hobby / is DRAWING.', why: '뜻을 담은 drawing을 세게 말했어요.' }, { id: 'c2', text: 'I DRAW / CATS and DOGS.', why: '뜻을 담은 낱말에 힘을 주었어요.' }, { id: 'c3', text: 'I draw THE pictures / AT night.' }] },
                target: { pick: ['c3'] }, difficulty: 0.25,
                hints: ['대문자로 적힌 낱말이 뜻을 담은 낱말인지 가볍게 넘길 낱말인지 보세요.'] },
              { prompt: '"우리 학교" 발표 기록이에요. 어색하게 말한 문장 하나를 골라 보세요.',
                toolOptions: { cards: [{ id: 'c1', text: 'Our school / is BIG.', why: '덩이 사이에서 쉬고 big에 힘을 주었어요.' }, { id: 'c2', text: 'It has a big playgroundandaswimmingpool.' }, { id: 'c3', text: 'I LOVE / my SCHOOL.', why: '뜻을 담은 낱말에 힘을 주었어요.' }] },
                target: { pick: ['c2'] }, difficulty: 0.2,
                hints: ['낱말이 붙어 적힌 곳은 쉬지 않고 한숨에 말했다는 뜻이에요.'],
                levels: { challenge: { prompt: '"우리 학교" 발표 기록이에요. 어색하게 말한 문장을 모두 골라 보세요.',
                  toolOptions: { cards: [{ id: 'c1', text: 'Our school / is BIG.', why: '덩이 사이에서 쉬고 big에 힘을 주었어요.' }, { id: 'c2', text: 'It has a big playgroundandaswimmingpool.' }, { id: 'c3', text: 'I LOVE / my SCHOOL.', why: '뜻을 담은 낱말에 힘을 주었어요.' }, { id: 'c4', text: 'My FAVORITE / PLACE IS / THE library.' }] },
                  target: { pick: ['c2', 'c4'] } } } },
              { prompt: '짝에게 지난 시간 발표를 다시 해요. 마친 뒤 어색했던 곳 하나를 내가 먼저 말하고, 그곳을 고쳐 한 번 더 말해요. 바꾸어 한 뒤 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"내 발표에서 스스로 짚은 곳은 쉬는 자리였나요, 힘주기였나요?" 손을 들어 나누어 보고 출구 질문을 푼다. 출구 2번에서 "다시 외운다"를 고른 학생에게는 어색한 곳 한 군데만 고쳐 말하면 된다는 것을 다시 알려 준다.',
        exitTicket: [
          { type: 'tool', tool: 'wordcards', options: { mode: 'pick', basket: '어색한 문장', shuffle: false, cards: [{ id: 'e1', text: 'I like / SPRING.' }, { id: 'e2', text: 'I can SEE / FLOWERS.' }, { id: 'e3', text: 'The / days / are / long.' }] }, prompt: '"좋아하는 계절" 발표 기록이에요. 어색하게 말한 문장 하나를 골라 보세요.', target: { pick: ['e3'] }, difficulty: 0.2 },
          { type: 'choice', prompt: '발표를 마친 뒤 어색했던 곳을 찾았어요. 가장 좋은 다음 행동은 무엇일까요?', options: ['처음부터 다시 외운다', '어색했던 곳을 고쳐 그 부분을 다시 말해 본다', '다음에는 발표하지 않는다'], answer: 1, difficulty: 0.15, explain: '어색한 곳 한 군데를 고쳐 다시 말하면 발표가 금방 좋아져요.' },
          { type: 'mood', prompt: '오늘 내 발표를 돌아보니 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '내 발표 돌아보기',
      items: [
        { type: 'table', prompt: '내 발표에서 어색했던 곳과 고친 방법을 쓰세요.', columns: ['어색했던 문장', '쉬는 자리 / 힘주기', '고쳐 말한 문장'], rows: 2 },
        { type: 'choice', prompt: '"a와 the를 가장 세게 말했어요."는 무엇을 고쳐야 할까요? ○ 하세요.', options: ['쉬는 자리', '힘주기'], answer: '힘주기' },
        { type: 'choice', prompt: '"with와 my 사이에서 쉬었어요."는 무엇을 고쳐야 할까요? ○ 하세요.', options: ['쉬는 자리', '힘주기'], answer: '쉬는 자리' },
        { type: 'short', prompt: 'My dog / is / very / cute. 를 알맞게 끊고 힘줄 낱말에 ● 를 그려 다시 쓰세요.' },
      ],
      easy: {
        note: '/ 는 쉬는 곳, ● 는 세게 말하는 낱말이에요.',
        items: [
          { type: 'choice', prompt: '어색하게 끊은 것에 ○ 하세요.', options: ['I like / cats.', 'I / like / cats / very / much.'], answer: 'I / like / cats / very / much.' },
          { type: 'choice', prompt: '세게 말하면 어색한 낱말에 ○ 하세요.', options: ['the', 'pizza'], answer: 'the' },
          { type: 'short', prompt: '내 발표에서 다시 말하고 싶은 문장 하나를 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 틀리게 놓으면 까닭을 말해 주고 되돌려요.',
      base: '다 나누거나 고른 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '소리가 아닌 생각 카드를 가려내고, 어색한 문장이 둘인 기록에서 둘 다 찾아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 어색했던 곳을 "다 이상했어요"로 뭉뚱그린다 → 한 문장만 골라 짚게 한다. ② 고칠 점으로 발표 내용을 고른다 → 오늘은 소리(쉬기·힘주기)만. ③ 어색했으니 처음부터 다시 외우려 한다 → 어색한 곳만 고쳐 그 부분을 다시. 녹음 기능이 있으면 짝의 휴대기기 대신 교실 기기로 녹음하고 수업 뒤 지운다.',
  }));

  // ───────────── 16차시 (extend) 주말 발표 ─────────────
  L.push(lesson(16, '[6영02-01]', {
    title: '주말 이야기 발표를 처음·가운데·끝으로 짜서 리듬 있게 하기',
    objective: '주말에 한 일을 처음(인사·주제)·가운데(한 일)·끝(느낌·인사)으로 짠 발표를 덩이로 끊어 말하고, 마친 뒤 내 발표의 리듬을 스스로 평가할 수 있다.',
    illustration: {
      prompt: PROMPT('a child presenting about a weekend trip to the zoo, holding paper cards that show an elephant, a sun and a smiling face'),
      scene: SCENE('On Saturday, / I went to the zoo.', '처음 · 가운데 · 끝', [{ motif: 'tree', x: 70, y: 214 }, { motif: 'sun', x: 410, y: 60 }]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"지난 시간에는 세 문장으로 발표했어요. 오늘은 주말 이야기를 다섯 문장 정도로 해 볼 거예요. 문장이 많아지면 무엇이 더 필요할까요?" 처음·가운데·끝으로 묶어야 듣는 사람이 길을 잃지 않는다는 것을 끌어낸다. 선생님의 주말 이야기를 덩이로 끊어 들려주고, 처음·가운데·끝이 바뀌는 곳에서 손을 들게 한다.',
        student: '선생님의 주말 이야기를 듣고, 처음·가운데·끝이 바뀌는 곳에서 손을 들어 봐요.',
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 발표 문장을 처음·가운데·끝으로 나누기', minutes: 10, tool: 'wordcards',
            teacher: '"인사와 무엇을 말할지는 처음, 한 일은 가운데, 느낌과 끝인사는 끝이에요." 가운데에는 On Saturday처럼 때를 말하는 덩이가 자주 나온다는 것을 짚는다. 느낌 문장(It was fun.)을 가운데에 넣는 학생에게 "한 일을 다 말하고 나서 느낌을 말하면 발표가 끝난다는 것이 들려요."라고 알려 준다.',
            task: '주말 이야기 발표 문장 카드를 처음·가운데·끝 칸에 나누어요.',
            levels: LV({ mode: 'sort', shuffle: false, slots: [{ id: 'begin', label: '처음(인사·주제)' }, { id: 'middle', label: '가운데(한 일)' }, { id: 'end', label: '끝(느낌·인사)' }] }),
            items: [
              { prompt: '소민이의 주말 발표 문장이에요. 처음·가운데·끝으로 나누어 보세요.',
                toolOptions: { cards: [{ id: 'b1', text: "Hi, I'm Somin." }, { id: 'm1', text: 'On Saturday, I went to the zoo.' }, { id: 'e1', text: 'It was a great weekend.' }, { id: 'b2', text: 'I want to tell you about my weekend.' }, { id: 'm2', text: 'I saw a baby elephant.' }, { id: 'e2', text: 'Thank you for listening.' }] },
                target: { sort: { begin: ['b1', 'b2'], middle: ['m1', 'm2'], end: ['e1', 'e2'] } }, difficulty: 0.2,
                hints: ['카드마다 인사인지, 한 일인지, 느낌인지 우리말로 먼저 말해 보세요.'] },
              { prompt: '준서의 주말 발표 문장이에요. 처음·가운데·끝으로 나누어 보세요.',
                toolOptions: { cards: [{ id: 'm1', text: 'On Sunday morning, I baked cookies with my mom.' }, { id: 'e1', text: 'I was very happy.' }, { id: 'b1', text: 'Hello, everyone.' }, { id: 'm2', text: 'In the afternoon, I gave some to my neighbor.' }, { id: 'b2', text: "Let me talk about my Sunday." }] },
                target: { sort: { begin: ['b1', 'b2'], middle: ['m1', 'm2'], end: ['e1'] } }, difficulty: 0.25,
                hints: ['때를 말하는 덩이(On Sunday morning, In the afternoon)로 시작하는 문장이 무엇을 말하는지 보세요.'] },
              { prompt: '하린이의 주말 발표 문장이에요. 처음·가운데·끝으로 나누어 보세요.',
                toolOptions: { cards: [{ id: 'b1', text: "Good morning. I'm Harin." }, { id: 'm1', text: 'On Saturday, it rained all day.' }, { id: 'm2', text: 'So I read three comic books at home.' }, { id: 'e1', text: 'It was a quiet but fun weekend.' }, { id: 'e2', text: 'Thanks!' }] },
                target: { sort: { begin: ['b1'], middle: ['m1', 'm2'], end: ['e1', 'e2'] } }, difficulty: 0.25,
                hints: ['비가 온 것도 주말에 있었던 일이에요. 느낌을 말하는 문장이 어느 것인지 찾아보세요.'],
                levels: { challenge: { prompt: '하린이의 주말 발표 문장이에요. 처음·가운데·끝으로 나누고, 주말 이야기와 상관없는 문장은 카드 칸에 남겨 보세요.',
                  toolOptions: { cards: [{ id: 'b1', text: "Good morning. I'm Harin." }, { id: 'm1', text: 'On Saturday, it rained all day.' }, { id: 'm2', text: 'So I read three comic books at home.' }, { id: 'e1', text: 'It was a quiet but fun weekend.' }, { id: 'e2', text: 'Thanks!' }, { id: 'x1', text: 'My birthday is in March.', why: '생일 이야기는 주말에 한 일과 상관없어 발표에서 빼요.' }] },
                  target: { sort: { begin: ['b1'], middle: ['m1', 'm2'], end: ['e1', 'e2'] } } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 덩이 카드로 긴 문장 만들어 한 덩이씩 말하기', minutes: 18, tool: 'wordcards',
            teacher: '"긴 문장도 덩이 카드 하나가 한 번에 말하는 크기예요. 카드 하나를 말하고 살짝 쉬어요." 덩이를 다 놓으면 카드 하나마다 손뼉을 치며 읽게 한다. 쉼표(,)가 붙은 덩이는 문장 맨 앞에 오는 때를 나타내는 말이라는 것을 짚는다. 모둠(4명)에서 한 사람씩 주말 발표를 하고, 마친 사람은 출구의 자기 평가를 위해 어색했던 곳 하나를 스스로 떠올린다.',
            task: '덩이 카드를 차례대로 놓아 발표 문장을 만들어요. 카드 하나를 말할 때마다 살짝 쉬며 소리 내어 읽어요.',
            levels: LV({ mode: 'order', shuffle: true }),
            items: [
              { prompt: '덩이 카드를 차례대로 놓아 "일요일 아침에 나는 언니와 강을 따라 자전거를 탔어요."를 만들어 보세요.',
                toolOptions: { cards: ['along the river', 'On Sunday morning,', 'with my sister.', 'I rode my bike'] },
                target: { order: ['On Sunday morning,', 'I rode my bike', 'along the river', 'with my sister.'] }, difficulty: 0.25,
                hints: ['쉼표가 붙은 덩이와 마침표가 붙은 덩이가 어디에 오는지 먼저 정해 보세요.'] },
              { prompt: '덩이 카드를 차례대로 놓아 "토요일에 우리 가족은 할머니 댁에 갔어요."를 만들어 보세요.',
                toolOptions: { cards: ["to my grandma's house.", 'my family went', 'On Saturday,'] },
                target: { order: ['On Saturday,', 'my family went', "to my grandma's house."] }, difficulty: 0.15,
                hints: ['누가 무엇을 했는지 덩이가 가운데에 와요.'] },
              { prompt: '덩이 카드를 차례대로 놓아 "저녁에 나는 아빠와 함께 맛있는 피자를 만들었어요."를 만들어 보세요.',
                toolOptions: { cards: ['a tasty pizza', 'In the evening,', 'I made', 'with my dad.'] },
                target: { order: ['In the evening,', 'I made', 'a tasty pizza', 'with my dad.'] }, difficulty: 0.25,
                hints: ['누가 → 했다 → 무엇을 → 누구와 차례예요. 때를 말하는 덩이부터 놓아 보세요.'],
                levels: { challenge: { prompt: '덩이 카드를 차례대로 놓아 "저녁에 나는 아빠와 함께 부엌에서 맛있는 피자를 만들었어요."를 만들어 보세요.',
                  toolOptions: { cards: ['a tasty pizza', 'In the evening,', 'I made', 'with my dad', 'in the kitchen.'] },
                  target: { order: ['In the evening,', 'I made', 'a tasty pizza', 'with my dad', 'in the kitchen.'] } } } },
              { prompt: '내 주말 이야기를 처음·가운데·끝 다섯 문장 안팎으로 짜서 모둠에서 덩이로 끊어 발표해요. 모두 한 뒤 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"발표를 처음·가운데·끝으로 짜니 무엇이 달라졌나요?" 두세 명에게 듣는다. 출구 질문을 푼 뒤 마지막 칸에는 내 발표의 리듬을 솔직하게 고르라고 말한다. "어느 칸을 골라도 괜찮아요. 다음 연습을 정하려고 고르는 거예요."',
        exitTicket: [
          { type: 'tool', tool: 'wordcards', options: { mode: 'order', shuffle: false, cards: ['to the beach', 'Last Sunday,', 'we went'] }, prompt: '덩이 카드를 차례대로 놓아 "지난 일요일에 우리는 바닷가에 갔어요."를 만들어 보세요.', target: { order: ['Last Sunday,', 'we went', 'to the beach'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '"It was a fun weekend."는 발표의 어디에 오면 좋을까요?', options: ['처음', '가운데', '끝'], answer: 2, difficulty: 0.15, explain: '한 일을 다 말한 뒤 느낌을 말하면 발표가 끝난다는 것이 들려요.' },
          { type: 'tool', tool: 'emotion', options: SELF('주말 이야기 발표를 덩이로 끊어 리듬 있게 말했어요'), prompt: '내 발표의 리듬은 어느 정도였나요? 솔직하게 골라 보세요.', target: { level: 'any' } },
        ],
      },
    ],
    worksheet: {
      title: '주말 이야기 발표',
      items: [
        { type: 'table', prompt: '내 주말 발표를 처음·가운데·끝으로 짜서 쓰세요.', columns: ['처음(인사·주제)', '가운데(한 일)', '끝(느낌·인사)'], rows: 2 },
        { type: 'choice', prompt: '발표의 가운데에 오는 문장에 ○ 하세요.', options: ['Hello, everyone.', 'On Saturday, I played soccer.', 'Thank you.'], answer: 'On Saturday, I played soccer.' },
        { type: 'choice', prompt: '알맞게 끊은 것에 ○ 하세요.', options: ['On Saturday, / I went / to the park.', 'On / Saturday, I / went to the / park.'], answer: 'On Saturday, / I went / to the park.' },
        { type: 'short', prompt: '내 발표에서 가장 자신 있게 말한 문장 하나를 쓰고, 쉬는 자리에 / 를 표시하세요.' },
      ],
      easy: {
        note: '처음 = 인사, 가운데 = 한 일, 끝 = 느낌과 인사.',
        items: [
          { type: 'choice', prompt: '발표의 끝에 오는 말에 ○ 하세요.', options: ['Thank you.', 'On Sunday, I swam.'], answer: 'Thank you.' },
          { type: 'choice', prompt: '"토요일에"를 영어로 쓴 것에 ○ 하세요.', options: ['On Saturday,', 'In Saturday,'], answer: 'On Saturday,' },
          { type: 'short', prompt: 'On Sunday, I ___. 빈칸을 채워 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 틀리게 놓으면 까닭을 말해 주고 되돌려요.',
      base: '다 나누거나 놓은 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '주말과 상관없는 문장을 가려내고, 덩이가 다섯인 긴 문장을 만들어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 문장이 늘면 다시 쉬지 않고 빨리 말한다 → 덩이 카드 하나에 손뼉 하나. ② 느낌 문장을 중간에 넣어 발표가 끝난 줄 알게 만든다 → 처음·가운데·끝 칸을 먼저 채운다. ③ went·made처럼 지난 일을 말하는 모양을 어려워한다 → 이 차시는 발표 리듬이 목표이므로 덩이 카드의 모양을 그대로 쓰게 하고 따로 문법을 가르치지 않는다. 출구 마지막 칸은 정직한 자기 평가이며 어느 칸이든 맞음으로 처리된다. 이 차시로 발표 부분(14~16차시)을 마친다.',
  }));

  // ───────────── 17차시 (core) 실물 관찰: 모양과 쓰임 ─────────────
  L.push(lesson(17, '[6영02-02]', {
    title: '교실 물건을 살펴보고 모양과 쓰임을 영어 문장으로 쓰기',
    objective: '교실 물건 하나를 살펴보고 모양(It is ~.)과 쓰임(It is for ~.)을 영어 차례에 맞는 두 문장으로 쓸 수 있다.',
    illustration: {
      prompt: PROMPT('a child looking at a pencil, a ruler and a pair of scissors on a desk through a paper magnifying glass, with two short sentence strips'),
      scene: SCENE('It is long. It is for writing.', '모양 + 쓰임', [{ motif: 'pencil', x: 90, y: 214 }, { motif: 'book', x: 400, y: 214 }]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '자를 들어 보이며 "이것을 영어로 설명해 볼까요? 우리말로 먼저 해 보면 \'길고 납작해요. 줄 긋는 데 써요.\'" 학생이 "It long flat."처럼 낱말만 늘어놓으면 칠판에 It is long and flat. / It is for drawing lines. 을 쓴다. "우리말 문장을 낱말만 바꾸면 영어가 될까요?" 우리말 차례를 그대로 옮긴 "It lines drawing for is." 를 함께 읽어 보며 어색함을 느끼게 한다. 영어는 It is 다음에 모양, It is for 다음에 쓰임이 온다는 틀을 남긴다.',
        student: '선생님이 든 자를 살펴보고, 모양과 쓰임을 우리말로 먼저 말한 뒤 영어로 말해 봐요.',
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 물건과 알맞은 관찰 문장 짝 짓기', minutes: 12, tool: 'wordcards',
            teacher: '"물건을 실제로 손에 들고 보세요. 어떻게 생겼나요? 무엇을 할 때 쓰나요?" 모둠마다 연필·자·가위·풀·지우개를 하나씩 나누어 준다. 짝 지은 뒤에는 물건을 들고 문장을 읽게 한다. for 다음에 cut처럼 동작 낱말만 쓰는 학생에게 "for 다음에는 cutting처럼 -ing가 붙어요."라고 짚는다.',
            task: '왼쪽 물건에 알맞은 관찰 문장 카드를 놓아요. 실제 물건을 들고 짝지은 문장을 읽어요.',
            levels: LV({ mode: 'match', shuffle: false }),
            items: [
              { prompt: '물건마다 쓰임을 알려 주는 문장을 짝 지어 보세요.',
                toolOptions: { slots: [{ id: 'pencil', label: '연필', motif: 'pencil' }, { id: 'scissors', label: '가위' }, { id: 'book', label: '책', motif: 'book' }],
                  cards: [{ id: 'u1', text: 'It is for writing.' }, { id: 'u2', text: 'It is for cutting paper.' }, { id: 'u3', text: 'It is for reading.' }] },
                target: { match: { pencil: 'u1', scissors: 'u2', book: 'u3' } }, difficulty: 0.1,
                hints: ['물건을 손에 들고 무엇을 할 때 쓰는지 몸짓으로 해 보세요. 그 몸짓에 맞는 낱말을 카드에서 찾아요.'] },
              { prompt: '물건마다 모양을 알려 주는 문장을 짝 지어 보세요.',
                toolOptions: { slots: [{ id: 'ball', label: '공', motif: 'ball' }, { id: 'pencil', label: '연필', motif: 'pencil' }, { id: 'book', label: '책', motif: 'book' }],
                  cards: [{ id: 's1', text: 'It is round.' }, { id: 's2', text: 'It is long and thin.' }, { id: 's3', text: 'It has many pages.' }] },
                target: { match: { ball: 's1', pencil: 's2', book: 's3' } }, difficulty: 0.15,
                hints: ['round, long and thin, many pages가 어떤 모습인지 손으로 그려 보세요.'] },
              { prompt: '물건마다 쓰임을 알려 주는 문장을 짝 지어 보세요.',
                toolOptions: { slots: [{ id: 'umbrella', label: '우산', motif: 'umbrella' }, { id: 'glue', label: '풀' }, { id: 'eraser', label: '지우개' }],
                  cards: [{ id: 'u1', text: 'It is for rainy days.' }, { id: 'u2', text: 'It is for sticking paper.' }, { id: 'u3', text: 'It is for erasing mistakes.' }] },
                target: { match: { umbrella: 'u1', glue: 'u2', eraser: 'u3' } }, difficulty: 0.2,
                hints: ['카드에서 rainy, sticking, erasing이 어떤 뜻인지 짐작해 보고, 그 일에 쓰는 물건을 찾아요.'],
                levels: { challenge: { prompt: '물건마다 쓰임을 알려 주는 문장을 짝 짓고, 어디에도 맞지 않는 카드는 남겨 보세요.',
                  toolOptions: { cards: [{ id: 'u1', text: 'It is for rainy days.' }, { id: 'u2', text: 'It is for sticking paper.' }, { id: 'u3', text: 'It is for erasing mistakes.' }, { id: 'ux', text: 'It is for cut.', why: 'for 다음에는 cutting처럼 -ing가 붙고, 가위는 왼쪽에 없어요.' }] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 영어 차례에 맞게 쓴 관찰 문장 고르고 직접 쓰기', minutes: 15, tool: 'wordcards',
            teacher: '"우리말은 \'그것은 둥글다\'처럼 끝에 \'이다\'가 오지만 영어는 It is가 앞에 와요." 우리말 차례로 쓴 카드를 함께 소리 내어 읽고 왜 어색한지 말하게 한다. 고른 뒤에는 모둠 물건 하나를 골라 모양 문장 하나, 쓰임 문장 하나를 공책에 직접 쓰게 한다. 다 쓴 사람은 짝에게 읽어 주고, 짝은 어떤 물건인지 가리킨다.',
            task: '같은 뜻을 쓴 카드 가운데 영어 차례에 맞게 쓴 문장 하나를 바구니에 넣어요. 그다음 모둠 물건 하나를 골라 두 문장을 써요.',
            levels: LV(PICK('바르게 쓴 문장')),
            items: [
              { prompt: '"그것은 둥글어요."를 영어 차례에 맞게 쓴 카드 하나를 골라 보세요.',
                toolOptions: { cards: [{ id: 'c1', text: 'It round is.', why: '우리말 차례 그대로예요. 영어는 It is 다음에 모양이 와요.' }, { id: 'c2', text: 'It is round.' }, { id: 'c3', text: 'Round it is.', why: '모양 낱말이 맨 앞에 와서 어색해요.' }] },
                target: { pick: ['c2'] }, difficulty: 0.1,
                hints: ['칠판의 틀(It is + 모양)과 카드를 하나씩 견주어 보세요.'] },
              { prompt: '"그것은 종이를 자르는 데 써요."를 영어 차례에 맞게 쓴 카드 하나를 골라 보세요.',
                toolOptions: { cards: [{ id: 'c1', text: 'It paper cutting for is.', why: '우리말 차례대로 낱말만 바꾸었어요.' }, { id: 'c2', text: 'It is for cut paper.', why: 'for 다음에는 cutting처럼 -ing가 붙어요.' }, { id: 'c3', text: 'It is for cutting paper.' }] },
                target: { pick: ['c3'] }, difficulty: 0.25,
                hints: ['It is for 다음에 오는 동작 낱말의 끝 모양을 잘 보세요.'] },
              { prompt: '"그것은 작고 하얘요."를 영어 차례에 맞게 쓴 카드 하나를 골라 보세요.',
                toolOptions: { cards: [{ id: 'c1', text: 'It is small and white.' }, { id: 'c2', text: 'It small white is.', why: '우리말 차례 그대로예요.' }, { id: 'c3', text: 'Small and white it.', why: 'It is가 빠졌어요.' }] },
                target: { pick: ['c1'] }, difficulty: 0.15,
                hints: ['It is 틀이 문장 어디에 있는지 보고, 우리말 차례 그대로인 카드부터 지워 보세요.'],
                levels: { challenge: { prompt: '"그것은 선을 곧게 긋는 데 써요."를 영어 차례에 맞게 쓴 카드 하나를 골라 보세요.',
                  toolOptions: { cards: [{ id: 'c1', text: 'It is for drawing straight lines.' }, { id: 'c2', text: 'It straight lines drawing for is.', why: '우리말 차례대로 낱말만 바꾸었어요.' }, { id: 'c3', text: 'It is for draw straight lines.', why: 'for 다음에는 drawing처럼 -ing가 붙어요.' }, { id: 'c4', text: 'It is drawing for straight lines.', why: 'for가 쓰임 낱말 앞에 와야 해요.' }] },
                  target: { pick: ['c1'] } } } },
              { prompt: '모둠 물건 하나를 골라 모양 문장 하나(It is ~.)와 쓰임 문장 하나(It is for ~.)를 공책에 써요. 짝에게 읽어 주고 짝이 물건을 가리키면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"관찰한 것을 영어로 쓸 때 어떤 틀을 썼나요?" It is + 모양, It is for + -ing 를 두세 명이 말하게 한 뒤 출구 질문을 푼다. 출구 1번에서 우리말 차례 카드를 고른 학생은 공책에 쓴 두 문장을 칠판 틀과 다시 견주어 본다.',
        exitTicket: [
          { type: 'tool', tool: 'wordcards', options: { mode: 'pick', basket: '바르게 쓴 문장', shuffle: false, cards: [{ id: 'e1', text: 'It is for drinking water.' }, { id: 'e2', text: 'It water drinking for is.' }, { id: 'e3', text: 'It is for drink water.' }] }, prompt: '컵을 보고 "물 마시는 데 써요."를 영어 차례에 맞게 쓴 카드 하나를 골라 보세요.', target: { pick: ['e1'] }, difficulty: 0.2 },
          { type: 'choice', prompt: '공을 살펴보고 모양을 쓴 문장으로 알맞은 것은 무엇일까요?', options: ['It round is.', 'It is round.', 'It is for round.'], answer: 1, difficulty: 0.1, explain: '모양은 It is 다음에 써요. for는 쓰임을 말할 때 써요.' },
          { type: 'short', prompt: '필통을 살펴보고 모양이나 쓰임을 알려 주는 영어 문장 하나를 쓰세요.' },
        ],
      },
    ],
    worksheet: {
      title: '관찰 문장 쓰기',
      items: [
        { type: 'table', prompt: '물건을 살펴보고 모양과 쓰임을 영어로 쓰세요.', columns: ['물건', '모양 It is ~.', '쓰임 It is for ~.'], cells: [['연필', '', ''], ['자', '', ''], ['지우개', '', '']] },
        { type: 'choice', prompt: '영어 차례에 맞게 쓴 문장에 ○ 하세요.', options: ['It long is.', 'It is long.', 'Long it is.'], answer: 'It is long.' },
        { type: 'choice', prompt: '"그것은 읽는 데 써요."를 바르게 쓴 것에 ○ 하세요.', options: ['It is for reading.', 'It is for read.', 'It reading for is.'], answer: 'It is for reading.' },
        { type: 'short', prompt: '교실에서 물건 하나를 골라 모양 문장과 쓰임 문장을 하나씩 쓰세요.' },
      ],
      easy: {
        note: '모양: It is + 모양.  쓰임: It is for + ~ing.',
        items: [
          { type: 'choice', prompt: '공의 모양에 ○ 하세요.', options: ['It is round.', 'It is long.'], answer: 'It is round.' },
          { type: 'choice', prompt: '연필의 쓰임에 ○ 하세요.', options: ['It is for writing.', 'It is for eating.'], answer: 'It is for writing.' },
          { type: 'short', prompt: 'It is ___. 빈칸에 지우개의 모양을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 짝에 초록 테두리가 생기고, 틀린 카드를 넣으면 까닭을 말해 주고 되돌려요.',
      base: '다 짝 짓거나 고른 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '-ing가 빠진 함정 카드와 for 자리가 틀린 카드까지 가려내야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 우리말 차례 그대로 낱말만 영어로 바꾼다(It round is.) → It is 틀을 칠판에 남겨 둔다. ② for 다음에 동작 낱말을 그대로 쓴다(for cut) → for + -ing. ③ 모양과 쓰임을 한 문장에 섞는다 → 이 차시는 두 문장으로 나누어 쓴다. 실제 물건을 손에 들고 관찰하게 하고, 가위는 날을 닫은 채 돌린다.',
  }));

  // ───────────── 18차시 (practice) 다시 읽으며 채우기 ─────────────
  L.push(lesson(18, '[6영02-02]', {
    title: '쓴 관찰 문장을 다시 읽고 빠진 낱말과 문장 부호 채우기',
    objective: '관찰 문장을 소리 내어 다시 읽으며 빠진 낱말(is·for·has)과 대문자·마침표·물음표를 찾아 채울 수 있다.',
    illustration: {
      prompt: PROMPT('a child reading a sentence strip aloud and adding a missing word card with a small paper arrow, next to a red bicycle and a clock'),
      scene: SCENE('It ^ red.  →  It is red.', '다시 읽고 빠진 것 채우기', [{ motif: 'house', x: 80, y: 218, color: 'sky' }, { motif: 'flower', x: 400, y: 226, color: 'rose' }]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '칠판에 "it red. It two wheels" 를 쓰고 학생과 함께 소리 내어 읽는다. "읽다가 걸리는 곳이 있었나요?" 학생이 is, has를 말하면 끼워 넣고, 첫 글자 대문자와 마침표도 고친다. "쓴 다음에 한 번 더 소리 내어 읽으면 빠진 것이 들려요. 눈으로만 보면 잘 안 보여요."라고 말하며 오늘은 다시 읽기로 빠진 것을 채운다고 알린다.',
        student: '칠판의 문장을 소리 내어 읽고, 걸리는 곳이 어디인지 말해 봐요.',
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 관찰 문장의 빈칸에 빠진 낱말·문장 부호 넣기', minutes: 13, tool: 'wordcards',
            teacher: '"빈칸에 카드를 하나씩 넣고 소리 내어 읽어 보세요. 말이 되는 카드는 하나예요." 카드를 넣어 읽어 보는 것을 먼저 보여 준다. 마침표와 물음표에서는 문장이 알리는 말인지 묻는 말인지 끝을 올리고 내리는 억양(5~7차시)과 이어 생각하게 한다.',
            task: '관찰 문장의 빈칸에 빠진 카드를 넣어요. 넣은 뒤 문장을 처음부터 소리 내어 읽어요.',
            levels: LV({ mode: 'fill', shuffle: false }),
            items: [
              { prompt: '가위를 관찰한 문장이에요. 빈칸에 빠진 낱말을 넣어 보세요.',
                toolOptions: { slots: [{ id: 'f1', label: 'It ___ blue.' }, { id: 'f2', label: 'It is ___ cutting paper.' }, { id: 'f3', label: 'It has ___ sharp blade.' }], cards: ['is', 'for', 'a'] },
                target: { fill: { f1: 'is', f2: 'for', f3: 'a' } }, difficulty: 0.15,
                hints: ['카드를 빈칸에 하나씩 넣어 소리 내어 읽어 보세요. 걸리지 않고 읽히는 카드가 맞아요.'] },
              { prompt: '자전거를 관찰한 문장이에요. 빈칸에 빠진 낱말을 넣어 보세요.',
                toolOptions: { slots: [{ id: 'f1', label: 'It ___ two wheels.' }, { id: 'f2', label: 'It ___ red.' }, { id: 'f3', label: 'It is for ___.' }], cards: ['has', 'is', 'riding'] },
                target: { fill: { f1: 'has', f2: 'is', f3: 'riding' } }, difficulty: 0.2,
                hints: ['가진 것을 말할 때와 생김새를 말할 때 쓰는 낱말이 달라요. for 다음에는 -ing 낱말이 와요.'] },
              { prompt: '시계를 보고 쓴 말이에요. 빈칸에 알맞은 문장 부호를 넣어 보세요.',
                toolOptions: { slots: [{ id: 'f1', label: 'It is a clock ___' }, { id: 'f2', label: 'What is it ___' }, { id: 'f3', label: 'Is it round ___' }], cards: [{ id: 'dot', text: '.' }, { id: 'q1', text: '?' }, { id: 'q2', text: '?' }] },
                target: { fill: { f1: 'dot', f2: ['q1', 'q2'], f3: ['q1', 'q2'] } }, difficulty: 0.2,
                hints: ['알려 주는 문장인지 묻는 문장인지 끝을 올리고 내리며 읽어 보세요.'],
                levels: { challenge: { prompt: '시계를 보고 쓴 말이에요. 빈칸에 알맞은 카드를 넣고, 맞지 않는 카드는 남겨 보세요.',
                  toolOptions: { slots: [{ id: 'f1', label: 'It is a clock ___' }, { id: 'f2', label: 'What is it ___' }, { id: 'f3', label: 'It ___ two hands.' }, { id: 'f4', label: 'It is for ___ the time.' }], cards: [{ id: 'dot', text: '.' }, { id: 'q1', text: '?' }, 'has', 'telling', { id: 'tell', text: 'tell', why: 'for 다음에는 telling처럼 -ing가 붙어요.' }] },
                  target: { fill: { f1: 'dot', f2: 'q1', f3: 'has', f4: 'telling' } } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 다시 읽어 빠진 것 없는 문장 고르고 짝 글 고쳐 주기', minutes: 14, tool: 'wordcards',
            teacher: '"문장마다 세 가지를 보세요: 첫 글자가 대문자인가요? 끝에 마침표가 있나요? is나 has가 빠지지 않았나요?" 손가락 셋을 하나씩 접으며 확인하게 한다. 마지막에는 17차시에 공책에 쓴 두 문장을 짝과 바꾸어 소리 내어 읽고, 빠진 곳에 ^ 표시를 해 돌려준다.',
            task: '관찰 문장 카드 가운데 빠진 낱말이나 문장 부호가 없는 문장만 바구니에 넣어요.',
            levels: LV(PICK('다 갖춘 문장')),
            items: [
              { prompt: '자를 관찰한 문장이에요. 빠진 것 없이 다 갖춘 문장만 골라 보세요.',
                toolOptions: { cards: [{ id: 'c1', text: 'It is a ruler.' }, { id: 'c2', text: 'it is long', why: '첫 글자 대문자와 마침표가 빠졌어요.' }, { id: 'c3', text: 'It flat.', why: 'is가 빠졌어요.' }, { id: 'c4', text: 'It is for measuring.' }] },
                target: { pick: ['c1', 'c4'] }, difficulty: 0.2,
                hints: ['손가락 셋을 접으며 보세요: 첫 글자 대문자, 끝의 문장 부호, 빠진 낱말.'] },
              { prompt: '물병을 관찰한 문장이에요. 빠진 것 없이 다 갖춘 문장만 골라 보세요.',
                toolOptions: { cards: [{ id: 'c1', text: 'It has a cap', why: '끝에 마침표가 빠졌어요.' }, { id: 'c2', text: 'It is green.' }, { id: 'c3', text: 'It for drinking.', why: 'is가 빠졌어요.' }, { id: 'c4', text: 'It is for drinking water.' }] },
                target: { pick: ['c2', 'c4'] }, difficulty: 0.25,
                hints: ['소리 내어 읽으며 "그래서 무엇을 하는 데 쓴다는 거지?" 하고 걸리는 곳이 없는지 들어 보세요.'] },
              { prompt: '친구 필통을 보고 쓴 말이에요. 빠진 것 없이 다 갖춘 문장만 골라 보세요.',
                toolOptions: { cards: [{ id: 'c1', text: 'Is it your pencil case?' }, { id: 'c2', text: 'It is soft.' }, { id: 'c3', text: 'what is in it', why: '첫 글자 대문자와 물음표가 빠졌어요.' }, { id: 'c4', text: 'It two zippers.', why: 'has가 빠졌어요.' }] },
                target: { pick: ['c1', 'c2'] }, difficulty: 0.25,
                hints: ['묻는 문장은 끝에 무엇이 와야 하는지도 보세요.'],
                levels: { challenge: { prompt: '친구 필통을 보고 쓴 말이에요. 빠진 것 없이 다 갖춘 문장만 골라 보세요.',
                  toolOptions: { cards: [{ id: 'c1', text: 'Is it your pencil case?' }, { id: 'c2', text: 'It is soft.' }, { id: 'c3', text: 'What is in it.', why: '묻는 문장인데 끝에 물음표가 아니라 마침표가 있어요.' }, { id: 'c4', text: 'It has two zippers.' }, { id: 'c5', text: 'It is for keep pencils.', why: 'for 다음에는 keeping처럼 -ing가 붙어요.' }] },
                  target: { pick: ['c1', 'c2', 'c4'] } } } },
              { prompt: '17차시에 공책에 쓴 관찰 문장을 짝과 바꾸어 소리 내어 읽어요. 빠진 곳에 ^ 를 표시해 돌려주고, 돌려받은 문장을 고쳐 쓴 뒤 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"다시 읽을 때 무엇을 살폈나요?" 손가락 셋(대문자·문장 부호·빠진 낱말)을 함께 접으며 말한 뒤 출구 질문을 푼다. 출구 1번에서 is를 넣지 못한 학생은 소리 내어 읽기를 짝과 한 번 더 한다.',
        exitTicket: [
          { type: 'tool', tool: 'wordcards', options: { mode: 'fill', shuffle: false, slots: [{ id: 'f1', label: 'It ___ yellow.' }, { id: 'f2', label: 'It ___ a long tail.' }], cards: ['is', 'has'] }, prompt: '장난감 원숭이를 보고 쓴 문장이에요. 빈칸에 빠진 낱말을 넣어 보세요.', target: { fill: { f1: 'is', f2: 'has' } }, difficulty: 0.2 },
          { type: 'choice', prompt: '빠진 것 없이 다 갖춘 문장은 무엇일까요?', options: ['it is a bag.', 'It is a bag', 'It is a bag.'], answer: 2, difficulty: 0.1, explain: '첫 글자가 대문자이고 끝에 마침표가 있어요.' },
          { type: 'mood', prompt: '오늘 다시 읽고 고치기는 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '다시 읽고 채우기',
      items: [
        { type: 'table', prompt: '빠진 낱말이나 문장 부호를 채워 문장을 다시 쓰세요.', columns: ['처음 쓴 문장', '고친 문장'], cells: [['it is a cup', ''], ['It two handles.', ''], ['It is for drink.', ''], ['What is it', '']], answer: 'It is a cup. / It has two handles. / It is for drinking. / What is it?' },
        { type: 'choice', prompt: 'It ___ four legs. (의자) 빈칸에 알맞은 것에 ○ 하세요.', options: ['is', 'has', 'for'], answer: 'has' },
        { type: 'check', prompt: '내가 쓴 문장을 다시 읽으며 확인한 것에 ✓ 하세요.', options: ['첫 글자가 대문자예요.', '끝에 마침표나 물음표가 있어요.', 'is나 has가 빠지지 않았어요.'] },
        { type: 'short', prompt: '내 물건 하나를 관찰해 두 문장을 쓰고, 다시 읽으며 빠진 것을 채우세요.' },
      ],
      easy: {
        note: '손가락 셋: 대문자, 문장 부호, 빠진 낱말(is·has).',
        items: [
          { type: 'choice', prompt: '다 갖춘 문장에 ○ 하세요.', options: ['It is red.', 'it red'], answer: 'It is red.' },
          { type: 'choice', prompt: 'It ___ big. 빈칸에 ○ 하세요.', options: ['is', 'has'], answer: 'is' },
          { type: 'short', prompt: 'it is small 을 바르게 고쳐 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 카드에 초록 테두리가 생기고, 틀린 카드를 넣으면 까닭을 말해 주고 되돌려요.',
      base: '다 채우거나 고른 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '-ing가 빠진 tell 카드와 물음표 자리의 마침표처럼 더 작은 실수를 가려내요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 눈으로만 훑어 빠진 낱말을 못 찾는다 → 반드시 소리 내어 읽게 한다. ② is와 has를 헷갈린다 → 생김새·색은 is, 가진 부분(바퀴·다리·손잡이)은 has. ③ 묻는 문장 끝에 마침표를 찍는다 → 억양(↗↘)과 이어 끝소리를 들어 보게 한다. 활동 2의 짝 고쳐 주기에서는 고친 곳에 ^ 표시만 하고 대신 써 주지 않는다.',
  }));

  // ───────────── 19차시 (extend) 재료까지 보태어 관찰 ─────────────
  L.push(lesson(19, '[6영02-02]', {
    title: '물건의 재료까지 보태어 세 문장 관찰 글 쓰기',
    objective: '실물을 만지고 살펴 모양·쓰임에 재료(It is made of ~.)를 보태어 세 문장 관찰 글을 쓰고, 다시 읽어 빠진 것을 채울 수 있다.',
    illustration: {
      prompt: PROMPT('a wooden spoon, a glass jar and a paper cup on a table, with a child touching them and three sentence strips about shape, use and material'),
      scene: SCENE('It is made of wood.', '모양 + 쓰임 + 재료', [{ motif: 'tree', x: 80, y: 214 }, { motif: 'leaf', x: 400, y: 200 }]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '나무 숟가락과 플라스틱 숟가락을 들고 "두 숟가락은 모양도 쓰임도 같아요. 그런데 무엇이 다를까요?" 학생이 "하나는 나무, 하나는 플라스틱"이라고 하면 It is made of wood. / It is made of plastic. 을 칠판에 쓴다. "made of 다음에는 무엇으로 만들었는지가 와요." 만져 보지 않고 \'아마 쇠일 거예요\'라고 짐작하는 학생에게 "직접 만져 보고 확인한 것만 써요."라고 짚는다.',
        student: '두 숟가락을 살펴보고, 무엇이 같고 무엇이 다른지 말해 봐요.',
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 관찰 문장을 모양·쓰임·재료로 나누기', minutes: 12, tool: 'wordcards',
            teacher: '"It is ~, It is for ~, It is made of ~ 가운데 어느 틀인지 보면 칸을 찾을 수 있어요." 색깔 문장(It is brown.)은 생김새이니 모양 칸에 넣는다고 미리 알려 준다. made of 문장을 쓰임 칸에 넣는 학생에게 "무엇에 쓰는지가 아니라 무엇으로 만들었는지예요."라고 짚는다.',
            task: '관찰 문장 카드를 생김새(모양·색), 쓰임, 재료 칸에 나누어요. 나눈 뒤 칸마다 하나씩 소리 내어 읽어요.',
            levels: LV({ mode: 'sort', shuffle: false, slots: [{ id: 'look', label: '생김새(모양·색)' }, { id: 'use', label: '쓰임' }, { id: 'made', label: '재료' }] }),
            items: [
              { prompt: '나무 숟가락을 관찰한 문장이에요. 생김새·쓰임·재료로 나누어 보세요.',
                toolOptions: { cards: [{ id: 'l1', text: 'It is long and brown.' }, { id: 'u1', text: 'It is for stirring soup.' }, { id: 'm1', text: 'It is made of wood.' }] },
                target: { sort: { look: ['l1'], use: ['u1'], made: ['m1'] } }, difficulty: 0.1,
                hints: ['문장 앞부분의 틀(It is, It is for, It is made of)을 먼저 찾아보세요.'] },
              { prompt: '유리병을 관찰한 문장이에요. 생김새·쓰임·재료로 나누어 보세요.',
                toolOptions: { cards: [{ id: 'm1', text: 'It is made of glass.' }, { id: 'l1', text: 'It is clear.' }, { id: 'u1', text: 'It is for keeping jam.' }, { id: 'l2', text: 'It has a round lid.' }] },
                target: { sort: { look: ['l1', 'l2'], use: ['u1'], made: ['m1'] } }, difficulty: 0.2,
                hints: ['has로 말한 부분의 생김새도 생김새 칸이에요.'] },
              { prompt: '종이컵과 쇠 숟가락을 관찰한 문장이에요. 생김새·쓰임·재료로 나누어 보세요.',
                toolOptions: { cards: [{ id: 'm1', text: 'The cup is made of paper.' }, { id: 'u1', text: 'The cup is for drinking juice.' }, { id: 'l1', text: 'The spoon is shiny.' }, { id: 'm2', text: 'The spoon is made of metal.' }, { id: 'u2', text: 'The spoon is for eating rice.' }] },
                target: { sort: { look: ['l1'], use: ['u1', 'u2'], made: ['m1', 'm2'] } }, difficulty: 0.25,
                hints: ['물건이 둘이어도 칸은 문장의 틀로 정해요.'],
                levels: { challenge: { prompt: '종이컵과 쇠 숟가락을 관찰한 문장이에요. 확인한 것만 나누고, 보거나 만져서 알 수 없는 문장은 남겨 보세요.',
                  toolOptions: { cards: [{ id: 'm1', text: 'The cup is made of paper.' }, { id: 'u1', text: 'The cup is for drinking juice.' }, { id: 'l1', text: 'The spoon is shiny.' }, { id: 'm2', text: 'The spoon is made of metal.' }, { id: 'u2', text: 'The spoon is for eating rice.' }, { id: 'x1', text: 'The spoon is very expensive.', why: '값은 보거나 만져서 알 수 없어요. 관찰 글에는 확인한 것만 써요.' }] },
                  target: { sort: { look: ['l1'], use: ['u1', 'u2'], made: ['m1', 'm2'] } } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 낱말 카드로 재료 문장 만들고 관찰 글 쓰기', minutes: 15, tool: 'wordcards',
            teacher: '"made of는 한 덩이예요. 떨어뜨리지 말고 함께 놓아요." 우리말 차례(그것은 / 유리로 / 만들어졌다)대로 glass를 made of 앞에 놓는 학생에게 칠판의 틀을 다시 가리킨다. 마지막에는 모둠 바구니(나무 자, 유리병, 종이컵, 플라스틱 통, 천 주머니)에서 하나를 골라 만지고 살펴 세 문장을 쓰고, 18차시처럼 다시 읽어 빠진 것을 채운다.',
            task: '낱말 카드를 차례대로 놓아 관찰 문장을 만들어요. 그다음 실물 하나를 골라 생김새·쓰임·재료 세 문장을 써요.',
            levels: LV({ mode: 'order', shuffle: true }),
            items: [
              { prompt: '낱말 카드를 차례대로 놓아 "그것은 유리로 만들었어요."를 영어로 만들어 보세요.',
                toolOptions: { cards: ['glass.', 'It', 'made of', 'is'] },
                target: { order: ['It', 'is', 'made of', 'glass.'] }, difficulty: 0.15,
                hints: ['칠판의 틀 It is made of 를 떠올리고, 마침표가 붙은 카드가 어디에 올지 정해 보세요.'] },
              { prompt: '낱말 카드를 차례대로 놓아 "이 주머니는 천으로 만들었어요."를 영어로 만들어 보세요.',
                toolOptions: { cards: ['is', 'cloth.', 'This bag', 'made of'] },
                target: { order: ['This bag', 'is', 'made of', 'cloth.'] }, difficulty: 0.2,
                hints: ['무엇이(This bag)가 맨 앞이고, 그다음은 It is made of 와 같은 차례예요.'] },
              { prompt: '낱말 카드를 차례대로 놓아 "그 통은 플라스틱으로 만들었고 가벼워요."를 만들어 보세요.',
                toolOptions: { cards: ['and it is light.', 'made of plastic', 'The box is'] },
                target: { order: ['The box is', 'made of plastic', 'and it is light.'] }, difficulty: 0.25,
                hints: ['and는 앞 문장에 다음 말을 이어 줘요. and 카드가 어디에 와야 할지 생각해 보세요.'],
                levels: { challenge: { prompt: '낱말 카드를 차례대로 놓아 "그 컵은 종이로 만들었고 뜨거운 차를 마시는 데 써요."를 만들어 보세요.',
                  toolOptions: { cards: ['for drinking hot tea.', 'made of paper', 'and it is', 'The cup is'] },
                  target: { order: ['The cup is', 'made of paper', 'and it is', 'for drinking hot tea.'] } } } },
              { prompt: '모둠 바구니에서 물건 하나를 골라 만지고 살펴, 생김새·쓰임·재료 세 문장을 써요. 다시 읽어 빠진 것을 채우고 짝에게 읽어 준 뒤 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"관찰 글에 무엇을 보탰나요? 재료는 어떻게 확인했나요?" 직접 만져 보고 쓴 학생 두세 명의 글을 듣는다. 출구 질문을 풀고, 출구 1번에서 made of를 떼어 놓은 학생은 덩이 카드 놓기를 한 번 더 한다.',
        exitTicket: [
          { type: 'tool', tool: 'wordcards', options: { mode: 'order', shuffle: false, cards: ['made of', 'It is', 'rubber.'] }, prompt: '지우개를 보고 낱말 카드를 차례대로 놓아 "그것은 고무로 만들었어요."를 만들어 보세요.', target: { order: ['It is', 'made of', 'rubber.'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '관찰 글에 쓰기 알맞지 않은 문장은 무엇일까요?', options: ['It is made of wood.', 'It is for drawing lines.', 'My mom bought it last year.'], answer: 2, difficulty: 0.2, explain: '언제 샀는지는 물건을 살펴봐서 알 수 있는 것이 아니에요.' },
          { type: 'short', prompt: '내 필통을 살펴보고 재료를 알려 주는 문장 하나를 쓰세요.' },
        ],
      },
    ],
    worksheet: {
      title: '세 문장 관찰 글',
      items: [
        { type: 'table', prompt: '물건을 만지고 살펴 세 문장을 쓰세요.', columns: ['물건', '생김새', '쓰임', '재료 (made of)'], rows: 2 },
        { type: 'choice', prompt: '재료를 알려 주는 문장에 ○ 하세요.', options: ['It is for eating.', 'It is made of metal.', 'It is round.'], answer: 'It is made of metal.' },
        { type: 'blank', prompt: '나무 자를 보고 빈칸을 채우세요.', text: 'It is made ______ wood.', answer: 'of' },
        { type: 'short', prompt: '교실 물건 하나를 골라 생김새·쓰임·재료 세 문장의 관찰 글을 쓰세요.' },
      ],
      easy: {
        note: '재료: It is made of + 재료(wood, paper, plastic, glass, metal).',
        items: [
          { type: 'choice', prompt: '종이컵의 재료에 ○ 하세요.', options: ['It is made of paper.', 'It is made of glass.'], answer: 'It is made of paper.' },
          { type: 'choice', prompt: '"그것은 플라스틱으로 만들었어요."에 ○ 하세요.', options: ['It is made of plastic.', 'It plastic made of.'], answer: 'It is made of plastic.' },
          { type: 'short', prompt: 'It is made of ___. 빈칸에 내 연필의 재료를 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 틀리게 놓으면 까닭을 말해 주고 되돌려요.',
      base: '다 나누거나 놓은 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '살펴봐서는 알 수 없는 문장을 가려내고, and로 이은 긴 문장을 만들어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 만져 보지 않고 재료를 짐작해 쓴다 → 손으로 두드리고 무게를 느껴 보게 한다. ② made of를 떼어 우리말 차례로 놓는다 → made of는 한 덩이. ③ 값·산 날짜처럼 살펴봐서 알 수 없는 것을 쓴다 → 20~22차시 "확인되는 것만 말하기"와 이어진다. 유리병은 교사가 들고 보여 주고 학생에게는 깨지지 않는 물건을 나누어 준다. 이 차시로 실물 관찰 부분(17~19차시)을 마친다.',
  }));

  // ───────────── 20차시 (core) 그림 정보: 보이는 것만 ─────────────
  // 마을 그림(칸 지도) — 21·22차시가 함께 쓴다. 같은 줄에서 이웃한 칸 = next to
  const TOWN = { grid: [6, 4], legend: false, title: 'Our Town', places: [
    { name: 'Park', icon: 'park', at: [0, 1] }, { name: 'Library', icon: 'library', at: [1, 1] }, { name: 'School', icon: 'school', at: [2, 1] },
    { name: 'Bakery', icon: 'market', at: [3, 1] }, { name: 'Hospital', icon: 'hospital', at: [4, 1] },
    { name: 'Post office', icon: 'post', at: [1, 3] }, { name: 'House', icon: 'house', at: [3, 3] }, { name: 'Bank', icon: 'office', at: [4, 3] }, { name: 'Station', icon: 'station', at: [5, 3] },
  ] };
  // 활동지용: 인쇄 그림은 높이가 52mm로 제한돼 4줄 칸 그림은 글자가 너무 작아지므로, 장소가 있는 두 줄(1·3행)만 남긴 2줄 판을 쓴다
  const TOWN_WS = Object.assign({}, TOWN, { grid: [6, 2], places: TOWN.places.map((p) => Object.assign({}, p, { at: [p.at[0], (p.at[1] - 1) / 2] })) });
  const TOWN_ASK = (q, choices, why) => Object.assign({}, TOWN, { mode: 'pin', readOnly: true, ask: { q, choices, why } });
  L.push(lesson(20, '[6영02-02]', {
    title: '그림에서 보이는 것만 골라 영어로 말하기',
    objective: '그림을 보고 그림에서 확인되는 것만 골라 한두 문장으로 말하고, 그림만으로는 알 수 없는 문장을 가려낼 수 있다.',
    illustration: {
      prompt: PROMPT('a sunny park with a dog chasing a ball, a child holding a closed umbrella, a big tree and a bird in the sky'),
      scene: { viewBox: [480, 270], layers: [
        { motif: 'sun', x: 412, y: 54, s: 0.8 }, { motif: 'cloud', x: 108, y: 50 }, { motif: 'bird', x: 250, y: 70 }, { motif: 'hills', y: 208 },
        { motif: 'tree', x: 80, y: 214 }, { motif: 'flower', x: 400, y: 226, color: 'rose' },
        { motif: 'text', x: 240, y: 140, text: 'I can see a bird.', size: 24 },
      ] },
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '차시 그림(해·구름·새·나무·꽃이 있는 언덕)을 띄우고 "What can you see?" 하고 묻는다. 학생들이 "a bird, a tree"라고 하면 칭찬한 뒤 선생님이 "The bird is hungry. The tree is 100 years old." 하고 말한다. "선생님 말이 그림에서 확인되나요? 손가락으로 짚을 수 있나요?" 짚을 수 없다는 반응이 나오면 "그림에 없는 것은 그럴듯해도 사실처럼 말하지 않아요. 짚을 수 있는 것만 말해요."라고 오늘의 약속을 정한다.',
        student: '차시 그림을 보고 보이는 것을 영어로 말해 보고, 선생님 말을 그림에서 짚을 수 있는지 살펴봐요.',
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 그림 조각과 그림을 말한 문장 짝 짓기', minutes: 12, tool: 'wordcards',
            teacher: '"카드 문장을 읽고 그림 조각에서 그것을 손가락으로 짚어 보세요. 짚을 수 있으면 짝이 맞아요." I can see ~, There is ~ 두 틀을 칠판에 적는다. 함정 카드가 나오는 도전 단계에서는 "이 문장은 그림 어디를 짚으면 되나요?" 하고 되물어 짚을 곳이 없다는 것을 스스로 말하게 한다.',
            task: '왼쪽 그림 조각마다 그 그림을 말한 문장 카드를 놓아요. 놓은 뒤 그림을 손가락으로 짚으며 문장을 읽어요.',
            levels: LV({ mode: 'match', shuffle: false }),
            items: [
              { prompt: '그림 조각(개·사과·우산)마다 그 그림을 말한 문장을 짝 지어 보세요.',
                toolOptions: { slots: [{ id: 'p1', label: '그림 ①', motif: 'dog' }, { id: 'p2', label: '그림 ②', motif: 'apple' }, { id: 'p3', label: '그림 ③', motif: 'umbrella' }],
                  cards: [{ id: 'c1', text: 'I can see a dog.' }, { id: 'c2', text: 'There is an apple.' }, { id: 'c3', text: 'I can see an umbrella.' }] },
                target: { match: { p1: 'c1', p2: 'c2', p3: 'c3' } }, difficulty: 0.1,
                hints: ['카드 문장 속의 물건 이름을 찾고, 그 물건이 그려진 조각을 찾아보세요.'],
                levels: { challenge: { prompt: '그림 조각(개·사과·우산)마다 그림을 말한 문장을 짝 짓고, 그림으로 확인할 수 없는 문장은 남겨 보세요.',
                  toolOptions: { cards: [{ id: 'c1', text: 'I can see a dog.' }, { id: 'c2', text: 'There is an apple.' }, { id: 'c3', text: 'I can see an umbrella.' }, { id: 'cx', text: 'The dog is three years old.', why: '개의 나이는 그림에서 짚을 수 없어요.' }] } } } },
              { prompt: '그림 조각(해·눈송이·새)마다 그 그림을 말한 문장을 짝 지어 보세요.',
                toolOptions: { slots: [{ id: 'p1', label: '그림 ①', motif: 'sun' }, { id: 'p2', label: '그림 ②', motif: 'snow' }, { id: 'p3', label: '그림 ③', motif: 'bird' }],
                  cards: [{ id: 'c1', text: 'The sun is shining.' }, { id: 'c2', text: 'I can see a snowflake.' }, { id: 'c3', text: 'There is a bird.' }] },
                target: { match: { p1: 'c1', p2: 'c2', p3: 'c3' } }, difficulty: 0.15,
                hints: ['shining, snowflake, bird가 그림에서 무엇인지 짐작해 보세요.'] },
              { prompt: '그림 조각(나무·집·물고기)마다 그 그림을 말한 문장을 짝 지어 보세요.',
                toolOptions: { slots: [{ id: 'p1', label: '그림 ①', motif: 'tree' }, { id: 'p2', label: '그림 ②', motif: 'house' }, { id: 'p3', label: '그림 ③', motif: 'fish2' }],
                  cards: [{ id: 'c1', text: 'There is a tree.' }, { id: 'c2', text: 'I can see a house.' }, { id: 'c3', text: 'I can see a fish.' }] },
                target: { match: { p1: 'c1', p2: 'c2', p3: 'c3' } }, difficulty: 0.15,
                hints: ['문장을 읽으며 그 물건을 손가락으로 짚어 보세요.'],
                levels: { challenge: { prompt: '그림 조각(나무·집·물고기)마다 그림을 말한 문장을 짝 짓고, 그림으로 확인할 수 없는 문장은 남겨 보세요.',
                  toolOptions: { cards: [{ id: 'c1', text: 'There is a tree.' }, { id: 'c2', text: 'I can see a house.' }, { id: 'c3', text: 'I can see a fish.' }, { id: 'cx', text: 'My friend lives in the house.', why: '누가 사는지는 그림에서 짚을 수 없어요.' }] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 확인되는 문장만 그림 칸에 넣고 짚어 말하기', minutes: 15, tool: 'wordcards',
            teacher: '"이름, 나이, 누구 것인지, 앞으로 일어날 일은 그림에 그려져 있나요?" 그럴듯한 문장을 그림 칸에 넣는 학생에게 "그 문장은 그림 어디를 짚으면 되나요?"라고 묻는다. 짚을 수 없으면 카드 칸에 남긴다. 마지막 짝 활동은 선생님이 띄운 차시 그림을 보고 두 문장을 말한 뒤, 짝이 "Show me!" 하면 손가락으로 짚어 보인다.',
            task: '그림에서 확인되는 문장만 그 그림 칸에 넣어요. 그림만으로는 알 수 없는 문장은 카드 칸에 남겨요.',
            levels: LV({ mode: 'sort', shuffle: false }),
            items: [
              { prompt: '그림 ①(우산)과 그림 ②(고양이)예요. 확인되는 문장만 그림 칸에 넣어 보세요.',
                toolOptions: { slots: [{ id: 'p1', label: '그림 ①', motif: 'umbrella' }, { id: 'p2', label: '그림 ②', motif: 'cat' }],
                  cards: [{ id: 'c1', text: 'I can see an umbrella.' }, { id: 'x1', text: 'It is raining now.', why: '우산만 그려져 있고 비는 그림에 없어요.' }, { id: 'c2', text: 'There is a cat.' }, { id: 'x2', text: "The cat's name is Nabi.", why: '고양이 이름은 그림에서 짚을 수 없어요.' }] },
                target: { sort: { p1: ['c1'], p2: ['c2'] } }, difficulty: 0.2,
                hints: ['카드마다 "그림 어디를 짚으면 되지?" 하고 물어보세요. 짚을 곳이 없는 문장은 남겨요.'],
                predict: { q: '그럴듯한 문장이면 그림에 없어도 말해도 될까요?', options: ['네, 그럴듯하면 돼요', '아니요, 그림에서 짚을 수 있어야 해요'], answer: 1 },
                conclude: '그림 정보를 말할 때는 그림에서 손가락으로 짚을 수 있는 것만 사실로 말해요.' },
              { prompt: '그림 ①(해)과 그림 ②(나무)예요. 확인되는 문장만 그림 칸에 넣어 보세요.',
                toolOptions: { slots: [{ id: 'p1', label: '그림 ①', motif: 'sun' }, { id: 'p2', label: '그림 ②', motif: 'tree' }],
                  cards: [{ id: 'c1', text: 'The sun is in the sky.' }, { id: 'x1', text: 'The sun will set at six.', why: '해가 언제 지는지는 그림에 없어요.' }, { id: 'c2', text: 'I can see a tree.' }, { id: 'x2', text: 'The tree is 100 years old.', why: '나무의 나이는 그림에서 짚을 수 없어요.' }] },
                target: { sort: { p1: ['c1'], p2: ['c2'] } }, difficulty: 0.2,
                hints: ['앞으로 일어날 일과 나이는 그림에 그려질 수 있는지 생각해 보세요.'] },
              { prompt: '그림 ①(개)과 그림 ②(공)예요. 확인되는 문장만 그림 칸에 넣어 보세요.',
                toolOptions: { slots: [{ id: 'p1', label: '그림 ①', motif: 'dog' }, { id: 'p2', label: '그림 ②', motif: 'ball' }],
                  cards: [{ id: 'c1', text: 'There is a dog.' }, { id: 'x1', text: 'The dog is hungry.', why: '배고픈지는 그림에서 짚을 수 없어요.' }, { id: 'c2', text: 'I can see a ball.' }, { id: 'x2', text: "The ball is Minsu's.", why: '누구 공인지는 그림에 없어요.' }] },
                target: { sort: { p1: ['c1'], p2: ['c2'] } }, difficulty: 0.25,
                hints: ['누구 것인지, 배고픈지 같은 것은 그림에 그려져 있는지 살펴보세요.'],
                levels: { challenge: { prompt: '그림 ①(개)·②(공)·③(책)이에요. 확인되는 문장만 그림 칸에 넣어 보세요.',
                  toolOptions: { slots: [{ id: 'p1', label: '그림 ①', motif: 'dog' }, { id: 'p2', label: '그림 ②', motif: 'ball' }, { id: 'p3', label: '그림 ③', motif: 'book' }],
                    cards: [{ id: 'c1', text: 'There is a dog.' }, { id: 'x1', text: 'The dog is hungry.', why: '배고픈지는 그림에서 짚을 수 없어요.' }, { id: 'c2', text: 'I can see a ball.' }, { id: 'x2', text: "The ball is Minsu's.", why: '누구 공인지는 그림에 없어요.' }, { id: 'c3', text: 'There is a book.' }, { id: 'x3', text: 'The book is very funny.', why: '책이 재미있는지는 읽어 봐야 알아요. 그림에서 짚을 수 없어요.' }] },
                  target: { sort: { p1: ['c1'], p2: ['c2'], p3: ['c3'] } } } } },
              { prompt: '선생님이 띄운 차시 그림을 보고 짝에게 두 문장을 말해요. 짝이 "Show me!" 하면 그림에서 짚어 보여요. 바꾸어 한 뒤 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"그림 정보를 말할 때 무엇을 약속했나요?" "짚을 수 있는 것만"이라는 말이 나오면 칠판에 남기고 출구 질문을 푼다. 출구 2번에서 이름이나 나이 문장을 고른 학생은 다음 시간 도입에서 "Show me!" 놀이를 한 번 더 한다.',
        exitTicket: [
          { type: 'tool', tool: 'wordcards', options: { mode: 'sort', shuffle: false, slots: [{ id: 'p1', label: '그림 ①', motif: 'flower' }], cards: [{ id: 'c1', text: 'I can see a flower.' }, { id: 'x1', text: 'The flower smells sweet.' }] }, prompt: '그림 ①(꽃)이에요. 그림에서 확인되는 문장만 그림 칸에 넣어 보세요.', target: { sort: { p1: ['c1'] } }, difficulty: 0.2 },
          { type: 'choice', prompt: '개 한 마리가 공을 쫓는 그림이에요. 그림에서 확인되는 문장은 무엇일까요?', options: ["The dog's name is Max.", 'The dog is running after a ball.', 'The dog is five years old.'], answer: 1, difficulty: 0.2, explain: '공을 쫓는 모습은 그림에서 짚을 수 있지만 이름과 나이는 그림에 없어요.' },
          { type: 'mood', prompt: '오늘 그림 보고 말하기는 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '그림에서 짚을 수 있는 것',
      items: [
        { type: 'figure', wide: true, prompt: '그림에서 확인되는 문장을 그림 칸에 이어 보세요(선으로 이어요).', tool: 'wordcards', figures: [{ options: { mode: 'sort', shuffle: false, slots: [{ id: 'p1', label: '그림 ①', motif: 'bird' }, { id: 'p2', label: '그림 ②', motif: 'house' }], cards: [{ id: 'c1', text: 'There is a bird.' }, { id: 'x1', text: 'It sings a song.' }, { id: 'c2', text: 'I see a house.' }, { id: 'x2', text: 'It is old.' }] }, caption: '' }], answer: 'There is a bird. → ① / I can see a house. → ②' },
        { type: 'choice', prompt: '그림만으로는 알 수 없는 것에 ○ 하세요.', options: ['물건의 색깔', '사람의 이름', '물건이 몇 개인지'], answer: '사람의 이름' },
        { type: 'table', prompt: '그림을 보고 확인되면 ○, 알 수 없으면 × 하세요. (그림: 해와 나무)', columns: ['문장', '○ / ×'], cells: [['I can see the sun.', ''], ['The tree is my favorite.', ''], ['There is a tree.', '']], answer: '○ / × / ○' },
        { type: 'short', prompt: '우리 교실 창밖을 보고, 확인되는 것을 영어 문장 두 개로 쓰세요.' },
      ],
      easy: {
        note: '그림에서 손가락으로 짚을 수 있으면 말해도 돼요.',
        items: [
          { type: 'choice', prompt: '고양이 그림이에요. 확인되는 문장에 ○ 하세요.', options: ['There is a cat.', 'The cat is two years old.'], answer: 'There is a cat.' },
          { type: 'choice', prompt: '사과 그림이에요. 확인되는 문장에 ○ 하세요.', options: ['I can see an apple.', 'The apple is sweet.'], answer: 'I can see an apple.' },
          { type: 'short', prompt: 'I can see a ___. 빈칸에 교실에서 보이는 물건을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 그림에 없는 문장을 넣으면 까닭을 말해 주고 되돌려요.',
      base: '다 놓은 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '그림 조각이 셋으로 늘고, 그럴듯하지만 그림에 없는 함정 문장이 더 많이 섞여요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 그럴듯하면 그림에 없어도 사실처럼 말한다 → "Show me!" 로 짚게 한다. ② 우산이 있으니 비가 온다처럼 한 걸음 짐작한다 → 짐작은 "Maybe ~"로 따로 말하게 하고 사실 문장과 나눈다(이 단원에서는 사실 문장만 판정한다). ③ 맛·냄새·소리처럼 그림으로 알 수 없는 감각을 쓴다 → 눈으로 짚을 수 있는지만 본다. 활동지 그림에는 정답 연결선이 찍히지 않는다.',
  }));

  // ───────────── 21차시 (practice) 그림 정보: 자리 말 ─────────────
  L.push(lesson(21, '[6영02-02]', {
    title: '마을 그림을 보고 자리를 말하는 문장 확인하기',
    objective: '마을 그림에서 next to, between을 써서 장소의 자리를 말하고, 그림으로 확인되는 문장·틀린 문장·알 수 없는 문장을 가려낼 수 있다.',
    illustration: {
      prompt: PROMPT('a small paper town with a park, a library, a school, a bakery and a hospital in a row, and a post office, a house, a bank and a station on the street below'),
      scene: SCENE('The library is next to the school.', 'next to · between', [{ motif: 'house', x: 80, y: 218, color: 'peach' }, { motif: 'tree', x: 400, y: 214 }]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '학생 셋을 앞에 나란히 세우고 "Minji is next to Junho. Junho is between Minji and Sora." 하고 손으로 가리키며 말한다. "next to와 between은 어떻게 다를까요?" 바로 옆 하나는 next to, 두 사이는 between이라는 것을 끌어낸 뒤 오늘 쓸 마을 그림을 보여 준다. "그림에서 짚을 수 있는 자리만 말해요. 어떤 가게가 바쁜지는 그림에 없어요."',
        student: '앞에 선 친구 셋의 자리를 듣고, next to와 between이 어떻게 다른지 말해 봐요.',
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 마을 그림에서 확인되는 참인 문장 고르기', minutes: 14, tool: 'map',
            teacher: '"보기 세 개 가운데 하나는 그림과 맞고, 하나는 그림과 다르고, 하나는 그림으로 알 수 없어요." 보기마다 장소를 손가락으로 짚어 보게 한다. 맞지 않는 문장을 \'알 수 없다\'로, 알 수 없는 문장을 \'틀렸다\'로 섞는 학생에게 "그림과 다르면 틀린 것, 그림에 아예 없으면 알 수 없는 것"이라고 나누어 말해 준다.',
            task: '마을 그림을 보고 그림으로 확인되는 참인 문장 하나를 골라요. 고른 문장의 장소를 손가락으로 짚어 짝에게 보여 줘요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '마을 그림을 보고 도서관에 대해 그림으로 확인되는 참인 문장을 골라 보세요.',
                toolOptions: TOWN_ASK('그림으로 확인되는 참인 문장은?', ['The library is next to the school.', 'The library is open now.', 'The library is next to the hospital.'], ['', '도서관이 지금 문을 열었는지는 그림에 없어요.', '도서관 옆 칸에 병원이 있는지 다시 짚어 보세요.']),
                target: { pick: 0 }, difficulty: 0.15,
                hints: ['보기마다 나오는 장소 둘을 그림에서 찾아 손가락으로 짚어 보세요.', '그림과 다른 문장과 그림에 없는 문장을 하나씩 지워 보세요.', '도서관 바로 옆 칸에 있는 곳을 읽어 보세요.'] },
              { prompt: '마을 그림을 보고 빵집에 대해 그림으로 확인되는 참인 문장을 골라 보세요.',
                toolOptions: TOWN_ASK('그림으로 확인되는 참인 문장은?', ['The park is between the library and the school.', 'The bakery is very busy.', 'The bakery is between the school and the hospital.'], ['공원은 도서관과 학교 사이에 있지 않아요. 다시 짚어 보세요.', '빵집이 바쁜지는 그림에 없어요.', '']),
                target: { pick: 2 }, difficulty: 0.25,
                hints: ['between은 두 장소 사이예요. 두 장소를 양손으로 짚고 그 사이에 무엇이 있는지 보세요.', '그림에 없는 내용을 말한 보기를 먼저 지워 보세요.', '학교와 병원을 양손으로 짚으면 그 사이에 빵집이 있어요.'] },
              { prompt: '마을 그림을 보고 은행에 대해 그림으로 확인되는 참인 문장을 골라 보세요.',
                toolOptions: TOWN_ASK('그림으로 확인되는 참인 문장은?', ['My uncle works at the bank.', 'The bank is between the house and the station.', 'The bank is next to the post office.'], ['누가 은행에서 일하는지는 그림에 없어요.', '', '은행 옆 칸에 우체국이 있는지 다시 짚어 보세요.']),
                target: { pick: 1 }, difficulty: 0.25,
                hints: ['보기마다 나오는 장소를 그림에서 찾아 손가락으로 짚어 보세요.', '그림에 없는 내용을 말한 보기와 그림과 다른 보기를 하나씩 지워 보세요.', '보기 속 장소의 양옆 칸을 직접 읽어 문장과 견주어 보세요.'],
                levels: { challenge: { prompt: '마을 그림을 보고 학교에 대해 그림으로 확인되는 참인 문장을 골라 보세요.',
                  toolOptions: TOWN_ASK('그림으로 확인되는 참인 문장은?', ['The school is between the library and the bakery.', 'The school is next to the park.', 'The school is between the bank and the station.', 'The school has 300 students.'], ['', '학교 바로 옆 칸에 공원이 있는지 다시 보세요.', '은행과 기차역은 아래쪽 길에 있어요. 학교는 그 사이에 없어요.', '학생 수는 그림에 없어요.']),
                  target: { pick: 0 } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 그림으로 알 수 있는 것과 알 수 없는 것 나누기', minutes: 13, tool: 'wordcards',
            teacher: '"어떤 그림이든 보면 알 수 있는 것이 있고, 그려질 수 없는 것이 있어요." 자리·개수·색·하는 동작은 보면 알 수 있고, 이름·나이·값·속마음·앞으로 할 일은 그림으로 알 수 없다는 것을 함께 정리한다. 마지막 짝 활동은 마을 그림을 보고 next to와 between을 한 번씩 써서 두 문장을 말하고, 짝은 그림에서 짚어 보며 맞는지 말해 준다.',
            task: '공원 그림을 설명한 문장 카드를 "그림으로 알 수 있어요" 칸과 "그림으로 알 수 없어요" 칸에 나누어요.',
            levels: LV({ mode: 'sort', shuffle: false, slots: [{ id: 'see', label: '그림으로 알 수 있어요' }, { id: 'nosee', label: '그림으로 알 수 없어요' }] }),
            items: [
              { prompt: '공원 그림 속 아이들을 설명한 문장이에요. 그림으로 알 수 있는 것과 알 수 없는 것으로 나누어 보세요.',
                toolOptions: { cards: [{ id: 's1', text: 'A boy is wearing a red cap.' }, { id: 'n1', text: "The boy's name is Jun." }, { id: 's2', text: 'Two girls are on a bench.' }, { id: 'n2', text: 'The girls are eleven years old.' }] },
                target: { sort: { see: ['s1', 's2'], nosee: ['n1', 'n2'] } }, difficulty: 0.15,
                hints: ['문장이 색·개수·자리를 말하는지, 이름·나이를 말하는지 보세요.'] },
              { prompt: '공원 그림 속 자전거와 나무를 설명한 문장이에요. 그림으로 알 수 있는 것과 알 수 없는 것으로 나누어 보세요.',
                toolOptions: { cards: [{ id: 's1', text: 'A man is riding a bike.' }, { id: 'n1', text: 'The bike cost a lot of money.' }, { id: 's2', text: 'There are three trees.' }, { id: 'n2', text: 'The man will go home at five.' }] },
                target: { sort: { see: ['s1', 's2'], nosee: ['n1', 'n2'] } }, difficulty: 0.2,
                hints: ['값과 앞으로 할 일은 그림에 그려질 수 있는지 생각해 보세요.'] },
              { prompt: '공원 그림 속 개와 연을 설명한 문장이에요. 그림으로 알 수 있는 것과 알 수 없는 것으로 나누어 보세요.',
                toolOptions: { cards: [{ id: 's1', text: 'A dog is next to the bench.' }, { id: 'n1', text: 'The dog likes sausages.' }, { id: 's2', text: 'A girl is flying a kite.' }, { id: 'n2', text: 'The girl came here by bus.' }, { id: 's3', text: 'The kite is yellow.' }] },
                target: { sort: { see: ['s1', 's2', 's3'], nosee: ['n1', 'n2'] } }, difficulty: 0.25,
                hints: ['좋아하는 것과 이미 지나간 일은 지금 그림에서 보이는지 따져 보세요.'] },
              { prompt: '마을 그림을 보고 next to와 between을 한 번씩 써서 두 문장을 짝에게 말해요. 짝은 그림에서 짚어 맞는지 확인해요. 바꾸어 한 뒤 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"그림과 다른 문장과 그림으로 알 수 없는 문장은 어떻게 달랐나요?" 학생의 말을 들은 뒤 출구 질문을 푼다. 출구 1번을 틀린 학생은 양손으로 두 장소를 짚는 between 확인을 한 번 더 해 본다.',
        exitTicket: [
          { type: 'tool', tool: 'map', options: TOWN_ASK('그림으로 확인되는 참인 문장은?', ['The hospital is next to the bakery.', 'The hospital is next to the park.', 'The hospital is very clean.']), prompt: '마을 그림을 보고 병원에 대해 그림으로 확인되는 참인 문장을 골라 보세요.', target: { pick: 0 }, difficulty: 0.2 },
          { type: 'choice', prompt: '그림으로 알 수 없는 문장은 무엇일까요?', options: ['There are two cats.', 'The cats are brothers.', 'One cat is black.'], answer: 1, difficulty: 0.2, explain: '고양이 수와 색은 보이지만 형제인지는 그림에 없어요.' },
          { type: 'mood', prompt: '오늘 그림 보고 자리 말하기는 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '마을 그림 자리 말하기',
      items: [
        { type: 'figure', wide: true, prompt: '마을 그림을 보고 아래 문장에 답하세요.', tool: 'map', figures: [{ options: TOWN_WS, caption: 'Our Town' }] },
        { type: 'table', prompt: '그림과 맞으면 ○, 그림과 다르면 ×, 그림으로 알 수 없으면 ? 를 쓰세요.', columns: ['문장', '○ / × / ?'], cells: [['The park is next to the library.', ''], ['The bank is next to the school.', ''], ['The school is very big.', ''], ['The house is between the post office and the bank.', '']], answer: '○ / × / ? / ○' },
        { type: 'blank', prompt: '그림을 보고 빈칸에 장소 이름을 쓰세요.', text: 'The school is between the library and the ______.', answer: 'bakery' },
        { type: 'short', prompt: '마을 그림을 보고 between을 넣어 문장 하나를 쓰세요.' },
      ],
      easy: {
        note: 'next to = 바로 옆, between A and B = A와 B 사이.',
        items: [
          { type: 'choice', prompt: 'A ★ B 에서 ★는?', options: ['between A and B', 'next to A and B'], answer: 'between A and B' },
          { type: 'choice', prompt: '그림으로 알 수 없는 것에 ○ 하세요.', options: ['가게 이름', '가게 주인의 나이'], answer: '가게 주인의 나이' },
          { type: 'short', prompt: 'The ___ is next to the school. 그림을 보고 빈칸을 채우세요.' },
        ],
      },
    },
    differentiation: {
      easy: '알맞은 칸에 초록 테두리가 생기고, 틀리게 놓으면 까닭을 말해 주고 되돌려요. 마을 그림 문항은 힌트로 짚을 곳을 알려 줘요.',
      base: '다 고르거나 나눈 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '보기가 넷으로 늘고, 다른 길에 있는 장소를 섞은 between 함정이 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 그림과 다른 것과 그림에 없는 것을 구분하지 못한다 → ○ / × / ? 세 칸으로 나눈다. ② between을 쓸 때 두 장소 가운데 하나만 보고 판단한다 → 양손으로 두 곳을 함께 짚게 한다. ③ next to를 위아래 칸에도 쓴다 → 이 그림에서는 같은 길(줄)에 붙은 칸만 next to로 약속한다. 마을 그림은 22차시에도 쓴다.',
  }));

  // ───────────── 22차시 (extend) 그림 정보: 근거 짚기 ─────────────
  L.push(lesson(22, '[6영02-02]', {
    title: '문장이 가리키는 곳을 그림에서 짚고 두 문장으로 말하기',
    objective: '자리를 말한 문장을 듣고 그 장소를 그림에서 짚어 근거를 보이고, 한 장소를 두 문장으로 말해 친구가 찾게 할 수 있다.',
    illustration: {
      prompt: PROMPT('a child pointing at a paper town map with a pin while a friend reads two clue sentences from a card'),
      scene: SCENE('It is between the house and the station.', '근거를 짚어 보여요', [{ motif: 'house', x: 80, y: 218, color: 'sky' }, { motif: 'star', x: 400, y: 70, color: 'buttercup' }]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '지난 시간 마을 그림을 띄우고 "I\'m thinking of a place. It is next to the hospital. Where is it?" 하고 묻는다. 학생이 "Bakery!"라고 하면 "어떻게 알았나요? 그림에서 짚어 보여 줄래요?"라고 해 앞에 나와 짚게 한다. "답만 말하지 않고 그림에서 근거를 짚어 보이면 모두가 맞는지 확인할 수 있어요." 오늘은 문장이 가리키는 곳을 핀으로 짚고, 스스로 두 문장 수수께끼를 만든다고 알린다.',
        student: '선생님이 말한 곳을 마을 그림에서 찾아 짚어 보고, 어떻게 알았는지 말해 봐요.',
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 문장이 가리키는 장소에 핀 꽂기', minutes: 13, tool: 'map',
            teacher: '"It이 어디인지 문장 속 장소를 먼저 짚고, 그 옆이나 사이를 찾아요." 이름이 나온 장소에 핀을 꽂는 학생에게 "문장에 나온 곳은 단서예요. 단서 옆에 있는 곳이 It이에요."라고 짚는다. 핀을 꽂은 뒤에는 짝에게 "Because it is next to ~."처럼 까닭을 영어로 말하게 한다.',
            task: '문장을 읽고 It이 가리키는 장소에 핀을 꽂아요. 꽂은 뒤 짝에게 근거를 손가락으로 짚어 보여요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '"It is between the park and the school." It은 어디일까요? 마을 그림에서 찾아 핀을 꽂아 보세요.',
                toolOptions: Object.assign({}, TOWN, { mode: 'pin' }),
                target: { place: 'Library' }, difficulty: 0.15,
                hints: ['문장에 나온 두 장소를 먼저 양손으로 짚어 보세요. It은 그 두 곳이 아니에요.', '두 장소 사이에 있는 칸을 보세요.', '공원과 학교 사이 칸에 있는 장소에 핀을 꽂아요.'] },
              { prompt: '"It is next to the hospital." It은 어디일까요? 마을 그림에서 찾아 핀을 꽂아 보세요.',
                toolOptions: Object.assign({}, TOWN, { mode: 'pin' }),
                target: { place: 'Bakery' }, difficulty: 0.15,
                hints: ['문장에 나온 장소를 먼저 찾고, 같은 길의 바로 옆 칸을 살펴보세요.', '그 장소의 양옆 칸 가운데 장소가 있는 쪽을 보세요.', '병원 바로 왼쪽 칸에 있는 장소예요.'] },
              { prompt: '"It is between the house and the station." It은 어디일까요? 마을 그림에서 찾아 핀을 꽂아 보세요.',
                toolOptions: Object.assign({}, TOWN, { mode: 'pin' }),
                target: { place: 'Bank' }, difficulty: 0.2,
                hints: ['문장에 나온 장소를 먼저 짚어 보세요. It은 그 장소가 아니에요.', '문장의 조건을 하나씩 따져 맞지 않는 칸을 지워 보세요.', '단서 장소의 양옆이나 사이 칸 가운데 모든 조건에 맞는 곳에 핀을 꽂아요.'],
                levels: { challenge: { prompt: '"It is on the top street. It is next to the library, but it is not next to the bakery." It은 어디일까요? 핀을 꽂아 보세요.',
                  target: { place: 'Park' } } } },
              { prompt: '"It is next to the bank. It is not the house." It은 어디일까요? 마을 그림에서 찾아 핀을 꽂아 보세요.',
                toolOptions: Object.assign({}, TOWN, { mode: 'pin' }),
                target: { place: 'Station' }, difficulty: 0.25,
                hints: ['문장에 나온 장소를 먼저 짚어 보세요. It은 그 장소가 아니에요.', '문장의 조건을 하나씩 따져 맞지 않는 칸을 지워 보세요.', '단서 장소의 양옆 칸 가운데 모든 조건에 맞는 곳에 핀을 꽂아요.'],
                levels: { challenge: { prompt: '"It is on the bottom street. No place is next to it." It은 어디일까요? 마을 그림에서 찾아 핀을 꽂아 보세요.',
                  target: { place: 'Post office' } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 두 문장 수수께끼 만들어 짝이 짚게 하기', minutes: 14, tool: 'map',
            teacher: '"한 문장으로는 답이 여럿일 수 있어요. 두 문장을 말하면 답이 하나로 좁혀져요." 보기 가운데 답이 하나로 정해지는 두 문장을 고르게 한다. 답이 둘 이상 되는 수수께끼를 고르는 학생에게 "이 두 문장에 맞는 곳을 모두 짚어 보세요. 몇 곳인가요?"라고 묻는다. 마지막 짝 활동은 장소 하나를 몰래 정하고 두 문장 수수께끼를 내면, 짝이 그림에서 짚어 답한다.',
            task: '보기 가운데 답이 한 곳으로 정해지는 두 문장 수수께끼를 골라요. 그다음 내가 만든 수수께끼를 짝에게 내요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '기차역을 답으로 하는 두 문장 수수께끼예요. 답이 기차역 한 곳으로 정해지는 것을 골라 보세요.',
                toolOptions: TOWN_ASK('답이 기차역 하나로 정해지는 수수께끼는?', ['It is on the bottom street. It is next to the bank.', 'It is next to the bank. You can take a train there.', 'It is in our town. It is a place.'], ['은행 옆에는 기차역 말고 집도 있어요. 두 곳이 답이 돼요.', '', '마을의 모든 장소가 답이 될 수 있어요.']),
                target: { pick: 1 }, difficulty: 0.25,
                hints: ['보기마다 두 문장에 맞는 곳을 모두 짚어 보고 몇 곳인지 세어 보세요.', '답이 두 곳 이상인 보기는 지워요.', '은행 양옆에는 집과 기차역이 있어요. 둘 가운데 하나로 좁혀 주는 문장이 있는 보기를 찾아요.'] },
              { prompt: '학교를 답으로 하는 두 문장 수수께끼예요. 답이 학교 한 곳으로 정해지는 것을 골라 보세요.',
                toolOptions: TOWN_ASK('답이 학교 하나로 정해지는 수수께끼는?', ['It is on the top street. It is next to the library.', 'It is between the library and the bakery.', 'It is on the top street. It is big.'], ['도서관 옆에는 학교 말고 공원도 있어요.', '', '크기는 그림으로 견주기 어렵고, 위쪽 길에는 장소가 여럿이에요.']),
                target: { pick: 1 }, difficulty: 0.25,
                hints: ['보기마다 맞는 곳을 모두 짚어 보세요. 한 곳만 남는 보기를 찾아요.', 'next to 하나만으로는 양옆 두 곳이 답이 될 수 있어요.', '도서관과 빵집 사이에 있는 곳은 한 곳뿐이에요.'] },
              { prompt: '우체국을 답으로 하는 두 문장 수수께끼예요. 답이 우체국 한 곳으로 정해지는 것을 골라 보세요.',
                toolOptions: TOWN_ASK('답이 우체국 하나로 정해지는 수수께끼는?', ['It is on the bottom street. You can send letters there.', 'It is on the bottom street. It is next to the house.', 'It is next to the station.'], ['', '아래쪽 길에서 집 바로 옆 칸에는 은행이 있어요. 우체국은 집 옆 칸이 아니에요.', '기차역 옆에는 은행이 있어요.']),
                target: { pick: 0 }, difficulty: 0.3,
                hints: ['자리 말고 그 장소에서 하는 일을 말해도 답을 좁힐 수 있어요.', '보기마다 그림에서 짚어 답이 우체국인지 확인해 보세요.', '편지를 보내는 곳은 우체국 한 곳뿐이에요.'] },
              { prompt: '마을 그림에서 장소 하나를 몰래 정하고, 두 문장 수수께끼를 짝에게 내요. 짝이 그림에서 짚어 답하면 바꾸어 한 뒤 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"수수께끼를 낼 때 왜 두 문장이 필요했나요?" 한 문장일 때 답이 여럿이었던 예를 듣고 출구 질문을 푼다. 출구 1번에서 문장에 나온 장소에 핀을 꽂은 학생은 "단서 옆이 It"을 다시 짚어 본다.',
        exitTicket: [
          { type: 'tool', tool: 'map', options: Object.assign({}, TOWN, { mode: 'pin' }), prompt: '"It is between the library and the bakery." It은 어디일까요? 마을 그림에서 핀을 꽂아 보세요.', target: { place: 'School' }, difficulty: 0.2 },
          { type: 'choice', prompt: '"It is next to the school." 만으로 답이 하나로 정해지지 않는 까닭은 무엇일까요?', options: ['학교 양옆에 장소가 두 곳 있어서', '학교가 그림에 없어서', '문장이 너무 길어서'], answer: 0, difficulty: 0.25, explain: '학교 양옆에 도서관과 빵집이 있어 답이 두 곳이 돼요.' },
          { type: 'short', prompt: '마을 그림에서 병원을 답으로 하는 두 문장 수수께끼를 쓰세요.' },
        ],
      },
    ],
    worksheet: {
      title: '근거를 짚는 수수께끼',
      items: [
        { type: 'figure', wide: true, prompt: '마을 그림을 보고 아래 수수께끼의 답에 ○ 하세요.', tool: 'map', figures: [{ options: TOWN_WS, caption: 'Our Town' }] },
        { type: 'table', prompt: '수수께끼의 답을 쓰세요.', columns: ['수수께끼', '답'], cells: [['It is between the school and the hospital.', ''], ['It is on the top street. It is next to the park.', ''], ['It is between the house and the station.', '']], answer: 'Bakery / Library / Bank' },
        { type: 'choice', prompt: '답이 한 곳으로 정해지는 수수께끼에 ○ 하세요.', options: ['It is next to the school.', 'It is between the park and the school.'], answer: 'It is between the park and the school.' },
        { type: 'short', prompt: '우리 학교 안의 한 곳(예: 과학실)을 답으로 하는 두 문장 수수께끼를 쓰세요.' },
      ],
      easy: {
        note: '문장에 나온 곳은 단서예요. 단서 옆이나 사이에 있는 곳이 답이에요.',
        items: [
          { type: 'choice', prompt: '"It is next to the hospital." 에서 단서가 되는 곳에 ○ 하세요.', options: ['hospital', 'It'], answer: 'hospital' },
          { type: 'choice', prompt: '"It is between A and B." 의 답은 어디에 있나요?', options: ['A와 B 사이', 'A의 바로 위'], answer: 'A와 B 사이' },
          { type: 'short', prompt: 'It is next to the ___. 그림을 보고 빈칸을 채워 수수께끼를 만드세요.' },
        ],
      },
    },
    differentiation: {
      easy: '힌트를 누르면 먼저 짚을 단서 장소를 알려 줘요.',
      base: '문장을 읽고 스스로 핀을 꽂거나 골라 확인해요.',
      challenge: '"옆이지만 저쪽 옆은 아님"처럼 조건이 둘인 문장으로 답을 하나로 좁혀요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 문장에 나온 장소에 핀을 꽂는다 → 단서와 답을 나누어 짚는다. ② 한 문장 수수께끼로 답이 여럿이어도 모른다 → 맞는 곳을 모두 짚어 세게 한다. ③ 근거 없이 답만 말한다 → "Because it is next to ~." 한 문장을 붙인다. 이 차시로 그림 정보 부분(20~22차시)을 마치고, 32~34차시 길 안내에서 같은 자리 말을 다시 쓴다.',
  }));

  // ───────────── 23차시 (core) 동작과 표현 ─────────────
  L.push(lesson(23, '[6영02-02]', {
    title: '동작을 보여 주며 그에 맞는 영어 표현 말하기',
    objective: '동작 하나를 보여 주면서 그 동작에 맞는 영어 표현을 말하고, 동작과 표현이 어긋난 경우를 가려낼 수 있다.',
    illustration: {
      prompt: PROMPT('children in a classroom doing gestures, one stretching arms up, one bending knees and one waving, with matching speech bubbles'),
      scene: SCENE('Stretch your arms up!', '동작과 말이 같아야 해요', [{ motif: 'star', x: 90, y: 70, color: 'buttercup' }, { motif: 'tree', x: 400, y: 214 }]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '선생님이 두 팔을 머리 위로 쭉 뻗으면서 "Bend your knees!" 하고 말한다. 학생들이 팔을 뻗기도 하고 무릎을 굽히기도 하면 "어떤 친구는 팔을 뻗고 어떤 친구는 무릎을 굽혔네요. 왜 그랬을까요?" 묻는다. "동작만 크게 하면 말이 틀려도 통할까요?" 동작과 말이 어긋나면 듣는 사람이 헷갈린다는 것을 끌어낸 뒤, 이번에는 팔을 뻗으며 "Stretch your arms up!"이라고 바르게 보여 준다.',
        student: '선생님의 동작과 말을 보고 따라 해 보고, 무엇이 이상했는지 말해 봐요.',
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 동작 설명과 영어 표현 짝 짓기', minutes: 12, tool: 'wordcards',
            teacher: '"카드를 놓기 전에 왼쪽 동작을 직접 해 보세요. 몸이 하는 일을 영어로 말한 카드를 찾아요." 자리에서 일어나 짝과 간격을 두고 동작을 해 보게 한다. arm과 knee처럼 몸 낱말이 헷갈리는 학생에게 선생님이 그 부분을 만지며 낱말을 말해 준다.',
            task: '왼쪽 동작을 직접 해 보고, 그 동작을 말한 영어 표현 카드를 옆에 놓아요. 놓은 뒤 동작을 하며 소리 내어 말해요.',
            levels: LV({ mode: 'match', shuffle: false }),
            items: [
              { prompt: '팔·무릎·손 동작이에요. 동작마다 알맞은 영어 표현을 짝 지어 보세요.',
                toolOptions: { slots: [{ id: 'g1', label: '두 팔을 머리 위로 쭉 뻗어요' }, { id: 'g2', label: '무릎을 굽혀요' }, { id: 'g3', label: '손을 흔들어요' }],
                  cards: [{ id: 'c1', text: 'Stretch your arms up.' }, { id: 'c2', text: 'Bend your knees.' }, { id: 'c3', text: 'Wave your hand.' }] },
                target: { match: { g1: 'c1', g2: 'c2', g3: 'c3' } }, difficulty: 0.15,
                hints: ['카드에서 몸 낱말(arms, knees, hand)을 먼저 찾아보세요.'] },
              { prompt: '뛰기·돌기·손뼉 동작이에요. 동작마다 알맞은 영어 표현을 짝 지어 보세요.',
                toolOptions: { slots: [{ id: 'g1', label: '제자리에서 위아래로 뛰어요' }, { id: 'g2', label: '제자리에서 한 바퀴 돌아요' }, { id: 'g3', label: '손뼉을 두 번 쳐요' }],
                  cards: [{ id: 'c1', text: 'Jump up and down.' }, { id: 'c2', text: 'Turn around.' }, { id: 'c3', text: 'Clap your hands twice.' }] },
                target: { match: { g1: 'c1', g2: 'c2', g3: 'c3' } }, difficulty: 0.15,
                hints: ['카드의 첫 낱말이 몸이 하는 일이에요. 그 낱말을 동작으로 해 보세요.'] },
              { prompt: '고개·허리 동작이에요. 동작마다 알맞은 영어 표현을 짝 지어 보세요.',
                toolOptions: { slots: [{ id: 'g1', label: '고개를 위아래로 끄덕여요' }, { id: 'g2', label: '고개를 좌우로 저어요' }, { id: 'g3', label: '허리를 굽혀 발끝을 만져요' }],
                  cards: [{ id: 'c1', text: 'Nod your head.' }, { id: 'c2', text: 'Shake your head.' }, { id: 'c3', text: 'Touch your toes.' }] },
                target: { match: { g1: 'c1', g2: 'c2', g3: 'c3' } }, difficulty: 0.25,
                hints: ['고개 동작 두 개는 몸 낱말이 같아요. 앞의 동작 낱말을 선생님 몸짓과 견주어 보세요.'],
                levels: { challenge: { prompt: '고개·허리 동작이에요. 동작마다 알맞은 표현을 짝 짓고, 맞지 않는 카드는 남겨 보세요.',
                  toolOptions: { cards: [{ id: 'c1', text: 'Nod your head.' }, { id: 'c2', text: 'Shake your head.' }, { id: 'c3', text: 'Touch your toes.' }, { id: 'cx', text: 'Touch your nose.', why: '코를 만지는 동작이에요. 발끝(toes)과 달라요.' }] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 동작과 표현이 맞는 것 고르고 짝과 맞히기', minutes: 15, tool: 'wordcards',
            teacher: '"카드의 몸짓을 먼저 해 보고, 그 몸짓을 하면서 따옴표 속 말을 해 보세요. 어울리나요?" 하품하며 "I\'m excited!"를 말해 보이면 학생들이 웃는다. "동작은 컸는데 말이 반대였어요. 이러면 친구는 무엇을 믿어야 할까요?" 마지막 짝 활동은 한 사람이 동작과 말을 하고, 짝이 "Match!" 또는 "No match!"로 답한 뒤 맞지 않으면 바른 말을 알려 준다.',
            task: '몸짓과 따옴표 속 말이 서로 맞는 카드만 바구니에 넣어요. 고른 카드는 몸짓을 하며 소리 내어 말해요.',
            levels: LV(PICK('맞는 동작과 말')),
            items: [
              { prompt: '몸 상태를 나타내는 동작과 말이에요. 서로 맞는 카드만 골라 보세요.',
                toolOptions: { cards: [{ id: 'c1', text: '배를 문지르며 "I\'m hungry."' }, { id: 'c2', text: '하품하며 "I\'m excited!"', why: '하품은 졸리거나 지루할 때 하는 몸짓이에요.' }, { id: 'c3', text: '손으로 부채질하며 "I\'m hot."' }, { id: 'c4', text: '몸을 덜덜 떨며 "I\'m hot."', why: '몸을 떠는 것은 추울 때 하는 몸짓이에요.' }] },
                target: { pick: ['c1', 'c3'] }, difficulty: 0.15,
                hints: ['카드의 몸짓을 직접 해 보고, 그때 내 몸이 어떤지 떠올려 보세요.'] },
              { prompt: '묻고 답할 때의 동작과 말이에요. 서로 맞는 카드만 골라 보세요.',
                toolOptions: { cards: [{ id: 'c1', text: '엄지를 들어 올리며 "Good job!"' }, { id: 'c2', text: '두 손으로 귀를 막으며 "It\'s so quiet."', why: '귀를 막는 것은 시끄러울 때 하는 몸짓이에요.' }, { id: 'c3', text: '손목을 가리키며 "What time is it?"' }, { id: 'c4', text: '고개를 저으며 "Yes, I do."', why: '고개를 저으면 아니라는 뜻이에요.' }] },
                target: { pick: ['c1', 'c3'] }, difficulty: 0.2,
                hints: ['몸짓만 보고 우리말로 무슨 뜻일지 먼저 말해 보세요. 그 뜻과 따옴표 속 말을 견주어요.'] },
              { prompt: '느낌과 수를 나타내는 동작과 말이에요. 서로 맞는 카드만 골라 보세요.',
                toolOptions: { cards: [{ id: 'c1', text: '고개를 끄덕이며 "Yes."' }, { id: 'c2', text: '손가락 세 개를 펴며 "I have two brothers."', why: '손가락은 셋인데 말은 둘이라 어긋나요.' }, { id: 'c3', text: '눈을 비비고 하품하며 "I\'m sleepy."' }] },
                target: { pick: ['c1', 'c3'] }, difficulty: 0.2,
                hints: ['수를 보여 주는 몸짓은 말의 수와 같은지 하나씩 세어 보세요.'],
                levels: { challenge: { prompt: '느낌과 수를 나타내는 동작과 말이에요. 서로 맞는 카드만 골라 보세요.',
                  toolOptions: { cards: [{ id: 'c1', text: '고개를 끄덕이며 "Yes."' }, { id: 'c2', text: '손가락 세 개를 펴며 "I have two brothers."', why: '손가락은 셋인데 말은 둘이라 어긋나요.' }, { id: 'c3', text: '눈을 비비고 하품하며 "I\'m sleepy."' }, { id: 'c4', text: '손으로 입을 가리고 놀라며 "I\'m bored."', why: '입을 가리고 놀라는 몸짓은 지루할 때가 아니라 깜짝 놀랐을 때예요.' }, { id: 'c5', text: '두 손을 하늘로 올리며 "We won!"' }] },
                  target: { pick: ['c1', 'c3', 'c5'] } } } },
              { prompt: '짝에게 동작 하나를 보여 주며 영어로 말해요. 짝은 "Match!" 또는 "No match!"로 답하고, 맞지 않으면 바른 말을 알려 줘요. 세 번씩 한 뒤 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"동작과 말이 어긋나면 듣는 사람은 어떻게 되었나요?" 짝 활동에서 No match! 를 받았던 예를 두세 개 듣고 출구 질문을 푼다. 출구 1번을 틀린 학생은 몸짓을 직접 해 보며 다시 견주어 본다.',
        exitTicket: [
          { type: 'tool', tool: 'wordcards', options: { mode: 'pick', basket: '맞는 동작과 말', shuffle: false, cards: [{ id: 'e1', text: '팔짱을 끼고 떨며 "I\'m cold."' }, { id: 'e2', text: '손을 흔들며 "Sit down."' }, { id: 'e3', text: '웃으며 엄지를 들고 "I\'m sad."' }] }, prompt: '서로 맞는 동작과 말 카드만 골라 보세요.', target: { pick: ['e1'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '두 손을 귀에 대고 듣는 몸짓에 맞는 말은 무엇일까요?', options: ['Listen carefully.', 'Close your eyes.', 'Jump high.'], answer: 0, difficulty: 0.15, explain: '귀에 손을 대는 것은 잘 들으라는 몸짓이에요.' },
          { type: 'mood', prompt: '오늘 동작과 표현 맞추기는 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '동작과 표현',
      items: [
        { type: 'table', prompt: '동작에 맞는 영어 표현을 쓰세요.', columns: ['동작', '영어 표현'], cells: [['두 팔을 머리 위로 뻗어요', ''], ['손뼉을 쳐요', ''], ['한 바퀴 돌아요', '']], answer: 'Stretch your arms up. / Clap your hands. / Turn around.' },
        { type: 'choice', prompt: '고개를 저으며 하는 말로 알맞은 것에 ○ 하세요.', options: ['Yes, I can.', 'No, I can\'t.'], answer: 'No, I can\'t.' },
        { type: 'choice', prompt: '동작과 표현에 대해 알맞은 말에 ○ 하세요.', options: ['동작만 크면 말이 틀려도 된다', '동작과 말이 같은 뜻이어야 한다', '말은 하지 않아도 된다'], answer: '동작과 말이 같은 뜻이어야 한다' },
        { type: 'short', prompt: '내가 보여 줄 동작 하나를 우리말로 쓰고, 그때 할 영어 표현을 쓰세요.' },
      ],
      easy: {
        note: '몸짓을 직접 해 보고, 그 뜻과 같은 말을 찾아요.',
        items: [
          { type: 'choice', prompt: '손을 흔들어요 → ?', options: ['Wave your hand.', 'Bend your knees.'], answer: 'Wave your hand.' },
          { type: 'choice', prompt: '배를 문질러요 → ?', options: ['I\'m hungry.', 'I\'m cold.'], answer: 'I\'m hungry.' },
          { type: 'short', prompt: 'Clap your ___. 빈칸을 채워 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 카드에 초록 테두리가 생기고, 어긋난 카드를 넣으면 까닭을 말해 주고 되돌려요.',
      base: '다 짝 짓거나 고른 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '몸 낱말이 비슷한 함정 카드와 놀람·기쁨 몸짓이 더해져 더 꼼꼼히 견주어야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 동작만 크게 하면 말이 틀려도 된다고 여긴다 → 일부러 어긋난 시범으로 헷갈림을 겪게 한다. ② arm/knee/toe 같은 몸 낱말을 헷갈린다 → 만지며 말하기. ③ 고개 끄덕임·저음의 뜻이 문화마다 다를 수 있다는 질문이 나오면 이 단원은 우리와 영어권에서 같은 뜻인 몸짓만 다룬다고 답한다. 동작은 책상 사이 간격을 두고 제자리에서 한다.',
  }));

  // ───────────── 24차시 (practice) 동작을 보며 확인해 주기 ─────────────
  L.push(lesson(24, '[6영02-02]', {
    title: '친구의 동작 발표를 보고 맞는지 말해 주기',
    objective: '친구가 동작을 하며 말한 표현이 동작과 맞는지 확인해 말해 주고, 지금 하는 동작을 I am ~ing로 말할 수 있다.',
    illustration: {
      prompt: PROMPT('a child miming brushing teeth while a friend watches and holds up a paper sign with a check mark'),
      scene: SCENE("I'm brushing my teeth.", '보고 확인해 말해 줘요', [{ motif: 'cloud', x: 360, y: 80 }, { motif: 'flower', x: 80, y: 226, color: 'lavender' }]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '선생님이 이를 닦는 흉내를 내며 "I\'m brushing my teeth." 하고 말한다. 이어서 공을 던지는 흉내를 내며 "I\'m eating an apple." 하고 말한다. "두 번째는 어땠나요? 친구에게 어떻게 말해 주면 좋을까요?" 학생들이 "틀렸어요"라고만 하면 "무엇이 맞지 않는지까지 말해 주면 친구가 고칠 수 있어요. You said eating, but you threw a ball."이라고 들려준다. I am ~ing는 지금 하고 있는 일을 말할 때 쓴다고 칠판에 적는다.',
        student: '선생님의 흉내와 말을 보고, 맞지 않았던 것을 찾아 말해 봐요.',
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 친구 발표 기록을 맞아요·고쳐요로 나누기', minutes: 12, tool: 'wordcards',
            teacher: '"카드를 읽고 그 친구처럼 직접 해 보세요. 말과 동작이 같으면 맞아요, 다르면 고쳐요 칸이에요." 고쳐요 칸에 넣은 카드는 무엇으로 바꾸면 맞을지 짝에게 말하게 한다. 동작이 작았다는 까닭만으로 고쳐요 칸에 넣는 학생에게 "오늘은 크기가 아니라 말과 동작이 같은 뜻인지를 봐요."라고 짚는다.',
            task: '친구들이 동작 발표를 한 기록 카드를 "맞아요" 칸과 "고쳐요" 칸에 나누어요.',
            levels: LV({ mode: 'sort', shuffle: false, slots: [{ id: 'ok', label: '동작과 말이 맞아요' }, { id: 'fix', label: '고쳐요' }] }),
            items: [
              { prompt: '몸 움직임 발표 기록이에요. 동작과 말이 맞는지 나누어 보세요.',
                toolOptions: { cards: [{ id: 'o1', text: '"Turn around." 하며 한 바퀴 돌았어요.' }, { id: 'f1', text: '"Clap your hands." 하며 발을 굴렀어요.' }, { id: 'o2', text: '"I\'m cold." 하며 몸을 떨었어요.' }, { id: 'f2', text: '"Touch your nose." 하며 귀를 만졌어요.' }] },
                target: { sort: { ok: ['o1', 'o2'], fix: ['f1', 'f2'] } }, difficulty: 0.15,
                hints: ['카드의 따옴표 속 말과 뒤에 적힌 동작을 하나씩 해 보며 견주어 보세요.'] },
              { prompt: '"지금 하는 일" 흉내 발표 기록이에요. 동작과 말이 맞는지 나누어 보세요.',
                toolOptions: { cards: [{ id: 'f1', text: '"I\'m reading a book." 하며 줄넘기를 했어요.' }, { id: 'o1', text: '"I\'m drinking milk." 하며 컵을 들고 마셨어요.' }, { id: 'o2', text: '"I\'m writing a letter." 하며 연필로 쓰는 흉내를 냈어요.' }, { id: 'f2', text: '"I\'m sleeping." 하며 뛰어다녔어요.' }] },
                target: { sort: { ok: ['o1', 'o2'], fix: ['f1', 'f2'] } }, difficulty: 0.2,
                hints: ['말에서 -ing 낱말(하고 있는 일)을 찾고, 그 일이 뒤의 동작과 같은지 보세요.'] },
              { prompt: '운동 흉내 발표 기록이에요. 동작과 말이 맞는지 나누어 보세요.',
                toolOptions: { cards: [{ id: 'o1', text: '"I\'m swimming." 하며 팔을 저었어요.' }, { id: 'f1', text: '"I\'m kicking a ball." 하며 손으로 공을 던졌어요.' }, { id: 'o2', text: '"I\'m riding a bike." 하며 발로 페달을 돌렸어요.' }] },
                target: { sort: { ok: ['o1', 'o2'], fix: ['f1'] } }, difficulty: 0.2,
                hints: ['kick은 발로 하는 동작이에요. 말 속 동작 낱말이 몸의 어느 부분을 쓰는지 생각해 보세요.'],
                levels: { challenge: { prompt: '운동 흉내 발표 기록이에요. 동작과 말이 맞는지 나누고, 동작과 말이 아닌 것을 말한 카드는 남겨 보세요.',
                  toolOptions: { cards: [{ id: 'o1', text: '"I\'m swimming." 하며 팔을 저었어요.' }, { id: 'f1', text: '"I\'m kicking a ball." 하며 손으로 공을 던졌어요.' }, { id: 'o2', text: '"I\'m riding a bike." 하며 발로 페달을 돌렸어요.' }, { id: 'x1', text: '목소리가 조금 작았어요.', why: '목소리 크기 이야기라 동작과 말이 맞는지와는 달라요.' }] },
                  target: { sort: { ok: ['o1', 'o2'], fix: ['f1'] } } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 낱말 카드로 "지금 하는 일" 문장 만들고 흉내 내기', minutes: 15, tool: 'wordcards',
            teacher: '"I am 다음에는 지금 하는 일 -ing, 그다음에 무엇을이 와요." 문장을 만든 뒤에는 그 흉내를 내며 말하게 한다. am을 빠뜨리고 I brushing으로 말하는 학생에게 "am이 있어야 지금 하는 일이 돼요."라고 짚는다. 짝 활동은 흉내 내기 놀이로 하고, 보는 사람은 "Match!" 또는 "You said ~, but you ~."로 확인해 준다.',
            task: '낱말 카드를 차례대로 놓아 지금 하는 일을 말하는 문장을 만들어요. 만든 문장의 흉내를 내며 말해요.',
            levels: LV({ mode: 'order', shuffle: true }),
            items: [
              { prompt: '낱말 카드를 차례대로 놓아 "나는 이를 닦고 있어요."를 만들어 보세요.',
                toolOptions: { cards: ['my teeth.', 'I am', 'brushing'] },
                target: { order: ['I am', 'brushing', 'my teeth.'] }, difficulty: 0.1,
                hints: ['누가 → 지금 하는 일(-ing) → 무엇을 차례예요.'] },
              { prompt: '낱말 카드를 차례대로 놓아 "그녀는 피아노를 치고 있어요."를 만들어 보세요.',
                toolOptions: { cards: ['the piano.', 'playing', 'She is'] },
                target: { order: ['She is', 'playing', 'the piano.'] }, difficulty: 0.15,
                hints: ['I am 대신 She is로 시작해도 차례는 같아요.'] },
              { prompt: '낱말 카드를 차례대로 놓아 "우리는 체육관에서 줄넘기를 하고 있어요."를 만들어 보세요.',
                toolOptions: { cards: ['in the gym.', 'jumping rope', 'We are'] },
                target: { order: ['We are', 'jumping rope', 'in the gym.'] }, difficulty: 0.2,
                hints: ['어디에서는 문장 맨 끝에 와요.'],
                levels: { challenge: { prompt: '낱말 카드를 차례대로 놓아 "그는 지금 부엌에서 국수를 먹고 있어요."를 만들어 보세요.',
                  toolOptions: { cards: ['in the kitchen', 'He is', 'noodles', 'eating', 'now.'] },
                  target: { order: ['He is', 'eating', 'noodles', 'in the kitchen', 'now.'] } } } },
              { prompt: '짝에게 흉내를 내며 "I am ~ing."로 말해요. 짝은 "Match!" 또는 "You said ~, but you ~."로 확인해 줘요. 세 번씩 바꾸어 한 뒤 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"친구가 틀렸을 때 어떻게 말해 주었나요?" "You said ~, but you ~." 틀을 쓴 학생 두세 명의 말을 듣고 출구 질문을 푼다. 출구 2번에서 am을 뺀 보기를 고른 학생은 다음 시간 도입에서 I am 카드부터 다시 놓아 본다.',
        exitTicket: [
          { type: 'tool', tool: 'wordcards', options: { mode: 'sort', shuffle: false, slots: [{ id: 'ok', label: '동작과 말이 맞아요' }, { id: 'fix', label: '고쳐요' }], cards: [{ id: 'o1', text: '"I\'m singing." 하며 노래했어요.' }, { id: 'f1', text: '"I\'m dancing." 하며 가만히 앉아 있었어요.' }] }, prompt: '친구의 흉내 발표 기록이에요. 동작과 말이 맞는지 나누어 보세요.', target: { sort: { ok: ['o1'], fix: ['f1'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '"나는 그림을 그리고 있어요."를 바르게 말한 것은 무엇일까요?', options: ['I drawing a picture.', 'I am drawing a picture.', 'I am draw a picture.'], answer: 1, difficulty: 0.2, explain: '지금 하는 일은 I am + -ing로 말해요.' },
          { type: 'mood', prompt: '오늘 친구 발표 확인해 주기는 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '보고 확인해 말해 주기',
      items: [
        { type: 'table', prompt: '친구의 발표를 보고 맞으면 ○, 고쳐야 하면 바른 말을 쓰세요.', columns: ['친구가 한 말', '친구의 동작', '○ 또는 바른 말'], cells: [['I\'m eating.', '먹는 흉내', ''], ['I\'m running.', '자는 흉내', ''], ['I\'m reading.', '책 읽는 흉내', '']], answer: '○ / I\'m sleeping. / ○' },
        { type: 'choice', prompt: '"그는 축구를 하고 있어요."를 바르게 쓴 것에 ○ 하세요.', options: ['He is playing soccer.', 'He playing soccer.', 'He is play soccer.'], answer: 'He is playing soccer.' },
        { type: 'blank', prompt: '친구에게 고칠 점을 말해 주는 문장을 완성하세요.', text: 'You said "I\'m swimming," but you ______________.' },
        { type: 'short', prompt: '내가 흉내 낼 동작 하나를 I am ~ing 문장으로 쓰세요.' },
      ],
      easy: {
        note: '지금 하는 일: I am + -ing.',
        items: [
          { type: 'choice', prompt: '바르게 쓴 것에 ○ 하세요.', options: ['I am eating.', 'I eating.'], answer: 'I am eating.' },
          { type: 'choice', prompt: '"I\'m sleeping." 에 맞는 동작에 ○ 하세요.', options: ['눈을 감고 누워요', '공을 차요'], answer: '눈을 감고 누워요' },
          { type: 'short', prompt: 'I am ___ing. 빈칸을 채워 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 틀리게 놓으면 까닭을 말해 주고 되돌려요.',
      base: '다 나누거나 놓은 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '동작과 말이 아닌 이야기(목소리 크기)를 가려내고, 덩이가 다섯인 긴 문장을 만들어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 친구에게 "틀렸어"라고만 말한다 → "You said ~, but you ~." 틀을 준다. ② am/is/are를 빠뜨린다(I brushing) → 첫 카드 I am을 늘 한 덩이로. ③ 동작의 크기나 목소리를 평가하려 한다 → 이 차시는 뜻이 같은지만 본다. 흉내는 제자리에서 하고 친구 몸에 손을 대지 않는다.',
  }));

  // ───────────── 25차시 (extend) 체조 안내 발표 ─────────────
  L.push(lesson(25, '[6영02-02]', {
    title: '동작을 보이며 모둠 준비 체조를 영어로 안내하기',
    objective: '방향과 횟수를 넣은 동작 표현을 이어 말하며 동작을 보여 모둠의 준비 체조를 이끌고, 친구들이 따라 한 동작이 표현과 맞는지 확인할 수 있다.',
    illustration: {
      prompt: PROMPT('a child leading three friends in a warm-up exercise, pointing to the left with paper arrows on the floor'),
      scene: SCENE('Step to the left. Jump two times.', '방향 + 횟수 + 동작', [{ motif: 'sun', x: 80, y: 70 }, { motif: 'tree', x: 400, y: 214 }]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '선생님이 학생들을 마주 보고 "Step to the left!" 하며 선생님의 왼쪽으로 한 발 옮긴다. 학생들은 선생님을 보고 따라 하다 서로 반대쪽으로 움직이게 된다. "왜 서로 다른 쪽으로 갔을까요?" 마주 보면 왼쪽·오른쪽이 바뀐다는 것을 확인하고, 오늘은 안내하는 사람이 모둠과 같은 쪽을 보고 서거나 말한 방향대로 보여 준다는 약속을 정한다. 방향과 횟수(two times)가 들어가면 동작이 더 분명해진다는 것도 말해 준다.',
        student: '선생님의 안내를 따라 움직여 보고, 왜 친구들과 다른 쪽으로 갔는지 말해 봐요.',
      },
      {
        id: 'main', title: '전개', minutes: 28,
        activities: [
          {
            id: 'a1', title: '활동 1. 방향 화살표와 동작 표현 짝 짓기', minutes: 10, tool: 'wordcards',
            teacher: '"화살표는 내가 바라보는 쪽을 위로 둔 거예요." 화살표 카드를 들고 몸을 화살표 쪽으로 움직여 보게 한다. left와 right를 헷갈리는 학생에게 왼손 엄지와 검지로 L 모양을 만들어 보게 한다. 짝 지은 뒤에는 표현을 말하며 그 쪽으로 한 발 옮긴다.',
            task: '왼쪽 화살표 그림에 알맞은 동작 표현 카드를 놓아요. 놓은 뒤 표현을 말하며 그 쪽으로 움직여요.',
            levels: LV({ mode: 'match', shuffle: false }),
            items: [
              { prompt: '네 방향 화살표마다 알맞은 동작 표현을 짝 지어 보세요.',
                toolOptions: { slots: [{ id: 'up', label: '앞으로', big: '↑' }, { id: 'down', label: '뒤로', big: '↓' }, { id: 'left', label: '왼쪽으로', big: '←' }, { id: 'right', label: '오른쪽으로', big: '→' }],
                  cards: [{ id: 'c1', text: 'Step forward.' }, { id: 'c2', text: 'Step back.' }, { id: 'c3', text: 'Step to the left.' }, { id: 'c4', text: 'Step to the right.' }] },
                target: { match: { up: 'c1', down: 'c2', left: 'c3', right: 'c4' } }, difficulty: 0.15,
                hints: ['forward와 back, left와 right가 서로 반대말이에요. 몸으로 움직여 보며 짝을 찾아요.'] },
              { prompt: '횟수가 들어간 동작이에요. 그림의 수와 동작에 맞는 표현을 짝 지어 보세요.',
                toolOptions: { slots: [{ id: 'j2', label: '제자리 뛰기', big: '2' }, { id: 'c3', label: '손뼉 치기', big: '3' }, { id: 't1', label: '한 바퀴 돌기', big: '1' }],
                  cards: [{ id: 'a1', text: 'Jump two times.' }, { id: 'a2', text: 'Clap three times.' }, { id: 'a3', text: 'Turn around once.' }] },
                target: { match: { j2: 'a1', c3: 'a2', t1: 'a3' } }, difficulty: 0.2,
                hints: ['카드의 동작 낱말과 횟수를 나누어 읽어 보세요. once는 한 번이에요.'],
                levels: { challenge: { prompt: '횟수가 들어간 동작이에요. 그림의 수와 동작에 맞게 짝 짓고, 맞지 않는 카드는 남겨 보세요.',
                  toolOptions: { cards: [{ id: 'a1', text: 'Jump two times.' }, { id: 'a2', text: 'Clap three times.' }, { id: 'a3', text: 'Turn around once.' }, { id: 'ax', text: 'Jump three times.', why: '제자리 뛰기 칸의 수는 3이 아니에요. 손뼉 칸과 수가 같아도 동작이 달라요.' }] } } } },
              { prompt: '팔·고개 방향 동작이에요. 화살표마다 알맞은 표현을 짝 지어 보세요.',
                toolOptions: { slots: [{ id: 'up', label: '팔', big: '↑' }, { id: 'left', label: '고개', big: '←' }, { id: 'down', label: '팔', big: '↓' }],
                  cards: [{ id: 'c1', text: 'Raise your arms.' }, { id: 'c2', text: 'Turn your head to the left.' }, { id: 'c3', text: 'Put your arms down.' }] },
                target: { match: { up: 'c1', left: 'c2', down: 'c3' } }, difficulty: 0.25,
                hints: ['왼쪽 칸에 적힌 몸 부분과 화살표 방향을 함께 보세요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 준비 체조 안내 차례대로 놓고 모둠 이끌기', minutes: 18, tool: 'wordcards',
            teacher: '"First와 Finally는 자리가 정해져 있고, 가운데 두 단계는 어떤 차례여도 체조가 돼요." 가운데 단계 순서는 바꾸어도 맞는다고 알려 준다. 안내를 놓은 뒤 모둠(4명)에서 한 사람씩 돌아가며 안내자가 되어 동작을 보이며 말하고, 나머지는 따라 한다. 안내자는 친구들이 한 동작이 자기 말과 맞는지 보고 "Good!" 또는 "Not left, right!"처럼 고쳐 준다.',
            task: '준비 체조 안내 카드를 차례대로 놓아요. 그다음 모둠에서 돌아가며 안내자가 되어 동작을 보이며 말해요.',
            levels: LV({ mode: 'order', shuffle: true }),
            items: [
              { prompt: '준비 체조 안내 카드를 차례대로 놓아 보세요.',
                toolOptions: { cards: ['Finally, take a deep breath.', 'Then, bend your knees five times.', 'First, stretch your arms up.', 'After that, jump ten times.'] },
                target: { order: ['First, stretch your arms up.', ['Then, bend your knees five times.', 'After that, jump ten times.'], 'Finally, take a deep breath.'] }, difficulty: 0.15,
                hints: ['차례 말을 보고 처음과 끝 카드부터 놓아 보세요.'] },
              { prompt: '목·어깨 체조 안내 카드를 차례대로 놓아 보세요.',
                toolOptions: { cards: ['Next, turn your head to the right.', 'Finally, roll your shoulders back.', 'First, stand up straight.', 'Then, turn your head to the left.'] },
                target: { order: ['First, stand up straight.', ['Then, turn your head to the left.', 'Next, turn your head to the right.'], 'Finally, roll your shoulders back.'] }, difficulty: 0.2,
                hints: ['First와 Finally가 붙은 카드의 자리를 먼저 정해요. 가운데는 어느 쪽이 먼저여도 돼요.'] },
              { prompt: '발 체조 안내 카드를 차례대로 놓아 보세요.',
                toolOptions: { cards: ['Then, step to the right.', 'Finally, sit down slowly.', 'First, step forward.'] },
                target: { order: ['First, step forward.', 'Then, step to the right.', 'Finally, sit down slowly.'] }, difficulty: 0.1,
                hints: ['First, Then, Finally 차례로 놓아 보세요.'],
                levels: { challenge: { prompt: '발 체조 안내 카드를 차례대로 놓아 보세요. 차례 말이 없는 카드도 있어요.',
                  toolOptions: { cards: ['Then, step to the right.', 'Sit down slowly.', 'First, stand up.', 'After that, step back.'] },
                  target: { order: ['First, stand up.', ['Then, step to the right.', 'After that, step back.'], 'Sit down slowly.'] } } } },
              { prompt: '모둠에서 돌아가며 안내자가 되어, 방향이나 횟수가 들어간 준비 체조 세 단계를 동작을 보이며 안내해요. 모두 한 번씩 이끈 뒤 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"안내할 때 무엇을 넣으니 친구들이 더 잘 따라 했나요?" 방향·횟수·차례 말이 나오면 칠판에 적고 출구 질문을 푼다. 출구 2번을 틀린 학생은 마주 보고 설 때 왼쪽·오른쪽이 바뀌는 것을 짝과 한 번 더 해 본다.',
        exitTicket: [
          { type: 'tool', tool: 'wordcards', options: { mode: 'match', shuffle: false, slots: [{ id: 'right', label: '오른쪽으로', big: '→' }, { id: 'up', label: '앞으로', big: '↑' }], cards: [{ id: 'c1', text: 'Step to the right.' }, { id: 'c2', text: 'Step forward.' }] }, prompt: '화살표마다 알맞은 동작 표현을 짝 지어 보세요.', target: { match: { right: 'c1', up: 'c2' } }, difficulty: 0.1 },
          { type: 'choice', prompt: '친구들과 마주 보고 "Step to the left."를 보여 줄 때 생기는 일은 무엇일까요?', options: ['모두 같은 쪽으로 간다', '친구들은 내 몸과 반대쪽으로 따라 하기 쉽다', '아무도 움직이지 않는다'], answer: 1, difficulty: 0.3, explain: '마주 보면 내 왼쪽이 친구들에게는 오른쪽으로 보여요.' },
          { type: 'mood', prompt: '오늘 모둠 체조 안내는 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '준비 체조 안내',
      items: [
        { type: 'table', prompt: '화살표에 맞는 동작 표현을 쓰세요.', columns: ['화살표', '동작 표현'], cells: [['↑', ''], ['↓', ''], ['←', ''], ['→', '']], answer: 'Step forward. / Step back. / Step to the left. / Step to the right.' },
        { type: 'choice', prompt: '"손뼉을 네 번 쳐요."에 알맞은 것에 ○ 하세요.', options: ['Clap four times.', 'Jump four times.', 'Clap two times.'], answer: 'Clap four times.' },
        { type: 'choice', prompt: '체조를 안내하는 사람이 할 일로 알맞은 것에 ○ 하세요.', options: ['말만 하고 동작은 보이지 않는다', '말과 같은 동작을 보이며 안내한다', '동작만 하고 말은 하지 않는다'], answer: '말과 같은 동작을 보이며 안내한다' },
        { type: 'short', prompt: '내가 이끌 준비 체조 세 단계를 First, Then, Finally를 넣어 쓰세요.' },
      ],
      easy: {
        note: 'forward 앞, back 뒤, left 왼쪽, right 오른쪽, two times 두 번.',
        items: [
          { type: 'choice', prompt: '← 에 맞는 것에 ○ 하세요.', options: ['Step to the left.', 'Step to the right.'], answer: 'Step to the left.' },
          { type: 'choice', prompt: '"두 번 뛰어요."에 ○ 하세요.', options: ['Jump two times.', 'Clap two times.'], answer: 'Jump two times.' },
          { type: 'short', prompt: 'Step ___. 빈칸에 forward 또는 back을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 짝에 초록 테두리가 생기고, 틀린 카드를 넣으면 까닭을 말해 주고 되돌려요.',
      base: '다 짝 짓거나 놓은 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '수가 같은 함정 동작 카드를 가려내고, 차례 말이 없는 마지막 카드까지 놓아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 마주 보고 안내해 왼쪽·오른쪽이 뒤바뀐다 → 안내자는 모둠과 같은 쪽을 보고 서거나 등을 보인다. ② 횟수 표현(two times, once)을 빠뜨린다 → 칠판에 방향·횟수·동작 세 칸. ③ 가운데 단계의 순서가 하나뿐이라고 여긴다 → 차례 말이 Then/After that이면 바꾸어도 체조가 된다. 모둠 체조는 책상을 밀어 공간을 만들고 팔 간격을 둔 뒤 제자리에서 한다. 이 차시로 동작과 표현 부분(23~25차시)을 마친다.',
  }));

  // ───────────── 26차시 (core) 사물 묘사 ─────────────
  const FEATURE_SLOTS = [{ id: 'color', label: '색깔' }, { id: 'shape', label: '크기·모양' }, { id: 'use', label: '쓰임' }];
  const THING = (en, ko, motif) => ({ id: en, text: en, sub: ko, motif });
  L.push(lesson(26, '[6영02-04]', {
    title: '물건의 색·크기·쓰임을 골라 세 문장으로 묘사하기',
    objective: '물건 하나의 특징을 색깔·크기나 모양·쓰임에서 골라 세 문장으로 묘사해 쓰고, 묘사를 읽고 어떤 물건인지 알아맞힐 수 있다.',
    illustration: {
      prompt: PROMPT('a paper riddle card with three short lines next to a banana, an apple, a pencil and a ball, with a big question mark'),
      scene: SCENE('It is yellow. It is long. You can eat it.', '색 + 크기·모양 + 쓰임', [{ motif: 'banana', x: 90, y: 214 }, { motif: 'apple', x: 400, y: 214 }]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"I\'m thinking of something. It is yellow. What is it?" 학생들이 banana, pencil, lemon, star 등 여러 답을 말하면 "답이 너무 많지요? 왜 그럴까요?" 묻는다. 이어서 "It is long. You can eat it."을 보태면 답이 banana로 좁혀진다. "색깔 하나만 말하면 친구가 맞히기 어려워요. 크기나 모양, 무엇에 쓰는지를 보태면 하나로 좁혀져요."라고 정리하며 칠판에 색깔 / 크기·모양 / 쓰임 세 칸을 그린다.',
        student: '선생님 수수께끼를 듣고 답을 말해 봐요. 한 문장일 때와 세 문장일 때 무엇이 달랐는지 말해 봐요.',
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 묘사 문장을 색깔·크기와 모양·쓰임으로 나누기', minutes: 12, tool: 'wordcards',
            teacher: '"문장마다 물건의 무엇을 알려 주나요?" yellow, red 같은 색 낱말, big·small·long·round 같은 크기·모양 낱말, You can eat/use ~ 같은 쓰임 말을 함께 찾아본다. 좋고 싫음(I like it.)을 특징 칸에 넣는 학생에게 "그건 물건의 특징일까요, 내 생각일까요?"라고 묻는다.',
            task: '물건을 묘사한 문장 카드를 색깔·크기와 모양·쓰임 칸에 나누어요.',
            levels: LV({ mode: 'sort', shuffle: false, slots: FEATURE_SLOTS }),
            items: [
              { prompt: '바나나를 묘사한 문장이에요. 색깔·크기와 모양·쓰임으로 나누어 보세요.',
                toolOptions: { cards: [{ id: 'c1', text: 'It is yellow.' }, { id: 's1', text: 'It is long.' }, { id: 'u1', text: 'You can eat it.' }] },
                target: { sort: { color: ['c1'], shape: ['s1'], use: ['u1'] } }, difficulty: 0.1,
                hints: ['문장 끝 낱말이 색인지, 크기·모양인지 보고, You can으로 시작하는 문장이 무엇을 알려 주는지 생각해 보세요.'] },
              { prompt: '우산을 묘사한 문장이에요. 색깔·크기와 모양·쓰임으로 나누어 보세요.',
                toolOptions: { cards: [{ id: 'c1', text: 'It is blue.' }, { id: 's1', text: 'It is big when it is open.' }, { id: 'u1', text: 'You use it on rainy days.' }, { id: 's2', text: 'It has a curved handle.' }] },
                target: { sort: { color: ['c1'], shape: ['s1', 's2'], use: ['u1'] } }, difficulty: 0.2,
                hints: ['has로 말한 부분의 생김새도 모양이에요. You use it은 무엇을 알려 줄까요?'] },
              { prompt: '시계를 묘사한 문장이에요. 색깔·크기와 모양·쓰임으로 나누어 보세요.',
                toolOptions: { cards: [{ id: 'c1', text: 'It is white.' }, { id: 's1', text: 'It is round.' }, { id: 'u1', text: 'It tells the time.' }, { id: 's2', text: 'It is small.' }] },
                target: { sort: { color: ['c1'], shape: ['s1', 's2'], use: ['u1'] } }, difficulty: 0.2,
                hints: ['물건이 하는 일을 말한 문장은 쓰임이에요.'],
                levels: { challenge: { prompt: '시계를 묘사한 말이에요. 물건의 특징만 나누고, 특징이 아닌 말은 카드 칸에 남겨 보세요.',
                  toolOptions: { cards: [{ id: 'c1', text: 'It is white.' }, { id: 's1', text: 'It is round.' }, { id: 'u1', text: 'It tells the time.' }, { id: 's2', text: 'It is small.' }, { id: 'x1', text: 'I like it very much.', why: '좋아한다는 것은 내 생각이에요. 친구가 물건을 맞히는 데 도움이 되지 않아요.' }] },
                  target: { sort: { color: ['c1'], shape: ['s1', 's2'], use: ['u1'] } } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 세 문장 묘사를 읽고 물건 알아맞히기', minutes: 15, tool: 'wordcards',
            teacher: '"세 문장을 하나씩 읽으며 맞지 않는 물건을 지워 가 보세요." 첫 문장에서 답을 정해 버리는 학생에게 "연필도 노랗고 길어요. 다음 문장까지 읽어 볼까요?"라고 묻는다. 마지막 짝 활동은 필통 속 물건 하나를 몰래 골라 세 칸이 다 들어간 세 문장을 공책에 쓰고, 짝에게 읽어 주어 맞히게 한다.',
            task: '세 문장 묘사를 읽고 그 물건 카드 하나를 바구니에 넣어요. 문장을 하나 읽을 때마다 맞지 않는 물건을 지워 가요.',
            levels: LV(PICK('답')),
            items: [
              { prompt: '"It is yellow. It is long. You can eat it." 무엇일까요? 물건 카드 하나를 골라 보세요.',
                toolOptions: { cards: [THING('banana', '바나나', 'banana'), THING('pencil', '연필', 'pencil'), THING('apple', '사과', 'apple'), THING('ball', '공', 'ball')] },
                target: { pick: ['banana'] }, difficulty: 0.1,
                hints: ['문장 하나를 읽을 때마다 맞지 않는 물건을 하나씩 지워 보세요.'] },
              { prompt: '"It is red. It is round. You can eat it." 무엇일까요? 물건 카드 하나를 골라 보세요.',
                toolOptions: { cards: [THING('ball', '공', 'ball'), THING('apple', '사과', 'apple'), THING('egg', '달걀', 'egg'), THING('banana', '바나나', 'banana')] },
                target: { pick: ['apple'] }, difficulty: 0.15,
                hints: ['빨갛고 둥근 것이 둘일 수 있어요. 마지막 문장까지 읽고 하나로 좁혀 보세요.'] },
              { prompt: '"It is small and white. It is oval. You can boil it." 무엇일까요? 물건 카드 하나를 골라 보세요.',
                toolOptions: { cards: [THING('ball', '공', 'ball'), THING('egg', '달걀', 'egg'), THING('book', '책', 'book'), THING('apple', '사과', 'apple')] },
                target: { pick: ['egg'] }, difficulty: 0.25,
                hints: ['oval은 길쭉하게 둥근 모양이에요. boil은 물에 넣고 끓이는 것이에요.'],
                levels: { challenge: { prompt: '"It is long and thin. It is yellow. You can write with it." 무엇일까요? 물건 카드 하나를 골라 보세요.',
                  toolOptions: { cards: [THING('banana', '바나나', 'banana'), THING('pencil', '연필', 'pencil'), THING('umbrella', '우산', 'umbrella'), THING('book', '책', 'book')] },
                  target: { pick: ['pencil'] } } } },
              { prompt: '필통 속 물건 하나를 몰래 골라 색깔·크기나 모양·쓰임이 다 들어간 세 문장을 써요. 짝에게 읽어 주어 맞히게 한 뒤 바꾸어 하고 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"짝이 내 물건을 맞히기 어려웠다면 어느 칸이 빠졌을까요?" 두세 명에게 들은 뒤 출구 질문을 푼다. 출구 1번에서 쓰임 문장을 다른 칸에 넣은 학생은 You can ~ 문장이 무엇을 알려 주는지 다시 짚어 본다.',
        exitTicket: [
          { type: 'tool', tool: 'wordcards', options: { mode: 'sort', shuffle: false, slots: FEATURE_SLOTS, cards: [{ id: 'c1', text: 'It is green.' }, { id: 's1', text: 'It is square.' }, { id: 'u1', text: 'You can sit on it.' }] }, prompt: '방석을 묘사한 문장이에요. 색깔·크기와 모양·쓰임으로 나누어 보세요.', target: { sort: { color: ['c1'], shape: ['s1'], use: ['u1'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '친구가 가장 쉽게 맞힐 수 있는 묘사는 무엇일까요?', options: ['It is red.', 'It is red. It is round.', 'It is red. It is round. You can kick it.'], answer: 2, difficulty: 0.15, explain: '색깔·모양·쓰임이 다 들어가 답이 공 하나로 좁혀져요.' },
          { type: 'mood', prompt: '오늘 물건 묘사하기는 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '세 문장으로 묘사하기',
      items: [
        { type: 'table', prompt: '내 물건의 특징을 칸마다 영어 문장으로 쓰세요.', columns: ['물건', '색깔', '크기·모양', '쓰임'], rows: 2 },
        { type: 'choice', prompt: '"It is small and round. It is orange. You can eat it." 은 무엇일까요?', options: ['basketball', 'tangerine', 'carrot'], answer: 'tangerine' },
        { type: 'choice', prompt: '쓰임을 알려 주는 문장에 ○ 하세요.', options: ['It is brown.', 'It is long.', 'You can cut paper with it.'], answer: 'You can cut paper with it.' },
        { type: 'short', prompt: '교실 물건 하나를 골라 색깔·크기나 모양·쓰임이 들어간 세 문장으로 묘사하세요.' },
      ],
      easy: {
        note: '세 칸: 색깔(It is red.) / 크기·모양(It is big.) / 쓰임(You can ~ it.)',
        items: [
          { type: 'choice', prompt: '색깔을 알려 주는 문장에 ○ 하세요.', options: ['It is pink.', 'It is long.'], answer: 'It is pink.' },
          { type: 'choice', prompt: '"It is round. You can kick it." 은?', options: ['ball', 'book'], answer: 'ball' },
          { type: 'short', prompt: 'It is ___. You can ___ it. 빈칸을 채워 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸·카드에 초록 테두리가 생기고, 틀리게 넣으면 까닭을 말해 주고 되돌려요.',
      base: '다 나누거나 고른 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '특징이 아닌 생각 문장을 가려내고, 바나나와 연필처럼 색·모양이 겹치는 물건을 쓰임으로 가려요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 색깔 하나만 쓰고 크기·쓰임을 빠뜨린다 → 세 칸을 채웠는지 손가락으로 센다. ② "I like it."처럼 생각을 특징으로 쓴다 → 친구가 맞히는 데 도움이 되는지 묻는다. ③ 첫 문장만 듣고 답을 정한다 → 한 문장마다 지워 가며 듣기. 묘사할 물건은 친구 것이 아니라 내 물건으로 한다.',
  }));

  // ───────────── 27차시 (practice) 묘사를 보태 하나로 좁히기 ─────────────
  L.push(lesson(27, '[6영02-04]', {
    title: '답이 여럿인 수수께끼에 한 문장을 보태 하나로 좁히기',
    objective: '답이 여러 개인 묘사 글에서 무엇이 모자란지 찾아, 답을 하나로 좁히는 특징 문장을 보탤 수 있다.',
    illustration: {
      prompt: PROMPT('two similar red round objects, an apple and a ball, side by side with a paper riddle card and a pencil adding a third line'),
      scene: SCENE('It is red. It is round. + ?', '하나로 좁히는 문장을 보태요', [{ motif: 'apple', x: 90, y: 214 }, { motif: 'ball', x: 400, y: 214 }]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '사과와 빨간 공을 함께 보여 주며 "It is red. It is round. What is it?" 하고 묻는다. 학생들이 둘로 갈리면 "둘 다 맞아요. 수수께끼가 무엇이 모자랐을까요?" 묻는다. "It is red again!"처럼 같은 특징을 다시 말하는 친구가 있으면 "이미 말한 것은 둘을 가르지 못해요. 둘이 서로 다른 점을 말해야 해요."라고 짚고, "You can eat it."을 보태어 사과로 좁힌다.',
        student: '선생님 수수께끼의 답이 왜 둘인지 말하고, 하나로 좁힐 문장을 생각해 봐요.',
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 답을 하나로 좁히는 문장 고르기', minutes: 13, tool: 'wordcards',
            teacher: '"괄호 속 두 물건이 서로 무엇이 다른지 먼저 말해 보세요." 다른 점을 말한 문장이 답을 좁힌다는 것을 확인한다. 좋고 나쁨(It is very nice.)이나 이미 나온 특징을 고르는 학생에게 "이 문장을 보태면 둘 가운데 무엇이 빠지나요?"라고 묻는다.',
            task: '답이 두 개인 수수께끼에 보탤 문장 가운데 답을 하나로 좁히는 문장 하나를 바구니에 넣어요.',
            levels: LV(PICK('좁히는 문장')),
            items: [
              { prompt: '"It is red. It is round." 답이 사과와 공 둘이에요. 사과로 좁히는 문장 하나를 골라 보세요.',
                toolOptions: { cards: [{ id: 'c1', text: 'You can eat it.' }, { id: 'c2', text: 'It is red.', why: '이미 말한 특징이라 둘 다 그대로 남아요.' }, { id: 'c3', text: 'It is very nice.', why: '좋다는 생각은 둘 가운데 어느 것도 지우지 못해요.' }] },
                target: { pick: ['c1'] }, difficulty: 0.15,
                hints: ['문장을 하나씩 보태 보고, 두 물건 가운데 하나가 빠지는지 보세요.'] },
              { prompt: '"It is long. You can hold it in your hand." 답이 연필과 우산 둘이에요. 우산으로 좁히는 문장 하나를 골라 보세요.',
                toolOptions: { cards: [{ id: 'c1', text: 'It is long.', why: '이미 말한 특징이라 둘 다 남아요.' }, { id: 'c2', text: 'You can write with it.', why: '이 문장을 보태면 우산이 아니라 연필이 남아요.' }, { id: 'c3', text: 'You open it on rainy days.' }] },
                target: { pick: ['c3'] }, difficulty: 0.2,
                hints: ['보탠 뒤에 남는 물건이 무엇인지까지 따져 보세요. 남아야 하는 물건은 문항에 있어요.'] },
              { prompt: '"It is white. You can find it in the kitchen." 답이 달걀과 우유 둘이에요. 달걀로 좁히는 문장 하나를 골라 보세요.',
                toolOptions: { cards: [{ id: 'c1', text: 'You can drink it.', why: '마실 수 있는 것은 우유예요.' }, { id: 'c2', text: 'It is small and oval.' }, { id: 'c3', text: 'It is white.', why: '이미 말한 특징이에요.' }] },
                target: { pick: ['c2'] }, difficulty: 0.25,
                hints: ['두 물건의 모양과 먹는 방법이 어떻게 다른지 떠올려 보세요.'],
                levels: { challenge: { prompt: '"It is yellow. You can eat it." 답이 바나나와 레몬과 옥수수예요. 바나나로 좁히는 문장 하나를 골라 보세요.',
                  toolOptions: { cards: [{ id: 'c1', text: 'It is long and curved.' }, { id: 'c2', text: 'It is very sour.', why: '아주 신 것은 레몬이에요.' }, { id: 'c3', text: 'It is a fruit.', why: '레몬도 과일이라 둘이 남아요.' }, { id: 'c4', text: 'It is yellow.', why: '이미 말한 특징이에요.' }] },
                  target: { pick: ['c1'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 두 물건의 묘사 문장 나누어 다른 점 찾기', minutes: 14, tool: 'wordcards',
            teacher: '"두 물건 모두에 맞는 문장은 둘을 가르지 못해요. 그런 카드는 어느 칸에도 넣지 말고 남겨요." 색깔 문장(It is blue.)은 우산도 책도 파랄 수 있다는 것을 함께 말해 본다. 마지막 짝 활동은 26차시에 쓴 내 수수께끼를 짝과 바꾸어 읽고, 답이 둘 이상 떠오르면 한 문장을 보태 다시 쓴다.',
            task: '묘사 문장을 그 물건 칸에 나누어요. 두 물건 모두에 맞아 둘을 가르지 못하는 문장은 카드 칸에 남겨요.',
            levels: LV({ mode: 'sort', shuffle: false }),
            items: [
              { prompt: '우산과 책을 묘사한 문장이에요. 그 물건에만 맞는 문장을 나누어 보세요.',
                toolOptions: { slots: [{ id: 'umbrella', label: 'umbrella', motif: 'umbrella' }, { id: 'book', label: 'book', motif: 'book' }],
                  cards: [{ id: 'u1', text: 'You open it on rainy days.' }, { id: 'b1', text: 'It has many pages.' }, { id: 'x1', text: 'It is blue.', why: '우산도 책도 파랄 수 있어서 둘을 가르지 못해요.' }, { id: 'u2', text: 'It has a long handle.' }, { id: 'b2', text: 'You can read it.' }] },
                target: { sort: { umbrella: ['u1', 'u2'], book: ['b1', 'b2'] } }, difficulty: 0.2,
                hints: ['문장마다 두 물건에 하나씩 대어 보세요. 둘 다에 맞는 문장은 남겨요.'] },
              { prompt: '공과 사과를 묘사한 문장이에요. 그 물건에만 맞는 문장을 나누어 보세요.',
                toolOptions: { slots: [{ id: 'ball', label: 'ball', motif: 'ball' }, { id: 'apple', label: 'apple', motif: 'apple' }],
                  cards: [{ id: 'x1', text: 'It is round.', why: '공도 사과도 둥글어요.' }, { id: 'a1', text: 'It grows on a tree.' }, { id: 'b1', text: 'You can kick it.' }, { id: 'a2', text: 'It tastes sweet.' }, { id: 'b2', text: 'It bounces.' }] },
                target: { sort: { ball: ['b1', 'b2'], apple: ['a1', 'a2'] } }, difficulty: 0.2,
                hints: ['bounce는 통통 튀는 것이에요. 문장마다 두 물건에 대어 보세요.'] },
              { prompt: '연필과 바나나를 묘사한 문장이에요. 그 물건에만 맞는 문장을 나누어 보세요.',
                toolOptions: { slots: [{ id: 'pencil', label: 'pencil', motif: 'pencil' }, { id: 'banana', label: 'banana', motif: 'banana' }],
                  cards: [{ id: 'x1', text: 'It is yellow.', why: '연필도 바나나도 노랄 수 있어요.' }, { id: 'p1', text: 'It has an eraser on top.' }, { id: 'n1', text: 'You peel it.' }, { id: 'x2', text: 'It is long.', why: '연필도 바나나도 길어요.' }, { id: 'p2', text: 'You sharpen it.' }] },
                target: { sort: { pencil: ['p1', 'p2'], banana: ['n1'] } }, difficulty: 0.3,
                hints: ['peel은 껍질을 벗기는 것, sharpen은 뾰족하게 깎는 것이에요.'] },
              { prompt: '26차시에 쓴 내 수수께끼를 짝과 바꾸어 읽어요. 답이 둘 이상 떠오르면 하나로 좁히는 문장을 보태 다시 쓰고 "다 했어요"를 누르세요.', free: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"답을 하나로 좁히려면 어떤 문장을 보태야 했나요?" "둘이 서로 다른 점"이라는 말이 나오면 칠판에 적고 출구 질문을 푼다. 출구 1번에서 이미 말한 특징을 고른 학생은 활동 2의 남긴 카드를 다시 보며 까닭을 말해 본다.',
        exitTicket: [
          { type: 'tool', tool: 'wordcards', options: { mode: 'pick', basket: '좁히는 문장', shuffle: false, cards: [{ id: 'e1', text: 'It is small.' }, { id: 'e2', text: 'You can fly it in the wind.' }, { id: 'e3', text: 'It is nice.' }] }, prompt: '"It is colorful. It has a long string." 답이 연과 요요예요. 연으로 좁히는 문장 하나를 골라 보세요.', target: { pick: ['e2'] }, difficulty: 0.25 },
          { type: 'choice', prompt: '수수께끼의 답이 둘일 때 보탤 문장으로 알맞은 것은 무엇일까요?', options: ['이미 말한 특징을 한 번 더 말한다', '두 물건이 서로 다른 점을 말한다', '그 물건이 좋다고 말한다'], answer: 1, difficulty: 0.15, explain: '서로 다른 점을 말해야 하나가 지워져요.' },
          { type: 'mood', prompt: '오늘 수수께끼 고치기는 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '하나로 좁히는 문장',
      items: [
        { type: 'table', prompt: '두 물건의 다른 점을 영어 문장으로 쓰세요.', columns: ['두 물건', '하나에만 맞는 문장', '다른 하나에만 맞는 문장'], cells: [['pencil / crayon', '', ''], ['cup / bowl', '', '']] },
        { type: 'choice', prompt: '"It is black. It has four legs." 답이 의자와 개예요. 개로 좁히는 문장에 ○ 하세요.', options: ['It is black.', 'It can bark.', 'You can sit on it.'], answer: 'It can bark.' },
        { type: 'choice', prompt: '두 물건을 가르지 못하는 문장에 ○ 하세요. (우산과 책)', options: ['It is blue.', 'It has many pages.', 'You open it on rainy days.'], answer: 'It is blue.' },
        { type: 'short', prompt: '26차시에 쓴 내 수수께끼에 하나로 좁히는 문장을 보태 다시 쓰세요.' },
      ],
      easy: {
        note: '두 물건이 서로 다른 점을 말하면 답이 하나로 좁혀져요.',
        items: [
          { type: 'choice', prompt: '사과와 공 가운데 사과로 좁히는 문장에 ○ 하세요.', options: ['You can eat it.', 'It is round.'], answer: 'You can eat it.' },
          { type: 'choice', prompt: '연필과 우산 가운데 연필로 좁히는 문장에 ○ 하세요.', options: ['You can write with it.', 'It is long.'], answer: 'You can write with it.' },
          { type: 'short', prompt: 'You can ___ it. 빈칸을 채워 공에만 맞는 문장을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '알맞은 카드에 초록 테두리가 생기고, 둘을 가르지 못하는 카드를 넣으면 까닭을 말해 주고 되돌려요.',
      base: '다 고르거나 나눈 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '답이 셋인 수수께끼에서 둘만 지우는 문장과 하나로 좁히는 문장을 가려내요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 이미 말한 특징을 다시 보탠다 → "이 문장을 보태면 무엇이 지워지나요?" ② 색깔처럼 두 물건 모두에 맞는 특징으로 가르려 한다 → 활동 2의 남기는 카드. ③ 보탠 문장이 거꾸로 다른 물건을 남기는 줄 모른다(연필·우산) → 보탠 뒤 남는 물건을 말해 보게 한다. 물건 그림은 대표 모습이며 실제 물건은 색이 다를 수 있다.',
  }));

  // ───────────── 28차시 (extend) 가방 속 물건 묘사 ─────────────
  L.push(lesson(28, '[6영02-04]', {
    title: '가방 속 물건 묘사 글을 써서 읽어 주고 맞히게 하기',
    objective: '가방 속 물건 하나를 골라 세 가지 특징이 들어간 묘사 글을 쓰고, 읽어 준 글을 듣고 친구가 맞히는지 확인해 고칠 수 있다.',
    illustration: {
      prompt: PROMPT('an open school backpack with a water bottle, an eraser, a ruler and a folded umbrella peeking out, and a child reading a riddle card aloud'),
      scene: SCENE("What's in my bag?", '세 가지 특징으로 묘사해요', [{ motif: 'umbrella', x: 90, y: 214 }, { motif: 'pencil', x: 400, y: 214 }]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '선생님 가방을 들고 "What\'s in my bag? It is made of plastic. It has a cap. You drink water from it." 하고 묻는다. 학생들이 water bottle을 맞히면 "어떤 문장에서 알았나요?"라고 되묻는다. 지금까지 배운 색깔·크기·모양·재료·쓰임 가운데 무엇을 썼는지 칠판에 표시한 뒤, 오늘은 내 가방 속 물건으로 묘사 글을 써서 모둠 친구들이 맞히게 한다고 알린다.',
        student: '선생님 가방 속 물건을 맞혀 보고, 어느 문장에서 알았는지 말해 봐요.',
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 묘사 글과 가방 속 물건 짝 짓기', minutes: 12, tool: 'wordcards',
            teacher: '"묘사 글마다 가장 결정적인 단서 낱말에 밑줄을 긋는다고 생각해 보세요." erases, draw lines, keep pencils 같은 쓰임 말이 결정적일 때가 많다는 것을 확인한다. 첫 낱말만 보고 짝을 짓는 학생에게 글을 끝까지 읽게 한다.',
            task: '왼쪽 묘사 글마다 그 물건 카드를 놓아요. 놓은 뒤 결정적인 단서 낱말이 무엇이었는지 짝에게 말해요.',
            levels: LV({ mode: 'match', shuffle: false }),
            items: [
              { prompt: '필통 속 물건을 묘사한 글이에요. 글마다 알맞은 물건을 짝 지어 보세요.',
                toolOptions: { slots: [{ id: 'r1', label: 'It is small and soft. It erases pencil marks.' }, { id: 'r2', label: 'It is long and flat. You draw lines with it.' }, { id: 'r3', label: 'It has a zipper. You keep pencils in it.' }],
                  cards: [{ id: 'eraser', text: 'eraser', sub: '지우개' }, { id: 'ruler', text: 'ruler', sub: '자' }, { id: 'case', text: 'pencil case', sub: '필통' }] },
                target: { match: { r1: 'eraser', r2: 'ruler', r3: 'case' } }, difficulty: 0.15,
                hints: ['글마다 무엇에 쓰는지 알려 주는 낱말을 찾아보세요.'] },
              { prompt: '가방 속 물건을 묘사한 글이에요. 글마다 알맞은 물건을 짝 지어 보세요.',
                toolOptions: { slots: [{ id: 'r1', label: 'It folds in half. It keeps you dry in the rain.' }, { id: 'r2', label: 'It is made of plastic. You drink from it.' }, { id: 'r3', label: 'It has numbers on it. It tells the time.' }],
                  cards: [{ id: 'umbrella', text: 'umbrella', sub: '우산', motif: 'umbrella' }, { id: 'bottle', text: 'water bottle', sub: '물병' }, { id: 'watch', text: 'watch', sub: '손목시계' }] },
                target: { match: { r1: 'umbrella', r2: 'bottle', r3: 'watch' } }, difficulty: 0.2,
                hints: ['rain, drink, time처럼 쓰임과 이어지는 낱말을 찾아보세요.'],
                levels: { challenge: { prompt: '가방 속 물건을 묘사한 글이에요. 글마다 알맞은 물건을 짝 짓고, 맞는 글이 없는 물건은 남겨 보세요.',
                  toolOptions: { cards: [{ id: 'umbrella', text: 'umbrella', sub: '우산', motif: 'umbrella' }, { id: 'bottle', text: 'water bottle', sub: '물병' }, { id: 'watch', text: 'watch', sub: '손목시계' }, { id: 'cup', text: 'paper cup', sub: '종이컵', why: '종이컵은 플라스틱으로 만들지 않았고, 접어서 비를 막지도 않아요.' }] } } } },
              { prompt: '책상 위 물건을 묘사한 글이에요. 글마다 알맞은 물건을 짝 지어 보세요.',
                toolOptions: { slots: [{ id: 'r1', label: 'It is square and thin. You write notes in it.' }, { id: 'r2', label: 'It is made of metal. You cut paper with it.' }, { id: 'r3', label: 'It is small and sticky. You stick paper with it.' }],
                  cards: [{ id: 'notebook', text: 'notebook', sub: '공책', motif: 'book' }, { id: 'scissors', text: 'scissors', sub: '가위' }, { id: 'glue', text: 'glue stick', sub: '딱풀' }] },
                target: { match: { r1: 'notebook', r2: 'scissors', r3: 'glue' } }, difficulty: 0.2,
                hints: ['쓰임 문장(You ~ with it, You ~ in it)을 먼저 읽어 보세요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 세 가지 특징을 다 갖춘 묘사 글 고르고 모둠에서 맞히기', minutes: 15, tool: 'wordcards',
            teacher: '"글마다 색깔, 크기·모양, 쓰임 가운데 몇 칸이 들어 있는지 손가락으로 세어 보세요." 문장 수가 많으면 잘 쓴 글이라고 여기는 학생에게 "같은 칸을 여러 번 말하면 친구가 맞히는 데 도움이 될까요?"라고 묻는다. 마지막 모둠 활동은 가방 속 물건 하나로 세 문장 글을 써서 모둠(4명)에게 읽어 주고, 친구들이 맞히지 못하면 문장 하나를 고친다.',
            task: '같은 물건을 묘사한 글 가운데 색깔·크기나 모양·쓰임 세 가지가 다 들어간 글 하나를 바구니에 넣어요.',
            levels: LV(PICK('다 갖춘 글')),
            items: [
              { prompt: '물병을 묘사한 글이에요. 세 가지 특징(색깔·크기나 모양·쓰임)이 다 들어간 글 하나를 골라 보세요.',
                toolOptions: { cards: [{ id: 'c1', text: 'It is blue. It is blue and green. It is very blue.', why: '색깔만 세 번 말했어요.' }, { id: 'c2', text: 'It is blue. It is tall. You drink water from it.' }, { id: 'c3', text: 'It is tall. I like it. It is mine.', why: '크기 말고는 특징이 아니라 생각과 주인 이야기예요.' }] },
                target: { pick: ['c2'] }, difficulty: 0.15,
                hints: ['글마다 문장 하나가 어느 칸인지 손가락으로 세어 보세요.'] },
              { prompt: '지우개를 묘사한 글이에요. 세 가지 특징(색깔·크기나 모양·쓰임)이 다 들어간 글 하나를 골라 보세요.',
                toolOptions: { cards: [{ id: 'c1', text: 'It is small. It is square. It is little.', why: '크기·모양만 말했어요.' }, { id: 'c2', text: 'It is white. You erase mistakes with it.', why: '크기나 모양이 빠졌어요.' }, { id: 'c3', text: 'It is white. It is small and square. You erase mistakes with it.' }] },
                target: { pick: ['c3'] }, difficulty: 0.2,
                hints: ['빠진 칸이 있는 글과 같은 칸만 되풀이한 글을 지워 보세요.'] },
              { prompt: '실내화를 묘사한 글이에요. 세 가지 특징(색깔·크기나 모양·쓰임)이 다 들어간 글 하나를 골라 보세요.',
                toolOptions: { cards: [{ id: 'c1', text: 'They are white. You wear them inside the school.', why: '크기나 모양이 빠졌어요.' }, { id: 'c2', text: 'They are white. They are flat. You wear them inside the school.' }, { id: 'c3', text: 'They are flat. They are soft. They are nice.', why: '색깔과 쓰임이 빠졌어요.' }] },
                target: { pick: ['c2'] }, difficulty: 0.25,
                hints: ['둘이 짝인 물건은 It 대신 They로 말해요. 칸 세기는 똑같이 해요.'],
                levels: { challenge: { prompt: '실내화를 묘사한 글이에요. 세 가지 특징이 다 들어가고 바르게 쓴 글을 모두 골라 보세요.',
                  toolOptions: { cards: [{ id: 'c1', text: 'They are white. You wear them inside the school.', why: '크기나 모양이 빠졌어요.' }, { id: 'c2', text: 'They are white. They are flat. You wear them inside the school.' }, { id: 'c3', text: 'They are flat. They are soft. They are nice.', why: '색깔과 쓰임이 빠졌어요.' }, { id: 'c4', text: 'They are gray and small. You wear them in the classroom.' }, { id: 'c5', text: 'It is white. It is flat. You wear them.', why: '두 짝인 물건을 It이라고 해 앞뒤가 맞지 않아요.' }] },
                  target: { pick: ['c2', 'c4'] } } } },
              { prompt: '내 가방 속 물건 하나로 세 가지 특징이 들어간 묘사 글을 써서 모둠 친구들에게 읽어 줘요. 맞히지 못하면 문장 하나를 고쳐 다시 읽고 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"친구들이 바로 맞힌 글에는 무엇이 들어 있었나요? 고친 문장은 무엇이었나요?" 두세 모둠의 이야기를 듣고 출구 질문을 푼다. 출구 1번을 틀린 학생은 쓰임 문장을 먼저 찾아 읽는 연습을 한 번 더 한다.',
        exitTicket: [
          { type: 'tool', tool: 'wordcards', options: { mode: 'match', shuffle: false, slots: [{ id: 'r1', label: 'They are long and thin. You eat noodles with them.' }, { id: 'r2', label: 'It is round and deep. You eat soup from it.' }], cards: [{ id: 'chopsticks', text: 'chopsticks', sub: '젓가락' }, { id: 'bowl', text: 'bowl', sub: '그릇' }] }, prompt: '부엌 물건을 묘사한 글이에요. 글마다 알맞은 물건을 짝 지어 보세요.', target: { match: { r1: 'chopsticks', r2: 'bowl' } }, difficulty: 0.2 },
          { type: 'choice', prompt: '친구들이 내 물건을 맞히지 못했어요. 가장 먼저 할 일은 무엇일까요?', options: ['같은 글을 더 크게 읽는다', '빠진 특징이 있는지 보고 문장을 보탠다', '답을 알려 준다'], answer: 1, difficulty: 0.15, explain: '빠진 칸을 찾아 보태면 친구가 맞힐 수 있어요.' },
          { type: 'short', prompt: '내 가방 속 물건 하나를 세 가지 특징이 들어간 세 문장으로 묘사하세요.' },
        ],
      },
    ],
    worksheet: {
      title: '가방 속 물건 묘사',
      items: [
        { type: 'table', prompt: '가방 속 물건을 묘사하는 글을 칸마다 쓰세요.', columns: ['물건(비밀)', '색깔', '크기·모양', '쓰임'], rows: 1 },
        { type: 'choice', prompt: '"It is made of paper. It has many pages. You read stories in it." 은 무엇일까요?', options: ['notebook', 'storybook', 'paper cup'], answer: 'storybook' },
        { type: 'choice', prompt: '세 가지 특징이 다 들어간 글에 ○ 하세요. (자)', options: ['It is long. It is flat.', 'It is yellow. It is long and flat. You measure things with it.', 'It is yellow. I like it.'], answer: 'It is yellow. It is long and flat. You measure things with it.' },
        { type: 'short', prompt: '모둠 친구가 맞히지 못했다면 어떤 문장을 고쳤는지 쓰세요.' },
      ],
      easy: {
        note: '세 칸: 색깔 / 크기·모양 / 쓰임. 쓰임 문장이 가장 큰 단서예요.',
        items: [
          { type: 'choice', prompt: '"It erases pencil marks." 는?', options: ['eraser', 'ruler'], answer: 'eraser' },
          { type: 'choice', prompt: '"You drink from it." 는?', options: ['water bottle', 'umbrella'], answer: 'water bottle' },
          { type: 'short', prompt: 'It is ___. It is ___. You ___ with it. 빈칸을 채워 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 짝에 초록 테두리가 생기고, 틀리게 놓으면 까닭을 말해 주고 되돌려요.',
      base: '다 짝 짓거나 고른 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '맞는 글이 없는 함정 물건을 가려내고, It과 They가 맞지 않는 글까지 따져요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 문장 수만 늘리고 같은 칸을 되풀이한다 → 칸 세기. ② 짝인 물건(slippers, scissors, chopsticks)에 It을 쓴다 → They/them을 짚되 이 차시에서 깊이 다루지 않는다. ③ 친구가 못 맞히면 답을 바로 알려 준다 → 문장 하나를 고쳐 다시 읽기. 가방 속 물건은 개인정보가 드러나지 않는 학용품·생활용품으로 고르게 한다. 이 차시로 사물 묘사 부분(26~28차시)을 마친다.',
  }));

  // ───────────── 29차시 (core) 비교 표현 ─────────────
  const CMP_SLOTS = [{ id: 'diff', label: '다른 점을 설명했어요' }, { id: 'judge', label: '좋고 나쁨만 말했어요' }];
  L.push(lesson(29, '[6영02-04]', {
    title: '두 물건을 -er than으로 견주어 다른 점 말하기',
    objective: '길이·무게·키를 잰 값을 보고 두 물건을 -er than으로 견주어 말하고, 좋고 나쁨만 말한 문장과 다른 점을 설명한 문장을 가려낼 수 있다.',
    illustration: {
      prompt: PROMPT('a long pencil and a short crayon side by side on a paper ruler, with a small balance scale holding a bag and a book'),
      scene: SCENE('The pencil is longer than the crayon.', '-er than 으로 견주어요', [{ motif: 'pencil', x: 90, y: 214 }, { motif: 'book', x: 400, y: 214 }]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '연필과 크레파스를 들고 "Which is better?" 하고 묻는다. 학생들이 서로 다른 답을 말하면 "좋다·나쁘다는 사람마다 달라요. 그럼 누구나 똑같이 확인할 수 있는 다른 점은 무엇일까요?" 자로 길이를 재어 15 cm와 9 cm를 칠판에 쓰고 "The pencil is longer than the crayon."을 들려준다. long에 -er을 붙이고 than 뒤에 견주는 물건을 둔다는 것을 색으로 표시한다.',
        student: '연필과 크레파스를 보고, 좋고 나쁨 말고 누구나 확인할 수 있는 다른 점을 말해 봐요.',
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 잰 값을 보고 -er than 문장 빈칸 채우기', minutes: 13, tool: 'wordcards',
            teacher: '"괄호 속 수를 먼저 견주어 보세요. 어느 쪽이 더 큰가요? 문장의 주인공이 그쪽인가요?" 주인공이 바뀐 둘째 문장에서 같은 낱말을 또 넣는 학생에게 "주인공이 바뀌면 견주는 말도 반대말로 바뀌어요."라고 짚는다. 키를 견줄 때 longer를 고르는 학생에게는 사람·동물·건물의 높이는 taller라고 알려 준다.',
            task: '괄호 속 잰 값을 보고, 빈칸에 알맞은 견주는 말 카드를 넣어요. 완성한 두 문장을 소리 내어 읽어요.',
            levels: LV({ mode: 'fill', shuffle: false }),
            items: [
              { prompt: '연필과 크레파스의 길이를 견주어요. 빈칸에 알맞은 말을 넣어 보세요.',
                toolOptions: { slots: [{ id: 'f1', label: 'The pencil (15 cm) is ___ than the crayon (9 cm).' }, { id: 'f2', label: 'The crayon (9 cm) is ___ than the pencil (15 cm).' }], cards: ['longer', 'shorter'] },
                target: { fill: { f1: 'longer', f2: 'shorter' } }, difficulty: 0.1,
                hints: ['문장 맨 앞의 물건과 than 뒤의 물건의 값을 견주어 보세요. 주인공이 더 큰지 작은지 보면 돼요.'] },
              { prompt: '가방과 책의 무게를 견주어요. 빈칸에 알맞은 말을 넣어 보세요.',
                toolOptions: { slots: [{ id: 'f1', label: 'The bag (2 kg) is ___ than the book (1 kg).' }, { id: 'f2', label: 'The book (1 kg) is ___ than the bag (2 kg).' }], cards: ['lighter', 'heavier'] },
                target: { fill: { f1: 'heavier', f2: 'lighter' } }, difficulty: 0.15,
                hints: ['heavy는 무겁다, light는 가볍다예요. 주인공의 무게가 더 큰지 작은지 보세요.'] },
              { prompt: '기린과 얼룩말의 키를 견주어요. 빈칸에 알맞은 말을 넣어 보세요.',
                toolOptions: { slots: [{ id: 'f1', label: 'The giraffe (5 m) is ___ than the zebra (1.5 m).' }, { id: 'f2', label: 'The zebra (1.5 m) is ___ than the giraffe (5 m).' }], cards: ['taller', 'shorter'] },
                target: { fill: { f1: 'taller', f2: 'shorter' } }, difficulty: 0.2,
                hints: ['동물의 키를 견줄 때 쓰는 말이에요. 주인공이 더 큰지 작은지 보세요.'],
                levels: { challenge: { prompt: '기린과 얼룩말의 키를 견주어요. 빈칸에 알맞은 말을 넣고, 맞지 않는 카드는 남겨 보세요.',
                  toolOptions: { cards: ['taller', 'shorter', { id: 'longer', text: 'longer', why: '동물이나 사람의 키를 견줄 때는 longer가 아니라 taller를 써요.' }] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 다른 점을 설명한 문장과 좋고 나쁨만 말한 문장 나누기', minutes: 14, tool: 'wordcards',
            teacher: '"이 문장을 듣고 친구가 직접 확인해 볼 수 있나요? 재거나 보거나 만져서요." 확인할 수 있으면 다른 점을 설명한 문장, 사람마다 생각이 다르면 좋고 나쁨만 말한 문장이라고 기준을 정한다. better도 -er 모양이라 다른 점이라고 여기는 학생에게 "무엇이 더 좋은지는 사람마다 달라요. 무엇이 다른지가 들어 있나요?"라고 묻는다. 마지막 짝 활동은 교실 물건 두 개를 골라 재어 보고 다른 점을 두 문장으로 말한다.',
            task: '두 물건을 견준 문장 카드를 "다른 점을 설명했어요" 칸과 "좋고 나쁨만 말했어요" 칸에 나누어요.',
            levels: LV({ mode: 'sort', shuffle: false, slots: CMP_SLOTS }),
            items: [
              { prompt: '연필과 색연필을 견준 문장이에요. 다른 점을 설명한 것과 좋고 나쁨만 말한 것으로 나누어 보세요.',
                toolOptions: { cards: [{ id: 'd1', text: 'A colored pencil is softer than a pencil.' }, { id: 'j1', text: 'A pencil is better than a colored pencil.' }, { id: 'd2', text: 'A pencil is easier to erase than a colored pencil.' }, { id: 'j2', text: 'Colored pencils are bad.' }] },
                target: { sort: { diff: ['d1', 'd2'], judge: ['j1', 'j2'] } }, difficulty: 0.2,
                hints: ['친구가 직접 써 보거나 만져 보고 확인할 수 있는 문장인지 하나씩 따져 보세요.'],
                predict: { q: 'better than도 다른 점을 설명한 문장일까요?', options: ['네, -er 모양이니까요', '아니요, 좋고 나쁨만 말했어요'], answer: 1 },
                conclude: 'better는 생각이 사람마다 달라요. 다른 점은 길이·무게·쓰는 느낌처럼 확인할 수 있는 것으로 말해요.' },
              { prompt: '자전거와 킥보드를 견준 문장이에요. 다른 점을 설명한 것과 좋고 나쁨만 말한 것으로 나누어 보세요.',
                toolOptions: { cards: [{ id: 'd1', text: 'A bike is faster than a scooter.' }, { id: 'j1', text: 'A bike is the best.' }, { id: 'd2', text: 'A scooter is smaller than a bike.' }, { id: 'j2', text: "I don't like scooters." }] },
                target: { sort: { diff: ['d1', 'd2'], judge: ['j1', 'j2'] } }, difficulty: 0.2,
                hints: ['내가 좋아하는지 싫어하는지는 다른 점을 알려 주는지 생각해 보세요.'] },
              { prompt: '여름과 겨울을 견준 문장이에요. 다른 점을 설명한 것과 좋고 나쁨만 말한 것으로 나누어 보세요.',
                toolOptions: { cards: [{ id: 'd1', text: 'Summer is hotter than winter.' }, { id: 'j1', text: 'Winter is great.' }, { id: 'd2', text: 'Days are longer in summer than in winter.' }, { id: 'j2', text: 'Summer is not good.' }] },
                target: { sort: { diff: ['d1', 'd2'], judge: ['j1', 'j2'] } }, difficulty: 0.25,
                hints: ['온도계나 시계로 확인할 수 있는 문장인지 보세요.'],
                levels: { challenge: { prompt: '여름과 겨울을 견준 문장이에요. 나누어 보고, 견준 문장이 아닌 것은 카드 칸에 남겨 보세요.',
                  toolOptions: { cards: [{ id: 'd1', text: 'Summer is hotter than winter.' }, { id: 'j1', text: 'Winter is great.' }, { id: 'd2', text: 'Days are longer in summer than in winter.' }, { id: 'j2', text: 'Summer is not good.' }, { id: 'x1', text: 'It is cold today.', why: '오늘 날씨 이야기라 여름과 겨울을 견준 문장이 아니에요.' }] },
                  target: { sort: { diff: ['d1', 'd2'], judge: ['j1', 'j2'] } } } } },
              { prompt: '교실 물건 두 개를 골라 짝과 함께 재거나 들어 보고, -er than을 써서 다른 점을 두 문장으로 말해요. 공책에 표로 적은 뒤 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"두 물건을 견줄 때 무엇을 말해야 친구가 확인할 수 있었나요?" 잰 값을 근거로 말한 학생의 문장을 칠판에 남기고 출구 질문을 푼다. 출구 1번에서 같은 낱말을 두 번 넣은 학생은 주인공을 바꾸어 읽는 연습을 한 번 더 한다.',
        exitTicket: [
          { type: 'tool', tool: 'wordcards', options: { mode: 'fill', shuffle: false, slots: [{ id: 'f1', label: 'The box (3 kg) is ___ than the bag (5 kg).' }, { id: 'f2', label: 'The bag (5 kg) is ___ than the box (3 kg).' }], cards: ['heavier', 'lighter'] }, prompt: '상자와 가방의 무게를 견주어요. 빈칸에 알맞은 말을 넣어 보세요.', target: { fill: { f1: 'lighter', f2: 'heavier' } }, difficulty: 0.2 },
          { type: 'choice', prompt: '다른 점을 설명한 문장은 무엇일까요?', options: ['My bag is better than your bag.', 'My bag is bigger than your bag.', 'Your bag is bad.'], answer: 1, difficulty: 0.15, explain: '크기는 누구나 보고 확인할 수 있는 다른 점이에요.' },
          { type: 'mood', prompt: '오늘 견주어 말하기는 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '-er than 으로 견주기',
      items: [
        { type: 'table', prompt: '두 물건을 재어 값을 쓰고, 견주는 문장을 쓰세요.', columns: ['물건 두 개', '잰 값', '견주는 문장 (-er than)'], rows: 2 },
        { type: 'choice', prompt: 'The eraser (3 cm) is ___ than the ruler (30 cm). 빈칸에 ○ 하세요.', options: ['longer', 'shorter', 'taller'], answer: 'shorter' },
        { type: 'choice', prompt: '좋고 나쁨만 말한 문장에 ○ 하세요.', options: ['A cup is smaller than a bowl.', 'A cup is better than a bowl.', 'A bowl is wider than a cup.'], answer: 'A cup is better than a bowl.' },
        { type: 'short', prompt: '내 연필과 짝의 연필을 견주어 다른 점을 한 문장으로 쓰세요.' },
      ],
      easy: {
        note: '더 길다 longer, 더 짧다 shorter, 더 무겁다 heavier, 더 가볍다 lighter, 키가 더 크다 taller.',
        items: [
          { type: 'choice', prompt: '10 cm 연필은 5 cm 연필보다?', options: ['longer', 'shorter'], answer: 'longer' },
          { type: 'choice', prompt: '다른 점을 말한 문장에 ○ 하세요.', options: ['It is heavier than my book.', 'It is the best.'], answer: 'It is heavier than my book.' },
          { type: 'short', prompt: 'My pencil is ___ than my eraser. 빈칸을 채워 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 칸에 초록 테두리가 생기고, 틀리게 넣으면 까닭을 말해 주고 되돌려요.',
      base: '다 채우거나 나눈 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '키에 longer를 쓰는 함정 카드와 견준 문장이 아닌 카드까지 가려내야 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 좋고 나쁨(better, the best)만 말하고 차이를 설명하지 않는다 → "친구가 확인할 수 있나요?" 기준. ② 주인공을 바꾸어도 같은 낱말을 쓴다 → than 앞뒤를 바꾸어 읽기. ③ 키·높이에 longer를 쓴다 → 사람·동물·건물은 taller. 잰 값은 교실에서 직접 잰 값을 쓰고, 문항의 값은 견주기 쉽게 정한 예시 값이다(기린 약 5 m, 얼룩말 약 1.5 m는 어른 동물의 대략적인 키).',
  }));

  // ───────────── 30차시 (practice) 표·그래프로 견주기 ─────────────
  L.push(lesson(30, '[6영02-04]', {
    title: '막대그래프를 보고 견주는 문장 고르고 표로 옮기기',
    objective: '막대그래프에서 두 대상을 견주어 맞는 -er than 문장을 고르고, 그래프의 값을 표로 옮겨 적어 견준 근거를 보일 수 있다.',
    illustration: {
      prompt: PROMPT('a paper bar graph showing three pencils of different lengths next to a small table with blank cells and a child pointing at the tallest bar'),
      scene: SCENE("Sora's pencil is longer than Minji's.", '그래프 → 표 → 문장', [{ motif: 'pencil', x: 90, y: 214 }, { motif: 'star', x: 400, y: 70, color: 'buttercup' }]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"지난 시간에 견주는 문장을 말했는데, 친구가 \'정말이야?\' 하고 물으면 무엇을 보여 줄 수 있을까요?" 잰 값을 적은 표나 그래프라는 말이 나오면 학생 세 명의 연필 길이를 재어 칠판에 막대로 그린다. "Junho\'s pencil is longer than Sora\'s. 맞나요?" 막대를 견주어 고쳐 말하게 하고, 그래프와 표가 견준 말의 근거가 된다는 것을 정리한다. 이름 뒤 \'s는 "~의"라는 뜻이라고 알려 준다.',
        student: '칠판의 막대를 보고 선생님 말이 맞는지 확인하고, 틀리면 고쳐 말해 봐요.',
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 막대그래프를 보고 맞는 견주는 문장 고르기', minutes: 13, tool: 'chart',
            teacher: '"보기 문장마다 나오는 두 사람의 막대를 손가락으로 짚고, 문장의 주인공 막대가 더 높은지 낮은지 보세요." longer를 보면 무조건 가장 높은 막대를 찾는 학생에게 "가장 높은 것을 묻는 게 아니라 두 사람만 견주어요."라고 짚는다.',
            task: '막대그래프를 보고 그래프와 맞는 견주는 문장 하나를 골라요. 고른 뒤 두 막대를 짚으며 문장을 읽어요.',
            levels: { easy: { showValues: true }, base: {}, challenge: {} },
            items: [
              { prompt: '세 친구의 연필 길이 그래프예요. 그래프와 맞는 문장 하나를 골라 보세요.',
                toolOptions: { type: 'bar', mode: 'read', title: 'Our Pencils', unit: 'cm', xLabel: '친구', yLabel: '길이', data: [['Minji', 14], ['Junho', 9], ['Sora', 17]], scale: 2,
                  question: '그래프와 맞는 문장은?', choices: ["Junho's pencil is longer than Minji's.", "Sora's pencil is longer than Minji's.", "Minji's pencil is shorter than Junho's."], why: ['준호의 막대가 민지의 막대보다 낮아요.', '', '민지의 막대가 준호의 막대보다 높아요.'] },
                target: { pick: 1 }, difficulty: 0.15,
                hints: ['보기마다 나오는 두 사람의 막대를 짚고, 주인공 막대가 더 높은지 보세요.', '주인공과 than 뒤 사람의 막대 높이를 다시 견주어 보세요.', '소라의 막대가 민지의 막대보다 높아요.'] },
              { prompt: '세 친구의 가방 무게 그래프예요. 그래프와 맞는 문장 하나를 골라 보세요.',
                toolOptions: { type: 'bar', mode: 'read', title: 'Our Bags', unit: 'kg', xLabel: '친구', yLabel: '무게', data: [['Hana', 3], ['Ben', 5], ['Yuri', 2]], scale: 1,
                  question: '그래프와 맞는 문장은?', choices: ["Hana's bag is heavier than Ben's.", "Yuri's bag is lighter than Hana's.", "Yuri's bag is heavier than Ben's."], why: ['하나의 막대가 벤의 막대보다 낮아요.', '', '유리의 막대가 벤의 막대보다 낮아요.'] },
                target: { pick: 1 }, difficulty: 0.2,
                hints: ['heavier는 막대가 더 높은 쪽, lighter는 더 낮은 쪽이에요. 두 막대를 짚어 견주어 보세요.', '주인공 막대가 than 뒤 사람 막대보다 높은지 낮은지 다시 보세요.', '유리의 막대가 하나의 막대보다 낮아요.'] },
              { prompt: '어느 날 세 도시의 낮 기온 그래프예요. 그래프와 맞는 문장 하나를 골라 보세요.',
                toolOptions: { type: 'bar', mode: 'read', title: 'Temperature', unit: '°C', xLabel: '도시', yLabel: '기온', data: [['Seoul', 3], ['Busan', 8], ['Daegu', 5]], scale: 1,
                  question: '그래프와 맞는 문장은?', choices: ['Seoul is warmer than Daegu.', 'Daegu is colder than Busan.', 'Busan is colder than Seoul.'], why: ['서울의 막대가 대구보다 낮아요.', '', '부산의 막대가 서울보다 높아요.'] },
                target: { pick: 1 }, difficulty: 0.25,
                hints: ['warmer는 기온이 더 높은 쪽, colder는 더 낮은 쪽이에요.', '주인공 도시의 막대와 than 뒤 도시의 막대를 다시 견주어 보세요.', '대구의 막대가 부산의 막대보다 낮아요.'],
                levels: { challenge: { prompt: '어느 날 네 도시의 낮 기온 그래프예요. 그래프와 맞는 문장 하나를 골라 보세요.',
                  toolOptions: { data: [['Seoul', 3], ['Busan', 8], ['Daegu', 5], ['Jeju', 10]], choices: ['Busan is warmer than Jeju.', 'Daegu is warmer than Seoul but colder than Busan.', 'Seoul is warmer than Daegu.', 'Jeju is colder than Daegu.'], why: ['부산의 막대가 제주보다 낮아요.', '', '서울의 막대가 대구보다 낮아요.', '제주의 막대가 대구보다 높아요.'] },
                  target: { pick: 1 } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 그래프의 값을 표로 옮기고 견주는 문장 말하기', minutes: 14, tool: 'chart',
            teacher: '"그래프의 눈금을 읽어 표의 빈칸을 채워요. 막대 끝에서 옆으로 손가락을 그어 눈금을 읽어요." 표를 채운 뒤에는 표를 보며 -er than 문장을 두 개 말하게 한다. 눈금 한 칸을 1로만 읽는 학생에게 그래프의 눈금 한 칸이 몇인지 먼저 세어 보게 한다. 마지막 짝 활동에서는 짝이 만든 견주는 문장이 표와 맞는지 확인해 준다.',
            task: '막대그래프의 값을 읽어 표의 빈칸을 채워요. 다 채우면 표를 보며 견주는 문장을 짝에게 두 개 말해요.',
            levels: { easy: { showValues: true }, base: {}, challenge: {} },
            items: [
              { prompt: '강낭콩 세 포기의 키 그래프예요. 그래프를 읽어 표의 빈칸을 채워 보세요.',
                toolOptions: { type: 'bar', mode: 'read', title: 'Bean Plants', unit: 'cm', xLabel: '포기', yLabel: '키', data: [['A', 12], ['B', 8], ['C', 15]], scale: 1, showTable: true, tableBlanks: [0, 1, 2] },
                target: { table: true }, difficulty: 0.2,
                hints: ['막대 끝에서 왼쪽 눈금까지 손가락을 그어 읽어 보세요.', '빈칸마다 그 막대의 끝이 눈금 몇에 닿는지 다시 보세요.', '눈금 한 칸이 1 cm예요. 막대마다 칸 수를 세어요.'] },
              { prompt: '세 모둠의 줄넘기 횟수 그래프예요. 그래프를 읽어 표의 빈칸을 채워 보세요.',
                toolOptions: { type: 'bar', mode: 'read', title: 'Jump Rope', unit: '번', xLabel: '모둠', yLabel: '횟수', data: [['Team 1', 40], ['Team 2', 25], ['Team 3', 35]], scale: 5, showTable: true, tableBlanks: [1, 2] },
                target: { table: true }, difficulty: 0.3,
                hints: ['이 그래프는 눈금 한 칸이 1이 아니에요. 눈금에 적힌 수를 먼저 읽어 보세요.', '막대 끝이 눈금과 눈금 사이에 있는지 다시 보세요.', '눈금 한 칸은 5번이에요. 칸 수에 5를 곱해요.'] },
              { prompt: '세 친구가 지난달 읽은 책 수 그래프예요. 그래프를 읽어 표의 빈칸을 채워 보세요.',
                toolOptions: { type: 'bar', mode: 'read', title: 'Books We Read', unit: '권', xLabel: '친구', yLabel: '책 수', data: [['Dami', 6], ['Leo', 9], ['Jin', 4]], scale: 1, showTable: true, tableBlanks: [0, 2] },
                target: { table: true }, difficulty: 0.2,
                hints: ['막대마다 끝이 닿은 눈금을 읽어 보세요.', '빈칸의 이름과 막대의 이름이 같은지 확인해 보세요.', '눈금 한 칸이 몇 권인지 눈금에 적힌 수로 먼저 확인해요.'],
                levels: { challenge: { prompt: '네 친구가 지난달 읽은 책 수 그래프예요. 그래프를 읽어 표의 빈칸을 모두 채워 보세요.',
                  toolOptions: { data: [['Dami', 6], ['Leo', 9], ['Jin', 4], ['Ara', 12]], scale: 2, tableBlanks: [0, 1, 2, 3] }, target: { table: true } } } },
              { prompt: '활동 2의 표 하나를 보고 -er than을 써서 견주는 문장 두 개를 짝에게 말해요. 짝은 표에서 근거를 짚어 맞는지 확인해요. 바꾸어 한 뒤 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"그래프와 표는 견주는 문장에서 어떤 일을 했나요?" 근거를 보여 주었다는 말이 나오면 칠판에 남기고 출구 질문을 푼다. 출구 1번에서 가장 높은 막대만 보고 고른 학생과는 두 막대만 짚는 연습을 한 번 더 한다.',
        exitTicket: [
          { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: 'Our Heights', unit: 'cm', xLabel: '친구', yLabel: '키', data: [['Tom', 140], ['Eva', 150], ['Max', 135]], scale: 10, question: '그래프와 맞는 문장은?', choices: ['Max is taller than Tom.', 'Eva is taller than Tom.', 'Tom is shorter than Max.'] }, prompt: '세 친구의 키 그래프예요. 그래프와 맞는 문장 하나를 골라 보세요.', target: { pick: 1 }, difficulty: 0.25 },
          { type: 'choice', prompt: '표에 "사과 3개, 배 5개"라고 적혀 있어요. 맞는 문장은 무엇일까요?', options: ['There are more pears than apples.', 'There are more apples than pears.', 'Apples are better than pears.'], answer: 0, difficulty: 0.2, explain: '배(5개)가 사과(3개)보다 많아요. more ~ than 으로 개수를 견줄 수 있어요.' },
          { type: 'mood', prompt: '오늘 그래프 보고 견주기는 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '그래프 → 표 → 견주는 문장',
      items: [
        { type: 'figure', wide: true, prompt: '그래프를 보고 아래 표를 채우세요.', tool: 'chart', options: { type: 'bar', mode: 'read', title: 'Our Pencils', unit: 'cm', data: [['Minji', 15], ['Junho', 10], ['Sora', 20]], scale: 10 }, figures: [{ caption: '세 친구의 연필 길이' }] },
        { type: 'table', prompt: '그래프의 값을 표로 옮기세요.', columns: ['Minji', 'Junho', 'Sora'], cells: [['', '', '']], answer: '15 / 10 / 20' },
        { type: 'choice', prompt: '그래프와 맞는 문장에 ○ 하세요.', options: ["Junho's pencil is shorter than Sora's.", "Junho's pencil is longer than Minji's."], answer: "Junho's pencil is shorter than Sora's." },
        { type: 'short', prompt: '표를 보고 -er than을 써서 견주는 문장을 하나 더 쓰세요.' },
      ],
      easy: {
        note: '두 막대만 짚어요. 주인공 막대가 더 높으면 longer·heavier·taller, 더 낮으면 shorter·lighter.',
        items: [
          { type: 'choice', prompt: '막대 A(10)가 막대 B(6)보다 높아요. 맞는 문장은?', options: ['A is longer than B.', 'A is shorter than B.'], answer: 'A is longer than B.' },
          { type: 'choice', prompt: '무게 그래프에서 더 낮은 막대는?', options: ['heavier', 'lighter'], answer: 'lighter' },
          { type: 'short', prompt: '___ is taller than ___. 우리 반 키 그래프를 보고 빈칸을 채우세요.' },
        ],
      },
    },
    differentiation: {
      easy: '막대 끝에 값이 보여 눈금을 세지 않고도 견줄 수 있어요.',
      base: '눈금을 읽어 스스로 견주고 표를 채워요.',
      challenge: '네 도시를 두 가지로 견준 문장(warmer than ~ but colder than ~)을 고르고, 눈금 한 칸이 2인 그래프를 읽어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① longer를 보면 가장 높은 막대를 찾는다 → 문장 속 두 사람만 짚는다. ② 눈금 한 칸을 늘 1로 읽는다 → 눈금 수를 먼저 읽는다(수학 막대그래프와 이어진다). ③ \'s(~의)를 빼먹는다 → 이름 뒤 \'s를 소리 내어 읽는다. 기온은 견주기 연습용으로 정한 어느 날의 예시 값이다.',
  }));

  // ───────────── 31차시 (extend) 두 기준으로 견주기 ─────────────
  L.push(lesson(31, '[6영02-04]', {
    title: '두 가지 기준으로 견주어 but으로 설명하기',
    objective: '두 물건을 길이·무게·빠르기 가운데 두 가지 기준으로 견주어 표에 적고, but을 넣어 "더 ~하지만 더 ~하다"를 한 문장으로 설명할 수 있다.',
    illustration: {
      prompt: PROMPT('a bicycle and a scooter side by side with a paper table comparing speed and weight with check marks'),
      scene: SCENE('The bike is faster but heavier.', '두 기준으로 견주어요', [{ motif: 'tree', x: 80, y: 214 }, { motif: 'cloud', x: 360, y: 80 }]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"자전거와 킥보드 가운데 학교에 무엇을 타고 갈까요?" 학생들이 자전거가 빠르다고 하면 "그런데 들고 계단을 오를 때는요?" 하고 되묻는다. "하나는 더 좋고 하나는 더 나쁜 게 아니라 기준마다 다르네요." 칠판에 빠르기·무게 두 줄 표를 그리고 "The bike is faster but heavier than the scooter."를 들려준다. but은 앞과 반대되는 점을 이을 때 쓴다고 표시한다.',
        student: '자전거와 킥보드를 두 가지 기준으로 견주어 보고, 어느 것이 더 좋은지 한마디로 말하기 어려운 까닭을 말해 봐요.',
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 기준마다 알맞은 견주는 말 넣기', minutes: 13, tool: 'wordcards',
            teacher: '"줄 앞의 기준을 먼저 읽어요. 길이 줄에는 길이 말, 무게 줄에는 무게 말만 들어가요." 카드가 넷이고 빈칸이 둘이라 두 장은 남는다는 것을 미리 알려 준다. 길이 줄에 heavier를 넣는 학생에게 "길이를 견줄 때 무겁다는 말을 쓸 수 있을까요?"라고 묻는다.',
            task: '표의 값을 보고, 기준마다 빈칸에 알맞은 견주는 말 카드를 넣어요. 쓰지 않는 카드는 남겨요.',
            levels: LV({ mode: 'fill', shuffle: false }),
            items: [
              { prompt: '자: 30 cm, 20 g / 필통: 20 cm, 80 g. 기준마다 빈칸에 알맞은 말을 넣어 보세요.',
                toolOptions: { slots: [{ id: 'len', label: '길이: The ruler is ___ than the pencil case.' }, { id: 'wt', label: '무게: The ruler is ___ than the pencil case.' }], cards: ['longer', 'shorter', 'heavier', 'lighter'] },
                target: { fill: { len: 'longer', wt: 'lighter' } }, difficulty: 0.2,
                hints: ['기준마다 두 물건의 값을 견주어 보세요. 주인공(자)의 값이 더 큰지 작은지 보면 돼요.'] },
              { prompt: '자전거: 시속 15 km, 12 kg / 킥보드: 시속 8 km, 4 kg. 기준마다 빈칸에 알맞은 말을 넣어 보세요.',
                toolOptions: { slots: [{ id: 'spd', label: '빠르기: The bike is ___ than the scooter.' }, { id: 'wt', label: '무게: The bike is ___ than the scooter.' }], cards: ['faster', 'slower', 'heavier', 'lighter'] },
                target: { fill: { spd: 'faster', wt: 'heavier' } }, difficulty: 0.25,
                hints: ['fast는 빠르다, slow는 느리다예요. 기준마다 주인공의 값이 더 큰지 보세요.'] },
              { prompt: '고양이 인형: 25 cm, 300 g / 강아지 인형: 40 cm, 200 g. 기준마다 빈칸에 알맞은 말을 넣어 보세요.',
                toolOptions: { slots: [{ id: 'len', label: '크기: The cat doll is ___ than the dog doll.' }, { id: 'wt', label: '무게: The cat doll is ___ than the dog doll.' }], cards: ['bigger', 'smaller', 'heavier', 'lighter'] },
                target: { fill: { len: 'smaller', wt: 'heavier' } }, difficulty: 0.3,
                hints: ['작다고 해서 늘 가벼운 것은 아니에요. 기준마다 값을 따로 견주어 보세요.'],
                predict: { q: '더 작은 인형은 더 가벼울까요?', options: ['네, 늘 그래요', '값을 보고 따로 견주어야 해요'], answer: 1 },
                conclude: '크기와 무게는 다른 기준이에요. 기준마다 값을 따로 견주어야 해요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 두 기준을 but으로 이은 문장 고르고 내 물건 견주기', minutes: 14, tool: 'wordcards',
            teacher: '"but 앞뒤가 둘 다 표와 맞아야 해요. 하나만 맞으면 틀린 설명이에요." 표를 손가락으로 짚으며 앞과 뒤를 따로 확인하게 한다. better처럼 좋고 나쁨으로 끝내는 문장을 고르는 학생에게 29차시의 기준을 떠올리게 한다. 마지막 짝 활동은 내 물건 두 개를 두 기준으로 견주어 공책 표에 적고, but 문장 하나로 짝에게 말하고, 짝은 "표의 어느 줄을 보고 말했어?" 하고 되물어 근거를 듣는다.',
            task: '표를 보고 두 기준을 but으로 이어 바르게 설명한 문장 하나를 바구니에 넣어요.',
            levels: LV(PICK('바른 설명')),
            items: [
              { prompt: '컵: 작다, 무겁다(유리) / 종이컵: 크다, 가볍다. 바르게 설명한 문장 하나를 골라 보세요.',
                toolOptions: { cards: [{ id: 'c1', text: 'The glass cup is smaller but heavier than the paper cup.' }, { id: 'c2', text: 'The glass cup is smaller and lighter than the paper cup.', why: '유리컵이 더 무거워요. 뒤쪽이 표와 맞지 않아요.' }, { id: 'c3', text: 'The glass cup is better than the paper cup.', why: '좋고 나쁨만 말해서 다른 점을 알 수 없어요.' }] },
                target: { pick: ['c1'] }, difficulty: 0.2,
                hints: ['문장을 but 앞과 뒤로 나누어 표와 하나씩 견주어 보세요.'] },
              { prompt: '기차: 빠르다, 길다 / 버스: 느리다, 짧다. 바르게 설명한 문장 하나를 골라 보세요.',
                toolOptions: { cards: [{ id: 'c1', text: 'The train is faster but shorter than the bus.', why: '기차가 더 길어요. 뒤쪽이 표와 맞지 않아요.' }, { id: 'c2', text: 'The bus is slower and shorter than the train.' }, { id: 'c3', text: 'The bus is faster than the train.', why: '버스가 더 느려요.' }] },
                target: { pick: ['c2'] }, difficulty: 0.25,
                hints: ['두 기준이 같은 쪽으로 다르면 and, 반대쪽으로 다르면 but으로 이어요. 앞뒤를 표와 견주어 보세요.'] },
              { prompt: '수박: 크다, 무겁다, 덜 달다 / 귤: 작다, 가볍다, 더 달다(우리 모둠이 맛본 것). 바르게 설명한 문장 하나를 골라 보세요.',
                toolOptions: { cards: [{ id: 'c1', text: 'The watermelon is bigger but less sweet than the tangerine.' }, { id: 'c2', text: 'The watermelon is smaller but sweeter than the tangerine.', why: '수박이 더 크고 덜 달아요. 앞뒤 모두 표와 반대예요.' }, { id: 'c3', text: 'The watermelon is the best fruit.', why: '좋고 나쁨만 말했어요.' }] },
                target: { pick: ['c1'] }, difficulty: 0.3,
                hints: ['less sweet는 "덜 단"이라는 뜻이에요. but 앞뒤를 표와 견주어 보세요.'],
                levels: { challenge: { prompt: '수박: 크다, 무겁다, 덜 달다 / 귤: 작다, 가볍다, 더 달다. 바르게 설명한 문장을 모두 골라 보세요.',
                  toolOptions: { cards: [{ id: 'c1', text: 'The watermelon is bigger but less sweet than the tangerine.' }, { id: 'c2', text: 'The watermelon is smaller but sweeter than the tangerine.', why: '수박이 더 크고 덜 달아요.' }, { id: 'c3', text: 'The watermelon is the best fruit.', why: '좋고 나쁨만 말했어요.' }, { id: 'c4', text: 'The tangerine is lighter but sweeter than the watermelon.' }, { id: 'c5', text: 'The tangerine is heavier and sweeter than the watermelon.', why: '귤이 더 가벼워요.' }] },
                  target: { pick: ['c1', 'c4'] } } } },
              { prompt: '내 물건 두 개를 짝과 함께 두 기준(길이·무게·크기 가운데)으로 재어 공책 표에 적고, but이나 and를 넣은 한 문장으로 설명해요. 다 하면 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"두 기준으로 견주니 한 기준으로 견줄 때와 무엇이 달랐나요?" 어느 것이 무조건 좋다고 말하기 어렵다는 말이 나오면 칠판에 적고 출구 질문을 푼다. 출구 1번에서 같은 낱말을 두 칸에 넣거나 기준이 다른 낱말을 넣은 학생은 기준 줄을 손가락으로 짚는 연습을 한 번 더 한다.',
        exitTicket: [
          { type: 'tool', tool: 'wordcards', options: { mode: 'fill', shuffle: false, slots: [{ id: 'len', label: '길이: The pen is ___ than the marker.' }, { id: 'wt', label: '무게: The pen is ___ than the marker.' }], cards: ['longer', 'shorter', 'heavier', 'lighter'] }, prompt: '펜: 14 cm, 10 g / 마커: 12 cm, 15 g. 기준마다 빈칸에 알맞은 말을 넣어 보세요.', target: { fill: { len: 'longer', wt: 'lighter' } }, difficulty: 0.25 },
          { type: 'choice', prompt: '강아지: 더 크다, 더 시끄럽다 / 고양이: 더 작다, 더 조용하다. 바르게 설명한 것은 무엇일까요? (우리 반 반려동물)', options: ['The dog is bigger but quieter than the cat.', 'The dog is bigger and louder than the cat.', 'The dog is better than the cat.'], answer: 1, difficulty: 0.25, explain: '강아지가 더 크고 더 시끄러워 같은 쪽으로 달라서 and로 이어요.' },
          { type: 'short', prompt: '내 물건 두 개를 두 기준으로 견주어 but이 들어간 문장 하나를 쓰세요.' },
        ],
      },
    ],
    worksheet: {
      title: '두 기준으로 견주기',
      items: [
        { type: 'table', prompt: '물건 두 개를 두 기준으로 재어 표에 쓰세요.', columns: ['기준', '물건 1:', '물건 2:', '더 ~한 쪽'], cells: [['길이 (cm)', '', '', ''], ['무게 (g)', '', '', '']] },
        { type: 'choice', prompt: '책: 두껍다, 무겁다 / 공책: 얇다, 가볍다. 바른 문장에 ○ 하세요.', options: ['The book is thicker and heavier than the notebook.', 'The book is thicker but lighter than the notebook.'], answer: 'The book is thicker and heavier than the notebook.' },
        { type: 'blank', prompt: '표를 보고 빈칸을 채우세요. (가위: 무겁다, 짧다 / 자: 가볍다, 길다)', text: 'The scissors are heavier ______ shorter than the ruler.', answer: 'but' },
        { type: 'short', prompt: '표의 두 물건을 but이나 and를 넣은 한 문장으로 설명하세요.' },
      ],
      easy: {
        note: '반대쪽으로 다르면 but, 같은 쪽으로 다르면 and.',
        items: [
          { type: 'choice', prompt: '"더 크지만 더 가볍다"에 알맞은 이음말은?', options: ['but', 'and'], answer: 'but' },
          { type: 'choice', prompt: '"더 길고 더 무겁다"에 알맞은 이음말은?', options: ['but', 'and'], answer: 'and' },
          { type: 'short', prompt: 'My bag is bigger ___ lighter than my friend\'s bag. 빈칸을 채우세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 카드에 초록 테두리가 생기고, 기준이 다른 낱말을 넣으면 까닭을 말해 주고 되돌려요.',
      base: '다 채우거나 고른 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '세 기준이 있는 표에서 바르게 설명한 문장을 모두 찾아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 하나가 크면 무게도 무겁다고 짐작한다 → 기준마다 값을 따로 견준다. ② but과 and를 아무 데나 쓴다 → 반대쪽 차이 but, 같은 쪽 차이 and. ③ 결국 어느 것이 더 좋다고 결론을 내리려 한다 → 오늘은 다른 점 설명까지. 문항의 값은 견주기 쉽게 정한 예시 값이다. 과일의 단맛은 모둠이 맛본 결과로 정한 것이라 일반 사실로 외우게 하지 않는다. 이 차시로 비교 표현 부분(29~31차시)을 마친다.',
  }));

  // ───────────── 32~34차시 위치 표현으로 길 안내 ─────────────
  // 거리 그림(칸 지도) — 32~34차시가 함께 쓴다. 한 칸 = 한 블록, 가운데 길(행 2)을 사이에 두고 위·아래 줄이 마주 본다(across from).
  // 걷는 사람이 오른쪽(동쪽)을 보고 출발하면 왼쪽(turn left) = 지도의 위쪽, 오른쪽(turn right) = 지도의 아래쪽이다.
  const STREET = { grid: [6, 4], legend: false, title: 'Maple Street', roads: [[[0, 2], [5, 2]]], places: [
    { name: 'Fire station', icon: 'fire', at: [4, 0] },
    { name: 'Market', icon: 'market', at: [0, 1] }, { name: 'Library', icon: 'library', at: [2, 1] }, { name: 'Museum', icon: 'museum', at: [3, 1] }, { name: 'Park', icon: 'park', at: [4, 1] },
    { name: 'Station', icon: 'station', at: [0, 3] }, { name: 'Post office', icon: 'post', at: [2, 3] }, { name: 'Bank', icon: 'office', at: [3, 3] }, { name: 'School', icon: 'school', at: [4, 3] }, { name: 'Hospital', icon: 'hospital', at: [5, 3] },
  ] };
  // 활동지용 3줄 판(윗줄·길·아랫줄) — 4줄 판은 인쇄에서 글자가 너무 작다. Fire station은 뺀다
  const STREET_WS = Object.assign({}, STREET, { grid: [6, 3], roads: [[[0, 1], [5, 1]]], places: STREET.places.filter((p) => p.at[1] > 0).map((p) => Object.assign({}, p, { at: [p.at[0], p.at[1] - 1] })) });
  const STREET_PIN = Object.assign({}, STREET, { mode: 'pin' });
  const STREET_ASK = (q, choices, why) => Object.assign({}, STREET, { mode: 'pin', readOnly: true, ask: { q, choices, why } });

  L.push(lesson(32, '[6영02-05]', {
    title: '곧장 가요·왼쪽으로 돌아요로 출발점에서 목적지까지 길 안내하기',
    objective: '출발점과 보는 방향을 정한 뒤 Go straight, Turn left, Turn right를 블록 수와 함께 차례대로 말해 목적지까지 길을 안내하고, 안내를 듣고 지도에서 도착한 곳을 찾을 수 있다.',
    illustration: {
      prompt: PROMPT('a child standing at a paper map street corner pointing straight ahead while a friend holds arrows that turn left and right'),
      scene: SCENE('Go straight. Turn left.', '걷는 사람의 왼쪽·오른쪽', [{ motif: 'house', x: 80, y: 218, color: 'sky' }, { motif: 'tree', x: 410, y: 214 }]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '교실 문 앞에 학생 한 명을 문 쪽을 보고 서게 한 뒤 "Go straight three steps. Turn left. Stop." 하고 말해 걷게 한다. 그 학생이 칠판 쪽(칠판은 학생의 왼쪽)으로 도는지 확인하고 "왼쪽은 누구의 왼쪽인가요?"라고 묻는다. 학생들이 칠판에서 보이는 왼쪽을 말하면 "길 안내의 left·right는 걷는 사람이 보는 방향에서 정해져요."라고 정리한다. 오늘은 거리 그림에서 출발점과 보는 방향을 먼저 정하고 안내하는 방법을 배운다고 알린다.',
        student: '친구가 선생님의 길 안내를 듣고 걷는 것을 보고, 왼쪽이 누구의 왼쪽인지 말해 봐요.',
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 길 안내 말과 뜻 짝 짓기', minutes: 13, tool: 'wordcards',
            teacher: '"Go straight." 하며 두 팔을 앞으로 뻗고, "Turn left." 하며 몸을 왼쪽으로 돌리는 동작을 보여 준다. 학생도 의자에서 일어나 같은 동작을 하며 카드를 놓게 한다. 마지막 문항에서 두 동작의 차례가 바뀐 카드를 고르는 학생에게 "먼저 돌고 가나요, 먼저 가고 돌나요?"라고 되묻는다. 말의 차례가 길의 차례라는 점을 짚는다.',
            task: '왼쪽 우리말 뜻에 맞는 길 안내 영어 카드를 옆에 놓아요. 놓은 카드를 몸으로 해 보며 소리 내어 읽어요.',
            levels: LV({ mode: 'match' }),
            items: [
              { prompt: '길 안내 말과 뜻을 짝 지어 보세요.',
                toolOptions: { slots: [{ id: 'q1', label: '곧장 가요' }, { id: 'q2', label: '왼쪽으로 돌아요' }, { id: 'q3', label: '오른쪽으로 돌아요' }],
                  cards: [{ id: 'c1', text: 'Go straight.' }, { id: 'c2', text: 'Turn left.' }, { id: 'c3', text: 'Turn right.' }] },
                target: { match: { q1: 'c1', q2: 'c2', q3: 'c3' } }, difficulty: 0.1,
                hints: ['straight는 곧장, left는 왼쪽, right는 오른쪽이에요. 몸을 움직여 보며 뜻을 떠올려 보세요.'] },
              { prompt: '블록 수와 멈춤을 말하는 안내와 뜻을 짝 지어 보세요.',
                toolOptions: { slots: [{ id: 'q1', label: '한 블록만 가요' }, { id: 'q2', label: '모퉁이에서 돌아요' }, { id: 'q3', label: '거기서 멈춰요' }],
                  cards: [{ id: 'c1', text: 'Go one block.' }, { id: 'c2', text: 'Turn at the corner.' }, { id: 'c3', text: 'Stop there.' }] },
                target: { match: { q1: 'c1', q2: 'c2', q3: 'c3' } }, difficulty: 0.15,
                hints: ['block은 길 한 칸, corner는 길이 꺾이는 곳, stop은 멈추라는 말이에요.'] },
              { prompt: '두 동작을 이은 안내와 뜻을 짝 지어 보세요. 동작의 차례를 잘 보세요.',
                toolOptions: { slots: [{ id: 'q1', label: '두 블록 곧장 가고 나서 오른쪽으로 돌아요' }, { id: 'q2', label: '곧장 가다가 모퉁이에서 왼쪽으로 돌아요' }, { id: 'q3', label: '먼저 오른쪽으로 돌고 나서 두 블록 가요' }],
                  cards: [{ id: 'c1', text: 'Go straight two blocks and turn right.' }, { id: 'c2', text: 'Go straight and turn left at the corner.' }, { id: 'c3', text: 'Turn right and go two blocks.' }] },
                target: { match: { q1: 'c1', q2: 'c2', q3: 'c3' } }, difficulty: 0.3,
                hints: ['and 앞의 동작이 먼저예요. 우리말 뜻에서 먼저 하는 동작이 영어 문장의 앞쪽에 있는지 보세요.'],
                predict: { q: 'Go straight and turn right. 와 Turn right and go straight. 는 같은 길일까요?', options: ['네, 같아요', '아니요, 동작의 차례가 달라서 다른 길이에요'], answer: 1 },
                conclude: '길 안내는 말한 차례대로 걸어요. 동작의 차례가 바뀌면 다른 곳에 도착해요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 출발점에서 안내대로 걸어 도착한 곳에 핀 꽂기', minutes: 14, tool: 'map',
            teacher: '"안내를 들으면 먼저 출발점을 짚고, 보는 방향을 손가락으로 그어요. 그다음 한 문장씩 걸어요." 출발점에 핀이 없으면 지도 위에 손가락을 올리게 한다. 오른쪽을 보고 서서 Turn left를 지도의 왼쪽으로 가는 학생에게 "지도 속 사람이 되어 보세요. 오른쪽을 보고 있는 사람의 왼쪽은 어느 쪽인가요?"라고 묻는다. 마지막 짝 활동은 교실의 한 곳을 정하고 출발점·방향·길 안내를 영어로 말하면 짝이 걸어서 도착한 곳을 맞힌다.',
            task: '출발점에서 보는 방향대로 안내 문장을 하나씩 따라가 도착한 곳에 핀을 꽂아요. 꽂은 뒤 짝에게 어디를 지나왔는지 말해요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: 'Station에서 지도의 오른쪽을 보고 서 있어요. "Go straight two blocks. Turn left. Go two blocks." 도착한 곳에 핀을 꽂아 보세요.',
                toolOptions: STREET_PIN, target: { place: 'Library' }, difficulty: 0.2,
                hints: ['먼저 출발점에서 오른쪽을 보고 선 사람을 떠올려 보세요. 안내를 한 문장씩 나누어 따라가요.', '곧장 두 블록을 간 곳에서, 오른쪽을 보고 있는 사람이 왼쪽으로 돌면 지도의 어느 쪽을 보게 되는지 생각해 보세요.', '두 블록 간 곳에서 지도의 위쪽으로 두 블록 올라간 곳에 핀을 꽂아요.'] },
              { prompt: 'Station에서 지도의 오른쪽을 보고 서 있어요. "Go straight four blocks. Turn left. Go two blocks." 도착한 곳에 핀을 꽂아 보세요.',
                toolOptions: STREET_PIN, target: { place: 'Park' }, difficulty: 0.25,
                hints: ['안내를 한 문장씩 나누어 따라가요. 몇 블록을 가는지 숫자를 먼저 표시해 보세요.', '네 블록 곧장 간 곳이 어디인지 먼저 짚고, 거기서 왼쪽으로 도는 쪽을 생각해 보세요.', '네 블록 간 곳에서 지도의 위쪽으로 두 블록 올라간 곳에 핀을 꽂아요.'] },
              { prompt: 'Market에서 지도의 오른쪽을 보고 서 있어요. "Go straight two blocks. Turn right. Go two blocks." 도착한 곳에 핀을 꽂아 보세요.',
                toolOptions: STREET_PIN, target: { place: 'Post office' }, difficulty: 0.3,
                hints: ['이번에는 오른쪽으로 돌아요. 오른쪽을 보고 있는 사람의 오른쪽이 지도의 어느 쪽인지 먼저 정해 보세요.', '두 블록 간 곳을 먼저 짚은 뒤 돌아요.', '두 블록 간 곳에서 지도의 아래쪽으로 두 블록 내려간 곳에 핀을 꽂아요.'],
                levels: { challenge: { prompt: 'Hospital에서 지도의 왼쪽을 보고 서 있어요. "Go straight one block. Turn right. Go three blocks." 도착한 곳에 핀을 꽂아 보세요.',
                  target: { place: 'Fire station' } } } },
              { prompt: '교실 안의 한 곳을 정하고, 출발점과 보는 방향을 말한 뒤 Go straight·Turn left·Turn right로 길을 안내해요. 짝이 걸어서 도착하면 바꾸어 한 뒤 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"길을 안내할 때 가장 먼저 정할 두 가지는 무엇이었나요?" 출발점과 보는 방향이 나오는지 듣는다. 출구 1번에서 지도의 왼쪽으로 가 버린 학생에게는 오른쪽을 보고 직접 몸을 돌려 보게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'map', options: STREET_PIN, prompt: 'Hospital에서 지도의 왼쪽을 보고 서 있어요. "Go straight two blocks. Turn right. Go two blocks." 도착한 곳에 핀을 꽂아 보세요.', target: { place: 'Museum' }, difficulty: 0.3 },
          { type: 'choice', prompt: '"두 블록 곧장 가서 왼쪽으로 돌아요"를 영어로 바르게 말한 것은 무엇일까요?', options: ['Turn left and go two blocks.', 'Go straight two blocks and turn left.', 'Go two blocks and turn straight.'], answer: 1, difficulty: 0.2, explain: '말한 차례가 걷는 차례예요. 곧장 두 블록을 먼저 가고 나서 왼쪽으로 돌아요.' },
          { type: 'short', prompt: '교실 문에서 내 자리까지 가는 길을 Go straight와 Turn left/right를 넣어 두 문장으로 쓰세요.' },
        ],
      },
    ],
    worksheet: {
      title: '출발점에서 목적지까지',
      items: [
        { type: 'figure', wide: true, prompt: '거리 그림을 보고 아래 길 안내를 따라가 도착한 곳에 ○ 하세요. (Station에서 오른쪽을 보고 출발)', tool: 'map', figures: [{ options: STREET_WS, caption: 'Maple Street' }] },
        { type: 'table', prompt: '길 안내를 따라가 도착한 곳의 이름을 쓰세요. (Station에서 오른쪽을 보고 출발)', columns: ['길 안내', '도착한 곳'], cells: [['Go straight three blocks. Turn left. Go two blocks.', ''], ['Go straight two blocks. Turn left. Go two blocks.', ''], ['Go straight five blocks. Stop.', '']], answer: 'Museum / Library / Hospital' },
        { type: 'choice', prompt: '오른쪽을 보고 서서 Turn left 하면 지도에서 어느 쪽을 보게 되나요?', options: ['위쪽', '아래쪽'], answer: '위쪽' },
        { type: 'blank', prompt: '빈칸을 채워 길 안내를 완성하세요.', text: 'Go ______ two blocks. Then turn right.', answer: 'straight' },
        { type: 'short', prompt: '학교 정문에서 우리 교실까지 가는 길을 Go straight, Turn left/right를 넣어 쓰세요.' },
      ],
      easy: {
        note: '걷는 사람이 보는 방향에서 left와 right를 정해요.',
        items: [
          { type: 'choice', prompt: '"곧장 가요"에 ○ 하세요.', options: ['Go straight.', 'Turn left.'], answer: 'Go straight.' },
          { type: 'choice', prompt: '"오른쪽으로 돌아요"에 ○ 하세요.', options: ['Turn left.', 'Turn right.'], answer: 'Turn right.' },
          { type: 'short', prompt: 'Go ______ two blocks. 빈칸에 알맞은 낱말을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '힌트를 누르면 먼저 출발점을 짚고 보는 방향을 정하게 하고, 한 문장씩 나누어 따라가게 해요.',
      base: '안내 문장을 스스로 따라가 핀을 꽂거나 골라 확인해요.',
      challenge: '지도의 왼쪽을 보고 출발하는 안내를 따라가고, 블록 수가 세 개 이상인 안내를 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 지도의 왼쪽·오른쪽을 그대로 쓴다 → 걷는 사람의 방향을 몸으로 돌려 확인한다. ② turn만 하고 몇 블록 가는지 빼먹는다 → "몇 블록이요?"를 되묻는다. ③ 동작의 차례를 바꿔 말한다 → 말한 차례대로 걸어 확인한다. 거리 그림의 블록 수는 안내를 연습하기 쉽게 정한 값이며 실제 거리가 아니다. 이 차시는 위치 표현 길 안내(32~34차시)의 시작이다.',
  }));

  // ───────────── 33차시 (practice) 위치 말로 도착한 곳 알리기 ─────────────
  L.push(lesson(33, '[6영02-05]', {
    title: 'next to·across from으로 도착한 곳 덧붙여 안내하기',
    objective: '길 안내 끝에 next to, across from을 넣어 도착한 곳을 알리고, 안내를 듣고 거리 그림에서 맞는 곳에 핀을 꽂을 수 있다.',
    illustration: {
      prompt: PROMPT('a paper street with buildings on both sides facing each other and a child pointing at one building with a pin'),
      scene: SCENE('It is across from the bank.', '마주 보는 곳도 알려요', [{ motif: 'tree', x: 70, y: 214 }, { motif: 'house', x: 400, y: 218, color: 'sky' }]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"지난 시간에는 Go straight와 Turn left로 걸었어요. 그런데 길이 맞아도 도착한 곳이 맞는지 어떻게 확인할까요?" 학생이 "건물 이름을 말해요"라고 하면 "그 건물 옆에는 무엇이 있나요?" 하고 되묻는다. 칠판에 거리 그림을 그리고 "It is next to the school. It is across from the park." 두 문장을 들려준다. next to는 같은 줄에서 붙어 있을 때, across from은 길을 사이에 두고 마주 볼 때 쓴다고 표시한다.',
        student: '선생님의 두 문장을 듣고, next to와 across from이 거리 그림에서 어디를 가리키는지 손가락으로 짚어 봐요.',
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 그림으로 맞는 위치 설명 고르기', minutes: 13, tool: 'map',
            teacher: '"문장에 나온 두 장소를 먼저 짚어요. 그 사이에 칸이 비어 있는지 보세요." 이웃한 칸이 아니면 next to가 아니라는 점을 한 번 보여 준다. 길 건너편이 아니라 바로 위나 아래 줄에 있다고 across from을 고르는 학생에게 "가운데에 길이 있나요?"라고 묻는다. 고른 뒤 짝에게 "Because there is a road between them."처럼 까닭을 말하게 한다.',
            task: '거리 그림을 보고 장소 이름을 가리키는 문장 가운데 그림과 맞는 것을 하나 골라요. 고른 까닭을 손가락으로 짚어 짝에게 보여요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '거리 그림에서 Library는 어디일까요? 그림과 맞는 문장을 골라 보세요.',
                toolOptions: STREET_ASK('그림과 맞는 문장은?', ['It is across from the Post office.', 'It is next to the Market.', 'It is between the Park and the School.'], ['', 'Market과 Library 사이에 빈 칸이 있어서 next to가 아니에요.', 'Park와 School 사이에 있는 곳은 Library가 아니에요.']),
                target: { pick: 0 }, difficulty: 0.2,
                hints: ['문장에 나온 장소를 지도에서 먼저 찾아 Library와 같은 줄인지, 길 건너편인지 보세요.', 'next to는 사이에 빈 칸이 없어야 해요.', 'Library 바로 아래 줄, 길 건너편에 있는 곳을 찾아보세요.'] },
              { prompt: '거리 그림에서 Bank는 어디일까요? 그림과 맞는 문장을 골라 보세요.',
                toolOptions: STREET_ASK('그림과 맞는 문장은?', ['It is next to the Hospital.', 'It is next to the School and across from the Museum.', 'It is across from the Park.'], ['Hospital과 Bank 사이에 School이 있어서 next to가 아니에요.', '', 'Park의 건너편에 있는 곳은 Bank가 아니에요.']),
                target: { pick: 1 }, difficulty: 0.25,
                hints: ['보기마다 장소를 하나씩 찾아 Bank와 이웃한지, 건너편인지 확인해 보세요.', '두 가지를 말한 문장은 둘 다 맞아야 해요.', 'Bank 바로 옆에 School이 있고, 길 건너편에 Museum이 있는지 짚어 보세요.'] },
              { prompt: '거리 그림에서 Hospital은 어디일까요? 그림과 맞는 문장을 골라 보세요.',
                toolOptions: STREET_ASK('그림과 맞는 문장은?', ['It is next to the School, at the end of the street.', 'It is across from the Park.', 'It is next to the Bank.'], ['', 'Park의 건너편에 있는 곳은 School이에요.', 'Hospital과 Bank 사이에 School이 있어요.']),
                target: { pick: 0 }, difficulty: 0.25,
                hints: ['보기마다 말한 장소를 Hospital 곁에서 찾아 보세요.', '길의 끝에 있다는 말도 그림으로 확인할 수 있어요.', 'Hospital은 길의 오른쪽 끝에 있고 바로 왼쪽에 이웃한 장소가 있어요.'] },
              { prompt: '거리 그림에서 Station의 건너편에 있는 곳은 어디일까요? 그림과 맞는 문장을 골라 보세요.',
                toolOptions: STREET_ASK('Station 건너편에 있는 곳은?', ['The Market is across from the Station.', 'The Library is across from the Station.', 'The Fire station is across from the Station.'], ['', 'Library는 Post office의 건너편이에요.', 'Fire station은 길 건너편이 아니라 Park의 위쪽에 있어요.']),
                target: { pick: 0 }, difficulty: 0.3,
                hints: ['Station에서 길을 가로질러 바로 맞은편 칸을 보세요.', '같은 세로 줄에서 길을 사이에 둔 칸이 건너편이에요.', 'Station이 있는 세로 줄의 위쪽 칸을 보세요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 길 안내와 위치 말을 함께 듣고 목적지 찾기', minutes: 14, tool: 'map',
            teacher: '"길 안내는 도착할 곳까지 데려다주고, 위치 말은 도착한 곳이 맞는지 확인해 줘요." 안내를 먼저 따라가 핀을 꽂고, 마지막 문장과 핀이 맞는지 점검하게 한다. 위치 말이 맞지 않아 이상하다고 느낀 학생에게는 "어디에서 길을 잘못 따라갔을까요?" 하고 출발점에서 다시 걷게 한다. 마지막 짝 활동은 안내 두 문장에 위치 말을 한 문장 붙여 짝에게 말하고, 짝이 그림에서 짚어 맞는지 "Is it the Bank?"처럼 되묻는다.',
            task: '길 안내를 따라가 핀을 꽂고, 마지막 위치 말이 도착한 곳과 맞는지 확인해요. 맞지 않으면 처음부터 다시 걸어요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: 'Station에서 지도의 오른쪽을 보고 서 있어요. "Go straight three blocks. Turn left. Go two blocks. It is next to the Library." 도착한 곳에 핀을 꽂아 보세요.',
                toolOptions: STREET_PIN, target: { place: 'Museum' }, difficulty: 0.25,
                hints: ['안내를 한 문장씩 따라가 핀을 꽂은 뒤 마지막 문장과 맞는지 확인해 보세요.', '세 블록 간 곳에서 지도의 위쪽으로 돌아요. 마지막 문장은 확인용이에요.', '세 블록 간 곳에서 위로 두 블록 올라간 곳에 핀을 꽂아요.'] },
              { prompt: 'Hospital에서 지도의 왼쪽을 보고 서 있어요. "Go straight one block. Turn right. Go two blocks. It is next to the Museum." 도착한 곳에 핀을 꽂아 보세요.',
                toolOptions: STREET_PIN, target: { place: 'Park' }, difficulty: 0.3,
                hints: ['왼쪽을 보고 있는 사람의 오른쪽이 지도의 어느 쪽인지 먼저 정해 보세요.', '한 블록 간 곳을 먼저 짚고 나서 돌아요. 마지막 문장은 확인용이에요.', '한 블록 간 곳에서 위로 두 블록 올라간 곳에 핀을 꽂아요.'] },
              { prompt: 'Market에서 지도의 오른쪽을 보고 서 있어요. "Go straight three blocks. Turn right. Go two blocks. It is next to the School." 도착한 곳에 핀을 꽂아 보세요.',
                toolOptions: STREET_PIN, target: { place: 'Bank' }, difficulty: 0.35,
                hints: ['오른쪽을 보고 서서 오른쪽으로 돌면 지도의 어느 쪽인지 정하세요.', '세 블록 간 곳을 먼저 짚어요. 마지막 문장과 맞는지 확인해요.', '세 블록 간 곳에서 아래로 두 블록 내려간 곳에 핀을 꽂아요.'],
                predict: { q: '마지막 문장 "It is next to the School."만 들으면 도착한 곳이 하나로 정해질까요?', options: ['네, 하나로 정해져요', '아니요, School 옆에는 두 곳이 있어서 길 안내도 필요해요'], answer: 1 },
                conclude: '위치 말 하나는 답이 여럿일 수 있어요. 길 안내와 함께 쓰면 도착한 곳이 하나로 정해져요.' },
              { prompt: '출발점과 보는 방향을 정하고, 길 안내 두 문장에 next to나 across from 한 문장을 붙여 짝에게 말해요. 짝이 그림에서 짚어 맞으면 바꾸어 한 뒤 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"위치 말을 붙이니 무엇이 좋아졌나요?" 도착한 곳이 맞는지 확인할 수 있다는 말을 듣고 출구 질문을 푼다. 출구 2번에서 across from을 고른 학생에게는 두 장소 사이에 길이 있는지 다시 짚게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'map', options: STREET_PIN, prompt: 'Post office에서 지도의 오른쪽을 보고 서 있어요. "Go straight one block. Turn left. Go two blocks. It is across from the Bank." 도착한 곳에 핀을 꽂아 보세요.', target: { place: 'Museum' }, difficulty: 0.3 },
          { type: 'choice', prompt: 'School과 Hospital은 같은 줄에 붙어 있어요. 바르게 말한 것은 무엇일까요?', options: ['The Hospital is across from the School.', 'The Hospital is next to the School.', 'The Hospital is between the School.'], answer: 1, difficulty: 0.15, explain: '길 건너편이 아니라 같은 줄에서 이웃해 있어서 next to를 써요.' },
          { type: 'short', prompt: 'Park를 알리는 위치 말을 거리 그림을 보고 한 문장 쓰세요.' },
        ],
      },
    ],
    worksheet: {
      title: '도착한 곳을 알리는 위치 말',
      items: [
        { type: 'figure', wide: true, prompt: '거리 그림을 보고 아래 문장이 가리키는 곳에 ○ 하세요.', tool: 'map', figures: [{ options: STREET_WS, caption: 'Maple Street' }] },
        { type: 'table', prompt: '문장이 가리키는 곳의 이름을 쓰세요.', columns: ['문장', '곳'], cells: [['It is across from the Library.', ''], ['It is next to the Bank and the Hospital.', ''], ['It is across from the Station.', '']], answer: 'Post office / School / Market' },
        { type: 'choice', prompt: '길을 사이에 두고 마주 볼 때 쓰는 말에 ○ 하세요.', options: ['next to', 'across from'], answer: 'across from' },
        { type: 'blank', prompt: '빈칸을 채워 문장을 완성하세요. (Park는 Museum 바로 옆)', text: 'The Park is ______ to the Museum.', answer: 'next' },
        { type: 'short', prompt: '교실에서 내 자리를 next to나 across from을 넣어 한 문장으로 쓰세요.' },
      ],
      easy: {
        note: '붙어 있으면 next to, 길을 사이에 두고 마주 보면 across from.',
        items: [
          { type: 'choice', prompt: '바로 옆에 붙어 있을 때 쓰는 말에 ○ 하세요.', options: ['next to', 'across from'], answer: 'next to' },
          { type: 'choice', prompt: '길 건너편에 있을 때 쓰는 말에 ○ 하세요.', options: ['next to', 'across from'], answer: 'across from' },
          { type: 'short', prompt: 'It is ______ from the Bank. 빈칸에 알맞은 낱말을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '힌트를 누르면 보기마다 두 장소를 먼저 짚게 하고, 같은 줄인지 건너편인지 나누어 보게 해요.',
      base: '문장을 읽고 스스로 고르거나 핀을 꽂아 확인해요.',
      challenge: '위치 말이 둘인 문장을 만들고, 길 안내에 위치 말을 붙여 목적지를 하나로 좁혀요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 빈 칸이 사이에 있어도 next to라고 한다 → 사이에 칸이 없어야 next to. ② 바로 위·아래 줄이라 across from이라고 한다 → 사이에 길이 있어야 한다. ③ 위치 말 하나로 목적지가 정해진다고 생각한다 → 길 안내와 함께 쓴다. 거리 그림의 가게 이름은 연습용 예시이며 실제 가게가 아니다. 32차시의 Go straight·Turn left를 다시 쓴다.',
  }));

  // ───────────── 34차시 (extend) 길 묻고 안내하고 고치기 ─────────────
  L.push(lesson(34, '[6영02-05]', {
    title: '길을 묻고 안내를 되풀이해 확인하며 틀린 안내 고치기',
    objective: '"Excuse me. How do I get to ~?"로 길을 묻고 안내를 되풀이해 확인하며, 안내 속 틀린 단계를 가려내 바르게 고쳐 말할 수 있다.',
    illustration: {
      prompt: PROMPT('two children on a paper street one asking for directions with a question bubble and the other pointing with an arrow'),
      scene: SCENE('Excuse me. How do I get to the library?', '묻고 확인해요', [{ motif: 'star', x: 90, y: 80, color: 'buttercup' }, { motif: 'tree', x: 400, y: 214 }]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"길을 모르는 친구가 \'Where library?\' 하고 물으면 어떤 점이 아쉬울까요?" 학생들이 정중하지 않다고 하면 "Excuse me. How do I get to the library?"를 들려주고 따라 하게 한다. 이어서 일부러 "Go straight. Turn left. Go..." 하다가 말을 멈추어 듣는 사람이 확인하려면 어떻게 말하면 좋은지 묻는다. "So, I go straight and turn left, right?"로 되풀이해 확인할 수 있다고 알려 준다.',
        student: '길을 묻는 말과 안내를 되풀이해 확인하는 말을 따라 해 보고, 왜 되풀이해 확인하는지 말해 봐요.',
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 길 묻고 안내하고 확인하는 대화 차례대로 놓기', minutes: 13, tool: 'wordcards',
            teacher: '"누가 먼저 말을 걸었나요? 안내를 듣고 난 다음에는 무엇을 하나요?" 대화는 부름, 질문, 안내, 확인, 감사의 차례로 이어진다고 알려 준다. 안내 문장을 질문 앞에 두는 학생에게 "무슨 질문에 대한 대답인가요?"라고 되묻는다. 놓은 뒤 둘씩 역할을 나누어 대화 전체를 읽는다.',
            task: '길을 묻고 안내하고 확인하는 대화 카드를 차례대로 놓아요. 놓은 뒤 짝과 역할을 나누어 읽어요.',
            levels: LV({ mode: 'order', shuffle: true }),
            items: [
              { prompt: '도서관 가는 길을 묻는 대화를 차례대로 놓아 보세요.',
                toolOptions: { cards: ['Thank you so much!', 'Go straight two blocks.', 'Excuse me. How do I get to the library?', 'Then turn left. It is next to the park.'] },
                target: { order: ['Excuse me. How do I get to the library?', 'Go straight two blocks.', 'Then turn left. It is next to the park.', 'Thank you so much!'] }, difficulty: 0.2,
                hints: ['먼저 말을 거는 사람이 무엇을 묻는지 생각해 보세요. 그 질문에 대한 안내가 뒤따라요.'] },
              { prompt: '안내를 되풀이해 확인하는 대화를 차례대로 놓아 보세요.',
                toolOptions: { cards: ['Yes, that is right.', 'Go straight one block and turn right.', 'So, I go straight one block and turn right, right?', 'Great. Thank you!'] },
                target: { order: ['Go straight one block and turn right.', 'So, I go straight one block and turn right, right?', 'Yes, that is right.', 'Great. Thank you!'] }, difficulty: 0.25,
                hints: ['되풀이해 확인하는 말은 안내를 들은 뒤에 와요. 확인하는 말에 대한 대답을 그다음에 놓아요.'] },
              { prompt: '모르는 안내를 다시 부탁하는 대화를 차례대로 놓아 보세요.',
                toolOptions: { cards: ['Go straight three blocks. Then turn left.', 'Sorry, could you say that again, please?', 'Sure. Go straight three blocks. Then turn left.', 'Excuse me. Where is the post office?', 'I see. Thank you.'] },
                target: { order: ['Excuse me. Where is the post office?', 'Go straight three blocks. Then turn left.', 'Sorry, could you say that again, please?', 'Sure. Go straight three blocks. Then turn left.', 'I see. Thank you.'] }, difficulty: 0.35,
                hints: ['처음 안내를 못 알아들었을 때 다시 부탁하는 순서를 생각해 보세요.'],
                levels: { challenge: { prompt: '모르는 안내를 다시 부탁하고 되풀이해 확인하는 대화를 차례대로 놓아 보세요.',
                  toolOptions: { cards: ['Go straight three blocks. Then turn left.', 'Sorry, could you say that again, please?', 'Sure. Go straight three blocks. Then turn left.', 'Excuse me. Where is the post office?', 'So, three blocks and turn left, right?', 'Yes. Thank you.'] },
                  target: { order: ['Excuse me. Where is the post office?', 'Go straight three blocks. Then turn left.', 'Sorry, could you say that again, please?', 'Sure. Go straight three blocks. Then turn left.', 'So, three blocks and turn left, right?', 'Yes. Thank you.'] } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 틀린 안내 단계 찾아 고쳐 말하기', minutes: 14, tool: 'map',
            teacher: '"안내를 한 문장씩 걸어 보세요. 어느 문장에서 도착할 곳과 달라졌나요?" 출발점과 보는 방향을 먼저 정한 뒤 문장마다 손가락으로 걷게 한다. 두 번째 문장을 틀렸다고 하는 학생에게 "그 문장까지 걸은 자리가 맞나요?"라고 되묻는다. 고른 단계를 바르게 고쳐 영어로 말하게 하고, 마지막 짝 활동에서는 짝의 안내를 일부러 한 단계 틀리게 말하고 바른 안내와 견주게 한다.',
            task: '안내를 한 문장씩 걸어 도착할 곳과 달라지는 단계 하나를 골라요. 고른 단계를 바르게 고쳐 짝에게 말해요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: 'Station에서 지도의 오른쪽을 보고 서서 Library로 가려고 해요. 틀린 단계 하나를 골라 보세요.',
                toolOptions: STREET_ASK('틀린 단계는?', ['Go straight two blocks.', 'Turn right.', 'Go two blocks.'], ['', '오른쪽을 보고 있을 때 Library로 가려면 위쪽으로 돌아야 해요.', '']),
                target: { pick: 1 }, difficulty: 0.25,
                hints: ['한 문장씩 걸어 보며 어디에서 Library와 멀어지는지 찾아보세요.', '돌 때 지도의 어느 쪽으로 가는지 확인해 보세요.', 'Library는 곧장 간 곳에서 위쪽에 있어요. 오른쪽을 보고 있는 사람은 위쪽을 보려면 어느 쪽으로 돌아야 할까요?'] },
              { prompt: 'Hospital에서 지도의 왼쪽을 보고 서서 Museum으로 가려고 해요. 틀린 단계 하나를 골라 보세요.',
                toolOptions: STREET_ASK('틀린 단계는?', ['Go straight two blocks.', 'Turn left.', 'Go two blocks.'], ['', '왼쪽을 보고 있을 때 위쪽으로 가려면 오른쪽으로 돌아야 해요.', '']),
                target: { pick: 1 }, difficulty: 0.3,
                hints: ['왼쪽을 보고 선 사람이 되어 한 문장씩 걸어 보세요.', '곧장 두 블록 간 곳에서 위쪽으로 가려면 어느 쪽으로 돌아야 하는지 보세요.', '왼쪽을 보고 있는 사람의 왼쪽은 지도의 아래쪽이에요.'] },
              { prompt: 'Station에서 오른쪽을 보고 서서 Hospital로 가려고 해요. 틀린 단계 하나를 골라 보세요.',
                toolOptions: STREET_ASK('틀린 단계는?', ['Go straight five blocks.', 'Stop.', 'It is next to the Bank.'], ['', '', 'Hospital 옆에는 Bank가 아니라 School이 있어요.']),
                target: { pick: 2 }, difficulty: 0.3,
                hints: ['걸어서 도착한 곳에서 마지막 문장이 맞는지 확인해 보세요.', '위치 말도 그림과 맞아야 해요.', '도착한 곳의 바로 옆 장소를 그림에서 짚어 보세요.'],
                levels: { challenge: { prompt: 'Market에서 오른쪽을 보고 서서 Bank로 가려고 해요. "Go straight three blocks. Turn left. Go two blocks." 틀린 단계 하나를 골라 보세요.',
                  toolOptions: STREET_ASK('틀린 단계는?', ['Go straight three blocks.', 'Turn left.', 'Go two blocks.'], ['', 'Bank는 지도의 아래쪽에 있어서 오른쪽으로 돌아야 해요.', '']),
                  target: { pick: 1 } } } },
              { prompt: '짝이 한 단계를 일부러 틀리게 길을 안내하고, 나는 한 문장씩 따라가다가 "Wait, ..." 하고 틀린 단계를 짚어 바르게 고쳐 말해요. 바꾸어 한 뒤 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"길을 되풀이해 확인하니 무엇이 좋았나요?" 틀린 단계를 일찍 찾을 수 있다는 말을 듣고 출구 질문을 푼다. 출구 2번에서 안내를 되풀이하지 않고 \"Yes\"만 고른 학생에게는 \"어느 단계를 확인했나요?\"라고 묻는다.',
        exitTicket: [
          { type: 'tool', tool: 'wordcards', options: { mode: 'order', shuffle: false, cards: ['Go straight two blocks. Then turn right.', 'Excuse me. How do I get to the school?', 'So, two blocks and turn right, right?'] }, prompt: '길을 묻고 안내하고 확인하는 대화를 차례대로 놓아 보세요.', target: { order: ['Excuse me. How do I get to the school?', 'Go straight two blocks. Then turn right.', 'So, two blocks and turn right, right?'] }, difficulty: 0.2 },
          { type: 'choice', prompt: '안내를 들은 뒤 확인하는 말로 알맞은 것은 무엇일까요?', options: ['So, I go straight and turn left, right?', 'Where is the library?', 'Goodbye.'], answer: 0, difficulty: 0.2, explain: '들은 안내를 내 말로 되풀이하면 틀린 단계를 바로 찾을 수 있어요.' },
          { type: 'short', prompt: '"Go straight two blocks. Turn right." 안내를 듣고 확인하는 말을 한 문장 쓰세요.' },
        ],
      },
    ],
    worksheet: {
      title: '길 묻고 확인하기',
      items: [
        { type: 'table', prompt: '대화 카드에 1~4 번호를 쓰세요.', columns: ['대화', '번호'], cells: [['Thank you!', ''], ['Go straight two blocks.', ''], ['Excuse me. Where is the bank?', ''], ['So, two blocks, right?', '']], answer: '4 / 2 / 1 / 3' },
        { type: 'choice', prompt: '길을 정중하게 묻는 말에 ○ 하세요.', options: ['Where bank?', 'Excuse me. How do I get to the bank?'], answer: 'Excuse me. How do I get to the bank?' },
        { type: 'blank', prompt: '빈칸을 채워 되풀이해 확인하는 말을 완성하세요.', text: 'So, I go straight and turn ______, right?', answer: 'left' },
        { type: 'short', prompt: '"Go straight one block. Turn left. Go two blocks." 안내에서 한 단계를 틀리게 고쳐 쓰고, 바른 안내와 견주어 보세요.' },
      ],
      easy: {
        note: '묻기 → 안내 → 되풀이해 확인 → 감사 차례예요.',
        items: [
          { type: 'choice', prompt: '길을 묻는 첫말에 ○ 하세요.', options: ['Excuse me.', 'Thank you.'], answer: 'Excuse me.' },
          { type: 'choice', prompt: '안내를 들은 뒤 마지막에 하는 말에 ○ 하세요.', options: ['Thank you.', 'How do I get there?'], answer: 'Thank you.' },
          { type: 'short', prompt: 'So, I go ______ and turn right, right? 빈칸에 알맞은 낱말을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 초록 테두리가 생기고, 틀린 단계를 고르면 까닭을 말해 주고 되돌려요.',
      base: '다 놓거나 고른 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '대화를 여섯 장으로 놓고, 단계가 하나 틀린 긴 안내에서 틀린 곳을 찾아 고쳐 말해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 질문 없이 안내부터 말한다 → Excuse me로 먼저 부른다. ② 안내를 듣고도 되풀이하지 않는다 → 한 단계씩 확인해 틀린 곳을 일찍 찾게 한다. ③ 틀린 단계를 찾았는데 고치지 못한다 → 지도에서 도는 쪽을 몸으로 돌려 확인한다. 이 차시로 위치 표현 길 안내(32~34차시)를 마치고, 35~37차시 방법 설명문 쓰기와 이어진다.',
  }));

  // ───────────── 35~37차시 방법 설명문 쓰기 ─────────────
  const PARTS = [{ id: 'need', label: 'You need (준비물)' }, { id: 'step', label: 'Steps (할 일)' }];

  L.push(lesson(35, '[6영02-05]', {
    title: '준비물과 할 일을 나누어 방법 설명문의 틀 세우기',
    objective: '방법 설명문이 제목·준비물(You need)·단계(First, Then, Finally)로 짜인다는 것을 알고, 문장을 준비물과 할 일로 나누고 제목부터 마지막 단계까지 차례대로 놓을 수 있다.',
    illustration: {
      prompt: PROMPT('a paper recipe card with a title, a list of things to prepare and numbered steps, next to a small paper bookmark and a bean plant in a cup'),
      scene: SCENE('How to Make a Bookmark', '제목 · 준비물 · 단계', [{ motif: 'star', x: 90, y: 80, color: 'buttercup' }, { motif: 'tree', x: 400, y: 214 }]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"만드는 방법을 글로 써 주면 선생님이 없어도 따라 할 수 있어요. 어떤 글이 따라 하기 쉬울까요?" 요리 설명 카드를 보여 주고 "제목, 준비물, 단계가 다 있나요?"라고 묻는다. 준비물 없이 단계만 있으면 "중간에 가위가 없어서 멈추게 돼요."라고 짚는다. 칠판에 How to Make a Bookmark를 쓰고 You need와 Steps를 두 줄로 나누어 보인다.',
        student: '만드는 방법 카드에 무엇이 빠지면 따라 하기 어려운지 말해 봐요.',
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 준비물과 할 일 나누어 놓기', minutes: 13, tool: 'wordcards',
            teacher: '"손에 들 수 있는 것은 준비물, 손으로 하는 일은 할 일이에요." 물건 이름은 명사구, 할 일은 동사로 시작한다는 점을 짚는다. Put soil in the cup. 같은 문장을 준비물 칸에 두는 학생에게 "그 문장은 가지고 가는 것인가요, 하는 일인가요?"라고 묻는다. 고른 뒤 You need와 Steps를 나누어 소리 내어 읽게 한다.',
            task: '카드를 준비물 칸과 할 일 칸에 나누어 놓아요. 놓은 카드를 You need와 Steps로 나누어 소리 내어 읽어요.',
            levels: LV({ mode: 'sort', shuffle: false, slots: PARTS }),
            items: [
              { prompt: '책갈피 만드는 방법이에요. 카드를 준비물 칸과 할 일 칸에 나누어 보세요.',
                toolOptions: { slots: PARTS, cards: ['a piece of paper', 'colored pencils', 'Cut the paper into a long strip.', 'Draw a picture on the strip.'] },
                target: { sort: { need: ['a piece of paper', 'colored pencils'], step: ['Cut the paper into a long strip.', 'Draw a picture on the strip.'] } }, difficulty: 0.15,
                hints: ['가방에서 꺼내 놓을 수 있는 것은 준비물이에요. 동사로 시작해 하는 일을 말하는 문장은 할 일이에요.'] },
              { prompt: '콩 심는 방법이에요. 카드를 준비물 칸과 할 일 칸에 나누어 보세요.',
                toolOptions: { slots: PARTS, cards: ['a small cup', 'some soil', 'a bean', 'Put soil in the cup.', 'Press the bean into the soil.', 'Water it every day.'] },
                target: { sort: { need: ['a small cup', 'some soil', 'a bean'], step: ['Put soil in the cup.', 'Press the bean into the soil.', 'Water it every day.'] } }, difficulty: 0.25,
                hints: ['a, some으로 시작하는 말은 물건 이름이에요. 동사로 시작하는 문장은 할 일이에요.'] },
              { prompt: '레모네이드 만드는 방법이에요. 카드를 준비물 칸과 할 일 칸에 나누어 보세요.',
                toolOptions: { slots: PARTS, cards: ['a lemon', 'cold water', 'a spoon', 'Squeeze the lemon into a glass.', 'Add the water.', 'Stir it with the spoon.'] },
                target: { sort: { need: ['a lemon', 'cold water', 'a spoon'], step: ['Squeeze the lemon into a glass.', 'Add the water.', 'Stir it with the spoon.'] } }, difficulty: 0.25,
                hints: ['카드마다 "이것을 준비한다"인지 "이것을 한다"인지 말해 보세요.'],
                predict: { q: '준비물이 하나도 적혀 있지 않은 방법 글을 따라 하면 어떻게 될까요?', options: ['문제없이 따라 할 수 있어요', '중간에 필요한 것이 없어 멈출 수 있어요'], answer: 1 },
                conclude: '준비물을 먼저 적어 두면 읽는 사람이 필요한 것을 미리 챙길 수 있어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 제목·준비물·단계 차례대로 놓기', minutes: 14, tool: 'wordcards',
            teacher: '"방법 글을 읽을 때 눈이 가는 차례를 생각해 보세요. 무엇을 만드는지 먼저, 그다음 필요한 것, 마지막에 할 일이에요." 카드 속 First, Then, Finally를 단서로 삼아 단계의 차례를 놓게 한다. 단계 카드를 준비물 앞에 두는 학생에게 "준비물이 없는데 첫 단계를 할 수 있나요?"라고 묻는다. 마지막 짝 활동은 간단한 만들기 하나를 정해 제목, 준비물 한 줄, 단계 두 줄을 말하게 하고 짝이 부분마다 손가락으로 표시한다.',
            task: '방법 설명문 카드를 제목, 준비물, 단계 차례대로 놓아요. 놓은 뒤 처음부터 끝까지 소리 내어 읽어요.',
            levels: LV({ mode: 'order', shuffle: true }),
            items: [
              { prompt: '종이 부채 만드는 방법 카드를 차례대로 놓아 보세요.',
                toolOptions: { cards: ['Finally, hold the stick and wave it.', 'How to Make a Paper Fan', 'First, fold the paper back and forth.', 'You need: a piece of paper and a stick.'] },
                target: { order: ['How to Make a Paper Fan', 'You need: a piece of paper and a stick.', 'First, fold the paper back and forth.', 'Finally, hold the stick and wave it.'] }, difficulty: 0.2,
                hints: ['제목, 준비물, 단계 순서예요. 단계는 First가 먼저, Finally가 마지막이에요.'] },
              { prompt: '이 닦는 방법 카드를 차례대로 놓아 보세요.',
                toolOptions: { cards: ['Then, brush your teeth in small circles.', 'First, put toothpaste on your brush.', 'How to Brush Your Teeth', 'Finally, rinse your mouth with water.', 'You need: a toothbrush and toothpaste.'] },
                target: { order: ['How to Brush Your Teeth', 'You need: a toothbrush and toothpaste.', 'First, put toothpaste on your brush.', 'Then, brush your teeth in small circles.', 'Finally, rinse your mouth with water.'] }, difficulty: 0.25,
                hints: ['제목이 맨 위, 준비물이 그다음이에요. 단계는 First, Then, Finally 순서예요.'] },
              { prompt: '운동화 끈 묶는 방법 카드를 차례대로 놓아 보세요.',
                toolOptions: { cards: ['Next, make a loop with each lace.', 'First, cross the two laces.', 'How to Tie Your Shoes', 'Finally, pull both loops tight.', 'You need: a pair of shoes with laces.', 'Tip: Sit down to make it easier.'] },
                target: { order: ['How to Tie Your Shoes', 'You need: a pair of shoes with laces.', 'First, cross the two laces.', 'Next, make a loop with each lace.', 'Finally, pull both loops tight.', 'Tip: Sit down to make it easier.'] }, difficulty: 0.35,
                hints: ['Tip은 단계를 다 끝낸 뒤 덧붙이는 한마디예요. 단계 안에서는 차례 말이 단서예요.'],
                levels: { challenge: { prompt: '운동화 끈 묶는 방법 카드를 차례대로 놓아 보세요. (단계 말이 같은 단어로 시작하지 않아요)',
                  toolOptions: { cards: ['Make a loop with each lace.', 'Cross the two laces.', 'How to Tie Your Shoes', 'Pull both loops tight.', 'You need: a pair of shoes with laces.'] },
                  target: { order: ['How to Tie Your Shoes', 'You need: a pair of shoes with laces.', 'Cross the two laces.', 'Make a loop with each lace.', 'Pull both loops tight.'] } } } },
              { prompt: '간단한 만들기 하나(예: 별 접기, 연필꽂이)를 골라 제목과 준비물 한 줄, 단계 두 줄을 영어로 짝에게 말해요. 짝은 제목·준비물·단계를 손가락으로 하나씩 표시해요. 바꾸어 한 뒤 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"방법 설명문은 어떤 세 부분으로 되어 있었나요?" 제목, 준비물, 단계를 손가락 세 개로 세어 보게 한다. 출구 1번에서 단계 문장을 준비물 칸에 둔 학생에게는 동사로 시작하는지 다시 확인하게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'wordcards', options: { mode: 'sort', shuffle: false, slots: PARTS, cards: ['a bowl', 'two eggs', 'Break the eggs into the bowl.', 'Mix them well.'] }, prompt: '카드를 준비물 칸과 할 일 칸에 나누어 보세요.', target: { sort: { need: ['a bowl', 'two eggs'], step: ['Break the eggs into the bowl.', 'Mix them well.'] } }, difficulty: 0.2 },
          { type: 'choice', prompt: '방법 설명문에서 준비물 줄에 알맞은 것은 무엇일까요?', options: ['You need: a glass and a spoon.', 'First, stir the water.', 'How to Make Lemonade'], answer: 0, difficulty: 0.2, explain: '필요한 물건을 한 줄로 적은 것이 준비물 줄이에요.' },
          { type: 'short', prompt: '내가 만들 수 있는 것 하나를 골라 How to Make ... 제목과 You need ... 한 줄을 쓰세요.' },
        ],
      },
    ],
    worksheet: {
      title: '방법 설명문의 틀',
      items: [
        { type: 'table', prompt: '책갈피 만드는 글에서 알맞은 칸에 번호를 쓰세요. (1 제목 2 준비물 3 단계)', columns: ['문장', '번호'], cells: [['How to Make a Bookmark', ''], ['You need: paper and a pencil.', ''], ['First, cut the paper into a strip.', '']], answer: '1 / 2 / 3' },
        { type: 'choice', prompt: '준비물에 ○ 하세요.', options: ['a small cup', 'Put soil in the cup.'], answer: 'a small cup' },
        { type: 'blank', prompt: '빈칸에 알맞은 차례 말을 쓰세요.', text: '______, put soil in the cup. Then, press a bean into the soil.', answer: 'First' },
        { type: 'short', prompt: '내가 잘 아는 만들기나 하는 방법의 제목과 준비물을 한 줄씩 쓰세요.' },
      ],
      easy: {
        note: '제목 → 준비물 → 단계 순서예요.',
        items: [
          { type: 'choice', prompt: '맨 위에 쓰는 것에 ○ 하세요.', options: ['제목', '마지막 단계'], answer: '제목' },
          { type: 'choice', prompt: '"a spoon"은 어느 칸일까요?', options: ['준비물', '할 일'], answer: '준비물' },
          { type: 'short', prompt: 'How to ______ a Bookmark. 빈칸에 알맞은 낱말을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 초록 테두리가 생기고, 틀린 칸에 두면 까닭을 말해 주고 되돌려요.',
      base: '다 놓은 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '차례 말이 없는 단계 카드를 순서대로 놓고, 마지막에 Tip을 덧붙인 글을 완성해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 준비물과 할 일을 섞어 한 문장에 넣는다 → 준비물은 You need 줄, 할 일은 Steps 줄로 나눈다. ② 단계에 차례 말이 없어 순서를 알 수 없다 → First, Then, Finally를 붙여 본다. ③ 제목 없이 바로 단계를 쓴다 → 무엇을 만드는 글인지 제목으로 먼저 알린다. 만들기는 가위·칼 같은 날카로운 도구 없이 종이와 연필로 하는 것을 고르게 한다. 11~13차시의 차례 말하기를 글로 옮기는 시작이며, 이 차시로 방법 설명문의 틀(35차시)을 마친다.',
  }));

  // ───────────── 36차시 (practice) 빠진 단계와 흐릿한 동작어 고치기 ─────────────
  L.push(lesson(36, '[6영02-05]', {
    title: '동작 낱말 빈칸을 채우고 빠진 단계를 찾아 방법 설명문 고쳐 쓰기',
    objective: '방법 설명문의 단계에 알맞은 동작 낱말을 넣고, 단계 사이에서 빠진 단계를 찾아 바르게 보태어 읽는 사람이 따라 할 수 있는 글로 고칠 수 있다.',
    illustration: {
      prompt: PROMPT('a child checking a paper how-to card with a missing step shown as an empty paper slot and a pencil about to fill it in'),
      scene: SCENE('First, ___ the paper.', '동작 낱말 · 빠진 단계', [{ motif: 'star', x: 90, y: 80, color: 'buttercup' }, { motif: 'house', x: 400, y: 218, color: 'sky' }]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"선생님이 쓴 연필꽂이 만드는 글을 따라 해 보세요. First, get a can. Finally, put pencils in it." 두 단계만 읽어 주고 "중간에 무엇을 해야 하나요?"라고 묻는다. 학생들이 "종이를 붙여요?" 하고 중간 단계를 말하면 "그 단계가 빠지면 읽는 사람은 멈춰요."라고 정리한다. 오늘은 빠진 단계와 알맞은 동작 낱말을 찾아 방법 글을 고친다고 알린다.',
        student: '선생님의 두 단계 글을 따라 해 보고, 중간에 빠진 일이 무엇인지 말해 봐요.',
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 단계에 알맞은 동작 낱말 넣기', minutes: 13, tool: 'wordcards',
            teacher: '"단계마다 손이 무엇을 하는지 먼저 몸으로 해 보세요. 그 동작을 말하는 낱말이 빈칸에 들어가요." fold, pour처럼 동작 낱말은 문장 앞에서 동사로 쓰인다는 것을 짚는다. 남는 카드(예: jump)를 넣는 학생에게 "그 동작이 이 방법에 필요한가요?"라고 묻는다. 채운 뒤에는 단계를 하나씩 몸짓하며 읽게 한다.',
            task: '단계 문장의 빈칸에 알맞은 동작 낱말 카드를 넣어요. 남는 카드는 그대로 두고, 채운 단계를 몸짓하며 읽어요.',
            levels: LV({ mode: 'fill', shuffle: false }),
            items: [
              { prompt: '종이 부채 만드는 방법이에요. 빈칸에 알맞은 동작 낱말을 넣어 보세요.',
                toolOptions: { slots: [{ id: 's1', label: 'First, ___ the paper in half.' }, { id: 's2', label: 'Then, ___ a stick to the end.' }, { id: 's3', label: 'Finally, ___ the fan to cool your face.' }], cards: ['fold', 'tape', 'wave', 'eat'] },
                target: { fill: { s1: 'fold', s2: 'tape', s3: 'wave' } }, difficulty: 0.2,
                hints: ['단계마다 손이 어떤 동작을 하는지 몸으로 해 보며 낱말을 골라 보세요.'] },
              { prompt: '화분에 물 주는 방법이에요. 빈칸에 알맞은 동작 낱말을 넣어 보세요.',
                toolOptions: { slots: [{ id: 's1', label: 'First, ___ a cup with water.' }, { id: 's2', label: 'Then, ___ the water on the soil slowly.' }, { id: 's3', label: 'Finally, ___ the plant near the window.' }], cards: ['fill', 'pour', 'put', 'jump'] },
                target: { fill: { s1: 'fill', s2: 'pour', s3: 'put' } }, difficulty: 0.25,
                hints: ['컵에 물을 채우는 일, 흙 위로 물을 흘려 보내는 일, 화분을 어디에 두는 일을 차례로 떠올려 보세요.'] },
              { prompt: '이 닦는 방법이에요. 빈칸에 알맞은 동작 낱말을 넣어 보세요.',
                toolOptions: { slots: [{ id: 's1', label: 'First, ___ toothpaste on your brush.' }, { id: 's2', label: 'Then, ___ your teeth in small circles.' }, { id: 's3', label: 'Finally, ___ your mouth with water.' }], cards: ['put', 'brush', 'rinse', 'drink'] },
                target: { fill: { s1: 'put', s2: 'brush', s3: 'rinse' } }, difficulty: 0.25,
                hints: ['칫솔에 하는 일, 이에 하는 일, 입에 하는 일을 따로 떠올려 보세요.'],
                predict: { q: '"Do it." 처럼 흐릿한 동작 말로도 읽는 사람이 따라 할 수 있을까요?', options: ['네, 충분해요', '아니요, 무엇을 하는지 분명한 동작 낱말이 필요해요'], answer: 1 },
                conclude: '단계마다 fold, pour, brush처럼 무엇을 하는지 분명하게 보이는 동작 낱말을 써야 따라 할 수 있어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 단계 사이에 빠진 단계 찾아 보태기', minutes: 14, tool: 'wordcards',
            teacher: '"앞 단계와 뒤 단계를 이어 읽어 보세요. 건너뛰어도 손이 움직일까요?" 앞뒤를 번갈아 손으로 해 보며 중간에 필요한 일을 찾게 한다. 뒤 단계를 그대로 한 번 더 고르는 학생에게 "이 단계는 이미 뒤에 있지 않나요?"라고 묻는다. 마지막 짝 활동은 네 단계 글을 써서 한 단계를 일부러 빼고, 짝이 읽으며 멈춘 곳을 짚어 빠진 단계를 말하게 한다.',
            task: '단계 글에서 비어 있는 자리에 꼭 필요한 단계 하나를 바구니에 넣어요. 넣은 뒤 앞뒤를 이어 소리 내어 읽어요.',
            levels: LV(PICK('빠진 단계')),
            items: [
              { prompt: '신발 끈 묶는 방법이에요. "First, hold the laces in both hands. Then, ___. Finally, pull both loops tight." 빈자리에 알맞은 단계 하나를 골라 보세요.',
                toolOptions: { cards: [{ id: 'c1', text: 'Cross the laces and make a loop.' }, { id: 'c2', text: 'Wear red shoes.', why: '신발 색은 끈 묶는 방법과 상관없어요.' }, { id: 'c3', text: 'Finally, go home.', why: '마지막 단계는 이미 뒤에 있어요.' }] },
                target: { pick: ['c1'] }, difficulty: 0.2,
                hints: ['앞 단계에서 끈을 잡았고 뒤 단계에서는 고리를 당겨요. 그 사이에 해야 할 일을 생각해 보세요.'] },
              { prompt: '카드 만드는 방법이에요. "First, fold a piece of paper in half. Then, ___. Finally, write a message inside." 빈자리에 알맞은 단계 하나를 골라 보세요.',
                toolOptions: { cards: [{ id: 'c1', text: 'Draw a picture on the front.' }, { id: 'c2', text: 'Throw the paper away.', why: '종이를 버리면 카드를 만들 수 없어요.' }, { id: 'c3', text: 'Fold a piece of paper in half.', why: '이미 첫 단계에 있어요.' }] },
                target: { pick: ['c1'] }, difficulty: 0.25,
                hints: ['접은 종이가 있고 속에 글을 쓰기 전, 카드의 겉모양에 필요한 일을 생각해 보세요.'] },
              { prompt: '페트병 분리배출 방법이에요. "First, empty the bottle. Then, ___. Finally, put it in the recycling bin." 빈자리에 알맞은 단계 하나를 골라 보세요.',
                toolOptions: { cards: [{ id: 'c1', text: 'Take off the label and rinse the bottle.' }, { id: 'c2', text: 'Fill the bottle with juice.', why: '비운 병에 다시 채우면 분리배출을 할 수 없어요.' }, { id: 'c3', text: 'Put it in the recycling bin.', why: '이미 마지막 단계에 있어요.' }] },
                target: { pick: ['c1'] }, difficulty: 0.25,
                hints: ['병을 비우고 나서 통에 넣기 전에 깨끗하게 하려면 무엇을 할지 생각해 보세요.'],
                levels: { challenge: { prompt: '페트병 분리배출 방법이에요. "First, empty the bottle. Then, ___. Next, ___. Finally, put it in the recycling bin." 빈자리 두 곳에 필요한 단계를 모두 골라 보세요.',
                  toolOptions: { cards: [{ id: 'c1', text: 'Take off the label.' }, { id: 'c2', text: 'Fill the bottle with juice.', why: '비운 병에 다시 채우면 분리배출을 할 수 없어요.' }, { id: 'c3', text: 'Rinse the bottle with water.' }, { id: 'c4', text: 'Draw on the bottle.', why: '분리배출과 상관없는 일이에요.' }] },
                  target: { pick: ['c1', 'c3'] } } } },
              { prompt: '아는 방법 하나를 네 단계로 짧게 써요. 한 단계를 일부러 빼고 짝에게 읽어 줘요. 짝이 따라 하다 멈춘 곳을 짚으면 빠진 단계를 말한 뒤 바꾸어 한 다음 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"빠진 단계를 어떻게 찾았나요?" 앞 단계와 뒤 단계를 이어 읽었다는 말을 듣고 출구 질문을 푼다. 출구 2번에서 마지막 단계를 고른 학생에게는 앞뒤를 번갈아 몸짓하게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'wordcards', options: { mode: 'fill', shuffle: false, slots: [{ id: 's1', label: 'First, ___ two slices of bread.' }, { id: 's2', label: 'Then, ___ jam on one slice.' }], cards: ['take', 'spread', 'sleep'] }, prompt: '빈칸에 알맞은 동작 낱말을 넣어 보세요.', target: { fill: { s1: 'take', s2: 'spread' } }, difficulty: 0.25 },
          { type: 'choice', prompt: '"First, get a cup. Then, ___. Finally, drink the water." 빈칸에 알맞은 단계는 무엇일까요?', options: ['Fill the cup with water.', 'Go to bed.', 'Get a cup.'], answer: 0, difficulty: 0.2, explain: '컵을 가지고 물을 마시는 사이에 컵에 물을 채우는 일이 필요해요.' },
          { type: 'short', prompt: '"First, open the door. Finally, go outside." 가운데 들어갈 빠진 단계를 영어로 한 문장 쓰세요.' },
        ],
      },
    ],
    worksheet: {
      title: '빠진 단계 고쳐 쓰기',
      items: [
        { type: 'choice', prompt: '무엇을 하는지 분명한 단계에 ○ 하세요.', options: ['Then, do it.', 'Then, pour the water.'], answer: 'Then, pour the water.' },
        { type: 'blank', prompt: '빈칸에 알맞은 동작 낱말을 쓰세요.', text: 'First, ______ the paper in half.', answer: 'fold' },
        { type: 'table', prompt: '단계 글을 읽고 빠진 단계가 들어갈 번호에 ○ 하세요. 1 First, get a cup. 2 Finally, drink the water.', columns: ['자리', '○'], cells: [['1번 앞', ''], ['1번과 2번 사이', ''], ['2번 뒤', '']], answer: '1번과 2번 사이' },
        { type: 'short', prompt: '"First, get a cup. Finally, drink the water." 가운데 들어갈 단계를 영어로 쓰세요.' },
      ],
      easy: {
        note: '앞 단계와 뒤 단계를 이어 읽어 보세요.',
        items: [
          { type: 'choice', prompt: '동작 낱말에 ○ 하세요.', options: ['fold', 'paper'], answer: 'fold' },
          { type: 'choice', prompt: '"Then, ___ the water." 빈칸에 알맞은 낱말에 ○ 하세요.', options: ['pour', 'blue'], answer: 'pour' },
          { type: 'short', prompt: 'First, ______ a cup. 빈칸에 알맞은 낱말을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 초록 테두리가 생기고, 맞지 않는 단계를 고르면 까닭을 말해 주고 되돌려요.',
      base: '다 채우거나 고른 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '빈자리가 둘인 글에서 필요한 단계를 모두 찾고, 내 글에서 한 단계를 빼 짝이 찾게 해요.',
    },
    teacherNotes: '자주 보이는 어려움: ① do it, that처럼 흐릿한 말을 쓴다 → 몸으로 해 보고 동작 낱말로 바꾼다. ② 빠진 단계를 앞뒤 단계에서 복사해 쓴다 → 이미 있는 단계는 다시 쓰지 않는다. ③ 단계 사이에 필요한 일을 건너뛴다 → 앞뒤를 번갈아 따라 하며 멈춘 곳을 찾는다. 13차시의 "막히는 단계 고치기"를 글로 옮긴 차시이며, 페트병 방법은 분리배출 예시일 뿐 실제로 병을 자르지 않는다.',
  }));

  // ───────────── 37차시 (wrap) 방법 설명문 완성과 단원 되돌아보기 ─────────────
  const UNIT_PARTS = [{ id: 'sound', label: '말소리 (강세·억양)' }, { id: 'order', label: '순서 말하기' }, { id: 'see', label: '보고 묘사·비교' }, { id: 'guide', label: '길·방법 안내' }];

  L.push(lesson(37, '[6영02-05]', {
    title: '좋은 방법 설명문 가려 쓰고 단원 전체 말하기를 스스로 돌아보기',
    objective: '제목·준비물·단계·분명한 동작 낱말을 갖춘 방법 설명문을 가려내고 내 글을 점검해 쓰며, 이 단원에서 배운 말하기를 네 갈래로 묶어 내 실력을 솔직하게 평가할 수 있다.',
    illustration: {
      prompt: PROMPT('a paper checklist with four check boxes beside a how-to card, a child holding a pencil and smiling'),
      scene: SCENE('Title. You need. Steps.', '내 글을 점검해요', [{ motif: 'star', x: 90, y: 80, color: 'buttercup' }, { motif: 'tree', x: 400, y: 214 }]),
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"이 단원에서 영어로 말하는 연습을 많이 했어요. 소리, 순서, 보고 말하기, 안내하기 가운데 가장 재미있었던 것은 무엇인가요?" 손을 들어 보게 한다. "듣는 사람이 알아듣게 말했는지가 이 단원의 기준이었어요." 하고 오늘은 방법 설명문을 점검하고 단원 전체를 돌아본다고 알린다. 칠판에 제목, 준비물, 단계, 동작 낱말 네 칸의 점검표를 그린다.',
        student: '이 단원에서 가장 재미있었던 말하기와 "듣는 사람이 알아듣게"의 뜻을 말해 봐요.',
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 단원에서 배운 말을 네 갈래로 묶기', minutes: 13, tool: 'wordcards',
            teacher: '"문장 하나마다 어느 시간에 배운 말인지 떠올려 보세요." 대문자가 힘줄 낱말, 차례 말이 순서 말하기, 모양·크기를 견주는 말이 보고 묘사, 방향·위치 말이 안내라는 단서를 짚는다. 길 안내를 순서 말하기에 두는 학생에게 "First, Then이 들어 있나요, 방향을 말하나요?"라고 되묻는다. 놓은 뒤 문장을 하나씩 말투를 살려 소리 내어 읽게 한다.',
            task: '문장 카드를 어느 시간에 배운 말인지 네 칸에 나누어 놓아요. 놓은 문장을 말투를 살려 소리 내어 읽어요.',
            levels: LV({ mode: 'sort', shuffle: false, slots: UNIT_PARTS }),
            items: [
              { prompt: '문장 카드를 단원에서 배운 갈래에 따라 나누어 보세요.',
                toolOptions: { slots: UNIT_PARTS, cards: ['I like HIKING.', 'First, wash your hands.', 'My bag is bigger than yours.', 'Turn left at the bank.'] },
                target: { sort: { sound: ['I like HIKING.'], order: ['First, wash your hands.'], see: ['My bag is bigger than yours.'], guide: ['Turn left at the bank.'] } }, difficulty: 0.2,
                hints: ['대문자가 있는지, 차례 말이 있는지, 견주는 말이 있는지, 방향을 말하는지 하나씩 살펴보세요.'] },
              { prompt: '문장 카드를 단원에서 배운 갈래에 따라 나누어 보세요.',
                toolOptions: { slots: UNIT_PARTS, cards: ['No, I said BLUE, not green.', 'After that, we ate lunch.', 'It is small and round, and it is made of wood.', 'Go straight two blocks.'] },
                target: { sort: { sound: ['No, I said BLUE, not green.'], order: ['After that, we ate lunch.'], see: ['It is small and round, and it is made of wood.'], guide: ['Go straight two blocks.'] } }, difficulty: 0.25,
                hints: ['After that은 차례 말, 모양·재료를 말하면 보고 묘사예요. 대문자는 힘준 낱말이에요.'] },
              { prompt: '문장 카드를 단원에서 배운 갈래에 따라 나누어 보세요.',
                toolOptions: { slots: UNIT_PARTS, cards: ['Finally, put the lid on.', 'The ruler is longer than the pencil.', 'It is across from the library.', 'Is it a PEN or a pencil?'] },
                target: { sort: { sound: ['Is it a PEN or a pencil?'], order: ['Finally, put the lid on.'], see: ['The ruler is longer than the pencil.'], guide: ['It is across from the library.'] } }, difficulty: 0.3,
                hints: ['문장마다 어느 시간에 배운 말인지 한 가지씩 떠올려 보세요. 마지막은 힘주어 고르게 하는 질문이에요.'],
                predict: { q: '한 문장이 두 갈래에 걸치기도 할까요? 예를 들어 Turn LEFT at the bank. 는요?', options: ['아니요, 한 문장은 한 갈래만 있어요', '네, 말소리와 안내가 함께 쓰일 수 있어요'], answer: 1 },
                conclude: '말은 여러 힘이 함께 쓰여요. 오늘은 문장이 가장 뚜렷하게 보여 주는 갈래로 나누어 보았어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 좋은 방법 설명문 가려 점검표로 내 글 확인하기', minutes: 14, tool: 'wordcards',
            teacher: '"점검표 네 칸을 하나씩 읽어요. 제목, 준비물, 차례 말, 분명한 동작 낱말." 보기마다 네 칸에 ○를 하나씩 표시하며 가장 많이 갖춘 글을 고르게 한다. 짧고 단계가 많아 보이는 글만 고르는 학생에게 "준비물이 있나요? 동작 낱말이 분명한가요?"라고 묻는다. 마지막 짝 활동은 내 글(제목, 준비물, 세 단계)을 쓰고 점검표로 스스로 확인한 뒤 짝에게 읽어 주고, 짝이 따라 해 보며 막힌 곳을 알려 준다.',
            task: '네 칸 점검표를 모두 갖춘 방법 설명문 하나를 바구니에 넣어요. 그다음 내 글을 같은 점검표로 확인해요.',
            levels: LV(PICK('좋은 설명문')),
            items: [
              { prompt: '연필꽂이 만드는 방법 글 세 개예요. 제목·준비물·차례 말·분명한 동작 낱말을 모두 갖춘 글 하나를 골라 보세요.',
                toolOptions: { cards: [{ id: 'c1', text: 'How to Make a Pencil Holder. You need: a can and colored paper. First, wrap the paper around the can. Then, tape it. Finally, put pencils in it.' }, { id: 'c2', text: 'Make a pencil holder. Do it well. Done.', why: '제목 형식과 준비물이 없고 동작이 분명하지 않아요.' }, { id: 'c3', text: 'How to Make a Pencil Holder. First, wrap the paper around the can. Then, do that. Finally, enjoy.', why: '준비물이 없고 do that이 흐릿해요.' }] },
                target: { pick: ['c1'] }, difficulty: 0.25,
                hints: ['보기마다 제목, 준비물, 차례 말, 분명한 동작 낱말을 하나씩 찾아 ○를 쳐 보세요.'] },
              { prompt: '이름표 만드는 방법 글 세 개예요. 네 칸 점검표를 모두 갖춘 글 하나를 골라 보세요.',
                toolOptions: { cards: [{ id: 'c1', text: 'How to Make a Name Card. First, write your name. Then, color it. Finally, show it.', why: '준비물 줄이 없어요.' }, { id: 'c2', text: 'How to Make a Name Card. You need: a card and a marker. First, write your name. Then, draw a star. Finally, hold it up.' }, { id: 'c3', text: 'You need: a card and a marker. Write your name. Draw a star. Hold it up.', why: '제목과 차례 말이 없어요.' }] },
                target: { pick: ['c2'] }, difficulty: 0.3,
                hints: ['제목이 있는지, 준비물 줄이 있는지, First·Then·Finally가 있는지 차례로 확인해 보세요.'] },
              { prompt: '씨앗 심는 방법 글 네 개예요. 네 칸 점검표를 모두 갖춘 글을 모두 골라 보세요.',
                toolOptions: { cards: [{ id: 'c1', text: 'How to Plant a Seed. You need: a cup, soil, and a seed. First, put soil in the cup. Then, press the seed in. Finally, water it.' }, { id: 'c2', text: 'How to Plant a Seed. First, put soil in the cup. Then, do it. Finally, water it.', why: '준비물이 없고 do it이 흐릿해요.' }, { id: 'c3', text: 'How to Plant a Seed. You need: a pot, soil, and a seed. First, fill the pot with soil. Next, drop the seed in. Finally, pour water slowly.' }, { id: 'c4', text: 'Plant a seed. You need: soil. Put it in the cup. Water it.', why: '제목 형식과 차례 말이 없어요.' }] },
                target: { pick: ['c1', 'c3'] }, difficulty: 0.35,
                hints: ['모든 칸을 갖춘 글이 둘이에요. 보기마다 네 칸 점검표를 하나씩 확인해 보세요.'],
                levels: { easy: { prompt: '씨앗 심는 방법 글 세 개예요. 네 칸 점검표를 모두 갖춘 글 하나를 골라 보세요.',
                  toolOptions: { cards: [{ id: 'c1', text: 'How to Plant a Seed. You need: a cup, soil, and a seed. First, put soil in the cup. Then, press the seed in. Finally, water it.' }, { id: 'c2', text: 'How to Plant a Seed. First, put soil in the cup. Then, do it. Finally, water it.', why: '준비물이 없고 do it이 흐릿해요.' }, { id: 'c4', text: 'Plant a seed. You need: soil. Put it in the cup. Water it.', why: '제목 형식과 차례 말이 없어요.' }] },
                  target: { pick: ['c1'] } } } },
              { prompt: '내가 잘 아는 방법 하나를 골라 제목, 준비물, 세 단계를 영어로 쓰고 네 칸 점검표로 스스로 확인해요. 짝에게 읽어 주어 따라 하게 하고, 막힌 곳을 고친 뒤 "다 했어요"를 누르세요.', free: true, talk: true },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 7,
        teacher: '"가장 자신 있게 된 것과 아직 어려운 것을 하나씩 떠올려 보세요." 출구 질문을 푼 뒤 마지막 두 칸에는 내 실력을 솔직하게 고르라고 말한다. "어느 칸을 골라도 괜찮아요. 다음에 무엇을 더 연습할지 정하려고 고르는 거예요." 자신 없는 칸이 많은 학생에게는 가장 쉬웠던 시간의 활동을 다시 해 보라고 권한다.',
        exitTicket: [
          { type: 'choice', prompt: '방법 설명문에서 가장 먼저 쓰는 것은 무엇일까요?', options: ['How to Make a Fan (제목)', 'Finally, wave it.', 'You need: paper.'], answer: 0, difficulty: 0.15, explain: '제목으로 무엇을 만드는 글인지 먼저 알려요.' },
          { type: 'tool', tool: 'emotion', options: SELF('제목·준비물·단계를 갖춘 방법 설명문을 영어로 썼어요'), prompt: '내 방법 설명문 쓰기는 어느 정도였나요? 솔직하게 골라 보세요.', target: { level: 'any' } },
          { type: 'tool', tool: 'emotion', options: SELF('이 단원에서 듣는 사람이 알아듣게 영어로 말했어요'), prompt: '이 단원 전체에서 내 영어 말하기는 어느 정도였나요? 솔직하게 골라 보세요.', target: { level: 'any' } },
        ],
      },
    ],
    worksheet: {
      title: '내 방법 설명문 점검과 단원 돌아보기',
      items: [
        { type: 'table', prompt: '내 방법 설명문을 점검표로 확인하고 ○ 하세요.', columns: ['점검', '○'], cells: [['제목이 있어요 (How to ...)', ''], ['준비물 줄이 있어요 (You need: ...)', ''], ['First, Then, Finally가 있어요', ''], ['동작 낱말이 분명해요', '']] },
        { type: 'choice', prompt: '"First, wash your hands." 는 단원에서 배운 어느 갈래일까요?', options: ['순서 말하기', '보고 묘사·비교'], answer: '순서 말하기' },
        { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: 'How ______ Make a Paper Boat', answer: 'to' },
        { type: 'short', prompt: '내가 만들 수 있는 것 하나의 방법을 제목, 준비물, 세 단계로 영어로 쓰세요.' },
        { type: 'short', prompt: '이 단원에서 가장 자신 있게 된 말하기 하나와 더 연습하고 싶은 말하기 하나를 한국어로 쓰세요.' },
      ],
      easy: {
        note: '네 칸 점검표를 하나씩 확인해 보세요.',
        items: [
          { type: 'choice', prompt: '방법 설명문에서 준비물을 알리는 줄에 ○ 하세요.', options: ['You need: a cup.', 'Finally, drink.'], answer: 'You need: a cup.' },
          { type: 'choice', prompt: '맨 처음 단계에 쓰는 차례 말에 ○ 하세요.', options: ['First', 'Finally'], answer: 'First' },
          { type: 'short', prompt: 'How ______ Make a Fan. 빈칸에 알맞은 낱말을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞는 자리에 초록 테두리가 생기고, 갖추지 못한 글을 고르면 까닭을 말해 주고 되돌려요.',
      base: '문장을 갈래별로 놓거나 고른 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '점검표를 모두 갖춘 글을 둘 찾고, 내 글에 Tip 한 줄을 덧붙여 짝에게 읽어 줘요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 단계가 많으면 좋은 글이라고 생각한다 → 네 칸 점검표를 하나씩 확인한다. ② 자기 평가에서 모든 칸에 같은 점수를 준다 → 가장 쉬웠던 활동과 가장 어려웠던 활동을 구체적으로 말하게 한다. ③ 점검표로 확인하지 않고 쓴 글을 다 되었다고 한다 → 짝이 따라 해 본 결과를 근거로 고친다. 자기 평가는 점수가 아니라 다음 연습을 정하는 근거이므로 성적에 넣지 않는다. 이 차시로 단원(1~37차시)을 마친다.',
  }));

  PaperLessons.registerUnit({
    id: 'g5-eng-2-03', schema: 'edu-unit.v1', catalogUnit: CAT,
    grade: 5, subject: '영어', unitTitle: '3. 말하기',
    flow: '1~7차시는 말소리로, 뜻을 담은 낱말에 힘을 주고(강세), 묻는 말의 답이 되는 낱말·긴 낱말의 힘준 마디·강조해 바꾼 뜻까지 넓힌 뒤, 끝을 올리고 내리는 억양으로 묻기·알리기·놀라기·고르게 하기를 구분한다. 8~13차시는 친구를 서너 문장으로 소개하고 되물음에 한 문장을 보태며, First·Then·After that·Finally로 손 씻기·샌드위치·아침 일과의 순서를 말하고 짝이 따라 하며 빠진 단계를 찾는다. 14~16차시는 앞의 강세·덩이를 모아 세 문장 발표를 리듬 있게 하고 스스로 어색한 곳을 짚는다. 17~28차시는 실물·그림·동작·물건을 보고 확인되는 것만 영어 문장으로 말하고 쓰며, 모양·쓰임·크기를 빠뜨리지 않는다. 29~31차시는 -er than으로 두 물건을 견주고 표·그래프의 값과 두 기준(but)까지 넓히고, 32~34차시는 같은 거리 그림에서 Go straight·Turn left/right로 길을 안내하고 next to·across from으로 도착한 곳을 알리며 틀린 단계를 고치고, 35~37차시는 방법 설명문을 제목·준비물·단계로 짜 동작 낱말과 빠진 단계를 점검한 뒤 마지막 시간에 점검표로 내 글과 단원 전체를 스스로 평가한다. 단원 내내 "듣는 사람이 알아듣게"를 기준으로 짝 말하기를 반드시 넣는다.',
    refs: {},
    lessons: L,
  });
})();
