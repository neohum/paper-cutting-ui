/* 4학년 2학기 사회 3. 다양한 환경과 삶의 모습 — 단원 파일 (참조 차시 없음, 15차시)
 * 모든 마을·도시·지도·자료의 수는 지어낸 것이다(실제 지명·통계 없음). 지도는 칸 지도라 실제 모양과 다르고, 지도 위쪽이 북쪽이다.
 * 푸른누리(산·들·바다가 이어진 고장)는 1~8차시, 푸른들도(도시 셋이 있는 도)는 9~15차시에서 쓴다.
 * 실제 지역·통계는 쓰지 않았다. 교사가 실제 사례를 덧붙일 때는 출처와 연도를 교사가 확인한다(확인 필요).
 */
(function () {
  const BASE = { schema: 'edu-lesson.v1', grade: 4, subject: '사회', unitTitle: '3. 다양한 환경과 삶의 모습', minutes: 40, formats: ['chromebook', 'projector', 'print'] };
  const L = (n, o) => Object.assign({ id: `g4-soc-2-03-${String(n).padStart(2, '0')}`, catalog: { unit: 'g4-사회-2학기-3', lesson: n } }, BASE, o);
  const ILL = (what) => `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`;
  const S1 = ['[4사10-01]']; const S2 = ['[4사10-02]'];
  const W = (o, more) => Object.assign({}, o, more || {});
  const SC = (text, extra) => ({ viewBox: [480, 270], layers: [{ motif: 'cloud', x: 100, y: 52 }, { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'hills', y: 204 }].concat(extra || [], [{ motif: 'text', x: 240, y: 140, text, size: 20 }]) });
  // 차시 뼈대: 도입 5분 · 전개 27분(활동 둘이면 13+14, 셋이면 9+9+9) · 정리 8분
  const MIN = { 2: [13, 14], 3: [9, 9, 9] };
  const LV_MAP = { easy: { names: true, readout: true }, base: {}, challenge: {} };
  const LV_CARD = { easy: { live: true, instant: true }, base: {}, challenge: {} };
  const LV_CHART = { easy: { showValues: true }, base: {}, challenge: {} };
  const LS = (n, c) => L(n, {
    title: c.title, objective: c.obj, standards: c.std,
    illustration: { prompt: ILL(c.ill), scene: SC(c.say, c.extra) },
    stages: [
      Object.assign({ id: 'intro', title: '도입', minutes: 5, teacher: c.intro.t, student: c.intro.s }, c.intro.demo ? { demo: c.intro.demo } : {}),
      { id: 'main', title: '전개', minutes: 27, activities: c.acts.map((a, i) => Object.assign({ id: `a${i + 1}`, minutes: MIN[c.acts.length][i], levels: LV_CARD }, a, { title: `활동 ${i + 1}. ${a.title}` })) },
      { id: 'wrapup', title: '정리', minutes: 8, teacher: c.wrap, exitTicket: c.exit },
    ],
    worksheet: { title: c.wsTitle, items: c.ws },
    differentiation: {
      easy: c.easy || '이름과 읽기 값이 보이고, 카드를 맞는 자리에 놓으면 초록 테두리가 생겨요.',
      base: '교구를 움직인 뒤 확인을 눌러 맞고 틀림을 알아요. 틀리면 힌트가 세 단계로 나와요.',
      challenge: c.chal,
    },
    teacherNotes: c.notes,
  });

  // ---- 지도·자료 ----
  // 1~3차시: 푸른누리 — 북서쪽이 높은 산, 가운데가 들, 동쪽이 바다. 강이 산에서 들을 지나 바다로 간다
  const NURI_H = [
    [4, 3, 2, 1, 0, -1, -1],
    [3, 3, 1, 0, 0, -1, -1],
    [2, 2, 1, 0, 0, -1, -1],
    [1, 1, 0, 0, -1, -1, -1],
  ];
  const NURI = {
    grid: [7, 4], title: '푸른누리', mode: 'terrain', heights: NURI_H, rivers: [[[3, 0], [3, 1], [4, 1]]],
    places: [
      { name: '높은봉', icon: 'mountain', at: [0, 0] }, { name: '숲', icon: 'forest', at: [2, 0] }, { name: '산마을', icon: 'house', at: [1, 1] },
      { name: '들마을', icon: 'house', at: [2, 2] }, { name: '논', icon: 'field', at: [3, 2] }, { name: '바닷마을', icon: 'house', at: [4, 2] },
      { name: '항구', icon: 'port', at: [4, 0] },
    ],
  };
  const NURI_WS = W(NURI, { title: '', heightLegend: false, legend: false });
  // 3차시: 바닷마을의 개발 전·후(칸 지도)
  const COAST_BEFORE = {
    grid: [6, 4], title: '개발 전 바닷마을', sea: [[4, 0], [4, 1], [4, 2], [4, 3], [5, 0], [5, 1], [5, 2], [5, 3]],
    places: [{ name: '마을', icon: 'house', at: [2, 1] }, { name: '포구', icon: 'port', at: [3, 2] }, { name: '숲', icon: 'forest', at: [0, 0] }, { name: '밭', icon: 'field', at: [1, 3] }],
    roads: [[[0, 1], [3, 1]]],
  };
  const COAST_AFTER = {
    grid: [6, 4], title: '개발 뒤 바닷마을', sea: [[5, 0], [5, 1], [5, 2], [5, 3]],
    places: [
      { name: '마을', icon: 'house', at: [2, 1] }, { name: '포구', icon: 'port', at: [4, 2] }, { name: '숲', icon: 'forest', at: [0, 0] }, { name: '밭', icon: 'field', at: [1, 3] },
      { name: '새 논', icon: 'field', at: [4, 1] }, { name: '방조제', icon: 'bridge', at: [4, 3] }, { name: '공장', icon: 'factory', at: [3, 3] },
    ],
    roads: [[[0, 1], [4, 1]], [[3, 1], [3, 3]]],
  };
  const COAST_WS = { grid: [6, 4], title: '', legend: false };
  const AFTER_MEAN = { house: '마을', port: '포구', forest: '숲', field: '논', bridge: '방조제', factory: '공장' };
  // 9~15차시: 푸른들도 — 시 셋, 군 셋(인구 = 만 명, 지어낸 값). 도청은 강나루시에 있다
  const PD_REGIONS = [
    { name: '강나루시', color: 'sky', cells: [[0, 0], [1, 0], [0, 1], [1, 1], [2, 1]], value: 52 },
    { name: '솔들군', color: 'mint', cells: [[2, 0], [3, 0], [4, 0]], value: 6 },
    { name: '새별시', color: 'lavender', cells: [[5, 0], [6, 0], [3, 1], [4, 1], [5, 1], [6, 1]], value: 31 },
    { name: '한울군', color: 'buttercup', cells: [[0, 2], [1, 2], [0, 3], [1, 3], [0, 4], [1, 4]], value: 8 },
    { name: '큰바다시', color: 'peach', cells: [[2, 2], [3, 2], [4, 2], [2, 3], [3, 3], [4, 3], [2, 4], [3, 4], [4, 4]], value: 74 },
    { name: '모래군', color: 'rose', cells: [[5, 2], [6, 2], [5, 3], [6, 3], [5, 4], [6, 4]], value: 5 },
  ];
  const PD = {
    grid: [7, 5], title: '푸른들도', regions: PD_REGIONS,
    places: [
      { name: '도청', icon: 'capital', at: [2, 1] }, { name: '기차역', icon: 'station', at: [3, 2] }, { name: '항구', icon: 'port', at: [3, 4] },
      { name: '공항', icon: 'airport', at: [6, 1] }, { name: '산업단지', icon: 'factory', at: [4, 1] },
    ],
    roads: [[[2, 1], [3, 1], [3, 2], [3, 3], [3, 4]], [[3, 1], [6, 1]]],
    meanings: { capital: '도청', station: '기차역', port: '항구', airport: '공항', factory: '산업단지' },
  };
  const PD_POP = { grid: [7, 5], title: '푸른들도 지역별 인구(만 명)', regions: PD_REGIONS, choropleth: true, unit: '만 명', legend: false };
  const PD_WS = { title: '', legend: false, regionValues: true };
  // 14차시: 큰바다시 안내 지도 — 시청에서 각 장소가 곧은 방위(또는 대각선)에 있다
  const CITY = {
    grid: [7, 5], title: '큰바다시',
    places: [
      { name: '시청', icon: 'office', at: [3, 2] }, { name: '기차역', icon: 'station', at: [3, 0] }, { name: '병원', icon: 'hospital', at: [6, 2] },
      { name: '시장', icon: 'market', at: [0, 2] }, { name: '아파트', icon: 'apartment', at: [3, 4] }, { name: '도서관', icon: 'library', at: [1, 0] },
      { name: '항구', icon: 'port', at: [5, 0] }, { name: '공원', icon: 'park', at: [1, 4] }, { name: '학교', icon: 'school', at: [5, 4] },
    ],
    roads: [[[0, 2], [6, 2]], [[3, 0], [3, 4]]],
  };
  // 11~13차시 자료(지어낸 값)
  const POP_TREND = [['20년 전', 48], ['10년 전', 62], ['5년 전', 70], ['지금', 74]];
  const WORK_DATA = [['공장', 24], ['가게·식당', 31], ['학교·병원', 18], ['농어업', 3]];
  const BUS_DATA = [['큰바다시', 62], ['강나루시', 48], ['새별시', 27], ['솔들군', 4]];
  // 4~5차시 자료(지어낸 값)
  const MT_TEMP = [['3월', 4], ['6월', 19], ['9월', 15], ['12월', 1]];
  const SEA_TEMP = [['3월', 8], ['6월', 22], ['9월', 20], ['12월', 6]];
  const BOAT_DATA = [['푸른포구', 34], ['모래마을', 21], ['갯바위마을', 12], ['솔섬마을', 8]];
  const FIELD_DATA = [['개발 전', 3], ['10년 뒤', 9], ['20년 뒤', 18]];

  PaperLessons.registerUnit({
    id: 'g4-soc-2-03', schema: 'edu-unit.v1', catalogUnit: 'g4-사회-2학기-3',
    grade: 4, subject: '사회', unitTitle: '3. 다양한 환경과 삶의 모습',
    flow: '앞 여덟 차시는 지어낸 고장 푸른누리에서 지역의 환경을 살핍니다. 지도에서 산·들·강·바다를 찾고(1), 환경에 따라 마을 사람들이 하는 일이 다름을 짝 짓고(2), 바닷마을의 개발 전·후 지도를 견줍니다(3). 4~5차시에는 기온 막대그래프와 그림그래프로 자료를 그리고 읽으며, 6~8차시에 조사 계획을 세우고 개발이 일어난 차례와 지도 기호를 읽은 뒤 개발의 좋은 점과 걱정되는 점을 근거와 함께 따져 봅니다. 9~15차시는 푸른들도의 도시를 다룹니다. 인구 지도로 시와 군을 견주고(9), 교통시설이 모인 곳을 찾으며(10), 인구 꺾은선그래프·일하는 곳 그림그래프·버스 이용 가로 막대그래프로 인구·산업·교통 자료를 읽습니다(11~13). 14차시에 방위로 길을 안내하며 도시 생활을 살피고, 15차시에 환경과 도시의 모습을 한 장으로 묶어 스스로 점검합니다.',
    refs: {},
    lessons: [
      // ───────────────────────── 1차시 ─────────────────────────
      LS(1, {
        title: '산·들·바닷가 마을 지도에서 땅의 모습 찾기',
        obj: '지도에서 산, 들, 강, 바다 같은 땅의 모습을 찾고 마을마다 환경이 다르다는 것을 말할 수 있다.',
        std: S1,
        ill: 'a paper-cut landscape of a mountain village, a river plain with rice fields, and a seaside harbor town side by side',
        say: '마을마다 땅의 모습이 어떻게 다를까요?',
        extra: [{ motif: 'mountain', x: 110, y: 214 }, { motif: 'house', x: 250, y: 222 }, { motif: 'wave', x: 400, y: 232 }],
        intro: {
          t: '"우리 나라 안에서도 산 가까이 사는 사람과 바닷가에 사는 사람의 하루는 같을까요?" 같을 것 같다는 학생과 다를 것 같다는 학생의 이유를 칠판에 두 줄로 적는다. 오늘은 마을이 놓인 땅의 모습(산·들·강·바다)을 지도에서 찾는 시간이고, 지도의 모든 마을은 지어낸 것이라고 알린다. 시연 단추로 가장 높은 곳에 핀이 꽂히는 모습을 보여 준다.',
          s: '내가 사는 곳 가까이에 산, 들, 강, 바다 가운데 무엇이 있는지 떠올려 보고 짝에게 말해 봅시다.',
          demo: { tool: 'map', options: NURI, sequence: [{ highest: true }, { sea: true }] },
        },
        acts: [
          {
            title: '푸른누리 지도에서 땅의 모습 찾기', tool: 'map', options: NURI, levels: LV_MAP,
            task: '지도의 색이 진할수록 땅이 높아요. 핀을 끌거나 칸을 눌러 꽂고, 키보드는 방향키와 Enter를 써요.',
            teacher: '"색이 진할수록 땅이 높은 걸까요, 낮은 걸까요?" 오른쪽 높이 범례를 먼저 읽게 한다. 바다를 푸른색이 아니라 가장 낮은 땅으로 보는 학생에게는 바다 칸이 따로 칠해져 있다는 것을 짚는다. 강이 낮은 곳을 향해 흐른다는 말도 덧붙인다.',
            items: [
              { prompt: '푸른누리에서 땅이 가장 높은 곳에 핀을 꽂아 보세요.', target: { highest: true }, difficulty: 0.1 },
              { prompt: '강이 지나가는 칸 하나에 핀을 꽂아 보세요.', target: { river: true }, difficulty: 0.1 },
              { prompt: '바다 칸 하나에 핀을 꽂아 보세요.', target: { sea: true }, difficulty: 0.1,
                predict: { q: '강물은 높은 쪽에서 낮은 쪽 가운데 어디로 흐를까요?', options: ['높은 쪽으로', '낮은 쪽으로'], answer: 1 },
                conclude: '강은 높은 산에서 낮은 땅을 따라 흘러 바다에 닿아요.' },
              { prompt: '산마을에서 동쪽으로 한 칸 간 곳에 핀을 꽂아 보세요.', state: { pin: [3, 2] }, target: { from: '산마을', dir: '동', steps: 1 }, difficulty: 0.2 },
            ],
          },
          {
            title: '마을마다 다른 땅의 모습 말하기', tool: 'map', options: W(NURI, { readOnly: true }), levels: LV_MAP,
            task: '지도를 보고 질문에 알맞은 보기를 골라요.',
            teacher: '"산마을과 들마을 가운데 땅이 더 높은 곳은 어디일까요?" 지도의 색과 높이 범례를 손가락으로 짚어 답하게 한다. 바닷마을은 높은 곳에 있어 바다가 멀다고 답하는 학생에게 바닷마을 옆 칸이 어떤 칸인지 묻는다. 마을마다 가까운 땅의 모습이 다르다는 말로 정리한다.',
            items: [
              { prompt: '산마을은 바닷마을보다 땅의 높이가 어떤가요?', toolOptions: { ask: { choices: ['더 높아요', '더 낮아요', '같아요'], why: [null, '산마을 칸의 색이 더 진해요.', '색의 진하기를 견주어 보세요.'] } }, target: { pick: 0 }, difficulty: 0.1,
                predict: { q: '바다에 가까운 마을일수록 땅이 어떨까요?', options: ['높아요', '낮아요'], answer: 1 },
                conclude: '바닷마을은 바다 가까이 있어 땅이 낮고, 산마을은 산 위에 있어 땅이 높아요.' },
              { prompt: '배가 드나드는 항구와 가까운 마을은 어디일까요?', toolOptions: { ask: { choices: ['산마을', '들마을', '바닷마을'], why: ['산마을은 바다에서 멀어요.', '들마을과 바다 사이에 한 칸이 있어요.', null] } }, target: { pick: 2 }, difficulty: 0.1 },
              { prompt: '논이 있고 강이 곁을 지나 벼를 기르기 알맞은 마을은 어디일까요?', toolOptions: { ask: { choices: ['산마을', '들마을', '바닷마을'], why: ['산마을은 비탈이 많아 논을 만들기 어려워요.', null, '바닷마을 곁에는 논이 없어요.'] } }, target: { pick: 1 }, difficulty: 0.15 },
            ],
          },
        ],
        wrap: '"오늘 지도에서 찾은 땅의 모습은 무엇이고, 마을마다 어떻게 달랐나요?" 산·들·강·바다라는 낱말로 두세 명에게 말하게 한다. 출구 1번에서 항구를 못 찾는 학생이 많으면 다음 시간에 장소 기호를 먼저 읽게 한다.',
        exit: [
          { type: 'tool', tool: 'map', options: W(NURI, { names: false }), prompt: '이름 없는 푸른누리 지도에서 항구를 찾아 핀을 꽂으세요.', target: { place: '항구' }, difficulty: 0.2 },
          { type: 'choice', prompt: '바다와 가장 가까운 땅의 모습은 어느 것인가요?', options: ['높은 산', '넓은 들', '바닷가 낮은 땅'], answer: 2, difficulty: 0.1, explain: '바닷가는 바다와 닿은 낮은 땅이에요.' },
          { type: 'mood', prompt: '오늘 땅의 모습 찾기는 어땠나요?' },
        ],
        wsTitle: '푸른누리의 땅의 모습',
        ws: [
          { type: 'figure', wide: true, prompt: '지도에서 가장 높은 곳에 △, 강에 ○, 바다에 □를 그려 넣으세요.', tool: 'map', options: NURI_WS, figures: [{ caption: '푸른누리 지도' }], answer: '왼쪽 위 높은봉 △, 가운데 세로로 흐르는 강 ○, 오른쪽 바다 □' },
          { type: 'table', prompt: '마을이 놓인 땅의 모습을 쓰세요.', columns: ['마을', '가까이 있는 땅의 모습'], cells: [['산마을', ''], ['들마을', ''], ['바닷마을', '']], answer: '산마을: 높은 산, 들마을: 넓은 들과 강, 바닷마을: 바다' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '강은 높은 ___에서 낮은 곳으로 흘러 ___에 닿아요.', answer: '산, 바다' },
          { type: 'choice', prompt: '땅이 가장 높은 마을에 ○ 하세요.', options: ['산마을', '들마을', '바닷마을'], answer: '산마을' },
          { type: 'short', prompt: '내가 사는 곳 가까이에 있는 땅의 모습을 하나 쓰세요.', answer: '학생마다 다름 — 예: 아파트 뒤에 작은 산이 있어요.' },
        ],
        chal: '이름이 지도에서 사라져 기호와 땅의 높이만으로 장소를 찾고, 질문 답에는 까닭도 한 마디 붙여요.',
        notes: '자주 보이는 어려움: ① 지도 색의 진하기를 땅의 높이가 아니라 물의 깊이로 읽는다 → 범례를 먼저 읽게 한다. ② 바다를 그냥 파란 그림으로 보고 가장 낮은 곳이라는 것을 놓친다 → 강이 어디로 흘러 어디에 닿는지 손가락으로 따라가 보게 한다. ③ 이 지도는 지어낸 칸 지도라 실제 우리나라 모양이 아니다. 실제 고장은 우리 고장 지도로 이어서 다루고, 실제 지명·수치를 말할 때는 교사가 자료에서 확인한다(확인 필요).',
      }),
      // ───────────────────────── 2차시 ─────────────────────────
      LS(2, {
        title: '산·들·바닷가 사람들이 하는 일 짝 짓기',
        obj: '산·들·바닷가 마을의 환경에 따라 사람들이 하는 일이 다르다는 것을 알고 마을과 일을 짝 지을 수 있다.',
        std: S1,
        ill: 'a fisher carrying a basket by the sea, a farmer in a rice field and a woodcutter on a mountain slope, drawn as small paper figures',
        say: '마을마다 하는 일이 다를까요?',
        extra: [{ motif: 'tree', x: 120, y: 218 }, { motif: 'leaf', x: 250, y: 224 }, { motif: 'wave', x: 390, y: 232 }],
        intro: {
          t: '"산이 가까운 마을 사람들은 무슨 일을 하고, 바닷가 마을 사람들은 무슨 일을 할까요?" 학생이 아는 일을 칠판에 적되 어느 마을 일인지는 묻지 않고 둔다. 오늘 이 일들을 푸른누리의 세 마을에 짝 지어 본다고 말하고, 시연 단추로 논이 있는 칸에 핀이 꽂히는 모습을 보여 준다. 일 하나가 두 마을에 걸칠 수 있다는 점도 미리 알린다.',
          s: '내가 먹은 음식 가운데 산에서, 들에서, 바다에서 온 것을 하나씩 떠올려 봅시다.',
          demo: { tool: 'map', options: NURI, sequence: [{ place: '논' }] },
        },
        acts: [
          {
            title: '마을마다 하는 일 나누기', tool: 'mindmap',
            task: '카드의 일을 읽고 알맞은 마을 가지로 옮겨요. 맞으면 초록 테두리가 생겨요.',
            teacher: '"비탈이 많은 산마을에서 큰 논농사를 지을 수 있을까요?" 땅의 높이와 평평한 정도를 짚어 까닭을 말하게 한다. "갯벌에서 조개를 캔다"를 들마을에 놓는 학생에게는 바닷물이 드나드는 곳이 어디인지 묻는다. 한 가지 일을 한 마을에만 배정하려다 막히면 이번 카드는 한 마을에 가장 알맞은 일만 고른다고 말해 준다.',
            items: [
              { prompt: '카드 여섯 장을 산마을·들마을·바닷마을 가지로 나누어 보세요.', toolOptions: { topic: '푸른누리', slots: ['산마을', '들마을', '바닷마을'], cards: ['산에서 나물을 캐요', '넓은 논에서 벼를 길러요', '배를 타고 고기를 잡아요', '비탈 밭에서 채소를 길러요', '들판 비닐하우스에서 채소를 길러요', '바닷가에서 김을 말려요'] }, target: { sort: { '산마을': ['산에서 나물을 캐요', '비탈 밭에서 채소를 길러요'], '들마을': ['넓은 논에서 벼를 길러요', '들판 비닐하우스에서 채소를 길러요'], '바닷마을': ['배를 타고 고기를 잡아요', '바닷가에서 김을 말려요'] } }, difficulty: 0.2 },
              { prompt: '산마을과 알맞은 일만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '산마을 일', cards: ['산에서 버섯을 따요', '숲에서 나무를 가꿔요', '갯벌에서 조개를 캐요', '배에서 그물을 올려요'] }, target: { pick: ['산에서 버섯을 따요', '숲에서 나무를 가꿔요'] }, difficulty: 0.15,
                predict: { q: '산마을에서 가장 쉽게 얻을 수 있는 것은 무엇일까요?', options: ['물고기', '산나물과 나무', '소금'], answer: 1 },
                conclude: '산마을 사람들은 가까이에 있는 산과 숲에서 나는 것을 이용해 일해요.' },
              { prompt: '마을과 그 마을에서 하는 일을 이어 보세요.', toolOptions: { mode: 'match', topic: '마을과 일', slots: [{ id: 'm1', label: '들마을' }, { id: 'm2', label: '바닷마을' }], cards: ['논에서 모내기를 해요', '포구에서 생선을 팔아요', '산에서 땔감을 모아요'] }, target: { match: { m1: '논에서 모내기를 해요', m2: '포구에서 생선을 팔아요' } }, difficulty: 0.2 },
            ],
          },
          {
            title: '지도에서 일하는 곳 찾기', tool: 'map', options: NURI, levels: LV_MAP,
            task: '이야기에 나오는 일을 하는 곳을 지도에서 찾아 핀을 꽂아요.',
            teacher: '"벼를 기르려면 어떤 땅이 알맞을까요?" 평평하고 물이 가까운 땅이라는 말을 이끌어 낸다. 논과 항구를 모두 바닷가 근처에 있다고 한꺼번에 말하는 학생에게 두 곳의 높이를 각각 범례로 읽게 한다. 지도의 일터는 한 곳씩만 표시한 것이라는 점을 짚는다.',
            items: [
              { prompt: '민지네 가족이 벼를 기르는 논을 찾아 핀을 꽂아 보세요.', target: { place: '논' }, difficulty: 0.1 },
              { prompt: '준호 아버지가 고기잡이배를 대는 곳을 찾아 핀을 꽂아 보세요.', target: { place: '항구' }, difficulty: 0.1 },
              { prompt: '나무를 가꾸고 산나물을 캐는 숲을 찾아 핀을 꽂아 보세요.', target: { place: '숲' }, difficulty: 0.15 },
              { prompt: '들마을에서 서쪽으로 한 칸 가면 땅이 더 높아져요. 그곳에 핀을 꽂아 보세요.', state: { pin: [3, 2] }, target: { from: '들마을', dir: '서', steps: 1 }, difficulty: 0.25 },
            ],
          },
        ],
        wrap: '"산·들·바닷가 마을 사람들이 하는 일이 다른 까닭은 무엇일까요?" 가까이에서 얻을 수 있는 것이 다르기 때문이라는 말을 모은다. 출구 2번에서 산마을 일을 바닷마을로 고르는 학생이 있으면 환경과 일을 이어 말하게 한다.',
        exit: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '마을과 일', slots: [{ id: 's1', label: '바닷마을' }, { id: 's2', label: '산마을' }], cards: ['미역을 말려요', '약초를 캐요'] }, prompt: '마을과 알맞은 일을 이으세요.', target: { match: { s1: '미역을 말려요', s2: '약초를 캐요' } }, difficulty: 0.2 },
          { type: 'choice', prompt: '논농사를 짓기에 가장 알맞은 곳은 어디인가요?', options: ['가파른 산비탈', '평평하고 물이 가까운 들', '바닷가 모래밭'], answer: 1, difficulty: 0.15, explain: '벼는 물을 많이 쓰므로 평평하고 물을 끌어 오기 쉬운 들이 알맞아요.' },
          { type: 'mood', prompt: '오늘 마을과 일 짝 짓기는 어땠나요?' },
        ],
        wsTitle: '마을과 하는 일',
        ws: [
          { type: 'figure', wide: true, prompt: '푸른누리 지도에서 논과 항구 기호를 찾아 ○ 하세요.', tool: 'map', options: NURI_WS, figures: [{ caption: '푸른누리 지도' }], answer: '가운데 논 기호, 위쪽 바다 곁 항구 기호' },
          { type: 'table', prompt: '마을마다 하는 일을 한 가지씩 쓰세요.', columns: ['마을', '하는 일'], cells: [['산마을', ''], ['들마을', ''], ['바닷마을', '']], answer: '산마을: 나물 캐기·나무 가꾸기, 들마을: 벼농사·채소 기르기, 바닷마을: 고기잡이·김 말리기' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '배를 타고 고기를 잡는 일은 ___에서 많이 해요(산마을·바닷마을).', answer: '바닷마을' },
          { type: 'choice', prompt: '산마을 사람들이 가까이에서 얻기 쉬운 것에 ○ 하세요.', options: ['나무와 산나물', '고등어', '소금'], answer: '나무와 산나물' },
          { type: 'short', prompt: '우리 고장에서 사람들이 하는 일 한 가지와 그 일을 하는 까닭을 쓰세요.', answer: '학생마다 다름' },
        ],
        chal: '카드가 더 많이 섞여 한 마을에 두 가지 일씩 놓고, 가까운 땅의 모습과 이어 말해 봐요.',
        notes: '자주 보이는 어려움: ① 환경과 일을 따로 외운다 → 왜 그 일이 그곳에서 알맞은지 땅의 모습으로 설명하게 한다. ② 한 마을에는 한 가지 일만 있다고 생각한다 → 사람들은 환경이 허락하는 여러 일을 한다고 알려 준다. ③ 일의 이름(고랭지 채소 등)을 교사가 실제 지역과 이으려면 지역·연도를 확인한 뒤 말한다(확인 필요).',
      }),
      // ───────────────────────── 3차시 ─────────────────────────
      LS(3, {
        title: '개발 전과 뒤의 바닷마을 지도 견주기',
        obj: '같은 바닷마을의 개발 전·후 지도를 견주어 무엇이 달라졌는지 찾고 개발이 환경을 바꾼다는 것을 말할 수 있다.',
        std: S1,
        ill: 'a coastal town drawn twice, once with a wide tidal flat and once with a long seawall and new rice fields where the flat used to be',
        say: '바다였던 곳이 달라졌어요',
        extra: [{ motif: 'house', x: 150, y: 222 }, { motif: 'wave', x: 380, y: 230 }, { motif: 'bird', x: 250, y: 90 }],
        intro: {
          t: '"바다였던 곳이 논이 될 수 있을까요?" 학생의 짐작을 듣고, 사람이 둑을 쌓아 바닷물을 막고 땅을 만드는 일이 있다고 알려 준다. 오늘은 개발 전 지도와 개발 뒤 지도를 견주어 달라진 곳을 찾는 시간이다. 지도 속 마을은 지어낸 곳이고, 개발이 늘 좋거나 늘 나쁘다고 정하지 않는다고 미리 말한다.',
          s: '내가 사는 곳에서 새로 생기거나 없어진 건물이나 길이 있는지 떠올려 짝에게 말해 봅시다.',
          demo: { tool: 'map', options: COAST_AFTER, sequence: [{ place: '새 논' }] },
        },
        acts: [
          {
            title: '개발 뒤 지도에서 달라진 곳 찾기', tool: 'map', options: COAST_AFTER, levels: LV_MAP,
            task: '개발 뒤 지도를 보고 새로 생긴 곳에 핀을 꽂아요. 개발 전 지도는 질문 글을 읽고 떠올려요.',
            teacher: '"개발 전에는 오른쪽 두 줄이 모두 바다였어요. 개발 뒤에는 어떻게 달라졌나요?" 바다 칸이 한 줄 줄어든 것을 짚게 한다. 방조제를 길이라고만 보는 학생에게는 바닷물을 막는 둑이라는 뜻을 알려 준다. 새로 생긴 것이 모두 같은 때 생겼다고 단정하지 말고 지도만으로는 알 수 없는 것도 있다고 말한다.',
            items: [
              { prompt: '바다였던 곳에 새로 생긴 논을 찾아 핀을 꽂아 보세요.', target: { place: '새 논' }, difficulty: 0.1 },
              { prompt: '바닷물이 들어오지 못하게 쌓은 둑인 방조제를 찾아 핀을 꽂아 보세요.', target: { place: '방조제' }, difficulty: 0.15 },
              { prompt: '개발 뒤에 새로 생긴 공장을 찾아 핀을 꽂아 보세요.', target: { place: '공장' }, difficulty: 0.1 },
              { prompt: '개발 전 지도와 견주어, 개발 뒤에 바다의 넓이는 어떻게 되었나요?', toolOptions: { readOnly: true, ask: { choices: ['줄었어요', '그대로예요', '늘었어요'], why: [null, '바다 칸이 한 줄 줄어들었어요.', '새 논이 생긴 자리는 예전에는 바다였어요.'] } }, target: { pick: 0 }, difficulty: 0.2,
                predict: { q: '바다를 막아 논을 만들면 바다 넓이는 어떻게 될까요?', options: ['줄어요', '늘어요'], answer: 0 },
                conclude: '바다를 막아 땅을 만들면 바다가 줄고 논이나 공장 같은 새 땅이 생겨요.' },
            ],
          },
          {
            title: '개발 전 모습과 뒤 모습 나누기', tool: 'mindmap',
            task: '카드를 읽고 개발 전 모습과 개발 뒤 모습 가지로 옮겨요.',
            teacher: '"갯벌에서 조개를 캐던 곳이 논이 되면 사람들이 하는 일도 달라질까요?" 환경이 바뀌면 일과 생활도 바뀐다는 말을 이끌어 낸다. 방조제가 생긴 뒤 자동차 길이 생겼다는 카드를 개발 전으로 놓는 학생에게는 지도의 도로 줄을 다시 보게 한다.',
            items: [
              { prompt: '카드 네 장을 개발 전과 개발 뒤 가지로 나누어 보세요.', toolOptions: { topic: '바닷마을', slots: ['개발 전 모습', '개발 뒤 모습'], cards: ['갯벌에서 조개를 캐요', '방조제 위로 차가 다녀요', '배를 타고 포구로 들어와요', '새 논에서 벼를 길러요'] }, target: { sort: { '개발 전 모습': ['갯벌에서 조개를 캐요', '배를 타고 포구로 들어와요'], '개발 뒤 모습': ['방조제 위로 차가 다녀요', '새 논에서 벼를 길러요'] } }, difficulty: 0.15 },
              { prompt: '개발 뒤 모습에 알맞은 카드만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '개발 뒤', cards: ['공장에서 일하는 사람이 생겼어요', '바다가 마을 앞까지 들어왔어요', '새 길로 도시에 빨리 가요', '갯벌이 마을 앞에 넓었어요'] }, target: { pick: ['공장에서 일하는 사람이 생겼어요', '새 길로 도시에 빨리 가요'] }, difficulty: 0.2 },
              { prompt: '개발한 일과 그 일로 달라진 것을 이어 보세요.', toolOptions: { mode: 'match', topic: '개발과 변화', slots: [{ id: 'm1', label: '방조제를 쌓았어요' }, { id: 'm2', label: '공장을 지었어요' }], cards: ['바닷물이 들어오지 못해요', '일자리가 생겨요', '갯벌 위 마을이 보여요'] }, target: { match: { m1: '바닷물이 들어오지 못해요', m2: '일자리가 생겨요' } }, difficulty: 0.2 },
            ],
          },
        ],
        wrap: '"개발 전과 뒤 지도를 견주어 무엇이 달라졌나요?" 바다가 줄고 논·공장·길이 생겼다는 말을 모은다. 출구 2번에서 개발은 늘 좋은 일이라고 고르는 학생이 있으면 걱정되는 점은 8차시에서 다시 따져 본다고 알려 준다.',
        exit: [
          { type: 'tool', tool: 'map', options: W(COAST_BEFORE, { readOnly: true, ask: { q: '개발 전 지도에서 항구 기호가 있던 곳은 바다와 어떤 위치였나요?', choices: ['바다 바로 곁', '산 위', '마을 한가운데'], why: [null, '개발 전 포구는 바다 곁에 있었어요.', '포구는 배를 대는 곳이라 바다 곁이에요.'] } }), prompt: '개발 전 지도에서 포구의 자리를 고르세요.', target: { pick: 0 }, difficulty: 0.2 },
          { type: 'choice', prompt: '바다를 막아 땅을 만들면 가장 먼저 달라지는 것은 무엇인가요?', options: ['바다의 넓이', '산의 높이', '하루의 길이'], answer: 0, difficulty: 0.1, explain: '바다를 막아 땅을 만들면 바다가 줄어요.' },
          { type: 'mood', prompt: '오늘 개발 전·후 견주기는 어땠나요?' },
        ],
        wsTitle: '개발 전과 뒤',
        ws: [
          { type: 'figure', wide: true, prompt: '개발 뒤 지도에서 새로 생긴 논과 방조제를 찾아 ○ 하세요.', tool: 'map', options: W(COAST_AFTER, COAST_WS), figures: [{ caption: '개발 뒤 바닷마을 지도' }], answer: '오른쪽 안쪽의 새 논 기호와 그 아래 방조제 기호' },
          { type: 'table', prompt: '개발 전과 뒤를 견주어 쓰세요.', columns: ['견줄 것', '개발 전', '개발 뒤'], cells: [['바다의 넓이', '', ''], ['새로 생긴 것', '', '']], answer: '바다의 넓이: 넓었어요 → 줄었어요, 새로 생긴 것: 없었어요 → 논·공장·방조제' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '바닷물을 막는 둑을 ___라고 해요(방조제·다리).', answer: '방조제' },
          { type: 'choice', prompt: '개발 뒤 지도에서 알 수 있는 것에 ○ 하세요.', options: ['바다였던 곳에 새 땅이 생겼어요', '산이 더 높아졌어요', '마을이 없어졌어요'], answer: '바다였던 곳에 새 땅이 생겼어요' },
          { type: 'short', prompt: '내가 사는 곳에서 새로 생긴 것 하나와 그 때문에 달라진 점을 쓰세요.', answer: '학생마다 다름' },
        ],
        chal: '개발 전 지도가 보이지 않는 채로 질문 글만 읽고 달라진 점을 찾고, 달라진 점이 생활에 미치는 영향도 한 문장으로 써 봐요.',
        notes: '자주 보이는 어려움: ① 지도에서 바다 칸이 줄었다는 것을 놓친다 → 두 지도의 오른쪽 열을 손가락으로 짚어 견주게 한다. ② 개발을 땅을 파는 일로만 안다 → 길·둑·공장·논도 개발의 결과임을 알려 준다. ③ 개발이 늘 좋다고 단정한다 → 이 차시는 달라진 점을 찾는 시간이고 좋고 걱정되는 점은 8차시에서 다룬다. 이 마을은 지어낸 곳이므로 실제 간척지는 교사가 출처를 확인한 자료로 덧붙인다(확인 필요).',
      }),
      // ───────────────────────── 4차시 ─────────────────────────
      LS(4, {
        title: '산마을과 바닷마을 월별 기온 막대그래프 그리고 읽기',
        obj: '두 마을의 달별 평균 기온 자료를 막대그래프로 나타내고 읽어 환경의 차이를 자료로 말할 수 있다.',
        std: S1,
        ill: 'two bar charts of monthly temperature, one placed on a mountain village and one beside a seaside town, with a small thermometer between them',
        say: '어느 마을이 더 추울까요?',
        extra: [{ motif: 'mountain', x: 110, y: 214 }, { motif: 'wave', x: 390, y: 232 }, { motif: 'star', x: 250, y: 84 }],
        intro: {
          t: '"산마을과 바닷마을 가운데 겨울에 더 추운 곳은 어디일까요? 어떻게 알 수 있을까요?" 짐작만으로는 틀릴 수 있고 기온을 잰 자료가 필요하다는 말을 기다린다. 오늘 쓰는 기온은 지어낸 값이고, 같은 달끼리 견주어야 한다고 말한다. 시연 단추로 막대가 올라가는 모습을 보여 준다.',
          s: '겨울에 우리 동네는 어느 달이 가장 추웠는지 떠올려 보고, 어떻게 알 수 있는지 말해 봅시다.',
          demo: { tool: 'chart', options: { type: 'bar', title: '산마을 월별 평균 기온', data: MT_TEMP, unit: '°C', scale: 2, xLabel: '달', yLabel: '기온', showValues: true, showTable: false }, sequence: [{ build: true }] },
        },
        acts: [
          {
            title: '산마을 기온을 막대그래프로 그리기', tool: 'chart', levels: LV_CHART,
            task: '표의 값을 보고 막대를 올려요. 막대에 Tab으로 가서 ↑·↓로도 바꿀 수 있어요.',
            teacher: '"눈금 한 칸이 몇 도인지 먼저 읽어 볼까요?" 눈금 한 칸이 2°C라는 것을 읽고 막대 높이를 정하게 한다. 눈금 사이 값을 어림으로 올리는 학생에게는 표의 값이 홀수일 때 눈금 사이에 놓인다는 것을 보여 준다. 그림이 같은 모양으로 비교되도록 두 그래프의 눈금이 같다는 점도 짚는다.',
            items: [
              { prompt: '산마을 기온 표를 보고 3월과 6월의 막대를 그려 보세요.', toolOptions: { type: 'bar', title: '산마을 월별 평균 기온', data: [['3월', 4], ['6월', 19]], unit: '°C', scale: 2, xLabel: '달', yLabel: '기온' }, target: { build: true }, difficulty: 0.15 },
              { prompt: '산마을 기온 표를 보고 네 달의 막대그래프를 완성해 보세요.', toolOptions: { type: 'bar', title: '산마을 월별 평균 기온', data: MT_TEMP, unit: '°C', scale: 2, xLabel: '달', yLabel: '기온', given: [0] }, target: { build: true }, difficulty: 0.2,
                levels: { easy: { toolOptions: { given: [0, 1, 2] } }, challenge: { toolOptions: { given: [] } } },
                conclude: '산마을은 6월에 19°C로 가장 따뜻하고 12월에 1°C로 가장 추워요.' },
              { prompt: '바닷마을 기온 표를 보고 네 달의 막대그래프를 완성해 보세요.', toolOptions: { type: 'bar', title: '바닷마을 월별 평균 기온', data: SEA_TEMP, unit: '°C', scale: 2, xLabel: '달', yLabel: '기온', given: [1] }, target: { build: true }, difficulty: 0.25 },
            ],
          },
          {
            title: '두 마을 막대그래프 읽고 견주기', tool: 'chart', levels: LV_CHART,
            task: '막대그래프를 읽고 질문에 답해요. 값을 쓸 때는 단위를 빼고 수만 써요.',
            teacher: '"두 마을의 12월 막대 가운데 더 낮은 것은 어느 쪽일까요?" 같은 달끼리 견주게 한다. 막대가 높으면 추운 것이라고 읽는 학생에게는 막대의 높이가 기온의 높이임을 짚는다. 6월에 바닷마을이 3°C 더 높다는 것을 값을 빼서 말하게 한다.',
            items: [
              { prompt: '산마을 그래프를 보고 기온이 가장 낮은 달을 고르세요.', toolOptions: { type: 'bar', mode: 'read', title: '산마을 월별 평균 기온', data: MT_TEMP, unit: '°C', scale: 2, xLabel: '달', choices: ['3월', '6월', '12월'], why: ['3월은 12월보다 높아요.', '6월은 가장 높은 막대예요.', null] }, target: { pick: 2 }, difficulty: 0.1 },
              { prompt: '바닷마을 그래프를 보고 9월의 기온은 몇 도인지 쓰세요.', toolOptions: { type: 'bar', mode: 'read', title: '바닷마을 월별 평균 기온', data: SEA_TEMP, unit: '°C', scale: 2, xLabel: '달', question: '9월의 평균 기온은 몇 °C인가요?' }, target: { value: 20 }, difficulty: 0.2 },
              { prompt: '두 마을의 12월 기온 차이는 몇 도인가요? 바닷마을 6°C와 산마을 값을 견주어 쓰세요.', toolOptions: { type: 'bar', mode: 'read', title: '산마을 월별 평균 기온', data: MT_TEMP, unit: '°C', scale: 2, xLabel: '달', question: '바닷마을이 산마을보다 몇 °C 더 따뜻한가요?' }, target: { value: 5 }, difficulty: 0.3,
                predict: { q: '겨울에 더 따뜻한 마을은 어디일까요?', options: ['산마을', '바닷마을'], answer: 1 },
                conclude: '12월에 산마을은 1°C, 바닷마을은 6°C라서 바닷마을이 5°C 더 따뜻해요.' },
            ],
          },
          {
            title: '기온 자료로 알 수 있는 것 가리기', tool: 'mindmap',
            task: '카드의 문장을 기온 자료로 알 수 있는 것과 자료만으로는 알 수 없는 것으로 나누어요.',
            teacher: '"기온 그래프에서 산마을 사람들이 겨울에 힘들다는 것도 알 수 있을까요?" 기온 값은 사실이지만 힘든지는 그래프에 없다는 점을 짚는다. 두 마을 12월을 견주는 문장은 같은 달끼리 견준 것이라 사실로 놓아도 된다고 말해 준다.',
            items: [
              { prompt: '문장 카드를 자료로 알 수 있는 것과 알 수 없는 것으로 나누어 보세요.', toolOptions: { topic: '기온 그래프', slots: ['자료로 알 수 있는 것', '자료만으로는 알 수 없는 것'], cards: ['산마을 12월은 1°C예요', '바닷마을 6월은 22°C예요', '산마을 사람들은 겨울에 늘 힘들어요', '바닷마을이 더 살기 좋아요'] }, target: { sort: { '자료로 알 수 있는 것': ['산마을 12월은 1°C예요', '바닷마을 6월은 22°C예요'], '자료만으로는 알 수 없는 것': ['산마을 사람들은 겨울에 늘 힘들어요', '바닷마을이 더 살기 좋아요'] } }, difficulty: 0.2 },
              { prompt: '그래프를 보고 알 수 있는 문장만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '알 수 있는 것', cards: ['9월은 바닷마을이 산마을보다 5°C 높아요', '산마을 3월은 4°C예요', '바닷마을 사람들은 모두 수영을 좋아해요', '산마을에는 눈이 가장 많이 와요'] }, target: { pick: ['9월은 바닷마을이 산마을보다 5°C 높아요', '산마을 3월은 4°C예요'] }, difficulty: 0.25 },
              { prompt: '견준 말과 그 근거가 되는 그래프 값을 이어 보세요.', toolOptions: { mode: 'match', topic: '견주기와 근거', slots: [{ id: 'm1', label: '12월은 바닷마을이 더 따뜻해요' }, { id: 'm2', label: '두 마을 모두 6월이 가장 따뜻해요' }], cards: ['12월: 바닷마을 6°C, 산마을 1°C', '6월: 산마을 19°C, 바닷마을 22°C', '3월: 산마을 4°C'] }, target: { match: { m1: '12월: 바닷마을 6°C, 산마을 1°C', m2: '6월: 산마을 19°C, 바닷마을 22°C' } }, difficulty: 0.25 },
            ],
          },
        ],
        wrap: '"두 마을의 기온 그래프에서 무엇을 알 수 있나요?" 12월은 산마을이 더 낮고 6월은 바닷마을이 더 높다는 말로 정리한다. 출구 2번에서 그래프로 사람들의 마음까지 안다고 고르는 학생이 있으면 활동 3의 사실·생각 구별로 돌아간다.',
        exit: [
          { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '산마을 월별 평균 기온', data: MT_TEMP, unit: '°C', scale: 2, xLabel: '달', choices: ['3월', '9월', '12월'], why: ['3월은 4°C예요.', null, '12월 막대가 가장 낮아요.'], explain: '9월은 15°C로 3월(4°C)보다 높아요.' }, prompt: '산마을 그래프에서 3월보다 기온이 더 높은 달을 고르세요.', target: { pick: 1 }, difficulty: 0.2 },
          { type: 'choice', prompt: '두 마을의 기온을 바르게 견주려면 어떻게 해야 하나요?', options: ['같은 달끼리 견주어요', '아무 달이나 견주어요', '마을 이름 길이로 견주어요'], answer: 0, difficulty: 0.1, explain: '달이 다르면 기온이 달라지므로 같은 달끼리 견주어야 해요.' },
          { type: 'mood', prompt: '오늘 막대그래프 읽기는 어땠나요?' },
        ],
        wsTitle: '두 마을의 기온 견주기',
        ws: [
          { type: 'table', prompt: '표를 보고 빈칸에 알맞은 수를 쓰세요. 산마을 6월은 19°C입니다.', columns: ['달', '산마을(°C)', '바닷마을(°C)'], cells: [['3월', '4', '8'], ['6월', '19', ''], ['9월', '', '20'], ['12월', '1', '']], answer: '6월 바닷마을 22, 9월 산마을 15, 12월 바닷마을 6' },
          { type: 'choice', prompt: '표에서 두 마을 모두 기온이 가장 높은 달은 어느 달인가요?', options: ['3월', '6월', '12월'], answer: '6월' },
          { type: 'blank', prompt: '12월에 산마을은 바닷마을보다 몇 °C 더 낮은가요?', text: '12월 기온은 산마을이 1°C, 바닷마을이 6°C이니 산마을이 ___°C 더 낮아요.', answer: '5' },
          { type: 'check', prompt: '표만 보고 알 수 있는 것에 ✓ 하세요.', options: ['9월은 바닷마을이 더 따뜻해요', '산마을 사람들은 겨울이 싫어요', '3월은 산마을이 바닷마을보다 4°C 낮아요'], answer: '첫째와 셋째' },
          { type: 'short', prompt: '두 마을의 기온 차이를 한 문장으로 쓰세요.', answer: '예: 12월에는 산마을이 바닷마을보다 5°C 더 낮아요.' },
        ],
        chal: '그래프의 막대가 미리 그려져 있지 않고, 읽기 문항에서 두 달의 기온 차이를 스스로 계산해요.',
        notes: '이 차시의 기온은 모두 지어낸 값이다. 자주 보이는 어려움: ① 눈금 한 칸을 1로 읽는다 → 눈금 한 칸이 2°C임을 먼저 읽게 한다. ② 기온이 높은 막대를 추운 곳으로 읽는다 → 막대 높이가 기온의 높이라고 짚는다. ③ 서로 다른 달을 견주어 차이를 말한다 → 같은 달끼리 견주게 한다. 실제 지역 기온은 기상청 자료에서 교사가 확인한 값만 쓴다(확인 필요).',
      }),
      // ───────────────────────── 5차시 ─────────────────────────
      LS(5, {
        title: '그림그래프로 마을별 어선 수와 논 넓이 읽기',
        obj: '그림그래프와 막대그래프에서 큰 그림과 작은 그림의 뜻을 읽고 마을별 자료를 견주어 환경의 특징을 말할 수 있다.',
        std: S1,
        ill: 'a picture graph made of tiny paper boats and a second bar chart of rice field size, both pinned on a classroom board',
        say: '그림 하나는 몇 척일까요?',
        extra: [{ motif: 'wave', x: 120, y: 232 }, { motif: 'house', x: 250, y: 222 }, { motif: 'leaf', x: 380, y: 216 }],
        intro: {
          t: '"그림 하나가 배 열 척을 나타낸다면 배 그림이 세 개 있는 줄은 몇 척일까요?" 큰 그림과 작은 그림이 각각 얼마를 나타내는지 그림 옆의 뜻을 먼저 읽는 습관을 짚는다. 오늘 쓰는 어선 수와 논 넓이는 지어낸 값이다. 시연 단추로 그림이 한 줄씩 늘어나는 모습을 보여 준다.',
          s: '그림그래프에서 큰 그림과 작은 그림이 각각 무엇을 나타내는지 먼저 찾아봅시다.',
          demo: { tool: 'chart', options: { type: 'picture', title: '바닷가 마을별 어선 수', data: BOAT_DATA, unit: '척', icons: [{ value: 10, name: '10척' }, { value: 1, name: '1척' }] }, sequence: [{ build: true }] },
        },
        acts: [
          {
            title: '어선 수 그림그래프 그리기', tool: 'chart', levels: LV_CHART,
            task: '큰 그림은 10척, 작은 그림은 1척이에요. 줄에서 Tab으로 가서 →·←와 PageUp·PageDown으로 바꿀 수 있어요.',
            teacher: '"큰 그림 두 개와 작은 그림 세 개는 모두 몇 척일까요?" 큰 그림은 10씩 세고 작은 그림은 1씩 센다는 것을 짚는다. 작은 그림 열 개와 큰 그림 한 개가 같다는 것을 알면 그림 수를 줄일 수 있다고 알려 준다. 마을 이름에만 눈이 가서 그림 단위를 놓치는 학생을 살핀다.',
            items: [
              { prompt: '푸른포구의 어선 수를 그림그래프로 나타내 보세요.', toolOptions: { type: 'picture', title: '바닷가 마을별 어선 수', data: [['푸른포구', 34]], unit: '척', icons: [{ value: 10, name: '10척' }, { value: 1, name: '1척' }] }, target: { build: true }, difficulty: 0.15 },
              { prompt: '네 마을의 어선 수를 그림그래프로 완성해 보세요.', toolOptions: { type: 'picture', title: '바닷가 마을별 어선 수', data: BOAT_DATA, unit: '척', icons: [{ value: 10, name: '10척' }, { value: 1, name: '1척' }], given: [0] }, target: { build: true }, difficulty: 0.25,
                levels: { easy: { toolOptions: { given: [0, 1, 2] } }, challenge: { toolOptions: { given: [] } } },
                conclude: '푸른포구는 34척, 모래마을은 21척, 갯바위마을은 12척, 솔섬마을은 8척이에요.' },
              { prompt: '갯바위마을과 솔섬마을의 어선 수만 그림그래프로 나타내 보세요.', toolOptions: { type: 'picture', title: '작은 마을 어선 수', data: [['갯바위마을', 12], ['솔섬마을', 8]], unit: '척', icons: [{ value: 10, name: '10척' }, { value: 1, name: '1척' }] }, target: { build: true }, difficulty: 0.2 },
            ],
          },
          {
            title: '그림그래프와 막대그래프 읽기', tool: 'chart', levels: LV_CHART,
            task: '그래프를 읽고 질문에 답해요. 그래프 제목과 단위를 먼저 읽어요.',
            teacher: '"어선이 가장 많은 마을은 어디일까요? 그림을 세기 전에 어떻게 짐작할 수 있나요?" 그림 줄이 가장 긴 곳이 가장 많다는 것을 확인하게 한다. 논 넓이 그래프에서는 세로 눈금이 5씩 올라간다는 것을 읽게 한다. 개발 전과 뒤 논 넓이를 견줄 때 몇 칸이 늘었는지 값으로 말하게 한다.',
            items: [
              { prompt: '어선 그림그래프를 보고 어선이 가장 많은 마을을 고르세요.', toolOptions: { type: 'picture', mode: 'read', title: '바닷가 마을별 어선 수', data: BOAT_DATA, unit: '척', icons: [{ value: 10, name: '10척' }, { value: 1, name: '1척' }], choices: ['푸른포구', '모래마을', '솔섬마을'], why: [null, '모래마을은 21척이에요.', '솔섬마을은 가장 적어요.'] }, target: { pick: 0 }, difficulty: 0.1 },
              { prompt: '그림그래프에서 모래마을의 어선은 몇 척인지 쓰세요.', toolOptions: { type: 'picture', mode: 'read', title: '바닷가 마을별 어선 수', data: BOAT_DATA, unit: '척', icons: [{ value: 10, name: '10척' }, { value: 1, name: '1척' }], question: '모래마을의 어선은 몇 척인가요?' }, target: { value: 21 }, difficulty: 0.2 },
              { prompt: '논 넓이 막대그래프에서 개발 20년 뒤는 개발 전보다 몇 칸 늘었나요?', toolOptions: { type: 'bar', mode: 'read', title: '새 논 넓이(지도 칸 수)', data: FIELD_DATA, unit: '칸', scale: 5, xLabel: '때', question: '개발 20년 뒤 논은 개발 전보다 몇 칸 늘었나요?' }, target: { value: 15 }, difficulty: 0.3,
                predict: { q: '바다를 막은 뒤 논 넓이는 해마다 어떻게 될까요?', options: ['점점 늘어요', '점점 줄어요'], answer: 0 },
                conclude: '개발 전 3칸에서 20년 뒤 18칸으로 늘어 15칸이 더 생겼어요.' },
            ],
          },
        ],
        wrap: '"그림그래프를 읽을 때 가장 먼저 무엇을 확인해야 하나요?" 큰 그림과 작은 그림이 각각 몇을 나타내는지 확인한다는 말을 모은다. 출구 1번에서 그림 개수만 세어 34가 아니라 5로 쓰는 학생이 있으면 단위를 곱하는 과정을 보여 준다.',
        exit: [
          { type: 'tool', tool: 'chart', options: { type: 'picture', mode: 'read', title: '바닷가 마을별 어선 수', data: BOAT_DATA, unit: '척', icons: [{ value: 10, name: '10척' }, { value: 1, name: '1척' }], question: '푸른포구의 어선은 몇 척인가요?' }, prompt: '그림그래프에서 푸른포구의 어선 수를 쓰세요.', target: { value: 34 }, difficulty: 0.2 },
          { type: 'choice', prompt: '큰 그림 하나가 10척, 작은 그림 하나가 1척일 때 큰 그림 2개와 작은 그림 3개는 몇 척인가요?', options: ['5척', '23척', '32척'], answer: 1, difficulty: 0.15, explain: '10척이 2개면 20척, 1척이 3개면 3척이라 모두 23척이에요.' },
          { type: 'mood', prompt: '오늘 그림그래프 읽기는 어땠나요?' },
        ],
        wsTitle: '그림그래프와 막대그래프',
        ws: [
          { type: 'table', prompt: '그림그래프를 읽고 표를 채우세요. 푸른포구는 큰 그림 3개, 작은 그림 4개입니다.', columns: ['마을', '큰 그림(10척)', '작은 그림(1척)', '어선 수(척)'], cells: [['푸른포구', '3', '4', ''], ['모래마을', '2', '1', ''], ['솔섬마을', '', '8', '8']], answer: '푸른포구 34, 모래마을 21, 솔섬마을 큰 그림 0' },
          { type: 'choice', prompt: '그림그래프에서 어선이 가장 적은 마을에 ○ 하세요.', options: ['푸른포구', '모래마을', '솔섬마을'], answer: '솔섬마을' },
          { type: 'blank', prompt: '표를 보고 빈칸을 채우세요.', text: '푸른포구는 솔섬마을보다 어선이 ___척 더 많아요.', answer: '26' },
          { type: 'table', prompt: '새 논 넓이를 표로 정리하세요.', columns: ['때', '개발 전', '10년 뒤', '20년 뒤'], cells: [['논 넓이(칸)', '3', '', '18']], answer: '10년 뒤 9' },
          { type: 'short', prompt: '두 그래프를 보고 바닷가 마을의 일과 개발 뒤의 변화를 한 문장으로 쓰세요.', answer: '예: 푸른포구에는 어선이 많고, 바다를 막은 뒤 논이 점점 늘었어요.' },
        ],
        chal: '그림그래프 줄이 미리 그려져 있지 않고, 읽기 문항에서 두 마을의 어선 수 차이를 직접 계산해요.',
        notes: '이 차시의 모든 수는 지어낸 값이다. 자주 보이는 어려움: ① 큰 그림과 작은 그림의 값을 같게 센다 → 그림 단위를 먼저 읽게 한다. ② 그림 수와 어선 수를 같다고 쓴다 → 10척 단위를 곱하는 과정을 보여 준다. ③ 막대그래프 눈금을 1로 읽는다 → 눈금 한 칸이 5칸임을 읽게 한다. 실제 어선 수나 논 넓이를 쓸 때는 통계청·지자체 자료의 연도와 출처를 교사가 확인한다(확인 필요).',
      }),
      // ───────────────────────── 6차시 ─────────────────────────
      LS(6, {
        title: '우리 고장 환경 조사 계획 세우기',
        obj: '고장의 환경을 조사할 때 알고 싶은 것, 갈 곳, 알아보는 방법과 지킬 약속을 정해 조사 계획을 세울 수 있다.',
        std: S1,
        ill: 'children with clipboards planning a field trip, with a hand-drawn local map, a magnifying glass and a pencil laid out on a table',
        say: '조사하러 어디로 갈까요?',
        extra: [{ motif: 'house', x: 140, y: 222 }, { motif: 'tree', x: 340, y: 216 }, { motif: 'flower', x: 250, y: 226 }],
        intro: {
          t: '"푸른누리의 환경이 어떻게 다른지 알고 싶다면 무엇부터 정해야 할까요?" 알고 싶은 것, 갈 곳, 방법을 칠판에 세 칸으로 적는다. 학생이 바로 가서 보자고 하면 무엇을 볼지 정하지 않으면 사진만 찍고 돌아온다는 점을 짚는다. 시연 단추로 산 쪽에서 바다 쪽으로 핀이 옮겨 가는 조사 길을 보여 준다.',
          s: '우리 고장에서 알아보고 싶은 환경을 하나 떠올려 보고, 어디에 가면 알 수 있을지 말해 봅시다.',
          demo: { tool: 'map', options: NURI, sequence: [{ place: '숲' }, { place: '항구' }] },
        },
        acts: [
          {
            title: '조사 장소를 지도에서 정하기', tool: 'map', options: NURI, levels: LV_MAP,
            task: '조사 질문에 알맞은 장소를 지도에서 찾아 핀을 꽂아요.',
            teacher: '"산이 어떻게 생겼는지 알고 싶다면 어디로 갈까요?" 질문마다 알맞은 장소를 지도 기호로 말하게 한다. 한 번에 모든 곳을 가려는 학생에게는 하루에 갈 수 있는 곳은 두세 곳이고 가장 알고 싶은 곳부터 정한다고 알려 준다.',
            items: [
              { prompt: '높은봉에서 동쪽으로 두 칸 간 곳의 나무와 숲을 살펴보려고 해요. 핀을 꽂아 보세요.', target: { from: '높은봉', dir: '동', steps: 2 }, difficulty: 0.15 },
              { prompt: '항구에서 남쪽으로 두 칸 간 곳의 마을에서 어른께 일을 여쭤보려고 해요. 핀을 꽂아 보세요.', target: { from: '항구', dir: '남', steps: 2 }, difficulty: 0.2 },
              { prompt: '벼를 기르는 곳을 살펴보려고 해요. 논에 핀을 꽂아 보세요.', target: { place: '논' }, difficulty: 0.1 },
            ],
          },
          {
            title: '알고 싶은 것과 알아보는 방법 잇기', tool: 'mindmap',
            task: '알고 싶은 것과 알맞은 방법을 이어요. 맞으면 초록 테두리가 생겨요.',
            teacher: '"이 고장에서 어떤 일을 하는지 알려면 누구에게 물어볼까요?" 마을 어른께 묻기, 책과 누리집에서 찾기, 직접 보고 적기의 쓰임을 구별하게 한다. 옛 모습을 알고 싶은데 오늘 관찰만 하자는 학생에게는 옛 사진이나 어른의 이야기가 필요하다고 짚는다.',
            items: [
              { prompt: '알고 싶은 것과 알맞은 방법을 이어 보세요.', toolOptions: { mode: 'match', topic: '조사 방법', slots: [{ id: 'm1', label: '지금 땅의 모습' }, { id: 'm2', label: '옛날 마을의 모습' }, { id: 'm3', label: '마을에서 하는 일' }], cards: ['가서 직접 보고 적기', '옛 사진과 어른 이야기', '마을 어른께 여쭤보기'] }, target: { match: { m1: '가서 직접 보고 적기', m2: '옛 사진과 어른 이야기', m3: '마을 어른께 여쭤보기' } }, difficulty: 0.2 },
              { prompt: '조사할 때 꼭 지킬 약속만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '조사 약속', cards: ['어른과 함께 가요', '모르는 사람을 따라가요', '조사한 것은 바로 적어요', '이름과 전화번호를 묻고 적어요'] }, target: { pick: ['어른과 함께 가요', '조사한 것은 바로 적어요'] }, difficulty: 0.15,
                predict: { q: '조사할 때 다른 사람의 이름과 연락처를 적어도 될까요?', options: ['적어도 돼요', '적지 않아요'], answer: 1 },
                conclude: '조사에서는 환경과 일을 알아보고 개인의 이름·연락처는 묻거나 적지 않아요.' },
              { prompt: '조사 계획 카드를 순서대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['알고 싶은 것 정하기', '갈 곳과 방법 정하기', '조사하고 기록하기', '알게 된 것 정리하기'] }, target: { order: ['알고 싶은 것 정하기', '갈 곳과 방법 정하기', '조사하고 기록하기', '알게 된 것 정리하기'] }, difficulty: 0.2 },
            ],
          },
        ],
        wrap: '"조사 계획에는 무엇이 들어가야 하나요?" 알고 싶은 것, 갈 곳, 방법, 약속이라는 말을 모은다. 출구 2번에서 이름과 연락처를 적는다고 고르는 학생이 있으면 조사의 목적이 환경 알기이고 사람 정보 모으기가 아니라는 점으로 돌아간다.',
        exit: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '조사 방법', slots: [{ id: 's1', label: '옛 사진 찾기' }, { id: 's2', label: '오늘 모습 보기' }], cards: ['도서관 책과 누리집', '직접 가서 보기'] }, prompt: '알고 싶은 것과 방법을 이으세요.', target: { match: { s1: '도서관 책과 누리집', s2: '직접 가서 보기' } }, difficulty: 0.2 },
          { type: 'choice', prompt: '조사를 시작하기 전에 가장 먼저 정할 것은 무엇인가요?', options: ['알고 싶은 것', '사진 찍는 개수', '돌아오는 시간 노래'], answer: 0, difficulty: 0.1, explain: '무엇을 알고 싶은지 정해야 갈 곳과 방법이 정해져요.' },
          { type: 'mood', prompt: '오늘 조사 계획 세우기는 어땠나요?' },
        ],
        wsTitle: '우리 고장 환경 조사 계획',
        ws: [
          { type: 'figure', wide: true, prompt: '푸른누리 지도에서 조사하러 갈 곳 두 곳에 ○ 하고 번호를 쓰세요.', tool: 'map', options: NURI_WS, figures: [{ caption: '푸른누리 지도' }], answer: '학생마다 다름 — 예: 1 숲, 2 항구' },
          { type: 'table', prompt: '조사 계획을 쓰세요.', columns: ['알고 싶은 것', '갈 곳', '알아보는 방법'], rows: 2, answer: '학생마다 다름 — 예: 바닷마을 사람들이 하는 일 / 항구 / 어른께 여쭤보기' },
          { type: 'check', prompt: '조사할 때 지킬 약속에 ✓ 하세요.', options: ['어른과 함께 가요', '이름과 연락처를 적어요', '본 것을 바로 적어요'], answer: '첫째와 셋째' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '옛날 모습은 ___과 어른의 이야기로 알아볼 수 있어요(옛 사진·산).', answer: '옛 사진' },
          { type: 'short', prompt: '조사한 뒤 어떻게 정리해서 친구에게 알려 줄지 한 가지 쓰세요.', answer: '학생마다 다름' },
        ],
        chal: '지도에서 이름이 사라진 상태로 장소를 찾고, 조사 계획 카드를 순서대로 놓은 뒤 빠진 단계를 스스로 찾아봐요.',
        notes: '자주 보이는 어려움: ① 알고 싶은 것 없이 곳곳을 가자고 한다 → 질문 한 가지에 장소와 방법 한 가지를 짝 지어 보게 한다. ② 옛 모습을 지금 가서 보면 알 수 있다고 생각한다 → 옛 사진·어른 이야기가 필요하다고 짚는다. ③ 조사에서 개인정보를 모으려 한다 → 환경과 일만 묻고 이름·연락처는 묻지 않게 한다. 지도는 지어낸 곳이며 실제 조사 장소는 교사가 안전과 허락 여부를 확인한다(확인 필요).',
      }),
      // ───────────────────────── 7차시 ─────────────────────────
      LS(7, {
        title: '개발 일이 일어난 차례와 지도 기호 읽기',
        obj: '바닷마을에서 개발이 일어난 차례를 놓고 개발 뒤 지도의 기호를 범례로 읽어 달라진 모습을 설명할 수 있다.',
        std: S1,
        ill: 'a long paper strip showing a seaside town changing step by step from a tidal flat to a seawall, fields and a small factory',
        say: '무엇이 먼저 생겼을까요?',
        extra: [{ motif: 'house', x: 130, y: 222 }, { motif: 'wave', x: 380, y: 230 }, { motif: 'bird', x: 240, y: 90 }],
        intro: {
          t: '"방조제를 쌓기 전에 논을 만들 수 있었을까요?" 일이 일어난 차례에는 까닭이 있다는 말을 이끌어 낸다. 오늘은 바닷마을에서 개발이 일어난 차례를 놓고, 지도의 기호를 범례로 읽어 달라진 곳을 설명한다. 이 차례는 지어낸 이야기이고 실제 간척은 지역마다 다르다고 알린다.',
          s: '집이나 학교 근처에서 새 길이나 건물이 생기기 전에 먼저 한 일은 무엇이었을지 이야기해 봅시다.',
          demo: { tool: 'map', options: W(COAST_AFTER, { mode: 'legend', meanings: AFTER_MEAN }), sequence: [{ legend: { port: '포구' } }] },
        },
        acts: [
          {
            title: '개발이 일어난 차례 놓기', tool: 'timeline', options: { axis: ['먼저', '나중'] },
            task: '카드를 읽고 먼저 일어난 일부터 왼쪽에 놓아요.',
            teacher: '"갯벌을 논으로 바꾸려면 어떤 일이 먼저일까요?" 바닷물을 막는 일이 먼저라는 까닭을 말하게 한다. 새 논이 생기고 나서 방조제를 쌓았다고 놓는 학생에게는 논이 생기려면 물이 막혀야 한다고 물어본다.',
            items: [
              { prompt: '바닷마을에서 개발이 일어난 차례대로 카드를 놓아 보세요.', toolOptions: { cards: ['갯벌이 넓은 마을이었어요', '방조제를 쌓기 시작했어요', '바닷물이 막혀 땅이 마르기 시작했어요', '새 논에서 처음 벼를 심었어요'] }, target: { order: ['갯벌이 넓은 마을이었어요', '방조제를 쌓기 시작했어요', '바닷물이 막혀 땅이 마르기 시작했어요', '새 논에서 처음 벼를 심었어요'] }, difficulty: 0.15,
                predict: { q: '새 논에 벼를 심기 전에 먼저 해야 할 일은 무엇일까요?', options: ['바닷물 막기', '공장 짓기'], answer: 0 },
                conclude: '바닷물을 막고 땅이 마른 뒤에야 논을 만들어 벼를 심을 수 있어요.' },
              { prompt: '논이 생긴 뒤 마을의 변화를 일어난 차례대로 놓아 보세요.', toolOptions: { cards: ['새 논 옆에 도로를 놓았어요', '공장이 들어섰어요', '일하러 오는 사람이 늘었어요', '마을에 버스가 다녀요'] }, target: { order: ['새 논 옆에 도로를 놓았어요', '공장이 들어섰어요', '일하러 오는 사람이 늘었어요', '마을에 버스가 다녀요'] }, difficulty: 0.25 },
              { prompt: '다섯 장을 가장 먼저 일어난 일부터 놓아 보세요.', toolOptions: { cards: ['포구에서 배를 탔어요', '방조제 공사를 시작했어요', '새 논이 생겼어요', '공장이 지어졌어요', '새 도로로 도시와 이어졌어요'] }, target: { order: ['포구에서 배를 탔어요', '방조제 공사를 시작했어요', '새 논이 생겼어요', '공장이 지어졌어요', '새 도로로 도시와 이어졌어요'] }, difficulty: 0.35 },
            ],
          },
          {
            title: '범례로 개발 뒤 지도 읽기', tool: 'map', options: W(COAST_AFTER, { mode: 'legend', meanings: AFTER_MEAN }),
            levels: { easy: { live: true }, base: {}, challenge: {} },
            task: '빈 칸을 눌러 기호의 뜻을 골라요. 개발 뒤 지도의 기호가 무엇인지 범례로 알아봐요.',
            teacher: '"이 기호가 무엇을 뜻하는지 어디서 알 수 있을까요?" 범례를 먼저 읽게 한다. 논과 밭을 같은 기호로 그린 것을 섞는 학생에게는 이 지도에서 같은 모양이 같은 뜻임을 알려 준다. 방조제 기호를 다리로만 읽는 학생에게는 바다 가장자리에 있다는 점을 짚는다.',
            items: [
              { prompt: '개발 뒤 지도의 범례 빈칸을 모두 채워 보세요.', target: { legend: { port: '포구', field: '논', bridge: '방조제', factory: '공장', house: '마을', forest: '숲' } }, difficulty: 0.25 },
              { prompt: '기호 이름이 없는 지도에서 방조제 기호와 공장 기호의 뜻을 채워 보세요.', toolOptions: { meanings: { bridge: '방조제', factory: '공장' } }, target: { legend: { bridge: '방조제', factory: '공장' } }, difficulty: 0.15 },
              { prompt: '포구와 마을 기호의 뜻을 채워 보세요.', toolOptions: { meanings: { port: '포구', house: '마을' } }, target: { legend: { port: '포구', house: '마을' } }, difficulty: 0.1 },
            ],
          },
        ],
        wrap: '"개발은 어떤 차례로 이어졌나요?" 방조제 → 마른 땅 → 논 → 공장 → 도로의 차례를 말하게 한다. 출구 1번에서 논이 방조제보다 먼저라고 놓는 학생이 있으면 활동 1의 첫 문항으로 돌아가 물이 막힌 뒤 논이 생긴다는 점을 다시 짚어 준다.',
        exit: [
          { type: 'tool', tool: 'timeline', options: { axis: ['먼저', '나중'], cards: ['방조제를 쌓았어요', '새 논이 생겼어요', '공장이 지어졌어요'] }, prompt: '세 장을 먼저 일어난 일부터 놓으세요.', target: { order: ['방조제를 쌓았어요', '새 논이 생겼어요', '공장이 지어졌어요'] }, difficulty: 0.2 },
          { type: 'choice', prompt: '지도에서 기호의 뜻을 알려 주는 것은 무엇인가요?', options: ['범례', '제목', '길'], answer: 0, difficulty: 0.1, explain: '범례는 기호가 무엇을 뜻하는지 모아 놓은 것이에요.' },
          { type: 'mood', prompt: '오늘 개발 차례 놓기는 어땠나요?' },
        ],
        wsTitle: '개발의 차례와 지도 기호',
        ws: [
          { type: 'figure', wide: true, prompt: '개발 뒤 지도에서 방조제와 공장 기호를 찾아 ○ 하세요.', tool: 'map', options: W(COAST_AFTER, COAST_WS), figures: [{ caption: '개발 뒤 바닷마을 지도' }], answer: '오른쪽 아래 방조제와 그 곁 공장 기호' },
          { type: 'table', prompt: '개발이 일어난 차례를 1, 2, 3으로 쓰세요.', columns: ['일', '차례'], cells: [['새 논이 생겼어요', ''], ['방조제를 쌓았어요', ''], ['공장이 지어졌어요', '']], answer: '새 논 2, 방조제 1, 공장 3' },
          { type: 'choice', prompt: '새 논을 만들기 전에 먼저 해야 하는 일에 ○ 하세요.', options: ['방조제를 쌓아 바닷물을 막아요', '공장을 지어요', '버스를 놓아요'], answer: '방조제를 쌓아 바닷물을 막아요' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '지도의 기호가 무엇을 뜻하는지 모아 놓은 것을 ___라고 해요(범례·축척).', answer: '범례' },
          { type: 'short', prompt: '개발이 일어난 차례 가운데 한 가지를 골라 그 앞에 먼저 한 일을 쓰세요.', answer: '예: 새 논을 만들기 전에 방조제를 쌓아 바닷물을 막았어요.' },
        ],
        chal: '카드가 다섯 장으로 늘고, 범례 빈칸 문항에서 이름이 없는 기호를 모두 채워요.',
        notes: '자주 보이는 어려움: ① 사건을 지어낸 차례 없이 눈에 보이는 것부터 놓는다 → 까닭(물이 막혀야 논이 된다)을 말하게 한다. ② 방조제를 다리로 읽는다 → 바닷물을 막는 둑이라는 뜻을 다시 알려 준다. ③ 이 차례는 지어낸 이야기이므로 실제 간척 사례는 연도·장소를 교사가 확인한 뒤 덧붙인다(확인 필요).',
      }),
      // ───────────────────────── 8차시 ─────────────────────────
      LS(8, {
        title: '개발의 좋은 점과 걱정되는 점 따져 보기',
        obj: '개발로 좋아진 점과 걱정되는 점을 자료로 나누어 말하고 내 생각을 까닭과 함께 말할 수 있다.',
        std: S1,
        ill: 'a balance scale holding a tiny rice field and a factory on one side and a flock of shorebirds on the other, set on a seaside town',
        say: '개발은 좋기만 할까요?',
        extra: [{ motif: 'bird', x: 130, y: 100 }, { motif: 'wave', x: 380, y: 230 }, { motif: 'tree', x: 250, y: 218 }],
        intro: {
          t: '"바다를 막아 논을 만들면 좋은 점만 있을까요?" 좋다는 학생과 걱정된다는 학생의 말을 칠판에 두 줄로 적는다. 갯벌이 줄면 조개를 캐던 사람과 갯벌에 사는 새는 어떻게 될지 묻고, 지금은 정답을 정하는 시간이 아니라 근거와 함께 생각을 말하는 시간이라고 알린다.',
          s: '새 도로나 공장이 생기면 좋은 점과 걱정되는 점을 하나씩 말해 봅시다.',
        },
        acts: [
          {
            title: '좋은 점과 걱정되는 점 나누기', tool: 'mindmap',
            task: '카드를 좋은 점과 걱정되는 점 가지로 나누어요.',
            teacher: '"새 논이 생긴 일은 모든 사람에게 좋을까요?" 벼 농사를 짓는 사람에게는 좋지만 갯벌에서 일하던 사람에게는 걱정이 될 수 있다는 말을 이끌어 낸다. 카드 하나가 좋은 점과 걱정되는 점에 모두 들어갈 때는 누구에게 그런지 말하게 한다.',
            items: [
              { prompt: '개발로 달라진 일을 좋은 점과 걱정되는 점으로 나누어 보세요.', toolOptions: { topic: '바닷마을 개발', slots: ['좋은 점', '걱정되는 점'], cards: ['새 논에서 쌀을 더 얻어요', '일할 곳이 늘었어요', '갯벌 생물이 줄었어요', '바닷물이 마을 앞에 오지 않아 포구에 배 대기가 불편해요'] }, target: { sort: { '좋은 점': ['새 논에서 쌀을 더 얻어요', '일할 곳이 늘었어요'], '걱정되는 점': ['갯벌 생물이 줄었어요', '바닷물이 마을 앞에 오지 않아 포구에 배 대기가 불편해요'] } }, difficulty: 0.25 },
              { prompt: '걱정되는 점을 줄이려는 노력만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '걱정 줄이기', cards: ['갯벌 일부는 그대로 두어요', '공장 물을 깨끗이 거른 뒤 내보내요', '아무 때나 공사해요', '갯벌 위에 쓰레기를 모아요'] }, target: { pick: ['갯벌 일부는 그대로 두어요', '공장 물을 깨끗이 거른 뒤 내보내요'] }, difficulty: 0.2 },
              { prompt: '내 생각과 그 까닭을 이어 보세요.', toolOptions: { mode: 'match', topic: '생각과 까닭', slots: [{ id: 'm1', label: '개발에 찬성해요' }, { id: 'm2', label: '개발이 조금 걱정돼요' }], cards: ['새 일자리가 생겨서요', '갯벌에 사는 생물이 줄어서요', '바다가 푸르러서요'] }, target: { match: { m1: '새 일자리가 생겨서요', m2: '갯벌에 사는 생물이 줄어서요' } }, difficulty: 0.25 },
            ],
          },
          {
            title: '지도로 사실 확인하고 생각 말하기', tool: 'map', options: W(COAST_AFTER, { readOnly: true }), levels: LV_MAP,
            task: '지도를 보고 질문에 답해요. 지도로 알 수 있는 것과 내 생각을 구별해요.',
            teacher: '"지도에 공장이 보이는 것은 사실이고, 공장이 있어서 살기 나빠졌다는 것은 무엇일까요?" 사실과 생각을 구별하게 한다. 지도에서 새 논이 몇 칸인지 세는 데 집중하다 공장은 놓치는 학생을 살핀다.',
            items: [
              { prompt: '지도에서 확실히 알 수 있는 것은 무엇인가요?', toolOptions: { ask: { choices: ['방조제가 있어요', '모든 사람이 공장을 좋아해요', '갯벌 새가 모두 떠났어요'], why: [null, '좋아하는지는 지도에 쓰여 있지 않아요.', '새가 떠났는지는 지도에 나와 있지 않아요.'] } }, target: { pick: 0 }, difficulty: 0.2,
                predict: { q: '지도만 보고 사람들의 마음을 알 수 있을까요?', options: ['알 수 있어요', '알 수 없어요'], answer: 1 },
                conclude: '지도에서는 장소와 모양을 알 수 있지만 사람들의 마음은 따로 물어야 알아요.' },
              { prompt: '공장이 생긴 일을 더 알아보려면 무엇이 도움이 될까요?', toolOptions: { ask: { choices: ['마을 어른께 여쭤보기', '지도 색 바꾸기', '글자 크기 키우기'], why: [null, '색을 바꿔도 새로운 사실은 알 수 없어요.', '글자만 키워서는 까닭을 알 수 없어요.'] } }, target: { pick: 0 }, difficulty: 0.2 },
              { prompt: '새 논과 공장 가운데 방조제에서 더 가까운 것은 어느 쪽인가요?', toolOptions: { ask: { choices: ['새 논', '공장'], why: [null, '공장은 방조제 위쪽 한 칸 옆이에요.'] } }, target: { pick: 0 }, difficulty: 0.3 },
            ],
          },
        ],
        wrap: '"개발의 좋은 점과 걱정되는 점을 하나씩 말해 볼까요? 그렇게 생각한 까닭은 무엇인가요?" 두세 명이 근거를 붙여 말하게 한다. 출구 2번에서 개발은 늘 나쁘다고 고르는 학생이 있으면 두 가지를 함께 따져 말하게 한다.',
        exit: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '생각과 까닭', slots: [{ id: 's1', label: '좋은 점' }, { id: 's2', label: '걱정되는 점' }], cards: ['논이 늘었어요', '갯벌이 줄었어요'] }, prompt: '개발로 달라진 점과 알맞은 가지를 이으세요.', target: { match: { s1: '논이 늘었어요', s2: '갯벌이 줄었어요' } }, difficulty: 0.2 },
          { type: 'choice', prompt: '개발에 대해 가장 알맞게 말한 것은 무엇인가요?', options: ['좋은 점과 걱정되는 점을 함께 따져 봐요', '늘 좋기만 해요', '늘 나쁘기만 해요'], answer: 0, difficulty: 0.15, explain: '개발은 사람에 따라 좋기도 하고 걱정되기도 해서 함께 따져 보아야 해요.' },
          { type: 'mood', prompt: '오늘 좋은 점과 걱정되는 점 따져 보기는 어땠나요?' },
        ],
        wsTitle: '개발의 좋은 점과 걱정되는 점',
        ws: [
          { type: 'figure', wide: true, prompt: '개발 뒤 지도에서 공장과 새 논 기호를 찾아 ○ 하세요.', tool: 'map', options: W(COAST_AFTER, COAST_WS), figures: [{ caption: '개발 뒤 바닷마을 지도' }], answer: '아래쪽 공장 기호와 가운데 새 논 기호' },
          { type: 'table', prompt: '개발의 좋은 점과 걱정되는 점을 한 가지씩 쓰세요.', columns: ['좋은 점', '걱정되는 점'], rows: 2, answer: '예: 일자리가 늘어요 / 갯벌 생물이 줄어요' },
          { type: 'check', prompt: '걱정되는 점을 줄이려는 노력에 ✓ 하세요.', options: ['갯벌 일부를 그대로 두어요', '공장 물을 깨끗이 해요', '쓰레기를 아무 데나 버려요'], answer: '첫째와 둘째' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '지도에서 알 수 있는 것은 ___이고, 사람들의 마음은 따로 물어야 해요(사실·그림).', answer: '사실' },
          { type: 'short', prompt: '개발에 대한 내 생각과 그 까닭을 쓰세요.', answer: '학생마다 다름' },
        ],
        chal: '카드가 더 섞여 좋은 점·걱정되는 점이 한 카드에 같이 들어가는 경우를 누구에게 그런지 말하며 정해요.',
        notes: '자주 보이는 어려움: ① 개발은 늘 좋거나 늘 나쁘다고 단정한다 → 사람과 상황에 따라 다르다고 짚고 근거를 묻는다. ② 지도에서 사람들의 마음까지 읽는다 → 지도로 아는 것과 따로 물어야 아는 것을 나눈다. ③ 이 차시에 쓰인 마을과 일은 지어낸 것이다. 실제 갯벌·간척지 사례는 교사가 출처를 확인한 뒤 다룬다(확인 필요).',
      }),
      // ───────────────────────── 9차시 ─────────────────────────
      LS(9, {
        title: '인구 지도로 시와 군의 모습 견주기',
        obj: '인구 지도에서 인구가 많은 지역과 적은 지역을 찾고 인구가 많은 도시의 모습을 군과 견주어 말할 수 있다.',
        std: S2,
        ill: 'a province map shaded darker where more people live, with tiny paper towers on the darkest city and tiny paper houses and fields on a pale county',
        say: '사람이 가장 많이 사는 곳은 어디일까요?',
        extra: [{ motif: 'house', x: 120, y: 224 }, { motif: 'house', x: 170, y: 222, color: 'sky', s: 0.8 }, { motif: 'tree', x: 350, y: 216 }],
        intro: {
          t: '"우리나라에서 사람이 가장 많이 모여 사는 곳에는 무엇이 많을까요?" 건물, 가게, 도로가 많다는 학생의 말을 칠판에 적는다. 오늘은 지어낸 푸른들도의 인구 지도에서 사람이 많은 곳을 찾고, 시와 군의 모습을 견준다고 알린다. 시연 단추로 인구가 가장 많은 지역에 핀이 꽂히는 모습을 보여 준다.',
          s: '내가 사는 곳은 시인지 군인지 떠올려 보고, 사람이 많이 사는 곳에 무엇이 있는지 말해 봅시다.',
          demo: { tool: 'map', options: W(PD_POP, { regionValues: true }), sequence: [{ most: true }] },
        },
        acts: [
          {
            title: '푸른들도 인구 지도 읽기', tool: 'map', options: PD_POP,
            levels: { easy: { regionValues: true }, base: { regionValues: true }, challenge: { regionValues: false } },
            task: '색이 진할수록 인구가 많아요. 범례와 지역 옆의 수를 보고 답해요.',
            teacher: '"색이 진한 곳은 사람이 많을까요, 적을까요?" 범례를 먼저 읽게 한다. 지역이 넓어 보이는 곳이 인구도 많다고 답하는 학생에게는 칸 수가 아니라 색과 수를 보라고 짚는다. 시와 군은 이름으로 구별하지 않고 인구와 모습으로 이해한다는 말을 덧붙인다.',
            items: [
              { prompt: '인구가 가장 많은 지역에 핀을 꽂아 보세요.', target: { most: true }, difficulty: 0.1 },
              { prompt: '인구가 가장 적은 지역에 핀을 꽂아 보세요.', toolOptions: { regionValues: true }, target: { least: true }, difficulty: 0.15 },
              { prompt: '인구가 20만 명보다 많은 지역은 모두 몇 곳인가요?', toolOptions: { readOnly: true, regionValues: true, ask: { choices: ['2곳', '3곳', '4곳'], why: ['큰바다시와 강나루시 말고 하나가 더 있어요.', null, '10만 명보다 적은 지역이 세 곳이에요.'] } }, target: { pick: 1 }, difficulty: 0.2,
                predict: { q: '이름에 시가 붙은 지역은 군보다 인구가 많을까요?', options: ['대체로 많아요', '언제나 같아요'], answer: 0 },
                conclude: '시는 인구가 많은 곳이 많지만 이름보다 실제 인구와 모습을 함께 봐야 해요.' },
            ],
          },
          {
            title: '시와 군의 모습 나누기', tool: 'mindmap',
            task: '카드를 읽고 사람이 많은 도시와 사람이 적은 군의 모습으로 나누어요.',
            teacher: '"도시에는 왜 높은 건물이 많을까요?" 좁은 땅에 많은 사람이 살고 일하려고 높게 짓는다는 말을 이끌어 낸다. 군에도 가게나 학교가 있다는 점을 알려 주어 모두 없다고 단정하지 않게 한다.',
            items: [
              { prompt: '카드 여섯 장을 도시와 군 가지로 나누어 보세요.', toolOptions: { topic: '푸른들도', slots: ['사람이 많은 도시', '사람이 적은 군'], cards: ['높은 건물과 아파트가 많아요', '버스와 전철이 자주 와요', '넓은 논과 밭이 있어요', '이웃 마을이 멀리 떨어져 있어요', '큰 병원과 백화점이 있어요', '조용하고 마을이 듬성듬성해요'] }, target: { sort: { '사람이 많은 도시': ['높은 건물과 아파트가 많아요', '버스와 전철이 자주 와요', '큰 병원과 백화점이 있어요'], '사람이 적은 군': ['넓은 논과 밭이 있어요', '이웃 마을이 멀리 떨어져 있어요', '조용하고 마을이 듬성듬성해요'] } }, difficulty: 0.25 },
              { prompt: '인구가 많은 도시에서 볼 수 있는 모습만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '도시의 모습', cards: ['출근 시간에 길이 막혀요', '가게와 식당이 길게 이어져요', '밭에서 경운기 소리가 들려요', '산비탈에 집이 몇 채뿐이에요'] }, target: { pick: ['출근 시간에 길이 막혀요', '가게와 식당이 길게 이어져요'] }, difficulty: 0.2 },
              { prompt: '지역과 그곳의 모습을 이어 보세요.', toolOptions: { mode: 'match', topic: '지역과 모습', slots: [{ id: 'm1', label: '큰바다시(74만 명)' }, { id: 'm2', label: '모래군(5만 명)' }], cards: ['사람이 매우 많아 건물이 빼곡해요', '사람이 적어 한적해요', '인구는 지도에 나오지 않아요'] }, target: { match: { m1: '사람이 매우 많아 건물이 빼곡해요', m2: '사람이 적어 한적해요' } }, difficulty: 0.25 },
            ],
          },
        ],
        wrap: '"사람이 많이 모인 도시에는 어떤 모습이 있나요?" 높은 건물, 많은 가게, 교통수단이라는 말을 모은다. 출구 2번에서 이름에 군이 붙은 지역은 모두 시골이라고 단정하는 학생이 있으면 인구와 모습을 함께 보아야 한다는 점으로 돌아간다.',
        exit: [
          { type: 'tool', tool: 'map', options: W(PD_POP, { regionValues: true, readOnly: true, ask: { q: '가장 진한 지역 이름은?', choices: ['큰바다시', '새별시', '솔들군'], why: [null, '새별시는 31만 명이에요.', '솔들군은 6만 명이에요.'] } }), prompt: '인구 지도에서 가장 색이 진한 지역을 고르세요.', target: { pick: 0 }, difficulty: 0.15 },
          { type: 'choice', prompt: '인구가 많이 모인 도시의 모습은 어느 것인가요?', options: ['높은 건물과 가게가 많아요', '논과 밭만 보여요', '사람이 거의 없어요'], answer: 0, difficulty: 0.1, explain: '사람이 많이 모이면 집, 가게, 일터가 늘어요.' },
          { type: 'mood', prompt: '오늘 인구 지도 읽기는 어땠나요?' },
        ],
        wsTitle: '인구 지도와 도시의 모습',
        ws: [
          { type: 'figure', wide: true, prompt: '인구가 가장 많은 지역과 가장 적은 지역에 ○ 하고 이름을 쓰세요.', tool: 'map', options: W(PD_POP, PD_WS), figures: [{ caption: '푸른들도 지역별 인구(만 명)' }], answer: '가장 많은 곳 큰바다시(74만 명), 가장 적은 곳 모래군(5만 명)' },
          { type: 'table', prompt: '두 지역을 견주어 쓰세요.', columns: ['지역', '인구(만 명)', '모습'], cells: [['큰바다시', '', ''], ['솔들군', '', '']], answer: '큰바다시 74·건물과 가게가 많음, 솔들군 6·논밭이 넓고 한적함' },
          { type: 'choice', prompt: '색이 진할수록 어떤 뜻인가요?', options: ['인구가 많아요', '인구가 적어요', '땅이 높아요'], answer: '인구가 많아요' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '사람이 많이 모인 도시에는 높은 ___과 가게가 많아요(건물·논).', answer: '건물' },
          { type: 'short', prompt: '내가 사는 곳은 푸른들도의 어느 지역과 모습이 비슷한지 까닭과 함께 쓰세요.', answer: '학생마다 다름' },
        ],
        chal: '인구 수가 지도에서 사라지고 색의 진하기만 읽으며, 시와 군을 이름이 아니라 모습으로 나누는 카드가 늘어요.',
        notes: '이 단원의 푸른들도·인구는 모두 지어낸 것이다. 자주 보이는 어려움: ① 지도가 넓은 곳이 인구도 많다고 읽는다 → 색과 수를 보게 한다. ② 시와 군을 이름만으로 나눈다 → 인구와 모습을 함께 본다. ③ 실제 도시의 인구는 통계청·지자체 자료에서 교사가 연도와 함께 확인한 값만 쓴다(확인 필요).',
      }),
      // ───────────────────────── 10차시 ─────────────────────────
      LS(10, {
        title: '도로·기차역·항구·공항으로 교통이 모이는 곳 찾기',
        obj: '지도에서 여러 교통시설이 모인 곳을 찾고 교통이 발달한 곳에 사람과 물건이 모이는 까닭을 말할 수 있다.',
        std: S2,
        ill: 'a paper city seen from above with a train station, a harbor with a boat and an airport joined by roads, with tiny paper cars on the roads',
        say: '길이 모이는 곳은 어디일까요?',
        extra: [{ motif: 'house', x: 130, y: 222 }, { motif: 'bird', x: 250, y: 90 }, { motif: 'wave', x: 390, y: 230 }],
        intro: {
          t: '"학교 앞에 큰 길이 여러 갈래로 만나면 무엇이 달라질까요?" 사람이 모이고 가게가 늘 것이라는 말을 이끌어 낸다. 오늘은 푸른들도 지도에서 도로·기차역·항구·공항이 어디에 모여 있는지 찾는다. 교통시설은 사람과 물건이 오가는 길이라는 뜻을 칠판에 적어 둔다.',
          s: '우리 동네에서 버스나 기차를 탈 수 있는 곳이 어디인지 떠올려 짝에게 말해 봅시다.',
          demo: { tool: 'map', options: PD, sequence: [{ place: '기차역' }, { place: '항구' }] },
        },
        acts: [
          {
            title: '교통시설이 있는 곳 찾기', tool: 'map', options: PD, levels: LV_MAP,
            task: '이야기에 나오는 교통시설을 지도에서 찾아 핀을 꽂아요.',
            teacher: '"비행기를 타려면 어디로 가야 할까요?" 교통수단에 맞는 시설을 말하게 한다. 항구와 공항을 모두 바다 가까이 있다고 섞는 학생에게는 지도에서 두 기호의 칸을 하나씩 짚게 한다. 도로는 모든 시설을 잇는 길이라는 말도 한다.',
            items: [
              { prompt: '기차를 타고 다른 도시로 가려는 사람이 가야 할 곳을 찾아 핀을 꽂아 보세요.', target: { place: '기차역' }, difficulty: 0.1 },
              { prompt: '큰 배로 짐을 싣고 내리는 곳을 찾아 핀을 꽂아 보세요.', target: { place: '항구' }, difficulty: 0.1 },
              { prompt: '도청에서 동쪽으로 두 칸 간 곳에서 공장 물건을 만들어요. 핀을 꽂아 보세요.', state: { pin: [3, 2] }, target: { from: '도청', dir: '동', steps: 2 }, difficulty: 0.2,
                predict: { q: '공장 가까이에 큰 길이 있으면 어떤 점이 좋을까요?', options: ['물건을 빨리 실어 나를 수 있어요', '아무 점도 없어요'], answer: 0 },
                conclude: '공장 가까이에 큰 길이 있으면 물건과 사람을 빨리 옮길 수 있어요.' },
              { prompt: '비행기를 탈 수 있는 공항을 찾아 핀을 꽂아 보세요.', target: { place: '공항' }, difficulty: 0.1 },
            ],
          },
          {
            title: '교통시설과 쓰임 잇기', tool: 'mindmap',
            task: '교통시설과 알맞은 쓰임을 이어요.',
            teacher: '"항구가 없는 곳에서 큰 배로 짐을 받을 수 있을까요?" 시설이 있어야 그 교통수단을 쓸 수 있다는 점을 짚는다. 기차역과 버스 터미널의 쓰임을 같게 말하는 학생에게는 기찻길과 도로의 차이를 묻는다.',
            items: [
              { prompt: '교통시설과 알맞은 쓰임을 이어 보세요.', toolOptions: { mode: 'match', topic: '교통시설', slots: [{ id: 'm1', label: '항구' }, { id: 'm2', label: '기차역' }, { id: 'm3', label: '공항' }], cards: ['큰 짐을 배로 실어 보내요', '기차를 타고 먼 도시로 가요', '비행기로 아주 먼 곳에 가요'] }, target: { match: { m1: '큰 짐을 배로 실어 보내요', m2: '기차를 타고 먼 도시로 가요', m3: '비행기로 아주 먼 곳에 가요' } }, difficulty: 0.15 },
              { prompt: '교통이 발달한 도시에서 볼 수 있는 일만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '교통이 발달하면', cards: ['여러 곳에서 사람들이 모여요', '가게와 일터가 늘어나요', '길이 없어 물건이 오지 못해요', '아무도 오가지 않아요'] }, target: { pick: ['여러 곳에서 사람들이 모여요', '가게와 일터가 늘어나요'] }, difficulty: 0.2 },
              { prompt: '교통수단을 빠른 것부터 느린 것까지 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['비행기', '기차', '자동차', '자전거'] }, target: { order: ['비행기', '기차', '자동차', '자전거'] }, difficulty: 0.2 },
            ],
          },
        ],
        wrap: '"교통이 발달한 곳에는 왜 사람이 많이 모일까요?" 여러 곳을 오갈 수 있고 일터와 가게가 생기기 쉽다는 말을 모은다. 출구 1번에서 항구와 공항을 섞는 학생이 있으면 활동 2의 첫 문항으로 돌아가게 한다.',
        exit: [
          { type: 'tool', tool: 'map', options: W(PD, { names: false }), prompt: '이름 없는 푸른들도 지도에서 항구를 찾아 핀을 꽂으세요.', target: { place: '항구' }, difficulty: 0.2 },
          { type: 'choice', prompt: '큰 길과 기차역, 항구가 가까이 모인 도시에서 가장 늘기 쉬운 것은 무엇인가요?', options: ['오가는 사람과 물건', '높은 산', '논의 넓이'], answer: 0, difficulty: 0.15, explain: '교통이 편리하면 사람과 물건이 많이 모여요.' },
          { type: 'mood', prompt: '오늘 교통시설 찾기는 어땠나요?' },
        ],
        wsTitle: '교통이 모이는 곳',
        ws: [
          { type: 'figure', wide: true, prompt: '푸른들도 지도에서 기차역과 항구에 ○ 하세요.', tool: 'map', options: W(PD, { title: '', legend: false, regionNames: false }), figures: [{ caption: '푸른들도 교통 지도' }], answer: '가운데 기차역 기호와 아래쪽 항구 기호' },
          { type: 'table', prompt: '교통시설과 쓰임을 이어서 쓰세요.', columns: ['교통시설', '쓰임'], cells: [['항구', ''], ['기차역', ''], ['공항', '']], answer: '항구: 배로 짐을 실어 보내요, 기차역: 기차를 타요, 공항: 비행기를 타요' },
          { type: 'choice', prompt: '비행기를 타려면 어느 시설에 가야 하나요?', options: ['공항', '항구', '버스 터미널'], answer: '공항' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '교통이 편리하면 사람과 ___이 많이 모여요(물건·산).', answer: '물건' },
          { type: 'short', prompt: '우리 동네에서 사람들이 가장 많이 타는 교통수단과 그 까닭을 쓰세요.', answer: '학생마다 다름' },
        ],
        chal: '이름이 사라져 기호만으로 시설을 찾고, 지도에서 교통이 모이는 곳이 어디인지 까닭과 함께 말해 봐요.',
        notes: '자주 보이는 어려움: ① 항구와 공항을 같은 시설로 섞는다 → 배와 비행기를 먼저 떠올리게 한다. ② 교통이 발달하면 좋은 점만 말한다 → 길이 막히거나 소음이 느는 걱정도 함께 말해 보게 한다. ③ 지도는 지어낸 곳이며 실제 도시의 교통 현황은 교사가 최신 자료를 확인한 뒤 덧붙인다(확인 필요).',
      }),
      // ───────────────────────── 11차시 ─────────────────────────
      LS(11, {
        title: '큰바다시 인구 변화를 꺾은선그래프로 읽기',
        obj: '꺾은선그래프로 도시의 인구가 시간에 따라 어떻게 변했는지 읽고 늘어난 정도를 견주어 말할 수 있다.',
        std: S2,
        ill: 'a rising line graph made of paper strips climbing over a growing city of tiny paper towers, with a paper sun at the end',
        say: '인구는 어떻게 달라졌을까요?',
        extra: [{ motif: 'house', x: 130, y: 222 }, { motif: 'house', x: 175, y: 222, color: 'sky', s: 0.9 }, { motif: 'star', x: 360, y: 86 }],
        intro: {
          t: '"20년 전의 큰바다시와 지금의 큰바다시는 같은 모습일까요?" 사람이 늘면 집과 학교가 더 필요하다는 학생 말을 받는다. 인구의 변화는 꺾은선그래프로 볼 수 있고 선이 올라가면 늘었다는 뜻이라고 알려 준다. 오늘 쓰는 인구는 지어낸 값이다.',
          s: '우리 학교 학생 수가 해마다 어떻게 달라졌을지 떠올려 보고, 그래프로 나타내면 어떤 모양일지 말해 봅시다.',
          demo: { tool: 'chart', options: { type: 'line', title: '큰바다시 인구 변화', data: POP_TREND, unit: '만 명', scale: 10, xLabel: '때', yLabel: '인구', showValues: true, showTable: false }, sequence: [{ build: true }] },
        },
        acts: [
          {
            title: '인구 변화 꺾은선그래프 그리기', tool: 'chart', levels: LV_CHART,
            task: '표의 값을 보고 점을 올리거나 내려요. 점에 Tab으로 가서 ↑·↓로도 바꿀 수 있어요.',
            teacher: '"눈금 한 칸은 몇 만 명일까요?" 눈금 읽기부터 한다. 점은 정확히 값의 높이에 찍고 점을 선으로 잇는다는 순서를 짚는다. 점을 모두 눈금 위에만 찍으려 하는 학생에게는 눈금 사이에 놓이는 값도 있다는 것을 보여 준다.',
            items: [
              { prompt: '큰바다시의 20년 전과 10년 전 인구를 꺾은선그래프로 나타내 보세요.', toolOptions: { type: 'line', title: '큰바다시 인구 변화', data: [['20년 전', 48], ['10년 전', 62]], unit: '만 명', scale: 10, xLabel: '때', yLabel: '인구' }, target: { build: true }, difficulty: 0.15 },
              { prompt: '큰바다시 인구 표를 보고 꺾은선그래프를 완성해 보세요.', toolOptions: { type: 'line', title: '큰바다시 인구 변화', data: POP_TREND, unit: '만 명', scale: 10, xLabel: '때', yLabel: '인구', given: [0] }, target: { build: true }, difficulty: 0.25,
                levels: { easy: { toolOptions: { given: [0, 1, 2] } }, challenge: { toolOptions: { given: [] } } },
                conclude: '큰바다시 인구는 20년 전 48만 명에서 지금 74만 명으로 늘었어요.' },
              { prompt: '새별시의 20년 전과 지금 인구를 꺾은선그래프로 나타내 보세요.', toolOptions: { type: 'line', title: '새별시 인구 변화', data: [['20년 전', 22], ['지금', 31]], unit: '만 명', scale: 10, xLabel: '때', yLabel: '인구' }, target: { build: true }, difficulty: 0.2 },
            ],
          },
          {
            title: '꺾은선그래프 읽기', tool: 'chart', levels: LV_CHART,
            task: '그래프를 읽고 질문에 답해요. 선이 얼마나 가파른지 눈여겨봐요.',
            teacher: '"선이 가장 가파르게 올라간 때는 언제일까요?" 인구가 가장 많이 늘어난 때가 선이 가장 가파른 곳이라는 연결을 짚는다. 점의 높이를 읽을 때 눈금 한 칸이 10만 명이라는 것을 다시 확인하게 한다.',
            items: [
              { prompt: '그래프를 보고 5년 전 큰바다시 인구가 몇 만 명인지 쓰세요.', toolOptions: { type: 'line', mode: 'read', title: '큰바다시 인구 변화', data: POP_TREND, unit: '만 명', scale: 10, xLabel: '때', question: '5년 전 큰바다시 인구는 몇 만 명인가요?' }, target: { value: 70 }, difficulty: 0.2 },
              { prompt: '인구가 가장 많이 늘어난 때를 골라 보세요.', toolOptions: { type: 'line', mode: 'read', title: '큰바다시 인구 변화', data: POP_TREND, unit: '만 명', scale: 10, xLabel: '때', choices: ['20년 전→10년 전', '10년 전→5년 전', '5년 전→지금'], why: [null, '10년 전에서 5년 전까지는 8만 명 늘었어요.', '5년 전에서 지금까지는 4만 명 늘었어요.'], explain: '20년 전에서 10년 전까지 14만 명 늘어 가장 많이 늘었어요.' }, target: { pick: 0 }, difficulty: 0.25,
                predict: { q: '선이 가파를수록 인구는 어떻게 변한 걸까요?', options: ['많이 늘었어요', '조금 늘었어요'], answer: 0 },
                conclude: '선이 가파르게 올라간 때는 인구가 짧은 동안 많이 늘어난 때예요.' },
              { prompt: '그래프에서 지금 인구는 20년 전보다 몇 만 명 늘었나요?', toolOptions: { type: 'line', mode: 'read', title: '큰바다시 인구 변화', data: POP_TREND, unit: '만 명', scale: 10, xLabel: '때', question: '지금 인구는 20년 전보다 몇 만 명 늘었나요?' }, target: { value: 26 }, difficulty: 0.3 },
            ],
          },
          {
            title: '인구가 늘면 생길 수 있는 일 생각하기', tool: 'mindmap',
            task: '카드를 읽고 인구가 늘면 생길 수 있는 일을 골라요.',
            teacher: '"인구가 늘어나면 어떤 시설이 더 필요할까요?" 집, 학교, 길, 병원, 쓰레기 처리가 더 필요하다는 말을 이끌어 낸다. 인구가 늘면 무조건 살기 좋아진다고 단정하는 학생에게는 걱정도 함께 있다는 점을 짚는다.',
            items: [
              { prompt: '인구가 늘면 생길 수 있는 일만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '인구가 늘면', cards: ['아파트와 학교가 더 필요해요', '버스 길이 더 필요해요', '병원과 가게가 줄어요', '논밭이 도시 안으로 더 들어와요'] }, target: { pick: ['아파트와 학교가 더 필요해요', '버스 길이 더 필요해요'] }, difficulty: 0.25 },
              { prompt: '그래프 모양과 알맞은 말을 이어 보세요.', toolOptions: { mode: 'match', topic: '선의 모양', slots: [{ id: 'm1', label: '선이 올라가요' }, { id: 'm2', label: '선이 거의 평평해요' }], cards: ['인구가 늘었어요', '인구가 거의 그대로예요', '인구가 사라졌어요'] }, target: { match: { m1: '인구가 늘었어요', m2: '인구가 거의 그대로예요' } }, difficulty: 0.2 },
              { prompt: '자료로 알 수 있는 사실만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '사실', cards: ['큰바다시 인구는 지금 74만 명이에요', '큰바다시가 가장 살기 좋아요', '20년 전 인구는 48만 명이었어요', '모든 사람이 큰바다시에 살고 싶어 해요'] }, target: { pick: ['큰바다시 인구는 지금 74만 명이에요', '20년 전 인구는 48만 명이었어요'] }, difficulty: 0.25 },
            ],
          },
        ],
        wrap: '"꺾은선그래프에서 선이 올라가면 무엇이 달라졌다는 뜻일까요?" 값이 늘었다는 뜻이라는 말을 모은다. 출구 2번에서 인구가 늘면 무조건 좋다는 학생이 있으면 활동 3의 사실·생각 구별로 돌아간다.',
        exit: [
          { type: 'tool', tool: 'chart', options: { type: 'line', mode: 'read', title: '새별시 인구 변화', data: [['20년 전', 22], ['10년 전', 26], ['지금', 31]], unit: '만 명', scale: 10, xLabel: '때', choices: ['20년 전', '10년 전', '지금'], why: ['가장 낮은 점이에요.', '두 번째 점이에요.', null], explain: '선이 가장 높이 올라간 때가 지금(31만 명)이에요.' }, prompt: '새별시 그래프에서 인구가 가장 많은 때를 고르세요.', target: { pick: 2 }, difficulty: 0.2 },
          { type: 'choice', prompt: '인구가 늘면 먼저 더 필요한 것은 무엇일까요?', options: ['집과 학교', '높은 산', '빈 땅'], answer: 0, difficulty: 0.15, explain: '사람이 늘면 살 집과 다닐 학교가 더 필요해요.' },
          { type: 'mood', prompt: '오늘 꺾은선그래프 읽기는 어땠나요?' },
        ],
        wsTitle: '인구 변화 읽기',
        ws: [
          { type: 'table', prompt: '표를 보고 빈칸을 채우세요. 5년 전은 70만 명입니다.', columns: ['때', '20년 전', '10년 전', '5년 전', '지금'], cells: [['큰바다시 인구(만 명)', '48', '', '70', '']], answer: '10년 전 62, 지금 74' },
          { type: 'choice', prompt: '표에서 인구가 가장 많았던 때에 ○ 하세요.', options: ['20년 전', '10년 전', '지금'], answer: '지금' },
          { type: 'blank', prompt: '표를 보고 빈칸에 알맞은 수를 쓰세요.', text: '큰바다시 인구는 20년 전보다 지금이 ___만 명 늘었어요.', answer: '26' },
          { type: 'check', prompt: '자료로 알 수 있는 것에 ✓ 하세요.', options: ['인구가 20년 전보다 늘었어요', '모든 사람이 행복해졌어요', '5년 전에는 70만 명이었어요'], answer: '첫째와 셋째' },
          { type: 'short', prompt: '인구가 늘면 필요한 시설 한 가지와 그 까닭을 쓰세요.', answer: '예: 학교가 필요해요. 사는 어린이가 늘기 때문이에요.' },
        ],
        chal: '그래프에 미리 그려진 점이 없고, 읽기 문항에서 두 구간의 늘어난 양을 직접 견주어요.',
        notes: '이 차시의 인구는 모두 지어낸 값이다. 자주 보이는 어려움: ① 점의 높이를 눈금 한 칸의 수로만 읽는다 → 눈금 한 칸이 10만 명임을 확인한다. ② 선의 가파른 정도를 값의 크기로 섞는다 → 늘어난 양이 클수록 가파르다고 짚는다. ③ 실제 도시의 인구 변화는 통계청 자료의 연도를 교사가 확인한 뒤 다룬다(확인 필요).',
      }),
      // ───────────────────────── 12차시 ─────────────────────────
      LS(12, {
        title: '그림그래프로 도시 사람들이 일하는 곳 읽기',
        obj: '그림그래프로 도시 사람들이 일하는 곳의 수를 읽고 도시와 농어촌의 산업 모습이 다름을 말할 수 있다.',
        std: S2,
        ill: 'a picture graph built from tiny paper icons of a factory, a shop, a school and a rice plant, hanging above a busy paper city',
        say: '어디에서 일하는 사람이 가장 많을까요?',
        extra: [{ motif: 'house', x: 130, y: 222 }, { motif: 'tree', x: 350, y: 216 }, { motif: 'bird', x: 240, y: 90 }],
        intro: {
          t: '"도시 사람들은 어떤 곳에서 일할까요? 우리 가족이 일하는 곳을 떠올려 볼까요?" 공장, 가게, 학교, 병원이라는 학생의 말을 칠판에 모은다. 일하는 곳의 종류를 산업이라고 부르고, 도시에서는 가게와 공장, 학교와 병원에서 일하는 사람이 많다는 것을 그림그래프로 확인한다고 알린다. 오늘 쓰는 수는 지어낸 값이다.',
          s: '우리 가족이 일하는 곳이 공장, 가게, 학교·병원, 농어업 가운데 어디에 가까운지 떠올려 봅시다(이름은 말하지 않아도 돼요).',
          demo: { tool: 'chart', options: { type: 'picture', title: '큰바다시 일하는 곳', data: WORK_DATA, unit: '백 명', icons: [{ value: 10, name: '1000명' }, { value: 1, name: '100명' }] }, sequence: [{ build: true }] },
        },
        acts: [
          {
            title: '일하는 곳 그림그래프 그리기', tool: 'chart', levels: LV_CHART,
            task: '큰 그림은 1000명, 작은 그림은 100명이에요. 줄에서 →·←와 PageUp·PageDown으로 바꿀 수 있어요.',
            teacher: '"큰 그림 둘과 작은 그림 넷이면 모두 몇 명일까요?" 큰 그림과 작은 그림의 값을 먼저 읽게 한다. 표의 값이 백 명 단위로 쓰여 있다는 점을 놓치는 학생을 살핀다. 농어업의 값이 가장 작은 까닭을 도시에 논밭이 적기 때문이라고 연결해 말해 준다.',
            items: [
              { prompt: '가게·식당에서 일하는 사람 수를 그림그래프로 나타내 보세요.', toolOptions: { type: 'picture', title: '큰바다시 일하는 곳', data: [['가게·식당', 31]], unit: '백 명', icons: [{ value: 10, name: '1000명' }, { value: 1, name: '100명' }] }, target: { build: true }, difficulty: 0.15 },
              { prompt: '네 곳의 일하는 사람 수를 그림그래프로 완성해 보세요.', toolOptions: { type: 'picture', title: '큰바다시 일하는 곳', data: WORK_DATA, unit: '백 명', icons: [{ value: 10, name: '1000명' }, { value: 1, name: '100명' }], given: [0] }, target: { build: true }, difficulty: 0.25,
                levels: { easy: { toolOptions: { given: [0, 1, 2] } }, challenge: { toolOptions: { given: [] } } },
                conclude: '큰바다시에서는 가게·식당에서 일하는 사람이 3100명으로 가장 많아요.' },
              { prompt: '학교·병원과 농어업만 그림그래프로 나타내 보세요.', toolOptions: { type: 'picture', title: '일하는 곳 두 가지', data: [['학교·병원', 18], ['농어업', 3]], unit: '백 명', icons: [{ value: 10, name: '1000명' }, { value: 1, name: '100명' }] }, target: { build: true }, difficulty: 0.2 },
            ],
          },
          {
            title: '일하는 곳 그림그래프 읽고 짝 짓기', tool: 'chart', levels: LV_CHART,
            task: '그림그래프를 읽고 질문에 답해요.',
            teacher: '"일하는 사람이 가장 적은 곳은 어디일까요?" 그림 줄을 눈으로 훑어 짐작한 뒤 수를 읽게 한다. 공장에서 일하는 사람이 많다고 도시에서 농사가 전혀 없는 것은 아니라는 점을 짚는다. 값을 읽을 때 큰 그림은 10으로, 작은 그림은 1로 센다는 말을 반복한다.',
            items: [
              { prompt: '그림그래프를 보고 일하는 사람이 가장 많은 곳을 고르세요.', toolOptions: { type: 'picture', mode: 'read', title: '큰바다시 일하는 곳', data: WORK_DATA, unit: '백 명', icons: [{ value: 10, name: '1000명' }, { value: 1, name: '100명' }], choices: ['공장', '가게·식당', '학교·병원'], why: ['공장은 두 번째로 많아요.', null, '학교·병원은 세 번째예요.'] }, target: { pick: 1 }, difficulty: 0.15 },
              { prompt: '그림그래프에서 공장에서 일하는 사람은 몇 백 명인지 쓰세요.', toolOptions: { type: 'picture', mode: 'read', title: '큰바다시 일하는 곳', data: WORK_DATA, unit: '백 명', icons: [{ value: 10, name: '1000명' }, { value: 1, name: '100명' }], question: '공장에서 일하는 사람은 몇 백 명인가요?' }, target: { value: 24 }, difficulty: 0.2,
                predict: { q: '도시와 농촌 가운데 농어업이 더 많은 곳은 어디일까요?', options: ['도시', '농촌'], answer: 1 },
                conclude: '큰바다시는 도시라서 농어업에서 일하는 사람이 가장 적어요.' },
              { prompt: '그림그래프에서 학교·병원에서 일하는 사람은 농어업에서 일하는 사람보다 몇 백 명 더 많은가요?', toolOptions: { type: 'picture', mode: 'read', title: '큰바다시 일하는 곳', data: WORK_DATA, unit: '백 명', icons: [{ value: 10, name: '1000명' }, { value: 1, name: '100명' }], question: '학교·병원은 농어업보다 몇 백 명 더 많은가요?' }, target: { value: 15 }, difficulty: 0.3 },
            ],
          },
        ],
        wrap: '"도시에서 일하는 사람이 많은 곳은 어디였나요?" 가게·식당, 공장, 학교·병원이라는 말을 모은다. 출구 1번에서 큰 그림 하나를 1000명이 아니라 1명으로 읽는 학생이 있으면 그림 단위를 먼저 읽게 한다.',
        exit: [
          { type: 'tool', tool: 'chart', options: { type: 'picture', mode: 'read', title: '큰바다시 일하는 곳', data: WORK_DATA, unit: '백 명', icons: [{ value: 10, name: '1000명' }, { value: 1, name: '100명' }], question: '가게·식당에서 일하는 사람은 몇 백 명인가요?' }, prompt: '그림그래프에서 가게·식당에서 일하는 사람 수를 쓰세요.', target: { value: 31 }, difficulty: 0.2 },
          { type: 'choice', prompt: '도시에서 일하는 곳으로 가장 알맞은 것은 무엇인가요?', options: ['가게와 공장', '넓은 논', '깊은 산속'], answer: 0, difficulty: 0.1, explain: '도시에는 가게, 공장, 학교, 병원 같은 일터가 많아요.' },
          { type: 'mood', prompt: '오늘 그림그래프 읽기는 어땠나요?' },
        ],
        wsTitle: '도시 사람들이 일하는 곳',
        ws: [
          { type: 'table', prompt: '그림그래프를 읽고 표를 채우세요. 큰 그림은 1000명, 작은 그림은 100명입니다.', columns: ['일하는 곳', '큰 그림', '작은 그림', '일하는 사람(백 명)'], cells: [['공장', '2', '4', ''], ['가게·식당', '3', '1', ''], ['농어업', '', '3', '3']], answer: '공장 24, 가게·식당 31, 농어업 큰 그림 0' },
          { type: 'choice', prompt: '도시에서 일하는 사람이 가장 적은 곳에 ○ 하세요.', options: ['공장', '가게·식당', '농어업'], answer: '농어업' },
          { type: 'blank', prompt: '표를 보고 빈칸을 채우세요.', text: '공장에서 일하는 사람은 농어업보다 ___백 명 더 많아요.', answer: '21' },
          { type: 'check', prompt: '그림그래프로 알 수 있는 것에 ✓ 하세요.', options: ['가게·식당에서 일하는 사람이 가장 많아요', '농어업은 소중하지 않아요', '학교·병원은 1800명이에요'], answer: '첫째와 셋째' },
          { type: 'short', prompt: '도시에서 가게와 공장에서 일하는 사람이 많은 까닭을 한 문장으로 쓰세요.', answer: '예: 사람이 많이 모여 살아 물건을 사고 파는 곳과 만드는 곳이 많이 필요하기 때문이에요.' },
        ],
        chal: '그림그래프 줄이 미리 그려져 있지 않고, 읽기 문항에서 두 곳의 차이를 직접 계산해요.',
        notes: '이 차시의 수는 모두 지어낸 값이다. 자주 보이는 어려움: ① 그림 수와 사람 수를 같다고 쓴다 → 단위를 곱하게 한다. ② 값이 작은 산업을 덜 소중하다고 말한다 → 일하는 사람 수는 많고 적음일 뿐 가치의 크고 작음이 아니라고 짚는다. ③ 실제 산업별 일하는 사람 수는 통계청 자료의 연도·출처를 교사가 확인한 뒤 다룬다(확인 필요).',
      }),
      // ───────────────────────── 13차시 ─────────────────────────
      LS(13, {
        title: '도시별 버스 이용 자료를 표와 가로 막대그래프로 견주기',
        obj: '도시와 군의 버스 이용 자료를 가로 막대그래프와 표로 읽어 교통과 인구가 이어져 있다는 것을 말할 수 있다.',
        std: S2,
        ill: 'a horizontal bar chart made of paper buses lined up beside a paper city and a small county, with a ticket gate in front',
        say: '버스를 가장 많이 타는 곳은 어디일까요?',
        extra: [{ motif: 'house', x: 130, y: 222 }, { motif: 'star', x: 360, y: 86 }, { motif: 'tree', x: 350, y: 216 }],
        intro: {
          t: '"하루에 버스를 가장 많이 타는 도시는 어디일까요? 인구와 관계가 있을까요?" 학생의 짐작을 칠판에 적고 그래프를 보고 다시 확인하자고 말한다. 가로 막대그래프는 막대가 옆으로 길어질수록 값이 크다는 것을 알려 준다. 오늘 쓰는 이용자 수는 지어낸 값이다.',
          s: '우리 가족이 하루에 타는 교통수단이 무엇인지 떠올려 보고, 많은 사람이 타는 교통수단은 무엇일지 말해 봅시다.',
          demo: { tool: 'chart', options: { type: 'bar', horizontal: true, title: '하루 버스 이용자', data: BUS_DATA, unit: '천 명', scale: 10, xLabel: '지역', showValues: true, showTable: false }, sequence: [{ build: true }] },
        },
        acts: [
          {
            title: '버스 이용자 가로 막대그래프 그리기', tool: 'chart', levels: LV_CHART,
            task: '표의 값을 보고 막대를 길게 하거나 짧게 해요. 가로 막대는 →·←로 바꿔요.',
            teacher: '"가로 막대에서는 어느 쪽 끝이 값을 알려 줄까요?" 막대 끝이 눈금과 만나는 곳을 읽게 한다. 눈금 한 칸이 10천 명이라는 것을 확인하고 값이 4처럼 작을 때는 눈금보다 짧게 그린다는 것을 보여 준다.',
            items: [
              { prompt: '큰바다시와 강나루시의 하루 버스 이용자를 가로 막대그래프로 나타내 보세요.', toolOptions: { type: 'bar', horizontal: true, title: '하루 버스 이용자', data: [['큰바다시', 62], ['강나루시', 48]], unit: '천 명', scale: 10, xLabel: '지역' }, target: { build: true }, difficulty: 0.15 },
              { prompt: '네 지역의 하루 버스 이용자 가로 막대그래프를 완성해 보세요.', toolOptions: { type: 'bar', horizontal: true, title: '하루 버스 이용자', data: BUS_DATA, unit: '천 명', scale: 10, xLabel: '지역', given: [0] }, target: { build: true }, difficulty: 0.25,
                levels: { easy: { toolOptions: { given: [0, 1, 2] } }, challenge: { toolOptions: { given: [] } } },
                conclude: '인구가 많은 큰바다시가 하루 62천 명으로 버스 이용자가 가장 많아요.' },
              { prompt: '새별시와 솔들군의 하루 버스 이용자만 가로 막대그래프로 나타내 보세요.', toolOptions: { type: 'bar', horizontal: true, title: '새별시와 솔들군', data: [['새별시', 27], ['솔들군', 4]], unit: '천 명', scale: 10, xLabel: '지역' }, target: { build: true }, difficulty: 0.2 },
            ],
          },
          {
            title: '막대그래프와 표 함께 읽기', tool: 'chart', levels: LV_CHART,
            task: '그래프를 읽고 표의 빈칸을 채우거나 질문에 답해요.',
            teacher: '"표와 그래프는 같은 자료일까요?" 같은 값을 다른 모양으로 나타낸 것이라는 점을 짚는다. 그래프에서 막대 끝 값을 읽어 표 빈칸에 쓰게 한다. 인구가 많은 지역이 항상 버스도 많다고 단정하지 말고 이번 지어낸 자료에서는 그렇다고 말한다.',
            items: [
              { prompt: '막대그래프를 보고 표의 빈칸에 이용자 수를 써 넣으세요.', toolOptions: { type: 'bar', horizontal: true, mode: 'read', title: '하루 버스 이용자', data: BUS_DATA, unit: '천 명', scale: 10, xLabel: '지역', showTable: true, tableBlanks: [1, 2] }, target: { table: true }, difficulty: 0.3 },
              { prompt: '그래프에서 버스 이용자가 두 번째로 많은 지역을 고르세요.', toolOptions: { type: 'bar', horizontal: true, mode: 'read', title: '하루 버스 이용자', data: BUS_DATA, unit: '천 명', scale: 10, xLabel: '지역', choices: ['큰바다시', '강나루시', '새별시'], why: ['큰바다시는 가장 긴 막대예요.', null, '새별시는 세 번째예요.'] }, target: { pick: 1 }, difficulty: 0.15 },
              { prompt: '큰바다시와 새별시의 하루 버스 이용자는 몇 천 명 차이인가요?', toolOptions: { type: 'bar', horizontal: true, mode: 'read', title: '하루 버스 이용자', data: BUS_DATA, unit: '천 명', scale: 10, xLabel: '지역', question: '큰바다시는 새별시보다 몇 천 명 더 많은가요?' }, target: { value: 35 }, difficulty: 0.3,
                predict: { q: '인구가 많은 도시일수록 버스 이용자도 많을까요?', options: ['대체로 많아요', '언제나 같아요'], answer: 0 },
                conclude: '큰바다시(74만 명)가 새별시(31만 명)보다 버스 이용자가 35천 명 더 많아요.' },
            ],
          },
          {
            title: '자료와 까닭 이어 보기', tool: 'mindmap',
            task: '그래프에서 알 수 있는 사실과 그렇게 된 까닭으로 생각해 볼 수 있는 말을 이어요.',
            teacher: '"솔들군에서 버스를 덜 타는 까닭은 무엇일까요?" 인구가 적고 집이 멀리 떨어져 있어서일 수 있다는 짐작을 이끌어 낸다. 까닭은 자료만으로는 확실하지 않고 짐작이라고 말하는 습관을 짚는다. 도시가 모두 버스를 많이 탄다고 단정하는 학생에게는 새별시와 큰바다시의 차이를 다시 보게 한다.',
            items: [
              { prompt: '그래프의 사실과 알맞은 짐작을 이어 보세요.', toolOptions: { mode: 'match', topic: '사실과 짐작', slots: [{ id: 'm1', label: '큰바다시는 버스 이용자가 가장 많아요' }, { id: 'm2', label: '솔들군은 이용자가 가장 적어요' }], cards: ['인구가 많아 오가는 사람이 많을 거예요', '인구가 적고 집이 멀리 떨어져 있을 거예요', '버스가 아주 싸서 그럴 거예요'] }, target: { match: { m1: '인구가 많아 오가는 사람이 많을 거예요', m2: '인구가 적고 집이 멀리 떨어져 있을 거예요' } }, difficulty: 0.25 },
              { prompt: '자료로 알 수 있는 사실만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '버스 자료', cards: ['강나루시는 하루 48천 명이 버스를 타요', '새별시 사람들이 버스를 싫어해요', '솔들군은 4천 명이 버스를 타요', '큰바다시 버스는 늘 늦어요'] }, target: { pick: ['강나루시는 하루 48천 명이 버스를 타요', '솔들군은 4천 명이 버스를 타요'] }, difficulty: 0.25 },
              { prompt: '버스 이용자가 많은 도시에서 더 필요할 수 있는 것을 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '더 필요한 것', cards: ['버스 정류장과 노선', '버스 기사님 쉬는 곳', '버스가 다니지 않는 길', '빈 정류장'] }, target: { pick: ['버스 정류장과 노선', '버스 기사님 쉬는 곳'] }, difficulty: 0.25 },
            ],
          },
        ],
        wrap: '"버스 이용자 자료로 알 수 있는 것은 무엇이고 짐작해 보는 것은 무엇인가요?" 값과 순서는 사실이고 까닭은 짐작이라는 말을 모은다. 출구 2번에서 까닭을 사실로 고르는 학생이 있으면 활동 3의 사실·짐작 구별로 돌아간다.',
        exit: [
          { type: 'tool', tool: 'chart', options: { type: 'bar', horizontal: true, mode: 'read', title: '하루 버스 이용자', data: BUS_DATA, unit: '천 명', scale: 10, xLabel: '지역', question: '솔들군의 하루 버스 이용자는 몇 천 명인가요?' }, prompt: '가로 막대그래프에서 솔들군의 이용자 수를 쓰세요.', target: { value: 4 }, difficulty: 0.2 },
          { type: 'choice', prompt: '"솔들군은 인구가 적고 집이 멀기 때문일 거예요"는 자료로 알 수 있는 사실인가요?', options: ['사실이에요', '까닭을 짐작한 말이에요'], answer: 1, difficulty: 0.2, explain: '그래프에는 이용자 수만 있고 까닭은 따로 알아봐야 해요.' },
          { type: 'mood', prompt: '오늘 가로 막대그래프 읽기는 어땠나요?' },
        ],
        wsTitle: '버스 이용자 자료 견주기',
        ws: [
          { type: 'table', prompt: '표를 완성하세요. 큰바다시는 하루 62천 명입니다.', columns: ['지역', '하루 버스 이용자(천 명)', '많은 순서'], cells: [['큰바다시', '62', ''], ['강나루시', '48', ''], ['새별시', '27', ''], ['솔들군', '4', '']], answer: '큰바다시 1, 강나루시 2, 새별시 3, 솔들군 4' },
          { type: 'choice', prompt: '표에서 이용자가 가장 적은 지역에 ○ 하세요.', options: ['큰바다시', '강나루시', '솔들군'], answer: '솔들군' },
          { type: 'blank', prompt: '표를 보고 빈칸을 채우세요.', text: '강나루시는 새별시보다 하루 ___천 명 더 많이 버스를 타요.', answer: '21' },
          { type: 'check', prompt: '자료로 알 수 있는 사실에 ✓ 하세요.', options: ['큰바다시가 이용자가 가장 많아요', '솔들군 사람들은 외로워요', '새별시는 27천 명이에요'], answer: '첫째와 셋째' },
          { type: 'short', prompt: '버스 이용자가 많은 지역과 적은 지역의 차이를 한 문장으로 쓰세요.', answer: '예: 큰바다시는 62천 명이고 솔들군은 4천 명이라 큰바다시가 훨씬 많아요.' },
        ],
        chal: '그래프에 미리 그려진 막대가 없고, 읽기 문항에서 표 빈칸을 모두 스스로 채우며 사실과 짐작을 구별해요.',
        notes: '이 차시의 이용자 수는 모두 지어낸 값이다. 자주 보이는 어려움: ① 가로 막대의 읽는 쪽(끝)을 세로 막대처럼 위로 본다 → 막대 끝을 눈금까지 손가락으로 이어 보게 한다. ② 까닭을 사실처럼 말한다 → 자료로 확인할 수 있는 것과 짐작을 나눈다. ③ 실제 도시의 교통 이용 통계는 교사가 출처와 연도를 확인한 뒤 다룬다(확인 필요).',
      }),
      // ───────────────────────── 14차시 ─────────────────────────
      LS(14, {
        title: '큰바다시 안내 지도에서 방위로 길 알려 주기',
        obj: '도시 안내 지도에서 장소 사이의 방위를 읽어 길을 안내하고 도시 생활의 편리한 점과 불편한 점을 말할 수 있다.',
        std: S2,
        ill: 'a paper city guide map with a compass rose drawn in the corner, with a child pointing from the city hall to a train station',
        say: '시청에서 기차역은 어느 쪽일까요?',
        extra: [{ motif: 'house', x: 140, y: 222 }, { motif: 'bird', x: 250, y: 90 }, { motif: 'tree', x: 350, y: 216 }],
        intro: {
          t: '"새로 온 친구가 시청에서 기차역까지 가려고 해요. 어떻게 말해 주면 좋을까요?" 앞, 뒤, 오른쪽 같은 말은 서 있는 방향에 따라 달라진다는 점을 짚고, 동서남북 방위로 말하면 누구에게나 같다고 정리한다. 시연 단추로 방위표가 돌아가는 모습을 보여 준다. 지도는 지어낸 큰바다시다.',
          s: '교실에서 선생님 책상은 내 자리에서 어느 방위인지 말해 보고, 방위로 말하면 왜 좋은지 이야기해 봅시다.',
          demo: { tool: 'map', options: W(CITY, { mode: 'compass' }), sequence: [{ from: '시청', to: '기차역' }] },
        },
        acts: [
          {
            title: '시청에서 본 장소의 방위 고르기', tool: 'map', options: W(CITY, { mode: 'compass' }),
            levels: { easy: { readout: true }, base: {}, challenge: {} },
            task: '방위표를 돌려 지도의 북쪽에 맞추고, 시청에서 본 장소의 방위를 골라요. 방향키는 45°씩 돌려요.',
            teacher: '"방위표를 지도의 북쪽에 맞추지 않고 읽으면 어떻게 될까요?" 방위표 맞추기를 먼저 확인하게 한다. 북동과 남동처럼 비슷한 방위를 헷갈리는 학생에게는 시청에서 장소까지 칸이 같은 수로 위·아래, 옆으로 움직이는 방향을 손가락으로 따라가 보게 한다.',
            items: [
              { prompt: '시청에서 본 기차역은 어느 방위인가요?', target: { from: '시청', to: '기차역' }, difficulty: 0.15 },
              { prompt: '시청에서 본 병원은 어느 방위인가요?', target: { from: '시청', to: '병원' }, difficulty: 0.15 },
              { prompt: '시청에서 본 공원은 어느 방위인가요?', target: { from: '시청', to: '공원' }, difficulty: 0.25,
                predict: { q: '시청에서 공원으로 가려면 남쪽만 가면 될까요?', options: ['남쪽만 가면 돼요', '남쪽과 서쪽 사이로 가요'], answer: 1 },
                conclude: '공원은 시청의 남서쪽에 있어서 남쪽과 서쪽 사이로 가야 해요.' },
              { prompt: '시청에서 본 항구는 어느 방위인가요?', target: { from: '시청', to: '항구' }, difficulty: 0.25 },
            ],
          },
          {
            title: '도시 생활의 좋은 점과 걱정되는 점 나누기', tool: 'mindmap',
            task: '카드의 도시 생활 모습을 편리한 점과 불편한 점으로 나누어요.',
            teacher: '"도시에 가게와 병원이 가까이 있으면 어떤 점이 편리할까요? 불편한 점도 있을까요?" 같은 모습도 사람에 따라 달라질 수 있다는 점을 짚는다. 출퇴근 시간에 길이 막히는 것을 편리한 점으로 놓는 학생에게는 다시 읽어 보게 한다.',
            items: [
              { prompt: '도시 생활의 모습을 편리한 점과 불편한 점으로 나누어 보세요.', toolOptions: { topic: '도시 생활', slots: ['편리한 점', '불편한 점'], cards: ['병원과 가게가 가까워요', '버스와 전철을 쉽게 타요', '출퇴근 시간에 길이 막혀요', '집값과 방값이 비싸요'] }, target: { sort: { '편리한 점': ['병원과 가게가 가까워요', '버스와 전철을 쉽게 타요'], '불편한 점': ['출퇴근 시간에 길이 막혀요', '집값과 방값이 비싸요'] } }, difficulty: 0.25 },
              { prompt: '도시의 불편한 점을 줄이는 노력만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '불편 줄이기', cards: ['전철과 버스를 더 놓아요', '자전거 길을 만들어요', '자동차를 더 많이 사요', '쓰레기를 길에 버려요'] }, target: { pick: ['전철과 버스를 더 놓아요', '자전거 길을 만들어요'] }, difficulty: 0.2 },
              { prompt: '장소와 그곳에서 할 수 있는 일을 이어 보세요.', toolOptions: { mode: 'match', topic: '장소와 일', slots: [{ id: 'm1', label: '도서관' }, { id: 'm2', label: '시장' }], cards: ['책을 빌려 읽어요', '채소와 과일을 사요', '기차를 타요'] }, target: { match: { m1: '책을 빌려 읽어요', m2: '채소와 과일을 사요' } }, difficulty: 0.15 },
            ],
          },
        ],
        wrap: '"방위로 길을 알려 주면 왜 좋은가요?" 서 있는 쪽이 달라도 같은 말이 되기 때문이라는 대답을 모은다. 출구 1번에서 시장의 방위를 서쪽이 아닌 동쪽으로 고르는 학생이 있으면 방위표가 지도의 북쪽에 맞는지 다시 보게 한다.',
        exit: [
          { type: 'tool', tool: 'map', options: W(CITY, { mode: 'compass' }), prompt: '시청에서 본 시장은 어느 방위인지 고르세요.', target: { from: '시청', to: '시장' }, difficulty: 0.2 },
          { type: 'choice', prompt: '도시의 편리한 점으로 알맞은 것은 무엇인가요?', options: ['가까이에 병원과 가게가 많아요', '집이 늘 싸요', '길이 늘 한가해요'], answer: 0, difficulty: 0.1, explain: '도시에는 병원, 가게 같은 시설이 가까이 모여 있어요.' },
          { type: 'mood', prompt: '오늘 방위로 길 알려 주기는 어땠나요?' },
        ],
        wsTitle: '큰바다시 방위 안내',
        ws: [
          { type: 'figure', wide: true, prompt: '시청에서 본 기차역과 공원의 방위를 방위표에 써 넣으세요.', tool: 'map', options: W(CITY, { mode: 'compass', title: '', legend: false }), figures: [{ caption: '큰바다시 안내 지도' }], answer: '기차역 북쪽, 공원 남서쪽' },
          { type: 'table', prompt: '시청에서 본 방위를 쓰세요.', columns: ['장소', '시청에서 본 방위'], cells: [['병원', ''], ['항구', ''], ['도서관', '']], answer: '병원 동쪽, 항구 북동쪽, 도서관 북서쪽' },
          { type: 'choice', prompt: '시청에서 본 시장은 어느 방위인가요?', options: ['동쪽', '서쪽', '남쪽'], answer: '서쪽' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '시청에서 학교로 가려면 남쪽과 동쪽 사이인 ___쪽으로 가요.', answer: '남동' },
          { type: 'short', prompt: '도시에 살면서 편리한 점과 불편한 점을 한 가지씩 쓰세요.', answer: '학생마다 다름' },
        ],
        chal: '방위표가 처음에 돌아가 있어 먼저 북쪽에 맞춘 뒤에 읽고, 안내 글을 새로 지어 보며 방위를 고쳐 써요.',
        notes: '자주 보이는 어려움: ① 방위표를 북쪽에 맞추지 않고 위쪽으로만 읽는다 → 방위표 맞추기부터 한다. ② 대각선 방위(북동·남서)를 두 방향 중 하나로만 말한다 → 칸이 같은 수로 위·아래, 옆으로 이어진 곳이 대각선이라고 짚는다. ③ 도시 생활의 불편한 점을 말할 때 특정 지역이나 사람을 낮추지 않게 한다. 큰바다시는 지어낸 도시이고 실제 도시 사례는 교사가 출처를 확인한다(확인 필요).',
      }),
      // ───────────────────────── 15차시 ─────────────────────────
      LS(15, {
        title: '환경과 도시 모습을 한 장으로 묶어 정리하기',
        obj: '산·들·바닷가 환경과 도시의 인구·교통·산업에서 배운 것을 묶어 우리 지역 소개로 정리하고 스스로 점검할 수 있다.',
        std: S1.concat(S2),
        ill: 'a handmade poster combining a mountain village, a rice field plain, a harbor town and a big city on a single paper map with small labels',
        say: '배운 것을 한 장에 담아 볼까요?',
        extra: [{ motif: 'mountain', x: 100, y: 214 }, { motif: 'house', x: 250, y: 222 }, { motif: 'wave', x: 400, y: 232 }],
        intro: {
          t: '"단원을 시작할 때 산마을, 들마을, 바닷마을, 큰 도시는 어떻게 다르다고 생각했나요?" 처음 생각과 지금 생각을 견주어 말하게 한다. 오늘은 환경과 하는 일, 개발의 변화, 도시의 인구·교통·산업을 한 장으로 묶는 시간이라고 알린다. 지도의 마을과 도시는 모두 지어낸 곳이라는 점도 다시 말해 준다.',
          s: '이 단원에서 가장 기억에 남는 것 하나를 짝에게 말하고, 그것을 알게 된 자료가 무엇이었는지도 말해 봅시다.',
        },
        acts: [
          {
            title: '환경과 도시 모습 묶어 나누기', tool: 'mindmap',
            task: '카드의 모습을 산마을, 바닷마을, 큰 도시 가지로 나누어요.',
            teacher: '"카드를 읽고 그곳에서 쉽게 볼 수 있는 모습은 어느 가지일까요?" 이 단원에서 다룬 자료를 떠올려 근거를 말하게 한다. 한 카드를 두 가지에 모두 놓으려는 학생에게는 가장 알맞은 한 곳을 골라 까닭을 말하게 한다. 큰 도시에도 공원과 논이 있을 수 있다는 점은 열어 둔다.',
            items: [
              { prompt: '카드 여섯 장을 산마을·바닷마을·큰 도시 가지로 나누어 보세요.', toolOptions: { topic: '우리 지역 소개', slots: ['산마을', '바닷마을', '큰 도시'], cards: ['숲에서 나무를 가꿔요', '갯벌 옆에 방조제가 있어요', '전철과 버스가 아주 많아요', '비탈 밭이 있어요', '배로 짐을 싣고 내려요', '높은 건물이 줄지어 서 있어요'] }, target: { sort: { '산마을': ['숲에서 나무를 가꿔요', '비탈 밭이 있어요'], '바닷마을': ['갯벌 옆에 방조제가 있어요', '배로 짐을 싣고 내려요'], '큰 도시': ['전철과 버스가 아주 많아요', '높은 건물이 줄지어 서 있어요'] } }, difficulty: 0.25 },
              { prompt: '이 단원에서 배운 것으로 알맞은 문장만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '배운 것', cards: ['환경에 따라 사람들이 하는 일이 달라요', '개발은 좋은 점과 걱정되는 점이 함께 있어요', '인구가 많은 곳은 모두 바닷가에 있어요', '그림그래프는 단위를 읽지 않아도 돼요'] }, target: { pick: ['환경에 따라 사람들이 하는 일이 달라요', '개발은 좋은 점과 걱정되는 점이 함께 있어요'] }, difficulty: 0.25 },
              { prompt: '자료의 종류와 그 자료로 알 수 있는 것을 이어 보세요.', toolOptions: { mode: 'match', topic: '자료와 쓰임', slots: [{ id: 'm1', label: '꺾은선그래프' }, { id: 'm2', label: '그림그래프' }, { id: 'm3', label: '인구 지도' }], cards: ['시간에 따라 변한 모습', '종류별 수를 한눈에', '지역별 인구의 많고 적음'] }, target: { match: { m1: '시간에 따라 변한 모습', m2: '종류별 수를 한눈에', m3: '지역별 인구의 많고 적음' } }, difficulty: 0.25 },
            ],
          },
          {
            title: '푸른들도에서 소개할 곳 찾기', tool: 'map', options: PD, levels: LV_MAP,
            task: '소개 카드에 쓸 곳을 지도에서 찾아 핀을 꽂아요.',
            teacher: '"항구와 공항, 기차역이 모두 있는 곳을 소개한다면 어느 지역일까요?" 지도 기호와 지역 이름을 함께 읽게 한다. 도청이 있는 곳이 가장 인구가 많다고 짐작하는 학생에게는 인구 지도를 다시 보게 한다. 소개 카드에 쓸 문장은 자료로 확인한 것과 내 생각을 나눠 쓰게 한다.',
            items: [
              { prompt: '기차역과 항구가 함께 있고 인구가 가장 많은 지역 안에 핀을 꽂아 보세요.', target: { region: '큰바다시' }, difficulty: 0.2 },
              { prompt: '인구가 가장 적어 한적한 지역 안에 핀을 꽂아 보세요.', target: { region: '모래군' }, difficulty: 0.2 },
              { prompt: '도청이 있는 지역 안에 핀을 꽂아 보세요.', target: { region: '강나루시' }, difficulty: 0.15,
                predict: { q: '도청이 있는 곳이 인구가 가장 많을까요?', options: ['언제나 그래요', '꼭 그렇지는 않아요'], answer: 1 },
                conclude: '도청이 있는 강나루시는 52만 명이고 큰바다시는 74만 명이라 도청이 있다고 인구가 가장 많은 것은 아니에요.' },
            ],
          },
        ],
        wrap: '"이 단원에서 배운 것 가운데 가장 중요한 것 한 가지와 그것을 알게 된 자료를 말해 볼까요?" 환경과 일의 관계, 개발의 두 얼굴, 도시의 인구·교통·산업이라는 말이 나오게 한다. 출구 2번에서 도시 모습을 한 가지로만 말하는 학생이 있으면 인구·교통·산업 세 가지로 나누어 말하게 한다.',
        exit: [
          { type: 'tool', tool: 'map', options: W(PD, { readOnly: true, ask: { q: '교통시설이 가장 많이 모인 지역은?', choices: ['큰바다시', '솔들군', '모래군'], why: [null, '솔들군에는 교통시설 기호가 없어요.', '모래군에는 교통시설 기호가 없어요.'] } }), prompt: '푸른들도 지도에서 항구와 기차역이 있는 지역을 고르세요.', target: { pick: 0 }, difficulty: 0.2 },
          { type: 'choice', prompt: '도시의 모습을 말할 때 함께 살펴볼 세 가지로 알맞은 것은?', options: ['인구·교통·산업', '색깔·모양·크기', '이름·나이·키'], answer: 0, difficulty: 0.1, explain: '도시는 인구, 교통, 산업을 함께 보면 모습을 알 수 있어요.' },
          { type: 'mood', prompt: '이 단원 공부는 어땠나요?' },
        ],
        wsTitle: '우리 지역 소개 카드',
        ws: [
          { type: 'figure', wide: true, prompt: '푸른들도 지도에서 기차역에 ○ 하고 그곳이 있는 지역 이름을 쓰세요.', tool: 'map', options: W(PD, { title: '', legend: false, regionNames: false }), figures: [{ caption: '푸른들도 지도' }], answer: '큰바다시' },
          { type: 'table', prompt: '이 단원에서 배운 것을 정리하세요.', columns: ['곳', '환경', '하는 일'], cells: [['산마을', '', ''], ['바닷마을', '', ''], ['큰 도시', '', '']], answer: '산마을: 높고 비탈 — 나물·나무, 바닷마을: 바다 — 고기잡이·김, 큰 도시: 사람 많음 — 가게·공장·학교' },
          { type: 'check', prompt: '스스로 점검: 할 수 있는 것에 ✓ 하세요.', options: ['지도에서 땅의 모습을 찾을 수 있어요', '그림그래프의 단위를 읽을 수 있어요', '도시의 인구·교통·산업을 말할 수 있어요'], answer: '학생마다 다름' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '개발은 ___ 점과 걱정되는 점이 함께 있어요(좋은·나쁜).', answer: '좋은' },
          { type: 'short', prompt: '우리 지역을 소개하는 글을 두 문장으로 쓰세요. 자료로 확인한 것과 내 생각을 나누어 쓰세요.', answer: '학생마다 다름' },
        ],
        chal: '카드가 더 많이 섞이고, 소개 카드 문장마다 자료로 확인한 것인지 내 생각인지 밝혀 써 봐요.',
        notes: '자주 보이는 어려움: ① 이 단원의 낱낱 내용을 이어서 말하지 못한다 → 환경·일·개발·인구·교통·산업이라는 낱말 여섯 개를 칠판에 걸어 두고 이어 말하게 한다. ② 자료로 확인한 것과 생각을 섞는다 → 소개 카드에서 두 가지를 다른 색으로 쓰게 한다. ③ 이 단원의 모든 마을·도시·수는 지어낸 것이다. 실제 우리 고장 소개는 교사가 확인한 자료와 출처(연도 포함)를 쓴다(확인 필요).',
      }),
    ],
  });
})();
