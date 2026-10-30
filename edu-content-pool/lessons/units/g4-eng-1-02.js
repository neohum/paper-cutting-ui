/* 4학년 영어 1학기 2단원. 읽기 — 소리를 이어 쉬운 낱말 읽기(1~3차시) → 글자와 소리 짝 짓기(4~5차시) → 짧은 어구와 문장 읽기(6~7차시).
 * 낱말·어구·문장은 모두 이 단원을 위해 새로 지은 것이다(교과서 지문·노래 가사를 옮기지 않았다).
 * 소리: '듣기'·'낱말 듣기'·'다시 듣기' 단추를 **누를 때만** 기기가 영어 음성(speechSynthesis)으로 읽는다. 자동 재생은 없다.
 */
(function () {
  const UNIT = 'g4-eng-1-02';
  const CAT = 'g4-영어-1학기-2';
  const U = { grade: 4, subject: '영어', unitTitle: '2. 읽기' };
  const FORMATS = ['chromebook', 'projector', 'print'];
  const S4 = '[4영01-04]';
  const PROMPT = (what) => `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`;
  const lesson = (n, std, body) => Object.assign({ id: `${UNIT}-${String(n).padStart(2, '0')}`, schema: 'edu-lesson.v1', catalog: { unit: CAT, lesson: n } }, U, { standards: [std], minutes: 40, formats: FORMATS }, body);
  const SC = (t1, t2, motifs) => ({ viewBox: [480, 270], layers: [
    { motif: 'sun', x: 412, y: 54, s: 0.75 }, { motif: 'cloud', x: 110, y: 50 }, { motif: 'hills', y: 208 },
    ...(motifs || []),
    { motif: 'text', x: 240, y: 122, text: t1, size: 24 },
    { motif: 'text', x: 240, y: 160, text: t2, size: 18 },
  ] });
  const INTRO = (minutes, teacher, student, demo) => ({ id: 'intro', title: '도입', minutes, teacher, student, demo });
  const MAIN = (minutes, ...activities) => ({ id: 'main', title: '전개', minutes, activities });
  const WRAP = (minutes, teacher, exitTicket) => ({ id: 'wrapup', title: '정리', minutes, teacher, exitTicket });
  const ACT = (id, title, minutes, teacher, task, levels, items) => ({ id, title, minutes, tool: 'wordcards', teacher, task, levels, items });
  const MOOD = (prompt) => ({ type: 'mood', prompt });
  const WS = (title, items, note, easyItems) => ({ title, items, easy: { note, items: easyItems } });
  const DIFF = (easy, base, challenge) => ({ easy, base, challenge });
  // 단계: 쉬움 = 맞는 자리 초록 테두리·틀린 자리 되돌림, 기본·도전 = 다 놓고 확인
  const LV = (o) => ({ easy: Object.assign({}, o, { live: true, instant: true }), base: Object.assign({}, o), challenge: Object.assign({}, o) });
  const C = (id, text, x) => Object.assign({ id, text }, x);
  const WD = (list) => list.map(([en, ko, motif]) => (motif ? { en, ko, motif } : { en, ko }));
  // 낱말 그림·뜻 짝(match): words = [[영어, 뜻, 모티프?]…]
  const MT = (prompt, pairs, d, x) => Object.assign({ prompt, toolOptions: { words: WD(pairs) }, target: { match: Object.fromEntries(pairs.map((p) => [p[0], p[0]])) }, difficulty: d || 0.15 }, x);
  // 듣고 그림 고르기(listen): 도전 단계에는 보기 낱말이 하나 더 늘어난다
  const LS = (prompt, pairs, ans, more, d, x) => Object.assign({ prompt, toolOptions: { words: WD(pairs) }, target: { listen: ans }, difficulty: d || 0.15,
    levels: more ? { challenge: { toolOptions: { words: WD(pairs.concat([more])) } } } : undefined }, x);
  // 글자 카드 고르기(listen + say): cards = [[id, 글자]…]
  const LC = (prompt, say, cards, ans, d, x) => Object.assign({ prompt, toolOptions: { say, cards: cards.map(([id, t, o]) => C(id, t, o)) }, target: { listen: ans }, difficulty: d || 0.15 }, x);
  const SP = (prompt, word, ko, motif, extra, d, x) => Object.assign({ prompt, toolOptions: Object.assign({ word, ko, extra }, motif ? { motif } : {}), target: { spell: word }, difficulty: d || 0.15 }, x);
  const FP = (prompt, pairs, flip, d, x) => Object.assign({ prompt, toolOptions: { words: WD(pairs) }, target: { flip }, difficulty: d || 0.15 }, x);
  const PK = (prompt, cards, pick, d, x) => Object.assign({ prompt, toolOptions: { cards }, target: { pick }, difficulty: d || 0.15 }, x);
  const OD = (prompt, cards, order, d, x) => Object.assign({ prompt, toolOptions: { cards }, target: { order }, difficulty: d || 0.15 }, x);
  // 짝 잇기(직접 칸·카드): slots = [[id, 칸 글, 모티프?]…], cards = [[id, 글]…], pairs = { 칸id: 카드id }
  const MS = (prompt, slots, cards, pairs, d, x) => Object.assign({ prompt, toolOptions: { slots: slots.map(([id, label, motif]) => (motif ? { id, label, motif } : { id, label })), cards: cards.map(([id, t]) => C(id, t)) }, target: { match: pairs }, difficulty: d || 0.15 }, x);
  // 빈칸 채우기: slots = [[id, '글 ___ 글']…]
  const FL = (prompt, slots, cards, fill, d, x) => Object.assign({ prompt, toolOptions: { slots: slots.map(([id, label]) => ({ id, label })), cards: cards.map(([id, t]) => C(id, t)) }, target: { fill }, difficulty: d || 0.15 }, x);
  const SAY = (say, cards) => ({ say, cards });

  PaperLessons.registerUnit({
    id: UNIT, schema: 'edu-unit.v1', catalogUnit: CAT,
    grade: 4, subject: '영어', unitTitle: '2. 읽기',
    flow: '단원은 "소리 이어 읽기 → 글자와 소리 → 어구와 문장" 순으로 읽기 범위를 넓힌다. 1~3차시는 c-a-t처럼 글자 소리를 하나씩 내고 이어 읽어 쉬운 낱말을 읽어 보고, a 소리 낱말을 가려 읽으며, 첫소리 글자를 바꾸면 새 낱말이 된다는 것을 확인한다. 4~5차시는 낱말의 첫소리와 끝소리를 듣고 알맞은 글자 카드를 찾아 글자와 소리를 짝 짓는다. 6~7차시는 낱말 둘셋을 이은 어구(a red hat)와 한 문장(I have a cat.)을 낱말 사이를 띄우지 않고 이어 소리 내어 읽고, 마지막 시간에 읽은 문장의 뜻을 우리말과 짝 짓는다. 소리는 누를 때만 나오고, 모든 읽기는 짝에게 한 번 소리 내어 읽어 주는 활동으로 마무리한다.',
    refs: {},
    lessons: [
      // ───────────────────────── 1차시 (intro) ─────────────────────────
      lesson(1, S4, {
        title: '글자 소리를 하나씩 이어 cat·dog 읽기',
        objective: '그림을 보고 글자 카드를 놓아 cat, dog 같은 세 글자 낱말을 만들고, 글자 소리를 이어 소리 내어 읽을 수 있다.',
        illustration: {
          prompt: PROMPT('a child placing three big alphabet blocks in a row to spell a short word, beside a small cat and a dog sitting on a rug'),
          scene: SC('c - a - t  →  cat', '소리를 이어 읽어요', [{ motif: 'house', x: 90, y: 214, color: 'peach' }, { motif: 'tree', x: 400, y: 214 }, { motif: 'flower', x: 250, y: 228, color: 'rose' }]),
        },
        stages: [
          INTRO(7, '칠판에 "k, a, t"가 아니라 c, a, t 세 글자를 따로 쓰고 소리를 하나씩 "크, 애, 트" 하고 천천히 내다가 점점 빠르게 붙여 "cat"으로 읽어 보인다. 이어서 "글자를 하나씩 읽으면 낱말이 되나요? 이어서 읽으면요?"라고 묻는다. 글자 이름(씨·에이·티)을 그대로 읽는 학생이 많으니 "글자 이름이 아니라 글자가 내는 소리를 붙여요."라고 짚는다.',
            '낱말은 글자 소리를 이어서 읽어요. 그림을 보고 어떤 낱말인지 같이 읽어 봐요.',
            { tool: 'wordcards', options: { mode: 'flip', words: WD([['cat', '고양이', 'cat'], ['dog', '개', 'dog']]) }, sequence: [{ up: [] }, { up: ['cat'] }, { up: ['cat', 'dog'] }] }),
          MAIN(26,
            ACT('a1', '활동 1. 알파벳 카드로 낱말 만들기', 13,
              '"낱말 듣기" 단추를 누르면 낱말이 한 번 나온다는 것을 보여 주고, 소리를 먼저 듣고 글자를 놓게 한다. 다 놓으면 가리키며 "c-a-t, cat" 하고 같이 읽는다. 첫 글자만 놓고 멈추는 학생에게는 "끝까지 소리가 이어지나요?"라고 되묻는다. 도전 단계에는 필요 없는 글자 카드가 더 섞여 나온다.',
              '그림을 보고 알파벳 카드를 차례로 놓아 낱말을 만들어요. 다 만들면 소리 내어 읽어 보아요.',
              LV({ mode: 'spell', hint1: '그림을 보고 낱말의 첫소리부터 하나씩 내 보세요. 소리가 나는 순서대로 글자를 놓아요.' }),
              [
                SP('그림을 보고 알파벳 카드를 놓아 낱말을 만들어 보세요.', 'cat', '고양이', 'cat', ['b'], 0.1),
                SP('이번 그림의 낱말도 알파벳 카드로 만들어 보세요.', 'dog', '개', 'dog', ['t'], 0.1),
                SP('해 그림의 낱말을 만들어 보세요. 마지막 소리는 코끝에서 나와요.', 'sun', '해', 'sun', ['m'], 0.15,
                  { conclude: '글자 소리를 차례로 내고 이어 읽으면 낱말이 돼요.' }),
              ]),
            ACT('a2', '활동 2. 읽은 낱말과 그림 짝 짓기', 13,
              '카드의 낱말을 짝과 번갈아 소리 내어 읽게 한 뒤 그림 칸 옆에 놓게 한다. "첫 글자만 보고 짐작하지 말고 끝 글자까지 읽어요."라고 말해 준다. bag과 big처럼 가운데 소리가 다른 낱말은 가운데 글자부터 다시 읽게 한다. 둘째 판은 가방·모자·펜, 셋째 판은 버스·컵·상자이다.',
              '그림과 뜻 옆에 낱말 카드를 놓아요. 카드의 글자를 소리 내어 읽고 골라요.',
              LV({ mode: 'match', shuffle: true, hint1: '카드의 글자 소리를 하나씩 내 보고 이어서 읽어 보세요. 읽은 낱말과 뜻이 맞는 칸을 찾아요.' }),
              [
                MT('그림과 뜻 옆에 알맞은 낱말 카드를 놓아 보세요.', [['cat', '고양이', 'cat'], ['dog', '개', 'dog'], ['sun', '해', 'sun']], 0.1),
                MT('이번에는 물건이에요. 뜻 옆에 알맞은 낱말 카드를 놓아 보세요.', [['bag', '가방'], ['hat', '모자'], ['pen', '펜']], 0.15),
                MT('버스·컵·상자를 낱말 카드와 짝 지어 보세요.', [['bus', '버스'], ['cup', '컵'], ['box', '상자']], 0.2,
                  { conclude: '글자를 끝까지 이어 읽어야 비슷하게 생긴 낱말을 가릴 수 있어요.' }),
              ]),
          ),
          WRAP(7, '"오늘 낱말을 읽을 때 글자 이름을 불렀나요, 글자 소리를 붙였나요?" 두세 명에게 묻고 출구 질문을 푼다. 낱말을 거꾸로 읽는 학생에게는 왼쪽부터 손가락으로 짚으며 읽게 한다.',
            [
              { type: 'tool', tool: 'wordcards', options: { mode: 'match', shuffle: true, words: WD([['red', '빨강'], ['rug', '깔개'], ['ten', '열']]) }, prompt: '뜻 옆에 알맞은 낱말 카드를 놓아 보세요.', target: { match: { red: 'red', rug: 'rug', ten: 'ten' } }, difficulty: 0.2 },
              { type: 'choice', prompt: 'b-u-s 세 글자를 소리 내어 이어 읽으면 어떤 낱말일까요?', options: ['bus', 'bug', 'box'], answer: 0, difficulty: 0.15, explain: '마지막 소리가 s예요. bus는 버스예요.' },
              MOOD('글자 소리를 이어 읽기는 어땠나요?'),
            ]),
        ],
        worksheet: WS('글자 소리를 이어 읽기', [
          { type: 'figure', wide: true, prompt: '그림과 뜻에 알맞은 낱말을 선으로 이으세요.', tool: 'wordcards', figures: [{ options: { mode: 'match', shuffle: true, words: WD([['hen', '암탉'], ['jam', '잼'], ['nut', '땅콩']]) }, caption: '' }], answer: 'hen — 암탉 / jam — 잼 / nut — 땅콩' },
          { type: 'choice', prompt: 'm-a-p을 이어 읽은 낱말에 ○ 하세요.', options: ['mop', 'map', 'mat'], answer: 'map' },
          { type: 'table', prompt: '낱말을 소리 내어 읽고 알맞은 뜻을 쓰세요.', columns: ['낱말', '뜻'], cells: [['pig', ''], ['bed', ''], ['sit', '']], answer: 'pig 돼지 / bed 침대 / sit 앉다' },
          { type: 'short', prompt: '오늘 읽은 낱말 가운데 한 개를 골라 쓰고, 짝에게 소리 내어 읽어 주세요.' },
        ], '글자 소리를 왼쪽부터 하나씩 내고 이어서 읽어 보아요.', [
          { type: 'choice', prompt: 'c-u-p을 이어 읽은 낱말에 ○ 하세요.', options: ['cup', 'cap'], answer: 'cup' },
          { type: 'table', prompt: '낱말을 소리 내어 읽고 알맞은 뜻을 쓰세요.', columns: ['낱말', '뜻'], cells: [['pig', ''], ['bed', '']], answer: 'pig 돼지 / bed 침대' },
          { type: 'short', prompt: '오늘 읽은 낱말 한 개를 쓰세요.' },
        ]),
        differentiation: DIFF(
          '낱말 만들기에서 놓을 알파벳 카드가 낱말 글자와 틀린 글자 하나로 줄고, 맞는 자리에 놓으면 초록 테두리가 생기며 틀리게 놓으면 되돌아와요.',
          '소리를 듣고 알파벳 카드를 놓은 뒤 확인을 눌러 스스로 고쳐요. 짝 짓기도 다 놓은 뒤 확인해요.',
          '낱말 만들기에서 쓰지 않는 글자 카드가 더 많이 섞여 나와요. 짝 짓기에서는 마지막 판의 비슷하게 생긴 낱말을 가릴 수 있어야 해요.'),
        teacherNotes: '자주 보이는 어려움: ① 글자 이름(에이·비·씨)을 그대로 읽는다 → 글자가 내는 소리를 하나씩 붙이게 한다. ② 첫 글자만 보고 낱말을 짐작한다 → 끝 글자까지 손가락으로 짚으며 읽게 한다. ③ 우리말 받침처럼 끝소리를 길게 낸다 → 끝소리는 짧게 닫는다고 알려 준다. 낱말 듣기는 누를 때만 나오므로 소리가 필요한 학생만 누르게 한다.',
      }),
      // ───────────────────────── 2차시 (practice) ─────────────────────────
      lesson(2, S4, {
        title: '짧은 a 소리 낱말 듣고 읽어 그림 찾기',
        objective: '짧은 a 소리가 나는 낱말(hat, bag, map)을 듣고 읽어서 알맞은 그림 카드를 고르고, 다른 모음 낱말과 가를 수 있다.',
        illustration: {
          prompt: PROMPT('a child wearing a big hat holding a bag and a map on a sunny trail, with a small cat sitting nearby'),
          scene: SC('a  →  hat · bag · map', '짧은 a 소리를 찾아요', [{ motif: 'tree', x: 90, y: 214 }, { motif: 'bird', x: 250, y: 74 }, { motif: 'flower', x: 400, y: 226, color: 'rose' }]),
        },
        stages: [
          INTRO(7, '고양이 cat을 읽어 주며 "가운데 a 소리가 \'애\'처럼 짧게 났나요?"라고 묻고, hat·bag·map도 같은 소리가 가운데에 있다고 보여 준다. 학생이 a를 "에이"로 길게 읽으면 "이 낱말들에서는 \'애\'처럼 짧게 나요."라고 짚는다. 이어서 pig를 읽어 주며 가운데 소리가 다르다는 것도 알려 준다.',
            '가운데 a 소리가 짧게 나는 낱말들을 만나요. 카드를 눌러 영어 낱말을 보아요.',
            { tool: 'wordcards', options: { mode: 'flip', words: WD([['hat', '모자'], ['bag', '가방'], ['pig', '돼지']]) }, sequence: [{ up: [] }, { up: ['hat'] }, { up: ['hat', 'bag'] }] }),
          MAIN(26,
            ACT('a1', '활동 1. 듣고 알맞은 그림 고르기', 13,
              '문항마다 "듣기" 단추를 누르게 하고, 들은 소리를 입으로 한 번 따라 하게 한 뒤 고르게 한다. "그림 이름을 우리말로 먼저 떠올리지 말고, 들은 소리와 같은 낱말을 찾아요." 비슷한 소리의 낱말(can과 pan)에서 첫소리를 놓치는 학생에게는 첫소리만 따로 들려준다. 도전 단계는 보기가 한 개 늘어난다.',
              '듣기 단추를 눌러 낱말을 듣고, 알맞은 그림 카드 하나를 골라요.',
              LV({ mode: 'listen', shuffle: false, hint1: '들은 소리를 입으로 따라 해 보세요. 첫소리, 가운데 소리, 끝소리를 하나씩 떠올려요.' }),
              [
                LS('듣기 단추를 누르고, 들은 낱말의 그림을 골라 보세요.', [['hat', '모자'], ['cup', '컵'], ['pig', '돼지']], 'hat', ['map', '지도'], 0.1),
                LS('이번에도 듣고 그림을 골라요. 가운데 소리가 힌트예요.', [['bag', '가방'], ['bed', '침대'], ['bus', '버스']], 'bag', ['bat', '박쥐'], 0.15),
                LS('듣기 단추를 누르고 지도 그림을 찾아 보세요.', [['map', '지도'], ['mop', '대걸레'], ['men', '남자들']], 'map', ['mat', '매트'], 0.2,
                  { conclude: 'a 소리가 가운데에 있으면 입을 크게 벌려 짧게 \'애\' 하고 읽어요.' }),
              ]),
            ACT('a2', '활동 2. a 소리 낱말 카드만 뒤집기', 13,
              '카드 앞면은 그림과 뜻이고 누르면 영어 낱말이 보인다. "뒤집은 낱말을 소리 내어 읽고, 가운데에 a 소리가 있는지 확인해요." 틀린 카드를 뒤집은 학생에게는 낱말을 다시 읽어 보게 하고 가운데 글자를 짚게 한다. 짝과 뒤집은 낱말을 번갈아 읽어 준다.',
              '가운데에 a 소리가 있는 낱말의 카드만 눌러서 뒤집어 보아요.',
              LV({ mode: 'flip', hint1: '카드를 뒤집어 낱말을 읽고, 가운데 소리가 \'애\'인지 확인해 보세요. 아니면 다시 뒤집어도 돼요.' }),
              [
                FP('가운데에 a 소리가 있는 낱말의 카드만 뒤집어 보세요.', [['hat', '모자'], ['pen', '펜'], ['bag', '가방'], ['dog', '개']], ['hat', 'bag'], 0.15),
                FP('이번에는 a 소리가 있는 낱말이 세 개예요. 카드를 뒤집어 보세요.', [['map', '지도'], ['cup', '컵'], ['can', '깡통'], ['sun', '해'], ['cat', '고양이']], ['map', 'can', 'cat'], 0.2),
                FP('a 소리 낱말 두 개만 뒤집어 보세요. 낱말을 읽어 보고 정해요.', [['jam', '잼'], ['pig', '돼지'], ['ham', '햄'], ['bus', '버스']], ['jam', 'ham'], 0.2,
                  { conclude: '낱말을 읽어 보고 가운데 소리를 확인하면 비슷한 낱말도 가를 수 있어요.' }),
              ]),
          ),
          WRAP(7, '"가운데 a 소리가 \'애\' 하고 짧게 나는 낱말을 하나 말해 볼까요?" 한두 명이 말한 낱말을 칠판에 쓰고 같이 읽는다. pan과 pen을 섞어 읽는 학생은 다음 시간 시작에 가운데 글자만 따로 읽어 본다.',
            [
              { type: 'tool', tool: 'wordcards', options: { mode: 'listen', words: WD([['ham', '햄'], ['hen', '암탉'], ['hug', '껴안다']]) }, prompt: '듣기 단추를 누르고, 들은 낱말의 그림을 골라 보세요.', target: { listen: 'ham' }, difficulty: 0.2 },
              { type: 'choice', prompt: '가운데에 짧은 a 소리가 나는 낱말은 무엇일까요?', options: ['net', 'nap', 'nut'], answer: 1, difficulty: 0.15, explain: 'nap의 가운데 글자가 a예요.' },
              MOOD('a 소리 낱말을 듣고 찾기는 어땠나요?'),
            ]),
        ],
        worksheet: WS('짧은 a 소리 낱말', [
          { type: 'figure', wide: true, prompt: '그림과 뜻에 알맞은 낱말을 선으로 이으세요.', tool: 'wordcards', figures: [{ options: { mode: 'match', shuffle: true, words: WD([['fan', '선풍기'], ['jam', '잼'], ['tap', '수도꼭지']]) }, caption: '' }], answer: 'fan — 선풍기 / jam — 잼 / tap — 수도꼭지' },
          { type: 'choice', prompt: '가운데 a 소리가 나는 낱말에 ○ 하세요.', options: ['cap', 'cop', 'cup'], answer: 'cap' },
          { type: 'table', prompt: '낱말을 읽고 가운데 소리가 a이면 ○, 아니면 ×를 쓰세요.', columns: ['낱말', '○ 또는 ×'], cells: [['rat', ''], ['red', ''], ['van', '']], answer: 'rat ○ / red × / van ○' },
          { type: 'short', prompt: '가운데 a 소리가 나는 낱말을 한 개 쓰고 짝에게 읽어 주세요.' },
        ], '낱말을 읽을 때 가운데 소리가 \'애\'처럼 나는지 확인해요.', [
          { type: 'choice', prompt: '가운데 a 소리가 나는 낱말에 ○ 하세요.', options: ['cap', 'cup'], answer: 'cap' },
          { type: 'table', prompt: '낱말을 읽고 가운데 소리가 a이면 ○, 아니면 ×를 쓰세요.', columns: ['낱말', '○ 또는 ×'], cells: [['rat', ''], ['red', '']], answer: 'rat ○ / red ×' },
          { type: 'short', prompt: '가운데 a 소리가 나는 낱말을 한 개 쓰세요.' },
        ]),
        differentiation: DIFF(
          '듣고 고르기에서 보기가 세 가지이고 고르는 즉시 맞는지 알려 줘요. 뒤집기에서는 맞는 카드가 초록 테두리로 보여요.',
          '낱말을 듣고 그림을 고른 뒤 확인을 눌러 스스로 고쳐요. 뒤집기도 다 뒤집은 뒤 확인해요.',
          '듣고 고르기에서 보기가 하나 더 늘어 비슷한 소리(bag·bat, map·mat)를 가려야 해요. 뒤집기는 카드 수가 더 많아요.'),
        teacherNotes: '자주 보이는 어려움: ① a를 "에이"로 길게 읽는다 → 이 단원에서는 짧은 \'애\' 소리라고 알려 준다. ② bag과 bat처럼 끝소리가 다른 낱말을 같게 듣는다 → 끝소리를 따로 들려주고 입 모양을 보여 준다. ③ 낱말을 우리말로만 기억한다 → 영어 낱말을 한 번 소리 내어 읽고 그림과 짝 짓게 한다. 활동 1의 소리는 학생이 단추를 누를 때만 난다.',
      }),

      // ───────────────────────── 3차시 (extend) ─────────────────────────
      lesson(3, S4, {
        title: '첫 글자를 바꿔 -at 낱말 새로 만들기',
        objective: '-at 앞의 첫 글자를 바꾸면 새 낱말이 된다는 것을 알고, bat·hat·mat 같은 낱말을 만들어 읽을 수 있다.',
        illustration: {
          prompt: PROMPT('three friendly animals wearing a hat, sitting on a mat, and holding a bat, with a single swapped letter block floating above them'),
          scene: SC('_ at  →  bat · hat · mat', '첫 글자를 바꿔요', [{ motif: 'house', x: 90, y: 214, color: 'sky' }, { motif: 'star', x: 250, y: 70 }, { motif: 'tree', x: 400, y: 214 }]),
        },
        stages: [
          INTRO(7, '칠판에 "at"을 크게 쓰고 앞에 c를 붙여 "cat", b를 붙여 "bat", h를 붙여 "hat"을 읽는다. "첫 글자만 바꿨는데 낱말이 어떻게 됐나요?"라고 묻는다. 학생이 "글자가 바뀌면 소리 전체가 다 달라져요."라고 하면 -at 소리는 그대로이고 첫소리만 달라졌다고 짚는다.',
            '-at 앞에 다른 글자를 붙이면 새 낱말이 돼요. 카드를 보며 같이 읽어 봐요.',
            { tool: 'wordcards', options: { mode: 'flip', words: WD([['cat', '고양이', 'cat'], ['bat', '박쥐'], ['hat', '모자']]) }, sequence: [{ up: [] }, { up: ['cat'] }, { up: ['cat', 'bat', 'hat'] }] }),
          MAIN(26,
            ACT('a1', '활동 1. -at로 끝나는 낱말만 고르기', 13,
              '카드의 낱말을 짝과 번갈아 소리 내어 읽게 한다. "끝소리가 -at으로 같은 낱말만 골라요." 끝 글자가 t라서 고르는 학생에게는 앞의 a까지 같은지 보게 한다(cut은 -at이 아니다). 읽기 전에 고르는 학생이 있으면 한 번씩 소리 내어 읽고 다시 고르게 한다.',
              '카드의 낱말을 읽고, 끝이 -at으로 같은 낱말 카드만 바구니에 넣어요.',
              LV({ mode: 'pick', basket: '-at 낱말', shuffle: false, hint1: '카드마다 낱말을 소리 내어 읽고, 끝소리가 같은지 견주어 보세요.' }),
              [
                PK('끝이 -at으로 같은 낱말을 모두 골라 보세요.', ['cat', 'hat', 'dog', 'bat', 'sun'], ['cat', 'hat', 'bat'], 0.15),
                PK('이번에도 -at 낱말만 골라 보세요. 비슷하게 생긴 낱말이 있어요.', ['mat', 'cut', 'rat', 'net', 'sat'], ['mat', 'rat', 'sat'], 0.2),
                PK('-at 낱말을 모두 골라 보세요.', ['fat', 'pat', 'pot', 'bit', 'vat'], ['fat', 'pat', 'vat'], 0.25,
                  { conclude: '끝소리가 같은 낱말은 첫소리만 바꾸어 새 낱말을 만들 수 있어요.' }),
              ]),
            ACT('a2', '활동 2. 첫 글자와 -at를 합쳐 읽기', 13,
              '칸의 "b + at" 같은 식을 소리로 읽어 보인다. "b 소리에 at 소리를 붙이면요?" 하고 묻고 학생이 낱말을 말하면 카드와 맞춘다. 글자만 합쳐 쓰고 소리를 내지 않는 학생에게는 입으로 이어 말한 뒤 카드를 고르게 한다.',
              '칸의 글자 두 개를 소리로 이어 읽고, 알맞은 낱말 카드를 옆에 놓아요.',
              LV({ mode: 'match', shuffle: true, hint1: '칸의 두 소리를 이어서 소리 내어 읽고, 같은 소리가 나는 카드를 찾아요.' }),
              [
                MS('칸의 두 소리를 이어 읽고 알맞은 낱말 카드를 놓아 보세요.', [['s1', 'b + at'], ['s2', 'h + at'], ['s3', 'm + at']], [['bat', 'bat'], ['hat', 'hat'], ['mat', 'mat']], { s1: 'bat', s2: 'hat', s3: 'mat' }, 0.15),
                MS('새 글자를 붙여 읽고 알맞은 낱말 카드를 놓아 보세요.', [['s1', 'r + at'], ['s2', 'f + at'], ['s3', 's + at']], [['rat', 'rat'], ['fat', 'fat'], ['sat', 'sat']], { s1: 'rat', s2: 'fat', s3: 'sat' }, 0.2),
                MS('-an도 같은 방법이에요. 두 소리를 이어 낱말 카드를 놓아 보세요.', [['s1', 'c + an'], ['s2', 'f + an'], ['s3', 'v + an']], [['can', 'can'], ['fan', 'fan'], ['van', 'van']], { s1: 'can', s2: 'fan', s3: 'van' }, 0.25,
                  { conclude: '첫 글자를 바꾸면 소리가 달라져 새 낱말이 되어요.' }),
              ]),
          ),
          WRAP(7, '"hat에서 첫 글자 h를 m으로 바꾸면 어떤 낱말일까요?" 먼저 말로 묻고 출구 질문을 푼다. 바꾼 글자를 쓰고도 읽지 못하는 학생은 -at 소리를 먼저 읽고 앞 글자 소리를 붙여 보게 한다.',
            [
              { type: 'tool', tool: 'wordcards', options: { mode: 'pick', basket: '-an 낱말', shuffle: false, cards: ['man', 'pan', 'pen', 'tan'] }, prompt: '끝이 -an으로 같은 낱말을 모두 골라 보세요.', target: { pick: ['man', 'pan', 'tan'] }, difficulty: 0.2 },
              { type: 'choice', prompt: 'sat에서 첫 글자 s를 c로 바꾸면 어떤 낱말이 될까요?', options: ['cat', 'cut', 'sit'], answer: 0, difficulty: 0.15, explain: 'c + at 은 cat이에요.' },
              MOOD('첫 글자를 바꿔 새 낱말을 만들어 보니 어땠나요?'),
            ]),
        ],
        worksheet: WS('첫 글자를 바꿔 만드는 낱말', [
          { type: 'figure', wide: true, prompt: '두 소리를 이은 낱말을 선으로 이으세요.', tool: 'wordcards', figures: [{ options: { mode: 'match', shuffle: true, slots: [{ id: 's1', label: 'j + am' }, { id: 's2', label: 'h + am' }], cards: [C('jam', 'jam'), C('ham', 'ham')] }, caption: '' }], answer: 'j + am — jam / h + am — ham' },
          { type: 'choice', prompt: '끝이 -at으로 끝나는 낱말에 ○ 하세요.', options: ['pat', 'pet', 'put'], answer: 'pat' },
          { type: 'table', prompt: '첫 글자를 바꾸어 새 낱말을 쓰세요.', columns: ['처음 낱말', '첫 글자를 바꾼 낱말'], cells: [['cat → b', ''], ['cat → m', ''], ['cat → r', '']], answer: 'bat / mat / rat' },
          { type: 'short', prompt: '-at 낱말을 한 개 지어 쓰고 짝에게 읽어 주세요.' },
        ], '-at 소리는 그대로 두고 앞 글자 소리만 바꾸어 읽어요.', [
          { type: 'choice', prompt: '끝이 -at으로 끝나는 낱말에 ○ 하세요.', options: ['pat', 'pet'], answer: 'pat' },
          { type: 'table', prompt: '첫 글자를 바꾸어 새 낱말을 쓰세요.', columns: ['처음 낱말', '첫 글자를 바꾼 낱말'], cells: [['cat → b', ''], ['cat → m', '']], answer: 'bat / mat' },
          { type: 'short', prompt: '-at 낱말을 한 개 쓰세요.' },
        ]),
        differentiation: DIFF(
          '-at 낱말 고르기에서 맞는 카드가 바구니에 있으면 초록 테두리가 생기고, 틀린 카드는 바로 돌아와요. 합쳐 읽기는 즉시 알려 줘요.',
          '카드를 읽고 -at 낱말을 고른 뒤 확인을 눌러 스스로 고쳐요.',
          '고르기에 cut·net·pot처럼 비슷하게 생긴 함정 낱말이 섞여 있고, 합쳐 읽기 마지막 판은 -at이 아닌 -an이에요.'),
        teacherNotes: '자주 보이는 어려움: ① 끝 글자 t만 보고 -at 낱말이라고 한다 → a까지 같은지 확인하게 한다(cut은 -at이 아니다). ② 합친 낱말을 읽지 않고 카드만 맞춘다 → 두 소리를 입으로 이어 말한 뒤 고르게 한다. ③ 새로 만든 낱말이 뜻 없는 소리가 될 수 있다 → 그럴 때는 "소리는 나지만 뜻이 없는 낱말"이라고 알려 준다.',
      }),
      // ───────────────────────── 4차시 (core) ─────────────────────────
      lesson(4, S4, {
        title: '낱말의 첫소리를 듣고 첫 글자 카드 찾기',
        objective: '낱말의 첫소리를 듣고 그 소리를 내는 알파벳 글자를 고르며, 그림 이름의 첫 글자를 짝 지을 수 있다.',
        illustration: {
          prompt: PROMPT('a big ball, a cat and a sun, each with a large alphabet block of its first letter placed beside it on a classroom shelf'),
          scene: SC('b · c · s', '첫소리와 첫 글자', [{ motif: 'sun', x: 90, y: 100, s: 0.5 }, { motif: 'star', x: 250, y: 70 }, { motif: 'tree', x: 400, y: 214 }]),
        },
        stages: [
          INTRO(7, '"ball, ball, 첫소리가 무엇일까요?" 하고 천천히 읽으며 입술이 닫혔다 열리는 모양을 보여 준다. 칠판에 b를 쓰고 "이 글자가 \'브\' 소리를 내요."라고 말한다. 글자 이름 "비"와 소리 "브"를 섞어 말하는 학생에게는 낱말의 첫소리는 글자 이름이 아니라 글자 소리라고 짚는다.',
            '낱말의 맨 앞 소리를 첫소리라고 해요. 그림을 보고 첫소리를 같이 말해 봐요.',
            { tool: 'wordcards', options: { mode: 'flip', words: WD([['ball', '공', 'ball'], ['cat', '고양이', 'cat'], ['sun', '해', 'sun']]) }, sequence: [{ up: [] }, { up: ['ball'] }, { up: ['ball', 'cat', 'sun'] }] }),
          MAIN(26,
            ACT('a1', '활동 1. 첫소리 듣고 글자 카드 고르기', 13,
              '"듣기" 단추를 누르게 하고, 낱말을 듣고 첫소리만 입으로 낸 뒤 글자 카드를 고르게 한다. "낱말 전체가 아니라 맨 앞 소리 하나만 들어요." b와 d, p와 q처럼 모양이 비슷한 글자를 헷갈리는 학생에게는 입 모양을 함께 보여 준다. 소리는 단추를 누를 때만 난다.',
              '낱말을 듣고, 그 낱말이 시작하는 소리의 글자 카드를 골라요.',
              LV({ mode: 'listen', shuffle: false, hint1: '들은 낱말의 맨 앞 소리만 따로 말해 보세요. 그 소리를 내는 글자 카드를 찾아요.' }),
              [
                LC('듣기 단추를 누르고, 낱말의 첫소리 글자를 골라 보세요.', 'ball', [['b', 'b'], ['d', 'd'], ['p', 'p']], 'b', 0.1),
                LC('듣기 단추를 누르고, 이번 낱말의 첫소리 글자를 골라 보세요.', 'fish', [['f', 'f'], ['s', 's'], ['h', 'h']], 'f', 0.15),
                LC('들은 낱말은 해예요. 첫소리 글자를 골라 보세요.', 'sun', [['s', 's'], ['z', 'z'], ['c', 'c']], 's', 0.2),
                LC('들은 낱말은 모자예요. 첫소리 글자를 골라 보세요.', 'hat', [['h', 'h'], ['n', 'n'], ['m', 'm']], 'h', 0.2,
                  { conclude: '낱말의 맨 앞 소리를 들으면 첫 글자를 찾을 수 있어요.' }),
              ]),
            ACT('a2', '활동 2. 그림의 첫 글자 짝 짓기', 13,
              '그림 이름을 우리말로 말하고, 영어 낱말을 한 번 떠올려 첫소리를 내 본 뒤 글자 카드를 놓게 한다. "이름을 알아도 첫소리를 내 보고 놓아요." apple, egg, umbrella는 모음이라 첫소리가 이름 소리와 다르게 들릴 수 있으니 짝과 천천히 읽어 보게 한다.',
              '그림 칸 옆에 낱말의 첫 글자 카드를 놓아요.',
              LV({ mode: 'match', shuffle: true, hint1: '그림의 영어 이름을 입으로 말해 보고, 맨 앞 소리를 내는 글자를 찾아요.' }),
              [
                MS('그림 이름의 첫 글자 카드를 놓아 보세요.', [['ball', '공', 'ball'], ['cat', '고양이', 'cat'], ['sun', '해', 'sun']], [['b', 'b'], ['c', 'c'], ['s', 's']], { ball: 'b', cat: 'c', sun: 's' }, 0.15),
                MS('이번에는 개·연필·물고기예요. 첫 글자 카드를 놓아 보세요.', [['dog', '개', 'dog'], ['pencil', '연필', 'pencil'], ['fish', '물고기', 'fish2']], [['d', 'd'], ['p', 'p'], ['f', 'f']], { dog: 'd', pencil: 'p', fish: 'f' }, 0.2),
                MS('사과·알·우산은 모음 글자로 시작해요. 첫 글자 카드를 놓아 보세요.', [['apple', '사과', 'apple'], ['egg', '알', 'egg'], ['umbrella', '우산', 'umbrella']], [['a', 'a'], ['e', 'e'], ['u', 'u']], { apple: 'a', egg: 'e', umbrella: 'u' }, 0.25,
                  { conclude: '그림 이름을 말해 보고 맨 앞 소리를 내면 첫 글자를 알 수 있어요.' }),
              ]),
          ),
          WRAP(7, '"오늘 첫소리와 글자를 짝 지을 때 가장 도움이 된 것은 무엇이었나요?" 한두 명의 대답을 듣고 출구 질문을 푼다. 소리 내어 말하지 않고 글자 모양만 보고 고른 학생은 다음 시간 시작에 소리를 먼저 내고 고르게 한다.',
            [
              { type: 'tool', tool: 'wordcards', options: { mode: 'listen', say: 'book', cards: [C('b', 'b'), C('k', 'k'), C('o', 'o')] }, prompt: '새 낱말이에요. 듣기 단추를 누르고 맨 앞 소리 글자를 골라 보세요.', target: { listen: 'b' }, difficulty: 0.2 },
              { type: 'choice', prompt: '연필의 영어 이름 pencil은 어떤 글자로 시작할까요?', options: ['b', 'p', 'd'], answer: 1, difficulty: 0.15, explain: 'pencil의 첫소리는 p예요.' },
              MOOD('첫소리와 글자 짝 짓기는 어땠나요?'),
            ]),
        ],
        worksheet: WS('첫소리와 첫 글자', [
          { type: 'figure', wide: true, prompt: '그림 이름의 첫 글자를 선으로 이으세요.', tool: 'wordcards', figures: [{ options: { mode: 'match', shuffle: true, slots: [{ id: 'banana', label: '바나나', motif: 'banana' }, { id: 'cat', label: '고양이', motif: 'cat' }], cards: [C('b1', 'b'), C('c1', 'c')] }, caption: '' }], answer: '바나나 — b / 고양이 — c' },
          { type: 'choice', prompt: 'tree(나무)는 어떤 글자로 시작할까요?', options: ['t', 'd', 'k'], answer: 't' },
          { type: 'table', prompt: '그림 이름을 말해 보고 첫 글자를 쓰세요.', columns: ['그림', '첫 글자'], cells: [['공', ''], ['고양이', ''], ['해', '']], answer: 'b / c / s' },
          { type: 'short', prompt: '내가 좋아하는 물건의 영어 이름 첫 글자를 하나 쓰세요.' },
        ], '낱말을 입으로 말해 보고 맨 앞 소리를 내 보아요.', [
          { type: 'choice', prompt: 'tree(나무)는 어떤 글자로 시작할까요?', options: ['t', 'd'], answer: 't' },
          { type: 'table', prompt: '그림 이름을 말해 보고 첫 글자를 쓰세요.', columns: ['그림', '첫 글자'], cells: [['공', ''], ['해', '']], answer: 'b / s' },
          { type: 'short', prompt: '좋아하는 물건의 첫 글자를 쓰세요.' },
        ]),
        differentiation: DIFF(
          '첫소리 고르기에서 맞는 카드를 고르면 바로 알려 주고, 짝 짓기에서는 맞는 자리에 초록 테두리가 생겨요.',
          '낱말을 듣고 글자 카드를 고른 뒤 확인을 눌러 스스로 고쳐요.',
          '모음으로 시작하는 낱말(apple, egg, umbrella)의 첫 글자를 찾고, 비슷하게 생긴 글자(b·d, p)를 가려야 해요.'),
        teacherNotes: '자주 보이는 어려움: ① 글자 이름과 글자 소리를 섞는다 → 낱말의 첫소리는 글자 소리라고 알려 주고 입 모양을 보여 준다. ② b와 d, p와 q를 거꾸로 본다 → 손으로 글자를 쓰며 방향을 확인한다. ③ 모음은 이름 소리와 낱말 속 소리가 달라 어렵다 → 모음 낱말은 천천히 읽고 짝과 확인한다.',
      }),

      // ───────────────────────── 5차시 (practice) ─────────────────────────
      lesson(5, S4, {
        title: '낱말의 끝소리를 듣고 빈칸에 알맞은 글자 넣기',
        objective: '낱말의 끝소리를 듣고 알맞은 글자 카드를 고르며, 글자가 빠진 낱말의 빈칸에 끝 글자를 넣어 읽을 수 있다.',
        illustration: {
          prompt: PROMPT('a row of word cards on a bulletin board each missing its last letter, with a child holding a letter card to complete a word'),
          scene: SC('ca _  →  cat', '끝소리 글자를 찾아요', [{ motif: 'house', x: 90, y: 214, color: 'peach' }, { motif: 'bird', x: 250, y: 74 }, { motif: 'tree', x: 400, y: 214 }]),
        },
        stages: [
          INTRO(7, '"cat, cat, 끝소리는 무엇일까요?" 하고 마지막 소리를 길게 늘이지 말고 짧게 닫는다. 칠판에 ca_를 쓰고 "빠진 글자가 낼 소리를 찾아봐요."라고 말한다. 첫소리와 끝소리를 섞어 말하는 학생에게는 "맨 앞이 아니라 맨 뒤 소리예요."라고 짚는다.',
            '낱말의 맨 끝 소리를 끝소리라고 해요. 빠진 글자를 찾아 낱말을 완성해 봐요.',
            { tool: 'wordcards', options: { mode: 'flip', words: WD([['cat', '고양이', 'cat'], ['dog', '개', 'dog']]) }, sequence: [{ up: [] }, { up: ['cat'] }, { up: ['cat', 'dog'] }] }),
          MAIN(26,
            ACT('a1', '활동 1. 끝소리 듣고 글자 카드 고르기', 13,
              '"듣기" 단추를 누른 뒤 낱말의 마지막 소리만 입으로 내 보게 한다. "끝 소리 하나만 들어요." 낱말의 첫소리를 고르는 학생에게는 "맨 뒤에서부터 들어 볼까요?"라고 말한다. 끝소리가 우리말 받침처럼 길어지지 않게 짧게 읽는다.',
              '낱말을 듣고, 그 낱말의 끝소리를 내는 글자 카드를 골라요.',
              LV({ mode: 'listen', shuffle: false, hint1: '들은 낱말을 천천히 따라 말하고, 맨 뒤에서 나는 소리 하나만 골라 보세요.' }),
              [
                LC('듣기 단추를 누르고, 낱말의 끝소리 글자를 골라 보세요.', 'cat', [['t', 't'], ['p', 'p'], ['k', 'k']], 't', 0.1),
                LC('이번 낱말의 끝소리 글자를 골라 보세요.', 'dog', [['g', 'g'], ['d', 'd'], ['b', 'b']], 'g', 0.15),
                LC('들은 낱말은 해예요. 끝소리 글자를 골라 보세요.', 'sun', [['n', 'n'], ['m', 'm'], ['s', 's']], 'n', 0.2),
                LC('들은 낱말은 컵이에요. 끝소리 글자를 골라 보세요.', 'cup', [['p', 'p'], ['b', 'b'], ['c', 'c']], 'p', 0.2,
                  { conclude: '낱말의 맨 뒤 소리를 들으면 끝 글자를 찾을 수 있어요.' }),
              ]),
            ACT('a2', '활동 2. 빈칸에 끝 글자 넣어 낱말 만들기', 13,
              '빈칸이 있는 낱말을 먼저 소리 내어 읽고, 뜻을 보고 어떤 낱말인지 떠올려 끝 글자를 넣게 한다. "다 넣은 낱말을 처음부터 끝까지 읽어서 뜻과 맞는지 확인해요." 빈칸을 채우고도 읽지 않는 학생에게는 완성한 낱말을 짝에게 소리 내어 읽게 한다.',
              '빈칸에 알맞은 끝 글자 카드를 놓아 낱말을 완성해요.',
              LV({ mode: 'fill', shuffle: true, hint1: '빈칸 앞 글자를 소리 내어 읽고, 뜻에 맞는 낱말이 되도록 마지막 소리를 붙여 보세요.' }),
              [
                FL('뜻을 보고 빈칸에 알맞은 끝 글자 카드를 놓아 보세요.', [['s1', 'ca___ (고양이)'], ['s2', 'do___ (개)'], ['s3', 'su___ (해)']], [['t', 't'], ['g', 'g'], ['n', 'n']], { s1: 't', s2: 'g', s3: 'n' }, 0.15),
                FL('이번에는 버스·컵·펜이에요. 빈칸에 끝 글자 카드를 놓아 보세요.', [['s1', 'bu___ (버스)'], ['s2', 'cu___ (컵)'], ['s3', 'pe___ (펜)']], [['s', 's'], ['p', 'p'], ['n', 'n']], { s1: 's', s2: 'p', s3: 'n' }, 0.2),
                FL('모자·지도·잼의 끝 글자 카드를 놓아 보세요.', [['s1', 'ha___ (모자)'], ['s2', 'ma___ (지도)'], ['s3', 'ja___ (잼)']], [['t', 't'], ['p', 'p'], ['m', 'm']], { s1: 't', s2: 'p', s3: 'm' }, 0.25,
                  { conclude: '빈칸을 채운 뒤 낱말을 끝까지 읽으면 뜻과 맞는지 알 수 있어요.' }),
              ]),
          ),
          WRAP(7, '"끝소리를 찾을 때는 어디부터 들어야 하나요?" 한 명이 "맨 뒤에서부터요."라고 답하면 같이 말해 본다. 첫 글자를 넣는 학생은 낱말의 끝에 손가락을 대고 다시 듣게 한다.',
            [
              { type: 'tool', tool: 'wordcards', options: { mode: 'fill', shuffle: true, slots: [{ id: 's1', label: 'ba___ (가방)' }, { id: 's2', label: 'be___ (침대)' }], cards: [C('g', 'g'), C('d', 'd')] }, prompt: '뜻을 보고 빈칸에 알맞은 끝 글자 카드를 놓아 보세요.', target: { fill: { s1: 'g', s2: 'd' } }, difficulty: 0.2 },
              { type: 'choice', prompt: 'big(큰)의 끝소리 글자는 무엇일까요?', options: ['b', 'i', 'g'], answer: 2, difficulty: 0.15, explain: 'big은 g 소리로 끝나요.' },
              MOOD('끝소리를 찾는 활동은 어땠나요?'),
            ]),
        ],
        worksheet: WS('끝소리와 끝 글자', [
          { type: 'figure', wide: true, prompt: '빈칸에 알맞은 끝 글자를 선으로 이으세요.', tool: 'wordcards', figures: [{ options: { mode: 'fill', shuffle: true, slots: [{ id: 's1', label: 'pi___ (돼지)' }, { id: 's2', label: 'be___ (침대)' }], cards: [C('g', 'g'), C('d', 'd')] }, caption: '' }], answer: 'pig / bed' },
          { type: 'choice', prompt: 'rat(쥐)의 끝소리 글자에 ○ 하세요.', options: ['r', 'a', 't'], answer: 't' },
          { type: 'blank', prompt: '낱말의 끝 글자를 쓰세요. ho___ (뜨거운), ru___ (깔개)', answer: 'hot / rug' },
          { type: 'short', prompt: '오늘 읽은 낱말 중 끝소리가 t인 낱말을 한 개 쓰세요.' },
        ], '낱말의 맨 뒤 소리를 짧게 내 보아요.', [
          { type: 'choice', prompt: 'rat(쥐)의 끝소리 글자에 ○ 하세요.', options: ['r', 't'], answer: 't' },
          { type: 'blank', prompt: '끝 글자를 쓰세요. ho___ (뜨거운)', answer: 'hot' },
          { type: 'short', prompt: '끝소리가 t인 낱말을 한 개 쓰세요.' },
        ]),
        differentiation: DIFF(
          '끝소리 고르기에서 맞는 글자를 고르면 바로 알려 주고, 빈칸 채우기에서는 맞는 칸에 초록 테두리가 생겨요.',
          '낱말을 듣고 끝 글자를 고른 뒤 확인을 눌러 스스로 고쳐요.',
          '빈칸 채우기 마지막 판의 글자(p, m)가 서로 비슷한 소리여서 낱말을 끝까지 읽어 보고 정해야 해요.'),
        teacherNotes: '자주 보이는 어려움: ① 끝소리 대신 첫소리를 고른다 → 맨 뒤에서부터 듣게 한다. ② 끝소리를 우리말 받침처럼 길게 읽어 헷갈린다 → 짧게 닫아 읽어 준다. ③ 빈칸을 채우고도 읽지 않는다 → 완성한 낱말을 소리 내어 읽게 한다. 소리는 학생이 단추를 누를 때만 난다.',
      }),

      // ───────────────────────── 6차시 (core) ─────────────────────────
      lesson(6, S4, {
        title: '낱말을 이어 a red hat 같은 어구 읽기',
        objective: '낱말 두세 개를 알맞은 차례로 놓아 짧은 어구를 만들고, 낱말 사이를 끊지 않고 이어서 소리 내어 읽을 수 있다.',
        illustration: {
          prompt: PROMPT('word cards a, red and hat lined up in a row on a desk to make one phrase, with a red hat resting beside them'),
          scene: SC('a  red  hat', '낱말을 이어 읽어요', [{ motif: 'flower', x: 90, y: 226, color: 'rose' }, { motif: 'star', x: 250, y: 70 }, { motif: 'tree', x: 400, y: 214 }]),
        },
        stages: [
          INTRO(7, '"a red hat"을 한 낱말씩 끊어 읽고 다시 이어서 읽어 보이며 "어느 쪽이 말처럼 들리나요?"라고 묻는다. 어구는 낱말이 모여 하나의 뜻을 이루는 말이라고 알려 준다. 낱말마다 힘주어 끊어 읽는 학생에게는 "한 번에 쭉 읽어요."라고 짚는다.',
            '낱말을 모아 하나의 말을 만들어요. 카드를 순서대로 놓고 이어서 읽어 봐요.',
            { tool: 'wordcards', options: { mode: 'order', cards: ['a', 'red', 'hat'] }, sequence: [{ at: {} }, { at: { a: 0, red: 1, hat: 2 } }] }),
          MAIN(26,
            ACT('a1', '활동 1. 낱말 카드를 놓아 어구 만들기', 13,
              '우리말 뜻을 먼저 말하고 영어 낱말 카드를 놓게 한다. "다 놓으면 처음부터 끝까지 한 번에 읽어요." 영어는 꾸미는 말(red, big)이 꾸밈을 받는 말(hat, dog) 앞에 온다는 것을 짚어 준다. 우리말과 같은 차례로 놓는 학생에게는 낱말을 소리 내어 읽고 다시 보게 한다.',
              '우리말 뜻에 맞게 낱말 카드를 차례대로 놓고 이어서 읽어요.',
              LV({ mode: 'order', shuffle: true, hint1: '꾸며 주는 말은 꾸밈을 받는 말 앞에 와요. 소리 내어 읽어 보며 말이 되는지 들어 보세요.' }),
              [
                OD('"빨간 모자"를 영어로 만들어 보세요. 카드를 차례대로 놓으세요.', ['hat', 'a', 'red'], ['a', 'red', 'hat'], 0.15),
                OD('"큰 개"를 영어로 만들어 보세요. 카드를 차례대로 놓으세요.', ['dog', 'a', 'big'], ['a', 'big', 'dog'], 0.15),
                OD('"나의 새 가방"을 영어로 만들어 보세요. 카드를 차례대로 놓으세요.', ['bag', 'new', 'my'], ['my', 'new', 'bag'], 0.2,
                  { conclude: '영어에서는 꾸며 주는 말이 꾸밈을 받는 말 앞에 와요.' }),
              ]),
            ACT('a2', '활동 2. 빈칸에 알맞은 낱말 넣어 읽기', 13,
              '빈칸이 있는 어구와 그림 뜻을 읽어 주고 알맞은 낱말 카드를 넣게 한다. "다 넣은 어구를 소리 내어 읽고 뜻과 맞는지 확인해요." 낱말 카드가 그림 뜻과 달라도 그냥 넣는 학생에게는 완성된 어구를 우리말로 말해 보게 한다.',
              '빈칸에 알맞은 낱말 카드를 놓고 어구를 소리 내어 읽어요.',
              LV({ mode: 'fill', shuffle: true, hint1: '어구를 처음부터 소리 내어 읽고, 뜻에 맞는 낱말 카드를 빈칸에 넣어 보세요.' }),
              [
                FL('뜻에 맞는 낱말 카드를 빈칸에 놓아 보세요.', [['s1', 'a black ___ (고양이)'], ['s2', 'a small ___ (개)'], ['s3', 'a hot ___ (해)']], [['cat', 'cat'], ['dog', 'dog'], ['sun', 'sun']], { s1: 'cat', s2: 'dog', s3: 'sun' }, 0.15),
                FL('이번에는 모양을 꾸미는 말이 빈칸이에요. 알맞은 낱말 카드를 놓아 보세요.', [['s1', 'a ___ cup (큰 컵)'], ['s2', 'a ___ hat (빨간 모자)'], ['s3', 'a ___ pen (새 펜)']], [['big', 'big'], ['red', 'red'], ['new', 'new']], { s1: 'big', s2: 'red', s3: 'new' }, 0.2),
                FL('어구의 빈칸에 알맞은 낱말 카드를 놓아 보세요.', [['s1', 'my ___ bag (오래된 가방)'], ['s2', 'a ___ pig (뚱뚱한 돼지)'], ['s3', 'a ___ box (작은 상자)']], [['old', 'old'], ['fat', 'fat'], ['small', 'small']], { s1: 'old', s2: 'fat', s3: 'small' }, 0.25,
                  { conclude: '어구를 이어 읽고 뜻을 생각하면 알맞은 낱말을 고를 수 있어요.' }),
              ]),
          ),
          WRAP(7, '"a red hat을 읽을 때 낱말마다 쉬었나요, 한 번에 이어 읽었나요?" 두세 명에게 물어 다시 읽어 본다. 순서가 바뀐 카드는 소리 내어 읽으면 어색하다는 것을 스스로 듣게 한다.',
            [
              { type: 'tool', tool: 'wordcards', options: { mode: 'order', shuffle: true, cards: ['pen', 'a', 'blue'] }, prompt: '"파란 펜"을 영어로 만들어 카드를 차례대로 놓아 보세요.', target: { order: ['a', 'blue', 'pen'] }, difficulty: 0.2 },
              { type: 'choice', prompt: '"큰 가방"을 영어로 알맞게 쓴 어구는 무엇일까요?', options: ['bag big a', 'a big bag', 'big bag a'], answer: 1, difficulty: 0.15, explain: '꾸며 주는 말 big이 bag 앞에 와요.' },
              MOOD('어구를 이어서 읽기는 어땠나요?'),
            ]),
        ],
        worksheet: WS('짧은 어구 읽기', [
          { type: 'figure', wide: true, prompt: '알맞은 낱말을 빈칸에 넣어 어구를 완성하세요.', tool: 'wordcards', figures: [{ options: { mode: 'fill', shuffle: true, slots: [{ id: 's1', label: 'a ___ egg (큰 알)' }, { id: 's2', label: 'a ___ ball (빨간 공)' }], cards: [C('big', 'big'), C('red', 'red')] }, caption: '' }], answer: 'a big egg / a red ball' },
          { type: 'choice', prompt: '"작은 책"을 알맞게 쓴 어구에 ○ 하세요.', options: ['a small book', 'book a small', 'small a book'], answer: 'a small book' },
          { type: 'table', prompt: '어구를 소리 내어 읽고 알맞은 뜻을 쓰세요.', columns: ['어구', '뜻'], cells: [['a hot cup', ''], ['a blue bag', ''], ['my pet cat', '']], answer: '뜨거운 컵 / 파란 가방 / 내 반려 고양이' },
          { type: 'short', prompt: '"a ___ hat"의 빈칸에 색깔 낱말을 넣어 어구를 한 개 쓰세요.' },
        ], '낱말을 한 번에 이어서 소리 내어 읽어 보아요.', [
          { type: 'choice', prompt: '"작은 책"을 알맞게 쓴 어구에 ○ 하세요.', options: ['a small book', 'book a small'], answer: 'a small book' },
          { type: 'table', prompt: '어구를 소리 내어 읽고 알맞은 뜻을 쓰세요.', columns: ['어구', '뜻'], cells: [['a hot cup', ''], ['a blue bag', '']], answer: '뜨거운 컵 / 파란 가방' },
          { type: 'short', prompt: '"a ___ hat"의 빈칸에 색깔 낱말을 넣어 쓰세요.' },
        ]),
        differentiation: DIFF(
          '어구 만들기에서 맞는 자리에 놓으면 초록 테두리가 생기고 틀린 자리에서는 카드가 돌아와요. 빈칸 채우기도 즉시 알려 줘요.',
          '낱말 카드를 다 놓은 뒤 확인을 눌러 스스로 고쳐요.',
          '빈칸 채우기 마지막 판의 낱말(old, fat, small)이 새로운 뜻이어서 어구를 소리 내어 읽고 뜻을 생각해야 해요.'),
        teacherNotes: '자주 보이는 어려움: ① 우리말 어순대로 모자 빨간 순으로 놓는다 → 꾸미는 말이 앞에 온다고 짚는다. ② 낱말마다 쉬어서 어구가 끊어진다 → 한 번에 쭉 읽는 시범을 다시 보인다. ③ a를 읽지 않고 건너뛴다 → a는 짧고 약하게 읽어도 빠뜨리지 않는다고 알려 준다.',
      }),

      // ───────────────────────── 7차시 (wrap) ─────────────────────────
      lesson(7, S4, {
        title: '짧은 문장을 소리 내어 읽고 뜻과 짝 짓기',
        objective: '"I have a cat."처럼 쉬운 한 문장을 낱말을 이어 소리 내어 읽고, 문장의 우리말 뜻을 고르거나 낱말을 차례로 놓아 문장을 만들 수 있다.',
        illustration: {
          prompt: PROMPT('a child reading a short sentence card aloud to a friend, with a cat, a hat and a bag lying on the desk'),
          scene: SC('I have a cat.', '문장을 소리 내어 읽어요', [{ motif: 'house', x: 90, y: 214, color: 'sky' }, { motif: 'bird', x: 250, y: 74 }, { motif: 'tree', x: 400, y: 214 }]),
        },
        stages: [
          INTRO(7, '"I have a cat."을 천천히 읽어 주고 따라 읽게 한 뒤 "이 문장은 무슨 뜻일까요?"라고 묻는다. 문장은 대문자로 시작해 마침표(.)로 끝난다는 것을 짚어 준다. 낱말을 하나씩 끊어 읽는 학생에게는 문장 전체를 한 번에 읽는 시범을 보인다.',
            '문장을 소리 내어 읽고 뜻을 생각해 봐요. 카드를 눌러 문장을 보아요.',
            { tool: 'wordcards', options: { mode: 'order', cards: ['I', 'have', 'a', 'cat.'] }, sequence: [{ at: {} }, { at: { I: 0, have: 1, a: 2, 'cat.': 3 } }] }),
          MAIN(26,
            ACT('a1', '활동 1. 문장을 읽고 뜻과 짝 짓기', 13,
              '문장 카드를 소리 내어 읽게 한 뒤 뜻 칸 옆에 놓게 한다. "낱말 하나만 보고 정하지 말고 문장을 끝까지 읽어요." 한 낱말(cat)만 보고 고르는 학생에게는 have나 see가 다르다는 것을 다시 읽어 보게 한다. 읽은 문장은 짝에게 한 번 읽어 준다.',
              '영어 문장을 소리 내어 읽고, 알맞은 우리말 뜻 옆에 놓아요.',
              LV({ mode: 'match', shuffle: true, hint1: '문장을 끝까지 소리 내어 읽고, 누가 무엇을 하는지 우리말로 말해 보세요.' }),
              [
                MS('문장 카드를 읽고 알맞은 뜻 옆에 놓아 보세요.', [['m1', '나는 고양이가 있어요.'], ['m2', '나는 개를 봐요.'], ['m3', '나는 모자를 써요.']], [['a', 'I have a cat.'], ['b', 'I see a dog.'], ['c', 'I wear a hat.']], { m1: 'a', m2: 'b', m3: 'c' }, 0.15),
                MS('이번에는 It is로 시작해요. 문장 카드를 알맞은 뜻 옆에 놓아 보세요.', [['m1', '그것은 빨간 공이에요.'], ['m2', '그것은 큰 컵이에요.'], ['m3', '그것은 새 가방이에요.']], [['a', 'It is a red ball.'], ['b', 'It is a big cup.'], ['c', 'It is a new bag.']], { m1: 'a', m2: 'b', m3: 'c' }, 0.2),
                MS('This is my로 시작하는 문장이에요. 문장 카드를 알맞은 뜻 옆에 놓아 보세요.', [['m1', '이것은 내 펜이에요.'], ['m2', '이것은 내 책이에요.'], ['m3', '이것은 내 상자예요.']], [['a', 'This is my pen.'], ['b', 'This is my book.'], ['c', 'This is my box.']], { m1: 'a', m2: 'b', m3: 'c' }, 0.25,
                  { conclude: '문장의 앞부분과 낱말을 함께 읽어야 뜻을 알 수 있어요.' }),
              ]),
            ACT('a2', '활동 2. 낱말 카드를 놓아 문장 만들기', 13,
              '우리말 뜻을 먼저 말하고 영어 낱말 카드를 차례로 놓게 한다. 다 놓으면 소리 내어 읽고 마침표까지 확인한다. "누가 무엇을 하는지 순서대로 놓아요." 낱말을 우리말 어순으로 놓는 학생에게는 읽어 보게 해서 어색함을 스스로 듣게 한다.',
              '우리말 뜻에 맞게 낱말 카드를 차례대로 놓아 문장을 만들고 읽어요.',
              LV({ mode: 'order', shuffle: true, hint1: '먼저 누가 하는지, 그다음 무엇을 하는지, 마지막에 무엇인지 차례로 놓고 소리 내어 읽어 보세요.' }),
              [
                OD('"나는 내 가방을 좋아해요."를 영어로 만들어 보세요.', ['bag.', 'I', 'my', 'like'], ['I', 'like', 'my', 'bag.'], 0.2),
                OD('"나는 개를 봐요."를 영어로 만들어 보세요.', ['dog.', 'a', 'see', 'I'], ['I', 'see', 'a', 'dog.'], 0.2),
                OD('"이것은 내 모자예요."를 영어로 만들어 보세요.', ['hat.', 'my', 'is', 'This'], ['This', 'is', 'my', 'hat.'], 0.25,
                  { conclude: '문장은 누가, 무엇을 하는지 차례로 놓고 끝에 마침표를 붙여요.' }),
              ]),
          ),
          WRAP(7, '"오늘 읽은 문장 가운데 가장 마음에 드는 한 문장을 짝에게 읽어 줄까요?" 짝에게 읽어 준 뒤 출구 질문을 푼다. 문장의 뜻을 낱말 하나만 보고 말한 학생은 문장을 끝까지 읽고 다시 말하게 한다.',
            [
              { type: 'tool', tool: 'wordcards', options: { mode: 'match', shuffle: true, slots: [{ id: 'm1', label: '나는 연필이 있어요.' }, { id: 'm2', label: '나는 공을 봐요.' }], cards: [C('a', 'I have a pencil.'), C('b', 'I see a ball.')] }, prompt: '문장 카드를 읽고 알맞은 뜻 옆에 놓아 보세요.', target: { match: { m1: 'a', m2: 'b' } }, difficulty: 0.2 },
              { type: 'choice', prompt: '"I like my cat."은 어떤 뜻일까요?', options: ['나는 내 고양이를 좋아해요.', '나는 고양이가 없어요.', '그것은 내 모자예요.'], answer: 0, difficulty: 0.15, explain: 'like는 좋아한다는 뜻이에요.' },
              MOOD('문장을 소리 내어 읽기는 어땠나요?'),
            ]),
        ],
        worksheet: WS('짧은 문장 읽기', [
          { type: 'figure', wide: true, prompt: '문장과 뜻을 선으로 이으세요.', tool: 'wordcards', figures: [{ options: { mode: 'match', shuffle: true, slots: [{ id: 'm1', label: '나는 우산이 있어요.' }, { id: 'm2', label: '나는 바나나를 봐요.' }], cards: [C('a', 'I have an umbrella.'), C('b', 'I see a banana.')] }, caption: '' }], answer: 'I have an umbrella. — 나는 우산이 있어요. / I see a banana. — 나는 바나나를 봐요.' },
          { type: 'choice', prompt: '"It is a big dog."의 뜻에 ○ 하세요.', options: ['그것은 큰 개예요.', '그것은 작은 개예요.', '나는 개를 봐요.'], answer: '그것은 큰 개예요.' },
          { type: 'table', prompt: '문장을 소리 내어 읽고 뜻을 쓰세요.', columns: ['문장', '뜻'], cells: [['I see a pig.', ''], ['This is my bed.', '']], answer: '나는 돼지를 봐요. / 이것은 내 침대예요.' },
          { type: 'short', prompt: '"I have a ___."의 빈칸에 낱말을 넣어 문장을 쓰고 짝에게 읽어 주세요.' },
        ], '문장을 끝까지 소리 내어 읽고 뜻을 생각해요.', [
          { type: 'choice', prompt: '"It is a big dog."의 뜻에 ○ 하세요.', options: ['그것은 큰 개예요.', '나는 개를 봐요.'], answer: '그것은 큰 개예요.' },
          { type: 'table', prompt: '문장을 소리 내어 읽고 뜻을 쓰세요.', columns: ['문장', '뜻'], cells: [['I see a pig.', '']], answer: '나는 돼지를 봐요.' },
          { type: 'short', prompt: '"I have a ___."의 빈칸에 낱말을 넣어 쓰세요.' },
        ]),
        differentiation: DIFF(
          '문장 짝 짓기에서 맞는 칸에 놓으면 초록 테두리가 생기고 틀리면 되돌아와요. 문장 만들기도 즉시 알려 줘요.',
          '문장 카드를 다 놓은 뒤 확인을 눌러 스스로 고쳐요.',
          '짝 짓기 마지막 판의 문장(This is my ...)이 앞부분이 길고, 문장 만들기 카드가 네 장으로 많아요.'),
        teacherNotes: '자주 보이는 어려움: ① 문장을 낱말 하나씩 끊어 읽는다 → 문장 전체를 한 번에 읽는 시범을 보인다. ② 문장의 뜻을 낱말 하나(cat)만 보고 말한다 → have, see, wear 같은 낱말이 다름을 짚는다. ③ 마침표와 대문자를 빠뜨린다 → 문장은 대문자로 시작해 마침표로 끝난다고 다시 알려 준다. 이 단원의 마지막 시간이므로 단원의 읽기 과정(소리 → 낱말 → 어구 → 문장)을 한 번 되짚어 말해 준다.',
      }),
    ],
  });
})();
