/* 5학년 창체 법정교육 — 영양·식생활 (2차시). 근거: 학교급식법 제13조·식생활교육지원법 제26조(연 2회 이상). 영양 수치 기준은 쓰지 않고 당류·나트륨 표시 읽기 수준으로 다룬다. 장면·인물은 가상(가명 한 글자).
 */
(function () {
  const G = 5, CODE = 'food';
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
    flow: '5학년 영양·식생활 단원은 스스로 간식을 사 먹기 시작하는 시기에 맞춰 "고르는 힘"을 기르는 2차시입니다. 1차시에는 가공식품 포장의 영양 표시에서 당류·나트륨이 적힌 자리를 찾고, 같은 양의 두 간식을 견주어 덜 달고 덜 짠 쪽을 고릅니다. 2차시에는 단 음료와 과자를 자주 찾는 습관을 알아차리고, 물·과일·우유처럼 몸에 이로운 간식으로 바꾸는 길을 갈림길로 살펴봅니다. 4학년(식품군 골고루, 아침밥)에서 나아가 "포장을 읽고 스스로 고르기"를 다루고, 6학년(싱겁게 먹는 식단, 남기지 않고 안전하게 먹기)으로 이어집니다. 에너지음료·카페인은 약물 중독 예방(g5-cc-saf-drug) 단원에서 다루므로 여기서는 쓰지 않습니다. 근거는 「학교급식법」 제13조·「식생활교육지원법」 제26조(연 2회 이상)이며, 학생의 몸무게·체형은 묻지 않습니다.',
    refs: {},
    lessons: [
      // ───────────────────────────── 1차시
      LESSON(1, {
        title: '간식 포장의 영양 표시에서 당류·나트륨 찾아 견주기',
        objective: '가공식품 영양 표시에서 당류·나트륨을 찾아 읽고, 같은 양의 간식을 견주어 덜 달고 덜 짠 간식을 고를 수 있다.',
        draw: 'a paper snack package turned over to show a paper nutrition label with highlighted rows, a paper child holding a magnifying glass beside paper apples and crackers',
        banner: '뒷면을 읽고 골라요', extra: [{ motif: 'leaf', x: 300, y: 222 }],
        intro: {
          teacher: '"과자를 살 때 포장의 앞면만 보나요, 뒷면도 보나요?" 두세 명의 대답을 듣고(기다릴 반응: "앞면 그림만 봐요") 시연 단추로 영양 표시에서 당류와 나트륨이 나뉘는 모습을 보여 준다. "맛있으면 그만이에요"가 나오면 "같은 맛이라도 덜 달고 덜 짠 쪽이 있다면 어느 쪽을 고를까요?"라고 되묻는다. 오늘은 포장 뒷면의 영양 표시를 읽고 간식을 고른다고 밝힌다.',
          student: '내가 자주 먹는 간식이 단맛 쪽인지 짠맛 쪽인지 짝에게 말해 봅시다.',
          demo: { tool: 'mindmap', options: { topic: '맛의 정체', slots: ['당류가 많아요', '나트륨이 많아요'], cards: ['달콤한 탄산음료', '짭짤한 감자칩'], shuffle: false }, sequence: [{ sort: { '당류가 많아요': ['달콤한 탄산음료'], '나트륨이 많아요': ['짭짤한 감자칩'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 영양 표시에서 찾을 것 가려내기', minutes: 13, tool: 'mindmap',
            teacher: '"단맛은 영양 표시의 어느 줄에서 찾을 수 있을까요?" 1번에서 단맛은 당류, 짠맛은 나트륨 줄에서 찾는다는 점을 칠판에 적는다. 2번에서 "앞면에 과일 그림이 있으니 몸에 좋다"는 생각을 짚는다 — 그림이 아니라 뒷면의 표시를 읽어야 한다. 3번은 영양 표시 숫자가 "얼마만큼의 양"을 기준으로 적혀 있는지 함께 보아야 한다는 점을 말해 준다.',
            task: '간식을 당류·나트륨이 많은 쪽으로 나누고, 고를 때 살필 것을 찾아요.',
            levels: LV,
            items: [
              MS('간식을 당류가 많은 쪽과 나트륨이 많은 쪽으로 나누어 보세요.', '단맛과 짠맛', ['당류가 많아요', '나트륨이 많아요'], ['컵라면 국물', '과일맛 젤리', '달콤한 아이스크림', '짭짤한 육포'], { '당류가 많아요': ['과일맛 젤리', '달콤한 아이스크림'], '나트륨이 많아요': ['컵라면 국물', '짭짤한 육포'] }, 0.15),
              MP('간식을 고를 때 포장에서 살필 것만 골라 담아 보세요.', '살필 것', ['당류', '나트륨', '앞면 캐릭터', '포장 색깔'], ['당류', '나트륨'], 0.2),
              MM('궁금한 점과 영양 표시에서 찾을 곳을 이어 보세요. 맞지 않는 카드는 남겨요.', '어디를 볼까', [{ id: 's1', label: '얼마나 단지 알고 싶어요.' }, { id: 's2', label: '얼마나 짠지 알고 싶어요.' }, { id: 's3', label: '숫자가 어떤 양 기준인지 궁금해요.' }], ['당류 줄', '나트륨 줄', '총 내용량·1회 양', '앞면 그림'], { s1: '당류 줄', s2: '나트륨 줄', s3: '총 내용량·1회 양' }, 0.25,
                { conclude: '단맛은 당류, 짠맛은 나트륨 줄에서 찾고, 어떤 양을 기준으로 적었는지도 함께 봐요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 두 간식을 견주어 고르는 갈림길', minutes: 14, tool: 'emotion',
            teacher: '"두 간식의 양이 같다면 어느 쪽이 덜 달까요?" 1번에서 같은 양을 기준으로 견주어야 공정하다는 점을 짚는다. 2번은 "무설탕이라고 쓰여 있으니 마음껏 먹어도 된다"는 오개념을 다룬다 — 다른 성분과 먹는 양도 보아야 한다. 3번에서 짠 간식 뒤에 물을 찾게 되는 까닭과 국물을 남기는 습관을 연결한다.',
            task: '간식을 고르는 상황에서 어떻게 할지 고르고, 그 결과를 살펴봐요.',
            levels: LVB,
            items: [
              EB('같은 양의 요구르트 두 개 중 하나를 골라요. 준이는 어떻게 할까요?', '편의점에서 같은 양의 요구르트 두 개를 들고 준이가 고민해요. 뒷면 당류 숫자가 서로 달라요.', [
                { id: 'pic', text: '그림이 예쁜 쪽을 골라요', result: '생각보다 훨씬 단 요구르트를 먹어요.', mood: '걱정', why: '그림이 아니라 영양 표시를 견주어야 해요.' },
                { id: 'less', text: '당류 숫자가 작은 쪽을 골라요', result: '덜 달면서도 맛있는 간식을 먹어요.', mood: '뿌듯함' },
                { id: 'both', text: '고르기 어려워 둘 다 먹어요', result: '단 것을 두 배로 먹게 돼요.', mood: '속상함', why: '표시를 견주면 하나를 고를 수 있어요.' }], 'less', 0.15),
              EB('"설탕 무첨가" 과자를 봤어요. 하는 어떻게 할까요?', '하는 앞면에 "설탕 무첨가"라고 크게 쓰인 과자를 발견했어요.', [
                { id: 'much', text: '몸에 좋으니 한 봉지 다 먹어요', result: '짠맛과 기름 때문에 속이 더부룩해요.', mood: '걱정', why: '한 가지 문구만 믿지 말고 다른 표시도 봐요.' },
                { id: 'read', text: '뒷면 나트륨도 함께 봐요', result: '알맞은 양을 덜어 먹어요.', mood: '편안함' },
                { id: 'skip', text: '글씨가 많아 그냥 사요', result: '무엇이 들었는지 모른 채 먹어요.', mood: '불안', why: '당류·나트륨 두 줄만 읽어도 고를 수 있어요.' }], 'read', 0.2),
              EB('라면을 먹고 국물이 남았어요. 도는 어떻게 할까요?', '주말 점심, 도는 라면을 다 먹고 짠 국물이 그릇에 가득 남았어요.', [
                { id: 'drink', text: '아까우니 국물까지 다 마셔요', result: '짠맛 때문에 계속 물이 당겨요.', mood: '걱정', why: '나트륨은 국물에 많이 들어 있어요.' },
                { id: 'leave', text: '건더기만 먹고 국물은 남겨요', result: '덜 짜게 먹고 속도 편해요.', mood: '편안함' },
                { id: 'rice', text: '국물에 밥까지 말아 먹어요', result: '짠 국물을 더 많이 먹게 돼요.', mood: '속상함', why: '밥을 말면 국물을 더 먹게 돼요.' }], 'leave', 0.25,
                { conclude: '같은 양끼리 영양 표시를 견주고, 국물은 남겨 덜 짜게 먹어요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"다음에 간식을 살 때 먼저 볼 두 줄은 무엇인가요?" 출구 1번에서 짠 간식을 당류 쪽에 놓은 학생에게 짠맛은 나트륨이라는 점을 짚는다. 2번에서 "앞면 그림"을 고른 학생에게 포장 뒷면을 함께 펼쳐 보는 습관을 권한다.',
          exit: [
            { type: 'tool', tool: 'mindmap', options: { topic: '다시 나눠요', slots: ['당류가 많아요', '나트륨이 많아요'], cards: ['초콜릿 우유', '팝콘 버터맛 소금', '탄산 사이다', '김치찌개 국물'] }, state: { at: {} }, prompt: '먹을거리를 당류가 많은 쪽과 나트륨이 많은 쪽으로 나누어 보세요.',
              target: { sort: { '당류가 많아요': ['초콜릿 우유', '탄산 사이다'], '나트륨이 많아요': ['팝콘 버터맛 소금', '김치찌개 국물'] } }, difficulty: 0.2 },
            { type: 'choice', prompt: '간식이 얼마나 단지 알려면 포장의 어디를 봐야 하나요?', options: ['앞면 캐릭터 그림', '영양 표시의 당류 줄', '포장 색깔'], answer: 1, difficulty: 0.1, explain: '단맛은 영양 표시의 당류 줄에서 찾아요.' },
            { type: 'short', prompt: '간식을 고를 때 지킬 나만의 규칙을 한 문장으로 쓰세요.' },
            MOOD,
          ],
        },
        ws: {
          title: '영양 표시 읽고 간식 고르기',
          items: [
            { type: 'table', prompt: '궁금한 점과 영양 표시에서 볼 곳을 쓰세요.', columns: ['궁금한 점', '볼 곳'], cells: [['얼마나 단가요?', ''], ['얼마나 짠가요?', ''], ['숫자는 어떤 양 기준인가요?', ''], ['두 간식 중 덜 단 것은?', '']], answer: '당류 / 나트륨 / 총 내용량·1회 양 / 같은 양 기준 당류 숫자 견주기' },
            { type: 'choice', prompt: '라면을 덜 짜게 먹는 방법에 ○ 하세요.', options: ['국물까지 다 마셔요', '국물을 남겨요', '국물에 밥을 말아요'], answer: '국물을 남겨요' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '짠맛은 영양 표시의 ___ 줄에서 찾아요.', answer: '나트륨' },
            { type: 'short', prompt: '"설탕 무첨가" 문구를 보았을 때 더 살펴볼 것을 쓰세요.' },
          ],
          easy: {
            note: '포장 뒷면의 "당류"와 "나트륨" 두 낱말을 찾아보세요.',
            items: [
              { type: 'choice', prompt: '단맛을 알려 주는 표시에 ○ 하세요.', options: ['당류', '포장 색깔'], answer: '당류' },
              { type: 'table', prompt: '단 간식이면 ○, 짠 간식이면 △를 쓰세요.', columns: ['간식', '○ / △'], cells: [['젤리', ''], ['감자칩', ''], ['아이스크림', '']], answer: '○, △, ○' },
              { type: 'draw', prompt: '포장 뒷면을 살펴보는 내 모습을 그려 보세요.' },
              { type: 'short', prompt: '덜 짜게 먹는 방법을 하나 쓰세요.' },
            ],
          },
        },
        diff: DIFF('카드는 맞는 칸에 놓으면 바로 알려 주고, 갈림길 결과가 처음부터 보여요.', '"설탕 무첨가"처럼 건강해 보이는 문구의 함정을 가려내고, 카드 순서가 섞여 나와요.'),
        notes: '자주 보이는 어려움: ① 앞면 그림·문구로 건강한 간식을 판단한다 → 뒷면 영양 표시의 당류·나트륨을 읽게 한다. ② 양이 다른 두 제품의 숫자를 그대로 견준다 → 같은 양 기준인지 함께 보게 한다. ③ 무설탕이면 마음껏 먹어도 된다고 여긴다 → 다른 성분과 먹는 양도 중요함을 짚는다. 하루 권장량 같은 수치는 이 차시에서 다루지 않고, 학생의 몸무게·체형·가정 식단을 묻지 않는다.',
      }),

      // ───────────────────────────── 2차시
      LESSON(2, {
        title: '단 음료 습관을 알아차리고 물과 건강한 간식으로 바꾸기',
        objective: '단 음료와 과자를 자주 찾는 습관을 알아차리고, 상황에 맞게 물·과일·우유 같은 건강한 간식으로 바꾸어 고를 수 있다.',
        draw: 'a paper water bottle and paper fruit basket glowing brightly beside a fading paper soda can, a paper child pouring water into a cup under a sunny sky',
        banner: '목마를 땐 물 한 잔', extra: [{ motif: 'sun', x: 300, y: 96, s: 0.5 }],
        intro: {
          teacher: '"목이 마를 때 가장 먼저 떠오르는 마실 것은 무엇인가요?" 두세 명의 대답을 듣고(기다릴 반응: "탄산음료요", "물이요") 시연 단추로 물과 단 음료가 나뉘는 모습을 보여 준다. "과일 음료는 과일이니까 괜찮아요"가 나오면 "과일을 먹는 것과 단 과일 음료를 마시는 것은 같을까요?"라고 되묻는다. 오늘은 단 음료 습관을 알아차리고 건강한 간식으로 바꾼다고 밝힌다.',
          student: '단 음료 대신 마실 수 있는 것을 짝과 두 가지 말해 봅시다.',
          demo: { tool: 'mindmap', options: { topic: '목마를 때', slots: ['물과 우유', '단 음료'], cards: ['시원한 물', '달콤한 탄산음료'], shuffle: false }, sequence: [{ sort: { '물과 우유': ['시원한 물'], '단 음료': ['달콤한 탄산음료'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 단 음료 습관 갈림길에서 바꾸는 길 고르기', minutes: 14, tool: 'emotion',
            teacher: '"이렇게 하면 내 몸과 이는 어떻게 될까요?" 결과 칸을 읽으며 단 음료를 자주 마시면 충치가 생기기 쉽고 끼니 입맛도 떨어진다는 점을 짚는다. 1번에서 운동 뒤에는 단 음료가 꼭 필요하다는 생각에 "땀을 흘린 뒤 가장 먼저 채워야 할 것은 무엇일까요?"라고 묻는다. 3번은 친구가 권할 때 관계를 지키며 바꾸는 말을 연습한다.',
            task: '단 음료·과자가 당기는 상황에서 어떻게 할지 고르고, 그 결과를 살펴봐요.',
            levels: LVB,
            items: [
              EB('축구를 마치고 목이 무척 말라요. 준이는 무엇을 마실까요?', '방과 후 축구를 한 시간 하고 나니 준이는 땀이 나고 목이 무척 말라요.', [
                { id: 'soda', text: '큰 탄산음료를 한 번에 마셔요', result: '잠깐 시원하지만 금세 또 목이 말라요.', mood: '걱정', why: '목마를 때는 단 음료보다 물이 좋아요.' },
                { id: 'water', text: '물을 천천히 나눠 마셔요', result: '갈증이 풀리고 몸이 개운해져요.', mood: '편안함' },
                { id: 'none', text: '집까지 참고 안 마셔요', result: '어지럽고 기운이 빠져요.', mood: '불안', why: '땀을 흘린 뒤에는 물을 마셔야 해요.' }], 'water', 0.15),
              EB('학원 가기 전 배가 출출해요. 하는 무엇을 먹을까요?', '하는 학교를 마치고 학원에 가기 전, 배가 출출해서 편의점에 들렀어요.', [
                { id: 'candy', text: '젤리와 단 음료를 사요', result: '금방 배가 고프고 저녁 입맛도 없어요.', mood: '속상함', why: '단 간식은 금방 배고파지고 끼니를 거르게 해요.' },
                { id: 'milk', text: '흰 우유와 바나나를 골라요', result: '든든하게 학원 수업을 들어요.', mood: '뿌듯함' },
                { id: 'chips', text: '큰 과자 한 봉지를 다 먹어요', result: '짜고 기름져서 속이 더부룩해요.', mood: '걱정', why: '간식은 알맞은 양을 골라 먹어요.' }], 'milk', 0.2),
              EB('생일 파티에서 친구가 탄산음료를 자꾸 권해요. 도는 어떻게 할까요?', '친구 생일 파티에서 도는 이미 탄산음료를 두 잔 마셨는데, 친구가 한 잔 더 따라 주려고 해요.', [
                { id: 'more', text: '분위기 깨기 싫어 또 마셔요', result: '배가 부르고 케이크도 못 먹어요.', mood: '속상함', why: '친구 마음을 지키며 거절할 수 있어요.' },
                { id: 'swap', text: '"고마워, 이번엔 물 마실래" 해요', result: '친구가 웃으며 물을 따라 줘요.', mood: '기쁨' },
                { id: 'rude', text: '"그거 몸에 나빠!" 하고 쏘아붙여요', result: '친구가 무안해져 분위기가 어색해요.', mood: '화남', why: '내 선택은 부드럽게 말하면 돼요.' }], 'swap', 0.25,
                { conclude: '목마를 땐 물, 출출할 땐 든든한 간식. 권할 때는 부드럽게 바꿔 말해요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 건강한 간식으로 바꾸는 짝 찾기', minutes: 13, tool: 'mindmap',
            teacher: '"이 간식 대신 무엇을 고를 수 있을까요?" 1번에서 바꿀 짝을 이으며 비슷한 맛이나 느낌을 살리는 방법을 말하게 한다. 2번에서 "과일 음료"를 과일과 같은 쪽에 놓는 학생에게 과일을 그대로 먹을 때와 단 음료로 마실 때가 다르다는 점을 짚는다. 3번은 습관을 바꾸는 작은 실천을 고르게 한다 — 한꺼번에 끊기보다 하나씩 바꾸기.',
            task: '단 간식을 건강한 간식으로 바꾸는 짝을 잇고, 습관을 바꾸는 실천을 골라요.',
            levels: LV,
            items: [
              MM('단 간식과 바꿀 건강한 간식을 이어 보세요. 맞지 않는 카드는 남겨요.', '이렇게 바꿔요', [{ id: 's1', label: '달콤한 탄산음료' }, { id: 's2', label: '초콜릿 과자' }, { id: 's3', label: '딸기맛 우유' }], ['시원한 물', '방울토마토', '흰 우유', '사탕 한 줌'], { s1: '시원한 물', s2: '방울토마토', s3: '흰 우유' }, 0.15),
              MS('먹을거리를 자주 먹어도 좋은 것과 가끔 먹을 것으로 나누어 보세요.', '얼마나 자주', ['자주 먹어도 좋아요', '가끔만 먹어요'], ['사과 한 개', '과일맛 단 음료', '삶은 달걀', '솜사탕'], { '자주 먹어도 좋아요': ['사과 한 개', '삶은 달걀'], '가끔만 먹어요': ['과일맛 단 음료', '솜사탕'] }, 0.2),
              MP('단 음료 습관을 바꾸는 작은 실천만 골라 담아 보세요.', '작은 실천', ['물병을 들고 다녀요', '단 음료는 주말에만', '하루에 세 캔 마셔요', '냉장고를 단 음료로'], ['물병을 들고 다녀요', '단 음료는 주말에만'], 0.25,
                { conclude: '한꺼번에 끊기보다 하나씩 바꾸면 건강한 간식 습관이 자라요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"이번 주에 바꿔 볼 간식 하나를 정해 볼까요?" 출구 1번에서 단 음료를 계속 고르는 보기를 고른 학생에게 활동 1의 결과 칸을 다시 떠올리게 한다. 2번에서 "과일 음료는 과일과 같다"를 고른 학생에게 그대로 먹는 과일과의 차이를 짚는다.',
          exit: [
            { type: 'tool', tool: 'emotion', options: { mode: 'branch', situation: '서는 공부하면서 늘 책상에 단 음료를 두고 홀짝홀짝 마셔요.', choices: [
              { id: 'keep', text: '그대로 단 음료를 둬요', result: '이가 시리고 저녁밥 입맛이 없어요.', mood: '걱정', why: '자주 홀짝이면 이와 입맛에 좋지 않아요.' },
              { id: 'bottle', text: '책상에 물병을 놓아요', result: '물을 자주 마시고 몸이 가뿐해요.', mood: '편안함' },
              { id: 'two', text: '단 음료를 두 병으로 늘려요', result: '단 것을 더 많이 먹게 돼요.', mood: '속상함', why: '바꾸는 쪽으로 작은 실천을 골라요.' }] }, state: { choice: null }, prompt: '공부할 때 책상에 무엇을 둘지 골라 보세요.', target: { choice: 'bottle' }, difficulty: 0.15 },
            { type: 'choice', prompt: '과일을 먹는 것과 단 과일 음료에 대한 설명으로 알맞은 것은 무엇인가요?', options: ['둘은 똑같아요', '단 과일 음료는 가끔만 마셔요', '과일 음료가 더 건강해요'], answer: 1, difficulty: 0.1, explain: '과일은 그대로 먹고, 단 음료는 가끔만 마셔요.' },
            { type: 'short', prompt: '이번 주에 바꿔 볼 간식과 그 대신 먹을 것을 한 문장으로 쓰세요.' },
            MOOD,
          ],
        },
        ws: {
          title: '단 음료 대신 물 한 잔',
          items: [
            { type: 'table', prompt: '단 간식을 건강한 간식으로 바꾸어 쓰세요.', columns: ['단 간식', '바꿀 간식'], cells: [['탄산음료', ''], ['초콜릿 과자', ''], ['딸기맛 우유', ''], ['젤리', '']], answer: '물 / 방울토마토 등 채소·과일 / 흰 우유 / 과일 (예시)' },
            { type: 'choice', prompt: '운동 뒤 목마를 때 알맞은 것에 ○ 하세요.', options: ['큰 탄산음료', '물', '아무것도 안 마시기'], answer: '물' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '습관은 한꺼번에 끊기보다 ___씩 바꾸면 쉬워요.', answer: '하나' },
            { type: 'short', prompt: '친구가 단 음료를 권할 때 부드럽게 거절하는 말을 쓰세요.' },
          ],
          easy: {
            note: '"목마를 땐 물"을 기억해요.',
            items: [
              { type: 'choice', prompt: '자주 먹어도 좋은 간식에 ○ 하세요.', options: ['사과', '솜사탕'], answer: '사과' },
              { type: 'table', prompt: '자주 먹어도 좋으면 ○, 가끔만 먹으면 △를 쓰세요.', columns: ['먹을거리', '○ / △'], cells: [['물', ''], ['탄산음료', ''], ['흰 우유', '']], answer: '○, △, ○' },
              { type: 'draw', prompt: '내가 좋아하는 건강한 간식을 그려 보세요.' },
              { type: 'short', prompt: '단 음료 대신 마실 것을 쓰세요.' },
            ],
          },
        },
        diff: DIFF('갈림길 결과가 처음부터 보이고, 카드는 맞는 칸에 놓으면 바로 알려 줘요.', '"과일맛 단 음료"처럼 건강해 보이는 간식을 가려내고, 카드 순서가 섞여 나와요.'),
        notes: '자주 보이는 어려움: ① 과일 음료·단맛 우유를 과일·우유와 같다고 여긴다 → 그대로 먹는 과일·흰 우유와 견주게 한다. ② 운동 뒤에는 단 음료가 꼭 필요하다고 여긴다 → 목마를 때는 물이 먼저임을 짚는다. ③ 간식을 아예 끊어야 한다고 여겨 포기한다 → 하나씩 바꾸는 작은 실천을 고르게 한다. 특정 상품 이름을 쓰지 않고, 학생의 몸무게·체형·가정 형편을 묻지 않는다. 에너지음료·카페인은 약물 중독 예방 단원에서 다룬다.',
      }),
    ],
  });
})();
