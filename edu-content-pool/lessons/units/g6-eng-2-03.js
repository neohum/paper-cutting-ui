/* 6학년 영어 2학기 3단원. 쓰기 — 짧은 이메일 형식(1~4차시) → 초대·감사 카드(5~8차시)
 * → 경험 글 초안과 수정(9~11차시).
 * 예문·글은 모두 이 단원을 위해 새로 지은 것이다(교과서 지문·노래 가사를 옮기지 않았다). 소리 단추는 누를 때만 난다.
 * 표기 약속: 카드는 문장 부호와 대소문자를 보이는 그대로 쓴다. 이름은 가명(민지·준호 계열의 영어 이름)만 쓰고 실제 연락처·학교 이름을 넣지 않는다.
 */
(function () {
  const U = { grade: 6, subject: '영어', unitTitle: '3. 쓰기' };
  const CAT = 'g6-영어-2학기-3';
  const STD = '[6영02-08]';
  const FORMATS = ['chromebook', 'projector', 'print'];
  const PROMPT = (what) => `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`;
  const SCENE = (top, bottom, extra) => ({ viewBox: [480, 270], layers: [
    { motif: 'sun', x: 412, y: 54, s: 0.8 }, { motif: 'cloud', x: 108, y: 50 }, { motif: 'hills', y: 208 },
    ...(extra || []),
    { motif: 'text', x: 240, y: 122, text: top, size: 24 },
    { motif: 'text', x: 240, y: 160, text: bottom, size: 18 },
  ] });
  const LV = (o) => ({ easy: Object.assign({ live: true, instant: true }, o || {}), base: Object.assign({}, o || {}), challenge: Object.assign({}, o || {}) });
  const LV0 = { easy: {}, base: {}, challenge: {} };
  // 카드: 글 하나 또는 [글, 틀린 까닭]
  const C = (t, why) => (why ? { id: t, text: t, why } : t);
  const dif = (i) => Math.min(0.15 + 0.05 * i, 0.5);
  const PK = (prompt, basket, cards, ans, hint, i) => ({ prompt, toolOptions: { mode: 'pick', basket, shuffle: false, cards }, target: { pick: ans }, difficulty: dif(i), hints: [hint] });
  const SO = (prompt, slots, cards, sort, hint, i) => ({ prompt, toolOptions: { mode: 'sort', shuffle: false, slots, cards }, target: { sort }, difficulty: dif(i), hints: [hint] });
  const OR = (prompt, cards, order, hint, i) => ({ prompt, toolOptions: { mode: 'order', shuffle: false, cards }, target: { order }, difficulty: dif(i), hints: [hint] });
  const FI = (prompt, slots, cards, fill, hint, i) => ({ prompt, toolOptions: { mode: 'fill', shuffle: false, slots, cards }, target: { fill }, difficulty: dif(i), hints: [hint] });
  const MA = (prompt, slots, cards, match, hint, i) => ({ prompt, toolOptions: { mode: 'match', shuffle: false, slots, cards }, target: { match }, difficulty: dif(i), hints: [hint] });
  const TALK = (prompt) => ({ prompt, free: true, talk: true });
  const CK = (prompt, title, items, ans, hint, i) => ({ prompt, toolOptions: { mode: 'checklist', title, items: items.map(([id, text]) => ({ id, text })) }, target: { checklist: ans }, difficulty: dif(i), hints: [hint] });
  const CS = (prompt, title, items, hint) => ({ prompt, toolOptions: { mode: 'checklist', title, items: items.map(([id, text]) => ({ id, text })) }, target: { selfCheck: true }, difficulty: 0.3, hints: [hint] });
  const BR = (prompt, situation, choices, right, hints, i) => ({ prompt, toolOptions: { mode: 'branch', situation, ask: '어떻게 쓸까요?', choices: choices.map(([id, text, result, mood, why]) => Object.assign({ id, text, result, mood }, why ? { why } : {})) }, target: { choice: right }, difficulty: dif(i), hints });
  const SELF = (situation) => ({ mode: 'scale', situation, feeling: '뿌듯함', steps: 3, scaleLabels: { 1: '아직 어려워요', 2: '조금 할 수 있어요', 3: '자신 있게 해요' } });
  const act = (id, title, minutes, tool, teacher, task, levels, items) => ({ id, title, minutes, tool, teacher, task, levels, items });
  const lesson = (n, c) => Object.assign({ id: `g6-eng-2-03-${String(n).padStart(2, '0')}`, schema: 'edu-lesson.v1', catalog: { unit: CAT, lesson: n } }, U, {
    title: c.title, objective: c.objective, standards: [STD], minutes: 40, formats: FORMATS,
    illustration: { prompt: PROMPT(c.ill), scene: SCENE(c.top, c.bottom, c.extra) },
    stages: [
      { id: 'intro', title: '도입', minutes: 6, teacher: c.introT, student: c.introS },
      { id: 'main', title: '전개', minutes: 27, activities: c.acts },
      { id: 'wrapup', title: '정리', minutes: 7, teacher: c.wrapT, exitTicket: c.exit },
    ],
    worksheet: { title: c.wsTitle, items: c.ws, easy: { note: c.easyNote, items: c.easy } },
    differentiation: c.diff, teacherNotes: c.notes,
  });

  const L = [];

    // ───────────── 1차시 (intro) 이메일의 부분 ─────────────
  L.push(lesson(1, {
    title: '이메일을 인사·본문·맺음말로 나누어 읽기',
    objective: '짧은 이메일이 인사, 본문(용건), 맺음말, 보낸 사람 이름으로 이루어짐을 알고 줄마다 어느 부분인지 나눌 수 있다.',
    ill: 'a laptop screen showing a short email with a greeting at the top, a body in the middle, and a closing at the bottom, each in a different pastel box',
    top: 'Dear Ms. Kim,', bottom: '인사 · 본문 · 맺음말', extra: [{ motif: 'house', x: 70, y: 218, color: 'sky' }, { motif: 'bird', x: 400, y: 70 }],
    introT: '"선생님이 교실에서 문자 대신 이메일을 보낼 때 어떻게 시작하나요? 어느 쪽이 읽기 쉬울까요?" 칠판에 용건만 한 줄 쓴 글과 인사·본문·맺음말을 갖춘 글을 나란히 보여 준다. 용건만 적으면 짧고 빨라서 좋다고 여기는 학생에게 "읽는 사람이 누가 보냈는지, 무엇을 부탁하는지, 어떻게 마무리하는지 한눈에 알 수 있어야 해요."라고 짚는다.',
    introS: '용건만 쓴 글과 인사·본문·맺음말을 갖춘 글을 비교해 어느 쪽이 받는 사람에게 더 친절한지 말해 봐요.',
    acts: [
      act('a1', '활동 1. 이메일 줄을 인사·본문·맺음말로 나누기', 13, 'wordcards',
        '"이 줄은 누구에게 말을 거는 줄인가요, 용건을 말하는 줄인가요, 마무리하는 줄인가요?" 줄마다 소리 내어 읽어 보며 역할을 정하게 한다. Thank you. 를 본문으로 넣으려는 학생에게 "용건을 다 말한 뒤 마무리하는 말이에요. 어디서 쓰였는지 보세요."라고 되묻는다.',
        '이메일 줄 카드를 인사 칸, 본문 칸, 맺음말 칸으로 나누어요.', LV({ mode: 'sort' }),
        [SO('이메일 줄을 알맞은 칸에 나누어 보세요.', [{ id: 'greet', label: '인사' }, { id: 'body', label: '본문(용건)' }, { id: 'close', label: '맺음말' }], ['Dear Ms. Kim,', 'I forgot page 12.', 'Thank you.', 'Hello Mr. Park,', 'See you tomorrow.'], { greet: ['Dear Ms. Kim,', 'Hello Mr. Park,'], body: ['I forgot page 12.'], close: ['Thank you.', 'See you tomorrow.'] }, '받는 사람을 부르는 줄은 맨 위, 마무리하는 줄은 맨 아래에 와요.', 0),
         SO('이메일 줄을 알맞은 칸에 나누어 보세요.', [{ id: 'greet', label: '인사' }, { id: 'body', label: '본문(용건)' }, { id: 'close', label: '맺음말' }], ['Hi Jun,', 'Can you play after school?', 'Please tell me soon.', 'Dear Grandma,', 'Love, Mina'], { greet: ['Hi Jun,', 'Dear Grandma,'], body: ['Can you play after school?', 'Please tell me soon.'], close: ['Love, Mina'] }, '묻고 부탁하는 줄은 가운데 본문에 모여요. 이름이 붙은 줄은 어디일까요?', 1),
         SO('이메일 줄을 알맞은 칸에 나누어 보세요.', [{ id: 'greet', label: '인사' }, { id: 'body', label: '본문(용건)' }, { id: 'close', label: '맺음말' }], ['Dear Mr. Lee,', 'I will join the art club.', 'Best wishes,', 'Hello Sora,', 'Please save me a seat.', 'Your friend,'], { greet: ['Dear Mr. Lee,', 'Hello Sora,'], body: ['I will join the art club.', 'Please save me a seat.'], close: ['Best wishes,', 'Your friend,'] }, '쉼표로 끝나는 줄이 인사와 맺음말 둘이에요. 위치와 뜻으로 가려 보세요.', 2)]),
      act('a2', '활동 2. 이메일 줄을 차례대로 놓아 한 통 완성하기', 14, 'wordcards',
        '"맨 위에는 어떤 줄이 오고 맨 아래에는 어떤 줄이 오나요?" 위에서 아래로 한 줄씩 읽어 어색한 곳을 찾게 한다. 이름을 맨 위에 쓰려는 학생에게 "보내는 사람 이름은 마지막 줄에 와요. 받는 사람 이름은 맨 위에 와요."라고 말해 준다. 짝 활동에서는 서로의 순서를 소리 내어 읽어 맞는지 들어 본다.',
        '흩어진 이메일 줄을 차례대로 놓고, 짝에게 처음부터 읽어 줘요.', LV({ mode: 'order' }),
        [OR('이메일 줄을 위에서 아래로 차례대로 놓아 보세요.', ['Thank you.', 'Dear Ms. Kim,', 'I have a question about page 12.', 'Mina'], ['Dear Ms. Kim,', 'I have a question about page 12.', 'Thank you.', 'Mina'], '받는 사람을 부르는 줄이 맨 위, 보내는 사람 이름이 맨 아래예요.', 0),
         OR('이메일 줄을 위에서 아래로 차례대로 놓아 보세요.', ['Best wishes,', 'Hello Mr. Park,', 'I want to join the art club.', 'Jun'], ['Hello Mr. Park,', 'I want to join the art club.', 'Best wishes,', 'Jun'], '맺음말 뒤에 이름이 이어져요. 본문은 그 앞이에요.', 1),
         OR('이메일 줄을 위에서 아래로 차례대로 놓아 보세요.', ['See you soon,', 'Sora', 'Hi Mina,', 'Can you help me with math?', 'I have a hard problem.'], ['Hi Mina,', 'I have a hard problem.', 'Can you help me with math?', 'See you soon,', 'Sora'], '어려운 점을 먼저 말하고 부탁하는 차례로 본문을 이어 보세요.', 2),
         TALK('짝에게 이메일 한 통을 상상해 줄마다 말해 주세요. 인사, 본문, 맺음말, 이름을 차례로 말하고 짝은 빠진 줄이 있는지 알려 줘요. 바꾸어 한 뒤 "다 했어요"를 누르세요.')]),
    ],
    wrapT: '"이메일에는 어떤 부분이 있었나요?" 인사, 본문, 맺음말, 이름 네 가지를 학생에게서 들어 칠판에 순서대로 적는다. 출구 1번에서 본문을 맨 위에 놓은 학생은 편지 봉투에 받는 사람 이름부터 쓰는 것에 빗대어 "맨 위는 받는 사람"이라고 다시 말해 준다.',
    exit: [
      { type: 'tool', tool: 'wordcards', options: { mode: 'order', shuffle: false, cards: ['Best wishes,', 'Hello Mr. Lee,', 'Can I borrow a ball?', 'Jun'] }, prompt: '이메일 줄을 위에서 아래로 차례대로 놓아 보세요.', target: { order: ['Hello Mr. Lee,', 'Can I borrow a ball?', 'Best wishes,', 'Jun'] }, difficulty: 0.2 },
      { type: 'choice', prompt: '"Thank you." 는 이메일의 어느 부분에 가장 알맞을까요?', options: ['인사', '본문의 시작', '맺음말'], answer: 2, difficulty: 0.2, explain: '용건을 말한 뒤 마무리하는 말이라서 맺음말에 알맞아요.' },
      { type: 'mood', prompt: '이메일의 부분을 알아보는 일은 어땠나요?' },
    ],
    wsTitle: '이메일의 부분',
    ws: [
      { type: 'choice', prompt: '이메일의 맨 아래에 알맞은 줄에 ○ 하세요.', options: ['Dear Ms. Kim,', 'I have a question.', 'Best wishes, Mina'], answer: 'Best wishes, Mina' },
      { type: 'table', prompt: '줄을 읽고 인사·본문·맺음말 중 알맞은 말을 쓰세요.', columns: ['이메일 줄', '어느 부분?'], cells: [['Hi Jun,', ''], ['Can you help me?', ''], ['See you soon,', '']], answer: '인사 / 본문 / 맺음말' },
      { type: 'check', prompt: '이메일에 있어야 할 것에 ✓ 하세요.', options: ['받는 사람을 부르는 인사', '하고 싶은 말(본문)', '맺음말', '보내는 사람 이름'] },
      { type: 'short', prompt: '친구에게 보낼 영어 이메일의 인사 줄 하나를 쓰세요.' },
    ],
    easyNote: '맨 위는 인사, 가운데는 용건, 맨 아래는 맺음말과 내 이름이에요.',
    easy: [
      { type: 'choice', prompt: '이메일의 맨 위에 쓰는 줄에 ○ 하세요.', options: ['Dear Mr. Lee,', 'Best wishes,'], answer: 'Dear Mr. Lee,' },
      { type: 'table', prompt: '알맞은 부분을 쓰세요.', columns: ['줄', '부분'], cells: [['Hello Sora,', ''], ['Thank you.', '']], answer: '인사 / 맺음말' },
      { type: 'short', prompt: 'Hi ___, 에 친구 이름을 넣어 쓰세요.' },
    ],
    diff: {
      easy: '맞는 칸이나 자리에 놓으면 초록 테두리가 생기고, 틀리면 까닭을 말해 주고 되돌려요.',
      base: '카드를 모두 놓은 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '쉼표로 끝나는 줄이 많아 인사와 맺음말을 위치와 뜻으로 가려내야 해요.',
    },
    notes: '자주 보이는 어려움: ① 용건만 쓰면 충분하다고 여긴다 → 인사와 맺음말이 있을 때 받는 사람이 느끼는 차이를 말하게 한다. ② 보내는 사람 이름을 맨 위에 쓴다 → 맨 위는 받는 사람, 맨 아래는 보내는 사람임을 봉투에 빗대어 알려 준다. ③ Thank you. 를 본문 첫머리로 쓴다 → 용건을 말한 뒤에 오는 마무리 말임을 보여 준다. 이메일 주소·실명은 쓰지 않고 가명만 쓴다.',
  }));

  // ───────────── 2차시 (practice) 목적 문장 ─────────────
  L.push(lesson(2, {
    title: '이메일에서 보낸 까닭이 드러나는 문장 찾기',
    objective: '짧은 이메일에서 부탁·알림·감사·사과 같은 보낸 까닭이 드러나는 문장을 찾아내고 그 목적을 말할 수 있다.',
    ill: 'an email with one sentence highlighted by a bright marker and a small label saying purpose beside it',
    top: 'Why am I writing?', bottom: '용건이 드러나는 문장 찾기', extra: [{ motif: 'tree', x: 70, y: 214 }, { motif: 'cloud', x: 400, y: 70 }],
    introT: '"선생님이 이메일 한 통을 받았는데 인사만 길고 무엇을 바라는지 모르겠어요. 읽는 사람은 어떤 기분일까요?" 인사와 안부만 있는 글을 보여 준다. 길게 쓸수록 좋은 이메일이라고 여기는 학생에게 "읽는 사람이 무엇을 해 주면 되는지 한 문장으로 드러나야 해요."라고 짚는다.',
    introS: '인사만 길고 용건이 없는 이메일을 읽고 읽는 사람의 마음이 어떨지, 무엇을 더 써야 할지 말해 봐요.',
    acts: [
      act('a1', '활동 1. 이메일에서 용건이 드러나는 문장 고르기', 13, 'wordcards',
        '"이 문장을 읽은 선생님이나 친구가 무엇을 하면 될까요?" 읽는 사람이 해야 할 일이나 알아야 할 일이 담긴 문장이 용건 문장이다. 안부 문장을 용건으로 고르는 학생에게 "안부는 분위기를 만드는 문장이에요. 이 글을 보낸 까닭은 어느 문장에 있나요?"라고 되묻는다.',
        '이메일 문장 카드에서 이 글을 보낸 까닭(용건)이 드러나는 문장 하나를 골라요.', LV({ mode: 'pick', basket: '용건 문장' }),
        [PK('이 글을 보낸 까닭이 드러나는 문장을 골라 보세요.', '용건 문장', [C('Hello Mr. Park,'), C('I am Mina in class 3.'), C('Can I borrow a ball for PE?'), C('Thank you.')], ['Can I borrow a ball for PE?'], '읽는 사람에게 무엇을 해 달라고 하는지 찾아보세요.', 0),
         PK('이 글을 보낸 까닭이 드러나는 문장을 골라 보세요.', '용건 문장', [C('Dear Ms. Lee,'), C('It was rainy today.'), C('I cannot come to class tomorrow.'), C('Best wishes,')], ['I cannot come to class tomorrow.'], '날씨 이야기는 분위기예요. 선생님이 꼭 알아야 할 사실을 찾아보세요.', 1),
         PK('이 글을 보낸 까닭이 드러나는 문장을 골라 보세요.', '용건 문장', [C('Hi Jun,'), C('How are you?'), C('Please bring your camera on Friday.'), C('See you,')], ['Please bring your camera on Friday.'], '안부 질문 말고, 상대가 해야 할 일을 말하는 문장을 찾아보세요.', 2),
         PK('이 글을 보낸 까닭이 드러나는 문장을 골라 보세요.', '용건 문장', [C('Hello Sora,'), C('My bike is broken.'), C('Can you give me a ride?'), C('Bye,')], ['Can you give me a ride?'], '이유를 말한 문장과 부탁하는 문장 중 읽는 사람이 행동할 문장은 어느 쪽일까요?', 3)]),
      act('a2', '활동 2. 용건 문장과 쓴 까닭 짝짓기', 14, 'wordcards',
        '"이 문장을 보낸 사람은 무엇을 하려는 걸까요? 부탁인지 사과인지 말해 보세요." 영어 문장 하나가 어떤 목적인지 우리말로 말하며 짝짓게 한다. Can you …? 가 모두 질문이라서 같은 목적이라고 여기는 학생에게 "무엇을 해 달라고 하는지가 목적이에요."라고 짚는다.',
        '용건 문장과 쓴 까닭을 짝지어요. 그다음 짝과 내가 보내고 싶은 이메일의 까닭을 말해요.', LV({ mode: 'match' }),
        [MA('문장과 쓴 까닭을 짝지어 보세요.', [{ id: 's1', label: 'I am sorry I was late.' }, { id: 's2', label: 'Can you lend me your book?' }, { id: 's3', label: 'Thank you for the gift.' }], ['선물에 고마움을 전해요', '책을 빌려 달라고 부탁해요', '늦어서 사과해요'], { s1: '늦어서 사과해요', s2: '책을 빌려 달라고 부탁해요', s3: '선물에 고마움을 전해요' }, 'sorry, lend, thank 처럼 목적을 알려 주는 낱말을 찾아보세요.', 0),
         MA('문장과 쓴 까닭을 짝지어 보세요.', [{ id: 's1', label: 'Would you like to come to my party?' }, { id: 's2', label: 'Please send me the file.' }, { id: 's3', label: 'I am sorry I broke your pen.' }, { id: 's4', label: 'Thank you for your help.' }], ['도움에 고마움을 전해요', '파일을 보내 달라고 부탁해요', '파티에 초대해요', '펜을 망가뜨려 사과해요'], { s1: '파티에 초대해요', s2: '파일을 보내 달라고 부탁해요', s3: '펜을 망가뜨려 사과해요', s4: '도움에 고마움을 전해요' }, '질문 모양이라도 초대인지 부탁인지는 뜻으로 가려야 해요.', 1),
         MA('문장과 쓴 까닭을 짝지어 보세요.', [{ id: 's1', label: 'Can I ask a question about math?' }, { id: 's2', label: 'I cannot go to the club today.' }, { id: 's3', label: 'Congratulations on your prize.' }], ['동아리에 못 간다고 알려요', '상을 받은 것을 축하해요', '수학에 대해 질문하고 싶다고 말해요'], { s1: '수학에 대해 질문하고 싶다고 말해요', s2: '동아리에 못 간다고 알려요', s3: '상을 받은 것을 축하해요' }, '알리는 말, 묻는 말, 축하하는 말은 읽는 사람이 받는 느낌이 달라요.', 2),
         TALK('짝에게 내가 이메일을 보낸다면 보내고 싶은 까닭(부탁·초대·감사·사과 중 하나)을 영어 한 문장으로 말해 주세요. 짝은 그 까닭을 우리말로 말해 줘요. 바꾸어 한 뒤 "다 했어요"를 누르세요.')]),
    ],
    wrapT: '"이메일에서 용건 문장은 어디에 있었나요?" 두세 명에게 말하게 하고 보통 인사 바로 뒤 본문 첫머리에 온다고 정리한다. 출구 1번에서 안부 문장을 고른 학생에게는 "읽는 사람이 해야 할 일이 담겼나요?"라고 되물어 다시 찾게 한다.',
    exit: [
      { type: 'tool', tool: 'wordcards', options: { mode: 'pick', basket: '용건 문장', shuffle: false, cards: [C('Dear Mr. Choi,'), C('The weather is nice.'), C('Please change my seat.'), C('Best wishes,')] }, prompt: '이 글을 보낸 까닭이 드러나는 문장을 골라 보세요.', target: { pick: ['Please change my seat.'] }, difficulty: 0.2 },
      { type: 'choice', prompt: '"I am sorry I forgot your book." 을 보낸 까닭은 무엇일까요?', options: ['초대하려고', '사과하려고', '부탁하려고'], answer: 1, difficulty: 0.15, explain: 'sorry 가 있고 책을 잊은 일을 말하므로 사과하는 글이에요.' },
      { type: 'mood', prompt: '이메일의 용건을 찾는 일은 어땠나요?' },
    ],
    wsTitle: '보낸 까닭 찾기',
    ws: [
      { type: 'choice', prompt: '이메일의 용건이 드러나는 문장에 ○ 하세요.', options: ['Hi Jun,', 'Please come at four.', 'See you,'], answer: 'Please come at four.' },
      { type: 'table', prompt: '문장을 읽고 보낸 까닭을 우리말로 쓰세요.', columns: ['문장', '보낸 까닭'], cells: [['Thank you for your advice.', ''], ['Can you help me with my homework?', ''], ['I am sorry I was late.', '']], answer: '감사 / 부탁 / 사과' },
      { type: 'check', prompt: '용건 문장을 찾을 때 한 일에 ✓ 하세요.', options: ['읽는 사람이 해야 할 일을 찾았어요.', '안부 문장과 구별했어요.'] },
      { type: 'short', prompt: '선생님께 부탁하고 싶은 일을 영어 한 문장으로 쓰세요.' },
    ],
    easyNote: '읽는 사람이 무엇을 해 주길 바라는지 찾으면 용건 문장이에요.',
    easy: [
      { type: 'choice', prompt: '용건 문장에 ○ 하세요.', options: ['Hello, Mina.', 'Please call me.'], answer: 'Please call me.' },
      { type: 'table', prompt: '보낸 까닭을 쓰세요.', columns: ['문장', '까닭'], cells: [['Thank you.', ''], ['Can you help me?', '']], answer: '감사 / 부탁' },
      { type: 'short', prompt: 'Please ___ . 에 부탁할 일을 넣어 쓰세요.' },
    ],
    diff: {
      easy: '맞는 문장을 고르면 초록 테두리가 생기고, 틀리면 까닭을 말해 주고 되돌려요.',
      base: '카드를 모두 고르거나 짝지은 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '질문 모양의 문장이 초대인지 부탁인지 뜻으로 가려내야 해요.',
    },
    notes: '자주 보이는 어려움: ① 안부 인사를 용건 문장으로 고른다 → 읽는 사람이 해야 할 일이 있는지 묻는다. ② Can you …? 를 모두 같은 부탁으로 본다 → 초대·부탁·허락 구하기가 질문 모양을 같이 쓴다는 것을 보여 준다. ③ 용건을 맨 끝에 숨긴다 → 용건은 인사 바로 다음에 놓는 것이 읽기 쉬움을 알려 준다. 이메일 예문에는 실제 학교·연락처를 쓰지 않는다.',
  }));

  // ───────────── 3차시 (extend) 받는 사람에 맞춘 인사와 맺음말 ─────────────
  L.push(lesson(3, {
    title: '받는 사람에 알맞은 인사와 맺음말 고르기',
    objective: '받는 사람이 선생님·친구·가족 중 누구인지에 따라 인사와 맺음말이 달라짐을 알고 알맞은 말을 고를 수 있다.',
    ill: 'three envelopes addressed to a teacher, a friend, and a grandmother, each with a different greeting card tucked inside',
    top: 'Dear / Hi / Love', bottom: '받는 사람에 맞춰요', extra: [{ motif: 'flower', x: 80, y: 214 }, { motif: 'star', x: 400, y: 70 }],
    introT: '"선생님께 쓸 때와 친한 친구에게 쓸 때, 시작하는 말이 같아야 할까요?" 두 가지 인사를 읽어 주며 받는 사람이 달라지면 말투도 달라지는지 묻는다. 편한 말투가 가장 다정하니 누구에게나 써도 된다고 여기는 학생에게 "상대에 맞는 정중함이 읽는 사람을 존중하는 방법이에요."라고 짚는다.',
    introS: '선생님께 쓰는 글과 친구에게 쓰는 글의 시작이 어떻게 다를지 이야기해 봐요.',
    acts: [
      act('a1', '활동 1. 받는 사람에 맞는 인사말 고르기', 13, 'emotion',
        '"이 글을 받는 사람은 누구인가요? 읽은 뒤 어떤 기분일지 결과를 보세요." 결과 글을 읽고 내 선택이 상대에게 어떻게 전해지는지 생각하게 한다. 항상 Dear 로 시작해야 한다고 여기는 학생에게 "친한 친구에게는 Hi 도 좋아요. 대신 선생님께는 Dear 와 Ms./Mr.를 붙여요."라고 알려 준다.',
        '받는 사람을 먼저 정하고 알맞은 인사말을 골라요. 고른 말을 짝에게 읽어 주고 받는 사람 기분을 말해 봐요.', LV0,
        [BR('담임 선생님께 숙제를 물어볼 이메일의 첫 줄을 골라 보세요.', '담임 Ms. Kim 선생님께 숙제에 대해 물어보는 이메일을 써요.', [['a', 'Yo Kim,', '선생님이 존중받지 못한 기분이 들어요.', '속상함', '선생님께는 이름만 부르지 않고 Ms. 같은 높임 말을 붙여요.'], ['b', 'Dear Ms. Kim,', '선생님이 정중하다고 느끼고 기분 좋게 답장해요.', '기쁨'], ['c', 'Hi!! Kim,', '친구에게 보내는 글 같아서 선생님이 어색해해요.', '걱정', '선생님께는 Dear 와 Ms./Mr.가 알맞아요.']], 'b', ['받는 사람이 선생님이에요. 존중하는 마음이 들어간 첫 줄을 찾아보세요.', '결과를 읽고 선생님 기분이 어떨지 비교해 보세요.', '선생님께는 Dear 와 Ms./Mr.를 붙인 이름으로 시작해요.'], 0),
         BR('단짝 친구에게 놀이를 약속하는 이메일의 첫 줄을 골라 보세요.', '단짝 Jun에게 방과 후에 놀자고 이메일을 써요.', [['a', 'Dear Honorable Mr. Jun,', '친구가 웃으며 "왜 이렇게 어려워?" 하고 놀려요.', '걱정', '아주 친한 친구에게는 너무 딱딱한 인사예요.'], ['b', 'Hi Jun,', '친구가 편안하게 웃으며 답장해요.', '편안함'], ['c', 'To whom it may concern,', '누구에게 쓴 글인지 몰라 친구가 갸웃해요.', '걱정', '이름을 불러 줘야 누구에게 쓴 글인지 알아요.']], 'b', ['받는 사람이 친한 친구예요. 너무 딱딱하거나 이름이 빠진 인사는 어울리지 않아요.', '결과를 읽고 친구 반응을 비교해 보세요.', '친한 친구에게는 Hi 와 이름으로 시작해도 좋아요.'], 1),
         BR('할머니께 안부를 전하는 이메일의 첫 줄을 골라 보세요.', '멀리 계신 할머니께 안부를 전하는 이메일을 써요.', [['a', 'Hey you,', '할머니가 "누구에게 쓴 거니?" 하고 갸웃하세요.', '걱정', '가족이라도 부르는 말을 붙여 정중하게 시작해요.'], ['b', 'Dear Grandma,', '할머니가 다정한 인사에 활짝 웃으세요.', '기쁨'], ['c', 'Hello Student,', '할머니께는 이름 대신 직책을 쓴 것처럼 어색해요.', '걱정', '가족은 가족을 부르는 말로 불러요.']], 'b', ['할머니를 어떻게 부르는지 떠올려 보세요.', '결과에서 할머니의 반응을 읽어 보세요.', '가족에게는 Dear 뒤에 Grandma, Mom 같은 부르는 말을 써요.'], 2)]),
      act('a2', '활동 2. 받는 사람과 맺음말 짝짓기', 14, 'wordcards',
        '"맺음말도 받는 사람에 따라 달라져요. 선생님께, 친구에게, 할머니께 쓸 말을 짝지어 보세요." 맺음말 뜻을 우리말로 말하게 한 뒤 소리 내어 읽게 한다. Love 를 아무에게나 써도 된다고 여기는 학생에게 "사랑한다는 뜻이라서 가족이나 아주 가까운 사람에게 어울려요."라고 말해 준다.',
        '받는 사람과 알맞은 맺음말을 짝지어요. 짝과 선택한 이유를 말해요.', LV({ mode: 'match' }),
        [MA('받는 사람과 알맞은 맺음말을 짝지어 보세요.', [{ id: 'r1', label: '선생님께' }, { id: 'r2', label: '친한 친구에게' }, { id: 'r3', label: '할머니께' }], ['Love,', 'Best wishes,', 'See you soon,'], { r1: 'Best wishes,', r2: 'See you soon,', r3: 'Love,' }, '정중한 말, 편한 말, 사랑을 담은 말로 나누어 보세요.', 0),
         MA('받는 사람과 알맞은 첫 줄을 짝지어 보세요.', [{ id: 'r1', label: '교장 선생님께' }, { id: 'r2', label: '동생에게' }, { id: 'r3', label: '이웃집 아저씨께' }], ['Dear Principal Han,', 'Hi Soo,', 'Dear Mr. Choi,'], { r1: 'Dear Principal Han,', r2: 'Hi Soo,', r3: 'Dear Mr. Choi,' }, '높여 부를 어른에게는 Dear 와 부르는 말을 붙여요.', 1),
         MA('받는 사람과 알맞은 맺음말을 짝지어 보세요.', [{ id: 'r1', label: '도서관 선생님께' }, { id: 'r2', label: '짝에게' }, { id: 'r3', label: '이모에게' }, { id: 'r4', label: '동아리 선배에게' }], ['Take care,', 'Sincerely,', 'Your friend,', 'With love,'], { r1: 'Sincerely,', r2: 'Your friend,', r3: 'With love,', r4: 'Take care,' }, '어른께는 정중하게, 친구에게는 편하게, 가족에게는 사랑을 담아요.', 2),
         TALK('짝에게 누구에게 이메일을 쓰고 싶은지 말하고 알맞은 인사말과 맺음말을 영어로 말해 주세요. 짝은 그 말이 알맞은지 이유와 함께 알려 줘요. 바꾸어 한 뒤 "다 했어요"를 누르세요.')]),
    ],
    wrapT: '"받는 사람이 바뀌면 이메일의 어느 부분이 달라졌나요?" 인사와 맺음말을 학생이 말하면 칠판 표에 정리한다. 출구 1번에서 선생님께 Hi 를 고른 학생에게는 선생님이 받은 느낌을 말해 보게 하고 다시 고르게 한다.',
    exit: [
      { type: 'tool', tool: 'wordcards', options: { mode: 'match', shuffle: false, slots: [{ id: 'r1', label: '선생님께' }, { id: 'r2', label: '친한 친구에게' }], cards: ['Hi Sora,', 'Dear Mr. Kim,'] }, prompt: '받는 사람과 알맞은 첫 줄을 짝지어 보세요.', target: { match: { r1: 'Dear Mr. Kim,', r2: 'Hi Sora,' } }, difficulty: 0.2 },
      { type: 'choice', prompt: '할머니께 보내는 이메일의 맺음말로 가장 알맞은 것은 무엇일까요?', options: ['Whatever,', 'With love,', 'Yo,'], answer: 1, difficulty: 0.2, explain: '가족에게 사랑을 담은 맺음말은 With love, 가 어울려요.' },
      { type: 'mood', prompt: '받는 사람에 맞게 쓰는 일은 어땠나요?' },
    ],
    wsTitle: '받는 사람에 맞는 인사',
    ws: [
      { type: 'choice', prompt: '선생님께 보내는 이메일의 첫 줄에 ○ 하세요.', options: ['Hey,', 'Dear Ms. Park,', 'Yo,'], answer: 'Dear Ms. Park,' },
      { type: 'table', prompt: '받는 사람에 알맞은 맺음말을 보기에서 골라 쓰세요. (보기: Best wishes, / See you soon, / With love,)', columns: ['받는 사람', '맺음말'], cells: [['선생님', ''], ['친한 친구', ''], ['할머니', '']], answer: 'Best wishes, / See you soon, / With love,' },
      { type: 'check', prompt: '이메일을 쓰기 전에 생각한 것에 ✓ 하세요.', options: ['받는 사람이 누구인지 생각했어요.', '그 사람에게 알맞은 인사를 골랐어요.'] },
      { type: 'short', prompt: '이웃 어른께 쓰는 이메일의 첫 줄을 영어로 쓰세요.' },
    ],
    easyNote: '선생님과 어른께는 Dear, 친한 친구에게는 Hi를 써도 좋아요.',
    easy: [
      { type: 'choice', prompt: '친한 친구에게 알맞은 첫 줄에 ○ 하세요.', options: ['Hi Jun,', 'Dear Principal,'], answer: 'Hi Jun,' },
      { type: 'table', prompt: '알맞은 맺음말을 쓰세요.', columns: ['받는 사람', '맺음말'], cells: [['선생님', ''], ['할머니', '']], answer: 'Best wishes, / With love,' },
      { type: 'short', prompt: 'Dear ___, 에 받는 사람을 넣어 쓰세요.' },
    ],
    diff: {
      easy: '알맞은 말을 고르면 초록 테두리와 받는 사람의 반응이 보이고, 틀리면 까닭을 말해 주고 되돌려요.',
      base: '결과 글을 읽고 내가 고른 말이 알맞았는지 스스로 판단해요.',
      challenge: '교장 선생님·이웃 어른·선배처럼 처음 보는 받는 사람에 맞춰야 해요.',
    },
    notes: '자주 보이는 어려움: ① 편한 말투가 가장 다정하다고 여겨 누구에게나 쓴다 → 선생님께 쓴 편한 글을 읽은 선생님의 기분을 말하게 한다. ② 모든 이메일을 Dear 로만 시작해야 한다고 여긴다 → 친한 친구에게는 Hi 도 가능하다고 알려 준다. ③ Love 를 아무에게나 쓴다 → 가족이나 아주 가까운 사람에게 쓰는 말임을 알려 준다. 실제 선생님 이름은 쓰지 않고 예시 이름만 쓴다.',
  }));

  // ───────────── 4차시 (extend) 이메일 한 통 완성하기 ─────────────
  L.push(lesson(4, {
    title: '빈칸을 채워 이메일 한 통을 완성하고 빠진 곳 점검하기',
    objective: '인사·본문·맺음말과 보내는 사람 이름을 갖춘 이메일을 빈칸을 채워 완성하고, 빠진 부분을 찾아 점검할 수 있다.',
    ill: 'a finished email on a laptop surrounded by small check marks for greeting, purpose, closing, and name',
    top: 'Dear ___,', bottom: '빈칸 채워 이메일 완성', extra: [{ motif: 'house', x: 70, y: 218, color: 'peach' }, { motif: 'bird', x: 400, y: 70 }],
    introT: '"이메일에서 인사와 용건과 맺음말을 배웠지요. 오늘은 빈칸을 채워 이메일을 완성해요. 빈칸에는 어떤 낱말이 들어가야 읽는 사람이 이해할까요?" 한 줄을 칠판에 놓고 날짜·장소 같은 구체적인 낱말이 있는 문장과 없는 문장을 비교한다. 대충 쓰면 읽는 사람이 알아서 이해한다고 여기는 학생에게 "읽는 사람이 다시 물어봐야 하면 좋은 이메일이 아니에요."라고 짚는다.',
    introS: '빈칸이 있는 이메일을 읽고 읽는 사람이 이해하려면 어떤 낱말이 필요한지 말해 봐요.',
    acts: [
      act('a1', '활동 1. 빈칸에 알맞은 낱말을 넣어 이메일 완성하기', 13, 'wordcards',
        '"이 빈칸에는 사람 이름이 들어갈까요, 날짜가 들어갈까요? 앞뒤 낱말을 읽고 정해요." 빈칸 앞뒤 낱말을 단서로 삼게 한다. 같은 낱말을 여러 칸에 넣으려는 학생에게 "각 칸은 서로 다른 정보를 알려 줘요."라고 말해 준다.',
        '이메일 문장의 빈칸에 알맞은 카드를 넣어 한 통을 완성해요.', LV({ mode: 'fill' }),
        [FI('빈칸에 알맞은 카드를 넣어 이메일을 완성해 보세요.', [{ id: 'f1', label: 'Dear ___,' }, { id: 'f2', label: 'I want to ask about ___.' }, { id: 'f3', label: 'Can we meet on ___?' }, { id: 'f4', label: 'Thank you. ___ Mina' }], ['Ms. Kim', 'the science fair', 'Monday', 'Best wishes,'], { f1: 'Ms. Kim', f2: 'the science fair', f3: 'Monday', f4: 'Best wishes,' }, '앞의 낱말을 읽고 사람, 일, 요일, 맺음말 중 무엇이 들어갈지 정해 보세요.', 0),
         FI('빈칸에 알맞은 카드를 넣어 이메일을 완성해 보세요.', [{ id: 'f1', label: 'Hi ___,' }, { id: 'f2', label: 'Do you want to join ___?' }, { id: 'f3', label: 'We meet at ___.' }, { id: 'f4', label: '___ Sora' }], ['Jun', 'the book club', 'the library', 'See you soon,'], { f1: 'Jun', f2: 'the book club', f3: 'the library', f4: 'See you soon,' }, '친구를 부르는 말, 모임, 장소, 맺음말을 차례로 찾아보세요.', 1),
         FI('빈칸에 알맞은 카드를 넣어 이메일을 완성해 보세요.', [{ id: 'f1', label: 'Dear ___,' }, { id: 'f2', label: 'I am writing to ___.' }, { id: 'f3', label: 'I cannot come ___.' }, { id: 'f4', label: 'Thank you for ___.' }], ['Mr. Park', 'tell you about my absence', 'tomorrow', 'your understanding'], { f1: 'Mr. Park', f2: 'tell you about my absence', f3: 'tomorrow', f4: 'your understanding' }, 'I am writing to 뒤에는 쓰는 까닭이 와요. 앞의 낱말과 이어 읽어 보세요.', 2)]),
      act('a2', '활동 2. 빠진 부분 찾기와 내 이메일 점검하기', 14, 'kitchen',
        '"이 이메일에서 없는 줄은 무엇인가요? 위에서 아래로 하나씩 찾으세요." 점검표를 손가락으로 짚으며 있는지 없는지 확인하게 한다. 이미 있는 부분까지 빠졌다고 체크하는 학생에게 "그 줄이 실제로 있나요? 한 줄씩 짚어 보세요."라고 되묻는다. 마지막에는 내가 쓴 이메일에 같은 표를 써 본다.',
        '이메일에서 빠진 부분을 모두 체크하고, 내가 쓴 이메일에도 점검표를 써 봐요.', LV0,
        [CK('이메일에서 빠진 것을 모두 골라 보세요. Hi Jun, / Can you come to my house on Sunday?', '빠진 것', [['c1', '인사'], ['c2', '용건(본문)'], ['c3', '맺음말'], ['c4', '보내는 사람 이름']], ['c3', 'c4'], '네 가지 부분을 위에서 아래로 짚으며 있는지 확인해 보세요.', 0),
         CK('이메일에서 빠진 것을 모두 골라 보세요. Dear Ms. Lee, / I cannot come tomorrow. / Best wishes,', '빠진 것', [['c1', '인사'], ['c2', '용건(본문)'], ['c3', '맺음말'], ['c4', '보내는 사람 이름']], ['c4'], '마지막 줄 다음에 사람 이름이 이어져 있는지 보세요.', 1),
         CK('이메일에서 빠진 것을 모두 골라 보세요. I need a pencil. / Sora', '빠진 것', [['c1', '인사'], ['c2', '용건(본문)'], ['c3', '맺음말'], ['c4', '보내는 사람 이름']], ['c1', 'c3'], '용건과 이름은 보여요. 시작과 끝에 오는 말이 있는지 보세요.', 2),
         CS('내가 쓴 이메일을 읽으며 모두 있는 부분에 체크해요.', '내 이메일', [['c1', '인사를 썼어요'], ['c2', '용건을 한 문장으로 썼어요'], ['c3', '맺음말을 썼어요'], ['c4', '내 이름을 썼어요']], '네 줄을 위에서 아래로 짚으며 쓴 것만 체크해 보세요.'),
         TALK('짝에게 이번 주에 보내고 싶은 이메일 한 통을 영어로 써서 보여 주세요. 짝은 인사·본문·맺음말·이름이 있는지 점검표로 확인해 줘요. 바꾸어 한 뒤 "다 했어요"를 누르세요.')]),
    ],
    wrapT: '"이메일을 다 쓴 뒤 무엇을 확인하면 좋을까요?" 두세 명의 대답을 듣고 네 가지 점검표를 칠판에 적는다. 출구 1번에서 빠진 이름 대신 인사를 고른 학생에게는 줄을 하나씩 짚으며 다시 찾게 한다.',
    exit: [
      { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '빠진 것', items: [{ id: 'c1', text: '인사' }, { id: 'c2', text: '용건(본문)' }, { id: 'c3', text: '맺음말' }, { id: 'c4', text: '보내는 사람 이름' }] }, prompt: 'Hello Mr. Han, / Can I use the gym? / Thank you. 에서 빠진 것을 골라 보세요.', target: { checklist: ['c4'] }, difficulty: 0.2 },
      { type: 'choice', prompt: '이메일을 보내기 전 가장 알맞은 점검은 무엇일까요?', options: ['인사·용건·맺음말·이름이 모두 있는지 본다', '길이가 긴지만 본다', '글자 색만 본다'], answer: 0, difficulty: 0.15, explain: '네 가지 부분이 모두 있어야 읽는 사람이 이해하기 쉬워요.' },
      { type: 'mood', prompt: '이메일 한 통을 완성하는 일은 어땠나요?' },
    ],
    wsTitle: '이메일 완성과 점검',
    ws: [
      { type: 'choice', prompt: '모든 부분을 갖춘 이메일에 ○ 하세요.', options: ['Hi Jun, Come to my house. (이름 없음)', 'Hi Jun, Come to my house. See you, Sora', 'Come to my house.'], answer: 'Hi Jun, Come to my house. See you, Sora' },
      { type: 'table', prompt: '이메일에서 빠진 부분을 찾아 쓰세요.', columns: ['이메일', '빠진 부분'], cells: [['Dear Mr. Lee, Can I ask a question? Best wishes,', ''], ['Can I ask a question? Best wishes, Mina', '']], answer: '보내는 사람 이름 / 인사' },
      { type: 'check', prompt: '내 이메일의 점검표에 ✓ 하세요.', options: ['인사', '용건', '맺음말', '이름'] },
      { type: 'short', prompt: '친구에게 보낼 이메일 용건을 영어 한 문장으로 쓰세요.' },
    ],
    easyNote: '위에서 아래로 한 줄씩 짚으며 인사·용건·맺음말·이름이 있는지 보세요.',
    easy: [
      { type: 'choice', prompt: '이메일의 맨 아래에 있어야 하는 것에 ○ 하세요.', options: ['보내는 사람 이름', '받는 사람 이름'], answer: '보내는 사람 이름' },
      { type: 'table', prompt: '빠진 부분을 쓰세요.', columns: ['이메일', '빠진 부분'], cells: [['Hi Jun, Come here. Sora', '']], answer: '맺음말' },
      { type: 'short', prompt: '내 이름을 넣어 이메일 맨 아래 줄을 쓰세요.' },
    ],
    diff: {
      easy: '맞는 카드를 넣으면 초록 테두리가 생기고, 틀리면 까닭을 말해 주고 되돌려요.',
      base: '빈칸을 모두 채우고 확인을 눌러 스스로 고쳐요.',
      challenge: '긴 용건 구절(tell you about my absence)을 앞뒤 낱말과 이어 맞춰야 해요.',
    },
    notes: '자주 보이는 어려움: ① 빈칸에 같은 낱말을 반복해 넣는다 → 칸마다 다른 정보를 알려 준다고 말해 준다. ② 이미 있는 부분까지 빠졌다고 체크한다 → 줄을 하나씩 짚으며 실제로 있는지 본다. ③ 이름을 빠뜨린다 → 보낸 사람 이름이 없으면 받는 사람이 누구인지 몰라 답장하기 어렵다고 알려 준다. 이메일 주소는 쓰지 않는다.',
  }));

    // ───────────── 5차시 (core) 초대 카드 ─────────────
  L.push(lesson(5, {
    title: '초대 카드에 꼭 들어갈 정보를 가려 순서대로 쓰기',
    objective: '초대 카드에 받는 사람·행사 알림·때·곳·답장 부탁이 들어가야 함을 알고 필요한 정보만 가려 차례대로 놓을 수 있다.',
    ill: 'a party invitation card on a table showing a date, a place, and a greeting, with balloons drawn around the card',
    top: 'You are invited!', bottom: '언제 · 어디서 · 무엇을', extra: [{ motif: 'star', x: 70, y: 70 }, { motif: 'flower', x: 400, y: 218 }],
    introT: '"친구 생일 초대를 받았는데 날짜가 없어요. 갈 수 있을까요?" 학생의 반응을 듣고 초대 카드에 꼭 필요한 정보가 무엇인지 모아 본다. 예쁘게 꾸미면 정보가 없어도 충분하다고 여기는 학생에게 "받는 사람이 올 수 있으려면 언제, 어디서, 무엇을 하는지 알아야 해요."라고 짚는다.',
    introS: '날짜가 빠진 초대 카드를 받았을 때 어떤 일이 생길지 이야기하고, 카드에 꼭 필요한 정보가 무엇일지 말해 봐요.',
    acts: [
      act('a1', '활동 1. 초대 카드에 꼭 써야 할 정보와 없어도 되는 정보 나누기', 13, 'wordcards',
        '"이 정보가 없으면 받는 사람이 곤란해질까요?" 때, 곳, 무엇을 하는지, 답장 방법은 꼭 필요한 정보로 본다. 내가 좋아하는 색이나 값 같은 것을 중요하게 여기는 학생에게 "받는 사람이 오기 위해 꼭 알아야 하는 정보인가요?"라고 되묻는다.',
        '초대 카드에 들어갈 정보 카드를 꼭 써요 칸과 없어도 돼요 칸으로 나누어요.', LV({ mode: 'sort' }),
        [SO('정보 카드를 알맞은 칸에 나누어 보세요.', [{ id: 'must', label: '꼭 써요' }, { id: 'opt', label: '없어도 돼요' }], ['Saturday, May 10, 2 p.m.', 'at my house', 'my favorite color', 'Please come to my birthday party.', 'the price of my shoes'], { must: ['Saturday, May 10, 2 p.m.', 'at my house', 'Please come to my birthday party.'], opt: ['my favorite color', 'the price of my shoes'] }, '받는 사람이 올 수 있으려면 때, 곳, 무엇을 하는지는 꼭 알아야 해요.', 0),
         SO('정보 카드를 알맞은 칸에 나누어 보세요.', [{ id: 'must', label: '꼭 써요' }, { id: 'opt', label: '없어도 돼요' }], ['Friday at 3 p.m.', 'the school hall', 'You are invited to our play.', 'my lunch menu', 'my pet name'], { must: ['Friday at 3 p.m.', 'the school hall', 'You are invited to our play.'], opt: ['my lunch menu', 'my pet name'] }, '행사에 오려면 시간과 장소가 필요해요. 점심 메뉴나 애완동물 이름은 어떤가요?', 1),
         SO('정보 카드를 알맞은 칸에 나누어 보세요.', [{ id: 'must', label: '꼭 써요' }, { id: 'opt', label: '없어도 돼요' }], ['Please come to the picnic.', 'Sunday at the river park', 'Please tell me by Friday.', 'the color of my bag', 'my phone model'], { must: ['Please come to the picnic.', 'Sunday at the river park', 'Please tell me by Friday.'], opt: ['the color of my bag', 'my phone model'] }, '올 수 있는지 알려 달라는 말도 필요해요. 카드를 받은 사람이 해야 할 일을 떠올려 보세요.', 2)]),
      act('a2', '활동 2. 초대 카드 줄을 차례대로 놓아 완성하기', 14, 'wordcards',
        '"맨 위에 받는 사람 이름, 맨 아래에 보내는 사람 이름이에요. 그 사이에서 가장 먼저 말할 것은 무엇일까요?" 초대하는 말을 먼저, 때와 곳을 다음에, 답장 부탁을 마지막에 두게 한다. 답장 부탁을 맨 앞에 두려는 학생에게 "먼저 초대하는 까닭부터 말해야 읽는 사람이 이해해요."라고 알려 준다.',
        '초대 카드 줄을 차례대로 놓고, 짝에게 처음부터 읽어 줘요.', LV({ mode: 'order' }),
        [OR('초대 카드 줄을 위에서 아래로 차례대로 놓아 보세요.', ['Please tell me by Friday.', 'It is on Saturday at two.', 'Dear Sora,', 'Please come to my party.', 'Your friend, Mina'], ['Dear Sora,', 'Please come to my party.', 'It is on Saturday at two.', 'Please tell me by Friday.', 'Your friend, Mina'], '받는 사람, 초대하는 말, 때, 답장 부탁, 보낸 사람 순서로 읽혀요.', 0),
         OR('초대 카드 줄을 위에서 아래로 차례대로 놓아 보세요.', ['Please come and enjoy.', 'It starts at ten.', 'Dear Mr. Kim,', 'Our class concert is on Friday.', 'Best wishes, Jun'], ['Dear Mr. Kim,', 'Our class concert is on Friday.', 'It starts at ten.', 'Please come and enjoy.', 'Best wishes, Jun'], '어떤 행사인지 먼저 말하고 시작 시간을 이어 말해요.', 1),
         OR('초대 카드 줄을 위에서 아래로 차례대로 놓아 보세요.', ['See you there,', 'Soo', 'Hi Mina,', 'We will have a picnic.', 'Meet at the park gate at noon.', 'Can you join us?'], ['Hi Mina,', 'We will have a picnic.', 'Can you join us?', 'Meet at the park gate at noon.', 'See you there,', 'Soo'], '물어본 뒤에 만나는 곳과 때를 말하는 차례도 가능한 경우를 생각해 앞뒤 뜻을 읽어 보세요.', 2),
         TALK('짝에게 내가 초대하고 싶은 행사 하나와 때, 곳을 영어로 말해 주세요. 짝은 카드에 꼭 쓸 정보가 빠졌는지 알려 줘요. 바꾸어 한 뒤 "다 했어요"를 누르세요.')]),
    ],
    wrapT: '"초대 카드에 꼭 쓸 것은 무엇이었나요?" 두세 명에게 듣고 받는 사람, 초대하는 말, 때, 곳, 답장 부탁, 보낸 사람으로 칠판에 정리한다. 출구 1번에서 답장 부탁을 고른 학생에게는 "받는 사람이 와도 되는지 알 수 있나요?"라고 되물어 다시 정하게 한다.',
    exit: [
      { type: 'tool', tool: 'wordcards', options: { mode: 'sort', shuffle: false, slots: [{ id: 'must', label: '꼭 써요' }, { id: 'opt', label: '없어도 돼요' }], cards: ['Sunday at 4 p.m.', 'at the gym', 'my shoe size', 'You are invited to my game.'] }, prompt: '초대 카드의 정보를 알맞은 칸에 나누어 보세요.', target: { sort: { must: ['Sunday at 4 p.m.', 'at the gym', 'You are invited to my game.'], opt: ['my shoe size'] } }, difficulty: 0.2 },
      { type: 'choice', prompt: '초대 카드에서 날짜가 빠졌을 때 일어날 수 있는 일은 무엇일까요?', options: ['받는 사람이 언제 가야 할지 몰라요', '카드가 더 예뻐져요', '아무 문제 없어요'], answer: 0, difficulty: 0.15, explain: '때를 알아야 받는 사람이 갈 수 있는지 정할 수 있어요.' },
      { type: 'mood', prompt: '초대 카드의 정보를 고르는 일은 어땠나요?' },
    ],
    wsTitle: '초대 카드 짜기',
    ws: [
      { type: 'choice', prompt: '초대 카드에 꼭 들어가야 하는 정보에 ○ 하세요.', options: ['행사 날짜와 시간', '내가 좋아하는 과자', '내 신발 값'], answer: '행사 날짜와 시간' },
      { type: 'table', prompt: '초대 카드의 줄을 보고 어떤 정보인지 쓰세요.', columns: ['카드 줄', '정보 종류'], cells: [['Dear Sora,', ''], ['It is on Saturday at two.', ''], ['Please tell me by Friday.', '']], answer: '받는 사람 / 때 / 답장 부탁' },
      { type: 'check', prompt: '내 초대 카드에 쓴 것에 ✓ 하세요.', options: ['받는 사람', '행사 이름', '때', '곳', '답장 부탁'] },
      { type: 'short', prompt: '친구를 초대하는 영어 문장 하나를 쓰세요.' },
    ],
    easyNote: '받는 사람이 와야 할 때와 곳을 알려 주는 줄이 꼭 필요해요.',
    easy: [
      { type: 'choice', prompt: '초대 카드에 꼭 필요한 줄에 ○ 하세요.', options: ['It is on Friday.', 'I like blue.'], answer: 'It is on Friday.' },
      { type: 'table', prompt: '정보 종류를 쓰세요.', columns: ['카드 줄', '정보'], cells: [['at my house', ''], ['Dear Jun,', '']], answer: '곳 / 받는 사람' },
      { type: 'short', prompt: 'Please come to my ___ . 에 행사를 넣어 쓰세요.' },
    ],
    diff: {
      easy: '맞는 칸이나 자리에 놓으면 초록 테두리가 생기고, 틀리면 까닭을 말해 주고 되돌려요.',
      base: '카드를 모두 나누거나 놓은 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '줄이 여섯 개로 늘어 물음과 안내가 섞인 순서를 읽어 가며 정해야 해요.',
    },
    notes: '자주 보이는 어려움: ① 꾸밈이 많으면 좋은 카드라고 여긴다 → 정보가 빠진 예쁜 카드와 정보가 있는 단순한 카드를 비교한다. ② 때나 곳 중 하나를 빠뜨린다 → 초대받은 사람이 갈 수 있는지 판단할 때 필요한 것을 묻는다. ③ 답장 부탁을 빠뜨린다 → 몇 명이 올지 알아야 준비할 수 있음을 말해 준다. 생일 등 개인 정보는 실제 날짜 대신 예시를 쓴다.',
  }));

  // ───────────── 6차시 (practice) 감사 카드 ─────────────
  L.push(lesson(6, {
    title: '무엇이 고마운지 구체적으로 적어 감사 카드 쓰기',
    objective: '감사 카드에 무엇이 고마운지와 그 덕분에 어떻게 되었는지를 구체적으로 쓸 수 있다.',
    ill: 'a handwritten thank-you card with a small gift box and a heart, placed on a wooden table next to a pencil',
    top: 'Thank you for ___.', bottom: '구체적으로 고마움 전하기', extra: [{ motif: 'house', x: 70, y: 218, color: 'sky' }, { motif: 'flower', x: 400, y: 218 }],
    introT: '"Thank you. 만 쓴 카드와 Thank you for teaching me how to draw. 를 쓴 카드 중 어느 쪽이 더 기분 좋을까요?" 두 카드를 읽어 주고 받는 사람의 기분을 말하게 한다. 고맙다는 말만 있으면 충분하다고 여기는 학생에게 "무엇이 고마운지 알면 받는 사람이 정말 보람을 느껴요."라고 짚는다.',
    introS: '짧은 감사 카드와 구체적인 감사 카드를 읽고 받는 사람 기분이 어떻게 다를지 말해 봐요.',
    acts: [
      act('a1', '활동 1. 감사 카드의 빈칸에 알맞은 낱말 넣기', 13, 'wordcards',
        '"고마운 일이 무엇인가요? 빈칸 앞의 for 와 to 를 보고 알맞은 낱말을 찾아보세요." 앞 낱말과 이어 읽어 말이 되는지 살피게 한다. 가장 먼저 눈에 띈 낱말을 아무 칸에나 넣는 학생에게 "읽었을 때 말이 되나요?"라고 되묻는다.',
        '감사 카드의 빈칸에 알맞은 카드를 넣어 완성하고, 소리 내어 읽어 보아요.', LV({ mode: 'fill' }),
        [FI('빈칸에 알맞은 카드를 넣어 감사 카드를 완성해 보세요.', [{ id: 'f1', label: 'Dear ___,' }, { id: 'f2', label: 'Thank you for the ___.' }, { id: 'f3', label: 'I will use it to ___.' }, { id: 'f4', label: '___ Soo' }], ['Grandpa', 'new bag', 'carry my books', 'With love,'], { f1: 'Grandpa', f2: 'new bag', f3: 'carry my books', f4: 'With love,' }, '할아버지께 보낸 선물 카드예요. 사람, 선물, 쓰임, 맺음말 순서로 이어 읽어 보세요.', 0),
         FI('빈칸에 알맞은 카드를 넣어 감사 카드를 완성해 보세요.', [{ id: 'f1', label: 'Dear ___,' }, { id: 'f2', label: 'Thank you for ___ me with math.' }, { id: 'f3', label: 'Now I can ___ fractions.' }, { id: 'f4', label: '___ Mina' }], ['Ms. Choi', 'helping', 'solve', 'Best wishes,'], { f1: 'Ms. Choi', f2: 'helping', f3: 'solve', f4: 'Best wishes,' }, '선생님께 쓴 카드예요. for 뒤에는 -ing 모양, can 뒤에는 기본 모양이 와요.', 1),
         FI('빈칸에 알맞은 카드를 넣어 감사 카드를 완성해 보세요.', [{ id: 'f1', label: 'Hi ___,' }, { id: 'f2', label: 'Thank you for ___ my pencil case.' }, { id: 'f3', label: 'You are a ___ friend.' }, { id: 'f4', label: '___ Jun' }], ['Mina', 'finding', 'kind', 'See you soon,'], { f1: 'Mina', f2: 'finding', f3: 'kind', f4: 'See you soon,' }, '잃어버린 물건을 찾아 준 친구에게 쓴 카드예요. 앞뒤 낱말을 이어 읽어 보세요.', 2)]),
      act('a2', '활동 2. 구체적으로 고마움을 전한 문장 고르기', 14, 'wordcards',
        '"누가 무엇을 해 주었는지 문장 안에서 찾을 수 있나요?" 구체적인 문장에는 해 준 일이나 그 덕분에 생긴 일이 드러난다. Thank you for everything. 이면 충분하다고 여기는 학생에게 "무엇이 고마운지 모르면 읽는 사람은 어떤 기분일까요?"라고 되묻는다. 짝 활동에서는 짝에게 고마웠던 일을 영어 한 문장으로 말해 준다.',
        '고마운 일이 구체적으로 드러난 문장만 골라요. 그다음 짝에게 영어로 고마웠던 일을 말해요.', LV({ mode: 'pick', basket: '구체적인 감사' }),
        [PK('고마운 일이 구체적으로 드러난 문장을 골라 보세요.', '구체적인 감사', [C('Thank you for everything.', '무엇이 고마운지 알 수 없어요.'), C('Thank you for teaching me how to draw a tree.'), C('Thanks!', '무엇이 고마운지 알 수 없어요.'), C('Thank you for your help.', '어떤 도움인지 알 수 없어요.')], ['Thank you for teaching me how to draw a tree.'], '무엇을 배웠는지, 무엇을 받았는지가 문장 안에 있는지 찾아보세요.', 0),
         PK('고마운 일이 구체적으로 드러난 문장을 골라 보세요.', '구체적인 감사', [C('You are great.', '고마운 일이 드러나지 않아요.'), C('Thank you for lending me your umbrella on the rainy day.'), C('I am so happy.', '고마운 일이 드러나지 않아요.'), C('Thank you very much.', '무엇이 고마운지 알 수 없어요.')], ['Thank you for lending me your umbrella on the rainy day.'], '언제, 무엇을 해 주었는지 나오는 문장을 골라 보세요.', 1),
         PK('고마운 일이 구체적으로 드러난 문장을 모두 골라 보세요.', '구체적인 감사', [C('Thank you for the book.', '어떤 책이고 어떻게 도움이 됐는지 아직 부족해요.'), C('Your book helped me finish my report.'), C('Thank you for coming to my party.'), C('You are nice.', '고마운 일이 드러나지 않아요.')], ['Your book helped me finish my report.', 'Thank you for coming to my party.'], '무엇을 해 줘서 나에게 어떤 일이 생겼는지 드러나는 문장도 있어요.', 2),
         TALK('짝에게 이번 주에 짝이나 선생님께 고마웠던 일 하나를 영어 한 문장으로 말해 주세요. 짝은 무엇이 고마웠는지 알 수 있는지 알려 줘요. 바꾸어 한 뒤 "다 했어요"를 누르세요.')]),
    ],
    wrapT: '"고마움을 구체적으로 쓰려면 문장에 무엇이 있어야 할까요?" 두세 명에게 듣고 무엇을 해 주었는지와 그 덕분에 어떻게 됐는지를 칠판에 쓴다. 출구 2번에서 Thank you very much. 를 고른 학생에게는 읽는 사람이 무엇을 모르는지 물어 다시 고르게 한다.',
    exit: [
      { type: 'tool', tool: 'wordcards', options: { mode: 'fill', shuffle: false, slots: [{ id: 'f1', label: 'Thank you for ___ me.' }, { id: 'f2', label: 'You are very ___.' }], cards: ['inviting', 'kind'] }, prompt: '빈칸에 알맞은 카드를 넣어 보세요.', target: { fill: { f1: 'inviting', f2: 'kind' } }, difficulty: 0.2 },
      { type: 'choice', prompt: '더 구체적인 감사 문장은 무엇일까요?', options: ['Thank you very much.', 'Thank you for fixing my bike.', 'Thanks a lot.'], answer: 1, difficulty: 0.2, explain: '무엇을 해 주었는지가 문장에 있어야 구체적이에요.' },
      { type: 'mood', prompt: '고마운 일을 구체적으로 쓰는 일은 어땠나요?' },
    ],
    wsTitle: '감사 카드 쓰기',
    ws: [
      { type: 'choice', prompt: '구체적인 감사 문장에 ○ 하세요.', options: ['Thanks!', 'Thank you for cleaning the classroom with me.', 'Thank you for everything.'], answer: 'Thank you for cleaning the classroom with me.' },
      { type: 'table', prompt: '고마운 일을 쓰고 더 구체적으로 고쳐 쓰세요.', columns: ['처음 문장', '더 구체적으로'], cells: [['Thank you for your help.', ''], ['Thank you for the gift.', '']], answer: '예) Thank you for helping me with my homework. / Thank you for the red scarf.' },
      { type: 'check', prompt: '내 감사 카드를 확인하고 ✓ 하세요.', options: ['받는 사람 이름을 썼어요.', '무엇이 고마운지 썼어요.', '맺음말과 내 이름을 썼어요.'] },
      { type: 'short', prompt: '고마운 사람에게 하고 싶은 말을 영어 두 문장으로 쓰세요.' },
    ],
    easyNote: 'Thank you for ___ . 의 빈칸에 해 준 일을 넣으면 구체적이 돼요.',
    easy: [
      { type: 'choice', prompt: '구체적인 감사 문장에 ○ 하세요.', options: ['Thank you.', 'Thank you for the pen.'], answer: 'Thank you for the pen.' },
      { type: 'table', prompt: '해 준 일을 넣어 쓰세요.', columns: ['문장', '해 준 일'], cells: [['Thank you for the ___.', '']], answer: '예) cake' },
      { type: 'short', prompt: 'Thank you for ___ . 에 고마운 일을 넣어 쓰세요.' },
    ],
    diff: {
      easy: '맞는 카드를 넣으면 초록 테두리가 생기고, 틀리면 까닭을 말해 주고 되돌려요.',
      base: '카드를 모두 넣거나 고른 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '고마운 일과 그 덕분에 생긴 일을 함께 말하는 문장까지 찾아야 해요.',
    },
    notes: '자주 보이는 어려움: ① Thank you very much. 만 쓰면 정중하다고 여긴다 → 무엇이 고마운지 알 수 없으면 받는 사람이 느끼는 것을 묻는다. ② for 뒤에 동사를 기본 모양으로 쓴다 → for 뒤에는 -ing 나 명사가 온다는 것을 예로 보여 준다. ③ 선물만 고맙다고 쓰고 다른 도움을 빠뜨린다 → 마음을 전하는 일에는 사람의 행동도 있음을 말해 준다. 실제 선물 이름이나 개인 정보는 쓰지 않는다.',
  }));

  // ───────────── 7차시 (extend) 말투 맞춰 고쳐 쓰기 ─────────────
  L.push(lesson(7, {
    title: '카드 문장을 받는 사람에게 맞는 말투로 고쳐 쓰기',
    objective: '같은 내용도 선생님께 쓸 때와 친구에게 쓸 때 문장의 말투가 달라짐을 알고 받는 사람에 맞게 고쳐 쓸 수 있다.',
    ill: 'two speech bubbles carrying the same message, one polite with a bow and one casual with a wave, facing different people',
    top: 'Please / Could you', bottom: '받는 사람에 맞는 말투', extra: [{ motif: 'tree', x: 70, y: 214 }, { motif: 'cloud', x: 400, y: 70 }],
    introT: '"같은 부탁이라도 짝에게 하는 말과 교장 선생님께 하는 말이 같을까요?" 두 가지를 말해 보게 하고 어느 말이 어울리는지 정한다. 공손하게 말하는 방법이 따로 없다고 여기는 학생에게 "Please 를 붙이거나 Could you …? 로 바꾸면 훨씬 공손해져요."라고 짚는다.',
    introS: '같은 부탁을 짝에게 할 때와 교장 선생님께 할 때 말이 어떻게 달라질지 이야기해 봐요.',
    acts: [
      act('a1', '활동 1. 공손한 말과 편한 말 나누기', 13, 'wordcards',
        '"이 말을 교장 선생님께 하면 어떨까요? 친구에게 하면 어떨까요?" 소리 내어 읽어 보며 어느 쪽에 어울리는지 정한다. 선생님께 쓸 때는 길게만 쓰면 공손하다고 여기는 학생에게 "길이가 아니라 Please, Could you, would like 같은 말이 공손함을 만들어요."라고 짚는다.',
        '문장 카드를 선생님께 어울리는 칸과 친구에게 어울리는 칸으로 나누어요.', LV({ mode: 'sort' }),
        [SO('문장을 알맞은 칸에 나누어 보세요.', [{ id: 'teacher', label: '선생님께 어울려요' }, { id: 'friend', label: '친구에게 어울려요' }], ['Could you please help me?', 'Help me now.', 'Thank you very much.', 'Thanks a lot!'], { teacher: ['Could you please help me?', 'Thank you very much.'], friend: ['Help me now.', 'Thanks a lot!'] }, '부탁할 때 Could you please 가 들어가면 더 정중해요.', 0),
         SO('문장을 알맞은 칸에 나누어 보세요.', [{ id: 'teacher', label: '선생님께 어울려요' }, { id: 'friend', label: '친구에게 어울려요' }], ['I would like to invite you.', 'Come to my party!', 'I hope you can come.', 'Be there!'], { teacher: ['I would like to invite you.', 'I hope you can come.'], friend: ['Come to my party!', 'Be there!'] }, '느낌표로 힘차게 말하는 짧은 말은 친구에게 어울려요.', 1),
         SO('문장을 알맞은 칸에 나누어 보세요.', [{ id: 'teacher', label: '선생님께 어울려요' }, { id: 'friend', label: '친구에게 어울려요' }], ['Sorry I was late.', 'I am very sorry for being late.', 'Can I borrow this?', 'May I borrow this, please?', 'See ya!', 'Take care.'], { teacher: ['I am very sorry for being late.', 'May I borrow this, please?', 'Take care.'], friend: ['Sorry I was late.', 'Can I borrow this?', 'See ya!'] }, 'May I …, please 와 I am very sorry 같은 말이 정중해요.', 2)]),
      act('a2', '활동 2. 편한 문장을 공손한 문장으로 고쳐 짝짓기', 14, 'wordcards',
        '"왼쪽 문장을 선생님께 보내는 말로 바꾸면 어느 문장일까요?" 고친 문장에서 바뀐 낱말에 동그라미를 치게 한다. 낱말을 하나도 안 바꾸고 부호만 붙이는 학생에게 "Please, Could, would 같은 말이 들어갔나요?"라고 묻는다.',
        '친구에게 쓴 편한 문장과 선생님께 쓸 공손한 문장을 짝지어요. 바뀐 낱말을 짝과 말해요.', LV({ mode: 'match' }),
        [MA('편한 문장과 공손하게 고친 문장을 짝지어 보세요.', [{ id: 'w1', label: 'Come to my party!' }, { id: 'w2', label: 'Give me your pen.' }, { id: 'w3', label: 'Thanks a lot!' }], ['Thank you very much.', 'I would like to invite you to my party.', 'Could you lend me your pen, please?'], { w1: 'I would like to invite you to my party.', w2: 'Could you lend me your pen, please?', w3: 'Thank you very much.' }, '공손한 문장에서 would like, Could you, please 같은 낱말을 찾아 보세요.', 0),
         MA('편한 문장과 공손하게 고친 문장을 짝지어 보세요.', [{ id: 'w1', label: 'Tell me the time.' }, { id: 'w2', label: 'Wait here.' }, { id: 'w3', label: 'I want your help.' }], ['Could you please wait here?', 'Could you tell me the time, please?', 'I would like your help.'], { w1: 'Could you tell me the time, please?', w2: 'Could you please wait here?', w3: 'I would like your help.' }, '명령하는 문장을 부탁하는 문장으로 바꾼 것을 찾아보세요.', 1),
         MA('편한 문장과 공손하게 고친 문장을 짝지어 보세요.', [{ id: 'w1', label: 'Sorry I forgot.' }, { id: 'w2', label: 'I need more time.' }, { id: 'w3', label: 'See ya!' }, { id: 'w4', label: 'Can I go?' }], ['May I go, please?', 'I am very sorry I forgot.', 'Take care.', 'Could I have more time?'], { w1: 'I am very sorry I forgot.', w2: 'Could I have more time?', w3: 'Take care.', w4: 'May I go, please?' }, '사과, 시간 부탁, 헤어지는 말, 허락 구하는 말의 공손한 버전을 가려 보세요.', 2),
         TALK('짝에게 친구에게 하는 짧은 부탁을 영어로 말하고, 짝은 선생님께 하는 말로 고쳐 말해 줘요. 바꾸어 한 뒤 "다 했어요"를 누르세요.')]),
    ],
    wrapT: '"선생님께 쓸 때 문장에 넣으면 좋은 말은 무엇이었나요?" 학생이 말한 Please, Could you, would like 를 칠판에 쓴다. 출구 1번에서 Help me. 를 공손한 문장으로 고른 학생에게는 선생님이 들었을 때 느낌을 말해 보게 한다.',
    exit: [
      { type: 'tool', tool: 'wordcards', options: { mode: 'sort', shuffle: false, slots: [{ id: 'teacher', label: '선생님께 어울려요' }, { id: 'friend', label: '친구에게 어울려요' }], cards: ['Could you please open it?', 'Open it now.', 'Thank you very much.', 'Thanks!'] }, prompt: '문장을 알맞은 칸에 나누어 보세요.', target: { sort: { teacher: ['Could you please open it?', 'Thank you very much.'], friend: ['Open it now.', 'Thanks!'] } }, difficulty: 0.2 },
      { type: 'choice', prompt: '"Give me water." 를 공손하게 고친 문장은 무엇일까요?', options: ['Water!', 'Could I have some water, please?', 'Give me water now.'], answer: 1, difficulty: 0.2, explain: 'Could I have …, please? 가 공손한 부탁 모양이에요.' },
      { type: 'mood', prompt: '받는 사람에 맞게 말투를 바꾸는 일은 어땠나요?' },
    ],
    wsTitle: '말투 바꾸기',
    ws: [
      { type: 'choice', prompt: '선생님께 쓰기에 알맞은 문장에 ○ 하세요.', options: ['Be quiet!', 'Could you please wait a moment?', 'Hurry up!'], answer: 'Could you please wait a moment?' },
      { type: 'table', prompt: '친구에게 쓰는 문장을 선생님께 쓰는 문장으로 고쳐 쓰세요.', columns: ['친구에게', '선생님께'], cells: [['Give me a pen.', ''], ['Come to my class!', '']], answer: '예) Could you give me a pen, please? / I would like to invite you to my class.' },
      { type: 'check', prompt: '공손하게 고칠 때 한 일에 ✓ 하세요.', options: ['Please 를 넣었어요.', 'Could you / would like 를 사용했어요.'] },
      { type: 'short', prompt: '교장 선생님께 하고 싶은 부탁 하나를 영어로 공손하게 쓰세요.' },
    ],
    easyNote: 'Please 를 붙이거나 Could you …? 로 바꾸면 훨씬 공손해져요.',
    easy: [
      { type: 'choice', prompt: '선생님께 알맞은 문장에 ○ 하세요.', options: ['Wait!', 'Please wait.'], answer: 'Please wait.' },
      { type: 'table', prompt: '공손하게 고쳐 쓰세요.', columns: ['편한 문장', '공손한 문장'], cells: [['Help me.', '']], answer: '예) Could you help me, please?' },
      { type: 'short', prompt: 'Could you ___, please? 에 부탁할 일을 넣어 쓰세요.' },
    ],
    diff: {
      easy: '맞는 칸에 넣으면 초록 테두리가 생기고, 틀리면 까닭을 말해 주고 되돌려요.',
      base: '카드를 모두 나누거나 짝지은 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '사과·허락·헤어짐 같은 여러 상황의 공손한 말까지 찾아야 해요.',
    },
    notes: '자주 보이는 어려움: ① 길게만 쓰면 공손하다고 여긴다 → 길이가 아니라 어떤 낱말이 정중함을 만드는지 짚어 준다. ② 선생님께도 친구처럼 짧게 쓴다 → 받는 사람이 느끼는 기분을 말해 보게 한다. ③ 친구에게 지나치게 딱딱한 말을 쓴다 → 친한 친구에게는 편한 말도 괜찮다고 알려 준다. 말투를 놀리는 놀이로 바꾸지 않도록 한다.',
  }));

  // ───────────── 8차시 (extend) 본보기 고쳐 쓰기 ─────────────
  L.push(lesson(8, {
    title: '본보기 카드에서 바꿀 곳을 찾아 내 카드로 고쳐 쓰기',
    objective: '본보기 카드의 틀은 살리고 받는 사람·행사·때·곳 같은 내 정보를 넣어 새 카드로 고쳐 쓸 수 있다.',
    ill: 'a model card on the left and a new card on the right with only a few words changed and highlighted in yellow',
    top: 'Change your own words', bottom: '틀은 그대로, 내용은 내 것으로', extra: [{ motif: 'flower', x: 80, y: 214 }, { motif: 'star', x: 400, y: 70 }],
    introT: '"본보기 카드를 그대로 옮겨 쓰면 내 카드가 될까요? 어디를 바꿔야 내 이야기가 될까요?" 칠판의 본보기 카드에서 이름, 행사, 요일에 색깔 분필로 밑줄을 긋는다. 본보기를 그대로 베껴 쓰면 충분하다고 여기는 학생에게 "틀은 빌리되 이름과 때, 곳은 내 것으로 바꿔야 받는 사람에게 닿아요."라고 짚는다.',
    introS: '본보기 카드를 보고 내 카드로 바꿀 때 어디를 바꾸고 어디를 그대로 둘지 말해 봐요.',
    acts: [
      act('a1', '활동 1. 초대에 답장하는 카드의 빈칸 채우기', 13, 'wordcards',
        '"받은 카드의 때와 곳을 읽고 내 답장에 꼭 필요한 낱말만 넣어요." 받은 카드 정보를 본보기로 삼아 내 답을 쓰게 한다. 날짜를 틀리게 옮기는 학생에게 "받은 카드를 다시 읽고 요일과 시간을 짚어 보세요."라고 말해 준다.',
        '초대 카드를 읽고 답장의 빈칸에 알맞은 카드를 넣어 완성해요.', LV({ mode: 'fill' }),
        [FI('Jun의 초대: 토요일 3시, Jun의 집 생일 파티. 가겠다는 답장을 완성해 보세요.', [{ id: 'f1', label: 'Dear ___,' }, { id: 'f2', label: 'Thank you for inviting me to your ___.' }, { id: 'f3', label: 'I can come on ___ at three.' }, { id: 'f4', label: '___ Mina' }], ['Jun', 'birthday party', 'Saturday', 'Best wishes,'], { f1: 'Jun', f2: 'birthday party', f3: 'Saturday', f4: 'Best wishes,' }, '받은 카드의 사람, 행사, 요일을 찾아 답장에 그대로 옮겨요.', 0),
         FI('Sora의 초대: 금요일, 학교 강당 연극. 못 간다는 답장을 완성해 보세요.', [{ id: 'f1', label: 'Dear ___,' }, { id: 'f2', label: 'Thank you for the ___.' }, { id: 'f3', label: 'I am sorry, but I ___ come on Friday.' }, { id: 'f4', label: 'I have a piano ___.' }], ['Sora', 'invitation', 'cannot', 'lesson'], { f1: 'Sora', f2: 'invitation', f3: 'cannot', f4: 'lesson' }, '못 가는 답장이에요. 초대에 고마워하고, 못 가는 까닭을 말해요.', 1),
         FI('Ms. Han의 초대: 월요일 오후, 도서관 독서 모임. 질문하는 답장을 완성해 보세요.', [{ id: 'f1', label: 'Dear ___,' }, { id: 'f2', label: 'I would like to join the ___.' }, { id: 'f3', label: 'Should I bring ___?' }, { id: 'f4', label: 'Please tell me the ___.' }], ['Ms. Han', 'reading club', 'a book', 'place'], { f1: 'Ms. Han', f2: 'reading club', f3: 'a book', f4: 'place' }, '모임에 가고 싶다고 하고, 준비물과 장소를 묻는 카드예요.', 2)]),
      act('a2', '활동 2. 내 카드로 바꿀 때 고칠 곳 찾기', 14, 'kitchen',
        '"본보기에서 내 이야기와 다른 곳만 바꿔요. 틀이 되는 문장은 그대로 써도 돼요." 바꿀 곳과 그대로 둘 곳을 하나씩 따져 보게 한다. 모든 낱말을 새로 쓰려는 학생에게 "Please come to … 같은 틀은 그대로 써도 좋아요."라고 말해 준다.',
        '본보기 카드를 내 카드로 바꿀 때 고쳐야 할 곳을 모두 체크하고, 마지막에 내 카드를 스스로 점검해요.', LV0,
        [CK('본보기: Dear Sora, Please come to my birthday party on Saturday at my house. Mina. 반 음악회에 Jun을 초대한다면 바꿀 곳을 모두 골라 보세요.', '바꿀 곳', [['c1', '받는 사람 이름'], ['c2', '행사 이름'], ['c3', 'Please come to 틀'], ['c4', '요일'], ['c5', '보내는 사람 이름']], ['c1', 'c2', 'c4', 'c5'], '내 이야기와 다른 곳이 바꿀 곳이에요. Please come to 같은 틀은 그대로 쓸 수 있어요.', 0),
         CK('본보기: Thank you for the pencil case. I will use it every day. 선물이 책이라면 바꿀 곳을 모두 골라 보세요.', '바꿀 곳', [['c1', 'pencil case'], ['c2', 'Thank you for'], ['c3', 'use it every day'], ['c4', 'I will']], ['c1', 'c3'], '선물 이름과 쓰임이 달라져요. 고마움을 전하는 틀은 어떨까요?', 1),
         CK('본보기: Hi Jun, Can you come to my house on Friday? See you, Mina. 장소를 도서관으로 바꾼다면 고칠 곳을 모두 골라 보세요.', '바꿀 곳', [['c1', 'my house'], ['c2', 'Can you come to'], ['c3', 'Friday'], ['c4', 'See you']], ['c1'], '장소만 바뀌어요. 나머지는 그대로 두어도 되는지 따져 보세요.', 2),
         CS('내가 쓴 카드를 읽으며 지킨 것에 체크해요.', '내 카드', [['c1', '받는 사람 이름을 내 상황에 맞게 바꿨어요'], ['c2', '때와 곳이 내 이야기예요'], ['c3', '본보기 문장을 그대로 베끼지 않았어요']], '본보기와 비교해 내 이야기로 바뀐 곳을 짚어 보세요.'),
         TALK('짝에게 내가 쓴 카드가 본보기와 어디가 달라졌는지 두 곳만 말해 주세요. 짝은 내 이야기가 담겼는지 알려 줘요. 바꾸어 한 뒤 "다 했어요"를 누르세요.')]),
    ],
    wrapT: '"본보기에서 그대로 쓴 곳과 바꾼 곳은 어디였나요?" 두세 명이 말한 것을 칠판 표에 정리한다. 출구 1번에서 Please come to 까지 바꾼 학생에게는 틀이 되는 문장은 그대로 써도 됨을 다시 말해 준다.',
    exit: [
      { type: 'tool', tool: 'kitchen', options: { mode: 'checklist', title: '바꿀 곳', items: [{ id: 'c1', text: '받는 사람 이름' }, { id: 'c2', text: 'Thank you for' }, { id: 'c3', text: '선물 이름' }] }, prompt: '본보기: Dear Mom, Thank you for the cake. 선물이 꽃이고 받는 사람이 할머니라면 바꿀 곳을 모두 골라 보세요.', target: { checklist: ['c1', 'c3'] }, difficulty: 0.2 },
      { type: 'choice', prompt: '본보기를 내 카드로 바꾸는 방법으로 알맞은 것은 무엇일까요?', options: ['똑같이 베껴 쓴다', '내 이야기에 맞게 필요한 낱말을 바꾼다', '모든 문장을 지운다'], answer: 1, difficulty: 0.15, explain: '틀은 살리고 내 이야기에 해당하는 낱말만 바꾸면 빠르고 정확해요.' },
      { type: 'mood', prompt: '본보기를 내 카드로 바꾸는 일은 어땠나요?' },
    ],
    wsTitle: '본보기에서 내 카드로',
    ws: [
      { type: 'choice', prompt: '본보기를 바르게 고친 카드에 ○ 하세요.', options: ['본보기와 똑같이 쓴 카드', '받는 사람과 행사만 내 것으로 바꾼 카드', '아무것도 쓰지 않은 카드'], answer: '받는 사람과 행사만 내 것으로 바꾼 카드' },
      { type: 'table', prompt: '본보기에서 바꿀 곳을 쓰세요.', columns: ['본보기', '내 카드에서 바꿀 곳'], cells: [['Dear Mina, Please come to my party on Sunday.', ''], ['Thank you for the book, Grandpa.', '']], answer: '받는 사람, 행사, 요일 / 선물 이름, 받는 사람' },
      { type: 'check', prompt: '내 카드를 확인하고 ✓ 하세요.', options: ['받는 사람이 내 상황에 맞아요.', '때와 곳이 내 이야기예요.', '본보기를 그대로 베끼지 않았어요.'] },
      { type: 'short', prompt: '본보기를 보고 내 초대 카드의 첫 두 줄을 영어로 쓰세요.' },
    ],
    easyNote: '내 이야기와 다른 낱말만 바꿔요. 틀이 되는 문장은 그대로 써도 돼요.',
    easy: [
      { type: 'choice', prompt: '바꿔야 하는 낱말에 ○ 하세요. (본보기: Dear Sora, ...)', options: ['Dear', 'Sora'], answer: 'Sora' },
      { type: 'table', prompt: '내 이름으로 바꿔 쓰세요.', columns: ['본보기', '내 카드'], cells: [['Dear Sora,', '']], answer: '예) Dear Jun,' },
      { type: 'short', prompt: '내가 초대하고 싶은 사람 이름을 넣어 Dear ___, 를 쓰세요.' },
    ],
    diff: {
      easy: '맞는 카드를 넣으면 초록 테두리가 생기고, 틀리면 까닭을 말해 주고 되돌려요.',
      base: '빈칸을 모두 채우거나 체크한 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '고마움 인사·사과·질문이 함께 들어간 답장의 빈칸을 모두 채워야 해요.',
    },
    notes: '자주 보이는 어려움: ① 본보기를 그대로 옮겨 쓰고 내 정보를 넣지 않는다 → 본보기 카드와 내 카드를 나란히 놓고 달라진 곳을 세어 보게 한다. ② 틀이 되는 문장까지 모두 바꾼다 → 틀은 빌려 써도 됨을 알려 준다. ③ 날짜나 요일을 틀리게 옮긴다 → 받은 카드를 다시 읽고 손가락으로 짚게 한다. 학생 실명과 연락처는 쓰지 않는다.',
  }));

    // ───────────── 9차시 (core) 경험 글 초안 ─────────────
  L.push(lesson(9, {
    title: '있었던 일과 느낌을 차례대로 담아 경험 글 초안 쓰기',
    objective: '때와 곳, 일어난 일의 차례, 그때의 느낌을 담아 다섯 문장 안팎의 경험 글 초안을 구성할 수 있다.',
    ill: 'a child sitting at a desk writing a short diary entry with a small sun drawing and numbered sentence strips lined up neatly',
    top: 'Last Sunday, I went ...', bottom: '때 · 일 · 느낌', extra: [{ motif: 'tree', x: 70, y: 214 }, { motif: 'bird', x: 400, y: 70 }],
    introT: '"기억에 남는 하루를 영어로 쓴다면 첫 문장에 무엇을 쓰면 좋을까요?" 학생 몇 명의 대답을 듣고 때와 곳, 한 일, 느낌을 칠판에 정리한다. 초고를 한 번 쓰면 그것이 완성된 글이라고 여기는 학생에게 "초고는 처음 생각을 모아 둔 것이에요. 읽고 고쳐야 더 좋은 글이 돼요."라고 짚는다.',
    introS: '기억에 남는 하루를 떠올리고 영어로 쓴다면 첫 문장에 무엇을 쓸지 말해 봐요.',
    acts: [
      act('a1', '활동 1. 일어난 일을 차례대로 놓아 글의 흐름 만들기', 13, 'wordcards',
        '"먼저 한 일이 맨 위, 나중에 한 일이 맨 아래예요. First, Then, Finally 를 단서로 찾으세요." 차례를 나타내는 낱말과 시간을 알려 주는 말을 단서로 삼게 한다. 일어난 순서와 관계없이 기억나는 순서대로 쓰려는 학생에게 "읽는 사람이 따라갈 수 있는 순서가 필요해요."라고 말해 준다.',
        '경험 글 문장 카드를 일어난 차례대로 놓고, 소리 내어 읽어 어색한 곳을 찾아요.', LV({ mode: 'order' }),
        [OR('경험 글의 문장을 일어난 차례대로 놓아 보세요.', ['Finally, we went home.', 'Then, we ate sandwiches.', 'First, we flew a kite.', 'Last Sunday, I went to the river park.'], ['Last Sunday, I went to the river park.', 'First, we flew a kite.', 'Then, we ate sandwiches.', 'Finally, we went home.'], '때와 곳을 먼저 말한 뒤 First, Then, Finally 로 이어 가요.', 0),
         OR('경험 글의 문장을 일어난 차례대로 놓아 보세요.', ['It was a fun day.', 'Next, we drew pictures.', 'First, we saw old tools.', 'Last week, my class visited a museum.'], ['Last week, my class visited a museum.', 'First, we saw old tools.', 'Next, we drew pictures.', 'It was a fun day.'], '글을 시작하는 문장과 마무리하는 느낌 문장의 자리를 먼저 정해 보세요.', 1),
         OR('경험 글의 문장을 일어난 차례대로 놓아 보세요.', ['I felt happy.', 'The cookies were sweet.', 'I baked cookies with Dad.', 'I stayed home.', 'Yesterday, it rained all day.'], ['Yesterday, it rained all day.', 'I stayed home.', 'I baked cookies with Dad.', 'The cookies were sweet.', 'I felt happy.'], '날씨와 때가 먼저, 한 일이 다음, 맛과 느낌이 마지막에 와요.', 2)]),
      act('a2', '활동 2. 일어난 일과 그때의 느낌 가르기', 14, 'wordcards',
        '"이 문장은 일어난 일인가요, 그때 내 마음인가요?" 사실과 느낌을 나누어 보게 한다. 느낌 문장이 없어도 좋은 글이라고 여기는 학생에게 "일어난 일만 있으면 일기가 아니라 기록 같아요. 마음이 들어가야 내 글이 돼요."라고 짚는다. 초고를 쓸 때 일과 느낌을 번갈아 쓰게 한다.',
        '문장 카드를 있었던 일 칸과 그때의 느낌 칸으로 나누고, 이어서 내 초고를 다섯 문장으로 써 봐요.', LV({ mode: 'sort' }),
        [SO('문장을 알맞은 칸에 나누어 보세요.', [{ id: 'event', label: '있었던 일' }, { id: 'feel', label: '그때의 느낌' }], ['I won the race.', 'I felt proud.', 'We ran in the park.', 'It was exciting.'], { event: ['I won the race.', 'We ran in the park.'], feel: ['I felt proud.', 'It was exciting.'] }, 'felt, was exciting 처럼 마음을 나타내는 낱말이 있는지 보세요.', 0),
         SO('문장을 알맞은 칸에 나누어 보세요.', [{ id: 'event', label: '있었던 일' }, { id: 'feel', label: '그때의 느낌' }], ['I forgot my lunch.', 'I was worried.', 'Jun shared his rice.', 'I felt thankful.'], { event: ['I forgot my lunch.', 'Jun shared his rice.'], feel: ['I was worried.', 'I felt thankful.'] }, '행동을 말하는 문장과 마음을 말하는 문장을 가려 보세요.', 1),
         SO('문장을 알맞은 칸에 나누어 보세요.', [{ id: 'event', label: '있었던 일' }, { id: 'feel', label: '그때의 느낌' }], ['We cleaned the beach.', 'I was tired.', 'We found a shell.', 'It was fun.', 'I took a picture.'], { event: ['We cleaned the beach.', 'We found a shell.', 'I took a picture.'], feel: ['I was tired.', 'It was fun.'] }, '느낌 문장은 보통 was, felt 로 마음을 말해요.', 2),
         TALK('기억에 남는 하루를 영어 다섯 문장으로 써 보세요. 때와 곳, 한 일 두세 가지, 느낌을 담아요. 다 쓴 뒤 소리 내어 한 번 읽고 "다 했어요"를 누르세요.')]),
    ],
    wrapT: '"경험 글에는 어떤 내용이 들어가나요?" 두세 명이 말하는 때와 곳, 한 일, 느낌을 칠판에 적는다. 출구 1번에서 느낌 문장을 중간에 놓은 학생에게는 글을 처음부터 소리 내어 읽으며 흐름이 자연스러운지 물어본다.',
    exit: [
      { type: 'tool', tool: 'wordcards', options: { mode: 'order', shuffle: false, cards: ['It was delicious.', 'Then, we ate rice cakes.', 'Last winter, we visited Grandma.'] }, prompt: '경험 글의 문장을 일어난 차례대로 놓아 보세요.', target: { order: ['Last winter, we visited Grandma.', 'Then, we ate rice cakes.', 'It was delicious.'] }, difficulty: 0.2 },
      { type: 'choice', prompt: '경험 글 첫 문장으로 가장 알맞은 것은 무엇일까요?', options: ['I felt happy.', 'Last Sunday, I went to the zoo.', 'Then, we went home.'], answer: 1, difficulty: 0.15, explain: '때와 곳이 들어가면 읽는 사람이 어떤 이야기인지 알 수 있어요.' },
      { type: 'mood', prompt: '경험 글 초안을 쓰는 일은 어땠나요?' },
    ],
    wsTitle: '경험 글 초안',
    ws: [
      { type: 'choice', prompt: '느낌을 나타내는 문장에 ○ 하세요.', options: ['We went to the zoo.', 'I felt excited.', 'We saw a lion.'], answer: 'I felt excited.' },
      { type: 'table', prompt: '경험 글에 들어갈 내용을 짧게 영어로 쓰세요.', columns: ['넣을 내용', '내 문장'], cells: [['때와 곳', ''], ['한 일', ''], ['그때의 느낌', '']], answer: '예) Last Sunday, I went to the park. / We flew a kite. / I felt happy.' },
      { type: 'check', prompt: '내 초고에 들어간 것에 ✓ 하세요.', options: ['때와 곳', '일어난 차례', '그때의 느낌'] },
      { type: 'short', prompt: '내 경험 글의 첫 문장을 영어로 쓰세요.' },
    ],
    easyNote: '때와 곳을 먼저 쓰고, 한 일을 차례로 쓴 뒤, 마지막에 느낌을 써요.',
    easy: [
      { type: 'choice', prompt: '느낌을 나타내는 문장에 ○ 하세요.', options: ['I ate lunch.', 'I was happy.'], answer: 'I was happy.' },
      { type: 'table', prompt: '내 문장을 쓰세요.', columns: ['넣을 내용', '내 문장'], cells: [['한 일', '']], answer: '예) We played soccer.' },
      { type: 'short', prompt: 'Last ___, I went to ___ . 를 채워 쓰세요.' },
    ],
    diff: {
      easy: '맞는 자리에 놓으면 초록 테두리가 생기고, 틀리면 까닭을 말해 주고 되돌려요.',
      base: '카드를 모두 놓거나 나눈 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '문장이 다섯 개로 늘고 일과 느낌이 섞여 있어 더 꼼꼼히 가려내야 해요.',
    },
    notes: '자주 보이는 어려움: ① 초고를 한 번 쓰면 완성된 글이라고 여긴다 → 처음 쓴 글을 소리 내어 읽고 고칠 곳이 있는지 보게 한다. ② 일어난 순서를 뒤섞어 쓴다 → First, Then, Finally 를 단서로 삼아 차례를 정하게 한다. ③ 느낌 문장을 쓰지 않는다 → 일어난 일만 있는 글과 느낌이 담긴 글을 비교해 읽게 한다. 개인적인 아픈 경험은 억지로 쓰게 하지 않고 즐거웠던 하루를 고르도록 안내한다.',
  }));

  // ───────────── 10차시 (practice) 의견 받아 고치기 ─────────────
  L.push(lesson(10, {
    title: '친구의 의견을 받아 경험 글의 문장 고쳐 쓰기',
    objective: '친구가 준 의견을 읽고 막연한 문장을 더 구체적인 문장으로 고쳐 쓸 수 있다.',
    ill: 'two children sitting side by side reading a draft together and pointing at a sentence with a small sticky note',
    top: 'Make it clearer', bottom: '의견 받아 더 구체적으로', extra: [{ motif: 'house', x: 70, y: 218, color: 'peach' }, { motif: 'cloud', x: 400, y: 70 }],
    introT: '"친구가 내 글을 읽고 \'언제야?\' 하고 물었어요. 어떤 기분일까요? 그 말을 어떻게 활용하면 좋을까요?" 의견을 받는 일이 글을 더 좋게 만드는 방법임을 이야기한다. 친구가 고칠 곳을 말하면 내 글이 나쁘다는 뜻이라고 여기는 학생에게 "읽는 사람이 궁금한 것을 알려 주는 선물이에요."라고 짚는다.',
    introS: '친구의 질문이나 의견을 들었을 때 어떤 기분이 들지, 어떻게 쓰면 좋을지 이야기해 봐요.',
    acts: [
      act('a1', '활동 1. 더 구체적으로 고쳐 쓸 문장 골라내기', 13, 'wordcards',
        '"It was good. 이라고만 쓰면 읽는 사람이 무엇을 알 수 있나요?" 막연한 문장과 구체적인 문장을 소리 내어 비교해 읽게 한다. 막연한 문장 하나만 있어도 충분하다고 여기는 학생에게 "무엇이 좋았는지 궁금한 사람이 있을 거예요."라고 되묻는다.',
        '막연해서 더 구체적으로 고쳐야 할 문장을 모두 골라요.', LV({ mode: 'pick', basket: '고칠 문장' }),
        [PK('더 구체적으로 고쳐야 할 문장을 모두 골라 보세요.', '고칠 문장', [C('I went to the park.'), C('It was good.', '무엇이 좋았는지 알 수 없어요.'), C('We played badminton after lunch.'), C('It was nice.', '무엇이 어떻게 좋았는지 알 수 없어요.')], ['It was good.', 'It was nice.'], '무엇을 했는지 알 수 있는 문장과 막연한 느낌만 있는 문장을 가려 보세요.', 0),
         PK('더 구체적으로 고쳐야 할 문장을 모두 골라 보세요.', '고칠 문장', [C('I saw many things.', '어떤 것인지 알 수 없어요.'), C('We saw a baby elephant at the zoo.'), C('Something happened.', '무슨 일인지 알 수 없어요.'), C('Jun lost his hat in the wind.')], ['I saw many things.', 'Something happened.'], 'many things, something 같은 막연한 낱말이 있는 문장을 찾아보세요.', 1),
         PK('더 구체적으로 고쳐야 할 문장을 모두 골라 보세요.', '고칠 문장', [C('We went there.', '어디인지 알 수 없어요.'), C('We went to the science museum.'), C('I did my best.', '무엇을 열심히 했는지 알 수 없어요.'), C('I practiced the recorder for an hour.'), C('It was a day.', '어떤 날인지 알 수 없어요.')], ['We went there.', 'I did my best.', 'It was a day.'], 'there, my best, a day 같은 말이 무엇을 가리키는지 알 수 있는지 보세요.', 2),
         PK('더 구체적으로 고쳐야 할 문장을 모두 골라 보세요.', '고칠 문장', [C('I ate food.', '어떤 음식인지 알 수 없어요.'), C('We ate hot noodles in the cold.'), C('The weather was something.', '날씨가 어땠는지 알 수 없어요.'), C('It was rainy and windy.')], ['I ate food.', 'The weather was something.'], '음식과 날씨를 구체적으로 말하는 문장을 남기고 막연한 문장을 골라 보세요.', 3)]),
      act('a2', '활동 2. 친구의 의견과 고쳐 쓴 문장 짝짓기', 14, 'wordcards',
        '"친구가 어떤 의견을 주었는지 읽고, 그 의견을 받아 고친 문장을 찾아요." 의견이 무엇을 궁금해하는지 정한 뒤 고친 문장에 그 답이 들어 있는지 찾게 한다. 의견과 관계없는 문장을 고르는 학생에게 "친구의 질문에 답하는 낱말이 들어갔나요?"라고 되묻는다.',
        '친구의 의견과 그 의견을 받아 고친 문장을 짝지어요. 그다음 짝의 글에 의견을 하나 써 줘요.', LV({ mode: 'match' }),
        [MA('친구의 의견과 고친 문장을 짝지어 보세요.', [{ id: 'o1', label: '언제였는지 알려 주면 좋겠어' }, { id: 'o2', label: '그때 느낌을 더 써 줘' }, { id: 'o3', label: '무엇을 봤는지 알고 싶어' }], ['We saw a baby elephant.', 'I felt excited.', 'Last Saturday, we went to the zoo.'], { o1: 'Last Saturday, we went to the zoo.', o2: 'I felt excited.', o3: 'We saw a baby elephant.' }, '의견이 묻는 것(때, 느낌, 본 것)과 고친 문장의 내용을 연결해 보세요.', 0),
         MA('친구의 의견과 고친 문장을 짝지어 보세요.', [{ id: 'o1', label: '누구와 갔는지 궁금해' }, { id: 'o2', label: '어디에서 했는지 써 줘' }, { id: 'o3', label: '왜 기뻤는지 알고 싶어' }], ['I was happy because I won the game.', 'I went with my cousin Soo.', 'We played in the school yard.'], { o1: 'I went with my cousin Soo.', o2: 'We played in the school yard.', o3: 'I was happy because I won the game.' }, 'who, where, why 에 해당하는 낱말이 고친 문장에 들어 있는지 보세요.', 1),
         MA('친구의 의견과 고친 문장을 짝지어 보세요.', [{ id: 'o1', label: '먹은 음식 이름을 써 줘' }, { id: 'o2', label: '날씨가 어땠는지 써 줘' }, { id: 'o3', label: '끝난 뒤에 무엇을 했는지 써 줘' }, { id: 'o4', label: '느낌을 한 낱말로 써 줘' }], ['After that, we walked home.', 'It was sunny and warm.', 'I felt proud.', 'We ate kimchi fried rice.'], { o1: 'We ate kimchi fried rice.', o2: 'It was sunny and warm.', o3: 'After that, we walked home.', o4: 'I felt proud.' }, '음식, 날씨, 순서, 느낌 낱말이 각각 어느 문장에 들어 있는지 찾아보세요.', 2),
         TALK('짝의 경험 글을 읽고 \'언제?\', \'어디서?\', \'어땠어?\' 중 하나로 의견을 영어나 우리말로 말해 주세요. 받은 의견으로 내 글 한 문장을 고쳐 보고 "다 했어요"를 누르세요.')]),
    ],
    wrapT: '"친구의 의견을 받으면 글이 어떻게 달라졌나요?" 한두 명이 고치기 전과 후를 읽어 주게 한다. 출구 2번에서 Nice 같은 막연한 낱말을 그대로 둔 학생에게는 "무엇이 nice 했나요?"라고 되물어 다시 쓰게 한다.',
    exit: [
      { type: 'tool', tool: 'wordcards', options: { mode: 'match', shuffle: false, slots: [{ id: 'o1', label: '언제였는지 알려 줘' }, { id: 'o2', label: '느낌을 써 줘' }], cards: ['I felt proud.', 'Last Friday, we had a party.'] }, prompt: '친구의 의견과 고친 문장을 짝지어 보세요.', target: { match: { o1: 'Last Friday, we had a party.', o2: 'I felt proud.' } }, difficulty: 0.2 },
      { type: 'choice', prompt: '"We went there." 를 가장 잘 고친 문장은 무엇일까요?', options: ['We went there again.', 'We went to the old palace.', 'We went somewhere.'], answer: 1, difficulty: 0.2, explain: 'there 대신 장소 이름을 쓰면 읽는 사람이 어디인지 알 수 있어요.' },
      { type: 'mood', prompt: '친구의 의견을 받아 고치는 일은 어땠나요?' },
    ],
    wsTitle: '의견 받아 고치기',
    ws: [
      { type: 'choice', prompt: '더 구체적인 문장에 ○ 하세요.', options: ['It was good.', 'The pizza was hot and cheesy.', 'I ate food.'], answer: 'The pizza was hot and cheesy.' },
      { type: 'table', prompt: '막연한 문장을 더 구체적으로 고쳐 쓰세요.', columns: ['막연한 문장', '고친 문장'], cells: [['We went there.', ''], ['It was good.', '']], answer: '예) We went to the river park. / The picnic was fun.' },
      { type: 'check', prompt: '친구의 의견을 받아 한 일에 ✓ 하세요.', options: ['의견을 끝까지 읽었어요.', '의견에 답하는 낱말을 넣었어요.', '고친 문장을 소리 내어 읽었어요.'] },
      { type: 'short', prompt: '짝의 글에 쓰고 싶은 의견을 한 줄로 쓰세요.' },
    ],
    easyNote: '친구의 질문(언제? 어디서? 어땠어?)에 답하는 낱말을 넣어 고쳐요.',
    easy: [
      { type: 'choice', prompt: '더 구체적인 문장에 ○ 하세요.', options: ['I saw things.', 'I saw a rabbit.'], answer: 'I saw a rabbit.' },
      { type: 'table', prompt: '구체적으로 고쳐 쓰세요.', columns: ['처음 문장', '고친 문장'], cells: [['It was nice.', '']], answer: '예) The cake was sweet.' },
      { type: 'short', prompt: 'I felt ___ . 에 느낌을 넣어 쓰세요.' },
    ],
    diff: {
      easy: '맞는 문장을 고르거나 짝지으면 초록 테두리가 생기고, 틀리면 까닭을 말해 주고 되돌려요.',
      base: '카드를 모두 고르거나 짝지은 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '의견이 네 가지로 늘고 먹은 것·날씨·순서·느낌처럼 서로 비슷한 정보를 가려야 해요.',
    },
    notes: '자주 보이는 어려움: ① 친구의 의견은 내 글이 틀렸다는 뜻이라고 여긴다 → 읽는 사람의 궁금증을 알려 주는 선물이라고 알려 준다. ② nice, good, fun 같은 낱말만 쓴다 → 무엇이 어땠는지 더 말하게 한다. ③ 친구에게 의견을 줄 때 상처 주는 말을 쓴다 → "~를 더 써 주면 좋겠어"처럼 바람을 말하게 한다. 짝에게 의견을 줄 때는 실명이 아니라 글 내용만 말한다.',
  }));

  // ───────────── 11차시 (wrap) 단원 정리 ─────────────
  L.push(lesson(11, {
    title: '쓰고 고치는 과정을 정리하고 내 글 점검표로 평가하기',
    objective: '초고를 쓰고 읽고 의견을 받아 고치는 쓰기 과정을 차례로 말하고, 점검표로 내 글과 단원 전체를 스스로 평가할 수 있다.',
    ill: 'a desk with a first draft, a revised draft, and a checklist arranged left to right, with a child holding a pencil smiling',
    top: 'Write, Read, Fix', bottom: '쓰고 · 읽고 · 고치기', extra: [{ motif: 'flower', x: 80, y: 214 }, { motif: 'star', x: 400, y: 70 }],
    introT: '"이 단원에서 이메일, 카드, 경험 글을 썼지요. 세 글을 쓸 때 공통으로 한 일이 있나요?" 학생이 떠올린 것을 칠판에 모은다. 쓰기는 한 번 쓰면 끝이라고 여기는 학생에게 "쓰고, 읽고, 의견을 받고, 고치는 과정이 모두 쓰기예요."라고 짚는다. 오늘은 그 과정을 정리하고 스스로 평가한다.',
    introS: '이메일·카드·경험 글을 쓸 때 공통으로 한 일이 무엇인지 떠올려 말해 봐요.',
    acts: [
      act('a1', '활동 1. 글 쓰고 고치는 과정 차례대로 놓기', 13, 'wordcards',
        '"먼저 쓰고, 그다음 내가 읽고, 짝의 눈을 빌리고, 마지막으로 고쳐요. 순서를 바꾸면 어떻게 되나요?" 순서를 바꿔 보며 어색한 곳을 찾게 한다. 짝에게 먼저 보여 주면 충분하다고 여기는 학생에게 "내가 먼저 읽고 고칠 것이 있는지 보면 짝이 더 어려운 부분을 볼 수 있어요."라고 말해 준다.',
        '쓰고 고치는 단계 카드를 먼저 할 일부터 차례대로 놓아요.', LV({ mode: 'order' }),
        [OR('글을 쓰고 고치는 단계를 차례대로 놓아 보세요.', ['Fix and rewrite', 'Ask a friend to read', 'Write a first draft', 'Read it aloud'], ['Write a first draft', 'Read it aloud', 'Ask a friend to read', 'Fix and rewrite'], '혼자 쓰고 읽은 뒤 짝의 눈을 빌려 고쳐 쓰는 차례예요.', 0),
         OR('이메일을 쓰는 단계를 차례대로 놓아 보세요.', ['Add closing and name', 'Write the greeting', 'Check each part', 'Write the main message'], ['Write the greeting', 'Write the main message', 'Add closing and name', 'Check each part'], '위에서 아래로 쓴 뒤 마지막에 점검해요.', 1),
         OR('카드를 쓰는 단계를 차례대로 놓아 보세요.', ['Add date and place', 'Choose who gets it', 'Read it as the receiver', 'Write the invitation'], ['Choose who gets it', 'Write the invitation', 'Add date and place', 'Read it as the receiver'], '받는 사람을 정한 뒤 쓰고 마지막에 받는 사람이 되어 읽어 봐요.', 2)]),
      act('a2', '활동 2. 글의 빠진 곳 찾아 점검표로 평가하기', 14, 'kitchen',
        '"점검표 항목을 하나씩 읽고 글에서 정말 지켰는지 찾아보세요." 이메일, 카드, 경험 글의 점검 기준을 다시 확인한다. 점검표를 보지 않고 다 했다고 체크하는 학생에게 "글에서 그 부분을 손가락으로 짚어 보세요."라고 말해 준다. 마지막에는 자기 글을 점검하고 서로 한 가지를 칭찬한다.',
        '글에서 고칠 곳을 점검표로 찾고, 내 글을 읽으며 지킨 것에 체크해요. 짝과 칭찬 한 가지씩 나눠요.', LV0,
        [CK('이 이메일에서 고칠 곳을 모두 골라 보세요. Hi Ms. Lee, / Help me. / Soo', '고칠 곳', [['c1', '선생님께 쓰는 공손한 말'], ['c2', '맺음말'], ['c3', '받는 사람 이름'], ['c4', '보내는 사람 이름']], ['c1', 'c2'], '선생님께 쓰는 말투와 마무리 말이 있는지 보세요.', 0),
         CK('이 경험 글에서 고칠 곳을 모두 골라 보세요. I went to zoo. It was good.', '고칠 곳', [['c1', '언제 갔는지'], ['c2', '무엇을 봤는지'], ['c3', '느낌을 구체적으로'], ['c4', '글 제목']], ['c1', 'c2', 'c3'], '때, 본 것, 구체적인 느낌이 있는지 찾아보세요.', 1),
         CK('이 초대 카드에서 고칠 곳을 모두 골라 보세요. Dear Jun, Come to my party. Mina', '고칠 곳', [['c1', '때'], ['c2', '곳'], ['c3', '받는 사람 이름'], ['c4', '답장 부탁']], ['c1', 'c2', 'c4'], '초대 카드에 꼭 필요한 정보 중 빠진 것을 찾아보세요.', 2),
         CS('내가 쓴 글을 읽으며 지킨 것에 체크해요.', '내 글 점검표', [['c1', '받는 사람과 목적이 분명해요'], ['c2', '받는 사람에 맞는 말투예요'], ['c3', '때와 곳, 느낌이 구체적이에요'], ['c4', '읽고 한 곳 이상 고쳤어요']], '글에서 손가락으로 짚어 확인한 것에만 체크해 보세요.'),
         TALK('짝과 내가 쓴 글 중 하나를 바꾸어 읽고 잘 쓴 곳 한 가지를 영어나 우리말로 말해 주세요. 바꾸어 한 뒤 "다 했어요"를 누르세요.')]),
    ],
    wrapT: '"이 단원에서 가장 도움이 된 쓰기 방법은 무엇이었나요?" 두세 명의 대답을 듣고 쓰고, 읽고, 의견 받고, 고치기를 다시 정리한다. 자기 평가 문항에서 모든 칸에 같은 점수를 고른 학생에게는 가장 쉬웠던 활동과 어려웠던 활동을 하나씩 말해 보게 한다. 자기 평가는 점수가 아니라 다음 연습을 정하는 근거로 쓴다.',
    exit: [
      { type: 'tool', tool: 'emotion', options: SELF('이메일·카드·경험 글을 쓰고 읽고 고쳐 쓸 수 있어요'), prompt: '내 영어 쓰기는 어느 정도였나요? 솔직하게 골라 보세요.', target: { level: 'any' } },
      { type: 'choice', prompt: '글을 다 쓴 뒤 가장 먼저 해야 할 일은 무엇일까요?', options: ['바로 낸다', '소리 내어 읽고 고칠 곳을 찾는다', '글자만 예쁘게 다시 쓴다'], answer: 1, difficulty: 0.15, explain: '소리 내어 읽으면 빠뜨린 곳과 어색한 곳을 스스로 찾을 수 있어요.' },
      { type: 'mood', prompt: '이 단원 영어 쓰기는 어땠나요?' },
    ],
    wsTitle: '단원 정리 점검표',
    ws: [
      { type: 'choice', prompt: '쓰기 과정으로 알맞은 것에 ○ 하세요.', options: ['쓰기 → 바로 내기', '쓰기 → 읽기 → 의견 받기 → 고치기', '고치기 → 쓰기'], answer: '쓰기 → 읽기 → 의견 받기 → 고치기' },
      { type: 'table', prompt: '글의 종류별로 꼭 들어갈 것을 쓰세요.', columns: ['글의 종류', '꼭 들어갈 것'], cells: [['이메일', ''], ['초대 카드', ''], ['경험 글', '']], answer: '인사·용건·맺음말·이름 / 때·곳·답장 부탁 / 때·일·느낌' },
      { type: 'check', prompt: '이 단원에서 할 수 있게 된 것에 ✓ 하세요.', options: ['이메일의 부분을 알아요.', '받는 사람에 맞게 쓸 수 있어요.', '경험 글을 쓰고 고칠 수 있어요.'] },
      { type: 'short', prompt: '이 단원에서 가장 도움이 된 쓰기 방법을 한 문장으로 쓰세요.' },
    ],
    easyNote: '글을 쓴 뒤에는 읽고, 점검표를 보고, 한 곳 이상 고쳐요.',
    easy: [
      { type: 'choice', prompt: '글을 쓴 뒤 해야 하는 일에 ○ 하세요.', options: ['소리 내어 읽기', '바로 버리기'], answer: '소리 내어 읽기' },
      { type: 'table', prompt: '이메일에 꼭 들어갈 것을 쓰세요.', columns: ['글', '꼭 들어갈 것'], cells: [['이메일', '']], answer: '인사·용건·맺음말·이름' },
      { type: 'short', prompt: '이번 단원에서 쓴 글 중 가장 마음에 드는 글을 한 줄로 쓰세요.' },
    ],
    diff: {
      easy: '순서를 바르게 놓으면 초록 테두리가 생기고, 틀리면 까닭을 말해 주고 되돌려요.',
      base: '카드를 모두 놓거나 체크한 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '이메일·카드·경험 글의 기준을 한꺼번에 떠올려 글마다 고칠 곳을 골라야 해요.',
    },
    notes: '자주 보이는 어려움: ① 쓰기는 한 번 쓰면 끝이라고 여긴다 → 처음 쓴 글과 고쳐 쓴 글을 비교해 달라진 점을 말하게 한다. ② 자기 평가에서 모든 칸에 같은 점수를 준다 → 가장 쉬웠던 활동과 어려웠던 활동을 구체적으로 말하게 한다. ③ 점검표를 확인하지 않고 모두 지켰다고 체크한다 → 글에서 손가락으로 짚어 보게 한다. 자기 평가는 성적에 넣지 않는다. 이 차시로 단원(1~11차시)을 마친다.',
  }));

  // @@NEXT@@

  PaperLessons.registerUnit({
    id: 'g6-eng-2-03', schema: 'edu-unit.v1', catalogUnit: CAT,
    grade: 6, subject: '영어', unitTitle: '3. 쓰기',
    flow: '1~4차시는 짧은 이메일을 인사·본문·맺음말·이름으로 나누어 읽고, 보낸 까닭이 드러나는 용건 문장을 찾으며, 선생님·친구·가족 같은 받는 사람에 맞는 인사와 맺음말을 고르고, 빈칸을 채워 한 통을 완성해 빠진 부분을 점검한다. 5~8차시는 초대 카드에 꼭 들어갈 정보(때·곳·답장 부탁)를 가려 순서대로 쓰고, 고마운 일을 구체적으로 적은 감사 카드를 쓰며, 같은 내용을 받는 사람에 맞는 말투로 고치고, 본보기 카드의 틀은 살리되 내 정보로 바꿔 쓴다. 9~11차시는 때·곳·일·느낌을 담은 경험 글 초안을 쓰고, 친구의 의견을 받아 막연한 문장을 구체적으로 고친 뒤, 마지막 시간에 쓰고 고치는 과정을 정리하고 점검표로 내 글과 단원 전체를 스스로 평가한다. 단원 내내 짝과 글을 바꾸어 읽고 의견을 주고받는 활동을 넣는다.',
    refs: {},
    lessons: L,
  });
})();
