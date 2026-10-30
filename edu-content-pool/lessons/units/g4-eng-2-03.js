/* 4학년 영어 2학기 3단원. 말하기 — 기분 말하기와 감정 문장(1~5차시) → 학교생활·개인 정보 묻고 답하기(6~9차시) → 짝 대화 핵심 답하기(10~12차시)
 * → 실수해도 다시 말하기·인사와 차례(13~16차시) → 감정 카드 쓰기(17~18차시) → 스티커·그림 카드·몸짓으로 뜻 전하기(19~25차시) → 예의 있게 반응하기(26~27차시).
 * 낱말·문장·대화는 모두 이 단원을 위해 새로 지은 것이다(교과서 지문·노래 가사·챈트를 옮기지 않았다). 학생 화면 영어는 낱말이나 짧은 한두 문장이고 안내는 한국어다.
 * 소리: '듣기' 단추가 있는 문항은 기기가 영어 음성(speechSynthesis)으로 **누를 때만** 읽는다(자동 재생 없음). 소리가 나지 않는 기기에서는
 * 교사가 문항 번호를 말하고 직접 읽어 준다. 말하기 문항은 카드를 놓아 문장을 확인한 뒤 짝에게 소리 내어 말하는 것으로 이어진다.
 * 표기 약속: 이름은 가명(Mina, Jun)만 쓴다. 짧은 형태(I am)는 줄이지 않고 그대로 적는다.
 */
(function () {
  const UNIT = 'g4-eng-2-03';
  const CAT = 'g4-영어-2학기-3';
  const U = { grade: 4, subject: '영어', unitTitle: '3. 말하기' };
  const S7 = '[4영02-07]'; const S8 = '[4영02-08]'; const S9 = '[4영02-09]'; const S10 = '[4영02-10]';
  const FORMATS = ['chromebook', 'projector', 'print'];
  const PROMPT = (what) => `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`;
  const SC = (t1, t2, motifs) => ({ viewBox: [480, 270], layers: [
    { motif: 'sun', x: 412, y: 54, s: 0.75 }, { motif: 'cloud', x: 110, y: 50 }, { motif: 'hills', y: 208 },
    ...(motifs || [{ motif: 'tree', x: 84, y: 214 }, { motif: 'flower', x: 396, y: 218 }, { motif: 'bird', x: 250, y: 72 }]),
    { motif: 'text', x: 240, y: 122, text: t1, size: 22 },
    { motif: 'text', x: 240, y: 160, text: t2, size: 18 },
  ] });
  const MOOD = (prompt) => ({ type: 'mood', prompt });
  const LV = (o) => ({ easy: Object.assign({}, o, { live: true, instant: true }), base: Object.assign({}, o), challenge: Object.assign({}, o) });
  const LA = (mode, hint1, x) => LV(Object.assign({ mode, hint1 }, mode === 'order' || mode === 'match' || mode === 'fill' || mode === 'sort' ? {} : { shuffle: false }, mode === 'pick' ? { basket: '고른 카드' } : {}, mode === 'listen' ? { basket: '들은 것' } : {}, x));
  const LB = { easy: { mode: 'branch' }, base: { mode: 'branch' }, challenge: { mode: 'branch' } };
  const LF = (hint1) => ({ easy: { mode: 'flip', front: 'en', hint1 }, base: { mode: 'flip', hint1 }, challenge: { mode: 'flip', hint1 } });
  const LSP = (hint1) => ({ easy: { mode: 'spell', hint1 }, base: { mode: 'spell', hint1 }, challenge: { mode: 'spell', hint1 } });
  const C = (id, text, x) => Object.assign({ id, text: text == null ? id : text }, x);
  const NC = (a) => a.map((c) => (typeof c === 'string' ? C(c) : c));
  const W = (en, ko, motif) => Object.assign({ en, ko }, motif ? { motif } : {});
  const withX = (src, x) => (src.words ? Object.assign({}, src, { words: [...src.words, ...x] }) : Object.assign({}, src, { cards: [...src.cards, ...NC(x)] }));
  const base = (o, prompt, target, src) => {
    const it = { prompt, toolOptions: src, target, difficulty: o.d == null ? 0.15 : o.d };
    if (o.h) it.hints = o.h;
    if (o.p) { it.predict = { q: o.p[0], options: o.p[1], answer: o.p[2] }; it.conclude = o.p[3]; }
    if (o.x) it.levels = { challenge: { toolOptions: withX(src, o.x) } };
    return it;
  };
  const PK = (prompt, cards, ans, o = {}) => base(o, prompt, { pick: ans }, { mode: 'pick', cards: NC(cards) });
  const PL = (prompt, say, cards, ans, o = {}) => base(o, prompt, { pick: ans }, { mode: 'pick', listen: true, say, basket: '들은 것', cards: NC(cards) });
  const OR = (prompt, order, o = {}) => base(o, prompt, { order }, { mode: 'order', cards: NC(order) });
  const FI = (prompt, labels, cards, ans, o = {}) => base(o, prompt, { fill: Object.fromEntries(labels.map((l, i) => [i, l]).filter(([, l]) => l.includes('___')).map(([i], k) => ['s' + (i + 1), ans[k]])) }, { mode: 'fill', slots: labels.map((label, i) => ({ id: 's' + (i + 1), label })), cards: NC(cards) });
  const FL = (prompt, say, labels, cards, ans, o = {}) => { const it = FI(prompt, labels, cards, ans, o); it.toolOptions = Object.assign({ listen: true, say }, it.toolOptions); return it; };
  const MT = (prompt, pairs, o = {}) => base(o, prompt, { match: Object.fromEntries(pairs.map((p, i) => ['m' + (i + 1), p[1]])) }, { mode: 'match', slots: pairs.map((p, i) => ({ id: 'm' + (i + 1), label: p[0] })), cards: NC(pairs.map((p) => p[1])) });
  const SO = (prompt, groups, o = {}) => base(o, prompt, { sort: Object.fromEntries(groups.map((g, i) => ['g' + (i + 1), g[1]])) }, { mode: 'sort', slots: groups.map((g, i) => ({ id: 'g' + (i + 1), label: g[0] })), cards: NC(groups.flatMap((g) => g[1])) });
  const MW = (prompt, words, o = {}) => base(o, prompt, { match: Object.fromEntries(words.map((w) => [w.en, w.en])) }, Object.assign({ mode: 'match', words }, o.rev ? { reverse: true } : {}));
  const LS = (prompt, say, words, ans, o = {}) => base(o, prompt, { listen: ans }, { mode: 'listen', say, words });
  const FP = (prompt, words, flip, o = {}) => base(o, prompt, { flip }, { mode: 'flip', words });
  const SPL = (prompt, word, ko, motif, extra, o = {}) => base(o, prompt, { spell: word }, Object.assign({ mode: 'spell', word, ko }, motif ? { motif } : {}, extra ? { extra } : {}));
  const TALK = (prompt) => ({ prompt, free: true, talk: true });
  // 감정 상황 고르기(emotion branch): choices = [[말, 결과, 틀린 까닭?], …], ans = 맞는 보기 번호(0부터)
  const BR = (prompt, who, situation, feeling, choices, ans, o = {}) => ({ prompt, toolOptions: { who, situation, feeling, choices: choices.map((c, i) => Object.assign({ id: 'abcd'[i], text: c[0], result: c[1] }, c[2] ? { why: c[2] } : {})) }, target: { choice: 'abcd'[ans] }, difficulty: o.d == null ? 0.2 : o.d });
  const ACT = (id, title, minutes, tool, teacher, task, levels, items) => ({ id, title, minutes, tool, teacher, task, levels, items });
  // 차시 한 개: c = { std, t, o, ill:[그림 설명, 윗줄, 아랫줄], iT, iS, demo, mins(도입 분), a:[[제목, 교사, 과제, 교구, 단계옵션, 문항들], …2개], wT, ex, wsT, ws, note, ch, nt }
  const easyOf = (items) => items.map((w) => (w.type === 'choice' && w.options.length > 2 ? Object.assign({}, w, { options: [w.answer, w.options.find((x) => x !== w.answer)] }) : w));
  const lesson = (n, c) => {
    const im = c.mins || 6; const main = 33 - im; const m1 = 13;
    const [x1, x2] = c.a;
    return Object.assign({ id: `${UNIT}-${String(n).padStart(2, '0')}`, schema: 'edu-lesson.v1', catalog: { unit: CAT, lesson: n } }, U, {
      title: c.t, objective: c.o, standards: [c.std], minutes: 40, formats: FORMATS,
      illustration: { prompt: PROMPT(c.ill[0]), scene: SC(c.ill[1], c.ill[2]) },
      stages: [
        { id: 'intro', title: '도입', minutes: im, teacher: c.iT, student: c.iS, demo: c.demo },
        { id: 'main', title: '전개', minutes: main, activities: [
          ACT('a1', x1[0], m1, x1[3], x1[1], x1[2], x1[4], x1[5]),
          ACT('a2', x2[0], main - m1, x2[3], x2[1], x2[2], x2[4], x2[5]),
        ] },
        { id: 'wrapup', title: '정리', minutes: 7, teacher: c.wT, exitTicket: [...c.ex, MOOD(c.mood || '오늘 말하기 활동은 어땠나요?')] },
      ],
      worksheet: { title: c.wsT, items: c.ws, easy: { note: c.note, items: easyOf(c.ws) } },
      differentiation: { easy: '카드가 줄고, 맞게 놓으면 초록 테두리가 생기며 틀리게 놓으면 카드가 되돌아와요.', base: '카드를 모두 놓은 뒤 확인을 눌러 스스로 고쳐요.', challenge: c.ch },
      teacherNotes: c.nt,
    });
  };
  const DM = (words, a) => ({ tool: 'wordcards', options: { mode: 'match', words }, sequence: [{ at: {} }, { at: a }] });

  PaperLessons.registerUnit({
    id: UNIT, schema: 'edu-unit.v1', catalogUnit: CAT,
    grade: 4, subject: '영어', unitTitle: '3. 말하기',
    flow: "단원은 \"기분 → 묻고 답하기 → 다시 말하기 → 카드와 그림으로 전하기 → 예의 있게 반응하기\" 순으로 영어 말하기를 넓힌다. 1~5차시는 표정을 보고 I am happy 같은 문장과 He is sad 같은 문장을 만들고 기분 낱말에 이유 낱말 하나를 보태어 또렷하게 말하며, 6~12차시는 학교생활과 이름·나이·사는 곳을 묻는 말과 한 문장 대답, 들은 말에서 핵심 정보 하나를 골라 답하는 것, 다시 묻고 확인하는 말을 짝과 주고받는다. 13~16차시는 틀려도 Sorry라고 말하고 다시 말하기와 인사말·차례 지키기를, 17~18차시는 본보기를 보고 짧은 감정 카드를 쓰고 소리 내어 다시 읽어 빠진 낱말을 고치는 것을 다룬다. 19~25차시는 스티커 그림과 낱말, 그림 카드, 표정과 몸짓으로 낱말이 떠오르지 않아도 뜻을 전하는 방법을 익히고, 26~27차시는 짝의 말에 짧고 예의 있게 반응하며 단원의 말하기를 한 대화로 묶어 스스로 평가한다. 소리는 누를 때만 나고, 말하기 문항은 카드를 놓은 뒤 반드시 짝에게 소리 내어 말하는 것으로 이어진다.",
    refs: {},
    lessons: [
            // ───────────────────────── 1차시 (intro) ─────────────────────────
      lesson(1, {
        std: S7, t: '표정 그림 보고 I am happy. 문장 만들기',
        o: '표정 그림을 보고 happy, sad, angry, tired 가운데 알맞은 낱말을 찾아 I am ___. 문장으로 말할 수 있다.',
        ill: ['four children showing happy, sad, angry and tired faces under one big speech bubble', 'I am happy.', '표정 보고 문장 만들기'],
        iT: '칠판에 웃는 얼굴을 그리고 "이 친구는 어떤 기분일까요?"라고 묻는다. happy라는 답이 나오면 "I am happy."를 크게 쓰고 함께 읽는다. 이어 울상을 그려 sad를 묻는다. 낱말 하나만 말하고 끝내는 학생에게는 "I am ___, 이렇게 시작하면 어떨까요?"라고 말해 앞에 I am을 붙여 말하게 한다.',
        iS: '얼굴을 보고 어떤 기분인지 우리말로 먼저 말해 봐요. 영어로는 어떻게 말할까요?',
        demo: DM([W('happy', '기쁜'), W('sad', '슬픈')], { happy: 0 }),
        a: [
          ['활동 1. 표정 설명과 기분 낱말 짝 짓기', '"표정을 설명한 글을 읽고, 알맞은 기분 낱말 카드를 놓아요." 놓은 뒤에는 낱말을 소리 내어 읽고 같은 표정을 지어 보게 한다. 입꼬리 하나만 보고 고르는 학생에게는 눈썹과 눈 모양도 함께 설명하게 한다. 도전 단계에는 비슷한 뜻의 낱말 카드가 한 장 섞여 있다.', '표정 설명 옆에 알맞은 기분 낱말 카드를 놓아요. 놓을 때마다 낱말을 읽어요.', 'wordcards',
            LA('match', '표정 설명을 읽고 같은 표정을 지어 보세요. 그 얼굴은 어떤 기분일까요?'),
            [
              MT('표정 설명에 알맞은 기분 낱말을 놓아 보세요.', [['입꼬리가 올라가고 웃어요', 'happy'], ['눈물이 나고 입꼬리가 내려가요', 'sad']], { x: ['glad'] }),
              MT('표정 설명에 알맞은 기분 낱말을 놓아 보세요.', [['눈썹이 모이고 얼굴이 빨개요', 'angry'], ['눈이 감기고 하품을 해요', 'tired']], { d: 0.2, x: ['sleepy'] }),
              MT('표정 설명 세 개에 알맞은 낱말을 놓아 보세요.', [['생일 선물을 받고 활짝 웃어요', 'happy'], ['친구와 싸워서 얼굴이 빨개져요', 'angry'], ['하루 종일 달려서 눈이 감겨요', 'tired']], { d: 0.25, x: ['sad'] }),
              MT('표정 설명 세 개에 알맞은 낱말을 놓아 보세요.', [['우산을 잃어버려서 울어요', 'sad'], ['달리기에서 일등을 해서 팔을 들어요', 'happy'], ['숙제를 마치고 눈을 비비며 앉아 있어요', 'tired']], { d: 0.3, x: ['angry'] }),
            ]],
          ['활동 2. 기분 낱말로 I am ___. 문장 완성하기', '"그림 속 친구가 되어 I am ___. 문장을 완성해요. 완성한 문장은 짝에게 소리 내어 말해요." 문장에서 I am을 빼고 낱말만 놓는 학생에게는 칠판의 문장 틀을 가리키며 한 번 더 읽게 한다. 마지막 문항은 문장 하나를 직접 골라 말해 보는 것으로 마무리한다.', '빈칸에 알맞은 기분 낱말을 놓고, 문장을 처음부터 소리 내어 읽어요.', 'wordcards',
            LA('fill', '그림 속 얼굴을 보고 기분을 먼저 말해 보세요. 빈칸을 채운 뒤에는 문장을 처음부터 읽어 보세요.'),
            [
              FI('웃는 얼굴 그림이에요. 문장을 완성해 보세요.', ['I am ___.'], ['happy', 'sad', 'tired'], ['happy'], { x: ['angry'] }),
              FI('우는 얼굴 그림이에요. 문장을 완성해 보세요.', ['I am ___.'], ['sad', 'happy', 'angry'], ['sad'], { d: 0.2, x: ['tired'] }),
              FI('두 친구의 말풍선을 완성해 보세요. (화난 얼굴, 하품하는 얼굴)', ['A: I am ___.', 'B: I am ___.'], ['angry', 'tired', 'happy'], ['angry', 'tired'], { d: 0.3 }),
              PK('기분을 문장으로 말한 것을 골라 보세요. (웃는 얼굴)', ['Happy.', 'I am happy.', 'Am happy.'], ['I am happy.'], { d: 0.3, x: ['I happy.'],
                p: ['기분을 말할 때 낱말만 말해도 문장일까요?', ['I am을 붙이면 문장이 돼요', '낱말만으로 충분해요'], 0, '기분 낱말 앞에 I am을 붙이면 누가 어떤 기분인지가 분명한 한 문장이 돼요.'] }),
            ]],
        ],
        wT: '"오늘 만든 문장 가운데 하나를 짝에게 말해 보세요." 표정과 함께 말했는지 확인한다. 낱말만 말한 학생은 다음 시간 시작에 I am을 붙여 한 번 더 말하게 한다.',
        ex: [
          { type: 'tool', tool: 'wordcards', options: { mode: 'fill', shuffle: false, slots: [{ id: 'e1', label: 'I am ___.' }], cards: NC(['tired', 'happy', 'sad']) }, prompt: '하품하는 얼굴이에요. 문장을 완성해 보세요.', target: { fill: { e1: 'tired' } }, difficulty: 0.2 },
          { type: 'choice', prompt: '"I am sad."는 어떤 기분일까요?', options: ['기뻐요', '슬퍼요', '화나요'], answer: 1, difficulty: 0.15, explain: 'sad는 슬프다는 뜻이에요.' },
        ],
        wsT: '표정 보고 기분 문장 말하기',
        ws: [
          { type: 'table', prompt: '그림의 기분 낱말을 따라 쓰고 소리 내어 읽으세요.', columns: ['표정', '기분 낱말'], cells: [['웃는 얼굴', 'happy'], ['우는 얼굴', ''], ['화난 얼굴', ''], ['하품하는 얼굴', '']], answer: 'happy / sad / angry / tired' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: 'I ___ happy.   I am ___. (우는 얼굴)', answer: 'am / sad' },
          { type: 'choice', prompt: '화난 얼굴을 보고 말하는 문장에 ○ 하세요.', options: ['I am angry.', 'I am happy.', 'I am tired.'], answer: 'I am angry.' },
          { type: 'short', prompt: '오늘 내 기분을 I am ___. 문장으로 써 보세요.' },
        ],
        note: '표정을 보고 기분 낱말을 말한 뒤 I am을 붙여요.',
        ch: '비슷한 뜻의 낱말 카드가 한 장 더 섞여 있고, 두 문장을 한꺼번에 완성해요.',
        nt: '자주 보이는 어려움: ① 감정 문장에서 I am을 빠뜨리고 낱말만 말한다 → 칠판 문장 틀을 가리키며 앞부분을 먼저 말하게 한다. ② happy와 angry의 첫 소리를 헷갈린다 → 입 모양과 표정을 함께 지어 보게 한다. ③ 낱말은 알지만 소리 내어 말하기를 부끄러워한다 → 짝에게 작은 목소리로 먼저 말하게 한다.',
      }),

      // ───────────────────────── 2차시 (practice) ─────────────────────────
      lesson(2, {
        std: S7, t: 'scared·sleepy·hungry 표정 보고 I am ___. 말하기',
        o: 'scared, sleepy, hungry, excited 표정 그림을 보고 I am ___. 문장의 낱말 순서를 맞추어 말할 수 있다.',
        ill: ['four children with scared, sleepy, hungry and excited faces holding word cards', 'I am hungry.', '새 기분 낱말'],
        iT: '"어제 배운 기분 낱말을 하나씩 말해 볼까요?" happy, sad, angry, tired를 확인한 뒤 배를 문지르는 시늉을 하며 "I am hungry."를 말한다. 학생들이 따라 하면 scared(깜짝 놀란 시늉), sleepy(하품), excited(팔 흔들기)도 몸짓과 함께 보여 준다. 뜻을 우리말로 바꾸어 외우기만 하는 학생에게는 몸짓과 영어 낱말을 함께 말하게 한다.',
        iS: '몸짓을 보고 어떤 기분인지 맞혀 봐요. 영어 낱말도 따라 말해 봐요.',
        demo: DM([W('hungry', '배고픈'), W('sleepy', '졸린')], { hungry: 0 }),
        a: [
          ['활동 1. 소리 듣고 기분 낱말 그림 고르기', '"듣기 단추를 누르고, 들은 낱말에 맞는 표정을 골라요." 소리가 나지 않으면 교사가 낱말을 읽어 준다. 고른 뒤에는 낱말을 따라 말하며 같은 표정을 지어 보게 한다. 소리가 비슷한 낱말(sleepy, scared)을 헷갈리는 학생에게는 첫소리를 천천히 말해 보게 한다.', '듣기 단추를 눌러 기분 낱말을 듣고, 알맞은 표정 카드를 골라요.', 'wordcards',
            LA('listen', '낱말의 첫소리와 길이를 떠올려 보며 표정 설명과 견주어 보세요.'),
            [
              LS('듣기 단추를 누르고, 들은 낱말에 알맞은 표정을 골라 보세요.', 'hungry', [W('hungry', '배를 문지르는 얼굴'), W('scared', '눈이 커진 얼굴')], 'hungry'),
              LS('듣기 단추를 누르고, 들은 낱말에 알맞은 표정을 골라 보세요.', 'sleepy', [W('sleepy', '하품하는 얼굴'), W('excited', '팔을 흔드는 얼굴')], 'sleepy', { d: 0.2 }),
              LS('듣기 단추를 누르고, 들은 낱말에 알맞은 표정을 골라 보세요.', 'scared', [W('scared', '눈이 커진 얼굴'), W('sleepy', '하품하는 얼굴'), W('hungry', '배를 문지르는 얼굴')], 'scared', { d: 0.25 }),
              LS('듣기 단추를 누르고, 들은 낱말에 알맞은 표정을 골라 보세요.', 'excited', [W('excited', '팔을 흔드는 얼굴'), W('scared', '눈이 커진 얼굴'), W('sleepy', '하품하는 얼굴')], 'excited', { d: 0.3 }),
            ]],
          ['활동 2. 낱말 카드를 차례대로 놓아 문장 만들기', '"카드를 순서대로 놓으면 한 문장이 돼요. 놓은 뒤 처음부터 읽어요." I와 am의 순서를 바꾸면 어색하다는 점을 소리 내어 읽으며 확인한다. 낱말 순서를 우리말처럼 두는 학생에게는 칠판 문장을 보게 하고 한 낱말씩 짚으며 읽게 한다. 도전 단계에는 쓰지 않는 카드가 섞여 있다.', '카드를 차례대로 놓아 문장을 만들고 소리 내어 읽어요.', 'wordcards',
            LA('order', '문장은 "누가", "어떤 기분이다", "기분 낱말" 순서로 이어져요. 소리 내어 읽으며 어색한 자리를 찾아보세요.'),
            [
              OR('배가 고픈 친구의 말이에요. 카드를 차례대로 놓아 문장을 만들어 보세요.', ['I', 'am', 'hungry.'], { x: ['is'] }),
              OR('졸린 친구의 말이에요. 카드를 차례대로 놓아 문장을 만들어 보세요.', ['I', 'am', 'sleepy.'], { d: 0.2, x: ['are'] }),
              OR('무서운 친구의 말이에요. 문장 앞에 말을 더해 카드를 차례대로 놓아 보세요.', ['Oh,', 'I', 'am', 'scared.'], { d: 0.3 }),
              OR('신나는 친구의 말이에요. 두 문장 카드를 차례대로 놓아 보세요.', ['I', 'am', 'excited.', 'Let us go!'], { d: 0.35, x: ['sad.'] }),
            ]],
        ],
        wT: '"오늘 새로 배운 기분 낱말 가운데 하나를 몸짓과 함께 말해 보세요." 짝이 맞히게 한다. I am의 순서를 틀린 학생은 다음 시간 시작에 카드 세 장을 직접 손으로 놓아 보게 한다.',
        ex: [
          { type: 'tool', tool: 'wordcards', options: { mode: 'order', cards: NC(['I', 'am', 'scared.']) }, prompt: '무서운 친구의 말을 카드로 만들어 보세요.', target: { order: ['I', 'am', 'scared.'] }, difficulty: 0.2 },
          { type: 'choice', prompt: '배가 고플 때 쓰는 낱말은 무엇일까요?', options: ['sleepy', 'hungry', 'excited'], answer: 1, difficulty: 0.15, explain: 'hungry는 배가 고프다는 뜻이에요.' },
        ],
        wsT: '새 기분 낱말 보고 문장 말하기',
        ws: [
          { type: 'table', prompt: '표정에 알맞은 낱말을 따라 쓰세요.', columns: ['표정', '낱말'], cells: [['배를 문지르는 얼굴', 'hungry'], ['하품하는 얼굴', ''], ['눈이 커진 얼굴', ''], ['팔을 흔드는 얼굴', '']], answer: 'hungry / sleepy / scared / excited' },
          { type: 'blank', prompt: '낱말을 순서대로 써서 문장을 만드세요.', text: '(am / sleepy / I) → ___ ___ ___.', answer: 'I am sleepy' },
          { type: 'choice', prompt: '"I am excited."는 어떤 기분일까요?', options: ['신나요', '무서워요', '졸려요'], answer: '신나요' },
          { type: 'short', prompt: '배우고 싶은 다른 기분 낱말이 있으면 우리말로 써 보세요.' },
        ],
        note: '몸짓을 먼저 하고 낱말과 문장을 말해요.',
        ch: '기분 낱말 카드가 더 섞여 있고, 문장 앞에 말을 더해 길게 만들어요.',
        nt: '자주 보이는 어려움: ① sleepy와 scared를 헷갈린다 → 첫소리를 천천히 말하고 몸짓을 같이 한다. ② I am의 순서를 바꾸어 놓는다 → 소리 내어 읽으면 어색하다는 것을 직접 들어 보게 한다. ③ excited를 happy와 같은 뜻으로만 외운다 → 팔을 흔드는 시늉으로 두 낱말의 크기 차이를 보여 준다.',
      }),

      // ───────────────────────── 3차시 (extend) ─────────────────────────
      lesson(3, {
        std: S7, t: '친구 그림 보고 He is ___. She is ___. 문장 만들기',
        o: '그림 속 친구의 표정을 보고 He is ___. 또는 She is ___. 문장을 골라 말할 수 있다.',
        ill: ['a boy and a girl showing different feelings with speech bubbles over their heads', 'She is sad.', '친구의 기분 말하기'],
        iT: '남학생 그림과 여학생 그림을 붙이고 "이 친구들은 어떤 기분일까요?"라고 묻는다. 남자 그림에는 He is, 여자 그림에는 She is를 붙여 "He is happy. She is tired."를 읽어 준다. 나에 대한 말(I am)과 다른 사람에 대한 말(He is, She is)을 같은 것으로 여기는 학생에게는 "그림 속 친구가 말하는 걸까요, 내가 설명하는 걸까요?"라고 묻는다.',
        iS: '친구의 기분을 말할 때는 어떤 말을 쓸까요? 그림을 보고 He와 She를 찾아봐요.',
        demo: { tool: 'wordcards', options: { mode: 'fill', slots: [{ id: 'd1', label: '___ is happy.' }], cards: NC(['He', 'She']) }, sequence: [{ at: {} }, { at: { He: 0 } }] },
        a: [
          ['활동 1. 그림 속 친구에 알맞은 He·She 고르기', '"남자 친구는 He, 여자 친구는 She예요. 그림을 보고 문장 앞에 알맞은 말을 놓아요." 놓은 뒤 문장을 소리 내어 읽게 한다. 이름 대신 He나 She를 쓰는 까닭을 말로 설명하게 한다. 도전 단계에는 I 카드가 섞여 있어 말하는 사람이 누구인지 생각해야 한다.', '그림 속 친구를 보고 문장 앞 빈칸에 He 또는 She를 놓아요.', 'wordcards',
            LA('fill', '그림 속 친구가 남자인지 여자인지 먼저 정한 뒤, 문장을 소리 내어 읽어 보세요.'),
            [
              FI('남자 친구가 웃고 있어요. 문장을 완성해 보세요.', ['___ is happy.'], ['He', 'She'], ['He'], { x: ['I'] }),
              FI('여자 친구가 울고 있어요. 문장을 완성해 보세요.', ['___ is sad.'], ['She', 'He'], ['She'], { d: 0.2, x: ['I'] }),
              FI('두 친구의 문장을 완성해 보세요. (남자는 졸려요, 여자는 배고파요)', ['___ is sleepy.', '___ is hungry.'], ['He', 'She'], ['He', 'She'], { d: 0.3, x: ['I'] }),
              FI('두 친구의 문장을 완성해 보세요. (여자는 무서워해요, 남자는 신나요)', ['___ is scared.', '___ is excited.'], ['She', 'He'], ['She', 'He'], { d: 0.35, x: ['I'] }),
            ]],
          ['활동 2. 친구의 기분과 이유 한 문장 잇기', '"기분 문장 뒤에 이유를 한 문장 더하면 친구에게 더 잘 전해져요." 기분 카드와 이유 카드를 짝 지을 때 이유가 그 기분과 어울리는지 소리 내어 읽으며 판단하게 한다. 이유 카드를 고르지 못하는 학생에게는 비슷한 일을 겪었을 때 자기 기분을 말해 보게 한다.', '기분 문장 옆에 알맞은 이유 문장을 놓고, 두 문장을 이어 읽어요.', 'wordcards',
            LA('match', '이유 문장을 읽고 그때 어떤 기분이 될지 떠올려 보세요.'),
            [
              MT('기분 문장에 알맞은 이유를 놓아 보세요.', [['He is happy.', 'He has a new bike.'], ['She is sad.', 'She lost her pen.']], { x: ['He has a cold.'] }),
              MT('기분 문장에 알맞은 이유를 놓아 보세요.', [['She is tired.', 'She ran a long way.'], ['He is hungry.', 'He has no lunch.']], { d: 0.25, x: ['She won a prize.'] }),
              MT('기분 문장에 알맞은 이유를 놓아 보세요.', [['She is excited.', 'It is her birthday.'], ['He is scared.', 'He hears a big noise.'], ['He is angry.', 'His friend broke his toy.']], { d: 0.35 }),
              PK('"She is happy." 뒤에 이어 말하기에 알맞은 이유를 골라 보세요.', ['She has a big cake.', 'She has a bad cold.', 'She loses her bag.'], ['She has a big cake.'], { d: 0.3 }),
            ]],
        ],
        wT: '"오늘 친구의 기분을 말하는 문장을 하나 만들어 짝에게 말해 보세요." He와 She를 알맞게 썼는지 듣는다. 이름 대신 쓰는 말을 헷갈린 학생은 다음 시간 시작에 반 친구 그림 카드로 한 번 더 연습한다.',
        ex: [
          { type: 'tool', tool: 'wordcards', options: { mode: 'fill', shuffle: false, slots: [{ id: 'e1', label: '___ is angry.' }], cards: NC(['She', 'He']) }, prompt: '여자 친구가 화가 났어요. 문장을 완성해 보세요.', target: { fill: { e1: 'She' } }, difficulty: 0.2 },
          { type: 'choice', prompt: '남자 친구의 기분을 말할 때 문장 앞에 쓰는 말은 무엇일까요?', options: ['I', 'He', 'She'], answer: 1, difficulty: 0.15, explain: '남자 친구를 가리킬 때는 He를 써요.' },
        ],
        wsT: '친구의 기분 문장 만들기',
        ws: [
          { type: 'table', prompt: '그림에 알맞은 문장 앞말을 쓰세요.', columns: ['그림', '앞말'], cells: [['웃는 남자 친구', 'He'], ['우는 여자 친구', ''], ['졸린 남자 친구', ''], ['신난 여자 친구', '']], answer: 'He / She / He / She' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '___ is sad.   ___ is hungry. (여자, 남자)', answer: 'She / He' },
          { type: 'choice', prompt: '"She is tired." 뒤에 이어 말하기에 알맞은 문장에 ○ 하세요.', options: ['She ran a long way.', 'She won a prize.', 'She has a new toy.'], answer: 'She ran a long way.' },
          { type: 'short', prompt: '가족이나 친구의 기분을 He is ___. 또는 She is ___. 로 써 보세요.' },
        ],
        note: '남자 친구는 He, 여자 친구는 She로 문장을 시작해요.',
        ch: 'I 카드가 섞여 있고, 문장 둘을 동시에 완성하거나 이유 문장까지 이어 말해요.',
        nt: '자주 보이는 어려움: ① 남의 기분을 말할 때도 I am을 쓴다 → 그림 속 친구가 말하는지 내가 설명하는지 먼저 묻는다. ② He와 She를 우리말 그/그녀와만 짝 지어 어색해한다 → 그림을 가리키며 문장을 반복해 읽게 한다. ③ 이유 문장이 기분과 맞지 않는데 고른다 → 그 일이 생겼을 때 내 기분을 먼저 말하게 한다.',
      }),
            // ───────────────────────── 4차시 (core) ─────────────────────────
      lesson(4, {
        std: S7, t: '기분 카드 뒤집어 또렷하게 말하고 이유 낱말 보태기',
        o: '기분 낱말 카드를 조건에 맞게 뒤집어 또렷하게 소리 내어 말하고, 기분 뒤에 이유 낱말 하나를 보태어 말할 수 있다.',
        ill: ['a child flipping a big mood card to show a word while friends listen with cheerful faces', 'I am happy.', '기분 말하고 이유 보태기'],
        iT: '"오늘 기분을 한 낱말로 말해 볼까요?" 두세 명에게 말하게 한 뒤 "왜 그런 기분이에요?"라고 묻고 "I am happy. I have a cake."처럼 이유 낱말을 한 개만 보태어 말해 본다. 기분을 좋다와 나쁘다 두 가지로만 말하는 학생에게는 지난 시간의 낱말 카드를 보여 주며 더 알맞은 낱말을 고르게 한다.',
        iS: '오늘 기분을 영어 낱말 하나로 말해 봐요. 왜 그런 기분인지도 한 낱말로 보태어 볼까요?',
        demo: { tool: 'wordcards', options: { mode: 'flip', words: [W('happy', '기쁜'), W('sad', '슬픈')] }, sequence: [{ up: [] }, { up: ['happy'] }] },
        a: [
          ['활동 1. 조건에 맞는 기분 카드 뒤집어 말하기', '"조건에 맞는 카드만 뒤집어 영어 낱말을 보고, 뒤집을 때마다 소리 내어 말해요." 뒤집은 낱말은 또렷하게 한 번 읽는다. 조건을 읽지 않고 아무 카드나 뒤집는 학생에게는 조건 문장을 소리 내어 다시 읽게 한다. 마지막 문항은 s로 시작하는 낱말이라는 소리 조건이라서 영어 첫소리를 먼저 떠올려야 한다.', '조건에 맞는 카드만 뒤집고, 영어 낱말을 소리 내어 말해요.', 'wordcards',
            LF('조건 문장을 먼저 읽고, 카드 앞면의 뜻을 하나씩 견주어 보세요. 조건에 맞지 않는 카드는 그대로 두어요.'),
            [
              FP('기분이 좋은 카드만 뒤집어 보세요.', [W('happy', '기쁜'), W('sad', '슬픈'), W('excited', '신나는'), W('angry', '화난')], ['happy', 'excited']),
              FP('힘이 없을 때의 기분 카드만 뒤집어 보세요.', [W('tired', '피곤한'), W('sleepy', '졸린'), W('happy', '기쁜'), W('excited', '신나는')], ['tired', 'sleepy'], { d: 0.2 }),
              FP('영어 낱말이 s 소리로 시작하는 카드만 뒤집어 보세요.', [W('sad', '슬픈'), W('sleepy', '졸린'), W('scared', '무서운'), W('happy', '기쁜')], ['sad', 'sleepy', 'scared'], { d: 0.3 }),
              FP('나쁜 기분 카드를 모두 뒤집어 보세요.', [W('angry', '화난'), W('scared', '무서운'), W('happy', '기쁜'), W('sad', '슬픈')], ['angry', 'scared', 'sad'], { d: 0.25 }),
            ]],
          ['활동 2. 기분 문장 뒤에 이유 낱말 보태기', '"기분을 말한 뒤 이유를 한 낱말로 보태면 친구가 더 잘 알아요." 문장 두 줄을 이어서 소리 내어 읽게 한다. 이유 카드가 기분과 어울리는지 소리 내어 읽으며 판단하게 하고, 어울리지 않는 이유를 고른 학생에게는 그 일이 생겼을 때 내 기분을 말해 보게 한다.', '기분 문장 옆 빈칸에 알맞은 이유 낱말을 놓고, 두 문장을 이어서 읽어요.', 'wordcards',
            LA('fill', '그림 속 일을 떠올리며 어떤 낱말이 이유가 될지 생각해 보세요. 두 문장을 이어 읽었을 때 자연스러운지 들어 보세요.'),
            [
              FI('웃는 얼굴이에요. 이유 낱말을 놓아 보세요.', ['I am happy. I have a ___.'], ['cake', 'cold', 'cough'], ['cake'], { x: ['crack'] }),
              FI('배가 고파요. 이유 낱말을 놓아 보세요.', ['I am hungry. I want ___.'], ['rice', 'bed', 'toy'], ['rice'], { d: 0.2, x: ['race'] }),
              FI('울고 있어요. 이유 낱말을 놓아 보세요.', ['I am sad. I lost my ___.'], ['pen', 'prize', 'party'], ['pen'], { d: 0.25, x: ['pan'] }),
              FI('졸리고 신나는 두 친구의 이유를 놓아 보세요.', ['I am sleepy. I need my ___.', 'I am excited. I have a new ___.'], ['bed', 'bike', 'cold'], ['bed', 'bike'], { d: 0.35 }),
            ]],
        ],
        wT: '"짝에게 오늘 기분과 이유를 한 낱말로 말해 보세요." 또렷한 목소리로 끝까지 말했는지 듣는다. 작은 목소리로 얼버무린 학생에게는 한 낱말씩 끊어서 한 번 더 말하게 한다.',
        ex: [
          { type: 'tool', tool: 'wordcards', options: { mode: 'flip', words: NC([]).concat([W('glad', '반가운'), W('angry', '화난'), W('tired', '피곤한')]) }, prompt: '기분이 좋지 않은 카드만 뒤집어 보세요.', target: { flip: ['angry', 'tired'] }, difficulty: 0.2 },
          { type: 'choice', prompt: '"I am happy. I have a cake."에서 이유를 나타내는 낱말은 무엇일까요?', options: ['happy', 'cake', 'have'], answer: 1, difficulty: 0.2, explain: '기분의 까닭이 되는 낱말은 cake예요.' },
        ],
        wsT: '기분 낱말과 이유 낱말 말하기',
        ws: [
          { type: 'table', prompt: '기분 낱말을 쓰고 이유를 한 낱말로 보태 보세요.', columns: ['기분', '이유'], cells: [['happy', 'cake'], ['hungry', ''], ['sad', ''], ['sleepy', '']], answer: '예: rice / pen / bed' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: 'I am ___. I have a new bike. (신나요)', answer: 'excited' },
          { type: 'choice', prompt: '힘이 없을 때의 기분 낱말에 ○ 하세요.', options: ['tired', 'happy', 'excited'], answer: 'tired' },
          { type: 'short', prompt: '오늘 기분과 이유를 한 낱말씩 써 보세요.' },
        ],
        note: '기분 낱말을 먼저 말하고 이유는 한 낱말만 보태요.',
        ch: '소리 조건으로 카드를 고르고, 이유 낱말을 두 문장에 한꺼번에 보태요.',
        nt: '자주 보이는 어려움: ① 기분을 좋다·나쁘다로만 말한다 → 낱말 카드를 보여 주고 더 알맞은 낱말을 고르게 한다. ② 이유 낱말이 기분과 어울리지 않는다 → 그 일이 생겼을 때 내 기분을 먼저 말하게 한다. ③ 작은 목소리로 얼버무린다 → 짝에게만 들릴 정도로 한 낱말씩 또렷하게 말하게 한다.',
      }),

      // ───────────────────────── 5차시 (practice) ─────────────────────────
      lesson(5, {
        std: S7, t: '기분 낱말 두 무리로 나누고 알파벳 카드로 말해 보기',
        o: '기분 낱말을 마음이 가벼운 낱말과 힘든 낱말로 나누고, 소리를 듣고 낱말을 만들며 또렷하게 말할 수 있다.',
        ill: ['two baskets labeled with a smiling sun and a rainy cloud while a child sorts mood word cards into them', 'happy  sad  tired', '기분 낱말 무리 짓기'],
        iT: '칠판에 해 그림과 비구름 그림을 붙이고 "기분 낱말을 어느 쪽에 붙이면 좋을까요?"라고 묻는다. happy를 해 쪽에, sad를 비구름 쪽에 붙이는 것을 시범으로 보인다. 그리고 tired를 놓을 자리를 모두 정해 보게 한다. 낱말은 정해진 하나의 자리만 있다고 생각하는 학생에게는 같은 낱말도 그날 일에 따라 기분이 다를 수 있다고 말해 준다.',
        iS: '기분 낱말을 해 쪽과 비구름 쪽으로 나눠 봐요. 같은 낱말도 오늘은 어느 쪽에 붙을까요?',
        demo: { tool: 'wordcards', options: { mode: 'sort', slots: [{ id: 'g1', label: '기분이 좋아요' }, { id: 'g2', label: '기분이 힘들어요' }], cards: NC(['happy', 'sad']) }, sequence: [{ at: {} }, { at: { happy: 0 } }] },
        a: [
          ['활동 1. 기분 낱말을 두 무리로 나누기', '"기분이 좋은 낱말은 해 칸에, 힘든 낱말은 비구름 칸에 놓고 낱말을 소리 내어 읽어요." 카드를 놓으며 낱말을 한 번씩 말하게 한다. 칸 이름을 읽지 않고 놓는 학생에게는 낱말의 뜻을 먼저 말하게 한다. 도전 단계에는 기분이 아닌 낱말 카드가 섞여 있어 기분 낱말만 골라야 한다.', '기분 낱말 카드를 알맞은 칸에 놓고, 놓을 때마다 소리 내어 읽어요.', 'wordcards',
            LA('sort', '낱말의 뜻을 우리말로 먼저 떠올려 보세요. 그 기분이 들 때 몸이 가벼운지 무거운지 생각해 보세요.'),
            [
              SO('기분 낱말을 알맞은 칸에 나누어 놓아 보세요.', [['기분이 좋아요', ['happy', 'excited']], ['기분이 힘들어요', ['sad', 'angry']]], { x: ['table'] }),
              SO('기분 낱말을 알맞은 칸에 나누어 놓아 보세요.', [['기분이 좋아요', ['glad', 'proud']], ['기분이 힘들어요', ['tired', 'scared', 'sleepy']]], { d: 0.25, x: ['pencil'] }),
              SO('기분 낱말을 알맞은 칸에 나누어 놓아 보세요.', [['기분이 좋아요', ['happy', 'excited', 'proud']], ['기분이 힘들어요', ['sad', 'angry', 'tired']]], { d: 0.3 }),
            ]],
          ['활동 2. 소리를 듣고 기분 낱말 만들기', '"듣기 단추를 눌러 낱말을 듣고, 알파벳 카드로 낱말을 만들어요. 다 만든 뒤 내 목소리로 한 번 말해요." 소리 단추는 누를 때만 소리가 난다. 소리가 나지 않으면 교사가 낱말을 읽어 준다. 글자를 빠뜨리는 학생에게는 소리를 끊어 말하며 글자를 대응시키게 한다.', '듣기 단추를 눌러 낱말을 듣고, 알파벳 카드를 놓아 낱말을 만들어요.', 'wordcards',
            LSP('낱말을 듣고 소리를 한 덩어리씩 끊어 말해 보세요. 덩어리마다 글자를 몇 개 놓을지 생각해 보세요.'),
            [
              SPL('낱말을 듣고 알파벳 카드로 만들어 보세요. 기쁜 기분이에요.', 'happy', '기쁜', null, ['k'], { d: 0.25 }),
              SPL('낱말을 듣고 알파벳 카드로 만들어 보세요. 슬픈 기분이에요.', 'sad', '슬픈', null, ['t'], { d: 0.2 }),
              SPL('낱말을 듣고 알파벳 카드로 만들어 보세요. 졸린 기분이에요.', 'sleepy', '졸린', null, ['a'], { d: 0.35 }),
              SPL('낱말을 듣고 알파벳 카드로 만들어 보세요. 화난 기분이에요.', 'angry', '화난', null, ['e'], { d: 0.3 }),
            ]],
        ],
        wT: '"해 칸에도 비구름 칸에도 놓을 수 있는 낱말이 있을까요?" 같은 낱말도 일에 따라 기분이 달라질 수 있음을 이야기한다. 낱말을 소리 없이 입모양으로만 말한 학생은 다음 시간 시작에 작은 목소리로 말해 보게 한다.',
        ex: [
          { type: 'tool', tool: 'wordcards', options: { mode: 'sort', shuffle: false, slots: [{ id: 'g1', label: '기분이 좋아요' }, { id: 'g2', label: '기분이 힘들어요' }], cards: NC(['excited', 'scared']) }, prompt: '두 낱말을 알맞은 칸에 놓아 보세요.', target: { sort: { g1: ['excited'], g2: ['scared'] } }, difficulty: 0.2 },
          { type: 'choice', prompt: '"I am proud."는 어떤 기분일까요?', options: ['자랑스러워요', '졸려요', '무서워요'], answer: 0, difficulty: 0.2, explain: 'proud는 뿌듯하고 자랑스럽다는 뜻이에요.' },
        ],
        wsT: '기분 낱말 무리 짓고 말하기',
        ws: [
          { type: 'table', prompt: '기분 낱말을 알맞은 칸에 쓰세요.', columns: ['기분이 좋아요', '기분이 힘들어요'], cells: [['happy', 'sad'], ['', ''], ['', '']], answer: '예: excited, proud / angry, tired' },
          { type: 'choice', prompt: '기분이 힘든 낱말에 ○ 하세요.', options: ['happy', 'tired', 'excited'], answer: 'tired' },
          { type: 'blank', prompt: '빈칸에 알파벳을 써서 낱말을 완성하세요.', text: 'sa_   ang_y   sle_py', answer: 'd / r / e' },
          { type: 'short', prompt: '오늘 가장 쓰고 싶은 기분 낱말 하나를 쓰고 소리 내어 읽어 보세요.' },
        ],
        note: '낱말의 뜻을 먼저 말하고 칸에 나누어요.',
        ch: '기분이 아닌 낱말 카드가 섞여 있고, 철자가 긴 기분 낱말을 만들어요.',
        nt: '자주 보이는 어려움: ① excited와 scared를 모두 나쁜 기분으로 둔다 → 두 낱말을 몸짓으로 표현하게 한다. ② 같은 낱말이 늘 같은 칸이라고 생각한다 → 같은 낱말도 일에 따라 기분이 달라질 수 있다고 말해 준다. ③ 낱말 철자 쓰기에 매달려 말하기를 잊는다 → 글자를 놓은 뒤 반드시 한 번 소리 내어 말하게 한다.',
      }),

      // ───────────────────────── 6차시 (core) ─────────────────────────
      lesson(6, {
        std: S8, t: '학교생활 궁금한 것을 묻는 말로 만들어 말하기',
        o: 'Where, What, Who로 시작하는 학교생활 질문을 낱말 카드로 만들고 묻는 말투로 말할 수 있다.',
        ill: ['children asking each other questions in front of a school building with big question mark cards', 'Where is the library?', '학교에 대해 묻기'],
        iT: '"학교에서 궁금한 것이 있으면 어떻게 물을까요?" 도서관이 어디인지 궁금한 상황을 보여 주고 "Where is the library?"를 두 번 읽어 준다. 낱말만 늘어놓은 "Library where?"와 비교하게 하여 어느 쪽이 더 자연스러운지 말해 보게 한다. 낱말만 던지는 학생에게는 "Where is ... 로 시작해 볼까요?"라고 문장 앞부분을 먼저 말하게 한다.',
        iS: '학교에서 궁금한 곳이나 사람이 있나요? 영어로는 어떻게 물을까요?',
        demo: { tool: 'wordcards', options: { mode: 'order', cards: NC(['Where', 'is', 'the', 'library?']) }, sequence: [{ at: {} }, { at: { Where: 0 } }] },
        a: [
          ['활동 1. 낱말 카드로 묻는 말 만들기', '"묻는 말은 물음 낱말로 시작하고 끝에서 목소리를 조금 올려요. 카드를 순서대로 놓은 뒤 소리 내어 읽어요." 읽을 때 끝을 올리는 것을 시범으로 보인다. 낱말을 아무렇게나 늘어놓는 학생에게는 물음 낱말 카드를 가장 앞에 두게 한다. 도전 단계에는 쓰지 않는 카드가 섞여 있다.', '카드를 차례대로 놓아 묻는 말을 만들고, 끝을 올려 소리 내어 읽어요.', 'wordcards',
            LA('order', '묻는 말은 물음 낱말로 시작해요. 소리 내어 읽으며 말이 되는 순서를 찾아보세요.'),
            [
              OR('도서관이 어디인지 묻는 말을 만들어 보세요.', ['Where', 'is', 'the', 'library?'], { x: ['are'] }),
              OR('내일 담임 선생님이 누구인지 묻는 말을 만들어 보세요.', ['Who', 'is', 'your', 'teacher?'], { d: 0.2, x: ['we'] }),
              OR('점심시간이 몇 시인지 묻는 말을 만들어 보세요.', ['What', 'time', 'is', 'lunch?'], { d: 0.3, x: ['where'] }),
              OR('좋아하는 과목이 무엇인지 묻는 말을 만들어 보세요.', ['What', 'is', 'your', 'favorite', 'subject?'], { d: 0.35 }),
            ]],
          ['활동 2. 궁금한 것에 알맞은 물음 낱말 고르기', '"무엇이 궁금한가요? 장소는 Where, 사람은 Who, 때와 물건은 What이에요." 상황 글을 읽고 알맞은 묻는 말을 고르게 한다. 물음 낱말을 외우기만 하는 학생에게는 상황의 핵심 낱말(장소, 사람, 시간)에 줄을 긋게 한다. 고른 물음은 짝에게 소리 내어 묻게 한다.', '궁금한 것에 알맞은 묻는 말을 고르고, 짝에게 소리 내어 물어요.', 'wordcards',
            LA('pick', '궁금한 것이 장소인지 사람인지 때인지 먼저 정해 보세요. 그에 맞는 물음 낱말을 찾아보세요.'),
            [
              PK('체육관이 어디인지 궁금해요. 알맞은 묻는 말을 골라 보세요.', ['Where is the gym?', 'Who is the gym?', 'What is the gym?'], ['Where is the gym?'], { x: ['Where the gym?'] }),
              PK('같은 반 친구의 이름이 궁금해요. 알맞은 묻는 말을 골라 보세요.', ['Who is he?', 'Where is he?', 'What is he?'], ['Who is he?'], { d: 0.2, x: ['Who he?'] }),
              PK('쉬는 시간이 언제인지 궁금해요. 알맞은 묻는 말을 골라 보세요.', ['What time is recess?', 'Where is recess?', 'Who is recess?'], ['What time is recess?'], { d: 0.3, x: ['What recess?'] }),
              PK('오늘 급식이 무엇인지 궁금해요. 알맞은 묻는 말을 골라 보세요.', ['What is for lunch?', 'Where is lunch?', 'Who is lunch?'], ['What is for lunch?'], { d: 0.35,
                p: ['묻는 말 끝은 어떻게 말하면 좋을까요?', ['목소리를 조금 올려요', '목소리를 아주 낮춰요'], 0, '묻는 말은 끝을 조금 올려 말하면 상대가 질문인 줄 알아요.'] }),
            ]],
        ],
        wT: '"오늘 만든 묻는 말 가운데 가장 궁금한 것을 하나 골라 짝에게 물어 보세요." 끝을 올려 말했는지 듣는다. 물음 낱말만 말하는 학생은 다음 시간 시작에 문장 전체를 한 번 더 말하게 한다.',
        ex: [
          { type: 'tool', tool: 'wordcards', options: { mode: 'order', cards: NC(['Where', 'is', 'the', 'gym?']) }, prompt: '체육관이 어디인지 묻는 말을 만들어 보세요.', target: { order: ['Where', 'is', 'the', 'gym?'] }, difficulty: 0.2 },
          { type: 'choice', prompt: '"Who is your teacher?"는 무엇을 묻는 말일까요?', options: ['장소', '사람', '시간'], answer: 1, difficulty: 0.15, explain: 'Who는 사람을 묻는 물음 낱말이에요.' },
        ],
        wsT: '학교생활 묻는 말 만들기',
        ws: [
          { type: 'table', prompt: '궁금한 것에 알맞은 물음 낱말을 쓰세요.', columns: ['궁금한 것', '물음 낱말'], cells: [['도서관의 장소', 'Where'], ['담임 선생님', ''], ['점심 시간', ''], ['좋아하는 과목', '']], answer: 'Where / Who / What / What' },
          { type: 'choice', prompt: '"~는 어디예요?"를 묻는 말에 ○ 하세요.', options: ['Where is the gym?', 'Who is the gym?', 'Is gym the where?'], answer: 'Where is the gym?' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: '___ is your teacher?   ___ is the library?', answer: 'Who / Where' },
          { type: 'short', prompt: '학교에서 궁금한 것 하나를 묻는 말로 써 보세요.' },
        ],
        note: '궁금한 것이 장소, 사람, 때 가운데 무엇인지 먼저 정해요.',
        ch: '쓰지 않는 카드가 섞여 있고, 길이가 긴 묻는 말을 만들어요.',
        nt: '자주 보이는 어려움: ① 낱말만 늘어놓는다(Library where?) → 물음 낱말을 맨 앞에 두는 습관을 만든다. ② Who, Where, What을 헷갈린다 → 궁금한 것이 사람·장소·때인지 먼저 말하게 한다. ③ 묻는 말 끝을 내려서 말한다 → 짝에게 두 번 말해 보며 끝을 올리는 연습을 한다.',
      }),
            // ───────────────────────── 7차시 (practice) ─────────────────────────
      lesson(7, {
        std: S8, t: '요일·장소·사람을 묻는 학교 질문과 대답 짝 짓기',
        o: 'What day, Where, Who로 묻는 학교생활 질문에 알맞은 대답을 짝 지어 소리 내어 묻고 답할 수 있다.',
        ill: ['a student asking a teacher a question at the school door while a schedule board hangs on the wall', 'What day is it?', '학교 질문과 대답'],
        iT: '"지난 시간에 만든 묻는 말을 하나씩 말해 볼까요?" Where, Who, What time을 확인한 뒤 달력을 가리키며 "What day is it today?"를 묻고 학생들이 "It is Monday."로 답하게 한다. 대답을 알면서도 고개만 끄덕이는 학생에게는 문장 틀 "It is ___."를 칠판에 쓰고 따라 말하게 한다.',
        iS: '학교에서 자주 하는 질문과 대답을 짝 지어 봐요. 요일을 묻는 말은 어떻게 말할까요?',
        demo: { tool: 'wordcards', options: { mode: 'match', slots: [{ id: 'm1', label: 'What day is it?' }], cards: NC(['It is Monday.', 'It is on the first floor.']) }, sequence: [{ at: {} }, { at: { 'It is Monday.': 0 } }] },
        a: [
          ['활동 1. 묻는 말의 빈칸에 물음 낱말 놓기', '"어떤 정보를 묻는지 보고 물음 낱말을 골라요. 놓은 뒤 문장 전체를 끝을 올려 읽어요." 같은 물음 낱말이 두 번 쓰일 수 있음을 짚는다. 장소를 묻는데 What을 놓은 학생에게는 대답이 장소인지 시간인지 먼저 말하게 한다.', '빈칸에 알맞은 물음 낱말을 놓고, 문장을 끝을 올려 읽어요.', 'wordcards',
            LA('fill', '대답으로 듣고 싶은 것이 장소인지 사람인지 때인지 먼저 정해 보세요. 문장을 소리 내어 읽고 어색하면 바꿔요.'),
            [
              FI('오늘 요일을 묻는 말을 완성해 보세요.', ['___ day is it today?'], ['What', 'Where', 'Who'], ['What'], { x: ['When'] }),
              FI('음악실의 장소를 묻는 말을 완성해 보세요.', ['___ is the music room?'], ['Where', 'Who', 'What'], ['Where'], { d: 0.2, x: ['When'] }),
              FI('새로 온 선생님이 누구인지 묻는 말을 완성해 보세요.', ['___ is the new teacher?'], ['Who', 'Where', 'What'], ['Who'], { d: 0.25, x: ['When'] }),
              FI('두 가지를 묻는 말을 완성해 보세요. (요일, 장소)', ['___ day is the art class?', '___ is the art room?'], ['What', 'Where', 'Who'], ['What', 'Where'], { d: 0.35 }),
            ]],
          ['활동 2. 질문과 알맞은 대답 짝 짓기', '"질문에 알맞은 대답을 짝 지은 뒤, 짝과 번갈아 묻고 답해요." 대답은 낱말만이 아니라 한 문장으로 말하게 한다. 대답 카드를 첫 글자만 보고 짝 짓는 학생에게는 질문의 물음 낱말과 대답의 정보 종류를 같이 말하게 한다. 도전 단계에는 질문에 맞지 않는 대답 카드가 섞여 있다.', '질문 옆에 알맞은 대답 카드를 놓고, 짝과 번갈아 묻고 답해요.', 'wordcards',
            LA('match', '질문이 장소·사람·요일 중 무엇을 묻는지 정한 뒤, 그 정보를 담은 대답을 찾아보세요.'),
            [
              MT('질문에 알맞은 대답을 놓아 보세요.', [['What day is it?', 'It is Friday.'], ['Where is the gym?', 'It is next to the library.']], { x: ['It is my teacher.'] }),
              MT('질문에 알맞은 대답을 놓아 보세요.', [['Who is your teacher?', 'It is Ms. Kim.'], ['Where is the nurse?', 'She is in the health room.']], { d: 0.25, x: ['It is Tuesday.'] }),
              MT('질문 세 개에 알맞은 대답을 놓아 보세요.', [['What time is lunch?', 'It is at twelve.'], ['Where is my bag?', 'It is on the desk.'], ['Who is that boy?', 'He is Jun.']], { d: 0.35 }),
              PK('"What is your favorite subject?"에 알맞은 대답을 골라 보세요.', ['I like art.', 'It is in the gym.', 'She is my teacher.'], ['I like art.'], { d: 0.3 }),
            ]],
        ],
        wT: '"짝에게 학교에 대해 한 가지를 묻고, 짝은 한 문장으로 대답해 보세요." 대답이 낱말 하나로 끝나지 않았는지 듣는다. 낱말로만 대답한 학생은 다음 시간 시작에 문장 틀로 다시 대답하게 한다.',
        ex: [
          { type: 'tool', tool: 'wordcards', options: { mode: 'match', shuffle: false, slots: [{ id: 'm1', label: 'Where is the lunch room?' }, { id: 'm2', label: 'What day is it?' }], cards: NC(['It is on the first floor.', 'It is Wednesday.']) }, prompt: '질문에 알맞은 대답을 놓아 보세요.', target: { match: { m1: 'It is on the first floor.', m2: 'It is Wednesday.' } }, difficulty: 0.25 },
          { type: 'choice', prompt: '"Who is your teacher?"에 알맞은 대답은 무엇일까요?', options: ['It is Ms. Park.', 'It is on the desk.', 'It is Monday.'], answer: 0, difficulty: 0.2, explain: '사람을 묻는 말에는 사람 이름으로 답해요.' },
        ],
        wsT: '학교 질문과 대답 짝 짓기',
        ws: [
          { type: 'table', prompt: '질문에 알맞은 대답을 줄로 이어 쓰세요.', columns: ['질문', '대답'], cells: [['What day is it?', 'It is Friday.'], ['Where is the gym?', ''], ['Who is your teacher?', '']], answer: '예: It is next to the library. / It is Ms. Kim.' },
          { type: 'choice', prompt: '"What day is it?"에 알맞은 대답에 ○ 하세요.', options: ['It is Monday.', 'It is in the gym.', 'He is Jun.'], answer: 'It is Monday.' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: '___ is the gym?   ___ day is it?', answer: 'Where / What' },
          { type: 'short', prompt: '짝에게 묻고 싶은 학교 질문 하나를 영어로 써 보세요.' },
        ],
        note: '질문이 무엇을 묻는지 정한 뒤 대답을 찾아요.',
        ch: '질문에 맞지 않는 대답 카드가 섞여 있고, 물음이 세 개로 늘어요.',
        nt: '자주 보이는 어려움: ① 질문과 대답을 소리 없이 눈으로만 짝 짓는다 → 질문을 읽은 뒤 대답을 소리 내어 확인하게 한다. ② 대답을 낱말 하나로만 한다 → It is ___. 문장 틀을 쓰게 한다. ③ Where와 Who를 헷갈린다 → 대답이 장소인지 사람인지 먼저 말하게 한다.',
      }),

      // ───────────────────────── 8차시 (core) ─────────────────────────
      lesson(8, {
        std: S8, t: '이름과 나이를 묻는 말과 한 문장 대답 말하기',
        o: 'What is your name?과 How old are you?를 카드로 만들고, 짝이 물으면 이름과 나이를 한 문장으로 대답할 수 있다.',
        ill: ['two children meeting at a school gate, one holding a name tag and the other holding up ten fingers', 'What is your name?', '이름과 나이 묻고 답하기'],
        iT: '"새 친구를 만나면 먼저 무엇을 물을까요?" 교사가 "What is your name?"을 천천히 묻고 한 학생이 "My name is Mina."로 답하는 시범을 보인다. 나이를 묻는 "How old are you?"도 보여 주고 "I am ten."으로 답한다. 이름만 말하고 문장으로 대답하지 않는 학생에게는 "My name is ... 이렇게 시작할 수 있어요."라고 말해 준다.',
        iS: '새 친구를 만나면 이름과 나이를 어떻게 물을까요? 선생님이 하는 말을 잘 들어 봐요.',
        demo: { tool: 'wordcards', options: { mode: 'order', cards: NC(['What', 'is', 'your', 'name?']) }, sequence: [{ at: {} }, { at: { What: 0 } }] },
        a: [
          ['활동 1. 이름과 나이 묻는 말 만들기', '"묻는 말 카드를 차례대로 놓은 뒤 짝에게 소리 내어 물어요." 문장 끝을 올려 읽게 한다. 단어 순서를 바꾸어 놓는 학생에게는 칠판 문장을 보며 한 낱말씩 짚어 읽게 한다. 도전 단계에는 쓰지 않는 카드가 섞여 있다.', '카드를 차례대로 놓아 묻는 말을 만들고, 짝에게 소리 내어 물어요.', 'wordcards',
            LA('order', '이름을 묻는지 나이를 묻는지 먼저 정한 뒤, 묻는 말은 물음 낱말로 시작한다는 것을 떠올려 보세요.'),
            [
              OR('이름을 묻는 말을 만들어 보세요.', ['What', 'is', 'your', 'name?'], { x: ['my'] }),
              OR('나이를 묻는 말을 만들어 보세요.', ['How', 'old', 'are', 'you?'], { d: 0.2, x: ['is'] }),
              OR('친구의 이름을 정중하게 묻는 말을 만들어 보세요.', ['Hello!', 'What', 'is', 'your', 'name?'], { d: 0.3 }),
              OR('동생의 나이를 묻는 말을 만들어 보세요.', ['How', 'old', 'is', 'your', 'brother?'], { d: 0.35, x: ['are'] }),
            ]],
          ['활동 2. 이름과 나이 대답 문장 완성하기', '"질문에 맞게 대답 문장을 완성해요. 완성한 문장은 짝에게 한 문장으로 말해요." My name is, I am처럼 시작 부분을 먼저 읽게 한다. 대답할 때 이름이나 숫자만 말하는 학생에게는 문장 틀을 가리키며 앞부분부터 말하게 한다. 이름은 가명(Mina, Jun)만 쓴다.', '질문에 알맞은 대답 문장의 빈칸을 채우고, 한 문장으로 소리 내어 말해요.', 'wordcards',
            LA('fill', '질문이 이름인지 나이인지 먼저 정해 보세요. 빈칸에 들어갈 말을 놓은 뒤 문장을 처음부터 읽어 보세요.'),
            [
              FI('"What is your name?"에 대답하는 문장을 완성해 보세요.', ['My name is ___.'], ['Mina', 'ten', 'happy'], ['Mina'], { x: ['Seoul'] }),
              FI('"How old are you?"에 대답하는 문장을 완성해 보세요.', ['I am ___ years old.'], ['ten', 'Jun', 'sad'], ['ten'], { d: 0.2, x: ['blue'] }),
              FI('질문 두 개에 대답하는 문장을 완성해 보세요.', ['My name is ___.', 'I am ___.'], ['Jun', 'eleven', 'Mina'], ['Jun', 'eleven'], { d: 0.3 }),
              PK('"What is your name?"에 가장 알맞은 대답을 골라 보세요.', ['My name is Jun.', 'Jun.', 'I am ten.'], ['My name is Jun.'], { d: 0.3,
                p: ['대답은 낱말 하나로 해도 괜찮을까요?', ['한 문장으로 말하면 더 잘 전해져요', '낱말 하나가 항상 더 좋아요'], 0, '문장으로 대답하면 상대가 더 쉽게 알아듣고 대화가 이어져요.'] }),
            ]],
        ],
        wT: '"짝에게 이름과 나이를 묻고, 짝의 대답을 한 문장으로 되말해 보세요." 대답이 문장인지 확인한다. 이름이나 숫자만 말한 학생은 다음 시간 시작에 앞부분 말을 붙여 다시 말하게 한다.',
        ex: [
          { type: 'tool', tool: 'wordcards', options: { mode: 'fill', shuffle: false, slots: [{ id: 'e1', label: 'I am ___ years old.' }], cards: NC(['nine', 'Mina', 'sad']) }, prompt: '아홉 살이라고 대답하는 문장을 완성해 보세요.', target: { fill: { e1: 'nine' } }, difficulty: 0.2 },
          { type: 'choice', prompt: '"How old are you?"는 무엇을 묻는 말일까요?', options: ['이름', '나이', '장소'], answer: 1, difficulty: 0.15, explain: 'old는 나이가 들었다는 뜻으로, How old는 나이를 물어요.' },
        ],
        wsT: '이름과 나이 묻고 대답하기',
        ws: [
          { type: 'table', prompt: '질문에 맞게 대답 문장을 써 보세요.', columns: ['질문', '내 대답'], cells: [['What is your name?', 'My name is ___.'], ['How old are you?', 'I am ___.']], answer: '예: My name is Mina. / I am ten.' },
          { type: 'choice', prompt: '나이를 묻는 말에 ○ 하세요.', options: ['What is your name?', 'How old are you?', 'Where are you?'], answer: 'How old are you?' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: 'My ___ is Jun.   I ___ ten.', answer: 'name / am' },
          { type: 'short', prompt: '짝에게 이름과 나이를 묻는 말을 영어로 써 보세요.' },
        ],
        note: '질문이 이름인지 나이인지 정하고 대답 틀을 사용해요.',
        ch: '쓰지 않는 카드가 섞여 있고, 대답 문장 둘을 한꺼번에 완성해요.',
        nt: '자주 보이는 어려움: ① 묻는 말은 외웠지만 답할 때 고개만 끄덕인다 → 대답 문장 틀을 칠판에 두고 따라 말하게 한다. ② 나이를 말할 때 숫자만 말한다 → I am ___ years old.로 한 문장을 이어 말하게 한다. ③ 이름을 묻는 말과 나이를 묻는 말을 바꾸어 대답한다 → 물음 낱말(What, How old)을 짚으며 천천히 읽게 한다.',
      }),

      // ───────────────────────── 9차시 (practice) ─────────────────────────
      lesson(9, {
        std: S8, t: '사는 곳과 좋아하는 것 묻고 한 문장으로 답하기',
        o: 'Where are you from?, What is your favorite color?를 묻고 한 문장으로 대답하며 짝과 번갈아 말할 수 있다.',
        ill: ['two children sitting on a bench trading questions with color cards and a small world map between them', 'I like blue.', '묻고 답하는 짝 대화'],
        iT: '"지난 시간에 이름과 나이를 묻는 말을 배웠어요. 오늘은 사는 곳과 좋아하는 것을 물어볼까요?" 교사가 "Where are you from?"을 묻고 "I am from Korea."를 대답으로 보여 준다. 이어 "What is your favorite color?"와 "I like blue."를 시범으로 보인다. 묻는 말을 외워 말하지만 대답은 어려워하는 학생에게는 대답 문장 틀을 소리 내어 한 번 더 읽게 한다.',
        iS: '친구가 어디에서 왔는지, 좋아하는 색은 무엇인지 어떻게 물을까요? 대답도 한 문장으로 말해 봐요.',
        demo: { tool: 'wordcards', options: { mode: 'fill', slots: [{ id: 'd1', label: 'I like ___.' }], cards: NC(['blue', 'Korea']) }, sequence: [{ at: {} }, { at: { blue: 0 } }] },
        a: [
          ['활동 1. 질문에 알맞은 대답 문장 고르기', '"질문을 읽고 한 문장으로 된 대답을 골라요. 낱말만 있는 대답은 문장으로 바꾸어 말해요." 문장을 소리 내어 읽고 질문과 어울리는지 확인한다. 낱말만 있는 카드를 고르는 학생에게는 칠판 대답 틀을 가리키며 문장을 고르게 한다.', '질문에 가장 알맞은 한 문장 대답을 골라요.', 'wordcards',
            LA('pick', '질문이 무엇을 묻는지 정한 뒤, 문장으로 된 대답 중에서 질문과 어울리는 것을 찾아보세요.'),
            [
              PK('"Where are you from?"에 알맞은 대답을 골라 보세요.', ['I am from Korea.', 'Korea.', 'I like Korea.'], ['I am from Korea.'], { x: ['I am ten.'] }),
              PK('"What is your favorite color?"에 알맞은 대답을 골라 보세요.', ['I like blue.', 'Blue.', 'I am blue.'], ['I like blue.'], { d: 0.2, x: ['I am from blue.'] }),
              PK('"What is your favorite animal?"에 알맞은 대답을 골라 보세요.', ['I like cats.', 'Cats.', 'I am cats.'], ['I like cats.'], { d: 0.3, x: ['I am from cats.'] }),
              PK('"What is your favorite food?"에 알맞은 대답을 골라 보세요.', ['I like noodles.', 'Noodles.', 'I am noodles.'], ['I like noodles.'], { d: 0.3, x: ['I have noodles name.'] }),
            ]],
          ['활동 2. 대답 문장 완성하고 짝과 말하기', '"질문에 맞게 대답 문장을 완성하고, 짝과 번갈아 묻고 답해 보세요." 이어서 마지막 문항에서는 내 대답을 직접 말하고 짝이 듣는다. 대답이 길어지면 문장을 하나씩 끊어 말하게 한다. 짝의 대답을 듣지 않고 자기 말만 하는 학생에게는 짝의 대답을 한 번 되말하게 한다.', '질문에 알맞은 대답 문장을 완성하고, 짝과 번갈아 묻고 답해요.', 'wordcards',
            LA('fill', '질문의 낱말을 짚어 대답 문장에서 같은 자리에 들어갈 말을 찾아보세요. 문장을 소리 내어 읽어 확인해요.'),
            [
              FI('"Where are you from?"에 대답하는 문장을 완성해 보세요.', ['I am from ___.'], ['Busan', 'blue', 'ten'], ['Busan'], { x: ['Seoul'] }),
              FI('"What is your favorite color?"에 대답하는 문장을 완성해 보세요.', ['I like ___.'], ['red', 'Mina', 'ten'], ['red'], { d: 0.2, x: ['blue'] }),
              FI('두 질문에 대답하는 문장을 완성해 보세요. (사는 곳, 좋아하는 동물)', ['I am from ___.', 'I like ___.'], ['Jeju', 'dogs', 'ten'], ['Jeju', 'dogs'], { d: 0.35 }),
              TALK('짝과 번갈아 "Where are you from?"과 "What is your favorite color?"를 묻고 한 문장으로 대답해 보세요. 다 했으면 "다 했어요"를 누르세요.'),
            ]],
        ],
        wT: '"짝의 대답을 한 문장으로 다시 말해 줄 수 있나요?" 한두 쌍이 시범을 보인다. 대답이 낱말로 끝난 학생은 다음 시간 시작에 문장 틀 카드를 보며 다시 말하게 한다.',
        ex: [
          { type: 'tool', tool: 'wordcards', options: { mode: 'pick', basket: '고른 카드', shuffle: false, cards: NC(['I like green.', 'Green.', 'I am green.']) }, prompt: '"What is your favorite color?"에 알맞은 대답을 골라 보세요.', target: { pick: ['I like green.'] }, difficulty: 0.2 },
          { type: 'choice', prompt: '"Where are you from?"에 알맞은 대답은 무엇일까요?', options: ['I am from Korea.', 'I am ten.', 'I like blue.'], answer: 0, difficulty: 0.15, explain: 'from은 어디에서 왔는지 말할 때 써요.' },
        ],
        wsT: '묻고 한 문장으로 대답하기',
        ws: [
          { type: 'table', prompt: '질문에 맞게 내 대답을 한 문장으로 써 보세요.', columns: ['질문', '내 대답'], cells: [['Where are you from?', 'I am from ___.'], ['What is your favorite color?', 'I like ___.']], answer: '예: I am from Korea. / I like blue.' },
          { type: 'choice', prompt: '"What is your favorite food?"에 알맞은 대답에 ○ 하세요.', options: ['I like noodles.', 'I am from noodles.', 'I am ten.'], answer: 'I like noodles.' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: 'I am ___ Korea.   I ___ cats.', answer: 'from / like' },
          { type: 'short', prompt: '짝에게 묻고 싶은 질문 하나와 짝의 대답을 써 보세요.' },
        ],
        note: '질문에 쓰인 낱말을 대답 틀에서 찾고 문장으로 말해요.',
        ch: '비슷한 모양의 대답 카드가 섞여 있고, 대답 문장 둘을 한꺼번에 완성해요.',
        nt: '자주 보이는 어려움: ① 묻는 말은 말하지만 대답은 낱말 하나로 한다 → 대답 문장 틀을 쓰게 한다. ② from과 like를 섞어 쓴다 → 질문에서 같은 낱말을 찾아 짚게 한다. ③ 짝의 대답을 듣지 않는다 → 짝의 대답을 한 번 되말하게 한다.',
      }),
            // ───────────────────────── 10차시 (core) ─────────────────────────
      lesson(10, {
        std: S8, t: '친구의 말을 듣고 핵심 정보 하나 골라 답하기',
        o: '친구가 두 가지를 말하는 짧은 영어를 듣고, 질문이 묻는 핵심 정보 하나를 골라 한 문장으로 답할 수 있다.',
        ill: ['two children talking on a bench, one holding a speech bubble with two pictures and the other pointing to one of them', 'My dog is Coco.', '핵심 정보 찾아 답하기'],
        iT: '"친구가 두 가지를 한꺼번에 말하면 질문에 맞는 정보 하나를 골라 대답해요." 교사가 "I like soccer. I play it on Friday."를 읽어 주고 "When does he play soccer?"를 묻는다. 들은 말을 모두 되풀이하는 학생에게는 질문의 물음 낱말을 짚으며 필요한 정보 하나만 찾게 한다. 소리가 나지 않는 기기에서는 교사가 읽어 준다.',
        iS: '친구가 말한 것 중에서 질문에 필요한 정보는 무엇일까요? 잘 듣고 하나만 골라요.',
        demo: { tool: 'wordcards', options: { mode: 'pick', listen: true, say: 'My dog is Coco. It is brown.', basket: '들은 것', shuffle: false, cards: NC(['Coco', 'brown']) }, sequence: [{ at: {} }, { at: { Coco: 0 } }] },
        a: [
          ['활동 1. 듣기 단추로 듣고 핵심 정보 하나 고르기', '문항마다 듣기 단추를 한 번 누르게 하고, 소리가 나지 않으면 교사가 읽어 준다. "먼저 질문을 읽고, 그 질문에 필요한 정보만 들으면서 찾아요." 질문이 무엇인지 보지 않고 첫 낱말만 고르는 학생에게는 질문을 소리 내어 읽게 한다. 도전 단계에는 비슷한 정보 카드가 섞여 있다.', '질문을 읽고, 듣기 단추를 눌러 들은 말에서 핵심 정보 카드 하나를 골라요.', 'wordcards',
            LA('pick', '질문이 무엇을 묻는지 먼저 정하고, 들으면서 그 정보가 나올 때 손가락으로 표시해 보세요.', { listen: true }),
            [
              PL('언제 축구를 하는지 골라 보세요. (듣기 단추를 눌러요)', 'I like soccer. I play it on Friday.', ['Friday', 'soccer', 'Monday'], ['Friday'], { x: ['Sunday'] }),
              PL('강아지의 이름이 무엇인지 골라 보세요. (듣기 단추를 눌러요)', 'My dog is Coco. It is brown.', ['Coco', 'brown', 'dog'], ['Coco'], { d: 0.2, x: ['Cookie'] }),
              PL('어느 도시에서 왔는지 골라 보세요. (듣기 단추를 눌러요)', 'I am from Busan. I am ten years old.', ['Busan', 'ten', 'Korea'], ['Busan'], { d: 0.25, x: ['Daegu'] }),
              PL('무엇을 좋아하는지 골라 보세요. (듣기 단추를 눌러요)', 'My lunch is rice and fish. I like fish.', ['fish', 'rice', 'lunch'], ['fish'], { d: 0.35, x: ['meat'],
                p: ['질문에 필요한 정보는 어디서 찾을까요?', ['질문의 물음 낱말을 보고 찾아요', '처음 들은 낱말을 고르면 돼요'], 0, '질문에서 무엇을 묻는지 정하면 들은 말에서 필요한 정보 하나만 골라낼 수 있어요.'] }),
            ]],
          ['활동 2. 들은 정보로 대답 문장 완성하기', '"듣기 단추를 누르고, 들은 정보를 넣어 대답 문장을 완성해요. 완성한 문장은 짝에게 말해요." 문장에 정보 하나만 넣도록 안내한다. 두 정보를 한꺼번에 넣으려는 학생에게는 질문을 다시 읽게 한다.', '듣고 알맞은 정보 카드를 대답 문장의 빈칸에 놓아요.', 'wordcards',
            LA('fill', '질문이 묻는 것을 다시 읽고, 들은 정보 가운데 그 질문에 필요한 하나를 찾아 빈칸에 넣어 보세요.', { listen: true }),
            [
              FL('듣고 질문에 대한 대답을 완성해 보세요. "Who likes art?"', 'Mina likes art. Jun likes music.', ['___ likes art.'], ['Mina', 'Jun', 'art'], ['Mina'], { x: ['Tom'] }),
              FL('듣고 질문에 대한 대답을 완성해 보세요. "What color is the bag?"', 'The bag is red. The pen is blue.', ['The bag is ___.'], ['red', 'blue', 'bag'], ['red'], { d: 0.25, x: ['green'] }),
              FL('듣고 질문에 대한 대답을 완성해 보세요. "Where is the cat?"', 'The cat is on the chair. The dog is on the bed.', ['The cat is on the ___.'], ['chair', 'bed', 'desk'], ['chair'], { d: 0.3 }),
              FL('듣고 질문에 대한 대답을 완성해 보세요. "How old is Jun?"', 'Jun is ten. Mina is eleven.', ['Jun is ___.'], ['ten', 'eleven', 'twelve'], ['ten'], { d: 0.35 }),
            ]],
        ],
        wT: '"질문을 먼저 읽으면 어떤 점이 좋았나요?" 필요한 정보만 찾을 수 있었다는 이야기를 모은다. 들은 말을 전부 되풀이한 학생은 다음 시간 시작에 질문에 줄을 긋고 정보 하나만 말해 보게 한다.',
        ex: [
          { type: 'tool', tool: 'wordcards', options: { mode: 'pick', listen: true, say: 'My cat is Mimi. It is white.', basket: '들은 것', shuffle: false, cards: NC(['Mimi', 'white', 'cat']) }, prompt: '고양이의 이름이 무엇인지 듣고 골라 보세요.', target: { pick: ['Mimi'] }, difficulty: 0.25 },
          { type: 'choice', prompt: '질문에 맞는 핵심 정보를 고르려면 가장 먼저 무엇을 해야 할까요?', options: ['질문을 읽어요', '들은 말을 모두 따라 해요', '아무 카드나 골라요'], answer: 0, difficulty: 0.15, explain: '질문을 읽으면 어떤 정보가 필요한지 알 수 있어요.' },
        ],
        wsT: '듣고 핵심 정보 하나 찾기',
        ws: [
          { type: 'table', prompt: '선생님이 읽어 주는 말을 듣고 질문의 답을 쓰세요.', columns: ['번호', '질문', '핵심 정보'], cells: [['1', 'What is the dog name?', ''], ['2', 'When does he play soccer?', ''], ['3', 'What does she like?', '']], answer: '교사 읽기 예: 1 Coco / 2 Friday / 3 fish' },
          { type: 'choice', prompt: '"I am Mina. I am ten." 에서 나이를 묻는 질문의 답에 ○ 하세요.', options: ['Mina', 'ten', 'I'], answer: 'ten' },
          { type: 'blank', prompt: '핵심 정보를 넣어 문장을 완성하세요.', text: 'The cat is on the ___. (chair / bed 중 들은 것)', answer: '교사 읽기에 따라' },
          { type: 'short', prompt: '짝이 말한 두 가지 중 하나를 질문에 맞게 골라 한 문장으로 써 보세요.' },
        ],
        note: '질문을 먼저 읽고 그 정보가 나올 때만 표시해요.',
        ch: '비슷한 정보 카드가 섞여 있고, 정보가 두 개인 말에서 하나만 골라요.',
        nt: '자주 보이는 어려움: ① 들은 말을 모두 외우려다 질문을 놓친다 → 질문을 먼저 읽게 한다. ② 비슷한 소리(Friday/Sunday)를 헷갈린다 → 첫소리를 천천히 비교해 말하게 한다. ③ 듣고 난 뒤 확인하지 않고 넘어간다 → 고른 정보를 짝에게 말해 맞는지 확인하게 한다.',
      }),

      // ───────────────────────── 11차시 (practice) ─────────────────────────
      lesson(11, {
        std: S8, t: '못 알아들었을 때 다시 묻고 확인하는 말 고르기',
        o: 'Pardon?, Is it ___?처럼 다시 묻거나 확인하는 말을 상황에 맞게 골라, 들은 내용이 맞는지 짝에게 확인할 수 있다.',
        ill: ['a child with a question mark bubble listening to a friend and then repeating the friend word to check', 'Is it blue?', '다시 묻고 확인하기'],
        iT: '교사가 일부러 작은 목소리로 "My bag is blue."라고 말하고 "무슨 색이라고 들었나요?"라고 묻는다. 못 들은 학생이 "Pardon?"이라고 말하면 칭찬하고 다시 읽어 준다. 이어 "Is it blue?"를 칠판에 쓰고 되묻는 방법을 소개한다. 못 알아듣고도 그냥 넘어가는 학생에게는 "한 번 더 말해 달라고 해도 괜찮아요."라고 말해 준다.',
        iS: '친구의 말을 못 알아들으면 어떻게 하면 좋을까요? 영어로는 어떻게 말할까요?',
        demo: { tool: 'wordcards', options: { mode: 'pick', basket: '고른 말', shuffle: false, cards: NC(['Pardon?', 'Okay.']) }, sequence: [{ at: {} }, { at: { 'Pardon?': 0 } }] },
        a: [
          ['활동 1. 상황에 알맞은 되묻는 말 고르기', '"친구의 말이 작게 들리거나 빠르게 들릴 때는 무엇이라고 말할까요? 알맞은 말을 골라요." 고른 말은 짝에게 소리 내어 말해 본다. 아무 말 없이 고개만 끄덕이는 학생에게는 모르는 것이 부끄러운 일이 아님을 이야기해 준다.', '상황을 읽고 알맞은 되묻는 말을 골라요.', 'wordcards',
            LA('pick', '친구의 말을 어떻게 하면 더 잘 들을 수 있을지 생각해 보세요. 예의 있고 짧게 말하는 말을 찾아보세요.'),
            [
              PK('친구의 말이 너무 작게 들렸어요. 알맞은 말을 골라 보세요.', ['Pardon?', 'Stop it.', 'Be quiet.'], ['Pardon?'], { x: ['Whatever.'] }),
              PK('친구의 말이 너무 빨라요. 알맞은 말을 골라 보세요.', ['Slowly, please.', 'No way.', 'Go away.'], ['Slowly, please.'], { d: 0.2, x: ['Hurry up.'] }),
              PK('친구가 한 말을 한 번 더 듣고 싶어요. 알맞은 말을 골라 보세요.', ['One more time, please.', 'I do not care.', 'That is boring.'], ['One more time, please.'], { d: 0.3 }),
              PK('친구가 "My bag is blue."라고 했어요. 내가 들은 것이 맞는지 묻는 말을 골라 보세요.', ['Is it blue?', 'Who is blue?', 'Where is blue?'], ['Is it blue?'], { d: 0.3 }),
            ]],
          ['활동 2. 확인하는 대화 만들기', '"친구의 말을 듣고, 확인하는 말과 대답을 차례대로 놓아 대화를 만들어요." 대화를 소리 내어 읽고 역할을 바꾸어 한 번 더 읽는다. 대답을 하지 않고 다음 질문으로 넘어가는 학생에게는 대화의 두 번째 줄을 먼저 읽게 한다.', '대화 카드를 차례대로 놓고, 짝과 역할을 바꾸어 읽어요.', 'wordcards',
            LA('order', '친구가 먼저 말하고, 내가 확인하고, 친구가 대답해요. 소리 내어 읽으며 자연스러운 차례를 찾아보세요.'),
            [
              OR('대화를 차례대로 놓아 보세요. (색 확인)', ['My bag is blue.', 'Is it blue?', 'Yes, it is.'], { x: ['No, thanks.'] }),
              OR('대화를 차례대로 놓아 보세요. (나이 확인)', ['I am ten.', 'Are you ten?', 'Yes, I am.'], { d: 0.25, x: ['Here you are.'] }),
              OR('대화를 차례대로 놓아 보세요. (못 들었을 때)', ['I like pizza.', 'Pardon?', 'I said, I like pizza.', 'Oh, I see.'], { d: 0.35 }),
              OR('대화를 차례대로 놓아 보세요. (이름 확인)', ['My name is Jun.', 'Is it June?', 'No, it is Jun.'], { d: 0.35, x: ['Yes, it is.'] }),
            ]],
        ],
        wT: '"못 알아들었을 때 예의 있게 다시 묻는 말을 두 가지 말해 볼까요?" Pardon?과 One more time, please.를 확인한다. 다시 묻는 것을 어려워한 학생은 다음 시간 시작에 짝과 한 번 더 연습한다.',
        ex: [
          { type: 'tool', tool: 'wordcards', options: { mode: 'order', cards: NC(['I like red.', 'Pardon?', 'I said, I like red.']) }, prompt: '못 들었을 때의 대화를 차례대로 놓아 보세요.', target: { order: ['I like red.', 'Pardon?', 'I said, I like red.'] }, difficulty: 0.3 },
          { type: 'choice', prompt: '친구의 말이 빨라서 알아듣지 못했을 때 알맞은 말은 무엇일까요?', options: ['Slowly, please.', 'Stop talking.', 'I do not care.'], answer: 0, difficulty: 0.15, explain: 'Slowly, please.는 천천히 말해 달라고 부탁하는 말이에요.' },
        ],
        wsT: '다시 묻고 확인하는 말',
        ws: [
          { type: 'table', prompt: '상황에 알맞은 말을 연결해 쓰세요.', columns: ['상황', '알맞은 말'], cells: [['말이 작게 들렸어요', 'Pardon?'], ['말이 빨라요', ''], ['다시 듣고 싶어요', '']], answer: 'Pardon? / Slowly, please. / One more time, please.' },
          { type: 'choice', prompt: '"My bag is blue."를 듣고 확인하는 말에 ○ 하세요.', options: ['Is it blue?', 'Is it a bag?', 'Who is blue?'], answer: 'Is it blue?' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: '___? (다시 말해 달라고 할 때)   One more ___, please.', answer: 'Pardon / time' },
          { type: 'short', prompt: '못 알아들었을 때 내가 쓰고 싶은 영어 말 하나를 써 보세요.' },
        ],
        note: '못 알아들은 이유(작게, 빠르게)를 먼저 정하고 말을 골라요.',
        ch: '비슷한 말 카드가 섞여 있고, 대화가 네 줄로 길어져요.',
        nt: '자주 보이는 어려움: ① 못 알아들었는데도 고개만 끄덕인다 → 다시 물어도 된다고 안심시킨다. ② 되묻는 말을 한국어로 바꾸어 말한다 → 짧은 영어 한 마디로 말하게 한다. ③ 확인하는 말을 길게 만들려고 한다 → Is it ___?처럼 짧은 틀을 쓰게 한다.',
      }),

      // ───────────────────────── 12차시 (extend) ─────────────────────────
      lesson(12, {
        std: S8, t: '세 줄 짝 대화 이어 말하고 핵심 답 되말하기',
        o: '인사, 질문, 핵심 답이 이어지는 세 줄 대화를 차례대로 말하고, 들은 핵심 답을 짝에게 한 문장으로 되말할 수 있다.',
        ill: ['two children holding paper cup phones and drawing dialog lines between them across a table', 'Hello! Hi!', '세 줄 짝 대화'],
        iT: '"지금까지 배운 인사, 묻는 말, 대답을 이어서 말해 볼까요?" 칠판에 "A: Hello! B: Hi! A: What is your name?"을 쓰고 두 학생이 역할을 맡아 읽는다. 대화를 모두 외우려고 하는 학생에게는 핵심만 기억해도 된다고 말해 주고, 다음 줄을 힌트로 알려 준다.',
        iS: '짝과 대화를 이어 말해 볼까요? 한 사람이 묻고 한 사람이 대답해요.',
        demo: { tool: 'wordcards', options: { mode: 'order', cards: NC(['Hello!', 'Hi!', 'What is your name?']) }, sequence: [{ at: {} }, { at: { 'Hello!': 0 } }] },
        a: [
          ['활동 1. 대화 차례 맞추기', '"인사로 시작해서 묻고, 대답하는 차례로 놓아요. 놓은 뒤 두 사람이 역할을 나누어 읽어요." 대화 한 줄씩 말할 때 상대를 바라보게 한다. 대답이 먼저 나오는 학생에게는 첫 줄이 인사라는 점을 짚어 준다.', '대화 카드를 차례대로 놓고, 역할을 나누어 소리 내어 읽어요.', 'wordcards',
            LA('order', '대화는 인사로 시작하고 묻는 말 다음에 대답이 와요. 소리 내어 읽으며 차례를 확인해 보세요.'),
            [
              OR('이름을 묻는 대화를 차례대로 놓아 보세요.', ['Hello!', 'Hi! What is your name?', 'My name is Mina.'], { x: ['Goodbye!'] }),
              OR('나이를 묻는 대화를 차례대로 놓아 보세요.', ['Hi, Jun!', 'Hi, Mina! How old are you?', 'I am ten.'], { d: 0.25, x: ['It is Monday.'] }),
              OR('학교에 대한 대화를 차례대로 놓아 보세요.', ['Excuse me.', 'Yes?', 'Where is the library?', 'It is on the second floor.'], { d: 0.35 }),
              OR('좋아하는 것을 묻는 대화를 차례대로 놓아 보세요.', ['Hi!', 'Hello! What is your favorite color?', 'I like green.', 'Me too!'], { d: 0.4 }),
            ]],
          ['활동 2. 핵심 답 되말하기와 짝 대화', '"대화를 듣고 핵심 답을 한 문장으로 되말해요. 되말한 뒤 짝이 맞았는지 확인해 줘요." 되말하기 문장을 소리 내어 읽게 한다. 마지막 문항은 짝과 직접 대화를 이어 말하는 활동이다. 되말할 때 자기 생각을 섞는 학생에게는 들은 정보만 말하게 한다.', '핵심 답으로 문장을 완성하고, 짝과 직접 대화를 이어 말해요.', 'wordcards',
            LA('fill', '짝이 한 대답 가운데 질문과 관계 있는 정보를 찾아 빈칸에 넣어 보세요.'),
            [
              FI('짝이 "My name is Jun."이라고 말했어요. 되말하는 문장을 완성해 보세요.', ['His name is ___.'], ['Jun', 'Mina', 'ten'], ['Jun'], { x: ['June'] }),
              FI('짝이 "I am eleven."이라고 말했어요. 되말하는 문장을 완성해 보세요.', ['She is ___.'], ['eleven', 'ten', 'twelve'], ['eleven'], { d: 0.3, x: ['seven'] }),
              FI('짝이 "I like blue."라고 말했어요. 되말하는 문장을 완성해 보세요.', ['He likes ___.'], ['blue', 'red', 'green'], ['blue'], { d: 0.3, x: ['black'] }),
              TALK('짝과 인사하고, 이름이나 좋아하는 색 가운데 하나를 묻고 대답하세요. 짝의 대답을 한 문장으로 되말한 뒤 "다 했어요"를 누르세요.'),
            ]],
        ],
        wT: '"짝의 말을 되말해 주었을 때 어떤 점이 좋았나요?" 들은 것이 맞는지 확인할 수 있었다는 말을 이끌어 낸다. 되말하기가 어려웠던 학생은 다음 시간 시작에 짧은 대답 하나부터 되말하게 한다.',
        ex: [
          { type: 'tool', tool: 'wordcards', options: { mode: 'order', cards: NC(['Hello!', 'Hi! How old are you?', 'I am nine.']) }, prompt: '나이를 묻는 대화를 차례대로 놓아 보세요.', target: { order: ['Hello!', 'Hi! How old are you?', 'I am nine.'] }, difficulty: 0.25 },
          { type: 'choice', prompt: '짝이 "I like blue."라고 말했을 때 되말하는 문장은 무엇일까요?', options: ['He likes blue.', 'He is blue.', 'He has blue.'], answer: 0, difficulty: 0.2, explain: '좋아한다는 말은 likes로 되말해요.' },
        ],
        wsT: '세 줄 대화와 되말하기',
        ws: [
          { type: 'table', prompt: '대화를 완성해 보세요.', columns: ['말하는 사람', '말'], cells: [['A', 'Hello!'], ['B', 'Hi! What is your name?'], ['A', 'My name is ___.']], answer: '예: Mina' },
          { type: 'choice', prompt: '대화에서 가장 먼저 하면 좋은 말에 ○ 하세요.', options: ['Hello!', 'Goodbye!', 'Me too!'], answer: 'Hello!' },
          { type: 'blank', prompt: '되말하는 문장의 빈칸을 채우세요.', text: '짝: I am ten. → She ___ ten.', answer: 'is' },
          { type: 'short', prompt: '짝과 한 대화에서 짝이 한 대답을 한 문장으로 써 보세요.' },
        ],
        note: '인사, 질문, 대답의 차례를 먼저 정해요.',
        ch: '대화가 네 줄로 길어지고, 되말하기를 직접 말로 이어 가요.',
        nt: '자주 보이는 어려움: ① 인사 없이 질문으로 시작한다 → 대화는 인사로 시작한다고 상기시킨다. ② 되말할 때 I와 He/She를 헷갈린다 → 짝을 가리키며 말하게 한다. ③ 짝의 대답을 듣지 않는다 → 되말하기를 위해 끝까지 들어야 한다고 알려 준다.',
      }),

      // ───────────────────────── 13차시 (core) ─────────────────────────
      lesson(13, {
        std: S10, t: '말하다 틀려도 멈추지 않고 다시 말하기',
        o: '말하다 틀렸을 때 멈추지 않고 Sorry와 다시 말하는 문장을 이어서 말할 수 있다.',
        ill: ['a child pausing mid-sentence then smiling and continuing while friends cheer with thumbs up', 'Sorry. I am ten.', '틀려도 다시 말하기'],
        iT: '교사가 일부러 "I am ten year."라고 말하고 잠시 멈춘다. "선생님이 틀렸어요. 어떻게 하면 좋을까요?" 학생들이 말하게 한 뒤 "Sorry. I am ten years old."로 다시 말하는 시범을 보인다. 틀리면 부끄러워 말을 멈추는 학생에게는 선생님도 틀릴 때가 있고 다시 말하면 된다고 이야기해 준다.',
        iS: '말하다 틀리면 어떻게 하면 좋을까요? 선생님처럼 다시 말해 봐요.',
        demo: { tool: 'wordcards', options: { mode: 'order', cards: NC(['Sorry.', 'I am ten years old.']) }, sequence: [{ at: {} }, { at: { 'Sorry.': 0 } }] },
        a: [
          ['활동 1. 틀렸을 때 어떻게 할지 고르기', '"틀렸을 때 가장 알맞은 행동을 골라요. 고른 행동의 말을 소리 내어 해 봐요." 상황마다 결과를 보고 왜 그 행동이 좋은지 말하게 한다. 말하기를 그만두는 보기를 고른 학생에게는 그 뒤 친구 마음이 어떤지 생각하게 한다.', '상황을 읽고 알맞은 행동을 골라요. 고른 말은 소리 내어 해 봐요.', 'emotion',
            LB,
            [
              BR('Jun이 말하다 틀렸어요. 어떻게 하면 좋을까요?', 'Jun', 'I am ten year. (틀렸어요)', '걱정', [['Sorry. I am ten years old.', 'Jun이 웃으며 다시 말해요. 친구들이 고개를 끄덕여요.'], ['(말을 멈추고 앉는다)', 'Jun이 말을 못 해서 속상해요.', '말을 멈추면 하고 싶은 말을 전할 수 없어요.'], ['(작게 웃고 한국어로 말한다)', '친구가 영어로 듣지 못해 아쉬워요.', '틀려도 영어로 다시 말하는 연습을 해요.']], 0),
              BR('Mina가 이름을 잘못 말했어요. 어떻게 하면 좋을까요?', 'Mina', 'My name is Min. (Mina라고 말하려 했어요)', '걱정', [['Sorry. My name is Mina.', 'Mina가 다시 말하고 친구가 이해해요.'], ['(얼굴이 빨개져 말하지 않는다)', 'Mina가 속상해해요.', '부끄러워도 다시 말해 보면 더 자신 있어져요.'], ['(다른 친구 이름을 말한다)', '친구들이 헷갈려요.', '내 이름을 바르게 다시 말해야 해요.']], 0, { d: 0.25 }),
              BR('Jun이 색깔 낱말을 잊었어요. 어떻게 하면 좋을까요?', 'Jun', 'I like ... (낱말이 생각나지 않아요)', '걱정', [['Wait. I like blue.', 'Jun이 생각해 낸 낱말로 말해요.'], ['(조용히 서 있는다)', '친구들이 기다려요. 말하지 못해 속상해요.', '잠깐 멈추고 Wait이라고 말하면 시간을 얻을 수 있어요.'], ['(자리에 앉는다)', '말할 기회를 놓쳤어요.', '앉기보다 다시 생각해 말해 보아요.']], 0, { d: 0.3 }),
            ]],
          ['활동 2. 틀린 말과 다시 말한 문장 짝 짓기', '"틀린 말 옆에 고쳐서 다시 말한 문장을 놓아요. 놓은 뒤 두 문장을 이어서 소리 내어 읽어요." Sorry로 시작하는 것을 확인한다. 틀린 부분을 찾지 못하는 학생에게는 두 문장을 비교하며 다른 낱말에 밑줄을 긋게 한다.', '틀린 말 옆에 알맞은 고쳐 말하는 문장을 놓아요.', 'wordcards',
            LA('match', '두 문장을 소리 내어 읽고, 어느 낱말이 달라졌는지 찾아보세요.'),
            [
              MT('틀린 말을 고쳐 말한 문장을 놓아 보세요.', [['I am ten year.', 'Sorry. I am ten years old.'], ['She like cats.', 'Sorry. She likes cats.']], { x: ['Sorry. I am happy.'] }),
              MT('틀린 말을 고쳐 말한 문장을 놓아 보세요.', [['He is hungries.', 'Sorry. He is hungry.'], ['I from Korea.', 'Sorry. I am from Korea.']], { d: 0.3, x: ['Sorry. She is hungry.'] }),
              MT('틀린 말을 고쳐 말한 문장을 놓아 보세요.', [['My name Mina.', 'Sorry. My name is Mina.'], ['It Monday.', 'Sorry. It is Monday.'], ['I like blues.', 'Sorry. I like blue.']], { d: 0.35 }),
              PK('틀렸을 때 가장 먼저 하면 좋은 말을 골라 보세요.', ['Sorry.', 'Never mind.', 'I give up.'], ['Sorry.'], { d: 0.2, x: ['I quit.'] }),
            ]],
        ],
        wT: '"틀렸을 때 멈추지 않고 다시 말해 보니 어땠나요?" 부끄러움이 줄었는지 물어본다. 틀린 것을 숨기려는 학생에게는 다시 말하는 것이 용기라고 칭찬해 준다.',
        ex: [
          { type: 'tool', tool: 'wordcards', options: { mode: 'pick', basket: '고른 말', shuffle: false, cards: NC(['Sorry. I am nine years old.', 'I give up.', 'No.']) }, prompt: '"I am nine year."라고 틀렸어요. 알맞게 다시 말한 문장을 골라 보세요.', target: { pick: ['Sorry. I am nine years old.'] }, difficulty: 0.25 },
          { type: 'choice', prompt: '말하다 틀렸을 때 가장 좋은 행동은 무엇일까요?', options: ['Sorry 하고 다시 말한다', '말을 멈춘다', '아무 말도 하지 않는다'], answer: 0, difficulty: 0.15, explain: '틀려도 다시 말하면 점점 나아져요.' },
        ],
        wsT: '틀려도 다시 말하기',
        ws: [
          { type: 'table', prompt: '틀린 말을 바르게 고쳐 다시 말하는 문장을 써 보세요.', columns: ['틀린 말', '다시 말하기'], cells: [['I am ten year.', 'Sorry. I am ten years old.'], ['She like cats.', ''], ['It Monday.', '']], answer: 'Sorry. She likes cats. / Sorry. It is Monday.' },
          { type: 'choice', prompt: '틀렸을 때 가장 먼저 쓰면 좋은 말에 ○ 하세요.', options: ['Sorry.', 'Stop.', 'Bye.'], answer: 'Sorry.' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: 'Sorry. I ___ ten years old.', answer: 'am' },
          { type: 'short', prompt: '틀렸을 때 내 마음이 어땠는지, 다시 말하면 어땠는지 한 줄로 써 보세요.' },
        ],
        note: '먼저 Sorry. 라고 말한 뒤 바르게 고친 문장을 말해요.',
        ch: '고칠 곳이 둘인 문장이 나오고, 비슷한 고친 문장 카드가 섞여 있어요.',
        nt: '자주 보이는 어려움: ① 틀리면 부끄러워 말을 그만둔다 → 교사가 일부러 틀리고 다시 말하는 시범을 자주 보인다. ② Sorry만 말하고 다시 말하지 않는다 → 다시 말하는 문장까지 해 보게 한다. ③ 친구가 틀렸을 때 웃는다 → 틀려도 다시 말하는 친구를 응원하는 약속을 정한다.',
      }),
            // ───────────────────────── 14차시 (practice) ─────────────────────────
      lesson(14, {
        std: S10, t: '다시 말해 보고 나아진 점 골라 밝히기',
        o: '처음 말과 다시 말한 말을 견주어 어떤 점이 나아졌는지 고르고, 자기 말하기를 스스로 점검할 수 있다.',
        ill: ['a child standing before a mirror practicing a sentence twice with a small chart showing a bigger smile the second time', 'Try again!', '다시 말해 보기'],
        iT: '교사가 "I am ten."을 아주 작은 목소리로 말하고, 이어 큰 목소리로 한 번 더 말한다. "두 번째 말은 무엇이 달라졌나요?" 목소리가 커졌고 또렷해졌다는 답을 모은다. 다시 말하는 것이 틀렸다는 뜻이라고 생각하는 학생에게는 처음보다 좋아지려는 연습이라고 말해 준다.',
        iS: '같은 문장을 두 번 말해 보면 무엇이 달라질까요? 목소리와 낱말에 귀 기울여 봐요.',
        demo: { tool: 'wordcards', options: { mode: 'pick', basket: '더 나아진 말', shuffle: false, cards: NC(['I am ten years old.', 'I am ten year.']) }, sequence: [{ at: {} }, { at: { 'I am ten years old.': 0 } }] },
        a: [
          ['활동 1. 두 번째 말에서 나아진 점 고르기', '"처음 말과 두 번째 말을 읽고 나아진 쪽을 골라요. 왜 나아졌는지도 말해 봐요." 두 문장을 소리 내어 읽고 낱말 하나가 바뀌었는지 찾게 한다. 둘 다 같다고 말하는 학생에게는 단어 하나씩 짚어 가며 읽게 한다.', '더 나아진 두 번째 말을 골라요. 어떤 점이 나아졌는지 짝에게 말해요.', 'wordcards',
            LA('pick', '두 문장을 소리 내어 읽고 낱말이 어떻게 달라졌는지 찾아보세요. 말이 되는 쪽이 나아진 쪽이에요.'),
            [
              PK('처음에 "She like blue."라고 말했어요. 나아진 두 번째 말을 골라 보세요.', ['She likes blue.', 'She like blue.', 'Like she blue.'], ['She likes blue.'], { x: ['She liking blue.'] }),
              PK('처음에 "I from Korea."라고 말했어요. 나아진 두 번째 말을 골라 보세요.', ['I am from Korea.', 'I from Korea.', 'Korea from I.'], ['I am from Korea.'], { d: 0.2, x: ['I is from Korea.'] }),
              PK('처음에 "Hungry I am."이라고 말했어요. 나아진 두 번째 말을 골라 보세요.', ['I am hungry.', 'Hungry I am.', 'Am hungry I.'], ['I am hungry.'], { d: 0.3, x: ['I hungry am.'] }),
              PK('두 번째 말에서 나아진 점은 무엇일까요? (첫 번째 "I am sad", 아주 작게 → 두 번째 "I am sad.", 또렷하게)', ['목소리가 또렷해졌어요', '낱말이 바뀌었어요', '아무것도 달라지지 않았어요'], ['목소리가 또렷해졌어요'], { d: 0.25 }),
            ]],
          ['활동 2. 내 말하기 스스로 점검하기', '"방금 짝과 말한 것을 떠올리며 내 마음에 가까운 칸을 골라요." 정답은 없고 솔직하게 고르는 것이라고 안내한다. 잘했다고만 고르려는 학생에게는 구체적으로 어떤 점이 좋았는지 말해 보게 한다. 고르기 어려워하면 짝에게 어땠는지 물어보게 한다.', '내 말하기를 떠올리며 알맞은 칸을 골라요.', 'emotion',
            { easy: { mode: 'scale' }, base: { mode: 'scale' }, challenge: { mode: 'scale' } },
            [
              { prompt: '틀려도 멈추지 않고 이어서 말한 정도를 골라 보세요.', toolOptions: { mode: 'scale', situation: '말하다 틀려도 멈추지 않고 이어서 말했어요', feeling: '뿌듯함', steps: 3, scaleLabels: { 1: '아직 어려워요', 2: '조금 할 수 있어요', 3: '자신 있게 해요' } }, target: { level: 'any' }, difficulty: 0.05 },
              { prompt: '다시 말한 뒤 목소리가 또렷해진 정도를 골라 보세요.', toolOptions: { mode: 'scale', situation: '다시 말했을 때 목소리가 또렷해졌어요', feeling: '뿌듯함', steps: 3, scaleLabels: { 1: '아직 어려워요', 2: '조금 되었어요', 3: '많이 되었어요' } }, target: { level: 'any' }, difficulty: 0.05 },
              { prompt: '틀린 낱말을 스스로 고쳐 말한 정도를 골라 보세요.', toolOptions: { mode: 'scale', situation: '틀린 낱말을 스스로 알아채고 고쳐 말했어요', feeling: '뿌듯함', steps: 3, scaleLabels: { 1: '아직 어려워요', 2: '조금 되었어요', 3: '잘 되었어요' } }, target: { level: 'any' }, difficulty: 0.05 },
            ]],
        ],
        wT: '"다시 말했더니 처음보다 나아진 점이 있나요?" 두세 명이 이야기하게 한다. 나아진 점을 찾지 못한 학생에게는 목소리 크기나 속도에서 달라진 점을 함께 찾아 준다.',
        ex: [
          { type: 'tool', tool: 'wordcards', options: { mode: 'pick', basket: '더 나아진 말', shuffle: false, cards: NC(['He likes dogs.', 'He like dogs.']) }, prompt: '처음에 "He like dogs."라고 말했어요. 나아진 말을 골라 보세요.', target: { pick: ['He likes dogs.'] }, difficulty: 0.25 },
          { type: 'choice', prompt: '다시 말하기의 좋은 점은 무엇일까요?', options: ['처음보다 나아질 수 있어요', '틀리면 안 돼요', '친구가 웃어요'], answer: 0, difficulty: 0.15, explain: '다시 말하면 틀린 곳을 고치고 더 나아질 수 있어요.' },
        ],
        wsT: '다시 말하고 나아진 점 쓰기',
        ws: [
          { type: 'table', prompt: '처음 말과 다시 말한 말을 비교해 쓰세요.', columns: ['처음 말', '다시 말한 말'], cells: [['She like blue.', 'She likes blue.'], ['I from Korea.', ''], ['Hungry I am.', '']], answer: 'I am from Korea. / I am hungry.' },
          { type: 'choice', prompt: '다시 말한 뒤 달라진 점으로 알맞은 것에 ○ 하세요.', options: ['소리가 또렷해졌어요', '아무 말도 안 했어요', '친구가 떠났어요'], answer: '소리가 또렷해졌어요' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: 'She ___ blue. (likes / like)', answer: 'likes' },
          { type: 'short', prompt: '다시 말해 보니 나아진 점을 한 줄로 써 보세요.' },
        ],
        note: '처음 말과 두 번째 말에서 달라진 낱말을 찾아요.',
        ch: '비슷한 모양의 문장 카드가 섞여 있고, 나아진 이유까지 말해요.',
        nt: '자주 보이는 어려움: ① 다시 말하는 것을 틀린 것에 대한 벌처럼 느낀다 → 연습의 한 과정이라고 말해 준다. ② 두 문장 차이를 찾지 못한다 → 한 낱말씩 짚어 읽게 한다. ③ 스스로 점검에서 모두 높게 고른다 → 구체적인 순간을 떠올려 말하게 한다.',
      }),

      // ───────────────────────── 15차시 (core) ─────────────────────────
      lesson(15, {
        std: S10, t: '때에 맞는 인사말 고르고 말하는 차례 지키기',
        o: '아침, 낮, 헤어질 때에 맞는 인사말을 고르고, 상대의 말을 끝까지 들은 뒤 내 차례에 말할 수 있다.',
        ill: ['two children bowing and waving with a sun on one side and a moon on the other and a speech bubble in the middle', 'Good morning!', '인사와 차례 지키기'],
        iT: '교실 문에서 "Good morning!"이라고 인사하며 학생들을 맞이한다. "아침에 만났을 때 하는 인사는 무엇이었죠?" 라고 묻고 Good morning을 칠판에 쓴다. 이어 "Goodbye." "See you."를 소개한다. 인사말을 외우기만 하고 상대를 바라보지 않는 학생에게는 눈을 마주치며 인사해 보라고 말해 준다.',
        iS: '아침, 낮, 헤어질 때 어떻게 인사할까요? 친구를 바라보며 인사해 봐요.',
        demo: { tool: 'wordcards', options: { mode: 'match', slots: [{ id: 'm1', label: '아침에 만났을 때' }], cards: NC(['Good morning.', 'Goodbye.']) }, sequence: [{ at: {} }, { at: { 'Good morning.': 0 } }] },
        a: [
          ['활동 1. 상황에 맞는 인사말 짝 짓기', '"언제 쓰는 인사인지 보고 알맞은 인사말을 놓아요. 놓은 뒤 눈을 마주치며 인사해 봐요." 도전 단계에는 비슷한 뜻의 인사말 카드가 섞여 있다. 인사말을 한 가지로만 쓰는 학생에게는 때에 따라 달라지는 인사말을 비교하게 한다.', '상황 옆에 알맞은 인사말을 놓고, 짝에게 인사해요.', 'wordcards',
            LA('match', '인사하는 때가 아침인지 낮인지 헤어질 때인지 먼저 정해 보세요.'),
            [
              MT('상황에 알맞은 인사말을 놓아 보세요.', [['아침에 친구를 만났어요', 'Good morning.'], ['수업이 끝나 헤어져요', 'Goodbye.']], { x: ['Good night.'] }),
              MT('상황에 알맞은 인사말을 놓아 보세요.', [['오후에 선생님을 만났어요', 'Good afternoon.'], ['처음 만난 친구에게 인사해요', 'Nice to meet you.']], { d: 0.25, x: ['See you.'] }),
              MT('상황에 알맞은 인사말을 놓아 보세요.', [['내일 또 만나요', 'See you tomorrow.'], ['자기 전에 가족에게 인사해요', 'Good night.'], ['아침 일찍 학교에 도착했어요', 'Good morning.']], { d: 0.35 }),
              PK('친구가 처음 만난 사람이에요. 알맞은 인사말을 골라 보세요.', ['Nice to meet you.', 'Good night.', 'See you.'], ['Nice to meet you.'], { d: 0.2 }),
            ]],
          ['활동 2. 말하는 차례 지켜 대화하기', '"내 차례와 친구 차례를 지키며 대화해요. 친구가 말할 때는 끝까지 들어요." 차례를 알리는 말 My turn., Your turn.도 함께 쓴다. 상대가 말하는 중에 끼어드는 학생에게는 손을 들어 기다리라는 신호를 알려 준다.', '대화 카드를 차례대로 놓고, 짝과 번갈아 읽으며 차례를 지켜요.', 'wordcards',
            LA('order', '인사하고, 안부를 묻고, 대답하는 차례를 떠올려 보세요. 한 사람이 말을 마친 뒤에 다음 사람이 말해요.'),
            [
              OR('인사 대화를 차례대로 놓아 보세요.', ['Hello!', 'Hi!', 'How are you?', 'I am fine, thank you.'], { x: ['Goodbye!'] }),
              OR('차례를 지키는 말을 차례대로 놓아 보세요.', ['My turn.', 'Okay.', 'Your turn.', 'Thank you.'], { d: 0.3, x: ['Hurry up.'] }),
              OR('아침 대화를 차례대로 놓아 보세요.', ['Good morning, Jun.', 'Good morning, Mina.', 'Are you okay?', 'Yes, I am.'], { d: 0.35 }),
            ]],
        ],
        wT: '"인사할 때 친구를 바라보니 어땠나요?" 눈을 마주치는 것이 인사의 일부임을 이야기한다. 자기 말만 서둘러 하고 끝낸 학생은 다음 시간 시작에 친구 말을 한 번 되말한 뒤에 말하게 한다.',
        ex: [
          { type: 'tool', tool: 'wordcards', options: { mode: 'match', shuffle: false, slots: [{ id: 'm1', label: '오후에 만났어요' }, { id: 'm2', label: '헤어져요' }], cards: NC(['Good afternoon.', 'Goodbye.']) }, prompt: '상황에 알맞은 인사말을 놓아 보세요.', target: { match: { m1: 'Good afternoon.', m2: 'Goodbye.' } }, difficulty: 0.25 },
          { type: 'choice', prompt: '친구가 말하는 동안 내가 해야 할 일은 무엇일까요?', options: ['끝까지 듣는다', '먼저 말한다', '다른 곳을 본다'], answer: 0, difficulty: 0.15, explain: '친구가 말하는 동안에는 끝까지 듣고 내 차례를 기다려요.' },
        ],
        wsT: '인사말과 차례 지키기',
        ws: [
          { type: 'table', prompt: '때에 알맞은 인사말을 쓰세요.', columns: ['때', '인사말'], cells: [['아침', 'Good morning.'], ['오후', ''], ['헤어질 때', ''], ['처음 만날 때', '']], answer: 'Good afternoon. / Goodbye. / Nice to meet you.' },
          { type: 'choice', prompt: '차례를 지키며 말한 것에 ○ 하세요.', options: ['친구 말이 끝난 뒤 내가 말한다', '친구 말 중간에 말한다', '말하지 않는다'], answer: '친구 말이 끝난 뒤 내가 말한다' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: 'Good ___.   ___ turn. (내 차례)', answer: 'morning / My' },
          { type: 'short', prompt: '오늘 아침 친구에게 건넨 인사를 영어로 써 보세요.' },
        ],
        note: '인사하는 때를 먼저 정하고 상대를 바라보며 말해요.',
        ch: '비슷한 인사말 카드가 섞여 있고, 대화가 네 줄로 길어져요.',
        nt: '자주 보이는 어려움: ① 인사말을 한 가지로만 쓴다 → 때에 따라 달라지는 인사를 비교하게 한다. ② 서둘러 자기 말만 하고 끝낸다 → 친구 말을 한 번 되말하고 내 말을 하게 한다. ③ 상대를 바라보지 않고 말한다 → 눈 마주치기를 약속으로 정한다.',
      }),

      // ───────────────────────── 16차시 (practice) ─────────────────────────
      lesson(16, {
        std: S10, t: '인사말과 차례 말을 나누어 대화 빈칸 채우기',
        o: '인사말과 차례를 알리는 말을 구분하여 나누고, 짝과 대화에서 알맞은 말을 골라 빈칸에 넣어 말할 수 있다.',
        ill: ['two children passing a speaking token back and forth between them with a greeting bubble above each', 'My turn.  Your turn.', '인사와 차례 말'],
        iT: '"인사하는 말과 차례를 알리는 말은 어떻게 다를까요?" 칠판에 Hello.와 Your turn.을 쓰고 어떤 때에 쓰는지 묻는다. 인사는 만났을 때, 차례 말은 대화를 이어 갈 때 쓴다는 점을 확인한다. 둘 다 같은 때에 쓰는 말이라고 생각하는 학생에게는 대화에서 어느 순간에 쓰는지 하나씩 말하게 한다.',
        iS: '인사하는 말과 차례를 알리는 말은 언제 쓸까요? 나누어 보아요.',
        demo: { tool: 'wordcards', options: { mode: 'sort', slots: [{ id: 'g1', label: '인사하는 말' }, { id: 'g2', label: '차례 알리는 말' }], cards: NC(['Hello.', 'Your turn.']) }, sequence: [{ at: {} }, { at: { 'Hello.': 0 } }] },
        a: [
          ['활동 1. 인사말과 차례 말 나누기', '"말마다 언제 쓰는지 생각하며 두 칸으로 나누어요." 놓은 뒤 각 말을 소리 내어 읽고 어떤 때에 쓰는지 짝에게 설명한다. 칸 이름을 읽지 않고 놓는 학생에게는 칸 이름을 먼저 읽게 한다. 도전 단계에는 두 칸 어디에도 속하지 않는 카드가 섞여 있다.', '말 카드를 인사하는 말과 차례 알리는 말로 나누어 놓아요.', 'wordcards',
            LA('sort', '대화를 시작하거나 끝낼 때 쓰는 말인지, 말하는 사람을 바꿀 때 쓰는 말인지 생각해 보세요.'),
            [
              SO('말 카드를 알맞은 칸에 나누어 놓아 보세요.', [['인사하는 말', ['Hello.', 'Goodbye.']], ['차례 알리는 말', ['My turn.', 'Your turn.']]], { x: ['Pencil.'] }),
              SO('말 카드를 알맞은 칸에 나누어 놓아 보세요.', [['인사하는 말', ['Good morning.', 'See you.']], ['차례 알리는 말', ['Go ahead.', 'Next, please.']]], { d: 0.3, x: ['Apple.'] }),
              SO('말 카드를 알맞은 칸에 나누어 놓아 보세요.', [['인사하는 말', ['Hi!', 'Good afternoon.', 'Bye!']], ['차례 알리는 말', ['After you.', 'My turn.', 'Your turn.']]], { d: 0.4 }),
            ]],
          ['활동 2. 대화 속 빈칸에 알맞은 말 넣기', '"대화를 읽으며 빈칸에 알맞은 말을 골라 넣어요. 완성한 대화는 짝과 역할을 바꾸어 읽어요." 빈칸의 앞뒤 말을 소리 내어 읽고 알맞은 말을 찾게 한다. 빈칸을 앞뒤 말과 상관없이 채우는 학생에게는 대화 전체를 한 번 읽게 한다.', '대화 빈칸에 알맞은 말을 놓고, 짝과 역할을 바꾸어 읽어요.', 'wordcards',
            LA('fill', '빈칸 앞뒤의 말을 소리 내어 읽고, 자연스럽게 이어지는 말을 찾아보세요.'),
            [
              FI('대화의 빈칸을 채워 보세요. (만났을 때)', ['A: ___ morning!', 'B: Good morning!'], ['Good', 'Bye', 'Next'], ['Good'], { x: ['Nice'] }),
              FI('대화의 빈칸을 채워 보세요. (차례를 알릴 때)', ['A: I am done. ___ turn.', 'B: Okay, thank you.'], ['Your', 'My', 'Good'], ['Your'], { d: 0.25, x: ['Their'] }),
              FI('대화의 빈칸을 채워 보세요. (헤어질 때)', ['A: Time is up. ___!', 'B: See you tomorrow!'], ['Goodbye', 'Hello', 'Next'], ['Goodbye'], { d: 0.3 }),
              FI('대화의 빈칸 두 곳을 채워 보세요.', ['A: ___! How are you?', 'B: I am fine. Your ___.'], ['Hello', 'turn', 'Bye'], ['Hello', 'turn'], { d: 0.4 }),
            ]],
        ],
        wT: '"차례를 알리는 말을 쓰니 대화가 어떻게 달라졌나요?" 서로 겹치지 않고 말했다는 이야기를 이끌어 낸다. 말을 겹쳐 하는 학생은 다음 시간 시작에 말하기 막대를 들고 대화하게 한다.',
        ex: [
          { type: 'tool', tool: 'wordcards', options: { mode: 'sort', shuffle: false, slots: [{ id: 'g1', label: '인사하는 말' }, { id: 'g2', label: '차례 알리는 말' }], cards: NC(['Hi!', 'Next, please.']) }, prompt: '두 말을 알맞은 칸에 놓아 보세요.', target: { sort: { g1: ['Hi!'], g2: ['Next, please.'] } }, difficulty: 0.25 },
          { type: 'choice', prompt: '"Your turn."은 언제 쓰는 말일까요?', options: ['상대에게 말할 차례를 줄 때', '아침에 만났을 때', '헤어질 때'], answer: 0, difficulty: 0.15, explain: 'Your turn.은 상대에게 차례를 넘겨주는 말이에요.' },
        ],
        wsT: '인사말과 차례 말 구분하기',
        ws: [
          { type: 'table', prompt: '말을 알맞은 칸에 쓰세요.', columns: ['인사하는 말', '차례 알리는 말'], cells: [['Hello.', 'My turn.'], ['', ''], ['', '']], answer: '예: Goodbye. / Your turn.' },
          { type: 'choice', prompt: '차례를 알리는 말에 ○ 하세요.', options: ['Your turn.', 'Hello.', 'Good morning.'], answer: 'Your turn.' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: 'A: ___ turn. B: Thank you.   (내 차례일 때)', answer: 'My' },
          { type: 'short', prompt: '짝에게 차례를 넘길 때 쓰는 영어 말을 써 보세요.' },
        ],
        note: '말을 하는 때가 인사인지 차례 넘기기인지 정해요.',
        ch: '어느 칸에도 속하지 않는 카드가 섞여 있고, 빈칸이 두 곳이에요.',
        nt: '자주 보이는 어려움: ① 인사말과 차례 말을 모두 인사로 여긴다 → 대화 순서에서 어느 때에 쓰는지 말하게 한다. ② 대화가 겹쳐 말하기가 된다 → 차례를 알리는 말을 직접 써 보게 한다. ③ 빈칸 앞뒤 말을 읽지 않는다 → 대화 전체를 소리 내어 읽게 한다.',
      }),

      // ───────────────────────── 17차시 (core) ─────────────────────────
      lesson(17, {
        std: S7, t: '본보기를 보고 친구에게 보내는 감정 카드 문장 쓰기',
        o: '본보기 카드를 보고 Dear ___, I am ___. Thank you! 문장을 순서대로 놓아 짧은 감정 카드를 만들 수 있다.',
        ill: ['a child holding a small handmade greeting card with a heart and short English lines written in a neat row', 'Dear Mina,', '감정 카드 쓰기'],
        iT: '교사가 칠판에 본보기 카드를 쓴다. "Dear Mina, / I am happy. / Thank you! / From Jun" 한 줄씩 읽고 "이 카드를 받은 Mina는 어떤 기분일까요?"라고 묻는다. 카드를 꾸미는 데만 힘쓰고 문장은 한 낱말로 끝내는 학생에게는 "무슨 기분인지 문장으로 써 볼까요?"라고 말해 준다.',
        iS: '친구에게 마음을 전하는 카드를 만들어 봐요. 카드에는 어떤 말이 들어갈까요?',
        demo: { tool: 'wordcards', options: { mode: 'order', cards: NC(['Dear Mina,', 'I am happy.', 'From Jun']) }, sequence: [{ at: {} }, { at: { 'Dear Mina,': 0 } }] },
        a: [
          ['활동 1. 카드 문장 차례대로 놓기', '"카드는 누구에게, 내 마음, 인사, 보내는 사람 순서로 써요. 카드 문장을 순서대로 놓은 뒤 소리 내어 읽어요." 순서를 바꾸어 놓은 학생에게는 편지를 받는 사람이 처음에 있어야 한다고 짚어 준다. 도전 단계에는 쓰지 않는 카드가 섞여 있다.', '카드 문장을 차례대로 놓고, 처음부터 소리 내어 읽어요.', 'wordcards',
            LA('order', '카드는 받는 사람을 먼저 쓰고, 마음을 쓰고, 보내는 사람을 마지막에 써요. 소리 내어 읽으며 확인해 보세요.'),
            [
              OR('생일 감사 카드를 차례대로 놓아 보세요.', ['Dear Mina,', 'I am happy.', 'Thank you!', 'From Jun'], { x: ['Goodbye.'] }),
              OR('위로 카드를 차례대로 놓아 보세요.', ['Dear Tom,', 'I am sorry.', 'Cheer up!', 'From Sora'], { d: 0.3, x: ['Hello.'] }),
              OR('응원 카드를 차례대로 놓아 보세요.', ['Dear Ben,', 'You can do it!', 'I am with you.', 'From Yuna'], { d: 0.35 }),
              OR('감사 카드를 차례대로 놓아 보세요.', ['Dear Teacher,', 'I am glad.', 'Thank you!', 'From Jun'], { d: 0.25, x: ['Wait.'] }),
            ]],
          ['활동 2. 카드 빈칸에 알맞은 낱말 쓰기', '"카드의 빈칸에 알맞은 낱말을 놓아 카드를 완성해요. 완성한 카드는 소리 내어 읽어요." 받는 사람, 기분, 인사 중 어떤 칸인지 먼저 말하게 한다. 이름 자리에 아무 낱말이나 놓는 학생에게는 카드를 받는 사람이 누구인지 물어본다.', '카드 빈칸에 알맞은 낱말을 놓고, 카드를 소리 내어 읽어요.', 'wordcards',
            LA('fill', '빈칸이 받는 사람인지, 내 기분인지, 마음을 전하는 말인지 먼저 정한 뒤 낱말을 찾아보세요.'),
            [
              FI('생일 카드의 빈칸을 채워 보세요.', ['Dear ___,', 'I am happy today.'], ['Mina', 'happy', 'Thanks'], ['Mina'], { x: ['Jun'] }),
              FI('감사 카드의 빈칸을 채워 보세요.', ['Dear Jun,', 'I am ___. ___ you!'], ['glad', 'Thank', 'sad'], ['glad', 'Thank'], { d: 0.35, x: ['Think'] }),
              FI('사과 카드의 빈칸을 채워 보세요.', ['Dear Mina,', 'I am ___.', 'From ___'], ['sorry', 'Jun', 'happy'], ['sorry', 'Jun'], { d: 0.4 }),
              PK('카드에서 "받는 사람"을 나타내는 줄을 골라 보세요.', ['Dear Mina,', 'Thank you!', 'From Jun'], ['Dear Mina,'], { d: 0.2, x: ['Hello!'] }),
            ]],
        ],
        wT: '"카드를 받는 친구의 마음을 생각해 한 줄을 더 써 볼까요?" 내 감정을 전하는 문장이 있는지 확인한다. 꾸미기만 하고 문장이 없는 학생은 다음 시간 시작에 I am ___. 한 줄을 먼저 쓰게 한다.',
        ex: [
          { type: 'tool', tool: 'wordcards', options: { mode: 'order', cards: NC(['Dear Jun,', 'I am excited.', 'See you!', 'From Mina']) }, prompt: '초대 카드의 문장을 차례대로 놓아 보세요.', target: { order: ['Dear Jun,', 'I am excited.', 'See you!', 'From Mina'] }, difficulty: 0.3 },
          { type: 'choice', prompt: '카드의 맨 처음에 쓰는 것은 무엇일까요?', options: ['받는 사람', '보내는 사람', '기분 낱말'], answer: 0, difficulty: 0.15, explain: '카드는 받는 사람을 먼저 쓰고 마지막에 보내는 사람을 써요.' },
        ],
        wsT: '짧은 감정 카드 쓰기',
        ws: [
          { type: 'table', prompt: '카드의 각 줄에 알맞은 말을 쓰세요.', columns: ['줄', '내용'], cells: [['받는 사람', 'Dear Mina,'], ['내 기분', 'I am ___.'], ['마음 전하기', 'Thank you!'], ['보내는 사람', 'From ___']], answer: '예: happy / Jun' },
          { type: 'choice', prompt: '카드의 마지막 줄에 ○ 하세요.', options: ['From Jun', 'Dear Mina,', 'I am happy.'], answer: 'From Jun' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: 'Dear Mina, I ___ happy. ___ you!', answer: 'am / Thank' },
          { type: 'short', prompt: '친구에게 보낼 짧은 카드를 영어 네 줄로 써 보세요.' },
        ],
        note: '받는 사람, 내 마음, 인사, 보내는 사람 순서로 써요.',
        ch: '쓰지 않는 카드가 섞여 있고, 빈칸이 두 곳이에요.',
        nt: '자주 보이는 어려움: ① 카드를 꾸미는 데 시간을 다 쓴다 → 문장 한 줄을 먼저 쓰고 꾸미게 한다. ② 순서를 헷갈린다 → 받는 사람이 처음, 보내는 사람이 마지막이라는 점을 짚는다. ③ 문장 대신 낱말만 쓴다 → I am ___. 틀을 보여 준다.',
      }),

      // ───────────────────────── 18차시 (practice) ─────────────────────────
      lesson(18, {
        std: S7, t: '카드를 다시 읽으며 빠진 낱말 찾아 채우기',
        o: '쓴 감정 카드를 소리 내어 다시 읽고 빠진 낱말을 찾아 채우며 짝과 바꾸어 확인할 수 있다.',
        ill: ['two children exchanging handmade cards and pointing at a blank spot with a small pencil', 'I ___ happy.', '카드 다시 읽고 고치기'],
        iT: '교사가 "I happy today."라고 쓴 카드를 보여 주고 "소리 내어 읽어 보세요. 어디가 이상한가요?"라고 묻는다. 학생들이 am이 빠졌다는 것을 찾아내면 한 곳을 고쳐 다시 읽는다. 쓰고 나면 끝이라고 여기는 학생에게는 다시 읽으면 보이는 것이 있다고 말해 준다.',
        iS: '쓴 카드를 소리 내어 읽어 보면 이상한 곳이 있을까요? 같이 찾아봐요.',
        demo: { tool: 'wordcards', options: { mode: 'fill', slots: [{ id: 'd1', label: 'I ___ happy.' }], cards: NC(['am', 'is']) }, sequence: [{ at: {} }, { at: { am: 0 } }] },
        a: [
          ['활동 1. 이상한 줄 찾기', '"카드를 소리 내어 읽고 낱말이 빠진 줄을 찾아요. 찾은 줄은 어떻게 고칠지 말해 봐요." 눈으로만 읽으면 놓치기 쉬우니 소리 내어 읽게 한다. 고칠 곳을 못 찾는 학생에게는 한 줄씩 손가락으로 짚으며 읽게 한다.', '카드의 줄을 소리 내어 읽고, 낱말이 빠진 줄을 골라요.', 'wordcards',
            LA('pick', '각 줄을 소리 내어 읽어 보세요. 읽다가 어색하게 느껴지는 줄에 낱말이 빠졌을 수 있어요.'),
            [
              PK('카드에서 낱말이 빠진 줄을 골라 보세요.', ['Dear Mina,', 'I happy today.', 'From Jun'], ['I happy today.'], { x: ['Thank you!'] }),
              PK('카드에서 낱말이 빠진 줄을 골라 보세요.', ['Dear Jun,', 'Thank you for the gift.', 'I very glad.'], ['I very glad.'], { d: 0.3, x: ['From Mina'] }),
              PK('카드에서 낱말이 빠진 줄을 골라 보세요.', ['Dear Sora,', 'I am sorry.', 'You my friend.'], ['You my friend.'], { d: 0.35, x: ['From Ben'] }),
              PK('카드를 점검하는 가장 좋은 방법을 골라 보세요.', ['소리 내어 다시 읽는다', '한 번만 눈으로 본다', '꾸미기만 한다'], ['소리 내어 다시 읽는다'], { d: 0.2 }),
            ]],
          ['활동 2. 빠진 낱말 채워 카드 고치기', '"빠진 낱말을 카드에서 찾아 채워요. 채운 뒤에는 처음부터 다시 읽고, 짝과 카드를 바꾸어 확인해요." 짝이 한 곳 더 찾아 주도록 안내한다. 고치기가 끝나면 다시 한 번 소리 내어 읽게 한다.', '빈칸에 알맞은 낱말을 놓아 카드를 고치고, 짝과 바꾸어 확인해요.', 'wordcards',
            LA('fill', '빈칸에 어떤 낱말이 들어가야 문장이 말이 되는지 소리 내어 읽어 보세요.'),
            [
              FI('카드의 빠진 낱말을 채워 보세요.', ['I ___ happy today.'], ['am', 'is', 'are'], ['am'], { x: ['be'] }),
              FI('카드의 빠진 낱말을 채워 보세요.', ['You ___ my friend.'], ['are', 'am', 'is'], ['are'], { d: 0.25, x: ['be'] }),
              FI('카드의 빠진 낱말 두 곳을 채워 보세요.', ['I ___ very glad.', '___ you for the gift.'], ['am', 'Thank', 'Think'], ['am', 'Thank'], { d: 0.35 }),
              TALK('짝과 카드를 바꾸어 읽고, 빠진 낱말이 있으면 한 곳을 찾아 알려 주세요. 다 했으면 "다 했어요"를 누르세요.'),
            ]],
        ],
        wT: '"카드를 다시 읽다가 고친 곳이 있었나요?" 한 곳을 골라 어떻게 고쳤는지 말하게 한다. 고칠 곳이 없다고 한 학생은 짝과 바꾸어 한 번 더 읽어 보게 한다.',
        ex: [
          { type: 'tool', tool: 'wordcards', options: { mode: 'fill', shuffle: false, slots: [{ id: 'e1', label: 'We ___ friends.' }], cards: NC(['are', 'is', 'am']) }, prompt: '카드의 빠진 낱말을 채워 보세요.', target: { fill: { e1: 'are' } }, difficulty: 0.25 },
          { type: 'choice', prompt: '다시 읽어 보면 좋은 까닭은 무엇일까요?', options: ['빠진 낱말을 찾을 수 있어요', '글자가 더 예뻐져요', '친구가 웃어요'], answer: 0, difficulty: 0.15, explain: '소리 내어 다시 읽으면 빠진 낱말이나 어색한 곳을 알 수 있어요.' },
        ],
        wsT: '카드 다시 읽고 고치기',
        ws: [
          { type: 'table', prompt: '빠진 낱말을 찾아 바르게 고쳐 쓰세요.', columns: ['고치기 전', '고친 뒤'], cells: [['I happy today.', 'I am happy today.'], ['You my friend.', ''], ['Thank for the gift.', '']], answer: 'You are my friend. / Thank you for the gift.' },
          { type: 'choice', prompt: '"I ___ glad."에 들어갈 낱말에 ○ 하세요.', options: ['am', 'is', 'are'], answer: 'am' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: 'Dear Mina, I ___ sorry. ___ Jun', answer: 'am / From' },
          { type: 'short', prompt: '짝의 카드를 읽고 고쳐 준 곳을 한 줄로 써 보세요.' },
        ],
        note: '한 줄씩 소리 내어 읽으며 빠진 낱말을 찾아요.',
        ch: '빈칸이 둘이고, 카드에 고칠 곳이 두 곳이에요.',
        nt: '자주 보이는 어려움: ① 눈으로만 읽고 지나친다 → 작게라도 소리 내어 읽게 한다. ② am, is, are을 헷갈린다 → I am, You are처럼 짝으로 묶어 말하게 한다. ③ 짝의 카드를 고쳐 주기를 부담스러워한다 → 한 곳만 찾아 알려 주는 규칙으로 부담을 줄인다.',
      }),
            // ───────────────────────── 19차시 (core) ─────────────────────────
      lesson(19, {
        std: S9, t: '디지털 스티커 그림과 영어 낱말 짝 지어 소개 화면 꾸미기',
        o: '디지털 스티커 그림에 알맞은 영어 낱말을 짝 짓고, 화면에 낱말을 함께 넣어 소개할 수 있다.',
        ill: ['a tablet screen decorated with colorful sun, tree, moon and star stickers each with a short word label beside it', 'sun  tree  moon', '스티커와 낱말'],
        iT: '"화면을 꾸밀 때 스티커만 붙이면 친구가 알 수 있을까요?" 해 스티커만 붙인 화면과 sun 낱말을 함께 붙인 화면을 보여 주고 비교한다. 스티커 옆에 낱말이 있으면 더 잘 전해진다는 점을 확인한다. 스티커만 잔뜩 붙이고 낱말은 하나도 넣지 않는 학생에게는 스티커마다 이름을 하나씩 붙이게 한다.',
        iS: '스티커만 붙인 화면과 낱말도 함께 붙인 화면은 어떻게 다를까요? 어느 쪽이 더 잘 전해질까요?',
        demo: DM([W('sun', '해', 'sun'), W('moon', '달', 'moon')], { sun: 0 }),
        a: [
          ['활동 1. 스티커 그림과 낱말 짝 짓기', '"스티커 그림 옆에 같은 뜻의 영어 낱말을 놓아요. 놓은 뒤 낱말을 소리 내어 읽어요." 그림을 먼저 우리말로 말하게 한다. 그림만 보고 첫 글자가 같은 낱말을 고르는 학생에게는 낱말을 끝까지 읽어 비교하게 한다. 도전 단계에는 그림이 없는 낱말 카드가 섞여 있다.', '스티커 그림 옆에 알맞은 영어 낱말 카드를 놓고 소리 내어 읽어요.', 'wordcards',
            LA('match', '그림을 우리말로 먼저 말한 뒤, 영어 낱말 카드의 첫 글자와 끝 글자를 모두 읽어 견주어 보세요.'),
            [
              MW('스티커 그림에 알맞은 낱말을 놓아 보세요.', [W('sun', '해', 'sun'), W('moon', '달', 'moon')], { x: [W('soon', '곧')] }),
              MW('스티커 그림에 알맞은 낱말을 놓아 보세요.', [W('tree', '나무', 'tree'), W('flower', '꽃', 'flower')], { d: 0.2, x: [W('three', '셋')] }),
              MW('스티커 그림 세 개에 알맞은 낱말을 놓아 보세요.', [W('star', '별', 'star'), W('cloud', '구름', 'cloud'), W('house', '집', 'house')], { d: 0.3, x: [W('start', '시작')] }),
              MW('스티커 그림 네 개에 알맞은 낱말을 놓아 보세요.', [W('bird', '새', 'bird'), W('sun', '해', 'sun'), W('tree', '나무', 'tree'), W('star', '별', 'star')], { d: 0.35 }),
            ]],
          ['활동 2. 화면 소개에 알맞은 낱말 고르기', '"이 화면에는 어떤 스티커가 있나요? 소개하는 글에 알맞은 낱말 카드를 골라요." 낱말을 고른 뒤에는 화면을 가리키며 한 문장으로 소개해 본다. 스티커와 상관없는 낱말을 고르는 학생에게는 화면에서 스티커를 하나씩 짚으며 말하게 한다.', '화면의 스티커를 보고 소개하는 글에 알맞은 낱말 카드를 골라요.', 'wordcards',
            LA('pick', '화면에 어떤 스티커가 있는지 하나씩 짚으며 우리말로 먼저 말해 보세요. 그 낱말의 영어 이름을 찾아보세요.'),
            [
              PK('화면에 해와 나무 스티커가 있어요. 소개에 알맞은 낱말 카드를 모두 골라 보세요.', ['sun', 'tree', 'moon'], ['sun', 'tree'], { x: ['bird'] }),
              PK('화면에 달과 별 스티커가 있어요. 소개에 알맞은 낱말 카드를 모두 골라 보세요.', ['moon', 'star', 'sun'], ['moon', 'star'], { d: 0.25, x: ['cloud'] }),
              PK('화면에 꽃과 집 스티커가 있어요. 소개에 알맞은 낱말 카드를 모두 골라 보세요.', ['flower', 'house', 'tree'], ['flower', 'house'], { d: 0.3, x: ['bird'] }),
              PK('스티커만 있는 화면과 낱말도 있는 화면 중 뜻이 더 잘 전해지는 쪽은 어디일까요?', ['낱말도 있는 화면', '스티커만 있는 화면'], ['낱말도 있는 화면'], { d: 0.2 }),
            ]],
        ],
        wT: '"내 화면에는 스티커마다 낱말이 하나씩 붙어 있나요?" 친구에게 내 화면을 소개하는 시간을 잠깐 갖는다. 낱말을 하나도 넣지 않은 학생에게는 스티커 하나에 낱말 하나를 붙이는 규칙을 다시 알려 준다.',
        ex: [
          { type: 'tool', tool: 'wordcards', options: { mode: 'match', shuffle: false, words: [W('flower', '꽃', 'flower'), W('house', '집', 'house')] }, prompt: '스티커 그림에 알맞은 낱말을 놓아 보세요.', target: { match: { flower: 'flower', house: 'house' } }, difficulty: 0.2 },
          { type: 'choice', prompt: '스티커와 낱말을 함께 붙이면 좋은 점은 무엇일까요?', options: ['뜻이 더 잘 전해져요', '화면이 어두워져요', '친구가 못 알아봐요'], answer: 0, difficulty: 0.15, explain: '그림과 낱말이 함께 있으면 친구가 뜻을 더 쉽게 알 수 있어요.' },
        ],
        wsT: '스티커와 낱말 짝 짓기',
        ws: [
          { type: 'table', prompt: '스티커 그림에 알맞은 영어 낱말을 쓰세요.', columns: ['스티커', '영어 낱말'], cells: [['해', 'sun'], ['달', ''], ['나무', ''], ['별', '']], answer: 'sun / moon / tree / star' },
          { type: 'choice', prompt: '꽃 스티커에 알맞은 낱말에 ○ 하세요.', options: ['flower', 'floor', 'flour'], answer: 'flower' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: 'I see a ___ and a ___. (해, 별)', answer: 'sun / star' },
          { type: 'short', prompt: '내 소개 화면에 넣고 싶은 스티커 두 개와 영어 낱말을 써 보세요.' },
        ],
        note: '그림을 먼저 우리말로 말하고 같은 뜻의 낱말을 찾아요.',
        ch: '그림이 없는 낱말 카드가 섞여 있고, 스티커가 네 개로 늘어요.',
        nt: '자주 보이는 어려움: ① 스티커만 잔뜩 붙이고 낱말은 넣지 않는다 → 스티커 하나에 낱말 하나를 붙이는 규칙을 정한다. ② 비슷한 철자의 낱말(three/tree)을 헷갈린다 → 끝까지 소리 내어 읽게 한다. ③ 낱말을 붙인 뒤 소개하지 않는다 → 화면을 가리키며 한 문장으로 말해 보게 한다.',
      }),

      // ───────────────────────── 20차시 (practice) ─────────────────────────
      lesson(20, {
        std: S9, t: '낮과 밤 스티커 나누고 화면 소개 문장 완성하기',
        o: '스티커 낱말을 낮과 밤 장면으로 나누고, This is a ___. 문장으로 화면의 스티커를 소개할 수 있다.',
        ill: ['a screen divided into a bright day side with sun and cloud and a dark night side with moon and star stickers', 'This is a moon.', '스티커로 화면 소개'],
        iT: '교사가 화면 한쪽에 해와 구름, 다른 쪽에 달과 별을 붙여 "이 화면은 어떤 이야기일까요?"라고 묻는다. 낮 장면과 밤 장면으로 나눌 수 있음을 확인한 뒤 "This is a sun."을 시범으로 말한다. 스티커 이름만 말하고 문장으로 소개하지 않는 학생에게는 "This is a ... 이렇게 시작해 볼까요?"라고 말해 준다.',
        iS: '낮과 밤 장면에는 어떤 스티커가 어울릴까요? 소개하는 말도 영어로 말해 봐요.',
        demo: { tool: 'wordcards', options: { mode: 'sort', slots: [{ id: 'g1', label: '낮 장면' }, { id: 'g2', label: '밤 장면' }], cards: [C('sun', 'sun', { motif: 'sun' }), C('moon', 'moon', { motif: 'moon' })] }, sequence: [{ at: {} }, { at: { sun: 0 } }] },
        a: [
          ['활동 1. 스티커를 낮 장면과 밤 장면으로 나누기', '"스티커가 어느 장면에 어울리는지 생각하며 칸에 놓아요. 놓을 때마다 낱말을 소리 내어 읽어요." 같은 스티커도 이야기에 따라 낮에도 밤에도 쓸 수 있음을 이야기해 본다. 한 가지로만 정하려는 학생에게는 자기 화면 이야기를 말하게 한다.', '스티커 카드를 낮 장면과 밤 장면 칸에 나누어 놓고, 낱말을 소리 내어 읽어요.', 'wordcards',
            LA('sort', '그 스티커가 하늘에 보이는 때가 낮인지 밤인지 떠올려 보세요.'),
            [
              base({ x: null }, '스티커 카드를 낮 장면과 밤 장면으로 나누어 놓아 보세요.', { sort: { g1: ['sun', 'cloud'], g2: ['moon', 'star'] } }, { mode: 'sort', slots: [{ id: 'g1', label: '낮 장면' }, { id: 'g2', label: '밤 장면' }], cards: [C('sun', 'sun', { motif: 'sun' }), C('cloud', 'cloud', { motif: 'cloud' }), C('moon', 'moon', { motif: 'moon' }), C('star', 'star', { motif: 'star' })] }),
              base({ d: 0.3, x: [C('tree', 'tree', { motif: 'tree' })] }, '낮 장면 스티커와 밤 장면 스티커를 나누어 놓아 보세요. (나무는 어느 쪽에도 놓지 않아요)', { sort: { g1: ['bird', 'flower'], g2: ['moon'] } }, { mode: 'sort', slots: [{ id: 'g1', label: '낮 장면' }, { id: 'g2', label: '밤 장면' }], cards: [C('bird', 'bird', { motif: 'bird' }), C('flower', 'flower', { motif: 'flower' }), C('moon', 'moon', { motif: 'moon' })] }),
              base({ d: 0.35 }, '스티커 카드를 낮 장면과 밤 장면으로 나누어 놓아 보세요.', { sort: { g1: ['sun', 'flower', 'bird'], g2: ['moon', 'star'] } }, { mode: 'sort', slots: [{ id: 'g1', label: '낮 장면' }, { id: 'g2', label: '밤 장면' }], cards: [C('sun', 'sun', { motif: 'sun' }), C('flower', 'flower', { motif: 'flower' }), C('bird', 'bird', { motif: 'bird' }), C('moon', 'moon', { motif: 'moon' }), C('star', 'star', { motif: 'star' })] }),
            ]],
          ['활동 2. 스티커를 소개하는 문장 완성하기', '"화면의 스티커를 가리키며 This is a ___. 문장을 완성해요. 완성한 문장은 짝에게 말해요." 문장 틀을 소리 내어 읽은 뒤 낱말을 넣게 한다. 낱말만 말하는 학생에게는 칠판의 문장 틀을 짚으며 이어 말하게 한다.', '그림에 맞는 낱말을 문장의 빈칸에 놓고, 짝에게 말해요.', 'wordcards',
            LA('fill', '그림을 보고 영어 낱말을 먼저 떠올려 보세요. 빈칸에 넣은 뒤 문장 전체를 소리 내어 읽어 보세요.'),
            [
              FI('달 스티커를 소개하는 문장을 완성해 보세요.', ['This is a ___.'], ['moon', 'sun', 'star'], ['moon'], { x: ['mood'] }),
              FI('나무 스티커를 소개하는 문장을 완성해 보세요.', ['This is a ___.'], ['tree', 'flower', 'house'], ['tree'], { d: 0.2, x: ['three'] }),
              FI('두 스티커를 소개하는 문장을 완성해 보세요. (해, 구름)', ['This is a ___.', 'That is a ___.'], ['sun', 'cloud', 'star'], ['sun', 'cloud'], { d: 0.3 }),
              FI('두 스티커를 소개하는 문장을 완성해 보세요. (꽃, 새)', ['I see a ___.', 'I see a ___.'], ['flower', 'bird', 'house'], ['flower', 'bird'], { d: 0.35 }),
            ]],
        ],
        wT: '"내 화면에서 가장 좋아하는 스티커를 한 문장으로 소개해 보세요." 소개 문장이 낱말 하나로 끝나지 않았는지 듣는다. 낱말만 말한 학생은 다음 시간 시작에 This is a ___. 틀로 한 번 더 말하게 한다.',
        ex: [
          { type: 'tool', tool: 'wordcards', options: { mode: 'fill', shuffle: false, slots: [{ id: 'e1', label: 'This is a ___.' }], cards: NC(['star', 'sun', 'tree']) }, prompt: '별 스티커를 소개하는 문장을 완성해 보세요.', target: { fill: { e1: 'star' } }, difficulty: 0.2 },
          { type: 'choice', prompt: '밤 장면에 어울리는 스티커 낱말은 무엇일까요?', options: ['moon', 'sun', 'flower'], answer: 0, difficulty: 0.15, explain: '달(moon)은 밤하늘에 보여요.' },
        ],
        wsT: '스티커 소개 문장 만들기',
        ws: [
          { type: 'table', prompt: '낮 장면과 밤 장면 낱말을 나누어 쓰세요.', columns: ['낮 장면', '밤 장면'], cells: [['sun', 'moon'], ['', ''], ['', '']], answer: '예: cloud, flower / star' },
          { type: 'choice', prompt: '해 스티커를 소개하는 문장에 ○ 하세요.', options: ['This is a sun.', 'This is a moon.', 'This is a star.'], answer: 'This is a sun.' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: 'This ___ a star.   That is a ___. (구름)', answer: 'is / cloud' },
          { type: 'short', prompt: '내 화면 스티커 하나를 골라 소개하는 문장을 영어로 써 보세요.' },
        ],
        note: '스티커 이름을 먼저 말하고 문장 틀에 넣어요.',
        ch: '어느 장면에도 속하지 않는 스티커가 섞여 있고, 소개 문장이 두 개예요.',
        nt: '자주 보이는 어려움: ① 스티커 이름만 말하고 문장으로 소개하지 않는다 → This is a ___. 틀을 쓰게 한다. ② 낮과 밤을 한 가지로만 정한다 → 자기 화면의 이야기를 말하게 한다. ③ 낱말 철자를 헷갈린다 → 카드를 한 글자씩 읽게 한다.',
      }),

      // ───────────────────────── 21차시 (extend) ─────────────────────────
      lesson(21, {
        std: S9, t: '내가 꾸민 화면을 세 문장으로 친구에게 설명하기',
        o: '스티커와 낱말로 꾸민 화면에 담은 뜻을 My screen has ___ and ___. 같은 세 문장으로 친구에게 설명할 수 있다.',
        ill: ['a child pointing at a tablet screen full of stickers and words while a friend listens with a smile', 'My screen has a sun.', '내 화면 설명하기'],
        iT: '교사가 자기가 꾸민 화면(해, 나무, 집 스티커와 낱말)을 보여 주고 "My screen has a sun and a tree. I like it."이라고 설명한다. 학생들이 설명에서 어떤 정보를 들었는지 말한다. 화면만 보여 주고 아무 설명도 하지 않는 학생에게는 스티커를 하나씩 가리키며 말해 보게 한다.',
        iS: '내가 꾸민 화면을 친구에게 어떻게 설명할 수 있을까요? 스티커 하나씩 가리키며 말해 봐요.',
        demo: { tool: 'wordcards', options: { mode: 'order', cards: NC(['My screen has a sun.', 'I like it.']) }, sequence: [{ at: {} }, { at: { 'My screen has a sun.': 0 } }] },
        a: [
          ['활동 1. 화면 설명 문장 차례대로 놓기', '"먼저 화면에 무엇이 있는지 말하고, 그다음 내 마음을 말해요. 설명하는 문장을 순서대로 놓은 뒤 소리 내어 읽어요." 순서가 바뀌면 어떻게 들리는지 함께 읽어 본다. 마음을 먼저 말하는 학생에게는 무엇을 보고 그런 마음이 들었는지 먼저 말하게 한다.', '설명하는 문장 카드를 차례대로 놓고 소리 내어 읽어요.', 'wordcards',
            LA('order', '무엇이 있는지 먼저 말하고, 그다음에 내 마음을 말해 보세요. 소리 내어 읽어 자연스러운 차례를 찾아요.'),
            [
              OR('내 화면을 설명하는 문장을 차례대로 놓아 보세요.', ['My screen has a sun.', 'It has a tree.', 'I like it.'], { x: ['Goodbye.'] }),
              OR('밤 화면을 설명하는 문장을 차례대로 놓아 보세요.', ['This is my night screen.', 'It has a moon.', 'It is beautiful.'], { d: 0.3, x: ['It is Monday.'] }),
              OR('친구 화면을 소개하는 문장을 차례대로 놓아 보세요.', ['This is Mina screen.', 'It has a flower.', 'It has a bird.', 'I like it too.'], { d: 0.4 }),
            ]],
          ['활동 2. 화면 설명 빈칸 채우고 직접 말하기', '"내 화면을 떠올리며 설명 문장의 빈칸을 채우고, 친구에게 말해요." 마지막 문항에서는 나만의 화면을 직접 설명한다. 같은 스티커만 계속 말하는 학생에게는 다른 스티커도 하나 더 소개하게 한다.', '설명하는 문장의 빈칸에 알맞은 낱말을 놓고, 친구에게 말해요.', 'wordcards',
            LA('fill', '화면에 무엇이 있는지 떠올려 낱말을 찾아보세요. 문장 전체를 소리 내어 읽어 확인해요.'),
            [
              FI('화면 설명 문장을 완성해 보세요. (해와 나무)', ['My screen has a ___.', 'It has a ___.'], ['sun', 'tree', 'moon'], ['sun', 'tree'], { x: ['star'] }),
              FI('화면 설명 문장을 완성해 보세요. (달과 별)', ['My screen has a ___.', 'It has a ___.'], ['moon', 'star', 'sun'], ['moon', 'star'], { d: 0.25, x: ['cloud'] }),
              FI('화면 설명 문장 두 줄을 완성해 보세요. (집, 새)', ['It has a ___.', 'It has a ___.'], ['house', 'bird', 'sun'], ['house', 'bird'], { d: 0.35 }),
              TALK('내 화면을 짝에게 보여 주며 두 문장으로 설명하세요. 짝은 마음에 든 스티커를 하나 말해 줘요. 다 했으면 "다 했어요"를 누르세요.'),
            ]],
        ],
        wT: '"설명을 들은 친구가 어떤 스티커가 기억에 남았다고 했나요?" 설명이 전해졌는지 확인한다. 설명을 하지 못한 학생은 다음 시간 시작에 스티커 하나만 골라 한 문장으로 말하게 한다.',
        ex: [
          { type: 'tool', tool: 'wordcards', options: { mode: 'fill', shuffle: false, slots: [{ id: 'e1', label: 'My screen has a ___.' }], cards: NC(['flower', 'bird', 'house']) }, prompt: '화면에 꽃이 있어요. 문장을 완성해 보세요.', target: { fill: { e1: 'flower' } }, difficulty: 0.2 },
          { type: 'choice', prompt: '화면 설명에서 가장 먼저 말하면 좋은 것은 무엇일까요?', options: ['화면에 있는 것', '내 마음', '인사'], answer: 0, difficulty: 0.2, explain: '무엇이 있는지 먼저 말하면 친구가 쉽게 이해해요.' },
        ],
        wsT: '내 화면 설명하기',
        ws: [
          { type: 'table', prompt: '내 화면에 있는 스티커와 낱말을 쓰세요.', columns: ['스티커', '영어 낱말'], cells: [['첫째', ''], ['둘째', ''], ['셋째', '']], answer: '예: sun / tree / bird' },
          { type: 'choice', prompt: '화면을 설명하는 첫 문장에 ○ 하세요.', options: ['My screen has a sun.', 'I like it.', 'Goodbye.'], answer: 'My screen has a sun.' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: 'My screen ___ a moon. I ___ it.', answer: 'has / like' },
          { type: 'short', prompt: '내 화면을 소개하는 문장 두 개를 영어로 써 보세요.' },
        ],
        note: '화면에 있는 것을 먼저 말하고 마음을 말해요.',
        ch: '설명 문장이 네 줄로 길어지고, 직접 두 문장으로 말해요.',
        nt: '자주 보이는 어려움: ① 화면만 보여 주고 설명하지 않는다 → 스티커 하나씩 가리키며 말하게 한다. ② has와 is를 섞어 쓴다 → My screen has ___. 틀을 그대로 쓰게 한다. ③ 같은 스티커만 계속 말한다 → 다른 스티커 하나를 더 소개하게 한다.',
      }),

      // ───────────────────────── 22차시 (core) ─────────────────────────
      lesson(22, {
        std: S9, t: '그림 카드를 골라 늘어놓고 짧은 문장으로 뜻 말하기',
        o: '전하고 싶은 뜻에 맞는 그림 카드를 골라 늘어놓고, 카드를 짚으며 I like ___. 문장으로 말할 수 있다.',
        ill: ['a child choosing picture cards of a cat, a dog and a book and laying them in a row on a table', 'I like cats.', '그림 카드로 뜻 전하기'],
        iT: '교사가 고양이와 책 그림 카드를 놓고 "무슨 뜻일까요?"라고 묻는다. 학생들이 말하면 "I like cats and books."로 문장을 말해 준다. 카드를 보기 좋게 늘어놓기만 하고 말로 잇지 않는 학생에게는 카드를 하나씩 짚으며 한 문장으로 말하게 한다.',
        iS: '그림 카드만으로도 뜻을 전할 수 있을까요? 카드를 짚으며 말로 이어 봐요.',
        demo: { tool: 'wordcards', options: { mode: 'pick', basket: '고른 카드', shuffle: false, cards: [C('cat', 'cat', { motif: 'cat' }), C('ball', 'ball', { motif: 'ball' })] }, sequence: [{ at: {} }, { at: { cat: 0 } }] },
        a: [
          ['활동 1. 뜻에 맞는 그림 카드 고르기', '"전하고 싶은 문장에 필요한 그림 카드만 골라요. 고른 카드를 짚으며 문장을 말해요." 문장에 나온 낱말에 줄을 긋고 그 그림만 고르게 한다. 그림이 예쁘다는 이유로 고르는 학생에게는 문장의 낱말과 맞는지 물어본다.', '문장에 필요한 그림 카드만 골라요. 고른 카드를 짚으며 문장을 말해요.', 'wordcards',
            LA('pick', '문장에서 나오는 낱말마다 어울리는 그림을 하나씩 찾아보세요. 문장에 없는 그림은 고르지 않아요.'),
            [
              base({ x: [C('banana', 'banana', { motif: 'banana' })] }, '"I like cats and dogs."에 필요한 그림 카드를 모두 골라 보세요.', { pick: ['cat', 'dog'] }, { mode: 'pick', basket: '고른 카드', cards: [C('cat', 'cat', { motif: 'cat' }), C('dog', 'dog', { motif: 'dog' }), C('ball', 'ball', { motif: 'ball' })] }),
              base({ d: 0.2, x: [C('egg', 'egg', { motif: 'egg' })] }, '"I have a book and a pencil."에 필요한 그림 카드를 모두 골라 보세요.', { pick: ['book', 'pencil'] }, { mode: 'pick', basket: '고른 카드', cards: [C('book', 'book', { motif: 'book' }), C('pencil', 'pencil', { motif: 'pencil' }), C('umbrella', 'umbrella', { motif: 'umbrella' })] }),
              base({ d: 0.3 }, '"I eat an apple and a banana."에 필요한 그림 카드를 모두 골라 보세요.', { pick: ['apple', 'banana'] }, { mode: 'pick', basket: '고른 카드', cards: [C('apple', 'apple', { motif: 'apple' }), C('banana', 'banana', { motif: 'banana' }), C('fish2', 'fish', { motif: 'fish2' }), C('egg', 'egg', { motif: 'egg' })] }),
              base({ d: 0.3 }, '"I see a cat, a fish and an egg."에 필요한 그림 카드를 모두 골라 보세요.', { pick: ['cat', 'fish2', 'egg'] }, { mode: 'pick', basket: '고른 카드', cards: [C('cat', 'cat', { motif: 'cat' }), C('fish2', 'fish', { motif: 'fish2' }), C('egg', 'egg', { motif: 'egg' }), C('ball', 'ball', { motif: 'ball' })] }),
            ]],
          ['활동 2. 그림 카드와 문장 짝 짓기', '"그림 카드 묶음에 알맞은 문장을 놓아요. 놓은 뒤 카드를 짚으며 문장을 읽어요." 카드의 수와 문장 속 낱말의 수가 같은지 확인하게 한다. 문장만 보고 첫 낱말 하나로 짝을 짓는 학생에게는 문장 전체의 낱말을 하나씩 짚으며 읽게 한다.', '그림 카드 묶음 옆에 알맞은 문장을 놓고, 카드를 짚으며 읽어요.', 'wordcards',
            LA('match', '그림 카드마다 영어 낱말을 떠올리고, 문장에 그 낱말이 모두 들어 있는지 확인해 보세요.'),
            [
              MT('그림 카드 묶음에 알맞은 문장을 놓아 보세요. (고양이와 공 / 개와 책)', [['고양이 + 공', 'I see a cat and a ball.'], ['개 + 책', 'I see a dog and a book.']], { x: ['I see a fish and an egg.'] }),
              MT('그림 카드 묶음에 알맞은 문장을 놓아 보세요. (사과 / 연필 + 우산)', [['사과', 'I have an apple.'], ['연필 + 우산', 'I have a pencil and an umbrella.']], { d: 0.3, x: ['I have a banana.'] }),
              MT('그림 카드 묶음에 알맞은 문장을 놓아 보세요.', [['물고기 + 달걀', 'I like fish and eggs.'], ['공 + 고양이', 'I play with a ball and a cat.'], ['바나나', 'I like bananas.']], { d: 0.4 }),
            ]],
        ],
        wT: '"그림 카드를 짚으며 말해 보니 뜻이 잘 전해졌나요?" 카드와 문장이 잘 맞았는지 이야기한다. 카드만 늘어놓은 학생은 다음 시간 시작에 카드마다 낱말을 한 개씩 말하게 한다.',
        ex: [
          { type: 'tool', tool: 'wordcards', options: { mode: 'pick', basket: '고른 카드', shuffle: false, cards: [C('cat', 'cat', { motif: 'cat' }), C('egg', 'egg', { motif: 'egg' }), C('ball', 'ball', { motif: 'ball' })] }, prompt: '"I have a cat and a ball."에 필요한 그림 카드를 모두 골라 보세요.', target: { pick: ['cat', 'ball'] }, difficulty: 0.25 },
          { type: 'choice', prompt: '그림 카드로 뜻을 전할 때 꼭 해야 할 일은 무엇일까요?', options: ['카드를 짚으며 문장으로 말한다', '카드를 예쁘게 늘어놓기만 한다', '아무 말도 하지 않는다'], answer: 0, difficulty: 0.15, explain: '카드와 문장을 함께 써야 뜻이 잘 전해져요.' },
        ],
        wsT: '그림 카드로 뜻 전하기',
        ws: [
          { type: 'table', prompt: '그림 카드에 알맞은 영어 낱말을 쓰세요.', columns: ['그림 카드', '영어 낱말'], cells: [['고양이', 'cat'], ['공', ''], ['책', ''], ['사과', '']], answer: 'cat / ball / book / apple' },
          { type: 'choice', prompt: '"I like dogs."에 필요한 그림 카드에 ○ 하세요.', options: ['개', '고양이', '바나나'], answer: '개' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: 'I have a ___ and a ___. (책, 연필)', answer: 'book / pencil' },
          { type: 'short', prompt: '그림 카드 두 개를 고르고, 카드를 설명하는 문장을 영어로 써 보세요.' },
        ],
        note: '문장 속 낱말마다 어울리는 그림을 찾아요.',
        ch: '문장에 없는 그림 카드가 섞여 있고, 카드가 세 장인 문장이 나와요.',
        nt: '자주 보이는 어려움: ① 카드를 예쁘게 늘어놓기만 하고 말로 잇지 않는다 → 카드를 짚으며 문장을 말하게 한다. ② 문장에 없는 그림까지 고른다 → 문장의 낱말에 밑줄을 긋게 한다. ③ 카드 수와 문장 낱말 수가 맞지 않는다 → 낱말마다 카드를 하나씩 대응시켜 보게 한다.',
      }),

      // ───────────────────────── 23차시 (practice) ─────────────────────────
      lesson(23, {
        std: S9, t: '그림 카드 순서로 하루 이야기 만들고 빈칸 채우기',
        o: '그림 카드를 순서대로 놓아 하루 이야기의 뜻을 전하고, 카드에 맞는 낱말로 문장의 빈칸을 채울 수 있다.',
        ill: ['picture cards of a sun, a book and a moon laid out left to right like a comic strip while a child tells the story', 'Morning, School, Night', '그림 카드 하루 이야기'],
        iT: '교사가 해, 책, 달 그림 카드를 순서대로 붙이고 "이 카드는 무슨 이야기일까요?"라고 묻는다. 학생들이 "아침에 학교에 가고 밤에 자요"처럼 말하면 영어로 "Morning. School. Night."이라고 낱말을 짚어 준다. 카드 순서를 바꾸어도 같다고 생각하는 학생에게는 순서를 바꾸면 이야기가 어떻게 달라지는지 말해 보게 한다.',
        iS: '그림 카드를 순서대로 놓으면 이야기가 돼요. 어떤 하루일까요?',
        demo: { tool: 'wordcards', options: { mode: 'order', cards: [C('sun', 'sun', { motif: 'sun' }), C('book', 'book', { motif: 'book' }), C('moon', 'moon', { motif: 'moon' })] }, sequence: [{ at: {} }, { at: { sun: 0 } }] },
        a: [
          ['활동 1. 그림 카드로 하루 이야기 차례 놓기', '"아침, 낮, 밤 순서가 되도록 그림 카드를 놓고, 카드를 짚으며 이야기를 말해요." 순서에 맞는 낱말도 함께 읽는다. 카드를 놓고 아무 말도 하지 않는 학생에게는 카드마다 낱말 하나를 말하게 한다.', '그림 카드를 하루 차례대로 놓고, 짚으며 이야기해요.', 'wordcards',
            LA('order', '하루가 시작되는 때부터 끝나는 때까지 순서를 떠올려 보세요. 그림 카드를 짚으며 낱말을 말해 보세요.'),
            [
              base({ x: null }, '아침부터 밤까지 그림 카드를 차례대로 놓아 보세요.', { order: ['sun', 'book', 'moon'] }, { mode: 'order', cards: [C('sun', 'sun', { motif: 'sun' }), C('book', 'book', { motif: 'book' }), C('moon', 'moon', { motif: 'moon' })] }),
              base({ d: 0.3 }, '아침 식사부터 잠들 때까지 그림 카드를 차례대로 놓아 보세요.', { order: ['egg', 'ball', 'moon'] }, { mode: 'order', cards: [C('egg', 'egg', { motif: 'egg' }), C('ball', 'ball', { motif: 'ball' }), C('moon', 'moon', { motif: 'moon' })] }),
              base({ d: 0.35 }, '식물이 자라는 순서에 맞게 그림 카드를 차례대로 놓아 보세요.', { order: ['leaf', 'flower', 'apple'] }, { mode: 'order', cards: [C('leaf', 'leaf', { motif: 'leaf' }), C('flower', 'flower', { motif: 'flower' }), C('apple', 'apple', { motif: 'apple' })] }),
            ]],
          ['활동 2. 그림 카드에 맞는 낱말로 문장 채우기', '"그림 카드를 보고 문장의 빈칸에 알맞은 낱말을 놓아요. 다 놓으면 문장을 처음부터 읽어요." 그림의 영어 낱말을 먼저 말한 뒤 카드를 고르게 한다. 그림과 상관없이 낱말을 고르는 학생에게는 그림을 다시 보며 영어 이름을 말하게 한다.', '그림 카드에 맞는 낱말을 문장의 빈칸에 놓고 소리 내어 읽어요.', 'wordcards',
            LA('fill', '그림 속 물건의 영어 이름을 먼저 말해 보세요. 빈칸에 넣고 문장을 처음부터 읽어 보세요.'),
            [
              FI('그림은 책이에요. 빈칸을 채워 보세요.', ['I read a ___.'], ['book', 'ball', 'egg'], ['book'], { x: ['boot'] }),
              FI('그림은 사과예요. 빈칸을 채워 보세요.', ['I eat an ___.'], ['apple', 'umbrella', 'ball'], ['apple'], { d: 0.25, x: ['apply'] }),
              FI('그림은 공과 고양이예요. 빈칸 두 곳을 채워 보세요.', ['I play with a ___.', 'I hug a ___.'], ['ball', 'cat', 'book'], ['ball', 'cat'], { d: 0.35 }),
              FI('그림은 연필과 우산이에요. 빈칸 두 곳을 채워 보세요.', ['I write with a ___.', 'I take an ___.'], ['pencil', 'umbrella', 'egg'], ['pencil', 'umbrella'], { d: 0.4 }),
            ]],
        ],
        wT: '"그림 카드로 한 이야기를 짝에게 말해 보세요." 그림 순서와 말한 순서가 같은지 듣는다. 순서가 어긋난 학생은 다음 시간 시작에 카드를 하나씩 짚으며 처음부터 말하게 한다.',
        ex: [
          { type: 'tool', tool: 'wordcards', options: { mode: 'fill', shuffle: false, slots: [{ id: 'e1', label: 'I drink ___.' }], cards: NC(['milk', 'book', 'ball']) }, prompt: '그림은 우유예요. 빈칸을 채워 보세요.', target: { fill: { e1: 'milk' } }, difficulty: 0.25 },
          { type: 'choice', prompt: '그림 카드로 이야기를 만들 때 알맞은 방법은 무엇일까요?', options: ['순서를 정하고 짚으며 말한다', '카드를 섞어 둔다', '카드만 보고 아무 말도 안 한다'], answer: 0, difficulty: 0.15, explain: '순서를 정하고 말로 이어야 이야기가 전해져요.' },
        ],
        wsT: '그림 카드로 이야기 말하기',
        ws: [
          { type: 'table', prompt: '그림 카드 순서에 맞는 낱말을 쓰세요.', columns: ['순서', '낱말'], cells: [['첫째', 'sun'], ['둘째', ''], ['셋째', '']], answer: '예: book / moon' },
          { type: 'choice', prompt: '"I eat an ___."의 빈칸 그림이 사과일 때 알맞은 낱말에 ○ 하세요.', options: ['apple', 'book', 'ball'], answer: 'apple' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: 'I play with a ___. I read a ___. (공, 책)', answer: 'ball / book' },
          { type: 'short', prompt: '그림 카드 세 장을 골라 짧은 이야기를 한 문장으로 써 보세요.' },
        ],
        note: '그림 순서를 정하고 카드마다 낱말을 하나씩 말해요.',
        ch: '카드가 세 장이고, 빈칸이 두 곳인 문장이 나와요.',
        nt: '자주 보이는 어려움: ① 카드를 놓기만 하고 말로 잇지 않는다 → 카드마다 낱말을 하나씩 말하게 한다. ② 그림과 낱말이 맞지 않는다 → 그림의 영어 이름을 먼저 말하게 한다. ③ 이야기 순서가 어색하다 → 하루 순서(아침, 낮, 밤)로 짚어 말하게 한다.',
      }),
            // ───────────────────────── 24차시 (core) ─────────────────────────
      lesson(24, {
        std: S9, t: '낱말이 떠오르지 않을 때 표정과 몸짓으로 뜻 전하기',
        o: '낱말이 떠오르지 않을 때 한국어로 바꾸지 않고 표정과 몸짓을 함께 써서 뜻을 전하는 방법을 고르고 몸짓과 뜻을 짝 지을 수 있다.',
        ill: ['a child rubbing a tummy and making a round umbrella shape with both hands while a friend guesses with a smile', 'Yes. No. Look!', '몸짓으로 전하기'],
        iT: '교사가 일부러 "I am ... ."라고 말하다 멈추고 배를 문지른다. "선생님은 무슨 말을 하고 싶은 걸까요?" 학생이 hungry를 말하면 칭찬하고 "낱말이 생각나지 않으면 몸짓을 써도 괜찮아요."라고 말해 준다. 낱말이 떠오르지 않으면 곧바로 한국어로 바꾸는 학생에게는 영어 한 낱말과 몸짓을 함께 써 보게 한다.',
        iS: '말하고 싶은 낱말이 떠오르지 않을 때 어떻게 하면 좋을까요? 몸짓으로 전해 봐요.',
        demo: { tool: 'wordcards', options: { mode: 'match', slots: [{ id: 'm1', label: '고개를 끄덕여요' }], cards: NC(['Yes.', 'No.']) }, sequence: [{ at: {} }, { at: { 'Yes.': 0 } }] },
        a: [
          ['활동 1. 낱말이 막힐 때 알맞은 방법 고르기', '"낱말이 떠오르지 않으면 어떻게 하면 좋을까요? 가장 알맞은 방법을 골라요." 고른 방법을 짝에게 직접 해 보게 한다. 한국어로 바꾸는 보기를 고른 학생에게는 짝이 영어를 모르는 친구라면 어떨지 물어본다.', '상황을 읽고 가장 알맞은 방법을 골라요. 고른 방법을 짝에게 해 보세요.', 'emotion',
            LB,
            [
              BR('Jun이 우산(umbrella)이라는 낱말이 떠오르지 않아요. 어떻게 하면 좋을까요?', 'Jun', 'I need a ... (우산 낱말이 생각나지 않아요)', '걱정', [['(양손으로 우산 모양을 만들어 보이며) Rain... I need this.', '친구가 우산이라고 알아채요.'], ['(한국어로 우산이라고 말한다)', '영어를 쓰지 못해 아쉬워요.', '영어 한 낱말과 몸짓을 함께 써서 전해 보아요.'], ['(아무 말도 하지 않는다)', '친구가 무슨 말인지 몰라요.', '말을 멈추면 뜻이 전해지지 않아요.']], 0),
              BR('Mina가 배가 고프다고 말하고 싶은데 낱말을 잊었어요. 어떻게 하면 좋을까요?', 'Mina', 'I am ... (hungry가 생각나지 않아요)', '걱정', [['(배를 문지르며) I am ... Food, please.', '친구가 배고프다는 뜻을 알아요.'], ['(그냥 웃는다)', '친구가 무슨 뜻인지 몰라요.', '웃기만 하면 뜻이 전해지지 않아요.'], ['(자리를 떠난다)', '대화가 끊겨요.', '대화를 이어 가려면 몸짓이나 쉬운 낱말을 써 보아요.']], 0, { d: 0.25 }),
              BR('Jun이 친구에게 "저것 주세요"라고 말하고 싶어요. 낱말이 떠오르지 않을 때 어떻게 하면 좋을까요?', 'Jun', 'Please give me ... (that이 생각나지 않아요)', '걱정', [['(손으로 가리키며) This one, please.', '친구가 그 물건을 건네줘요.'], ['(화를 내며 소리친다)', '친구가 놀라요.', '화내지 않고 부드럽게 가리켜 보아요.'], ['(포기하고 돌아선다)', '물건을 받지 못했어요.', '포기하기 전에 손짓으로 가리켜 보아요.']], 0, { d: 0.3 }),
            ]],
          ['활동 2. 몸짓과 뜻 짝 짓기', '"몸짓을 보고 알맞은 영어 말을 놓아요. 놓은 뒤 몸짓과 말을 함께 해 봐요." 몸짓과 말을 같이 할 때 뜻이 더 잘 전해지는지 짝에게 물어본다. 몸짓의 뜻을 문화에 따라 다르게 생각하는 학생에게는 교실에서 약속한 몸짓으로 정하자고 말해 준다.', '몸짓 옆에 알맞은 영어 말을 놓고, 몸짓과 말을 함께 해 봐요.', 'wordcards',
            LA('match', '몸짓을 직접 해 보며 그 뜻을 영어로 어떻게 말하면 좋을지 떠올려 보세요.'),
            [
              MT('몸짓에 알맞은 말을 놓아 보세요.', [['고개를 끄덕여요', 'Yes.'], ['고개를 저어요', 'No.']], { x: ['Maybe.'] }),
              MT('몸짓에 알맞은 말을 놓아 보세요.', [['손가락으로 물건을 가리켜요', 'This one, please.'], ['엄지를 올려요', 'Good job!']], { d: 0.25, x: ['I am sorry.'] }),
              MT('몸짓에 알맞은 말을 놓아 보세요.', [['손을 흔들어요', 'Bye!'], ['두 손을 모아 고개를 숙여요', 'Thank you.'], ['귀에 손을 대요', 'Pardon?']], { d: 0.35 }),
            ]],
        ],
        wT: '"몸짓을 쓰니 말하기가 어떻게 달라졌나요?" 낱말이 없어도 뜻을 전할 수 있었다는 이야기를 모은다. 한국어로 바꾸어 말하던 학생은 다음 시간 시작에 쉬운 영어 낱말 하나와 몸짓으로 다시 말하게 한다.',
        ex: [
          { type: 'tool', tool: 'wordcards', options: { mode: 'match', shuffle: false, slots: [{ id: 'm1', label: '엄지를 올려요' }, { id: 'm2', label: '고개를 저어요' }], cards: NC(['Good job!', 'No.']) }, prompt: '몸짓에 알맞은 말을 놓아 보세요.', target: { match: { m1: 'Good job!', m2: 'No.' } }, difficulty: 0.2 },
          { type: 'choice', prompt: '낱말이 떠오르지 않을 때 가장 알맞은 방법은 무엇일까요?', options: ['몸짓과 쉬운 낱말로 전한다', '한국어로 바꾸어 말한다', '말을 그만둔다'], answer: 0, difficulty: 0.15, explain: '몸짓과 쉬운 영어를 함께 쓰면 뜻이 전해져요.' },
        ],
        wsT: '표정과 몸짓으로 뜻 전하기',
        ws: [
          { type: 'table', prompt: '몸짓에 알맞은 영어 말을 쓰세요.', columns: ['몸짓', '영어 말'], cells: [['고개를 끄덕여요', 'Yes.'], ['고개를 저어요', ''], ['엄지를 올려요', ''], ['손을 흔들어요', '']], answer: 'No. / Good job! / Bye!' },
          { type: 'choice', prompt: '낱말이 생각나지 않을 때 알맞은 방법에 ○ 하세요.', options: ['몸짓을 쓴다', '말을 멈춘다', '자리를 떠난다'], answer: '몸짓을 쓴다' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: 'This ___, please. (손으로 가리킬 때)   ___ job! (엄지를 올릴 때)', answer: 'one / Good' },
          { type: 'short', prompt: '말이 막혔을 때 내가 쓰고 싶은 몸짓과 영어 말을 한 줄로 써 보세요.' },
        ],
        note: '몸짓을 직접 해 보며 영어 말을 찾아요.',
        ch: '비슷한 말 카드가 섞여 있고, 상황이 더 길어져요.',
        nt: '자주 보이는 어려움: ① 낱말이 떠오르지 않으면 한국어로 바꾼다 → 영어 한 낱말과 몸짓을 같이 쓰게 한다. ② 몸짓만 하고 말은 하지 않는다 → 몸짓과 함께 짧은 영어를 말하게 한다. ③ 몸짓의 뜻을 서로 다르게 이해한다 → 교실에서 약속한 몸짓으로 정한다.',
      }),

      // ───────────────────────── 25차시 (practice) ─────────────────────────
      lesson(25, {
        std: S9, t: '말이 막혔을 때 쓰는 방법 차례 정하고 골라 말해 보기',
        o: '말이 막혔을 때 숨 고르기, 몸짓, 쉬운 낱말, 다시 말하기의 차례를 정하고, 알맞은 방법을 골라 짝에게 말할 수 있다.',
        ill: ['a child taking a deep breath then pointing at a picture while a friend nods with a cheerful face', 'Wait. Look.', '말이 막혔을 때'],
        iT: '"말이 막히면 어떻게 하는지 지난 시간에 배웠어요. 어떤 방법이 있었나요?" 두세 명이 몸짓과 쉬운 낱말을 말한다. 교사가 말하다 막힌 것처럼 한 번 시범을 보이며 "Wait."라고 말하고 숨을 쉰 뒤 이어 말한다. 막히면 조용히 서서 기다리기만 하는 학생에게는 몸짓이나 짧은 영어를 시도하게 한다.',
        iS: '말이 막혔을 때 어떤 순서로 해 보면 좋을까요? 짝과 함께 정해 봐요.',
        demo: { tool: 'wordcards', options: { mode: 'order', cards: NC(['Wait.', 'Use a gesture.']) }, sequence: [{ at: {} }, { at: { 'Wait.': 0 } }] },
        a: [
          ['활동 1. 말이 막혔을 때 해 볼 순서 놓기', '"말이 막히면 먼저 무엇을 하고, 그다음에 무엇을 할까요? 카드를 차례대로 놓고 짝에게 설명해요." 순서를 놓은 뒤 짝과 번갈아 말 막힘 상황을 흉내 내어 순서대로 해 본다. 순서를 건너뛰는 학생에게는 첫 번째 방법이 숨 고르기임을 짚어 준다.', '말이 막혔을 때 해 볼 방법 카드를 차례대로 놓아요.', 'wordcards',
            LA('order', '말이 막히면 가장 먼저 마음을 가라앉히고, 그다음에 쉬운 방법부터 해 보세요.'),
            [
              OR('말이 막혔을 때 해 볼 순서대로 카드를 놓아 보세요.', ['Say Wait.', 'Use a gesture.', 'Say a short word.', 'Try the sentence again.'], { x: ['Go home.'] }),
              OR('친구가 못 알아들었을 때 해 볼 순서대로 카드를 놓아 보세요.', ['Say Pardon?', 'Point to the picture.', 'Say it slowly.', 'Smile and thank.'], { d: 0.35, x: ['Be angry.'] }),
              OR('낱말이 떠오르지 않을 때 해 볼 순서대로 카드를 놓아 보세요.', ['Take a breath.', 'Think of a similar word.', 'Use a gesture.', 'Say the sentence.'], { d: 0.4 }),
            ]],
          ['활동 2. 상황에 알맞은 방법 고르고 말하기', '"상황에 가장 알맞은 방법을 골라요. 고른 방법을 짝에게 실제로 해 보세요." 마지막 문항은 짝과 함께 말이 막힌 상황을 흉내 내는 활동이다. 방법을 하나만 고집하는 학생에게는 다른 방법도 해 보게 한다.', '상황에 알맞은 방법을 고르고, 짝에게 실제로 해 봐요.', 'wordcards',
            LA('pick', '상황에서 가장 쉽고 빠르게 뜻을 전할 수 있는 방법이 무엇일지 생각해 보세요.'),
            [
              PK('친구가 내 말이 작게 들린대요. 알맞은 방법을 골라 보세요.', ['더 크게 천천히 다시 말한다', '말을 그만둔다', '한국어로 소리친다'], ['더 크게 천천히 다시 말한다'], { x: ['귓속말로 말한다'] }),
              PK('물건 이름이 생각나지 않아요. 알맞은 방법을 골라 보세요.', ['손으로 가리키며 This one, please.라고 말한다', '말을 그만둔다', '친구를 밀친다'], ['손으로 가리키며 This one, please.라고 말한다'], { d: 0.3, x: ['고개를 돌린다'] }),
              PK('친구가 내 말을 이해했는지 모르겠어요. 알맞은 방법을 골라 보세요.', ['Do you understand?라고 묻는다', '아무것도 하지 않는다', '더 빠르게 말한다'], ['Do you understand?라고 묻는다'], { d: 0.35 }),
              TALK('짝과 말이 막힌 상황을 하나 정해 몸짓과 쉬운 영어로 뜻을 전해 보세요. 짝은 무슨 뜻인지 맞혀요. 다 했으면 "다 했어요"를 누르세요.'),
            ]],
        ],
        wT: '"말이 막혔을 때 어떤 방법이 가장 도움이 되었나요?" 몸짓이나 쉬운 낱말이 도움이 되었다는 이야기를 모은다. 막히면 멈추기만 하는 학생은 다음 시간 시작에 Wait.라고 말하고 몸짓을 먼저 해 보게 한다.',
        ex: [
          { type: 'tool', tool: 'wordcards', options: { mode: 'order', cards: NC(['Say Wait.', 'Use a gesture.', 'Say again.']) }, prompt: '말이 막혔을 때 해 볼 순서대로 카드를 놓아 보세요.', target: { order: ['Say Wait.', 'Use a gesture.', 'Say again.'] }, difficulty: 0.3 },
          { type: 'choice', prompt: '말이 막혔을 때 가장 먼저 하면 좋은 것은 무엇일까요?', options: ['Wait. 하고 숨을 고른다', '말을 그만둔다', '화를 낸다'], answer: 0, difficulty: 0.15, explain: '먼저 숨을 고르면 마음이 가라앉아 다음 방법을 쓸 수 있어요.' },
        ],
        wsT: '말이 막힐 때 쓰는 방법',
        ws: [
          { type: 'table', prompt: '말이 막혔을 때 해 볼 방법을 차례대로 쓰세요.', columns: ['순서', '방법'], cells: [['1', 'Say Wait.'], ['2', ''], ['3', ''], ['4', '']], answer: '예: Use a gesture. / Say a short word. / Try again.' },
          { type: 'choice', prompt: '내 말이 작게 들린다고 할 때 알맞은 방법에 ○ 하세요.', options: ['더 크게 천천히 다시 말한다', '말을 그만둔다', '화를 낸다'], answer: '더 크게 천천히 다시 말한다' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: '___. (잠깐 기다려 줘)   This one, ___. (이거 주세요)', answer: 'Wait / please' },
          { type: 'short', prompt: '말이 막혔을 때 내가 가장 먼저 하고 싶은 방법을 한 줄로 써 보세요.' },
        ],
        note: '가장 쉬운 방법부터 차례대로 해 봐요.',
        ch: '비슷한 방법 카드가 섞여 있고, 순서 카드가 네 장이에요.',
        nt: '자주 보이는 어려움: ① 막히면 조용히 멈추기만 한다 → Wait.라고 말하고 몸짓을 시도하게 한다. ② 몸짓과 말을 함께 쓰지 않는다 → 짧은 영어 한 낱말을 곁들이게 한다. ③ 순서를 건너뛴다 → 숨 고르기가 먼저임을 짚는다.',
      }),

      // ───────────────────────── 26차시 (core) ─────────────────────────
      lesson(26, {
        std: S10, t: '짝의 말에 고개 끄덕이고 짧은 말로 예의 있게 반응하기',
        o: '짝의 말에 I see., Thank you. 같은 짧은 반응으로 답하고, 알아듣지 못했을 때 예의 있게 다시 말해 달라고 할 수 있다.',
        ill: ['two children facing each other, one nodding with a smile and the other speaking with a speech bubble that has a heart', 'I see. Thank you.', '예의 있게 반응하기'],
        iT: '교사가 학생 한 명에게 "I like soccer."라고 말하고, 학생이 아무 반응이 없는 경우와 고개를 끄덕이며 "I see."라고 말하는 경우를 비교하게 한다. "어느 쪽이 더 편하게 말할 수 있나요?" 짧은 반응이 대화를 이어 준다는 점을 확인한다. 아무 반응 없이 듣기만 하는 학생에게는 한 마디 반응을 짝에게 해 보게 한다.',
        iS: '친구가 말할 때 어떤 반응을 보이면 좋을까요? 고개를 끄덕이거나 짧게 말해 봐요.',
        demo: { tool: 'wordcards', options: { mode: 'pick', basket: '고른 반응', shuffle: false, cards: NC(['I see.', 'Be quiet.']) }, sequence: [{ at: {} }, { at: { 'I see.': 0 } }] },
        a: [
          ['활동 1. 친구의 말에 알맞은 반응 고르기', '"친구가 말한 내용에 알맞은 반응을 골라요. 고른 반응을 표정과 함께 말해요." 반응을 말한 뒤 친구의 마음이 어떻게 달라질지 이야기한다. 아무 반응이나 외운 말만 쓰는 학생에게는 친구가 겪은 일이 좋은 일인지 힘든 일인지 먼저 말하게 한다.', '친구의 말을 읽고 가장 알맞은 반응을 골라요. 표정과 함께 말해 보세요.', 'emotion',
            LB,
            [
              BR('Mina가 "I won the game!"이라고 말했어요. 어떻게 반응할까요?', 'Mina', '"I won the game!"', '기쁨', [['Great! Congratulations!', 'Mina가 활짝 웃어요.'], ['I do not care.', 'Mina가 속상해요.', '기쁜 일에 관심이 없다고 말하면 친구가 속상해요.'], ['(말없이 다른 곳을 본다)', 'Mina가 무시당한 기분이에요.', '친구를 바라보고 반응해야 해요.']], 0),
              BR('Jun이 "I lost my pen."이라고 말했어요. 어떻게 반응할까요?', 'Jun', '"I lost my pen."', '슬픔', [['Oh, I am sorry. Let us look for it.', 'Jun이 고마워해요.'], ['Great!', 'Jun이 더 속상해요.', '속상한 일에 Great!라고 하면 친구 마음이 상해요.'], ['Ha ha!', 'Jun이 화가 나요.', '친구가 속상한 일에 웃으면 안 돼요.']], 0, { d: 0.25 }),
              BR('Mina가 빠르게 말해서 잘 못 들었어요. 어떻게 반응할까요?', 'Mina', '"I have a new cat and a dog and a bird."', '걱정', [['Pardon? One more time, please.', 'Mina가 천천히 다시 말해 줘요.'], ['(고개만 끄덕이고 넘어간다)', '대화가 이어지지 않아요.', '알아듣지 못하면 부드럽게 다시 물어요.'], ['What? Stop!', 'Mina가 놀라요.', '무례하게 들릴 수 있으니 Pardon?이라고 말해요.']], 0, { d: 0.3 }),
            ]],
          ['활동 2. 상황에 알맞은 짧은 반응 짝 짓기', '"친구의 말 옆에 알맞은 반응을 놓아요. 놓은 뒤 짝과 번갈아 말하고 반응해 보세요." 반응 한 마디가 대화를 따뜻하게 만든다는 점을 이야기한다. 반응을 한 가지로만 쓰는 학생에게는 상황에 따라 다른 반응을 골라 보게 한다.', '친구의 말 옆에 알맞은 짧은 반응을 놓고, 짝과 번갈아 말해요.', 'wordcards',
            LA('match', '친구가 한 말이 기쁜 일인지 도움이 필요한 일인지 먼저 정해 보세요. 그 마음에 맞는 짧은 반응을 찾아보세요.'),
            [
              MT('친구의 말에 알맞은 반응을 놓아 보세요.', [['I have a new bike.', 'That is nice!'], ['I am tired.', 'Take a rest.']], { x: ['Bad luck.'] }),
              MT('친구의 말에 알맞은 반응을 놓아 보세요.', [['Here is a gift for you.', 'Thank you!'], ['I am sorry I am late.', 'It is okay.']], { d: 0.25, x: ['Go away.'] }),
              MT('친구의 말에 알맞은 반응을 놓아 보세요.', [['I can swim.', 'Wow, cool!'], ['I lost my ball.', 'I am sorry to hear that.'], ['It is my birthday.', 'Happy birthday!']], { d: 0.35 }),
            ]],
        ],
        wT: '"친구가 짧게 반응해 주었을 때 기분이 어땠나요?" 말하기가 편해졌다는 이야기를 모은다. 반응을 하지 않는 학생은 다음 시간 시작에 친구 말을 듣고 I see.만이라도 말하게 한다.',
        ex: [
          { type: 'tool', tool: 'wordcards', options: { mode: 'match', shuffle: false, slots: [{ id: 'm1', label: 'It is my birthday.' }, { id: 'm2', label: 'I am sorry I am late.' }], cards: NC(['Happy birthday!', 'It is okay.']) }, prompt: '친구의 말에 알맞은 반응을 놓아 보세요.', target: { match: { m1: 'Happy birthday!', m2: 'It is okay.' } }, difficulty: 0.25 },
          { type: 'choice', prompt: '친구의 말을 못 알아들었을 때 예의 있게 말하는 방법은 무엇일까요?', options: ['Pardon?', 'What? Stop!', '아무 말도 하지 않는다'], answer: 0, difficulty: 0.15, explain: 'Pardon?은 예의 있게 다시 말해 달라고 하는 말이에요.' },
        ],
        wsT: '예의 있게 반응하기',
        ws: [
          { type: 'table', prompt: '친구의 말에 알맞은 반응을 쓰세요.', columns: ['친구의 말', '내 반응'], cells: [['I have a new bike.', 'That is nice!'], ['It is my birthday.', ''], ['I lost my pen.', ''], ['Here is a gift for you.', '']], answer: 'Happy birthday! / I am sorry to hear that. / Thank you!' },
          { type: 'choice', prompt: '못 알아들었을 때 알맞은 반응에 ○ 하세요.', options: ['Pardon?', 'Stop talking.', 'I do not care.'], answer: 'Pardon?' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: 'I ___. (알겠어요)   ___ you! (고마워요)', answer: 'see / Thank' },
          { type: 'short', prompt: '친구가 기쁜 소식을 말했을 때 해 줄 영어 반응을 하나 써 보세요.' },
        ],
        note: '친구의 말이 기쁜 일인지 힘든 일인지 먼저 정해요.',
        ch: '무례한 반응 카드가 섞여 있고, 반응해야 할 말이 세 개로 늘어요.',
        nt: '자주 보이는 어려움: ① 알아듣지 못하면 아무 말 없이 넘어가 대화가 끊긴다 → Pardon?이라고 말하는 연습을 한다. ② 같은 반응(Good job!)만 쓴다 → 일의 좋고 나쁨에 맞는 반응을 고르게 한다. ③ 반응할 때 상대를 바라보지 않는다 → 눈을 마주치며 말하게 한다.',
      }),

      // ───────────────────────── 27차시 (wrap) ─────────────────────────
      lesson(27, {
        std: S10, t: '단원 정리: 인사하고 다시 말하며 예의 있게 대화하기',
        o: '이 단원에서 배운 인사, 다시 말하기, 몸짓, 예의 있는 반응을 모아 한 대화를 만들고 스스로 말하기를 점검할 수 있다.',
        ill: ['a classroom of children in pairs talking with speech bubbles full of greeting hearts and thumbs-up symbols around a big checklist', 'Hello! Thank you!', '말하기 단원 정리'],
        iT: '칠판에 "인사하기 / 묻고 답하기 / 다시 말하기 / 몸짓 / 예의 있게 반응하기" 다섯 가지를 쓰고 "이 단원에서 가장 자신 있는 것은 무엇인가요?"라고 묻는다. 손을 든 학생이 이유를 말하게 한다. 한 가지만 떠올리는 학생에게는 활동지를 펴서 다른 것도 찾아보게 한다.',
        iS: '이 단원에서 배운 것을 떠올려 봐요. 가장 자신 있는 말하기는 무엇인가요?',
        demo: { tool: 'wordcards', options: { mode: 'sort', slots: [{ id: 'g1', label: '인사하는 말' }, { id: 'g2', label: '다시 말하는 말' }], cards: NC(['Hello.', 'Pardon?']) }, sequence: [{ at: {} }, { at: { 'Hello.': 0 } }] },
        a: [
          ['활동 1. 배운 말을 세 무리로 나누기', '"이 단원에서 배운 말을 세 칸에 나누어 놓아요. 놓은 뒤 말마다 언제 쓰는지 짝에게 설명해요." 한 칸씩 소리 내어 읽게 한다. 낱말의 뜻만 보고 놓는 학생에게는 대화에서 쓰는 순간을 먼저 말하게 한다. 도전 단계에는 이 단원에 없는 말 카드가 섞여 있다.', '말 카드를 인사하는 말, 다시 말하는 말, 예의 있는 반응 세 칸에 나누어 놓아요.', 'wordcards',
            LA('sort', '그 말을 대화의 어느 순간에 쓰는지 떠올려 보세요. 만났을 때인지, 못 알아들었을 때인지, 친구의 말에 답할 때인지 생각해 보세요.'),
            [
              SO('말 카드를 세 칸에 나누어 놓아 보세요.', [['인사하는 말', ['Hello.', 'Goodbye.']], ['다시 말하는 말', ['Pardon?', 'Sorry.']], ['예의 있는 반응', ['I see.', 'Thank you.']]], { x: ['Table.'] }),
              SO('말 카드를 세 칸에 나누어 놓아 보세요.', [['인사하는 말', ['Good morning.', 'See you.']], ['다시 말하는 말', ['One more time, please.', 'Let me try again.']], ['예의 있는 반응', ['That is nice!', 'It is okay.']]], { d: 0.35, x: ['Pencil.'] }),
              SO('말 카드를 세 칸에 나누어 놓아 보세요.', [['인사하는 말', ['Hi!', 'Good afternoon.']], ['다시 말하는 말', ['Slowly, please.', 'Wait.']], ['예의 있는 반응', ['Wow, cool!', 'Happy birthday!']]], { d: 0.4 }),
            ]],
          ['활동 2. 한 대화로 이어 말하기', '"인사, 묻고 답하기, 다시 말하기, 반응이 들어가도록 대화를 순서대로 놓고 짝과 역할을 바꾸어 읽어요." 대화에서 예의 있게 반응하는 부분을 짝에게 짚어 알려 준다. 마지막 문항은 짝과 직접 대화를 만드는 활동이다. 대화 전체를 외우려는 학생에게는 핵심 문장만 기억하게 한다.', '대화 카드를 차례대로 놓고, 짝과 역할을 바꾸어 읽은 뒤 직접 대화해 봐요.', 'wordcards',
            LA('order', '대화는 인사로 시작해서 묻고 답하고, 틀리면 다시 말하고, 마지막에 예의 있는 반응으로 끝나요. 소리 내어 읽으며 확인해 보세요.'),
            [
              OR('한 대화를 차례대로 놓아 보세요.', ['Hello! What is your name?', 'My name is Mina.', 'Nice to meet you.', 'Nice to meet you, too.'], { x: ['Goodbye, cat.'] }),
              OR('틀렸을 때 다시 말하는 대화를 차례대로 놓아 보세요.', ['How old are you?', 'I am ten year.', 'Sorry. I am ten years old.', 'I see. Thank you.'], { d: 0.4 }),
              TALK('짝과 인사하고, 이름이나 좋아하는 색을 묻고 대답한 뒤, 짝의 말에 짧게 반응하세요. 틀리면 Sorry. 하고 다시 말해요. 다 했으면 "다 했어요"를 누르세요.'),
            ]],
        ],
        wT: '"이 단원에서 새로 할 수 있게 된 말하기를 하나 말해 볼까요?" 손가락으로 자신 있는 정도를 표시하게 하고 이유를 한두 명에게 듣는다. 가장 어려웠던 것을 하나 골라 다음 시간에 더 해 보고 싶은 것으로 적게 한다.',
        ex: [
          { type: 'tool', tool: 'wordcards', options: { mode: 'sort', shuffle: false, slots: [{ id: 'g1', label: '인사하는 말' }, { id: 'g2', label: '예의 있는 반응' }], cards: NC(['Good night.', 'That is nice!']) }, prompt: '두 말을 알맞은 칸에 놓아 보세요.', target: { sort: { g1: ['Good night.'], g2: ['That is nice!'] } }, difficulty: 0.25 },
          { type: 'choice', prompt: '대화에서 틀렸을 때 가장 먼저 쓰면 좋은 말은 무엇일까요?', options: ['Sorry.', 'Stop.', 'Bye.'], answer: 0, difficulty: 0.15, explain: 'Sorry. 하고 다시 말하면 대화가 이어져요.' },
        ],
        mood: '이 단원에서 영어로 말하기는 어땠나요?',
        wsT: '단원 정리: 영어로 말하기 점검',
        ws: [
          { type: 'table', prompt: '이 단원에서 배운 말을 한 가지씩 쓰세요.', columns: ['무엇', '내가 쓸 영어 말'], cells: [['인사하기', 'Hello.'], ['묻기', ''], ['다시 말하기', ''], ['예의 있게 반응하기', '']], answer: '예: What is your name? / Sorry. / Thank you.' },
          { type: 'choice', prompt: '못 알아들었을 때 예의 있게 말하는 것에 ○ 하세요.', options: ['Pardon?', 'Stop it.', 'No.'], answer: 'Pardon?' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: '___ morning!   Sorry. I ___ ten.', answer: 'Good / am' },
          { type: 'short', prompt: '이 단원에서 가장 자신 있는 말하기와 더 연습하고 싶은 말하기를 한 줄로 써 보세요.' },
        ],
        note: '배운 말마다 언제 쓰는지 먼저 떠올려요.',
        ch: '이 단원에 없는 말 카드가 섞여 있고, 대화가 네 줄로 길어져요.',
        nt: '자주 보이는 어려움: ① 말은 외웠지만 언제 쓰는지 헷갈린다 → 대화에서 쓰는 순간을 말하게 한다. ② 대화 끝에 반응하지 않고 끝낸다 → 짧은 반응 한 마디로 끝맺게 한다. ③ 틀리면 부끄러워 멈춘다 → Sorry. 하고 다시 말하는 약속을 상기시킨다. 단원 평가는 정답 수보다 스스로 점검했는지를 본다.',
      }),
    ],
  });
})();
