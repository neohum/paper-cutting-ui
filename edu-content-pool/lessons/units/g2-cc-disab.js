/* 2학년 창체 법정교육 — 장애인식개선 (2차시).
 * 근거: 장애인복지법 제25조·같은 법 시행령 제16조(매년 1회·1시간 이상), 범교과 기준 연 2시간(research-mandatory.md 표).
 * 2학년 범위: 점자(손가락으로 읽는 글자)·수어(손과 표정으로 하는 말)·점자 블록, 점자 블록 위에 물건 두지 않기, 놀림·흉내 대신 존중하는 말.
 * 1학년 단원(휠체어·흰지팡이·보청기, "도와줄까?" 묻기)과 겹치지 않게 짠다. 수어 낱말의 손 모양은 그리지 않는다(정확한 동작 확인 불가).
 * 장면·인물은 이 단원을 위해 지은 것이다(가명 한 글자). '장애인' 낱말을 쓴다. */
(function () {
  const ID = 'g2-cc-disab', GRADE = 2, TITLE = '장애인식개선';
  const UNIT = `g${GRADE}-창체-${ID.replace(/^g\d+-cc-/, '')}`;
  const base = (n) => ({
    id: `${ID}-${String(n).padStart(2, '0')}`, schema: 'edu-lesson.v1',
    catalog: { unit: UNIT, lesson: n },
    grade: GRADE, subject: '창체', unitTitle: TITLE,
    standards: [],
    minutes: 40,
    formats: ['chromebook', 'projector', 'print'],
  });
  const PROMPT = (what) => `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`;
  const SCENE = (text, extra = []) => ({ viewBox: [480, 270], layers: [
    { motif: 'sun', x: 410, y: 58, s: 0.8 }, { motif: 'cloud', x: 120, y: 52 }, { motif: 'hills', y: 204 },
    { motif: 'house', x: 96, y: 214, color: 'sky', s: 0.9 }, { motif: 'tree', x: 380, y: 214 }, ...extra,
    { motif: 'text', x: 240, y: 140, text, size: 22 },
  ] });
  // 문항 틀: MS 나누기, MM 잇기, MP 고르기(mindmap) / EB 갈림길, ES 나누기, EM 잇기, EP 고르기(emotion) / SO 차례, SF 말풍선(story) / KS 식판 나누기, KP 고르기, KO 차례(kitchen) / TO 시간 띠 차례, TS 시간 띠 나누기(timeline) / WS·WF 낱말 카드(wordcards)
  const MS = (prompt, topic, slots, cards, sort, d, more) => ({ prompt, toolOptions: { topic, slots, cards }, target: { sort }, difficulty: d, ...more });
  const MM = (prompt, topic, slots, cards, match, d, more) => ({ prompt, toolOptions: { mode: 'match', topic, slots, cards }, target: { match }, difficulty: d, ...more });
  const MP = (prompt, topic, cards, pick, d, more) => ({ prompt, toolOptions: { mode: 'pick', topic, basket: topic, cards }, target: { pick }, difficulty: d, ...more });
  const EB = (prompt, situation, choices, choice, d, more) => ({ prompt, toolOptions: { mode: 'branch', situation, choices }, target: { choice }, difficulty: d, ...more });
  const ES = (prompt, slots, cards, sort, d, more) => ({ prompt, toolOptions: { mode: 'sort', slots, cards, weather: false }, target: { sort }, difficulty: d, ...more });
  const EM = (prompt, slots, cards, match, d, more) => ({ prompt, toolOptions: { mode: 'match', slots, cards }, target: { match }, difficulty: d, ...more });
  const EP = (prompt, basket, cards, pick, d, more) => ({ prompt, toolOptions: { mode: 'pick', basket, cards, weather: false }, target: { pick }, difficulty: d, ...more });
  const SO = (prompt, title, slots, cards, order, d, more) => ({ prompt, toolOptions: { title, slots, cards }, target: { order }, difficulty: d, ...more });
  const SF = (prompt, slots, cards, fill, d, more) => ({ prompt, toolOptions: { mode: 'fill', slots, cards }, target: { fill }, difficulty: d, ...more });
  const KS = (prompt, slots, cards, sort, d, more) => ({ prompt, toolOptions: slots ? { slots, groups: false, cards } : { cards }, target: { sort }, difficulty: d, ...more });
  const KP = (prompt, basket, cards, pick, d, more) => ({ prompt, toolOptions: { mode: 'pick', basket, cards }, target: { pick }, difficulty: d, ...more });
  const KO = (prompt, cards, order, d, more) => ({ prompt, toolOptions: { mode: 'order', cards }, target: { order }, difficulty: d, ...more });
  const TO = (prompt, axis, cards, order, d, more) => ({ prompt, toolOptions: { axis, cards }, target: { order }, difficulty: d, ...more });
  const TS = (prompt, axis, slots, cards, sort, d, more) => ({ prompt, toolOptions: { mode: 'sort', axis, slots, cards }, target: { sort }, difficulty: d, ...more });
  const C = (id, text, motif) => ({ id, text, motif });
  const LV = { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } };
  const LVB = { easy: { showBack: true }, base: {}, challenge: {} };
  const ACT = (id, title, minutes, tool, teacher, task, items) => ({
    id, title, minutes, tool, teacher, task, items,
    levels: items.some((it) => it.toolOptions && it.toolOptions.mode === 'branch') ? LVB : LV,
  });
  // 출구: XT 교구, XC 고르기, XS 짧은 글, MOOD 마음
  const XT = (tool, options, prompt, target, d = 0.2) => ({ type: 'tool', tool, options, ...(options.mode === 'branch' ? {} : { state: { at: {} } }), prompt, target, difficulty: d });
  const XC = (prompt, options, answer, explain, d = 0.15) => ({ type: 'choice', prompt, options, answer, difficulty: d, explain });
  const XS = (prompt) => ({ type: 'short', prompt });
  const MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };
  // 활동지
  const WT = (prompt, columns, cells, answer) => ({ type: 'table', prompt, columns, cells, answer });
  const WC = (prompt, options, answer) => ({ type: 'choice', prompt, options, answer });
  const WB = (prompt, text, answer) => ({ type: 'blank', prompt, text, answer });
  const WS = (prompt) => ({ type: 'short', prompt });
  const WD = (prompt) => ({ type: 'draw', prompt });
  const DIFF = {
    easy: '맞는 칸에 놓은 카드에 초록 테두리가 생기고, 갈림길 문항은 결과가 처음부터 보여요.',
    base: '모든 카드를 놓거나 보기를 고른 뒤 스스로 확인하고 고쳐요.',
    challenge: '카드 순서가 섞여 나오고, 그럴듯하지만 알맞지 않은 보기를 가려내요.',
  };
  // 도입 6 + 전개 27(활동 14+13) + 정리 7 = 40분
  const LESSON = (n, o) => Object.assign(base(n), {
    title: o.title, objective: o.objective,
    illustration: { prompt: PROMPT(o.draw), scene: SCENE(o.banner, o.extra || []) },
    stages: [
      { id: 'intro', title: '도입', minutes: 6, teacher: o.intro, student: o.student },
      { id: 'main', title: '전개', minutes: 27, activities: o.acts },
      { id: 'wrapup', title: '정리', minutes: 7, teacher: o.wrap, exitTicket: [...o.exit, MOOD] },
    ],
    worksheet: { title: o.wsTitle, items: o.ws }, differentiation: o.diff || DIFF, teacherNotes: o.notes,
  });
  PaperLessons.registerUnit({
    id: ID, schema: 'edu-unit.v1', catalogUnit: UNIT,
    grade: GRADE, subject: '창체', unitTitle: TITLE,
    flow: '2학년 장애인식개선 단원은 사람마다 읽고 말하고 걷는 방법이 다를 수 있음을 알고, 그 방법을 존중하는 행동과 말을 익히는 2차시입니다. 1차시에는 손가락으로 읽는 글자인 점자, 손과 표정으로 하는 말인 수어, 발로 길을 알려 주는 점자 블록을 알아보고 점자 블록 위에 물건을 두지 않는 약속을 익힙니다. 2차시에는 장애를 놀리거나 흉내 내는 말과 행동을 멈추고 존중하는 말로 바꾸며, 말을 천천히 하는 친구를 기다려 주는 길을 고릅니다. 근거는 장애인복지법 제25조·같은 법 시행령 제16조(매년 1회·1시간 이상)와 범교과 기준 연 2시간입니다. 1학년 단원의 보조기구·도움 묻기를 이어 받으며, 학교폭력 예방(bully) 단원의 고운 말과 연계해 운영할 수 있습니다(학교 결정).',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '점자·수어·점자 블록이 하는 일 알아보기',
        objective: '점자·수어·점자 블록이 하는 일을 알고, 점자 블록 위에 물건을 두지 않는 까닭을 말할 수 있다.',
        draw: 'a paper sidewalk with bright yellow tactile paving tiles, a paper child moving a bicycle off the tiles, and a book with raised dots under a soft sun',
        banner: '손으로 읽고 손으로 말해요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }],
        intro: '"눈을 감고도 글을 읽을 수 있을까요?" 두세 명의 대답을 듣고 "손가락으로 읽는 글자가 있어요. 점자라고 해요"라고 말한다. "앞이 안 보이면 책을 못 읽어요"라는 반응에는 "점자로 된 책을 손가락으로 읽을 수 있어요"라고 바로잡는다.',
        student: '길에서 노란 울퉁불퉁한 블록을 본 적이 있는지 짝에게 말해 봐요.',
        acts: [
          ACT('a1', '활동 1. 점자·수어·점자 블록 알기', 14, 'mindmap',
            '"점자는 무엇으로 읽을까요?" 1번에서 수어를 "손장난"으로 여기는 학생에게 "손과 표정으로 하는 말이에요. 우리말처럼 진짜 말이에요"라고 짚는다. 2번은 점자를 볼 수 있는 곳을 고른다. 3번은 점자 블록이 발바닥으로 길을 알려 준다는 점을 말한다.',
            '점자·수어·점자 블록이 하는 일을 이어요.', [
              MM('이름과 하는 일을 이어 보세요. 맞지 않는 카드는 남겨요.', '읽고 말하는 방법', [{ id: 's1', label: '점자' }, { id: 's2', label: '수어' }, { id: 's3', label: '점자 블록' }], ['손가락으로 읽는 글자', '손과 표정으로 하는 말', '발로 길을 알려 줘요', '눈으로만 보는 그림'], { s1: '손가락으로 읽는 글자', s2: '손과 표정으로 하는 말', s3: '발로 길을 알려 줘요' }, 0.15),
              MP('점자를 볼 수 있는 곳만 골라 담아 보세요.', '점자가 있는 곳', ['엘리베이터 버튼', '점자로 된 책', '하늘의 구름', '운동장 모래'], ['엘리베이터 버튼', '점자로 된 책'], 0.2),
              MS('점자 블록 위에서 할 일과 하지 않을 일로 나누어 보세요.', '점자 블록', ['괜찮아요', '하지 않아요'], ['비켜서 걸어요', '물건을 치워 줘요', '자전거를 세워요', '가방을 내려놔요'], { '괜찮아요': ['비켜서 걸어요', '물건을 치워 줘요'], '하지 않아요': ['자전거를 세워요', '가방을 내려놔요'] }, 0.25,
                { conclude: '점자 블록은 누군가의 길이에요. 그 위에 물건을 두지 않아요.' }),
            ]),
          ACT('a2', '활동 2. 점자 블록 위의 물건', 13, 'story',
            '"점자 블록 위에 킥보드가 있으면 어떤 일이 생길까요?" 1번에서 "그냥 지나가요"를 넣고 싶어 하는 학생에게 흰지팡이를 쓰는 분이 부딪힐 수 있다고 짚는다. 2번은 혼자 옮기기 어려울 때 어른께 알리는 차례다. 3번 말풍선은 짝과 주고받으며 읽는다.',
            '점자 블록 위 물건을 치우는 차례를 놓고 말풍선을 채워요.', [
              SO('점자 블록 위에 내 킥보드가 있어요. 할 일을 차례대로 놓아 보세요.', '내 킥보드', ['먼저', '다음', '마지막'], [C('k1', '블록 위를 살펴요', 'star'), C('k2', '킥보드를 옆으로 옮겨요', 'leaf'), C('k3', '정해진 곳에 세워요', 'house')], ['k1', 'k2', 'k3'], 0.15),
              SO('무거운 화분이 점자 블록을 막고 있어요. 할 일을 차례대로 놓아 보세요.', '무거운 화분', ['먼저', '다음', '마지막'], [C('t1', '막힌 곳을 알아차려요', 'sun'), C('t2', '어른께 알려요', 'flower'), C('t3', '함께 옮겨요', 'tree')], ['t1', 't2', 't3'], 0.2),
              SF('준이가 할 말을 채워 보세요.', [{ id: 'b1', who: '준', motif: 'leaf', label: '친구가 블록에 가방을 두면 "___"' }, { id: 'b2', who: '준', motif: 'star', label: '어른께 "___"' }], ['여긴 길이야, 옮기자', '블록이 막혀 있어요', '괜찮아, 둬', '나중에 말할게'], { b1: '여긴 길이야, 옮기자', b2: '블록이 막혀 있어요' }, 0.25,
                { conclude: '점자 블록을 비워 두면 모두가 안전하게 걸어요.' }),
            ]),
        ],
        wrap: '"점자·수어·점자 블록 가운데 하나를 골라 하는 일을 말해 볼까요?" 출구 1번에서 수어를 잘못 이은 학생과 함께 "손과 표정으로 하는 말"을 다시 읽는다. 2번은 점자 블록 약속으로 정리한다.',
        exit: [
          XT('mindmap', { mode: 'match', topic: '하는 일', slots: [{ id: 'x1', label: '점자' }, { id: 'x2', label: '수어' }], cards: ['손가락으로 읽어요', '손과 표정으로 말해요', '귀로만 들어요'] }, '이름과 하는 일을 이어 보세요.', { match: { x1: '손가락으로 읽어요', x2: '손과 표정으로 말해요' } }, 0.15),
          XC('점자 블록 위에 자전거가 서 있으면 어떻게 할까요?', ['그냥 둬요', '옮기거나 어른께 알려요', '그 위에 가방도 둬요'], 1, '점자 블록은 비워 두어야 하는 길이에요.'),
          XS('점자 블록을 지키기 위해 내가 할 일을 한 가지 쓰세요.'),
        ],
        wsTitle: '손으로 읽고 말해요',
        ws: [
          WT('이름과 하는 일을 짝지어 쓰세요.', ['이름', '하는 일'], [['점자', ''], ['수어', ''], ['점자 블록', '']], '손가락으로 읽는 글자 / 손과 표정으로 하는 말 / 발로 길을 알려 줘요'),
          WC('점자 블록 위에서 하지 않을 일에 ○ 하세요.', ['비켜서 걸어요', '자전거를 세워요', '물건을 치워요'], '자전거를 세워요'),
          WB('빈칸에 알맞은 말을 쓰세요.', '수어는 손과 ___으로 하는 말이에요.', '표정'),
          WD('점자 블록을 비워 둔 깨끗한 길을 그려 보세요.'),
        ],
        notes: '자주 보이는 어려움: ① 수어를 몸짓 놀이로 여긴다 → 우리말처럼 뜻을 나누는 언어라고 짚는다. ② 점자 블록을 장식으로 여긴다 → 발바닥과 흰지팡이로 길을 찾는 데 쓰인다고 말한다. 수어 낱말의 손 모양을 지어서 가르치지 않는다(필요하면 국립국어원 한국수어사전을 함께 본다).',
      }),

      LESSON(2, {
        title: '흉내와 놀림을 멈추고 존중하는 말로 바꾸기',
        objective: '장애를 놀리거나 흉내 내는 말과 행동을 알아보고, 존중하는 말로 바꿔 말할 수 있다.',
        draw: 'two paper children with speech bubbles, a gray jagged bubble being torn away and replaced with a round bubble holding a small heart, beside a friend with crutches smiling',
        banner: '흉내 대신 존중해요', extra: [{ motif: 'flower', x: 300, y: 222, color: 'rose' }],
        intro: '"누가 내 걸음걸이를 따라 하며 웃으면 기분이 어떨까요?" 두세 명의 대답을 듣고 "장애를 흉내 내거나 놀리는 것은 친구 마음을 아프게 해요"라고 말한다. "재미로 한 거예요"라는 반응에는 "듣는 친구도 재미있을까요?"라고 되묻는다.',
        student: '들으면 힘이 나는 말을 짝에게 한 가지 해 봐요.',
        acts: [
          ACT('a1', '활동 1. 존중하는 말과 놀리는 말', 14, 'emotion',
            '"이 말을 들으면 친구의 마음 날씨는 어떨까요?" 1번에서 "너 걷는 거 웃겨"를 장난으로 여기는 학생에게 듣는 친구의 마음을 떠올리게 한다. 2번은 말을 천천히 하는 친구에게 할 말을 고른다. 3번은 장면과 마음을 이으며 친구를 이름으로 부르는 것이 존중이라는 점을 말한다.',
            '말을 존중하는 말과 놀리는 말로 나누고 마음을 이어요.', [
              ES('말을 존중하는 말과 놀리는 말로 나누어 보세요.', ['존중하는 말', '놀리는 말'], ['"천천히 말해도 돼"', '"너 걷는 거 웃겨"', '"같이 가자"', '"따라 해 볼까?"'], { '존중하는 말': ['"천천히 말해도 돼"', '"같이 가자"'], '놀리는 말': ['"너 걷는 거 웃겨"', '"따라 해 볼까?"'] }, 0.15),
              EP('말을 천천히 하는 친구에게 할 말만 골라 담아 보세요.', '기다리는 말', ['"끝까지 들을게"', '"괜찮아, 말해 줘"', '"빨리 좀 말해"', '"내가 대신 말할게"'], ['"끝까지 들을게"', '"괜찮아, 말해 줘"'], 0.2),
              EM('들은 말과 친구의 마음을 이어 보세요. 맞지 않는 카드는 남겨요.', [{ id: 's1', label: '이름 대신 별명으로 놀렸어요.' }, { id: 's2', label: '"네 그림 정말 멋져!"' }, { id: 's3', label: '말할 때까지 기다려 줬어요.' }], ['속상함', '기쁨', '고마움', '놀람'], { s1: '속상함', s2: '기쁨', s3: '고마움' }, 0.25,
                { conclude: '친구를 이름으로 부르고, 끝까지 들어 주는 것이 존중이에요.' }),
            ]),
          ACT('a2', '활동 2. 이럴 때 어떻게 할까요', 13, 'emotion',
            '"어떤 길을 고르면 모두 마음이 편할까요?" 결과 칸을 읽게 한다. 1번은 목발 짚은 친구의 걸음을 흉내 내는 장면, 2번은 "장애인 같아"를 놀리는 말로 쓰는 장면이다 — 장애인은 놀리는 말이 아니라 사람을 가리키는 말이라고 짚는다. 3번은 수어로 이야기하는 가족을 만난 장면이다.',
            '장면에서 어떻게 할지 고르고 결과를 봐요.', [
              EB('친구들이 목발 짚은 하나의 걸음을 흉내 내요.', '쉬는 시간에 몇몇 친구가 목발 짚은 하나의 걸음을 따라 하며 웃어요.', [
                { id: 'stop', text: '"그만해, 하나가 속상해"', result: '흉내가 멈추고 하나가 고마워해요.', mood: '고마움' },
                { id: 'join', text: '같이 따라 하며 웃어요', result: '하나가 교실 밖으로 나가 버려요.', mood: '슬픔', why: '흉내는 친구 마음을 아프게 해요.' },
                { id: 'look', text: '구경만 해요', result: '흉내가 계속되고 하나는 혼자예요.', mood: '외로움', why: '멈추자고 말하거나 선생님께 알려요.' },
              ], 'stop', 0.15),
              EB('친구가 실수한 짝에게 "장애인 같아" 하고 놀려요.', '준이가 공을 놓치자 한 친구가 "장애인 같아!" 하고 놀려요.', [
                { id: 'fix', text: '"그건 놀리는 말이 아니야"', result: '친구가 "미안" 하고 말을 고쳐요.', mood: '편안함' },
                { id: 'laugh', text: '따라서 크게 웃어요', result: '준이도, 듣는 다른 친구도 상처받아요.', mood: '속상함', why: '장애인은 사람을 가리키는 말이지 놀리는 말이 아니에요.' },
              ], 'fix', 0.2),
              EB('공원에서 수어로 이야기하는 가족을 봤어요.', '린이 공원에서 손과 표정으로 즐겁게 이야기하는 가족을 봤어요.', [
                { id: 'stare', text: '손가락질하며 쳐다봐요', result: '가족이 불편한 얼굴을 해요.', mood: '속상함', why: '손가락질하거나 빤히 쳐다보지 않아요.' },
                { id: 'respect', text: '내 놀이를 하며 지나가요', result: '가족도 린도 편안하게 공원을 즐겨요.', mood: '편안함' },
              ], 'respect', 0.25, { conclude: '흉내와 놀림은 멈추고, 다른 방법으로 말하는 사람도 존중해요.' }),
            ]),
        ],
        wrap: '"오늘 바꿔 본 존중하는 말 가운데 하나를 말해 볼까요?" 출구 1번에서 흉내를 따라 하는 쪽을 고른 학생에게 하나의 마음을 다시 떠올리게 한다. 2번은 장애인이라는 말을 바르게 쓰는 점으로 정리한다.',
        exit: [
          XT('emotion', { mode: 'pick', basket: '존중하는 말', cards: ['"끝까지 들을게"', '"같이 하자"', '"걷는 거 웃겨"', '"빨리 말해"'], weather: false }, '존중하는 말만 골라 담아 보세요.', { pick: ['"끝까지 들을게"', '"같이 하자"'] }, 0.15),
          XC('"장애인 같아"를 놀리는 말로 쓰면 어떨까요?', ['장난이니 괜찮아요', '사람을 놀리는 말이 돼요', '칭찬이에요'], 1, '장애인은 사람을 가리키는 말이에요. 놀리는 말로 쓰지 않아요.'),
          XS('친구에게 해 주고 싶은 존중하는 말을 쓰세요.'),
        ],
        wsTitle: '존중하는 말',
        ws: [
          WT('존중하는 말이면 ○, 놀리는 말이면 ×를 쓰세요.', ['말', '○ / ×'], [['"천천히 말해도 돼"', ''], ['"따라 해 볼까?"', ''], ['"같이 가자"', ''], ['"걷는 거 웃겨"', '']], '○, ×, ○, ×'),
          WC('친구들이 흉내 내며 웃을 때 할 행동에 ○ 하세요.', ['같이 웃어요', '"그만해" 말해요', '구경만 해요'], '"그만해" 말해요'),
          WB('빈칸에 알맞은 말을 쓰세요.', '말을 천천히 하는 친구는 ___까지 들어 줘요.', '끝'),
          WS('흉내 내는 친구에게 할 말을 한 가지 쓰세요.'),
        ],
        notes: '자주 보이는 어려움: ① 흉내를 장난이라고 여긴다 → 기준은 듣는 친구의 마음임을 짚는다. ② "장애인"을 낮추는 말로 여긴다 → 사람을 가리키는 바른 말이고, 놀리는 데 쓰는 것이 잘못이라고 구별한다. 반 학생의 장애를 예로 들거나 지목하지 않는다.',
      }),
    ],
  });
})();
