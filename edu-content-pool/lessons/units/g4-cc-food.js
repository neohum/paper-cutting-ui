/* 4학년 창체 법정교육 — 영양·식생활 (2차시). 근거: 학교급식법 제13조·식생활교육지원법 제26조(연 2회 이상). 식품군은 「한국인 영양소 섭취기준」 식품구성자전거 분류. 몸무게·체형 언급 금지, 장면·인물은 가상(가명 한 글자).
 */
(function () {
  const G = 4, CODE = 'food';
  const UNIT = `g${G}-창체-${CODE}`;
  const TITLE = '영양·식생활';
  const base = (n) => ({
    id: `g${G}-cc-${CODE}-0${n}`, schema: 'edu-lesson.v1',
    catalog: { unit: UNIT, lesson: n },
    grade: G, subject: '창체', unitTitle: TITLE,
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
  const MS = (prompt, topic, slots, cards, sort, d, more) => ({ prompt, toolOptions: { topic, slots, cards }, target: { sort }, difficulty: d, ...more });
  const MM = (prompt, topic, slots, cards, match, d, more) => ({ prompt, toolOptions: { mode: 'match', topic, slots, cards }, target: { match }, difficulty: d, ...more });
  const MP = (prompt, topic, cards, pick, d, more) => ({ prompt, toolOptions: { mode: 'pick', topic, basket: topic, cards }, target: { pick }, difficulty: d, ...more });
  const EB = (prompt, situation, choices, choice, d, more) => ({ prompt, toolOptions: { mode: 'branch', situation, choices }, target: { choice }, difficulty: d, ...more });
  const EM = (prompt, slots, cards, match, d, more) => ({ prompt, toolOptions: { mode: 'match', slots, cards }, target: { match }, difficulty: d, ...more });
  const ES = (prompt, slots, cards, sort, d, more) => ({ prompt, toolOptions: { mode: 'sort', slots, cards, weather: false }, target: { sort }, difficulty: d, ...more });
  const EP = (prompt, basket, cards, pick, d, more) => ({ prompt, toolOptions: { mode: 'pick', basket, cards, weather: false }, target: { pick }, difficulty: d, ...more });
  const SO = (prompt, title, slots, cards, order, d, more) => ({ prompt, toolOptions: { title, slots, cards }, target: { order }, difficulty: d, ...more });
  const SF = (prompt, slots, cards, fill, d, more) => ({ prompt, toolOptions: { mode: 'fill', slots, cards }, target: { fill }, difficulty: d, ...more });
  const LV = { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } };
  const LVB = { easy: { showBack: true }, base: {}, challenge: {} };
  const MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };
  // 도입 6 + 전개 27 + 정리 7 = 40분
  const LESSON = (n, o) => Object.assign(base(n), {
    title: o.title, objective: o.objective,
    illustration: { prompt: PROMPT(o.draw), scene: SCENE(o.banner, o.extra) },
    stages: [
      { id: 'intro', title: '도입', minutes: 6, teacher: o.intro.teacher, student: o.intro.student, demo: o.intro.demo },
      { id: 'main', title: '전개', minutes: 27, activities: o.acts },
      { id: 'wrapup', title: '정리', minutes: 7, teacher: o.wrap.teacher, exitTicket: o.wrap.exit },
    ],
    worksheet: o.ws, differentiation: o.diff, teacherNotes: o.notes,
  });
  const DIFF = (easy, challenge) => ({ easy, base: '모든 카드를 놓거나 보기를 고른 뒤 확인을 눌러 스스로 고쳐요.', challenge });

  PaperLessons.registerUnit({
    id: `g${G}-cc-${CODE}`, schema: 'edu-unit.v1', catalogUnit: UNIT,
    grade: G, subject: '창체', unitTitle: TITLE,
    flow: '4학년 영양·식생활 단원은 "골고루"와 "바르게"를 몸에 익히는 2차시입니다. 1차시에는 곡류, 고기·생선·달걀·콩류, 채소류, 과일류, 우유·유제품류로 음식을 나누고 빠진 식품군을 채워 골고루 담은 식판을 꾸립니다. 2차시에는 아침밥 먹기·천천히 씹기·편식 줄이기 같은 바른 식습관을 이야기 차례와 갈림길로 연습합니다. 근거는 학교급식법 제13조·식생활교육지원법 제26조(연 2회 이상)이며, 급식 시간과 연계해 운영할 수 있습니다. 몸무게·체형을 평가하는 말은 쓰지 않습니다. 5학년(영양 표시의 당류·나트륨, 단 음료 대신 물), 6학년(싱겁고 골고루 먹는 식단, 식중독 예방과 음식물 쓰레기 줄이기)으로 이어집니다.',
    refs: {},
    lessons: [
      // ───────────────────────────── 1차시
      LESSON(1, {
        title: '식품군 카드로 골고루 담은 식판 꾸리기',
        objective: '음식을 식품군으로 나누고, 빠진 식품군을 채워 골고루 담은 식판을 꾸릴 수 있다.',
        draw: 'a paper school lunch tray with rice, soup, fish, vegetables, fruit and a small carton of milk, each item cut from colorful paper',
        banner: '골고루 담아요', extra: [{ motif: 'leaf', x: 300, y: 222 }],
        intro: {
          teacher: '"오늘 급식에 나온 음식을 떠올려 볼까요? 밥, 국, 반찬은 왜 여러 가지가 나올까요?" 두세 명의 대답을 듣고(기다릴 반응: "골고루 먹으라고요") 시연 단추로 음식 카드가 식품군으로 나뉘는 모습을 보여 준다. "고기만 많이 먹으면 힘이 세져요"가 나오면 "자동차에 기름만 있고 바퀴가 없다면 달릴 수 있을까요?"라고 되묻는다. 오늘은 식품군을 알고 골고루 담은 식판을 꾸린다고 밝힌다.',
          student: '내가 좋아하는 반찬과 잘 안 먹는 반찬을 짝에게 하나씩 말해 봅시다.',
          demo: { tool: 'mindmap', options: { topic: '어떤 식품군일까', slots: ['곡류', '채소류'], cards: ['쌀밥', '시금치나물'], shuffle: false }, sequence: [{ sort: { '곡류': ['쌀밥'], '채소류': ['시금치나물'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 음식을 식품군으로 나누기', minutes: 13, tool: 'mindmap',
            teacher: '"이 음식은 어느 식품군에 들어갈까요?" 카드를 놓을 때마다 그 식품군이 몸에서 하는 일(힘을 내요, 몸을 만들어요, 몸을 튼튼하게 지켜요)을 함께 말하게 한다. 2번에서 두부를 채소로 놓는 학생에게 "두부는 무엇으로 만들까요?"라고 물어 콩류임을 짚는다. 3번에서 치즈·요구르트가 우유·유제품류임을 짚어 준다.',
            task: '음식 카드를 알맞은 식품군에 나누어요.',
            levels: LV,
            items: [
              MS('곡류와 채소류로 나누어 보세요.', '곡류와 채소류', ['곡류', '채소류'], ['보리밥', '오이무침', '식빵', '배추김치'], { '곡류': ['보리밥', '식빵'], '채소류': ['오이무침', '배추김치'] }, 0.1),
              MS('고기·생선·달걀·콩류와 과일류로 나누어 보세요.', '단백질과 과일', ['고기·생선·달걀·콩류', '과일류'], ['고등어구이', '사과', '두부조림', '귤'], { '고기·생선·달걀·콩류': ['고등어구이', '두부조림'], '과일류': ['사과', '귤'] }, 0.2),
              MP('우유·유제품류에 들어가는 음식만 골라 담아 보세요.', '우유·유제품류', ['치즈', '요구르트', '감자', '달걀말이'], ['치즈', '요구르트'], 0.2,
                { conclude: '음식은 곡류, 고기·생선·달걀·콩류, 채소류, 과일류, 우유·유제품류처럼 식품군으로 나눌 수 있어요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 빠진 식품군 채워 식판 완성하기', minutes: 14, tool: 'mindmap',
            teacher: '"이 식판에는 어떤 식품군이 빠졌을까요?" 1번은 식판의 음식과 식품군을 이어 무엇이 비었는지 찾게 한다. 2번에서 라면·과자처럼 한쪽에 치우친 간식으로 끼니를 대신하는 것을 골라내게 한다. 3번은 채소를 싫어하는 친구가 한 입부터 도전하는 방법을 고르게 해 편식 줄이기로 이어 간다.',
            task: '식판의 음식을 식품군과 잇고, 빠진 식품군을 채울 음식을 골라요.',
            levels: LV,
            items: [
              MM('하의 아침 식판에 담긴 음식과 식품군을 이어 보세요. 맞지 않는 카드는 남겨요.', '하의 식판', [{ id: 's1', label: '현미밥' }, { id: 's2', label: '달걀프라이' }, { id: 's3', label: '우유 한 컵' }], ['곡류', '고기·생선·달걀·콩류', '우유·유제품류', '채소류'], { s1: '곡류', s2: '고기·생선·달걀·콩류', s3: '우유·유제품류' }, 0.2),
              MP('하의 식판에 빠진 채소류와 과일류를 채울 음식만 골라 담아 보세요.', '빠진 식품군 채우기', ['방울토마토', '브로콜리', '감자튀김', '초콜릿'], ['방울토마토', '브로콜리'], 0.25),
              MS('골고루 먹는 식사와 한쪽에 치우친 식사로 나누어 보세요.', '어떤 식사일까', ['골고루 먹어요', '치우쳤어요'], ['밥·생선·나물·과일', '라면과 과자만', '빵·우유·샐러드', '고기만 잔뜩'], { '골고루 먹어요': ['밥·생선·나물·과일', '빵·우유·샐러드'], '치우쳤어요': ['라면과 과자만', '고기만 잔뜩'] }, 0.25,
                { conclude: '여러 식품군을 골고루 담아야 몸이 튼튼하게 자라요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 급식에서 내가 덜 먹던 식품군을 하나 골라 한 입 더 먹어 볼까요?" 출구 1번에서 시금치나물이나 바나나를 식판에 있는 쪽에 놓은 학생에게 "쌀밥과 불고기는 어느 식품군이었나요? 그럼 무엇이 비었을까요?"라고 되묻는다. 2번에서 "좋아하는 음식만"을 고른 학생에게는 식품군마다 하는 일이 다르다는 것을 다시 짚는다.',
          exit: [
            { type: 'tool', tool: 'mindmap', options: { topic: '빠진 것 찾기', slots: ['식판에 있어요', '더 채워요'], cards: ['쌀밥', '불고기', '시금치나물', '바나나'] }, state: { at: {} }, prompt: '쌀밥과 불고기만 담긴 식판이에요. 식판에 있는 것과 더 채울 것으로 나누어 보세요.',
              target: { sort: { '식판에 있어요': ['쌀밥', '불고기'], '더 채워요': ['시금치나물', '바나나'] } }, difficulty: 0.2 },
            { type: 'choice', prompt: '골고루 먹는 까닭으로 알맞은 것은 무엇인가요?', options: ['식품군마다 몸에서 하는 일이 달라서', '좋아하는 음식만 먹으면 충분해서', '많이 먹을수록 좋아서'], answer: 0, difficulty: 0.1, explain: '식품군마다 하는 일이 달라 골고루 먹어야 해요.' },
            { type: 'short', prompt: '내가 덜 먹는 식품군을 하나 쓰고, 어떻게 먹어 볼지 한 문장으로 쓰세요.' },
            MOOD,
          ],
        },
        ws: {
          title: '식품군을 골고루 담은 식판',
          items: [
            { type: 'table', prompt: '음식에 알맞은 식품군을 쓰세요.', columns: ['음식', '식품군'], cells: [['보리밥', ''], ['두부조림', ''], ['오이무침', ''], ['요구르트', '']], answer: '곡류, 고기·생선·달걀·콩류, 채소류, 우유·유제품류' },
            { type: 'choice', prompt: '골고루 먹는 식사에 ○ 하세요.', options: ['라면과 과자만', '밥·생선·나물·과일', '고기만 잔뜩'], answer: '밥·생선·나물·과일' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '두부는 콩으로 만들어서 고기·생선·달걀·___류에 들어가요.', answer: '콩' },
            { type: 'short', prompt: '내가 꾸리고 싶은 골고루 식판을 음식 이름으로 쓰세요.' },
          ],
          easy: {
            note: '식판에 여러 색깔 음식이 있는지 살펴보세요.',
            items: [
              { type: 'choice', prompt: '채소에 ○ 하세요.', options: ['오이', '사탕'], answer: '오이' },
              { type: 'table', prompt: '과일이면 ○, 아니면 ×를 쓰세요.', columns: ['음식', '○ / ×'], cells: [['사과', ''], ['식빵', ''], ['귤', '']], answer: '○, ×, ○' },
              { type: 'draw', prompt: '골고루 담은 내 식판을 그려 보세요.' },
              { type: 'short', prompt: '내가 좋아하는 채소를 쓰세요.' },
            ],
          },
        },
        diff: DIFF('카드는 맞는 칸에 놓으면 바로 알려 줘요. 식품군 그림표를 옆에 두고 해요.', '두부·치즈처럼 헷갈리는 음식을 가려내고, 카드 순서가 섞여 나와요.'),
        notes: '자주 보이는 어려움: ① 고기만 먹으면 튼튼해진다고 여긴다 → 식품군마다 하는 일이 다르다는 점을 짚는다. ② 두부·콩을 채소로 여긴다 → 콩류는 고기·생선·달걀과 같은 무리임을 알린다. ③ 과자·라면으로 끼니를 대신해도 된다고 여긴다 → 한쪽에 치우친 식사임을 보인다. 식품군 이름은 보건복지부·한국영양학회 「한국인 영양소 섭취기준」의 식품구성자전거 분류를 따랐다(유지·당류는 이 차시에서 다루지 않음). 학생의 몸무게·체형을 언급하지 않고, 식품 알레르기가 있는 학생에게 특정 음식을 권하지 않는다.',
      }),

      // ───────────────────────────── 2차시
      LESSON(2, {
        title: '아침밥부터 천천히 씹기까지 바른 식사 차례 익히기',
        objective: '아침밥 먹기·천천히 씹기·편식 줄이기 같은 바른 식습관을 알고, 식사 전후의 차례를 바르게 놓을 수 있다.',
        draw: 'a paper child eating breakfast with rice, soup and fruit at a sunny paper table, a clock on the wall showing morning and a family member smiling nearby',
        banner: '아침밥은 하루의 힘', extra: [{ motif: 'flower', x: 300, y: 222, color: 'peach' }],
        intro: {
          teacher: '"아침밥을 먹고 온 날과 거른 날, 3교시쯤 몸은 어떻게 다를까요?" 두세 명의 대답을 듣고(기다릴 반응: "배고프고 힘이 없어요") 시연 단추로 아침 식사 차례 카드가 놓이는 모습을 보여 준다. "시간이 없어서 못 먹어요"가 나오면 "간단하게 먹을 수 있는 아침밥은 무엇일까요?"라고 되묻는다. 오늘은 바른 식습관과 식사 차례를 익힌다고 밝힌다. 가정 사정으로 아침을 먹기 어려운 학생이 있을 수 있으므로 누가 먹었는지 묻지 않는다.',
          student: '간단하게 먹을 수 있는 아침밥 메뉴를 짝과 한 가지씩 말해 봅시다.',
          demo: { tool: 'story', options: { cards: [{ id: 'wash', text: '손을 씻어요', motif: 'leaf' }, { id: 'eat', text: '천천히 꼭꼭 씹어요', motif: 'sun' }], slots: ['먼저', '다음'], shuffle: false }, sequence: [{ order: ['wash', 'eat'] }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 바른 식사의 차례 놓기', minutes: 14, tool: 'story',
            teacher: '"무엇을 먼저 해야 할까요?" 카드를 놓을 때마다 그 차례가 왜 필요한지 말하게 한다. 1번에서 식사 전 손 씻기를 빼먹는 학생에게 손에 묻은 세균을 떠올리게 한다. 2번에서 빨리 먹기 대회처럼 먹으면 배부름을 늦게 느껴 많이 먹게 된다는 점을 짚는다. 3번은 처음 보는 반찬을 한 입부터 도전하는 이야기로 편식 줄이기를 다룬다.',
            task: '바른 식사의 차례를 이야기 카드로 놓아요.',
            levels: LV,
            items: [
              SO('아침에 일어나 학교 가기 전까지의 차례를 놓아 보세요.', '건강한 아침', ['처음', '다음', '그다음', '끝'], [{ id: 'a', text: '일찍 일어나요', motif: 'sun' }, { id: 'b', text: '손을 씻어요', motif: 'leaf' }, { id: 'c', text: '아침밥을 먹어요', motif: 'house' }, { id: 'd', text: '이를 닦고 등교해요', motif: 'star' }], ['a', 'b', 'c', 'd'], 0.15),
              SO('급식을 천천히 먹는 차례를 놓아 보세요.', '꼭꼭 씹어 먹기', ['먼저', '다음', '마지막'], [{ id: 'e', text: '한 숟가락씩 떠요', motif: 'cloud' }, { id: 'f', text: '여러 번 꼭꼭 씹어요', motif: 'sun' }, { id: 'g', text: '삼킨 뒤 다음을 떠요', motif: 'flower' }], ['e', 'f', 'g'], 0.2),
              SO('처음 보는 반찬에 도전한 서의 이야기를 차례대로 놓아 보세요.', '서의 한 입 도전', ['처음', '다음', '그다음', '끝'], [{ id: 'h', text: '가지나물이 낯설어요', motif: 'cloud' }, { id: 'i', text: '한 입만 먹어 봐요', motif: 'leaf' }, { id: 'j', text: '생각보다 맛있어요', motif: 'sun' }, { id: 'k', text: '다음엔 두 입 먹어요', motif: 'star' }], ['h', 'i', 'j', 'k'], 0.25,
                { conclude: '손 씻고, 아침밥 먹고, 천천히 씹고, 한 입씩 도전하면 바른 식습관이 돼요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 식사 갈림길에서 바른 습관 고르기', minutes: 13, tool: 'emotion',
            teacher: '"이렇게 하면 내 몸은 어떻게 될까요?" 결과 칸을 소리 내어 읽게 한다. 1번에서 아침 대신 과자를 들고 가는 보기를 "그래도 먹은 것"이라 여기는 학생에게 식품군을 떠올리게 한다. 2번은 급식을 빨리 먹고 놀러 나가려는 상황이다. 3번에서 싫어하는 반찬을 몰래 버리는 대신 양을 줄여 받는 방법이 있음을 알려 준다.',
            task: '식사 상황에서 어떻게 할지 고르고, 그 결과를 살펴봐요.',
            levels: LVB,
            items: [
              EB('늦잠을 자서 아침 먹을 시간이 빠듯해요. 준이는 어떻게 할까요?', '준이가 늦잠을 자서 학교 갈 시간까지 10분밖에 남지 않았어요.', [
                { id: 'quick', text: '바나나와 우유로 간단히 먹어요', result: '오전 수업에 힘이 나고 집중이 잘돼요.', mood: '뿌듯함' },
                { id: 'skip', text: '아무것도 안 먹고 뛰어가요', result: '3교시에 배가 고파 머리가 멍해요.', mood: '피곤함', why: '간단하게라도 아침을 먹으면 오전에 힘이 나요.' },
                { id: 'snack', text: '과자 한 봉지를 들고 가요', result: '금세 배가 고프고 입안이 텁텁해요.', mood: '불편함', why: '과자는 한쪽에 치우친 간식이라 끼니가 되기 어려워요.' }], 'quick', 0.15),
              EB('급식을 빨리 먹고 운동장에 나가고 싶어요. 하는 어떻게 할까요?', '친구들이 먼저 축구를 시작해서 하는 급식을 서둘러 먹고 싶어요.', [
                { id: 'gulp', text: '거의 씹지 않고 삼켜요', result: '배가 더부룩해 축구할 때 옆구리가 아파요.', mood: '불편함', why: '꼭꼭 씹어야 소화가 잘돼요.' },
                { id: 'chew', text: '꼭꼭 씹어 다 먹고 나가요', result: '속이 편하고 힘이 나서 신나게 뛰어요.', mood: '즐거움' },
                { id: 'leave', text: '반 넘게 남기고 나가요', result: '오후에 배가 고파 힘이 빠져요.', mood: '피곤함', why: '알맞은 양을 받아 남기지 않고 먹어요.' }], 'chew', 0.2),
              EB('급식에 싫어하는 버섯볶음이 나왔어요. 서는 어떻게 할까요?', '서는 버섯을 싫어하는데 오늘 급식에 버섯볶음이 나왔어요.', [
                { id: 'throw', text: '받아서 몰래 버려요', result: '음식이 버려지고 서는 여전히 버섯이 낯설어요.', mood: '불편함', why: '버리기보다 양을 줄여 받는 방법이 있어요.' },
                { id: 'small', text: '조금만 받아 한 입 먹어 봐요', result: '생각보다 먹을 만해서 다음에도 도전해요.', mood: '뿌듯함' },
                { id: 'never', text: '절대 안 먹는다고 받지 않아요', result: '버섯이 주는 영양을 계속 놓쳐요.', mood: '아쉬움', why: '조금씩 도전하면 입맛이 넓어져요.' }], 'small', 0.25,
                { conclude: '아침은 간단히라도 먹고, 꼭꼭 씹고, 싫은 반찬은 조금씩 도전해요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"내일 아침에 먹을 수 있는 간단한 아침밥은 무엇일까요?" 출구 1번에서 숟가락 가득 떠서 빨리 먹는 보기를 고른 학생에게 꼭꼭 씹는 까닭을 다시 묻는다. 2번에서 "몰래 버리기"를 고른 학생에게는 양을 줄여 받고 한 입 도전하는 방법을 짚는다. 식품 알레르기는 편식과 다르므로 억지로 먹지 않는다고 덧붙인다.',
          exit: [
            { type: 'tool', tool: 'story', options: { title: '저녁 식사 시간', slots: ['먼저', '다음', '마지막'], cards: [{ id: 'x1', text: '손을 깨끗이 씻어요', motif: 'leaf' }, { id: 'x2', text: '골고루 꼭꼭 먹어요', motif: 'sun' }, { id: 'x3', text: '그릇을 정리해요', motif: 'house' }] }, state: { order: [] }, prompt: '저녁 식사 시간의 차례를 놓아 보세요.', target: { order: ['x1', 'x2', 'x3'] }, difficulty: 0.15 },
            { type: 'choice', prompt: '싫어하는 반찬이 나왔을 때 알맞은 행동은 무엇인가요?', options: ['받아서 몰래 버려요', '조금만 받아 한 입 먹어 봐요', '친구에게 다 줘요'], answer: 1, difficulty: 0.1, explain: '양을 줄여 받고 한 입씩 도전하면 입맛이 넓어져요(알레르기 음식은 먹지 않아요).' },
            { type: 'short', prompt: '내가 고치고 싶은 식습관 하나와 고치는 방법을 한 문장으로 쓰세요.' },
            MOOD,
          ],
        },
        ws: {
          title: '아침밥과 바른 먹기 습관',
          items: [
            { type: 'table', prompt: '바른 식습관이면 ○, 고칠 습관이면 ×를 쓰세요.', columns: ['습관', '○ / ×'], cells: [['꼭꼭 씹어 먹어요', ''], ['아침을 자주 걸러요', ''], ['한 입씩 도전해요', ''], ['반찬을 몰래 버려요', '']], answer: '○, ×, ○, ×' },
            { type: 'choice', prompt: '아침 먹을 시간이 빠듯할 때 알맞은 방법에 ○ 하세요.', options: ['아무것도 안 먹어요', '바나나와 우유로 간단히 먹어요', '과자를 들고 가요'], answer: '바나나와 우유로 간단히 먹어요' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '음식을 꼭꼭 ___ 먹으면 소화가 잘돼요.', answer: '씹어' },
            { type: 'short', prompt: '이번 주에 한 입 도전해 볼 반찬을 쓰세요.' },
          ],
          easy: {
            note: '"내 몸에 힘을 주는 습관은 무엇일까?"를 떠올려 보세요.',
            items: [
              { type: 'choice', prompt: '바른 습관에 ○ 하세요.', options: ['꼭꼭 씹어요', '마구 삼켜요'], answer: '꼭꼭 씹어요' },
              { type: 'table', prompt: '좋은 습관이면 ○, 아니면 ×를 쓰세요.', columns: ['습관', '○ / ×'], cells: [['아침밥 먹기', ''], ['반찬 버리기', ''], ['손 씻고 먹기', '']], answer: '○, ×, ○' },
              { type: 'draw', prompt: '내가 먹고 싶은 아침밥을 그려 보세요.' },
              { type: 'short', prompt: '밥 먹기 전에 할 일을 쓰세요.' },
            ],
          },
        },
        diff: DIFF('차례 카드는 맞는 자리에 놓으면 바로 알려 주고, 갈림길 결과가 처음부터 보여요.', '"과자를 들고 가요"처럼 그럴듯한 보기를 가려내고, 카드 순서가 섞여 나와요.'),
        notes: '자주 보이는 어려움: ① 과자로 아침을 대신해도 먹은 것이라 여긴다 → 식품군이 치우친 간식임을 짚는다. ② 빨리 먹는 것을 잘 먹는 것으로 여긴다 → 꼭꼭 씹어야 소화가 잘된다는 점을 말한다. ③ 싫은 반찬은 버리면 된다고 여긴다 → 양을 줄여 받고 한 입 도전하는 방법을 알린다. 아침 결식은 가정 사정일 수 있으므로 누가 먹었는지 조사하거나 공개하지 않는다. 식품 알레르기가 있는 음식은 도전 대상이 아님을 분명히 한다.',
      }),
    ],
  });
})();
