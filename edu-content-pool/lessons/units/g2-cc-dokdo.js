/* 2학년 창체 계기교육 — 독도교육(학년마다 10차시). 저학년: 방위·이웃 섬 울릉도·가는 길·주소·바위섬·괭이갈매기·등대를 지도와 장면 카드로 넓혀 본다.
 * 근거: 교육부 「독도교육 활성화 계획」(교과·창체 통합 연간 10시간 이상 권장, 독도교육주간). 초등 내용 체계: 자연환경·지리적 특성·역사·가치.
 * 사실(연도·거리·문서 이름)은 외교부 독도 누리집·동북아역사재단 독도 자료의 서술만 쓴다. 10월 25일 독도의 날은 법정기념일이 아니다(독도교육주간 연계 시기의 예).
 * 정치적 중립: 자료와 근거로 말하고, 특정 국가의 국민 전체를 비난하는 표현은 쓰지 않는다. 인물 이름은 가명이다(역사 인물 제외). */
(function () {
  const GRADE = 2;
  const ID = `g${GRADE}-cc-dokdo`;
  const UNIT = `g${GRADE}-창체-dokdo`;
  const TITLE = '독도교육 — 독도로 떠나는 여행';
  const two = (n) => String(n).padStart(2, '0');
  const base = (n) => ({
    id: `${ID}-${two(n)}`, schema: 'edu-lesson.v1', catalog: { unit: UNIT, lesson: n },
    grade: GRADE, subject: '창체', unitTitle: TITLE, standards: [], minutes: 40,
    formats: ['chromebook', 'projector', 'print'],
  });
  const PROMPT = (what) => `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`;
  const SCENE = (text, extra = []) => ({ viewBox: [480, 270], layers: [
    { motif: 'sun', x: 410, y: 58, s: 0.8 }, { motif: 'cloud', x: 110, y: 52 }, { motif: 'wave', y: 220 },
    { motif: 'mountain', x: 200, y: 196, color: 'mint', s: 0.7 }, { motif: 'mountain', x: 290, y: 200, color: 'sky', s: 0.6 },
    { motif: 'bird', x: 340, y: 96 }, ...extra,
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
  // 우리나라 칸 지도(한반도를 6×9 칸으로 줄인 그림 — 칸 자리는 위치 관계만 살린다)
  // 서울 [2,5], 독도 [5,5](서울과 같은 줄의 동쪽 바다), 울릉도 [4,4](독도의 북서쪽 — 독도는 울릉도의 남동쪽), 제주도 [1,8], 백두산 [2,0]
  const KOR_LAND = [[1, 0], [2, 0], [3, 0], [4, 0], [1, 1], [2, 1], [3, 1], [4, 1], [1, 2], [2, 2], [3, 2], [4, 2],
    [1, 3], [2, 3], [3, 3], [1, 4], [2, 4], [3, 4], [1, 5], [2, 5], [3, 5], [1, 6], [2, 6], [3, 6], [1, 7], [2, 7], [3, 7]];
  const KOR_SEA = [[0, 3], [0, 4], [0, 5], [0, 6], [0, 7], [0, 8], [4, 3], [4, 4], [4, 5], [4, 6], [4, 7], [4, 8],
    [5, 2], [5, 3], [5, 4], [5, 5], [5, 6], [5, 7], [5, 8], [1, 8], [2, 8], [3, 8]];
  const KOR = (places, more) => Object.assign({ grid: [6, 9], title: '우리나라 칸 지도', regions: [{ name: '우리나라 땅', cells: KOR_LAND, color: 'mint' }], regionNames: false, sea: KOR_SEA, places }, more || {});
  const P = {
    seoul: { name: '서울', icon: 'capital', at: [2, 5] }, busan: { name: '부산', icon: 'port', at: [3, 7] },
    jeju: { name: '제주도', icon: 'island', at: [1, 8] }, baekdu: { name: '백두산', icon: 'mountain', at: [2, 0] },
    ulleung: { name: '울릉도', icon: 'island', at: [4, 4] }, dokdo: { name: '독도', icon: 'island', at: [5, 5] },
    pohang: { name: '포항', icon: 'port', at: [3, 6] },
  };
  // 활동지 전용 작은 지도(6×4) — 9줄 지도는 인쇄 글자가 작다. 위치 관계(북·남·동쪽 바다)만 살린다
  const KORW_LAND = [[1, 0], [2, 0], [3, 0], [1, 1], [2, 1], [3, 1], [1, 2], [2, 2], [3, 2], [2, 3], [3, 3]];
  const KORW_SEA = [[0, 2], [0, 3], [4, 0], [4, 1], [4, 2], [4, 3], [5, 0], [5, 1], [5, 2], [5, 3], [1, 3]];
  const KORW = (places, more) => Object.assign({ grid: [6, 4], regions: [{ name: '우리나라 땅', cells: KORW_LAND, color: 'mint' }], regionNames: false, sea: KORW_SEA, places }, more || {});
  const PW = {
    seoul: { name: '서울', icon: 'capital', at: [2, 1] }, busan: { name: '부산', icon: 'port', at: [3, 3] },
    jeju: { name: '제주도', icon: 'island', at: [1, 3] }, ulleung: { name: '울릉도', icon: 'island', at: [4, 1] }, dokdo: { name: '독도', icon: 'island', at: [5, 2] },
  };
  // 독도 확대 칸 지도(서쪽 서도, 동쪽 동도 — 칸 자리는 위치 관계만 살린다)
  const DK_SEO = [[1, 1], [1, 2], [2, 2]];
  const DK_DONG = [[3, 1], [4, 1], [4, 2]];
  const DK_SEA = [];
  for (let r = 0; r < 4; r++) for (let c = 0; c < 6; c++) if (![...DK_SEO, ...DK_DONG].some(([x, y]) => x === c && y === r)) DK_SEA.push([c, r]);
  const DK = (places, more) => Object.assign({ grid: [6, 4], title: '독도 확대 지도', regions: [{ name: '서도', cells: DK_SEO, color: 'mint' }, { name: '동도', cells: DK_DONG, color: 'peach' }], sea: DK_SEA, places }, more || {});
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
      { id: 'main', title: '전개', minutes: 27, activities: o.acts.map((a, i) => ({ minutes: i === 0 ? 14 : 13, levels: a.tool === 'map' ? MAP_LV : a.tool === 'emotion' ? LVB : LV, ...a })) },
      { id: 'wrapup', title: '정리', minutes: 7, teacher: o.wrap.teacher, exitTicket: o.wrap.exit },
    ],
    worksheet: { title: o.wsTitle, items: o.ws }, differentiation: o.diff || DIFF, teacherNotes: o.notes,
  });
  const MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };
  const XC = (tool, options, prompt, target, d) => Object.assign({ type: 'tool', tool, options }, tool === 'map' || options.mode === 'branch' ? {} : { state: { at: {} } }, { prompt, target, difficulty: d });

  // 행정 구역을 칠한 우리나라 지도(경상북도에 울릉도·독도 칸을 함께 넣는다 — 독도 주소: 경상북도 울릉군 울릉읍 독도리)
  const KOR_GB = (places, more) => KOR(places, Object.assign({ regionNames: true, regions: [
    { name: '강원도', cells: [[3, 3], [3, 4], [4, 2], [4, 1]], color: 'sky' },
    { name: '경상북도', cells: [[3, 5], [3, 6], [4, 4], [5, 5]], color: 'peach' },
    { name: '경상남도', cells: [[3, 7], [2, 7]], color: 'buttercup' },
  ] }, more || {}));
  const DK_LIGHT = { name: '독도 등대', icon: 'lighthouse', at: [4, 1] };
  const DK_PORT = { name: '선착장', icon: 'port', at: [4, 2] };
  const DK_HOUSE = { name: '주민 숙소', icon: 'house', at: [1, 2] };

  PaperLessons.registerUnit({
    id: ID, schema: 'edu-unit.v1', catalogUnit: UNIT,
    grade: GRADE, subject: '창체', unitTitle: TITLE,
    flow: '2학년 독도교육은 "독도로 떠나는 여행"을 따라가며 1학년에서 만난 독도를 방위·이웃 섬·가는 길·주소처럼 한 걸음 넓혀 보는 10차시입니다. 1~3차시는 방위표로 독도가 서울의 동쪽에 있음을 읽고, 이웃 섬 울릉도와 함께 찾고, 항구에서 배를 타고 울릉도를 거쳐 독도에 가는 차례를 놓습니다. 4~7차시는 바위와 절벽, 봄에 둥지를 트는 괭이갈매기, 바다의 먹을거리, 밤바다를 밝히는 등대를 장면 카드로 살핍니다. 8~10차시는 경상북도 울릉군에 속한 독도의 주소를 지도에서 확인하고, 친구에게 독도를 소개하며, 지킴이 약속으로 정리합니다. 교육부 「독도교육 활성화 계획」의 연간 10시간 이상 권장에 맞춰 통합교과의 우리나라·바다 주제 수업이나 학교 독도교육주간과 묶어 운영할 수 있습니다(시수 인정은 학교 결정). 다른 나라를 탓하는 말 없이 독도를 바르게 알고 아끼는 마음에 집중합니다.',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '방위표를 돌려 서울에서 독도 쪽 찾기',
        objective: '방위표를 이용해 독도가 서울의 동쪽 바다에 있음을 말할 수 있다.',
        draw: 'a paper compass rose beside a simple map of Korea, with an arrow pointing from the capital to a tiny island in the east sea at sunrise',
        banner: '독도는 동쪽에', extra: [{ motif: 'star', x: 70, y: 110, color: 'buttercup', s: 0.6 }],
        intro: {
          teacher: '"아침에 해는 어느 쪽에서 떠오를까요?" 대답을 듣고(기다릴 반응: "동쪽이요") 시연 단추로 방위표가 서울에서 독도 쪽으로 \'동\'을 고르는 모습을 보여 준다. "오른쪽이 동쪽이에요"라고만 말하는 학생에게는 "지도에서는 북쪽 화살표를 먼저 보고 방위를 정해요"라고 덧붙인다.',
          student: '우리 교실에서 해가 들어오는 창문은 어느 쪽인지 짝과 함께 가리켜 봐요.',
          demo: { tool: 'map', options: KOR([P.seoul, P.dokdo], { mode: 'compass', points: 4 }), sequence: [{ dir: '동' }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 방위표로 방위 고르기', tool: 'map',
            teacher: '"출발하는 곳을 먼저 찾고, 도착하는 곳이 어느 쪽인지 봐요." 출발과 도착을 손가락으로 차례로 짚게 한다. 독도에서 서울로 가는 문항에서 \'동\'을 고르는 학생에게는 "이번에는 출발이 독도예요. 서울은 독도의 어느 쪽인가요?"라고 묻는다.',
            task: '방위표를 보고 출발하는 곳에서 도착하는 곳이 어느 쪽인지 골라요.',
            items: [
              MI('서울에서 독도는 어느 쪽인가요? 방위를 골라 보세요.', KOR([P.seoul, P.dokdo, P.jeju], { mode: 'compass', points: 4 }), { from: '서울', to: '독도' }, 0.15),
              MI('독도에서 서울은 어느 쪽인가요? 방위를 골라 보세요.', KOR([P.seoul, P.dokdo, P.baekdu], { mode: 'compass', points: 4 }), { from: '독도', to: '서울' }, 0.2,
                { conclude: '서울에서 보면 독도는 동쪽, 독도에서 보면 서울은 서쪽이에요.' }),
              MI('서울에서 동쪽으로 같은 줄을 따라가면 바다에 섬이 있어요. 그 섬에 핀을 꽂아 보세요.', KOR([P.seoul, P.dokdo, P.jeju, P.busan]), { place: '독도' }, 0.15),
            ],
          },
          {
            id: 'a2', title: '활동 2. 방위 낱말 익히기', tool: 'mindmap',
            teacher: '"해가 뜨는 쪽이 동쪽, 지는 쪽이 서쪽이에요." 몸을 북쪽으로 세우고 오른팔을 동쪽으로 뻗어 보게 한다. 남쪽과 북쪽을 헷갈리는 학생에게는 지도 위쪽이 북쪽이라고 짚는다.',
            task: '방위를 나타내는 말과 뜻을 잇고, 독도에 맞는 말을 골라요.',
            items: [
              MM('뜻에 맞는 방위를 이어 보세요.', '방위', [{ id: 'e', label: '해가 뜨는 쪽' }, { id: 'w', label: '해가 지는 쪽' }], ['동쪽', '서쪽', '남쪽'], { e: '동쪽', w: '서쪽' }, 0.1),
              MM('지도에서의 방위를 이어 보세요.', '지도 방위', [{ id: 'n', label: '지도 위쪽' }, { id: 's', label: '지도 아래쪽' }], ['북쪽', '남쪽', '동쪽'], { n: '북쪽', s: '남쪽' }, 0.15),
              MP('독도의 자리를 바르게 말한 카드만 골라 보세요.', '독도의 자리', ['서울의 동쪽에 있어요', '바다를 건너야 가요', '서울의 서쪽에 있어요', '기차로 갈 수 있어요'], ['서울의 동쪽에 있어요', '바다를 건너야 가요'], 0.2),
            ],
          },
        ],
        wrap: {
          teacher: '"독도는 서울의 어느 쪽에 있었지요?" 출구 1번에서 \'서\'를 고른 학생에게는 출발과 도착을 다시 짚게 한다.',
          exit: [
            XC('map', KOR([P.busan, P.dokdo, P.seoul], { mode: 'compass', points: 4 }), '서울에서 독도로 가려면 어느 쪽으로 가야 하는지 방위를 골라 보세요.', { from: '서울', to: '독도', dir: '동' }, 0.15),
            { type: 'choice', prompt: '해가 뜨는 쪽은 어느 방위인가요?', options: ['동쪽', '서쪽', '북쪽'], answer: 0, difficulty: 0.1, explain: '해는 동쪽에서 떠서 서쪽으로 져요.' },
            MOOD,
          ],
        },
        wsTitle: '독도는 동쪽에',
        ws: [
          { type: 'figure', wide: true, prompt: '지도에서 서울과 독도를 찾아 화살표로 잇고, 방위를 쓰세요.', tool: 'map', figures: [{ options: KORW([PW.seoul, PW.dokdo]), caption: '우리나라 칸 지도' }], answer: '동쪽' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '해가 뜨는 쪽은 ___쪽, 지는 쪽은 ___쪽이에요.', answer: '동, 서' },
          { type: 'choice', prompt: '독도는 서울의 어느 쪽에 있나요?', options: ['동쪽', '서쪽'], answer: '동쪽' },
          { type: 'short', prompt: '우리 교실에서 해가 들어오는 쪽을 쓰세요.' },
        ],
        notes: '자주 보이는 어려움: ① 오른쪽·왼쪽을 방위로 쓴다 → 지도 북쪽 화살표를 먼저 보게 한다. ② 출발과 도착을 바꿔 읽는다 → 출발 곳에 손가락을 먼저 두게 한다. ③ 동·서를 헷갈린다 → 해 뜨는 쪽 몸짓을 함께 한다.',
      }),

      LESSON(2, {
        title: '이웃 섬 울릉도와 독도 함께 찾기',
        objective: '독도가 울릉도와 가까운 이웃 섬임을 알고, 지도에서 두 섬을 찾을 수 있다.',
        draw: 'a larger green paper island with houses and a smaller rocky islet nearby across blue waves, with a seagull flying between them',
        banner: '이웃 섬 울릉도', extra: [{ motif: 'house', x: 90, y: 210, color: 'peach', s: 0.6 }],
        intro: {
          teacher: '"독도와 가장 가까운 큰 섬은 어디일까요?" 대답을 듣고(기다릴 반응: "울릉도요", "제주도요") 시연 단추로 울릉도에 핀이 꽂히는 모습을 보여 준다. 제주도라는 대답에는 "제주도는 남쪽 바다에 있어요. 독도 가까이 있는 섬을 찾아볼까요?"라고 되묻고, 맑은 날에는 울릉도에서 독도가 눈으로 보인다고 알려 준다.',
          student: '우리 집과 가까운 이웃집이나 이웃 동네를 떠올려 짝에게 말해 봐요.',
          demo: { tool: 'map', options: KOR([P.ulleung, P.dokdo]), sequence: [{ place: '울릉도' }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 지도에서 두 섬 찾기', tool: 'map',
            teacher: '"두 섬은 바다 위에서 서로 가까이 붙어 있어요." 울릉도를 먼저 찾고 그다음 독도를 찾게 한다. 이름이 안 보이는 단계에서 헷갈리는 학생에게는 "더 큰 섬이 울릉도, 더 바깥쪽 작은 섬이 독도예요"라고 말해 준다.',
            task: '우리나라 칸 지도에서 울릉도와 독도를 찾아요.',
            items: [
              MI('사람이 많이 사는 큰 섬, 울릉도에 핀을 꽂아 보세요.', KOR([P.ulleung, P.dokdo, P.jeju, P.seoul]), { place: '울릉도' }, 0.1),
              MQ('지도를 보고 독도와 가장 가까운 섬을 골라 보세요.', KOR([P.ulleung, P.dokdo, P.jeju, P.seoul]), '독도와 가장 가까운 섬은 어디인가요?', ['울릉도', '제주도', '서울'], 0, 0.15),
              MI('울릉도와 가까이 있는 작은 바위섬에 핀을 꽂아 보세요.', KOR([P.ulleung, P.dokdo, P.busan, P.baekdu]), { place: '독도' }, 0.15),
            ],
          },
          {
            id: 'a2', title: '활동 2. 울릉도와 독도 견주기', tool: 'mindmap',
            teacher: '"울릉도와 독도는 무엇이 다를까요?" 카드를 나누며 두 섬의 크기와 사는 사람 수를 견주게 한다. 학교를 독도에 넣는 학생에게는 "독도는 아주 작은 바위섬이라 학교가 없어요. 울릉도에는 학교가 있어요"라고 말해 준다.',
            task: '울릉도와 독도에 맞는 카드를 나누고, 두 섬 이야기를 이어요.',
            items: [
              MS('카드를 울릉도와 독도로 나누어 보세요.', '두 섬', ['울릉도', '독도'], ['학교가 있어요', '마을이 여럿이에요', '작은 바위섬이에요', '괭이갈매기가 많아요'], { '울릉도': ['학교가 있어요', '마을이 여럿이에요'], '독도': ['작은 바위섬이에요', '괭이갈매기가 많아요'] }, 0.2),
              MM('물음에 맞는 섬을 이어 보세요.', '어느 섬?', [{ id: 'q1', label: '더 큰 섬' }, { id: 'q2', label: '더 작은 섬' }], ['울릉도', '독도', '제주도'], { q1: '울릉도', q2: '독도' }, 0.15),
              MP('두 섬에 대해 맞는 말만 골라 보세요.', '이웃 섬', ['맑은 날 서로 보여요', '둘 다 동쪽 바다에 있어요', '다리로 이어져 있어요', '둘 다 남쪽 바다에 있어요'], ['맑은 날 서로 보여요', '둘 다 동쪽 바다에 있어요'], 0.25),
            ],
          },
        ],
        wrap: {
          teacher: '"울릉도와 독도가 이웃 섬인 까닭을 말해 볼까요?" 출구 1번에서 제주도에 꽂은 학생에게는 동쪽 바다를 다시 가리키게 한다.',
          exit: [
            XC('map', KOR([P.ulleung, P.dokdo, P.jeju, P.busan]), '독도의 이웃 섬 울릉도를 찾아 핀을 꽂아 보세요.', { place: '울릉도' }, 0.1),
            { type: 'choice', prompt: '맑은 날 울릉도에서 볼 수 있는 섬은 어디인가요?', options: ['독도', '제주도'], answer: 0, difficulty: 0.15, explain: '맑은 날에는 울릉도에서 독도가 눈으로 보여요.' },
            MOOD,
          ],
        },
        wsTitle: '이웃 섬 울릉도',
        ws: [
          { type: 'figure', wide: true, prompt: '지도에서 울릉도에 ○, 독도에 △ 하세요.', tool: 'map', figures: [{ options: KORW([PW.ulleung, PW.dokdo, PW.seoul]), caption: '우리나라 칸 지도' }], answer: '울릉도 ○, 독도 △' },
          { type: 'choice', prompt: '더 큰 섬에 ○ 하세요.', options: ['울릉도', '독도'], answer: '울릉도' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '맑은 날에는 ___에서 독도가 보여요.', answer: '울릉도' },
          { type: 'short', prompt: '울릉도와 독도가 다른 점을 한 가지 쓰세요.' },
        ],
        notes: '자주 보이는 어려움: ① 울릉도와 독도를 같은 섬으로 여긴다 → 크기와 사는 사람으로 견주게 한다. ② 제주도를 독도의 이웃으로 고른다 → 동쪽 바다·남쪽 바다를 손으로 가리키게 한다. ③ 두 섬이 다리로 이어졌다고 생각한다 → 배로 오간다고 알려 준다.',
      }),

      LESSON(3, {
        title: '항구에서 독도까지 여행 차례 놓기',
        objective: '항구에서 배를 타고 울릉도를 거쳐 독도에 가는 차례를 말할 수 있다.',
        draw: 'a white paper ferry sailing from a harbor past a green island toward two rocky islets, with children in life jackets waving on deck',
        banner: '배 타고 독도로', extra: [{ motif: 'cloud', x: 330, y: 60 }],
        intro: {
          teacher: '"독도에 가려면 비행기를 탈까요, 배를 탈까요?" 대답을 듣고(기다릴 반응: "배요") 시연 단추로 여행 장면 카드가 차례로 놓이는 모습을 보여 준다. "버스로 가요"라는 대답에는 "바다 한가운데 섬까지 길이 있을까요?"라고 되묻는다. 날씨가 나쁘면 배가 독도에 닿지 못하는 날도 있다고 알려 준다.',
          student: '배를 타 본 적이 있나요? 배에서 무엇을 보았는지 짝에게 말해 봐요.',
          demo: { tool: 'story', options: { cards: [{ id: 'port', text: '항구에서 배를 타요', motif: 'house' }, { id: 'arrive', text: '독도에 닿아요', motif: 'mountain' }], slots: ['처음', '끝'], shuffle: false }, sequence: [{ order: ['port', 'arrive'] }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 독도 여행 장면 차례 놓기', tool: 'story',
            teacher: '"독도에 바로 갈까요, 어느 섬을 먼저 들를까요?" 울릉도를 빼고 놓는 학생에게는 지난 시간 이웃 섬을 떠올리게 한다. 차례를 놓은 뒤 처음부터 끝까지 소리 내어 이야기하듯 읽게 한다.',
            task: '독도까지 가는 여행 장면을 차례대로 놓아요.',
            items: [
              SO('독도까지 가는 차례대로 장면을 놓아 보세요.', '독도 가는 길', ['처음', '가운데', '끝'], [{ id: 'ul', text: '울릉도에 내려요', motif: 'house' }, { id: 'port', text: '육지 항구에서 배를 타요', motif: 'wave' }, { id: 'dok', text: '배를 갈아타고 독도로', motif: 'mountain' }], ['port', 'ul', 'dok'], 0.2),
              SO('배를 탈 때 하는 일을 차례대로 놓아 보세요.', '배를 타요', ['처음', '가운데', '끝'], [{ id: 'seat', text: '자리에 앉아요', motif: 'star' }, { id: 'ticket', text: '표를 내고 줄 서요', motif: 'sun' }, { id: 'off', text: '차례대로 내려요', motif: 'leaf' }], ['ticket', 'seat', 'off'], 0.15),
              SO('독도에 닿은 뒤의 일을 차례대로 놓아 보세요.', '독도에 닿으면', 3, [{ id: 'look', text: '갈매기와 바위를 봐요', motif: 'bird' }, { id: 'land', text: '선착장에 내려요', motif: 'wave' }, { id: 'back', text: '쓰레기 챙겨 배에 타요', motif: 'leaf' }], ['land', 'look', 'back'], 0.2),
            ],
          },
          {
            id: 'a2', title: '활동 2. 배 여행 약속 고르기', tool: 'mindmap',
            teacher: '"배 위에서 뛰면 어떤 일이 생길 수 있을까요?" 위험한 행동을 고르는 학생에게는 배가 흔들린다는 점을 짚는다. 구명조끼를 입는 까닭을 한 문장으로 말하게 한다.',
            task: '배를 타고 섬에 갈 때의 약속을 골라요.',
            items: [
              MS('배 위에서 지킬 약속과 하면 안 되는 일로 나누어 보세요.', '배 위 약속', ['지켜요', '안 돼요'], ['구명조끼 입기', '어른 곁에 있기', '갑판에서 뛰기', '난간에 오르기'], { '지켜요': ['구명조끼 입기', '어른 곁에 있기'], '안 돼요': ['갑판에서 뛰기', '난간에 오르기'] }, 0.15),
              MP('독도 여행에 챙기면 좋은 것만 골라 보세요.', '여행 준비', ['모자', '쓰레기 봉투', '물놀이 튜브', '낚싯대'], ['모자', '쓰레기 봉투'], 0.2),
              MM('상황에 맞는 행동을 이어 보세요.', '이럴 땐', [{ id: 's1', label: '배가 많이 흔들려요' }, { id: 's2', label: '내릴 차례가 됐어요' }], ['자리에 앉아 손잡이 잡기', '줄을 서서 내리기', '창문 열고 몸 내밀기'], { s1: '자리에 앉아 손잡이 잡기', s2: '줄을 서서 내리기' }, 0.2),
            ],
          },
        ],
        wrap: {
          teacher: '"독도에 가는 길을 처음부터 말해 볼까요?" 출구 1번에서 울릉도를 마지막에 둔 학생에게는 울릉도를 거쳐 독도에 간다는 점을 다시 짚는다.',
          exit: [
            XC('story', { cards: [{ id: 'b', text: '울릉도에서 하룻밤', motif: 'moon' }, { id: 'a', text: '항구에서 출발', motif: 'wave' }, { id: 'c', text: '독도 선착장 도착', motif: 'mountain' }], slots: ['처음', '가운데', '끝'] }, '여행 장면을 차례대로 놓아 보세요.', { order: ['a', 'b', 'c'] }, 0.2),
            { type: 'choice', prompt: '독도에 갈 때 타는 것은 무엇인가요?', options: ['배', '기차', '버스'], answer: 0, difficulty: 0.1, explain: '독도는 바다 위 섬이라 배를 타고 가요.' },
            MOOD,
          ],
        },
        wsTitle: '배 타고 독도로',
        ws: [
          { type: 'table', prompt: '여행 차례에 맞게 번호를 쓰세요.', columns: ['장면', '차례'], cells: [['울릉도에 내려요', ''], ['육지 항구에서 배를 타요', ''], ['독도에 닿아요', '']], answer: '2, 1, 3' },
          { type: 'check', prompt: '배 위에서 지킬 약속에 ✔ 하세요.', options: ['구명조끼 입기', '난간에 오르기', '어른 곁에 있기'], answer: '구명조끼 입기, 어른 곁에 있기' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '독도에 가려면 ___를 타요.', answer: '배' },
          { type: 'draw', prompt: '배를 타고 독도에 가는 모습을 그려 보세요.' },
        ],
        notes: '자주 보이는 어려움: ① 울릉도를 거친다는 것을 놓친다 → 지도에서 길을 손가락으로 따라가게 한다. ② 배에서의 안전을 가볍게 여긴다 → 흔들리는 배를 몸으로 흉내 내며 까닭을 말하게 한다. ③ 언제든 독도에 갈 수 있다고 여긴다 → 날씨가 좋아야 배가 닿는다고 알려 준다.',
      }),

      LESSON(4, {
        title: '바위와 절벽이 많은 독도 살펴보기',
        objective: '독도가 바위와 절벽이 많은 섬이라는 특징을 말할 수 있다.',
        draw: 'steep grey paper cliffs and jagged rocks rising from foamy waves, with a small cave at the bottom and seagulls on ledges',
        banner: '바위섬 독도', extra: [{ motif: 'bird', x: 120, y: 120 }],
        intro: {
          teacher: '"독도 사진을 보면 무엇이 가장 많이 보이나요?" 대답을 듣고(기다릴 반응: "바위요", "바다요") 시연 단추로 바위 카드가 \'많아요\' 칸에 놓이는 모습을 보여 준다. "나무가 많아요"라는 대답에는 "사진을 다시 보세요. 키 큰 나무가 보이나요?"라고 되묻는다.',
          student: '바닷가에서 본 바위를 떠올려 어떤 모양이었는지 짝에게 말해 봐요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '독도에는', slots: ['많아요', '적어요'], cards: ['바위', '큰 나무'], shuffle: false }, sequence: [{ sort: { '많아요': ['바위'], '적어요': ['큰 나무'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 독도에 많은 것과 적은 것 나누기', tool: 'mindmap',
            teacher: '"바위로 된 섬에는 흙이 많을까요, 적을까요?" 흙이 적어서 큰 나무가 자라기 어렵다는 것을 함께 짚는다. 모래사장을 \'많아요\'에 넣는 학생에게는 "독도 바닷가는 모래보다 바위가 많아요"라고 말해 준다.',
            task: '독도에 많은 것과 적은 것을 나누어요.',
            items: [
              MS('독도에 많은 것과 적은 것으로 나누어 보세요.', '독도에는', ['많아요', '적어요'], ['바위', '절벽', '큰 나무', '모래사장'], { '많아요': ['바위', '절벽'], '적어요': ['큰 나무', '모래사장'] }, 0.15),
              MP('독도의 생김새에 맞는 말만 골라 보세요.', '독도 생김새', ['가파른 절벽이 있어요', '흙이 적어요', '논과 밭이 넓어요', '큰 숲이 있어요'], ['가파른 절벽이 있어요', '흙이 적어요'], 0.2),
              MS('바위섬과 흙이 많은 섬에 맞는 말로 나누어 보세요.', '두 가지 섬', ['바위섬', '흙이 많은 섬'], ['큰 나무가 드물어요', '바위틈에 풀이 자라요', '나무숲이 우거져요', '밭을 일궈요'], { '바위섬': ['큰 나무가 드물어요', '바위틈에 풀이 자라요'], '흙이 많은 섬': ['나무숲이 우거져요', '밭을 일궈요'] }, 0.25),
            ],
          },
          {
            id: 'a2', title: '활동 2. 바위섬 낱말과 뜻 잇기', tool: 'mindmap',
            teacher: '"절벽은 깎아지른 듯 가파른 바위벽이에요." 낱말을 읽고 손으로 모양을 흉내 내게 한다. 동굴을 \'바위 위 집\'으로 잇는 학생에게는 "파도가 바위를 오래 때려 생긴 굴이에요"라고 알려 준다.',
            task: '바위섬과 관련된 낱말과 뜻을 이어요.',
            items: [
              MM('낱말과 뜻을 이어 보세요.', '바위섬 낱말', [{ id: 'c', label: '절벽' }, { id: 'r', label: '바위섬' }], ['가파른 바위벽', '바위로 된 섬', '넓은 모래밭'], { c: '가파른 바위벽', r: '바위로 된 섬' }, 0.15),
              MM('바위를 깎는 것과 그 결과를 이어 보세요.', '바위가 깎여요', [{ id: 'w', label: '파도가 바위를 때려요' }, { id: 'b', label: '바람이 오래 불어요' }], ['바위 아래에 굴이 생겨요', '바위가 조금씩 닳아요', '바위가 자라요'], { w: '바위 아래에 굴이 생겨요', b: '바위가 조금씩 닳아요' }, 0.25),
              MP('바위섬에서 조심할 일만 골라 보세요.', '바위섬 안전', ['미끄러운 바위 피하기', '절벽 끝에 가지 않기', '바위 위에서 뛰기', '혼자 물가에 가기'], ['미끄러운 바위 피하기', '절벽 끝에 가지 않기'], 0.2),
            ],
          },
        ],
        wrap: {
          teacher: '"독도를 한 낱말로 말하면 어떤 섬일까요?" 출구 1번에서 큰 나무를 \'많아요\'에 넣은 학생에게는 흙이 적다는 점을 다시 짚는다.',
          exit: [
            XC('mindmap', { mode: 'pick', topic: '독도 모습', basket: '독도 모습', cards: ['바위 절벽', '파도 소리', '높은 빌딩', '넓은 논'] }, '독도에서 보고 들을 수 있는 것만 골라 보세요.', { pick: ['바위 절벽', '파도 소리'] }, 0.1),
            { type: 'choice', prompt: '독도는 어떤 섬인가요?', options: ['바위와 절벽이 많은 섬', '논과 밭이 넓은 섬'], answer: 0, difficulty: 0.1, explain: '독도는 흙이 적고 바위와 절벽이 많은 섬이에요.' },
            MOOD,
          ],
        },
        wsTitle: '바위섬 독도',
        ws: [
          { type: 'table', prompt: '독도에 많으면 ○, 적으면 △ 하세요.', columns: ['것', '○ / △'], cells: [['바위', ''], ['큰 나무', ''], ['절벽', '']], answer: '○, △, ○' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '가파른 바위벽을 ___이라고 해요.', answer: '절벽' },
          { type: 'choice', prompt: '바위섬에서 알맞은 행동에 ○ 하세요.', options: ['절벽 끝에 가지 않아요', '바위 위에서 뛰어요'], answer: '절벽 끝에 가지 않아요' },
          { type: 'draw', prompt: '파도가 치는 독도의 바위 절벽을 그려 보세요.' },
        ],
        notes: '자주 보이는 어려움: ① 섬에는 숲이 많다고 생각한다 → 흙이 적은 바위섬을 사진으로 보여 준다. ② 절벽·동굴 낱말이 낯설다 → 손 모양·몸짓으로 익힌다. ③ 바위 위를 놀이터로 여긴다 → 미끄러움과 절벽의 위험을 말하게 한다.',
      }),

      LESSON(5, {
        title: '봄날 괭이갈매기 둥지 이야기 차례 놓기',
        objective: '봄에 독도에서 둥지를 틀고 새끼를 기르는 괭이갈매기의 모습을 차례대로 말할 수 있다.',
        draw: 'paper seagulls nesting on rocky ledges in spring, with eggs in a nest and a fluffy grey chick beside its parent',
        banner: '괭이갈매기의 봄', extra: [{ motif: 'flower', x: 400, y: 205, color: 'buttercup' }],
        intro: {
          teacher: '"봄이 되면 독도 바위 위가 괭이갈매기로 하얗게 덮인대요. 왜 그럴까요?" 대답을 듣고(기다릴 반응: "알 낳으려고요") 시연 단추로 둥지 장면이 차례로 놓이는 모습을 보여 준다. "새는 나무에만 둥지를 지어요"라는 대답에는 "나무가 적은 바위섬에서는 바위 위에 둥지를 지어요"라고 알려 준다.',
          student: '새가 둥지를 짓는 모습을 본 적이 있나요? 짝에게 말해 봐요.',
          demo: { tool: 'story', options: { cards: [{ id: 'egg', text: '알을 품어요', motif: 'sun' }, { id: 'chick', text: '새끼가 깨어나요', motif: 'star' }], slots: ['먼저', '나중'], shuffle: false }, sequence: [{ order: ['egg', 'chick'] }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 괭이갈매기의 봄 장면 차례 놓기', tool: 'story',
            teacher: '"알이 먼저일까요, 둥지가 먼저일까요?" 장면을 놓을 때마다 앞뒤 장면과 이어지는지 이야기로 읽게 한다. 새끼가 나는 장면을 처음에 두는 학생에게는 "갓 깨어난 새끼도 바로 날 수 있을까요?"라고 묻는다.',
            task: '괭이갈매기가 봄에 새끼를 기르는 장면을 차례대로 놓아요.',
            items: [
              SO('둥지를 짓고 알을 낳는 차례대로 놓아 보세요.', '괭이갈매기의 봄', ['처음', '가운데', '끝'], [{ id: 'egg', text: '둥지에 알을 낳아요', motif: 'sun' }, { id: 'come', text: '봄에 독도로 날아와요', motif: 'bird' }, { id: 'nest', text: '바위 위에 둥지를 지어요', motif: 'leaf' }], ['come', 'nest', 'egg'], 0.15),
              SO('알에서 새끼가 자라는 차례대로 놓아 보세요.', '새끼가 자라요', 3, [{ id: 'fly', text: '날기 연습을 해요', motif: 'cloud' }, { id: 'hatch', text: '알에서 깨어나요', motif: 'star' }, { id: 'feed', text: '어미가 먹이를 줘요', motif: 'wave' }], ['hatch', 'feed', 'fly'], 0.2),
              SO('괭이갈매기의 봄 이야기를 처음부터 끝까지 놓아 보세요.', '봄 이야기', 4, [{ id: 'b', text: '알을 품어요', motif: 'sun' }, { id: 'd', text: '새끼가 날아요', motif: 'cloud' }, { id: 'a', text: '둥지를 지어요', motif: 'leaf' }, { id: 'c', text: '새끼가 깨어나요', motif: 'star' }], ['a', 'b', 'c', 'd'], 0.25),
            ],
          },
          {
            id: 'a2', title: '활동 2. 둥지를 지키는 행동 고르기', tool: 'emotion',
            teacher: '"어미 새가 놀라서 둥지를 떠나면 알은 어떻게 될까요?" 결과 칸을 읽고 까닭을 말하게 한다. 사진을 가까이서 찍고 싶어 하는 학생에게는 "멀리서도 찍을 수 있어요"라고 말해 준다.',
            task: '괭이갈매기 둥지 곁에서 어떻게 할지 고르고 결과를 봐요.',
            items: [
              EB('둥지 가까이에서 사진을 찍고 싶어요. 어떻게 할까요?', '바위 위 둥지에 어미 새가 앉아 있어요.', [
                { id: 'close', text: '둥지 바로 앞까지 가요', result: '어미 새가 놀라 날아올라요.', mood: '걱정', why: '가까이 가면 어미 새가 둥지를 떠나요.' },
                { id: 'far', text: '멀리서 조용히 찍어요', result: '어미 새가 계속 알을 품어요.', mood: '편안함' }], 'far', 0.1),
              EB('어미 새가 크게 울며 날아다녀요. 어떻게 할까요?', '갈매기가 내 머리 위에서 크게 울어요.', [
                { id: 'wave', text: '손을 휘저어 쫓아요', result: '새가 더 놀라 사납게 울어요.', mood: '무서움', why: '근처에 둥지가 있다는 뜻이에요.' },
                { id: 'leave', text: '천천히 그 자리를 떠나요', result: '새가 둥지로 돌아가요.', mood: '편안함' }], 'leave', 0.2),
              EB('길에 떨어진 새끼 새를 보았어요. 어떻게 할까요?', '바위 옆에 털이 복슬복슬한 새끼가 있어요.', [
                { id: 'hold', text: '안아서 데려가요', result: '어미가 새끼를 찾지 못해요.', mood: '슬픔', why: '어미가 가까이서 지켜보고 있어요.' },
                { id: 'tell', text: '만지지 않고 어른께 알려요', result: '어미가 새끼를 돌봐요.', mood: '고마움' }], 'tell', 0.2),
            ],
          },
        ],
        wrap: {
          teacher: '"괭이갈매기는 봄에 독도에서 무엇을 하나요?" 출구 1번에서 새끼가 나는 장면을 앞에 둔 학생에게는 알→새끼→날기 차례를 다시 짚는다.',
          exit: [
            XC('story', { cards: [{ id: 'y', text: '새끼에게 먹이를 줘요', motif: 'wave' }, { id: 'x', text: '알을 따뜻하게 품어요', motif: 'sun' }, { id: 'z', text: '새끼가 하늘을 날아요', motif: 'cloud' }], slots: ['처음', '가운데', '끝'] }, '괭이갈매기 장면을 차례대로 놓아 보세요.', { order: ['x', 'y', 'z'] }, 0.15),
            { type: 'choice', prompt: '괭이갈매기 둥지를 보았을 때 알맞은 행동은 무엇인가요?', options: ['멀리서 조용히 봐요', '알을 만져 봐요'], answer: 0, difficulty: 0.1, explain: '어미 새가 놀라지 않아야 알을 계속 품어요.' },
            MOOD,
          ],
        },
        wsTitle: '괭이갈매기의 봄',
        ws: [
          { type: 'table', prompt: '차례에 맞게 번호를 쓰세요.', columns: ['장면', '차례'], cells: [['알을 품어요', ''], ['둥지를 지어요', ''], ['새끼가 깨어나요', '']], answer: '2, 1, 3' },
          { type: 'choice', prompt: '괭이갈매기가 둥지를 짓는 곳에 ○ 하세요.', options: ['바위 위', '물속'], answer: '바위 위' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '괭이갈매기는 ___에 독도에서 새끼를 길러요.', answer: '봄' },
          { type: 'draw', prompt: '둥지 속 괭이갈매기 가족을 그려 보세요.' },
        ],
        notes: '자주 보이는 어려움: ① 새는 나무에만 둥지를 짓는다고 생각한다 → 나무가 적은 바위섬을 떠올리게 한다. ② 떨어진 새끼를 데려가야 한다고 여긴다 → 어미가 근처에 있다고 알려 준다. ③ 차례에서 알과 둥지를 바꾼다 → "알을 어디에 낳을까?"를 묻는다.',
      }),

      LESSON(6, {
        title: '독도 바다에서 나는 먹을거리 고르기',
        objective: '독도 바다에서 오징어·새우·전복·미역 같은 먹을거리가 난다는 것을 알고, 바다 동물과 바다 풀로 나눌 수 있다.',
        draw: 'a paper fishing boat on blue waves with squid, shrimp, abalone and seaweed shown in layers beneath the water',
        banner: '독도 바다의 먹을거리', extra: [{ motif: 'leaf', x: 90, y: 232, color: 'mint' }],
        intro: {
          teacher: '"독도 바다에서는 어떤 먹을거리가 날까요?" 대답을 듣고(기다릴 반응: "오징어요", "새우요") 시연 단추로 오징어 카드가 바구니에 담기는 모습을 보여 준다. "사과요"처럼 땅의 먹을거리를 말하면 "사과는 어디에서 자라나요?"라고 되묻는다.',
          student: '바다에서 나는 음식 가운데 먹어 본 것을 짝에게 말해 봐요.',
          demo: { tool: 'mindmap', options: { mode: 'pick', topic: '바다 먹을거리', basket: '바다 먹을거리', cards: ['오징어', '감자'], shuffle: false }, sequence: [{ pick: ['오징어'] }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 독도 바다의 먹을거리 고르기', tool: 'mindmap',
            teacher: '"이 먹을거리는 바다에서 날까요, 땅에서 날까요?" 독도새우를 처음 듣는 학생에게는 독도 둘레 깊은 바다에서 잡히는 새우라고 알려 준다. 미역을 바다 동물에 넣으면 "미역은 움직이나요?"라고 묻는다.',
            task: '독도 바다에서 나는 먹을거리를 고르고 나누어요.',
            items: [
              MP('독도 바다에서 나는 먹을거리만 골라 담아 보세요.', '독도 바다', ['오징어', '독도새우', '고구마', '배추'], ['오징어', '독도새우'], 0.1),
              MS('바다 동물과 바다 풀로 나누어 보세요.', '바다 먹을거리', ['바다 동물', '바다 풀'], ['전복', '오징어', '미역', '다시마'], { '바다 동물': ['전복', '오징어'], '바다 풀': ['미역', '다시마'] }, 0.2),
              MS('바다에서 나는 것과 땅에서 나는 것으로 나누어 보세요.', '어디서 날까', ['바다', '땅'], ['소라', '새우', '쌀', '사과'], { '바다': ['소라', '새우'], '땅': ['쌀', '사과'] }, 0.1),
            ],
          },
          {
            id: 'a2', title: '활동 2. 바다가 깨끗해야 하는 까닭 잇기', tool: 'mindmap',
            teacher: '"바다가 더러워지면 오징어와 새우는 어떻게 될까요?" 원인과 결과를 이어 말하게 한다. 바다 쓰레기는 바다에서만 생긴다고 생각하는 학생에게는 강을 따라 바다로 간다고 알려 준다.',
            task: '바다에서 일어나는 일과 그 결과를 이어요.',
            items: [
              MM('일어난 일과 결과를 이어 보세요.', '바다에 생기는 일', [{ id: 'c', label: '바다가 깨끗해요' }, { id: 'd', label: '바다에 쓰레기가 많아요' }], ['먹을거리가 잘 자라요', '바다 생물이 아파요', '바다가 넓어져요'], { c: '먹을거리가 잘 자라요', d: '바다 생물이 아파요' }, 0.2),
              MP('바다 먹을거리를 지키는 행동만 골라 보세요.', '바다 지키기', ['쓰레기 분리배출', '음식 남기지 않기', '강에 쓰레기 버리기', '세제 많이 쓰기'], ['쓰레기 분리배출', '음식 남기지 않기'], 0.2),
              MM('먹을거리와 사는 곳을 이어 보세요.', '어디에 살까', [{ id: 'a', label: '전복' }, { id: 'b', label: '오징어' }], ['바위에 붙어 살아요', '물속을 헤엄쳐요', '땅속에 살아요'], { a: '바위에 붙어 살아요', b: '물속을 헤엄쳐요' }, 0.2),
            ],
          },
        ],
        wrap: {
          teacher: '"독도 바다에서 나는 먹을거리를 두 가지 말해 볼까요?" 출구 1번에서 땅의 먹을거리를 담은 학생에게는 바다에서 나는지 다시 묻는다.',
          exit: [
            XC('mindmap', { mode: 'sort', topic: '바다 친구', slots: ['헤엄쳐요', '바위에 붙어요'], cards: ['오징어', '새우', '전복', '미역'] }, '바다 먹을거리를 헤엄치는 것과 바위에 붙어 사는 것으로 나누어 보세요.', { sort: { '헤엄쳐요': ['오징어', '새우'], '바위에 붙어요': ['전복', '미역'] } }, 0.2),
            { type: 'choice', prompt: '독도 바다에서 나는 먹을거리는 무엇인가요?', options: ['오징어', '감자', '사과'], answer: 0, difficulty: 0.1, explain: '오징어는 독도 바다에서 잡히는 먹을거리예요.' },
            MOOD,
          ],
        },
        wsTitle: '독도 바다의 먹을거리',
        ws: [
          { type: 'table', prompt: '바다 동물이면 ○, 바다 풀이면 △ 하세요.', columns: ['먹을거리', '○ / △'], cells: [['오징어', ''], ['미역', ''], ['전복', '']], answer: '○, △, ○' },
          { type: 'choice', prompt: '독도 바다에서 나는 것에 ○ 하세요.', options: ['독도새우', '고구마'], answer: '독도새우' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '바다가 ___해야 먹을거리가 잘 자라요.', answer: '깨끗' },
          { type: 'draw', prompt: '독도 바다의 먹을거리를 그려 보세요.' },
        ],
        notes: '자주 보이는 어려움: ① 미역을 생물로 여기지 않는다 → 바다에서 자라는 풀이라고 알려 준다. ② 독도새우를 처음 듣는다 → 독도 둘레 바다에서 잡히는 새우라고 이름 뜻을 풀어 준다. ③ 바다 쓰레기를 남의 일로 여긴다 → 강과 바다가 이어져 있다고 말해 준다.',
      }),

      LESSON(7, {
        title: '독도 등대가 배를 돕는 차례 알기',
        objective: '독도 등대가 밤에 불빛으로 배의 길을 알려 준다는 것을 차례대로 말할 수 있다.',
        draw: 'a white paper lighthouse on a rocky islet shining a warm beam across a dark blue sea toward a small boat under a crescent moon',
        banner: '밤바다를 밝혀요', extra: [{ motif: 'moon', x: 90, y: 70 }, { motif: 'star', x: 160, y: 50, s: 0.5 }],
        intro: {
          teacher: '"깜깜한 밤바다에서 배는 어떻게 길을 찾을까요?" 대답을 듣고(기다릴 반응: "불빛을 봐요") 시연 단추로 등대 장면이 차례로 놓이는 모습을 보여 준다. "배가 멈춰서 기다려요"라는 대답에는 "바다 한가운데서 밤새 기다리기는 어려워요. 무엇이 도와줄까요?"라고 되묻는다.',
          student: '밤에 불빛을 보고 길을 찾은 적이 있나요? 짝에게 말해 봐요.',
          demo: { tool: 'story', options: { cards: [{ id: 'on', text: '등대 불이 켜져요', motif: 'star' }, { id: 'safe', text: '배가 안전하게 가요', motif: 'wave' }], slots: ['먼저', '나중'], shuffle: false }, sequence: [{ order: ['on', 'safe'] }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 등대 이야기 차례 놓기', tool: 'story',
            teacher: '"해가 지면 등대는 무엇을 할까요?" 장면을 놓은 뒤 처음부터 이야기로 읽게 한다. 배가 바위를 피하는 장면을 불이 켜지기 전에 두는 학생에게는 "불빛이 없으면 배가 바위를 볼 수 있을까요?"라고 묻는다.',
            task: '등대가 밤에 배를 돕는 장면을 차례대로 놓아요.',
            items: [
              SO('밤바다 장면을 차례대로 놓아 보세요.', '등대 이야기', ['처음', '가운데', '끝'], [{ id: 'light', text: '등대 불이 반짝여요', motif: 'star' }, { id: 'dark', text: '해가 지고 깜깜해요', motif: 'moon' }, { id: 'boat', text: '배가 바위를 피해 가요', motif: 'wave' }], ['dark', 'light', 'boat'], 0.15),
              SO('아침이 오기까지 차례대로 놓아 보세요.', '등대의 밤', 3, [{ id: 'sun', text: '아침 해가 떠요', motif: 'sun' }, { id: 'all', text: '밤새 불빛을 비춰요', motif: 'star' }, { id: 'on', text: '저녁에 불을 켜요', motif: 'moon' }], ['on', 'all', 'sun'], 0.2),
              SO('배가 항구에 닿기까지 차례대로 놓아 보세요.', '배의 밤길', 3, [{ id: 'port', text: '항구에 무사히 닿아요', motif: 'house' }, { id: 'see', text: '멀리 등대 불빛을 봐요', motif: 'star' }, { id: 'turn', text: '불빛 보고 방향을 잡아요', motif: 'wave' }], ['see', 'turn', 'port'], 0.2),
            ],
          },
          {
            id: 'a2', title: '활동 2. 확대 지도에서 등대 찾기', tool: 'map',
            teacher: '"독도 등대는 동도에 있어요." 범례에서 등대 기호를 먼저 찾고 지도에서 같은 기호를 찾게 한다. 서도에 꽂는 학생에게는 해 뜨는 쪽 섬을 다시 가리키게 한다.',
            task: '독도 확대 지도에서 등대와 섬을 찾아 핀을 꽂아요.',
            items: [
              MI('독도 확대 지도에서 등대에 핀을 꽂아 보세요.', DK([DK_LIGHT, DK_HOUSE]), { place: '독도 등대' }, 0.1),
              MI('등대가 있는 섬, 동도의 다른 칸에 핀을 꽂아 보세요.', DK([DK_LIGHT]), { region: '동도' }, 0.2),
              MI('배가 들어와 닿는 선착장에 핀을 꽂아 보세요.', DK([DK_LIGHT, DK_PORT, DK_HOUSE]), { place: '선착장' }, 0.15),
            ],
          },
        ],
        wrap: {
          teacher: '"등대가 없으면 밤바다의 배는 어떻게 될까요?" 출구 1번에서 주민 숙소에 꽂은 학생에게는 등대 기호를 범례에서 다시 찾게 한다.',
          exit: [
            XC('map', DK([DK_LIGHT, DK_PORT]), '독도 확대 지도에서 밤바다를 밝히는 곳에 핀을 꽂아 보세요.', { place: '독도 등대' }, 0.1),
            { type: 'choice', prompt: '등대 불빛은 누구를 도와주나요?', options: ['밤바다의 배', '하늘의 비행기', '땅속의 두더지'], answer: 0, difficulty: 0.1, explain: '등대 불빛을 보고 배가 바위를 피해 안전하게 다녀요.' },
            MOOD,
          ],
        },
        wsTitle: '밤바다를 밝혀요',
        ws: [
          { type: 'figure', wide: true, prompt: '확대 지도에서 등대에 ○ 하세요.', tool: 'map', figures: [{ options: DK([DK_LIGHT, DK_PORT, DK_HOUSE]), caption: '독도 확대 지도' }], answer: '동도의 등대' },
          { type: 'table', prompt: '차례에 맞게 번호를 쓰세요.', columns: ['장면', '차례'], cells: [['등대 불이 켜져요', ''], ['해가 져요', ''], ['배가 바위를 피해요', '']], answer: '2, 1, 3' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '등대는 ___에 불빛으로 배의 길을 알려 줘요.', answer: '밤' },
          { type: 'draw', prompt: '불빛을 비추는 독도 등대를 그려 보세요.' },
        ],
        notes: '자주 보이는 어려움: ① 등대를 그냥 탑으로 여긴다 → 밤의 불빛이 하는 일을 이야기로 잇는다. ② 등대가 어느 섬에 있는지 헷갈린다 → 범례 기호와 지도를 함께 본다. ③ 차례에서 원인과 결과를 바꾼다 → "불이 켜져야 무엇이 보일까?"를 묻는다.',
      }),

      LESSON(8, {
        title: '지도에서 독도의 주소 확인하기',
        objective: '독도의 주소가 경상북도 울릉군 울릉읍 독도리임을 알고, 지도에서 독도가 속한 도를 찾을 수 있다.',
        draw: 'a paper envelope addressed to a tiny island, with a stamp showing two islets and a map of Korea with one region colored',
        banner: '독도에도 주소가 있어요', extra: [{ motif: 'house', x: 90, y: 210, color: 'buttercup', s: 0.6 }],
        intro: {
          teacher: '"우리 집에 주소가 있듯이 독도에도 주소가 있을까요?" 대답을 듣고(기다릴 반응: "있어요", "없어요") 독도의 주소는 경상북도 울릉군 울릉읍 독도리라고 알려 준다. 시연 단추로 경상북도 칸에 핀이 꽂히는 모습을 보여 준다. "섬에는 주소가 없어요"라는 말에는 "우리나라 땅에는 모두 주소가 있어요"라고 말해 준다.',
          student: '편지 봉투에 주소를 쓰는 까닭을 짝과 이야기해 봐요.',
          demo: { tool: 'map', options: KOR_GB([P.dokdo]), sequence: [{ region: '경상북도' }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 독도가 속한 도 찾기', tool: 'map',
            teacher: '"지도에서 독도와 같은 색으로 칠한 곳을 찾아볼까요?" 경상북도에 울릉도와 독도가 함께 들어 있다는 것을 색으로 확인하게 한다. 강원도에 꽂는 학생에게는 독도 칸의 색과 견주어 보게 한다.',
            task: '행정 구역을 칠한 지도에서 독도가 속한 곳을 찾아요.',
            items: [
              MI('독도가 속한 도, 경상북도에 핀을 꽂아 보세요.', KOR_GB([P.dokdo, P.seoul]), { region: '경상북도' }, 0.15),
              MQ('지도의 색을 보고 울릉도와 독도가 속한 도를 골라 보세요.', KOR_GB([P.ulleung, P.dokdo]), '울릉도와 독도는 어느 도에 속하나요?', ['경상북도', '강원도', '경상남도'], 0, 0.15),
              MI('경상북도에 속한 두 섬 가운데 작은 바위섬에 핀을 꽂아 보세요.', KOR_GB([P.ulleung, P.dokdo, P.jeju]), { place: '독도' }, 0.2),
            ],
          },
          {
            id: 'a2', title: '활동 2. 주소를 큰 곳부터 차례로 놓기', tool: 'story',
            teacher: '"주소는 큰 곳부터 작은 곳으로 써요." 우리 학교 주소를 예로 들어 도·시·동 차례를 함께 말한다. 독도리를 맨 앞에 두는 학생에게는 "독도리는 가장 작은 곳이에요. 가장 큰 곳은 어디일까요?"라고 묻는다.',
            task: '독도의 주소를 큰 곳부터 작은 곳 차례로 놓고, 봉투 빈칸을 채워요.',
            items: [
              SO('독도 주소를 큰 곳부터 차례대로 놓아 보세요.', '독도 주소', ['가장 큰 곳', '둘째', '셋째', '가장 작은 곳'], [{ id: 'ri', text: '독도리', motif: 'mountain' }, { id: 'do', text: '경상북도', motif: 'sun' }, { id: 'eup', text: '울릉읍', motif: 'house' }, { id: 'gun', text: '울릉군', motif: 'leaf' }], ['do', 'gun', 'eup', 'ri'], 0.25),
              SF('편지 봉투의 주소 빈칸을 채워 보세요.', ['울릉군', '제주시', '서울시'], [{ id: 'b1', who: '봉투', motif: 'star', label: '경상북도 ___ 울릉읍 독도리' }], { b1: '울릉군' }, 0.2),
              SF('독도 주소의 마지막 빈칸을 채워 보세요.', ['독도리', '한라리', '백두리'], [{ id: 'b1', who: '봉투', motif: 'mountain', label: '경상북도 울릉군 울릉읍 ___' }], { b1: '독도리' }, 0.15),
            ],
          },
        ],
        wrap: {
          teacher: '"독도의 주소를 처음부터 말해 볼까요?" 출구 1번에서 강원도에 꽂은 학생에게는 독도 칸과 같은 색을 다시 찾게 한다.',
          exit: [
            XC('map', KOR_GB([P.ulleung, P.dokdo, P.busan]), '울릉도와 독도가 함께 속한 도에 핀을 꽂아 보세요.', { region: '경상북도' }, 0.15),
            { type: 'choice', prompt: '독도의 주소로 알맞은 것은 무엇인가요?', options: ['경상북도 울릉군 울릉읍 독도리', '강원도 울릉군 독도리'], answer: 0, difficulty: 0.15, explain: '독도는 경상북도 울릉군 울릉읍에 속해요.' },
            MOOD,
          ],
        },
        wsTitle: '독도에도 주소가 있어요',
        ws: [
          { type: 'blank', prompt: '독도의 주소를 완성하세요.', text: '___도 울릉군 울릉읍 ___리', answer: '경상북, 독도' },
          { type: 'choice', prompt: '독도와 같은 군에 속한 섬에 ○ 하세요.', options: ['울릉도', '제주도'], answer: '울릉도' },
          { type: 'table', prompt: '주소를 큰 곳부터 차례로 번호를 쓰세요.', columns: ['주소', '차례'], cells: [['울릉군', ''], ['독도리', ''], ['경상북도', '']], answer: '2, 3, 1' },
          { type: 'short', prompt: '독도에게 편지를 쓴다면 봉투에 쓸 주소를 쓰세요.' },
        ],
        notes: '자주 보이는 어려움: ① 섬에는 주소가 없다고 생각한다 → 우리나라 땅에는 모두 주소가 있다고 알려 준다. ② 주소를 작은 곳부터 쓴다 → 우리 학교 주소로 큰 곳부터의 차례를 먼저 익힌다. ③ 울릉도가 강원도라고 짐작한다 → 지도 색으로 확인하게 한다.',
      }),

      LESSON(9, {
        title: '친구에게 독도 소개하는 말 완성하기',
        objective: '독도의 위치·생김새·자연을 넣어 친구에게 독도를 소개할 수 있다.',
        draw: 'two children talking happily, one holding a paper card with two islets and a seagull drawn on it, speech bubbles above',
        banner: '독도를 소개해요', extra: [{ motif: 'star', x: 80, y: 110, color: 'rose', s: 0.6 }],
        intro: {
          teacher: '"독도를 처음 듣는 친구가 있다면 무엇부터 알려 줄까요?" 대답을 듣고(기다릴 반응: "어디 있는지요", "괭이갈매기요") 시연 단추로 말풍선이 채워지는 모습을 보여 준다. "그냥 우리 땅이야"에서 멈추는 학생에게는 "어디에 있고, 무엇이 사는지도 알려 주면 친구가 더 잘 알 수 있어요"라고 덧붙인다.',
          student: '내가 좋아하는 곳을 친구에게 소개한다면 무엇을 말할지 짝에게 말해 봐요.',
          demo: { tool: 'story', options: { mode: 'fill', cards: ['동쪽', '서쪽'], slots: [{ id: 'b1', who: '나', motif: 'sun', label: '독도는 우리나라 ___ 바다에 있어.' }], shuffle: false }, sequence: [{ fill: { b1: '동쪽' } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 소개 말풍선 채우기', tool: 'story',
            teacher: '"이 말풍선은 독도의 무엇을 소개하나요?" 위치·생김새·자연 가운데 무엇인지 먼저 말하고 낱말을 넣게 한다. 지난 차시와 다른 사실을 넣는 학생에게는 카드나 지도를 다시 보게 한다.',
            task: '친구에게 독도를 소개하는 말풍선의 빈칸을 채워요.',
            items: [
              SF('독도의 이웃 섬을 소개하는 말풍선을 채워 보세요.', ['울릉도', '제주도', '강화도'], [{ id: 'b1', who: '다온', motif: 'wave', label: '독도는 ___와 가까운 이웃 섬이야.' }], { b1: '울릉도' }, 0.15),
              SF('독도에 가는 방법을 소개하는 말풍선을 채워 보세요.', ['배', '기차', '자전거'], [{ id: 'b1', who: '시우', motif: 'wave', label: '독도에는 ___를 타고 가.' }], { b1: '배' }, 0.1),
              SF('독도의 등대를 소개하는 말풍선을 채워 보세요.', ['동도', '서도', '울릉도'], [{ id: 'b1', who: '하린', motif: 'star', label: '등대는 해 뜨는 쪽 섬인 ___에 있어.' }], { b1: '동도' }, 0.2),
            ],
          },
          {
            id: 'a2', title: '활동 2. 친구가 잘못 알 때 말하는 방법 고르기', tool: 'emotion',
            teacher: '"친구가 틀리게 알고 있을 때 어떻게 말하면 좋을까요?" 결과 칸을 함께 읽는다. 놀리는 보기를 고르는 학생에게는 친구의 마음을 떠올리게 한다.',
            task: '친구가 독도를 잘못 알고 있을 때 어떻게 말할지 골라요.',
            items: [
              EB('친구가 "독도는 남쪽 바다에 있지?"라고 해요. 어떻게 할까요?', '친구가 독도가 남쪽 바다에 있다고 말해요.', [
                { id: 'laugh', text: '그것도 모르냐고 놀려요', result: '친구가 부끄러워 더 묻지 않아요.', mood: '속상함', why: '놀리면 친구가 배우고 싶지 않아요.' },
                { id: 'map', text: '지도를 같이 보며 동쪽이라고 알려 줘요', result: '친구가 지도를 보고 고개를 끄덕여요.', mood: '뿌듯함' }], 'map', 0.1),
              EB('동생이 독도에는 아무것도 없다고 해요. 어떻게 할까요?', '동생이 독도는 그냥 돌이라고 말해요.', [
                { id: 'shout', text: '아니라고 크게 소리쳐요', result: '동생이 놀라 울어요.', mood: '슬픔', why: '소리치면 설명이 들리지 않아요.' },
                { id: 'tell', text: '괭이갈매기와 꽃 이야기를 해 줘요', result: '동생이 독도가 궁금해져요.', mood: '기쁨' }], 'tell', 0.15),
              EB('나도 답을 모르는 질문을 받았어요. 어떻게 할까요?', '친구가 독도 등대가 언제 생겼는지 물어요.', [
                { id: 'guess', text: '아무렇게나 지어서 말해요', result: '친구가 틀린 것을 믿게 돼요.', mood: '걱정', why: '모르는 것은 지어 말하지 않아요.' },
                { id: 'find', text: '모른다고 하고 같이 찾아봐요', result: '함께 믿을 만한 책을 찾아봐요.', mood: '뿌듯함' }], 'find', 0.2),
            ],
          },
        ],
        wrap: {
          teacher: '"친구에게 독도를 세 문장으로 소개해 볼까요?" 출구 1번에서 틀린 낱말을 넣은 학생에게는 오늘 채운 말풍선을 다시 보게 한다.',
          exit: [
            XC('story', { mode: 'fill', cards: ['괭이갈매기', '펭귄', '독수리'], slots: [{ id: 'b1', who: '나', motif: 'bird', label: '독도 바위 위에는 ___가 많이 살아.' }] }, '친구에게 독도의 새를 소개하는 말풍선을 채워 보세요.', { fill: { b1: '괭이갈매기' } }, 0.1),
            { type: 'choice', prompt: '친구가 독도를 잘못 알고 있을 때 알맞은 행동은 무엇인가요?', options: ['지도를 같이 보며 알려 줘요', '모른다고 놀려요'], answer: 0, difficulty: 0.1, explain: '함께 확인하면 친구도 즐겁게 배워요.' },
            MOOD,
          ],
        },
        wsTitle: '독도를 소개해요',
        ws: [
          { type: 'blank', prompt: '소개 글을 완성하세요.', text: '독도는 우리나라 ___쪽 바다에 있어. ___를 타고 갈 수 있어.', answer: '동, 배' },
          { type: 'choice', prompt: '독도의 이웃 섬에 ○ 하세요.', options: ['울릉도', '제주도'], answer: '울릉도' },
          { type: 'short', prompt: '친구에게 독도를 소개하는 문장을 하나 쓰세요.' },
          { type: 'draw', prompt: '독도 소개 카드에 넣을 그림을 그려 보세요.' },
        ],
        notes: '자주 보이는 어려움: ① "우리 땅"이라는 말만 반복한다 → 위치·생김새·자연 세 가지로 말하게 한다. ② 모르는 것을 지어낸다 → 모르면 같이 찾아보자고 말하는 것이 바른 태도라고 알려 준다. ③ 잘못 아는 친구를 놀린다 → 지도를 함께 보는 방법을 연습한다.',
      }),

      LESSON(10, {
        title: '독도 지킴이 약속 카드 정리하기',
        objective: '2학년 독도 공부를 위치·자연·가는 길로 정리하고, 내가 지킬 독도 지킴이 약속을 고를 수 있다.',
        draw: 'children holding paper promise cards in front of two rocky islets with a lighthouse and seagulls, a ribbon banner above',
        banner: '독도 지킴이 약속', extra: [{ motif: 'star', x: 90, y: 110, color: 'buttercup', s: 0.6 }],
        intro: {
          teacher: '"2학년 독도 여행에서 가장 기억에 남는 곳은 어디인가요?" 대답을 듣고(기다릴 반응: "등대요", "괭이갈매기 둥지요") 시연 단추로 카드가 가지에 놓이는 모습을 보여 준다. 한 가지만 말하는 학생에게는 "독도에 가는 길은 어땠지요?"라고 다른 갈래를 떠올리게 한다.',
          student: '독도를 위해 내가 할 수 있는 일을 하나 떠올려 짝에게 말해 봐요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '독도 여행', slots: ['위치', '가는 길'], cards: ['서울의 동쪽', '배를 타요'], shuffle: false }, sequence: [{ sort: { '위치': ['서울의 동쪽'], '가는 길': ['배를 타요'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 독도 여행 카드 갈래 짓기', tool: 'mindmap',
            teacher: '"이 카드는 독도의 위치, 자연, 가는 길 가운데 무엇일까요?" 등대를 자연에 넣는 학생에게는 사람이 만든 시설이라는 점을 짚는다. 갈래를 나눈 뒤 갈래마다 한 문장으로 말하게 한다.',
            task: '2학년에 알게 된 독도 카드를 갈래에 맞게 나누어요.',
            items: [
              MS('카드를 위치·자연·가는 길로 나누어 보세요.', '독도 여행', ['위치', '자연', '가는 길'], ['경상북도 울릉군', '괭이갈매기 둥지', '울릉도를 거쳐요', '바위 절벽'], { '위치': ['경상북도 울릉군'], '자연': ['괭이갈매기 둥지', '바위 절벽'], '가는 길': ['울릉도를 거쳐요'] }, 0.25),
              MS('사람이 만든 것과 자연으로 나누어 보세요.', '독도에 있는 것', ['사람이 만든 것', '자연'], ['등대', '선착장', '해국', '오징어'], { '사람이 만든 것': ['등대', '선착장'], '자연': ['해국', '오징어'] }, 0.2),
              MP('독도에 대해 맞는 말만 골라 담아 보세요.', '독도 퀴즈', ['서울의 동쪽에 있어요', '주소는 경상북도예요', '비행기로 바로 가요', '큰 숲이 있어요'], ['서울의 동쪽에 있어요', '주소는 경상북도예요'], 0.2),
            ],
          },
          {
            id: 'a2', title: '활동 2. 지킴이 약속 고르기', tool: 'mindmap',
            teacher: '"독도에 가지 않아도 지킬 수 있는 약속은 무엇일까요?" 지금 바로 할 수 있는 약속을 고르게 한다. 다른 나라 친구를 미워하자는 카드를 고르는 학생에게는 "독도 지킴이는 독도를 바르게 알리고 아끼는 사람이에요"라고 말해 준다.',
            task: '독도 지킴이가 지킬 약속을 고르고, 상황에 맞는 행동을 이어요.',
            items: [
              MP('독도 지킴이 약속으로 알맞은 것만 골라 보세요.', '지킴이 약속', ['독도를 바르게 알기', '자연을 아끼기', '다른 나라 친구 미워하기', '모르는 것 지어 말하기'], ['독도를 바르게 알기', '자연을 아끼기'], 0.2),
              MM('상황에 맞는 지킴이 행동을 이어 보세요.', '지킴이 행동', [{ id: 's1', label: '독도 책을 보았어요' }, { id: 's2', label: '바닷가에 쓰레기가 있어요' }], ['읽고 가족에게 알려요', '주워서 분리해요', '모른 척 지나가요'], { s1: '읽고 가족에게 알려요', s2: '주워서 분리해요' }, 0.2),
              MS('지금 할 수 있는 약속과 독도에 가서 할 약속으로 나누어 보세요.', '언제 할까', ['지금 해요', '독도에서 해요'], ['물 아껴 쓰기', '독도 바르게 소개하기', '새 둥지 멀리서 보기', '쓰레기 되가져오기'], { '지금 해요': ['물 아껴 쓰기', '독도 바르게 소개하기'], '독도에서 해요': ['새 둥지 멀리서 보기', '쓰레기 되가져오기'] }, 0.3),
            ],
          },
        ],
        wrap: {
          teacher: '"내가 고른 지킴이 약속을 말해 볼까요?" 출구 1번에서 등대를 자연에 넣은 학생에게는 사람이 만든 것인지 다시 묻는다.',
          exit: [
            XC('mindmap', { mode: 'sort', topic: '독도 정리', slots: ['자연', '사람이 만든 것'], cards: ['괭이갈매기', '땅채송화', '독도 등대', '주민 숙소'] }, '독도에 있는 것을 자연과 사람이 만든 것으로 나누어 보세요.', { sort: { '자연': ['괭이갈매기', '땅채송화'], '사람이 만든 것': ['독도 등대', '주민 숙소'] } }, 0.15),
            { type: 'short', prompt: '내가 지킬 독도 지킴이 약속을 한 문장으로 쓰세요.' },
            MOOD,
          ],
        },
        wsTitle: '독도 지킴이 약속',
        ws: [
          { type: 'table', prompt: '알게 된 것을 갈래에 맞게 쓰세요.', columns: ['위치', '자연', '가는 길'], rows: 2 },
          { type: 'check', prompt: '독도 지킴이 약속에 ✔ 하세요.', options: ['독도 바르게 알기', '모르는 것 지어 말하기', '자연 아끼기'], answer: '독도 바르게 알기, 자연 아끼기' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '독도는 서울의 ___쪽에 있고, 주소는 경상북도 ___군이에요.', answer: '동, 울릉' },
          { type: 'draw', prompt: '독도 지킴이 약속 카드를 그려 보세요.' },
        ],
        notes: '자주 보이는 어려움: ① 지킴이를 싸우는 사람으로 여긴다 → 바르게 알고 아끼는 사람이라고 정리한다. ② 사람이 만든 시설과 자연을 섞는다 → "누가 만들었나요?"로 가르게 한다. ③ 약속이 막연하다 → 지금 바로 할 수 있는 행동 하나로 쓰게 한다.',
      }),
    ],
  });
})();
