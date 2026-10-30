/* 1학년 2학기 국어 3단원 그림일기를 써요 — 15차시
 * (그림일기 칸 알기 → 그림과 글 짝 짓기 → 사진·그림을 나눌 때의 예절 → 일기 내용을 발표하고 듣기 → 쓸 일 고르기·쓰기·고쳐 쓰기 → 매체 종류와 믿을 만한 자료 → 정리)
 * 예문·대화·인물(가명)·일기 글은 모두 이 단원을 위해 새로 지었다. 교과서 지문·그림·노래 가사·실제 작품과 실제 서비스 이름을 옮기지 않았다.
 */
(function () {
  const U = { id: 'g1-kor-2-03', catalogUnit: 'g1-국어-2학기-3', unitTitle: '3. 그림일기를 써요' };
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
  const SPEAK = ['[2국01-04]']; const WRITE = ['[2국03-04]']; const MEDIA = ['[2국06-02]'];
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
    // ───────────────────────── 1. 도입: 그림일기의 칸과 쓸 것 ─────────────────────────
    L(1, {
      title: '그림일기에 들어가는 칸과 쓸 것 알기',
      objective: '그림일기에는 날짜, 날씨, 그림, 글이 들어간다는 것을 알고, 각 칸에 쓸 것을 고를 수 있다.',
      standards: MEDIA,
      illustration: ART('an open paper picture diary with a date box, a weather box, a drawing box and a few lines for writing', '그림일기'),
      stages: ST(
        { teacher: '"오늘 있었던 일을 그림과 글로 남기면 그림일기가 돼요." 큰 그림일기 종이를 보여 주며 위에서부터 날짜, 날씨, 그림, 글 칸을 짚는다. "날짜 칸에는 무엇을 쓸까요? 날씨 칸에는요?" 시연 단추로 칸 이름과 하는 일이 이어지는 모습을 보여 준다.', student: '그림일기에는 어떤 칸이 있고 무엇을 쓰는지 알아봐요.', demo: { tool: 'mindmap', options: { mode: 'match', topic: '일기 칸', shuffle: false, slots: [{ id: 'date', label: '날짜 칸' }], cards: [{ id: 'd', text: '오늘이 몇 월 며칠인지 써요' }, { id: 'x', text: '친구 이름을 써요' }] }, sequence: [{ match: { date: 'd' } }] } },
        '"그림일기의 칸 가운데 가장 쓰기 쉬운 칸은 어디인가요? 어려운 칸은요?" 두세 명이 말한다. 출구 1번에서 날씨 칸에 점심 메뉴를 쓴다고 고른 학생에게는 날씨가 하늘 모습이라는 것을 창밖을 보며 다시 떠올리게 한다.',
        [
          A('a1', '활동 1. 그림일기의 칸 알아보기', 13, 'mindmap',
            '"그림일기에는 어떤 칸이 있나요? 한 칸씩 짚어 보며 무엇을 쓰는지 말해 봐요." 일기장을 보며 칸 이름을 소리 내어 읽게 한다. \'시험 점수표\'를 그림일기에 있는 것으로 넣는 학생에게는 "하루에 있었던 일을 남기는 데 필요한 칸일까요?"라고 되묻는다.',
            '그림일기에 있는 것을 찾고 칸 이름과 쓰는 것을 이어요.', LV,
            [
              SORT('카드를 그림일기에 있는 것과 없는 것으로 나누어 보세요.', '그림일기의 칸', [{ id: 'in', label: '그림일기에 있어요' }, { id: 'out', label: '그림일기에 없어요' }], [C('date', '날짜'), C('weather', '날씨'), C('pic', '그림'), C('text', '글'), C('score', '시험 점수표'), C('shop', '장보기 목록')], { in: ['date', 'weather', 'pic', 'text'], out: ['score', 'shop'] }, 0.15,
                { levels: { easy: { prompt: '카드 넷을 그림일기에 있는 것과 없는 것으로 나누어 보세요.', toolOptions: { cards: [C('date', '날짜'), C('score', '시험 점수표'), C('pic', '그림'), C('shop', '장보기 목록')] }, target: { sort: { in: ['date', 'pic'], out: ['score', 'shop'] } } } } }),
              MATCH('칸 이름과 그 칸에 쓰는 것을 이어 보세요.', '칸과 쓰는 것', [{ id: 'date', label: '날짜 칸' }, { id: 'weather', label: '날씨 칸' }, { id: 'pic', label: '그림 칸' }, { id: 'text', label: '글 칸' }], [C('d', '오늘이 몇 월 며칠인지 써요'), C('w', '맑음이나 비 같은 하늘 모습을 써요'), C('p', '있었던 일을 그려요'), C('t', '있었던 일을 문장으로 써요')], { date: 'd', weather: 'w', pic: 'p', text: 't' }, 0.2),
              PICK('날씨를 나타내는 말 카드를 모두 골라 보세요.', '날씨 말', [C('sunny', '맑음'), C('rain', '비'), C('school', '학교'), C('cloudy', '흐림')], ['sunny', 'rain', 'cloudy'], 0.2,
                { conclude: '날씨 칸에는 맑음, 흐림, 비, 눈처럼 하늘의 모습을 써요.' }),
              PICK('더 해 보기: 그림 칸에 그리면 좋은 것을 모두 골라 보세요.', '그림 칸에 그려요', [C('scene', '오늘 있었던 일의 모습'), C('face', '내 마음이 보이는 얼굴'), C('cover', '다른 책의 표지 베끼기')], ['scene', 'face'], 0.3, { extra: true }),
            ]),
          A('a2', '활동 2. 칸의 차례와 그림·글 짝 짓기', 13, 'mindmap',
            '"위에서부터 어떤 차례로 칸이 있었나요? 그림과 글은 서로 같은 일을 말해야 해요." 그림 설명을 소리 내어 읽고 어울리는 글을 고르게 한다. 그림은 그네인데 \'빵을 먹었어요\'를 잇는 학생에게는 "그림에 빵이 있나요?"라고 되묻는다.',
            '일기 칸의 차례를 놓고 그림과 어울리는 글을 이어요.', LV,
            [
              ORDER('그림일기의 칸을 위에서부터 차례대로 놓아 보세요.', [C('date', '날짜'), C('weather', '날씨'), C('pic', '그림'), C('text', '글')], ['date', 'weather', 'pic', 'text'], 0.2),
              MATCH('그림 설명과 어울리는 글을 이어 보세요.', '그림과 글', [{ id: 'g1', label: '그네를 타는 아이 그림' }, { id: 'g2', label: '강아지와 걷는 아이 그림' }], [C('swing', '나는 그네를 탔어요.'), C('dog', '나는 강아지와 걸었어요.'), C('bread', '나는 빵을 먹었어요.')], { g1: 'swing', g2: 'dog' }, 0.2),
              PICK('그림 칸에 비 오는 날 우산을 쓴 아이가 있어요. 글 칸에 알맞은 문장을 모두 골라 보세요.', '글 칸의 문장', [C('rain', '비가 와서 우산을 썼어요.'), C('walk', '우산을 쓰고 학교에 갔어요.'), C('snow', '눈이 와서 눈사람을 만들었어요.')], ['rain', 'walk'], 0.25),
              PICK('더 해 보기: 날짜 칸에 알맞은 것을 골라 보세요.', '날짜 칸에 써요', [C('date', '10월 3일 토요일'), C('weather', '맑음'), C('text', '그네를 탔어요.')], ['date'], 0.3, { extra: true }),
            ]),
        ],
        [
          CH('그림일기의 날씨 칸에는 무엇을 쓰나요?', ['맑음이나 비 같은 하늘 모습', '내가 먹은 점심 이름', '친구 집 주소'], 0, '날씨 칸에는 맑음, 흐림, 비 같은 하늘의 모습을 써요.', 0.1),
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '일기에 들어가요', basket: '그림일기의 칸', cards: [C('date', '날짜'), C('pic', '그림'), C('score', '시험 점수')] }, prompt: '그림일기에 들어가는 것을 모두 골라 보세요.', target: { pick: ['date', 'pic'] }, difficulty: 0.2 },
          MOOD,
        ]),
      worksheet: {
        title: '그림일기의 칸',
        items: [
          { type: 'table', prompt: '칸 이름과 쓰는 것을 이어서 쓰세요.', columns: ['칸 이름', '쓰는 것'], cells: [['날짜', ''], ['날씨', ''], ['그림', ''], ['글', '']] },
          { type: 'choice', prompt: '날씨를 나타내는 말은 어느 것일까요?', options: ['맑음', '놀이터', '점심'], answer: '맑음' },
          { type: 'check', prompt: '그림일기에 들어가는 것에 모두 ✓ 하세요.', options: ['날짜', '그림', '시험 점수', '글'], answer: '날짜, 그림, 글' },
          { type: 'draw', prompt: '오늘 있었던 일 하나를 그림 칸에 그려 보세요.' },
        ],
        easy: { note: '위에서부터 날짜, 날씨, 그림, 글이에요.', items: [
          { type: 'choice', prompt: '날씨 칸에 쓰는 말에 ○ 하세요.', options: ['맑음', '학교'], answer: '맑음' },
          { type: 'blank', prompt: '낱말을 따라 쓰세요.', text: '날짜  날씨', answer: '날짜 날씨' },
          { type: 'choice', prompt: '그림 칸에 하는 일에 ○ 하세요.', options: ['그림을 그려요', '점수를 써요'], answer: '그림을 그려요' },
          { type: 'draw', prompt: '오늘 있었던 일을 그려 보세요.' },
        ] },
      },
      differentiation: {
        easy: '가르기는 카드가 넷이고 맞게 놓으면 초록 테두리가 생겨요. 칸 차례 놓기와 이어 보기는 카드가 적어요.',
        base: '카드를 모두 놓은 뒤 확인하고, 칸 이름과 하는 일을 스스로 이어요.',
        challenge: '더 해 보기(그림 칸에 그릴 것, 날짜 칸 고르기)까지 풀고 오늘 한 일을 그림일기로 말해요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 날씨 칸에 기분이나 한 일을 쓴다 → 창밖의 하늘 모습만 쓴다고 말해 준다. ② 그림 칸과 글 칸이 다른 이야기가 된다 → 그림에 있는 것을 글로도 한 번 말해 보게 한다. ③ 날짜를 쓸 때 월과 일을 헷갈린다 → 달력에서 오늘 날짜를 손가락으로 찾아본다. 이 단원은 학생이 하루 한 장면만 고르도록 안내한다.',
    }),

    // ───────────────────────── 2. 연습: 그림 장면과 글 짝 짓기 ─────────────────────────
    L(2, {
      title: '그림 장면에 어울리는 글 찾고 하루 일을 차례대로 놓기',
      objective: '그림 장면과 글이 같은 일을 말하는지 살펴 어울리는 글을 고르고, 하루 일을 일어난 차례대로 놓을 수 있다.',
      standards: MEDIA,
      illustration: ART('a paper picture diary page where a drawing of children skipping rope matches the sentence written under it', '줄넘기를 했어요'),
      stages: ST(
        { teacher: '"어제는 그림일기의 칸을 알아봤어요. 오늘은 그림과 글이 같은 일을 말하는지 살펴봐요." 칠판에 줄넘기 그림과 \'나는 수영장에서 헤엄을 쳤어요.\'를 붙이고 "이 그림과 글이 어울리나요?"라고 묻는다. 어울리지 않는 까닭을 말하게 한다.', student: '그림과 글이 같은 일을 말하는지 살펴보고 하루 일을 차례대로 놓아 봐요.', demo: { tool: 'mindmap', options: { mode: 'match', topic: '그림과 글', shuffle: false, slots: [{ id: 'g', label: '줄넘기를 하는 그림' }], cards: [{ id: 'rope', text: '운동장에서 줄넘기를 했어요.' }, { id: 'swim', text: '수영장에서 헤엄을 쳤어요.' }] }, sequence: [{ match: { g: 'rope' } }] } },
        '"오늘 내가 맞힌 그림과 글 가운데 가장 재미있었던 것은 무엇인가요?" 두세 명이 말한다. 출구 1번에서 그림과 다른 글을 고른 학생에게는 그림에서 눈에 띄는 것 하나를 찾고 글에 그 낱말이 있는지 찾아보게 한다.',
        [
          A('a1', '활동 1. 그림 장면과 어울리는 글 찾기', 13, 'mindmap',
            '"그림에 무엇이 있나요? 글에도 같은 낱말이 있는지 찾아봐요." 그림 설명과 글을 번갈아 소리 내어 읽게 한다. \'도서관\' 그림에 \'우산을 썼어요\'를 잇는 학생에게는 "책이 있는 곳과 비 오는 날 중 어느 것이 그림과 같을까요?"라고 묻는다.',
            '그림 설명과 어울리는 글을 이어요.', LV,
            [
              MATCH('그림 설명과 어울리는 글을 이어 보세요.', '그림과 글', [{ id: 'g1', label: '급식으로 밥을 먹는 그림' }, { id: 'g2', label: '운동장에서 줄넘기를 하는 그림' }, { id: 'g3', label: '도서관에서 책을 읽는 그림' }], [C('lunch', '나는 급식으로 밥을 먹었어요.'), C('rope', '나는 운동장에서 줄넘기를 했어요.'), C('book', '나는 도서관에서 책을 읽었어요.'), C('rain', '비가 와서 우산을 썼어요.')], { g1: 'lunch', g2: 'rope', g3: 'book' }, 0.2),
              SORT('그림 칸에 공원에서 연을 날리는 모습이 있어요. 글 카드를 그림과 맞는 것과 맞지 않는 것으로 나누어 보세요.', '그림과 글', [{ id: 'yes', label: '그림과 맞아요' }, { id: 'no', label: '그림과 맞지 않아요' }], [C('kite', '공원에서 연을 날렸어요.'), C('high', '연이 바람을 타고 높이 올라갔어요.'), C('home', '집에서 밥을 먹었어요.'), C('pool', '수영장에서 헤엄을 쳤어요.')], { yes: ['kite', 'high'], no: ['home', 'pool'] }, 0.25),
              PICK('\'나는 눈사람을 만들었어요.\' 글에 어울리는 그림 설명을 모두 골라 보세요.', '어울리는 그림', [C('man', '눈 위에 서 있는 눈사람'), C('ball', '눈덩이를 굴리는 아이'), C('whale', '바다에서 헤엄치는 고래')], ['man', 'ball'], 0.25,
                { conclude: '그림과 글은 같은 일을 말해야 일기를 읽는 사람이 쉽게 알아요.' }),
              PICK('더 해 보기: \'나는 동생과 모래놀이를 했어요.\' 글에 어울리는 그림 설명을 모두 골라 보세요.', '어울리는 그림', [C('sand', '모래 위에서 노는 두 아이'), C('shovel', '삽으로 모래를 파는 모습'), C('bus', '버스를 기다리는 사람들')], ['sand', 'shovel'], 0.3, { extra: true }),
            ]),
          A('a2', '활동 2. 하루 일을 차례대로 놓아 글로 쓰기', 13, 'story',
            '"먼저 한 일부터 차례대로 놓아요. 아침, 낮, 저녁처럼 때를 나타내는 낱말도 살펴봐요." 문장 카드를 소리 내어 읽게 한다. 잠자는 문장을 맨 앞에 놓는 학생에게는 "하루가 시작할 때 무엇을 먼저 할까요?"라고 되묻는다.',
            '일기 문장을 하루 일이 일어난 차례대로 놓아요.', LV,
            [
              ORDER('하루 일이 일어난 차례대로 문장 카드를 놓아 보세요.', [C('m1', '나는 아침에 일어났어요.'), C('m2', '나는 학교에 갔어요.'), C('m3', '나는 집에 와서 숙제를 했어요.'), C('m4', '나는 밤에 잠을 잤어요.')], ['m1', 'm2', 'm3', 'm4'], 0.25),
              ORDER('소풍 날 일이 일어난 차례대로 문장 카드를 놓아 보세요.', [C('n1', '버스를 타고 공원에 갔어요.'), C('n2', '도시락을 먹었어요.'), C('n3', '술래잡기를 했어요.'), C('n4', '다시 버스를 타고 돌아왔어요.')], ['n1', 'n2', 'n3', 'n4'], 0.3),
              FILL('빈칸에 알맞은 낱말을 놓아 일기 글을 완성해 보세요.', [{ id: 'a', label: '나는 ___에서 줄넘기를 했어요.' }, { id: 'b', label: '나는 ___에서 책을 읽었어요.' }], [C('yard', '운동장'), C('lib', '도서관'), C('pool', '수영장'), C('market', '시장')], { a: 'yard', b: 'lib' }, 0.25),
              ORDER('더 해 보기: 빵 만들기 일이 일어난 차례대로 문장 카드를 놓아 보세요.', [C('b1', '밀가루를 반죽했어요.'), C('b2', '오븐에 구웠어요.'), C('b3', '빵을 먹었어요.')], ['b1', 'b2', 'b3'], 0.3, { extra: true }),
            ]),
        ],
        [
          CH('그림 칸에 도서관에서 책을 읽는 모습이 있어요. 알맞은 글은 어느 것일까요?', ['도서관에서 책을 읽었어요.', '수영장에서 헤엄을 쳤어요.', '시장에서 사과를 샀어요.'], 0, '그림에 있는 도서관과 책 읽는 모습이 글에도 나와야 해요.', 0.15),
          { type: 'tool', tool: 'story', options: { mode: 'order', slots: ['첫째', '둘째', '셋째'], cards: [C('p1', '나는 손을 씻었어요.'), C('p2', '나는 밥을 먹었어요.'), C('p3', '나는 이를 닦았어요.')] }, prompt: '일어난 차례대로 문장 카드를 놓아 보세요.', target: { order: ['p1', 'p2', 'p3'] }, difficulty: 0.25 },
          MOOD,
        ]),
      worksheet: {
        title: '그림과 글 짝 짓기',
        items: [
          { type: 'table', prompt: '그림 설명과 어울리는 글의 번호를 쓰세요. (1 연을 날렸어요. 2 책을 읽었어요. 3 밥을 먹었어요.)', columns: ['그림 설명', '글 번호'], cells: [['공원에서 연을 날리는 그림', ''], ['도서관에서 책을 읽는 그림', ''], ['식탁에서 밥을 먹는 그림', '']] },
          { type: 'choice', prompt: '그림 칸에 줄넘기를 하는 모습이 있어요. 글로 알맞은 것은 어느 것일까요?', options: ['줄넘기를 했어요.', '빵을 먹었어요.'], answer: '줄넘기를 했어요.' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: '나는 ______에서 책을 읽었어요.', answer: '도서관' },
          { type: 'draw', prompt: '어제 한 일 하나를 그림으로 그리고 한 문장 써 보세요.' },
        ],
        easy: { note: '그림에 있는 것을 글에서 찾아요.', items: [
          { type: 'choice', prompt: '밥을 먹는 그림에 어울리는 글에 ○ 하세요.', options: ['밥을 먹었어요.', '헤엄을 쳤어요.'], answer: '밥을 먹었어요.' },
          { type: 'blank', prompt: '글을 따라 쓰세요.', text: '밥을 먹었어요.', answer: '밥을 먹었어요.' },
          { type: 'choice', prompt: '아침에 먼저 하는 일에 ○ 하세요.', options: ['일어나요', '잠을 자요'], answer: '일어나요' },
          { type: 'draw', prompt: '오늘 아침에 한 일을 그려 보세요.' },
        ] },
      },
      differentiation: {
        easy: '이어 보기는 카드가 적고 맞게 이으면 초록 테두리가 생겨요. 차례 놓기는 문장이 셋이에요.',
        base: '카드를 모두 놓은 뒤 확인하고, 그림과 글이 같은지 스스로 따져요.',
        challenge: '더 해 보기(모래놀이 그림, 빵 만들기 차례)까지 풀어요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 그림과 글에서 서로 다른 낱말을 보고 어울린다고 한다 → 그림에서 눈에 띄는 것 하나를 짚고 글에서 같은 낱말을 찾게 한다. ② 하루 일을 차례대로 놓을 때 마지막에 한 일을 먼저 쓴다 → 아침·낮·밤 같은 때 낱말에 밑줄을 긋게 한다. ③ 빈칸에 장소 대신 하는 일을 넣는다 → 어디에서 했는지 묻는 낱말을 넣는다고 안내한다. 인물과 장면은 모두 새로 지은 것이다.',
    }),

    // ───────────────────────── 3. 매체 이용 윤리: 허락과 개인정보 ─────────────────────────
    L(3, {
      title: '친구 그림과 이름을 일기에 쓸 때 지킬 일 알기',
      objective: '친구의 그림이나 이름, 사진을 쓸 때 먼저 물어보고, 집 주소 같은 정보는 쓰지 않아야 한다는 것을 알고 행동을 고를 수 있다.',
      standards: MEDIA,
      illustration: ART('two paper children looking at a drawing together while one asks politely if it can be used in a diary', '써도 될까?'),
      stages: ST(
        { teacher: '"친구가 그린 그림이 정말 멋져서 내 일기에 넣고 싶어요. 어떻게 하면 좋을까요?" 몇 명의 대답을 들은 뒤 "먼저 친구에게 물어보고 허락을 받아야 해요."라고 말한다. 일기에 쓰지 않는 정보도 함께 알아본다.', student: '친구 그림이나 이름을 일기에 쓸 때 지켜야 할 일을 알아봐요.', demo: { tool: 'mindmap', options: { topic: '일기에 쓸 때', shuffle: false, slots: [{ id: 'good', label: '지켜야 해요' }, { id: 'bad', label: '하지 않아요' }], cards: [{ id: 'ask', text: '친구에게 먼저 물어봐요' }, { id: 'addr', text: '친구 집 주소를 써요' }] }, sequence: [{ sort: { good: ['ask'], bad: ['addr'] } }] } },
        '"오늘 알게 된 약속 가운데 가장 중요하다고 생각하는 것은 무엇인가요?" 두세 명이 말하고 짝에게 한 문장으로 다시 말한다. 출구 1번에서 \'몰래 가져가요\'를 고른 학생에게는 그림을 그린 친구의 마음을 떠올리게 한다.',
        [
          A('a1', '활동 1. 일기에 쓸 때 지킬 일과 하지 않을 일 가르기', 13, 'mindmap',
            '"카드를 읽고 지켜야 하는 일과 하지 않는 일로 나누어 봐요." 카드 하나마다 그렇게 하면 친구 마음이 어떨지 말하게 한다. \'이름은 한두 글자만 써요\'를 하지 않는 일로 넣는 학생에게는 "이름 전체를 쓰는 것과 한 글자만 쓰는 것 중 어느 쪽이 더 안전할까요?"라고 되묻는다.',
            '일기에 쓸 때 지킬 일과 하지 않을 일로 카드를 나누어요.', LV,
            [
              SORT('카드를 지켜야 하는 일과 하지 않는 일로 나누어 보세요.', '일기에 쓸 때', [{ id: 'good', label: '지켜야 해요' }, { id: 'bad', label: '하지 않아요' }], [C('ask', '친구에게 먼저 물어봐요'), C('copy', '친구 그림을 몰래 가져다 내 것이라고 해요'), C('addr', '친구 집 주소를 일기에 써요'), C('nick', '친구 이름은 한 글자만 써요'), C('thanks', '그림을 쓰면 고맙다고 말해요'), C('photo', '친구 얼굴 사진을 허락 없이 보여 줘요')], { good: ['ask', 'nick', 'thanks'], bad: ['copy', 'addr', 'photo'] }, 0.2,
                { levels: { easy: { prompt: '카드 넷을 지켜야 하는 일과 하지 않는 일로 나누어 보세요.', toolOptions: { cards: [C('ask', '친구에게 먼저 물어봐요'), C('copy', '친구 그림을 몰래 가져다 내 것이라고 해요'), C('thanks', '그림을 쓰면 고맙다고 말해요'), C('addr', '친구 집 주소를 일기에 써요')] }, target: { sort: { good: ['ask', 'thanks'], bad: ['copy', 'addr'] } } } } }),
              MATCH('상황과 알맞은 행동을 이어 보세요.', '알맞은 행동', [{ id: 's1', label: '친구 그림을 일기장에 넣고 싶어요' }, { id: 's2', label: '친구 사진을 다른 반에 보여 주고 싶어요' }], [C('ask', '친구에게 먼저 물어봐요'), C('ok', '친구가 괜찮다고 해야 보여 줘요'), C('show', '그냥 보여 줘요')], { s1: 'ask', s2: 'ok' }, 0.25),
              PICK('일기에 쓰면 안 되는 것을 모두 골라 보세요.', '쓰지 않아요', [C('addr', '친구 집 주소'), C('phone', '친구 전화번호'), C('snack', '오늘 먹은 간식')], ['addr', 'phone'], 0.25,
                { conclude: '주소와 전화번호처럼 누구인지 알아낼 수 있는 정보는 일기에 쓰지 않아요.' }),
              PICK('더 해 보기: 친구에게 허락을 받을 때 하는 말을 모두 골라 보세요.', '허락받는 말', [C('a1', '"이 그림을 일기에 넣어도 될까?"'), C('a2', '"내가 가져간다!"'), C('a3', '"사진을 같이 봐도 될까?"')], ['a1', 'a3'], 0.3, { extra: true }),
            ]),
          A('a2', '활동 2. 이야기 속 인물이 어떻게 하면 좋을까', 13, 'emotion',
            '"이야기 속 친구는 어떻게 하면 좋을까요? 고른 뒤에 결과를 읽고 그 친구의 마음을 생각해요." 선택과 결과를 짝에게 말하게 한다. 허락 없이 가져간 결과를 읽고도 "괜찮아요"라고 하는 학생에게는 "그림을 그린 친구는 어떤 마음이었을까요?"라고 묻는다.',
            '이야기 속 인물이 어떻게 하면 좋을지 고르고 결과를 읽어요.', LV,
            [
              BR('민지가 준호의 그림이 마음에 들어서 일기에 넣고 싶어요. 어떻게 하면 좋을까요?', '민지', '민지가 준호가 그린 멋진 로봇 그림을 일기에 넣고 싶어요.', [{ id: 'ask', text: '"이 그림을 내 일기에 넣어도 될까?" 하고 물어요', result: '준호가 웃으며 허락해 줘요', mood: '고마움' }, { id: 'take', text: '준호 몰래 그림을 가져가요', result: '준호가 그림이 없어진 것을 보고 속상해해요', mood: '속상함', why: '말없이 그림을 가져가면 그린 친구의 마음은 어떨까요?' }, { id: 'draw', text: '그림이 마음에 든다고만 말하고 가져가지 않아요', result: '준호는 칭찬을 듣고 기뻐해요', mood: '편안함' }], 'ask', 0.15),
              BR('서아가 일기에 친구 이야기를 쓰려고 해요. 어떻게 쓰면 좋을까요?', '서아', '서아가 친구와 놀이터에서 논 일을 일기에 쓰려고 해요.', [{ id: 'one', text: '친구 이름을 한 글자만 쓰고 집 주소는 쓰지 않아요', result: '일기를 읽는 사람이 친구의 정보를 알 수 없어서 안전해요', mood: '편안함' }, { id: 'full', text: '친구 이름과 집 주소를 모두 써요', result: '일기를 본 다른 사람이 친구 집을 알게 돼요', mood: '걱정', why: '집 주소를 아는 사람이 많아지면 친구는 안전할까요?' }], 'one', 0.2),
              BR('준호가 친구에게서 비밀을 들었어요. 일기에 어떻게 하면 좋을까요?', '준호', '친구가 "이건 일기에 쓰지 말아 줘." 하고 부탁했어요.', [{ id: 'keep', text: '약속을 지켜서 일기에 쓰지 않아요', result: '친구가 고마워하며 더 믿어 줘요', mood: '고마움' }, { id: 'write', text: '재미있으니까 일기에 써서 반 친구들에게 보여 줘요', result: '친구가 속상해서 말을 하지 않아요', mood: '속상함', why: '부탁을 어기면 친구의 마음은 어떨까요?' }], 'keep', 0.25),
            ]),
        ],
        [
          CH('친구의 그림을 내 일기에 넣고 싶을 때 가장 먼저 할 일은 무엇일까요?', ['친구에게 물어봐요', '몰래 가져가요', '내가 그린 것이라고 말해요'], 0, '친구가 그린 그림은 친구의 것이므로 먼저 물어보고 허락을 받아야 해요.', 0.1),
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '일기에 쓰지 않아요', basket: '쓰지 않는 것', cards: [C('addr', '집 주소'), C('toy', '좋아하는 장난감'), C('phone', '전화번호')] }, prompt: '일기에 쓰지 않는 것을 모두 골라 보세요.', target: { pick: ['addr', 'phone'] }, difficulty: 0.2 },
          MOOD,
        ]),
      worksheet: {
        title: '허락과 정보',
        items: [
          { type: 'check', prompt: '일기에 쓰면 안 되는 것에 모두 ✓ 하세요.', options: ['친구 집 주소', '오늘 먹은 간식', '친구 전화번호'], answer: '친구 집 주소, 친구 전화번호' },
          { type: 'choice', prompt: '친구 그림을 일기에 넣고 싶을 때 알맞은 말은 어느 것일까요?', options: ['"넣어도 될까?"', '"내가 가져간다!"'], answer: '"넣어도 될까?"' },
          { type: 'blank', prompt: '빈칸에 알맞은 낱말을 쓰세요.', text: '친구 그림을 쓰려면 먼저 ______을 받아요.', answer: '허락' },
          { type: 'short', prompt: '친구의 그림을 쓰고 싶을 때 친구에게 할 말을 한 문장으로 써 보세요.' },
        ],
        easy: { note: '먼저 물어보는 것이 약속이에요.', items: [
          { type: 'choice', prompt: '먼저 물어보는 것에 ○ 하세요.', options: ['그림을 써도 되는지', '간식이 무엇인지'], answer: '그림을 써도 되는지' },
          { type: 'blank', prompt: '낱말을 따라 쓰세요.', text: '허락', answer: '허락' },
          { type: 'choice', prompt: '일기에 쓰지 않는 것에 ○ 하세요.', options: ['집 주소', '날씨'], answer: '집 주소' },
          { type: 'draw', prompt: '친구에게 물어보는 내 모습을 그려 보세요.' },
        ] },
      },
      differentiation: {
        easy: '가르기는 카드가 넷이고 맞게 놓으면 초록 테두리가 생겨요. 행동 고르기는 선택이 둘이에요.',
        base: '카드를 모두 놓은 뒤 확인하고, 이야기 결과를 읽고 다시 생각해요.',
        challenge: '더 해 보기(허락받는 말 고르기)까지 풀고 친구에게 직접 물어보는 말을 지어요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 친구 그림을 칭찬하면서도 허락 없이 가져가는 것을 괜찮다고 생각한다 → 그림을 그린 친구에게 시간과 마음이 들어 있다는 것을 말해 준다. ② 이름·주소를 그대로 써도 된다고 생각한다 → 일기를 읽는 사람이 모두 아는 사람이 아니라는 것을 말한다. ③ 비밀 이야기를 재미있다고 일기에 쓴다 → 친구가 부탁한 것은 지킨다고 말한다. 인물 이름은 모두 가명이며 학생의 개인정보는 쓰지 않는다.',
    }),

    // ───────────────────────── 4. 발표: 누구에게 왜 말할까 ─────────────────────────
    L(4, {
      title: '그림일기를 누구에게 왜 발표하는지 정하고 차례 짜기',
      objective: '그림일기를 발표하는 까닭과 듣는 사람을 생각하고, 인사·날짜·있었던 일·마무리의 차례로 발표를 짤 수 있다.',
      standards: SPEAK,
      illustration: ART('a paper child holding a picture diary and speaking to a small group of seated classmates', '내 그림일기를 소개해요'),
      stages: ST(
        { teacher: '"내가 쓴 그림일기를 친구들에게 이야기해 주려고 해요. 누구에게 들려줄 거예요? 왜 들려줄 거예요?" 학생들의 대답을 칠판에 적는다. "듣는 사람과 까닭에 따라 말하는 방법이 달라져요." 동생과 반 친구들에게 말하는 방법을 한 문장씩 시범한다.', student: '그림일기를 누구에게 왜 들려줄지 정하고 발표 차례를 짜 봐요.', demo: { tool: 'mindmap', options: { mode: 'order', topic: '발표 차례', shuffle: false, slots: ['첫째', '둘째', '셋째'], cards: [{ id: 'hi', text: '인사해요' }, { id: 'say', text: '있었던 일을 말해요' }, { id: 'bye', text: '마무리 인사를 해요' }] }, sequence: [{ order: ['hi', 'say', 'bye'] }] } },
        '"내 그림일기를 누구에게 들려주고 싶은가요? 왜 그런가요?" 두세 명이 \'~에게 ~하려고 들려주고 싶어요.\' 모양으로 말한다. 출구 1번에서 발표 까닭으로 상을 받으려는 것을 고른 학생에게는 일기를 들려주는 진짜 까닭을 다시 떠올리게 한다.',
        [
          A('a1', '활동 1. 듣는 사람과 말하는 까닭 정하기', 13, 'mindmap',
            '"일기를 누구에게 들려줄까요? 그 사람에게는 어떻게 말하면 좋을까요?" 짝에게 먼저 한 문장으로 말해 보게 한다. 동생에게도 어려운 낱말로 말하는 학생에게는 "동생이 이 낱말을 알까요?"라고 되묻는다.',
            '듣는 사람과 까닭, 알맞은 말하기를 골라요.', LV,
            [
              MATCH('발표 상황과 발표하는 까닭을 이어 보세요.', '발표하는 까닭', [{ id: 'mate', label: '짝에게 일기를 읽어 줘요' }, { id: 'young', label: '동생에게 일기를 읽어 줘요' }, { id: 'class', label: '반 친구들에게 일기를 소개해요' }], [C('know', '내가 한 일을 알려 주려고'), C('fun', '재미있게 들려주려고'), C('share', '내 하루를 함께 나누려고'), C('prize', '상을 받으려고')], { mate: 'know', young: 'fun', class: 'share' }, 0.2),
              SORT('말하기 카드를 동생에게 말할 때와 반 친구들에게 말할 때로 나누어 보세요.', '듣는 사람과 말하기', [{ id: 'young', label: '동생에게' }, { id: 'class', label: '반 친구들에게' }], [C('easy', '쉬운 낱말로 천천히 말해요'), C('loud', '뒤에 앉은 친구도 들리게 크게 말해요'), C('short', '짧게 한 가지만 말해요'), C('hello', '인사말로 시작해요')], { young: ['easy', 'short'], class: ['loud', 'hello'] }, 0.25),
              PICK('발표하기 전에 먼저 생각할 것을 모두 골라 보세요.', '먼저 생각해요', [C('who', '누구에게 말할까?'), C('what', '무엇을 말할까?'), C('snack', '간식은 무엇일까?')], ['who', 'what'], 0.2,
                { conclude: '누구에게 무엇을 말할지 먼저 정하면 발표가 쉬워져요.' }),
              PICK('더 해 보기: 일기를 들려줄 때 듣는 사람을 바라보는 까닭으로 알맞은 것을 모두 골라 보세요.', '바라보는 까닭', [C('know', '잘 듣고 있는지 알 수 있어요'), C('feel', '내 마음이 전해져요'), C('sleep', '눈을 감고 졸 수 있어요')], ['know', 'feel'], 0.3, { extra: true }),
            ]),
          A('a2', '활동 2. 발표 차례 짜기', 13, 'mindmap',
            '"발표는 차례가 있어요. 처음에는 인사, 가운데는 일기 내용, 끝에는 마무리 인사예요." 소리 내어 읽으며 차례를 확인하게 한다. 마무리 인사를 맨 앞에 놓는 학생에게는 "끝을 알리는 말이 처음에 와도 될까요?"라고 되묻는다.',
            '발표할 말 카드를 알맞은 차례대로 놓아요.', LV,
            [
              ORDER('일기 발표의 차례대로 카드를 놓아 보세요.', [C('hi', '인사해요'), C('date', '날짜와 날씨를 말해요'), C('say', '있었던 일을 말해요'), C('bye', '마무리 인사를 해요')], ['hi', 'date', 'say', 'bye'], 0.2),
              ORDER('있었던 일을 말하는 차례대로 카드를 놓아 보세요.', [C('f', '먼저 놀이터에 갔어요.'), C('s', '그다음 그네를 탔어요.'), C('t', '마지막으로 집에 왔어요.')], ['f', 's', 't'], 0.25),
              PICK('발표를 시작할 때 하면 좋은 말을 모두 골라 보세요.', '시작하는 말', [C('h1', '"안녕하세요. 제 일기를 소개할게요."'), C('h2', '"오늘은 10월 3일 토요일이에요."'), C('h3', '"끝났어요. 자리에 앉을게요."')], ['h1', 'h2'], 0.25),
              PICK('더 해 보기: 발표를 마칠 때 하면 좋은 말을 모두 골라 보세요.', '마무리하는 말', [C('e1', '"들어 주셔서 고맙습니다."'), C('e2', '"질문 있으면 물어보세요."'), C('e3', '"빨리 끝내고 싶어요."')], ['e1', 'e2'], 0.3, { extra: true }),
            ]),
        ],
        [
          CH('일기를 동생에게 들려줄 때 알맞은 말하기는 어느 것일까요?', ['쉬운 낱말로 천천히', '아주 빠르게', '어려운 낱말로'], 0, '동생이 알아들을 수 있는 쉬운 낱말로 천천히 말해야 해요.', 0.1),
          { type: 'tool', tool: 'mindmap', options: { mode: 'order', slots: ['첫째', '둘째', '셋째'], cards: [C('c', '인사해요'), C('d', '일기 내용을 말해요'), C('e', '고맙다고 말해요')] }, prompt: '발표의 차례대로 카드를 놓아 보세요.', target: { order: ['c', 'd', 'e'] }, difficulty: 0.2 },
          MOOD,
        ]),
      worksheet: {
        title: '발표 차례와 까닭',
        items: [
          { type: 'table', prompt: '발표의 차례를 번호로 쓰세요. (1 처음, 2 가운데, 3 끝)', columns: ['할 일', '번호'], cells: [['인사해요', ''], ['있었던 일을 말해요', ''], ['고맙다고 말해요', '']] },
          { type: 'choice', prompt: '입학한 동생에게 일기를 들려줄 때 알맞은 말하기는 어느 것일까요?', options: ['쉬운 낱말로 천천히', '아주 빠르게'], answer: '쉬운 낱말로 천천히' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '발표가 끝나면 \"들어 ______ 고맙습니다.\"라고 말해요.', answer: '주셔서' },
          { type: 'short', prompt: '내 일기를 누구에게 들려주고 싶은지, 왜 그런지 한 문장으로 써 보세요.' },
        ],
        easy: { note: '처음, 가운데, 끝의 차례를 떠올려요.', items: [
          { type: 'choice', prompt: '발표를 시작할 때 하는 말에 ○ 하세요.', options: ['안녕하세요.', '끝났어요.'], answer: '안녕하세요.' },
          { type: 'blank', prompt: '인사를 따라 쓰세요.', text: '안녕하세요.', answer: '안녕하세요.' },
          { type: 'choice', prompt: '발표를 마칠 때 하는 말에 ○ 하세요.', options: ['고맙습니다.', '안녕하세요.'], answer: '고맙습니다.' },
          { type: 'draw', prompt: '일기를 들려주는 내 모습을 그려 보세요.' },
        ] },
      },
      differentiation: {
        easy: '이어 보기는 카드가 적고, 차례 놓기는 카드가 셋이에요. 맞게 놓으면 초록 테두리가 생겨요.',
        base: '카드를 모두 놓은 뒤 확인하고, 듣는 사람에 따라 말하기를 스스로 골라요.',
        challenge: '더 해 보기(마무리 말 고르기)까지 풀고 발표 순서를 소리 내어 연습해요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 누구에게 말하는지 생각하지 않고 같은 말투로 말한다 → 동생과 반 친구들에게 말하는 시범을 보여 준다. ② 발표 차례를 모르고 하고 싶은 말부터 한다 → 인사, 날짜, 일기 내용, 마무리의 차례를 칠판에 붙여 둔다. ③ 마무리 인사를 부끄러워한다 → 짝에게 먼저 연습하게 한다. 이 차시에서는 발표 내용이 아니라 차례와 까닭을 다룬다.',
    }),

    // ───────────────────────── 5. 말하기 수행과 상호작용 ─────────────────────────
    L(5, {
      title: '발표를 듣고 질문과 대답 주고받기',
      objective: '친구의 발표를 듣고 알맞은 질문을 하고, 질문에 대답하며 고마움을 표현할 수 있다.',
      standards: SPEAK,
      illustration: ART('two paper children facing each other, one asking a question and the other answering with speech bubbles', '어디에 갔어?'),
      stages: ST(
        { teacher: '"친구의 발표를 듣고 궁금한 것이 생기면 질문을 해요. 어떤 질문이 좋은 질문일까요?" 교사가 "그때 기분이 어땠어?"와 "너는 왜 그것밖에 못 해?"를 각각 읽어 주고 듣는 친구의 마음을 말해 본다. "궁금한 마음을 담아 친절하게 물어요."', student: '발표를 듣고 질문하고 대답하는 방법을 알아봐요.', demo: { tool: 'mindmap', options: { mode: 'match', topic: '질문과 대답', shuffle: false, slots: [{ id: 'q', label: '"어디에서 놀았어?"' }], cards: [{ id: 'a', text: '"놀이터에서 놀았어."' }, { id: 'b', text: '"고마워."' }] }, sequence: [{ match: { q: 'a' } }] } },
        '"오늘 내가 한 질문이나 받은 질문 가운데 가장 좋았던 것은 무엇인가요?" 두세 명이 말한다. 출구 1번에서 \'일기 정말 못 쓴다\'를 고른 학생에게는 그 말을 듣는 친구의 마음을 다시 생각하게 한다.',
        [
          A('a1', '활동 1. 좋은 질문과 알맞은 대답 찾기', 13, 'mindmap',
            '"질문은 궁금해서 하는 말이에요. 듣는 친구의 마음도 생각해요." 질문 카드를 두 사람이 번갈아 읽게 한다. \'너 일기 정말 못 쓴다\'를 좋은 질문에 넣는 학생에게는 "이 말이 궁금해서 묻는 말일까요, 놀리는 말일까요?"라고 되묻는다.',
            '질문과 대답을 이어 보고 좋은 질문을 골라요.', LV,
            [
              MATCH('질문과 알맞은 대답을 이어 보세요.', '질문과 대답', [{ id: 'q1', label: '"어디에서 놀았어?"' }, { id: 'q2', label: '"누구와 갔어?"' }, { id: 'q3', label: '"무엇을 했어?"' }], [C('a1', '"놀이터에서 놀았어."'), C('a2', '"동생과 갔어."'), C('a3', '"그네를 탔어."'), C('a4', '"고마워."')], { q1: 'a1', q2: 'a2', q3: 'a3' }, 0.2),
              SORT('질문 카드를 좋은 질문과 좋지 않은 질문으로 나누어 보세요.', '질문 가르기', [{ id: 'good', label: '좋은 질문' }, { id: 'bad', label: '좋지 않은 질문' }], [C('g1', '무엇이 가장 재미있었어?'), C('g2', '그때 기분이 어땠어?'), C('b1', '너 일기 정말 못 쓴다.'), C('b2', '왜 그것밖에 못 해?')], { good: ['g1', 'g2'], bad: ['b1', 'b2'] }, 0.25),
              PICK('질문을 한 뒤에 하면 좋은 일을 모두 골라 보세요.', '질문한 뒤에', [C('listen', '대답을 끝까지 들어요'), C('thanks', '"알려 줘서 고마워." 하고 말해요'), C('away', '다른 곳을 보고 딴짓을 해요')], ['listen', 'thanks'], 0.25,
                { conclude: '질문한 뒤에는 대답을 끝까지 듣고 고마움을 말해요.' }),
              PICK('더 해 보기: 질문에 대답할 때 알맞은 태도를 모두 골라 보세요.', '대답할 때', [C('kind', '질문한 친구를 바라보며 말해요'), C('slow', '또박또박 천천히 말해요'), C('ignore', '못 들은 척해요')], ['kind', 'slow'], 0.3, { extra: true }),
            ]),
          A('a2', '활동 2. 질문과 대답의 차례 놓기', 13, 'story',
            '"질문하는 친구와 대답하는 친구가 번갈아 말해요. 말하는 차례를 놓아 봐요." 두 학생이 역할을 나누어 카드를 읽게 한다. 대답을 질문보다 먼저 놓는 학생에게는 "질문이 있어야 대답을 할 수 있어요. 어느 것이 먼저일까요?"라고 되묻는다.',
            '질문과 대답 카드를 말하는 차례대로 놓아요.', LV,
            [
              ORDER('질문과 대답을 말하는 차례대로 카드를 놓아 보세요.', [C('q1', '"어디에 갔어?"'), C('a1', '"공원에 갔어."'), C('q2', '"무엇을 했어?"'), C('a2', '"연을 날렸어."')], ['q1', 'a1', 'q2', 'a2'], 0.25),
              ORDER('발표를 듣고 이야기하는 차례대로 카드를 놓아 보세요.', [C('t1', '"잘 들었어."'), C('t2', '"어떤 점이 재미있었어?"'), C('t3', '"그네를 높이 탄 것이야."')], ['t1', 't2', 't3'], 0.25),
              ORDER('이야기가 끝날 때 하는 말의 차례대로 카드를 놓아 보세요.', [C('e1', '"이야기해 줘서 고마워."'), C('e2', '"나도 고마워."'), C('e3', '"다음에 또 이야기하자."')], ['e1', 'e2', 'e3'], 0.3),
              { prompt: '더 해 보기: 발표를 듣고 하면 좋은 말을 모두 골라 보세요.', toolOptions: { mode: 'pick', topic: '듣고 하는 말', basket: '하면 좋은 말', cards: [C('good', '"재미있게 들었어."'), C('ask', '"조금 더 알려 줄래?"'), C('bad', '"별로야."')] }, target: { pick: ['good', 'ask'] }, difficulty: 0.3, extra: true },
            ]),
        ],
        [
          CH('친구의 발표를 듣고 질문할 때 알맞은 말은 어느 것일까요?', ['그때 기분이 어땠어?', '너는 정말 못해.', '그만 말해.'], 0, '궁금한 마음을 담아 친절하게 물어보는 말이 좋은 질문이에요.', 0.1),
          { type: 'tool', tool: 'story', options: { mode: 'order', slots: ['첫째', '둘째'], cards: [C('q', '"무엇을 먹었어?"'), C('a', '"빵을 먹었어."')] }, prompt: '질문과 대답을 말하는 차례대로 놓아 보세요.', target: { order: ['q', 'a'] }, difficulty: 0.2 },
          MOOD,
        ]),
      worksheet: {
        title: '질문과 대답',
        items: [
          { type: 'table', prompt: '질문과 알맞은 대답을 이어서 쓰세요. (가 동생과 갔어. 나 공원에서 놀았어. 다 연을 날렸어.)', columns: ['질문', '대답 기호'], cells: [['"누구와 갔어?"', ''], ['"어디에서 놀았어?"', ''], ['"무엇을 했어?"', '']] },
          { type: 'choice', prompt: '좋은 질문은 어느 것일까요?', options: ['"무엇이 제일 재미있었어?"', '"너 일기 못 쓴다."'], answer: '"무엇이 제일 재미있었어?"' },
          { type: 'blank', prompt: '질문한 뒤에 하는 말을 쓰세요.', text: '"알려 줘서 ______."', answer: '고마워' },
          { type: 'short', prompt: '친구의 발표를 듣고 하고 싶은 질문을 한 문장으로 써 보세요.' },
        ],
        easy: { note: '궁금한 마음을 친절하게 말해요.', items: [
          { type: 'choice', prompt: '질문에 알맞은 대답에 ○ 하세요. ("어디에 갔어?")', options: ['"공원에 갔어."', '"빵을 먹었어."'], answer: '"공원에 갔어."' },
          { type: 'blank', prompt: '말을 따라 쓰세요.', text: '고마워.', answer: '고마워.' },
          { type: 'choice', prompt: '좋은 질문에 ○ 하세요.', options: ['"어디에 갔어?"', '"못 쓴다."'], answer: '"어디에 갔어?"' },
          { type: 'draw', prompt: '친구와 이야기하는 모습을 그려 보세요.' },
        ] },
      },
      differentiation: {
        easy: '이어 보기는 카드가 적고, 차례 놓기는 카드가 둘에서 셋이에요. 맞게 놓으면 초록 테두리가 생겨요.',
        base: '카드를 모두 놓은 뒤 확인하고, 질문과 대답을 소리 내어 읽어 보며 알맞은지 스스로 따져요.',
        challenge: '더 해 보기(대답할 때의 태도, 듣고 하는 말)까지 풀고 짝과 직접 질문과 대답을 주고받아요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 질문을 평가하는 말로 한다 → 궁금한 점을 묻는 말과 놀리는 말을 구별해 보게 한다. ② 대답을 하지 않고 웃기만 한다 → 짧은 대답이라도 말하게 한다. ③ 질문과 대답의 차례를 놓친다 → 두 학생이 번갈아 카드를 읽게 한다. 대화 글은 모두 이 단원을 위해 새로 지었다.',
    }),

    // ───────────────────────── 6. 듣기 단서와 정보 조직 ─────────────────────────
    L(6, {
      title: '친구 발표를 듣고 언제·어디서·누구와·무엇을 정리하기',
      objective: '친구가 발표하는 그림일기를 듣고 언제, 어디서, 누구와, 무엇을 했는지 들은 낱말로 정리할 수 있다.',
      standards: SPEAK,
      illustration: ART('a paper child with a hand behind an ear listening while a classmate shows a picture diary', '잘 들어요'),
      stages: ST(
        { teacher: '"친구가 \'토요일에 공원에서 아빠와 연을 날렸어요.\' 하고 발표했어요. 언제, 어디서, 누구와, 무엇을 했는지 찾아볼까요?" 문장을 천천히 두 번 읽어 주고 낱말마다 손가락으로 짚는다. 시연 단추로 낱말이 네 칸에 나뉘는 모습을 보여 준다.', student: '친구의 발표를 듣고 언제, 어디서, 누구와, 무엇을 했는지 찾아 정리해 봐요.', demo: { tool: 'mindmap', options: { mode: 'match', topic: '들은 내용 정리', shuffle: false, slots: [{ id: 'when', label: '언제' }, { id: 'where', label: '어디서' }], cards: [{ id: 'sat', text: '토요일에' }, { id: 'park', text: '공원에서' }] }, sequence: [{ match: { when: 'sat', where: 'park' } }] } },
        '"오늘 친구 발표에서 가장 잘 들은 낱말은 무엇이었나요?" 두세 명이 말하고 듣는 방법도 한 가지씩 말한다. 출구 1번에서 \'학교에서\'를 누구와로 고른 학생에게는 낱말이 사람인지 장소인지 구별하게 한다.',
        [
          A('a1', '활동 1. 들은 낱말로 내용 정리하기', 13, 'mindmap',
            '"친구의 말을 끝까지 들으며 낱말을 머릿속에 담아요." 발표 문장을 읽어 주고 한 낱말씩 짚으며 어디에 해당하는지 고르게 한다. 장소와 사람을 바꿔 이은 학생에게는 "공원은 사람일까요, 장소일까요?"라고 묻는다.',
            '발표를 듣고 들은 낱말을 알맞은 칸에 이어요.', LV,
            [
              MATCH('서아가 "토요일에 공원에서 아빠와 연을 날렸어요."라고 발표했어요. 들은 낱말을 이어 보세요.', '들은 내용', [{ id: 'when', label: '언제' }, { id: 'where', label: '어디서' }, { id: 'who', label: '누구와' }, { id: 'what', label: '무엇을 했나요' }], [C('sat', '토요일에'), C('park', '공원에서'), C('dad', '아빠와'), C('kite', '연을 날렸어요')], { when: 'sat', where: 'park', who: 'dad', what: 'kite' }, 0.2),
              SORT('같은 발표를 듣고 나서 들은 내용과 듣지 못한 내용으로 나누어 보세요.', '들은 내용', [{ id: 'yes', label: '들은 내용이에요' }, { id: 'no', label: '듣지 못한 내용이에요' }], [C('kite', '서아는 연을 날렸어요.'), C('dad', '서아는 아빠와 갔어요.'), C('sea', '서아는 바다에 갔어요.'), C('mon', '서아는 월요일에 갔어요.')], { yes: ['kite', 'dad'], no: ['sea', 'mon'] }, 0.25),
              PICK('"어제 시장에서 엄마와 사과를 샀어요." 발표에서 누구와 갔는지 알려 주는 말을 골라 보세요.', '누구와', [C('yes', '어제'), C('mar', '시장에서'), C('mom', '엄마와'), C('apple', '사과를')], ['mom'], 0.25,
                { conclude: '누구와 했는지 알려 주는 낱말은 사람 낱말에 \'와\'나 \'과\'가 붙은 말이에요.' }),
              PICK('더 해 보기: "오늘 놀이터에서 친구와 그네를 탔어요." 발표에서 무엇을 했는지 알려 주는 말을 골라 보세요.', '무엇을 했나요', [C('play', '놀이터에서'), C('friend', '친구와'), C('swing', '그네를 탔어요')], ['swing'], 0.3, { extra: true }),
            ]),
          A('a2', '활동 2. 들은 내용으로 문장 완성하고 차례 놓기', 13, 'story',
            '"들은 낱말을 칸에 맞게 놓으면 발표 내용을 정리할 수 있어요." 칸 이름을 먼저 읽고 낱말을 고르게 한다. 장소 칸에 \'일요일에\'를 놓는 학생에게는 "일요일은 때일까요, 곳일까요?"라고 묻는다.',
            '들은 낱말을 칸에 놓고 일이 일어난 차례도 놓아요.', LV,
            [
              FILL('"저는 일요일에 할머니 댁에서 만두를 빚었어요." 들은 낱말을 알맞은 칸에 놓아 보세요.', [{ id: 'a', label: '언제: ___' }, { id: 'b', label: '어디서: ___' }, { id: 'c', label: '무엇을: ___' }], [C('sun', '일요일에'), C('home', '할머니 댁에서'), C('dump', '만두를 빚었어요'), C('mon', '월요일에')], { a: 'sun', b: 'home', c: 'dump' }, 0.2),
              FILL('"어제 도서관에서 동생과 책을 읽었어요." 들은 낱말을 알맞은 칸에 놓아 보세요.', [{ id: 'a', label: '어디서: ___' }, { id: 'b', label: '누구와: ___' }], [C('lib', '도서관에서'), C('bro', '동생과'), C('mar', '시장에서'), C('fri', '친구와')], { a: 'lib', b: 'bro' }, 0.25),
              ORDER('"먼저 손을 씻었어요. 그다음 밥을 먹었어요. 마지막으로 이를 닦았어요." 들은 차례대로 카드를 놓아 보세요.', [C('w', '손을 씻었어요'), C('e', '밥을 먹었어요'), C('b', '이를 닦았어요')], ['w', 'e', 'b'], 0.2),
              { prompt: '더 해 보기: "저는 아침에 학교에서 친구와 공부했어요." 누구와 했는지 알려 주는 말을 모두 골라 보세요.', toolOptions: { mode: 'pick', topic: '누구와', basket: '사람을 나타내는 말', cards: [C('mor', '아침에'), C('sch', '학교에서'), C('fri', '친구와'), C('stu', '공부했어요')] }, target: { pick: ['fri'] }, difficulty: 0.3, extra: true },
            ]),
        ],
        [
          CH('"오늘 학교에서 친구와 공을 찼어요." 누구와 했는지 알려 주는 말은 어느 것일까요?', ['친구와', '학교에서', '공을'], 0, '함께한 사람은 친구예요. 친구와가 누구와에 해당해요.', 0.15),
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '들은 내용', slots: [{ id: 'where', label: '어디서' }, { id: 'who', label: '누구와' }], cards: [C('house', '집에서'), C('sis', '언니와'), C('book', '그림을')] }, prompt: '"어제 집에서 언니와 그림을 그렸어요." 들은 낱말을 알맞은 칸에 이어 보세요.', target: { match: { where: 'house', who: 'sis' } }, difficulty: 0.25 },
          MOOD,
        ]),
      worksheet: {
        title: '들은 내용 정리',
        items: [
          { type: 'table', prompt: '"토요일에 공원에서 아빠와 연을 날렸어요."를 듣고 빈칸을 채우세요.', columns: ['칸', '들은 낱말'], cells: [['언제', ''], ['어디서', ''], ['누구와', ''], ['무엇을', '']] },
          { type: 'choice', prompt: '"어제 시장에서 엄마와 사과를 샀어요." 어디서에 해당하는 말은 어느 것일까요?', options: ['시장에서', '엄마와', '사과를'], answer: '시장에서' },
          { type: 'blank', prompt: '들은 말에서 빈칸을 채우세요.', text: '"일요일에 ______에서 만두를 빚었어요."  (할머니 댁)', answer: '할머니 댁' },
          { type: 'short', prompt: '친구 발표에서 들은 것 하나를 \'언제 어디서 무엇을 했어요\' 모양으로 써 보세요.' },
        ],
        easy: { note: '때, 곳, 사람, 한 일을 찾아요.', items: [
          { type: 'choice', prompt: '"공원에서 연을 날렸어요." 어디서에 ○ 하세요.', options: ['공원에서', '연을'], answer: '공원에서' },
          { type: 'blank', prompt: '낱말을 따라 쓰세요.', text: '언제  어디서', answer: '언제 어디서' },
          { type: 'choice', prompt: '"동생과 놀았어요." 누구와에 ○ 하세요.', options: ['동생과', '놀았어요'], answer: '동생과' },
          { type: 'draw', prompt: '친구가 말한 장소를 그려 보세요.' },
        ] },
      },
      differentiation: {
        easy: '이어 보기는 낱말이 둘이고 맞게 이으면 초록 테두리가 생겨요. 칸 채우기는 칸이 둘이에요.',
        base: '발표 문장을 듣고 낱말을 스스로 이은 뒤 확인해요.',
        challenge: '더 해 보기(무엇을 했나요, 누구와)까지 풀고 친구 발표를 직접 정리해요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 때와 곳을 헷갈린다(일요일에↔할머니 댁에서) → 달력에 있는 것은 때, 갈 수 있는 곳은 장소라고 말해 준다. ② 끝까지 듣지 않고 일부만 기억한다 → 발표 문장을 두 번 읽어 주고 첫 번째에는 듣기만 하게 한다. ③ 와/과가 붙은 낱말을 장소로 본다 → 함께한 사람에게 붙는 말임을 보여 준다. 발표 문장은 모두 새로 지은 것이다.',
    }),

    // ───────────────────────── 7. 연습: 새 발표 듣고 정리하기 ─────────────────────────
    L(7, {
      title: '비 오는 날 발표를 듣고 들은 내용과 차례 정리하기',
      objective: '비 오는 날 일을 이야기한 발표를 듣고 들은 내용과 듣지 못한 내용을 가리고, 있었던 일의 차례를 정리할 수 있다.',
      standards: SPEAK,
      illustration: ART('a paper child with raindrops outside the window listening to a classmate tell a story about building blocks', '비 오는 날 이야기'),
      stages: ST(
        { teacher: '"지난 시간에 친구 발표에서 언제, 어디서, 누구와, 무엇을 했는지 찾았어요. 오늘은 새로운 발표를 듣고 그 내용과 차례를 정리해 봐요." \'어제 비가 와서 집에서 동생과 블록을 쌓았어요.\'를 읽어 주고 한 번 더 천천히 읽는다.', student: '새 발표를 듣고 들은 내용과 일의 차례를 정리해 봐요.', demo: { tool: 'mindmap', options: { mode: 'match', topic: '들은 내용', shuffle: false, slots: [{ id: 'who', label: '누구와' }], cards: [{ id: 'bro', text: '동생과' }, { id: 'mom', text: '엄마와' }] }, sequence: [{ match: { who: 'bro' } }] } },
        '"오늘 발표를 듣고 새로 알게 된 내용을 한 문장으로 말해 볼까요?" 두세 명이 \'준호는 ~했어요.\' 모양으로 말한다. 출구 1번에서 발표에 없는 내용을 고른 학생에게는 발표를 다시 읽어 주고 낱말을 찾아보게 한다.',
        [
          A('a1', '활동 1. 새 발표에서 들은 내용 찾기', 13, 'mindmap',
            '"발표를 한 번 더 들으며 낱말을 찾아봐요. 내가 기억한 것과 발표 속 내용이 같은지 확인해요." 발표를 두 번 읽어 주고 낱말을 짚어 보게 한다. \'운동장에서\'를 이은 학생에게는 "비 오는 날 어디에서 놀았다고 했나요?"라고 되묻는다.',
            '발표를 듣고 들은 낱말과 들은 내용을 찾아요.', LV,
            [
              MATCH('준호가 "어제 비가 와서 집에서 동생과 블록을 쌓았어요."라고 발표했어요. 들은 낱말을 이어 보세요.', '들은 내용', [{ id: 'when', label: '언제' }, { id: 'where', label: '어디서' }, { id: 'who', label: '누구와' }, { id: 'what', label: '무엇을 했나요' }], [C('yes', '어제'), C('home', '집에서'), C('bro', '동생과'), C('block', '블록을 쌓았어요'), C('yard', '운동장에서')], { when: 'yes', where: 'home', who: 'bro', what: 'block' }, 0.2),
              SORT('같은 발표를 듣고 들은 내용과 듣지 못한 내용으로 나누어 보세요.', '들은 내용', [{ id: 'yes', label: '들은 내용이에요' }, { id: 'no', label: '듣지 못한 내용이에요' }], [C('rain', '비가 왔어요.'), C('block', '블록을 쌓았어요.'), C('ball', '공놀이를 했어요.'), C('sea', '바다에 갔어요.')], { yes: ['rain', 'block'], no: ['ball', 'sea'] }, 0.25),
              PICK('준호는 어디에서 놀았나요? 발표에서 들은 장소를 골라 보세요.', '어디서', [C('home', '집에서'), C('yard', '운동장에서'), C('park', '공원에서')], ['home'], 0.25,
                { conclude: '발표를 끝까지 들으면 장소와 하는 일을 정확하게 알 수 있어요.' }),
              PICK('더 해 보기: 준호가 \'비가 와서\' 집에서 놀았다고 했어요. 비 때문에 한 일을 모두 골라 보세요.', '비 때문에', [C('home', '집에서 놀았어요'), C('swing', '밖에서 그네를 탔어요'), C('block', '블록을 쌓았어요')], ['home', 'block'], 0.3, { extra: true }),
            ]),
          A('a2', '활동 2. 들은 일의 차례와 듣는 방법 정하기', 13, 'mindmap',
            '"발표를 들을 때 일이 일어난 차례를 머릿속에 그려 보면 기억하기 쉬워요." 발표 문장을 읽어 주고 카드를 놓게 한다. 마지막 일을 먼저 놓는 학생에게는 "처음에는 무엇을 했다고 했나요?"라고 되묻는다.',
            '들은 차례대로 카드를 놓고 기억하기 좋은 듣는 방법을 골라요.', LV,
            [
              ORDER('"먼저 블록을 모았어요. 그다음 높이 쌓았어요. 마지막에 쓰러졌어요." 들은 차례대로 카드를 놓아 보세요.', [C('c', '블록을 모았어요'), C('s', '높이 쌓았어요'), C('f', '쓰러졌어요')], ['c', 's', 'f'], 0.2),
              SORT('듣는 방법 카드를 기억하기 좋은 방법과 좋지 않은 방법으로 나누어 보세요.', '듣는 방법', [{ id: 'good', label: '기억하기 좋아요' }, { id: 'bad', label: '기억하기 어려워요' }], [C('eye', '말하는 친구를 바라보며 들어요'), C('pic', '들은 내용을 머릿속에 그려요'), C('talk', '옆 친구와 이야기해요'), C('play', '손으로 장난을 쳐요')], { good: ['eye', 'pic'], bad: ['talk', 'play'] }, 0.25),
              PICK('발표를 듣고 기억하기 위해 하면 좋은 일을 모두 골라 보세요.', '기억하는 방법', [C('word', '중요한 낱말을 속으로 되풀이해요'), C('sleep', '눈을 감고 졸아요'), C('ask', '궁금한 것은 끝난 뒤에 물어봐요')], ['word', 'ask'], 0.25),
              PICK('더 해 보기: 발표를 다 듣고 나서 하면 좋은 일을 모두 골라 보세요.', '다 듣고 나서', [C('tell', '들은 것을 짝에게 말해 봐요'), C('draw', '들은 장면을 그려 봐요'), C('forget', '바로 다 잊어버려요')], ['tell', 'draw'], 0.3, { extra: true }),
            ]),
        ],
        [
          CH('"어제 비가 와서 집에서 동생과 블록을 쌓았어요." 이 발표에서 들은 내용은 어느 것일까요?', ['동생과 블록을 쌓았어요', '바다에서 헤엄을 쳤어요', '학교에서 공을 찼어요'], 0, '발표에서 동생과 블록을 쌓았다고 했어요.', 0.15),
          { type: 'tool', tool: 'mindmap', options: { mode: 'order', slots: ['첫째', '둘째', '셋째'], cards: [C('a', '밀가루를 반죽했어요'), C('b', '모양을 만들었어요'), C('c', '구워서 먹었어요')] }, prompt: '"밀가루를 반죽하고 모양을 만들어 구워서 먹었어요." 들은 차례대로 카드를 놓아 보세요.', target: { order: ['a', 'b', 'c'] }, difficulty: 0.25 },
          MOOD,
        ]),
      worksheet: {
        title: '새 발표 듣고 정리하기',
        items: [
          { type: 'table', prompt: '"어제 비가 와서 집에서 동생과 블록을 쌓았어요."를 듣고 빈칸을 채우세요.', columns: ['칸', '들은 낱말'], cells: [['언제', ''], ['어디서', ''], ['누구와', ''], ['무엇을', '']] },
          { type: 'choice', prompt: '발표를 들을 때 기억하기 좋은 방법은 어느 것일까요?', options: ['들은 내용을 머릿속에 그려요', '옆 친구와 이야기해요'], answer: '들은 내용을 머릿속에 그려요' },
          { type: 'check', prompt: '들은 차례가 맞는 것에 ✓ 하세요.', options: ['모았어요 → 쌓았어요 → 쓰러졌어요', '쓰러졌어요 → 모았어요 → 쌓았어요'], answer: '모았어요 → 쌓았어요 → 쓰러졌어요' },
          { type: 'short', prompt: '친구 발표를 듣고 기억에 남는 것 한 가지를 써 보세요.' },
        ],
        easy: { note: '발표를 두 번 들으면 더 잘 기억돼요.', items: [
          { type: 'choice', prompt: '"집에서 놀았어요." 어디서에 ○ 하세요.', options: ['집에서', '놀았어요'], answer: '집에서' },
          { type: 'blank', prompt: '낱말을 따라 쓰세요.', text: '집에서', answer: '집에서' },
          { type: 'choice', prompt: '발표를 들을 때 하는 일에 ○ 하세요.', options: ['바라보며 들어요', '딴짓을 해요'], answer: '바라보며 들어요' },
          { type: 'draw', prompt: '발표에서 들은 장면을 그려 보세요.' },
        ] },
      },
      differentiation: {
        easy: '이어 보기는 낱말이 둘이고 맞게 이으면 초록 테두리가 생겨요. 가르기는 카드가 넷이에요.',
        base: '발표를 두 번 듣고 스스로 이은 뒤 확인해요.',
        challenge: '더 해 보기(비 때문에 한 일)까지 풀고 친구 발표를 직접 정리해요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 발표에 없는 내용을 지어낸다 → 발표를 다시 읽어 주고 낱말을 찾게 한다. ② 일이 일어난 차례를 놓친다 → 먼저, 그다음, 마지막 같은 낱말을 짚어 준다. ③ 듣는 도중 딴짓을 한다 → 발표를 듣기 전에 들어야 할 것 한 가지를 정해 준다. 발표 문장은 모두 이 단원을 위해 새로 지은 것이다.',
    }),

    // ───────────────────────── 8. 듣는 태도와 참여 ─────────────────────────
    L(8, {
      title: '친구 발표를 들을 때 내 태도 돌아보고 고치기',
      objective: '친구 발표를 들을 때 알맞은 태도를 알고, 내 듣는 모습을 돌아보며 고칠 점을 정할 수 있다.',
      standards: SPEAK,
      illustration: ART('a row of paper children sitting with eyes on the speaker and hands in their laps', '잘 들어요'),
      stages: ST(
        { teacher: '"발표하는 친구가 앞에 서 있어요. 듣는 친구가 어떻게 앉아 있으면 말하는 친구가 힘이 날까요?" 두 모습을 시범한다. 먼저 딴짓을 하는 모습과 눈을 바라보며 듣는 모습을 보여 주고 어느 쪽이 좋은지 말하게 한다.', student: '친구 발표를 들을 때 좋은 태도가 무엇인지 알아보고 내 모습을 돌아봐요.', demo: { tool: 'mindmap', options: { topic: '듣는 태도', shuffle: false, slots: [{ id: 'good', label: '좋은 태도' }, { id: 'bad', label: '고쳐야 해요' }], cards: [{ id: 'look', text: '말하는 친구를 바라봐요' }, { id: 'play', text: '손장난을 해요' }] }, sequence: [{ sort: { good: ['look'], bad: ['play'] } }] } },
        '"오늘 내 듣는 모습에서 잘한 점과 고치고 싶은 점을 하나씩 말해 볼까요?" 한두 명이 말하고 서로 칭찬한다. 출구 1번에서 \'바로 끼어들어 말해요\'를 고른 학생에게는 말하는 친구의 마음을 떠올리게 한다.',
        [
          A('a1', '활동 1. 듣는 태도 가르기', 13, 'mindmap',
            '"발표를 듣는 친구의 모습을 떠올려 봐요. 말하는 친구가 어떤 마음이 들까요?" 카드를 몸으로 흉내 내 보게 한다. \'궁금해서 바로 끼어들어요\'를 좋은 태도에 넣는 학생에게는 "친구가 말하는 중에 끼어들면 어떨까요?"라고 되묻는다.',
            '듣는 태도를 좋은 태도와 고쳐야 할 태도로 나누고 알맞은 행동을 이어요.', LV,
            [
              SORT('듣는 모습 카드를 좋은 태도와 고쳐야 할 태도로 나누어 보세요.', '듣는 태도', [{ id: 'good', label: '좋은 태도' }, { id: 'bad', label: '고쳐야 해요' }], [C('look', '말하는 친구를 바라봐요'), C('nod', '고개를 끄덕이며 들어요'), C('wait', '끝날 때까지 기다려요'), C('play', '손장난을 해요'), C('talk', '옆 친구와 떠들어요'), C('cut', '궁금해서 바로 끼어들어요')], { good: ['look', 'nod', 'wait'], bad: ['play', 'talk', 'cut'] }, 0.2,
                { levels: { easy: { prompt: '카드 넷을 좋은 태도와 고쳐야 할 태도로 나누어 보세요.', toolOptions: { cards: [C('look', '말하는 친구를 바라봐요'), C('play', '손장난을 해요'), C('wait', '끝날 때까지 기다려요'), C('talk', '옆 친구와 떠들어요')] }, target: { sort: { good: ['look', 'wait'], bad: ['play', 'talk'] } } } } }),
              MATCH('상황과 알맞은 행동을 이어 보세요.', '알맞은 행동', [{ id: 's1', label: '발표 중에 궁금한 것이 생겼어요' }, { id: 's2', label: '옆 친구가 말을 걸어요' }], [C('wait', '발표가 끝난 뒤 손을 들고 물어요'), C('later', '"발표가 끝나고 이야기하자." 하고 작게 말해요'), C('cut', '바로 큰 소리로 물어요')], { s1: 'wait', s2: 'later' }, 0.25),
              PICK('발표를 잘 듣고 있다는 것을 보여 주는 모습을 모두 골라 보세요.', '잘 듣는 모습', [C('eye', '눈을 바라봐요'), C('nod', '고개를 끄덕여요'), C('yawn', '하품을 크게 해요')], ['eye', 'nod'], 0.25,
                { conclude: '말하는 친구를 바라보고 끝까지 기다리는 것이 좋은 듣는 태도예요.' }),
              PICK('더 해 보기: 발표가 끝난 뒤 하면 좋은 일을 모두 골라 보세요.', '발표가 끝난 뒤', [C('clap', '박수를 쳐요'), C('ask', '궁금한 것을 물어봐요'), C('run', '말없이 자리를 떠요')], ['clap', 'ask'], 0.3, { extra: true }),
            ]),
          A('a2', '활동 2. 내 듣는 모습 돌아보기', 13, 'emotion',
            '"오늘 친구 발표를 들을 때 내 모습을 떠올려 봐요. 정답은 없으니 솔직하게 눈금을 골라요." 눈금을 고르고 이유를 짝에게 말하게 한다. 모두 \'잘해요\'를 고른 학생에게는 "가장 힘들었던 순간은 언제였나요?"라고 묻는다.',
            '이야기 속 인물의 행동을 고르고, 내 듣는 모습에 알맞은 눈금을 골라요.', LV,
            [
              BR('지우가 발표하는 중에 옆 친구가 자꾸 말을 걸어요. 지우는 어떻게 하면 좋을까요?', '지우', '발표가 시작되었는데 옆 친구가 지우에게 작은 소리로 계속 말을 걸어요.', [{ id: 'later', text: '"발표가 끝나고 이야기하자." 하고 작게 말해요', result: '지우가 발표를 끝까지 잘 들었어요', mood: '뿌듯함' }, { id: 'chat', text: '친구와 같이 떠들어요', result: '발표한 친구가 속상해서 말이 작아져요', mood: '속상함', why: '친구가 말할 때 떠들면 발표하는 친구의 마음은 어떨까요?' }], 'later', 0.2),
              SC('오늘 친구 발표를 들을 때 바라보며 얼마나 들었나요? 솔직하게 골라요.', '친구 발표를 들었어요.', '편안함', '말하는 친구를 얼마나 바라보았나요?'),
              SC('오늘 발표가 끝날 때까지 얼마나 기다렸나요? 솔직하게 골라요.', '친구 발표가 끝날 때까지 기다렸어요.', '뿌듯함', '끝날 때까지 얼마나 기다렸나요?'),
            ]),
        ],
        [
          CH('친구가 발표하는 동안 알맞은 태도는 어느 것일까요?', ['바라보며 끝까지 들어요', '바로 끼어들어 말해요', '다른 친구와 떠들어요'], 0, '말하는 친구를 바라보며 끝까지 듣는 것이 좋은 태도예요.', 0.1),
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '발표를 들어요', basket: '좋은 태도', cards: [C('look', '바라봐요'), C('wait', '기다려요'), C('chat', '떠들어요')] }, prompt: '발표를 들을 때 좋은 태도를 모두 골라 보세요.', target: { pick: ['look', 'wait'] }, difficulty: 0.2 },
          MOOD,
        ]),
      worksheet: {
        title: '내 듣는 모습',
        items: [
          { type: 'check', prompt: '좋은 듣는 태도에 모두 ✓ 하세요.', options: ['바라보며 들어요', '손장난을 해요', '끝까지 기다려요'], answer: '바라보며 들어요, 끝까지 기다려요' },
          { type: 'choice', prompt: '발표 중에 궁금한 것이 생겼을 때 알맞은 행동은 어느 것일까요?', options: ['발표가 끝난 뒤에 물어요', '바로 큰 소리로 물어요'], answer: '발표가 끝난 뒤에 물어요' },
          { type: 'table', prompt: '내 실력에 ○ 하세요.', columns: ['내 모습', '아직', '조금', '잘해요'], cells: [['말하는 친구를 바라봐요', '', '', ''], ['끝까지 기다려요', '', '', '']] },
          { type: 'short', prompt: '발표를 들을 때 내가 고치고 싶은 점 하나를 써 보세요.' },
        ],
        easy: { note: '친구를 바라보고 기다려요.', items: [
          { type: 'choice', prompt: '좋은 태도에 ○ 하세요.', options: ['바라봐요', '떠들어요'], answer: '바라봐요' },
          { type: 'blank', prompt: '낱말을 따라 쓰세요.', text: '바라봐요', answer: '바라봐요' },
          { type: 'choice', prompt: '발표가 끝나면 하는 일에 ○ 하세요.', options: ['박수를 쳐요', '떠들어요'], answer: '박수를 쳐요' },
          { type: 'draw', prompt: '발표를 듣는 내 모습을 그려 보세요.' },
        ] },
      },
      differentiation: {
        easy: '가르기는 카드가 넷이고 맞게 놓으면 초록 테두리가 생겨요. 자기 평가 눈금은 세 칸이에요.',
        base: '카드를 모두 놓은 뒤 확인하고, 이야기 결과를 읽고 다시 생각해요.',
        challenge: '더 해 보기(발표가 끝난 뒤 할 일)까지 풀고 내 모습을 문장으로 말해요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 궁금하면 바로 말해도 된다고 생각한다 → 발표가 끝난 뒤 질문 시간이 있다고 말해 준다. ② 자기 평가에서 모든 눈금을 같은 곳에 둔다 → 오늘 발표를 들은 장면 하나를 떠올려 고르게 한다. ③ 옆 친구가 말을 걸 때 어떻게 할지 모른다 → 작은 소리로 나중에 이야기하자고 말하는 것을 연습한다. 자기 평가는 성적에 반영하지 않는다. 인물 이름은 모두 가명이다.',
    }),

    // ───────────────────────── 9. 쓸 일과 읽을 사람 정하기 ─────────────────────────
    L(9, {
      title: '일기에 쓸 일과 읽을 사람 정하기',
      objective: '내가 직접 겪은 일 가운데 일기에 쓸 일을 고르고, 읽을 사람에 알맞은 내용을 정할 수 있다.',
      standards: WRITE,
      illustration: ART('a paper child at a desk choosing one memory card from several cards while a parent waits to read the diary', '무엇을 쓸까?'),
      stages: ST(
        { teacher: '"오늘 있었던 일 가운데 일기에 쓰고 싶은 일은 무엇인가요?" 학생들이 말한 일을 칠판에 몇 개 적는다. "내가 직접 겪은 일을 골라 써요. 이 일기는 누가 읽게 될까요?" 읽을 사람에 따라 쓸 말이 달라진다는 것을 말해 준다.', student: '일기에 쓸 일과 읽을 사람을 정해 봐요.', demo: { tool: 'mindmap', options: { topic: '일기로 써요', shuffle: false, slots: [{ id: 'mine', label: '내가 겪은 일' }, { id: 'other', label: '겪지 않은 일' }], cards: [{ id: 'swing', text: '친구와 그네를 탔어요' }, { id: 'tv', text: '텔레비전에서 본 먼 나라 이야기' }] }, sequence: [{ sort: { mine: ['swing'], other: ['tv'] } }] } },
        '"오늘 일기에 쓰고 싶은 일 하나를 짝에게 말해 볼까요? 누가 읽을지도 함께 말해요." 두세 명이 발표한다. 출구 1번에서 꿈 이야기를 겪은 일로 고른 학생에게는 오늘 직접 한 일이 무엇인지 다시 떠올리게 한다.',
        [
          A('a1', '활동 1. 일기에 쓸 일 고르기', 13, 'mindmap',
            '"오늘 직접 한 일을 떠올려 봐요. 눈으로 보고 몸으로 한 일이 내가 겪은 일이에요." 카드를 읽고 직접 한 일인지 생각하게 한다. \'텔레비전에서 본 먼 나라 이야기\'를 겪은 일에 넣는 학생에게는 "내가 가서 본 것일까요?"라고 되묻는다.',
            '내가 겪은 일과 겪지 않은 일을 나누고 읽을 사람에 알맞은 내용을 이어요.', LV,
            [
              SORT('카드를 내가 직접 겪은 일과 겪지 않은 일로 나누어 보세요.', '일기에 쓸 일', [{ id: 'mine', label: '내가 직접 겪은 일' }, { id: 'other', label: '겪지 않은 일' }], [C('swing', '친구와 그네를 탔어요'), C('lunch', '급식으로 카레를 먹었어요'), C('walk', '아빠와 산책했어요'), C('tv', '텔레비전에서 본 먼 나라 이야기'), C('dream', '꿈에서 하늘을 날았어요'), C('other', '옆 반 아이가 한 일')], { mine: ['swing', 'lunch', 'walk'], other: ['tv', 'dream', 'other'] }, 0.2,
                { levels: { easy: { prompt: '카드 넷을 내가 직접 겪은 일과 겪지 않은 일로 나누어 보세요.', toolOptions: { cards: [C('swing', '친구와 그네를 탔어요'), C('tv', '텔레비전에서 본 먼 나라 이야기'), C('walk', '아빠와 산책했어요'), C('dream', '꿈에서 하늘을 날았어요')] }, target: { sort: { mine: ['swing', 'walk'], other: ['tv', 'dream'] } } } } }),
              MATCH('읽을 사람과 쓰면 좋은 내용을 이어 보세요.', '읽을 사람', [{ id: 'mom', label: '엄마께 보여 드려요' }, { id: 'friend', label: '친구에게 읽어 줘요' }], [C('feel', '있었던 일과 내 마음을 써요'), C('fun', '재미있는 장면을 골라 써요'), C('score', '시험 점수를 써요')], { mom: 'feel', friend: 'fun' }, 0.25),
              PICK('일기에 쓰면 좋은 것을 모두 골라 보세요.', '일기에 써요', [C('when', '언제 있었던 일인지'), C('where', '어디에서 했는지'), C('who', '누구와 했는지'), C('secret', '다른 사람의 비밀')], ['when', 'where', 'who'], 0.25,
                { conclude: '언제, 어디서, 누구와 했는지를 쓰면 읽는 사람이 쉽게 알 수 있어요.' }),
              PICK('더 해 보기: 내 마음을 나타내는 말을 모두 골라 보세요.', '내 마음', [C('glad', '즐거웠어요'), C('sad', '속상했어요'), C('school', '학교')], ['glad', 'sad'], 0.3, { extra: true }),
            ]),
          A('a2', '활동 2. 있었던 일과 내 마음 나누어 쓸 말 정하기', 13, 'mindmap',
            '"일기에는 있었던 일과 내 마음을 함께 쓰면 좋아요. 장면마다 어떤 마음이 들었는지 생각해요." 장면을 소리 내어 읽고 마음을 말하게 한다. \'비가 와서 소풍이 취소되었어요\'에 \'즐거웠어요\'를 이은 학생에게는 "소풍을 못 가면 마음이 어떨까요?"라고 되묻는다.',
            '장면과 어울리는 마음을 이어 쓸 말을 정해요.', LV,
            [
              MATCH('있었던 일과 어울리는 내 마음을 이어 보세요.', '일과 마음', [{ id: 'e1', label: '친구와 그네를 탔어요' }, { id: 'e2', label: '넘어져서 무릎을 다쳤어요' }, { id: 'e3', label: '비가 와서 소풍이 취소되었어요' }], [C('glad', '즐거웠어요'), C('hurt', '아팠어요'), C('sad', '속상했어요'), C('sleepy', '졸렸어요')], { e1: 'glad', e2: 'hurt', e3: 'sad' }, 0.2),
              SORT('문장 카드를 있었던 일과 내 마음으로 나누어 보세요.', '일기 문장', [{ id: 'event', label: '있었던 일' }, { id: 'mind', label: '내 마음' }], [C('a', '나는 놀이터에서 놀았어요.'), C('b', '정말 즐거웠어요.'), C('c', '엄마와 빵을 구웠어요.'), C('d', '뿌듯했어요.')], { event: ['a', 'c'], mind: ['b', 'd'] }, 0.25),
              PICK('일기를 쓰기 전에 정하면 좋은 것을 모두 골라 보세요.', '먼저 정해요', [C('what', '무슨 일을 쓸까?'), C('who', '누가 읽을까?'), C('snack', '간식은 무엇을 먹을까?')], ['what', 'who'], 0.25),
              PICK('더 해 보기: 마음을 나타내는 문장을 모두 골라 보세요.', '마음 문장', [C('x1', '정말 신났어요.'), C('x2', '운동장에서 뛰었어요.'), C('x3', '조금 무서웠어요.')], ['x1', 'x3'], 0.3, { extra: true }),
            ]),
        ],
        [
          CH('일기에 쓸 일로 알맞은 것은 어느 것일까요?', ['오늘 내가 친구와 한 일', '꿈에서 본 먼 나라', '옆 반 아이가 한 일'], 0, '일기에는 내가 직접 겪은 일을 써요.', 0.15),
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '일기의 마음', basket: '내 마음을 나타내는 말', cards: [C('glad', '신났어요'), C('book', '책가방'), C('sad', '속상했어요')] }, prompt: '내 마음을 나타내는 말을 모두 골라 보세요.', target: { pick: ['glad', 'sad'] }, difficulty: 0.2 },
          MOOD,
        ]),
      worksheet: {
        title: '일기에 쓸 일과 읽을 사람',
        items: [
          { type: 'check', prompt: '내가 직접 겪은 일에 모두 ✓ 하세요.', options: ['친구와 놀이터에서 놀았어요', '텔레비전에서 본 먼 나라 이야기', '엄마와 시장에 갔어요'], answer: '친구와 놀이터에서 놀았어요, 엄마와 시장에 갔어요' },
          { type: 'table', prompt: '있었던 일과 어울리는 마음을 이어서 쓰세요.', columns: ['있었던 일', '내 마음'], cells: [['친구와 그네를 탔어요', ''], ['넘어져서 무릎을 다쳤어요', '']] },
          { type: 'choice', prompt: '일기에 꼭 쓰면 좋은 것은 어느 것일까요?', options: ['언제, 어디서, 누구와', '다른 사람의 비밀'], answer: '언제, 어디서, 누구와' },
          { type: 'short', prompt: '오늘 일기에 쓰고 싶은 일 하나와 읽을 사람을 써 보세요.' },
        ],
        easy: { note: '내가 직접 한 일을 골라요.', items: [
          { type: 'choice', prompt: '내가 직접 겪은 일에 ○ 하세요.', options: ['그네를 탔어요', '꿈에서 날았어요'], answer: '그네를 탔어요' },
          { type: 'blank', prompt: '낱말을 따라 쓰세요.', text: '즐거웠어요', answer: '즐거웠어요' },
          { type: 'choice', prompt: '마음을 나타내는 말에 ○ 하세요.', options: ['속상했어요', '학교'], answer: '속상했어요' },
          { type: 'draw', prompt: '오늘 가장 기억에 남는 일을 그려 보세요.' },
        ] },
      },
      differentiation: {
        easy: '가르기는 카드가 넷이고 맞게 놓으면 초록 테두리가 생겨요. 이어 보기는 카드가 적어요.',
        base: '카드를 모두 놓은 뒤 확인하고, 읽을 사람에 맞는 내용을 스스로 이어요.',
        challenge: '더 해 보기(마음을 나타내는 말)까지 풀고 오늘 일기에 쓸 일을 직접 정해요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 본 것이나 들은 것을 내가 겪은 일로 쓴다 → 내가 직접 가서 보고 한 일만 골라 보게 한다. ② 일만 쓰고 마음은 쓰지 않는다 → 그때 어떤 마음이었는지 한마디만 덧붙이게 한다. ③ 쓸 일을 못 정한다 → 하루를 아침, 낮, 저녁으로 나누어 가장 기억나는 한 장면을 고르게 한다. 문장은 모두 새로 지은 것이다.',
    }),

    // ───────────────────────── 10. 초고 쓰기와 글자 만들기 ─────────────────────────
    L(10, {
      title: '일기 글 빈칸 채우고 차례대로 쓰고 받침 글자 만들기',
      objective: '때·곳·한 일·마음을 나타내는 낱말을 채워 일기 글을 쓰고, 일기에 쓸 받침 글자를 바르게 만들 수 있다.',
      standards: WRITE,
      illustration: ART('a paper child writing a diary page with a pencil while little word cards float above the notebook', '일기를 써요'),
      stages: ST(
        { teacher: '"일기 글에는 언제, 어디서, 무엇을 했는지, 마음이 어땠는지가 들어가요. 빈칸에 알맞은 말을 넣으면 한 문장이 완성돼요." 칠판에 \'나는 친구와 놀이터에 갔어요. 그네를 탔어요. 정말 즐거웠어요.\'를 쓰고 한 문장씩 읽어 준다.', student: '일기 글의 빈칸을 채우고 차례대로 써 보며, 일기에 쓸 글자도 만들어 봐요.', demo: { tool: 'story', options: { mode: 'fill', slots: [{ id: 'a', label: '나는 ___ 놀이터에 갔어요.' }], cards: [{ id: 'fr', text: '친구와' }, { id: 'ea', text: '먹었어요' }] }, sequence: [{ fill: { a: 'fr' } }] } },
        '"오늘 쓴 일기 문장 가운데 가장 마음에 드는 한 문장을 짝에게 읽어 줄까요?" 두세 명이 읽고 박수를 받는다. 출구 1번에서 시험 점수를 고른 학생에게는 일기 끝에 쓰는 마음이 무엇인지 다시 떠올리게 한다.',
        [
          A('a1', '활동 1. 일기 글의 빈칸 채우고 차례 놓기', 13, 'story',
            '"문장을 소리 내어 읽고 빈칸에 알맞은 말을 넣어요. 앞뒤 말이 자연스럽게 이어져야 해요." 한 문장씩 소리 내어 읽게 한다. \'비가 맑아서\'처럼 놓는 학생에게는 "비가 오는 날과 맑은 날 중 어느 말이 어울릴까요?"라고 묻는다.',
            '일기 문장의 빈칸에 알맞은 말을 놓고 글의 차례를 놓아요.', LV,
            [
              FILL('일기 글의 빈칸에 알맞은 말을 놓아 보세요.', [{ id: 'a', label: '나는 ___ 놀이터에 갔어요.' }, { id: 'b', label: '그네를 ___.' }, { id: 'c', label: '정말 ___.' }], [C('fr', '친구와'), C('ride', '탔어요'), C('glad', '즐거웠어요'), C('eat', '먹었어요')], { a: 'fr', b: 'ride', c: 'glad' }, 0.2),
              FILL('일기 글의 빈칸에 알맞은 말을 놓아 보세요.', [{ id: 'a', label: '비가 ___ 우산을 썼어요.' }, { id: 'b', label: '길이 ___.' }], [C('rain', '와서'), C('slip', '미끄러웠어요'), C('sun', '맑아서'), C('hot', '뜨거웠어요')], { a: 'rain', b: 'slip' }, 0.25),
              ORDER('일기 글의 문장 카드를 차례대로 놓아 보세요.', [C('f', '오늘은 가족과 시장에 갔어요.'), C('s', '엄마가 사과를 샀어요.'), C('t', '사과가 달콤해서 기뻤어요.')], ['f', 's', 't'], 0.25),
              ORDER('더 해 보기: 일기 글의 문장 카드를 차례대로 놓아 보세요.', [C('a', '나는 강아지와 산책했어요.'), C('b', '강아지가 꼬리를 흔들었어요.'), C('c', '나도 웃었어요.'), C('d', '정말 행복했어요.')], ['a', 'b', 'c', 'd'], 0.3, { extra: true }),
            ]),
          A('a2', '활동 2. 일기에 쓸 받침 글자 만들기', 13, 'hangul',
            '"일기에 쓸 낱말의 글자를 받침까지 만들어 봐요." 만든 글자를 소리 내어 읽게 한다. 받침을 빼고 \'노\'를 만드는 학생에게는 "소리의 끝이 닫혔나요?"라고 묻는다.',
            '일기에 쓸 받침 글자를 바르게 만들어요.', HGL(['ㄴ', 'ㅃ', 'ㄲ'], ['ㅗ', 'ㅏ', 'ㅜ'], ['ㄹ', 'ㅇ', 'ㅁ', 'ㄴ']),
            [
              HG('놀이터의 첫 글자 \'놀\'을 만들어 보세요.', '놀', 0.15),
              HG('빵집에서 산 \'빵\'을 만들어 보세요.', '빵', 0.2),
              HG('자면서 꾸는 \'꿈\'을 만들어 보세요.', '꿈', 0.25),
              HG('겨울에 하늘에서 내리는 \'눈\'을 만들어 보세요.', '눈', 0.25),
              HG('더 해 보기: 꽃이 피는 계절 \'봄\'을 만들어 보세요.', '봄', 0.3, { extra: true, toolOptions: { consonants: ['ㅂ', 'ㄴ'], vowels: ['ㅗ', 'ㅏ'] } }),
            ]),
        ],
        [
          CH('일기 글의 끝에 쓰면 좋은 것은 어느 것일까요?', ['그날의 내 마음', '시험 점수', '집 주소'], 0, '일기의 끝에는 그날 내 마음이 어땠는지를 한마디 쓰면 좋아요.', 0.15),
          { type: 'tool', tool: 'hangul', options: { consonants: ['ㅁ', 'ㅂ'], vowels: ['ㅜ', 'ㅏ'], batchim: ['ㄹ', 'ㄴ', 'ㅇ'], slotHints: true }, prompt: '일기에 쓸 낱말 \'물\'을 받침까지 만들어 보세요.', target: { syllable: '물' }, difficulty: 0.25 },
          MOOD,
        ]),
      worksheet: {
        title: '일기 글 쓰기',
        items: [
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '나는 친구와 놀이터에 갔어요. 그네를 ______.  정말 ______.', answer: '탔어요, 즐거웠어요' },
          { type: 'figure', prompt: '어떤 글자일까요? 아래에 쓰세요.', tool: 'hangul', options: { batchim: [] }, figures: [{ state: { cho: 'ㄴ', jung: 'ㅗ', jong: 'ㄹ' }, caption: BLANK }, { state: { cho: 'ㅃ', jung: 'ㅏ', jong: 'ㅇ' }, caption: BLANK }, { state: { cho: 'ㄲ', jung: 'ㅜ', jong: 'ㅁ' }, caption: BLANK }], answer: '놀, 빵, 꿈' },
          { type: 'table', prompt: '일기에 쓸 문장을 차례대로 번호를 쓰세요. (1 처음, 2 가운데, 3 끝)', columns: ['문장', '번호'], cells: [['오늘은 시장에 갔어요.', ''], ['사과를 샀어요.', ''], ['기뻤어요.', '']] },
          { type: 'short', prompt: '오늘 한 일을 두 문장으로 써 보세요.' },
        ],
        easy: { note: '때, 곳, 한 일, 마음을 차례로 써요.', items: [
          { type: 'blank', prompt: '낱말을 따라 쓰세요.', text: '놀이터  친구', answer: '놀이터 친구' },
          { type: 'choice', prompt: '마음을 나타내는 말에 ○ 하세요.', options: ['즐거웠어요', '그네를'], answer: '즐거웠어요' },
          { type: 'blank', prompt: '받침을 붙여 글자를 쓰세요.', text: '노 + ㄹ = ___', answer: '놀' },
          { type: 'draw', prompt: '오늘 한 일을 그리고 한 문장 써 보세요.' },
        ] },
      },
      differentiation: {
        easy: '빈칸 채우기는 카드가 적고 맞게 놓으면 초록 테두리가 생겨요. 글자 만들기는 자리 글씨가 있고 모음을 들면 알맞은 자리가 깜박여요.',
        base: '카드를 모두 놓은 뒤 확인하고, 만든 글자는 확인 뒤에 보여요.',
        challenge: '내 글자 듣기 단추가 없고, 더 해 보기(네 문장 차례 놓기, \'봄\' 만들기)까지 풀어요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 빈칸에 앞뒤가 어색한 말을 넣는다 → 문장을 소리 내어 읽어 어색한 곳을 찾게 한다. ② 일기 글이 한 문장으로 끝난다 → 때·곳·한 일·마음을 한 문장씩 써 보게 한다. ③ 받침을 빼고 글자를 만든다 → 소리의 끝에서 입이 닫히는지 느껴 보게 한다. 일기 글은 모두 이 단원을 위해 새로 지은 것이다.',
    }),

    // ───────────────────────── 11. 일기 문장의 끝과 조사 ─────────────────────────
    L(11, {
      title: '지난 일을 쓰는 일기 문장의 끝과 조사 바르게 쓰기',
      objective: '일기에는 있었던 일을 \'~했어요\' 모양으로 쓴다는 것을 알고, 문장에 알맞은 조사(과/와, 을/를, 이/가)를 골라 쓸 수 있다.',
      standards: WRITE,
      illustration: ART('a paper diary page with short sentences ending in the past tense and small word cards placed in blanks', '갔어요  탔어요'),
      stages: ST(
        { teacher: '"일기는 이미 있었던 일을 쓰는 글이에요. \'공원에 갔어요.\'와 \'공원에 갈 거예요.\' 중 일기에 어울리는 것은 어느 것일까요?" 두 문장을 읽고 \'~했어요\'가 지난 일을 나타낸다고 말해 준다. 받침이 있으면 \'과·을·이\', 없으면 \'와·를·가\'를 쓴다는 것도 함께 짚는다.', student: '일기 문장의 끝과 알맞은 조사를 골라 써 봐요.', demo: { tool: 'story', options: { mode: 'fill', slots: [{ id: 'a', label: '나는 동생___ 공원에 갔어요.' }], cards: [{ id: 'gwa', text: '과' }, { id: 'wa', text: '와' }] }, sequence: [{ fill: { a: 'gwa' } }] } },
        '"오늘 알게 된 일기 문장의 약속을 한 문장으로 말해 볼까요?" 한두 명이 \'일기에는 ~했어요를 써요.\' 모양으로 말한다. 출구 1번에서 \'갈 거예요\'를 고른 학생에게는 일기는 이미 있었던 일을 쓴다는 것을 다시 떠올리게 한다.',
        [
          A('a1', '활동 1. 일기에 어울리는 문장 끝 찾기', 13, 'mindmap',
            '"일기에는 이미 있었던 일을 써요. 문장 끝을 소리 내어 읽어 보고 지난 일인지 앞으로 할 일인지 생각해요." 카드를 읽게 하고 때를 나타내는 낱말을 짚게 한다. \'내일 놀이공원에 갈 거예요\'를 일기에 어울리는 칸에 넣는 학생에게는 "내일은 이미 지나간 날일까요?"라고 되묻는다.',
            '지난 일을 쓰는 문장을 가르고 문장 끝을 이어요.', LV,
            [
              SORT('문장 카드를 일기에 어울리는 것과 어울리지 않는 것으로 나누어 보세요.', '일기 문장', [{ id: 'yes', label: '일기에 어울려요' }, { id: 'no', label: '일기에 어울리지 않아요' }], [C('a', '공원에 갔어요.'), C('b', '그네를 탔어요.'), C('c', '내일 놀이공원에 갈 거예요.'), C('d', '나중에 친구를 만날 거예요.')], { yes: ['a', 'b'], no: ['c', 'd'] }, 0.2),
              MATCH('문장의 앞부분과 알맞은 끝을 이어 보세요.', '문장의 끝', [{ id: 's1', label: '어제 나는 학교에' }, { id: 's2', label: '어제 나는 밥을' }, { id: 's3', label: '어제 나는 그림을' }], [C('go', '갔어요.'), C('eat', '먹었어요.'), C('draw', '그렸어요.'), C('will', '갈 거예요.')], { s1: 'go', s2: 'eat', s3: 'draw' }, 0.25),
              PICK('일기 문장으로 어울리는 것을 모두 골라 보세요.', '일기 문장', [C('p1', '어제 친구와 놀았어요.'), C('p2', '내일 친구와 놀 거예요.'), C('p3', '오늘 학교에서 노래를 불렀어요.')], ['p1', 'p3'], 0.25,
                { conclude: '일기는 지난 일을 쓰므로 \'~했어요\'처럼 끝나는 문장이 어울려요.' }),
              PICK('더 해 보기: 일기에서 때를 나타내는 말을 모두 골라 보세요.', '때를 나타내는 말', [C('yes', '어제'), C('morn', '아침에'), C('park', '놀이터'), C('today', '오늘')], ['yes', 'morn', 'today'], 0.3, { extra: true }),
            ]),
          A('a2', '활동 2. 알맞은 조사 넣고 문장 만들기', 13, 'story',
            '"받침이 있는 낱말 뒤에는 \'과\', \'을\', \'이\'를 써요. 받침이 없으면 \'와\', \'를\', \'가\'를 써요." 낱말을 소리 내어 읽으며 받침을 찾게 한다. \'동생와\'처럼 쓰는 학생에게는 "동생에는 받침이 있나요?"라고 되묻는다.',
            '빈칸에 알맞은 조사를 놓고 낱말을 차례대로 놓아 문장을 만들어요.', LV,
            [
              FILL('빈칸에 알맞은 말을 놓아 문장을 완성해 보세요.', [{ id: 'a', label: '나는 동생___ 공원에 갔어요.' }, { id: 'b', label: '나는 친구___ 놀았어요.' }], [C('gwa', '과'), C('wa', '와'), C('reul', '를'), C('i', '이')], { a: 'gwa', b: 'wa' }, 0.2),
              FILL('빈칸에 알맞은 말을 놓아 문장을 완성해 보세요.', [{ id: 'a', label: '나는 빵___ 먹었어요.' }, { id: 'b', label: '엄마___ 웃었어요.' }], [C('eul', '을'), C('reul', '를'), C('ga', '가'), C('i', '이')], { a: 'eul', b: 'ga' }, 0.25),
              ORDER('낱말 카드를 차례대로 놓아 일기 문장을 만들어 보세요.', [C('w1', '어제'), C('w2', '나는'), C('w3', '공원에'), C('w4', '갔어요.')], ['w1', 'w2', 'w3', 'w4'], 0.25),
              ORDER('더 해 보기: 낱말 카드를 차례대로 놓아 일기 문장을 만들어 보세요.', [C('x1', '오늘'), C('x2', '동생이'), C('x3', '그림을'), C('x4', '그렸어요.')], ['x1', 'x2', 'x3', 'x4'], 0.3, { extra: true }),
            ]),
        ],
        [
          CH('일기에 어울리는 문장은 어느 것일까요?', ['오늘 놀이터에서 놀았어요.', '내일 놀이터에서 놀 거예요.', '나중에 놀이터에 갈래요.'], 0, '일기는 이미 있었던 일을 쓰므로 \'~했어요\'처럼 끝나는 문장이 어울려요.', 0.15),
          { type: 'tool', tool: 'story', options: { mode: 'fill', slots: [{ id: 'a', label: '나는 언니___ 책을 읽었어요.' }], cards: [C('gwa', '과'), C('wa', '와'), C('reul', '를')] }, prompt: '빈칸에 알맞은 말을 놓아 보세요.', target: { fill: { a: 'wa' } }, difficulty: 0.25 },
          MOOD,
        ]),
      worksheet: {
        title: '일기 문장의 끝과 조사',
        items: [
          { type: 'check', prompt: '일기에 어울리는 문장에 모두 ✓ 하세요.', options: ['어제 놀이터에서 놀았어요.', '내일 놀이공원에 갈 거예요.', '오늘 빵을 먹었어요.'], answer: '어제 놀이터에서 놀았어요., 오늘 빵을 먹었어요.' },
          { type: 'choice', prompt: '\'나는 동생( )  공원에 갔어요.\' 괄호에 알맞은 말은 어느 것일까요?', options: ['과', '와'], answer: '과' },
          { type: 'blank', prompt: '알맞은 말을 쓰세요.', text: '나는 친구___ 놀았어요.  엄마___ 웃었어요.', answer: '와, 가' },
          { type: 'short', prompt: '어제 한 일을 \'~했어요\'로 끝나는 한 문장으로 써 보세요.' },
        ],
        easy: { note: '받침이 있으면 과·을·이, 없으면 와·를·가예요.', items: [
          { type: 'choice', prompt: '일기에 어울리는 말에 ○ 하세요.', options: ['놀았어요.', '놀 거예요.'], answer: '놀았어요.' },
          { type: 'blank', prompt: '문장을 따라 쓰세요.', text: '나는 학교에 갔어요.', answer: '나는 학교에 갔어요.' },
          { type: 'choice', prompt: '\'친구( ) 놀았어요.\' 알맞은 말에 ○ 하세요.', options: ['와', '과'], answer: '와' },
          { type: 'draw', prompt: '어제 한 일을 그리고 한 문장 써 보세요.' },
        ] },
      },
      differentiation: {
        easy: '가르기는 카드가 넷이고 맞게 놓으면 초록 테두리가 생겨요. 조사 채우기는 카드가 적어요.',
        base: '카드를 모두 놓은 뒤 확인하고, 받침이 있는지 스스로 살펴 조사를 골라요.',
        challenge: '더 해 보기(때를 나타내는 말, 네 낱말 문장 만들기)까지 풀어요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 일기에 앞으로 할 일을 쓴다 → 일기는 이미 있었던 일을 쓴다고 말하고 때 낱말을 짚게 한다. ② 조사(과/와, 을/를, 이/가)를 소리만 듣고 쓴다 → 앞 낱말의 마지막 글자에 받침이 있는지 손가락으로 짚어 보게 한다. ③ 낱말 순서가 어색하다 → 누가·언제·무엇을·어떻게의 차례로 소리 내어 읽어 보게 한다. 문장은 모두 새로 지은 것이다.',
    }),

    // ───────────────────────── 12. 연습: 하루 일을 문단으로 ─────────────────────────
    L(12, {
      title: '먼저·그다음·마지막으로 이어 하루 일 쓰기',
      objective: '일기 글에서 일이 일어난 차례를 먼저·그다음·마지막으로 이어 쓰고, 문장을 처음·가운데·끝으로 나눌 수 있다.',
      standards: WRITE,
      illustration: ART('three paper sentence strips arranged top to bottom like a short paragraph with small connecting arrows', '먼저  그다음  마지막으로'),
      stages: ST(
        { teacher: '"지난 시간에 일기 문장의 끝과 조사를 배웠어요. 오늘은 문장을 이어서 한 덩어리의 글로 써 봐요." 칠판에 \'먼저 손을 씻었어요. 그다음 밥을 먹었어요. 마지막으로 이를 닦았어요.\'를 쓴다. "이어 주는 말이 있으니 순서가 잘 보여요."', student: '이어 주는 말로 문장을 이어 하루 일을 써 봐요.', demo: { tool: 'story', options: { mode: 'fill', slots: [{ id: 'a', label: '밥을 먹었어요. ___ 이를 닦았어요.' }], cards: [{ id: 'next', text: '그다음' }, { id: 'but', text: '그런데' }] }, sequence: [{ fill: { a: 'next' } }] } },
        '"오늘 만든 글에서 이어 주는 말을 하나 찾아 말해 볼까요?" 두세 명이 말하고 짝과 바꾸어 읽는다. 출구 1번에서 순서와 다른 낱말을 고른 학생에게는 앞뒤 일을 다시 읽어 보며 차례를 확인하게 한다.',
        [
          A('a1', '활동 1. 이어 주는 말로 문장 이어 쓰기', 13, 'story',
            '"앞의 일과 뒤의 일을 이어 주는 말이 있어요. 일이 일어난 차례를 알려 주는 말을 찾아봐요." 문장을 소리 내어 읽게 한다. \'마지막으로\'를 처음에 놓는 학생에게는 "처음 한 일은 무엇이었나요?"라고 되묻는다.',
            '문장을 차례대로 놓고 이어 주는 말을 빈칸에 놓아요.', LV,
            [
              ORDER('문장 카드를 일이 일어난 차례대로 놓아 보세요.', [C('f', '먼저 반죽을 만들었어요.'), C('s', '그다음 모양을 빚었어요.'), C('t', '마지막으로 가족과 먹었어요.')], ['f', 's', 't'], 0.2),
              ORDER('문장 카드를 일이 일어난 차례대로 놓아 보세요.', [C('a', '아침에 눈이 왔어요.'), C('b', '그래서 눈사람을 만들었어요.'), C('c', '눈사람이 녹아서 슬펐어요.')], ['a', 'b', 'c'], 0.25),
              FILL('빈칸에 알맞은 이어 주는 말을 놓아 보세요.', [{ id: 'a', label: '밥을 먹었어요. ___ 이를 닦았어요.' }, { id: 'b', label: '___ 잠을 잤어요.' }], [C('next', '그다음'), C('last', '마지막으로'), C('first', '먼저'), C('but', '그런데')], { a: 'next', b: 'last' }, 0.25),
              ORDER('더 해 보기: 문장 카드를 일이 일어난 차례대로 놓아 보세요.', [C('d1', '먼저 모래를 모았어요.'), C('d2', '그다음 모래성을 쌓았어요.'), C('d3', '그런데 파도가 와서 무너졌어요.'), C('d4', '마지막으로 다시 쌓기로 했어요.')], ['d1', 'd2', 'd3', 'd4'], 0.3, { extra: true }),
            ]),
          A('a2', '활동 2. 처음·가운데·끝 문장 나누기', 13, 'mindmap',
            '"일기 글의 처음에는 때와 곳, 가운데에는 한 일, 끝에는 마음이 와요." 세 칸의 이름을 소리 내어 읽고 문장을 놓게 한다. 마음 문장을 처음 칸에 넣는 학생에게는 "처음에는 언제 어디에서인지를 알려 줘요. 마음은 어디에 오면 좋을까요?"라고 묻는다.',
            '문장을 처음·가운데·끝으로 나누고 이어 주는 말을 이어요.', LV,
            [
              SORT('문장 카드를 처음·가운데·끝 칸에 알맞게 놓아 보세요.', '일기 글', [{ id: 'start', label: '처음(때와 곳)' }, { id: 'mid', label: '가운데(한 일)' }, { id: 'end', label: '끝(마음)' }], [C('s1', '일요일에 공원에 갔어요.'), C('m1', '연을 날렸어요.'), C('e1', '바람이 시원해서 좋았어요.'), C('s2', '오늘 아침 운동장에 갔어요.'), C('m2', '친구와 달리기를 했어요.'), C('e2', '정말 신났어요.')], { start: ['s1', 's2'], mid: ['m1', 'm2'], end: ['e1', 'e2'] }, 0.25,
                { levels: { easy: { prompt: '문장 카드 넷을 처음·가운데 칸에 알맞게 놓아 보세요.', toolOptions: { slots: [{ id: 'start', label: '처음(때와 곳)' }, { id: 'mid', label: '가운데(한 일)' }], cards: [C('s1', '일요일에 공원에 갔어요.'), C('m1', '연을 날렸어요.'), C('s2', '오늘 아침 운동장에 갔어요.'), C('m2', '친구와 달리기를 했어요.')] }, target: { sort: { start: ['s1', 's2'], mid: ['m1', 'm2'] } } } } }),
              MATCH('두 문장을 이어 주는 말을 이어 보세요.', '이어 주는 말', [{ id: 'l1', label: '비가 왔어요. ( ) 우산을 썼어요.' }, { id: 'l2', label: '밥을 먹었어요. ( ) 이를 닦았어요.' }], [C('so', '그래서'), C('next', '그다음'), C('but', '그런데')], { l1: 'so', l2: 'next' }, 0.25),
              PICK('일기 글의 끝에 쓰면 좋은 문장을 모두 골라 보세요.', '글의 끝', [C('a', '정말 즐거웠어요.'), C('b', '다음에 또 하고 싶어요.'), C('c', '10월 3일 토요일 맑음')], ['a', 'b'], 0.25,
                { conclude: '일기의 끝에는 그날의 마음이나 다음에 하고 싶은 일을 써요.' }),
              PICK('더 해 보기: 이어 주는 말을 모두 골라 보세요.', '이어 주는 말', [C('next', '그다음'), C('last', '마지막으로'), C('park', '공원에서')], ['next', 'last'], 0.3, { extra: true }),
            ]),
        ],
        [
          CH('\'밥을 먹었어요. ( ) 이를 닦았어요.\' 괄호에 알맞은 이어 주는 말은 어느 것일까요?', ['그다음', '그런데', '그러나'], 0, '밥을 먹은 다음에 이를 닦았으므로 순서를 알려 주는 그다음이 알맞아요.', 0.2),
          { type: 'tool', tool: 'mindmap', options: { mode: 'order', slots: ['첫째', '둘째', '셋째'], cards: [C('a', '먼저 씨앗을 심었어요.'), C('b', '그다음 물을 주었어요.'), C('c', '마지막으로 싹이 났어요.')] }, prompt: '화분 일기 문장 카드를 일이 일어난 차례대로 놓아 보세요.', target: { order: ['a', 'b', 'c'] }, difficulty: 0.25 },
          MOOD,
        ]),
      worksheet: {
        title: '하루 일을 이어 쓰기',
        items: [
          { type: 'table', prompt: '문장을 읽고 차례를 번호로 쓰세요. (1 처음, 2 가운데, 3 끝)', columns: ['문장', '번호'], cells: [['일요일에 공원에 갔어요.', ''], ['연을 날렸어요.', ''], ['정말 신났어요.', '']] },
          { type: 'choice', prompt: '\'비가 왔어요. ( ) 우산을 썼어요.\' 괄호에 알맞은 말은 어느 것일까요?', options: ['그래서', '그런데'], answer: '그래서' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '먼저 손을 씻었어요. ______ 밥을 먹었어요.', answer: '그다음' },
          { type: 'short', prompt: '이어 주는 말을 넣어 어제 한 일 두 문장을 써 보세요.' },
        ],
        easy: { note: '이어 주는 말이 순서를 알려 줘요.', items: [
          { type: 'choice', prompt: '순서를 알려 주는 말에 ○ 하세요.', options: ['그다음', '공원에서'], answer: '그다음' },
          { type: 'blank', prompt: '말을 따라 쓰세요.', text: '먼저  그다음  마지막으로', answer: '먼저 그다음 마지막으로' },
          { type: 'choice', prompt: '글의 끝에 쓰면 좋은 문장에 ○ 하세요.', options: ['정말 즐거웠어요.', '10월 3일'], answer: '정말 즐거웠어요.' },
          { type: 'draw', prompt: '오늘 한 일을 세 장면으로 그려 보세요.' },
        ] },
      },
      differentiation: {
        easy: '차례 놓기는 카드가 셋이고 맞게 놓으면 초록 테두리가 생겨요. 처음·가운데 두 칸으로 나누는 것부터 시작해요.',
        base: '카드를 모두 놓은 뒤 확인하고, 이어 주는 말을 스스로 골라요.',
        challenge: '더 해 보기(네 문장 차례 놓기, 이어 주는 말 고르기)까지 풀어요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 이어 주는 말을 쓰지 않고 문장을 나열만 한다 → 먼저, 그다음, 마지막으로를 붙여 읽으며 차이를 느끼게 한다. ② 이어 주는 말의 뜻을 헷갈린다 → \'그래서\'는 앞의 일 때문에 뒤의 일이 생길 때 쓴다고 알려 준다. ③ 글 끝에 마음 대신 한 일을 또 쓴다 → 그날 마음이 어땠는지 한마디를 덧붙이게 한다. 문장은 모두 이 단원을 위해 새로 지은 것이다.',
    }),

    // ───────────────────────── 13. 고쳐 쓰기와 공유 ─────────────────────────
    L(13, {
      title: '일기 글에서 틀린 글자 고쳐 쓰고 친구와 나누기',
      objective: '일기 글에서 소리 나는 대로 잘못 쓴 낱말을 바르게 고치고, 친구가 알려 준 고칠 점을 고마운 마음으로 받아들일 수 있다.',
      standards: WRITE,
      illustration: ART('a paper child using a pencil to fix one word on a diary page while a friend points kindly', '고쳐 써요'),
      stages: ST(
        { teacher: '"일기를 다 쓰고 나면 소리 내어 다시 읽어 봐요. 틀린 글자를 찾으면 고쳐 써요." 칠판에 \'나는 밥을 머거써요.\'를 쓰고 소리 내어 읽으며 \'먹었어요\'로 고친다. "받침을 빼먹거나 소리 나는 대로 쓰기 쉬운 낱말을 다시 살펴봐요."', student: '일기 글에서 틀린 글자를 고쳐 쓰고 친구와 나누는 방법을 알아봐요.', demo: { tool: 'mindmap', options: { mode: 'match', topic: '고쳐 쓰기', shuffle: false, slots: [{ id: 'w', label: '머거써요' }], cards: [{ id: 'right', text: '먹었어요' }, { id: 'wrong', text: '먹어요' }] }, sequence: [{ match: { w: 'right' } }] } },
        '"오늘 고쳐 쓴 낱말 가운데 하나를 짝에게 말해 볼까요?" 두세 명이 \'~를 ~로 고쳤어요.\' 모양으로 말한다. 출구 1번에서 구겨 버리는 것을 고른 학생에게는 틀린 곳만 고쳐도 일기가 더 좋아진다는 것을 말해 준다.',
        [
          A('a1', '활동 1. 틀린 글자 찾아 바르게 고쳐 쓰기', 13, 'mindmap',
            '"소리 내어 읽어 보고 소리 나는 대로 쓴 곳이 없는지 찾아봐요." 틀린 낱말을 짚고 바른 낱말과 견주어 읽게 한다. \'갔써요\'를 \'갔어요\'로 고쳐도 받침을 빠뜨리는 학생에게는 "과거 끝말 \'었\'과 \'았\'을 다시 살펴볼까요?"라고 묻는다.',
            '바르게 쓴 낱말을 고르고 틀린 낱말을 바른 낱말로 이어요.', LV,
            [
              SORT('낱말 카드를 바르게 쓴 것과 틀리게 쓴 것으로 나누어 보세요.', '고쳐 쓰기', [{ id: 'good', label: '바르게 썼어요' }, { id: 'bad', label: '틀리게 썼어요' }], [C('r1', '먹었어요'), C('w1', '머거써요'), C('r2', '갔어요'), C('w2', '갔써요'), C('r3', '읽었어요'), C('w3', '일거써요')], { good: ['r1', 'r2', 'r3'], bad: ['w1', 'w2', 'w3'] }, 0.25,
                { levels: { easy: { prompt: '카드 넷을 바르게 쓴 것과 틀리게 쓴 것으로 나누어 보세요.', toolOptions: { cards: [C('r1', '먹었어요'), C('w1', '머거써요'), C('r2', '갔어요'), C('w2', '갔써요')] }, target: { sort: { good: ['r1', 'r2'], bad: ['w1', 'w2'] } } } } }),
              MATCH('틀리게 쓴 낱말과 바르게 고친 낱말을 이어 보세요.', '바르게 고치기', [{ id: 'w1', label: '머거써요' }, { id: 'w2', label: '갔써요' }, { id: 'w3', label: '일거써요' }], [C('r1', '먹었어요'), C('r2', '갔어요'), C('r3', '읽었어요'), C('r4', '먹어요')], { w1: 'r1', w2: 'r2', w3: 'r3' }, 0.3),
              PICK('일기를 다 쓴 뒤에 하면 좋은 일을 모두 골라 보세요.', '다 쓴 뒤에', [C('read', '소리 내어 다시 읽어요'), C('batch', '받침이 맞는지 확인해요'), C('crush', '구겨서 버려요')], ['read', 'batch'], 0.25,
                { conclude: '다 쓴 뒤에는 소리 내어 읽고 받침을 확인하면 틀린 곳을 찾을 수 있어요.' }),
              PICK('더 해 보기: 고쳐 쓴 일기를 친구에게 보여 줄 때 하면 좋은 말을 모두 골라 보세요.', '보여 줄 때', [C('a', '"읽어 봐 줄래?"'), C('b', '"어디가 재미있었어?"'), C('c', '"보지 마!"')], ['a', 'b'], 0.3, { extra: true }),
            ]),
          A('a2', '활동 2. 친구의 말을 듣고 일기 나누기', 13, 'emotion',
            '"친구가 내 일기를 읽고 고칠 곳을 알려 주었어요. 어떻게 하면 좋을까요?" 선택과 결과를 읽고 인물의 마음을 말하게 한다. 눈금은 정답이 없으므로 솔직하게 고르게 한다. 모두 \'잘해요\'를 고른 학생에게는 "가장 고치기 어려웠던 곳은 어디였나요?"라고 묻는다.',
            '이야기 속 인물의 행동을 고르고 내 모습에 알맞은 눈금을 골라요.', LV,
            [
              BR('짝이 민지의 일기에서 틀린 글자를 알려 주었어요. 민지는 어떻게 하면 좋을까요?', '민지', '짝이 "여기 받침을 하나 더 써야 해." 하고 알려 주었어요.', [{ id: 'thanks', text: '"알려 줘서 고마워." 하고 고쳐 써요', result: '일기가 더 바르게 되어 뿌듯해요', mood: '고마움' }, { id: 'angry', text: '화가 나서 일기장을 덮어요', result: '틀린 곳을 그대로 두게 돼요', mood: '속상함', why: '화가 나서 덮으면 틀린 곳을 고칠 수 있을까요?' }, { id: 'ignore', text: '못 들은 척해요', result: '틀린 글자를 계속 쓰게 돼요', mood: '걱정', why: '못 들은 척하면 다음에도 같은 글자를 틀리지 않을까요?' }], 'thanks', 0.15),
              BR('준호가 내 일기를 친구들 앞에서 읽게 되었어요. 어떻게 읽으면 좋을까요?', '준호', '준호가 쓴 일기를 반 친구들 앞에서 읽어 줄 차례가 되었어요.', [{ id: 'clear', text: '또박또박 크게 읽어요', result: '친구들이 준호의 일기를 재미있게 들어요', mood: '뿌듯함' }, { id: 'mumble', text: '작게 얼버무려 읽어요', result: '친구들이 잘 듣지 못해서 다시 물어봐요', mood: '걱정', why: '작게 읽으면 친구들이 일기 내용을 알 수 있을까요?' }], 'clear', 0.2),
              SC('오늘 내 일기를 다시 읽고 고치려고 얼마나 노력했나요? 솔직하게 골라요.', '일기를 다시 읽고 고쳤어요.', '뿌듯함', '일기를 얼마나 다시 읽고 고쳤나요?'),
            ]),
        ],
        [
          CH('일기를 다 쓴 뒤 틀린 글자를 찾는 가장 좋은 방법은 무엇일까요?', ['소리 내어 다시 읽어요', '그냥 덮어요', '구겨서 버려요'], 0, '소리 내어 읽으면 틀린 곳이 귀와 눈에 보여요.', 0.15),
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '고쳐 쓰기', slots: [{ id: 'w', label: '재미이써요' }], cards: [C('r', '재미있어요'), C('x', '재미없어요')] }, prompt: '틀리게 쓴 낱말을 바르게 고쳐 이어 보세요.', target: { match: { w: 'r' } }, difficulty: 0.25 },
          MOOD,
        ]),
      worksheet: {
        title: '고쳐 쓰기',
        items: [
          { type: 'table', prompt: '틀리게 쓴 낱말을 바르게 고쳐 쓰세요.', columns: ['틀린 낱말', '바른 낱말'], cells: [['머거써요', ''], ['갔써요', ''], ['일거써요', '']] },
          { type: 'check', prompt: '일기를 다 쓴 뒤에 하면 좋은 일에 모두 ✓ 하세요.', options: ['소리 내어 다시 읽어요', '받침을 확인해요', '틀린 글자를 그냥 둬요'], answer: '소리 내어 다시 읽어요, 받침을 확인해요' },
          { type: 'choice', prompt: '친구가 틀린 글자를 알려 주었을 때 알맞은 말은 어느 것일까요?', options: ['"알려 줘서 고마워."', '"보지 마."'], answer: '"알려 줘서 고마워."' },
          { type: 'short', prompt: '내 일기에서 고치고 싶은 낱말 하나와 바르게 고친 낱말을 써 보세요.' },
        ],
        easy: { note: '소리 내어 읽고 받침을 살펴요.', items: [
          { type: 'choice', prompt: '바르게 쓴 낱말에 ○ 하세요.', options: ['먹었어요', '머거써요'], answer: '먹었어요' },
          { type: 'blank', prompt: '낱말을 따라 쓰세요.', text: '먹었어요', answer: '먹었어요' },
          { type: 'choice', prompt: '친구에게 할 알맞은 말에 ○ 하세요.', options: ['고마워', '보지 마'], answer: '고마워' },
          { type: 'draw', prompt: '일기를 고쳐 쓰는 내 모습을 그려 보세요.' },
        ] },
      },
      differentiation: {
        easy: '가르기는 카드가 넷이고 맞게 놓으면 초록 테두리가 생겨요. 행동 고르기는 선택이 둘이에요.',
        base: '카드를 모두 놓은 뒤 확인하고, 이야기 결과를 읽고 다시 생각해요.',
        challenge: '더 해 보기(친구에게 보여 줄 때 하는 말)까지 풀고 내 일기를 직접 고쳐 써요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 소리 나는 대로 받침 없이 쓴다 → 소리 내어 읽은 뒤 낱말 아래에 받침이 있는지 손으로 짚어 보게 한다. ② 친구가 틀린 곳을 알려 주면 속상해한다 → 함께 고치면 둘 다 더 잘 쓰게 된다고 말해 준다. ③ 고쳐 쓰기를 귀찮아한다 → 한 낱말만 골라 고쳐도 충분하다고 말해 준다. 자기 평가는 성적에 반영하지 않는다. 인물 이름은 모두 가명이다.',
    }),

    // ───────────────────────── 14. 매체의 종류와 목적 ─────────────────────────
    L(14, {
      title: '그림·글·사진·소리로 알리는 방법과 목적 알기',
      objective: '글, 그림, 사진, 소리처럼 알리는 방법이 여러 가지라는 것을 알고, 알리고 싶은 내용과 목적에 알맞은 방법을 고를 수 있다.',
      standards: MEDIA,
      illustration: ART('a table with a picture book, a photo, a letter card and a small speaker, each paper cutout with a different symbol', '그림  사진  글  소리'),
      stages: ST(
        { teacher: '"내가 겪은 일을 친구에게 알리고 싶어요. 어떤 방법이 있을까요?" 학생들이 말한 방법을 글, 그림, 사진, 소리로 묶어 칠판에 적는다. "그림일기는 그림과 글을 함께 쓰는 방법이에요. 목적에 따라 알맞은 방법이 달라요."', student: '알리는 방법에는 어떤 것이 있고 어떤 목적에 쓰는지 알아봐요.', demo: { tool: 'mindmap', options: { topic: '알리는 방법', shuffle: false, slots: [{ id: 'see', label: '눈으로 봐요' }, { id: 'hear', label: '귀로 들어요' }], cards: [{ id: 'photo', text: '사진' }, { id: 'radio', text: '라디오 방송' }] }, sequence: [{ sort: { see: ['photo'], hear: ['radio'] } }] } },
        '"오늘 내가 가장 쓰고 싶은 알리는 방법은 무엇인가요? 왜 그런가요?" 두세 명이 말한다. 출구 1번에서 라디오 방송을 눈으로 보는 것으로 고른 학생에게는 소리로 전하는 방법임을 떠올리게 한다.',
        [
          A('a1', '활동 1. 알리는 방법을 눈과 귀로 나누기', 13, 'mindmap',
            '"눈으로 보는 것인지, 귀로 듣는 것인지 생각해요." 카드를 하나씩 읽고 어떻게 알게 되는지 말하게 한다. \'편지\'를 귀로 듣는 것에 넣는 학생에게는 "편지를 읽을 때는 무엇을 쓰나요?"라고 묻는다.',
            '알리는 방법을 눈으로 보는 것과 귀로 듣는 것으로 나누고 목적을 이어요.', LV,
            [
              SORT('카드를 눈으로 보는 것과 귀로 듣는 것으로 나누어 보세요.', '알리는 방법', [{ id: 'see', label: '눈으로 봐요' }, { id: 'hear', label: '귀로 들어요' }], [C('book', '그림책'), C('photo', '사진'), C('letter', '편지'), C('radio', '라디오 방송'), C('song', '노랫소리'), C('call', '전화 목소리')], { see: ['book', 'photo', 'letter'], hear: ['radio', 'song', 'call'] }, 0.2,
                { levels: { easy: { prompt: '카드 넷을 눈으로 보는 것과 귀로 듣는 것으로 나누어 보세요.', toolOptions: { cards: [C('book', '그림책'), C('radio', '라디오 방송'), C('photo', '사진'), C('call', '전화 목소리')] }, target: { sort: { see: ['book', 'photo'], hear: ['radio', 'call'] } } } } }),
              MATCH('알리고 싶은 목적과 알맞은 방법을 이어 보세요.', '목적과 방법', [{ id: 'g1', label: '길을 알려 주려고' }, { id: 'g2', label: '고마운 마음을 전하려고' }, { id: 'g3', label: '있었던 일을 남기려고' }], [C('map', '안내 그림'), C('card', '편지 카드'), C('diary', '그림일기'), C('test', '시험지')], { g1: 'map', g2: 'card', g3: 'diary' }, 0.25),
              PICK('그림과 글을 함께 쓰는 것을 모두 골라 보세요.', '그림과 글', [C('diary', '그림일기'), C('book', '그림책'), C('radio', '라디오 방송')], ['diary', 'book'], 0.25,
                { conclude: '그림과 글을 함께 쓰면 있었던 일을 더 쉽게 알려 줄 수 있어요.' }),
              PICK('더 해 보기: 소리로 전하는 방법을 모두 골라 보세요.', '소리로 전해요', [C('radio', '라디오 방송'), C('call', '전화 목소리'), C('letter', '편지')], ['radio', 'call'], 0.3, { extra: true }),
            ]),
          A('a2', '활동 2. 알리고 싶은 내용에 알맞은 방법 고르기', 13, 'mindmap',
            '"알리고 싶은 내용에 따라 알맞은 방법이 달라요. 어떻게 전하면 가장 잘 알릴 수 있을지 생각해요." 방법마다 장점을 말해 보게 한다. 길 안내를 노랫소리로 고르는 학생에게는 "길은 눈으로 보면 더 잘 알 수 있을까요?"라고 되묻는다.',
            '알리고 싶은 내용과 알맞은 방법을 이어요.', LV,
            [
              MATCH('알리고 싶은 내용과 알맞은 방법을 이어 보세요.', '내용과 방법', [{ id: 'c1', label: '내가 본 꽃의 색깔' }, { id: 'c2', label: '친구에게 노래 들려주기' }, { id: 'c3', label: '비 오는 날에 있었던 일' }], [C('photo', '그림이나 사진'), C('sound', '소리'), C('diary', '그림일기'), C('test', '시험지')], { c1: 'photo', c2: 'sound', c3: 'diary' }, 0.25),
              SORT('내용 카드를 그림일기에 알맞은 것과 다른 방법이 좋은 것으로 나누어 보세요.', '그림일기에 알맞아요', [{ id: 'diary', label: '그림일기에 알맞아요' }, { id: 'other', label: '다른 방법이 좋아요' }], [C('a', '오늘 있었던 일'), C('b', '그날의 내 마음'), C('c', '친구에게 노래 들려주기'), C('d', '길 안내하기')], { diary: ['a', 'b'], other: ['c', 'd'] }, 0.25),
              PICK('엄마께 고마운 마음을 전하는 방법을 모두 골라 보세요.', '고마운 마음', [C('card', '편지 카드를 써요'), C('say', '직접 말해요'), C('hide', '아무 말도 하지 않아요')], ['card', 'say'], 0.25),
              PICK('더 해 보기: 학교 소식을 알리는 방법을 모두 골라 보세요.', '소식 알리기', [C('post', '그림과 글이 있는 알림판'), C('talk', '반 친구들 앞에서 말하기'), C('mute', '몰래 숨기기')], ['post', 'talk'], 0.3, { extra: true }),
            ]),
        ],
        [
          CH('라디오 방송은 어떤 방법으로 알려 주나요?', ['귀로 들어요', '눈으로만 봐요', '손으로 만져요'], 0, '라디오 방송은 소리로 전하는 방법이므로 귀로 들어요.', 0.1),
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '눈으로 봐요', basket: '눈으로 보는 것', cards: [C('photo', '사진'), C('song', '노랫소리'), C('book', '그림책')] }, prompt: '눈으로 보는 것을 모두 골라 보세요.', target: { pick: ['photo', 'book'] }, difficulty: 0.2 },
          MOOD,
        ]),
      worksheet: {
        title: '알리는 방법과 목적',
        items: [
          { type: 'check', prompt: '귀로 듣는 것에 모두 ✓ 하세요.', options: ['라디오 방송', '그림책', '전화 목소리'], answer: '라디오 방송, 전화 목소리' },
          { type: 'table', prompt: '알리고 싶은 내용과 알맞은 방법을 이어서 쓰세요. (그림일기, 안내 그림, 편지 카드)', columns: ['알리고 싶은 내용', '방법'], cells: [['길을 알려 주고 싶어요', ''], ['고마운 마음을 전하고 싶어요', ''], ['오늘 있었던 일을 남기고 싶어요', '']] },
          { type: 'choice', prompt: '그림과 글을 함께 쓰는 것은 어느 것일까요?', options: ['그림일기', '라디오 방송'], answer: '그림일기' },
          { type: 'short', prompt: '내가 알리고 싶은 것 하나와 알맞은 방법을 써 보세요.' },
        ],
        easy: { note: '눈으로 보는 것과 귀로 듣는 것을 나누어요.', items: [
          { type: 'choice', prompt: '눈으로 보는 것에 ○ 하세요.', options: ['사진', '라디오 방송'], answer: '사진' },
          { type: 'blank', prompt: '낱말을 따라 쓰세요.', text: '그림일기', answer: '그림일기' },
          { type: 'choice', prompt: '귀로 듣는 것에 ○ 하세요.', options: ['전화 목소리', '편지'], answer: '전화 목소리' },
          { type: 'draw', prompt: '내가 좋아하는 알리는 방법을 그려 보세요.' },
        ] },
      },
      differentiation: {
        easy: '가르기는 카드가 넷이고 맞게 놓으면 초록 테두리가 생겨요. 이어 보기는 카드가 적어요.',
        base: '카드를 모두 놓은 뒤 확인하고, 목적에 알맞은 방법을 스스로 이어요.',
        challenge: '더 해 보기(소리로 전하는 방법, 소식 알리기)까지 풀고 내가 쓰고 싶은 방법을 말해요.',
      },
      teacherNotes: '자주 보이는 어려움: ① 눈으로 보고 귀로도 듣는 것이 헷갈린다 → 오늘은 가장 중요한 방법 하나만 고르게 한다. ② 목적과 상관없이 좋아하는 방법만 고른다 → 길 안내와 고마움 전하기처럼 목적이 다르면 방법도 달라진다고 말한다. ③ 일기와 편지를 같다고 생각한다 → 일기는 나를 위해 남기고 편지는 읽을 사람에게 전한다고 말한다. 이 단원에서는 실제 서비스 이름을 쓰지 않고 일반 이름만 사용한다.',
    }),

    // ───────────────────────── 15. 정리: 정보를 찾고 믿을 만한지 따지기 ─────────────────────────
    L(15, {
      title: '일기에 쓸 정보 확인하는 방법과 이 단원 되짚기',
      objective: '일기에 쓸 정보를 찾고 믿을 만한지 확인하는 방법을 알고, 이 단원에서 그림일기를 쓰고 발표한 내 모습을 돌아볼 수 있다.',
      standards: MEDIA,
      illustration: ART('a paper child checking a fact with a magnifying glass while an adult points to a book', '직접 확인해요'),
      stages: ST(
        { teacher: '"일기에 \'오늘 날씨는 맑음\'이라고 쓰고 싶은데 날씨가 기억나지 않아요. 어떻게 알 수 있을까요?" 창밖을 보고 어른께 물어보는 방법을 말해 본다. "소문을 그대로 믿지 않고, 직접 보거나 믿을 만한 곳에서 확인해요."', student: '일기에 쓸 정보를 어떻게 확인하는지 알아보고, 이 단원에서 한 일을 돌아봐요.', demo: { tool: 'mindmap', options: { mode: 'match', topic: '확인하는 방법', shuffle: false, slots: [{ id: 'w', label: '오늘 날씨가 궁금해요' }], cards: [{ id: 'look', text: '창밖을 보고 어른께 물어요' }, { id: 'guess', text: '아무 말이나 믿어요' }] }, sequence: [{ match: { w: 'look' } }] } },
        '"이 단원에서 가장 잘한 일은 무엇인가요?" 두세 명이 말하고 서로 박수를 쳐 준다. 출구 1번에서 소문을 그대로 믿는 것을 고른 학생에게는 직접 본 것과 들은 것의 차이를 다시 떠올리게 한다.',
        [
          A('a1', '활동 1. 믿을 만한 방법으로 확인하기', 13, 'mindmap',
            '"궁금한 것이 생기면 어떻게 알아볼까요?" 직접 보기, 어른께 묻기, 책에서 찾기를 말해 본다. 소문을 믿는 방법을 고르는 학생에게는 "소문은 누가 확인한 것일까요?"라고 되묻는다.',
            '궁금한 것을 확인하는 방법을 이어 보고 믿을 만한 방법을 골라요.', LV,
            [
              MATCH('궁금한 것과 알아보는 방법을 이어 보세요.', '알아보는 방법', [{ id: 'q1', label: '오늘 날씨가 궁금해요' }, { id: 'q2', label: '친구가 한 일이 궁금해요' }, { id: 'q3', label: '동물 이름을 모르겠어요' }], [C('look', '창밖을 보고 어른께 물어요'), C('ask', '친구에게 직접 물어요'), C('book', '그림책에서 찾아봐요'), C('guess', '아무거나 믿어요')], { q1: 'look', q2: 'ask', q3: 'book' }, 0.2),
              SORT('방법 카드를 믿을 만한 방법과 믿기 어려운 방법으로 나누어 보세요.', '확인하는 방법', [{ id: 'good', label: '믿을 만해요' }, { id: 'bad', label: '믿기 어려워요' }], [C('see', '내 눈으로 직접 확인해요'), C('adult', '어른께 물어봐요'), C('rumor', '소문을 그대로 믿어요'), C('book', '책에서 찾아봐요'), C('guess', '아무 말이나 믿어요'), C('noname', '누가 말했는지 모르는 말을 믿어요')], { good: ['see', 'adult', 'book'], bad: ['rumor', 'guess', 'noname'] }, 0.25,
                { levels: { easy: { prompt: '카드 넷을 믿을 만한 방법과 믿기 어려운 방법으로 나누어 보세요.', toolOptions: { cards: [C('see', '내 눈으로 직접 확인해요'), C('rumor', '소문을 그대로 믿어요'), C('adult', '어른께 물어봐요'), C('guess', '아무 말이나 믿어요')] }, target: { sort: { good: ['see', 'adult'], bad: ['rumor', 'guess'] } } } } }),
              PICK('일기를 쓰기 전에 확인하면 좋은 것을 모두 골라 보세요.', '확인해요', [C('mine', '내가 직접 겪은 일인지'), C('word', '틀린 낱말이 없는지'), C('addr', '친구 집 주소를 써도 되는지')], ['mine', 'word'], 0.25,
                { conclude: '직접 겪은 일인지와 틀린 낱말이 없는지를 확인하면 믿을 만한 일기가 돼요.' }),
              PICK('더 해 보기: 이 단원에서 배운 일을 모두 골라 보세요.', '이 단원에서', [C('p1', '친구 그림을 쓸 때 허락받기'), C('p2', '일기 끝에 마음 쓰기'), C('p3', '소문을 그대로 믿기')], ['p1', 'p2'], 0.3, { extra: true }),
            ]),
          A('a2', '활동 2. 이 단원에서 내 모습 돌아보기', 13, 'emotion',
            '"이 단원에서 그림일기를 쓰고 발표하고 고쳐 쓴 내 모습을 떠올려 봐요. 정답은 없으니 솔직하게 눈금을 골라요." 눈금을 고르고 잘한 점 하나를 짝에게 말하게 한다. 모두 \'잘해요\'를 고른 학생에게는 "가장 힘들었던 일은 무엇이었나요?"라고 묻는다.',
            '이 단원에서 내 모습에 알맞은 눈금을 골라요.', LV,
            [
              SC('그림일기를 쓰는 것은 얼마나 잘했나요? 솔직하게 골라요.', '그림과 글로 하루 일을 썼어요.', '뿌듯함', '그림일기를 얼마나 잘 썼나요?'),
              SC('친구의 발표를 듣고 정리하는 것은 얼마나 잘했나요? 솔직하게 골라요.', '친구 발표를 듣고 언제, 어디서, 무엇을 했는지 정리했어요.', '편안함', '발표를 듣고 얼마나 잘 정리했나요?'),
              SC('쓴 일기를 다시 읽고 고쳐 쓰는 것은 얼마나 잘했나요? 솔직하게 골라요.', '일기를 소리 내어 읽고 틀린 곳을 고쳤어요.', '용기', '일기를 얼마나 잘 고쳤나요?'),
            ]),
        ],
        [
          CH('오늘 날씨가 기억나지 않을 때 알맞은 방법은 어느 것일까요?', ['창밖을 보고 어른께 물어요', '아무 말이나 믿어요', '소문을 그대로 써요'], 0, '직접 보고 믿을 만한 어른께 확인하는 것이 좋은 방법이에요.', 0.15),
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '그림일기에 써요', basket: '들어가는 것', cards: [C('date', '날짜'), C('text', '있었던 일을 쓴 글'), C('addr', '친구 집 주소')] }, prompt: '그림일기에 알맞게 들어가는 것을 모두 골라 보세요.', target: { pick: ['date', 'text'] }, difficulty: 0.2 },
          MOOD,
        ]),
      worksheet: {
        title: '그림일기를 써요 되짚기',
        items: [
          { type: 'check', prompt: '이 단원에서 배운 것에 모두 ✓ 하세요.', options: ['그림일기의 칸 알기', '친구 발표 듣고 정리하기', '틀린 글자 고쳐 쓰기'], answer: '그림일기의 칸 알기, 친구 발표 듣고 정리하기, 틀린 글자 고쳐 쓰기' },
          { type: 'table', prompt: '궁금한 것과 알아보는 방법을 이어서 쓰세요. (창밖을 봐요, 친구에게 물어요, 책에서 찾아요)', columns: ['궁금한 것', '방법'], cells: [['오늘 날씨', ''], ['친구가 한 일', ''], ['동물 이름', '']] },
          { type: 'choice', prompt: '믿을 만한 확인 방법은 어느 것일까요?', options: ['직접 보고 어른께 물어봐요', '소문을 그대로 믿어요'], answer: '직접 보고 어른께 물어봐요' },
          { type: 'table', prompt: '내 실력에 ○ 하세요.', columns: ['내 모습', '아직', '조금', '잘해요'], cells: [['그림일기를 써요', '', '', ''], ['발표를 듣고 정리해요', '', '', ''], ['고쳐 써요', '', '', '']] },
        ],
        easy: { note: '이 단원에서 한 일을 하나씩 떠올려요.', items: [
          { type: 'choice', prompt: '그림일기에 들어가는 것에 ○ 하세요.', options: ['날짜', '시험 점수'], answer: '날짜' },
          { type: 'blank', prompt: '낱말을 따라 쓰세요.', text: '그림일기', answer: '그림일기' },
          { type: 'choice', prompt: '믿을 만한 방법에 ○ 하세요.', options: ['직접 확인해요', '소문을 믿어요'], answer: '직접 확인해요' },
          { type: 'draw', prompt: '이 단원에서 가장 좋았던 일을 그려 보세요.' },
        ] },
      },
      differentiation: {
        easy: '이어 보기는 낱말이 셋이고, 가르기는 카드가 넷이에요. 자기 평가 눈금은 세 칸이에요.',
        base: '카드를 모두 놓은 뒤 확인하고, 믿을 만한 방법을 스스로 골라요.',
        challenge: '더 해 보기(이 단원에서 배운 일)까지 풀고 그림일기 한 장을 직접 완성해요.',
      },
      teacherNotes: '이 차시는 정리 시간이라 새로운 내용을 가르치지 않는다. 자주 보이는 어려움: ① 직접 본 것과 들은 것을 구별하지 못한다 → 내 눈으로 본 것과 남에게 들은 것에 다른 색 동그라미를 치게 한다. ② 믿을 만한 방법을 한 가지로만 생각한다 → 직접 보기, 어른께 묻기, 책에서 찾기 세 가지를 모두 말해 보게 한다. ③ 자기 평가에서 모든 눈금을 같은 곳에 둔다 → 이 단원에서 한 장면을 떠올려 고르게 한다. 자기 평가는 성적에 반영하지 않는다.',
    }),

  ];

  PaperLessons.registerUnit({
    id: U.id, schema: 'edu-unit.v1', catalogUnit: U.catalogUnit, grade: 1, subject: '국어', unitTitle: U.unitTitle,
    flow: '그림일기에 날짜·날씨·그림·글 칸이 있다는 것을 알고, 그림과 글이 같은 일을 말하도록 짝 지어 봅니다. 친구의 그림과 이름을 쓸 때 허락을 받고 개인정보를 쓰지 않는 약속을 익힙니다. 그림일기를 누구에게 왜 발표할지 정하고, 질문과 대답을 주고받으며 친구 발표를 듣고 언제·어디서·누구와·무엇을 했는지 정리하고 듣는 태도를 돌아봅니다. 쓸 일과 읽을 사람을 정해 일기 글을 쓰고, 문장 끝·조사·이어 주는 말을 다듬어 고쳐 씁니다. 마지막으로 알리는 방법의 종류와 믿을 만한 확인 방법을 알아보고 단원을 되짚습니다.',
    refs: {},
    lessons,
  });
})();
