/* 5학년 1학기 사회 1. 우리나라 국토 여행 — 단원 파일 (참조 차시 없음, 14차시)
 * 지도는 모두 칸 지도다. 실제 해안선·거리와 같지 않고, 산·강·바다·섬 사이의 '위치 관계'(동쪽이 높고 서쪽이 낮음, 큰 강이 서해와 남해로 흐름,
 * 독도가 울릉도의 남동쪽에 있음)만 맞췄다. 높이·길이·넓이·인구 같은 통계는 쓰지 않았다(필요하면 교사가 교과서·공공 자료로 확인한다 — 확인 필요).
 * 독도는 대한민국 영토이며(경상북도 울릉군 독도리), 바다 이름은 대한민국이 쓰는 '동해'를 쓴다. 연도가 든 역사 사실은 삼국사기·세종실록지리지·대한제국 칙령 제41호 등
 * 교과서에 실리는 것만 썼고, 교사 메모에 출처 확인을 남겼다.
 */
(function () {
  const BASE = { schema: 'edu-lesson.v1', grade: 5, subject: '사회', unitTitle: '1. 우리나라 국토 여행', minutes: 40, formats: ['chromebook', 'projector', 'print'] };
  const L = (n, o) => Object.assign({ id: `g5-soc-1-01-${String(n).padStart(2, '0')}`, catalog: { unit: 'g5-사회-1학기-1', lesson: n } }, BASE, o);
  const ILL = (what) => `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`;
  const S1 = ['[6사01-01]']; const S2 = ['[6사01-02]'];
  const W = (o, more) => Object.assign({}, o, more || {});
  const SC = (text, extra) => ({ viewBox: [480, 270], layers: [{ motif: 'cloud', x: 100, y: 52 }, { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'hills', y: 204 }].concat(extra || [], [{ motif: 'text', x: 240, y: 140, text, size: 20 }]) });
  // 차시 뼈대: 도입 5분 · 전개 27분(활동 둘이면 13+14, 셋이면 9+9+9) · 정리 8분
  const MIN = { 2: [13, 14], 3: [9, 9, 9] };
  const LV_MAP = { easy: { names: true, readout: true }, base: {}, challenge: {} };
  const LV_CARD = { easy: { live: true, instant: true }, base: {}, challenge: {} };
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

  // ---- 지도 ----
  // 칸 지도 '우리나라': 위쪽이 북쪽. 서쪽 바다(서해)·동쪽 바다(동해)·남쪽 바다(남해), 동쪽과 북쪽이 높고 서쪽과 남쪽이 낮다
  const KOR_H = [
    [-1, 2, 3, 4, 3, -1],
    [-1, 1, 2, 3, 3, -1],
    [-1, 0, 1, 2, 3, -1],
    [-1, 0, 1, 2, 3, -1],
    [-1, 0, 0, 1, 2, -1],
    [-1, 0, 0, 1, 1, -1],
    [-1, -1, 0, 0, 0, -1],
    [-1, 3, -1, -1, -1, -1],
  ];
  const KOR = {
    grid: [6, 8], title: '우리나라(칸 지도)', mode: 'terrain', heights: KOR_H,
    rivers: [[[3, 2], [2, 2], [1, 2]], [[3, 4], [2, 4], [1, 4]], [[4, 4], [4, 5], [3, 6]], [[2, 5], [2, 6]]],
    places: [
      { name: '백두산', icon: 'mountain', at: [3, 0] }, { name: '태백산맥', icon: 'mountain', at: [4, 3] }, { name: '소백산맥', icon: 'mountain', at: [3, 5] },
      { name: '한라산', icon: 'mountain', at: [1, 7] }, { name: '한강', icon: 'dot', at: [2, 2] }, { name: '금강', icon: 'dot', at: [2, 4] },
      { name: '낙동강', icon: 'dot', at: [4, 5] }, { name: '섬진강', icon: 'dot', at: [2, 5] },
      { name: '서해', icon: 'dot', at: [0, 3] }, { name: '동해', icon: 'dot', at: [5, 3] }, { name: '남해', icon: 'dot', at: [4, 7] },
    ],
  };
  // 산지(높이 2 이상)와 낮은 땅(들·평야)을 지역으로 나눈 지도
  const KOR_CELLS = (test) => { const out = []; KOR_H.forEach((row, r) => row.forEach((h, c) => { if (test(h)) out.push([c, r]); })); return out; };
  const KOR_REGION = {
    grid: [6, 8], title: '산지와 들·평야', sea: KOR_CELLS((h) => h < 0), legend: false,
    regions: [{ name: '산지', color: 'mint', cells: KOR_CELLS((h) => h >= 2) }, { name: '평야', color: 'buttercup', cells: KOR_CELLS((h) => h >= 0 && h < 2) }],
  };
  // 활동지 전용 판: 인쇄 그림 높이(52mm) 안에서 글자가 5.5pt를 넘도록 줄을 3개(+바다 1줄)로 줄이고 한강·낙동강·세 바다 이름만 둔다
  const KORP_H = [
    [-1, 2, 3, 4, 3, -1, -1],
    [-1, 1, 2, 3, 3, -1, -1],
    [-1, 0, 0, 1, 2, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1],
  ];
  const KOR_WS = {
    grid: [7, 4], title: '', mode: 'terrain', heights: KORP_H, heightLegend: false, legend: false,
    rivers: [[[3, 1], [2, 1], [1, 1]], [[4, 1], [4, 2]]],
    places: [{ name: '한강', icon: 'dot', at: [2, 1] }, { name: '낙동강', icon: 'dot', at: [4, 2] }, { name: '서해', icon: 'dot', at: [0, 1] }, { name: '동해', icon: 'dot', at: [5, 1] }, { name: '남해', icon: 'dot', at: [3, 3] }],
  };
  const KORP_CELLS = (test) => { const out = []; KORP_H.forEach((row, r) => row.forEach((h, c) => { if (test(h)) out.push([c, r]); })); return out; };
  const KOR_REGION_WS = {
    grid: [7, 4], title: '', legend: false, sea: KORP_CELLS((h) => h < 0),
    regions: [{ name: '산지', color: 'mint', cells: KORP_CELLS((h) => h >= 2) }, { name: '평야', color: 'buttercup', cells: KORP_CELLS((h) => h >= 0 && h < 2) }],
  };
  // 독도 칸 지도: 육지(왼쪽 줄) — 울릉도(육지에서 동쪽) — 독도(울릉도의 남동쪽). 독도는 육지보다 울릉도에 더 가깝다
  const SEA_OF = (cols, rows, land) => { const out = []; for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) if (!land.some((x) => x[0] === c && x[1] === r)) out.push([c, r]); return out; };
  const DOK = {
    grid: [7, 4], title: '동해', sea: SEA_OF(7, 4, [[0, 0], [0, 1], [0, 2], [0, 3], [3, 1], [5, 3]]),
    places: [{ name: '육지', icon: 'city', at: [0, 1] }, { name: '울릉도', icon: 'island', at: [3, 1] }, { name: '독도', icon: 'island', at: [5, 3] }, { name: '동해', icon: 'dot', at: [6, 0] }],
  };
  const DOK_WS = W(DOK, { title: '', legend: false });
  // 독도 가까이: 동도·서도 두 섬
  const DOK2 = {
    grid: [5, 3], title: '독도', sea: SEA_OF(5, 3, [[1, 1], [3, 1]]),
    places: [{ name: '서도', icon: 'island', at: [1, 1] }, { name: '동도', icon: 'lighthouse', at: [3, 1] }],
  };
  const DOK2_WS = W(DOK2, { title: '', legend: false });

  PaperLessons.registerUnit({
    id: 'g5-soc-1-01', schema: 'edu-unit.v1', catalogUnit: 'g5-사회-1학기-1',
    grade: 5, subject: '사회', unitTitle: '1. 우리나라 국토 여행',
    flow: '앞 일곱 차시는 칸 지도로 우리나라 국토의 지형을 살핍니다. 지도에서 가장 높은 산과 동해·서해·남해를 찾고(1), 큰 강이 서해와 남해로 흐르는 까닭을 땅의 높낮이와 이으며(2), 세 바닷가의 모습을 견줍니다(3). 4~5차시에는 높이 지도와 산지·평야 지도로 높낮이와 분포를 자료로 읽고, 6~7차시에는 지형별 여행 코스와 사람들의 생활을 지형과 짝 지어 봅니다. 8~14차시는 독도입니다. 동해에서 울릉도와 독도의 자리를 방위로 찾고(8), 동도와 서도의 모습을 살펴(9), 독도에 얽힌 옛 기록의 차례를 놓고(10), 기록이 알려 주는 것과 기록을 근거로 쓸 때 확인할 것을 익힌 뒤(11), 지리 근거와 역사 근거로 나누어(12) 독도를 지키고 알리는 일과 내가 할 수 있는 일을 정해 소개 글을 씁니다(13). 14차시에 국토의 땅 모습과 독도 이야기를 소개 카드로 묶어 스스로 점검합니다.',
    refs: {},
    lessons: [
      // ───────────────────────── 1차시 ─────────────────────────
      LS(1, {
        title: '우리나라 칸 지도에서 산과 세 바다 찾기',
        obj: '칸 지도에서 가장 높은 산과 동해·서해·남해의 자리를 찾고 우리나라 땅의 큰 모습을 말할 수 있다.',
        std: S1,
        ill: 'a paper-cut peninsula seen from above with tall mountains on the east and north, low plains on the west and south, and three seas around it',
        say: '우리나라는 어떤 모습일까요?',
        extra: [{ motif: 'mountain', x: 110, y: 214 }, { motif: 'wave', x: 250, y: 232 }, { motif: 'wave', x: 390, y: 232 }],
        intro: {
          t: '"우리나라는 어느 쪽이 바다이고 어느 쪽이 산일까요?" 학생이 아는 대로 말하게 하고 칠판에 동·서·남·북을 쓴다. 오늘 쓰는 지도는 실제 모양이 아니라 산과 바다의 위치 관계만 맞춘 칸 지도라고 밝힌다. 시연 단추로 가장 높은 곳에 핀이 꽂히는 모습을 보여 준다.',
          s: '우리나라 지도에서 내가 아는 산 하나와 바다 이름 하나를 짝에게 말해 봅시다.',
          demo: { tool: 'map', options: KOR, sequence: [{ highest: true }, { place: '동해' }] },
        },
        acts: [
          {
            title: '높은 산과 세 바다 찾기', tool: 'map', options: KOR, levels: LV_MAP,
            task: '지도의 색이 진할수록 땅이 높아요. 핀을 끌거나 칸을 눌러 꽂고, 키보드는 방향키와 Enter를 써요.',
            teacher: '"지도에서 색이 가장 진한 곳은 어디일까요?" 오른쪽 높이 범례를 먼저 읽게 한다. 바다 이름을 동해·서해·남해로 외우기만 하는 학생에게 육지를 기준으로 어느 쪽 바다인지 말하게 한다. 이 지도는 실제 모양과 다른 칸 지도라는 것을 다시 말해 준다.',
            items: [
              { prompt: '칸 지도에서 땅이 가장 높은 곳에 핀을 꽂아 보세요.', target: { highest: true }, difficulty: 0.1 },
              { prompt: '육지의 동쪽에 있는 바다인 동해에 핀을 꽂아 보세요.', target: { place: '동해' }, difficulty: 0.1 },
              { prompt: '육지의 서쪽에 있는 바다인 서해에 핀을 꽂아 보세요.', target: { place: '서해' }, difficulty: 0.1 },
              { prompt: '육지의 남쪽에 있는 바다인 남해에 핀을 꽂아 보세요.', target: { place: '남해' }, difficulty: 0.1,
                predict: { q: '우리나라는 어느 쪽이 바다로 둘러싸여 있을까요?', options: ['동쪽·서쪽·남쪽', '북쪽만'], answer: 0 },
                conclude: '우리나라는 동쪽은 동해, 서쪽은 서해, 남쪽은 남해로 둘러싸인 반도예요.' },
            ],
          },
          {
            title: '지도를 읽고 땅의 모습 말하기', tool: 'map', options: W(KOR, { readOnly: true }), levels: LV_MAP,
            task: '지도를 보고 질문에 알맞은 보기를 골라요.',
            teacher: '"동쪽과 서쪽 가운데 색이 진한 쪽은 어디일까요?" 땅이 높은 쪽을 짚어 답하게 한다. 한라산이 육지에 붙어 있다고 답하는 학생에게는 한라산 칸 둘레가 바다임을 짚는다. 북쪽 바다가 있다고 답하는 학생에게는 지도 위쪽 가장자리에 무엇이 있는지 물어본다.',
            items: [
              { prompt: '우리나라에서 땅이 대체로 더 높은 쪽은 어느 쪽인가요?', toolOptions: { ask: { choices: ['동쪽', '서쪽', '남쪽 바닷가'], why: [null, '서쪽은 색이 옅은 낮은 땅이 더 많아요.', '남쪽 바닷가는 낮은 땅이에요.'] } }, target: { pick: 0 }, difficulty: 0.15,
                predict: { q: '높은 산이 많은 쪽은 동쪽일까요, 서쪽일까요?', options: ['동쪽', '서쪽'], answer: 0 },
                conclude: '우리나라는 동쪽이 높고 서쪽이 낮은 동고서저의 땅이에요.' },
              { prompt: '한라산은 육지에서 어느 쪽 바다 위에 떠 있나요?', toolOptions: { ask: { choices: ['남쪽 바다', '북쪽 바다', '육지 한가운데'], why: [null, '북쪽에는 바다가 없어요.', '한라산 둘레는 바다예요.'] } }, target: { pick: 0 }, difficulty: 0.2 },
              { prompt: '육지의 서쪽에 있는 바다의 이름을 고르세요.', toolOptions: { ask: { choices: ['동해', '서해', '남해'], why: ['동해는 육지의 동쪽이에요.', null, '남해는 육지의 남쪽이에요.'] } }, target: { pick: 1 }, difficulty: 0.1 },
            ],
          },
        ],
        wrap: '"오늘 지도에서 산과 바다의 자리를 어떻게 말할 수 있나요?" 높은 산은 북쪽·동쪽, 바다는 동·서·남이라는 말로 정리하게 한다. 출구 1번에서 서해와 남해를 바꿔 고르는 학생이 있으면 육지를 가운데 두고 방향부터 말하게 한다.',
        exit: [
          { type: 'tool', tool: 'map', options: W(KOR, { names: false }), prompt: '이름 없는 칸 지도에서 한라산을 찾아 핀을 꽂으세요.', target: { place: '한라산' }, difficulty: 0.2 },
          { type: 'choice', prompt: '우리나라의 땅 모습으로 알맞은 것은 무엇인가요?', options: ['동쪽이 높고 서쪽이 낮아요', '서쪽이 높고 동쪽이 낮아요', '모두 같은 높이예요'], answer: 0, difficulty: 0.1, explain: '우리나라는 동쪽에 높은 산이 많고 서쪽에는 낮은 땅이 넓어요.' },
          { type: 'mood', prompt: '오늘 우리나라 지도 읽기는 어땠나요?' },
        ],
        wsTitle: '우리나라 칸 지도 읽기',
        ws: [
          { type: 'figure', wide: true, prompt: '지도에서 가장 높은 곳에 △를 그리고, 동해·서해·남해의 위치에 각각 ○ 하세요.', tool: 'map', options: KOR_WS, figures: [{ caption: '우리나라 칸 지도' }], answer: '위쪽 가운데 가장 진한 곳 △, 왼쪽 서해·오른쪽 동해·아래쪽 남해' },
          { type: 'table', prompt: '육지를 기준으로 바다의 위치를 쓰세요.', columns: ['바다', '육지의 어느 쪽'], cells: [['동해', ''], ['서해', ''], ['남해', '']], answer: '동해: 동쪽, 서해: 서쪽, 남해: 남쪽' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '우리나라는 ___쪽이 높고 ___쪽이 낮아요.', answer: '동, 서' },
          { type: 'choice', prompt: '한라산이 있는 곳은 어디인가요?', options: ['남쪽 바다 위 섬', '북쪽 육지', '동쪽 육지 끝'], answer: '남쪽 바다 위 섬' },
          { type: 'short', prompt: '내가 가 본 산이나 바다 하나를 쓰고, 칸 지도의 어느 쪽에 있을지 쓰세요.', answer: '학생마다 다름' },
        ],
        chal: '이름이 사라져 높이와 기호만으로 산과 바다를 찾고, 질문에는 까닭도 한 마디 붙여요.',
        notes: '이 지도는 실제 모양이 아니라 산·강·바다의 위치 관계만 맞춘 칸 지도다. 자주 보이는 어려움: ① 동해·서해·남해를 지도 모양이 아니라 이름으로만 외운다 → 육지를 기준으로 방향을 먼저 말하게 한다. ② 색의 진하기를 바다의 깊이로 읽는다 → 범례를 먼저 읽는다. ③ 산의 높이·면적 비율 같은 수치는 교과서나 공공 자료에서 교사가 확인한 값만 쓴다(확인 필요).',
      }),
      // ───────────────────────── 2차시 ─────────────────────────
      LS(2, {
        title: '큰 강이 흘러가는 바다 따라가 보기',
        obj: '칸 지도에서 한강·금강·낙동강·섬진강이 흘러가는 바다를 찾고 땅의 높낮이와 강의 흐름을 이어 말할 수 있다.',
        std: S1,
        ill: 'four paper rivers flowing from a ridge of high mountains down to the west sea and the south sea, with small paper boats',
        say: '강물은 어느 바다로 갈까요?',
        extra: [{ motif: 'mountain', x: 120, y: 214 }, { motif: 'wave', x: 330, y: 232 }, { motif: 'bird', x: 250, y: 90 }],
        intro: {
          t: '"비가 산꼭대기에 내리면 물은 어느 쪽으로 흐를까요?" 낮은 곳으로 흐른다는 학생 말을 받아 땅이 동쪽이 높고 서쪽이 낮으면 큰 강은 어느 쪽으로 흐를지 물어본다. 오늘은 칸 지도에서 네 큰 강이 흘러가는 바다를 따라가 본다고 말한다. 시연 단추로 한강 자리에 핀이 꽂히는 모습을 보여 준다.',
          s: '내가 아는 강 이름을 하나 말해 보고, 그 강이 어느 바다로 갈지 짐작해 봅시다.',
          demo: { tool: 'map', options: KOR, sequence: [{ place: '한강' }] },
        },
        acts: [
          {
            title: '강이 흘러드는 바다 고르기', tool: 'map', options: W(KOR, { readOnly: true }), levels: LV_MAP,
            task: '지도에서 강을 따라가 흘러드는 바다를 골라요.',
            teacher: '"한강의 물줄기를 손가락으로 따라가면 어디에 닿나요?" 강이 높은 곳에서 낮은 곳으로 흐르는 방향을 확인하게 한다. 낙동강을 동해로 흐른다고 답하는 학생에게는 지도에서 강이 닿는 바다 칸의 위치를 짚게 한다. 실제 강의 길이·유역 넓이는 이 시간에 외우지 않는다고 말한다.',
            items: [
              { prompt: '한강은 어느 바다로 흘러가나요?', toolOptions: { ask: { choices: ['동해', '서해', '남해'], why: ['한강은 동쪽이 아니라 서쪽으로 흘러요.', null, '한강은 남쪽 바다에 닿지 않아요.'] } }, target: { pick: 1 }, difficulty: 0.15,
                predict: { q: '땅이 동쪽이 높고 서쪽이 낮으면 강은 어느 쪽으로 흐를까요?', options: ['서쪽', '동쪽'], answer: 0 },
                conclude: '땅이 동쪽이 높고 서쪽이 낮아서 큰 강은 서쪽이나 남쪽 바다로 흘러가요.' },
              { prompt: '낙동강은 어느 바다로 흘러가나요?', toolOptions: { ask: { choices: ['동해', '서해', '남해'], why: ['낙동강은 동해로 가지 않아요.', '서해는 육지의 서쪽이에요.', null] } }, target: { pick: 2 }, difficulty: 0.2 },
              { prompt: '금강이 닿는 바다를 골라 보세요.', toolOptions: { ask: { choices: ['서해', '남해', '동해'], why: [null, '금강은 남쪽으로 내려가지 않아요.', '동쪽에는 높은 산이 있어 강이 닿기 어려워요.'] } }, target: { pick: 0 }, difficulty: 0.2 },
              { prompt: '섬진강이 흘러드는 바다를 골라 보세요.', toolOptions: { ask: { choices: ['서해', '동해', '남해'], why: ['서해 쪽은 금강과 한강이에요.', '동해로 가는 큰 강은 이 지도에 없어요.', null] } }, target: { pick: 2 }, difficulty: 0.2 },
            ],
          },
          {
            title: '서해로 가는 강과 남해로 가는 강 나누기', tool: 'mindmap',
            task: '강 이름 카드를 흘러드는 바다에 따라 나누어요.',
            teacher: '"왜 큰 강이 동해로는 거의 가지 않을까요?" 동쪽에 높은 산줄기가 바다 가까이 이어져 있다는 말을 이끌어 낸다. 카드를 놓다가 막히면 지도로 돌아가 강의 끝을 확인하게 한다.',
            items: [
              { prompt: '강 카드를 서해로 가는 강과 남해로 가는 강으로 나누어 보세요.', toolOptions: { topic: '큰 강', slots: ['서해로 흘러요', '남해로 흘러요'], cards: ['한강', '금강', '낙동강', '섬진강'] }, target: { sort: { '서해로 흘러요': ['한강', '금강'], '남해로 흘러요': ['낙동강', '섬진강'] } }, difficulty: 0.2 },
              { prompt: '서해로 흘러가는 강만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '서해로 가는 강', cards: ['한강', '낙동강', '금강', '섬진강'] }, target: { pick: ['한강', '금강'] }, difficulty: 0.2 },
              { prompt: '땅의 모습과 강의 흐름을 이어 보세요.', toolOptions: { mode: 'match', topic: '땅과 강', slots: [{ id: 'm1', label: '동쪽이 높고 서쪽이 낮아요' }, { id: 'm2', label: '남쪽은 땅이 낮고 바다가 있어요' }], cards: ['큰 강이 서쪽 바다로 흘러요', '큰 강이 남쪽 바다에 닿아요', '큰 강이 산꼭대기로 올라가요'] }, target: { match: { m1: '큰 강이 서쪽 바다로 흘러요', m2: '큰 강이 남쪽 바다에 닿아요' } }, difficulty: 0.25 },
            ],
          },
        ],
        wrap: '"우리나라 큰 강이 흘러가는 방향을 땅의 모습과 이어 말해 볼까요?" 동쪽이 높고 서쪽·남쪽이 낮아서 서해와 남해로 흐른다는 말을 모은다. 출구 2번에서 낙동강을 서해로 고르는 학생이 있으면 지도에서 남쪽 끝 바다를 다시 짚게 한다.',
        exit: [
          { type: 'tool', tool: 'map', options: W(KOR, { readOnly: true, ask: { q: '섬진강과 같은 바다로 흐르는 강은?', choices: ['낙동강', '한강', '금강'], why: [null, '한강은 서해로 흘러요.', '금강은 서해로 흘러요.'] } }), prompt: '지도에서 섬진강과 같은 바다로 흘러가는 강을 고르세요.', target: { pick: 0 }, difficulty: 0.2 },
          { type: 'choice', prompt: '큰 강이 대부분 서해와 남해로 흐르는 까닭으로 알맞은 것은?', options: ['동쪽이 높고 서쪽과 남쪽이 낮아서', '서쪽이 높아서', '동해가 가장 낮아서'], answer: 0, difficulty: 0.15, explain: '강은 높은 곳에서 낮은 곳으로 흐르는데 우리나라는 동쪽이 높아요.' },
          { type: 'mood', prompt: '오늘 강의 흐름 따라가기는 어땠나요?' },
        ],
        wsTitle: '큰 강과 바다',
        ws: [
          { type: 'figure', wide: true, prompt: '한강을 따라가 흘러드는 바다에 ○ 하세요.', tool: 'map', options: KOR_WS, figures: [{ caption: '우리나라 칸 지도' }], answer: '지도 왼쪽(서쪽) 서해' },
          { type: 'table', prompt: '강이 흘러가는 바다를 쓰세요.', columns: ['강', '흘러가는 바다'], cells: [['한강', ''], ['금강', ''], ['낙동강', ''], ['섬진강', '']], answer: '한강 서해, 금강 서해, 낙동강 남해, 섬진강 남해' },
          { type: 'choice', prompt: '강물이 흐르는 방향으로 알맞은 것은?', options: ['높은 곳에서 낮은 곳', '낮은 곳에서 높은 곳', '같은 높이'], answer: '높은 곳에서 낮은 곳' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '우리나라 큰 강은 대부분 ___쪽과 ___쪽 바다로 흘러요.', answer: '서, 남' },
          { type: 'short', prompt: '우리 고장 가까이 있는 강이나 하천이 있다면 이름과 그 강이 흘러가는 쪽을 쓰세요.', answer: '학생마다 다름' },
        ],
        chal: '이름이 사라져 강 기호만으로 흘러드는 바다를 찾고, 카드 분류에서 흐름의 까닭까지 한 문장으로 말해요.',
        notes: '자주 보이는 어려움: ① 강이 바다에서 시작해 산으로 올라간다고 생각한다 → 물이 높은 곳에서 낮은 곳으로 흐른다고 비를 흉내 내며 보여 준다. ② 낙동강을 동해로 가는 강으로 안다 → 이 지도에서 강의 끝이 닿는 바다 칸을 짚게 한다. ③ 이 지도는 위치 관계만 맞춘 칸 지도이며 강의 실제 길이·유역 넓이 같은 수치는 교사가 자료에서 확인한 값만 쓴다(확인 필요).',
      }),
      // ───────────────────────── 3차시 ─────────────────────────
      LS(3, {
        title: '동해안·서해안·남해안의 바닷가 모습 견주기',
        obj: '동해안, 서해안, 남해안의 해안 모습을 견주어 갯벌·모래사장·섬 같은 특징을 말하고 사람들의 생활과 이을 수 있다.',
        std: S1,
        ill: 'three paper-cut seashores side by side, a long sandy beach, a wide mudflat with small crabs, and a sea dotted with many small islands',
        say: '바닷가 모습은 모두 같을까요?',
        extra: [{ motif: 'wave', x: 120, y: 232 }, { motif: 'wave', x: 250, y: 232 }, { motif: 'wave', x: 390, y: 232 }],
        intro: {
          t: '"동해, 서해, 남해에 가면 바닷가의 모습이 모두 같을까요?" 가 본 바닷가 이야기를 두세 명에게 들려 달라고 한다. 오늘은 세 바닷가의 모습을 견주어 보고 그 모습이 사람들의 생활과 어떻게 이어지는지 알아본다고 말한다. 시연 단추로 세 바다 자리에 차례로 핀이 꽂히는 모습을 보여 준다.',
          s: '내가 가 본 바닷가의 모습(모래, 갯벌, 바위, 섬)을 떠올려 짝에게 말해 봅시다.',
          demo: { tool: 'map', options: KOR, sequence: [{ place: '동해' }, { place: '서해' }, { place: '남해' }] },
        },
        acts: [
          {
            title: '바닷가의 모습을 세 바다로 나누기', tool: 'mindmap',
            task: '카드를 읽고 동해안·서해안·남해안 가지로 나누어요. 맞으면 초록 테두리가 생겨요.',
            teacher: '"갯벌은 밀물과 썰물 때 바닷물이 드나드는 곳이에요. 어느 바닷가에서 많이 볼 수 있을까요?" 서해안의 갯벌과 밀물·썰물 높이 차이를 짚는다. 섬이 많은 바닷가를 서해안이라고 답하는 학생에게는 남해안에 크고 작은 섬이 많다는 것을 알려 준다. 해안마다 해안선의 굽은 정도가 다르다는 것도 말해 준다.',
            items: [
              { prompt: '바닷가 모습 카드 여섯 장을 세 바닷가로 나누어 보세요.', toolOptions: { topic: '바닷가 모습', slots: ['동해안', '서해안', '남해안'], cards: ['해안선이 단순해요', '모래사장이 길게 이어져요', '갯벌이 넓어요', '밀물과 썰물 차이가 커요', '크고 작은 섬이 많아요', '해안선이 구불구불해요'] }, target: { sort: { '동해안': ['해안선이 단순해요', '모래사장이 길게 이어져요'], '서해안': ['갯벌이 넓어요', '밀물과 썰물 차이가 커요'], '남해안': ['크고 작은 섬이 많아요', '해안선이 구불구불해요'] } }, difficulty: 0.25 },
              { prompt: '갯벌이 넓은 서해안의 모습만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '서해안', cards: ['바닷물이 빠지면 넓은 갯벌이 드러나요', '조개와 낙지를 잡을 수 있어요', '해변이 곧게 이어져요', '섬이 거의 없어요'] }, target: { pick: ['바닷물이 빠지면 넓은 갯벌이 드러나요', '조개와 낙지를 잡을 수 있어요'] }, difficulty: 0.2,
                predict: { q: '바닷물이 빠지면 넓은 갯벌이 드러나는 바닷가는 어디일까요?', options: ['서해안', '동해안'], answer: 0 },
                conclude: '서해안은 밀물과 썰물 때 바닷물이 크게 드나들어 넓은 갯벌이 생겨요.' },
              { prompt: '바닷가 모습과 사람들이 하는 일을 이어 보세요.', toolOptions: { mode: 'match', topic: '모습과 생활', slots: [{ id: 'm1', label: '동해안의 모래사장' }, { id: 'm2', label: '서해안의 갯벌' }, { id: 'm3', label: '남해안의 많은 섬' }], cards: ['해수욕장에서 쉬어요', '갯벌에서 조개를 캐요', '배를 타고 섬을 오가요'] }, target: { match: { m1: '해수욕장에서 쉬어요', m2: '갯벌에서 조개를 캐요', m3: '배를 타고 섬을 오가요' } }, difficulty: 0.25 },
            ],
          },
          {
            title: '지도에서 바닷가 찾기', tool: 'map', options: KOR, levels: LV_MAP,
            task: '이야기에 나오는 바닷가를 지도에서 찾아 핀을 꽂아요.',
            teacher: '"모래사장이 길게 이어지는 해수욕장이 많은 바다는 어느 쪽일까요?" 모습을 방향으로 옮겨 말하게 한다. 서해와 남해의 위치를 바꾸는 학생에게는 육지를 기준으로 방향을 먼저 말하게 한다.',
            items: [
              { prompt: '모래사장 해수욕장이 많은 바다에 핀을 꽂아 보세요.', target: { place: '동해' }, difficulty: 0.15 },
              { prompt: '갯벌 체험을 할 수 있는 바다에 핀을 꽂아 보세요.', target: { place: '서해' }, difficulty: 0.15 },
              { prompt: '섬이 많아 배를 타고 섬을 돌아볼 수 있는 바다에 핀을 꽂아 보세요.', target: { place: '남해' }, difficulty: 0.15 },
            ],
          },
        ],
        wrap: '"세 바닷가의 모습은 어떻게 달랐나요?" 동해안은 모래사장, 서해안은 갯벌, 남해안은 섬이라는 말을 모은다. 출구 1번에서 갯벌을 동해안과 이어 고르는 학생이 있으면 밀물과 썰물이 큰 바닷가를 지도에서 다시 찾게 한다.',
        exit: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '바닷가 모습', slots: [{ id: 's1', label: '동해안' }, { id: 's2', label: '서해안' }], cards: ['모래사장', '갯벌'] }, prompt: '바닷가와 알맞은 모습을 이으세요.', target: { match: { s1: '모래사장', s2: '갯벌' } }, difficulty: 0.2 },
          { type: 'choice', prompt: '크고 작은 섬이 가장 많은 바닷가는 어디인가요?', options: ['남해안', '동해안', '서해안 북쪽 끝'], answer: 0, difficulty: 0.15, explain: '남해안은 섬이 많고 해안선이 구불구불해요.' },
          { type: 'mood', prompt: '오늘 바닷가 견주기는 어땠나요?' },
        ],
        wsTitle: '세 바닷가의 모습',
        ws: [
          { type: 'figure', wide: true, prompt: '지도에서 갯벌 체험을 할 수 있는 바다에 ○ 하세요.', tool: 'map', options: KOR_WS, figures: [{ caption: '우리나라 칸 지도' }], answer: '지도 왼쪽(서쪽) 서해' },
          { type: 'table', prompt: '바닷가의 모습을 쓰세요.', columns: ['바닷가', '모습 한 가지'], cells: [['동해안', ''], ['서해안', ''], ['남해안', '']], answer: '동해안: 모래사장·해안선이 단순, 서해안: 갯벌·밀물과 썰물 차이가 큼, 남해안: 섬이 많고 해안선이 복잡' },
          { type: 'choice', prompt: '밀물과 썰물 때 바닷물이 크게 드나들어 갯벌이 넓은 바닷가는?', options: ['서해안', '동해안', '남해안'], answer: '서해안' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '해수욕장이 많은 모래사장은 ___안에서 많이 볼 수 있어요.', answer: '동해' },
          { type: 'short', prompt: '가 본 바닷가가 있다면 세 바닷가 가운데 어느 쪽과 비슷한지 까닭과 함께 쓰세요.', answer: '학생마다 다름' },
        ],
        chal: '카드 문장이 더 길어져 모습의 뜻을 스스로 읽어 가지를 정하고, 지도에서는 이름이 없는 바다를 찾아 핀을 꽂아요.',
        notes: '자주 보이는 어려움: ① 서해안과 남해안의 섬·갯벌을 섞는다 → 남해안은 섬, 서해안은 갯벌이라는 짝을 칠판에 남긴다. ② 갯벌을 바닷물이 늘 차 있는 곳으로 안다 → 썰물 때 드러난다는 것을 사진이나 영상으로 보여 준다. ③ 실제 갯벌의 넓이나 섬의 수 같은 통계는 교과서·공공 자료에서 교사가 확인한 뒤 쓴다(확인 필요).',
      }),
      // ───────────────────────── 4차시 ─────────────────────────
      LS(4, {
        title: '등고선처럼 높이 자료로 땅이 높은 곳 읽기',
        obj: '높이를 색과 단계로 나타낸 지도에서 높은 곳과 낮은 곳을 읽고 우리나라 땅의 높낮이 분포를 말할 수 있다.',
        std: S1,
        ill: 'a layered paper relief map of a peninsula where each higher layer is a darker colour, with a small flag on the highest layer',
        say: '어느 쪽이 더 높을까요?',
        extra: [{ motif: 'mountain', x: 110, y: 214 }, { motif: 'mountain', x: 330, y: 214, s: 0.8 }, { motif: 'star', x: 250, y: 90 }],
        intro: {
          t: '"산이 높은지 낮은지 지도 위에서 어떻게 알 수 있을까요?" 색이나 줄의 수로 높이를 나타낸다는 말을 이끌어 낸다. 오늘은 높이가 같은 곳을 하나의 단계로 묶어 나타낸 지도를 읽는다고 말한다. 시연 단추로 가장 높은 곳에 핀이 꽂히는 모습을 보여 준다.',
          s: '교실 바닥에서 책상, 의자, 창문 가운데 높이가 가장 높은 것을 말해 보고, 높이를 지도에 어떻게 나타낼지 이야기해 봅시다.',
          demo: { tool: 'map', options: W(KOR, { terrainView: 'contour' }), sequence: [{ highest: true }] },
        },
        acts: [
          {
            title: '높이 단계에 맞는 칸 찾기', tool: 'map', options: W(KOR, { terrainView: 'contour' }), levels: LV_MAP,
            task: '오른쪽 높이 범례를 읽고, 알맞은 높이 단계의 칸에 핀을 꽂아요.',
            teacher: '"높이 범례에서 가장 진한 단계는 무슨 뜻일까요?" 범례의 순서(낮은 땅부터 아주 높은 산)를 읽게 한다. 같은 단계가 여러 칸에 있어 어디에 꽂아도 되는 문항에서 당황하는 학생에게는 단계에 맞기만 하면 된다고 말해 준다. 숫자 높이(m)는 외우지 않는다고 알린다.',
            items: [
              { prompt: '높이 범례에서 가장 높은 단계인 아주 높은 산의 칸에 핀을 꽂아 보세요.', target: { height: 4 }, difficulty: 0.1 },
              { prompt: '높이 범례에서 높은 산 단계의 칸 하나에 핀을 꽂아 보세요.', target: { height: 3 }, difficulty: 0.15 },
              { prompt: '높이 범례에서 낮은 땅 단계의 칸 하나에 핀을 꽂아 보세요.', target: { height: 0 }, difficulty: 0.15,
                predict: { q: '낮은 땅 단계의 칸은 지도의 어느 쪽에 많을까요?', options: ['서쪽과 남쪽', '북쪽과 동쪽'], answer: 0 },
                conclude: '낮은 땅은 서쪽과 남쪽 바닷가 쪽에 많이 있어요.' },
            ],
          },
          {
            title: '높이 분포를 말로 옮기기', tool: 'map', options: W(KOR, { terrainView: 'contour', readOnly: true }), levels: LV_MAP,
            task: '지도에서 높이가 어떻게 달라지는지 읽고 알맞은 보기를 골라요.',
            teacher: '"서쪽에서 동쪽으로 가면서 색이 어떻게 달라지나요?" 손가락으로 서쪽에서 동쪽으로 훑으며 진해지는 것을 보게 한다. 태백산맥이 지도 동쪽에 길게 뻗은 산줄기라는 말은 칸 지도에서는 위치만 맞춘 것이라고 밝힌다. 큰 강이 서쪽과 남쪽으로 흐르는 까닭을 앞 시간과 이어 말하게 한다.',
            items: [
              { prompt: '서쪽에서 동쪽으로 갈수록 땅의 높이는 대체로 어떻게 달라지나요?', toolOptions: { ask: { choices: ['높아져요', '낮아져요', '같아요'], why: [null, '동쪽 색이 더 진해요.', '색이 달라지는 것을 다시 보세요.'] } }, target: { pick: 0 }, difficulty: 0.15 },
              { prompt: '큰 산줄기인 태백산맥은 우리나라의 어느 쪽에 길게 놓여 있나요?', toolOptions: { ask: { choices: ['동쪽', '서쪽', '남쪽 바다'], why: [null, '서쪽은 낮은 땅이 많아요.', '남쪽은 바다와 가까운 낮은 땅이에요.'] } }, target: { pick: 0 }, difficulty: 0.2 },
              { prompt: '땅의 높이 때문에 큰 강이 흘러가는 방향으로 알맞은 것은 무엇인가요?', toolOptions: { ask: { choices: ['서쪽과 남쪽', '동쪽', '북쪽'], why: [null, '동쪽은 높은 땅이에요.', '북쪽에는 높은 산이 있어요.'] } }, target: { pick: 0 }, difficulty: 0.25,
                predict: { q: '높은 곳과 낮은 곳 가운데 강물은 어느 쪽으로 흐를까요?', options: ['낮은 곳', '높은 곳'], answer: 0 },
                conclude: '강물은 높은 곳에서 낮은 곳으로 흐르므로 우리나라 큰 강은 서쪽과 남쪽 바다로 가요.' },
            ],
          },
        ],
        wrap: '"높이를 색으로 나타낸 지도에서 무엇을 읽을 수 있나요?" 높은 곳과 낮은 곳의 자리, 높이가 달라지는 방향을 말하게 한다. 출구 2번에서 서쪽이 더 높다고 답하는 학생이 있으면 색의 진하기를 다시 짚는다.',
        exit: [
          { type: 'tool', tool: 'map', options: W(KOR, { terrainView: 'contour', readOnly: true, ask: { q: '아주 높은 산이 있는 방향은?', choices: ['북쪽', '남쪽 바다', '서쪽 바닷가'], why: [null, '남쪽은 낮은 땅이에요.', '서쪽은 낮은 땅이에요.'] } }), prompt: '높이 지도에서 가장 진한 곳이 있는 방향을 고르세요.', target: { pick: 0 }, difficulty: 0.2 },
          { type: 'choice', prompt: '높이를 나타낸 지도에서 색이 진할수록 어떤 뜻인가요?', options: ['땅이 더 높아요', '땅이 더 낮아요', '바다가 더 넓어요'], answer: 0, difficulty: 0.1, explain: '높이 지도에서는 진한 색이 더 높은 땅을 뜻해요.' },
          { type: 'mood', prompt: '오늘 높이 지도 읽기는 어땠나요?' },
        ],
        wsTitle: '높이 지도 읽기',
        ws: [
          { type: 'figure', wide: true, prompt: '지도에서 가장 높은 곳에 △, 가장 낮은 땅이 많은 쪽에 ○ 하세요.', tool: 'map', options: W(KOR_WS, { terrainView: 'contour' }), figures: [{ caption: '높이 지도' }], answer: '△ 위쪽·동쪽의 가장 진한 곳, ○ 서쪽과 남쪽 바닷가' },
          { type: 'table', prompt: '방향마다 땅의 높이를 쓰세요.', columns: ['방향', '땅의 높이(높다·낮다)'], cells: [['동쪽', ''], ['서쪽', ''], ['남쪽 바닷가', '']], answer: '동쪽 높다, 서쪽 낮다, 남쪽 바닷가 낮다' },
          { type: 'choice', prompt: '높이 지도에서 가장 진한 단계는 무엇을 뜻하나요?', options: ['가장 높은 곳', '가장 낮은 곳', '바다'], answer: '가장 높은 곳' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '서쪽에서 동쪽으로 갈수록 땅이 대체로 ___져요(높아·낮아).', answer: '높아' },
          { type: 'short', prompt: '높이 지도에서 알게 된 것 한 가지를 한 문장으로 쓰세요.', answer: '예: 동쪽이 높고 서쪽이 낮아서 큰 강이 서쪽으로 흘러요.' },
        ],
        chal: '이름이 사라지고 높이 단계만 보며, 여러 칸이 같은 단계일 때 가장 알맞은 곳을 스스로 정해요.',
        notes: '자주 보이는 어려움: ① 진한 색을 낮은 땅으로 읽는다 → 범례를 먼저 읽는다. ② 높이 단계(범례)와 실제 높이(m)를 섞는다 → 이 칸 지도는 단계만 쓰고 실제 높이를 쓰지 않는다. ③ 실제 우리나라 산의 높이와 산지 비율은 교과서나 공공 자료에서 교사가 확인한 값만 보충한다(확인 필요).',
      }),
      // ───────────────────────── 5차시 ─────────────────────────
      LS(5, {
        title: '산지와 평야를 지역으로 나누어 분포 말하기',
        obj: '지도에서 산지와 평야의 분포를 찾아 산지는 북쪽과 동쪽에, 평야는 서쪽과 남쪽에 많다고 자료로 말할 수 있다.',
        std: S1,
        ill: 'a paper map of a peninsula painted green on the high north and east and yellow on the low west and south, with tiny rice plants on the yellow',
        say: '산지와 평야는 어디에 많을까요?',
        extra: [{ motif: 'mountain', x: 110, y: 214 }, { motif: 'leaf', x: 250, y: 222 }, { motif: 'tree', x: 380, y: 216 }],
        intro: {
          t: '"쌀농사를 크게 지으려면 어떤 땅이 알맞을까요?" 평평하고 물을 끌어 쓰기 쉬운 땅이라는 학생 말을 받는다. 오늘은 땅을 산지와 평야로 나눈 지도에서 두 땅이 어디에 많은지 찾아본다고 알린다. 시연 단추로 산지 칸에 핀이 꽂히는 모습을 보여 준다.',
          s: '우리 고장 가까이에 있는 산과 들을 떠올려 보고, 어느 쪽이 더 넓은지 말해 봅시다.',
          demo: { tool: 'map', options: KOR_REGION, sequence: [{ region: '산지' }] },
        },
        acts: [
          {
            title: '산지와 평야에 핀 꽂기', tool: 'map', options: KOR_REGION, levels: LV_MAP,
            task: '이름이 붙은 두 지역 가운데 알맞은 곳에 핀을 꽂아요.',
            teacher: '"초록색 땅과 노란색 땅은 각각 어떤 땅일까요?" 지도 이름표를 먼저 읽게 한다. 지역 안 어느 칸에 꽂아도 같은 지역이라는 점을 알려 준다. 산지를 높은 땅, 평야를 낮고 평평한 땅으로 짝지어 말하게 한다.',
            items: [
              { prompt: '높은 산이 많은 지역인 산지 안에 핀을 꽂아 보세요.', target: { region: '산지' }, difficulty: 0.1 },
              { prompt: '낮고 평평한 땅인 평야 안에 핀을 꽂아 보세요.', target: { region: '평야' }, difficulty: 0.1 },
              { prompt: '평야에 놓인 핀을 끌어 산지 안으로 옮겨 보세요.', state: { pin: [3, 4] }, target: { region: '산지' }, difficulty: 0.15 },
            ],
          },
          {
            title: '산지와 평야의 분포 읽기', tool: 'map', options: W(KOR_REGION, { readOnly: true }), levels: LV_MAP,
            task: '지도를 보고 질문에 알맞은 보기를 골라요.',
            teacher: '"산지는 주로 어느 쪽에 모여 있나요? 평야는요?" 두 지역을 손가락으로 훑으며 말하게 한다. 평야가 한 곳에만 있다고 답하는 학생에게는 서쪽과 남쪽에 이어져 있음을 짚는다. 이 지도의 지역은 높이 단계로 나눈 것이라 실제 지명의 평야와 같지는 않다고 알려 준다.',
            items: [
              { prompt: '산지는 우리나라의 어느 쪽에 많은가요?', toolOptions: { ask: { choices: ['북쪽과 동쪽', '서쪽과 남쪽', '모든 쪽에 같아요'], why: [null, '그쪽은 평야가 많아요.', '지도에서 초록색이 한쪽에 몰려 있어요.'] } }, target: { pick: 0 }, difficulty: 0.15 },
              { prompt: '넓은 평야가 이어진 쪽은 어디인가요?', toolOptions: { ask: { choices: ['서쪽과 남쪽', '북쪽 끝', '동쪽 바닷가'], why: [null, '북쪽에는 높은 산이 있어요.', '동쪽에는 산지가 길게 이어져 있어요.'] } }, target: { pick: 0 }, difficulty: 0.2,
                predict: { q: '큰 벼농사 땅이 되기 쉬운 곳은 산지일까요, 평야일까요?', options: ['평야', '산지'], answer: 0 },
                conclude: '평평하고 낮은 평야는 논을 만들어 벼농사를 짓기에 알맞아요.' },
              { prompt: '한라산이 있는 섬은 어느 지역으로 나뉘어 있나요?', toolOptions: { ask: { choices: ['산지', '평야'], why: [null, '한라산은 높은 산이라 산지예요.'] } }, target: { pick: 0 }, difficulty: 0.2 },
            ],
          },
        ],
        wrap: '"산지와 평야는 각각 어디에 많았나요?" 산지는 북쪽과 동쪽, 평야는 서쪽과 남쪽이라는 말로 정리하게 한다. 출구 2번에서 두 땅을 반대로 고르는 학생이 있으면 앞 시간의 높이 지도를 겹쳐 떠올려 보게 한다.',
        exit: [
          { type: 'tool', tool: 'map', options: W(KOR_REGION, { regionNames: false }), prompt: '이름이 없는 지도에서 평야 쪽(옅은 노란색)에 핀을 꽂으세요.', target: { region: '평야' }, difficulty: 0.2 },
          { type: 'choice', prompt: '산지가 많은 곳을 바르게 짝지은 것은?', options: ['북쪽과 동쪽', '서쪽과 남쪽', '바다 한가운데'], answer: 0, difficulty: 0.1, explain: '산지는 높은 땅이 많은 북쪽과 동쪽에 많아요.' },
          { type: 'mood', prompt: '오늘 산지와 평야 분포 읽기는 어땠나요?' },
        ],
        wsTitle: '산지와 평야의 분포',
        ws: [
          { type: 'figure', wide: true, prompt: '지도에서 산지에 △, 평야에 ○ 하세요.', tool: 'map', options: KOR_REGION_WS, figures: [{ caption: '산지와 평야' }], answer: '△ 북쪽과 동쪽 산지, ○ 서쪽과 남쪽 평야' },
          { type: 'table', prompt: '땅의 이름과 많은 쪽을 쓰세요.', columns: ['땅', '많은 쪽'], cells: [['산지', ''], ['평야', '']], answer: '산지: 북쪽과 동쪽, 평야: 서쪽과 남쪽' },
          { type: 'choice', prompt: '넓은 논이 있는 쌀농사를 짓기 알맞은 땅은?', options: ['평야', '높은 산꼭대기', '바닷속'], answer: '평야' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '높은 땅이 많은 ___은 북쪽과 동쪽에 많아요(산지·평야).', answer: '산지' },
          { type: 'short', prompt: '우리 고장은 산지와 평야 가운데 어느 땅에 가까운지 까닭과 함께 쓰세요.', answer: '학생마다 다름' },
        ],
        chal: '이름이 사라져 색만으로 두 땅을 나누고, 분포를 방위 말(북동·서남)로 정확히 써 봐요.',
        notes: '자주 보이는 어려움: ① 산지와 평야의 위치를 반대로 말한다 → 높이 지도와 겹쳐 보게 한다. ② 한 지역이 한 군데에 모여 있다고 단정한다 → 서쪽과 남쪽에 이어져 있음을 손으로 훑게 한다. ③ 이 지도는 높이 단계로 나눈 칸 지도이고 실제 평야의 이름·넓이는 교사가 교과서나 공공 자료에서 확인한 뒤 보탠다(확인 필요).',
      }),
      // ───────────────────────── 6차시 ─────────────────────────
      LS(6, {
        title: '지형별 체험을 고르고 여행 코스 정하기',
        obj: '산지·강·세 바닷가에서 할 수 있는 체험을 골라 지도에 표시하고 안전하게 다녀올 여행 계획을 세울 수 있다.',
        std: S1,
        ill: 'a hand-drawn travel route drawn across a paper map with tiny hiking boots, a beach umbrella and a small boat as stops',
        say: '어느 지형을 여행하고 싶나요?',
        extra: [{ motif: 'mountain', x: 110, y: 214 }, { motif: 'tree', x: 250, y: 216 }, { motif: 'wave', x: 390, y: 232 }],
        intro: {
          t: '"친구와 함께 우리나라 국토를 여행한다면 산, 강, 바다 가운데 어디부터 가고 싶나요? 왜 그곳인가요?" 학생이 고른 곳과 까닭을 칠판에 두세 개 적는다. 오늘은 칸 지도에서 지형별로 할 수 있는 체험을 고르고 안전한 여행 계획까지 세운다고 알린다. 지도의 지명은 위치 관계만 맞춘 것이라고 다시 말해 준다.',
          s: '가 보고 싶은 우리나라 땅의 모습(산, 강, 바다, 섬)을 하나 고르고, 그곳에서 하고 싶은 체험을 말해 봅시다.',
          demo: { tool: 'map', options: KOR, sequence: [{ place: '태백산맥' }, { place: '서해' }] },
        },
        acts: [
          {
            title: '여행 장소를 지도에 표시하기', tool: 'map', options: KOR, levels: LV_MAP,
            task: '이야기에 나오는 여행지를 칸 지도에서 찾아 핀을 꽂아요.',
            teacher: '"산줄기를 따라 걸으며 풍경을 보고 싶다면 지도의 어디일까요?" 체험을 지형으로 바꿔 말하게 한다. 한라산과 태백산맥을 모두 산이라 같은 곳으로 묶는 학생에게는 한라산이 남쪽 바다 위 섬에 있다는 점을 짚는다.',
            items: [
              { prompt: '긴 산줄기를 따라 걸으며 풍경을 보려고 해요. 동쪽의 큰 산줄기에 핀을 꽂아 보세요.', target: { place: '태백산맥' }, difficulty: 0.15 },
              { prompt: '배를 타고 바다를 건너 높은 산에 오르려고 해요. 남쪽 바다 위의 산에 핀을 꽂아 보세요.', target: { place: '한라산' }, difficulty: 0.15 },
              { prompt: '강을 따라 걸으며 강물이 흘러가는 모습을 보려고 해요. 중부 지방의 한강에 핀을 꽂아 보세요.', target: { place: '한강' }, difficulty: 0.15 },
            ],
          },
          {
            title: '체험과 지형 짝 짓고 안전 약속 정하기', tool: 'mindmap',
            task: '카드를 이어 보고 여행에서 꼭 지킬 안전 약속을 골라요.',
            teacher: '"갯벌 체험은 아무 때나 해도 될까요?" 밀물과 썰물 때 시간을 알아보고 어른과 함께 다녀야 한다고 말해 준다. 안전 약속에 대해 지나치게 두려워하는 학생에게는 준비하면 안전하게 즐길 수 있다고 안심시킨다.',
            items: [
              { prompt: '체험과 어울리는 땅의 모습을 이어 보세요.', toolOptions: { mode: 'match', topic: '체험과 지형', slots: [{ id: 'm1', label: '산줄기 걷기' }, { id: 'm2', label: '갯벌 체험' }, { id: 'm3', label: '모래사장 해수욕' }], cards: ['서해안', '동해안', '산지'] }, target: { match: { m1: '산지', m2: '서해안', m3: '동해안' } }, difficulty: 0.2 },
              { prompt: '갯벌 체험을 갈 때 지킬 약속만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '갯벌 안전', cards: ['밀물과 썰물 때를 미리 알아봐요', '어른과 함께 다녀요', '혼자 멀리 걸어 들어가요', '물이 차올라도 계속 놀아요'] }, target: { pick: ['밀물과 썰물 때를 미리 알아봐요', '어른과 함께 다녀요'] }, difficulty: 0.2,
                predict: { q: '갯벌 체험 때 가장 먼저 알아볼 것은 무엇일까요?', options: ['물이 들고 나는 때', '좋아하는 노래'], answer: 0 },
                conclude: '갯벌에서는 물이 차오를 수 있어서 밀물·썰물 때를 미리 알고 어른과 함께 다녀야 해요.' },
              { prompt: '여행 계획 카드를 차례대로 놓아 보세요.', toolOptions: { mode: 'order', cards: ['가고 싶은 지형 정하기', '지도에서 위치 찾기', '안전 약속과 준비물 정하기', '다녀온 뒤 알게 된 것 정리하기'] }, target: { order: ['가고 싶은 지형 정하기', '지도에서 위치 찾기', '안전 약속과 준비물 정하기', '다녀온 뒤 알게 된 것 정리하기'] }, difficulty: 0.2 },
            ],
          },
        ],
        wrap: '"여행지를 정할 때 지형과 체험을 어떻게 이어 말하나요?" 산줄기는 걷기, 갯벌은 서해안, 모래사장은 동해안이라는 말을 모은다. 출구 2번에서 안전 약속을 건너뛰어도 된다고 답하는 학생이 있으면 활동 2의 갯벌 안전 문항으로 돌아간다.',
        exit: [
          { type: 'tool', tool: 'map', options: W(KOR, { names: false }), prompt: '이름 없는 칸 지도에서 모래사장 해수욕장이 많은 바다(동해)를 찾아 핀을 꽂으세요.', target: { place: '동해' }, difficulty: 0.2 },
          { type: 'choice', prompt: '여행을 가기 전에 꼭 할 일로 알맞은 것은 무엇인가요?', options: ['날씨와 안전 약속을 알아봐요', '어른께 말하지 않고 떠나요', '준비물 없이 가요'], answer: 0, difficulty: 0.1, explain: '여행은 날씨와 안전 약속을 미리 알아보고 준비해야 즐겁게 다녀올 수 있어요.' },
          { type: 'mood', prompt: '오늘 여행 계획 세우기는 어땠나요?' },
        ],
        wsTitle: '국토 여행 계획',
        ws: [
          { type: 'figure', wide: true, prompt: '가고 싶은 곳 두 곳에 ○ 하고 1, 2 번호를 쓰세요.', tool: 'map', options: KOR_WS, figures: [{ caption: '우리나라 칸 지도' }], answer: '학생마다 다름' },
          { type: 'table', prompt: '여행 계획표를 쓰세요.', columns: ['가고 싶은 곳', '땅의 모습', '하고 싶은 체험'], rows: 2, answer: '학생마다 다름 — 예: 서해 / 갯벌 / 조개 캐기' },
          { type: 'check', prompt: '여행 안전 약속에 ✓ 하세요.', options: ['날씨를 미리 알아봐요', '어른과 함께 다녀요', '위험한 곳에 혼자 가요'], answer: '첫째와 둘째' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '갯벌 체험은 밀물과 썰물 ___를 미리 알아보고 가요(때·색).', answer: '때' },
          { type: 'short', prompt: '이번 여행에서 알고 싶은 점을 한 가지 쓰세요.', answer: '학생마다 다름' },
        ],
        chal: '이름이 사라져 체험만 읽고 지도에서 장소를 찾고, 안전 약속 카드가 더 섞여 나와요.',
        notes: '자주 보이는 어려움: ① 체험을 말하면서 어느 지형인지 짝 짓지 못한다 → 체험에서 땅의 모습을 먼저 말하게 한다. ② 안전 약속을 건너뛴다 → 갯벌·산 같은 곳은 위험 요인이 있다는 점을 짚는다. ③ 실제 여행지의 입장 시간·안전 수칙은 해당 기관 자료에서 교사가 확인한 뒤 쓴다(확인 필요).',
      }),
      // ───────────────────────── 7차시 ─────────────────────────
      LS(7, {
        title: '산지·평야·바닷가에서 달라지는 사람들의 생활 짝 짓기',
        obj: '산지, 평야, 바닷가의 지형 특징에 따라 사람들의 일과 생활이 어떻게 달라지는지 사례를 짝 지어 설명할 수 있다.',
        std: S1,
        ill: 'a farmer in a wide rice plain, a woodcutter on a mountain slope and a fisher at a harbor drawn as small paper figures on a single map',
        say: '지형에 따라 생활이 달라질까요?',
        extra: [{ motif: 'mountain', x: 110, y: 214 }, { motif: 'leaf', x: 250, y: 222 }, { motif: 'wave', x: 390, y: 232 }],
        intro: {
          t: '"산지에서 사는 사람과 평야에서 사는 사람은 같은 일을 할까요?" 학생의 짐작을 칠판에 두 줄로 적는다. 오늘은 앞에서 찾은 지형의 특징을 근거로 사람들의 생활을 짝 지어 본다고 알린다. 한 곳에서도 여러 일이 함께 있다는 점은 열어 둔다.',
          s: '가족이 먹는 음식 가운데 산, 평야, 바다에서 온 것을 하나씩 떠올려 말해 봅시다.',
          demo: { tool: 'map', options: KOR_REGION, sequence: [{ region: '평야' }] },
        },
        acts: [
          {
            title: '지형과 생활 모습 나누기', tool: 'mindmap',
            task: '카드를 읽고 산지·평야·바닷가 가지로 나누어요.',
            teacher: '"왜 평야에 큰 도시와 논이 많을까요?" 평평해서 길과 집을 짓기 쉽고 논을 만들기 좋기 때문이라는 말을 이끌어 낸다. 산지에서 농사는 하지 않는다고 단정하는 학생에게는 비탈 밭도 있다고 알려 준다.',
            items: [
              { prompt: '생활 모습 카드 여섯 장을 산지·평야·바닷가로 나누어 보세요.', toolOptions: { topic: '지형과 생활', slots: ['산지', '평야', '바닷가'], cards: ['나무를 가꾸고 산나물을 얻어요', '비탈에 밭을 일궈요', '넓은 논에서 쌀을 길러요', '큰 도시와 길이 많이 모여요', '항구에서 배가 드나들어요', '해수욕장에서 관광객을 맞아요'] }, target: { sort: { '산지': ['나무를 가꾸고 산나물을 얻어요', '비탈에 밭을 일궈요'], '평야': ['넓은 논에서 쌀을 길러요', '큰 도시와 길이 많이 모여요'], '바닷가': ['항구에서 배가 드나들어요', '해수욕장에서 관광객을 맞아요'] } }, difficulty: 0.25 },
              { prompt: '평야의 특징 때문에 생기는 생활 모습만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '평야의 생활', cards: ['넓은 논에서 큰 기계로 모를 심어요', '길과 도시를 만들기 쉬워요', '가파른 비탈에서 나무를 베어요', '배를 타고 고기를 잡아요'] }, target: { pick: ['넓은 논에서 큰 기계로 모를 심어요', '길과 도시를 만들기 쉬워요'] }, difficulty: 0.25,
                predict: { q: '큰 논이 있는 곳에서는 어떤 기계가 쓰이기 쉬울까요?', options: ['논에서 쓰는 큰 기계', '배를 끄는 기계'], answer: 0 },
                conclude: '평평한 땅에서는 큰 기계를 쓰기 쉬워 넓은 논농사와 도시가 발달해요.' },
              { prompt: '지형과 그 지형이 만든 불편한 점을 이어 보세요.', toolOptions: { mode: 'match', topic: '지형과 불편함', slots: [{ id: 'm1', label: '가파른 산지' }, { id: 'm2', label: '바닷가' }], cards: ['큰 논을 만들기 어려워요', '태풍 때 바닷물이 넘칠 수 있어요', '비가 오면 평야가 사라져요'] }, target: { match: { m1: '큰 논을 만들기 어려워요', m2: '태풍 때 바닷물이 넘칠 수 있어요' } }, difficulty: 0.3 },
            ],
          },
          {
            title: '지도를 보고 생활 모습 추리하기', tool: 'map', options: W(KOR_REGION, { readOnly: true }), levels: LV_MAP,
            task: '지도를 보고 질문에 알맞은 보기를 골라요.',
            teacher: '"지도에서 노란색 땅이 넓은 쪽에서는 어떤 일이 많을까요?" 지도에서 알 수 있는 것(땅의 종류와 자리)으로 추리하게 한다. 지도만으로는 실제 일의 종류를 알 수 없고 추리라고 말하는 습관을 붙인다.',
            items: [
              { prompt: '평야가 넓은 서쪽과 남쪽에서 많이 할 만한 일은 무엇일까요?', toolOptions: { ask: { choices: ['벼농사', '산나물 따기', '높은 산 스키'], why: [null, '산나물은 산지에서 많이 얻어요.', '스키는 눈이 쌓이는 높은 산에서 해요.'] } }, target: { pick: 0 }, difficulty: 0.2 },
              { prompt: '산지가 넓은 북쪽과 동쪽에서 많이 얻을 만한 것은 무엇일까요?', toolOptions: { ask: { choices: ['나무와 산나물', '넓은 논의 쌀', '갯벌 조개'], why: [null, '넓은 논은 평야에 많아요.', '갯벌은 바닷가에 있어요.'] } }, target: { pick: 0 }, difficulty: 0.2 },
              { prompt: '지도만으로 확실히 알 수 있는 것은 무엇인가요?', toolOptions: { ask: { choices: ['산지는 북쪽과 동쪽에 있어요', '모든 평야 사람은 쌀만 길러요', '산지 사람은 모두 행복해요'], why: [null, '평야 사람도 여러 일을 해요.', '행복한지는 지도에 나와 있지 않아요.'] } }, target: { pick: 0 }, difficulty: 0.3 },
            ],
          },
        ],
        wrap: '"지형에 따라 사람들의 생활이 달라지는 까닭은 무엇일까요?" 땅의 모습이 일과 생활에 영향을 준다는 말을 모은다. 출구 2번에서 한 지형에는 한 가지 일만 한다고 답하는 학생이 있으면 한 곳에도 여러 일이 함께 있다고 알려 준다.',
        exit: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '지형과 생활', slots: [{ id: 's1', label: '평야' }, { id: 's2', label: '산지' }], cards: ['넓은 논에서 쌀을 길러요', '산에서 나물을 얻어요'] }, prompt: '지형과 알맞은 생활 모습을 이으세요.', target: { match: { s1: '넓은 논에서 쌀을 길러요', s2: '산에서 나물을 얻어요' } }, difficulty: 0.2 },
          { type: 'choice', prompt: '지형과 생활의 관계를 바르게 말한 것은?', options: ['땅의 모습이 사람들의 일과 생활에 영향을 줘요', '지형은 생활과 아무 관계가 없어요', '모든 곳에서 같은 일만 해요'], answer: 0, difficulty: 0.1, explain: '땅의 모습에 맞춰 사람들은 알맞은 일과 생활 방식을 만들어 가요.' },
          { type: 'mood', prompt: '오늘 지형과 생활 짝 짓기는 어땠나요?' },
        ],
        wsTitle: '지형과 생활',
        ws: [
          { type: 'figure', wide: true, prompt: '쌀농사를 많이 짓기 알맞은 땅에 ○ 하세요.', tool: 'map', options: KOR_REGION_WS, figures: [{ caption: '산지와 평야' }], answer: '서쪽과 남쪽의 평야' },
          { type: 'table', prompt: '지형과 생활 모습을 짝 지어 쓰세요.', columns: ['지형', '생활 모습 한 가지'], cells: [['산지', ''], ['평야', ''], ['바닷가', '']], answer: '산지: 나무·산나물, 평야: 쌀농사·도시, 바닷가: 항구·해수욕장' },
          { type: 'choice', prompt: '항구에서 배가 드나드는 모습은 어느 지형의 생활인가요?', options: ['바닷가', '산지', '평야 한가운데'], answer: '바닷가' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '땅의 모습에 따라 사람들의 ___과 생활이 달라져요.', answer: '일' },
          { type: 'short', prompt: '내가 사는 곳의 땅 모습과 그곳 사람들이 하는 일 한 가지를 짝 지어 쓰세요.', answer: '학생마다 다름' },
        ],
        chal: '카드가 더 섞이고, 지도 읽기 문항에서 확실히 아는 것과 추리를 스스로 구별해요.',
        notes: '자주 보이는 어려움: ① 지형과 일을 외워서 짝 짓는다 → 땅의 모습 때문에 어떤 일이 알맞은지 까닭을 말하게 한다. ② 한 지형에는 한 가지 일만 있다고 단정한다 → 여러 일이 함께 있다고 알려 준다. ③ 지도로 알 수 있는 것과 추리를 섞는다 → 지도에는 땅의 자리와 종류만 나와 있다고 짚는다. 실제 지역의 산업 현황은 교사가 자료에서 확인한 뒤 쓴다(확인 필요).',
      }),
      // ───────────────────────── 8차시 ─────────────────────────
      LS(8, {
        title: '동해 바다에서 울릉도와 독도의 자리 찾기',
        obj: '칸 지도에서 독도가 동해에 있는 대한민국의 섬이며 울릉도의 남동쪽에 있다는 것을 방위로 설명할 수 있다.',
        std: S2,
        ill: 'two paper islands in a deep blue sea, a larger one and a smaller one to its south-east, with a compass rose in the corner',
        say: '독도는 어디에 있을까요?',
        extra: [{ motif: 'wave', x: 120, y: 232 }, { motif: 'wave', x: 250, y: 232 }, { motif: 'bird', x: 340, y: 86 }],
        intro: {
          t: '"독도는 어느 바다에 있고, 우리나라 어느 쪽에 있을까요?" 학생이 알고 있는 것을 칠판에 적는다. 독도는 동해에 있는 대한민국의 섬이고 행정구역은 경상북도 울릉군 독도리라고 알려 준다. 오늘은 칸 지도에서 육지·울릉도·독도의 자리를 찾는다고 말하고, 지도는 위치 관계만 맞춘 것이라고 밝힌다.',
          s: '독도에 대해 알고 있는 것을 짝에게 한 가지 말해 봅시다.',
          demo: { tool: 'map', options: DOK, sequence: [{ place: '울릉도' }, { place: '독도' }] },
        },
        acts: [
          {
            title: '육지·울릉도·독도 찾기', tool: 'map', options: DOK, levels: LV_MAP,
            task: '칸 지도에서 알맞은 곳을 찾아 핀을 꽂아요. 지도 위쪽이 북쪽이에요.',
            teacher: '"독도는 육지에서 얼마나 떨어져 있을까요?" 학생이 숫자를 말하면 칠판에 적어 두고 교과서로 확인하자고 말한다. 독도가 울릉도보다 육지에 더 가깝다고 답하는 학생에게는 지도에서 두 거리를 손가락으로 재어 견주게 한다. 바다 이름은 동해라고 정확히 말한다.',
            items: [
              { prompt: '육지의 동쪽 바다에 있는 큰 섬 울릉도를 찾아 핀을 꽂아 보세요.', target: { place: '울릉도' }, difficulty: 0.1 },
              { prompt: '울릉도 가까이 있는 작은 섬 독도를 찾아 핀을 꽂아 보세요.', target: { place: '독도' }, difficulty: 0.1 },
              { prompt: '울릉도에서 남동쪽으로 두 칸 간 곳에 핀을 꽂아 보세요.', state: { pin: [3, 2] }, target: { from: '울릉도', dir: '남동', steps: 2 }, difficulty: 0.2,
                predict: { q: '독도는 울릉도의 어느 방위에 있을까요?', options: ['남동쪽', '북서쪽'], answer: 0 },
                conclude: '독도는 울릉도의 남동쪽 바다에 있는 섬이에요.' },
              { prompt: '육지와 울릉도, 독도가 모두 있는 바다의 이름에 핀을 꽂아 보세요.', target: { place: '동해' }, difficulty: 0.1 },
            ],
          },
          {
            title: '방위표로 독도의 위치 말하기', tool: 'map', options: W(DOK, { mode: 'compass' }),
            levels: { easy: { readout: true }, base: {}, challenge: {} },
            task: '방위표를 돌려 지도의 북쪽에 맞춘 뒤 알맞은 방위를 골라요.',
            teacher: '"울릉도에서 독도까지 가려면 어느 방위로 가야 할까요?" 방위표를 북쪽에 맞춘 뒤 읽게 한다. 육지에서 울릉도 쪽을 서쪽이라고 답하는 학생에게는 출발과 도착을 거꾸로 읽었는지 묻는다. 방위는 항상 출발하는 곳에서 본다고 짚는다.',
            items: [
              { prompt: '울릉도에서 본 독도는 어느 방위인가요?', target: { from: '울릉도', to: '독도' }, difficulty: 0.2 },
              { prompt: '울릉도에서 본 육지는 어느 방위인가요?', target: { from: '울릉도', to: '육지' }, difficulty: 0.2 },
              { prompt: '육지에서 본 울릉도는 어느 방위인가요?', target: { from: '육지', to: '울릉도' }, difficulty: 0.2 },
            ],
          },
        ],
        wrap: '"독도는 어느 바다에 있고 울릉도의 어느 방위에 있나요?" 동해에 있고 울릉도의 남동쪽이라는 말을 모은다. 출구 2번에서 독도가 육지에 더 가깝다고 고르는 학생이 있으면 활동 1의 지도로 돌아가 두 거리를 견주게 한다.',
        exit: [
          { type: 'tool', tool: 'map', options: W(DOK, { names: false }), prompt: '이름 없는 지도에서 독도를 찾아 핀을 꽂으세요.', target: { place: '독도' }, difficulty: 0.2 },
          { type: 'choice', prompt: '독도는 육지와 울릉도 가운데 어느 쪽에 더 가까운가요?', options: ['울릉도', '육지'], answer: 0, difficulty: 0.15, explain: '독도는 육지보다 울릉도에 훨씬 가까이 있어요.' },
          { type: 'mood', prompt: '오늘 독도 위치 찾기는 어땠나요?' },
        ],
        wsTitle: '독도의 위치',
        ws: [
          { type: 'figure', wide: true, prompt: '지도에서 울릉도와 독도를 찾아 ○ 하고, 독도는 울릉도의 어느 방위인지 쓰세요.', tool: 'map', options: DOK_WS, figures: [{ caption: '동해 칸 지도' }], answer: '울릉도 위쪽 가운데 섬, 독도 아래쪽 오른쪽 섬 — 남동쪽' },
          { type: 'table', prompt: '독도에 대해 알아본 것을 쓰세요.', columns: ['바다', '울릉도에서의 방위', '행정구역'], cells: [['', '', '']], answer: '동해, 남동쪽, 경상북도 울릉군 독도리' },
          { type: 'choice', prompt: '독도가 있는 바다로 알맞은 것은?', options: ['동해', '서해', '남해'], answer: '동해' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '독도는 육지보다 ___에 더 가까워요.', answer: '울릉도' },
          { type: 'short', prompt: '독도에 대해 더 알고 싶은 점을 한 가지 쓰세요.', answer: '학생마다 다름' },
        ],
        chal: '이름이 사라지고 방위표가 돌아가 있어 방위표를 먼저 북쪽에 맞춘 뒤 독도의 위치를 말해 봐요.',
        notes: '독도는 대한민국 영토이며 행정구역은 경상북도 울릉군 독도리, 바다 이름은 동해라고 정확히 말해 준다(대한민국 정부 입장). 자주 보이는 어려움: ① 방위를 거꾸로 말한다 → 방위는 출발하는 곳에서 본다고 짚는다. ② 거리를 감으로 말한다 → 지도에서 칸 수로 견주게 한다. ③ 육지·울릉도·독도 사이의 실제 거리와 독도의 면적은 교과서나 동북아역사재단·해양수산부 자료에서 교사가 확인한 값만 쓴다(확인 필요).',
      }),
      // ───────────────────────── 9차시 ─────────────────────────
      LS(9, {
        title: '동도와 서도로 이루어진 독도의 모습 살펴보기',
        obj: '독도가 동도와 서도 두 큰 섬과 작은 바위섬들로 이루어졌다는 것을 알고 독도의 자연환경을 말할 수 있다.',
        std: S2,
        ill: 'two rocky paper islets close together with a small lighthouse on the eastern one and white seabirds circling above, waves lapping around',
        say: '독도는 어떤 섬일까요?',
        extra: [{ motif: 'bird', x: 130, y: 90 }, { motif: 'bird', x: 340, y: 100 }, { motif: 'wave', x: 250, y: 232 }],
        intro: {
          t: '"독도는 섬 하나일까요, 여러 개일까요?" 학생이 아는 대로 말하게 하고, 독도는 동도와 서도 두 큰 섬과 여러 작은 바위섬으로 이루어져 있다고 알려 준다. 독도에는 숲이 우거진 큰 산이 없고 바위가 많다는 모습을 사진이나 영상으로 보여 줄 수 있다. 오늘 쓰는 지도는 두 섬이 가까이 있는 모습만 맞춘 칸 지도다.',
          s: '독도 사진이나 영상을 본 적이 있다면 어떤 모습이었는지 짝에게 말해 봅시다.',
          demo: { tool: 'map', options: DOK2, sequence: [{ place: '서도' }, { place: '동도' }] },
        },
        acts: [
          {
            title: '동도와 서도 찾기', tool: 'map', options: DOK2, levels: LV_MAP,
            task: '독도 가까이 보기 지도에서 두 섬을 찾아 핀을 꽂아요.',
            teacher: '"두 섬은 서로 어느 방위에 있을까요?" 서도가 서쪽, 동도가 동쪽에 있다는 이름과 방위의 짝을 짚는다. 동도에 등대가 있다고 말해 주고, 서도와 헷갈리는 학생에게는 지도의 등대 기호를 가리키게 한다.',
            items: [
              { prompt: '독도의 서쪽에 있는 큰 섬 서도를 찾아 핀을 꽂아 보세요.', target: { place: '서도' }, difficulty: 0.1 },
              { prompt: '독도의 동쪽에 있고 등대가 있는 큰 섬 동도를 찾아 핀을 꽂아 보세요.', target: { place: '동도' }, difficulty: 0.1 },
              { prompt: '서도에서 동쪽으로 두 칸 간 곳에 핀을 꽂아 보세요.', state: { pin: [2, 0] }, target: { from: '서도', dir: '동', steps: 2 }, difficulty: 0.2,
                predict: { q: '서도에서 동쪽으로 가면 어느 섬이 나올까요?', options: ['동도', '울릉도'], answer: 0 },
                conclude: '서도에서 동쪽으로 가면 동도가 나와요. 두 섬은 가까이 이웃해 있어요.' },
            ],
          },
          {
            title: '독도의 자연 모습 알아보기', tool: 'mindmap',
            task: '카드를 읽고 독도에서 볼 수 있는 모습을 골라요.',
            teacher: '"독도에는 어떤 생물이 많이 찾아올까요?" 바닷새인 괭이갈매기가 많이 찾아온다는 점을 알려 준다. 독도에 큰 나무숲이 있다고 답하는 학생에게는 바위가 많고 큰 나무가 드물다는 모습을 사진으로 보여 준다. 독도가 바다 속 화산이 솟아올라 생긴 섬이라는 설명은 교과서로 확인한다고 말한다.',
            items: [
              { prompt: '독도에서 볼 수 있는 모습만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '독도의 모습', cards: ['괭이갈매기가 하늘을 날아요', '바위로 된 가파른 섬이에요', '넓은 논이 펼쳐져 있어요', '높은 빌딩이 줄지어 있어요'] }, target: { pick: ['괭이갈매기가 하늘을 날아요', '바위로 된 가파른 섬이에요'] }, difficulty: 0.2 },
              { prompt: '독도의 섬과 알맞은 설명을 이어 보세요.', toolOptions: { mode: 'match', topic: '독도의 섬', slots: [{ id: 'm1', label: '동도' }, { id: 'm2', label: '서도' }], cards: ['동쪽에 있고 등대가 있어요', '서쪽에 있는 큰 섬이에요', '울릉도보다 훨씬 커요'] }, target: { match: { m1: '동쪽에 있고 등대가 있어요', m2: '서쪽에 있는 큰 섬이에요' } }, difficulty: 0.2 },
              { prompt: '독도를 소개하는 글에 맞는 문장만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '독도 소개', cards: ['독도는 동해에 있는 대한민국의 섬이에요', '독도는 동도와 서도 두 큰 섬으로 이루어져 있어요', '독도는 서해에 있어요', '독도에는 큰 도시가 있어요'] }, target: { pick: ['독도는 동해에 있는 대한민국의 섬이에요', '독도는 동도와 서도 두 큰 섬으로 이루어져 있어요'] }, difficulty: 0.25 },
            ],
          },
        ],
        wrap: '"독도는 어떤 섬들로 이루어져 있나요? 어떤 모습인가요?" 동도와 서도 두 큰 섬과 바위섬, 괭이갈매기라는 말을 모은다. 출구 1번에서 동도와 서도를 바꾸는 학생이 있으면 방위로 이름을 확인하게 한다.',
        exit: [
          { type: 'tool', tool: 'map', options: W(DOK2, { names: false }), prompt: '이름 없는 지도에서 등대 기호가 있는 동도에 핀을 꽂으세요.', target: { place: '동도' }, difficulty: 0.2 },
          { type: 'choice', prompt: '독도의 모습으로 알맞은 것은 무엇인가요?', options: ['바위가 많은 가파른 섬과 바닷새', '넓은 평야와 큰 도시', '끝없이 이어진 모래사막'], answer: 0, difficulty: 0.1, explain: '독도는 바위섬이고 괭이갈매기 같은 바닷새가 찾아와요.' },
          { type: 'mood', prompt: '오늘 독도 모습 살펴보기는 어땠나요?' },
        ],
        wsTitle: '독도의 모습',
        ws: [
          { type: 'figure', wide: true, prompt: '독도 지도에서 동도와 서도를 찾아 ○ 하고 이름을 쓰세요.', tool: 'map', options: DOK2_WS, figures: [{ caption: '독도 칸 지도' }], answer: '왼쪽 서도, 오른쪽 동도(등대 기호)' },
          { type: 'table', prompt: '독도의 섬에 대해 쓰세요.', columns: ['섬', '위치(서쪽·동쪽)', '특징 한 가지'], cells: [['서도', '', ''], ['동도', '', '']], answer: '서도 서쪽·큰 섬, 동도 동쪽·등대가 있음' },
          { type: 'choice', prompt: '독도에서 볼 수 있는 새로 알맞은 것은?', options: ['괭이갈매기', '펭귄', '독수리 수백 마리'], answer: '괭이갈매기' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '독도는 ___와 서도 두 큰 섬으로 이루어져 있어요.', answer: '동도' },
          { type: 'short', prompt: '독도의 모습 가운데 가장 기억에 남는 것을 쓰세요.', answer: '학생마다 다름' },
        ],
        chal: '이름이 사라져 기호와 방위만으로 섬을 찾고, 독도 소개 글에서 틀린 문장을 스스로 고쳐 써 봐요.',
        notes: '독도는 동도와 서도 두 큰 섬과 여러 작은 바위섬으로 이루어져 있다. 자주 보이는 어려움: ① 독도를 섬 하나로 안다 → 두 섬이 이웃해 있음을 지도로 보여 준다. ② 독도를 아주 큰 섬으로 생각한다 → 울릉도보다 훨씬 작은 바위섬이라고 알려 준다. ③ 섬의 면적·높이·생물 종 수 같은 수치는 교과서나 해양수산부·환경부 자료에서 교사가 확인한 값만 쓴다(확인 필요).',
      }),
      // ───────────────────────── 10차시 ─────────────────────────
      LS(10, {
        title: '독도 기록이 만들어진 차례 놓기',
        obj: '독도와 관련된 옛 기록과 사건을 일어난 차례대로 놓고 오래전부터 우리 역사 속에 독도가 있었다는 것을 말할 수 있다.',
        std: S2,
        ill: 'a long paper scroll timeline with small icons of an old ship, an ancient book, a royal decree and a lighthouse, unrolled over a blue sea',
        say: '독도의 역사는 언제부터일까요?',
        extra: [{ motif: 'wave', x: 120, y: 232 }, { motif: 'house', x: 250, y: 222 }, { motif: 'star', x: 360, y: 86 }],
        intro: {
          t: '"독도가 우리 땅이라는 것을 알려 주는 옛 기록에는 어떤 것이 있을까요?" 학생이 아는 기록을 말하게 하고 오늘은 그 기록들이 만들어진 차례를 놓아 본다고 알린다. 대한민국 정부는 독도가 역사적·지리적·국제법적으로 우리 영토라는 입장이다. 연도는 교과서로 확인할 수 있게 카드에 함께 적혀 있다.',
          s: '기록은 언제 누가 썼는지 알아야 믿을 수 있어요. 오늘 만날 기록에서 가장 궁금한 점을 짝에게 말해 봅시다.',
        },
        acts: [
          {
            title: '독도 관련 사건을 일어난 차례대로 놓기', tool: 'timeline',
            task: '카드의 연도를 읽고 먼저 일어난 일부터 왼쪽에 놓아요.',
            teacher: '"512년과 1900년 가운데 먼저인 것은 어느 쪽일까요?" 숫자가 작을수록 먼저라고 말하게 한다. 17세기 말은 1600년대 끝을 가리킨다고 알려 주고 연도와 세기를 함께 읽게 한다. 오래된 일일수록 꼭 중요하다고 단정하는 학생에게는 기록이 이어져 왔다는 점이 중요하다고 짚는다.',
            items: [
              { prompt: '세 사건을 일어난 차례대로 놓아 보세요.', toolOptions: { cards: ['세종실록지리지에 우산과 무릉 두 섬이 실렸어요(1454년)', '신라의 이사부가 우산국을 복속했어요(512년)', '대한제국이 칙령 제41호를 알렸어요(1900년)'] }, target: { order: ['신라의 이사부가 우산국을 복속했어요(512년)', '세종실록지리지에 우산과 무릉 두 섬이 실렸어요(1454년)', '대한제국이 칙령 제41호를 알렸어요(1900년)'] }, difficulty: 0.2,
                predict: { q: '신라의 이사부 이야기와 대한제국 칙령 가운데 먼저인 것은 무엇일까요?', options: ['신라의 이사부 이야기', '대한제국 칙령'], answer: 0 },
                conclude: '512년의 이사부 이야기에서 1454년의 지리지, 1900년의 칙령까지 독도 이야기는 오래 이어져 왔어요.' },
              { prompt: '네 사건을 일어난 차례대로 놓아 보세요.', toolOptions: { cards: ['안용복이 일본에 가 울릉도와 독도 일을 알렸어요(17세기 말)', '세종실록지리지에 우산과 무릉 두 섬이 실렸어요(1454년)', '독도의용수비대가 독도를 지키기 시작했어요(1953년)', '대한제국이 칙령 제41호를 알렸어요(1900년)'] }, target: { order: ['세종실록지리지에 우산과 무릉 두 섬이 실렸어요(1454년)', '안용복이 일본에 가 울릉도와 독도 일을 알렸어요(17세기 말)', '대한제국이 칙령 제41호를 알렸어요(1900년)', '독도의용수비대가 독도를 지키기 시작했어요(1953년)'] }, difficulty: 0.3 },
              { prompt: '다섯 사건을 가장 먼저 일어난 일부터 놓아 보세요.', toolOptions: { cards: ['독도의용수비대 활동(1953년)', '이사부의 우산국 복속(512년)', '칙령 제41호(1900년)', '안용복의 활동(17세기 말)', '세종실록지리지(1454년)'] }, target: { order: ['이사부의 우산국 복속(512년)', '세종실록지리지(1454년)', '안용복의 활동(17세기 말)', '칙령 제41호(1900년)', '독도의용수비대 활동(1953년)'] }, difficulty: 0.35 },
            ],
          },
          {
            title: '조선 시대까지와 대한제국 이후로 나누기', tool: 'timeline', options: { mode: 'sort' },
            task: '카드의 사건이 어느 때에 일어났는지 알맞은 칸으로 옮겨요.',
            teacher: '"세종실록지리지는 조선 시대 책이에요. 대한제국은 조선 다음이에요." 시대 이름과 연도를 함께 읽게 한다. 칙령 제41호가 조선 시대라고 답하는 학생에게는 대한제국이 1897년에 시작되었다는 것을 알려 준다(교과서로 확인). 어느 시대의 이야기든 독도와 이어진다는 점을 짚는다.',
            items: [
              { prompt: '네 장을 조선 시대까지와 대한제국 이후 칸으로 나누어 보세요.', toolOptions: { slots: ['조선 시대까지', '대한제국 이후'], cards: ['세종실록지리지(1454년)', '안용복의 활동(17세기 말)', '칙령 제41호(1900년)', '독도의용수비대(1953년)'] }, target: { sort: { '조선 시대까지': ['세종실록지리지(1454년)', '안용복의 활동(17세기 말)'], '대한제국 이후': ['칙령 제41호(1900년)', '독도의용수비대(1953년)'] } }, difficulty: 0.25 },
              { prompt: '다섯 장을 조선 시대까지와 대한제국 이후 칸으로 나누어 보세요.', toolOptions: { slots: ['조선 시대까지', '대한제국 이후'], cards: ['이사부의 우산국 복속(512년)', '세종실록지리지(1454년)', '안용복의 활동(17세기 말)', '칙령 제41호(1900년)', '독도의용수비대(1953년)'] }, target: { sort: { '조선 시대까지': ['이사부의 우산국 복속(512년)', '세종실록지리지(1454년)', '안용복의 활동(17세기 말)'], '대한제국 이후': ['칙령 제41호(1900년)', '독도의용수비대(1953년)'] } }, difficulty: 0.3 },
              { prompt: '삼국 시대에 해당하는 카드만 먼저 나누어 놓아 보세요.', toolOptions: { slots: ['삼국 시대', '그 뒤'], cards: ['이사부의 우산국 복속(512년)', '세종실록지리지(1454년)', '칙령 제41호(1900년)'] }, target: { sort: { '삼국 시대': ['이사부의 우산국 복속(512년)'], '그 뒤': ['세종실록지리지(1454년)', '칙령 제41호(1900년)'] } }, difficulty: 0.25 },
            ],
          },
        ],
        wrap: '"독도와 관련된 기록은 어떤 차례로 이어져 왔나요?" 512년, 1454년, 17세기 말, 1900년, 1953년의 흐름을 말하게 한다. 출구 1번에서 연도 큰 수를 먼저로 놓는 학생이 있으면 숫자가 작을수록 먼저라고 다시 짚는다.',
        exit: [
          { type: 'tool', tool: 'timeline', options: { cards: ['칙령 제41호(1900년)', '이사부의 우산국 복속(512년)', '독도의용수비대(1953년)'] }, prompt: '세 사건을 먼저 일어난 일부터 놓으세요.', target: { order: ['이사부의 우산국 복속(512년)', '칙령 제41호(1900년)', '독도의용수비대(1953년)'] }, difficulty: 0.2 },
          { type: 'choice', prompt: '1454년은 512년보다 먼저일까요, 나중일까요?', options: ['나중이에요', '먼저예요'], answer: 0, difficulty: 0.1, explain: '숫자가 클수록 나중이에요. 512년 뒤에 1454년이 와요.' },
          { type: 'mood', prompt: '오늘 독도 사건 차례 놓기는 어땠나요?' },
        ],
        wsTitle: '독도 이야기의 차례',
        ws: [
          { type: 'table', prompt: '사건을 일어난 차례대로 1, 2, 3을 쓰세요.', columns: ['사건', '차례'], cells: [['칙령 제41호(1900년)', ''], ['이사부의 우산국 복속(512년)', ''], ['세종실록지리지(1454년)', '']], answer: '칙령 3, 이사부 1, 세종실록지리지 2' },
          { type: 'choice', prompt: '가장 먼저 일어난 일에 ○ 하세요.', options: ['이사부의 우산국 복속(512년)', '칙령 제41호(1900년)', '독도의용수비대(1953년)'], answer: '이사부의 우산국 복속(512년)' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '연도의 숫자가 ___수록 더 먼저 일어난 일이에요(작을·클).', answer: '작을' },
          { type: 'check', prompt: '독도 역사에 대해 맞는 말에 ✓ 하세요.', options: ['독도 이야기는 오래전부터 기록되어 왔어요', '독도 기록은 최근에야 처음 나왔어요', '독도의용수비대는 1953년에 활동을 시작했어요'], answer: '첫째와 셋째' },
          { type: 'short', prompt: '독도 기록을 차례로 놓아 보고 알게 된 점을 한 문장으로 쓰세요.', answer: '예: 독도는 오래전부터 우리나라 기록에 나오고 이어져 왔어요.' },
        ],
        chal: '카드가 다섯 장으로 늘고 연도 대신 세기·시대 이름만 보며 차례를 정해 봐요.',
        notes: '독도에 관한 역사 사실(이사부 512년, 세종실록지리지 1454년, 안용복의 17세기 말 활동, 대한제국 칙령 제41호 1900년, 독도의용수비대 1953년)은 초등 사회 교과서에 실리는 것으로 쓰고, 연도·표현은 교사가 교과서·동북아역사재단 독도연구소 자료로 한 번 더 확인한다(확인 필요). 대한민국 정부의 입장은 독도가 역사적·지리적·국제법적으로 우리 영토라는 것이다. 자주 보이는 어려움: ① 숫자가 클수록 먼저라고 읽는다 → 연도 읽기부터 한다. ② 기록을 외우기만 한다 → 기록이 무엇을 알려 주는지 11차시에서 다룬다.',
      }),
      // ───────────────────────── 11차시 ─────────────────────────
      LS(11, {
        title: '옛 기록이 알려 주는 것 읽고 근거로 삼기',
        obj: '삼국사기·세종실록지리지·칙령 제41호가 각각 무엇을 알려 주는지 짝 짓고 기록을 근거로 쓸 때 확인할 것을 말할 수 있다.',
        std: S2,
        ill: 'three paper-cut old documents, a bound history book, a long geography scroll and a royal decree with a red seal, laid out with a tiny map beside them',
        say: '이 기록은 무엇을 알려 줄까요?',
        extra: [{ motif: 'house', x: 130, y: 222 }, { motif: 'leaf', x: 250, y: 222 }, { motif: 'star', x: 360, y: 86 }],
        intro: {
          t: '"친구가 \'독도는 우리 땅이야\'라고 말하면 무엇을 보여 주면 믿을까요?" 기록이나 지도 같은 근거가 필요하다는 말을 이끌어 낸다. 오늘은 세 기록이 각각 무엇을 알려 주는지 짝 지어 보고 기록을 근거로 쓸 때 확인할 것을 정한다고 알린다. 카드 글은 교과서에 실린 내용을 쉬운 말로 줄인 것이다.',
          s: '내가 어떤 주장을 할 때 친구가 믿게 하려면 어떤 근거가 필요한지 한 가지 말해 봅시다.',
        },
        acts: [
          {
            title: '기록과 그 기록이 알려 주는 것 잇기', tool: 'mindmap',
            task: '기록 이름과 그 기록에 담긴 내용을 이어요.',
            teacher: '"삼국사기는 어떤 책이고 세종실록지리지는 어떤 책일까요?" 역사책과 지리지를 구별하게 한다. 칙령 제41호를 옛 책이라고 답하는 학생에게는 대한제국이 내린 법령이라고 알려 준다. 카드 글은 줄여 쓴 것이라 원문과 같지 않다는 점을 말해 준다.',
            items: [
              { prompt: '기록과 그 기록에 담긴 내용을 이어 보세요.', toolOptions: { mode: 'match', topic: '독도 기록', slots: [{ id: 'm1', label: '삼국사기' }, { id: 'm2', label: '세종실록지리지' }, { id: 'm3', label: '대한제국 칙령 제41호' }], cards: ['신라 이사부가 우산국을 복속했다는 이야기', '울진현 동쪽 바다에 우산과 무릉 두 섬이 있다는 기록', '울도군이 맡을 곳에 석도(독도)를 넣은 법령'] }, target: { match: { m1: '신라 이사부가 우산국을 복속했다는 이야기', m2: '울진현 동쪽 바다에 우산과 무릉 두 섬이 있다는 기록', m3: '울도군이 맡을 곳에 석도(독도)를 넣은 법령' } }, difficulty: 0.3 },
              { prompt: '기록의 종류를 역사책, 지리 기록, 나라의 법령으로 나누어 보세요.', toolOptions: { topic: '기록의 종류', slots: ['역사책', '지리 기록', '나라의 법령'], cards: ['삼국사기', '세종실록지리지', '대한제국 칙령 제41호'] }, target: { sort: { '역사책': ['삼국사기'], '지리 기록': ['세종실록지리지'], '나라의 법령': ['대한제국 칙령 제41호'] } }, difficulty: 0.3 },
              { prompt: '나라가 독도를 맡아 다스렸다는 것을 보여 주는 기록만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '다스림의 근거', cards: ['칙령 제41호(울도군이 석도를 맡음)', '세종실록지리지(우산·무릉 두 섬 기록)', '여행 안내 사진첩', '친구가 그린 그림'] }, target: { pick: ['칙령 제41호(울도군이 석도를 맡음)', '세종실록지리지(우산·무릉 두 섬 기록)'] }, difficulty: 0.3 },
            ],
          },
          {
            title: '기록을 근거로 쓸 때 확인할 것 고르기', tool: 'mindmap',
            task: '기록을 근거로 쓸 때 확인해야 할 것을 골라요.',
            teacher: '"기록이 있다고 모두 믿어도 될까요?" 언제, 누가, 무엇을 위해 만든 기록인지 확인해야 한다는 말을 이끌어 낸다. 글씨가 예쁘면 믿을 만하다고 답하는 학생에게는 내용과 만든 때·사람이 더 중요하다고 짚는다.',
            items: [
              { prompt: '기록을 근거로 쓸 때 확인할 것만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '확인할 것', cards: ['언제 만든 기록인지', '누가 만든 기록인지', '글씨가 예쁜지', '종이 색이 어떤지'] }, target: { pick: ['언제 만든 기록인지', '누가 만든 기록인지'] }, difficulty: 0.25,
                predict: { q: '기록이 근거가 되려면 가장 먼저 알아야 할 것은 무엇일까요?', options: ['만든 때와 사람', '글씨체'], answer: 0 },
                conclude: '기록을 근거로 쓸 때는 언제, 누가, 무엇을 적었는지 먼저 확인해야 해요.' },
              { prompt: '기록 이름과 그 기록을 확인하는 방법을 이어 보세요.', toolOptions: { mode: 'match', topic: '기록 확인하기', slots: [{ id: 'm1', label: '글의 내용' }, { id: 'm2', label: '기록의 출처' }], cards: ['원문과 뜻풀이를 함께 읽어요', '책 이름과 만든 때를 찾아요', '친구가 말한 대로 믿어요'] }, target: { match: { m1: '원문과 뜻풀이를 함께 읽어요', m2: '책 이름과 만든 때를 찾아요' } }, difficulty: 0.25 },
              { prompt: '독도를 소개하는 글에 쓰기 알맞은 근거 문장만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '근거 문장', cards: ['세종실록지리지에 우산과 무릉 두 섬이 실려 있어요', '칙령 제41호에 석도가 울도군 관할로 적혀 있어요', '독도는 그냥 예뻐 보여요', '친구가 독도는 우리 땅이라고 했어요'] }, target: { pick: ['세종실록지리지에 우산과 무릉 두 섬이 실려 있어요', '칙령 제41호에 석도가 울도군 관할로 적혀 있어요'] }, difficulty: 0.3 },
            ],
          },
          {
            title: '기록과 지도를 맞춰 보기', tool: 'map', options: W(DOK, { readOnly: true }), levels: LV_MAP,
            task: '세종실록지리지의 말을 칸 지도와 맞추어 보고 알맞은 보기를 골라요.',
            teacher: '"기록에 두 섬이 서로 멀지 않아 맑은 날 바라볼 수 있다고 적혀 있어요. 지도에서 두 섬은 가까울까요?" 지도의 칸 수로 가까움을 확인하게 한다. 기록의 말이 지도와 맞는다는 점이 근거를 더 단단하게 만든다고 짚는다. 이 지도는 위치 관계만 맞춘 칸 지도라는 점은 다시 말해 준다.',
            items: [
              { prompt: '기록에 나온 두 섬은 울릉도와 독도예요. 지도에서 두 섬은 어떤 사이인가요?', toolOptions: { ask: { choices: ['서로 가까운 이웃 섬', '아주 멀리 떨어진 섬', '육지에 붙은 섬'], why: [null, '지도에서 두 섬 사이는 몇 칸뿐이에요.', '두 섬 모두 바다에 있어요.'] } }, target: { pick: 0 }, difficulty: 0.2 },
              { prompt: '기록이 말한 섬의 위치를 지도로 확인하려면 어디를 보면 될까요?', toolOptions: { ask: { choices: ['육지의 동쪽 동해', '육지의 서쪽 서해', '육지의 남쪽 남해'], why: [null, '서해는 육지의 서쪽이에요.', '남해는 육지의 남쪽이에요.'] } }, target: { pick: 0 }, difficulty: 0.2 },
              { prompt: '기록과 지도를 함께 써서 독도를 소개하면 어떤 점이 좋을까요?', toolOptions: { ask: { choices: ['말한 것을 두 가지 자료로 확인할 수 있어요', '글이 더 길어져요', '그림이 더 예뻐져요'], why: [null, '글이 길다고 근거가 되지는 않아요.', '예쁜 그림만으로는 근거가 되지 않아요.'] } }, target: { pick: 0 }, difficulty: 0.25 },
            ],
          },
        ],
        wrap: '"기록을 근거로 쓰려면 무엇을 확인해야 하나요?" 만든 때, 만든 사람, 내용이라는 말을 모은다. 출구 2번에서 친구가 그렇다고 한 말을 근거라고 고르는 학생이 있으면 활동 2의 근거 문장 문항으로 돌아간다.',
        exit: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '독도 기록', slots: [{ id: 's1', label: '세종실록지리지' }, { id: 's2', label: '칙령 제41호' }], cards: ['우산과 무릉 두 섬 기록', '울도군이 석도를 맡는다는 법령'] }, prompt: '기록과 그 내용을 이으세요.', target: { match: { s1: '우산과 무릉 두 섬 기록', s2: '울도군이 석도를 맡는다는 법령' } }, difficulty: 0.25 },
          { type: 'choice', prompt: '기록을 근거로 쓸 때 가장 먼저 확인할 것은 무엇인가요?', options: ['언제 누가 만든 기록인지', '글씨가 예쁜지', '종이가 두꺼운지'], answer: 0, difficulty: 0.15, explain: '기록의 때와 사람을 알아야 믿을 수 있는 근거가 돼요.' },
          { type: 'mood', prompt: '오늘 기록 읽기는 어땠나요?' },
        ],
        wsTitle: '독도 기록과 근거',
        ws: [
          { type: 'table', prompt: '기록과 알려 주는 내용을 선으로 잇는 대신 번호로 쓰세요. ① 이사부와 우산국 이야기 ② 우산과 무릉 두 섬 기록 ③ 석도를 울도군이 맡는다는 법령', columns: ['기록', '내용 번호'], cells: [['삼국사기', ''], ['세종실록지리지', ''], ['칙령 제41호', '']], answer: '삼국사기 ①, 세종실록지리지 ②, 칙령 제41호 ③' },
          { type: 'choice', prompt: '나라의 법령으로 독도를 울도군이 맡는다고 한 기록은 무엇인가요?', options: ['대한제국 칙령 제41호', '삼국사기', '친구의 일기'], answer: '대한제국 칙령 제41호' },
          { type: 'check', prompt: '기록을 근거로 쓸 때 확인할 것에 ✓ 하세요.', options: ['언제 만든 기록인지', '누가 만든 기록인지', '글씨가 예쁜지'], answer: '첫째와 둘째' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '기록을 근거로 쓸 때는 만든 ___와 사람을 확인해요(때·색).', answer: '때' },
          { type: 'short', prompt: '독도를 소개하는 글에 쓸 근거 한 가지를 기록 이름과 함께 쓰세요.', answer: '예: 세종실록지리지에 우산과 무릉 두 섬이 실려 있어요.' },
        ],
        chal: '카드 글이 더 길어 기록의 뜻을 스스로 읽어 짝 짓고, 근거와 의견이 섞인 문장에서 근거만 골라요.',
        notes: '삼국사기(512년 이사부와 우산국), 세종실록지리지(우산·무릉 두 섬), 대한제국 칙령 제41호(울도군 관할에 석도 포함)는 교과서에 실리는 내용이다. 석도를 독도로 보는 것이 우리 정부와 학계의 입장이며, 원문 표현과 해석은 교사가 교과서·동북아역사재단 독도연구소 자료로 확인한다(확인 필요). 카드 글은 원문이 아니라 쉽게 줄인 말임을 밝힌다. 자주 보이는 어려움: ① 책의 종류를 구별하지 못한다 → 역사책·지리지·법령으로 나눈다. ② 기록이 있으면 모두 근거라고 믿는다 → 때와 사람, 내용을 확인한다.',
      }),
      // ───────────────────────── 12차시 ─────────────────────────
      LS(12, {
        title: '독도가 우리 땅이라는 지리 근거와 역사 근거 가르기',
        obj: '독도가 우리 영토라는 근거를 지리 근거와 역사 근거로 나누어 말하고 지도와 기록을 함께 쓰는 방법을 설명할 수 있다.',
        std: S2,
        ill: 'a balanced pair of paper cards labelled with a tiny map and a tiny ancient book, placed on either side of a small paper island',
        say: '근거는 어떤 종류가 있을까요?',
        extra: [{ motif: 'wave', x: 120, y: 232 }, { motif: 'bird', x: 250, y: 92 }, { motif: 'star', x: 360, y: 86 }],
        intro: {
          t: '"독도가 우리 땅이라고 말하려면 지도로 말할 수도 있고 옛 기록으로 말할 수도 있어요. 두 가지는 어떻게 다를까요?" 지리 근거(위치·가까움)와 역사 근거(기록·사건)를 구별하게 한다. 대한민국 정부의 입장은 독도가 역사적·지리적·국제법적으로 우리 영토라는 것이라고 정확히 말해 준다. 오늘은 앞 시간의 지도와 기록 자료를 두 종류로 나누어 본다.',
          s: '지도로 알 수 있는 것과 옛 기록으로 알 수 있는 것은 어떻게 다른지 짝에게 한 가지씩 말해 봅시다.',
        },
        acts: [
          {
            title: '지리 근거와 역사 근거 나누기', tool: 'mindmap',
            task: '카드의 근거를 지리 근거와 역사 근거 가지로 나누어요.',
            teacher: '"독도가 울릉도에서 가깝다는 것은 어느 근거일까요? 칙령 제41호는요?" 장소와 거리는 지리, 기록과 사건은 역사라고 짚는다. 두 근거가 서로 더해져 더 단단해진다는 말도 한다. 근거 하나만으로 모든 것을 말하려는 학생에게는 지도와 기록이 서로 맞는다는 점을 보게 한다.',
            items: [
              { prompt: '근거 카드를 지리 근거와 역사 근거로 나누어 보세요.', toolOptions: { topic: '독도 근거', slots: ['지리 근거', '역사 근거'], cards: ['독도는 육지보다 울릉도에 훨씬 가까워요', '독도는 동해에 있는 섬이에요', '세종실록지리지에 우산과 무릉 두 섬이 실려 있어요', '칙령 제41호에 석도가 울도군 관할로 적혀 있어요'] }, target: { sort: { '지리 근거': ['독도는 육지보다 울릉도에 훨씬 가까워요', '독도는 동해에 있는 섬이에요'], '역사 근거': ['세종실록지리지에 우산과 무릉 두 섬이 실려 있어요', '칙령 제41호에 석도가 울도군 관할로 적혀 있어요'] } }, difficulty: 0.25 },
              { prompt: '지리 근거만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '지리 근거', cards: ['울릉도의 남동쪽에 있어요', '동도와 서도로 이루어졌어요', '이사부가 우산국을 복속했어요', '독도의용수비대가 활동했어요'] }, target: { pick: ['울릉도의 남동쪽에 있어요', '동도와 서도로 이루어졌어요'] }, difficulty: 0.25 },
              { prompt: '역사 근거만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '역사 근거', cards: ['삼국사기에 우산국 이야기가 있어요', '안용복이 울릉도와 독도 일을 일본에 알렸어요', '독도는 바위가 많은 섬이에요', '독도는 울릉도의 남동쪽에 있어요'] }, target: { pick: ['삼국사기에 우산국 이야기가 있어요', '안용복이 울릉도와 독도 일을 일본에 알렸어요'] }, difficulty: 0.25 },
            ],
          },
          {
            title: '지도로 지리 근거 확인하기', tool: 'map', options: W(DOK, { readOnly: true }), levels: LV_MAP,
            task: '칸 지도를 보고 지리 근거로 알 수 있는 것을 골라요.',
            teacher: '"지도에서 독도와 울릉도, 독도와 육지 사이를 견주어 보세요." 칸 수로 가까움을 비교하게 한다. 이 지도는 실제 거리가 아니라 위치 관계만 맞춘 칸 지도라는 것을 다시 밝힌다. 지도로 알 수 있는 것과 기록으로만 알 수 있는 것을 따로 말하게 한다.',
            items: [
              { prompt: '지도에서 독도와 가장 가까운 곳은 어디인가요?', toolOptions: { ask: { choices: ['울릉도', '육지'], why: [null, '육지는 독도에서 훨씬 멀어요.'] } }, target: { pick: 0 }, difficulty: 0.15 },
              { prompt: '칸 지도 한 장만 보고 확실히 말할 수 있는 것은 무엇인가요?', toolOptions: { ask: { choices: ['독도는 동해에 있어요', '독도에 처음 간 사람의 이름', '독도의 땅 값'], why: [null, '사람 이름은 기록에서 찾아야 해요.', '땅 값은 지도에 나와 있지 않아요.'] } }, target: { pick: 0 }, difficulty: 0.2,
                predict: { q: '지도로 알 수 있는 것은 장소일까요, 먼 옛날 사람의 이야기일까요?', options: ['장소와 위치', '옛날 사람의 이야기'], answer: 0 },
                conclude: '지도는 장소와 위치를 알려 주고, 옛 사람의 이야기는 기록으로 확인해요.' },
              { prompt: '독도가 우리 땅이라는 것을 더 단단히 말하려면 어떻게 하면 될까요?', toolOptions: { ask: { choices: ['지도와 기록을 함께 써요', '지도만 써요', '아무 근거 없이 말해요'], why: [null, '기록도 함께 쓰면 더 단단해요.', '근거 없이는 설득하기 어려워요.'] } }, target: { pick: 0 }, difficulty: 0.25 },
            ],
          },
        ],
        wrap: '"지리 근거와 역사 근거는 어떻게 다른가요?" 장소와 위치는 지리, 기록과 사건은 역사라는 말을 모은다. 출구 1번에서 칙령을 지리 근거라고 고르는 학생이 있으면 기록이므로 역사라고 짚어 준다.',
        exit: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '근거의 종류', slots: [{ id: 's1', label: '지리 근거' }, { id: 's2', label: '역사 근거' }], cards: ['울릉도에서 가까운 위치', '옛 기록과 법령'] }, prompt: '근거와 알맞은 종류를 이으세요.', target: { match: { s1: '울릉도에서 가까운 위치', s2: '옛 기록과 법령' } }, difficulty: 0.2 },
          { type: 'choice', prompt: '대한민국 정부가 말하는 독도의 영토 근거로 알맞은 것은?', options: ['역사적·지리적·국제법적으로 우리 영토예요', '역사만 근거예요', '근거가 없어요'], answer: 0, difficulty: 0.2, explain: '대한민국 정부는 독도가 역사적·지리적·국제법적으로 명백한 우리 영토라고 밝혀 왔어요.' },
          { type: 'mood', prompt: '오늘 근거 나누기는 어땠나요?' },
        ],
        wsTitle: '지리 근거와 역사 근거',
        ws: [
          { type: 'figure', wide: true, prompt: '지도에서 독도와 가장 가까운 섬에 ○ 하세요.', tool: 'map', options: DOK_WS, figures: [{ caption: '동해 칸 지도' }], answer: '울릉도' },
          { type: 'table', prompt: '근거를 지리 근거와 역사 근거로 나누어 쓰세요.', columns: ['근거', '지리·역사'], cells: [['울릉도의 남동쪽에 있어요', ''], ['칙령 제41호에 석도가 적혀 있어요', ''], ['동해에 있는 섬이에요', '']], answer: '지리, 역사, 지리' },
          { type: 'choice', prompt: '역사 근거에 ○ 하세요.', options: ['세종실록지리지의 우산·무릉 기록', '독도의 위치', '독도의 모양'], answer: '세종실록지리지의 우산·무릉 기록' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '장소와 위치로 말하는 근거는 ___ 근거예요(지리·역사).', answer: '지리' },
          { type: 'short', prompt: '지리 근거 한 가지와 역사 근거 한 가지를 쓰세요.', answer: '예: 울릉도의 남동쪽에 있어요 / 칙령 제41호에 석도가 적혀 있어요' },
        ],
        chal: '카드가 더 많아지고 두 종류가 섞인 문장도 있어, 두 종류로 나눈 까닭을 말로 설명해요.',
        notes: '대한민국 정부는 독도가 역사적·지리적·국제법적으로 우리 영토이며 영토 분쟁의 대상이 아니라는 입장이다. 이 차시는 근거를 지리와 역사로 나누는 연습이고, 국제법적 근거는 6학년 이후와 교과서 범위에서 다룬다. 자주 보이는 어려움: ① 지리 근거와 역사 근거를 섞는다 → 장소는 지리, 기록은 역사라고 짚는다. ② 한 가지 근거만 있으면 충분하다고 생각한다 → 두 근거가 서로 맞는 것이 더 단단하다고 알려 준다. ③ 표현과 연도는 교과서·동북아역사재단 독도연구소 자료로 교사가 확인한다(확인 필요).',
      }),
      // ───────────────────────── 13차시 ─────────────────────────
      LS(13, {
        title: '독도를 지키고 알리는 일과 내가 할 수 있는 일 찾기',
        obj: '독도를 지키고 알리는 나라와 단체의 일을 알고 내가 할 수 있는 일을 정해 독도를 소개하는 글에 근거와 함께 쓸 수 있다.',
        std: S2,
        ill: 'a child drawing a poster of a small island with a lighthouse and seabirds, next to a paper map and a pencil, with a small flag on the island',
        say: '독도를 어떻게 알릴까요?',
        extra: [{ motif: 'bird', x: 130, y: 92 }, { motif: 'wave', x: 250, y: 232 }, { motif: 'flower', x: 380, y: 220 }],
        intro: {
          t: '"독도를 지키는 일은 누가 할까요? 나도 할 수 있는 일이 있을까요?" 학생이 말하는 대로 칠판에 두 칸(나라와 단체, 나)으로 적는다. 독도에는 경찰 경비대가 근무하고, 독도 자료를 모으고 알리는 박물관과 연구 기관이 있다고 알려 준다. 오늘은 내가 할 수 있는 일을 정하고 독도를 소개하는 글에 근거를 쓴다고 말한다.',
          s: '독도를 모르는 친구에게 독도를 소개한다면 어떤 이야기부터 할지 짝에게 말해 봅시다.',
        },
        acts: [
          {
            title: '나라와 단체가 하는 일, 내가 할 수 있는 일 나누기', tool: 'mindmap',
            task: '카드를 나라와 단체가 하는 일과 내가 할 수 있는 일로 나누어요.',
            teacher: '"독도를 지키는 일은 큰 일만 있을까요?" 어린이도 정확히 알고 바르게 말하는 것부터 할 수 있다는 말을 이끌어 낸다. 어른만 할 수 있다고 포기하는 학생에게는 지도를 그려 소개하는 일도 있음을 알려 준다. 독도 소개는 근거를 들어 차분히 말하는 것이 중요하다고 짚는다.',
            items: [
              { prompt: '카드를 나라와 단체가 하는 일과 내가 할 수 있는 일로 나누어 보세요.', toolOptions: { topic: '독도 사랑', slots: ['나라와 단체가 하는 일', '내가 할 수 있는 일'], cards: ['독도에서 경비대가 근무해요', '독도 자료를 모아 알리는 박물관이 있어요', '독도 위치와 이름을 정확히 말해요', '독도 지도를 그려 가족에게 소개해요'] }, target: { sort: { '나라와 단체가 하는 일': ['독도에서 경비대가 근무해요', '독도 자료를 모아 알리는 박물관이 있어요'], '내가 할 수 있는 일': ['독도 위치와 이름을 정확히 말해요', '독도 지도를 그려 가족에게 소개해요'] } }, difficulty: 0.2 },
              { prompt: '독도를 알릴 때 바른 방법만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '바른 알리기', cards: ['근거를 들어 차분히 설명해요', '지도와 기록을 함께 보여 줘요', '다른 사람을 놀리며 말해요', '확인하지 않은 말을 퍼뜨려요'] }, target: { pick: ['근거를 들어 차분히 설명해요', '지도와 기록을 함께 보여 줘요'] }, difficulty: 0.2,
                predict: { q: '독도를 소개할 때 가장 중요한 것은 무엇일까요?', options: ['근거를 들어 정확히 말하기', '목소리만 크게 하기'], answer: 0 },
                conclude: '독도를 알릴 때는 소리를 높이기보다 근거를 들어 정확하고 차분히 설명하는 것이 중요해요.' },
              { prompt: '할 수 있는 일과 그 일을 하는 사람을 이어 보세요.', toolOptions: { mode: 'match', topic: '일과 사람', slots: [{ id: 'm1', label: '독도를 지키며 근무해요' }, { id: 'm2', label: '독도 지도를 그려 소개해요' }], cards: ['경비대', '나(어린이)', '아무도 하지 않아요'] }, target: { match: { m1: '경비대', m2: '나(어린이)' } }, difficulty: 0.2 },
            ],
          },
          {
            title: '독도 소개 글에 쓸 문장 고르기', tool: 'mindmap',
            task: '독도를 소개하는 글에 쓸 문장을 골라요. 사실과 근거가 있는 문장이 좋아요.',
            teacher: '"소개 글에는 내가 아는 사실과 근거가 들어가야 해요. 어느 문장이 그럴까요?" 사실과 감상을 나눠 말하게 한다. 대한민국 정부의 입장인 독도는 역사적·지리적·국제법적으로 우리 영토라는 점을 소개 글 끝에 정확히 쓰게 안내한다. 다른 나라를 비난하는 말은 쓰지 않고 근거로 말하자고 한다.',
            items: [
              { prompt: '독도 소개 글에 알맞은 사실 문장만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '소개 글 사실', cards: ['독도는 동해에 있는 대한민국의 섬이에요', '독도의 행정구역은 경상북도 울릉군 독도리예요', '독도에는 숲이 아주 울창해요', '독도는 서해에 있어요'] }, target: { pick: ['독도는 동해에 있는 대한민국의 섬이에요', '독도의 행정구역은 경상북도 울릉군 독도리예요'] }, difficulty: 0.25 },
              { prompt: '소개 글에서 근거를 들어 말한 문장만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '근거 있는 말', cards: ['세종실록지리지에 우산과 무릉 두 섬이 실려 있어요', '칙령 제41호에 석도가 울도군 관할로 적혀 있어요', '그냥 우리 땅이니까요', '다들 그렇게 말해서요'] }, target: { pick: ['세종실록지리지에 우산과 무릉 두 섬이 실려 있어요', '칙령 제41호에 석도가 울도군 관할로 적혀 있어요'] }, difficulty: 0.3 },
              { prompt: '소개 글의 순서 카드를 알맞게 놓아 보세요.', toolOptions: { mode: 'order', cards: ['독도가 어디에 있는지 쓰기', '독도의 모습 쓰기', '독도가 우리 땅이라는 근거 쓰기', '내가 할 수 있는 일 쓰기'] }, target: { order: ['독도가 어디에 있는지 쓰기', '독도의 모습 쓰기', '독도가 우리 땅이라는 근거 쓰기', '내가 할 수 있는 일 쓰기'] }, difficulty: 0.25 },
            ],
          },
        ],
        wrap: '"독도를 소개하는 글에는 무엇이 들어가야 하나요? 내가 할 수 있는 일은 무엇인가요?" 위치, 모습, 근거, 내가 할 일이라는 말을 모은다. 출구 2번에서 근거 없이 큰 소리로 말하면 된다고 고르는 학생이 있으면 활동 1의 바른 알리기 문항으로 돌아간다.',
        exit: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '독도 알리기', slots: [{ id: 's1', label: '나라와 단체' }, { id: 's2', label: '나' }], cards: ['독도 자료를 모아 알려요', '정확한 이름과 위치를 말해요'] }, prompt: '하는 일과 알맞은 사람을 이으세요.', target: { match: { s1: '독도 자료를 모아 알려요', s2: '정확한 이름과 위치를 말해요' } }, difficulty: 0.2 },
          { type: 'choice', prompt: '독도를 소개하는 글에서 가장 알맞은 방법은 무엇인가요?', options: ['근거를 들어 차분히 쓰는 것', '근거 없이 크게 외치는 것', '다른 사람을 놀리는 것'], answer: 0, difficulty: 0.1, explain: '소개 글은 근거를 들어 차분히 쓰면 믿음을 줄 수 있어요.' },
          { type: 'mood', prompt: '오늘 독도 알리기는 어땠나요?' },
        ],
        wsTitle: '독도 소개 글 쓰기',
        ws: [
          { type: 'figure', wide: true, prompt: '지도에서 독도를 찾아 ○ 하고, 독도가 있는 바다 이름을 쓰세요.', tool: 'map', options: DOK_WS, figures: [{ caption: '동해 칸 지도' }], answer: '독도 — 동해' },
          { type: 'table', prompt: '독도 소개 글을 쓰기 전 메모를 쓰세요.', columns: ['쓸 내용', '내 메모'], cells: [['독도의 위치', ''], ['독도의 모습', ''], ['우리 땅이라는 근거', ''], ['내가 할 수 있는 일', '']], answer: '학생마다 다름 — 위치는 동해·울릉도 남동쪽' },
          { type: 'choice', prompt: '소개 글에 알맞은 문장은?', options: ['독도는 동해에 있는 대한민국의 섬이에요', '독도는 서해에 있어요', '독도는 아무도 몰라요'], answer: '독도는 동해에 있는 대한민국의 섬이에요' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '독도를 알릴 때는 ___를 들어 차분히 설명해요(근거·소리).', answer: '근거' },
          { type: 'short', prompt: '독도를 소개하는 글을 두세 문장으로 써 보세요. 위치와 근거를 넣으세요.', answer: '학생마다 다름' },
        ],
        chal: '소개 글의 문장 카드가 더 섞이고, 감상과 사실, 근거를 스스로 구별해 한 편의 글로 순서를 정해요.',
        notes: '독도는 대한민국 영토이며 행정구역은 경상북도 울릉군 독도리다. 독도를 지키고 알리는 일(경비대 근무, 박물관·연구 기관의 자료 수집)을 쓸 때는 교사가 기관 누리집에서 사실을 확인한다(확인 필요). 자주 보이는 어려움: ① 독도를 지키는 일을 어른의 일로만 생각한다 → 어린이가 정확히 알고 바르게 말하는 것도 일이라고 알려 준다. ② 감정에 치우쳐 다른 나라를 비난하는 말을 쓴다 → 근거를 들어 차분히 쓰게 한다. ③ 학생 이름이나 사진을 소개 글에 넣지 않게 안내한다.',
      }),
      // ───────────────────────── 14차시 ─────────────────────────
      LS(14, {
        title: '국토의 땅 모습과 독도 이야기를 한 장으로 정리하기',
        obj: '우리나라 산지·강·바다의 모습과 독도에 대해 배운 것을 묶어 국토 소개 카드로 정리하고 스스로 점검할 수 있다.',
        std: S1.concat(S2),
        ill: 'a handmade poster of a peninsula with mountains, rivers and three seas around it, and a small island with a lighthouse in the east sea, stitched with a ribbon',
        say: '국토 여행을 한 장에 담아 볼까요?',
        extra: [{ motif: 'mountain', x: 110, y: 214 }, { motif: 'wave', x: 250, y: 232 }, { motif: 'bird', x: 380, y: 92 }],
        intro: {
          t: '"단원을 시작할 때 우리나라의 땅 모습에 대해 어떻게 알고 있었나요? 지금은 어떻게 달라졌나요?" 처음 생각과 지금 생각을 견주게 한다. 오늘은 산·강·바다와 독도를 한 장의 국토 소개 카드로 묶고 스스로 점검한다고 알린다. 지도는 모두 칸 지도이며 위치 관계만 맞춘 것이라는 점도 다시 말해 준다.',
          s: '이 단원에서 가장 기억에 남는 것 하나와 그것을 알게 된 자료를 짝에게 말해 봅시다.',
        },
        acts: [
          {
            title: '국토 소개 카드에 쓸 내용 나누기', tool: 'mindmap',
            task: '카드를 땅의 모습, 강과 바다, 독도 가지로 나누어요.',
            teacher: '"카드의 내용은 어느 시간에 배운 것일까요?" 배운 자료(지도, 높이 지도, 옛 기록)를 떠올려 근거를 말하게 한다. 한 카드를 두 가지에 놓으려는 학생에게는 가장 알맞은 한 곳을 고르고 까닭을 말하게 한다. 독도 문장은 모두 사실과 근거로 확인된 것만 쓴다고 알려 준다.',
            items: [
              { prompt: '카드 여섯 장을 땅의 모습·강과 바다·독도 가지로 나누어 보세요.', toolOptions: { topic: '국토 소개 카드', slots: ['땅의 모습', '강과 바다', '독도'], cards: ['동쪽이 높고 서쪽이 낮아요', '산지는 북쪽과 동쪽에 많아요', '한강은 서해로 흘러가요', '서해안에는 갯벌이 넓어요', '독도는 울릉도의 남동쪽에 있어요', '독도는 동도와 서도로 이루어져 있어요'] }, target: { sort: { '땅의 모습': ['동쪽이 높고 서쪽이 낮아요', '산지는 북쪽과 동쪽에 많아요'], '강과 바다': ['한강은 서해로 흘러가요', '서해안에는 갯벌이 넓어요'], '독도': ['독도는 울릉도의 남동쪽에 있어요', '독도는 동도와 서도로 이루어져 있어요'] } }, difficulty: 0.25 },
              { prompt: '이 단원에서 배운 것으로 알맞은 문장만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '배운 것', cards: ['큰 강은 높은 곳에서 낮은 곳으로 흘러요', '독도는 동해에 있는 대한민국의 섬이에요', '독도는 서해에 있어요', '산지는 서쪽 바닷가에만 있어요'] }, target: { pick: ['큰 강은 높은 곳에서 낮은 곳으로 흘러요', '독도는 동해에 있는 대한민국의 섬이에요'] }, difficulty: 0.25 },
              { prompt: '자료의 종류와 알 수 있는 것을 이어 보세요.', toolOptions: { mode: 'match', topic: '자료와 쓰임', slots: [{ id: 'm1', label: '높이 지도' }, { id: 'm2', label: '옛 기록' }, { id: 'm3', label: '방위표가 있는 지도' }], cards: ['땅이 높고 낮은 곳', '오래전부터 이어진 이야기', '두 섬의 방위'] }, target: { match: { m1: '땅이 높고 낮은 곳', m2: '오래전부터 이어진 이야기', m3: '두 섬의 방위' } }, difficulty: 0.25 },
            ],
          },
          {
            title: '국토 소개 카드에 쓸 곳 지도에서 찾기', tool: 'map', options: KOR, levels: LV_MAP,
            task: '소개 카드에 쓸 곳을 지도에서 찾아 핀을 꽂아요.',
            teacher: '"소개 카드에 가장 높은 산과 큰 강, 세 바다를 넣고 싶다면 어디를 가리킬까요?" 앞 시간에 배운 이름과 위치를 짝 지어 말하게 한다. 이름만 외운 학생에게는 방향과 높이로 설명하게 한다.',
            items: [
              { prompt: '소개 카드에 쓸 가장 높은 산 칸에 핀을 꽂아 보세요.', target: { highest: true }, difficulty: 0.15 },
              { prompt: '한강이 흘러가 닿는 서쪽 바다에 핀을 꽂아 보세요.', target: { place: '서해' }, difficulty: 0.2 },
              { prompt: '낙동강이 흘러가 닿는 남쪽 바다에 핀을 꽂아 보세요.', target: { place: '남해' }, difficulty: 0.2,
                predict: { q: '낙동강이 닿는 바다는 육지의 어느 쪽에 있을까요?', options: ['남쪽', '북쪽'], answer: 0 },
                conclude: '낙동강은 남쪽으로 흘러 남해에 닿아요.' },
            ],
          },
        ],
        wrap: '"이 단원에서 배운 것 가운데 가장 중요한 것 한 가지와 그것을 알게 된 자료를 말해 볼까요?" 땅 모습의 위치 관계, 큰 강의 흐름, 독도의 위치와 근거라는 말이 나오게 한다. 출구 2번에서 독도를 서해에 있다고 고르는 학생이 있으면 활동 2의 바다 방향 문항으로 돌아간다.',
        exit: [
          { type: 'tool', tool: 'map', options: W(DOK, { readOnly: true, ask: { q: '독도의 위치는?', choices: ['동해, 울릉도의 남동쪽', '서해, 육지의 서쪽', '남해, 한라산의 남쪽'], why: [null, '서해는 육지의 서쪽 바다예요.', '남해에는 독도가 없어요.'] } }), prompt: '독도의 위치를 바르게 말한 보기를 고르세요.', target: { pick: 0 }, difficulty: 0.2 },
          { type: 'choice', prompt: '우리나라 땅의 모습으로 알맞은 것은 무엇인가요?', options: ['동쪽이 높고 서쪽이 낮아요', '서쪽이 높고 동쪽이 낮아요', '모두 같은 높이예요'], answer: 0, difficulty: 0.15, explain: '우리나라는 동쪽에 높은 산이 많고 서쪽에는 낮은 땅이 넓어요.' },
          { type: 'mood', prompt: '이 단원 공부는 어땠나요?' },
        ],
        wsTitle: '우리나라 국토 소개 카드',
        ws: [
          { type: 'figure', wide: true, prompt: '지도에서 가장 높은 곳에 △, 서해에 ○, 남해에 □를 표시하세요.', tool: 'map', options: KOR_WS, figures: [{ caption: '우리나라 칸 지도' }], answer: '위쪽 가운데 △, 왼쪽 서해 ○, 아래쪽 남해 □' },
          { type: 'table', prompt: '이 단원에서 배운 것을 정리하세요.', columns: ['주제', '알게 된 것'], cells: [['땅의 높낮이', ''], ['큰 강의 흐름', ''], ['독도의 위치', '']], answer: '동쪽이 높고 서쪽이 낮음, 서해와 남해로 흐름, 동해에 있고 울릉도의 남동쪽' },
          { type: 'check', prompt: '스스로 점검: 할 수 있는 것에 ✓ 하세요.', options: ['산·강·바다의 위치를 말할 수 있어요', '독도의 위치를 방위로 말할 수 있어요', '독도를 근거와 함께 소개할 수 있어요'], answer: '학생마다 다름' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '독도는 동해에 있는 ___의 섬이고 행정구역은 경상북도 울릉군이에요.', answer: '대한민국' },
          { type: 'short', prompt: '우리나라 국토 소개 글을 두 문장으로 써 보세요. 근거를 넣으세요.', answer: '학생마다 다름' },
        ],
        chal: '카드가 더 많이 섞이고, 국토 소개 글의 문장마다 어떤 자료(지도, 높이 지도, 옛 기록)에서 알았는지 밝혀 써 봐요.',
        notes: '이 단원의 지도는 모두 위치 관계만 맞춘 칸 지도이고, 높이·길이·넓이 같은 수치와 실제 지명의 세부 위치는 교과서·공공 자료에서 교사가 확인해 보탠다(확인 필요). 독도는 대한민국 영토(경상북도 울릉군 독도리)이고 바다 이름은 동해로 쓴다. 자주 보이는 어려움: ① 이름만 외우고 위치를 말하지 못한다 → 방향과 높이로 설명하게 한다. ② 자료와 주장을 섞는다 → 소개 글 문장마다 자료를 밝히게 한다. ③ 학생 개인정보(이름·사진)는 소개 카드에 넣지 않는다.',
      }),
    ],
  });
})();
