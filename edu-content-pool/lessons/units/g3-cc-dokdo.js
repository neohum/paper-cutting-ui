/* 3학년 창체 계기교육 — 독도교육(학년마다 10차시). 중학년: 8방위·거리(외교부 자료)·동도와 서도·화산섬·행정 구역·동해·범례로 독도의 지리를 읽는다.
 * 근거: 교육부 「독도교육 활성화 계획」(교과·창체 통합 연간 10시간 이상 권장, 독도교육주간). 초등 내용 체계: 자연환경·지리적 특성·역사·가치.
 * 사실(연도·거리·문서 이름)은 외교부 독도 누리집·동북아역사재단 독도 자료의 서술만 쓴다. 10월 25일 독도의 날은 법정기념일이 아니다(독도교육주간 연계 시기의 예).
 * 정치적 중립: 자료와 근거로 말하고, 특정 국가의 국민 전체를 비난하는 표현은 쓰지 않는다. 인물 이름은 가명이다(역사 인물 제외). */
(function () {
  const GRADE = 3;
  const ID = `g${GRADE}-cc-dokdo`;
  const UNIT = `g${GRADE}-창체-dokdo`;
  const TITLE = '독도교육 — 지도로 보는 독도';
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

  // 독도 시설(확대 지도) — 동도: 등대·독도경비대·선착장, 서도: 주민 숙소 (외교부 독도 누리집의 시설 서술)
  const F = {
    light: { name: '독도 등대', icon: 'lighthouse', at: [4, 1] },
    guard: { name: '독도경비대', icon: 'police', at: [3, 1] },
    port: { name: '선착장', icon: 'port', at: [4, 2] },
    house: { name: '주민 숙소', icon: 'house', at: [1, 2] },
  };
  // 바다 이름 점(우리나라 칸 지도)
  const SEA = { east: { name: '동해', icon: 'dot', at: [5, 3] }, west: { name: '서해', icon: 'dot', at: [0, 4] }, south: { name: '남해', icon: 'dot', at: [2, 8] } };
  const KOR_GB3 = (places, more) => KOR(places, Object.assign({ regionNames: true, regions: [
    { name: '경상북도', cells: [[3, 5], [3, 6], [4, 4], [5, 5]], color: 'peach' },
    { name: '강원도', cells: [[3, 3], [3, 4]], color: 'sky' },
    { name: '경기도', cells: [[1, 4], [2, 4], [1, 5]], color: 'lavender' },
  ] }, more || {}));

  PaperLessons.registerUnit({
    id: ID, schema: 'edu-unit.v1', catalogUnit: UNIT,
    grade: GRADE, subject: '창체', unitTitle: TITLE,
    flow: '3학년 독도교육은 지도를 읽는 힘으로 독도의 지리적 특성을 확인하는 10차시입니다. 1~2차시는 8방위로 독도가 울릉도의 남동쪽에 있음을 읽고, 외교부 자료의 거리(울릉도에서 87.4km, 일본 오키섬에서 157.5km)로 독도가 울릉도에 더 가깝다는 것을 견줍니다. 3~4차시는 동도와 서도의 생김새·시설을 견주고, 바다 밑 화산 활동으로 생겨 파도와 바람에 깎인 독도의 생김을 차례로 놓습니다. 5~8차시는 경상북도 울릉군 울릉읍이라는 행정 구역과 두 도로명 주소, 동해 속 독도의 자리, 범례로 시설 읽기, 설명을 따라 지도 꾸미기로 지도 읽기를 익히고, 9~10차시에 안내판 글과 정리로 묶습니다. 사회과의 지도 읽기(방위·기호·범례) 수업과 묶어 운영할 수 있으며, 교육부는 교과와 창체를 통합해 연간 10시간 이상 운영을 권장합니다(시수 인정은 학교 결정). 거리·주소 같은 숫자와 이름은 외교부 독도 누리집의 서술만 씁니다.',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '8방위로 울릉도에서 독도 방향 읽기',
        objective: '8방위를 이용해 독도가 울릉도의 남동쪽에 있음을 지도에서 읽을 수 있다.',
        draw: 'a paper compass rose with eight points over a map showing a green island and a small rocky islet to its southeast',
        banner: '울릉도의 남동쪽', extra: [{ motif: 'star', x: 70, y: 110, color: 'buttercup', s: 0.6 }],
        intro: {
          teacher: '"동쪽과 남쪽 사이는 무엇이라고 부를까요?" 대답을 듣고(기다릴 반응: "남동쪽이요", "동남쪽이요") 지도에서는 \'남동\'처럼 남·북을 먼저 말한다고 알려 준다. 시연 단추로 울릉도에서 독도 쪽 방위를 고르는 모습을 보여 준다. "독도는 울릉도 오른쪽이에요"라는 대답에는 "방위표의 글자로 말해 볼까요?"라고 되묻는다.',
          student: '교실 문에서 보면 칠판은 어느 쪽에 있는지 방위로 짝에게 말해 봐요.',
          demo: { tool: 'map', options: KOR([P.ulleung, P.dokdo], { mode: 'compass', points: 8 }), sequence: [{ dir: '남동' }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 방위표로 두 섬의 방위 읽기', tool: 'map',
            teacher: '"방위표의 북쪽을 지도의 북쪽 화살표에 맞추었나요?" 출발한 섬에 손가락을 두고 도착 섬 쪽으로 선을 그어 보게 한다. 독도에서 울릉도로 가는 문항에서 \'남동\'을 고르는 학생에게는 "출발이 바뀌면 방위도 반대가 돼요"라고 짚는다.',
            task: '방위표를 이용해 두 곳 사이의 방위를 고르고, 방위를 따라 핀을 꽂아요.',
            items: [
              MI('울릉도에서 독도는 어느 방위에 있나요? 방위를 골라 보세요.', KOR([P.ulleung, P.dokdo, P.seoul], { mode: 'compass', points: 8 }), { from: '울릉도', to: '독도' }, 0.2),
              MI('독도에서 울릉도는 어느 방위에 있나요? 방위를 골라 보세요.', KOR([P.ulleung, P.dokdo, P.busan], { mode: 'compass', points: 8 }), { from: '독도', to: '울릉도' }, 0.25,
                { conclude: '울릉도에서 독도는 남동쪽, 독도에서 울릉도는 북서쪽이에요.' }),
              MI('울릉도에서 남동쪽으로 한 칸 가면 나오는 섬에 핀을 꽂아 보세요.', KOR([P.ulleung, P.dokdo, P.jeju, P.baekdu]), { from: '울릉도', dir: '남동', steps: 1 }, 0.25),
            ],
          },
          {
            id: 'a2', title: '활동 2. 8방위 낱말 익히기', tool: 'mindmap',
            teacher: '"남동은 남쪽과 동쪽 사이예요." 팔을 남쪽과 동쪽으로 벌린 뒤 그 가운데를 가리키게 한다. \'동남\'이라고 쓰는 학생에게는 지도에서는 남·북을 앞에 쓰는 약속이 있다고 알려 준다.',
            task: '8방위 낱말과 뜻을 잇고, 독도의 자리를 바르게 말한 카드를 골라요.',
            items: [
              MM('두 방위 사이를 나타내는 낱말을 이어 보세요.', '8방위', [{ id: 'se', label: '남쪽과 동쪽 사이' }, { id: 'nw', label: '북쪽과 서쪽 사이' }], ['남동', '북서', '북동'], { se: '남동', nw: '북서' }, 0.15),
              MM('반대쪽 방위를 이어 보세요.', '반대 방위', [{ id: 'a', label: '남동의 반대' }, { id: 'b', label: '북동의 반대' }], ['북서', '남서', '남동'], { a: '북서', b: '남서' }, 0.25),
              MP('독도의 자리를 바르게 말한 카드만 골라 보세요.', '독도의 자리', ['울릉도의 남동쪽', '서울의 동쪽', '제주도의 서쪽', '백두산의 북쪽'], ['울릉도의 남동쪽', '서울의 동쪽'], 0.25),
            ],
          },
        ],
        wrap: {
          teacher: '"독도는 울릉도의 어느 쪽에 있었지요?" 출구 1번에서 \'북서\'를 고른 학생에게는 출발 섬을 다시 확인하게 한다.',
          exit: [
            XC('map', KOR([P.ulleung, P.dokdo, P.jeju], { mode: 'compass', points: 8 }), '울릉도를 출발해 독도로 가는 배는 어느 방위로 가야 할까요?', { from: '울릉도', to: '독도', dir: '남동' }, 0.2),
            { type: 'choice', prompt: '남쪽과 동쪽 사이의 방위는 무엇인가요?', options: ['남동', '북서', '남서'], answer: 0, difficulty: 0.1, explain: '남쪽과 동쪽 사이를 남동이라고 해요.' },
            MOOD,
          ],
        },
        wsTitle: '울릉도의 남동쪽',
        ws: [
          { type: 'figure', wide: true, prompt: '지도에 울릉도에서 독도로 화살표를 그리고 방위를 쓰세요.', tool: 'map', figures: [{ options: KORW([PW.ulleung, PW.dokdo, PW.seoul]), caption: '우리나라 칸 지도' }], answer: '남동' },
          { type: 'table', prompt: '두 방위 사이의 이름을 쓰세요.', columns: ['사이', '방위'], cells: [['남쪽과 동쪽', ''], ['북쪽과 서쪽', ''], ['북쪽과 동쪽', '']], answer: '남동, 북서, 북동' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '독도는 울릉도의 ___쪽, 울릉도는 독도의 ___쪽에 있다.', answer: '남동, 북서' },
          { type: 'short', prompt: '우리 학교에서 남동쪽에 있는 곳을 하나 찾아 쓰세요.' },
        ],
        notes: '자주 보이는 어려움: ① 오른쪽·왼쪽으로 방위를 말한다 → 방위표 북쪽을 지도 북쪽에 맞추게 한다. ② 출발과 도착을 바꿔 읽는다 → 출발 곳에 손가락을 먼저 둔다. ③ 동남·남동 표기를 헷갈린다 → 남·북을 앞에 쓰는 약속을 알려 준다.',
      }),

      LESSON(2, {
        title: '울릉도와 오키섬에서의 거리 견주기',
        objective: '외교부 자료의 거리를 읽고, 독도가 일본 오키섬보다 울릉도에 더 가깝다는 것을 설명할 수 있다.',
        draw: 'a paper measuring tape stretched across blue waves from a green island to a small rocky islet, with a longer tape fading toward a far island',
        banner: '울릉도에서 87.4km', extra: [{ motif: 'wave', y: 240 }],
        intro: {
          teacher: '"울릉도에서 독도까지는 얼마나 멀까요?" 대답을 듣고(기다릴 반응: "아주 멀어요", "가까워요") 외교부 자료에 따르면 87.4km이고, 맑은 날에는 울릉도에서 독도가 눈으로 보인다고 알려 준다. 시연 단추로 지도에서 보기를 고르는 모습을 보여 준다. 거리를 짐작해 큰 수를 말하는 학생에게는 "자료에서 확인한 숫자로 말해 봐요"라고 덧붙인다.',
          student: '학교에서 집까지 얼마나 걸리는지 짝에게 말해 봐요.',
          demo: { tool: 'map', options: KOR([P.ulleung, P.dokdo], { readOnly: true, ask: { q: '독도와 더 가까운 섬은?', choices: ['울릉도', '제주도'] } }), sequence: [{ pick: 0 }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 지도와 자료로 거리 읽기', tool: 'map',
            teacher: '"지도에서 칸이 가까우면 실제로도 가까워요." 울릉도와 독도, 제주도와 독도 사이의 칸 수를 세어 보게 한다. 87.4km를 874km로 읽는 학생에게는 점(소수점)이 어디에 있는지 다시 보게 한다.',
            task: '지도를 보고 외교부 자료의 거리를 고르고, 가까운 곳을 찾아요.',
            items: [
              MQ('외교부 자료에 나온 울릉도에서 독도까지의 거리를 골라 보세요.', KOR([P.ulleung, P.dokdo, P.seoul]), '울릉도에서 독도까지는?', ['87.4km', '874km', '8.74km'], 0, 0.2),
              MQ('지도에서 칸 수를 세어 독도와 더 가까운 곳을 골라 보세요.', KOR([P.ulleung, P.dokdo, P.jeju]), '독도와 더 가까운 섬은?', ['울릉도', '제주도'], 0, 0.15),
              MI('독도에서 87.4km 떨어진, 독도와 가장 가까운 우리 섬에 핀을 꽂아 보세요.', KOR([P.ulleung, P.dokdo, P.jeju, P.busan]), { place: '울릉도' }, 0.15),
            ],
          },
          {
            id: 'a2', title: '활동 2. 두 거리 견주기', tool: 'mindmap',
            teacher: '"87.4km와 157.5km 가운데 어느 쪽이 더 가까울까요?" 두 수의 크기를 먼저 견주게 한다. 수가 크면 더 가깝다고 생각하는 학생에게는 "거리는 수가 작을수록 가까워요"라고 짚는다. 외교부 자료는 이 두 거리를 함께 싣고 있다고 알려 준다.',
            task: '독도까지의 거리를 견주어 더 가까운 곳과 먼 곳을 나누어요.',
            items: [
              MM('출발하는 곳과 독도까지의 거리를 이어 보세요.', '독도까지 거리', [{ id: 'u', label: '울릉도에서' }, { id: 'o', label: '일본 오키섬에서' }], ['87.4km', '157.5km', '15.7km'], { u: '87.4km', o: '157.5km' }, 0.25),
              MP('거리 자료로 알 수 있는 것만 골라 보세요.', '거리로 알 수 있는 것', ['울릉도가 더 가까워요', '맑은 날 울릉도에서 보여요', '오키섬이 더 가까워요', '두 거리가 같아요'], ['울릉도가 더 가까워요', '맑은 날 울릉도에서 보여요'], 0.25),
              MS('거리를 말할 때 바른 말과 바르지 않은 말로 나누어 보세요.', '거리 말하기', ['바른 말', '바르지 않은 말'], ['자료의 숫자로 말해요', '단위 km를 붙여요', '느낌으로 숫자를 지어요', '단위 없이 말해요'], { '바른 말': ['자료의 숫자로 말해요', '단위 km를 붙여요'], '바르지 않은 말': ['느낌으로 숫자를 지어요', '단위 없이 말해요'] }, 0.2),
            ],
          },
        ],
        wrap: {
          teacher: '"독도는 어느 섬에 더 가까웠나요? 숫자로 말해 볼까요?" 출구 1번에서 157.5km를 울릉도에 이은 학생에게는 작은 수가 가까운 거리라는 점을 다시 짚는다.',
          exit: [
            XC('mindmap', { mode: 'match', topic: '거리 확인', slots: [{ id: 'near', label: '더 가까운 곳' }, { id: 'far', label: '더 먼 곳' }], cards: ['울릉도(87.4km)', '오키섬(157.5km)', '두 곳이 같아요'] }, '독도에서 더 가까운 곳과 더 먼 곳을 이어 보세요.', { match: { near: '울릉도(87.4km)', far: '오키섬(157.5km)' } }, 0.2),
            { type: 'choice', prompt: '맑은 날 울릉도에서 독도를 볼 수 있다는 것은 무엇을 알려 주나요?', options: ['두 섬이 가까이 있다', '독도가 아주 크다', '울릉도가 높지 않다'], answer: 0, difficulty: 0.2, explain: '눈으로 보일 만큼 가까운 이웃 섬이라는 뜻이에요.' },
            MOOD,
          ],
        },
        wsTitle: '울릉도에서 87.4km',
        ws: [
          { type: 'table', prompt: '외교부 자료의 거리를 쓰세요.', columns: ['출발', '독도까지 거리'], cells: [['울릉도', ''], ['일본 오키섬', '']], answer: '87.4km, 157.5km' },
          { type: 'choice', prompt: '독도와 더 가까운 곳에 ○ 하세요.', options: ['울릉도', '일본 오키섬'], answer: '울릉도' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '맑은 날에는 ___에서 독도가 눈으로 보인다.', answer: '울릉도' },
          { type: 'short', prompt: '거리를 말할 때 자료의 숫자를 써야 하는 까닭을 쓰세요.' },
        ],
        notes: '자주 보이는 어려움: ① 소수점을 빼고 읽는다(874km) → 점의 자리를 손가락으로 짚게 한다. ② 큰 수가 더 가깝다고 생각한다 → 거리는 작을수록 가깝다는 것을 먼저 확인한다. ③ 짐작한 숫자를 사실처럼 말한다 → 외교부 자료의 숫자만 쓰도록 한다.',
      }),

      LESSON(3, {
        title: '동도와 서도의 생김새와 시설 나누기',
        objective: '동도와 서도의 생김새와 시설을 견주어 설명할 수 있다.',
        draw: 'two paper islets compared side by side: a taller pointed one on the left with a small house, and a lower one on the right with a lighthouse and a dock',
        banner: '동도와 서도 견주기', extra: [{ motif: 'house', x: 100, y: 205, color: 'peach', s: 0.5 }],
        intro: {
          teacher: '"동도와 서도는 쌍둥이처럼 똑같을까요?" 대답을 듣고(기다릴 반응: "똑같아요", "달라요") 서도가 더 높고 뾰족하며, 동도에는 등대와 독도경비대가, 서도에는 주민 숙소가 있다고 알려 준다. 시연 단추로 카드가 동도·서도 칸으로 나뉘는 모습을 보여 준다.',
          student: '두 섬 그림을 보고 다른 점을 하나 찾아 짝에게 말해 봐요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '어느 섬?', slots: ['동도', '서도'], cards: ['독도 등대', '주민 숙소'], shuffle: false }, sequence: [{ sort: { '동도': ['독도 등대'], '서도': ['주민 숙소'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 동도와 서도에 맞는 카드 나누기', tool: 'mindmap',
            teacher: '"이 시설은 어느 섬에 있을까요?" 카드를 나눈 뒤 섬마다 한 문장으로 소개하게 한다. 주민 숙소를 동도에 넣는 학생에게는 확대 지도를 다시 보여 준다.',
            task: '동도와 서도의 생김새와 시설 카드를 나누어요.',
            items: [
              MS('시설을 동도와 서도로 나누어 보세요.', '두 섬의 시설', ['동도', '서도'], ['독도 등대', '독도경비대', '선착장', '주민 숙소'], { '동도': ['독도 등대', '독도경비대', '선착장'], '서도': ['주민 숙소'] }, 0.25),
              MM('생김새에 맞는 섬을 이어 보세요.', '두 섬 생김새', [{ id: 'hi', label: '더 높고 뾰족해요' }, { id: 'sun', label: '해 뜨는 쪽에 있어요' }], ['서도', '동도', '울릉도'], { hi: '서도', sun: '동도' }, 0.2),
              MP('두 섬에 모두 맞는 말만 골라 보세요.', '두 섬 모두', ['바위로 된 섬이에요', '독도에 속해요', '학교가 있어요', '모래사장이 넓어요'], ['바위로 된 섬이에요', '독도에 속해요'], 0.2),
            ],
          },
          {
            id: 'a2', title: '활동 2. 확대 지도에서 시설 찾기', tool: 'map',
            teacher: '"기호를 보고 시설을 찾아요." 범례를 먼저 읽고 지도에서 같은 기호를 찾게 한다. 경비대 기호를 등대로 착각하는 학생에게는 범례를 손가락으로 짚어 비교하게 한다.',
            task: '독도 확대 지도에서 말하는 시설을 찾아 핀을 꽂아요.',
            items: [
              MI('독도 확대 지도에서 독도경비대에 핀을 꽂아 보세요.', DK([F.light, F.guard, F.port, F.house]), { place: '독도경비대' }, 0.15),
              MI('서도에 있는 주민 숙소에 핀을 꽂아 보세요.', DK([F.light, F.guard, F.port, F.house]), { place: '주민 숙소' }, 0.15),
              MQ('확대 지도를 보고 시설이 더 많은 섬을 골라 보세요.', DK([F.light, F.guard, F.port, F.house]), '시설이 더 많은 섬은?', ['동도', '서도'], 0, 0.2),
            ],
          },
        ],
        wrap: {
          teacher: '"동도와 서도의 다른 점을 두 가지 말해 볼까요?" 출구 1번에서 선착장을 서도에 둔 학생에게는 지도의 기호 자리를 다시 보게 한다.',
          exit: [
            XC('mindmap', { mode: 'sort', topic: '섬 견주기', slots: ['동도', '서도'], cards: ['등대가 있어요', '경비대가 있어요', '더 높아요', '주민 숙소가 있어요'] }, '설명을 동도와 서도로 나누어 보세요.', { sort: { '동도': ['등대가 있어요', '경비대가 있어요'], '서도': ['더 높아요', '주민 숙소가 있어요'] } }, 0.25),
            { type: 'choice', prompt: '독도 등대가 있는 섬은 어디인가요?', options: ['동도', '서도'], answer: 0, difficulty: 0.15, explain: '등대와 독도경비대는 동도에 있어요.' },
            MOOD,
          ],
        },
        wsTitle: '동도와 서도 견주기',
        ws: [
          { type: 'figure', wide: true, prompt: '확대 지도에서 동도의 시설에 ○, 서도의 시설에 △ 하세요.', tool: 'map', figures: [{ options: DK([F.light, F.guard, F.port, F.house]), caption: '독도 확대 지도' }], answer: '동도: 등대·경비대·선착장 / 서도: 주민 숙소' },
          { type: 'table', prompt: '두 섬을 견주어 쓰세요.', columns: ['', '동도', '서도'], cells: [['있는 시설', '', ''], ['생김새', '', '']], answer: '등대·경비대·선착장 / 주민 숙소, 더 낮음 / 더 높고 뾰족함' },
          { type: 'choice', prompt: '더 높은 섬에 ○ 하세요.', options: ['동도', '서도'], answer: '서도' },
          { type: 'short', prompt: '동도와 서도가 같은 점을 한 가지 쓰세요.' },
        ],
        notes: '자주 보이는 어려움: ① 두 섬을 똑같다고 여긴다 → 높이와 시설로 견주게 한다. ② 시설 위치를 헷갈린다 → 범례와 확대 지도를 함께 본다. ③ 같은 점을 찾지 못한다 → "둘 다 무엇으로 되어 있나요?"를 묻는다.',
      }),

      LESSON(4, {
        title: '화산섬 독도가 생긴 차례 놓기',
        objective: '독도가 바다 밑 화산 활동으로 생기고 파도와 바람에 깎여 오늘의 모습이 되었음을 차례대로 설명할 수 있다.',
        draw: 'a cross-section of layered paper sea with an underwater volcano rising, then two eroded rocky islets above the waves',
        banner: '화산이 만든 섬', extra: [{ motif: 'sun', x: 90, y: 80, s: 0.5, color: 'rose' }],
        intro: {
          teacher: '"독도는 처음부터 지금 모습이었을까요?" 대답을 듣고(기다릴 반응: "네", "아니요") 독도는 아주 오래전 바다 밑에서 화산이 터져 생긴 화산섬이라고 알려 준다. 시연 단추로 장면이 시간 띠에 놓이는 모습을 보여 준다. "누가 돌을 쌓았어요"라는 대답에는 "사람이 생기기 훨씬 전, 자연이 만든 섬이에요"라고 바로잡는다.',
          student: '화산이라는 말을 들으면 떠오르는 것을 짝에게 말해 봐요.',
          demo: { tool: 'timeline', options: { cards: ['바다 밑 화산이 터져요', '지금의 독도'], axis: ['옛날', '오늘날'], shuffle: false }, sequence: [{ order: ['바다 밑 화산이 터져요', '지금의 독도'] }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 독도가 생긴 차례 놓기', tool: 'timeline',
            teacher: '"섬이 먼저 생겼을까요, 깎이는 일이 먼저일까요?" 장면을 놓을 때마다 앞 장면이 있어야 다음 장면이 생길 수 있는지 묻는다. 깎이는 장면을 맨 앞에 두는 학생에게는 "깎이려면 먼저 무엇이 있어야 할까요?"라고 묻는다.',
            task: '독도가 생겨 지금 모습이 되기까지의 장면을 시간 띠에 차례대로 놓아요.',
            items: [
              TO('독도가 생긴 장면을 차례대로 놓아 보세요.', ['용암이 쌓여 섬이 솟아요', '바다 밑에서 화산이 터져요', '파도와 바람이 깎아요'], ['바다 밑에서 화산이 터져요', '용암이 쌓여 섬이 솟아요', '파도와 바람이 깎아요'], 0.2),
              TO('섬이 깎여 지금 모습이 되는 차례를 놓아 보세요.', ['동도·서도와 바위섬이 돼요', '큰 화산섬 하나가 있어요', '파도가 오랫동안 깎아요'], ['큰 화산섬 하나가 있어요', '파도가 오랫동안 깎아요', '동도·서도와 바위섬이 돼요'], 0.25),
              TO('바위가 깎여 굴이 생기는 차례를 놓아 보세요.', ['바위 아래에 굴이 생겨요', '파도가 바위를 때려요', '바위에 틈이 생겨요'], ['파도가 바위를 때려요', '바위에 틈이 생겨요', '바위 아래에 굴이 생겨요'], 0.2),
            ],
          },
          {
            id: 'a2', title: '활동 2. 화산섬의 특징 고르기', tool: 'mindmap',
            teacher: '"화산섬이라서 독도에 바위가 많아요." 원인과 결과를 이어 말하게 한다. 화산섬은 지금도 불이 난다고 걱정하는 학생에게는 아주 오래전의 화산 활동이라고 말해 준다.',
            task: '화산섬 독도의 특징과 그 까닭을 이어요.',
            items: [
              MP('독도에 대해 맞는 말만 골라 보세요.', '화산섬 독도', ['바다 밑 화산으로 생겼어요', '파도에 깎여 모양이 변했어요', '사람이 돌을 쌓아 만들었어요', '지금도 용암이 흘러요'], ['바다 밑 화산으로 생겼어요', '파도에 깎여 모양이 변했어요'], 0.2),
              MM('모습과 그 까닭을 이어 보세요.', '왜 그럴까', [{ id: 'cliff', label: '가파른 절벽이 많아요' }, { id: 'rock', label: '흙보다 바위가 많아요' }], ['파도가 오래 깎았어요', '화산 용암이 굳었어요', '사람이 파냈어요'], { cliff: '파도가 오래 깎았어요', rock: '화산 용암이 굳었어요' }, 0.25),
              MS('화산과 관련된 낱말과 바다와 관련된 낱말로 나누어 보세요.', '낱말 나누기', ['화산', '바다'], ['용암', '분화구', '파도', '해류'], { '화산': ['용암', '분화구'], '바다': ['파도', '해류'] }, 0.2),
            ],
          },
        ],
        wrap: {
          teacher: '"독도가 생긴 이야기를 세 문장으로 말해 볼까요?" 출구 1번에서 깎이는 장면을 앞에 둔 학생에게는 섬이 먼저 솟아야 한다는 점을 다시 짚는다.',
          exit: [
            XC('timeline', { cards: ['오늘의 독도', '화산 활동', '오랜 침식'], axis: ['옛날', '오늘날'] }, '세 장면을 옛날부터 차례대로 놓아 보세요.', { order: ['화산 활동', '오랜 침식', '오늘의 독도'] }, 0.2),
            { type: 'choice', prompt: '독도는 어떻게 생긴 섬인가요?', options: ['바다 밑 화산 활동으로 생긴 화산섬', '사람이 흙을 쌓아 만든 섬'], answer: 0, difficulty: 0.1, explain: '독도는 바다 밑 화산 활동으로 생긴 화산섬이에요.' },
            MOOD,
          ],
        },
        wsTitle: '화산이 만든 섬',
        ws: [
          { type: 'table', prompt: '독도가 생긴 차례대로 번호를 쓰세요.', columns: ['장면', '차례'], cells: [['파도와 바람이 깎아요', ''], ['바다 밑 화산이 터져요', ''], ['섬이 솟아요', '']], answer: '3, 1, 2' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '독도는 바다 밑 ___ 활동으로 생긴 섬이다.', answer: '화산' },
          { type: 'choice', prompt: '독도에 절벽이 많은 까닭에 ○ 하세요.', options: ['파도가 오래 깎아서', '사람이 깎아서'], answer: '파도가 오래 깎아서' },
          { type: 'draw', prompt: '바다 밑 화산에서 독도가 솟아오르는 모습을 그려 보세요.' },
        ],
        notes: '자주 보이는 어려움: ① 화산섬은 지금도 위험하다고 여긴다 → 아주 오래전의 화산 활동이라고 알려 준다. ② 차례에서 원인과 결과를 바꾼다 → "깎이려면 먼저 무엇이 있어야 할까?"를 묻는다. ③ 섬의 나이를 숫자로 지어 말한다 → 확인된 자료에 있는 것만 말하게 한다.',
      }),

      LESSON(5, {
        title: '행정 구역과 도로명 주소로 독도 찾기',
        objective: '독도가 경상북도 울릉군 울릉읍에 속하고, 동도와 서도에 각각 도로명 주소가 있음을 말할 수 있다.',
        draw: 'a paper road sign on a rocky islet showing a street name, with a map of Korea where one province is highlighted',
        banner: '독도의 주소', extra: [{ motif: 'house', x: 90, y: 210, color: 'buttercup', s: 0.6 }],
        intro: {
          teacher: '"우리 학교 주소에는 도로 이름이 들어 있어요. 독도에도 도로 이름이 있을까요?" 대답을 듣고(기다릴 반응: "없어요", "있어요") 동도에는 \'독도이사부길\', 서도에는 \'독도안용복길\'이라는 도로명 주소가 있다고 알려 준다. 시연 단추로 경상북도 칸에 핀이 꽂히는 모습을 보여 준다.',
          student: '우리 학교나 우리 집 도로명 주소에 들어 있는 도로 이름을 짝에게 말해 봐요.',
          demo: { tool: 'map', options: KOR_GB3([P.dokdo]), sequence: [{ region: '경상북도' }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 지도에서 행정 구역 찾기', tool: 'map',
            teacher: '"독도 칸과 같은 색으로 칠한 도를 찾아볼까요?" 울릉도와 독도가 경상북도에 함께 들어 있음을 확인하게 한다. 강원도에 꽂는 학생에게는 색을 다시 견주게 한다.',
            task: '행정 구역을 칠한 지도에서 독도가 속한 곳을 찾아요.',
            items: [
              MI('울릉도와 독도가 속한 도에 핀을 꽂아 보세요.', KOR_GB3([P.ulleung, P.dokdo, P.seoul]), { region: '경상북도' }, 0.15),
              MQ('지도를 보고 독도가 속한 군을 골라 보세요.', KOR_GB3([P.ulleung, P.dokdo]), '독도는 어느 군에 속하나요?', ['울릉군', '제주시', '강릉시'], 0, 0.15),
              MI('경상북도 칸 가운데 서울과 같은 줄에 있는 섬에 핀을 꽂아 보세요.', KOR_GB3([P.ulleung, P.dokdo, P.seoul, P.jeju]), { place: '독도' }, 0.25,
                { hints: ['서울이 있는 줄을 손가락으로 따라가 봐요.', '그 줄에서 경상북도 색을 찾아요.', '서울에서 동쪽으로 같은 줄 끝, 바다 위 섬이에요.'] }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 도로명 주소 잇기', tool: 'mindmap',
            teacher: '"독도의 두 도로 이름에는 옛사람의 이름이 들어 있어요." 이사부와 안용복은 5학년에 더 배운다고 예고만 한다. 도로명과 섬을 거꾸로 잇는 학생에게는 동도·서도 시설과 함께 다시 보게 한다.',
            task: '독도의 도로명 주소와 섬을 잇고, 주소의 차례를 확인해요.',
            items: [
              MM('도로명과 섬을 이어 보세요.', '독도 도로명', [{ id: 'e', label: '동도' }, { id: 'w', label: '서도' }], ['독도이사부길', '독도안용복길', '울릉순환로'], { e: '독도이사부길', w: '독도안용복길' }, 0.25),
              MS('독도 주소에 들어가는 것과 들어가지 않는 것으로 나누어 보세요.', '독도 주소', ['들어가요', '안 들어가요'], ['경상북도', '울릉군', '제주특별자치도', '강원도'], { '들어가요': ['경상북도', '울릉군'], '안 들어가요': ['제주특별자치도', '강원도'] }, 0.2),
              MP('독도 주소에 대해 맞는 말만 골라 보세요.', '주소 확인', ['울릉읍에 속해요', '도로명 주소가 있어요', '주소가 없는 섬이에요', '서울시에 속해요'], ['울릉읍에 속해요', '도로명 주소가 있어요'], 0.2),
            ],
          },
        ],
        wrap: {
          teacher: '"독도의 행정 구역을 큰 곳부터 말해 볼까요?" 출구 1번에서 도로명을 거꾸로 이은 학생에게는 등대가 있는 섬이 동도라는 것을 다시 짚는다.',
          exit: [
            XC('mindmap', { mode: 'match', topic: '도로명 확인', slots: [{ id: 'w', label: '주민 숙소가 있는 섬' }, { id: 'e', label: '등대가 있는 섬' }], cards: ['독도안용복길', '독도이사부길', '독도바다길'] }, '섬의 시설을 보고 알맞은 도로명을 이어 보세요.', { match: { w: '독도안용복길', e: '독도이사부길' } }, 0.25),
            { type: 'choice', prompt: '독도가 속한 행정 구역으로 알맞은 것은 무엇인가요?', options: ['경상북도 울릉군 울릉읍', '강원도 강릉시', '경상남도 부산'], answer: 0, difficulty: 0.15, explain: '독도는 경상북도 울릉군 울릉읍에 속해요.' },
            MOOD,
          ],
        },
        wsTitle: '독도의 주소',
        ws: [
          { type: 'table', prompt: '두 섬의 도로명을 쓰세요.', columns: ['섬', '도로명'], cells: [['동도', ''], ['서도', '']], answer: '독도이사부길, 독도안용복길' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '독도는 ___도 ___군 울릉읍에 속한다.', answer: '경상북, 울릉' },
          { type: 'choice', prompt: '독도와 같은 군에 속한 섬에 ○ 하세요.', options: ['울릉도', '제주도', '강화도'], answer: '울릉도' },
          { type: 'short', prompt: '우리 학교 주소와 독도 주소의 같은 점을 한 가지 쓰세요.' },
        ],
        notes: '자주 보이는 어려움: ① 울릉도·독도가 강원도라고 짐작한다 → 지도 색으로 확인한다. ② 도로명과 섬을 거꾸로 잇는다 → 동도의 시설(등대·경비대)과 함께 기억하게 한다. ③ 도로명 속 인물을 궁금해한다 → 5학년 역사 차시에서 더 배운다고 알려 준다.',
      }),

      LESSON(6, {
        title: '동해 바다에서 독도의 자리 읽기',
        objective: '우리나라를 둘러싼 바다 이름을 알고, 독도가 동해에 있음을 지도에서 찾을 수 있다.',
        draw: 'a paper map of Korea surrounded by three blue seas labeled with small flags, a tiny islet in the eastern sea',
        banner: '동해의 독도', extra: [{ motif: 'wave', y: 240 }],
        intro: {
          teacher: '"우리나라는 세 쪽이 바다로 둘러싸여 있어요. 바다 이름을 아나요?" 대답을 듣고(기다릴 반응: "동해요", "서해요", "남해요") 시연 단추로 동해 자리에 핀이 꽂히는 모습을 보여 준다. 동해와 남해를 헷갈리는 학생에게는 방위를 다시 떠올리게 한다.',
          student: '가 본 바다가 있다면 어느 쪽 바다였는지 짝에게 말해 봐요.',
          demo: { tool: 'map', options: KOR([SEA.east, SEA.west, P.dokdo]), sequence: [{ place: '동해' }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 지도에서 바다 이름 찾기', tool: 'map',
            teacher: '"독도가 떠 있는 바다는 어느 쪽 바다인가요?" 바다 이름 점과 방위표를 함께 보게 한다. 서해에 꽂는 학생에게는 해가 지는 쪽 바다라는 점을 짚는다.',
            task: '우리나라 칸 지도에서 바다 이름과 섬을 찾아 핀을 꽂아요.',
            items: [
              MI('독도가 있는 바다, 동해에 핀을 꽂아 보세요.', KOR([SEA.east, SEA.west, SEA.south, P.dokdo]), { place: '동해' }, 0.15),
              MI('제주도 가까이에 있는 남쪽 바다에 핀을 꽂아 보세요.', KOR([SEA.east, SEA.west, SEA.south, P.jeju]), { place: '남해' }, 0.15),
              MI('바다 칸 아무 곳에나 핀을 꽂고, 우리나라가 몇 쪽이 바다인지 세어 보세요.', KOR([P.seoul, P.dokdo]), { sea: true }, 0.1),
            ],
          },
          {
            id: 'a2', title: '활동 2. 섬과 바다 이름 잇기', tool: 'mindmap',
            teacher: '"섬은 어느 바다에 있을까요?" 섬마다 지도를 보고 방위를 먼저 말하게 한다. 독도를 남해에 넣는 학생에게는 지도의 동쪽 바다를 다시 가리키게 한다.',
            task: '섬을 그 섬이 있는 바다로 나누고, 바다 이름과 방위를 이어요.',
            items: [
              MS('섬을 있는 바다에 따라 나누어 보세요.', '섬과 바다', ['동해', '남해'], ['독도', '울릉도', '제주도'], { '동해': ['독도', '울릉도'], '남해': ['제주도'] }, 0.2),
              MM('바다 이름과 방위를 이어 보세요.', '세 바다', [{ id: 'e', label: '동해' }, { id: 'w', label: '서해' }, { id: 's', label: '남해' }], ['동쪽 바다', '서쪽 바다', '남쪽 바다', '북쪽 바다'], { e: '동쪽 바다', w: '서쪽 바다', s: '남쪽 바다' }, 0.15),
              MP('동해와 독도에 대해 맞는 말만 골라 보세요.', '동해와 독도', ['독도는 동해에 있어요', '울릉도도 동해에 있어요', '독도는 서해에 있어요', '동해는 남쪽 바다예요'], ['독도는 동해에 있어요', '울릉도도 동해에 있어요'], 0.2),
            ],
          },
        ],
        wrap: {
          teacher: '"독도는 어느 바다에 있고, 그 바다는 어느 쪽인가요?" 출구 1번에서 서해에 꽂은 학생에게는 방위표를 다시 보게 한다.',
          exit: [
            XC('map', KOR([SEA.west, SEA.east, SEA.south, P.ulleung]), '울릉도가 있는 바다의 이름 자리에 핀을 꽂아 보세요.', { place: '동해' }, 0.15),
            { type: 'choice', prompt: '독도가 있는 바다의 이름은 무엇인가요?', options: ['동해', '서해', '남해'], answer: 0, difficulty: 0.1, explain: '독도는 우리나라 동쪽 바다, 동해에 있어요.' },
            MOOD,
          ],
        },
        wsTitle: '동해의 독도',
        ws: [
          { type: 'figure', wide: true, prompt: '지도의 바다에 동해·서해·남해를 쓰고, 독도에 ○ 하세요.', tool: 'map', figures: [{ options: KORW([PW.dokdo, PW.jeju, PW.seoul]), caption: '우리나라 칸 지도' }], answer: '오른쪽 동해, 왼쪽 서해, 아래 남해 / 동해의 독도' },
          { type: 'table', prompt: '섬이 있는 바다를 쓰세요.', columns: ['섬', '바다'], cells: [['독도', ''], ['울릉도', ''], ['제주도', '']], answer: '동해, 동해, 남해' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '우리나라는 ___쪽이 바다로 둘러싸여 있다.', answer: '세' },
          { type: 'short', prompt: '독도가 동해에 있다는 것을 친구에게 설명하는 문장을 쓰세요.' },
        ],
        notes: '자주 보이는 어려움: ① 동해와 남해를 헷갈린다 → 방위표로 바다 이름을 정한다는 것을 보여 준다. ② 바다 이름을 섬 이름으로 여긴다 → 바다는 넓은 물, 섬은 땅이라고 나눈다. ③ 우리나라를 둘러싼 바다 수를 모른다 → 지도에서 바다 쪽을 하나씩 짚게 한다.',
      }),

      LESSON(7, {
        title: '범례로 독도 확대 지도의 기호 읽기',
        objective: '지도 기호와 범례를 이용해 독도의 시설을 읽을 수 있다.',
        draw: 'a paper map legend box with small symbols for a lighthouse, a house, a dock and a guard post, beside a close-up map of two islets',
        banner: '범례로 읽어요', extra: [{ motif: 'star', x: 80, y: 110, color: 'buttercup', s: 0.6 }],
        intro: {
          teacher: '"지도에 그림 대신 작은 기호를 쓰는 까닭은 무엇일까요?" 대답을 듣고(기다릴 반응: "작게 그리려고요") 기호의 뜻을 모아 둔 곳을 범례라고 알려 준다. 시연 단추로 범례 빈칸에 뜻이 채워지는 모습을 보여 준다. "기호는 아무렇게나 그려요"라는 대답에는 "모두가 같은 뜻으로 읽도록 약속한 그림이에요"라고 말해 준다.',
          student: '우리 학교 둘레에서 본 기호(화장실·비상구 등)를 하나 떠올려 짝에게 말해 봐요.',
          demo: { tool: 'map', options: DK([F.light], { mode: 'legend', meanings: { lighthouse: '등대' } }), sequence: [{ legend: { lighthouse: '등대' } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 범례 빈칸 채우기', tool: 'map',
            teacher: '"이 기호는 무엇을 닮았나요?" 기호 모양에서 뜻을 짐작하게 한다. 경비대 기호(방패 모양)를 집으로 고르는 학생에게는 지붕이 있는지 다시 보게 한다.',
            task: '독도 확대 지도의 범례 빈칸에 기호의 뜻을 골라 채워요.',
            items: [
              MI('범례 빈칸에 두 기호의 뜻을 채워 보세요.', DK([F.light, F.house], { mode: 'legend', meanings: { lighthouse: '등대', house: '주민 숙소' } }), { legend: { lighthouse: '등대', house: '주민 숙소' } }, 0.15),
              MI('범례 빈칸에 세 기호의 뜻을 채워 보세요.', DK([F.light, F.guard, F.port], { mode: 'legend', meanings: { lighthouse: '등대', police: '독도경비대', port: '선착장' } }), { legend: { lighthouse: '등대', police: '독도경비대', port: '선착장' } }, 0.25),
              MI('범례 빈칸에 네 기호의 뜻을 모두 채워 보세요.', DK([F.light, F.guard, F.port, F.house], { mode: 'legend', meanings: { lighthouse: '등대', police: '독도경비대', port: '선착장', house: '주민 숙소' }, extra: ['학교'] }), { legend: { lighthouse: '등대', police: '독도경비대', port: '선착장', house: '주민 숙소' } }, 0.3),
            ],
          },
          {
            id: 'a2', title: '활동 2. 기호와 하는 일 잇기', tool: 'mindmap',
            teacher: '"기호의 뜻을 알면 그곳에서 하는 일도 알 수 있어요." 시설마다 하는 일을 한 문장으로 말하게 한다. 선착장을 \'비행기가 내리는 곳\'으로 잇는 학생에게는 배가 닿는 곳이라고 바로잡는다.',
            task: '독도 시설과 그곳에서 하는 일을 잇고, 지도 기호의 좋은 점을 골라요.',
            items: [
              MM('시설과 하는 일을 이어 보세요.', '시설이 하는 일', [{ id: 'l', label: '등대' }, { id: 'p', label: '선착장' }, { id: 'g', label: '독도경비대' }], ['밤에 배의 길을 밝혀요', '배가 닿아 사람이 내려요', '독도를 지켜요', '물건을 팔아요'], { l: '밤에 배의 길을 밝혀요', p: '배가 닿아 사람이 내려요', g: '독도를 지켜요' }, 0.25),
              MP('지도 기호의 좋은 점만 골라 보세요.', '기호의 좋은 점', ['좁은 곳에 나타낼 수 있어요', '누구나 같은 뜻으로 읽어요', '실제 크기를 알려 줘요', '색만 보면 이름을 알아요'], ['좁은 곳에 나타낼 수 있어요', '누구나 같은 뜻으로 읽어요'], 0.25),
              MS('동도의 시설과 서도의 시설로 나누어 보세요.', '어느 섬 시설', ['동도', '서도'], ['선착장', '독도경비대', '주민 숙소'], { '동도': ['선착장', '독도경비대'], '서도': ['주민 숙소'] }, 0.2),
            ],
          },
        ],
        wrap: {
          teacher: '"범례가 없으면 지도를 읽을 때 무엇이 어려울까요?" 출구 1번에서 기호 뜻을 바꿔 채운 학생에게는 기호 모양을 다시 견주게 한다.',
          exit: [
            XC('map', DK([F.guard, F.house], { mode: 'legend', meanings: { police: '독도경비대', house: '주민 숙소' } }), '범례의 두 빈칸에 알맞은 뜻을 골라 채워 보세요.', { legend: { police: '독도경비대', house: '주민 숙소' } }, 0.15),
            { type: 'choice', prompt: '지도 기호의 뜻을 모아 둔 곳을 무엇이라고 하나요?', options: ['범례', '방위표', '축척'], answer: 0, difficulty: 0.1, explain: '기호의 뜻을 모아 둔 곳을 범례라고 해요.' },
            MOOD,
          ],
        },
        wsTitle: '범례로 읽어요',
        ws: [
          { type: 'figure', wide: true, prompt: '범례 빈칸에 기호의 뜻을 쓰세요.', tool: 'map', figures: [{ options: DK([F.light, F.guard, F.port, F.house], { mode: 'legend', meanings: { lighthouse: '등대', police: '독도경비대', port: '선착장', house: '주민 숙소' } }), caption: '독도 확대 지도' }], answer: '등대, 독도경비대, 선착장, 주민 숙소' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '지도 기호의 뜻을 모아 둔 곳을 ___라고 한다.', answer: '범례' },
          { type: 'choice', prompt: '배가 닿는 곳에 ○ 하세요.', options: ['선착장', '등대'], answer: '선착장' },
          { type: 'short', prompt: '독도에 새 기호를 하나 만든다면 무엇을 나타낼지 쓰세요.' },
        ],
        notes: '자주 보이는 어려움: ① 기호와 실제 모양을 같은 크기로 여긴다 → 기호는 약속한 작은 그림이라고 알려 준다. ② 비슷한 기호를 헷갈린다 → 범례를 손가락으로 짚어 하나씩 견준다. ③ 시설이 하는 일을 모른다 → 기호를 읽은 뒤 하는 일을 한 문장으로 말하게 한다.',
      }),

      LESSON(8, {
        title: '설명대로 독도 확대 지도에 핀 꽂기',
        objective: '방위와 위치를 나타내는 말을 읽고 독도 확대 지도에서 알맞은 자리를 찾을 수 있다.',
        draw: 'a child placing paper pins on a close-up grid map of two islets, following arrows and a compass rose',
        banner: '설명을 따라가요', extra: [{ motif: 'star', x: 90, y: 110, color: 'mint', s: 0.6 }],
        intro: {
          teacher: '"\'등대에서 서쪽으로 한 칸\'이라고 하면 어디일까요?" 대답을 듣고 시연 단추로 등대 서쪽 칸에 핀이 꽂히는 모습을 보여 준다. 기준을 찾지 않고 바로 꽂는 학생에게는 "먼저 어디에서 출발하나요?"라고 되묻는다.',
          student: '짝에게 교실의 한 물건을 방위와 칸 수로 설명하고, 짝이 맞히게 해 봐요.',
          demo: { tool: 'map', options: DK([F.light]), sequence: [{ at: [3, 1] }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 방위와 칸 수로 자리 찾기', tool: 'map',
            teacher: '"기준이 되는 곳을 먼저 찾고, 방위대로 칸을 세요." 북쪽 화살표를 먼저 보게 한다. 칸 수를 하나 더 세는 학생에게는 출발 칸은 세지 않는다고 짚는다.',
            task: '기준이 되는 곳에서 방위와 칸 수를 따라 핀을 꽂아요.',
            items: [
              MI('독도 등대에서 서쪽으로 한 칸 간 자리에 핀을 꽂아 보세요.', DK([F.light, F.house]), { from: '독도 등대', dir: '서', steps: 1 }, 0.15),
              MI('선착장에서 남쪽으로 한 칸 간 바다에 핀을 꽂아 보세요.', DK([F.port, F.house]), { from: '선착장', dir: '남', steps: 1 }, 0.2),
              MI('주민 숙소에서 북쪽으로 한 칸 간 자리에 핀을 꽂아 보세요.', DK([F.house, F.light]), { from: '주민 숙소', dir: '북', steps: 1 }, 0.2),
              MI('주민 숙소에서 동쪽으로 두 칸 간 자리에 핀을 꽂아 보세요.', DK([F.house, F.port]), { from: '주민 숙소', dir: '동', steps: 2 }, 0.3,
                { hints: ['기준이 되는 곳을 먼저 찾고, 북쪽 화살표로 방위를 정해요.', '한 칸씩 손가락으로 옮겨 세어 봐요. 출발 칸은 세지 않아요.', '숙소에서 오른쪽(동쪽)으로 한 칸, 또 한 칸 간 자리예요.'] }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 설명 글 고치기', tool: 'mindmap',
            teacher: '"이 설명대로 가면 정말 그곳에 닿을까요?" 지도를 보며 설명 카드가 맞는지 확인하게 한다. 방위가 틀린 카드를 맞다고 고르는 학생에게는 출발과 도착을 다시 짚게 한다.',
            task: '독도 확대 지도를 설명한 말이 맞는지 가려요.',
            items: [
              MS('확대 지도 설명을 맞는 말과 틀린 말로 나누어 보세요.', '지도 설명', ['맞아요', '틀려요'], ['서도는 동도의 서쪽', '등대는 동도에 있어요', '숙소는 동도에 있어요', '동도는 서도의 서쪽'], { '맞아요': ['서도는 동도의 서쪽', '등대는 동도에 있어요'], '틀려요': ['숙소는 동도에 있어요', '동도는 서도의 서쪽'] }, 0.25),
              MP('좋은 길 설명에 꼭 들어갈 것만 골라 보세요.', '좋은 설명', ['출발하는 곳', '방위', '칸 수', '좋아하는 색'], ['출발하는 곳', '방위', '칸 수'], 0.2),
              MM('설명과 도착하는 곳을 이어 보세요.', '어디에 닿을까', [{ id: 'a', label: '숙소에서 동쪽 한 칸' }, { id: 'b', label: '선착장에서 북쪽 한 칸' }], ['서도의 땅', '독도 등대', '선착장'], { a: '서도의 땅', b: '독도 등대' }, 0.3),
            ],
          },
        ],
        wrap: {
          teacher: '"길을 설명할 때 꼭 넣어야 할 세 가지는 무엇이었나요?" 출구 1번에서 칸을 하나 더 센 학생에게는 출발 칸을 빼고 세게 한다.',
          exit: [
            XC('map', DK([F.guard, F.house]), '독도경비대에서 동쪽으로 한 칸 간 자리에 핀을 꽂아 보세요.', { from: '독도경비대', dir: '동', steps: 1 }, 0.2),
            { type: 'choice', prompt: '"등대에서 서쪽으로 한 칸"에서 기준이 되는 곳은 어디인가요?', options: ['등대', '서쪽', '한 칸'], answer: 0, difficulty: 0.15, explain: '기준(출발하는 곳)을 먼저 찾고 방위와 칸 수를 따라가요.' },
            MOOD,
          ],
        },
        wsTitle: '설명을 따라가요',
        ws: [
          { type: 'figure', wide: true, prompt: '확대 지도에서 "선착장에서 서쪽으로 한 칸"인 자리에 ★ 하세요.', tool: 'map', figures: [{ options: DK([F.port, F.light, F.house]), caption: '독도 확대 지도' }], answer: '선착장 바로 서쪽 칸' },
          { type: 'check', prompt: '길 설명에 꼭 필요한 것에 ✔ 하세요.', options: ['출발하는 곳', '방위', '칸 수', '날씨'], answer: '출발하는 곳, 방위, 칸 수' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '서도는 동도의 ___쪽에 있다.', answer: '서' },
          { type: 'short', prompt: '확대 지도에서 등대 가는 길을 출발하는 곳·방위·칸 수를 넣어 쓰세요.' },
        ],
        notes: '자주 보이는 어려움: ① 기준을 찾지 않고 꽂는다 → 출발하는 곳을 먼저 손가락으로 짚게 한다. ② 출발 칸까지 센다 → 첫 칸은 옮긴 다음 칸부터 센다고 알려 준다. ③ 방위를 화면의 위·아래로만 읽는다 → 북쪽 화살표를 먼저 보게 한다.',
      }),

      LESSON(9, {
        title: '위치와 생김새를 넣어 독도 안내판 완성하기',
        objective: '독도의 위치·거리·생김새·주소를 넣어 독도 안내판 글을 완성할 수 있다.',
        draw: 'a wooden paper information sign standing by the sea with a small map of two islets and lines of text, seagulls nearby',
        banner: '독도 안내판', extra: [{ motif: 'bird', x: 140, y: 110 }],
        intro: {
          teacher: '"관광지 안내판에는 어떤 내용이 들어 있나요?" 대답을 듣고(기다릴 반응: "어디에 있는지", "무엇을 볼 수 있는지") 시연 단추로 안내판 빈칸이 채워지는 모습을 보여 준다. 느낌만 적는 학생에게는 "안내판은 처음 온 사람이 알아야 할 사실을 알려 줘요"라고 짚는다.',
          student: '가 본 곳의 안내판에서 읽은 내용을 하나 떠올려 짝에게 말해 봐요.',
          demo: { tool: 'story', options: { mode: 'fill', cards: ['동해', '서해'], slots: [{ id: 'b1', who: '안내판', motif: 'wave', label: '독도는 ___에 있는 섬입니다.' }], shuffle: false }, sequence: [{ fill: { b1: '동해' } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 안내판 빈칸 채우기', tool: 'story',
            teacher: '"이 빈칸에는 어떤 사실이 들어가야 할까요?" 지난 차시의 지도와 표를 펴 놓고 확인하며 채우게 한다. 숫자를 짐작해 넣는 학생에게는 자료의 숫자를 찾아보게 한다.',
            task: '지난 시간에 확인한 사실로 독도 안내판의 빈칸을 채워요.',
            items: [
              SF('안내판의 위치 문장을 채워 보세요.', ['남동쪽', '북서쪽', '87.4km', '874km'], [{ id: 'b1', who: '안내판', motif: 'sun', label: '독도는 울릉도의 ___에 있습니다.' }, { id: 'b2', who: '안내판', motif: 'wave', label: '울릉도에서 ___ 떨어져 있습니다.' }], { b1: '남동쪽', b2: '87.4km' }, 0.25),
              SF('안내판의 생김새 문장을 채워 보세요.', ['동도와 서도', '화산', '빙하', '하나의 섬'], [{ id: 'b1', who: '안내판', motif: 'mountain', label: '독도는 ___ 두 큰 섬과 바위섬으로 되어 있습니다.' }, { id: 'b2', who: '안내판', motif: 'sun', label: '바다 밑 ___ 활동으로 생겼습니다.' }], { b1: '동도와 서도', b2: '화산' }, 0.25),
              SF('안내판의 주소 문장을 채워 보세요.', ['경상북도', '강원도', '울릉군', '포항시'], [{ id: 'b1', who: '안내판', motif: 'house', label: '주소는 ___ ' }, { id: 'b2', who: '안내판', motif: 'house', label: '___ 울릉읍 독도리입니다.' }], { b1: '경상북도', b2: '울릉군' }, 0.2),
            ],
          },
          {
            id: 'a2', title: '활동 2. 안내판에 넣을 문장 고르기', tool: 'mindmap',
            teacher: '"안내판에 들어갈 문장은 사실이어야 해요." 사실과 느낌을 가르게 한다. 확인되지 않은 숫자가 든 문장을 고르는 학생에게는 "이 숫자는 어느 자료에서 보았나요?"라고 묻는다.',
            task: '안내판에 넣기 알맞은 문장과 알맞지 않은 문장을 가려요.',
            items: [
              MS('안내판에 넣을 문장과 넣지 않을 문장으로 나누어 보세요.', '안내판 문장', ['넣어요', '안 넣어요'], ['독도는 동해에 있어요', '동도에 등대가 있어요', '독도는 세상에서 제일 예뻐요', '독도는 100km쯤 될걸요'], { '넣어요': ['독도는 동해에 있어요', '동도에 등대가 있어요'], '안 넣어요': ['독도는 세상에서 제일 예뻐요', '독도는 100km쯤 될걸요'] }, 0.25),
              MP('안내판에 넣으면 좋을 그림만 골라 보세요.', '안내판 그림', ['방위표가 있는 지도', '동도·서도 그림', '만화 주인공', '광고 그림'], ['방위표가 있는 지도', '동도·서도 그림'], 0.2),
              MM('안내판 칸과 들어갈 내용을 이어 보세요.', '안내판 칸', [{ id: 'w', label: '어디에 있나요' }, { id: 's', label: '어떻게 생겼나요' }], ['울릉도의 남동쪽', '동도와 서도', '내 기분'], { w: '울릉도의 남동쪽', s: '동도와 서도' }, 0.2),
            ],
          },
        ],
        wrap: {
          teacher: '"내가 만든 안내판에서 가장 중요한 문장은 무엇인가요?" 출구 1번에서 북서쪽을 넣은 학생에게는 1차시 방위표를 다시 떠올리게 한다.',
          exit: [
            XC('story', { mode: 'fill', cards: ['동해', '남해', '서해'], slots: [{ id: 'b1', who: '안내판', motif: 'wave', label: '독도와 울릉도는 모두 ___에 있습니다.' }] }, '안내판의 빈칸을 채워 보세요.', { fill: { b1: '동해' } }, 0.15),
            { type: 'short', prompt: '내가 만든 독도 안내판에 넣을 문장을 하나 쓰세요(위치·거리·생김새 가운데 하나).' },
            MOOD,
          ],
        },
        wsTitle: '독도 안내판',
        ws: [
          { type: 'blank', prompt: '안내판을 완성하세요.', text: '독도는 울릉도의 ___쪽 ___km에 있는 섬입니다. ___와 서도 두 큰 섬으로 되어 있습니다.', answer: '남동, 87.4, 동도' },
          { type: 'choice', prompt: '안내판에 넣기 알맞은 문장에 ○ 하세요.', options: ['독도는 화산섬입니다.', '독도는 제일 멋져요.'], answer: '독도는 화산섬입니다.' },
          { type: 'table', prompt: '안내판에 넣을 내용을 정리하세요.', columns: ['칸', '내용'], cells: [['위치', ''], ['주소', ''], ['생김새', '']], answer: '울릉도의 남동쪽·동해 / 경상북도 울릉군 울릉읍 독도리 / 동도·서도와 바위섬, 화산섬' },
          { type: 'draw', prompt: '안내판에 넣을 독도 지도를 그려 보세요(방위표 넣기).' },
        ],
        notes: '자주 보이는 어려움: ① 느낌 문장을 사실처럼 쓴다 → 사실과 느낌을 가르는 질문을 한다. ② 숫자를 짐작해 쓴다 → 자료(외교부 누리집)에서 확인한 숫자만 쓰게 한다. ③ 지도에 방위표를 빠뜨린다 → 지도의 세 가지(방위표·기호·범례)를 점검하게 한다.',
      }),

      LESSON(10, {
        title: '위치·거리·생김새로 독도 지리 묶기',
        objective: '3학년에 배운 독도의 지리를 위치·거리·생김새로 정리하고 지도에서 다시 확인할 수 있다.',
        draw: 'a paper notebook open to a map of two islets with labeled sections for location, distance and shape, colored pencils nearby',
        banner: '독도 지리 정리', extra: [{ motif: 'star', x: 80, y: 110, color: 'buttercup', s: 0.6 }],
        intro: {
          teacher: '"독도를 지도로 설명한다면 무엇부터 말할까요?" 대답을 듣고(기다릴 반응: "동해에 있어요", "울릉도 남동쪽이요") 시연 단추로 카드가 갈래에 놓이는 모습을 보여 준다. 한 갈래만 말하는 학생에게는 "거리는 얼마였지요?"처럼 다른 갈래를 떠올리게 한다.',
          student: '3학년 독도 공부에서 가장 기억에 남는 지도 활동을 짝에게 말해 봐요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '독도 지리', slots: ['위치', '생김새'], cards: ['동해', '화산섬'], shuffle: false }, sequence: [{ sort: { '위치': ['동해'], '생김새': ['화산섬'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 독도 지리 카드 갈래 짓기', tool: 'mindmap',
            teacher: '"이 카드는 어디에 있는지, 얼마나 먼지, 어떻게 생겼는지 가운데 무엇을 말하나요?" 87.4km를 위치에 넣는 학생에게는 숫자와 단위가 무엇을 나타내는지 묻는다.',
            task: '3학년에 알게 된 독도 지리 카드를 위치·거리·생김새로 나누어요.',
            items: [
              MS('카드를 위치·거리·생김새로 나누어 보세요.', '독도 지리', ['위치', '거리', '생김새'], ['울릉도의 남동쪽', '울릉도에서 87.4km', '동도와 서도', '화산섬'], { '위치': ['울릉도의 남동쪽'], '거리': ['울릉도에서 87.4km'], '생김새': ['동도와 서도', '화산섬'] }, 0.25),
              MS('카드를 주소와 시설로 나누어 보세요.', '주소와 시설', ['주소', '시설'], ['경상북도 울릉군', '독도이사부길', '독도 등대', '선착장'], { '주소': ['경상북도 울릉군', '독도이사부길'], '시설': ['독도 등대', '선착장'] }, 0.25),
              MP('독도 지리에 대해 맞는 말만 골라 담아 보세요.', '지리 퀴즈', ['동해에 있어요', '오키섬보다 울릉도가 가까워요', '서도에 등대가 있어요', '남해에 있어요'], ['동해에 있어요', '오키섬보다 울릉도가 가까워요'], 0.25),
            ],
          },
          {
            id: 'a2', title: '활동 2. 지도로 다시 확인하기', tool: 'map',
            teacher: '"이름이 보이지 않아도 찾을 수 있나요?" 도전 단계에서는 이름 없이 위치 관계만으로 찾게 한다. 울릉도와 독도를 바꾸어 꽂는 학생에게는 남동쪽 관계를 다시 떠올리게 한다.',
            task: '지도에서 독도와 둘레를 다시 찾아 확인해요.',
            items: [
              MI('독도에서 북서쪽으로 한 칸 간 섬에 핀을 꽂아 보세요.', KOR([P.ulleung, P.dokdo, P.jeju, P.seoul]), { from: '독도', dir: '북서', steps: 1 }, 0.25),
              MI('독도 확대 지도에서 해 지는 쪽의 큰 섬에 핀을 꽂아 보세요.', DK([F.house, F.light]), { region: '서도' }, 0.15),
              MQ('지도를 보고 독도를 바르게 설명한 것을 골라 보세요.', KOR([P.ulleung, P.dokdo, P.seoul, P.jeju]), '바른 설명은?', ['서울의 동쪽, 울릉도의 남동쪽', '서울의 서쪽, 제주도의 남쪽', '울릉도의 북쪽, 동해 밖'], 0, 0.25),
            ],
          },
        ],
        wrap: {
          teacher: '"독도를 지리로 세 문장 설명해 볼까요?" 출구 1번에서 화산섬을 위치에 둔 학생에게는 생김새를 말하는 낱말인지 다시 묻는다.',
          exit: [
            XC('mindmap', { mode: 'sort', topic: '지리 정리', slots: ['위치', '생김새'], cards: ['동해에 있어요', '경상북도에 속해요', '절벽이 많아요', '두 큰 섬이에요'] }, '설명을 위치와 생김새로 나누어 보세요.', { sort: { '위치': ['동해에 있어요', '경상북도에 속해요'], '생김새': ['절벽이 많아요', '두 큰 섬이에요'] } }, 0.2),
            { type: 'choice', prompt: '외교부 자료에 나온 울릉도에서 독도까지의 거리는 얼마인가요?', options: ['87.4km', '157.5km', '8.7km'], answer: 0, difficulty: 0.15, explain: '울릉도에서 87.4km, 일본 오키섬에서 157.5km예요.' },
            MOOD,
          ],
        },
        wsTitle: '독도 지리 정리',
        ws: [
          { type: 'table', prompt: '독도 지리를 정리하세요.', columns: ['갈래', '내용'], cells: [['위치', ''], ['거리', ''], ['생김새', ''], ['주소', '']], answer: '동해, 울릉도의 남동쪽 / 울릉도에서 87.4km / 동도·서도와 바위섬, 화산섬 / 경상북도 울릉군 울릉읍 독도리' },
          { type: 'figure', wide: true, prompt: '지도에서 울릉도와 독도를 찾아 ○ 하고, 두 섬 사이 방위를 쓰세요.', tool: 'map', figures: [{ options: KORW([PW.ulleung, PW.dokdo, PW.seoul]), caption: '우리나라 칸 지도' }], answer: '독도는 울릉도의 남동쪽' },
          { type: 'choice', prompt: '등대가 있는 섬에 ○ 하세요.', options: ['동도', '서도'], answer: '동도' },
          { type: 'short', prompt: '독도를 처음 듣는 친구에게 지리로 독도를 소개하는 문장을 쓰세요.' },
        ],
        notes: '자주 보이는 어려움: ① 위치와 거리를 섞는다 → 숫자와 단위가 있으면 거리라고 구별하게 한다. ② 방위를 반대로 말한다 → 기준(출발) 섬을 먼저 정하게 한다. ③ 시설과 주소를 섞는다 → 도로 이름은 주소, 등대는 시설로 나눈다.',
      }),
    ],
  });
})();
