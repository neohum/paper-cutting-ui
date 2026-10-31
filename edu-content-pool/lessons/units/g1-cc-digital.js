/* 1학년 창체 법정교육 — 인터넷·스마트폰 과의존 예방 (2차시).
 * 근거: 지능정보화 기본법 제54조(초·중·고 학기별 1회 이상 과의존 예방교육)(research-mandatory.md 표).
 * 안전교육 사이버 중독 예방 단원(g1-cc-saf-cyber: 시간 약속·알람 끄기·화면 없는 놀이·자세·우리 집 약속)과 겹치지 않게
 * 1학기는 '저절로 이어지는 다음 영상' 알아차리고 멈추기, 2학기는 '밥 먹을 때 화면 대신 얼굴 보기'로 짠다. 특정 시간 수치는 쓰지 않는다.
 * 장면·인물은 지은 것이다(가명 한 글자). */
(function () {
  const ID = 'g1-cc-digital', GRADE = 1, TITLE = '인터넷·스마트폰 과의존 예방';
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
    flow: '1학년 인터넷·스마트폰 과의존 예방 단원은 학기마다 한 번씩 화면이 나를 붙잡는 순간을 알아차리는 2차시입니다. 1차시(1학기)에는 영상이 끝나도 다음 영상이 저절로 이어지는 것을 알아차리고 스스로 멈추는 차례를 익힙니다. 2차시(2학기)에는 밥 먹을 때와 가족이 이야기할 때 기기를 내려놓고 얼굴을 보며 이야기하는 쪽을 고릅니다. 근거는 지능정보화 기본법 제54조(학기별 1회 이상)입니다. 화면 시간 약속·알람·자세는 안전교육 사이버 중독 예방(saf-cyber) 단원이 다루며, 그 단원과 연계해 시수 인정 가능(학교 결정)합니다.',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '저절로 시작되는 다음 영상, 알아차리고 멈추기',
        objective: '영상이 저절로 이어지는 것을 알아차리고, 스스로 멈추는 차례를 말할 수 있다.',
        draw: 'a paper child pressing a big pause button on a paper tablet, with a chain of small video frames trailing off the screen, under a soft moon and sun',
        banner: '다음 영상 전에 멈춰요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }],
        intro: '"영상 하나만 보려고 했는데 어느새 많이 본 적이 있나요?" 손을 들게 한 뒤 "영상이 끝나면 다음 영상이 저절로 시작될 때가 있어요. 그래서 그만두기 어려워요"라고 말한다. "내가 안 눌렀으니 괜찮아요"라는 반응에는 "그래도 보는 건 내 눈과 내 시간이에요"라고 짚는다.',
        student: '영상이 끝났을 때 내가 하는 일을 짝에게 말해 봐요.',
        acts: [
          ACT('a1', '활동 1. 멈추는 차례 놓기', 14, 'story',
            '"다음 영상이 나오기 전에 무엇을 할까요?" 1번에서 "한 개만 더"를 넣고 싶어 하는 학생에게 "한 개가 또 한 개가 돼요"라고 짚는다. 2번은 멈추고 어른께 말하는 차례다. 3번 말풍선은 짝과 주고받으며 읽는다.',
            '영상을 멈추는 차례를 놓고 말풍선을 채워요.', [
              SO('영상이 끝났을 때 할 일을 차례대로 놓아 보세요.', '영상이 끝났어요', ['먼저', '다음', '마지막'], [C('k1', '"끝났다!" 알아차려요', 'star'), C('k2', '멈춤 단추를 눌러요', 'leaf'), C('k3', '기기를 내려놓아요', 'house')], ['k1', 'k2', 'k3'], 0.15),
              SO('다음 영상이 벌써 시작됐을 때 할 일을 차례대로 놓아 보세요.', '저절로 시작됐어요', ['먼저', '다음', '마지막'], [C('t1', '화면에서 눈을 떼요', 'sun'), C('t2', '어른께 "멈춰 주세요"', 'flower'), C('t3', '하던 놀이로 돌아가요', 'tree')], ['t1', 't2', 't3'], 0.2),
              SF('하나가 할 말을 채워 보세요.', [{ id: 'b1', who: '하나', motif: 'star', label: '영상이 끝나면 "___"' }, { id: 'b2', who: '하나', motif: 'leaf', label: '다음 영상이 나오면 "___"' }], ['여기까지!', '멈춤!', '하나만 더!', '계속 볼래!'], { b1: '여기까지!', b2: '멈춤!' }, 0.25,
                { conclude: '영상이 끝나면 "여기까지!" 하고 내가 멈춰요.' }),
            ]),
          ACT('a2', '활동 2. 이럴 때 어떻게 할까요', 13, 'emotion',
            '"이렇게 하면 어떻게 될까요?" 결과 칸을 소리 내어 읽게 한다. 1번에서 계속 보는 쪽을 고른 학생에게 "놀이 시간과 잠자는 시간은 어디로 갔을까요?"라고 묻는다. 2번은 동생과 함께 볼 때, 3번은 어른이 바쁠 때 스스로 멈추는 장면이다.',
            '장면에서 어떻게 할지 고르고 결과를 봐요.', [
              EB('만화 한 편이 끝나고 다음 편이 저절로 시작돼요.', '준이가 만화 한 편을 다 봤어요. 화면에서 다음 편이 저절로 시작되려고 해요.', [
                { id: 'stop', text: '멈추고 블록 놀이해요', result: '준이가 블록으로 큰 성을 만들어요.', mood: '뿌듯함' },
                { id: 'keep', text: '그냥 계속 봐요', result: '저녁 먹을 때까지 화면만 봐서 눈이 뻑뻑해요.', mood: '짜증', why: '다음 영상이 나오기 전에 스스로 멈춰요.' },
              ], 'stop', 0.15),
              EB('동생이 "하나 더 보자" 해요.', '하나가 동생과 영상을 봤어요. 다음 영상이 나오자 동생이 "하나 더!" 해요.', [
                { id: 'more', text: '"그래, 하나 더" 해요', result: '하나 더가 또 하나 더가 돼요.', mood: '걱정', why: '약속한 만큼 보고 함께 멈춰요.' },
                { id: 'play', text: '"이제 그림 그리자" 해요', result: '동생과 그림을 그리며 깔깔 웃어요.', mood: '신남' },
              ], 'play', 0.2),
              EB('어른이 바빠서 옆에 없어요.', '보호자가 부엌에서 바빠요. 린의 화면에서 다음 영상이 저절로 시작됐어요.', [
                { id: 'self', text: '내가 멈춤을 눌러요', result: '린이 스스로 멈추고 보호자에게 말해요.', mood: '뿌듯함' },
                { id: 'hide', text: '몰래 계속 봐요', result: '린이 할 일을 잊고 마음이 불편해요.', mood: '걱정', why: '어른이 없어도 내가 멈출 수 있어요.' },
              ], 'self', 0.25, { conclude: '저절로 시작돼도 멈추는 사람은 나예요.' }),
            ]),
        ],
        wrap: '"영상이 끝나면 무엇이라고 말하기로 했나요?" 출구 1번에서 차례를 바꾼 학생과 함께 알아차리기가 먼저라는 점을 다시 본다. 2번은 저절로 시작돼도 내가 멈출 수 있다는 점으로 정리한다.',
        exit: [
          XT('story', { title: '영상 멈추기', slots: ['먼저', '다음', '마지막'], cards: [C('x1', '끝난 것을 알아차려요', 'star'), C('x2', '멈춤을 눌러요', 'leaf'), C('x3', '다른 놀이를 해요', 'flower')] }, '영상을 멈추는 차례를 놓아 보세요.', { order: ['x1', 'x2', 'x3'] }, 0.15),
          XC('다음 영상이 저절로 시작되면 어떻게 할까요?', ['계속 봐요', '멈추고 내려놓아요', '소리를 키워요'], 1, '저절로 시작돼도 내가 멈출 수 있어요.'),
          XS('영상을 멈춘 뒤 하고 싶은 놀이를 한 가지 쓰세요.'),
        ],
        wsTitle: '다음 영상 전에 멈춰요',
        ws: [
          WT('영상을 멈추는 차례에 1, 2, 3을 쓰세요.', ['할 일', '차례'], [['기기를 내려놓아요', ''], ['"끝났다!" 알아차려요', ''], ['멈춤 단추를 눌러요', '']], '3, 1, 2'),
          WC('다음 영상이 저절로 시작될 때 할 말에 ○ 하세요.', ['"하나만 더!"', '"멈춤!"', '"계속 볼래!"'], '"멈춤!"'),
          WB('빈칸에 알맞은 말을 쓰세요.', '영상이 끝나면 "___!" 하고 내가 멈춰요.', '여기까지'),
          WD('영상을 멈추고 하고 싶은 놀이를 그려 보세요.'),
        ],
        notes: '자주 보이는 어려움: ① 저절로 시작되면 내 탓이 아니라고 여긴다 → 멈추는 힘은 나에게 있다는 점을 짚는다. ② 몰래 보면 괜찮다고 여긴다 → 어른께 말하는 것이 나를 돕는 일임을 말한다. 가정마다 기기 사정이 다르므로 가진 기기나 보는 시간을 묻거나 견주지 않는다.',
      }),

      LESSON(2, {
        title: '밥 먹을 때 화면 끄고 얼굴 보며 이야기하기',
        objective: '밥 먹을 때와 가족이 이야기할 때 기기를 내려놓고 얼굴을 보며 이야기할 수 있다.',
        draw: 'a paper family sitting around a dinner table smiling and talking, a paper tablet resting face down on a shelf behind them, with a warm lamp',
        banner: '밥 먹을 땐 얼굴 보기', extra: [{ motif: 'flower', x: 300, y: 222, color: 'rose' }],
        intro: '"밥 먹을 때 가족과 어떤 이야기를 하나요?" 두세 명의 대답을 듣고 "화면을 보면서 먹으면 무엇을 놓칠까요?"라고 묻는다. "화면 보면서 먹으면 더 맛있어요"라는 반응에는 "그때 가족이 나에게 말을 걸면 들릴까요?"라고 되묻는다.',
        student: '밥 먹을 때 가족에게 해 주고 싶은 이야기를 하나 떠올려 봐요.',
        acts: [
          ACT('a1', '활동 1. 장면과 마음 잇기', 14, 'emotion',
            '"이때 가족의 마음은 어떨까요?" 1번에서 모두 화면만 보는 장면에 기쁨을 놓는 학생에게 "말을 걸어도 대답이 없으면 어떨까요?"라고 묻는다. 2번은 식사 시간에 하면 좋은 일을 고른다. 3번은 장면을 나누며 얼굴을 보면 마음이 가까워진다는 점을 말한다.',
            '식사 장면과 마음을 잇고 나누어요.', [
              EM('장면과 가족의 마음을 이어 보세요. 맞지 않는 카드는 남겨요.', [{ id: 's1', label: '모두 화면만 보며 먹어요.' }, { id: 's2', label: '오늘 있었던 일을 이야기해요.' }, { id: 's3', label: '말을 걸었는데 대답이 없어요.' }], ['외로움', '기쁨', '속상함', '놀람'], { s1: '외로움', s2: '기쁨', s3: '속상함' }, 0.15),
              EP('밥 먹을 때 하면 좋은 일만 골라 담아 보세요.', '식사 시간', ['"맛있어요" 말해요', '오늘 일을 이야기해요', '게임하며 먹어요', '영상 보며 먹어요'], ['"맛있어요" 말해요', '오늘 일을 이야기해요'], 0.2),
              ES('식사 시간 모습을 나누어 보세요.', ['마음이 가까워요', '마음이 멀어요'], ['서로 얼굴을 봐요', '기기를 내려놓아요', '화면에 고개 숙여요', '대답 없이 봐요'], { '마음이 가까워요': ['서로 얼굴을 봐요', '기기를 내려놓아요'], '마음이 멀어요': ['화면에 고개 숙여요', '대답 없이 봐요'] }, 0.25,
                { conclude: '얼굴을 보며 이야기하면 마음이 가까워져요.' }),
            ]),
          ACT('a2', '활동 2. 이럴 때 어떻게 할까요', 13, 'emotion',
            '"어떤 길을 고르면 가족이 웃을까요?" 결과 칸을 읽게 한다. 1번은 밥상에 기기를 가져가고 싶은 장면, 2번은 할머니가 이야기를 들려주실 때, 3번은 외식하러 가서 기다릴 때다. 3번에서 기다리는 동안 할 수 있는 말놀이를 함께 떠올린다.',
            '장면에서 어떻게 할지 고르고 결과를 봐요.', [
              EB('밥 먹으러 갈 때 태블릿을 들고 가고 싶어요.', '"밥 먹자!" 소리가 들려요. 준이 손에는 태블릿이 있어요.', [
                { id: 'leave', text: '제자리에 두고 가요', result: '준이가 가족과 웃으며 밥을 먹어요.', mood: '기쁨' },
                { id: 'take', text: '들고 가서 보며 먹어요', result: '반찬을 흘리고 가족 말을 못 들어요.', mood: '속상함', why: '밥 먹을 때는 기기를 제자리에 두어요.' },
              ], 'leave', 0.15),
              EB('할머니가 옛날이야기를 들려주세요.', '할머니가 하나에게 어릴 적 이야기를 들려주세요. 그때 하나의 기기에서 알림 소리가 나요.', [
                { id: 'look', text: '얼굴 보며 끝까지 들어요', result: '할머니가 기뻐하며 이야기를 더 들려주세요.', mood: '고마움' },
                { id: 'phone', text: '알림부터 확인해요', result: '할머니가 이야기를 멈추고 쓸쓸해 보여요.', mood: '외로움', why: '이야기할 때는 얼굴을 보고 들어요.' },
              ], 'look', 0.2),
              EB('식당에서 음식을 기다려요.', '린의 가족이 식당에서 음식을 기다려요. 린이 심심해해요.', [
                { id: 'game', text: '"끝말잇기 하자!" 해요', result: '가족이 깔깔 웃으며 기다려요.', mood: '신남' },
                { id: 'video', text: '영상을 틀어 달라고 떼써요', result: '린 혼자 화면만 보고 가족은 조용해요.', mood: '외로움', why: '기다릴 때도 가족과 놀 수 있어요.' },
              ], 'game', 0.25, { conclude: '밥 먹고 이야기할 때는 화면 대신 얼굴을 봐요.' }),
            ]),
        ],
        wrap: '"오늘 저녁밥 먹을 때 가족에게 무슨 이야기를 할까요?" 출구 1번에서 영상 보며 먹는 쪽을 고른 학생에게 가족의 마음을 다시 떠올리게 한다. 2번은 기기를 제자리에 두는 약속으로 정리한다.',
        exit: [
          XT('emotion', { mode: 'pick', basket: '식사 시간', cards: ['기기를 제자리에 둬요', '얼굴 보며 말해요', '영상 보며 먹어요', '게임하며 먹어요'], weather: false }, '밥 먹을 때 할 일만 골라 담아 보세요.', { pick: ['기기를 제자리에 둬요', '얼굴 보며 말해요'] }, 0.15),
          XC('가족이 이야기할 때 알림이 울리면 어떻게 할까요?', ['알림부터 봐요', '얼굴 보며 끝까지 들어요', '소리를 키워요'], 1, '이야기할 때는 얼굴을 보고 들어요.'),
          XS('밥 먹을 때 가족에게 하고 싶은 이야기를 쓰세요.'),
        ],
        wsTitle: '밥 먹을 땐 얼굴 보기',
        ws: [
          WT('식사 시간에 하면 좋으면 ○, 아니면 ×를 쓰세요.', ['모습', '○ / ×'], [['오늘 일을 이야기해요', ''], ['영상 보며 먹어요', ''], ['기기를 제자리에 둬요', ''], ['대답 없이 화면만 봐요', '']], '○, ×, ○, ×'),
          WC('식당에서 기다릴 때 하면 좋은 일에 ○ 하세요.', ['끝말잇기', '영상 떼쓰기', '혼자 게임'], '끝말잇기'),
          WB('빈칸에 알맞은 말을 쓰세요.', '밥 먹을 때는 화면 대신 ___을 봐요.', '얼굴'),
          WD('가족과 웃으며 밥 먹는 모습을 그려 보세요.'),
        ],
        notes: '자주 보이는 어려움: ① 어른도 화면을 본다며 억울해한다 → 가족 모두 함께 지키는 약속으로 이야기하게 한다. ② 식사 장면이 가정마다 다르다 → 가족 구성·식사 모습을 묻거나 견주지 않고 가상 인물 장면으로만 다룬다.',
      }),
    ],
  });
})();
