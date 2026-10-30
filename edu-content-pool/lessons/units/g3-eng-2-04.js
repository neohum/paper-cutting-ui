/* 3학년 영어 2학기 4단원. 쓰기 — 네 줄 공책에서 글자 위치 알기(1~3차시) → 대문자·소문자 획순과 모양 따라 쓰기(4~5차시)
 * → 알파벳 카드를 보고 낱말 쓰기(6~7차시).
 * 낱말·글자 활동은 모두 이 단원을 위해 새로 지은 것이다(교과서 지문·노래 가사를 옮기지 않았다). 알파벳 노래는 싣지 않았다.
 * 쓰기는 기기에서 글자 카드를 놓는 활동과 활동지에 직접 쓰는 활동을 짝으로 한다(기기에서는 손글씨를 채점하지 않는다).
 * 소리: '듣기'·'낱말 듣기' 단추는 기기가 영어 음성(speechSynthesis)으로 **누를 때만** 읽는다(자동 재생 없음).
 * 학생 화면 영어는 글자·낱말 한두 개로 짧게 두고 안내는 한국어로 쓴다. 획순은 널리 쓰는 약속이며 교과서와 다르면 학급 약속을 따른다.
 */
(function () {
  const UNIT = 'g3-eng-2-04';
  const CAT = 'g3-영어-2학기-4';
  const U = { grade: 3, subject: '영어', unitTitle: '4. 쓰기' };
  const S2 = '[4영02-02]';
  const FORMATS = ['chromebook', 'projector', 'print'];
  const PROMPT = (what) => `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`;
  const lesson = (n, std, body) => Object.assign({ id: `${UNIT}-${String(n).padStart(2, '0')}`, schema: 'edu-lesson.v1', catalog: { unit: CAT, lesson: n } }, U, { standards: [std], minutes: 40, formats: FORMATS }, body);
  // 장면: 하늘·언덕 바탕 + 모티프 몇 개 + 글 두 줄
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
  // 단계: 쉬움 = 맞는 자리 초록 테두리·틀린 자리 되돌림, 기본·도전 = 다 놓고 확인(도전은 문항마다 함정 카드가 더 섞임)
  const LV = (o) => ({ easy: Object.assign({}, o, { live: true, instant: true }), base: Object.assign({}, o), challenge: Object.assign({}, o) });
  // 활동 교구 옵션: mode와 1단계 힌트(정답 낱말 없이)
  const LA = (mode, hint1, x) => LV(Object.assign({ mode, hint1 }, mode === 'order' || mode === 'match' || mode === 'fill' ? {} : { shuffle: false }, mode === 'pick' ? { basket: '고른 카드' } : {}, mode === 'listen' ? { basket: '들은 것' } : {}, x));
  const LF = (hint1) => ({ easy: { mode: 'flip', front: 'en', hint1 }, base: { mode: 'flip', hint1 }, challenge: { mode: 'flip', hint1 } });
  const LSP = (hint1) => ({ easy: { mode: 'spell', hint1 }, base: { mode: 'spell', hint1 }, challenge: { mode: 'spell', hint1 } });
  const C = (id, text, x) => Object.assign({ id, text }, x);
  const BG = (id, big) => C(id, '', { big: big || id });           // 큰 글자·숫자 카드(소리 문항: 글 설명 없음)
  const W = (en, ko, motif) => Object.assign({ en, ko }, motif ? { motif } : {});
  // ── 문항 만들기: 도전 단계는 o.x(함정 카드·낱말)를 더한다 ──
  const withX = (src, x) => (src.words ? Object.assign({}, src, { words: [...src.words, ...x] }) : Object.assign({}, src, { cards: [...src.cards, ...x] }));
  const base = (o, prompt, target, src) => {
    const it = { prompt, toolOptions: src, target, difficulty: o.d == null ? 0.15 : o.d };
    if (o.h) it.hints = o.h;
    if (o.p) { it.predict = { q: o.p[0], options: o.p[1], answer: o.p[2] }; it.conclude = o.p[3]; }
    if (o.x) it.levels = { challenge: { toolOptions: withX(src, o.x) } };
    return it;
  };
  const LS = (prompt, say, src, ans, o = {}) => base(o, prompt, { listen: ans }, Object.assign({ mode: 'listen', say }, src));
  const MT = (prompt, slots, cards, map, o = {}) => base(o, prompt, { match: map }, { mode: 'match', slots, cards });
  const MW = (prompt, words, o = {}) => base(o, prompt, { match: Object.fromEntries(words.map((w) => [w.en, w.en])) }, Object.assign({ mode: 'match', words }, o.rev ? { reverse: true } : {}));
  const PK = (prompt, cards, ans, o = {}) => base(o, prompt, { pick: ans }, { mode: 'pick', cards });
  const SO = (prompt, slots, cards, map, o = {}) => base(o, prompt, { sort: map }, { mode: 'sort', slots, cards });
  const OR = (prompt, cards, order, o = {}) => base(o, prompt, { order }, { mode: 'order', cards });
  const FI = (prompt, slots, cards, map, o = {}) => base(o, prompt, { fill: map }, { mode: 'fill', slots, cards });
  const FP = (prompt, words, flip, o = {}) => base(o, prompt, { flip }, { mode: 'flip', words });
  const SPL = (prompt, word, ko, motif, extra, o = {}) => base(o, prompt, { spell: word }, Object.assign({ mode: 'spell', word, ko }, motif ? { motif } : {}, extra ? { extra } : {}));
  // 활동지 그림(교구 figure): 글을 읽는 칸이라 wide
  const FIG = (prompt, options, answer) => ({ type: 'figure', wide: true, prompt, tool: 'wordcards', figures: [{ options, caption: '' }], answer });
  // 대문자 칸 + 소문자 카드 짝 짓기 도우미
  const ULS = (ls) => ls.map((l) => ({ id: l, label: l }));
  const LCS = (ls) => ls.map((l) => BG(l.toLowerCase()));
  const UM = (prompt, ls, o) => MT(prompt, ULS(ls), LCS(ls), Object.fromEntries(ls.map((l) => [l, l.toLowerCase()])), o);
  const ABC = (...ls) => ls.map((l) => BG(l));
  const TX = (...ls) => ls.map((l) => C(l, l));
  const ST = (id, text) => C(id, text);            // 획순 설명 카드(한국어 짧은 글)

  PaperLessons.registerUnit({
    id: UNIT, schema: 'edu-unit.v1', catalogUnit: CAT,
    grade: 3, subject: '영어', unitTitle: '4. 쓰기',
    flow: '단원은 "칸 → 획 → 낱말" 순으로 쓰기를 쌓는다. 1~3차시는 네 줄 공책에서 소문자가 위 칸까지 올라가는지, 가운데 칸에만 있는지, 아래 칸으로 내려가는지를 모양으로 나누고, 낱말 속에서 꼬리가 있는 글자를 찾아 빠진 글자를 채운다. 4~5차시는 대문자의 획순(T·L·F·H·E·A)과 소문자 b·d·p·q의 쓰는 순서를 차례 카드로 놓아 보고, 대문자와 소문자를 짝 짓는다. 6~7차시는 그림 카드를 보고 낱말을 고르고 알파벳 카드를 놓아 낱말을 만든 뒤 마지막 시간에 칸·획·낱말을 한꺼번에 점검한다. 기기에서는 글자 카드를 놓는 일만 하고 손글씨는 활동지 칸에서 직접 쓰므로 교사가 쓰는 모습을 돌아다니며 본다.',
    refs: {},
    lessons: [
      // ───────────────────────── 1차시 (intro) ─────────────────────────
      lesson(1, S2, {
        title: '네 줄 공책에서 위 칸까지 오르는 글자 나누기',
        objective: '소문자를 쓸 때 위 칸까지 올라가는 글자와 가운데 칸에만 쓰는 글자를 모양을 보고 나눌 수 있다.',
        illustration: {
          prompt: PROMPT('a child leaning over a four-line notebook where tall letters reach the top line and small letters sit in the middle, with a pencil beside it'),
          scene: SC('b  a  d  c', '네 줄 공책 칸 알기', [{ motif: 'pencil', x: 90, y: 204, s: 0.9 }, { motif: 'book', x: 392, y: 212 }, { motif: 'star', x: 250, y: 74, s: 0.6 }]),
        },
        stages: [
          INTRO(7, '칠판에 네 줄을 긋고 가운데 두 줄 사이에 a를, 맨 위 줄까지 닿게 b를 써 보이며 "두 글자는 키가 같아요, 달라요?"라고 묻는다. "b는 막대가 위로 쭉 올라갔어요."처럼 모양으로 말하는 학생의 말을 받아 "그럼 d도 올라갈까요?"로 넓힌다. 글자 크기를 모두 같게 쓰는 학생에게는 칸을 손가락으로 짚으며 a와 b가 닿는 줄이 다름을 보여 준다.',
            '네 줄 공책에서 어떤 글자는 위까지 올라가고 어떤 글자는 가운데에만 있어요. 칠판의 글자를 보고 찾아봐요.',
            { tool: 'wordcards', options: { mode: 'sort', shuffle: false, slots: [{ id: 'up', label: '위 칸까지' }, { id: 'mid', label: '가운데 칸' }], cards: [BG('b'), BG('a')] }, sequence: [{ at: {} }, { at: { b: 0, a: 1 } }] }),
          MAIN(26,
            ACT('a1', '활동 1. 키 큰 글자와 키 작은 글자 나누기', 13, 'wordcards',
              '"글자 막대가 위로 올라갔으면 위 칸, 동그랗게 가운데에만 있으면 가운데 칸이에요. 손가락으로 허공에 한 번 써 보고 놓아요." 한 장을 놓을 때마다 글자 이름을 말하게 한다. 이름은 아는데 칸을 못 정하는 학생에게는 칠판 네 줄에 직접 써 보게 한다. 대문자 카드가 섞인 도전 단계는 소문자만 나누는 것이라고 먼저 말해 준다.',
              '소문자 카드를 모양을 보고 위 칸까지 올라가는 글자와 가운데 칸 글자로 나눠 놓아요.',
              LA('sort', '글자를 한 번 써 본다고 생각해 보세요. 막대가 맨 위 줄까지 올라가는지 가운데에서 멈추는지 살펴요.'),
              [
                SO('소문자 카드만 위 칸 글자와 가운데 칸 글자로 나눠 보세요.', [{ id: 'up', label: '위 칸까지' }, { id: 'mid', label: '가운데 칸' }], ABC('b', 'd', 'a', 'c'), { up: ['b', 'd'], mid: ['a', 'c'] }, { x: [BG('B')] }),
                SO('소문자 카드만 위 칸 글자와 가운데 칸 글자로 나눠 보세요. 한 번 더!', [{ id: 'up', label: '위 칸까지' }, { id: 'mid', label: '가운데 칸' }], ABC('h', 'l', 'e', 'o'), { up: ['h', 'l'], mid: ['e', 'o'] }, { d: 0.2, x: [BG('H')] }),
                SO('소문자 카드만 나눠 보세요. 가운데 칸 글자가 더 많아요.', [{ id: 'up', label: '위 칸까지' }, { id: 'mid', label: '가운데 칸' }], ABC('k', 'm', 's', 'u'), { up: ['k'], mid: ['m', 's', 'u'] }, { d: 0.2, x: [BG('K')],
                  p: ['k는 어느 칸까지 올라갈까요?', ['가운데 칸까지만요', '위 칸까지 올라가요'], 1, 'k는 막대가 위 칸까지 올라가요. 막대가 있는지 보면 쉽게 나눌 수 있어요.'] }),
                SO('소문자 카드만 위 칸 글자와 가운데 칸 글자로 나눠 보세요.', [{ id: 'up', label: '위 칸까지' }, { id: 'mid', label: '가운데 칸' }], ABC('n', 'l', 'r', 'k'), { up: ['l', 'k'], mid: ['n', 'r'] }, { d: 0.25, x: [BG('N')] }),
              ]),
            ACT('a2', '활동 2. 아래 칸까지 내려가는 글자 찾기', 13, 'wordcards',
              '"어떤 글자는 막대가 줄 아래로 내려가요. g를 써 볼 때 꼬리가 어디로 가는지 봐요." 꼬리가 아래로 내려가는 글자를 고르게 하고, 이름이 아니라 모양으로 찾는 연습임을 말한다. 위로 올라가는 b나 d를 고르는 학생에게는 막대가 위인지 아래인지 손가락으로 방향을 짚게 한다. 대문자 카드는 소문자 중에서 찾는 문제이므로 고르지 않는다고 짚어 준다.',
              '소문자 카드 가운데 줄 아래 칸까지 내려가는 글자만 바구니에 넣어요.',
              LA('pick', '글자를 쓴다고 생각해 보세요. 쓰고 나서 꼬리가 줄 아래로 내려가는 글자를 찾아요.'),
              [
                PK('소문자 가운데 아래 칸까지 내려가는 글자를 골라 보세요.', ABC('a', 'g', 'e'), ['g'], { x: [BG('G')] }),
                PK('소문자 가운데 아래 칸까지 내려가는 글자를 골라 보세요.', ABC('o', 'p', 'c'), ['p'], { d: 0.2, x: [BG('P')] }),
                PK('소문자 가운데 아래 칸까지 내려가는 글자를 골라 보세요.', ABC('y', 'n', 'u'), ['y'], { d: 0.2, x: [BG('Y')],
                  p: ['y의 꼬리는 어디로 갈까요?', ['줄 아래로 내려가요', '위로 올라가요'], 0, 'y는 꼬리가 줄 아래로 내려가요. 위로 가는 글자와 아래로 가는 글자를 나눠 기억해요.'] }),
                PK('소문자 가운데 아래 칸까지 내려가는 글자를 모두 골라 보세요.', ABC('s', 'q', 'r', 'y'), ['q', 'y'], { d: 0.25, x: [BG('Q')] }),
              ]),
          ),
          WRAP(7, '"오늘 네 줄 공책에서 가장 높이 올라간 글자는 무엇이었나요?" 두세 명에게 글자와 이유를 말하게 한 뒤 출구 질문을 푼다. 1번에서 d를 가운데 칸에 놓은 학생은 다음 시간 시작에 d의 막대를 허공에 써 보고 어디까지 올라가는지 말해 본다.',
            [
              { type: 'tool', tool: 'wordcards', options: { mode: 'sort', shuffle: false, slots: [{ id: 'up', label: '위 칸까지' }, { id: 'mid', label: '가운데 칸' }], cards: [BG('t'), BG('x')] }, prompt: '두 글자를 위 칸까지 올라가는 글자와 가운데 칸 글자로 나눠 보세요.', target: { sort: { up: ['t'], mid: ['x'] } }, difficulty: 0.2 },
              { type: 'choice', prompt: '다음 중 줄 아래로 내려가는 글자는 무엇일까요?', options: ['a', 'p', 'l'], answer: 1, difficulty: 0.15, explain: 'p는 동그라미 아래로 막대가 줄 아래까지 내려가요.' },
              MOOD('오늘 네 줄 공책에서 글자 칸 알기는 어땠나요?'),
            ]),
        ],
        worksheet: WS('네 줄 공책과 글자 칸', [
          { type: 'table', prompt: '글자를 보고 알맞은 칸에 ○ 하세요.', columns: ['글자', '위 칸까지', '가운데 칸'], cells: [['b', '', ''], ['a', '', ''], ['l', '', ''], ['o', '', '']], answer: 'b 위 칸, a 가운데, l 위 칸, o 가운데' },
          { type: 'choice', prompt: '줄 아래로 내려가는 소문자에 ○ 하세요.', options: ['c', 'g', 'h'], answer: 'g' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: 'b와 d는 막대가 ___ 칸까지 올라가요.', answer: '위' },
          { type: 'short', prompt: '네 줄 공책에 b와 a를 번갈아 세 번씩 써 보세요. 어느 글자가 더 높은가요?', answer: 'b가 더 높다' },
        ], '글자를 허공에 써 보며 막대가 위로 가는지, 가운데에서 멈추는지 확인해요.', [
          { type: 'table', prompt: '글자를 보고 알맞은 칸에 ○ 하세요.', columns: ['글자', '위 칸까지', '가운데 칸'], cells: [['b', '', ''], ['a', '', '']], answer: 'b 위 칸, a 가운데' },
          { type: 'choice', prompt: '아래로 내려가는 글자에 ○ 하세요.', options: ['g', 'o'], answer: 'g' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: 'b는 막대가 ___ 칸까지 올라가요.', answer: '위' },
          { type: 'short', prompt: '네 줄 공책에 b를 두 번 써 보세요.' },
        ]),
        differentiation: DIFF(
          '글자 나누기에서 맞게 놓으면 초록 테두리가 생기고 틀리게 놓으면 카드가 되돌아와요. 카드는 네 장으로 시작해요.',
          '모든 글자 카드를 놓은 뒤 확인을 눌러 스스로 고쳐요. 칠판 네 줄에 직접 써 보고 확인해도 좋아요.',
          '글자 나누기와 찾기에 대문자 카드가 한 장씩 섞여 나와요. 소문자만 골라서 놓아요.'),
        teacherNotes: '자주 보이는 어려움: ① a와 b를 같은 높이로 쓴다 → 네 줄을 그려 닿는 줄이 다름을 보게 한다. ② g, p, y를 위 칸에 놓는다 → 꼬리가 줄 아래로 가는 것을 손가락으로 따라 쓰게 한다. ③ 소문자와 대문자 높이를 섞는다 → 대문자는 위 칸까지 쓰는 글자라고 따로 알려 준다. 기기에서 하는 일은 글자 위치를 가르는 것이며, 실제 쓰기는 활동지에서 한다.',
      }),

      // ───────────────────────── 2차시 (practice) ─────────────────────────
      lesson(2, S2, {
        title: '위·가운데·아래 세 칸에 소문자 놓고 낱말 글자 차례 놓기',
        objective: '소문자를 위 칸, 가운데 칸, 아래 칸으로 나누고, 세 글자 낱말의 글자를 왼쪽부터 차례대로 놓을 수 있다.',
        illustration: {
          prompt: PROMPT('a child placing letter cards on a three-row board, with tall letters on top, small letters in the middle and letters with tails hanging below'),
          scene: SC('b   a   g', '위 · 가운데 · 아래', [{ motif: 'book', x: 88, y: 208, s: 0.9 }, { motif: 'tree', x: 400, y: 214 }, { motif: 'bird', x: 252, y: 70 }]),
        },
        stages: [
          INTRO(7, '지난 시간의 b, a, g를 칠판에 쓰고 "어느 글자가 위로 가고, 어느 글자가 아래로 갈까요?"라고 묻는다. 학생이 "g는 꼬리가 있어요."처럼 말하면 "그럼 칸이 몇 개 필요할까요?"로 세 칸을 그려 보인다. 소문자 b를 가운데 칸에서 시작하는 학생에게는 b의 막대가 가운데 칸 위로 한 칸 더 올라감을 짚어 준다.',
            '글자 막대가 위로 가기도 하고 아래로 가기도 해요. 세 칸에 글자를 나누어 놓아 봐요.',
            { tool: 'wordcards', options: { mode: 'sort', shuffle: false, slots: [{ id: 'up', label: '위 칸' }, { id: 'mid', label: '가운데 칸' }, { id: 'low', label: '아래 칸' }], cards: [BG('b'), BG('a'), BG('g')] }, sequence: [{ at: {} }, { at: { b: 0, a: 1, g: 2 } }] }),
          MAIN(26,
            ACT('a1', '활동 1. 세 칸으로 소문자 나누기', 13, 'wordcards',
              '"글자를 쓸 때 어디까지 닿는지 손가락으로 한 번 써 보세요." 막대가 위로 올라가면 위 칸, 몸통만 있으면 가운데 칸, 꼬리가 내려가면 아래 칸이다. 꼬리가 있는 글자를 가운데 칸에 놓는 학생에게는 글자를 쓰고 줄 아래로 내려간 부분을 보여 준다. 도전 단계는 대문자가 섞여 있으니 소문자만 놓는다고 말한다.',
              '소문자 카드를 위 칸, 가운데 칸, 아래 칸으로 나눠 놓아요.',
              LA('sort', '글자를 허공에 쓰고 막대가 위로 가는지, 꼬리가 아래로 가는지, 아무 쪽도 아닌지 살펴요.'),
              [
                SO('소문자 카드를 세 칸으로 나눠 보세요.', [{ id: 'up', label: '위 칸' }, { id: 'mid', label: '가운데 칸' }, { id: 'low', label: '아래 칸' }], ABC('b', 'a', 'g'), { up: ['b'], mid: ['a'], low: ['g'] }, { d: 0.15, x: [BG('G')] }),
                SO('소문자 카드를 세 칸으로 나눠 보세요. 카드가 한 장 더 많아요.', [{ id: 'up', label: '위 칸' }, { id: 'mid', label: '가운데 칸' }, { id: 'low', label: '아래 칸' }], ABC('d', 'o', 'y', 'u'), { up: ['d'], mid: ['o', 'u'], low: ['y'] }, { d: 0.2, x: [BG('D')] }),
                SO('소문자 카드를 세 칸으로 나눠 보세요.', [{ id: 'up', label: '위 칸' }, { id: 'mid', label: '가운데 칸' }, { id: 'low', label: '아래 칸' }], ABC('l', 'e', 'p', 'm'), { up: ['l'], mid: ['e', 'm'], low: ['p'] }, { d: 0.25, x: [BG('L')],
                  p: ['p는 몸통이 어느 칸에 있을까요?', ['가운데 칸에 있고 꼬리가 아래로 가요', '위 칸에 있어요'], 0, 'p는 둥근 몸통이 가운데 칸에 있고 막대가 아래 칸으로 내려가요.'] }),
                SO('소문자 카드를 세 칸으로 나눠 보세요.', [{ id: 'up', label: '위 칸' }, { id: 'mid', label: '가운데 칸' }, { id: 'low', label: '아래 칸' }], ABC('h', 's', 'q', 'c'), { up: ['h'], mid: ['s', 'c'], low: ['q'] }, { d: 0.25, x: [BG('Q')] }),
              ]),
            ACT('a2', '활동 2. 낱말의 글자를 왼쪽부터 차례로 놓기', 13, 'wordcards',
              '"영어는 왼쪽에서 오른쪽으로 써요. 뜻을 보고 첫 글자부터 차례로 놓아 봐요." 낱말의 첫 글자 이름을 먼저 말하게 한 뒤 놓게 한다. 글자는 다 아는데 순서를 거꾸로 놓는 학생에게는 낱말을 한 글자씩 소리 내며 손가락으로 왼쪽에서 오른쪽으로 짚게 한다. 놓은 뒤에는 읽어 보며 확인하자고 말한다.',
              '뜻에 맞는 낱말이 되도록 글자 카드를 왼쪽부터 차례로 놓아요.',
              LA('order', '낱말을 소리 내어 읽으며 첫 글자부터 떠올려 보세요. 읽는 방향은 왼쪽에서 오른쪽이에요.'),
              [
                OR('개라는 뜻의 낱말이 되도록 글자 카드를 놓아 보세요.', ABC('d', 'o', 'g'), ['d', 'o', 'g'], { d: 0.15 }),
                OR('가방이라는 뜻의 낱말이 되도록 글자 카드를 놓아 보세요.', ABC('b', 'a', 'g'), ['b', 'a', 'g'], { d: 0.2 }),
                OR('돼지라는 뜻의 낱말이 되도록 글자 카드를 놓아 보세요.', ABC('p', 'i', 'g'), ['p', 'i', 'g'], { d: 0.2,
                  p: ['낱말은 어느 방향으로 쓸까요?', ['왼쪽에서 오른쪽으로', '오른쪽에서 왼쪽으로'], 0, '영어는 왼쪽에서 오른쪽으로 써요. 첫 글자부터 차례로 놓아요.'] }),
                OR('컵이라는 뜻의 낱말이 되도록 글자 카드를 놓아 보세요.', ABC('c', 'u', 'p'), ['c', 'u', 'p'], { d: 0.25 }),
              ]),
          ),
          WRAP(7, '"오늘 꼬리가 아래로 내려가는 글자를 몇 개 만났나요?" 학생이 g, p, y를 말하면 칠판 아래 칸에 써 준다. 출구 질문을 푼 뒤 낱말 글자 순서를 바꿔 놓은 학생은 다음 시간 시작에 낱말을 소리 내어 읽으며 왼쪽부터 다시 놓는다.',
            [
              { type: 'tool', tool: 'wordcards', options: { mode: 'order', shuffle: true, cards: [BG('b'), BG('u'), BG('s')] }, prompt: '버스라는 뜻의 낱말이 되도록 글자 카드를 놓아 보세요.', target: { order: ['b', 'u', 's'] }, difficulty: 0.15 },
              { type: 'choice', prompt: 'g 글자는 몸통이 어느 칸에 있고 꼬리는 어디로 갈까요?', options: ['몸통 가운데, 꼬리 아래', '몸통 위, 꼬리 위'], answer: 0, difficulty: 0.2, explain: 'g는 몸통이 가운데 칸에 있고 꼬리가 줄 아래로 내려가요.' },
              MOOD('오늘 세 칸에 글자 놓기는 어땠나요?'),
            ]),
        ],
        worksheet: WS('세 칸과 낱말', [
          { type: 'table', prompt: '세 칸 가운데 알맞은 칸에 ○ 하세요.', columns: ['글자', '위 칸', '가운데 칸', '아래 칸'], cells: [['d', '', '', ''], ['o', '', '', ''], ['y', '', '', ''], ['l', '', '', '']], answer: 'd 위, o 가운데, y 아래, l 위' },
          { type: 'blank', prompt: '낱말의 글자를 순서대로 쓰세요. (개)', text: 'd ___ g', answer: 'o' },
          { type: 'choice', prompt: '꼬리가 아래로 내려가는 글자 두 개가 모두 들어 있는 낱말에 ○ 하세요.', options: ['pig', 'bus', 'sun'], answer: 'pig' },
          { type: 'short', prompt: '네 줄 공책에 bag을 두 번 써 보세요.', answer: 'bag bag' },
        ], '세 칸을 먼저 그려 놓고 글자 막대나 꼬리가 어디로 가는지 손가락으로 따라가요.', [
          { type: 'table', prompt: '알맞은 칸에 ○ 하세요.', columns: ['글자', '위 칸', '가운데 칸', '아래 칸'], cells: [['b', '', '', ''], ['g', '', '', '']], answer: 'b 위, g 아래' },
          { type: 'blank', prompt: '빈칸에 알맞은 글자를 쓰세요. (개)', text: 'd o ___', answer: 'g' },
          { type: 'choice', prompt: '꼬리가 있는 글자가 들어 있는 낱말에 ○ 하세요.', options: ['pig', 'bus'], answer: 'pig' },
          { type: 'short', prompt: '네 줄 공책에 dog을 한 번 써 보세요.' },
        ]),
        differentiation: DIFF(
          '세 칸 나누기에서 카드가 세 장으로 시작하고 맞게 놓으면 초록 테두리가 생겨요. 틀리게 놓으면 되돌아와요.',
          '글자를 모두 놓고 확인을 눌러 스스로 고쳐요. 낱말 놓기는 읽으며 확인해요.',
          '세 칸 나누기에 대문자 카드가 한 장 섞여 나와요. 소문자만 놓아요.'),
        teacherNotes: '자주 보이는 어려움: ① 꼬리가 있는 글자를 가운데 칸에 놓는다 → 글자를 직접 쓰고 줄 아래로 내려간 부분에 손가락을 대게 한다. ② 낱말 글자를 오른쪽부터 놓는다 → 한국어와 같은 왼쪽부터임을 짚는다. ③ 글자를 아는데 칸을 못 정해 시간이 오래 걸린다 → 칠판에 세 칸을 그려 놓고 짝과 함께 허공에 써 보게 한다. 이 차시의 낱말은 새 낱말 학습이 아니라 글자 놓기용이다.',
      }),

      // ───────────────────────── 3차시 (extend) ─────────────────────────
      lesson(3, S2, {
        title: '꼬리 있는 글자가 들어 있는 낱말 찾고 빈칸 글자 쓰기',
        objective: '낱말 속에서 줄 아래로 내려가는 글자를 찾고, 뜻을 보고 빠진 글자를 골라 낱말을 완성할 수 있다.',
        illustration: {
          prompt: PROMPT('a child holding a magnifying glass over short words on a card and spotting a letter whose tail hangs below the line'),
          scene: SC('dog  pig  bag', '꼬리 있는 글자 찾기', [{ motif: 'dog', x: 94, y: 204, s: 0.9 }, { motif: 'bird', x: 396, y: 84 }, { motif: 'tree', x: 400, y: 214 }]),
        },
        stages: [
          INTRO(7, '칠판에 dog과 sun을 크게 쓰고 "두 낱말 가운데 줄 아래로 꼬리가 내려가는 낱말은 어느 것일까요?"라고 묻는다. 손가락으로 글자를 하나씩 짚으며 g의 꼬리를 보여 준 뒤 "sun에는 꼬리가 없어요."를 확인한다. 낱말 전체를 한꺼번에 보고 고르는 학생에게는 글자를 하나씩 짚어 가며 보게 한다.',
            '낱말은 글자가 여러 개 모여 있어요. 글자를 하나씩 보며 꼬리가 있는 글자를 찾아봐요.',
            { tool: 'wordcards', options: { mode: 'pick', basket: '꼬리 있는 낱말', shuffle: false, cards: [TX('dog'), TX('sun')].flat() }, sequence: [{ at: {} }, { at: { dog: 0 } }] }),
          MAIN(26,
            ACT('a1', '활동 1. 꼬리 있는 글자가 들어 있는 낱말 고르기', 13, 'wordcards',
              '"낱말마다 글자를 하나씩 짚어 가며 꼬리가 아래로 내려가는 글자가 있는지 보세요." 발견한 글자 이름도 말하게 한다. 낱말의 첫 글자만 보고 고르는 학생에게는 끝 글자까지 손가락으로 짚게 한다. g, p, y만 꼬리가 있다고 외우게 하지 말고 직접 써 보며 확인하자고 말한다.',
              '낱말 카드 가운데 줄 아래로 내려가는 글자가 들어 있는 카드를 모두 바구니에 넣어요.',
              LA('pick', '낱말의 글자를 한 글자씩 짚어 보세요. 줄 아래로 꼬리가 내려가는 글자가 있는 낱말만 골라요.'),
              [
                PK('줄 아래로 내려가는 글자가 들어 있는 낱말을 모두 골라 보세요.', TX('cat', 'dog', 'sun', 'pig'), ['dog', 'pig'], { d: 0.15 }),
                PK('줄 아래로 내려가는 글자가 들어 있는 낱말을 골라 보세요.', TX('bus', 'cup', 'hat', 'red'), ['cup'], { d: 0.2 }),
                PK('줄 아래로 내려가는 글자가 들어 있는 낱말을 모두 골라 보세요.', TX('toy', 'fox', 'net', 'boy'), ['toy', 'boy'], { d: 0.2,
                  p: ['낱말에서 꼬리 있는 글자는 어디에 있을까요?', ['첫 글자에만 있어요', '어느 자리에나 있을 수 있어요'], 1, '꼬리가 있는 글자는 낱말의 어느 자리에도 있을 수 있어요. 끝 글자까지 살펴요.'] }),
                PK('줄 아래로 내려가는 글자가 들어 있는 낱말을 모두 골라 보세요.', TX('pen', 'bag', 'yes', 'cat'), ['pen', 'bag', 'yes'], { d: 0.3 }),
              ]),
            ACT('a2', '활동 2. 뜻을 보고 빠진 글자 채우기', 13, 'wordcards',
              '"뜻을 보고 낱말을 소리 내어 읽어 본 뒤 비어 있는 글자를 찾아요." 고른 글자를 넣어 낱말을 다시 읽게 한다. 모양이 비슷한 o와 a를 섞는 학생에게는 글자를 허공에 써 보게 한다. 낱말을 소리 내어 읽지 않고 아무 글자나 놓는 학생에게는 뜻을 먼저 말하게 한 뒤 첫소리를 같이 읽어 준다.',
              '뜻을 보고 빈칸에 들어갈 글자 카드를 골라 낱말을 완성해요.',
              LA('fill', '뜻을 먼저 떠올리고 낱말을 소리 내어 읽어 보세요. 빈칸에 어떤 글자가 들어가야 읽히는지 생각해요.'),
              [
                FI('고양이를 뜻하는 낱말의 빈칸에 들어갈 글자를 골라 보세요.', [{ id: 'f1', label: 'c ___ t' }], TX('a', 'o', 'u'), { f1: 'a' }, { d: 0.15 }),
                FI('개를 뜻하는 낱말의 빈칸에 들어갈 글자를 골라 보세요.', [{ id: 'f1', label: 'd ___ g' }], TX('o', 'i', 'e'), { f1: 'o' }, { d: 0.2 }),
                FI('태양을 뜻하는 낱말의 빈칸에 들어갈 글자를 골라 보세요.', [{ id: 'f1', label: 's ___ n' }], TX('u', 'a', 'o'), { f1: 'u' }, { d: 0.2 }),
                FI('돼지를 뜻하는 낱말의 빈칸에 들어갈 글자를 골라 보세요.', [{ id: 'f1', label: 'p ___ g' }], TX('i', 'a', 'e'), { f1: 'i' }, { d: 0.25 }),
              ]),
          ),
          WRAP(7, '"오늘 낱말 속에서 꼬리가 있는 글자를 몇 개 찾았나요?" 짝에게 낱말 하나를 말해 주고 꼬리 있는 글자를 짚어 보게 한다. 출구 질문을 푼 뒤, 빈칸에 글자를 소리 내어 읽지 않고 고른 학생은 다음 시간 시작에 낱말을 읽으며 빈칸을 다시 골라 본다.',
            [
              { type: 'tool', tool: 'wordcards', options: { mode: 'pick', basket: '꼬리 있는 낱말', shuffle: false, cards: [TX('egg', 'bed')].flat() }, prompt: '줄 아래로 내려가는 글자가 들어 있는 낱말을 골라 보세요.', target: { pick: ['egg'] }, difficulty: 0.2 },
              { type: 'choice', prompt: 'jam에서 줄 아래로 내려가는 글자는 무엇일까요?', options: ['j', 'a', 'm'], answer: 0, difficulty: 0.25, explain: 'j는 꼬리가 줄 아래로 내려가요. 점은 위에 있어요.' },
              MOOD('오늘 낱말 속 글자 찾기는 어땠나요?'),
            ]),
        ],
        worksheet: WS('꼬리 있는 글자와 빈칸', [
          { type: 'table', prompt: '낱말을 보고 꼬리가 있는 글자를 쓰세요. 없으면 ×를 쓰세요.', columns: ['낱말', '꼬리 있는 글자'], cells: [['dog', ''], ['sun', ''], ['pen', ''], ['yes', '']], answer: 'dog g / sun × / pen p / yes y' },
          { type: 'blank', prompt: '빈칸에 알맞은 글자를 쓰세요. (고양이)', text: 'c ___ t', answer: 'a' },
          { type: 'choice', prompt: '꼬리가 있는 글자가 하나도 없는 낱말에 ○ 하세요.', options: ['pig', 'bus', 'boy'], answer: 'bus' },
          { type: 'short', prompt: '네 줄 공책에 pig을 한 번 쓰고, 꼬리가 있는 글자에 밑줄을 그으세요.', answer: 'pig (p와 g)' },
        ], '낱말을 한 글자씩 손가락으로 짚으며 꼬리가 있는지 살펴요.', [
          { type: 'table', prompt: '낱말을 보고 꼬리가 있는 글자를 쓰세요.', columns: ['낱말', '꼬리 있는 글자'], cells: [['dog', ''], ['sun', '']], answer: 'dog g / sun ×' },
          { type: 'blank', prompt: '빈칸에 알맞은 글자를 쓰세요. (고양이)', text: 'c a ___', answer: 't' },
          { type: 'choice', prompt: '꼬리가 있는 글자가 들어 있는 낱말에 ○ 하세요.', options: ['dog', 'sun'], answer: 'dog' },
          { type: 'short', prompt: '네 줄 공책에 sun을 한 번 써 보세요.' },
        ]),
        differentiation: DIFF(
          '낱말 고르기와 빈칸 채우기에서 맞게 놓으면 초록 테두리가 생기고 틀리게 놓으면 카드가 되돌아와요.',
          '카드를 모두 놓은 뒤 확인을 눌러 스스로 고쳐요. 글자를 직접 써 보며 확인해도 좋아요.',
          '낱말 고르기에서 꼬리 있는 글자가 들어 있는 낱말이 둘 이상이고, 빈칸 채우기는 뜻만 보고 글자를 정해요.'),
        teacherNotes: '자주 보이는 어려움: ① 낱말의 첫 글자만 보고 꼬리 여부를 정한다 → 끝 글자까지 손가락으로 짚게 한다. ② j를 꼬리 있는 글자로 보지 못한다 → 점은 위에 있고 꼬리는 아래로 내려감을 직접 써서 보여 준다. ③ 빈칸에서 소리를 읽지 않고 고른다 → 뜻을 말한 뒤 낱말을 한 번 읽어 보게 한다. 쓰기 실제 연습은 활동지에서 하며 기기에서는 글자 찾기와 고르기만 한다.',
      }),

      // ───────────────────────── 4차시 (core) ─────────────────────────
      lesson(4, S2, {
        title: '대문자 T·L·H·F 쓰는 순서대로 획 카드 놓기',
        objective: '대문자 T, L, H, F를 쓰는 선의 차례를 말로 설명하고, 획 카드를 쓰는 순서대로 놓을 수 있다.',
        illustration: {
          prompt: PROMPT('a child tracing a large capital letter T in the air with a finger while numbered arrows show the direction of each line'),
          scene: SC('T   L   H   F', '선 하나씩 쓰는 차례', [{ motif: 'pencil', x: 92, y: 206, s: 0.9 }, { motif: 'house', x: 396, y: 218, color: 'peach' }, { motif: 'star', x: 252, y: 74, s: 0.6 }]),
        },
        stages: [
          INTRO(7, '칠판에 큰 T를 쓰며 "선생님이 어느 선을 먼저 그렸을까요?"라고 묻고 같은 글자를 다시 한 번 천천히 쓴다. 학생이 "가로선이요."라고 하면 "그다음엔요?"로 이어 가고 두 선의 방향(왼쪽에서 오른쪽, 위에서 아래)을 손으로 따라 하게 한다. 선을 거꾸로 쓰거나 한 번에 이어 쓰는 학생에게는 순서가 다르면 글자 모양이 틀어지기 쉽다는 것을 칠판에서 보여 준다.',
            '글자는 선을 하나씩 차례로 그려요. 선생님이 쓰는 T를 잘 보고 먼저 그린 선을 말해 봐요.',
            { tool: 'wordcards', options: { mode: 'order', shuffle: false, cards: [ST('top', '가로선 ─ 왼쪽에서 오른쪽으로'), ST('stem', '세로선 │ 위에서 아래로')] }, sequence: [{ at: {} }, { at: { top: 0, stem: 1 } }] }),
          MAIN(26,
            ACT('a1', '활동 1. 대문자 획 카드를 쓰는 차례대로 놓기', 13, 'wordcards',
              '"허공에 큰 글자를 쓰면서 어느 선을 먼저 그리는지 말해 봐요." 한 글자씩 선생님이 칠판에 한 번 써 보이고 학생이 손가락으로 따라 쓴다. 선의 방향(위에서 아래, 왼쪽에서 오른쪽)도 같이 말하게 한다. 가로선부터 쓰는 습관이 있는 학생에게는 L을 직접 써 보게 하여 세로선부터 쓰는 이유(왼쪽에서 시작)를 알려 준다. 획순은 책마다 조금 다를 수 있으니 학급에서 쓰는 순서를 정해 두고 따른다.',
              '획 카드를 글자를 쓰는 차례대로 놓아요. 놓은 뒤 허공에 손가락으로 같은 차례로 써 봐요.',
              LA('order', '글자를 허공에 쓰는 동작을 해 보세요. 가장 먼저 손이 닿는 곳이 어디인지 떠올려요.'),
              [
                OR('대문자 L의 선을 쓰는 차례대로 획 카드를 놓아 보세요.', [ST('v', '세로선 │ 위에서 아래로'), ST('h', '가로선 ─ 왼쪽에서 오른쪽으로')], ['v', 'h'], { d: 0.15 }),
                OR('대문자 T의 선을 쓰는 차례대로 획 카드를 놓아 보세요.', [ST('h', '가로선 ─ 위쪽'), ST('v', '세로선 │ 가운데에서 아래로')], ['h', 'v'], { d: 0.15 }),
                OR('대문자 H의 선을 쓰는 차례대로 획 카드를 놓아 보세요.', [ST('l', '왼쪽 세로선 │'), ST('r', '오른쪽 세로선 │'), ST('m', '가운데 가로선 ─')], ['l', 'r', 'm'], { d: 0.2,
                  p: ['H에서 가로선은 언제 그릴까요?', ['세로선 두 개를 먼저 그린 뒤에 그려요', '가장 먼저 그려요'], 0, 'H는 두 세로선을 먼저 쓰고 가운데를 가로선으로 이어요.'] }),
                OR('대문자 F의 선을 쓰는 차례대로 획 카드를 놓아 보세요.', [ST('v', '세로선 │ 위에서 아래로'), ST('t', '위쪽 가로선 ─'), ST('m', '가운데 가로선 ─')], ['v', 't', 'm'], { d: 0.25 }),
              ]),
            ACT('a2', '활동 2. 한 번에 쓰는 글자와 여러 번 떼어 쓰는 글자', 13, 'wordcards',
              '"연필을 종이에서 떼지 않고 한 번에 쓰는 글자는 어떤 글자일까요? 허공에 써 보고 정해요." C, S, O는 한 번에 이어 쓰고 T, H, F, E는 선이 여러 개라는 것을 몸으로 확인한다. O를 두 번에 나누어 쓰는 학생에게는 큰 원을 한 번에 그리게 한다. 도전 단계에는 소문자 카드가 섞이니 대문자만 나눈다고 말한다.',
              '대문자 카드를 한 번에 이어 쓰는 글자와 선을 여러 번 떼어 쓰는 글자로 나눠 놓아요.',
              LA('sort', '글자를 허공에 쓰며 손을 떼는 횟수를 세어 보세요. 손을 한 번도 떼지 않는 글자는 어느 쪽일까요?'),
              [
                SO('대문자 카드만 두 무리로 나눠 보세요.', [{ id: 'one', label: '한 번에 이어 써요' }, { id: 'many', label: '여러 번 떼어 써요' }], ABC('C', 'T'), { one: ['C'], many: ['T'] }, { d: 0.15, x: [BG('c')] }),
                SO('대문자 카드만 두 무리로 나눠 보세요.', [{ id: 'one', label: '한 번에 이어 써요' }, { id: 'many', label: '여러 번 떼어 써요' }], ABC('S', 'H', 'O'), { one: ['S', 'O'], many: ['H'] }, { d: 0.2, x: [BG('s')] }),
                SO('대문자 카드만 두 무리로 나눠 보세요.', [{ id: 'one', label: '한 번에 이어 써요' }, { id: 'many', label: '여러 번 떼어 써요' }], ABC('E', 'C', 'F', 'O'), { one: ['C', 'O'], many: ['E', 'F'] }, { d: 0.25, x: [BG('o')],
                  p: ['E는 한 번에 이어 쓸 수 있을까요?', ['선이 여러 개라서 떼어 써요', '한 번에 이어 써요'], 0, 'E는 세로선 하나와 가로선 세 개로 이루어져 있어서 여러 번 떼어 써요.'] }),
                SO('대문자 카드만 두 무리로 나눠 보세요.', [{ id: 'one', label: '한 번에 이어 써요' }, { id: 'many', label: '여러 번 떼어 써요' }], ABC('L', 'S', 'A', 'C'), { one: ['S', 'C'], many: ['L', 'A'] }, { d: 0.3, x: [BG('l')] }),
              ]),
          ),
          WRAP(7, '"오늘 글자를 쓸 때 가장 먼저 그리는 선이 글자마다 같았나요?" 두세 명이 T와 L을 비교해 말하게 한 뒤 출구 질문을 푼다. 1번에서 H의 가로선을 먼저 놓은 학생은 다음 시간 시작에 H를 천천히 써 보며 세로선이 몇 개인지 세어 본다.',
            [
              { type: 'tool', tool: 'wordcards', options: { mode: 'order', shuffle: true, cards: [ST('a', '위쪽 가로선 ─'), ST('b', '가운데 세로선 │ 아래로')] }, prompt: 'T를 다시 쓰는 차례대로 획 카드를 놓아 보세요.', target: { order: ['a', 'b'] }, difficulty: 0.15 },
              { type: 'choice', prompt: 'L을 쓸 때 가장 먼저 쓰는 선은 무엇일까요?', options: ['아래쪽 가로선', '세로선'], answer: 1, difficulty: 0.15, explain: 'L은 세로선을 먼저 쓰고 아래쪽에 가로선을 이어요.' },
              MOOD('오늘 획 차례 놓기는 어땠나요?'),
            ]),
        ],
        worksheet: WS('대문자 쓰는 차례', [
          { type: 'table', prompt: '글자를 쓰는 선의 수를 세어 쓰세요.', columns: ['글자', '선의 수'], cells: [['T', ''], ['L', ''], ['H', ''], ['F', '']], answer: 'T 2, L 2, H 3, F 3' },
          { type: 'choice', prompt: 'H의 가운데 가로선은 언제 쓰나요?', options: ['가장 먼저', '세로선 두 개를 쓴 뒤', '쓰지 않는다'], answer: '세로선 두 개를 쓴 뒤' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: 'L은 ___ 선을 먼저 쓰고 가로선을 써요.', answer: '세로' },
          { type: 'short', prompt: '네 줄 공책에 T와 L을 두 번씩 쓰며 먼저 쓴 선에 ①을 적어 보세요.', answer: 'T는 가로선이 ①, L은 세로선이 ①' },
        ], '글자를 허공에 쓴 뒤 칸에 손가락으로 따라 쓰고 먼저 그린 선에 번호를 붙여요.', [
          { type: 'table', prompt: '글자를 쓰는 선의 수를 세어 쓰세요.', columns: ['글자', '선의 수'], cells: [['T', ''], ['L', '']], answer: 'T 2, L 2' },
          { type: 'choice', prompt: 'L을 쓸 때 먼저 쓰는 선에 ○ 하세요.', options: ['세로선', '가로선'], answer: '세로선' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: 'T는 ___ 선을 먼저 써요.', answer: '가로' },
          { type: 'short', prompt: '네 줄 공책에 T를 한 번 써 보세요.' },
        ]),
        differentiation: DIFF(
          '획 카드 놓기에서 맞게 놓으면 초록 테두리가 생기고 틀리게 놓으면 카드가 되돌아와요. T와 L은 카드가 두 장이에요.',
          '획 카드를 모두 놓은 뒤 확인을 눌러 스스로 고쳐요. 놓은 뒤 허공에 같은 차례로 써 봐요.',
          '글자 나누기에 소문자 카드가 한 장 섞여 나와요. 대문자만 나눠요.'),
        teacherNotes: '자주 보이는 어려움: ① 가로선부터 쓰려는 습관 때문에 L, F, H를 거꾸로 쓴다 → 왼쪽에서 시작하는 선부터 쓴다는 규칙을 함께 말해 준다. ② 선을 한 번에 이어 쓴다 → 연필이 닿는 곳마다 숫자를 붙여 보게 한다. ③ 획순이 책마다 달라 혼란스럽다 → 학급에서 쓰는 순서를 한 가지로 정해 칠판에 붙인다. 이 차시의 획 카드는 순서를 말로 익히는 용도이고, 쓰기 평가는 활동지에서 한다.',
      }),

      // ───────────────────────── 5차시 (practice) ─────────────────────────
      lesson(5, S2, {
        title: '대문자와 소문자 짝 찾고 b·d·p·q 쓰는 순서 놓기',
        objective: '대문자와 소문자를 짝 짓고, 모양이 닮은 소문자 b, d, p, q의 쓰는 순서를 설명하며 획 카드를 놓을 수 있다.',
        illustration: {
          prompt: PROMPT('a child comparing big letters with small letters on paired cards while four mirror-like letters b d p q float above the table'),
          scene: SC('A a   B b', '큰 글자 · 작은 글자', [{ motif: 'book', x: 90, y: 208, s: 0.9 }, { motif: 'flower', x: 396, y: 216 }, { motif: 'cloud', x: 252, y: 70, s: 0.7 }]),
        },
        stages: [
          INTRO(7, '칠판에 B와 b, D와 d를 나란히 쓰고 "큰 글자와 작은 글자가 같은 짝이에요. 모양이 닮은 짝은 어느 것일까요?"라고 묻는다. "b는 막대가 왼쪽에 있어요, d는 오른쪽에 있어요."라는 말을 끌어내어 손으로 방향을 따라 하게 한다. b와 d를 거울에 비친 모양처럼 같은 글자로 여기는 학생에게는 막대와 둥근 배의 위치를 손가락으로 짚어 다름을 보여 준다.',
            '큰 글자와 작은 글자는 짝이에요. 모양이 비슷한 짝도 있고 많이 다른 짝도 있어요. 칠판을 보고 찾아봐요.',
            { tool: 'wordcards', options: { mode: 'match', shuffle: false, slots: ULS(['B', 'D']), cards: LCS(['B', 'D']) }, sequence: [{ at: {} }, { at: { b: 0, d: 1 } }] }),
          MAIN(26,
            ACT('a1', '활동 1. 대문자와 소문자 짝 찾기', 13, 'wordcards',
              '"큰 글자를 보고 짝이 되는 작은 글자를 찾아 옆에 놓아요. 모양이 닮지 않은 짝은 이름을 떠올려 봐요." 놓을 때마다 두 글자의 이름을 같이 말하게 한다. 이름을 모르는 글자는 짝에게 물어보게 한다. 대문자와 소문자가 꼭 같은 크기로 닮았을 것이라고 생각하는 학생에게는 A와 a, G와 g처럼 모양이 다른 짝을 따로 보여 준다.',
              '큰 글자 옆에 알맞은 작은 글자 카드를 놓아요.',
              LA('match', '큰 글자의 이름을 말해 보고 작은 글자 중 같은 이름을 가진 글자를 찾아보세요.'),
              [
                UM('큰 글자 옆에 알맞은 작은 글자 카드를 놓아 보세요.', ['A', 'B', 'C'], { x: [BG('z')] }),
                UM('큰 글자 옆에 알맞은 작은 글자 카드를 놓아 보세요.', ['D', 'E', 'G'], { d: 0.2, x: [BG('z')] }),
                UM('큰 글자 옆에 알맞은 작은 글자 카드를 놓아 보세요. 닮은 글자에 조심해요.', ['P', 'Q', 'R'], { d: 0.25, x: [BG('z')],
                  p: ['P와 Q는 같은 글자일까요?', ['모양이 달라서 다른 글자예요', '같은 글자예요'], 0, 'P와 Q는 이름과 소리가 다른 글자예요. 소문자 p와 q도 막대 방향이 달라요.'] }),
              ]),
            ACT('a2', '활동 2. b·d·p·q 쓰는 순서 놓기', 13, 'wordcards',
              '"b, d, p, q는 똑같이 막대와 둥근 배로 되어 있지만 쓰는 차례가 달라요. 허공에 두 번씩 써 보고 놓아요." b는 막대를 먼저 쓰고 오른쪽에 둥근 배를 쓰며, d는 둥근 배를 먼저 쓴 뒤 오른쪽에 막대를 쓰는 것을 칠판에서 보여 준다. 두 글자를 바꾸어 쓰는 학생에게는 b는 배가 오른쪽에 있다는 것을 손가락으로 확인하게 한다.',
              '획 카드를 소문자를 쓰는 차례대로 놓아요.',
              LA('order', '글자를 허공에 쓰는 동작을 해 보세요. 막대와 둥근 배 가운데 먼저 그리는 쪽을 떠올려요.'),
              [
                OR('소문자 b를 쓰는 차례대로 획 카드를 놓아 보세요.', [ST('s', '세로선 │ 위에서 아래로'), ST('c', '오른쪽에 둥근 배 ◯')], ['s', 'c'], { d: 0.2 }),
                OR('소문자 d를 쓰는 차례대로 획 카드를 놓아 보세요.', [ST('c', '왼쪽에 둥근 배 ◯'), ST('s', '오른쪽에 세로선 │')], ['c', 's'], { d: 0.2 }),
                OR('소문자 p를 쓰는 차례대로 획 카드를 놓아 보세요.', [ST('s', '줄 아래까지 세로선 │'), ST('c', '위쪽 오른쪽에 둥근 배 ◯')], ['s', 'c'], { d: 0.25,
                  p: ['p의 막대는 어디까지 내려갈까요?', ['줄 아래 칸까지요', '가운데 칸까지만요'], 0, 'p는 막대가 줄 아래 칸까지 내려가요. b와 위아래가 다른 글자예요.'] }),
                OR('소문자 q를 쓰는 차례대로 획 카드를 놓아 보세요.', [ST('c', '왼쪽에 둥근 배 ◯'), ST('s', '오른쪽에 줄 아래까지 세로선 │')], ['c', 's'], { d: 0.3 }),
              ]),
          ),
          WRAP(7, '"b와 d를 헷갈리지 않으려면 어떻게 하면 좋을까요?" 학생이 말하는 방법("b는 막대가 왼쪽")을 칠판에 적고 출구 질문을 푼다. 소문자 짝을 틀린 학생은 다음 시간 시작에 큰 글자와 작은 글자를 나란히 써 보며 이름을 읽어 본다.',
            [
              { type: 'tool', tool: 'wordcards', options: { mode: 'match', shuffle: true, slots: ULS(['F', 'H']), cards: LCS(['F', 'H']) }, prompt: '큰 글자 옆에 알맞은 작은 글자 카드를 놓아 보세요.', target: { match: { F: 'f', H: 'h' } }, difficulty: 0.2 },
              { type: 'choice', prompt: 'd에서 둥근 배는 어느 쪽에 있을까요?', options: ['왼쪽', '오른쪽'], answer: 0, difficulty: 0.2, explain: 'd는 둥근 배가 왼쪽에 있고 막대가 오른쪽에 있어요.' },
              MOOD('오늘 대문자와 소문자 짝 찾기는 어땠나요?'),
            ]),
        ],
        worksheet: WS('큰 글자와 작은 글자', [
          { type: 'table', prompt: '큰 글자의 짝이 되는 작은 글자를 쓰세요.', columns: ['큰 글자', '작은 글자'], cells: [['B', ''], ['D', ''], ['P', ''], ['Q', '']], answer: 'b, d, p, q' },
          { type: 'choice', prompt: 'b와 d의 다른 점에 ○ 하세요.', options: ['막대가 왼쪽/오른쪽에 있다', '모양이 완전히 같다', '높이가 같다'], answer: '막대가 왼쪽/오른쪽에 있다' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: 'p는 막대가 줄 ___ 칸까지 내려가요.', answer: '아래' },
          { type: 'short', prompt: '네 줄 공책에 b와 d를 한 번씩 쓰고 둥근 배가 있는 쪽에 ○ 하세요.', answer: 'b는 오른쪽, d는 왼쪽' },
        ], '큰 글자 이름을 먼저 소리 내어 읽고 짝이 되는 작은 글자를 찾아요.', [
          { type: 'table', prompt: '큰 글자의 짝이 되는 작은 글자를 쓰세요.', columns: ['큰 글자', '작은 글자'], cells: [['B', ''], ['D', '']], answer: 'b, d' },
          { type: 'choice', prompt: 'b의 둥근 배는 어느 쪽에 있나요?', options: ['왼쪽', '오른쪽'], answer: '오른쪽' },
          { type: 'blank', prompt: '빈칸에 알맞은 글자를 쓰세요.', text: 'A 짝은 ___', answer: 'a' },
          { type: 'short', prompt: '네 줄 공책에 b를 한 번 써 보세요.' },
        ]),
        differentiation: DIFF(
          '짝 찾기에서 카드가 세 장으로 줄고 맞게 놓으면 초록 테두리가 생겨요. 틀리게 놓으면 되돌아와요.',
          '모든 카드를 놓은 뒤 확인을 눌러 스스로 고쳐요. 막대 방향은 허공에 써 보며 확인해요.',
          '짝 찾기에 짝이 없는 카드(z)가 한 장 섞여 나와요. 짝이 없는 카드는 놓지 않아요.'),
        teacherNotes: '자주 보이는 어려움: ① b와 d, p와 q를 바꾸어 쓴다 → "b는 막대 먼저, 배는 오른쪽"처럼 입으로 순서를 말하며 쓰게 한다. ② 대문자와 소문자의 이름이 같다는 것을 놓친다 → 두 글자를 나란히 쓰고 같은 이름으로 읽게 한다. ③ 소문자 막대 길이를 일정하게 쓰지 못한다 → 네 줄 공책의 칸을 이용해 막대가 닿는 줄을 손가락으로 짚게 한다. 기기에서는 차례 놓기와 짝 찾기만 하고 쓰기는 활동지에서 한다.',
      }),

      // ───────────────────────── 6차시 (core) ─────────────────────────
      lesson(6, S2, {
        title: '그림 카드 보고 알파벳 카드로 낱말 만들기',
        objective: '그림 카드와 뜻을 보고 낱말의 첫 글자를 찾은 뒤, 알파벳 카드를 차례대로 놓아 세·네 글자 낱말을 만들 수 있다.',
        illustration: {
          prompt: PROMPT('a child picking letter tiles one by one to spell a word under a picture card of a cat, with a dog card waiting on the side'),
          scene: SC('c  a  t', '그림 보고 낱말 만들기', [{ motif: 'cat', x: 90, y: 204, s: 0.9 }, { motif: 'ball', x: 396, y: 214 }, { motif: 'star', x: 250, y: 74, s: 0.6 }]),
        },
        stages: [
          INTRO(7, '고양이 그림 카드를 보여 주고 "이 동물의 영어 이름은 cat이에요. 첫소리가 무엇으로 들리나요?"라고 묻는다. 학생이 "ㅋ"이라고 하면 c가 낱말의 첫 글자임을 칠판에 쓴다. 이름과 낱말을 따로 생각하는 학생에게는 그림 → 소리 → 글자 순으로 한 걸음씩 짚어 준다. 소리가 나지 않으면 교사가 직접 읽어 준다.',
            '그림을 보고 낱말의 첫소리를 떠올려 보고, 알파벳 카드를 하나씩 놓아 낱말을 만들 거예요.',
            { tool: 'wordcards', options: { mode: 'flip', words: [W('cat', '고양이', 'cat'), W('dog', '개', 'dog')] }, sequence: [{ up: [] }, { up: ['cat'] }] }),
          MAIN(26,
            ACT('a1', '활동 1. 첫 글자가 같은 카드만 뒤집기', 13, 'wordcards',
              '"카드를 눌러 영어 낱말을 확인해요. 눌러서 소리를 들어도 좋아요." 문제에서 알려 준 첫 글자로 시작하는 카드만 뒤집게 한다. 낱말의 첫소리가 아닌 마지막 글자를 보고 고르는 학생에게는 카드를 뒤집어 첫 글자부터 손가락으로 짚게 한다. 한 장씩 뒤집을 때마다 짝에게 낱말을 읽어 주게 한다.',
              '그림과 뜻을 보고 문제의 글자로 시작하는 낱말 카드만 뒤집어 영어 낱말을 확인해요.',
              LF('낱말의 첫소리를 떠올려 보고, 그 소리로 시작하는 그림만 골라 뒤집어 보세요.'),
              [
                FP('b로 시작하는 낱말 카드만 뒤집어 보세요.', [W('cat', '고양이', 'cat'), W('ball', '공', 'ball'), W('book', '책', 'book'), W('dog', '개', 'dog')], ['ball', 'book'], { d: 0.15 }),
                FP('a나 e로 시작하는 낱말 카드만 뒤집어 보세요.', [W('sun', '해', 'sun'), W('egg', '달걀', 'egg'), W('apple', '사과', 'apple'), W('cat', '고양이', 'cat')], ['egg', 'apple'], { d: 0.2 }),
                FP('d로 시작하는 낱말 카드만 뒤집어 보세요.', [W('dog', '개', 'dog'), W('fish', '물고기', 'fish2'), W('book', '책', 'book'), W('ball', '공', 'ball')], ['dog'], { d: 0.2 }),
                FP('s나 c로 시작하는 낱말 카드만 뒤집어 보세요.', [W('sun', '해', 'sun'), W('umbrella', '우산', 'umbrella'), W('egg', '달걀', 'egg'), W('cat', '고양이', 'cat')], ['sun', 'cat'], { d: 0.25,
                  p: ['낱말의 첫 글자는 어디서 볼까요?', ['낱말의 맨 왼쪽 글자예요', '낱말의 맨 오른쪽 글자예요'], 0, '낱말은 왼쪽에서 읽고 쓰므로 첫 글자는 맨 왼쪽에 있어요.'] }),
              ]),
            ACT('a2', '활동 2. 알파벳 카드로 낱말 만들기', 13, 'wordcards',
              '"그림을 보고 낱말 듣기 단추를 눌러 소리를 들어요. 들리는 소리 순서대로 알파벳 카드를 놓아요." 첫소리부터 한 글자씩 소리 내어 읽게 한다. 모양이 비슷한 글자(b·d, p·q)가 섞인 카드에서는 글자 이름을 말하게 한다. 소리가 나지 않을 때는 교사가 낱말을 천천히 읽어 준다. 알맞지 않은 카드는 쓰지 않는다고 일러 둔다.',
              '그림과 뜻을 보고 알파벳 카드를 차례대로 놓아 낱말을 만들어요.',
              LSP('낱말을 한 소리씩 끊어 읽으며 가장 먼저 들리는 소리의 글자부터 놓아 보세요.'),
              [
                SPL('고양이 그림을 보고 낱말을 만들어 보세요.', 'cat', '고양이', 'cat', ['b'], { d: 0.15 }),
                SPL('개 그림을 보고 낱말을 만들어 보세요.', 'dog', '개', 'dog', ['t'], { d: 0.2 }),
                SPL('해 그림을 보고 낱말을 만들어 보세요.', 'sun', '해', 'sun', ['m'], { d: 0.2,
                  p: ['낱말의 글자 순서를 바꾸면 어떻게 될까요?', ['다른 낱말이 되거나 뜻이 없어져요', '똑같은 낱말이에요'], 0, '글자 순서가 바뀌면 다른 낱말이 되거나 읽을 수 없어요. 왼쪽부터 차례로 놓아요.'] }),
                SPL('책 그림을 보고 낱말을 만들어 보세요.', 'book', '책', 'book', ['p'], { d: 0.3 }),
              ]),
          ),
          WRAP(7, '"오늘 만든 낱말 가운데 글자가 가장 많은 것은 무엇이었나요?" book을 말하는 학생에게 네 글자를 하나씩 읽게 하고 출구 질문을 푼다. 글자 카드 순서를 틀린 학생은 다음 시간 시작에 낱말을 천천히 읽으며 첫 글자부터 다시 놓는다.',
            [
              { type: 'tool', tool: 'wordcards', options: { mode: 'spell', word: 'egg', ko: '달걀', motif: 'egg', extra: ['a'] }, prompt: '달걀 그림을 보고 낱말을 만들어 보세요.', target: { spell: 'egg' }, difficulty: 0.2 },
              { type: 'choice', prompt: 'cat의 첫 글자는 무엇일까요?', options: ['t', 'c', 'a'], answer: 1, difficulty: 0.15, explain: 'cat은 왼쪽에서 읽으면 c가 첫 글자예요.' },
              MOOD('오늘 알파벳 카드로 낱말 만들기는 어땠나요?'),
            ]),
        ],
        worksheet: WS('그림 카드와 낱말', [
          { type: 'table', prompt: '그림 카드의 뜻을 보고 낱말의 첫 글자를 쓰세요.', columns: ['뜻', '첫 글자'], cells: [['고양이', ''], ['개', ''], ['해', ''], ['책', '']], answer: 'c, d, s, b' },
          { type: 'blank', prompt: '빈칸에 알맞은 글자를 쓰세요. (고양이)', text: 'c ___ t', answer: 'a' },
          { type: 'choice', prompt: 'book의 마지막 글자에 ○ 하세요.', options: ['b', 'o', 'k'], answer: 'k' },
          { type: 'short', prompt: '네 줄 공책에 dog 낱말을 두 번 쓰고 읽어 보세요.', answer: 'dog dog' },
        ], '낱말을 소리 내어 읽으며 첫소리를 먼저 찾고 빈칸의 글자를 정해요.', [
          { type: 'table', prompt: '그림 카드의 뜻을 보고 낱말의 첫 글자를 쓰세요.', columns: ['뜻', '첫 글자'], cells: [['고양이', ''], ['개', '']], answer: 'c, d' },
          { type: 'blank', prompt: '빈칸에 알맞은 글자를 쓰세요. (개)', text: 'd o ___', answer: 'g' },
          { type: 'choice', prompt: 'sun의 첫 글자에 ○ 하세요.', options: ['s', 'n'], answer: 's' },
          { type: 'short', prompt: '네 줄 공책에 cat을 한 번 써 보세요.' },
        ]),
        differentiation: DIFF(
          '뒤집기에서는 앞면에 영어 낱말이 보이고 카드가 줄어요. 낱말 만들기는 알파벳 카드를 맞게 놓으면 초록 테두리가 생겨요.',
          '그림과 뜻만 보고 카드를 뒤집거나 놓고 확인을 눌러 스스로 고쳐요.',
          '낱말 만들기에 섞이는 글자 카드가 모양이 닮아 헷갈리고, 낱말이 네 글자로 길어져요.'),
        teacherNotes: '자주 보이는 어려움: ① 낱말 글자를 오른쪽부터 놓는다 → 왼쪽에서 오른쪽으로 읽고 쓴다는 것을 손가락으로 짚게 한다. ② 소리를 하나씩 끊어 듣지 못한다 → 교사가 낱말을 세 박자로 끊어 읽어 준다(c-a-t). ③ 섞인 카드를 모두 쓰려 한다 → 낱말에 필요한 글자만 쓴다고 알려 준다. 소리는 누를 때만 나고, 소리가 없는 기기에서는 교사가 낱말을 읽어 준다.',
      }),

      // ───────────────────────── 7차시 (wrap) ─────────────────────────
      lesson(7, S2, {
        title: '글자 칸·획 차례·낱말 만들기로 단원 마무리하기',
        objective: '단원에서 배운 글자 칸, 대문자 획순, 낱말 만들기를 모아 스스로 점검하고, 쓸 때 조심할 점을 한 가지 말할 수 있다.',
        illustration: {
          prompt: PROMPT('a child holding a finished notebook page with neatly written letters and a small star sticker, while friends show their own pages'),
          scene: SC('write  well', '내가 쓴 글자 모으기', [{ motif: 'book', x: 88, y: 208, s: 0.9 }, { motif: 'star', x: 396, y: 84, s: 0.7 }, { motif: 'tree', x: 400, y: 216 }]),
        },
        stages: [
          INTRO(7, '지난 시간에 만든 낱말 카드를 보여 주며 "이번 단원에서 가장 어려웠던 글자는 무엇이었나요?"라고 묻는다. b와 d, 꼬리 있는 글자처럼 학생이 말한 글자를 칠판에 쓰고 어떻게 구별했는지 한 가지씩 말하게 한다. 어려운 점이 없다고 말하는 학생에게는 b·d·p·q 중 하나를 칠판에 쓰게 하여 직접 보게 한다.',
            '지금까지 배운 칸, 획, 낱말을 모아서 한 번 더 해 봐요. 가장 어려웠던 글자가 무엇인지 생각해 봐요.',
            { tool: 'wordcards', options: { mode: 'order', shuffle: false, cards: ABC('d', 'o', 'g') }, sequence: [{ at: {} }, { at: { d: 0, o: 1, g: 2 } }] }),
          MAIN(26,
            ACT('a1', '활동 1. 그림과 뜻을 보고 낱말 만들기', 13, 'wordcards',
              '"그림을 보고 낱말 듣기 단추를 누르거나 뜻을 읽은 뒤 알파벳 카드를 놓아요. 놓은 뒤 소리 내어 읽고 확인해 봐요." 모양이 닮은 글자(b·d, p·q)가 섞여 있을 때는 막대와 배의 위치를 말하며 놓게 한다. 낱말을 소리 내어 읽지 않고 카드를 아무렇게나 놓는 학생에게는 첫소리를 같이 읽어 준다.',
              '그림과 뜻을 보고 알파벳 카드를 차례대로 놓아 낱말을 만들어요.',
              LSP('낱말을 한 소리씩 끊어 읽으며 가장 먼저 들리는 소리의 글자부터 놓아 보세요.'),
              [
                SPL('돼지 뜻의 낱말을 만들어 보세요.', 'pig', '돼지', null, ['q'], { d: 0.2 }),
                SPL('모자 뜻의 낱말을 만들어 보세요.', 'hat', '모자', null, ['n'], { d: 0.2 }),
                SPL('펜 그림을 보고 낱말을 만들어 보세요.', 'pen', '펜', 'pencil', ['d'], { d: 0.25 }),
                SPL('물고기 그림을 보고 낱말을 만들어 보세요.', 'fish', '물고기', 'fish2', ['t'], { d: 0.3,
                  p: ['fish는 몇 글자일까요?', ['네 글자요', '세 글자요'], 0, 'f, i, s, h 네 글자예요. 한 글자씩 소리를 끊어 읽어 보면 알 수 있어요.'] }),
              ]),
            ACT('a2', '활동 2. 대문자 획 차례 마무리', 13, 'wordcards',
              '"이번에는 아직 써 보지 않은 대문자 E, A, I, N을 쓰는 차례를 생각해 봐요. 허공에 쓰고 놓아요." E의 세로선, A의 두 빗금과 가로선, N의 세로선 사이 빗금 같은 방향을 손으로 따라 하게 한다. 선을 한 번에 이어 쓰는 학생에게는 선마다 연필이 닿는 곳에 점을 찍어 보게 한다. 획순은 학급에서 정한 약속대로 고르도록 한다.',
              '획 카드를 대문자를 쓰는 차례대로 놓아요.',
              LA('order', '글자를 허공에 쓰는 동작을 해 보세요. 왼쪽에서 오른쪽으로, 위에서 아래로 가는 선부터 떠올려요.'),
              [
                OR('대문자 E를 쓰는 차례대로 획 카드를 놓아 보세요.', [ST('v', '세로선 │'), ST('t', '위 가로선 ─'), ST('m', '가운데 가로선 ─'), ST('b', '아래 가로선 ─')], ['v', 't', 'm', 'b'], { d: 0.25 }),
                OR('대문자 A를 쓰는 차례대로 획 카드를 놓아 보세요.', [ST('l', '왼쪽 빗금 ╱'), ST('r', '오른쪽 빗금 ╲'), ST('m', '가운데 가로선 ─')], ['l', 'r', 'm'], { d: 0.25 }),
                OR('대문자 I를 쓰는 차례대로 획 카드를 놓아 보세요.', [ST('t', '위쪽 가로선 ─'), ST('v', '가운데 세로선 │'), ST('b', '아래쪽 가로선 ─')], ['t', 'v', 'b'], { d: 0.2,
                  p: ['I는 선이 하나일까요?', ['위와 아래에 가로선을 더해 세 선이 돼요', '세로선 하나뿐이에요'], 0, '낱글자 I는 세로선만 쓰기도 해요. 여기서는 위아래 가로선까지 쓰는 모양으로 배워요.'] }),
                OR('대문자 N을 쓰는 차례대로 획 카드를 놓아 보세요.', [ST('l', '왼쪽 세로선 │'), ST('d', '빗금 ╲'), ST('r', '오른쪽 세로선 │')], ['l', 'd', 'r'], { d: 0.3 }),
              ]),
          ),
          WRAP(7, '"이번 단원에서 쓰기를 잘하기 위해 가장 조심할 점은 무엇이었나요?" 두세 명이 칸·획·방향 가운데 하나를 말하게 하고 출구 질문을 푼다. 마지막 활동지에서 자기가 쓴 글자 중 가장 마음에 드는 낱말 하나에 별을 붙이게 한다. 어려웠다고 답한 학생은 다음 시간에 b·d·p·q를 한 번 더 써 본다.',
            [
              { type: 'tool', tool: 'wordcards', options: { mode: 'order', shuffle: true, cards: [ST('l', '왼쪽 세로선 │'), ST('m', '가운데 빗금 ╲'), ST('r', '오른쪽 세로선 │')] }, prompt: 'N을 쓰는 차례대로 획 카드를 놓아 보세요.', target: { order: ['l', 'm', 'r'] }, difficulty: 0.3 },
              { type: 'choice', prompt: '영어 낱말은 어느 방향으로 쓸까요?', options: ['오른쪽에서 왼쪽으로', '왼쪽에서 오른쪽으로'], answer: 1, difficulty: 0.15, explain: '영어는 왼쪽에서 오른쪽으로 써요.' },
              MOOD('이번 단원에서 글자 쓰기는 어땠나요?'),
            ]),
        ],
        worksheet: WS('쓰기 단원 점검', [
          { type: 'table', prompt: '알맞은 칸에 ○ 하세요.', columns: ['글자', '위 칸', '가운데 칸', '아래 칸'], cells: [['d', '', '', ''], ['a', '', '', ''], ['p', '', '', ''], ['h', '', '', '']], answer: 'd 위, a 가운데, p 아래, h 위' },
          { type: 'check', prompt: '할 수 있는 것에 ✓ 하세요.', options: ['네 줄 공책에서 글자 칸을 나눌 수 있어요.', '대문자 T와 L을 쓰는 차례를 말할 수 있어요.', '알파벳 카드를 놓아 낱말을 만들 수 있어요.'], answer: '스스로 점검' },
          { type: 'blank', prompt: '빈칸에 알맞은 글자를 쓰세요. (물고기)', text: 'f i ___ h', answer: 's' },
          { type: 'short', prompt: '이번 단원에서 쓴 낱말 가운데 가장 마음에 드는 낱말을 네 줄 공책에 써 보세요.' },
        ], '글자를 허공에 쓴 뒤 칸에 따라 쓰며 막대와 꼬리가 닿는 줄을 확인해요.', [
          { type: 'table', prompt: '알맞은 칸에 ○ 하세요.', columns: ['글자', '위 칸', '가운데 칸', '아래 칸'], cells: [['b', '', '', ''], ['g', '', '', '']], answer: 'b 위, g 아래' },
          { type: 'check', prompt: '할 수 있는 것에 ✓ 하세요.', options: ['네 줄 공책에서 글자 칸을 나눌 수 있어요.', '카드를 놓아 낱말을 만들 수 있어요.'], answer: '스스로 점검' },
          { type: 'blank', prompt: '빈칸에 알맞은 글자를 쓰세요. (개)', text: 'd o ___', answer: 'g' },
          { type: 'short', prompt: '가장 마음에 드는 낱말을 네 줄 공책에 써 보세요.' },
        ]),
        differentiation: DIFF(
          '낱말 만들기에서 알파벳 카드를 맞게 놓으면 초록 테두리가 생겨요. 획 차례는 카드가 세 장으로 시작해요.',
          '카드를 모두 놓은 뒤 확인을 눌러 스스로 고쳐요. 놓은 뒤 소리 내어 읽어 보며 확인해요.',
          '낱말 만들기에 모양이 닮은 글자가 섞이고, 획 차례는 선이 네 개인 글자까지 나와요.'),
        teacherNotes: '자주 보이는 어려움: ① b·d·p·q를 여전히 바꾸어 쓴다 → "b는 배가 오른쪽, d는 배가 왼쪽"처럼 입으로 말하며 쓰게 한다. ② 획 카드를 놓을 때 직접 써 보지 않고 찍는다 → 허공에 쓴 뒤 놓게 한다. ③ 낱말을 만들고도 읽지 않는다 → 짝에게 읽어 주게 한다. 이 차시는 평가가 아니라 스스로 점검이므로 못 한 항목은 다음 시간에 한 번 더 써 보도록 한다.',
      }),

    ],
  });
})();
