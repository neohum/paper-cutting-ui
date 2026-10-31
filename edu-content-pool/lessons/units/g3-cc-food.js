/* 3학년 창체 법정교육 — 영양·식생활 (2차시).
 * 근거: 학교급식법 제13조(식생활 지도), 식생활교육지원법 제26조, 연 2회 이상(research-mandatory.md 표).
 * 3학년 범위: 다섯 가지 식품군(곡류 / 고기·생선·달걀·콩류 / 채소·과일류 / 우유·유제품류 / 유지·당류 — kitchen 교구 기본 칸)으로 음식을 나누고 빠진 식품군을 채운 한 끼 짜기,
 * 단 음료·짠 과자를 자주 먹으면 생기는 일과 건강한 간식 습관. 영양 수치는 쓰지 않는다. 식중독 예방은 생활안전(g3-cc-saf-life)이 다룬다.
 * 1학년(골고루·급식 예절)·2학년(아침밥·간식 고르기·음식 아끼기)과 겹치지 않게 '식품군으로 살피기'와 '덜 달고 덜 짜게'에 맞춘다. 장면·인물은 지은 것이다(가명 한 글자). */
(function () {
  const ID = 'g3-cc-food', GRADE = 3, TITLE = '영양·식생활';
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
    { motif: 'house', x: 96, y: 214, color: 'rose', s: 0.9 }, { motif: 'tree', x: 380, y: 214 }, ...extra,
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
    flow: '3학년 영양·식생활 단원은 음식을 식품군으로 살펴 한 끼를 고르게 짜고, 달고 짠 간식을 줄이는 습관을 세우는 2차시입니다. 1차시에는 음식을 곡류, 고기·생선·달걀·콩류, 채소·과일류, 우유·유제품류, 유지·당류의 다섯 가지 식품군으로 나누고, 빠진 식품군을 찾아 채운 한 끼를 짭니다. 2차시에는 단 음료와 짠 과자를 자주 먹으면 생기는 일을 알고, 물·과일·우유처럼 덜 달고 덜 짠 간식을 고르는 습관을 갈래짓기로 정리합니다. 근거는 학교급식법 제13조와 식생활교육지원법 제26조(연 2회 이상)입니다. 식중독 예방은 안전교육 생활안전(saf-life) 단원이 다루며, 보건교육과 연계해 운영할 수 있습니다(학교 결정).',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '다섯 가지 식품군으로 나누고 빠진 식품군 채우기',
        objective: '음식을 다섯 가지 식품군으로 나누고, 빠진 식품군을 채워 고른 한 끼를 짤 수 있다.',
        draw: 'a paper lunch tray divided into five sections with rice, fish and tofu, vegetables and fruit, milk and cheese, and a little butter, with a child pointing at an empty section',
        banner: '다섯 식품군 고르게', extra: [{ motif: 'flower', x: 300, y: 222, color: 'buttercup' }],
        intro: '"어제 저녁에 먹은 음식을 떠올려 볼까요? 그 안에 채소가 있었나요?" 두세 명의 대답을 듣고 "음식을 비슷한 것끼리 묶은 것을 식품군이라고 해요. 다섯 묶음을 고르게 먹으면 몸이 튼튼해져요"라고 말한다. "고기만 많이 먹으면 힘이 세져요"라는 반응에는 "다른 묶음이 하는 일도 우리 몸에 꼭 필요해요"라고 짚는다.',
        student: '좋아하는 음식 하나를 골라 어느 묶음에 들어갈지 짝과 이야기해 봐요.',
        acts: [
          ACT('a1', '활동 1. 음식을 식품군으로 나누기', 14, 'kitchen',
            '"두부는 어느 식품군일까요?" 1번에서 칸 이름을 함께 읽고 카드를 놓게 한다. 2번에서 감자를 채소에 두는 학생에게 "감자는 밥처럼 곡류 칸에 넣어요"라고 짚는다. 3번은 유지·당류는 조금만 먹는 묶음이라는 점을 말한다.',
            '음식 카드를 다섯 가지 식품군 칸에 나누어요.', [
              KS('음식을 알맞은 식품군 칸에 나누어 보세요.', null, ['밥', '두부', '오이', '요구르트', '기름'], { 곡류: ['밥'], 고기: ['두부'], 채소: ['오이'], 우유: ['요구르트'], 유지: ['기름'] }, 0.15),
              KS('음식을 알맞은 식품군 칸에 나누어 보세요.', null, ['감자', '닭고기', '포도', '치즈', '설탕'], { 곡류: ['감자'], 고기: ['닭고기'], 채소: ['포도'], 우유: ['치즈'], 유지: ['설탕'] }, 0.2),
              KS('음식을 알맞은 식품군 칸에 나누어 보세요.', null, ['국수', '생선', '콩', '시금치', '우유', '꿀'], { 곡류: ['국수'], 고기: ['생선', '콩'], 채소: ['시금치'], 우유: ['우유'], 유지: ['꿀'] }, 0.25,
                { conclude: '음식은 다섯 가지 식품군으로 나눌 수 있어요. 유지·당류는 조금만 먹어요.' }),
            ]),
          ACT('a2', '활동 2. 빠진 식품군 채우기', 13, 'kitchen',
            '"이 식단에는 어느 식품군이 빠졌을까요?" 1번은 준이의 아침에서 채소·과일류가 빠진 것을 찾는다. 2번은 하나의 점심에서 우유·유제품류를 채운다. 3번은 고른 한 끼를 다시 나누며 "다섯 칸이 모두 찼나요?" 하고 묻고, 귤을 과일이라 빼 두는 학생에게 채소·과일류 칸이라고 짚는다.',
            '빠진 식품군을 찾아 알맞은 음식을 골라요.', [
              KP('준이의 아침은 빵·달걀·우유예요. 빠진 식품군 음식을 골라 담아 보세요.', '아침에 더할 음식', ['사과', '당근', '버터', '설탕'], ['사과', '당근'], 0.15),
              KP('하나의 점심은 밥·생선·김치예요. 빠진 식품군 음식을 골라 담아 보세요.', '점심에 더할 음식', ['우유', '치즈', '기름', '밥'], ['우유', '치즈'], 0.2),
              KS('린이 짠 한 끼를 식품군 칸에 나누어 다섯 칸이 모두 찼는지 확인해 보세요.', null, ['빵', '달걀', '귤', '요구르트', '버터'], { 곡류: ['빵'], 고기: ['달걀'], 채소: ['귤'], 우유: ['요구르트'], 유지: ['버터'] }, 0.25,
                { conclude: '빠진 식품군을 찾아 채우면 한 끼가 고르게 돼요.' }),
            ]),
        ],
        wrap: '"오늘 저녁밥에서 빠질 것 같은 식품군은 무엇일까요?" 출구 1번에서 칸을 헷갈린 학생과 함께 칸 이름을 다시 읽는다. 2번은 빠진 식품군을 채우는 방법으로 정리한다.',
        exit: [
          XT('kitchen', { cards: ['밥', '고기', '딸기', '치즈', '기름'] }, '음식을 알맞은 식품군 칸에 나누어 보세요.', { sort: { 곡류: ['밥'], 고기: ['고기'], 채소: ['딸기'], 우유: ['치즈'], 유지: ['기름'] } }, 0.15),
          XC('밥·고기·우유만 먹은 식단에 더하면 좋은 식품군은 무엇일까요?', ['유지·당류', '채소·과일류', '곡류'], 1, '채소·과일류가 빠졌으니 채소나 과일을 더해요.'),
          XS('내가 좋아하는 한 끼에 빠진 식품군과 더할 음식을 쓰세요.'),
        ],
        wsTitle: '다섯 가지 식품군',
        ws: [
          WT('음식이 들어갈 식품군을 쓰세요.', ['음식', '식품군'], [['감자', ''], ['두부', ''], ['포도', ''], ['치즈', '']], '곡류 / 고기·생선·달걀·콩류 / 채소·과일류 / 우유·유제품류'),
          WC('빵·달걀·우유 아침에 더하면 좋은 음식에 ○ 하세요.', ['설탕', '사과', '버터'], '사과'),
          WB('빈칸에 알맞은 말을 쓰세요.', '다섯 가지 식품군 가운데 ___·당류는 조금만 먹어요.', '유지'),
          WD('다섯 가지 식품군이 모두 들어간 나만의 한 끼를 그려 보세요.'),
        ],
        notes: '자주 보이는 어려움: ① 감자·고구마를 채소로 여긴다 → 교과서 분류에서 곡류 칸에 넣는다는 점을 짚는다. ② 콩·두부를 채소로 여긴다 → 고기·생선·달걀·콩류 칸임을 알려 준다. 알레르기·종교·가정 사정으로 못 먹는 음식이 있을 수 있으니 같은 식품군의 다른 음식으로 바꿔도 된다고 말한다. 학생의 체형이나 먹는 양을 말하지 않는다.',
      }),

      LESSON(2, {
        title: '단 음료와 짠 과자 줄이는 간식 습관 고르기',
        objective: '단 음료와 짠 과자를 자주 먹으면 생기는 일을 알고, 덜 달고 덜 짠 간식 습관을 고를 수 있다.',
        draw: 'a paper snack table where a child swaps a fizzy soda and salty chips for a glass of water, a banana and a carton of milk',
        banner: '덜 달게, 덜 짜게', extra: [{ motif: 'star', x: 300, y: 96, color: 'rose' }],
        intro: '"학원 가기 전에 편의점에서 무엇을 사 먹고 싶나요?" 두세 명의 대답을 듣고 "달고 짠 간식은 맛있지만 자주 먹으면 몸에 좋지 않은 일이 생길 수 있어요"라고 말한다. "가끔 먹는 건 괜찮아요?"라는 질문에는 "맞아요, 가끔과 자주는 달라요. 오늘은 줄이는 방법을 찾아볼 거예요"라고 답한다.',
        student: '내가 좋아하는 간식 하나를 떠올려 달다·짜다·덜하다 가운데 어디에 들어갈지 짝에게 말해 봐요.',
        acts: [
          ACT('a1', '활동 1. 간식 나누고 생기는 일 잇기', 14, 'mindmap',
            '"이 간식은 단 편일까요, 짠 편일까요?" 1번은 간식을 단 간식·짠 간식·덜 달고 덜 짠 간식으로 나눈다. 2번은 자주 먹으면 생기는 일과 잇는다 — 단 음료를 자주 마시면 이가 썩기 쉽고, 짠 과자를 자주 먹으면 목이 마르고 입맛이 짜게 바뀐다는 정도로 다룬다. 3번은 이유를 고르는 문항이다.',
            '간식을 나누고, 자주 먹으면 생기는 일을 이어요.', [
              MS('간식을 나누어 보세요.', '편의점 간식', ['단 간식', '짠 간식', '덜 달고 덜 짠 간식'], ['탄산음료', '감자칩', '바나나', '사탕', '컵라면', '흰 우유'], { '단 간식': ['탄산음료', '사탕'], '짠 간식': ['감자칩', '컵라면'], '덜 달고 덜 짠 간식': ['바나나', '흰 우유'] }, 0.15),
              MM('간식 습관과 생길 수 있는 일을 이어 보세요. 맞지 않는 카드는 남겨요.', '자주 먹으면', [{ id: 's1', label: '단 음료를 자주 마셔요' }, { id: 's2', label: '짠 과자를 자주 먹어요' }, { id: 's3', label: '간식으로 배를 채워요' }], ['이가 썩기 쉬워요', '입맛이 짜게 바뀌어요', '밥을 덜 먹게 돼요', '키가 바로 커요'], { s1: '이가 썩기 쉬워요', s2: '입맛이 짜게 바뀌어요', s3: '밥을 덜 먹게 돼요' }, 0.2),
              MP('간식을 줄이면 좋은 까닭만 골라 담아 보세요.', '줄이면 좋아요', ['이를 지켜요', '밥을 맛있게 먹어요', '목이 덜 말라요', '배가 더 고파요'], ['이를 지켜요', '밥을 맛있게 먹어요', '목이 덜 말라요'], 0.25,
                { conclude: '달고 짠 간식은 가끔, 덜 달고 덜 짠 간식은 자주 골라요.' }),
            ]),
          ACT('a2', '활동 2. 건강한 간식 습관 고르기', 13, 'mindmap',
            '"이렇게 바꾸면 덜 달고 덜 짤까요?" 1번은 간식을 바꾸는 짝을 잇는다. 2번은 습관을 지키는 것과 아닌 것으로 나눈다 — 봉지째 먹지 않고 덜어 먹기, 목마를 때 물 마시기를 짚는다. 3번은 장면에 알맞은 선택을 고른다.',
            '간식을 바꾸고 건강한 간식 습관을 골라요.', [
              MM('간식을 덜 달고 덜 짠 간식으로 바꾸어 이어 보세요. 맞지 않는 카드는 남겨요.', '이렇게 바꿔요', [{ id: 'b1', label: '탄산음료 대신' }, { id: 'b2', label: '감자칩 대신' }, { id: 'b3', label: '초코 우유 대신' }], ['물', '삶은 고구마', '흰 우유', '사탕'], { b1: '물', b2: '삶은 고구마', b3: '흰 우유' }, 0.15),
              MS('간식 습관을 나누어 보세요.', '간식 습관', ['좋은 습관', '바꿀 습관'], ['덜어서 먹어요', '목마르면 물 마셔요', '봉지째 다 먹어요', '밥 대신 과자 먹어요'], { '좋은 습관': ['덜어서 먹어요', '목마르면 물 마셔요'], '바꿀 습관': ['봉지째 다 먹어요', '밥 대신 과자 먹어요'] }, 0.2),
              MP('운동 뒤 목이 마른 하나가 고를 것만 골라 담아 보세요.', '운동 뒤에', ['시원한 물', '흰 우유', '탄산음료', '단 주스 큰 병'], ['시원한 물', '흰 우유'], 0.25,
                { conclude: '물을 마시고, 덜어 먹고, 밥을 먼저 먹으면 간식 습관이 건강해져요.' }),
            ]),
        ],
        wrap: '"이번 주에 바꿔 볼 간식 하나를 정해 볼까요?" 출구 1번에서 탄산음료를 덜 단 간식에 둔 학생과 함께 다시 본다. 2번은 가끔과 자주의 차이로 정리한다.',
        exit: [
          XT('mindmap', { topic: '간식 나누기', slots: ['단·짠 간식', '덜한 간식'], cards: ['사탕', '감자칩', '귤', '물'] }, '간식을 나누어 보세요.', { sort: { '단·짠 간식': ['사탕', '감자칩'], '덜한 간식': ['귤', '물'] } }, 0.15),
          XC('목이 마를 때 가장 알맞은 것은 무엇일까요?', ['탄산음료', '물', '짠 과자'], 1, '목이 마를 때는 물을 마셔요.'),
          XS('이번 주에 바꿔 볼 간식 습관을 한 가지 쓰세요.'),
        ],
        wsTitle: '덜 달게, 덜 짜게',
        ws: [
          WT('간식을 바꾸어 쓰세요.', ['이 간식 대신', '바꿀 간식'], [['탄산음료', ''], ['감자칩', ''], ['초코 우유', '']], '예) 물 / 삶은 고구마 / 흰 우유'),
          WC('좋은 간식 습관에 ○ 하세요.', ['봉지째 다 먹어요', '덜어서 먹어요', '밥 대신 과자 먹어요'], '덜어서 먹어요'),
          WB('빈칸에 알맞은 말을 쓰세요.', '단 음료를 자주 마시면 ___가 썩기 쉬워요.', '이'),
          WS('편의점에서 고를 덜 달고 덜 짠 간식을 한 가지 쓰고 까닭을 쓰세요.'),
        ],
        notes: '자주 보이는 어려움: ① 과일 주스는 모두 단맛이 덜하다고 여긴다 → 단 주스도 단 음료라는 점을 짚되, 숫자 대신 "가끔과 자주"로 다룬다. ② 간식을 "나쁜 음식"으로만 여긴다 → 먹지 말자가 아니라 줄이고 바꾸는 습관이라는 점을 분명히 한다. 학생의 체형·체중을 말하거나 간식을 사 먹는 형편을 묻지 않는다.',
      }),
    ],
  });
})();
