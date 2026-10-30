/* 3학년 영어 1학기 2단원. 읽기 — 알파벳 이름과 순서(1~3차시) → 대문자·소문자 모양 짝 짓기(4~5차시) → 교실 글자에서 알파벳 찾기(6~7차시).
 * 낱말·표지 글은 모두 이 단원을 위해 새로 지은 것이다(교과서 지문·노래 가사를 옮기지 않았다). 알파벳 노래는 싣지 않았다.
 * 소리: '듣기' 단추가 있는 문항은 기기가 영어 음성(speechSynthesis)으로 **누를 때만** 읽는다(자동 재생 없음). 소리가 나지 않는 기기에서는
 * 교사가 문항 번호를 말하고 글자 이름을 직접 읽어 준다. 학생 화면 영어는 글자·낱말 한두 개로 짧게 두고 안내는 한국어로 쓴다.
 */
(function () {
  const UNIT = 'g3-eng-1-02';
  const CAT = 'g3-영어-1학기-2';
  const U = { grade: 3, subject: '영어', unitTitle: '2. 읽기' };
  const S2 = '[4영01-02]';
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
  const TX = (...ls) => ls.map((l) => C(l, l));          // 글자 이름이 글로 적힌 카드(빈칸 채우기용)

  PaperLessons.registerUnit({
    id: UNIT, schema: 'edu-unit.v1', catalogUnit: CAT,
    grade: 3, subject: '영어', unitTitle: '2. 읽기',
    flow: '단원은 "이름 → 순서 → 모양 → 쓰임" 순으로 알파벳 읽기를 넓힌다. 1~3차시는 듣기 단추로 글자 이름을 듣고 대문자 A부터 Z까지를 일곱 글자씩 끊어 순서대로 놓고, 빠진 글자를 채우며 알파벳의 차례를 몸에 익힌다. 4~5차시는 대문자와 소문자를 한 짝으로 묶는데, b·d·p·q처럼 뒤집으면 닮아 보이는 글자는 따로 모아 모양의 차이(둥근 배가 어느 쪽에 있는지)를 말로 설명하게 한다. 6~7차시는 교실 이름표와 표지 글자에서 아는 글자를 찾고, 낱말을 첫 글자로 모아 보고, 마지막 시간에 이름·순서·모양을 모두 써서 스스로 평가한다. 학생이 읽는 영어는 글자 하나나 낱말 하나로 짧게 하고, 쓰기는 이 단원에서 요구하지 않는다.',
    refs: {},
    lessons: [
      // ───────────────────────── 1차시 (intro) ─────────────────────────
      lesson(1, S2, {
        title: '듣기 단추로 알파벳 A부터 G까지 이름 찾기',
        objective: '알파벳 대문자 A부터 G까지 일곱 글자의 이름을 듣고 알맞은 글자 카드를 찾아, 차례대로 놓을 수 있다.',
        illustration: {
          prompt: PROMPT('a child pointing at big letter blocks A B C D E F G lined up on a shelf while a speaker button glows beside them'),
          scene: SC('A B C D E F G', '글자 이름 듣고 찾기', [{ motif: 'tree', x: 80, y: 214 }, { motif: 'house', x: 392, y: 218, color: 'sky' }, { motif: 'star', x: 250, y: 74, s: 0.6 }]),
        },
        stages: [
          INTRO(7, '칠판에 A B C D E F G를 크게 쓰고 "이 일곱 글자 가운데 내 이름에 들어 있는 글자가 있나요?"라고 묻는다. 손을 든 학생의 글자를 하나 짚고 "에이", "비"처럼 이름을 먼저 읽어 준 뒤 따라 말하게 한다. 글자를 소리 내어 읽지 않고 눈으로만 훑는 학생에게는 짚은 글자 아래에서 한 번 더 읽어 주며 이름과 모양을 같이 보게 한다. 그리고 듣기 단추는 누를 때만 소리가 난다고 알려 주고 기기 소리를 켜 보게 한다.',
            '내 이름에 들어 있는 글자가 칠판에 있나요? 글자의 이름을 하나씩 따라 말해 봐요.',
            { tool: 'wordcards', options: { mode: 'listen', basket: '들은 것', shuffle: false, say: 'Letter B.', cards: [BG('A'), BG('B')] }, sequence: [{ at: {} }, { at: { B: 0 } }] }),
          MAIN(26,
            ACT('a1', '활동 1. 듣기 단추를 누르고 글자 카드 고르기', 13, 'wordcards',
              '문항마다 듣기 단추를 한 번 누르게 하고, 소리가 나지 않으면 교사가 "문제 하나, 비."처럼 글자 이름을 읽어 준다. "소리를 들으면서 입 모양을 따라 해 보세요." 라고 말하고 B와 D, E와 F처럼 헷갈리는 글자는 두 카드의 모양 차이(둥근 배가 어느 쪽인지, 가로줄이 몇 개인지)를 먼저 말하게 한다. 소리만 듣고 아무 카드나 누르는 학생에게는 두 카드를 손가락으로 짚으며 이름을 하나씩 말해 보게 한다. 도전 단계는 카드가 세 장이라 모양이 닮은 글자가 더 섞여 있다.',
              '듣기 단추를 눌러 글자 이름을 듣고, 들은 글자 카드 하나를 바구니에 넣어요.',
              LA('listen', '글자 이름의 첫소리를 따라 말하며, 두 카드의 모양 차이를 하나씩 짚어 보세요.'),
              [
                LS('듣기 단추를 누르고, 들은 글자를 골라 보세요.', 'Letter B.', { cards: ABC('B', 'D') }, 'B', { x: [BG('E')] }),
                LS('듣기 단추를 누르고, 이번에 들은 글자를 골라 보세요.', 'Letter C.', { cards: ABC('C', 'G') }, 'C', { d: 0.2, x: [BG('A')] }),
                LS('듣기 단추를 누르고, 들은 글자가 무엇인지 골라 보세요.', 'Letter E.', { cards: ABC('E', 'F') }, 'E', { d: 0.2, x: [BG('B')],
                  p: ['E와 F는 어디가 다를까요?', ['E에는 가로줄이 세 개 있어요', 'F에는 가로줄이 세 개 있어요'], 0, 'E는 가로줄이 세 개, F는 두 개예요. 모양을 보면 이름이 떠올라요.'] }),
                LS('듣기 단추를 누르고, 들려오는 글자를 찾아 보세요.', 'Letter G.', { cards: ABC('G', 'C') }, 'G', { d: 0.25, x: [BG('D')] }),
              ]),
            ACT('a2', '활동 2. A부터 G까지 차례대로 놓기', 13, 'wordcards',
              '"A 다음에는 어느 글자가 올까요? 칸에 놓으며 이름을 소리 내어 말해 봐요." 한 장을 놓을 때마다 이름을 읽게 하고, 다 놓으면 처음부터 끝까지 한 번 읽는다. 순서를 외우지 못해 아무 글자나 놓는 학생에게는 칠판의 A B C D E F G 줄을 보며 한 칸씩 짚게 한다. 빈칸 채우기에서는 앞뒤 글자의 이름을 먼저 말한 뒤 사이에 들어갈 글자를 찾게 한다.',
              '글자 카드를 알파벳 차례대로 칸에 놓고, 놓을 때마다 글자 이름을 말해요.',
              LA('order', '앞 글자 다음에 오는 글자를 소리 내어 말해 보며 한 칸씩 놓아 보세요. 틀린 칸은 앞뒤 글자를 말해 보면 알 수 있어요.'),
              [
                OR('A, B, C, D 네 글자를 알파벳 차례대로 놓아 보세요.', ABC('A', 'B', 'C', 'D'), ['A', 'B', 'C', 'D'], { d: 0.1 }),
                OR('C부터 G까지 다섯 글자를 알파벳 차례대로 놓아 보세요.', ABC('C', 'D', 'E', 'F', 'G'), ['C', 'D', 'E', 'F', 'G'], { d: 0.2 }),
                FI('빈칸에 들어갈 글자를 골라 보세요. 앞뒤 글자를 소리 내어 읽어 봐요.', [{ id: 'f1', label: 'A, B, ___, D' }], TX('C', 'E', 'G'), { f1: 'C' }, { d: 0.2,
                  p: ['빠진 글자는 어떻게 찾을까요?', ['앞뒤 글자의 차례를 보면 돼요', '글자 모양이 예쁜 것으로 골라요'], 0, '알파벳은 차례가 정해져 있어서 앞뒤 글자를 알면 빠진 글자를 찾을 수 있어요.'] }),
                FI('빈칸에 알맞은 글자를 골라 보세요. 두 곳이 비어 있어요.', [{ id: 'f1', label: 'E, ___, G' }, { id: 'f2', label: 'B, C, ___' }], TX('F', 'D', 'A'), { f1: 'F', f2: 'D' }, { d: 0.3 }),
              ]),
          ),
          WRAP(7, '"오늘 이름을 새로 알게 된 글자는 무엇인가요?" 두세 명이 글자 이름을 말하게 한 뒤 출구 질문을 푼다. B와 D를 바꾸어 고른 학생은 다음 시간 시작에 두 글자의 둥근 배가 어느 쪽에 있는지 손가락으로 그려 말해 보게 한다.',
            [
              { type: 'tool', tool: 'wordcards', options: { mode: 'listen', basket: '들은 것', shuffle: false, say: 'Letter F.', cards: [BG('F'), BG('E')] }, prompt: '듣기 단추를 누르고, 들은 글자를 골라 보세요.', target: { listen: 'F' }, difficulty: 0.15 },
              { type: 'choice', prompt: 'E 다음에 오는 글자는 무엇일까요?', options: ['D', 'F', 'G'], answer: 1, difficulty: 0.15, explain: 'A B C D E F G 차례예요. E 바로 다음은 F예요.' },
              MOOD('오늘 글자 이름 듣고 찾기는 어땠나요?'),
            ]),
        ],
        worksheet: WS('알파벳 A부터 G까지', [
          { type: 'table', prompt: '선생님이 읽어 주는 글자 이름을 듣고 알맞은 글자에 ○ 하세요.', columns: ['번호', '들은 글자'], cells: [['1', 'B  D'], ['2', 'C  G'], ['3', 'E  F'], ['4', 'A  G']], answer: '교사 읽기 예: 1 B / 2 C / 3 E / 4 A' },
          { type: 'blank', prompt: '빈칸에 알맞은 글자를 쓰세요.', text: 'A, B, ___, D, E, ___, G', answer: 'C, F' },
          { type: 'choice', prompt: 'C 다음에 오는 글자에 ○ 하세요.', options: ['B', 'D', 'G'], answer: 'D' },
          { type: 'short', prompt: '내 이름에서 A~G에 들어 있는 글자를 하나 찾아 써 보세요.' },
        ], '카드를 하나씩 소리 내어 읽으며 글자 이름을 먼저 말한 뒤 차례를 찾아요.', [
          { type: 'table', prompt: '선생님이 읽어 주는 글자 이름을 듣고 알맞은 글자에 ○ 하세요.', columns: ['번호', '들은 글자'], cells: [['1', 'B  D'], ['2', 'C  G']], answer: '교사 읽기 예: 1 B / 2 C' },
          { type: 'blank', prompt: '빈칸에 알맞은 글자를 쓰세요.', text: 'A, B, ___, D', answer: 'C' },
          { type: 'choice', prompt: 'A 다음에 오는 글자에 ○ 하세요.', options: ['B', 'C'], answer: 'B' },
          { type: 'short', prompt: '알고 있는 글자 하나를 쓰고 이름을 말해 보세요.' },
        ]),
        differentiation: DIFF(
          '글자 고르기에서 카드가 두 장으로 줄고, 맞게 놓으면 초록 테두리가 생기며 틀리게 놓으면 카드가 되돌아와요.',
          '글자 이름을 듣고 카드를 골라요. 차례 놓기는 다 놓은 뒤 확인을 눌러 스스로 고쳐요.',
          '글자 고르기에 모양이 닮은 카드(E·A·B·D)가 한 장 더 섞여 나와요.'),
        teacherNotes: '자주 보이는 어려움: ① B와 D, E와 F를 바꾸어 고른다 → 둥근 배의 방향과 가로줄 수를 말로 설명하게 한다. ② 글자를 하나씩 읽을 때는 맞지만 차례는 모른다 → 칠판 줄을 손가락으로 따라가며 앞뒤 글자를 말하게 한다. ③ 소리 단추의 영어 소리가 너무 빠르다고 느낀다 → 교사가 입 모양을 보여 주며 한 번 더 읽는다. 알파벳 노래는 쓰지 않고 짧은 줄 읽기로 대신한다.',
      }),

      // ───────────────────────── 2차시 (practice) ─────────────────────────
      lesson(2, S2, {
        title: 'H부터 N까지 소리 듣고 바로 다음 글자 이어 놓기',
        objective: '알파벳 H부터 N까지의 이름을 듣고 글자를 고르며, 앞 글자 바로 다음에 오는 글자를 찾아 차례대로 놓을 수 있다.',
        illustration: {
          prompt: PROMPT('seven big letter blocks H I J K L M N climbing like stairs up a hill, with a child stepping from one block to the next'),
          scene: SC('H I J K L M N', '다음 글자는 무엇일까요?', [{ motif: 'mountain', x: 84, y: 214 }, { motif: 'tree', x: 404, y: 214 }, { motif: 'bird', x: 250, y: 72 }]),
        },
        stages: [
          INTRO(6, '칠판에 A부터 G까지 쓰고 "어제 배운 일곱 글자를 손가락으로 짚으며 이름을 말해 볼까요?"라고 묻는다. 모두 읽은 뒤 G 오른쪽에 빈 줄을 길게 그어 "G 다음에는 어떤 글자가 올까요?"라고 묻고 H를 쓴다. 이어 "오늘은 H부터 N까지예요."라고 말한다. 어제 글자를 다 외웠다고 서두르는 학생에게는 A, C, E처럼 건너뛰어 짚어 이름을 말하게 해서 차례와 이름이 모두 익었는지 살핀다.',
            'A부터 G까지 손가락으로 짚으며 이름을 말해 봐요. G 다음 글자는 무엇일까요?',
            { tool: 'wordcards', options: { mode: 'order', shuffle: true, cards: ABC('H', 'I', 'J') }, sequence: [{ at: {} }, { at: { H: 0, I: 1, J: 2 } }] }),
          MAIN(27,
            ACT('a1', '활동 1. 듣기 단추로 비슷한 모양의 글자 가려내기', 12, 'wordcards',
              '"I와 J, H와 N은 모양이 비슷해요. 소리를 들은 뒤 모양도 같이 살펴요." 문항마다 듣기 단추를 한 번 누르게 하고 소리가 나지 않으면 교사가 글자 이름을 읽어 준다. 모양만 보고 고르는 학생에게는 이름을 소리 내어 말한 뒤 카드를 고르게 한다. 도전 단계는 모양이 닮은 세 번째 카드가 한 장 더 있으니 끝까지 듣고 고르게 한다.',
              '듣기 단추를 눌러 글자 이름을 듣고, 들은 글자 카드 하나를 바구니에 넣어요.',
              LA('listen', '이름을 소리 내어 말한 뒤 두 카드의 모양을 하나씩 견주어 보세요. 세로줄이 몇 개인지도 봐요.'),
              [
                LS('듣기 단추를 누르고, 들은 글자를 골라 보세요.', 'Letter H.', { cards: ABC('H', 'N') }, 'H', { x: [BG('M')] }),
                LS('듣기 단추를 누르고, 이번에 들은 글자를 골라 보세요.', 'Letter K.', { cards: ABC('K', 'H') }, 'K', { d: 0.2, x: [BG('N')] }),
                LS('듣기 단추를 누르고, 들려준 글자가 무엇인지 찾아 보세요.', 'Letter M.', { cards: ABC('M', 'N') }, 'M', { d: 0.2, x: [BG('H')],
                  p: ['M과 N은 무엇이 다를까요?', ['M은 위쪽 뾰족이 두 개예요', 'N은 위쪽 뾰족이 두 개예요'], 0, 'M은 뾰족한 곳이 두 개, N은 한 개예요. 이름과 모양을 같이 기억해요.'] }),
                LS('듣기 단추를 누르고, 소리와 같은 글자 카드를 찾아 보세요.', 'Letter J.', { cards: ABC('J', 'I') }, 'J', { d: 0.25, x: [BG('L')] }),
              ]),
            ACT('a2', '활동 2. 바로 다음 글자 찾아 이어 놓기', 15, 'wordcards',
              '"앞 글자의 이름을 먼저 말하고, 바로 다음 글자를 찾아요." 한 칸을 채울 때마다 두 글자를 이어서 읽게 한다(H, I). 순서 놓기에서 한 글자를 건너뛰는 학생에게는 칠판 줄에서 두 글자 사이를 손가락으로 짚어 보게 한다. 짝 활동으로 한 사람이 글자 하나를 말하면 다른 사람이 그 다음 글자를 말해 본다.',
              '글자 카드를 알파벳 차례대로 놓거나, 빈칸에 알맞은 글자를 골라 넣어요.',
              LA('order', '앞 글자의 이름을 말하고 바로 다음 글자를 떠올려 보세요. 틀린 칸은 앞뒤 글자를 이어 읽어 보면 알아요.'),
              [
                OR('H, I, J, K 네 글자를 알파벳 차례대로 놓아 보세요.', ABC('H', 'I', 'J', 'K'), ['H', 'I', 'J', 'K'], { d: 0.15 }),
                OR('J부터 N까지 다섯 글자를 알파벳 차례대로 놓아 보세요.', ABC('J', 'K', 'L', 'M', 'N'), ['J', 'K', 'L', 'M', 'N'], { d: 0.25 }),
                MT('앞 글자 바로 다음에 오는 글자 카드를 짝 지어 보세요.', [{ id: 'h', label: 'H 다음' }, { id: 'i', label: 'I 다음' }, { id: 'k', label: 'K 다음' }], ABC('I', 'J', 'L'), { h: 'I', i: 'J', k: 'L' }, { d: 0.25, x: [BG('M')],
                  p: ['글자의 다음 순서는 언제나 같을까요?', ['언제나 똑같아요', '친구마다 달라요'], 0, '알파벳 차례는 정해져 있어서 H 다음은 언제나 I예요.'] }),
                FI('빈칸에 알맞은 글자를 골라 보세요. 앞뒤 글자를 이어 읽어 봐요.', [{ id: 'f1', label: 'K, ___, M, N' }], TX('L', 'J', 'H'), { f1: 'L' }, { d: 0.25 }),
              ]),
          ),
          WRAP(7, '"H 다음 글자와 N 앞 글자를 소리 내어 말해 볼까요?" 두 명에게 말하게 한 뒤 출구 질문을 푼다. 순서 놓기에서 두 글자를 바꾸어 놓은 학생은 다음 시간에 두 글자 이름을 이어 읽으며 다시 놓아 보게 한다.',
            [
              { type: 'tool', tool: 'wordcards', options: { mode: 'listen', basket: '들은 것', shuffle: false, say: 'Letter L.', cards: [BG('L'), BG('I')] }, prompt: '듣기 단추를 누르고, 들은 글자를 골라 보세요.', target: { listen: 'L' }, difficulty: 0.15 },
              { type: 'choice', prompt: 'M 바로 앞에 오는 글자는 무엇일까요?', options: ['K', 'L', 'N'], answer: 1, difficulty: 0.2, explain: '...K L M N...이니까 M 바로 앞은 L이에요.' },
              MOOD('오늘 비슷한 글자를 가려 듣는 것은 어땠나요?'),
            ]),
        ],
        worksheet: WS('알파벳 H부터 N까지', [
          { type: 'table', prompt: '선생님이 읽어 주는 글자 이름을 듣고 알맞은 글자에 ○ 하세요.', columns: ['번호', '들은 글자'], cells: [['1', 'H  N'], ['2', 'I  J'], ['3', 'K  M'], ['4', 'L  I']], answer: '교사 읽기 예: 1 N / 2 J / 3 K / 4 L' },
          { type: 'blank', prompt: '빈칸에 알맞은 글자를 쓰세요.', text: 'H, ___, J, K, ___, M, N', answer: 'I, L' },
          { type: 'choice', prompt: 'J 바로 다음에 오는 글자에 ○ 하세요.', options: ['I', 'K', 'M'], answer: 'K' },
          { type: 'short', prompt: 'N 바로 앞에 오는 글자를 쓰세요.', answer: 'M' },
        ], '글자 이름을 먼저 소리 내어 말하고, 앞뒤 글자를 이어 읽으며 풀어요.', [
          { type: 'table', prompt: '선생님이 읽어 주는 글자 이름을 듣고 알맞은 글자에 ○ 하세요.', columns: ['번호', '들은 글자'], cells: [['1', 'H  N'], ['2', 'I  J']], answer: '교사 읽기 예: 1 N / 2 J' },
          { type: 'blank', prompt: '빈칸에 알맞은 글자를 쓰세요.', text: 'H, ___, J', answer: 'I' },
          { type: 'choice', prompt: 'K 바로 다음에 오는 글자에 ○ 하세요.', options: ['L', 'N'], answer: 'L' },
          { type: 'short', prompt: '오늘 새로 알게 된 글자 하나를 써 보세요.' },
        ]),
        differentiation: DIFF(
          '글자 고르기에서 카드가 두 장이고, 맞게 놓으면 초록 테두리가 생기며 틀리게 놓으면 카드가 되돌아와요.',
          '소리를 듣고 카드를 고르고, 다 놓은 뒤 확인을 눌러 스스로 고쳐요.',
          '글자 고르기와 다음 글자 짝 짓기에 모양이 닮은 카드(M·H·N·L)가 한 장 더 섞여 나와요.'),
        teacherNotes: '자주 보이는 어려움: ① I와 L, M과 N처럼 줄 모양이 비슷한 글자를 바꾼다 → 세로줄·뾰족이 수를 말로 비교한다. ② 앞 글자가 아닌 뒤 글자를 찾는다 → "H 다음"이 오른쪽 방향임을 칠판 줄에 화살표로 보여 준다. ③ 한 글자를 건너뛰고 놓는다 → 놓은 글자를 이어 소리 내어 읽으며 빠진 곳을 스스로 찾게 한다.',
      }),

      // ───────────────────────── 3차시 (extend) ─────────────────────────
      lesson(3, S2, {
        title: 'O부터 Z까지 이름 듣고 알파벳 앞쪽·뒤쪽 가르기',
        objective: 'O부터 Z까지의 글자 이름을 듣고 고르며, 알파벳 스물여섯 글자를 앞쪽(A~M)과 뒤쪽(N~Z)으로 나누고 빠진 글자를 찾을 수 있다.',
        illustration: {
          prompt: PROMPT('a long rope of letter flags from A to Z hanging across a classroom with a child pointing at the middle where the letters split in two groups'),
          scene: SC('A ... M | N ... Z', '앞쪽과 뒤쪽으로 나누기', [{ motif: 'house', x: 86, y: 218, color: 'sky' }, { motif: 'tree', x: 404, y: 214 }, { motif: 'star', x: 252, y: 72, s: 0.6 }]),
        },
        stages: [
          INTRO(6, '칠판에 A부터 Z까지 두 줄로 쓰되 한 줄은 A~M, 다른 줄은 N~Z로 쓴다. "알파벳은 모두 스물여섯 글자예요. 가운데에서 두 줄로 나누면 어느 줄에 내 이름 첫 글자가 있을까요?"라고 묻고 손을 들게 한다. 첫 글자가 있는 줄을 손으로 짚어 읽어 보게 한다. 알파벳이 한 줄이라고만 알고 있던 학생에게는 두 줄이 이어진 한 줄임을 화살표로 보여 준다.',
            '알파벳은 모두 스물여섯 글자예요. 내 이름 첫 글자는 앞쪽 줄에 있을까요, 뒤쪽 줄에 있을까요?',
            { tool: 'wordcards', options: { mode: 'sort', shuffle: false, slots: [{ id: 'front', label: '앞쪽 A~M' }, { id: 'back', label: '뒤쪽 N~Z' }], cards: ABC('C', 'T') }, sequence: [{ at: {} }, { at: { C: 0, T: 1 } }] }),
          MAIN(27,
            ACT('a1', '활동 1. 듣기 단추로 뒤쪽 글자 이름 찾기', 12, 'wordcards',
              '"뒤쪽 글자는 이름이 조금 낯설어요. 듣기 단추를 누르고 입 모양을 따라 해 봐요." 문항마다 단추를 한 번 누르게 하고 소리가 나지 않으면 교사가 글자 이름을 읽어 준다. 두 글자를 바꾸어 고르는 학생에게는 이름을 소리 내어 말한 뒤 모양을 견주게 한다. 도전 단계는 모양이 닮은 글자가 한 장 더 섞여 있다.',
              '듣기 단추를 눌러 글자 이름을 듣고, 들은 글자 카드 하나를 바구니에 넣어요.',
              LA('listen', '이름을 소리 내어 말한 뒤 카드를 하나씩 읽어 보며 이름이 같은 카드를 찾아요.'),
              [
                LS('듣기 단추를 누르고, 들은 글자를 골라 보세요.', 'Letter P.', { cards: ABC('P', 'Q') }, 'P', { x: [BG('R')] }),
                LS('듣기 단추를 누르고, 이번에 들은 글자를 골라 보세요.', 'Letter S.', { cards: ABC('S', 'Z') }, 'S', { d: 0.2, x: [BG('X')] }),
                LS('듣기 단추를 누르고, 들려준 글자가 무엇인지 찾아 보세요.', 'Letter W.', { cards: ABC('W', 'V') }, 'W', { d: 0.25, x: [BG('U')],
                  p: ['W의 이름에서 소리는 몇 번 날까요?', ['세 번 정도 길게 나요', '한 번만 짧게 나요'], 0, 'W는 이름이 길어서 "더블유" 하고 세 마디로 들려요. 이름이 길수록 글자 이름을 먼저 외우면 도움이 돼요.'] }),
                LS('듣기 단추를 누르고, 소리와 같은 글자 카드를 찾아 보세요.', 'Letter R.', { cards: ABC('R', 'P') }, 'R', { d: 0.25, x: [BG('B')] }),
              ]),
            ACT('a2', '활동 2. 앞쪽·뒤쪽으로 가르고 빠진 글자 찾기', 15, 'wordcards',
              '"A부터 M까지는 앞쪽, N부터 Z까지는 뒤쪽이에요. 글자 이름을 말하고 칸에 놓아 봐요." 놓을 때마다 칠판 두 줄에서 그 글자를 손으로 짚게 한다. 세 번째 글자(M과 N 사이)를 헷갈리는 학생에게는 M이 앞쪽의 마지막, N이 뒤쪽의 첫 글자라는 것을 짚어 말하게 한다. 빈칸 채우기에서는 앞뒤 글자를 먼저 말한다.',
              '글자 카드를 앞쪽 칸이나 뒤쪽 칸에 놓고, 빈칸에는 알맞은 글자를 골라 넣어요.',
              LA('sort', '칠판의 두 줄을 떠올리며 M까지는 앞쪽, N부터는 뒤쪽이라는 것을 생각해 보세요.'),
              [
                SO('글자 카드 네 장을 앞쪽과 뒤쪽으로 나누어 보세요.', [{ id: 'front', label: '앞쪽 A~M' }, { id: 'back', label: '뒤쪽 N~Z' }], ABC('B', 'T', 'H', 'W'), { front: ['B', 'H'], back: ['T', 'W'] }, { d: 0.15 }),
                SO('이번에는 글자 카드 여섯 장을 앞쪽과 뒤쪽으로 나누어 보세요.', [{ id: 'front', label: '앞쪽 A~M' }, { id: 'back', label: '뒤쪽 N~Z' }], ABC('D', 'S', 'M', 'N', 'Y', 'F'), { front: ['D', 'M', 'F'], back: ['S', 'N', 'Y'] }, { d: 0.3,
                  p: ['M은 앞쪽일까요, 뒤쪽일까요?', ['앞쪽의 마지막 글자예요', '뒤쪽의 첫 글자예요'], 0, 'M은 앞쪽의 마지막, N은 뒤쪽의 첫 글자예요.'] }),
                OR('O부터 S까지 다섯 글자를 알파벳 차례대로 놓아 보세요.', ABC('O', 'P', 'Q', 'R', 'S'), ['O', 'P', 'Q', 'R', 'S'], { d: 0.25 }),
                FI('빈칸에 알맞은 글자를 골라 보세요. 두 곳이 비어 있어요.', [{ id: 'f1', label: 'T, ___, V' }, { id: 'f2', label: 'X, Y, ___' }], TX('U', 'Z', 'W'), { f1: 'U', f2: 'Z' }, { d: 0.3 }),
              ]),
          ),
          WRAP(7, '"알파벳 스물여섯 글자는 어디에서 앞쪽과 뒤쪽으로 나뉘나요?" M과 N 사이라는 대답을 칠판에 그림으로 보이고 출구 질문을 푼다. 앞뒤 구분을 틀린 학생은 다음 시간에 자기 이름 첫 글자가 어느 쪽인지 칠판 줄에서 찾아 말해 보게 한다.',
            [
              { type: 'tool', tool: 'wordcards', options: { mode: 'sort', shuffle: false, slots: [{ id: 'front', label: '앞쪽 A~M' }, { id: 'back', label: '뒤쪽 N~Z' }], cards: ABC('G', 'U', 'K') }, prompt: '글자 카드 세 장을 앞쪽과 뒤쪽으로 나누어 보세요.', target: { sort: { front: ['G', 'K'], back: ['U'] } }, difficulty: 0.2 },
              { type: 'choice', prompt: '알파벳의 마지막 글자는 무엇일까요?', options: ['X', 'Z', 'M'], answer: 1, difficulty: 0.1, explain: 'A로 시작해서 Z로 끝나요. 모두 스물여섯 글자예요.' },
              MOOD('오늘 알파벳 전체를 살펴본 느낌은 어땠나요?'),
            ]),
        ],
        worksheet: WS('알파벳 앞쪽과 뒤쪽', [
          { type: 'table', prompt: '선생님이 읽어 주는 글자 이름을 듣고 알맞은 글자에 ○ 하세요.', columns: ['번호', '들은 글자'], cells: [['1', 'P  Q'], ['2', 'S  Z'], ['3', 'W  V'], ['4', 'R  B']], answer: '교사 읽기 예: 1 P / 2 S / 3 W / 4 R' },
          { type: 'blank', prompt: '빈칸에 알맞은 글자를 쓰세요.', text: 'O, P, ___, R, ___, T', answer: 'Q, S' },
          { type: 'check', prompt: '알파벳 앞쪽(A~M)에 있는 글자에 ✓ 하세요.', options: ['C', 'T', 'L', 'Y'], answer: 'C, L' },
          { type: 'short', prompt: '알파벳의 마지막 글자와 첫 글자를 차례로 쓰세요.', answer: 'Z, A' },
        ], '글자 이름을 먼저 소리 내어 말한 뒤, 칠판의 두 줄을 떠올리며 풀어요.', [
          { type: 'table', prompt: '선생님이 읽어 주는 글자 이름을 듣고 알맞은 글자에 ○ 하세요.', columns: ['번호', '들은 글자'], cells: [['1', 'P  Q'], ['2', 'S  Z']], answer: '교사 읽기 예: 1 P / 2 S' },
          { type: 'blank', prompt: '빈칸에 알맞은 글자를 쓰세요.', text: 'O, P, ___', answer: 'Q' },
          { type: 'choice', prompt: '알파벳의 마지막 글자에 ○ 하세요.', options: ['A', 'Z'], answer: 'Z' },
          { type: 'short', prompt: '이름의 첫 글자를 쓰고 앞쪽인지 뒤쪽인지 말해 보세요.' },
        ]),
        differentiation: DIFF(
          '글자 가르기에서 맞게 놓으면 초록 테두리가 생기고 틀리게 놓으면 카드가 되돌아와요. 소리 고르기는 카드가 두 장이에요.',
          '소리를 듣고 카드를 고르고, 앞쪽·뒤쪽 가르기는 다 놓은 뒤 확인을 눌러 스스로 고쳐요.',
          '글자 고르기에 모양이 닮은 카드(R·X·U·B)가 한 장 더 섞여 나와요.'),
        teacherNotes: '자주 보이는 어려움: ① M과 N의 경계를 헷갈린다 → 칠판 두 줄 사이에 선을 긋고 M은 왼쪽, N은 오른쪽이라고 말하게 한다. ② W·Y·Z의 이름을 낯설어한다 → 이름을 여러 번 소리 내어 따라 하게 한다. ③ 전체 순서를 한꺼번에 외우려 한다 → 일곱 글자씩 끊어 읽는 것이 쉽다고 알려 준다. 알파벳 노래는 쓰지 않는다.',
      }),

      // ───────────────────────── 4차시 (core) ─────────────────────────
      lesson(4, S2, {
        title: '대문자 A~F에 어울리는 소문자 짝 찾기',
        objective: '대문자 A부터 F까지에 알맞은 소문자 카드를 짝 짓고, 소문자가 줄 위로 키가 큰 글자인지 작은 글자인지 모양으로 구별할 수 있다.',
        illustration: {
          prompt: PROMPT('big letter blocks A B C D E F each standing beside a smaller lowercase partner block a b c d e f like parent and child'),
          scene: SC('A a  B b  C c', '큰 글자와 작은 글자 짝', [{ motif: 'flower', x: 84, y: 216 }, { motif: 'house', x: 396, y: 218, color: 'sky' }, { motif: 'bird', x: 250, y: 74 }]),
        },
        stages: [
          INTRO(7, '칠판에 A와 a를 나란히 쓰고 "이 두 글자는 이름이 같아요. 모양은 어떻게 다른가요?"라고 묻는다. "A는 크고 a는 작고 둥글어요."처럼 크기와 모양을 말하게 한 뒤 B와 b, C와 c를 차례로 보여 준다. 큰 글자를 줄여 쓰면 소문자가 된다고 생각하는 학생에게는 A와 a를 나란히 놓고 모양 자체가 다르다는 것을 손가락으로 선을 따라 그려 보여 준다.',
            '이름이 같은 짝 글자가 있어요. A와 a는 어디가 다른지 칠판에서 찾아봐요.',
            { tool: 'wordcards', options: { mode: 'match', shuffle: true, slots: ULS(['A', 'B']), cards: LCS(['A', 'B']) }, sequence: [{ at: {} }, { at: { a: 0, b: 1 } }] }),
          MAIN(26,
            ACT('a1', '활동 1. 대문자와 이름이 같은 소문자 짝 짓기', 13, 'wordcards',
              '"대문자 옆에 이름이 같은 소문자 카드를 놓아 봐요." 카드를 놓기 전에 짝 글자의 이름을 소리 내어 말하게 한다. B와 D를 바꾸어 놓는 학생에게는 둥근 배가 어느 쪽에 있는지 손가락으로 그려 말하게 한다. 도전 단계에는 짝이 없는 소문자 카드가 섞여 있으니 어느 대문자와도 짝이 안 되는 카드가 남아도 괜찮다고 알려 준다.',
              '대문자 칸 옆에 이름이 같은 소문자 카드를 하나씩 놓아요.',
              LA('match', '대문자의 이름을 말하고, 이름이 같은 소문자의 모양을 떠올려 보세요. 둥근 부분이 어느 쪽에 있는지도 살펴요.'),
              [
                UM('대문자 A, B, C와 이름이 같은 소문자 카드를 놓아 보세요.', ['A', 'B', 'C'], { d: 0.1 }),
                UM('대문자 D, E, F와 이름이 같은 소문자 카드를 놓아 보세요.', ['D', 'E', 'F'], { d: 0.15 }),
                UM('대문자 B, D, F와 이름이 같은 소문자 카드를 놓아 보세요. 둥근 배가 어느 쪽인지 봐요.', ['B', 'D', 'F'], { d: 0.25,
                  p: ['b와 d는 둥근 배가 어느 쪽에 있을까요?', ['b는 오른쪽, d는 왼쪽', 'b는 왼쪽, d는 오른쪽'], 0, 'b는 막대 오른쪽에, d는 막대 왼쪽에 둥근 배가 있어요.'] }),
                UM('대문자 C, E, A와 이름이 같은 소문자 카드를 놓아 보세요.', ['C', 'E', 'A'], { d: 0.2 }),
              ]),
            ACT('a2', '활동 2. 줄 위로 키가 큰 소문자 가려내기', 13, 'wordcards',
              '"소문자는 줄 위로 쑥 올라가는 글자와 줄 안에 머무는 글자가 있어요. b, d, f는 올라가요." 카드를 놓기 전에 손가락으로 허공에 글자를 한 번 써 보게 한다. 모양을 외우지 않고 이름으로만 고르려는 학생에게는 칠판에 네 줄을 그려 글자의 위치를 짚어 보게 한다. 마지막 문항은 소리로 이름을 듣고 소문자 짝을 찾는다.',
              '소문자 카드를 키가 큰 글자 칸과 작은 글자 칸으로 나누어 놓아요.',
              LA('sort', '글자의 윗부분이 줄 위로 쑥 올라가는지, 작게 줄 안에만 있는지 허공에 써 보며 가려요.'),
              [
                SO('소문자 카드 세 장을 키가 큰 글자와 작은 글자로 나누어 보세요.', [{ id: 'tall', label: '키가 큰 글자' }, { id: 'small', label: '작은 글자' }], ABC('a', 'b', 'c'), { tall: ['b'], small: ['a', 'c'] }, { d: 0.15 }),
                SO('소문자 카드 네 장을 키가 큰 글자와 작은 글자로 나누어 보세요.', [{ id: 'tall', label: '키가 큰 글자' }, { id: 'small', label: '작은 글자' }], ABC('d', 'e', 'a', 'f'), { tall: ['d', 'f'], small: ['e', 'a'] }, { d: 0.2 }),
                SO('소문자 여섯 장을 키가 큰 글자와 작은 글자로 나누어 보세요.', [{ id: 'tall', label: '키가 큰 글자' }, { id: 'small', label: '작은 글자' }], ABC('f', 'c', 'e', 'b', 'd', 'a'), { tall: ['f', 'b', 'd'], small: ['c', 'e', 'a'] }, { d: 0.3,
                  p: ['a부터 f까지 키가 큰 소문자는 몇 개일까요?', ['세 개예요', '여섯 개 모두예요'], 0, 'b, d, f 세 글자가 줄 위로 올라가고 a, c, e는 작아요.'] }),
                LS('듣기 단추를 누르고, 들은 글자의 소문자 카드를 골라 보세요.', 'Letter D.', { cards: ABC('d', 'b') }, 'd', { d: 0.25 }),
              ]),
          ),
          WRAP(7, '"대문자 B의 짝 소문자와 D의 짝 소문자는 어떻게 구별했나요?" 둥근 배의 방향으로 말하는 학생의 말을 칠판에 그림으로 옮기고 출구 질문을 푼다. b와 d를 바꾼 학생은 다음 시간 시작에 막대 옆에 배를 직접 그려 보게 한다.',
            [
              { type: 'tool', tool: 'wordcards', options: { mode: 'match', shuffle: true, slots: ULS(['F', 'C']), cards: LCS(['F', 'C']) }, prompt: '대문자 옆에 이름이 같은 소문자 카드를 놓아 보세요.', target: { match: { F: 'f', C: 'c' } }, difficulty: 0.15 },
              { type: 'choice', prompt: '키가 큰 소문자는 무엇일까요?', options: ['a', 'd', 'e'], answer: 1, difficulty: 0.15, explain: 'd는 막대가 줄 위로 올라가요. a와 e는 작은 글자예요.' },
              MOOD('오늘 대문자와 소문자 짝 찾기는 어땠나요?'),
            ]),
        ],
        worksheet: WS('대문자와 소문자 A~F', [
          { type: 'table', prompt: '대문자와 이름이 같은 소문자를 따라 쓰세요.', columns: ['대문자', '소문자'], cells: [['A', ''], ['B', ''], ['D', ''], ['F', '']], answer: 'a, b, d, f' },
          FIG('대문자 옆에 이름이 같은 소문자 카드를 이으세요.', { mode: 'match', shuffle: true, slots: ULS(['C', 'E']), cards: LCS(['C', 'E']) }, 'C — c / E — e'),
          { type: 'check', prompt: '키가 큰 소문자에 ✓ 하세요.', options: ['b', 'c', 'd', 'e'], answer: 'b, d' },
          { type: 'choice', prompt: '대문자 D와 이름이 같은 소문자에 ○ 하세요.', options: ['b', 'd', 'p'], answer: 'd' },
        ], '대문자의 이름을 소리 내어 말한 뒤 짝 글자의 모양을 허공에 써 보며 찾아요.', [
          { type: 'table', prompt: '대문자와 이름이 같은 소문자를 따라 쓰세요.', columns: ['대문자', '소문자'], cells: [['A', ''], ['B', '']], answer: 'a, b' },
          { type: 'check', prompt: '키가 큰 소문자에 ✓ 하세요.', options: ['b', 'c'], answer: 'b' },
          { type: 'choice', prompt: '대문자 C와 이름이 같은 소문자에 ○ 하세요.', options: ['c', 'e'], answer: 'c' },
          { type: 'short', prompt: '내가 좋아하는 소문자 하나를 써 보세요.' },
        ]),
        differentiation: DIFF(
          '짝 짓기에서 카드가 두 장으로 줄고, 맞게 놓으면 초록 테두리가 생기며 틀리게 놓으면 카드가 되돌아와요.',
          '대문자 칸 세 개에 소문자 카드를 모두 놓은 뒤 확인을 눌러 스스로 고쳐요.',
          '짝 짓기에 어느 대문자와도 맞지 않는 소문자 카드(d·e·b 가운데 하나)가 한 장 섞여 나와요.'),
        teacherNotes: '자주 보이는 어려움: ① b와 d를 바꾼다 → 막대 옆 배의 방향을 손가락으로 따라 그리며 말하게 한다. ② 소문자를 대문자의 작은 모양으로만 생각한다 → A와 a, E와 e처럼 모양이 다른 글자를 보여 준다. ③ 글자 이름 없이 모양만 외운다 → 짝을 놓을 때 이름을 먼저 말하게 한다. 쓰기는 따라 쓰기 정도로만 하고 평가하지 않는다.',
      }),

      // ───────────────────────── 5차시 (practice) ─────────────────────────
      lesson(5, S2, {
        title: '줄 아래로 꼬리가 내려가는 소문자 g·j·p·q 가려내기',
        objective: '대문자 G부터 Q까지의 일부 글자에 맞는 소문자를 짝 짓고, 소문자를 줄 아래로 꼬리가 내려가는 글자와 줄 위에 서 있는 글자로 구별할 수 있다.',
        illustration: {
          prompt: PROMPT('lowercase letters g j p q hanging below a notebook line with little tails while h k m n stand on top of the line'),
          scene: SC('g  j  p  q', '꼬리가 줄 아래로!', [{ motif: 'wave', x: 120, y: 224 }, { motif: 'tree', x: 404, y: 214 }, { motif: 'star', x: 250, y: 72, s: 0.6 }]),
        },
        stages: [
          INTRO(6, '공책 줄 네 칸을 칠판에 그리고 h를 줄 위에 서게, g를 줄 아래로 꼬리를 내려 그린다. "두 글자는 줄에서 어디가 다른가요?"라고 묻고 g의 꼬리를 가리킨다. "꼬리가 있는 글자는 g만일까요, 더 있을까요?"라고 질문한 뒤 j, p, q를 차례로 쓴다. 꼬리가 있으면 글자 이름이 같아진다고 말하는 학생에게는 g와 q를 나란히 쓰고 둥근 부분과 막대의 방향이 다르다는 것을 짚어 준다.',
            '글자 중에는 줄 아래로 꼬리가 내려가는 것이 있어요. 어떤 글자일지 칠판을 보며 찾아봐요.',
            { tool: 'wordcards', options: { mode: 'sort', shuffle: false, slots: [{ id: 'tail', label: '꼬리가 있어요' }, { id: 'line', label: '줄 위에 서 있어요' }], cards: ABC('g', 'h') }, sequence: [{ at: {} }, { at: { g: 0, h: 1 } }] }),
          MAIN(27,
            ACT('a1', '활동 1. 대문자와 이름이 같은 소문자 짝 짓기', 13, 'wordcards',
              '"G, H, J처럼 처음 보는 소문자도 있어요. 대문자 이름을 말하고 짝을 찾아요." 카드를 놓기 전에 대문자의 이름을 소리 내어 말하게 한다. G와 Q를 바꾸어 놓는 학생에게는 두 소문자의 막대 방향을 비교하게 한다. 도전 단계는 짝이 없는 소문자 카드 한 장이 섞여 있으니 남아도 괜찮다고 알려 준다.',
              '대문자 칸 옆에 이름이 같은 소문자 카드를 하나씩 놓아요.',
              LA('match', '대문자의 이름을 말하고, 이름이 같은 소문자의 모양을 떠올려 보세요. 꼬리가 있는지, 점이 있는지 살펴요.'),
              [
                UM('대문자 G, H, J와 이름이 같은 소문자 카드를 놓아 보세요.', ['G', 'H', 'J'], { d: 0.15, x: [BG('q')] }),
                UM('대문자 K, L, N과 이름이 같은 소문자 카드를 놓아 보세요.', ['K', 'L', 'N'], { d: 0.2 }),
                UM('대문자 P, Q, M과 이름이 같은 소문자 카드를 놓아 보세요. 막대 방향을 잘 봐요.', ['P', 'Q', 'M'], { d: 0.3,
                  p: ['p와 q는 무엇이 다를까요?', ['둥근 배가 막대의 오른쪽/왼쪽에 있어요', '둘은 완전히 같아요'], 0, 'p는 막대 오른쪽에, q는 막대 왼쪽에 둥근 배가 있어요.'] }),
                UM('대문자 I, J, L과 이름이 같은 소문자 카드를 놓아 보세요. 점이 있는 글자를 찾아요.', ['I', 'J', 'L'], { d: 0.25 }),
              ]),
            ACT('a2', '활동 2. 꼬리가 줄 아래로 내려가는 소문자 나누기', 14, 'wordcards',
              '"꼬리가 줄 아래로 내려가는 글자는 g, j, p, q, y예요." 카드를 놓기 전에 허공에 줄 네 칸을 긋고 글자를 써 보게 한다. 모든 글자를 꼬리가 있다고 고르는 학생에게는 h와 k의 막대가 줄 위로 올라갈 뿐 아래로는 내려가지 않는다고 칠판에서 짚어 준다. 마지막 문항은 소리로 이름을 듣고 대문자를 찾는다.',
              '소문자 카드를 꼬리가 있는 칸과 줄 위에 서 있는 칸으로 나누어 놓아요.',
              LA('sort', '글자를 줄 네 칸 위에 상상해 보며 아래로 내려가는 부분이 있는지 보세요.'),
              [
                SO('소문자 카드 네 장을 꼬리 유무로 나누어 보세요.', [{ id: 'tail', label: '꼬리가 있어요' }, { id: 'line', label: '줄 위에 서 있어요' }], ABC('g', 'h', 'j', 'k'), { tail: ['g', 'j'], line: ['h', 'k'] }, { d: 0.15 }),
                SO('소문자 카드 다섯 장을 꼬리 유무로 나누어 보세요.', [{ id: 'tail', label: '꼬리가 있어요' }, { id: 'line', label: '줄 위에 서 있어요' }], ABC('p', 'm', 'q', 'n', 'l'), { tail: ['p', 'q'], line: ['m', 'n', 'l'] }, { d: 0.25 }),
                SO('소문자 카드 여섯 장을 꼬리 유무로 나누어 보세요.', [{ id: 'tail', label: '꼬리가 있어요' }, { id: 'line', label: '줄 위에 서 있어요' }], ABC('b', 'p', 'd', 'q', 'y', 'k'), { tail: ['p', 'q', 'y'], line: ['b', 'd', 'k'] }, { d: 0.3,
                  p: ['b와 d는 꼬리가 줄 아래로 내려갈까요?', ['내려가지 않아요', '내려가요'], 0, 'b와 d는 막대가 위로 올라가고 꼬리는 없어요. p와 q가 꼬리가 있어요.'] }),
                LS('듣기 단추를 누르고, 들은 글자의 소문자 카드를 골라 보세요.', 'Letter Q.', { cards: ABC('q', 'p') }, 'q', { d: 0.3 }),
              ]),
          ),
          WRAP(7, '"꼬리가 줄 아래로 내려가는 글자 세 개를 말해 볼까요?" g, j, p, q 가운데 말한 글자를 칠판 줄 아래에 그려 보이고 출구 질문을 푼다. p와 q를 바꾼 학생은 다음 시간 시작에 막대와 둥근 배의 방향을 손가락으로 따라 그려 보게 한다.',
            [
              { type: 'tool', tool: 'wordcards', options: { mode: 'sort', shuffle: false, slots: [{ id: 'tail', label: '꼬리가 있어요' }, { id: 'line', label: '줄 위에 서 있어요' }], cards: ABC('j', 'n', 'p') }, prompt: '소문자 카드 세 장을 꼬리 유무로 나누어 보세요.', target: { sort: { tail: ['j', 'p'], line: ['n'] } }, difficulty: 0.2 },
              { type: 'choice', prompt: '대문자 G와 이름이 같은 소문자는 무엇일까요?', options: ['g', 'q', 'p'], answer: 0, difficulty: 0.2, explain: 'G의 소문자는 g예요. q는 Q의 소문자예요.' },
              MOOD('오늘 소문자 모양을 가려 보는 것은 어땠나요?'),
            ]),
        ],
        worksheet: WS('닮은 소문자 구별하기', [
          { type: 'table', prompt: '대문자와 이름이 같은 소문자를 따라 쓰세요.', columns: ['대문자', '소문자'], cells: [['G', ''], ['J', ''], ['P', ''], ['Q', '']], answer: 'g, j, p, q' },
          FIG('대문자 옆에 이름이 같은 소문자 카드를 이으세요.', { mode: 'match', shuffle: true, slots: ULS(['K', 'N']), cards: LCS(['K', 'N']) }, 'K — k / N — n'),
          { type: 'check', prompt: '줄 아래로 꼬리가 내려가는 소문자에 ✓ 하세요.', options: ['g', 'h', 'p', 'k'], answer: 'g, p' },
          { type: 'choice', prompt: '막대 오른쪽에 둥근 배가 있는 소문자에 ○ 하세요.', options: ['p', 'q'], answer: 'p' },
        ], '대문자의 이름을 소리 내어 말한 뒤 허공에 줄 네 칸을 긋고 글자를 써 보며 찾아요.', [
          { type: 'table', prompt: '대문자와 이름이 같은 소문자를 따라 쓰세요.', columns: ['대문자', '소문자'], cells: [['G', ''], ['J', '']], answer: 'g, j' },
          { type: 'check', prompt: '줄 아래로 꼬리가 내려가는 소문자에 ✓ 하세요.', options: ['g', 'h'], answer: 'g' },
          { type: 'choice', prompt: '대문자 N과 이름이 같은 소문자에 ○ 하세요.', options: ['n', 'm'], answer: 'n' },
          { type: 'short', prompt: '꼬리가 있는 소문자를 하나 써 보세요.' },
        ]),
        differentiation: DIFF(
          '짝 짓기와 나누기에서 카드가 적고, 맞게 놓으면 초록 테두리가 생기며 틀리게 놓으면 카드가 되돌아와요.',
          '카드를 모두 놓은 뒤 확인을 눌러 스스로 고쳐요.',
          '짝 짓기에 짝이 없는 소문자 카드(q)가 섞여 나오고, 나누기 카드가 여섯 장으로 늘어요.'),
        teacherNotes: '자주 보이는 어려움: ① p와 q, b와 d를 바꾼다 → 막대와 둥근 배의 방향을 말로 비교한다. ② 꼬리를 막대 위쪽으로 올라가는 부분과 혼동한다 → 줄 네 칸을 그려 아래로 내려가는 것만 꼬리라고 알려 준다. ③ I와 L을 바꾼다 → 소문자 i에는 점이 있고 l에는 없다는 것을 말해 준다.',
      }),

      // ───────────────────────── 6차시 (core) ─────────────────────────
      lesson(6, S2, {
        title: '교실 이름표 속에서 아는 글자 찾고 첫 글자로 모으기',
        objective: '교실 이름표(BAG, DESK, MAP 등)에서 아는 알파벳 글자를 찾아 고르고, 이름표를 첫 글자에 따라 모을 수 있다.',
        illustration: {
          prompt: PROMPT('classroom objects like a bag, a desk, a map and a door each with a big printed label and a child circling letters on a label'),
          scene: SC('BAG  DESK  MAP', '이름표에서 글자 찾기', [{ motif: 'house', x: 84, y: 218, color: 'sky' }, { motif: 'tree', x: 404, y: 214 }, { motif: 'bird', x: 250, y: 74 }]),
        },
        stages: [
          INTRO(6, '교실의 가방, 책상, 문을 가리키며 "교실에도 알파벳이 숨어 있어요. 이름표에서 아는 글자를 찾아볼까요?"라고 묻는다. 칠판에 BAG를 쓰고 B, A, G를 하나씩 짚으며 이름을 읽어 준다. 낱말 전체를 읽으려 애쓰는 학생에게는 오늘은 낱말을 읽지 않고 아는 글자만 찾으면 된다고 알려 준다. 이름표 첫 글자에 동그라미를 치게 한다.',
            '교실 물건의 이름표에서 아는 글자를 찾아봐요. 낱말을 다 읽지 않아도 괜찮아요.',
            { tool: 'wordcards', options: { mode: 'pick', shuffle: false, basket: '이름표 속 글자', cards: ABC('B', 'A', 'G', 'D') }, sequence: [{ at: {} }, { at: { B: 0, A: 0, G: 0 } }] }),
          MAIN(27,
            ACT('a1', '활동 1. 이름표 낱말 속에 들어 있는 글자 고르기', 13, 'wordcards',
              '"이름표에 쓰인 글자를 모두 골라 바구니에 넣어요." 문항의 영어 낱말은 읽지 않고 글자만 짚어 보게 한다. 글자 하나를 빠뜨리는 학생에게는 이름표의 글자를 손가락으로 왼쪽부터 하나씩 짚으며 이름을 말하게 한다. 도전 단계는 모양이 닮은 글자가 섞여 있으니 이름표와 카드를 하나씩 견주게 한다.',
              '이름표를 보고, 이름표에 들어 있는 글자 카드를 모두 바구니에 넣어요.',
              LA('pick', '이름표의 글자를 왼쪽부터 하나씩 짚으며 이름을 말해 보세요. 그 글자와 같은 카드만 골라요.', { basket: '이름표 속 글자' }),
              [
                PK('BAG 이름표에 들어 있는 글자를 모두 골라 보세요.', ABC('B', 'A', 'G', 'D', 'M'), ['B', 'A', 'G'], { d: 0.15, x: [BG('Q')] }),
                PK('DESK 이름표에 들어 있는 글자를 모두 골라 보세요.', ABC('D', 'E', 'S', 'K', 'P', 'A'), ['D', 'E', 'S', 'K'], { d: 0.2, x: [BG('B')] }),
                PK('MAP 이름표에 들어 있는 글자를 모두 골라 보세요.', ABC('M', 'A', 'P', 'N', 'B'), ['M', 'A', 'P'], { d: 0.2, x: [BG('W')],
                  p: ['낱말을 읽지 못해도 이름표 속 글자는 찾을 수 있을까요?', ['글자를 하나씩 보면 찾을 수 있어요', '낱말을 읽어야만 찾을 수 있어요'], 0, '낱말을 다 읽지 않아도 아는 글자를 하나씩 짚으면 찾을 수 있어요.'] }),
                PK('BOX 이름표에 들어 있는 글자를 모두 골라 보세요.', ABC('B', 'O', 'X', 'D', 'Q'), ['B', 'O', 'X'], { d: 0.25, x: [BG('P')] }),
              ]),
            ACT('a2', '활동 2. 이름표를 첫 글자로 모으기', 14, 'wordcards',
              '"낱말의 맨 앞 글자가 첫 글자예요. 첫 글자가 같은 이름표끼리 모아 봐요." 이름표 글을 읽지 않고 첫 글자만 보게 하고, 글자를 짚으며 이름을 말하게 한다. 맨 끝 글자를 보고 고르는 학생에게는 왼쪽 첫 글자에서 손가락을 출발시키게 한다. 마지막 문항은 듣기 단추로 들은 글자로 시작하는 이름표를 찾는다.',
              '이름표 카드를 첫 글자가 같은 칸에 모아 놓아요.',
              LA('sort', '이름표의 맨 왼쪽 글자를 짚어 이름을 말해 보세요. 칸의 글자와 같은 이름표를 같은 칸에 모아요.'),
              [
                SO('이름표 네 장을 첫 글자 B 칸과 D 칸에 모아 보세요.', [{ id: 'b', label: 'B로 시작해요' }, { id: 'd', label: 'D로 시작해요' }], [C('bag', 'BAG'), C('box', 'BOX'), C('desk', 'DESK'), C('door', 'DOOR')], { b: ['bag', 'box'], d: ['desk', 'door'] }, { d: 0.15 }),
                SO('이름표 네 장을 첫 글자 M 칸과 P 칸에 모아 보세요.', [{ id: 'm', label: 'M으로 시작해요' }, { id: 'p', label: 'P로 시작해요' }], [C('map', 'MAP'), C('pen', 'PEN'), C('mat', 'MAT'), C('paper', 'PAPER')], { m: ['map', 'mat'], p: ['pen', 'paper'] }, { d: 0.2 }),
                SO('이름표 여섯 장을 첫 글자 C 칸과 K 칸에 모아 보세요.', [{ id: 'c', label: 'C로 시작해요' }, { id: 'k', label: 'K로 시작해요' }], [C('clock', 'CLOCK'), C('key', 'KEY'), C('chair', 'CHAIR'), C('kite', 'KITE'), C('cup', 'CUP'), C('kid', 'KID')], { c: ['clock', 'chair', 'cup'], k: ['key', 'kite', 'kid'] }, { d: 0.3,
                  p: ['낱말의 첫 글자는 어느 쪽에 있을까요?', ['맨 왼쪽에 있어요', '맨 오른쪽에 있어요'], 0, '영어는 왼쪽에서 오른쪽으로 읽어서 첫 글자는 맨 왼쪽에 있어요.'] }),
                LS('듣기 단추를 누르고, 들은 글자로 시작하는 이름표를 골라 보세요.', 'Letter S.', { cards: [C('sofa', 'SOFA'), C('bag', 'BAG')] }, 'sofa', { d: 0.2, x: [C('desk', 'DESK')] }),
              ]),
          ),
          WRAP(7, '"교실에서 찾은 이름표의 첫 글자를 하나만 말해 볼까요?" 두세 명이 말한 글자를 칠판에 적고 출구 질문을 푼다. 첫 글자를 끝 글자로 잘못 고른 학생은 다음 시간에 낱말의 왼쪽 끝을 손가락으로 짚어 말해 보게 한다.',
            [
              { type: 'tool', tool: 'wordcards', options: { mode: 'pick', shuffle: false, basket: '이름표 속 글자', cards: ABC('P', 'E', 'N', 'T') }, prompt: 'PEN 이름표에 들어 있는 글자를 모두 골라 보세요.', target: { pick: ['P', 'E', 'N'] }, difficulty: 0.2 },
              { type: 'choice', prompt: 'CLOCK 이름표의 첫 글자는 무엇일까요?', options: ['K', 'C', 'L'], answer: 1, difficulty: 0.15, explain: '낱말의 맨 왼쪽 글자가 첫 글자예요. CLOCK은 C로 시작해요.' },
              MOOD('오늘 교실에서 글자를 찾아본 것은 어땠나요?'),
            ]),
        ],
        worksheet: WS('교실 이름표에서 글자 찾기', [
          { type: 'table', prompt: '이름표의 첫 글자를 써 보세요.', columns: ['이름표', '첫 글자'], cells: [['BAG', ''], ['DESK', ''], ['MAP', ''], ['KEY', '']], answer: 'B, D, M, K' },
          FIG('이름표를 첫 글자가 같은 칸에 놓으세요.', { mode: 'sort', shuffle: false, slots: [{ id: 'b', label: 'B로 시작해요' }, { id: 'p', label: 'P로 시작해요' }], cards: [C('bag', 'BAG'), C('pen', 'PEN'), C('book', 'BOOK'), C('paper', 'PAPER')] }, 'B: BAG, BOOK / P: PEN, PAPER'),
          { type: 'check', prompt: 'DOOR 이름표에 들어 있는 글자에 ✓ 하세요.', options: ['D', 'O', 'R', 'K'], answer: 'D, O, R' },
          { type: 'choice', prompt: '낱말의 첫 글자는 어디에 있나요?', options: ['맨 왼쪽', '맨 오른쪽', '가운데'], answer: '맨 왼쪽' },
        ], '낱말을 다 읽지 않아도 돼요. 맨 왼쪽 글자부터 손가락으로 짚으며 글자 이름을 말해요.', [
          { type: 'table', prompt: '이름표의 첫 글자를 써 보세요.', columns: ['이름표', '첫 글자'], cells: [['BAG', ''], ['MAP', '']], answer: 'B, M' },
          { type: 'check', prompt: 'BOX 이름표에 들어 있는 글자에 ✓ 하세요.', options: ['B', 'O', 'X'], answer: 'B, O, X' },
          { type: 'choice', prompt: 'DESK의 첫 글자에 ○ 하세요.', options: ['D', 'K'], answer: 'D' },
          { type: 'short', prompt: '교실에서 찾은 이름표의 글자를 하나 써 보세요.' },
        ]),
        differentiation: DIFF(
          '글자 고르기와 모으기에서 카드가 적고, 맞게 놓으면 초록 테두리가 생기며 틀리게 놓으면 카드가 되돌아와요.',
          '이름표 글자를 모두 고르고 다 모은 뒤 확인을 눌러 스스로 고쳐요.',
          '글자 고르기에 모양이 닮은 함정 카드(Q·B·W·P)가 한 장 더 섞여 나오고, 모으기 이름표가 여섯 장으로 늘어요.'),
        teacherNotes: '자주 보이는 어려움: ① 낱말 전체를 읽으려다 글자를 놓친다 → 오늘은 아는 글자만 찾으면 된다고 알려 준다. ② 첫 글자와 끝 글자를 혼동한다 → 영어는 왼쪽에서 오른쪽으로 읽는다는 것을 손가락으로 보인다. ③ 같은 글자가 두 번 나오는 낱말(DOOR)에서 중복을 센다 → 카드는 글자 종류당 한 장이라 한 번만 고른다고 말해 준다.',
      }),

      // ───────────────────────── 7차시 (wrap) ─────────────────────────
      lesson(7, S2, {
        title: '이름·순서·모양을 모두 써서 교실 글자 읽기 마무리',
        objective: '글자 이름을 듣고 찾고, 대문자와 소문자를 짝 지으며, 이름표의 첫 글자를 알아 이 단원에서 배운 알파벳 읽기를 스스로 평가할 수 있다.',
        illustration: {
          prompt: PROMPT('a bulletin board full of colorful letter cards with classroom labels pinned below and a child holding a small star sticker'),
          scene: SC('A B C ... Z', '내가 읽을 수 있는 글자', [{ motif: 'star', x: 90, y: 78, s: 0.6 }, { motif: 'tree', x: 404, y: 214 }, { motif: 'house', x: 90, y: 218, color: 'sky' }]),
        },
        stages: [
          INTRO(5, '칠판에 이번 단원에서 배운 것을 "글자 이름 듣기, 알파벳 차례, 대문자와 소문자 짝, 이름표 첫 글자" 네 줄로 적는다. "네 가지 가운데 가장 자신 있는 것은 무엇인가요?"라고 묻고 손을 들게 한다. 한 가지에만 손을 든 학생에게는 오늘 활동에서 나머지를 한 번씩 다시 해 보자고 말해 준다.',
            '이 단원에서 배운 네 가지 가운데 가장 자신 있는 것은 무엇인가요?',
            { tool: 'wordcards', options: { mode: 'listen', basket: '들은 것', shuffle: false, say: 'Letter T.', cards: [BG('T'), BG('S')] }, sequence: [{ at: {} }, { at: { T: 0 } }] }),
          MAIN(28,
            ACT('a1', '활동 1. 들은 글자로 시작하는 이름표 찾기', 14, 'wordcards',
              '"듣기 단추로 글자 이름을 듣고, 그 글자로 시작하는 이름표를 찾아요." 이름표 낱말을 읽지 않아도 첫 글자를 보면 된다고 말한다. 소리가 나지 않으면 교사가 글자 이름을 읽어 준다. 낱말의 끝 글자를 보고 고르는 학생에게는 왼쪽 첫 글자를 손가락으로 짚게 한다. 도전 단계는 세 번째 이름표가 하나 더 섞여 있다.',
              '듣기 단추를 눌러 글자 이름을 듣고, 그 글자로 시작하는 이름표 카드를 골라요.',
              LA('listen', '들은 글자의 이름을 말하고, 이름표의 맨 왼쪽 글자를 짚어 같은지 견주어 보세요.'),
              [
                LS('듣기 단추를 누르고, 들은 글자로 시작하는 이름표를 골라 보세요.', 'Letter K.', { cards: [C('key', 'KEY'), C('desk', 'DESK')] }, 'key', { x: [C('map', 'MAP')] }),
                LS('듣기 단추를 누르고, 이번에 들은 글자로 시작하는 이름표를 골라 보세요.', 'Letter C.', { cards: [C('clock', 'CLOCK'), C('door', 'DOOR')] }, 'clock', { d: 0.2, x: [C('bag', 'BAG')] }),
                LS('듣기 단추를 누르고, 들려준 글자로 시작하는 이름표를 찾아 보세요.', 'Letter P.', { cards: [C('pen', 'PEN'), C('bag', 'BAG')] }, 'pen', { d: 0.2, x: [C('box', 'BOX')],
                  p: ['글자 이름을 알면 모르는 낱말도 첫 글자로 찾을 수 있을까요?', ['첫 글자로 찾을 수 있어요', '낱말을 모두 읽어야 해요'], 0, '글자 이름을 알면 낱말을 읽지 못해도 첫 글자로 이름표를 찾을 수 있어요.'] }),
                LS('듣기 단추를 누르고, 들려준 글자로 시작하는 이름표를 찾아 보세요. 비슷한 글자가 있어요.', 'Letter M.', { cards: [C('mat', 'MAT'), C('net', 'NET')] }, 'mat', { d: 0.3, x: [C('mop', 'MOP')] }),
              ]),
            ACT('a2', '활동 2. 단원 글자 읽기 모아 풀기', 14, 'wordcards',
              '"이번에는 글자 이름, 순서, 대문자와 소문자를 한꺼번에 써요." 소리 내어 말하며 놓게 하고, 놓은 뒤에는 짝에게 한 번 읽어 주게 한다. 순서 놓기에서 두 글자를 바꾸는 학생에게는 앞뒤 글자를 이어 읽어 보게 한다. 이름표 짝 짓기는 첫 글자를 칸에 있는 글자와 견주게 한다.',
              '카드를 알맞은 칸에 놓아 단원에서 배운 글자 읽기를 모두 풀어요.',
              LA('match', '대문자 이름을 먼저 말하고 소문자 모양이나 낱말의 맨 왼쪽 글자를 견주어 보세요.'),
              [
                UM('대문자 R, S, T와 이름이 같은 소문자 카드를 놓아 보세요.', ['R', 'S', 'T'], { d: 0.2 }),
                MT('이름표를 첫 글자가 같은 칸 옆에 놓아 보세요.', [{ id: 'c', label: 'C' }, { id: 't', label: 'T' }, { id: 'w', label: 'W' }], [C('clock', 'CLOCK'), C('table', 'TABLE'), C('window', 'WINDOW')], { c: 'clock', t: 'table', w: 'window' }, { d: 0.25, x: [C('door', 'DOOR', { why: 'D로 시작하는 이름표라 C·T·W 어느 칸에도 맞지 않아요.' })] }),
                OR('R부터 V까지 다섯 글자를 알파벳 차례대로 놓아 보세요.', ABC('R', 'S', 'T', 'U', 'V'), ['R', 'S', 'T', 'U', 'V'], { d: 0.25 }),
                FI('빈칸에 알맞은 글자를 골라 보세요. 알파벳 차례를 떠올려 봐요.', [{ id: 'f1', label: 'U, V, ___, X' }], TX('W', 'Y', 'S'), { f1: 'W' }, { d: 0.25 }),
              ]),
          ),
          WRAP(7, '"이 단원에서 가장 쉬웠던 것과 아직 어려운 것은 무엇인가요?" 두세 명이 말하게 하고 출구 질문을 푼다. 어려운 것으로 b·d·p·q를 꼽은 학생은 방과 후 짝에게 막대와 배의 방향을 말로 설명해 보게 한다.',
            [
              { type: 'tool', tool: 'wordcards', options: { mode: 'match', shuffle: true, slots: ULS(['W', 'V']), cards: LCS(['W', 'V']) }, prompt: '대문자 옆에 이름이 같은 소문자 카드를 놓아 보세요.', target: { match: { W: 'w', V: 'v' } }, difficulty: 0.2 },
              { type: 'choice', prompt: 'SOFA 이름표의 첫 글자는 무엇일까요?', options: ['A', 'F', 'S'], answer: 2, difficulty: 0.15, explain: '왼쪽 맨 앞 글자 S가 첫 글자예요.' },
              MOOD('이 단원에서 알파벳 읽기가 자신 있나요?'),
            ]),
        ],
        worksheet: WS('알파벳 읽기 모아 보기', [
          { type: 'table', prompt: '선생님이 읽어 주는 글자 이름을 듣고 알맞은 글자에 ○ 하세요.', columns: ['번호', '들은 글자'], cells: [['1', 'T  S'], ['2', 'K  H'], ['3', 'P  Q'], ['4', 'M  N']], answer: '교사 읽기 예: 1 T / 2 K / 3 P / 4 M' },
          { type: 'blank', prompt: '빈칸에 알맞은 글자를 쓰세요.', text: 'R, S, ___, U, ___, W', answer: 'T, V' },
          { type: 'check', prompt: '대문자 W의 소문자와 이름표 TABLE의 첫 글자를 알맞게 ✓ 하세요.', options: ['w', 'v', 'T', 'B'], answer: 'w, T' },
          { type: 'draw', prompt: '이번 단원에서 가장 마음에 든 글자 하나를 크게 그리고 이름을 써 보세요.' },
        ], '글자 이름을 먼저 소리 내어 말하고, 칠판 줄을 보며 풀어요.', [
          { type: 'table', prompt: '선생님이 읽어 주는 글자 이름을 듣고 알맞은 글자에 ○ 하세요.', columns: ['번호', '들은 글자'], cells: [['1', 'T  S'], ['2', 'K  H']], answer: '교사 읽기 예: 1 T / 2 K' },
          { type: 'blank', prompt: '빈칸에 알맞은 글자를 쓰세요.', text: 'R, S, ___', answer: 'T' },
          { type: 'choice', prompt: 'TABLE의 첫 글자에 ○ 하세요.', options: ['T', 'E'], answer: 'T' },
          { type: 'short', prompt: '이번 단원에서 알게 된 글자 하나를 써 보세요.' },
        ]),
        differentiation: DIFF(
          '이름표 찾기와 짝 짓기에서 카드가 적고, 맞게 놓으면 초록 테두리가 생기며 틀리게 놓으면 카드가 되돌아와요.',
          '글자를 듣고 이름표를 고른 뒤, 짝 짓기는 다 놓고 확인을 눌러 스스로 고쳐요.',
          '이름표 고르기에 세 번째 이름표(MAP·BAG·BOX·MOP)가 섞이고, 이름표 짝 짓기에 어느 칸에도 맞지 않는 DOOR 카드가 한 장 더 나와요.'),
        teacherNotes: '단원 마무리: 마지막 시간이므로 틀린 개수보다 자신 있는 것과 어려운 것을 스스로 말하게 하는 데 시간을 쓴다. 자주 보이는 어려움: ① 글자 이름은 알지만 첫 글자로 이름표를 찾지 못한다 → 낱말의 맨 왼쪽을 짚게 한다. ② 대문자와 소문자 짝에서 모양이 닮은 글자(v와 w)를 바꾼다 → 뾰족이 수로 비교하게 한다. ③ 알파벳 순서를 떠올리지 못한다 → 일곱 글자씩 끊어 칠판 줄을 읽게 한다. 이 단원에서는 쓰기를 평가하지 않는다.',
      }),
    ],
  });
})();
