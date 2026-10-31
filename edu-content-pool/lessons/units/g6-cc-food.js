/* 6학년 창체 법정교육 — 영양·식생활 (2차시). 근거: 학교급식법 제13조·식생활교육지원법 제26조(연 2회 이상). 영양소 권장량·온도 숫자는 쓰지 않는다. 몸무게·체형 언급 금지, 장면·인물은 가상(가명 한 글자).
 */
(function () {
  const G = 6, CODE = 'food';
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
    flow: '6학년 영양·식생활 단원은 내 식사를 스스로 점검하고 고치며, 안전하고 지속 가능하게 먹는 방법을 익히는 2차시입니다. 1차시에는 가상 인물의 일주일 식사 기록에서 짜게 먹는 습관과 한쪽으로 치우친 식단을 찾아 싱겁고 골고루 먹는 식단으로 고칩니다. 2차시에는 식중독을 막는 손 씻기·익혀 먹기·나누어 보관하기의 차례와 음식물 쓰레기를 줄이는 식생활을 이야기 차례와 갈림길로 연습합니다. 근거는 학교급식법 제13조·식생활교육지원법 제26조(연 2회 이상)이며, 몸무게·체형을 평가하는 말과 영양소 권장량 숫자는 쓰지 않습니다. 4학년(식품군·아침밥), 5학년(영양 표시의 당류·나트륨, 단 음료 대신 물)에서 이어지고, 식품 표시로 알레르기를 확인하는 내용은 같은 학년 생활안전(g6-cc-saf-life 4차시)이 다룹니다.',
    refs: {},
    lessons: [
      // ───────────────────────────── 1차시
      LESSON(1, {
        title: '일주일 식사 기록에서 짠맛과 치우침 찾아 고치기',
        objective: '식사 기록에서 짜게 먹는 습관과 한쪽으로 치우친 식단을 찾아, 싱겁고 골고루 먹는 식단으로 고칠 수 있다.',
        draw: 'a paper weekly meal calendar with small paper plates of rice, soup, vegetables and fruit, a paper salt shaker set aside with a gentle cross',
        banner: '싱겁게, 골고루', extra: [{ motif: 'leaf', x: 300, y: 222 }],
        intro: {
          teacher: '"라면 국물을 끝까지 다 마시는 것과 남기는 것, 무엇이 다를까요?" 두세 명의 대답을 듣고(기다릴 반응: "국물이 짜요", "소금을 덜 먹어요") 시연 단추로 짜게 먹는 습관과 싱겁게 먹는 습관이 나뉘는 모습을 보여 준다. "짜게 먹어야 맛있어요"가 나오면 "입맛은 습관이라 조금씩 바꾸면 싱거운 맛에도 익숙해진다면 어떨까요?"라고 되묻는다. 오늘은 식사 기록에서 짠맛과 치우침을 찾아 고친다고 밝힌다. 학생 자신의 실제 식사 기록은 쓰지 않고 가상 인물의 기록을 쓴다.',
          student: '짜게 먹게 되는 음식이나 습관을 짝과 한 가지씩 말해 봅시다.',
          demo: { tool: 'mindmap', options: { topic: '짠맛 습관', slots: ['싱겁게 먹어요', '짜게 먹어요'], cards: ['국물은 조금만', '찌개 국물 다 마시기'], shuffle: false }, sequence: [{ sort: { '싱겁게 먹어요': ['국물은 조금만'], '짜게 먹어요': ['찌개 국물 다 마시기'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 식사 기록에서 고칠 습관 찾기', minutes: 13, tool: 'mindmap',
            teacher: '"준이의 식사 기록에서 고치고 싶은 점은 무엇인가요?" 1번에서 국물·젓갈·가공육처럼 짠맛이 숨은 음식을 찾게 한다. 2번에서 "과일 주스를 마셨으니 과일은 먹었다"는 생각을 짚어 생과일과 견주게 한다. 3번은 기록 속 치우침(채소가 거의 없음 등)을 골라내게 하며, 하루가 아니라 일주일 전체를 보아야 습관이 보인다는 점을 말한다.',
            task: '가상 인물의 식사 기록에서 짜게 먹는 습관과 치우친 점을 찾아요.',
            levels: LV,
            items: [
              MS('식사 습관을 싱겁게 먹는 습관과 짜게 먹는 습관으로 나누어 보세요.', '짠맛 찾기', ['싱겁게 먹어요', '짜게 먹어요'], ['소스는 찍어 먹기', '라면 국물 다 마시기', '김치는 조금씩', '햄·소시지 자주 먹기'], { '싱겁게 먹어요': ['소스는 찍어 먹기', '김치는 조금씩'], '짜게 먹어요': ['라면 국물 다 마시기', '햄·소시지 자주 먹기'] }, 0.15),
              MS('식품을 생과일·채소와 그것을 대신하기 어려운 가공품으로 나누어 보세요.', '진짜 과일·채소일까', ['생과일·채소', '대신하기 어려워요'], ['사과 한 개', '과일 맛 젤리', '오이 스틱', '채소 맛 과자'], { '생과일·채소': ['사과 한 개', '오이 스틱'], '대신하기 어려워요': ['과일 맛 젤리', '채소 맛 과자'] }, 0.2),
              MP('준이의 일주일 식사 기록(라면 3번, 채소 반찬 거의 없음, 과일 주스만)에서 고칠 점만 골라 담아 보세요.', '준이 기록의 고칠 점', ['라면을 자주 먹어요', '채소가 거의 없어요', '아침을 먹어요', '물을 자주 마셔요'], ['라면을 자주 먹어요', '채소가 거의 없어요'], 0.25,
                { conclude: '일주일 기록을 보면 짜게 먹는 습관과 빠진 식품군이 보여요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 싱겁고 골고루 먹는 식단으로 고치기', minutes: 14, tool: 'mindmap',
            teacher: '"이 음식을 무엇으로 바꾸면 싱겁고 골고루 먹을 수 있을까요?" 1번은 짠 메뉴와 바꿀 메뉴를 잇게 한다. 2번에서 싱겁게 먹는 조리·먹기 방법을 고르게 하며, 소금을 갑자기 확 줄이기보다 조금씩 줄이면 입맛이 따라온다는 점을 짚는다. 3번은 고친 식단이 식품군을 고루 갖췄는지 점검하게 한다.',
            task: '짠 메뉴를 바꿀 메뉴와 잇고, 싱겁고 골고루 먹는 방법을 골라요.',
            levels: LV,
            items: [
              MM('짠 메뉴와 바꿀 메뉴를 이어 보세요. 맞지 않는 카드는 남겨요.', '메뉴 바꾸기', [{ id: 's1', label: '라면과 김치만' }, { id: 's2', label: '햄 볶음 도시락' }, { id: 's3', label: '짠 과자 간식' }], ['밥·달걀국·나물', '닭가슴살 채소 볶음', '방울토마토·견과류', '컵라면 하나 더'], { s1: '밥·달걀국·나물', s2: '닭가슴살 채소 볶음', s3: '방울토마토·견과류' }, 0.2),
              MP('싱겁게 먹는 방법만 골라 담아 보세요.', '싱겁게 먹는 방법', ['국물보다 건더기 먹기', '양념은 조금씩 넣기', '먹기 전 소금 더 넣기', '찌개에 밥 말아 먹기'], ['국물보다 건더기 먹기', '양념은 조금씩 넣기'], 0.2),
              MS('고친 식단을 골고루 갖춘 것과 아직 치우친 것으로 나누어 보세요.', '고친 식단 점검', ['골고루 갖췄어요', '아직 치우쳤어요'], ['잡곡밥·생선·시금치·귤', '김밥·라면·떡볶이', '현미밥·두부·버섯·우유', '빵·잼·주스'], { '골고루 갖췄어요': ['잡곡밥·생선·시금치·귤', '현미밥·두부·버섯·우유'], '아직 치우쳤어요': ['김밥·라면·떡볶이', '빵·잼·주스'] }, 0.25,
                { conclude: '짠 메뉴는 바꾸고, 국물은 줄이고, 식품군을 고루 담으면 싱겁고 골고루 먹을 수 있어요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"이번 주에 바꿔 볼 짠맛 습관 하나는 무엇인가요?" 원하는 학생만 발표하게 한다. 출구 1번에서 "찌개에 밥 말기"를 싱겁게 먹는 방법으로 놓은 학생에게 국물을 함께 먹게 된다는 점을 짚는다. 2번에서 "과일 주스로 과일을 대신한다"를 고른 학생에게 생과일과 견주게 한다.',
          exit: [
            { type: 'tool', tool: 'mindmap', options: { topic: '어떤 습관일까', slots: ['싱겁게 먹어요', '짜게 먹어요'], cards: ['젓갈을 자주 먹기', '채소에 소스 조금', '튀김에 소금 뿌리기', '국은 건더기 위주'] }, state: { at: {} }, prompt: '습관을 싱겁게 먹는 것과 짜게 먹는 것으로 나누어 보세요.',
              target: { sort: { '싱겁게 먹어요': ['채소에 소스 조금', '국은 건더기 위주'], '짜게 먹어요': ['젓갈을 자주 먹기', '튀김에 소금 뿌리기'] } }, difficulty: 0.2 },
            { type: 'choice', prompt: '식단을 고칠 때 알맞은 생각은 무엇인가요?', options: ['과일 주스면 과일은 충분해요', '소금은 조금씩 줄이고 식품군을 고루 담아요', '좋아하는 음식만 먹어도 돼요'], answer: 1, difficulty: 0.1, explain: '입맛은 습관이라 조금씩 줄이면 따라오고, 식품군을 고루 담아야 해요.' },
            { type: 'short', prompt: '내가 이번 주에 바꿔 볼 식습관 하나를 한 문장으로 쓰세요.' },
            MOOD,
          ],
        },
        ws: {
          title: '싱겁고 골고루 먹는 식단 고치기',
          items: [
            { type: 'table', prompt: '짠 메뉴를 바꿀 메뉴를 쓰세요.', columns: ['짠 메뉴', '바꿀 메뉴'], cells: [['라면과 김치만', ''], ['햄 볶음 도시락', ''], ['짠 과자 간식', ''], ['찌개에 밥 말기', '']], answer: '예: 밥·달걀국·나물 / 닭가슴살 채소 볶음 / 방울토마토·견과류 / 건더기 위주로 먹기' },
            { type: 'choice', prompt: '싱겁게 먹는 방법에 ○ 하세요.', options: ['국물 다 마시기', '소스는 찍어 먹기', '소금 더 넣기'], answer: '소스는 찍어 먹기' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '입맛은 ___이라 소금을 조금씩 줄이면 싱거운 맛에도 익숙해져요.', answer: '습관' },
            { type: 'short', prompt: '식품군을 고루 갖춘 하루 저녁 식단을 써 보세요.' },
          ],
          easy: {
            note: '"국물과 양념이 많은 음식은 무엇일까?"를 떠올려 보세요.',
            items: [
              { type: 'choice', prompt: '싱겁게 먹는 습관에 ○ 하세요.', options: ['건더기 먹기', '국물 다 마시기'], answer: '건더기 먹기' },
              { type: 'table', prompt: '골고루면 ○, 치우쳤으면 ×를 쓰세요.', columns: ['식단', '○ / ×'], cells: [['밥·생선·나물', ''], ['라면·떡볶이', ''], ['밥·두부·과일', '']], answer: '○, ×, ○' },
              { type: 'draw', prompt: '싱겁고 골고루 담은 저녁 식판을 그려 보세요.' },
              { type: 'short', prompt: '좋아하는 채소 반찬을 쓰세요.' },
            ],
          },
        },
        diff: DIFF('카드는 맞는 칸에 놓으면 바로 알려 줘요. 4학년 때 배운 식품군 표를 옆에 둬요.', '"과일 맛 젤리"처럼 이름만 비슷한 식품을 가려내고, 카드 순서가 섞여 나와요.'),
        notes: '자주 보이는 어려움: ① 짜게 먹어야 맛있다고 여긴다 → 입맛은 습관이며 조금씩 바뀐다는 점을 짚는다. ② 과일 주스·채소 맛 과자로 과일·채소를 대신한다 → 생과일·채소와 견준다. ③ 하루 식사로 습관을 판단한다 → 일주일 기록을 보아야 습관이 보인다는 점을 말한다. 나트륨 권장량 같은 숫자는 쓰지 않았다. 학생의 실제 식사 기록이나 몸무게·체형을 묻지 않고, 가정의 식단을 평가하지 않는다.',
      }),

      // ───────────────────────────── 2차시
      LESSON(2, {
        title: '식중독 예방 차례와 음식물 쓰레기 줄이기 실천하기',
        objective: '식중독을 막는 손 씻기·익혀 먹기·나누어 보관하기의 차례를 알고, 음식물 쓰레기를 줄이는 식생활을 고를 수 있다.',
        draw: 'a paper kitchen with a child washing hands at a sink, cooked food in paper containers going into a refrigerator, and an empty clean plate with a small paper leaf',
        banner: '안전하게, 남김없이', extra: [{ motif: 'flower', x: 300, y: 222, color: 'peach' }],
        intro: {
          teacher: '"더운 날 소풍 도시락을 햇볕 아래 오래 두면 어떤 일이 생길 수 있을까요?" 두세 명의 대답을 듣고(기다릴 반응: "상해요", "배탈 나요") 시연 단추로 식중독을 막는 행동의 차례가 놓이는 모습을 보여 준다. "냄새가 괜찮으면 먹어도 돼요"가 나오면 "냄새로 세균이 다 보일까요?"라고 되묻는다. 오늘은 식중독을 막는 차례와 음식물 쓰레기를 줄이는 식생활을 익힌다고 밝힌다.',
          student: '급식이나 집에서 음식이 남는 까닭을 짝과 한 가지씩 말해 봅시다.',
          demo: { tool: 'story', options: { cards: [{ id: 'wash', text: '비누로 손을 씻어요', motif: 'leaf' }, { id: 'cook', text: '속까지 익혀 먹어요', motif: 'sun' }], slots: ['먼저', '다음'], shuffle: false }, sequence: [{ order: ['wash', 'cook'] }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 식중독을 막는 차례 놓기', minutes: 14, tool: 'story',
            teacher: '"무엇을 먼저 해야 세균이 음식에 옮지 않을까요?" 1번에서 요리 전 손 씻기와 날고기·채소 도마를 나누어 쓰는 까닭을 짚는다. 2번에서 남은 음식은 식힌 뒤 바로 냉장 보관하고 먹기 전 다시 데운다는 차례를 놓게 한다. 3번은 여름 소풍 도시락 이야기로, 오래 들고 다닌 음식은 아까워도 먹지 않는 판단을 다룬다.',
            task: '식중독을 막는 행동을 알맞은 차례로 놓아요.',
            levels: LV,
            items: [
              SO('간단한 요리를 할 때 식중독을 막는 차례를 놓아 보세요.', '요리할 때', ['먼저', '다음', '그다음', '마지막'], [{ id: 'a', text: '비누로 손을 씻어요', motif: 'leaf' }, { id: 'b', text: '채소를 깨끗이 씻어요', motif: 'flower' }, { id: 'c', text: '고기 도마는 따로 써요', motif: 'house' }, { id: 'd', text: '속까지 익혀 먹어요', motif: 'sun' }], ['a', 'b', 'c', 'd'], 0.15),
              SO('남은 음식을 안전하게 보관하는 차례를 놓아 보세요.', '남은 음식 보관', ['먼저', '다음', '마지막'], [{ id: 'e', text: '덜어서 식혀요', motif: 'cloud' }, { id: 'f', text: '뚜껑 덮어 냉장고에 넣어요', motif: 'house' }, { id: 'g', text: '먹기 전 다시 데워요', motif: 'sun' }], ['e', 'f', 'g'], 0.2),
              SO('여름 소풍 도시락을 두고 고민한 서의 이야기를 차례대로 놓아 보세요.', '서의 소풍 도시락', ['처음', '다음', '그다음', '끝'], [{ id: 'h', text: '도시락을 햇볕에 오래 뒀어요', motif: 'sun' }, { id: 'i', text: '맛이 조금 이상해요', motif: 'cloud' }, { id: 'j', text: '아까워도 먹지 않아요', motif: 'leaf' }, { id: 'k', text: '다음엔 보냉 가방을 써요', motif: 'star' }], ['h', 'i', 'j', 'k'], 0.25,
                { conclude: '손 씻기, 씻기, 나누어 쓰기, 익혀 먹기, 바로 보관하기가 식중독을 막아요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 음식물 쓰레기 줄이는 갈림길', minutes: 13, tool: 'emotion',
            teacher: '"이렇게 하면 남는 음식과 쓰레기는 어떻게 될까요?" 결과 칸을 읽게 한다. 1번에서 급식을 먹을 만큼 받는 것이 남기지 않는 첫걸음임을 짚는다. 2번은 장보기 전 냉장고를 확인하는 습관이다. 3번에서 남은 음식을 아깝다고 상한 채로 먹는 것은 안전하지 않으며, 처음부터 알맞게 만들고 바로 보관하는 것이 답이라는 점을 1활동과 이어 말한다.',
            task: '음식물 쓰레기를 줄이는 상황에서 어떻게 할지 고르고, 그 결과를 살펴봐요.',
            levels: LVB,
            items: [
              EB('급식에 좋아하는 반찬이 나왔어요. 준이는 어떻게 받을까요?', '오늘 급식에 준이가 좋아하는 불고기와 잘 안 먹는 나물이 함께 나왔어요.', [
                { id: 'pile', text: '둘 다 잔뜩 받아요', result: '배가 불러 둘 다 남기고 잔반이 쌓여요.', mood: '불편함', why: '먹을 만큼만 받아야 남기지 않아요.' },
                { id: 'enough', text: '먹을 만큼, 나물도 조금 받아요', result: '골고루 먹고 식판이 깨끗해요.', mood: '뿌듯함' },
                { id: 'skip', text: '나물은 아예 안 받아요', result: '남기지는 않았지만 채소를 놓쳐요.', mood: '아쉬움', why: '조금씩 받아 골고루 먹는 것이 좋아요.' }], 'enough', 0.15),
              EB('하가 보호자와 장을 보러 가요. 어떻게 할까요?', '주말에 하가 보호자와 함께 일주일 먹을 장을 보러 가기로 했어요.', [
                { id: 'check', text: '냉장고를 확인하고 목록을 써 가요', result: '필요한 것만 사서 버리는 음식이 줄어요.', mood: '뿌듯함' },
                { id: 'sale', text: '묶음 할인이면 무조건 많이 사요', result: '다 못 먹고 상해서 버리게 돼요.', mood: '아쉬움', why: '많이 사는 것보다 필요한 만큼 사는 것이 아끼는 길이에요.' },
                { id: 'random', text: '눈에 띄는 대로 담아요', result: '집에 있던 재료와 겹쳐 남아요.', mood: '불편함', why: '장보기 전에 있는 재료를 확인해요.' }], 'check', 0.2),
              EB('냉장고에 며칠 지난 반찬이 냄새가 조금 이상해요. 서는 어떻게 할까요?', '냉장고 안쪽에서 며칠 전 만든 반찬을 찾았는데 냄새가 조금 이상해요.', [
                { id: 'eat', text: '아까우니 데워서 먹어요', result: '저녁에 배탈이 나서 고생해요.', mood: '아픔', why: '상한 음식은 데워도 안전하지 않아요.' },
                { id: 'ask', text: '먹지 않고 보호자와 정리해요', result: '안전하게 버리고 다음엔 보관 날짜를 붙여요.', mood: '안심' },
                { id: 'leave', text: '그대로 다시 넣어 둬요', result: '다른 음식에도 냄새가 배고 더 상해요.', mood: '불편함', why: '이상한 음식은 바로 정리하고 원인을 줄여요.' }], 'ask', 0.25,
                { conclude: '먹을 만큼 받고, 필요한 만큼 사고, 바로 보관하면 안전하게 쓰레기를 줄일 수 있어요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 배운 것 가운데 내일 급식에서 바로 실천할 것은 무엇인가요?" 출구 1번에서 고기 도마를 같이 쓰는 차례를 놓은 학생에게 날고기의 세균이 채소로 옮을 수 있다는 점을 짚는다. 2번에서 "데우면 상한 음식도 괜찮다"를 고른 학생에게는 상한 음식은 먹지 않는다는 점을 다시 말한다. 4·5·6학년에 걸쳐 배운 식생활(골고루, 영양 표시, 싱겁게, 안전하게)을 한 번 묶어 준다.',
          exit: [
            { type: 'tool', tool: 'story', options: { title: '도시락 싸기', slots: ['먼저', '다음', '마지막'], cards: [{ id: 'x1', text: '손을 깨끗이 씻어요', motif: 'leaf' }, { id: 'x2', text: '익힌 음식을 식혀 담아요', motif: 'cloud' }, { id: 'x3', text: '보냉 가방에 넣어요', motif: 'house' }] }, state: { order: [] }, prompt: '도시락을 안전하게 싸는 차례를 놓아 보세요.', target: { order: ['x1', 'x2', 'x3'] }, difficulty: 0.15 },
            { type: 'choice', prompt: '냄새가 이상한 반찬에 대한 판단으로 알맞은 것은 무엇인가요?', options: ['데우면 괜찮아요', '먹지 않고 정리해요', '조금만 먹어 봐요'], answer: 1, difficulty: 0.1, explain: '상한 음식은 데워도 안전하지 않으니 먹지 않아요.' },
            { type: 'short', prompt: '음식물 쓰레기를 줄이기 위해 내가 할 일을 한 문장으로 쓰세요.' },
            MOOD,
          ],
        },
        ws: {
          title: '안전하게, 남김없이 먹기',
          items: [
            { type: 'table', prompt: '식중독을 막는 행동이면 ○, 위험한 행동이면 ×를 쓰세요.', columns: ['행동', '○ / ×'], cells: [['요리 전 손 씻기', ''], ['고기·채소 같은 도마', ''], ['남은 음식 바로 냉장', ''], ['상한 음식 데워 먹기', '']], answer: '○, ×, ○, ×' },
            { type: 'choice', prompt: '음식물 쓰레기를 줄이는 장보기 방법에 ○ 하세요.', options: ['할인이면 많이 사기', '냉장고 확인하고 목록 쓰기', '눈에 띄는 대로 담기'], answer: '냉장고 확인하고 목록 쓰기' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '급식은 먹을 ___만 받아야 남기지 않아요.', answer: '만큼' },
            { type: 'short', prompt: '우리 집에서 음식물 쓰레기를 줄일 방법을 두 가지 쓰세요.' },
          ],
          easy: {
            note: '"세균이 음식에 옮지 않으려면?"을 떠올려 보세요.',
            items: [
              { type: 'choice', prompt: '요리 전에 할 일에 ○ 하세요.', options: ['손 씻기', '그냥 만들기'], answer: '손 씻기' },
              { type: 'table', prompt: '좋은 행동이면 ○, 아니면 ×를 쓰세요.', columns: ['행동', '○ / ×'], cells: [['먹을 만큼 받기', ''], ['잔뜩 받아 남기기', ''], ['바로 냉장 보관', '']], answer: '○, ×, ○' },
              { type: 'draw', prompt: '깨끗하게 비운 식판을 그려 보세요.' },
              { type: 'short', prompt: '급식에서 실천할 약속을 쓰세요.' },
            ],
          },
        },
        diff: DIFF('차례 카드는 맞는 자리에 놓으면 바로 알려 주고, 갈림길 결과가 처음부터 보여요.', '"데워서 먹어요"처럼 그럴듯한 판단을 가려내고, 카드 순서가 섞여 나와요.'),
        notes: '자주 보이는 어려움: ① 냄새가 괜찮으면 안전하다고 여긴다 → 세균은 냄새로 다 알 수 없음을 짚는다. ② 상한 음식도 데우면 괜찮다고 여긴다 → 먹지 않는 것이 답임을 분명히 한다. ③ 아끼는 것을 상한 음식까지 먹는 것으로 여긴다 → 알맞게 사고, 먹을 만큼 받고, 바로 보관하는 것이 진짜 아끼는 길임을 말한다. 손 씻기·익혀 먹기·나누어 쓰기·보관 내용은 식품의약품안전처 식중독 예방 수칙의 일반적인 범위 안에서 썼고 온도·시간 숫자는 쓰지 않았다. 학생이 직접 불·칼을 쓰는 실습은 하지 않는다.',
      }),
    ],
  });
})();
