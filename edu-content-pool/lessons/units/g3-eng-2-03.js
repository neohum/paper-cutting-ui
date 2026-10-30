/* 3학년 영어 2학기 3단원. 말하기 — 박자 있는 짧은 어구(1~5차시) → 실물 한 문장과 나 소개(6~9차시) → 교실 지시와 억양(10~14차시)
 * → 그림 낱말·동작 표현(15~18차시) → 가족·친구 소개와 색·크기 묘사(19~23차시) → 동작 카드 명령문과 순서 말하기(24~27차시).
 * 어구·문장·짧은 챈트는 모두 이 단원을 위해 새로 지은 것이다(교과서 지문·노래 가사를 옮기지 않았다). 알려진 노래와 챈트는 싣지 않았다.
 * 소리: '듣기'·'낱말 듣기' 단추와 카드 뒤집기는 기기가 영어 음성(speechSynthesis)으로 **누를 때만** 읽는다(자동 재생 없음). 소리가 나지 않는
 * 기기에서는 교사가 문항 번호를 말하고 문장을 직접 읽어 준다. 직접 말하는 활동은 짝과 소리 내어 하는 짝 활동(말하기 점검)이며 기기는
 * 문장 카드를 놓고 고르는 일을 맡는다. 학생 화면 영어는 짧은 문장 하나로 두고 안내는 한국어로 쓴다.
 */
(function () {
  const UNIT = 'g3-eng-2-03';
  const CAT = 'g3-영어-2학기-3';
  const U = { grade: 3, subject: '영어', unitTitle: '3. 말하기' };
  const S1 = '[4영02-01]'; const S4 = '[4영02-04]'; const S5 = '[4영02-05]'; const S6 = '[4영02-06]';
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
  const TX = (...ls) => ls.map((l) => C(l, l));
  const TK = (prompt) => ({ prompt, free: true, talk: true });        // 짝과 소리 내어 하는 말하기 점검(기기를 움직이지 않음)
  const KO = (id, ko) => C(id, ko);                                      // 뜻을 한국어로 적은 카드(듣고 고르기용)
  // 차시 한 편: 입력은 d 하나. 도입 7 + 전개 13·13 + 정리 7 = 40분
  const LN = (n, std, d) => lesson(n, std, {
    title: d.title, objective: d.obj,
    illustration: { prompt: PROMPT(d.ill[0]), scene: SC(d.ill[1], d.ill[2], d.ill[3]) },
    stages: [
      INTRO(7, d.intro[0], d.intro[1], d.intro[2]),
      MAIN(26, ACT('a1', d.a1[0], 13, 'wordcards', d.a1[1], d.a1[2], d.a1[3], d.a1[4]), ACT('a2', d.a2[0], 13, 'wordcards', d.a2[1], d.a2[2], d.a2[3], d.a2[4])),
      WRAP(7, d.wrap[0], [...d.wrap[1], MOOD(d.wrap[2])]),
    ],
    worksheet: WS(d.ws[0], d.ws[1], d.ws[2], d.ws[3]),
    differentiation: DIFF(d.diff[0], d.diff[1], d.diff[2]),
    teacherNotes: d.notes,
  });
  // 문장을 낱말 카드로 쪼개 차례대로 놓기(같은 낱말이 두 번 나오는 문장은 쓰지 않는다)
  const OS = (prompt, sentence, o) => { const ws = sentence.split(' '); return OR(prompt, ws.map((w, i) => C('w' + i, w)), ws.map((w, i) => 'w' + i), o); };

  PaperLessons.registerUnit({
    id: UNIT, schema: 'edu-unit.v1', catalogUnit: CAT,
    grade: 3, subject: '영어', unitTitle: '3. 말하기',
    flow: '단원은 "박자 → 한 문장 → 지시 → 묘사 → 순서" 순으로 말하기를 넓힌다. 1~5차시는 손뼉 박자에 맞춘 짧은 어구, 끝소리가 같은 낱말, 날씨 어구를 듣고 따라 말하며 소리의 길이와 차례를 몸으로 익히고, 6~9차시는 실물 카드를 보고 This is…·I have… 한 문장을 만든 뒤 이름·나이·좋아하는 것으로 나를 소개한다. 10~14차시는 Stand up 같은 교실 지시를 뜻과 짝 짓고 해도 되는 때와 안 되는 때를 가르며, 끝을 올리는 물음과 내리는 알림을 귀로 구별한다. 15~18차시는 그림 카드에 낱말 라벨을 붙여 철자를 맞추고 동작 낱말을 문장에 넣으며, 19~23차시는 가족·친구를 This is my…로 소개하고 큰·작은과 색깔로 사물을 묘사한다. 24~27차시는 동작 카드를 보고 명령문을 만들고 First·Then·Last로 순서 있는 행동을 말하며 단원을 정리한다. 직접 말하기는 짝 활동으로 하고 교사가 돌아다니며 소리 내어 말하는 모습을 듣는다.',
    refs: {},
    lessons: [
      // ───────────────────────── 1차시 (intro) ─────────────────────────
      LN(1, S1, {
        title: '손뼉 박자 세며 짧은 어구 따라 읽기',
        obj: '짧은 영어 어구를 듣고 손뼉을 몇 번 치는 어구인지 고르며, 박자에 맞춰 소리 내어 따라 읽을 수 있다.',
        ill: ['a child clapping hands in rhythm beside floating word bubbles that each hold two or three short words', 'Clap, clap!', '박자에 맞춰 읽기', [{ motif: 'bird', x: 94, y: 78 }, { motif: 'tree', x: 400, y: 214 }, { motif: 'star', x: 250, y: 74, s: 0.6 }]],
        intro: ['"Clap, clap."을 손뼉 두 번과 함께 천천히 읽어 주고 "손뼉을 몇 번 쳤나요?"라고 묻는다. 학생이 "두 번이요."라고 하면 이번에는 "Stomp, stomp, stomp."을 읽으며 발을 세 번 구르고 어구의 낱말 수와 박자 수가 같다는 점을 짚는다. 박자를 놓치고 먼저 읽는 학생에게는 교사의 손뼉에 맞춰 입을 열도록 하고, 영어 어구를 빠르게 이어 읽어야 한다고 생각하는 학생에게는 천천히 같은 간격으로 읽어도 좋다고 말해 준다.',
          '선생님 손뼉에 맞춰 짧은 영어 어구를 같이 읽어 봐요. 손뼉을 몇 번 쳤는지 세어 봐요.',
          { tool: 'wordcards', options: { mode: 'order', shuffle: false, cards: [C('a', 'Clap,'), C('b', 'stomp!')] }, sequence: [{ at: {} }, { at: { a: 0, b: 1 } }] }],
        a1: ['활동 1. 어구를 듣고 박자 수에 맞는 카드 고르기',
          '문항마다 듣기 단추를 한 번 누르게 하고, 소리가 나지 않으면 교사가 "문제 하나, Clap, clap."처럼 읽어 준다. "소리를 들으며 손뼉을 같이 쳐 보세요. 몇 번 쳤나요?" 박자 수를 세지 않고 아무 카드나 누르는 학생에게는 어구를 한 번 더 들려주며 손가락으로 센 수를 말하게 한다. 도전 단계에는 박자 수가 비슷한 카드가 한 장 더 있으니 끝 낱말까지 듣도록 일러 준다.',
          '듣기 단추를 눌러 어구를 듣고, 박자 수가 맞는 설명 카드를 골라요.',
          LA('listen', '어구를 들으며 손뼉을 같이 쳐 보세요. 손뼉을 친 횟수와 같은 설명을 찾아요.'),
          [
            LS('듣기 단추를 누르고, 어구의 박자에 맞는 설명을 골라 보세요.', 'Clap, clap.', { cards: [KO('clap2', '손뼉 두 번'), KO('stomp3', '발 구르기 세 번')] }, 'clap2', { x: [KO('tap1', '톡 한 번')] }),
            LS('듣기 단추를 누르고, 이번에 들은 어구에 맞는 설명을 골라 보세요.', 'Stomp, stomp, stomp.', { cards: [KO('clap2', '손뼉 두 번'), KO('stomp3', '발 구르기 세 번')] }, 'stomp3', { d: 0.2, x: [KO('tap1', '톡 한 번')] }),
            LS('듣기 단추를 누르고, 들은 어구의 박자 수에 맞는 카드를 골라 보세요.', 'Tap, tap, tap, tap.', { cards: [KO('tap4', '톡톡 네 번'), KO('tap2', '톡톡 두 번')] }, 'tap4', { d: 0.2, x: [KO('tap3', '톡톡 세 번')],
              p: ['낱말이 네 개이면 손뼉은 몇 번일까요?', ['네 번이에요', '두 번이에요'], 0, '낱말 하나에 손뼉 한 번씩 쳐요. 낱말 수와 박자 수가 같아요.'] }),
            LS('듣기 단추를 누르고, 들은 어구에 알맞은 설명을 골라 보세요.', 'Snap, snap.', { cards: [KO('snap2', '손가락 튕기기 두 번'), KO('tap4', '톡톡 네 번')] }, 'snap2', { d: 0.25, x: [KO('snap3', '손가락 튕기기 세 번')] }),
          ]],
        a2: ['활동 2. 어구의 낱말을 차례대로 놓고 박자 맞춰 읽기',
          '낱말 카드를 놓은 뒤 어구 전체를 박자에 맞춰 한 번 읽는다. "낱말 하나에 손뼉 한 번이에요. 놓은 어구를 손뼉을 치며 읽어 봐요." 쉼표 뒤에서 잠깐 쉬어 읽도록 안내한다. 낱말을 뒤섞어 놓은 학생에게는 뜻을 우리말로 말해 보게 하고 첫 낱말을 짚어 준다. 짝 활동 문항은 한 사람이 읽고 다른 사람이 손뼉을 치며 박자를 세어 주게 한다.',
          '낱말 카드를 차례대로 놓아 어구를 만들고, 손뼉을 치며 읽어 봐요.',
          LA('order', '뜻을 우리말로 먼저 말해 보고, 가장 먼저 읽는 낱말부터 놓아 보세요.'),
          [
            OR('"위로 닿고 아래로 굽혀요"라는 뜻의 어구를 차례대로 놓아 보세요.', [C('a', 'Reach'), C('b', 'up,'), C('c', 'bend'), C('d', 'down.')], ['a', 'b', 'c', 'd'], { d: 0.15 }),
            OR('"높이 뛰고 낮게 걸어요"라는 뜻의 어구를 차례대로 놓아 보세요.', [C('a', 'Jump'), C('b', 'high,'), C('c', 'step'), C('d', 'low.')], ['a', 'b', 'c', 'd'], { d: 0.2 }),
            OR('"손뼉 세 번 쳐요"라는 뜻의 어구를 차례대로 놓아 보세요.', [C('a', 'Clap'), C('b', 'three'), C('c', 'times.')], ['a', 'b', 'c'], { d: 0.2,
              p: ['영어 어구는 어느 쪽부터 읽을까요?', ['왼쪽부터 읽어요', '오른쪽부터 읽어요'], 0, '영어는 왼쪽에서 오른쪽으로 읽어요. 첫 낱말부터 박자를 맞춰요.'] }),
            TK('짝과 번갈아 해요. 한 사람이 세 어구 가운데 하나를 읽으며 손뼉을 치면 다른 사람이 어느 어구인지 알아맞혀요. 다 했으면 "다 했어요"를 누르세요.'),
          ]],
        wrap: ['"오늘 읽은 어구에서 낱말 수와 손뼉 수가 같았나요?" 두세 명이 대답하게 한 뒤 출구 질문을 푼다. 1번에서 박자 수를 틀린 학생은 다음 시간 시작에 어구 하나를 손뼉과 함께 읽으며 낱말 수를 손가락으로 세어 본다.',
          [
            { type: 'tool', tool: 'wordcards', options: { mode: 'listen', basket: '들은 것', shuffle: false, say: 'Hop, hop, hop.', cards: [KO('hop3', '깡충 세 번'), KO('hop2', '깡충 두 번')] }, prompt: '듣기 단추를 누르고, 어구에 맞는 설명을 골라 보세요.', target: { listen: 'hop3' }, difficulty: 0.2 },
            { type: 'choice', prompt: 'Tap, tap, tap. 에서 손뼉은 몇 번 칠까요?', options: ['두 번', '세 번'], answer: 1, difficulty: 0.15, explain: '낱말이 세 개이므로 손뼉도 세 번이에요.' },
          ], '오늘 박자에 맞춰 읽기는 어땠나요?'],
        ws: ['박자와 어구', [
          { type: 'table', prompt: '어구를 소리 내어 읽고, 손뼉 수를 쓰세요.', columns: ['어구', '손뼉 수'], cells: [['Clap, clap.', ''], ['Stomp, stomp, stomp.', ''], ['Tap, tap.', ''], ['Jump high, step low.', '']], answer: '2 / 3 / 2 / 4' },
          { type: 'choice', prompt: '"Reach up, bend down."을 바르게 읽은 것에 ○ 하세요.', options: ['Reach up, bend down.', 'Down bend, up reach.'], answer: 'Reach up, bend down.' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: 'Clap ___ times.', answer: 'three' },
          { type: 'short', prompt: '오늘 배운 어구 하나를 쓰고, 낱말마다 ○ 를 하나씩 그리세요.' },
        ], '어구를 소리 내어 읽으며 낱말마다 손가락으로 한 번씩 짚어 손뼉 수를 세어요.', [
          { type: 'table', prompt: '어구를 읽고 손뼉 수를 쓰세요.', columns: ['어구', '손뼉 수'], cells: [['Clap, clap.', ''], ['Tap, tap, tap.', '']], answer: '2 / 3' },
          { type: 'choice', prompt: 'Clap three times. 에서 낱말은 몇 개인가요?', options: ['세 개', '다섯 개'], answer: '세 개' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: 'Jump ___, step low.', answer: 'high' },
          { type: 'short', prompt: '어구 하나를 쓰세요.' },
        ]],
        diff: ['어구 듣기에서 카드가 두 장으로 시작하고 맞게 놓으면 초록 테두리가 생겨요. 틀리게 놓으면 카드가 되돌아와요.', '어구를 귀로 듣고 카드를 골라요. 놓은 뒤 확인을 눌러 스스로 고쳐요.', '어구 듣기에 박자 수가 비슷한 카드가 한 장 더 섞여 나와요.'],
        notes: '자주 보이는 어려움: ① 낱말 수와 박자 수를 따로 센다 → 낱말 하나에 손뼉 한 번이라고 말하며 천천히 같이 친다. ② 빠르게 읽어야 영어다운 줄 안다 → 일정한 간격으로 읽는 것이 박자라고 알려 준다. ③ 쉼표 뒤에서 쉬지 않고 이어 읽는다 → 쉼표 자리에서 손을 멈추게 한다. 어구는 박자 연습용으로 새로 지은 것이며 알려진 챈트가 아니다.',
      }),

      // ───────────────────────── 2차시 (practice) ─────────────────────────
      LN(2, S1, {
        title: '낱말 수를 손뼉으로 세어 어구를 두 무리로 나누기',
        obj: '짧은 어구의 낱말 수를 손뼉으로 세어 두 낱말 어구와 세 낱말 어구로 나눌 수 있다.',
        ill: ['a child sorting phrase cards into two baskets labeled with two dots and three dots while clapping', 'Run fast.', '낱말 수 세기', [{ motif: 'cloud', x: 90, y: 80 }, { motif: 'tree', x: 400, y: 214 }, { motif: 'flower', x: 252, y: 214 }]],
        intro: ['"Run fast."를 읽으며 손뼉 두 번을 치고, "Look at me."를 읽으며 세 번 친 뒤 "낱말이 몇 개일 때 손뼉이 두 번이었나요?"라고 묻는다. 학생이 "낱말이 두 개일 때요."라고 답하면 어구를 칠판에 쓰고 낱말 사이에 선을 그어 센다. 짧은 낱말 a, the도 한 낱말로 센다는 점을 몰라 빼고 세는 학생에게는 칠판 어구를 손가락으로 짚어 가며 모두 센다.',
          '어구마다 낱말이 몇 개인지 손뼉으로 세어 봐요. 같은 수끼리 모아 볼 거예요.',
          { tool: 'wordcards', options: { mode: 'sort', shuffle: false, slots: [{ id: 'two', label: '낱말 2개' }, { id: 'three', label: '낱말 3개' }], cards: [C('r', 'Run fast.'), C('l', 'Look at me.')] }, sequence: [{ at: {} }, { at: { r: 0, l: 1 } }] }],
        a1: ['활동 1. 낱말 수대로 어구 나누기',
          '"어구를 읽으며 낱말마다 손가락을 하나씩 접어 보세요. 몇 개를 접었나요?" 낱말 수를 센 뒤에 칸에 놓게 한다. a나 the 같은 짧은 낱말을 빼고 센 학생에게는 어구를 천천히 읽으며 빠진 소리가 없는지 묻는다. 도전 단계에는 어느 칸에도 맞지 않는 카드가 한 장 섞여 있으니 낱말 수를 세어 본 뒤 놓도록 한다.',
          '어구 카드를 낱말 수에 맞는 칸에 나눠 놓아요.',
          LA('sort', '어구를 소리 내어 읽으며 낱말마다 손가락을 하나씩 접어 보세요. 접은 손가락 수가 낱말 수예요.'),
          [
            SO('어구 카드를 낱말 수에 맞게 나눠 보세요.', [{ id: 'two', label: '낱말 2개' }, { id: 'three', label: '낱말 3개' }], [C('r', 'Run fast.'), C('s', 'Sit down.'), C('l', 'Look at me.'), C('o', 'Open the door.')], { two: ['r', 's'], three: ['l', 'o'] }, { x: [C('x', 'Come here, please.')] }),
            SO('어구 카드를 낱말 수에 맞게 나눠 보세요.', [{ id: 'two', label: '낱말 2개' }, { id: 'three', label: '낱말 3개' }], [C('w', 'Walk home.'), C('t', 'Walk to school.'), C('c', 'Close it.'), C('p', 'Pick up books.')], { two: ['w', 'c'], three: ['t', 'p'] }, { d: 0.2, x: [C('x', 'Wash your hands, please.')] }),
            SO('어구 카드를 낱말 수에 맞게 나눠 보세요. 한 칸에 세 장이 들어가요.', [{ id: 'two', label: '낱말 2개' }, { id: 'three', label: '낱말 3개' }], [C('a', 'Stand up.'), C('b', 'Wait here.'), C('c', 'Stop now.'), C('d', 'Clap your hands.')], { two: ['a', 'b', 'c'], three: ['d'] }, { d: 0.25, x: [C('x', 'Turn and look.')],
              p: ['Open the door.에서 the는 낱말일까요?', ['낱말이에요, 세어야 해요', '짧아서 세지 않아요'], 0, 'the도 한 낱말이에요. 짧아도 손뼉을 한 번 쳐요.'] }),
          ]],
        a2: ['활동 2. 어구를 듣고 손뼉 수 알아맞히기',
          '문항마다 듣기 단추를 누르게 하고 손뼉을 같이 치며 센다. 소리가 나지 않으면 교사가 어구를 읽어 준다. "어구가 끝날 때까지 손뼉을 몇 번 쳤나요?" 낱말을 놓치고 손뼉이 모자란 학생에게는 한 번 더 들려주며 천천히 센다. 마지막 문항은 짝 활동이므로 서로 어구를 읽어 주고 손뼉 수를 맞혀 보게 한다.',
          '듣기 단추를 눌러 어구를 듣고, 손뼉을 친 횟수에 맞는 카드를 골라요.',
          LA('listen', '손뼉을 같이 치며 들어 보세요. 손뼉을 친 횟수와 같은 카드를 찾아요.'),
          [
            LS('듣기 단추를 누르고, 어구의 낱말 수에 맞는 카드를 골라 보세요.', 'Stand up now.', { cards: [KO('n3', '낱말 세 개'), KO('n2', '낱말 두 개')] }, 'n3', { x: [KO('n4', '낱말 네 개')] }),
            LS('듣기 단추를 누르고, 이번에 들은 어구의 낱말 수를 골라 보세요.', 'Sit down.', { cards: [KO('n3', '낱말 세 개'), KO('n2', '낱말 두 개')] }, 'n2', { d: 0.15, x: [KO('n4', '낱말 네 개')] }),
            LS('듣기 단추를 누르고, 들은 어구의 낱말 수를 골라 보세요.', 'Please close the door.', { cards: [KO('n4', '낱말 네 개'), KO('n3', '낱말 세 개')] }, 'n4', { d: 0.25, x: [KO('n5', '낱말 다섯 개')] }),
            TK('짝에게 두 낱말 어구와 세 낱말 어구를 하나씩 읽어 주고, 짝이 손뼉을 치며 낱말 수를 말해 줘요. 바꾸어 한 뒤 "다 했어요"를 누르세요.'),
          ]],
        wrap: ['"오늘 낱말 수를 셀 때 어떻게 했나요?" 한두 명이 손뼉이나 손가락 접기를 보여 주게 한 뒤 출구 질문을 푼다. the를 세지 않은 학생은 다음 시간 시작에 어구를 한 낱말씩 칠판에 써 보며 센다.',
          [
            { type: 'tool', tool: 'wordcards', options: { mode: 'sort', shuffle: false, slots: [{ id: 'two', label: '낱말 2개' }, { id: 'three', label: '낱말 3개' }], cards: [C('g', 'Go home.'), C('t', 'Take your bag.')] }, prompt: '어구 카드를 낱말 수에 맞게 나눠 보세요.', target: { sort: { two: ['g'], three: ['t'] } }, difficulty: 0.2 },
            { type: 'choice', prompt: 'Close the door. 의 낱말은 몇 개일까요?', options: ['두 개', '세 개'], answer: 1, difficulty: 0.2, explain: 'Close, the, door 세 낱말이에요.' },
          ], '오늘 낱말 수 세기는 어땠나요?'],
        ws: ['낱말 수 세기', [
          { type: 'table', prompt: '어구의 낱말 수를 쓰세요.', columns: ['어구', '낱말 수'], cells: [['Run fast.', ''], ['Look at me.', ''], ['Open the door.', ''], ['Stand up.', '']], answer: '2 / 3 / 3 / 2' },
          { type: 'choice', prompt: '낱말이 세 개인 어구에 ○ 하세요.', options: ['Sit down.', 'Walk to school.', 'Stop now.'], answer: 'Walk to school.' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: 'Close ___ door.', answer: 'the' },
          { type: 'short', prompt: '낱말이 두 개인 어구를 하나 쓰고 낱말마다 ○ 를 그리세요.' },
        ], '어구를 읽으며 낱말마다 손가락을 하나씩 접어서 세어요.', [
          { type: 'table', prompt: '낱말 수를 쓰세요.', columns: ['어구', '낱말 수'], cells: [['Run fast.', ''], ['Look at me.', '']], answer: '2 / 3' },
          { type: 'choice', prompt: '낱말이 두 개인 어구에 ○ 하세요.', options: ['Sit down.', 'Look at me.'], answer: 'Sit down.' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: 'Sit ___.', answer: 'down' },
          { type: 'short', prompt: '어구 하나를 쓰세요.' },
        ]],
        diff: ['어구 나누기에서 카드가 네 장이고 맞게 놓으면 초록 테두리가 생겨요. 틀리게 놓으면 되돌아와요.', '카드를 모두 놓은 뒤 확인을 눌러 스스로 고쳐요. 낱말마다 손가락을 접어 세어 보아요.', '어구 나누기에 어느 칸에도 맞지 않는 긴 어구가 한 장 섞여 나와요.'],
        notes: '자주 보이는 어려움: ① the, a를 낱말로 세지 않는다 → 짧아도 한 낱말이라고 말하며 한 번 더 센다. ② 어구가 길어지면 박자가 늦어진다 → 천천히 같은 간격으로 읽도록 시범을 보인다. ③ 듣기만 하고 센 수를 말하지 못한다 → 손가락을 접으며 들은 뒤 숫자를 입으로 말하게 한다. 짝 활동은 교사가 돌아다니며 낱말 수가 맞는지 듣는다.',
      }),

      // ───────────────────────── 3차시 (extend) ─────────────────────────
      LN(3, S1, {
        title: '끝소리가 같은 낱말 짝 찾고 챈트 빈칸 채우기',
        obj: '끝소리가 같은 낱말을 짝 지어 보고, 빈칸에 끝소리가 같은 낱말을 넣어 짧은 어구를 완성해 읽을 수 있다.',
        ill: ['two children chanting while two word cards that sound alike are linked with a ribbon', 'cat - hat', '끝소리가 같은 낱말', [{ motif: 'cat', x: 94, y: 204, s: 0.9 }, { motif: 'cloud', x: 396, y: 78 }, { motif: 'hills', y: 208 }]],
        intro: ['"cat, hat. 두 낱말이 끝에서 같은 소리가 나지요?"라고 말하며 천천히 읽어 준다. 학생이 "아앳, 아앳이요."처럼 소리를 흉내 내면 두 낱말의 끝을 손으로 같이 묶어 보인다. 글자가 달라서 소리도 다르다고 생각하는 학생에게는 눈을 감고 소리만 들어 보게 한 뒤 끝소리를 비교한다. 우리말 "반짝반짝"처럼 끝소리가 닮은 말놀이도 하나 이야기해 본다.',
          '끝소리가 같은 낱말끼리는 이어 읽으면 노래처럼 들려요. 소리를 비교해 봐요.',
          { tool: 'wordcards', options: { mode: 'match', shuffle: false, slots: [{ id: 'cat', label: 'cat' }, { id: 'snow', label: 'snow' }], cards: [C('hat', 'hat'), C('go', 'go')] }, sequence: [{ at: {} }, { at: { hat: 0, go: 1 } }] }],
        a1: ['활동 1. 끝소리가 같은 낱말 짝 짓기',
          '"두 낱말을 소리 내어 읽고 끝에서 같은 소리가 나면 짝이에요. 글자가 꼭 같지 않아도 괜찮아요." 낱말마다 입으로 두 번씩 읽게 한다. 첫소리가 비슷한 낱말을 짝으로 놓는 학생에게는 끝소리만 따로 읽어 비교하게 한다. 도전 단계에는 짝이 없는 낱말이 하나 섞여 있다.',
          '왼쪽 낱말과 끝소리가 같은 낱말 카드를 옆에 놓아요.',
          LA('match', '낱말을 소리 내어 읽고 끝에서 나는 소리를 비교해 보세요. 같은 소리로 끝나는 카드를 찾아요.'),
          [
            MT('왼쪽 낱말과 끝소리가 같은 카드를 놓아 보세요.', [{ id: 'cat', label: 'cat' }, { id: 'snow', label: 'snow' }, { id: 'sun', label: 'sun' }], [C('hat', 'hat'), C('go', 'go'), C('run', 'run')], { cat: 'hat', snow: 'go', sun: 'run' }, { x: [C('bus', 'bus')] }),
            MT('왼쪽 낱말과 끝소리가 같은 카드를 놓아 보세요.', [{ id: 'red', label: 'red' }, { id: 'tree', label: 'tree' }, { id: 'cake', label: 'cake' }], [C('bed', 'bed'), C('bee', 'bee'), C('bake', 'bake')], { red: 'bed', tree: 'bee', cake: 'bake' }, { d: 0.2, x: [C('pen', 'pen')] }),
            MT('왼쪽 낱말과 끝소리가 같은 카드를 놓아 보세요.', [{ id: 'moon', label: 'moon' }, { id: 'fall', label: 'fall' }, { id: 'rain', label: 'rain' }], [C('spoon', 'spoon'), C('ball', 'ball'), C('train', 'train')], { moon: 'spoon', fall: 'ball', rain: 'train' }, { d: 0.25, x: [C('star', 'star')],
              p: ['moon과 spoon은 어디가 같을까요?', ['끝소리가 같아요', '첫소리가 같아요'], 0, 'moon과 spoon은 끝소리 oon이 같아요. 끝소리를 비교하면 짝을 찾을 수 있어요.'] }),
          ]],
        a2: ['활동 2. 끝소리가 같은 낱말로 어구 완성하기',
          '"빈칸 앞의 낱말과 소리가 비슷한 낱말을 넣으면 노래처럼 이어져요. 완성한 어구를 소리 내어 읽어 봐요." 읽는 소리를 듣고 어색하면 다시 고르게 한다. 뜻만 보고 고르는 학생에게는 두 낱말을 이어 읽으며 소리를 비교해 보게 한다. 짝 활동 문항은 서로 빈칸을 낼 어구를 말해 주고 맞혀 보게 한다.',
          '빈칸에 끝소리가 같은 낱말 카드를 넣어 어구를 완성해요.',
          LA('fill', '빈칸 앞 낱말을 소리 내어 읽고, 끝소리가 닮은 낱말이 어느 카드인지 이어 읽어 보세요.'),
          [
            FI('끝소리가 같은 낱말을 넣어 어구를 완성해 보세요.', [{ id: 'f1', label: 'The cat has a ___.' }], TX('hat', 'sun', 'bed'), { f1: 'hat' }, { d: 0.15 }),
            FI('끝소리가 같은 낱말을 넣어 어구를 완성해 보세요.', [{ id: 'f1', label: 'Rain, rain on the ___.' }], TX('train', 'cup', 'dog'), { f1: 'train' }, { d: 0.2 }),
            FI('끝소리가 같은 낱말을 넣어 어구를 완성해 보세요.', [{ id: 'f1', label: 'Cold, cold, shiny ___.' }], TX('gold', 'bag', 'tree'), { f1: 'gold' }, { d: 0.25 }),
            TK('짝과 번갈아 해요. 한 사람이 어구를 읽다가 끝 낱말을 비우면 다른 사람이 끝소리가 닮은 낱말로 채워 말해요. 바꾸어 한 뒤 "다 했어요"를 누르세요.'),
          ]],
        wrap: ['"오늘 끝소리가 같은 낱말 짝을 몇 쌍 만났나요?" 두세 명이 낱말을 읽게 한 뒤 출구 질문을 푼다. 글자가 같다고 소리도 같다고 답한 학생은 다음 시간 시작에 sun과 son처럼 소리가 같은 낱말을 비교해 읽어 본다.',
          [
            { type: 'tool', tool: 'wordcards', options: { mode: 'match', shuffle: true, slots: [{ id: 'dog', label: 'dog' }, { id: 'pen', label: 'pen' }], cards: [C('log', 'log'), C('ten', 'ten')] }, prompt: '왼쪽 낱말과 끝소리가 같은 카드를 놓아 보세요.', target: { match: { dog: 'log', pen: 'ten' } }, difficulty: 0.2 },
            { type: 'choice', prompt: 'ball과 끝소리가 같은 낱말은 무엇일까요?', options: ['fall', 'bat'], answer: 0, difficulty: 0.2, explain: 'ball과 fall은 끝소리 all이 같아요.' },
          ], '오늘 끝소리가 같은 낱말 찾기는 어땠나요?'],
        ws: ['끝소리가 같은 낱말', [
          { type: 'table', prompt: '끝소리가 같은 낱말을 선으로 이어 짝을 쓰세요.', columns: ['낱말', '짝'], cells: [['cat', ''], ['snow', ''], ['red', ''], ['ball', '']], answer: 'hat / go / bed / fall' },
          { type: 'choice', prompt: 'moon과 끝소리가 같은 낱말에 ○ 하세요.', options: ['spoon', 'sun', 'mop'], answer: 'spoon' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: 'Rain, rain on the ___.', answer: 'train' },
          { type: 'short', prompt: '끝소리가 같은 낱말 한 쌍을 쓰세요.' },
        ], '낱말을 소리 내어 읽고 끝소리를 비교해요. 같은 소리면 연필로 이어요.', [
          { type: 'table', prompt: '끝소리가 같은 낱말의 짝을 쓰세요.', columns: ['낱말', '짝'], cells: [['cat', ''], ['red', '']], answer: 'hat / bed' },
          { type: 'choice', prompt: 'cat과 끝소리가 같은 낱말에 ○ 하세요.', options: ['hat', 'dog'], answer: 'hat' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: 'The cat has a ___.', answer: 'hat' },
          { type: 'short', prompt: '낱말 한 쌍을 쓰세요.' },
        ]],
        diff: ['짝 짓기에서 카드가 두세 장이고 맞게 놓으면 초록 테두리가 생겨요. 틀리게 놓으면 카드가 되돌아와요.', '모든 카드를 놓은 뒤 확인을 눌러 스스로 고쳐요. 낱말을 소리 내어 읽으며 비교해요.', '짝 짓기에 짝이 없는 낱말(bus·pen·star)이 한 장씩 섞여 나와요.'],
        notes: '자주 보이는 어려움: ① 글자가 같아야 같은 소리라고 여긴다 → 눈을 감고 소리만 비교하게 한다. ② 첫소리가 같은 낱말을 짝으로 고른다 → 끝에서 나는 소리만 따로 읽어 보게 한다. ③ 빈칸 뒤에서 뜻만 보고 고른다 → 앞 낱말과 이어 읽어 소리를 비교하게 한다. 여기에 쓰인 어구는 새로 지은 것이며 알려진 노래 가사를 옮기지 않았다.',
      }),

      // ───────────────────────── 4차시 (core) ─────────────────────────
      LN(4, S1, {
        title: '날씨 말을 듣고 그림과 뜻 고르며 따라 말하기',
        obj: '교사와 기기의 날씨 말(It is sunny. 등)을 듣고 뜻에 맞는 카드를 고르며 같은 문장을 따라 말할 수 있다.',
        ill: ['a child by a window listening to a teacher bubble that says the weather while a sun and a cloud float outside', 'It is sunny.', '날씨 말 듣고 따라 하기', [{ motif: 'sun', x: 90, y: 80, s: 0.8 }, { motif: 'cloud', x: 396, y: 76 }, { motif: 'tree', x: 400, y: 214 }]],
        intro: ['창밖을 가리키며 "It is sunny."를 천천히 말하고 "오늘 날씨와 같은 말일까요?"라고 묻는다. 학생이 "해가 났어요."라고 하면 "그럼 It is rainy.는 어떤 날일까요?"로 넓힌다. 문장을 들으며 우리말로만 대답하고 따라 말하지 않는 학생에게는 한 낱말씩 끊어 천천히 읽어 주며 입 모양을 같이 따라 하게 한다. 날씨 낱말 sunny, rainy가 두 번 나오는지, 문장 앞의 It is가 같은지도 짚는다.',
          '선생님이 말하는 날씨 말을 듣고, 같은 날씨 그림을 찾아봐요. 들은 말은 따라서 말해 봐요.',
          { tool: 'wordcards', options: { mode: 'listen', basket: '들은 것', shuffle: false, say: 'It is sunny.', cards: [KO('sun', '해가 나요'), KO('rain', '비가 와요')] }, sequence: [{ at: {} }, { at: { sun: 0 } }] }],
        a1: ['활동 1. 날씨 말을 듣고 뜻 고르기',
          '문항마다 듣기 단추를 한 번 누르게 하고 소리가 나지 않으면 교사가 "문제 하나, It is sunny."처럼 읽어 준다. "먼저 듣고, 다음에 한 번 따라 말해 보세요." 한 문제를 풀 때마다 고른 카드의 영어 문장을 소리 내어 말하게 한다. 날씨 낱말 대신 It is만 듣고 아무 카드나 고르는 학생에게는 문장의 끝 낱말만 한 번 더 들려준다. 도전 단계에는 뜻이 비슷한 카드가 한 장 더 있다.',
          '듣기 단추를 눌러 날씨 말을 듣고, 뜻이 맞는 카드를 바구니에 넣어요.',
          LA('listen', '문장의 끝에 오는 낱말에 귀를 기울여 보세요. 날씨를 나타내는 낱말이에요.'),
          [
            LS('듣기 단추를 누르고, 들은 말의 뜻을 골라 보세요.', 'It is sunny.', { cards: [KO('sun', '해가 나요'), KO('rain', '비가 와요')] }, 'sun', { x: [KO('snow', '눈이 와요')] }),
            LS('듣기 단추를 누르고, 이번에 들은 말의 뜻을 골라 보세요.', 'It is windy.', { cards: [KO('wind', '바람이 불어요'), KO('sun', '해가 나요')] }, 'wind', { d: 0.2, x: [KO('cloud', '구름이 꼈어요')] }),
            LS('듣기 단추를 누르고, 들은 말의 뜻을 골라 보세요.', 'It is cold.', { cards: [KO('cold', '추워요'), KO('hot', '더워요')] }, 'cold', { d: 0.2, x: [KO('cool', '시원해요')] }),
            LS('듣기 단추를 누르고, 들은 말의 뜻을 골라 보세요.', 'It is rainy.', { cards: [KO('rain', '비가 와요'), KO('snow', '눈이 와요')] }, 'rain', { d: 0.25, x: [KO('wind', '바람이 불어요')],
              p: ['It is 다음에 오는 낱말은 무엇을 알려 줄까요?', ['날씨가 어떤지 알려 줘요', '내 이름을 알려 줘요'], 0, 'It is 뒤의 낱말이 날씨를 알려 줘요. 끝 낱말에 귀를 기울여요.'] }),
          ]],
        a2: ['활동 2. 날씨 그림과 낱말 짝 짓고 말하기',
          '그림·뜻 칸 옆에 영어 낱말 카드를 놓게 하고, 놓은 뒤 "It is sunny."처럼 문장으로 말하게 한다. "낱말 하나만 말하지 말고 It is를 붙여서 말해 봐요." 소리 내어 읽지 않고 카드만 놓는 학생에게는 짝에게 한 문장씩 읽어 주게 한다. 짝 활동은 오늘 날씨를 한 문장으로 서로 말해 보는 것이다.',
          '그림과 뜻 옆에 알맞은 영어 낱말 카드를 놓고, It is 를 붙여 문장으로 말해요.',
          LA('match', '그림이 나타내는 날씨의 뜻을 우리말로 먼저 말해 보고, 소리를 떠올려 알맞은 카드를 찾아보세요.'),
          [
            MW('그림과 뜻 옆에 알맞은 영어 낱말을 놓아 보세요.', [W('sunny', '해가 나요', 'sun'), W('cloudy', '구름이 꼈어요', 'cloud')], { d: 0.15 }),
            MW('그림과 뜻 옆에 알맞은 영어 낱말을 놓아 보세요.', [W('snowy', '눈이 와요', 'snow'), W('rainy', '비가 와요', 'umbrella'), W('sunny', '해가 나요', 'sun')], { d: 0.2, x: [W('windy', '바람이 불어요', 'leaf')] }),
            MW('그림과 뜻 옆에 알맞은 영어 낱말을 놓아 보세요. 날씨가 세 가지예요.', [W('windy', '바람이 불어요', 'leaf'), W('cloudy', '구름이 꼈어요', 'cloud'), W('snowy', '눈이 와요', 'snow')], { d: 0.25, x: [W('rainy', '비가 와요', 'umbrella')] }),
            TK('짝과 번갈아 오늘 날씨를 한 문장으로 말해요. 한 사람이 창밖을 보고 It is ○○. 라고 말하면 다른 사람이 따라 말해요. 바꾸어 한 뒤 "다 했어요"를 누르세요.'),
          ]],
        wrap: ['"오늘 It is 다음에 어떤 낱말을 말했나요?" 두세 명이 문장을 말하게 한 뒤 출구 질문을 푼다. 소리를 듣고 틀린 학생은 다음 시간 시작에 날씨 카드 하나를 짚으며 영어로 먼저 말해 본다.',
          [
            { type: 'tool', tool: 'wordcards', options: { mode: 'listen', basket: '들은 것', shuffle: false, say: 'It is snowy.', cards: [KO('snow', '눈이 와요'), KO('sun', '해가 나요')] }, prompt: '듣기 단추를 누르고, 들은 말의 뜻을 골라 보세요.', target: { listen: 'snow' }, difficulty: 0.2 },
            { type: 'choice', prompt: 'It is windy. 는 어떤 날씨를 말할까요?', options: ['바람이 불어요', '눈이 와요'], answer: 0, difficulty: 0.15, explain: 'windy는 바람이 부는 날을 말해요.' },
          ], '오늘 날씨 말 따라 하기는 어땠나요?'],
        ws: ['날씨 말', [
          { type: 'table', prompt: '날씨 낱말의 뜻을 우리말로 쓰세요.', columns: ['영어', '뜻'], cells: [['sunny', ''], ['rainy', ''], ['windy', ''], ['snowy', '']], answer: '해가 나요 / 비가 와요 / 바람이 불어요 / 눈이 와요' },
          { type: 'choice', prompt: '"추워요"라는 뜻의 문장에 ○ 하세요.', options: ['It is cold.', 'It is hot.', 'It is sunny.'], answer: 'It is cold.' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: 'It ___ cloudy.', answer: 'is' },
          { type: 'short', prompt: '오늘 날씨를 영어로 한 문장 써 보세요.' },
        ], '날씨 그림을 보고 우리말로 먼저 말한 뒤 영어 낱말을 찾아요.', [
          { type: 'table', prompt: '날씨 낱말의 뜻을 우리말로 쓰세요.', columns: ['영어', '뜻'], cells: [['sunny', ''], ['rainy', '']], answer: '해가 나요 / 비가 와요' },
          { type: 'choice', prompt: '"비가 와요"라는 뜻의 낱말에 ○ 하세요.', options: ['rainy', 'sunny'], answer: 'rainy' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: 'It is ___.', answer: 'sunny' },
          { type: 'short', prompt: '날씨 낱말 하나를 쓰세요.' },
        ]],
        diff: ['날씨 듣기에서 카드가 두 장이고 맞게 놓으면 초록 테두리가 생겨요. 틀리게 놓으면 되돌아와요.', '문장을 듣고 카드를 골라요. 놓은 뒤 확인을 눌러 스스로 고쳐요.', '날씨 듣기와 짝 짓기에 뜻이 비슷한 카드가 한 장 더 섞여 나와요.'],
        notes: '자주 보이는 어려움: ① It is만 듣고 끝 낱말을 놓친다 → 끝 낱말만 두 번 천천히 들려준다. ② cloudy와 cold처럼 첫소리가 비슷한 낱말을 바꾼다 → 두 낱말의 뜻을 몸짓으로 나타내 보게 한다. ③ 낱말만 말하고 문장으로 말하지 않는다 → It is를 먼저 같이 말하게 한다. 소리는 누를 때만 나며 소리가 없는 기기에서는 교사가 읽어 준다.',
      }),

      // ───────────────────────── 5차시 (practice) ─────────────────────────
      LN(5, S1, {
        title: '날씨 문장 낱말 차례 놓고 날씨 카드 뒤집어 말하기',
        obj: '날씨 문장의 낱말을 차례대로 놓고, 조건에 맞는 카드만 뒤집어 영어 이름을 소리 내어 말할 수 있다.',
        ill: ['a child lining up word cards to build a sentence under a sky with clouds and falling leaves', 'It is cold today.', '낱말을 차례대로', [{ motif: 'leaf', x: 90, y: 90 }, { motif: 'leaf', x: 380, y: 100, s: 0.8 }, { motif: 'tree', x: 400, y: 214 }]],
        intro: ['"It is cold today."를 천천히 읽어 주고 "첫 번째로 들린 낱말은 무엇이었나요?"라고 묻는다. 학생이 It을 말하면 칠판에 낱말 카드 네 장을 차례로 붙이며 "It, is, cold, today."를 한 낱말씩 손으로 가리킨다. 낱말을 아는데 순서를 거꾸로 말하는 학생에게는 교사가 읽는 순서대로 손가락을 따라가며 첫 낱말부터 같이 말하게 한다.',
          '문장은 낱말이 차례대로 이어져요. 선생님이 읽는 순서를 잘 들으며 카드를 놓아 봐요.',
          { tool: 'wordcards', options: { mode: 'order', shuffle: false, cards: [C('a', 'It'), C('b', 'is'), C('c', 'cold.')] }, sequence: [{ at: {} }, { at: { a: 0, b: 1, c: 2 } }] }],
        a1: ['활동 1. 날씨 문장의 낱말 차례대로 놓기',
          '"우리말 뜻을 먼저 말하고 첫 낱말부터 놓아요. 놓은 뒤 소리 내어 읽어요." 읽을 때 낱말 사이를 끊지 않고 이어서 읽어도 좋다고 안내한다. 낱말을 모두 아는데 놓는 순서만 틀린 학생에게는 It is를 문장의 시작으로 먼저 놓아 보게 한다. 뜻을 먼저 말하는 활동이므로 영어 소리를 같이 듣게 해도 좋다.',
          '낱말 카드를 차례대로 놓아 날씨 문장을 만들고 소리 내어 읽어요.',
          LA('order', '문장의 뜻을 우리말로 말해 보고, 가장 먼저 말하는 낱말부터 차례로 놓아 보세요.'),
          [
            OS('"오늘은 추워요"라는 뜻의 문장을 차례대로 놓아 보세요.', 'It is cold today.', { d: 0.15 }),
            OS('"바람이 부는 날이에요"라는 뜻의 문장을 차례대로 놓아 보세요.', 'It is a windy day.', { d: 0.2 }),
            OS('"나는 해가 나는 날을 좋아해요"라는 뜻의 문장을 차례대로 놓아 보세요.', 'I like sunny days.', { d: 0.25,
              p: ['영어 문장은 누가 먼저 나올까요?', ['말하는 사람(I)이 먼저 나와요', '날씨 낱말이 먼저 나와요'], 0, 'I like sunny days.는 나(I)를 먼저 말하고 좋아하는 것을 뒤에 말해요.'] }),
            OS('"가을은 시원해요"라는 뜻의 문장을 차례대로 놓아 보세요.', 'Autumn is cool.', { d: 0.2 }),
          ]],
        a2: ['활동 2. 조건에 맞는 카드만 뒤집어 말하기',
          '"질문에 맞는 카드만 눌러 뒤집으면 영어 이름이 나와요. 뒤집힌 낱말을 소리 내어 말해 봐요." 뒤집을 때 소리가 나는 기기에서는 한 번 들은 뒤 따라 말하게 한다. 모든 카드를 눌러 보는 학생에게는 질문의 조건을 다시 읽어 주며 맞는 카드만 고르게 한다. 짝 활동은 카드 하나를 가리키며 What is it? 대신 낱말을 말해 주는 놀이이다.',
          '질문에 맞는 카드만 뒤집어 영어 이름을 확인하고 소리 내어 말해요.',
          LF('질문의 조건을 다시 읽어 보세요. 그 조건에 맞는 그림 카드만 눌러 보세요.'),
          [
            FP('비가 오는 날 쓰는 카드만 뒤집어 보세요.', [W('umbrella', '우산', 'umbrella'), W('sun', '해', 'sun'), W('ball', '공', 'ball')], ['umbrella'], { d: 0.15 }),
            FP('가을에 나무에서 떨어지는 카드만 뒤집어 보세요.', [W('leaf', '나뭇잎', 'leaf'), W('star', '별', 'star'), W('book', '책', 'book')], ['leaf'], { d: 0.2 }),
            FP('차갑고 하얀 카드만 뒤집어 보세요.', [W('snow', '눈', 'snow'), W('sun', '해', 'sun'), W('apple', '사과', 'apple')], ['snow'], { d: 0.2 }),
            FP('하늘에 떠 있는 카드를 모두 뒤집어 보세요.', [W('sun', '해', 'sun'), W('cloud', '구름', 'cloud'), W('tree', '나무', 'tree'), W('book', '책', 'book')], ['sun', 'cloud'], { d: 0.25 }),
            TK('짝에게 날씨 카드 하나를 말없이 가리키고, 짝이 그 영어 낱말을 말해요. 맞으면 서로 손뼉을 한 번 쳐요. 바꾸어 한 뒤 "다 했어요"를 누르세요.'),
          ]],
        wrap: ['"오늘 문장에서 가장 먼저 놓은 낱말은 무엇이었나요?" 두세 명이 대답하게 한 뒤 출구 질문을 푼다. 낱말 순서를 틀린 학생은 다음 시간 시작에 문장을 천천히 읽으며 첫 낱말부터 다시 놓는다.',
          [
            { type: 'tool', tool: 'wordcards', options: { mode: 'order', shuffle: true, cards: [C('a', 'It'), C('b', 'is'), C('c', 'rainy'), C('d', 'today.')] }, prompt: '"오늘은 비가 와요"라는 뜻의 문장을 차례대로 놓아 보세요.', target: { order: ['a', 'b', 'c', 'd'] }, difficulty: 0.2 },
            { type: 'choice', prompt: 'It is cold today. 에서 첫 낱말은 무엇일까요?', options: ['today', 'It'], answer: 1, difficulty: 0.15, explain: '왼쪽부터 읽으면 It이 첫 낱말이에요.' },
          ], '오늘 문장 만들기와 카드 뒤집기는 어땠나요?'],
        ws: ['날씨 문장과 카드', [
          { type: 'table', prompt: '그림 카드에 알맞은 영어 낱말을 쓰세요.', columns: ['뜻', '영어'], cells: [['우산', ''], ['눈', ''], ['구름', ''], ['나뭇잎', '']], answer: 'umbrella / snow / cloud / leaf' },
          { type: 'choice', prompt: '"오늘은 추워요"를 바르게 놓은 문장에 ○ 하세요.', options: ['It is cold today.', 'Cold it today is.'], answer: 'It is cold today.' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: 'I ___ sunny days.', answer: 'like' },
          { type: 'short', prompt: '내가 좋아하는 날씨를 I like ○○ days. 로 써 보세요.' },
        ], '문장을 읽으며 낱말마다 손가락으로 짚고 차례를 확인해요.', [
          { type: 'table', prompt: '그림 카드에 알맞은 영어 낱말을 쓰세요.', columns: ['뜻', '영어'], cells: [['우산', ''], ['눈', '']], answer: 'umbrella / snow' },
          { type: 'choice', prompt: '바른 문장에 ○ 하세요.', options: ['It is cold.', 'Cold is it.'], answer: 'It is cold.' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: 'It ___ cold today.', answer: 'is' },
          { type: 'short', prompt: '날씨 낱말 하나를 쓰세요.' },
        ]],
        diff: ['문장 놓기에서 맞게 놓으면 초록 테두리가 생기고 틀리게 놓으면 카드가 되돌아와요. 카드 뒤집기는 카드가 세 장이에요.', '모든 카드를 놓고 확인을 눌러 스스로 고쳐요. 뒤집을 때 소리 내어 말해요.', '카드 뒤집기에서 조건에 맞는 카드가 둘 이상이고 문장이 다섯 낱말까지 길어져요.'],
        notes: '자주 보이는 어려움: ① 낱말을 우리말 순서대로 놓는다 → 영어는 I를 먼저 말한다는 점을 짚는다. ② 뒤집은 카드의 영어 이름을 읽지 않는다 → 한 장씩 뒤집을 때마다 소리 내어 말하게 한다. ③ 조건을 읽지 않고 카드를 모두 뒤집는다 → 질문의 조건을 소리 내어 다시 읽게 한다. 짝 활동은 낱말 하나를 말하는 연습이며 평가가 아니다.',
      }),

      // ───────────────────────── 6차시 (core) ─────────────────────────
      LN(6, S4, {
        title: '실물 카드 가리키며 This is… 한 문장 말하기',
        obj: '교실 물건 카드를 가리키며 This is a ○○. 한 문장을 만들고 소리 내어 말할 수 있다.',
        ill: ['a child pointing at a pencil on a desk while a speech bubble shows a short sentence', 'This is a book.', '가리키며 말하기', [{ motif: 'book', x: 92, y: 206, s: 0.9 }, { motif: 'pencil', x: 392, y: 208 }, { motif: 'star', x: 250, y: 74, s: 0.6 }]],
        intro: ['연필을 들고 "This is a pencil."을 말하며 연필을 가리킨다. 책을 들고 "This is a book."을 말하게 하고 "무엇이 바뀌었나요?"라고 묻는다. 학생이 "pencil이 book으로요."라고 답하면 This is a는 그대로임을 확인한다. 낱말만 말하고 가리키지 않는 학생에게는 한 손으로 물건을 가리키며 문장 전체를 말하게 한다.',
          '물건을 가리키며 This is a… 하고 말해요. 바뀌는 낱말이 무엇인지 찾아봐요.',
          { tool: 'wordcards', options: { mode: 'fill', shuffle: false, slots: [{ id: 'f1', label: 'This is a ___.' }], cards: TX('pencil', 'book') }, sequence: [{ at: {} }, { at: { pencil: 0 } }] }],
        a1: ['활동 1. 물건을 가리키며 빈칸에 낱말 넣기',
          '"물건을 가리키며 문장 전체를 말해 보세요. 가리키는 물건에 맞는 낱말 카드를 빈칸에 놓아요." 낱말을 고른 뒤 문장을 한 번 소리 내어 읽게 한다. 물건 이름을 모르는 학생에게는 교사가 물건을 들고 영어 낱말을 한 번 말해 준다. an이 필요한 낱말은 다음 시간에 다루므로 이번에는 a가 붙는 낱말만 쓴다.',
          '물건에 맞는 낱말 카드를 빈칸에 놓아 문장을 완성하고 소리 내어 읽어요.',
          LA('fill', '가리키는 물건의 이름을 먼저 떠올려 보세요. 빈칸에 넣고 문장 전체를 읽어 소리가 자연스러운지 들어요.'),
          [
            FI('연필을 가리키며 말해요. 빈칸에 알맞은 낱말을 골라 보세요.', [{ id: 'f1', label: 'This is a ___.' }], TX('pencil', 'book', 'ball'), { f1: 'pencil' }, { d: 0.15 }),
            FI('책을 가리키며 말해요. 빈칸에 알맞은 낱말을 골라 보세요.', [{ id: 'f1', label: 'This is a ___.' }], TX('cat', 'book', 'dog'), { f1: 'book' }, { d: 0.15 }),
            FI('공을 가리키며 말해요. 빈칸에 알맞은 낱말을 골라 보세요.', [{ id: 'f1', label: 'This is a ___.' }], TX('pencil', 'ball', 'bag'), { f1: 'ball' }, { d: 0.2 }),
            FI('사과를 가리키며 말해요. 빈칸에 알맞은 낱말을 골라 보세요.', [{ id: 'f1', label: 'This is an ___.' }], TX('apple', 'umbrella', 'egg'), { f1: 'apple' }, { d: 0.3 }),
          ]],
        a2: ['활동 2. 물건 이름 문장 차례대로 놓기',
          '"문장을 만들 때는 This is a 다음에 물건 이름을 놓아요. 놓은 뒤 가리키며 말해 봐요." 한 문장을 다 놓으면 짝에게 읽어 주게 한다. 낱말을 거꾸로 놓은 학생에게는 This가 문장의 첫 낱말임을 알려 준다. 짝 활동은 교실에서 물건 세 개를 정해 This is a ○○.를 번갈아 말하는 것이다.',
          '낱말 카드를 차례대로 놓아 This is… 문장을 만들고 물건을 가리키며 말해요.',
          LA('order', '문장의 첫 낱말부터 소리 내어 읽으며 가리키는 물건의 이름을 마지막에 놓아 보세요.'),
          [
            OS('"이것은 책이에요"라는 뜻의 문장을 차례대로 놓아 보세요.', 'This is a book.', { d: 0.15 }),
            OS('"이것은 공이에요"라는 뜻의 문장을 차례대로 놓아 보세요.', 'This is a ball.', { d: 0.15 }),
            OS('"이것은 내 가방이에요"라는 뜻의 문장을 차례대로 놓아 보세요.', 'This is my bag.', { d: 0.25,
              p: ['my는 무엇일까요?', ['내 것이라는 뜻이에요', '이것이라는 뜻이에요'], 0, 'my는 "나의"라는 뜻이에요. This is a book.과 This is my book.은 뜻이 달라요.'] }),
            TK('짝과 번갈아 교실에서 물건 세 개를 가리키며 This is a ○○. 라고 말해요. 짝은 맞는지 보고 손가락으로 ○ 표시를 해 줘요. "다 했어요"를 누르세요.'),
          ]],
        wrap: ['"오늘 가장 많이 바뀐 낱말은 무엇이었나요?" 두세 명이 물건 이름을 말하게 한 뒤 출구 질문을 푼다. 낱말만 말한 학생은 다음 시간 시작에 This is a를 같이 소리 내어 읽고 물건을 가리키게 한다.',
          [
            { type: 'tool', tool: 'wordcards', options: { mode: 'fill', shuffle: false, slots: [{ id: 'f1', label: 'This is a ___.' }], cards: TX('bag', 'cat', 'ball') }, prompt: '가방을 가리키며 말해요. 빈칸에 알맞은 낱말을 골라 보세요.', target: { fill: { f1: 'bag' } }, difficulty: 0.2 },
            { type: 'choice', prompt: '"This is a book."에서 바뀔 수 있는 낱말은 무엇일까요?', options: ['book', 'This'], answer: 0, difficulty: 0.15, explain: '가리키는 물건에 따라 book 자리의 낱말이 바뀌어요.' },
          ], '오늘 가리키며 말하기는 어땠나요?'],
        ws: ['This is… 문장', [
          { type: 'table', prompt: '물건 뜻에 맞는 영어 낱말을 쓰세요.', columns: ['물건', '영어'], cells: [['연필', ''], ['책', ''], ['공', ''], ['가방', '']], answer: 'pencil / book / ball / bag' },
          { type: 'choice', prompt: '"이것은 연필이에요"를 영어로 바르게 쓴 것에 ○ 하세요.', options: ['This is a pencil.', 'Pencil a is this.'], answer: 'This is a pencil.' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: 'This is ___ ball.', answer: 'a' },
          { type: 'short', prompt: '교실 물건 하나를 골라 This is a ○○. 문장으로 써 보세요.' },
        ], '물건을 가리키며 This is a를 소리 내어 읽고 마지막 낱말만 바꿔요.', [
          { type: 'table', prompt: '물건 뜻에 맞는 영어 낱말을 쓰세요.', columns: ['물건', '영어'], cells: [['연필', ''], ['책', '']], answer: 'pencil / book' },
          { type: 'choice', prompt: '"이것은 공이에요"에 ○ 하세요.', options: ['This is a ball.', 'This is a book.'], answer: 'This is a ball.' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: 'This ___ a book.', answer: 'is' },
          { type: 'short', prompt: '물건 이름 하나를 쓰세요.' },
        ]],
        diff: ['빈칸 채우기에서 맞게 놓으면 초록 테두리가 생기고 틀리게 놓으면 카드가 되돌아와요. 낱말 카드는 세 장이에요.', '문장을 소리 내어 읽고 확인을 눌러 스스로 고쳐요. 물건을 가리키며 말해요.', '빈칸 채우기에 an이 필요한 낱말(apple)과 my 문장이 나와요.'],
        notes: '자주 보이는 어려움: ① 낱말만 말하고 문장으로 말하지 않는다 → This is a를 같이 읽은 뒤 마지막 낱말만 바꾸게 한다. ② a와 an을 구별하지 못한다 → 아는 낱말부터 소리 내어 읽어 보며 어색한 쪽을 고른다고 알려 준다. ③ 물건을 가리키지 않고 카드만 본다 → 교실 물건 하나를 직접 가리키며 말하게 한다. 학생 이름이나 개인 물건 사진은 쓰지 않는다.',
      }),

      // ───────────────────────── 7차시 (practice) ─────────────────────────
      LN(7, S4, {
        title: '그림 보고 I have… 문장 고르고 빈칸 채워 말하기',
        obj: '그림 속 물건에 맞는 I have… 문장을 고르고, 빈칸에 알맞은 낱말을 넣어 문장을 소리 내어 말할 수 있다.',
        ill: ['a child holding up a small bag and showing a cat card to a friend while a speech bubble appears', 'I have a cat.', '가진 것 말하기', [{ motif: 'cat', x: 94, y: 204, s: 0.9 }, { motif: 'ball', x: 396, y: 214 }, { motif: 'cloud', x: 252, y: 70, s: 0.7 }]],
        intro: ['가방에서 공을 꺼내 보이며 "I have a ball."이라고 말하고 "내가 무엇을 가지고 있다고 말했나요?"라고 묻는다. 학생이 "공이요."라고 하면 "I have 다음에 가진 물건을 말해요."를 칠판에 쓴다. I have를 "나는 좋아해요"로 잘못 옮기는 학생에게는 물건을 손에 들어 보이며 "가지고 있다"는 뜻임을 말해 준다.',
          '가방 속 물건을 보여 주며 I have a… 하고 말해 봐요. 가지고 있는 물건이 무엇인지 말해요.',
          { tool: 'wordcards', options: { mode: 'pick', basket: '고른 문장', shuffle: false, cards: [C('a', 'I have a ball.'), C('b', 'I have a cat.')] }, sequence: [{ at: {} }, { at: { a: 0 } }] }],
        a1: ['활동 1. 그림에 맞는 문장 고르기',
          '"뜻을 읽고 가진 물건이 맞는 문장 카드를 골라요. 고른 문장을 소리 내어 읽어요." 문장 앞부분 I have는 모두 같으니 끝 낱말만 견주어 보게 한다. 문장을 읽지 않고 그림만 보고 아무 카드나 고르는 학생에게는 끝 낱말을 짚어 읽어 준다. 도전 단계에는 like가 들어 있어 뜻이 다른 문장이 한 장 섞여 있다.',
          '뜻에 맞는 I have… 문장 카드를 골라 바구니에 넣어요.',
          LA('pick', '문장 끝에 오는 낱말을 비교해 보세요. 뜻에서 말한 물건과 같은 낱말을 찾아요.'),
          [
            PK('"고양이가 있어요"라고 말하는 문장을 골라 보세요.', [C('a', 'I have a cat.'), C('b', 'I have a dog.'), C('c', 'I have a ball.')], ['a'], { x: [C('d', 'I like a cat.')] }),
            PK('"공이 있어요"라고 말하는 문장을 골라 보세요.', [C('a', 'I have a book.'), C('b', 'I have a ball.'), C('c', 'I have a pen.')], ['b'], { d: 0.2, x: [C('d', 'I like a ball.')] }),
            PK('"가방이 있어요"라고 말하는 문장을 골라 보세요.', [C('a', 'I have a bag.'), C('b', 'I have a book.'), C('c', 'I have a pen.')], ['a'], { d: 0.2, x: [C('d', 'I like a bag.')],
              p: ['I have와 I like는 같은 뜻일까요?', ['아니요, 뜻이 달라요', '네, 같아요'], 0, 'I have는 가지고 있다, I like는 좋아한다는 뜻이에요.'] }),
            PK('"책과 펜이 있어요"라고 말하는 문장 두 개를 모두 골라 보세요.', [C('a', 'I have a book.'), C('b', 'I have a pen.'), C('c', 'I have a ball.')], ['a', 'b'], { d: 0.3 }),
          ]],
        a2: ['활동 2. 빈칸에 알맞은 낱말 넣어 말하기',
          '"뜻을 보고 빈칸에 어울리는 낱말을 골라요. 문장을 완성한 뒤 짝에게 말해 줘요." 낱말을 넣은 뒤 문장을 소리 내어 읽으며 소리가 자연스러운지 확인하게 한다. an과 a가 붙는 자리를 모르는 학생에게는 an이 모음 소리 앞에 쓰인다고만 알려 주고 읽어 보며 고르게 한다. 짝 활동은 가방 속에 있는 물건을 숨기고 I have a…로 힌트를 주는 놀이이다.',
          '뜻에 맞는 낱말 카드를 빈칸에 넣어 문장을 완성하고 소리 내어 읽어요.',
          LA('fill', '뜻을 먼저 떠올리고 소리 내어 읽어 보세요. 빈칸에 어떤 낱말이 들어가야 뜻이 맞는지 생각해요.'),
          [
            FI('"나는 연필이 있어요"라는 뜻이 되도록 낱말을 골라 보세요.', [{ id: 'f1', label: 'I have a ___.' }], TX('pencil', 'cup', 'bag'), { f1: 'pencil' }, { d: 0.15 }),
            FI('"나는 우산이 있어요"라는 뜻이 되도록 낱말을 골라 보세요.', [{ id: 'f1', label: 'I have an ___.' }], TX('umbrella', 'egg', 'orange'), { f1: 'umbrella' }, { d: 0.25 }),
            FI('"그녀는 고양이가 있어요"라는 뜻이 되도록 낱말을 골라 보세요.', [{ id: 'f1', label: 'She has a ___.' }], TX('cat', 'dog', 'fish'), { f1: 'cat' }, { d: 0.25 }),
            TK('짝과 번갈아 해요. 한 사람이 가방 속 물건 하나를 숨기고 I have a… 라고 말하면 다른 사람이 물건을 알아맞혀요. 바꾸어 한 뒤 "다 했어요"를 누르세요.'),
          ]],
        wrap: ['"오늘 I have 다음에는 무엇이 왔나요?" 두세 명이 가진 물건을 말하게 한 뒤 출구 질문을 푼다. I have와 I like를 바꾸어 읽은 학생은 다음 시간 시작에 물건을 손에 들고 I have를 말해 본다.',
          [
            { type: 'tool', tool: 'wordcards', options: { mode: 'pick', basket: '고른 문장', shuffle: false, cards: [C('a', 'I have a cup.'), C('b', 'I have a hat.')] }, prompt: '"모자가 있어요"라고 말하는 문장을 골라 보세요.', target: { pick: ['b'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '"She has a cat."은 누가 고양이를 가지고 있다는 말일까요?', options: ['그녀', '나'], answer: 0, difficulty: 0.25, explain: 'She는 그녀예요. 그녀가 고양이를 가지고 있어요.' },
          ], '오늘 가진 것 말하기는 어땠나요?'],
        ws: ['I have… 문장', [
          { type: 'table', prompt: '뜻에 맞는 낱말을 쓰세요.', columns: ['뜻', '영어'], cells: [['고양이', ''], ['공', ''], ['가방', ''], ['우산', '']], answer: 'cat / ball / bag / umbrella' },
          { type: 'choice', prompt: '"나는 책이 있어요"에 ○ 하세요.', options: ['I have a book.', 'I like a book.'], answer: 'I have a book.' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: 'I ___ a pen.', answer: 'have' },
          { type: 'short', prompt: '가방 속 물건 하나를 골라 I have a ○○. 로 써 보세요.' },
        ], '문장을 소리 내어 읽고 끝 낱말이 뜻과 같은지 확인해요.', [
          { type: 'table', prompt: '뜻에 맞는 낱말을 쓰세요.', columns: ['뜻', '영어'], cells: [['고양이', ''], ['공', '']], answer: 'cat / ball' },
          { type: 'choice', prompt: '"나는 공이 있어요"에 ○ 하세요.', options: ['I have a ball.', 'I have a cat.'], answer: 'I have a ball.' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: 'I have ___ cat.', answer: 'a' },
          { type: 'short', prompt: '물건 이름 하나를 쓰세요.' },
        ]],
        diff: ['문장 고르기에서 카드가 세 장이고 맞게 놓으면 초록 테두리가 생겨요. 틀리게 놓으면 되돌아와요.', '문장을 소리 내어 읽고 카드를 골라요. 놓은 뒤 확인을 눌러 스스로 고쳐요.', '문장 고르기에 I like 문장이 한 장 섞이고 두 문장을 모두 골라야 하는 문항이 나와요.'],
        notes: '자주 보이는 어려움: ① I have를 "좋아해요"로 옮긴다 → 물건을 손에 들고 "가지고 있다"를 확인한다. ② 문장 앞부분이 모두 같아 읽지 않고 고른다 → 끝 낱말을 짚어 읽게 한다. ③ He has와 I have를 구별하지 못한다 → 누구 이야기인지 먼저 말하게 한다. 소리 내어 말하기는 짝 활동에서 하고 기기는 문장 고르기를 맡는다.',
      }),

      // ───────────────────────── 8차시 (core) ─────────────────────────
      LN(8, S5, {
        title: '이름·나이·좋아하는 것으로 나 소개 문장 만들기',
        obj: '이름, 나이, 좋아하는 것을 나타내는 짧은 문장을 차례대로 놓고, 질문에 맞는 대답 문장을 짝 지을 수 있다.',
        ill: ['a child holding a name card while three speech bubbles show a name, a number and a favorite fruit', 'I am Mina.', '나를 소개해요', [{ motif: 'apple', x: 94, y: 204, s: 0.9 }, { motif: 'star', x: 396, y: 86, s: 0.7 }, { motif: 'tree', x: 400, y: 214 }]],
        intro: ['"I am Mina. I am nine. I like apples."를 칠판에 쓰고 한 문장씩 읽어 주며 "첫 문장은 무엇을 알려 주나요?"라고 묻는다. 학생이 "이름이요."라고 답하면 둘째와 셋째 문장도 같은 방법으로 묻는다. 문장 모두에 I가 있다고 말하는 학생에게는 I가 "나는"이고 뒤에 오는 말이 바뀐다는 것을 손으로 가리키며 보여 준다. 이름은 가명(미나, 준호)만 쓴다고 일러 둔다.',
          '나를 소개하는 말에는 이름, 나이, 좋아하는 것이 있어요. 칠판의 세 문장을 읽어 봐요.',
          { tool: 'wordcards', options: { mode: 'order', shuffle: false, cards: [C('a', 'I'), C('b', 'am'), C('c', 'Mina.')] }, sequence: [{ at: {} }, { at: { a: 0, b: 1, c: 2 } }] }],
        a1: ['활동 1. 나를 소개하는 문장 차례대로 놓기',
          '"소개하는 말을 순서대로 놓고 소리 내어 읽어요. 이름은 가명을 써요." 놓은 문장을 짝에게 읽어 주고 짝은 알아들은 내용을 우리말로 말한다. 낱말 순서를 우리말처럼 놓는 학생에게는 I가 먼저임을 보여 준다. 나이를 말할 때 years old가 없어도 I am nine.이면 충분하다고 말해 준다.',
          '낱말 카드를 차례대로 놓아 나를 소개하는 문장을 만들어요.',
          LA('order', '문장의 뜻을 우리말로 말해 보고, 처음에 말하는 낱말부터 차례로 놓아 보세요.'),
          [
            OS('"나는 미나예요"라는 뜻의 문장을 차례대로 놓아 보세요.', 'I am Mina.', { d: 0.15 }),
            OS('"내 이름은 준호예요"라는 뜻의 문장을 차례대로 놓아 보세요.', 'My name is Joon.', { d: 0.2 }),
            OS('"나는 아홉 살이에요"라는 뜻의 문장을 차례대로 놓아 보세요.', 'I am nine years old.', { d: 0.25,
              p: ['나이를 말할 때 I am 다음에 무엇이 올까요?', ['숫자가 와요', '이름이 와요'], 0, 'I am nine.처럼 I am 다음에 나이를 나타내는 숫자가 와요.'] }),
            OS('"나는 사과를 좋아해요"라는 뜻의 문장을 차례대로 놓아 보세요.', 'I like apples.', { d: 0.2 }),
          ]],
        a2: ['활동 2. 질문에 맞는 대답 짝 짓기',
          '"질문을 소리 내어 읽고 알맞은 대답을 옆에 놓아요. 놓은 뒤 짝과 번갈아 질문과 대답을 말해 봐요." What과 How old를 구별하지 못하는 학생에게는 질문의 뜻을 우리말로 말하게 한 뒤 대답과 연결한다. 도전 단계에는 어느 질문에도 맞지 않는 대답이 한 장 섞여 있다. 짝 활동은 세 질문을 번갈아 묻고 대답하는 것이다.',
          '질문 옆에 알맞은 대답 카드를 놓고, 짝과 번갈아 말해요.',
          LA('match', '질문이 이름, 나이, 좋아하는 것 가운데 무엇을 묻는지 먼저 우리말로 말해 보세요.'),
          [
            MT('질문 옆에 알맞은 대답을 놓아 보세요.', [{ id: 'name', label: 'What is your name?' }, { id: 'age', label: 'How old are you?' }], [C('n', 'I am Mina.'), C('a', 'I am nine.')], { name: 'n', age: 'a' }, { x: [C('x', 'I like fish.')] }),
            MT('질문 옆에 알맞은 대답을 놓아 보세요.', [{ id: 'name', label: 'What is your name?' }, { id: 'age', label: 'How old are you?' }, { id: 'like', label: 'What do you like?' }], [C('n', 'My name is Joon.'), C('a', 'I am ten.'), C('l', 'I like soccer.')], { name: 'n', age: 'a', like: 'l' }, { d: 0.25, x: [C('x', 'I am fine.')] }),
            MT('질문 옆에 알맞은 대답을 놓아 보세요.', [{ id: 'age', label: 'How old are you?' }, { id: 'like', label: 'What do you like?' }], [C('a', 'I am eight.'), C('l', 'I like pizza.')], { age: 'a', like: 'l' }, { d: 0.2, x: [C('x', 'I am Joon.')],
              p: ['How old are you?는 무엇을 묻는 말일까요?', ['나이를 물어요', '이름을 물어요'], 0, 'How old는 나이를 묻는 말이에요. 숫자가 들어간 대답이 어울려요.'] }),
            TK('짝과 번갈아 해요. 한 사람이 What is your name? / How old are you? / What do you like? 를 차례로 묻고 다른 사람이 가명과 나이, 좋아하는 것으로 대답해요. "다 했어요"를 누르세요.'),
          ]],
        wrap: ['"오늘 나를 소개하는 말에서 가장 많이 바뀐 낱말은 무엇이었나요?" 두세 명이 이름, 나이, 좋아하는 것 가운데 하나를 말하게 한 뒤 출구 질문을 푼다. 질문과 대답을 바꾸어 놓은 학생은 다음 시간 시작에 질문의 뜻을 우리말로 말한 뒤 다시 놓아 본다.',
          [
            { type: 'tool', tool: 'wordcards', options: { mode: 'match', shuffle: true, slots: [{ id: 'name', label: 'What is your name?' }, { id: 'age', label: 'How old are you?' }], cards: [C('nm', 'I am Yuri.'), C('ag', 'I am seven.')] }, prompt: '두 질문에 어울리는 대답 카드를 각각 놓아 보세요.', target: { match: { name: 'nm', age: 'ag' } }, difficulty: 0.2 },
            { type: 'choice', prompt: 'I like apples. 는 무엇을 알려 줄까요?', options: ['좋아하는 것', '나이'], answer: 0, difficulty: 0.15, explain: 'like 뒤에 좋아하는 것이 와요.' },
          ], '오늘 나를 소개하는 말은 어땠나요?'],
        ws: ['나를 소개하는 말', [
          { type: 'table', prompt: '질문과 알맞은 대답을 이으세요. 대답의 번호를 쓰세요.', columns: ['질문', '대답 번호'], cells: [['What is your name?', ''], ['How old are you?', ''], ['What do you like?', '']], answer: '① I am Mina. ② I am nine. ③ I like apples. 에 맞게 1, 2, 3' },
          { type: 'choice', prompt: '나이를 말하는 문장에 ○ 하세요.', options: ['I am nine.', 'I like nine.'], answer: 'I am nine.' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: 'My ___ is Joon.', answer: 'name' },
          { type: 'short', prompt: '나를 소개하는 문장을 I am… 으로 시작해 하나 써 보세요. (이름은 가명)' },
        ], '질문의 뜻을 우리말로 먼저 말하고 대답을 골라요.', [
          { type: 'table', prompt: '질문과 알맞은 대답을 이으세요.', columns: ['질문', '대답 번호'], cells: [['What is your name?', ''], ['How old are you?', '']], answer: '1, 2' },
          { type: 'choice', prompt: '이름을 말하는 문장에 ○ 하세요.', options: ['I am Mina.', 'I am nine.'], answer: 'I am Mina.' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: 'I ___ apples.', answer: 'like' },
          { type: 'short', prompt: '좋아하는 것 하나를 쓰세요.' },
        ]],
        diff: ['문장 놓기에서 맞게 놓으면 초록 테두리가 생기고 틀리게 놓으면 카드가 되돌아와요. 짝 짓기는 카드가 두 장이에요.', '질문을 읽고 대답을 골라 놓은 뒤 확인을 눌러 스스로 고쳐요.', '짝 짓기에 어느 질문에도 맞지 않는 대답이 한 장 섞여 나와요.'],
        notes: '자주 보이는 어려움: ① I am과 My name is를 섞어 쓴다 → 둘 다 이름을 말하는 방법이라고 알려 준다. ② 질문의 뜻을 모르고 대답을 찍는다 → What, How old를 우리말로 먼저 말하게 한다. ③ 이름 대신 실명을 쓴다 → 수업에서는 가명(미나, 준호)만 쓴다고 약속한다. 학생 개인정보는 기기와 활동지에 쓰지 않는다.',
      }),

      // ───────────────────────── 9차시 (practice) ─────────────────────────
      LN(9, S5, {
        title: '단서를 읽고 소개 문장 빈칸 채워 말하기',
        obj: '주어진 단서에 맞게 소개 문장의 빈칸에 이름·나이·좋아하는 것을 넣고, 소개하는 말을 듣고 뜻을 고를 수 있다.',
        ill: ['a child filling blanks on a name card while a friend listens with a hand behind an ear', 'I am ___.', '빈칸에 넣어 소개하기', [{ motif: 'banana', x: 92, y: 206, s: 0.9 }, { motif: 'cloud', x: 396, y: 80 }, { motif: 'flower', x: 402, y: 216 }]],
        intro: ['"단서 카드: 이름 준호, 열 살, 바나나"를 칠판에 쓰고 "이 카드를 보고 나를 소개하는 말을 만들 수 있을까요?"라고 묻는다. 학생이 "I am Joon."이라고 하면 같은 방법으로 나이와 좋아하는 것도 말하게 한다. 단서를 보지 않고 자기 이야기를 하는 학생에게는 카드에 있는 정보만 말하도록 안내한다. 이름은 가명을 쓴다.',
          '카드에 적힌 단서를 보고 나를 소개하는 말을 만들 거예요. 단서에 있는 정보만 말해 봐요.',
          { tool: 'wordcards', options: { mode: 'fill', shuffle: false, slots: [{ id: 'f1', label: 'I like ___.' }], cards: TX('bananas', 'apples') }, sequence: [{ at: {} }, { at: { bananas: 0 } }] }],
        a1: ['활동 1. 단서를 보고 빈칸 채우기',
          '"단서에 적힌 정보를 찾아 빈칸에 알맞은 낱말 카드를 놓아요. 놓은 뒤 문장을 한 번 읽어요." 빈칸이 두 개인 문항은 첫째 빈칸부터 차례로 채운다. 단서와 다른 카드를 놓으면 문장을 읽어 보며 단서와 견주게 한다. 이름 칸과 나이 칸을 섞는 학생에게는 이름은 글자, 나이는 숫자 낱말이라고 알려 준다.',
          '단서에 맞는 낱말 카드를 빈칸에 놓아 소개 문장을 완성해요.',
          LA('fill', '단서 카드에서 이름, 나이, 좋아하는 것 가운데 어느 정보를 찾아야 하는지 먼저 생각해 보세요.'),
          [
            FI('단서: 이름 준호, 열 살. 빈칸에 알맞은 낱말을 놓아 보세요.', [{ id: 'f1', label: 'I am ___.' }, { id: 'f2', label: 'I am ___ years old.' }], TX('Joon', 'ten', 'nine'), { f1: 'Joon', f2: 'ten' }, { d: 0.25 }),
            FI('단서: 좋아하는 것 바나나. 빈칸에 알맞은 낱말을 놓아 보세요.', [{ id: 'f1', label: 'I like ___.' }], TX('apples', 'bananas', 'fish'), { f1: 'bananas' }, { d: 0.15 }),
            FI('단서: 이름 미나, 좋아하는 것 축구. 빈칸에 알맞은 낱말을 놓아 보세요.', [{ id: 'f1', label: 'My name is ___.' }, { id: 'f2', label: 'I like ___.' }], TX('Mina', 'soccer', 'Joon'), { f1: 'Mina', f2: 'soccer' }, { d: 0.25 }),
            FI('단서: 여덟 살. 빈칸에 알맞은 낱말을 놓아 보세요.', [{ id: 'f1', label: 'I am ___.' }], TX('eight', 'Mina', 'apples'), { f1: 'eight' }, { d: 0.2 }),
          ]],
        a2: ['활동 2. 소개하는 말 듣고 뜻 고르기',
          '문항마다 듣기 단추를 누르게 하고 소리가 나지 않으면 교사가 읽어 준다. "누가 무엇을 말했는지 들어 보세요. 이름인지 나이인지 좋아하는 것인지 생각해요." 숫자나 이름 부분을 놓치는 학생에게는 마지막 낱말만 한 번 더 들려준다. 짝 활동은 단서 카드를 서로 바꾸어 소개하는 놀이이다.',
          '듣기 단추를 눌러 소개하는 말을 듣고, 뜻에 맞는 카드를 골라요.',
          LA('listen', '문장의 끝에서 들리는 낱말을 잘 들어 보세요. 이름인지 숫자인지 좋아하는 것인지 생각해요.'),
          [
            LS('듣기 단추를 누르고, 들은 말의 뜻을 골라 보세요.', 'I am eight.', { cards: [KO('e8', '나는 여덟 살이에요'), KO('e9', '나는 아홉 살이에요')] }, 'e8', { x: [KO('e7', '나는 일곱 살이에요')] }),
            LS('듣기 단추를 누르고, 들은 말의 뜻을 골라 보세요.', 'I like bananas.', { cards: [KO('ban', '나는 바나나를 좋아해요'), KO('app', '나는 사과를 좋아해요')] }, 'ban', { d: 0.2, x: [KO('fis', '나는 물고기를 좋아해요')] }),
            LS('듣기 단추를 누르고, 들은 말의 뜻을 골라 보세요.', 'My name is Mina.', { cards: [KO('mi', '내 이름은 미나예요'), KO('jo', '내 이름은 준호예요')] }, 'mi', { d: 0.2, x: [KO('yu', '내 이름은 유리예요')] }),
            TK('단서 카드를 서로 바꾸어 가지고 짝에게 소개하는 말 세 문장을 해요. 짝은 들은 내용을 우리말로 한 줄 말해 줘요. "다 했어요"를 누르세요.'),
          ]],
        wrap: ['"오늘 소개하는 말을 들을 때 어느 낱말에 가장 귀를 기울였나요?" 끝 낱말을 말하는 학생의 의견을 칠판에 적고 출구 질문을 푼다. 숫자를 틀린 학생은 다음 시간 시작에 일곱에서 열까지 영어로 한 번 읽고 고른다.',
          [
            { type: 'tool', tool: 'wordcards', options: { mode: 'fill', shuffle: false, slots: [{ id: 'f1', label: 'I like ___.' }], cards: TX('soccer', 'fish', 'cats') }, prompt: '단서: 좋아하는 것 고양이. 빈칸에 알맞은 낱말을 놓아 보세요.', target: { fill: { f1: 'cats' } }, difficulty: 0.2 },
            { type: 'choice', prompt: '"I am ten."은 무엇을 알려 줄까요?', options: ['나이', '이름'], answer: 0, difficulty: 0.15, explain: 'I am 다음에 숫자가 오면 나이를 말하는 거예요.' },
          ], '오늘 소개 문장 채우기는 어땠나요?'],
        ws: ['소개 문장 빈칸', [
          { type: 'table', prompt: '단서를 보고 빈칸에 알맞은 낱말을 쓰세요.', columns: ['단서', '문장'], cells: [['이름 미나', 'I am ___.'], ['아홉 살', 'I am ___.'], ['좋아하는 것 사과', 'I like ___.']], answer: 'Mina / nine / apples' },
          { type: 'choice', prompt: '"나는 열 살이에요"에 ○ 하세요.', options: ['I am ten.', 'I like ten.'], answer: 'I am ten.' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: 'I ___ soccer.', answer: 'like' },
          { type: 'short', prompt: '내가 좋아하는 것을 I like ○○. 로 써 보세요.' },
        ], '단서 카드를 먼저 읽고 문장에 넣을 낱말을 찾아요.', [
          { type: 'table', prompt: '단서를 보고 빈칸에 알맞은 낱말을 쓰세요.', columns: ['단서', '문장'], cells: [['이름 미나', 'I am ___.'], ['좋아하는 것 사과', 'I like ___.']], answer: 'Mina / apples' },
          { type: 'choice', prompt: '"나는 바나나를 좋아해요"에 ○ 하세요.', options: ['I like bananas.', 'I am bananas.'], answer: 'I like bananas.' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: 'I am ___.', answer: 'nine' },
          { type: 'short', prompt: '좋아하는 것 하나를 쓰세요.' },
        ]],
        diff: ['빈칸 채우기에서 카드가 세 장이고 맞게 놓으면 초록 테두리가 생겨요. 틀리게 놓으면 되돌아와요.', '단서를 읽고 카드를 놓은 뒤 확인을 눌러 스스로 고쳐요. 문장을 소리 내어 읽어요.', '빈칸 채우기에서 빈칸이 두 개이고, 듣기에 비슷한 뜻의 카드가 한 장 더 섞여 나와요.'],
        notes: '자주 보이는 어려움: ① 단서에 없는 자기 이야기를 한다 → 단서 카드에 있는 정보만 쓰는 연습임을 말해 준다. ② 나이와 좋아하는 것 문장을 섞는다 → I am 뒤에는 숫자, I like 뒤에는 좋아하는 것이라고 짝 지어 말하게 한다. ③ 이름 대신 실명을 쓴다 → 가명을 쓰도록 약속한다. 소리를 듣고 푸는 문항은 누를 때만 소리가 난다.',
      }),

      // ───────────────────────── 10차시 (core) ─────────────────────────
      LN(10, S6, {
        title: '교실 지시 말과 뜻 짝 짓고 듣고 따라 하기',
        obj: '교실에서 쓰는 지시 말(Stand up. Sit down. 등)을 뜻과 짝 짓고, 듣고 알맞은 동작의 뜻을 고를 수 있다.',
        ill: ['a teacher pointing at a board with short commands while children stand up and sit down', 'Stand up.', '교실 지시 말', [{ motif: 'book', x: 92, y: 206, s: 0.9 }, { motif: 'house', x: 396, y: 218, color: 'sky' }, { motif: 'star', x: 252, y: 74, s: 0.6 }]],
        intro: ['"Stand up."을 말하며 천천히 일어서고 "Sit down."을 말하며 앉는다. 학생들에게 같은 동작을 말과 함께 해 보게 한 뒤 "방금 선생님이 한 말은 무슨 뜻이었나요?"라고 묻는다. 학생이 "일어서요, 앉아요."라고 답하면 영어 말을 칠판에 쓴다. 지시를 우리말로만 따라 하는 학생에게는 영어 말을 먼저 듣고 동작을 하게 한다.',
          '선생님이 영어로 말하는 지시를 듣고 몸으로 따라 해 봐요. 말과 뜻을 짝 지어 볼 거예요.',
          { tool: 'wordcards', options: { mode: 'match', shuffle: false, slots: [{ id: 'up', label: '일어나세요' }, { id: 'down', label: '앉으세요' }], cards: [C('s1', 'Stand up.'), C('s2', 'Sit down.')] }, sequence: [{ at: {} }, { at: { s1: 0, s2: 1 } }] }],
        a1: ['활동 1. 지시 말과 뜻 짝 짓기',
          '"영어 말을 소리 내어 읽고 뜻을 보고 짝을 찾아요. 놓은 뒤에는 몸으로 한 번 따라 해 봐요." 같은 동작인데 낱말이 비슷한 Open과 Close를 바꾸는 학생에게는 동작을 해 보며 뜻을 확인하게 한다. 도전 단계에는 뜻 칸에 맞지 않는 지시 카드가 한 장 더 있다.',
          '뜻 옆에 알맞은 영어 지시 말 카드를 놓고 몸으로 따라 해요.',
          LA('match', '뜻을 보고 동작을 해 보세요. 그 동작에 어울리는 영어 말을 찾아요.'),
          [
            MT('뜻 옆에 알맞은 영어 지시를 놓아 보세요.', [{ id: 'up', label: '일어나세요' }, { id: 'down', label: '앉으세요' }], [C('s1', 'Stand up.'), C('s2', 'Sit down.')], { up: 's1', down: 's2' }, { x: [C('x', 'Come in.')] }),
            MT('뜻 옆에 알맞은 영어 지시를 놓아 보세요.', [{ id: 'op', label: '책을 펴세요' }, { id: 'cl', label: '책을 덮으세요' }, { id: 'ha', label: '손을 드세요' }], [C('o', 'Open your book.'), C('c', 'Close your book.'), C('h', 'Raise your hand.')], { op: 'o', cl: 'c', ha: 'h' }, { d: 0.25, x: [C('x', 'Pick up your bag.')],
              p: ['Open과 Close는 같은 뜻일까요?', ['반대되는 뜻이에요', '같은 뜻이에요'], 0, 'Open은 열거나 펴라는 뜻, Close는 닫거나 덮으라는 뜻이에요.'] }),
            MT('뜻 옆에 알맞은 영어 지시를 놓아 보세요.', [{ id: 'li', label: '들으세요' }, { id: 'lo', label: '보세요' }, { id: 'qu', label: '조용히 하세요' }], [C('l1', 'Listen.'), C('l2', 'Look.'), C('q', 'Be quiet.')], { li: 'l1', lo: 'l2', qu: 'q' }, { d: 0.25, x: [C('x', 'Talk loudly.')] }),
          ]],
        a2: ['활동 2. 지시 말 듣고 뜻 고르기',
          '문항마다 듣기 단추를 누르게 하고 소리가 나지 않으면 교사가 지시를 읽어 준다. "듣고 동작을 해 본 뒤에 뜻 카드를 골라요." 동작을 먼저 하면 뜻이 더 잘 기억된다고 일러 준다. 영어 소리를 못 알아들은 학생에게는 한 낱말씩 끊어 천천히 들려준다. 짝 활동은 한 사람이 지시를 영어로 말하고 다른 사람이 동작을 하는 놀이이다.',
          '듣기 단추를 눌러 지시를 듣고, 뜻이 맞는 카드를 골라요.',
          LA('listen', '들은 말을 몸으로 해 본다고 생각해 보세요. 어떤 동작이 떠오르는지 살펴요.'),
          [
            LS('듣기 단추를 누르고, 들은 지시의 뜻을 골라 보세요.', 'Sit down.', { cards: [KO('sit', '앉으세요'), KO('stand', '일어나세요')] }, 'sit', { x: [KO('come', '들어오세요')] }),
            LS('듣기 단추를 누르고, 들은 지시의 뜻을 골라 보세요.', 'Open your book.', { cards: [KO('open', '책을 펴세요'), KO('close', '책을 덮으세요')] }, 'open', { d: 0.2, x: [KO('read', '책을 읽으세요')] }),
            LS('듣기 단추를 누르고, 들은 지시의 뜻을 골라 보세요.', 'Raise your hand.', { cards: [KO('hand', '손을 드세요'), KO('clap', '손뼉을 치세요')] }, 'hand', { d: 0.2, x: [KO('wash', '손을 씻으세요')] }),
            TK('짝과 번갈아 해요. 한 사람이 Stand up. / Sit down. / Open your book. 가운데 하나를 영어로 말하면 다른 사람이 동작을 해요. 틀리면 다시 말해 줘요. "다 했어요"를 누르세요.'),
          ]],
        wrap: ['"오늘 가장 몸으로 따라 하기 쉬웠던 지시는 무엇이었나요?" 두세 명이 영어로 말하며 동작을 보여 주게 한 뒤 출구 질문을 푼다. Open과 Close를 바꾼 학생은 다음 시간 시작에 책을 들고 두 동작을 영어로 말하며 해 본다.',
          [
            { type: 'tool', tool: 'wordcards', options: { mode: 'match', shuffle: true, slots: [{ id: 'lo', label: '보세요' }, { id: 'li', label: '들으세요' }], cards: [C('a', 'Look.'), C('b', 'Listen.')] }, prompt: '뜻 옆에 알맞은 영어 지시를 놓아 보세요.', target: { match: { lo: 'a', li: 'b' } }, difficulty: 0.2 },
            { type: 'choice', prompt: 'Stand up.은 어떻게 하라는 말일까요?', options: ['일어나세요', '앉으세요'], answer: 0, difficulty: 0.15, explain: 'Stand up.은 일어서라는 말이에요.' },
          ], '오늘 교실 지시 말은 어땠나요?'],
        ws: ['교실 지시 말', [
          { type: 'table', prompt: '지시 말의 뜻을 우리말로 쓰세요.', columns: ['영어', '뜻'], cells: [['Stand up.', ''], ['Sit down.', ''], ['Open your book.', ''], ['Be quiet.', '']], answer: '일어나세요 / 앉으세요 / 책을 펴세요 / 조용히 하세요' },
          { type: 'choice', prompt: '"손을 드세요"에 ○ 하세요.', options: ['Raise your hand.', 'Close your book.'], answer: 'Raise your hand.' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: 'Sit ___.', answer: 'down' },
          { type: 'short', prompt: '교실에서 친구에게 하는 지시 말 하나를 영어로 써 보세요.' },
        ], '말을 읽으며 몸으로 동작을 해 보고 뜻을 찾아요.', [
          { type: 'table', prompt: '지시 말의 뜻을 우리말로 쓰세요.', columns: ['영어', '뜻'], cells: [['Stand up.', ''], ['Sit down.', '']], answer: '일어나세요 / 앉으세요' },
          { type: 'choice', prompt: '"일어나세요"에 ○ 하세요.', options: ['Stand up.', 'Sit down.'], answer: 'Stand up.' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: 'Stand ___.', answer: 'up' },
          { type: 'short', prompt: '지시 말 하나를 쓰세요.' },
        ]],
        diff: ['짝 짓기에서 카드가 두 장이고 맞게 놓으면 초록 테두리가 생겨요. 틀리게 놓으면 되돌아와요.', '영어 지시와 뜻을 짝 짓고 확인을 눌러 스스로 고쳐요. 동작을 해 보며 확인해요.', '짝 짓기에 뜻 칸에 맞지 않는 지시 카드(Come in. 등)가 한 장 섞여 나와요.'],
        notes: '자주 보이는 어려움: ① Open과 Close를 바꾸어 뜻을 새긴다 → 책을 열고 닫는 동작을 하며 낱말을 말하게 한다. ② 영어를 듣고 우리말로 바꾸는 데 시간이 걸린다 → 동작으로 먼저 대답하게 한다. ③ Be quiet.를 꾸중으로 느낀다 → 조용한 시간을 알리는 말이라고 밝은 목소리로 시범을 보인다. 지시 말은 학급 생활에서 계속 반복해 쓴다.',
      }),

      // ───────────────────────── 11차시 (practice) ─────────────────────────
      LN(11, S6, {
        title: '상황에 맞는 지시 고르고 지시 문장 차례대로 놓기',
        obj: '수업 상황에 어울리는 지시 말을 고르고, 지시 문장의 낱말을 차례대로 놓아 말할 수 있다.',
        ill: ['a teacher holding a speech bubble that says a short command while children open books at their desks', 'Open your book.', '지시 말하기', [{ motif: 'book', x: 92, y: 206, s: 0.9 }, { motif: 'pencil', x: 392, y: 210 }, { motif: 'cloud', x: 252, y: 70, s: 0.7 }]],
        intro: ['"수업이 시작될 때 선생님이 먼저 하는 말은 무엇일까요?"라고 묻고 학생의 대답을 듣는다. "Open your book."을 말하며 책을 펴 보이고 "이 말은 언제 쓰나요?"라고 묻는다. 지시 말을 상황과 연결하지 못하는 학생에게는 그림 카드 한 장을 보여 주며 무엇을 하는 시간인지 말하게 한다.',
          '수업 시간에는 상황에 따라 다른 지시를 해요. 어떤 상황에서 어떤 지시를 할지 생각해 봐요.',
          { tool: 'wordcards', options: { mode: 'pick', basket: '고른 지시', shuffle: false, cards: [C('a', 'Open your book.'), C('b', 'Go outside.')] }, sequence: [{ at: {} }, { at: { a: 0 } }] }],
        a1: ['활동 1. 상황에 어울리는 지시 고르기',
          '"상황을 읽고 그때 선생님이 말할 지시를 골라요. 고른 지시를 소리 내어 읽어요." 어울리는 지시가 둘인 문항은 둘 다 골라야 한다. 지시를 말하는 사람이 선생님인지 친구인지 헷갈려 하는 학생에게는 교실 상황을 그림으로 그려 보게 한다. 도전 단계에는 뜻이 비슷한 지시가 한 장 더 있다.',
          '상황에 어울리는 지시 카드를 골라 바구니에 넣어요.',
          LA('pick', '상황을 그림으로 떠올려 보세요. 그때 선생님이 하는 말이 무엇일지 생각해요.'),
          [
            PK('수업을 시작할 때 선생님이 하는 말을 골라 보세요.', [C('a', 'Open your book.'), C('b', 'Go outside.'), C('c', 'Run fast.')], ['a'], { x: [C('d', 'Eat lunch.')] }),
            PK('조용히 해야 하는 때 선생님이 하는 말을 모두 골라 보세요.', [C('a', 'Be quiet.'), C('b', 'Sit down.'), C('c', 'Jump high.')], ['a', 'b'], { d: 0.2, x: [C('d', 'Shout loudly.')] }),
            PK('모두가 칠판을 봐야 할 때 선생님이 하는 말을 골라 보세요.', [C('a', 'Look at the board.'), C('b', 'Close the door.'), C('c', 'Stand up.')], ['a'], { d: 0.25, x: [C('d', 'Listen to music.')],
              p: ['Look과 Listen은 같은 뜻일까요?', ['아니요, 보는 것과 듣는 것이에요', '네, 둘 다 보라는 뜻이에요'], 0, 'Look은 보라는 뜻, Listen은 들으라는 뜻이에요.'] }),
            PK('나가기 전에 정리할 때 선생님이 하는 말을 모두 골라 보세요.', [C('a', 'Put away your book.'), C('b', 'Stand up.'), C('c', 'Open the window.')], ['a', 'b'], { d: 0.3 }),
          ]],
        a2: ['활동 2. 지시 문장 낱말 차례대로 놓기',
          '"지시 문장은 동작을 말하는 낱말부터 시작해요. 첫 낱말이 무엇인지 말해 보고 차례대로 놓아요." 놓은 뒤 소리 내어 읽고 몸으로 따라 하게 한다. 문장 끝에 마침표가 있는 카드를 맨 뒤에 놓는 것도 안내한다. 짝 활동은 한 사람이 문장 카드를 읽으면 다른 사람이 동작을 하는 놀이이다.',
          '낱말 카드를 차례대로 놓아 지시 문장을 만들고 동작과 함께 말해요.',
          LA('order', '문장의 뜻을 동작으로 해 보세요. 가장 먼저 하는 동작을 나타내는 낱말부터 놓아 보세요.'),
          [
            OS('"책을 펴세요"라는 뜻의 지시를 차례대로 놓아 보세요.', 'Open your book.', { d: 0.15 }),
            OS('"손을 드세요"라는 뜻의 지시를 차례대로 놓아 보세요.', 'Raise your hand.', { d: 0.15 }),
            OS('"문을 닫으세요"라는 뜻의 지시를 차례대로 놓아 보세요.', 'Close the door.', { d: 0.2 }),
            OS('"나에게 귀를 기울이세요"라는 뜻의 지시를 차례대로 놓아 보세요.', 'Listen to me.', { d: 0.25 }),
            TK('짝과 번갈아 지시 카드 두 장을 읽고 짝이 동작을 해요. 틀린 동작은 다시 말해 줘요. 바꾸어 한 뒤 "다 했어요"를 누르세요.'),
          ]],
        wrap: ['"오늘 지시 문장에서 가장 먼저 읽는 낱말은 어떤 낱말이었나요?" 두세 명이 동작 낱말을 말하게 한 뒤 출구 질문을 푼다. 문장 순서를 틀린 학생은 다음 시간 시작에 동작을 하면서 낱말을 하나씩 말한다.',
          [
            { type: 'tool', tool: 'wordcards', options: { mode: 'order', shuffle: true, cards: [C('a', 'Sit'), C('b', 'down.')] }, prompt: '"앉으세요"라는 뜻의 지시를 차례대로 놓아 보세요.', target: { order: ['a', 'b'] }, difficulty: 0.15 },
            { type: 'choice', prompt: '조용히 해야 할 때 하는 말은 무엇일까요?', options: ['Be quiet.', 'Run fast.'], answer: 0, difficulty: 0.15, explain: 'Be quiet.는 조용히 하라는 말이에요.' },
          ], '오늘 지시 문장 만들기는 어땠나요?'],
        ws: ['상황과 지시', [
          { type: 'table', prompt: '상황에 어울리는 지시를 영어로 쓰세요.', columns: ['상황', '지시'], cells: [['책을 펴야 할 때', ''], ['조용히 해야 할 때', ''], ['앉아야 할 때', ''], ['문을 닫아야 할 때', '']], answer: 'Open your book. / Be quiet. / Sit down. / Close the door.' },
          { type: 'choice', prompt: '"칠판을 보세요"에 ○ 하세요.', options: ['Look at the board.', 'Listen to music.'], answer: 'Look at the board.' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: 'Raise your ___.', answer: 'hand' },
          { type: 'short', prompt: '내가 친구에게 하고 싶은 지시 말 하나를 영어로 써 보세요.' },
        ], '상황을 그림으로 떠올리고 그때 하는 동작을 먼저 해 보세요.', [
          { type: 'table', prompt: '상황에 어울리는 지시를 영어로 쓰세요.', columns: ['상황', '지시'], cells: [['앉아야 할 때', ''], ['조용히 해야 할 때', '']], answer: 'Sit down. / Be quiet.' },
          { type: 'choice', prompt: '"책을 펴세요"에 ○ 하세요.', options: ['Open your book.', 'Close your book.'], answer: 'Open your book.' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: 'Be ___.', answer: 'quiet' },
          { type: 'short', prompt: '지시 말 하나를 쓰세요.' },
        ]],
        diff: ['지시 고르기에서 카드가 세 장이고 맞게 놓으면 초록 테두리가 생겨요. 틀리게 놓으면 되돌아와요.', '상황을 읽고 카드를 놓은 뒤 확인을 눌러 스스로 고쳐요. 지시 문장은 동작과 함께 말해요.', '지시 고르기에 뜻이 비슷한 카드가 한 장 더 섞이고 두 개를 골라야 하는 문항이 나와요.'],
        notes: '자주 보이는 어려움: ① 상황에 맞는 지시를 하나만 고른다 → 비슷한 상황에서 쓰는 말이 여러 개일 수 있음을 알려 준다. ② Look과 Listen을 섞는다 → 눈과 귀를 짚으며 말하게 한다. ③ 지시 문장을 우리말 순서로 놓는다 → 동작 낱말이 맨 앞에 온다고 알려 준다. 지시는 친구에게 부드럽게 말하는 연습으로 하고 명령하듯 말하지 않게 한다.',
      }),

      // ───────────────────────── 12차시 (extend) ─────────────────────────
      LN(12, S6, {
        title: '도서관과 운동장에서 쓰는 지시 나누고 두 동작 지시 말하기',
        obj: '장소에 따라 어울리는 지시 말을 나누고, and로 두 동작을 이은 지시 문장을 차례대로 놓아 말할 수 있다.',
        ill: ['two scenes side by side, a quiet library with a child whispering and a playground with children kicking a ball', 'Be quiet. / Run fast!', '장소마다 다른 지시', [{ motif: 'book', x: 92, y: 206, s: 0.9 }, { motif: 'ball', x: 392, y: 212 }, { motif: 'tree', x: 252, y: 214 }]],
        intro: ['"도서관에서는 어떻게 말하고 움직여야 할까요?"라고 묻고 "Be quiet."를 속삭이듯 읽어 준다. 이어 운동장에서는 "Run fast!"를 힘차게 읽어 주고 두 장소에서 쓰는 말이 어떻게 다른지 묻는다. 장소와 상관없이 모든 지시를 크게 말하는 학생에게는 도서관에서는 작은 소리로 말하는 것이 지시의 뜻과 어울린다고 짚어 준다.',
          '장소가 다르면 쓰는 지시도 달라져요. 도서관과 운동장에서 하는 말을 나누어 봐요.',
          { tool: 'wordcards', options: { mode: 'sort', shuffle: false, slots: [{ id: 'lib', label: '도서관' }, { id: 'yard', label: '운동장' }], cards: [C('q', 'Be quiet.'), C('r', 'Run fast!')] }, sequence: [{ at: {} }, { at: { q: 0, r: 1 } }] }],
        a1: ['활동 1. 장소별로 지시 말 나누기',
          '"문장을 소리 내어 읽고 어느 장소에서 쓰는 말인지 생각해서 놓아요." 도서관 문장은 속삭이듯, 운동장 문장은 힘차게 읽어 보게 한다. 모든 문장이 두 장소에서 모두 쓰인다고 생각하는 학생에게는 장소에서 하는 일을 먼저 말해 보게 한다. 도전 단계에는 어느 장소에도 어울리지 않는 문장이 한 장 섞여 있다.',
          '지시 카드를 도서관과 운동장 두 칸으로 나눠 놓아요.',
          LA('sort', '그 장소에서 어떤 일을 하는지 떠올려 보세요. 하는 일에 어울리는 말인지 생각해요.'),
          [
            SO('지시 카드를 장소별로 나눠 보세요.', [{ id: 'lib', label: '도서관' }, { id: 'yard', label: '운동장' }], [C('q', 'Be quiet.'), C('w', 'Walk slowly.'), C('r', 'Run fast!'), C('k', 'Kick the ball.')], { lib: ['q', 'w'], yard: ['r', 'k'] }, { x: [C('x', 'Eat lunch.')] }),
            SO('지시 카드를 장소별로 나눠 보세요.', [{ id: 'lib', label: '도서관' }, { id: 'yard', label: '운동장' }], [C('b', 'Read a book.'), C('s', 'Whisper, please.'), C('j', 'Jump high!'), C('c', 'Catch the ball.')], { lib: ['b', 's'], yard: ['j', 'c'] }, { d: 0.2, x: [C('x', 'Wash your hands.')] }),
            SO('지시 카드를 장소별로 나눠 보세요. 도서관 말이 하나뿐이에요.', [{ id: 'lib', label: '도서관' }, { id: 'yard', label: '운동장' }], [C('p', 'Put the book back.'), C('s', 'Swing high!'), C('t', 'Throw the ball.'), C('l', 'Line up here.')], { lib: ['p'], yard: ['s', 't', 'l'] }, { d: 0.3, x: [C('x', 'Turn off the light.')],
              p: ['Line up here.는 어느 장소에서 쓸까요?', ['운동장에서 줄을 설 때 써요', '도서관에서만 써요'], 0, 'Line up은 줄을 서라는 말이에요. 운동장에서 모일 때도 쓰고 어디서나 쓸 수 있어요.'] }),
          ]],
        a2: ['활동 2. and로 이은 두 동작 지시 놓기',
          '"한 문장에 동작이 두 개 들어 있어요. and가 두 동작을 이어 줘요. 먼저 할 동작부터 놓아요." 놓은 뒤 동작을 두 가지 이어 해 보게 한다. and를 문장 끝에 놓는 학생에게는 동작 두 개 사이에 and를 두고 손으로 이어 보이게 한다. 짝 활동은 한 사람이 두 동작 지시를 하면 다른 사람이 차례대로 하는 놀이이다.',
          '낱말 카드를 차례대로 놓아 and로 이어진 두 동작 지시를 만들어요.',
          LA('order', '먼저 하는 동작과 나중에 하는 동작을 몸으로 해 보세요. 두 동작 사이에 이어 주는 낱말이 들어가요.'),
          [
            OS('"일어나서 손뼉을 치세요"라는 뜻의 지시를 차례대로 놓아 보세요.', 'Stand up and clap.', { d: 0.2 }),
            OS('"앉아서 읽으세요"라는 뜻의 지시를 차례대로 놓아 보세요.', 'Sit down and read.', { d: 0.2 }),
            OS('"책을 펴고 읽으세요"라는 뜻의 지시를 차례대로 놓아 보세요.', 'Open your book and read.', { d: 0.3 }),
            TK('짝과 번갈아 and로 이은 두 동작 지시를 만들어 말해요(예: Stand up and clap.). 짝이 두 동작을 차례대로 해요. 바꾸어 한 뒤 "다 했어요"를 누르세요.'),
          ]],
        wrap: ['"오늘 and는 무엇을 이어 주었나요?" 두세 명이 동작 낱말 두 개를 말하게 한 뒤 출구 질문을 푼다. 장소를 거꾸로 나눈 학생은 다음 시간 시작에 그 장소에서 하는 일을 손으로 나타내 본다.',
          [
            { type: 'tool', tool: 'wordcards', options: { mode: 'sort', shuffle: false, slots: [{ id: 'lib', label: '도서관' }, { id: 'yard', label: '운동장' }], cards: [C('r', 'Read quietly.'), C('p', 'Play tag.')] }, prompt: '지시 카드를 장소별로 나눠 보세요.', target: { sort: { lib: ['r'], yard: ['p'] } }, difficulty: 0.2 },
            { type: 'choice', prompt: '"Stand up and clap."은 어떤 동작을 하라는 말일까요?', options: ['일어나서 손뼉을 쳐요', '앉아서 손뼉을 쳐요'], answer: 0, difficulty: 0.2, explain: 'Stand up and clap.은 일어선 다음 손뼉을 치라는 말이에요.' },
          ], '오늘 장소에 맞는 지시 말은 어땠나요?'],
        ws: ['장소와 두 동작 지시', [
          { type: 'table', prompt: '지시가 어울리는 장소를 도서관 또는 운동장으로 쓰세요.', columns: ['지시', '장소'], cells: [['Be quiet.', ''], ['Run fast!', ''], ['Read a book.', ''], ['Kick the ball.', '']], answer: '도서관 / 운동장 / 도서관 / 운동장' },
          { type: 'choice', prompt: '"앉아서 읽으세요"에 ○ 하세요.', options: ['Sit down and read.', 'Read and sit down.'], answer: 'Sit down and read.' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: 'Stand up ___ clap.', answer: 'and' },
          { type: 'short', prompt: 'and로 두 동작을 이어 지시 말 하나를 만들어 써 보세요.' },
        ], '장소를 그림으로 떠올리고 그곳에서 하는 일에 어울리는 지시를 골라요.', [
          { type: 'table', prompt: '지시가 어울리는 장소를 쓰세요.', columns: ['지시', '장소'], cells: [['Be quiet.', ''], ['Run fast!', '']], answer: '도서관 / 운동장' },
          { type: 'choice', prompt: '"일어나서 손뼉을 치세요"에 ○ 하세요.', options: ['Stand up and clap.', 'Sit down and clap.'], answer: 'Stand up and clap.' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: 'Sit down ___ read.', answer: 'and' },
          { type: 'short', prompt: '동작 낱말 두 개를 쓰세요.' },
        ]],
        diff: ['나누기에서 카드가 네 장이고 맞게 놓으면 초록 테두리가 생겨요. 틀리게 놓으면 되돌아와요.', '카드를 모두 놓은 뒤 확인을 눌러 스스로 고쳐요. 도서관 말은 속삭이듯 읽어 보아요.', '나누기에 어느 장소에도 맞지 않는 카드가 한 장 섞이고, 한 칸에 카드가 세 장 들어가는 문항이 나와요.'],
        notes: '자주 보이는 어려움: ① 장소와 상관없이 지시를 모두 크게 읽는다 → 장소에 맞는 목소리 크기로 읽는 시범을 보인다. ② and 뒤의 동작을 먼저 하려 한다 → 낱말 순서대로 동작을 해 보게 한다. ③ 한 장소에만 쓰는 말이라고 단정한다 → 줄 서기처럼 여러 곳에서 쓰는 말이 있음을 알려 준다. 활동은 모두 짝과 부드럽게 말하는 연습이다.',
      }),

      // ───────────────────────── 13차시 (core) ─────────────────────────
      LN(13, S1, {
        title: '끝을 올리는 물음과 내리는 알림 듣고 나누기',
        obj: '같은 낱말로 된 문장도 끝을 올리면 묻는 말, 내리면 알리는 말이 된다는 것을 듣고 문장을 두 무리로 나눌 수 있다.',
        ill: ['two speech bubbles with the same words, one ending in an upward arrow and one in a downward arrow, above a child tilting her head', 'It is red. / Is it red?', '끝을 올릴까 내릴까', [{ motif: 'bird', x: 92, y: 80 }, { motif: 'cloud', x: 396, y: 78 }, { motif: 'tree', x: 400, y: 214 }]],
        intro: ['"It is red."를 끝을 내려 읽고 "Is it red?"를 끝을 올려 읽은 뒤 "목소리가 어디서 달라졌나요?"라고 묻는다. 학생이 "끝에서요."라고 답하면 손으로 올라가는 화살표와 내려가는 화살표를 그려 보인다. 우리말 "뭐?"와 "뭐."처럼 끝 소리로 뜻이 달라지는 예를 하나 말해 보게 한다. 낱말 순서가 달라서 뜻이 바뀐다고만 생각하는 학생에게는 끝 소리를 따로 비교해 들려준다.',
          '끝을 올리면 묻는 말이고, 내리면 알려 주는 말이에요. 선생님 목소리를 잘 들어 봐요.',
          { tool: 'wordcards', options: { mode: 'sort', shuffle: false, slots: [{ id: 'tell', label: '알려 줘요 ↘' }, { id: 'ask', label: '물어봐요 ↗' }], cards: [C('t', 'It is red.'), C('a', 'Is it red?')] }, sequence: [{ at: {} }, { at: { t: 0, a: 1 } }] }],
        a1: ['활동 1. 알리는 말과 묻는 말로 나누기',
          '"문장을 소리 내어 읽고 끝이 올라가면 물어봐요 칸, 내려가면 알려 줘요 칸에 놓아요." 묻는 말에는 물음표가 있다는 점도 함께 짚되 소리로 먼저 확인하게 한다. 물음표만 보고 놓는 학생에게는 두 문장을 직접 소리 내어 읽게 하여 끝의 높낮이를 느끼게 한다. 짝에게 읽어 주며 맞는지 서로 들어 주게 한다.',
          '문장 카드를 알려 주는 말과 물어보는 말로 나눠 놓아요.',
          LA('sort', '문장을 소리 내어 읽으며 끝 소리가 올라가는지 내려가는지 느껴 보세요.'),
          [
            SO('문장 카드를 알려 주는 말과 물어보는 말로 나눠 보세요.', [{ id: 'tell', label: '알려 줘요 ↘' }, { id: 'ask', label: '물어봐요 ↗' }], [C('t1', 'It is a cat.'), C('q1', 'Is it a cat?'), C('t2', 'It is red.'), C('q2', 'Is it red?')], { tell: ['t1', 't2'], ask: ['q1', 'q2'] }, { d: 0.15 }),
            SO('이번에는 사과와 나이 문장이에요. 알려 주는 말과 물어보는 말로 나눠 보세요.', [{ id: 'tell', label: '알려 줘요 ↘' }, { id: 'ask', label: '물어봐요 ↗' }], [C('u1', 'I like apples.'), C('v1', 'Do you like apples?'), C('u2', 'She is nine.'), C('v2', 'Is she nine?')], { tell: ['u1', 'u2'], ask: ['v1', 'v2'] }, { d: 0.2 }),
            SO('문장 카드를 알려 주는 말과 물어보는 말로 나눠 보세요. 알려 주는 말이 더 많아요.', [{ id: 'tell', label: '알려 줘요 ↘' }, { id: 'ask', label: '물어봐요 ↗' }], [C('t1', 'This is a book.'), C('q1', 'Is this a book?'), C('t2', 'It is big.'), C('t3', 'It is cold.')], { tell: ['t1', 't2', 't3'], ask: ['q1'] }, { d: 0.25,
              p: ['같은 낱말로 된 두 문장도 뜻이 다를까요?', ['끝을 올리면 묻는 말이 돼요', '뜻이 똑같아요'], 0, '낱말 순서와 끝 소리가 달라져서 알리는 말과 묻는 말이 돼요.'] }),
          ]],
        a2: ['활동 2. 들은 말이 묻는 말인지 알리는 말인지 고르기',
          '문항마다 듣기 단추를 누르게 하고, 기기 소리로 구별이 어려우면 교사가 끝을 크게 올리거나 내려 읽어 준다. "끝에서 목소리가 어떻게 되었나요?" 손을 올리고 내리며 대답하게 한다. 둘 다 내려가는 소리로만 들리는 학생에게는 교사가 같은 문장을 과장해서 두 번 읽어 준다. 짝 활동은 문장 하나를 ↗ 또는 ↘로 읽고 맞히는 놀이이다.',
          '듣기 단추를 눌러 문장을 듣고, 묻는 말인지 알리는 말인지 골라요.',
          LA('listen', '문장의 마지막 낱말에서 목소리가 올라갔는지 내려갔는지 떠올려 보세요.'),
          [
            LS('듣기 단추를 누르고, 들은 말이 어떤 말인지 골라 보세요.', 'Is it big?', { cards: [KO('ask', '묻는 말이에요 (끝이 올라가요)'), KO('tell', '알리는 말이에요 (끝이 내려가요)')] }, 'ask', { x: [KO('wow', '놀라는 말이에요')] }),
            LS('듣기 단추를 누르고, 이번에 들은 말은 묻는 말인지 알리는 말인지 골라 보세요.', 'It is big.', { cards: [KO('ask', '묻는 말이에요 (끝이 올라가요)'), KO('tell', '알리는 말이에요 (끝이 내려가요)')] }, 'tell', { d: 0.2, x: [KO('wow', '놀라는 말이에요')] }),
            LS('듣기 단추를 누르고, 물고기 이야기를 들어 보세요. 어떤 말인지 골라요.', 'Do you like fish?', { cards: [KO('ask', '묻는 말이에요 (끝이 올라가요)'), KO('tell', '알리는 말이에요 (끝이 내려가요)')] }, 'ask', { d: 0.2, x: [KO('wow', '놀라는 말이에요')] }),
            LS('듣기 단추를 누르고, 한 번 더 물고기 이야기를 들어 보세요. 어떤 말인지 골라요.', 'I like fish.', { cards: [KO('ask', '묻는 말이에요 (끝이 올라가요)'), KO('tell', '알리는 말이에요 (끝이 내려가요)')] }, 'tell', { d: 0.25, x: [KO('wow', '놀라는 말이에요')] }),
            TK('짝과 번갈아 해요. 한 사람이 It is a dog. 를 끝을 내리거나 올려 읽으면 다른 사람이 알리는 말인지 묻는 말인지 맞혀요. 바꾸어 한 뒤 "다 했어요"를 누르세요.'),
          ]],
        wrap: ['"오늘 끝을 올려 읽는 문장은 무엇을 하는 말이었나요?" 두세 명이 묻는 말이라고 답하게 한 뒤 출구 질문을 푼다. 둘을 바꾸어 나눈 학생은 다음 시간 시작에 문장을 한 번씩 올리고 내려 읽어 본다.',
          [
            { type: 'tool', tool: 'wordcards', options: { mode: 'sort', shuffle: true, slots: [{ id: 'tell', label: '알려 줘요 ↘' }, { id: 'ask', label: '물어봐요 ↗' }], cards: [C('t', 'It is a dog.'), C('q', 'Is it a dog?')] }, prompt: '문장 카드를 알려 주는 말과 물어보는 말로 나눠 보세요.', target: { sort: { tell: ['t'], ask: ['q'] } }, difficulty: 0.2 },
            { type: 'choice', prompt: '끝을 올려 읽으면 어떤 말이 될까요?', options: ['묻는 말', '알리는 말'], answer: 0, difficulty: 0.15, explain: '끝을 올려 읽으면 물어보는 말이 돼요.' },
          ], '오늘 끝 소리 구별하기는 어땠나요?'],
        ws: ['끝을 올리는 말과 내리는 말', [
          { type: 'table', prompt: '문장을 읽고 알려 주는 말에는 ↘, 물어보는 말에는 ↗를 쓰세요.', columns: ['문장', '화살표'], cells: [['It is red.', ''], ['Is it red?', ''], ['I like cats.', ''], ['Do you like cats?', '']], answer: '↘ / ↗ / ↘ / ↗' },
          { type: 'choice', prompt: '물어보는 말에 ○ 하세요.', options: ['Is it a cat?', 'It is a cat.'], answer: 'Is it a cat?' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: '끝을 올려 읽으면 ___는 말이에요.', answer: '묻' },
          { type: 'short', prompt: '친구에게 묻고 싶은 영어 문장 하나를 물음표를 붙여 써 보세요.' },
        ], '문장을 소리 내어 읽으며 손을 올리고 내려 끝 소리를 느껴 보세요.', [
          { type: 'table', prompt: '알려 주는 말에는 ↘, 물어보는 말에는 ↗를 쓰세요.', columns: ['문장', '화살표'], cells: [['It is red.', ''], ['Is it red?', '']], answer: '↘ / ↗' },
          { type: 'choice', prompt: '알려 주는 말에 ○ 하세요.', options: ['It is big.', 'Is it big?'], answer: 'It is big.' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '끝을 내려 읽으면 ___는 말이에요.', answer: '알리' },
          { type: 'short', prompt: '물어보는 문장 하나를 써 보세요.' },
        ]],
        diff: ['문장 나누기에서 카드가 네 장이고 맞게 놓으면 초록 테두리가 생겨요. 틀리게 놓으면 되돌아와요.', '문장을 소리 내어 읽고 확인을 눌러 스스로 고쳐요. 손을 올리고 내리며 확인해요.', '듣기에 뜻이 다른 카드(놀라는 말)가 한 장 더 섞여 나와요.'],
        notes: '자주 보이는 어려움: ① 물음표만 보고 소리 없이 나눈다 → 직접 소리 내어 읽어 끝 소리를 느끼게 한다. ② 기기 소리에서 억양 차이가 작게 들린다 → 교사가 과장해서 읽어 준다. ③ 끝을 올리면 화난 말투로 오해한다 → 묻는 말에서는 끝이 자연스럽게 올라간다고 알려 준다. 억양은 정답이 하나가 아니라 경향이라고 말해 준다.',
      }),

      // ───────────────────────── 14차시 (practice) ─────────────────────────
      LN(14, S1, {
        title: '끝을 올려 읽는 문장 고르고 질문과 대답 차례대로 놓기',
        obj: '끝을 올려 읽는 문장을 골라내고, 질문과 대답을 차례대로 놓아 짝과 한 번 말해 볼 수 있다.',
        ill: ['two children passing a ball of words back and forth, one asking with a curved upward arrow and one answering', 'Is it big?', '묻고 대답하기', [{ motif: 'ball', x: 92, y: 208, s: 0.9 }, { motif: 'bird', x: 396, y: 86 }, { motif: 'tree', x: 400, y: 214 }]],
        intro: ['"Is it a dog?"를 끝을 올려 읽고 "Yes, it is."를 끝을 내려 읽은 뒤 "두 사람이 무엇을 하고 있나요?"라고 묻는다. 학생이 "묻고 대답해요."라고 하면 두 문장의 끝 소리 화살표를 칠판에 그려 준다. 대답도 끝을 올려 읽는 학생에게는 대답은 알려 주는 말이라 끝을 내린다고 다시 시범을 보인다.',
          '묻는 말은 끝이 올라가고 대답은 내려가요. 질문과 대답 두 문장을 읽어 봐요.',
          { tool: 'wordcards', options: { mode: 'order', shuffle: false, cards: [C('q', 'Is it a dog?'), C('a', 'Yes, it is.')] }, sequence: [{ at: {} }, { at: { q: 0, a: 1 } }] }],
        a1: ['활동 1. 끝을 올려 읽는 문장 고르기',
          '"문장을 소리 내어 읽어 보고 끝이 올라가는 문장을 모두 골라요." 한 문장씩 소리 내어 읽게 하고 물음표를 가리지 않고 끝 소리로 먼저 판단하게 한다. 알리는 말을 묻는 말처럼 읽는 학생에게는 짝이 들어 주고 어느 쪽 소리인지 말해 주게 한다. 마지막 문항은 문장이 여섯 장이라 천천히 하나씩 읽는다.',
          '끝을 올려 읽는 문장 카드를 모두 바구니에 넣어요.',
          LA('pick', '문장을 소리 내어 읽으며 끝에서 목소리가 올라가는지 느껴 보세요. 올라가는 문장만 골라요.'),
          [
            PK('끝을 올려 읽는 문장을 모두 골라 보세요.', [C('t1', 'It is red.'), C('q1', 'Is it red?'), C('t2', 'It is big.'), C('q2', 'Is it big?')], ['q1', 'q2'], { d: 0.15 }),
            PK('고양이와 나이 이야기에서 끝을 올려 읽는 문장을 모두 골라 보세요.', [C('t1', 'I like cats.'), C('q1', 'Do you like cats?'), C('t2', 'She is nine.'), C('q2', 'Is she nine?')], ['q1', 'q2'], { d: 0.2 }),
            PK('날씨 이야기에서 끝을 올려 읽는 문장을 모두 골라 보세요.', [C('t1', 'It is cold.'), C('q1', 'Is it cold?'), C('t2', 'It is windy.'), C('q2', 'Is it windy?')], ['q1', 'q2'], { d: 0.25,
              p: ['끝을 올려 읽는 문장에는 어떤 부호가 붙을까요?', ['물음표(?)가 붙어요', '마침표(.)가 붙어요'], 0, '묻는 말은 끝에 물음표를 쓰고 끝을 올려 읽어요.'] }),
          ]],
        a2: ['활동 2. 질문과 대답 차례대로 놓기',
          '"묻는 말을 먼저 놓고 대답을 뒤에 놓아요. 놓은 뒤 짝과 한 번씩 읽어 봐요." 질문은 끝을 올리고 대답은 끝을 내려 읽게 한다. 대답을 먼저 놓는 학생에게는 대화에서 먼저 말하는 사람이 누구인지 물어본다. 세 줄 대화는 마지막 줄이 짧은 맞장구라는 점을 알려 준다.',
          '질문과 대답 카드를 차례대로 놓아 대화를 만들고, 짝과 번갈아 읽어요.',
          LA('order', '대화에서 먼저 말하는 사람의 문장이 무엇인지 생각해 보세요. 대답은 그 뒤에 와요.'),
          [
            OR('질문과 대답을 차례대로 놓아 대화를 만들어 보세요.', [C('a', 'Yes, it is.'), C('q', 'Is it a dog?')], ['q', 'a'], { d: 0.15 }),
            OR('이번에는 크기를 묻는 대화예요. 질문과 대답을 차례대로 놓아 보세요.', [C('a', 'No, it is small.'), C('q', 'Is it big?')], ['q', 'a'], { d: 0.2 }),
            OR('세 줄 대화를 차례대로 놓아 보세요.', [C('c', 'Me too.'), C('q', 'Do you like pizza?'), C('a', 'Yes, I do.')], ['q', 'a', 'c'], { d: 0.3 }),
            TK('짝과 질문 하나를 끝을 올려 묻고 끝을 내려 대답해요. 바꾸어 한 번 더 한 뒤 "다 했어요"를 누르세요.'),
          ]],
        wrap: ['"오늘 질문과 대답은 끝 소리가 어떻게 달랐나요?" 두세 명이 손으로 올리고 내리며 보여 주게 한 뒤 출구 질문을 푼다. 질문의 끝을 내려 읽은 학생은 다음 시간 시작에 문장을 물음표 모양으로 손을 올려 읽어 본다.',
          [
            { type: 'tool', tool: 'wordcards', options: { mode: 'pick', basket: '끝이 올라가는 말', shuffle: false, cards: [C('a', 'It is a bird.'), C('b', 'Is it a bird?')] }, prompt: '끝을 올려 읽는 문장을 골라 보세요.', target: { pick: ['b'] }, difficulty: 0.15 },
            { type: 'choice', prompt: '"Yes, it is."는 질문일까요, 대답일까요?', options: ['질문', '대답'], answer: 1, difficulty: 0.15, explain: 'Yes, it is.는 질문에 대한 대답이에요.' },
          ], '오늘 묻고 대답하기는 어땠나요?'],
        ws: ['묻는 말과 대답', [
          { type: 'table', prompt: '질문과 알맞은 대답의 번호를 쓰세요.', columns: ['질문', '대답 번호'], cells: [['Is it a dog?', ''], ['Is it big?', ''], ['Do you like pizza?', '']], answer: '① Yes, it is. ② No, it is small. ③ Yes, I do. 에 맞게 1, 2, 3' },
          { type: 'choice', prompt: '끝을 올려 읽는 문장에 ○ 하세요.', options: ['Is it red?', 'It is red.'], answer: 'Is it red?' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: 'Is it a dog? ___, it is.', answer: 'Yes' },
          { type: 'short', prompt: '짝에게 묻고 싶은 질문 하나를 영어로 쓰고, 끝에 올라가는 화살표를 그려 보세요.' },
        ], '질문을 소리 내어 읽으며 끝을 올리고, 대답은 끝을 내려 읽어요.', [
          { type: 'table', prompt: '질문과 알맞은 대답의 번호를 쓰세요.', columns: ['질문', '대답 번호'], cells: [['Is it a dog?', ''], ['Is it big?', '']], answer: '1, 2' },
          { type: 'choice', prompt: '질문에 ○ 하세요.', options: ['Is it a dog?', 'Yes, it is.'], answer: 'Is it a dog?' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: 'Yes, it ___.', answer: 'is' },
          { type: 'short', prompt: '질문 하나를 쓰세요.' },
        ]],
        diff: ['문장 고르기에서 맞게 놓으면 초록 테두리가 생기고 틀리게 놓으면 되돌아와요. 대화는 카드가 두 장이에요.', '문장을 소리 내어 읽고 확인을 눌러 스스로 고쳐요. 질문은 끝을 올려 읽어요.', '대화 놓기에서 카드가 세 장이고 짧은 맞장구(Me too.)까지 놓아요.'],
        notes: '자주 보이는 어려움: ① 질문을 끝을 내려 읽는다 → 손을 올리며 같이 읽는 시범을 보인다. ② 대답을 먼저 놓는다 → 먼저 말하는 사람이 누구인지 묻는다. ③ Yes, it is.와 No, it is small.을 섞는다 → 질문의 답이 맞는지 아닌지를 먼저 말해 보게 한다. 대화 읽기는 짝과 부드럽게 주고받는 연습이며 틀려도 다시 해 본다.',
      }),

      // ───────────────────────── 15차시 (core) ─────────────────────────
      LN(15, S4, {
        title: '그림 카드에 영어 낱말 라벨 붙이고 알파벳 놓기',
        obj: '그림 카드에 알맞은 영어 낱말 라벨을 짝 짓고, 알파벳 카드를 놓아 낱말을 완성할 수 있다.',
        ill: ['a child sticking small word labels onto picture cards of a ball, a fish, an apple and an egg', 'ball  fish  apple', '그림에 라벨 붙이기', [{ motif: 'ball', x: 92, y: 208, s: 0.9 }, { motif: 'apple', x: 392, y: 210, s: 0.9 }, { motif: 'egg', x: 252, y: 216, s: 0.8 }]],
        intro: ['공 그림 카드를 보여 주며 "이 카드 옆에 이름표를 붙인다면 어떤 낱말을 쓸까요?"라고 묻는다. 학생이 "ball이요."라고 하면 칠판에 ball을 쓰고 글자 이름을 하나씩 읽는다. 그림을 보고 우리말만 말하는 학생에게는 영어 낱말도 한 번 말해 보게 한다. 대문자로 쓰는 학생에게는 낱말 이름표는 소문자로 쓴다고 알려 준다.',
          '그림 옆에 영어 이름표를 붙여 봐요. 낱말 이름표는 소문자로 써요.',
          { tool: 'wordcards', options: { mode: 'match', shuffle: false, words: [W('ball', '공', 'ball'), W('fish', '물고기', 'fish2')] }, sequence: [{ at: {} }, { at: { ball: 0, fish: 1 } }] }],
        a1: ['활동 1. 그림 카드 옆에 낱말 라벨 놓기',
          '"그림과 뜻을 보고 소리 내어 이름을 말한 다음 낱말 카드를 놓아요." 모양이 닮은 낱말(ball과 book)을 섞는 학생에게는 첫소리를 비교해 읽게 한다. 도전 단계에는 그림에 없는 낱말이 한 장 더 있다. 놓은 뒤에는 짝에게 낱말을 가리키며 읽어 주게 한다.',
          '그림과 뜻 옆에 알맞은 영어 낱말 라벨을 놓아요.',
          LA('match', '그림의 이름을 영어로 먼저 말해 보세요. 첫소리가 같은 카드를 찾아요.'),
          [
            MW('그림 옆에 알맞은 영어 낱말 라벨을 놓아 보세요.', [W('ball', '공', 'ball'), W('fish', '물고기', 'fish2'), W('apple', '사과', 'apple')], { d: 0.15, x: [W('bag', '가방')] }),
            MW('그림 옆에 알맞은 영어 낱말 라벨을 놓아 보세요.', [W('egg', '달걀', 'egg'), W('banana', '바나나', 'banana'), W('book', '책', 'book')], { d: 0.2, x: [W('cup', '컵')] }),
            MW('그림 옆에 알맞은 영어 낱말 라벨을 놓아 보세요.', [W('pencil', '연필', 'pencil'), W('umbrella', '우산', 'umbrella'), W('cat', '고양이', 'cat')], { d: 0.25, x: [W('dog', '개', 'dog')],
              p: ['낱말 이름표는 대문자와 소문자 중 어느 쪽으로 쓸까요?', ['소문자로 써요', '대문자로만 써요'], 0, '낱말 이름표는 보통 소문자로 써요. 사람 이름의 첫 글자만 대문자로 써요.'] }),
          ]],
        a2: ['활동 2. 알파벳 카드로 낱말 라벨 완성하기',
          '"그림을 보고 낱말 듣기 단추를 눌러 소리를 들어요. 소리를 한 번에 하나씩 끊어 듣고 알파벳 카드를 놓아요." 같은 글자가 두 번 나오는 낱말은 같은 글자 카드가 두 장 있다고 알려 준다. 글자 순서를 거꾸로 놓은 학생에게는 낱말을 천천히 읽으며 왼쪽부터 짚게 한다. 소리가 나지 않으면 교사가 낱말을 읽어 준다.',
          '그림과 뜻을 보고 알파벳 카드를 놓아 낱말 라벨을 완성해요.',
          LSP('낱말을 천천히 끊어 읽으며 가장 먼저 들리는 소리를 내는 글자부터 놓아 보세요.'),
          [
            SPL('공 그림을 보고 낱말 라벨을 만들어 보세요.', 'ball', '공', 'ball', ['c'], { d: 0.2 }),
            SPL('물고기 그림을 보고 낱말 라벨을 만들어 보세요.', 'fish', '물고기', 'fish2', ['g'], { d: 0.2 }),
            SPL('사과 그림을 보고 낱말 라벨을 만들어 보세요.', 'apple', '사과', 'apple', ['k'], { d: 0.3,
              p: ['apple에서 같은 글자가 두 번 나올까요?', ['p가 두 번 나와요', '같은 글자는 없어요'], 0, 'apple에는 p가 두 개 있어요. 같은 글자도 카드를 두 번 써요.'] }),
            SPL('달걀 그림을 보고 낱말 라벨을 만들어 보세요.', 'egg', '달걀', 'egg', ['o'], { d: 0.25 }),
          ]],
        wrap: ['"오늘 라벨을 붙인 낱말 가운데 가장 긴 낱말은 무엇이었나요?" apple이라고 답하는 학생에게 다섯 글자를 하나씩 읽게 한 뒤 출구 질문을 푼다. 글자 순서가 틀린 학생은 다음 시간 시작에 낱말을 소리 내어 읽으며 왼쪽부터 다시 놓는다.',
          [
            { type: 'tool', tool: 'wordcards', options: { mode: 'spell', word: 'cup', ko: '컵', extra: ['b'] }, prompt: '컵 뜻의 낱말 라벨을 만들어 보세요.', target: { spell: 'cup' }, difficulty: 0.2 },
            { type: 'choice', prompt: '공 그림 옆에 붙일 낱말 라벨은 무엇일까요?', options: ['ball', 'bell'], answer: 0, difficulty: 0.2, explain: '공은 ball이에요. bell은 종이에요.' },
          ], '오늘 낱말 라벨 붙이기는 어땠나요?'],
        ws: ['그림과 낱말 라벨', [
          { type: 'table', prompt: '그림 뜻을 보고 영어 낱말을 쓰세요.', columns: ['뜻', '영어'], cells: [['공', ''], ['물고기', ''], ['사과', ''], ['달걀', '']], answer: 'ball / fish / apple / egg' },
          { type: 'choice', prompt: '"책"의 영어 낱말에 ○ 하세요.', options: ['book', 'ball', 'bag'], answer: 'book' },
          { type: 'blank', prompt: '빈칸에 알맞은 글자를 쓰세요. (물고기)', text: 'f i ___ h', answer: 's' },
          { type: 'short', prompt: '그림 하나를 그리고 그 옆에 영어 낱말 라벨을 소문자로 써 보세요.' },
        ], '그림의 이름을 영어로 말한 뒤 철자를 한 글자씩 소리 내어 읽어요.', [
          { type: 'table', prompt: '그림 뜻을 보고 영어 낱말을 쓰세요.', columns: ['뜻', '영어'], cells: [['공', ''], ['물고기', '']], answer: 'ball / fish' },
          { type: 'choice', prompt: '"사과"의 영어 낱말에 ○ 하세요.', options: ['apple', 'egg'], answer: 'apple' },
          { type: 'blank', prompt: '빈칸에 알맞은 글자를 쓰세요. (달걀)', text: 'e g ___', answer: 'g' },
          { type: 'short', prompt: '낱말 하나를 소문자로 써 보세요.' },
        ]],
        diff: ['라벨 짝 짓기에서 카드가 세 장이고 맞게 놓으면 초록 테두리가 생겨요. 틀리게 놓으면 되돌아와요.', '그림을 보고 라벨을 놓은 뒤 확인을 눌러 스스로 고쳐요. 철자는 소리 내어 읽으며 확인해요.', '라벨 짝 짓기에 그림에 없는 라벨이 한 장 섞여 나와요.'],
        notes: '자주 보이는 어려움: ① 낱말의 첫소리는 맞는데 끝 글자가 틀린다 → 낱말을 끊어 읽으며 끝소리를 다시 듣게 한다. ② 같은 글자가 두 번 나오는 낱말(apple, egg)을 한 번만 놓는다 → 낱말의 글자 수를 손가락으로 세어 보게 한다. ③ 라벨을 대문자로 쓴다 → 낱말은 소문자로 쓴다고 알려 준다. 기기에서는 카드를 놓고 활동지에서 직접 쓴다.',
      }),

      // ───────────────────────── 16차시 (practice) ─────────────────────────
      LN(16, S4, {
        title: '가을·겨울 그림에 낱말 라벨 붙이고 철자 맞추기',
        obj: '가을과 겨울 풍경 그림에 알맞은 낱말 라벨을 짝 짓고, 알파벳 카드로 낱말을 완성해 소리 내어 읽을 수 있다.',
        ill: ['an autumn tree with red leaves and a winter scene with snow and a moon, each with a small word label card', 'leaf  snow  moon', '풍경에 라벨 붙이기', [{ motif: 'leaf', x: 94, y: 84 }, { motif: 'snow', x: 392, y: 86 }, { motif: 'moon', x: 252, y: 72, s: 0.7 }]],
        intro: ['가을 나무와 눈 오는 그림을 번갈아 보여 주고 "이 그림에서 보이는 것 하나를 영어로 말해 볼까요?"라고 묻는다. 학생이 "tree요."라고 하면 칠판에 tree를 쓰고 소리를 같이 읽는다. 우리말로만 대답하는 학생에게는 선생님이 먼저 영어 낱말을 말해 주고 따라 하게 한다. 지난 시간에 배운 낱말과 새 낱말을 함께 써 보자고 말해 준다.',
          '가을과 겨울 풍경에서 영어로 부를 수 있는 것을 찾아봐요. 낱말 이름표를 붙여 볼 거예요.',
          { tool: 'wordcards', options: { mode: 'match', shuffle: false, words: [W('leaf', '나뭇잎', 'leaf'), W('snow', '눈', 'snow')] }, sequence: [{ at: {} }, { at: { leaf: 0, snow: 1 } }] }],
        a1: ['활동 1. 풍경 그림과 낱말 라벨 짝 짓기',
          '"그림을 보고 영어로 먼저 말해 본 뒤 낱말 라벨을 놓아요. 모르는 낱말은 소리를 들어도 좋아요." 모양이 닮은 달과 별을 바꾸어 놓는 학생에게는 밤하늘에서 둥글고 큰 것이 무엇인지 말하게 한다. 도전 단계에는 그림에 없는 낱말이 한 장 더 있다.',
          '풍경 그림 옆에 알맞은 영어 낱말 라벨을 놓아요.',
          LA('match', '그림 속 모양을 보고 영어 이름을 먼저 말해 보세요. 모르면 첫소리를 떠올려 보세요.'),
          [
            MW('풍경 그림 옆에 알맞은 낱말 라벨을 놓아 보세요.', [W('leaf', '나뭇잎', 'leaf'), W('tree', '나무', 'tree')], { d: 0.15, x: [W('flower', '꽃', 'flower')] }),
            MW('풍경 그림 옆에 알맞은 낱말 라벨을 놓아 보세요.', [W('moon', '달', 'moon'), W('star', '별', 'star'), W('sun', '해', 'sun')], { d: 0.2, x: [W('cloud', '구름', 'cloud')] }),
            MW('풍경 그림 옆에 알맞은 낱말 라벨을 놓아 보세요.', [W('snow', '눈', 'snow'), W('cloud', '구름', 'cloud'), W('umbrella', '우산', 'umbrella')], { d: 0.25, x: [W('rain', '비')],
              p: ['snow는 무엇을 뜻할까요?', ['하늘에서 내리는 눈이에요', '불어오는 바람이에요'], 0, 'snow는 눈이에요. 겨울에 하늘에서 내려요.'] }),
          ]],
        a2: ['활동 2. 알파벳 카드로 풍경 낱말 만들기',
          '"그림과 뜻을 보고 소리를 들으며 알파벳 카드를 놓아 낱말을 만들어요." 소리와 글자가 다른 낱말(leaf의 ea)은 천천히 끊어 읽으며 글자 이름을 같이 말하게 한다. 소리를 모를 때는 낱말 듣기 단추를 다시 눌러 보게 한다. 만든 낱말은 짝에게 읽어 주고 그림을 가리키게 한다.',
          '그림과 뜻을 보고 알파벳 카드를 놓아 낱말을 완성해요.',
          LSP('낱말을 소리 내어 천천히 읽어 보세요. 처음 들리는 소리의 글자부터 차례로 놓아 보세요.'),
          [
            SPL('나뭇잎 그림을 보고 낱말을 만들어 보세요.', 'leaf', '나뭇잎', 'leaf', ['t'], { d: 0.25 }),
            SPL('나무 그림을 보고 낱말을 만들어 보세요.', 'tree', '나무', 'tree', ['b'], { d: 0.25 }),
            SPL('달 그림을 보고 낱말을 만들어 보세요.', 'moon', '달', 'moon', ['n'], { d: 0.25 }),
            SPL('눈 그림을 보고 낱말을 만들어 보세요.', 'snow', '눈', 'snow', ['k'], { d: 0.3 }),
          ]],
        wrap: ['"오늘 라벨을 붙인 낱말 가운데 겨울에 볼 수 있는 것은 무엇이었나요?" 두세 명이 snow, cloud 등을 말하게 한 뒤 출구 질문을 푼다. 철자를 틀린 학생은 다음 시간 시작에 낱말을 천천히 읽으며 글자를 하나씩 짚어 본다.',
          [
            { type: 'tool', tool: 'wordcards', options: { mode: 'spell', word: 'star', ko: '별', motif: 'star', extra: ['m'] }, prompt: '별 그림을 보고 낱말을 만들어 보세요.', target: { spell: 'star' }, difficulty: 0.25 },
            { type: 'choice', prompt: '"나무"의 영어 낱말은 무엇일까요?', options: ['tree', 'three'], answer: 0, difficulty: 0.2, explain: '나무는 tree예요. three는 숫자 3이에요.' },
          ], '오늘 풍경 낱말 만들기는 어땠나요?'],
        ws: ['풍경과 낱말 라벨', [
          { type: 'table', prompt: '그림 뜻을 보고 영어 낱말을 쓰세요.', columns: ['뜻', '영어'], cells: [['나뭇잎', ''], ['나무', ''], ['달', ''], ['눈', '']], answer: 'leaf / tree / moon / snow' },
          { type: 'choice', prompt: '"별"의 영어 낱말에 ○ 하세요.', options: ['star', 'sun', 'moon'], answer: 'star' },
          { type: 'blank', prompt: '빈칸에 알맞은 글자를 쓰세요. (나뭇잎)', text: 'l e a ___', answer: 'f' },
          { type: 'short', prompt: '가을이나 겨울 그림을 하나 그리고 보이는 것에 영어 낱말 라벨을 써 보세요.' },
        ], '그림의 이름을 영어로 말한 뒤 철자를 한 글자씩 소리 내어 읽어요.', [
          { type: 'table', prompt: '그림 뜻을 보고 영어 낱말을 쓰세요.', columns: ['뜻', '영어'], cells: [['나뭇잎', ''], ['눈', '']], answer: 'leaf / snow' },
          { type: 'choice', prompt: '"달"의 영어 낱말에 ○ 하세요.', options: ['moon', 'sun'], answer: 'moon' },
          { type: 'blank', prompt: '빈칸에 알맞은 글자를 쓰세요. (나무)', text: 't r e ___', answer: 'e' },
          { type: 'short', prompt: '낱말 하나를 소문자로 써 보세요.' },
        ]],
        diff: ['라벨 짝 짓기에서 카드가 두세 장이고 맞게 놓으면 초록 테두리가 생겨요. 틀리게 놓으면 되돌아와요.', '그림을 보고 라벨을 놓은 뒤 확인을 눌러 스스로 고쳐요. 철자는 소리 내어 읽으며 확인해요.', '라벨 짝 짓기에 그림에 없는 라벨이 한 장 섞여 나와요.'],
        notes: '자주 보이는 어려움: ① moon과 sun, star를 하늘 모양으로 섞는다 → 밤과 낮에 보이는 것으로 나누어 말하게 한다. ② 소리와 글자가 다른 낱말(leaf의 ea)을 소리대로만 쓴다 → 낱말을 눈으로 한 번 더 보고 따라 놓게 한다. ③ tree와 three를 섞는다 → 뜻과 소리를 함께 비교한다. 가을·겨울 낱말은 2학기 계절 주제와 이어 쓴다.',
      }),

      // ───────────────────────── 17차시 (core) ─────────────────────────
      LN(17, S4, {
        title: '동작 보고 뜻 낱말 짝 짓고 I can… 문장에 넣기',
        obj: '달리기, 뛰기, 앉기, 읽기 같은 동작 낱말을 뜻과 짝 짓고, I can… 문장의 빈칸에 넣어 말할 수 있다.',
        ill: ['four children doing different actions, running, jumping, sitting and reading, each with a small word label', 'run  jump  sit  read', '동작 낱말과 문장', [{ motif: 'bird', x: 94, y: 82 }, { motif: 'book', x: 392, y: 208 }, { motif: 'tree', x: 252, y: 214 }]],
        intro: ['교사가 달리는 시늉을 하며 "run"을 말하고 학생들이 따라 하게 한다. 이어 "jump", "sit", "read"를 몸짓과 함께 말한 뒤 "방금 어떤 동작을 했나요?"라고 묻는다. 학생이 "달리고 뛰고 앉고 읽었어요."라고 하면 낱말을 칠판에 쓴다. 낱말과 동작을 연결하지 못하는 학생에게는 동작을 천천히 반복하며 낱말을 들려준다.',
          '선생님 동작을 보고 따라 해 보세요. 동작을 나타내는 영어 낱말이 무엇인지 알아봐요.',
          { tool: 'wordcards', options: { mode: 'match', shuffle: false, words: [W('run', '달려요'), W('jump', '뛰어요')] }, sequence: [{ at: {} }, { at: { run: 0, jump: 1 } }] }],
        a1: ['활동 1. 동작 뜻과 영어 낱말 짝 짓기',
          '"뜻을 보고 그 동작을 몸으로 해 보며 알맞은 영어 낱말을 찾아요." 놓은 뒤 낱말을 소리 내어 읽고 동작을 한 번 더 한다. 모양이 비슷한 sit와 sing을 섞는 학생에게는 두 낱말의 첫 두 글자를 비교해 읽게 한다. 도전 단계에는 뜻 칸에 없는 낱말이 한 장 더 있다.',
          '뜻 옆에 알맞은 영어 동작 낱말 카드를 놓고, 동작을 따라 해요.',
          LA('match', '뜻을 보고 동작을 해 보세요. 동작과 어울리는 소리의 낱말을 찾아요.'),
          [
            MW('뜻 옆에 알맞은 영어 동작 낱말을 놓아 보세요.', [W('run', '달려요'), W('jump', '뛰어요')], { d: 0.15, x: [W('swim', '수영해요')] }),
            MW('뜻 옆에 알맞은 영어 동작 낱말을 놓아 보세요.', [W('sit', '앉아요'), W('read', '읽어요'), W('write', '써요')], { d: 0.2, x: [W('sing', '노래해요')] }),
            MW('뜻 옆에 알맞은 영어 동작 낱말을 놓아 보세요.', [W('walk', '걸어요'), W('clap', '손뼉을 쳐요'), W('sing', '노래해요')], { d: 0.25, x: [W('stop', '멈춰요')],
              p: ['sit와 sing은 같은 낱말일까요?', ['아니요, 뜻이 달라요', '네, 같아요'], 0, 'sit는 앉는 것, sing은 노래하는 것이에요. 끝 글자가 달라서 뜻이 달라요.'] }),
          ]],
        a2: ['활동 2. I can… 문장 빈칸에 동작 낱말 넣기',
          '"그림 속 동작을 보고 빈칸에 어울리는 동작 낱말을 넣어요. 문장을 읽으며 동작도 해 봐요." can 뒤에는 동작 낱말이 온다는 점을 짚고, 낱말 뒤에 -s나 -ing를 붙이지 않는다는 점은 이번 시간에는 다루지 않는다. 문장을 우리말처럼 "나는 달리기 할 수 있어요"로 옮기는 학생에게는 영어에서는 동작 낱말만 놓으면 된다고 알려 준다.',
          '뜻에 맞는 동작 낱말을 빈칸에 넣어 문장을 만들고 동작과 함께 말해요.',
          LA('fill', '뜻에 나온 동작을 몸으로 해 보세요. 그 동작을 나타내는 낱말을 빈칸에 넣어요.'),
          [
            FI('"나는 뛸 수 있어요"라는 뜻이 되도록 낱말을 골라 보세요.', [{ id: 'f1', label: 'I can ___.' }], TX('jump', 'sit', 'read'), { f1: 'jump' }, { d: 0.15 }),
            FI('"나는 읽을 수 있어요"라는 뜻이 되도록 낱말을 골라 보세요.', [{ id: 'f1', label: 'I can ___.' }], TX('run', 'read', 'sing'), { f1: 'read' }, { d: 0.2 }),
            FI('"나는 빨리 달릴 수 있어요"라는 뜻이 되도록 낱말을 골라 보세요.', [{ id: 'f1', label: 'I can ___ fast.' }], TX('walk', 'run', 'sit'), { f1: 'run' }, { d: 0.25 }),
            TK('짝과 번갈아 I can ○○. 하고 말하며 동작을 해 보여요. 짝은 영어 낱말을 듣고 같은 동작을 따라 해요. "다 했어요"를 누르세요.'),
          ]],
        wrap: ['"오늘 can 다음에는 어떤 낱말이 왔나요?" 두세 명이 동작 낱말을 말하게 한 뒤 출구 질문을 푼다. sit와 sing을 바꾸어 쓴 학생은 다음 시간 시작에 두 동작을 몸으로 해 보며 낱말을 말한다.',
          [
            { type: 'tool', tool: 'wordcards', options: { mode: 'fill', shuffle: false, slots: [{ id: 'f1', label: 'I can ___.' }], cards: TX('swim', 'sit', 'read') }, prompt: '"나는 수영할 수 있어요"라는 뜻이 되도록 낱말을 골라 보세요.', target: { fill: { f1: 'swim' } }, difficulty: 0.2 },
            { type: 'choice', prompt: '"clap"은 어떤 동작일까요?', options: ['손뼉을 쳐요', '노래해요'], answer: 0, difficulty: 0.15, explain: 'clap은 손뼉을 치는 동작이에요.' },
          ], '오늘 동작 낱말은 어땠나요?'],
        ws: ['동작 낱말', [
          { type: 'table', prompt: '동작 뜻을 보고 영어 낱말을 쓰세요.', columns: ['뜻', '영어'], cells: [['달려요', ''], ['뛰어요', ''], ['앉아요', ''], ['읽어요', '']], answer: 'run / jump / sit / read' },
          { type: 'choice', prompt: '"나는 걸을 수 있어요"에 ○ 하세요.', options: ['I can walk.', 'I can write.'], answer: 'I can walk.' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: 'I can ___ fast.', answer: 'run' },
          { type: 'short', prompt: '내가 할 수 있는 동작을 I can ○○. 로 써 보세요.' },
        ], '동작을 몸으로 해 보며 낱말을 소리 내어 말해요.', [
          { type: 'table', prompt: '동작 뜻을 보고 영어 낱말을 쓰세요.', columns: ['뜻', '영어'], cells: [['달려요', ''], ['뛰어요', '']], answer: 'run / jump' },
          { type: 'choice', prompt: '"앉아요"에 ○ 하세요.', options: ['sit', 'sing'], answer: 'sit' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: 'I can ___.', answer: 'jump' },
          { type: 'short', prompt: '동작 낱말 하나를 쓰세요.' },
        ]],
        diff: ['동작 짝 짓기에서 카드가 두 장이고 맞게 놓으면 초록 테두리가 생겨요. 틀리게 놓으면 되돌아와요.', '동작을 해 보며 카드를 놓은 뒤 확인을 눌러 스스로 고쳐요.', '동작 짝 짓기에 뜻 칸에 없는 동작 낱말이 한 장 섞여 나와요.'],
        notes: '자주 보이는 어려움: ① sit, sing, swim처럼 s로 시작하는 낱말을 바꾼다 → 동작을 해 보며 뜻을 연결하고 첫 두 글자를 비교한다. ② 낱말 모양이 비슷한 read와 write를 섞는다 → 읽는 동작과 쓰는 동작을 해 보게 한다. ③ can 뒤의 낱말에 -s를 붙인다 → 이번 시간에는 낱말을 그대로 쓰도록 하고 다음에 다룬다. 몸을 쓰는 활동이므로 부딪히지 않게 자리를 넓혀 준다.',
      }),

      // ───────────────────────── 18차시 (practice) ─────────────────────────
      LN(18, S4, {
        title: '동작 문장 낱말 차례 놓고 알맞은 동작 문장 고르기',
        obj: '동작을 나타내는 짧은 문장의 낱말을 차례대로 놓고, 그림에 알맞은 동작 문장을 고를 수 있다.',
        ill: ['a child singing on a stage and a child reading in a corner, each with a short sentence card above', 'I can read.', '동작 문장 말하기', [{ motif: 'book', x: 94, y: 208, s: 0.9 }, { motif: 'bird', x: 392, y: 84 }, { motif: 'flower', x: 402, y: 216 }]],
        intro: ['교사가 노래하는 흉내를 내며 "I can sing."을 말하고 이어 읽는 흉내를 내며 "I can read."를 말한다. "문장에서 바뀐 낱말은 무엇인가요?"라고 묻고 학생의 대답을 듣는다. 학생이 "sing, read요."라고 하면 I can은 그대로임을 확인한다. 동작과 문장을 따로 말하는 학생에게는 동작을 하면서 문장을 한 번에 말하게 한다.',
          '동작을 하면서 문장을 말해 봐요. 문장에서 어떤 낱말이 바뀌는지 찾아봐요.',
          { tool: 'wordcards', options: { mode: 'order', shuffle: false, cards: [C('a', 'I'), C('b', 'can'), C('c', 'sing.')] }, sequence: [{ at: {} }, { at: { a: 0, b: 1, c: 2 } }] }],
        a1: ['활동 1. 동작 문장 낱말 차례대로 놓기',
          '"뜻을 읽고 동작을 해 본 다음 낱말 카드를 차례대로 놓아요. 놓은 뒤 문장을 한 번에 말해요." 낱말 순서를 우리말처럼 놓는 학생에게는 I can을 먼저 놓고 동작 낱말을 마지막에 놓게 한다. 문장 끝의 마침표 카드를 따로 놓는 학생에게는 낱말과 마침표가 한 카드라고 알려 준다.',
          '낱말 카드를 차례대로 놓아 동작 문장을 만들고 동작과 함께 말해요.',
          LA('order', '동작을 해 보세요. 말하는 사람(I)과 할 수 있다는 말(can)을 먼저 놓고 동작 낱말을 마지막에 놓아요.'),
          [
            OS('"나는 노래할 수 있어요"라는 뜻의 문장을 차례대로 놓아 보세요.', 'I can sing.', { d: 0.15 }),
            OS('"나는 높이 뛸 수 있어요"라는 뜻의 문장을 차례대로 놓아 보세요.', 'I can jump high.', { d: 0.2 }),
            OS('"우리는 읽을 수 있어요"라는 뜻의 문장을 차례대로 놓아 보세요.', 'We can read.', { d: 0.2 }),
            OS('"나는 앉을 수 있어요"라는 뜻의 문장을 차례대로 놓아 보세요.', 'I can sit down.', { d: 0.25,
              p: ['We와 I는 같은 낱말일까요?', ['아니요, I는 나, We는 우리예요', '네, 같아요'], 0, 'I는 나 한 사람, We는 우리 여럿을 말해요.'] }),
          ]],
        a2: ['활동 2. 동작에 알맞은 문장 고르기',
          '"동작을 읽고 그 동작에 알맞은 문장을 골라요. 고른 문장을 소리 내어 읽어요." 동작 낱말만 바뀌고 문장 앞부분이 같으므로 끝 낱말을 비교해 보게 한다. 도전 단계에는 뜻이 비슷한 문장이 한 장 더 있다. 짝 활동은 한 사람이 동작을 말없이 하면 다른 사람이 알맞은 문장을 말해 주는 놀이이다.',
          '동작에 알맞은 문장 카드를 골라 바구니에 넣어요.',
          LA('pick', '문장 끝에 오는 동작 낱말이 뜻과 같은지 비교해 보세요.'),
          [
            PK('"책을 읽는 모습"에 알맞은 문장을 골라 보세요.', [C('a', 'I can read.'), C('b', 'I can run.'), C('c', 'I can sing.')], ['a'], { d: 0.15, x: [C('d', 'I can write.')] }),
            PK('"무대에서 노래하는 모습"에 알맞은 문장을 골라 보세요.', [C('a', 'I can jump.'), C('b', 'I can sing.'), C('c', 'I can sit.')], ['b'], { d: 0.2, x: [C('d', 'I can swim.')] }),
            PK('"운동장을 달리는 모습"에 알맞은 문장을 골라 보세요.', [C('a', 'I can run.'), C('b', 'I can read.'), C('c', 'I can clap.')], ['a'], { d: 0.2, x: [C('d', 'I can walk.')] }),
            TK('짝에게 동작 하나를 말없이 해 보이고, 짝이 I can ○○. 하고 말해 보아요. 맞히면 서로 손뼉을 한 번 쳐요. 바꾸어 한 뒤 "다 했어요"를 누르세요.'),
          ]],
        wrap: ['"오늘 문장에서 바뀐 낱말은 어느 자리에 있었나요?" 두세 명이 문장 끝을 가리키며 말하게 한 뒤 출구 질문을 푼다. 동작 낱말을 문장 처음에 놓은 학생은 다음 시간 시작에 I can을 먼저 읽고 동작 낱말을 붙여 본다.',
          [
            { type: 'tool', tool: 'wordcards', options: { mode: 'order', shuffle: true, cards: [C('a', 'We'), C('b', 'can'), C('c', 'run.')] }, prompt: '"우리는 달릴 수 있어요"라는 뜻의 문장을 차례대로 놓아 보세요.', target: { order: ['a', 'b', 'c'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '"I can swim."은 어떤 뜻일까요?', options: ['나는 수영할 수 있어요', '나는 노래할 수 있어요'], answer: 0, difficulty: 0.15, explain: 'swim은 수영하다는 뜻이에요.' },
          ], '오늘 동작 문장 말하기는 어땠나요?'],
        ws: ['동작 문장', [
          { type: 'table', prompt: '그림 설명에 알맞은 문장을 쓰세요.', columns: ['동작', '문장'], cells: [['노래해요', 'I can ___.'], ['뛰어요', 'I can ___.'], ['읽어요', 'I can ___.'], ['앉아요', 'I can ___.']], answer: 'sing / jump / read / sit' },
          { type: 'choice', prompt: '"우리는 읽을 수 있어요"에 ○ 하세요.', options: ['We can read.', 'I can read.'], answer: 'We can read.' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: 'I ___ run.', answer: 'can' },
          { type: 'short', prompt: '내가 잘하는 동작을 I can ○○. 로 한 문장 써 보세요.' },
        ], '동작을 해 보며 I can 뒤에 오는 동작 낱말을 찾아요.', [
          { type: 'table', prompt: '동작에 알맞은 문장을 쓰세요.', columns: ['동작', '문장'], cells: [['노래해요', 'I can ___.'], ['뛰어요', 'I can ___.']], answer: 'sing / jump' },
          { type: 'choice', prompt: '"나는 읽을 수 있어요"에 ○ 하세요.', options: ['I can read.', 'I can run.'], answer: 'I can read.' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: 'I can ___.', answer: 'sing' },
          { type: 'short', prompt: '동작 낱말 하나를 쓰세요.' },
        ]],
        diff: ['문장 놓기에서 맞게 놓으면 초록 테두리가 생기고 틀리게 놓으면 카드가 되돌아와요.', '문장을 소리 내어 읽고 확인을 눌러 스스로 고쳐요. 동작과 함께 말해요.', '문장 고르기에 뜻이 비슷한 문장이 한 장 더 섞여 나와요.'],
        notes: '자주 보이는 어려움: ① I와 We를 바꾼다 → 말하는 사람이 한 명인지 여럿인지 먼저 묻는다. ② 동작 낱말을 문장 처음에 놓는다 → I can을 먼저 읽고 동작 낱말을 붙인다. ③ run과 walk를 구별하지 못한다 → 두 동작의 속도를 몸으로 비교한다. 동작 활동은 안전한 자리에서만 하고 서로 부딪히지 않게 한다.',
      }),

      // ───────────────────────── 19차시 (core) ─────────────────────────
      LN(19, S5, {
        title: '가족 낱말 짝 짓고 This is my… 로 소개하기',
        obj: '가족을 나타내는 낱말(mom, dad, sister, brother 등)을 뜻과 짝 짓고, This is my… 문장으로 가족 한 명을 소개할 수 있다.',
        ill: ['a child holding a family drawing and pointing at one figure while a speech bubble introduces her', 'This is my mom.', '가족 소개하기', [{ motif: 'house', x: 94, y: 214, color: 'peach' }, { motif: 'flower', x: 392, y: 214 }, { motif: 'star', x: 250, y: 74, s: 0.6 }]],
        intro: ['칠판에 가족 그림 카드(엄마, 아빠, 누나, 형)를 붙이고 "This is my mom."이라고 말하며 엄마 카드를 가리킨다. "my는 누구의 것이라는 뜻일까요?"라고 묻는다. 학생이 "나의요."라고 답하면 "This is my dad."로 바꾸어 한 번 더 말한다. my를 빼고 This is mom.이라고 말하는 학생에게는 "누구의 엄마?"라고 되물어 "내 엄마"를 말하게 한다. 실제 가족 사진은 쓰지 않고 그림 카드로만 한다.',
          '가족을 소개할 때는 This is my… 하고 말해요. 그림 카드를 보며 가족을 영어로 불러 봐요.',
          { tool: 'wordcards', options: { mode: 'match', shuffle: false, words: [W('mom', '엄마'), W('dad', '아빠')] }, sequence: [{ at: {} }, { at: { mom: 0, dad: 1 } }] }],
        a1: ['활동 1. 가족 낱말과 뜻 짝 짓기',
          '"뜻을 보고 소리를 내어 영어 낱말을 말해 본 뒤 알맞은 카드를 놓아요." 한 장씩 놓으며 낱말을 소리 내어 읽게 한다. sister와 brother를 헷갈리는 학생에게는 여자 가족과 남자 가족으로 나누어 말해 보게 한다. 도전 단계에는 뜻 칸에 없는 낱말이 한 장 더 있다.',
          '뜻 옆에 알맞은 가족 영어 낱말 카드를 놓아요.',
          LA('match', '뜻을 우리말로 먼저 말하고 영어 소리를 떠올려 보세요. 첫소리가 같은 카드를 찾아요.'),
          [
            MW('뜻 옆에 알맞은 가족 영어 낱말을 놓아 보세요.', [W('mom', '엄마'), W('dad', '아빠')], { d: 0.15, x: [W('baby', '아기')] }),
            MW('뜻 옆에 알맞은 가족 영어 낱말을 놓아 보세요.', [W('sister', '누나·언니'), W('brother', '형·오빠'), W('mom', '엄마')], { d: 0.2, x: [W('uncle', '삼촌')] }),
            MW('뜻 옆에 알맞은 가족 영어 낱말을 놓아 보세요.', [W('grandma', '할머니'), W('grandpa', '할아버지'), W('dad', '아빠')], { d: 0.25, x: [W('aunt', '이모·고모')],
              p: ['sister는 누구를 부르는 말일까요?', ['나보다 나이가 많은 여자 형제도 sister예요', '남자 형제만 sister예요'], 0, 'sister는 여자 형제를 부르는 말이에요. 남자 형제는 brother예요.'] }),
          ]],
        a2: ['활동 2. This is my… 소개 문장 차례대로 놓기',
          '"소개할 가족을 그림 카드에서 찾고 문장 카드를 놓아요. 놓은 뒤 카드를 가리키며 말해 봐요." my를 빼고 놓는 학생에게는 "내 가족"이라고 말하게 한 뒤 my 카드를 짚어 준다. 소개하는 문장을 짝에게 말하고 짝은 어느 가족인지 말해 준다. 짝 활동은 가족 그림 카드 두 장을 소개하는 것이다.',
          '낱말 카드를 차례대로 놓아 가족을 소개하는 문장을 만들고 카드를 가리키며 말해요.',
          LA('order', '소개하는 가족의 이름을 마지막에 놓는다고 생각하세요. 앞에서 읽는 낱말부터 차례로 놓아요.'),
          [
            OS('"이분은 우리 엄마예요"라는 뜻의 문장을 차례대로 놓아 보세요.', 'This is my mom.', { d: 0.15 }),
            OS('"이분은 우리 할머니예요"라는 뜻의 문장을 차례대로 놓아 보세요.', 'This is my grandma.', { d: 0.2 }),
            OS('"이 아이는 내 누나예요"라는 뜻의 문장을 차례대로 놓아 보세요.', 'This is my sister.', { d: 0.2 }),
            TK('짝에게 가족 그림 카드 두 장을 가리키며 This is my ○○. 라고 소개해요. 짝은 어느 가족인지 말해 줘요. 바꾸어 한 뒤 "다 했어요"를 누르세요.'),
          ]],
        wrap: ['"오늘 my는 누구의 것이라는 뜻이었나요?" 두세 명이 대답하게 한 뒤 출구 질문을 푼다. my를 빼고 말한 학생은 다음 시간 시작에 가족 그림을 가리키며 "내 가족"이라고 말한 다음 My를 붙여 본다.',
          [
            { type: 'tool', tool: 'wordcards', options: { mode: 'order', shuffle: true, cards: [C('a', 'This'), C('b', 'is'), C('c', 'my'), C('d', 'dad.')] }, prompt: '"이분은 우리 아빠예요"라는 뜻의 문장을 차례대로 놓아 보세요.', target: { order: ['a', 'b', 'c', 'd'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '"brother"는 누구를 부르는 말일까요?', options: ['형·오빠', '누나·언니'], answer: 0, difficulty: 0.2, explain: 'brother는 남자 형제를 부르는 말이에요.' },
          ], '오늘 가족 소개하기는 어땠나요?'],
        ws: ['가족 낱말', [
          { type: 'table', prompt: '가족 뜻을 보고 영어 낱말을 쓰세요.', columns: ['뜻', '영어'], cells: [['엄마', ''], ['아빠', ''], ['누나·언니', ''], ['할머니', '']], answer: 'mom / dad / sister / grandma' },
          { type: 'choice', prompt: '"이분은 우리 아빠예요"에 ○ 하세요.', options: ['This is my dad.', 'This is dad my.'], answer: 'This is my dad.' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: 'This is ___ mom.', answer: 'my' },
          { type: 'short', prompt: '가족 그림 한 명을 그리고 This is my ○○. 라고 써 보세요. (실제 이름이나 사진은 쓰지 않기)' },
        ], '가족을 우리말로 먼저 말하고 영어 낱말을 찾아요.', [
          { type: 'table', prompt: '가족 뜻을 보고 영어 낱말을 쓰세요.', columns: ['뜻', '영어'], cells: [['엄마', ''], ['아빠', '']], answer: 'mom / dad' },
          { type: 'choice', prompt: '"우리 엄마"에 ○ 하세요.', options: ['my mom', 'mom my'], answer: 'my mom' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: 'This is my ___.', answer: 'mom' },
          { type: 'short', prompt: '가족 낱말 하나를 쓰세요.' },
        ]],
        diff: ['가족 낱말 짝 짓기에서 카드가 두 장이고 맞게 놓으면 초록 테두리가 생겨요. 틀리게 놓으면 되돌아와요.', '낱말을 소리 내어 읽고 카드를 놓은 뒤 확인을 눌러 스스로 고쳐요.', '짝 짓기에 뜻 칸에 없는 가족 낱말(baby, uncle, aunt)이 한 장 섞여 나와요.'],
        notes: '자주 보이는 어려움: ① my를 빼고 말한다 → "누구의 엄마?"라고 되물어 내 가족임을 말하게 한다. ② sister와 brother를 섞는다 → 여자 가족과 남자 가족으로 나누어 말하게 한다. ③ 가족 호칭이 집마다 다르다 → 한국어 호칭과 영어 낱말이 일대일이 아님을 알려 준다. 가정 상황이 다양하므로 가족 그림 카드로만 소개하고 특정 가족 구성을 묻지 않는다.',
      }),

      // ───────────────────────── 20차시 (practice) ─────────────────────────
      LN(20, S5, {
        title: '단서 보고 빈칸에 가족 낱말 넣고 소개하는 말 듣기',
        obj: '단서에 맞는 가족 낱말을 This is my ___. 의 빈칸에 넣고, 가족을 소개하는 말을 듣고 누구인지 고를 수 있다.',
        ill: ['a child filling a blank on a family card with a word card while a friend listens closely', 'This is my ___.', '빈칸에 가족 낱말', [{ motif: 'house', x: 94, y: 214, color: 'sky' }, { motif: 'cloud', x: 396, y: 76 }, { motif: 'tree', x: 400, y: 214 }]],
        intro: ['"This is my ___."를 칠판에 쓰고 가족 그림 카드(아빠)를 보여 주며 "빈칸에는 어떤 낱말이 들어갈까요?"라고 묻는다. 학생이 "dad요."라고 하면 낱말을 넣어 문장을 읽는다. 그림 대신 자기 가족 이름을 넣으려는 학생에게는 오늘은 낱말(mom, dad…)만 쓴다고 말해 준다.',
          '그림 카드의 가족에 알맞은 낱말을 빈칸에 넣어 소개 문장을 완성해 봐요.',
          { tool: 'wordcards', options: { mode: 'fill', shuffle: false, slots: [{ id: 'f1', label: 'This is my ___.' }], cards: TX('dad', 'mom') }, sequence: [{ at: {} }, { at: { dad: 0 } }] }],
        a1: ['활동 1. 단서에 맞는 가족 낱말 넣기',
          '"단서를 읽고 빈칸에 알맞은 가족 낱말을 놓아요. 문장 전체를 소리 내어 읽어 봐요." 단서에 있는 뜻을 우리말로 먼저 말한 뒤 영어 낱말을 찾게 한다. brother와 sister를 섞는 학생에게는 남자와 여자로 나누어 말하게 한다. 문장을 읽을 때 my를 빼고 읽지 않았는지 들어 준다.',
          '단서에 맞는 낱말 카드를 빈칸에 놓아 가족 소개 문장을 완성해요.',
          LA('fill', '단서의 뜻을 우리말로 먼저 말해 보세요. 그 뜻의 영어 낱말을 찾아 빈칸에 놓아요.'),
          [
            FI('단서: 아빠. 빈칸에 알맞은 낱말을 놓아 보세요.', [{ id: 'f1', label: 'This is my ___.' }], TX('dad', 'mom', 'baby'), { f1: 'dad' }, { d: 0.15 }),
            FI('단서: 형이나 오빠. 빈칸에 알맞은 낱말을 놓아 보세요.', [{ id: 'f1', label: 'This is my ___.' }], TX('sister', 'brother', 'uncle'), { f1: 'brother' }, { d: 0.2 }),
            FI('단서: 할아버지. 빈칸에 알맞은 낱말을 놓아 보세요.', [{ id: 'f1', label: 'This is my ___.' }], TX('grandma', 'grandpa', 'aunt'), { f1: 'grandpa' }, { d: 0.25 }),
            FI('단서: 누나나 언니. 빈칸에 알맞은 낱말을 놓아 보세요.', [{ id: 'f1', label: 'This is my ___.' }], TX('brother', 'sister', 'mom'), { f1: 'sister' }, { d: 0.2 }),
          ]],
        a2: ['활동 2. 가족 소개하는 말 듣고 고르기',
          '문항마다 듣기 단추를 누르게 하고 소리가 나지 않으면 교사가 읽어 준다. "누구를 소개하는 말인지 마지막 낱말에 귀를 기울여요." 끝 낱말을 놓친 학생에게는 한 번 더 들려주며 끝 낱말을 소리 내어 따라 하게 한다. 짝 활동은 가족 그림 카드를 바꾸어 소개하는 놀이이다.',
          '듣기 단추를 눌러 소개하는 말을 듣고, 누구인지 알맞은 카드를 골라요.',
          LA('listen', '소개하는 문장의 끝 낱말이 누구를 나타내는지 생각해 보세요.'),
          [
            LS('듣기 단추를 누르고, 누구를 소개하는 말인지 골라 보세요.', 'This is my mom.', { cards: [KO('mom', '우리 엄마'), KO('dad', '우리 아빠')] }, 'mom', { x: [KO('baby', '우리 아기')] }),
            LS('듣기 단추를 누르고, 이번에는 누구를 소개하는지 골라 보세요.', 'This is my brother.', { cards: [KO('bro', '우리 형·오빠'), KO('sis', '우리 누나·언니')] }, 'bro', { d: 0.2, x: [KO('unc', '우리 삼촌')] }),
            LS('듣기 단추를 누르고, 소개하는 가족을 골라 보세요.', 'This is my grandma.', { cards: [KO('gma', '우리 할머니'), KO('gpa', '우리 할아버지')] }, 'gma', { d: 0.25, x: [KO('aun', '우리 이모·고모')] }),
            TK('가족 그림 카드를 한 장씩 서로 바꾸어 가지고, 짝에게 This is my ○○. 하고 소개해요. 짝은 어느 가족인지 말해 줘요. "다 했어요"를 누르세요.'),
          ]],
        wrap: ['"오늘 소개하는 말에서 누구인지는 어느 낱말에서 알 수 있었나요?" 두세 명이 마지막 낱말이라고 답하게 한 뒤 출구 질문을 푼다. 낱말을 틀린 학생은 다음 시간 시작에 가족 카드 앞에서 영어로 먼저 말해 본다.',
          [
            { type: 'tool', tool: 'wordcards', options: { mode: 'listen', basket: '들은 것', shuffle: false, say: 'This is my grandpa.', cards: [KO('gpa', '우리 할아버지'), KO('gma', '우리 할머니')] }, prompt: '듣기 단추를 누르고, 소개하는 가족을 골라 보세요.', target: { listen: 'gpa' }, difficulty: 0.25 },
            { type: 'choice', prompt: '"This is my sister."는 누구를 소개하는 말일까요?', options: ['누나·언니', '형·오빠'], answer: 0, difficulty: 0.2, explain: 'sister는 누나나 언니를 부르는 말이에요.' },
          ], '오늘 가족 소개 말은 어땠나요?'],
        ws: ['가족 소개 문장', [
          { type: 'table', prompt: '단서를 보고 빈칸에 알맞은 가족 낱말을 쓰세요.', columns: ['단서', '문장'], cells: [['형', 'This is my ___.'], ['할머니', 'This is my ___.'], ['아빠', 'This is my ___.']], answer: 'brother / grandma / dad' },
          { type: 'choice', prompt: '"우리 할아버지"에 ○ 하세요.', options: ['my grandpa', 'my grandma'], answer: 'my grandpa' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: 'This is my ___. (누나)', answer: 'sister' },
          { type: 'short', prompt: '가족 낱말 중 하나를 골라 This is my ○○. 문장을 써 보세요.' },
        ], '단서의 뜻을 우리말로 먼저 말하고 영어 낱말을 찾아요.', [
          { type: 'table', prompt: '단서를 보고 빈칸에 알맞은 낱말을 쓰세요.', columns: ['단서', '문장'], cells: [['아빠', 'This is my ___.'], ['엄마', 'This is my ___.']], answer: 'dad / mom' },
          { type: 'choice', prompt: '"우리 엄마"에 ○ 하세요.', options: ['my mom', 'my dad'], answer: 'my mom' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: 'This is my ___.', answer: 'dad' },
          { type: 'short', prompt: '가족 낱말 하나를 쓰세요.' },
        ]],
        diff: ['빈칸 채우기에서 카드가 세 장이고 맞게 놓으면 초록 테두리가 생겨요. 틀리게 놓으면 되돌아와요.', '단서를 읽고 카드를 놓은 뒤 확인을 눌러 스스로 고쳐요. 문장을 소리 내어 읽어요.', '듣기에 뜻 칸에 없는 가족 카드(아기, 삼촌, 이모·고모)가 한 장 섞여 나와요.'],
        notes: '자주 보이는 어려움: ① grandma와 grandpa를 섞는다 → 마지막 글자 a와 pa를 소리 내어 비교한다. ② 듣기에서 첫 낱말만 듣고 고른다 → 끝 낱말에 손을 올려 듣게 한다. ③ 자기 가족과 다르다고 말한다 → 오늘은 그림 카드 속 가족을 소개하는 것이라고 말해 준다. 학생의 가족 형태를 묻지 않는다.',
      }),

      // ───────────────────────── 21차시 (extend) ─────────────────────────
      LN(21, S5, {
        title: '친구 소개하는 낱말 짝 짓고 He·She is… 문장 만들기',
        obj: '친구의 성격을 나타내는 낱말(kind, funny, smart, strong)을 뜻과 짝 짓고, He is… 또는 She is… 문장으로 친구 한 명을 소개할 수 있다.',
        ill: ['two children standing side by side while one introduces the other with a speech bubble and a star above the friend', 'She is kind.', '친구 소개하기', [{ motif: 'star', x: 252, y: 70, s: 0.7 }, { motif: 'flower', x: 94, y: 214 }, { motif: 'tree', x: 400, y: 214 }]],
        intro: ['"My friend is kind."를 칠판에 쓰고 "친구를 소개할 때 어떤 말을 쓸 수 있을까요?"라고 묻는다. 학생이 "착하다요."라고 하면 kind를 손으로 짚고 "She is kind."로 바꾸어 읽는다. He와 She를 섞는 학생에게는 남자 친구에게는 He, 여자 친구에게는 She를 쓴다고 알려 준다. 오늘은 실제 친구 이름 대신 그림 카드 속 가상의 친구만 소개한다.',
          '친구를 소개할 때는 성격을 나타내는 낱말을 쓸 수 있어요. 낱말의 뜻을 알아보고 문장으로 말해 봐요.',
          { tool: 'wordcards', options: { mode: 'match', shuffle: false, words: [W('kind', '친절한'), W('funny', '웃기는')] }, sequence: [{ at: {} }, { at: { kind: 0, funny: 1 } }] }],
        a1: ['활동 1. 친구를 나타내는 낱말과 뜻 짝 짓기',
          '"낱말을 소리 내어 읽고 뜻을 몸짓으로 나타내 보세요. 뜻과 맞는 카드를 옆에 놓아요." kind는 도와주는 몸짓, funny는 웃는 표정, strong은 팔 힘을 주는 몸짓으로 연결해 말하게 한다. 뜻이 비슷한 smart와 clever를 섞으려는 학생에게는 이번 시간에는 smart만 쓴다고 알려 준다. 도전 단계에는 뜻 칸에 없는 낱말이 한 장 더 있다.',
          '뜻 옆에 알맞은 영어 낱말 카드를 놓아요.',
          LA('match', '뜻을 몸짓으로 나타내 보세요. 그 몸짓과 어울리는 낱말을 찾아요.'),
          [
            MW('뜻 옆에 알맞은 영어 낱말을 놓아 보세요.', [W('kind', '친절한'), W('funny', '웃기는')], { d: 0.15, x: [W('shy', '부끄러워하는')] }),
            MW('뜻 옆에 알맞은 영어 낱말을 놓아 보세요.', [W('smart', '똑똑한'), W('strong', '힘센'), W('kind', '친절한')], { d: 0.2, x: [W('tall', '키가 큰')] }),
            MW('뜻 옆에 알맞은 영어 낱말을 놓아 보세요.', [W('funny', '웃기는'), W('smart', '똑똑한'), W('strong', '힘센')], { d: 0.25, x: [W('fast', '빠른')],
              p: ['친구를 소개할 때 어떤 낱말을 쓰면 좋을까요?', ['친구의 좋은 점을 말해 주는 낱말이에요', '친구의 약점을 말하는 낱말이에요'], 0, '친구를 소개할 때는 친구의 좋은 점을 말해 주어 서로 기분이 좋아지게 해요.'] }),
          ]],
        a2: ['활동 2. He·She is… 문장 만들고 빈칸 채우기',
          '"그림 카드 속 친구를 보고 He인지 She인지 먼저 정해요. 놓은 뒤 소리 내어 읽어요." 학생이 낱말을 놓으면 짝에게 소개하는 말투로 읽게 한다. 빈칸 문항은 그림의 설명에서 단서를 찾는다. 짝 활동은 서로의 장점 한 가지를 He is… 또는 She is…로 칭찬하는 것이 아니라 그림 카드 친구를 소개하는 것으로 한다.',
          '낱말 카드를 놓아 친구를 소개하는 문장을 만들고 빈칸을 채워요.',
          LA('order', '소개할 친구가 남자인지 여자인지 먼저 정해 보세요. 문장의 처음에 오는 낱말부터 놓아요.'),
          [
            OS('"그녀는 내 친구예요"라는 뜻의 문장을 차례대로 놓아 보세요.', 'She is my friend.', { d: 0.15 }),
            OS('"그는 내 친구예요"라는 뜻의 문장을 차례대로 놓아 보세요.', 'He is my friend.', { d: 0.15 }),
            FI('단서: 친구가 길을 알려 주고 도와줘요. 빈칸에 알맞은 낱말을 놓아 보세요.', [{ id: 'f1', label: 'She is ___.' }], TX('kind', 'funny', 'strong'), { f1: 'kind' }, { d: 0.25 }),
            FI('단서: 친구가 농담을 해서 모두 웃어요. 빈칸에 알맞은 낱말을 놓아 보세요.', [{ id: 'f1', label: 'He is ___.' }], TX('smart', 'funny', 'kind'), { f1: 'funny' }, { d: 0.25 }),
            TK('그림 카드의 친구 한 명을 골라 He is… 또는 She is… 하고 소개해요. 짝은 어떤 낱말을 들었는지 말해 줘요. 바꾸어 한 뒤 "다 했어요"를 누르세요.'),
          ]],
        wrap: ['"오늘 친구를 소개하는 낱말 중 어느 낱말이 가장 마음에 들었나요?" 두세 명이 낱말을 말하게 한 뒤 출구 질문을 푼다. He와 She를 바꾼 학생은 다음 시간 시작에 남자와 여자 그림 카드를 각각 짚으며 소개하는 말을 해 본다.',
          [
            { type: 'tool', tool: 'wordcards', options: { mode: 'fill', shuffle: false, slots: [{ id: 'f1', label: 'He is ___.' }], cards: TX('strong', 'kind', 'smart') }, prompt: '단서: 친구가 무거운 가방을 번쩍 들어요. 빈칸에 알맞은 낱말을 놓아 보세요.', target: { fill: { f1: 'strong' } }, difficulty: 0.25 },
            { type: 'choice', prompt: '여자 친구를 소개할 때 쓰는 말은 무엇일까요?', options: ['She is…', 'He is…'], answer: 0, difficulty: 0.15, explain: '여자는 She, 남자는 He를 써요.' },
          ], '오늘 친구 소개하기는 어땠나요?'],
        ws: ['친구 소개 낱말', [
          { type: 'table', prompt: '낱말의 뜻을 우리말로 쓰세요.', columns: ['영어', '뜻'], cells: [['kind', ''], ['funny', ''], ['smart', ''], ['strong', '']], answer: '친절한 / 웃기는 / 똑똑한 / 힘센' },
          { type: 'choice', prompt: '남자 친구를 소개하는 문장에 ○ 하세요.', options: ['He is my friend.', 'She is my friend.'], answer: 'He is my friend.' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: 'She is ___. (친절한)', answer: 'kind' },
          { type: 'short', prompt: '그림 카드 속 친구를 하나 골라 He is… 또는 She is… 문장으로 써 보세요. (실제 친구 이름은 쓰지 않기)' },
        ], '뜻을 몸짓으로 나타내며 낱말을 소리 내어 읽어요.', [
          { type: 'table', prompt: '낱말의 뜻을 우리말로 쓰세요.', columns: ['영어', '뜻'], cells: [['kind', ''], ['funny', '']], answer: '친절한 / 웃기는' },
          { type: 'choice', prompt: '여자 친구에 ○ 하세요.', options: ['She', 'He'], answer: 'She' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: 'He is ___. (웃기는)', answer: 'funny' },
          { type: 'short', prompt: '친구를 나타내는 낱말 하나를 쓰세요.' },
        ]],
        diff: ['낱말 짝 짓기에서 카드가 두 장이고 맞게 놓으면 초록 테두리가 생겨요. 틀리게 놓으면 되돌아와요.', '낱말을 소리 내어 읽고 카드를 놓은 뒤 확인을 눌러 스스로 고쳐요.', '짝 짓기에 뜻 칸에 없는 낱말(shy, tall, fast)이 한 장 섞여 나와요.'],
        notes: '자주 보이는 어려움: ① He와 She를 바꾼다 → 그림 카드의 사람이 남자인지 여자인지 먼저 말하게 한다. ② 낱말이 사람의 겉모습이라고 생각한다 → kind, funny는 성격이라고 알려 준다. ③ 실제 친구를 평가하려 한다 → 오늘은 그림 카드 친구만 소개하며 서로를 평가하지 않는다고 약속한다. 친구의 약점을 말하는 낱말은 쓰지 않는다.',
      }),

      // ───────────────────────── 22차시 (core) ─────────────────────────
      LN(22, S5, {
        title: '색깔 낱말 짝 짓고 큰·작은 색깔 사물 말하기',
        obj: '색깔 낱말을 뜻과 짝 짓고, 크기와 색깔을 함께 넣어 It is a big red ball. 같은 문장을 차례대로 놓을 수 있다.',
        ill: ['a big red ball and a small blue ball placed side by side on a table with colored crayons beside them', 'a big red ball', '색과 크기로 말하기', [{ motif: 'ball', x: 92, y: 208, s: 1.0 }, { motif: 'ball', x: 392, y: 214, s: 0.6 }, { motif: 'star', x: 250, y: 74, s: 0.6 }]],
        intro: ['큰 빨간 공과 작은 파란 공을 보여 주며 "두 공은 무엇이 다른가요?"라고 묻는다. 학생이 "색깔이랑 크기요."라고 답하면 "big red ball", "small blue ball"을 한 낱말씩 천천히 읽어 준다. 색깔만 말하는 학생에게는 크기도 함께 말해 보게 한다. 영어에서는 크기 낱말이 색깔 낱말보다 앞에 오는 경우가 많다고 알려 준다.',
          '물건은 색깔과 크기로 설명할 수 있어요. 두 공을 영어로 말해 봐요.',
          { tool: 'wordcards', options: { mode: 'match', shuffle: false, words: [W('red', '빨간색'), W('blue', '파란색')] }, sequence: [{ at: {} }, { at: { red: 0, blue: 1 } }] }],
        a1: ['활동 1. 색깔 낱말과 뜻 짝 짓기',
          '"색깔을 가리키며 영어로 말해 보고 알맞은 카드를 놓아요." 교실 물건의 색깔을 가리키며 같이 말한다. yellow와 green을 헷갈리는 학생에게는 노란 물건과 초록 물건을 찾아 비교한다. 도전 단계에는 뜻 칸에 없는 색이 한 장 더 있다.',
          '뜻 옆에 알맞은 색깔 영어 낱말 카드를 놓아요.',
          LA('match', '색깔을 우리말로 먼저 말해 보세요. 교실에서 그 색의 물건을 하나 찾아 영어를 떠올려요.'),
          [
            MW('뜻 옆에 알맞은 색깔 낱말을 놓아 보세요.', [W('red', '빨간색'), W('blue', '파란색')], { d: 0.15, x: [W('pink', '분홍색')] }),
            MW('뜻 옆에 알맞은 색깔 낱말을 놓아 보세요.', [W('yellow', '노란색'), W('green', '초록색'), W('red', '빨간색')], { d: 0.2, x: [W('black', '검은색')] }),
            MW('뜻 옆에 알맞은 색깔 낱말을 놓아 보세요.', [W('orange', '주황색'), W('purple', '보라색'), W('blue', '파란색')], { d: 0.25, x: [W('brown', '갈색')],
              p: ['orange는 과일 이름이기도 할까요?', ['네, 색 이름과 과일 이름이 같아요', '아니요, 색깔만 뜻해요'], 0, 'orange는 주황색이기도 하고 오렌지이기도 해요. 문장 속에서 뜻을 정해요.'] }),
          ]],
        a2: ['활동 2. 크기와 색깔을 넣어 사물 문장 놓기',
          '"문장은 It is a로 시작하고 크기, 색깔, 물건 이름 순서로 놓아요. 놓은 뒤 물건을 가리키며 말해 봐요." 크기 낱말과 색깔 낱말을 바꾸어 놓은 학생에게는 두 낱말을 손으로 각각 가리키며 순서를 말하게 한다. 짝 활동은 교실 물건 하나를 골라 색깔을 넣어 말하는 것이다.',
          '낱말 카드를 차례대로 놓아 색깔과 크기를 말하는 문장을 만들어요.',
          LA('order', '문장의 첫 부분 It is a를 먼저 놓고, 크기 낱말과 색깔 낱말, 물건 이름 순서로 놓아 보세요.'),
          [
            OS('"그것은 빨간 공이에요"라는 뜻의 문장을 차례대로 놓아 보세요.', 'It is a red ball.', { d: 0.2 }),
            OS('"그것은 큰 가방이에요"라는 뜻의 문장을 차례대로 놓아 보세요.', 'It is a big bag.', { d: 0.2 }),
            OS('"그것은 작은 파란 책이에요"라는 뜻의 문장을 차례대로 놓아 보세요.', 'It is a small blue book.', { d: 0.3,
              p: ['크기 낱말과 색깔 낱말 중 어느 쪽이 먼저 올까요?', ['크기 낱말이 먼저 와요', '색깔 낱말이 먼저 와요'], 0, 'small blue book처럼 크기 낱말이 먼저 오고 색깔 낱말이 그 뒤에 와요.'] }),
            TK('짝과 번갈아 교실 물건 하나를 골라 색깔(또는 크기와 색깔)을 넣어 It is a ○○. 라고 말해요. 짝은 어떤 물건인지 맞혀 봐요. 바꾸어 한 뒤 "다 했어요"를 누르세요.'),
          ]],
        wrap: ['"오늘 크기와 색깔 낱말은 어떤 순서로 놓았나요?" 두세 명이 big red ball처럼 말하게 한 뒤 출구 질문을 푼다. 순서를 바꾼 학생은 다음 시간 시작에 big과 red 카드를 손으로 놓으며 크기를 먼저 말해 본다.',
          [
            { type: 'tool', tool: 'wordcards', options: { mode: 'order', shuffle: true, cards: [C('a', 'It'), C('b', 'is'), C('c', 'a'), C('d', 'blue'), C('e', 'cup.')] }, prompt: '"그것은 파란 컵이에요"라는 뜻의 문장을 차례대로 놓아 보세요.', target: { order: ['a', 'b', 'c', 'd', 'e'] }, difficulty: 0.25 },
            { type: 'choice', prompt: '"yellow"는 어떤 색일까요?', options: ['노란색', '초록색'], answer: 0, difficulty: 0.15, explain: 'yellow는 노란색이에요.' },
          ], '오늘 색과 크기로 말하기는 어땠나요?'],
        ws: ['색깔과 크기', [
          { type: 'table', prompt: '색깔 뜻을 보고 영어 낱말을 쓰세요.', columns: ['뜻', '영어'], cells: [['빨간색', ''], ['파란색', ''], ['노란색', ''], ['초록색', '']], answer: 'red / blue / yellow / green' },
          { type: 'choice', prompt: '"그것은 큰 가방이에요"에 ○ 하세요.', options: ['It is a big bag.', 'It is a bag big.'], answer: 'It is a big bag.' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: 'It is a ___ ball. (빨간)', answer: 'red' },
          { type: 'short', prompt: '교실에서 색깔이 있는 물건 하나를 찾아 It is a ○○. 문장으로 써 보세요.' },
        ], '색깔을 가리키며 영어로 말하고 크기 낱말을 앞에 붙여 말해요.', [
          { type: 'table', prompt: '색깔 뜻을 보고 영어 낱말을 쓰세요.', columns: ['뜻', '영어'], cells: [['빨간색', ''], ['파란색', '']], answer: 'red / blue' },
          { type: 'choice', prompt: '"그것은 빨간 공이에요"에 ○ 하세요.', options: ['It is a red ball.', 'It is a blue ball.'], answer: 'It is a red ball.' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: 'It is a ___ bag. (큰)', answer: 'big' },
          { type: 'short', prompt: '색깔 낱말 하나를 쓰세요.' },
        ]],
        diff: ['색깔 짝 짓기에서 카드가 두 장이고 맞게 놓으면 초록 테두리가 생겨요. 틀리게 놓으면 되돌아와요.', '색깔 낱말을 소리 내어 읽고 카드를 놓은 뒤 확인을 눌러 스스로 고쳐요.', '짝 짓기에 뜻 칸에 없는 색(pink, black, brown)이 한 장 섞이고 문장은 낱말이 다섯 개까지 길어져요.'],
        notes: '자주 보이는 어려움: ① 색깔 낱말과 크기 낱말의 순서를 바꾼다 → 크기를 먼저 말한다는 것을 손으로 짚으며 반복한다. ② yellow와 green을 소리로 구별하지 못한다 → 교실 물건을 직접 찾아 말해 보게 한다. ③ orange를 색 이름과 과일 이름 중 하나로만 안다 → 문장 속에서 뜻을 정한다고 알려 준다. 색깔 구별이 어려운 학생이 있으면 물건 이름을 함께 말해 주고 색깔 이름 외우기를 강요하지 않는다.',
      }),

      // ───────────────────────── 23차시 (practice) ─────────────────────────
      LN(23, S5, {
        title: '크기 말과 색깔 말 나누고 두 낱말 넣어 문장 말하기',
        obj: '크기를 나타내는 낱말과 색깔을 나타내는 낱말을 나누고, 두 낱말을 모두 넣어 사물을 설명하는 문장을 차례대로 놓을 수 있다.',
        ill: ['two baskets labeled with a ruler picture and a paint palette picture, with word cards being sorted into them', 'big / red', '크기 말 · 색깔 말', [{ motif: 'leaf', x: 94, y: 86 }, { motif: 'apple', x: 392, y: 208, s: 0.9 }, { motif: 'flower', x: 252, y: 216 }]],
        intro: ['"big, red, small, green"을 칠판에 쓰고 "이 낱말 중에서 크기를 말하는 낱말은 무엇이고 색깔을 말하는 낱말은 무엇일까요?"라고 묻는다. 학생이 "big, small은 크기고 red, green은 색깔이요."라고 하면 두 무리로 칠판을 나눈다. 두 무리로 나누지 못하는 학생에게는 크기와 색깔 모두 물건을 설명하는 낱말이지만 말하는 내용이 다르다고 알려 준다.',
          '물건을 설명하는 낱말에는 크기를 말하는 낱말과 색깔을 말하는 낱말이 있어요. 칠판의 낱말을 두 무리로 나누어 봐요.',
          { tool: 'wordcards', options: { mode: 'sort', shuffle: false, slots: [{ id: 'size', label: '크기 말' }, { id: 'color', label: '색깔 말' }], cards: [C('big', 'big'), C('red', 'red')] }, sequence: [{ at: {} }, { at: { big: 0, red: 1 } }] }],
        a1: ['활동 1. 크기 말과 색깔 말로 나누기',
          '"낱말의 뜻을 우리말로 말해 보고 크기를 말하면 크기 칸에, 색깔을 말하면 색깔 칸에 놓아요." 낱말 뜻을 모르면 짝에게 물어보게 한다. long이나 short처럼 크기와 비슷한 길이 낱말은 크기 칸에 놓아도 된다고 알려 준다. 도전 단계에는 두 칸에 모두 맞지 않는 낱말이 한 장 섞여 있다.',
          '낱말 카드를 크기 말과 색깔 말 두 칸으로 나눠 놓아요.',
          LA('sort', '낱말의 뜻을 우리말로 먼저 말해 보세요. 크기를 말하는지 색깔을 말하는지 생각해요.'),
          [
            SO('낱말 카드를 크기 말과 색깔 말로 나눠 보세요.', [{ id: 'size', label: '크기 말' }, { id: 'color', label: '색깔 말' }], [C('big', 'big'), C('red', 'red'), C('small', 'small'), C('blue', 'blue')], { size: ['big', 'small'], color: ['red', 'blue'] }, { d: 0.15, x: [C('run', 'run')] }),
            SO('낱말 카드를 크기 말과 색깔 말로 나눠 보세요.', [{ id: 'size', label: '크기 말' }, { id: 'color', label: '색깔 말' }], [C('long', 'long'), C('green', 'green'), C('tall', 'tall'), C('yellow', 'yellow')], { size: ['long', 'tall'], color: ['green', 'yellow'] }, { d: 0.2, x: [C('sing', 'sing')] }),
            SO('낱말 카드를 크기 말과 색깔 말로 나눠 보세요. 색깔 말이 하나 더 많아요.', [{ id: 'size', label: '크기 말' }, { id: 'color', label: '색깔 말' }], [C('small', 'small'), C('pink', 'pink'), C('orange', 'orange'), C('purple', 'purple')], { size: ['small'], color: ['pink', 'orange', 'purple'] }, { d: 0.25, x: [C('jump', 'jump')],
              p: ['long과 tall은 크기를 말하는 낱말일까요?', ['네, 길이와 키를 말하는 크기 말이에요', '아니요, 색깔 말이에요'], 0, 'long은 길다, tall은 키가 크다는 뜻이라 크기를 말하는 낱말이에요.'] }),
          ]],
        a2: ['활동 2. 크기와 색깔을 모두 넣어 문장 놓기',
          '"문장 안에서 크기 낱말과 색깔 낱말이 어디에 놓이는지 생각해 보고 차례대로 놓아요." 한 문장을 만든 뒤 물건 하나를 골라 같은 모양으로 말하게 한다. 빈칸 문항은 단서의 크기를 찾아 빈칸에 넣는다. 짝 활동은 그림 속 물건 하나를 서로 설명하고 맞히는 것이다.',
          '낱말 카드를 놓고 빈칸을 채워 크기와 색깔을 모두 말하는 문장을 만들어요.',
          LA('order', '크기 낱말이 먼저, 색깔 낱말이 그다음, 물건 이름이 마지막이라는 것을 떠올려 보세요.'),
          [
            OS('"그것은 작은 초록 나뭇잎이에요"라는 뜻의 문장을 차례대로 놓아 보세요.', 'It is a small green leaf.', { d: 0.25 }),
            OS('"그것은 큰 빨간 사과예요"라는 뜻의 문장을 차례대로 놓아 보세요.', 'It is a big red apple.', { d: 0.25 }),
            FI('단서: 아주 작은 파란 가방이에요. 빈칸에 알맞은 낱말을 놓아 보세요.', [{ id: 'f1', label: 'It is a ___ blue bag.' }], TX('small', 'big', 'long'), { f1: 'small' }, { d: 0.25 }),
            TK('짝과 번갈아 그림 속 물건 하나를 골라 크기와 색깔을 넣어 It is a ○○ ○○ ○○. 라고 말해요. 짝은 어떤 물건인지 맞혀 봐요. 바꾸어 한 뒤 "다 했어요"를 누르세요.'),
          ]],
        wrap: ['"오늘 크기 말과 색깔 말 가운데 어느 쪽이 먼저 나왔나요?" 두세 명이 크기가 먼저라고 답하게 한 뒤 출구 질문을 푼다. 두 낱말을 바꾸어 놓은 학생은 다음 시간 시작에 big과 red 카드를 나란히 놓고 읽어 본다.',
          [
            { type: 'tool', tool: 'wordcards', options: { mode: 'sort', shuffle: true, slots: [{ id: 'size', label: '크기 말' }, { id: 'color', label: '색깔 말' }], cards: [C('tall', 'tall'), C('white', 'white')] }, prompt: '낱말 카드를 크기 말과 색깔 말로 나눠 보세요.', target: { sort: { size: ['tall'], color: ['white'] } }, difficulty: 0.2 },
            { type: 'choice', prompt: '"a small green leaf"에서 크기를 말하는 낱말은 무엇일까요?', options: ['small', 'green'], answer: 0, difficulty: 0.2, explain: 'small은 크기, green은 색깔을 말해요.' },
          ], '오늘 크기와 색깔 말은 어땠나요?'],
        ws: ['크기 말과 색깔 말', [
          { type: 'table', prompt: '낱말을 크기 또는 색깔로 나누어 쓰세요.', columns: ['낱말', '크기 / 색깔'], cells: [['big', ''], ['red', ''], ['small', ''], ['blue', '']], answer: '크기 / 색깔 / 크기 / 색깔' },
          { type: 'choice', prompt: '"그것은 큰 빨간 사과예요"에 ○ 하세요.', options: ['It is a big red apple.', 'It is a red big apple.'], answer: 'It is a big red apple.' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: 'It is a small ___ leaf. (초록)', answer: 'green' },
          { type: 'short', prompt: '그림 속 물건을 크기와 색깔로 설명하는 문장을 It is a ○○ ○○ ○○. 모양으로 써 보세요.' },
        ], '낱말의 뜻을 우리말로 말한 뒤 크기를 먼저, 색깔을 다음에 놓아요.', [
          { type: 'table', prompt: '낱말을 크기 또는 색깔로 나누어 쓰세요.', columns: ['낱말', '크기 / 색깔'], cells: [['big', ''], ['red', '']], answer: '크기 / 색깔' },
          { type: 'choice', prompt: '색깔을 말하는 낱말에 ○ 하세요.', options: ['red', 'big'], answer: 'red' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: 'It is a ___ red apple. (큰)', answer: 'big' },
          { type: 'short', prompt: '색깔 낱말 하나를 쓰세요.' },
        ]],
        diff: ['나누기에서 카드가 네 장이고 맞게 놓으면 초록 테두리가 생겨요. 틀리게 놓으면 되돌아와요.', '낱말의 뜻을 말해 보고 카드를 놓은 뒤 확인을 눌러 스스로 고쳐요.', '나누기에 두 칸에 모두 맞지 않는 동작 낱말이 한 장 섞이고 문장은 여섯 낱말로 길어져요.'],
        notes: '자주 보이는 어려움: ① long과 tall을 크기가 아니라 다른 종류로 본다 → 사물이 얼마나 긴지·큰지 말하는 낱말은 크기 말이라고 알려 준다. ② 문장에서 두 낱말 순서를 바꾼다 → 크기를 먼저, 색깔을 다음에 말한다고 반복한다. ③ 낱말 뜻을 몰라 찍는다 → 짝에게 물어보거나 소리를 들어 보게 한다. 같은 낱말 놓기 활동이 길어지지 않게 짝 활동에서 실제 물건으로 바꾼다.',
      }),

      // ───────────────────────── 24차시 (core) ─────────────────────────
      LN(24, S6, {
        title: '동작 카드 보고 동작 낱말 만들고 명령 문장 놓기',
        obj: '동작 카드를 보고 알파벳 카드로 동작 낱말을 만들고, 낱말 카드를 놓아 짧은 명령 문장을 만들 수 있다.',
        ill: ['a child holding action cards of sitting, clapping and hopping while arranging letter tiles below them', 'Clap your hands.', '동작 카드와 명령 문장', [{ motif: 'star', x: 94, y: 86, s: 0.7 }, { motif: 'bird', x: 392, y: 84 }, { motif: 'tree', x: 400, y: 214 }]],
        intro: ['손뼉 치는 동작 카드를 보여 주며 "친구에게 이 동작을 하라고 영어로 말하려면 어떻게 말할까요?"라고 묻는다. 학생이 "Clap!"이라고 하면 "Clap your hands."라고 문장을 넓혀 읽어 준다. 동작 낱말만 말하는 학생에게는 짧은 명령은 동작 낱말만으로도 되지만 공손하게 말할 때는 your hands를 붙인다고 알려 준다.',
          '동작 카드를 보고 친구에게 그 동작을 하라고 영어로 말해 봐요. 낱말을 만들고 문장도 만들 거예요.',
          { tool: 'wordcards', options: { mode: 'order', shuffle: false, cards: [C('a', 'Clap'), C('b', 'your'), C('c', 'hands.')] }, sequence: [{ at: {} }, { at: { a: 0, b: 1, c: 2 } }] }],
        a1: ['활동 1. 동작 카드의 낱말을 알파벳으로 만들기',
          '"동작 카드를 보고 낱말 듣기 단추를 눌러 소리를 들어요. 들은 소리를 알파벳 카드로 만들어요." 낱말을 끊어 읽으며 글자를 하나씩 놓게 한다. 모양이 비슷한 낱말 sit와 sip을 섞는 학생에게는 마지막 소리를 한 번 더 들려준다. 소리가 나지 않으면 교사가 낱말을 읽어 준다.',
          '동작 카드의 뜻을 보고 알파벳 카드를 놓아 동작 낱말을 완성해요.',
          LSP('낱말을 끊어 천천히 읽어 보세요. 처음 소리부터 차례로 알맞은 글자를 놓아요.'),
          [
            SPL('"앉아요" 동작 카드를 보고 동작 낱말을 만들어 보세요.', 'sit', '앉아요', null, ['p'], { d: 0.2 }),
            SPL('"달려요" 동작 카드를 보고 동작 낱말을 만들어 보세요.', 'run', '달려요', null, ['n'], { d: 0.2 }),
            SPL('"깡충 뛰어요" 동작 카드를 보고 동작 낱말을 만들어 보세요.', 'hop', '깡충 뛰어요', null, ['b'], { d: 0.2 }),
            SPL('"손뼉을 쳐요" 동작 카드를 보고 동작 낱말을 만들어 보세요.', 'clap', '손뼉을 쳐요', null, ['t'], { d: 0.25,
              p: ['clap은 몇 글자일까요?', ['네 글자요', '세 글자요'], 0, 'c, l, a, p 네 글자예요. 소리를 끊어 읽으며 글자를 세어 봐요.'] }),
          ]],
        a2: ['활동 2. 동작 낱말로 명령 문장 만들기',
          '"동작 낱말이 문장의 맨 앞에 와요. 놓은 뒤 동작을 하며 말해 봐요." 명령하는 말은 부드럽게 말하는 연습으로 한다고 알려 준다. 낱말 순서를 우리말처럼 놓는 학생에게는 동작 낱말을 먼저 놓고 your 카드를 뒤에 놓게 한다. 짝 활동은 한 사람이 동작 카드를 보여 주면 다른 사람이 명령 문장을 말하는 놀이이다.',
          '낱말 카드를 차례대로 놓아 짧은 명령 문장을 만들고 동작과 함께 말해요.',
          LA('order', '동작을 먼저 해 보세요. 문장은 그 동작 낱말부터 시작해요.'),
          [
            OS('"손뼉을 치세요"라는 뜻의 문장을 차례대로 놓아 보세요.', 'Clap your hands.', { d: 0.2 }),
            OS('"코를 만져 보세요"라는 뜻의 문장을 차례대로 놓아 보세요.', 'Touch your nose.', { d: 0.2 }),
            OS('"깡충 뛰세요"라는 뜻의 문장을 차례대로 놓아 보세요.', 'Hop on one foot.', { d: 0.25 }),
            TK('짝과 번갈아 동작 카드를 한 장씩 보여 주고, 짝이 Clap your hands. 처럼 명령 문장을 말해요. 말한 문장대로 동작도 해 봐요. 바꾸어 한 뒤 "다 했어요"를 누르세요.'),
          ]],
        wrap: ['"오늘 명령 문장은 어떤 낱말로 시작했나요?" 두세 명이 동작 낱말을 말하게 한 뒤 출구 질문을 푼다. 명령 문장에서 동작 낱말을 마지막에 놓은 학생은 다음 시간 시작에 동작을 먼저 해 보고 그 낱말을 첫 자리에 놓아 본다.',
          [
            { type: 'tool', tool: 'wordcards', options: { mode: 'spell', word: 'jump', ko: '뛰어요', extra: ['n'] }, prompt: '"뛰어요" 동작 카드를 보고 동작 낱말을 만들어 보세요.', target: { spell: 'jump' }, difficulty: 0.3 },
            { type: 'choice', prompt: '"Touch your nose."는 어떻게 하라는 말일까요?', options: ['코를 만져요', '손뼉을 쳐요'], answer: 0, difficulty: 0.15, explain: 'Touch는 만지다, nose는 코예요.' },
          ], '오늘 명령 문장 만들기는 어땠나요?'],
        ws: ['동작 카드와 명령', [
          { type: 'table', prompt: '동작 뜻을 보고 영어 낱말을 쓰세요.', columns: ['뜻', '영어'], cells: [['앉아요', ''], ['달려요', ''], ['깡충 뛰어요', ''], ['손뼉을 쳐요', '']], answer: 'sit / run / hop / clap' },
          { type: 'choice', prompt: '"손뼉을 치세요"에 ○ 하세요.', options: ['Clap your hands.', 'Your clap hands.'], answer: 'Clap your hands.' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: '___ your nose. (만져 보세요)', answer: 'Touch' },
          { type: 'short', prompt: '친구에게 해 보라고 하고 싶은 동작을 영어 명령 문장으로 하나 써 보세요.' },
        ], '동작을 직접 해 보며 낱말을 끊어 읽고 글자를 찾아요.', [
          { type: 'table', prompt: '동작 뜻을 보고 영어 낱말을 쓰세요.', columns: ['뜻', '영어'], cells: [['앉아요', ''], ['달려요', '']], answer: 'sit / run' },
          { type: 'choice', prompt: '"손뼉을 치세요"에 ○ 하세요.', options: ['Clap your hands.', 'Touch your nose.'], answer: 'Clap your hands.' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: '___ your hands.', answer: 'Clap' },
          { type: 'short', prompt: '동작 낱말 하나를 쓰세요.' },
        ]],
        diff: ['낱말 만들기에서 알파벳 카드를 맞게 놓으면 초록 테두리가 생겨요. 문장 놓기는 카드가 세 장이에요.', '동작을 해 보며 카드를 놓은 뒤 확인을 눌러 스스로 고쳐요. 문장은 소리 내어 읽어요.', '낱말 만들기에 모양이 닮은 글자가 섞이고 문장은 낱말이 네 개로 길어져요.'],
        notes: '자주 보이는 어려움: ① 동작 낱말을 문장 맨 끝에 놓는다 → 동작을 먼저 하고 낱말을 먼저 말하게 한다. ② sit와 sip처럼 끝소리가 다른 낱말을 섞는다 → 끝 글자를 소리 내어 읽어 비교한다. ③ 명령 문장을 거칠게 말한다 → 친구에게 부드럽게 말하는 연습이라고 일러 준다. 몸을 쓰는 동작은 안전한 자리에서 한다.',
      }),

      // ───────────────────────── 25차시 (practice) ─────────────────────────
      LN(25, S6, {
        title: 'Please로 부드럽게 말하는 지시 빈칸 채우고 동작 낱말 쓰기',
        obj: 'Please를 넣어 공손하게 말하는 명령 문장의 빈칸을 채우고, 알파벳 카드로 동작 낱말을 완성할 수 있다.',
        ill: ['a child holding a door for a friend with a polite speech bubble that includes a small heart shape', 'Please open the door.', '공손하게 말하기', [{ motif: 'house', x: 94, y: 214, color: 'sky' }, { motif: 'flower', x: 392, y: 214 }, { motif: 'cloud', x: 250, y: 70, s: 0.7 }]],
        intro: ['"Open the door."와 "Please open the door."를 차례로 읽어 주고 "어느 말이 더 부드럽게 들리나요?"라고 묻는다. 학생이 "please가 있는 말이요."라고 답하면 please는 "부탁해요"라는 뜻이라고 알려 준다. please를 넣으면 꼭 길게 말해야 한다고 생각하는 학생에게는 짧은 문장 앞에 붙이기만 하면 된다고 시범을 보인다.',
          '부탁할 때는 Please를 붙이면 말이 부드러워져요. 두 말을 비교해서 들어 봐요.',
          { tool: 'wordcards', options: { mode: 'fill', shuffle: false, slots: [{ id: 'f1', label: 'Please ___ the door.' }], cards: TX('open', 'close') }, sequence: [{ at: {} }, { at: { open: 0 } }] }],
        a1: ['활동 1. Please 문장 빈칸에 동작 낱말 넣기',
          '"뜻을 읽고 알맞은 동작 낱말을 빈칸에 놓아요. 문장 전체를 부탁하는 말투로 읽어요." Open과 close의 뜻을 몸짓으로 확인한다. 낱말을 놓은 뒤에는 짝에게 말하고 짝은 그 동작을 해 준다. 도전 단계에는 뜻이 맞지 않는 낱말도 함께 있으니 뜻을 먼저 말하게 한다.',
          '뜻에 맞는 동작 낱말을 빈칸에 놓아 Please 문장을 완성해요.',
          LA('fill', '뜻을 읽고 동작을 해 보세요. 그 동작을 나타내는 낱말을 빈칸에 놓아 부탁하는 말투로 읽어요.'),
          [
            FI('"문을 닫아 주세요"라는 뜻이 되도록 낱말을 골라 보세요.', [{ id: 'f1', label: 'Please ___ the door.' }], TX('open', 'close', 'kick'), { f1: 'close' }, { d: 0.2 }),
            FI('"손을 들어 주세요"라는 뜻이 되도록 낱말을 골라 보세요.', [{ id: 'f1', label: 'Please ___ your hand.' }], TX('wash', 'raise', 'clap'), { f1: 'raise' }, { d: 0.2 }),
            FI('"여기 앉아 주세요"라는 뜻이 되도록 낱말을 골라 보세요.', [{ id: 'f1', label: 'Please ___ here.' }], TX('sit', 'run', 'jump'), { f1: 'sit' }, { d: 0.25 }),
            FI('"창문을 열어 주세요"라는 뜻이 되도록 낱말을 골라 보세요.', [{ id: 'f1', label: 'Please ___ the window.' }], TX('open', 'close', 'touch'), { f1: 'open' }, { d: 0.25 }),
          ]],
        a2: ['활동 2. 동작 낱말을 알파벳으로 쓰기',
          '"뜻을 읽고 낱말 듣기 단추를 눌러 소리를 들어요. 알파벳 카드를 놓아 낱말을 만들어요." 만든 낱말을 Please와 함께 문장으로 말해 보게 한다. 낱말을 소리 내어 읽지 않는 학생에게는 낱말 듣기를 한 번 더 누르게 한다. 짝 활동은 부탁하는 말과 고마워하는 말(Thank you.)을 번갈아 하는 것이다.',
          '뜻을 읽고 알파벳 카드를 놓아 동작 낱말을 완성해요.',
          LSP('낱말을 천천히 끊어 읽어 보세요. 처음 소리부터 차례로 알맞은 글자를 놓아요.'),
          [
            SPL('"멈춰 주세요"라는 뜻의 동작 낱말을 만들어 보세요.', 'stop', '멈춰요', null, ['b'], { d: 0.3 }),
            SPL('"걸어 주세요"라는 뜻의 동작 낱말을 만들어 보세요.', 'walk', '걸어요', null, ['r'], { d: 0.3 }),
            SPL('"읽어 주세요"라는 뜻의 동작 낱말을 만들어 보세요.', 'read', '읽어요', null, ['p'], { d: 0.25 }),
            TK('짝과 번갈아 Please ○○. 하고 부탁해요. 부탁을 들은 사람은 동작을 하고 Thank you. 하고 말해요. 바꾸어 한 뒤 "다 했어요"를 누르세요.'),
          ]],
        wrap: ['"오늘 Please는 어떤 말투를 만들어 주었나요?" 두세 명이 부드럽다고 답하게 한 뒤 출구 질문을 푼다. 낱말을 틀린 학생은 다음 시간 시작에 동작을 해 보며 낱말을 소리 내어 말한다.',
          [
            { type: 'tool', tool: 'wordcards', options: { mode: 'fill', shuffle: false, slots: [{ id: 'f1', label: 'Please ___ up.' }], cards: TX('stand', 'sit', 'clap') }, prompt: '"일어나 주세요"라는 뜻이 되도록 낱말을 골라 보세요.', target: { fill: { f1: 'stand' } }, difficulty: 0.2 },
            { type: 'choice', prompt: '"Please"를 붙이면 어떤 말이 될까요?', options: ['부드럽게 부탁하는 말', '화내는 말'], answer: 0, difficulty: 0.15, explain: 'Please는 부탁할 때 붙이는 말이라 부드럽게 들려요.' },
          ], '오늘 부드럽게 말하기는 어땠나요?'],
        ws: ['Please 문장', [
          { type: 'table', prompt: '뜻을 보고 빈칸에 알맞은 동작 낱말을 쓰세요.', columns: ['뜻', '문장'], cells: [['문을 닫아 주세요', 'Please ___ the door.'], ['손을 들어 주세요', 'Please ___ your hand.'], ['여기 앉아 주세요', 'Please ___ here.']], answer: 'close / raise / sit' },
          { type: 'choice', prompt: '부탁하는 말투의 문장에 ○ 하세요.', options: ['Please sit down.', 'Sit down now!'], answer: 'Please sit down.' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: '___ open the window.', answer: 'Please' },
          { type: 'short', prompt: '친구에게 부탁하고 싶은 일을 Please ○○. 로 써 보세요.' },
        ], '동작을 해 보며 낱말을 찾고 Please를 붙여 소리 내어 읽어요.', [
          { type: 'table', prompt: '뜻을 보고 빈칸에 알맞은 낱말을 쓰세요.', columns: ['뜻', '문장'], cells: [['문을 닫아 주세요', 'Please ___ the door.'], ['여기 앉아 주세요', 'Please ___ here.']], answer: 'close / sit' },
          { type: 'choice', prompt: '부드럽게 부탁하는 말에 ○ 하세요.', options: ['Please sit down.', 'Sit down!'], answer: 'Please sit down.' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: 'Please ___ down.', answer: 'sit' },
          { type: 'short', prompt: '부탁하는 낱말 하나를 쓰세요.' },
        ]],
        diff: ['빈칸 채우기에서 낱말 카드가 세 장이고 맞게 놓으면 초록 테두리가 생겨요. 틀리게 놓으면 되돌아와요.', '문장을 소리 내어 읽고 확인을 눌러 스스로 고쳐요. 동작을 해 보며 확인해요.', '낱말 쓰기에 모양이 닮은 글자가 섞이고 네 글자 낱말이 나와요.'],
        notes: '자주 보이는 어려움: ① open과 close를 바꾸어 놓는다 → 문과 창문을 열고 닫는 동작을 하며 낱말을 말한다. ② Please를 문장 끝에 붙인다 → 이번 시간에는 문장 앞에 붙이는 연습만 한다고 알려 준다. ③ 낱말 철자가 헷갈린다 → 낱말 듣기를 다시 누르게 하고 글자를 하나씩 짚는다. 부탁을 들어주는 쪽도 Thank you.를 말하는 습관을 함께 가르친다.',
      }),

      // ───────────────────────── 26차시 (core) ─────────────────────────
      LN(26, S6, {
        title: 'First·Then·Last로 순서 있는 행동 문장 놓기',
        obj: '일이 일어나는 순서를 First, Then, Last로 나타내며 세 가지 행동 문장을 차례대로 놓고 말할 수 있다.',
        ill: ['three panels in a row showing a child washing hands, eating lunch and brushing teeth with the numbers one, two and three above', 'First, wash. Then, eat.', '순서 있는 행동', [{ motif: 'house', x: 94, y: 214, color: 'peach' }, { motif: 'star', x: 250, y: 74, s: 0.6 }, { motif: 'tree', x: 400, y: 214 }]],
        intro: ['"점심 먹기 전에 먼저 무엇을 하고 그다음에는 무엇을 하나요?"라고 묻는다. 학생이 "손 씻고 밥 먹어요."라고 하면 "First, wash your hands. Then, eat lunch."를 칠판에 쓰고 First와 Then에 손뼉을 한 번씩 친다. 순서를 말하지 않고 한꺼번에 말하는 학생에게는 손가락으로 하나, 둘, 셋을 세며 한 가지씩 말하게 한다.',
          '일에는 순서가 있어요. 먼저, 그다음, 마지막으로 할 일을 영어로 말해 봐요.',
          { tool: 'wordcards', options: { mode: 'order', shuffle: false, cards: [C('f', 'First, wash your hands.'), C('t', 'Then, eat lunch.')] }, sequence: [{ at: {} }, { at: { f: 0, t: 1 } }] }],
        a1: ['활동 1. 순서에 맞게 행동 문장 놓기',
          '"First가 붙은 문장이 먼저, Then이 붙은 문장이 그다음, Last가 붙은 문장이 마지막이에요. 소리 내어 읽으며 놓아요." 순서 낱말을 보지 않고 우리말 뜻만 보고 놓는 학생에게는 낱말 카드 맨 앞의 First, Then, Last를 손으로 짚게 한다. 놓은 뒤에는 짝에게 세 문장을 이어서 말한다.',
          '행동 문장 카드를 먼저, 그다음, 마지막 순서로 놓아요.',
          LA('order', '순서를 나타내는 First, Then, Last 낱말을 먼저 찾아 보세요. 그 낱말을 따라 순서대로 놓아요.'),
          [
            OR('점심 전에 하는 일을 순서대로 놓아 보세요.', [C('l', 'Last, brush your teeth.'), C('f', 'First, wash your hands.'), C('t', 'Then, eat lunch.')], ['f', 't', 'l'], { d: 0.2 }),
            OR('책 읽을 때 하는 일을 순서대로 놓아 보세요.', [C('t', 'Then, read it.'), C('f', 'First, open your book.'), C('l', 'Last, close your book.')], ['f', 't', 'l'], { d: 0.25 }),
            OR('교실에 들어갈 때 하는 일을 순서대로 놓아 보세요.', [C('l', 'Last, sit down.'), C('t', 'Then, go in.'), C('f', 'First, take off your hat.')], ['f', 't', 'l'], { d: 0.25,
              p: ['First, Then, Last는 무엇을 알려 줄까요?', ['일이 일어나는 순서를 알려 줘요', '물건의 색깔을 알려 줘요'], 0, 'First는 먼저, Then은 그다음, Last는 마지막이라는 순서 낱말이에요.'] }),
          ]],
        a2: ['활동 2. 순서 낱말 빈칸에 넣기',
          '"그림의 순서를 보고 빈칸에 First, Then, Last를 알맞게 넣어요. 문장을 읽으며 순서가 자연스러운지 들어 봐요." Then과 Last를 바꾸어 놓는 학생에게는 일이 끝나는 마지막 장면부터 찾아 보게 한다. 짝 활동은 오늘 아침에 한 일 세 가지를 순서대로 말하는 것이다.',
          '빈칸에 순서 낱말 카드를 넣어 행동 이야기를 완성해요.',
          LA('fill', '그림 속 일이 일어나는 차례를 생각해 보세요. 가장 먼저 하는 일에는 첫째 낱말이 들어가요.'),
          [
            FI('책을 읽는 이야기예요. 빈칸에 알맞은 순서 낱말을 놓아 보세요.', [{ id: 's1', label: '___, open the book.' }, { id: 's2', label: '___, read it.' }, { id: 's3', label: '___, close the book.' }], TX('First', 'Then', 'Last'), { s1: 'First', s2: 'Then', s3: 'Last' }, { d: 0.25 }),
            FI('이를 닦는 이야기예요. 빈칸에 알맞은 순서 낱말을 놓아 보세요.', [{ id: 's1', label: '___, take your brush.' }, { id: 's2', label: '___, brush your teeth.' }, { id: 's3', label: '___, wash your mouth.' }], TX('First', 'Then', 'Last'), { s1: 'First', s2: 'Then', s3: 'Last' }, { d: 0.3 }),
            FI('운동장에 나가는 이야기예요. 빈칸에 알맞은 순서 낱말을 놓아 보세요.', [{ id: 's1', label: '___, put on your shoes.' }, { id: 's2', label: '___, go outside.' }, { id: 's3', label: '___, play with a ball.' }], TX('First', 'Then', 'Last'), { s1: 'First', s2: 'Then', s3: 'Last' }, { d: 0.3 }),
            TK('짝과 번갈아 오늘 아침에 한 일 세 가지를 First, Then, Last로 말해요. 짝은 순서 낱말을 하나라도 빠뜨렸는지 들어 줘요. 바꾸어 한 뒤 "다 했어요"를 누르세요.'),
          ]],
        wrap: ['"오늘 가장 먼저 하는 일에는 어떤 낱말을 붙였나요?" 두세 명이 First를 말하게 한 뒤 출구 질문을 푼다. 순서를 틀린 학생은 다음 시간 시작에 일 세 가지를 손가락 하나, 둘, 셋으로 세며 다시 말해 본다.',
          [
            { type: 'tool', tool: 'wordcards', options: { mode: 'order', shuffle: true, cards: [C('f', 'First, wake up.'), C('t', 'Then, wash your face.'), C('l', 'Last, eat breakfast.')] }, prompt: '아침에 하는 일을 순서대로 놓아 보세요.', target: { order: ['f', 't', 'l'] }, difficulty: 0.25 },
            { type: 'choice', prompt: '"Last"는 무슨 뜻일까요?', options: ['마지막으로', '먼저'], answer: 0, difficulty: 0.15, explain: 'Last는 마지막으로라는 뜻이에요.' },
          ], '오늘 순서 있는 행동 말하기는 어땠나요?'],
        ws: ['먼저·그다음·마지막', [
          { type: 'table', prompt: '순서 낱말의 뜻을 우리말로 쓰세요.', columns: ['영어', '뜻'], cells: [['First', ''], ['Then', ''], ['Last', '']], answer: '먼저 / 그다음 / 마지막으로' },
          { type: 'choice', prompt: '순서가 바른 것에 ○ 하세요.', options: ['First, wash. Then, eat. Last, brush.', 'Last, wash. First, eat. Then, brush.'], answer: 'First, wash. Then, eat. Last, brush.' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: '___, open your book.', answer: 'First' },
          { type: 'short', prompt: '오늘 아침에 한 일 세 가지를 First, Then, Last로 시작해 써 보세요.' },
        ], '일을 손가락으로 하나, 둘, 셋 세며 순서 낱말을 붙여요.', [
          { type: 'table', prompt: '순서 낱말의 뜻을 우리말로 쓰세요.', columns: ['영어', '뜻'], cells: [['First', ''], ['Last', '']], answer: '먼저 / 마지막으로' },
          { type: 'choice', prompt: '가장 먼저 하는 일에 붙이는 낱말에 ○ 하세요.', options: ['First', 'Last'], answer: 'First' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: '___, sit down.', answer: 'Last' },
          { type: 'short', prompt: '순서 낱말 하나를 쓰세요.' },
        ]],
        diff: ['순서 놓기에서 카드가 세 장이고 맞게 놓으면 초록 테두리가 생겨요. 틀리게 놓으면 되돌아와요.', '순서 낱말을 짚으며 카드를 놓은 뒤 확인을 눌러 스스로 고쳐요. 문장을 이어 읽어요.', '빈칸 채우기에서 빈칸이 세 개이고 문장 길이가 길어져요.'],
        notes: '자주 보이는 어려움: ① Then과 Last를 바꾸어 놓는다 → 마지막 장면부터 찾아 Last를 정하게 한다. ② 순서 낱말을 읽지 않고 우리말 뜻으로만 놓는다 → 카드 맨 앞 낱말을 손으로 짚게 한다. ③ 순서 낱말 뒤의 쉼표를 읽지 않는다 → 쉼표에서 잠깐 쉬어 읽게 한다. 아침에 한 일 같은 개인 이야기는 학생이 원하는 만큼만 말하게 한다.',
      }),

      // ───────────────────────── 27차시 (wrap) ─────────────────────────
      LN(27, S6, {
        title: '질문에 맞는 대답 짝 짓고 순서 있는 행동으로 단원 마무리하기',
        obj: '단원에서 배운 소개·가진 것·좋아하는 것·묘사 문장을 질문과 짝 짓고, 순서 있는 행동 세 가지를 차례대로 놓아 말할 수 있다.',
        ill: ['a child standing in front of a board of question cards and answer cards with a small ribbon on the last card', 'Tell me about it.', '말하기 단원 마무리', [{ motif: 'star', x: 94, y: 86, s: 0.7 }, { motif: 'book', x: 392, y: 208 }, { motif: 'tree', x: 252, y: 214 }]],
        intro: ['"이번 단원에서 영어로 말해 본 것 중에 가장 기억에 남는 문장은 무엇인가요?"라고 묻고 두세 명의 대답을 듣는다. 학생이 말한 문장을 칠판에 쓰고 "이 문장은 무엇을 말하는 문장이었나요?"라고 묻는다. 기억나는 문장이 없다고 하는 학생에게는 칠판에 붙인 이전 시간의 카드(I like…, It is…)를 가리키며 소리 내어 읽어 보게 한다.',
          '이번 단원에서 배운 말을 모아서 한 번 더 말해 봐요. 가장 기억에 남는 문장이 무엇인지 생각해 봐요.',
          { tool: 'wordcards', options: { mode: 'match', shuffle: false, slots: [{ id: 'q', label: 'What do you like?' }], cards: [C('a', 'I like apples.')] }, sequence: [{ at: {} }, { at: { a: 0 } }] }],
        a1: ['활동 1. 질문과 알맞은 대답 짝 짓기',
          '"질문의 뜻을 우리말로 말해 본 뒤 알맞은 대답 카드를 놓아요. 놓은 뒤에는 짝과 번갈아 질문과 대답을 말해요." What과 Who처럼 첫 낱말이 다른 질문은 무엇을 묻는지 먼저 말하게 한다. 도전 단계에는 어느 질문에도 맞지 않는 대답이 한 장 섞여 있다. 한 번에 다 하지 못하면 질문 하나씩 짝과 말해 본다.',
          '질문 옆에 알맞은 대답 카드를 놓고, 짝과 번갈아 말해요.',
          LA('match', '질문이 무엇을 묻는지 우리말로 먼저 말해 보세요. 그 내용을 말하는 대답을 찾아요.'),
          [
            MT('질문 옆에 알맞은 대답을 놓아 보세요.', [{ id: 'who', label: 'What is this?' }, { id: 'weather', label: 'How is the weather?' }, { id: 'name', label: 'What is your name?' }], [C('w', 'It is windy.'), C('t', 'This is a ball.'), C('n', 'I am Joon.')], { who: 't', weather: 'w', name: 'n' }, { d: 0.25, x: [C('x', 'I like fish.')] }),
            MT('질문 옆에 알맞은 대답을 놓아 보세요.', [{ id: 'can', label: 'What can you do?' }, { id: 'have', label: 'What do you have?' }, { id: 'like', label: 'What do you like?' }], [C('a', 'I can sing.'), C('b', 'I have a cat.'), C('c', 'I like apples.')], { can: 'a', have: 'b', like: 'c' }, { d: 0.25, x: [C('x', 'It is cold.')] }),
            MT('질문 옆에 알맞은 대답을 놓아 보세요.', [{ id: 'who', label: 'Who is she?' }, { id: 'color', label: 'What color is it?' }, { id: 'size', label: 'Is it big?' }], [C('a', 'She is my sister.'), C('b', 'It is red.'), C('c', 'No, it is small.')], { who: 'a', color: 'b', size: 'c' }, { d: 0.3, x: [C('x', 'Stand up.')],
              p: ['질문의 첫 낱말은 무엇을 알려 줄까요?', ['무엇을 묻는지 알려 줘요', '대답의 길이를 알려 줘요'], 0, 'Who는 사람, What은 물건이나 내용, How는 방법이나 모양을 묻는다는 단서가 돼요.'] }),
          ]],
        a2: ['활동 2. 순서 있는 행동 세 가지 놓고 말하기',
          '"First, Then, Last를 길잡이로 삼아 순서대로 놓고 이어서 읽어요. 오늘은 조금 길어진 이야기를 말해 볼 거예요." 순서가 자연스러운지 짝에게 읽어 주고 확인받는다. 순서 낱말을 읽지 않고 놓는 학생에게는 카드 맨 앞 낱말을 짚게 한다. 마지막 짝 활동에서는 단원에서 가장 마음에 드는 문장 하나를 고르고 서로에게 말한다.',
          '행동 문장 카드를 순서대로 놓고, 이어서 소리 내어 말해요.',
          LA('order', '순서를 나타내는 낱말 First, Then, Last를 먼저 찾아 보세요. 그 낱말이 가리키는 순서대로 놓아요.'),
          [
            OR('운동장에서 놀기 전에 하는 일을 순서대로 놓아 보세요.', [C('t', 'Then, go outside.'), C('l', 'Last, play with a ball.'), C('f', 'First, put on your shoes.')], ['f', 't', 'l'], { d: 0.25 }),
            OR('책가방을 챙기는 일을 순서대로 놓아 보세요.', [C('l', 'Last, close your bag.'), C('f', 'First, open your bag.'), C('t', 'Then, put in a book.')], ['f', 't', 'l'], { d: 0.25 }),
            OR('그림을 그리는 일을 순서대로 놓아 보세요.', [C('f', 'First, take a pencil.'), C('l', 'Last, color it red.'), C('t', 'Then, draw a ball.')], ['f', 't', 'l'], { d: 0.3 }),
            TK('단원에서 가장 마음에 드는 영어 문장 하나를 고르고, 짝에게 소리 내어 말해 줘요. 짝은 그 문장을 따라 말해요. 바꾸어 한 뒤 "다 했어요"를 누르세요.'),
          ]],
        wrap: ['"이번 단원에서 영어로 말하기가 가장 자신 있는 것은 무엇이었나요?" 두세 명이 박자, 소개, 지시, 순서 가운데 하나를 말하게 한 뒤 출구 질문을 푼다. 자신 없는 학생은 다음 시간에 짝과 한 문장을 더 말해 본다.',
          [
            { type: 'tool', tool: 'wordcards', options: { mode: 'match', shuffle: true, slots: [{ id: 'q1', label: 'How old are you?' }, { id: 'q2', label: 'What do you have?' }], cards: [C('a1', 'I am ten.'), C('a2', 'I have a bag.')] }, prompt: '두 질문에 어울리는 대답을 놓아 보세요.', target: { match: { q1: 'a1', q2: 'a2' } }, difficulty: 0.25 },
            { type: 'choice', prompt: '"First, wash. Then, eat."에서 먼저 하는 일은 무엇일까요?', options: ['씻기', '먹기'], answer: 0, difficulty: 0.15, explain: 'First가 붙은 일이 먼저예요.' },
          ], '이번 단원에서 영어로 말하기는 어땠나요?'],
        ws: ['말하기 단원 점검', [
          { type: 'table', prompt: '질문과 알맞은 대답의 번호를 쓰세요.', columns: ['질문', '대답 번호'], cells: [['What can you do?', ''], ['What do you have?', ''], ['What do you like?', '']], answer: '① I can sing. ② I have a cat. ③ I like apples. 에 맞게 1, 2, 3' },
          { type: 'choice', prompt: '순서가 바른 것에 ○ 하세요.', options: ['First, put on shoes. Then, go out. Last, play.', 'Last, put on shoes. Then, play. First, go out.'], answer: 'First, put on shoes. Then, go out. Last, play.' },
          { type: 'check', prompt: '할 수 있는 것에 ✓ 하세요.', options: ['박자에 맞춰 짧은 어구를 읽을 수 있어요.', '나와 가족을 영어로 소개할 수 있어요.', '크기와 색깔로 물건을 설명할 수 있어요.', 'First, Then, Last로 순서를 말할 수 있어요.'] },
          { type: 'short', prompt: '이번 단원에서 배운 영어 문장 가운데 가장 마음에 드는 문장을 써 보세요.' },
        ], '질문의 뜻을 우리말로 먼저 말하고 대답을 찾으며 순서 낱말을 짚어요.', [
          { type: 'table', prompt: '질문과 알맞은 대답의 번호를 쓰세요.', columns: ['질문', '대답 번호'], cells: [['What can you do?', ''], ['What do you like?', '']], answer: '1, 2' },
          { type: 'choice', prompt: '가장 먼저 하는 일에 붙이는 낱말에 ○ 하세요.', options: ['First', 'Last'], answer: 'First' },
          { type: 'check', prompt: '할 수 있는 것에 ✓ 하세요.', options: ['나를 영어로 소개할 수 있어요.', '순서를 영어로 말할 수 있어요.'] },
          { type: 'short', prompt: '배운 문장 하나를 써 보세요.' },
        ]],
        diff: ['질문 짝 짓기에서 카드가 두세 장이고 맞게 놓으면 초록 테두리가 생겨요. 틀리게 놓으면 되돌아와요.', '질문을 읽고 대답을 골라 놓은 뒤 확인을 눌러 스스로 고쳐요. 순서 문장은 이어서 읽어요.', '짝 짓기에 어느 질문에도 맞지 않는 대답이 한 장 섞이고 질문이 세 개로 늘어요.'],
        notes: '자주 보이는 어려움: ① 질문의 뜻을 몰라 아무 대답이나 놓는다 → What, Who, How의 뜻을 우리말로 먼저 말하게 한다. ② 순서 낱말을 읽지 않는다 → First, Then, Last 카드 맨 앞 낱말을 짚게 한다. ③ 단원을 정리하는 시간에 자신감이 떨어진다 → 잘한 것 한 가지를 먼저 찾아 칭찬하고 부족한 것은 다음 시간 짝 활동으로 이어 간다. 이 차시는 평가가 아니라 단원 점검이다.',
      }),

    ],
  });
})();
