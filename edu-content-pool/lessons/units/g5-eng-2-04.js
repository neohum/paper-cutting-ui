/* 5학년 영어 2학기 4단원. 쓰기 — 문장 첫 글자와 이름·요일·달 대문자(1~3차시) → 마침표·물음표(4~6차시)
 * → 내 글과 짝의 글 점검(7~9차시).
 * 예문·글은 모두 이 단원을 위해 새로 지은 것이다(교과서 지문·노래 가사를 옮기지 않았다). 소리 단추는 누를 때만 난다.
 * 표기 약속: 카드는 문장 부호와 대소문자를 보이는 그대로 쓴다(학생이 눈으로 확인한다).
 */
(function () {
  const U = { grade: 5, subject: '영어', unitTitle: '4. 쓰기' };
  const CAT = 'g5-영어-2학기-4';
  const STD = '[6영02-03]';
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
  const SELF = (situation) => ({ mode: 'scale', situation, feeling: '뿌듯함', steps: 3, scaleLabels: { 1: '아직 어려워요', 2: '조금 할 수 있어요', 3: '자신 있게 해요' } });
  const act = (id, title, minutes, tool, teacher, task, levels, items) => ({ id, title, minutes, tool, teacher, task, levels, items });
  const lesson = (n, c) => Object.assign({ id: `g5-eng-2-04-${String(n).padStart(2, '0')}`, schema: 'edu-lesson.v1', catalog: { unit: CAT, lesson: n } }, U, {
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

  // ───────────── 1차시 (intro) 문장 첫 글자 ─────────────
  L.push(lesson(1, {
    title: '문장을 시작하는 글자를 큰 글자로 고쳐 쓰기',
    objective: '영어 문장이 시작하는 첫 글자를 대문자로 써야 한다는 것을 알고, 소문자로 시작한 문장을 찾아 고쳐 쓸 수 있다.',
    ill: 'a child writing a sentence in a notebook where the first letter is drawn big and bright and the other letters are small',
    top: 'My dog runs.', bottom: '첫 글자는 큰 글자로', extra: [{ motif: 'tree', x: 70, y: 214 }, { motif: 'house', x: 400, y: 218, color: 'sky' }],
    introT: '"칠판에 두 문장을 적었어요. i like pizza. 와 I like pizza. 어느 쪽이 영어 문장 같아 보이나요?" 학생이 고른 이유를 한두 명에게 듣는다. "문장이 시작되는 자리에는 큰 글자를 써요." 소문자로 시작한 문장도 뜻은 통한다고 여기는 학생에게 "읽는 사람이 문장이 어디서 시작하는지 찾는 표시예요."라고 짚는다.',
    introS: '칠판의 두 문장을 비교해 어느 쪽이 영어 문장 같은지, 왜 그런지 말해 봐요.',
    acts: [
      act('a1', '활동 1. 첫 글자가 알맞게 쓰인 문장 고르기', 13, 'wordcards',
        '"문장의 맨 앞 글자만 보세요. 손가락으로 짚으며 큰 글자인지 작은 글자인지 확인해요." 낱말 가운데나 끝의 대문자는 따지지 않는다. 맞게 쓴 문장만 골랐는데도 이유를 말하지 못하는 학생에게 "첫 글자를 왜 크게 쓰나요?"라고 되묻는다.',
        '문장 카드의 맨 앞 글자를 짚어 보고, 첫 글자가 큰 글자인 문장만 바구니에 넣어요.', LV(),
        [PK('첫 글자를 바르게 쓴 문장만 골라 보세요.', '바른 문장', [C('I like pizza.'), C('i like pizza.', '문장 맨 앞 글자 i를 큰 글자 I로 써야 해요.'), C('We play soccer.'), C('we play soccer.', '문장 맨 앞 글자 w를 큰 글자 W로 써야 해요.')], ['I like pizza.', 'We play soccer.'], '카드마다 맨 앞 글자 하나만 보세요. 큰 글자로 시작하는 카드가 바른 문장이에요.', 0),
         PK('아침 인사 문장 중 바르게 쓴 문장만 골라 보세요.', '바른 문장', [C('good morning, Mina.', '문장 맨 앞 g를 큰 글자 G로 써야 해요.'), C('Good morning, Mina.'), C('The sun is up.'), C('the sun is up.', '문장 맨 앞 t를 큰 글자 T로 써야 해요.')], ['Good morning, Mina.', 'The sun is up.'], '맨 앞 글자가 작은 글자인 카드를 먼저 지워 보세요.', 1),
         PK('교실 문장 중 바르게 쓴 문장만 골라 보세요.', '바른 문장', [C('open your book.', '문장 맨 앞 o를 큰 글자 O로 써야 해요.'), C('Open your book.'), C('Please sit down.'), C('please sit down.', '문장 맨 앞 p를 큰 글자 P로 써야 해요.'), C('Listen to me.')], ['Open your book.', 'Please sit down.', 'Listen to me.'], '명령하는 문장도 문장이에요. 시작 글자가 큰 글자인지 보세요.', 2),
         PK('동물 문장 중 바르게 쓴 문장만 골라 보세요.', '바른 문장', [C('A rabbit jumps.'), C('a rabbit jumps.', '문장 맨 앞 a도 큰 글자 A로 써야 해요.'), C('Birds can fly.'), C('birds can fly.', '문장 맨 앞 b를 큰 글자 B로 써야 해요.')], ['A rabbit jumps.', 'Birds can fly.'], '짧은 낱말 a도 문장 맨 앞에 오면 큰 글자로 써요.', 3)]),
      act('a2', '활동 2. 소문자로 시작한 문장을 바르게 고쳐 짝짓기', 14, 'wordcards',
        '"고친 문장은 무엇이 달라졌나요? 어디만 달라졌는지 짚어 보세요." 학생이 문장 전체를 다시 쓴다고 생각하면 "첫 글자 하나만 바뀌어요."라고 알려 준다. 짝 활동에서는 한 사람이 틀린 문장을 읽고 다른 사람이 첫 글자를 어떻게 고칠지 말한다.',
        '고쳐야 할 문장과 바르게 고친 문장을 짝지어요. 그다음 짝과 고친 첫 글자를 말해요.', LV(),
        [MA('틀린 문장을 바르게 고친 문장과 짝지어 보세요.', [{ id: 'w1', label: 'my bag is red.' }, { id: 'w2', label: 'she has a pen.' }, { id: 'w3', label: 'it is sunny.' }], ['It is sunny.', 'My bag is red.', 'She has a pen.'], { w1: 'My bag is red.', w2: 'She has a pen.', w3: 'It is sunny.' }, '고친 문장은 뒷부분은 그대로이고 맨 앞 글자만 달라져요.', 0),
         MA('틀린 문장을 바르게 고친 문장과 짝지어 보세요.', [{ id: 'w1', label: 'they run fast.' }, { id: 'w2', label: 'how are you?' }, { id: 'w3', label: 'come here.' }], ['Come here.', 'They run fast.', 'How are you?'], { w1: 'They run fast.', w2: 'How are you?', w3: 'Come here.' }, '묻는 문장도 첫 글자는 큰 글자로 시작해요.', 1),
         MA('틀린 문장을 바르게 고친 문장과 짝지어 보세요.', [{ id: 'w1', label: 'our school is big.' }, { id: 'w2', label: 'what is this?' }, { id: 'w3', label: 'let us play.' }, { id: 'w4', label: 'you can do it.' }], ['What is this?', 'You can do it.', 'Our school is big.', 'Let us play.'], { w1: 'Our school is big.', w2: 'What is this?', w3: 'Let us play.', w4: 'You can do it.' }, '문장마다 맨 앞 글자 한 자만 큰 글자로 바꿔 보세요.', 2),
         TALK('짝에게 소문자로 시작한 문장을 하나 만들어 읽어 주세요. 짝은 첫 글자를 어떻게 고칠지 말해 줘요. 바꾸어 한 뒤 "다 했어요"를 누르세요.')]),
    ],
    wrapT: '"오늘 문장을 쓸 때 가장 먼저 확인할 것은 무엇이었나요?" 두세 명에게 들은 뒤 "첫 글자, 큰 글자"라고 칠판에 적는다. 출구 1번에서 가운데 낱말에 큰 글자를 붙인 카드를 고른 학생은 다음 시간 첫 5분에 맨 앞 글자 짚기를 다시 해 본다.',
    exit: [
      { type: 'tool', tool: 'wordcards', options: { mode: 'pick', basket: '바른 문장', shuffle: false, cards: [C('We have lunch.'), C('we have lunch.', '맨 앞 w를 큰 글자로 써야 해요.'), C('He is kind.'), C('he is kind.', '맨 앞 h를 큰 글자로 써야 해요.')] }, prompt: '첫 글자를 바르게 쓴 문장만 골라 보세요.', target: { pick: ['We have lunch.', 'He is kind.'] }, difficulty: 0.15 },
      { type: 'choice', prompt: 'does he like milk? 를 바르게 고친 것은 무엇일까요?', options: ['does he like milk?', 'Does he like milk?', 'does He like milk?'], answer: 1, difficulty: 0.2, explain: '문장 맨 앞 글자 d를 큰 글자 D로 바꾸고 나머지는 그대로 두어요.' },
      { type: 'mood', prompt: '오늘 영어 쓰기는 어땠나요?' },
    ],
    wsTitle: '문장의 첫 글자',
    ws: [
      { type: 'choice', prompt: '문장을 바르게 쓴 것에 ○ 하세요.', options: ['i am ten.', 'I am ten.', 'i Am ten.'], answer: 'I am ten.' },
      { type: 'table', prompt: '틀린 문장을 바르게 고쳐 쓰세요.', columns: ['틀린 문장', '바르게 고친 문장'], cells: [['my cat is white.', ''], ['we live here.', ''], ['can you swim?', '']], answer: 'My cat is white. / We live here. / Can you swim?' },
      { type: 'check', prompt: '내가 쓴 문장을 확인하고 ✓ 하세요.', options: ['첫 글자가 큰 글자예요.', '뒷부분은 그대로 읽혀요.'] },
      { type: 'short', prompt: '오늘 한 일을 영어 문장 하나로 쓰고 첫 글자에 ○ 하세요.' },
    ],
    easyNote: '문장의 맨 앞 글자 하나만 보세요. 작은 글자면 큰 글자로 고쳐요.',
    easy: [
      { type: 'choice', prompt: 'she is happy. 의 맨 앞 글자를 고치면?', options: ['She is happy.', 'she is Happy.'], answer: 'She is happy.' },
      { type: 'table', prompt: '틀린 문장을 고쳐 쓰세요.', columns: ['틀린 문장', '고친 문장'], cells: [['it is a dog.', ''], ['we read books.', '']], answer: 'It is a dog. / We read books.' },
      { type: 'short', prompt: 'My name is ___. 에 내 이름을 넣어 쓰세요.' },
    ],
    diff: {
      easy: '맞는 카드를 넣으면 초록 테두리가 생기고, 소문자로 시작한 카드를 넣으면 까닭을 말해 주고 되돌려요.',
      base: '카드를 모두 고른 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '고쳐야 할 문장이 4개로 늘어 짝짓기를 더 많이 해야 해요.',
    },
    notes: '자주 보이는 어려움: ① 소문자로 써도 뜻이 같다고 여긴다 → 문장이 이어진 글에서 어디서 시작하는지 찾는 표시임을 보여 준다. ② 문장의 모든 낱말 첫 글자를 큰 글자로 쓴다 → 맨 앞 글자 하나만 짚게 한다. ③ a, I처럼 한 글자 낱말이 맨 앞에 오면 소문자로 쓴다 → 한 글자도 문장 맨 앞에서는 큰 글자임을 보여 준다. 이름·요일은 2차시에서 다룬다.',
  }));

    // ───────────── 2차시 (practice) 이름·요일·달·I ─────────────
  L.push(lesson(2, {
    title: '이름·요일·달·나를 가리키는 I를 큰 글자로 쓰기',
    objective: '사람 이름, 요일, 달 이름, 나를 가리키는 I는 문장 가운데에서도 큰 글자로 시작함을 알고 가려 쓸 수 있다.',
    ill: 'a calendar page with day and month names written in big bold first letters next to a child holding a name tag',
    top: 'Monday, June, Jun', bottom: '이름은 어디서나 큰 글자', extra: [{ motif: 'flower', x: 80, y: 214 }, { motif: 'star', x: 400, y: 70 }],
    introT: '"어제 한 일을 한 문장으로 말해 볼까요? 이름이나 요일이 들어 있나요?" 한 학생의 문장을 칠판에 적고 이름·요일의 첫 글자를 일부러 작게 쓴다. "친구 이름을 작은 글자로 쓰면 어떤가요?" 이름은 문장 맨 앞에 올 때만 큰 글자로 쓴다고 여기는 학생에게 "이름은 문장 어디에 있어도 큰 글자로 시작해요."라고 짚는다.',
    introS: '칠판에 적힌 문장에서 이름과 요일의 첫 글자가 어떻게 쓰여 있는지 보고, 고쳐야 할 곳을 찾아봐요.',
    acts: [
      act('a1', '활동 1. 큰 글자로 시작할 낱말과 작은 글자로 써도 되는 낱말 나누기', 13, 'wordcards',
        '"이름표에 쓰는 낱말인가요, 아니면 그냥 물건을 부르는 낱말인가요?" 사람·요일·달·나라와 도시는 큰 글자, 보통 물건 이름은 작은 글자로 나눈다. teacher나 school처럼 흔한 낱말을 큰 글자로 쓰려는 학생에게 "특정한 한 사람, 한 도시 이름인가요?"라고 되묻는다.',
        '낱말 카드를 큰 글자로 시작해야 하는 칸과 작은 글자로 써도 되는 칸으로 나누어요.', LV({ mode: 'sort' }),
        [SO('낱말을 알맞은 칸에 나누어 보세요.', [{ id: 'big', label: '큰 글자로 시작' }, { id: 'small', label: '작은 글자로 써요' }], ['monday', 'dog', 'jun', 'book', 'seoul', 'tuesday'], { big: ['monday', 'jun', 'seoul', 'tuesday'], small: ['dog', 'book'] }, '요일 이름과 사람·도시의 이름표가 되는 낱말은 큰 글자로 시작해요.', 0),
         SO('낱말을 알맞은 칸에 나누어 보세요.', [{ id: 'big', label: '큰 글자로 시작' }, { id: 'small', label: '작은 글자로 써요' }], ['may', 'apple', 'june', 'cake', 'october', 'desk'], { big: ['may', 'june', 'october'], small: ['apple', 'cake', 'desk'] }, '달의 이름은 큰 글자로 시작해요. 먹거나 쓰는 물건 이름은 어떤가요?', 1),
         SO('낱말을 알맞은 칸에 나누어 보세요.', [{ id: 'big', label: '큰 글자로 시작' }, { id: 'small', label: '작은 글자로 써요' }], ['mina', 'teacher', 'busan', 'school', 'korea', 'friend'], { big: ['mina', 'busan', 'korea'], small: ['teacher', 'school', 'friend'] }, '특정한 사람·도시·나라의 이름인지, 여러 곳에 쓰는 흔한 낱말인지 가려 보세요.', 2),
         SO('낱말을 알맞은 칸에 나누어 보세요. 나를 가리키는 낱말도 있어요.', [{ id: 'big', label: '큰 글자로 시작' }, { id: 'small', label: '작은 글자로 써요' }], ['i', 'pen', 'sunday', 'water', 'jeju'], { big: ['i', 'sunday', 'jeju'], small: ['pen', 'water'] }, '나를 가리키는 한 글자 낱말은 문장 어디에서나 큰 글자로 써요.', 3)]),
      act('a2', '활동 2. 문장에서 큰 글자로 고칠 낱말 모두 고르기', 14, 'wordcards',
        '"먼저 맨 앞 낱말을 보고, 다음에 이름·요일·달·I를 찾으세요." 순서를 정해 한 번에 하나씩 찾게 한다. 맨 앞 낱말만 고치고 끝내는 학생에게 "문장 가운데에 이름표 낱말이 남았나요?"라고 묻는다. 짝 활동에서는 서로의 이름 철자를 보며 "큰 글자 맞아?" 하고 물어 준다.',
        '소문자로 쓴 문장에서 큰 글자로 고쳐야 할 낱말을 모두 고르고, 짝과 내 이름·좋아하는 요일을 써서 확인해요.', LV({ mode: 'pick', basket: '큰 글자로 고칠 낱말' }),
        [PK('큰 글자로 고쳐야 할 낱말을 모두 골라 보세요.', '큰 글자로 고칠 낱말', ['on', 'monday', 'i', 'see', 'jun.'], ['on', 'monday', 'i', 'jun.'], '문장 맨 앞 낱말, 요일, 나를 가리키는 낱말, 사람 이름을 찾아보세요.', 0),
         PK('큰 글자로 고쳐야 할 낱말을 모두 골라 보세요.', '큰 글자로 고칠 낱말', ['we', 'go', 'to', 'busan', 'in', 'july.'], ['we', 'busan', 'july.'], '문장 맨 앞, 도시 이름, 달 이름이 큰 글자 자리예요.', 1),
         PK('큰 글자로 고쳐야 할 낱말을 모두 골라 보세요.', '큰 글자로 고칠 낱말', ['sora', 'and', 'i', 'visit', 'seoul.'], ['sora', 'i', 'seoul.'], 'and와 visit은 이름표가 아니에요. 사람 이름, 나, 도시 이름을 찾아보세요.', 2),
         PK('큰 글자로 고쳐야 할 낱말을 모두 골라 보세요.', '큰 글자로 고칠 낱말', ['in', 'october,', 'mina', 'and', 'i', 'play.'], ['in', 'october,', 'mina', 'i'], '쉼표가 붙은 낱말도 달 이름이면 큰 글자로 시작해요.', 3),
         TALK('짝에게 내 이름, 사는 도시, 좋아하는 요일을 넣은 문장 하나를 영어로 써서 보여 주세요. 짝은 큰 글자가 맞는지 확인해 줘요. 바꾸어 한 뒤 "다 했어요"를 누르세요.')]),
    ],
    wrapT: '"이름과 요일, 달, I는 문장 어디에서 큰 글자로 쓰나요?" 두세 명에게 묻고 "어디서나"라는 말을 칠판에 적는다. 출구 1번에서 and나 play를 고른 학생은 이름표 낱말과 보통 낱말을 가르는 기준을 다시 말해 보게 한다.',
    exit: [
      { type: 'tool', tool: 'wordcards', options: { mode: 'pick', basket: '큰 글자로 고칠 낱말', shuffle: false, cards: ['they', 'visit', 'daegu', 'on', 'friday.'] }, prompt: 'they visit daegu on friday. 에서 큰 글자로 고쳐야 할 낱말을 골라 보세요.', target: { pick: ['they', 'daegu', 'friday.'] }, difficulty: 0.2 },
      { type: 'choice', prompt: '바르게 쓴 문장은 무엇일까요?', options: ['Jun and i play in august.', 'Jun and I play in August.', 'jun and I play in August.'], answer: 1, difficulty: 0.25, explain: '사람 이름 Jun, 나를 가리키는 I, 달 이름 August는 모두 큰 글자로 시작해요.' },
      { type: 'mood', prompt: '이름과 요일을 큰 글자로 쓰는 일은 어땠나요?' },
    ],
    wsTitle: '이름·요일·달 대문자',
    ws: [
      { type: 'choice', prompt: '큰 글자로 시작하지 않아도 되는 낱말에 ○ 하세요.', options: ['Tuesday', 'pencil', 'Mina'], answer: 'pencil' },
      { type: 'table', prompt: '소문자로 쓴 낱말을 바르게 고쳐 쓰세요.', columns: ['소문자 낱말', '바르게 쓰기'], cells: [['wednesday', ''], ['april', ''], ['sora', '']], answer: 'Wednesday / April / Sora' },
      { type: 'check', prompt: '문장을 다 쓰고 확인한 것에 ✓ 하세요.', options: ['문장 맨 앞 글자가 큰 글자예요.', '이름과 요일이 큰 글자로 시작해요.', 'I를 큰 글자로 썼어요.'] },
      { type: 'short', prompt: '내 이름과 좋아하는 요일을 넣은 영어 문장을 쓰세요.' },
    ],
    easyNote: '이름표가 되는 낱말(사람·요일·달·나)은 어디에서나 큰 글자로 시작해요.',
    easy: [
      { type: 'choice', prompt: '큰 글자로 써야 하는 낱말에 ○ 하세요.', options: ['monday', 'pencil'], answer: 'monday' },
      { type: 'table', prompt: '바르게 고쳐 쓰세요.', columns: ['소문자 낱말', '바르게 쓰기'], cells: [['june', ''], ['jun', '']], answer: 'June / Jun' },
      { type: 'short', prompt: 'I like ___. (요일을 넣어 쓰세요)' },
    ],
    diff: {
      easy: '맞는 칸에 넣으면 초록 테두리가 생기고, 틀리면 까닭을 말해 주고 되돌려요.',
      base: '낱말을 모두 나눈 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '쉼표가 붙은 달 이름과 and 같은 이음말이 섞여 더 꼼꼼히 가려내야 해요.',
    },
    notes: '자주 보이는 어려움: ① 이름은 문장 맨 앞에서만 큰 글자로 쓴다고 여긴다 → 이름표 낱말은 어디서나 큰 글자임을 칠판 문장으로 보여 준다. ② teacher, school 같은 흔한 낱말도 큰 글자로 쓴다 → 특정한 한 사람·곳의 이름인지 묻는다. ③ 문장 가운데 I를 소문자 i로 쓴다 → 나를 가리키는 I는 늘 큰 글자로 쓴다고 알려 준다. 학생 이름은 가명이나 본인이 쓴 이름만 쓰고 카드에 실명을 올리지 않는다.',
  }));

  // ───────────── 3차시 (extend) 이어지는 두 문장 ─────────────
  L.push(lesson(3, {
    title: '낱말 카드로 문장 만들고 두 문장 글의 큰 글자 점검하기',
    objective: '낱말 카드를 차례대로 놓아 큰 글자가 알맞은 문장을 만들고, 두 문장으로 된 짧은 글에서 각 문장의 시작과 이름이 알맞은지 점검할 수 있다.',
    ill: 'two short sentence strips side by side with a bright check mark where each strip begins with a big letter',
    top: 'I am Jun. I live in Busan.', bottom: '문장마다 새로 시작', extra: [{ motif: 'tree', x: 70, y: 214 }, { motif: 'bird', x: 400, y: 70 }],
    introT: '"선생님이 칠판에 자기소개를 두 문장 썼어요. 두 번째 문장도 큰 글자로 시작해야 할까요?" 학생 생각을 두세 명에게 듣는다. 한 문장이 끝나고 새 문장이 시작될 때마다 큰 글자라고 확인한다. 글 전체에서 첫 번째 문장만 큰 글자로 시작하면 된다고 여기는 학생에게 "마침표 뒤에서 새 문장이 시작되면 또 큰 글자예요."라고 짚는다.',
    introS: '자기소개 두 문장에서 문장이 시작되는 곳을 찾고, 그곳의 첫 글자를 어떻게 써야 할지 말해 봐요.',
    acts: [
      act('a1', '활동 1. 낱말 카드를 차례대로 놓아 문장 만들기', 13, 'wordcards',
        '"맨 앞에는 어떤 카드가 오나요? 큰 글자로 시작하는 카드를 먼저 찾아보세요." 이름·요일·달 카드도 큰 글자로 시작하기 때문에 하나만으로 맨 앞 카드를 정할 수 없다는 점을 짚는다. 놓은 뒤에는 소리 내어 읽어 어색한지 들어 보게 한다.',
        '흩어진 낱말 카드를 차례대로 놓아 바른 문장을 만들고, 소리 내어 한 번 읽어요.', LV({ mode: 'order' }),
        [OR('낱말 카드를 차례대로 놓아 문장을 만들어 보세요.', ['on', 'Sunday.', 'swim', 'and', 'I', 'Mina'], ['Mina', 'and', 'I', 'swim', 'on', 'Sunday.'], '이름표 낱말도 큰 글자지만 문장 뜻을 생각하면 누가 하는지가 맨 앞에 와요.', 0),
         OR('낱말 카드를 차례대로 놓아 문장을 만들어 보세요.', ['in', 'May.', 'Jeju', 'We', 'visit'], ['We', 'visit', 'Jeju', 'in', 'May.'], '누가 무엇을 하는지, 어디에서, 언제인지 말의 차례를 떠올려 보세요.', 1),
         OR('낱말 카드를 차례대로 놓아 문장을 만들어 보세요.', ['Jun', 'On', 'Monday,', 'sings.'], ['On', 'Monday,', 'Jun', 'sings.'], '쉼표가 붙은 낱말은 앞 문장 부분을 끝내는 자리에 와요.', 2),
         OR('낱말 카드를 차례대로 놓아 문장을 만들어 보세요.', ['I', 'Seoul.', 'In', 'meet', 'July,', 'Sora', 'in'], ['In', 'July,', 'I', 'meet', 'Sora', 'in', 'Seoul.'], '때를 말하는 낱말이 문장 맨 앞에 올 수도 있어요. 쉼표를 단서로 삼아 보세요.', 3)]),
      act('a2', '활동 2. 두 문장 글에서 바르게 쓴 글과 고칠 글 나누기', 14, 'wordcards',
        '"글 하나에 문장이 두 개 있어요. 마침표 뒤 첫 글자도 꼭 보세요." 학생이 첫 문장만 확인하고 넘어가면 손가락으로 마침표 뒤를 짚게 한다. 고쳐야 할 글을 고른 뒤에는 어느 낱말을 어떻게 고쳐야 하는지 짝에게 말해 보게 한다.',
        '두 문장 글 카드를 바르게 썼는지 확인해 나누고, 짝에게 고칠 곳을 말해요.', LV({ mode: 'sort' }),
        [SO('두 문장 글을 바르게 썼는지 나누어 보세요.', [{ id: 'ok', label: '바르게 썼어요' }, { id: 'fix', label: '고쳐야 해요' }], ['I am Jun. I live in Busan.', 'I am Jun. i live in Busan.', 'I am Jun. I live in busan.', 'Today is Monday. It is sunny.'], { ok: ['I am Jun. I live in Busan.', 'Today is Monday. It is sunny.'], fix: ['I am Jun. i live in Busan.', 'I am Jun. I live in busan.'] }, '마침표 뒤 첫 글자와 도시 이름의 첫 글자를 하나씩 확인해 보세요.', 0),
         SO('두 문장 글을 바르게 썼는지 나누어 보세요.', [{ id: 'ok', label: '바르게 썼어요' }, { id: 'fix', label: '고쳐야 해요' }], ['We met on friday. We played.', 'We met on Friday. We played.', 'My dog is Coco. she is small.', 'My dog is Coco. She is small.'], { ok: ['We met on Friday. We played.', 'My dog is Coco. She is small.'], fix: ['We met on friday. We played.', 'My dog is Coco. she is small.'] }, '요일 이름과 두 번째 문장의 첫 글자를 확인해 보세요.', 1),
         SO('두 문장 글을 바르게 썼는지 나누어 보세요.', [{ id: 'ok', label: '바르게 썼어요' }, { id: 'fix', label: '고쳐야 해요' }], ['Sora and I sing. We sing in May.', 'Sora and I sing. We sing in may.', 'sora and I sing. We sing.', 'Sora and i sing. We sing.', 'Jun runs. He is fast.'], { ok: ['Sora and I sing. We sing in May.', 'Jun runs. He is fast.'], fix: ['Sora and I sing. We sing in may.', 'sora and I sing. We sing.', 'Sora and i sing. We sing.'] }, '이름, I, 달 이름, 두 번째 문장의 첫 글자를 차례로 짚어 보세요.', 2),
         TALK('짝에게 두 문장으로 된 자기소개를 써서 보여 주세요. 짝은 문장 시작과 이름이 큰 글자인지 확인하고 고칠 곳을 알려 줘요. 바꾸어 한 뒤 "다 했어요"를 누르세요.')]),
    ],
    wrapT: '"두 문장 글에서 큰 글자를 확인할 곳은 모두 어디였나요?" 한두 명에게 듣고 첫 문장 시작, 마침표 뒤 문장 시작, 이름·요일·달·I라고 정리한다. 출구 1번 카드 순서가 어긋난 학생에게는 소리 내어 읽어 어색한 곳을 찾게 한다.',
    exit: [
      { type: 'tool', tool: 'wordcards', options: { mode: 'order', shuffle: false, cards: ['likes', 'Sora', 'swimming', 'in', 'June.'] }, prompt: '낱말 카드를 차례대로 놓아 문장을 만들어 보세요.', target: { order: ['Sora', 'likes', 'swimming', 'in', 'June.'] }, difficulty: 0.2 },
      { type: 'choice', prompt: '두 문장 글을 바르게 쓴 것은 무엇일까요?', options: ['It is Monday. we run.', 'It is Monday. We run.', 'it is monday. We run.'], answer: 1, difficulty: 0.25, explain: '마침표 뒤에서 새 문장이 시작되므로 We를 큰 글자로, Monday도 큰 글자로 써요.' },
      { type: 'mood', prompt: '문장을 만들고 점검하는 일은 어땠나요?' },
    ],
    wsTitle: '두 문장 글',
    ws: [
      { type: 'choice', prompt: '두 문장 글을 바르게 쓴 것에 ○ 하세요.', options: ['I like May. it is warm.', 'I like May. It is warm.', 'i like May. It is warm.'], answer: 'I like May. It is warm.' },
      { type: 'table', prompt: '글에서 고쳐야 할 곳을 찾아 바르게 고쳐 쓰세요.', columns: ['틀린 글', '바르게 고친 글'], cells: [['Jun is ten. he lives in daegu.', ''], ['we play on sunday. It is fun.', '']], answer: 'Jun is ten. He lives in Daegu. / We play on Sunday. It is fun.' },
      { type: 'check', prompt: '두 문장 글을 다시 읽고 확인한 것에 ✓ 하세요.', options: ['첫 문장이 큰 글자로 시작해요.', '둘째 문장도 큰 글자로 시작해요.', '이름·요일·달이 큰 글자로 시작해요.'] },
      { type: 'short', prompt: '내가 좋아하는 달과 날씨를 영어 두 문장으로 쓰세요.' },
    ],
    easyNote: '마침표 뒤에서 새 문장이 시작돼요. 마침표 뒤 첫 글자를 손가락으로 짚어 보세요.',
    easy: [
      { type: 'choice', prompt: '바른 글에 ○ 하세요.', options: ['I am ten. I like May.', 'I am ten. i like May.'], answer: 'I am ten. I like May.' },
      { type: 'table', prompt: '고쳐 쓰세요.', columns: ['틀린 글', '바르게 고친 글'], cells: [['It is hot. we swim.', '']], answer: 'It is hot. We swim.' },
      { type: 'short', prompt: 'I am ___. I like ___. 를 채워 쓰세요.' },
    ],
    diff: {
      easy: '맞는 자리에 놓으면 초록 테두리가 생기고, 틀리면 까닭을 말해 주고 되돌려요.',
      base: '카드를 모두 놓은 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '때를 말하는 낱말로 시작하는 긴 문장을 만들고, 고칠 곳이 둘 이상인 글을 가려내요.',
    },
    notes: '자주 보이는 어려움: ① 둘째 문장 첫 글자를 소문자로 쓴다 → 마침표 뒤를 손가락으로 짚어 새 문장의 시작임을 보여 준다. ② 맨 앞에 올 낱말을 하나로만 정하려 한다 → 큰 글자로 시작하는 카드가 여럿이면 뜻을 읽어 정한다. ③ 쉼표 앞 낱말과 다음 낱말을 이어 쓴다 → 소리 내어 읽어 쉬는 곳에 쉼표가 있음을 확인한다. 학생 글에는 가명이나 별명만 쓰게 한다.',
  }));

    // ───────────── 4차시 (core) 마침표와 물음표 ─────────────
  L.push(lesson(4, {
    title: '알리는 문장과 묻는 문장 나누고 부호 찍기',
    objective: '내용을 알리는 문장에는 마침표(.), 답을 묻는 문장에는 물음표(?)를 찍어야 함을 알고 문장을 나누어 알맞은 부호를 붙일 수 있다.',
    ill: 'two speech bubbles, one ending with a round dot and one ending with a curly question mark, held by two children',
    top: 'It is red.  Is it red?', bottom: '알리면 마침표, 물으면 물음표', extra: [{ motif: 'flower', x: 80, y: 214 }, { motif: 'cloud', x: 400, y: 70 }],
    introT: '"선생님이 두 가지를 말할게요. This is my bag. 그리고 Is this your bag? 두 번째에서 선생님 목소리가 어떻게 달랐나요?" 끝을 올려 묻는 소리를 들려주고 글에서는 부호가 그 역할을 한다고 이어 간다. 마침표와 물음표를 아무거나 찍어도 된다고 여기는 학생에게 "알리는 말인지 묻는 말인지 글에서는 부호로 알려 줘요."라고 짚는다.',
    introS: '두 문장을 듣고 선생님 목소리가 어떻게 달랐는지, 글에서는 그 차이를 어떻게 나타낼지 말해 봐요.',
    acts: [
      act('a1', '활동 1. 알리는 문장과 묻는 문장 나누기', 13, 'wordcards',
        '"이 문장을 들은 친구는 대답을 해야 할까요, 그냥 알았다고 하면 될까요?" 대답을 요구하면 묻는 문장이다. What, Where, Who처럼 묻는 낱말로 시작하는 문장과 Do, Is, Can으로 시작하는 문장이 묻는 문장일 때가 많다고 알려 주되 My name is …처럼 알리는 문장도 함께 본다. 모든 문장에 마침표만 찍는 학생에게 "대답을 기다리는 말인가요?"라고 되묻는다.',
        '부호가 없는 문장을 읽고 마침표를 찍을 문장과 물음표를 찍을 문장으로 나누어요.', LV({ mode: 'sort' }),
        [SO('문장을 마침표(.) 칸과 물음표(?) 칸으로 나누어 보세요.', [{ id: 'dot', label: '마침표 . 알려요' }, { id: 'q', label: '물음표 ? 물어요' }], ['I have a pen', 'Do you have a pen', 'She is a nurse', 'Is she a nurse'], { dot: ['I have a pen', 'She is a nurse'], q: ['Do you have a pen', 'Is she a nurse'] }, '듣는 사람이 대답을 해야 하는 말은 어느 쪽인지 생각해 보세요.', 0),
         SO('문장을 마침표(.) 칸과 물음표(?) 칸으로 나누어 보세요.', [{ id: 'dot', label: '마침표 . 알려요' }, { id: 'q', label: '물음표 ? 물어요' }], ['What is your name', 'My name is Mina', 'Where do you live', 'I live in Daegu'], { dot: ['My name is Mina', 'I live in Daegu'], q: ['What is your name', 'Where do you live'] }, '질문에는 대답이 이어져요. 대답이 되는 문장은 무엇을 알려 주고 있나요?', 1),
         SO('문장을 마침표(.) 칸과 물음표(?) 칸으로 나누어 보세요.', [{ id: 'dot', label: '마침표 . 알려요' }, { id: 'q', label: '물음표 ? 물어요' }], ['How old are you', 'I am eleven', 'Can he swim', 'He can swim', 'Who is that boy'], { dot: ['I am eleven', 'He can swim'], q: ['How old are you', 'Can he swim', 'Who is that boy'] }, '낱말이 같아도 순서가 바뀌면 묻는 말이 돼요. Can he와 He can을 소리 내어 비교해 보세요.', 2),
         SO('문장을 마침표(.) 칸과 물음표(?) 칸으로 나누어 보세요.', [{ id: 'dot', label: '마침표 . 알려요' }, { id: 'q', label: '물음표 ? 물어요' }], ['Open the window', 'Is it cold', 'It is cold', 'Why are you late', 'Come in'], { dot: ['Open the window', 'It is cold', 'Come in'], q: ['Is it cold', 'Why are you late'] }, '부탁하거나 시키는 문장은 대답을 기다리는 말이 아니에요.', 3)]),
      act('a2', '활동 2. 빈칸에 알맞은 부호 넣어 문장 완성하기', 14, 'wordcards',
        '"부호 카드를 문장 끝에 놓았을 때 소리 내어 읽어 보세요. 올려 읽는 말은 물음표예요." 같은 부호 카드가 여러 장 있을 때는 어느 문장에 어느 카드를 놓아도 같다는 점을 알려 준다. 부호를 문장 맨 앞이나 가운데에 찍는 학생에게는 "문장이 끝나는 자리"를 손가락으로 짚게 한다.',
        '문장 끝 빈칸에 마침표 카드와 물음표 카드를 알맞게 넣고, 짝에게 그 문장을 소리 내어 읽어 줘요.', LV({ mode: 'fill' }),
        [FI('문장 끝에 알맞은 부호를 넣어 보세요.', [{ id: 'f1', label: 'This is my bag___' }, { id: 'f2', label: 'Is this your bag___' }, { id: 'f3', label: 'It is red___' }], [{ id: 'c1', text: '.' }, { id: 'c2', text: '?' }, { id: 'c3', text: '.' }], { f1: ['c1', 'c3'], f2: 'c2', f3: ['c1', 'c3'] }, '말을 올려 읽으면 어느 문장이 되나요? 그 문장 끝에 물음표를 놓으세요.', 0),
         FI('문장 끝에 알맞은 부호를 넣어 보세요.', [{ id: 'f1', label: 'Do you like cats___' }, { id: 'f2', label: 'I like dogs___' }, { id: 'f3', label: 'Where is my cap___' }, { id: 'f4', label: 'Here it is___' }], [{ id: 'c1', text: '?' }, { id: 'c2', text: '.' }, { id: 'c3', text: '?' }, { id: 'c4', text: '.' }], { f1: ['c1', 'c3'], f2: ['c2', 'c4'], f3: ['c1', 'c3'], f4: ['c2', 'c4'] }, '앞 문장이 묻고 뒤 문장이 대답해 주는 짝이에요. 묻는 쪽에 물음표를 놓으세요.', 1),
         FI('문장 끝에 알맞은 부호를 넣어 보세요.', [{ id: 'f1', label: 'He plays the drums___' }, { id: 'f2', label: 'Can you play the drums___' }, { id: 'f3', label: 'Yes, I can___' }], [{ id: 'c1', text: '?' }, { id: 'c2', text: '.' }, { id: 'c3', text: '.' }], { f1: ['c2', 'c3'], f2: 'c1', f3: ['c2', 'c3'] }, '물음표는 한 개만 쓰여요. 대답을 기다리는 문장 하나를 찾으세요.', 2),
         TALK('짝에게 묻는 문장 하나와 알리는 문장 하나를 써서 읽어 주세요. 짝은 어느 문장에 마침표를, 어느 문장에 물음표를 찍을지 말해 줘요. 바꾸어 한 뒤 "다 했어요"를 누르세요.')]),
    ],
    wrapT: '"물음표를 찍는 문장은 어떤 문장인가요?" 두세 명에게 듣고 "대답을 기다리는 말"이라는 말을 칠판에 적는다. 출구 1번에서 알리는 문장을 물음표 칸에 둔 학생은 다음 시간 첫 5분에 대답을 기다리는지 되묻는 연습을 한다.',
    exit: [
      { type: 'tool', tool: 'wordcards', options: { mode: 'sort', shuffle: false, slots: [{ id: 'dot', label: '마침표 .' }, { id: 'q', label: '물음표 ?' }], cards: ['Are you ready', 'We are ready', 'Is it far', 'It is far'] }, prompt: '문장을 마침표 칸과 물음표 칸으로 나누어 보세요.', target: { sort: { dot: ['We are ready', 'It is far'], q: ['Are you ready', 'Is it far'] } }, difficulty: 0.2 },
      { type: 'choice', prompt: '"What is your name" 끝에 알맞은 부호는 무엇일까요?', options: ['마침표 .', '물음표 ?', '둘 다 괜찮다'], answer: 1, difficulty: 0.2, explain: '이름을 물어 대답을 기다리는 문장이라서 물음표를 찍어요.' },
      { type: 'mood', prompt: '마침표와 물음표 고르기는 어땠나요?' },
    ],
    wsTitle: '마침표와 물음표',
    ws: [
      { type: 'choice', prompt: '문장 끝에 물음표를 찍는 문장에 ○ 하세요.', options: ['I like apples', 'Do you like apples', 'Give me an apple'], answer: 'Do you like apples' },
      { type: 'table', prompt: '문장 끝에 알맞은 부호를 찍어 다시 쓰세요.', columns: ['부호가 없는 문장', '부호를 찍은 문장'], cells: [['She is my aunt', ''], ['Is she your aunt', ''], ['We go home', '']], answer: 'She is my aunt. / Is she your aunt? / We go home.' },
      { type: 'check', prompt: '문장을 쓰고 확인한 것에 ✓ 하세요.', options: ['알리는 문장은 마침표로 끝나요.', '묻는 문장은 물음표로 끝나요.'] },
      { type: 'short', prompt: '짝에게 묻고 싶은 영어 질문을 하나 쓰고 물음표를 찍으세요.' },
    ],
    easyNote: '듣는 사람이 대답을 해야 하면 물음표, 그냥 알려 주면 마침표예요.',
    easy: [
      { type: 'choice', prompt: '물음표를 찍는 문장에 ○ 하세요.', options: ['I am ten', 'How old are you'], answer: 'How old are you' },
      { type: 'table', prompt: '알맞은 부호를 찍어 쓰세요.', columns: ['부호가 없는 문장', '부호를 찍은 문장'], cells: [['It is a cat', ''], ['Is it a cat', '']], answer: 'It is a cat. / Is it a cat?' },
      { type: 'short', prompt: '내가 알려 주고 싶은 영어 문장 하나를 쓰고 마침표를 찍으세요.' },
    ],
    diff: {
      easy: '맞는 칸에 넣으면 초록 테두리가 생기고, 틀리면 까닭을 말해 주고 되돌려요.',
      base: '문장을 모두 나눈 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '낱말이 같고 순서만 다른 문장, 시키는 문장까지 섞여 있어 더 꼼꼼히 가려내야 해요.',
    },
    notes: '자주 보이는 어려움: ① 질문이든 아니든 문장 끝에는 마침표를 찍는다 → 대답을 기다리는 말인지 되묻는다. ② What·Where 같은 낱말이 있으면 항상 물음표라고 여긴다 → What I want is a pen. 같은 알리는 문장이 있음을 한 번 말해 준다(이 차시 카드에는 없음). ③ 부탁하는 문장 Come in 에 물음표를 찍는다 → 대답이 아니라 행동을 기다리는 말임을 짚는다.',
  }));

  // ───────────── 5차시 (practice) 문장 만들며 부호 붙이기 ─────────────
  L.push(lesson(5, {
    title: '낱말 카드로 묻는 문장을 만들고 알맞은 부호 고르기',
    objective: '낱말과 부호 카드를 차례대로 놓아 알리는 문장과 묻는 문장을 만들고, 부호가 잘못 찍힌 문장을 찾아낼 수 있다.',
    ill: 'a row of word cards forming a sentence with a final card shaped like a question mark standing on a wooden desk',
    top: 'Are you tired?', bottom: '낱말 순서와 끝 부호', extra: [{ motif: 'house', x: 70, y: 218, color: 'peach' }, { motif: 'bird', x: 400, y: 70 }],
    introT: '"지난 시간에 부호를 골랐지요. 오늘은 문장을 직접 만들어요. You are tired. 를 묻는 말로 바꿔 보세요. 낱말 순서가 달라지나요?" Are you tired? 로 바뀌는 것을 카드로 보여 준다. 부호만 바꾸면 묻는 문장이 된다고 여기는 학생에게 "영어는 낱말의 차례도 같이 바뀔 때가 많아요. 소리 내어 읽어 보세요."라고 짚는다.',
    introS: '알리는 말 You are tired. 를 묻는 말로 바꿔 보고, 낱말 순서가 달라지는지 말해 봐요.',
    acts: [
      act('a1', '활동 1. 부호가 바르게 찍힌 문장만 골라내기', 13, 'wordcards',
        '"끝 부호만 보지 말고 문장 전체를 소리 내어 읽어 보세요. 읽은 말과 부호가 같은 뜻인가요?" Is it a cat. 처럼 묻는 문장에 마침표를 찍은 카드는 소리 내어 읽으면 어색하다는 점을 이용한다. 부호는 모두 같게 보인다고 여기는 학생에게 "모양이 다르면 말하는 뜻이 달라져요."라고 알려 준다.',
        '부호가 바르게 찍힌 문장만 바구니에 넣어요. 고른 문장은 소리 내어 읽어 봐요.', LV({ mode: 'pick', basket: '바른 문장' }),
        [PK('부호를 바르게 찍은 문장만 골라 보세요.', '바른 문장', [C('Is it a cat?'), C('Is it a cat.', '묻는 문장이라 물음표를 찍어야 해요.'), C('It is a cat.'), C('It is a cat?', '알리는 문장이라 마침표를 찍어야 해요.')], ['Is it a cat?', 'It is a cat.'], '문장을 소리 내어 읽고 올려 읽은 말에 물음표가 있는지 보세요.', 0),
         PK('부호를 바르게 찍은 문장만 골라 보세요.', '바른 문장', [C('Where is the library?'), C('Where is the library.', '묻는 문장이라 물음표를 찍어야 해요.'), C('The library is here.'), C('The library is here?', '알리는 문장이라 마침표를 찍어야 해요.')], ['Where is the library?', 'The library is here.'], '장소를 묻는 말은 어느 쪽인가요? 알려 주는 말과 짝지어 보세요.', 1),
         PK('부호를 바르게 찍은 문장만 골라 보세요.', '바른 문장', [C('Can you help me?'), C('Can you help me.', '묻는 문장이라 물음표를 찍어야 해요.'), C('I can help you.'), C('I can help you?', '알리는 문장이라 마침표를 찍어야 해요.'), C('Please help me.')], ['Can you help me?', 'I can help you.', 'Please help me.'], '부탁하는 말은 대답이 아니라 행동을 기다리는 말이에요.', 2),
         PK('부호를 바르게 찍은 문장만 골라 보세요.', '바른 문장', [C('Who is she?'), C('Who is she.', '묻는 문장이라 물음표를 찍어야 해요.'), C('She is Ms. Lee.'), C('She is Ms. Lee?', '알리는 문장이라 마침표를 찍어야 해요.')], ['Who is she?', 'She is Ms. Lee.'], '누구냐고 묻는 말과 누구라고 알려 주는 말을 가려 보세요.', 3)]),
      act('a2', '활동 2. 낱말과 부호 카드로 문장 만들기', 14, 'wordcards',
        '"맨 앞에 올 카드, 맨 뒤에 올 부호 카드를 먼저 정하세요." 묻는 문장은 Are·Is·Do 같은 낱말로 시작할 때가 많음을 짚되 모든 경우는 아니라고 말해 준다. 완성한 문장은 짝에게 읽어 주고 짝이 마침표인지 물음표인지 말해 맞으면 서로 박수를 한 번 친다.',
        '낱말 카드와 부호 카드를 차례대로 놓아 문장을 만들고, 짝에게 읽어 줘요.', LV({ mode: 'order' }),
        [OR('낱말 카드와 부호 카드를 차례대로 놓아 문장을 만들어 보세요.', ['?', 'you', 'Are', 'tired'], ['Are', 'you', 'tired', '?'], '묻는 문장은 부호 카드를 맨 뒤에 놓아요. 먼저 낱말 차례를 소리 내어 맞춰 보세요.', 0),
         OR('낱말 카드와 부호 카드를 차례대로 놓아 문장을 만들어 보세요.', ['.', 'We', 'a', 'have', 'dog'], ['We', 'have', 'a', 'dog', '.'], '알리는 문장이에요. 맨 앞은 큰 글자, 맨 뒤는 마침표 카드예요.', 1),
         OR('낱말 카드와 부호 카드를 차례대로 놓아 문장을 만들어 보세요.', ['you', 'Do', '?', 'like', 'soup'], ['Do', 'you', 'like', 'soup', '?'], 'Do 로 시작하는 질문이에요. 끝에는 어떤 부호가 올까요?', 2),
         OR('낱말 카드와 부호 카드를 차례대로 놓아 문장을 만들어 보세요.', ['is', '?', 'your', 'What', 'name'], ['What', 'is', 'your', 'name', '?'], '무엇인지 묻는 낱말이 맨 앞에 와요. 부호는 마지막이에요.', 3),
         TALK('짝에게 오늘 급식이나 쉬는 시간에 대해 묻는 문장 하나와 알리는 문장 하나를 써서 읽어 주세요. 짝은 부호를 말해 줘요. 바꾸어 한 뒤 "다 했어요"를 누르세요.')]),
    ],
    wrapT: '"묻는 문장을 만들 때 부호 말고 또 어디가 달라질 수 있나요?" 한두 명에게 듣고 낱말 차례도 달라짐을 확인한다. 출구 1번에서 부호는 맞게 골랐으나 큰 글자를 빠뜨린 학생에게는 1차시 점검표를 다시 보게 한다.',
    exit: [
      { type: 'tool', tool: 'wordcards', options: { mode: 'order', shuffle: false, cards: ['?', 'she', 'Is', 'kind'] }, prompt: '낱말과 부호 카드를 차례대로 놓아 묻는 문장을 만들어 보세요.', target: { order: ['Is', 'she', 'kind', '?'] }, difficulty: 0.2 },
      { type: 'choice', prompt: '부호를 바르게 찍은 문장은 무엇일까요?', options: ['Do you have a pen.', 'Do you have a pen?', 'Do you have a pen,'], answer: 1, difficulty: 0.2, explain: '펜이 있는지 묻는 문장이라서 물음표를 찍어요.' },
      { type: 'mood', prompt: '문장을 만들어 보는 일은 어땠나요?' },
    ],
    wsTitle: '문장 만들기와 부호',
    ws: [
      { type: 'choice', prompt: '부호가 바르게 찍힌 문장에 ○ 하세요.', options: ['Is he your brother.', 'Is he your brother?', 'He is my brother?'], answer: 'Is he your brother?' },
      { type: 'table', prompt: '낱말을 차례대로 써서 문장을 완성하세요. (맨 끝 부호도 쓰기)', columns: ['낱말', '완성한 문장'], cells: [['are / you / Where / ?', ''], ['I / a / have / pen / .', '']], answer: 'Where are you? / I have a pen.' },
      { type: 'check', prompt: '내가 만든 문장을 읽고 확인한 것에 ✓ 하세요.', options: ['첫 글자가 큰 글자예요.', '문장 끝 부호가 말하는 뜻에 맞아요.'] },
      { type: 'short', prompt: '친구에게 물어보고 싶은 영어 질문을 하나 쓰세요.' },
    ],
    easyNote: '질문이면 끝을 올려 읽고 물음표를 찍어요. 그냥 알리면 마침표예요.',
    easy: [
      { type: 'choice', prompt: '바르게 찍은 문장에 ○ 하세요.', options: ['Is it big?', 'Is it big.'], answer: 'Is it big?' },
      { type: 'table', prompt: '부호를 넣어 완성하세요.', columns: ['문장', '부호'], cells: [['It is big', ''], ['Is it big', '']], answer: '. / ?' },
      { type: 'short', prompt: 'Is it a ___ ? 에 동물을 넣어 쓰세요.' },
    ],
    diff: {
      easy: '맞는 자리에 놓으면 초록 테두리가 생기고, 틀리면 까닭을 말해 주고 되돌려요.',
      base: '카드를 모두 놓은 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '의문사로 시작하는 질문과 부탁하는 문장이 섞여 더 폭넓게 가려내야 해요.',
    },
    notes: '자주 보이는 어려움: ① 부호 카드를 문장 맨 앞이나 가운데에 놓는다 → 문장이 끝나는 곳을 손가락으로 짚게 한다. ② 부호만 바꾸고 낱말 순서는 그대로 둔다 → You are tired? 도 대화에서 쓸 수 있지만 글에서는 Are you tired? 가 먼저임을 말해 준다. ③ 알리는 문장에 물음표를 습관처럼 찍는다 → 소리 내어 끝을 내려 읽게 한다. 마침표 앞에 공백을 두지 않도록 쓰기 습관도 살핀다.',
  }));

  // ───────────── 6차시 (extend) 부호가 달라지면 뜻이 달라진다 ─────────────
  L.push(lesson(6, {
    title: '부호를 바꾸면 말하는 뜻이 어떻게 달라지는지 알아보기',
    objective: '같은 낱말이라도 마침표와 물음표에 따라 알려 주는 말과 묻는 말로 뜻이 달라짐을 알고 상황에 맞는 부호를 고를 수 있다.',
    ill: 'a child giving a thumbs up in one picture and tilting her head with a question mark in another, with the same sentence under each',
    top: 'Jun is hungry. / ?', bottom: '부호가 뜻을 바꿔요', extra: [{ motif: 'tree', x: 70, y: 214 }, { motif: 'star', x: 400, y: 70 }],
    introT: '"Jun is hungry. 와 Jun is hungry? 낱말은 똑같은데 선생님이 말하려는 뜻은 어떻게 달라졌나요?" 두 문장을 소리 내어 읽어 주며 끝 부호가 다르면 알려 주는 말인지 묻는 말인지 달라짐을 확인한다. 부호는 장식이라서 없어도 뜻은 그대로라고 여기는 학생에게 "친구가 어떻게 대답해야 할까요?"라고 되묻는다.',
    introS: '낱말이 같은 두 문장을 듣고 부호에 따라 말하려는 뜻이 어떻게 달라지는지 말해 봐요.',
    acts: [
      act('a1', '활동 1. 상황에 맞는 말과 부호 고르기', 13, 'emotion',
        '"친구가 이 말을 들으면 어떻게 대답할까요? 결과를 읽고 내 선택이 맞았는지 따져 보세요." 결과 글이 상황과 어긋나면 부호를 바꿔 다시 말해 보게 한다. 부호를 잘못 골라도 친구가 알아듣는다고 여기는 학생에게 "알아듣지 못하는 친구가 있을 수 있어요."라고 말해 준다.',
        '상황을 읽고 알맞은 부호를 붙인 말을 골라요. 고른 말을 짝에게 읽어 주고 짝의 대답이 상황에 맞는지 들어 봐요.', LV0,
        [{ prompt: '친구가 하품을 해요. 피곤한지 묻는 말을 골라 보세요.', toolOptions: { mode: 'branch', situation: '친구가 계속 하품을 해요. 피곤한지 알고 싶어요.', ask: '어떻게 쓸까요?', choices: [
            { id: 'q', text: 'You are tired?', result: '친구가 "Yes, a little." 하고 대답해요.', mood: '편안함' },
            { id: 'd', text: 'You are tired.', result: '친구가 대답할 말을 몰라 가만히 있어요.', mood: '걱정', why: '마침표는 알려 주는 말이라 친구는 대답할 말을 못 찾아요.' }] },
           target: { choice: 'q' }, difficulty: 0.15, hints: ['내가 알고 싶은 것을 묻는 말인지 알려 주는 말인지 먼저 정해 보세요.', '고른 말을 읽고 친구가 어떻게 대답할지 결과 글을 읽어 보세요.', '모르는 것을 물을 때는 끝에 물음표를 붙여요.'] },
         { prompt: '엄마가 "숙제 다 했어?" 하고 물어서 사실을 알려 드려요. 알맞은 말을 골라 보세요.', toolOptions: { mode: 'branch', situation: '숙제를 이미 끝냈어요. 엄마께 사실을 알려 드려요.', ask: '어떻게 쓸까요?', choices: [
            { id: 'q', text: 'I finished my homework?', result: '엄마가 "정말이니?" 하고 고개를 갸웃해요.', mood: '걱정', why: '물음표를 붙이면 확실하지 않아 되묻는 말처럼 들려요.' },
            { id: 'd', text: 'I finished my homework.', result: '엄마가 "잘했구나." 하고 웃으세요.', mood: '뿌듯함' }] },
           target: { choice: 'd' }, difficulty: 0.2, hints: ['사실을 말씀드리는 것인지 되묻는 것인지 정해 보세요.', '엄마의 반응을 읽고 내가 하려던 말과 맞는지 따져 보세요.', '확실한 사실을 알려 드릴 때는 마침표로 끝내요.'] },
         { prompt: '새로 온 친구 이름을 몰라요. 이름을 물어보는 말을 골라 보세요.', toolOptions: { mode: 'branch', situation: '새로 온 친구의 이름을 몰라요. 이름을 알고 싶어요.', ask: '어떻게 쓸까요?', choices: [
            { id: 'd', text: 'What is your name.', result: '친구가 이름을 말할 차례인지 몰라 갸웃해요.', mood: '걱정', why: '질문 끝에는 물음표가 있어야 대답할 차례임을 알아요.' },
            { id: 'q', text: 'What is your name?', result: '친구가 "I am Sora." 하고 웃으며 답해요.', mood: '기쁨' },
            { id: 'e', text: 'what is your name?', result: '글자가 작아 읽는 사람이 문장이 시작되는 곳을 놓쳐요.', mood: '걱정', why: '문장 첫 글자는 큰 글자로 써요.' }] },
           target: { choice: 'q' }, difficulty: 0.25, hints: ['질문 끝 부호와 문장 첫 글자 두 곳을 모두 보세요.', '결과 글에서 친구가 대답했는지 읽어 보세요.', '큰 글자로 시작하고 끝에 물음표를 붙인 문장이 바른 질문이에요.'] }]),
      act('a2', '활동 2. 부호가 바뀐 문장과 뜻 짝짓기', 14, 'wordcards',
        '"영어 문장 아래 우리말 뜻을 보세요. 무엇이 달라졌나요?" 부호 하나로 알려 주는 말과 묻는 말이 달라짐을 말하게 한다. 부호를 바꾸면 한글 뜻은 같다고 여기는 학생에게 "한 번은 알려 주고 한 번은 대답을 기다려요."라고 짚는다.',
        '영어 문장과 그 문장이 전하는 우리말 뜻을 짝짓고, 부호를 바꾸어 다시 말해 봐요.', LV({ mode: 'match' }),
        [MA('영어 문장과 뜻을 짝지어 보세요.', [{ id: 's1', label: 'Jun is hungry.' }, { id: 's2', label: 'Jun is hungry?' }], ['준이 배고픈지 물어요', '준이 배고프다고 알려요'], { s1: '준이 배고프다고 알려요', s2: '준이 배고픈지 물어요' }, '마침표는 알려 주고 물음표는 대답을 기다려요.', 0),
         MA('영어 문장과 뜻을 짝지어 보세요.', [{ id: 's1', label: 'This is a rabbit.' }, { id: 's2', label: 'This is a rabbit?' }, { id: 's3', label: 'Is this a rabbit?' }], ['토끼가 맞는지 놀라 되물어요', '이것이 토끼라고 알려요', '이것이 토끼인지 물어요'], { s1: '이것이 토끼라고 알려요', s2: '토끼가 맞는지 놀라 되물어요', s3: '이것이 토끼인지 물어요' }, '낱말 순서가 같은데 부호만 다른 문장은 말투를 올려 읽는 쪽이 되묻는 말이에요.', 1),
         MA('영어 문장과 뜻을 짝지어 보세요.', [{ id: 's1', label: 'We can go.' }, { id: 's2', label: 'Can we go?' }, { id: 's3', label: 'Go now.' }], ['지금 가라고 시켜요', '우리가 갈 수 있다고 알려요', '우리가 가도 되는지 물어요'], { s1: '우리가 갈 수 있다고 알려요', s2: '우리가 가도 되는지 물어요', s3: '지금 가라고 시켜요' }, '낱말의 차례가 바뀐 문장은 묻는 말이에요. 시키는 말은 짧게 끝나요.', 2),
         TALK('짝에게 부호만 다른 두 문장(마침표 / 물음표)을 써서 읽어 주세요. 짝은 뜻의 차이를 한국어로 말해 줘요. 바꾸어 한 뒤 "다 했어요"를 누르세요.')]),
    ],
    wrapT: '"부호가 뜻을 바꾸는 예를 하나 말해 볼까요?" 한두 명이 말한 문장을 칠판에 적고 마침표와 물음표를 바꿔 본다. 출구 2번에서 둘 다 같은 뜻이라고 고른 학생에게는 친구가 어떻게 대답할지 상황을 말해 보게 한다.',
    exit: [
      { type: 'tool', tool: 'wordcards', options: { mode: 'match', shuffle: false, slots: [{ id: 's1', label: 'Mina is ready.' }, { id: 's2', label: 'Mina is ready?' }], cards: ['미나가 준비됐는지 물어요', '미나가 준비됐다고 알려요'] }, prompt: '영어 문장과 뜻을 짝지어 보세요.', target: { match: { s1: '미나가 준비됐다고 알려요', s2: '미나가 준비됐는지 물어요' } }, difficulty: 0.2 },
      { type: 'choice', prompt: '"It is raining?" 과 "It is raining." 의 차이로 알맞은 것은 무엇일까요?', options: ['뜻이 완전히 같아요', '하나는 알려 주고 하나는 확인하려고 물어요', '둘 다 물음표를 붙여야 해요'], answer: 1, difficulty: 0.25, explain: '마침표는 사실을 알려 주고 물음표는 맞는지 묻거나 놀라 되물어요.' },
      { type: 'mood', prompt: '부호에 따라 뜻이 달라진다는 것을 알겠나요?' },
    ],
    wsTitle: '부호와 뜻',
    ws: [
      { type: 'choice', prompt: '친구가 비 오는지 물어보려고 할 때 알맞은 문장에 ○ 하세요.', options: ['It is raining.', 'Is it raining?', 'It is raining?'], answer: 'Is it raining?' },
      { type: 'table', prompt: '부호를 바꾸어 뜻이 어떻게 달라지는지 쓰세요.', columns: ['문장', '뜻'], cells: [['Tom is here.', ''], ['Is Tom here?', '']], answer: '톰이 여기 있다고 알려요 / 톰이 여기 있는지 물어요' },
      { type: 'check', prompt: '오늘 알게 된 것에 ✓ 하세요.', options: ['부호가 다르면 말하는 뜻도 달라져요.', '묻는 문장은 대답을 기다려요.'] },
      { type: 'short', prompt: '부호만 다른 영어 문장 두 개를 쓰고 뜻의 차이를 한 줄로 쓰세요.' },
    ],
    easyNote: '마침표는 알려 주고 물음표는 물어요. 소리 내어 읽고 끝을 올리는지 내리는지 느껴 보세요.',
    easy: [
      { type: 'choice', prompt: '뜻을 물어보는 문장에 ○ 하세요.', options: ['You are hungry.', 'Are you hungry?'], answer: 'Are you hungry?' },
      { type: 'table', prompt: '알맞은 부호를 쓰세요.', columns: ['문장', '부호'], cells: [['I am hungry', ''], ['Are you hungry', '']], answer: '. / ?' },
      { type: 'short', prompt: '부호를 붙여 Is it a ball ___ 를 완성하세요.' },
    ],
    diff: {
      easy: '맞는 말을 고르면 친구의 반응이 보이고, 틀리면 까닭을 말해 주고 되돌려요.',
      base: '결과 글을 읽고 내가 고른 말이 맞았는지 스스로 판단해요.',
      challenge: '부호와 첫 글자를 동시에 살펴야 하는 선택지와 시키는 말이 섞여 있어요.',
    },
    notes: '자주 보이는 어려움: ① 부호는 꾸밈이라서 없어도 뜻이 그대로라고 여긴다 → 부호만 바꾼 두 문장을 친구에게 읽어 주고 대답을 비교한다. ② 놀라서 되묻는 You are tired? 가 항상 틀렸다고 여긴다 → 대화에서는 쓸 수 있으나 쓰기에서는 묻는 문장 형태를 먼저 익힌다고 말해 준다. ③ 물음표 뒤에 마침표를 또 찍는다 → 한 문장에는 끝 부호를 하나만 찍는다. 소리 단추는 누를 때만 난다.',
  }));

    // ───────────── 7차시 (core) 점검 ─────────────
  L.push(lesson(7, {
    title: '내가 쓴 짧은 글에서 큰 글자와 부호 틀린 곳 찾기',
    objective: '짧은 글을 소리 내어 읽으며 큰 글자와 끝 부호가 틀린 문장을 찾아내고, 고쳐야 할 곳을 하나씩 짚을 수 있다.',
    ill: 'a child holding a magnifying glass over a short English paragraph, circling small mistakes with a red pencil',
    top: 'Check your writing', bottom: '큰 글자 · 이름 · 끝 부호', extra: [{ motif: 'house', x: 70, y: 218, color: 'sky' }, { motif: 'star', x: 400, y: 70 }],
    introT: '"글을 다 썼다면 바로 내도 될까요? 선생님이 쓴 글에서 틀린 곳을 찾아볼까요?" 칠판에 세 문장 글을 써 두고 큰 글자와 부호가 틀린 곳을 일부러 넣는다. "내용만 맞으면 대소문자와 부호는 틀려도 된다"고 여기는 학생에게 "읽는 사람은 글자 모양과 부호로 문장의 시작과 끝, 뜻을 알아요."라고 짚는다.',
    introS: '칠판에 적힌 글에서 틀린 곳을 찾아 손가락으로 짚고, 어떻게 고칠지 말해 봐요.',
    acts: [
      act('a1', '활동 1. 짧은 글에서 고쳐야 할 문장 모두 찾기', 13, 'wordcards',
        '"먼저 소리 내어 읽고, 문장마다 첫 글자와 끝 부호를 하나씩 손가락으로 짚으세요." 글 한 편에 고칠 문장이 여러 개일 수 있다. 처음 하나를 찾고 멈추는 학생에게는 "마지막 문장까지 같은 순서로 확인했나요?"라고 되묻는다.',
        '글 한 편에서 큰 글자나 끝 부호가 틀린 문장을 모두 골라요. 고른 문장은 어디를 고칠지 말해 봐요.', LV({ mode: 'pick', basket: '고칠 문장' }),
        [PK('고쳐야 할 문장을 모두 골라 보세요.', '고칠 문장', [C('i wake up at seven.', '맨 앞 i를 큰 글자 I로 써야 해요.'), C('I eat breakfast.'), C('Do you eat breakfast.', '묻는 문장이라 물음표로 끝내야 해요.'), C('Then I go to school.')], ['i wake up at seven.', 'Do you eat breakfast.'], '문장마다 첫 글자와 끝 부호를 하나씩 확인해 보세요.', 0),
         PK('고쳐야 할 문장을 모두 골라 보세요.', '고칠 문장', [C('On Monday we have art', '문장 끝에 마침표가 없어요.'), C('We paint flowers.'), C('what do you paint?', '맨 앞 w를 큰 글자 W로 써야 해요.'), C('Mina paints a tree.')], ['On Monday we have art', 'what do you paint?'], '끝 부호가 아예 없는 문장도 고칠 문장이에요.', 1),
         PK('고쳐야 할 문장을 모두 골라 보세요.', '고칠 문장', [C('Sora is my friend', '문장 끝에 마침표가 없어요.'), C('She lives in busan.', '도시 이름 busan을 큰 글자로 써야 해요.'), C('Does she like music?'), C('Yes, she does.'), C('we sing together.', '맨 앞 w를 큰 글자 W로 써야 해요.')], ['Sora is my friend', 'She lives in busan.', 'we sing together.'], '첫 글자, 도시 이름, 끝 부호 세 곳을 모두 보세요.', 2),
         PK('고쳐야 할 문장을 모두 골라 보세요.', '고칠 문장', [C('It is Friday.'), C('Is it Saturday tomorrow.', '묻는 문장이라 물음표로 끝내야 해요.'), C('Jun and i play soccer.', '나를 가리키는 i를 큰 글자 I로 써야 해요.'), C('We win?', '알리는 문장이라 마침표로 끝내야 해요.')], ['Is it Saturday tomorrow.', 'Jun and i play soccer.', 'We win?'], '글 속 어디에서나 I와 끝 부호가 맞는지 보세요.', 3)]),
      act('a2', '활동 2. 문장 하나에서 고칠 곳을 빠짐없이 체크하기', 14, 'kitchen',
        '"고칠 곳은 문장 안에서 한 군데가 아니에요. 첫 글자, 이름, 끝 부호를 차례로 훑어요." 이미 맞게 쓴 낱말까지 고친다고 체크하는 학생에게 "이 낱말은 큰 글자로 써야 하는 낱말인가요?"라고 되묻는다. 짝 활동에서는 짝이 쓴 글에서 고칠 곳을 하나만 골라 말해 준다.',
        '소문자로 쓴 문장을 읽고 고쳐야 할 곳에 모두 체크해요. 그다음 짝의 글을 바꾸어 읽고 고칠 곳 하나를 알려 줘요.', LV0,
        [{ prompt: 'my friend mina lives in seoul 에서 고쳐야 할 곳을 모두 체크해 보세요.', toolOptions: { mode: 'checklist', title: '고칠 곳', items: [{ id: 'c1', text: '맨 앞 my 를 큰 글자로' }, { id: 'c2', text: 'friend 를 큰 글자로' }, { id: 'c3', text: 'mina 를 큰 글자로' }, { id: 'c4', text: 'seoul 을 큰 글자로' }, { id: 'c5', text: '끝에 마침표를 붙여요' }, { id: 'c6', text: '끝에 물음표를 붙여요' }] }, target: { checklist: ['c1', 'c3', 'c4', 'c5'] }, difficulty: 0.2, hints: ['문장 맨 앞과 사람·도시 이름, 그리고 문장의 끝을 차례로 훑어보세요.'] },
         { prompt: 'what day is it today 에서 고쳐야 할 곳을 모두 체크해 보세요.', toolOptions: { mode: 'checklist', title: '고칠 곳', items: [{ id: 'c1', text: '맨 앞 what 을 큰 글자로' }, { id: 'c2', text: 'day 를 큰 글자로' }, { id: 'c3', text: 'it 을 큰 글자로' }, { id: 'c4', text: '끝에 물음표를 붙여요' }, { id: 'c5', text: '끝에 마침표를 붙여요' }] }, target: { checklist: ['c1', 'c4'] }, difficulty: 0.25, hints: ['날짜를 묻는 문장이에요. 문장 시작과 끝 부호 말고 이름표 낱말이 있는지 보세요.'] },
         { prompt: 'we visit jeju in may 에서 고쳐야 할 곳을 모두 체크해 보세요.', toolOptions: { mode: 'checklist', title: '고칠 곳', items: [{ id: 'c1', text: '맨 앞 we 를 큰 글자로' }, { id: 'c2', text: 'visit 을 큰 글자로' }, { id: 'c3', text: 'jeju 를 큰 글자로' }, { id: 'c4', text: 'may 를 큰 글자로' }, { id: 'c5', text: '끝에 마침표를 붙여요' }, { id: 'c6', text: '끝에 물음표를 붙여요' }] }, target: { checklist: ['c1', 'c3', 'c4', 'c5'] }, difficulty: 0.3, hints: ['도시 이름과 달 이름을 각각 따로 확인해 보세요.'] },
         TALK('짝과 쓴 글을 바꾸어 읽고, 고칠 곳 하나를 짚어 말해 줘요. 고칠 곳이 없으면 칭찬할 곳을 한 가지 말해 줘요. 바꾸어 한 뒤 "다 했어요"를 누르세요.')]),
    ],
    wrapT: '"글을 점검할 때 어떤 순서로 보면 놓치지 않을까요?" 두세 명이 말하는 순서를 듣고 첫 글자 → 이름 → 끝 부호로 정리한다. 출구 1번에서 한 문장만 고른 학생에게는 글 속 문장을 하나씩 가리고 읽으며 다시 찾게 한다.',
    exit: [
      { type: 'tool', tool: 'wordcards', options: { mode: 'pick', basket: '고칠 문장', shuffle: false, cards: [C('He lives in daegu.', '도시 이름 daegu를 큰 글자로 써야 해요.'), C('Can he swim?'), C('he can swim.', '맨 앞 h를 큰 글자 H로 써야 해요.'), C('We clap.')] }, prompt: '고쳐야 할 문장을 모두 골라 보세요.', target: { pick: ['He lives in daegu.', 'he can swim.'] }, difficulty: 0.2 },
      { type: 'choice', prompt: '글을 점검하는 순서로 알맞은 것은 무엇일까요?', options: ['소리 내어 읽기 → 첫 글자 → 이름 → 끝 부호', '한 번 쓰고 바로 내기', '끝 부호만 보기'], answer: 0, difficulty: 0.15, explain: '읽으면서 문장마다 같은 순서로 확인하면 빠뜨리지 않아요.' },
      { type: 'mood', prompt: '글의 틀린 곳을 찾는 일은 어땠나요?' },
    ],
    wsTitle: '글 점검하기',
    ws: [
      { type: 'choice', prompt: '고쳐야 할 곳이 없는 글에 ○ 하세요.', options: ['I like Friday. it is fun.', 'I like Friday. It is fun.', 'I like friday. It is fun.'], answer: 'I like Friday. It is fun.' },
      { type: 'table', prompt: '글을 읽고 틀린 곳을 찾아 고쳐 쓰세요.', columns: ['틀린 글', '고친 글'], cells: [['mina and i go to busan', ''], ['Do you like pizza.', '']], answer: 'Mina and I go to Busan. / Do you like pizza?' },
      { type: 'check', prompt: '내 글을 점검하고 ✓ 하세요.', options: ['소리 내어 읽었어요.', '문장마다 첫 글자를 보았어요.', '이름·요일·달·I를 보았어요.', '끝 부호를 보았어요.'] },
      { type: 'short', prompt: '짝의 글에서 찾은 고칠 곳 하나와 고치는 방법을 쓰세요.' },
    ],
    easyNote: '순서를 정해 한 문장씩 보세요. ① 첫 글자 ② 이름 ③ 끝 부호.',
    easy: [
      { type: 'choice', prompt: 'It is monday. 에서 고칠 곳에 ○ 하세요.', options: ['It', 'monday', 'is'], answer: 'monday' },
      { type: 'table', prompt: '고쳐 쓰세요.', columns: ['틀린 문장', '고친 문장'], cells: [['we like june.', '']], answer: 'We like June.' },
      { type: 'short', prompt: '틀리게 쓴 문장을 친구가 고친 것을 보고 어디가 달라졌는지 써 보세요.' },
    ],
    diff: {
      easy: '맞는 문장을 고르면 초록 테두리가 생기고, 틀린 문장을 빠뜨리면 까닭을 말해 주고 되돌려요.',
      base: '고칠 곳을 모두 체크한 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '한 문장에 고칠 곳이 셋 이상 겹친 문장이 나와 빠뜨리지 않고 훑어야 해요.',
    },
    notes: '자주 보이는 어려움: ① 고칠 곳을 하나만 찾고 멈춘다 → 점검 순서를 정해 문장 끝까지 같은 순서로 보게 한다. ② 틀리지 않은 낱말까지 고친다 → 이름표 낱말이 맞는지 이유를 말하게 한다. ③ 끝 부호가 없는 문장을 놓친다 → 손가락으로 마지막 낱말 뒤를 짚게 한다. 짝 활동에서는 비난하는 말 대신 "여기를 이렇게 고쳐 보자"라고 말하도록 안내한다.',
  }));

  // ───────────── 8차시 (practice) 오류 종류 가르기 ─────────────
  L.push(lesson(8, {
    title: '틀린 문장의 오류 종류를 가려 고쳐 쓰기',
    objective: '틀린 문장이 큰 글자 오류인지 끝 부호 오류인지 가려내고, 두 가지가 함께 틀린 문장도 바르게 고쳐 쓸 수 있다.',
    ill: 'a teacher desk with sticky notes sorted into two trays labeled big letter and dot, and a pencil fixing a sentence',
    top: 'Big letter? Dot or ?', bottom: '오류 종류 가려 고치기', extra: [{ motif: 'tree', x: 70, y: 214 }, { motif: 'cloud', x: 400, y: 70 }],
    introT: '"고치기 전에 무엇이 틀렸는지부터 이름을 붙여 볼까요? jun has a kite 는 어느 곳이 틀렸나요?" 첫 글자, 이름, 끝 부호가 모두 틀렸음을 하나씩 짚어 보인다. 한 곳만 고치고 다 고쳤다고 여기는 학생에게 "고쳐 쓴 문장을 다시 읽어도 틀린 곳이 남았나요?"라고 되묻는다.',
    introS: '칠판의 문장에서 틀린 곳이 모두 몇 곳인지 세어 보고, 어떤 종류의 틀림인지 말해 봐요.',
    acts: [
      act('a1', '활동 1. 틀린 곳이 큰 글자인지 부호인지 가르기', 13, 'wordcards',
        '"이 문장은 글자 모양이 틀렸나요, 끝 부호가 틀렸나요?" 하나씩 짚으며 칸으로 나누게 한다. 바르게 쓴 문장도 섞여 있으니 모든 문장을 틀렸다고 여기지 않도록 "그대로 두어도 되는 문장"을 찾게 한다. 첫 글자와 부호를 같은 오류로 묶는 학생에게 "고치는 방법이 어떻게 다른가요?"라고 묻는다.',
        '틀린 문장을 큰 글자를 고칠 칸, 부호를 고칠 칸, 그대로 괜찮은 칸으로 나누어요.', LV({ mode: 'sort' }),
        [SO('문장을 알맞은 칸에 나누어 보세요.', [{ id: 'cap', label: '큰 글자를 고쳐요' }, { id: 'punc', label: '끝 부호를 고쳐요' }, { id: 'ok', label: '그대로 괜찮아요' }], ['jun has a kite.', 'Does Jun have a kite.', 'Jun has a kite.', 'Jun has a kite?'], { cap: ['jun has a kite.'], punc: ['Does Jun have a kite.', 'Jun has a kite?'], ok: ['Jun has a kite.'] }, '글자 모양이 틀린 문장, 끝 부호가 틀린 문장, 둘 다 맞는 문장을 구별해 보세요.', 0),
         SO('문장을 알맞은 칸에 나누어 보세요.', [{ id: 'cap', label: '큰 글자를 고쳐요' }, { id: 'punc', label: '끝 부호를 고쳐요' }, { id: 'ok', label: '그대로 괜찮아요' }], ['We go to seoul.', 'Is he in May?', 'Is he in may?', 'Where is my cap.', 'It is on the desk.'], { cap: ['We go to seoul.', 'Is he in may?'], punc: ['Where is my cap.'], ok: ['Is he in May?', 'It is on the desk.'] }, '달·도시 이름의 첫 글자와 문장 끝 부호를 따로 살펴보세요.', 1),
         SO('문장을 알맞은 칸에 나누어 보세요.', [{ id: 'cap', label: '큰 글자를 고쳐요' }, { id: 'punc', label: '끝 부호를 고쳐요' }, { id: 'ok', label: '그대로 괜찮아요' }], ['Sora and i read.', 'Sora and I read?', 'Sora and I read.', 'can she read?', 'Can she read?', 'She can read?'], { cap: ['Sora and i read.', 'can she read?'], punc: ['Sora and I read?', 'She can read?'], ok: ['Sora and I read.', 'Can she read?'] }, '나를 가리키는 I, 문장 시작, 끝 부호를 차례로 보세요.', 2),
         SO('문장을 알맞은 칸에 나누어 보세요.', [{ id: 'cap', label: '큰 글자를 고쳐요' }, { id: 'punc', label: '끝 부호를 고쳐요' }, { id: 'ok', label: '그대로 괜찮아요' }], ['Tom likes tuesday.', 'Do you like Tuesday.', 'Do you like Tuesday?', 'My mom works in daejeon.', 'I work in Daejeon.'], { cap: ['Tom likes tuesday.', 'My mom works in daejeon.'], punc: ['Do you like Tuesday.'], ok: ['Do you like Tuesday?', 'I work in Daejeon.'] }, '요일과 도시 이름은 큰 글자 오류예요. 질문 끝 부호는 따로 살펴요.', 3)]),
      act('a2', '활동 2. 큰 글자와 부호가 함께 틀린 문장 고쳐 짝짓기', 14, 'wordcards',
        '"고친 문장에서 바뀐 곳에 동그라미를 쳐 보세요. 몇 곳 바뀌었나요?" 바뀐 곳의 개수가 틀린 곳의 개수와 같은지 비교하게 한다. 한 곳만 고친 카드를 고르는 학생에게는 "처음 문장의 첫 글자와 끝을 같이 보세요."라고 말해 준다. 짝 활동에서는 서로의 짝짓기가 맞는지 이유를 들어 말해 준다.',
        '두 곳 이상 틀린 문장과 바르게 고친 문장을 짝지어요. 바뀐 곳에 동그라미를 치며 짝에게 이유를 말해요.', LV({ mode: 'match' }),
        [MA('틀린 문장과 바르게 고친 문장을 짝지어 보세요.', [{ id: 'w1', label: 'we like may' }, { id: 'w2', label: 'is it monday' }, { id: 'w3', label: 'jun is my friend' }], ['Is it Monday?', 'We like May.', 'Jun is my friend.'], { w1: 'We like May.', w2: 'Is it Monday?', w3: 'Jun is my friend.' }, '틀린 문장의 첫 글자, 요일·달·이름, 끝 부호를 모두 비교해 보세요.', 0),
         MA('틀린 문장과 바르게 고친 문장을 짝지어 보세요.', [{ id: 'w1', label: 'where is sora' }, { id: 'w2', label: 'mina and i run' }, { id: 'w3', label: 'do you know busan' }], ['Do you know Busan?', 'Where is Sora?', 'Mina and I run.'], { w1: 'Where is Sora?', w2: 'Mina and I run.', w3: 'Do you know Busan?' }, '세 문장 모두 끝 부호가 빠졌어요. 묻는 문장인지 알리는 문장인지 가려 보세요.', 1),
         MA('틀린 문장과 바르게 고친 문장을 짝지어 보세요.', [{ id: 'w1', label: 'what do i need on friday.' }, { id: 'w2', label: 'tom and i swim on sunday' }, { id: 'w3', label: 'does she live in jeju.' }, { id: 'w4', label: 'it is october' }], ['It is October.', 'What do I need on Friday?', 'Tom and I swim on Sunday.', 'Does she live in Jeju?'], { w1: 'What do I need on Friday?', w2: 'Tom and I swim on Sunday.', w3: 'Does she live in Jeju?', w4: 'It is October.' }, '틀린 곳이 셋 이상인 문장도 있어요. 하나씩 고쳐 보세요.', 2),
         TALK('짝에게 일부러 틀린 곳이 두 군데인 문장을 써서 주세요. 짝은 고칠 곳 두 군데를 찾아 고쳐 써 줘요. 바꾸어 한 뒤 "다 했어요"를 누르세요.')]),
    ],
    wrapT: '"오늘 어떤 종류의 틀림을 가장 많이 찾았나요?" 손을 들어 보게 한 뒤 가장 많은 종류를 한 번 더 연습한다. 출구 1번에서 큰 글자 칸과 부호 칸을 바꿔 넣은 학생에게는 문장 앞과 뒤를 손으로 짚으며 어디가 틀렸는지 말하게 한다.',
    exit: [
      { type: 'tool', tool: 'wordcards', options: { mode: 'sort', shuffle: false, slots: [{ id: 'cap', label: '큰 글자를 고쳐요' }, { id: 'punc', label: '끝 부호를 고쳐요' }], cards: ['Is she in korea?', 'Is she in Korea.', 'we are friends.', 'We are friends?'] }, prompt: '틀린 문장을 알맞은 칸에 나누어 보세요.', target: { sort: { cap: ['Is she in korea?', 'we are friends.'], punc: ['Is she in Korea.', 'We are friends?'] } }, difficulty: 0.25 },
      { type: 'choice', prompt: '"can you swim" 을 바르게 고친 것은 무엇일까요?', options: ['Can you swim', 'can you swim?', 'Can you swim?'], answer: 2, difficulty: 0.2, explain: '첫 글자를 큰 글자로, 끝에 물음표를 붙여야 두 곳이 모두 바르게 돼요.' },
      { type: 'mood', prompt: '틀린 곳을 가려 고치는 일은 어땠나요?' },
    ],
    wsTitle: '오류 종류와 고치기',
    ws: [
      { type: 'choice', prompt: '큰 글자와 부호가 모두 틀린 문장에 ○ 하세요.', options: ['Is it sunday?', 'is it sunday', 'It is Sunday.'], answer: 'is it sunday' },
      { type: 'table', prompt: '틀린 곳을 모두 고쳐 쓰세요.', columns: ['틀린 문장', '고친 문장'], cells: [['we play in july', ''], ['where do you live.', ''], ['sora and i like may', '']], answer: 'We play in July. / Where do you live? / Sora and I like May.' },
      { type: 'check', prompt: '고친 문장을 읽고 확인한 것에 ✓ 하세요.', options: ['첫 글자를 고쳤어요.', '이름·요일·달·I를 고쳤어요.', '끝 부호를 알맞게 바꾸었어요.'] },
      { type: 'short', prompt: '오늘 가장 자주 만난 틀림은 무엇이었는지 쓰세요.' },
    ],
    easyNote: '고친 문장을 다시 읽어 보세요. 아직 틀린 곳이 남아 있으면 한 번 더 고쳐요.',
    easy: [
      { type: 'choice', prompt: '두 곳이 틀린 문장에 ○ 하세요.', options: ['i like june.', 'I like June.'], answer: 'i like june.' },
      { type: 'table', prompt: '고쳐 쓰세요.', columns: ['틀린 문장', '고친 문장'], cells: [['it is may', '']], answer: 'It is May.' },
      { type: 'short', prompt: '친구 이름이 들어간 영어 문장을 쓰고 큰 글자를 확인하세요.' },
    ],
    diff: {
      easy: '맞는 칸에 넣으면 초록 테두리가 생기고, 틀리면 까닭을 말해 주고 되돌려요.',
      base: '카드를 모두 나눈 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '틀린 곳이 세 곳 이상인 문장을 짝짓고 서로 설명해야 해요.',
    },
    notes: '자주 보이는 어려움: ① 틀린 곳 하나만 고치고 끝낸다 → 고친 문장을 소리 내어 읽고 문장 앞·가운데·끝을 차례로 짚게 한다. ② 바르게 쓴 문장도 습관처럼 고친다 → "그대로 괜찮아요" 칸의 이유를 말하게 한다. ③ 물음표를 쓰고도 첫 글자를 소문자로 둔다 → 두 가지는 서로 다른 점검 항목임을 보여 준다. 짝에게 틀린 문장을 낼 때는 학생 실명이나 개인 정보를 쓰지 않는다.',
  }));

  // ───────────── 9차시 (wrap) 단원 정리 ─────────────
  L.push(lesson(9, {
    title: '점검 순서를 익히고 내 글을 스스로 평가하기',
    objective: '문장 첫 글자, 이름·요일·달·I, 끝 부호를 차례로 점검하는 순서를 말하고, 점검한 글과 오늘의 쓰기를 스스로 평가할 수 있다.',
    ill: 'a child holding a three-item checklist with checked boxes next to a neat short paragraph on a desk',
    top: 'Read, Check, Fix', bottom: '읽고 · 확인하고 · 고쳐요', extra: [{ motif: 'flower', x: 80, y: 214 }, { motif: 'bird', x: 400, y: 70 }],
    introT: '"한 단원 동안 큰 글자와 부호를 배웠지요. 글을 다 쓰고 나면 무엇을 먼저 하나요?" 학생 대답을 칠판에 순서대로 모아 본다. 점검 순서가 길면 귀찮고 낭비라고 여기는 학생에게 "한 번에 하나만 보면 빠르게 끝나요."라고 알려 준다. 오늘은 점검표를 쓰는 연습을 하고 스스로 평가한다.',
    introS: '지금까지 배운 것을 떠올려 글을 다 쓰고 나서 할 일을 순서대로 말해 봐요.',
    acts: [
      act('a1', '활동 1. 글 점검 순서 바르게 놓기', 13, 'wordcards',
        '"무엇을 먼저 하면 가장 놓치지 않을까요? 소리 내어 읽는 일이 가장 먼저예요." 읽지 않고 눈으로만 훑으면 놓치기 쉬움을 보여 준다. 순서가 달라도 상관없다고 여기는 학생에게 "한 번에 하나만 보면 놓치는 곳이 적어요."라고 말해 준다.',
        '글을 점검하는 단계 카드를 먼저 할 일부터 차례대로 놓아요. 짝과 순서가 같은지 비교해요.', LV({ mode: 'order' }),
        [OR('글 점검 단계를 먼저 할 일부터 차례대로 놓아 보세요.', ['끝 부호 보기', '소리 내어 읽기', '이름·요일·달·I 보기', '첫 글자 보기'], ['소리 내어 읽기', '첫 글자 보기', '이름·요일·달·I 보기', '끝 부호 보기'], '글 전체를 먼저 읽고, 그다음 문장의 앞에서 뒤로 차례로 보세요.', 0),
         OR('글 쓰고 고치는 단계를 먼저 할 일부터 차례대로 놓아 보세요.', ['고쳐 다시 쓰기', '짝에게 바꾸어 읽어 달라고 하기', '내 글을 쓰기', '스스로 점검하기'], ['내 글을 쓰기', '스스로 점검하기', '짝에게 바꾸어 읽어 달라고 하기', '고쳐 다시 쓰기'], '내가 먼저 보고 그다음에 다른 사람의 눈을 빌려요.', 1),
         OR('한 문장을 점검하는 단계를 먼저 할 일부터 차례대로 놓아 보세요.', ['끝 부호를 찍었나', '첫 글자가 큰 글자인가', '이름을 큰 글자로 썼나'], ['첫 글자가 큰 글자인가', '이름을 큰 글자로 썼나', '끝 부호를 찍었나'], '문장은 앞에서 뒤로 읽어요. 점검도 앞에서 뒤로 해요.', 2)]),
      act('a2', '활동 2. 모든 점검을 지킨 글 고르기와 한 단원 정리', 14, 'wordcards',
        '"세 가지를 모두 지킨 글은 어느 것인가요? 하나라도 어긋나면 고칠 글이에요." 다 맞는 글을 고르는 대신 틀린 글의 틀린 곳을 말하며 지워 가게 한다. 정리 활동에서는 단원 처음의 내 글과 지금의 글을 비교해 볼 기회를 준다.',
        '큰 글자·이름·끝 부호를 모두 지킨 글만 고르고, 마지막으로 내가 쓴 세 문장 글을 점검표로 확인해요.', LV({ mode: 'pick', basket: '바른 글' }),
        [PK('큰 글자와 끝 부호를 모두 지킨 글만 골라 보세요.', '바른 글', [C('I am Jun. I live in Busan.'), C('I am Jun. i live in Busan.', '두 번째 문장 첫 글자 i를 큰 글자로 써야 해요.'), C('Do you like May? Yes, I do.'), C('Do you like May. Yes, I do.', '묻는 문장 끝에 물음표를 써야 해요.')], ['I am Jun. I live in Busan.', 'Do you like May? Yes, I do.'], '문장마다 첫 글자, 이름, 끝 부호를 차례로 보세요.', 0),
         PK('큰 글자와 끝 부호를 모두 지킨 글만 골라 보세요.', '바른 글', [C('Mina and I run. We are fast.'), C('Mina and i run. We are fast.', '나를 가리키는 i를 큰 글자 I로 써야 해요.'), C('It is friday. We rest.', '요일 friday를 큰 글자로 시작해야 해요.'), C('It is Friday. We rest.')], ['Mina and I run. We are fast.', 'It is Friday. We rest.'], 'I와 요일 이름까지 확인해 보세요.', 1),
         PK('큰 글자와 끝 부호를 모두 지킨 글만 골라 보세요.', '바른 글', [C('Is it Sunday? No, it is Monday.'), C('Is it sunday? No, it is Monday.', '요일 sunday를 큰 글자로 시작해야 해요.'), C('Where is Sora? She is home'), C('Where is Sora? She is home.')], ['Is it Sunday? No, it is Monday.', 'Where is Sora? She is home.'], '대답 문장 끝에도 부호가 있는지 보세요.', 2),
         TALK('오늘 하루 있었던 일을 영어 세 문장으로 쓰고 점검표(첫 글자, 이름·요일·달·I, 끝 부호)로 확인해요. 짝과 바꾸어 읽고 고칠 곳이 있으면 서로 알려 준 뒤 "다 했어요"를 누르세요.')]),
    ],
    wrapT: '"이 단원에서 가장 도움이 된 점검 한 가지는 무엇이었나요?" 두세 명의 대답을 듣고 점검 순서를 한 번 더 말하게 한다. 자기 평가 문항에서 모두 같은 점수를 고른 학생에게는 가장 쉬웠던 활동과 어려웠던 활동을 하나씩 말해 보게 한다. 자기 평가는 점수가 아니라 다음 연습을 정하는 근거로 쓴다.',
    exit: [
      { type: 'tool', tool: 'emotion', options: SELF('큰 글자와 끝 부호를 점검하며 내 글을 고쳐 쓸 수 있어요'), prompt: '내 쓰기 점검은 어느 정도였나요? 솔직하게 골라 보세요.', target: { level: 'any' } },
      { type: 'choice', prompt: 'Sora and i swim 을 점검표로 점검해 고쳤을 때 바른 문장은?', options: ['Sora and I swim.', 'Sora and i swim.', 'sora and I swim.'], answer: 0, difficulty: 0.25, explain: '이름 Sora, 나를 가리키는 I, 문장 끝 마침표까지 모두 고쳐야 해요.' },
      { type: 'mood', prompt: '이 단원 영어 쓰기는 어땠나요?' },
    ],
    wsTitle: '단원 정리 점검표',
    ws: [
      { type: 'choice', prompt: '글을 점검할 때 가장 먼저 하는 일에 ○ 하세요.', options: ['끝 부호만 보기', '소리 내어 읽기', '바로 제출하기'], answer: '소리 내어 읽기' },
      { type: 'table', prompt: '틀린 곳을 찾아 고쳐 쓰세요.', columns: ['틀린 글', '고친 글'], cells: [['we visit seoul on monday', ''], ['do you like may', '']], answer: 'We visit Seoul on Monday. / Do you like May?' },
      { type: 'check', prompt: '내 글에서 지킨 것에 ✓ 하세요.', options: ['문장 첫 글자가 큰 글자예요.', '이름·요일·달·I가 큰 글자로 시작해요.', '끝 부호가 알맞아요.', '소리 내어 읽고 점검했어요.'] },
      { type: 'short', prompt: '이 단원에서 알게 된 점을 한 문장으로 쓰세요.' },
    ],
    easyNote: '점검은 한 번에 한 가지씩 해요. ① 읽기 ② 첫 글자 ③ 이름 ④ 끝 부호.',
    easy: [
      { type: 'choice', prompt: '바르게 쓴 문장에 ○ 하세요.', options: ['We swim.', 'we swim'], answer: 'We swim.' },
      { type: 'table', prompt: '고쳐 쓰세요.', columns: ['틀린 문장', '고친 문장'], cells: [['i like may', '']], answer: 'I like May.' },
      { type: 'short', prompt: '오늘 내가 점검한 것을 한 가지 쓰세요.' },
    ],
    diff: {
      easy: '순서를 바르게 놓으면 초록 테두리가 생기고, 틀리면 까닭을 말해 주고 되돌려요.',
      base: '카드를 모두 놓거나 고른 뒤 확인을 눌러 스스로 고쳐요.',
      challenge: '두 문장 글에서 대답 문장의 끝 부호와 요일 이름까지 한꺼번에 점검해야 해요.',
    },
    notes: '자주 보이는 어려움: ① 점검 순서가 필요 없다고 여긴다 → 순서 없이 훑은 글과 순서대로 훑은 글에서 놓친 곳을 비교한다. ② 자기 평가에서 모든 칸에 같은 점수를 준다 → 가장 쉬웠던 활동과 어려웠던 활동을 구체적으로 말하게 한다. ③ 짝이 고쳐 준 곳을 그대로 받아들이기만 한다 → 왜 고쳤는지 이유를 되묻는다. 자기 평가는 성적에 넣지 않는다. 이 차시로 단원(1~9차시)을 마친다.',
  }));

  // @@NEXT@@

  PaperLessons.registerUnit({
    id: 'g5-eng-2-04', schema: 'edu-unit.v1', catalogUnit: CAT,
    grade: 5, subject: '영어', unitTitle: '4. 쓰기',
    flow: '1~3차시는 문장 첫 글자를 큰 글자로 시작하고, 이름·요일·달 이름과 나를 가리키는 I를 문장 어디서나 큰 글자로 쓰며, 두 문장 글에서 문장마다 새로 시작하는 곳을 점검한다. 4~6차시는 알리는 문장에는 마침표, 묻는 문장에는 물음표를 찍고, 낱말과 부호 카드로 문장을 만들며 부호가 바뀌면 말하는 뜻이 달라짐을 짝과 읽어 확인한다. 7~9차시는 짧은 글에서 큰 글자와 부호가 틀린 곳을 순서대로 점검하고, 오류 종류를 가려 고치며, 마지막 시간에 점검표로 내 글과 단원 전체를 스스로 평가한다. 단원 내내 짝과 글을 바꾸어 읽고 고칠 곳을 하나씩 알려 주는 활동을 넣는다.',
    refs: {},
    lessons: L,
  });
})();
