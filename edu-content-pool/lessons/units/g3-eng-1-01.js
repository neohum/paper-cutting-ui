/* 3학년 영어 1학기 1단원. 듣기 — 알파벳 글자 이름·첫소리(1~3차시) → 짧은 어구 박자와 낱말 강세(4~7차시) → 자기소개(8~9차시) → 헷갈리는 소리 구별(10~12차시)
 * → 그림 단서·문장 억양(13~16차시) → 교실 표현·기초 낱말·쉬운 문장(17~23차시) → 가족·친구와 학교생활 이야기(24~27차시).
 * 예문·대화·안내는 모두 이 단원을 위해 새로 지은 것이다(교과서 지문·노래·챈트 가사를 옮기지 않았다). 알파벳 노래와 기존 챈트는 싣지 않았다.
 * 소리: '듣기' 단추가 있는 문항은 기기가 영어 음성(speechSynthesis)으로 **누를 때만** 읽는다(자동 재생 없음). 강세·박자처럼 기계 음성이 살리지 못하는
 * 문항과 소리가 나지 않는 기기에서는 교사가 발문에 적힌 대로 읽어 준다. 학생 화면 영어는 글자·낱말·짧은 문장으로 두고 안내는 한국어로 쓴다.
 * 표기 약속: ● = 박수 치는(세게 들리는) 소리, ○ = 가볍게 붙는 소리, ↗ = 끝이 올라감, ↘ = 끝이 내려감.
 */
(function () {
  const UNIT = 'g3-eng-1-01';
  const CAT = 'g3-영어-1학기-1';
  const U = { grade: 3, subject: '영어', unitTitle: '1. 듣기' };
  const S1 = '[4영01-01]'; const S3 = '[4영01-03]'; const S5 = '[4영01-05]'; const S6 = '[4영01-06]';
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
  const OR = (prompt, cards, order, o = {}) => base(o, prompt, { order }, Object.assign({ mode: 'order', cards }, o.say ? { listen: true, say: o.say } : {}));
  const FI = (prompt, slots, cards, map, o = {}) => base(o, prompt, { fill: map }, { mode: 'fill', slots, cards });
  const FP = (prompt, words, flip, o = {}) => base(o, prompt, { flip }, { mode: 'flip', words });
  const SPL = (prompt, word, ko, motif, extra, o = {}) => base(o, prompt, { spell: word }, Object.assign({ mode: 'spell', word, ko }, motif ? { motif } : {}, extra ? { extra } : {}));
  // 활동지 그림(교구 figure): 글을 읽는 칸이라 wide
  const FIG = (prompt, options, answer) => ({ type: 'figure', wide: true, prompt, tool: 'wordcards', figures: [{ options, caption: '' }], answer });
  const ABC = (...ls) => ls.map((l) => BG(l));
  const TX = (...ls) => ls.map((l) => C(l, l));
  // 그림이 있는 낱말(PaperKit 모티프): 이름 → 모티프
  const PIC = { apple: 'apple', ball: 'ball', cat: 'cat', dog: 'dog', egg: 'egg', fish: 'fish2', house: 'house', leaf: 'leaf', moon: 'moon', pencil: 'pencil', sun: 'sun', star: 'star', tree: 'tree', umbrella: 'umbrella', wave: 'wave', book: 'book', banana: 'banana', flower: 'flower', bird: 'bird', snow: 'snow', cloud: 'cloud', mountain: 'mountain' };
  const KO = { apple: '사과', ball: '공', cat: '고양이', dog: '개', egg: '달걀', fish: '물고기', house: '집', leaf: '잎', moon: '달', pencil: '연필', sun: '해', star: '별', tree: '나무', umbrella: '우산', wave: '물결', book: '책', banana: '바나나', flower: '꽃', bird: '새', snow: '눈', cloud: '구름', mountain: '산' };
  const VW = (...ns) => ns.map((n) => W(n, KO[n], PIC[n]));            // words 배열(그림 + 뜻)
  const WC = (n, text) => C(n, text == null ? n : text, { motif: PIC[n] }); // 그림 + 영어 글 카드
  const PC = (...ns) => ns.map((n) => C(n, '', { motif: PIC[n], name: KO[n] })); // 그림만 있는 카드(소리 문항)
  const SL = (...ls) => ls.map((l) => ({ id: l, label: l }));            // 글자 칸
  const NUM = (...ns) => ns.map((n) => BG(String(n)));
  const BEAT = [{ id: 'strong', label: '박수 ●' }, { id: 'weak', label: '가볍게 ○' }];
  const AT2 = [{ id: 'ask', label: '대답이 필요해요 ↗' }, { id: 'tell', label: '반응이 필요해요 ↘' }];
  const AT = [{ id: 'ask', label: '묻는 말 ↗' }, { id: 'tell', label: '알리는 말 ↘' }];

  PaperLessons.registerUnit({
    id: UNIT, schema: 'edu-unit.v1', catalogUnit: CAT,
    grade: 3, subject: '영어', unitTitle: '1. 듣기',
    flow: '단원은 "글자·소리 → 박자·강세·억양 → 낱말·문장 뜻 → 사람과 학교 이야기" 순으로 듣기 범위를 넓힌다. 1~3차시는 알파벳 글자 이름과 첫소리를 듣고 그림·글자 카드와 짝 지으며, 4~7차시는 짧은 어구의 박수 박자와 두 음절 낱말의 센 소리를 귀로 가른다. 8~9차시는 자기소개에서 이름·나이·좋아하는 것을 찾고, 10~12차시는 우리말에 없는 소리 때문에 헷갈리기 쉬운 낱말 쌍(fan·pan, rice·lice, cap·cup)을 구별한다. 13~16차시는 그림 단서로 들은 낱말을 확인하고 끝이 올라가는 묻는 말과 내려가는 알리는 말을 가르며, 17~23차시는 교실 표현·기초 낱말·쉬운 문장의 뜻을 잇는다. 24~27차시는 가족·친구 이야기와 학교생활 안내에서 핵심을 찾고 마지막 시간에 단원의 듣기 전략을 묶어 스스로 평가한다.',
    refs: {},
    lessons: [
      // ───────────────────────── 1차시 (intro) ─────────────────────────
      lesson(1, S1, {
        title: '글자 이름과 첫소리를 함께 들으며 A~E 그림 짝 찾기',
        objective: '알파벳 A부터 E까지의 글자 이름을 듣고 찾고, apple·ball·cat·dog·egg의 첫소리를 듣고 같은 글자와 짝 지을 수 있다.',
        illustration: {
          prompt: PROMPT('a child listening to a speaker while holding picture cards of an apple, a ball, a cat, a dog and an egg beside big letters A B C D E'),
          scene: SC('A  B  C  D  E', '이름도 소리도 들어 봐요', [{ motif: 'tree', x: 80, y: 214 }, { motif: 'house', x: 396, y: 218, color: 'sky' }, { motif: 'bird', x: 250, y: 74 }]),
        },
        stages: [
          INTRO(7, '칠판에 A와 사과 그림을 나란히 그리고 "A는 글자의 이름이에요. 그리고 apple이라고 말하면 맨 처음 소리가 \'애\'로 들려요. 같이 말해 볼까요?"라고 묻는다. 글자 이름과 낱말의 첫소리가 같지 않을 수 있다는 것을 B, ball로도 보여 준다(비, 브). 글자 이름과 첫소리가 똑같다고 믿는 학생에게는 C와 cat을 나란히 읽어 주며 이름(씨)과 첫소리(크)가 다르다는 것을 확인한다. 듣기 단추는 누를 때만 소리가 난다고 알려 준다.',
            '글자에는 이름도 있고 낱말을 말할 때 맨 처음 나는 소리도 있어요. A와 apple을 같이 들어 봐요.',
            { tool: 'wordcards', options: { mode: 'match', shuffle: true, slots: SL('A', 'B'), cards: [WC('apple'), WC('ball')] }, sequence: [{ at: {} }, { at: { apple: 0, ball: 1 } }] }),
          MAIN(26,
            ACT('a1', '활동 1. 글자 이름과 낱말 첫소리 듣고 글자 고르기', 13, 'wordcards',
              '문항마다 듣기 단추를 한 번 누르게 하고, 소리가 나지 않으면 교사가 "1번, 디."처럼 글자 이름이나 낱말을 읽어 준다. 첫소리를 묻는 문항에서는 "낱말을 말할 때 입을 처음 어떻게 열었나요?" 하고 묻고, 마지막 글자 이름으로 고르는 학생에게는 낱말을 느리게 한 번 더 들려준다. 도전 단계는 닮은 글자 카드가 한 장 더 섞여 있다.',
              '듣기 단추를 눌러 글자 이름이나 낱말을 듣고, 알맞은 글자 카드 하나를 바구니에 넣어요.',
              LA('listen', '들은 소리를 따라 말하며 입이 처음 어떻게 열리는지 느껴 보고, 그 소리와 이름이 같은 글자를 찾아요.'),
              [
                LS('듣기 단추를 누르고, 들은 글자 이름을 골라 보세요.', 'Letter D.', { cards: ABC('D', 'B') }, 'D', { x: [BG('E')] }),
                LS('듣기 단추를 누르고, 이번에 들은 글자 이름을 골라 보세요.', 'Letter C.', { cards: ABC('C', 'E') }, 'C', { d: 0.15, x: [BG('A')] }),
                LS('듣기 단추를 누르고, 낱말 cat을 듣고 첫 글자를 골라 보세요.', 'cat', { cards: ABC('C', 'K') }, 'C', { d: 0.25, x: [BG('D')],
                  p: ['cat의 맨 처음 소리는 글자 이름 \'씨\'와 같을까요?', ['같지 않아요, \'크\'에 가까워요', '똑같이 \'씨\'로 시작해요'], 0, '글자 이름은 \'씨\'이지만 cat의 첫소리는 \'크\'에 가까워요. 첫소리와 글자 이름은 다를 수 있어요.'] }),
                LS('듣기 단추를 누르고, 낱말 egg를 듣고 첫 글자를 골라 보세요.', 'egg', { cards: ABC('E', 'A') }, 'E', { d: 0.25, x: [BG('D')] }),
              ]),
            ACT('a2', '활동 2. 첫소리가 같은 글자와 그림 짝 짓기', 13, 'wordcards',
              '"그림 낱말을 말할 때 맨 처음 소리와 같은 글자 칸 옆에 놓아요." 그림 카드를 놓기 전에 낱말을 입으로 말하게 한다. ball을 D로 놓는 학생에게는 낱말을 길게 늘여 읽으며 처음 소리를 함께 느끼게 한다. 마지막 문항은 C로 시작하는 낱말을 모두 골라 바구니에 넣는다.',
              '그림 낱말 카드를 첫소리가 같은 글자 칸 옆에 놓거나, 조건에 맞는 카드를 골라요.',
              LA('match', '그림 낱말을 입으로 말하고, 맨 처음 소리가 어떤 글자 이름과 가까운지 생각해 보세요.'),
              [
                MT('그림 낱말 카드를 첫소리가 같은 글자 칸 옆에 놓아 보세요.', SL('A', 'B', 'C'), [WC('apple'), WC('ball'), WC('cat')], { A: 'apple', B: 'ball', C: 'cat' }, { d: 0.1 }),
                MT('이번에는 D와 E, A 옆에 알맞은 그림 낱말 카드를 놓아 보세요.', SL('D', 'E', 'A'), [WC('dog'), WC('egg'), WC('apple')], { D: 'dog', E: 'egg', A: 'apple' }, { d: 0.15, x: [WC('ball')] }),
                MT('B, D, E 옆에 알맞은 그림 낱말 카드를 놓아 보세요. 닮은 글자에 조심해요.', SL('B', 'D', 'E'), [WC('ball'), WC('dog'), WC('egg')], { B: 'ball', D: 'dog', E: 'egg' }, { d: 0.2, x: [WC('cat')] }),
                PK('C로 시작하는 낱말 그림 카드를 모두 골라 보세요.', [WC('cat'), WC('cloud'), WC('dog'), WC('apple'), WC('ball')], ['cat', 'cloud'], { d: 0.25 }),
              ]),
          ),
          WRAP(7, '"오늘 글자 이름과 낱말 첫소리가 달랐던 글자가 있었나요?" C와 cat을 예로 들며 한두 명의 발표를 듣고 출구 질문을 푼다. 짝 짓기에서 B와 D를 바꾼 학생은 다음 시간 시작에 ball과 dog를 소리 내어 읽으며 입 모양을 다시 견주어 본다.',
            [
              { type: 'tool', tool: 'wordcards', options: { mode: 'listen', basket: '들은 것', shuffle: false, say: 'Letter E.', cards: ABC('E', 'D') }, prompt: '듣기 단추를 누르고, 들은 글자를 골라 보세요.', target: { listen: 'E' }, difficulty: 0.15 },
              { type: 'choice', prompt: 'ball은 어느 글자로 시작할까요?', options: ['B', 'D', 'E'], answer: 0, difficulty: 0.15, explain: 'ball은 \'브\' 소리로 시작해서 B와 짝이에요.' },
              MOOD('오늘 글자 이름과 소리 듣기는 어땠나요?'),
            ]),
        ],
        worksheet: WS('글자 이름과 첫소리', [
          { type: 'table', prompt: '선생님이 읽어 주는 글자 이름을 듣고 알맞은 글자에 ○ 하세요.', columns: ['번호', '들은 글자'], cells: [['1', 'D  B'], ['2', 'C  E'], ['3', 'A  E'], ['4', 'B  D']], answer: '교사 읽기 예: 1 D / 2 C / 3 A / 4 B' },
          FIG('그림 낱말 카드를 첫소리가 같은 글자 옆에 이으세요.', { mode: 'match', shuffle: true, slots: SL('A', 'D'), cards: [WC('apple'), WC('dog')] }, 'A — apple / D — dog'),
          { type: 'choice', prompt: 'cat의 첫 글자에 ○ 하세요.', options: ['C', 'E', 'B'], answer: 'C' },
          { type: 'short', prompt: '내 이름이나 좋아하는 낱말의 첫 글자를 하나 써 보세요.' },
        ], '낱말을 입으로 말해 보고, 입이 처음 어떻게 열리는지 느껴 보며 글자를 찾아요.', [
          { type: 'table', prompt: '선생님이 읽어 주는 글자 이름을 듣고 알맞은 글자에 ○ 하세요.', columns: ['번호', '들은 글자'], cells: [['1', 'D  B'], ['2', 'C  E']], answer: '교사 읽기 예: 1 D / 2 C' },
          { type: 'choice', prompt: 'apple의 첫 글자에 ○ 하세요.', options: ['A', 'B'], answer: 'A' },
          { type: 'choice', prompt: 'dog의 첫 글자에 ○ 하세요.', options: ['D', 'E'], answer: 'D' },
          { type: 'short', prompt: '들은 글자 이름 하나를 써 보세요.' },
        ]),
        differentiation: DIFF(
          '글자 고르기와 그림 짝 짓기에서 카드가 적고, 맞게 놓으면 초록 테두리가 생기며 틀리게 놓으면 카드가 되돌아와요.',
          '소리를 듣고 카드를 고르고, 짝 짓기는 다 놓은 뒤 확인을 눌러 스스로 고쳐요.',
          '글자 고르기에 닮은 글자 카드가 한 장 더 섞이고, 그림 짝 짓기에 어느 칸에도 맞지 않는 그림 카드(ball·cat)가 한 장 더 나와요.'),
        teacherNotes: '자주 보이는 어려움: ① 글자 이름과 첫소리를 같다고 여긴다 → C(씨)와 cat(크), B(비)와 ball(브)을 나란히 읽어 보인다. ② B와 D, E와 A의 이름을 바꾼다 → 이름을 소리 내어 말한 뒤 모양을 견주게 한다. ③ 낱말을 끝까지 들어야 한다고 여긴다 → 이 시간에는 맨 처음 소리만 들으면 된다고 알려 준다. 알파벳 노래는 쓰지 않고 짧은 낱말로만 소리를 익힌다.',
      }),

      // ───────────────────────── 2차시 (practice) ─────────────────────────
      lesson(2, S1, {
        title: 'F·H·L·M·P·S 글자 이름 듣고 첫소리 같은 그림 찾기',
        objective: 'F, H, L, M, P, S의 글자 이름을 듣고 고르며, fish·house·leaf·moon·pencil·sun의 첫소리가 같은 글자와 짝 지을 수 있다.',
        illustration: {
          prompt: PROMPT('six picture cards of a fish, a house, a leaf, the moon, a pencil and the sun beside big letters F H L M P S under a speaker icon'),
          scene: SC('F H L M P S', '그림 이름의 첫소리', [{ motif: 'moon', x: 94, y: 216, s: 0.8 }, { motif: 'leaf', x: 380, y: 218 }, { motif: 'flower', x: 250, y: 214 }]),
        },
        stages: [
          INTRO(6, '어제 배운 A~E를 손가락으로 짚으며 글자 이름을 말해 보게 한 뒤 "오늘은 F, H, L, M, P, S예요."라고 알리고 fish, house, leaf, moon, pencil, sun을 차례로 읽어 준다. 낱말마다 입을 어떻게 여는지 보여 주며 "fish는 입술에 이를 살짝 대는 소리로 시작해요."라고 말한다. H와 house처럼 이름과 첫소리가 다르다는 것을 눈치채고 말하는 학생이 있으면 칭찬하고 칠판에 적는다.',
            '어제 배운 글자 이름을 말해 보고, 오늘 새로 만날 낱말의 첫소리도 들어 봐요.',
            { tool: 'wordcards', options: { mode: 'match', shuffle: true, slots: SL('F', 'S'), cards: [WC('fish'), WC('sun')] }, sequence: [{ at: {} }, { at: { fish: 0, sun: 1 } }] }),
          MAIN(27,
            ACT('a1', '활동 1. 글자 이름 듣고 비슷한 글자 가려내기', 12, 'wordcards',
              '"M과 N, F와 S는 소리가 비슷해요. 이름을 잘 듣고 골라요." 듣기 단추를 한 번 누르게 하고 소리가 나지 않으면 교사가 읽어 준다. 모양만 보고 고르는 학생에게는 이름을 소리 내어 말한 뒤 카드를 고르게 한다. 도전 단계는 닮은 글자가 한 장 더 섞여 있다.',
              '듣기 단추를 눌러 글자 이름을 듣고, 들은 글자 카드 하나를 바구니에 넣어요.',
              LA('listen', '이름을 소리 내어 따라 말해 보고, 입 모양이 같은 카드를 골라요.'),
              [
                LS('듣기 단추를 누르고, 들은 글자를 골라 보세요.', 'Letter H.', { cards: ABC('H', 'N') }, 'H', { x: [BG('M')] }),
                LS('듣기 단추를 누르고, 이번에 들은 글자를 골라 보세요.', 'Letter M.', { cards: ABC('M', 'N') }, 'M', { d: 0.2, x: [BG('L')] }),
                LS('듣기 단추를 누르고, 들려준 글자가 무엇인지 찾아 보세요.', 'Letter P.', { cards: ABC('P', 'B') }, 'P', { d: 0.2, x: [BG('F')],
                  p: ['P와 B는 입술 모양이 어떻게 다를까요?', ['P는 입술을 닫았다가 터뜨려요', 'B는 입술을 닫은 채 있어요'], 0, '두 소리 모두 입술을 닫았다가 열어요. 이름이 달라서 귀로 잘 들어야 해요.'] }),
                LS('듣기 단추를 누르고, 소리와 같은 글자 카드를 찾아 보세요.', 'Letter S.', { cards: ABC('S', 'F') }, 'S', { d: 0.25, x: [BG('L')] }),
              ]),
            ACT('a2', '활동 2. 그림 낱말의 첫소리와 같은 글자 찾기', 15, 'wordcards',
              '"그림 낱말을 말할 때 맨 처음 소리를 느껴 보고 같은 글자 옆에 놓아요." 낱말을 입으로 먼저 말하게 한 뒤 놓게 한다. house를 H가 아닌 다른 글자에 놓는 학생에게는 입김이 나오는 첫소리를 손바닥으로 느껴 보게 한다. 마지막 문항은 S로 시작하는 낱말을 모두 골라 바구니에 넣는다.',
              '그림 낱말 카드를 첫소리가 같은 글자 칸 옆에 놓거나, 조건에 맞는 카드를 골라요.',
              LA('match', '그림 낱말을 입으로 말하고, 맨 처음 소리와 같은 소리로 시작하는 글자를 찾아보세요.'),
              [
                MT('그림 낱말 카드를 첫소리가 같은 글자 칸 옆에 놓아 보세요.', SL('F', 'H', 'L'), [WC('fish'), WC('house'), WC('leaf')], { F: 'fish', H: 'house', L: 'leaf' }, { d: 0.15 }),
                MT('M, P, S 옆에 알맞은 그림 낱말 카드를 놓아 보세요.', SL('M', 'P', 'S'), [WC('moon'), WC('pencil'), WC('sun')], { M: 'moon', P: 'pencil', S: 'sun' }, { d: 0.2, x: [WC('star')] }),
                MT('L, M, S 옆에 알맞은 그림 낱말 카드를 놓아 보세요. 비슷한 소리를 조심해요.', SL('L', 'M', 'S'), [WC('leaf'), WC('moon'), WC('star')], { L: 'leaf', M: 'moon', S: 'star' }, { d: 0.3, x: [WC('sun', 'sun', { why: 'sun도 S로 시작하지만 이 문항에서는 star가 S 칸의 짝이에요.' })] }),
                PK('S로 시작하는 낱말 그림 카드를 모두 골라 보세요.', [WC('sun'), WC('star'), WC('snow'), WC('tree'), WC('moon')], ['sun', 'star', 'snow'], { d: 0.25,
                  p: ['S로 시작하는 낱말은 한 개뿐일까요?', ['여러 개 있어요', '한 개뿐이에요'], 0, 'sun, star, snow처럼 S로 시작하는 낱말이 여러 개 있어요.'] }),
              ]),
          ),
          WRAP(7, '"오늘 낱말 가운데 첫소리가 같은 두 낱말을 찾았나요?" sun, star, snow를 칠판에 모아 보이고 출구 질문을 푼다. M을 N으로 고른 학생은 다음 시간 시작에 moon을 말하며 입술이 닫히는지 거울로 확인해 본다.',
            [
              { type: 'tool', tool: 'wordcards', options: { mode: 'listen', basket: '들은 것', shuffle: false, say: 'Letter L.', cards: ABC('L', 'I') }, prompt: '듣기 단추를 누르고, 들은 글자를 골라 보세요.', target: { listen: 'L' }, difficulty: 0.15 },
              { type: 'choice', prompt: 'pencil은 어느 글자로 시작할까요?', options: ['B', 'P', 'F'], answer: 1, difficulty: 0.15, explain: 'pencil은 입술을 닫았다가 여는 소리로 시작해서 P와 짝이에요.' },
              MOOD('오늘 첫소리 찾기는 어땠나요?'),
            ]),
        ],
        worksheet: WS('F·H·L·M·P·S 첫소리', [
          { type: 'table', prompt: '선생님이 읽어 주는 글자 이름을 듣고 알맞은 글자에 ○ 하세요.', columns: ['번호', '들은 글자'], cells: [['1', 'H  N'], ['2', 'M  L'], ['3', 'P  B'], ['4', 'S  F']], answer: '교사 읽기 예: 1 H / 2 M / 3 P / 4 S' },
          FIG('그림 낱말 카드를 첫소리가 같은 글자 옆에 이으세요.', { mode: 'match', shuffle: true, slots: SL('F', 'M'), cards: [WC('fish'), WC('moon')] }, 'F — fish / M — moon'),
          { type: 'check', prompt: 'S로 시작하는 낱말에 ✓ 하세요.', options: ['sun', 'moon', 'star', 'snow'], answer: 'sun, star, snow' },
          { type: 'short', prompt: '들은 낱말 가운데 마음에 드는 것 하나와 첫 글자를 써 보세요.' },
        ], '낱말을 입으로 말하고 맨 처음 소리에 귀를 기울여 글자를 찾아요.', [
          { type: 'table', prompt: '선생님이 읽어 주는 글자 이름을 듣고 알맞은 글자에 ○ 하세요.', columns: ['번호', '들은 글자'], cells: [['1', 'H  N'], ['2', 'M  L']], answer: '교사 읽기 예: 1 H / 2 M' },
          { type: 'choice', prompt: 'fish의 첫 글자에 ○ 하세요.', options: ['F', 'S'], answer: 'F' },
          { type: 'choice', prompt: 'moon의 첫 글자에 ○ 하세요.', options: ['M', 'L'], answer: 'M' },
          { type: 'short', prompt: '들은 글자 이름 하나를 써 보세요.' },
        ]),
        differentiation: DIFF(
          '글자 고르기와 그림 짝 짓기에서 카드가 적고, 맞게 놓으면 초록 테두리가 생기며 틀리게 놓으면 카드가 되돌아와요.',
          '소리를 듣고 카드를 고르고, 짝 짓기는 다 놓은 뒤 확인을 눌러 스스로 고쳐요.',
          '글자 고르기에 닮은 글자 카드가 한 장 더 섞이고, 그림 짝 짓기에 어느 칸에도 맞지 않는 그림 카드가 한 장 더 나와요.'),
        teacherNotes: '자주 보이는 어려움: ① M과 N, S와 F의 이름을 바꾼다 → 이름을 소리 내어 말하고 입술 모양을 견주어 본다. ② house의 H를 \'하\'로만 알고 글자 이름 \'에이치\'와 연결하지 못한다 → 낱말은 입김이 나가는 소리, 글자 이름은 따로 있다고 알려 준다. ③ sun과 star를 모두 S 칸에 놓고 한 장이 남는다 → 같은 글자 칸에 여러 낱말이 있어도 된다고 알려 준다.',
      }),

      // ───────────────────────── 3차시 (extend) ─────────────────────────
      lesson(3, S1, {
        title: '들은 낱말의 그림을 고르고 그림 낱말을 첫 글자로 가르기',
        objective: '들은 낱말(tree, umbrella, wave 등)의 그림 카드를 고르고, 그림 낱말을 첫 글자별로 나누어 알파벳 소리와 글자 이름을 이을 수 있다.',
        illustration: {
          prompt: PROMPT('a tree, an umbrella and a wave sitting on three shelves labeled T U W with a child pointing at one picture and cupping an ear'),
          scene: SC('T  U  W', '들은 낱말은 어느 글자?', [{ motif: 'tree', x: 90, y: 214 }, { motif: 'wave', x: 250, y: 232 }, { motif: 'cloud', x: 390, y: 84 }]),
        },
        stages: [
          INTRO(6, '교실 책상 위에 tree, umbrella, wave 그림 카드를 세 장 놓고 "선생님이 낱말을 말하면 그림을 가리켜 보세요."라고 한다. 세 낱말을 한 번씩 읽어 주고 손가락으로 가리키게 한 뒤 "세 낱말은 각각 어느 글자로 시작할까요?"라고 묻는다. umbrella를 \'엄브렐라\'로 말해 U가 아닌 다른 글자로 시작한다고 말하는 학생에게는 \'엄\'보다 앞에 있는 \'어\' 소리를 확인하게 한다.',
            '선생님이 말하는 낱말의 그림을 가리켜 보고, 그 낱말은 어느 글자로 시작하는지 생각해 봐요.',
            { tool: 'wordcards', options: { mode: 'listen', basket: '들은 것', shuffle: false, say: 'tree', words: VW('tree', 'umbrella') }, sequence: [{ at: {} }, { at: { tree: 0 } }] }),
          MAIN(27,
            ACT('a1', '활동 1. 들은 낱말의 그림 카드 고르기', 13, 'wordcards',
              '"듣기 단추를 누르고 들은 낱말과 같은 그림 카드를 골라요." 소리가 나지 않으면 교사가 낱말을 읽어 준다. 그림의 이름을 우리말로만 떠올려 고르는 학생에게는 영어 낱말을 한 번 더 들려주고 맨 처음 소리를 따라 말하게 한다. 도전 단계는 첫소리가 비슷한 그림이 한 장 더 섞여 있다.',
              '듣기 단추를 눌러 낱말을 듣고, 들은 낱말의 그림 카드 하나를 바구니에 넣어요.',
              LA('listen', '들은 낱말의 맨 처음 소리를 따라 말해 보고, 그 소리로 시작하는 그림을 찾아요.'),
              [
                LS('듣기 단추를 누르고, 들은 낱말의 그림을 골라 보세요.', 'tree', { words: VW('tree', 'sun') }, 'tree', { x: VW('star') }),
                LS('듣기 단추를 누르고, 이번에 들은 낱말의 그림을 골라 보세요.', 'umbrella', { words: VW('umbrella', 'egg') }, 'umbrella', { d: 0.2, x: VW('apple') }),
                LS('듣기 단추를 누르고, 들려준 낱말의 그림을 찾아 보세요.', 'wave', { words: VW('wave', 'moon') }, 'wave', { d: 0.2, x: VW('cloud'),
                  p: ['wave는 어느 글자로 시작할까요?', ['W로 시작해요', 'V로 시작해요'], 0, 'wave는 W로 시작해요. 첫소리를 잘 듣고 글자를 찾으면 돼요.'] }),
                LS('듣기 단추를 누르고, 들려준 낱말의 그림을 찾아 보세요. 비슷한 소리가 있어요.', 'star', { words: VW('star', 'sun') }, 'star', { d: 0.3, x: VW('snow') }),
              ]),
            ACT('a2', '활동 2. 그림 낱말을 첫 글자 칸에 가르기', 14, 'wordcards',
              '"그림 낱말을 말하고, 첫소리와 같은 글자 칸에 모아 놓아요." 그림 낱말을 입으로 말한 뒤 놓게 한다. 같은 칸에 여러 장이 들어가도 된다는 것을 알려 준다. 두 칸 모두에 어울릴 것 같아 망설이는 학생에게는 낱말을 느리게 말하며 처음 소리만 듣게 한다. 마지막 문항은 세 칸이다.',
              '그림 낱말 카드를 첫소리가 같은 글자 칸에 모아 놓아요.',
              LA('sort', '그림 낱말을 말하고 맨 처음 소리를 느껴 보세요. 같은 소리로 시작하는 낱말끼리 한 칸에 모아요.'),
              [
                SO('그림 낱말 네 장을 S 칸과 B 칸에 나누어 보세요.', SL('S', 'B'), [WC('star'), WC('sun'), WC('ball'), WC('book')], { S: ['star', 'sun'], B: ['ball', 'book'] }, { d: 0.15 }),
                SO('그림 낱말 세 장을 C 칸과 D 칸에 나누어 보세요.', SL('C', 'D'), [WC('cat'), WC('cloud'), WC('dog')], { C: ['cat', 'cloud'], D: ['dog'] }, { d: 0.2 }),
                SO('그림 낱말 세 장을 T, U, W 칸에 나누어 보세요.', SL('T', 'U', 'W'), [WC('tree'), WC('umbrella'), WC('wave')], { T: ['tree'], U: ['umbrella'], W: ['wave'] }, { d: 0.25 }),
                SO('그림 낱말 네 장을 A, E, F 칸에 나누어 보세요.', SL('A', 'E', 'F'), [WC('apple'), WC('egg'), WC('fish'), WC('flower')], { A: ['apple'], E: ['egg'], F: ['fish', 'flower'] }, { d: 0.3,
                  p: ['fish와 flower는 같은 칸에 들어갈까요?', ['같은 칸이에요', '다른 칸이에요'], 0, '두 낱말 모두 F로 시작해서 같은 칸에 모아요.'] }),
              ]),
          ),
          WRAP(7, '"오늘 한 칸에 가장 많이 모인 글자는 무엇이었나요?" S 칸이나 F 칸을 예로 들며 대답을 듣고 출구 질문을 푼다. 그림 이름을 우리말로만 말하던 학생은 다음 시간 시작에 영어 낱말 세 개를 소리 내어 말해 보게 한다.',
            [
              { type: 'tool', tool: 'wordcards', options: { mode: 'sort', shuffle: false, slots: SL('M', 'B'), cards: [WC('moon'), WC('ball'), WC('book')] }, prompt: '그림 낱말 세 장을 M 칸과 B 칸으로 나누어 보세요.', target: { sort: { M: ['moon'], B: ['ball', 'book'] } }, difficulty: 0.2 },
              { type: 'choice', prompt: 'umbrella는 어느 글자로 시작할까요?', options: ['E', 'U', 'M'], answer: 1, difficulty: 0.2, explain: 'umbrella는 \'어\'로 시작하고 U 글자와 짝이에요.' },
              MOOD('오늘 낱말 첫소리로 가르기는 어땠나요?'),
            ]),
        ],
        worksheet: WS('들은 낱말과 첫 글자', [
          { type: 'table', prompt: '선생님이 읽어 주는 낱말의 첫 글자를 써 보세요.', columns: ['번호', '첫 글자'], cells: [['1', ''], ['2', ''], ['3', ''], ['4', '']], answer: '교사 읽기 예: 1 tree T / 2 wave W / 3 star S / 4 egg E' },
          FIG('그림 낱말 카드를 첫 글자 칸에 놓으세요.', { mode: 'sort', shuffle: false, slots: SL('S', 'B'), cards: [WC('sun'), WC('ball'), WC('star')] }, 'S: sun, star / B: ball'),
          { type: 'check', prompt: 'T로 시작하는 낱말에 ✓ 하세요.', options: ['tree', 'sun', 'tiger', 'wave'], answer: 'tree, tiger' },
          { type: 'draw', prompt: '좋아하는 그림 낱말 하나와 그 첫 글자를 크게 그려 보세요.' },
        ], '낱말을 입으로 말하고 맨 처음 소리에 귀를 기울여 글자를 찾아요.', [
          { type: 'table', prompt: '선생님이 읽어 주는 낱말의 첫 글자를 써 보세요.', columns: ['번호', '첫 글자'], cells: [['1', ''], ['2', '']], answer: '교사 읽기 예: 1 tree T / 2 egg E' },
          { type: 'choice', prompt: 'wave의 첫 글자에 ○ 하세요.', options: ['W', 'U'], answer: 'W' },
          { type: 'choice', prompt: 'umbrella의 첫 글자에 ○ 하세요.', options: ['U', 'T'], answer: 'U' },
          { type: 'short', prompt: '오늘 들은 낱말 하나를 써 보세요.' },
        ]),
        differentiation: DIFF(
          '그림 고르기와 가르기에서 카드가 적고, 맞게 놓으면 초록 테두리가 생기며 틀리게 놓으면 카드가 되돌아와요.',
          '들은 낱말의 그림을 고르고, 가르기는 다 놓은 뒤 확인을 눌러 스스로 고쳐요.',
          '그림 고르기에 첫소리가 비슷한 그림이 한 장 더 섞여 나오고, 가르기는 카드가 더 많아져요.'),
        teacherNotes: '자주 보이는 어려움: ① 그림 이름을 우리말로 떠올려 영어 첫소리를 놓친다 → 영어 낱말을 두 번 들려주고 첫소리만 따라 말하게 한다. ② umbrella, egg처럼 모음으로 시작하는 낱말의 첫소리를 못 듣는다 → 입을 벌리고 \'어\', \'에\'로 시작하는 느낌을 보인다. ③ wave를 V로 쓴다 → W는 입술을 둥글게 하고 V는 윗니를 아랫입술에 댄다고 알려 준다.',
      }),

      // ───────────────────────── 4차시 (core) ─────────────────────────
      lesson(4, S3, {
        title: '짧은 어구를 따라 손뼉 치며 박수 칠 낱말 가려내기',
        objective: '교사가 읽어 주는 짧은 어구를 따라 손뼉을 치며, 박수를 치는 낱말(●)과 가볍게 붙는 낱말(○)을 나누고 어구마다 박수 수를 셀 수 있다.',
        illustration: {
          prompt: PROMPT('two children clapping their hands in rhythm beside a speech bubble with big dots and small dots above short words'),
          scene: SC('I  LIKE  CATS', '● 박수  ○ 가볍게', [{ motif: 'tree', x: 80, y: 214 }, { motif: 'house', x: 396, y: 218, color: 'sky' }, { motif: 'bird', x: 250, y: 74 }]),
        },
        stages: [
          INTRO(7, '"안녕하세요."를 한 번은 모든 글자에 똑같이, 한 번은 "안-녕-하-세-요"로 리듬을 살려 말하게 한 뒤 영어 I like cats.를 손뼉 두 번(like, cats)으로 읽어 보인다. "영어는 박수 치는 낱말은 또렷하게, 나머지는 작게 붙여 읽어요."라고 말한다. 모든 낱말에 박수를 치는 학생에게는 \'I\'를 작은 소리로 붙여 읽고 \'like\'와 \'cats\'에서만 손뼉을 치게 해서 차이를 느끼게 한다.',
            '말에는 박자가 있어요. 선생님이 읽는 문장을 듣고 손뼉을 어디에서 쳤는지 맞혀 봐요.',
            { tool: 'wordcards', options: { mode: 'sort', shuffle: false, slots: BEAT, cards: ['I', 'like', 'cats.'] }, sequence: [{ at: {} }, { at: { like: 0, 'cats.': 0, I: 1 } }] }),
          MAIN(26,
            ACT('a1', '활동 1. 박수 칠 낱말과 가볍게 읽을 낱말 나누기', 13, 'wordcards',
              '문항마다 어구를 보통 빠르기로 두 번 읽어 준다. 1번 I like cats. 2번 Open the door. 3번 Sit down, please. 4번 See you on Monday. 박수 칠 낱말만 크고 길게 읽는다. "손뼉을 칠 때 소리가 나는 낱말은 ●, 가볍게 지나가는 낱말은 ○칸에 놓아요." the, on처럼 짧은 낱말에도 박수를 치는 학생에게는 그 낱말만 작게 다시 읽어 준다. 도전 단계는 낱말 수가 더 많은 어구이다.',
              '어구를 듣고 손뼉을 치며, 낱말 카드를 박수 칸(●)과 가볍게 칸(○)에 나누어 놓아요.',
              LA('sort', '손뼉을 칠 때 소리가 가장 크고 길게 들린 낱말이 어느 것인지 다시 들으며 찾아보세요.'),
              [
                SO('들려주는 I like cats. 의 낱말 카드를 박수 칸과 가볍게 칸으로 나누어 보세요.', BEAT, TX('I', 'like', 'cats'), { strong: ['like', 'cats'], weak: ['I'] }, { d: 0.15 }),
                SO('들려주는 Open the door. 의 낱말 카드를 박수 칸과 가볍게 칸으로 나누어 보세요.', BEAT, TX('Open', 'the', 'door'), { strong: ['Open', 'door'], weak: ['the'] }, { d: 0.15 }),
                SO('들려주는 Sit down, please. 의 낱말 카드를 박수 칸과 가볍게 칸으로 나누어 보세요.', BEAT, TX('Sit', 'down', 'please'), { strong: ['Sit', 'down'], weak: ['please'] }, { d: 0.25,
                  p: ['짧은 낱말에는 언제나 박수를 칠까요?', ['짧아도 뜻이 중요하면 쳐요', '짧으면 안 쳐요'], 0, '박수는 길이가 아니라 뜻을 담은 낱말에 치는 거예요. down에도 쳐요.'] }),
                SO('들려주는 See you on Monday. 의 낱말 카드를 박수 칸과 가볍게 칸으로 나누어 보세요.', BEAT, TX('See', 'you', 'on', 'Monday'), { strong: ['See', 'Monday'], weak: ['you', 'on'] }, { d: 0.3 }),
              ]),
            ACT('a2', '활동 2. 어구마다 박수 몇 번인지 짝 짓기', 13, 'wordcards',
              '"어구를 듣고 박수를 몇 번 쳤는지 세어 봐요." 읽어 줄 어구는 1번 Hello! (1번), Thank you. (2번), Red, blue, green. (3번), 2번 세트는 Stop! (1번), Good morning. (2번), Eat, drink, sleep. (3번), 3번 세트는 Quiet! (1번), Sit down. (2번), Jump, jump, jump. (3번)이다. 어구의 낱말 수와 박수 수를 같다고 여기는 학생에게는 Thank you.가 두 낱말이지만 you도 약하게 읽는다는 점을 짚는다.',
              '어구를 듣고 박수 수가 같은 칸 옆에 어구 카드를 놓아요.',
              LA('match', '어구를 손뼉 치며 다시 말해 보고, 박수를 친 횟수를 세어 보세요.'),
              [
                MT('읽어 주는 세 어구의 박수 수에 맞게 카드를 놓아 보세요. (1세트)', [{ id: 'one', label: '박수 1번', big: '1' }, { id: 'two', label: '박수 2번', big: '2' }, { id: 'three', label: '박수 3번', big: '3' }], [C('hello', 'Hello!'), C('thanks', 'Thank you.'), C('rgb', 'Red, blue, green.')], { one: 'hello', two: 'thanks', three: 'rgb' }, { d: 0.2 }),
                MT('읽어 주는 세 어구의 박수 수에 맞게 카드를 놓아 보세요. (2세트)', [{ id: 'one', label: '박수 1번', big: '1' }, { id: 'two', label: '박수 2번', big: '2' }, { id: 'three', label: '박수 3번', big: '3' }], [C('stop', 'Stop!'), C('morning', 'Good morning.'), C('eat', 'Eat, drink, sleep.')], { one: 'stop', two: 'morning', three: 'eat' }, { d: 0.25 }),
                MT('읽어 주는 세 어구의 박수 수에 맞게 카드를 놓아 보세요. (3세트)', [{ id: 'one', label: '박수 1번', big: '1' }, { id: 'two', label: '박수 2번', big: '2' }, { id: 'three', label: '박수 3번', big: '3' }], [C('quiet', 'Quiet!'), C('sit', 'Sit down.'), C('jump', 'Jump, jump, jump.')], { one: 'quiet', two: 'sit', three: 'jump' }, { d: 0.3,
                  p: ['낱말이 세 개인 어구는 박수도 꼭 세 번일까요?', ['꼭 그렇지는 않아요', '언제나 세 번이에요'], 0, '박수 수는 낱말 수가 아니라 센 소리가 몇 번인지로 정해져요.'] }),
              ]),
          ),
          WRAP(7, '"오늘 어구에서 가볍게 읽은 낱말은 어떤 낱말이었나요?" I, the, you처럼 짧은 도움 낱말을 말하는 학생의 대답을 칠판에 모으고 출구 질문을 푼다. 박수를 모든 낱말에 친 학생은 다음 시간 시작에 한 어구를 골라 박수 칸만 크게 읽어 보게 한다.',
            [
              { type: 'tool', tool: 'wordcards', options: { mode: 'sort', shuffle: false, slots: BEAT, cards: TX('We', 'play', 'ball') }, prompt: '들려주는 We play ball. 의 낱말 카드를 박수 칸과 가볍게 칸으로 나누어 보세요.', target: { sort: { strong: ['play', 'ball'], weak: ['We'] } }, difficulty: 0.2 },
              { type: 'choice', prompt: '박수를 치는 낱말은 어떤 낱말일까요?', options: ['뜻을 담은 낱말', '짧은 도움 낱말', '맨 앞 낱말'], answer: 0, difficulty: 0.2, explain: '뜻을 담은 낱말(like, cats)은 또렷하게, 짧은 도움 낱말은 가볍게 읽어요.' },
              MOOD('오늘 손뼉 치며 어구 듣기는 어땠나요?'),
            ]),
        ],
        worksheet: WS('어구의 박자', [
          { type: 'table', prompt: '선생님이 읽어 주는 어구를 듣고 박수 친 낱말을 써 보세요.', columns: ['번호', '박수 친 낱말'], cells: [['1', ''], ['2', ''], ['3', '']], answer: '교사 읽기 예: 1 I like cats. like, cats / 2 Open the door. Open, door / 3 See you on Monday. See, Monday' },
          FIG('어구의 낱말 카드를 알맞은 칸에 놓으세요.', { mode: 'sort', shuffle: false, slots: BEAT, cards: TX('Sit', 'down', 'please') }, '● Sit, down / ○ please'),
          { type: 'choice', prompt: 'Thank you. 는 박수를 몇 번 치나요?', options: ['1번', '2번', '3번'], answer: '2번' },
          { type: 'short', prompt: '내가 좋아하는 짧은 어구 하나를 쓰고 박수 칠 곳에 ●를 표시하세요.' },
        ], '어구를 손뼉 치며 다시 말해 보고, 소리가 큰 곳이 박수 칸이에요.', [
          { type: 'table', prompt: '선생님이 읽어 주는 어구를 듣고 박수 친 낱말을 써 보세요.', columns: ['번호', '박수 친 낱말'], cells: [['1', ''], ['2', '']], answer: '교사 읽기 예: 1 I like cats. like, cats / 2 Open the door. Open, door' },
          { type: 'choice', prompt: 'Hello! 는 박수를 몇 번 치나요?', options: ['1번', '2번'], answer: '1번' },
          { type: 'choice', prompt: 'Red, blue, green. 은 박수를 몇 번 치나요?', options: ['2번', '3번'], answer: '3번' },
          { type: 'short', prompt: '오늘 들은 어구 하나를 써 보세요.' },
        ]),
        differentiation: DIFF(
          '나누기에서 맞게 놓으면 초록 테두리가 생기고 틀리게 놓으면 카드가 되돌아와요. 어구는 낱말이 적은 것부터 나와요.',
          '어구를 듣고 카드를 모두 나눈 뒤 확인을 눌러 스스로 고쳐요.',
          '나누기 어구의 낱말이 네 개로 늘고, 박수 수 짝 짓기에 낱말 수와 박수 수가 다른 어구가 섞여 나와요.'),
        teacherNotes: '자주 보이는 어려움: ① 모든 낱말에 박수를 친다 → 가볍게 읽어야 하는 낱말(I, the, on)만 작게 다시 읽어 준다. ② 낱말 수를 박수 수로 센다 → 센 소리가 몇 번 났는지로 센다고 알려 준다. ③ 기기 음성에는 박자가 약해서 단추 대신 교사 읽기가 필요하다 → 문항 번호를 말한 뒤 직접 읽어 준다. 어구는 모두 새로 지은 것이며 노래·챈트 가사를 쓰지 않았다.',
      }),

      // ───────────────────────── 5차시 (practice) ─────────────────────────
      lesson(5, S3, {
        title: '박수 수가 같은 어구 모으고 들은 어구 차례로 놓기',
        objective: '박수 수가 같은 어구끼리 모으고, 들려주는 짧은 어구를 듣고 낱말 카드를 들은 차례대로 놓을 수 있다.',
        illustration: {
          prompt: PROMPT('three groups of speech bubbles on a board labeled with one, two and three dots while a child claps and listens to a speaker'),
          scene: SC('●  ● ●  ● ● ●', '박수 수가 같은 어구끼리', [{ motif: 'star', x: 84, y: 82, s: 0.6 }, { motif: 'tree', x: 404, y: 214 }, { motif: 'house', x: 90, y: 218, color: 'sky' }]),
        },
        stages: [
          INTRO(6, '어제 손뼉을 쳤던 I like cats.를 다시 읽고 "박수가 몇 번이었죠?"라고 묻는다. 이어 Good morning, Mina.를 읽으며 손뼉 수를 세고 두 어구를 칠판의 \'박수 2번\' 줄에 모은다. 어제 배운 박수 수 개념을 낱말 수로 되돌리는 학생에게는 Good morning에서 morn-ing 한 낱말에 박수가 한 번이라는 것을 짚어 준다.',
            '박수 수가 같은 어구끼리 모아 볼 거예요. 먼저 어제 배운 어구의 박수를 세어 봐요.',
            { tool: 'wordcards', options: { mode: 'sort', shuffle: false, slots: [{ id: 'two', label: '박수 2번' }, { id: 'three', label: '박수 3번' }], cards: [C('cats', 'I like cats.'), C('rgb', 'Red, blue, green.')] }, sequence: [{ at: {} }, { at: { cats: 0, rgb: 1 } }] }),
          MAIN(27,
            ACT('a1', '활동 1. 박수 수가 같은 어구끼리 모으기', 13, 'wordcards',
              '문항마다 어구를 하나씩 읽어 주며 손뼉을 치게 한다. 1세트: 1번 Come in. 2번 Stand up! 3번 Look at the board. 4번 Open your book. (박수 2번/3번을 구분) 2세트와 3세트도 같은 방법이다. 읽어 줄 때마다 번호를 말해 학생이 카드의 번호를 찾게 한다. 어구의 길이로만 고르는 학생에게는 어구를 한 번 더 읽어 주고 센 소리만 센다.',
              '어구를 듣고 박수를 세어, 박수 수가 같은 칸에 어구 카드를 모아요.',
              LA('sort', '어구를 손뼉 치며 다시 말해 보고, 센 소리가 몇 번인지 세어 칸을 고르세요.'),
              [
                SO('들려주는 네 어구를 박수 2번 칸과 3번 칸으로 모아 보세요. (1세트)', [{ id: 'two', label: '박수 2번' }, { id: 'three', label: '박수 3번' }], [C('come', 'Come in.'), C('stand', 'Stand up!'), C('look', 'Look at the board.'), C('open', 'Open your book.')], { two: ['come', 'stand', 'open'], three: ['look'] }, { d: 0.2 }),
                SO('들려주는 네 어구를 박수 2번 칸과 3번 칸으로 모아 보세요. (2세트)', [{ id: 'two', label: '박수 2번' }, { id: 'three', label: '박수 3번' }], [C('wash', 'Wash your hands.'), C('go', 'Go home.'), C('read', 'Read a book.'), C('eat', 'Eat some bread.')], { two: ['go', 'read'], three: ['wash', 'eat'] }, { d: 0.25 }),
                SO('들려주는 여섯 어구를 박수 2번 칸과 3번 칸으로 모아 보세요. (3세트)', [{ id: 'two', label: '박수 2번' }, { id: 'three', label: '박수 3번' }], [C('mina', 'Hi, Mina!'), C('milk', 'I like milk.'), C('draw', 'Draw a star.'), C('pick', 'Pick up the ball.'), C('time', 'Time to eat.'), C('see', 'See you soon.')], { two: ['mina', 'milk', 'draw', 'time'], three: ['pick', 'see'] }, { d: 0.35,
                  p: ['긴 어구는 박수도 언제나 많을까요?', ['언제나는 아니에요', '언제나 많아요'], 0, '박수 수는 길이가 아니라 센 소리가 몇 번인지에 따라 달라요.'] }),
              ]),
            ACT('a2', '활동 2. 들은 어구의 낱말 차례대로 놓기', 14, 'wordcards',
              '"듣기 단추를 눌러 어구를 듣고, 들은 차례대로 낱말 카드를 놓아요." 기기 소리가 나지 않으면 교사가 문항 번호를 말한 뒤 읽어 준다. 박수 소리가 큰 낱말만 먼저 놓는 학생에게는 처음부터 하나씩 손가락으로 짚으며 다시 듣게 한다. 문항: 1번 Open the door. 2번 See you on Monday. 3번 Good morning, Mina. 4번 Sit down, please.',
              '듣기 단추를 눌러 어구를 듣고, 낱말 카드를 들은 차례대로 놓아요.',
              LA('order', '어구를 처음부터 다시 들으며 낱말이 하나 나올 때마다 손가락을 하나씩 펴 보세요. 그 순서대로 놓아요.'),
              [
                OR('듣기 단추를 누르고, 들은 어구의 낱말 카드를 차례대로 놓아 보세요.', TX('Open', 'the', 'door'), ['Open', 'the', 'door'], { say: 'Open the door.', d: 0.15 }),
                OR('듣기 단추를 누르고, 이번에 들은 어구의 낱말 카드를 차례대로 놓아 보세요.', TX('See', 'you', 'on', 'Monday'), ['See', 'you', 'on', 'Monday'], { say: 'See you on Monday.', d: 0.25 }),
                OR('듣기 단추를 누르고, 들려준 어구의 낱말 카드를 차례대로 놓아 보세요.', TX('Good', 'morning', 'Mina'), ['Good', 'morning', 'Mina'], { say: 'Good morning, Mina.', d: 0.2 }),
                OR('듣기 단추를 누르고, 들은 어구를 낱말 카드로 만들어 보세요.', TX('Sit', 'down', 'please'), ['Sit', 'down', 'please'], { say: 'Sit down, please.', d: 0.2,
                  p: ['어구를 들을 때 가볍게 읽는 낱말은 어떻게 할까요?', ['함께 들어서 순서에 넣어요', '들리지 않으니 빼요'], 0, '가볍게 읽어도 낱말이에요. 작게 들린 낱말도 순서에 넣어야 해요.'] }),
              ]),
          ),
          WRAP(7, '"오늘 박수 수가 같은 어구를 어떻게 찾았나요?" 센 소리를 세었다는 대답을 칠판에 적고 출구 질문을 푼다. 순서 놓기에서 가볍게 읽은 낱말을 빠뜨린 학생은 다음 시간 시작에 어구를 한 번 더 듣고 모든 낱말에 손가락을 하나씩 펴 보게 한다.',
            [
              { type: 'tool', tool: 'wordcards', options: { mode: 'sort', shuffle: false, slots: [{ id: 'two', label: '박수 2번' }, { id: 'three', label: '박수 3번' }], cards: [C('sun', 'Sunny day.'), C('fish', 'Feed the fish.')] }, prompt: '들려주는 두 어구를 박수 2번 칸과 3번 칸으로 모아 보세요.', target: { sort: { two: ['sun'], three: ['fish'] } }, difficulty: 0.2 },
              { type: 'choice', prompt: '어구의 박수 수는 무엇으로 정해질까요?', options: ['센 소리가 몇 번인지', '글자 수', '낱말 수'], answer: 0, difficulty: 0.2, explain: '박수는 센 소리가 몇 번 나는지 세어요.' },
              MOOD('오늘 어구 듣고 모으기는 어땠나요?'),
            ]),
        ],
        worksheet: WS('박수 수와 어구', [
          { type: 'table', prompt: '선생님이 읽어 주는 어구의 박수 수를 써 보세요.', columns: ['번호', '박수 수'], cells: [['1', ''], ['2', ''], ['3', ''], ['4', '']], answer: '교사 읽기 예: 1 Come in. 2 / 2 Look at the board. 3 / 3 Go home. 2 / 4 Wash your hands. 3' },
          FIG('들은 어구를 박수 수가 같은 칸에 놓으세요.', { mode: 'sort', shuffle: false, slots: [{ id: 'two', label: '박수 2번' }, { id: 'three', label: '박수 3번' }], cards: [C('come', 'Come in.'), C('look', 'Look at the board.')] }, '박수 2번: Come in. / 박수 3번: Look at the board.'),
          { type: 'choice', prompt: 'Sunny day. 의 박수 수에 ○ 하세요.', options: ['1번', '2번', '3번'], answer: '2번' },
          { type: 'short', prompt: '친구와 어구를 하나씩 말해 보고 박수 수를 세어 쓰세요.' },
        ], '어구를 손뼉 치며 다시 말해 보고 센 소리만 세어요.', [
          { type: 'table', prompt: '선생님이 읽어 주는 어구의 박수 수를 써 보세요.', columns: ['번호', '박수 수'], cells: [['1', ''], ['2', '']], answer: '교사 읽기 예: 1 Come in. 2 / 2 Go home. 2' },
          { type: 'choice', prompt: 'Look at the board. 의 박수 수에 ○ 하세요.', options: ['2번', '3번'], answer: '3번' },
          { type: 'choice', prompt: 'Stand up! 의 박수 수에 ○ 하세요.', options: ['2번', '3번'], answer: '2번' },
          { type: 'short', prompt: '오늘 들은 어구 하나를 써 보세요.' },
        ]),
        differentiation: DIFF(
          '모으기에서 맞게 놓으면 초록 테두리가 생기고 틀리게 놓으면 카드가 되돌아와요. 순서 놓기는 낱말이 적은 어구부터 나와요.',
          '어구를 듣고 박수를 세어 카드를 모두 모은 뒤 확인을 눌러 스스로 고쳐요.',
          '모으기 3세트에는 어구가 여섯 장으로 늘고, 순서 놓기에는 낱말이 네 개인 어구가 나와요.'),
        teacherNotes: '자주 보이는 어려움: ① 긴 어구가 박수도 많다고 여긴다 → See you soon.처럼 짧아도 세 번 칠 수 있음을 보여 준다. ② 순서 놓기에서 가볍게 읽은 낱말을 놓친다 → 처음부터 손가락을 하나씩 펴며 다시 듣게 한다. ③ 기기 음성의 박자가 약하다 → 교사가 박수와 함께 읽어 준다. 어구는 모두 이 단원을 위해 새로 지었다.',
      }),

      // ───────────────────────── 6차시 (core) ─────────────────────────
      lesson(6, S3, {
        title: '두 소리마디 낱말에서 센 소리마디 찾아 앞·뒤로 나누기',
        objective: '두 소리마디(음절)로 된 낱말을 듣고 어느 마디가 더 세게 들리는지 찾아, 앞소리가 센 낱말과 뒷소리가 센 낱말로 나눌 수 있다.',
        illustration: {
          prompt: PROMPT('word cards split into two syllable blocks with one block drawn much bigger and bolder, beside a child clapping on the strong block'),
          scene: SC('AP-ple   hel-LO', '센 소리마디는 어디?', [{ motif: 'tree', x: 80, y: 214 }, { motif: 'house', x: 396, y: 218, color: 'sky' }, { motif: 'bird', x: 250, y: 74 }]),
        },
        stages: [
          INTRO(7, '"사과"는 한 번에 읽지만 영어 apple은 \'애-플\' 두 마디로 나뉜다고 알려 주고 손뼉을 두 번 치며 읽는다. 이때 앞의 \'애\'를 더 세고 길게 읽어 "애플이 아니라 AP-ple"이라고 말한다. 이어 hello를 \'헬-로\'로 읽고 뒤 마디를 세게 읽어 보인다. 모든 낱말이 앞 마디를 세게 읽는다고 생각하는 학생에게는 hello의 뒤 마디(LO)를 세게 읽어 두 낱말의 차이를 다시 들려준다.',
            '낱말도 마디로 나뉘어요. apple과 hello를 손뼉 치며 읽고 어느 마디가 더 센지 들어 봐요.',
            { tool: 'wordcards', options: { mode: 'sort', shuffle: false, slots: [{ id: 'front', label: '앞소리가 세요 ●○' }, { id: 'back', label: '뒷소리가 세요 ○●' }], cards: TX('apple', 'hello') }, sequence: [{ at: {} }, { at: { apple: 0, hello: 1 } }] }),
          MAIN(26,
            ACT('a1', '활동 1. 센 소리마디가 앞인 낱말과 뒤인 낱말 나누기', 13, 'wordcards',
              '낱말을 하나씩 두 번 읽어 준다. 앞소리가 센 낱말: apple, paper, monkey, tiger, table, sister. 뒷소리가 센 낱말: hello, guitar, balloon, today, again, police. "낱말을 손뼉 치며 읽어 보고 더 크고 길게 들리는 마디를 찾아요." 기기 음성으로는 강세 차이가 약하므로 교사가 직접 읽는다. 철자를 보고 고르는 학생에게는 눈을 감고 귀로만 다시 듣게 한다.',
              '낱말을 듣고 앞소리가 센 칸과 뒷소리가 센 칸으로 낱말 카드를 나누어 놓아요.',
              LA('sort', '낱말을 손뼉 치며 따라 읽고, 더 크고 길게 들린 마디가 앞인지 뒤인지 생각해 보세요.'),
              [
                SO('들려주는 낱말 네 개를 센 소리마디가 앞인지 뒤인지로 나누어 보세요.', [{ id: 'front', label: '앞소리가 세요 ●○' }, { id: 'back', label: '뒷소리가 세요 ○●' }], TX('apple', 'hello', 'paper', 'guitar'), { front: ['apple', 'paper'], back: ['hello', 'guitar'] }, { d: 0.2 }),
                SO('이번에 들려주는 낱말 네 개도 앞소리와 뒷소리로 나누어 보세요.', [{ id: 'front', label: '앞소리가 세요 ●○' }, { id: 'back', label: '뒷소리가 세요 ○●' }], TX('monkey', 'balloon', 'tiger', 'today'), { front: ['monkey', 'tiger'], back: ['balloon', 'today'] }, { d: 0.25 }),
                SO('들려주는 낱말 여섯 개를 앞소리와 뒷소리로 나누어 보세요.', [{ id: 'front', label: '앞소리가 세요 ●○' }, { id: 'back', label: '뒷소리가 세요 ○●' }], TX('table', 'again', 'sister', 'police', 'apple', 'guitar'), { front: ['table', 'sister', 'apple'], back: ['again', 'police', 'guitar'] }, { d: 0.35,
                  p: ['영어 낱말은 모두 앞 마디가 셀까요?', ['아니요, 뒤가 센 낱말도 있어요', '네, 모두 앞이 세요'], 0, '낱말마다 달라요. hello처럼 뒤 마디가 센 낱말도 많아요.'] }),
              ]),
            ACT('a2', '활동 2. 뒷소리가 센 낱말만 골라 담기', 13, 'wordcards',
              '낱말을 세 개 또는 네 개씩 읽어 주며 뒷소리가 센 낱말만 고르게 한다. 문항 1은 apple, hello, tiger, balloon, 문항 2는 again, table, today, paper, 문항 3은 sister, police, monkey, guitar를 읽는다. "뒤 마디에서 손뼉을 한 번 더 크게 치는 낱말이에요." 한 낱말을 읽을 때 손뼉을 한 번만 치는 학생에게는 마디마다 한 번씩 두 번 치게 한다.',
              '낱말을 듣고 뒷소리가 센 낱말 카드만 바구니에 넣어요.',
              LA('pick', '낱말을 마디마다 손뼉을 치며 읽고, 두 번째 손뼉이 더 크고 긴 낱말을 찾아요.', { basket: '뒷소리가 센 낱말' }),
              [
                PK('들려주는 낱말 중 뒷소리가 센 낱말을 모두 골라 보세요. (1번)', TX('apple', 'hello', 'tiger', 'balloon'), ['hello', 'balloon'], { d: 0.2 }),
                PK('들려주는 낱말 중 뒷소리가 센 낱말을 모두 골라 보세요. (2번)', TX('again', 'table', 'today', 'paper'), ['again', 'today'], { d: 0.25 }),
                PK('들려주는 낱말 중 뒷소리가 센 낱말을 모두 골라 보세요. (3번)', TX('sister', 'police', 'monkey', 'guitar'), ['police', 'guitar'], { d: 0.3 }),
              ]),
          ),
          WRAP(7, '"오늘 센 소리마디가 앞인 낱말과 뒤인 낱말을 한 개씩 말해 볼까요?" 두세 명이 손뼉을 치며 낱말을 말하게 하고 출구 질문을 푼다. 센 마디를 놓친 학생은 다음 시간 시작에 hello와 apple을 번갈아 읽으며 다시 구별한다.',
            [
              { type: 'tool', tool: 'wordcards', options: { mode: 'sort', shuffle: false, slots: [{ id: 'front', label: '앞소리가 세요 ●○' }, { id: 'back', label: '뒷소리가 세요 ○●' }], cards: TX('window', 'repeat') }, prompt: '들려주는 낱말 두 개를 앞소리와 뒷소리로 나누어 보세요.', target: { sort: { front: ['window'], back: ['repeat'] } }, difficulty: 0.25 },
              { type: 'choice', prompt: 'hello는 어느 마디가 더 세게 들릴까요?', options: ['앞 마디', '뒤 마디', '똑같아요'], answer: 1, difficulty: 0.15, explain: 'hel-LO처럼 뒤 마디가 더 세게 들려요.' },
              MOOD('오늘 낱말의 센 소리마디 찾기는 어땠나요?'),
            ]),
        ],
        worksheet: WS('낱말의 센 소리마디', [
          { type: 'table', prompt: '선생님이 읽어 주는 낱말을 듣고 센 마디에 ● 하세요.', columns: ['낱말', '앞 마디 / 뒤 마디'], cells: [['apple', ''], ['hello', ''], ['tiger', ''], ['guitar', '']], answer: 'apple 앞 / hello 뒤 / tiger 앞 / guitar 뒤' },
          FIG('낱말 카드를 센 마디가 앞인 칸과 뒤인 칸에 놓으세요.', { mode: 'sort', shuffle: false, slots: [{ id: 'front', label: '앞소리가 세요 ●○' }, { id: 'back', label: '뒷소리가 세요 ○●' }], cards: TX('table', 'today') }, '앞: table / 뒤: today'),
          { type: 'check', prompt: '뒷소리가 센 낱말에 ✓ 하세요.', options: ['paper', 'again', 'monkey', 'police'], answer: 'again, police' },
          { type: 'short', prompt: '친구에게 낱말 하나를 손뼉 치며 읽어 주고 센 마디가 어디인지 써 보세요.' },
        ], '낱말을 손뼉 치며 두 번 읽고 더 크고 긴 마디를 찾아요.', [
          { type: 'table', prompt: '선생님이 읽어 주는 낱말을 듣고 센 마디에 ● 하세요.', columns: ['낱말', '앞 마디 / 뒤 마디'], cells: [['apple', ''], ['hello', '']], answer: 'apple 앞 / hello 뒤' },
          { type: 'choice', prompt: 'tiger는 어느 마디가 센가요?', options: ['앞 마디', '뒤 마디'], answer: '앞 마디' },
          { type: 'choice', prompt: 'today는 어느 마디가 센가요?', options: ['앞 마디', '뒤 마디'], answer: '뒤 마디' },
          { type: 'short', prompt: '오늘 들은 낱말 하나를 써 보세요.' },
        ]),
        differentiation: DIFF(
          '나누기에서 맞게 놓으면 초록 테두리가 생기고 틀리게 놓으면 카드가 되돌아와요. 낱말이 네 개로 시작해요.',
          '낱말을 듣고 카드를 모두 나눈 뒤 확인을 눌러 스스로 고쳐요.',
          '나누기 낱말이 여섯 개로 늘고, 뒷소리 담기는 낱말 네 개 가운데 두 개를 골라요.'),
        teacherNotes: '자주 보이는 어려움: ① 모든 낱말의 앞 마디를 센 소리로 여긴다 → hello, today, police를 뒤 마디를 세게 읽어 들려준다. ② 글자 수가 많은 마디가 센 마디라고 여긴다 → 길이가 아니라 크고 길게 들리는 마디가 센 마디라고 알려 준다. ③ 기기 음성으로는 강세 차이를 알기 어렵다 → 교사가 손뼉과 함께 직접 읽는다. 학생은 낱말의 철자를 쓰지 않는다.',
      }),

      // ───────────────────────── 7차시 (practice) ─────────────────────────
      lesson(7, S3, {
        title: '세 소리마디 낱말과 -teen·-ty 수에서 센 소리 찾기',
        objective: '세 소리마디로 된 낱말에서 센 마디를 찾아 나누고, sixteen과 sixty처럼 센 소리가 다른 두 수를 듣고 알맞은 수를 고를 수 있다.',
        illustration: {
          prompt: PROMPT('long word cards like banana and elephant cut into three blocks with one block raised higher, beside number cards 16 and 60 with a speaker'),
          scene: SC('ba-NA-na   16 / 60', '센 마디가 뜻을 바꿔요', [{ motif: 'tree', x: 84, y: 214 }, { motif: 'house', x: 396, y: 218, color: 'sky' }, { motif: 'star', x: 250, y: 74, s: 0.6 }]),
        },
        stages: [
          INTRO(6, 'banana를 \'바-나-나\'로 손뼉 세 번 치며 읽고 "가운데 마디 NA가 가장 세요."라고 말한 뒤 elephant는 첫 마디 EL이 센 것을 보여 준다. "세 마디 낱말도 센 마디가 하나예요."라고 알린다. 한 낱말에 센 마디가 여러 개라고 여기는 학생에게는 손뼉을 가장 크게 칠 마디가 하나뿐임을 확인한다. 마지막으로 sixteen과 sixty를 번갈아 읽어 소리의 차이를 느끼게 한다.',
            '긴 낱말에서도 센 마디가 하나 있어요. banana와 elephant를 손뼉 치며 읽고 센 마디를 찾아봐요.',
            { tool: 'wordcards', options: { mode: 'sort', shuffle: false, slots: [{ id: 'first', label: '첫 마디가 세요' }, { id: 'second', label: '가운데 마디가 세요' }], cards: TX('elephant', 'banana') }, sequence: [{ at: {} }, { at: { elephant: 0, banana: 1 } }] }),
          MAIN(27,
            ACT('a1', '활동 1. 세 마디 낱말의 센 마디 찾기', 13, 'wordcards',
              '낱말을 한 번 읽고 손뼉을 세 번 치게 한 뒤 센 마디에서 손뼉을 가장 크게 치도록 한다. 첫 마디가 센 낱말: elephant, family, animal. 가운데 마디가 센 낱말: banana, potato, tomato, computer. "손뼉이 가장 컸던 마디가 어디인지 말해 봐요." 마디 수를 먼저 틀리게 세는 학생에게는 낱말을 느리게 읽으며 입을 열고 닫는 횟수를 세게 한다.',
              '낱말을 듣고 센 마디가 첫 마디인 칸과 가운데 마디인 칸으로 낱말 카드를 나누어 놓아요.',
              LA('sort', '낱말을 손뼉 세 번에 맞춰 읽고, 가장 크고 긴 마디가 첫 번째인지 두 번째인지 생각해 보세요.'),
              [
                SO('들려주는 낱말 세 개를 센 마디에 따라 나누어 보세요.', [{ id: 'first', label: '첫 마디가 세요' }, { id: 'second', label: '가운데 마디가 세요' }], TX('banana', 'elephant', 'potato'), { first: ['elephant'], second: ['banana', 'potato'] }, { d: 0.2 }),
                SO('들려주는 낱말 네 개를 센 마디에 따라 나누어 보세요.', [{ id: 'first', label: '첫 마디가 세요' }, { id: 'second', label: '가운데 마디가 세요' }], TX('family', 'tomato', 'animal', 'computer'), { first: ['family', 'animal'], second: ['tomato', 'computer'] }, { d: 0.3,
                  p: ['세 마디 낱말에서 센 마디는 몇 개일까요?', ['하나예요', '세 개 모두예요'], 0, '센 마디는 하나뿐이고 나머지 두 마디는 가볍게 이어져요.'] }),
                SO('들려주는 낱말 여섯 개를 센 마디에 따라 나누어 보세요.', [{ id: 'first', label: '첫 마디가 세요' }, { id: 'second', label: '가운데 마디가 세요' }], TX('banana', 'family', 'tomato', 'elephant', 'computer', 'animal'), { first: ['family', 'elephant', 'animal'], second: ['banana', 'tomato', 'computer'] }, { d: 0.35 }),
              ]),
            ACT('a2', '활동 2. 센 소리가 다른 두 수 구별해 듣기', 14, 'wordcards',
              '"sixteen은 뒤 마디 teen을 길게, sixty는 앞 마디 six를 세고 짧게 끝나요." 듣기 단추를 누르게 하고 소리가 나지 않으면 교사가 읽어 준다. 앞부분 six만 듣고 고르는 학생에게는 끝소리가 길게 이어지는지 짧게 끊기는지 다시 들려준다. 수 카드는 한자리·두자리 수를 숫자로 보여 주고 영어 글은 보이지 않는다.',
              '듣기 단추를 눌러 수를 듣고, 들은 수 카드 하나를 바구니에 넣어요.',
              LA('listen', '수의 끝소리가 길게 이어지는지 짧게 끊기는지 들어 보고 알맞은 수를 찾으세요.'),
              [
                LS('듣기 단추를 누르고, 들은 수를 골라 보세요.', 'sixteen', { cards: NUM(16, 60) }, '16', { d: 0.2, x: NUM(6) }),
                LS('듣기 단추를 누르고, 이번에 들은 수를 골라 보세요.', 'sixty', { cards: NUM(16, 60) }, '60', { d: 0.2, x: NUM(66) }),
                LS('듣기 단추를 누르고, 들려준 수를 골라 보세요.', 'fifteen', { cards: NUM(15, 50) }, '15', { d: 0.25, x: NUM(5),
                  p: ['-teen으로 끝나는 수는 어느 마디가 길까요?', ['뒤 마디가 길어요', '앞 마디가 길어요'], 0, '-teen 수는 뒤 마디가 길게 이어지고 -ty 수는 앞 마디가 세요.'] }),
                LS('듣기 단추를 누르고, 들려준 수를 찾아 보세요. 비슷한 수가 있어요.', 'forty', { cards: NUM(14, 40) }, '40', { d: 0.3, x: NUM(4) }),
              ]),
          ),
          WRAP(7, '"센 마디가 뜻을 바꾼 낱말은 무엇이었나요?" sixteen과 sixty를 칠판에 숫자로 쓰고 학생이 센 마디를 말하게 한 뒤 출구 질문을 푼다. 수를 틀리게 고른 학생은 다음 시간 시작에 -teen 수와 -ty 수를 번갈아 듣고 손뼉 치며 따라 읽는다.',
            [
              { type: 'tool', tool: 'wordcards', options: { mode: 'listen', basket: '들은 것', shuffle: false, say: 'seventeen', cards: NUM(17, 70) }, prompt: '듣기 단추를 누르고, 들은 수를 골라 보세요.', target: { listen: '17' }, difficulty: 0.2 },
              { type: 'choice', prompt: 'potato에서 가장 센 마디는 어디일까요?', options: ['첫 마디', '가운데 마디', '마지막 마디'], answer: 1, difficulty: 0.25, explain: 'po-TA-to처럼 가운데 마디가 가장 세요.' },
              MOOD('오늘 긴 낱말의 센 소리 찾기는 어땠나요?'),
            ]),
        ],
        worksheet: WS('세 마디 낱말과 수', [
          { type: 'table', prompt: '선생님이 읽어 주는 낱말을 듣고 센 마디에 ● 하세요.', columns: ['낱말', '첫 마디 / 가운데 마디'], cells: [['banana', ''], ['elephant', ''], ['tomato', ''], ['family', '']], answer: 'banana 가운데 / elephant 첫 / tomato 가운데 / family 첫' },
          { type: 'table', prompt: '선생님이 읽어 주는 수를 듣고 숫자로 쓰세요.', columns: ['번호', '들은 수'], cells: [['1', ''], ['2', ''], ['3', '']], answer: '교사 읽기 예: 1 sixteen 16 / 2 forty 40 / 3 fifteen 15' },
          { type: 'check', prompt: '가운데 마디가 센 낱말에 ✓ 하세요.', options: ['banana', 'animal', 'potato', 'elephant'], answer: 'banana, potato' },
          { type: 'choice', prompt: '세 마디 낱말에서 센 마디는 몇 개일까요?', options: ['한 개', '두 개', '세 개'], answer: '한 개' },
        ], '손뼉을 세 번 치며 가장 크게 친 마디를 찾아요. 수는 끝소리가 길게 이어지는지 들어요.', [
          { type: 'table', prompt: '선생님이 읽어 주는 수를 듣고 숫자로 쓰세요.', columns: ['번호', '들은 수'], cells: [['1', ''], ['2', '']], answer: '교사 읽기 예: 1 sixteen 16 / 2 sixty 60' },
          { type: 'choice', prompt: 'banana에서 센 마디는 어디인가요?', options: ['첫 마디', '가운데 마디'], answer: '가운데 마디' },
          { type: 'choice', prompt: 'elephant에서 센 마디는 어디인가요?', options: ['첫 마디', '가운데 마디'], answer: '첫 마디' },
          { type: 'short', prompt: '오늘 들은 긴 낱말 하나를 써 보세요.' },
        ]),
        differentiation: DIFF(
          '나누기와 수 고르기에서 카드가 적고, 맞게 놓으면 초록 테두리가 생기며 틀리게 놓으면 카드가 되돌아와요.',
          '낱말과 수를 듣고 카드를 모두 고른 뒤 확인을 눌러 스스로 고쳐요.',
          '낱말 나누기가 여섯 개로 늘고, 수 고르기에 소리가 닮은 수 카드(6·66·5·4)가 한 장 더 섞여 나와요.'),
        teacherNotes: '자주 보이는 어려움: ① 마디 수를 잘못 센다 → 낱말을 느리게 읽으며 입을 여닫는 횟수를 센다. ② -teen 수와 -ty 수를 앞부분만 듣고 고른다 → 끝소리가 길게 이어지는지 확인하게 한다. ③ 모든 마디에 힘을 준다 → 센 마디 하나만 크게, 나머지는 작게 읽도록 보이고 따라 읽게 한다. 철자 쓰기는 이 차시에서 평가하지 않는다.',
      }),

      // ───────────────────────── 8차시 (core) ─────────────────────────
      lesson(8, S6, {
        title: '자기소개를 듣고 이름·나이·좋아하는 것 하나씩 찾기',
        objective: '"Hi! I\'m Mina. I\'m eight. I like cats."와 같은 짧은 자기소개를 듣고 이름, 나이, 좋아하는 것을 각각 찾을 수 있다.',
        illustration: {
          prompt: PROMPT('a smiling child on a small stage waving hello with a name tag, an age badge and a picture of a cat in a speech bubble'),
          scene: SC('Hi! I\'m Mina.', '이름 · 나이 · 좋아하는 것', [{ motif: 'flower', x: 84, y: 216 }, { motif: 'house', x: 396, y: 218, color: 'sky' }, { motif: 'bird', x: 250, y: 74 }]),
        },
        stages: [
          INTRO(7, '교사가 "Hi! I\'m ○○. I\'m thirty... 아니, 나이는 말하지 않을게요."라고 웃으며 시작하고 이름만 영어로 말한 뒤 "방금 선생님이 알려 준 것은 이름이에요. 자기소개에는 이름 말고 또 어떤 것을 말할까요?"라고 묻는다. 나이와 좋아하는 것이 나오면 칠판에 세 칸(이름, 나이, 좋아하는 것)을 그린다. 소개 전체를 알아들어야 한다고 걱정하는 학생에게는 오늘은 한 가지씩만 골라 들으면 된다고 알려 준다.',
            '자기소개에는 어떤 정보가 들어 있을까요? 이름 말고 또 무엇을 말하는지 떠올려 봐요.',
            { tool: 'wordcards', options: { mode: 'listen', basket: '들은 것', shuffle: false, say: 'Hi! I\'m Mina.', cards: [C('mina', 'Mina'), C('jun', 'Jun')] }, sequence: [{ at: {} }, { at: { mina: 0 } }] }),
          MAIN(26,
            ACT('a1', '활동 1. 자기소개를 듣고 이름과 나이 찾기', 13, 'wordcards',
              '듣기 단추를 한 번 누르게 하고, 소리가 나지 않으면 교사가 "1번, Hi! I\'m Jun. I\'m nine."처럼 읽어 준다. 문항 1은 이름(Mina/Jun), 문항 2는 이름(Yuna/Sara), 문항 3은 나이(eight/nine), 문항 4는 나이(seven/seventeen)를 묻는다. "무엇을 찾을지 먼저 읽고 다시 들으세요." 이름이 두 개 나오는 소개가 아니니 첫 번째로 들리는 이름이 소개하는 사람이라고 알려 준다. seventeen을 seven으로 고르는 학생에게는 끝소리 -teen을 짚어 다시 들려준다.',
              '듣기 단추를 눌러 자기소개를 듣고, 물은 것에 알맞은 카드를 골라요.',
              LA('listen', '무엇을 찾아야 하는지 먼저 문제를 읽고, 그 정보가 나오는 곳에만 귀를 기울여 보세요.'),
              [
                LS('듣기 단추를 누르고, 소개하는 친구의 이름을 골라 보세요.', 'Hi! I\'m Mina. I\'m eight.', { cards: [C('mina', 'Mina'), C('jun', 'Jun')] }, 'mina', { x: [C('tom', 'Tom')] }),
                LS('듣기 단추를 누르고, 소개하는 친구의 이름을 골라 보세요. 이번엔 다른 친구예요.', 'Hello! I\'m Yuna. I like apples.', { cards: [C('yuna', 'Yuna'), C('sara', 'Sara')] }, 'yuna', { d: 0.2, x: [C('hana', 'Hana')] }),
                LS('듣기 단추를 누르고, 친구의 나이를 골라 보세요.', 'Hi! I\'m Jun. I\'m nine years old.', { cards: NUM(8, 9) }, '9', { d: 0.2, x: NUM(10),
                  p: ['나이는 이름 뒤에 나올까요, 앞에 나올까요?', ['소개 순서는 다양해요', '언제나 이름 앞에 나와요'], 0, '자기소개는 이름 뒤에 나이가 올 때가 많지만 순서는 달라질 수 있어요.'] }),
                LS('듣기 단추를 누르고, 친구의 나이를 골라 보세요. 끝소리를 잘 들어요.', 'I\'m seven.', { cards: NUM(7, 17) }, '7', { d: 0.3, x: NUM(6) }),
              ]),
            ACT('a2', '활동 2. 좋아하는 것과 소개 세 정보 짝 짓기', 13, 'wordcards',
              '"I like ___." 다음에 나오는 낱말이 좋아하는 것이에요. 소리 단추를 누르게 하고, 소리가 나지 않으면 교사가 읽어 준다. 문항 1 I like dogs. 문항 2 I like bananas. 문항 3은 세 문장 소개(Hi! I\'m Tom. I\'m ten. I like fish.)를 듣고 그림 카드를 고른다. 이름만 알아듣고 좋아하는 것을 놓치는 학생에게는 like 다음 낱말에서 손가락을 펴 보게 한다.',
              '듣기 단추를 눌러 소개를 듣고, 좋아하는 것의 그림 카드를 골라요.',
              LA('listen', 'like라는 말 바로 뒤에 나오는 낱말에 귀를 기울여 보고 그 그림을 찾으세요.'),
              [
                LS('듣기 단추를 누르고, 친구가 좋아하는 것의 그림을 골라 보세요.', 'I like dogs.', { words: VW('dog', 'cat') }, 'dog', { d: 0.15, x: VW('bird') }),
                LS('듣기 단추를 누르고, 친구가 좋아하는 것의 그림을 골라 보세요. 다른 친구예요.', 'I like bananas.', { words: VW('banana', 'apple') }, 'banana', { d: 0.2, x: VW('egg') }),
                LS('듣기 단추를 누르고, 친구가 좋아하는 것의 그림을 골라 보세요. 소개가 길어졌어요.', 'Hi! I\'m Tom. I\'m ten. I like fish.', { words: VW('fish', 'ball') }, 'fish', { d: 0.3, x: VW('book') }),
              ]),
          ),
          WRAP(7, '"자기소개에서 이름, 나이, 좋아하는 것은 어떤 말 뒤에 나왔나요?" I\'m 뒤에 이름과 나이가, I like 뒤에 좋아하는 것이 나온다는 대답을 칠판에 정리하고 출구 질문을 푼다. 한 가지만 듣고 나머지를 놓친 학생은 다음 시간 시작에 짧은 소개를 세 번 나누어 들으며 각 정보를 찾아본다.',
            [
              { type: 'tool', tool: 'wordcards', options: { mode: 'listen', basket: '들은 것', shuffle: false, say: 'Hello! I\'m Ben. I\'m six.', cards: NUM(6, 8) }, prompt: '듣기 단추를 누르고, 친구의 나이를 골라 보세요.', target: { listen: '6' }, difficulty: 0.2 },
              { type: 'choice', prompt: 'I like cats. 에서 좋아하는 것은 무엇일까요?', options: ['cats', 'I', 'like'], answer: 0, difficulty: 0.15, explain: 'I like 바로 뒤에 나오는 낱말이 좋아하는 것이에요.' },
              MOOD('오늘 자기소개 듣기는 어땠나요?'),
            ]),
        ],
        worksheet: WS('자기소개 듣고 정보 찾기', [
          { type: 'table', prompt: '선생님이 읽어 주는 자기소개를 듣고 빈칸에 알맞게 쓰세요.', columns: ['이름', '나이'], cells: [['', ''], ['', '']], answer: '교사 읽기 예: Hi! I\'m Mina. I\'m eight. → Mina, 8 / Hello! I\'m Jun. I\'m nine. → Jun, 9' },
          FIG('좋아하는 것을 듣고 알맞은 그림을 고르세요.', { mode: 'listen', basket: '들은 것', shuffle: false, say: 'I like apples.', words: VW('apple', 'egg') }, 'apple'),
          { type: 'check', prompt: '"I like cats."에서 알맞은 뜻에 ✓ 하세요.', options: ['고양이를 좋아해요', '고양이가 없어요', '고양이를 싫어해요'], answer: '고양이를 좋아해요' },
          { type: 'draw', prompt: '내가 좋아하는 것을 그리고 "I like ___."에 낱말을 써 보세요.' },
        ], '무엇을 찾을지 먼저 읽고, 그 정보가 나오는 곳만 귀를 기울여 들어요.', [
          { type: 'table', prompt: '선생님이 읽어 주는 자기소개를 듣고 이름을 쓰세요.', columns: ['번호', '이름'], cells: [['1', ''], ['2', '']], answer: '교사 읽기 예: 1 Mina / 2 Jun' },
          { type: 'choice', prompt: '"I\'m eight."에서 나이는 몇 살일까요?', options: ['8살', '18살'], answer: '8살' },
          { type: 'choice', prompt: '"I like dogs."에서 좋아하는 것에 ○ 하세요.', options: ['dogs', 'cats'], answer: 'dogs' },
          { type: 'short', prompt: '내 이름을 영어로 써 보세요.' },
        ]),
        differentiation: DIFF(
          '이름·나이·좋아하는 것 고르기에서 카드가 두 장이고, 맞게 놓으면 초록 테두리가 생기며 틀리게 놓으면 카드가 되돌아와요.',
          '소개를 듣고 카드를 골라요. 다 고른 뒤 확인을 눌러 스스로 고쳐요.',
          '이름·나이·좋아하는 것 고르기에 소리가 비슷한 카드(Tom·10·bird 등)가 한 장 더 섞여 나와요.'),
        teacherNotes: '자주 보이는 어려움: ① 소개 전체를 알아들어야 한다고 걱정한다 → 찾을 정보 하나만 들으면 된다고 알려 준다. ② eight와 eighteen, seven과 seventeen을 바꾼다 → 끝소리 -teen의 길이를 들려준다. ③ I\'m 뒤의 이름과 나이를 구별하지 못한다 → 이름 다음에 숫자 낱말이 나오면 나이라고 짚어 준다. 학생 이름은 가명(민지, 준호 등)만 쓴다.',
      }),

      // ───────────────────────── 9차시 (practice) ─────────────────────────
      lesson(9, S6, {
        title: '두 가지 정보를 함께 듣고 친구와 좋아하는 것 짝 짓기',
        objective: '짧은 자기소개를 듣고 이름과 나이처럼 두 가지 정보를 함께 찾고, 세 친구의 소개를 듣고 친구와 좋아하는 것을 짝 지을 수 있다.',
        illustration: {
          prompt: PROMPT('three children each holding a name card and a small picture of what they like, a ball, a cat and an apple, and a speaker playing a short intro'),
          scene: SC('Mina  Jun  Yuna', '누가 무엇을 좋아할까요?', [{ motif: 'tree', x: 80, y: 214 }, { motif: 'flower', x: 396, y: 216 }, { motif: 'star', x: 250, y: 74, s: 0.6 }]),
        },
        stages: [
          INTRO(6, '어제 배운 세 칸(이름, 나이, 좋아하는 것)을 칠판에 다시 쓰고 "오늘은 한 소개에서 두 가지를 함께 찾아볼 거예요."라고 말한다. 교사가 "I\'m Sara. I\'m eight."를 읽고 이름과 나이를 손가락으로 두 개 펴 보이게 한다. 한 가지를 찾으면 다 끝났다고 생각하는 학생에게는 문제가 \'모두 골라요\'일 때는 카드를 두 장 골라야 한다고 알려 준다.',
            '한 소개에서 두 가지 정보를 함께 찾아볼 거예요. 이름과 나이를 같이 기억해 봐요.',
            { tool: 'wordcards', options: { mode: 'listen', basket: '들은 것', shuffle: false, say: 'I\'m Sara. I\'m eight.', cards: [C('sara', 'Sara'), C('mina', 'Mina'), BG('8'), BG('9')] }, sequence: [{ at: {} }, { at: { sara: 0, 8: 0 } }] }),
          MAIN(27,
            ACT('a1', '활동 1. 한 소개에서 두 가지 정보 함께 찾기', 13, 'wordcards',
              '듣기 단추를 한 번 누르게 하고, 소리가 나지 않으면 교사가 읽어 준다. 문항 1: Hi! I\'m Yuna. I\'m seven. (이름·나이) 문항 2: Hello! I\'m Ben. I like fish. (이름·좋아하는 것) 문항 3: I\'m nine. I like apples. (나이·좋아하는 것) 문항 4: Hi! I\'m Hana. I\'m ten. I like books. (세 가지 가운데 이름과 나이). "문제가 몇 가지를 찾으라고 했는지 먼저 세어 보세요." 한 가지만 고르는 학생에게는 문제 문장에서 \'모두\'라는 말을 짚어 준다.',
              '듣기 단추를 눌러 소개를 듣고, 물은 두 가지에 알맞은 카드를 모두 골라요.',
              LA('listen', '문제가 찾으라고 한 두 가지가 무엇인지 먼저 말해 보고, 소개에서 그 둘이 나오는 곳을 기억해 보세요.'),
              [
                LS('듣기 단추를 누르고, 소개하는 친구의 이름과 나이를 모두 골라 보세요.', 'Hi! I\'m Yuna. I\'m seven.', { cards: [C('yuna', 'Yuna'), C('sara', 'Sara'), BG('7'), BG('9')] }, ['yuna', '7'], { d: 0.25 }),
                LS('듣기 단추를 누르고, 소개하는 친구의 이름과 좋아하는 것을 모두 골라 보세요.', 'Hello! I\'m Ben. I like fish.', { cards: [C('ben', 'Ben'), C('tom', 'Tom'), ...PC('fish', 'ball')] }, ['ben', 'fish'], { d: 0.25 }),
                LS('듣기 단추를 누르고, 소개하는 친구의 나이와 좋아하는 것을 모두 골라 보세요.', 'I\'m nine. I like apples.', { cards: [...NUM(8, 9), ...PC('apple', 'egg')] }, ['9', 'apple'], { d: 0.3,
                  p: ['두 가지를 찾을 때 카드를 몇 장 골라야 할까요?', ['두 장이에요', '한 장이에요'], 0, '찾을 정보가 두 가지이면 카드도 두 장을 골라야 해요.'] }),
                LS('듣기 단추를 누르고, 소개하는 친구의 이름과 나이를 모두 골라 보세요. 소개가 길어요.', 'Hi! I\'m Hana. I\'m ten. I like books.', { cards: [C('hana', 'Hana'), C('mina', 'Mina'), ...NUM(10, 6)] }, ['hana', '10'], { d: 0.35 }),
              ]),
            ACT('a2', '활동 2. 세 친구의 소개를 듣고 좋아하는 것 짝 짓기', 14, 'wordcards',
              '교사가 세 친구의 소개를 차례로 읽어 준다. 1세트: 1번 Hi! I\'m Mina. I like cats. 2번 Hi! I\'m Jun. I like balls. 3번 Hi! I\'m Yuna. I like apples. 2세트: 1번 I\'m Tom. I like fish. 2번 I\'m Sara. I like books. 3번 I\'m Ben. I like pencils. 3세트: 1번 I\'m Hana. I like birds. 2번 I\'m Jun. I like flowers. 3번 I\'m Sara. I like eggs. "친구 이름 옆에 그 친구가 좋아하는 그림을 놓아요." 마지막 소개만 기억하는 학생에게는 한 명씩 읽고 바로 짝을 지어 보게 한다.',
              '세 친구의 소개를 듣고, 이름 칸 옆에 친구가 좋아하는 것의 그림 카드를 놓아요.',
              LA('match', '친구 이름을 들을 때마다 좋아하는 것을 바로 짝 지어 보며 기억하세요.'),
              [
                MT('들려주는 세 친구의 소개를 듣고 좋아하는 것을 짝 지어 보세요. (1세트)', [{ id: 'mina', label: 'Mina' }, { id: 'jun', label: 'Jun' }, { id: 'yuna', label: 'Yuna' }], [WC('cat', '고양이'), WC('ball', '공'), WC('apple', '사과')], { mina: 'cat', jun: 'ball', yuna: 'apple' }, { d: 0.3 }),
                MT('들려주는 세 친구의 소개를 듣고 좋아하는 것을 짝 지어 보세요. (2세트)', [{ id: 'tom', label: 'Tom' }, { id: 'sara', label: 'Sara' }, { id: 'ben', label: 'Ben' }], [WC('fish', '물고기'), WC('book', '책'), WC('pencil', '연필')], { tom: 'fish', sara: 'book', ben: 'pencil' }, { d: 0.35 }),
                MT('들려주는 세 친구의 소개를 듣고 좋아하는 것을 짝 지어 보세요. (3세트)', [{ id: 'hana', label: 'Hana' }, { id: 'jun', label: 'Jun' }, { id: 'sara', label: 'Sara' }], [WC('bird', '새'), WC('flower', '꽃'), WC('egg', '달걀')], { hana: 'bird', jun: 'flower', sara: 'egg' }, { d: 0.35, x: [WC('cat', '고양이')] }),
              ]),
          ),
          WRAP(7, '"세 친구의 소개를 한꺼번에 기억하려면 어떻게 하면 좋을까요?" 한 명씩 바로 짝 짓는다는 대답을 칠판에 적고 출구 질문을 푼다. 순서를 놓친 학생은 다음 시간 시작에 두 친구 소개를 나누어 듣고 짝 지어 보게 한다.',
            [
              { type: 'tool', tool: 'wordcards', options: { mode: 'listen', basket: '들은 것', shuffle: false, say: 'Hi! I\'m Tom. I\'m eight.', cards: [C('tom', 'Tom'), C('ben', 'Ben'), ...NUM(8, 6)] }, prompt: '듣기 단추를 누르고, 소개하는 친구의 이름과 나이를 모두 골라 보세요.', target: { listen: ['tom', '8'] }, difficulty: 0.25 },
              { type: 'choice', prompt: '"I like dogs. I\'m Ben."에서 Ben이 좋아하는 것은 무엇일까요?', options: ['dogs', 'Ben', 'I'], answer: 0, difficulty: 0.2, explain: 'like 뒤에 나온 dogs가 좋아하는 것이에요.' },
              MOOD('오늘 두 가지를 함께 듣는 것은 어땠나요?'),
            ]),
        ],
        worksheet: WS('두 가지 정보 찾기', [
          { type: 'table', prompt: '선생님이 읽어 주는 소개를 듣고 이름과 좋아하는 것을 쓰세요.', columns: ['이름', '좋아하는 것'], cells: [['', ''], ['', ''], ['', '']], answer: '교사 읽기 예: Mina cats / Jun balls / Yuna apples' },
          FIG('좋아하는 것을 듣고 이름과 짝 지으세요.', { mode: 'match', shuffle: true, slots: [{ id: 'mina', label: 'Mina' }, { id: 'jun', label: 'Jun' }], cards: [WC('cat', '고양이'), WC('ball', '공')] }, 'Mina — cat / Jun — ball'),
          { type: 'check', prompt: '"Hi! I\'m Yuna. I\'m seven."에서 알 수 있는 것에 ✓ 하세요.', options: ['이름이 Yuna', '나이가 7살', '고양이를 좋아함'], answer: '이름이 Yuna, 나이가 7살' },
          { type: 'short', prompt: '짝에게 내 이름과 좋아하는 것을 영어로 소개하고 쓴 것을 확인하세요.' },
        ], '문제가 몇 가지를 찾으라고 했는지 먼저 세고, 그만큼 카드를 골라요.', [
          { type: 'table', prompt: '선생님이 읽어 주는 소개를 듣고 이름과 좋아하는 것을 쓰세요.', columns: ['이름', '좋아하는 것'], cells: [['', ''], ['', '']], answer: '교사 읽기 예: Mina cats / Jun balls' },
          { type: 'choice', prompt: '"I like fish."에서 좋아하는 것에 ○ 하세요.', options: ['fish', 'I'], answer: 'fish' },
          { type: 'choice', prompt: '"I\'m nine."에서 나이에 ○ 하세요.', options: ['9살', '19살'], answer: '9살' },
          { type: 'short', prompt: '내 이름을 영어로 써 보세요.' },
        ]),
        differentiation: DIFF(
          '두 가지 찾기에서 카드가 네 장이고, 맞게 놓으면 초록 테두리가 생기며 틀리게 놓으면 카드가 되돌아와요.',
          '소개를 듣고 두 가지를 골라요. 짝 짓기는 다 놓은 뒤 확인을 눌러 스스로 고쳐요.',
          '두 가지 찾기에 소개가 길어져 세 가지 정보가 나오고 비슷한 카드가 섞여 나와요. 짝 짓기도 소개가 더 길어요.'),
        teacherNotes: '자주 보이는 어려움: ① 첫 정보만 고르고 두 번째 정보를 놓친다 → 문제 문장에서 \'모두\'를 짚고 카드 수를 먼저 세게 한다. ② 세 친구의 소개를 한꺼번에 기억하지 못한다 → 한 명씩 바로 짝 짓게 한다. ③ 이름과 나이 카드를 같은 줄에 놓아야 한다고 생각한다 → 카드는 바구니에 모두 담으면 된다고 알려 준다. 소개문은 모두 새로 지은 짧은 문장이다.',
      }),

      // ───────────────────────── 10차시 (core) ─────────────────────────
      lesson(10, S1, {
        title: 'f와 p로 시작하는 짝 낱말을 귀로 가려내기',
        objective: 'fan과 pan, fig와 pig처럼 f와 p 소리만 다른 낱말 쌍을 듣고 알맞은 낱말을 고르며, 들은 낱말을 f 소리 칸과 p 소리 칸으로 나눌 수 있다.',
        illustration: {
          prompt: PROMPT('two mouths side by side, one touching the lower lip with upper teeth and one with lips pressed together, with word cards fan and pan below'),
          scene: SC('fan  /  pan', '입 모양이 달라요', [{ motif: 'flower', x: 84, y: 216 }, { motif: 'house', x: 396, y: 218, color: 'sky' }, { motif: 'bird', x: 250, y: 74 }]),
        },
        stages: [
          INTRO(7, '"입술을 꼭 붙였다가 \'프\' 하고 터뜨려 보세요. 이번에는 윗니를 아랫입술에 살짝 대고 \'프\' 하고 바람을 내보내 보세요."라고 말하며 두 소리를 비교시킨다. 앞의 소리가 p, 뒤의 소리가 f라고 칠판에 쓰고 pan과 fan을 번갈아 읽어 준다. 우리말 \'ㅍ\'으로 두 소리를 똑같이 낸다고 느끼는 학생에게는 거울을 보며 윗니와 아랫입술이 닿는지 확인하게 한다.',
            '입술을 붙였다가 터뜨리는 소리와 윗니를 아랫입술에 대고 내보내는 소리는 달라요. 직접 해 봐요.',
            { tool: 'wordcards', options: { mode: 'listen', basket: '들은 것', shuffle: false, say: 'fan', cards: TX('fan', 'pan') }, sequence: [{ at: {} }, { at: { fan: 0 } }] }),
          MAIN(26,
            ACT('a1', '활동 1. 듣기 단추로 f 소리와 p 소리 낱말 고르기', 13, 'wordcards',
              '듣기 단추를 한 번 누르게 하고 소리가 나지 않으면 교사가 문항 번호를 말한 뒤 읽어 준다. 1번 fan, 2번 pig, 3번 fat, 4번 pine을 한 번씩 읽는다. 우리말로 \'팬\', \'피그\'처럼 한 소리로 듣는 학생에게는 입술 모양을 보며 다시 읽어 준다. 도전 단계에는 첫소리가 같은 낱말(fine, pen)이 한 장 더 섞여 있다.',
              '듣기 단추를 눌러 낱말을 듣고, 들은 낱말 카드 하나를 바구니에 넣어요.',
              LA('listen', '윗니가 아랫입술에 닿는 소리인지, 입술이 닫혔다가 터지는 소리인지 입 모양을 따라 해 보며 들어요.'),
              [
                LS('듣기 단추를 누르고, 들은 낱말을 골라 보세요.', 'fan', { cards: TX('fan', 'pan') }, 'fan', { x: TX('fun') }),
                LS('듣기 단추를 누르고, 이번에 들은 낱말을 골라 보세요.', 'pig', { cards: TX('fig', 'pig') }, 'pig', { d: 0.2, x: TX('big') }),
                LS('듣기 단추를 누르고, 들려준 낱말을 골라 보세요.', 'fat', { cards: TX('fat', 'pat') }, 'fat', { d: 0.25, x: TX('hat'),
                  p: ['fat와 pat는 첫소리가 같을까요?', ['첫소리가 달라요', '똑같아요'], 0, 'fat는 윗니를 아랫입술에 대고, pat는 입술을 닫았다 터뜨려요. 첫소리가 달라서 뜻도 달라요.'] }),
                LS('듣기 단추를 누르고, 들려준 낱말을 골라 보세요.', 'pine', { cards: TX('fine', 'pine') }, 'pine', { d: 0.25, x: TX('nine') }),
              ]),
            ACT('a2', '활동 2. 들은 낱말을 f 소리 칸과 p 소리 칸으로 나누기', 13, 'wordcards',
              '교사가 번호를 말하고 낱말을 한 번씩 읽어 준다. 1세트: 1번 fig, 2번 pan, 3번 fan, 4번 pig. 2세트: 1번 fine, 2번 pine, 3번 pat, 4번 fat. 3세트: 1번 fork, 2번 pork, 3번 pen, 4번 fan, 5번 pin, 6번 fun. 카드에는 번호만 있으니 낱말 글자를 보고 고를 수 없어요. "번호 카드를 입 모양에 맞는 칸에 놓아요." 한 번 읽는 동안 첫소리를 놓친 학생에게는 한 번 더 들려준다.',
              '교사가 읽어 주는 낱말의 첫소리를 듣고, 번호 카드를 f 소리 칸과 p 소리 칸에 나누어 놓아요.',
              LA('sort', '낱말을 말할 때 윗니가 아랫입술에 닿았는지, 입술이 닫혔다가 열렸는지 입 모양을 따라 해 보세요.'),
              [
                SO('교사가 읽는 낱말 네 개의 번호 카드를 f 소리 칸과 p 소리 칸에 나누어 보세요. (1세트)', [{ id: 'f', label: 'f 소리 (입술에 이를 대요)' }, { id: 'p', label: 'p 소리 (입술을 터뜨려요)' }], [C('w1', '1번'), C('w2', '2번'), C('w3', '3번'), C('w4', '4번')], { f: ['w1', 'w3'], p: ['w2', 'w4'] }, { d: 0.25 }),
                SO('교사가 읽는 낱말 네 개의 번호 카드를 f 소리 칸과 p 소리 칸에 나누어 보세요. (2세트)', [{ id: 'f', label: 'f 소리 (입술에 이를 대요)' }, { id: 'p', label: 'p 소리 (입술을 터뜨려요)' }], [C('w1', '1번'), C('w2', '2번'), C('w3', '3번'), C('w4', '4번')], { f: ['w1', 'w4'], p: ['w2', 'w3'] }, { d: 0.3 }),
                SO('교사가 읽는 낱말 여섯 개의 번호 카드를 f 소리 칸과 p 소리 칸에 나누어 보세요. (3세트)', [{ id: 'f', label: 'f 소리 (입술에 이를 대요)' }, { id: 'p', label: 'p 소리 (입술을 터뜨려요)' }], [C('w1', '1번'), C('w2', '2번'), C('w3', '3번'), C('w4', '4번'), C('w5', '5번'), C('w6', '6번')], { f: ['w1', 'w4', 'w6'], p: ['w2', 'w3', 'w5'] }, { d: 0.35 }),
              ]),
          ),
          WRAP(7, '"f 소리와 p 소리는 입 모양이 어떻게 다른가요?" 윗니와 아랫입술, 입술 터뜨리기를 말하는 학생의 대답을 칠판 그림에 옮기고 출구 질문을 푼다. 두 소리를 같게 듣는 학생은 다음 시간 시작에 거울을 보며 fan과 pan을 천천히 번갈아 말해 본다.',
            [
              { type: 'tool', tool: 'wordcards', options: { mode: 'listen', basket: '들은 것', shuffle: false, say: 'pin', cards: TX('fin', 'pin') }, prompt: '듣기 단추를 누르고, 들은 낱말을 골라 보세요.', target: { listen: 'pin' }, difficulty: 0.25 },
              { type: 'choice', prompt: 'f 소리를 낼 때 닿는 곳은 어디일까요?', options: ['윗니와 아랫입술', '두 입술', '혀와 윗잇몸'], answer: 0, difficulty: 0.2, explain: 'f는 윗니를 아랫입술에 살짝 대고 바람을 내보내는 소리예요.' },
              MOOD('오늘 비슷한 소리 가려 듣기는 어땠나요?'),
            ]),
        ],
        worksheet: WS('f와 p 소리 가려 듣기', [
          { type: 'table', prompt: '선생님이 읽어 주는 낱말을 듣고 f 소리이면 f, p 소리이면 p를 쓰세요.', columns: ['번호', 'f / p'], cells: [['1', ''], ['2', ''], ['3', ''], ['4', '']], answer: '교사 읽기 예: 1 fan f / 2 pig p / 3 fat f / 4 pine p' },
          { type: 'choice', prompt: '들은 낱말에 ○ 하세요. (선생님이 fine을 읽어요.)', options: ['fine', 'pine'], answer: 'fine' },
          { type: 'check', prompt: 'p 소리로 시작하는 낱말에 ✓ 하세요. (선생님이 하나씩 읽어요.)', options: ['pan', 'fan', 'pat', 'fat'], answer: 'pan, pat' },
          { type: 'short', prompt: '짝과 fan과 pan을 번갈아 말하고 입 모양이 어떻게 달랐는지 써 보세요.' },
        ], '입 모양을 따라 하며 들어요. 윗니가 아랫입술에 닿으면 f, 입술이 터지면 p예요.', [
          { type: 'table', prompt: '선생님이 읽어 주는 낱말을 듣고 f 소리이면 f, p 소리이면 p를 쓰세요.', columns: ['번호', 'f / p'], cells: [['1', ''], ['2', '']], answer: '교사 읽기 예: 1 fan f / 2 pig p' },
          { type: 'choice', prompt: '들은 낱말에 ○ 하세요. (선생님이 pan을 읽어요.)', options: ['fan', 'pan'], answer: 'pan' },
          { type: 'choice', prompt: '들은 낱말에 ○ 하세요. (선생님이 fig를 읽어요.)', options: ['fig', 'pig'], answer: 'fig' },
          { type: 'short', prompt: '들은 낱말 하나를 써 보세요.' },
        ]),
        differentiation: DIFF(
          '낱말 고르기에서 카드가 두 장이고, 나누기에서 맞게 놓으면 초록 테두리가 생기며 틀리게 놓으면 카드가 되돌아와요.',
          '낱말을 듣고 카드를 고르고, 나누기는 다 놓은 뒤 확인을 눌러 스스로 고쳐요.',
          '낱말 고르기에 첫소리가 비슷한 낱말(fun·big·hat·nine)이 한 장 더 섞이고, 나누기 번호 카드가 여섯 장으로 늘어요.'),
        teacherNotes: '자주 보이는 어려움: ① 우리말 \'ㅍ\' 하나로만 듣는다 → 입 모양 차이를 거울로 확인하게 한다. ② 낱말 끝소리까지 듣느라 첫소리를 놓친다 → 오늘은 첫소리만 들으면 된다고 알려 준다. ③ 카드의 글자를 보고 고른다 → 나누기는 번호 카드만 쓰므로 귀로만 풀게 한다. 한국어 음운 전이: 우리말에는 윗니와 아랫입술이 닿는 소리가 없어서 f를 p로 듣는 일이 많다.',
      }),

      // ───────────────────────── 11차시 (practice) ─────────────────────────
      lesson(11, S1, {
        title: 'r와 l로 시작하는 짝 낱말 듣고 혀 모양 견주기',
        objective: 'rice와 lice, rock과 lock처럼 r와 l 소리만 다른 낱말 쌍을 듣고 알맞은 낱말을 고르며, 들은 낱말을 r 소리 칸과 l 소리 칸으로 나눌 수 있다.',
        illustration: {
          prompt: PROMPT('two mouths showing a curled tongue and a tongue tip touching the upper gum, with word cards rock and lock below'),
          scene: SC('rock  /  lock', '혀 모양이 달라요', [{ motif: 'mountain', x: 90, y: 214 }, { motif: 'house', x: 396, y: 218, color: 'sky' }, { motif: 'bird', x: 250, y: 74 }]),
        },
        stages: [
          INTRO(6, '"혀끝을 윗잇몸에 대고 \'르\' 하고 소리를 내 보세요. 이번에는 혀를 입 안에서 말아 올리고 혀끝은 아무 데도 대지 않고 \'르\' 해 보세요."라고 말해 두 소리를 비교시킨다. 앞이 l, 뒤가 r이라고 쓰고 lock과 rock을 번갈아 읽어 준다. 우리말 \'ㄹ\' 하나로 둘을 모두 소리 낸다고 말하는 학생에게는 혀끝이 윗잇몸에 닿는지 거울로 보고 말하게 한다.',
            '혀끝을 윗잇몸에 대는 소리와 대지 않고 혀를 말아 올리는 소리를 구별해서 말해 봐요.',
            { tool: 'wordcards', options: { mode: 'listen', basket: '들은 것', shuffle: false, say: 'rock', cards: TX('rock', 'lock') }, sequence: [{ at: {} }, { at: { rock: 0 } }] }),
          MAIN(27,
            ACT('a1', '활동 1. 듣기 단추로 r 소리와 l 소리 낱말 고르기', 13, 'wordcards',
              '듣기 단추를 한 번 누르게 하고 소리가 나지 않으면 교사가 읽어 준다. 1번 rice, 2번 lock, 3번 rake, 4번 light를 한 번씩 읽는다. "혀끝이 윗잇몸에 닿았나요?" 하고 먼저 묻고 답하게 한 뒤 고르게 한다. 우리말 \'ㄹ\'로 둘을 똑같이 듣는 학생에게는 소리가 시작될 때 혀가 어떻게 움직였는지 다시 말해 보게 한다.',
              '듣기 단추를 눌러 낱말을 듣고, 들은 낱말 카드 하나를 바구니에 넣어요.',
              LA('listen', '낱말을 말할 때 혀끝이 윗잇몸에 닿는지, 혀가 입 안에서 말리는지 따라 해 보고 들어요.'),
              [
                LS('듣기 단추를 누르고, 들은 낱말을 골라 보세요.', 'rice', { cards: TX('rice', 'lice') }, 'rice', { x: TX('nice') }),
                LS('듣기 단추를 누르고, 이번에 들은 낱말을 골라 보세요.', 'lock', { cards: TX('rock', 'lock') }, 'lock', { d: 0.2, x: TX('luck') }),
                LS('듣기 단추를 누르고, 들려준 낱말을 골라 보세요.', 'rake', { cards: TX('rake', 'lake') }, 'rake', { d: 0.25, x: TX('cake'),
                  p: ['rake와 lake는 한 글자만 다른데 뜻도 같을까요?', ['뜻이 완전히 달라요', '뜻이 같아요'], 0, '소리 하나가 바뀌면 낱말의 뜻이 완전히 달라져요.'] }),
                LS('듣기 단추를 누르고, 들려준 낱말을 골라 보세요.', 'light', { cards: TX('right', 'light') }, 'light', { d: 0.3, x: TX('night') }),
              ]),
            ACT('a2', '활동 2. 들은 낱말을 r 소리 칸과 l 소리 칸으로 나누기', 14, 'wordcards',
              '교사가 번호를 말하고 낱말을 한 번씩 읽어 준다. 1세트: 1번 rock, 2번 lake, 3번 lock, 4번 rake. 2세트: 1번 lice, 2번 right, 3번 rice, 4번 light. 3세트: 1번 red, 2번 let, 3번 run, 4번 leg, 5번 lunch, 6번 read. "번호 카드를 혀 모양에 맞는 칸에 놓아요." 읽는 소리가 끝나기 전에 서둘러 놓는 학생에게는 한 번 더 읽어 주고 첫소리만 듣게 한다.',
              '교사가 읽어 주는 낱말의 첫소리를 듣고, 번호 카드를 r 소리 칸과 l 소리 칸에 나누어 놓아요.',
              LA('sort', '낱말을 천천히 따라 말하며 혀끝이 윗잇몸에 닿는지 확인해 보세요.'),
              [
                SO('교사가 읽는 낱말 네 개의 번호 카드를 r 소리 칸과 l 소리 칸에 나누어 보세요. (1세트)', [{ id: 'r', label: 'r 소리 (혀를 말아요)' }, { id: 'l', label: 'l 소리 (혀끝을 대요)' }], [C('w1', '1번'), C('w2', '2번'), C('w3', '3번'), C('w4', '4번')], { r: ['w1', 'w4'], l: ['w2', 'w3'] }, { d: 0.25 }),
                SO('교사가 읽는 낱말 네 개의 번호 카드를 r 소리 칸과 l 소리 칸에 나누어 보세요. (2세트)', [{ id: 'r', label: 'r 소리 (혀를 말아요)' }, { id: 'l', label: 'l 소리 (혀끝을 대요)' }], [C('w1', '1번'), C('w2', '2번'), C('w3', '3번'), C('w4', '4번')], { r: ['w2', 'w3'], l: ['w1', 'w4'] }, { d: 0.3 }),
                SO('교사가 읽는 낱말 여섯 개의 번호 카드를 r 소리 칸과 l 소리 칸에 나누어 보세요. (3세트)', [{ id: 'r', label: 'r 소리 (혀를 말아요)' }, { id: 'l', label: 'l 소리 (혀끝을 대요)' }], [C('w1', '1번'), C('w2', '2번'), C('w3', '3번'), C('w4', '4번'), C('w5', '5번'), C('w6', '6번')], { r: ['w1', 'w3', 'w6'], l: ['w2', 'w4', 'w5'] }, { d: 0.35 }),
              ]),
          ),
          WRAP(7, '"r 소리를 낼 때 혀는 어떻게 하나요?" 혀를 말아 올리고 어디에도 대지 않는다는 대답을 칠판 그림에 옮기고 출구 질문을 푼다. 두 소리를 같게 듣는 학생은 다음 시간 시작에 lake와 rake를 천천히 번갈아 말해 본다.',
            [
              { type: 'tool', tool: 'wordcards', options: { mode: 'listen', basket: '들은 것', shuffle: false, say: 'read', cards: TX('read', 'lead') }, prompt: '듣기 단추를 누르고, 들은 낱말을 골라 보세요.', target: { listen: 'read' }, difficulty: 0.25 },
              { type: 'choice', prompt: 'l 소리를 낼 때 혀끝은 어디에 닿을까요?', options: ['윗잇몸', '아랫입술', '아무 데도 안 닿아요'], answer: 0, difficulty: 0.2, explain: 'l은 혀끝을 윗잇몸에 대고 내는 소리예요.' },
              MOOD('오늘 r와 l 소리 가려 듣기는 어땠나요?'),
            ]),
        ],
        worksheet: WS('r와 l 소리 가려 듣기', [
          { type: 'table', prompt: '선생님이 읽어 주는 낱말을 듣고 r 소리이면 r, l 소리이면 l을 쓰세요.', columns: ['번호', 'r / l'], cells: [['1', ''], ['2', ''], ['3', ''], ['4', '']], answer: '교사 읽기 예: 1 rice r / 2 lock l / 3 rake r / 4 light l' },
          { type: 'choice', prompt: '들은 낱말에 ○ 하세요. (선생님이 lake를 읽어요.)', options: ['rake', 'lake'], answer: 'lake' },
          { type: 'check', prompt: 'l 소리로 시작하는 낱말에 ✓ 하세요. (선생님이 하나씩 읽어요.)', options: ['lice', 'rice', 'leg', 'red'], answer: 'lice, leg' },
          { type: 'short', prompt: '짝과 rock과 lock을 번갈아 말하고 혀가 어떻게 달랐는지 써 보세요.' },
        ], '혀끝이 윗잇몸에 닿으면 l, 닿지 않고 말리면 r이에요. 입 모양을 따라 하며 들어요.', [
          { type: 'table', prompt: '선생님이 읽어 주는 낱말을 듣고 r 소리이면 r, l 소리이면 l을 쓰세요.', columns: ['번호', 'r / l'], cells: [['1', ''], ['2', '']], answer: '교사 읽기 예: 1 rice r / 2 lock l' },
          { type: 'choice', prompt: '들은 낱말에 ○ 하세요. (선생님이 rice를 읽어요.)', options: ['rice', 'lice'], answer: 'rice' },
          { type: 'choice', prompt: '들은 낱말에 ○ 하세요. (선생님이 lock을 읽어요.)', options: ['rock', 'lock'], answer: 'lock' },
          { type: 'short', prompt: '들은 낱말 하나를 써 보세요.' },
        ]),
        differentiation: DIFF(
          '낱말 고르기에서 카드가 두 장이고, 나누기에서 맞게 놓으면 초록 테두리가 생기며 틀리게 놓으면 카드가 되돌아와요.',
          '낱말을 듣고 카드를 고르고, 나누기는 다 놓은 뒤 확인을 눌러 스스로 고쳐요.',
          '낱말 고르기에 닮은 낱말(nice·luck·cake·night)이 한 장 더 섞이고, 나누기 번호 카드가 여섯 장으로 늘어요.'),
        teacherNotes: '자주 보이는 어려움: ① 우리말 \'ㄹ\' 하나로 듣는다 → 혀끝이 윗잇몸에 닿는지 거울로 보며 말해 보게 한다. ② l과 r이 낱말의 뜻을 바꾼다는 것을 모른다 → rice(밥)와 lice(이)처럼 뜻이 달라지는 쌍을 보여 준다. ③ 나누기에서 번호만 보고 이전 세트의 정답을 가져온다 → 세트마다 읽는 낱말이 다르다고 알려 준다. 한국어 음운 전이: 우리말 \'ㄹ\'은 영어의 l과 r 사이 소리라 둘을 같게 듣기 쉽다.',
      }),

      // ───────────────────────── 12차시 (extend) ─────────────────────────
      lesson(12, S1, {
        title: 'cap·cup, hat·hot처럼 가운데 소리가 다른 낱말 가려 듣기',
        objective: 'cap과 cup, hat과 hot, pen과 pan처럼 가운데 모음만 다른 낱말 쌍을 듣고 알맞은 낱말을 고르며, 들은 낱말을 a 소리 칸과 u 소리 칸으로 나눌 수 있다.',
        illustration: {
          prompt: PROMPT('word cards cap and cup, hat and hot standing in pairs with a child holding a hand to an ear and a speaker playing sounds'),
          scene: SC('cap  /  cup', '가운데 소리가 달라요', [{ motif: 'tree', x: 84, y: 214 }, { motif: 'house', x: 396, y: 218, color: 'sky' }, { motif: 'star', x: 250, y: 74, s: 0.6 }]),
        },
        stages: [
          INTRO(6, '"cap은 입을 크게 벌려 \'캡\', cup은 입을 작게 벌려 \'컵\'이에요."라고 말하며 두 낱말을 입 모양과 함께 읽어 보인다. "두 낱말은 어느 소리가 다른가요?" 하고 묻고 가운데 소리라는 답을 칠판에 쓴다. 우리말 \'ㅐ\'와 \'ㅓ\'로 똑같이 듣는 학생에게는 입을 벌리는 크기를 손가락으로 재어 보게 한다.',
            '낱말의 가운데 소리가 바뀌면 낱말이 달라져요. cap과 cup을 입 모양과 함께 들어 봐요.',
            { tool: 'wordcards', options: { mode: 'listen', basket: '들은 것', shuffle: false, say: 'cap', cards: TX('cap', 'cup') }, sequence: [{ at: {} }, { at: { cap: 0 } }] }),
          MAIN(27,
            ACT('a1', '활동 1. 가운데 소리가 다른 두 낱말 중 들은 것 고르기', 13, 'wordcards',
              '듣기 단추를 한 번 누르게 하고 소리가 나지 않으면 교사가 읽어 준다. 1번 cup, 2번 hot, 3번 pan, 4번 big을 한 번씩 읽는다. "입을 크게 벌렸나요, 작게 벌렸나요?" 하고 먼저 묻게 한다. 첫소리만 듣고 고르는 학생에게는 낱말의 가운데 소리에 귀를 기울이도록 다시 들려준다. 도전 단계에는 끝소리까지 닮은 낱말이 한 장 더 섞여 있다.',
              '듣기 단추를 눌러 낱말을 듣고, 들은 낱말 카드 하나를 바구니에 넣어요.',
              LA('listen', '첫소리는 같으니 낱말 가운데 소리에 귀를 기울여 입을 얼마나 크게 벌렸는지 느껴 보세요.'),
              [
                LS('듣기 단추를 누르고, 들은 낱말을 골라 보세요.', 'cup', { cards: TX('cap', 'cup') }, 'cup', { x: TX('cop') }),
                LS('듣기 단추를 누르고, 이번에 들은 낱말을 골라 보세요.', 'hot', { cards: TX('hat', 'hot') }, 'hot', { d: 0.2, x: TX('hut') }),
                LS('듣기 단추를 누르고, 들려준 낱말을 골라 보세요.', 'pan', { cards: TX('pen', 'pan') }, 'pan', { d: 0.25, x: TX('pin'),
                  p: ['pen과 pan은 어느 소리가 다를까요?', ['가운데 모음이 달라요', '첫소리가 달라요'], 0, '두 낱말은 첫소리와 끝소리가 같고 가운데 모음만 달라요.'] }),
                LS('듣기 단추를 누르고, 들려준 낱말을 골라 보세요.', 'big', { cards: TX('bag', 'big') }, 'big', { d: 0.3, x: TX('bug') }),
              ]),
            ACT('a2', '활동 2. 들은 낱말을 a 소리 칸과 u 소리 칸으로 나누기', 14, 'wordcards',
              '교사가 번호를 말하고 낱말을 한 번씩 읽어 준다. 1세트: 1번 bag, 2번 bus, 3번 cap, 4번 cup. 2세트: 1번 sun, 2번 hat, 3번 run, 4번 man. 3세트: 1번 mug, 2번 bat, 3번 cut, 4번 map, 5번 nut, 6번 fan. "번호 카드를 가운데 소리가 같은 칸에 놓아요." 낱말의 철자를 상상해서 고르려는 학생에게는 입을 벌린 크기로 구별하도록 도와준다.',
              '교사가 읽어 주는 낱말의 가운데 소리를 듣고, 번호 카드를 a 소리 칸과 u 소리 칸에 나누어 놓아요.',
              LA('sort', '낱말의 가운데 소리를 낼 때 입을 크게 벌리는지 작게 벌리는지 따라 해 보세요.'),
              [
                SO('교사가 읽는 낱말 네 개의 번호 카드를 a 소리 칸과 u 소리 칸에 나누어 보세요. (1세트)', [{ id: 'a', label: 'a 소리 (입을 크게)' }, { id: 'u', label: 'u 소리 (입을 작게)' }], [C('w1', '1번'), C('w2', '2번'), C('w3', '3번'), C('w4', '4번')], { a: ['w1', 'w3'], u: ['w2', 'w4'] }, { d: 0.25 }),
                SO('교사가 읽는 낱말 네 개의 번호 카드를 a 소리 칸과 u 소리 칸에 나누어 보세요. (2세트)', [{ id: 'a', label: 'a 소리 (입을 크게)' }, { id: 'u', label: 'u 소리 (입을 작게)' }], [C('w1', '1번'), C('w2', '2번'), C('w3', '3번'), C('w4', '4번')], { a: ['w2', 'w4'], u: ['w1', 'w3'] }, { d: 0.3 }),
                SO('교사가 읽는 낱말 여섯 개의 번호 카드를 a 소리 칸과 u 소리 칸에 나누어 보세요. (3세트)', [{ id: 'a', label: 'a 소리 (입을 크게)' }, { id: 'u', label: 'u 소리 (입을 작게)' }], [C('w1', '1번'), C('w2', '2번'), C('w3', '3번'), C('w4', '4번'), C('w5', '5번'), C('w6', '6번')], { a: ['w2', 'w4', 'w6'], u: ['w1', 'w3', 'w5'] }, { d: 0.35 }),
              ]),
          ),
          WRAP(7, '"cap과 cup은 어느 소리가 다른가요?" 가운데 모음이라는 대답을 칠판에 쓰고 입을 크게·작게 벌려 보게 한 뒤 출구 질문을 푼다. 두 소리를 같게 듣는 학생은 다음 시간 시작에 pan과 pen을 입 모양과 함께 번갈아 말해 본다.',
            [
              { type: 'tool', tool: 'wordcards', options: { mode: 'listen', basket: '들은 것', shuffle: false, say: 'cut', cards: TX('cat', 'cut') }, prompt: '듣기 단추를 누르고, 들은 낱말을 골라 보세요.', target: { listen: 'cut' }, difficulty: 0.25 },
              { type: 'choice', prompt: 'hat과 hot에서 다른 소리는 어디일까요?', options: ['가운데 소리', '첫소리', '끝소리'], answer: 0, difficulty: 0.2, explain: 'h와 t는 같고 가운데 모음 a와 o만 달라요.' },
              MOOD('오늘 가운데 소리 가려 듣기는 어땠나요?'),
            ]),
        ],
        worksheet: WS('가운데 소리 가려 듣기', [
          { type: 'table', prompt: '선생님이 읽어 주는 낱말을 듣고 들은 낱말을 쓰세요.', columns: ['번호', '들은 낱말'], cells: [['1', ''], ['2', ''], ['3', ''], ['4', '']], answer: '교사 읽기 예: 1 cup / 2 hot / 3 pan / 4 big' },
          { type: 'choice', prompt: '들은 낱말에 ○ 하세요. (선생님이 bag을 읽어요.)', options: ['bag', 'big'], answer: 'bag' },
          { type: 'check', prompt: 'u 소리가 들어 있는 낱말에 ✓ 하세요. (선생님이 하나씩 읽어요.)', options: ['bus', 'bag', 'sun', 'map'], answer: 'bus, sun' },
          { type: 'short', prompt: '짝과 cap과 cup을 번갈아 말하고 입을 얼마나 벌렸는지 써 보세요.' },
        ], '낱말 가운데 소리를 낼 때 입을 크게 벌리면 a, 작게 벌리면 u예요.', [
          { type: 'table', prompt: '선생님이 읽어 주는 낱말을 듣고 들은 낱말을 쓰세요.', columns: ['번호', '들은 낱말'], cells: [['1', ''], ['2', '']], answer: '교사 읽기 예: 1 cup / 2 hot' },
          { type: 'choice', prompt: '들은 낱말에 ○ 하세요. (선생님이 cap을 읽어요.)', options: ['cap', 'cup'], answer: 'cap' },
          { type: 'choice', prompt: '들은 낱말에 ○ 하세요. (선생님이 hat을 읽어요.)', options: ['hat', 'hot'], answer: 'hat' },
          { type: 'short', prompt: '들은 낱말 하나를 써 보세요.' },
        ]),
        differentiation: DIFF(
          '낱말 고르기에서 카드가 두 장이고, 나누기에서 맞게 놓으면 초록 테두리가 생기며 틀리게 놓으면 카드가 되돌아와요.',
          '낱말을 듣고 카드를 고르고, 나누기는 다 놓은 뒤 확인을 눌러 스스로 고쳐요.',
          '낱말 고르기에 닮은 낱말(cop·hut·pin·bug)이 한 장 더 섞이고, 나누기 번호 카드가 여섯 장으로 늘어요.'),
        teacherNotes: '자주 보이는 어려움: ① 가운데 모음을 우리말 \'ㅏ\' 하나로 듣는다 → 입을 벌린 크기와 입술 모양을 거울로 비교하게 한다. ② 철자를 보고 고르려 한다 → 나누기 카드는 번호만 있어서 귀로만 풀어야 한다고 알려 준다. ③ 낱말 끝까지 듣다가 가운데 소리를 놓친다 → 가운데 소리를 길게 늘여 읽어 준다. 한국어 음운 전이: 우리말에는 영어 모음처럼 짧은 a, o, u를 구별하는 소리가 부족하다.',
      }),

      // ───────────────────────── 13차시 (core) ─────────────────────────
      lesson(13, S1, {
        title: '들은 낱말의 그림을 찾고 조건에 맞는 카드 뒤집어 보기',
        objective: '들은 낱말(cat, apple, book, bird 등)의 그림 카드를 찾고, 동물·먹는 것·하늘에 있는 것 같은 조건에 맞는 카드를 뒤집어 영어 이름을 확인할 수 있다.',
        illustration: {
          prompt: PROMPT('a row of picture cards showing a cat, an apple, a book and a bird, with a child flipping one card to reveal its English name'),
          scene: SC('cat  apple  book', '그림이 알려 주는 낱말', [{ motif: 'tree', x: 84, y: 214 }, { motif: 'flower', x: 396, y: 216 }, { motif: 'bird', x: 250, y: 74 }]),
        },
        stages: [
          INTRO(6, '그림 카드 네 장(고양이, 사과, 책, 새)을 칠판에 붙이고 "선생님이 영어로 말하는 낱말의 그림을 가리켜 보세요."라고 한다. cat, apple, book, bird를 하나씩 읽어 주며 학생이 그림을 짚게 한다. "처음 듣는 낱말인데도 그림을 보니 알 것 같았나요?"라고 물어 그림이 듣기에 단서가 된다는 것을 이야기한다. 그림을 보지 않고 소리에만 의지하려는 학생에게는 먼저 그림을 훑어본 뒤 듣게 한다.',
            '영어 낱말을 처음 들어도 그림을 보면 짐작할 수 있어요. 선생님이 말하는 낱말의 그림을 가리켜 봐요.',
            { tool: 'wordcards', options: { mode: 'listen', basket: '들은 것', shuffle: false, say: 'cat', words: VW('cat', 'apple') }, sequence: [{ at: {} }, { at: { cat: 0 } }] }),
          MAIN(27,
            ACT('a1', '활동 1. 들은 낱말과 같은 그림 카드 찾기', 13, 'wordcards',
              '그림 카드를 먼저 훑어보게 한 뒤 듣기 단추를 누르게 한다. 소리가 나지 않으면 교사가 낱말을 읽어 준다. 1번 cat, 2번 apple, 3번 book, 4번 bird. "그림에서 단서를 찾고 소리로 확인해요." 소리만 듣고 급히 고르다 틀린 학생에게는 그림 속 모양과 낱말의 첫소리를 연결해 보게 한다. 도전 단계는 첫소리가 비슷한 그림이 한 장 더 섞여 있다.',
              '그림 카드를 훑어보고, 듣기 단추를 눌러 들은 낱말과 같은 그림 카드를 골라요.',
              LA('listen', '카드의 그림을 먼저 살펴보고, 들은 낱말의 첫소리와 그림의 이름이 맞는지 생각해 보세요.'),
              [
                LS('듣기 단추를 누르고, 들은 낱말의 그림을 골라 보세요.', 'cat', { words: VW('cat', 'dog', 'fish') }, 'cat', { d: 0.1, x: VW('bird') }),
                LS('듣기 단추를 누르고, 이번에 들은 낱말의 그림을 골라 보세요.', 'apple', { words: VW('apple', 'banana', 'egg') }, 'apple', { d: 0.15, x: VW('ball') }),
                LS('듣기 단추를 누르고, 들려준 낱말의 그림을 골라 보세요.', 'book', { words: VW('book', 'pencil', 'ball') }, 'book', { d: 0.2, x: VW('banana'),
                  p: ['그림을 먼저 보면 낱말 듣기가 쉬워질까요?', ['쉬워져요', '더 어려워져요'], 0, '그림이 단서가 되어서 처음 듣는 낱말도 짐작하기 쉬워져요.'] }),
                LS('듣기 단추를 누르고, 들려준 낱말의 그림을 골라 보세요.', 'bird', { words: VW('bird', 'tree', 'leaf') }, 'bird', { d: 0.2, x: VW('ball') }),
              ]),
            ACT('a2', '활동 2. 조건에 맞는 그림 카드만 뒤집어 영어 이름 보기', 14, 'wordcards',
              '"그림 카드를 눌러 뒤집으면 영어 이름이 보여요. 조건에 맞는 카드만 뒤집어 봐요." 뒤집을 때마다 영어 이름을 입으로 따라 말하게 한다. 조건에 맞지 않는 카드까지 뒤집는 학생에게는 조건 문장을 다시 읽고 카드를 하나씩 확인하게 한다. 마지막 문항은 하늘에 있는 것을 고르는데, tree를 고르면 \'나무는 땅에 있어요\'라고 짚어 준다.',
              '조건에 맞는 그림 카드만 눌러 뒤집고, 영어 이름을 소리 내어 읽어요.',
              LF('조건을 다시 읽고, 카드의 그림이 조건에 맞는지 하나씩 확인해 보세요.'),
              [
                FP('동물 그림 카드만 뒤집어 영어 이름을 보세요.', VW('cat', 'dog', 'apple', 'ball'), ['cat', 'dog'], { d: 0.15 }),
                FP('먹을 수 있는 그림 카드만 뒤집어 영어 이름을 보세요.', VW('apple', 'banana', 'egg', 'book'), ['apple', 'banana', 'egg'], { d: 0.2 }),
                FP('하늘에서 볼 수 있는 그림 카드만 뒤집어 영어 이름을 보세요.', VW('sun', 'moon', 'star', 'tree', 'house'), ['sun', 'moon', 'star'], { d: 0.25 }),
              ]),
          ),
          WRAP(7, '"그림을 보니 처음 듣는 낱말도 짐작할 수 있었나요?" 그림 단서가 도움이 된 낱말을 말하게 하고 출구 질문을 푼다. 그림을 보지 않고 소리만 듣고 고른 학생은 다음 시간 시작에 그림을 먼저 훑어본 뒤 듣는 순서를 지켜 본다.',
            [
              { type: 'tool', tool: 'wordcards', options: { mode: 'listen', basket: '들은 것', shuffle: false, say: 'fish', words: VW('fish', 'flower', 'house') }, prompt: '듣기 단추를 누르고, 들은 낱말의 그림을 골라 보세요.', target: { listen: 'fish' }, difficulty: 0.2 },
              { type: 'choice', prompt: '처음 듣는 낱말을 짐작할 때 도움이 되는 것은 무엇일까요?', options: ['그림 단서', '글자 수', '낱말의 색깔'], answer: 0, difficulty: 0.15, explain: '그림에서 단서를 찾으면 처음 듣는 낱말도 짐작할 수 있어요.' },
              MOOD('오늘 그림 단서로 낱말 듣기는 어땠나요?'),
            ]),
        ],
        worksheet: WS('그림 단서로 낱말 듣기', [
          FIG('들은 낱말의 그림을 고르세요. (선생님이 cat을 읽어요.)', { mode: 'listen', basket: '들은 것', shuffle: false, say: 'cat', words: VW('cat', 'dog') }, 'cat'),
          { type: 'table', prompt: '선생님이 읽어 주는 낱말을 듣고 알맞은 그림 이름을 쓰세요.', columns: ['번호', '그림 이름'], cells: [['1', ''], ['2', ''], ['3', '']], answer: '교사 읽기 예: 1 apple 사과 / 2 book 책 / 3 bird 새' },
          { type: 'check', prompt: '먹을 수 있는 그림에 ✓ 하세요.', options: ['apple', 'book', 'egg', 'ball'], answer: 'apple, egg' },
          { type: 'draw', prompt: '오늘 들은 낱말 하나를 그림으로 그리고 영어 이름을 써 보세요.' },
        ], '그림을 먼저 훑어본 뒤 낱말을 들어요. 그림이 단서가 돼요.', [
          { type: 'table', prompt: '선생님이 읽어 주는 낱말을 듣고 알맞은 그림 이름을 쓰세요.', columns: ['번호', '그림 이름'], cells: [['1', ''], ['2', '']], answer: '교사 읽기 예: 1 apple 사과 / 2 book 책' },
          { type: 'choice', prompt: '"cat"의 그림에 ○ 하세요.', options: ['고양이', '사과'], answer: '고양이' },
          { type: 'choice', prompt: '"bird"의 그림에 ○ 하세요.', options: ['새', '공'], answer: '새' },
          { type: 'short', prompt: '오늘 알게 된 낱말 하나를 써 보세요.' },
        ]),
        differentiation: DIFF(
          '그림 고르기에서 카드가 적고, 맞게 놓으면 초록 테두리가 생기며 틀리게 놓으면 카드가 되돌아와요. 뒤집기는 영어 이름이 먼저 보여요.',
          '그림을 보고 들은 낱말을 골라요. 뒤집기는 조건에 맞는 카드만 뒤집은 뒤 확인을 눌러요.',
          '그림 고르기에 첫소리가 비슷한 그림 카드가 한 장 더 섞여 나와요.'),
        teacherNotes: '자주 보이는 어려움: ① 그림을 보지 않고 소리만 듣고 급히 고른다 → 그림을 먼저 훑어본 뒤 듣게 한다. ② 우리말 뜻으로만 생각해 영어 소리를 놓친다 → 낱말의 첫소리를 따라 말하게 한다. ③ 조건에 맞지 않는 카드를 뒤집는다 → 조건 문장을 한 번 더 읽고 카드를 하나씩 확인하게 한다. 이 차시의 낱말은 모두 그림으로 뜻을 확인할 수 있는 것만 썼다.',
      }),

      // ───────────────────────── 14차시 (practice) ─────────────────────────
      lesson(14, S1, {
        title: '짧은 문장 속 낱말을 듣고 그림과 이름 짝 짓기',
        objective: '"I see a bird."처럼 짧은 문장 속에서 들은 낱말의 그림을 찾고, 그림과 영어 이름을 짝 지을 수 있다.',
        illustration: {
          prompt: PROMPT('a child under a tree looking at a bird and a flower while a speech bubble says a short sentence, with picture cards below'),
          scene: SC('I see a bird.', '문장 속 낱말 찾기', [{ motif: 'tree', x: 84, y: 214 }, { motif: 'flower', x: 396, y: 216 }, { motif: 'bird', x: 250, y: 74 }]),
        },
        stages: [
          INTRO(6, '교실 창밖이나 그림 카드를 가리키며 "I see a bird."라고 말하고 "선생님이 본 것은 무엇일까요?"라고 묻는다. 문장 전체를 알아듣지 못해도 마지막 낱말 bird를 들으면 그림을 찾을 수 있다고 알려 준다. 문장 속 모든 낱말을 알아들어야 한다고 걱정하는 학생에게는 그림 단서와 마지막 낱말만 들으면 된다고 말한다.',
            '문장을 다 알아듣지 못해도 괜찮아요. 문장 끝에서 들리는 낱말과 그림을 연결해 봐요.',
            { tool: 'wordcards', options: { mode: 'listen', basket: '들은 것', shuffle: false, say: 'I see a bird.', words: VW('bird', 'tree') }, sequence: [{ at: {} }, { at: { bird: 0 } }] }),
          MAIN(27,
            ACT('a1', '활동 1. 짧은 문장 속 낱말의 그림 찾기', 13, 'wordcards',
              '듣기 단추를 한 번 누르게 하고 소리가 나지 않으면 교사가 문장을 읽어 준다. 1번 I see a bird. 2번 This is my pencil. 3번 I like bananas. 4번 Look at the sun. "문장 가운데 그림으로 알 수 있는 낱말이 하나 있어요. 그 낱말을 찾아요." 앞쪽 낱말(I, This)에 귀를 기울이는 학생에게는 문장 끝 낱말에 집중하도록 다시 들려준다.',
              '듣기 단추를 눌러 문장을 듣고, 문장 속 낱말의 그림 카드 하나를 골라요.',
              LA('listen', '문장에서 그림으로 알 수 있는 낱말이 어디쯤 나오는지 생각하며 다시 들어 보세요.'),
              [
                LS('듣기 단추를 누르고, 문장에서 들은 낱말의 그림을 골라 보세요.', 'I see a bird.', { words: VW('bird', 'fish', 'leaf') }, 'bird', { d: 0.15, x: VW('tree') }),
                LS('듣기 단추를 누르고, 이번 문장에서 들은 낱말의 그림을 골라 보세요.', 'This is my pencil.', { words: VW('pencil', 'book') }, 'pencil', { d: 0.2, x: VW('ball') }),
                LS('듣기 단추를 누르고, 문장에서 들은 낱말의 그림을 골라 보세요.', 'I like bananas.', { words: VW('banana', 'apple') }, 'banana', { d: 0.25, x: VW('egg'),
                  p: ['문장을 다 알아듣지 못해도 그림을 찾을 수 있을까요?', ['핵심 낱말만 들어도 찾을 수 있어요', '모든 낱말을 알아야 해요'], 0, '그림으로 알 수 있는 핵심 낱말 하나만 들어도 문장의 뜻을 짐작할 수 있어요.'] }),
                LS('듣기 단추를 누르고, 문장에서 들은 낱말의 그림을 골라 보세요.', 'Look at the sun.', { words: VW('sun', 'moon') }, 'sun', { d: 0.25, x: VW('star') }),
              ]),
            ACT('a2', '활동 2. 그림과 영어 이름 짝 짓기', 14, 'wordcards',
              '"왼쪽 그림 옆에 알맞은 영어 이름 카드를 놓아요." 카드를 놓기 전에 그림의 이름을 입으로 말해 보게 한다. 철자가 비슷한 카드(bird/ball)로 헷갈리는 학생에게는 첫소리를 한 번 더 말해 보게 한다. 마지막 문항은 이름 카드가 한 장 더 많다.',
              '그림 옆에 알맞은 영어 이름 카드를 놓아요.',
              LA('match', '그림의 이름을 입으로 말해 보고, 첫소리가 같은 영어 카드를 찾으세요.'),
              [
                MW('그림 옆에 알맞은 영어 이름 카드를 놓아 보세요. (동물)', VW('cat', 'dog', 'bird'), { d: 0.15 }),
                MW('그림 옆에 알맞은 영어 이름 카드를 놓아 보세요. (하늘의 것)', VW('sun', 'moon', 'star'), { d: 0.2 }),
                MW('그림 옆에 알맞은 영어 이름 카드를 놓아 보세요. (먹는 것)', VW('apple', 'banana', 'egg'), { d: 0.25 }),
              ]),
          ),
          WRAP(7, '"문장 속에서 그림으로 알 수 있는 낱말을 찾는 방법을 말해 볼까요?" 문장 끝에서 들리는 낱말에 집중한다는 대답을 칠판에 적고 출구 질문을 푼다. 문장 앞쪽만 듣고 고른 학생은 다음 시간 시작에 문장을 천천히 두 번 듣고 끝 낱말에 손가락을 펴 보게 한다.',
            [
              { type: 'tool', tool: 'wordcards', options: { mode: 'listen', basket: '들은 것', shuffle: false, say: 'I have a ball.', words: VW('ball', 'cat') }, prompt: '듣기 단추를 누르고, 문장에서 들은 낱말의 그림을 골라 보세요.', target: { listen: 'ball' }, difficulty: 0.2 },
              { type: 'choice', prompt: '"I see a flower."에서 그림으로 알 수 있는 낱말은 무엇일까요?', options: ['flower', 'see', 'I'], answer: 0, difficulty: 0.15, explain: 'flower는 그림으로 뜻을 알 수 있는 핵심 낱말이에요.' },
              MOOD('오늘 문장 속 낱말 찾기는 어땠나요?'),
            ]),
        ],
        worksheet: WS('문장 속 낱말과 그림', [
          FIG('들은 문장 속 낱말의 그림을 고르세요. (선생님이 I see a bird.를 읽어요.)', { mode: 'listen', basket: '들은 것', shuffle: false, say: 'I see a bird.', words: VW('bird', 'fish') }, 'bird'),
          { type: 'table', prompt: '선생님이 읽어 주는 문장을 듣고 들은 낱말의 그림 이름을 쓰세요.', columns: ['번호', '그림 이름'], cells: [['1', ''], ['2', ''], ['3', '']], answer: '교사 읽기 예: 1 This is my pencil. pencil / 2 I like bananas. banana / 3 Look at the sun. sun' },
          { type: 'check', prompt: '"I like apples."에서 알 수 있는 것에 ✓ 하세요.', options: ['사과를 좋아해요', '사과를 먹었어요', '공을 가지고 있어요'], answer: '사과를 좋아해요' },
          { type: 'draw', prompt: '"I see a ___."에 어울리는 그림을 그려 보세요.' },
        ], '문장을 다 알아듣지 못해도 돼요. 그림으로 알 수 있는 핵심 낱말에 귀를 기울여요.', [
          { type: 'table', prompt: '선생님이 읽어 주는 문장을 듣고 들은 낱말의 그림 이름을 쓰세요.', columns: ['번호', '그림 이름'], cells: [['1', ''], ['2', '']], answer: '교사 읽기 예: 1 This is my pencil. pencil / 2 Look at the sun. sun' },
          { type: 'choice', prompt: '"I like bananas."의 그림에 ○ 하세요.', options: ['바나나', '사과'], answer: '바나나' },
          { type: 'choice', prompt: '"Look at the sun."의 그림에 ○ 하세요.', options: ['해', '달'], answer: '해' },
          { type: 'short', prompt: '오늘 알게 된 낱말 하나를 써 보세요.' },
        ]),
        differentiation: DIFF(
          '그림 고르기에서 카드가 적고, 짝 짓기에서 맞게 놓으면 초록 테두리가 생기며 틀리게 놓으면 카드가 되돌아와요.',
          '문장을 듣고 그림을 고르고, 짝 짓기는 다 놓은 뒤 확인을 눌러 스스로 고쳐요.',
          '그림 고르기에 첫소리가 비슷한 그림 카드가 한 장 더 섞여 나와요.'),
        teacherNotes: '자주 보이는 어려움: ① 문장 앞쪽 낱말에만 귀를 기울인다 → 문장 끝 낱말에 집중하게 한다. ② 모든 낱말을 알아들어야 한다고 걱정한다 → 핵심 낱말 하나만 들어도 된다고 알려 준다. ③ 그림 이름을 우리말로만 떠올린다 → 영어 이름의 첫소리를 따라 말하게 한다. 문장은 모두 그림으로 뜻을 알 수 있도록 새로 지었다.',
      }),

      // ───────────────────────── 15차시 (core) ─────────────────────────
      lesson(15, S3, {
        title: '끝이 올라가는지 내려가는지로 묻는 말과 알리는 말 가르기',
        objective: '문장의 끝이 올라가는(↗) 묻는 말과 내려가는(↘) 알리는 말을 듣고 구별하여, 들은 문장을 묻는 말 칸과 알리는 말 칸으로 나눌 수 있다.',
        illustration: {
          prompt: PROMPT('two speech bubbles, one with an arrow curving up at the end and one with an arrow curving down at the end, held by two children'),
          scene: SC('Is it a cat? ↗', 'It is a cat. ↘', [{ motif: 'tree', x: 80, y: 214 }, { motif: 'house', x: 396, y: 218, color: 'sky' }, { motif: 'bird', x: 250, y: 74 }]),
        },
        stages: [
          INTRO(7, '교사가 같은 말을 두 번 한다. 한 번은 "Yes." 하고 끝을 내려 말하고, 또 한 번은 "Yes?" 하고 끝을 올려 말한다. "어느 쪽이 \'그래?\' 하고 묻는 말일까요?"라고 묻고 끝이 올라가면 물음이라는 것을 알린다. 이어 우리말 "밥 먹었어."와 "밥 먹었어?"로 같은 방법을 보여 준다. 글자의 물음표만 보고 판단하는 학생에게는 눈을 감고 소리의 끝만 들어 보게 한다.',
            '같은 말도 끝을 올리면 묻는 말, 내리면 알리는 말이 돼요. 눈을 감고 소리의 끝에 집중해 봐요.',
            { tool: 'wordcards', options: { mode: 'sort', shuffle: false, slots: AT, cards: [C('q', 'Is it a cat?'), C('s', 'It is a cat.')] }, sequence: [{ at: {} }, { at: { q: 0, s: 1 } }] }),
          MAIN(26,
            ACT('a1', '활동 1. 문장의 끝소리 듣고 ↗와 ↘ 고르기', 13, 'wordcards',
              '듣기 단추를 한 번 누르게 하고 소리가 나지 않으면 교사가 문장을 읽어 준다. 1번 Is it a cat? 2번 It is a cat. 3번 Do you like apples? 4번 I like apples. "끝에서 목소리가 올라갔나요, 내려갔나요?" 하고 먼저 물어 손으로 곡선을 그려 보게 한다. 첫 낱말이 Is, Do인지만 보고 고르는 학생에게는 낱말은 가리고 소리의 끝만 듣게 한다.',
              '듣기 단추를 눌러 문장을 듣고, 끝이 올라갔으면 ↗, 내려갔으면 ↘ 카드를 골라요.',
              LA('listen', '문장의 마지막 낱말에서 목소리가 올라갔는지 내려갔는지 손으로 곡선을 그리며 들어 보세요.'),
              [
                LS('듣기 단추를 누르고, 문장의 끝이 올라가는지 내려가는지 골라 보세요.', 'Is it a cat?', { cards: [BG('up', '↗'), BG('down', '↘')] }, 'up', { d: 0.15 }),
                LS('듣기 단추를 누르고, 이번 문장의 끝이 올라가는지 내려가는지 골라 보세요.', 'It is a cat.', { cards: [BG('up', '↗'), BG('down', '↘')] }, 'down', { d: 0.15 }),
                LS('듣기 단추를 누르고, 문장의 끝소리를 골라 보세요.', 'Do you like apples?', { cards: [BG('up', '↗'), BG('down', '↘')] }, 'up', { d: 0.2,
                  p: ['묻는 말은 끝이 어떻게 될까요?', ['끝이 올라가요', '끝이 내려가요'], 0, '영어의 \'네/아니요\'로 답하는 묻는 말은 끝이 올라가요.'] }),
                LS('듣기 단추를 누르고, 이번 문장의 끝소리를 골라 보세요.', 'I like apples.', { cards: [BG('up', '↗'), BG('down', '↘')] }, 'down', { d: 0.2 }),
              ]),
            ACT('a2', '활동 2. 들은 문장을 묻는 말 칸과 알리는 말 칸으로 나누기', 13, 'wordcards',
              '교사가 번호를 말하고 문장을 한 번씩 읽어 준다. 1세트: 1번 Are you Mina? 2번 I am Mina. 3번 Is this a book? 4번 This is a book. 2세트: 1번 It is red. 2번 Is it red? 3번 I see a bird. 4번 Do you see a bird? 3세트: 1번 You like fish. 2번 Do you like fish? 3번 It is blue. 4번 Is it blue? 5번 She is my friend. 6번 Is she your friend? 카드에는 번호만 있어서 글자를 볼 수 없다. 번호 카드를 올라간 말과 내려간 말로 나눈다. 마지막 문장의 끝 말투를 놓치는 학생에게는 한 번 더 읽어 준다.',
              '교사가 읽어 주는 문장의 끝소리를 듣고, 번호 카드를 묻는 말 칸과 알리는 말 칸에 나누어 놓아요.',
              LA('sort', '문장이 끝날 때 목소리가 올라갔는지 내려갔는지 손으로 곡선을 그리며 들어 보세요.'),
              [
                SO('교사가 읽는 문장 네 개의 번호 카드를 묻는 말 칸과 알리는 말 칸에 나누어 보세요. (1세트)', AT, [C('w1', '1번'), C('w2', '2번'), C('w3', '3번'), C('w4', '4번')], { ask: ['w1', 'w3'], tell: ['w2', 'w4'] }, { d: 0.25 }),
                SO('교사가 읽는 문장 네 개의 번호 카드를 묻는 말 칸과 알리는 말 칸에 나누어 보세요. (2세트)', AT, [C('w1', '1번'), C('w2', '2번'), C('w3', '3번'), C('w4', '4번')], { ask: ['w2', 'w4'], tell: ['w1', 'w3'] }, { d: 0.3 }),
                SO('교사가 읽는 문장 여섯 개의 번호 카드를 묻는 말 칸과 알리는 말 칸에 나누어 보세요. (3세트)', AT, [C('w1', '1번'), C('w2', '2번'), C('w3', '3번'), C('w4', '4번'), C('w5', '5번'), C('w6', '6번')], { ask: ['w2', 'w4', 'w6'], tell: ['w1', 'w3', 'w5'] }, { d: 0.35 }),
              ]),
          ),
          WRAP(7, '"묻는 말과 알리는 말은 소리의 끝이 어떻게 달랐나요?" 손으로 곡선을 그리며 대답하게 하고 출구 질문을 푼다. 문장의 첫 낱말만 보고 고른 학생은 다음 시간 시작에 문장을 눈을 감고 다시 들어 본다.',
            [
              { type: 'tool', tool: 'wordcards', options: { mode: 'listen', basket: '들은 것', shuffle: false, say: 'Is it a dog?', cards: [BG('up', '↗'), BG('down', '↘')] }, prompt: '듣기 단추를 누르고, 이 문장이 묻는 말인지 알리는 말인지 끝소리로 골라 보세요.', target: { listen: 'up' }, difficulty: 0.2 },
              { type: 'choice', prompt: '알리는 말은 문장 끝에서 목소리가 어떻게 될까요?', options: ['내려가요', '올라가요', '똑같아요'], answer: 0, difficulty: 0.15, explain: '알리는 말은 끝에서 목소리가 내려가요.' },
              MOOD('오늘 문장 끝소리 구별하기는 어땠나요?'),
            ]),
        ],
        worksheet: WS('묻는 말과 알리는 말', [
          { type: 'table', prompt: '선생님이 읽어 주는 문장의 끝이 올라가면 ↗, 내려가면 ↘를 쓰세요.', columns: ['번호', '↗ / ↘'], cells: [['1', ''], ['2', ''], ['3', ''], ['4', '']], answer: '교사 읽기 예: 1 Is it red? ↗ / 2 It is red. ↘ / 3 Are you Jun? ↗ / 4 I am Jun. ↘' },
          FIG('들은 문장의 번호 카드를 알맞은 칸에 놓으세요.', { mode: 'sort', shuffle: false, slots: AT, cards: [C('w1', '1번'), C('w2', '2번')] }, '1번 Is it a cat? → 묻는 말 / 2번 It is a cat. → 알리는 말'),
          { type: 'choice', prompt: '끝이 올라가는 말은 어떤 말일까요?', options: ['묻는 말', '알리는 말'], answer: '묻는 말' },
          { type: 'short', prompt: '짝과 한 문장을 올려서도, 내려서도 말해 보고 어떻게 달랐는지 써 보세요.' },
        ], '문장 끝에서 목소리가 올라가는지 내려가는지 손으로 곡선을 그리며 들어요.', [
          { type: 'table', prompt: '선생님이 읽어 주는 문장의 끝이 올라가면 ↗, 내려가면 ↘를 쓰세요.', columns: ['번호', '↗ / ↘'], cells: [['1', ''], ['2', '']], answer: '교사 읽기 예: 1 Is it red? ↗ / 2 It is red. ↘' },
          { type: 'choice', prompt: '"Are you Mina?"는 끝이 어떻게 들릴까요? (선생님이 읽어요.)', options: ['올라가요', '내려가요'], answer: '올라가요' },
          { type: 'choice', prompt: '"I am Mina."는 끝이 어떻게 들릴까요? (선생님이 읽어요.)', options: ['올라가요', '내려가요'], answer: '내려가요' },
          { type: 'short', prompt: '오늘 들은 묻는 말 하나를 써 보세요.' },
        ]),
        differentiation: DIFF(
          '↗·↘ 고르기에서 맞게 놓으면 초록 테두리가 생기고 틀리게 놓으면 카드가 되돌아와요. 나누기는 번호 카드가 네 장이에요.',
          '문장을 듣고 ↗·↘를 고르고, 나누기는 다 놓은 뒤 확인을 눌러 스스로 고쳐요.',
          '나누기 번호 카드가 여섯 장으로 늘고 같은 말이 올려서도 내려서도 나와요.'),
        teacherNotes: '자주 보이는 어려움: ① 첫 낱말(Is, Do)이나 물음표로만 판단한다 → 눈을 감고 소리의 끝만 듣게 한다. ② 목소리의 올라감이 약해 구별하지 못한다 → 교사가 과장해서 읽고 손으로 곡선을 그려 보인다. ③ 우리말 억양과 헷갈린다 → 우리말 \'밥 먹었어?\'의 올라감과 같다고 연결해 준다. 기기 음성이 억양을 충분히 살리지 못하면 교사가 직접 읽는다.',
      }),

      // ───────────────────────── 16차시 (practice) ─────────────────────────
      lesson(16, S3, {
        title: '들은 말의 끝소리를 보고 알맞게 대답하는 카드 고르기',
        objective: '끝이 올라가는 묻는 말에는 Yes, it is. 같은 대답을, 끝이 내려가는 알리는 말에는 Oh, nice! 같은 반응을 고르고, 문장을 끝소리에 따라 나눌 수 있다.',
        illustration: {
          prompt: PROMPT('two children talking, one asking with a curving up arrow and the other answering with a smiling speech bubble, with answer cards below'),
          scene: SC('Is it red? → Yes!', 'It is red. → Oh!', [{ motif: 'flower', x: 84, y: 216 }, { motif: 'house', x: 396, y: 218, color: 'sky' }, { motif: 'bird', x: 250, y: 74 }]),
        },
        stages: [
          INTRO(6, '교사가 "Is it a book?"을 끝을 올려 읽고 "이 말에는 어떻게 대답할까요?"라고 묻는다. "Yes, it is."와 "Oh, nice!" 두 대답을 보여 주고 어느 쪽이 알맞은지 고르게 한다. 이어 "It is a book."을 끝을 내려 읽고 같은 질문을 한다. 말의 내용만 듣고 억양을 놓치는 학생에게는 \'묻는 말에는 대답, 알리는 말에는 반응\'이라는 짝을 칠판에 적어 알려 준다.',
            '묻는 말에는 대답을 하고, 알리는 말에는 "그렇구나!" 같은 반응을 해요. 선생님 말을 듣고 알맞은 말을 골라 봐요.',
            { tool: 'wordcards', options: { mode: 'listen', basket: '들은 것', shuffle: false, say: 'Is it a book?', cards: [C('yes', 'Yes, it is.'), C('nice', 'Oh, nice!')] }, sequence: [{ at: {} }, { at: { yes: 0 } }] }),
          MAIN(27,
            ACT('a1', '활동 1. 들은 말에 어울리는 대답이나 반응 고르기', 13, 'wordcards',
              '듣기 단추를 한 번 누르게 하고 소리가 나지 않으면 교사가 읽어 준다. 1번 Is this your book? 2번 It is my book. 3번 Are you hungry? 4번 I am hungry. 묻는 말(1, 3)에는 대답 카드를, 알리는 말(2, 4)에는 반응 카드를 고른다. 문장의 내용에만 귀를 기울이는 학생에게는 목소리의 끝이 올라갔는지 먼저 말해 보게 한다.',
              '듣기 단추를 눌러 말을 듣고, 어울리는 대답이나 반응 카드를 골라요.',
              LA('listen', '문장이 끝날 때 목소리가 올라갔는지 먼저 정하고, 대답을 해야 하는지 반응을 해야 하는지 생각해 보세요.'),
              [
                LS('듣기 단추를 누르고, 책에 대해 물은 말에 어울리는 대답 카드를 골라 보세요.', 'Is this your book?', { cards: [C('yes', 'Yes, it is.'), C('nice', 'Oh, I see.')] }, 'yes', { d: 0.2, x: [C('hi', 'Hello!')] }),
                LS('듣기 단추를 누르고, 책이 내 것이라고 알린 말에 어울리는 반응 카드를 골라 보세요.', 'It is my book.', { cards: [C('yes', 'Yes, it is.'), C('nice', 'Oh, I see.')] }, 'nice', { d: 0.2, x: [C('hi', 'Hello!')] }),
                LS('듣기 단추를 누르고, 배가 고픈지 물은 말에 어울리는 대답 카드를 골라 보세요.', 'Are you hungry?', { cards: [C('yes', 'Yes, I am.'), C('see', 'Oh, I see.')] }, 'yes', { d: 0.25,
                  p: ['묻는 말에는 어떻게 할까요?', ['대답을 해요', '아무 말도 안 해요'], 0, '끝이 올라가는 묻는 말에는 Yes, I am. 같은 대답을 해요.'] }),
                LS('듣기 단추를 누르고, 배가 고프다고 알린 말에 어울리는 반응 카드를 골라 보세요.', 'I am hungry.', { cards: [C('yes', 'Yes, I am.'), C('see', 'Oh, I see.')] }, 'see', { d: 0.25 }),
              ]),
            ACT('a2', '활동 2. 끝소리에 따라 문장 카드 나누기', 14, 'wordcards',
              '교사가 번호를 말하고 문장을 한 번씩 읽어 준다. 1세트: 1번 Can you swim? 2번 I can swim. 3번 Is she Mina? 4번 She is Mina. 2세트: 1번 We play ball. 2번 Do we play ball? 3번 Is he tall? 4번 He is tall. 3세트: 1번 You are a teacher. 2번 Are you a teacher? 3번 This is my cat. 4번 Is this your cat? 5번 It is big. 6번 Is it big? 카드에는 번호만 있다. "끝이 올라가면 묻는 말 칸에 놓아요." 한 번 읽을 때 끝을 놓친 학생에게는 한 번 더 읽어 준다.',
              '교사가 읽어 주는 문장의 끝소리를 듣고, 번호 카드를 묻는 말 칸과 알리는 말 칸에 나누어 놓아요.',
              LA('sort', '문장이 끝날 때 목소리가 올라갔는지 내려갔는지 손으로 곡선을 그리며 들어 보세요.'),
              [
                SO('교사가 읽는 문장 네 개의 번호 카드를 대답이 필요한 말과 반응이 필요한 말로 나누어 보세요. (대답·반응 1세트)', AT2, [C('w1', '1번'), C('w2', '2번'), C('w3', '3번'), C('w4', '4번')], { ask: ['w1', 'w3'], tell: ['w2', 'w4'] }, { d: 0.3 }),
                SO('교사가 읽는 문장 네 개의 번호 카드를 대답이 필요한 말과 반응이 필요한 말로 나누어 보세요. (대답·반응 2세트)', AT2, [C('w1', '1번'), C('w2', '2번'), C('w3', '3번'), C('w4', '4번')], { ask: ['w2', 'w3'], tell: ['w1', 'w4'] }, { d: 0.3 }),
                SO('교사가 읽는 문장 여섯 개의 번호 카드를 대답이 필요한 말과 반응이 필요한 말로 나누어 보세요. (대답·반응 3세트)', AT2, [C('w1', '1번'), C('w2', '2번'), C('w3', '3번'), C('w4', '4번'), C('w5', '5번'), C('w6', '6번')], { ask: ['w2', 'w4', 'w6'], tell: ['w1', 'w3', 'w5'] }, { d: 0.35 }),
              ]),
          ),
          WRAP(7, '"묻는 말과 알리는 말에 어떻게 다르게 대답했나요?" 묻는 말에는 대답, 알리는 말에는 반응이라는 정리를 말하게 하고 출구 질문을 푼다. 내용만 듣고 고른 학생은 다음 시간 시작에 같은 문장을 올려서도 내려서도 들어 보게 한다.',
            [
              { type: 'tool', tool: 'wordcards', options: { mode: 'listen', basket: '들은 것', shuffle: false, say: 'Is it red?', cards: [C('yes', 'Yes, it is.'), C('see', 'Oh, I see.')] }, prompt: '듣기 단추를 누르고, 색깔을 물은 말에 어울리는 말 카드를 골라 보세요.', target: { listen: 'yes' }, difficulty: 0.2 },
              { type: 'choice', prompt: '"It is red."를 끝을 내려서 말했어요. 어울리는 반응은?', options: ['Oh, I see.', 'Yes, it is.'], answer: 0, difficulty: 0.2, explain: '끝을 내려 알리는 말에는 Oh, I see. 같은 반응이 어울려요.' },
              MOOD('오늘 끝소리에 맞게 대답하기는 어땠나요?'),
            ]),
        ],
        worksheet: WS('끝소리와 대답', [
          { type: 'table', prompt: '선생님이 읽어 주는 말을 듣고 대답이 필요하면 ○, 반응이 필요하면 △를 쓰세요.', columns: ['번호', '○ / △'], cells: [['1', ''], ['2', ''], ['3', ''], ['4', '']], answer: '교사 읽기 예: 1 Are you Jun? ○ / 2 I am Jun. △ / 3 Is it red? ○ / 4 It is red. △' },
          FIG('들은 말에 어울리는 카드를 고르세요. (선생님이 Is this a book?을 읽어요.)', { mode: 'listen', basket: '들은 것', shuffle: false, say: 'Is this a book?', cards: [C('yes', 'Yes, it is.'), C('see', 'Oh, I see.')] }, 'Yes, it is.'),
          { type: 'choice', prompt: '"Do you like cats?"에 어울리는 대답에 ○ 하세요.', options: ['Yes, I do.', 'Oh, I see.'], answer: 'Yes, I do.' },
          { type: 'short', prompt: '짝에게 묻는 말을 하나 하고 짝의 대답을 써 보세요.' },
        ], '문장의 끝이 올라갔는지 먼저 듣고, 대답이 필요한지 반응이 필요한지 정해요.', [
          { type: 'table', prompt: '선생님이 읽어 주는 말을 듣고 대답이 필요하면 ○, 반응이 필요하면 △를 쓰세요.', columns: ['번호', '○ / △'], cells: [['1', ''], ['2', '']], answer: '교사 읽기 예: 1 Are you Jun? ○ / 2 I am Jun. △' },
          { type: 'choice', prompt: '"Is it red?"에는 어떻게 할까요? (선생님이 읽어요.)', options: ['대답해요', '반응해요'], answer: '대답해요' },
          { type: 'choice', prompt: '"It is red."에는 어떻게 할까요? (선생님이 읽어요.)', options: ['대답해요', '반응해요'], answer: '반응해요' },
          { type: 'short', prompt: '오늘 들은 대답 하나를 써 보세요.' },
        ]),
        differentiation: DIFF(
          '대답 고르기에서 카드가 두 장이고, 나누기에서 맞게 놓으면 초록 테두리가 생기며 틀리게 놓으면 카드가 되돌아와요.',
          '말을 듣고 카드를 고르고, 나누기는 다 놓은 뒤 확인을 눌러 스스로 고쳐요.',
          '대답 고르기에 어울리지 않는 인사 카드(Hello!)가 한 장 더 섞이고, 나누기 번호 카드가 여섯 장으로 늘어요.'),
        teacherNotes: '자주 보이는 어려움: ① 문장의 내용만 듣고 억양을 놓친다 → 끝이 올라갔는지 먼저 정하게 한다. ② 대답과 반응의 차이를 모른다 → 묻는 말에는 대답(Yes, it is.), 알리는 말에는 반응(Oh, I see.)이라고 짝을 지어 칠판에 적는다. ③ 기기 음성에서 끝소리가 약하다 → 교사가 과장해서 읽는다. 학생 개인 정보나 실제 이름은 쓰지 않았다.',
      }),

      // ───────────────────────── 17차시 (core) ─────────────────────────
      lesson(17, S5, {
        title: '교실에서 자주 듣는 말의 뜻을 듣고 몸으로 보여 주기',
        objective: 'Stand up., Sit down., Open your book. 같은 교실 표현을 듣고 알맞은 우리말 뜻과 짝 짓고, 들은 표현에 알맞은 행동 카드를 고를 수 있다.',
        illustration: {
          prompt: PROMPT('a teacher at the board and children standing up, sitting down and opening their books while speech bubbles show short commands'),
          scene: SC('Stand up.  Sit down.', 'Open your book.', [{ motif: 'house', x: 86, y: 218, color: 'sky' }, { motif: 'tree', x: 404, y: 214 }, { motif: 'bird', x: 250, y: 74 }]),
        },
        stages: [
          INTRO(7, '교사가 "Stand up."이라고 말하며 일어서고 "Sit down."이라고 말하며 앉는 동작을 보여 준다. 학생에게도 같은 동작을 따라 하게 한 뒤 "방금 선생님이 한 말은 무슨 뜻일까요?"라고 묻는다. 말의 뜻을 몰라도 선생님의 동작을 보면 짐작할 수 있다는 점을 이야기한다. 동작을 보지 않고 소리만 들으려는 학생에게는 선생님 손과 몸의 움직임을 단서로 쓰게 한다.',
            '선생님 동작을 보고 영어 말의 뜻을 짐작해 봐요. Stand up. Sit down.은 무슨 뜻일까요?',
            { tool: 'wordcards', options: { mode: 'match', shuffle: true, slots: [{ id: 'stand', label: '일어서요' }, { id: 'sit', label: '앉아요' }], cards: [C('stand', 'Stand up.'), C('sit', 'Sit down.')] }, sequence: [{ at: {} }, { at: { stand: 0, sit: 1 } }] }),
          MAIN(26,
            ACT('a1', '활동 1. 영어 교실 표현과 우리말 뜻 짝 짓기', 13, 'wordcards',
              '"교실에서 자주 듣는 영어 말과 같은 뜻의 우리말을 짝 지어 봐요." 카드를 놓기 전에 교사가 해당 표현을 한 번씩 읽으며 동작을 보여 준다. 1세트: Stand up., Sit down., Open your book. 2세트: Listen., Look., Be quiet. 3세트: Close the door., Raise your hand., Come here. 동작이 비슷한 표현을 바꾸는 학생에게는 동작을 다시 보며 몸으로 해 보게 한다.',
              '영어 교실 표현 카드를 같은 뜻의 우리말 칸 옆에 놓아요.',
              LA('match', '선생님의 동작을 떠올리며 영어 말과 같은 행동을 나타내는 우리말을 찾으세요.'),
              [
                MT('교실 표현 카드를 같은 뜻의 우리말 칸 옆에 놓아 보세요. (1세트)', [{ id: 'stand', label: '일어서요' }, { id: 'sit', label: '앉아요' }, { id: 'open', label: '책을 펴요' }], [C('stand', 'Stand up.'), C('sit', 'Sit down.'), C('open', 'Open your book.')], { stand: 'stand', sit: 'sit', open: 'open' }, { d: 0.15 }),
                MT('교실 표현 카드를 같은 뜻의 우리말 칸 옆에 놓아 보세요. (2세트)', [{ id: 'listen', label: '잘 들어요' }, { id: 'look', label: '봐요' }, { id: 'quiet', label: '조용히 해요' }], [C('listen', 'Listen.'), C('look', 'Look.'), C('quiet', 'Be quiet.')], { listen: 'listen', look: 'look', quiet: 'quiet' }, { d: 0.2 }),
                MT('교실 표현 카드를 같은 뜻의 우리말 칸 옆에 놓아 보세요. (3세트)', [{ id: 'close', label: '문을 닫아요' }, { id: 'hand', label: '손을 들어요' }, { id: 'come', label: '여기로 와요' }], [C('close', 'Close the door.'), C('hand', 'Raise your hand.'), C('come', 'Come here.')], { close: 'close', hand: 'hand', come: 'come' }, { d: 0.25, x: [C('go', 'Go home.', { why: '"집에 가요"라는 뜻이라 이 세 칸에는 맞지 않아요.' })],
                  p: ['낱말을 다 모르면 뜻을 알 수 없을까요?', ['동작과 상황을 보면 짐작할 수 있어요', '모든 낱말을 알아야 해요'], 0, '선생님의 동작과 상황이 뜻을 짐작하는 단서가 돼요.'] }),
              ]),
            ACT('a2', '활동 2. 들은 교실 표현에 맞는 행동 카드 고르기', 13, 'wordcards',
              '듣기 단추를 한 번 누르게 하고 소리가 나지 않으면 교사가 읽어 준다. 1번 Stand up. 2번 Be quiet. 3번 Raise your hand. 4번 Close the door. "들은 말대로 행동한다면 어떤 행동일까요?" 하고 묻고 실제로 몸으로 해 본 뒤 카드를 고르게 한다. 우리말 카드의 글자만 보고 고르는 학생에게는 한 번 더 듣고 몸으로 해 보게 한다.',
              '듣기 단추를 눌러 교실 표현을 듣고, 알맞은 행동 카드 하나를 골라요.',
              LA('listen', '들은 말대로 몸을 움직여 본 뒤, 같은 행동을 나타내는 카드를 찾아보세요.'),
              [
                LS('듣기 단추를 누르고, 들은 말과 같은 행동 카드를 골라 보세요.', 'Stand up.', { cards: [C('stand', '일어서요'), C('sit', '앉아요')] }, 'stand', { d: 0.15, x: [C('open', '책을 펴요')] }),
                LS('듣기 단추를 누르고, 이번에 들은 말과 같은 행동 카드를 골라 보세요.', 'Be quiet.', { cards: [C('quiet', '조용히 해요'), C('look', '봐요')] }, 'quiet', { d: 0.2, x: [C('listen', '잘 들어요')] }),
                LS('듣기 단추를 누르고, 들은 말과 같은 행동 카드를 골라 보세요.', 'Raise your hand.', { cards: [C('hand', '손을 들어요'), C('come', '여기로 와요')] }, 'hand', { d: 0.25, x: [C('close', '문을 닫아요')] }),
                LS('듣기 단추를 누르고, 들려준 말과 같은 행동 카드를 골라 보세요.', 'Close the door.', { cards: [C('close', '문을 닫아요'), C('open', '책을 펴요')] }, 'close', { d: 0.25, x: [C('hand', '손을 들어요')] }),
              ]),
          ),
          WRAP(7, '"교실 말의 뜻이 헷갈릴 때는 어떻게 하면 좋을까요?" 선생님이나 친구의 동작을 본다는 대답을 칠판에 적고 출구 질문을 푼다. 비슷한 표현을 바꾼 학생은 다음 시간 시작에 두 표현을 몸으로 번갈아 해 보며 뜻을 구별한다.',
            [
              { type: 'tool', tool: 'wordcards', options: { mode: 'listen', basket: '들은 것', shuffle: false, say: 'Sit down.', cards: [C('stand', '일어서요'), C('sit', '앉아요')] }, prompt: '듣기 단추를 누르고, 들은 말에 알맞은 행동 카드를 골라 보세요.', target: { listen: 'sit' }, difficulty: 0.15 },
              { type: 'choice', prompt: '"Look."은 무슨 뜻일까요?', options: ['봐요', '들어요', '앉아요'], answer: 0, difficulty: 0.15, explain: 'Look.은 \'봐요\', Listen.은 \'들어요\'예요.' },
              MOOD('오늘 교실 표현 듣기는 어땠나요?'),
            ]),
        ],
        worksheet: WS('교실 표현의 뜻', [
          FIG('영어 교실 표현과 뜻을 이으세요.', { mode: 'match', shuffle: true, slots: [{ id: 'stand', label: '일어서요' }, { id: 'sit', label: '앉아요' }], cards: [C('stand', 'Stand up.'), C('sit', 'Sit down.')] }, '일어서요 — Stand up. / 앉아요 — Sit down.'),
          { type: 'table', prompt: '선생님이 읽어 주는 표현을 듣고 알맞은 행동에 ○ 하세요.', columns: ['번호', '들은 말의 뜻'], cells: [['1', '일어서요  앉아요'], ['2', '조용히 해요  봐요'], ['3', '손을 들어요  와요'], ['4', '문을 닫아요  펴요']], answer: '교사 읽기 예: 1 Stand up. 일어서요 / 2 Be quiet. 조용히 해요 / 3 Raise your hand. 손을 들어요 / 4 Close the door. 문을 닫아요' },
          { type: 'check', prompt: '"Open your book."와 같은 뜻에 ✓ 하세요.', options: ['책을 펴요', '책을 덮어요', '책을 줘요'], answer: '책을 펴요' },
          { type: 'draw', prompt: '오늘 배운 교실 표현 하나를 골라 그 행동을 하는 모습을 그려 보세요.' },
        ], '선생님의 동작을 떠올려 보고, 같은 행동을 나타내는 뜻을 찾아요.', [
          { type: 'table', prompt: '선생님이 읽어 주는 표현을 듣고 알맞은 행동에 ○ 하세요.', columns: ['번호', '들은 말의 뜻'], cells: [['1', '일어서요  앉아요'], ['2', '조용히 해요  봐요']], answer: '교사 읽기 예: 1 Stand up. 일어서요 / 2 Be quiet. 조용히 해요' },
          { type: 'choice', prompt: '"Sit down."의 뜻에 ○ 하세요.', options: ['앉아요', '일어서요'], answer: '앉아요' },
          { type: 'choice', prompt: '"Listen."의 뜻에 ○ 하세요.', options: ['잘 들어요', '봐요'], answer: '잘 들어요' },
          { type: 'short', prompt: '오늘 배운 영어 교실 표현 하나를 써 보세요.' },
        ]),
        differentiation: DIFF(
          '짝 짓기에서 맞게 놓으면 초록 테두리가 생기고 틀리게 놓으면 카드가 되돌아와요. 행동 카드 고르기는 두 장이에요.',
          '표현을 듣고 짝을 짓고, 행동 카드를 골라요. 다 놓은 뒤 확인을 눌러 스스로 고쳐요.',
          '짝 짓기 3세트에 어느 칸에도 맞지 않는 카드(Go home.)가 한 장 더 나오고, 행동 카드 고르기에 닮은 행동 카드가 한 장 더 섞여요.'),
        teacherNotes: '자주 보이는 어려움: ① Listen.과 Look.을 바꾼다 → 귀와 눈 동작을 해 보며 구별한다. ② Be quiet.를 \'조용히 해요\'가 아니라 \'앉아요\'로 고른다 → 입에 손가락을 대는 동작을 보여 준다. ③ 낱말을 모르면 아무것도 못 한다고 느낀다 → 동작과 상황이 뜻의 단서임을 알려 준다. 실제 지시로 몸을 움직이게 해 체험을 우선한다.',
      }),

      // ───────────────────────── 18차시 (practice) ─────────────────────────
      lesson(18, S5, {
        title: '교실 지시를 듣고 알맞은 물건 찾고 해요·하지 않아요 가르기',
        objective: '"Open your book." 같은 지시를 듣고 알맞은 물건의 그림을 고르며, 지시 표현을 해도 되는 말과 하면 안 되는 말로 나눌 수 있다.',
        illustration: {
          prompt: PROMPT('a child holding up a book and a pencil after a teacher instruction, with a green check board and a red cross board nearby'),
          scene: SC('Open your book.', 'Don\'t run.', [{ motif: 'house', x: 86, y: 218, color: 'sky' }, { motif: 'tree', x: 404, y: 214 }, { motif: 'star', x: 250, y: 74, s: 0.6 }]),
        },
        stages: [
          INTRO(6, '교사가 "Take your pencil."이라고 말하고 연필을 들어 보이게 한 뒤 "Pick up the ball."을 말하며 공을 가리켜 보인다. "말 속에 물건 낱말이 들어 있었나요?"라고 묻고 pencil과 ball을 칠판에 적는다. 이어 "Don\'t run."을 말하며 달리지 말라는 손짓을 보이고 "이 말은 하라는 말일까요, 하지 말라는 말일까요?"라고 묻는다. 모든 지시를 하라는 말로만 듣는 학생에게는 Don\'t 앞에서 손을 가로저어 보여 준다.',
            '지시를 들으면 물건 낱말과 \'하라\', \'하지 마라\'를 구별할 수 있어요. 선생님 말을 잘 들어 봐요.',
            { tool: 'wordcards', options: { mode: 'listen', basket: '들은 것', shuffle: false, say: 'Take your pencil.', words: VW('pencil', 'book') }, sequence: [{ at: {} }, { at: { pencil: 0 } }] }),
          MAIN(27,
            ACT('a1', '활동 1. 지시를 듣고 알맞은 물건 그림 고르기', 13, 'wordcards',
              '듣기 단추를 한 번 누르게 하고 소리가 나지 않으면 교사가 읽어 준다. 1번 Open your book. 2번 Take your pencil. 3번 Pick up the ball. 4번 Look at the bird. "지시 속에 숨은 물건 낱말을 들어요." 동사(Open, Take)에만 귀를 기울이는 학생에게는 물건 낱말이 문장 끝에 나온다는 것을 알려 준다. 도전 단계에는 비슷한 물건 그림이 한 장 더 섞여 있다.',
              '듣기 단추를 눌러 지시를 듣고, 지시에 나온 물건의 그림 카드를 골라요.',
              LA('listen', '문장 끝에서 들리는 물건 낱말을 찾아보고, 그 낱말과 같은 그림을 고르세요.'),
              [
                LS('듣기 단추를 누르고, 지시에 나온 물건의 그림을 골라 보세요.', 'Open your book.', { words: VW('book', 'pencil') }, 'book', { d: 0.15, x: VW('ball') }),
                LS('듣기 단추를 누르고, 이번 지시에 나온 물건의 그림을 골라 보세요.', 'Take your pencil.', { words: VW('pencil', 'book') }, 'pencil', { d: 0.15, x: VW('banana') }),
                LS('듣기 단추를 누르고, 지시에 나온 물건의 그림을 골라 보세요.', 'Pick up the ball.', { words: VW('ball', 'apple') }, 'ball', { d: 0.2, x: VW('egg'),
                  p: ['지시 속 물건 낱말은 보통 어디에 나올까요?', ['문장 끝쪽에 나와요', '문장 맨 앞에만 나와요'], 0, '짧은 지시에서는 물건 낱말이 문장 끝쪽에 나올 때가 많아요.'] }),
                LS('듣기 단추를 누르고, 지시에 나온 물건의 그림을 골라 보세요.', 'Look at the bird.', { words: VW('bird', 'cat') }, 'bird', { d: 0.2, x: VW('leaf') }),
              ]),
            ACT('a2', '활동 2. 해요 칸과 하지 않아요 칸으로 지시 가르기', 14, 'wordcards',
              '"하라는 말은 \'해요\' 칸, Don\'t로 시작하는 말은 \'하지 않아요\' 칸이에요." 카드를 놓기 전에 교사가 각 표현을 한 번 읽으며 동작이나 손짓을 보여 준다. 1세트: Be quiet., Don\'t run., Listen., Don\'t talk. 2세트: Sit down., Don\'t push., Look., Don\'t eat. 3세트: Wash your hands., Don\'t shout., Raise your hand., Don\'t jump., Open the door., Don\'t throw. Don\'t를 뜻풀이로 모르는 학생에게는 손짓으로 \'안 돼\' 표시를 보여 준다.',
              '지시 카드를 해요 칸과 하지 않아요 칸으로 나누어 놓아요.',
              LA('sort', '교사의 손짓을 떠올리며, 하라는 말인지 하지 말라는 말인지 먼저 정하고 놓으세요.'),
              [
                SO('지시 카드 네 장을 해요 칸과 하지 않아요 칸으로 나누어 보세요. (1세트)', [{ id: 'do', label: '해요' }, { id: 'dont', label: '하지 않아요' }], [C('quiet', 'Be quiet.'), C('run', 'Don\'t run.'), C('listen', 'Listen.'), C('talk', 'Don\'t talk.')], { do: ['quiet', 'listen'], dont: ['run', 'talk'] }, { d: 0.2 }),
                SO('지시 카드 네 장을 해요 칸과 하지 않아요 칸으로 나누어 보세요. (2세트)', [{ id: 'do', label: '해요' }, { id: 'dont', label: '하지 않아요' }], [C('sit', 'Sit down.'), C('push', 'Don\'t push.'), C('look', 'Look.'), C('eat', 'Don\'t eat.')], { do: ['sit', 'look'], dont: ['push', 'eat'] }, { d: 0.25 }),
                SO('지시 카드 여섯 장을 해요 칸과 하지 않아요 칸으로 나누어 보세요. (3세트)', [{ id: 'do', label: '해요' }, { id: 'dont', label: '하지 않아요' }], [C('wash', 'Wash your hands.'), C('shout', 'Don\'t shout.'), C('raise', 'Raise your hand.'), C('jump', 'Don\'t jump.'), C('open', 'Open the door.'), C('throw', 'Don\'t throw.')], { do: ['wash', 'raise', 'open'], dont: ['shout', 'jump', 'throw'] }, { d: 0.3,
                  p: ['Don\'t로 시작하는 말은 하라는 말일까요?', ['하지 말라는 말이에요', '하라는 말이에요'], 0, 'Don\'t는 \'하지 마\'라는 뜻이라 \'하지 않아요\' 칸에 놓아요.'] }),
              ]),
          ),
          WRAP(7, '"Don\'t로 시작하는 지시는 어떤 뜻이었나요?" 손짓으로 대답하게 하고 출구 질문을 푼다. Don\'t를 듣고도 하라는 말로 고른 학생은 다음 시간 시작에 Don\'t run.을 하며 손을 가로젓는 동작을 연습해 본다.',
            [
              { type: 'tool', tool: 'wordcards', options: { mode: 'sort', shuffle: false, slots: [{ id: 'do', label: '해요' }, { id: 'dont', label: '하지 않아요' }], cards: [C('stand', 'Stand up.'), C('push', 'Don\'t cry.')] }, prompt: '지시 카드 두 장을 해요 칸과 하지 않아요 칸으로 나누어 보세요.', target: { sort: { do: ['stand'], dont: ['push'] } }, difficulty: 0.2 },
              { type: 'choice', prompt: '"Pick up the ball."에서 물건은 무엇일까요?', options: ['ball', 'pick', 'up'], answer: 0, difficulty: 0.15, explain: '지시 끝에 나온 ball이 물건이에요.' },
              MOOD('오늘 교실 지시 듣기는 어땠나요?'),
            ]),
        ],
        worksheet: WS('교실 지시 듣기', [
          { type: 'table', prompt: '선생님이 읽어 주는 지시를 듣고 알맞은 물건 이름을 쓰세요.', columns: ['번호', '물건'], cells: [['1', ''], ['2', ''], ['3', '']], answer: '교사 읽기 예: 1 Open your book. book / 2 Take your pencil. pencil / 3 Pick up the ball. ball' },
          FIG('지시 카드를 해요 칸과 하지 않아요 칸에 놓으세요.', { mode: 'sort', shuffle: false, slots: [{ id: 'do', label: '해요' }, { id: 'dont', label: '하지 않아요' }], cards: [C('sit', 'Sit down.'), C('run', 'Don\'t run.')] }, '해요: Sit down. / 하지 않아요: Don\'t run.'),
          { type: 'check', prompt: '하지 않는 행동에 ✓ 하세요. (선생님이 읽어요.)', options: ['Don\'t talk.', 'Listen.', 'Don\'t push.', 'Look.'], answer: 'Don\'t talk., Don\'t push.' },
          { type: 'short', prompt: '교실에서 지키고 싶은 약속을 우리말로 한 줄 써 보세요.' },
        ], '지시 속 물건 낱말은 문장 끝쪽에 있어요. Don\'t가 들리면 하지 않는 행동이에요.', [
          { type: 'table', prompt: '선생님이 읽어 주는 지시를 듣고 알맞은 물건 이름을 쓰세요.', columns: ['번호', '물건'], cells: [['1', ''], ['2', '']], answer: '교사 읽기 예: 1 Open your book. book / 2 Take your pencil. pencil' },
          { type: 'choice', prompt: '"Don\'t run."의 뜻에 ○ 하세요.', options: ['뛰지 마요', '뛰어요'], answer: '뛰지 마요' },
          { type: 'choice', prompt: '"Look."의 뜻에 ○ 하세요.', options: ['봐요', '들어요'], answer: '봐요' },
          { type: 'short', prompt: '오늘 들은 지시 하나를 써 보세요.' },
        ]),
        differentiation: DIFF(
          '물건 고르기와 가르기에서 카드가 적고, 맞게 놓으면 초록 테두리가 생기며 틀리게 놓으면 카드가 되돌아와요.',
          '지시를 듣고 물건을 고르고, 가르기는 다 놓은 뒤 확인을 눌러 스스로 고쳐요.',
          '물건 고르기에 비슷한 그림 카드가 한 장 더 섞이고, 가르기 카드가 여섯 장으로 늘어요.'),
        teacherNotes: '자주 보이는 어려움: ① 동사만 듣고 물건 낱말을 놓친다 → 문장 끝 낱말에 귀를 기울이게 한다. ② Don\'t를 못 듣고 하라는 말로 이해한다 → 손짓과 함께 \'안 돼\' 표정을 보여 준다. ③ 실제로 그 행동을 해도 되는지 헷갈린다 → 교실 약속으로 연결해 이야기한다. 지시 문장은 모두 짧게 새로 지은 것이다.',
      }),

      // ───────────────────────── 19차시 (core) ─────────────────────────
      lesson(19, S5, {
        title: '그림 낱말과 영어 이름 잇고 동물과 물건으로 가르기',
        objective: 'cat, dog, bird, ball, book, pencil 같은 기초 낱말의 그림과 영어 이름을 짝 짓고, 동물과 물건으로 나눌 수 있다.',
        illustration: {
          prompt: PROMPT('a cat, a dog, a bird, a ball, a book and a pencil each on its own small card with an English name label below'),
          scene: SC('cat  dog  bird', 'ball  book  pencil', [{ motif: 'tree', x: 84, y: 214 }, { motif: 'house', x: 396, y: 218, color: 'sky' }, { motif: 'flower', x: 250, y: 216 }]),
        },
        stages: [
          INTRO(6, '그림 카드 여섯 장(고양이, 개, 새, 공, 책, 연필)을 칠판에 붙이고 "이 그림 가운데 영어로 이름을 아는 것이 있나요?"라고 묻는다. 아는 낱말은 학생이 말하게 하고, 모르는 낱말은 교사가 두 번 읽어 준다. "이 카드들을 둘로 나누려면 어떻게 나눌까요?" 하고 묻고 살아 있는 것과 아닌 것이라는 답을 이끌어 낸다. 영어를 모르면 못 한다고 걱정하는 학생에게는 그림이 도움이 된다고 알려 준다.',
            '영어로 이름을 아는 그림이 있나요? 그림 카드를 보고 둘로 나눌 방법을 생각해 봐요.',
            { tool: 'wordcards', options: { mode: 'match', shuffle: true, words: VW('cat', 'ball') }, sequence: [{ at: {} }, { at: { cat: 0, ball: 1 } }] }),
          MAIN(27,
            ACT('a1', '활동 1. 그림 옆에 알맞은 영어 이름 놓기', 14, 'wordcards',
              '"그림 옆에 알맞은 영어 이름 카드를 놓아요." 카드를 놓기 전에 그림 이름을 입으로 먼저 말해 보게 한다. 철자가 비슷한 낱말(ball/book/bird)을 바꾸는 학생에게는 그림을 다시 보고 첫소리를 말하게 한다. 도전 단계(3번)는 이름 카드가 한 장 더 많다.',
              '그림 옆에 알맞은 영어 이름 카드를 놓아요.',
              LA('match', '그림 이름을 입으로 말하고 첫소리가 같은 영어 이름을 찾아보세요.'),
              [
                MW('교실 그림 낱말 옆에 알맞은 영어 이름 카드를 놓아 보세요. (동물 셋)', VW('dog', 'bird', 'fish'), { d: 0.15 }),
                MW('그림 옆에 알맞은 영어 이름 카드를 놓아 보세요. (물건)', VW('ball', 'book', 'pencil'), { d: 0.2 }),
                MW('그림 옆에 알맞은 영어 이름 카드를 놓아 보세요. (섞어서)', VW('fish', 'banana', 'umbrella'), { d: 0.25 }),
              ]),
            ACT('a2', '활동 2. 동물과 물건으로 가르기', 13, 'wordcards',
              '"살아 있는 동물은 \'동물\' 칸에, 아닌 것은 \'물건\' 칸에 놓아요." 카드를 놓기 전에 영어 이름을 입으로 말하게 한다. 새를 물건에 놓는 학생에게는 날개가 있는 살아 있는 것인지 물어본다. 마지막 문항은 먹는 것도 섞여 있으니 먹는 것은 물건 칸에 놓는다는 약속을 알려 준다.',
              '그림 낱말 카드를 동물 칸과 물건 칸으로 나누어 놓아요.',
              LA('sort', '그림을 보고 살아 있는 것인지 아닌지 먼저 생각한 뒤 칸을 고르세요.'),
              [
                SO('그림 낱말 네 장을 동물 칸과 물건 칸으로 나누어 보세요.', [{ id: 'animal', label: '동물' }, { id: 'thing', label: '물건' }], [WC('cat'), WC('ball'), WC('dog'), WC('pencil')], { animal: ['cat', 'dog'], thing: ['ball', 'pencil'] }, { d: 0.15 }),
                SO('그림 낱말 다섯 장을 동물 칸과 물건 칸으로 나누어 보세요.', [{ id: 'animal', label: '동물' }, { id: 'thing', label: '물건' }], [WC('bird'), WC('book'), WC('fish'), WC('umbrella'), WC('egg')], { animal: ['bird', 'fish'], thing: ['book', 'umbrella', 'egg'] }, { d: 0.25,
                  p: ['달걀(egg)은 동물 칸일까요, 물건 칸일까요?', ['먹는 것이라 물건 칸이에요', '동물 칸이에요'], 0, '달걀은 살아 움직이는 동물이 아니라서 물건 칸에 놓아요.'] }),
                SO('그림 낱말 여섯 장을 동물 칸과 물건 칸으로 나누어 보세요.', [{ id: 'animal', label: '동물' }, { id: 'thing', label: '물건' }], [WC('dog'), WC('apple'), WC('bird'), WC('banana'), WC('cat'), WC('book')], { animal: ['dog', 'bird', 'cat'], thing: ['apple', 'banana', 'book'] }, { d: 0.3 }),
              ]),
          ),
          WRAP(7, '"오늘 영어 이름을 새로 알게 된 낱말은 무엇인가요?" 두세 명이 말하게 하고 출구 질문을 푼다. 비슷한 낱말을 바꾼 학생은 다음 시간 시작에 그림 카드를 보며 첫소리부터 말해 본다.',
            [
              { type: 'tool', tool: 'wordcards', options: { mode: 'match', shuffle: true, words: VW('apple', 'bird') }, prompt: '그림 옆에 알맞은 영어 이름 카드를 놓아 보세요.', target: { match: { apple: 'apple', bird: 'bird' } }, difficulty: 0.15 },
              { type: 'choice', prompt: '동물을 모두 고르세요.', options: ['cat과 dog', 'ball과 book', 'pencil과 egg'], answer: 0, difficulty: 0.15, explain: 'cat(고양이)과 dog(개)가 동물이에요.' },
              MOOD('오늘 그림 낱말 이름 익히기는 어땠나요?'),
            ]),
        ],
        worksheet: WS('그림 낱말과 이름', [
          FIG('그림 옆에 알맞은 영어 이름을 이으세요.', { mode: 'match', shuffle: true, words: VW('cat', 'book') }, 'cat — 고양이 / book — 책'),
          { type: 'table', prompt: '그림 낱말을 동물과 물건으로 나누어 영어 이름을 쓰세요.', columns: ['동물', '물건'], cells: [['', ''], ['', '']], answer: '동물: cat, dog, bird / 물건: ball, book, pencil (예)' },
          { type: 'check', prompt: '동물에 ✓ 하세요.', options: ['dog', 'ball', 'bird', 'pencil'], answer: 'dog, bird' },
          { type: 'draw', prompt: '좋아하는 그림 낱말 하나를 그리고 영어 이름을 써 보세요.' },
        ], '그림 이름을 입으로 말해 보고 첫소리가 같은 영어 이름을 찾아요.', [
          { type: 'table', prompt: '그림 낱말을 동물과 물건으로 나누어 영어 이름을 쓰세요.', columns: ['동물', '물건'], cells: [['', '']], answer: '동물: cat / 물건: ball (예)' },
          { type: 'choice', prompt: '"dog"의 그림에 ○ 하세요.', options: ['개', '공'], answer: '개' },
          { type: 'choice', prompt: '"book"의 그림에 ○ 하세요.', options: ['책', '새'], answer: '책' },
          { type: 'short', prompt: '오늘 알게 된 낱말 하나를 써 보세요.' },
        ]),
        differentiation: DIFF(
          '짝 짓기와 가르기에서 카드가 적고, 맞게 놓으면 초록 테두리가 생기며 틀리게 놓으면 카드가 되돌아와요.',
          '그림 이름을 짝 짓고 가른 뒤 확인을 눌러 스스로 고쳐요.',
          '가르기 카드가 여섯 장으로 늘고 먹는 것도 섞여 나와요.'),
        teacherNotes: '자주 보이는 어려움: ① ball, book, bird처럼 b로 시작하는 낱말을 바꾼다 → 그림을 다시 보고 낱말을 입으로 말하게 한다. ② 달걀·사과를 어디에 놓을지 헷갈린다 → 살아 움직이는 동물이 아니면 물건 칸이라는 약속을 알려 준다. ③ 영어 이름을 모르면 못 한다고 걱정한다 → 그림을 단서로 쓰라고 알려 준다. 철자는 따라 쓰는 정도로만 다룬다.',
      }),

      // ───────────────────────── 20차시 (practice) ─────────────────────────
      lesson(20, S5, {
        title: '숫자 1~10과 색깔 낱말의 뜻을 듣고 잇기',
        objective: 'one부터 ten까지의 숫자 낱말과 red, blue 같은 색깔 낱말을 듣고 알맞은 숫자와 색깔 카드를 찾을 수 있다.',
        illustration: {
          prompt: PROMPT('a row of colorful paper circles in red, blue, yellow and green with number cards one to ten arranged below and a speaker button'),
          scene: SC('1  2  3  4  5', 'red  blue  yellow', [{ motif: 'flower', x: 84, y: 216 }, { motif: 'tree', x: 404, y: 214 }, { motif: 'star', x: 250, y: 74, s: 0.6 }]),
        },
        stages: [
          INTRO(6, '손가락을 펴며 "one, two, three"를 세고 학생도 같이 세게 한다. 이어 빨간 종이를 들고 "red", 파란 종이를 들고 "blue"를 말하게 한다. "숫자와 색깔 가운데 영어로 이미 아는 것이 있나요?"라고 물어 아는 낱말을 모은다. 숫자를 줄줄 외우기만 하고 뜻과 연결하지 못하는 학생에게는 실제 물건 개수를 세어 보게 한다.',
            '손가락으로 숫자를 세고 색깔 종이를 보며 영어로 말해 봐요. 이미 아는 낱말이 있나요?',
            { tool: 'wordcards', options: { mode: 'match', shuffle: true, slots: [{ id: 'one', label: '1', big: '1' }, { id: 'two', label: '2', big: '2' }], cards: [C('one', 'one'), C('two', 'two')] }, sequence: [{ at: {} }, { at: { one: 0, two: 1 } }] }),
          MAIN(27,
            ACT('a1', '활동 1. 숫자 낱말과 숫자 카드 짝 짓기', 14, 'wordcards',
              '"숫자 칸 옆에 알맞은 영어 낱말 카드를 놓아요." 카드를 놓기 전에 손가락으로 숫자를 펴 보게 한다. 1세트: one, two, three. 2세트: four, five, six. 3세트: seven, eight, nine, ten. six와 sixteen처럼 비슷한 낱말은 이 시간에 다루지 않는다. 한 칸씩 건너뛰어 놓는 학생에게는 1부터 소리 내어 세며 놓게 한다.',
              '숫자 칸 옆에 알맞은 영어 낱말 카드를 놓아요.',
              LA('match', '손가락으로 숫자를 펴 보고 그 수에 맞는 영어 낱말을 찾으세요.'),
              [
                MT('숫자 옆에 알맞은 영어 낱말 카드를 놓아 보세요. (1~3)', [{ id: 'one', label: '1', big: '1' }, { id: 'two', label: '2', big: '2' }, { id: 'three', label: '3', big: '3' }], TX('one', 'two', 'three'), { one: 'one', two: 'two', three: 'three' }, { d: 0.15 }),
                MT('숫자 옆에 알맞은 영어 낱말 카드를 놓아 보세요. (4~6)', [{ id: 'four', label: '4', big: '4' }, { id: 'five', label: '5', big: '5' }, { id: 'six', label: '6', big: '6' }], TX('four', 'five', 'six'), { four: 'four', five: 'five', six: 'six' }, { d: 0.2 }),
                MT('숫자 옆에 알맞은 영어 낱말 카드를 놓아 보세요. (7~10)', [{ id: 'seven', label: '7', big: '7' }, { id: 'eight', label: '8', big: '8' }, { id: 'nine', label: '9', big: '9' }, { id: 'ten', label: '10', big: '10' }], TX('seven', 'eight', 'nine', 'ten'), { seven: 'seven', eight: 'eight', nine: 'nine', ten: 'ten' }, { d: 0.25,
                  p: ['영어로 수를 셀 때 순서는 우리말과 같을까요?', ['순서는 같아요', '순서가 달라요'], 0, '1, 2, 3… 수의 순서는 우리말과 같고 낱말만 달라요.'] }),
              ]),
            ACT('a2', '활동 2. 들은 색깔 낱말과 같은 색 카드 고르기', 13, 'wordcards',
              '듣기 단추를 한 번 누르게 하고 소리가 나지 않으면 교사가 읽어 준다. 1번 red, 2번 blue, 3번 yellow, 4번 green. 색 카드는 영어 글자 없이 색만 보인다. "들은 낱말과 같은 색을 찾아요." 노랑과 주황을 헷갈리는 학생에게는 색종이를 직접 들어 보이며 다시 들려준다. 색을 보지 않고 글자 모양에만 의지하려는 학생이 없도록 카드에는 글자가 없다.',
              '듣기 단추를 눌러 색깔 낱말을 듣고, 들은 색깔과 같은 색 카드를 골라요.',
              LA('listen', '낱말을 들으며 떠오르는 색종이를 상상해 보고, 같은 색 카드를 찾아보세요.'),
              [
                LS('듣기 단추를 누르고, 들은 색깔과 같은 색 카드를 골라 보세요.', 'red', { cards: [C('red', '', { big: '●', color: 'rose', name: '빨강' }), C('blue', '', { big: '●', color: 'sky', name: '파랑' })] }, 'red', { d: 0.15, x: [C('green', '', { big: '●', color: 'mint', name: '초록' })] }),
                LS('듣기 단추를 누르고, 이번에 들은 색깔과 같은 색 카드를 골라 보세요.', 'blue', { cards: [C('blue', '', { big: '●', color: 'sky', name: '파랑' }), C('yellow', '', { big: '●', color: 'buttercup', name: '노랑' })] }, 'blue', { d: 0.15, x: [C('red', '', { big: '●', color: 'rose', name: '빨강' })] }),
                LS('듣기 단추를 누르고, 들려준 색깔과 같은 색 카드를 골라 보세요.', 'yellow', { cards: [C('yellow', '', { big: '●', color: 'buttercup', name: '노랑' }), C('green', '', { big: '●', color: 'mint', name: '초록' })] }, 'yellow', { d: 0.2, x: [C('blue', '', { big: '●', color: 'sky', name: '파랑' })] }),
                LS('듣기 단추를 누르고, 들려준 색깔과 같은 색 카드를 골라 보세요.', 'green', { cards: [C('green', '', { big: '●', color: 'mint', name: '초록' }), C('red', '', { big: '●', color: 'rose', name: '빨강' })] }, 'green', { d: 0.2, x: [C('yellow', '', { big: '●', color: 'buttercup', name: '노랑' })] }),
              ]),
          ),
          WRAP(7, '"오늘 영어로 말할 수 있게 된 숫자나 색깔은 무엇인가요?" 두세 명이 말하게 하고 출구 질문을 푼다. 숫자 순서를 건너뛴 학생은 다음 시간 시작에 손가락을 펴며 1부터 10까지 소리 내어 세어 본다.',
            [
              { type: 'tool', tool: 'wordcards', options: { mode: 'match', shuffle: true, slots: [{ id: 'eight', label: '8', big: '8' }, { id: 'nine', label: '9', big: '9' }], cards: TX('eight', 'nine') }, prompt: '숫자 옆에 알맞은 영어 낱말 카드를 놓아 보세요.', target: { match: { eight: 'eight', nine: 'nine' } }, difficulty: 0.15 },
              { type: 'tool', tool: 'wordcards', options: { mode: 'listen', basket: '들은 것', shuffle: false, say: 'green', cards: [C('green', '', { big: '●', color: 'mint', name: '초록' }), C('yellow', '', { big: '●', color: 'buttercup', name: '노랑' })] }, prompt: '듣기 단추를 누르고, 들은 색깔과 같은 색 카드를 골라 보세요. (다른 색 짝)', target: { listen: 'green' }, difficulty: 0.15 },
              MOOD('오늘 숫자와 색깔 낱말 듣기는 어땠나요?'),
            ]),
        ],
        worksheet: WS('숫자와 색깔 낱말', [
          FIG('숫자 옆에 알맞은 영어 낱말을 이으세요.', { mode: 'match', shuffle: true, slots: [{ id: 'three', label: '3', big: '3' }, { id: 'six', label: '6', big: '6' }], cards: TX('three', 'six') }, '3 — three / 6 — six'),
          { type: 'table', prompt: '선생님이 읽어 주는 숫자를 듣고 숫자로 쓰세요.', columns: ['번호', '들은 수'], cells: [['1', ''], ['2', ''], ['3', ''], ['4', '']], answer: '교사 읽기 예: 1 two 2 / 2 five 5 / 3 seven 7 / 4 ten 10' },
          { type: 'check', prompt: '선생님이 읽어 주는 색깔에 ✓ 하세요. (red, blue)', options: ['빨강', '파랑', '노랑', '초록'], answer: '빨강, 파랑' },
          { type: 'draw', prompt: '오늘 배운 색깔 하나로 동그라미 세 개를 그려 보세요.' },
        ], '손가락을 펴며 숫자를 세고, 색종이를 떠올리며 색깔을 들어요.', [
          { type: 'table', prompt: '선생님이 읽어 주는 숫자를 듣고 숫자로 쓰세요.', columns: ['번호', '들은 수'], cells: [['1', ''], ['2', '']], answer: '교사 읽기 예: 1 two 2 / 2 five 5' },
          { type: 'choice', prompt: '"three"는 몇일까요?', options: ['3', '5'], answer: '3' },
          { type: 'choice', prompt: '"red"는 어떤 색일까요?', options: ['빨강', '파랑'], answer: '빨강' },
          { type: 'short', prompt: '오늘 알게 된 영어 낱말 하나를 써 보세요.' },
        ]),
        differentiation: DIFF(
          '숫자 짝 짓기와 색 고르기에서 카드가 적고, 맞게 놓으면 초록 테두리가 생기며 틀리게 놓으면 카드가 되돌아와요.',
          '숫자를 짝 짓고 색깔을 듣고 골라요. 다 놓은 뒤 확인을 눌러 스스로 고쳐요.',
          '숫자 짝 짓기는 네 장으로 늘고, 색 고르기에 닮은 색 카드가 한 장 더 섞여 나와요.'),
        teacherNotes: '자주 보이는 어려움: ① six와 sixteen처럼 비슷한 수는 이 시간에 다루지 않는다 → 1~10만 다룬다고 알려 준다. ② 노랑과 주황, 초록과 파랑을 바꾼다 → 색종이를 직접 들어 보인다. ③ 숫자를 외우기만 하고 뜻과 연결하지 못한다 → 손가락이나 물건 개수로 확인하게 한다. 색 카드는 글자 없이 색만 보여 귀로만 듣게 했다.',
      }),

      // ───────────────────────── 21차시 (extend) ─────────────────────────
      lesson(21, S5, {
        title: '들은 낱말로 철자를 맞추고 먹는 것·동물·자연으로 가르기',
        objective: '들은 낱말의 소리에 맞게 cat, dog, sun 같은 짧은 낱말의 철자 카드를 맞추고, 낱말을 먹는 것·동물·자연의 세 무리로 나눌 수 있다.',
        illustration: {
          prompt: PROMPT('letter cards C A T arranged under a cat picture, with a basket of fruit, an animal group and a nature group on three colorful trays'),
          scene: SC('c-a-t', '먹는 것 · 동물 · 자연', [{ motif: 'tree', x: 84, y: 214 }, { motif: 'flower', x: 396, y: 216 }, { motif: 'bird', x: 250, y: 74 }]),
        },
        stages: [
          INTRO(6, '교사가 "cat"을 천천히 "크-애-트" 세 소리로 나누어 읽고 손가락을 한 번에 하나씩 펴 보인다. "소리가 세 개면 글자도 세 개일 것 같아요. 어떤 글자일까요?"라고 묻고 c, a, t 카드를 보여 준다. 소리 수와 글자 수가 항상 같지는 않다는 점은 이후 수업에서 만난다고 알려 준다. 글자 이름을 연결해 \'씨-에이-티\'로만 읽는 학생에게는 낱말이 나는 소리와 글자 이름이 다르다고 알려 준다.',
            '낱말은 소리를 하나씩 나누어 들을 수 있어요. cat을 세 소리로 나누어 말해 봐요.',
            { tool: 'wordcards', options: { mode: 'spell', word: 'cat', ko: '고양이', motif: 'cat' }, sequence: [{ at: {} }, { at: { c: 0, a: 1, t: 2 } }] }),
          MAIN(27,
            ACT('a1', '활동 1. 들은 낱말의 철자 카드를 칸에 놓기', 14, 'wordcards',
              '"낱말 듣기 단추를 누르고 소리를 하나씩 나누어 들으며 철자 카드를 왼쪽 칸부터 놓아요." 소리가 나지 않으면 교사가 낱말을 읽어 준다. 낱말은 cat, dog, sun, egg이다. 학생이 글자를 외우지 못해도 소리를 나누어 듣는 활동이므로 틀려도 다시 해 보게 한다. 같은 글자 카드가 두 번 필요한 낱말(egg의 g)은 한 장씩 놓는다고 알려 준다. 도전 단계에는 쓰지 않는 글자 카드가 한 장 더 섞여 있다.',
              '낱말을 듣고 소리를 하나씩 나누어, 철자 카드를 왼쪽 칸부터 차례대로 놓아요.',
              LSP('낱말을 천천히 소리 내어 말하며 첫소리부터 하나씩 나누어 보세요. 왼쪽 칸부터 소리에 알맞은 글자를 놓아요.'),
              [
                SPL('듣기 단추를 누르고, 낱말 cat의 철자 카드를 놓아 보세요.', 'cat', '고양이', 'cat', ['b'], { d: 0.15 }),
                SPL('듣기 단추를 누르고, 낱말 dog의 철자 카드를 놓아 보세요.', 'dog', '개', 'dog', ['b'], { d: 0.2 }),
                SPL('듣기 단추를 누르고, 낱말 sun의 철자 카드를 놓아 보세요.', 'sun', '해', 'sun', ['m'], { d: 0.2 }),
                SPL('듣기 단추를 누르고, 낱말 egg의 철자 카드를 놓아 보세요.', 'egg', '달걀', 'egg', ['a'], { d: 0.3 }),
              ]),
            ACT('a2', '활동 2. 먹는 것·동물·자연으로 낱말 가르기', 13, 'wordcards',
              '"그림 낱말을 먹는 것, 동물, 자연 세 칸으로 나누어요." 카드를 놓기 전에 영어 이름을 입으로 말하게 한다. 달걀을 동물 칸에 놓는 학생에게는 달걀은 먹는 것이라 먹는 것 칸이라고 알려 준다. 마지막 문항은 여섯 장이라 세 칸에 두 장씩 들어간다.',
              '그림 낱말 카드를 먹는 것 칸, 동물 칸, 자연 칸으로 나누어 놓아요.',
              LA('sort', '그림을 보고 먹을 수 있는지, 살아 움직이는지, 하늘·땅에서 볼 수 있는지 생각해 보세요.'),
              [
                SO('그림 낱말 네 장을 먹는 것·동물·자연 칸으로 나누어 보세요.', [{ id: 'food', label: '먹는 것' }, { id: 'animal', label: '동물' }, { id: 'nature', label: '자연' }], [WC('apple'), WC('cat'), WC('sun'), WC('banana')], { food: ['apple', 'banana'], animal: ['cat'], nature: ['sun'] }, { d: 0.2 }),
                SO('그림 낱말 다섯 장을 먹는 것·동물·자연 칸으로 나누어 보세요.', [{ id: 'food', label: '먹는 것' }, { id: 'animal', label: '동물' }, { id: 'nature', label: '자연' }], [WC('egg'), WC('dog'), WC('tree'), WC('bird'), WC('moon')], { food: ['egg'], animal: ['dog', 'bird'], nature: ['tree', 'moon'] }, { d: 0.25,
                  p: ['나무(tree)는 어느 칸일까요?', ['자연 칸이에요', '동물 칸이에요'], 0, '나무와 해, 달은 자연에서 볼 수 있어서 자연 칸에 놓아요.'] }),
                SO('그림 낱말 여섯 장을 먹는 것·동물·자연 칸으로 나누어 보세요.', [{ id: 'food', label: '먹는 것' }, { id: 'animal', label: '동물' }, { id: 'nature', label: '자연' }], [WC('fish'), WC('apple'), WC('star'), WC('cat'), WC('banana'), WC('flower')], { food: ['apple', 'banana'], animal: ['fish', 'cat'], nature: ['star', 'flower'] }, { d: 0.3 }),
              ]),
          ),
          WRAP(7, '"오늘 낱말을 소리 하나씩 나누어 들어 보니 어땠나요?" 소리를 나눈 낱말을 말하게 하고 출구 질문을 푼다. 철자 카드의 순서를 바꾼 학생은 다음 시간 시작에 낱말을 느리게 말하며 소리를 손가락으로 세어 본다.',
            [
              { type: 'tool', tool: 'wordcards', options: { mode: 'spell', word: 'pen', ko: '펜', extra: ['b'] }, prompt: '낱말 듣기 단추를 누르고, 낱말 pen의 철자 카드를 놓아 보세요.', target: { spell: 'pen' }, difficulty: 0.2 },
              { type: 'choice', prompt: '먹는 것을 모두 고르세요.', options: ['apple과 egg', 'cat과 dog', 'sun과 moon'], answer: 0, difficulty: 0.15, explain: 'apple(사과)과 egg(달걀)는 먹는 것이에요.' },
              MOOD('오늘 낱말 소리 나누기는 어땠나요?'),
            ]),
        ],
        worksheet: WS('낱말 소리와 무리', [
          { type: 'table', prompt: '선생님이 읽어 주는 낱말의 첫 글자를 써 보세요.', columns: ['번호', '첫 글자'], cells: [['1', ''], ['2', ''], ['3', ''], ['4', '']], answer: '교사 읽기 예: 1 cat c / 2 dog d / 3 sun s / 4 egg e' },
          FIG('그림 낱말 카드를 알맞은 무리 칸에 놓으세요.', { mode: 'sort', shuffle: false, slots: [{ id: 'food', label: '먹는 것' }, { id: 'animal', label: '동물' }], cards: [WC('apple'), WC('dog')] }, '먹는 것: apple / 동물: dog'),
          { type: 'check', prompt: '자연에서 볼 수 있는 것에 ✓ 하세요.', options: ['sun', 'egg', 'tree', 'banana'], answer: 'sun, tree' },
          { type: 'blank', prompt: '들은 낱말의 빈 글자를 채우세요.', text: 'c _ t (고양이)', answer: 'a' },
        ], '낱말을 천천히 말하며 소리를 손가락으로 세어 보고, 그 소리에 알맞은 글자를 찾아요.', [
          { type: 'table', prompt: '선생님이 읽어 주는 낱말의 첫 글자를 써 보세요.', columns: ['번호', '첫 글자'], cells: [['1', ''], ['2', '']], answer: '교사 읽기 예: 1 cat c / 2 dog d' },
          { type: 'choice', prompt: '"egg"는 어느 무리일까요?', options: ['먹는 것', '동물'], answer: '먹는 것' },
          { type: 'choice', prompt: '"sun"은 어느 무리일까요?', options: ['자연', '먹는 것'], answer: '자연' },
          { type: 'short', prompt: '오늘 알게 된 낱말 하나를 써 보세요.' },
        ]),
        differentiation: DIFF(
          '철자 맞추기와 가르기에서 카드가 적고, 맞게 놓으면 초록 테두리가 생기며 틀리게 놓으면 카드가 되돌아와요.',
          '낱말을 듣고 철자 카드를 놓고, 가르기는 다 놓은 뒤 확인을 눌러 스스로 고쳐요.',
          '철자 맞추기에 쓰지 않는 글자 카드가 한 장 더 섞이고, 가르기 카드가 여섯 장으로 늘어요.'),
        teacherNotes: '자주 보이는 어려움: ① 글자 이름과 낱말 소리를 같게 여긴다 → cat의 c는 \'크\'에 가까운 소리라고 알려 준다. ② egg의 같은 글자를 두 번 놓지 못한다 → 같은 글자 카드는 한 번에 한 장씩 놓는다고 알려 준다. ③ 철자를 외워 써야 한다고 걱정한다 → 이 활동은 소리를 나누어 듣는 것이 목표이고 쓰기 평가는 하지 않는다고 말한다.',
      }),

      // ───────────────────────── 22차시 (core) ─────────────────────────
      lesson(22, S5, {
        title: '짧은 영어 문장의 뜻을 우리말과 잇고 빈칸 채우기',
        objective: '"I see a bird." 같은 쉬운 영어 문장을 우리말 뜻과 짝 짓고, 우리말 뜻에 맞게 문장의 빈칸에 알맞은 낱말 카드를 넣을 수 있다.',
        illustration: {
          prompt: PROMPT('a child pointing to a short English sentence under a picture of a bird on a card with a Korean translation label beside it'),
          scene: SC('I see a bird.', '새가 보여요.', [{ motif: 'tree', x: 84, y: 214 }, { motif: 'flower', x: 396, y: 216 }, { motif: 'bird', x: 250, y: 74 }]),
        },
        stages: [
          INTRO(6, '교사가 새 그림을 보여 주며 "I see a bird."라고 읽고 "이 영어 문장은 무슨 뜻일까요?"라고 묻는다. "새가 보여요."라는 대답이 나오면 문장을 \'I / see / a bird\' 세 덩이로 나누어 칠판에 쓰고 낱말마다 뜻을 짚어 준다. 낱말 하나하나를 우리말로 바꾸어 이어 붙이려는 학생에게는 문장은 덩이로 뜻을 만든다고 알려 준다.',
            '영어 문장도 그림을 보면 뜻을 짐작할 수 있어요. I see a bird.는 무슨 뜻일까요?',
            { tool: 'wordcards', options: { mode: 'match', shuffle: true, slots: [{ id: 'see', label: '새가 보여요.' }, { id: 'have', label: '나는 공이 있어요.' }], cards: [C('see', 'I see a bird.'), C('have', 'I have a ball.')] }, sequence: [{ at: {} }, { at: { see: 0, have: 1 } }] }),
          MAIN(27,
            ACT('a1', '활동 1. 영어 문장과 우리말 뜻 짝 짓기', 13, 'wordcards',
              '"영어 문장 카드를 같은 뜻의 우리말 칸 옆에 놓아요." 카드를 놓기 전에 교사가 문장을 한 번씩 읽어 준다. 1세트: I see a bird., I have a ball., I like milk. 2세트: This is my book., It is a cat., I like apples. 3세트: I see a tree., It is big., I have a pencil., I like fish. 낱말 하나만 보고 뜻을 정하는 학생에게는 문장 전체의 덩이를 한 번 더 읽게 한다.',
              '영어 문장 카드를 같은 뜻의 우리말 칸 옆에 놓아요.',
              LA('match', '그림이나 상황을 떠올리며, 문장 전체의 뜻이 가장 가까운 우리말을 찾으세요.'),
              [
                MT('문장 카드를 같은 뜻의 우리말 칸 옆에 놓아 보세요. (1세트)', [{ id: 'see', label: '새가 보여요.' }, { id: 'have', label: '나는 공이 있어요.' }, { id: 'like', label: '나는 우유를 좋아해요.' }], [C('see', 'I see a bird.'), C('have', 'I have a ball.'), C('like', 'I like milk.')], { see: 'see', have: 'have', like: 'like' }, { d: 0.2 }),
                MT('문장 카드를 같은 뜻의 우리말 칸 옆에 놓아 보세요. (2세트)', [{ id: 'book', label: '이것은 내 책이에요.' }, { id: 'cat', label: '그것은 고양이예요.' }, { id: 'apple', label: '나는 사과를 좋아해요.' }], [C('book', 'This is my book.'), C('cat', 'It is a cat.'), C('apple', 'I like apples.')], { book: 'book', cat: 'cat', apple: 'apple' }, { d: 0.25 }),
                MT('문장 카드를 같은 뜻의 우리말 칸 옆에 놓아 보세요. (3세트)', [{ id: 'tree', label: '나무가 보여요.' }, { id: 'big', label: '그것은 커요.' }, { id: 'pencil', label: '나는 연필이 있어요.' }, { id: 'fish', label: '나는 물고기를 좋아해요.' }], [C('tree', 'I see a tree.'), C('big', 'It is big.'), C('pencil', 'I have a pencil.'), C('fish', 'I like fish.')], { tree: 'tree', big: 'big', pencil: 'pencil', fish: 'fish' }, { d: 0.3,
                  p: ['영어 문장의 뜻은 낱말 하나하나만 보면 알 수 있을까요?', ['문장 전체를 함께 봐야 해요', '낱말 하나로 충분해요'], 0, '문장은 낱말들이 모여 뜻을 만들어서 전체를 함께 봐야 해요.'] }),
              ]),
            ACT('a2', '활동 2. 우리말 뜻에 맞게 문장 빈칸 채우기', 14, 'wordcards',
              '"우리말 뜻을 읽고, 영어 문장의 빈칸에 알맞은 낱말 카드를 넣어요." 카드를 넣기 전에 문장을 소리 내어 한 번 읽게 한다. 빈칸 앞뒤 낱말만 보고 고르는 학생에게는 우리말 뜻이 알려 주는 낱말이 무엇인지 먼저 말하게 한다. 마지막 문항은 sunny와 snowy를 가리는 것인데 sun과 snow의 그림을 떠올리게 한다.',
              '우리말 뜻을 보고, 영어 문장의 빈칸에 알맞은 낱말 카드를 넣어요.',
              LA('fill', '우리말 뜻에서 빈칸에 들어갈 영어 낱말이 무엇인지 먼저 생각하고, 같은 뜻의 카드를 넣어 소리 내어 읽어 보세요.'),
              [
                FI('"고양이가 보여요."에 맞게 빈칸에 알맞은 낱말 카드를 넣어 보세요.', [{ id: 'f1', label: 'I see a ___.' }], TX('cat', 'ball', 'sun'), { f1: 'cat' }, { d: 0.2 }),
                FI('"나는 사과를 좋아해요."에 맞게 빈칸에 알맞은 낱말 카드를 넣어 보세요.', [{ id: 'f1', label: 'I like ___.' }], TX('apples', 'cats', 'books'), { f1: 'apples' }, { d: 0.2 }),
                FI('"이것은 내 연필이에요."에 맞게 빈칸에 알맞은 낱말 카드를 넣어 보세요.', [{ id: 'f1', label: 'This is my ___.' }], TX('pencil', 'bird', 'tree'), { f1: 'pencil' }, { d: 0.25 }),
                FI('"눈이 오는 날이에요."에 맞게 빈칸에 알맞은 낱말 카드를 넣어 보세요.', [{ id: 'f1', label: 'It is a ___ day.' }], TX('snowy', 'sunny', 'big'), { f1: 'snowy' }, { d: 0.3 }),
              ]),
          ),
          WRAP(7, '"영어 문장의 뜻을 알아내는 좋은 방법은 무엇이었나요?" 문장을 덩이로 읽는다는 대답과 그림 단서를 쓴다는 대답을 칠판에 정리하고 출구 질문을 푼다. 낱말 하나만 보고 뜻을 정한 학생은 다음 시간 시작에 문장을 덩이로 나누어 다시 읽어 본다.',
            [
              { type: 'tool', tool: 'wordcards', options: { mode: 'fill', shuffle: true, slots: [{ id: 'f1', label: 'I have a ___.' }], cards: TX('dog', 'moon', 'milk') }, prompt: '"나는 개가 있어요."에 맞게 빈칸에 알맞은 낱말 카드를 넣어 보세요.', target: { fill: { f1: 'dog' } }, difficulty: 0.2 },
              { type: 'choice', prompt: '"I like fish."는 무슨 뜻일까요?', options: ['나는 물고기를 좋아해요', '물고기가 보여요', '나는 물고기가 없어요'], answer: 0, difficulty: 0.15, explain: 'I like는 \'나는 ~을 좋아해요\'라는 뜻이에요.' },
              MOOD('오늘 쉬운 문장 뜻 알기는 어땠나요?'),
            ]),
        ],
        worksheet: WS('쉬운 문장의 뜻', [
          FIG('영어 문장과 우리말 뜻을 이으세요.', { mode: 'match', shuffle: true, slots: [{ id: 'see', label: '새가 보여요.' }, { id: 'like', label: '우유를 좋아해요.' }], cards: [C('see', 'I see a bird.'), C('like', 'I like milk.')] }, '새가 보여요 — I see a bird. / 우유를 좋아해요 — I like milk.'),
          { type: 'table', prompt: '영어 문장을 읽고 우리말 뜻을 써 보세요.', columns: ['영어 문장', '우리말 뜻'], cells: [['I have a ball.', ''], ['This is my book.', ''], ['It is a cat.', '']], answer: '나는 공이 있어요. / 이것은 내 책이에요. / 그것은 고양이예요.' },
          { type: 'blank', prompt: '우리말 뜻에 맞게 빈칸에 알맞은 낱말을 쓰세요. (나는 바나나를 좋아해요.)', text: 'I like ___.', answer: 'bananas' },
          { type: 'check', prompt: '"I see a tree."와 같은 뜻에 ✓ 하세요.', options: ['나무가 보여요', '나무를 좋아해요', '나무가 없어요'], answer: '나무가 보여요' },
        ], '그림을 떠올리고 문장을 덩이로 읽으며 뜻을 찾아요.', [
          { type: 'table', prompt: '영어 문장을 읽고 우리말 뜻을 써 보세요.', columns: ['영어 문장', '우리말 뜻'], cells: [['I have a ball.', ''], ['It is a cat.', '']], answer: '나는 공이 있어요. / 그것은 고양이예요.' },
          { type: 'choice', prompt: '"I like milk."의 뜻에 ○ 하세요.', options: ['우유를 좋아해요', '우유가 없어요'], answer: '우유를 좋아해요' },
          { type: 'choice', prompt: '"I see a bird."의 뜻에 ○ 하세요.', options: ['새가 보여요', '새를 좋아해요'], answer: '새가 보여요' },
          { type: 'short', prompt: '오늘 알게 된 영어 문장 하나를 써 보세요.' },
        ]),
        differentiation: DIFF(
          '짝 짓기와 빈칸 채우기에서 카드가 적고, 맞게 놓으면 초록 테두리가 생기며 틀리게 놓으면 카드가 되돌아와요.',
          '문장과 뜻을 짝 짓고 빈칸을 채운 뒤 확인을 눌러 스스로 고쳐요.',
          '짝 짓기 3세트는 문장이 네 개로 늘고, 빈칸 채우기에 닮은 낱말 카드(sunny·snowy)가 섞여 나와요.'),
        teacherNotes: '자주 보이는 어려움: ① 낱말 하나만 보고 문장 전체의 뜻을 정한다 → 문장을 덩이로 나누어 함께 읽게 한다. ② I like와 I have를 바꾼다 → 좋아하는 마음과 가진 물건을 그림으로 보여 준다. ③ sunny와 snowy의 첫 글자만 보고 고른다 → sun과 snow 그림을 떠올리게 한다. 문장은 모두 새로 지은 짧은 문장이며 외워서 쓰기를 요구하지 않는다.',
      }),

      // ───────────────────────── 23차시 (practice) ─────────────────────────
      lesson(23, S5, {
        title: '들은 문장에 맞는 그림 고르고 뜻에 맞는 문장 고르기',
        objective: '쉬운 영어 문장을 듣고 알맞은 그림을 고르며, 우리말 설명에 맞는 영어 문장을 읽고 고를 수 있다.',
        illustration: {
          prompt: PROMPT('a child listening to a sentence from a speaker and choosing between two picture cards while a thought bubble shows the matching scene'),
          scene: SC('I have a pencil.', '문장과 그림 맞추기', [{ motif: 'tree', x: 84, y: 214 }, { motif: 'flower', x: 396, y: 216 }, { motif: 'bird', x: 250, y: 74 }]),
        },
        stages: [
          INTRO(6, '교사가 "I have a ball."을 말하고 "내 손에 공이 있나요, 책이 있나요?"라고 묻는다. 공을 든 그림 카드와 책을 든 그림 카드 두 장을 칠판에 붙이고 학생이 손으로 가리키게 한다. 이어 "I don\'t have a ball."을 말해 \'don\'t\'가 있으면 반대 뜻이 된다는 것을 보여 준다. 낱말 하나(ball)만 듣고 \'가지고 있다\'로만 이해하는 학생에게는 don\'t 앞에서 고개를 젓는 동작으로 차이를 보여 준다.',
            '문장을 듣고 알맞은 그림을 찾아 봐요. don\'t가 들어가면 뜻이 반대가 돼요.',
            { tool: 'wordcards', options: { mode: 'listen', basket: '들은 것', shuffle: false, say: 'I have a ball.', words: VW('ball', 'book') }, sequence: [{ at: {} }, { at: { ball: 0 } }] }),
          MAIN(27,
            ACT('a1', '활동 1. 들은 문장에 알맞은 그림 고르기', 13, 'wordcards',
              '듣기 단추를 한 번 누르게 하고 소리가 나지 않으면 교사가 읽어 준다. 1번 I have a pencil. 2번 I see a flower. 3번 My dog is big. 4번 It is a sunny day. "문장 속 낱말과 그림을 연결해요." 낱말 하나만 알아듣고 고르는 학생에게는 문장 전체의 뜻이 그림과 맞는지 다시 생각하게 한다. 도전 단계는 닮은 그림이 한 장 더 섞여 있다.',
              '듣기 단추를 눌러 문장을 듣고, 문장에 맞는 그림 카드를 골라요.',
              LA('listen', '문장에서 그림으로 알 수 있는 낱말을 찾고, 문장 전체의 뜻이 그림과 맞는지도 확인하세요.'),
              [
                LS('듣기 단추를 누르고, 들은 문장에 알맞은 그림을 골라 보세요.', 'I have a pencil.', { words: VW('pencil', 'book') }, 'pencil', { d: 0.2, x: VW('ball') }),
                LS('듣기 단추를 누르고, 이번 문장에 알맞은 그림을 골라 보세요.', 'I see a flower.', { words: VW('flower', 'tree') }, 'flower', { d: 0.2, x: VW('leaf') }),
                LS('듣기 단추를 누르고, 들은 문장에 알맞은 그림을 골라 보세요.', 'My dog is big.', { words: VW('dog', 'cat') }, 'dog', { d: 0.25, x: VW('bird'),
                  p: ['문장에서 그림을 알 수 있는 낱말은 하나뿐일까요?', ['한 개 이상일 수 있어요', '언제나 하나뿐이에요'], 0, '그림을 알 수 있는 낱말이 여러 개일 수 있으니 문장 전체를 생각해야 해요.'] }),
                LS('듣기 단추를 누르고, 들은 문장에 알맞은 그림을 골라 보세요.', 'It is a sunny day.', { words: VW('sun', 'cloud') }, 'sun', { d: 0.25, x: VW('snow') }),
              ]),
            ACT('a2', '활동 2. 우리말 설명에 맞는 영어 문장 고르기', 14, 'wordcards',
              '"우리말 설명을 읽고, 그 뜻과 같은 영어 문장 카드 하나를 골라 바구니에 넣어요." 카드를 고르기 전에 영어 문장을 소리 내어 읽게 한다. 문장의 낱말 하나만 같은 카드를 고르는 학생에게는 두 카드의 다른 낱말을 손가락으로 짚어 비교하게 한다. 마지막 문항은 don\'t가 있어서 뜻이 반대가 된다.',
              '우리말 설명을 읽고, 같은 뜻의 영어 문장 카드 하나를 골라요.',
              LA('pick', '두 문장에서 서로 다른 낱말을 찾아 보고, 우리말 설명과 같은 쪽을 고르세요.', { basket: '뜻이 같은 문장' }),
              [
                PK('"나는 공을 가지고 있어요."와 같은 뜻의 문장을 골라 보세요.', [C('ball', 'I have a ball.'), C('book', 'I have a book.')], ['ball'], { d: 0.2 }),
                PK('"새가 나무에 있어요."와 같은 뜻의 문장을 골라 보세요.', [C('bird', 'The bird is in the tree.'), C('cat', 'The cat is in the tree.')], ['bird'], { d: 0.25 }),
                PK('"나는 바나나를 좋아하지 않아요."와 같은 뜻의 문장을 골라 보세요.', [C('like', 'I like bananas.'), C('dont', 'I don\'t like bananas.')], ['dont'], { d: 0.3,
                  p: ['don\'t가 들어가면 뜻은 어떻게 될까요?', ['반대 뜻이 돼요', '뜻이 같아요'], 0, 'don\'t는 \'~하지 않아요\'라는 뜻이라서 문장의 뜻이 반대가 돼요.'] }),
              ]),
          ),
          WRAP(7, '"don\'t가 들어간 문장은 어떤 뜻이 되나요?" 하지 않는다는 뜻이라는 대답을 칠판에 적고 출구 질문을 푼다. don\'t를 놓쳐 반대로 고른 학생은 다음 시간 시작에 \'I like\'와 "I don\'t like"를 번갈아 읽으며 손짓으로 차이를 보여 본다.',
            [
              { type: 'tool', tool: 'wordcards', options: { mode: 'listen', basket: '들은 것', shuffle: false, say: 'I see a cat.', words: VW('cat', 'dog') }, prompt: '듣기 단추를 누르고, 들은 문장에 알맞은 그림을 골라 보세요.', target: { listen: 'cat' }, difficulty: 0.2 },
              { type: 'choice', prompt: '"I don\'t have a pencil."은 무슨 뜻일까요?', options: ['나는 연필이 없어요', '나는 연필이 있어요', '나는 연필을 좋아해요'], answer: 0, difficulty: 0.2, explain: 'don\'t가 있으면 \'~하지 않아요\'라는 뜻이에요.' },
              MOOD('오늘 문장과 그림 맞추기는 어땠나요?'),
            ]),
        ],
        worksheet: WS('문장과 그림, 문장과 뜻', [
          FIG('들은 문장에 맞는 그림을 고르세요. (선생님이 I have a pencil.을 읽어요.)', { mode: 'listen', basket: '들은 것', shuffle: false, say: 'I have a pencil.', words: VW('pencil', 'ball') }, 'pencil'),
          { type: 'table', prompt: '선생님이 읽어 주는 문장을 듣고 알맞은 그림 이름을 쓰세요.', columns: ['번호', '그림 이름'], cells: [['1', ''], ['2', ''], ['3', '']], answer: '교사 읽기 예: 1 I see a flower. flower / 2 My dog is big. dog / 3 It is a sunny day. sun' },
          { type: 'choice', prompt: '"나는 공을 가지고 있어요."와 같은 뜻의 문장에 ○ 하세요.', options: ['I have a ball.', 'I have a book.', 'I see a ball.'], answer: 'I have a ball.' },
          { type: 'short', prompt: '짝에게 "I have a ___."로 가진 물건을 말해 주고 들은 것을 써 보세요.' },
        ], '문장 속 낱말과 그림을 연결하고, 문장 전체의 뜻이 맞는지도 확인해요.', [
          { type: 'table', prompt: '선생님이 읽어 주는 문장을 듣고 알맞은 그림 이름을 쓰세요.', columns: ['번호', '그림 이름'], cells: [['1', ''], ['2', '']], answer: '교사 읽기 예: 1 I see a flower. flower / 2 My dog is big. dog' },
          { type: 'choice', prompt: '"I have a book."의 뜻에 ○ 하세요.', options: ['나는 책이 있어요', '나는 책이 없어요'], answer: '나는 책이 있어요' },
          { type: 'choice', prompt: '"I don\'t like milk."의 뜻에 ○ 하세요.', options: ['우유를 좋아하지 않아요', '우유를 좋아해요'], answer: '우유를 좋아하지 않아요' },
          { type: 'short', prompt: '오늘 알게 된 영어 문장 하나를 써 보세요.' },
        ]),
        differentiation: DIFF(
          '그림 고르기와 문장 고르기에서 카드가 두 장이고, 맞게 놓으면 초록 테두리가 생기며 틀리게 놓으면 카드가 되돌아와요.',
          '문장을 듣고 그림을 고르고, 우리말 뜻에 맞는 문장을 골라요. 다 고른 뒤 확인을 눌러 스스로 고쳐요.',
          '그림 고르기에 닮은 그림 카드가 한 장 더 섞여 나오고, 문장 고르기에 don\'t가 든 문장이 나와요.'),
        teacherNotes: '자주 보이는 어려움: ① don\'t를 놓쳐 반대 뜻으로 고른다 → 고개를 젓는 동작과 함께 읽어 준다. ② 낱말 하나만 같은 카드를 고른다 → 두 카드의 다른 낱말을 손가락으로 짚어 비교하게 한다. ③ 기기 음성이 빨라 마지막 낱말을 놓친다 → 교사가 천천히 읽어 준다. 문장은 모두 새로 지은 짧은 문장이다.',
      }),

      // ───────────────────────── 24차시 (core) ─────────────────────────
      lesson(24, S6, {
        title: '가족을 소개하는 말을 듣고 누구인지 찾기',
        objective: '"This is my mom." 같은 가족 소개를 듣고 누구인지 알맞은 카드를 고르며, 가족이 좋아하는 것과 짝 지을 수 있다.',
        illustration: {
          prompt: PROMPT('a family photo frame with mom, dad, sister, brother and grandma figures in paper-cut style and a speech bubble introducing one of them'),
          scene: SC('This is my mom.', 'dad  sister  brother', [{ motif: 'house', x: 90, y: 218, color: 'sky' }, { motif: 'tree', x: 404, y: 214 }, { motif: 'flower', x: 250, y: 216 }]),
        },
        stages: [
          INTRO(7, '칠판에 가족 그림 다섯 개(엄마, 아빠, 누나·언니, 형·오빠, 할머니)를 그리고 "엄마는 영어로 mom, 아빠는 dad예요."라고 알려 준다. 교사가 "This is my mom."을 읽으며 엄마 그림을 가리키고 "나의 엄마는 누구일까요?"라고 묻는다. 학생 가족 이야기를 이끌 때는 가족 구성이 다양하다는 점을 고려해 "내 곁에 있는 사람"이라는 말로 열어 준다. 가족 낱말을 모르면 이야기를 못 알아듣는다고 걱정하는 학생에게는 This is my 뒤의 낱말만 들으면 된다고 알려 준다.',
            '가족 영어 낱말을 만나 봐요. This is my ___.에서 빈칸에 들어가는 말이 누구인지 들어 봐요.',
            { tool: 'wordcards', options: { mode: 'listen', basket: '들은 것', shuffle: false, say: 'This is my mom.', cards: [C('mom', '엄마'), C('dad', '아빠')] }, sequence: [{ at: {} }, { at: { mom: 0 } }] }),
          MAIN(26,
            ACT('a1', '활동 1. 가족 소개를 듣고 누구인지 고르기', 13, 'wordcards',
              '듣기 단추를 한 번 누르게 하고 소리가 나지 않으면 교사가 읽어 준다. 1번 This is my mom. 2번 This is my dad. 3번 This is my sister. 4번 This is my grandma. sister는 \'누나·언니·여동생\', brother는 \'형·오빠·남동생\'을 모두 가리킨다고 알려 준다. 가족 구성이 서로 다를 수 있으니 이야기를 강요하지 않는다. 소개 앞부분(This is)만 듣는 학생에게는 my 뒤의 낱말에 집중하게 한다.',
              '듣기 단추를 눌러 가족 소개를 듣고, 소개하는 사람의 카드를 골라요.',
              LA('listen', '"This is my" 바로 뒤에 나오는 낱말에 귀를 기울여 보세요.'),
              [
                LS('듣기 단추를 누르고, 소개하는 가족 카드를 골라 보세요.', 'This is my mom.', { cards: [C('mom', '엄마'), C('dad', '아빠')] }, 'mom', { d: 0.15, x: [C('sister', '언니·누나·여동생')] }),
                LS('듣기 단추를 누르고, 이번에 소개하는 가족 카드를 골라 보세요.', 'This is my dad.', { cards: [C('dad', '아빠'), C('brother', '형·오빠·남동생')] }, 'dad', { d: 0.2, x: [C('mom', '엄마')] }),
                LS('듣기 단추를 누르고, 소개하는 가족 카드를 골라 보세요.', 'This is my sister.', { cards: [C('sister', '언니·누나·여동생'), C('brother', '형·오빠·남동생')] }, 'sister', { d: 0.25, x: [C('grandma', '할머니')],
                  p: ['sister는 우리말로 누구일까요?', ['누나·언니·여동생이에요', '엄마만 가리켜요'], 0, 'sister는 나보다 나이가 많든 적든 여자 형제를 가리키는 말이에요.'] }),
                LS('듣기 단추를 누르고, 소개하는 가족 카드를 골라 보세요.', 'This is my grandma.', { cards: [C('grandma', '할머니'), C('mom', '엄마')] }, 'grandma', { d: 0.25, x: [C('grandpa', '할아버지')] }),
              ]),
            ACT('a2', '활동 2. 가족 소개를 듣고 좋아하는 것과 짝 짓기', 13, 'wordcards',
              '교사가 세 가족의 소개를 차례로 읽어 준다. 1세트: This is my dad. He likes fish. This is my mom. She likes flowers. This is my sister. She likes books. 2세트: This is my grandma. She likes cats. This is my grandpa. He likes trees. This is my brother. He likes balls. 3세트: This is my mom. She likes apples. This is my dad. He likes birds. This is my brother. He likes pencils. "가족 칸 옆에 좋아하는 것의 그림을 놓아요." he와 she를 헷갈리는 학생에게는 \'남자는 he, 여자는 she\'라고 알려 준다.',
              '가족 소개를 듣고, 가족 칸 옆에 좋아하는 것의 그림 카드를 놓아요.',
              LA('match', '가족 한 명을 들을 때마다 그 사람이 좋아하는 것을 바로 짝 지어 보세요.'),
              [
                MT('가족 소개를 듣고 좋아하는 것을 짝 지어 보세요. (1세트)', [{ id: 'dad', label: '아빠' }, { id: 'mom', label: '엄마' }, { id: 'sister', label: '언니·누나·여동생' }], [WC('fish', '물고기'), WC('flower', '꽃'), WC('book', '책')], { dad: 'fish', mom: 'flower', sister: 'book' }, { d: 0.25 }),
                MT('가족 소개를 듣고 좋아하는 것을 짝 지어 보세요. (2세트)', [{ id: 'grandma', label: '할머니' }, { id: 'grandpa', label: '할아버지' }, { id: 'brother', label: '형·오빠·남동생' }], [WC('cat', '고양이'), WC('tree', '나무'), WC('ball', '공')], { grandma: 'cat', grandpa: 'tree', brother: 'ball' }, { d: 0.3 }),
                MT('가족 소개를 듣고 좋아하는 것을 짝 지어 보세요. (3세트)', [{ id: 'mom', label: '엄마' }, { id: 'dad', label: '아빠' }, { id: 'brother', label: '형·오빠·남동생' }], [WC('apple', '사과'), WC('bird', '새'), WC('pencil', '연필')], { mom: 'apple', dad: 'bird', brother: 'pencil' }, { d: 0.3, x: [WC('egg', '달걀')] }),
              ]),
          ),
          WRAP(7, '"가족을 소개할 때 \'This is my\' 다음에 무엇이 나오나요?" 가족 낱말이 나온다는 대답을 칠판에 적고 출구 질문을 푼다. 내 가족과 다른 구성이어서 이야기하기 어려운 학생에게는 친구나 이웃으로 바꾸어 말해도 된다고 알려 준다.',
            [
              { type: 'tool', tool: 'wordcards', options: { mode: 'listen', basket: '들은 것', shuffle: false, say: 'This is my brother.', cards: [C('brother', '형·오빠·남동생'), C('mom', '엄마')] }, prompt: '듣기 단추를 누르고, 소개하는 가족 카드를 골라 보세요. (다른 가족)', target: { listen: 'brother' }, difficulty: 0.2 },
              { type: 'choice', prompt: '"This is my grandpa."의 뜻에 ○ 하세요.', options: ['이분은 우리 할아버지예요', '이분은 우리 할머니예요', '이분은 우리 아빠예요'], answer: 0, difficulty: 0.15, explain: 'grandpa는 할아버지, grandma는 할머니예요.' },
              MOOD('오늘 가족 소개 듣기는 어땠나요?'),
            ]),
        ],
        worksheet: WS('가족 소개 듣기', [
          { type: 'table', prompt: '선생님이 읽어 주는 가족 소개를 듣고 알맞은 가족에 ○ 하세요.', columns: ['번호', '들은 가족'], cells: [['1', '엄마  아빠'], ['2', '아빠  형·오빠'], ['3', '언니·누나  형·오빠'], ['4', '할머니  엄마']], answer: '교사 읽기 예: 1 mom 엄마 / 2 dad 아빠 / 3 sister 언니·누나 / 4 grandma 할머니' },
          FIG('가족 소개를 듣고 좋아하는 것과 짝 지으세요.', { mode: 'match', shuffle: true, slots: [{ id: 'mom', label: '엄마' }, { id: 'dad', label: '아빠' }], cards: [WC('flower', '꽃'), WC('fish', '물고기')] }, '엄마 — flower / 아빠 — fish'),
          { type: 'check', prompt: '"This is my sister."에서 알 수 있는 것에 ✓ 하세요.', options: ['여자 형제를 소개해요', '남자 형제를 소개해요', '선생님을 소개해요'], answer: '여자 형제를 소개해요' },
          { type: 'draw', prompt: '내 곁에 있는 소중한 사람 한 명을 그리고 "This is my ___."를 완성해 보세요.' },
        ], '"This is my" 다음에 오는 낱말에 귀를 기울여요.', [
          { type: 'table', prompt: '선생님이 읽어 주는 가족 소개를 듣고 알맞은 가족에 ○ 하세요.', columns: ['번호', '들은 가족'], cells: [['1', '엄마  아빠'], ['2', '아빠  형·오빠']], answer: '교사 읽기 예: 1 mom 엄마 / 2 dad 아빠' },
          { type: 'choice', prompt: '"mom"의 뜻에 ○ 하세요.', options: ['엄마', '아빠'], answer: '엄마' },
          { type: 'choice', prompt: '"grandma"의 뜻에 ○ 하세요.', options: ['할머니', '할아버지'], answer: '할머니' },
          { type: 'short', prompt: '오늘 알게 된 가족 낱말 하나를 써 보세요.' },
        ]),
        differentiation: DIFF(
          '가족 고르기와 좋아하는 것 짝 짓기에서 카드가 적고, 맞게 놓으면 초록 테두리가 생기며 틀리게 놓으면 카드가 되돌아와요.',
          '가족 소개를 듣고 카드를 고르고, 짝 짓기는 다 놓은 뒤 확인을 눌러 스스로 고쳐요.',
          '가족 고르기에 닮은 가족 카드가 한 장 더 섞이고, 짝 짓기 3세트에 짝이 없는 그림 카드가 한 장 더 나와요.'),
        teacherNotes: '자주 보이는 어려움: ① sister와 brother를 나이로만 이해한다 → 여자 형제·남자 형제를 가리킨다고 알려 준다. ② he와 she를 바꾼다 → 남자는 he, 여자는 she로 가족 그림에 적어 준다. ③ 가족 구성이 서로 달라 이야기하기 어렵다 → 친구·이웃으로 바꾸어 말해도 된다고 알려 준다. 학생의 개인 정보는 쓰지 않고 소개문은 새로 지은 문장이다.',
      }),

      // ───────────────────────── 25차시 (practice) ─────────────────────────
      lesson(25, S6, {
        title: '친구를 소개하는 말을 듣고 이름과 성격 짝 짓기',
        objective: '"This is Yuna. She is kind." 같은 친구 소개를 듣고 이름이나 좋아하는 것을 찾고, 친구와 성격 낱말(kind, tall, funny 등)을 짝 지을 수 있다.',
        illustration: {
          prompt: PROMPT('three friends standing in a row with name tags and small icons showing kind, tall and funny, while a speaker introduces one of them'),
          scene: SC('Yuna is kind.', 'Jun is tall.', [{ motif: 'flower', x: 84, y: 216 }, { motif: 'house', x: 396, y: 218, color: 'sky' }, { motif: 'star', x: 250, y: 74, s: 0.6 }]),
        },
        stages: [
          INTRO(6, '교사가 "This is Yuna. She is kind."를 읽고 "Yuna는 어떤 친구일까요?"라고 묻는다. kind를 \'친절해요\'라고 알려 주며 상냥하게 웃는 표정을 보여 준다. 이어 "Jun is tall."을 읽고 키가 큰 동작을 해 보인다. 친구 소개는 이름과 성격이 함께 나온다는 점을 알려 준다. 학생들의 실제 외모나 성격을 평가하지 않도록 \'가상 친구\'라고 말한다.',
            '친구를 소개하는 말에는 이름과 어떤 친구인지가 함께 나와요. 가상 친구 Yuna는 어떤 친구일까요?',
            { tool: 'wordcards', options: { mode: 'listen', basket: '들은 것', shuffle: false, say: 'This is Yuna. She is kind.', cards: [C('yuna', 'Yuna'), C('jun', 'Jun')] }, sequence: [{ at: {} }, { at: { yuna: 0 } }] }),
          MAIN(27,
            ACT('a1', '활동 1. 친구 소개를 듣고 이름과 좋아하는 것 찾기', 13, 'wordcards',
              '듣기 단추를 한 번 누르게 하고 소리가 나지 않으면 교사가 읽어 준다. 1번 My friend Tom likes dogs. 2번 This is Sara. She likes apples. 3번 My friend Ben likes books. 4번 This is Hana. She is nine. 친구 이름은 모두 새로 지은 가상 이름이다. 두 가지 정보 중 이름과 좋아하는 것을 구별하는 학생에게는 Tom, Sara 같은 이름 카드와 그림 카드를 따로 살펴보게 한다.',
              '듣기 단추를 눌러 친구 소개를 듣고, 물은 것에 알맞은 카드를 골라요.',
              LA('listen', '이름인지 좋아하는 것인지 먼저 정하고, 문장에서 그 정보가 나오는 곳에 귀를 기울이세요.'),
              [
                LS('듣기 단추를 누르고, Tom이 좋아하는 것의 그림을 골라 보세요.', 'My friend Tom likes dogs.', { words: VW('dog', 'cat') }, 'dog', { d: 0.2, x: VW('bird') }),
                LS('듣기 단추를 누르고, 소개하는 친구의 이름을 골라 보세요.', 'This is Sara. She likes apples.', { cards: [C('sara', 'Sara'), C('hana', 'Hana')] }, 'sara', { d: 0.2, x: [C('yuna', 'Yuna')] }),
                LS('듣기 단추를 누르고, Ben이 좋아하는 것의 그림을 골라 보세요.', 'My friend Ben likes books.', { words: VW('book', 'pencil') }, 'book', { d: 0.25, x: VW('ball'),
                  p: ['친구 소개에서 이름은 어디에 나올까요?', ['소개 앞쪽이나 My friend 뒤에 나와요', '소개 맨 끝에만 나와요'], 0, '이름은 This is 뒤나 My friend 뒤에 나올 때가 많아요.'] }),
                LS('듣기 단추를 누르고, Hana의 나이를 골라 보세요.', 'This is Hana. She is nine.', { cards: NUM(9, 8) }, '9', { d: 0.3, x: NUM(10) }),
              ]),
            ACT('a2', '활동 2. 친구 소개를 듣고 성격 낱말과 짝 짓기', 14, 'wordcards',
              '교사가 세 친구의 소개를 차례로 읽어 준다. 1세트: This is Yuna. She is kind. This is Jun. He is tall. This is Sara. She is funny. 2세트: This is Ben. He is happy. This is Hana. She is shy. This is Tom. He is smart. 3세트: This is Mina. She is strong. This is Dan. He is kind. This is Eve. She is tall. 낱말 뜻은 kind 친절한, tall 키가 큰, funny 재미있는, happy 행복한, shy 부끄러움 타는, smart 똑똑한, strong 힘센이라고 칠판에 적는다. "친구 이름 옆에 그 친구를 설명하는 카드를 놓아요."',
              '친구 소개를 듣고, 이름 칸 옆에 그 친구를 설명하는 성격 카드를 놓아요.',
              LA('match', '친구 이름을 들을 때마다 바로 성격 카드를 짝 지어 보며 기억하세요.'),
              [
                MT('친구 소개를 듣고 성격 카드를 짝 지어 보세요. (1세트)', [{ id: 'yuna', label: 'Yuna' }, { id: 'jun', label: 'Jun' }, { id: 'sara', label: 'Sara' }], [C('kind', '친절해요'), C('tall', '키가 커요'), C('funny', '재미있어요')], { yuna: 'kind', jun: 'tall', sara: 'funny' }, { d: 0.3 }),
                MT('친구 소개를 듣고 성격 카드를 짝 지어 보세요. (2세트)', [{ id: 'ben', label: 'Ben' }, { id: 'hana', label: 'Hana' }, { id: 'tom', label: 'Tom' }], [C('happy', '행복해요'), C('shy', '부끄러움을 타요'), C('smart', '똑똑해요')], { ben: 'happy', hana: 'shy', tom: 'smart' }, { d: 0.3 }),
                MT('친구 소개를 듣고 성격 카드를 짝 지어 보세요. (3세트)', [{ id: 'mina', label: 'Mina' }, { id: 'dan', label: 'Dan' }, { id: 'eve', label: 'Eve' }], [C('strong', '힘이 세요'), C('kind', '친절해요'), C('tall', '키가 커요')], { mina: 'strong', dan: 'kind', eve: 'tall' }, { d: 0.35, x: [C('shy', '부끄러움을 타요')] }),
              ]),
          ),
          WRAP(7, '"친구를 소개할 때 어떤 말을 쓰면 서로 기분이 좋을까요?" 좋은 점을 말한다는 대답을 칠판에 적고 출구 질문을 푼다. 친구의 단점을 말하고 싶어 하는 학생에게는 오늘은 좋은 점을 소개하는 활동이라고 알려 준다.',
            [
              { type: 'tool', tool: 'wordcards', options: { mode: 'listen', basket: '들은 것', shuffle: false, say: 'This is Hana. She likes birds.', words: VW('bird', 'fish') }, prompt: '듣기 단추를 누르고, 친구가 좋아하는 것의 그림을 골라 보세요. (Hana 소개)', target: { listen: 'bird' }, difficulty: 0.2 },
              { type: 'choice', prompt: '"He is tall."의 뜻에 ○ 하세요.', options: ['그는 키가 커요', '그는 친절해요', '그는 재미있어요'], answer: 0, difficulty: 0.2, explain: 'tall은 \'키가 큰\'이라는 뜻이에요.' },
              MOOD('오늘 친구 소개 듣기는 어땠나요?'),
            ]),
        ],
        worksheet: WS('친구 소개 듣기', [
          { type: 'table', prompt: '선생님이 읽어 주는 친구 소개를 듣고 이름과 성격을 쓰세요.', columns: ['이름', '성격'], cells: [['', ''], ['', ''], ['', '']], answer: '교사 읽기 예: Yuna kind / Jun tall / Sara funny' },
          FIG('친구와 성격을 이으세요.', { mode: 'match', shuffle: true, slots: [{ id: 'yuna', label: 'Yuna' }, { id: 'jun', label: 'Jun' }], cards: [C('kind', '친절해요'), C('tall', '키가 커요')] }, 'Yuna — kind / Jun — tall'),
          { type: 'check', prompt: '"This is Sara. She is funny."에서 알 수 있는 것에 ✓ 하세요.', options: ['이름이 Sara', '재미있는 친구', '키가 큰 친구'], answer: '이름이 Sara, 재미있는 친구' },
          { type: 'short', prompt: '짝을 소개하는 말을 "This is ___. He/She is ___."에 맞게 써 보세요.' },
        ], '이름 낱말과 성격 낱말을 따로 나누어 들으며 기억해요.', [
          { type: 'table', prompt: '선생님이 읽어 주는 친구 소개를 듣고 이름과 성격을 쓰세요.', columns: ['이름', '성격'], cells: [['', ''], ['', '']], answer: '교사 읽기 예: Yuna kind / Jun tall' },
          { type: 'choice', prompt: '"kind"의 뜻에 ○ 하세요.', options: ['친절해요', '키가 커요'], answer: '친절해요' },
          { type: 'choice', prompt: '"tall"의 뜻에 ○ 하세요.', options: ['키가 커요', '친절해요'], answer: '키가 커요' },
          { type: 'short', prompt: '오늘 알게 된 성격 낱말 하나를 써 보세요.' },
        ]),
        differentiation: DIFF(
          '정보 찾기와 짝 짓기에서 카드가 적고, 맞게 놓으면 초록 테두리가 생기며 틀리게 놓으면 카드가 되돌아와요.',
          '친구 소개를 듣고 카드를 고르고, 짝 짓기는 다 놓은 뒤 확인을 눌러 스스로 고쳐요.',
          '정보 찾기에 닮은 카드가 한 장 더 섞이고, 짝 짓기 3세트에 짝이 없는 성격 카드(shy)가 한 장 더 나와요.'),
        teacherNotes: '자주 보이는 어려움: ① 이름 낱말과 성격 낱말을 구별하지 못한다 → 이름 카드는 대문자로 시작한다는 것을 알려 준다. ② 한 친구의 성격만 기억한다 → 소개를 한 명씩 듣고 바로 짝 지으라고 안내한다. ③ 실제 친구를 평가하고 싶어 한다 → 가상 친구의 좋은 점을 소개하는 활동이라고 알려 준다. 친구 이름은 모두 가상 가명이다.',
      }),

      // ───────────────────────── 26차시 (core) ─────────────────────────
      lesson(26, S6, {
        title: '학교생활 안내 방송을 듣고 지금 무슨 시간인지 찾기',
        objective: '"Class starts now." 같은 짧은 학교생활 안내를 듣고 수업·점심·청소·하교 중 알맞은 시간을 고르며, 안내를 들은 차례대로 놓을 수 있다.',
        illustration: {
          prompt: PROMPT('a school hallway with a small speaker on the wall and four icons for class, lunch, cleaning and going home hanging below it'),
          scene: SC('Class starts now.', 'Time for lunch.', [{ motif: 'house', x: 86, y: 218, color: 'sky' }, { motif: 'tree', x: 404, y: 214 }, { motif: 'bird', x: 250, y: 74 }]),
        },
        stages: [
          INTRO(7, '교사가 학교 안내 방송 말투로 "Class starts now."를 읽고 학생이 책을 펴는 시늉을 하게 한다. 이어 "It is time for lunch."를 읽고 숟가락으로 먹는 시늉을 해 보인다. "소리만 듣고 어떤 시간인지 알 수 있나요?"라고 묻고 동작이 단서가 된다는 것을 이야기한다. 안내 전체를 이해해야 한다고 걱정하는 학생에게는 핵심 낱말(class, lunch, clean, home)만 들으면 된다고 알려 준다.',
            '학교 안내 방송을 들으면 지금이 무슨 시간인지 알 수 있어요. 핵심 낱말 하나만 잘 들어도 돼요.',
            { tool: 'wordcards', options: { mode: 'listen', basket: '들은 것', shuffle: false, say: 'Class starts now.', cards: [C('class', '수업이 시작돼요'), C('lunch', '점심 시간이에요')] }, sequence: [{ at: {} }, { at: { class: 0 } }] }),
          MAIN(26,
            ACT('a1', '활동 1. 짧은 안내를 듣고 무슨 시간인지 고르기', 13, 'wordcards',
              '듣기 단추를 한 번 누르게 하고 소리가 나지 않으면 교사가 읽어 준다. 1번 Class starts now. 2번 It is time for lunch. 3번 Let\'s clean the room. 4번 Bye! See you tomorrow. 핵심 낱말은 class, lunch, clean, bye이다. 낱말 하나를 놓치고 다른 카드를 고르는 학생에게는 두 번 더 천천히 들려주며 핵심 낱말에 손을 들게 한다.',
              '듣기 단추를 눌러 학교 안내를 듣고, 무슨 시간인지 알맞은 카드를 골라요.',
              LA('listen', '안내 속에서 가장 크게 또렷이 들리는 핵심 낱말을 찾아 어떤 시간인지 정해 보세요.'),
              [
                LS('듣기 단추를 누르고, 안내가 알리는 시간을 골라 보세요.', 'Class starts now.', { cards: [C('class', '수업이 시작돼요'), C('lunch', '점심 시간이에요')] }, 'class', { d: 0.2, x: [C('home', '집에 가요')] }),
                LS('듣기 단추를 누르고, 이번 안내가 알리는 시간을 골라 보세요.', 'It is time for lunch.', { cards: [C('lunch', '점심 시간이에요'), C('clean', '청소해요')] }, 'lunch', { d: 0.2, x: [C('class', '수업이 시작돼요')] }),
                LS('듣기 단추를 누르고, 안내가 알리는 일을 골라 보세요.', 'Let\'s clean the room.', { cards: [C('clean', '청소해요'), C('home', '집에 가요')] }, 'clean', { d: 0.25, x: [C('lunch', '점심 시간이에요')],
                  p: ['안내 방송을 알아들으려면 모든 낱말을 알아야 할까요?', ['핵심 낱말만 알아도 돼요', '모든 낱말을 알아야 해요'], 0, '핵심 낱말(class, lunch, clean)만 들어도 어떤 안내인지 알 수 있어요.'] }),
                LS('듣기 단추를 누르고, 안내가 알리는 일을 골라 보세요.', 'Bye! See you tomorrow.', { cards: [C('home', '집에 가요'), C('class', '수업이 시작돼요')] }, 'home', { d: 0.25, x: [C('clean', '청소해요')] }),
              ]),
            ACT('a2', '활동 2. 안내를 들은 차례대로 놓기', 13, 'wordcards',
              '"듣기 단추를 눌러 안내를 끝까지 듣고, 나온 차례대로 카드를 놓아요." 소리가 나지 않으면 교사가 문항 번호를 말한 뒤 읽어 준다. 1번 Good morning, class. Open your book. It is time for lunch. 2번 Hello, class. Draw a bird. See you tomorrow. 3번 Class starts. Wash your hands. Let\'s clean the room. 안내가 세 문장이니 한 문장이 나올 때마다 손가락을 하나씩 펴게 한다. 마지막 안내만 기억하는 학생에게는 한 번 더 들려주며 문장마다 카드를 바로 놓게 한다.',
              '듣기 단추를 눌러 안내를 듣고, 안내에 나온 차례대로 카드를 놓아요.',
              LA('order', '문장이 하나 나올 때마다 손가락을 하나씩 펴며 들어 보고, 그 차례대로 카드를 놓아요.'),
              [
                OR('듣기 단추를 누르고, 들은 안내의 차례대로 카드를 놓아 보세요. (1번)', [C('g', '아침 인사'), C('b', '책 펴기'), C('l', '점심 시간')], ['g', 'b', 'l'], { say: 'Good morning, class. Open your book. It is time for lunch.', d: 0.25 }),
                OR('듣기 단추를 누르고, 들은 안내의 차례대로 카드를 놓아 보세요. (2번)', [C('h', '인사하기'), C('d', '새 그리기'), C('s', '내일 만나기')], ['h', 'd', 's'], { say: 'Hello, class. Draw a bird. See you tomorrow.', d: 0.25 }),
                OR('듣기 단추를 누르고, 들은 안내의 차례대로 카드를 놓아 보세요. (3번)', [C('c', '수업 시작'), C('w', '손 씻기'), C('k', '교실 청소')], ['c', 'w', 'k'], { say: 'Class starts. Wash your hands. Let\'s clean the room.', d: 0.3,
                  p: ['안내를 들을 때 순서는 어떻게 알 수 있을까요?', ['문장이 나온 차례로 알 수 있어요', '순서는 알 수 없어요'], 0, '문장이 하나씩 나올 때마다 손가락을 펴며 들으면 차례를 기억하기 쉬워요.'] }),
              ]),
          ),
          WRAP(7, '"학교 안내 방송을 알아들으려면 어떻게 들으면 좋을까요?" 핵심 낱말 하나를 찾아 듣고 문장이 나온 차례를 기억한다는 대답을 칠판에 정리하고 출구 질문을 푼다. 마지막 안내만 기억하는 학생은 다음 시간 시작에 안내를 한 문장씩 나누어 듣고 카드를 바로 놓아 본다.',
            [
              { type: 'tool', tool: 'wordcards', options: { mode: 'listen', basket: '들은 것', shuffle: false, say: 'Time to go home.', cards: [C('home', '집에 가요'), C('lunch', '점심 시간이에요')] }, prompt: '듣기 단추를 누르고, 안내가 알리는 일을 골라 보세요. (끝 인사)', target: { listen: 'home' }, difficulty: 0.2 },
              { type: 'choice', prompt: '"It is time for lunch."는 어떤 시간일까요?', options: ['점심 시간', '청소 시간', '하교 시간'], answer: 0, difficulty: 0.15, explain: 'lunch가 점심이라는 뜻이라 점심 시간이에요.' },
              MOOD('오늘 학교 안내 듣기는 어땠나요?'),
            ]),
        ],
        worksheet: WS('학교생활 안내 듣기', [
          { type: 'table', prompt: '선생님이 읽어 주는 안내를 듣고 알맞은 시간에 ○ 하세요.', columns: ['번호', '무슨 시간일까요?'], cells: [['1', '수업  점심'], ['2', '청소  하교'], ['3', '점심  수업'], ['4', '하교  청소']], answer: '교사 읽기 예: 1 Class starts now. 수업 / 2 Let\'s clean the room. 청소 / 3 It is time for lunch. 점심 / 4 Bye! See you tomorrow. 하교' },
          FIG('들은 안내에 알맞은 카드를 고르세요. (선생님이 Class starts now.를 읽어요.)', { mode: 'listen', basket: '들은 것', shuffle: false, say: 'Class starts now.', cards: [C('class', '수업이 시작돼요'), C('lunch', '점심 시간이에요')] }, '수업이 시작돼요'),
          { type: 'check', prompt: '"Let\'s clean the room."에서 알 수 있는 것에 ✓ 하세요.', options: ['교실을 청소해요', '점심을 먹어요', '집에 가요'], answer: '교실을 청소해요' },
          { type: 'draw', prompt: '학교에서 가장 좋아하는 시간을 그리고 한 줄로 우리말로 써 보세요.' },
        ], '핵심 낱말 하나에 귀를 기울이고, 한 문장이 끝날 때마다 손가락을 하나씩 펴요.', [
          { type: 'table', prompt: '선생님이 읽어 주는 안내를 듣고 알맞은 시간에 ○ 하세요.', columns: ['번호', '무슨 시간일까요?'], cells: [['1', '수업  점심'], ['2', '청소  하교']], answer: '교사 읽기 예: 1 Class starts now. 수업 / 2 Let\'s clean the room. 청소' },
          { type: 'choice', prompt: '"lunch"의 뜻에 ○ 하세요.', options: ['점심', '청소'], answer: '점심' },
          { type: 'choice', prompt: '"clean"의 뜻에 ○ 하세요.', options: ['청소하다', '먹다'], answer: '청소하다' },
          { type: 'short', prompt: '오늘 알게 된 학교 낱말 하나를 써 보세요.' },
        ]),
        differentiation: DIFF(
          '안내 고르기에서 카드가 두 장이고, 맞게 놓으면 초록 테두리가 생기며 틀리게 놓으면 카드가 되돌아와요.',
          '안내를 듣고 시간을 고르고, 차례 놓기는 다 놓은 뒤 확인을 눌러 스스로 고쳐요.',
          '안내 고르기에 어울리지 않는 카드가 한 장 더 섞이고, 차례 놓기 안내가 세 문장으로 길어요.'),
        teacherNotes: '자주 보이는 어려움: ① 안내의 모든 낱말을 알아들어야 한다고 걱정한다 → 핵심 낱말 하나만 들어도 된다고 알려 준다. ② 마지막 문장만 기억해 차례를 놓친다 → 문장마다 손가락을 하나씩 펴 가며 들게 한다. ③ 기기 음성이 한 번에 길게 읽는다 → 교사가 문장 사이를 끊어 읽어 준다. 안내 문장은 모두 새로 지은 짧은 문장이다.',
      }),

      // ───────────────────────── 27차시 (wrap) ─────────────────────────
      lesson(27, S6, {
        title: '단원 듣기 전략을 모아 쓰고 스스로 평가하기',
        objective: '학교생활 안내에서 핵심을 찾는 방법과 단원에서 배운 소개·낱말·끝소리 듣기 전략을 모아 사용하고, 내가 잘 듣는 것과 더 연습할 것을 말할 수 있다.',
        illustration: {
          prompt: PROMPT('a child standing in front of a bulletin board with stickers for names, numbers, pictures and questions, holding a small trophy shaped like an ear'),
          scene: SC('나의 듣기 전략', '핵심 낱말 · 그림 · 끝소리', [{ motif: 'star', x: 90, y: 80, s: 0.6 }, { motif: 'tree', x: 404, y: 214 }, { motif: 'house', x: 90, y: 218, color: 'sky' }]),
        },
        stages: [
          INTRO(5, '칠판에 이 단원에서 배운 듣기 전략을 "글자 이름·첫소리, 박수와 센 소리, 소개 정보 찾기, 비슷한 소리 구별, 그림 단서, 끝소리, 핵심 낱말" 일곱 줄로 적는다. "일곱 가운데 가장 자신 있는 것과 더 연습하고 싶은 것을 하나씩 골라 보세요."라고 말한다. 일곱 가지를 모두 외워야 한다고 부담을 느끼는 학생에게는 오늘 활동하면서 필요한 것을 골라 쓰면 된다고 알려 준다.',
            '이 단원에서 배운 듣기 전략이 일곱 가지예요. 가장 자신 있는 것과 더 연습하고 싶은 것을 골라 봐요.',
            { tool: 'wordcards', options: { mode: 'listen', basket: '들은 것', shuffle: false, say: 'Time to go home.', cards: [C('home', '집에 가요'), C('clean', '청소해요')] }, sequence: [{ at: {} }, { at: { home: 0 } }] }),
          MAIN(28,
            ACT('a1', '활동 1. 학교생활 안내에서 핵심 찾기', 14, 'wordcards',
              '듣기 단추를 한 번 누르게 하고 소리가 나지 않으면 교사가 읽어 준다. 1번 Please be quiet. The test starts now. 2번 Let\'s play ball in the playground. 3번 It is time to go home. Take your bag. 4번 Wash your hands. It is lunch time. 핵심 낱말(test, ball, home, lunch)을 찾게 한다. 한 문장만 듣고 판단하는 학생에게는 두 문장 모두 듣게 한다. 도전 단계는 닮은 안내가 한 장 더 섞여 있다.',
              '듣기 단추를 눌러 학교 안내를 듣고, 안내가 알리는 일의 카드를 골라요.',
              LA('listen', '두 문장 가운데 가장 또렷이 들리는 핵심 낱말을 찾아, 그 일에 해당하는 카드를 고르세요.'),
              [
                LS('듣기 단추를 누르고, 안내가 알리는 일을 골라 보세요.', 'Please be quiet. The test starts now.', { cards: [C('test', '시험을 봐요'), C('play', '운동장에서 놀아요')] }, 'test', { d: 0.3, x: [C('lunch', '점심 시간이에요')] }),
                LS('듣기 단추를 누르고, 이번 안내가 알리는 일을 골라 보세요.', 'Let\'s play ball in the playground.', { cards: [C('play', '운동장에서 놀아요'), C('test', '시험을 봐요')] }, 'play', { d: 0.3, x: [C('clean', '청소해요')] }),
                LS('듣기 단추를 누르고, 가방을 챙기라는 안내가 알리는 일을 골라 보세요.', 'It is time to go home. Take your bag.', { cards: [C('home', '집에 갈 준비를 해요'), C('lunch', '점심 시간이에요')] }, 'home', { d: 0.3, x: [C('class', '수업이 시작돼요')],
                  p: ['안내가 두 문장이면 어느 문장을 들어야 할까요?', ['두 문장을 모두 들어요', '첫 문장만 들어요'], 0, '두 문장을 모두 들어야 안내하는 일을 정확히 알 수 있어요.'] }),
                LS('듣기 단추를 누르고, 안내가 알리는 일을 골라 보세요.', 'Wash your hands. It is lunch time.', { cards: [C('lunch', '손을 씻고 점심을 먹어요'), C('clean', '청소해요')] }, 'lunch', { d: 0.3, x: [C('home', '집에 가요')] }),
              ]),
            ACT('a2', '활동 2. 단원 듣기 전략 모아 풀기', 14, 'wordcards',
              '"배운 전략을 골라 써 볼까요?" 첫 문항은 자기소개에서 두 정보를 듣는 전략, 둘째는 그림 낱말 짝, 셋째는 묻는 말과 알리는 말 구별이다. 셋째는 교사가 번호를 말하고 읽어 준다. 1번 Is this your bag? 2번 It is my bag. 3번 Do you have a pen? 4번 I have a pen. 어떤 전략을 써야 할지 모르는 학생에게는 앞 시간 칠판 일곱 줄 가운데 소리와 가장 가까운 전략을 짝과 이야기하게 한다.',
              '듣기 단추나 교사의 읽기를 들으며 단원에서 배운 전략을 골라 문제를 풀어요.',
              LA('listen', '들으면서 어떤 전략이 필요한지 먼저 정하고, 알맞은 카드를 골라 보세요.'),
              [
                LS('듣기 단추를 누르고, 소개하는 친구의 이름과 나이를 모두 골라 보세요. (단원 마무리)', 'Hello! I\'m Dan. I\'m six. I like birds.', { cards: [C('dan', 'Dan'), C('ben', 'Ben'), ...NUM(6, 8)] }, ['dan', '6'], { d: 0.3 }),
                MW('그림 옆에 알맞은 영어 이름 카드를 놓아 보세요. (단원 마무리)', VW('flower', 'house', 'tree'), { d: 0.25 }),
                SO('교사가 읽는 문장 네 개의 번호 카드를 묻는 말 칸과 알리는 말 칸에 나누어 보세요. (단원 마무리)', AT, [C('w1', '1번'), C('w2', '2번'), C('w3', '3번'), C('w4', '4번')], { ask: ['w1', 'w3'], tell: ['w2', 'w4'] }, { d: 0.3,
                  p: ['끝이 올라가는 말은 묻는 말일까요, 알리는 말일까요?', ['묻는 말이에요', '알리는 말이에요'], 0, '끝이 올라가는 말은 묻는 말이고 끝이 내려가는 말은 알리는 말이에요.'] }),
              ]),
          ),
          WRAP(7, '"이 단원에서 가장 자신 있게 듣게 된 것과 더 연습하고 싶은 것은 무엇인가요?" 두세 명이 말하게 하고 출구 질문을 푼다. 연습하고 싶은 것으로 비슷한 소리 구별을 꼽은 학생은 방과 후 짝에게 fan과 pan을 번갈아 읽어 달라고 해 보게 한다.',
            [
              { type: 'tool', tool: 'wordcards', options: { mode: 'listen', basket: '들은 것', shuffle: false, say: 'Hi! I\'m Eve. I\'m seven.', cards: [C('eve', 'Eve'), C('mina', 'Mina'), ...NUM(7, 9)] }, prompt: '듣기 단추를 누르고, 소개하는 친구의 이름과 나이를 모두 골라 보세요. (새 친구)', target: { listen: ['eve', '7'] }, difficulty: 0.25 },
              { type: 'choice', prompt: '안내 방송을 알아들을 때 가장 먼저 찾을 것은 무엇일까요?', options: ['핵심 낱말', '긴 문장 전체', '첫 글자만'], answer: 0, difficulty: 0.15, explain: '핵심 낱말을 찾으면 어떤 안내인지 알 수 있어요.' },
              MOOD('이 단원에서 영어 듣기가 자신 있나요?'),
            ]),
        ],
        worksheet: WS('나의 듣기 전략 정리', [
          { type: 'check', prompt: '이 단원에서 내가 자신 있는 듣기에 ✓ 하세요.', options: ['글자 이름', '박수와 센 소리', '자기소개 정보', '비슷한 소리', '그림 단서', '끝소리', '학교 안내'] },
          { type: 'table', prompt: '선생님이 읽어 주는 안내를 듣고 알맞은 시간에 ○ 하세요.', columns: ['번호', '무슨 시간일까요?'], cells: [['1', '시험  놀이'], ['2', '점심  하교'], ['3', '청소  수업']], answer: '교사 읽기 예: 1 The test starts now. 시험 / 2 It is lunch time. 점심 / 3 Class starts. 수업' },
          FIG('들은 낱말의 그림을 고르세요. (선생님이 house를 읽어요.)', { mode: 'listen', basket: '들은 것', shuffle: false, say: 'house', words: VW('house', 'flower') }, 'house'),
          { type: 'short', prompt: '이 단원에서 가장 어려웠던 듣기 하나를 쓰고 앞으로 어떻게 연습할지 한 줄로 써 보세요.' },
        ], '핵심 낱말을 먼저 찾고, 그림과 끝소리도 단서로 써요.', [
          { type: 'check', prompt: '이 단원에서 내가 자신 있는 듣기에 ✓ 하세요.', options: ['글자 이름', '자기소개 정보', '그림 단서'] },
          { type: 'table', prompt: '선생님이 읽어 주는 안내를 듣고 알맞은 시간에 ○ 하세요.', columns: ['번호', '무슨 시간일까요?'], cells: [['1', '시험  놀이'], ['2', '점심  하교']], answer: '교사 읽기 예: 1 The test starts now. 시험 / 2 It is lunch time. 점심' },
          { type: 'choice', prompt: '"house"의 뜻에 ○ 하세요.', options: ['집', '꽃'], answer: '집' },
          { type: 'short', prompt: '이 단원에서 알게 된 영어 낱말 하나를 써 보세요.' },
        ]),
        differentiation: DIFF(
          '핵심 찾기와 모아 풀기에서 카드가 적고, 맞게 놓으면 초록 테두리가 생기며 틀리게 놓으면 카드가 되돌아와요.',
          '안내를 듣고 카드를 고르고, 모아 풀기는 다 놓은 뒤 확인을 눌러 스스로 고쳐요.',
          '핵심 찾기에 닮은 카드가 한 장 더 섞이고, 모아 풀기에 소개·그림·끝소리 문제가 모두 나와요.'),
        teacherNotes: '단원 마무리: 마지막 시간이므로 틀린 개수보다 내가 잘 듣는 것과 더 연습할 것을 스스로 말하는 데 시간을 쓴다. 자주 보이는 어려움: ① 안내의 한 문장만 듣고 판단한다 → 두 문장을 모두 듣고 핵심 낱말을 찾게 한다. ② 어떤 전략을 써야 할지 모른다 → 칠판 일곱 줄 가운데 소리와 가까운 전략을 짝과 이야기하게 한다. ③ 비슷한 소리가 여전히 어렵다 → 입 모양을 거울로 보며 짝과 번갈아 읽어 보게 한다. 학생 개인 정보는 쓰지 않았다.',
      }),
    ],
  });
})();
