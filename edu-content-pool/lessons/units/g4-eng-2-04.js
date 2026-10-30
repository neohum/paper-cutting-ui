/* 4학년 영어 2학기 4단원. 쓰기 — 쉬운 낱말 보고 옮겨 쓰기(1~3차시) → 소리 듣고 첫 글자 고르기(4~5차시) → 철자 점검하며 다시 쓰기(6~7차시).
 * 낱말·문장은 모두 이 단원을 위해 새로 지은 것이다(교과서 지문·노래 가사를 옮기지 않았다). 학생이 읽는 영어는 낱말 하나나 짧은 한 문장이고 안내는 한국어다.
 * 소리: '듣기' 단추가 있는 문항은 기기가 영어 음성(speechSynthesis)으로 **누를 때만** 읽는다(자동 재생 없음). 소리가 나지 않는 기기에서는
 * 교사가 문항 번호를 말하고 낱말을 직접 읽어 준다. 철자 쓰기는 알파벳 카드를 놓는 활동이고, 공책에 직접 쓰는 일은 활동지에서 한다.
 */
(function () {
  const UNIT = 'g4-eng-2-04';
  const CAT = 'g4-영어-2학기-4';
  const U = { grade: 4, subject: '영어', unitTitle: '4. 쓰기' };
  const S3 = '[4영02-03]';
  const FORMATS = ['chromebook', 'projector', 'print'];
  const PROMPT = (what) => `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`;
  const lesson = (n, std, body) => Object.assign({ id: `${UNIT}-${String(n).padStart(2, '0')}`, schema: 'edu-lesson.v1', catalog: { unit: CAT, lesson: n } }, U, { standards: [std], minutes: 40, formats: FORMATS }, body);
  const SC = (t1, t2, motifs) => ({ viewBox: [480, 270], layers: [
    { motif: 'sun', x: 412, y: 54, s: 0.75 }, { motif: 'cloud', x: 110, y: 50 }, { motif: 'hills', y: 208 },
    ...(motifs || []),
    { motif: 'text', x: 240, y: 122, text: t1, size: 22 },
    { motif: 'text', x: 240, y: 160, text: t2, size: 18 },
  ] });
  const INTRO = (minutes, teacher, student, demo) => ({ id: 'intro', title: '도입', minutes, teacher, student, demo });
  const MAIN = (minutes, ...activities) => ({ id: 'main', title: '전개', minutes, activities });
  const WRAP = (minutes, teacher, exitTicket) => ({ id: 'wrapup', title: '정리', minutes, teacher, exitTicket });
  const ACT = (id, title, minutes, tool, teacher, task, levels, items) => ({ id, title, minutes, tool, teacher, task, levels, items });
  const MOOD = (prompt) => ({ type: 'mood', prompt });
  const WS = (title, items, note, easyItems) => ({ title, items, easy: { note, items: easyItems } });
  const DIFF = (easy, base, challenge) => ({ easy, base, challenge });
  const LV = (o) => ({ easy: Object.assign({}, o, { live: true, instant: true }), base: Object.assign({}, o), challenge: Object.assign({}, o) });
  const LA = (mode, hint1, x) => LV(Object.assign({ mode, hint1 }, mode === 'order' || mode === 'match' || mode === 'fill' ? {} : { shuffle: false }, mode === 'pick' ? { basket: '고른 카드' } : {}, mode === 'listen' ? { basket: '들은 것' } : {}, x));
  const LSP = (hint1) => ({ easy: { mode: 'spell', hint1 }, base: { mode: 'spell', hint1 }, challenge: { mode: 'spell', hint1 } });
  const C = (id, text, x) => Object.assign({ id, text }, x);
  const W = (en, ko, motif) => Object.assign({ en, ko }, motif ? { motif } : {});
  const withX = (src, x) => (src.words ? Object.assign({}, src, { words: [...src.words, ...x] }) : Object.assign({}, src, { cards: [...src.cards, ...x] }));
  const base = (o, prompt, target, src) => {
    const it = { prompt, toolOptions: src, target, difficulty: o.d == null ? 0.15 : o.d };
    if (o.h) it.hints = o.h;
    if (o.p) { it.predict = { q: o.p[0], options: o.p[1], answer: o.p[2] }; it.conclude = o.p[3]; }
    if (o.x) it.levels = { challenge: { toolOptions: withX(src, o.x) } };
    return it;
  };
  const MW = (prompt, words, o = {}) => base(o, prompt, { match: Object.fromEntries(words.map((w) => [w.en, w.en])) }, Object.assign({ mode: 'match', words }, o.rev ? { reverse: true } : {}));
  const PK = (prompt, cards, ans, o = {}) => base(o, prompt, { pick: ans }, { mode: 'pick', cards });
  const PL = (prompt, say, cards, ans, o = {}) => base(o, prompt, { pick: ans }, { mode: 'pick', listen: true, say, basket: '들은 첫 글자', cards });
  const FI = (prompt, slots, cards, map, o = {}) => base(o, prompt, { fill: map }, { mode: 'fill', slots, cards });
  const FL = (prompt, say, slots, cards, map, o = {}) => base(o, prompt, { fill: map }, { mode: 'fill', listen: true, say, slots, cards });
  const SPL = (prompt, word, ko, motif, extra, o = {}) => base(o, prompt, { spell: word }, Object.assign({ mode: 'spell', word, ko }, motif ? { motif } : {}, extra ? { extra } : {}));
  const TX = (...ls) => ls.map((l) => C(l, l));

  PaperLessons.registerUnit({
    id: UNIT, schema: 'edu-unit.v1', catalogUnit: CAT,
    grade: 4, subject: '영어', unitTitle: '4. 쓰기',
    flow: '단원은 "보고 옮겨 쓰기 → 소리로 첫 글자 찾기 → 다시 읽으며 고치기" 순으로 영어 쓰기의 첫걸음을 쌓는다. 1~3차시는 그림과 짝 지은 쉬운 낱말을 알파벳 카드로 한 글자씩 놓아 보고, 글자가 하나 빠지거나 바뀐 카드를 가려내며, 짧은 문장의 빈칸에 낱말을 옮겨 놓는다. 4~5차시는 기기의 듣기 단추나 선생님의 읽기로 낱말을 듣고 첫소리에 맞는 글자를 고른다(공책에 쓰는 일은 활동지에서 한다). 6~7차시는 쓴 낱말을 소리 단위로 끊어 읽으며 빠진 글자·바뀐 글자를 찾아 고치고 짝과 바꾸어 확인한다. 노래·챈트는 쓰지 않았고, 한 번 쓰고 끝내지 않고 다시 읽어 확인하는 습관을 단원 내내 같은 순서로 반복한다.',
    refs: {},
    lessons: [
      // ───────────────────────── 1차시 (intro) ─────────────────────────
      lesson(1, S3, {
        title: '그림을 보고 cat·dog·fish 낱말 옮겨 쓰기',
        objective: '그림과 짝 지은 쉬운 낱말 cat, dog, fish를 알파벳 카드로 한 글자씩 놓아 낱말을 만들 수 있다.',
        illustration: {
          prompt: PROMPT('a child copying the word cat from a picture card onto a notebook beside a cat and a dog sitting on the grass'),
          scene: SC('cat  dog  fish', '그림 보고 옮겨 쓰기', [{ motif: 'tree', x: 82, y: 214 }, { motif: 'house', x: 396, y: 218, color: 'sky' }, { motif: 'bird', x: 250, y: 72 }]),
        },
        stages: [
          INTRO(7, '칠판에 고양이 그림을 붙이고 "이 그림의 영어 낱말을 알고 있나요?"라고 묻는다. 한 학생이 cat이라고 말하면 낱말을 크게 쓰고 "c-a-t, 글자가 세 개예요. 손가락으로 허공에 한 글자씩 써 볼까요?"라고 말해 모두 따라 하게 한다. 그림만 슬쩍 보고 낱말을 통째로 그림처럼 그리는 학생이 있으면 "c 다음에는 무슨 글자였죠?"라고 물어 글자를 하나씩 짚으며 쓰게 한다.',
            '그림 속 낱말을 알고 있나요? 낱말에 글자가 몇 개 있는지 세어 보고, 손가락으로 허공에 써 봐요.',
            { tool: 'wordcards', options: { mode: 'match', words: [W('cat', '고양이', 'cat'), W('dog', '개', 'dog')] }, sequence: [{ at: {} }, { at: { cat: 0 } }] }),
          MAIN(26,
            ACT('a1', '활동 1. 그림과 낱말 짝 짓기', 12, 'wordcards',
              '"그림을 먼저 말로 해 보고, 같은 낱말 카드를 그림 옆에 놓아요." 낱말 카드를 놓을 때마다 소리 내어 읽게 한다. 첫 글자만 보고 짝을 짓는 학생에게는 cat과 car처럼 첫 글자가 같은 낱말 둘을 칠판에 나란히 쓰고 끝 글자까지 견주어 보게 한다. 도전 단계에는 모양이 닮은 낱말 카드가 한 장 더 섞여 있어 글자를 끝까지 읽어야 한다.',
              '그림 옆에 같은 낱말 카드를 놓아요. 놓을 때마다 낱말을 소리 내어 읽어요.',
              LA('match', '그림을 먼저 우리말로 말한 뒤, 카드의 첫 글자와 끝 글자를 둘 다 견주어 보세요.'),
              [
                MW('그림을 보고 같은 영어 낱말 카드를 놓아 보세요.', [W('cat', '고양이', 'cat'), W('dog', '개', 'dog')], { x: [W('cap', '모자')] }),
                MW('세 그림에 알맞은 낱말 카드를 놓아 보세요.', [W('fish', '물고기', 'fish2'), W('egg', '달걀', 'egg'), W('book', '책', 'book')], { d: 0.2, x: [W('boot', '장화')] }),
                MW('그림 네 개에 알맞은 낱말 카드를 놓아 보세요.', [W('ball', '공', 'ball'), W('apple', '사과', 'apple'), W('cat', '고양이', 'cat'), W('dog', '개', 'dog')], { d: 0.25 }),
              ]),
            ACT('a2', '활동 2. 알파벳 카드로 낱말 만들기', 14, 'wordcards',
              '"그림을 보고 알파벳 카드를 한 글자씩 놓아 낱말을 만들어요. 다 만들면 처음부터 소리 내어 읽어요." 놓는 동안 한 글자씩 소리 내어 읽도록 한다(c, a, t). 글자를 거꾸로 놓는 학생에게는 낱말의 첫소리를 먼저 말하게 한 뒤 어느 글자가 첫소리인지 짚게 한다. 도전 단계에는 쓰지 않는 글자 카드가 한 장 섞여 나와 낱말에 꼭 필요한 글자만 골라야 한다.',
              '그림을 보고 알파벳 카드를 차례대로 놓아 낱말을 만들어요.',
              LSP('그림을 말로 한 번 해 보고, 낱말의 첫소리부터 한 소리씩 끊어 말하며 글자를 놓아 보세요.'),
              [
                SPL('그림을 보고 알파벳 카드로 낱말을 만들어 보세요.', 'cat', '고양이', 'cat', ['m']),
                SPL('이 그림의 낱말을 알파벳 카드로 만들어 보세요.', 'dog', '개', 'dog', ['p'], { d: 0.2 }),
                SPL('그림에 알맞은 낱말을 만들어 보세요. 글자가 네 개예요.', 'fish', '물고기', 'fish2', ['t'], { d: 0.25 }),
                SPL('그림에 알맞은 낱말을 알파벳 카드로 만들어 보세요.', 'egg', '달걀', 'egg', ['a'], { d: 0.2 }),
              ]),
          ),
          WRAP(7, '"오늘 가장 쓰기 쉬웠던 낱말과 어려웠던 낱말은 무엇인가요?" 두세 명에게 묻고 글자 수를 말하게 한다. 출구 질문에서 글자를 빼먹은 학생은 다음 시간 시작에 낱말을 한 글자씩 짚으며 읽어 다시 쓰게 한다.',
            [
              { type: 'tool', tool: 'wordcards', options: { mode: 'spell', word: 'pig', ko: '돼지', extra: ['b'] }, prompt: '그림을 보고 알파벳 카드로 낱말을 만들어 보세요.', target: { spell: 'pig' }, difficulty: 0.15 },
              { type: 'choice', prompt: 'dog 낱말에는 글자가 몇 개 있을까요?', options: ['두 개', '세 개', '네 개'], answer: 1, difficulty: 0.15, explain: 'd, o, g 세 글자예요.' },
              MOOD('오늘 낱말을 보고 옮겨 쓰는 일은 어땠나요?'),
            ]),
        ],
        worksheet: WS('그림 보고 낱말 옮겨 쓰기', [
          { type: 'table', prompt: '그림 이름을 말하고, 낱말을 따라 쓰세요.', columns: ['그림', '따라 쓰기'], cells: [['고양이', 'cat'], ['개', ''], ['물고기', ''], ['달걀', '']], answer: 'cat / dog / fish / egg' },
          { type: 'blank', prompt: '빈칸에 알맞은 글자를 쓰세요.', text: 'c _ t   d _ g   f _ sh', answer: 'a / o / i' },
          { type: 'choice', prompt: '개의 영어 낱말에 ○ 하세요.', options: ['dig', 'dog', 'dag'], answer: 'dog' },
          { type: 'short', prompt: '오늘 쓴 낱말 가운데 하나를 골라 쓰고 소리 내어 읽어 보세요.' },
        ], '낱말 카드를 한 글자씩 짚으며 읽은 뒤 따라 써요.', [
          { type: 'table', prompt: '그림 이름을 말하고, 낱말을 따라 쓰세요.', columns: ['그림', '따라 쓰기'], cells: [['고양이', 'cat'], ['개', '']], answer: 'cat / dog' },
          { type: 'blank', prompt: '빈칸에 알맞은 글자를 쓰세요.', text: 'c _ t   d _ g', answer: 'a / o' },
          { type: 'choice', prompt: '고양이의 영어 낱말에 ○ 하세요.', options: ['cat', 'cut'], answer: 'cat' },
          { type: 'short', prompt: '쓰기 쉬운 낱말 하나를 써 보세요.' },
        ]),
        differentiation: DIFF(
          '낱말 짝 짓기에서 카드가 줄고, 맞게 놓으면 초록 테두리가 생기며 틀리게 놓으면 카드가 되돌아와요.',
          '그림을 보고 카드를 놓은 뒤 확인을 눌러 스스로 고쳐요.',
          '낱말에 쓰지 않는 글자 카드나 모양이 닮은 낱말 카드가 한 장 더 섞여 나와요.'),
        teacherNotes: '자주 보이는 어려움: ① 낱말을 그림처럼 통째로 베끼고 소리와 잇지 않는다 → 한 글자씩 소리 내어 말하며 놓게 한다. ② 글자 순서를 바꾼다(dog를 gdo) → 첫소리를 먼저 말하게 한다. ③ b와 d를 바꾸어 쓴다 → 둥근 배가 어느 쪽인지 손가락으로 그리며 말하게 한다. 노래·챈트는 쓰지 않는다.',
      }),
            // ───────────────────────── 2차시 (practice) ─────────────────────────
      lesson(2, S3, {
        title: '철자가 맞는 낱말 카드 골라 book·ball·pen 만들기',
        objective: '철자가 바른 낱말 카드를 가려내고, 그림에 맞는 낱말 book, ball, pen을 알파벳 카드로 만들 수 있다.',
        illustration: {
          prompt: PROMPT('a child choosing the correctly spelled word card among several cards next to a book, a ball and a pencil'),
          scene: SC('book  ball  pen', '바른 철자 고르기', [{ motif: 'tree', x: 84, y: 214 }, { motif: 'flower', x: 396, y: 218 }, { motif: 'star', x: 250, y: 72, s: 0.6 }]),
        },
        stages: [
          INTRO(6, '지난 시간에 쓴 cat, dog를 칠판에 쓰고 "글자를 하나씩 짚으며 읽어 볼까요?"라고 한다. 이어 cat 옆에 cta를 쓰고 "어느 것이 바른 낱말일까요?"라고 묻는다. 소리 내어 읽으면 cta는 낱말이 되지 않는다는 점을 확인한다. "눈으로 보기에 비슷하면 맞는 거예요."라고 말하는 학생에게는 두 낱말을 한 글자씩 읽어 소리가 다름을 들려 준다.',
            '두 낱말 중 어느 것이 바른 철자일까요? 한 글자씩 소리 내어 읽으며 견주어 봐요.',
            { tool: 'wordcards', options: { mode: 'match', words: [W('book', '책', 'book'), W('ball', '공', 'ball')] }, sequence: [{ at: {} }, { at: { book: 0 } }] }),
          MAIN(27,
            ACT('a1', '활동 1. 철자가 바른 카드 하나 고르기', 13, 'wordcards',
              '"그림의 낱말을 말한 뒤, 철자가 바른 카드를 하나만 골라요." 고른 카드를 한 글자씩 읽어 확인하게 한다. 비슷한 카드 중 어느 것인지 모르는 학생에게는 그림 낱말을 먼저 천천히 말하게 하고 들리는 소리와 카드의 글자를 하나씩 맞춰 보게 한다. 도전 단계에는 카드가 한 장 더 있어 글자 하나만 다른 낱말이 섞여 있다.',
              '그림 낱말과 철자가 똑같은 카드 하나를 골라 바구니에 넣어요.',
              LA('pick', '카드를 한 글자씩 읽으며 그림 낱말의 소리와 하나씩 견주어 보세요. 소리가 다른 글자가 있는 카드는 아니에요.'),
              [
                PK('책 그림이에요. 철자가 바른 카드 하나를 골라 보세요.', [C('book', 'book'), C('bok', 'bok'), C('buk', 'buk')], ['book'], { x: [C('boot', 'boot')] }),
                PK('공 그림이에요. 철자가 바른 카드 하나를 골라 보세요.', [C('ball', 'ball'), C('bal', 'bal'), C('bll', 'bll')], ['ball'], { d: 0.2, x: [C('bell', 'bell')] }),
                PK('연필(pen) 그림이에요. 철자가 바른 카드 하나를 골라 보세요.', [C('pen', 'pen'), C('pne', 'pne'), C('pan', 'pan')], ['pen'], { d: 0.2, x: [C('pin', 'pin')] }),
                PK('사과 그림이에요. 철자가 바른 카드 하나를 골라 보세요.', [C('apple', 'apple'), C('aple', 'aple'), C('appel', 'appel')], ['apple'], { d: 0.3, x: [C('apply', 'apply')],
                  p: ['낱말을 바르게 쓰려면 어떻게 하면 좋을까요?', ['글자를 하나씩 소리 내어 읽으며 견줘요', '첫 글자만 보면 돼요'], 0, '첫 글자만 같아도 가운데 글자가 다르면 다른 낱말이에요. 끝까지 읽으며 견주어요.'] }),
              ]),
            ACT('a2', '활동 2. 알파벳 카드로 낱말 만들기', 14, 'wordcards',
              '"그림을 보고 알파벳 카드를 한 글자씩 놓아요. 다 놓으면 소리 내어 읽고, 그림과 맞는지 확인해요." 같은 글자가 두 번 나오는 낱말(ball의 l, egg의 g)에서는 똑같은 글자 카드가 둘이라는 점을 짚는다. 글자 하나를 빼먹는 학생에게는 낱말을 소리 내어 읽으며 들리는 소리마다 카드를 하나씩 대응시키게 한다.',
              '그림을 보고 알파벳 카드를 차례대로 놓아 낱말을 만들어요.',
              LSP('그림을 말로 한 뒤, 들리는 소리마다 카드 하나씩 놓아 보세요. 같은 글자가 두 번 나올 수도 있어요.'),
              [
                SPL('그림을 보고 알파벳 카드로 낱말을 만들어 보세요.', 'pen', '연필', 'pencil', ['e']),
                SPL('이 그림의 낱말을 알파벳 카드로 만들어 보세요.', 'ball', '공', 'ball', ['t'], { d: 0.25 }),
                SPL('이 그림의 낱말을 알파벳 카드로 만들어 보세요.', 'book', '책', 'book', ['a'], { d: 0.25 }),
                SPL('그림에 알맞은 낱말을 알파벳 카드로 만들어 보세요. 글자가 다섯 개예요.', 'apple', '사과', 'apple', ['o'], { d: 0.35 }),
              ]),
          ),
          WRAP(7, '"철자가 틀린 카드를 고르지 않으려면 어떻게 하면 좋을까요?" 한 글자씩 소리 내어 읽는다는 답을 모아 칠판에 쓴다. apple에서 p를 하나만 놓은 학생은 다음 시간 시작에 같은 글자가 두 번 나오는 낱말만 따로 짚어 보게 한다.',
            [
              { type: 'tool', tool: 'wordcards', options: { mode: 'pick', basket: '고른 카드', shuffle: false, cards: [C('bag', 'bag'), C('bg', 'bg'), C('bga', 'bga')] }, prompt: '가방(bag) 그림이에요. 철자가 바른 카드를 골라 보세요.', target: { pick: ['bag'] }, difficulty: 0.15 },
              { type: 'choice', prompt: 'ball 낱말에서 l은 몇 번 나올까요?', options: ['한 번', '두 번', '세 번'], answer: 1, difficulty: 0.2, explain: 'b, a, l, l — l이 두 번 나와요.' },
              MOOD('철자를 하나씩 읽으며 고르는 일은 어땠나요?'),
            ]),
        ],
        worksheet: WS('철자 바른 낱말 찾기', [
          { type: 'choice', prompt: '책(book)의 철자가 바른 것에 ○ 하세요.', options: ['bok', 'book', 'buk'], answer: 'book' },
          { type: 'choice', prompt: '공(ball)의 철자가 바른 것에 ○ 하세요.', options: ['ball', 'bal', 'bll'], answer: 'ball' },
          { type: 'table', prompt: '낱말을 보고 따라 쓰세요.', columns: ['낱말', '따라 쓰기'], cells: [['pen', ''], ['book', ''], ['ball', '']], answer: 'pen / book / ball' },
          { type: 'short', prompt: '오늘 가장 쓰기 어려웠던 낱말을 쓰고, 어느 글자가 어려웠는지 말해 보세요.' },
        ], '낱말을 한 글자씩 읽으며 바른 철자를 골라요.', [
          { type: 'choice', prompt: '책(book)의 철자가 바른 것에 ○ 하세요.', options: ['bok', 'book'], answer: 'book' },
          { type: 'choice', prompt: '공(ball)의 철자가 바른 것에 ○ 하세요.', options: ['ball', 'bal'], answer: 'ball' },
          { type: 'table', prompt: '낱말을 보고 따라 쓰세요.', columns: ['낱말', '따라 쓰기'], cells: [['pen', ''], ['book', '']], answer: 'pen / book' },
          { type: 'short', prompt: '쓰기 쉬운 낱말 하나를 써 보세요.' },
        ]),
        differentiation: DIFF(
          '철자 고르기 카드가 두 장으로 줄고, 맞는 카드를 놓으면 초록 테두리가 생겨요.',
          '카드 세 장 가운데 바른 철자 하나를 골라요. 알파벳 카드는 다 놓은 뒤 확인을 눌러요.',
          '글자 하나만 다른 낱말 카드가 더 섞여 있어 끝 글자까지 읽어야 해요.'),
        teacherNotes: '자주 보이는 어려움: ① 첫 글자만 보고 카드를 고른다 → 끝 글자까지 소리 내어 읽게 한다. ② 같은 글자가 두 번 나오는 낱말(ball, apple)에서 글자를 하나만 쓴다 → 소리를 짚으며 대응시키게 한다. ③ 비슷하게 생긴 낱말(pen/pan)을 헷갈린다 → 가운데 모음을 소리 내어 말하게 한다.',
      }),

      // ───────────────────────── 3차시 (extend) ─────────────────────────
      lesson(3, S3, {
        title: '짧은 문장 빈칸에 알맞은 낱말 옮겨 쓰기',
        objective: 'I see a cat. 같은 짧은 문장의 빈칸에 그림에 알맞은 낱말을 옮겨 쓰고, 긴 낱말 pencil과 banana를 알파벳 카드로 만들 수 있다.',
        illustration: {
          prompt: PROMPT('a child filling a blank in a short sentence card with a word card while a banana, a pencil and an umbrella wait on the table'),
          scene: SC('I see a ___.', '문장 빈칸에 낱말 쓰기', [{ motif: 'tree', x: 82, y: 214 }, { motif: 'house', x: 398, y: 218, color: 'sky' }, { motif: 'bird', x: 250, y: 72 }]),
        },
        stages: [
          INTRO(6, '칠판에 "I see a ___."를 쓰고 교실의 책을 가리키며 "여기 빈칸에 들어갈 낱말은 무엇일까요?"라고 묻는다. book이 나오면 낱말을 채워 쓰고 한 문장을 같이 읽는다. 문장을 끝까지 읽지 않고 빈칸 낱말만 쓰는 학생이 있으면 "I see a book. 문장 전체를 한 번 읽어 볼까요?"라고 한다.',
            '문장 속 빈칸에 들어갈 낱말은 무엇일까요? 문장 전체를 소리 내어 읽어 봐요.',
            { tool: 'wordcards', options: { mode: 'fill', slots: [{ id: 'b1', label: 'I see a ___.' }], cards: TX('book', 'ball') }, sequence: [{ at: {} }, { at: { book: 0 } }] }),
          MAIN(27,
            ACT('a1', '활동 1. 문장 빈칸에 낱말 옮겨 놓기', 13, 'wordcards',
              '"그림을 보고, 빈칸에 알맞은 낱말 카드를 놓아요. 다 놓으면 문장을 처음부터 읽어요." 문장 맨 앞의 대문자 I와 끝의 마침표도 같이 읽으며 확인하게 한다. 빈칸에 아무 카드나 놓고 읽지 않는 학생에게는 문장을 소리 내어 읽었을 때 어색한 곳이 없는지 물어본다. 도전 단계에는 비슷한 모양의 낱말 카드가 더 섞여 있다.',
              '그림에 맞는 낱말 카드를 문장 빈칸에 놓고, 문장을 처음부터 읽어요.',
              LA('fill', '그림 속 물건이 무엇인지 먼저 말한 뒤, 빈칸에 넣은 문장을 소리 내어 읽어 보고 어색하면 바꿔 보세요.'),
              [
                FI('"I see a ___." 그림 속 물건의 낱말을 빈칸에 놓아 보세요. (그림: 우산)', [{ id: 's1', label: 'I see an ___.' }], TX('umbrella', 'banana', 'pencil'), { s1: 'umbrella' }, { x: [C('umbrellas', 'umbrellas')] }),
                FI('"I have a ___." 그림 속 물건의 낱말을 빈칸에 놓아 보세요. (그림: 바나나)', [{ id: 's1', label: 'I have a ___.' }], TX('banana', 'pencil', 'apple'), { s1: 'banana' }, { d: 0.2, x: [C('bananas', 'bananas')] }),
                FI('두 문장의 빈칸에 알맞은 낱말을 놓아 보세요. (그림: 개, 공)', [{ id: 's1', label: 'I see a ___.' }, { id: 's2', label: 'I have a ___.' }], TX('dog', 'ball', 'cat'), { s1: 'dog', s2: 'ball' }, { d: 0.25 }),
                FI('"This is a ___." 그림 속 물건의 낱말을 빈칸에 놓아 보세요. (그림: 연필)', [{ id: 's1', label: 'This is a ___.' }], TX('pencil', 'pen', 'book'), { s1: 'pencil' }, { d: 0.3,
                  p: ['빈칸을 채운 뒤에는 무엇을 하면 좋을까요?', ['문장 전체를 소리 내어 읽어요', '바로 다음 문제로 넘어가요'], 0, '문장을 끝까지 소리 내어 읽으면 어색한 곳을 바로 찾을 수 있어요.'] }),
              ]),
            ACT('a2', '활동 2. 긴 낱말 알파벳 카드로 만들기', 14, 'wordcards',
              '"긴 낱말도 한 글자씩 놓으면 돼요. 소리를 끊어서 말하며 놓아 봐요." pen-cil, ba-na-na처럼 소리 덩어리로 끊어 말하는 시범을 보인다. 끝 글자까지 놓지 못하는 학생에게는 소리 덩어리마다 손뼉을 치며 몇 덩어리인지 세어 보게 한다. 도전 단계에는 쓰지 않는 카드가 섞여 있다.',
              '그림을 보고 알파벳 카드를 차례대로 놓아 긴 낱말을 만들어요.',
              LSP('소리를 덩어리로 끊어 말하고, 덩어리마다 글자를 몇 개 놓을지 생각하며 놓아 보세요.'),
              [
                SPL('그림을 보고 알파벳 카드로 낱말을 만들어 보세요. 글자가 여섯 개예요.', 'pencil', '연필', 'pencil', ['k'], { d: 0.3 }),
                SPL('그림을 보고 알파벳 카드로 낱말을 만들어 보세요. 글자가 여섯 개예요.', 'banana', '바나나', 'banana', ['m'], { d: 0.35 }),
                SPL('그림을 보고 알파벳 카드로 낱말을 만들어 보세요. 글자가 여덟 개예요.', 'umbrella', '우산', 'umbrella', ['i'], { d: 0.4 }),
                SPL('그림을 보고 알파벳 카드로 낱말을 만들어 보세요.', 'fish', '물고기', 'fish2', ['t'], { d: 0.2 }),
              ]),
          ),
          WRAP(7, '"문장에서 빈칸을 채우고 나서 꼭 해야 할 일은 무엇이었나요?" 문장 전체를 소리 내어 읽는다는 말을 이끌어 낸다. an과 a를 헷갈린 학생은 다음 시간에 apple, umbrella, egg 앞에는 an이 온다는 점을 듣기 단추 없이 말로 한 번 더 짚는다.',
            [
              { type: 'tool', tool: 'wordcards', options: { mode: 'fill', shuffle: false, slots: [{ id: 'e1', label: 'I have a ___.' }], cards: TX('cap', 'egg', 'pen') }, prompt: '그림 속 물건(모자)에 맞는 낱말을 빈칸에 놓아 보세요.', target: { fill: { e1: 'cap' } }, difficulty: 0.2 },
              { type: 'choice', prompt: '"I see a ___." 그림이 고양이일 때 빈칸에 알맞은 낱말은 무엇일까요?', options: ['dog', 'cat', 'egg'], answer: 1, difficulty: 0.15, explain: '고양이는 cat이에요.' },
              MOOD('짧은 문장을 옮겨 쓰는 일은 어땠나요?'),
            ]),
        ],
        worksheet: WS('문장 속 빈칸에 낱말 쓰기', [
          { type: 'table', prompt: '문장을 보고 빈칸에 알맞은 낱말을 쓰세요.', columns: ['문장', '빈칸 낱말'], cells: [['I see a ___. (책)', ''], ['I have a ___. (공)', ''], ['This is a ___. (연필)', '']], answer: 'book / ball / pencil' },
          { type: 'blank', prompt: '낱말을 따라 쓰세요.', text: 'ba _ a _ a   pe _ cil', answer: 'n, n / n' },
          { type: 'choice', prompt: '"I see a ___." 그림이 물고기일 때 빈칸에 알맞은 낱말에 ○ 하세요.', options: ['fish', 'dish', 'fist'], answer: 'fish' },
          { type: 'short', prompt: '내가 가진 물건 하나를 골라 "I have a ___."를 완성해 써 보세요.' },
        ], '문장을 한 번 소리 내어 읽고 그림에 맞는 낱말을 골라 써요.', [
          { type: 'table', prompt: '문장을 보고 빈칸에 알맞은 낱말을 쓰세요.', columns: ['문장', '빈칸 낱말'], cells: [['I see a ___. (책)', ''], ['I have a ___. (공)', '']], answer: 'book / ball' },
          { type: 'blank', prompt: '낱말을 따라 쓰세요.', text: 'pe _ cil', answer: 'n' },
          { type: 'choice', prompt: '"I see a ___." 그림이 개일 때 빈칸에 알맞은 낱말에 ○ 하세요.', options: ['dog', 'dig'], answer: 'dog' },
          { type: 'short', prompt: '"I see a ___."의 빈칸에 알고 있는 낱말을 써 보세요.' },
        ]),
        differentiation: DIFF(
          '빈칸 카드가 두 장으로 줄고, 맞는 낱말을 놓으면 초록 테두리가 생겨요.',
          '문장 빈칸에 낱말을 놓은 뒤 확인을 누르고 스스로 고쳐요.',
          '비슷한 낱말 카드가 더 섞여 있고, 두 문장을 한꺼번에 채워요.'),
        teacherNotes: '자주 보이는 어려움: ① 빈칸에 낱말만 놓고 문장을 읽지 않는다 → 문장 전체를 소리 내어 읽게 한다. ② a와 an을 가리지 못한다 → 이번 단원에서는 문장 틀을 주어 두고 낱말만 바꾸게 하며, an 규칙은 말로만 짚는다. ③ 긴 낱말의 가운데 글자를 빼먹는다 → 소리 덩어리마다 손뼉을 치며 센다.',
      }),
            // ───────────────────────── 4차시 (core) ─────────────────────────
      lesson(4, S3, {
        title: '듣기 단추로 낱말 듣고 첫 글자 s·m·b 고르기',
        objective: '들려주는 쉬운 낱말 sun, map, bag, top의 첫소리를 듣고 알맞은 첫 글자를 골라, 빠진 첫 글자를 채울 수 있다.',
        illustration: {
          prompt: PROMPT('a child with a hand behind the ear listening to a speaker while choosing a big first letter card among several letter cards'),
          scene: SC('s  m  b  t', '첫소리 듣고 글자 고르기', [{ motif: 'tree', x: 82, y: 214 }, { motif: 'house', x: 398, y: 218, color: 'sky' }, { motif: 'star', x: 250, y: 72, s: 0.6 }]),
        },
        stages: [
          INTRO(7, '"sun"을 천천히 두 번 말하고 "처음에 들리는 소리는 무엇인가요?"라고 묻는다. 학생이 "스" 하고 말하면 칠판에 s를 쓰고 "이 글자가 이 소리를 나타내요."라고 말한다. 이어 "map"을 말하고 처음 소리를 함께 낸다. 낱말 전체의 뜻만 말하고 첫소리는 떠올리지 못하는 학생에게는 입 모양을 보여 주며 첫소리만 따로 길게 말하게 한다. 듣기 단추는 누를 때만 소리가 나며 소리가 안 나면 교사가 읽어 준다고 알려 준다.',
            '낱말을 듣고 맨 처음에 들리는 소리를 말해 봐요. 그 소리는 어떤 글자일까요?',
            { tool: 'wordcards', options: { mode: 'pick', listen: true, say: 'sun', basket: '들은 첫 글자', shuffle: false, cards: [C('s', 's'), C('m', 'm')] }, sequence: [{ at: {} }, { at: { s: 0 } }] }),
          MAIN(26,
            ACT('a1', '활동 1. 듣기 단추 누르고 첫 글자 고르기', 13, 'wordcards',
              '문항마다 듣기 단추를 한 번 누르게 한다. 소리가 나지 않으면 교사가 "문제 하나, 선."처럼 낱말을 천천히 읽어 준다. "낱말을 들은 뒤 입으로 첫소리만 따로 말해 보고 글자를 골라요." 낱말을 다 듣고도 아는 글자를 아무거나 고르는 학생에게는 첫소리만 길게 말한 뒤 카드 글자의 이름과 견주게 한다. 도전 단계에는 소리가 닮은 글자가 한 장 더 섞여 있다.',
              '듣기 단추를 눌러 낱말을 듣고, 첫소리에 알맞은 글자 카드 하나를 바구니에 넣어요.',
              LA('pick', '낱말을 들은 뒤 첫소리만 따로 길게 말해 보세요. 그 소리가 나는 글자는 무엇일까요?', { listen: true }),
              [
                PL('듣기 단추를 누르고, 들은 낱말의 첫 글자를 골라 보세요.', 'sun', [C('s', 's'), C('m', 'm'), C('b', 'b')], ['s'], { x: [C('z', 'z')] }),
                PL('듣기 단추를 누르고, 이번에 들은 낱말의 첫 글자를 골라 보세요.', 'map', [C('m', 'm'), C('n', 'n'), C('s', 's')], ['m'], { d: 0.2, x: [C('w', 'w')] }),
                PL('듣기 단추를 누르고, 들은 낱말의 첫 글자를 찾아 보세요.', 'bag', [C('b', 'b'), C('d', 'd'), C('g', 'g')], ['b'], { d: 0.25, x: [C('p', 'p')],
                  p: ['첫 글자는 어떻게 찾을까요?', ['낱말의 맨 처음 소리를 따로 말해 봐요', '낱말의 마지막 소리를 말해 봐요'], 0, '맨 처음 들리는 소리가 첫 글자의 소리예요. 끝소리와 헷갈리지 않게 처음만 떼어 말해요.'] }),
                PL('듣기 단추를 누르고, 들은 낱말의 첫 글자를 골라 보세요.', 'top', [C('t', 't'), C('d', 'd'), C('p', 'p')], ['t'], { d: 0.3, x: [C('k', 'k')] }),
              ]),
            ACT('a2', '활동 2. 낱말 앞의 빠진 글자 채우기', 13, 'wordcards',
              '"듣기 단추를 눌러 낱말을 듣고, 빈칸에 빠진 첫 글자를 채워요. 다 채우면 낱말을 소리 내어 읽어요." 채운 낱말을 읽었을 때 들은 낱말과 같은지 확인하게 한다. 빈칸 뒤의 글자만 보고 뜻이 비슷한 낱말을 떠올리는 학생에게는 들은 소리를 다시 들려주며 첫소리부터 맞춰 보게 한다.',
              '듣기 단추를 눌러 낱말을 듣고, 빈칸에 알맞은 첫 글자를 놓아요.',
              LA('fill', '들은 낱말의 첫소리를 따로 말해 보고, 빈칸에 넣은 낱말을 소리 내어 읽었을 때 들은 낱말과 같은지 견주어 보세요.', { listen: true }),
              [
                FL('낱말을 듣고 빈칸에 알맞은 첫 글자를 놓아 보세요.', 'pig', [{ id: 'w1', label: '___ig' }], TX('p', 'b', 'd'), { w1: 'p' }, { x: [C('q', 'q')] }),
                FL('낱말을 듣고 빈칸에 알맞은 첫 글자를 놓아 보세요.', 'hat', [{ id: 'w1', label: '___at' }], TX('h', 'c', 'r'), { w1: 'h' }, { d: 0.2, x: [C('f', 'f')] }),
                FL('낱말을 듣고 빈칸에 알맞은 첫 글자를 놓아 보세요.', 'net', [{ id: 'w1', label: '___et' }], TX('n', 'm', 'l'), { w1: 'n' }, { d: 0.25, x: [C('v', 'v')] }),
                FL('낱말을 듣고 빈칸에 알맞은 첫 글자를 놓아 보세요. 소리가 닮은 글자에 주의해요.', 'jam', [{ id: 'w1', label: '___am' }], TX('j', 'g', 'y'), { w1: 'j' }, { d: 0.35 }),
              ]),
          ),
          WRAP(7, '"오늘 낱말의 첫소리를 가장 잘 찾은 방법은 무엇이었나요?" 한두 명에게 말하게 한다. 첫소리와 끝소리를 바꾸어 고른 학생은 다음 시간 시작에 낱말을 천천히 말하며 입 모양으로 첫소리를 확인하게 한다.',
            [
              { type: 'tool', tool: 'wordcards', options: { mode: 'pick', listen: true, say: 'lip', basket: '들은 첫 글자', shuffle: false, cards: [C('l', 'l'), C('r', 'r'), C('n', 'n')] }, prompt: '듣기 단추를 누르고, 들은 낱말의 첫 글자를 골라 보세요.', target: { pick: ['l'] }, difficulty: 0.2 },
              { type: 'choice', prompt: 'sun과 같은 소리로 시작하는 글자는 무엇일까요?', options: ['s', 'm', 'b'], answer: 0, difficulty: 0.15, explain: 'sun은 s 소리로 시작해요.' },
              MOOD('낱말을 듣고 첫 글자를 고르는 일은 어땠나요?'),
            ]),
        ],
        worksheet: WS('첫소리 듣고 첫 글자 쓰기', [
          { type: 'table', prompt: '선생님이 읽어 주는 낱말을 듣고 첫 글자를 쓰세요.', columns: ['번호', '들은 낱말의 첫 글자'], cells: [['1', ''], ['2', ''], ['3', ''], ['4', '']], answer: '교사 읽기 예: 1 sun / 2 map / 3 bag / 4 top → s / m / b / t' },
          { type: 'blank', prompt: '빈칸에 첫 글자를 쓰세요.', text: '___ig   ___at   ___et', answer: 'p / h / n' },
          { type: 'choice', prompt: '선생님이 읽는 낱말 jam의 첫 글자에 ○ 하세요.', options: ['j', 'g', 'z'], answer: 'j' },
          { type: 'short', prompt: '내 이름의 첫소리와 같은 소리로 시작하는 영어 낱말을 하나 떠올려 써 보세요.' },
        ], '낱말을 들을 때마다 첫소리를 먼저 말하고 글자를 골라요.', [
          { type: 'table', prompt: '선생님이 읽어 주는 낱말을 듣고 첫 글자를 쓰세요.', columns: ['번호', '들은 낱말의 첫 글자'], cells: [['1', ''], ['2', '']], answer: '교사 읽기 예: 1 sun / 2 map → s / m' },
          { type: 'blank', prompt: '빈칸에 첫 글자를 쓰세요.', text: '___ig   ___at', answer: 'p / h' },
          { type: 'choice', prompt: '선생님이 읽는 낱말 jam의 첫 글자에 ○ 하세요.', options: ['j', 'g'], answer: 'j' },
          { type: 'short', prompt: '첫소리를 말해 본 낱말 하나를 써 보세요.' },
        ]),
        differentiation: DIFF(
          '글자 카드가 두 장으로 줄고, 맞는 글자를 고르면 초록 테두리가 생겨요.',
          '낱말을 듣고 글자 카드를 골라요. 빈칸 채우기는 다 놓은 뒤 확인을 눌러 스스로 고쳐요.',
          '소리가 닮은 글자 카드가 한 장 더 섞여 나오고, 빈칸이 두 개인 문항이 있어요.'),
        teacherNotes: '자주 보이는 어려움: ① 첫소리 대신 끝소리를 듣고 글자를 고른다 → 낱말의 맨 처음만 떼어 길게 말하게 한다. ② 우리말 소리와 영어 글자를 잇지 못한다 → 입 모양을 거울처럼 보여 주며 같이 말한다. ③ b와 d, m과 n을 바꾸어 고른다 → 글자의 모양과 소리를 짝 지어 말하게 한다. 소리가 안 나는 기기에서는 교사가 읽어 준다.',
      }),

      // ───────────────────────── 5차시 (practice) ─────────────────────────
      lesson(5, S3, {
        title: '그림 낱말의 첫소리를 글자 카드와 짝 짓기',
        objective: '고양이·개·모자·달걀 같은 그림 낱말의 첫소리를 말하고, 알맞은 첫 글자 카드를 짝 지으며 들은 낱말의 첫 글자를 고를 수 있다.',
        illustration: {
          prompt: PROMPT('a child matching big first-letter cards to picture cards of a cat, a dog, a hat and an egg on a table'),
          scene: SC('c  d  h  e', '그림의 첫 글자 찾기', [{ motif: 'tree', x: 84, y: 214 }, { motif: 'flower', x: 396, y: 218 }, { motif: 'bird', x: 250, y: 72 }]),
        },
        stages: [
          INTRO(6, '교실 물건 두 가지를 보여 주며(연필, 책) "pencil의 처음 소리는 무엇일까요?"라고 묻는다. 학생들이 "프" 소리를 내면 p를 쓰고, 지난 시간에 배운 s, m, b도 함께 다시 읽는다. 아는 글자를 아무거나 말하는 학생에게는 낱말을 천천히 말하며 입술 모양이 어떻게 변하는지 보여 준다.',
            '그림 속 물건의 영어 이름 첫소리를 말해 봐요. 그 소리를 나타내는 글자도 떠올려 볼까요?',
            { tool: 'wordcards', options: { mode: 'match', slots: [{ id: 'cat', label: '고양이', motif: 'cat' }, { id: 'dog', label: '개', motif: 'dog' }], cards: TX('c', 'd') }, sequence: [{ at: {} }, { at: { c: 0 } }] }),
          MAIN(27,
            ACT('a1', '활동 1. 그림에 알맞은 첫 글자 카드 놓기', 13, 'wordcards',
              '"그림을 보고 영어 이름을 마음속으로 말한 뒤, 첫소리에 맞는 글자 카드를 그림 옆에 놓아요." 틀리게 놓은 학생에게는 낱말을 소리 내어 말하며 맨 처음 소리만 따로 말해 보게 한다. 도전 단계에는 쓰지 않는 글자 카드가 섞여 있다.',
              '그림 옆에 알맞은 첫 글자 카드를 놓아요. 영어 이름을 먼저 말해 봐요.',
              LA('match', '그림의 영어 이름을 천천히 말하며 맨 처음 소리만 따로 말해 보세요. 그 소리가 나는 글자는 무엇일까요?'),
              [
                base({ x: null }, '고양이와 개 그림에 알맞은 첫 글자 카드를 놓아 보세요.', { match: { cat: 'c', dog: 'd' } }, { mode: 'match', slots: [{ id: 'cat', label: '고양이', motif: 'cat' }, { id: 'dog', label: '개', motif: 'dog' }], cards: TX('c', 'd') }),
                base({ d: 0.2, x: [C('r', 'r')] }, '달걀과 공 그림에 알맞은 첫 글자 카드를 놓아 보세요.', { match: { egg: 'e', ball: 'b' } }, { mode: 'match', slots: [{ id: 'egg', label: '달걀', motif: 'egg' }, { id: 'ball', label: '공', motif: 'ball' }], cards: TX('e', 'b') }),
                base({ d: 0.25, x: [C('s', 's')] }, '사과, 책, 물고기 그림에 알맞은 첫 글자 카드를 놓아 보세요.', { match: { apple: 'a', book: 'b', fish: 'f' } }, { mode: 'match', slots: [{ id: 'apple', label: '사과', motif: 'apple' }, { id: 'book', label: '책', motif: 'book' }, { id: 'fish', label: '물고기', motif: 'fish2' }], cards: TX('a', 'b', 'f') }),
              ]),
            ACT('a2', '활동 2. 들은 낱말의 첫 글자 고르기', 14, 'wordcards',
              '"듣기 단추를 누르고 낱말의 첫소리를 말해 본 뒤 글자를 골라요." 소리가 안 나면 교사가 읽어 준다. 카드를 고른 뒤에는 짝에게 "이 글자 소리는 ___."라고 말해 보게 한다. 첫소리 대신 모양만 보고 고르는 학생에게는 소리를 다시 들려주며 입 모양을 따라 하게 한다.',
              '듣기 단추를 눌러 낱말을 듣고, 첫 글자 카드를 골라요.',
              LA('pick', '낱말을 들은 뒤 입으로 첫소리만 따로 말해 보고, 그 소리의 글자를 찾아보세요.', { listen: true }),
              [
                PL('듣기 단추를 누르고, 들은 낱말의 첫 글자를 골라 보세요.', 'dog', [C('d', 'd'), C('b', 'b'), C('g', 'g')], ['d'], { x: [C('t', 't')] }),
                PL('듣기 단추를 누르고, 들은 낱말의 첫 글자를 골라 보세요.', 'fish', [C('f', 'f'), C('v', 'v'), C('s', 's')], ['f'], { d: 0.25, x: [C('h', 'h')] }),
                PL('듣기 단추를 누르고, 들은 낱말의 첫 글자를 골라 보세요.', 'cap', [C('c', 'c'), C('k', 'k'), C('g', 'g')], ['c'], { d: 0.3, x: [C('q', 'q')] }),
                PL('듣기 단추를 누르고, 들은 낱말의 첫 글자를 골라 보세요.', 'egg', [C('e', 'e'), C('a', 'a'), C('i', 'i')], ['e'], { d: 0.3, x: [C('o', 'o')],
                  p: ['첫 글자가 모음일 때도 첫소리로 찾을까요?', ['네, 맨 처음 소리를 떼어 말해요', '아니요, 모음은 못 찾아요'], 0, 'a, e, i, o, u 같은 모음 글자도 맨 처음 소리를 말해 보면 찾을 수 있어요.'] }),
              ]),
          ),
          WRAP(7, '"오늘 그림 낱말의 첫소리와 글자를 짝 지을 때 어떻게 했나요?" 낱말을 천천히 말해 처음 소리를 떼어 냈다는 이야기를 이끌어 낸다. 모음 글자를 어려워한 학생은 다음 시간 시작에 egg, apple의 첫소리를 입 모양으로 확인하게 한다.',
            [
              { type: 'tool', tool: 'wordcards', options: { mode: 'match', shuffle: false, slots: [{ id: 'umbrella', label: '우산', motif: 'umbrella' }, { id: 'pencil', label: '연필', motif: 'pencil' }], cards: TX('u', 'p') }, prompt: '그림에 알맞은 첫 글자 카드를 놓아 보세요.', target: { match: { umbrella: 'u', pencil: 'p' } }, difficulty: 0.25 },
              { type: 'choice', prompt: 'banana의 첫 글자는 무엇일까요?', options: ['b', 'd', 'p'], answer: 0, difficulty: 0.15, explain: 'banana는 b로 시작해요.' },
              MOOD('그림 낱말의 첫소리를 찾는 일은 어땠나요?'),
            ]),
        ],
        worksheet: WS('그림 낱말의 첫 글자 쓰기', [
          { type: 'table', prompt: '그림 이름을 영어로 말해 보고 첫 글자를 쓰세요.', columns: ['그림', '첫 글자'], cells: [['고양이', 'c'], ['개', ''], ['달걀', ''], ['사과', '']], answer: 'c / d / e / a' },
          { type: 'choice', prompt: '물고기(fish)의 첫 글자에 ○ 하세요.', options: ['f', 'v', 's'], answer: 'f' },
          { type: 'blank', prompt: '빈칸에 첫 글자를 쓰세요.', text: '___ook   ___ap   ___ish', answer: 'b / c / f' },
          { type: 'short', prompt: '교실에서 첫 글자를 알 수 있는 영어 낱말 하나를 찾아 쓰세요.' },
        ], '그림의 영어 이름을 천천히 말하며 첫소리를 찾아요.', [
          { type: 'table', prompt: '그림 이름을 영어로 말해 보고 첫 글자를 쓰세요.', columns: ['그림', '첫 글자'], cells: [['고양이', 'c'], ['개', '']], answer: 'c / d' },
          { type: 'choice', prompt: '물고기(fish)의 첫 글자에 ○ 하세요.', options: ['f', 's'], answer: 'f' },
          { type: 'blank', prompt: '빈칸에 첫 글자를 쓰세요.', text: '___ook   ___ap', answer: 'b / c' },
          { type: 'short', prompt: '첫 글자를 알고 있는 낱말 하나를 써 보세요.' },
        ]),
        differentiation: DIFF(
          '그림 짝 짓기 카드가 줄고, 맞는 글자를 놓으면 초록 테두리가 생겨요.',
          '그림에 첫 글자를 놓고 확인해요. 듣기 문항은 소리를 듣고 한 장만 골라요.',
          '쓰지 않는 글자 카드가 섞여 있고 모음으로 시작하는 낱말도 나와요.'),
        teacherNotes: '자주 보이는 어려움: ① 그림의 영어 이름을 몰라 첫소리를 떠올리지 못한다 → 낱말을 교사가 먼저 한 번 들려준다. ② c와 k, f와 v처럼 소리가 닮은 글자를 헷갈린다 → 입 모양을 거울에 비추어 보게 한다. ③ 모음으로 시작하는 낱말을 어려워한다 → 모음 글자를 따로 묶어 두고 입 모양을 확인한다.',
      }),
            // ───────────────────────── 6차시 (core) ─────────────────────────
      lesson(6, S3, {
        title: '빠진 글자·바뀐 글자 찾아 낱말 고쳐 쓰기',
        objective: '쓴 낱말을 한 글자씩 소리 내어 읽으며 빠졌거나 바뀐 글자를 찾아 고쳐 쓰고, 짝과 바꾸어 한 곳씩 더 확인할 수 있다.',
        illustration: {
          prompt: PROMPT('a child checking a notebook word with a big magnifying glass and fixing one missing letter with a pencil while a friend watches'),
          scene: SC('aple → apple', '다시 읽고 고치기', [{ motif: 'tree', x: 82, y: 214 }, { motif: 'house', x: 398, y: 218, color: 'sky' }, { motif: 'star', x: 250, y: 72, s: 0.6 }]),
        },
        stages: [
          INTRO(7, '칠판에 일부러 틀린 낱말 "bok"을 쓰고 "선생님이 책을 쓰려고 했는데 이상해요. 어디가 틀렸을까요?"라고 묻는다. 한 글자씩 짚어 읽으며 o가 하나 빠진 것을 찾아 고친다. "쓰고 나면 한 번 더 읽어 보는 것이 점검이에요."라고 말한다. 한 번 쓰고 끝냈다고 생각하는 학생에게 "다시 읽으면 빠진 글자가 보이나요?" 하고 되묻는다.',
            '선생님이 쓴 낱말이 이상해요. 한 글자씩 소리 내어 읽으며 어디가 틀렸는지 찾아봐요.',
            { tool: 'wordcards', options: { mode: 'pick', basket: '틀린 낱말', shuffle: false, cards: [C('bok', 'bok'), C('book', 'book')] }, sequence: [{ at: {} }, { at: { bok: 0 } }] }),
          MAIN(26,
            ACT('a1', '활동 1. 철자가 틀린 낱말 카드 찾기', 13, 'wordcards',
              '"카드 속 낱말을 한 글자씩 소리 내어 읽고, 철자가 틀린 카드 하나를 골라요." 그림 낱말이 무엇인지 먼저 말하게 한 뒤 읽는다. 철자가 맞는 카드를 고르는 학생에게는 문제 글을 다시 읽게 해서 틀린 쪽을 고르는 문항임을 확인한다. 어떤 글자가 빠졌거나 바뀌었는지 짝에게 한 문장으로 말하게 한다.',
              '낱말 카드를 한 글자씩 읽고, 철자가 틀린 카드 하나를 바구니에 넣어요.',
              LA('pick', '그림 낱말을 말한 뒤 각 카드를 한 글자씩 읽어 보세요. 소리와 맞지 않는 글자가 있는 카드가 틀린 카드예요.'),
              [
                PK('개(dog) 그림이에요. 철자가 틀린 카드 하나를 골라 보세요.', [C('dog', 'dog'), C('dgo', 'dgo'), C('dog2', 'dog', { color: 'sky' })], ['dgo'], { x: [C('dag', 'dag')] }),
                PK('고양이(cat) 그림이에요. 철자가 틀린 카드 하나를 골라 보세요.', [C('cat', 'cat'), C('ct', 'ct')], ['ct'], { d: 0.2, x: [C('cap', 'cap')] }),
                PK('사과(apple) 그림이에요. 철자가 틀린 카드 하나를 골라 보세요.', [C('apple', 'apple'), C('aple', 'aple')], ['aple'], { d: 0.3, x: [C('appel', 'appel')] }),
                PK('물고기(fish) 그림이에요. 철자가 틀린 카드를 모두 골라 보세요.', [C('fish', 'fish'), C('fich', 'fich'), C('fsh', 'fsh')], ['fich', 'fsh'], { d: 0.35,
                  p: ['틀린 낱말을 찾으려면 어떻게 하면 좋을까요?', ['한 글자씩 소리 내어 읽어요', '한 번 눈으로만 훑어요'], 0, '소리 내어 한 글자씩 읽으면 빠진 글자와 바뀐 글자를 잘 찾을 수 있어요.'] }),
              ]),
            ACT('a2', '활동 2. 빠진 글자 채워 고치기', 13, 'wordcards',
              '"낱말 가운데 한 글자가 빠졌어요. 빈칸에 알맞은 글자 카드를 놓고, 낱말을 처음부터 다시 읽어 봐요." 채운 뒤 그림 낱말과 소리가 같은지 확인하게 한다. 도전 단계에는 비슷한 글자 카드가 섞여 있어 소리를 끝까지 들어야 한다. 읽지 않고 카드를 놓는 학생에게는 낱말을 한 소리씩 끊어 말한 뒤 빈칸의 소리를 찾게 한다.',
              '낱말의 빠진 글자를 알파벳 카드로 채우고, 낱말을 처음부터 읽어요.',
              LA('fill', '그림 낱말을 말하며 소리를 하나씩 세어 보세요. 글자가 안 보이는 곳에서 어떤 소리가 나는지 떠올려 보세요.'),
              [
                FI('빠진 글자를 채워 책 낱말을 완성해 보세요.', [{ id: 'm1', label: 'bo___k' }], TX('o', 'a', 'e'), { m1: 'o' }, { x: [C('u', 'u')] }),
                FI('빠진 글자를 채워 연필 낱말을 완성해 보세요.', [{ id: 'm1', label: 'pe___cil' }], TX('n', 'm', 'r'), { m1: 'n' }, { d: 0.25, x: [C('l', 'l')] }),
                FI('빠진 글자를 채워 사과 낱말을 완성해 보세요.', [{ id: 'm1', label: 'ap___le' }], TX('p', 'b', 'd'), { m1: 'p' }, { d: 0.3, x: [C('q', 'q')] }),
                FI('두 낱말의 빠진 글자를 각각 채워 보세요. (물고기, 달걀)', [{ id: 'm1', label: 'f___sh' }, { id: 'm2', label: 'e___g' }], TX('i', 'g', 'e'), { m1: 'i', m2: 'g' }, { d: 0.35 }),
              ]),
          ),
          WRAP(7, '"쓴 낱말을 점검할 때 가장 도움이 된 방법은 무엇이었나요?" 소리 내어 한 글자씩 읽기를 이끌어 낸다. 틀린 곳을 찾지 못한 학생은 다음 시간 시작에 짝과 바꾸어 한 낱말씩 읽어 보게 한다.',
            [
              { type: 'tool', tool: 'wordcards', options: { mode: 'fill', shuffle: false, slots: [{ id: 'x1', label: 'ba___l' }], cards: TX('l', 'n', 't') }, prompt: '공(ball)의 빠진 글자를 채워 보세요.', target: { fill: { x1: 'l' } }, difficulty: 0.25 },
              { type: 'choice', prompt: '다음 중 철자가 틀린 낱말은 무엇일까요?', options: ['bag', 'bga', 'big'], answer: 1, difficulty: 0.15, explain: 'bga는 글자 순서가 바뀐 낱말이에요.' },
              MOOD('쓴 낱말을 다시 읽고 고치는 일은 어땠나요?'),
            ]),
        ],
        worksheet: WS('틀린 글자 찾아 고쳐 쓰기', [
          { type: 'table', prompt: '틀린 낱말을 바르게 고쳐 쓰세요.', columns: ['틀린 낱말', '바르게 고친 낱말'], cells: [['bok', 'book'], ['dgo', ''], ['aple', ''], ['fsh', '']], answer: 'book / dog / apple / fish' },
          { type: 'choice', prompt: '고양이의 철자가 바른 것에 ○ 하세요.', options: ['ct', 'cat', 'cta'], answer: 'cat' },
          { type: 'blank', prompt: '빠진 글자를 채우세요.', text: 'ba___l   pe___cil', answer: 'l / n' },
          { type: 'short', prompt: '짝의 낱말에서 한 곳을 찾아 알려 주고, 어떻게 고쳤는지 한 줄로 써 보세요.' },
        ], '낱말을 한 글자씩 읽으며 틀린 곳에 ○ 하고 고쳐요.', [
          { type: 'table', prompt: '틀린 낱말을 바르게 고쳐 쓰세요.', columns: ['틀린 낱말', '바르게 고친 낱말'], cells: [['bok', 'book'], ['dgo', '']], answer: 'book / dog' },
          { type: 'choice', prompt: '고양이의 철자가 바른 것에 ○ 하세요.', options: ['ct', 'cat'], answer: 'cat' },
          { type: 'blank', prompt: '빠진 글자를 채우세요.', text: 'ba___l', answer: 'l' },
          { type: 'short', prompt: '고친 낱말 하나를 써 보세요.' },
        ]),
        differentiation: DIFF(
          '철자가 틀린 카드가 하나뿐이고, 맞는 카드를 고르면 초록 테두리가 생겨요.',
          '낱말 카드를 읽고 틀린 것을 고른 뒤 확인을 눌러 스스로 고쳐요.',
          '틀린 카드가 둘일 수 있고, 비슷한 글자 카드가 더 섞여 있어요.'),
        teacherNotes: '자주 보이는 어려움: ① 읽지 않고 눈으로만 훑어서 틀린 곳을 놓친다 → 한 글자씩 손가락으로 짚으며 소리 내어 읽게 한다. ② 틀린 곳을 찾고도 어떻게 고칠지 모른다 → 그림 낱말의 소리를 천천히 말하며 빠진 소리를 찾게 한다. ③ 짝의 낱말을 고쳐 주기를 어려워한다 → "이 글자 소리가 이상해요."라고 부드럽게 말하는 방법을 먼저 보여 준다.',
      }),

      // ───────────────────────── 7차시 (wrap) ─────────────────────────
      lesson(7, S3, {
        title: '단원 정리: 쓰고, 읽고, 고쳐서 hat·bag 낱말 완성하기',
        objective: '그림 낱말을 알파벳 카드로 쓰고 소리 내어 읽으며 틀린 곳을 고치는 순서를 익혀, 단원의 쓰기 과정을 스스로 점검할 수 있다.',
        illustration: {
          prompt: PROMPT('a child standing proudly with a notebook of neatly written words, a hat, a bag and a bed beside a checklist with three check marks'),
          scene: SC('hat  bag  bed', '쓰고 읽고 고치기', [{ motif: 'tree', x: 84, y: 214 }, { motif: 'flower', x: 396, y: 218 }, { motif: 'bird', x: 250, y: 72 }]),
        },
        stages: [
          INTRO(6, '칠판에 "보고 쓰기 → 소리 듣고 첫 글자 → 다시 읽고 고치기" 세 단계를 적고 "이 단원에서 한 일을 순서대로 말해 볼까요?"라고 묻는다. 두세 명이 말하면 각 단계의 예(cat, sun, bok → book)를 하나씩 쓴다. 무엇을 했는지 떠올리지 못하는 학생에게는 지난 시간 활동지를 펴서 보게 한다.',
            '이 단원에서 어떤 일을 했는지 순서대로 떠올려 봐요. 가장 자신 있는 것은 무엇인가요?',
            { tool: 'wordcards', options: { mode: 'order', shuffle: false, cards: [C('see', '보고 쓰기'), C('hear', '첫소리 듣기'), C('fix', '읽고 고치기')] }, sequence: [{ at: {} }, { at: { see: 0 } }] }),
          MAIN(27,
            ACT('a1', '활동 1. 쓰기 순서 정하고 낱말 만들기', 13, 'wordcards',
              '"낱말을 쓸 때 어떤 순서로 하면 좋을까요? 카드를 차례대로 놓은 뒤, 알파벳 카드로 낱말도 만들어 봐요." 순서 문항에서는 쓰기 전에 그림을 보고 소리를 말하는 것이 먼저임을 짚는다. 만든 낱말은 소리 내어 읽고 그림과 맞는지 확인한다. 순서를 외우기만 하는 학생에게는 실제로 낱말 하나를 쓰며 순서를 따라 말하게 한다.',
              '쓰기 순서 카드를 차례대로 놓고, 알파벳 카드로 낱말을 만들어요.',
              LA('order', '낱말을 쓰기 전에 무엇부터 해야 할지 생각해 보세요. 쓰고 난 뒤에는 무엇을 해야 하는지도 떠올려 보세요.'),
              [
                base({ d: 0.15 }, '낱말을 바르게 쓰는 순서대로 카드를 놓아 보세요.', { order: ['look', 'write', 'read', 'fix'] }, { mode: 'order', cards: [C('look', '그림을 보고 소리 말하기'), C('write', '알파벳 한 글자씩 쓰기'), C('read', '소리 내어 다시 읽기'), C('fix', '틀린 곳 고치기')] }),
                base({ d: 0.2 }, '첫소리를 듣고 낱말을 쓰는 순서대로 카드를 놓아 보세요.', { order: ['hear', 'say', 'pick', 'check'] }, { mode: 'order', cards: [C('hear', '듣기 단추 누르기'), C('say', '첫소리 따로 말하기'), C('pick', '글자 고르기'), C('check', '낱말 읽어 확인하기')] }),
                SPL('그림을 보고 알파벳 카드로 낱말을 만들어 보세요.', 'hat', '모자', null, ['g'], { d: 0.2 }),
                SPL('그림을 보고 알파벳 카드로 낱말을 만들어 보세요.', 'bag', '가방', null, ['d'], { d: 0.25 }),
              ]),
            ACT('a2', '활동 2. 문장 빈칸 채우고 틀린 곳 고치기', 14, 'wordcards',
              '"문장의 빈칸에 알맞은 낱말을 놓고, 틀린 철자 카드가 있으면 골라내요." 낱말 카드를 놓고 문장을 소리 내어 읽게 한다. 도전 단계의 틀린 철자 카드를 읽지 않고 놓는 학생에게는 한 글자씩 읽으며 소리를 맞춰 보게 한다. 마지막에는 짝과 바꾸어 서로 한 곳씩 더 확인해 주게 한다.',
              '빈칸에 알맞은 낱말을 놓거나, 철자가 틀린 카드를 골라요. 놓은 뒤 문장을 소리 내어 읽어요.',
              LA('fill', '그림 속 물건을 말한 뒤 카드를 한 글자씩 읽어 보세요. 소리가 어색한 카드는 철자가 틀린 카드일 수 있어요.'),
              [
                FI('그림 속 물건(모자)의 낱말을 빈칸에 놓아 보세요.', [{ id: 'w1', label: 'I have a ___.' }], TX('hat', 'hut', 'hit'), { w1: 'hat' }, { d: 0.2, x: [C('ht', 'ht')] }),
                FI('그림 속 물건(침대)의 낱말을 빈칸에 놓아 보세요.', [{ id: 'w1', label: 'This is a ___.' }], TX('bed', 'bad', 'bud'), { w1: 'bed' }, { d: 0.25, x: [C('bde', 'bde')] }),
                PK('가방(bag) 그림이에요. 철자가 바른 카드 하나를 골라 보세요.', [C('bag', 'bag'), C('bga', 'bga'), C('bg', 'bg')], ['bag'], { d: 0.25, x: [C('beg', 'beg')] }),
                FI('두 문장의 빈칸을 채워 보세요. (달걀, 우산)', [{ id: 'w1', label: 'I see an ___.' }, { id: 'w2', label: 'I have an ___.' }], TX('egg', 'umbrella', 'pen'), { w1: 'egg', w2: 'umbrella' }, { d: 0.35,
                  p: ['낱말을 다 쓴 뒤 가장 먼저 할 일은 무엇일까요?', ['소리 내어 다시 읽어요', '바로 제출해요'], 0, '다시 읽으면 빠진 글자나 바뀐 글자를 스스로 찾을 수 있어요.'] }),
              ]),
          ),
          WRAP(7, '"이 단원에서 쓰기 점검이 가장 도움이 되었나요?" 손가락으로 엄지 위·가운데·아래를 표시하게 하고 이유를 한두 명에게 듣는다. 단원에서 가장 어려웠던 것을 하나 골라 다음 단원의 목표로 적게 한다.',
            [
              { type: 'tool', tool: 'wordcards', options: { mode: 'spell', word: 'cup', ko: '컵', extra: ['m'] }, prompt: '그림을 보고 알파벳 카드로 낱말을 만들어 보세요.', target: { spell: 'cup' }, difficulty: 0.2 },
              { type: 'choice', prompt: '쓴 낱말을 점검할 때 가장 알맞은 방법은 무엇일까요?', options: ['한 글자씩 소리 내어 읽기', '한 번 눈으로 훑기', '그냥 제출하기'], answer: 0, difficulty: 0.15, explain: '소리 내어 한 글자씩 읽으면 빠진 글자나 바뀐 글자가 잘 보여요.' },
              MOOD('이 단원에서 영어 낱말 쓰기는 어땠나요?'),
            ]),
        ],
        worksheet: WS('단원 정리: 쓰고 읽고 고치기', [
          { type: 'table', prompt: '그림 이름을 영어로 쓰고, 다시 읽은 뒤 ○ 하세요.', columns: ['그림', '내가 쓴 낱말', '다시 읽었어요'], cells: [['모자', '', ''], ['가방', '', ''], ['침대', '', ''], ['컵', '', '']], answer: 'hat / bag / bed / cup' },
          { type: 'choice', prompt: '침대(bed)의 철자가 바른 것에 ○ 하세요.', options: ['bde', 'bed', 'bd'], answer: 'bed' },
          { type: 'blank', prompt: '빠진 글자를 채우세요.', text: 'h___t   c___p', answer: 'a / u' },
          { type: 'short', prompt: '이 단원에서 새로 알게 된 쓰기 방법을 한 줄로 써 보세요.' },
        ], '쓴 낱말을 소리 내어 읽고 ○ 로 확인해요.', [
          { type: 'table', prompt: '그림 이름을 영어로 쓰고, 다시 읽은 뒤 ○ 하세요.', columns: ['그림', '내가 쓴 낱말', '다시 읽었어요'], cells: [['모자', '', ''], ['가방', '', '']], answer: 'hat / bag' },
          { type: 'choice', prompt: '침대(bed)의 철자가 바른 것에 ○ 하세요.', options: ['bde', 'bed'], answer: 'bed' },
          { type: 'blank', prompt: '빠진 글자를 채우세요.', text: 'h___t', answer: 'a' },
          { type: 'short', prompt: '쓰기에서 잘한 점 한 가지를 써 보세요.' },
        ]),
        differentiation: DIFF(
          '순서 놓기와 낱말 만들기에서 맞는 카드를 놓으면 초록 테두리가 생겨요.',
          '쓰기 순서를 놓고 낱말을 만든 뒤 확인을 눌러 스스로 고쳐요.',
          '철자가 틀린 카드가 섞여 있고, 두 문장을 한꺼번에 채워요.'),
        teacherNotes: '자주 보이는 어려움: ① 쓰기 순서를 말은 하지만 실제 쓸 때는 읽지 않고 끝낸다 → 짝과 바꾸어 소리 내어 읽게 한다. ② 철자를 고친 뒤 다시 읽지 않는다 → 고친 낱말은 꼭 한 번 더 소리 내어 읽는다는 약속을 정한다. 단원 평가는 정답 개수보다 스스로 점검했는지를 본다.',
      }),
    ],
  });
})();
