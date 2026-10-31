/* 1학년 창체 계기교육 — 독도교육(학년마다 10차시). 저학년: 독도의 위치·자연(바위섬·괭이갈매기·꽃·바다 생물)·지키는 사람들을 그림 카드와 지도 찾기로 만난다.
 * 근거: 교육부 「독도교육 활성화 계획」(교과·창체 통합 연간 10시간 이상 권장, 독도교육주간). 초등 내용 체계: 자연환경·지리적 특성·역사·가치.
 * 사실(연도·거리·문서 이름)은 외교부 독도 누리집·동북아역사재단 독도 자료의 서술만 쓴다. 10월 25일 독도의 날은 법정기념일이 아니다(독도교육주간 연계 시기의 예).
 * 정치적 중립: 자료와 근거로 말하고, 특정 국가의 국민 전체를 비난하는 표현은 쓰지 않는다. 인물 이름은 가명이다(역사 인물 제외). */
(function () {
  const GRADE = 1;
  const ID = `g${GRADE}-cc-dokdo`;
  const UNIT = `g${GRADE}-창체-dokdo`;
  const TITLE = '독도교육 — 독도와 처음 만나요';
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

  PaperLessons.registerUnit({
    id: ID, schema: 'edu-unit.v1', catalogUnit: UNIT,
    grade: GRADE, subject: '창체', unitTitle: TITLE,
    flow: '1학년 독도교육은 "독도는 우리나라 동쪽 바다에 있는 섬"이라는 첫 만남에서 시작해, 독도의 생김새와 자연, 독도를 지키는 사람들, 독도를 아끼는 마음까지 짧은 문장과 그림 카드로 쌓는 10차시입니다. 1~3차시는 지도에서 독도를 찾고 섬의 뜻과 두 큰 섬(동도·서도)을 알며, 4~6차시는 괭이갈매기·바위틈의 꽃·바다 친구들을 고르고 나눕니다. 7~9차시는 독도에서 일하는 사람들과 자연을 아끼는 행동, 독도에게 보내는 마음을 다루고, 10차시에 위치·자연·사람으로 묶어 정리합니다. 교육부는 독도교육을 교과와 창의적 체험활동을 통합해 연간 10시간 이상 운영하도록 권장하므로, 통합교과의 우리나라 주제 수업이나 학교 독도교육주간(10월 25일 독도의 날 무렵 등)과 묶어 운영할 수 있습니다(시수 인정은 학교 결정). 겁주거나 다른 나라를 나쁘게 말하는 표현 없이, 독도를 알고 아끼는 마음을 기르는 데 집중합니다.',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '칸 지도에서 동쪽 바다의 독도 찾기',
        objective: '우리나라 지도에서 동쪽 바다에 있는 독도를 찾아 가리킬 수 있다.',
        draw: 'a child pointing at a tiny island in the blue east sea on a simple paper map of Korea, with a seagull flying above',
        banner: '독도를 찾아요', extra: [{ motif: 'star', x: 70, y: 110, color: 'buttercup', s: 0.6 }],
        intro: {
          teacher: '"우리나라 동쪽 바다에 아주 작은 섬이 있어요. 이름을 아는 사람?" 대답을 듣고(기다릴 반응: "독도요", "몰라요") 시연 단추로 지도의 독도 칸에 핀이 꽂히는 모습을 보여 준다. "독도는 서울 옆에 있어요"처럼 땅 위를 짚는 학생에게는 "독도는 바다 위에 있어요. 파란 칸을 찾아볼까요?"라고 되묻는다.',
          student: '독도라는 이름을 들어 본 적이 있나요? 짝에게 말해 봐요.',
          demo: { tool: 'map', options: KOR([P.seoul, P.dokdo]), sequence: [{ place: '독도' }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 지도에서 곳을 찾아 핀 꽂기', tool: 'map',
            teacher: '"독도는 땅 위에 있을까요, 바다 위에 있을까요?" 핀을 꽂기 전에 손가락으로 파란 바다 칸을 먼저 짚게 한다. 제주도에 꽂는 학생에게는 "제주도도 섬이지만 남쪽 바다에 있어요. 해가 뜨는 쪽 바다를 봐요"라고 말해 준다.',
            task: '우리나라 칸 지도를 보고 말하는 곳에 핀을 꽂아요.',
            items: [
              MI('우리나라 동쪽 바다의 작은 섬, 독도에 핀을 꽂아 보세요.', KOR([P.seoul, P.dokdo, P.jeju, P.baekdu]), { place: '독도' }, 0.1),
              MI('우리나라의 수도 서울에 핀을 꽂아 보세요.', KOR([P.seoul, P.dokdo, P.busan, P.baekdu]), { place: '서울' }, 0.1,
                { conclude: '서울은 땅 위에 있고, 독도는 바다 위에 있어요.' }),
              MI('독도와 가까운 큰 섬, 울릉도에 핀을 꽂아 보세요.', KOR([P.seoul, P.ulleung, P.dokdo, P.jeju]), { place: '울릉도' }, 0.15),
            ],
          },
          {
            id: 'a2', title: '활동 2. 독도에 맞는 말 고르기', tool: 'mindmap',
            teacher: '"독도에 기차역이 있을까요?" 카드를 고를 때마다 소리 내어 읽게 한다. 큰 도시 카드를 담는 학생에게는 "독도는 아주 작은 바위섬이에요. 큰 건물이 들어갈 수 있을까요?"라고 묻는다.',
            task: '독도에 맞는 카드를 고르고, 섬과 땅 위의 곳을 나누어요.',
            items: [
              MP('독도에 맞는 말만 골라 담아 보세요.', '독도는요', ['우리나라 땅이에요', '동쪽 바다에 있어요', '큰 도시가 있어요', '기차역이 있어요'], ['우리나라 땅이에요', '동쪽 바다에 있어요'], 0.1),
              MS('지도 속 곳을 바다 위 섬과 땅 위로 나누어 보세요.', '우리나라 곳', ['바다 위 섬', '땅 위'], ['독도', '제주도', '서울', '백두산'], { '바다 위 섬': ['독도', '제주도'], '땅 위': ['서울', '백두산'] }, 0.15),
              MP('독도 둘레에서 볼 수 있는 것만 골라 보세요.', '독도 둘레', ['파란 바다', '갈매기', '높은 빌딩', '지하철'], ['파란 바다', '갈매기'], 0.1),
            ],
          },
        ],
        wrap: {
          teacher: '"독도는 어느 쪽 바다에 있었지요?" 출구 1번에서 부산에 꽂은 학생에게는 부산은 땅 끝 항구라는 점을 짚고, 바다 한가운데 작은 섬을 다시 찾게 한다.',
          exit: [
            XC('map', KOR([P.busan, P.dokdo, P.ulleung, P.baekdu]), '지도에서 바다 위 작은 섬 독도를 찾아 핀을 꽂아 보세요.', { place: '독도' }, 0.1),
            { type: 'choice', prompt: '독도는 우리나라 어느 쪽 바다에 있나요?', options: ['동쪽 바다', '서쪽 바다'], answer: 0, difficulty: 0.1, explain: '독도는 해가 뜨는 동쪽 바다에 있어요.' },
            MOOD,
          ],
        },
        wsTitle: '독도를 찾아요',
        ws: [
          { type: 'figure', wide: true, prompt: '지도에서 독도를 찾아 ○ 하세요.', tool: 'map', figures: [{ options: KORW([PW.seoul, PW.dokdo, PW.jeju]), caption: '우리나라 칸 지도' }], answer: '동쪽 바다의 섬' },
          { type: 'choice', prompt: '독도는 어디에 있나요?', options: ['바다 위', '산 위'], answer: '바다 위' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '독도는 우리나라 ___쪽 바다에 있어요.', answer: '동' },
          { type: 'draw', prompt: '바다 위에 떠 있는 독도를 그려 보세요.' },
        ],
        notes: '자주 보이는 어려움: ① 땅 위 칸을 짚는다 → "섬은 바다로 둘러싸여 있어요"를 먼저 말하게 한다. ② 제주도와 독도를 헷갈린다 → 남쪽과 동쪽(해 뜨는 쪽)을 손으로 가리키게 한다. ③ 지도의 크기를 실제 크기로 여긴다 → 칸 지도는 줄인 그림이라고 알려 준다.',
      }),

      LESSON(2, {
        title: '섬과 섬이 아닌 곳 나누기',
        objective: '섬은 바다로 둘러싸인 땅임을 알고, 독도가 섬임을 말할 수 있다.',
        draw: 'a small paper island surrounded by layered blue waves next to a paper mountain village on land, with a child comparing them',
        banner: '섬은 바다 속 땅', extra: [{ motif: 'wave', y: 240 }],
        intro: {
          teacher: '"사방이 모두 바다로 둘러싸인 땅을 무엇이라고 할까요?" 대답을 듣고(기다릴 반응: "섬이요") 시연 단추로 독도 카드가 섬 칸에 놓이는 모습을 보여 준다. "산 꼭대기도 섬이에요"라는 대답에는 "산 둘레에 바다가 있나요, 땅이 있나요?"라고 되묻는다.',
          student: '가 본 적이 있거나 그림에서 본 섬을 떠올려 짝에게 말해 봐요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '섬일까요?', slots: ['섬', '섬이 아니에요'], cards: ['독도', '학교 운동장'], shuffle: false }, sequence: [{ sort: { '섬': ['독도'], '섬이 아니에요': ['학교 운동장'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 섬인 곳, 섬이 아닌 곳 나누기', tool: 'mindmap',
            teacher: '"이곳은 둘레가 모두 바다인가요?" 카드마다 이 질문을 함께 묻는다. 바닷가 모래밭을 섬에 넣는 학생에게는 "바닷가는 한쪽만 바다예요. 뒤쪽은 무엇이 있나요?"라고 묻는다.',
            task: '둘레가 모두 바다인지 생각하며 카드를 나누어요.',
            items: [
              MS('섬과 섬이 아닌 곳으로 나누어 보세요.', '섬일까요?', ['섬', '섬이 아니에요'], ['독도', '울릉도', '서울', '백두산'], { '섬': ['독도', '울릉도'], '섬이 아니에요': ['서울', '백두산'] }, 0.1),
              MS('그림 카드를 섬과 섬이 아닌 곳으로 나누어 보세요.', '어디일까요?', ['섬', '섬이 아니에요'], [{ id: 'is', text: '바다에 둘러싸인 땅', motif: 'wave' }, { id: 'beach', text: '한쪽만 바다인 바닷가', motif: 'sun' }, { id: 'rock', text: '바다 위 바위 땅', motif: 'mountain' }, { id: 'farm', text: '논이 있는 시골 마을', motif: 'house' }], { '섬': ['is', 'rock'], '섬이 아니에요': ['beach', 'farm'] }, 0.2),
              MP('섬을 바르게 말한 카드만 골라 보세요.', '섬이란', ['둘레가 모두 바다예요', '배를 타고 가요', '기차로만 가요', '바다가 안 보여요'], ['둘레가 모두 바다예요', '배를 타고 가요'], 0.15),
            ],
          },
          {
            id: 'a2', title: '활동 2. 섬까지 가는 방법 고르기', tool: 'mindmap',
            teacher: '"독도에 가려면 무엇을 타야 할까요?" 버스나 기차를 고르는 학생에게는 "길이 바다로 막혀 있으면 어떻게 건널까요?"라고 묻는다. 섬에 가는 일은 날씨가 좋아야 한다는 것도 덧붙인다.',
            task: '섬과 관련된 말과 가는 방법을 이어요.',
            items: [
              MM('물음에 맞는 카드를 이어 보세요.', '섬 이야기', [{ id: 'q1', label: '독도에 갈 때 타는 것' }, { id: 'q2', label: '섬을 둘러싼 것' }], ['배', '바다', '기차', '사막'], { q1: '배', q2: '바다' }, 0.15),
              MP('섬에 배를 타고 갈 때 지킬 약속만 골라 보세요.', '배에서 약속', ['구명조끼를 입어요', '난간에 기대지 않아요', '배 끝에서 뛰어요', '혼자 바다를 봐요'], ['구명조끼를 입어요', '난간에 기대지 않아요'], 0.2),
              MS('독도에 있는 것과 없는 것으로 나누어 보세요.', '독도에는', ['있어요', '없어요'], ['바위', '바다', '자동차 길', '놀이공원'], { '있어요': ['바위', '바다'], '없어요': ['자동차 길', '놀이공원'] }, 0.2),
            ],
          },
        ],
        wrap: {
          teacher: '"독도가 섬인 까닭을 한 문장으로 말해 볼까요?" 출구 1번에서 바닷가를 섬에 넣은 학생에게는 둘레가 모두 바다인지 다시 손가락으로 따라가게 한다.',
          exit: [
            XC('mindmap', { mode: 'sort', topic: '섬 찾기', slots: ['섬', '섬이 아니에요'], cards: ['제주도', '독도', '공원', '산 마을'] }, '섬인 곳과 섬이 아닌 곳을 나누어 보세요.', { sort: { '섬': ['제주도', '독도'], '섬이 아니에요': ['공원', '산 마을'] } }, 0.1),
            { type: 'choice', prompt: '독도가 섬인 까닭은 무엇인가요?', options: ['둘레가 모두 바다라서', '산이 높아서'], answer: 0, difficulty: 0.1, explain: '둘레가 모두 바다인 땅을 섬이라고 해요.' },
            MOOD,
          ],
        },
        wsTitle: '섬은 바다 속 땅',
        ws: [
          { type: 'choice', prompt: '섬에 ○ 하세요.', options: ['독도', '서울', '백두산'], answer: '독도' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '둘레가 모두 ___인 땅을 섬이라고 해요.', answer: '바다' },
          { type: 'choice', prompt: '독도에 갈 때 타는 것에 ○ 하세요.', options: ['배', '기차'], answer: '배' },
          { type: 'draw', prompt: '바다로 둘러싸인 섬을 그려 보세요.' },
        ],
        notes: '자주 보이는 어려움: ① 바닷가와 섬을 같은 것으로 본다 → 둘레를 한 바퀴 손으로 따라가게 한다. ② 섬은 모두 크다고 생각한다 → 독도처럼 작은 바위섬도 섬이라고 알려 준다. ③ 배 타기 안전 약속을 놓친다 → 구명조끼를 함께 말하게 한다.',
      }),

      LESSON(3, {
        title: '동도와 서도, 독도의 생김새 알기',
        objective: '독도가 동도·서도 두 큰 섬과 둘레의 작은 바위섬으로 이루어져 있음을 말할 수 있다.',
        draw: 'two rocky paper islets side by side in the sea, a taller one on the left and a wider one on the right, with small rocks around them',
        banner: '두 큰 섬, 동도와 서도', extra: [{ motif: 'bird', x: 120, y: 110 }],
        intro: {
          teacher: '"독도는 섬 하나일까요, 여러 개일까요?" 대답을 듣고(기다릴 반응: "하나요", "두 개요") 시연 단추로 동도·서도 카드가 놓이는 모습을 보여 준다. "독도는 큰 섬 하나예요"라는 대답에는 "사진을 보면 큰 바위섬이 몇 개 보이나요?"라고 되묻는다.',
          student: '그림 속 독도에서 큰 바위섬이 몇 개인지 세어 짝에게 말해 봐요.',
          demo: { tool: 'mindmap', options: { mode: 'match', topic: '독도의 두 섬', slots: [{ id: 'e', label: '해 뜨는 쪽 섬' }], cards: ['동도', '서도'], shuffle: false }, sequence: [{ match: { e: '동도' } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 동도와 서도 이름 잇기', tool: 'mindmap',
            teacher: '"동쪽에 있어서 동도, 서쪽에 있어서 서도예요." 손으로 해 뜨는 쪽과 해 지는 쪽을 가리키게 한다. 이름을 거꾸로 잇는 학생에게는 "동쪽은 해가 뜨는 쪽이에요. 어느 섬이 그쪽에 있나요?"라고 묻는다.',
            task: '독도의 두 큰 섬 이름을 알맞은 자리에 이어요.',
            items: [
              MM('섬이 있는 쪽에 맞게 이름을 이어 보세요.', '독도의 두 섬', [{ id: 'e', label: '동쪽에 있는 섬' }, { id: 'w', label: '서쪽에 있는 섬' }], ['동도', '서도', '제주도'], { e: '동도', w: '서도' }, 0.15),
              MP('독도를 이루는 것만 골라 담아 보세요.', '독도를 이뤄요', ['동도', '서도', '작은 바위섬들', '넓은 모래 들판'], ['동도', '서도', '작은 바위섬들'], 0.2),
              MP('독도의 생김새에 맞는 말만 골라 보세요.', '독도 생김새', ['바위가 많아요', '큰 섬이 둘이에요', '평평한 들판이에요', '나무숲이 빽빽해요'], ['바위가 많아요', '큰 섬이 둘이에요'], 0.2),
            ],
          },
          {
            id: 'a2', title: '활동 2. 확대 지도에서 두 섬 찾기', tool: 'map',
            teacher: '"이 지도는 독도만 크게 그린 지도예요." 왼쪽이 서쪽, 오른쪽이 동쪽임을 북쪽 화살표와 함께 짚는다. 바다 칸에 꽂는 학생에게는 "색칠된 땅 칸에 꽂아요"라고 말해 준다.',
            task: '독도 확대 지도에서 말하는 섬에 핀을 꽂아요.',
            items: [
              MI('독도 확대 지도에서 동도에 핀을 꽂아 보세요.', DK([]), { region: '동도' }, 0.15),
              MI('독도 확대 지도에서 서도에 핀을 꽂아 보세요.', DK([]), { region: '서도' }, 0.15),
              MI('두 섬 사이의 바다 칸에 핀을 꽂아 보세요.', DK([]), { at: [3, 2] }, 0.25,
                { hints: ['두 섬을 먼저 찾고, 그 가운데를 봐요.', '색칠되지 않은 파란 칸이어야 해요.', '서도와 동도 사이에 끼어 있는 바다 칸이에요.'], conclude: '독도는 두 큰 섬 사이로 바닷물이 흘러요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"독도는 큰 섬 몇 개와 작은 바위섬으로 되어 있었지요?" 출구 1번에서 이름을 바꿔 이은 학생에게는 해 뜨는 쪽을 다시 가리키게 한다.',
          exit: [
            XC('mindmap', { mode: 'match', topic: '이름 잇기', slots: [{ id: 'w', label: '해 지는 쪽 섬' }, { id: 'e', label: '해 뜨는 쪽 섬' }], cards: ['서도', '동도', '울릉도'] }, '해 뜨는 쪽과 해 지는 쪽의 섬 이름을 이어 보세요.', { match: { w: '서도', e: '동도' } }, 0.15),
            { type: 'choice', prompt: '독도의 두 큰 섬 이름은 무엇인가요?', options: ['동도와 서도', '남도와 북도'], answer: 0, difficulty: 0.1, explain: '독도는 동도와 서도, 그리고 작은 바위섬들로 되어 있어요.' },
            MOOD,
          ],
        },
        wsTitle: '두 큰 섬, 동도와 서도',
        ws: [
          { type: 'figure', wide: true, prompt: '확대 지도에서 동도에 ○, 서도에 △ 하세요.', tool: 'map', figures: [{ options: DK([]), caption: '독도 확대 지도' }], answer: '오른쪽 동도 ○, 왼쪽 서도 △' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '독도의 두 큰 섬은 ___도와 ___도예요.', answer: '동, 서' },
          { type: 'choice', prompt: '독도에 많은 것에 ○ 하세요.', options: ['바위', '모래 들판'], answer: '바위' },
          { type: 'draw', prompt: '두 큰 섬과 작은 바위섬을 그려 보세요.' },
        ],
        notes: '자주 보이는 어려움: ① 독도를 섬 하나로 여긴다 → 그림에서 큰 바위섬을 세게 한다. ② 동도와 서도를 거꾸로 말한다 → 해 뜨는 쪽 = 동쪽으로 몸짓과 함께 익힌다. ③ 작은 바위섬을 빠뜨린다 → "큰 섬 둘레에 작은 바위도 있어요"를 덧붙인다.',
      }),

      LESSON(4, {
        title: '괭이갈매기와 독도의 새 고르기',
        objective: '독도에 괭이갈매기 같은 바닷새가 산다는 것을 알고, 새를 놀라게 하지 않는 약속을 말할 수 있다.',
        draw: 'many white paper seagulls with grey wings sitting on rocky islets and flying over waves',
        banner: '독도의 새, 괭이갈매기', extra: [{ motif: 'bird', x: 150, y: 100 }, { motif: 'bird', x: 380, y: 130 }],
        intro: {
          teacher: '"독도에 가면 \'야옹\' 하는 소리가 들린대요. 고양이일까요?" 대답을 듣고(기다릴 반응: "고양이요!") 고양이 울음처럼 우는 바닷새 괭이갈매기라고 알려 준다. 시연 단추로 괭이갈매기 카드가 바구니에 담기는 모습을 보여 준다. "독도에 고양이가 많아요"라는 말이 나오면 "울음소리가 고양이를 닮은 새예요"라고 바로잡는다.',
          student: '바닷가에서 본 새가 있나요? 어떤 소리를 냈는지 짝에게 말해 봐요.',
          demo: { tool: 'mindmap', options: { mode: 'pick', topic: '독도의 새', basket: '독도의 새', cards: ['괭이갈매기', '타조'], shuffle: false }, sequence: [{ pick: ['괭이갈매기'] }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 독도에 사는 새 고르기', tool: 'mindmap',
            teacher: '"이 새는 바다 위를 날 수 있을까요?" 펭귄·타조를 담는 학생에게는 "날지 못하는 새가 바다 한가운데 섬까지 올 수 있을까요?"라고 묻는다. 괭이갈매기 이름의 \'괭이\'는 고양이라는 뜻이라고 알려 준다.',
            task: '독도에 사는 새와 새에 맞는 말을 골라요.',
            items: [
              MP('독도에서 볼 수 있는 새만 골라 담아 보세요.', '독도의 새', ['괭이갈매기', '바다제비', '타조', '펭귄'], ['괭이갈매기', '바다제비'], 0.15),
              MP('괭이갈매기에 맞는 말만 골라 보세요.', '괭이갈매기', ['고양이처럼 울어요', '바다 위를 날아요', '땅속에 살아요', '헤엄만 쳐요'], ['고양이처럼 울어요', '바다 위를 날아요'], 0.15),
              MS('바다에 사는 새와 숲에 사는 새로 나누어 보세요.', '어디 사는 새', ['바다', '숲'], ['괭이갈매기', '바다제비', '딱따구리', '부엉이'], { '바다': ['괭이갈매기', '바다제비'], '숲': ['딱따구리', '부엉이'] }, 0.2),
            ],
          },
          {
            id: 'a2', title: '활동 2. 새를 지키는 행동 고르기', tool: 'emotion',
            teacher: '"새가 깜짝 놀라면 둥지와 알은 어떻게 될까요?" 결과 칸을 함께 읽는다. 과자 주기를 고르는 학생에게는 "사람 과자는 새의 몸에 맞지 않아요"라고 말해 준다.',
            task: '독도의 새를 만났을 때 어떻게 할지 고르고 결과를 봐요.',
            items: [
              EB('괭이갈매기가 바위에 앉아 있어요. 어떻게 할까요?', '바위 위에 괭이갈매기가 쉬고 있어요.', [
                { id: 'chase', text: '뛰어가서 쫓아요', result: '새가 놀라 날아가 버려요.', mood: '걱정', why: '쫓으면 새가 쉬지 못해요.' },
                { id: 'watch', text: '멀리서 조용히 봐요', result: '새가 편안하게 쉬어요.', mood: '편안함' }], 'watch', 0.1),
              EB('새에게 과자를 주고 싶어요. 어떻게 할까요?', '친구가 갈매기에게 과자를 던지려고 해요.', [
                { id: 'snack', text: '나도 과자를 던져요', result: '새가 사람 먹이에 익숙해져 아파요.', mood: '걱정', why: '사람 과자는 새 몸에 맞지 않아요.' },
                { id: 'stop', text: '주지 말자고 말해요', result: '새가 바다에서 먹이를 찾아요.', mood: '뿌듯함' }], 'stop', 0.15),
              EB('바위틈에 새알이 보여요. 어떻게 할까요?', '바위틈 둥지에 알이 있어요.', [
                { id: 'touch', text: '신기해서 만져 봐요', result: '어미 새가 둥지를 떠날 수 있어요.', mood: '걱정', why: '알을 만지면 어미가 놀라요.' },
                { id: 'leave', text: '그대로 두고 지나가요', result: '어미 새가 알을 품어요.', mood: '편안함' }], 'leave', 0.15),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 만난 새 이름을 말해 볼까요?" 출구 1번에서 숲의 새를 담은 학생에게는 바다 위를 나는 새인지 다시 묻는다.',
          exit: [
            XC('mindmap', { mode: 'pick', topic: '바닷새 찾기', basket: '바닷새', cards: ['괭이갈매기', '참새', '닭', '바다제비'] }, '바다 위를 나는 독도의 새만 골라 보세요.', { pick: ['괭이갈매기', '바다제비'] }, 0.15),
            { type: 'choice', prompt: '독도의 새를 만나면 어떻게 할까요?', options: ['멀리서 조용히 봐요', '가까이 가서 만져요'], answer: 0, difficulty: 0.1, explain: '새는 놀라지 않아야 편히 쉬고 알을 품어요.' },
            MOOD,
          ],
        },
        wsTitle: '독도의 새, 괭이갈매기',
        ws: [
          { type: 'choice', prompt: '독도에 사는 새에 ○ 하세요.', options: ['괭이갈매기', '타조', '펭귄'], answer: '괭이갈매기' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '괭이갈매기는 ___처럼 울어요.', answer: '고양이' },
          { type: 'check', prompt: '새를 지키는 행동에 ✔ 하세요.', options: ['멀리서 보기', '과자 던지기', '알 만지지 않기'], answer: '멀리서 보기, 알 만지지 않기' },
          { type: 'draw', prompt: '바다 위를 나는 괭이갈매기를 그려 보세요.' },
        ],
        notes: '자주 보이는 어려움: ① 이름 때문에 고양이와 헷갈린다 → 울음소리를 닮은 새라고 정리한다. ② 먹이 주기를 착한 일로 여긴다 → 새에게 맞는 먹이는 바다에 있다고 알려 준다. ③ 새알을 만져 보고 싶어 한다 → 그대로 두는 것이 지키는 일이라고 말해 준다.',
      }),

      LESSON(5, {
        title: '바위틈에 피는 해국과 땅채송화',
        objective: '독도의 바위틈에서 해국·땅채송화 같은 꽃이 자란다는 것을 알고, 꽃을 꺾지 않는 약속을 말할 수 있다.',
        draw: 'small purple paper asters and tiny yellow sedum flowers growing in cracks of grey rocks by the sea',
        banner: '바위틈의 작은 꽃', extra: [{ motif: 'flower', x: 90, y: 200, color: 'lavender' }, { motif: 'flower', x: 400, y: 205, color: 'buttercup' }],
        intro: {
          teacher: '"흙이 거의 없는 바위섬에도 꽃이 필까요?" 대답을 듣고(기다릴 반응: "안 펴요", "펴요") 시연 단추로 해국 카드가 바구니에 담기는 모습을 보여 준다. "꽃은 화분에서만 자라요"라는 말에는 "바위틈에 조금 있는 흙에서도 자라는 꽃이 있어요"라고 알려 준다.',
          student: '길가 돌 틈에서 자라는 풀이나 꽃을 본 적이 있나요? 짝에게 말해 봐요.',
          demo: { tool: 'mindmap', options: { mode: 'pick', topic: '독도의 꽃', basket: '독도의 꽃', cards: ['해국', '장미'], shuffle: false }, sequence: [{ pick: ['해국'] }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 독도에 피는 꽃 고르기', tool: 'mindmap',
            teacher: '"해국의 \'해\'는 바다라는 뜻이에요. 바다 국화예요." 꽃 이름을 함께 소리 내어 읽는다. 장미·튤립을 담는 학생에게는 "이 꽃은 주로 어디에서 키우나요?"라고 묻는다.',
            task: '독도 바위틈에서 자라는 꽃과 그 꽃에 맞는 말을 골라요.',
            items: [
              MP('독도 바위틈에서 자라는 꽃만 골라 담아 보세요.', '독도의 꽃', ['해국', '땅채송화', '장미', '튤립'], ['해국', '땅채송화'], 0.15),
              MM('꽃 이름과 맞는 말을 이어 보세요.', '꽃 이름', [{ id: 'h', label: '해국' }, { id: 'd', label: '땅채송화' }], ['바다 국화라는 뜻', '땅에 붙어 자라요', '물속에서 자라요'], { h: '바다 국화라는 뜻', d: '땅에 붙어 자라요' }, 0.2),
              MP('바위섬 꽃에 맞는 말만 골라 보세요.', '바위섬 꽃', ['바위틈에서 자라요', '바닷바람을 견뎌요', '큰 나무가 돼요', '꽃집에서 왔어요'], ['바위틈에서 자라요', '바닷바람을 견뎌요'], 0.2),
            ],
          },
          {
            id: 'a2', title: '활동 2. 꽃을 지키는 약속 나누기', tool: 'mindmap',
            teacher: '"예쁜 꽃을 꺾어 가면 내년에도 그 자리에 꽃이 필까요?" 사진 찍기와 꺾기를 나누게 한다. 꺾어서 선물하기를 지키는 행동에 넣는 학생에게는 "독도의 꽃은 독도에서 자라야 해요"라고 말해 준다.',
            task: '꽃을 지키는 행동과 해치는 행동을 나누어요.',
            items: [
              MS('꽃을 지키는 행동과 해치는 행동으로 나누어 보세요.', '꽃 지키기', ['지켜요', '해쳐요'], ['눈으로만 봐요', '사진으로 남겨요', '꺾어 가요', '밟고 지나가요'], { '지켜요': ['눈으로만 봐요', '사진으로 남겨요'], '해쳐요': ['꺾어 가요', '밟고 지나가요'] }, 0.15),
              MM('상황에 맞는 행동을 이어 보세요.', '이럴 땐', [{ id: 's1', label: '예쁜 꽃을 보았어요' }, { id: 's2', label: '길 옆에 꽃이 있어요' }], ['그림으로 그려요', '길로만 걸어요', '뿌리째 뽑아요'], { s1: '그림으로 그려요', s2: '길로만 걸어요' }, 0.2),
              MP('독도의 꽃이 잘 자라도록 돕는 말만 골라 보세요.', '꽃을 돕는 말', ['꽃을 밟지 말자', '쓰레기를 가져가자', '꽃을 꺾어 가자', '돌을 던지자'], ['꽃을 밟지 말자', '쓰레기를 가져가자'], 0.2),
            ],
          },
        ],
        wrap: {
          teacher: '"바위틈의 꽃이 대단한 까닭은 무엇일까요?" 출구 1번에서 꽃집 꽃을 담은 학생에게는 바위틈과 화분을 견주어 보게 한다.',
          exit: [
            XC('mindmap', { mode: 'sort', topic: '어디 꽃일까', slots: ['독도 바위틈', '꽃집 화분'], cards: ['해국', '땅채송화', '카네이션', '튤립'] }, '꽃을 독도 바위틈과 꽃집 화분으로 나누어 보세요.', { sort: { '독도 바위틈': ['해국', '땅채송화'], '꽃집 화분': ['카네이션', '튤립'] } }, 0.15),
            { type: 'choice', prompt: '독도의 꽃을 보았을 때 알맞은 행동은 무엇인가요?', options: ['눈으로만 보고 지나가요', '꺾어서 집에 가져가요'], answer: 0, difficulty: 0.1, explain: '꽃은 그 자리에 있어야 다시 피어요.' },
            MOOD,
          ],
        },
        wsTitle: '바위틈의 작은 꽃',
        ws: [
          { type: 'choice', prompt: '독도에 피는 꽃에 ○ 하세요.', options: ['해국', '장미', '튤립'], answer: '해국' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '해국은 ___ 국화라는 뜻이에요.', answer: '바다' },
          { type: 'check', prompt: '꽃을 지키는 행동에 ✔ 하세요.', options: ['눈으로 보기', '꺾기', '밟지 않기'], answer: '눈으로 보기, 밟지 않기' },
          { type: 'draw', prompt: '바위틈에 핀 꽃을 그려 보세요.' },
        ],
        notes: '자주 보이는 어려움: ① 꽃은 흙이 많은 곳에서만 자란다고 생각한다 → 돌 틈 풀을 떠올리게 한다. ② 꽃을 꺾어 선물하는 것을 좋은 일로 여긴다 → 사진·그림으로 남기기를 권한다. ③ 꽃 이름을 헷갈린다 → 이름 뜻(바다 국화)으로 기억하게 한다.',
      }),

      LESSON(6, {
        title: '독도 바다 친구들 나누기',
        objective: '독도 바다에 물고기·오징어·미역 같은 생물이 산다는 것을 알고, 바다와 땅의 생물을 나눌 수 있다.',
        draw: 'paper squid, fish, seaweed and a shrimp swimming under layered blue waves around a rocky islet',
        banner: '독도 바다 친구들', extra: [{ motif: 'leaf', x: 90, y: 230, color: 'mint' }],
        intro: {
          teacher: '"독도 바닷속에는 누가 살까요?" 대답을 듣고(기다릴 반응: "물고기요", "오징어요") 시연 단추로 오징어 카드가 바다 칸에 놓이는 모습을 보여 준다. "상어만 살아요"처럼 무서운 생물만 말하면 "작고 귀여운 친구들도 많아요. 미역도 바다에서 자라요"라고 넓혀 준다.',
          student: '바닷속에 사는 생물 이름을 하나 떠올려 짝에게 말해 봐요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '어디에 살까', slots: ['바다', '땅'], cards: ['오징어', '토끼'], shuffle: false }, sequence: [{ sort: { '바다': ['오징어'], '땅': ['토끼'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 바다 생물과 땅 생물 나누기', tool: 'mindmap',
            teacher: '"이 친구는 물속에서 숨 쉴 수 있을까요?" 미역을 땅에 넣는 학생에게는 "미역은 바닷속 바위에 붙어 자라는 바다 풀이에요"라고 알려 준다.',
            task: '사는 곳에 따라 생물 카드를 나누어요.',
            items: [
              MS('생물을 사는 곳에 따라 나누어 보세요.', '어디에 살까', ['바다', '땅'], ['오징어', '미역', '다람쥐', '소'], { '바다': ['오징어', '미역'], '땅': ['다람쥐', '소'] }, 0.1),
              MP('독도 바닷속에서 볼 수 있는 것만 골라 보세요.', '독도 바닷속', ['물고기', '전복', '사슴', '개구리'], ['물고기', '전복'], 0.15),
              MS('바닷속에서 헤엄치는 것과 바위에 붙어 사는 것으로 나누어 보세요.', '바닷속 친구', ['헤엄쳐요', '바위에 붙어요'], ['오징어', '물고기', '미역', '전복'], { '헤엄쳐요': ['오징어', '물고기'], '바위에 붙어요': ['미역', '전복'] }, 0.25),
            ],
          },
          {
            id: 'a2', title: '활동 2. 깨끗한 바다를 지키는 행동 고르기', tool: 'mindmap',
            teacher: '"바다에 버린 비닐을 물고기가 먹으면 어떻게 될까요?" 물고기 마음을 떠올리게 한다. 바다에 쓰레기를 버려도 된다는 학생에게는 바다 친구들의 집이라는 점을 짚는다.',
            task: '바다 친구들의 집을 깨끗하게 지키는 행동을 골라요.',
            items: [
              MP('바다 친구들을 돕는 행동만 골라 보세요.', '바다 돕기', ['쓰레기를 가져와요', '비닐을 줄여요', '바다에 버려요', '돌을 던져요'], ['쓰레기를 가져와요', '비닐을 줄여요'], 0.15),
              MM('바다 친구의 말에 맞는 행동을 이어 보세요.', '바다 친구 말', [{ id: 'f', label: '물고기: 비닐이 무서워요' }, { id: 'g', label: '갈매기: 바위가 더러워요' }], ['비닐을 줄여요', '쓰레기를 주워요', '물에 버려요'], { f: '비닐을 줄여요', g: '쓰레기를 주워요' }, 0.2),
              MS('바다에 좋은 일과 나쁜 일로 나누어 보세요.', '바다에게', ['좋아요', '나빠요'], ['분리배출하기', '일회용품 줄이기', '쓰레기 던지기', '기름 붓기'], { '좋아요': ['분리배출하기', '일회용품 줄이기'], '나빠요': ['쓰레기 던지기', '기름 붓기'] }, 0.2),
            ],
          },
        ],
        wrap: {
          teacher: '"독도 바다 친구를 세 가지 말해 볼까요?" 출구 1번에서 땅 생물을 담은 학생에게는 물속에서 사는지 다시 묻는다.',
          exit: [
            XC('mindmap', { mode: 'pick', topic: '바다 친구', basket: '바다 친구', cards: ['미역', '오징어', '고양이', '닭'] }, '독도 바다에 사는 친구만 골라 담아 보세요.', { pick: ['미역', '오징어'] }, 0.1),
            { type: 'choice', prompt: '독도 바다를 지키는 행동은 무엇인가요?', options: ['쓰레기를 가져와요', '바다에 쓰레기를 버려요'], answer: 0, difficulty: 0.1, explain: '바다는 바다 친구들의 집이에요.' },
            MOOD,
          ],
        },
        wsTitle: '독도 바다 친구들',
        ws: [
          { type: 'table', prompt: '바다에 사는 것에 ○, 땅에 사는 것에 △ 하세요.', columns: ['생물', '○ / △'], cells: [['오징어', ''], ['다람쥐', ''], ['미역', '']], answer: '○, △, ○' },
          { type: 'choice', prompt: '바위에 붙어 자라는 바다 풀에 ○ 하세요.', options: ['미역', '토끼'], answer: '미역' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '바다에 ___를 버리지 않아요.', answer: '쓰레기' },
          { type: 'draw', prompt: '독도 바닷속 친구들을 그려 보세요.' },
        ],
        notes: '자주 보이는 어려움: ① 미역을 생물로 여기지 않는다 → 바다에서 자라는 풀이라고 알려 준다. ② 무서운 바다 생물만 떠올린다 → 작은 바다 친구들을 함께 찾는다. ③ 바다 쓰레기를 남의 일로 여긴다 → 우리 집 쓰레기가 바다로 갈 수 있다고 말해 준다.',
      }),

      LESSON(7, {
        title: '독도에서 일하는 사람과 하는 일 잇기',
        objective: '독도경비대원·등대관리원·주민처럼 독도에서 지내는 사람들이 하는 일을 말할 수 있다.',
        draw: 'a paper lighthouse on a rocky islet, a guard in uniform looking out to sea, and a small house on the other islet',
        banner: '독도를 지키는 사람들', extra: [{ motif: 'house', x: 90, y: 210, color: 'peach', s: 0.7 }],
        intro: {
          teacher: '"아주 작은 섬 독도에도 사람이 살까요?" 대답을 듣고(기다릴 반응: "아무도 없어요", "군인이 있어요") 독도에는 주민과 독도경비대원, 등대를 돌보는 사람들이 지낸다고 알려 준다. 시연 단추로 등대 카드가 이어지는 모습을 보여 준다.',
          student: '우리 동네를 지켜 주는 사람을 한 명 떠올려 짝에게 말해 봐요.',
          demo: { tool: 'mindmap', options: { mode: 'match', topic: '하는 일', slots: [{ id: 'l', label: '밤에 배에게 길을 알려요' }], cards: ['등대', '놀이터'], shuffle: false }, sequence: [{ match: { l: '등대' } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 사람과 하는 일 잇기', tool: 'mindmap',
            teacher: '"독도경비대원은 바다를 살피며 독도를 지켜요." 사람마다 하는 일을 한 문장으로 말하게 한다. 등대관리원을 \'불 끄는 사람\'으로 잇는 학생에게는 "등대 불은 끄는 게 아니라 밤새 켜서 배를 도와요"라고 말해 준다.',
            task: '독도에서 지내는 사람과 그 사람이 하는 일을 이어요.',
            items: [
              MM('사람과 하는 일을 이어 보세요.', '독도의 사람들', [{ id: 'g', label: '독도경비대원' }, { id: 'l', label: '등대관리원' }], ['바다를 살피며 지켜요', '등대 불을 돌봐요', '물건을 팔아요'], { g: '바다를 살피며 지켜요', l: '등대 불을 돌봐요' }, 0.15),
              MP('독도에서 지내는 사람만 골라 담아 보세요.', '독도의 사람들', ['독도경비대원', '등대관리원', '주민', '지하철 기관사'], ['독도경비대원', '등대관리원', '주민'], 0.2),
              MM('물음에 맞는 카드를 이어 보세요.', '독도 이야기', [{ id: 'q1', label: '밤바다를 밝히는 것' }, { id: 'q2', label: '배가 들어와 닿는 곳' }], ['등대', '선착장', '놀이터'], { q1: '등대', q2: '선착장' }, 0.2),
            ],
          },
          {
            id: 'a2', title: '활동 2. 고마운 마음 전하기', tool: 'story',
            teacher: '"멀리 바다 한가운데서 일하는 사람에게 무슨 말을 하고 싶나요?" 말풍선을 읽고 어울리는 낱말을 넣게 한다. 놀리는 말을 넣는 학생에게는 "이 말을 들으면 어떤 마음일까요?"라고 묻는다.',
            task: '독도에서 일하는 사람에게 보내는 말풍선의 빈칸을 채워요.',
            items: [
              SF('경비대원에게 보내는 말풍선을 채워 보세요.', ['고맙습니다', '심심해요', '시끄러워요'], [{ id: 'b1', who: '민지', motif: 'star', label: '독도를 지켜 주셔서 ___.' }], { b1: '고맙습니다' }, 0.1),
              SF('등대관리원에게 보내는 말풍선을 채워 보세요.', ['밝혀', '꺼', '숨겨'], [{ id: 'b1', who: '준호', motif: 'moon', label: '밤바다를 ___ 주셔서 고마워요.' }], { b1: '밝혀' }, 0.15),
              SF('독도 주민에게 보내는 말풍선을 채워 보세요.', ['건강하세요', '떠나세요', '조용하세요'], [{ id: 'b1', who: '서아', motif: 'house', label: '바닷바람 부는 독도에서 늘 ___.' }], { b1: '건강하세요' }, 0.15),
            ],
          },
        ],
        wrap: {
          teacher: '"독도에서 지내는 사람을 두 명 말해 볼까요?" 출구 1번에서 짝을 바꿔 이은 학생에게는 등대가 하는 일을 다시 떠올리게 한다.',
          exit: [
            XC('mindmap', { mode: 'match', topic: '누가 할까', slots: [{ id: 'l', label: '등대 불을 켜요' }, { id: 'g', label: '독도 바다를 살펴요' }], cards: ['등대관리원', '독도경비대원', '요리사'] }, '하는 일에 맞는 사람을 이어 보세요.', { match: { l: '등대관리원', g: '독도경비대원' } }, 0.15),
            { type: 'choice', prompt: '독도 등대는 무슨 일을 하나요?', options: ['밤에 배에게 길을 알려요', '비를 내려요'], answer: 0, difficulty: 0.1, explain: '등대 불빛을 보고 배가 안전하게 다녀요.' },
            MOOD,
          ],
        },
        wsTitle: '독도를 지키는 사람들',
        ws: [
          { type: 'table', prompt: '사람과 하는 일을 이으세요.', columns: ['사람', '하는 일'], cells: [['독도경비대원', ''], ['등대관리원', '']], answer: '바다를 살피며 지켜요 / 등대 불을 돌봐요' },
          { type: 'choice', prompt: '밤바다를 밝히는 것에 ○ 하세요.', options: ['등대', '자동차'], answer: '등대' },
          { type: 'short', prompt: '독도에서 일하는 사람에게 하고 싶은 말을 한 문장 쓰세요.' },
          { type: 'draw', prompt: '독도의 등대를 그려 보세요.' },
        ],
        notes: '자주 보이는 어려움: ① 독도에는 아무도 없다고 생각한다 → 주민·경비대원·등대 관리 인력이 지낸다고 알려 준다. ② 등대가 하는 일을 모른다 → 밤바다에서 불빛이 길잡이가 된다고 몸짓으로 보여 준다. ③ 경비대원을 무서운 사람으로 여긴다 → 섬과 바다를 지키는 고마운 사람이라고 말해 준다.',
      }),

      LESSON(8, {
        title: '독도 자연을 아끼는 행동 골라 보기',
        objective: '독도의 새·꽃·바다를 아끼는 행동을 상황 속에서 고르고, 그 까닭을 말할 수 있다.',
        draw: 'a child picking up litter on a rocky shore while seagulls rest nearby and small flowers bloom in rock cracks',
        banner: '독도 자연을 아껴요', extra: [{ motif: 'flower', x: 90, y: 205, color: 'lavender' }],
        intro: {
          teacher: '"독도의 새와 꽃, 바다를 지키려면 우리는 무엇을 할 수 있을까요?" 대답을 듣고(기다릴 반응: "쓰레기를 안 버려요") 시연 단추로 갈림길 보기를 고르고 결과가 나오는 모습을 보여 준다. "우리는 독도에 못 가니까 할 일이 없어요"라는 말에는 "우리 동네 바다와 물을 아끼는 것도 독도 바다를 돕는 일이에요"라고 말해 준다.',
          student: '자연을 아낀 경험을 하나 떠올려 짝에게 말해 봐요.',
          demo: { tool: 'emotion', options: { mode: 'branch', situation: '바닷가에 빈 병이 떨어져 있어요.', choices: [{ id: 'pick', text: '주워서 버려요', result: '바닷가가 깨끗해져요.', mood: '뿌듯함' }, { id: 'kick', text: '발로 차요', result: '병이 바다로 굴러가요.', mood: '걱정' }] }, sequence: [{ choice: 'pick' }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 갈림길에서 아끼는 행동 고르기', tool: 'emotion',
            teacher: '"이렇게 하면 독도의 친구들은 어떤 마음일까요?" 결과 칸을 함께 읽고 까닭을 짧게 말하게 한다. 돌 쌓기·낙서를 재미로 여기는 학생에게는 "바위에 남긴 글자는 지워지지 않아요"라고 짚는다.',
            task: '독도를 찾은 상황에서 어떻게 할지 고르고 결과를 봐요.',
            items: [
              EB('독도에 간 날, 바위에 이름을 쓰고 싶어요. 어떻게 할까요?', '친구가 바위에 이름을 새기자고 해요.', [
                { id: 'write', text: '같이 이름을 새겨요', result: '바위에 흉터가 남아요.', mood: '속상함', why: '바위에 새긴 글자는 지워지지 않아요.' },
                { id: 'photo', text: '사진만 찍자고 말해요', result: '바위가 그대로 깨끗해요.', mood: '뿌듯함' }], 'photo', 0.1),
              EB('먹고 남은 과자 봉지가 있어요. 어떻게 할까요?', '과자를 다 먹고 봉지가 남았어요.', [
                { id: 'drop', text: '바위 사이에 숨겨요', result: '바람에 봉지가 바다로 날아가요.', mood: '걱정', why: '숨긴 쓰레기도 바다로 가요.' },
                { id: 'bag', text: '가방에 넣어 가져가요', result: '독도가 깨끗하게 남아요.', mood: '뿌듯함' }], 'bag', 0.1),
              EB('물가에서 작은 게를 보았어요. 어떻게 할까요?', '바위 사이에 작은 게가 기어가요.', [
                { id: 'take', text: '통에 담아 집에 가져가요', result: '게가 살던 집을 잃어요.', mood: '슬픔', why: '게는 바다가 집이에요.' },
                { id: 'see', text: '보고 그 자리에 둬요', result: '게가 바위틈 집으로 돌아가요.', mood: '편안함' }], 'see', 0.15),
            ],
          },
          {
            id: 'a2', title: '활동 2. 아끼는 행동과 해치는 행동 나누기', tool: 'mindmap',
            teacher: '"이 행동은 독도 자연을 지킬까요, 해칠까요?" 카드를 나눈 뒤 지키는 행동 하나를 골라 몸짓으로 해 보게 한다.',
            task: '독도 자연을 아끼는 행동과 해치는 행동을 나누어요.',
            items: [
              MS('독도 자연을 아끼는 행동과 해치는 행동으로 나누어 보세요.', '독도 자연', ['아껴요', '해쳐요'], ['쓰레기 가져가기', '새 멀리서 보기', '바위에 낙서하기', '꽃 꺾기'], { '아껴요': ['쓰레기 가져가기', '새 멀리서 보기'], '해쳐요': ['바위에 낙서하기', '꽃 꺾기'] }, 0.1),
              MP('집에서도 독도 바다를 도울 수 있는 행동만 골라 보세요.', '집에서 돕기', ['물을 아껴 써요', '일회용품을 줄여요', '쓰레기를 강에 버려요', '물을 틀어 놓아요'], ['물을 아껴 써요', '일회용품을 줄여요'], 0.2),
              MM('독도 친구의 부탁에 맞는 행동을 이어 보세요.', '독도 친구 부탁', [{ id: 'b', label: '괭이갈매기: 쉬고 싶어요' }, { id: 'f', label: '해국: 밟지 마세요' }], ['조용히 지나가요', '길로만 걸어요', '크게 소리쳐요'], { b: '조용히 지나가요', f: '길로만 걸어요' }, 0.2),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘부터 내가 지킬 약속 하나를 말해 볼까요?" 출구 1번에서 낙서하기를 아끼는 쪽에 둔 학생에게는 지워지지 않는 흉터라는 점을 다시 말해 준다.',
          exit: [
            XC('mindmap', { mode: 'sort', topic: '나의 약속', slots: ['좋아요', '안 돼요'], cards: ['조용히 새 보기', '쓰레기 되가져가기', '게 잡아 오기', '꽃 밟기'] }, '독도에서 해도 좋은 일과 안 되는 일을 나누어 보세요.', { sort: { '좋아요': ['조용히 새 보기', '쓰레기 되가져가기'], '안 돼요': ['게 잡아 오기', '꽃 밟기'] } }, 0.15),
            { type: 'choice', prompt: '독도에서 남은 쓰레기는 어떻게 할까요?', options: ['가방에 넣어 가져가요', '바위 사이에 숨겨요'], answer: 0, difficulty: 0.1, explain: '숨긴 쓰레기도 바람과 파도에 바다로 가요.' },
            MOOD,
          ],
        },
        wsTitle: '독도 자연을 아껴요',
        ws: [
          { type: 'check', prompt: '독도 자연을 아끼는 행동에 ✔ 하세요.', options: ['쓰레기 가져가기', '바위에 낙서하기', '새 멀리서 보기'], answer: '쓰레기 가져가기, 새 멀리서 보기' },
          { type: 'choice', prompt: '작은 게를 보았을 때 알맞은 행동에 ○ 하세요.', options: ['그 자리에 둬요', '통에 담아 가요'], answer: '그 자리에 둬요' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '집에서도 ___을 아껴 쓰면 바다를 도와요.', answer: '물' },
          { type: 'short', prompt: '독도 자연을 위해 내가 지킬 약속을 한 문장 쓰세요.' },
        ],
        notes: '자주 보이는 어려움: ① 바위 낙서·돌 쌓기를 놀이로 여긴다 → 남는 흉터를 결과로 보여 준다. ② 작은 생물을 데려가도 된다고 생각한다 → 생물의 집은 바다라고 말해 준다. ③ 독도에 가지 않으면 할 일이 없다고 여긴다 → 집에서 물·일회용품 아끼기와 잇는다.',
      }),

      LESSON(9, {
        title: '독도에게 보내는 말풍선 채우기',
        objective: '독도에 대해 알게 된 것을 바탕으로 독도를 아끼는 마음을 말과 그림으로 나타낼 수 있다.',
        draw: 'a child holding up a paper postcard with a drawing of two islets and a seagull, with a heart-shaped cloud above the sea',
        banner: '독도야, 사랑해', extra: [{ motif: 'star', x: 90, y: 110, color: 'rose', s: 0.7 }],
        intro: {
          teacher: '"독도에게 편지를 쓴다면 무슨 말을 하고 싶나요?" 대답을 듣고(기다릴 반응: "보고 싶어", "지켜 줄게") 시연 단추로 말풍선에 낱말이 들어가는 모습을 보여 준다. "다른 나라는 나빠"처럼 남을 탓하는 말이 나오면 "오늘은 독도에게 우리 마음을 전해 봐요. 독도가 듣고 기뻐할 말은 무엇일까요?"라고 돌려 준다.',
          student: '독도에서 가장 기억에 남는 것(새, 꽃, 바다, 사람)을 하나 골라 짝에게 말해 봐요.',
          demo: { tool: 'story', options: { mode: 'fill', cards: ['보고 싶어', '시끄러워'], slots: [{ id: 'b1', who: '나', motif: 'star', label: '독도야, ___.' }], shuffle: false }, sequence: [{ fill: { b1: '보고 싶어' } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 독도에게 하는 말 채우기', tool: 'story',
            teacher: '"독도에게 알맞은 말일까요?" 말풍선을 함께 읽고 낱말을 넣은 뒤 소리 내어 다시 읽게 한다. 배운 내용과 다른 말(예: 독도는 서쪽 바다에)을 넣는 학생에게는 지난 시간 지도를 떠올리게 한다.',
            task: '배운 것을 떠올려 독도에게 보내는 말풍선의 빈칸을 채워요.',
            items: [
              SF('독도의 자리를 담은 말풍선을 채워 보세요.', ['동쪽', '서쪽', '남쪽'], [{ id: 'b1', who: '지우', motif: 'sun', label: '독도야, 너는 우리나라 ___ 바다에 있지.' }], { b1: '동쪽' }, 0.1),
              SF('독도의 새를 담은 말풍선을 채워 보세요.', ['괭이갈매기', '펭귄', '타조'], [{ id: 'b1', who: '하준', motif: 'bird', label: '네 바위 위에서 ___가 울고 있지?' }], { b1: '괭이갈매기' }, 0.15),
              SF('독도의 생김새를 담은 말풍선을 채워 보세요.', ['동도와 서도', '큰 들판', '높은 빌딩'], [{ id: 'b1', who: '소윤', motif: 'mountain', label: '너는 ___ 두 큰 섬으로 되어 있어.' }], { b1: '동도와 서도' }, 0.2),
            ],
          },
          {
            id: 'a2', title: '활동 2. 마음 카드 고르기', tool: 'emotion',
            teacher: '"이 말을 들은 독도는 어떤 마음일까요?" 상황 글을 읽고 마음 날씨를 고르게 한다. 같은 상황에도 여러 마음이 있을 수 있지만, 문항이 묻는 마음을 고르도록 돕는다.',
            task: '상황에 어울리는 마음 날씨 카드를 이어요.',
            items: [
              MM('상황에 어울리는 마음을 이어 보세요.', '독도의 마음', [{ id: 's1', label: '친구들이 쓰레기를 주웠어요' }, { id: 's2', label: '바위에 낙서가 생겼어요' }], ['기쁨', '속상함', '놀람'], { s1: '기쁨', s2: '속상함' }, 0.15),
              MM('나의 마음에 어울리는 카드를 이어 보세요.', '나의 마음', [{ id: 's1', label: '독도를 지도에서 찾았어요' }, { id: 's2', label: '경비대원께 편지를 썼어요' }], ['뿌듯함', '고마움', '화남'], { s1: '뿌듯함', s2: '고마움' }, 0.2),
              MM('갈매기의 마음에 어울리는 카드를 이어 보세요.', '갈매기의 마음', [{ id: 's1', label: '누가 쫓아와요' }, { id: 's2', label: '조용히 쉬고 있어요' }], ['무서움', '편안함', '신남'], { s1: '무서움', s2: '편안함' }, 0.2),
            ],
          },
        ],
        wrap: {
          teacher: '"내가 독도에게 가장 하고 싶은 말을 말해 볼까요?" 출구 1번에서 틀린 자리를 넣은 학생에게는 해 뜨는 쪽 바다를 다시 가리키게 한다.',
          exit: [
            XC('story', { mode: 'fill', cards: ['꽃', '자동차', '기차'], slots: [{ id: 'b1', who: '나', motif: 'flower', label: '독도야, 네 바위틈에 핀 ___이 예뻐.' }] }, '독도에게 보내는 말풍선의 빈칸을 채워 보세요.', { fill: { b1: '꽃' } }, 0.1),
            { type: 'short', prompt: '독도에게 하고 싶은 말을 한 문장으로 쓰세요.' },
            MOOD,
          ],
        },
        wsTitle: '독도에게 보내는 엽서',
        ws: [
          { type: 'blank', prompt: '빈칸을 채워 엽서를 완성하세요.', text: '독도야, 너는 우리나라 ___쪽 바다에 있어. 너를 ___게.', answer: '동, 아낄(지킬)' },
          { type: 'choice', prompt: '독도에 사는 새에 ○ 하세요.', options: ['괭이갈매기', '닭'], answer: '괭이갈매기' },
          { type: 'short', prompt: '독도를 위해 할 일을 한 가지 쓰세요.' },
          { type: 'draw', prompt: '독도에게 보낼 엽서 그림을 그려 보세요.' },
        ],
        notes: '자주 보이는 어려움: ① 배운 사실과 다른 말을 쓴다 → 지난 차시 카드를 다시 보여 준다. ② 남을 탓하는 말로 마음을 나타낸다 → 독도가 듣고 기뻐할 말로 바꾸게 한다. ③ 글쓰기가 어려운 학생 → 그림과 낱말 하나로도 충분하다고 알려 준다.',
      }),

      LESSON(10, {
        title: '위치·자연·사람으로 독도 공부 묶기',
        objective: '1학년 독도 공부에서 알게 된 것을 위치·자연·사람으로 나누어 말할 수 있다.',
        draw: 'a paper treasure box opened beside two islets, with cards showing a seagull, a flower, a lighthouse and a map pin floating out',
        banner: '독도 공부를 모아요', extra: [{ motif: 'star', x: 80, y: 110, color: 'buttercup', s: 0.6 }],
        intro: {
          teacher: '"우리가 독도에 대해 알게 된 것을 보물 상자에 모아 볼까요?" 대답을 듣고(기다릴 반응: "괭이갈매기요", "동쪽 바다요") 시연 단추로 카드가 가지에 놓이는 모습을 보여 준다. 하나만 말하는 학생에게는 "독도에 사는 꽃은 무엇이었지요?"처럼 다른 갈래를 떠올리게 한다.',
          student: '독도에 대해 알게 된 것 중 친구에게 꼭 알려 주고 싶은 것을 하나 말해 봐요.',
          demo: { tool: 'mindmap', options: { mode: 'sort', topic: '독도', slots: ['위치', '자연'], cards: ['동쪽 바다', '괭이갈매기'], shuffle: false }, sequence: [{ sort: { '위치': ['동쪽 바다'], '자연': ['괭이갈매기'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 알게 된 것 세 갈래로 나누기', tool: 'mindmap',
            teacher: '"이 카드는 독도가 어디 있는지 말하나요, 무엇이 사는지 말하나요, 누가 지내는지 말하나요?" 등대를 자연에 넣는 학생에게는 등대는 사람이 만든 것이라는 점을 짚는다.',
            task: '독도에 대해 알게 된 카드를 위치·자연·사람으로 나누어요.',
            items: [
              MS('카드를 위치·자연·사람으로 나누어 보세요.', '독도', ['위치', '자연', '사람'], ['동쪽 바다', '괭이갈매기', '해국', '독도경비대원'], { '위치': ['동쪽 바다'], '자연': ['괭이갈매기', '해국'], '사람': ['독도경비대원'] }, 0.2),
              MS('카드를 위치와 자연으로 나누어 보세요.', '독도 공부', ['위치', '자연'], ['울릉도 가까이', '우리나라 섬', '오징어', '땅채송화'], { '위치': ['울릉도 가까이', '우리나라 섬'], '자연': ['오징어', '땅채송화'] }, 0.2),
              MP('독도에 대해 맞는 말만 골라 담아 보세요.', '맞는 말', ['두 큰 섬이 있어요', '등대가 있어요', '서쪽 바다에 있어요', '큰 도시가 있어요'], ['두 큰 섬이 있어요', '등대가 있어요'], 0.2),
            ],
          },
          {
            id: 'a2', title: '활동 2. 지도에서 다시 찾아보기', tool: 'map',
            teacher: '"처음 시간에 찾았던 독도를 이제는 혼자 찾을 수 있나요?" 지도 이름이 보이지 않는 도전 단계도 권한다. 울릉도와 헷갈리는 학생에게는 "독도는 울릉도보다 더 바다 쪽에 있는 작은 섬이에요"라고 말해 준다.',
            task: '지도에서 독도와 둘레 곳을 찾아 핀을 꽂아요.',
            items: [
              MI('남쪽 바다의 큰 섬, 제주도에 핀을 꽂아 보세요.', KOR([P.jeju, P.dokdo, P.seoul, P.ulleung]), { place: '제주도' }, 0.1),
              MI('우리나라 맨 북쪽의 산, 백두산에 핀을 꽂아 보세요.', KOR([P.baekdu, P.dokdo, P.jeju, P.seoul]), { place: '백두산' }, 0.15),
              MI('울릉도보다 더 동쪽 바다에 있는 섬에 핀을 꽂아 보세요.', KOR([P.ulleung, P.dokdo, P.jeju, P.busan]), { place: '독도' }, 0.2),
            ],
          },
        ],
        wrap: {
          teacher: '"1학년 독도 공부에서 가장 좋았던 것은 무엇인가요?" 출구 1번에서 해국을 사람 갈래에 둔 학생에게는 해국이 꽃이라는 점을 다시 짚는다.',
          exit: [
            XC('mindmap', { mode: 'sort', topic: '독도 보물 상자', slots: ['자연', '사람'], cards: ['바다제비', '해국', '등대관리원', '독도 주민'] }, '카드를 자연과 사람으로 나누어 보세요.', { sort: { '자연': ['바다제비', '해국'], '사람': ['등대관리원', '독도 주민'] } }, 0.15),
            { type: 'choice', prompt: '독도에 대해 바르게 말한 것은 무엇인가요?', options: ['우리나라 동쪽 바다의 섬이에요', '우리나라 남쪽 땅의 산이에요'], answer: 0, difficulty: 0.1, explain: '독도는 우리나라 동쪽 바다에 있는 섬이에요.' },
            MOOD,
          ],
        },
        wsTitle: '독도 공부를 모아요',
        ws: [
          { type: 'table', prompt: '알게 된 것을 갈래에 맞게 쓰세요.', columns: ['위치', '자연', '사람'], rows: 2 },
          { type: 'choice', prompt: '독도의 새에 ○ 하세요.', options: ['괭이갈매기', '참새'], answer: '괭이갈매기' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '독도의 두 큰 섬은 동도와 ___예요.', answer: '서도' },
          { type: 'draw', prompt: '내가 알게 된 독도를 한 장의 그림으로 그려 보세요.' },
        ],
        notes: '자주 보이는 어려움: ① 사람이 만든 것(등대)과 자연을 섞는다 → "사람이 만들었나요?"로 가르게 한다. ② 울릉도와 독도를 헷갈린다 → 크기와 위치(독도가 더 동쪽)로 견주게 한다. ③ 한 갈래만 떠올린다 → 갈래마다 하나씩 말하게 한다.',
      }),
    ],
  });
})();
