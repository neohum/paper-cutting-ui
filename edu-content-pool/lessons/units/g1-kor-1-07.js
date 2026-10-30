/* 1학년 1학기 국어 7단원 알맞은 낱말을 찾아요 — 11차시 (문장 만들기·꾸며 쓰기 → 쓴 글 고쳐 쓰기 → 문장 부호 → 생활 속 글 살피기)
 * 예문·대화·인물(가명)·낱말 글은 모두 이 단원을 위해 새로 지었다. 교과서 지문·그림·노래 가사를 옮기지 않았다.
 * 성취기준은 units-map의 이 단원 목록([2국03-02] 문장 쓰기, [2국04-03] 문장·문장 부호)만 쓴다.
 */
(function () {
  const U = { id: 'g1-kor-1-07', catalogUnit: 'g1-국어-1학기-7', unitTitle: '7. 알맞은 낱말을 찾아요' };
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
      { motif: 'text', x: 240, y: 140, text: txt, size: 28 },
    ] },
  });
  const MOOD = { type: 'mood', prompt: '오늘 공부는 어땠나요?' };
  const WRITE = ['[2국03-02]']; const GRAM = ['[2국04-03]'];
  const HELP = { live: true, instant: true };
  const LV = { easy: HELP, base: {}, challenge: {} };
  // 카드 id는 로마자(힌트 누출 검사가 한글 값만 본다)
  const C = (id, text, o) => Object.assign({ id, text }, o);
  const PICK = (prompt, topic, cards, pick, d, o) => Object.assign({ prompt, toolOptions: { mode: 'pick', topic, basket: topic, cards }, target: { pick }, difficulty: d }, o);
  const SORT = (prompt, topic, slots, cards, sort, d, o) => Object.assign({ prompt, toolOptions: { topic, slots, cards }, target: { sort }, difficulty: d }, o);
  const MATCH = (prompt, topic, slots, cards, match, d, o) => Object.assign({ prompt, toolOptions: { mode: 'match', topic, slots, cards }, target: { match }, difficulty: d }, o);
  const ORDER = (prompt, cards, order, d, o) => Object.assign({ prompt, toolOptions: { mode: 'order', slots: order.map((_, i) => ['첫째', '둘째', '셋째', '넷째', '다섯째'][i]), cards }, target: { order }, difficulty: d }, o);
  const FILL = (prompt, slots, cards, fill, d, o) => Object.assign({ prompt, toolOptions: { mode: 'fill', slots, cards }, target: { fill }, difficulty: d }, o);
  const HG = (prompt, syl, d, o) => Object.assign({ prompt, target: { syllable: syl }, difficulty: d }, o);
  const HGL = (cons, vows, bat, extra) => {
    const b = { batchim: bat }; const x = extra || {};
    return {
      easy: Object.assign({ consonants: cons, vowels: vows, slotHints: true, slotGuide: true }, b, x),
      base: Object.assign({ consonants: cons, vowels: vows, revealAfterCheck: true }, b, x),
      challenge: Object.assign({ consonants: cons, vowels: vows, speak: false, revealAfterCheck: true }, b, x),
    };
  };
  const CH = (prompt, options, answer, explain, d) => ({ type: 'choice', prompt, options, answer, difficulty: d, explain });
  const SELF = (situation, feeling, ask) => ({ mode: 'scale', steps: 3, situation, feeling, ask, scaleLabels: { 1: '아직', 2: '조금', 3: '잘해요' } });
  const SELF_HINTS = ['오늘 내 모습을 떠올려 보고, 가장 가까운 눈금 하나를 눌러요. 어느 눈금이든 괜찮아요.', '잘한 점과 아직인 점을 하나씩 떠올려 봐요.', '떠오른 모습에 가장 가까운 눈금을 골라요.'];
  const SELFQ = (prompt, situation, feeling, ask) => ({ prompt, toolOptions: SELF(situation, feeling, ask), target: { level: 'any' }, difficulty: 0.05, hints: SELF_HINTS });
  const FREE = (prompt) => ({ prompt, free: true, talk: true });
  const A = (id, title, minutes, tool, teacher, task, levels, items) => ({ id, title, minutes, tool, teacher, task, levels, items });
  const ST = (intro, wrap, acts, exits) => [
    { id: 'intro', title: '도입', minutes: 6, teacher: intro.teacher, student: intro.student, demo: intro.demo },
    { id: 'main', title: '전개', minutes: 26, activities: acts },
    { id: 'wrapup', title: '정리', minutes: 8, teacher: wrap, exitTicket: exits },
  ];

  const lessons = [
    // ───────────────────────── 1. 도입: 낱말과 문장 ─────────────────────────
    L(1, {
      title: '낱말과 문장 가르고 빈칸에 알맞은 낱말 넣기',
      objective: '낱말만 있는 카드와 문장 카드를 가르고, 빈칸에 알맞은 낱말을 넣어 "누가 무엇을 한다"가 담긴 문장을 만들 수 있다.',
      standards: WRITE,
      illustration: ART('a child holding a single word card in one hand and a full sentence card in the other, with a puppy and a flower beside', '강아지  강아지가 달려요.'),
      stages: ST(
        { teacher: '"강아지" 카드와 "강아지가 달려요." 카드를 칠판에 붙이고 "어느 쪽이 이야기를 다 말해 줄까요?"라고 묻는다. 낱말은 이름만 말하고, 문장은 누가 무엇을 하는지까지 말한다는 것을 짚는다. 시연 단추로 빈칸에 "강아지가"가 들어가 문장이 완성되는 모습을 보여 준다.', student: '낱말 하나만 있을 때와 문장일 때는 무엇이 다를까요? 빈칸에 알맞은 낱말을 넣어 문장을 만들어 봐요.', demo: { tool: 'story', options: { mode: 'fill', shuffle: false, cards: [C('dog', '강아지가'), C('chair', '의자가')], slots: [{ id: 's1', who: '하윤', motif: 'flower', label: '___ 달려요.' }] }, sequence: [{ fill: { s1: 'dog' } }] } },
        '"오늘 만든 문장 가운데 하나를 짝에게 읽어 줄까요?" 한 사람이 읽고 짝이 "누가 무엇을 했나요?" 하고 묻는다. 출구 1번에서 낱말 카드를 문장이라고 고른 학생에게는 "이 카드는 무엇을 한다고 말해 주나요?"라고 되묻는다.',
        [
          A('a1', '활동 1. 낱말 카드와 문장 카드 가르기', 12, 'mindmap',
            '"이 카드는 이름만 말하나요, 무엇을 한다고도 말하나요?" 카드를 소리 내어 읽으며 가르게 한다. "연필"을 문장 칸에 넣는 학생에게는 "연필이 어떻게 한다는 말이 있나요?"라고 묻는다. 문장 끝에 마침표(.)가 있는 것도 눈여겨보게 한다.',
            '카드를 읽고 낱말과 문장으로 나누어요.', LV,
            [
              SORT('카드를 낱말과 문장으로 나누어 보세요.', '낱말과 문장', [{ id: 'w', label: '낱말' }, { id: 's', label: '문장' }], [C('dog', '강아지'), C('dogrun', '강아지가 달려요.'), C('bf', '나비'), C('bffly', '나비가 날아요.'), C('apple', '사과'), C('appleeat', '사과를 먹어요.')], { w: ['dog', 'bf', 'apple'], s: ['dogrun', 'bffly', 'appleeat'] }, 0.1,
                { levels: { easy: { prompt: '카드 넷을 낱말과 문장으로 나누어 보세요.', toolOptions: { cards: [C('dog', '강아지'), C('dogrun', '강아지가 달려요.'), C('bf', '나비'), C('bffly', '나비가 날아요.')] }, target: { sort: { w: ['dog', 'bf'], s: ['dogrun', 'bffly'] } } } } }),
              SORT('카드 넷을 낱말과 문장으로 나누어 보세요. 이번에는 다른 카드예요.', '낱말과 문장', [{ id: 'w', label: '낱말' }, { id: 's', label: '문장' }], [C('cloud', '구름'), C('cloudgo', '구름이 흘러가요.'), C('pencil', '연필'), C('pencilwrite', '연필로 글씨를 써요.')], { w: ['cloud', 'pencil'], s: ['cloudgo', 'pencilwrite'] }, 0.15),
              PICK('문장 카드만 모두 골라 바구니에 넣어 보세요.', '문장 카드', [C('sky', '하늘'), C('rain', '비가 와요.'), C('umb', '우산'), C('umbuse', '우산을 써요.'), C('fl', '꽃'), C('flbloom', '꽃이 피었어요.')], ['rain', 'umbuse', 'flbloom'], 0.25,
                { conclude: '문장은 누가 무엇을 하는지 말해 줘요. 낱말은 이름만 말해요.' }),
              PICK('더 해 보기: 문장 카드를 모두 골라 보세요.', '문장 카드', [C('sea', '바다'), C('seawave', '바다에 파도가 쳐요.'), C('moon', '달'), C('moonup', '달이 떠올라요.')], ['seawave', 'moonup'], 0.3, { extra: true }),
            ]),
          A('a2', '활동 2. 빈칸에 알맞은 낱말을 넣어 문장 만들기', 14, 'story',
            '"빈칸에 이 낱말을 넣으면 말이 되나요? 소리 내어 읽어 봐요." 읽어 보게 한 뒤 고른다. "연필이 달려요"를 만든 학생에게는 "연필이 달릴 수 있을까요?"라고 되묻고, 뜻이 맞는 낱말을 찾게 한다. 낱말 끝에 붙은 가·이·를도 함께 읽게 한다.',
            '빈칸에 알맞은 낱말 카드를 넣어 문장을 만들어요.', LV,
            [
              FILL('빈칸에 알맞은 낱말을 넣어 문장을 만들어 보세요.', [{ id: 's1', who: '하윤', motif: 'flower', label: '___ 달려요.' }], [C('dog', '강아지가'), C('pen', '연필이'), C('cl', '구름을')], { s1: 'dog' }, 0.1),
              FILL('빈칸 둘에 알맞은 낱말을 넣어 보세요.', [{ id: 's1', who: '준호', motif: 'sun', label: '___ 밥을 먹어요.' }, { id: 's2', who: '준호', motif: 'sun', label: '엄마가 ___ 읽어요.' }], [C('baby', '아기가'), C('shoe', '신발이'), C('book', '책을'), C('cloud', '구름을')], { s1: 'baby', s2: 'book' }, 0.2),
              FILL('세 문장의 빈칸에 알맞은 낱말을 넣어 보세요.', [{ id: 's1', label: '___ 날아요.' }, { id: 's2', label: '___ 피었어요.' }, { id: 's3', label: '___ 흘러요.' }], [C('bird', '새가'), C('flower', '꽃이'), C('water', '물이'), C('stone', '돌이')], { s1: 'bird', s2: 'flower', s3: 'water' }, 0.25,
                { conclude: '낱말을 넣어 읽었을 때 뜻이 이어지면 알맞은 낱말이에요.' }),
            ]),
        ],
        [
          { type: 'tool', tool: 'story', options: { mode: 'fill', slots: [{ id: 'x1', who: '지우', motif: 'tree', label: '___ 울어요.' }], cards: [C('cat', '고양이가'), C('desk', '책상이'), C('rice', '밥을')] }, prompt: '빈칸에 알맞은 낱말을 넣어 문장을 만들어 보세요.', target: { fill: { x1: 'cat' } }, difficulty: 0.15 },
          CH('다음 가운데 문장은 어느 것일까요?', ['나무', '나무가 자라요.', '자라요'], 1, '누가 무엇을 하는지 말해 주는 것이 문장이에요.', 0.15),
          MOOD,
        ]),
      worksheet: {
        title: '낱말과 문장',
        items: [
          { type: 'check', prompt: '문장을 모두 골라 □에 ✓ 하세요.', options: ['토끼', '토끼가 뛰어요.', '비가 와요.', '구름'], answer: '토끼가 뛰어요., 비가 와요.' },
          { type: 'choice', prompt: '"___ 날아요."에 알맞은 낱말에 ○ 하세요.', options: ['나비가', '의자가', '연필이'], answer: '나비가' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: '아기가 ______ 먹어요.', answer: '밥을' },
          { type: 'short', prompt: '"누가 무엇을 해요."로 내 문장을 한 줄 써 보세요.' },
        ],
        easy: { note: '낱말은 이름만, 문장은 무엇을 하는지까지 말해요.', items: [
          { type: 'choice', prompt: '문장에 ○ 하세요.', options: ['사과', '사과를 먹어요.'], answer: '사과를 먹어요.' },
          { type: 'choice', prompt: '"___ 울어요."에 알맞은 낱말에 ○ 하세요.', options: ['고양이가', '의자가'], answer: '고양이가' },
          { type: 'blank', prompt: '따라 쓰세요.', text: '새가 날아요.  →  ______________', answer: '새가 날아요.' },
          { type: 'draw', prompt: '내가 쓴 문장을 그림으로 그려 보세요.' },
        ] },
      },
      differentiation: {
        easy: '가르기는 카드 넷으로 시작하고 맞게 놓으면 초록 테두리가 생겨요. 틀린 칸에 놓으면 까닭을 말하고 되돌아와요.',
        base: '카드를 모두 놓은 뒤 확인하고, 틀리면 소리 내어 읽으며 고쳐요.',
        challenge: '더 해 보기(문장 카드 고르기)까지 풀고, 고른 까닭을 한 문장으로 짝에게 말해요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 낱말과 문장을 길이로만 가른다 → "무엇을 한다는 말이 있나요?"를 물어 뜻으로 가르게 한다. ② 가·이·를을 낱말의 일부로 읽지 않는다 → 낱말과 함께 소리 내어 읽게 한다. ③ 뜻이 안 맞아도 낱말을 넣는다 → 문장을 처음부터 끝까지 읽게 한다. 예문은 학생 이름 대신 그림 속 가명 인물로 이야기한다.',
    }),

    // ───────────────────────── 2. 연습: 꾸며 주는 말 ─────────────────────────
    L(2, {
      title: '꾸며 주는 말을 넣어 문장을 길고 자세하게 만들기',
      objective: '모양과 움직임을 나타내는 꾸며 주는 말을 찾아 문장에 넣어, 같은 일을 더 자세하게 쓸 수 있다.',
      standards: WRITE,
      illustration: ART('a small paper rabbit hopping happily past a bright yellow flower and twinkling stars', '노란 꽃이 활짝 피었어요.'),
      stages: ST(
        { teacher: '"꽃이 피었어요."와 "노란 꽃이 활짝 피었어요."를 나란히 읽어 준다. "어느 쪽이 꽃의 모습이 더 잘 보이나요?" 하고 묻고, 더 들어간 낱말을 짚게 한다. 시연 단추로 "활짝"이 빈칸에 들어가는 모습을 보여 주며 "이런 말이 문장을 꾸며 줘요"라고 말한다.', student: '"꽃이 피었어요."와 "노란 꽃이 활짝 피었어요."는 무엇이 다를까요?', demo: { tool: 'story', options: { mode: 'fill', shuffle: false, cards: [C('wide', '활짝'), C('ice', '꽁꽁')], slots: [{ id: 's1', who: '민지', motif: 'flower', label: '꽃이 ___ 피었어요.' }] }, sequence: [{ fill: { s1: 'wide' } }] } },
        '"오늘 꾸며 주는 말을 넣어 쓰고 싶은 문장은 무엇인가요?" 한 명이 "토끼가 뛰어요."를 말하면 모두 어울리는 꾸밈말을 한 가지씩 말한다. 출구 1번에서 "꽁꽁"을 고른 학생에게는 "꽁꽁은 무엇이 얼었을 때 쓰는 말이지요?"라고 되묻는다.',
        [
          A('a1', '활동 1. 꾸며 주는 말이 들어간 문장 찾기', 12, 'mindmap',
            '"어느 문장이 모습을 더 자세히 알려 주나요?" 짝지은 두 문장을 읽고 견주게 한다. "새가 날아요."도 꾸며 주는 말이 있다고 고른 학생에게는 "새가 어떻게 나는지 알려 주는 낱말이 있나요?"라고 묻는다.',
            '꾸며 주는 말이 들어간 문장만 골라 바구니에 넣고, 꾸며 주는 말을 두 가지로 나누어요.', LV,
            [
              PICK('꾸며 주는 말이 들어간 문장만 모두 골라 보세요.', '꾸며 주는 말', [C('f1', '꽃이 피었어요.'), C('f2', '노란 꽃이 피었어요.'), C('b1', '새가 날아요.'), C('b2', '작은 새가 날아요.')], ['f2', 'b2'], 0.1),
              PICK('꾸며 주는 말이 들어간 문장을 모두 골라 보세요.', '꾸며 주는 말', [C('r1', '비가 와요.'), C('r2', '비가 주룩주룩 와요.'), C('d1', '아기가 자요.'), C('d2', '아기가 새근새근 자요.'), C('s1', '별이 떠요.')], ['r2', 'd2'], 0.2),
              SORT('꾸며 주는 말을 모양을 말하는 것과 움직임을 말하는 것으로 나누어 보세요.', '꾸며 주는 말', [{ id: 'shape', label: '모양을 말해요' }, { id: 'move', label: '움직임을 말해요' }], [C('yel', '노란'), C('small', '작은'), C('round', '둥근'), C('wide', '활짝'), C('hop', '폴짝폴짝'), C('sneak', '살금살금')], { shape: ['yel', 'small', 'round'], move: ['wide', 'hop', 'sneak'] }, 0.25,
                { levels: { easy: { prompt: '꾸며 주는 말 넷을 모양과 움직임으로 나누어 보세요.', toolOptions: { cards: [C('yel', '노란'), C('round', '둥근'), C('wide', '활짝'), C('hop', '폴짝폴짝')] }, target: { sort: { shape: ['yel', 'round'], move: ['wide', 'hop'] } } } },
                  conclude: '꾸며 주는 말에는 모양을 말하는 것과 움직임을 말하는 것이 있어요.' }),
            ]),
          A('a2', '활동 2. 어울리는 꾸며 주는 말 넣어 문장 쓰기', 14, 'story',
            '"별이 어떻게 빛날까요? 소리를 내어 읽어 봐요." 꾸밈말을 넣고 문장 전체를 다시 읽게 한다. "별이 활짝 빛나요"를 만든 학생에게는 "활짝은 꽃에 어울리는 말이었지요? 별에는 어떤 말이 어울릴까요?"라고 묻는다.',
            '문장마다 어울리는 꾸며 주는 말 카드를 넣어요.', LV,
            [
              MATCH('문장마다 어울리는 꾸며 주는 말을 이어 보세요.', '어울리는 말', [{ id: 's1', label: '꽃이 ___ 피었어요.' }, { id: 's2', label: '별이 ___ 빛나요.' }, { id: 's3', label: '토끼가 ___ 뛰어요.' }], [C('wide', '활짝'), C('twin', '반짝반짝'), C('hop', '폴짝폴짝')], { s1: 'wide', s2: 'twin', s3: 'hop' }, 0.15,
                { levels: { challenge: { prompt: '문장마다 어울리는 꾸며 주는 말을 이어 보세요. 어울리지 않는 말이 하나 섞여 있어요.', toolOptions: { cards: [C('wide', '활짝'), C('twin', '반짝반짝'), C('hop', '폴짝폴짝'), C('drip', '주르륵')] } } } }),
              FILL('빈칸에 알맞은 꾸며 주는 말을 넣어 보세요.', [{ id: 's1', who: '준호', motif: 'cloud', label: '눈이 ___ 내려요.' }, { id: 's2', who: '준호', motif: 'sun', label: '해가 ___ 비춰요.' }], [C('pung', '펑펑'), C('swing', '쨍쨍'), C('slowly', '꽁꽁')], { s1: 'pung', s2: 'swing' }, 0.2),
              ORDER('"작은 강아지가 천천히 걸어요."를 만드는 차례대로 놓아 보세요.', [C('o1', '작은'), C('o2', '강아지가'), C('o3', '천천히'), C('o4', '걸어요.')], ['o1', 'o2', 'o3', 'o4'], 0.25,
                { conclude: '꾸며 주는 말은 꾸밀 말 바로 앞에 놓아요.' }),
              FILL('더 해 보기: 빈칸에 알맞은 꾸며 주는 말을 넣어 보세요.', [{ id: 's1', label: '아기가 ___ 웃어요.' }, { id: 's2', label: '바람이 ___ 불어요.' }], [C('sar', '살랑살랑'), C('bang', '방긋방긋'), C('deong', '덩실덩실')], { s1: 'bang', s2: 'sar' }, 0.3, { extra: true }),
            ]),
        ],
        [
          { type: 'tool', tool: 'story', options: { mode: 'fill', slots: [{ id: 'x1', who: '하윤', motif: 'leaf', label: '낙엽이 ___ 떨어져요.' }], cards: [C('hal', '하늘하늘'), C('sseong', '쌩쌩'), C('geo', '꽁꽁')] }, prompt: '문장에 어울리는 꾸며 주는 말을 넣어 보세요.', target: { fill: { x1: 'hal' } }, difficulty: 0.25 },
          CH('다음 가운데 꾸며 주는 말은 어느 것일까요?', ['폴짝폴짝', '토끼가', '뛰어요'], 0, '"폴짝폴짝"은 뛰는 모습을 꾸며 주는 말이에요.', 0.15),
          MOOD,
        ]),
      worksheet: {
        title: '꾸며 주는 말',
        items: [
          { type: 'choice', prompt: '꾸며 주는 말이 들어간 문장에 ○ 하세요.', options: ['꽃이 피었어요.', '빨간 꽃이 피었어요.'], answer: '빨간 꽃이 피었어요.' },
          { type: 'check', prompt: '움직임을 말하는 꾸며 주는 말을 모두 골라 ✓ 하세요.', options: ['활짝', '노란', '폴짝폴짝', '둥근'], answer: '활짝, 폴짝폴짝' },
          { type: 'blank', prompt: '꾸며 주는 말을 넣어 문장을 쓰세요.', text: '별이 ______ 빛나요.', answer: '반짝반짝' },
          { type: 'short', prompt: '"토끼가 뛰어요."에 꾸며 주는 말을 넣어 다시 써 보세요.' },
        ],
        easy: { note: '꾸며 주는 말은 모습을 더 자세히 알려 줘요.', items: [
          { type: 'choice', prompt: '"___ 빛나요."에 알맞은 말에 ○ 하세요.', options: ['반짝반짝', '펑펑'], answer: '반짝반짝' },
          { type: 'choice', prompt: '모양을 말하는 꾸며 주는 말에 ○ 하세요.', options: ['노란', '폴짝폴짝'], answer: '노란' },
          { type: 'blank', prompt: '따라 쓰세요.', text: '꽃이 활짝 피었어요.  →  ______________', answer: '꽃이 활짝 피었어요.' },
          { type: 'draw', prompt: '꾸며 주는 말이 들어간 문장을 그림으로 그려 보세요.' },
        ] },
      },
      differentiation: {
        easy: '꾸며 주는 말 나누기는 카드 넷으로 시작하고, 맞게 놓으면 초록 테두리가 생겨요.',
        base: '문장에 카드를 모두 넣은 뒤 확인하고, 전체를 소리 내어 읽어 어울리는지 살펴요.',
        challenge: '어울리지 않는 꾸밈말 카드가 하나 섞여 있고, 더 해 보기까지 풀어요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 꾸며 주는 말을 뒤에 놓는다 → 꾸밀 말 바로 앞에 놓는다고 말해 주고 소리 내어 읽게 한다. ② 흉내 내는 말의 뜻이 헷갈린다 → 몸으로 직접 흉내 내어 보게 한다. ③ 아무 낱말이나 꾸밈말로 쓴다 → 읽어 보고 뜻이 어울리는지 짝과 확인한다.',
    }),

    // ───────────────────────── 3. 말로 하고 글자로 옮기기 ─────────────────────────
    L(3, {
      title: '쓰고 싶은 것을 말한 뒤 글자와 문장으로 옮겨 쓰기',
      objective: '쓰고 싶은 것을 먼저 말하는 차례를 알고, 낱말의 글자를 만들어 한 문장으로 옮겨 쓸 수 있다.',
      standards: WRITE,
      illustration: ART('a child talking to a friend about the moon and then writing the same words on paper with a pencil', '말하고  쓰고  읽어요'),
      stages: ST(
        { teacher: '"쓰기 전에 무엇을 먼저 하면 좋을까요?" 두세 명이 대답한 뒤 "먼저 쓸 것을 생각하고, 짝에게 말해 보면 쓰기가 쉬워져요"라고 알려 준다. 시연 단추로 ㄷ, ㅏ, ㄹ이 모여 \'달\'이 되는 모습을 보여 주고 "글자를 모아 낱말을 쓰고, 낱말을 모아 문장을 써요"라고 이어 말한다.', student: '쓰고 싶은 것을 먼저 말해 보면 쓰기가 더 쉬워져요. 글자를 만들어 낱말을 써 봐요.', demo: { tool: 'hangul', options: { consonants: ['ㄷ'], vowels: ['ㅏ'], batchim: ['ㄹ', 'ㄴ'], slotHints: true }, sequence: [{ syllable: '달' }] } },
        '"오늘 쓴 문장을 짝에게 읽어 주고 처음 생각했던 것과 같은지 말해 볼까요?" 출구 1번에서 \'써 보기\'를 맨 앞에 놓은 학생에게는 "무엇을 쓸지 정하기 전에도 쓸 수 있을까요?"라고 되묻는다.',
        [
          A('a1', '활동 1. 문장을 쓰는 차례 알기', 10, 'story',
            '"밥을 먹기 전에 손을 씻는 것처럼, 글을 쓰기 전에도 하는 일이 있어요." 네 장의 카드를 소리 내어 읽고 차례를 정하게 한다. "한 문장으로 써요"를 맨 앞에 놓는 학생에게는 "무엇을 쓸지 아직 몰라도 쓸 수 있을까요?"라고 묻는다.',
            '쓰기 전과 쓴 뒤에 하는 일을 차례대로 놓아요.', LV,
            [
              ORDER('문장을 쓰는 차례대로 놓아 보세요.', [C('think', '무엇을 쓸지 생각해요'), C('talk', '짝에게 말해 봐요'), C('write', '한 문장으로 써요'), C('read', '소리 내어 읽어 봐요')], ['think', 'talk', 'write', 'read'], 0.15),
              ORDER('"달 이야기"를 쓰는 차례대로 놓아 보세요.', [C('see', '어젯밤 달을 본 일을 떠올려요'), C('say', '"달이 동그랬어."라고 말해요'), C('wr', '달이 동그랗게 떴어요.라고 써요')], ['see', 'say', 'wr'], 0.2),
              PICK('쓰기 전에 하면 좋은 일만 골라 바구니에 넣어 보세요.', '쓰기 전에', [C('idea', '쓸 것을 생각해요'), C('say', '짝에게 말해 봐요'), C('run', '바로 지우개로 지워요'), C('look', '눈을 감고 아무 글자나 써요')], ['idea', 'say'], 0.25,
                { conclude: '말로 먼저 해 보면 쓸 것이 분명해져서 쓰기가 쉬워요.' }),
            ]),
          A('a2', '활동 2. 글자를 모아 낱말 쓰기', 16, 'hangul',
            '"자음, 모음, 받침을 모아 글자를 만들고, 만든 글자로 낱말을 써요." 받침은 맨 아래에 놓는다고 다시 말해 준다. 받침을 모음 옆에 놓는 학생에게는 교구가 알려 주는 까닭을 함께 읽게 한다. 기본 단계는 확인을 눌러야 합친 글자가 보인다.',
            '낱말을 소리 내어 읽고, 글자를 만들어 써요.', HGL(['ㄷ', 'ㄴ', 'ㅂ', 'ㅅ'], ['ㅏ', 'ㅜ', 'ㅕ'], ['ㄹ', 'ㄴ', 'ㅁ']),
            [
              HG('"달이 떴어요."에서 \'달\'을 만들어 보세요.', '달', 0.15),
              HG('"눈이 와요."에서 \'눈\'을 만들어 보세요.', '눈', 0.2),
              HG('"별이 반짝여요."에서 \'별\'을 만들어 보세요.', '별', 0.25),
              HG('"산에 올라가요."에서 \'산\'을 만들어 보세요.', '산', 0.25),
              HG('더 해 보기: "밤이 왔어요."에서 \'밤\'을 만들어 보세요.', '밤', 0.3, { extra: true }),
            ]),
        ],
        [
          { type: 'tool', tool: 'hangul', options: { consonants: ['ㅂ', 'ㄱ'], vowels: ['ㅏ', 'ㅜ'], batchim: ['ㅁ', 'ㄴ', 'ㄹ'], slotHints: true }, prompt: '"물이 흘러요."에서 \'물\'을 만들어 보세요.', target: { syllable: '물' }, difficulty: 0.3 },
          CH('글을 쓰기 전에 가장 먼저 하면 좋은 일은 무엇일까요?', ['무엇을 쓸지 생각해요', '다 쓰고 나서 읽어요', '친구 글을 베껴요'], 0, '쓸 것을 먼저 생각하고 말해 보면 쓰기가 쉬워져요.', 0.1),
          MOOD,
        ]),
      worksheet: {
        title: '말하고 쓰기',
        items: [
          { type: 'table', prompt: '글을 쓰는 차례대로 번호를 쓰세요.', columns: ['하는 일', '번호'], cells: [['소리 내어 읽어 봐요', ''], ['무엇을 쓸지 생각해요', ''], ['한 문장으로 써요', ''], ['짝에게 말해 봐요', '']] },
          { type: 'figure', prompt: '자음, 모음, 받침이 모이면 어떤 글자가 될까요? 아래에 쓰세요.', tool: 'hangul', options: { batchim: [] }, figures: [{ state: { cho: 'ㄷ', jung: 'ㅏ', jong: 'ㄹ' }, caption: '(          )' }, { state: { cho: 'ㄴ', jung: 'ㅜ', jong: 'ㄴ' }, caption: '(          )' }, { state: { cho: 'ㅂ', jung: 'ㅕ', jong: 'ㄹ' }, caption: '(          )' }], answer: '달, 눈, 별' },
          { type: 'blank', prompt: '낱말을 넣어 문장을 쓰세요.', text: '______이 떴어요.', answer: '달' },
          { type: 'short', prompt: '오늘 쓰고 싶은 것을 한 문장으로 써 보세요.' },
        ],
        easy: { note: '먼저 생각하고, 말하고, 쓰고, 읽어요.', items: [
          { type: 'choice', prompt: '쓰기 전에 하는 일에 ○ 하세요.', options: ['쓸 것을 생각해요', '다 쓰고 버려요'], answer: '쓸 것을 생각해요' },
          { type: 'blank', prompt: '글자를 따라 쓰세요.', text: '달 → ___     눈 → ___', answer: '달, 눈' },
          { type: 'blank', prompt: '받침을 붙여 글자를 쓰세요.', text: '사 + ㄴ = ___', answer: '산' },
          { type: 'draw', prompt: '쓰고 싶은 것을 그림으로 그려 보세요.' },
        ] },
      },
      differentiation: {
        easy: '차례 놓기는 카드 셋으로 시작하고, 글자 만들기는 자리 글씨가 있고 모음을 들면 알맞은 자리가 깜박여요.',
        base: '카드를 모두 놓은 뒤 확인하고, 만든 글자는 확인 뒤에 보여요.',
        challenge: '내 글자 듣기 단추가 없고, 더 해 보기(밤 만들기)까지 풀어요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 말로는 길게 하는데 쓸 때는 낱말 하나만 쓴다 → 말한 것을 한 문장으로 다시 옮겨 쓰게 한다. ② 받침을 모음 옆에 놓는다 → 받침은 글자 맨 아래라고 짚는다. ③ 쓰기 전 생각 단계를 건너뛴다 → 쓰기 전에 짝에게 한 번 말하는 것을 습관으로 한다.',
    }),

    // ───────────────────────── 4. 문장 조각 이어 문장 만들기 ─────────────────────────
    L(4, {
      title: '누가와 어찌하다 조각을 이어 문장 만들기',
      objective: '문장이 "누가(무엇이)"와 "어찌하다"로 이루어진 것을 알고, 두 조각을 알맞게 이어 완성된 문장을 만들 수 있다.',
      standards: WRITE,
      illustration: ART('two paper puzzle pieces joining together, one showing a baby and one showing a sleeping moon, on a soft pastel table', '아기가  잠을 자요.'),
      stages: ST(
        { teacher: '"하윤이가" 카드만 보여 주고 "그래서 하윤이가 어떻게 했나요?"라고 묻는다. 학생들이 "?" 하고 대답하지 못하면 "달려요." 카드를 이어 붙인다. 시연 단추로 "하윤이가"와 "달려요."가 맞붙는 모습을 보여 주고 "누가 + 어찌하다, 두 조각이 있어야 문장이 완성돼요"라고 정리한다.', student: '문장은 "누가"와 "어찌하다" 두 조각으로 이루어져요. 조각을 이어 문장을 만들어 봐요.', demo: { tool: 'story', options: { mode: 'match', shuffle: false, cards: [C('run', '달려요.'), C('sleep', '자요.')], slots: [{ id: 's1', label: '하윤이가' }] }, sequence: [{ match: { s1: 'run' } }] } },
        '"오늘 만든 문장 하나를 \'누가\'와 \'어찌하다\'로 나누어 짝에게 말해 볼까요?" 출구 1번에서 \'토끼가\'만 있는 카드를 문장으로 고르는 학생에게는 "토끼가 어떻게 했나요?"라고 되묻는다.',
        [
          A('a1', '활동 1. 조각을 누가와 어찌하다로 나누기', 9, 'mindmap',
            '"이 조각은 누구 이야기인가요, 무엇을 한다는 이야기인가요?" 카드를 소리 내어 읽게 한다. "웃어요."를 누가 칸에 넣는 학생에게는 "웃어요는 사람 이름인가요, 하는 일인가요?"라고 묻는다.',
            '문장 조각을 누가와 어찌하다로 나누어요.', LV,
            [
              SORT('문장 조각을 누가와 어찌하다로 나누어 보세요.', '문장 조각', [{ id: 'who', label: '누가(무엇이)' }, { id: 'do', label: '어찌하다' }], [C('hayun', '하윤이가'), C('laugh', '웃어요.'), C('jun', '준호가'), C('jump', '뛰어요.')], { who: ['hayun', 'jun'], do: ['laugh', 'jump'] }, 0.1),
              SORT('조각 여섯을 누가와 어찌하다로 나누어 보세요.', '문장 조각', [{ id: 'who', label: '누가(무엇이)' }, { id: 'do', label: '어찌하다' }], [C('bird', '새가'), C('fly', '날아요.'), C('rain', '비가'), C('fall', '내려요.'), C('baby', '아기가'), C('sleep', '자요.')], { who: ['bird', 'rain', 'baby'], do: ['fly', 'fall', 'sleep'] }, 0.2,
                { levels: { easy: { prompt: '조각 넷을 누가와 어찌하다로 나누어 보세요.', toolOptions: { cards: [C('bird', '새가'), C('fly', '날아요.'), C('rain', '비가'), C('fall', '내려요.')] }, target: { sort: { who: ['bird', 'rain'], do: ['fly', 'fall'] } } } } }),
              SORT('더 해 보기: 길어진 조각을 누가와 어찌하다로 나누어 보세요.', '문장 조각', [{ id: 'who', label: '누가(무엇이)' }, { id: 'do', label: '어찌하다' }], [C('rab', '귀여운 토끼가'), C('eat', '풀을 먹어요.'), C('bug', '작은 벌레가'), C('craw', '나뭇잎 위를 기어가요.')], { who: ['rab', 'bug'], do: ['eat', 'craw'] }, 0.3, { extra: true }),
            ]),
          A('a2', '활동 2. 두 조각을 이어 문장 만들기', 9, 'story',
            '"이 두 조각을 이어 읽으면 말이 되나요?" 짝지은 문장을 소리 내어 읽게 한다. "새가 헤엄쳐요"로 이은 학생에게는 "새는 헤엄을 칠까요, 날까요?"라고 묻는다. 읽어 보면 어색한 짝을 스스로 찾게 한다.',
            '왼쪽 조각에 어울리는 어찌하다 조각을 이어요.', LV,
            [
              MATCH('왼쪽 조각에 어울리는 조각을 이어 문장을 만들어 보세요.', '문장 만들기', [{ id: 's1', label: '새가' }, { id: 's2', label: '물고기가' }, { id: 's3', label: '아기가' }], [C('fly', '하늘을 날아요.'), C('swim', '물에서 헤엄쳐요.'), C('sleep', '새근새근 자요.')], { s1: 'fly', s2: 'swim', s3: 'sleep' }, 0.15),
              MATCH('조각을 이어 문장 셋을 만들어 보세요. 어울리지 않는 조각이 하나 섞여 있어요.', '문장 만들기', [{ id: 's1', label: '고양이가' }, { id: 's2', label: '꽃이' }, { id: 's3', label: '비가' }], [C('cry', '야옹야옹 울어요.'), C('bloom', '예쁘게 피었어요.'), C('fall', '주룩주룩 내려요.'), C('read', '책을 읽어요.')], { s1: 'cry', s2: 'bloom', s3: 'fall' }, 0.25,
                { conclude: '두 조각을 이어 소리 내어 읽었을 때 말이 되면 알맞은 문장이에요.' }),
              MATCH('더 해 보기: 조각을 이어 문장 둘을 만들어 보세요.', '문장 만들기', [{ id: 's1', label: '다람쥐가' }, { id: 's2', label: '해가' }], [C('nut', '도토리를 먹어요.'), C('shine', '환하게 떠올라요.'), C('bark', '멍멍 짖어요.')], { s1: 'nut', s2: 'shine' }, 0.3, { extra: true }),
            ]),
          A('a3', '활동 3. 완성된 문장 찾기', 8, 'mindmap',
            '"이 카드는 누가도 있고 어찌하다도 있나요?" 손가락으로 두 조각을 짚게 한다. "준호가 책을"을 문장으로 고르는 학생에게는 "책을 어떻게 했나요?"라고 묻는다.',
            '두 조각이 다 있는 완성된 문장만 골라요.', LV,
            [
              PICK('문장이 다 만들어진 카드만 골라 보세요.', '완성된 문장', [C('a1', '준호가'), C('a2', '준호가 책을'), C('a3', '준호가 책을 읽어요.'), C('a4', '읽어요.')], ['a3'], 0.15),
              PICK('완성된 문장을 모두 골라 보세요.', '완성된 문장', [C('b1', '구름이 흘러요.'), C('b2', '구름이'), C('b3', '민지가 웃어요.'), C('b4', '웃어요.'), C('b5', '아기가')], ['b1', 'b3'], 0.2),
              FREE('내가 쓰고 싶은 문장을 "누가"와 "어찌하다"로 나누어 짝에게 말해 주세요.'),
            ]),
        ],
        [
          { type: 'tool', tool: 'mindmap', options: { topic: '문장 조각', slots: [{ id: 'who', label: '누가' }, { id: 'do', label: '어찌하다' }], cards: [C('p1', '다람쥐가'), C('p2', '도토리를 모아요.')] }, prompt: '문장 조각을 누가와 어찌하다로 나누어 보세요.', target: { sort: { who: ['p1'], do: ['p2'] } }, difficulty: 0.15 },
          CH('다음 가운데 문장이 완성된 것은 어느 것일까요?', ['고양이가', '고양이가 자요.', '자요.'], 1, '누가와 어찌하다가 모두 있어야 문장이 완성돼요.', 0.15),
          MOOD,
        ]),
      worksheet: {
        title: '문장 조각 잇기',
        items: [
          { type: 'check', prompt: '"누가"에 해당하는 조각을 모두 골라 ✓ 하세요.', options: ['토끼가', '달려요.', '구름이', '웃어요.'], answer: '토끼가, 구름이' },
          { type: 'choice', prompt: '"물고기가"와 이어서 알맞은 조각에 ○ 하세요.', options: ['하늘을 날아요.', '물에서 헤엄쳐요.', '책을 읽어요.'], answer: '물에서 헤엄쳐요.' },
          { type: 'blank', prompt: '두 조각을 이어 문장으로 쓰세요.', text: '하윤이가 + 웃어요.  →  ________________', answer: '하윤이가 웃어요.' },
          { type: 'short', prompt: '"누가 + 어찌하다"로 내 문장을 한 줄 써 보세요.' },
        ],
        easy: { note: '누가 + 어찌하다, 두 조각이 있어야 문장이에요.', items: [
          { type: 'choice', prompt: '문장에 ○ 하세요.', options: ['새가', '새가 날아요.'], answer: '새가 날아요.' },
          { type: 'choice', prompt: '"누가"에 해당하는 말에 ○ 하세요.', options: ['준호가', '뛰어요.'], answer: '준호가' },
          { type: 'blank', prompt: '따라 쓰세요.', text: '아기가 자요.  →  ______________', answer: '아기가 자요.' },
          { type: 'draw', prompt: '만든 문장을 그림으로 그려 보세요.' },
        ] },
      },
      differentiation: {
        easy: '나누기는 조각 넷으로 시작하고, 맞게 놓으면 초록 테두리가 생겨요. 틀린 칸에 놓으면 까닭을 말하고 되돌아와요.',
        base: '조각을 모두 놓은 뒤 확인하고, 이은 문장을 소리 내어 읽어요.',
        challenge: '어울리지 않는 조각이 섞인 잇기가 나오고, 더 해 보기(긴 조각 나누기)까지 풀어요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 누가 조각만 있는 것을 문장으로 본다 → "그래서 어떻게 했나요?"를 물어 어찌하다가 빠졌음을 알게 한다. ② 어찌하다만 있는 것을 문장으로 본다 → "누가 했나요?"를 묻는다. ③ 길어진 조각에서 누가를 못 찾는다 → 이름 뒤의 가·이를 짚으며 읽게 한다.',
    }),

    // ───────────────────────── 5. 연습: 하루를 차례대로 쓰기 ─────────────────────────
    L(5, {
      title: '내 하루를 때를 나타내는 말로 차례대로 쓰기',
      objective: '아침·낮·밤 같은 때를 나타내는 말을 넣어, 하루에 한 일을 두세 문장으로 차례대로 이어 쓸 수 있다.',
      standards: WRITE,
      illustration: ART('a paper day-and-night path with a rising sun, a bright noon cloud and a sleepy moon, and a child doing small things along it', '아침에  낮에  밤에'),
      stages: ST(
        { teacher: '"어제 아침에 무엇을 했나요?" 하고 한 명에게 묻고 "아침에 세수를 했어요."로 문장을 만들어 칠판에 쓴다. 이어서 "낮에는요?", "밤에는요?"를 묻고 때를 나타내는 말이 문장 맨 앞에 오는 것을 짚는다. 시연 단추로 "아침에"가 빈칸에 들어가는 모습을 보여 준다.', student: '하루에 한 일을 아침, 낮, 밤으로 나누어 차례대로 문장으로 써 봐요.', demo: { tool: 'story', options: { mode: 'fill', shuffle: false, cards: [C('morn', '아침에'), C('night', '밤에')], slots: [{ id: 's1', who: '하윤', motif: 'sun', label: '___ 세수를 했어요.' }] }, sequence: [{ fill: { s1: 'morn' } }] } },
        '"오늘 하루 가운데 가장 쓰고 싶은 때는 아침, 낮, 밤 중 어느 때인가요?" 한 명씩 말하고 짝에게 한 문장으로 말해 준다. 출구 1번에서 \'밤에 일어났어요\'를 맨 앞에 놓는 학생에게는 "일어나는 것은 하루 중 언제 하는 일이었지요?"라고 묻는다.',
        [
          A('a1', '활동 1. 하루에 한 일을 차례대로 놓기', 12, 'story',
            '"먼저 한 일이 무엇이었는지 소리 내어 읽어 보고 놓아요." 때를 나타내는 말을 짚어 읽게 한다. "저녁에 가족과 밥을 먹었어요"를 맨 앞에 놓는 학생에게는 "밥을 먹기 전에 학교에 갔나요, 안 갔나요?"라고 묻는다.',
            '하루에 한 일이 담긴 문장 카드를 일어난 차례대로 놓아요.', LV,
            [
              ORDER('하윤이의 하루를 일어난 차례대로 놓아 보세요.', [C('m', '아침에 일어나 세수를 했어요.'), C('d', '낮에 학교에서 친구와 놀았어요.'), C('n', '밤에 이를 닦고 잠을 잤어요.')], ['m', 'd', 'n'], 0.1),
              ORDER('준호의 하루를 일어난 차례대로 놓아 보세요.', [C('a', '아침에 엄마와 학교에 갔어요.'), C('b', '낮에 급식을 맛있게 먹었어요.'), C('c', '저녁에 가족과 함께 걸었어요.'), C('e', '밤에 책을 읽고 잠들었어요.')], ['a', 'b', 'c', 'e'], 0.2),
              ORDER('더 해 보기: 주말 하루를 일어난 차례대로 놓아 보세요.', [C('s1', '아침에 늦잠을 잤어요.'), C('s2', '낮에 공원에서 연을 날렸어요.'), C('s3', '저녁에 할머니께 전화를 드렸어요.'), C('s4', '밤에 별을 보며 잠이 들었어요.'), C('s5', '다음 날 아침에 눈이 번쩍 떠졌어요.')], ['s1', 's2', 's3', 's4', 's5'], 0.3, { extra: true }),
            ]),
          A('a2', '활동 2. 때를 나타내는 말 넣어 문장 쓰기', 14, 'story',
            '"한 일을 하는 때가 언제였나요? 소리 내어 읽어서 어울리는 말을 찾아요." 문장을 끝까지 읽게 한다. "낮에 잠을 자요"를 고르는 학생에게는 "여러분은 보통 언제 자나요?"라고 되묻는다. 마지막 문항은 짝에게 내 하루를 말로 해 보는 활동이다.',
            '빈칸에 때를 나타내는 알맞은 말 카드를 넣고, 내 하루를 짝에게 말해요.', LV,
            [
              FILL('빈칸에 때를 나타내는 알맞은 말을 넣어 보세요.', [{ id: 's1', who: '민지', motif: 'sun', label: '___ 학교에 가요.' }, { id: 's2', who: '민지', motif: 'moon', label: '___ 잠을 자요.' }], [C('morn', '아침에'), C('night', '밤에'), C('rain', '비가')], { s1: 'morn', s2: 'night' }, 0.15),
              FILL('빈칸 셋에 때를 나타내는 알맞은 말을 넣어 보세요.', [{ id: 's1', label: '___ 일어나요.' }, { id: 's2', label: '___ 점심을 먹어요.' }, { id: 's3', label: '___ 별이 떠요.' }], [C('morn', '아침에'), C('noon', '낮에'), C('night', '밤에'), C('slow', '천천히')], { s1: 'morn', s2: 'noon', s3: 'night' }, 0.25,
                { conclude: '때를 나타내는 말을 넣으면 언제 한 일인지 알 수 있어요.' }),
              PICK('하루의 때를 나타내는 말만 모두 골라 보세요.', '때를 나타내는 말', [C('t1', '아침에'), C('t2', '낮에'), C('t3', '활짝'), C('t4', '저녁에'), C('t5', '반짝반짝')], ['t1', 't2', 't4'], 0.2),
              FREE('오늘 아침에 한 일을 "아침에"로 시작하는 문장으로 짝에게 말해 주세요.'),
            ]),
        ],
        [
          { type: 'tool', tool: 'story', options: { mode: 'order', slots: ['첫째', '둘째', '셋째'], cards: [C('x1', '아침에 양치를 했어요.'), C('x2', '낮에 그림을 그렸어요.'), C('x3', '밤에 동화책을 읽었어요.')] }, prompt: '지우의 하루를 일어난 차례대로 놓아 보세요.', target: { order: ['x1', 'x2', 'x3'] }, difficulty: 0.15 },
          CH('"___ 별이 떠요."의 빈칸에 알맞은 말은 어느 것일까요?', ['아침에', '낮에', '밤에'], 2, '별은 밤하늘에 떠요. 때를 나타내는 말을 알맞게 넣어요.', 0.2),
          MOOD,
        ]),
      worksheet: {
        title: '내 하루 문장',
        items: [
          { type: 'table', prompt: '하루에 한 일을 일어난 차례대로 번호를 쓰세요.', columns: ['한 일', '번호'], cells: [['낮에 학교에서 놀았어요.', ''], ['밤에 잠을 잤어요.', ''], ['아침에 세수를 했어요.', '']] },
          { type: 'choice', prompt: '"___ 점심을 먹어요."에 알맞은 말에 ○ 하세요.', options: ['아침에', '낮에', '밤에'], answer: '낮에' },
          { type: 'blank', prompt: '때를 나타내는 말을 쓰세요.', text: '______ 학교에 가요.', answer: '아침에' },
          { type: 'short', prompt: '"아침에", "밤에"를 넣어 내 하루를 두 문장으로 써 보세요.' },
        ],
        easy: { note: '언제 한 일인지 때를 나타내는 말을 넣어요.', items: [
          { type: 'choice', prompt: '먼저 한 일에 ○ 하세요.', options: ['아침에 세수를 했어요.', '밤에 잠을 잤어요.'], answer: '아침에 세수를 했어요.' },
          { type: 'choice', prompt: '"___ 별이 떠요."에 알맞은 말에 ○ 하세요.', options: ['낮에', '밤에'], answer: '밤에' },
          { type: 'blank', prompt: '따라 쓰세요.', text: '아침에 일어나요.  →  ______________', answer: '아침에 일어나요.' },
          { type: 'draw', prompt: '내 하루 가운데 한 장면을 그려 보세요.' },
        ] },
      },
      differentiation: {
        easy: '차례 놓기는 카드 셋으로 시작하고, 맞게 놓으면 초록 테두리가 생겨요.',
        base: '카드를 모두 놓은 뒤 확인하고, 내 하루를 소리 내어 읽어 차례가 맞는지 살펴요.',
        challenge: '더 해 보기(카드 다섯 장 차례 놓기)까지 풀고, 때를 나타내는 말을 넣어 내 하루를 세 문장으로 말해요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 때를 나타내는 말을 빼고 한 일만 쓴다 → "언제 했나요?"를 물어 때 낱말을 넣게 한다. ② 하루의 차례가 뒤섞인다 → 시계나 해·달 그림으로 때의 차례를 보게 한다. ③ 모든 문장을 "그리고"로만 잇는다 → 아침·낮·밤으로 이을 수 있음을 보여 준다. 하루 일은 학생이 말할 수 있는 만큼만 쓰게 한다.',
    }),

    // ───────────────────────── 6. 고쳐 쓰고 읽어 주기 ─────────────────────────
    L(6, {
      title: '틀리게 쓴 낱말을 바르게 고쳐 쓰고 짝에게 읽어 주기',
      objective: '받침이 틀린 낱말을 찾아 바르게 고쳐 쓰고, 고쳐 쓴 문장을 짝에게 읽어 주며 쓰기에서 느낀 마음을 말할 수 있다.',
      standards: WRITE,
      illustration: ART('a child with a pencil circling a small mistake in a sentence on paper while a friend smiles and listens', '고쳐 쓰고 읽어 줘요'),
      stages: ST(
        { teacher: '칠판에 "학교에 갓어요."를 쓰고 "소리 내어 읽으면서 틀린 곳을 찾아볼까요?"라고 묻는다. 학생이 "갓어요"를 짚으면 "받침이 하나 빠졌어요. ㅆ 받침을 붙여요"라고 알려 준다. 시연 단추로 틀린 문장에 알맞은 고친 문장이 이어지는 모습을 보여 준다.', student: '쓴 문장을 소리 내어 읽으며 틀린 곳을 찾고, 바르게 고쳐 써 봐요.', demo: { tool: 'story', options: { mode: 'match', shuffle: false, cards: [C('ok', '학교에 갔어요.'), C('no', '학교에 갈래요.')], slots: [{ id: 's1', label: '학교에 갓어요.' }] }, sequence: [{ match: { s1: 'ok' } }] } },
        '"오늘 고쳐 쓰고 나니 문장이 어떻게 달라졌나요?" 한 명이 읽고 짝이 "잘 알아들었어"라고 말해 준다. 출구 1번에서 틀린 문장을 고른 학생에게는 받침까지 손가락으로 짚으며 다시 읽게 한다.',
        [
          A('a1', '활동 1. 바르게 쓴 문장 고르기', 9, 'mindmap',
            '"소리 내어 읽으면서 글자를 하나씩 짚어 봐요." 받침이 맞는지 살피게 한다. "밥을 먹엇어요"가 맞다고 고른 학생에게는 "먹었에서 ㅆ 받침이 있나요?"라고 묻는다.',
            '받침까지 바르게 쓴 문장만 골라요.', LV,
            [
              PICK('바르게 쓴 문장을 모두 골라 보세요.', '바른 문장', [C('a1', '학교에 갔어요.'), C('a2', '학교에 갓어요.'), C('b1', '밥을 먹었어요.'), C('b2', '밥을 먹엇어요.')], ['a1', 'b1'], 0.15),
              PICK('바르게 쓴 문장을 모두 골라 보세요.', '바른 문장', [C('c1', '그림을 그렸어요.'), C('c2', '그림을 그렷어요.'), C('d1', '친구와 놀았어요.'), C('d2', '친구와 노랐어요.'), C('e1', '비가 왔어요.')], ['c1', 'd1', 'e1'], 0.25,
                { conclude: '소리 내어 읽으며 받침을 하나씩 짚으면 틀린 곳을 찾을 수 있어요.' }),
              PICK('더 해 보기: 받침을 바르게 쓴 문장을 모두 골라 보세요.', '바른 문장', [C('f1', '꽃이 피었어요.'), C('f2', '꼬시 피엇어요.'), C('g1', '손을 씻었어요.'), C('g2', '손을 씨섰어요.')], ['f1', 'g1'], 0.3, { extra: true }),
            ]),
          A('a2', '활동 2. 틀린 문장을 바르게 고쳐 이어 보기', 9, 'story',
            '"틀린 문장을 읽고 같은 뜻의 바른 문장을 찾아요." 먼저 틀린 곳이 어디인지 말하고 고르게 한다. 뜻이 다른 문장을 고르는 학생에게는 "처음 문장은 무슨 일을 했다고 했나요?"라고 묻는다.',
            '틀린 문장에 같은 뜻의 바른 문장을 이어요.', LV,
            [
              MATCH('틀린 문장에 바르게 고친 문장을 이어 보세요.', '고쳐 쓰기', [{ id: 's1', label: '학교에 갓어요.' }, { id: 's2', label: '밥을 먹엇어요.' }, { id: 's3', label: '그림을 그렷어요.' }], [C('a', '학교에 갔어요.'), C('b', '밥을 먹었어요.'), C('c', '그림을 그렸어요.')], { s1: 'a', s2: 'b', s3: 'c' }, 0.2,
                { levels: { challenge: { prompt: '틀린 문장에 바르게 고친 문장을 이어 보세요. 뜻이 다른 문장이 하나 섞여 있어요.', toolOptions: { cards: [C('a', '학교에 갔어요.'), C('b', '밥을 먹었어요.'), C('c', '그림을 그렸어요.'), C('d', '책을 읽었어요.')] } } } }),
              MATCH('틀린 문장 둘을 바르게 고친 문장과 이어 보세요.', '고쳐 쓰기', [{ id: 's1', label: '꽃이 폈어요.' }, { id: 's2', label: '손을 씻엇어요.' }], [C('a', '손을 씻었어요.'), C('b', '꽃이 피었어요.'), C('c', '꽃이 졌어요.')], { s1: 'b', s2: 'a' }, 0.25,
                { conclude: '고친 문장도 처음 문장과 뜻이 같아야 해요.' }),
              FILL('빈칸에 알맞은 낱말을 넣어 틀린 곳을 고쳐 보세요.', [{ id: 's1', who: '준호', motif: 'leaf', label: '"나뭇잎이 떨어졌어요."를 "나뭇잎이 ___ 어요."로 써요.' }], [C('a', '떨어졌'), C('b', '떨어젓'), C('c', '떨어섯')], { s1: 'a' }, 0.3),
            ]),
          A('a3', '활동 3. 읽어 주고 내 마음 돌아보기', 8, 'emotion',
            '"고쳐 쓴 문장을 짝에게 읽어 주었나요? 짝이 뭐라고 말해 주었나요?" 읽어 주고 들려준 말을 서로 말하게 한다. 눈금에는 정답이 없다. "아직"을 고른 학생도 나무라지 않고 "어디가 어려웠나요?"라고 묻는다.',
            '고쳐 쓴 문장을 짝에게 읽어 주고, 쓰기에서 내 마음을 눈금으로 골라요.', { easy: {}, base: {}, challenge: {} },
            [
              FREE('고쳐 쓴 문장을 짝에게 소리 내어 읽어 주고, 짝이 알아들었는지 물어보세요.'),
              SELFQ('오늘 틀린 곳을 찾아 고쳐 쓴 마음은 얼마나 되나요? 솔직하게 골라요.', '소리 내어 읽으며 틀린 곳을 찾았어요.', '뿌듯함', '틀린 곳을 얼마나 찾아 고쳤나요?'),
              SELFQ('앞으로 문장을 더 쓰고 싶은 마음은 얼마나 되나요? 솔직하게 골라요.', '다음에도 문장을 써 보고 싶어요.', '신남', '문장을 더 쓰고 싶은 마음은 얼마나 되나요?'),
            ]),
        ],
        [
          { type: 'tool', tool: 'story', options: { mode: 'match', slots: [{ id: 'x1', label: '비가 왔어요.' }, { id: 'x2', label: '공을 찻어요.' }], cards: [C('a', '공을 찼어요.'), C('b', '비가 와요.'), C('c', '비가 왔어요.')] }, prompt: '틀린 문장에 바르게 고친 문장을 이어 보세요. 이미 맞는 문장도 있어요.', target: { match: { x1: 'c', x2: 'a' } }, difficulty: 0.3 },
          CH('문장을 다 쓴 뒤에 하면 좋은 일은 무엇일까요?', ['소리 내어 읽으며 틀린 곳을 찾아요', '읽지 않고 바로 내요', '다른 친구에게 대신 쓰게 해요'], 0, '쓴 글을 읽으며 틀린 곳을 찾으면 더 바른 글이 돼요.', 0.1),
          MOOD,
        ]),
      worksheet: {
        title: '고쳐 쓰기',
        items: [
          { type: 'choice', prompt: '바르게 쓴 문장에 ○ 하세요.', options: ['밥을 먹엇어요.', '밥을 먹었어요.'], answer: '밥을 먹었어요.' },
          { type: 'check', prompt: '바르게 쓴 문장을 모두 골라 □에 ✓ 하세요.', options: ['학교에 갔어요.', '학교에 갓어요.', '그림을 그렸어요.', '그림을 그렷어요.'], answer: '학교에 갔어요., 그림을 그렸어요.' },
          { type: 'blank', prompt: '틀린 곳을 고쳐 문장을 쓰세요.', text: '손을 씻엇어요.  →  ________________', answer: '손을 씻었어요.' },
          { type: 'short', prompt: '내가 쓴 문장에서 고치고 싶은 곳 한 군데를 찾아 다시 써 보세요.' },
        ],
        easy: { note: '소리 내어 읽으며 받침을 하나씩 짚어요.', items: [
          { type: 'choice', prompt: '바르게 쓴 문장에 ○ 하세요.', options: ['학교에 갓어요.', '학교에 갔어요.'], answer: '학교에 갔어요.' },
          { type: 'choice', prompt: '바르게 쓴 문장에 ○ 하세요.', options: ['그림을 그렸어요.', '그림을 그렷어요.'], answer: '그림을 그렸어요.' },
          { type: 'blank', prompt: '따라 쓰세요.', text: '손을 씻었어요.  →  ______________', answer: '손을 씻었어요.' },
          { type: 'draw', prompt: '친구에게 문장을 읽어 주는 내 모습을 그려 보세요.' },
        ] },
      },
      differentiation: {
        easy: '고르기는 문장 넷으로 시작하고, 맞게 고르면 초록 테두리가 생겨요.',
        base: '문장을 모두 고른 뒤 확인하고, 틀리면 받침을 손가락으로 짚으며 다시 읽어요.',
        challenge: '뜻이 다른 문장이 섞인 잇기가 나오고, 더 해 보기까지 풀어요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 소리 나는 대로만 써서 받침을 빠뜨린다 → 입을 닫는 끝소리를 느끼며 받침을 붙이게 한다. ② 고치다 뜻이 바뀐다 → 처음 문장과 뜻이 같은지 다시 읽게 한다. ③ 틀릴까 봐 쓰기를 꺼린다 → 틀린 곳은 고치면 된다고 말해 주고 새 낱말을 써 보게 격려한다. 짝에게 읽어 줄 때는 짝이 먼저 좋은 점을 한 가지 말해 주게 한다.',
    }),

    // ───────────────────────── 7. 문장 부호 관찰 ─────────────────────────
    L(7, {
      title: '마침표·물음표·느낌표가 쓰인 문장 가르기',
      objective: '알리는 문장, 묻는 문장, 놀라는 문장을 가르고, 문장 끝에 마침표·물음표·느낌표를 알맞게 붙일 수 있다.',
      standards: GRAM,
      illustration: ART('three paper signs showing a dot, a question mark and an exclamation mark, held up by three small animals', '.   ?   !'),
      stages: ST(
        { teacher: '"비가 와요." 하고 말하고, "비가 와요?" 하고 말하고, "비가 와요!" 하고 말한다. 같은 낱말인데 소리가 어떻게 달랐는지 묻고 칠판 문장 끝에 ., ?, !를 차례로 붙인다. 시연 단추로 "알려요" 칸에 "비가 와요."가 놓이는 모습을 보여 준다. "문장이 끝났다는 표를 문장 부호라고 해요."', student: '문장 끝에 붙는 표를 문장 부호라고 해요. 알리는 문장, 묻는 문장, 놀라는 문장을 나누어 봐요.', demo: { tool: 'mindmap', options: { topic: '문장 끝의 표', slots: [{ id: 'tell', label: '알려요(.)' }, { id: 'ask', label: '물어요(?)' }], cards: [C('rain', '비가 와요.'), C('what', '무엇이에요?')], shuffle: false }, sequence: [{ sort: { tell: ['rain'], ask: ['what'] } }] } },
        '"오늘 문장 부호 가운데 가장 마음에 든 것은 무엇이고, 그 까닭은 무엇인가요?" 한두 명이 말한다. 출구 1번에서 "점심 먹었니"에 마침표를 고른 학생에게는 "이 문장은 알려 주나요, 물어보나요?"라고 되묻는다.',
        [
          A('a1', '활동 1. 문장을 알리는·묻는·놀라는 것으로 가르기', 14, 'mindmap',
            '"이 문장을 읽을 때 목소리가 어떻게 달라지나요?" 소리 내어 읽으며 끝의 표를 눈여겨보게 한다. "우와, 무지개다!"를 알리는 칸에 넣는 학생에게는 "이 말을 할 때 마음은 어떤가요?"라고 묻는다. 둘째 문항은 문장 끝 부호를 가려 놓았으니 뜻으로 가르게 한다.',
            '문장 카드를 알리는 문장, 묻는 문장, 놀라는 문장으로 나누어요.', LV,
            [
              SORT('문장 끝의 표를 보고 알리는 것, 묻는 것, 놀라는 것으로 나누어 보세요.', '문장 끝의 표', [{ id: 'tell', label: '알려요(.)' }, { id: 'ask', label: '물어요(?)' }, { id: 'wow', label: '놀라요(!)' }], [C('s1', '오늘은 맑아요.'), C('s2', '이름이 뭐예요?'), C('s3', '우와, 무지개다!'), C('s4', '저는 일 학년이에요.'), C('s5', '몇 시예요?'), C('s6', '앗, 뜨거워!')], { tell: ['s1', 's4'], ask: ['s2', 's5'], wow: ['s3', 's6'] }, 0.15,
                { levels: { easy: { prompt: '문장 끝의 표를 보고 알리는 것과 묻는 것으로 나누어 보세요.', toolOptions: { slots: [{ id: 'tell', label: '알려요(.)' }, { id: 'ask', label: '물어요(?)' }], cards: [C('s1', '오늘은 맑아요.'), C('s2', '이름이 뭐예요?'), C('s4', '저는 일 학년이에요.'), C('s5', '몇 시예요?')] }, target: { sort: { tell: ['s1', 's4'], ask: ['s2', 's5'] } } } } }),
              SORT('표를 가린 문장이에요. 뜻을 읽고 알리는 것, 묻는 것, 놀라는 것으로 나누어 보세요.', '표를 가린 문장', [{ id: 'tell', label: '알려요' }, { id: 'ask', label: '물어요' }, { id: 'wow', label: '놀라요' }], [C('t1', '나는 사과를 좋아해'), C('t2', '사과를 좋아하니'), C('t3', '와, 사과가 크다'), C('t4', '지금은 점심시간이야'), C('t5', '이게 무슨 소리지')], { tell: ['t1', 't4'], ask: ['t2', 't5'], wow: ['t3'] }, 0.25,
                { conclude: '알리면 마침표, 물으면 물음표, 놀라면 느낌표를 써요.' }),
              PICK('더 해 보기: 묻는 문장만 모두 골라 보세요.', '묻는 문장', [C('q1', '어디에 가요?'), C('q2', '우리 집에 가요.'), C('q3', '누구와 놀까?'), C('q4', '아, 신난다!')], ['q1', 'q3'], 0.2, { extra: true }),
            ]),
          A('a2', '활동 2. 문장 부호와 쓰임 이어 보기', 12, 'story',
            '"이 표는 언제 쓰나요?" 마침표·물음표·느낌표를 손가락으로 공중에 그려 보게 한다. 물음표를 알리는 칸에 이은 학생에게는 "친구에게 질문할 때 목소리가 올라가지요?"라고 말하고 다시 읽게 한다.',
            '문장 부호와 알맞은 쓰임을 이어요.', LV,
            [
              MATCH('문장 부호와 알맞은 쓰임을 이어 보세요.', '문장 부호', [{ id: 's1', label: '친구에게 물어요' }, { id: 's2', label: '문장이 끝났어요' }, { id: 's3', label: '깜짝 놀랐어요' }], [C('dot', '마침표(.)'), C('qm', '물음표(?)'), C('ex', '느낌표(!)')], { s1: 'qm', s2: 'dot', s3: 'ex' }, 0.15),
              FILL('두 문장 끝에 어울리는 표를 넣어 보세요.', [{ id: 's1', who: '하윤', motif: 'flower', label: '꽃이 예뻐요___' }, { id: 's2', who: '준호', motif: 'sun', label: '너는 몇 살이니___' }], [C('dot', '마침표(.)'), C('qm', '물음표(?)'), C('ex', '느낌표(!)')], { s1: 'dot', s2: 'qm' }, 0.2),
              ORDER('문장에 부호를 붙이는 차례대로 놓아 보세요.', [C('w', '문장을 써요'), C('r', '소리 내어 읽어 봐요'), C('m', '알리는지 묻는지 정해요'), C('p', '끝에 부호를 붙여요')], ['w', 'r', 'm', 'p'], 0.25,
                { conclude: '소리 내어 읽고 알리는지 묻는지 정한 뒤 끝에 알맞은 표를 붙여요.' }),
            ]),
        ],
        [
          { type: 'tool', tool: 'mindmap', options: { topic: '문장 끝의 표', slots: [{ id: 'tell', label: '알려요(.)' }, { id: 'ask', label: '물어요(?)' }], cards: [C('p1', '내 짝은 다정해요.'), C('p2', '어디에 앉을까?')] }, prompt: '문장을 알리는 것과 묻는 것으로 나누어 보세요.', target: { sort: { tell: ['p1'], ask: ['p2'] } }, difficulty: 0.15 },
          CH('"점심 먹었니___"의 끝에 알맞은 문장 부호는 무엇일까요?', ['마침표(.)', '물음표(?)', '느낌표(!)'], 1, '친구에게 물어보는 문장이므로 물음표를 붙여요.', 0.15),
          MOOD,
        ]),
      worksheet: {
        title: '마침표·물음표·느낌표',
        items: [
          { type: 'table', prompt: '문장 끝에 알맞은 문장 부호를 쓰세요.', columns: ['문장', '문장 부호'], cells: [['비가 와요', ''], ['이름이 뭐예요', ''], ['우와, 큰 고래다', '']] },
          { type: 'choice', prompt: '묻는 문장에 ○ 하세요.', options: ['오늘은 맑아요.', '어디에 가요?', '앗, 뜨거워!'], answer: '어디에 가요?' },
          { type: 'check', prompt: '문장이 끝났을 때 쓰는 표를 모두 골라 □에 ✓ 하세요.', options: ['마침표(.)', '물음표(?)', '느낌표(!)', '글자'], answer: '마침표(.), 물음표(?), 느낌표(!)' },
          { type: 'short', prompt: '친구에게 묻고 싶은 말을 한 문장으로 쓰고 끝에 알맞은 표를 붙여 보세요.' },
        ],
        easy: { note: '알리면 마침표(.), 물으면 물음표(?), 놀라면 느낌표(!)를 써요.', items: [
          { type: 'choice', prompt: '"몇 시예요___"에 알맞은 표에 ○ 하세요.', options: ['.', '?'], answer: '?' },
          { type: 'choice', prompt: '"우와, 무지개다___"에 알맞은 표에 ○ 하세요.', options: ['!', '.'], answer: '!' },
          { type: 'blank', prompt: '문장 끝에 알맞은 표를 쓰세요.', text: '나는 일 학년이에요___', answer: '.' },
          { type: 'draw', prompt: '놀랐을 때 내 모습을 그리고 느낌표를 붙여 보세요.' },
        ] },
      },
      differentiation: {
        easy: '가르기는 알리는 문장과 묻는 문장 둘로 시작하고, 맞게 놓으면 초록 테두리가 생겨요. 이어 보기는 틀린 짝을 놓으면 까닭을 말하고 되돌아와요.',
        base: '카드를 모두 놓은 뒤 확인하고, 소리 내어 읽으며 알맞은 부호인지 살펴요.',
        challenge: '문장 부호를 가린 문장이 나와 뜻으로 가르고, 더 해 보기(묻는 문장 고르기)까지 풀어요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 모든 문장 끝에 마침표만 찍는다 → 묻는 문장은 목소리를 올려 읽어 물음표를 떠올리게 한다. ② 느낌표를 아무 데나 쓴다 → 깜짝 놀랐을 때만 쓴다고 말해 준다. ③ 물음표와 느낌표를 모양으로만 헷갈린다 → 몸짓으로 "묻기"와 "놀라기"를 해 본다.',
    }),

    // ───────────────────────── 8. 상황에 맞게 부호 붙이기 ─────────────────────────
    L(8, {
      title: '상황에 맞는 문장을 고르고 끝에 문장 부호 붙이기',
      objective: '말하고 싶은 상황에 알맞은 문장을 고르고, 문장을 소리 내어 읽으며 끝에 알맞은 문장 부호를 붙일 수 있다.',
      standards: GRAM,
      illustration: ART('a child at a classroom door asking a question while a friend nearby is surprised by a rainbow outside the window', '이름이 뭐야?  우와, 무지개다!'),
      stages: ST(
        { teacher: '"새로 온 친구가 있어요. 이름이 궁금하면 뭐라고 말할까요?" 하고 묻는다. "네 이름이 뭐야?"를 칠판에 쓰고 끝에 물음표를 붙인다. 이어서 "창밖에 큰 무지개가 떴어요. 뭐라고 말할까요?"를 묻고 "우와, 무지개다!"에 느낌표를 붙인다. 시연 단추로 상황에 맞는 문장이 이어지는 모습을 보여 준다.', student: '말하고 싶은 상황에 알맞은 문장을 고르고, 끝에 알맞은 문장 부호를 붙여 봐요.', demo: { tool: 'story', options: { mode: 'match', shuffle: false, cards: [C('ask', '네 이름이 뭐야?'), C('tell', '오늘은 맑아요.')], slots: [{ id: 's1', label: '친구 이름이 궁금해요' }] }, sequence: [{ match: { s1: 'ask' } }] } },
        '"오늘 말하고 싶은 상황 한 가지를 정해서 알맞은 문장으로 말해 볼까요?" 짝과 서로 말하고 끝의 부호를 몸으로 표현한다. 출구 1번에서 "와, 눈이 온다."의 느낌표를 고른 학생에게는 "깜짝 놀랐나요, 알려 주는 건가요?"라고 되묻는다.',
        [
          A('a1', '활동 1. 문장 끝에 알맞은 부호 붙이기', 13, 'story',
            '"읽을 때 목소리를 어떻게 하는지 생각해 봐요." 소리 내어 읽으며 알맞은 표를 고르게 한다. 물음표를 마침표로 고르는 학생에게는 "친구에게 물어보는 말인가요?"라고 되묻는다. 느낌표는 한 번만 쓴다고 짚는다.',
            '문장 끝 빈칸에 알맞은 문장 부호 카드를 넣어요.', LV,
            [
              FILL('문장 끝에 알맞은 문장 부호를 넣어 보세요.', [{ id: 's1', who: '민지', motif: 'flower', label: '오늘은 날씨가 좋아요___' }, { id: 's2', who: '준호', motif: 'sun', label: '네 이름이 뭐야___' }], [C('dot', '마침표(.)'), C('qm', '물음표(?)'), C('ex', '느낌표(!)')], { s1: 'dot', s2: 'qm' }, 0.15),
              FILL('문장 끝 빈칸 셋에 알맞은 문장 부호를 넣어 보세요.', [{ id: 's1', label: '우와, 눈이 펑펑 온다___' }, { id: 's2', label: '눈사람을 만들어도 돼요___' }, { id: 's3', label: '눈사람을 만들었어요___' }], [C('dot', '마침표(.)'), C('qm', '물음표(?)'), C('ex', '느낌표(!)')], { s1: 'ex', s2: 'qm', s3: 'dot' }, 0.25,
                { conclude: '말하는 마음이 알림인지, 질문인지, 놀람인지 생각해서 부호를 붙여요.' }),
              FILL('더 해 보기: 문장 끝에 알맞은 문장 부호를 넣어 보세요.', [{ id: 's1', label: '어, 내 연필이 사라졌어___' }, { id: 's2', label: '내 연필 못 봤니___' }], [C('dot', '마침표(.)'), C('qm', '물음표(?)'), C('ex', '느낌표(!)')], { s1: 'ex', s2: 'qm' }, 0.3, { extra: true }),
            ]),
          A('a2', '활동 2. 상황에 알맞은 문장 이어 보기', 13, 'mindmap',
            '"이런 일이 있을 때 어떤 말을 하나요?" 상황을 소리 내어 읽고 말을 골라 이어 보게 한다. 뜻이 다른 말을 이은 학생에게는 "이 문장은 알려 주는 말인가요, 묻는 말인가요?"라고 묻는다. 마지막 문항은 짝과 말하며 부호를 몸으로 보여 주는 활동이다.',
            '상황에 알맞은 문장을 이어요.', LV,
            [
              MATCH('상황에 알맞은 문장을 이어 보세요.', '이럴 땐 이렇게', [{ id: 's1', label: '친구 이름이 궁금해요' }, { id: 's2', label: '오늘 날씨를 알려 줘요' }, { id: 's3', label: '큰 무지개를 보고 놀랐어요' }], [C('a', '네 이름이 뭐야?'), C('b', '오늘은 맑아요.'), C('c', '우와, 무지개다!')], { s1: 'a', s2: 'b', s3: 'c' }, 0.15),
              MATCH('상황에 알맞은 문장을 이어 보세요. 어울리지 않는 문장이 하나 섞여 있어요.', '이럴 땐 이렇게', [{ id: 's1', label: '길을 물어봐요' }, { id: 's2', label: '내가 한 일을 알려 줘요' }, { id: 's3', label: '큰 소리에 깜짝 놀랐어요' }], [C('a', '도서관은 어디예요?'), C('b', '저는 그림을 그렸어요.'), C('c', '앗, 깜짝이야!'), C('d', '비가 와요?')], { s1: 'a', s2: 'b', s3: 'c' }, 0.25,
                { conclude: '상황을 먼저 생각하면 알맞은 문장과 부호를 고를 수 있어요.' }),
              FREE('"뭐 해?"와 "와, 멋있다!"를 짝에게 말해 보고, 끝의 표를 손가락으로 공중에 그려 보세요.'),
            ]),
        ],
        [
          { type: 'tool', tool: 'story', options: { mode: 'fill', slots: [{ id: 'x1', who: '지우', motif: 'cloud', label: '우와, 번개가 쳤다___' }, { id: 'x2', who: '지우', motif: 'sun', label: '내일도 비가 올까___' }], cards: [C('dot', '마침표(.)'), C('qm', '물음표(?)'), C('ex', '느낌표(!)')] }, prompt: '문장 끝에 알맞은 문장 부호를 넣어 보세요.', target: { fill: { x1: 'ex', x2: 'qm' } }, difficulty: 0.25 },
          CH('"저는 사과를 좋아해요___"의 끝에 알맞은 문장 부호는 무엇일까요?', ['마침표(.)', '물음표(?)', '느낌표(!)'], 0, '내 생각을 알리는 문장이므로 마침표를 붙여요.', 0.15),
          MOOD,
        ]),
      worksheet: {
        title: '상황에 맞는 부호',
        items: [
          { type: 'table', prompt: '문장 끝에 알맞은 문장 부호를 쓰세요.', columns: ['문장', '문장 부호'], cells: [['우리 집에 놀러 와', ''], ['어디에 갔니', ''], ['앗, 깜짝이야', '']] },
          { type: 'choice', prompt: '큰 소리에 놀랐을 때 알맞은 문장에 ○ 하세요.', options: ['앗, 깜짝이야!', '앗, 깜짝이야?', '앗, 깜짝이야.'], answer: '앗, 깜짝이야!' },
          { type: 'blank', prompt: '문장 끝에 알맞은 표를 쓰세요.', text: '내 연필 못 봤니___', answer: '?' },
          { type: 'short', prompt: '짝에게 하고 싶은 말을 한 문장으로 쓰고 끝에 알맞은 표를 붙여 보세요.' },
        ],
        easy: { note: '읽을 때 목소리를 생각하면 알맞은 표를 고를 수 있어요.', items: [
          { type: 'choice', prompt: '"네 이름이 뭐야___"에 알맞은 표에 ○ 하세요.', options: ['?', '.'], answer: '?' },
          { type: 'choice', prompt: '"오늘은 맑아요___"에 알맞은 표에 ○ 하세요.', options: ['.', '!'], answer: '.' },
          { type: 'blank', prompt: '따라 쓰세요.', text: '우와, 무지개다!  →  ______________', answer: '우와, 무지개다!' },
          { type: 'draw', prompt: '놀란 내 모습을 그리고 말풍선에 문장을 써 보세요.' },
        ] },
      },
      differentiation: {
        easy: '부호 넣기는 카드 둘로 시작하고, 맞게 놓으면 초록 테두리가 생겨요.',
        base: '부호를 모두 넣은 뒤 확인하고, 문장을 소리 내어 읽어 알맞은지 살펴요.',
        challenge: '어울리지 않는 문장이 섞인 잇기가 나오고, 더 해 보기(느낌표·물음표 구분)까지 풀어요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 문장을 읽지 않고 부호만 고른다 → 소리 내어 읽고 목소리 모양을 보고 정하게 한다. ② 느낌표를 여러 개 이어 찍는다 → 한 번만 쓴다고 알려 준다. ③ 묻는 문장 끝을 마침표로 쓴다 → 질문하면 목소리가 올라간다고 몸짓으로 보여 준다.',
    }),

    // ───────────────────────── 9. 연습: 부호 바르게 고치기 ─────────────────────────
    L(9, {
      title: '문장 부호가 틀린 곳을 찾아 바르게 고쳐 쓰기',
      objective: '문장 끝 부호가 잘못 쓰인 문장을 찾아 알맞은 부호로 고치고, 느낌표를 여러 번 쓰지 않고 한 번만 쓸 수 있다.',
      standards: GRAM,
      illustration: ART('a small paper inspector with a magnifying glass finding a crooked mark at the end of a sentence strip and straightening it', '이게 뭐야?'),
      stages: ST(
        { teacher: '"어젯밤에 내 문장 끝에 부호가 장난을 쳤어요." 하고 "이게 뭐야."와 "생일 축하해!!!!"를 칠판에 쓴다. "어디가 이상한지 소리 내어 읽어 볼까요?" 묻는 말인데 마침표가 있고, 느낌표가 너무 많음을 찾게 한다. 시연 단추로 틀린 문장에 바르게 고친 문장이 이어지는 모습을 보여 준다.', student: '문장 끝의 부호가 틀린 곳을 찾아 바르게 고쳐 써 봐요.', demo: { tool: 'story', options: { mode: 'match', shuffle: false, cards: [C('ok', '이게 뭐야?'), C('no', '이게 뭐야!')], slots: [{ id: 's1', label: '이게 뭐야.' }] }, sequence: [{ match: { s1: 'ok' } }] } },
        '"오늘 부호를 바르게 고친 문장을 하나 읽어 주고, 어떤 부호로 바꾸었는지 말해 볼까요?" 한두 명이 말한다. 출구 1번에서 느낌표 네 개짜리를 고른 학생에게는 "느낌표는 몇 번만 써도 놀람이 전해질까요?"라고 되묻는다.',
        [
          A('a1', '활동 1. 부호를 바르게 쓴 문장 고르기', 9, 'mindmap',
            '"소리 내어 읽고, 끝의 표가 말하는 마음과 맞는지 살펴요." 같은 문장에 다른 부호가 붙은 카드를 견주게 한다. "눈이 온다!!!!"가 더 신난다고 고른 학생에게는 "느낌표는 한 번만 써도 놀라는 마음이 전해져요"라고 알려 준다.',
            '부호를 바르게 쓴 문장만 골라요.', LV,
            [
              PICK('끝의 부호를 바르게 쓴 문장을 모두 골라 보세요.', '바른 부호', [C('a1', '우리 집에 올래?'), C('a2', '우리 집에 올래.'), C('b1', '와, 눈이 온다!'), C('b2', '와, 눈이 온다!!!!'), C('c1', '나는 눈을 좋아해.'), C('c2', '나는 눈을 좋아해?')], ['a1', 'b1', 'c1'], 0.2,
                { levels: { easy: { prompt: '끝의 부호를 바르게 쓴 문장을 모두 골라 보세요.', toolOptions: { cards: [C('a1', '우리 집에 올래?'), C('a2', '우리 집에 올래.'), C('b1', '와, 눈이 온다!'), C('b2', '와, 눈이 온다!!!!')] }, target: { pick: ['a1', 'b1'] } } } }),
              PICK('부호를 바르게 쓴 문장만 골라 보세요.', '바른 부호', [C('d1', '배가 고파요.'), C('d2', '배가 고파요?'), C('e1', '지금 몇 시니?'), C('e2', '지금 몇 시니.'), C('f1', '어, 비가 그쳤다!'), C('f2', '어, 비가 그쳤다?')], ['d1', 'e1', 'f1'], 0.25,
                { conclude: '알리면 마침표, 물으면 물음표, 놀라면 느낌표를 한 번만 써요.' }),
              PICK('더 해 보기: 부호를 바르게 쓴 문장을 모두 골라 보세요.', '바른 부호', [C('g1', '이 책 재미있니?'), C('g2', '이 책 재미있니!!'), C('h1', '이 책은 재미있어요.'), C('h2', '이 책은 재미있어요?')], ['g1', 'h1'], 0.3, { extra: true }),
            ]),
          A('a2', '활동 2. 틀린 부호를 고쳐 문장 이어 보기', 9, 'story',
            '"틀린 문장의 끝 부호만 바꾸면 돼요. 소리 내어 읽으며 찾아요." 고친 문장을 짝에게 읽어 주게 한다. "생일 축하해?"처럼 뜻에 맞지 않는 부호로 이은 학생에게는 "생일을 축하하는 말은 묻는 말인가요, 놀라는 말인가요?"라고 묻는다.',
            '틀린 문장에 부호를 바르게 고친 문장을 이어요.', LV,
            [
              MATCH('틀린 문장에 부호를 바르게 고친 문장을 이어 보세요.', '부호 고치기', [{ id: 's1', label: '생일 축하해!!!!' }, { id: 's2', label: '이게 뭐야.' }, { id: 's3', label: '오늘은 비가 와요?' }], [C('a', '생일 축하해!'), C('b', '이게 뭐야?'), C('c', '오늘은 비가 와요.')], { s1: 'a', s2: 'b', s3: 'c' }, 0.2,
                { levels: { challenge: { prompt: '틀린 문장에 부호를 바르게 고친 문장을 이어 보세요. 어울리지 않는 문장이 하나 섞여 있어요.', toolOptions: { cards: [C('a', '생일 축하해!'), C('b', '이게 뭐야?'), C('c', '오늘은 비가 와요.'), C('d', '생일 축하해?')] } } } }),
              MATCH('틀린 문장 둘에 바르게 고친 문장을 이어 보세요.', '부호 고치기', [{ id: 's1', label: '나는 일곱 살이야?' }, { id: 's2', label: '너는 몇 살이야.' }], [C('a', '나는 일곱 살이야.'), C('b', '너는 몇 살이야?'), C('c', '너는 몇 살이야!')], { s1: 'a', s2: 'b' }, 0.25,
                { conclude: '고칠 때는 문장이 알리는지 묻는지 먼저 생각해요.' }),
              MATCH('더 해 보기: 틀린 문장 둘에 부호를 바르게 고친 문장을 이어 보세요.', '부호 고치기', [{ id: 's1', label: '배가 고파요?' }, { id: 's2', label: '어디 가니.' }], [C('a', '배가 고파요.'), C('b', '어디 가니?'), C('c', '어디 가니!')], { s1: 'a', s2: 'b' }, 0.3, { extra: true }),
            ]),
          A('a3', '활동 3. 새 상황에서 알맞은 부호 붙이기', 8, 'story',
            '"소풍 가는 날 이런 말을 해 봤나요?" 상황을 읽고 목소리를 떠올리게 한 뒤 부호를 고르게 한다. 세 번째 문항의 "소풍이다"에 마침표를 붙이는 학생에게는 "소풍 가는 날 얼마나 신나는지 목소리로 해 볼까요?"라고 묻는다.',
            '소풍 날의 문장 끝에 알맞은 문장 부호를 넣어요.', LV,
            [
              FILL('내일 소풍 이야기예요. 문장 끝에 알맞은 부호를 넣어 보세요.', [{ id: 's1', who: '하윤', motif: 'sun', label: '내일 소풍 가도 돼요___' }, { id: 's2', who: '준호', motif: 'tree', label: '나는 소풍이 좋아요___' }], [C('dot', '마침표(.)'), C('qm', '물음표(?)'), C('ex', '느낌표(!)')], { s1: 'qm', s2: 'dot' }, 0.2),
              FILL('소풍날 아침 이야기예요. 문장 끝에 알맞은 부호를 넣어 보세요.', [{ id: 's1', label: '와, 오늘이 소풍날이다___' }, { id: 's2', label: '도시락은 챙겼니___' }, { id: 's3', label: '가방을 메고 나갔어요___' }], [C('dot', '마침표(.)'), C('qm', '물음표(?)'), C('ex', '느낌표(!)')], { s1: 'ex', s2: 'qm', s3: 'dot' }, 0.3),
              FILL('더 해 보기: 문장 끝에 알맞은 부호를 넣어 보세요.', [{ id: 's1', label: '앗, 도시락을 놓고 왔어___' }, { id: 's2', label: '내 도시락 나눠 먹을까___' }], [C('dot', '마침표(.)'), C('qm', '물음표(?)'), C('ex', '느낌표(!)')], { s1: 'ex', s2: 'qm' }, 0.3, { extra: true }),
            ]),
        ],
        [
          { type: 'tool', tool: 'story', options: { mode: 'match', slots: [{ id: 'x1', label: '이거 얼마예요.' }, { id: 'x2', label: '우아, 별똥별이다!!!!' }], cards: [C('a', '이거 얼마예요?'), C('b', '우아, 별똥별이다!'), C('c', '우아, 별똥별이다?')] }, prompt: '틀린 문장에 부호를 바르게 고친 문장을 이어 보세요.', target: { match: { x1: 'a', x2: 'b' } }, difficulty: 0.3 },
          CH('다음 가운데 부호를 바르게 쓴 문장은 어느 것일까요?', ['이 길로 가도 돼요?', '이 길로 가도 돼요.', '이 길로 가도 돼요!!!!'], 0, '허락을 묻는 문장이므로 물음표를 한 번 붙여요.', 0.2),
          MOOD,
        ]),
      worksheet: {
        title: '부호 바르게 고치기',
        items: [
          { type: 'choice', prompt: '부호를 바르게 쓴 문장에 ○ 하세요.', options: ['생일 축하해!!!!', '생일 축하해!', '생일 축하해?'], answer: '생일 축하해!' },
          { type: 'check', prompt: '부호를 바르게 쓴 문장을 모두 골라 □에 ✓ 하세요.', options: ['이게 뭐야?', '이게 뭐야.', '나는 눈이 좋아.', '나는 눈이 좋아?'], answer: '이게 뭐야?, 나는 눈이 좋아.' },
          { type: 'blank', prompt: '문장 끝에 알맞은 부호를 쓰세요.', text: '도시락은 챙겼니___', answer: '?' },
          { type: 'short', prompt: '틀린 부호를 찾아 바르게 고쳐 쓰세요: "내일 비가 올까."' },
        ],
        easy: { note: '알리면 마침표, 물으면 물음표, 놀라면 느낌표. 느낌표는 한 번만 써요.', items: [
          { type: 'choice', prompt: '"이게 뭐야___"에 알맞은 표에 ○ 하세요.', options: ['?', '.'], answer: '?' },
          { type: 'choice', prompt: '바르게 쓴 문장에 ○ 하세요.', options: ['와, 눈이다!', '와, 눈이다!!!!'], answer: '와, 눈이다!' },
          { type: 'blank', prompt: '따라 쓰세요.', text: '도시락은 챙겼니?  →  ______________', answer: '도시락은 챙겼니?' },
          { type: 'draw', prompt: '소풍날 신나는 내 모습을 그리고 느낌표를 한 번 붙인 말을 써 보세요.' },
        ] },
      },
      differentiation: {
        easy: '고르기는 카드 넷으로 시작하고, 맞게 고르면 초록 테두리가 생겨요. 고쳐 잇기는 틀린 짝을 놓으면 까닭을 말하고 되돌아와요.',
        base: '카드를 모두 고르거나 이은 뒤 확인하고, 소리 내어 읽어 부호가 맞는지 살펴요.',
        challenge: '어울리지 않는 문장이 섞인 잇기가 나오고, 더 해 보기까지 풀어요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 느낌표를 여러 개 이어 찍는다 → 느낌표는 한 번만 써도 놀라는 마음이 전해진다고 말해 준다. ② 묻는 문장 끝을 마침표로 쓴다 → 소리 내어 읽으며 목소리가 올라가는지 확인한다. ③ 부호를 문장 가운데에 찍는다 → 부호는 문장이 끝난 자리에만 쓴다고 짚는다.',
    }),

    // ───────────────────────── 10. 묻고 답하는 글 ─────────────────────────
    L(10, {
      title: '묻는 글과 답하는 글을 짝짓고 띄어 쓰기 살피기',
      objective: '묻는 문장에 알맞은 대답을 짝짓고, 낱말 사이를 띄어 써야 읽기 쉬운 문장이 되는 것을 알아 바르게 쓴 문장을 고를 수 있다.',
      standards: GRAM,
      illustration: ART('two children passing a paper note back and forth, one with a question mark and the other with a dot, across a small desk', '묻고  답해요'),
      stages: ST(
        { teacher: '"쪽지로 이야기를 주고받아 볼까요?" 칠판에 "너는 무엇을 좋아해?"를 쓰고 한 명에게 답을 쓰게 한다. "대답은 물어본 말에 맞아야 해요." 이어서 "나는귤을좋아해."를 보여 주고 "읽기 어렵지요? 낱말 사이를 띄어 쓰면 읽기 쉬워요"라고 한다. 시연 단추로 질문과 대답이 이어지는 모습을 보여 준다.', student: '쪽지에 묻는 글과 답하는 글을 써서 주고받아요. 낱말 사이를 띄어 쓰면 읽기 쉬워져요.', demo: { tool: 'story', options: { mode: 'match', shuffle: false, cards: [C('a', '나는 귤을 좋아해.'), C('b', '도서관에 가요.')], slots: [{ id: 's1', label: '너는 무엇을 좋아해?' }] }, sequence: [{ match: { s1: 'a' } }] } },
        '"오늘 쪽지로 묻고 답한 글을 짝에게 소리 내어 읽어 줄까요?" 띄어 쓴 곳에서 잠깐 쉬며 읽게 한다. 출구 1번에서 \'어디에 가요?\'에 \'책을 읽어요\'를 이은 학생에게는 "어디를 물었는지 다시 읽어 볼까요?"라고 묻는다.',
        [
          A('a1', '활동 1. 묻는 글에 알맞은 답하는 글 이어 보기', 10, 'story',
            '"무엇을 물었는지 먼저 읽고, 알맞은 대답을 찾아요." 질문의 첫 낱말(무엇을, 어디에, 언제, 누가)을 짚게 한다. "어디에 가요?"에 "빵을 먹어요."를 이은 학생에게는 "어디를 물어봤는데 무엇을 대답했나요?"라고 묻는다.',
            '묻는 글에 알맞은 답하는 글을 이어요.', LV,
            [
              MATCH('묻는 글에 알맞은 답하는 글을 이어 보세요.', '묻고 답하기', [{ id: 's1', label: '너는 무엇을 좋아해?' }, { id: 's2', label: '어디에 가요?' }, { id: 's3', label: '언제 만날까?' }], [C('a', '나는 귤을 좋아해.'), C('b', '도서관에 가요.'), C('c', '내일 만나요.')], { s1: 'a', s2: 'b', s3: 'c' }, 0.15),
              MATCH('묻는 글에 알맞은 답하는 글을 이어 보세요. 어울리지 않는 글이 하나 섞여 있어요.', '묻고 답하기', [{ id: 's1', label: '누가 왔어요?' }, { id: 's2', label: '무엇을 먹어요?' }, { id: 's3', label: '어디가 아파요?' }], [C('a', '지우가 왔어요.'), C('b', '빵을 먹어요.'), C('c', '배가 아파요.'), C('d', '운동장에 가요.')], { s1: 'a', s2: 'b', s3: 'c' }, 0.25,
                { conclude: '물어본 말의 첫 낱말을 보면 어떤 대답이 알맞은지 알 수 있어요.' }),
              ORDER('민지와 준호가 쪽지로 이야기해요. 주고받은 차례대로 놓아 보세요.', [C('d1', '준호: 무엇을 하고 있니?'), C('d2', '민지: 그림을 그리고 있어.'), C('d3', '준호: 무슨 그림이야?'), C('d4', '민지: 우리 집을 그렸어.')], ['d1', 'd2', 'd3', 'd4'], 0.25),
            ]),
          A('a2', '활동 2. 낱말 사이를 띄어 쓴 문장 고르기', 9, 'mindmap',
            '"소리 내어 읽다가 숨을 쉬는 곳이 낱말 사이예요." 띄어 쓴 문장과 붙여 쓴 문장을 소리 내어 읽고 견주게 한다. 붙여 쓴 문장이 더 짧아 좋다고 하는 학생에게는 "읽을 때 어디서 끊어 읽어야 할까요?"라고 묻는다.',
            '낱말 사이를 띄어 바르게 쓴 문장만 골라요.', LV,
            [
              PICK('낱말 사이를 띄어 쓴 문장을 모두 골라 보세요.', '띄어 쓴 문장', [C('a1', '나는 귤을 좋아해.'), C('a2', '나는귤을좋아해.'), C('b1', '비가 와요.'), C('b2', '비가와요.')], ['a1', 'b1'], 0.15),
              PICK('띄어 쓰기를 바르게 한 문장을 모두 골라 보세요.', '띄어 쓴 문장', [C('c1', '새가 하늘을 날아요.'), C('c2', '새가하늘을날아요.'), C('d1', '꽃이 활짝 피었어요.'), C('d2', '꽃이활짝피었어요.'), C('e1', '아기가 방긋 웃어요.'), C('e2', '아기가방긋웃어요.')], ['c1', 'd1', 'e1'], 0.25,
                { conclude: '낱말 사이를 띄어 쓰면 어디서 끊어 읽을지 알 수 있어요.' }),
              PICK('더 해 보기: 띄어 쓰기를 바르게 한 문장을 모두 골라 보세요.', '띄어 쓴 문장', [C('f1', '친구와 함께 놀아요.'), C('f2', '친구와함께놀아요.'), C('g1', '나는 일곱 살이에요.'), C('g2', '나는일곱살이에요.')], ['f1', 'g1'], 0.3, { extra: true }),
            ]),
          A('a3', '활동 3. 쪽지로 묻고 답하기', 7, 'story',
            '"질문 쪽지를 받으면 먼저 무엇을 물었는지 읽어요." 답이 둘 이상 되는 질문은 모두 고르게 한다. "빵을 먹었어요"만 고르고 "밥을 먹었어요"를 빼는 학생에게는 "무엇을 먹었는지 물었으니 먹은 것을 말하는 대답은 모두 맞아요"라고 알려 준다. 마지막 문항은 짝과 직접 쪽지를 주고받는 활동이다.',
            '묻는 말에 알맞은 대답을 모두 골라요.', LV,
            [
              PICK('"몇 살이니?"에 알맞은 대답을 모두 골라 보세요.', '알맞은 대답', [C('a', '일곱 살이에요.'), C('b', '학교에 가요.'), C('c', '여덟 살이에요.'), C('d', '비가 와요.')], ['a', 'c'], 0.2),
              PICK('"무엇을 먹었니?"에 알맞은 대답을 모두 골라 보세요.', '알맞은 대답', [C('a', '빵을 먹었어요.'), C('b', '도서관에 갔어요.'), C('c', '밥을 먹었어요.'), C('d', '내일 만나요.')], ['a', 'c'], 0.25),
              FREE('짝에게 묻는 글을 한 문장 써서 건네 주고, 짝이 쓴 답하는 글을 읽어 보세요.'),
            ]),
        ],
        [
          { type: 'tool', tool: 'story', options: { mode: 'match', slots: [{ id: 'x1', label: '무슨 색을 좋아해?' }, { id: 'x2', label: '누구와 놀았니?' }], cards: [C('a', '나는 파란색을 좋아해.'), C('b', '동생과 놀았어.'), C('c', '집에 갔어.')] }, prompt: '묻는 글에 알맞은 답하는 글을 이어 보세요.', target: { match: { x1: 'a', x2: 'b' } }, difficulty: 0.2 },
          CH('띄어 쓰기를 바르게 한 문장은 어느 것일까요?', ['나는사과를좋아해.', '나는 사과를 좋아해.', '나는사과를 좋아해.'], 1, '낱말 사이를 띄어 써야 읽기 쉬워요.', 0.2),
          MOOD,
        ]),
      worksheet: {
        title: '묻고 답하는 쪽지',
        items: [
          { type: 'table', prompt: '묻는 글에 알맞은 답하는 글을 줄로 이어서 쓰세요.', columns: ['묻는 글', '답하는 글'], cells: [['어디에 가요?', ''], ['무엇을 먹어요?', ''], ['누가 왔어요?', '']] },
          { type: 'choice', prompt: '"언제 만날까?"에 알맞은 대답에 ○ 하세요.', options: ['빵을 먹어요.', '내일 만나요.', '지우가 왔어요.'], answer: '내일 만나요.' },
          { type: 'choice', prompt: '띄어 쓰기를 바르게 한 문장에 ○ 하세요.', options: ['꽃이활짝피었어요.', '꽃이 활짝 피었어요.'], answer: '꽃이 활짝 피었어요.' },
          { type: 'short', prompt: '짝에게 묻고 싶은 말을 한 문장으로 쓰고, 짝이 답하는 글을 아래에 받아 쓰세요.' },
        ],
        easy: { note: '무엇을 물었는지 읽고, 낱말 사이를 띄어 써요.', items: [
          { type: 'choice', prompt: '"어디에 가요?"에 알맞은 대답에 ○ 하세요.', options: ['도서관에 가요.', '빵을 먹어요.'], answer: '도서관에 가요.' },
          { type: 'choice', prompt: '띄어 쓰기를 바르게 한 문장에 ○ 하세요.', options: ['비가 와요.', '비가와요.'], answer: '비가 와요.' },
          { type: 'blank', prompt: '낱말 사이를 띄어 따라 쓰세요.', text: '나는 귤을 좋아해.  →  ______________', answer: '나는 귤을 좋아해.' },
          { type: 'draw', prompt: '짝과 쪽지를 주고받는 모습을 그려 보세요.' },
        ] },
      },
      differentiation: {
        easy: '잇기는 두 쌍으로 시작하고, 맞게 이으면 초록 테두리가 생겨요. 띄어 쓰기 고르기는 카드 넷으로 시작해요.',
        base: '카드를 모두 이거나 고른 뒤 확인하고, 소리 내어 읽어 보며 고쳐요.',
        challenge: '어울리지 않는 글이 섞인 잇기가 나오고, 더 해 보기까지 풀어요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 물어본 말과 상관없는 대답을 한다 → 질문의 첫 낱말(무엇을·어디에·언제)에 밑줄을 긋게 한다. ② 낱말을 붙여 쓴다 → 소리 내어 읽다 숨 쉬는 곳이 띄는 곳이라고 알려 준다. ③ 질문과 대답에 같은 부호를 쓴다 → 묻는 말은 ?, 대답은 .이라고 짚는다. 쪽지에는 개인 정보를 쓰지 않게 한다.',
    }),

    // ───────────────────────── 11. 정리: 생활 속 글과 내 쓰기 돌아보기 ─────────────────────────
    L(11, {
      title: '우리 둘레의 글에서 문장 부호를 찾고 내 쓰기 돌아보기',
      objective: '교실과 학교 둘레의 글에서 문장 부호를 찾아 쓰임을 말하고, 이번 단원에서 배운 쓰기와 문장 부호를 돌아볼 수 있다.',
      standards: GRAM,
      illustration: ART('a child walking down a school hallway pointing at small paper signs with dots, question marks and exclamation marks', '여기에도 있어요!'),
      stages: ST(
        { teacher: '"교실과 복도에도 문장 부호가 숨어 있어요. 어디에 있을까요?" 이번 시간에 쓰는 안내 글은 모두 가상으로 만든 것임을 말해 둔다. 칠판에 "복도에서는 걸어요."를 쓰고 "이 글은 알려 주나요, 묻나요?" 하고 끝의 표를 짚게 한다. 시연 단추로 안내 글이 알맞은 칸에 놓이는 모습을 보여 준다.', student: '교실과 복도의 안내 글에서 문장 부호를 찾아봐요. 이번 단원에서 배운 것도 돌아봐요.', demo: { tool: 'mindmap', options: { topic: '안내 글의 표', slots: [{ id: 'tell', label: '알려 줘요(.)' }, { id: 'ask', label: '물어요(?)' }], cards: [C('walk', '복도에서는 걸어요.'), C('hand', '손을 씻었나요?')], shuffle: false }, sequence: [{ sort: { tell: ['walk'], ask: ['hand'] } }] } },
        '"오늘 알게 된 것 가운데 내일 다른 곳에서 찾아보고 싶은 것은 무엇인가요?" 한두 명이 말한다. 출구 1번에서 "조심해요!"를 알리는 칸에 넣은 학생에게는 "이 글을 읽으면 마음이 어떤가요?"라고 묻는다.',
        [
          A('a1', '활동 1. 안내 글의 부호 살피기', 14, 'mindmap',
            '"끝의 표가 무엇이고, 왜 그 표를 썼을까요?" 안내 글을 소리 내어 읽게 한다. "여기에 앉아도 될까요?"를 알리는 칸에 넣는 학생에게는 "이 문장은 물어보는 말인가요?"라고 되묻는다. 모든 안내 글은 이 수업을 위해 지은 가상의 글이다.',
            '안내 글을 알리는 글, 묻는 글, 힘주어 말하는 글로 나누고, 부호를 바르게 쓴 글을 골라요.', LV,
            [
              SORT('우리 학교 안내 글을 끝의 표에 따라 나누어 보세요.', '안내 글의 표', [{ id: 'tell', label: '알려 줘요(.)' }, { id: 'ask', label: '물어요(?)' }, { id: 'wow', label: '힘주어 말해요(!)' }], [C('s1', '복도에서는 걸어요.'), C('s2', '손을 씻었나요?'), C('s3', '조심해요!'), C('s4', '쓰레기는 쓰레기통에 버려요.'), C('s5', '여기에 앉아도 될까요?'), C('s6', '미끄러워요!')], { tell: ['s1', 's4'], ask: ['s2', 's5'], wow: ['s3', 's6'] }, 0.2,
                { levels: { easy: { prompt: '안내 글 넷을 알리는 글과 묻는 글로 나누어 보세요.', toolOptions: { slots: [{ id: 'tell', label: '알려 줘요(.)' }, { id: 'ask', label: '물어요(?)' }], cards: [C('s1', '복도에서는 걸어요.'), C('s2', '손을 씻었나요?'), C('s4', '쓰레기는 쓰레기통에 버려요.'), C('s5', '여기에 앉아도 될까요?')] }, target: { sort: { tell: ['s1', 's4'], ask: ['s2', 's5'] } } } } }),
              PICK('부호를 바르게 쓴 안내 글을 모두 골라 보세요.', '바른 안내 글', [C('a1', '이곳에서 뛰지 않아요.'), C('a2', '이곳에서 뛰지 않아요?'), C('b1', '앗, 조심해요!'), C('b2', '앗, 조심해요?'), C('c1', '줄을 서서 기다려요.'), C('c2', '줄을 서서 기다려요?')], ['a1', 'b1', 'c1'], 0.25,
                { conclude: '안내 글에도 알맞은 문장 부호가 쓰여 있어요.' }),
              FREE('교실이나 복도에서 문장 부호가 쓰인 글을 하나 찾아 짝에게 보여 주고, 어떤 표인지 말해 주세요.'),
            ]),
          A('a2', '활동 2. 이번 단원에서 배운 것 돌아보기', 12, 'emotion',
            '"이번 단원에서 문장을 쓰고 부호를 붙여 보니 어땠나요?" 한 명씩 가장 잘한 것을 말하게 한다. 눈금에는 정답이 없다. "아직"을 고른 학생을 나무라지 않고 "어느 부호가 어려웠나요?"라고 물어 다음 시간에 다시 짚는다.',
            '이번 단원의 내 쓰기를 짝에게 말하고, 내 마음을 눈금으로 골라요.', { easy: {}, base: {}, challenge: {} },
            [
              FREE('이번 단원에서 쓴 문장 가운데 가장 마음에 드는 문장을 짝에게 읽어 주세요.'),
              SELFQ('문장 끝에 알맞은 부호를 붙일 수 있는 마음은 얼마나 되나요? 솔직하게 골라요.', '문장을 읽고 알맞은 부호를 붙여 봤어요.', '뿌듯함', '알맞은 부호를 얼마나 붙일 수 있나요?'),
              SELFQ('낱말 사이를 띄어 쓰며 문장을 쓴 마음은 얼마나 되나요? 솔직하게 골라요.', '낱말 사이를 띄어 문장을 써 봤어요.', '편안함', '낱말 사이를 얼마나 띄어 썼나요?'),
              SELFQ('앞으로 생활 속 글에서 문장 부호를 찾아보고 싶은 마음은 얼마나 되나요? 솔직하게 골라요.', '집이나 길에서 문장 부호를 찾아보고 싶어요.', '신남', '부호를 찾아보고 싶은 마음은 얼마나 되나요?'),
            ]),
        ],
        [
          { type: 'tool', tool: 'mindmap', options: { topic: '안내 글의 표', slots: [{ id: 'tell', label: '알려 줘요' }, { id: 'ask', label: '물어요' }], cards: [C('p1', '문은 살살 닫아요.'), C('p2', '신발장은 어디예요?')] }, prompt: '안내 글을 알리는 글과 묻는 글로 나누어 보세요.', target: { sort: { tell: ['p1'], ask: ['p2'] } }, difficulty: 0.2 },
          CH('"앗, 뜨거워!"의 끝에 쓰인 표는 무엇일까요?', ['마침표(.)', '물음표(?)', '느낌표(!)'], 2, '깜짝 놀랐을 때 쓰는 표는 느낌표예요.', 0.15),
          MOOD,
        ]),
      worksheet: {
        title: '우리 둘레의 문장 부호',
        items: [
          { type: 'table', prompt: '끝의 표에 따라 안내 글을 나누어 쓰세요.', columns: ['안내 글', '알려요·물어요·놀라요'], cells: [['복도에서는 걸어요.', ''], ['손을 씻었나요?', ''], ['미끄러워요!', '']] },
          { type: 'check', prompt: '부호를 바르게 쓴 글을 모두 골라 □에 ✓ 하세요.', options: ['조심해서 걸어요.', '조심해서 걸어요?', '앗, 뜨거워!', '앗, 뜨거워?'], answer: '조심해서 걸어요., 앗, 뜨거워!' },
          { type: 'short', prompt: '교실이나 집에서 문장 부호가 쓰인 곳을 한 군데 찾아 쓰세요.' },
          { type: 'draw', prompt: '이번 단원에서 쓴 문장 가운데 마음에 드는 것을 쓰고 그림도 그려 보세요.' },
        ],
        easy: { note: '알리면 마침표, 물으면 물음표, 놀라면 느낌표를 써요.', items: [
          { type: 'choice', prompt: '묻는 글에 ○ 하세요.', options: ['손을 씻었나요?', '복도에서는 걸어요.'], answer: '손을 씻었나요?' },
          { type: 'choice', prompt: '"미끄러워요___"에 알맞은 표에 ○ 하세요.', options: ['!', '.'], answer: '!' },
          { type: 'blank', prompt: '따라 쓰세요.', text: '복도에서는 걸어요.  →  ______________', answer: '복도에서는 걸어요.' },
          { type: 'draw', prompt: '교실에서 찾은 문장 부호를 그려 보세요.' },
        ] },
      },
      differentiation: {
        easy: '나누기는 안내 글 넷으로 시작하고, 맞게 놓으면 초록 테두리가 생겨요. 눈금은 정답이 없으니 떠오른 대로 골라요.',
        base: '카드를 모두 놓은 뒤 확인하고, 안내 글을 소리 내어 읽으며 부호가 맞는지 살펴요.',
        challenge: '부호가 틀린 안내 글이 섞인 고르기가 나오고, 짝에게 안내 글의 부호를 골랐던 까닭을 말해요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 안내 글의 끝을 읽지 않고 뜻만으로 가른다 → 끝의 표를 손가락으로 짚으며 읽게 한다. ② "조심해요!"처럼 힘주어 말하는 글을 알리는 글로 본다 → 읽을 때 목소리가 커지는지 물어본다. ③ 교과서에서만 부호를 찾는다 → 교실 게시물, 가정 통신문, 그림책에서도 찾아보게 한다. 안내 글은 모두 이 수업을 위해 지은 가상의 글이다.',
    }),

  ];

  PaperLessons.registerUnit({
    id: U.id, schema: 'edu-unit.v1', catalogUnit: U.catalogUnit, grade: 1, subject: '국어', unitTitle: U.unitTitle,
    flow: '낱말만 늘어놓은 것과 문장을 가르고, 알맞은 낱말을 넣어 문장을 만드는 데서 시작합니다. 꾸며 주는 말로 문장을 늘리고, 말로 먼저 정한 뒤 글자와 문장으로 옮겨 쓰며, 문장 조각을 이어 하루를 차례대로 씁니다. 쓴 문장은 틀린 곳을 고쳐 쓰고 짝에게 읽어 줍니다. 이어서 마침표·물음표·느낌표를 문장의 쓰임에 따라 가르고 상황에 맞게 붙이며, 묻고 답하는 글과 띄어쓰기까지 살핍니다. 마지막 차시에서 우리 둘레의 글에서 부호를 찾고 내 쓰기를 돌아봅니다.',
    refs: {},
    lessons,
  });
})();
