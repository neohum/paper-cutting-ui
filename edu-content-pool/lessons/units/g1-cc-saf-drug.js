/* 1학년 창체 안전교육 — 약물 중독 예방 (5차시). 근거: 「학교 안전교육 실시 기준 등에 관한 고시」 별표 2 초등 약물 및 사이버 중독 예방(올바른 약물 사용법·해로운 약물·화학제품 만지거나 먹지 않기).
 * 저학년 범위: 약은 어른과 함께, 사탕과 약 구별, 집 안 위험한 물질, 담배 연기 피하기. 장면·인물은 직접 지은 것이다(가명). */
(function () {
  const ID = 'g1-cc-saf-drug', GRADE = 1, TITLE = '약물 중독 예방';
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
    { motif: 'house', x: 96, y: 214, color: 'buttercup', s: 0.9 }, { motif: 'tree', x: 380, y: 214 }, ...extra,
    { motif: 'text', x: 240, y: 140, text, size: 22 },
  ] });
  // 문항 틀: MS 생각 그물 나누기, MM 잇기, MP 고르기, EB 갈림길, ES 마음 칸 나누기, EM 마음 잇기, SO 이야기 차례, TM 시간 띠 잇기
  const MS = (prompt, topic, slots, cards, sort, d, more) => ({ prompt, toolOptions: { topic, slots, cards }, target: { sort }, difficulty: d, ...more });
  const MM = (prompt, topic, slots, cards, match, d, more) => ({ prompt, toolOptions: { mode: 'match', topic, slots, cards }, target: { match }, difficulty: d, ...more });
  const MP = (prompt, topic, cards, pick, d, more) => ({ prompt, toolOptions: { mode: 'pick', topic, basket: topic, cards }, target: { pick }, difficulty: d, ...more });
  const EB = (prompt, situation, choices, choice, d, more) => ({ prompt, toolOptions: { mode: 'branch', situation, choices }, target: { choice }, difficulty: d, ...more });
  const ES = (prompt, slots, cards, sort, d, more) => ({ prompt, toolOptions: { mode: 'sort', slots, cards }, target: { sort }, difficulty: d, ...more });
  const EM = (prompt, slots, cards, match, d, more) => ({ prompt, toolOptions: { mode: 'match', slots, cards }, target: { match }, difficulty: d, ...more });
  const SO = (prompt, title, slots, cards, order, d, more) => ({ prompt, toolOptions: { title, slots, cards }, target: { order }, difficulty: d, ...more });
  const TM = (prompt, slots, cards, match, d, more) => ({ prompt, toolOptions: { mode: 'match', axis: ['아침', '밤'], slots, cards }, target: { match }, difficulty: d, ...more });
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
    challenge: '카드 순서가 섞여 나오고, 그럴듯하지만 안전하지 않은 보기를 가려내요.',
  };
  // 도입 6 + 전개 27(활동 14+13) + 정리 7 = 40분
  const LESSON = (n, o) => Object.assign(base(n), {
    title: o.title, objective: o.objective,
    illustration: { prompt: PROMPT(o.draw), scene: SCENE(o.banner, o.extra) },
    stages: [
      { id: 'intro', title: '도입', minutes: 6, teacher: o.intro, student: o.student },
      { id: 'main', title: '전개', minutes: 27, activities: o.acts },
      { id: 'wrapup', title: '정리', minutes: 7, teacher: o.wrap, exitTicket: o.exit },
    ],
    worksheet: { title: o.wsTitle, items: o.ws }, differentiation: o.diff || DIFF, teacherNotes: o.notes,
  });
  PaperLessons.registerUnit({
    id: ID, schema: 'edu-unit.v1', catalogUnit: UNIT,
    grade: GRADE, subject: '창체', unitTitle: TITLE,
    flow: '1학년이 약과 생활 속 물질을 안전하게 대하는 첫 습관을 익히는 단원입니다. 1~2차시는 약은 어른이 주는 것만 먹는다는 약속과, 사탕처럼 생긴 약을 구별하는 법을 다룹니다. 3차시는 세제·표백제 같은 집 안 물질을 만지거나 먹지 않는 법을, 4차시는 담배 연기를 피해 깨끗한 공기를 마시는 법을 익힙니다. 5차시에는 건강 지킴이 약속으로 단원을 묶습니다. 보건교육(건강) 단원과 연계해 시수 인정 가능(학교 결정)합니다.',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '약은 어른이 줄 때만 먹기',
        objective: '약은 어른이 정해 준 것만, 정해 준 만큼 먹어야 함을 말할 수 있다.',
        draw: 'a parent handing a small paper medicine cup to a child with a glass of water, beside a paper first-aid box',
        banner: '약은 어른과 함께', extra: [{ motif: 'flower', x: 300, y: 222, color: 'rose' }],
        intro: '"감기에 걸렸을 때 약을 먹어 본 적 있나요? 그 약은 누가 주었나요?" 대답을 듣고(기다릴 반응: "엄마요", "의사 선생님이요") "약은 몸을 낫게 하지만, 잘못 먹으면 몸이 아플 수 있어요. 그래서 어른이 줄 때만 먹어요"라고 말한다.',
        student: '아플 때 약을 주는 어른은 누구인지 짝에게 말해 봅시다.',
        acts: [
          ACT('a1', '활동 1. 약을 먹어도 될 때', 14, 'mindmap',
            '"이럴 때 약을 먹어도 될까요?" 혼자 약을 꺼내 먹는 장면을 괜찮다고 하는 학생에게 "어떤 약인지, 얼마나 먹는지 알 수 있나요?"라고 묻는다.',
            '약을 먹는 장면을 괜찮음과 안 됨으로 나누어요.',
            [
              MS('약 먹는 장면을 나누어 보세요.', '약 먹을 때', ['괜찮아요', '안 돼요'], ['엄마가 준 약을 먹어요', '혼자 약통을 열어요', '의사가 준 약을 먹어요', '친구 약을 먹어요'], { 괜찮아요: ['엄마가 준 약을 먹어요', '의사가 준 약을 먹어요'], '안 돼요': ['혼자 약통을 열어요', '친구 약을 먹어요'] }, 0.1),
              MP('약을 줄 수 있는 사람만 골라 보세요.', '약을 주는 사람', ['엄마 아빠', '보건 선생님', '처음 본 사람', '동네 형'], ['엄마 아빠', '보건 선생님'], 0.15),
              MS('약 먹는 양을 나누어 보세요.', '얼마나 먹을까', ['맞아요', '틀려요'], ['정해 준 만큼 먹어요', '빨리 나으려고 더 먹어요', '어른이 재 줘요', '맛있어서 또 먹어요'], { 맞아요: ['정해 준 만큼 먹어요', '어른이 재 줘요'], 틀려요: ['빨리 나으려고 더 먹어요', '맛있어서 또 먹어요'] }, 0.2,
                { conclude: '약은 많이 먹는다고 빨리 낫지 않아요. 정해 준 만큼만 먹어요.' }),
            ]),
          ACT('a2', '활동 2. 약이 보이면 어떻게 할까', 13, 'emotion',
            '"약이 보이면 어떻게 할까요?" 결과를 읽게 한다. 약을 동생과 나눠 먹는 보기를 고르는 학생에게 "동생 몸에 맞는 약일까요?"라고 묻는다.',
            '약이 보이는 장면에서 할 일을 골라요.',
            [
              EB('식탁에 약 봉투가 있어요.', '식탁 위에 엄마 약 봉투가 놓여 있어요.', [
                { id: 'eat', text: '나도 하나 먹어 봐요', result: '배가 아프고 어지러워요.', mood: '걱정', why: '남의 약은 먹지 않아요.' },
                { id: 'leave', text: '만지지 않고 엄마께 말해요', result: '엄마가 약을 치워요.', mood: '안심' }], 'leave', 0.1),
              EB('목이 아파요.', '학교에서 목이 아픈데 가방에 지난번 약이 있어요.', [
                { id: 'self', text: '혼자 꺼내 먹어요', result: '맞는 약인지 몰라 걱정돼요.', mood: '불안', why: '아프면 먼저 어른께 말해요.' },
                { id: 'nurse', text: '보건 선생님께 가요', result: '선생님이 살펴보고 도와줘요.', mood: '편안함' }], 'nurse', 0.15),
              EB('동생이 아프대요.', '동생이 배가 아프다며 울어요. 내 약이 있어요.', [
                { id: 'share', text: '내 약을 나눠 줘요', result: '동생에게 맞지 않을 수 있어요.', mood: '걱정', why: '약은 사람마다 달라요.' },
                { id: 'call', text: '어른을 불러요', result: '어른이 동생을 돌봐 줘요.', mood: '안심' }], 'call', 0.2,
                { conclude: '약은 그 사람에게 맞게 지은 것이라 나눠 먹지 않아요.' }),
            ]),
        ],
        wrap: '"약은 누가 줄 때 먹지요?" 다 같이 "어른이 줄 때만!"이라고 말한다. 출구 2번에서 "많이 먹으면 빨리 나아요"를 고르면 다시 짚는다.',
        exit: [
          XT('mindmap', { topic: '아플 때', slots: ['괜찮아요', '안 돼요'], cards: ['어른께 아프다고 말해요', '약을 몰래 먹어요', '병원에 가요', '약을 두 번 먹어요'] }, '아플 때 장면을 두 가지로 나누어 보세요.',
            { sort: { 괜찮아요: ['어른께 아프다고 말해요', '병원에 가요'], '안 돼요': ['약을 몰래 먹어요', '약을 두 번 먹어요'] } }),
          XC('약을 많이 먹으면 어떻게 될까요?', ['빨리 나아요', '몸이 더 아플 수 있어요', '키가 커요'], 1, '약은 정해 준 만큼만 먹어요.'),
          MOOD,
        ],
        wsTitle: '약은 어른과 함께',
        ws: [
          WT('괜찮으면 ○, 안 되면 ×를 쓰세요.', ['장면', '○ / ×'], [['엄마가 준 약 먹기', ''], ['친구 약 먹기', ''], ['혼자 약통 열기', '']], '○, ×, ×'),
          WC('약을 줄 수 있는 사람에 ○ 하세요.', ['보건 선생님', '처음 본 사람', '친구'], '보건 선생님'),
          WB('빈칸에 알맞은 말을 쓰세요.', '약은 정해 준 ___만 먹어요.', '만큼'),
          WD('아플 때 어른께 말하는 내 모습을 그려 보세요.'),
        ],
        notes: '자주 보이는 어려움: ① 많이 먹으면 빨리 낫는다고 여긴다 → 정해 준 양을 지킨다. ② 아픈 가족에게 내 약을 나눠 준다 → 약은 사람마다 다르다.',
      }),

      LESSON(2, {
        title: '사탕처럼 생긴 약 구별하기',
        objective: '사탕이나 음료처럼 생긴 약을 알아보고, 모르는 것은 먹지 않고 어른께 물을 수 있다.',
        draw: 'colorful paper candies and similar-looking paper pills on two plates, with a child pointing and asking an adult',
        banner: '모르면 먹지 않아요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }],
        intro: '"알록달록 동그란 것이 있어요. 사탕일까요, 약일까요?" 그림을 보여 주며 "약 중에는 사탕이나 젤리처럼 생긴 것도 있어요. 모르는 것은 먹지 않고 어른께 물어봐요"라고 말한다.',
        student: '"이거 먹어도 돼요?" 하고 묻는 말을 짝과 연습해 봅시다.',
        acts: [
          ACT('a1', '활동 1. 먹어도 되는 것과 물어볼 것', 14, 'mindmap',
            '"이것은 바로 먹어도 될까요, 어른께 먼저 물어봐야 할까요?" 포장이 없는 알약, 처음 보는 젤리는 물어본다는 점을 짚는다.',
            '먹을 것 카드를 먹어도 됨과 물어봄으로 나누어요.',
            [
              MS('카드를 두 가지로 나누어 보세요.', '먹기 전에', ['먹어도 돼요', '물어봐요'], ['급식 반찬', '바닥의 알록달록 알약', '엄마가 싼 간식', '처음 보는 젤리'], { '먹어도 돼요': ['급식 반찬', '엄마가 싼 간식'], 물어봐요: ['바닥의 알록달록 알약', '처음 보는 젤리'] }, 0.1),
              MS('병에 든 것을 나누어 보세요.', '병 속에', ['먹어도 돼요', '물어봐요'], ['내 물병의 물', '약국 병의 시럽', '우유갑의 우유', '서랍 속 작은 병'], { '먹어도 돼요': ['내 물병의 물', '우유갑의 우유'], 물어봐요: ['약국 병의 시럽', '서랍 속 작은 병'] }, 0.15),
              MP('어른께 물어볼 때 할 말만 골라 보세요.', '물어보는 말', ['"이거 먹어도 돼요?"', '"이게 뭐예요?"', '"몰래 먹을래"', '"다 먹을래"'], ['"이거 먹어도 돼요?"', '"이게 뭐예요?"'], 0.2,
                { conclude: '모르는 것은 맛보기 전에 "이게 뭐예요?" 하고 물어요.' }),
            ]),
          ACT('a2', '활동 2. 이럴 때 어떻게 할까', 13, 'emotion',
            '"친구가 사탕이라며 준 것이 약 같아요. 어떻게 할까요?" 결과를 읽게 한다. 거절하면 친구가 서운해할까 걱정하는 학생에게 "물어보는 것은 친구를 지키는 일이기도 해요"라고 말한다.',
            '먹을 것처럼 생긴 것을 만났을 때 할 일을 골라요.',
            [
              EB('놀이터에 알약이 떨어져 있어요.', '놀이터 바닥에 사탕 같은 알약이 떨어져 있어요.', [
                { id: 'eat', text: '주워서 먹어요', result: '배가 아플 수 있어요.', mood: '걱정', why: '떨어진 것은 먹지 않아요.' },
                { id: 'tell', text: '만지지 않고 어른께 알려요', result: '어른이 치워 줘요.', mood: '안심' }], 'tell', 0.1),
              EB('친구가 사탕이래요.', '친구가 집에서 가져온 사탕이라며 알약 같은 것을 줘요.', [
                { id: 'ask', text: '"선생님께 여쭤보자" 해요', result: '선생님이 약이라고 알려 줘요.', mood: '안심' },
                { id: 'eat', text: '받아서 바로 먹어요', result: '약이라서 몸이 이상해요.', mood: '불안', why: '모르는 것은 먹기 전에 물어요.' }], 'ask', 0.15),
              EB('동생이 시럽 병을 들고 있어요.', '동생이 달콤한 냄새 나는 약 병을 들고 마시려 해요.', [
                { id: 'stop', text: '"안 돼" 하고 어른을 불러요', result: '어른이 병을 높은 곳에 둬요.', mood: '안심' },
                { id: 'join', text: '같이 조금씩 마셔요', result: '둘 다 배가 아파요.', mood: '속상함', why: '약은 음료가 아니에요.' }], 'stop', 0.2,
                { conclude: '달콤한 약도 음료가 아니에요. 어른을 불러요.' }),
            ]),
        ],
        wrap: '"모르는 것을 보면 어떻게 하지요?" "먹지 않고 물어봐요"를 함께 말한다. 출구 2번에서 "맛만 봐요"를 고르면 조금도 맛보지 않는다고 짚는다.',
        exit: [
          XT('mindmap', { topic: '가방 속에', slots: ['먹어도 돼요', '물어봐요'], cards: ['엄마가 넣은 과자', '이름 없는 알약', '내 도시락', '언니 약 봉투'] }, '가방 속 물건을 두 가지로 나누어 보세요.',
            { sort: { '먹어도 돼요': ['엄마가 넣은 과자', '내 도시락'], 물어봐요: ['이름 없는 알약', '언니 약 봉투'] } }),
          XC('사탕인지 약인지 모르면?', ['맛만 조금 봐요', '먹지 않고 어른께 물어요', '친구에게 줘요'], 1, '모르는 것은 맛보지도 않고 물어요.'),
          MOOD,
        ],
        wsTitle: '모르면 먹지 않아요',
        ws: [
          WT('먹어도 되면 ○, 물어봐야 하면 △를 쓰세요.', ['물건', '○ / △'], [['급식 반찬', ''], ['바닥의 알약', ''], ['처음 보는 젤리', '']], '○, △, △'),
          WB('빈칸에 알맞은 말을 쓰세요.', '모르는 것은 먹기 전에 어른께 ___요.', '물어봐'),
          WC('약은 무엇일까요?', ['음료', '어른이 줄 때 먹는 것', '간식'], '어른이 줄 때 먹는 것'),
          WD('"이게 뭐예요?" 하고 묻는 내 모습을 그려 보세요.'),
        ],
        notes: '자주 보이는 어려움: ① 달콤하면 먹어도 된다고 여긴다 → 약도 달콤할 수 있다. ② 맛만 보는 것은 괜찮다고 여긴다 → 조금도 맛보지 않는다.',
      }),

      LESSON(3, {
        title: '세제·표백제는 만지지 않기',
        objective: '집 안의 세제·표백제·살충제 같은 물질을 만지거나 먹지 않고 어른께 알릴 수 있다.',
        draw: 'paper bottles of detergent placed high on a shelf out of reach, with a child pointing up and a parent nodding',
        banner: '위험한 물질은 어른 몫', extra: [{ motif: 'leaf', x: 300, y: 222 }],
        intro: '"집에서 청소할 때 쓰는 물건에는 무엇이 있나요?" 대답을 듣고(기다릴 반응: "세제", "락스") "이런 물질은 몸에 들어가거나 눈에 들어가면 다칠 수 있어요. 어린이는 만지지 않고 어른이 써요"라고 말한다.',
        student: '우리 집에서 어른만 쓰는 물건 하나를 떠올려 봅시다.',
        acts: [
          ACT('a1', '활동 1. 어른만 쓰는 물건', 14, 'mindmap',
            '"이 물건은 어린이가 써도 될까요?" 물비누처럼 손 씻을 때 쓰는 것과 청소 세제를 견주게 한다.',
            '물건 카드를 어린이도 씀과 어른만 씀으로 나누어요.',
            [
              MS('물건을 두 가지로 나누어 보세요.', '누가 쓸까', ['어린이도 써요', '어른만 써요'], ['손 씻는 비누', '변기 세제', '내 칫솔', '살충제'], { '어린이도 써요': ['손 씻는 비누', '내 칫솔'], '어른만 써요': ['변기 세제', '살충제'] }, 0.1),
              MP('만지면 안 되는 물건만 골라 보세요.', '만지지 않아요', ['표백제 통', '모기약 뿌리개', '크레파스', '물컵'], ['표백제 통', '모기약 뿌리개'], 0.15),
              MS('보관 장면을 나누어 보세요.', '어디에 둘까', ['안전해요', '위험해요'], ['높은 곳에 둬요', '바닥에 열어 둬요', '잠금장치 서랍', '물병에 옮겨 담아요'], { 안전해요: ['높은 곳에 둬요', '잠금장치 서랍'], 위험해요: ['바닥에 열어 둬요', '물병에 옮겨 담아요'] }, 0.2,
                { conclude: '위험한 물질은 어린이 손이 닿지 않는 곳에 둬요.' }),
            ]),
          ACT('a2', '활동 2. 이럴 때 어떻게 할까', 13, 'emotion',
            '"냄새를 맡아 보면 알 수 있을까요?" 냄새를 맡거나 손으로 만져 확인하지 않는다는 점을 짚는다. 이미 묻었을 때는 바로 어른께 알리는 것이 먼저라고 말한다.',
            '위험한 물질을 만났을 때 할 일을 골라요.',
            [
              EB('세제 통 뚜껑이 열려 있어요.', '욕실 바닥에 세제 통이 뚜껑이 열린 채 있어요.', [
                { id: 'smell', text: '냄새를 맡아 봐요', result: '코가 따갑고 기침이 나요.', mood: '걱정', why: '냄새도 맡지 않아요.' },
                { id: 'tell', text: '만지지 않고 어른께 알려요', result: '어른이 닫아서 치워요.', mood: '안심' }], 'tell', 0.1),
              EB('손에 세제가 묻었어요.', '모르고 세제 통을 만져 손이 미끈거려요.', [
                { id: 'rub', text: '눈을 비벼요', result: '눈이 따가워요.', mood: '무서움', why: '묻은 손으로 눈을 만지지 않아요.' },
                { id: 'wash', text: '어른께 말하고 물로 씻어요', result: '어른이 깨끗이 씻겨 줘요.', mood: '편안함' }], 'wash', 0.2),
              EB('주스 병에 파란 물이 있어요.', '냉장고 옆 주스 병에 파란 물이 담겨 있어요.', [
                { id: 'drink', text: '주스인 줄 알고 마셔요', result: '세제여서 배가 아파요.', mood: '불안', why: '병에 든 것이 무엇인지 먼저 물어요.' },
                { id: 'ask', text: '"이게 뭐예요?" 물어요', result: '어른이 세제라며 치워요.', mood: '안심' }], 'ask', 0.25,
                { conclude: '익숙한 병에 든 것도 모르면 마시지 말고 물어요.' }),
            ]),
        ],
        wrap: '"위험한 물질을 보면 어떻게 하지요?" "만지지 않아요, 냄새 맡지 않아요, 어른께 알려요"를 함께 말한다.',
        exit: [
          XT('mindmap', { mode: 'pick', topic: '어른만 써요', basket: '어른만 써요', cards: ['곰팡이 제거제', '내 연필', '세탁 세제', '물티슈'] }, '어른만 쓰는 물건만 골라 보세요.', { pick: ['곰팡이 제거제', '세탁 세제'] }),
          XC('세제가 손에 묻었을 때 알맞은 것은?', ['눈을 비벼요', '어른께 말하고 물로 씻어요', '그냥 둬요'], 1, '어른께 알리고 물로 씻어요.'),
          MOOD,
        ],
        wsTitle: '위험한 물질은 어른 몫',
        ws: [
          WT('어린이도 쓰면 ○, 어른만 쓰면 ×를 쓰세요.', ['물건', '○ / ×'], [['손 씻는 비누', ''], ['표백제', ''], ['살충제', '']], '○, ×, ×'),
          WB('빈칸에 알맞은 말을 쓰세요.', '위험한 물질은 어린이 ___이 닿지 않는 곳에 둬요.', '손'),
          WC('열린 세제 통을 보면?', ['냄새를 맡아요', '어른께 알려요', '만져 봐요'], '어른께 알려요'),
          WD('우리 집에서 어른만 쓰는 물건을 그려 보세요.'),
        ],
        notes: '자주 보이는 어려움: ① 냄새로 확인하려 한다 → 냄새도 맡지 않는다. ② 음료 병에 든 것은 음료라 여긴다 → 모르면 묻는다. 응급 처치는 "어른께 알리기"까지만 다룬다.',
      }),

      LESSON(4, {
        title: '담배 연기를 피해 깨끗한 공기 마시기',
        objective: '담배 연기가 몸에 해로움을 알고, 연기를 피하는 방법을 고를 수 있다.',
        draw: 'a child stepping away from a grey paper cloud of smoke toward a park with green paper trees and fresh air',
        banner: '맑은 공기가 좋아요', extra: [{ motif: 'tree', x: 300, y: 214 }],
        intro: '"공원에서 숨을 크게 쉬면 어떤 느낌인가요?" 대답을 듣고 "담배 연기는 피우는 사람뿐 아니라 옆에서 마시는 사람 몸에도 해로워요. 연기가 나면 피해요"라고 말한다. 담배 피우는 가족을 흉보지 않도록 "연기를 피하는 방법"에 초점을 둔다.',
        student: '숨을 크게 들이쉬고 내쉬며 맑은 공기를 느껴 봅시다.',
        acts: [
          ACT('a1', '활동 1. 맑은 공기와 연기', 14, 'mindmap',
            '"이곳의 공기는 맑을까요?" 연기가 있는 곳과 없는 곳을 나누게 한다. 연기가 몸에 해로운 까닭은 "기침이 나고 숨쉬기 힘들게 해요" 정도로 말한다.',
            '장면을 맑은 공기와 연기로 나누어요.',
            [
              MS('장면을 두 가지로 나누어 보세요.', '어떤 공기', ['맑아요', '연기가 나요'], ['숲속 산책', '담배 연기 나는 정류장', '창문 연 교실', '연기 가득한 차 안'], { 맑아요: ['숲속 산책', '창문 연 교실'], '연기가 나요': ['담배 연기 나는 정류장', '연기 가득한 차 안'] }, 0.1),
              MS('연기를 마셨을 때 몸을 나누어 보세요.', '내 몸은', ['연기 때문', '맑은 공기 덕분'], ['기침이 나요', '숨이 시원해요', '눈이 따가워요', '머리가 맑아요'], { '연기 때문': ['기침이 나요', '눈이 따가워요'], '맑은 공기 덕분': ['숨이 시원해요', '머리가 맑아요'] }, 0.15),
              MP('연기를 피하는 행동만 골라 보세요.', '연기 피하기', ['다른 곳으로 가요', '코와 입을 가려요', '연기 쪽으로 가요', '연기를 들이마셔요'], ['다른 곳으로 가요', '코와 입을 가려요'], 0.2,
                { conclude: '담배 연기가 나면 멀리 떨어져 맑은 공기를 마셔요.' }),
            ]),
          ACT('a2', '활동 2. 연기가 날 때 어떻게 할까', 13, 'emotion',
            '"어른께 어떻게 말하면 좋을까요?" 화내거나 흉보는 대신 "연기가 싫어요, 다른 데서 피워 주세요"처럼 부드럽게 말한다는 점을 짚는다.',
            '담배 연기가 나는 장면에서 할 일을 골라요.',
            [
              EB('정류장에서 연기가 나요.', '버스 정류장 옆에서 누가 담배를 피워요.', [
                { id: 'move', text: '조금 떨어진 곳에서 기다려요', result: '맑은 공기를 마셔요.', mood: '편안함' },
                { id: 'stay', text: '그 옆에 그냥 서 있어요', result: '기침이 나요.', mood: '속상함', why: '연기는 피해요.' }], 'move', 0.1),
              EB('삼촌이 차에서 담배를 피우려 해요.', '삼촌 차를 탔는데 삼촌이 담배를 꺼내요.', [
                { id: 'say', text: '"연기가 싫어요" 부드럽게 말해요', result: '삼촌이 담배를 넣어요.', mood: '고마움' },
                { id: 'quiet', text: '말없이 참아요', result: '차 안이 연기로 가득해요.', mood: '걱정', why: '싫으면 부드럽게 말해요.' }], 'say', 0.2),
              EB('친구가 담배꽁초를 주웠어요.', '친구가 길에서 담배꽁초를 주워 장난을 쳐요.', [
                { id: 'play', text: '같이 만지며 놀아요', result: '손이 더러워지고 냄새가 나요.', mood: '속상함', why: '꽁초는 만지지 않아요.' },
                { id: 'stop', text: '"만지지 마" 하고 손을 씻게 해요', result: '친구가 손을 씻어요.', mood: '뿌듯함' }], 'stop', 0.25,
                { conclude: '담배꽁초는 만지지 않고, 만졌다면 손을 씻어요.' }),
            ]),
        ],
        wrap: '"담배 연기가 나면 어떻게 하지요?" "멀리 떨어져요"를 함께 말한다. 가족이 담배를 피워도 그 사람을 흉보지 않고, 연기를 피하는 방법을 쓰자고 말한다.',
        exit: [
          XT('emotion', { mode: 'branch', situation: '식당 밖에서 어른들이 담배를 피우고 있어요.', choices: [{ id: 'near', text: '그 옆을 지나가요', result: '연기를 마셔 기침이 나요.', mood: '속상함', why: '연기 나는 곳은 피해서 가요.' }, { id: 'around', text: '다른 길로 돌아가요', result: '맑은 공기를 마셔요.', mood: '편안함' }] }, '담배 연기가 나는 곳을 지날 때 할 일을 골라 보세요.', { choice: 'around' }),
          XC('담배 연기는 누구 몸에 해로울까요?', ['피우는 사람만', '옆에서 마시는 사람도', '아무에게도 아니에요'], 1, '담배 연기는 옆 사람 몸에도 해로워요.'),
          MOOD,
        ],
        wsTitle: '맑은 공기 마시기',
        ws: [
          WT('맑은 공기면 ○, 연기가 나면 ×를 쓰세요.', ['장소', '○ / ×'], [['숲속', ''], ['담배 연기 나는 정류장', ''], ['창문 연 교실', '']], '○, ×, ○'),
          WB('빈칸에 알맞은 말을 쓰세요.', '담배 연기가 나면 멀리 ___요.', '떨어져'),
          WC('담배꽁초를 보면?', ['주워서 놀아요', '만지지 않아요', '냄새를 맡아요'], '만지지 않아요'),
          WD('맑은 공기를 마시는 내 모습을 그려 보세요.'),
        ],
        notes: '흡연하는 가족이 있는 학생이 상처받지 않도록 사람이 아니라 연기를 피하는 행동에 초점을 둔다. 담배의 성분·질병 이름은 다루지 않는다.',
      }),

      LESSON(5, {
        title: '건강 지킴이 약속 묶기',
        objective: '약·위험한 물질·담배 연기에 대한 약속을 상황에 맞게 고르고 말할 수 있다.',
        draw: 'a child holding a paper badge with a heart, surrounded by small paper icons of a medicine cup, a high shelf, and a green tree',
        banner: '건강 지킴이', extra: [{ motif: 'star', x: 300, y: 96, color: 'rose' }],
        intro: '"우리가 배운 약속을 떠올려 볼까요?" "약은 어른과 함께", "모르면 먹지 않아요", "위험한 물질은 어른 몫", "연기는 피해요"를 칠판에 붙인다. "오늘은 상황마다 어떤 약속을 쓸지 정해 봐요"라고 말한다.',
        student: '가장 기억에 남는 약속 하나를 짝에게 말해 봅시다.',
        acts: [
          ACT('a1', '활동 1. 상황과 약속 잇기', 14, 'mindmap',
            '"이 상황에는 어떤 약속이 맞을까요?" 헷갈리면 칠판의 약속 카드를 짚어 준다.',
            '상황마다 쓸 약속을 이어요.',
            [
              MM('상황과 약속을 이어 보세요.', '어떤 약속', [{ id: 'm1', label: '약 봉투가 보여요' }, { id: 'm2', label: '처음 보는 젤리가 있어요' }, { id: 'm3', label: '세제 통이 열려 있어요' }], ['어른이 줄 때만 먹어요', '먹지 않고 물어봐요', '만지지 않고 알려요', '맛을 봐요'], { m1: '어른이 줄 때만 먹어요', m2: '먹지 않고 물어봐요', m3: '만지지 않고 알려요' }, 0.15),
              MM('상황과 약속을 이어 보세요.', '또 어떤 약속', [{ id: 'n1', label: '담배 연기가 나요' }, { id: 'n2', label: '동생이 약 병을 들었어요' }], ['멀리 떨어져요', '어른을 불러요', '같이 마셔요'], { n1: '멀리 떨어져요', n2: '어른을 불러요' }, 0.2),
              MS('약속을 두 가지로 나누어 보세요.', '건강 약속', ['지켜요', '안 해요'], ['정해 준 만큼 먹어요', '남의 약을 먹어요', '연기를 피해요', '세제 냄새를 맡아요'], { 지켜요: ['정해 준 만큼 먹어요', '연기를 피해요'], '안 해요': ['남의 약을 먹어요', '세제 냄새를 맡아요'] }, 0.2,
                { conclude: '모르면 묻고, 위험하면 알리는 것이 건강 지킴이예요.' }),
            ]),
          ACT('a2', '활동 2. 건강 지킴이 되기', 13, 'emotion',
            '"지킴이라면 어떻게 할까요?" 결과를 읽게 하고, 친구나 동생에게도 약속을 알려 줄 수 있다는 점을 짚는다.',
            '여러 장면에서 지킴이답게 할 일을 골라요.',
            [
              EB('할머니 약이 바닥에 떨어졌어요.', '할머니 약 한 알이 거실 바닥에 떨어졌어요.', [
                { id: 'give', text: '주워서 할머니께 드려요', result: '할머니가 고맙다고 해요.', mood: '고마움' },
                { id: 'eat', text: '궁금해서 먹어 봐요', result: '몸이 이상해요.', mood: '불안', why: '남의 약은 먹지 않아요.' }], 'give', 0.15),
              EB('친구가 세제로 비눗방울을 하재요.', '친구가 욕실 세제로 비눗방울 놀이를 하재요.', [
                { id: 'play', text: '같이 놀아요', result: '눈과 손이 따가워요.', mood: '속상함', why: '세제는 놀잇감이 아니에요.' },
                { id: 'no', text: '"세제는 어른 거야" 하고 비눗방울 놀이 도구를 찾아요', result: '안전한 도구로 신나게 놀아요.', mood: '신남' }], 'no', 0.2),
              EB('감기약을 먹을 시간이에요.', '감기약 먹을 시간인데 엄마가 설거지 중이에요.', [
                { id: 'self', text: '혼자 약통에서 꺼내 먹어요', result: '몇 개를 먹을지 몰라요.', mood: '걱정', why: '약은 어른이 챙겨 줄 때 먹어요.' },
                { id: 'call', text: '"엄마, 약 먹을 시간이에요" 말해요', result: '엄마가 정해진 만큼 챙겨 줘요.', mood: '편안함' }], 'call', 0.25,
                { conclude: '약 먹을 시간을 알려 드리는 것까지가 내 몫이에요.' }),
            ]),
        ],
        wrap: '"오늘 정한 건강 지킴이 약속을 함께 말해 볼까요?" 집에 가서 가족에게 약속 하나를 알려 주자고 말한다.',
        exit: [
          XT('mindmap', { mode: 'match', topic: '이럴 땐', slots: [{ id: 'e1', label: '서랍에 이름 없는 알약' }, { id: 'e2', label: '방에 담배 연기가 들어와요' }], cards: ['어른께 보여 드려요', '창문 쪽 맑은 곳으로 가요', '먹어 봐요'] }, '상황과 할 일을 이어 보세요.', { match: { e1: '어른께 보여 드려요', e2: '창문 쪽 맑은 곳으로 가요' } }),
          XC('건강 지킴이 약속이 아닌 것은?', ['모르면 물어봐요', '세제로 놀아요', '연기를 피해요'], 1, '세제는 어른만 써요.'),
          XS('내가 지킬 건강 약속을 한 문장으로 쓰세요.'),
          MOOD,
        ],
        wsTitle: '건강 지킴이 약속',
        ws: [
          WT('상황에 맞는 약속을 쓰세요.', ['상황', '약속'], [['약 봉투가 보여요', ''], ['세제 통이 열려 있어요', ''], ['담배 연기가 나요', '']], '예) 어른이 줄 때만 먹어요 / 만지지 않고 알려요 / 멀리 떨어져요'),
          WC('처음 보는 젤리를 보면?', ['먹어 봐요', '어른께 물어봐요', '친구에게 줘요'], '어른께 물어봐요'),
          WB('빈칸에 알맞은 말을 쓰세요.', '모르면 묻고, 위험하면 ___요.', '알려'),
          WD('나의 건강 지킴이 배지를 그려 보세요.'),
        ],
        notes: '단원 정리 차시. 약속 카드를 교실에 붙여 두고 보건 수업과 이어 짚는다.',
      }),
    ],
  });
})();
