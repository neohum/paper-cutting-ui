/* 1학년 1학기 국어 1단원 글자를 만들어요 — 13차시(이미 있는 6차시 g1-korean-syllable은 refs로 잇는다)
 * (조각 나누기 → 모음 자리 → 소리 듣고 만들기 → 낱말 완성 → 낱말·짧은 글 읽기 → 읽기 태도 → 자음 이름 → 목소리 크기 → ㅐ와 ㅔ → 정리)
 * 예문·대화·인물(가명)·낱말 글은 모두 이 단원을 위해 새로 지었다. 교과서 지문·그림·노래 가사를 옮기지 않았다.
 * 받침은 다음 단원에서 배우므로, 글자를 직접 만드는 문항은 받침 없는 글자만 쓴다. 입학 초기 차시라 글은 짧게 쓰고 문항은 교사가 읽어 준다고 보았다.
 */
(function () {
  const U = { id: 'g1-kor-1-01', catalogUnit: 'g1-국어-1학기-1', unitTitle: '1. 글자를 만들어요' };
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
  const READ1 = ['[2국02-01]']; const READ2 = ['[2국02-05]']; const JAMO = ['[2국04-01]'];
  const HELP = { live: true, instant: true };
  const LV = { easy: HELP, base: {}, challenge: {} };
  // 카드 id는 로마자(힌트 누출 검사가 한글 값만 본다)
  const C = (id, text, o) => Object.assign({ id, text }, o);
  const J = (ch, id) => ({ id, text: ch, big: ch });
  const PICK = (prompt, topic, cards, pick, d, o) => Object.assign({ prompt, toolOptions: { mode: 'pick', topic, basket: topic, cards }, target: { pick }, difficulty: d }, o);
  const SORT = (prompt, topic, slots, cards, sort, d, o) => Object.assign({ prompt, toolOptions: { topic, slots, cards }, target: { sort }, difficulty: d }, o);
  const MATCH = (prompt, topic, slots, cards, match, d, o) => Object.assign({ prompt, toolOptions: { mode: 'match', topic, slots, cards }, target: { match }, difficulty: d }, o);
  const ORDER = (prompt, cards, order, d, o) => Object.assign({ prompt, toolOptions: { mode: 'order', slots: order.map((_, i) => ['첫째', '둘째', '셋째', '넷째'][i]), cards }, target: { order }, difficulty: d }, o);
  const HG = (prompt, syl, d, o) => Object.assign({ prompt, target: { syllable: syl }, difficulty: d }, o);
  // 글자 만들기 단계: 쉬움은 자리 안내, 기본·도전은 합친 글자를 확인 뒤에만 보여 준다
  const HGL = (cons, vows) => {
    const sil = cons.includes('ㅇ') ? { silentMark: true } : {};
    return {
      easy: Object.assign({ consonants: cons, vowels: vows, slotHints: true, slotGuide: true }, sil),
      base: { consonants: cons, vowels: vows, revealAfterCheck: true },
      challenge: { consonants: cons, vowels: vows, speak: false, revealAfterCheck: true },
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
    // ───────────────────────── 1. 도입: 이름표 글자를 조각으로 ─────────────────────────
    L(1, {
      title: '교실 이름표 글자를 자음과 모음 조각으로 가르기',
      objective: '이름표 글자를 자음 조각과 모음 조각으로 나누고, 자음과 모음을 모아 글자를 만들어 소리 내어 읽을 수 있다.',
      standards: READ1,
      illustration: ART('first grade children pulling apart a paper name tag into small consonant and vowel pieces on a classroom desk', 'ㄱ + ㅏ = 가'),
      stages: ST(
        { teacher: '"사물함 이름표에 쓰인 글자를 손가락으로 짚어 볼까요? 글자 하나는 작은 조각 두 개로 이루어졌어요." 시연 단추로 ㄱ과 ㅏ가 틀에 들어가 한 글자가 되는 모습을 보여 준다. "조각이 모이면 소리가 이어져서 [가]가 돼요."', student: '글자 하나는 조각이 모여서 만들어져요. 어떤 조각이 있을까요?', demo: { tool: 'hangul', options: { consonants: ['ㄱ'], vowels: ['ㅏ'], slotHints: true }, sequence: [{ syllable: '가' }] } },
        '"오늘 만든 글자를 짝에게 읽어 줄까요?" 두 명이 앞에서 읽어 본다. 출구 1번에서 ㅂ을 모음으로 고른 학생은 자음과 모음의 모양을 헷갈린 것이니, 모음은 긴 줄이 있는 조각이라고 다시 짚는다. 3번에서 힘들었다고 한 학생은 다음 시간 첫 문항을 함께 푼다.',
        [
          A('a1', '활동 1. 자음 조각과 모음 조각 나누기', 12, 'mindmap',
            '"이 조각은 자음일까요, 모음일까요? 모음은 긴 줄 하나가 쭉 뻗은 모양이에요." 카드를 손가락으로 따라 그리게 한다. 둘째 문항에서 둥근 ㅇ이나 ㅁ을 모음 칸에 넣는 학생에게는 "이 조각에 긴 막대가 있나요?"라고 되묻는다.',
            '조각 카드를 자음 칸과 모음 칸으로 나누어요.', LV,
            [
              SORT('조각 카드를 자음 조각과 모음 조각으로 나누어 보세요.', '조각 나누기', [{ id: 'c', label: '자음 조각' }, { id: 'v', label: '모음 조각' }], [J('ㄱ', 'g'), J('ㅏ', 'a'), J('ㄴ', 'n'), J('ㅗ', 'o'), J('ㅁ', 'm'), J('ㅜ', 'u')], { c: ['g', 'n', 'm'], v: ['a', 'o', 'u'] }, 0.1,
                { levels: { easy: { prompt: '조각 카드 넷을 자음 조각과 모음 조각으로 나누어 보세요.', toolOptions: { cards: [J('ㄱ', 'g'), J('ㅏ', 'a'), J('ㄴ', 'n'), J('ㅗ', 'o')] }, target: { sort: { c: ['g', 'n'], v: ['a', 'o'] } } } } }),
              SORT('이름표 글자 하나를 뜯었더니 조각 둘이 나왔어요. 자음과 모음으로 나누어 보세요.', '글자 하나를 뜯으면', [{ id: 'c', label: '자음 조각' }, { id: 'v', label: '모음 조각' }], [J('ㅅ', 's'), J('ㅓ', 'eo')], { c: ['s'], v: ['eo'] }, 0.15),
              PICK('이름표 글자를 뜯어 보니 조각이 이렇게 나왔어요. 자음 조각만 골라 보세요.', '자음 조각', [J('ㄷ', 'd'), J('ㅣ', 'i'), J('ㅇ', 'ng'), J('ㅜ', 'u')], ['d', 'ng'], 0.2,
                { conclude: '자음은 몸통이 되는 조각이고, 모음은 긴 줄이 있는 조각이에요.' }),
              PICK('더 해 보기: 이번에는 모음 조각만 골라 보세요.', '모음 조각', [J('ㅂ', 'b'), J('ㅡ', 'eu'), J('ㅈ', 'j'), J('ㅏ', 'a'), J('ㄹ', 'r')], ['eu', 'a'], 0.3, { extra: true }),
            ]),
          A('a2', '활동 2. 자음과 모음을 모아 글자 만들기', 14, 'hangul',
            '"ㄱ과 ㅏ를 틀에 놓으면 어떤 소리가 날까요? 입으로 천천히 이어 봐요." 조각을 이어서 소리 내게 한다. 모음을 틀에 놓지 못하는 학생에게는 "ㅏ는 길게 서 있어요. 자음 옆일까요, 아래일까요?"라고 묻는다. 기본 단계는 확인 뒤에야 합친 글자가 보이니 먼저 소리를 내어 보게 한다.',
            '자음과 모음 조각을 글자 틀에 모아 글자를 만들고 소리 내어 읽어요.', HGL(['ㄱ', 'ㄴ', 'ㄷ', 'ㅁ'], ['ㅏ', 'ㅗ', 'ㅜ', 'ㅣ']),
            [
              HG('자음 ㄱ과 모음 조각을 모아 \'가\'를 만들어 보세요.', '가', 0.1),
              HG('\'고\'를 만들어 보세요. 모음이 서 있는지 누워 있는지 보세요.', '고', 0.2),
              HG('\'미\'를 만들고, 소리 내어 읽어 보세요.', '미', 0.15),
              HG('\'두\'를 만들어 보세요.', '두', 0.2),
              HG('더 해 보기: \'너\'와 비슷한 글자 \'노\'를 만들어 보세요.', '노', 0.3, { extra: true }),
            ]),
        ],
        [
          { type: 'choice', prompt: '다음 조각 가운데 모음 조각은 어느 것일까요?', options: ['ㅂ', 'ㅜ', 'ㄹ'], answer: 1, difficulty: 0.15, explain: 'ㅜ는 긴 줄이 있는 모음 조각이에요. ㅂ과 ㄹ은 자음 조각이에요.' },
          { type: 'tool', tool: 'hangul', options: { consonants: ['ㄴ', 'ㅁ'], vowels: ['ㅗ', 'ㅏ'], slotHints: true }, prompt: '\'모\'를 만들어 보세요.', target: { syllable: '모' }, difficulty: 0.2 },
          MOOD,
        ]),
      worksheet: {
        title: '자음과 모음 조각',
        items: [
          { type: 'check', prompt: '모음 조각을 모두 골라 ✓ 하세요.', options: ['ㅏ', 'ㄴ', 'ㅗ', 'ㅁ'], answer: 'ㅏ, ㅗ' },
          { type: 'figure', prompt: '자음과 모음이 모이면 어떤 글자가 될까요? 아래에 쓰세요.', tool: 'hangul', options: {}, figures: [{ state: { cho: 'ㄱ', jung: 'ㅏ' }, caption: BLANK }, { state: { cho: 'ㄴ', jung: 'ㅜ' }, caption: BLANK }, { state: { cho: 'ㅁ', jung: 'ㅗ' }, caption: BLANK }], answer: '가, 누, 모' },
          { type: 'blank', prompt: '빈칸에 알맞은 글자를 쓰세요.', text: 'ㄷ + ㅣ = ___     ㅁ + ㅜ = ___', answer: '디, 무' },
          { type: 'short', prompt: '내 이름표에서 찾은 글자 하나를 쓰고, 조각 둘로 나누어 써 보세요.' },
        ],
        easy: { note: '조각을 하나씩 짚으며 소리 내요.', items: [
          { type: 'choice', prompt: '모음 조각에 ○ 하세요.', options: ['ㅏ', 'ㄴ'], answer: 'ㅏ' },
          { type: 'blank', prompt: '빈칸에 알맞은 글자를 쓰세요.', text: 'ㄱ + ㅏ = ___', answer: '가' },
          { type: 'blank', prompt: '빈칸에 알맞은 글자를 쓰세요.', text: 'ㅁ + ㅗ = ___', answer: '모' },
          { type: 'draw', prompt: '내가 만든 글자를 쓰고 그림으로 꾸며 보세요.' },
        ] },
      },
      differentiation: {
        easy: '나누기는 카드 넷으로 시작하고 맞게 놓은 카드에 초록 테두리가 생겨요. 글자 만들기 틀에는 자음·모음 자리 글씨가 있고, 모음을 들면 알맞은 자리가 깜박여요.',
        base: '카드를 모두 놓은 뒤 확인해요. 합친 글자는 확인을 누른 뒤에 보여서 소리를 먼저 떠올려요.',
        challenge: '내 글자 듣기 단추가 없어요. 더 해 보기(모음 조각 고르기, \'노\' 만들기)까지 풀어요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 글자를 통째로 한 덩어리로만 보아 조각이 있다는 것을 모른다 → 이름표를 손으로 가려 한 조각씩 보여 준다. ② ㅁ·ㅇ처럼 둥근 자음을 모음 칸에 둔다 → 모음은 긴 막대가 있는 조각이라고 말한다. ③ 모음을 자음 옆에만 붙인다 → 이 차시는 서 있는 모음(ㅏ·ㅣ)과 누운 모음(ㅗ·ㅜ)을 다 쓰지만 이유는 다음 시간에 다룬다.',
    }),

    // ───────────────────────── 2. 연습: 모음 자리 ─────────────────────────
    L(2, {
      title: '모음이 서 있는지 누워 있는지 보고 자리 찾아 글자 만들기',
      objective: '세로로 선 모음과 가로로 누운 모음을 나누고, 모음 모양에 맞게 자음 오른쪽이나 아래에 붙여 글자를 만들 수 있다.',
      standards: READ1,
      illustration: ART('a child placing paper vowel pieces beside and below a consonant piece on a wooden board, a little standing doll next to a lying doll', 'ㅏ 오른쪽  ㅗ 아래'),
      stages: ST(
        { teacher: '"우리 몸이 서 있으면 어떤 모양, 누우면 어떤 모양일까요?" 지난 시간 조각을 떠올리며 시연 단추로 ㅂ에 ㅏ가 붙는 모습과 ㅂ에 ㅗ가 붙는 모습을 견주어 보여 준다. "서 있는 모음은 옆에, 누운 모음은 아래에 붙어요."', student: '서 있는 모음과 누워 있는 모음은 어디에 붙을까요?', demo: { tool: 'hangul', options: { consonants: ['ㅂ'], vowels: ['ㅏ', 'ㅗ'], slotHints: true }, sequence: [{ syllable: '바' }, { syllable: '보' }] } },
        '"오늘 모음이 붙는 자리를 한 문장으로 말해 볼 사람?" 한두 명이 "서 있는 모음은 자음 옆, 누운 모음은 자음 아래"라고 말하게 한다. 출구 1번에서 ㅡ를 서 있는 모음으로 고른 학생에게는 ㅡ를 팔로 흉내 내 가로로 누웠음을 확인하게 한다.',
        [
          A('a1', '활동 1. 서 있는 모음과 누운 모음 나누기', 12, 'mindmap',
            '"이 모음은 서 있나요, 누워 있나요? 팔로 흉내 내 봐요." 카드를 놓기 전에 팔을 위아래로, 옆으로 쭉 뻗게 한다. ㅓ와 ㅕ를 누운 칸에 놓는 학생에게는 "긴 줄이 위아래로 뻗었나요, 옆으로 뻗었나요?"라고 묻는다.',
            '모음 카드를 서 있는 것과 누운 것으로 나누어요.', LV,
            [
              SORT('모음 카드를 서 있는 것과 누워 있는 것으로 나누어 보세요.', '모음의 모양', [{ id: 'st', label: '서 있어요' }, { id: 'li', label: '누워 있어요' }], [J('ㅏ', 'a'), J('ㅗ', 'o'), J('ㅓ', 'eo'), J('ㅜ', 'u')], { st: ['a', 'eo'], li: ['o', 'u'] }, 0.1,
                { levels: { easy: { prompt: '모음 카드 둘을 서 있는 것과 누워 있는 것으로 나누어 보세요.', toolOptions: { cards: [J('ㅏ', 'a'), J('ㅗ', 'o')] }, target: { sort: { st: ['a'], li: ['o'] } } } } }),
              SORT('긴 줄이 두 개 있는 모음도 나누어 보세요.', '짧은 줄이 둘인 모음', [{ id: 'st', label: '서 있어요' }, { id: 'li', label: '누워 있어요' }], [J('ㅑ', 'ya'), J('ㅛ', 'yo'), J('ㅕ', 'yeo'), J('ㅠ', 'yu')], { st: ['ya', 'yeo'], li: ['yo', 'yu'] }, 0.2),
              SORT('ㅣ와 ㅡ도 서 있는지 누워 있는지 나누어 보세요.', '줄 하나뿐인 모음', [{ id: 'st', label: '서 있어요' }, { id: 'li', label: '누워 있어요' }], [J('ㅣ', 'i'), J('ㅡ', 'eu')], { st: ['i'], li: ['eu'] }, 0.15,
                { conclude: 'ㅣ는 서 있고 ㅡ는 누워 있어요. 서 있는 모음은 자음 옆, 누운 모음은 자음 아래에 붙어요.' }),
              PICK('더 해 보기: 자음 아래에 붙는 모음을 모두 골라 보세요.', '자음 아래에 붙는 모음', [J('ㅏ', 'a'), J('ㅜ', 'u'), J('ㅣ', 'i'), J('ㅡ', 'eu'), J('ㅗ', 'o')], ['u', 'eu', 'o'], 0.3, { extra: true }),
            ]),
          A('a2', '활동 2. 모음 자리를 골라 글자 만들기', 14, 'hangul',
            '"모음을 들어 보세요. 서 있나요, 누워 있나요? 그러면 자음 옆일까요, 아래일까요?" 모음을 자리에 놓기 전에 말로 먼저 정하게 한다. 서 있는 모음을 아래에 놓은 학생에게는 "ㅣ가 아래에 누울 수 있을까요?"라고 묻는다. 틀리면 교구가 까닭을 말해 주니 그 말을 함께 읽는다.',
            '모음 모양을 보고 자음 옆이나 아래에 알맞게 붙여 글자를 만들어요.', HGL(['ㅁ', 'ㅂ', 'ㅅ'], ['ㅏ', 'ㅓ', 'ㅗ', 'ㅜ', 'ㅡ', 'ㅣ']),
            [
              HG('\'바\'를 만들어 보세요. 모음이 서 있어요.', '바', 0.1),
              HG('\'무\'를 만들어 보세요. 모음이 누워 있어요.', '무', 0.15,
                { predict: { q: 'ㅜ는 ㅁ의 어디에 붙을까요?', options: ['→ 오른쪽', '↓ 아래'], answer: 1 }, conclude: 'ㅜ는 누워 있어서 ㅁ 아래에 붙어요.' }),
              HG('\'버\'를 만들어 보세요.', '버', 0.2),
              HG('\'스\'를 만들고, 모음이 어디에 붙었는지 말해 보세요.', '스', 0.25),
              HG('더 해 보기: \'비\'를 만들어 보세요.', '비', 0.2, { extra: true }),
            ]),
        ],
        [
          { type: 'choice', prompt: '다음 모음 가운데 서 있는 모음은 어느 것일까요?', options: ['ㅗ', 'ㅓ', 'ㅡ'], answer: 1, difficulty: 0.15, explain: 'ㅓ는 긴 줄이 위아래로 서 있는 모음이에요.' },
          { type: 'tool', tool: 'hangul', options: { consonants: ['ㅁ', 'ㅅ'], vowels: ['ㅗ', 'ㅏ', 'ㅜ'], slotHints: true }, prompt: '\'소\'를 만들어 보세요.', target: { syllable: '소' }, difficulty: 0.2 },
          MOOD,
        ]),
      worksheet: {
        title: '모음이 붙는 자리',
        items: [
          { type: 'choice', prompt: '자음 아래에 붙는 모음에 ○ 하세요.', options: ['ㅏ', 'ㅜ', 'ㅣ'], answer: 'ㅜ' },
          { type: 'figure', prompt: '어떤 글자일까요? 아래에 쓰세요.', tool: 'hangul', options: {}, figures: [{ state: { cho: 'ㅂ', jung: 'ㅏ' }, caption: BLANK }, { state: { cho: 'ㅅ', jung: 'ㅗ' }, caption: BLANK }, { state: { cho: 'ㅁ', jung: 'ㅓ' }, caption: BLANK }], answer: '바, 소, 머' },
          { type: 'blank', prompt: '빈칸에 알맞은 글자를 쓰세요.', text: 'ㅅ + ㅜ = ___     ㅂ + ㅣ = ___', answer: '수, 비' },
          { type: 'draw', prompt: '서 있는 모음과 누운 모음을 몸으로 만든 모습을 그려 보세요.' },
        ],
        easy: { note: '서 있으면 옆, 누우면 아래!', items: [
          { type: 'choice', prompt: '누워 있는 모음에 ○ 하세요.', options: ['ㅗ', 'ㅏ'], answer: 'ㅗ' },
          { type: 'blank', prompt: '빈칸에 알맞은 글자를 쓰세요.', text: 'ㅂ + ㅏ = ___', answer: '바' },
          { type: 'blank', prompt: '빈칸에 알맞은 글자를 쓰세요.', text: 'ㅅ + ㅗ = ___', answer: '소' },
          { type: 'short', prompt: '서 있는 모음 하나를 써 보세요.' },
        ] },
      },
      differentiation: {
        easy: '나누기는 카드 두 장으로 시작하고, 글자 만들기에서 모음을 들면 알맞은 자리 테두리가 깜박여요.',
        base: '모음 네 장을 나누고, 글자 만들기는 합친 글자를 확인 뒤에 봐요.',
        challenge: 'ㅑ·ㅛ 같은 모음과 ㅣ·ㅡ까지 나누고, 더 해 보기(아래에 붙는 모음 고르기, \'비\' 만들기)를 풀어요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 모음 모양과 자리를 따로 외워 서로 연결하지 못한다 → "서 있으니 옆, 누웠으니 아래"를 손짓과 함께 말한다. ② ㅓ를 ㅏ와 같은 모양으로 보고 방향만 틀린다 → 짧은 줄이 자음 쪽을 보는지 확인한다(자리 문제가 아니라 모양 문제). ③ ㅡ를 아래가 아니라 오른쪽에 놓는다 → 교구가 까닭을 말해 주므로 그 문장을 소리 내어 읽게 한다.',
    }),

    // ───────────────────────── 3. 핵심: 소리 듣고 글자 만들기 ─────────────────────────
    L(3, {
      title: '들려주는 소리에 맞는 글자 만들고 첫소리가 같은 글자 고르기',
      objective: '선생님이 들려주는 글자 소리를 듣고 알맞은 글자를 만들며, 첫소리가 같은 글자를 골라 소리 내어 읽을 수 있다.',
      standards: READ1,
      illustration: ART('a child holding a paper ear-shaped card and listening to a teacher while paper letters float around', '[자] [지] [주]'),
      stages: ST(
        { teacher: '"눈을 감고 선생님 소리를 들어 봐요. [자]." 소리만 듣고 손가락으로 공중에 조각을 그려 보게 한다. 시연 단추로 ㅈ과 ㅏ가 모여 \'자\'가 되는 모습을 보여 주며 "소리를 들으면 글자 모양이 떠올라요."', student: '소리를 잘 듣고 글자를 만들어 봐요.', demo: { tool: 'hangul', options: { consonants: ['ㅈ'], vowels: ['ㅏ', 'ㅣ'], slotHints: true }, sequence: [{ syllable: '자' }] } },
        '"오늘 가장 어려웠던 소리는 어떤 소리였나요?" 한두 명이 말하면 그 소리를 모두 따라 읽어 본다. 출구 1번에서 [주]에 ㅜ 대신 ㅗ를 고른 학생은 입 모양(입술이 앞으로 나오는지)을 거울로 견주게 한다.',
        [
          A('a1', '활동 1. 소리를 듣고 글자 만들기', 14, 'hangul',
            '"문제 듣기 단추를 눌러 소리를 들어 봐요. 처음 소리는 무엇이고, 가운데 소리는 무엇일까요?" 교구가 읽어 주는 소리가 작으면 교사가 직접 읽어 준다. ㅏ와 ㅓ를 헷갈리는 학생에게는 "입을 크게 벌리는 소리일까요, 작게 벌리는 소리일까요?"라고 묻는다.',
            '소리를 듣고 들은 글자를 만들어요. 소리가 안 나면 선생님이 읽어 줘요.', { easy: { consonants: ['ㅈ', 'ㅊ', 'ㅋ'], vowels: ['ㅏ', 'ㅓ', 'ㅜ', 'ㅣ'], listenTarget: true, slotHints: true, slotGuide: true }, base: { consonants: ['ㅈ', 'ㅊ', 'ㅋ'], vowels: ['ㅏ', 'ㅓ', 'ㅜ', 'ㅣ'], listenTarget: true, revealAfterCheck: true }, challenge: { consonants: ['ㅈ', 'ㅊ', 'ㅋ'], vowels: ['ㅏ', 'ㅓ', 'ㅜ', 'ㅣ'], listenTarget: true, speak: false, revealAfterCheck: true } },
            [
              HG('첫째 소리를 듣고, 들은 글자를 만들어 보세요.', '자', 0.1),
              HG('둘째 소리를 듣고, 들은 글자를 만들어 보세요.', '치', 0.2),
              HG('셋째 소리를 듣고, 들은 글자를 만들어 보세요. 입술 모양도 느껴 봐요.', '주', 0.25),
              HG('넷째 소리를 듣고, 들은 글자를 만들어 보세요.', '커', 0.3),
              HG('더 해 보기: 다섯째 소리를 듣고 글자를 만들어 보세요.', '지', 0.3, { extra: true }),
            ]),
          A('a2', '활동 2. 첫소리가 같은 글자 고르기', 12, 'mindmap',
            '"소 그리고 사. 처음 나는 소리가 같을까요, 다를까요?" 입 모양을 거울처럼 따라 하며 처음 소리를 길게 낸다. 모음만 같은 글자를 고르는 학생에게는 "끝소리 말고 처음 소리만 들어 봐요"라고 말한다.',
            '처음 나는 소리가 같은 글자 카드를 골라요.', LV,
            [
              PICK('[사]와 처음 소리가 같은 글자를 모두 골라 보세요.', '[사]와 같은 첫소리', [C('s1', '소', { big: '소' }), C('b1', '보', { big: '보' }), C('s2', '수', { big: '수' }), C('m1', '미', { big: '미' })], ['s1', 's2'], 0.15),
              PICK('[나]와 처음 소리가 같은 글자를 모두 골라 보세요.', '[나]와 같은 첫소리', [C('n1', '너', { big: '너' }), C('d1', '다', { big: '다' }), C('n2', '누', { big: '누' }), C('r1', '라', { big: '라' }), C('n3', '니', { big: '니' })], ['n1', 'n2', 'n3'], 0.2,
                { conclude: '글자가 달라도 처음 소리가 같을 수 있어요. ㄴ으로 시작하면 너·누·니가 같은 첫소리예요.' }),
              PICK('[하]와 처음 소리가 같은 글자를 모두 골라 보세요.', '[하]와 같은 첫소리', [C('h1', '허', { big: '허' }), C('g1', '고', { big: '고' }), C('h2', '후', { big: '후' }), C('j1', '조', { big: '조' })], ['h1', 'h2'], 0.25),
              SORT('첫소리가 ㅂ인 글자와 ㅍ인 글자로 나누어 보세요.', '첫소리 견주기', [{ id: 'b', label: 'ㅂ으로 시작해요' }, { id: 'p', label: 'ㅍ으로 시작해요' }], [C('b1', '바', { big: '바' }), C('p1', '파', { big: '파' }), C('b2', '부', { big: '부' }), C('p2', '푸', { big: '푸' })], { b: ['b1', 'b2'], p: ['p1', 'p2'] }, 0.3, { extra: true }),
            ]),
        ],
        [
          { type: 'tool', tool: 'hangul', options: { consonants: ['ㅈ', 'ㅊ'], vowels: ['ㅏ', 'ㅜ', 'ㅓ'], listenTarget: true }, prompt: '들은 글자를 만들어 보세요.', target: { syllable: '추' }, difficulty: 0.25 },
          CH('[무]와 처음 소리가 같은 글자는 어느 것일까요?', ['마', '두', '수'], 0, '[무]와 [마]는 둘 다 입술을 다물며 시작하는 ㅁ 소리로 시작해요.', 0.2),
          MOOD,
        ]),
      worksheet: {
        title: '소리와 글자',
        items: [
          { type: 'choice', prompt: '선생님이 [치]라고 읽었어요. 알맞은 글자에 ○ 하세요.', options: ['지', '치', '키'], answer: '치' },
          { type: 'figure', prompt: '어떤 글자일까요? 소리 내어 읽고 아래에 쓰세요.', tool: 'hangul', options: {}, figures: [{ state: { cho: 'ㅈ', jung: 'ㅏ' }, caption: BLANK }, { state: { cho: 'ㅋ', jung: 'ㅜ' }, caption: BLANK }, { state: { cho: 'ㅊ', jung: 'ㅓ' }, caption: BLANK }], answer: '자, 쿠, 처' },
          { type: 'check', prompt: '[고]와 처음 소리가 같은 글자를 모두 골라 ✓ 하세요.', options: ['거', '노', '구', '도'], answer: '거, 구' },
          { type: 'short', prompt: '처음 소리가 같은 글자 두 개를 찾아 쓰세요.' },
        ],
        easy: { note: '소리 내어 읽고 입 모양을 느껴요.', items: [
          { type: 'choice', prompt: '선생님이 [자]라고 읽었어요. 알맞은 글자에 ○ 하세요.', options: ['자', '차'], answer: '자' },
          { type: 'blank', prompt: '빈칸에 알맞은 글자를 쓰세요.', text: 'ㅊ + ㅣ = ___', answer: '치' },
          { type: 'choice', prompt: '[소]와 처음 소리가 같은 글자에 ○ 하세요.', options: ['사', '마'], answer: '사' },
          { type: 'short', prompt: '소리 내어 읽은 글자 하나를 써 보세요.' },
        ] },
      },
      differentiation: {
        easy: '글자 만들기의 조각이 ㅈ·ㅊ·ㅋ, ㅏ·ㅓ·ㅜ·ㅣ로 적고, 자리 안내가 있어요. 첫소리 고르기는 카드가 맞는 칸에 들어가면 초록 테두리가 생겨요.',
        base: '소리를 듣고 만든 글자는 확인 뒤에 보여서 스스로 소리를 떠올려요.',
        challenge: '내 글자 듣기 단추가 없고, 더 해 보기(\'지\' 만들기, ㅂ과 ㅍ 나누기)까지 풀어요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 비슷한 소리 ㅈ·ㅊ·ㅋ을 구별하지 못한다 → 손바닥을 입 앞에 대어 바람이 센지(ㅊ·ㅋ) 약한지(ㅈ) 느끼게 한다. ② 소리만 듣고는 모음을 정하지 못한다 → 입 크기를 거울로 확인한다. ③ 교구가 소리를 내지 못하는 기기가 있다 → 교사가 읽어 주거나 화면 글자 안내를 쓴다. 이 차시의 두 번째 활동은 첫소리 같음을 소리로 판단하는 것이지 글자 모양 맞추기가 아니다.',
    }),

    // ───────────────────────── 4. 핵심: 낱말 완성 ─────────────────────────
    L(4, {
      title: '앞 글자를 보고 뒤 글자를 만들어 두 글자 낱말 완성하기',
      objective: '그림 단서를 읽고 낱말의 빠진 글자를 만들며, 글자 카드를 말한 차례대로 놓아 낱말을 완성할 수 있다.',
      standards: READ1,
      illustration: ART('a butterfly, a hat and a baby drawn as paper cut-outs, each with one letter card missing from its name tag', '나 ?   모 ?'),
      stages: ST(
        { teacher: '"나비를 소리 내어 천천히 말해 봐요. 몇 번 입을 열었나요?" 두 번 열었다는 것을 확인하고, 시연 단추로 \'나\' 다음에 \'비\'가 들어가 낱말이 되는 모습을 보여 준다. "글자가 모이면 낱말이 돼요. 낱말은 뜻이 있는 말이에요."', student: '글자 하나가 빠졌어요. 빠진 글자를 만들어 낱말을 완성해 봐요.', demo: { tool: 'hangul', options: { consonants: ['ㅂ'], vowels: ['ㅣ'], slotHints: true, wordSoFar: '나' }, sequence: [{ syllable: '비' }] } },
        '"오늘 완성한 낱말 가운데 하나를 짝에게 천천히 읽어 줄까요?" 두 번째 글자가 어디에 오는지 손가락으로 짚으며 읽는다. 출구 2번에서 \'모자\'를 \'자모\'로 놓은 학생은 낱말 소리를 입으로 말하며 앞에서 나는 글자부터 놓게 한다.',
        [
          A('a1', '활동 1. 빠진 글자 만들어 낱말 완성하기', 13, 'hangul',
            '"앞 글자는 정해졌어요. 뜻을 읽고 뒤 글자를 소리 내어 짐작해 봐요." 낱말을 먼저 입으로 말하게 한 뒤 조각을 놓게 한다. 앞 글자와 같은 글자를 또 만드는 학생에게는 "낱말을 소리 내 보면 두 글자가 같은 소리일까요?"라고 묻는다.',
            '낱말의 앞 글자는 정해져 있어요. 뜻을 읽고 빠진 뒤 글자를 만들어요.', HGL(['ㄴ', 'ㅂ', 'ㅁ', 'ㅈ', 'ㅇ', 'ㄱ'], ['ㅏ', 'ㅣ', 'ㅜ', 'ㅠ', 'ㅗ']),
            [
              HG('낱말의 앞 글자는 \'나\'예요. 꽃에 앉는 날개 달린 곤충이 되도록 빈 글자를 만들어 보세요.', '비', 0.1, { toolOptions: { wordSoFar: '나' } }),
              HG('낱말의 앞 글자는 \'모\'예요. 머리에 쓰는 물건이 되도록 빈 글자를 만들어 보세요.', '자', 0.15, { toolOptions: { wordSoFar: '모' } }),
              HG('낱말의 앞 글자는 \'아\'예요. 엄마 품에서 자라는 작은 사람이 되도록 빈 글자를 만들어 보세요.', '기', 0.2, { toolOptions: { wordSoFar: '아' } }),
              HG('낱말의 앞 글자는 \'우\'예요. 소에서 얻는 하얀 마실 것이 되도록 빈 글자를 만들어 보세요.', '유', 0.3, { toolOptions: { wordSoFar: '우' } }),
              HG('더 해 보기: 낱말의 앞 글자는 \'바\'예요. 다리에 입는 옷이 되도록 빈 글자를 만들어 보세요.', '지', 0.25, { extra: true, toolOptions: { wordSoFar: '바' } }),
            ]),
          A('a2', '활동 2. 글자 카드를 차례대로 놓아 낱말 만들기', 13, 'story',
            '"낱말을 입으로 먼저 말하고, 처음 나는 소리가 나는 글자 카드를 첫째 칸에 놓아요." 낱말을 천천히 두세 번 말하게 한다. 카드 순서를 바꿔 놓은 학생에게는 "그 낱말을 소리 내어 읽어 볼까요? 읽은 소리가 맞나요?"라고 되묻는다.',
            '낱말을 소리 내어 말한 차례대로 글자 카드를 놓아요.', LV,
            [
              ORDER('낱말 [나무]를 말한 차례대로 글자 카드를 놓아 보세요.', [C('na', '나', { big: '나' }), C('mu', '무', { big: '무' })], ['na', 'mu'], 0.1),
              ORDER('낱말 [시소]를 말한 차례대로 글자 카드를 놓아 보세요.', [C('si', '시', { big: '시' }), C('so', '소', { big: '소' })], ['si', 'so'], 0.15),
              ORDER('낱말 [고구마]를 말한 차례대로 글자 카드 셋을 놓아 보세요.', [C('go', '고', { big: '고' }), C('gu', '구', { big: '구' }), C('ma', '마', { big: '마' })], ['go', 'gu', 'ma'], 0.25,
                { conclude: '낱말은 말하는 차례대로 글자를 놓아서 읽어요.' }),
              ORDER('낱말 [아버지]를 말한 차례대로 글자 카드 셋을 놓아 보세요.', [C('a', '아', { big: '아' }), C('bo', '버', { big: '버' }), C('ji', '지', { big: '지' })], ['a', 'bo', 'ji'], 0.3),
              ORDER('더 해 보기: 낱말 [어머니]를 말한 차례대로 글자 카드 셋을 놓아 보세요.', [C('eo', '어', { big: '어' }), C('meo', '머', { big: '머' }), C('ni', '니', { big: '니' })], ['eo', 'meo', 'ni'], 0.3, { extra: true }),
            ]),
        ],
        [
          { type: 'tool', tool: 'hangul', options: { consonants: ['ㄱ', 'ㅅ'], vowels: ['ㅏ', 'ㅣ', 'ㅜ'], slotHints: true, wordSoFar: '거' }, prompt: '낱말의 앞 글자는 \'거\'예요. 가까운 곳을 가리키는 말이 되도록 빈 글자를 만들어 보세요.', target: { syllable: '기' }, difficulty: 0.3 },
          CH('낱말 [모자]를 읽는 차례에 맞게 놓은 것은 어느 것일까요?', ['모 → 자', '자 → 모'], 0, '낱말은 말하는 차례대로 앞 글자부터 읽어요.', 0.15),
          MOOD,
        ]),
      worksheet: {
        title: '글자가 모여 낱말이 돼요',
        items: [
          { type: 'figure', prompt: '빠진 글자를 쓰세요. (앞 글자는 나, 날개 달린 곤충)', tool: 'hangul', options: {}, figures: [{ state: { cho: 'ㅂ', jung: 'ㅣ' }, caption: '나 (      )' }], answer: '비 (나비)' },
          { type: 'blank', prompt: '두 글자를 이어 낱말을 쓰세요.', text: '아 + 기 = ______     모 + 자 = ______', answer: '아기, 모자' },
          { type: 'choice', prompt: '[우유]에서 첫째 글자에 ○ 하세요.', options: ['우', '유'], answer: '우' },
          { type: 'check', prompt: '두 글자 낱말을 모두 골라 □에 ✓ 하세요.', options: ['나무', '고구마', '시소', '아버지'], answer: '나무, 시소' },
        ],
        easy: { note: '낱말을 소리 내어 말하고 글자를 이어요.', items: [
          { type: 'blank', prompt: '두 글자를 이어 낱말을 쓰세요.', text: '나 + 비 = ______', answer: '나비' },
          { type: 'choice', prompt: '[아기]에서 첫째 글자에 ○ 하세요.', options: ['아', '기'], answer: '아' },
          { type: 'blank', prompt: '두 글자를 이어 낱말을 쓰세요.', text: '모 + 자 = ______', answer: '모자' },
          { type: 'draw', prompt: '내가 읽은 낱말 하나를 쓰고 그림으로 그려 보세요.' },
        ] },
      },
      differentiation: {
        easy: '앞 글자를 보고 뒤 글자만 만들면 되고, 틀에 자리 글씨가 있어요. 글자 카드 놓기는 맞는 칸에 놓으면 초록 테두리가 생겨요.',
        base: '낱말을 만든 뒤 확인을 누르고, 글자 카드는 모두 놓은 뒤 확인해요.',
        challenge: '내 글자 듣기 단추가 없고, 더 해 보기(\'바지\' 완성, \'어머니\' 카드 놓기)까지 풀어요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 낱말을 글자 하나씩 따로 읽고 이어 읽지 못한다 → 낱말을 손뼉으로 두 번 치며 이어 읽게 한다. ② 뜻을 읽지 않고 아무 글자나 만든다 → 그림 낱말을 먼저 말로 하게 한다. ③ 글자 카드 순서를 오른쪽에서 왼쪽으로 놓는다 → 읽는 방향이 왼쪽에서 오른쪽이라고 손가락으로 따라 짚는다. 힌트가 필요한 학생에게는 낱말의 뜻을 한 번 더 말해 준다.',
    }),

    // ───────────────────────── 5. 핵심: 그림과 낱말 읽기 ─────────────────────────
    L(5, {
      title: '그림 단서와 뜻 단서로 알맞은 낱말 카드 찾아 읽기',
      objective: '그림과 낱말 뜻을 단서로 알맞은 낱말 카드를 찾아 짝지어 읽을 수 있다.',
      standards: READ1,
      illustration: ART('a paper tree, a sun and a little bird each holding a small word card in a bright classroom picture', '나무  해  새'),
      stages: ST(
        { teacher: '"그림을 보고 이 그림의 이름 카드를 찾아봐요." 칠판에 나무 그림을 붙이고 카드 세 장 가운데 알맞은 카드를 함께 찾는다. "그림 단서도 있고, 글자 단서도 있어요. 둘을 함께 보면 읽기가 쉬워져요."', student: '그림과 낱말 카드를 이어서 읽어 봐요.', demo: { tool: 'mindmap', options: { mode: 'match', topic: '그림과 낱말', shuffle: false, slots: [{ id: 'p1', label: '그림 ①', motif: 'tree' }], cards: [{ id: 'tree', text: '나무' }, { id: 'bird', text: '새' }] }, sequence: [{ match: { p1: 'tree' } }] } },
        '"오늘 어떤 단서가 읽기에 가장 도움이 되었나요? 그림이었나요, 뜻 말이었나요?" 두세 명이 고른 단서를 말한다. 출구 1번에서 \'해\'와 \'새\'를 바꾼 학생에게는 그림을 다시 보고 첫 글자의 모양을 짚으며 읽게 한다.',
        [
          A('a1', '활동 1. 그림과 낱말 카드 잇기', 13, 'mindmap',
            '"그림 이름을 소리 내어 말한 뒤 카드의 글자를 읽어 봐요." 둘이 같은 소리인지 확인하게 한다. 해와 새를 바꿔 놓는 학생에게는 "하늘에서 환하게 빛나는 것은 무엇이지요?"라고 뜻으로 되짚게 한다.',
            '그림과 알맞은 낱말 카드를 이어요. 소리 내어 읽고 확인해요.', LV,
            [
              MATCH('그림과 알맞은 낱말 카드를 이어 보세요.', '그림과 낱말', [{ id: 'p1', label: '그림 ①', motif: 'tree' }, { id: 'p2', label: '그림 ②', motif: 'sun' }], [C('tree', '나무'), C('sun', '해'), C('bird', '새')], { p1: 'tree', p2: 'sun' }, 0.1),
              MATCH('그림 둘에 알맞은 낱말 카드를 이어 보세요.', '그림과 낱말', [{ id: 'p1', label: '그림 ①', motif: 'bird' }, { id: 'p2', label: '그림 ②', motif: 'sun' }], [C('bird', '새'), C('sun', '해'), C('bf', '나비')], { p1: 'bird', p2: 'sun' }, 0.15),
              MATCH('그림 셋에 알맞은 낱말 카드를 이어 보세요. 헷갈리는 카드가 하나 더 있어요.', '그림과 낱말', [{ id: 'p1', label: '그림 ①', motif: 'tree' }, { id: 'p2', label: '그림 ②', motif: 'bird' }, { id: 'p3', label: '그림 ③', motif: 'sun' }], [C('tree', '나무'), C('bird', '새'), C('sun', '해'), C('bf', '나비')], { p1: 'tree', p2: 'bird', p3: 'sun' }, 0.25,
                { conclude: '그림 이름을 소리 내어 말하고 글자를 읽으면 알맞은 카드를 찾을 수 있어요.' }),
              PICK('더 해 보기: 하늘에서 볼 수 있는 것의 낱말 카드를 모두 골라 보세요.', '하늘에 있어요', [C('sun', '해'), C('bird', '새'), C('tree', '나무'), C('pants', '바지')], ['sun', 'bird'], 0.3, { extra: true }),
            ]),
          A('a2', '활동 2. 뜻을 읽고 알맞은 낱말 찾기', 13, 'mindmap',
            '"먼저 뜻 말을 읽고, 어울리는 낱말 카드가 무엇일지 짐작해 봐요." 짐작한 낱말을 입으로 말한 뒤 카드를 찾게 한다. \'모자\'와 \'구두\'를 바꾼 학생에게는 "발에 신는 것과 머리에 쓰는 것을 몸으로 해 볼까요?"라고 말한다.',
            '뜻을 읽고 알맞은 낱말 카드를 이어요.', LV,
            [
              MATCH('뜻에 알맞은 낱말 카드를 이어 보세요.', '뜻과 낱말', [{ id: 'c1', label: '머리에 써요' }, { id: 'c2', label: '발에 신어요' }], [C('hat', '모자'), C('shoes', '구두'), C('pants', '바지')], { c1: 'hat', c2: 'shoes' }, 0.15),
              MATCH('뜻에 알맞은 낱말 카드를 이어 보세요.', '뜻과 낱말', [{ id: 'c1', label: '다리에 입어요' }, { id: 'c2', label: '하얗고 마셔요' }], [C('pants', '바지'), C('milk', '우유'), C('hat', '모자')], { c1: 'pants', c2: 'milk' }, 0.2),
              MATCH('뜻 셋에 알맞은 낱말 카드를 이어 보세요. 헷갈리는 카드가 하나 더 있어요.', '뜻과 낱말', [{ id: 'f1', label: '꽃에 앉아요' }, { id: 'f2', label: '엄마 품에서 자라요' }, { id: 'f3', label: '둘이 올라갔다 내려가요' }], [C('bf', '나비'), C('baby', '아기'), C('seesaw', '시소'), C('lion', '사자')], { f1: 'bf', f2: 'baby', f3: 'seesaw' }, 0.3,
                { conclude: '낱말 뜻을 알면 글자를 읽을 때 더 쉽게 알아볼 수 있어요.' }),
              PICK('더 해 보기: 몸에 입거나 쓰거나 신는 것의 낱말 카드를 모두 골라 보세요.', '몸에 걸쳐요', [C('hat', '모자'), C('pants', '바지'), C('milk', '우유'), C('shoes', '구두'), C('seesaw', '시소')], ['hat', 'pants', 'shoes'], 0.3, { extra: true }),
            ]),
        ],
        [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '그림과 낱말', slots: [{ id: 'p1', label: '그림 ①', motif: 'sun' }, { id: 'p2', label: '그림 ②', motif: 'bird' }], cards: [C('sun', '해'), C('bird', '새'), C('tree', '나무')] }, prompt: '그림과 알맞은 낱말 카드를 이어 보세요. 그림이 바뀌었어요.', target: { match: { p1: 'sun', p2: 'bird' } }, difficulty: 0.15 },
          CH('낱말 뜻이 \'머리에 써요\'일 때 알맞은 낱말은 어느 것일까요?', ['모자', '구두', '바지'], 0, '머리에 쓰는 물건은 모자예요. 구두는 발에, 바지는 다리에 입어요.', 0.2),
          MOOD,
        ]),
      worksheet: {
        title: '그림과 뜻으로 낱말 찾기',
        items: [
          { type: 'choice', prompt: '하늘에서 환하게 빛나는 것의 낱말에 ○ 하세요.', options: ['나무', '해', '새'], answer: '해' },
          { type: 'check', prompt: '머리·발·다리에 걸치는 것을 모두 골라 □에 ✓ 하세요.', options: ['모자', '시소', '구두', '바지'], answer: '모자, 구두, 바지' },
          { type: 'blank', prompt: '뜻에 알맞은 낱말을 쓰세요.', text: '꽃에 앉는 날개 달린 곤충 → ______', answer: '나비' },
          { type: 'draw', prompt: '내가 읽은 낱말 가운데 하나를 쓰고 그림으로 그려 보세요.' },
        ],
        easy: { note: '그림과 뜻을 먼저 말로 해 봐요.', items: [
          { type: 'choice', prompt: '나뭇잎이 달린 것의 낱말에 ○ 하세요.', options: ['나무', '새'], answer: '나무' },
          { type: 'choice', prompt: '발에 신는 것의 낱말에 ○ 하세요.', options: ['구두', '모자'], answer: '구두' },
          { type: 'blank', prompt: '낱말을 따라 쓰세요.', text: '아기 → ______', answer: '아기' },
          { type: 'draw', prompt: '좋아하는 낱말 하나를 그림으로 그려 보세요.' },
        ] },
      },
      differentiation: {
        easy: '카드가 알맞은 칸에 놓이면 초록 테두리가 생기고, 틀린 칸에 놓으면 까닭을 말한 뒤 돌아와요. 그림 둘부터 시작해요.',
        base: '카드를 모두 이은 뒤 확인을 눌러 스스로 고쳐요.',
        challenge: '헷갈리는 카드가 더 나오고, 더 해 보기(하늘에 있는 것, 몸에 걸치는 것 고르기)까지 풀어요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 글자를 읽지 않고 그림만 보고 아무 카드나 놓는다 → 카드를 소리 내어 읽은 뒤에 놓게 한다. ② 낱말 뜻을 모른다(구두 같은 낱말) → 실물이나 그림을 보여 준다. ③ 비슷한 모양의 글자(해·새)를 헷갈린다 → 첫 글자 ㅎ과 ㅅ의 모양과 소리를 견준다. 모든 낱말은 받침이 없는 낱말로 골랐다.',
    }),

    // ───────────────────────── 7. 핵심: 짧은 글 읽고 이어질 일 짐작 ─────────────────────────
    L(7, {
      title: '짧은 글을 읽고 일어난 차례대로 놓은 뒤 이어질 일 짐작하기',
      objective: '짧은 글 속 문장을 읽고 일어난 차례대로 놓으며, 글을 읽고 이어질 일을 짐작해 말할 수 있다.',
      standards: READ2,
      illustration: ART('a paper rabbit stumbling on a path and a friendly fox helping it up, with small speech cards in the sky', '토끼가 가요.'),
      stages: ST(
        { teacher: '"토끼가 가요. 여우가 와요. 어떤 일이 먼저 일어났나요?" 시연 단추로 문장 카드 둘이 차례대로 놓이는 모습을 보여 준다. "글을 읽을 때 앞 문장과 뒤 문장이 이어진다는 것을 생각하면 다음 일도 짐작할 수 있어요."', student: '짧은 글을 읽고, 일어난 차례대로 놓아 봐요.', demo: { tool: 'story', options: { mode: 'order', shuffle: false, slots: ['첫째', '둘째'], cards: [{ id: 'a', text: '토끼가 가요.' }, { id: 'b', text: '여우가 와요.' }] }, sequence: [{ order: ['a', 'b'] }] } },
        '"오늘 읽은 글에서 이어질 일을 한 가지 짐작해 말해 볼 사람?" 짐작이 다양해도 글 속 단서를 말하게 한다. 출구 2번에서 \'날아가요\'를 고른 학생에게는 앞 문장에서 토끼가 어떤 일을 겪었는지 다시 읽어 보게 한다.',
        [
          A('a1', '활동 1. 일어난 차례대로 문장 놓기', 13, 'story',
            '"앞 문장을 다 읽고 나서 다음에 무슨 일이 일어날지 생각해 봐요." 문장을 소리 내어 읽은 뒤 놓게 한다. 순서를 거꾸로 놓은 학생에게는 "비가 그쳤는데 우산을 쓸까요? 먼저 일어난 일은 무엇이지요?"라고 묻는다.',
            '문장을 읽고 일어난 차례대로 놓아요.', LV,
            [
              ORDER('토끼가 만난 일을 읽고 일어난 차례대로 놓아 보세요.', [C('r1', '토끼가 가요.'), C('r2', '여우가 와요.'), C('r3', '토끼가 뛰어요.')], ['r1', 'r2', 'r3'], 0.1),
              ORDER('아기가 잠을 자는 글을 읽고 일어난 차례대로 놓아 보세요.', [C('b1', '아기가 잠을 자요.'), C('b2', '나비가 날아와요.'), C('b3', '아기가 눈을 떠요.')], ['b1', 'b2', 'b3'], 0.2),
              ORDER('비 오는 날 글을 읽고 일어난 차례대로 놓아 보세요.', [C('w1', '비가 와요.'), C('w2', '오리가 우산을 써요.'), C('w3', '비가 그쳐요.'), C('w4', '오리가 우산을 접어요.')], ['w1', 'w2', 'w3', 'w4'], 0.3,
                { conclude: '앞에서 일어난 일을 읽고 나면 다음 일을 알 수 있어요.' }),
              ORDER('더 해 보기: 아침 글을 읽고 일어난 차례대로 놓아 보세요.', [C('m1', '해가 떠요.'), C('m2', '아이가 일어나요.'), C('m3', '아이가 학교에 가요.')], ['m1', 'm2', 'm3'], 0.25, { extra: true }),
            ]),
          A('a2', '활동 2. 글 뒤에 이어질 일 짐작하기', 13, 'mindmap',
            '"이 글 뒤에 어떤 일이 이어질까요? 글에서 단서를 찾아봐요." 짐작이 나온 까닭을 한 문장으로 말하게 한다. 글과 상관없는 신나는 일을 고르는 학생에게는 "글에 그런 말이 나왔나요?"라고 되묻는다.',
            '글을 읽고 뒤에 이어질 일로 어울리는 것을 골라요.', LV,
            [
              PICK('\'토끼가 길에서 넘어졌어요.\' 뒤에 이어질 일로 어울리는 것을 모두 골라 보세요.', '이어질 일', [C('help', '친구가 일으켜 줘요.'), C('fly', '토끼가 하늘을 날아가요.'), C('cry', '토끼가 아파서 울어요.')], ['help', 'cry'], 0.15),
              PICK('\'해가 져서 하늘이 어두워졌어요.\' 뒤에 이어질 일로 어울리는 것을 모두 골라 보세요.', '이어질 일', [C('star', '별이 떠요.'), C('moon', '달이 떠요.'), C('noon', '한낮이 되어 환해져요.')], ['star', 'moon'], 0.2),
              MATCH('날씨 글을 읽고 알맞은 준비물 카드를 이어 보세요.', '날씨와 준비물', [{ id: 'rain', label: '비가 많이 와요.' }, { id: 'snow', label: '눈이 와서 추워요.' }], [C('umb', '우산을 써요.'), C('glove', '장갑을 껴요.'), C('fan', '선풍기를 켜요.')], { rain: 'umb', snow: 'glove' }, 0.25,
                { conclude: '글에 나온 날씨를 읽으면 어떤 준비를 할지 짐작할 수 있어요.' }),
              PICK('더 해 보기: \'아기가 울어요.\' 뒤에 이어질 일로 어울리는 것을 모두 골라 보세요.', '이어질 일', [C('milk', '엄마가 우유를 줘요.'), C('shoe', '아기가 구두를 신어요.'), C('hug', '엄마가 안아 줘요.')], ['milk', 'hug'], 0.3, { extra: true }),
            ]),
        ],
        [
          { type: 'tool', tool: 'story', options: { mode: 'order', slots: ['첫째', '둘째', '셋째'], cards: [C('s1', '구름이 모여요.'), C('s2', '비가 와요.'), C('s3', '무지개가 떠요.')] }, prompt: '문장을 읽고 일어난 차례대로 놓아 보세요.', target: { order: ['s1', 's2', 's3'] }, difficulty: 0.25 },
          CH('\'토끼가 넘어졌어요.\' 뒤에 이어질 일로 어울리는 것은 어느 것일까요?', ['친구가 도와줘요.', '토끼가 날아가요.', '비행기가 와요.'], 0, '넘어진 토끼를 친구가 도와주는 일이 앞 문장과 이어져요.', 0.2),
          MOOD,
        ]),
      worksheet: {
        title: '짧은 글 읽고 짐작하기',
        items: [
          { type: 'check', prompt: '\'비가 와요.\' 뒤에 이어질 일을 모두 골라 □에 ✓ 하세요.', options: ['우산을 써요.', '해가 비쳐요.', '물웅덩이가 생겨요.'], answer: '우산을 써요., 물웅덩이가 생겨요.' },
          { type: 'choice', prompt: '\'해가 떠요. 아이가 일어나요.\' 뒤에 이어질 일에 ○ 하세요.', options: ['아이가 학교에 가요.', '아이가 별을 봐요.'], answer: '아이가 학교에 가요.' },
          { type: 'table', prompt: '일어난 차례대로 번호를 쓰세요.', columns: ['문장', '번호'], cells: [['아기가 눈을 떠요.', ''], ['아기가 잠을 자요.', ''], ['나비가 날아와요.', '']] },
          { type: 'short', prompt: '내가 읽은 글 뒤에 이어질 일을 한 문장으로 써 보세요.' },
        ],
        easy: { note: '앞 문장을 읽고 뒤에 올 일을 생각해요.', items: [
          { type: 'choice', prompt: '\'비가 와요.\' 뒤에 이어질 일에 ○ 하세요.', options: ['우산을 써요.', '선풍기를 켜요.'], answer: '우산을 써요.' },
          { type: 'choice', prompt: '\'토끼가 울어요.\' 뒤에 이어질 일에 ○ 하세요.', options: ['친구가 도와줘요.', '하늘을 날아요.'], answer: '친구가 도와줘요.' },
          { type: 'blank', prompt: '문장을 따라 쓰세요.', text: '토끼가 가요. → ______', answer: '토끼가 가요.' },
          { type: 'draw', prompt: '이어질 일을 그림으로 그려 보세요.' },
        ] },
      },
      differentiation: {
        easy: '차례 놓기는 문장 둘로 시작해요. 카드가 맞게 놓이면 초록 테두리가 생기고, 틀리면 까닭을 말한 뒤 돌아와요.',
        base: '카드를 모두 놓은 뒤 확인을 눌러 스스로 고쳐요.',
        challenge: '문장이 넷인 글이 나오고, 더 해 보기(아침 글 차례, 아기가 울어요 뒤)까지 풀어요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 문장을 소리 내어 읽지 않고 그림 없이 순서를 정하지 못한다 → 카드를 손가락으로 짚으며 읽게 한다. ② 일이 일어난 차례와 말하는 차례를 헷갈린다 → 이 차시의 글은 모두 일어난 차례대로 쓰였다고 말한다. ③ 이어질 일을 짐작할 때 글과 상관없는 상상을 한다 → 글 속 단서 한 가지를 짚어 말하게 한다. 짐작은 정답이 하나가 아닐 수 있다는 것을 알려 준다.',
    }),

    // ───────────────────────── 8. 핵심: 글자·낱말 단서 확인 ─────────────────────────
    L(8, {
      title: '낱말 속 글자 단서로 낱말 가르고 야·여·요·유 글자 만들기',
      objective: '낱말에서 같은 글자를 찾아 낱말을 가르고, 이중모음 ㅑ·ㅕ·ㅛ·ㅠ로 글자를 만들어 읽을 수 있다.',
      standards: READ2,
      illustration: ART('a child sorting paper word cards by the letter they share, with a magnifying glass over one card', '나비  나무  다리'),
      stages: ST(
        { teacher: '"나비, 나무, 다리. 이 낱말들 가운데 같은 글자가 들어 있는 것은 무엇인가요?" 칠판에 세 낱말을 쓰고 첫 글자를 손가락으로 가리키게 한다. 시연 단추로 ㅇ과 ㅑ가 모여 \'야\'가 되는 모습을 보여 준다. "글자 단서를 찾으면 읽기가 쉬워져요."', student: '낱말 속에서 같은 글자를 찾아봐요.', demo: { tool: 'hangul', options: { consonants: ['ㅇ'], vowels: ['ㅏ', 'ㅑ'], slotHints: true, silentMark: true }, sequence: [{ syllable: '야' }] } },
        '"오늘 낱말을 읽을 때 어떤 단서가 도움이 되었나요?" 첫 글자나 끝 글자를 말한 학생을 칭찬하고 칠판에 정리한다. 출구 1번에서 \'다리\'를 \'나\'로 시작한다고 고른 학생에게는 ㄴ과 ㄷ의 모양을 견주게 한다.',
        [
          A('a1', '활동 1. 같은 글자로 낱말 가르기', 13, 'mindmap',
            '"낱말을 소리 내어 읽고, 첫 글자나 끝 글자가 같은 것끼리 모아 봐요." 낱말 카드를 손가락으로 짚으며 읽게 한다. 첫 글자가 아닌 가운데 글자만 보고 나누는 학생에게는 "어디에 있는 글자를 보고 있나요?"라고 묻는다.',
            '낱말 카드를 같은 글자끼리 나누어요.', LV,
            [
              SORT('첫 글자가 \'나\'인 낱말과 \'다\'인 낱말로 나누어 보세요.', '첫 글자 찾기', [{ id: 'na', label: '첫 글자가 나' }, { id: 'da', label: '첫 글자가 다' }], [C('nabi', '나비'), C('namu', '나무'), C('dari', '다리'), C('dasi', '다시')], { na: ['nabi', 'namu'], da: ['dari', 'dasi'] }, 0.15),
              SORT('끝 글자가 \'기\'인 낱말과 \'자\'인 낱말로 나누어 보세요.', '끝 글자 찾기', [{ id: 'gi', label: '끝 글자가 기' }, { id: 'ja', label: '끝 글자가 자' }], [C('geogi', '거기'), C('yeogi', '여기'), C('moja', '모자'), C('saja', '사자')], { gi: ['geogi', 'yeogi'], ja: ['moja', 'saja'] }, 0.2),
              PICK('낱말 속에 \'나\'가 들어 있는 낱말 카드를 모두 골라 보세요.', '\'나\'가 들어 있어요', [C('banana', '바나나'), C('nabi', '나비'), C('sonamu', '소나무'), C('ori', '오리'), C('moja', '모자')], ['banana', 'nabi', 'sonamu'], 0.3,
                { conclude: '글자 하나를 단서로 삼으면 여러 낱말을 쉽게 찾을 수 있어요.' }),
              PICK('더 해 보기: 글자가 두 개인 낱말 카드를 모두 골라 보세요.', '글자가 두 개예요', [C('namu', '나무'), C('gogu', '고구마'), C('agi', '아기'), C('eomeoni', '어머니')], ['namu', 'agi'], 0.3, { extra: true }),
            ]),
          A('a2', '활동 2. ㅇ과 모아 야·여·요·유 만들기', 13, 'hangul',
            '"ㅑ는 짧은 줄이 두 개 있고 [야]라고 소리 나요." 입 모양을 크게 하며 함께 읽는다. ㅏ와 ㅑ를 헷갈리는 학생에게는 "짧은 줄이 몇 개인가요?"라고 묻고, 소리가 [아]인지 [야]인지 입으로 말하게 한다.',
            'ㅇ과 모음 조각을 모아 글자를 만들어요. 짧은 줄이 몇 개인지 살펴요.', HGL(['ㅇ'], ['ㅏ', 'ㅑ', 'ㅓ', 'ㅕ', 'ㅗ', 'ㅛ', 'ㅜ', 'ㅠ']),
            [
              HG('ㅇ과 모음을 모아 \'야\'를 만들어 보세요. 짧은 줄이 둘 있는 모음이에요.', '야', 0.15),
              HG('\'여\'를 만들어 보세요.', '여', 0.2),
              HG('\'요\'를 만들어 보세요. 모음이 누워 있어요.', '요', 0.25),
              HG('\'유\'를 만들어 보세요.', '유', 0.3),
              HG('더 해 보기: \'오\'를 만들고 \'요\'와 소리를 견주어 보세요.', '오', 0.2, { extra: true }),
            ]),
        ],
        [
          { type: 'choice', prompt: '\'다리\'의 첫 글자와 같은 글자로 시작하는 낱말은 어느 것일까요?', options: ['다시', '나무', '모자'], answer: 0, difficulty: 0.2, explain: '\'다리\'와 \'다시\'는 둘 다 \'다\'로 시작해요.' },
          { type: 'tool', tool: 'hangul', options: { consonants: ['ㅇ'], vowels: ['ㅕ', 'ㅓ', 'ㅛ'], slotHints: true, silentMark: true }, prompt: '짧은 줄이 둘 있고 왼쪽에 붙는 모음으로 글자를 만들어 보세요.', target: { syllable: '여' }, difficulty: 0.3 },
          MOOD,
        ]),
      worksheet: {
        title: '글자 단서와 이중모음',
        items: [
          { type: 'check', prompt: '끝 글자가 \'자\'인 낱말을 모두 골라 □에 ✓ 하세요.', options: ['모자', '사자', '아기', '나비'], answer: '모자, 사자' },
          { type: 'figure', prompt: '어떤 글자일까요? 소리 내어 읽고 아래에 쓰세요.', tool: 'hangul', options: {}, figures: [{ state: { cho: 'ㅇ', jung: 'ㅑ' }, caption: BLANK }, { state: { cho: 'ㅇ', jung: 'ㅕ' }, caption: BLANK }, { state: { cho: 'ㅇ', jung: 'ㅠ' }, caption: BLANK }], answer: '야, 여, 유' },
          { type: 'choice', prompt: '짧은 줄이 둘이고 위로 나온 모음에 ○ 하세요.', options: ['ㅗ', 'ㅛ', 'ㅜ'], answer: 'ㅛ' },
          { type: 'short', prompt: '첫 글자가 같은 낱말 두 개를 찾아 쓰세요.' },
        ],
        easy: { note: '낱말을 소리 내어 읽고 글자를 짚어요.', items: [
          { type: 'choice', prompt: '첫 글자가 \'나\'인 낱말에 ○ 하세요.', options: ['나비', '다리'], answer: '나비' },
          { type: 'blank', prompt: '빈칸에 알맞은 글자를 쓰세요.', text: 'ㅇ + ㅑ = ___', answer: '야' },
          { type: 'blank', prompt: '빈칸에 알맞은 글자를 쓰세요.', text: 'ㅇ + ㅛ = ___', answer: '요' },
          { type: 'short', prompt: '끝 글자가 같은 낱말 하나를 써 보세요.' },
        ] },
      },
      differentiation: {
        easy: '낱말 나누기는 카드가 맞는 칸에 들어가면 초록 테두리가 생겨요. 글자 만들기는 ㅇ 아래 \'소리 없음\' 표시와 자리 안내가 있어요.',
        base: '카드를 모두 놓은 뒤 확인하고, 만든 글자는 확인 뒤에 보여요.',
        challenge: '내 글자 듣기 단추가 없고, 더 해 보기(글자 수 세기, \'오\' 만들기)까지 풀어요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 낱말 전체 모양으로만 읽어 낱말 속 글자를 따로 보지 못한다 → 낱말 위를 손가락으로 한 글자씩 짚는다. ② 첫 글자와 끝 글자를 혼동한다 → 첫째·끝 자리를 손으로 가리키며 말한다. ③ ㅑ와 ㅏ의 짧은 줄 수를 혼동한다 → 짧은 줄을 하나씩 손가락으로 짚어 센다. ㅇ은 첫소리에서 소리가 없다는 것은 지난 단원에서 배운 것을 짚어 준다.',
    }),

    // ───────────────────────── 9. 읽기 점검과 태도 ─────────────────────────
    L(9, {
      title: '읽다가 막힐 때 쓰는 방법 고르고 내 읽기 모습 돌아보기',
      objective: '읽다가 막혔을 때 도움이 되는 방법을 고르고, 오늘 내가 읽은 모습을 솔직하게 돌아볼 수 있다.',
      standards: READ2,
      illustration: ART('a child reading a picture book with a finger under each word while a paper question mark and a paper lightbulb float above', '천천히 다시!'),
      stages: ST(
        { teacher: '"책을 읽다가 모르는 글자가 나왔어요. 여러분은 어떻게 하나요?" 몇 명의 대답을 칠판에 붙이고, "읽다가 막히는 것은 잘못이 아니에요. 막혔을 때 쓰는 방법을 알면 돼요"라고 말한다. 시연 단추로 도움이 되는 방법 카드가 바구니에 들어가는 모습을 보여 준다.', student: '읽다가 막히면 어떻게 하면 좋을까요?', demo: { tool: 'mindmap', options: { mode: 'pick', topic: '읽다가 막혀요', shuffle: false, cards: [{ id: 'again', text: '천천히 다시 읽어요' }, { id: 'close', text: '책을 덮어 버려요' }] }, sequence: [{ pick: ['again'] }] } },
        '"오늘 내가 쓴 방법 가운데 가장 도움이 된 것은 무엇이었나요?" 두세 명이 말한다. 출구 1번에서 \'건너뛰어요\'를 고른 학생에게는 건너뛴 글자 때문에 글 뜻이 이어지지 않았던 경험을 떠올리게 한다. 마지막 자기 평가에서 \'아직\'을 고른 학생을 격려하고 눈여겨본다.',
        [
          A('a1', '활동 1. 막힐 때 도움이 되는 방법 가르기', 9, 'mindmap',
            '"읽다가 막혔을 때 이 방법은 도움이 될까요, 안 될까요?" 카드마다 소리 내어 읽고 몸짓으로 해 보게 한다. \'모르는 글자는 건너뛰어요\'를 도움이 된다고 고르는 학생에게는 "건너뛰고 읽으면 낱말 뜻을 알 수 있을까요?"라고 묻는다.',
            '읽기 방법 카드를 도움이 되는 것과 안 되는 것으로 나누어요.', LV,
            [
              SORT('읽다가 막혔을 때 도움이 되는 방법과 안 되는 방법으로 나누어 보세요.', '읽다가 막혀요', [{ id: 'yes', label: '도움이 돼요' }, { id: 'no', label: '도움이 안 돼요' }], [C('again', '천천히 다시 읽어요'), C('finger', '손가락으로 짚으며 읽어요'), C('skip', '모르는 글자는 건너뛰어요'), C('pic', '그림을 같이 봐요'), C('ask', '짝에게 물어봐요'), C('shut', '책을 덮어 버려요')], { yes: ['again', 'finger', 'pic', 'ask'], no: ['skip', 'shut'] }, 0.15,
                { levels: { easy: { prompt: '카드 네 장을 도움이 되는 방법과 안 되는 방법으로 나누어 보세요.', toolOptions: { cards: [C('again', '천천히 다시 읽어요'), C('skip', '모르는 글자는 건너뛰어요'), C('ask', '짝에게 물어봐요'), C('shut', '책을 덮어 버려요')] }, target: { sort: { yes: ['again', 'ask'], no: ['skip', 'shut'] } } } } }),
              SORT('ㅏ와 ㅓ가 헷갈려 읽기 어려울 때, 도움이 되는 방법과 안 되는 방법으로 나누어 보세요.', '글자가 헷갈려요', [{ id: 'yes', label: '도움이 돼요' }, { id: 'no', label: '도움이 안 돼요' }], [C('mouth', '입 모양을 보며 소리 내요'), C('short', '짧은 줄이 어느 쪽인지 다시 봐요'), C('guess', '아무 소리나 내요'), C('teacher', '선생님께 물어봐요')], { yes: ['mouth', 'short', 'teacher'], no: ['guess'] }, 0.2,
                { conclude: '헷갈릴 때는 천천히 다시 보거나 물어보면 읽기가 쉬워져요.' }),
              PICK('읽기 전에 준비하면 좋은 것을 모두 골라 보세요.', '읽기 준비', [C('sit', '바른 자세로 앉아요'), C('upside', '책을 거꾸로 들어요'), C('eyes', '눈으로 글자를 따라가요')], ['sit', 'eyes'], 0.25),
              PICK('더 해 보기: 글자를 정확히 읽는 데 도움이 되는 것을 모두 골라 보세요.', '정확히 읽기', [C('slow', '천천히 소리 내어 읽어요'), C('fast', '아무렇게나 빨리 읽어요'), C('point', '읽는 곳을 손가락으로 짚어요'), C('turn', '다른 곳을 보며 읽어요')], ['slow', 'point'], 0.3, { extra: true }),
            ]),
          A('a2', '활동 2. 읽다가 막혔을 때 어떻게 할까', 9, 'emotion',
            '"지우처럼 모르는 글자를 만나면 어떻게 할까요? 두 가지 가운데 하나를 골라 봐요." 고른 길의 결과를 함께 읽고 그때 기분이 어떨지 말하게 한다. 끼어들거나 포기하는 길을 고른 학생도 틀렸다고 하지 않고 결과를 읽으며 다시 생각하게 한다.',
            '이야기 속 친구가 되어 막혔을 때 할 일을 골라요.', LV,
            [
              { prompt: '지우가 읽다가 모르는 글자를 만났어요. 어떻게 하면 좋을까요?', toolOptions: { mode: 'branch', who: '지우', situation: '지우가 책을 읽다가 모르는 글자를 만났어요.', choices: [{ id: 'ask', text: '"이 글자는 어떻게 읽어요?" 하고 물어요', result: '짝이 알려 줘서 다시 읽을 수 있어요', mood: '고마움' }, { id: 'skip', text: '그 글자만 빼고 읽어요', result: '글이 무슨 뜻인지 알 수 없게 돼요', mood: '걱정', why: '글자 하나를 빼고 읽으면 낱말 뜻이 이어질까요?' }, { id: 'close', text: '책을 덮어 버려요', result: '읽던 이야기를 끝까지 알지 못해요', mood: '속상함', why: '책을 덮으면 이야기 끝을 알 수 있을까요?' }] }, target: { choice: 'ask' }, difficulty: 0.1 },
              { prompt: '민지는 책을 빨리 읽고 싶어서 글자를 건너뛰고 있어요. 어떻게 하면 좋을까요?', toolOptions: { mode: 'branch', who: '민지', situation: '민지가 빨리 끝내려고 읽는 줄을 눈으로만 휙휙 넘기고 있어요.', choices: [{ id: 'slow', text: '손가락으로 짚으며 천천히 읽어요', result: '글자를 하나도 놓치지 않고 읽어요', mood: '뿌듯함' }, { id: 'faster', text: '더 빨리 넘겨요', result: '읽은 것이 기억나지 않아요', mood: '걱정', why: '빨리 넘기면 내용이 머릿속에 남을까요?' }] }, target: { choice: 'slow' }, difficulty: 0.15 },
              { prompt: '준호가 짝이 틀리게 읽는 것을 들었어요. 어떻게 하면 좋을까요?', toolOptions: { mode: 'branch', who: '준호', situation: '짝이 낱말을 잘못 읽었어요.', choices: [{ id: 'kind', text: '"다시 한번 같이 읽어 볼까?" 하고 말해요', result: '짝이 웃으며 다시 읽어요', mood: '편안함' }, { id: 'laugh', text: '"틀렸다!" 하고 크게 웃어요', result: '짝이 얼굴이 빨개져서 입을 다물어요', mood: '속상함', why: '웃음소리를 들은 짝의 마음은 어떨까요?' }, { id: 'ignore', text: '모른 척해요', result: '짝은 틀린 줄 모르고 계속 틀리게 읽어요', mood: '걱정', why: '말하지 않으면 짝이 고칠 수 있을까요?' }] }, target: { choice: 'kind' }, difficulty: 0.2 },
            ]),
          A('a3', '활동 3. 오늘 내 읽기 모습 돌아보기', 8, 'emotion',
            '"오늘 읽은 내 모습을 떠올려 봐요. 정답은 없으니 솔직하게 눈금을 골라요." 잘한 곳을 하나 말하고 싶은 학생에게 말할 기회를 준다. 모두 \'잘해요\'만 고르는 학생에게는 "정말 모든 글자를 짚으며 읽었나요?"라고 되묻는다.',
            '오늘 읽을 때 내 모습에 알맞은 눈금을 골라요.', LV,
            [
              { prompt: '오늘 읽다가 막혔을 때 얼마나 도움을 청했나요? 솔직하게 골라요.', toolOptions: SELF('책을 읽다가 모르는 글자를 만났어요.', '편안함', '막혔을 때 얼마나 도움을 청했나요?'), target: { level: 'any' }, difficulty: 0.05, hints: SELF_HINTS },
              { prompt: '오늘 글자를 손가락으로 짚으며 얼마나 읽었나요? 솔직하게 골라요.', toolOptions: SELF('손가락으로 글자를 짚으며 읽었어요.', '뿌듯함', '손가락으로 얼마나 짚으며 읽었나요?'), target: { level: 'any' }, difficulty: 0.05, hints: SELF_HINTS },
              { prompt: '오늘 끝까지 포기하지 않고 읽은 마음은 얼마나 되나요? 솔직하게 골라요.', toolOptions: SELF('읽기 어려워도 끝까지 읽었어요.', '신남', '끝까지 읽은 마음이 얼마나 되나요?'), target: { level: 'any' }, difficulty: 0.05, hints: SELF_HINTS },
            ]),
        ],
        [
          CH('읽다가 모르는 글자를 만났을 때 가장 알맞은 것은 어느 것일까요?', ['그 글자만 건너뛰어요', '짝이나 선생님께 물어봐요', '책을 덮어 버려요'], 1, '모르는 글자는 건너뛰지 말고 물어서 알아내야 글의 뜻이 이어져요.', 0.15),
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '정확히 읽기', cards: [C('slow', '천천히 읽어요'), C('point', '손가락으로 짚어요'), C('quick', '눈을 감고 읽어요')] }, prompt: '글자를 정확히 읽는 데 도움이 되는 것을 모두 골라 보세요.', target: { pick: ['slow', 'point'] }, difficulty: 0.2 },
          MOOD,
        ]),
      worksheet: {
        title: '읽다가 막힐 때',
        items: [
          { type: 'check', prompt: '읽다가 막힐 때 도움이 되는 방법에 모두 ✓ 하세요.', options: ['천천히 다시 읽어요', '글자를 건너뛰어요', '짝에게 물어봐요', '손가락으로 짚어요'], answer: '천천히 다시 읽어요, 짝에게 물어봐요, 손가락으로 짚어요' },
          { type: 'choice', prompt: '짝이 틀리게 읽었을 때 알맞게 말한 것에 ○ 하세요.', options: ['틀렸다! 하고 웃어요', '다시 한번 같이 읽어 볼까? 하고 말해요'], answer: '다시 한번 같이 읽어 볼까? 하고 말해요' },
          { type: 'table', prompt: '오늘 내 모습에 ○ 하세요.', columns: ['내 모습', '아직', '조금', '잘해요'], cells: [['도움을 청했어요', '', '', ''], ['손가락으로 짚었어요', '', '', ''], ['끝까지 읽었어요', '', '', '']] },
          { type: 'short', prompt: '읽다가 막혔을 때 내가 쓸 방법 하나를 써 보세요.' },
        ],
        easy: { note: '정답은 없어요. 솔직하게 ○ 해요.', items: [
          { type: 'choice', prompt: '막혔을 때 도움이 되는 방법에 ○ 하세요.', options: ['짝에게 물어봐요', '책을 덮어요'], answer: '짝에게 물어봐요' },
          { type: 'choice', prompt: '도움이 되는 것에 ○ 하세요.', options: ['손가락으로 짚어요', '눈을 감아요'], answer: '손가락으로 짚어요' },
          { type: 'short', prompt: '오늘 내가 잘 읽은 낱말 하나를 써 보세요.' },
          { type: 'draw', prompt: '책을 읽는 내 모습을 그려 보세요.' },
        ] },
      },
      differentiation: {
        easy: '방법 나누기는 카드 네 장으로 시작하고, 이야기 고르기는 틀린 길을 고르면 까닭을 묻고 돌아와요.',
        base: '카드를 모두 놓은 뒤 확인하고, 이야기의 결과를 읽고 다시 생각해요.',
        challenge: '글자가 헷갈릴 때의 방법도 나누고, 더 해 보기(정확히 읽는 방법 고르기)까지 풀어요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 막혔을 때 건너뛰는 것이 빠른 방법이라고 생각한다 → 건너뛰면 뜻이 이어지지 않는 것을 직접 읽어 확인한다. ② 도움을 청하는 것을 부끄럽게 여긴다 → 교사도 모르는 낱말은 물어본다고 말해 준다. ③ 자기 평가에서 눈금을 모두 같은 곳에 놓는다 → 오늘 장면 하나를 떠올려 고르게 한다. 자기 평가는 정답이 없고 성적에 반영하지 않는다.',
    }),

    // ───────────────────────── 10. 자음 이름과 소릿값 ─────────────────────────
    L(10, {
      title: '자음 이름과 짝 짓고 그 자음으로 글자 만들기',
      objective: '자음 조각과 이름을 짝 짓고, 그 자음의 소리를 듣고 자음으로 시작하는 글자를 만들 수 있다.',
      standards: JAMO,
      illustration: ART('paper consonant pieces wearing little name tags and waving, standing in a row on a classroom shelf', 'ㄱ=기역'),
      stages: ST(
        { teacher: '"ㄱ의 이름은 기역이에요. 이름과 소리가 달라요. 소리는 [그]에 가까워요." 칠판에 자음 카드를 붙이고 이름을 따라 읽게 한다. 시연 단추로 ㄷ이 \'디귿\'이라는 이름 카드와 이어지는 모습을 보여 준다.', student: '자음마다 이름이 있어요. 이름을 찾아 이어 봐요.', demo: { tool: 'mindmap', options: { mode: 'match', topic: '자음 이름', shuffle: false, slots: [{ id: 'd', label: '디귿' }], cards: [{ id: 'dd', text: 'ㄷ', big: 'ㄷ' }, { id: 'rr', text: 'ㄹ', big: 'ㄹ' }] }, sequence: [{ match: { d: 'dd' } }] } },
        '"오늘 새로 알게 된 자음 이름 하나를 말해 볼까요?" 두세 명이 말하고 모두 따라 읽는다. 출구 1번에서 \'이응\'과 \'히읗\'을 바꾼 학생에게는 두 이름을 천천히 읽으며 입 모양을 견주게 한다.',
        [
          A('a1', '활동 1. 자음과 이름 이어 보기', 13, 'mindmap',
            '"이 조각의 이름은 무엇일까요? 이름을 입으로 먼저 말해 봐요." 카드마다 이름을 소리 내어 읽게 한다. 이름을 소리 그대로 [그], [느]로 쓰는 학생에게는 "이름은 두 글자로 말해요. 기역, 니은처럼요"라고 알려 준다.',
            '자음 카드와 알맞은 이름을 이어요. 이름을 소리 내어 읽어요.', LV,
            [
              MATCH('자음의 이름과 알맞은 카드를 이어 보세요.', '자음 이름', [{ id: 'g', label: '기역' }, { id: 'n', label: '니은' }], [J('ㄱ', 'g'), J('ㄴ', 'n'), J('ㅁ', 'm')], { g: 'g', n: 'n' }, 0.1),
              MATCH('자음의 이름과 알맞은 카드를 이어 보세요. 카드가 하나 더 있어요.', '자음 이름', [{ id: 'd', label: '디귿' }, { id: 'r', label: '리을' }, { id: 'm', label: '미음' }], [J('ㄷ', 'd'), J('ㄹ', 'r'), J('ㅁ', 'm'), J('ㅂ', 'b')], { d: 'd', r: 'r', m: 'm' }, 0.2),
              MATCH('자음의 이름과 알맞은 카드를 이어 보세요. 이름이 어려워요.', '자음 이름', [{ id: 'b', label: '비읍' }, { id: 's', label: '시옷' }, { id: 'ng', label: '이응' }], [J('ㅂ', 'b'), J('ㅅ', 's'), J('ㅇ', 'ng'), J('ㅈ', 'j')], { b: 'b', s: 's', ng: 'ng' }, 0.3,
                { conclude: '자음은 이름과 소리가 달라요. 이름은 두 글자로 말해요.' }),
              MATCH('더 해 보기: 자음의 이름과 알맞은 카드를 이어 보세요.', '자음 이름', [{ id: 'j', label: '지읒' }, { id: 'h', label: '히읗' }], [J('ㅈ', 'j'), J('ㅎ', 'h'), J('ㅇ', 'ng')], { j: 'j', h: 'h' }, 0.3, { extra: true }),
            ]),
          A('a2', '활동 2. 이름을 알게 된 자음으로 글자 만들기', 13, 'hangul',
            '"시옷은 이름이고, 소리는 [스]에 가까워요. 소리를 내 보며 글자를 만들어 봐요." 이름과 소리를 구별해 말하게 한다. 이름을 그대로 읽어 글자를 만드는 학생(시옷 → 시)에게는 "ㅅ에 ㅏ를 붙여 소리 내면 어떻게 날까요?"라고 묻는다.',
            '자음 이름을 읽고, 그 자음으로 글자를 만들어요.', HGL(['ㄷ', 'ㅅ', 'ㅈ', 'ㅎ'], ['ㅏ', 'ㅗ', 'ㅜ', 'ㅣ']),
            [
              HG('시옷(ㅅ)으로 시작하는 \'사\'를 만들어 보세요.', '사', 0.1),
              HG('디귿(ㄷ)으로 시작하는 \'도\'를 만들어 보세요.', '도', 0.15),
              HG('히읗(ㅎ)으로 시작하는 \'후\'를 만들어 보세요.', '후', 0.2),
              HG('지읒(ㅈ)으로 시작하는 \'지\'를 만들어 보세요.', '지', 0.25),
              HG('더 해 보기: 시옷(ㅅ)으로 시작하는 \'수\'를 만들어 보세요.', '수', 0.2, { extra: true }),
            ]),
        ],
        [
          CH('ㅇ의 이름은 어느 것일까요?', ['이응', '히읗', '지읒'], 0, 'ㅇ의 이름은 이응이에요. 히읗은 ㅎ, 지읒은 ㅈ의 이름이에요.', 0.15),
          { type: 'tool', tool: 'hangul', options: { consonants: ['ㄷ', 'ㅂ'], vowels: ['ㅏ', 'ㅜ'], slotHints: true }, prompt: '비읍(ㅂ)으로 시작하는 \'부\'를 만들어 보세요.', target: { syllable: '부' }, difficulty: 0.2 },
          MOOD,
        ]),
      worksheet: {
        title: '자음의 이름',
        items: [
          { type: 'table', prompt: '자음의 이름을 빈칸에 쓰세요.', columns: ['자음', '이름'], cells: [['ㄱ', ''], ['ㄴ', ''], ['ㅁ', '']] },
          { type: 'choice', prompt: 'ㅅ의 이름에 ○ 하세요.', options: ['시옷', '이응', '비읍'], answer: '시옷' },
          { type: 'figure', prompt: '어떤 글자일까요? 이름을 읽고 아래에 쓰세요.', tool: 'hangul', options: {}, figures: [{ state: { cho: 'ㅅ', jung: 'ㅏ' }, caption: BLANK }, { state: { cho: 'ㅈ', jung: 'ㅗ' }, caption: BLANK }, { state: { cho: 'ㅎ', jung: 'ㅜ' }, caption: BLANK }], answer: '사, 조, 후' },
          { type: 'short', prompt: '내 이름 첫 글자의 자음 이름을 써 보세요.' },
        ],
        easy: { note: '이름을 소리 내어 읽고 따라 써요.', items: [
          { type: 'choice', prompt: 'ㄱ의 이름에 ○ 하세요.', options: ['기역', '니은'], answer: '기역' },
          { type: 'blank', prompt: '이름을 따라 쓰세요.', text: 'ㄴ = ______', answer: '니은' },
          { type: 'blank', prompt: '이름을 따라 쓰세요.', text: 'ㅁ = ______', answer: '미음' },
          { type: 'draw', prompt: '좋아하는 자음 조각을 그리고 이름을 써 보세요.' },
        ] },
      },
      differentiation: {
        easy: '이름 잇기는 두 가지만 이으면 되고, 맞으면 초록 테두리가 생겨요. 글자 만들기는 자리 안내가 있어요.',
        base: '카드를 모두 이은 뒤 확인하고, 만든 글자는 확인 뒤에 보여요.',
        challenge: '이름이 어려운 자음(비읍·시옷·이응)이 나오고, 더 해 보기(지읒·히읗 잇기, \'수\' 만들기)까지 풀어요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 자음 이름과 소리를 같은 것으로 안다(ㄱ을 [기역]이라고만 읽는다) → 이름은 부를 때 쓰는 말, 소리는 글자 안에서 나는 말이라고 구별해 준다. ② 이름이 두 글자라서 첫 글자만 기억한다 → 기역·니은처럼 노래 읊듯 두 번씩 읽게 한다. ③ ㅅ과 ㅈ 모양을 헷갈린다 → 지붕 모양(ㅅ)과 가로줄이 있는 모양(ㅈ)으로 구별한다. 이 차시는 자음 열네 개 가운데 열 개만 쓴다.',
    }),

    // ───────────────────────── 11. 상황에 맞는 목소리 크기 ─────────────────────────
    L(11, {
      title: '장소에 알맞은 목소리 크기 고르고 짝에게 소리 내어 읽어 주기',
      objective: '장소와 상황에 알맞은 목소리 크기를 고르고, 짝에게 낱말을 알맞은 크기로 읽어 줄 수 있다.',
      standards: JAMO,
      illustration: ART('three paper children reading aloud: one whispering in a library corner, one speaking clearly in a classroom, one calling loudly on a playground', '속삭여요  또박또박'),
      stages: ST(
        { teacher: '"도서관에서 친구에게 이야기할 때는 어떤 목소리로 말하나요? 운동장에서는요?" 선생님이 같은 낱말을 작게, 보통으로, 크게 읽어 들려준다. "글자는 같아도 장소에 따라 목소리 크기가 달라져요."', student: '장소에 따라 목소리 크기가 달라져요. 알맞은 크기를 골라 봐요.', demo: { tool: 'mindmap', options: { mode: 'match', topic: '장소와 목소리', shuffle: false, slots: [{ id: 'lib', label: '도서관' }], cards: [{ id: 'quiet', text: '아주 작게' }, { id: 'loud', text: '아주 크게' }] }, sequence: [{ match: { lib: 'quiet' } }] } },
        '"오늘 짝에게 읽어 줄 때 목소리 크기를 어떻게 맞추었나요?" 두세 명이 말한다. 출구 1번에서 운동장에서 작게 읽는다고 고른 학생에게는 멀리 있는 친구에게 소리가 닿는지 생각하게 한다.',
        [
          A('a1', '활동 1. 장소와 목소리 크기 이어 보기', 13, 'mindmap',
            '"이 장소에서는 어떤 크기의 목소리가 어울릴까요? 직접 소리 내어 읽어 봐요." 짝에게 같은 낱말을 세 가지 크기로 읽어 보게 한다. 모든 장소에서 크게 읽는다고 고르는 학생에게는 "도서관에서 옆 친구가 책을 읽고 있다면 어떨까요?"라고 묻는다.',
            '장소와 알맞은 목소리 크기를 이어요. 소리 내어 읽어 봐요.', LV,
            [
              MATCH('장소와 알맞은 목소리 크기를 이어 보세요.', '장소와 목소리', [{ id: 'lib', label: '도서관에서 읽어요' }, { id: 'play', label: '운동장에서 멀리 있는 친구를 불러요' }], [C('quiet', '아주 작게'), C('far', '멀리 들리게 크게'), C('mid', '보통 크기로')], { lib: 'quiet', play: 'far' }, 0.1),
              MATCH('상황과 알맞은 목소리 크기를 이어 보세요.', '상황과 목소리', [{ id: 'talk', label: '교실에서 발표해요' }, { id: 'lib', label: '도서관에서 짝에게 읽어 줘요' }, { id: 'play', label: '운동장에서 놀이 규칙을 알려 줘요' }], [C('mid', '모두 들리게 또박또박'), C('quiet', '짝만 들리게 작게'), C('far', '멀리 들리게 크게'), C('mute', '아무 소리도 내지 않아요')], { talk: 'mid', lib: 'quiet', play: 'far' }, 0.25,
                { conclude: '같은 낱말도 장소에 따라 목소리 크기를 다르게 해야 해요.' }),
              PICK('도서관에서 알맞은 목소리 크기를 모두 골라 보세요.', '도서관 목소리', [C('whisper', '짝에게만 들리게 속삭여요'), C('shout', '크게 소리쳐요'), C('quiet', '조용히 읽어요')], ['whisper', 'quiet'], 0.2),
              { prompt: '짝에게 낱말 하나를 작은 목소리와 보통 목소리로 읽어 주고, 어느 쪽이 더 잘 들렸는지 말해 보세요.', free: true, talk: true },
            ]),
          A('a2', '활동 2. 어떻게 읽어 줄까', 13, 'emotion',
            '"이 친구는 어떻게 읽어 주면 좋을까요? 두 가지 가운데 하나를 골라 봐요." 고른 결과를 읽고 듣는 사람의 기분을 말하게 한다. 작은 목소리를 고르고도 짝이 못 들었다는 결과를 만난 학생에게는 "짝에게 닿는 크기는 어느 정도일까요?"라고 묻는다.',
            '이야기 속 친구가 되어 알맞은 목소리를 골라요.', LV,
            [
              { prompt: '짝이 \'잘 안 들려요\'라고 했어요. 어떻게 읽어 주면 좋을까요?', toolOptions: { mode: 'branch', who: '나', situation: '짝에게 낱말을 읽어 주었는데 짝이 잘 안 들린다고 했어요.', choices: [{ id: 'clear', text: '입을 크게 벌려 또박또박 다시 읽어요', result: '짝이 낱말을 잘 알아들어요', mood: '기쁨' }, { id: 'same', text: '똑같은 크기로 또 읽어요', result: '짝이 여전히 못 들어요', mood: '속상함', why: '똑같은 크기로 읽으면 짝에게 닿을까요?' }, { id: 'stop', text: '그만 읽어요', result: '짝이 낱말을 알지 못해요', mood: '걱정', why: '읽지 않으면 짝이 낱말을 알 수 있을까요?' }] }, target: { choice: 'clear' }, difficulty: 0.1 },
              { prompt: '도서관에서 우연히 아는 친구를 만났어요. 어떻게 인사하면 좋을까요?', toolOptions: { mode: 'branch', who: '나', situation: '조용한 도서관에서 반가운 친구를 만났어요.', choices: [{ id: 'whisper', text: '손을 흔들며 작게 속삭여요', result: '친구도 웃으며 작게 인사해요', mood: '기쁨' }, { id: 'yell', text: '"야, 안녕!" 하고 크게 불러요', result: '책 읽던 사람들이 깜짝 놀라요', mood: '걱정', why: '크게 부르면 책 읽는 다른 사람들은 어떨까요?' }] }, target: { choice: 'whisper' }, difficulty: 0.15 },
              { prompt: '운동장에서 놀이를 시작하려고 해요. 어떻게 규칙을 알리면 좋을까요?', toolOptions: { mode: 'branch', who: '나', situation: '운동장에서 친구들이 멀리 흩어져 있는데 놀이 규칙을 알려 주려고 해요.', choices: [{ id: 'loud', text: '친구들을 모아 큰 소리로 또박또박 말해요', result: '모든 친구가 규칙을 알아들어요', mood: '뿌듯함' }, { id: 'small', text: '혼잣말처럼 작게 말해요', result: '아무도 규칙을 못 들어요', mood: '속상함', why: '멀리 있는 친구에게 작은 소리가 닿을까요?' }, { id: 'one', text: '한 친구에게만 말해 줘요', result: '다른 친구들은 규칙을 몰라서 헤매요', mood: '걱정', why: '말을 들은 친구 말고 다른 친구들은 알 수 있을까요?' }] }, target: { choice: 'loud' }, difficulty: 0.2 },
            ]),
        ],
        [
          CH('도서관에서 짝에게 낱말을 읽어 줄 때 알맞은 목소리는 어느 것일까요?', ['아주 크게', '짝에게만 들리는 작은 소리', '소리 없이 입만 움직여요'], 1, '도서관에서는 다른 사람이 방해받지 않게 짝에게만 들리는 작은 목소리로 읽어요.', 0.15),
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '장소와 목소리', slots: [{ id: 'room', label: '교실에서 발표해요' }, { id: 'play', label: '운동장에서 친구를 불러요' }], cards: [C('mid', '또박또박 보통 크기'), C('far', '멀리 들리게 크게'), C('quiet', '아주 작게')] }, prompt: '장소와 알맞은 목소리 크기를 이어 보세요.', target: { match: { room: 'mid', play: 'far' } }, difficulty: 0.2 },
          MOOD,
        ]),
      worksheet: {
        title: '알맞은 목소리 크기',
        items: [
          { type: 'check', prompt: '도서관에서 알맞은 말하기에 모두 ✓ 하세요.', options: ['작은 목소리로 읽어요', '큰 소리로 불러요', '속삭이며 말해요'], answer: '작은 목소리로 읽어요, 속삭이며 말해요' },
          { type: 'table', prompt: '장소에 알맞은 목소리 크기를 쓰세요. (작게 / 보통 / 크게)', columns: ['장소', '목소리 크기'], cells: [['도서관', ''], ['교실 발표', ''], ['운동장에서 멀리 부를 때', '']] },
          { type: 'choice', prompt: '짝이 잘 안 들린다고 할 때 알맞은 말하기에 ○ 하세요.', options: ['입을 크게 벌려 또박또박 읽어요', '똑같은 크기로 또 읽어요'], answer: '입을 크게 벌려 또박또박 읽어요' },
          { type: 'draw', prompt: '도서관에서 속삭이는 내 모습을 그려 보세요.' },
        ],
        easy: { note: '장소를 먼저 떠올리고 크기를 골라요.', items: [
          { type: 'choice', prompt: '도서관에서 알맞은 목소리에 ○ 하세요.', options: ['작게', '아주 크게'], answer: '작게' },
          { type: 'choice', prompt: '운동장에서 멀리 있는 친구를 부를 때 알맞은 목소리에 ○ 하세요.', options: ['속삭여요', '멀리 들리게 크게'], answer: '멀리 들리게 크게' },
          { type: 'short', prompt: '내가 속삭여 읽고 싶은 낱말을 하나 써 보세요.' },
          { type: 'draw', prompt: '운동장에서 친구를 부르는 내 모습을 그려 보세요.' },
        ] },
      },
      differentiation: {
        easy: '잇기는 장소 둘부터 시작하고 맞게 이으면 초록 테두리가 생겨요. 이야기 고르기는 틀린 길을 고르면 까닭을 묻고 돌아와요.',
        base: '카드를 모두 이은 뒤 확인하고, 이야기 결과를 읽고 다시 생각해요.',
        challenge: '상황이 셋인 문항이 나오고, 짝과 번갈아 작은·보통 목소리로 읽어 견주어 말해요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 큰 소리가 항상 잘 읽는 것이라고 생각한다 → 같은 낱말을 세 가지 크기로 읽어 어디서 어울리는지 이야기한다. ② 작게 읽으면 틀린다고 생각한다 → 도서관에서는 작게 읽는 것이 예의라고 말한다. ③ 짝이 듣지 못했는데도 그냥 지나간다 → \'다시 말해 줄래?\'라고 말해도 된다고 알려 준다. 짝 읽기 문항은 교구를 움직이지 않으므로 모두가 직접 해 본다.',
    }),

    // ───────────────────────── 12. ㅐ와 ㅔ ─────────────────────────
    L(12, {
      title: 'ㅐ와 ㅔ가 든 글자 만들고 같은 모음끼리 낱말 가르기',
      objective: '모음 ㅐ와 ㅔ가 든 글자를 만들어 읽고, ㅐ가 든 낱말과 ㅔ가 든 낱말을 나눌 수 있다.',
      standards: JAMO,
      illustration: ART('a paper bird and a paper crab side by side, each with a letter card showing a similar looking vowel', '새  게'),
      stages: ST(
        { teacher: '"새, 게. 두 낱말에서 가운데 소리를 들어 볼까요?" 두 소리가 비슷하다는 것을 함께 느끼고, 칠판에 ㅐ와 ㅔ를 크게 쓴다. 시연 단추로 ㅅ과 ㅐ가 모여 \'새\'가 되는 모습을 보여 준다. "소리는 비슷해도 글자 모양이 달라요. 낱말마다 어느 모음을 쓰는지 기억해야 해요."', student: 'ㅐ와 ㅔ는 모양이 비슷해요. 글자를 만들며 살펴봐요.', demo: { tool: 'hangul', options: { consonants: ['ㅅ'], vowels: ['ㅐ', 'ㅔ'], slotHints: true }, sequence: [{ syllable: '새' }] } },
        '"ㅐ가 든 낱말 하나, ㅔ가 든 낱말 하나를 말해 볼 사람?" 두세 명이 말하고 모두 손가락으로 모음을 그려 본다. 출구 1번에서 ㅐ와 ㅔ를 바꾼 학생에게는 두 모음의 세로줄 수를 세게 한다.',
        [
          A('a1', '활동 1. ㅐ와 ㅔ로 글자 만들기', 13, 'hangul',
            '"ㅐ는 세로줄이 둘, ㅔ도 세로줄이 둘이에요. 하지만 가로줄의 위치가 달라요." 손가락으로 공중에 두 모음을 그려 보게 한다. 모음을 바꿔 놓은 학생에게는 "첫 모음은 가로줄이 어디에 붙어 있나요?"라고 묻는다.',
            '모음 ㅐ와 ㅔ를 골라 글자를 만들어요.', HGL(['ㅅ', 'ㄱ', 'ㅂ', 'ㄴ', 'ㅎ'], ['ㅐ', 'ㅔ', 'ㅏ']),
            [
              HG('\'새\'를 만들어 보세요. 모음 ㅐ를 골라요.', '새', 0.15),
              HG('\'게\'를 만들어 보세요. 모음 ㅔ를 골라요.', '게', 0.2),
              HG('\'배\'를 만들어 보세요. 물 위를 가는 탈것이에요.', '배', 0.25),
              HG('\'네\'를 만들어 보세요. 대답할 때 쓰는 말이에요.', '네', 0.3),
              HG('더 해 보기: \'해\'를 만들어 보세요. 하늘에서 빛나는 것이에요.', '해', 0.2, { extra: true }),
            ]),
          A('a2', '활동 2. 같은 모음끼리 낱말 가르기', 13, 'mindmap',
            '"낱말 가운데 소리가 들어 있는 글자를 보고 ㅐ인지 ㅔ인지 찾아봐요." 낱말마다 입으로 읽게 하고 글자를 손가락으로 짚게 한다. 가운데 글자를 보지 않고 첫 글자만 보는 학생에게는 "모음이 있는 글자는 어느 글자인가요?"라고 묻는다.',
            '낱말 카드를 ㅐ가 든 것과 ㅔ가 든 것으로 나누어요.', LV,
            [
              SORT('낱말 카드를 ㅐ가 든 것과 ㅔ가 든 것으로 나누어 보세요.', '모음 찾기', [{ id: 'ae', label: 'ㅐ가 들어 있어요' }, { id: 'e', label: 'ㅔ가 들어 있어요' }], [C('hae', '해'), C('gae', '개'), C('ge', '게'), C('nemo', '네모')], { ae: ['hae', 'gae'], e: ['ge', 'nemo'] }, 0.15),
              SORT('낱말 카드를 ㅐ가 든 것과 ㅔ가 든 것으로 나누어 보세요. 둘째 글자도 살펴요.', '모음 찾기', [{ id: 'ae', label: 'ㅐ가 들어 있어요' }, { id: 'e', label: 'ㅔ가 들어 있어요' }], [C('bae', '배'), C('jebi', '제비'), C('sae', '새'), C('meju', '메주')], { ae: ['bae', 'sae'], e: ['jebi', 'meju'] }, 0.25,
                { conclude: '소리는 비슷해도 낱말마다 ㅐ와 ㅔ를 다르게 써요.' }),
              PICK('ㅐ가 들어 있는 낱말 카드를 모두 골라 보세요.', 'ㅐ가 있어요', [C('nae', '내일'), C('ne', '네모'), C('gae', '개구리'), C('se', '세모')], ['nae', 'gae'], 0.3),
              PICK('더 해 보기: ㅔ가 들어 있는 낱말 카드를 모두 골라 보세요.', 'ㅔ가 있어요', [C('ge', '게'), C('hae', '해'), C('jebi', '제비'), C('bae', '배')], ['ge', 'jebi'], 0.3, { extra: true }),
            ]),
        ],
        [
          CH('\'새\'의 가운데 모음은 어느 것일까요?', ['ㅐ', 'ㅔ', 'ㅏ'], 0, '\'새\'는 ㅅ과 ㅐ가 모인 글자예요.', 0.2),
          { type: 'tool', tool: 'hangul', options: { consonants: ['ㅂ', 'ㅅ', 'ㄱ'], vowels: ['ㅐ', 'ㅔ', 'ㅏ'], slotHints: true }, prompt: '\'개\'를 만들어 보세요.', target: { syllable: '개' }, difficulty: 0.25 },
          MOOD,
        ]),
      worksheet: {
        title: 'ㅐ와 ㅔ',
        items: [
          { type: 'figure', prompt: '어떤 글자일까요? 소리 내어 읽고 아래에 쓰세요.', tool: 'hangul', options: {}, figures: [{ state: { cho: 'ㅅ', jung: 'ㅐ' }, caption: BLANK }, { state: { cho: 'ㄱ', jung: 'ㅔ' }, caption: BLANK }, { state: { cho: 'ㅂ', jung: 'ㅐ' }, caption: BLANK }], answer: '새, 게, 배' },
          { type: 'check', prompt: 'ㅔ가 들어 있는 낱말을 모두 골라 □에 ✓ 하세요.', options: ['해', '제비', '메주', '배'], answer: '제비, 메주' },
          { type: 'choice', prompt: '세로줄이 둘이고 가로줄이 왼쪽에 붙은 모음에 ○ 하세요.', options: ['ㅐ', 'ㅔ'], answer: 'ㅔ' },
          { type: 'short', prompt: 'ㅐ가 들어 있는 낱말 하나를 써 보세요.' },
        ],
        easy: { note: '두 모음을 공중에 그려 보고 풀어요.', items: [
          { type: 'blank', prompt: '빈칸에 알맞은 글자를 쓰세요.', text: 'ㅅ + ㅐ = ___', answer: '새' },
          { type: 'blank', prompt: '빈칸에 알맞은 글자를 쓰세요.', text: 'ㄱ + ㅔ = ___', answer: '게' },
          { type: 'choice', prompt: 'ㅐ가 들어 있는 낱말에 ○ 하세요.', options: ['해', '네모'], answer: '해' },
          { type: 'draw', prompt: '새나 게를 그리고 이름을 써 보세요.' },
        ] },
      },
      differentiation: {
        easy: '글자 만들기에 자리 안내가 있고, 낱말 가르기는 카드가 맞는 칸에 들어가면 초록 테두리가 생겨요.',
        base: '만든 글자는 확인 뒤에 보이고, 낱말 카드는 모두 놓은 뒤 확인해요.',
        challenge: '내 글자 듣기 단추가 없고, 더 해 보기(\'해\' 만들기, ㅔ가 든 낱말 고르기)까지 풀어요.',
      },
      teacherNotes: '자주 보이는 어려움: ① ㅐ와 ㅔ의 소리가 거의 같아 들어서는 구별하지 못한다 → 소리로 구별하지 말고 낱말마다 모양을 기억한다고 말해 준다. ② 모양이 비슷해 가로줄 위치를 혼동한다 → 공중에 크게 써 보게 한다. ③ 낱말 속 모음을 찾을 때 글자 전체 모양에 눌려 모음을 보지 못한다 → 모음이 있는 글자를 먼저 짚게 한다. ㅐ·ㅔ로 소리가 같게 들리는 것은 정상이며 틀린 것이 아니다.',
    }),

    // ───────────────────────── 13. 정리 ─────────────────────────
    L(13, {
      title: '배운 말을 맞고 틀림으로 가르고 글자 만들어 내 실력 돌아보기',
      objective: '단원에서 배운 말이 맞는지 가르고, 배운 대로 글자를 만들어 읽은 뒤 내 읽기 실력을 솔직하게 돌아볼 수 있다.',
      standards: READ1,
      illustration: ART('a row of finished paper letter cards forming a small train, with a child waving a flag at the front of the train', '가 라 허 투'),
      stages: ST(
        { teacher: '"우리가 이 단원에서 글자 만들기를 하면서 알게 된 것은 무엇이지요?" 자음과 모음, 모음의 자리, 낱말 읽기를 차례로 떠올려 칠판에 붙인다. 시연 단추로 낱말 하나가 만들어지는 모습을 보여 준다. "오늘은 배운 것을 가르고, 직접 글자를 만들고, 내 실력을 돌아봐요."', student: '배운 것을 떠올리고 글자를 만들어 봐요.', demo: { tool: 'hangul', options: { consonants: ['ㄹ'], vowels: ['ㅏ'], slotHints: true }, sequence: [{ syllable: '라' }] } },
        '"이 단원에서 가장 재미있었던 글자 만들기는 무엇이었나요?" 두세 명이 이야기한다. 출구 2번에서 모음이 아래에 붙는다고 고른 학생이 서 있는 모음에 대해 헷갈리는 것이니 다음 시간에 짧게 다시 해 본다. 3번 마음 낱말에서 어려웠다고 한 학생을 눈여겨본다.',
        [
          A('a1', '활동 1. 배운 말이 맞는지 가르기', 8, 'mindmap',
            '"이 말은 맞을까요, 틀릴까요? 우리가 만들어 본 글자를 떠올려 봐요." 카드를 소리 내어 읽게 하고 손짓으로 확인하게 한다. \'모음은 모두 자음 아래에 붙어요\'를 맞다고 고르는 학생에게는 \'바\'에서 ㅏ가 어디에 붙었는지 다시 보게 한다.',
            '배운 말 카드를 맞는 말과 틀린 말로 나누어요.', LV,
            [
              SORT('단원에서 배운 말을 맞는 말과 틀린 말로 나누어 보세요.', '배운 말 확인', [{ id: 'yes', label: '맞아요' }, { id: 'no', label: '아니에요' }], [C('mix', '자음과 모음이 모여 글자가 돼요'), C('under', '모음은 모두 자음 아래에 붙어요'), C('stand', '서 있는 모음은 자음 옆에 붙어요'), C('mean', '낱말은 뜻이 없는 글자예요')], { yes: ['mix', 'stand'], no: ['under', 'mean'] }, 0.15),
              SORT('읽기 태도를 맞는 말과 틀린 말로 나누어 보세요.', '읽기 태도 확인', [{ id: 'yes', label: '맞아요' }, { id: 'no', label: '아니에요' }], [C('ask', '막히면 물어봐도 돼요'), C('skip', '모르는 글자는 꼭 건너뛰어요'), C('slow', '손가락으로 짚으며 읽으면 도움이 돼요'), C('loud', '어디서나 큰 소리로 읽어야 해요')], { yes: ['ask', 'slow'], no: ['skip', 'loud'] }, 0.2),
              SORT('자음과 모음에 대해 맞는 말과 틀린 말로 나누어 보세요.', '자음과 모음 확인', [{ id: 'yes', label: '맞아요' }, { id: 'no', label: '아니에요' }], [C('name', '자음에는 이름이 있어요'), C('same', 'ㅐ와 ㅔ는 모양이 똑같아요'), C('tri', 'ㅑ에는 짧은 줄이 둘 있어요')], { yes: ['name', 'tri'], no: ['same'] }, 0.25,
                { conclude: '자음과 모음의 모양과 자리, 이름을 알면 글자를 정확히 읽을 수 있어요.' }),
            ]),
          A('a2', '활동 2. 새로운 글자 만들어 읽기', 10, 'hangul',
            '"이제 처음 만나는 글자도 만들어 읽을 수 있을까요? 조각을 하나씩 소리 내며 놓아 봐요." 지금까지 배운 내용을 떠올리도록 천천히 기다려 준다. 막히는 학생에게는 지난 차시 판서 사진을 가리키며 "서 있는 모음은 어디에 붙었었지요?"라고 묻는다.',
            '배운 대로 자음과 모음을 모아 글자를 만들어요.', HGL(['ㄹ', 'ㅎ', 'ㅌ', 'ㅍ'], ['ㅏ', 'ㅓ', 'ㅜ', 'ㅣ']),
            [
              HG('\'라\'를 만들어 보세요.', '라', 0.1),
              HG('\'허\'를 만들어 보세요.', '허', 0.2),
              HG('\'투\'를 만들어 보세요.', '투', 0.25),
              HG('더 해 보기: \'피\'를 만들어 보세요.', '피', 0.25, { extra: true }),
            ]),
          A('a3', '활동 3. 내 글자 읽기 실력 돌아보기', 8, 'emotion',
            '"내가 글자를 읽고 만든 모습을 떠올려 봐요. 정답은 없어요." 눈금을 고르고 이유를 짝에게 말해 보게 한다. 모두 \'잘해요\'를 고른 학생에게는 "가장 힘들었던 글자는 무엇이었나요?"라고 되묻는다.',
            '내 글자 읽기·만들기 모습에 알맞은 눈금을 골라요.', LV,
            [
              { prompt: '글자를 자음과 모음 조각으로 만드는 것을 얼마나 잘했나요? 솔직하게 골라요.', toolOptions: SELF('글자를 조각으로 만들어 보았어요.', '뿌듯함', '글자를 얼마나 잘 만들었나요?'), target: { level: 'any' }, difficulty: 0.05, hints: SELF_HINTS },
              { prompt: '낱말과 짧은 글을 정확하게 읽는 것은 얼마나 잘했나요? 솔직하게 골라요.', toolOptions: SELF('낱말과 짧은 글을 읽었어요.', '편안함', '얼마나 정확하게 읽었나요?'), target: { level: 'any' }, difficulty: 0.05, hints: SELF_HINTS },
              { prompt: '읽다가 막혔을 때 도움을 청하는 마음은 얼마나 되나요? 솔직하게 골라요.', toolOptions: SELF('읽기가 어려워 막힌 적이 있었어요.', '용기', '도움을 청하는 마음이 얼마나 되나요?'), target: { level: 'any' }, difficulty: 0.05, hints: SELF_HINTS },
            ]),
        ],
        [
          CH('글자는 어떻게 만들어지나요?', ['자음과 모음이 모여서', '받침만 모아서', '그림만 모아서'], 0, '글자는 자음과 모음 조각이 모여서 만들어져요.', 0.1),
          CH('서 있는 모음은 자음의 어디에 붙나요?', ['자음 옆', '자음 아래', '자음 위'], 0, '서 있는 모음(ㅏ·ㅓ·ㅣ)은 자음 옆에 붙어요.', 0.15),
          MOOD,
        ]),
      worksheet: {
        title: '글자 만들기 되짚기',
        items: [
          { type: 'check', prompt: '맞는 말에 모두 ✓ 하세요.', options: ['자음과 모음이 모여 글자가 돼요', '모음은 모두 자음 아래에 붙어요', '서 있는 모음은 자음 옆에 붙어요'], answer: '자음과 모음이 모여 글자가 돼요, 서 있는 모음은 자음 옆에 붙어요' },
          { type: 'figure', prompt: '어떤 글자일까요? 소리 내어 읽고 아래에 쓰세요.', tool: 'hangul', options: {}, figures: [{ state: { cho: 'ㄹ', jung: 'ㅏ' }, caption: BLANK }, { state: { cho: 'ㅌ', jung: 'ㅜ' }, caption: BLANK }, { state: { cho: 'ㅍ', jung: 'ㅣ' }, caption: BLANK }], answer: '라, 투, 피' },
          { type: 'blank', prompt: '두 글자를 이어 낱말을 쓰세요.', text: '나 + 무 = ______     시 + 소 = ______', answer: '나무, 시소' },
          { type: 'table', prompt: '내 실력에 ○ 하세요.', columns: ['내 모습', '아직', '조금', '잘해요'], cells: [['글자를 만들 수 있어요', '', '', ''], ['낱말을 읽을 수 있어요', '', '', ''], ['막히면 물어봐요', '', '', '']] },
        ],
        easy: { note: '배운 것을 하나씩 떠올려요.', items: [
          { type: 'choice', prompt: '글자는 무엇이 모여서 만들어지나요?', options: ['자음과 모음', '그림'], answer: '자음과 모음' },
          { type: 'blank', prompt: '빈칸에 알맞은 글자를 쓰세요.', text: 'ㄹ + ㅏ = ___', answer: '라' },
          { type: 'blank', prompt: '두 글자를 이어 낱말을 쓰세요.', text: '나 + 비 = ______', answer: '나비' },
          { type: 'draw', prompt: '이 단원에서 가장 좋아한 글자를 쓰고 그려 보세요.' },
        ] },
      },
      differentiation: {
        easy: '가르기는 카드 넷으로 시작하고 맞게 놓으면 초록 테두리가 생겨요. 글자 만들기는 자리 안내가 있어요.',
        base: '카드를 모두 놓은 뒤 확인하고, 만든 글자는 확인 뒤에 보여요.',
        challenge: '내 글자 듣기 단추가 없고, 더 해 보기(\'피\' 만들기)까지 풀어요.',
      },
      teacherNotes: '이 차시는 정리 시간이라 새로운 내용을 가르치지 않는다. 자주 보이는 어려움: ① 모음은 모두 자음 아래에 붙는다고 일반화한다 → 서 있는 모음과 누운 모음을 몸짓으로 다시 보여 준다. ② 맞고 틀림 판단에서 문장의 한 낱말만 보고 고른다 → 문장 끝까지 소리 내어 읽게 한다. ③ 자기 평가에서 모든 눈금을 같은 곳에 둔다 → 이 단원에서 한 장면을 떠올려 고르게 한다. 자기 평가는 성적에 반영하지 않는다.',
    }),

  ];

  PaperLessons.registerUnit({
    id: U.id, schema: 'edu-unit.v1', catalogUnit: U.catalogUnit, grade: 1, subject: '국어', unitTitle: U.unitTitle,
    flow: '자음과 모음 조각으로 글자가 만들어진다는 것을 이름표 글자로 알아봅니다. 모음 모양에 따라 붙는 자리가 다르다는 것과 소리를 듣고 글자를 만드는 것을 익힙니다. 이어서 글자를 모아 낱말과 짧은 글을 읽고, 읽다가 막힐 때 도움을 구하는 읽기 태도를 키웁니다. 자음 이름과 소리, ㅐ와 ㅔ를 살피고 마지막 차시에서 만든 글자를 되짚으며 스스로 평가합니다.',
    refs: { 6: 'g1-korean-syllable' },
    lessons,
  });
})();
