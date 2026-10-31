/* 중1 창체 법정교육 — 영양·식생활 (2차시). 근거: 학교급식법 제13조, 식생활교육지원법 제26조(연 2회 이상).
 * 식품군은 보건복지부·한국영양학회 「한국인 영양소 섭취기준」의 식품구성자전거(곡류, 고기·생선·달걀·콩류, 채소류, 과일류, 우유·유제품류, 유지·당류와 물)를 따른다. 섭취량 숫자는 쓰지 않는다. 장면·인물은 가명. */
(function () {
  const G = 7; const CODE = 'food';
  const UNIT = `g${G}-창체-${CODE}`;
  const TITLE = '영양·식생활';
  const base = (n) => ({
    id: `g${G}-cc-${CODE}-${String(n).padStart(2, '0')}`, schema: 'edu-lesson.v1',
    catalog: { unit: UNIT, lesson: n },
    grade: G, subject: '창체', unitTitle: TITLE,
    standards: [],
    minutes: 40,
    formats: ['chromebook', 'projector', 'print'],
  });
  const PROMPT = (what) => `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`;
  const SCENE = (text, extra = []) => ({ viewBox: [480, 270], layers: [
    { motif: 'sun', x: 410, y: 58, s: 0.8 }, { motif: 'cloud', x: 120, y: 52 }, { motif: 'hills', y: 204 },
    { motif: 'house', x: 96, y: 214, color: 'mint', s: 0.9 }, { motif: 'tree', x: 380, y: 214 }, ...extra,
    { motif: 'text', x: 240, y: 140, text, size: 22 },
  ] });
  // 활동 문항 — 한 활동은 교구 하나로만 돈다(mindmap: MS·MM·MP / emotion: EB·ES / story: SO)
  const MS = (prompt, topic, slots, cards, sort, d, more) => ({ prompt, toolOptions: { mode: 'sort', topic, slots, cards }, target: { sort }, difficulty: d, ...more });
  const MM = (prompt, topic, slots, cards, match, d, more) => ({ prompt, toolOptions: { mode: 'match', topic, slots, cards }, target: { match }, difficulty: d, ...more });
  const MP = (prompt, topic, cards, pick, d, more) => ({ prompt, toolOptions: { mode: 'pick', topic, basket: topic, cards }, target: { pick }, difficulty: d, ...more });
  const EB = (prompt, situation, choices, choice, d, more) => ({ prompt, toolOptions: { mode: 'branch', situation, choices }, target: { choice }, difficulty: d, ...more });
  const ES = (prompt, situation, feeling, level, d, more) => ({ prompt, toolOptions: { mode: 'scale', situation, feeling }, target: { level }, difficulty: d, ...more });
  const SO = (prompt, title, slots, cards, order, d, more) => ({ prompt, toolOptions: { mode: 'order', title, slots, cards }, target: { order }, difficulty: d, ...more });
  const C = (id, text, motif) => ({ id, text, motif });
  const TALK = (prompt) => ({ prompt, free: true, talk: true, difficulty: 0 });
  const LV = { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } };
  const LVB = { easy: { showBack: true }, base: {}, challenge: {} };
  // 출구 질문
  const XS = (prompt, topic, slots, cards, sort, d = 0.2) => ({ type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic, slots, cards }, state: { at: {} }, prompt, target: { sort }, difficulty: d });
  const XB = (prompt, situation, choices, choice, d = 0.2) => ({ type: 'tool', tool: 'emotion', options: { mode: 'branch', situation, choices }, state: { choice: null }, prompt, target: { choice }, difficulty: d });
  const XC = (prompt, options, answer, explain, d = 0.2) => ({ type: 'choice', prompt, options, answer, difficulty: d, explain });
  const XT = (prompt) => ({ type: 'short', prompt });
  const MOOD = { type: 'mood', prompt: '오늘 수업을 마친 내 마음은 어떤가요?' };
  // 도입 시연
  const DEMO = (topic, slots, cards, sort) => ({ tool: 'mindmap', options: { mode: 'sort', topic, slots, cards, shuffle: false }, sequence: [{ sort }] });
  const DIFF = {
    easy: '맞는 칸에 놓은 카드에 초록 테두리가 생기고, 갈림길 문항은 결과 칸이 처음부터 보여요.',
    base: '모든 카드를 놓은 뒤 확인을 눌러 스스로 고쳐요.',
    challenge: '카드 순서가 섞여 나오고, 그럴듯하지만 맞지 않는 보기를 근거를 들어 가려내요.',
  };
  // 도입 6 + 전개 27 + 정리 7 = 40분
  const LESSON = (n, o) => Object.assign(base(n), {
    title: o.title, objective: o.objective,
    illustration: { prompt: PROMPT(o.draw), scene: SCENE(o.banner, o.extra) },
    stages: [
      { id: 'intro', title: '도입', minutes: 6, teacher: o.intro.teacher, student: o.intro.student, demo: o.intro.demo },
      { id: 'main', title: '전개', minutes: 27, activities: o.acts },
      { id: 'wrapup', title: '정리', minutes: 7, teacher: o.wrap.teacher, exitTicket: o.wrap.exit },
    ],
    worksheet: o.ws, differentiation: o.diff || DIFF, teacherNotes: o.notes,
  });

  PaperLessons.registerUnit({
    id: `g${G}-cc-${CODE}`, schema: 'edu-unit.v1', catalogUnit: UNIT,
    grade: G, subject: '창체', unitTitle: TITLE,
    flow: '성장이 빠른 중학교 1학년에게 골고루 먹는 식생활의 기준을 세워 주는 단원입니다. 1차시에는 식품구성자전거의 식품군으로 급식·편의점 한 끼를 나누어 보고 빠진 식품군을 채웁니다. 2차시에는 아침을 거르는 장면과 간식을 고르는 장면에서 선택의 결과를 비교하며 실천할 수 있는 작은 바꿈을 정합니다. 몸무게·체형을 평가하거나 개인의 식습관을 공개하게 하지 않고, 가상 인물의 식단으로 이야기합니다. 2학년(영양성분표 읽기)·3학년(식품 표시와 지속가능한 식생활)으로 이어집니다.',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '급식과 편의점 한 끼를 식품군으로 나누기',
        objective: '식품구성자전거의 식품군으로 음식을 나누고, 한 끼 식단에서 빠진 식품군을 찾아 채울 수 있다.',
        draw: 'a paper bicycle whose wheels are filled with grains, vegetables, fish, fruit and milk, beside a school lunch tray',
        banner: '골고루가 힘이에요', extra: [{ motif: 'leaf', x: 300, y: 222 }],
        intro: {
          teacher: '"자전거 바퀴 한쪽이 찌그러지면 어떻게 될까요?" 대답을 듣고(기다릴 반응: "잘 안 굴러가요") 식품구성자전거 그림을 보여 주며 앞바퀴의 물, 뒷바퀴의 다섯 식품군을 짚는다. 시연으로 음식 카드를 식품군에 넣는다. "고기만 많이 먹으면 키가 커요"라는 말이 나오면 "자전거 바퀴의 한 칸만 크게 만들면 잘 굴러갈까요?"라고 되묻는다. 오늘은 한 끼를 식품군으로 나누어 본다고 밝힌다.',
          student: '오늘 급식(또는 가상의 점심) 메뉴 하나를 골라 어느 식품군에 들어갈지 짝에게 말해 봅시다.',
          demo: DEMO('식품군', ['곡류', '채소류'], ['현미밥', '시금치나물'], { '곡류': ['현미밥'], '채소류': ['시금치나물'] }),
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 음식을 식품군으로 나누기', minutes: 14, tool: 'mindmap',
            teacher: '"이 음식의 주된 재료는 무엇일까요?" 두부를 채소류에 넣는 학생이 많다 — "두부는 무엇으로 만들까요? 콩은 어느 칸에 있었나요?"라고 묻는다. 감자·고구마는 곡류에 넣는다는 점, 치즈·요구르트는 우유·유제품류라는 점을 짚는다. 과자·탄산음료는 유지·당류처럼 적게 먹을 칸임을 말해 준다.',
            task: '음식 카드를 식품구성자전거의 식품군 칸으로 나누어요.',
            levels: LV,
            items: [
              MS('급식 메뉴를 식품군으로 나누어 보세요.', '급식 메뉴', ['곡류', '고기·생선·달걀·콩류', '채소류'], ['잡곡밥', '두부조림', '고등어구이', '배추김치'], { '곡류': ['잡곡밥'], '고기·생선·달걀·콩류': ['두부조림', '고등어구이'], '채소류': ['배추김치'] }, 0.2),
              MS('간식과 곁들이 음식을 식품군으로 나누어 보세요.', '간식과 곁들이', ['과일류', '우유·유제품류', '유지·당류'], ['귤', '플레인 요구르트', '버터', '사과', '치즈'], { '과일류': ['귤', '사과'], '우유·유제품류': ['플레인 요구르트', '치즈'], '유지·당류': ['버터'] }, 0.25),
              MS('헷갈리기 쉬운 음식을 식품군으로 나누어 보세요.', '헷갈리는 음식', ['곡류', '고기·생선·달걀·콩류', '채소류'], ['찐 고구마', '삶은 달걀', '오이무침', '감자'], { '곡류': ['찐 고구마', '감자'], '고기·생선·달걀·콩류': ['삶은 달걀'], '채소류': ['오이무침'] }, 0.3,
                { conclude: '고구마·감자는 곡류, 두부·달걀은 고기·생선·달걀·콩류예요. 재료를 떠올리면 칸이 보여요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 빠진 식품군 채우기', minutes: 13, tool: 'mindmap',
            teacher: '"이 한 끼에서 빠진 칸은 어디일까요?" 컵라면과 삼각김밥 한 끼를 예로, 무엇을 더하면 바퀴가 둥글어지는지 묻는다. "비싼 음식을 더해야 해요"라는 생각에는 편의점에서도 우유·바나나·샐러드처럼 쉽게 더할 수 있다는 점을 짚는다. 3번은 모둠에서 말로 나눈다.',
            task: '한 끼 식단에서 빠진 식품군을 찾아 더할 음식을 골라요.',
            levels: LV,
            items: [
              MP('컵라면·삼각김밥 한 끼에 더하면 좋을 음식만 골라 담아 보세요.', '더할 음식', ['흰 우유', '바나나', '탄산음료', '감자칩'], ['흰 우유', '바나나'], 0.2),
              MM('식단마다 빠진 식품군을 이어 보세요(과일류는 빼고 생각해요). 맞지 않는 카드는 남겨요.', '빠진 식품군', [{ id: 'd1', label: '현미밥·두부조림·우유' }, { id: 'd2', label: '쌀밥·시금치나물·우유' }, { id: 'd3', label: '잡곡밥·생선구이·오이무침' }], ['채소류', '고기·생선·달걀·콩류', '우유·유제품류', '유지·당류'], { d1: '채소류', d2: '고기·생선·달걀·콩류', d3: '우유·유제품류' }, 0.3,
                { conclude: '한 끼에 다섯 칸이 다 못 들어가면 하루 세 끼와 간식으로 나누어 채우면 돼요.' }),
              TALK('모둠에서 "편의점에서 고르는 골고루 한 끼"를 정해 식품군과 함께 말하고 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 저녁 식탁에서 바퀴의 어느 칸을 더 채우고 싶나요?" 출구 1번에서 감자를 채소류에 넣은 학생에게는 주된 영양소로 나눈다는 점을 다시 짚는다. 체형·몸무게 이야기는 하지 않고, 골고루 먹는 것이 성장의 바탕이라는 점으로 마무리한다.',
          exit: [
            XS('음식을 식품군으로 나누어 보세요.', '어느 칸일까', ['곡류', '우유·유제품류', '과일류'], ['떡', '우유', '포도', '국수'], { '곡류': ['떡', '국수'], '우유·유제품류': ['우유'], '과일류': ['포도'] }),
            XC('식품구성자전거에서 적게 먹도록 가장 작게 그려진 식품군은 무엇인가요?', ['곡류', '채소류', '유지·당류'], 2, '기름과 설탕이 많은 유지·당류는 적게 먹도록 가장 작게 그려요.'),
            XT('내가 자주 먹는 간식 하나를 골라 식품군과 함께 더 나은 바꿈을 한 문장으로 쓰세요.'),
            MOOD,
          ],
        },
        ws: {
          title: '식품구성자전거로 한 끼 보기',
          items: [
            { type: 'table', prompt: '음식이 들어갈 식품군을 쓰세요.', columns: ['음식', '식품군'], cells: [['잡곡밥', ''], ['두부', ''], ['시금치', ''], ['요구르트', '']], answer: '곡류, 고기·생선·달걀·콩류, 채소류, 우유·유제품류' },
            { type: 'choice', prompt: '빵·잼·주스 아침에 더하면 좋은 것에 ○ 하세요.', options: ['삶은 달걀', '초콜릿', '탄산음료'], answer: '삶은 달걀' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '식품구성자전거의 앞바퀴는 ___을 충분히 마시라는 뜻이에요.', answer: '물' },
            { type: 'draw', prompt: '다섯 식품군이 모두 들어간 나의 한 끼 식판을 그리고 음식 이름을 쓰세요.' },
          ],
        },
        notes: '자주 보이는 어려움: ① 두부·콩을 채소류로, 감자·고구마를 채소류로 넣는다 → 주된 재료와 영양소로 나눈다는 점을 짚는다. ② 한 끼에 모든 칸을 넣어야 한다고 여긴다 → 하루 단위로 채울 수 있음을 말해 준다. ③ 개인의 식습관·체형을 발표시키지 않는다 — 가상 식단으로 이야기한다. 식품 알레르기가 있는 학생을 배려해 음식 예를 바꿀 수 있다.',
      }),

      LESSON(2, {
        title: '아침을 거르는 하루와 간식 고르기 비교하기',
        objective: '아침 식사를 거를 때와 먹을 때의 차이를 말하고, 상황에 맞는 건강한 아침·간식을 고를 수 있다.',
        draw: 'a sleepy middle school student at a kitchen table with a simple paper breakfast of rice ball, milk and an apple, morning sun at the window',
        banner: '아침이 하루를 열어요', extra: [{ motif: 'flower', x: 300, y: 222, color: 'buttercup' }],
        intro: {
          teacher: '"늦잠을 자서 아침을 못 먹고 왔다면 2교시쯤 어떤 일이 생길까요?" 대답을 듣고(기다릴 반응: "배고파요", "집중이 안 돼요") 시연으로 아침 메뉴 카드를 나눈다. "아침을 굶으면 살이 빠져요"라는 말이 나오면 "점심때 너무 배고프면 어떻게 먹게 될까요?"라고 되묻는다. 오늘은 아침과 간식의 선택을 비교해 본다고 밝힌다.',
          student: '바쁜 아침에 5분 안에 먹을 수 있는 음식 하나를 떠올려 짝에게 말해 봅시다.',
          demo: DEMO('바쁜 아침', ['든든해요', '아쉬워요'], ['주먹밥과 우유', '탄산음료만'], { '든든해요': ['주먹밥과 우유'], '아쉬워요': ['탄산음료만'] }),
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 아침 장면에서 선택하기', minutes: 14, tool: 'emotion',
            teacher: '"이 선택을 한 뒤 오전 시간은 어떨까요?" 결과 칸을 읽게 한다. 거창한 아침이 아니라도 우유 한 잔·과일 하나처럼 작게 시작할 수 있다는 점을 짚는다. "단 음료로 배를 채우면 된다"고 고른 학생에게는 금방 다시 배고파지는 까닭(당이 많고 다른 영양소가 적음)을 말해 준다.',
            task: '아침 장면에서 어떻게 할지 고르고 그 결과를 살펴봐요.',
            levels: LVB,
            items: [
              EB('늦잠을 자서 집을 나서기까지 10분 남았어요.', '현이는 늦잠을 자서 10분 뒤에 집을 나서야 해요. 식탁에는 바나나와 우유가 있어요.', [
                { id: 'skip', text: '그냥 굶고 뛰어가요', result: '2교시부터 배가 고파 수업에 집중이 안 돼요.', mood: '짜증' },
                { id: 'grab', text: '바나나와 우유를 챙겨 먹어요', result: '오전 내내 기운이 있어요.', mood: '편안함' },
                { id: 'soda', text: '가는 길에 탄산음료를 사 마셔요', result: '잠깐 배부르다 금방 다시 배고파요.', mood: '걱정' }], 'grab', 0.2),
              EB('친구가 아침을 굶으면 살이 빠진다며 같이 굶자고 해요.', '단짝 수가 "아침 굶으면 살 빠진대, 우리 같이 굶자"고 해요.', [
                { id: 'agree', text: '좋다고 하고 같이 굶어요', result: '점심에 허겁지겁 많이 먹고 속이 불편해요.', mood: '속상함', why: '아침을 거르면 다음 끼니를 지나치게 먹기 쉬워요.' },
                { id: 'light', text: '가볍게라도 먹자고 제안해요', result: '둘이 우유와 과일로 아침을 챙겨요.', mood: '뿌듯함' },
                { id: 'snack', text: '아침 대신 과자를 나눠 먹어요', result: '오전에 기운이 금방 떨어져요.', mood: '걱정', why: '과자는 기름과 당이 많아 아침을 대신하기 어려워요.' }], 'light', 0.25),
              EB('아침에 입맛이 없어 아무것도 먹기 싫어요.', '하늘은 아침마다 입맛이 없어 아무것도 먹고 싶지 않아요.', [
                { id: 'none', text: '먹고 싶을 때까지 안 먹어요', result: '오전 내내 머리가 멍해요.', mood: '걱정', why: '조금이라도 먹는 습관부터 들이면 몸이 익숙해져요.' },
                { id: 'small', text: '우유 한 잔부터 시작해요', result: '조금씩 먹는 양이 늘어요.', mood: '편안함' },
                { id: 'coffee', text: '에너지 음료로 깨워요', result: '가슴이 두근거리고 잠이 안 와요.', mood: '불안', why: '카페인이 많은 음료는 청소년에게 맞지 않아요.' }], 'small', 0.3,
                { conclude: '아침은 많이보다 꾸준히 — 작은 한 가지부터 시작하면 돼요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 상황에 맞는 간식 고르기', minutes: 13, tool: 'emotion',
            teacher: '"같은 간식이라도 언제·얼마나 먹느냐가 중요하지 않을까요?" 간식은 끼니 사이 배고픔을 채우는 것이지 끼니를 대신하는 것이 아님을 짚는다. 3번에서 "간식은 다 나쁘다"는 학생에게는 과일·우유·견과처럼 영양을 더하는 간식이 있다고 말해 준다.',
            task: '간식을 고르는 장면에서 알맞은 선택을 하고 결과를 비교해요.',
            levels: LVB,
            items: [
              EB('학원 가기 전 1시간, 배가 고파요.', '학원 수업이 저녁 늦게 끝나는 날, 도는 학원 가기 전에 배가 고파요.', [
                { id: 'cup', text: '매운 컵라면에 탄산음료', result: '짜고 달아서 목이 마르고 속이 더부룩해요.', mood: '짜증', why: '나트륨과 당이 많아 끼니 사이 간식으로 부담돼요.' },
                { id: 'milk', text: '삼각김밥과 흰 우유', result: '학원 수업 내내 든든해요.', mood: '편안함' },
                { id: 'candy', text: '젤리 한 봉지', result: '잠깐 힘이 나다 금방 다시 배고파요.', mood: '걱정', why: '당만 있는 간식은 배고픔을 오래 채우지 못해요.' }], 'milk', 0.2),
              EB('시험공부를 하며 밤늦게 간식이 당겨요.', '밤 11시, 시험공부를 하던 민은 간식이 당겨요.', [
                { id: 'fruit', text: '물과 과일 조금', result: '가볍게 배를 채우고 잠도 잘 와요.', mood: '편안함' },
                { id: 'chicken', text: '치킨을 시켜 다 먹어요', result: '속이 더부룩해 잠을 설쳐요.', mood: '짜증', why: '늦은 밤 기름진 음식은 잠과 소화를 방해해요.' },
                { id: 'energy', text: '에너지 음료로 버텨요', result: '잠이 오지 않아 다음 날이 힘들어요.', mood: '불안', why: '카페인 음료는 잠을 방해하고 청소년에게 맞지 않아요.' }], 'fruit', 0.25),
              EB('체육 시간이 끝나고 목이 말라요.', '체육 시간이 끝나 땀을 많이 흘린 수는 목이 말라요.', [
                { id: 'sweet', text: '단 음료를 두 캔 마셔요', result: '당을 너무 많이 먹게 돼요.', mood: '걱정', why: '목마름은 물로 채우는 것이 가장 좋아요.' },
                { id: 'water', text: '물을 나누어 마셔요', result: '갈증이 풀리고 몸이 가벼워요.', mood: '편안함' },
                { id: 'none', text: '참았다가 점심때 마셔요', result: '머리가 아프고 어지러워요.', mood: '아픔', why: '땀을 흘리면 물을 바로 채워야 해요.' }], 'water', 0.3,
                { conclude: '목마를 땐 물, 배고플 땐 영양을 더하는 간식 — 상황에 맞게 고르면 돼요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"내일 아침 내가 바꿀 수 있는 작은 한 가지는 무엇인가요?" 출구 1번에서 에너지 음료를 고른 학생에게는 카페인이 많은 음료가 잠과 심장에 부담을 준다는 점을 다시 말해 준다. 집 사정으로 아침을 먹기 어려운 학생이 있을 수 있으니 개인 실천을 발표시키지 않는다.',
          exit: [
            XB('아침 7시 반, 집에 식빵과 우유, 사과가 있어요. 무엇을 먹을까요?', '바쁜 아침, 식탁에 식빵·우유·사과가 있어요.', [
              { id: 'all', text: '식빵과 우유, 사과 반 쪽을 먹어요' },
              { id: 'none', text: '시간 없으니 아무것도 안 먹어요', why: '조금이라도 먹으면 오전을 든든하게 보낼 수 있어요.' },
              { id: 'juice', text: '단 주스만 한 잔 마셔요', why: '단 음료만으로는 금방 다시 배고파요.' }], 'all'),
            XC('간식에 대한 설명으로 알맞은 것은 무엇인가요?', ['간식은 끼니를 대신해도 된다', '간식은 끼니 사이 영양을 더하는 것이다', '간식은 모두 몸에 나쁘다'], 1, '간식은 끼니를 대신하지 않고 끼니 사이 배고픔과 영양을 채워요.'),
            XT('나의 아침 식사를 위해 내일 해 볼 작은 실천 하나를 쓰세요.'),
          ],
        },
        ws: {
          title: '아침과 간식 고르기',
          items: [
            { type: 'table', prompt: '상황에 알맞은 선택을 쓰세요.', columns: ['상황', '나의 선택'], cells: [['10분 뒤 등교', ''], ['학원 가기 전 배고플 때', ''], ['체육 시간 뒤 목마를 때', '']], answer: '예) 바나나·우유, 삼각김밥·우유, 물' },
            { type: 'choice', prompt: '청소년에게 맞지 않는 음료에 ○ 하세요.', options: ['물', '흰 우유', '에너지 음료'], answer: '에너지 음료' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '아침을 거르면 다음 끼니에 지나치게 ___ 쉬워요.', answer: '먹기' },
            { type: 'short', prompt: '"아침을 굶으면 살이 빠진다"는 말에 대한 나의 생각을 두 문장으로 쓰세요.' },
          ],
        },
        notes: '자주 보이는 어려움: ① 아침을 굶는 것이 다이어트라고 여긴다 → 다음 끼니의 과식으로 이어지는 흐름을 장면으로 보여 준다. ② 간식은 모두 나쁘다고 여긴다 → 영양을 더하는 간식(과일·우유·견과)을 함께 보여 준다. ③ 가정 형편으로 아침을 먹기 어려운 학생이 드러나지 않게, 개인 식습관을 묻지 않고 가상 인물로 이야기한다.',
      }),
    ],
  });
})();
