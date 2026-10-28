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

  PaperLessons.registerUnit({
    id: 'g5-eng-2-03', schema: 'edu-unit.v1', catalogUnit: CAT,
    grade: 5, subject: '영어', unitTitle: '3. 말하기',
    flow: '1~7차시는 말소리로, 뜻을 담은 낱말에 힘을 주고(강세), 묻는 말의 답이 되는 낱말·긴 낱말의 힘준 마디·강조해 바꾼 뜻까지 넓힌 뒤, 끝을 올리고 내리는 억양으로 묻기·알리기·놀라기·고르게 하기를 구분한다. 8~13차시는 친구를 서너 문장으로 소개하고 되물음에 한 문장을 보태며, First·Then·After that·Finally로 손 씻기·샌드위치·아침 일과의 순서를 말하고 짝이 따라 하며 빠진 단계를 찾는다. 14~16차시는 앞의 강세·덩이를 모아 세 문장 발표를 리듬 있게 하고 스스로 어색한 곳을 짚는다. 17~28차시는 실물·그림·동작·물건을 보고 확인되는 것만 영어 문장으로 말하고 쓰며, 모양·쓰임·크기를 빠뜨리지 않는다. 29~37차시는 -er than 비교, 위치·방향 말로 길 안내, 단계가 드러나는 방법 설명문으로 마무리하고, 마지막 시간에 단원 전체를 스스로 평가한다. 단원 내내 "듣는 사람이 알아듣게"를 기준으로 짝 말하기를 반드시 넣는다.',
    refs: {},
    lessons: L,
  });
})();
