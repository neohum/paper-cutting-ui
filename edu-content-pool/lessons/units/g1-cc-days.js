/* 1학년 창체 계기교육 — 기념일 계기교육(기념일당 1차시, 10차시). 저학년: 기념일의 뜻, 고마운 마음, 기념하는 방법을 그림 카드·짧은 문장으로 고르고 나눈다.
 * 기념일(달력 순): 3·1절, 과학의 날(4.21), 지구의 날(4.22), 5·18민주화운동 기념일(5.18), 현충일(6.6)·6·25전쟁, 6·10민주항쟁 기념일(6.10), 광복절(8.15), 개천절(10.3), 한글날(10.9), 학생독립운동기념일(11.3).
 * 날짜는 「국경일에 관한 법률」(3·1절·광복절·개천절·한글날)과 「각종 기념일 등에 관한 규정」(과학의 날·5·18·현충일·6·25·6·10·학생독립운동기념일)을 따른다. 지구의 날은 법정기념일이 아닌 세계 환경의 날로 다룬다.
 * 역사 사실은 교육과정·교과서와 국가보훈부·교육부·기념재단 공식 자료에 실린 범위만 쓴다. 정치적 중립: 현재 정당·정치인을 다루지 않고, 특정 국가의 국민 전체를 비난하지 않는다.
 * 독도의 날은 독도교육 단원(g*-cc-dokdo)이 맡는다. 인물 이름은 역사 인물 말고는 가명이다. 전국 단위 시수가 없어 기념일당 1차시는 학교가 정한다. */
(function () {
  const GRADE = 1;
  const ID = `g${GRADE}-cc-days`;
  const UNIT = `g${GRADE}-창체-days`;
  const TITLE = '기념일 계기교육 — 기념일의 뜻과 기념 방법';
  const two = (n) => String(n).padStart(2, '0');
  const base = (n) => ({
    id: `${ID}-${two(n)}`, schema: 'edu-lesson.v1', catalog: { unit: UNIT, lesson: n },
    grade: GRADE, subject: '창체', unitTitle: TITLE, standards: [], minutes: 40,
    formats: ['chromebook', 'projector', 'print'],
  });
  const PROMPT = (what) => `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`;
  const SCENE = (text, extra = []) => ({ viewBox: [480, 270], layers: [
    { motif: 'sun', x: 410, y: 58, s: 0.8 }, { motif: 'cloud', x: 110, y: 52 }, { motif: 'hills', y: 204 },
    { motif: 'tree', x: 80, y: 210 }, { motif: 'house', x: 390, y: 214, color: 'buttercup', s: 0.85 }, ...extra,
    { motif: 'text', x: 240, y: 132, text, size: 22 },
  ] });
  // 카드 교구 문항 틀
  const MS = (prompt, topic, slots, cards, sort, d, more) => ({ prompt, toolOptions: { mode: 'sort', topic, slots, cards }, target: { sort }, difficulty: d, ...more });
  const MM = (prompt, topic, slots, cards, match, d, more) => ({ prompt, toolOptions: { mode: 'match', topic, slots, cards }, target: { match }, difficulty: d, ...more });
  const MP = (prompt, topic, cards, pick, d, more) => ({ prompt, toolOptions: { mode: 'pick', topic, basket: topic, cards }, target: { pick }, difficulty: d, ...more });
  const EB = (prompt, situation, choices, choice, d, more) => ({ prompt, toolOptions: { mode: 'branch', situation, choices }, target: { choice }, difficulty: d, ...more });
  const SO = (prompt, title, slots, cards, order, d, more) => ({ prompt, toolOptions: { title, slots, cards }, target: { order }, difficulty: d, ...more });
  const SF = (prompt, cards, slots, fill, d, more) => ({ prompt, toolOptions: { mode: 'fill', cards, slots }, target: { fill }, difficulty: d, ...more });
  const TO = (prompt, cards, order, d, more) => ({ prompt, toolOptions: { cards, axis: ['옛날', '오늘날'] }, target: { order }, difficulty: d, ...more });
  const TM = (prompt, slots, cards, match, d, more) => ({ prompt, toolOptions: { mode: 'match', slots, cards, axis: ['옛날', '오늘날'] }, target: { match }, difficulty: d, ...more });
  const TS = (prompt, slots, cards, sort, d, more) => ({ prompt, toolOptions: { mode: 'sort', slots, cards, axis: ['옛날', '오늘날'] }, target: { sort }, difficulty: d, ...more });
  // 달력 띠(1월 → 12월) — 기념일을 날짜 차례로 놓는다
  const CO = (prompt, cards, order, d, more) => ({ prompt, toolOptions: { cards, axis: ['1월', '12월'] }, target: { order }, difficulty: d, ...more });
  // 우리나라 칸 지도(한반도를 6×9 칸으로 줄인 그림 — 칸 자리는 위치 관계만 살린다)
  const KOR_LAND = [[1, 0], [2, 0], [3, 0], [4, 0], [1, 1], [2, 1], [3, 1], [4, 1], [1, 2], [2, 2], [3, 2], [4, 2],
    [1, 3], [2, 3], [3, 3], [1, 4], [2, 4], [3, 4], [1, 5], [2, 5], [3, 5], [1, 6], [2, 6], [3, 6], [1, 7], [2, 7], [3, 7]];
  const KOR_SEA = [[0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8], [4, 3], [4, 4], [4, 5], [4, 6], [4, 7], [4, 8],
    [5, 2], [5, 3], [5, 4], [5, 5], [5, 6], [5, 7], [5, 8], [1, 8], [2, 8], [3, 8]];
  const KOR = (places, more) => Object.assign({ grid: [6, 9], title: '우리나라 칸 지도', regions: [{ name: '우리나라 땅', cells: KOR_LAND, color: 'mint' }], regionNames: false, sea: KOR_SEA, places }, more || {});
  const P = {
    seoul: { name: '서울', icon: 'capital', at: [2, 5] }, incheon: { name: '인천', icon: 'port', at: [1, 5] },
    cheonan: { name: '천안', icon: 'heritage', at: [2, 6] }, daegu: { name: '대구', icon: 'city', at: [3, 6] },
    gwangju: { name: '광주', icon: 'city', at: [1, 7] }, busan: { name: '부산', icon: 'port', at: [3, 7] },
    jeju: { name: '제주도', icon: 'island', at: [1, 8] }, pyongyang: { name: '평양', icon: 'city', at: [1, 3] },
    baekdu: { name: '백두산', icon: 'mountain', at: [2, 0] }, gangneung: { name: '강릉', icon: 'city', at: [3, 4] },
    panmun: { name: '판문점', icon: 'dot', at: [2, 4] },
  };
  const DJ = { name: '대전', icon: 'city', at: [2, 6] };
  // 활동지 전용 작은 지도(6×4) — 9줄 지도는 인쇄 글자가 작다
  const KORW_LAND = [[1, 0], [2, 0], [3, 0], [1, 1], [2, 1], [3, 1], [1, 2], [2, 2], [3, 2], [2, 3], [3, 3], [1, 3]];
  const KORW_SEA = [[0, 1], [0, 2], [0, 3], [4, 0], [4, 1], [4, 2], [4, 3], [5, 0], [5, 1], [5, 2], [5, 3]];
  const KORW = (places, more) => Object.assign({ grid: [6, 4], regions: [{ name: '우리나라 땅', cells: KORW_LAND, color: 'mint' }], regionNames: false, sea: KORW_SEA, places }, more || {});
  const PW = {
    seoul: { name: '서울', icon: 'capital', at: [2, 1] }, cheonan: { name: '천안', icon: 'heritage', at: [2, 2] },
    gwangju: { name: '광주', icon: 'city', at: [1, 3] }, busan: { name: '부산', icon: 'port', at: [3, 3] },
    incheon: { name: '인천', icon: 'port', at: [1, 1] },
  };
  const MI = (prompt, toolOptions, target, d, more) => ({ prompt, toolOptions, target, difficulty: d, ...more });
  const MQ = (prompt, toolOptions, q, choices, pick, d, more) => ({ prompt, toolOptions: Object.assign({}, toolOptions, { readOnly: true, ask: { q, choices } }), target: { pick }, difficulty: d, ...more });
  const LV = { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } };
  const LVB = { easy: { showBack: true }, base: {}, challenge: {} };
  const MAP_LV = { easy: { names: true, readout: true }, base: {}, challenge: {} };
  const DIFF = {
    easy: '카드를 놓거나 보기를 고르면 맞는지 바로 알려 주고, 갈림길 문항은 결과가 처음부터 보여요.',
    base: '모두 마친 뒤 확인을 눌러 스스로 고쳐요.',
    challenge: '카드 순서가 섞여 나오고, 그럴듯하지만 틀린 카드를 가려내요.',
  };
  // 도입 6 + 전개 27(14+13) + 정리 7 = 40분
  const LESSON = (n, o) => Object.assign(base(n), {
    title: o.title, objective: o.objective,
    illustration: { prompt: PROMPT(o.draw), scene: SCENE(o.banner, o.extra) },
    stages: [
      { id: 'intro', title: '도입', minutes: 6, teacher: o.intro.teacher, student: o.intro.student, demo: o.intro.demo },
      { id: 'main', title: '전개', minutes: 27, activities: o.acts.map((a, i) => ({ id: `a${i + 1}`, minutes: i === 0 ? 14 : 13, levels: a.tool === 'map' ? MAP_LV : a.tool === 'emotion' ? LVB : LV, ...a })) },
      { id: 'wrapup', title: '정리', minutes: 7, teacher: o.wrap.teacher, exitTicket: o.wrap.exit },
    ],
    worksheet: { title: o.wsTitle, items: o.ws }, differentiation: o.diff || DIFF, teacherNotes: o.notes,
  });
  const MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };
  const XC = (tool, options, prompt, target, d) => Object.assign({ type: 'tool', tool, options }, tool === 'map' || options.mode === 'branch' ? {} : { state: { at: {} } }, { prompt, target, difficulty: d });
  const CH = (prompt, options, answer, explain, d) => ({ type: 'choice', prompt, options, answer, difficulty: d || 0.15, explain });
  // 짧은 데모 틀
  const DM = (tool, options, step) => ({ tool, options: Object.assign({ shuffle: false }, options), sequence: [step] });

  PaperLessons.registerUnit({
    id: ID, schema: 'edu-unit.v1', catalogUnit: UNIT,
    grade: GRADE, subject: '창체', unitTitle: TITLE,
    flow: '1학년 기념일 계기교육은 한 해의 기념일 열 개를 달력 차례로 하나씩 만나는 10차시입니다(기념일당 1차시). 1학년은 "이날은 어떤 날일까?", "누구에게 고마울까?", "어떻게 기념할까?" 세 가지에 집중해, 그림 카드 고르기·나누기와 말풍선 채우기로 기념일의 뜻과 기념하는 방법을 익힙니다. 3·1절·광복절은 태극기와 만세, 현충일은 묵념, 5·18민주화운동 기념일은 서로 돕는 마음, 6·10민주항쟁 기념일은 함께 정하는 방법, 개천절은 단군 이야기, 한글날은 한글을 만든 세종대왕, 학생독립운동기념일은 바른 것을 말하는 용기, 과학의 날과 지구의 날은 생활 속 과학과 지구 아끼기로 다룹니다. 기념일 계기교육은 전국 단위 시수가 정해져 있지 않으므로 기념일당 1차시 편성과 운영 시기는 학교가 정합니다(학교 계기교육 계획·학교운영위원회 심의 등 학교 절차를 따름). 통합교과 「우리나라」·「나」 단원, 안전한 생활과 연계해 운영할 수 있고(시수 인정은 학교 결정), 독도의 날은 독도교육 단원이 맡습니다. 무서운 장면은 쓰지 않고, 다른 나라나 사람을 미워하는 말 없이 고마움과 기념하는 마음을 기릅니다.',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '3·1절에 볼 수 있는 것 고르고 고마운 말 전하기',
        objective: '3·1절이 태극기를 들고 만세를 부른 날을 기억하는 날임을 알고, 고마운 마음을 말할 수 있다.',
        draw: 'children waving small Korean paper flags in a spring village street with paper blossoms',
        banner: '3월 1일 3·1절', extra: [{ motif: 'flower', x: 150, y: 214, color: 'rose', s: 0.7 }],
        intro: {
          teacher: '"3월 1일 아침, 집집마다 무엇이 걸려 있을까요?" 대답을 듣고(기다릴 반응: "태극기요", "몰라요") 시연 단추로 태극기 카드를 바구니에 담아 보인다. "3·1절은 노는 날이에요"라고만 말하는 학생에게는 "쉬는 날이 된 까닭이 있어요. 오래전 사람들이 태극기를 들고 \'대한 독립 만세\'를 외친 날이에요"라고 알려 준다.',
          student: '태극기를 본 곳을 하나 떠올려 짝에게 말해 봐요.',
          demo: DM('mindmap', { mode: 'pick', topic: '3·1절', basket: '3·1절', cards: ['태극기', '눈사람'] }, { pick: ['태극기'] }),
        },
        acts: [
          {
            title: '활동 1. 3·1절에 맞는 카드 고르기', tool: 'mindmap',
            teacher: '"이 카드는 3·1절에 볼 수 있을까요?" 카드를 하나씩 소리 내어 읽게 한다. 크리스마스 트리를 담는 학생에게는 "트리는 겨울 12월에 봐요. 3월 1일은 봄이 오는 때예요"라고 짚는다. 태극기는 땅에 끌거나 장난감처럼 쓰지 않는다는 점도 함께 말한다.',
            task: '3·1절에 맞는 카드를 고르고, 태극기 다는 날을 나누어요.',
            items: [
              MP('3·1절에 볼 수 있는 것만 골라 담아 보세요.', '3·1절', ['집집마다 태극기', '만세 부르는 모습', '크리스마스 트리', '눈사람'], ['집집마다 태극기', '만세 부르는 모습'], 0.1),
              MS('태극기를 다는 날과 달지 않는 날로 나누어 보세요.', '태극기 다는 날', ['태극기 달아요', '안 달아요'], ['3·1절', '광복절', '내 생일', '소풍 가는 날'], { '태극기 달아요': ['3·1절', '광복절'], '안 달아요': ['내 생일', '소풍 가는 날'] }, 0.2),
              MP('태극기를 바르게 대하는 모습만 골라 보세요.', '태극기 예절', ['깨끗하게 접어 둬요', '바르게 걸어요', '땅에 끌고 다녀요', '칼처럼 휘둘러요'], ['깨끗하게 접어 둬요', '바르게 걸어요'], 0.15),
            ],
          },
          {
            title: '활동 2. 말풍선에 고마운 말 넣기', tool: 'story',
            teacher: '"만세를 부른 사람들에게 무슨 말을 하고 싶나요?" 말풍선을 채운 뒤 큰 소리로 읽게 한다. "그 사람들은 무서웠을까요?"라는 질문이 나오면 "무서워도 나라를 위해 용기를 냈어요. 그래서 고마운 거예요"라고 답해 준다.',
            task: '말풍선의 빈칸에 알맞은 말을 넣어요.',
            items: [
              SF('만세를 부른 분들께 하는 말을 채워 보세요.', ['고맙습니다', '미워요', '시끄러워요'], [{ id: 'b1', who: '하나', motif: 'star', label: '용기를 내 주셔서 ___.' }], { b1: '고맙습니다' }, 0.1),
              SF('3·1절이 언제인지 채워 보세요.', ['3월 1일', '5월 5일', '12월 25일'], [{ id: 'b1', who: '선생님', motif: 'sun', label: '3·1절은 ___이에요.' }], { b1: '3월 1일' }, 0.1),
              SF('태극기를 다는 친구의 말을 채워 보세요.', ['소중히', '아무렇게나', '거꾸로'], [{ id: 'b1', who: '준', motif: 'house', label: '태극기를 ___ 달아요.' }], { b1: '소중히' }, 0.15),
            ],
          },
        ],
        wrap: {
          teacher: '"3·1절에 우리 집에서 할 수 있는 일은 무엇일까요?" 출구 1번에서 놀이 카드를 고른 학생에게는 "쉬는 날에 놀아도 돼요. 그런데 3·1절의 뜻을 기억하는 일은 무엇일까요?"라고 다시 묻는다.',
          exit: [
            XC('mindmap', { mode: 'pick', topic: '3·1절에 할 일', basket: '3·1절에 할 일', cards: ['태극기 달기', '만세 이야기 듣기', '태극기 밟기', '불꽃놀이'] }, '3·1절에 할 일만 골라 담아 보세요.', { pick: ['태극기 달기', '만세 이야기 듣기'] }, 0.1),
            CH('3·1절에 사람들이 외친 말은 무엇인가요?', ['대한 독립 만세', '생일 축하해'], 0, '사람들은 태극기를 들고 "대한 독립 만세"를 외쳤어요.'),
            MOOD,
          ],
        },
        wsTitle: '3월 1일 3·1절',
        ws: [
          { type: 'choice', prompt: '3·1절에 집에 다는 것에 ○ 하세요.', options: ['태극기', '풍선'], answer: '태극기' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '3·1절은 ___월 ___일이에요.', answer: '3, 1' },
          { type: 'draw', prompt: '태극기를 든 사람들을 그려 보세요.' },
          { type: 'short', prompt: '만세를 부른 분들께 하고 싶은 말을 써 보세요.' },
        ],
        notes: '자주 보이는 어려움: ① 3·1절을 그냥 쉬는 날로만 안다 → 쉬는 날이 된 까닭을 한 문장으로 말하게 한다. ② 태극기를 놀이 도구로 쓴다 → 태극기를 바르게 대하는 모습을 함께 보여 준다. ③ 일본 사람 모두를 미워하는 말이 나온다 → "그때 나라를 빼앗은 일이 잘못이에요. 사람을 미워하는 것과는 달라요"라고 바로잡는다.',
      }),

      LESSON(2, {
        title: '과학이 도와주는 물건 찾고 궁금한 것 알아보는 차례 놓기',
        objective: '과학의 날(4월 21일)에 우리 둘레에서 과학이 도와주는 물건을 찾고, 궁금한 것을 알아보는 차례를 말할 수 있다.',
        draw: 'a curious child holding a paper magnifying glass over a flower, with paper stars and a small rocket',
        banner: '4월 21일 과학의 날', extra: [{ motif: 'star', x: 160, y: 100, color: 'buttercup', s: 0.6 }],
        intro: {
          teacher: '"4월 21일은 과학의 날이에요. 과학은 어디에 있을까요?" 대답을 듣고(기다릴 반응: "실험실이요", "로켓이요") 시연 단추로 냉장고 카드를 \'과학이 도와요\' 칸에 넣는다. "과학은 어른들만 해요"라는 말이 나오면 "궁금해하고 살펴보는 것도 과학이에요. 여러분도 할 수 있어요"라고 말한다.',
          student: '요즘 궁금한 것 하나를 짝에게 말해 봐요.',
          demo: DM('mindmap', { mode: 'sort', topic: '우리 둘레', slots: ['과학이 도와요', '자연 그대로'], cards: ['냉장고', '돌멩이'] }, { sort: { '과학이 도와요': ['냉장고'], '자연 그대로': ['돌멩이'] } }),
        },
        acts: [
          {
            title: '활동 1. 과학이 도와주는 물건 나누기', tool: 'mindmap',
            teacher: '"이 물건은 사람이 과학으로 만들었을까요, 자연에 원래 있었을까요?" 꽃을 \'과학\' 칸에 넣는 학생에게는 "꽃은 스스로 자라요. 그런데 꽃을 키우는 화분의 물뿌리개는 사람이 만들었지요"라고 견주어 준다.',
            task: '과학이 도와주는 물건과 자연에 원래 있는 것을 나누어요.',
            items: [
              MS('사람이 만든 물건과 자연에 있는 것으로 나누어 보세요.', '무엇일까요', ['사람이 만들었어요', '자연에 있어요'], ['전등', '자전거', '나무', '구름'], { '사람이 만들었어요': ['전등', '자전거'], '자연에 있어요': ['나무', '구름'] }, 0.15),
              MP('어두운 밤에 도움을 주는 물건을 골라 보세요.', '밤에 도와요', ['손전등', '가로등', '줄넘기', '공'], ['손전등', '가로등'], 0.1),
              MP('멀리 있는 사람과 이야기하게 돕는 물건을 골라 보세요.', '멀리 이야기해요', ['전화기', '컴퓨터 화상 통화', '연필깎이', '우산'], ['전화기', '컴퓨터 화상 통화'], 0.15),
            ],
          },
          {
            title: '활동 2. 궁금한 것 알아보는 차례 놓기', tool: 'story',
            teacher: '"궁금하면 무엇부터 할까요?" 장면 카드를 놓은 뒤 처음부터 소리 내어 읽게 한다. \'알았어요\'를 맨 앞에 놓는 학생에게는 "살펴보기 전에 알 수 있을까요?"라고 묻는다.',
            task: '궁금한 것을 알아보는 장면을 차례대로 놓아요.',
            items: [
              SO('씨앗이 궁금한 하나의 이야기를 차례대로 놓아 보세요.', '씨앗이 궁금해요', ['처음', '가운데', '끝'], [{ id: 'q', text: '씨앗은 어떻게 자랄까?', motif: 'sun' }, { id: 'look', text: '날마다 살펴봐요', motif: 'leaf' }, { id: 'know', text: '싹이 나는 걸 알았어요', motif: 'flower' }], ['q', 'look', 'know'], 0.15),
              SO('그림자가 궁금한 준의 이야기를 차례대로 놓아 보세요.', '그림자가 궁금해요', ['처음', '가운데', '끝'], [{ id: 'q', text: '그림자는 왜 생길까?', motif: 'sun' }, { id: 'try', text: '손전등을 비춰 봐요', motif: 'star' }, { id: 'know', text: '빛을 가리면 생겨요', motif: 'moon' }], ['q', 'try', 'know'], 0.2),
              SO('얼음이 궁금한 서의 이야기를 차례대로 놓아 보세요.', '얼음이 궁금해요', ['처음', '가운데', '끝'], [{ id: 'q', text: '얼음은 어디서 녹을까?', motif: 'snow' }, { id: 'try', text: '햇볕과 그늘에 둬요', motif: 'cloud' }, { id: 'know', text: '햇볕에서 빨리 녹아요', motif: 'sun' }], ['q', 'try', 'know'], 0.2),
            ],
          },
        ],
        wrap: {
          teacher: '"과학의 날에 나는 무엇을 궁금해해 볼까요?" 출구 1번에서 \'살펴보기\'를 빼고 놓는 학생에게는 "알아보려면 꼭 해야 하는 일이 있었어요"라고 되짚는다.',
          exit: [
            XC('story', { title: '물이 궁금해요', slots: ['처음', '가운데', '끝'], cards: [{ id: 'q', text: '물은 어디로 갔을까?', motif: 'cloud' }, { id: 'look', text: '컵을 날마다 봐요', motif: 'sun' }, { id: 'know', text: '물이 줄어든 걸 알았어요', motif: 'star' }] }, '물이 궁금한 이야기를 차례대로 놓아 보세요.', { order: ['q', 'look', 'know'] }, 0.15),
            CH('과학의 날은 언제인가요?', ['4월 21일', '10월 9일'], 0, '과학의 날은 4월 21일이에요. 4월은 과학의 달이기도 해요.'),
            MOOD,
          ],
        },
        wsTitle: '4월 21일 과학의 날',
        ws: [
          { type: 'choice', prompt: '사람이 과학으로 만든 물건에 ○ 하세요.', options: ['전등', '나무'], answer: '전등' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '과학의 날은 ___월 ___일이에요.', answer: '4, 21' },
          { type: 'short', prompt: '내가 궁금한 것을 하나 써 보세요.' },
          { type: 'draw', prompt: '내가 만들고 싶은 발명품을 그려 보세요.' },
        ],
        notes: '자주 보이는 어려움: ① 과학을 실험실·로켓에만 있는 것으로 여긴다 → 교실 물건에서 과학을 찾게 한다. ② 알아보는 차례를 건너뛴다 → "궁금해요 → 살펴봐요 → 알았어요" 세 낱말을 손가락으로 세며 말하게 한다.',
      }),

      LESSON(3, {
        title: '지구를 아끼는 행동 고르고 갈림길에서 정하기',
        objective: '지구의 날(4월 22일)의 뜻을 알고, 지구를 아끼는 행동을 골라 말할 수 있다.',
        draw: 'a smiling paper earth surrounded by children planting trees and turning off a lamp',
        banner: '4월 22일 지구의 날', extra: [{ motif: 'leaf', x: 160, y: 200, color: 'mint', s: 0.7 }],
        intro: {
          teacher: '"우리가 사는 별의 이름은 무엇일까요?" 대답을 듣고(기다릴 반응: "지구요") 4월 22일은 세계 여러 나라 사람들이 지구를 아끼자고 약속하는 지구의 날이라고 알린다. 시연 단추로 \'불 끄기\' 카드를 바구니에 담는다. "지구는 너무 커서 내가 못 지켜요"라는 말이 나오면 "작은 행동이 모이면 커져요"라고 말한다.',
          student: '집이나 학교에서 지구를 아끼는 행동 하나를 짝에게 말해 봐요.',
          demo: DM('mindmap', { mode: 'pick', topic: '지구 아끼기', basket: '지구 아끼기', cards: ['불 끄기', '물 틀어 두기'] }, { pick: ['불 끄기'] }),
        },
        acts: [
          {
            title: '활동 1. 지구를 아끼는 행동 고르기', tool: 'mindmap',
            teacher: '"이 행동을 하면 지구가 웃을까요, 힘들까요?" 카드마다 까닭을 짧게 말하게 한다. 이를 닦을 때 물을 계속 트는 카드를 담는 학생에게는 "컵에 물을 받아 쓰면 물을 아낄 수 있어요"라고 알려 준다.',
            task: '지구를 아끼는 행동을 고르고 나누어요.',
            items: [
              MP('지구를 아끼는 행동만 골라 담아 보세요.', '지구 아끼기', ['빈 교실 불 끄기', '컵에 물 받아 양치', '물 틀어 두고 놀기', '종이 한 장 쓰고 버리기'], ['빈 교실 불 끄기', '컵에 물 받아 양치'], 0.1),
              MS('행동을 지구가 웃는 일과 힘든 일로 나누어 보세요.', '지구의 마음', ['지구가 웃어요', '지구가 힘들어요'], ['꽃에 물 주기', '종이 양면 쓰기', '쓰레기 아무 데나', '음식 많이 남기기'], { '지구가 웃어요': ['꽃에 물 주기', '종이 양면 쓰기'], '지구가 힘들어요': ['쓰레기 아무 데나', '음식 많이 남기기'] }, 0.2),
              MP('다시 쓸 수 있는 물건만 골라 보세요.', '다시 써요', ['장바구니', '물병', '한 번 쓰는 컵', '비닐봉지 여러 장'], ['장바구니', '물병'], 0.2),
            ],
          },
          {
            title: '활동 2. 갈림길에서 지구를 아끼는 길 고르기', tool: 'emotion',
            teacher: '"이럴 때 나는 어떻게 할까요?" 보기를 고르면 결과를 함께 읽는다. 귀찮다는 마음이 나오면 "귀찮은 마음이 드는 건 괜찮아요. 그래도 한 번 해 보면 뿌듯해져요"라고 말해 준다.',
            task: '상황에서 어떻게 할지 고르고 결과를 봐요.',
            items: [
              EB('교실을 나가는데 불이 켜져 있어요. 어떻게 할까요?', '쉬는 시간, 모두 운동장에 가요. 교실 불이 켜져 있어요.', [
                { id: 'off', text: '불을 끄고 나가요', result: '전기를 아낄 수 있어요.', mood: '뿌듯함' },
                { id: 'leave', text: '그냥 나가요', result: '빈 교실에 불이 계속 켜져 있어요.', mood: '걱정', why: '빈 곳의 불은 꺼야 전기를 아껴요.' }], 'off', 0.1),
              EB('점심밥이 많아요. 어떻게 할까요?', '급식 판에 밥을 많이 받았어요. 다 못 먹을 것 같아요.', [
                { id: 'ask', text: '먹을 만큼만 받아요', result: '남는 음식이 줄어요.', mood: '편안함' },
                { id: 'waste', text: '받고 많이 남겨요', result: '버리는 음식이 많아져요.', mood: '걱정', why: '먹을 만큼 받으면 음식 쓰레기가 줄어요.' }], 'ask', 0.15),
              EB('색종이를 조금만 썼어요. 어떻게 할까요?', '만들기를 하고 색종이가 반쯤 남았어요.', [
                { id: 'keep', text: '모아 두고 다음에 써요', result: '종이를 아낄 수 있어요.', mood: '뿌듯함' },
                { id: 'throw', text: '바로 버려요', result: '쓸 수 있는 종이가 버려져요.', mood: '슬픔', why: '남은 종이는 다시 쓸 수 있어요.' }], 'keep', 0.15),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘부터 내가 지킬 지구 약속은 무엇인가요?" 출구 1번에서 \'물 틀어 두기\'를 고른 학생에게는 물을 받아 쓰는 방법을 다시 보여 준다.',
          exit: [
            XC('mindmap', { mode: 'pick', topic: '나의 지구 약속', basket: '나의 지구 약속', cards: ['양치 컵 쓰기', '안 쓰는 불 끄기', '물 틀어 두기', '새 종이만 쓰기'] }, '내가 지킬 지구 약속을 골라 담아 보세요.', { pick: ['양치 컵 쓰기', '안 쓰는 불 끄기'] }, 0.1),
            CH('지구의 날은 언제인가요?', ['4월 22일', '8월 15일'], 0, '지구의 날은 4월 22일, 과학의 날 바로 다음 날이에요.'),
            MOOD,
          ],
        },
        wsTitle: '4월 22일 지구의 날',
        ws: [
          { type: 'choice', prompt: '지구를 아끼는 행동에 ○ 하세요.', options: ['불 끄기', '물 틀어 두기'], answer: '불 끄기' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '지구의 날은 ___월 ___일이에요.', answer: '4, 22' },
          { type: 'draw', prompt: '웃는 지구를 그려 보세요.' },
          { type: 'short', prompt: '내가 지킬 지구 약속을 한 가지 써 보세요.' },
        ],
        notes: '자주 보이는 어려움: ① 지구를 지키는 일을 어른의 일로만 여긴다 → 교실에서 바로 할 수 있는 일을 고르게 한다. ② 겁주는 말(지구가 망해요)로 받아들인다 → 무섭게 말하지 않고 "할 수 있는 일"에 집중한다. 지구의 날은 법정기념일이 아니라 세계 여러 나라가 함께 지키는 날이다.',
      }),

      LESSON(4, {
        title: '5월 18일을 기억하며 서로 돕는 행동 고르기',
        objective: '5·18민주화운동 기념일에 광주 시민들이 서로 도운 일을 알고, 서로 돕는 행동을 고를 수 있다.',
        draw: 'neighbors sharing rice balls on paper trays in a sunny May town with paper flowers',
        banner: '5월 18일을 기억해요', extra: [{ motif: 'flower', x: 150, y: 210, color: 'peach', s: 0.7 }],
        intro: {
          teacher: '"5월 18일은 광주라는 도시의 사람들을 기억하는 날이에요." 1980년 5월, 광주 시민들이 모두가 함께 나라의 일을 정하는 민주주의를 바라며 힘을 모았고, 그때 이웃끼리 주먹밥을 나누며 서로 도왔다는 이야기를 짧게 들려준다. 시연 단추로 \'주먹밥 나누기\' 카드를 담는다. 무서운 장면을 묻는 학생에게는 "오늘은 서로 도운 마음을 이야기해요"라고 말해 준다.',
          student: '친구나 가족이 나를 도와준 적이 있었나요? 짝에게 말해 봐요.',
          demo: DM('mindmap', { mode: 'pick', topic: '서로 도와요', basket: '서로 도와요', cards: ['주먹밥 나누기', '혼자 다 먹기'] }, { pick: ['주먹밥 나누기'] }),
        },
        acts: [
          {
            title: '활동 1. 서로 돕는 행동 고르기', tool: 'mindmap',
            teacher: '"이 행동은 서로 돕는 일일까요?" 카드를 읽고 까닭을 말하게 한다. \'혼자 먼저 하기\'를 고른 학생에게는 "친구가 힘들 때 나만 먼저 가면 친구 마음은 어떨까요?"라고 묻는다.',
            task: '서로 돕는 행동을 고르고 나누어요.',
            items: [
              MP('서로 돕는 행동만 골라 담아 보세요.', '서로 도와요', ['주먹밥 나누어 먹기', '다친 사람 돕기', '혼자 다 가지기', '모른 척 지나가기'], ['주먹밥 나누어 먹기', '다친 사람 돕기'], 0.1),
              MS('교실의 행동을 돕는 일과 아닌 일로 나누어 보세요.', '우리 교실', ['돕는 일', '돕지 않는 일'], ['짐 함께 들기', '모르는 것 알려 주기', '친구 놀리기', '줄 새치기'], { '돕는 일': ['짐 함께 들기', '모르는 것 알려 주기'], '돕지 않는 일': ['친구 놀리기', '줄 새치기'] }, 0.15),
              MP('5월 18일을 기억하는 방법을 골라 보세요.', '기억하는 방법', ['그날 이야기 듣기', '고마운 마음 갖기', '장난치며 웃기', '그날을 잊기'], ['그날 이야기 듣기', '고마운 마음 갖기'], 0.15),
            ],
          },
          {
            title: '활동 2. 나눔 이야기 차례대로 놓기', tool: 'story',
            teacher: '"이야기에서 맨 처음에 무슨 일이 있었나요?" 장면을 놓은 뒤 소리 내어 읽게 한다. 이 이야기는 서로 돕는 마음을 떠올리려고 지은 짧은 이야기라고 알려 준다.',
            task: '서로 돕는 이야기 장면을 차례대로 놓아요.',
            items: [
              SO('주먹밥 이야기를 차례대로 놓아 보세요.', '주먹밥 이야기', ['처음', '가운데', '끝'], [{ id: 'cook', text: '이웃이 밥을 지어요', motif: 'house' }, { id: 'ball', text: '주먹밥을 만들어요', motif: 'star' }, { id: 'share', text: '배고픈 사람과 나눠요', motif: 'flower' }], ['cook', 'ball', 'share'], 0.15),
              SO('교실 나눔 이야기를 차례대로 놓아 보세요.', '크레파스 나눔', ['처음', '가운데', '끝'], [{ id: 'none', text: '민이 크레파스가 없어요', motif: 'cloud' }, { id: 'lend', text: '옆 친구가 빌려줘요', motif: 'sun' }, { id: 'smile', text: '함께 그림을 그려요', motif: 'flower' }], ['none', 'lend', 'smile'], 0.15),
              SF('도움을 받은 친구의 말을 채워 보세요.', ['도와줘서 고마워', '저리 가', '몰라'], [{ id: 'b1', who: '민', motif: 'star', label: '___.' }], { b1: '도와줘서 고마워' }, 0.1),
            ],
          },
        ],
        wrap: {
          teacher: '"5월 18일을 기억하면서 나는 어떤 사람이 되고 싶나요?" 출구 1번에서 \'모른 척하기\'를 담은 학생에게는 함께 도와줄 수 있는 방법을 하나 말해 보게 한다.',
          exit: [
            XC('mindmap', { mode: 'pick', topic: '내가 도울 일', basket: '내가 도울 일', cards: ['넘어진 친구 일으키기', '친구에게 지우개 빌려주기', '모른 척하기', '혼자만 놀기'] }, '내가 할 수 있는 돕는 일을 골라 담아 보세요.', { pick: ['넘어진 친구 일으키기', '친구에게 지우개 빌려주기'] }, 0.1),
            CH('5월 18일에 기억하는 곳은 어느 도시인가요?', ['광주', '제주'], 0, '5·18민주화운동은 광주에서 일어났어요.'),
            MOOD,
          ],
        },
        wsTitle: '5월 18일을 기억해요',
        ws: [
          { type: 'choice', prompt: '서로 돕는 행동에 ○ 하세요.', options: ['주먹밥 나누기', '혼자 다 먹기'], answer: '주먹밥 나누기' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '5·18민주화운동 기념일은 ___월 ___일이에요.', answer: '5, 18' },
          { type: 'draw', prompt: '친구와 나누는 모습을 그려 보세요.' },
          { type: 'short', prompt: '내가 친구를 도울 수 있는 일을 써 보세요.' },
        ],
        notes: '자주 보이는 어려움: ① 무서운 이야기를 궁금해한다 → 저학년에서는 서로 도운 마음과 기억하는 방법에 머문다. ② 나눔을 손해로 여긴다 → 나누었을 때의 마음을 말해 보게 한다. 학교에서 정한 계기교육 자료 범위를 따르고, 지역(광주 등)에 따라 교육청 지침이 따로 있을 수 있다.',
      }),

      LESSON(5, {
        title: '현충일 묵념 자세 고르고 하루 차례 놓기',
        objective: '현충일(6월 6일)이 나라를 위해 목숨을 바친 분들을 기억하는 날임을 알고, 바른 묵념 자세를 고를 수 있다.',
        draw: 'children standing quietly with bowed heads beside a paper flag at half position, white paper flowers',
        banner: '6월 6일 현충일', extra: [{ motif: 'flower', x: 150, y: 210, color: 'cream', s: 0.7 }],
        intro: {
          teacher: '"6월 6일 아침 10시에 \'웽—\' 소리가 울리면 무엇을 할까요?" 대답을 듣고(기다릴 반응: "모르겠어요", "조용히 해요") 현충일은 나라를 위해 목숨을 바친 분들을 기억하는 날이고, 사이렌이 울리면 1분 동안 조용히 묵념한다고 알린다. 시연 단추로 \'눈 감고 고개 숙이기\' 카드를 담는다. 소리가 무섭다는 학생에게는 "기억하자고 알리는 소리예요"라고 안심시킨다.',
          student: '고마운 분을 조용히 떠올려 본 적이 있나요? 짝에게 말해 봐요.',
          demo: DM('mindmap', { mode: 'pick', topic: '묵념', basket: '묵념', cards: ['눈 감고 고개 숙이기', '뛰어다니기'] }, { pick: ['눈 감고 고개 숙이기'] }),
        },
        acts: [
          {
            title: '활동 1. 바른 묵념 자세 고르기', tool: 'mindmap',
            teacher: '"묵념할 때는 몸과 마음을 어떻게 할까요?" 바른 자세를 함께 해 본다. 웃거나 떠드는 카드를 고른 학생에게는 "1분 동안은 고마운 분을 떠올리는 시간이에요"라고 짚는다.',
            task: '바른 묵념 자세와 현충일에 하는 일을 골라요.',
            items: [
              MP('바른 묵념 자세만 골라 담아 보세요.', '묵념 자세', ['바르게 서요', '고개를 숙여요', '친구와 떠들어요', '장난을 쳐요'], ['바르게 서요', '고개를 숙여요'], 0.1),
              MS('현충일에 어울리는 일과 어울리지 않는 일로 나누어 보세요.', '현충일', ['어울려요', '안 어울려요'], ['조용히 묵념하기', '고마운 분 떠올리기', '폭죽 터뜨리기', '큰 소리로 노래하기'], { '어울려요': ['조용히 묵념하기', '고마운 분 떠올리기'], '안 어울려요': ['폭죽 터뜨리기', '큰 소리로 노래하기'] }, 0.2),
              MP('현충일에 기억하는 분들을 골라 보세요.', '기억하는 분', ['나라를 지킨 분', '나라 위해 희생한 분', '만화 속 영웅', '게임 캐릭터'], ['나라를 지킨 분', '나라 위해 희생한 분'], 0.15),
            ],
          },
          {
            title: '활동 2. 현충일 하루 차례 놓기', tool: 'story',
            teacher: '"아침에 태극기를 단 뒤에는 무엇이 있을까요?" 현충일에는 태극기를 깃봉에서 조금 내려 다는 날이라고 알려 준다(조기). 차례를 놓은 뒤 함께 읽는다.',
            task: '현충일 하루의 장면을 차례대로 놓아요.',
            items: [
              SO('현충일 아침 장면을 차례대로 놓아 보세요.', '현충일 아침', ['처음', '가운데', '끝'], [{ id: 'flag', text: '태극기를 내려 달아요', motif: 'house' }, { id: 'siren', text: '10시 사이렌이 울려요', motif: 'sun' }, { id: 'bow', text: '1분 동안 묵념해요', motif: 'flower' }], ['flag', 'siren', 'bow'], 0.2),
              SO('묵념하는 차례를 놓아 보세요.', '묵념하기', ['처음', '가운데', '끝'], [{ id: 'stand', text: '바르게 서요', motif: 'tree' }, { id: 'eyes', text: '눈 감고 고개 숙여요', motif: 'moon' }, { id: 'up', text: '고개 들고 인사해요', motif: 'sun' }], ['stand', 'eyes', 'up'], 0.15),
              SF('묵념하며 떠올리는 말을 채워 보세요.', ['고맙습니다', '심심해요', '빨리 끝나라'], [{ id: 'b1', who: '나', motif: 'flower', label: '나라를 지켜 주셔서 ___.' }], { b1: '고맙습니다' }, 0.1),
            ],
          },
        ],
        wrap: {
          teacher: '"사이렌이 울리면 나는 어떻게 할까요?" 출구 1번에서 묵념을 맨 앞에 둔 학생에게는 "먼저 무엇이 알려 줄까요?"라고 다시 묻는다.',
          exit: [
            XC('story', { title: '사이렌이 울려요', slots: ['처음', '가운데', '끝'], cards: [{ id: 'hear', text: '사이렌을 들어요', motif: 'sun' }, { id: 'stop', text: '하던 일을 멈춰요', motif: 'cloud' }, { id: 'pray', text: '조용히 묵념해요', motif: 'flower' }] }, '사이렌이 울릴 때 할 일을 차례대로 놓아 보세요.', { order: ['hear', 'stop', 'pray'] }, 0.15),
            CH('현충일은 언제인가요?', ['6월 6일', '3월 1일'], 0, '현충일은 6월 6일이에요.'),
            MOOD,
          ],
        },
        wsTitle: '6월 6일 현충일',
        ws: [
          { type: 'choice', prompt: '바른 묵념 자세에 ○ 하세요.', options: ['고개 숙이기', '뛰어다니기'], answer: '고개 숙이기' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '현충일은 ___월 ___일이에요.', answer: '6, 6' },
          { type: 'draw', prompt: '고마운 분께 드리는 꽃을 그려 보세요.' },
          { type: 'short', prompt: '나라를 지킨 분들께 하고 싶은 말을 써 보세요.' },
        ],
        notes: '자주 보이는 어려움: ① 현충일을 즐거운 휴일로만 여긴다 → 조용히 기억하는 날임을 몸으로 묵념해 보게 한다. ② 사이렌을 무서워한다 → 기억하자고 알리는 소리라고 안심시킨다. ③ 태극기를 다는 방법을 3·1절과 같다고 여긴다 → 현충일은 깃면을 내려 다는 날임을 짚는다.',
      }),

      LESSON(6, {
        title: '함께 정하는 차례 놓고 친구 생각 듣는 길 고르기',
        objective: '6·10민주항쟁 기념일이 시민들이 함께 정하는 민주주의를 바란 날임을 알고, 함께 정하는 방법을 말할 수 있다.',
        draw: 'children raising paper hands in a circle to decide together, a paper ballot box in the middle',
        banner: '6월 10일 함께 정해요', extra: [{ motif: 'star', x: 150, y: 100, color: 'sky', s: 0.6 }],
        intro: {
          teacher: '"우리 반 놀이를 한 사람이 마음대로 정하면 어떨까요?" 대답을 듣고(기다릴 반응: "싫어요", "속상해요") 6월 10일은 1987년에 많은 시민이 \'나라의 대표를 우리가 직접 뽑고 싶다\'며 함께 목소리를 낸 일을 기억하는 날이라고 알린다. 시연 단추로 \'손 들어 정하기\' 카드를 담는다.',
          student: '친구들과 무엇을 함께 정해 본 적이 있나요? 짝에게 말해 봐요.',
          demo: DM('mindmap', { mode: 'pick', topic: '함께 정해요', basket: '함께 정해요', cards: ['손 들어 정하기', '혼자 마음대로'] }, { pick: ['손 들어 정하기'] }),
        },
        acts: [
          {
            title: '활동 1. 함께 정하는 차례 놓기', tool: 'story',
            teacher: '"함께 정할 때는 무엇부터 할까요?" 손 들기를 맨 앞에 두는 학생에게는 "무엇이 있는지 모르면 무엇에 손을 들까요?"라고 묻는다.',
            task: '함께 정하는 장면을 차례대로 놓아요.',
            items: [
              SO('우리 반 놀이를 정하는 차례를 놓아 보세요.', '놀이 정하기', ['처음', '가운데', '끝'], [{ id: 'say', text: '하고 싶은 놀이 말하기', motif: 'star' }, { id: 'vote', text: '손 들어 정하기', motif: 'sun' }, { id: 'play', text: '정한 놀이 함께하기', motif: 'flower' }], ['say', 'vote', 'play'], 0.15),
              SO('간식 고르는 차례를 놓아 보세요.', '간식 고르기', ['처음', '가운데', '끝'], [{ id: 'list', text: '간식 이름 모으기', motif: 'leaf' }, { id: 'count', text: '손 든 수 세기', motif: 'star' }, { id: 'pick', text: '많은 쪽으로 정하기', motif: 'sun' }], ['list', 'count', 'pick'], 0.2),
              SF('정해진 것을 따르는 친구의 말을 채워 보세요.', ['함께 정했으니 해 보자', '싫어 안 해', '나만 빼 줘'], [{ id: 'b1', who: '솔', motif: 'house', label: '내 것은 아니지만 ___.' }], { b1: '함께 정했으니 해 보자' }, 0.2),
            ],
          },
          {
            title: '활동 2. 친구 생각을 듣는 길 고르기', tool: 'emotion',
            teacher: '"친구의 생각이 나와 다르면 어떻게 할까요?" 보기를 고른 뒤 결과를 함께 읽는다. 큰 소리로 우기는 보기를 고른 학생에게는 "목소리가 크다고 맞는 건 아니에요. 모두의 생각을 들어야 해요"라고 말한다.',
            task: '상황에서 어떻게 할지 고르고 결과를 봐요.',
            items: [
              EB('친구가 나와 다른 놀이를 하고 싶대요. 어떻게 할까요?', '나는 술래잡기, 친구는 공놀이를 하고 싶어요.', [
                { id: 'listen', text: '친구 생각도 들어 봐요', result: '둘 다 말하고 함께 정해요.', mood: '편안함' },
                { id: 'shout', text: '내 것만 크게 우겨요', result: '친구가 속상해서 말을 안 해요.', mood: '화남', why: '우기면 함께 정할 수 없어요.' }], 'listen', 0.1),
              EB('손을 들어 정했는데 내 것이 안 뽑혔어요. 어떻게 할까요?', '모둠 이름을 정했어요. 내가 낸 이름은 뽑히지 않았어요.', [
                { id: 'accept', text: '정한 이름을 함께 써요', result: '모둠이 사이좋게 시작해요.', mood: '뿌듯함' },
                { id: 'sulk', text: '안 할 거라고 화내요', result: '모둠 활동을 시작하지 못해요.', mood: '속상함', why: '함께 정한 것은 함께 지켜요.' }], 'accept', 0.2),
              EB('조용한 친구가 말을 못 했어요. 어떻게 할까요?', '모두 생각을 말했는데 하율이만 아직 말하지 않았어요.', [
                { id: 'ask', text: '"너는 어떻게 생각해?" 물어요', result: '하율이도 생각을 말해요.', mood: '기쁨' },
                { id: 'skip', text: '그냥 빨리 정해요', result: '하율이 생각은 빠져요.', mood: '슬픔', why: '모두의 생각을 들어야 해요.' }], 'ask', 0.15),
            ],
          },
        ],
        wrap: {
          teacher: '"6월 10일을 기억하면서 우리 반은 어떻게 정하면 좋을까요?" 출구 1번에서 \'혼자 정하기\'를 고른 학생에게는 모두가 말할 기회를 갖는 방법을 다시 떠올리게 한다.',
          exit: [
            XC('mindmap', { mode: 'pick', topic: '함께 정하는 방법', basket: '함께 정하는 방법', cards: ['모두 생각 말하기', '손 들어 정하기', '힘센 사람이 정하기', '혼자 정하기'] }, '함께 정하는 좋은 방법만 골라 담아 보세요.', { pick: ['모두 생각 말하기', '손 들어 정하기'] }, 0.1),
            CH('6월 10일에 시민들이 바란 것은 무엇인가요?', ['대표를 직접 뽑는 것', '방학을 늘리는 것'], 0, '시민들은 나라의 대표를 국민이 직접 뽑기를 바랐어요.'),
            MOOD,
          ],
        },
        wsTitle: '6월 10일 함께 정해요',
        ws: [
          { type: 'choice', prompt: '함께 정하는 방법에 ○ 하세요.', options: ['손 들어 정하기', '혼자 정하기'], answer: '손 들어 정하기' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '6·10민주항쟁 기념일은 ___월 ___일이에요.', answer: '6, 10' },
          { type: 'short', prompt: '친구 생각이 나와 다를 때 할 말을 써 보세요.' },
          { type: 'draw', prompt: '우리 반이 함께 정하는 모습을 그려 보세요.' },
        ],
        notes: '자주 보이는 어려움: ① 많은 쪽이 이기면 적은 쪽 생각은 필요 없다고 여긴다 → 정하기 전에 모두의 말을 듣는 차례를 강조한다. ② 자기 것이 안 뽑히면 따르지 않는다 → 함께 정한 것을 함께 지키는 마음을 말하게 한다. 특정 정당·정치인 이야기는 다루지 않는다.',
      }),

      LESSON(7, {
        title: '광복절에 어울리는 말 고르고 기쁜 마음 말풍선 채우기',
        objective: '광복절(8월 15일)이 빼앗긴 나라를 되찾은 날임을 알고, 기쁘고 고마운 마음을 말할 수 있다.',
        draw: 'happy people waving paper flags under bright summer sun, paper light rays spreading out',
        banner: '8월 15일 광복절', extra: [{ motif: 'sun', x: 150, y: 96, color: 'buttercup', s: 0.6 }],
        intro: {
          teacher: '"\'광복\'은 빛을 되찾았다는 뜻이에요. 무엇을 되찾았을까요?" 대답을 듣고(기다릴 반응: "나라요", "모르겠어요") 1945년 8월 15일에 빼앗겼던 나라를 되찾았고, 그래서 사람들이 태극기를 흔들며 기뻐했다고 알린다. 시연 단추로 \'나라를 되찾은 날\' 카드를 담는다. 3·1절과 헷갈리는 학생에게는 "3·1절은 독립을 외친 날, 광복절은 나라를 되찾은 날"로 나누어 말해 준다.',
          student: '아주 기뻤던 날을 떠올려 짝에게 말해 봐요.',
          demo: DM('mindmap', { mode: 'pick', topic: '광복절', basket: '광복절', cards: ['나라를 되찾은 날', '겨울 방학식'] }, { pick: ['나라를 되찾은 날'] }),
        },
        acts: [
          {
            title: '활동 1. 광복절에 어울리는 카드 고르기', tool: 'mindmap',
            teacher: '"이 카드는 광복절과 어울릴까요?" 3·1절 카드와 광복절 카드를 헷갈리는 학생에게는 날짜를 먼저 읽게 한다.',
            task: '광복절에 맞는 카드를 고르고, 두 기념일을 나누어요.',
            items: [
              MP('광복절에 어울리는 말만 골라 담아 보세요.', '광복절', ['나라를 되찾았어요', '태극기를 흔들어요', '눈싸움을 해요', '연을 날려요'], ['나라를 되찾았어요', '태극기를 흔들어요'], 0.1),
              MS('3·1절과 광복절로 나누어 보세요.', '두 기념일', ['3·1절', '광복절'], ['3월 1일', '만세를 외쳤어요', '8월 15일', '나라를 되찾았어요'], { '3·1절': ['3월 1일', '만세를 외쳤어요'], '광복절': ['8월 15일', '나라를 되찾았어요'] }, 0.25),
              MP('광복절에 할 수 있는 일을 골라 보세요.', '광복절에 할 일', ['태극기 달기', '독립운동 이야기 읽기', '태극기 버리기', '종일 게임만 하기'], ['태극기 달기', '독립운동 이야기 읽기'], 0.15),
            ],
          },
          {
            title: '활동 2. 기쁜 날의 말풍선 채우기', tool: 'story',
            teacher: '"나라를 되찾은 날, 사람들은 어떤 말을 했을까요?" 말풍선을 채우고 실감 나게 읽게 한다. 기쁨과 함께 독립을 위해 애쓴 분들께 고마운 마음을 갖는 날이라고 덧붙인다.',
            task: '광복절 장면의 말풍선 빈칸을 채워요.',
            items: [
              SF('광복을 맞은 사람의 말을 채워 보세요.', ['되찾았어요', '잃어버렸어요', '졸려요'], [{ id: 'b1', who: '할머니', motif: 'sun', label: '드디어 나라를 ___!' }], { b1: '되찾았어요' }, 0.1),
              SF('독립운동가께 드리는 말을 채워 보세요.', ['애써 주셔서', '놀아 주셔서', '혼내 주셔서'], [{ id: 'b1', who: '도윤', motif: 'star', label: '나라를 위해 ___ 고맙습니다.' }], { b1: '애써 주셔서' }, 0.15),
              SF('광복절 날짜를 채워 보세요.', ['8월 15일', '6월 6일', '10월 9일'], [{ id: 'b1', who: '선생님', motif: 'flower', label: '광복절은 ___이에요.' }], { b1: '8월 15일' }, 0.1),
            ],
          },
        ],
        wrap: {
          teacher: '"광복절에 우리 집에서는 무엇을 할까요?" 출구 1번에서 3·1절 카드를 광복절에 넣은 학생에게는 두 날의 뜻을 한 번 더 견주어 준다.',
          exit: [
            XC('mindmap', { mode: 'sort', topic: '어느 날일까', slots: ['3·1절', '광복절'], cards: ['봄에 만세를 불렀어요', '여름에 나라를 되찾았어요'] }, '두 문장을 알맞은 기념일로 나누어 보세요.', { sort: { '3·1절': ['봄에 만세를 불렀어요'], '광복절': ['여름에 나라를 되찾았어요'] } }, 0.2),
            CH('"광복"은 무슨 뜻인가요?', ['빛을 되찾음', '불을 끔'], 0, '광복은 빛을 되찾았다는 뜻이에요. 빼앗긴 나라를 되찾은 일을 말해요.'),
            MOOD,
          ],
        },
        wsTitle: '8월 15일 광복절',
        ws: [
          { type: 'choice', prompt: '광복절에 맞는 말에 ○ 하세요.', options: ['나라를 되찾은 날', '눈 오는 날'], answer: '나라를 되찾은 날' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '광복절은 ___월 ___일이에요.', answer: '8, 15' },
          { type: 'draw', prompt: '광복을 기뻐하는 사람들을 그려 보세요.' },
          { type: 'short', prompt: '독립운동가께 하고 싶은 말을 써 보세요.' },
        ],
        notes: '자주 보이는 어려움: ① 3·1절과 광복절을 섞는다 → "외친 날"과 "되찾은 날"로 나누어 말하게 한다. ② 광복을 "불이 켜짐"으로만 이해한다 → 나라를 되찾은 일을 빛에 빗댄 말이라고 알려 준다.',
      }),

      LESSON(8, {
        title: '단군 이야기 장면을 차례대로 놓기',
        objective: '개천절(10월 3일)이 단군이 우리나라 첫 나라 고조선을 세운 것을 기념하는 날임을 알고, 단군 이야기를 차례대로 말할 수 있다.',
        draw: 'a paper bear and tiger in a cave with garlic and mugwort, a paper sky opening above mountains',
        banner: '10월 3일 개천절', extra: [{ motif: 'mountain', x: 150, y: 196, color: 'mint', s: 0.6 }],
        intro: {
          teacher: '"아주아주 옛날, 우리나라 첫 나라는 어떻게 생겼을까요?" 대답을 듣고 10월 3일 개천절은 \'하늘이 열린 날\'이라는 뜻이고, 단군이 첫 나라 고조선을 세운 것을 기념하는 날이라고 알린다. 시연 단추로 곰과 호랑이 장면을 차례대로 놓는다. "곰이 진짜 사람이 됐어요?"라는 질문에는 "옛날부터 전해 오는 이야기예요"라고 답한다.',
          student: '아는 옛날이야기 하나를 짝에게 말해 봐요.',
          demo: DM('story', { slots: ['처음', '다음'], cards: [{ id: 'cave', text: '곰과 호랑이가 굴에 가요', motif: 'mountain' }, { id: 'eat', text: '쑥과 마늘을 먹어요', motif: 'leaf' }] }, { order: ['cave', 'eat'] }),
        },
        acts: [
          {
            title: '활동 1. 단군 이야기 차례대로 놓기', tool: 'story',
            teacher: '"곰은 언제 사람이 되었나요?" 장면을 놓을 때마다 소리 내어 읽게 한다. 단군이 나라를 세운 장면을 처음에 놓는 학생에게는 "단군은 누구의 아들이었나요?"라고 묻는다.',
            task: '단군 이야기 장면을 차례대로 놓아요.',
            items: [
              SO('곰과 호랑이 이야기를 차례대로 놓아 보세요.', '곰과 호랑이', ['처음', '가운데', '끝'], [{ id: 'ask', text: '사람이 되고 싶어요', motif: 'mountain' }, { id: 'eat', text: '쑥과 마늘을 먹어요', motif: 'leaf' }, { id: 'woman', text: '곰이 사람이 돼요', motif: 'flower' }], ['ask', 'eat', 'woman'], 0.15),
              SO('단군이 나라를 세우는 이야기를 차례대로 놓아 보세요.', '단군 이야기', ['처음', '가운데', '끝'], [{ id: 'come', text: '환웅이 땅에 내려와요', motif: 'cloud' }, { id: 'born', text: '단군이 태어나요', motif: 'sun' }, { id: 'found', text: '고조선을 세워요', motif: 'house' }], ['come', 'born', 'found'], 0.2),
              SO('호랑이 이야기를 차례대로 놓아 보세요.', '호랑이는요', ['처음', '가운데', '끝'], [{ id: 'enter', text: '호랑이도 굴에 들어가요', motif: 'mountain' }, { id: 'hard', text: '참기 힘들어해요', motif: 'cloud' }, { id: 'out', text: '굴 밖으로 나가요', motif: 'tree' }], ['enter', 'hard', 'out'], 0.2),
            ],
          },
          {
            title: '활동 2. 개천절에 맞는 말 고르기', tool: 'mindmap',
            teacher: '"개천절은 무엇을 기념하는 날이었지요?" 한글날 카드를 담는 학생에게는 "한글날은 10월 9일, 개천절은 10월 3일이에요. 둘 다 10월이라 헷갈리지요"라고 짚는다.',
            task: '개천절에 맞는 카드를 고르고 나누어요.',
            items: [
              MP('개천절에 맞는 말만 골라 담아 보세요.', '개천절', ['하늘이 열린 날', '첫 나라를 세운 날', '한글을 만든 날', '나라를 되찾은 날'], ['하늘이 열린 날', '첫 나라를 세운 날'], 0.2),
              MP('단군 이야기에 나오는 것을 골라 보세요.', '단군 이야기', ['곰', '쑥과 마늘', '자동차', '로봇'], ['곰', '쑥과 마늘'], 0.1),
              MS('10월의 두 기념일로 나누어 보세요.', '10월 기념일', ['개천절', '한글날'], ['10월 3일', '단군', '10월 9일', '세종대왕'], { '개천절': ['10월 3일', '단군'], '한글날': ['10월 9일', '세종대왕'] }, 0.25),
            ],
          },
        ],
        wrap: {
          teacher: '"개천절에 단군 이야기를 가족에게 들려줄 수 있나요?" 출구 1번에서 순서를 바꾼 학생에게는 먼저 누가 하늘에서 내려왔는지 떠올리게 한다.',
          exit: [
            XC('story', { title: '단군 이야기', slots: ['처음', '가운데', '끝'], cards: [{ id: 'sky', text: '하늘에서 내려와요', motif: 'cloud' }, { id: 'bear', text: '곰이 사람이 돼요', motif: 'flower' }, { id: 'king', text: '단군이 나라를 세워요', motif: 'house' }] }, '단군 이야기를 차례대로 놓아 보세요.', { order: ['sky', 'bear', 'king'] }, 0.2),
            CH('개천절은 언제인가요?', ['10월 3일', '6월 10일'], 0, '개천절은 10월 3일이에요.'),
            MOOD,
          ],
        },
        wsTitle: '10월 3일 개천절',
        ws: [
          { type: 'choice', prompt: '고조선을 세운 사람에 ○ 하세요.', options: ['단군', '세종대왕'], answer: '단군' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '개천절은 ___월 ___일이에요.', answer: '10, 3' },
          { type: 'draw', prompt: '단군 이야기에서 좋아하는 장면을 그려 보세요.' },
          { type: 'short', prompt: '곰이 쑥과 마늘을 먹으며 참았을 때 마음을 써 보세요.' },
        ],
        notes: '자주 보이는 어려움: ① 이야기를 실제 일로만 여기거나 거짓말로만 여긴다 → 『삼국유사』 등에 실려 오래 전해 오는 나라 세운 이야기라고 알려 준다. ② 개천절과 한글날을 섞는다 → 날짜와 인물을 짝지어 말하게 한다.',
      }),

      LESSON(9, {
        title: '한글 글자 고르고 세종대왕께 말풍선 보내기',
        objective: '한글날(10월 9일)이 세종대왕이 만든 한글을 기념하는 날임을 알고, 한글 글자를 고를 수 있다.',
        draw: 'a paper king smiling at children holding big paper Korean letter cards',
        banner: '10월 9일 한글날', extra: [{ motif: 'leaf', x: 150, y: 206, color: 'buttercup', s: 0.6 }],
        intro: {
          teacher: '"우리가 날마다 쓰는 글자 이름은 무엇일까요?" 대답을 듣고(기다릴 반응: "한글요") 한글은 세종대왕이 백성들이 쉽게 글을 읽고 쓰도록 만든 글자이고, 10월 9일 한글날에 그 뜻을 기념한다고 알린다. 시연 단추로 \'ㄱ\' 카드를 바구니에 담는다.',
          student: '내 이름 첫 글자를 짝에게 말해 봐요.',
          demo: DM('mindmap', { mode: 'pick', topic: '한글', basket: '한글', cards: ['ㄱ', 'A'] }, { pick: ['ㄱ'] }),
        },
        acts: [
          {
            title: '활동 1. 한글 글자 고르기', tool: 'mindmap',
            teacher: '"이 글자는 한글일까요?" 영어 알파벳이나 숫자를 담는 학생에게는 "이것도 글자이지만 한글은 아니에요"라고 짚는다.',
            task: '한글 글자를 고르고 나누어요.',
            items: [
              MP('한글 글자만 골라 담아 보세요.', '한글', ['ㄴ', 'ㅏ', 'B', '7'], ['ㄴ', 'ㅏ'], 0.1),
              MS('글자를 자음과 모음으로 나누어 보세요.', '한글 글자', ['자음', '모음'], ['ㄱ', 'ㅁ', 'ㅏ', 'ㅗ'], { '자음': ['ㄱ', 'ㅁ'], '모음': ['ㅏ', 'ㅗ'] }, 0.25),
              MP('한글로 쓴 낱말만 골라 보세요.', '한글 낱말', ['나무', '하늘', 'TREE', '123'], ['나무', '하늘'], 0.1),
            ],
          },
          {
            title: '활동 2. 세종대왕께 말풍선 보내기', tool: 'story',
            teacher: '"세종대왕은 왜 한글을 만들었을까요?" 글을 몰라 어려움을 겪는 백성을 위해 만들었다고 알려 준다. 말풍선을 채운 뒤 소리 내어 읽게 한다.',
            task: '말풍선의 빈칸에 알맞은 말을 넣어요.',
            items: [
              SF('세종대왕께 드리는 말을 채워 보세요.', ['한글을 만들어 주셔서', '숙제를 내 주셔서', '비가 와서'], [{ id: 'b1', who: '나', motif: 'star', label: '___ 고맙습니다.' }], { b1: '한글을 만들어 주셔서' }, 0.1),
              SF('세종대왕의 마음을 채워 보세요.', ['쉽게', '어렵게', '조금만'], [{ id: 'b1', who: '세종대왕', motif: 'sun', label: '백성이 글을 ___ 쓰면 좋겠구나.' }], { b1: '쉽게' }, 0.15),
              SF('한글날 날짜를 채워 보세요.', ['10월 9일', '10월 3일', '4월 21일'], [{ id: 'b1', who: '선생님', motif: 'leaf', label: '한글날은 ___이에요.' }], { b1: '10월 9일' }, 0.1),
            ],
          },
        ],
        wrap: {
          teacher: '"한글날에 나는 어떤 낱말을 예쁘게 써 볼까요?" 출구 1번에서 알파벳을 담은 학생에게는 한글 자음·모음 카드를 다시 보여 준다.',
          exit: [
            XC('mindmap', { mode: 'pick', topic: '한글 자음', basket: '한글 자음', cards: ['ㅅ', 'ㅇ', 'C', '5'] }, '한글 자음만 골라 담아 보세요.', { pick: ['ㅅ', 'ㅇ'] }, 0.15),
            CH('한글을 만든 사람은 누구인가요?', ['세종대왕', '단군'], 0, '한글은 세종대왕이 만들었어요.'),
            MOOD,
          ],
        },
        wsTitle: '10월 9일 한글날',
        ws: [
          { type: 'choice', prompt: '한글 글자에 ○ 하세요.', options: ['ㄱ', 'A'], answer: 'ㄱ' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '한글날은 ___월 ___일이에요.', answer: '10, 9' },
          { type: 'short', prompt: '내가 좋아하는 한글 낱말을 써 보세요.' },
          { type: 'draw', prompt: '세종대왕께 드리는 그림 편지를 그려 보세요.' },
        ],
        notes: '자주 보이는 어려움: ① 자음과 모음을 헷갈린다 → 모음은 혼자 소리 낼 수 있는 ㅏ·ㅗ 같은 글자라고 소리 내어 보게 한다. ② 한글날과 개천절을 섞는다 → 날짜와 인물을 짝지어 말하게 한다.',
      }),

      LESSON(10, {
        title: '바른 것을 말하는 용기 고르기',
        objective: '학생독립운동기념일(11월 3일)이 옛날 학생들이 용기 내어 바른 것을 말한 날임을 알고, 친구를 위해 바르게 말하는 방법을 고를 수 있다.',
        draw: 'school children in old-style uniforms walking together holding paper banners under autumn leaves',
        banner: '11월 3일 학생독립운동기념일', extra: [{ motif: 'leaf', x: 150, y: 206, color: 'peach', s: 0.7 }],
        intro: {
          teacher: '"오래전 학생들도 학교에 다녔어요. 그 학생들은 무엇을 했을까요?" 1929년 광주의 학생들이 우리 학생들이 부당하게 놀림받고 차별받는 것을 보고 "그건 옳지 않아요"라며 함께 목소리를 냈고, 11월 3일에 그 용기를 기억한다고 알린다. 시연 단추로 \'바르게 말하기\' 카드를 담는다.',
          student: '친구를 도와 바르게 말해 본 적이 있나요? 짝에게 말해 봐요.',
          demo: DM('mindmap', { mode: 'pick', topic: '용기', basket: '용기', cards: ['바르게 말하기', '모른 척하기'] }, { pick: ['바르게 말하기'] }),
        },
        acts: [
          {
            title: '활동 1. 친구가 놀림받을 때 길 고르기', tool: 'emotion',
            teacher: '"친구가 놀림받는 것을 보면 어떻게 할까요?" 결과를 함께 읽고, 혼자 어려우면 선생님께 알리는 것도 용기라고 말한다. 같이 놀리는 보기를 고른 학생에게는 놀림받는 친구의 마음을 떠올리게 한다.',
            task: '상황에서 어떻게 할지 고르고 결과를 봐요.',
            items: [
              EB('친구가 이름 때문에 놀림받아요. 어떻게 할까요?', '쉬는 시간, 한 친구가 다른 친구의 이름을 놀려요.', [
                { id: 'stop', text: '"그만해, 그건 아니야" 말해요', result: '놀림이 멈추고 친구가 힘을 내요.', mood: '뿌듯함' },
                { id: 'join', text: '같이 웃으며 놀려요', result: '친구가 더 속상해요.', mood: '슬픔', why: '함께 놀리면 친구가 더 아파요.' }], 'stop', 0.1),
              EB('혼자 말하기 무서워요. 어떻게 할까요?', '여러 명이 한 친구를 놀려요. 나 혼자 말하기는 무서워요.', [
                { id: 'tell', text: '선생님께 알려요', result: '선생님이 도와주셔서 놀림이 멈춰요.', mood: '편안함' },
                { id: 'ignore', text: '못 본 척해요', result: '놀림이 계속돼요.', mood: '걱정', why: '어려우면 어른께 알리는 것도 용기예요.' }], 'tell', 0.15),
              EB('줄을 설 때 한 친구만 늘 뒤로 밀려요. 어떻게 할까요?', '줄을 설 때마다 한 친구만 맨 뒤로 가래요.', [
                { id: 'fair', text: '"차례대로 서자" 말해요', result: '모두 같은 차례로 서요.', mood: '기쁨' },
                { id: 'quiet', text: '나만 앞에 서면 돼요', result: '그 친구는 계속 속상해요.', mood: '속상함', why: '모두 같은 차례로 서야 공평해요.' }], 'fair', 0.2),
            ],
          },
          {
            title: '활동 2. 학생들이 낸 용기 고르기', tool: 'mindmap',
            teacher: '"옛날 학생들은 무엇이 옳지 않다고 생각했을까요?" 차별의 뜻을 \'똑같이 대하지 않는 것\'으로 쉽게 풀어 준다. 싸움을 용기로 고른 학생에게는 "때리는 것은 용기가 아니에요. 바르게 말하는 것이 용기예요"라고 짚는다.',
            task: '용기 있는 행동을 고르고 나누어요.',
            items: [
              MP('용기 있는 행동만 골라 담아 보세요.', '용기', ['옳지 않은 일에 아니라고 말하기', '어려운 친구 편 들기', '친구 때리기', '혼자만 웃기'], ['옳지 않은 일에 아니라고 말하기', '어려운 친구 편 들기'], 0.15),
              MS('공평한 일과 공평하지 않은 일로 나누어 보세요.', '공평할까요', ['공평해요', '공평하지 않아요'], ['모두 차례대로 해요', '모두 같이 놀아요', '한 친구만 빼요', '한 친구만 혼나요'], { '공평해요': ['모두 차례대로 해요', '모두 같이 놀아요'], '공평하지 않아요': ['한 친구만 빼요', '한 친구만 혼나요'] }, 0.2),
              MP('11월 3일을 기억하는 방법을 골라 보세요.', '기억하는 방법', ['그날 학생 이야기 듣기', '친구를 존중하기', '친구 놀리기', '그날을 잊기'], ['그날 학생 이야기 듣기', '친구를 존중하기'], 0.15),
            ],
          },
        ],
        wrap: {
          teacher: '"11월 3일을 기억하며 나는 어떤 친구가 될까요?" 출구 1번에서 \'모른 척하기\'를 담은 학생에게는 어른께 알리는 방법을 다시 떠올리게 한다. 1년 동안 만난 기념일 열 개를 한 번 불러 보며 마친다.',
          exit: [
            XC('mindmap', { mode: 'pick', topic: '나의 용기', basket: '나의 용기', cards: ['"그만해" 말하기', '선생님께 알리기', '모른 척하기', '같이 놀리기'] }, '친구를 도울 때 낼 수 있는 용기를 골라 담아 보세요.', { pick: ['"그만해" 말하기', '선생님께 알리기'] }, 0.1),
            CH('학생독립운동기념일은 언제인가요?', ['11월 3일', '5월 5일'], 0, '학생독립운동기념일은 11월 3일이에요.'),
            MOOD,
          ],
        },
        wsTitle: '11월 3일 학생독립운동기념일',
        ws: [
          { type: 'choice', prompt: '용기 있는 행동에 ○ 하세요.', options: ['"그만해" 말하기', '같이 놀리기'], answer: '"그만해" 말하기' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '학생독립운동기념일은 ___월 ___일이에요.', answer: '11, 3' },
          { type: 'short', prompt: '친구가 놀림받을 때 할 말을 써 보세요.' },
          { type: 'draw', prompt: '서로 존중하는 우리 반을 그려 보세요.' },
        ],
        notes: '자주 보이는 어려움: ① 용기를 힘으로 이기는 것으로 여긴다 → 바르게 말하기·어른께 알리기를 용기로 짚는다. ② 놀림을 장난으로 넘긴다 → 받는 친구의 마음을 먼저 떠올리게 한다. 학생의 피해 경험을 말하게 하지 않고, 어려울 때 담임·상담 선생님께 알리는 길을 안내한다.',
      }),
    ],
  });

})();
