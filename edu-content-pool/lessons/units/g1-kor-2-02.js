/* 1학년 2학기 국어 2단원 낱말을 정확하게 읽어요 — 15차시
 * (받침 있는 글자 읽기 → 짧은 글의 중심 내용·읽기 전략 → 문장 부호와 바르게 쓰기 → 소리와 표기가 다른 낱말 → 말놀이와 낭송 → 정리)
 * 예문·대화·인물(가명)·낱말 글·말놀이는 모두 이 단원을 위해 새로 지었다. 교과서 지문·그림·노래 가사·실제 작품을 옮기지 않았다.
 * 글자를 직접 만드는 문항은 받침이 한 개인 글자만 쓴다(겹받침은 다루지 않는다).
 */
(function () {
  const U = { id: 'g1-kor-2-02', catalogUnit: 'g1-국어-2학기-2', unitTitle: '2. 낱말을 정확하게 읽어요' };
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
  const READ1 = ['[2국02-01]']; const READ3 = ['[2국02-03]']; const WRITE = ['[2국03-01]']; const GRAM = ['[2국04-02]']; const LIT = ['[2국05-01]'];
  const HELP = { live: true, instant: true };
  const LV = { easy: HELP, base: {}, challenge: {} };
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
    const b = bat ? { batchim: bat } : {}; const x = extra || {};
    return {
      easy: Object.assign({ consonants: cons, vowels: vows, slotHints: true, slotGuide: true }, b, x),
      base: Object.assign({ consonants: cons, vowels: vows, revealAfterCheck: true }, b, x),
      challenge: Object.assign({ consonants: cons, vowels: vows, speak: false, revealAfterCheck: true }, b, x),
    };
  };
  const CH = (prompt, options, answer, explain, d) => ({ type: 'choice', prompt, options, answer, difficulty: d, explain });
  const SELF = (situation, feeling, ask) => ({ mode: 'scale', steps: 3, situation, feeling, ask, scaleLabels: { 1: '아직', 2: '조금', 3: '잘해요' } });
  const SELF_HINTS = ['오늘 내 모습을 떠올려 보고, 가장 가까운 눈금 하나를 눌러요. 어느 눈금이든 괜찮아요.', '잘한 점과 아직인 점을 하나씩 떠올려 봐요.', '떠오른 모습에 가장 가까운 눈금을 골라요.'];
  const SC = (prompt, situation, feeling, ask) => ({ prompt, toolOptions: SELF(situation, feeling, ask), target: { level: 'any' }, difficulty: 0.05, hints: SELF_HINTS });
  const A = (id, title, minutes, tool, teacher, task, levels, items) => ({ id, title, minutes, tool, teacher, task, levels, items });
  const ST = (intro, wrap, acts, exits) => [
    { id: 'intro', title: '도입', minutes: 6, teacher: intro.teacher, student: intro.student, demo: intro.demo },
    { id: 'main', title: '전개', minutes: 26, activities: acts },
    { id: 'wrapup', title: '정리', minutes: 8, teacher: wrap, exitTicket: exits },
  ];
  const BLANK = '(          )';

  const lessons = [
    // ───────────────────────── 1. 도입: 받침 글자를 만들어 소리 내어 읽기 ─────────────────────────
    L(1, {
      title: '받침 있는 글자를 만들어 또박또박 읽기',
      objective: '받침이 있는 글자를 만들어 소리 내어 읽고, 정확하게 읽는 데 도움이 되는 방법을 고를 수 있다.',
      standards: READ1,
      illustration: ART('a child tracing a finger under big letters on a paper card while reading aloud', '산  밤  강'),
      stages: ST(
        { teacher: '"1학기에 받침이 있는 글자를 배웠지요? 오늘은 글자를 만들고, 만든 글자를 또박또박 읽어 봐요." 칠판에 \'사\'와 \'산\'을 나란히 쓰고 받침이 있어서 소리의 끝이 달라지는 것을 들려준다. 시연 단추로 ㅅ과 ㅏ에 ㄴ이 붙어 \'산\'이 되는 모습을 보여 준다.', student: '받침이 있는 글자를 만들고 또박또박 읽어 봐요. 어떻게 읽으면 정확하게 읽을 수 있을까요?', demo: { tool: 'hangul', options: { consonants: ['ㅅ'], vowels: ['ㅏ'], batchim: ['ㄴ', 'ㅇ'], slotHints: true }, sequence: [{ syllable: '산' }] } },
        '"오늘 정확하게 읽으려고 한 방법 하나를 짝에게 말해 볼까요?" 한두 명이 말하고 함께 다시 읽는다. 출구 2번에서 받침을 빼고 \'사\'로 읽은 학생에게는 입이 닫히는 끝소리를 다시 느끼게 한다.',
        [
          A('a1', '활동 1. 받침 있는 글자를 만들어 읽기', 12, 'hangul',
            '"자음과 모음을 틀에 놓고 받침을 맨 아래에 놓아요. 다 만들면 소리 내어 읽어 봐요." 받침을 빼고 읽는 학생에게는 "소리의 끝에서 입이 닫혔나요?"라고 묻는다. 기본 단계는 확인을 눌러야 합친 글자가 보이므로 만들기 전에 먼저 소리를 떠올리게 한다.',
            '자음, 모음, 받침을 모아 글자를 만들고 소리 내어 읽어요.', HGL(['ㅅ', 'ㅂ', 'ㄱ', 'ㅈ'], ['ㅏ', 'ㅣ'], ['ㄴ', 'ㅁ', 'ㅇ', 'ㅂ']),
            [
              HG('글자 \'산\'을 만들어 소리 내어 읽어 보세요.', '산', 0.15),
              HG('글자 \'밤\'을 만들어 소리 내어 읽어 보세요.', '밤', 0.2),
              HG('글자 \'강\'을 만들어 소리 내어 읽어 보세요.', '강', 0.25),
              HG('글자 \'집\'을 만들어 소리 내어 읽어 보세요.', '집', 0.3),
              HG('더 해 보기: 글자 \'문\'을 만들어 소리 내어 읽어 보세요.', '문', 0.3, { extra: true, toolOptions: { consonants: ['ㅁ', 'ㄱ'], vowels: ['ㅜ', 'ㅗ'] } }),
            ]),
          A('a2', '활동 2. 정확하게 읽는 방법 찾기', 14, 'mindmap',
            '"글을 읽다가 줄을 놓치거나 글자가 헷갈린 적이 있나요? 그럴 때 어떻게 하면 좋을지 찾아봐요." 카드를 하나씩 소리 내어 읽게 한다. \'모르는 글자는 빼고 읽어요\'를 도움이 되는 칸에 넣는 학생에게는 "글자를 빼고 읽으면 낱말이 그대로일까요?"라고 되묻는다.',
            '정확하게 읽는 데 도움이 되는 방법을 골라 봐요.', LV,
            [
              SORT('읽는 방법 카드를 도움이 되는 것과 도움이 안 되는 것으로 나누어 보세요.', '읽는 방법', [{ id: 'good', label: '도움이 돼요' }, { id: 'bad', label: '도움이 안 돼요' }], [C('finger', '손가락으로 글자를 짚어요'), C('slow', '글자를 하나씩 또박또박 읽어요'), C('skip', '모르는 글자는 빼고 읽어요'), C('guess', '글자를 보지 않고 짐작해서 읽어요'), C('again', '틀리면 다시 읽어요')], { good: ['finger', 'slow', 'again'], bad: ['skip', 'guess'] }, 0.15,
                { levels: { easy: { prompt: '카드 넷을 도움이 되는 것과 도움이 안 되는 것으로 나누어 보세요.', toolOptions: { cards: [C('finger', '손가락으로 글자를 짚어요'), C('skip', '모르는 글자는 빼고 읽어요'), C('slow', '글자를 하나씩 또박또박 읽어요'), C('guess', '글자를 보지 않고 짐작해서 읽어요')] }, target: { sort: { good: ['finger', 'slow'], bad: ['skip', 'guess'] } } } } }),
              MATCH('읽다가 막힌 상황과 알맞은 방법을 이어 보세요.', '막힌 상황', [{ id: 'lost', label: '줄을 자꾸 놓쳐요' }, { id: 'long', label: '글자가 많아서 헷갈려요' }], [C('pointer', '손가락으로 줄을 짚어요'), C('split', '두 글자씩 끊어서 읽어요'), C('close', '눈을 감고 읽어요')], { lost: 'pointer', long: 'split' }, 0.2,
                { conclude: '막힌 곳에 알맞은 방법을 쓰면 정확하게 읽을 수 있어요.' }),
              PICK('정확하게 읽은 모습을 모두 골라 보세요.', '정확하게 읽었어요', [C('ok1', '글자를 하나도 빼지 않고 읽었어요'), C('ok2', '받침까지 소리를 냈어요'), C('no1', '아는 낱말만 읽고 넘어갔어요')], ['ok1', 'ok2'], 0.25),
              PICK('더 해 보기: 읽은 뒤에 하면 좋은 일을 모두 골라 보세요.', '읽고 난 뒤에', [C('recheck', '다시 한번 읽어 봐요'), C('ask', '모르는 글자를 물어봐요'), C('shut', '책을 덮고 잊어버려요')], ['recheck', 'ask'], 0.3, { extra: true }),
            ]),
        ],
        [
          CH('글자 맨 아래에 붙는 조각의 이름은 무엇일까요?', ['받침', '마침표', '그림'], 0, '글자 맨 아래에 붙는 조각을 받침이라고 해요.', 0.1),
          { type: 'tool', tool: 'hangul', options: { consonants: ['ㅁ', 'ㅂ'], vowels: ['ㅏ', 'ㅗ'], batchim: ['ㄴ', 'ㅇ', 'ㅁ'], slotHints: true }, prompt: '글자 \'봄\'을 만들어 보세요.', target: { syllable: '봄' }, difficulty: 0.3 },
          MOOD,
        ]),
      worksheet: {
        title: '또박또박 읽어요',
        items: [
          { type: 'check', prompt: '정확하게 읽는 데 도움이 되는 방법에 모두 ✓ 하세요.', options: ['손가락으로 짚어요', '글자를 빼고 읽어요', '받침까지 소리 내어요'], answer: '손가락으로 짚어요, 받침까지 소리 내어요' },
          { type: 'figure', prompt: '자음, 모음, 받침이 모이면 어떤 글자가 될까요? 아래에 쓰세요.', tool: 'hangul', options: { batchim: [] }, figures: [{ state: { cho: 'ㅅ', jung: 'ㅏ', jong: 'ㄴ' }, caption: BLANK }, { state: { cho: 'ㅂ', jung: 'ㅏ', jong: 'ㅁ' }, caption: BLANK }, { state: { cho: 'ㄱ', jung: 'ㅏ', jong: 'ㅇ' }, caption: BLANK }], answer: '산, 밤, 강' },
          { type: 'blank', prompt: '받침을 붙여 글자를 쓰세요.', text: '지 + ㅂ = ___     무 + ㄴ = ___', answer: '집, 문' },
          { type: 'short', prompt: '오늘 읽을 때 내가 쓴 방법 하나를 써 보세요.' },
        ],
        easy: { note: '받침은 글자 맨 아래에 붙어요.', items: [
          { type: 'choice', prompt: '받침이 있는 글자에 ○ 하세요.', options: ['사', '산'], answer: '산' },
          { type: 'blank', prompt: '글자를 따라 쓰세요.', text: '밤 → ___     강 → ___', answer: '밤, 강' },
          { type: 'blank', prompt: '받침을 붙여 글자를 쓰세요.', text: '바 + ㅁ = ___', answer: '밤' },
          { type: 'draw', prompt: '내가 좋아하는 받침 있는 글자를 쓰고 그림도 그려 보세요.' },
        ] },
      },
      differentiation: {
        easy: '글자 만들기는 자음·모음·받침 자리 글씨가 있고, 모음을 들면 알맞은 자리가 깜박여요. 읽는 방법 가르기는 카드가 넷이에요.',
        base: '만든 글자는 확인 뒤에 보이고, 카드를 모두 놓은 뒤 확인해요.',
        challenge: '내 글자 듣기 단추가 없고, 더 해 보기(\'문\' 만들기, 읽은 뒤에 할 일 고르기)까지 풀어요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 받침을 빼고 읽는다(산→사) → 받침이 있을 때 입이 닫히거나 혀가 닿는 끝소리를 함께 느끼게 한다. ② 읽는 방법을 하나로만 고집한다 → 줄을 놓칠 때와 낱말이 길 때처럼 상황마다 방법이 다르다는 것을 짚는다. ③ 글자를 만들면서 소리 내기를 잊는다 → 만들기를 마치면 반드시 한 번 읽게 한다. 이 차시는 단원의 첫 시간이므로 틀려도 다시 해 보게 하고 점수를 매기지 않는다.',
    }),

    // ───────────────────────── 2. 두 문장 글에서 누가 무엇을 하는지 찾기 ─────────────────────────
    L(2, {
      title: '짧은 글에서 누가 무엇을 하는지 찾기',
      objective: '두세 문장으로 된 짧은 글을 읽고 누가 무엇을 하는지 찾고, 일이 일어난 차례대로 문장을 놓을 수 있다.',
      standards: READ1,
      illustration: ART('a paper duckling walking to a pond with three little sentence cards floating above the water', '아기 오리가 연못에 가요'),
      stages: ST(
        { teacher: '"글을 읽을 때 \'누가\'와 \'무엇을 해요\'를 찾으면 글의 뜻을 알 수 있어요." 칠판에 \'아기 오리가 헤엄을 쳐요.\'를 쓰고 \'아기 오리\'와 \'헤엄을 쳐요\'를 다른 색으로 짚는다. 시연 단추로 낱말 카드가 두 칸으로 나뉘는 모습을 보여 준다.', student: '글을 읽고 누가 무엇을 하는지 찾아봐요.', demo: { tool: 'mindmap', options: { topic: '문장 찾기', shuffle: false, slots: [{ id: 'who', label: '누가' }, { id: 'did', label: '무엇을 해요' }], cards: [{ id: 'duck', text: '아기 오리' }, { id: 'swim', text: '헤엄을 쳐요' }] }, sequence: [{ sort: { who: ['duck'], did: ['swim'] } }] } },
        '"오늘 읽은 글 가운데 하나를 골라 누가 무엇을 하는지 말해 볼까요?" 두세 명이 \'~가 ~해요.\' 모양으로 말한다. 출구 1번에서 \'연못\'을 누가로 고른 학생에게는 움직이는 것이 무엇인지 되묻는다.',
        [
          A('a1', '활동 1. 문장에서 누가와 무엇을 해요 찾기', 13, 'mindmap',
            '"문장을 소리 내어 읽고 움직이는 낱말을 찾아봐요." 문장마다 누가를 손가락으로 짚게 한다. 도토리처럼 나오는 물건을 누가로 고른 학생에게는 "도토리가 주워요, 다람쥐가 주워요?"라고 되묻는다.',
            '문장을 읽고 누가인 낱말과 무엇을 해요인 낱말을 찾아요.', LV,
            [
              SORT('낱말 카드를 누가와 무엇을 해요로 나누어 보세요.', '문장 찾기', [{ id: 'who', label: '누가' }, { id: 'did', label: '무엇을 해요' }], [C('rabbit', '토끼'), C('eat', '풀을 먹어요'), C('bird', '새'), C('fly', '하늘을 날아요')], { who: ['rabbit', 'bird'], did: ['eat', 'fly'] }, 0.1),
              MATCH('문장을 읽고 \'누가\'인 낱말을 이어 보세요.', '누가 했나요', [{ id: 's1', label: '다람쥐가 도토리를 주워요.' }, { id: 's2', label: '병아리가 마당을 걸어요.' }, { id: 's3', label: '언니가 빵을 먹어요.' }], [C('squirrel', '다람쥐'), C('chick', '병아리'), C('sister', '언니'), C('acorn', '도토리')], { s1: 'squirrel', s2: 'chick', s3: 'sister' }, 0.2),
              PICK('\'고양이가 우유를 마셔요.\'에서 움직이는 것을 모두 골라 보세요.', '움직이는 낱말', [C('cat', '고양이'), C('milk', '우유'), C('drink', '마셔요')], ['cat', 'drink'], 0.25,
                { conclude: '누가와 무엇을 해요를 찾으면 문장의 뜻이 보여요.' }),
              PICK('더 해 보기: \'아빠가 마당에서 공을 차요.\'에서 무엇을 해요인 낱말을 골라 보세요.', '무엇을 해요', [C('dad', '아빠'), C('yard', '마당'), C('kick', '공을 차요')], ['kick'], 0.3, { extra: true }),
            ]),
          A('a2', '활동 2. 글을 읽고 일어난 차례대로 놓기', 13, 'story',
            '"먼저 일어난 일부터 차례대로 놓아요. 문장을 소리 내어 읽고 앞뒤를 생각해요." 해가 뜨는 문장을 마지막에 놓는 학생에게는 "일어나기 전에 먼저 있었던 일이 무엇일까요?"라고 묻는다.',
            '문장 카드를 일어난 차례대로 놓아요.', LV,
            [
              ORDER('아침 글을 읽고 일어난 차례대로 문장 카드를 놓아 보세요.', [C('m1', '해가 떠요.'), C('m2', '아기 오리가 일어나요.'), C('m3', '아기 오리가 연못에 가요.')], ['m1', 'm2', 'm3'], 0.2),
              ORDER('점심 글을 읽고 일어난 차례대로 문장 카드를 놓아 보세요.', [C('n1', '준호가 손을 씻어요.'), C('n2', '준호가 밥을 먹어요.'), C('n3', '준호가 이를 닦아요.')], ['n1', 'n2', 'n3'], 0.25),
              FILL('빈칸에 알맞은 말을 놓아 보세요.', [{ id: 'a', label: '아기 오리가 연못에서 ___ 쳐요.' }, { id: 'b', label: '엄마가 아기를 ___.' }], [C('swim', '헤엄을'), C('hug', '안아 줘요'), C('rice', '밥을'), C('book', '책을')], { a: 'swim', b: 'hug' }, 0.25),
              ORDER('더 해 보기: 비 오는 날 글을 읽고 차례대로 놓아 보세요.', [C('r1', '구름이 모여요.'), C('r2', '비가 와요.'), C('r3', '무지개가 떠요.'), C('r4', '해가 나와요.')], ['r1', 'r2', 'r4', 'r3'], 0.3, { extra: true }),
            ]),
        ],
        [
          CH('\'참새가 노래해요.\'에서 누가 노래하나요?', ['참새', '노래', '해요'], 0, '노래하는 것은 참새예요. 누가에 해당하는 낱말은 참새예요.', 0.1),
          { type: 'tool', tool: 'story', options: { mode: 'order', slots: ['첫째', '둘째', '셋째'], cards: [C('p1', '씨앗을 심어요.'), C('p2', '싹이 나요.'), C('p3', '꽃이 피어요.')] }, prompt: '일어난 차례대로 놓아 보세요.', target: { order: ['p1', 'p2', 'p3'] }, difficulty: 0.25 },
          MOOD,
        ]),
      worksheet: {
        title: '누가 무엇을 해요',
        items: [
          { type: 'table', prompt: '문장에서 누가인 낱말을 쓰세요.', columns: ['문장', '누가'], cells: [['곰이 꿀을 먹어요.', ''], ['동생이 노래를 불러요.', ''], ['나비가 꽃에 앉아요.', '']] },
          { type: 'choice', prompt: '\'토끼가 풀을 먹어요.\'에서 무엇을 해요에 해당하는 것은 어느 것일까요?', options: ['토끼가', '풀을 먹어요'], answer: '풀을 먹어요' },
          { type: 'blank', prompt: '알맞은 낱말을 넣어 문장을 쓰세요.', text: '______가 헤엄을 쳐요.', answer: '오리' },
          { type: 'short', prompt: '내 주변에서 본 일을 \'누가 무엇을 해요\' 모양으로 한 문장 써 보세요.' },
        ],
        easy: { note: '움직이는 것이 누가예요.', items: [
          { type: 'choice', prompt: '\'새가 날아요.\'에서 누가에 ○ 하세요.', options: ['새', '날아요'], answer: '새' },
          { type: 'blank', prompt: '문장을 따라 쓰세요.', text: '새가 날아요.', answer: '새가 날아요.' },
          { type: 'choice', prompt: '\'개가 달려요.\'에서 무엇을 해요에 ○ 하세요.', options: ['개가', '달려요'], answer: '달려요' },
          { type: 'draw', prompt: '움직이는 동물을 그리고 무엇을 하는지 써 보세요.' },
        ] },
      },
      differentiation: {
        easy: '누가와 무엇을 해요 나누기는 카드 넷으로 시작하고 맞게 놓으면 초록 테두리가 생겨요. 차례 놓기는 카드가 셋이에요.',
        base: '카드를 모두 놓은 뒤 확인하고, 문장 속 낱말을 스스로 찾아요.',
        challenge: '더 해 보기(무엇을 해요 찾기, 네 문장 차례 놓기)까지 풀어요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 문장에 나오는 물건을 누가로 고른다 → 움직이거나 일하는 것이 누가라고 말해 준다. ② 문장을 한 글자씩 읽느라 뜻을 놓친다 → 문장 전체를 한 번 읽은 뒤에 낱말을 찾게 한다. ③ 차례 놓기에서 문장의 첫 낱말만 보고 순서를 정한다 → 앞뒤 일을 몸짓으로 해 보게 한다. 문장 카드는 모두 이 단원을 위해 새로 지은 짧은 글이다.',
    }),

    // ───────────────────────── 3. 읽고 짐작하기 ─────────────────────────
    L(3, {
      title: '글을 읽고 이어질 일 짐작하고 맞는 말 가리기',
      objective: '짧은 글을 읽고 이어질 일을 짐작하고, 글에 맞는 말과 맞지 않는 말을 가릴 수 있다.',
      standards: READ1,
      illustration: ART('a paper child looking out of a window at gray clouds and thinking of an umbrella', '비가 와요'),
      stages: ST(
        { teacher: '"하늘이 어두워지고 바람이 불어요. 이다음에 무슨 일이 일어날까요?" 학생이 말한 짐작을 칠판에 두세 개 적고, 글에서 근거가 되는 낱말을 함께 짚는다. "글에 나온 낱말을 보고 짐작하는 거예요."', student: '글에 나온 낱말을 보고 이어질 일을 짐작해 봐요.', demo: { tool: 'story', options: { mode: 'fill', slots: [{ id: 'a', label: '비가 와요. 하준이는 ___ 써요.' }], cards: [{ id: 'um', text: '우산을' }, { id: 'ball', text: '공을' }] }, sequence: [{ fill: { a: 'um' } }] } },
        '"오늘 글을 읽고 짐작할 때 가장 도움이 된 낱말은 무엇이었나요?" 두 명이 말하고 짝에게 설명해 본다. 출구 1번에서 글에 없는 내용을 고른 학생에게는 글의 어느 낱말이 그 내용을 알려 주는지 찾게 한다.',
        [
          A('a1', '활동 1. 글을 읽고 이어질 일 짐작하기', 13, 'story',
            '"글에 나온 낱말이 단서예요. 단서를 보고 빈칸에 알맞은 말을 놓아 봐요." 글 전체를 소리 내어 읽게 한다. \'비가 와요\'인데 \'공을\'을 고른 학생에게는 "비 오는 날 밖에서 쓰는 것은 무엇일까요?"라고 묻는다.',
            '글의 단서를 보고 빈칸에 알맞은 말을 놓아요.', LV,
            [
              FILL('글을 읽고 빈칸에 알맞은 말을 놓아 보세요.', [{ id: 'a', label: '비가 와요. 하준이는 ___ 써요.' }, { id: 'b', label: '바람이 차가워요. 서아는 두꺼운 옷을 ___.' }, { id: 'c', label: '방이 어두워요. 지우는 불을 ___.' }], [C('um', '우산을'), C('wear', '입어요'), C('on', '켜요'), C('rice', '먹어요')], { a: 'um', b: 'wear', c: 'on' }, 0.2),
              FILL('글을 읽고 빈칸에 알맞은 말을 놓아 보세요.', [{ id: 'a', label: '배가 고파요. 민지는 밥을 ___.' }, { id: 'b', label: '졸려요. 동생은 이불을 ___.' }], [C('eat', '먹어요'), C('cover', '덮어요'), C('kick', '차요'), C('read', '읽어요')], { a: 'eat', b: 'cover' }, 0.25),
              PICK('\'준호가 신발을 신고 문을 열어요.\' 뒤에 이어질 일로 알맞은 것을 모두 골라 보세요.', '이어질 일', [C('out', '밖으로 나가요'), C('quilt', '이불을 덮어요'), C('walk', '길을 걸어가요')], ['out', 'walk'], 0.25),
              PICK('더 해 보기: \'눈이 펑펑 와요.\' 뒤에 이어질 일로 알맞은 것을 모두 골라 보세요.', '눈 오는 날', [C('man', '눈사람을 만들어요'), C('fan', '선풍기를 틀어요'), C('glove', '장갑을 껴요')], ['man', 'glove'], 0.3, { extra: true }),
            ]),
          A('a2', '활동 2. 글에 맞는 말 가리기', 13, 'mindmap',
            '"글에 나온 내용과 같은 말인지 다시 글을 보며 확인해요." 문장을 글과 한 줄씩 견주어 읽게 한다. \'토끼가 밭에서 잤어요\'를 맞는 칸에 넣는 학생에게는 "글 어디에 잤다는 말이 있나요?"라고 되묻는다.',
            '글을 읽고 글에 맞는 말과 맞지 않는 말로 나누어요.', LV,
            [
              SORT('토끼가 당근 두 개를 뽑아 먹고 웃었어요. 글에 맞는 말과 맞지 않는 말로 나누어 보세요.', '글에 맞아요', [{ id: 'yes', label: '글에 맞아요' }, { id: 'no', label: '글에 맞지 않아요' }], [C('pull', '토끼가 당근을 뽑았어요.'), C('potato', '토끼가 감자를 먹었어요.'), C('smile', '토끼가 웃었어요.'), C('sleep', '토끼가 밭에서 잤어요.')], { yes: ['pull', 'smile'], no: ['potato', 'sleep'] }, 0.2),
              SORT('서아는 아침에 우유를 마시고 학교에 갔어요. 글에 맞는 말과 맞지 않는 말로 나누어 보세요.', '글에 맞아요', [{ id: 'yes', label: '글에 맞아요' }, { id: 'no', label: '글에 맞지 않아요' }], [C('milk', '서아가 우유를 마셨어요.'), C('go', '서아가 학교에 갔어요.'), C('bread', '서아가 빵을 먹었어요.')], { yes: ['milk', 'go'], no: ['bread'] }, 0.25),
              MATCH('글과 어울리는 마지막 문장을 이어 보세요.', '어울리는 문장', [{ id: 'g1', label: '강아지가 꼬리를 흔들어요.' }, { id: 'g2', label: '아이가 눈물을 흘려요.' }], [C('happy', '강아지가 기뻐해요.'), C('sad', '아이가 슬퍼해요.'), C('sleepy', '아이가 춤을 춰요.')], { g1: 'happy', g2: 'sad' }, 0.25,
                { conclude: '글에 나온 낱말을 보면 이어질 마음이나 일을 짐작할 수 있어요.' }),
              PICK('더 해 보기: \'민지가 책가방을 메고 나가요.\' 글을 읽고 맞는 말을 모두 골라 보세요.', '글에 맞아요', [C('bag', '민지가 책가방을 멨어요.'), C('go', '민지가 밖으로 나가요.'), C('cook', '민지가 요리를 해요.')], ['bag', 'go'], 0.3, { extra: true }),
            ]),
        ],
        [
          CH('\'하늘이 어두워지고 천둥이 쳐요.\' 뒤에 이어질 일로 알맞은 것은 어느 것일까요?', ['비가 내려요', '꽃이 활짝 피어요', '무지개가 먼저 떠요'], 0, '어두운 하늘과 천둥은 비가 올 때 함께 나타나는 단서예요.', 0.2),
          { type: 'tool', tool: 'story', options: { mode: 'fill', slots: [{ id: 'a', label: '추워요. 아이는 목도리를 ___.' }], cards: [C('wrap', '둘러요'), C('eat2', '먹어요'), C('run', '달려요')] }, prompt: '단서를 보고 빈칸에 알맞은 말을 놓아 보세요.', target: { fill: { a: 'wrap' } }, difficulty: 0.25 },
          MOOD,
        ]),
      worksheet: {
        title: '단서를 보고 짐작해요',
        items: [
          { type: 'choice', prompt: '\'발이 시려요. 지우는 ___을 신어요.\'에서 빈칸에 알맞은 낱말은 어느 것일까요?', options: ['양말', '모자', '장갑'], answer: '양말' },
          { type: 'check', prompt: '\'아기가 울어요.\' 뒤에 이어질 일에 모두 ✓ 하세요.', options: ['엄마가 안아 줘요', '아기가 춤을 춰요', '엄마가 우유를 줘요'], answer: '엄마가 안아 줘요, 엄마가 우유를 줘요' },
          { type: 'blank', prompt: '글에 맞게 낱말을 쓰세요.', text: '비가 와요. 우산을 ______.', answer: '써요' },
          { type: 'short', prompt: '\'공이 굴러가요.\' 뒤에 이어질 일을 짐작해서 한 문장으로 써 보세요.' },
        ],
        easy: { note: '글의 단서가 되는 낱말을 찾아요.', items: [
          { type: 'choice', prompt: '비가 오면 쓰는 것에 ○ 하세요.', options: ['우산', '공'], answer: '우산' },
          { type: 'choice', prompt: '\'졸려요.\' 뒤에 이어질 일에 ○ 하세요.', options: ['잠을 자요', '달려요'], answer: '잠을 자요' },
          { type: 'blank', prompt: '문장을 따라 쓰세요.', text: '비가 와요.', answer: '비가 와요.' },
          { type: 'draw', prompt: '비 오는 날 내가 쓰는 것을 그려 보세요.' },
        ] },
      },
      differentiation: {
        easy: '빈칸 채우기는 글이 짧고 맞게 놓으면 초록 테두리가 생겨요. 맞는 말 가리기는 카드가 셋이에요.',
        base: '카드를 모두 놓은 뒤 확인하고, 글에서 근거 낱말을 스스로 찾아요.',
        challenge: '더 해 보기(눈 오는 날 이어질 일, 책가방 글)까지 풀어요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 글에 없는 내용을 자기 경험으로 덧붙여 맞다고 한다 → 글 어디에 그 말이 있는지 손가락으로 짚게 한다. ② 단서 낱말을 못 찾고 처음 떠오른 것을 고른다 → 비·어둡다·춥다 같은 낱말에 밑줄을 긋게 한다. ③ 짐작이 여러 개일 때 틀렸다고 느낀다 → 글에 근거가 있으면 짐작은 여러 개일 수 있다고 말한다. 모든 문장은 이 단원을 위해 새로 지었다.',
    }),

    // ───────────────────────── 4. 받침이 다른 글자를 가려 읽기 ─────────────────────────
    L(4, {
      title: '받침이 다른 비슷한 글자 가려 읽기',
      objective: '받침만 다른 비슷한 글자(감·강, 산·상)를 소리와 뜻으로 가려 읽고 알맞은 글자를 만들 수 있다.',
      standards: READ1,
      illustration: ART('two paper cards with almost the same letter, one with a small round piece below and one with a different piece, held side by side', '감  강'),
      stages: ST(
        { teacher: '"\'감\'과 \'강\'은 거의 똑같이 생겼지요? 맨 아래 받침만 달라요. 그런데 뜻은 완전히 달라요." 두 글자를 나란히 쓰고 받침을 짚으며 천천히 소리 낸다. 시연 단추로 ㄱ과 ㅏ에 ㅁ이 붙어 \'감\'이 되는 모습을 보여 준다.', student: '받침이 다른 비슷한 글자를 가려서 읽어 봐요.', demo: { tool: 'hangul', options: { consonants: ['ㄱ'], vowels: ['ㅏ'], batchim: ['ㅁ', 'ㅇ'], slotHints: true }, sequence: [{ syllable: '감' }] } },
        '"오늘 헷갈렸던 글자 짝이 있었나요? 하나만 짝에게 읽어 주세요." 두세 명이 말하고 받침을 짚어 다시 읽는다. 출구 1번에서 감과 강의 뜻을 바꾼 학생에게는 받침을 다시 짚으며 낱말 뜻과 짝지어 본다.',
        [
          A('a1', '활동 1. 뜻을 보고 받침이 다른 글자 만들기', 13, 'hangul',
            '"뜻을 먼저 읽고 어느 글자인지 생각해요. 그다음 받침을 골라 만들어요." 받침을 바꾸어 만드는 학생에게는 "소리의 끝이 입을 다무는 소리인가요, 목이 울리는 소리인가요?"라고 묻는다.',
            '낱말 뜻을 읽고 받침이 알맞은 글자를 만들어요.', HGL(['ㄱ', 'ㅅ', 'ㅂ'], ['ㅏ'], ['ㅁ', 'ㅇ', 'ㄴ', 'ㅂ']),
            [
              HG('가을에 따서 먹는 주황색 과일의 이름 \'감\'을 만들어 보세요.', '감', 0.15),
              HG('물이 길게 흘러가는 곳의 이름 \'강\'을 만들어 보세요.', '강', 0.2),
              HG('나무가 많고 높이 솟은 땅의 이름 \'산\'을 만들어 보세요.', '산', 0.25),
              HG('잠을 자거나 공부하는 집 안의 한 칸 \'방\'을 만들어 보세요.', '방', 0.3),
              HG('더 해 보기: 하늘에서 내리는 하얀 것의 이름 \'눈\'을 만들어 보세요.', '눈', 0.3, { extra: true, toolOptions: { consonants: ['ㄴ', 'ㅅ'], vowels: ['ㅜ', 'ㅗ'] } }),
            ]),
          A('a2', '활동 2. 낱말과 뜻을 이어 읽기', 13, 'mindmap',
            '"비슷한 글자지만 뜻은 달라요. 뜻을 읽고 낱말을 찾아요." 낱말을 소리 내어 읽고 받침을 짚게 한다. \'감\'을 물이 흐르는 곳에 이은 학생에게는 "ㅁ은 입을 다무는 소리예요. 강은 입이 닫히지 않아요."라고 소리로 짚어 준다.',
            '낱말 카드를 뜻과 이어요. 받침이 다른 글자를 가려 읽어요.', LV,
            [
              MATCH('낱말의 뜻과 낱말 카드를 이어 보세요.', '뜻과 낱말', [{ id: 'fruit', label: '달고 주황색인 과일이에요' }, { id: 'water', label: '물이 흘러가요' }, { id: 'hill', label: '나무가 많고 높아요' }], [C('gam', '감'), C('gang', '강'), C('san', '산'), C('sang', '상')], { fruit: 'gam', water: 'gang', hill: 'san' }, 0.2),
              SORT('낱말 카드를 받침이 ㅁ인 것과 ㅇ인 것으로 나누어 보세요.', '받침 가르기', [{ id: 'm', label: '받침이 ㅁ이에요' }, { id: 'ng', label: '받침이 ㅇ이에요' }], [W('gam', '감'), W('bam', '밤'), W('gang', '강'), W('bang', '방')], { m: ['gam', 'bam'], ng: ['gang', 'bang'] }, 0.2),
              PICK('가을에 나무에서 따 먹는 과일의 낱말 카드를 골라 보세요.', '먹는 과일', [C('gam', '감'), C('gang', '강'), C('san', '산')], ['gam'], 0.25,
                { conclude: '받침이 다르면 소리도 뜻도 달라져요. 받침까지 읽어야 해요.' }),
              PICK('더 해 보기: 받침이 ㅇ인 낱말 카드를 모두 골라 보세요.', '받침이 ㅇ이에요', [C('bang', '방'), C('gong', '공'), C('gam', '감'), C('san', '산')], ['bang', 'gong'], 0.3, { extra: true }),
            ]),
        ],
        [
          CH('\'강\'과 \'감\'은 무엇이 다른가요?', ['받침이 달라요', '자음이 모두 같아요', '모음이 아예 없어요'], 0, '강은 받침이 ㅇ이고 감은 받침이 ㅁ이에요. 받침이 다르면 뜻도 달라져요.', 0.15),
          { type: 'tool', tool: 'hangul', options: { consonants: ['ㅂ', 'ㅅ'], vowels: ['ㅏ', 'ㅣ'], batchim: ['ㅁ', 'ㄴ', 'ㅇ'], slotHints: true }, prompt: '글자 \'밤\'을 만들어 보세요.', target: { syllable: '밤' }, difficulty: 0.3 },
          MOOD,
        ]),
      worksheet: {
        title: '받침이 다른 글자',
        items: [
          { type: 'figure', prompt: '받침이 달라요. 어떤 글자일까요? 아래에 쓰세요.', tool: 'hangul', options: { batchim: [] }, figures: [{ state: { cho: 'ㄱ', jung: 'ㅏ', jong: 'ㅁ' }, caption: BLANK }, { state: { cho: 'ㄱ', jung: 'ㅏ', jong: 'ㅇ' }, caption: BLANK }, { state: { cho: 'ㅅ', jung: 'ㅏ', jong: 'ㄴ' }, caption: BLANK }], answer: '감, 강, 산' },
          { type: 'choice', prompt: '물이 길게 흘러가는 곳은 어느 것일까요?', options: ['감', '강', '산'], answer: '강' },
          { type: 'blank', prompt: '뜻에 알맞은 낱말을 쓰세요.', text: '달고 주황색인 과일 → ______     나무가 많고 높은 땅 → ______', answer: '감, 산' },
          { type: 'short', prompt: '받침만 다른 글자 짝을 하나 찾아 써 보세요.' },
        ],
        easy: { note: '받침을 보고 읽어요.', items: [
          { type: 'choice', prompt: '받침이 ㅇ인 글자에 ○ 하세요.', options: ['감', '강'], answer: '강' },
          { type: 'blank', prompt: '글자를 따라 쓰세요.', text: '감 → ___     강 → ___', answer: '감, 강' },
          { type: 'choice', prompt: '먹는 과일에 ○ 하세요.', options: ['감', '강'], answer: '감' },
          { type: 'draw', prompt: '감이나 강 중 하나를 그리고 글자를 써 보세요.' },
        ] },
      },
      differentiation: {
        easy: '받침 조각이 네 개이고 자리 안내가 있어요. 낱말 이어 읽기는 맞게 이으면 초록 테두리가 생겨요.',
        base: '만든 글자는 확인 뒤에 보이고, 낱말과 뜻을 스스로 이어요.',
        challenge: '내 글자 듣기 단추가 없고, 더 해 보기(\'눈\' 만들기, 받침이 ㅇ인 낱말 고르기)까지 풀어요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 받침을 뜻 없이 아무거나 고른다 → 뜻을 먼저 말하고 그 낱말 소리를 입으로 내 보게 한다. ② ㅁ과 ㅇ의 끝소리를 구별하지 못한다 → 입을 다무는지 입이 열려 목이 울리는지를 손을 목에 대고 느끼게 한다. ③ 글자 모양만 보고 읽는다 → 받침을 짚고 소리 내어 읽게 한다. 낱말은 모두 1학년이 아는 쉬운 것으로 골랐다.',
    }),

    // ───────────────────────── 5. 짧은 글의 중심 낱말 찾기 ─────────────────────────
    L(5, {
      title: '짧은 글이 무엇에 대한 글인지 찾기',
      objective: '세 문장 안팎의 짧은 글을 읽고 글이 무엇에 대해 말하는지 중심 낱말을 찾고, 글의 처음·가운데·끝 차례를 알 수 있다.',
      standards: READ3,
      illustration: ART('a magnifying glass over a short paper text card that has the same word repeated three times', '개미 개미 개미'),
      stages: ST(
        { teacher: '"세 문장을 읽어 볼게요. \'개미는 작아요. 개미는 줄을 지어 가요. 개미는 먹이를 날라요.\' 어떤 낱말이 자꾸 나왔나요?" 반복되는 낱말을 칠판에 동그라미 친다. "글에서 자꾸 나오는 낱말이 무엇에 대한 글인지 알려 줘요."', student: '짧은 글을 읽고 무엇에 대한 글인지 찾아봐요.', demo: { tool: 'mindmap', options: { mode: 'pick', topic: '무엇에 대한 글', basket: '글의 중심 낱말', shuffle: false, cards: [{ id: 'ant', text: '개미' }, { id: 'rain', text: '구름' }] }, sequence: [{ pick: ['ant'] }] } },
        '"오늘 읽은 글에서 가장 자주 나온 낱말은 무엇이었나요?" 두세 명이 말하고 \'이 글은 ~에 대한 글이에요.\' 모양으로 말해 본다. 출구 1번에서 글에 한 번만 나온 낱말을 고른 학생에게는 가장 많이 나오는 낱말을 손가락으로 세어 보게 한다.',
        [
          A('a1', '활동 1. 글을 읽고 중심 낱말 찾기', 13, 'mindmap',
            '"글에서 같은 낱말이 몇 번 나오나요? 손가락으로 짚으며 세어 봐요." 글을 한 줄씩 소리 내어 읽게 한다. \'먹이\'를 고른 학생에게는 "먹이는 한 번만 나왔어요. 가장 많이 나온 낱말은 무엇일까요?"라고 되묻는다.',
            '글을 읽고 무엇에 대한 글인지 중심 낱말을 찾아요.', LV,
            [
              PICK('개미는 작아요. 개미는 줄을 지어 가요. 개미는 먹이를 날라요. 무엇에 대한 글일까요?', '글의 중심 낱말', [C('ant', '개미'), C('food', '먹이'), C('line', '줄')], ['ant'], 0.15),
              MATCH('글을 읽고 무엇에 대한 글인지 이어 보세요.', '글의 중심', [{ id: 'g1', label: '사과는 빨개요. 사과는 달아요.' }, { id: 'g2', label: '구름은 하얘요. 구름은 하늘에 떠요.' }, { id: 'g3', label: '비누는 거품이 나요. 비누로 손을 씻어요.' }], [C('apple', '사과'), C('cloud', '구름'), C('soap', '비누'), C('hand', '손')], { g1: 'apple', g2: 'cloud', g3: 'soap' }, 0.2),
              SORT('문장 카드를 개미 글과 참새 글로 나누어 보세요.', '글감 가르기', [{ id: 'ant', label: '개미에 대한 글' }, { id: 'bird', label: '참새에 대한 글' }], [C('s1', '몸이 아주 작아요.'), C('s2', '날개로 날아요.'), C('s3', '줄을 지어 걸어요.'), C('s4', '나뭇가지에 앉아요.')], { ant: ['s1', 's3'], bird: ['s2', 's4'] }, 0.25,
                { conclude: '글에서 자주 나오는 낱말과 그 낱말을 설명하는 문장이 글의 중심이에요.' }),
              PICK('더 해 보기: \'우산\'에 대한 글의 문장을 모두 골라 보세요.', '우산에 대한 문장', [C('u1', '우산은 비를 막아 줘요.'), C('u2', '우산을 펴요.'), C('u3', '공을 던져요.')], ['u1', 'u2'], 0.3, { extra: true }),
            ]),
          A('a2', '활동 2. 글의 처음·가운데·끝 차례 알기', 13, 'story',
            '"글에는 처음에 소개하는 문장, 가운데에 알려 주는 문장, 끝에 마무리하는 문장이 있어요." 문장을 소리 내어 읽고 차례를 정하게 한다. 소개 문장을 가운데에 놓는 학생에게는 "무엇에 대한 글인지 먼저 알려 주는 문장이 어느 것일까요?"라고 묻는다.',
            '문장 카드를 글의 차례대로 놓아요.', LV,
            [
              ORDER('사과 글의 문장 카드를 글의 차례대로 놓아 보세요.', [C('a1', '여기 사과가 있어요.'), C('a2', '사과는 빨개요.'), C('a3', '사과는 아삭아삭 달아요.')], ['a1', 'a2', 'a3'], 0.2),
              ORDER('토끼 글의 문장 카드를 글의 차례대로 놓아 보세요.', [C('r1', '숲속에 토끼가 살아요.'), C('r2', '토끼는 귀가 길어요.'), C('r3', '토끼는 깡충깡충 뛰어요.')], ['r1', 'r2', 'r3'], 0.25),
              FILL('빈칸에 알맞은 낱말을 놓아 글을 완성해 보세요.', [{ id: 'a', label: '여기 ___가 있어요.' }, { id: 'b', label: '고래는 바다에서 ___.' }], [C('whale', '고래'), C('swim', '헤엄쳐요'), C('tree', '나무'), C('sing', '노래해요')], { a: 'whale', b: 'swim' }, 0.25),
              ORDER('더 해 보기: 꽃 글의 문장 카드를 글의 차례대로 놓아 보세요.', [C('f1', '화단에 꽃이 피었어요.'), C('f2', '꽃은 노란색이에요.'), C('f3', '벌이 꽃에 앉아요.'), C('f4', '꽃은 정말 예뻐요.')], ['f1', 'f2', 'f3', 'f4'], 0.3, { extra: true }),
            ]),
        ],
        [
          CH('\'고양이는 귀여워요. 고양이는 낮에 잠을 자요. 고양이는 우유를 좋아해요.\' 무엇에 대한 글일까요?', ['고양이', '우유', '낮'], 0, '고양이가 세 문장에 모두 나왔어요. 글은 고양이에 대해 말하고 있어요.', 0.15),
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '무엇에 대한 글', basket: '글의 중심 낱말', cards: [C('bee', '꿀벌'), C('honey', '꿀'), C('flower', '꽃')] }, prompt: '꿀벌은 작아요. 꿀벌은 꿀을 모아요. 꿀벌은 집으로 가요. 무엇에 대한 글일까요?', target: { pick: ['bee'] }, difficulty: 0.2 },
          MOOD,
        ]),
      worksheet: {
        title: '무엇에 대한 글일까요',
        items: [
          { type: 'table', prompt: '글을 읽고 무엇에 대한 글인지 쓰세요.', columns: ['글', '무엇에 대한 글'], cells: [['강아지는 꼬리를 흔들어요. 강아지는 뛰어요.', ''], ['눈은 하얘요. 눈은 차가워요.', ''], ['시계는 똑딱똑딱 소리가 나요.', '']] },
          { type: 'choice', prompt: '\'나비는 날개가 예뻐요. 나비는 꽃을 좋아해요.\' 무엇에 대한 글일까요?', options: ['나비', '꽃', '날개'], answer: '나비' },
          { type: 'check', prompt: '글의 처음에 올 문장에 ✓ 하세요.', options: ['여기 기린이 있어요.', '기린은 목이 길어요.', '기린은 정말 높아요.'], answer: '여기 기린이 있어요.' },
          { type: 'short', prompt: '내가 좋아하는 것을 하나 정하고 그것에 대한 문장을 두 개 써 보세요.' },
        ],
        easy: { note: '자꾸 나오는 낱말을 찾아요.', items: [
          { type: 'choice', prompt: '\'새는 날아요. 새는 노래해요.\' 자꾸 나오는 낱말에 ○ 하세요.', options: ['새', '날아요'], answer: '새' },
          { type: 'blank', prompt: '낱말을 따라 쓰세요.', text: '새', answer: '새' },
          { type: 'choice', prompt: '글의 처음에 올 문장에 ○ 하세요.', options: ['여기 새가 있어요.', '새는 정말 예뻐요.'], answer: '여기 새가 있어요.' },
          { type: 'draw', prompt: '좋아하는 동물을 그리고 이름을 써 보세요.' },
        ] },
      },
      differentiation: {
        easy: '중심 낱말 고르기는 카드가 셋이고 맞게 놓으면 초록 테두리가 생겨요. 차례 놓기는 문장 카드가 셋이에요.',
        base: '글을 읽고 낱말을 스스로 세어 고른 뒤 확인해요.',
        challenge: '더 해 보기(우산 글, 네 문장 꽃 글 차례 놓기)까지 풀어요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 글에서 한 번 나온 낱말을 중심으로 고른다 → 같은 낱말에 같은 색으로 동그라미를 쳐서 세어 보게 한다. ② 소개 문장을 가운데나 끝에 놓는다 → 처음 문장이 무엇에 대한 글인지 알려 주는 말이라고 알려 준다. ③ 글 전체를 읽지 않고 첫 낱말만 본다 → 한 줄씩 손가락으로 짚으며 끝까지 읽게 한다. 모든 글은 이 단원을 위해 새로 지었다.',
    }),

    // ───────────────────────── 6. 글에 어울리는 제목과 까닭 ─────────────────────────
    L(6, {
      title: '글에 어울리는 제목을 붙이고 까닭 말하기',
      objective: '짧은 글에 어울리는 제목을 붙이고, 글에 있는 말을 근거로 까닭을 찾아 말할 수 있다.',
      standards: READ3,
      illustration: ART('a paper child sticking a title label onto a short story card while a friend points at a matching sentence', '글의 제목'),
      stages: ST(
        { teacher: '"책 표지에는 제목이 있지요? 제목은 글 전체를 한마디로 알려 줘요." \'민지는 매일 아침 강아지와 산책해요.\' 문장을 쓰고 두 제목 \'아침 산책\'과 \'생일 잔치\'를 보여 준다. "어느 제목이 어울릴까요? 글의 어느 낱말을 보고 알았나요?"', student: '글에 어울리는 제목을 붙이고, 어떻게 알았는지 까닭도 말해 봐요.', demo: { tool: 'mindmap', options: { mode: 'match', topic: '제목 붙이기', shuffle: false, slots: [{ id: 'g', label: '민지는 아침에 강아지와 산책해요.' }], cards: [{ id: 'walk', text: '아침 산책' }, { id: 'party', text: '생일 잔치' }] }, sequence: [{ match: { g: 'walk' } }] } },
        '"오늘 붙인 제목 가운데 가장 마음에 드는 제목은 무엇인가요? 왜 그 제목을 붙였나요?" 한두 명이 글의 낱말을 말하며 설명한다. 출구 1번에서 글과 다른 제목을 고른 학생에게는 글에서 가장 자주 나온 낱말이 제목에 있는지 확인하게 한다.',
        [
          A('a1', '활동 1. 글에 어울리는 제목과 근거 찾기', 13, 'mindmap',
            '"제목은 글에서 가장 중요한 말이에요. 글의 낱말과 제목의 낱말이 같은지 살펴봐요." 글과 제목을 번갈아 읽게 한다. \'생일 잔치\'를 고른 학생에게는 "글에 생일이라는 말이 있나요?"라고 되묻는다.',
            '글에 어울리는 제목을 고르고, 글에서 근거를 찾아요.', LV,
            [
              MATCH('글에 어울리는 제목을 이어 보세요.', '글의 제목', [{ id: 'g1', label: '꿀벌은 꽃에서 꿀을 모아요. 꿀을 집으로 날라요.' }, { id: 'g2', label: '눈이 오면 아이들이 신나요. 눈사람을 만들어요.' }], [C('bee', '꿀을 모으는 꿀벌'), C('snow', '눈 오는 날'), C('night', '깜깜한 밤')], { g1: 'bee', g2: 'snow' }, 0.2),
              SORT('민지는 매일 아침 강아지와 산책해요. 제목 카드를 어울리는 것과 어울리지 않는 것으로 나누어 보세요.', '제목 후보', [{ id: 'good', label: '글에 어울려요' }, { id: 'bad', label: '글에 어울리지 않아요' }], [C('t1', '민지와 강아지의 산책'), C('t2', '민지의 생일'), C('t3', '아침 산책'), C('t4', '강아지 목욕')], { good: ['t1', 't3'], bad: ['t2', 't4'] }, 0.25),
              MATCH('말과 그 까닭이 되는 글의 내용을 이어 보세요.', '까닭 찾기', [{ id: 'm1', label: '준호는 달리기를 잘해요.' }, { id: 'm2', label: '서아는 그림을 잘 그려요.' }], [C('run', '운동회에서 일등을 했어요.'), C('draw', '그림 대회에서 상을 받았어요.'), C('eat', '점심을 먹었어요.')], { m1: 'run', m2: 'draw' }, 0.25,
                { conclude: '말에는 까닭이 있어요. 글에서 그 까닭이 되는 내용을 찾으면 믿을 수 있어요.' }),
              PICK('더 해 보기: \'참새가 나뭇가지에 앉아 노래해요.\' 글에 어울리는 제목을 모두 골라 보세요.', '글에 어울려요', [C('s1', '노래하는 참새'), C('s2', '나뭇가지의 참새'), C('s3', '바다의 고래')], ['s1', 's2'], 0.3, { extra: true }),
            ]),
          A('a2', '활동 2. 글에 없는 말을 들었을 때 어떻게 할까', 13, 'emotion',
            '"글에 없는 말을 친구가 했어요. 그럴 때 어떻게 하면 좋을까요?" 글을 다시 읽으며 확인하는 방법을 말하게 한다. \'그냥 믿어요\'를 고른 학생에게는 "그 말이 글 어디에 있었나요?"라고 되묻는다.',
            '글에 없는 말을 들었을 때 알맞게 행동하는 방법을 골라요.', LV,
            [
              BR('서아가 글에서 읽지 않은 말을 했어요. 준호는 어떻게 하면 좋을까요?', '준호', '서아가 "이 글에서 토끼는 노란색이래!" 하고 말했는데, 글에는 토끼 색이 없어요.', [{ id: 'check', text: '글을 다시 읽어 보고 확인해요', result: '글에 토끼 색이 없다는 것을 알게 돼요', mood: '뿌듯함' }, { id: 'believe', text: '그냥 그렇다고 믿어요', result: '틀린 내용을 계속 기억하게 돼요', mood: '걱정', why: '글에 없는 말을 믿으면 내용이 맞을까요?' }, { id: 'laugh', text: '크게 웃고 틀렸다고 말해요', result: '서아가 속상해서 말을 하지 않아요', mood: '속상함', why: '웃음소리를 들은 서아의 마음은 어떨까요?' }], 'check', 0.15),
              BR('지우가 읽고 있는 글에 제목과 다른 내용이 나와요. 어떻게 하면 좋을까요?', '지우', '글 제목이 \'고양이\'인데 읽어 보니 계속 강아지 이야기가 나와요.', [{ id: 'again', text: '제목과 글을 다시 읽어 보고 짝에게 물어요', result: '제목이 글과 맞지 않는다는 것을 알게 돼요', mood: '편안함' }, { id: 'ignore', text: '그냥 끝까지 읽고 잊어요', result: '이상한 점을 누구에게도 말하지 못해요', mood: '걱정', why: '이상한 점을 말하지 않으면 누가 고칠 수 있을까요?' }], 'again', 0.2),
              BR('민지가 친구에게 "이 책이 제일 재미있어."라고 말했어요. 준호는 어떻게 하면 좋을까요?', '준호', '민지는 왜 재미있는지는 말하지 않았어요.', [{ id: 'ask', text: '"어디가 재미있었어?" 하고 까닭을 물어요', result: '민지가 재미있었던 장면을 말해 줘요', mood: '고마움' }, { id: 'agree', text: '"나도 그래!" 하고 아무 말이나 맞장구쳐요', result: '무엇이 재미있는지 알 수 없어요', mood: '걱정', why: '까닭을 모르고 맞장구치면 책이 어떤지 알 수 있을까요?' }], 'ask', 0.25),
            ]),
        ],
        [
          CH('\'토끼가 당근을 먹어요. 토끼는 당근을 좋아해요.\' 어울리는 제목은 어느 것일까요?', ['당근을 좋아하는 토끼', '바다의 상어', '비 오는 날'], 0, '글에 토끼와 당근이 자꾸 나오므로 그 낱말이 들어간 제목이 어울려요.', 0.15),
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '제목 붙이기', slots: [{ id: 'g', label: '아기가 잠을 자요. 아기가 쌔근쌔근 숨을 쉬어요.' }], cards: [C('sleep', '잠자는 아기'), C('run', '달리는 아기'), C('eat', '밥 먹는 아기')] }, prompt: '글에 어울리는 제목을 이어 보세요.', target: { match: { g: 'sleep' } }, difficulty: 0.2 },
          MOOD,
        ]),
      worksheet: {
        title: '제목과 까닭',
        items: [
          { type: 'choice', prompt: '\'다람쥐가 도토리를 모아요. 다람쥐는 도토리를 땅에 숨겨요.\' 어울리는 제목은 어느 것일까요?', options: ['도토리를 모으는 다람쥐', '비 오는 날', '파란 바다'], answer: '도토리를 모으는 다람쥐' },
          { type: 'table', prompt: '글을 읽고 알맞은 제목을 쓰세요.', columns: ['글', '제목'], cells: [['고양이가 우유를 마셔요. 고양이가 입을 핥아요.', ''], ['달이 뜨면 밤이 돼요. 달은 노랗게 빛나요.', '']] },
          { type: 'blank', prompt: '까닭이 되는 글의 낱말을 쓰세요.', text: '"이 글은 개미에 대한 글이에요." 까닭: 글에 ______가 자꾸 나와요.', answer: '개미' },
          { type: 'short', prompt: '내가 읽은 글에 붙이고 싶은 제목을 쓰고, 왜 그 제목인지 한 문장으로 써 보세요.' },
        ],
        easy: { note: '글에서 가장 많이 나온 낱말이 제목이 돼요.', items: [
          { type: 'choice', prompt: '\'개가 짖어요. 개가 뛰어요.\' 어울리는 제목에 ○ 하세요.', options: ['개', '꽃'], answer: '개' },
          { type: 'blank', prompt: '제목을 따라 쓰세요.', text: '달리는 개', answer: '달리는 개' },
          { type: 'choice', prompt: '\'서아가 그림을 그려요.\' 어울리는 제목에 ○ 하세요.', options: ['그림 그리기', '운동하기'], answer: '그림 그리기' },
          { type: 'draw', prompt: '내가 읽은 글의 그림을 그리고 제목을 써 보세요.' },
        ] },
      },
      differentiation: {
        easy: '제목 이어 보기는 글이 짧고 맞게 이으면 초록 테두리가 생겨요. 행동 고르기는 선택이 둘이에요.',
        base: '글과 제목을 스스로 견주어 고른 뒤 확인하고, 이야기 결과를 읽고 다시 생각해요.',
        challenge: '더 해 보기(제목 후보 고르기)까지 풀고 까닭도 직접 말해요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 글과 상관없이 재미있어 보이는 제목을 고른다 → 제목에 글의 중심 낱말이 있는지 확인하게 한다. ② 까닭을 말할 때 "그냥"이라고 한다 → 글의 어느 낱말을 보고 알았는지 손가락으로 짚어 보게 한다. ③ 글에 없는 말을 믿는다 → 글을 다시 읽어 확인하는 습관을 만든다. 상황 속 인물 이름은 모두 가명이다.',
    }),

    // ───────────────────────── 7. 읽기 습관 돌아보기 ─────────────────────────
    L(7, {
      title: '읽는 순서를 지키고 내 읽기 습관 돌아보기',
      objective: '읽기 전·읽는 중·읽은 뒤에 할 일을 차례대로 알고, 막힐 때 하는 행동을 고르며 내 읽기 습관을 돌아볼 수 있다.',
      standards: READ3,
      illustration: ART('a paper child reading a book at a desk with three small step labels floating above the page', '읽기 전  읽는 중  읽은 뒤'),
      stages: ST(
        { teacher: '"책을 읽을 때는 읽기 전, 읽는 중, 읽은 뒤에 할 일이 있어요. 읽기 전에는 무엇을 먼저 볼까요?" 책 표지를 들고 제목과 그림을 보게 한다. 시연 단추로 세 단계 카드가 차례대로 놓이는 모습을 보여 준다.', student: '글을 읽기 전과 읽는 중, 읽은 뒤에 어떻게 하면 좋은지 알아봐요.', demo: { tool: 'mindmap', options: { mode: 'order', topic: '읽는 순서', shuffle: false, slots: ['첫째', '둘째', '셋째'], cards: [{ id: 'cover', text: '제목과 그림을 봐요' }, { id: 'read', text: '소리 내어 읽어요' }, { id: 'think', text: '읽고 생각해 봐요' }] }, sequence: [{ order: ['cover', 'read', 'think'] }] } },
        '"오늘 글을 읽을 때 가장 잘한 일은 무엇인가요?" 두세 명이 말하고 서로 칭찬한다. 출구 1번에서 순서를 거꾸로 놓은 학생에게는 읽기 전에 표지를 보는 까닭을 다시 떠올리게 한다.',
        [
          A('a1', '활동 1. 읽는 순서와 막힐 때 할 일 알기', 13, 'mindmap',
            '"책을 펴기 전에 무엇을 하면 좋을까요?" 표지를 보며 어떤 이야기일지 말해 보게 한다. 읽은 뒤에 바로 덮는 학생에게는 "읽은 것이 기억나는지 한 가지만 말해 볼까요?"라고 묻는다.',
            '읽기 순서를 놓고, 읽다가 막힐 때 하는 방법을 골라요.', LV,
            [
              ORDER('책을 읽는 차례대로 카드를 놓아 보세요.', [C('cover', '제목과 그림을 봐요'), C('read', '소리 내어 읽어요'), C('think', '읽고 생각해 봐요')], ['cover', 'read', 'think'], 0.2),
              MATCH('읽다가 만난 일과 알맞은 방법을 이어 보세요.', '막힐 때', [{ id: 'word', label: '모르는 낱말이 나왔어요' }, { id: 'forget', label: '읽은 내용이 생각나지 않아요' }], [C('ask', '짝이나 선생님께 물어요'), C('again', '처음부터 다시 읽어요'), C('close', '책을 덮어 버려요')], { word: 'ask', forget: 'again' }, 0.2),
              SORT('읽는 모습 카드를 잘하고 있어요와 더 노력해요로 나누어 보세요.', '내 읽는 모습', [{ id: 'good', label: '잘하고 있어요' }, { id: 'more', label: '더 노력해요' }], [C('q1', '끝까지 읽어요'), C('q2', '줄을 놓치지 않아요'), C('q3', '읽다가 그만 덮어요'), C('q4', '모르는 낱말을 넘겨요')], { good: ['q1', 'q2'], more: ['q3', 'q4'] }, 0.25),
              PICK('더 해 보기: 읽은 뒤에 하면 좋은 일을 모두 골라 보세요.', '읽은 뒤에', [C('tell', '짝에게 이야기해요'), C('draw', '기억나는 장면을 그려요'), C('lost', '책을 어디에 뒀는지 잊어버려요')], ['tell', 'draw'], 0.3, { extra: true }),
            ]),
          A('a2', '활동 2. 오늘 내 읽기 모습 돌아보기', 13, 'emotion',
            '"오늘 읽은 내 모습을 떠올려 봐요. 정답은 없으니 솔직하게 눈금을 골라요." 눈금을 고르고 이유를 짝에게 말하게 한다. 모두 \'잘해요\'를 고른 학생에게는 "어느 낱말에서 가장 오래 걸렸나요?"라고 묻는다.',
            '오늘 읽을 때 내 모습에 알맞은 눈금을 골라요.', LV,
            [
              SC('오늘 책을 읽기 전에 제목과 그림을 얼마나 살펴보았나요? 솔직하게 골라요.', '책을 읽기 전에 표지를 보았어요.', '편안함', '표지를 얼마나 살펴보았나요?'),
              SC('오늘 읽다가 막혔을 때 짝이나 선생님께 얼마나 물어보았나요? 솔직하게 골라요.', '읽다가 모르는 낱말을 만났어요.', '용기', '막혔을 때 얼마나 물어보았나요?'),
              SC('오늘 글을 읽고 난 뒤 내용을 얼마나 떠올려 보았나요? 솔직하게 골라요.', '다 읽고 나서 이야기를 떠올렸어요.', '뿌듯함', '읽은 뒤에 얼마나 떠올렸나요?'),
            ]),
        ],
        [
          CH('책을 읽을 때 가장 먼저 하면 좋은 일은 무엇일까요?', ['제목과 그림 보기', '책 덮기', '바로 잠자기'], 0, '읽기 전에 제목과 그림을 보면 무엇에 대한 글인지 짐작할 수 있어요.', 0.1),
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '막힐 때', basket: '좋은 방법', cards: [C('ask', '물어봐요'), C('again', '다시 읽어요'), C('skip', '그냥 넘겨요')] }, prompt: '글을 읽다가 막혔을 때 좋은 방법을 모두 골라 보세요.', target: { pick: ['ask', 'again'] }, difficulty: 0.2 },
          MOOD,
        ]),
      worksheet: {
        title: '내 읽기 습관',
        items: [
          { type: 'table', prompt: '읽기 전·중·뒤에 할 일을 번호로 쓰세요. (1 읽기 전, 2 읽는 중, 3 읽은 뒤)', columns: ['할 일', '번호'], cells: [['소리 내어 읽어요', ''], ['제목과 그림을 봐요', ''], ['읽은 내용을 짝에게 말해요', '']] },
          { type: 'choice', prompt: '읽다가 모르는 낱말이 나왔을 때 알맞은 행동은 어느 것일까요?', options: ['물어봐요', '그냥 넘어가요', '책을 덮어요'], answer: '물어봐요' },
          { type: 'check', prompt: '읽기 전에 하면 좋은 일에 모두 ✓ 하세요.', options: ['제목을 봐요', '표지 그림을 봐요', '책을 덮어요'], answer: '제목을 봐요, 표지 그림을 봐요' },
          { type: 'table', prompt: '내 실력에 ○ 하세요.', columns: ['내 모습', '아직', '조금', '잘해요'], cells: [['끝까지 읽어요', '', '', ''], ['막히면 물어봐요', '', '', '']] },
        ],
        easy: { note: '읽는 순서를 떠올려요.', items: [
          { type: 'choice', prompt: '책을 읽기 전에 보는 것에 ○ 하세요.', options: ['제목과 그림', '책 뒷면 끝'], answer: '제목과 그림' },
          { type: 'blank', prompt: '낱말을 따라 쓰세요.', text: '읽기 전', answer: '읽기 전' },
          { type: 'choice', prompt: '모르는 낱말이 나오면 어떻게 하나요?', options: ['물어봐요', '덮어요'], answer: '물어봐요' },
          { type: 'draw', prompt: '내가 읽은 책의 표지를 그려 보세요.' },
        ] },
      },
      differentiation: {
        easy: '읽기 순서는 카드가 셋이고 맞게 놓으면 초록 테두리가 생겨요. 자기 평가 눈금은 세 칸이에요.',
        base: '카드를 모두 놓은 뒤 확인하고, 막힐 때 방법을 스스로 이어요.',
        challenge: '더 해 보기(읽은 뒤에 할 일)까지 풀고 내 읽기 모습을 문장으로 말해요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 읽기 순서를 외우기만 하고 왜 하는지 모른다 → 표지를 먼저 보면 어떤 이야기일지 짐작이 되고 뜻을 이해하기 쉽다고 말한다. ② 자기 평가에서 모든 눈금을 같은 곳에 둔다 → 오늘 읽은 장면 하나를 떠올려 고르게 한다. ③ 막힐 때 물어보기를 부끄러워한다 → 선생님도 모를 때 물어본다고 말해 준다. 자기 평가는 성적에 반영하지 않는다.',
    }),

    // ───────────────────────── 8. 문장 부호와 낱말 순서 ─────────────────────────
    L(8, {
      title: '문장 끝 부호 붙이고 낱말을 차례대로 놓아 문장 만들기',
      objective: '마침표·물음표·느낌표가 쓰이는 때를 알아 알맞게 붙이고, 낱말 카드를 차례대로 놓아 바른 문장을 만들 수 있다.',
      standards: WRITE,
      illustration: ART('three paper word cards forming a sentence with a big round full stop at the end', '책을 읽어요.'),
      stages: ST(
        { teacher: '"문장이 끝나면 끝 부호를 붙여요. 말하는 것은 마침표, 묻는 것은 물음표, 놀랐을 때는 느낌표를 써요." 칠판에 \'오늘은 날씨가 맑아요\', \'지금 몇 시예요\', \'우와 정말 크다\'를 쓰고 소리 내어 읽으며 알맞은 부호를 붙여 본다.', student: '문장 끝에 알맞은 부호를 붙이고, 낱말을 차례대로 놓아 문장을 만들어 봐요.', demo: { tool: 'mindmap', options: { topic: '문장 부호', shuffle: false, slots: [{ id: 'dot', label: '마침표(.)' }, { id: 'q', label: '물음표(?)' }], cards: [{ id: 's1', text: '날씨가 맑아요' }, { id: 's2', text: '지금 몇 시예요' }] }, sequence: [{ sort: { dot: ['s1'], q: ['s2'] } }] } },
        '"오늘 문장을 만들 때 가장 중요하게 생각한 것은 무엇인가요?" 두세 명이 말하고 칠판에 문장 하나를 함께 완성한다. 출구 1번에서 질문 문장에 마침표를 붙인 학생에게는 소리 내어 읽으며 올려 읽는지 확인하게 한다.',
        [
          A('a1', '활동 1. 문장 끝에 알맞은 부호 붙이기', 13, 'mindmap',
            '"소리 내어 읽어 보고, 말하는 문장인지 묻는 문장인지 놀라는 문장인지 생각해요." 문장을 소리 내어 읽으며 끝을 올리거나 내려 보게 한다. \'오늘 비가 와요\'에 물음표를 붙이는 학생에게는 "묻는 말인가요, 알려 주는 말인가요?"라고 되묻는다.',
            '문장에 알맞은 끝 부호를 골라요.', LV,
            [
              SORT('문장 카드를 알맞은 끝 부호 칸에 놓아 보세요.', '문장 끝 부호', [{ id: 'dot', label: '마침표(.)' }, { id: 'q', label: '물음표(?)' }, { id: 'ex', label: '느낌표(!)' }], [C('a1', '오늘은 날씨가 맑아요'), C('a2', '너는 무슨 색을 좋아해'), C('a3', '우와 정말 높다'), C('a4', '동생이 노래를 불러요'), C('a5', '지금 몇 시예요'), C('a6', '불이야')], { dot: ['a1', 'a4'], q: ['a2', 'a5'], ex: ['a3', 'a6'] }, 0.25,
                { levels: { easy: { prompt: '문장 카드 넷을 알맞은 끝 부호 칸에 놓아 보세요.', toolOptions: { slots: [{ id: 'dot', label: '마침표(.)' }, { id: 'q', label: '물음표(?)' }], cards: [C('a1', '오늘은 날씨가 맑아요'), C('a2', '너는 무슨 색을 좋아해'), C('a4', '동생이 노래를 불러요'), C('a5', '지금 몇 시예요')] }, target: { sort: { dot: ['a1', 'a4'], q: ['a2', 'a5'] } } } } }),
              MATCH('문장과 알맞은 끝 부호를 이어 보세요.', '부호 이어 보기', [{ id: 'm1', label: '이 책은 누가 썼어요' }, { id: 'm2', label: '아기가 잠을 자요' }, { id: 'm3', label: '와 눈이 와요' }], [C('q', '?'), C('dot', '.'), C('ex', '!')], { m1: 'q', m2: 'dot', m3: 'ex' }, 0.2),
              PICK('물음표(?)를 붙이는 것이 알맞은 문장을 모두 골라 보세요.', '물음표 문장', [C('p1', '어디에 가요'), C('p2', '학교에 가요'), C('p3', '무엇을 먹었어요')], ['p1', 'p3'], 0.25,
                { conclude: '묻는 말에는 물음표를, 알려 주는 말에는 마침표를 써요.' }),
              PICK('더 해 보기: 느낌표(!)를 붙이는 것이 알맞은 문장을 모두 골라 보세요.', '느낌표 문장', [C('e1', '우와 멋지다'), C('e2', '나는 밥을 먹어요'), C('e3', '앗 깜짝이야')], ['e1', 'e3'], 0.3, { extra: true }),
            ]),
          A('a2', '활동 2. 낱말을 차례대로 놓아 문장 만들기', 13, 'story',
            '"낱말 카드를 소리 내어 읽고, 누가 무엇을 하는지 순서를 생각해요." 마침표가 붙은 낱말이 맨 끝에 오는 까닭을 말하게 한다. \'책을 민지가 읽어요.\' 순서로 놓는 학생에게는 "누가 읽나요? 소리 내어 읽어 볼까요?"라고 묻는다.',
            '낱말 카드를 차례대로 놓아 알맞은 문장을 만들어요.', LV,
            [
              ORDER('낱말 카드를 차례대로 놓아 문장을 만들어 보세요.', [C('w1', '민지가'), C('w2', '책을'), C('w3', '읽어요.')], ['w1', 'w2', 'w3'], 0.2),
              ORDER('낱말 카드를 차례대로 놓아 문장을 만들어 보세요.', [C('x1', '준호가'), C('x2', '공을'), C('x3', '차요.')], ['x1', 'x2', 'x3'], 0.2),
              ORDER('낱말 카드를 차례대로 놓아 문장을 만들어 보세요.', [C('y1', '아기가'), C('y2', '우유를'), C('y3', '마셔요.')], ['y1', 'y2', 'y3'], 0.25),
              ORDER('더 해 보기: 낱말 카드를 차례대로 놓아 문장을 만들어 보세요.', [C('z1', '동생이'), C('z2', '마당에서'), C('z3', '노래를'), C('z4', '불러요.')], ['z1', 'z2', 'z3', 'z4'], 0.3, { extra: true }),
            ]),
        ],
        [
          CH('\'지금 몇 시예요\' 끝에 알맞은 부호는 무엇일까요?', ['마침표(.)', '물음표(?)', '느낌표(!)'], 1, '묻는 말이므로 물음표(?)를 붙여요.', 0.15),
          { type: 'tool', tool: 'story', options: { mode: 'order', slots: ['첫째', '둘째', '셋째'], cards: [C('o1', '언니가'), C('o2', '빵을'), C('o3', '먹어요.')] }, prompt: '낱말 카드를 차례대로 놓아 문장을 만들어 보세요.', target: { order: ['o1', 'o2', 'o3'] }, difficulty: 0.2 },
          MOOD,
        ]),
      worksheet: {
        title: '문장 끝 부호',
        items: [
          { type: 'table', prompt: '문장 끝에 알맞은 부호를 쓰세요.', columns: ['문장', '부호'], cells: [['오늘은 날씨가 맑아요', ''], ['너는 어디에 살아', ''], ['우와 정말 예쁘다', '']] },
          { type: 'choice', prompt: '\'학교에 가요\' 끝에 알맞은 부호는 어느 것일까요?', options: ['.', '?', '!'], answer: '.' },
          { type: 'blank', prompt: '낱말을 차례대로 써서 문장을 만드세요.', text: '고양이가 / 우유를 / 마셔요.  →  ______________________', answer: '고양이가 우유를 마셔요.' },
          { type: 'short', prompt: '친구에게 묻고 싶은 말을 한 문장으로 쓰고 알맞은 부호를 붙여 보세요.' },
        ],
        easy: { note: '묻는 말에는 물음표를 붙여요.', items: [
          { type: 'choice', prompt: '묻는 문장 끝에 쓰는 부호에 ○ 하세요.', options: ['.', '?'], answer: '?' },
          { type: 'blank', prompt: '부호를 따라 쓰세요.', text: '. ? !', answer: '. ? !' },
          { type: 'blank', prompt: '문장을 따라 쓰세요.', text: '나는 책을 읽어요.', answer: '나는 책을 읽어요.' },
          { type: 'draw', prompt: '내가 좋아하는 일을 그리고 한 문장 써 보세요.' },
        ] },
      },
      differentiation: {
        easy: '부호 가르기는 카드가 넷이고 마침표와 물음표 두 칸이에요. 낱말 놓기는 카드가 셋이고 맞게 놓으면 초록 테두리가 생겨요.',
        base: '카드를 모두 놓은 뒤 확인하고, 문장을 소리 내어 읽으며 부호를 정해요.',
        challenge: '느낌표까지 세 칸으로 나누고, 더 해 보기(네 낱말 문장)까지 풀어요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 문장마다 마침표만 붙인다 → 소리 내어 읽으며 끝을 올리면 물음표, 놀라면 느낌표라고 말해 준다. ② 낱말을 놓는 순서가 어색하다 → 누가·무엇을·어떻게 순서로 말하며 소리 내어 읽어 보게 한다. ③ 조사(가/이, 를/을)를 틀린다 → 받침이 있으면 이·을, 없으면 가·를을 쓴다는 규칙을 카드 글자에서 확인한다. 문장은 모두 새로 지은 것이다.',
    }),

    // ───────────────────────── 9. 쓴 글자와 소리가 다른 낱말 관찰하기 ─────────────────────────
    L(9, {
      title: '글자와 소리 내는 소리가 다른 낱말 관찰하기',
      objective: '받침 있는 낱말 뒤에 이/을이 오면 소리가 달라지는 낱말을 찾아 쓴 글자와 소리 내는 소리를 견줄 수 있다.',
      standards: GRAM,
      illustration: ART('two paper cards, one showing the written word and one showing how it sounds when read aloud, with a little arrow between them', '옷이  오시'),
      stages: ST(
        { teacher: '"칠판에 \'옷이\'라고 썼어요. 소리 내어 읽어 볼까요?" 학생들이 \'오시\'로 읽는 것을 듣고 "글자로는 옷이인데 소리는 오시로 났지요?"라고 짚는다. 받침 ㅅ이 뒤 글자의 ㅇ 자리로 넘어가 소리 나는 것을 화살표로 보여 준다. 시연 단추로 글자와 소리 카드가 이어지는 모습을 보여 준다.', student: '쓴 글자와 소리 내는 소리가 다른 낱말을 찾아봐요.', demo: { tool: 'mindmap', options: { mode: 'match', topic: '쓴 글자와 소리', shuffle: false, slots: [{ id: 'w', label: '옷이' }], cards: [{ id: 'osi', text: '오시' }, { id: 'oi', text: '오이' }] }, sequence: [{ match: { w: 'osi' } }] } },
        '"오늘 글자와 소리가 달랐던 낱말을 하나 말해 볼까요?" 두세 명이 말하고 소리를 크게 읽어 본다. 출구 1번에서 \'집이\'를 \'집이\' 소리 그대로 고른 학생에게는 받침 ㅂ이 뒤로 넘어가는 모습을 다시 손으로 짚어 보게 한다.',
        [
          A('a1', '활동 1. 쓴 낱말과 소리 이어 보기', 13, 'mindmap',
            '"소리 내어 읽고 어떻게 들리는지 귀를 기울여요." 낱말을 천천히 읽어 주고 따라 읽게 한다. \'밥을\'을 \'바블\' 대신 \'밥을\'로 읽는 학생에게는 "받침 ㅂ이 어디로 넘어갔나요?"라고 묻는다.',
            '쓴 낱말과 소리 내는 소리를 이어요.', LV,
            [
              MATCH('쓴 낱말과 소리 내는 소리를 이어 보세요.', '쓴 글자와 소리', [{ id: 'w1', label: '옷이' }, { id: 'w2', label: '밥을' }, { id: 'w3', label: '꽃이' }], [C('osi', '오시'), C('babeul', '바블'), C('kkochi', '꼬치'), C('oi', '오이')], { w1: 'osi', w2: 'babeul', w3: 'kkochi' }, 0.2),
              SORT('낱말 카드를 쓴 대로 읽는 것과 소리가 달라지는 것으로 나누어 보세요.', '소리가 달라져요', [{ id: 'same', label: '쓴 대로 읽어요' }, { id: 'diff', label: '소리가 달라져요' }], [C('namu', '나무'), C('moja', '모자'), C('osi', '옷이'), C('babeul', '밥을')], { same: ['namu', 'moja'], diff: ['osi', 'babeul'] }, 0.2),
              PICK('\'달이\'는 어떻게 읽을까요? 알맞은 소리 카드를 골라 보세요.', '소리 내어 읽기', [C('dari', '다리'), C('dari2', '달이'), C('dani', '다니')], ['dari'], 0.25,
                { conclude: '받침 ㄹ이 뒤 글자의 ㅇ 자리로 넘어가서 [다리]로 소리 나요.' }),
              PICK('더 해 보기: 이/을이 붙어 소리가 달라지는 낱말 카드를 모두 골라 보세요.', '소리가 달라져요', [C('sani', '산이'), C('haneul', '하늘'), C('chaeki', '책이'), C('nabi', '나비')], ['sani', 'chaeki'], 0.3, { extra: true }),
            ]),
          A('a2', '활동 2. 소리 나는 글자 만들어 보기', 13, 'hangul',
            '"낱말을 소리 내어 읽어 보고, 소리 나는 글자를 직접 만들어 봐요." 소리와 글자를 짝지어 읽게 한다. \'시\' 대신 \'옷\'을 만드는 학생에게는 "소리 나는 둘째 글자는 받침이 있을까요?"라고 묻는다.',
            '소리 나는 글자를 직접 만들어요.', HGL(['ㅅ', 'ㄹ', 'ㄴ', 'ㅊ'], ['ㅣ', 'ㅏ'], null),
            [
              HG('\'옷이\'는 [오시]로 읽어요. 둘째 소리 글자 \'시\'를 만들어 보세요.', '시', 0.15),
              HG('\'달이\'는 [다리]로 읽어요. 둘째 소리 글자 \'리\'를 만들어 보세요.', '리', 0.2),
              HG('\'산이\'는 [사니]로 읽어요. 둘째 소리 글자 \'니\'를 만들어 보세요.', '니', 0.25),
              HG('\'꽃이\'는 [꼬치]로 읽어요. 둘째 소리 글자 \'치\'를 만들어 보세요.', '치', 0.25),
              HG('더 해 보기: \'강이\'는 쓴 대로 [강이]로 읽어요. 둘째 글자 \'이\'를 만들어 보세요.', '이', 0.3, { extra: true, toolOptions: { consonants: ['ㅇ', 'ㅅ'], vowels: ['ㅣ', 'ㅏ'] } }),
            ]),
        ],
        [
          CH('\'집이\'를 소리 내어 읽으면 어떻게 읽을까요?', ['지비', '집이', '지이'], 0, '받침 ㅂ이 뒤 글자의 ㅇ 자리로 넘어가서 [지비]로 소리 나요.', 0.2),
          { type: 'tool', tool: 'hangul', options: { consonants: ['ㅂ', 'ㅅ'], vowels: ['ㅣ', 'ㅏ'], slotHints: true }, prompt: '\'집이\'는 [지비]로 읽어요. 둘째 소리 글자 \'비\'를 만들어 보세요.', target: { syllable: '비' }, difficulty: 0.25 },
          MOOD,
        ]),
      worksheet: {
        title: '쓴 글자와 소리',
        items: [
          { type: 'table', prompt: '소리 내어 읽은 소리를 쓰세요.', columns: ['쓴 낱말', '소리'], cells: [['옷이', ''], ['밥을', ''], ['산이', '']] },
          { type: 'choice', prompt: '\'꽃이\'는 어떻게 읽을까요?', options: ['꼬치', '꽃이', '꼬이'], answer: '꼬치' },
          { type: 'check', prompt: '쓴 대로 읽는 낱말에 모두 ✓ 하세요.', options: ['나무', '옷이', '모자'], answer: '나무, 모자' },
          { type: 'short', prompt: '내 방에서 소리가 달라지는 낱말을 하나 찾아 쓰고 어떻게 읽는지 써 보세요.' },
        ],
        easy: { note: '받침이 뒤 글자로 넘어가요.', items: [
          { type: 'choice', prompt: '\'옷이\'의 소리에 ○ 하세요.', options: ['오시', '오이'], answer: '오시' },
          { type: 'blank', prompt: '소리를 따라 쓰세요.', text: '오시', answer: '오시' },
          { type: 'choice', prompt: '쓴 대로 읽는 낱말에 ○ 하세요.', options: ['나무', '옷이'], answer: '나무' },
          { type: 'draw', prompt: '옷을 그리고 \'옷이\'와 소리를 써 보세요.' },
        ] },
      },
      differentiation: {
        easy: '이어 보기는 낱말이 셋이고 맞게 이으면 초록 테두리가 생겨요. 글자 만들기는 자리 글씨가 있고 모음을 들면 알맞은 자리가 깜박여요.',
        base: '낱말을 소리 내어 읽고 스스로 이은 뒤 확인하고, 만든 글자는 확인 뒤에 보여요.',
        challenge: '내 글자 듣기 단추가 없고, 더 해 보기(쓴 대로 읽는 \'강이\', 이/을이 붙은 낱말 고르기)까지 풀어요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 쓴 글자 그대로 읽는다(옷이→옷이) → 천천히 읽어 주고 받침이 뒤로 가는 모습을 손으로 따라가게 한다. ② 받침 ㅇ은 소리가 넘어가지 않는다는 것을 헷갈린다 → \'강이\'처럼 ㅇ 받침은 쓴 대로 읽는 것을 따로 짚는다. ③ 소리만 쓰려고 한다 → 오늘은 읽을 때만 소리가 달라지고 글자는 원래대로 쓴다고 알려 준다. 낱말은 모두 1학년이 아는 쉬운 것으로 골랐다.',
    }),

    // ───────────────────────── 10. 들은 소리를 바른 글자로 쓰기 ─────────────────────────
    L(10, {
      title: '들은 소리를 바른 글자로 고쳐 일기에 쓰기',
      objective: '들은 소리를 소리 나는 대로 쓰지 않고 바른 글자로 고쳐, 일기 문장에서 알맞은 낱말을 고르고 쓸 수 있다.',
      standards: GRAM,
      illustration: ART('a paper child writing a diary sentence while a speech bubble shows the sound and the notebook shows the correct letters', '밥을 먹었어요'),
      stages: ST(
        { teacher: '"일기에 \'엄마가 밥을 줬어요.\'라고 쓰려는데, 친구가 \'바블\'이라고 썼어요. 읽을 때는 [바블]이지만 쓸 때는 어떻게 쓸까요?" 두 글자를 나란히 쓰고 받침이 어디에 있는지 짚는다. "읽는 소리와 쓰는 글자가 다를 때가 있어요."', student: '들은 소리를 바른 글자로 고쳐 써 봐요.', demo: { tool: 'mindmap', options: { mode: 'match', topic: '바른 글자', shuffle: false, slots: [{ id: 'w', label: '[바블]' }], cards: [{ id: 'bab', text: '밥을' }, { id: 'babl', text: '바블' }] }, sequence: [{ match: { w: 'bab' } }] } },
        '"오늘 바르게 고쳐 쓴 낱말을 하나 말해 볼까요?" 한두 명이 소리와 글자를 함께 말한다. 출구 1번에서 \'오시\'를 고른 학생에게는 받침 ㅅ이 앞 글자에 있는 모습을 글자로 다시 보게 한다.',
        [
          A('a1', '활동 1. 소리를 듣고 바르게 쓴 낱말 찾기', 13, 'mindmap',
            '"소리가 아니라 글자를 보고 골라요. 받침이 있는지 살펴봐요." 소리와 글자를 번갈아 읽게 한다. \'바블\'을 고르는 학생에게는 "맨 아래에 받침이 있는지 다시 볼까요?"라고 묻는다.',
            '소리를 듣고 바르게 쓴 낱말과 틀리게 쓴 낱말을 가려요.', LV,
            [
              MATCH('들은 소리와 바르게 쓴 낱말을 이어 보세요.', '바르게 쓴 낱말', [{ id: 's1', label: '[바블]' }, { id: 's2', label: '[오시]' }, { id: 's3', label: '[지비]' }], [C('bab', '밥을'), C('os', '옷이'), C('jip', '집이'), C('babl', '바블')], { s1: 'bab', s2: 'os', s3: 'jip' }, 0.2),
              SORT('낱말 카드를 바르게 쓴 것과 소리 나는 대로 쓴 것으로 나누어 보세요.', '바르게 쓰기', [{ id: 'good', label: '바르게 썼어요' }, { id: 'bad', label: '소리 나는 대로 썼어요' }], [C('bab', '밥을'), C('babl', '바블'), C('os', '옷이'), C('osi', '오시'), C('chaek', '책이'), C('chaegi', '채기')], { good: ['bab', 'os', 'chaek'], bad: ['babl', 'osi', 'chaegi'] }, 0.25,
                { levels: { easy: { prompt: '카드 넷을 바르게 쓴 것과 소리 나는 대로 쓴 것으로 나누어 보세요.', toolOptions: { cards: [C('bab', '밥을'), C('babl', '바블'), C('os', '옷이'), C('osi', '오시')] }, target: { sort: { good: ['bab', 'os'], bad: ['babl', 'osi'] } } } } }),
              FILL('일기 문장의 빈칸에 알맞은 낱말을 놓아 보세요.', [{ id: 'a', label: '동생이 ___ 먹어요.' }, { id: 'b', label: '언니가 ___ 입어요.' }], [C('bab', '밥을'), C('babl', '바블'), C('ot', '옷을'), C('osl', '오슬')], { a: 'bab', b: 'ot' }, 0.25,
                { conclude: '읽는 소리가 달라도 글자는 원래 모양대로 받침까지 써요.' }),
              PICK('더 해 보기: 바르게 쓴 문장을 모두 골라 보세요.', '바르게 썼어요', [C('p1', '나는 책을 읽어요.'), C('p2', '나는 채글 읽어요.'), C('p3', '엄마가 밥을 줘요.')], ['p1', 'p3'], 0.3, { extra: true }),
            ]),
          A('a2', '활동 2. 일기에 쓸 받침 글자 만들기', 13, 'hangul',
            '"일기에 쓸 낱말을 받침까지 만들어 봐요." 만들면서 소리 내어 읽게 한다. \'낮\'을 만들 때 받침으로 ㅅ을 놓는 학생에게는 "ㅈ과 ㅅ은 끝소리가 비슷해서 헷갈려요. 낮은 해가 떠 있는 때예요. 뜻을 떠올리며 글자를 골라요."라고 짚어 준다.',
            '일기에 쓸 낱말을 받침까지 만들어요.', HGL(['ㅂ', 'ㅇ', 'ㅊ', 'ㄴ'], ['ㅏ', 'ㅗ', 'ㅐ'], ['ㅂ', 'ㅅ', 'ㄱ', 'ㅈ']),
            [
              HG('일기에 쓸 낱말 \'밥\'을 받침까지 만들어 보세요.', '밥', 0.15),
              HG('일기에 쓸 낱말 \'옷\'을 받침까지 만들어 보세요.', '옷', 0.2),
              HG('일기에 쓸 낱말 \'책\'을 받침까지 만들어 보세요.', '책', 0.25),
              HG('일기에 쓸 낱말 \'낮\'을 받침까지 만들어 보세요.', '낮', 0.3),
              HG('더 해 보기: 일기에 쓸 낱말 \'꽃\'을 받침까지 만들어 보세요.', '꽃', 0.3, { extra: true, toolOptions: { consonants: ['ㄲ', 'ㅂ'], vowels: ['ㅗ', 'ㅏ'], batchim: ['ㅊ', 'ㅅ', 'ㅂ'] } }),
            ]),
        ],
        [
          CH('[오시]로 들린 말을 바르게 쓰면 어느 것일까요?', ['옷이', '오시', '옷시'], 0, '읽을 때는 [오시]지만 쓸 때는 받침 ㅅ까지 \'옷이\'라고 써요.', 0.15),
          { type: 'tool', tool: 'hangul', options: { consonants: ['ㅈ', 'ㅂ'], vowels: ['ㅣ', 'ㅏ'], batchim: ['ㅂ', 'ㅈ', 'ㄴ'], slotHints: true }, prompt: '일기에 쓸 낱말 \'집\'을 받침까지 만들어 보세요.', target: { syllable: '집' }, difficulty: 0.25 },
          MOOD,
        ]),
      worksheet: {
        title: '바르게 고쳐 써요',
        items: [
          { type: 'table', prompt: '소리 나는 대로 쓴 낱말을 바르게 고쳐 쓰세요.', columns: ['틀린 낱말', '바른 낱말'], cells: [['바블', ''], ['오시', ''], ['채기', '']] },
          { type: 'choice', prompt: '[지비]로 들린 낱말을 바르게 쓰면 어느 것일까요?', options: ['집이', '지비', '집비'], answer: '집이' },
          { type: 'blank', prompt: '바른 낱말을 넣어 문장을 쓰세요.', text: '동생이 ______ 먹어요.', answer: '밥을' },
          { type: 'short', prompt: '오늘 일기에 쓰고 싶은 낱말을 받침까지 바르게 써 보세요.' },
        ],
        easy: { note: '받침까지 글자를 확인해요.', items: [
          { type: 'choice', prompt: '바르게 쓴 낱말에 ○ 하세요.', options: ['밥을', '바블'], answer: '밥을' },
          { type: 'blank', prompt: '낱말을 따라 쓰세요.', text: '밥을 → ______', answer: '밥을' },
          { type: 'choice', prompt: '바르게 쓴 낱말에 ○ 하세요.', options: ['옷이', '오시'], answer: '옷이' },
          { type: 'draw', prompt: '오늘 먹은 것을 그리고 낱말을 써 보세요.' },
        ] },
      },
      differentiation: {
        easy: '이어 보기는 낱말이 셋이고 맞게 이으면 초록 테두리가 생겨요. 가르기는 카드가 넷이에요.',
        base: '카드를 모두 놓은 뒤 확인하고, 만든 글자는 확인 뒤에 보여요.',
        challenge: '내 글자 듣기 단추가 없고, 더 해 보기(\'꽃\' 만들기, 바른 문장 고르기)까지 풀어요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 들은 대로 써 버린다(바블) → 읽을 때와 쓸 때가 다르다는 것을 낱말마다 손으로 짚어 보여 준다. ② 받침 ㅅ·ㅈ을 서로 바꿔 쓴다 → 이 차시는 글자 모양과 뜻으로 골라 보게 하고, 소리 규칙은 다음 시간에 다룬다. ③ 조사(을/를, 이/가)를 소리로 쓴다 → 받침이 있으면 을·이라고 안내한다. 문장은 모두 이 단원을 위해 새로 지었다.',
    }),

    // ───────────────────────── 11. 끝소리 규칙 적용 ─────────────────────────
    L(11, {
      title: '끝소리가 같은 낱말을 묶고 받침 글자 만들기',
      objective: '받침이 달라도 끝소리가 같게 나는 낱말을 묶고, 소리와 다르게 쓰는 받침 글자를 만들 수 있다.',
      standards: GRAM,
      illustration: ART('six paper word cards sorted into three baskets by the sound of the last letter', '옷  낮  밖'),
      stages: ST(
        { teacher: '"\'옷\'을 읽어 볼까요? 끝소리가 어디에서 났나요? 이번에는 \'낮\'도 읽어 봐요. 입 모양이 같지요?" 두 낱말의 받침이 다른데 끝소리가 같다는 것을 들려준다. "받침 모양은 달라도 끝소리가 같은 낱말이 있어요."', student: '끝소리가 같은 낱말을 묶어 봐요.', demo: { tool: 'mindmap', options: { topic: '끝소리 묶기', shuffle: false, slots: [{ id: 'd', label: 'ㄷ 소리로 끝나요' }, { id: 'g', label: 'ㄱ 소리로 끝나요' }], cards: [{ id: 'ot', text: '옷' }, { id: 'bak', text: '밖' }] }, sequence: [{ sort: { d: ['ot'], g: ['bak'] } }] } },
        '"오늘 끝소리가 같은 낱말 짝을 하나 찾아 말해 볼까요?" 두세 명이 \'옷\'과 \'낮\'처럼 말하고 함께 소리 내어 읽는다. 출구 1번에서 받침 모양이 같은 낱말만 묶는 학생에게는 입 모양으로 끝소리를 다시 비교하게 한다.',
        [
          A('a1', '활동 1. 끝소리가 같은 낱말끼리 묶기', 13, 'mindmap',
            '"낱말을 소리 내어 읽고, 끝소리에서 입이 어떻게 되는지 느껴 봐요." 입술이 닫히면 ㅂ 소리, 혀가 닿으면 ㄷ 소리, 목 안쪽이 막히면 ㄱ 소리로 듣게 한다. \'낮\'을 ㄱ 소리 칸에 넣는 학생에게는 "혀를 윗잇몸에 대면서 끝나나요?"라고 되묻는다.',
            '끝소리가 같은 낱말끼리 묶어요.', LV,
            [
              SORT('낱말 카드를 끝소리가 같은 것끼리 나누어 보세요.', '끝소리 묶기', [{ id: 'd', label: 'ㄷ 소리로 끝나요' }, { id: 'g', label: 'ㄱ 소리로 끝나요' }, { id: 'b', label: 'ㅂ 소리로 끝나요' }], [W('ot', '옷'), W('nat', '낮'), W('buok', '부엌'), W('bak', '밖'), W('ap', '앞'), W('bap', '밥')], { d: ['ot', 'nat'], g: ['buok', 'bak'], b: ['ap', 'bap'] }, 0.25,
                { levels: { easy: { prompt: '낱말 카드 넷을 끝소리가 같은 것끼리 나누어 보세요.', toolOptions: { slots: [{ id: 'd', label: 'ㄷ 소리로 끝나요' }, { id: 'b', label: 'ㅂ 소리로 끝나요' }], cards: [W('ot', '옷'), W('nat', '낮'), W('ap', '앞'), W('bap', '밥')] }, target: { sort: { d: ['ot', 'nat'], b: ['ap', 'bap'] } } } } }),
              MATCH('쓴 낱말과 소리 내는 끝소리를 이어 보세요.', '끝소리 이어 보기', [{ id: 'w1', label: '옷' }, { id: 'w2', label: '꽃' }, { id: 'w3', label: '부엌' }], [C('od', '옫'), C('kkod', '꼳'), C('buok', '부억'), C('osi', '오시')], { w1: 'od', w2: 'kkod', w3: 'buok' }, 0.25),
              PICK('끝소리가 ㄷ 소리로 나는 낱말 카드를 모두 골라 보세요.', 'ㄷ 소리로 끝나요', [C('ot', '옷'), C('nat', '낮'), C('kkot', '꽃'), C('dal', '달')], ['ot', 'nat', 'kkot'], 0.3,
                { conclude: '받침이 ㅅ·ㅈ·ㅊ이어도 끝소리는 ㄷ 소리로 나요.' }),
              PICK('더 해 보기: 끝소리가 ㄱ 소리로 나는 낱말 카드를 모두 골라 보세요.', 'ㄱ 소리로 끝나요', [C('bak', '밖'), C('buok', '부엌'), C('chaek', '책'), C('jip', '집')], ['bak', 'buok', 'chaek'], 0.3, { extra: true }),
            ]),
          A('a2', '활동 2. 소리와 다르게 쓰는 받침 글자 만들기', 13, 'hangul',
            '"소리를 들으면 [입]이지만 쓸 때는 \'잎\'이에요. 받침까지 정확히 만들어 봐요." 소리와 글자를 함께 말하게 한다. \'앞\'을 만들 때 받침으로 ㅂ을 놓는 학생에게는 "입술을 닫는 소리라고 해서 모두 ㅂ일까요? 낱말 뜻 그림을 보고 골라요."라고 짚어 준다.',
            '끝소리와 쓰는 글자가 다른 받침 글자를 만들어요.', HGL(['ㅇ', 'ㅅ', 'ㅂ'], ['ㅣ', 'ㅜ', 'ㅏ'], ['ㅍ', 'ㄲ', 'ㅌ', 'ㅂ']),
            [
              HG('나무에 달린 \'잎\'을 받침까지 만들어 보세요. [입]으로 소리 나요.', '잎', 0.15),
              HG('나무가 많은 \'숲\'을 받침까지 만들어 보세요. [숩]으로 소리 나요.', '숲', 0.2),
              HG('뒤의 반대말 \'앞\'을 받침까지 만들어 보세요. [압]으로 소리 나요.', '앞', 0.25),
              HG('안의 반대말 \'밖\'을 받침까지 만들어 보세요. [박]으로 소리 나요.', '밖', 0.3),
              HG('더 해 보기: 밥을 짓는 큰 그릇 \'솥\'을 받침까지 만들어 보세요. [솓]으로 소리 나요.', '솥', 0.3, { extra: true, toolOptions: { consonants: ['ㅅ', 'ㅇ'], vowels: ['ㅗ', 'ㅜ'], batchim: ['ㅌ', 'ㅍ'] } }),
            ]),
        ],
        [
          CH('\'옷\'과 끝소리가 같게 나는 낱말은 어느 것일까요?', ['낮', '밖', '앞'], 0, '옷과 낮은 받침이 달라도 둘 다 ㄷ 소리로 끝나요.', 0.2),
          { type: 'tool', tool: 'hangul', options: { consonants: ['ㅂ', 'ㅇ'], vowels: ['ㅏ', 'ㅣ'], batchim: ['ㅍ', 'ㅂ', 'ㅌ'], slotHints: true }, prompt: '\'앞\'을 받침까지 만들어 보세요.', target: { syllable: '앞' }, difficulty: 0.3 },
          MOOD,
        ]),
      worksheet: {
        title: '끝소리가 같은 낱말',
        items: [
          { type: 'check', prompt: '끝소리가 ㄷ 소리로 나는 낱말에 모두 ✓ 하세요.', options: ['옷', '낮', '밖'], answer: '옷, 낮' },
          { type: 'table', prompt: '낱말을 소리 내어 읽고 끝소리를 쓰세요.', columns: ['낱말', '끝소리'], cells: [['꽃', ''], ['부엌', ''], ['앞', '']] },
          { type: 'figure', prompt: '어떤 글자일까요? 아래에 쓰세요.', tool: 'hangul', options: { batchim: [] }, figures: [{ state: { cho: 'ㅇ', jung: 'ㅣ', jong: 'ㅍ' }, caption: BLANK }, { state: { cho: 'ㅅ', jung: 'ㅜ', jong: 'ㅍ' }, caption: BLANK }, { state: { cho: 'ㅂ', jung: 'ㅏ', jong: 'ㄲ' }, caption: BLANK }], answer: '잎, 숲, 밖' },
          { type: 'short', prompt: '끝소리가 같은 낱말 두 개를 찾아 써 보세요.' },
        ],
        easy: { note: '입 모양으로 끝소리를 느껴요.', items: [
          { type: 'choice', prompt: '\'옷\'과 끝소리가 같은 낱말에 ○ 하세요.', options: ['낮', '밖'], answer: '낮' },
          { type: 'blank', prompt: '낱말을 따라 쓰세요.', text: '옷 → ___     낮 → ___', answer: '옷, 낮' },
          { type: 'choice', prompt: '\'밖\'과 끝소리가 같은 낱말에 ○ 하세요.', options: ['부엌', '옷'], answer: '부엌' },
          { type: 'draw', prompt: '옷이나 부엌을 그리고 낱말을 써 보세요.' },
        ] },
      },
      differentiation: {
        easy: '묶기는 카드가 넷이고 칸이 둘이에요. 글자 만들기는 자리 글씨가 있고 모음을 들면 알맞은 자리가 깜박여요.',
        base: '카드를 모두 놓은 뒤 확인하고, 만든 글자는 확인 뒤에 보여요.',
        challenge: '칸이 셋인 묶기를 풀고, 더 해 보기(\'솥\' 만들기, ㄱ 소리 낱말 고르기)까지 풀어요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 받침 모양이 같아야 끝소리가 같다고 생각한다 → 옷과 낮은 받침 모양이 달라도 소리는 같다는 것을 번갈아 읽어 들려준다. ② 소리로 받침을 정해서 \'입\'으로 쓴다 → 뜻에 맞는 낱말 글자를 보고 고르게 한다. ③ ㄱ·ㄷ·ㅂ 소리를 구별하지 못한다 → 입이 닫히는 곳(입술·혀·목)을 손으로 가리키게 한다. 소리를 나타내는 [ ] 안의 글은 읽는 소리를 알려 주는 표시다.',
    }),

    // ───────────────────────── 12. 내 말과 글 돌아보기 ─────────────────────────
    L(12, {
      title: '바른 말과 글을 쓰려는 내 모습 돌아보기',
      objective: '바르게 읽고 쓰려고 할 때 하면 좋은 일을 알고, 친구의 글에서 틀린 낱말을 발견했을 때 친절하게 말하며 내 말과 글을 돌아볼 수 있다.',
      standards: GRAM,
      illustration: ART('two paper children looking at a notebook together and one kindly pointing to a word', '다시 읽어 봐요'),
      stages: ST(
        { teacher: '"글을 다 쓰고 나서 무엇을 하면 좋을까요?" 한 학생의 쪽지를 큰 글씨로 보여 주며 받침이 빠진 낱말을 찾아보게 한다. "틀린 낱말을 찾았을 때 어떻게 말하면 친구 마음이 상하지 않을까요?"를 묻는다.', student: '바르게 쓰려는 마음과 친구에게 친절하게 말하는 방법을 생각해 봐요.', demo: { tool: 'mindmap', options: { topic: '쓴 뒤에 해요', shuffle: false, slots: [{ id: 'good', label: '하면 좋아요' }, { id: 'bad', label: '하지 않아요' }], cards: [{ id: 'again', text: '소리 내어 다시 읽어요' }, { id: 'skip', text: '틀려도 그냥 둬요' }] }, sequence: [{ sort: { good: ['again'], bad: ['skip'] } }] } },
        '"오늘 글을 쓰거나 읽을 때 \'다시 해야지\' 하고 마음먹은 것이 있나요?" 한두 명이 말하고 스스로 칭찬한다. 출구 1번에서 \'놀려요\'를 고른 학생에게는 놀림을 들은 친구의 마음을 다시 떠올려 보게 한다.',
        [
          A('a1', '활동 1. 바르게 읽고 쓰는 습관 찾기', 13, 'mindmap',
            '"내가 쓴 글을 한 번 더 읽어 보는 것이 왜 좋을까요?" 소리 내어 읽어야 틀린 낱말이 보인다는 것을 보여 준다. \'소리 나는 대로 대충 써요\'를 하면 좋은 칸에 넣는 학생에게는 "소리 나는 대로만 쓰면 받침이 맞을까요?"라고 되묻는다.',
            '바르게 읽고 쓰는 데 도움이 되는 일을 골라요.', LV,
            [
              SORT('카드를 하면 좋은 일과 하지 않는 일로 나누어 보세요.', '말과 글 습관', [{ id: 'good', label: '하면 좋아요' }, { id: 'bad', label: '하지 않아요' }], [C('again', '쓰고 나서 소리 내어 다시 읽어요'), C('batchim', '받침이 있는지 살펴봐요'), C('ask', '모르면 선생님께 물어봐요'), C('sloppy', '소리 나는 대로 대충 써요'), C('tease', '친구 글을 보고 놀려요'), C('leave', '틀린 글자를 그냥 둬요')], { good: ['again', 'batchim', 'ask'], bad: ['sloppy', 'tease', 'leave'] }, 0.2,
                { levels: { easy: { prompt: '카드 넷을 하면 좋은 일과 하지 않는 일로 나누어 보세요.', toolOptions: { cards: [C('again', '쓰고 나서 소리 내어 다시 읽어요'), C('ask', '모르면 선생님께 물어봐요'), C('sloppy', '소리 나는 대로 대충 써요'), C('tease', '친구 글을 보고 놀려요')] }, target: { sort: { good: ['again', 'ask'], bad: ['sloppy', 'tease'] } } } } }),
              MATCH('고치고 싶은 상황과 알맞은 방법을 이어 보세요.', '고치는 방법', [{ id: 'l1', label: '받침이 빠진 것 같아요' }, { id: 'l2', label: '낱말이 헷갈려요' }], [C('read', '소리 내어 읽으며 받침을 찾아요'), C('book', '책에서 그 낱말을 찾아봐요'), C('sleep', '그냥 잠을 자요')], { l1: 'read', l2: 'book' }, 0.25),
              PICK('친구 글에서 틀린 낱말을 찾았을 때 하면 좋은 말을 모두 골라 보세요.', '친구에게 하는 말', [C('k1', '"여기를 같이 다시 읽어 볼까?"'), C('k2', '"받침을 하나 더 써 볼래?"'), C('k3', '"이것도 몰라?"')], ['k1', 'k2'], 0.25,
                { conclude: '틀린 낱말을 찾았을 때는 같이 다시 읽자고 부드럽게 말해요.' }),
              PICK('더 해 보기: 바른 말과 글을 쓰기 위해 하면 좋은 일을 모두 골라 보세요.', '바른 글쓰기', [C('r1', '책을 많이 읽어요'), C('r2', '쓴 글을 짝에게 보여 줘요'), C('r3', '쓰자마자 구겨 버려요')], ['r1', 'r2'], 0.3, { extra: true }),
            ]),
          A('a2', '활동 2. 친구 글을 읽고 내 모습 돌아보기', 13, 'emotion',
            '"친구 글에서 틀린 글자를 찾았을 때 어떻게 하면 좋을지 이야기의 결과를 보며 생각해요." 이야기 속 인물의 마음을 말하게 한다. 눈금은 정답이 없으므로 솔직하게 고르게 한다. 모두 \'잘해요\'를 고른 학생에게는 "가장 잘 안 되는 것은 무엇이었나요?"라고 묻는다.',
            '이야기를 읽고 알맞은 행동을 고르고, 내 모습에 알맞은 눈금을 골라요.', LV,
            [
              BR('짝이 쓴 글에서 틀린 낱말을 찾았어요. 서아는 어떻게 하면 좋을까요?', '서아', '짝의 일기에 \'밥을\'이 \'바블\'이라고 쓰여 있어요.', [{ id: 'kind', text: '"여기 받침이 있어. 같이 다시 읽어 볼까?" 하고 말해요', result: '짝이 웃으며 글자를 고쳐요', mood: '고마움' }, { id: 'laugh', text: '"바블이래!" 하고 크게 웃어요', result: '짝이 얼굴이 빨개져서 일기장을 덮어요', mood: '속상함', why: '웃음소리를 들은 짝의 마음은 어떨까요?' }, { id: 'ignore', text: '못 본 척해요', result: '짝은 틀린 줄 모르고 계속 틀리게 써요', mood: '걱정', why: '말해 주지 않으면 짝이 고칠 수 있을까요?' }], 'kind', 0.15),
              BR('준호가 쪽지를 다 썼어요. 보내기 전에 어떻게 하면 좋을까요?', '준호', '준호가 엄마께 드릴 쪽지를 다 썼어요.', [{ id: 'recheck', text: '소리 내어 한 번 더 읽어 보고 고쳐요', result: '빠진 받침을 찾아서 고쳤어요', mood: '뿌듯함' }, { id: 'send', text: '읽어 보지 않고 그냥 드려요', result: '엄마가 뜻을 알아보지 못해 다시 물어봐요', mood: '걱정', why: '쪽지를 읽어 보지 않으면 틀린 글자를 찾을 수 있을까요?' }], 'recheck', 0.2),
              SC('오늘 바르게 읽고 쓰려고 얼마나 노력했나요? 솔직하게 골라요.', '낱말을 바르게 읽고 쓰려고 했어요.', '뿌듯함', '바르게 읽고 쓰려고 얼마나 노력했나요?'),
            ]),
        ],
        [
          CH('친구 글에서 틀린 낱말을 찾았을 때 알맞은 행동은 어느 것일까요?', ['같이 다시 읽어 보자고 말해요', '크게 놀려요', '모른 척해요'], 0, '틀린 낱말은 같이 다시 읽어 보며 친절하게 알려 줘요.', 0.15),
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '쓴 뒤에', basket: '하면 좋은 일', cards: [C('read', '다시 읽어요'), C('fix', '틀린 글자를 고쳐요'), C('hide', '일기장을 숨겨요')] }, prompt: '글을 다 쓴 뒤에 하면 좋은 일을 모두 골라 보세요.', target: { pick: ['read', 'fix'] }, difficulty: 0.2 },
          MOOD,
        ]),
      worksheet: {
        title: '내 말과 글 돌아보기',
        items: [
          { type: 'check', prompt: '글을 쓴 뒤에 하면 좋은 일에 모두 ✓ 하세요.', options: ['소리 내어 다시 읽어요', '틀린 글자를 고쳐요', '그냥 덮어 둬요'], answer: '소리 내어 다시 읽어요, 틀린 글자를 고쳐요' },
          { type: 'choice', prompt: '친구 글에서 틀린 낱말을 찾았을 때 알맞은 말은 어느 것일까요?', options: ['"같이 다시 읽어 볼까?"', '"이것도 몰라?"'], answer: '"같이 다시 읽어 볼까?"' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '글을 쓴 뒤에는 소리 내어 ______ 읽어요.', answer: '다시' },
          { type: 'table', prompt: '내 실력에 ○ 하세요.', columns: ['내 모습', '아직', '조금', '잘해요'], cells: [['글을 쓰고 다시 읽어요', '', '', ''], ['친구에게 친절하게 말해요', '', '', '']] },
        ],
        easy: { note: '다시 읽고 고치는 습관을 떠올려요.', items: [
          { type: 'choice', prompt: '글을 쓴 뒤에 하면 좋은 일에 ○ 하세요.', options: ['다시 읽어요', '그냥 둬요'], answer: '다시 읽어요' },
          { type: 'blank', prompt: '낱말을 따라 쓰세요.', text: '다시 읽어요', answer: '다시 읽어요' },
          { type: 'choice', prompt: '친구에게 알맞은 말에 ○ 하세요.', options: ['같이 읽어 볼까?', '틀렸다!'], answer: '같이 읽어 볼까?' },
          { type: 'draw', prompt: '친구와 글을 같이 읽는 모습을 그려 보세요.' },
        ] },
      },
      differentiation: {
        easy: '습관 가르기는 카드가 넷이고 맞게 놓으면 초록 테두리가 생겨요. 행동 고르기는 선택이 둘이에요.',
        base: '카드를 모두 놓은 뒤 확인하고, 이야기 결과를 읽고 다시 생각해요.',
        challenge: '더 해 보기(바른 글쓰기 습관)까지 풀고 친구에게 할 말을 직접 지어 말해요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 친구 글의 틀린 점을 말하면 안 된다고 생각한다 → 같이 고치면 둘 다 더 잘 쓰게 된다고 말해 준다. ② 쓰고 나서 읽지 않는다 → 마침표를 찍은 뒤 소리 내어 한 번 읽는 것을 약속으로 정한다. ③ 자기 평가를 모두 \'잘해요\'로 한다 → 오늘 쓴 글에서 한 낱말을 떠올려 고르게 한다. 자기 평가는 성적에 반영하지 않는다. 상황 속 인물 이름은 모두 가명이다.',
    }),

    // ───────────────────────── 13. 말놀이에서 되풀이되는 말과 흉내 내는 말 ─────────────────────────
    L(13, {
      title: '말놀이에서 되풀이되는 말과 흉내 내는 말 찾기',
      objective: '짧은 말놀이를 소리 내어 읽고 되풀이되는 말과 소리·모습을 흉내 내는 말을 찾아 말놀이의 재미를 느낄 수 있다.',
      standards: LIT,
      illustration: ART('paper water drops falling into a small pond with ripples and little repeated word cards floating around', '똑똑  퐁당'),
      stages: ST(
        { teacher: '"선생님이 짧은 말놀이를 읽어 줄게요. 어떤 말이 자꾸 들리나요?" \'똑똑 똑똑 물방울이 똑똑 퐁당 퐁당 연못에 퐁당\'을 리듬을 살려 읽고, 되풀이되는 말을 손뼉으로 짚는다. "소리나 모습을 흉내 낸 말이 들어가면 말놀이가 더 재미있어요."', student: '말놀이를 읽고 되풀이되는 말과 흉내 내는 말을 찾아봐요.', demo: { tool: 'mindmap', options: { topic: '흉내 내는 말', shuffle: false, slots: [{ id: 'mimic', label: '소리를 흉내 내요' }, { id: 'no', label: '흉내 내는 말이 아니에요' }], cards: [{ id: 'tok', text: '똑똑' }, { id: 'pond', text: '연못' }] }, sequence: [{ sort: { mimic: ['tok'], no: ['pond'] } }] } },
        '"오늘 가장 마음에 든 말놀이의 흉내 내는 말은 무엇인가요?" 두세 명이 말하고 함께 소리 내어 읽는다. 출구 1번에서 \'나무\'를 고른 학생에게는 소리나 모습이 나는 낱말인지 다시 떠올려 보게 한다.',
        [
          A('a1', '활동 1. 흉내 내는 말과 되풀이되는 말 찾기', 13, 'mindmap',
            '"소리를 내어 읽으면서 어떤 말이 소리나 모습을 흉내 내는지 찾아봐요." 말놀이를 두세 번 읽게 한다. \'연못\'을 흉내 내는 말로 고르는 학생에게는 "연못에서 나는 소리가 있나요, 연못이라는 이름인가요?"라고 묻는다.',
            '말놀이 낱말을 나누고 흉내 내는 말과 되풀이되는 말을 찾아요.', LV,
            [
              SORT('낱말 카드를 흉내 내는 말과 흉내 내는 말이 아닌 것으로 나누어 보세요.', '흉내 내는 말', [{ id: 'mimic', label: '흉내 내는 말이에요' }, { id: 'no', label: '흉내 내는 말이 아니에요' }], [C('tok', '똑똑'), C('pong', '퐁당'), C('jul', '주룩주룩'), C('pond', '연못'), C('drop', '물방울'), C('umb', '우산')], { mimic: ['tok', 'pong', 'jul'], no: ['pond', 'drop', 'umb'] }, 0.2,
                { levels: { easy: { prompt: '카드 넷을 흉내 내는 말과 아닌 것으로 나누어 보세요.', toolOptions: { cards: [C('tok', '똑똑'), C('pond', '연못'), C('pong', '퐁당'), C('umb', '우산')] }, target: { sort: { mimic: ['tok', 'pong'], no: ['pond', 'umb'] } } } } }),
              MATCH('흉내 내는 말과 알맞은 소리나 모습을 이어 보세요.', '흉내 내는 말', [{ id: 'drip', label: '물이 한 방울씩 떨어지는 소리' }, { id: 'plop', label: '물에 빠지는 소리' }, { id: 'rain', label: '빗줄기가 내리는 모습' }], [C('tok', '똑똑'), C('pong', '퐁당'), C('jul', '주룩주룩'), C('ban', '반짝반짝')], { drip: 'tok', plop: 'pong', rain: 'jul' }, 0.25),
              PICK('똑똑 똑똑 물방울이 똑똑 퐁당 퐁당 연못에 퐁당. 이 말놀이에서 되풀이되는 말을 모두 골라 보세요.', '되풀이되는 말', [C('tok', '똑똑'), C('pong', '퐁당'), C('pond', '연못')], ['tok', 'pong'], 0.25,
                { conclude: '같은 말이 되풀이되면 리듬이 생기고 소리 내어 읽는 재미가 커져요.' }),
              PICK('더 해 보기: \'쿵쿵 코끼리가 걸어요.\'에서 흉내 내는 말을 골라 보세요.', '흉내 내는 말', [C('kung', '쿵쿵'), C('elephant', '코끼리'), C('walk', '걸어요')], ['kung'], 0.3, { extra: true }),
            ]),
          A('a2', '활동 2. 말놀이 줄을 차례대로 놓기', 13, 'story',
            '"말놀이는 줄마다 차례가 있어요. 소리 내어 읽으며 리듬이 맞는 차례를 찾아봐요." 두 줄씩 짝지어 읽게 한다. 흉내 내는 말만 앞에 모아 놓는 학생에게는 "소리 내어 읽으면 리듬이 이어지나요?"라고 묻는다.',
            '말놀이 줄 카드를 차례대로 놓고 흉내 내는 말을 채워요.', LV,
            [
              ORDER('말놀이의 줄 카드를 읽는 차례대로 놓아 보세요.', [C('l1', '똑똑 똑똑'), C('l2', '물방울이 똑똑'), C('l3', '퐁당 퐁당'), C('l4', '연못에 퐁당')], ['l1', 'l2', 'l3', 'l4'], 0.25),
              ORDER('별 말놀이의 줄 카드를 읽는 차례대로 놓아 보세요.', [C('s1', '반짝 반짝'), C('s2', '별이 반짝'), C('s3', '소곤 소곤'), C('s4', '달에게 소곤')], ['s1', 's2', 's3', 's4'], 0.3),
              FILL('말놀이의 빈칸에 알맞은 흉내 내는 말을 놓아 보세요.', [{ id: 'a', label: '꽃밭에서 나비가 ___ 날아요.' }, { id: 'b', label: '시냇물이 ___ 흘러요.' }], [C('hwol', '훨훨'), C('jol', '졸졸'), C('kung', '쿵쿵'), C('ddang', '땡땡')], { a: 'hwol', b: 'jol' }, 0.25),
              ORDER('더 해 보기: 말놀이의 줄 카드를 읽는 차례대로 놓아 보세요.', [C('d1', '살금 살금'), C('d2', '고양이가 살금'), C('d3', '야옹 야옹')], ['d1', 'd2', 'd3'], 0.3, { extra: true }),
            ]),
        ],
        [
          CH('다음 중 소리를 흉내 내는 말은 어느 것일까요?', ['땡땡', '나무', '구름'], 0, '땡땡은 종이 울리는 소리를 흉내 낸 말이에요.', 0.15),
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '동물 소리', basket: '소리를 흉내 낸 말', cards: [C('yaong', '야옹야옹'), C('meong', '멍멍'), C('chair', '의자')] }, prompt: '동물 소리를 흉내 낸 말을 모두 골라 보세요.', target: { pick: ['yaong', 'meong'] }, difficulty: 0.2 },
          MOOD,
        ]),
      worksheet: {
        title: '흉내 내는 말',
        items: [
          { type: 'check', prompt: '흉내 내는 말에 모두 ✓ 하세요.', options: ['똑똑', '연못', '퐁당'], answer: '똑똑, 퐁당' },
          { type: 'table', prompt: '말놀이를 읽고 되풀이되는 말을 쓰세요.', columns: ['말놀이', '되풀이되는 말'], cells: [['반짝 반짝 별이 반짝', ''], ['졸졸 졸졸 시냇물이 졸졸', ''], ['깡충 깡충 토끼가 깡충', '']] },
          { type: 'blank', prompt: '알맞은 흉내 내는 말을 쓰세요.', text: '개구리가 ______ 울어요.  (개굴개굴, 콩콩 중)', answer: '개굴개굴' },
          { type: 'short', prompt: '소리를 흉내 내는 말 하나를 찾아 쓰고 어떤 소리인지 써 보세요.' },
        ],
        easy: { note: '소리 내어 읽으면 흉내 내는 말이 들려요.', items: [
          { type: 'choice', prompt: '소리를 흉내 낸 말에 ○ 하세요.', options: ['똑똑', '연못'], answer: '똑똑' },
          { type: 'blank', prompt: '말을 따라 쓰세요.', text: '퐁당 퐁당', answer: '퐁당 퐁당' },
          { type: 'choice', prompt: '되풀이되는 말에 ○ 하세요. (반짝 반짝 별이 반짝)', options: ['반짝', '별이'], answer: '반짝' },
          { type: 'draw', prompt: '물방울이 떨어지는 모습을 그리고 흉내 내는 말을 써 보세요.' },
        ] },
      },
      differentiation: {
        easy: '나누기는 카드 넷으로 시작하고 맞게 놓으면 초록 테두리가 생겨요. 줄 놓기는 카드가 셋이에요.',
        base: '카드를 모두 놓은 뒤 확인하고, 소리 내어 읽으며 리듬을 확인해요.',
        challenge: '더 해 보기(흉내 내는 말 고르기, 고양이 말놀이 차례 놓기)까지 풀어요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 사물 이름을 흉내 내는 말과 헷갈린다 → 소리가 나거나 모습을 나타내는 말이라고 말해 주고 몸으로 흉내 내 보게 한다. ② 줄을 차례대로 읽을 때 리듬을 놓친다 → 박수를 치며 두 줄씩 읽어 리듬을 느끼게 한다. ③ 되풀이되는 말을 한 번만 찾는다 → 같은 말에 같은 색으로 동그라미를 치게 한다. 말놀이는 모두 이 단원을 위해 새로 지은 것이다.',
    }),

    // ───────────────────────── 14. 흉내 내는 말로 말놀이 만들고 낭송하기 ─────────────────────────
    L(14, {
      title: '흉내 내는 말을 넣어 내 말놀이 만들고 낭송하기',
      objective: '흉내 내는 말을 넣어 문장과 말놀이를 만들어 보고, 소리와 모습을 살려 또박또박 낭송할 수 있다.',
      standards: LIT,
      illustration: ART('a paper child reciting a little rhyme with open arms while small mimic word cards float in the air', '깡충깡충  방긋방긋'),
      stages: ST(
        { teacher: '"토끼가 뛰는 모습을 몸으로 해 볼까요? 어떻게 뛰나요?" \'깡충깡충\'이라고 말하면 칠판에 쓴다. "흉내 내는 말을 넣어서 말놀이를 만들고, 소리 내어 읽어 봐요." 시연 단추로 \'토끼가 깡충깡충 뛰어요.\'가 완성되는 모습을 보여 준다.', student: '흉내 내는 말을 넣어 내 말놀이를 만들어 봐요.', demo: { tool: 'story', options: { mode: 'fill', slots: [{ id: 'a', label: '토끼가 ___ 뛰어요.' }], cards: [{ id: 'gang', text: '깡충깡충' }, { id: 'jul', text: '주룩주룩' }] }, sequence: [{ fill: { a: 'gang' } }] } },
        '"만든 말놀이 가운데 하나를 짝에게 낭송해 볼까요?" 짝이 박수로 리듬을 맞춰 주고 한두 명이 발표한다. 출구 1번에서 \'펑펑\'을 \'동생이 웃어요\'에 넣은 학생에게는 눈이 내리는 모습과 웃는 모습을 비교해 보게 한다.',
        [
          A('a1', '활동 1. 흉내 내는 말을 넣어 문장 만들기', 13, 'story',
            '"문장을 소리 내어 읽고 어떤 흉내 내는 말이 어울릴지 생각해요." 몸짓으로 흉내 내 보며 고르게 한다. \'아기가 쿨쿨 웃어요\'처럼 놓는 학생에게는 "쿨쿨은 어떤 모습일 때 쓰는 말이지요?"라고 묻는다.',
            '문장의 빈칸에 알맞은 흉내 내는 말을 놓고 말놀이를 만들어요.', LV,
            [
              FILL('빈칸에 알맞은 흉내 내는 말을 놓아 보세요.', [{ id: 'a', label: '토끼가 ___ 뛰어요.' }, { id: 'b', label: '북을 ___ 쳐요.' }, { id: 'c', label: '아기가 ___ 웃어요.' }], [C('gang', '깡충깡충'), C('dung', '둥둥'), C('bang', '방긋방긋'), C('kkul', '꿀꺽꿀꺽')], { a: 'gang', b: 'dung', c: 'bang' }, 0.2),
              FILL('빈칸에 알맞은 흉내 내는 말을 놓아 보세요.', [{ id: 'a', label: '눈이 ___ 내려요.' }, { id: 'b', label: '별이 ___ 빛나요.' }], [C('peong', '펑펑'), C('ban', '반짝반짝'), C('kul', '쿨쿨'), C('eong', '엉엉')], { a: 'peong', b: 'ban' }, 0.25),
              ORDER('내가 만든 말놀이의 줄 카드를 읽는 차례대로 놓아 보세요.', [C('m1', '쿵쿵 쿵쿵'), C('m2', '코끼리가 쿵쿵'), C('m3', '살금 살금'), C('m4', '고양이가 살금')], ['m1', 'm2', 'm3', 'm4'], 0.3),
              { prompt: '더 해 보기: 낭송할 때 알맞은 방법을 모두 골라 보세요.', toolOptions: { mode: 'pick', topic: '낭송하는 방법', basket: '알맞은 방법', cards: [C('clear', '또박또박 크게 읽어요'), C('rhythm', '리듬을 살려 읽어요'), C('cover', '입을 가리고 읽어요')] }, target: { pick: ['clear', 'rhythm'] }, difficulty: 0.3, extra: true },
            ]),
          A('a2', '활동 2. 소리와 모습 흉내 내는 말 가르기', 13, 'mindmap',
            '"소리를 흉내 낸 말과 모습을 흉내 낸 말은 달라요. 어떤 것은 들리고, 어떤 것은 보여요." 몸짓과 소리를 번갈아 해 보게 한다. \'반짝반짝\'을 소리 칸에 넣는 학생에게는 "별은 소리가 나나요, 빛이 나나요?"라고 되묻는다.',
            '흉내 내는 말을 소리와 모습으로 나누고 낭송 방법을 골라요.', LV,
            [
              SORT('흉내 내는 말 카드를 소리를 흉내 낸 것과 모습을 흉내 낸 것으로 나누어 보세요.', '흉내 내는 말', [{ id: 'sound', label: '소리를 흉내 내요' }, { id: 'shape', label: '모습을 흉내 내요' }], [C('meong', '멍멍'), C('tok', '똑똑'), C('yaong', '야옹'), C('gang', '깡충깡충'), C('ban', '반짝반짝'), C('sal', '살금살금')], { sound: ['meong', 'tok', 'yaong'], shape: ['gang', 'ban', 'sal'] }, 0.25),
              MATCH('말놀이와 어울리는 낭송 방법을 이어 보세요.', '낭송 방법', [{ id: 'fun', label: '신나게 뛰는 말놀이' }, { id: 'sneak', label: '살금살금 걷는 말놀이' }], [C('loud', '밝고 힘차게 읽어요'), C('soft', '목소리를 낮추고 천천히 읽어요'), C('cry', '엉엉 울며 읽어요')], { fun: 'loud', sneak: 'soft' }, 0.25),
              PICK('내가 만든 말놀이를 낭송할 때 하면 좋은 일을 모두 골라 보세요.', '낭송할 때', [C('look', '친구들을 바라봐요'), C('hide', '종이로 얼굴을 가려요'), C('loud', '뒤에 앉은 친구도 들리게 읽어요')], ['look', 'loud'], 0.25,
                { conclude: '말놀이는 친구들이 잘 들을 수 있게 또박또박 읽을 때 더 재미있어요.' }),
              PICK('더 해 보기: 모습을 흉내 내는 말을 모두 골라 보세요.', '모습을 흉내 내요', [C('bang', '방긋방긋'), C('kung', '쿵쿵'), C('gul', '개굴개굴'), C('pole', '폴짝폴짝')], ['bang', 'pole'], 0.3, { extra: true }),
            ]),
        ],
        [
          CH('눈이 내리는 모습에 어울리는 흉내 내는 말은 어느 것일까요?', ['펑펑', '쿨쿨', '엉엉'], 0, '눈이 많이 내리는 모습을 펑펑이라고 말해요.', 0.2),
          { type: 'tool', tool: 'story', options: { mode: 'fill', slots: [{ id: 'a', label: '비가 ___ 와요.' }], cards: [C('jul', '주룩주룩'), C('hul', '훨훨'), C('kkul', '꿀꺽')] }, prompt: '빈칸에 알맞은 흉내 내는 말을 놓아 보세요.', target: { fill: { a: 'jul' } }, difficulty: 0.25 },
          MOOD,
        ]),
      worksheet: {
        title: '내 말놀이 만들기',
        items: [
          { type: 'table', prompt: '알맞은 흉내 내는 말을 빈칸에 쓰세요. (깡충깡충, 방긋방긋, 펑펑)', columns: ['문장', '흉내 내는 말'], cells: [['토끼가 뛰어요.', ''], ['아기가 웃어요.', ''], ['눈이 내려요.', '']] },
          { type: 'choice', prompt: '모습을 흉내 낸 말은 어느 것일까요?', options: ['반짝반짝', '멍멍'], answer: '반짝반짝' },
          { type: 'short', prompt: '흉내 내는 말을 넣어 내가 만든 말놀이를 두 줄로 써 보세요.' },
          { type: 'check', prompt: '낭송할 때 하면 좋은 일에 모두 ✓ 하세요.', options: ['또박또박 읽어요', '리듬을 살려요', '작게 속삭여요'], answer: '또박또박 읽어요, 리듬을 살려요' },
        ],
        easy: { note: '몸으로 흉내 내 보면 알맞은 말이 떠올라요.', items: [
          { type: 'choice', prompt: '토끼가 뛰는 모습에 어울리는 말에 ○ 하세요.', options: ['깡충깡충', '쿨쿨'], answer: '깡충깡충' },
          { type: 'blank', prompt: '말을 따라 쓰세요.', text: '깡충깡충', answer: '깡충깡충' },
          { type: 'choice', prompt: '소리를 흉내 낸 말에 ○ 하세요.', options: ['멍멍', '방긋방긋'], answer: '멍멍' },
          { type: 'draw', prompt: '내가 좋아하는 흉내 내는 말을 쓰고 그려 보세요.' },
        ] },
      },
      differentiation: {
        easy: '빈칸 채우기는 카드가 적고 맞게 놓으면 초록 테두리가 생겨요. 가르기는 카드가 넷이에요.',
        base: '카드를 모두 놓은 뒤 확인하고, 낭송 방법을 직접 골라 연습해요.',
        challenge: '더 해 보기(낭송 방법 고르기, 모습 흉내 내는 말 고르기)까지 풀고 내 말놀이도 지어요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 흉내 내는 말과 상황이 맞지 않는다 → 몸짓으로 해 보며 알맞은 말을 고르게 한다. ② 소리와 모습 흉내를 헷갈린다 → 귀로 들리는지 눈으로 보이는지 물어 구별하게 한다. ③ 낭송할 때 목소리가 너무 작다 → 짝에게만 들리게 한 번, 교실 뒤까지 들리게 한 번 읽게 한다. 말놀이는 모두 이 단원을 위해 새로 지은 것이며 노래 가사를 옮기지 않았다.',
    }),

    // ───────────────────────── 15. 정리: 말놀이 감상과 단원 되짚기 ─────────────────────────
    L(15, {
      title: '말놀이 감상 말하고 이 단원에서 배운 것 되짚기',
      objective: '말놀이를 읽고 재미있게 느낀 까닭을 글에서 찾아 말하고, 이 단원에서 낱말을 정확하게 읽은 모습을 돌아볼 수 있다.',
      standards: LIT,
      illustration: ART('a paper child holding a small card of a rhyme with a smile and a bright speech bubble nearby', '말놀이가 재미있어요'),
      stages: ST(
        { teacher: '"지난 시간에 만든 말놀이를 다시 읽어 볼까요? 어디가 가장 재미있었나요? 그 까닭도 말해 볼까요?" \'퐁당 퐁당 연못에 퐁당\'을 읽고 학생이 "퐁당 소리가 들려서요."라고 말하면 칭찬하며 까닭을 칠판에 적는다.', student: '말놀이가 재미있는 까닭을 글에서 찾아 말하고, 이 단원에서 배운 것을 되짚어 봐요.', demo: { tool: 'mindmap', options: { mode: 'match', topic: '재미있는 까닭', shuffle: false, slots: [{ id: 'l', label: '퐁당 퐁당 연못에 퐁당' }], cards: [{ id: 'sound', text: '퐁당 소리가 들리는 것 같아요' }, { id: 'big', text: '글자가 커서요' }] }, sequence: [{ match: { l: 'sound' } }] } },
        '"이 단원에서 가장 잘한 일은 무엇인가요?" 두세 명이 말하고 서로 박수를 쳐 준다. 출구 1번에서 글과 상관없는 까닭을 고른 학생에게는 말놀이에서 가장 재미있는 낱말을 글에서 다시 찾아보게 한다.',
        [
          A('a1', '활동 1. 감상하는 말과 배운 것 정리하기', 13, 'mindmap',
            '"재미있다고만 말하지 말고, 글의 어떤 말이 그런 느낌을 주는지 말해 봐요." 감상하는 말과 글의 낱말을 짝짓게 한다. 모든 줄이 재미있다고만 말하는 학생에게는 "가장 재미있는 낱말 하나만 골라 볼까요?"라고 묻는다.',
            '말놀이가 재미있는 까닭을 이어 보고, 배운 것을 묶어 봐요.', LV,
            [
              MATCH('말놀이 줄과 재미있는 까닭을 이어 보세요.', '재미있는 까닭', [{ id: 'l1', label: '똑똑 똑똑 물방울이 똑똑' }, { id: 'l2', label: '퐁당 퐁당 연못에 퐁당' }], [C('rhythm', '같은 말이 되풀이돼서 리듬이 느껴져요'), C('sound', '물에 빠지는 소리가 들리는 것 같아요'), C('big', '글자가 커서 재미있어요')], { l1: 'rhythm', l2: 'sound' }, 0.2),
              SORT('이 단원에서 배운 내용 카드를 알맞은 칸에 놓아 보세요.', '배운 것 묶기', [{ id: 'word', label: '낱말 읽기' }, { id: 'text', label: '글 읽기' }, { id: 'sound', label: '소리와 글자' }], [C('ban', '받침까지 또박또박 읽어요'), C('finger', '손가락으로 짚으며 읽어요'), C('mid', '자꾸 나오는 낱말이 글의 중심이에요'), C('title', '제목은 글에 어울리게 붙여요'), C('osi', '옷이는 [오시]로 읽어요'), C('same', '옷과 낮은 끝소리가 같아요')], { word: ['ban', 'finger'], text: ['mid', 'title'], sound: ['osi', 'same'] }, 0.25,
                { levels: { easy: { prompt: '카드 넷을 알맞은 칸에 놓아 보세요.', toolOptions: { slots: [{ id: 'word', label: '낱말 읽기' }, { id: 'text', label: '글 읽기' }], cards: [C('ban', '받침까지 또박또박 읽어요'), C('finger', '손가락으로 짚으며 읽어요'), C('mid', '자꾸 나오는 낱말이 글의 중심이에요'), C('title', '제목은 글에 어울리게 붙여요')] }, target: { sort: { word: ['ban', 'finger'], text: ['mid', 'title'] } } } } }),
              PICK('말놀이를 읽고 마음을 말하는 알맞은 말을 모두 골라 보세요.', '감상하는 말', [C('a1', '"리듬이 있어서 재미있어요."'), C('a2', '"그냥 싫어요."'), C('a3', '"퐁당 소리가 들리는 것 같아요."')], ['a1', 'a3'], 0.25,
                { conclude: '말놀이를 감상할 때는 글의 어떤 말 때문에 그렇게 느꼈는지 까닭을 함께 말해요.' }),
              PICK('더 해 보기: 이 단원에서 배운 방법을 모두 골라 보세요.', '배운 방법', [C('p1', '쓴 글을 소리 내어 다시 읽어요'), C('p2', '받침까지 정확히 읽어요'), C('p3', '모르는 글자는 빼고 읽어요')], ['p1', 'p2'], 0.3, { extra: true }),
            ]),
          A('a2', '활동 2. 이 단원에서 내 모습 돌아보기', 13, 'emotion',
            '"이 단원에서 낱말을 읽고 쓰고 말놀이를 한 내 모습을 떠올려 봐요. 정답은 없으니 솔직하게 눈금을 골라요." 눈금을 고르고 잘한 점 하나를 짝에게 말하게 한다. 모두 \'잘해요\'를 고른 학생에게는 "가장 힘들었던 일은 무엇이었나요?"라고 묻는다.',
            '이 단원에서 내 모습에 알맞은 눈금을 골라요.', LV,
            [
              SC('받침까지 정확하게 읽는 것은 얼마나 잘했나요? 솔직하게 골라요.', '받침 있는 낱말을 정확하게 읽었어요.', '뿌듯함', '받침까지 얼마나 정확히 읽었나요?'),
              SC('짧은 글을 읽고 중심 낱말을 찾는 것은 얼마나 잘했나요? 솔직하게 골라요.', '짧은 글을 읽고 중심 낱말을 찾았어요.', '편안함', '중심 낱말을 얼마나 잘 찾았나요?'),
              SC('말놀이를 소리 내어 읽는 것은 얼마나 즐거웠나요? 솔직하게 골라요.', '말놀이를 소리 내어 읽었어요.', '신남', '말놀이를 읽는 것이 얼마나 즐거웠나요?'),
            ]),
        ],
        [
          CH('받침 때문에 쓴 글자와 소리 내는 소리가 다른 낱말은 어느 것일까요?', ['꽃이', '나무', '모자'], 0, '꽃이는 [꼬치]로 소리 나요. 받침이 뒤 글자로 넘어가요.', 0.15),
          { type: 'tool', tool: 'hangul', options: { consonants: ['ㅂ', 'ㅅ'], vowels: ['ㅏ', 'ㅣ'], batchim: ['ㄹ', 'ㄴ', 'ㅁ'], slotHints: true }, prompt: '글자 \'발\'을 만들어 보세요.', target: { syllable: '발' }, difficulty: 0.3 },
          MOOD,
        ]),
      worksheet: {
        title: '낱말을 정확하게 읽어요',
        items: [
          { type: 'check', prompt: '이 단원에서 배운 것에 모두 ✓ 하세요.', options: ['받침까지 읽기', '글의 중심 낱말 찾기', '말놀이 낭송하기'], answer: '받침까지 읽기, 글의 중심 낱말 찾기, 말놀이 낭송하기' },
          { type: 'figure', prompt: '어떤 글자일까요? 소리 내어 읽고 아래에 쓰세요.', tool: 'hangul', options: { batchim: [] }, figures: [{ state: { cho: 'ㅂ', jung: 'ㅏ', jong: 'ㄹ' }, caption: BLANK }, { state: { cho: 'ㅅ', jung: 'ㅣ', jong: 'ㄴ' }, caption: BLANK }, { state: { cho: 'ㅁ', jung: 'ㅗ', jong: 'ㅁ' }, caption: BLANK }], answer: '발, 신, 몸' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '\'옷이\'는 [______]로 읽어요.', answer: '오시' },
          { type: 'table', prompt: '내 실력에 ○ 하세요.', columns: ['내 모습', '아직', '조금', '잘해요'], cells: [['받침까지 읽어요', '', '', ''], ['글의 중심 낱말을 찾아요', '', '', ''], ['말놀이를 즐겁게 읽어요', '', '', '']] },
        ],
        easy: { note: '이 단원에서 한 일을 하나씩 떠올려요.', items: [
          { type: 'choice', prompt: '받침이 있는 글자에 ○ 하세요.', options: ['사', '산'], answer: '산' },
          { type: 'blank', prompt: '글자를 따라 쓰세요.', text: '발 → ___     손 → ___', answer: '발, 손' },
          { type: 'choice', prompt: '소리를 흉내 낸 말에 ○ 하세요.', options: ['똑똑', '연못'], answer: '똑똑' },
          { type: 'draw', prompt: '이 단원에서 가장 좋아한 말놀이를 쓰고 그려 보세요.' },
        ] },
      },
      differentiation: {
        easy: '이어 보기는 낱말이 둘이고, 묶기는 카드가 넷이에요. 자기 평가 눈금은 세 칸이에요.',
        base: '카드를 모두 놓은 뒤 확인하고, 감상하는 까닭을 글에서 스스로 찾아요.',
        challenge: '더 해 보기(배운 방법 고르기)까지 풀고 말놀이 감상을 한 문장으로 말해요.',
      },
      teacherNotes: '이 차시는 정리 시간이라 새로운 내용을 가르치지 않는다. 자주 보이는 어려움: ① 재미있다는 말만 하고 까닭을 말하지 못한다 → 글의 어떤 낱말을 보고 그렇게 느꼈는지 손가락으로 짚어 보게 한다. ② 배운 것을 칸에 넣을 때 낱말 하나만 보고 판단한다 → 카드를 끝까지 소리 내어 읽게 한다. ③ 자기 평가에서 모든 눈금을 같은 곳에 둔다 → 이 단원에서 한 장면을 떠올려 고르게 한다. 자기 평가는 성적에 반영하지 않는다.',
    }),

  ];

  PaperLessons.registerUnit({
    id: U.id, schema: 'edu-unit.v1', catalogUnit: U.catalogUnit, grade: 1, subject: '국어', unitTitle: U.unitTitle,
    flow: '받침이 있는 글자를 직접 만들어 또박또박 읽고, 받침만 다른 비슷한 글자를 뜻과 소리로 가려 읽습니다. 이어서 두세 문장 글에서 누가 무엇을 하는지와 중심 낱말을 찾고, 단서를 보고 이어질 일을 짐작하며 제목을 붙이고 읽기 습관을 돌아봅니다. 문장 끝 부호와 낱말 순서를 익힌 뒤, 쓴 글자와 소리가 다른 낱말(옷이→오시), 끝소리가 같은 낱말, 바르게 고쳐 쓰기를 다룹니다. 마지막으로 흉내 내는 말이 들어간 말놀이를 읽고 만들어 낭송하며 감상 까닭을 말하고 단원을 되짚습니다.',
    refs: {},
    lessons,
  });
})();
