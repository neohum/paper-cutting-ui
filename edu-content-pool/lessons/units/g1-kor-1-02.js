/* 1학년 1학기 국어 2단원 받침이 있는 글자를 읽어요 — 13차시(이미 있는 3차시 g1-korean-batchim은 refs로 잇는다)
 * (받침 있는 글자 찾기 → 받침 듣고 쓰기 → [3차시 기존] → 바른 자세로 발표하기 → 문장 쓰기·고쳐 쓰기 → 받침 자음 이름·소리 → 정리)
 * 예문·대화·인물(가명)·낱말 글은 모두 이 단원을 위해 새로 지었다. 교과서 지문·그림·노래 가사를 옮기지 않았다.
 * 글자를 직접 만드는 문항은 받침이 한 개인 글자만 쓴다(겹받침·소리가 바뀌는 낱말은 다음 학기에 다룬다).
 */
(function () {
  const U = { id: 'g1-kor-1-02', catalogUnit: 'g1-국어-1학기-2', unitTitle: '2. 받침이 있는 글자를 읽어요' };
  const L = (n, rest) => Object.assign({
    id: `${U.id}-${String(n).padStart(2, '0')}`, schema: 'edu-lesson.v1',
    catalog: { unit: U.catalogUnit, lesson: n },
    grade: 1, subject: '국어', unitTitle: U.unitTitle,
    minutes: 40, formats: ['chromebook', 'projector', 'print'],
  }, rest);
  const ART = (what, txt) => ({
    prompt: `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`,
    scene: { viewBox: [480, 270], layers: [
      { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 110, y: 50 }, { motif: 'hills', y: 206 },
      { motif: 'house', x: 110, y: 214 }, { motif: 'tree', x: 380, y: 214 }, { motif: 'flower', x: 250, y: 226 },
      { motif: 'text', x: 240, y: 140, text: txt, size: 30 },
    ] },
  });
  const MOOD = { type: 'mood', prompt: '오늘 공부는 어땠나요?' };
  const WRITE = ['[2국03-01]']; const SPEAK = ['[2국01-04]']; const JAMO = ['[2국04-01]'];
  const HELP = { live: true, instant: true };
  const LV = { easy: HELP, base: {}, challenge: {} };
  const BAT = ['ㄱ', 'ㄴ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅇ'];
  // 카드 id는 로마자(힌트 누출 검사가 한글 값만 본다)
  const C = (id, text, o) => Object.assign({ id, text }, o);
  const W = (id, ch) => ({ id, text: ch, big: ch });
  const PICK = (prompt, topic, cards, pick, d, o) => Object.assign({ prompt, toolOptions: { mode: 'pick', topic, basket: topic, cards }, target: { pick }, difficulty: d }, o);
  const SORT = (prompt, topic, slots, cards, sort, d, o) => Object.assign({ prompt, toolOptions: { topic, slots, cards }, target: { sort }, difficulty: d }, o);
  const MATCH = (prompt, topic, slots, cards, match, d, o) => Object.assign({ prompt, toolOptions: { mode: 'match', topic, slots, cards }, target: { match }, difficulty: d }, o);
  const ORDER = (prompt, cards, order, d, o) => Object.assign({ prompt, toolOptions: { mode: 'order', slots: order.map((_, i) => ['첫째', '둘째', '셋째', '넷째'][i]), cards }, target: { order }, difficulty: d }, o);
  const FILL = (prompt, slots, cards, fill, d, o) => Object.assign({ prompt, toolOptions: { mode: 'fill', slots, cards }, target: { fill }, difficulty: d }, o);
  const BR = (prompt, who, situation, choices, answer, d) => ({ prompt, toolOptions: { mode: 'branch', who, situation, choices }, target: { choice: answer }, difficulty: d });
  const HG = (prompt, syl, d, o) => Object.assign({ prompt, target: { syllable: syl }, difficulty: d }, o);
  // 받침 글자 만들기 단계: 쉬움은 자리 안내, 기본·도전은 합친 글자를 확인 뒤에만 보여 준다
  const HGL = (cons, vows, bat, extra) => {
    const b = { batchim: bat || BAT }; const x = extra || {};
    return {
      easy: Object.assign({ consonants: cons, vowels: vows, slotHints: true, slotGuide: true }, b, x),
      base: Object.assign({ consonants: cons, vowels: vows, revealAfterCheck: true }, b, x),
      challenge: Object.assign({ consonants: cons, vowels: vows, speak: false, revealAfterCheck: true }, b, x),
    };
  };
  const CH = (prompt, options, answer, explain, d) => ({ type: 'choice', prompt, options, answer, difficulty: d, explain });
  const SELF = (situation, feeling, ask) => ({ mode: 'scale', steps: 3, situation, feeling, ask, scaleLabels: { 1: '아직', 2: '조금', 3: '잘해요' } });
  const SELF_HINTS = ['오늘 내 모습을 떠올려 보고, 가장 가까운 눈금 하나를 눌러요. 어느 눈금이든 괜찮아요.', '잘한 점과 아직인 점을 하나씩 떠올려 봐요.', '떠오른 모습에 가장 가까운 눈금을 골라요.'];
  const A = (id, title, minutes, tool, teacher, task, levels, items) => ({ id, title, minutes, tool, teacher, task, levels, items });
  const ST = (intro, wrap, acts, exits) => [
    { id: 'intro', title: '도입', minutes: 6, teacher: intro.teacher, student: intro.student, demo: intro.demo },
    { id: 'main', title: '전개', minutes: 26, activities: acts },
    { id: 'wrapup', title: '정리', minutes: 8, teacher: wrap, exitTicket: exits },
  ];
  const BLANK = '(          )';

  const lessons = [
    // ───────────────────────── 1. 도입: 받침 있는 글자 찾기 ─────────────────────────
    L(1, {
      title: '받침 있는 글자와 없는 글자 가르고 이름표 글자 쓰기',
      objective: '받침이 있는 글자와 없는 글자를 나누고, 받침이 있는 글자를 만들어 이름표에 쓸 글자를 정할 수 있다.',
      standards: WRITE,
      illustration: ART('a child writing letters on a paper name tag, with some letters having a little paper support piece underneath', '곰  문  달'),
      stages: ST(
        { teacher: '"교실 물건 이름표를 써 보려고 해요. 글자 아래에 작은 조각이 하나 더 있는 글자를 찾아볼까요?" 칠판에 \'가\'와 \'감\'을 나란히 쓰고 아래 조각을 짚는다. 시연 단추로 ㄱ과 ㅗ에 ㅁ이 아래에 붙어 \'곰\'이 되는 모습을 보여 준다. "맨 아래에 붙는 조각을 받침이라고 해요."', student: '글자 맨 아래에 붙는 조각을 받침이라고 해요. 받침이 있는 글자를 찾아봐요.', demo: { tool: 'hangul', options: { consonants: ['ㄱ'], vowels: ['ㅗ'], batchim: ['ㅁ', 'ㅇ'], slotHints: true }, sequence: [{ syllable: '곰' }] } },
        '"오늘 이름표에 쓰고 싶은 받침 있는 글자는 무엇인가요?" 한두 명이 말하고 손가락으로 공중에 써 본다. 출구 1번에서 받침이 오른쪽에 붙는다고 고른 학생에게는 \'곰\'을 다시 보며 받침이 모음 옆이 아니라 맨 아래라는 것을 짚는다.',
        [
          A('a1', '활동 1. 받침이 있는 글자와 없는 글자 가르기', 12, 'mindmap',
            '"이 글자의 맨 아래에 조각이 하나 더 있나요? 손가락으로 짚어 봐요." 카드를 소리 내어 읽고 아래를 짚게 한다. \'소\'를 받침 있는 칸에 넣는 학생에게는 "글자 맨 아래에 조각이 있나요?"라고 되묻는다.',
            '글자 카드를 받침이 없는 것과 있는 것으로 나누어요.', LV,
            [
              SORT('글자 카드를 받침이 없는 것과 받침이 있는 것으로 나누어 보세요.', '받침 찾기', [{ id: 'no', label: '받침이 없어요' }, { id: 'yes', label: '받침이 있어요' }], [W('so', '소'), W('gom', '곰'), W('mul', '물'), W('ba', '바'), W('chaek', '책'), W('du', '두')], { no: ['so', 'ba', 'du'], yes: ['gom', 'mul', 'chaek'] }, 0.1,
                { levels: { easy: { prompt: '글자 카드 넷을 받침이 없는 것과 있는 것으로 나누어 보세요.', toolOptions: { cards: [W('so', '소'), W('gom', '곰'), W('mul', '물'), W('ba', '바')] }, target: { sort: { no: ['so', 'ba'], yes: ['gom', 'mul'] } } } } }),
              SORT('낱말 카드를 받침이 한 개도 없는 것과 받침이 있는 것으로 나누어 보세요.', '낱말의 받침', [{ id: 'no', label: '받침이 하나도 없어요' }, { id: 'yes', label: '받침이 있어요' }], [C('moja', '모자'), C('saja', '사자'), C('gongchaek', '공책'), C('yeonpil', '연필')], { no: ['moja', 'saja'], yes: ['gongchaek', 'yeonpil'] }, 0.2),
              PICK('교실 물건 이름표 가운데 받침이 있는 글자가 들어 있는 것을 모두 골라 보세요.', '받침이 있는 이름표', [C('chaek', '책'), C('gawi', '가위'), C('pul', '풀'), C('uyu', '우유')], ['chaek', 'pul'], 0.25,
                { conclude: '받침은 글자 맨 아래에 붙는 조각이에요. 책과 풀에는 받침이 있어요.' }),
              PICK('더 해 보기: 받침이 있는 글자를 모두 골라 보세요.', '받침이 있는 글자', [W('dal', '달'), W('na', '나'), W('mun', '문'), W('ji', '지'), W('jip', '집')], ['dal', 'mun', 'jip'], 0.3, { extra: true }),
            ]),
          A('a2', '활동 2. 받침 있는 글자 만들어 이름표에 쓸 낱말 정하기', 14, 'hangul',
            '"자음, 모음을 틀에 놓고 받침을 맨 아래에 놓아요." 받침 조각 이름을 입 모양으로 말하게 한다. 받침을 모음 옆에 놓는 학생에게는 "받침이 놓일 자리는 어디였지요?"라고 묻고, 교구가 말해 주는 까닭을 함께 읽는다. 기본 단계는 확인 뒤에야 합친 글자가 보인다.',
            '자음과 모음, 받침을 모아 받침 있는 글자를 만들어요.', HGL(['ㄱ', 'ㄷ', 'ㅁ', 'ㅈ', 'ㅊ'], ['ㅏ', 'ㅗ', 'ㅜ', 'ㅣ', 'ㅐ']),
            [
              HG('이름표에 쓸 글자 \'곰\'을 만들어 보세요.', '곰', 0.15),
              HG('이름표에 쓸 글자 \'문\'을 만들어 보세요.', '문', 0.2),
              HG('이름표에 쓸 글자 \'책\'을 만들어 보세요.', '책', 0.25),
              HG('이름표에 쓸 글자 \'달\'을 만들어 보세요.', '달', 0.3),
              HG('더 해 보기: 이름표에 쓸 글자 \'집\'을 만들어 보세요.', '집', 0.25, { extra: true }),
            ]),
        ],
        [
          CH('받침은 글자의 어디에 붙나요?', ['모음 오른쪽', '글자 맨 아래', '글자 맨 위'], 1, '받침은 글자 맨 아래에 붙어요.', 0.1),
          { type: 'tool', tool: 'hangul', options: { consonants: ['ㅂ', 'ㅅ'], vowels: ['ㅏ', 'ㅗ'], batchim: ['ㄴ', 'ㅇ', 'ㄹ'], slotHints: true }, prompt: '이름표에 쓸 글자 \'볼\'을 만들어 보세요.', target: { syllable: '볼' }, difficulty: 0.3 },
          MOOD,
        ]),
      worksheet: {
        title: '받침이 있는 글자',
        items: [
          { type: 'check', prompt: '받침이 있는 글자를 모두 골라 □에 ✓ 하세요.', options: ['소', '곰', '물', '바'], answer: '곰, 물' },
          { type: 'figure', prompt: '자음, 모음, 받침이 모이면 어떤 글자가 될까요? 아래에 쓰세요.', tool: 'hangul', options: { batchim: [] }, figures: [{ state: { cho: 'ㄱ', jung: 'ㅗ', jong: 'ㅁ' }, caption: BLANK }, { state: { cho: 'ㅁ', jung: 'ㅜ', jong: 'ㄴ' }, caption: BLANK }, { state: { cho: 'ㄷ', jung: 'ㅏ', jong: 'ㄹ' }, caption: BLANK }], answer: '곰, 문, 달' },
          { type: 'blank', prompt: '받침을 붙여 글자를 쓰세요.', text: '지 + ㅂ = ___     차 + ㅇ = ___', answer: '집, 창' },
          { type: 'draw', prompt: '이름표에 쓰고 싶은 받침 있는 글자를 쓰고 그림도 그려 보세요.' },
        ],
        easy: { note: '받침은 맨 아래에 붙여요.', items: [
          { type: 'choice', prompt: '받침이 있는 글자에 ○ 하세요.', options: ['소', '곰'], answer: '곰' },
          { type: 'blank', prompt: '글자를 따라 쓰세요.', text: '책 → ___     문 → ___', answer: '책, 문' },
          { type: 'blank', prompt: '받침을 붙여 글자를 쓰세요.', text: '다 + ㄹ = ___', answer: '달' },
          { type: 'draw', prompt: '이름표에 쓰고 싶은 글자를 그림과 함께 그려 보세요.' },
        ] },
      },
      differentiation: {
        easy: '가르기는 카드 넷으로 시작하고 맞게 놓으면 초록 테두리가 생겨요. 글자 만들기는 자음·모음·받침 자리 글씨가 있고, 모음을 들면 알맞은 자리가 깜박여요.',
        base: '카드를 모두 놓은 뒤 확인하고, 만든 글자는 확인 뒤에 보여요.',
        challenge: '내 글자 듣기 단추가 없고, 더 해 보기(받침 있는 글자 고르기, \'집\' 만들기)까지 풀어요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 받침이 모음 오른쪽에 붙는다고 생각한다 → 받침은 모음 모양과 상관없이 맨 아래라는 것을 손바닥을 틀 아래에 대며 익힌다. ② 모음 아래에 붙는 ㅗ·ㅜ와 받침을 혼동한다 → 곰에서 ㅗ와 ㅁ이 둘 다 아래쪽에 있어서 헷갈리니, 자음 바로 아래는 모음, 맨 아래는 받침이라고 말한다. ③ 소리를 들어서는 받침 유무를 모른다 → 입이 닫히거나 혀가 닿는 느낌으로 판단한다. 이름표 낱말은 학생이 직접 고른 낱말을 쓰게 한다.',
    }),

    // ───────────────────────── 2. 연습: 받침 듣고 쓰기 ─────────────────────────
    L(2, {
      title: '몸 이름 낱말의 받침을 듣고 알맞은 글자 쓰기',
      objective: '몸 이름 낱말의 끝소리를 듣고 알맞은 받침을 붙여 글자를 만들며, 뜻에 맞는 낱말을 받침까지 정확히 쓸 수 있다.',
      standards: WRITE,
      illustration: ART('a child pointing to a paper hand, foot and arm with little name cards, each card showing a word with a bottom support piece', '발  손  팔  입'),
      stages: ST(
        { teacher: '"내 몸에서 둘이 있는 것을 찾아볼까요? 손, 발, 팔." 몸을 가리키며 낱말 소리를 천천히 들려준다. 시연 단추로 ㅂ과 ㅏ에 받침 ㄹ이 붙어 \'발\'이 되는 모습을 보여 주고, "끝소리를 잘 들어야 받침을 알 수 있어요."', student: '몸 이름 낱말의 끝소리를 듣고 받침을 정해 글자를 만들어 봐요.', demo: { tool: 'hangul', options: { consonants: ['ㅂ'], vowels: ['ㅏ'], batchim: ['ㄹ', 'ㅁ'], slotHints: true }, sequence: [{ syllable: '발' }] } },
        '"오늘 쓴 몸 이름 낱말 가운데 하나를 짝에게 천천히 읽어 줄까요?" 받침 소리를 크게 해서 읽는다. 출구 1번에서 \'손\'과 \'속\'을 바꾼 학생에게는 입을 다물고 혀를 대는 끝소리를 함께 해 본다.',
        [
          A('a1', '활동 1. 끝소리를 듣고 받침 있는 글자 쓰기', 14, 'hangul',
            '"끝소리에서 입이 닫히나요, 혀가 닿나요, 목이 울리나요?" 몸 낱말을 들려주며 입 모양을 손으로 느끼게 한다. 받침 없이 글자를 만드는 학생에게는 "소리의 끝이 닫혔나요, 열려 있나요?"라고 묻는다.',
            '낱말 소리를 듣고, 알맞은 받침을 붙여 글자를 만들어요. 소리가 안 나면 선생님이 읽어 줘요.', HGL(['ㅂ', 'ㅅ', 'ㅍ', 'ㅇ'], ['ㅏ', 'ㅗ', 'ㅣ'], ['ㄹ', 'ㄴ', 'ㅂ', 'ㅁ'], { listenTarget: true }),
            [
              HG('첫째 몸 낱말 소리를 듣고, 들은 글자를 만들어 보세요.', '발', 0.15),
              HG('둘째 몸 낱말 소리를 듣고, 들은 글자를 만들어 보세요.', '손', 0.2),
              HG('셋째 몸 낱말 소리를 듣고, 들은 글자를 만들어 보세요. 끝소리를 길게 느껴요.', '팔', 0.25),
              HG('넷째 몸 낱말 소리를 듣고, 들은 글자를 만들어 보세요.', '입', 0.3),
              HG('더 해 보기: 다섯째 소리를 듣고 들은 글자를 만들어 보세요.', '몸', 0.3, { extra: true, toolOptions: { consonants: ['ㅁ', 'ㅂ'], vowels: ['ㅗ', 'ㅏ'] } }),
            ]),
          A('a2', '활동 2. 뜻에 맞는 낱말 찾아 받침까지 읽기', 12, 'mindmap',
            '"뜻을 읽고 어울리는 낱말을 찾아봐요. 받침까지 소리 내어 읽어요." 카드를 손가락으로 짚으며 끝까지 읽게 한다. \'책\'을 \'채\'로 읽는 학생에게는 "글자 맨 아래에 조각이 있나요?"라고 되묻는다.',
            '뜻을 읽고 알맞은 낱말 카드를 이어요. 받침까지 소리 내어 읽어요.', LV,
            [
              MATCH('뜻에 알맞은 낱말 카드를 이어 보세요.', '뜻과 낱말', [{ id: 'read', label: '읽어요' }, { id: 'drink', label: '마셔요' }], [C('chaek', '책'), C('mul', '물'), C('gong', '공')], { read: 'chaek', drink: 'mul' }, 0.15),
              MATCH('뜻 셋에 알맞은 낱말 카드를 이어 보세요.', '뜻과 낱말', [{ id: 'live', label: '식구가 살아요' }, { id: 'kick', label: '발로 차요' }, { id: 'open', label: '열고 닫아요' }], [C('jip', '집'), C('gong', '공'), C('mun', '문'), C('dal', '달')], { live: 'jip', kick: 'gong', open: 'mun' }, 0.25,
                { conclude: '뜻을 알면 받침이 있는 낱말도 정확히 읽을 수 있어요.' }),
              PICK('밤하늘에서 볼 수 있는 것의 낱말 카드를 모두 골라 보세요.', '밤하늘에 있어요', [C('dal', '달'), C('byeol', '별'), C('mul', '물'), C('chaek', '책')], ['dal', 'byeol'], 0.2),
              PICK('더 해 보기: 받침이 있는 낱말 카드를 모두 골라 보세요.', '받침이 있어요', [C('saja', '사자'), C('mok', '목'), C('nabi', '나비'), C('gwi', '귀'), C('nun', '눈')], ['mok', 'nun'], 0.3, { extra: true }),
            ]),
        ],
        [
          { type: 'tool', tool: 'hangul', options: { consonants: ['ㅂ', 'ㅅ'], vowels: ['ㅏ', 'ㅗ'], batchim: ['ㄹ', 'ㄴ', 'ㅁ'], listenTarget: true }, prompt: '들은 글자를 만들어 보세요.', target: { syllable: '발' }, difficulty: 0.3 },
          CH('뜻이 \'읽어요\'일 때 알맞은 낱말은 어느 것일까요?', ['책', '물', '달'], 0, '읽는 것은 책이에요. 물은 마시고, 달은 하늘에 있어요.', 0.15),
          MOOD,
        ]),
      worksheet: {
        title: '몸 이름과 받침',
        items: [
          { type: 'figure', prompt: '몸 이름 낱말을 만들어 아래에 쓰세요.', tool: 'hangul', options: { batchim: [] }, figures: [{ state: { cho: 'ㅂ', jung: 'ㅏ', jong: 'ㄹ' }, caption: BLANK }, { state: { cho: 'ㅅ', jung: 'ㅗ', jong: 'ㄴ' }, caption: BLANK }, { state: { cho: 'ㅍ', jung: 'ㅏ', jong: 'ㄹ' }, caption: BLANK }], answer: '발, 손, 팔' },
          { type: 'choice', prompt: '\'입\'에서 받침은 어느 것일까요?', options: ['ㅂ', 'ㅇ', 'ㅁ'], answer: 'ㅂ' },
          { type: 'blank', prompt: '뜻에 알맞은 낱말을 쓰세요.', text: '마시는 것 → ______     읽는 것 → ______', answer: '물, 책' },
          { type: 'draw', prompt: '내 몸에서 받침 있는 낱말이 있는 곳을 그리고 낱말을 써 보세요.' },
        ],
        easy: { note: '끝소리를 소리 내어 듣고 써요.', items: [
          { type: 'blank', prompt: '글자를 따라 쓰세요.', text: '발 → ___     손 → ___', answer: '발, 손' },
          { type: 'choice', prompt: '\'팔\'의 받침에 ○ 하세요.', options: ['ㄹ', 'ㄴ'], answer: 'ㄹ' },
          { type: 'choice', prompt: '뜻이 \'마셔요\'인 낱말에 ○ 하세요.', options: ['물', '책'], answer: '물' },
          { type: 'draw', prompt: '내 손을 그리고 \'손\'을 써 보세요.' },
        ] },
      },
      differentiation: {
        easy: '받침 조각이 ㄹ·ㄴ·ㅂ·ㅁ 네 개로 줄고 자리 안내가 있어요. 낱말 잇기는 맞게 이으면 초록 테두리가 생겨요.',
        base: '소리를 듣고 만든 글자는 확인 뒤에 보여서 끝소리를 스스로 떠올려요.',
        challenge: '내 글자 듣기 단추가 없고, 더 해 보기(\'몸\' 만들기, 받침 있는 낱말 고르기)까지 풀어요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 끝소리를 듣지 못해 받침을 빠뜨린다 → 낱말을 천천히 끝까지 말하며 입 모양을 거울로 본다. ② 비슷한 끝소리(ㄴ·ㅁ·ㅇ)를 혼동한다 → 이 차시는 몸 낱말 속 ㄹ·ㄴ·ㅂ 받침 위주이고 ㅁ·ㅇ 구별은 뒤에서 다룬다고 안내한다. ③ 교구가 소리를 내지 못하는 기기가 있다 → 교사가 읽어 주거나 화면 글자 안내를 쓴다. 낱말 뜻 이어 보기는 쓰기 전 낱말을 정확히 읽기 위한 준비다.',
    }),

    // ───────────────────────── 4. 말하기: 담화 상황과 목적 파악 ─────────────────────────
    L(4, {
      title: '발표할 때 바른 자세와 알맞은 말하기 고르기',
      objective: '발표 상황에서 바른 자세와 알맞은 말하기 방법을 고르고, 누구에게 무슨 말을 하려고 발표하는지 말할 수 있다.',
      standards: SPEAK,
      illustration: ART('a paper child standing straight in front of classmates holding a small card while others sit and listen', '바른 자세로 발표해요'),
      stages: ST(
        { teacher: '"앞에 나와 친구들에게 이야기해 본 적이 있나요? 그때 어떤 자세였나요?" 교사가 먼저 어깨를 구부리고 작은 소리로 말해 보이고 다시 바른 자세로 말해 보인다. "어느 쪽이 더 잘 들리고 보기 좋은가요? 오늘은 발표할 때 바른 자세를 찾아봐요."', student: '발표할 때 어떤 자세가 좋을까요? 바른 자세를 찾아봐요.', demo: { tool: 'mindmap', options: { topic: '발표 자세', shuffle: false, slots: [{ id: 'good', label: '바른 자세' }, { id: 'bad', label: '바르지 않은 자세' }], cards: [{ id: 'straight', text: '허리를 펴고 서요' }, { id: 'hide', text: '얼굴을 가려요' }] }, sequence: [{ sort: { good: ['straight'], bad: ['hide'] } }] } },
        '"오늘 발표할 때 가장 중요하게 생각한 것은 무엇인가요?" 두세 명이 말하고 모두 바른 자세로 다시 말해 본다. 출구 1번에서 고개를 숙이고 말하는 것을 고른 학생에게는 듣는 친구가 어디를 보고 있을지 생각하게 한다.',
        [
          A('a1', '활동 1. 발표할 때 바른 자세 가르기', 13, 'mindmap',
            '"발표하는 친구를 떠올려 봐요. 이 모습은 듣는 친구에게 어떻게 보일까요?" 카드마다 자세를 몸으로 해 보게 한다. \'한 발로 서서 흔들거려요\'를 바른 자세에 넣는 학생에게는 "친구들이 발표 내용을 잘 들을 수 있을까요?"라고 묻는다.',
            '발표 모습 카드를 바른 자세와 바르지 않은 자세로 나누어요.', LV,
            [
              SORT('발표할 때 바른 자세와 바르지 않은 자세로 나누어 보세요.', '발표 자세', [{ id: 'good', label: '바른 자세' }, { id: 'bad', label: '바르지 않은 자세' }], [C('straight', '허리를 펴고 서요'), C('look', '친구들을 바라보며 말해요'), C('down', '고개를 숙이고 중얼거려요'), C('sway', '한 발로 서서 흔들거려요'), C('clear', '또박또박 말해요'), C('cover', '손으로 얼굴을 가려요')], { good: ['straight', 'look', 'clear'], bad: ['down', 'sway', 'cover'] }, 0.15,
                { levels: { easy: { prompt: '카드 넷을 바른 자세와 바르지 않은 자세로 나누어 보세요.', toolOptions: { cards: [C('straight', '허리를 펴고 서요'), C('down', '고개를 숙이고 중얼거려요'), C('clear', '또박또박 말해요'), C('cover', '손으로 얼굴을 가려요')] }, target: { sort: { good: ['straight', 'clear'], bad: ['down', 'cover'] } } } } }),
              SORT('발표할 때 목소리에 대해 알맞은 것과 알맞지 않은 것으로 나누어 보세요.', '발표 목소리', [{ id: 'good', label: '알맞아요' }, { id: 'bad', label: '알맞지 않아요' }], [C('mid', '뒤에 앉은 친구도 들리게 말해요'), C('whisper', '혼잣말처럼 작게 말해요'), C('slow', '천천히 말해요'), C('fast', '숨도 안 쉬고 빨리 말해요')], { good: ['mid', 'slow'], bad: ['whisper', 'fast'] }, 0.2,
                { conclude: '발표할 때는 모두가 들을 수 있게 알맞은 크기로 천천히 말해야 해요.' }),
              PICK('발표 전에 준비하면 좋은 것을 모두 골라 보세요.', '발표 준비', [C('plan', '무슨 말을 할지 생각해요'), C('breath', '숨을 한 번 크게 쉬어요'), C('run', '교실 밖으로 달려가요')], ['plan', 'breath'], 0.25),
              PICK('더 해 보기: 발표를 마친 뒤 알맞은 행동을 모두 골라 보세요.', '발표를 마치고', [C('thanks', '"들어 주셔서 고맙습니다." 하고 인사해요'), C('run', '말없이 자리로 뛰어가요'), C('wait', '친구들의 질문을 기다려요')], ['thanks', 'wait'], 0.3, { extra: true }),
            ]),
          A('a2', '활동 2. 누구에게 무엇을 말할지 생각하기', 13, 'mindmap',
            '"발표를 하기 전에 두 가지를 먼저 생각해요. 누구에게 말할까, 무엇을 말할까." 두 질문을 칠판에 쓰고 학생에게 직접 대답해 보게 한다. 듣는 사람과 상관없이 말하는 학생에게는 "동생들에게 말할 때와 어른들에게 말할 때가 같을까요?"라고 묻는다.',
            '발표 상황을 읽고 알맞은 생각을 골라 이어요.', LV,
            [
              MATCH('발표 상황과 발표하는 까닭을 이어 보세요.', '발표하는 까닭', [{ id: 'name', label: '반 친구들에게 내 이름을 말해요' }, { id: 'game', label: '좋아하는 놀이를 소개해요' }], [C('me', '나를 알려 주려고'), C('play', '재미있는 놀이를 알려 주려고'), C('praise', '상을 받으려고')], { name: 'me', game: 'play' }, 0.15),
              PICK('발표하기 전에 먼저 생각할 것을 모두 골라 보세요.', '먼저 생각해요', [C('who', '누구에게 말할까?'), C('what', '무엇을 말할까?'), C('snack', '간식은 무엇일까?')], ['who', 'what'], 0.2),
              MATCH('듣는 사람에 알맞은 말하기를 이어 보세요.', '듣는 사람과 말하기', [{ id: 'young', label: '입학한 동생들에게 말해요' }, { id: 'class', label: '같은 반 친구들에게 말해요' }], [C('easy', '쉬운 낱말로 천천히 말해요'), C('norm', '또박또박 보통 속도로 말해요'), C('quick', '아주 빠르게 말해요')], { young: 'easy', class: 'norm' }, 0.25,
                { conclude: '듣는 사람에 따라 쉬운 낱말과 속도를 바꾸면 더 잘 전해져요.' }),
              PICK('더 해 보기: 발표할 때 듣는 친구를 바라보는 까닭으로 알맞은 것을 모두 골라 보세요.', '바라보는 까닭', [C('know', '친구들이 잘 듣는지 알 수 있어요'), C('feel', '친구들에게 내 마음이 전해져요'), C('sleep', '졸려서 눈을 감을 수 있어요')], ['know', 'feel'], 0.3, { extra: true }),
            ]),
        ],
        [
          CH('발표할 때 바른 자세는 어느 것일까요?', ['고개를 숙이고 말해요', '허리를 펴고 친구들을 바라봐요', '한 발로 서서 흔들거려요'], 1, '허리를 펴고 친구들을 바라보며 말하면 잘 들리고 보기 좋아요.', 0.1),
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '발표 전에 생각해요', cards: [C('who', '누구에게 말할까?'), C('what', '무엇을 말할까?'), C('toy', '장난감을 가져올까?')] }, prompt: '동생들에게 발표할 때 먼저 생각할 것을 모두 골라 보세요.', target: { pick: ['who', 'what'] }, difficulty: 0.2 },
          MOOD,
        ]),
      worksheet: {
        title: '바른 자세로 발표해요',
        items: [
          { type: 'check', prompt: '발표할 때 바른 자세에 모두 ✓ 하세요.', options: ['허리를 펴요', '고개를 숙여요', '친구들을 바라봐요', '또박또박 말해요'], answer: '허리를 펴요, 친구들을 바라봐요, 또박또박 말해요' },
          { type: 'choice', prompt: '입학한 동생들에게 발표할 때 알맞은 말하기에 ○ 하세요.', options: ['쉬운 낱말로 천천히', '아주 빠르게'], answer: '쉬운 낱말로 천천히' },
          { type: 'table', prompt: '발표하기 전에 먼저 생각할 것을 써 보세요.', columns: ['생각할 것', '내 대답'], cells: [['누구에게 말할까?', ''], ['무엇을 말할까?', '']] },
          { type: 'draw', prompt: '바른 자세로 발표하는 내 모습을 그려 보세요.' },
        ],
        easy: { note: '발표하는 친구를 떠올려요.', items: [
          { type: 'choice', prompt: '바른 자세에 ○ 하세요.', options: ['허리를 펴고 서요', '고개를 숙여요'], answer: '허리를 펴고 서요' },
          { type: 'choice', prompt: '알맞은 목소리에 ○ 하세요.', options: ['모두 들리게 말해요', '혼잣말처럼 말해요'], answer: '모두 들리게 말해요' },
          { type: 'short', prompt: '발표하고 싶은 것을 한 가지 써 보세요.' },
          { type: 'draw', prompt: '발표하는 내 모습을 그려 보세요.' },
        ] },
      },
      differentiation: {
        easy: '자세 가르기는 카드 넷으로 시작하고 맞게 놓으면 초록 테두리가 생겨요.',
        base: '카드를 모두 놓은 뒤 확인해요.',
        challenge: '목소리 가르기와 발표를 마친 뒤 행동 고르기(더 해 보기)까지 풀어요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 발표를 부끄러워해 고개를 숙이고 작게 말한다 → 못해도 괜찮다고 말해 주고 짝에게 먼저 연습하게 한다. ② 듣는 사람을 생각하지 않고 말한다 → 누구에게 말할지 먼저 묻는다. ③ 바른 자세를 한 가지로만 정해 놓고 틀리면 부끄러워한다 → 자세는 모두가 잘 듣고 볼 수 있게 하기 위한 것이라고 말한다. 실제 발표는 다음 차시에 한다.',
    }),

    // ───────────────────────── 5. 말하기 수행과 상호작용 ─────────────────────────
    L(5, {
      title: '내 소개 순서대로 문장 놓고 짝에게 연습해 말하기',
      objective: '자기소개 문장을 순서대로 놓아 보고, 짝에게 바른 자세와 알맞은 목소리로 소개하며 서로 반응해 줄 수 있다.',
      standards: SPEAK,
      illustration: ART('two paper children practicing a short self introduction to each other, one speaking and the other smiling and nodding', '안녕하세요.'),
      stages: ST(
        { teacher: '"처음 만나는 친구에게 소개할 때 어떤 말부터 해야 할까요?" 교사가 "안녕하세요. 내 이름은 하준이에요."로 시작하는 짧은 소개를 들려준다. 시연 단추로 문장 카드가 차례대로 놓이는 모습을 보여 준다. "소개에는 말할 차례가 있어요. 인사, 이름, 좋아하는 것, 끝인사 순서로 해 봐요."', student: '내 소개를 차례대로 말해 봐요.', demo: { tool: 'story', options: { mode: 'order', shuffle: false, slots: ['첫째', '둘째', '셋째'], cards: [{ id: 'hi', text: '안녕하세요.' }, { id: 'name', text: '내 이름은 하준이에요.' }, { id: 'bye', text: '들어 주셔서 고맙습니다.' }] }, sequence: [{ order: ['hi', 'name', 'bye'] }] } },
        '"오늘 짝에게 소개해 보니 어땠나요? 짝이 어떻게 반응해 주었나요?" 두세 명이 말한다. 출구 1번에서 끝인사를 첫째로 놓은 학생에게는 처음 만났을 때 먼저 하는 말이 무엇인지 떠올리게 한다.',
        [
          A('a1', '활동 1. 소개하는 문장 순서대로 놓기', 13, 'story',
            '"먼저 하는 말, 가운데 하는 말, 끝에 하는 말은 무엇일까요?" 문장을 소리 내어 읽고 순서를 정하게 한다. 이름 소개를 인사보다 먼저 놓는 학생에게는 "친구를 처음 만나면 먼저 무슨 말을 하나요?"라고 묻는다.',
            '소개하는 문장 카드를 말하는 차례대로 놓아요.', LV,
            [
              ORDER('내 소개 문장을 말하는 차례대로 놓아 보세요.', [C('hi', '안녕하세요.'), C('name', '내 이름은 민지예요.'), C('bye', '들어 주셔서 고맙습니다.')], ['hi', 'name', 'bye'], 0.1),
              ORDER('좋아하는 것을 소개하는 문장을 말하는 차례대로 놓아 보세요.', [C('hi', '안녕하세요.'), C('name', '내 이름은 준호예요.'), C('like', '나는 공놀이를 좋아해요.'), C('bye', '들어 주셔서 고맙습니다.')], ['hi', 'name', 'like', 'bye'], 0.25,
                { conclude: '소개는 인사, 이름, 좋아하는 것, 끝인사 차례로 하면 듣기 쉬워요.' }),
              ORDER('우리 집을 소개하는 문장을 말하는 차례대로 놓아 보세요.', [C('hi', '안녕하세요.'), C('who', '우리 집에는 곰 인형이 있어요.'), C('why', '곰 인형은 내 친구예요.'), C('bye', '들어 주셔서 고맙습니다.')], ['hi', 'who', 'why', 'bye'], 0.3),
              ORDER('더 해 보기: 학교에서 만든 것을 소개하는 문장을 말하는 차례대로 놓아 보세요.', [C('hi', '안녕하세요.'), C('what', '내가 만든 것은 종이 꽃이에요.'), C('how', '색종이를 접어서 만들었어요.'), C('bye', '들어 주셔서 고맙습니다.')], ['hi', 'what', 'how', 'bye'], 0.3, { extra: true }),
              { prompt: '짝에게 인사와 이름만 먼저 소개해 보고, 짝이 잘 들었는지 물어보세요.', free: true, talk: true },
            ]),
          A('a2', '활동 2. 발표할 때 이럴 땐 어떻게 할까', 13, 'emotion',
            '"발표하다가 이런 일이 생기면 어떻게 할까요? 두 가지 가운데 하나를 골라 봐요." 고른 결과를 함께 읽고 그때 마음이 어떨지 말하게 한다. 말문이 막혀 포기하는 길을 고른 학생도 틀렸다고 하지 않고 다시 생각하게 한다.',
            '이야기 속 친구가 되어 알맞게 행동하는 길을 골라요.', LV,
            [
              BR('발표하다가 할 말이 갑자기 생각나지 않아요. 어떻게 하면 좋을까요?', '나', '친구들 앞에서 발표하다가 다음에 할 말이 갑자기 생각나지 않아요.', [{ id: 'breath', text: '숨을 한 번 쉬고 카드를 보며 다시 말해요', result: '카드를 보고 이어서 말할 수 있어요', mood: '편안함' }, { id: 'run', text: '말없이 자리로 돌아가요', result: '발표를 끝내지 못해 마음이 불편해요', mood: '속상함', why: '말없이 돌아가면 발표를 끝낼 수 있을까요?' }, { id: 'giggle', text: '웃으며 얼버무려요', result: '친구들이 무슨 말인지 몰라요', mood: '걱정', why: '얼버무리면 친구들이 내 말을 알 수 있을까요?' }], 'breath', 0.1),
              BR('친구가 발표하는데 내가 아는 말이 나왔어요. 어떻게 하면 좋을까요?', '나', '친구가 발표하는 중에 내가 아는 내용이 나왔어요.', [{ id: 'wait', text: '끝까지 듣고 손을 들어 이야기해요', result: '친구가 발표를 마치고 내 이야기도 들어 줘요', mood: '고마움' }, { id: 'cut', text: '바로 큰 소리로 끼어들어요', result: '발표하던 친구가 하던 말을 잊어버려요', mood: '속상함', why: '말이 끊긴 친구의 마음은 어떨까요?' }], 'wait', 0.15),
              BR('짝이 내 소개를 듣고 있어요. 어떻게 말하면 좋을까요?', '나', '짝에게 소개를 하는데 짝이 고개를 갸웃거려요.', [{ id: 'again', text: '"다시 한번 천천히 말할게." 하고 말해요', result: '짝이 이번에는 잘 알아들어요', mood: '기쁨' }, { id: 'same', text: '그냥 같은 속도로 계속 말해요', result: '짝이 끝내 알아듣지 못해요', mood: '속상함', why: '짝이 고개를 갸웃거리는 까닭을 생각해 봐요.' }, { id: 'stop', text: '말을 그만두어요', result: '짝이 내 소개를 듣지 못해요', mood: '걱정', why: '말을 그만두면 소개가 전해질까요?' }], 'again', 0.2),
            ]),
        ],
        [
          { type: 'tool', tool: 'story', options: { mode: 'order', slots: ['첫째', '둘째', '셋째'], cards: [C('hi', '안녕하세요.'), C('name', '내 이름은 서아예요.'), C('bye', '들어 주셔서 고맙습니다.')] }, prompt: '소개하는 문장을 말하는 차례대로 놓아 보세요. 이름이 바뀌었어요.', target: { order: ['hi', 'name', 'bye'] }, difficulty: 0.15 },
          CH('발표 중 할 말이 생각나지 않을 때 알맞은 행동은 어느 것일까요?', ['숨을 한 번 쉬고 다시 말해요', '말없이 자리로 가요', '웃으며 얼버무려요'], 0, '숨을 쉬고 카드를 보며 다시 말하면 발표를 끝낼 수 있어요.', 0.2),
          MOOD,
        ]),
      worksheet: {
        title: '내 소개 말하기',
        items: [
          { type: 'table', prompt: '내 소개 문장을 말하는 차례대로 번호를 쓰세요.', columns: ['문장', '번호'], cells: [['들어 주셔서 고맙습니다.', ''], ['안녕하세요.', ''], ['내 이름은 지우예요.', '']] },
          { type: 'choice', prompt: '소개를 시작할 때 먼저 하는 말에 ○ 하세요.', options: ['안녕하세요.', '들어 주셔서 고맙습니다.'], answer: '안녕하세요.' },
          { type: 'short', prompt: '내가 소개하고 싶은 것 한 가지를 써 보세요.' },
          { type: 'draw', prompt: '짝에게 소개하는 내 모습을 그려 보세요.' },
        ],
        easy: { note: '인사부터 말해요.', items: [
          { type: 'choice', prompt: '처음에 하는 말에 ○ 하세요.', options: ['안녕하세요.', '고맙습니다.'], answer: '안녕하세요.' },
          { type: 'choice', prompt: '끝에 하는 말에 ○ 하세요.', options: ['안녕하세요.', '들어 주셔서 고맙습니다.'], answer: '들어 주셔서 고맙습니다.' },
          { type: 'short', prompt: '내 이름을 써 보세요.' },
          { type: 'draw', prompt: '소개하는 내 모습을 그려 보세요.' },
        ] },
      },
      differentiation: {
        easy: '문장 놓기는 셋으로 시작하고 맞게 놓으면 초록 테두리가 생겨요. 이야기 고르기는 틀린 길을 고르면 까닭을 묻고 돌아와요.',
        base: '카드를 모두 놓은 뒤 확인하고, 이야기 결과를 읽고 다시 생각해요.',
        challenge: '문장이 넷인 소개가 나오고, 더 해 보기(만든 것 소개)까지 풀어요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 이름부터 말하고 인사를 빠뜨린다 → 처음 만났을 때 인사부터 한다고 말한다. ② 짝에게 말할 때 짝을 바라보지 않고 종이만 본다 → 짝의 눈을 한 번씩 보라고 알려 준다. ③ 짝이 반응해 주지 않는다 → 듣는 사람이 고개를 끄덕이거나 \'네\'라고 말해도 된다고 알려 준다. 짝 연습은 짝이 한 번씩 번갈아 말하게 한다.',
    }),

    // ───────────────────────── 6. 듣기 단서와 정보 조직 ─────────────────────────
    L(6, {
      title: '친구 발표를 듣고 들은 내용 칸에 나누기',
      objective: '친구의 짧은 발표를 듣고 이름·좋아하는 것 같은 들은 내용을 알맞은 칸에 나누고, 잘 듣는 태도를 고를 수 있다.',
      standards: SPEAK,
      illustration: ART('a paper child with big ears listening to a friend who is speaking, small cards labeled name and favorite thing flying into two boxes', '이름  좋아하는 것'),
      stages: ST(
        { teacher: '"지우가 말했어요. 내 이름은 지우예요. 나는 책을 좋아해요. 이 말에서 알 수 있는 것은 무엇일까요?" 교사가 천천히 두 번 읽어 주며 이름과 좋아하는 것을 손가락으로 센다. 시연 단추로 \'지우\'가 이름 칸에 들어가는 모습을 보여 준다. "들을 때는 어떤 내용이 나오는지 칸을 나누어 기억하면 쉬워요."', student: '친구가 말한 것을 듣고, 어떤 내용인지 칸에 나누어 봐요.', demo: { tool: 'mindmap', options: { mode: 'match', topic: '들은 내용', shuffle: false, slots: [{ id: 'name', label: '이름' }], cards: [{ id: 'jiu', text: '지우' }, { id: 'book', text: '책' }] }, sequence: [{ match: { name: 'jiu' } }] } },
        '"오늘 친구 이야기를 들으며 기억한 것을 한 가지 말해 볼까요?" 두세 명이 짝의 이름과 좋아하는 것을 말해 본다. 출구 1번에서 이름과 좋아하는 것을 바꾼 학생에게는 교사가 다시 한 번 읽어 주며 이름이 어느 문장에 나왔는지 짚게 한다.',
        [
          A('a1', '활동 1. 들은 내용 알맞은 칸에 이어 보기', 13, 'mindmap',
            '"먼저 내용을 끝까지 들어요. 그 뒤 카드를 칸에 이어 봐요." 문항 글은 교사가 두 번 읽어 준다. 이름과 좋아하는 것을 바꾸어 이은 학생에게는 "이름은 나를 부르는 말이에요. 어느 문장에서 나왔지요?"라고 묻는다.',
            '친구가 말한 내용을 듣고 알맞은 칸에 카드를 이어요.', LV,
            [
              MATCH('지우가 말했어요. \'내 이름은 지우예요. 나는 책을 좋아해요.\' 들은 내용을 칸에 이어 보세요.', '지우의 발표', [{ id: 'name', label: '이름' }, { id: 'like', label: '좋아하는 것' }], [C('jiu', '지우'), C('book', '책'), C('minji', '민지')], { name: 'jiu', like: 'book' }, 0.1),
              MATCH('하준이가 말했어요. \'나는 하준이에요. 우리 집에는 강아지가 있어요.\' 들은 내용을 칸에 이어 보세요.', '하준이의 발표', [{ id: 'name', label: '이름' }, { id: 'home', label: '집에 있는 것' }], [C('hajun', '하준'), C('dog', '강아지'), C('cat', '고양이')], { name: 'hajun', home: 'dog' }, 0.2),
              MATCH('서아가 말했어요. \'나는 서아예요. 축구를 좋아해요. 동생이 한 명 있어요.\' 들은 내용을 칸에 이어 보세요.', '서아의 발표', [{ id: 'name', label: '이름' }, { id: 'like', label: '좋아하는 것' }, { id: 'family', label: '가족' }], [C('seoa', '서아'), C('soccer', '축구'), C('brother', '동생 한 명'), C('sister', '언니 한 명')], { name: 'seoa', like: 'soccer', family: 'brother' }, 0.3,
                { conclude: '이름, 좋아하는 것, 가족처럼 칸을 나누어 들으면 내용을 기억하기 쉬워요.' }),
              PICK('더 해 보기: 준호가 \'나는 준호예요. 그림 그리기를 좋아해요.\'라고 말했어요. 들은 내용을 모두 골라 보세요.', '준호의 발표', [C('junho', '이름은 준호'), C('draw', '그림 그리기를 좋아해요'), C('dance', '춤추기를 좋아해요')], ['junho', 'draw'], 0.3, { extra: true }),
            ]),
          A('a2', '활동 2. 잘 듣는 모습과 알 수 있는 것 가르기', 13, 'mindmap',
            '"잘 들으려면 눈, 귀, 입, 손은 어떻게 하면 좋을까요?" 몸을 가리키며 하나씩 말하게 한다. 발표를 듣는 중에 옆 친구와 이야기하는 모습을 잘 듣는다고 고르는 학생에게는 "발표하는 친구의 마음은 어떨까요?"라고 묻는다.',
            '듣는 모습과 들은 내용을 카드로 나누어요.', LV,
            [
              SORT('발표를 들을 때 잘 듣는 모습과 잘 듣지 않는 모습으로 나누어 보세요.', '듣는 모습', [{ id: 'good', label: '잘 듣는 모습' }, { id: 'bad', label: '잘 듣지 않는 모습' }], [C('look', '말하는 친구를 바라봐요'), C('quiet', '끝까지 조용히 들어요'), C('talk', '옆 친구와 떠들어요'), C('book', '다른 책을 보고 있어요'), C('nod', '고개를 끄덕여요')], { good: ['look', 'quiet', 'nod'], bad: ['talk', 'book'] }, 0.15,
                { levels: { easy: { prompt: '카드 넷을 잘 듣는 모습과 잘 듣지 않는 모습으로 나누어 보세요.', toolOptions: { cards: [C('look', '말하는 친구를 바라봐요'), C('quiet', '끝까지 조용히 들어요'), C('talk', '옆 친구와 떠들어요'), C('book', '다른 책을 보고 있어요')] }, target: { sort: { good: ['look', 'quiet'], bad: ['talk', 'book'] } } } } }),
              SORT('민지가 \'내 이름은 민지예요. 나는 강아지를 좋아해요.\'라고 말했어요. 알 수 있는 것과 알 수 없는 것으로 나누어 보세요.', '민지의 발표', [{ id: 'know', label: '알 수 있어요' }, { id: 'no', label: '알 수 없어요' }], [C('name', '민지의 이름'), C('pet', '좋아하는 동물'), C('age', '민지의 나이'), C('lunch', '오늘 점심 메뉴')], { know: ['name', 'pet'], no: ['age', 'lunch'] }, 0.25,
                { conclude: '들은 말에 나오지 않은 것은 알 수 없다고 말하는 것이 바른 듣기예요.' }),
              PICK('발표를 듣고 내용을 기억하려면 어떻게 하면 좋을까요? 알맞은 것을 모두 골라 보세요.', '기억하는 방법', [C('count', '손가락으로 내용을 세어요'), C('sleep', '엎드려 쉬어요'), C('ask', '모르는 것은 끝난 뒤 물어봐요')], ['count', 'ask'], 0.3),
              PICK('더 해 보기: 발표가 끝난 뒤 친구에게 물어볼 수 있는 것을 모두 골라 보세요.', '물어볼 수 있어요', [C('why', '그것을 왜 좋아해요?'), C('rude', '왜 그렇게 못해요?'), C('how', '어떻게 만들었어요?')], ['why', 'how'], 0.3, { extra: true }),
            ]),
        ],
        [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '서윤이의 발표', slots: [{ id: 'name', label: '이름' }, { id: 'like', label: '좋아하는 것' }], cards: [C('seoyun', '서윤'), C('milk', '우유'), C('junho', '준호')] }, prompt: '서윤이가 \'나는 서윤이에요. 우유를 좋아해요.\'라고 말했어요. 들은 내용을 칸에 이어 보세요.', target: { match: { name: 'seoyun', like: 'milk' } }, difficulty: 0.2 },
          CH('발표를 들을 때 잘 듣는 모습은 어느 것일까요?', ['말하는 친구를 바라봐요', '옆 친구와 떠들어요', '다른 책을 봐요'], 0, '말하는 친구를 바라보고 끝까지 들어야 내용을 알 수 있어요.', 0.1),
          MOOD,
        ]),
      worksheet: {
        title: '친구 발표 듣기',
        items: [
          { type: 'table', prompt: '지우가 \'내 이름은 지우예요. 나는 책을 좋아해요.\'라고 말했어요. 들은 내용을 쓰세요.', columns: ['칸', '들은 내용'], cells: [['이름', ''], ['좋아하는 것', '']] },
          { type: 'check', prompt: '잘 듣는 모습에 모두 ✓ 하세요.', options: ['바라봐요', '떠들어요', '끝까지 들어요', '다른 책을 봐요'], answer: '바라봐요, 끝까지 들어요' },
          { type: 'choice', prompt: '\'민지의 나이\'는 \'내 이름은 민지예요. 강아지를 좋아해요.\'에서 알 수 있나요?', options: ['알 수 있어요', '알 수 없어요'], answer: '알 수 없어요' },
          { type: 'short', prompt: '짝이 말한 이름과 좋아하는 것을 써 보세요.' },
        ],
        easy: { note: '이름과 좋아하는 것을 따로 들어요.', items: [
          { type: 'choice', prompt: '\'나는 서아예요.\'에서 이름에 ○ 하세요.', options: ['서아', '축구'], answer: '서아' },
          { type: 'choice', prompt: '잘 듣는 모습에 ○ 하세요.', options: ['바라봐요', '떠들어요'], answer: '바라봐요' },
          { type: 'short', prompt: '짝의 이름을 써 보세요.' },
          { type: 'draw', prompt: '잘 듣는 내 모습을 그려 보세요.' },
        ] },
      },
      differentiation: {
        easy: '이어 보기는 칸 둘부터 시작하고 맞게 이으면 초록 테두리가 생겨요. 문항 글은 교사가 두 번 읽어 줘요.',
        base: '카드를 모두 이은 뒤 확인해요.',
        challenge: '칸이 셋인 발표가 나오고, 더 해 보기(준호의 발표, 물어볼 말 고르기)까지 풀어요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 문항 글을 읽지 못해 듣지 않고 카드만 본다 → 교사가 두 번 읽어 주고 손가락으로 센다. ② 이름과 좋아하는 것을 혼동한다 → 이름은 나를 부르는 말임을 다시 말한다. ③ 들은 말에 없는 것도 아는 척 말한다 → 말에 나온 것만 안다고 말하게 한다. 학생 이름은 가명 한두 글자만 쓴 것이다.',
    }),

    // ───────────────────────── 7. 참여 태도와 조정 성찰 ─────────────────────────
    L(7, {
      title: '발표 뒤 칭찬하는 말 고르고 내 발표 모습 돌아보기',
      objective: '친구의 발표를 듣고 마음이 따뜻해지는 말을 고르고, 오늘 내 발표와 듣기 모습을 솔직하게 돌아볼 수 있다.',
      standards: SPEAK,
      illustration: ART('a paper child receiving small heart-shaped cards from classmates after a short talk, with a smiling teacher in the back', '잘했어요'),
      stages: ST(
        { teacher: '"친구 발표를 듣고 해 주고 싶은 말이 있나요? 어떤 말을 들으면 기분이 좋아질까요?" 교사가 칭찬 말 한 개와 속상한 말 한 개를 들려주고 느낌을 묻는다. 시연 단추로 칭찬하는 말 카드가 바구니에 들어가는 모습을 보여 준다. "친구 마음에 닿는 말을 골라 봐요."', student: '발표를 마친 친구에게 어떤 말을 해 주면 좋을까요?', demo: { tool: 'mindmap', options: { mode: 'pick', topic: '기분 좋은 말', shuffle: false, cards: [{ id: 'good', text: '목소리가 잘 들렸어' }, { id: 'bad', text: '재미없었어' }] }, sequence: [{ pick: ['good'] }] } },
        '"오늘 내가 친구에게 해 준 말 가운데 가장 마음에 드는 말은 무엇이었나요?" 두세 명이 말한다. 마지막 자기 평가에서 \'아직\'을 고른 학생에게는 한 가지 쉬운 목표를 정해 격려한다. 출구 1번에서 \'재미없었어\'를 고른 학생에게는 같은 말을 내가 들었을 때의 마음을 떠올리게 한다.',
        [
          A('a1', '활동 1. 마음에 닿는 칭찬하는 말 고르기', 8, 'mindmap',
            '"이 말을 들으면 발표한 친구의 마음이 어떨까요?" 카드를 소리 내어 읽고 말투를 바꿔 들려준다. 솔직하다며 \'재미없었어\'를 고르는 학생에게는 "내가 발표했는데 이 말을 들으면 어떨까요?"라고 묻는다.',
            '발표를 마친 친구에게 해 주면 좋은 말만 골라요.', LV,
            [
              PICK('발표를 마친 친구에게 해 주면 좋은 말을 모두 골라 보세요.', '기분 좋은 말', [C('voice', '목소리가 또렷해서 잘 들렸어'), C('stand', '허리를 펴고 서 있어서 멋졌어'), C('bore', '너무 재미없었어')], ['voice', 'stand'], 0.1),
              SORT('친구의 발표를 들은 뒤 하는 말을 마음에 닿는 말과 속상하게 하는 말로 나누어 보세요.', '발표 뒤 말', [{ id: 'good', label: '마음에 닿는 말' }, { id: 'bad', label: '속상하게 하는 말' }], [C('nice', '이야기가 재미있었어'), C('laugh', '하하, 이상하게 말했다'), C('learn', '새로운 것을 알게 되었어'), C('boring', '듣기 지루했어')], { good: ['nice', 'learn'], bad: ['laugh', 'boring'] }, 0.2,
                { conclude: '발표한 친구의 마음에 닿는 말은 구체적으로 좋았던 점을 말해 주는 말이에요.' }),
              PICK('더 해 보기: 발표한 친구에게 질문할 때 알맞은 말을 모두 골라 보세요.', '알맞은 질문', [C('how', '그것은 어떻게 만들었어요?'), C('why', '왜 그것을 좋아해요?'), C('rude', '그런 걸 왜 좋아해?')], ['how', 'why'], 0.25, { extra: true }),
            ]),
          A('a2', '활동 2. 발표 뒤 어떻게 할까', 9, 'emotion',
            '"이런 때 어떻게 하면 좋을지 두 가지 가운데 하나를 골라 봐요." 고른 길의 결과를 읽고 마음을 말하게 한다. 친구의 실수에 웃는 길을 고른 학생도 결과를 읽고 스스로 다시 선택해 보게 한다.',
            '이야기 속 친구가 되어 알맞게 행동하는 길을 골라요.', LV,
            [
              BR('친구가 발표하다가 말을 더듬었어요. 어떻게 하면 좋을까요?', '나', '친구가 발표하다가 낱말을 더듬으며 말했어요.', [{ id: 'wait', text: '조용히 기다려 주어요', result: '친구가 숨을 고르고 끝까지 말해요', mood: '편안함' }, { id: 'laugh', text: '크게 웃어요', result: '친구가 얼굴이 빨개져서 말을 멈춰요', mood: '속상함', why: '웃음소리를 들은 친구의 마음은 어떨까요?' }], 'wait', 0.1),
              BR('내 발표가 끝났는데 친구가 잘했다고 말해 줬어요. 어떻게 하면 좋을까요?', '나', '내 발표가 끝난 뒤 친구가 환하게 웃으며 잘했다고 말해 줬어요.', [{ id: 'thanks', text: '"고마워." 하고 웃으며 말해요', result: '친구와 서로 기분이 좋아져요', mood: '고마움' }, { id: 'ignore', text: '아무 말 없이 자리로 가요', result: '친구는 내가 좋아하지 않는다고 생각해요', mood: '속상함', why: '말없이 돌아가면 친구는 내 마음을 알 수 있을까요?' }, { id: 'brag', text: '"당연하지!" 하고 뽐내요', result: '다른 친구들이 눈살을 찌푸려요', mood: '걱정', why: '뽐내는 말을 들은 친구들의 마음은 어떨까요?' }], 'thanks', 0.2),
              BR('다음에는 발표를 더 잘하고 싶어요. 어떻게 하면 좋을까요?', '나', '오늘 발표에서 목소리가 작아서 아쉬웠어요.', [{ id: 'practice', text: '집에서 거울 보며 크게 연습해요', result: '다음 발표에서 목소리가 잘 들려요', mood: '뿌듯함' }, { id: 'quit', text: '다시는 발표하지 않아요', result: '발표 실력이 나아지지 않아요', mood: '속상함', why: '발표하지 않으면 연습할 기회가 있을까요?' }], 'practice', 0.25),
            ]),
          A('a3', '활동 3. 내 발표와 듣기 모습 돌아보기', 9, 'emotion',
            '"오늘 내 발표와 듣기 모습을 떠올려 봐요. 정답은 없어요." 눈금마다 이유를 한 가지씩 짝에게 말하게 한다. 모두 \'잘해요\'만 고른 학생에게는 "가장 어려웠던 순간은 언제였나요?"라고 묻는다.',
            '오늘 내 모습에 알맞은 눈금을 골라요.', LV,
            [
              { prompt: '오늘 발표할 때 바른 자세를 얼마나 지켰나요? 솔직하게 골라요.', toolOptions: SELF('친구들 앞에서 짧게 발표했어요.', '뿌듯함', '바른 자세를 얼마나 지켰나요?'), target: { level: 'any' }, difficulty: 0.05, hints: SELF_HINTS },
              { prompt: '오늘 친구 발표를 얼마나 끝까지 잘 들었나요? 솔직하게 골라요.', toolOptions: SELF('친구들의 발표를 들었어요.', '편안함', '친구 발표를 얼마나 끝까지 들었나요?'), target: { level: 'any' }, difficulty: 0.05, hints: SELF_HINTS },
              { prompt: '친구에게 마음에 닿는 말을 해 준 마음은 얼마나 되나요? 솔직하게 골라요.', toolOptions: SELF('발표를 마친 친구에게 말을 건넸어요.', '기쁨', '마음에 닿는 말을 얼마나 해 주었나요?'), target: { level: 'any' }, difficulty: 0.05, hints: SELF_HINTS },
            ]),
        ],
        [
          CH('발표를 마친 친구에게 해 주면 좋은 말은 어느 것일까요?', ['목소리가 또렷해서 잘 들렸어', '너무 재미없었어', '하하, 이상해'], 0, '좋았던 점을 구체적으로 말해 주면 친구의 마음에 닿아요.', 0.1),
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '마음에 닿는 말', cards: [C('good1', '이야기가 재미있었어'), C('bad1', '시시했어'), C('good2', '그림이 예뻤어')] }, prompt: '발표를 마친 친구에게 해 주면 좋은 말을 모두 골라 보세요. 친구가 그림을 보여 주었어요.', target: { pick: ['good1', 'good2'] }, difficulty: 0.2 },
          MOOD,
        ]),
      worksheet: {
        title: '마음에 닿는 말',
        items: [
          { type: 'check', prompt: '발표를 마친 친구에게 해 주면 좋은 말에 모두 ✓ 하세요.', options: ['목소리가 잘 들렸어', '너무 재미없었어', '새로운 것을 알게 되었어'], answer: '목소리가 잘 들렸어, 새로운 것을 알게 되었어' },
          { type: 'choice', prompt: '친구가 말을 더듬었을 때 알맞은 행동에 ○ 하세요.', options: ['조용히 기다려 줘요', '크게 웃어요'], answer: '조용히 기다려 줘요' },
          { type: 'table', prompt: '오늘 내 모습에 ○ 하세요.', columns: ['내 모습', '아직', '조금', '잘해요'], cells: [['바른 자세로 발표했어요', '', '', ''], ['친구 발표를 끝까지 들었어요', '', '', '']] },
          { type: 'short', prompt: '친구에게 해 주고 싶은 말 한 문장을 써 보세요.' },
        ],
        easy: { note: '친구 마음을 떠올리며 골라요.', items: [
          { type: 'choice', prompt: '기분 좋은 말에 ○ 하세요.', options: ['목소리가 잘 들렸어', '재미없었어'], answer: '목소리가 잘 들렸어' },
          { type: 'choice', prompt: '친구가 실수했을 때 알맞은 행동에 ○ 하세요.', options: ['기다려 줘요', '웃어요'], answer: '기다려 줘요' },
          { type: 'short', prompt: '짝에게 해 주고 싶은 말을 써 보세요.' },
          { type: 'draw', prompt: '친구에게 칭찬 말을 건네는 내 모습을 그려 보세요.' },
        ] },
      },
      differentiation: {
        easy: '말 고르기는 카드 둘로 시작하고, 이야기 고르기는 틀린 길을 고르면 까닭을 묻고 돌아와요.',
        base: '카드를 모두 놓은 뒤 확인하고, 이야기 결과를 읽고 다시 생각해요.',
        challenge: '질문할 때 알맞은 말(더 해 보기)까지 풀고, 자기 평가 이유를 짝에게 말해요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 솔직하게 말하는 것과 상처 주는 말을 구별하지 못한다 → 좋았던 점을 먼저 말하고 아쉬운 점은 부드럽게 말하게 한다. ② 칭찬 말이 \'잘했어\' 하나뿐이다 → 구체적으로 어떤 점이 좋았는지 말하게 한다. ③ 자기 평가에서 눈금을 모두 같은 곳에 둔다 → 오늘 장면 하나를 떠올려 고르게 한다. 자기 평가는 성적에 반영하지 않는다.',
    }),

    // ───────────────────────── 8. 문장 쓰기 ─────────────────────────
    L(8, {
      title: '받침 있는 낱말로 짧은 문장 채우고 만들기',
      objective: '받침 있는 낱말을 넣어 짧은 문장의 빈칸을 채우고, 낱말 카드를 차례대로 놓아 문장을 만들 수 있다.',
      standards: WRITE,
      illustration: ART('a paper child arranging word cards on a desk to build a short sentence, a book and a ball sitting beside the cards', '책을 읽어요'),
      stages: ST(
        { teacher: '"낱말이 모이면 문장이 돼요. 문장에서 빈칸에 어떤 낱말이 들어가면 좋을까요?" 칠판에 \'나는 ___을 읽어요.\'를 쓰고 몇 명의 대답을 듣는다. "책을 넣어 소리 내어 읽어 보니 어떤가요? 자연스러우면 알맞은 낱말이에요."', student: '빈칸에 알맞은 낱말을 넣어 문장을 만들어 봐요.', demo: { tool: 'story', options: { mode: 'fill', shuffle: false, slots: [{ id: 's1', label: '나는 ___을 읽어요.' }], cards: [{ id: 'book', text: '책' }, { id: 'ball', text: '공' }] }, sequence: [{ fill: { s1: 'book' } }] } },
        '"오늘 만든 문장 가운데 가장 마음에 드는 문장을 소리 내어 읽어 볼까요?" 두세 명이 일어나 읽는다. 출구 2번에서 \'책를\'을 고른 학생에게는 받침이 있는 낱말 뒤에는 \'을\'을 쓴다는 것을 \'책\' 아래 받침을 짚으며 말해 준다.',
        [
          A('a1', '활동 1. 문장 빈칸에 알맞은 낱말 넣기', 13, 'story',
            '"문장을 소리 내어 읽어 보고, 뜻이 맞는 낱말을 넣어 봐요." 문장마다 빈칸 앞뒤를 함께 읽게 한다. 뜻이 맞지 않는 낱말(공을 읽어요)을 넣은 학생에게는 "공을 읽을 수 있나요?"라고 되묻는다.',
            '빈칸에 알맞은 낱말 카드를 넣어 문장을 완성해요.', LV,
            [
              FILL('문장의 빈칸에 알맞은 낱말 카드를 넣어 보세요.', [{ id: 's1', label: '나는 ___을 읽어요.' }], [C('book', '책'), C('water', '물'), C('ball', '공')], { s1: 'book' }, 0.1),
              FILL('문장 둘의 빈칸에 알맞은 낱말 카드를 넣어 보세요.', [{ id: 's1', label: '목이 마르면 ___을 마셔요.' }, { id: 's2', label: '운동장에서 ___을 차요.' }], [C('book', '책'), C('water', '물'), C('ball', '공'), C('door', '문')], { s1: 'water', s2: 'ball' }, 0.2),
              FILL('문장 셋의 빈칸에 알맞은 낱말 카드를 넣어 보세요. 카드가 하나 더 있어요.', [{ id: 's1', label: '밤하늘에 ___이 떠요.' }, { id: 's2', label: '___이 활짝 열렸어요.' }, { id: 's3', label: '숲에서 ___이 살아요.' }], [C('moon', '달'), C('door', '문'), C('bear', '곰'), C('book', '책')], { s1: 'moon', s2: 'door', s3: 'bear' }, 0.3,
                { conclude: '문장은 낱말의 뜻과 앞뒤 말이 어울려야 읽기 쉬워요.' }),
              FILL('더 해 보기: 문장의 빈칸에 알맞은 낱말 카드를 넣어 보세요.', [{ id: 's1', label: '구운 ___이 고소해요.' }], [C('chestnut', '밤'), C('door', '문'), C('moon', '달')], { s1: 'chestnut' }, 0.25, { extra: true }),
            ]),
          A('a2', '활동 2. 낱말 카드를 놓아 문장 만들기', 13, 'story',
            '"문장은 누가, 무엇을, 어찌하다 순서로 말해 보면 만들기 쉬워요." 문장 뜻을 먼저 말하게 한 뒤 카드를 놓게 한다. 카드를 거꾸로 놓은 학생에게는 "소리 내어 읽어 볼까요? 자연스럽게 들리나요?"라고 묻는다.',
            '낱말 카드를 말하는 차례대로 놓아 문장을 만들어요.', LV,
            [
              ORDER('내가 책을 읽는 문장이 되도록 낱말 카드를 차례대로 놓아 보세요.', [C('na', '나는'), C('book', '책을'), C('read', '읽어요.')], ['na', 'book', 'read'], 0.1),
              ORDER('곰이 숲에서 사는 문장이 되도록 낱말 카드를 차례대로 놓아 보세요.', [C('bear', '곰이'), C('forest', '숲에서'), C('live', '살아요.')], ['bear', 'forest', 'live'], 0.2),
              ORDER('달이 밤에 뜨는 문장이 되도록 낱말 카드를 차례대로 놓아 보세요.', [C('moon', '달이'), C('night', '밤에'), C('rise', '떠요.')], ['moon', 'night', 'rise'], 0.25,
                { conclude: '문장은 누가, 어디에서, 어찌하다 차례로 놓으면 읽기 쉬워요.' }),
              ORDER('친구가 공을 차는 문장이 되도록 낱말 카드를 차례대로 놓아 보세요.', [C('friend', '친구가'), C('ball', '공을'), C('kick', '차요.')], ['friend', 'ball', 'kick'], 0.3),
              ORDER('더 해 보기: 아기가 손을 흔드는 문장이 되도록 낱말 카드를 차례대로 놓아 보세요.', [C('baby', '아기가'), C('hand', '손을'), C('wave', '흔들어요.')], ['baby', 'hand', 'wave'], 0.3, { extra: true }),
            ]),
        ],
        [
          { type: 'tool', tool: 'story', options: { mode: 'fill', slots: [{ id: 's1', label: '친구와 ___을 던져요.' }], cards: [C('ball', '공'), C('moon', '달'), C('book', '책')] }, prompt: '문장의 빈칸에 알맞은 낱말 카드를 넣어 보세요.', target: { fill: { s1: 'ball' } }, difficulty: 0.2 },
          CH('받침이 있는 낱말 \'책\' 뒤에 알맞은 말은 어느 것일까요? \'책___ 읽어요.\'', ['을', '를'], 0, '받침이 있는 낱말 뒤에는 \'을\'을 써요. 받침이 없으면 \'를\'을 써요.', 0.2),
          MOOD,
        ]),
      worksheet: {
        title: '낱말로 문장 만들기',
        items: [
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요. (책, 물, 공)', text: '나는 ___을 읽어요.     목이 마르면 ___을 마셔요.', answer: '책, 물' },
          { type: 'table', prompt: '낱말 카드를 말하는 차례대로 번호를 쓰세요.', columns: ['낱말', '번호'], cells: [['읽어요.', ''], ['나는', ''], ['책을', '']] },
          { type: 'choice', prompt: '\'밤하늘에 ___이 떠요.\'에 알맞은 낱말에 ○ 하세요.', options: ['달', '문', '곰'], answer: '달' },
          { type: 'short', prompt: '받침이 있는 낱말을 넣어 문장 하나를 만들어 써 보세요.' },
        ],
        easy: { note: '문장을 소리 내어 읽어 보고 써요.', items: [
          { type: 'blank', prompt: '문장을 따라 쓰세요.', text: '나는 책을 읽어요. → ______________', answer: '나는 책을 읽어요.' },
          { type: 'choice', prompt: '\'운동장에서 ___을 차요.\'에 알맞은 낱말에 ○ 하세요.', options: ['공', '책'], answer: '공' },
          { type: 'choice', prompt: '\'곰이 숲에서 ___.\'에 알맞은 말에 ○ 하세요.', options: ['살아요', '읽어요'], answer: '살아요' },
          { type: 'draw', prompt: '내가 만든 문장을 그림으로 그려 보세요.' },
        ] },
      },
      differentiation: {
        easy: '빈칸 채우기는 문장 하나로 시작하고 맞게 놓으면 초록 테두리가 생겨요. 차례 놓기는 카드가 맞는 자리에 들어가면 알려 줘요.',
        base: '카드를 모두 놓은 뒤 확인해요.',
        challenge: '카드가 하나 더 있는 문장이 나오고, 더 해 보기(\'구운 밤\', \'아기가 손을\')까지 풀어요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 낱말만 보고 뜻이 맞지 않는 낱말을 넣는다 → 문장 전체를 소리 내어 읽게 한다. ② 받침 있는 낱말 뒤에 를을 쓴다(책를) → 받침이 있으면 을, 없으면 를이라고 소리 내어 비교한다. 이 차시에서 을·를·이·가는 낱말 카드의 모양으로 익히는 것이지 문법 용어를 가르치는 것은 아니다. ③ 낱말 카드를 거꾸로 놓는다 → 문장을 소리 내어 읽게 한다.',
    }),

    // ───────────────────────── 9. 고쳐 쓰기 ─────────────────────────
    L(9, {
      title: '받침이 빠지거나 틀린 글자 찾아 고쳐 쓰기',
      objective: '받침이 빠지거나 틀린 글자를 찾아내고, 받침을 알맞게 붙여 바르게 고쳐 쓸 수 있다.',
      standards: WRITE,
      illustration: ART('a paper child with a pencil circling a wrong letter and drawing a small support piece under it to fix it', '꾸 → 꿈'),
      stages: ST(
        { teacher: '"친구가 \'꿈\'을 쓰려고 했는데 \'꾸\'라고 썼어요. 무엇이 빠졌을까요?" 칠판에 두 글자를 나란히 쓰고 차이를 찾게 한다. 시연 단추로 \'꾸\'에 받침 ㅁ을 붙여 \'꿈\'으로 고치는 모습을 보여 준다. "쓰고 나서 소리 내어 읽어 보면 빠진 받침을 알 수 있어요."', student: '틀린 글자를 찾아 바르게 고쳐 봐요.', demo: { tool: 'hangul', options: { consonants: ['ㄲ'], vowels: ['ㅜ'], batchim: ['ㅁ', 'ㅇ'], slotHints: true, start: { cho: 'ㄲ', jung: 'ㅜ' } }, sequence: [{ syllable: '꿈' }] } },
        '"오늘 내가 쓴 글자를 고쳐 보니 어땠나요? 고치는 일은 부끄러운 일일까요?" 한두 명이 말하고, 고치는 것은 더 바르게 쓰는 방법이라고 알려 준다. 출구 1번에서 \'바\'를 고른 학생에게는 \'밤\'과 \'바\' 가운데 소리 끝이 닫히는 쪽이 어느 쪽인지 말해 보게 한다.',
        [
          A('a1', '활동 1. 바르게 쓴 글자 찾기', 12, 'mindmap',
            '"소리 내어 읽어 보고 끝소리가 맞는 글자를 찾아봐요." 카드마다 입 모양으로 확인하게 한다. 받침이 없는 글자를 고르는 학생에게는 "끝소리가 닫히나요, 열려 있나요?"라고 묻는다.',
            '바르게 쓴 글자 카드를 골라요.', LV,
            [
              PICK('\'곰\'을 바르게 쓴 글자 카드를 골라 보세요.', '곰은 어느 것?', [W('gom', '곰'), W('go', '고'), W('gong', '공'), W('gon', '곤')], ['gom'], 0.15),
              PICK('\'문\'을 바르게 쓴 글자 카드를 골라 보세요.', '문은 어느 것?', [W('mun', '문'), W('mu', '무'), W('mul', '물'), W('mon', '몬')], ['mun'], 0.2),
              PICK('\'밤\'을 쓰려는데 받침이 빠진 글자 카드를 골라 보세요.', '받침이 빠졌어요', [W('ba', '바'), W('bam', '밤'), W('bang', '방')], ['ba'], 0.25,
                { conclude: '소리 내어 읽고 끝소리가 닫히는지 확인하면 빠진 받침을 찾을 수 있어요.' }),
              PICK('더 해 보기: \'발\'을 쓰려는데 받침이 틀린 글자 카드를 모두 골라 보세요.', '받침이 틀렸어요', [W('bal', '발'), W('bam', '밤'), W('bang', '방')], ['bam', 'bang'], 0.3, { extra: true }),
            ]),
          A('a2', '활동 2. 틀린 글자 바르게 고쳐 만들기', 14, 'hangul',
            '"친구가 쓴 글자는 받침이 빠졌어요. 소리 내어 읽고 어떤 받침이 필요한지 찾아봐요." 틀의 처음 글자를 가리키며 읽게 한다. 받침을 고르지 않고 확인을 누르는 학생에게는 "소리 끝이 닫히나요?"라고 묻고, 교구가 알려 주는 말을 읽게 한다.',
            '받침이 빠진 글자를 소리 내어 읽고, 받침을 붙여 바르게 고쳐요.', HGL(['ㄲ', 'ㅃ', 'ㅁ', 'ㅅ', 'ㅇ'], ['ㅜ', 'ㅏ', 'ㅣ', 'ㅗ'], ['ㅁ', 'ㅇ', 'ㄹ', 'ㄴ', 'ㅅ']),
            [
              HG('친구가 \'꿈\'을 \'꾸\'로 썼어요. 받침을 붙여 바르게 고쳐 만들어 보세요.', '꿈', 0.15, { toolOptions: { start: { cho: 'ㄲ', jung: 'ㅜ' } } }),
              HG('친구가 \'빵\'을 \'빠\'로 썼어요. 받침을 붙여 바르게 고쳐 만들어 보세요.', '빵', 0.2, { toolOptions: { start: { cho: 'ㅃ', jung: 'ㅏ' } } }),
              HG('친구가 \'물\'을 \'무\'로 썼어요. 받침을 붙여 바르게 고쳐 만들어 보세요.', '물', 0.25, { toolOptions: { start: { cho: 'ㅁ', jung: 'ㅜ' } } }),
              HG('친구가 \'신\'을 \'시\'로 썼어요. 받침을 붙여 바르게 고쳐 만들어 보세요.', '신', 0.3, { toolOptions: { start: { cho: 'ㅅ', jung: 'ㅣ' } } }),
              HG('더 해 보기: 친구가 \'옷\'을 \'오\'로 썼어요. 받침을 붙여 바르게 고쳐 만들어 보세요.', '옷', 0.3, { extra: true, toolOptions: { start: { cho: 'ㅇ', jung: 'ㅗ' } } }),
            ]),
        ],
        [
          CH('\'밤\'을 쓰려다 받침을 빠뜨린 글자는 어느 것일까요?', ['바', '밤', '방'], 0, '\'바\'는 받침이 없어서 소리 끝이 열려 있어요. \'밤\'은 입이 다물리며 끝나요.', 0.2),
          { type: 'tool', tool: 'hangul', options: { consonants: ['ㄱ', 'ㅈ'], vowels: ['ㅣ', 'ㅏ'], batchim: ['ㅂ', 'ㄹ', 'ㄴ'], slotHints: true, start: { cho: 'ㅈ', jung: 'ㅣ' } }, prompt: '친구가 \'집\'을 \'지\'로 썼어요. 받침을 붙여 바르게 고쳐 만들어 보세요.', target: { syllable: '집' }, difficulty: 0.25 },
          MOOD,
        ]),
      worksheet: {
        title: '바르게 고쳐 쓰기',
        items: [
          { type: 'figure', prompt: '받침이 빠진 글자입니다. 받침을 붙여 바르게 고쳐 쓰세요.', tool: 'hangul', options: { batchim: [] }, figures: [{ state: { cho: 'ㄲ', jung: 'ㅜ' }, caption: '꾸 → (      )' }, { state: { cho: 'ㅁ', jung: 'ㅜ' }, caption: '무 → (      )' }], answer: '꿈, 물' },
          { type: 'choice', prompt: '\'문\'을 바르게 쓴 글자에 ○ 하세요.', options: ['무', '문', '물'], answer: '문' },
          { type: 'blank', prompt: '받침을 붙여 글자를 고쳐 쓰세요.', text: '시 → ___     빠 → ___', answer: '신, 빵' },
          { type: 'short', prompt: '내가 받침을 빠뜨리기 쉬운 낱말 하나를 바르게 써 보세요.' },
        ],
        easy: { note: '소리 내어 읽고 끝소리가 닫히는지 확인해요.', items: [
          { type: 'choice', prompt: '받침이 있는 글자에 ○ 하세요.', options: ['꾸', '꿈'], answer: '꿈' },
          { type: 'blank', prompt: '받침을 붙여 고쳐 쓰세요.', text: '무 → ___', answer: '물' },
          { type: 'blank', prompt: '글자를 따라 쓰세요.', text: '빵 → ___', answer: '빵' },
          { type: 'draw', prompt: '고친 글자를 쓰고 그림으로 그려 보세요.' },
        ] },
      },
      differentiation: {
        easy: '글자 고르기는 카드가 맞는 칸에 들어가면 초록 테두리가 생겨요. 고쳐 만들기는 자리 글씨와 알맞은 자리 안내가 있어요.',
        base: '카드를 놓은 뒤 확인하고, 만든 글자는 확인 뒤에 보여요.',
        challenge: '내 글자 듣기 단추가 없고, 더 해 보기(받침 틀린 글자 고르기, \'옷\' 고치기)까지 풀어요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 쓰고 나서 다시 읽지 않아 받침 빠뜨린 것을 모른다 → 쓴 글자를 손가락으로 짚으며 소리 내어 읽게 한다. ② 끝소리가 닫히는지 느끼지 못한다 → 낱말 끝에서 입을 다무는지(ㅁ), 혀가 닿는지(ㄴ·ㄹ)를 거울로 확인한다. ③ 고치는 것을 부끄러워한다 → 어른들도 고쳐 쓴다고 말해 준다. 이 차시의 틀린 글자는 모두 받침을 빠뜨린 경우만 다룬다.',
    }),

    // ───────────────────────── 10. 받침 자음 모양과 이름 ─────────────────────────
    L(10, {
      title: '받침 자음 모양을 보고 나누고 받침 글자 만들기',
      objective: '글자의 받침 자음 모양을 보고 같은 받침끼리 나누고, 받침 자음 이름을 말하며 받침 있는 글자를 만들 수 있다.',
      standards: JAMO,
      illustration: ART('paper letters standing in groups according to the shape of the little piece under their feet, with a teacher pointing to one group', 'ㄴ ㅁ ㅇ ㄹ'),
      stages: ST(
        { teacher: '"글자 맨 아래에 있는 받침만 보고 이름을 불러 볼까요?" 칠판에 \'문\'과 \'밤\'을 쓰고 아래 조각을 손가락으로 짚는다. 시연 단추로 ㄱ과 ㅏ에 받침 ㅇ(이응)이 붙어 \'강\'이 되는 모습을 보여 준다. "받침도 자음이라서 이름이 있어요. ㅇ은 이응, ㄴ은 니은이에요."', student: '받침 자음의 모양을 보고 같은 것끼리 모아 봐요.', demo: { tool: 'hangul', options: { consonants: ['ㄱ'], vowels: ['ㅏ'], batchim: ['ㅇ', 'ㄴ'], slotHints: true }, sequence: [{ syllable: '강' }] } },
        '"받침이 같은 글자를 두 개 말해 볼 사람?" 짝과 번갈아 말하게 하고 칠판에 모은다. 출구 1번에서 \'ㅁ\'을 \'ㅇ\'으로 읽은 학생에게는 두 받침의 모양(네모, 동그라미)을 손가락으로 그려 견주게 한다.',
        [
          A('a1', '활동 1. 받침이 같은 글자끼리 나누기', 13, 'mindmap',
            '"글자 맨 아래를 손가락으로 짚어 봐요. 받침이 네모 모양일까요, 동그라미 모양일까요?" 카드마다 받침만 손으로 가리고 읽게 한다. ㅇ받침과 ㅁ받침을 같은 칸에 넣는 학생에게는 "둘의 모양이 같은가요?"라고 묻는다.',
            '글자 카드를 받침이 같은 것끼리 나누어요.', LV,
            [
              SORT('글자 카드를 받침이 ㄴ인 것과 ㅁ인 것으로 나누어 보세요.', '받침 모양', [{ id: 'n', label: '받침이 ㄴ' }, { id: 'm', label: '받침이 ㅁ' }], [W('sin', '신'), W('mun', '문'), W('nun', '눈'), W('bam', '밤'), W('mom', '몸'), W('gom', '곰')], { n: ['sin', 'mun', 'nun'], m: ['bam', 'mom', 'gom'] }, 0.15,
                { levels: { easy: { prompt: '글자 카드 넷을 받침이 ㄴ인 것과 ㅁ인 것으로 나누어 보세요.', toolOptions: { cards: [W('sin', '신'), W('mun', '문'), W('bam', '밤'), W('gom', '곰')] }, target: { sort: { n: ['sin', 'mun'], m: ['bam', 'gom'] } } } } }),
              SORT('글자 카드를 받침이 ㅇ인 것과 ㄹ인 것으로 나누어 보세요.', '받침 모양', [{ id: 'ng', label: '받침이 ㅇ' }, { id: 'r', label: '받침이 ㄹ' }], [W('gong', '공'), W('bal', '발'), W('gang', '강'), W('mul', '물')], { ng: ['gong', 'gang'], r: ['bal', 'mul'] }, 0.2,
                { conclude: '받침이 같은 글자는 끝소리도 비슷해요. 받침 모양을 보면 같은 글자끼리 모을 수 있어요.' }),
              PICK('받침이 ㅂ인 글자 카드를 모두 골라 보세요.', '받침이 ㅂ', [W('jip', '집'), W('ip', '입'), W('mun', '문'), W('chaek', '책')], ['jip', 'ip'], 0.25),
              SORT('더 해 보기: 글자 카드를 받침이 ㄱ인 것과 ㅂ인 것으로 나누어 보세요.', '받침 모양', [{ id: 'g', label: '받침이 ㄱ' }, { id: 'b', label: '받침이 ㅂ' }], [W('chaek', '책'), W('mok', '목'), W('jip', '집'), W('ip', '입')], { g: ['chaek', 'mok'], b: ['jip', 'ip'] }, 0.3, { extra: true }),
            ]),
          A('a2', '활동 2. 받침 자음 이름을 말하며 글자 만들기', 13, 'hangul',
            '"받침 이름을 먼저 말하고, 맨 아래에 놓아요." 이응·리을·미음·니은을 소리 내어 읽게 한다. 받침을 첫소리 자리에 놓은 학생에게는 "받침은 글자 맨 아래에 놓는다고 했지요?"라고 말하고 교구의 까닭 말을 읽게 한다.',
            '받침 이름을 읽고, 받침을 붙여 글자를 만들어요.', HGL(['ㄱ', 'ㅈ', 'ㄴ', 'ㅎ'], ['ㅏ', 'ㅣ', 'ㅗ']),
            [
              HG('받침 이응(ㅇ)을 붙여 \'강\'을 만들어 보세요.', '강', 0.15),
              HG('받침 리을(ㄹ)을 붙여 \'길\'을 만들어 보세요.', '길', 0.2),
              HG('받침 미음(ㅁ)을 붙여 \'잠\'을 만들어 보세요.', '잠', 0.25),
              HG('받침 니은(ㄴ)을 붙여 \'논\'을 만들어 보세요.', '논', 0.3),
              HG('더 해 보기: 받침 미음(ㅁ)을 붙여 \'힘\'을 만들어 보세요.', '힘', 0.3, { extra: true }),
            ]),
        ],
        [
          CH('\'문\'의 받침 이름은 무엇일까요?', ['니은', '이응', '리을'], 0, '\'문\'의 받침은 ㄴ이고 이름은 니은이에요. 이응은 ㅇ, 리을은 ㄹ의 이름이에요.', 0.2),
          { type: 'tool', tool: 'hangul', options: { consonants: ['ㄱ', 'ㅅ'], vowels: ['ㅏ', 'ㅣ'], batchim: ['ㄴ', 'ㄹ', 'ㅁ'], slotHints: true }, prompt: '받침 리을(ㄹ)을 붙여 \'살\'을 만들어 보세요.', target: { syllable: '살' }, difficulty: 0.25 },
          MOOD,
        ]),
      worksheet: {
        title: '받침 자음',
        items: [
          { type: 'table', prompt: '받침 이름을 쓰세요.', columns: ['받침', '이름'], cells: [['ㄴ', ''], ['ㅁ', ''], ['ㅇ', ''], ['ㄹ', '']] },
          { type: 'check', prompt: '받침이 ㅇ인 글자를 모두 골라 □에 ✓ 하세요.', options: ['강', '신', '공', '밤'], answer: '강, 공' },
          { type: 'figure', prompt: '받침을 붙이면 어떤 글자가 될까요? 아래에 쓰세요.', tool: 'hangul', options: { batchim: [] }, figures: [{ state: { cho: 'ㄱ', jung: 'ㅣ', jong: 'ㄹ' }, caption: BLANK }, { state: { cho: 'ㅈ', jung: 'ㅏ', jong: 'ㅁ' }, caption: BLANK }, { state: { cho: 'ㄴ', jung: 'ㅗ', jong: 'ㄴ' }, caption: BLANK }], answer: '길, 잠, 논' },
          { type: 'short', prompt: '받침이 같은 글자 두 개를 찾아 써 보세요.' },
        ],
        easy: { note: '받침을 손가락으로 짚으며 읽어요.', items: [
          { type: 'choice', prompt: '\'강\'의 받침에 ○ 하세요.', options: ['ㅇ', 'ㅁ'], answer: 'ㅇ' },
          { type: 'blank', prompt: '받침 이름을 따라 쓰세요.', text: 'ㅁ → ______', answer: '미음' },
          { type: 'blank', prompt: '받침을 붙여 글자를 쓰세요.', text: '가 + ㅇ = ___', answer: '강' },
          { type: 'draw', prompt: '받침이 있는 글자 하나를 쓰고 그림도 그려 보세요.' },
        ] },
      },
      differentiation: {
        easy: '나누기는 카드 넷으로 시작하고 맞게 놓으면 초록 테두리가 생겨요. 글자 만들기는 자리 글씨와 알맞은 자리 안내가 있어요.',
        base: '카드를 모두 놓은 뒤 확인하고, 만든 글자는 확인 뒤에 보여요.',
        challenge: '내 글자 듣기 단추가 없고, 더 해 보기(받침 ㄱ·ㅂ 나누기, \'힘\' 만들기)까지 풀어요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 받침 ㅇ과 첫소리 ㅇ을 같은 소리로 읽는다 → 첫소리 ㅇ은 소리가 없고 받침 ㅇ은 [응]처럼 목에서 울린다고 말해 준다. ② 받침 ㄴ·ㅁ·ㅇ 모양을 서로 바꿔 읽는다 → 모양을 공중에 그리며 읽는다. ③ 받침 이름을 모르고 \'동그라미\'처럼 말한다 → 이름을 한 번 더 따라 읽게 한다. 이 차시는 받침 ㄱ·ㄴ·ㄹ·ㅁ·ㅂ·ㅇ을 쓰고 겹받침은 다루지 않는다.',
    }),

    // ───────────────────────── 11. 받침 소리가 잘 들리게 말하기 ─────────────────────────
    L(11, {
      title: '받침 소리가 잘 들리게 입 모양 맞춰 또박또박 말하기',
      objective: '받침 끝소리를 낼 때의 입 모양을 알고, 잘못 들은 말이 있을 때 입 모양을 살려 또박또박 다시 말할 수 있다.',
      standards: JAMO,
      illustration: ART('a paper child pointing to a mirror to show how the mouth closes when saying a word that ends with a bottom support piece', '입 다물기  혀 닿기'),
      stages: ST(
        { teacher: '"곰이라고 말해 볼까요? 마지막에 입이 어떻게 되나요?" 모두 거울을 보며 입이 다물리는 것을 확인한다. 다시 \'문\'을 말하며 혀끝이 윗잇몸에 닿는 느낌을 찾게 한다. 시연 단추로 \'곰\'이 \'입을 다물어요\' 칸에 이어지는 모습을 보여 준다.', student: '받침 소리를 내면 입 모양이 달라져요. 입 모양을 살펴봐요.', demo: { tool: 'mindmap', options: { mode: 'match', topic: '끝소리 입 모양', shuffle: false, slots: [{ id: 'mouth', label: '입을 다물어요' }], cards: [{ id: 'gom', text: '곰', big: '곰' }, { id: 'sso', text: '소', big: '소' }] }, sequence: [{ match: { mouth: 'gom' } }] } },
        '"오늘 짝이 못 알아들었을 때 어떻게 다시 말해 주었나요?" 두세 명이 말하고 입 모양을 다시 해 본다. 출구 1번에서 \'목에서 울려요\'를 고른 학생에게는 \'곰\'을 말하며 입술이 닫히는 느낌을 확인하게 한다.',
        [
          A('a1', '활동 1. 받침 소리와 입 모양 이어 보기', 13, 'mindmap',
            '"낱말을 소리 내어 끝까지 말해 보고 입 모양을 거울로 봐요." 입이 다물리는지, 혀가 닿는지, 목이 울리는지 손을 목과 입에 대어 느끼게 한다. 받침 ㅁ과 ㅇ을 같은 입 모양으로 잇는 학생에게는 "입술이 닫혔나요, 열려 있나요?"라고 묻는다.',
            '받침 글자 카드를 끝소리 입 모양과 이어요. 거울을 보며 말해 봐요.', LV,
            [
              MATCH('끝소리를 낼 때의 입 모양과 알맞은 글자 카드를 이어 보세요.', '입 모양', [{ id: 'mouth', label: '입을 다물어요' }, { id: 'throat', label: '목에서 울려요' }], [W('gom', '곰'), W('gang', '강'), W('mun', '문')], { mouth: 'gom', throat: 'gang' }, 0.15),
              MATCH('끝소리를 낼 때의 입 모양과 알맞은 글자 카드를 이어 보세요. 소리가 없는 글자가 하나 있어요.', '입 모양', [{ id: 'mouth', label: '입을 다물어요' }, { id: 'tongue', label: '혀끝을 윗잇몸에 대요' }, { id: 'throat', label: '목에서 울려요' }], [W('bam', '밤'), W('sin', '신'), W('bang', '방'), W('so', '소')], { mouth: 'bam', tongue: 'sin', throat: 'bang' }, 0.25,
                { conclude: '받침 소리를 내면 입을 다물거나, 혀가 닿거나, 목이 울려요.' }),
              MATCH('입 모양과 알맞은 글자 카드를 이어 보세요. 글자 카드가 하나 더 있어요.', '입 모양', [{ id: 'mouth', label: '입을 다물어요' }, { id: 'tongue', label: '혀끝을 윗잇몸에 대요' }, { id: 'throat', label: '목에서 울려요' }], [W('mom', '몸'), W('nun', '눈'), W('gong', '공'), W('bal', '발')], { mouth: 'mom', tongue: 'nun', throat: 'gong' }, 0.3),
              PICK('더 해 보기: 끝소리에서 입이 다물리는 글자 카드를 모두 골라 보세요.', '입이 다물려요', [W('gom', '곰'), W('jip', '집'), W('mun', '문'), W('gang', '강')], ['gom', 'jip'], 0.3, { extra: true }),
            ]),
          A('a2', '활동 2. 못 알아들었을 때 어떻게 말할까', 13, 'emotion',
            '"짝이 내 말을 잘못 들었을 때 어떻게 하면 좋을까요?" 고른 길의 결과를 읽고 짝의 기분을 이야기하게 한다. 화내는 길을 고른 학생에게는 "짝이 일부러 잘못 들었을까요?"라고 묻는다.',
            '이야기 속 친구가 되어 입 모양을 살려 다시 말하는 길을 골라요.', LV,
            [
              BR('짝이 \'곰\'을 \'고\'로 들었어요. 어떻게 말하면 좋을까요?', '나', '내가 \'곰\'이라고 말했는데 짝이 \'고\'라고 들었어요.', [{ id: 'close', text: '끝에서 입을 다물며 또박또박 다시 말해요', result: '짝이 \'곰\'이라고 알아들어요', mood: '기쁨' }, { id: 'louder', text: '\'고\'라고 더 크게 말해요', result: '짝은 여전히 \'고\'로 들어요', mood: '속상함', why: '글자 끝이 다르면 소리가 더 크다고 알아들을까요?' }, { id: 'stop', text: '말을 그만두어요', result: '짝이 내 말을 알아듣지 못해요', mood: '걱정', why: '말을 그만두면 짝이 알아들을 수 있을까요?' }], 'close', 0.1),
              BR('동생이 \'밤\'을 \'바\'라고 따라 말해요. 어떻게 알려 주면 좋을까요?', '나', '어린 동생이 \'밤\'을 \'바\'라고 따라 말해요.', [{ id: 'show', text: '입을 다무는 모습을 보여 주며 천천히 말해 줘요', result: '동생이 따라 하며 \'밤\'이라고 말해요', mood: '뿌듯함' }, { id: 'laugh', text: '틀렸다고 놀려요', result: '동생이 입을 다물고 말을 안 해요', mood: '속상함', why: '놀림을 받은 동생의 마음은 어떨까요?' }, { id: 'ignore', text: '모른 척해요', result: '동생은 틀린 줄 모르고 계속 \'바\'라고 해요', mood: '걱정', why: '알려 주지 않으면 동생이 고칠 수 있을까요?' }], 'show', 0.2),
              BR('발표 중인데 뒤에 앉은 친구가 \'책\'이 잘 안 들린다고 해요. 어떻게 하면 좋을까요?', '나', '발표 중에 뒤에 앉은 친구가 \'책\' 소리가 안 들린다고 손을 들었어요.', [{ id: 'again', text: '끝소리를 또렷하게 해서 다시 말해요', result: '친구가 \'책\'을 알아들어요', mood: '고마움' }, { id: 'skip', text: '못 들은 척하고 계속 말해요', result: '친구는 발표 내용을 이해하지 못해요', mood: '속상함', why: '못 들은 척하면 친구가 발표를 알 수 있을까요?' }], 'again', 0.25),
            ]),
        ],
        [
          CH('\'곰\'의 끝소리를 낼 때 입 모양은 어느 것일까요?', ['입을 다물어요', '입을 크게 벌려요', '혀를 내밀어요'], 0, '\'곰\'은 ㅁ 받침이라 끝에서 입술이 닫혀요.', 0.15),
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '입 모양', slots: [{ id: 'mouth', label: '입을 다물어요' }, { id: 'throat', label: '목에서 울려요' }], cards: [W('jam', '잠'), W('gang', '강'), W('so', '소')] }, prompt: '끝소리를 낼 때의 입 모양과 알맞은 글자 카드를 이어 보세요.', target: { match: { mouth: 'jam', throat: 'gang' } }, difficulty: 0.2 },
          MOOD,
        ]),
      worksheet: {
        title: '받침 소리와 입 모양',
        items: [
          { type: 'table', prompt: '끝소리를 낼 때의 입 모양에 맞는 글자를 쓰세요. (곰, 문, 강)', columns: ['입 모양', '글자'], cells: [['입을 다물어요', ''], ['혀끝을 윗잇몸에 대요', ''], ['목에서 울려요', '']] },
          { type: 'check', prompt: '입을 다물며 끝나는 글자를 모두 골라 □에 ✓ 하세요.', options: ['곰', '문', '밤', '강'], answer: '곰, 밤' },
          { type: 'choice', prompt: '짝이 못 알아들었을 때 알맞은 행동에 ○ 하세요.', options: ['끝소리를 또렷하게 다시 말해요', '더 크게 소리쳐요'], answer: '끝소리를 또렷하게 다시 말해요' },
          { type: 'draw', prompt: '거울을 보며 \'곰\'이라고 말하는 내 입 모양을 그려 보세요.' },
        ],
        easy: { note: '거울을 보며 입 모양을 느껴요.', items: [
          { type: 'choice', prompt: '\'곰\'을 말할 때 입 모양에 ○ 하세요.', options: ['입을 다물어요', '입을 크게 벌려요'], answer: '입을 다물어요' },
          { type: 'choice', prompt: '\'강\'을 말할 때 느낌에 ○ 하세요.', options: ['목에서 울려요', '입술이 닫혀요'], answer: '목에서 울려요' },
          { type: 'short', prompt: '입이 다물리는 낱말 하나를 써 보세요.' },
          { type: 'draw', prompt: '거울을 보는 내 모습을 그려 보세요.' },
        ] },
      },
      differentiation: {
        easy: '잇기는 입 모양 둘로 시작하고 맞게 이으면 초록 테두리가 생겨요. 이야기 고르기는 틀린 길을 고르면 까닭을 묻고 돌아와요.',
        base: '카드를 모두 이은 뒤 확인하고, 이야기 결과를 읽고 다시 생각해요.',
        challenge: '입 모양이 셋인 문항이 나오고, 더 해 보기(입이 다물리는 글자 모두 고르기)까지 풀어요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 끝소리를 짧게 흘려 받침이 들리지 않는다 → 낱말 끝에서 입이나 혀를 멈춘 채 한 박자 쉬게 한다. ② ㅁ·ㅂ(입이 다물려요)과 ㄴ·ㄹ(혀가 닿아요)을 구별하지 못한다 → 거울로 입술을 보며 확인한다. ③ 못 알아듣는 친구에게 크게만 말한다 → 소리의 크기가 아니라 끝소리의 입 모양이 중요하다고 말한다. 이 차시에서는 ㄹ받침 낱말을 입 모양 잇기에 쓰지 않는다(혀가 닿는 점이 ㄴ과 같아 헷갈리기 쉽다).',
    }),

    // ───────────────────────── 12. 끝소리가 다른 글자 짝 ─────────────────────────
    L(12, {
      title: '끝소리가 ㅁ·ㄴ·ㅇ으로 다른 글자 짝 읽고 쓰기',
      objective: '받침만 다른 글자 짝(밤·반·방)의 끝소리를 구별해 읽고, 끝소리가 같은 글자끼리 나누어 쓸 수 있다.',
      standards: JAMO,
      illustration: ART('three paper letters with only the bottom piece different, standing in a row with a paper mirror reflecting each mouth shape', '밤  반  방'),
      stages: ST(
        { teacher: '"밤, 반, 방. 이 세 글자에서 다른 것은 어디일까요?" 칠판에 나란히 쓰고 앞의 두 조각은 같다는 것을 짚는다. 시연 단추로 같은 ㅂ과 ㅏ에 받침 ㅁ, ㄴ, ㅇ이 차례로 붙어 세 글자가 되는 모습을 보여 준다. "받침이 달라지면 글자도, 뜻도 달라져요."', student: '받침만 다른 글자들의 소리를 비교해 봐요.', demo: { tool: 'hangul', options: { consonants: ['ㅂ'], vowels: ['ㅏ'], batchim: ['ㅁ', 'ㄴ', 'ㅇ'], slotHints: true }, sequence: [{ syllable: '밤' }, { syllable: '반' }, { syllable: '방' }] } },
        '"오늘 받침만 다른 글자를 읽을 때 어떻게 구별했나요?" 두세 명이 입 모양이나 거울로 확인한 이야기를 한다. 출구 1번에서 \'반\'과 \'방\'을 바꾼 학생에게는 두 글자를 천천히 읽으며 목에서 울리는 것이 어느 쪽인지 느끼게 한다.',
        [
          A('a1', '활동 1. 끝소리를 구별해 받침만 다른 글자 만들기', 13, 'hangul',
            '"입이 닫히면 ㅁ, 혀가 닿으면 ㄴ, 목이 울리면 ㅇ이에요." 낱말마다 입 모양을 먼저 정하고 받침을 놓게 한다. ㄴ과 ㅇ을 헷갈리는 학생에게는 "목에서 울리는 소리를 느꼈나요?"라고 묻는다.',
            '끝소리의 입 모양에 알맞은 받침을 붙여 글자를 만들어요.', HGL(['ㅂ', 'ㅊ'], ['ㅏ', 'ㅜ'], ['ㅁ', 'ㄴ', 'ㅇ']),
            [
              HG('끝에서 입이 다물리는 \'밤\'을 만들어 보세요.', '밤', 0.15),
              HG('끝에서 혀가 윗잇몸에 닿는 \'반\'을 만들어 보세요.', '반', 0.2),
              HG('끝에서 목이 울리는 \'방\'을 만들어 보세요.', '방', 0.25),
              HG('끝에서 목이 울리는 \'창\'을 만들어 보세요.', '창', 0.3),
              HG('더 해 보기: 끝에서 입이 다물리는 \'참\'을 만들어 보세요.', '참', 0.3, { extra: true }),
            ]),
          A('a2', '활동 2. 끝소리가 같은 글자끼리 나누기', 13, 'mindmap',
            '"소리 내어 읽고 끝소리의 입 모양이 같은 것끼리 모아 봐요." 카드를 끝까지 소리 내어 읽고 입 모양을 확인하게 한다. 첫 글자만 보고 모으는 학생에게는 "끝소리에서 입이 어떻게 되나요?"라고 묻는다.',
            '글자 카드를 끝소리가 같은 것끼리 나누어요.', LV,
            [
              SORT('글자 카드를 끝소리가 같은 것끼리 나누어 보세요.', '끝소리 입 모양', [{ id: 'mouth', label: '입이 다물려요' }, { id: 'tongue', label: '혀가 닿아요' }, { id: 'throat', label: '목이 울려요' }], [W('bam', '밤'), W('ban', '반'), W('bang', '방'), W('mom', '몸')], { mouth: ['bam', 'mom'], tongue: ['ban'], throat: ['bang'] }, 0.15,
                { levels: { easy: { prompt: '글자 카드 셋을 끝소리가 같은 것끼리 나누어 보세요.', toolOptions: { cards: [W('bam', '밤'), W('ban', '반'), W('bang', '방')] }, target: { sort: { mouth: ['bam'], tongue: ['ban'], throat: ['bang'] } } } } }),
              SORT('글자 카드를 끝소리가 같은 것끼리 나누어 보세요. 첫 글자가 같지 않아도 돼요.', '끝소리 입 모양', [{ id: 'mouth', label: '입이 다물려요' }, { id: 'tongue', label: '혀가 닿아요' }, { id: 'throat', label: '목이 울려요' }], [W('gam', '감'), W('mun', '문'), W('sin', '신'), W('gong', '공')], { mouth: ['gam'], tongue: ['mun', 'sin'], throat: ['gong'] }, 0.25,
                { conclude: '첫 글자가 달라도 끝소리가 같으면 입 모양도 같아요.' }),
              SORT('글자 카드 여섯 장을 끝소리가 같은 것끼리 나누어 보세요.', '끝소리 입 모양', [{ id: 'mouth', label: '입이 다물려요' }, { id: 'tongue', label: '혀가 닿아요' }, { id: 'throat', label: '목이 울려요' }], [W('san', '산'), W('gang', '강'), W('sum', '숨'), W('nun', '눈'), W('ttang', '땅'), W('gom', '곰')], { mouth: ['sum', 'gom'], tongue: ['san', 'nun'], throat: ['gang', 'ttang'] }, 0.3),
              PICK('더 해 보기: \'곰\'과 끝소리가 같은 글자 카드를 모두 골라 보세요.', '곰과 끝소리가 같아요', [W('bam', '밤'), W('ban', '반'), W('bang', '방'), W('jam', '잠')], ['bam', 'jam'], 0.3, { extra: true }),
            ]),
        ],
        [
          CH('\'방\'의 끝소리를 낼 때 느낌은 어느 것일까요?', ['입을 다물어요', '혀가 닿아요', '목에서 울려요'], 2, '\'방\'은 ㅇ 받침이라 끝에서 목이 울려요.', 0.2),
          { type: 'tool', tool: 'hangul', options: { consonants: ['ㄷ', 'ㅂ'], vowels: ['ㅏ', 'ㅜ'], batchim: ['ㄴ', 'ㅁ', 'ㅇ'], slotHints: true }, prompt: '끝에서 혀가 윗잇몸에 닿는 \'단\'을 만들어 보세요.', target: { syllable: '단' }, difficulty: 0.25 },
          MOOD,
        ]),
      worksheet: {
        title: '받침만 다른 글자',
        items: [
          { type: 'figure', prompt: '받침만 다릅니다. 어떤 글자일까요? 아래에 쓰세요.', tool: 'hangul', options: { batchim: [] }, figures: [{ state: { cho: 'ㅂ', jung: 'ㅏ', jong: 'ㅁ' }, caption: BLANK }, { state: { cho: 'ㅂ', jung: 'ㅏ', jong: 'ㄴ' }, caption: BLANK }, { state: { cho: 'ㅂ', jung: 'ㅏ', jong: 'ㅇ' }, caption: BLANK }], answer: '밤, 반, 방' },
          { type: 'check', prompt: '끝에서 목이 울리는 글자를 모두 골라 □에 ✓ 하세요.', options: ['방', '밤', '창', '반'], answer: '방, 창' },
          { type: 'table', prompt: '끝소리가 같은 글자끼리 써 넣으세요. (곰, 산, 공, 눈, 숨, 강)', columns: ['입이 다물려요', '혀가 닿아요', '목이 울려요'], rows: 2 },
          { type: 'short', prompt: '받침만 다른 글자 짝을 하나 찾아 써 보세요.' },
        ],
        easy: { note: '입 모양을 먼저 느끼고 써요.', items: [
          { type: 'blank', prompt: '받침을 붙여 글자를 쓰세요.', text: '바 + ㅁ = ___     바 + ㅇ = ___', answer: '밤, 방' },
          { type: 'choice', prompt: '끝에서 입이 다물리는 글자에 ○ 하세요.', options: ['밤', '방'], answer: '밤' },
          { type: 'choice', prompt: '끝에서 목이 울리는 글자에 ○ 하세요.', options: ['반', '방'], answer: '방' },
          { type: 'short', prompt: '내가 좋아하는 받침 글자를 써 보세요.' },
        ] },
      },
      differentiation: {
        easy: '글자 만들기는 받침 조각이 세 개이고 자리 안내가 있어요. 나누기는 카드 셋으로 시작하고 맞게 놓으면 초록 테두리가 생겨요.',
        base: '만든 글자는 확인 뒤에 보이고, 카드는 모두 놓은 뒤 확인해요.',
        challenge: '내 글자 듣기 단추가 없고, 더 해 보기(\'참\' 만들기, \'곰\'과 끝소리가 같은 글자)까지 풀어요.',
      },
      teacherNotes: '자주 보이는 어려움: ① ㄴ과 ㅇ의 끝소리를 구별하지 못한다 → 손을 목에 대고 울림을 느끼게 한다. ② 첫 글자가 같으면 같은 글자라고 생각한다 → 받침이 달라지면 다른 글자라고 말한다. ③ ㅁ과 ㅂ의 끝소리가 둘 다 입이 다물려서 헷갈린다 → 이 차시는 ㅁ·ㄴ·ㅇ 세 받침만 다루고 ㅂ받침은 입이 다물리는 글자로 알려 둔다. 받침 소리가 뒤 글자로 넘어가는 말은 뒤에서 다룬다.',
    }),

    // ───────────────────────── 13. 정리 ─────────────────────────
    L(13, {
      title: '받침 글자 쓰기 되짚고 내 읽기·쓰기 모습 돌아보기',
      objective: '단원에서 배운 말이 맞는지 가르고, 받침 있는 글자를 만들어 쓴 뒤 내 읽기·쓰기·발표 모습을 솔직하게 돌아볼 수 있다.',
      standards: JAMO,
      illustration: ART('a row of paper letters each with a little support piece standing proudly on a shelf, with a child pointing at them', '꽃  숲  쌀'),
      stages: ST(
        { teacher: '"우리가 이 단원에서 받침 글자를 만들고, 말하고, 고쳐 쓰면서 알게 된 것은 무엇이지요?" 받침 위치, 입 모양, 발표 자세, 고쳐 쓰기를 차례로 떠올려 칠판에 붙인다. 시연 단추로 받침 글자 하나가 만들어지는 모습을 보여 준다. "오늘은 배운 것이 맞는지 가르고, 새 글자도 만들고, 내 실력을 돌아봐요."', student: '배운 것을 떠올리고 받침 글자를 만들어 봐요.', demo: { tool: 'hangul', options: { consonants: ['ㄲ'], vowels: ['ㅗ'], batchim: ['ㅊ', 'ㅍ'], slotHints: true }, sequence: [{ syllable: '꽃' }] } },
        '"이 단원에서 가장 재미있었던 일은 무엇이었나요?" 두세 명이 이야기한다. 출구 2번에서 \'그냥 넘어가요\'를 고른 학생에게는 쓴 뒤 소리 내어 읽는 방법을 한 번 더 해 보게 한다. 자기 평가에서 \'아직\'을 고른 학생을 눈여겨보고 한 가지 목표를 함께 정한다.',
        [
          A('a1', '활동 1. 배운 말이 맞는지 가르기', 8, 'mindmap',
            '"이 말은 맞을까요, 틀릴까요? 우리가 만든 글자와 말하기를 떠올려 봐요." 카드를 소리 내어 읽고 몸짓으로 확인하게 한다. \'받침은 모음 오른쪽에 붙어요\'를 맞다고 고르는 학생에게는 \'곰\'의 받침이 어디에 있는지 다시 보게 한다.',
            '배운 말 카드를 맞는 말과 틀린 말로 나누어요.', LV,
            [
              SORT('받침에 대해 배운 말을 맞는 말과 틀린 말로 나누어 보세요.', '받침 확인', [{ id: 'yes', label: '맞아요' }, { id: 'no', label: '아니에요' }], [C('bottom', '받침은 글자 맨 아래에 붙어요'), C('right', '받침은 모음 오른쪽에 붙어요'), C('close', '받침이 있으면 끝소리가 닫히거나 울려요'), C('down', '발표할 때는 고개를 숙여야 해요')], { yes: ['bottom', 'close'], no: ['right', 'down'] }, 0.15),
              SORT('쓰기와 말하기에 대해 배운 말을 맞는 말과 틀린 말로 나누어 보세요.', '쓰기·말하기 확인', [{ id: 'yes', label: '맞아요' }, { id: 'no', label: '아니에요' }], [C('read', '쓰고 나서 소리 내어 읽으면 빠진 받침을 찾을 수 있어요'), C('keep', '틀린 글자는 고치면 안 돼요'), C('listen', '친구 발표는 끝까지 들어요'), C('praise', '발표 뒤에는 친구 마음에 닿는 말을 해요')], { yes: ['read', 'listen', 'praise'], no: ['keep'] }, 0.2),
              SORT('낱말 뒤에 붙는 말에 대해 맞는 말과 틀린 말로 나누어 보세요.', '낱말 뒤에 붙는 말', [{ id: 'yes', label: '맞아요' }, { id: 'no', label: '아니에요' }], [C('a', '\'책\' 뒤에는 \'을\'을 써요'), C('b', '\'책\' 뒤에는 \'를\'을 써요'), C('c', '\'문\' 뒤에는 \'을\'을 써요')], { yes: ['a', 'c'], no: ['b'] }, 0.25,
                { conclude: '받침이 있는 낱말 뒤에는 \'을\'을 쓰고, 받침이 없는 낱말 뒤에는 \'를\'을 써요.' }),
            ]),
          A('a2', '활동 2. 새로운 받침 글자 만들어 읽기', 10, 'hangul',
            '"처음 만나는 받침 글자도 만들 수 있을까요? 소리를 내며 받침 이름을 정해 봐요." 지금까지 배운 내용을 떠올릴 시간을 충분히 준다. 막히는 학생에게는 지난 차시 판서를 가리키며 "받침은 어디에 놓았었지요?"라고 묻는다.',
            '배운 대로 자음과 모음, 받침을 모아 글자를 만들어요.', HGL(['ㄲ', 'ㅅ', 'ㅆ', 'ㄸ'], ['ㅗ', 'ㅜ', 'ㅏ'], ['ㅊ', 'ㅍ', 'ㄹ', 'ㅇ']),
            [
              HG('봄에 피는 \'꽃\'을 만들어 보세요.', '꽃', 0.2),
              HG('나무가 많은 \'숲\'을 만들어 보세요.', '숲', 0.25),
              HG('밥을 짓는 \'쌀\'을 만들어 보세요.', '쌀', 0.3),
              HG('더 해 보기: 발로 딛고 서는 \'땅\'을 만들어 보세요.', '땅', 0.3, { extra: true }),
            ]),
          A('a3', '활동 3. 내 읽기·쓰기·발표 모습 돌아보기', 8, 'emotion',
            '"받침 글자를 만들고, 말하고, 고쳐 쓴 내 모습을 떠올려 봐요. 정답은 없어요." 눈금을 고르고 이유를 짝에게 말하게 한다. 모두 \'잘해요\'를 고른 학생에게는 "가장 어려웠던 글자는 무엇이었나요?"라고 묻는다.',
            '내 모습에 알맞은 눈금을 골라요.', LV,
            [
              { prompt: '받침 있는 글자를 만들고 읽는 것을 얼마나 잘했나요? 솔직하게 골라요.', toolOptions: SELF('받침 있는 글자를 만들고 읽었어요.', '뿌듯함', '받침 글자를 얼마나 잘 만들었나요?'), target: { level: 'any' }, difficulty: 0.05, hints: SELF_HINTS },
              { prompt: '바른 자세와 알맞은 목소리로 말하는 것을 얼마나 잘했나요? 솔직하게 골라요.', toolOptions: SELF('바른 자세와 목소리로 짝에게 말했어요.', '편안함', '바른 자세로 얼마나 말했나요?'), target: { level: 'any' }, difficulty: 0.05, hints: SELF_HINTS },
              { prompt: '쓴 글자를 소리 내어 읽고 고쳐 쓰는 것을 얼마나 잘했나요? 솔직하게 골라요.', toolOptions: SELF('쓴 글자를 소리 내어 읽고 고쳐 보았어요.', '신남', '쓴 글자를 얼마나 읽고 고쳤나요?'), target: { level: 'any' }, difficulty: 0.05, hints: SELF_HINTS },
            ]),
        ],
        [
          CH('글자 맨 아래에 붙는 조각의 이름은 무엇일까요?', ['받침', '모음', '자음'], 0, '글자 맨 아래에 붙는 조각을 받침이라고 해요.', 0.1),
          CH('글자를 쓰고 나서 빠진 받침을 찾는 좋은 방법은 무엇일까요?', ['소리 내어 읽어 봐요', '그냥 넘어가요', '모두 지워요'], 0, '소리 내어 읽으면 끝소리가 닫히는지 알 수 있어서 빠진 받침을 찾을 수 있어요.', 0.15),
          MOOD,
        ]),
      worksheet: {
        title: '받침 글자 되짚기',
        items: [
          { type: 'check', prompt: '맞는 말에 모두 ✓ 하세요.', options: ['받침은 글자 맨 아래에 붙어요', '받침은 모음 오른쪽에 붙어요', '쓰고 나서 소리 내어 읽어요'], answer: '받침은 글자 맨 아래에 붙어요, 쓰고 나서 소리 내어 읽어요' },
          { type: 'figure', prompt: '어떤 글자일까요? 소리 내어 읽고 아래에 쓰세요.', tool: 'hangul', options: { batchim: [] }, figures: [{ state: { cho: 'ㄲ', jung: 'ㅗ', jong: 'ㅊ' }, caption: BLANK }, { state: { cho: 'ㅅ', jung: 'ㅜ', jong: 'ㅍ' }, caption: BLANK }, { state: { cho: 'ㅆ', jung: 'ㅏ', jong: 'ㄹ' }, caption: BLANK }], answer: '꽃, 숲, 쌀' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요. (을, 를)', text: '책___ 읽어요.     사과___ 먹어요.', answer: '을, 를' },
          { type: 'table', prompt: '내 실력에 ○ 하세요.', columns: ['내 모습', '아직', '조금', '잘해요'], cells: [['받침 글자를 만들 수 있어요', '', '', ''], ['바른 자세로 말할 수 있어요', '', '', ''], ['쓴 글자를 고쳐 쓸 수 있어요', '', '', '']] },
        ],
        easy: { note: '배운 것을 하나씩 떠올려요.', items: [
          { type: 'choice', prompt: '받침은 글자의 어디에 붙나요?', options: ['맨 아래', '오른쪽'], answer: '맨 아래' },
          { type: 'blank', prompt: '글자를 따라 쓰세요.', text: '꽃 → ___     숲 → ___', answer: '꽃, 숲' },
          { type: 'blank', prompt: '받침을 붙여 글자를 쓰세요.', text: '싸 + ㄹ = ___', answer: '쌀' },
          { type: 'draw', prompt: '이 단원에서 가장 좋아한 받침 글자를 쓰고 그려 보세요.' },
        ] },
      },
      differentiation: {
        easy: '가르기는 카드 넷으로 시작하고 맞게 놓으면 초록 테두리가 생겨요. 글자 만들기는 자리 안내가 있어요.',
        base: '카드를 모두 놓은 뒤 확인하고, 만든 글자는 확인 뒤에 보여요.',
        challenge: '내 글자 듣기 단추가 없고, 더 해 보기(\'땅\' 만들기)까지 풀어요.',
      },
      teacherNotes: '이 차시는 정리 시간이라 새로운 내용을 가르치지 않는다. 자주 보이는 어려움: ① 받침은 모음 오른쪽에 붙는다고 일반화한다 → 곰의 받침 ㅁ이 어디에 있는지 다시 보여 준다. ② 맞고 틀림 판단에서 문장의 한 낱말만 보고 고른다 → 문장 끝까지 소리 내어 읽게 한다. ③ 자기 평가에서 눈금을 모두 같은 곳에 둔다 → 이 단원에서 한 장면을 떠올려 고르게 한다. 자기 평가는 성적에 반영하지 않는다.',
    }),

  ];

  PaperLessons.registerUnit({
    id: U.id, schema: 'edu-unit.v1', catalogUnit: U.catalogUnit, grade: 1, subject: '국어', unitTitle: U.unitTitle,
    flow: '글자 맨 아래에 붙는 받침을 알고, 받침이 있는 글자와 없는 글자를 나누어 직접 만들어 봅니다. 몸 이름 낱말의 끝소리를 듣고 받침을 정해 쓰며, 받침이 있는 글자를 만드는 기존 차시가 그 사이를 이어 줍니다. 이어서 바른 자세와 알맞은 목소리로 짝에게 나를 소개하고 친구 발표를 듣습니다. 받침 있는 낱말로 문장을 채우고 틀린 글자를 고쳐 쓰며, 받침 자음의 모양과 소리, 끝소리가 다른 글자 짝을 살핍니다. 마지막 차시에서 배운 것을 되짚고 내 읽기·쓰기 모습을 돌아봅니다.',
    refs: { 3: 'g1-korean-batchim' },
    lessons,
  });
})();
