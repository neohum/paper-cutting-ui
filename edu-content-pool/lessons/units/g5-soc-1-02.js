/* 5학년 1학기 사회 2. 우리나라 지리 탐구 — 단원 파일
 * 모든 지도·그래프·설문은 지어낸 자료다(실제 기온·인구 통계 없음). 우리나라 기후의 계절 특징(여름은 덥고 비가 많고 겨울은 춥고 건조하다)과
 * 재해 이름·대비 행동은 일반 사실만 쓰고, 숫자는 모두 이 단원 안에서 정한 값이다.
 * 다솜도(도) — 위쪽(북)이 산지, 아래쪽(남)이 바다이고 가운데 들빛시가 가장 크다. 차시 1·2·9·16이 같은 지도를 쓴다.
 */
(function () {
  const BASE = { schema: 'edu-lesson.v1', grade: 5, subject: '사회', unitTitle: '2. 우리나라 지리 탐구', minutes: 40, formats: ['chromebook', 'projector', 'print'] };
  const L = (n, o) => Object.assign({ id: `g5-soc-1-02-${String(n).padStart(2, '0')}`, catalog: { unit: 'g5-사회-1학기-2', lesson: n } }, BASE, o);
  const ILL = (what) => `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`;
  const S1 = ['[6사02-01]']; const S2 = ['[6사02-02]'];
  const W = (o, more) => Object.assign({}, o, more || {});
  const SC = (text, more) => ({ viewBox: [480, 270], layers: [{ motif: 'cloud', x: 110, y: 52 }, { motif: 'sun', x: 405, y: 56, s: 0.8 }, { motif: 'hills', y: 206 }].concat(more || [], [{ motif: 'text', x: 240, y: 140, text, size: 22 }]) });
  const LVL = { mindmap: { easy: { live: true } }, chart: { easy: { showValues: true } }, map: { easy: {} } };
  const lv = (tool) => ({ easy: Object.assign({}, (LVL[tool] || {}).easy), base: {}, challenge: {} });
  const DIFF = { easy: '맞는 자리에 놓으면 초록 테두리가 생기거나 값이 보이는 도움이 켜져 있어요.', base: '도움 없이 같은 문항을 풀고, 틀리면 힌트를 단계별로 받아요.', challenge: '쉬운 단계의 도움 없이 풀고, 그렇게 고른 까닭을 자료의 어느 곳에서 찾았는지 말로 설명해요.' };
  // 첫 활동 첫 문항으로 교사 시연을 만든다(고르기·수 쓰기 문항은 시연하지 않는다)
  const demoOf = (a) => {
    const it = a.items[0]; if (!it || it.free) return undefined; const t = it.target;
    if (!t || ('pick' in t && !Array.isArray(t.pick)) || 'value' in t || 'table' in t) return undefined;
    return { tool: a.tool, options: Object.assign({}, a.options, it.toolOptions), sequence: [t] };
  };
  const mk = (n, d) => {
    const acts = d.acts.map((a, i) => Object.assign({ id: `a${i + 1}`, minutes: d.acts.length === 3 ? 9 : (i ? 14 : 13), levels: lv(a.tool) }, a, { title: `활동 ${i + 1}. ${a.title}` }));
    const intro = { id: 'intro', title: '도입', minutes: 5, teacher: d.intro.teacher, student: d.intro.student };
    const demo = demoOf(acts[0]); if (demo) intro.demo = demo;
    return L(n, {
      title: d.title, objective: d.objective, standards: d.std,
      illustration: { prompt: ILL(d.ill), scene: SC(d.scene, d.more) },
      stages: [intro, { id: 'main', title: '전개', minutes: 27, activities: acts }, { id: 'wrapup', title: '정리', minutes: 8, teacher: d.wrap.teacher, exitTicket: d.wrap.exits }],
      worksheet: { title: d.ws.title, items: d.ws.items, easy: d.ws.easy },
      differentiation: d.diff || DIFF, teacherNotes: d.notes,
    });
  };

  // 다솜도: 위(북) 산마루군·새벌시, 가운데 들빛시, 동쪽 물결군, 아래(남) 햇볕시·남바다군
  const DASOM_CELLS = [
    ['산마루군', 'peach', [[0, 0], [1, 0], [2, 0], [3, 0], [0, 1], [1, 1]]],
    ['새벌시', 'mint', [[4, 0], [5, 0], [3, 1], [4, 1], [5, 1]]],
    ['들빛시', 'lavender', [[2, 1], [0, 2], [1, 2], [2, 2], [3, 2]]],
    ['물결군', 'sky', [[4, 2], [5, 2], [4, 3], [5, 3]]],
    ['햇볕시', 'buttercup', [[0, 3], [1, 3], [2, 3], [3, 3], [0, 4], [1, 4], [2, 4]]],
    ['남바다군', 'rose', [[3, 4], [4, 4], [5, 4]]],
  ];
  const DASOM = (vals) => DASOM_CELLS.map(([name, color, cells], i) => ({ name, color, cells, value: vals[i] }));
  const JAN = DASOM([1, 2, 3, 4, 6, 7]);      // 1월 평균 기온(°C)
  const AUG = DASOM([22, 24, 25, 24, 27, 26]); // 8월 평균 기온(°C)
  const POP = DASOM([5, 40, 160, 15, 70, 10]); // 인구(만 명)
  const MAP_JAN = { grid: [6, 5], title: '다솜도 1월 평균 기온(°C)', regions: JAN, choropleth: true, unit: '°C', legend: false };
  const MAP_AUG = { grid: [6, 5], title: '다솜도 8월 평균 기온(°C)', regions: AUG, choropleth: true, unit: '°C', legend: false };
  const MAP_POP = { grid: [6, 5], title: '다솜도 지역별 인구(만 명)', regions: POP, choropleth: true, unit: '만 명', legend: false };
  // 활동지 전용 판: 오른쪽에 바다 한 줄을 더해 지도 높이 대비 글자를 키우고 제목·범례는 캡션으로 대신한다
  const WS_SEA = { grid: [7, 5], title: '', legend: false, regionValues: true, sea: [[6, 0], [6, 1], [6, 2], [6, 3], [6, 4]] };
  const WS_JAN = W(MAP_JAN, WS_SEA); const WS_AUG = W(MAP_AUG, WS_SEA); const WS_POP = W(MAP_POP, WS_SEA);
  // 그래프 자료(지어낸 값)
  const SEASON_T = [['봄', 13], ['여름', 25], ['가을', 15], ['겨울', 3]];            // 하늘고을 계절 평균 기온(°C)
  const RAIN = [['1월', 25], ['3월', 50], ['5월', 90], ['7월', 330], ['9월', 150], ['11월', 45]]; // 하늘고을 월별 강수량(mm)
  const TWO_T = [['눈뫼 1월', 1], ['햇볕 1월', 6], ['눈뫼 7월', 22], ['햇볕 7월', 26]];   // 눈뫼마을·햇볕마을 기온(°C)
  const POP_D = [['산마루군', 5], ['새벌시', 40], ['들빛시', 160], ['물결군', 15], ['햇볕시', 70], ['남바다군', 10]];
  const POP_YEAR = [['2000년', 420], ['2005년', 380], ['2010년', 330], ['2015년', 270], ['2020년', 210], ['2025년', 170]]; // 산골 은행마을 인구(명)
  const OLD = [['들빛시 도심', 14], ['물결군 바닷가', 29], ['산마루군 산골', 41]];     // 65세 이상 인구 비율(%)

  PaperLessons.registerUnit({
    id: 'g5-soc-1-02', schema: 'edu-unit.v1', catalogUnit: 'g5-사회-1학기-2',
    grade: 5, subject: '사회', unitTitle: '2. 우리나라 지리 탐구',
    flow: '1~3차시는 다솜도(지어낸 도)의 1월·8월 기온 지도로 계절별 날씨를 견주고, 계절에 따라 생활이 달라지는 모습을 사례로 잇고, 날씨와 기후를 가르며 기온·강수량·바람이라는 기후 요소를 만납니다. 4~6차시는 계절별 기온과 월별 강수량 막대그래프를 직접 그리고 읽고, 두 마을의 기온을 숫자로 견주어 비교 문장을 씁니다. 7~8차시는 폭염·집중호우·태풍·한파·대설의 피해와 대비 행동을 잇고, 내가·학교가·지역 기관이 하는 일과 믿을 만한 정보로 재해 대비 안내 카드를 만듭니다. 9~11차시는 인구 단계구분도로 인구 분포를 읽고 그 까닭을 일자리·땅 모양·교통에서 찾은 뒤, 도시로 이끄는 까닭과 촌락을 떠나는 까닭으로 인구 이동을 설명합니다. 12~14차시는 그림그래프·꺾은선그래프·65세 이상 비율 표를 읽으며 사실과 짐작을 가르고, 15~16차시에서 도시와 촌락의 인구 문제를 해결 방안과 짝짓고 근거를 든 제안으로 단원을 묶습니다. 모든 지도와 그래프의 수는 지어낸 값이며, 실제 통계는 확인된 출처가 있을 때만 쓰도록 합니다.',
    refs: {},
    lessons: [
      // ───────────────────────── 1차시 ─────────────────────────
      mk(1, {
        title: '다솜도 1월·8월 기온 지도로 계절 견주기',
        objective: '기온 단계구분도에서 겨울과 여름 기온이 지역마다 어떻게 다른지 읽고 계절별 날씨 특징을 말할 수 있다.',
        std: S1,
        ill: 'a child pointing at a colorful temperature map of a made-up province with snowy mountains in the north and a warm sea in the south',
        scene: '겨울과 여름, 어디가 다를까요?', more: [{ motif: 'mountain', x: 150, y: 214 }, { motif: 'snow', x: 150, y: 120 }, { motif: 'wave', x: 380, y: 232 }],
        intro: {
          teacher: '"한겨울 아침과 한여름 낮, 같은 나라인데 어느 쪽이 더 다를까요?" 짐작을 몇 가지 들은 뒤, 오늘은 다솜도(지어낸 도)의 기온 지도로 겨울과 여름을 견주어 본다고 알린다. 시연 단추로 1월 지도에서 가장 따뜻한 지역에 핀이 꽂히는 모습을 보이고, "색이 진할수록 기온이 높다"는 약속을 먼저 읽게 한다. 지도의 수는 모두 지어낸 값임을 말해 준다.',
          student: '색이 진한 곳과 옅은 곳은 무엇이 다를지 생각하며 다솜도 기온 지도를 봅시다.',
        },
        acts: [
          { title: '1월 지도 읽기', tool: 'map', options: MAP_JAN,
            task: '색이 진할수록 기온이 높아요. 핀을 지역 안에 꽂거나, 지도를 읽고 보기를 골라요.',
            teacher: '"진한 색은 더운 곳일까요, 추운 곳일까요?" 지도 범례를 먼저 짚어 읽게 한다. 지도의 위쪽이 북쪽이라는 것을 다시 떠올리게 하고, 위쪽 지역과 아래쪽 지역의 색을 견주게 한다. 3번에서 "산 가까이는 항상 춥다"고 일반화하는 학생에게는 이 지도(다솜도) 안에서 읽은 것만 말하게 한다.',
            items: [
              { prompt: '1월 평균 기온이 가장 높은 지역 안에 핀을 꽂아 보세요.', target: { most: true }, difficulty: 0.1 },
              { prompt: '1월 평균 기온이 가장 낮은 지역 안에 핀을 꽂아 보세요.', toolOptions: { regionValues: true }, target: { least: true }, difficulty: 0.1 },
              { prompt: '산마루군과 남바다군 가운데 1월에 더 추운 곳은 어디인가요?', toolOptions: { readOnly: true, regionValues: true, ask: { choices: ['산마루군', '남바다군'], why: [null, '남바다군은 7°C로 산마루군보다 따뜻해요.'] } }, target: { pick: 0 }, difficulty: 0.1,
                predict: { q: '북쪽 산지와 남쪽 바다 쪽 가운데 겨울에 더 추운 곳은?', options: ['북쪽 산지', '남쪽 바다 쪽'], answer: 0 },
                conclude: '다솜도에서는 겨울에 북쪽으로 갈수록 기온이 낮아요.' },
            ] },
          { title: '8월 지도 읽기', tool: 'map', options: MAP_AUG,
            task: '이번에는 8월 지도예요. 기온이 높은 곳과 낮은 곳을 찾고, 1월과 견주어 보아요.',
            teacher: '"1월 지도와 색이 칠해진 모습이 같을까요, 다를까요?" 두 지도를 번갈아 보여 주며 8월에는 모든 지역이 훨씬 진해졌다는 것을 확인시킨다. 4번은 22°C에서 1°C를 빼는 뺄셈이다. 덧셈으로 푼 학생에게 "차는 큰 수에서 작은 수를 빼요"를 떠올리게 한다.',
            items: [
              { prompt: '8월 평균 기온이 가장 높은 지역 안에 핀을 꽂아 보세요.', target: { most: true }, difficulty: 0.1 },
              { prompt: '8월 평균 기온이 가장 낮은 지역 안에 핀을 꽂아 보세요.', toolOptions: { regionValues: true }, target: { least: true }, difficulty: 0.1 },
              { prompt: '8월 평균 기온이 25°C보다 높은 지역은 몇 곳인가요?', toolOptions: { readOnly: true, regionValues: true, ask: { choices: ['1곳', '2곳', '3곳'], why: ['남바다군 말고 하나가 더 있어요.', null, '25°C인 지역은 25°C보다 높지 않아요.'] } }, target: { pick: 1 }, difficulty: 0.2 },
              { prompt: '산마루군의 1월 평균 기온은 1°C였어요. 8월은 1월보다 몇 °C 더 높은가요?', toolOptions: { readOnly: true, regionValues: true, ask: { choices: ['11°C', '21°C', '23°C'], why: ['8월 기온에서 1월 기온을 빼 보세요.', null, '더하지 않고 빼서 차를 구해요.'] } }, target: { pick: 1 }, difficulty: 0.3 },
            ] },
          { title: '계절 날씨 낱말 나누기', tool: 'mindmap',
            task: '날씨를 설명한 카드를 알맞은 계절 칸에 놓아요. 카드를 눌러 칸을 누르거나 끌어 놓아요.',
            teacher: '"지도에서 본 겨울과 여름 말고, 봄과 가을은 어떤 날씨였나요?" 계절마다 기온 말고도 비·눈·바람 같은 날씨 낱말이 다르다는 것을 짚는다. 2번에서 "장마"를 겨울 카드로 놓는 학생에게는 비가 오래 오는 철이 언제였는지 경험을 묻는다.',
            items: [
              { prompt: '날씨를 설명한 카드를 알맞은 계절 칸에 놓아 보세요.', toolOptions: { topic: '계절 날씨', slots: ['봄', '여름', '가을', '겨울'], cards: ['꽃이 피고 포근해요', '덥고 장마와 소나기가 와요', '하늘이 높고 선선해요', '춥고 눈이 내려요'] }, target: { sort: { 봄: ['꽃이 피고 포근해요'], 여름: ['덥고 장마와 소나기가 와요'], 가을: ['하늘이 높고 선선해요'], 겨울: ['춥고 눈이 내려요'] } }, difficulty: 0.1 },
              { prompt: '여름 날씨에 맞는 카드만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '여름 날씨', basket: '여름 날씨', cards: ['한낮에 무척 더워요', '장마철에 비가 오래 와요', '서리가 내려요', '눈이 쌓여요', '소나기가 갑자기 쏟아져요'] }, target: { pick: ['한낮에 무척 더워요', '장마철에 비가 오래 와요', '소나기가 갑자기 쏟아져요'] }, difficulty: 0.15 },
              { prompt: '지도에서 읽은 내용과 알맞은 말을 이어 보세요.', toolOptions: { mode: 'match', topic: '지도 읽기', slots: [{ id: 'm1', label: '산마루군의 겨울' }, { id: 'm2', label: '햇볕시의 여름' }], cards: ['1월 평균 기온이 1°C로 가장 낮아요', '8월 평균 기온이 27°C로 가장 높아요', '8월 평균 기온이 22°C로 가장 낮아요'] }, target: { match: { m1: '1월 평균 기온이 1°C로 가장 낮아요', m2: '8월 평균 기온이 27°C로 가장 높아요' } }, difficulty: 0.2 },
            ] },
        ],
        wrap: {
          teacher: '"겨울과 여름의 기온 차는 다솜도의 어느 쪽에서 더 컸나요?" 산마루군이 1°C에서 22°C로 가장 크게 달라진다는 것을 지도로 확인시킨다. 출구 3번에서 "지도에 없는 곳도 있다"고 답한 학생에게는 가장 낮은 값 22°C를 짚게 한다.',
          exits: [
            { type: 'tool', tool: 'map', options: MAP_JAN, prompt: '1월 기온 지도에서 새벌시가 있는 곳에 핀을 꽂으세요.', target: { region: '새벌시' }, difficulty: 0.15 },
            { type: 'choice', prompt: '다솜도에서 겨울에 가장 기온이 낮은 쪽은 어디인가요?', options: ['북쪽 산지 쪽', '남쪽 바다 쪽', '어디나 같아요'], answer: 0, difficulty: 0.1, explain: '1월 지도에서 위쪽 산마루군이 가장 옅고 기온이 낮았어요.' },
            { type: 'choice', prompt: '"8월에는 다솜도 모든 지역이 20°C를 넘어요." 지도로 확인되나요?', options: ['그래요, 가장 낮은 곳도 22°C예요', '아니요, 20°C보다 낮은 곳이 있어요'], answer: 0, difficulty: 0.2, explain: '8월 지도의 가장 낮은 값이 산마루군 22°C라서 모두 20°C를 넘어요.' },
            { type: 'mood', prompt: '오늘 지도 읽기는 어땠나요?' },
          ],
        },
        ws: {
          title: '겨울과 여름 기온 지도 읽기',
          items: [
            { type: 'figure', wide: true, prompt: '1월 지도에서 가장 진한 지역과 가장 옅은 지역을 찾아 쓰세요.', tool: 'map', options: WS_JAN, figures: [{ caption: '다솜도 1월 평균 기온(°C, 색이 진할수록 높음)' }], answer: '가장 진한 곳 남바다군(7°C), 가장 옅은 곳 산마루군(1°C)' },
            { type: 'table', prompt: '계절마다 날씨 특징을 한 가지씩 쓰세요.', columns: ['계절', '날씨 특징'], cells: [['봄', ''], ['여름', ''], ['가을', ''], ['겨울', '']], answer: '봄 포근하고 꽃이 핌, 여름 덥고 비가 많음, 가을 선선하고 맑음, 겨울 춥고 눈이 옴(예)' },
            { type: 'blank', prompt: '다솜도 지도를 보고 빈칸을 채우세요.', text: '1월에는 ___쪽 산지가 더 춥고, 8월에는 가장 더운 지역이 ___이에요.', answer: '북, 햇볕시' },
            { type: 'choice', prompt: '8월과 1월의 기온 차가 가장 큰 지역은 어디인가요?', options: ['산마루군(22°C와 1°C)', '남바다군(26°C와 7°C)'], answer: '산마루군(22°C와 1°C)' },
            { type: 'short', prompt: '내가 사는 곳에서 가장 추운 달과 가장 더운 달을 각각 생각해 한 문장으로 쓰세요.' },
          ],
          easy: { note: '색이 진할수록 기온이 높아요. 위쪽이 북쪽이에요.', items: [
            { type: 'figure', wide: true, prompt: '8월 지도에서 가장 진한 지역을 찾아 ○ 하세요.', tool: 'map', options: WS_AUG, figures: [{ caption: '다솜도 8월 평균 기온(°C)' }], answer: '햇볕시(27°C)' },
            { type: 'choice', prompt: '겨울에 더 추운 곳에 ○ 하세요.', options: ['북쪽 산마루군', '남쪽 남바다군'], answer: '북쪽 산마루군' },
            { type: 'blank', prompt: '알맞은 낱말을 쓰세요.', text: '여름은 ___고 비가 많이 와요.', answer: '덥' },
            { type: 'short', prompt: '지금 계절의 날씨를 한 가지 쓰세요.' },
          ] },
        },
        notes: '자주 보이는 어려움: ① 진한 색을 추운 곳으로 읽는다 → 범례를 먼저 읽는다. ② 기온 차를 더해서 구한다 → 큰 수에서 작은 수를 뺀다고 다시 짚는다. ③ 이 지도의 모습을 우리나라 전체로 일반화한다 → 다솜도는 지어낸 도이며 실제 자료는 4~6차시에서 자료 읽는 법으로 다룬다고 알려 준다.',
      }),
      // ───────────────────────── 2차시 ─────────────────────────
      mk(2, {
        title: '계절 따라 달라지는 생활 모습 잇기',
        objective: '계절별 기후 특징이 사람들의 옷·먹을거리·일에 어떤 영향을 주는지 사례로 설명할 수 있다.',
        std: S1,
        ill: 'four seasonal scenes in a row, a farmer planting seeds, children swimming, villagers harvesting rice, and a family making kimchi',
        scene: '계절마다 생활이 달라져요', more: [{ motif: 'flower', x: 90, y: 224 }, { motif: 'leaf', x: 210, y: 220 }, { motif: 'snow', x: 380, y: 130 }, { motif: 'house', x: 330, y: 222 }],
        intro: {
          teacher: '"지금 입은 옷과 어제 먹은 간식은 오늘 날씨와 관계가 있을까요?" 학생들이 계절 때문에 바꾸는 것(옷, 먹을거리, 놀이)을 하나씩 말해 보게 한다. 시연 단추로 여름 칸에 "부채와 시원한 음식" 카드가 놓이는 모습을 보인다. 오늘은 기후가 사람들의 생활을 바꾼다는 것을 사례로 찾는다고 알린다.',
          student: '계절이 바뀌면 내 생활에서 달라지는 것을 하나 떠올려 봅시다.',
        },
        acts: [
          { title: '계절과 생활 짝짓기', tool: 'mindmap',
            task: '왼쪽 계절에 어울리는 생활 모습 카드를 한 장씩 이어요.',
            teacher: '"왜 겨울에는 김장을 하고 여름에는 하지 않을까요?" 날씨 때문에 음식을 보관하는 방법이 달라진다는 이야기를 끌어낸다. 3번에서 가을과 겨울을 헷갈리는 학생에게는 곡식이 익는 철이 언제인지 묻는다.',
            items: [
              { prompt: '계절과 어울리는 농사일을 이어 보세요.', toolOptions: { mode: 'match', topic: '계절과 농사', slots: [{ id: 'm1', label: '봄' }, { id: 'm2', label: '가을' }], cards: ['씨앗을 뿌리고 모종을 심어요', '곡식이 익어 거두어요', '꽁꽁 언 논이 쉬어요'] }, target: { match: { m1: '씨앗을 뿌리고 모종을 심어요', m2: '곡식이 익어 거두어요' } }, difficulty: 0.1 },
              { prompt: '계절과 어울리는 옷차림을 이어 보세요.', toolOptions: { mode: 'match', topic: '계절과 옷', slots: [{ id: 'm1', label: '여름' }, { id: 'm2', label: '겨울' }], cards: ['얇고 바람이 잘 통하는 옷', '두꺼운 외투와 목도리', '가벼운 겉옷'] }, target: { match: { m1: '얇고 바람이 잘 통하는 옷', m2: '두꺼운 외투와 목도리' } }, difficulty: 0.1 },
              { prompt: '계절과 어울리는 먹을거리 준비를 이어 보세요.', toolOptions: { mode: 'match', topic: '계절과 음식', slots: [{ id: 'm1', label: '여름' }, { id: 'm2', label: '겨울' }], cards: ['시원한 냉국과 수박', '김장을 해서 오래 두고 먹어요', '새싹 채소 무침'] }, target: { match: { m1: '시원한 냉국과 수박', m2: '김장을 해서 오래 두고 먹어요' } }, difficulty: 0.15 },
            ] },
          { title: '날씨 때문에 바뀌는 일 나누기', tool: 'mindmap',
            task: '카드를 읽고 날씨가 영향을 준 일인지, 날씨와 관계없는 일인지 나누어요.',
            teacher: '"날씨 때문에 달라진 일일까요, 아닐까요?" 학생이 근거를 한 문장으로 말하게 한다. "생일에 케이크를 먹어요"처럼 날씨와 무관한 카드를 날씨 때문이라고 고르는 학생에게 날씨가 달라지면 그 일도 달라지는지 물어 본다.',
            items: [
              { prompt: '카드를 날씨 때문에 달라지는 일과 날씨와 관계없는 일로 나누어 보세요.', toolOptions: { topic: '생활과 날씨', slots: ['날씨 때문에 달라져요', '날씨와 관계없어요'], cards: ['장마철에 우산을 챙겨요', '한파에는 수도관이 얼지 않게 감싸요', '생일에 친구에게 선물을 줘요', '주말에 책을 빌려요'] }, target: { sort: { '날씨 때문에 달라져요': ['장마철에 우산을 챙겨요', '한파에는 수도관이 얼지 않게 감싸요'], '날씨와 관계없어요': ['생일에 친구에게 선물을 줘요', '주말에 책을 빌려요'] } }, difficulty: 0.15 },
              { prompt: '더운 날씨 때문에 하는 일만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '더위와 생활', basket: '더위 때문에', cards: ['한낮에는 실내에서 쉬어요', '물을 자주 마셔요', '눈사람을 만들어요', '난로를 켜요', '그늘에서 놀아요'] }, target: { pick: ['한낮에는 실내에서 쉬어요', '물을 자주 마셔요', '그늘에서 놀아요'] }, difficulty: 0.2 },
              { prompt: '추운 날씨 때문에 하는 일만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '추위와 생활', basket: '추위 때문에', cards: ['장갑과 목도리를 해요', '선풍기를 켜요', '따뜻한 국을 먹어요', '수영장에 가요', '난방을 해요'] }, target: { pick: ['장갑과 목도리를 해요', '따뜻한 국을 먹어요', '난방을 해요'] }, difficulty: 0.2 },
            ] },
          { title: '한 해 모습 차례로 놓기', tool: 'mindmap',
            task: '봄부터 겨울까지 마을 풍경이 바뀌는 차례대로 카드를 놓아요.',
            teacher: '"한 해 동안 학교 화단은 어떻게 달라졌나요?" 새싹, 푸른 잎, 단풍, 눈이라는 모습의 차례가 계절의 순서와 같다는 것을 짚는다. 순서가 바뀐 학생에게 "눈이 오기 전에 잎이 먼저 떨어져요"처럼 앞뒤 근거를 묻는다.',
            items: [
              { prompt: '학교 화단이 바뀌는 차례대로 카드를 놓아 보세요.', toolOptions: { mode: 'order', topic: '화단의 한 해', slots: ['첫째', '둘째', '셋째', '넷째'], cards: ['새싹이 돋아요', '잎이 푸르고 무성해요', '단풍이 들어요', '눈이 쌓여요'], shuffle: true }, target: { order: ['새싹이 돋아요', '잎이 푸르고 무성해요', '단풍이 들어요', '눈이 쌓여요'] }, difficulty: 0.15 },
              { prompt: '벼농사 일이 이어지는 차례대로 카드를 놓아 보세요.', toolOptions: { mode: 'order', topic: '벼농사', slots: ['첫째', '둘째', '셋째', '넷째'], cards: ['모내기를 해요', '벼가 푸르게 자라요', '벼가 익어요', '벼를 베어요'] }, target: { order: ['모내기를 해요', '벼가 푸르게 자라요', '벼가 익어요', '벼를 베어요'] }, difficulty: 0.2 },
              { prompt: '더위가 심해지는 순서대로 카드를 놓아 보세요.', toolOptions: { mode: 'order', topic: '더위의 정도', slots: ['첫째', '둘째', '셋째'], cards: ['봄 한낮, 포근해요', '초여름, 덥기 시작해요', '한여름, 한낮에 무척 더워요'] }, target: { order: ['봄 한낮, 포근해요', '초여름, 덥기 시작해요', '한여름, 한낮에 무척 더워요'] }, difficulty: 0.25 },
            ] },
        ],
        wrap: {
          teacher: '"기후가 달라지면 우리 생활의 무엇이 달라질까요?" 옷·음식·일의 세 가지를 한 번씩 말하게 한다. 출구 3번을 틀린 학생에게는 봄에 씨앗을 뿌리는 까닭(땅이 녹고 날씨가 풀린다)을 말로 설명하게 한다.',
          exits: [
            { type: 'choice', prompt: '겨울을 나려고 미리 준비하는 음식은 무엇인가요?', options: ['김장', '냉면', '수박 화채'], answer: 0, difficulty: 0.1, explain: '추워지기 전에 김장을 해서 겨우내 먹어요.' },
            { type: 'choice', prompt: '장마철에 학교에 갈 때 꼭 챙기면 좋은 것은?', options: ['우산', '장갑', '목도리'], answer: 0, difficulty: 0.1, explain: '여름에는 비가 많이 와서 우산이 필요해요.' },
            { type: 'choice', prompt: '봄에 농부가 씨앗을 뿌리는 까닭으로 알맞은 것은?', options: ['땅이 녹고 날씨가 풀려서', '눈이 많이 와서', '낙엽이 떨어져서'], answer: 0, difficulty: 0.2, explain: '봄에는 날씨가 풀려 씨앗이 싹트기 알맞아요.' },
            { type: 'mood', prompt: '오늘 공부는 어땠나요?' },
          ],
        },
        ws: {
          title: '계절과 생활 이어 보기',
          items: [
            { type: 'table', prompt: '계절에 어울리는 옷과 먹을거리를 하나씩 쓰세요.', columns: ['계절', '옷', '먹을거리'], cells: [['여름', '', ''], ['겨울', '', '']], answer: '여름: 얇은 옷·냉국, 겨울: 두꺼운 외투·따뜻한 국(예)' },
            { type: 'choice', prompt: '가을에 농부가 하는 일에 ○ 하세요.', options: ['곡식을 거두어요', '씨앗을 뿌려요', '논이 얼어 쉬어요'], answer: '곡식을 거두어요' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '날씨가 추워지기 전에 ___을 해서 겨우내 먹어요.', answer: '김장' },
            { type: 'choice', prompt: '날씨와 관계없이 하는 일에 ○ 하세요.', options: ['친구 생일 축하해 주기', '한파에 두꺼운 옷 입기', '장마철에 우산 쓰기'], answer: '친구 생일 축하해 주기' },
            { type: 'short', prompt: '우리 가족이 계절마다 바꾸는 것 한 가지를 쓰세요.' },
          ],
          easy: { note: '여름은 덥고 비가 많고, 겨울은 추워요.', items: [
            { type: 'choice', prompt: '여름에 입는 옷에 ○ 하세요.', options: ['얇은 옷', '두꺼운 외투'], answer: '얇은 옷' },
            { type: 'choice', prompt: '겨울에 하는 일에 ○ 하세요.', options: ['난방', '선풍기'], answer: '난방' },
            { type: 'blank', prompt: '알맞은 말을 쓰세요.', text: '봄에는 농부가 ___을 뿌려요.', answer: '씨앗' },
            { type: 'short', prompt: '내가 좋아하는 계절을 쓰고 까닭을 말해 보세요.' },
          ] },
        },
        notes: '자주 보이는 어려움: ① 기후와 날씨를 구분하지 않고 말한다(2차시는 계절에 따른 생활이므로 우선 허용하고 3차시에서 구분한다). ② 날씨와 무관한 일까지 날씨 때문이라고 묶는다 → 날씨가 달라지면 그 일도 달라지는지 묻는다. ③ 순서 문항을 한 해의 순서가 아니라 좋아하는 순서로 놓는다 → 화단 사진 석 장을 떠올리게 한다.',
      }),
      // ───────────────────────── 3차시 ─────────────────────────
      mk(3, {
        title: '날씨와 기후 가르고 기후 요소 찾기',
        objective: '날씨와 기후의 차이를 말하고 기온·강수량·바람이 기후를 이루는 요소임을 설명할 수 있다.',
        std: S1,
        ill: 'a weather station on a hill with a thermometer, a rain gauge and a wind vane, and a child writing numbers in a notebook',
        scene: '날씨와 기후는 어떻게 다를까요?', more: [{ motif: 'cloud', x: 330, y: 100 }, { motif: 'tree', x: 130, y: 214 }, { motif: 'bird', x: 300, y: 80 }],
        intro: {
          teacher: '"오늘 아침 하늘이 맑았나요? 그리고 우리나라 여름은 어떤가요?" 오늘 아침의 모습은 그날의 날씨이고, 여름이 되면 해마다 덥고 비가 많다는 것은 기후라고 두 질문을 나란히 놓고 보여 준다. 시연 단추로 "내일은 비가 올 거래요"가 날씨 칸에 놓이는 모습을 보인다. 짧은 시간의 대기 상태와 오랜 기간의 평균적인 모습을 구분하는 것이 오늘의 목표다.',
          student: '오늘 아침 날씨와 우리나라 여름의 기후는 어떻게 다른지 생각해 봅시다.',
        },
        acts: [
          { title: '날씨 칸과 기후 칸으로 나누기', tool: 'mindmap',
            task: '짧은 때의 하늘 모습은 날씨, 여러 해 되풀이되는 모습은 기후예요. 카드를 알맞은 칸에 놓아요.',
            teacher: '"어제 소나기가 왔다는 말은 날씨일까요, 기후일까요?" 하루나 며칠 사이의 일은 날씨, 해마다 되풀이되는 큰 경향은 기후라는 기준을 칠판에 적는다. "겨울에 눈이 왔어요"를 기후로 놓는 학생에게는 올해 한 번의 일인지, 해마다 되풀이되는 일인지를 묻는다.',
            items: [
              { prompt: '카드를 날씨 칸과 기후 칸으로 나누어 보세요.', toolOptions: { topic: '날씨와 기후', slots: ['날씨', '기후'], cards: ['오늘 아침에는 안개가 꼈어요', '내일은 비가 올 거래요', '우리나라는 여름에 비가 많이 와요', '겨울에는 해마다 춥고 건조해요'] }, target: { sort: { 날씨: ['오늘 아침에는 안개가 꼈어요', '내일은 비가 올 거래요'], 기후: ['우리나라는 여름에 비가 많이 와요', '겨울에는 해마다 춥고 건조해요'] } }, difficulty: 0.15 },
              { prompt: '기후를 말한 문장만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '기후를 말한 문장', basket: '기후', cards: ['어제 오후에 소나기가 왔어요', '여름철에는 해마다 장마가 와요', '오늘은 바람이 세게 불어요', '봄에는 날씨가 포근해져요'] }, target: { pick: ['여름철에는 해마다 장마가 와요', '봄에는 날씨가 포근해져요'] }, difficulty: 0.2 },
              { prompt: '카드 다섯 장을 날씨 칸과 기후 칸으로 나누어 보세요.', toolOptions: { topic: '날씨와 기후', slots: ['날씨', '기후'], cards: ['지금 창밖에 눈이 와요', '가을에는 맑은 날이 많아요', '오늘 낮 기온은 28°C예요', '해마다 7월에 비가 많이 와요', '이번 주말은 흐리대요'] }, target: { sort: { 날씨: ['지금 창밖에 눈이 와요', '오늘 낮 기온은 28°C예요', '이번 주말은 흐리대요'], 기후: ['가을에는 맑은 날이 많아요', '해마다 7월에 비가 많이 와요'] } }, difficulty: 0.25,
                conclude: '날씨는 그때그때의 하늘 모습이고, 기후는 여러 해 되풀이되는 그 지역의 모습이에요.' },
            ] },
          { title: '기온·강수량·바람 알아보기', tool: 'mindmap',
            task: '기후를 이루는 세 가지 요소를 알아봐요. 카드를 요소 칸으로 나누거나, 요소와 재는 도구를 이어요.',
            teacher: '"비가 얼마나 왔는지는 무엇으로 알 수 있을까요?" 기온은 온도계, 강수량은 우량계, 바람의 세기는 풍속계로 잰다는 것을 도구 이름과 함께 짚는다. 1번에서 "눈의 양"을 바람 칸에 놓는 학생에게는 눈도 하늘에서 내린 물이라 강수량에 든다는 것을 알려 준다.',
            items: [
              { prompt: '카드를 기온·강수량·바람 칸으로 나누어 보세요.', toolOptions: { topic: '기후 요소', slots: ['기온', '강수량', '바람'], cards: ['한낮에 30°C까지 올랐어요', '하루에 100mm의 비가 내렸어요', '초속 12m로 강하게 불었어요', '밤에는 5°C까지 내려갔어요'] }, target: { sort: { 기온: ['한낮에 30°C까지 올랐어요', '밤에는 5°C까지 내려갔어요'], 강수량: ['하루에 100mm의 비가 내렸어요'], 바람: ['초속 12m로 강하게 불었어요'] } }, difficulty: 0.2 },
              { prompt: '기후 요소와 그것을 재는 도구를 이어 보세요.', toolOptions: { mode: 'match', topic: '재는 도구', slots: [{ id: 'm1', label: '기온' }, { id: 'm2', label: '강수량' }, { id: 'm3', label: '바람의 세기' }], cards: ['온도계', '우량계', '풍속계'] }, target: { match: { m1: '온도계', m2: '우량계', m3: '풍속계' } }, difficulty: 0.15 },
              { prompt: '기후를 알아보는 데 알맞은 자료만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '기후 자료', basket: '기후 자료', cards: ['30년 동안의 7월 평균 기온', '오늘 오후 3시의 기온', '해마다 장마철 강수량 기록', '방금 불어온 바람의 세기'] }, target: { pick: ['30년 동안의 7월 평균 기온', '해마다 장마철 강수량 기록'] }, difficulty: 0.3,
                conclude: '기후는 오랫동안 모은 자료의 평균 모습으로 알 수 있어요.' },
            ] },
        ],
        wrap: {
          teacher: '"내일 소풍 날씨가 걱정된다는 말과 우리 지역 여름 기후는 같은 말일까요?" 두 말이 가리키는 기간의 길이가 다르다는 것을 다시 짚는다. 출구 3번을 "하루"로 답한 학생에게는 기후가 하루의 날씨와 어떻게 다른지 되묻는다.',
          exits: [
            { type: 'choice', prompt: '"오늘은 구름이 많고 바람이 불어요."는 날씨일까요, 기후일까요?', options: ['날씨', '기후'], answer: 0, difficulty: 0.1, explain: '오늘 하루의 하늘 모습이라 날씨예요.' },
            { type: 'choice', prompt: '내린 비의 양을 재는 도구는 무엇인가요?', options: ['우량계', '온도계', '풍속계'], answer: 0, difficulty: 0.1, explain: '우량계로 강수량을 재요. 온도계는 기온, 풍속계는 바람이에요.' },
            { type: 'choice', prompt: '어느 지역의 기후를 알아보려면 자료를 얼마 동안 모아야 알맞은가요?', options: ['하루', '한 시간', '여러 해'], answer: 2, difficulty: 0.2, explain: '여러 해 동안의 평균을 보아야 그 지역의 기후를 알 수 있어요.' },
            { type: 'mood', prompt: '오늘 낱말 공부는 어땠나요?' },
          ],
        },
        ws: {
          title: '날씨와 기후, 기후 요소',
          items: [
            { type: 'table', prompt: '기후 요소와 재는 도구를 이어서 쓰세요.', columns: ['기후 요소', '재는 도구'], cells: [['기온', ''], ['강수량', ''], ['바람의 세기', '']], answer: '기온 온도계, 강수량 우량계, 바람의 세기 풍속계' },
            { type: 'choice', prompt: '기후를 말한 것에 ○ 하세요.', options: ['어제 소나기가 왔어요', '우리나라는 여름에 덥고 비가 많아요', '지금 바람이 불어요'], answer: '우리나라는 여름에 덥고 비가 많아요' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '그때그때의 하늘 모습은 ___이고, 여러 해 되풀이되는 모습은 ___예요.', answer: '날씨, 기후' },
            { type: 'choice', prompt: '"하루에 80mm의 비가 내렸어요."에 해당하는 기후 요소는?', options: ['기온', '강수량', '바람'], answer: '강수량' },
            { type: 'short', prompt: '오늘의 날씨를 기온·강수·바람 가운데 한 가지로 표현해 쓰세요.' },
          ],
          easy: { note: '날씨는 짧은 때의 모습, 기후는 오랫동안 되풀이되는 모습이에요.', items: [
            { type: 'choice', prompt: '날씨에 ○ 하세요.', options: ['오늘 아침 안개', '해마다 여름의 장마'], answer: '오늘 아침 안개' },
            { type: 'choice', prompt: '온도계로 재는 것에 ○ 하세요.', options: ['기온', '바람'], answer: '기온' },
            { type: 'blank', prompt: '알맞은 말을 쓰세요.', text: '비의 양은 ___으로 재요.', answer: '우량계' },
            { type: 'short', prompt: '오늘 날씨를 한 문장으로 쓰세요.' },
          ] },
        },
        notes: '자주 보이는 어려움: ① 날씨와 기후를 같은 말로 쓴다 → 기간의 길이(하루·며칠 / 여러 해)로 구분하게 한다. ② 눈·우박을 강수량이 아닌 별도 요소로 둔다 → 하늘에서 내려온 물이 모두 강수라고 알려 준다. ③ 기후 자료를 하루 값 하나로 만든다 → 여러 해 평균을 쓴다고 말해 준다.',
      }),
      // ───────────────────────── 4차시 ─────────────────────────
      mk(4, {
        title: '하늘고을 계절별 기온 막대그래프 그리고 읽기',
        objective: '계절별 평균 기온 표를 막대그래프로 나타내고, 그래프에서 알 수 있는 사실을 문장으로 말할 수 있다.',
        std: S1,
        ill: 'a child drawing a bar chart of seasonal temperatures on a big sheet with four colorful bars labeled spring, summer, autumn and winter',
        scene: '하늘고을 기온 그래프', more: [{ motif: 'flower', x: 100, y: 224 }, { motif: 'leaf', x: 380, y: 224 }, { motif: 'snow', x: 300, y: 100 }],
        intro: {
          teacher: '"자료가 표로만 있을 때와 그래프로 그렸을 때, 어느 쪽이 한눈에 비교하기 쉬울까요?" 하늘고을(지어낸 고을)의 계절별 평균 기온 표를 보여 주고 막대 높이가 클수록 기온이 높다고 알려 준다. 시연 단추로 막대가 하나씩 올라가는 모습을 보인다. 표의 수는 지어낸 것이며 실제 우리 지역 자료는 탐구 단계에서 찾는다고 말한다.',
          student: '표의 수를 막대의 높이로 바꾸면 무엇이 쉽게 보일지 생각해 봅시다.',
        },
        acts: [
          { title: '표를 막대그래프로 그리기', tool: 'chart',
            task: '막대에 Tab으로 가서 ↑·↓ 키를 누르거나 끌어서 높이를 맞춰요. 눈금 한 칸이 얼마인지 먼저 읽어요.',
            teacher: '"눈금 한 칸은 몇 °C일까요?" 눈금 한 칸이 5°C라는 것을 먼저 읽게 한다. 막대 끝이 눈금 사이에 걸치면 가까운 눈금이 아니라 눈금 사이 값으로 정한다고 알려 준다. 겨울 3°C 막대를 5°C로 올리는 학생에게 눈금선과 표의 수를 번갈아 짚게 한다.',
            items: [
              { prompt: '계절별 평균 기온 표를 보고 막대그래프를 완성해 보세요.', toolOptions: { type: 'bar', title: '하늘고을 계절별 평균 기온', data: SEASON_T, unit: '°C', scale: 5, step: 1, xLabel: '계절', yLabel: '기온', given: [0] }, target: { build: true }, difficulty: 0.2,
                levels: { easy: { toolOptions: { given: [0, 1, 2] } }, challenge: { toolOptions: { given: [] } } } },
              { prompt: '여름과 겨울 두 막대만 그려 보세요. 봄과 가을은 이미 그려 있어요.', toolOptions: { type: 'bar', title: '하늘고을 계절별 평균 기온', data: SEASON_T, unit: '°C', scale: 5, step: 1, xLabel: '계절', yLabel: '기온', given: [0, 2] }, target: { build: true }, difficulty: 0.2 },
              { prompt: '가을 막대를 포함해 세 막대를 그려 보세요. 겨울만 그려 있어요.', toolOptions: { type: 'bar', title: '하늘고을 계절별 평균 기온', data: SEASON_T, unit: '°C', scale: 5, step: 1, xLabel: '계절', yLabel: '기온', given: [3] }, target: { build: [0, 1, 2] }, difficulty: 0.25 },
            ] },
          { title: '막대그래프 읽기', tool: 'chart',
            task: '그래프를 보고 질문에 답해요. 막대 끝이 닿는 눈금을 읽어요.',
            teacher: '"두 막대의 차를 구하려면 무엇을 해야 할까요?" 큰 값에서 작은 값을 빼는 계산을 눈금 읽기와 함께 한다. 2번에서 가장 긴 막대를 고르려는 학생에게 "두 번째로 긴 막대는?"이라고 다시 묻는다.',
            items: [
              { prompt: '기온이 가장 높은 계절을 골라 보세요.', toolOptions: { type: 'bar', mode: 'read', title: '하늘고을 계절별 평균 기온', data: SEASON_T, unit: '°C', scale: 5, xLabel: '계절', choices: ['봄', '여름', '겨울'], why: ['여름 막대가 더 길어요.', null, '겨울은 가장 낮은 막대예요.'] }, target: { pick: 1 }, difficulty: 0.1 },
              { prompt: '기온이 두 번째로 높은 계절을 골라 보세요.', toolOptions: { type: 'bar', mode: 'read', title: '하늘고을 계절별 평균 기온', data: SEASON_T, unit: '°C', scale: 5, xLabel: '계절', choices: ['봄', '가을', '겨울'], why: ['가을 막대가 봄보다 더 길어요.', null, '겨울은 가장 낮아요.'], explain: '가장 긴 막대는 여름(25°C), 두 번째는 가을(15°C)이에요.' }, target: { pick: 1 }, difficulty: 0.15 },
              { prompt: '여름과 겨울의 평균 기온은 몇 °C 차이가 나는지 쓰세요.', toolOptions: { type: 'bar', mode: 'read', title: '하늘고을 계절별 평균 기온', data: SEASON_T, unit: '°C', scale: 5, xLabel: '계절', question: '여름은 겨울보다 몇 °C 더 높은가요?' }, target: { value: 22 }, difficulty: 0.25 },
            ] },
          { title: '그래프에서 알 수 있는 말 고르기', tool: 'mindmap',
            task: '그래프 값으로 확인할 수 있는 문장과 생각을 나누어요.',
            teacher: '"그래프에 겨울이 가장 좋다는 말이 나와 있나요?" 그래프로 확인할 수 있는 것은 높이(값)와 비교이고, 좋고 싫음은 사람마다 다른 생각이라는 것을 짚는다. 2번은 문장마다 그래프의 어느 값을 근거로 삼았는지 말로 답하게 한다.',
            items: [
              { prompt: '문장을 그래프로 알 수 있는 사실과 생각으로 나누어 보세요.', toolOptions: { topic: '기온 그래프', slots: ['그래프로 알 수 있는 사실', '사람마다 다른 생각'], cards: ['여름 평균 기온은 25°C예요', '겨울은 3°C로 가장 낮아요', '여름이 가장 즐거운 계절이에요', '겨울은 너무 싫어요'] }, target: { sort: { '그래프로 알 수 있는 사실': ['여름 평균 기온은 25°C예요', '겨울은 3°C로 가장 낮아요'], '사람마다 다른 생각': ['여름이 가장 즐거운 계절이에요', '겨울은 너무 싫어요'] } }, difficulty: 0.2 },
              { prompt: '그래프로 확인할 수 있는 문장과 근거를 이어 보세요.', toolOptions: { mode: 'match', topic: '문장과 근거', slots: [{ id: 'm1', label: '가을은 봄보다 따뜻해요' }, { id: 'm2', label: '여름은 겨울보다 훨씬 더워요' }], cards: ['가을 15°C, 봄 13°C', '여름 25°C, 겨울 3°C', '봄에는 꽃이 피어요'] }, target: { match: { m1: '가을 15°C, 봄 13°C', m2: '여름 25°C, 겨울 3°C' } }, difficulty: 0.2 },
              { prompt: '그래프로 확인할 수 있는 문장만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '확인할 수 있는 문장', basket: '확인할 수 있어요', cards: ['봄과 가을 기온 차는 2°C예요', '여름에는 모두 바다에 가요', '겨울 평균 기온이 가장 낮아요', '가을이 가장 아름다워요'] }, target: { pick: ['봄과 가을 기온 차는 2°C예요', '겨울 평균 기온이 가장 낮아요'] }, difficulty: 0.25 },
            ] },
        ],
        wrap: {
          teacher: '"그래프에서 알 수 있는 것과 알 수 없는 것을 어떻게 구분했나요?" 막대 높이로 확인할 수 있는 것은 사실, 좋고 싫음은 생각이라는 기준을 다시 말하게 한다. 출구 2번을 틀린 학생에게는 눈금 한 칸의 크기를 먼저 읽게 한다.',
          exits: [
            { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '다른 고을 계절별 평균 기온', data: [['봄', 11], ['여름', 26], ['가을', 14], ['겨울', 2]], unit: '°C', scale: 2, xLabel: '계절', choices: ['봄', '여름', '겨울'], why: ['봄 막대보다 긴 막대가 있어요.', null, '겨울은 가장 짧은 막대예요.'] }, prompt: '다른 고을의 그래프에서 기온이 가장 높은 계절을 고르세요.', target: { pick: 1 }, difficulty: 0.15 },
            { type: 'choice', prompt: '막대그래프에서 막대가 길수록 무엇이 크다는 뜻인가요?', options: ['나타내는 값', '글씨 크기', '막대의 색'], answer: 0, difficulty: 0.1, explain: '막대의 길이는 그 항목의 값(여기서는 기온)을 나타내요.' },
            { type: 'choice', prompt: '그래프로 알 수 있는 사실은 어느 것인가요?', options: ['겨울 평균 기온이 가장 낮아요', '겨울이 가장 지루해요'], answer: 0, difficulty: 0.15, explain: '겨울의 막대 높이로 가장 낮다는 것을 확인할 수 있어요.' },
            { type: 'mood', prompt: '오늘 그래프 공부는 어땠나요?' },
          ],
        },
        ws: {
          title: '계절별 기온 자료 읽기',
          items: [
            { type: 'table', prompt: '하늘고을의 계절별 평균 기온을 표에 쓰세요.', columns: ['계절', '평균 기온(°C)'], cells: [['봄', '13'], ['여름', ''], ['가을', ''], ['겨울', '']], answer: '여름 25, 가을 15, 겨울 3' },
            { type: 'blank', prompt: '표를 보고 빈칸에 알맞은 말을 쓰세요.', text: '기온이 가장 높은 계절은 ___이고, 가장 낮은 계절은 ___이에요.', answer: '여름, 겨울' },
            { type: 'blank', prompt: '여름과 겨울의 기온 차를 구하세요.', text: '25 − 3 = ___ (°C)', answer: '22' },
            { type: 'choice', prompt: '자료로 알 수 있는 사실에 ○ 하세요.', options: ['가을 평균 기온은 15°C예요', '가을이 제일 멋져요', '겨울은 모두 싫어해요'], answer: '가을 평균 기온은 15°C예요' },
            { type: 'short', prompt: '이 자료로 하늘고을의 기후를 한 문장으로 소개해 보세요.' },
          ],
          easy: { note: '막대가 길수록 기온이 높아요.', items: [
            { type: 'table', prompt: '표를 완성하세요.', columns: ['계절', '평균 기온(°C)'], cells: [['봄', '13'], ['여름', ''], ['가을', '15'], ['겨울', '']], answer: '여름 25, 겨울 3' },
            { type: 'choice', prompt: '더 따뜻한 계절에 ○ 하세요.', options: ['여름', '겨울'], answer: '여름' },
            { type: 'blank', prompt: '알맞은 말을 쓰세요.', text: '평균 기온이 가장 낮은 계절은 ___이에요.', answer: '겨울' },
            { type: 'short', prompt: '그래프를 보고 알게 된 것 한 가지를 쓰세요.' },
          ] },
        },
        notes: '자주 보이는 어려움: ① 눈금 한 칸을 1°C로 읽는다 → 눈금선 옆 숫자를 먼저 읽게 한다. ② 표에 있는 값은 쓰는데 그래프의 막대 높이에 옮기지 못한다 → 표의 한 칸씩 손가락으로 짚으며 막대를 올린다. ③ 그래프로 알 수 없는 생각을 사실로 고른다 → 막대 어디에 그 말이 보이는지 묻는다.',
      }),
      // ───────────────────────── 5차시 ─────────────────────────
      mk(5, {
        title: '하늘고을 월별 강수량 그래프로 장마철 찾기',
        objective: '월별 강수량 막대그래프에서 비가 많이 오는 때와 적게 오는 때를 찾아 우리나라 여름 비의 특징을 설명할 수 있다.',
        std: S1,
        ill: 'a tall blue bar chart of monthly rainfall with a very tall bar in July under dark rain clouds and a child holding an umbrella',
        scene: '비는 언제 가장 많이 올까요?', more: [{ motif: 'cloud', x: 330, y: 90 }, { motif: 'cloud', x: 240, y: 70, color: 'sky' }, { motif: 'house', x: 150, y: 222 }],
        intro: {
          teacher: '"장마가 왔다는 말을 들어 본 적이 있나요? 장마철에는 비가 어떻게 오나요?" 장마철에 비가 오래 이어진다는 경험을 모은 뒤, 그 경험이 자료로도 보이는지 월별 강수량 그래프로 확인한다고 알린다. 시연 단추로 7월 막대가 가장 길게 올라가는 모습을 보인다. 강수량은 mm로 나타내며 1mm는 바닥에 1mm 높이로 고이는 물의 양이라고 간단히 알려 준다.',
          student: '비가 가장 많이 내리는 달은 언제일지 먼저 짐작해 보고 그래프로 확인해 봅시다.',
        },
        acts: [
          { title: '강수량 막대그래프 읽기', tool: 'chart',
            task: '눈금 한 칸은 50mm예요. 막대 끝이 닿는 눈금을 읽고 질문에 답해요.',
            teacher: '"7월 막대는 눈금 몇 번째에 닿았나요?" 눈금 한 칸이 50mm임을 먼저 읽고 6칸 남짓이라는 것을 확인한다. 3번에서 90mm를 100mm 이상으로 읽은 학생에게 눈금선 100과 막대 끝의 위치를 견주게 한다.',
            items: [
              { prompt: '강수량이 가장 많은 달을 골라 보세요.', toolOptions: { type: 'bar', mode: 'read', title: '하늘고을 월별 강수량', data: RAIN, unit: 'mm', scale: 50, xLabel: '달', choices: ['3월', '7월', '9월'], why: ['3월 막대는 짧아요.', null, '9월 막대보다 더 긴 막대가 있어요.'] }, target: { pick: 1 }, difficulty: 0.1 },
              { prompt: '7월 강수량은 몇 mm인지 쓰세요.', toolOptions: { type: 'bar', mode: 'read', title: '하늘고을 월별 강수량', data: RAIN, unit: 'mm', scale: 50, xLabel: '달', question: '7월 강수량은 몇 mm인가요?' }, target: { value: 330 }, difficulty: 0.2 },
              { prompt: '강수량이 100mm보다 적은 달은 모두 몇 달인가요?', toolOptions: { type: 'bar', mode: 'read', title: '하늘고을 월별 강수량', data: RAIN, unit: 'mm', scale: 50, xLabel: '달', choices: ['3달', '4달', '5달'], why: ['5월과 11월도 100mm보다 적어요.', null, '9월은 150mm라 100mm보다 많아요.'] }, target: { pick: 1 }, difficulty: 0.3 },
            ] },
          { title: '표를 보고 막대 이어 그리기', tool: 'chart',
            task: '표의 수대로 아직 그리지 않은 막대를 올려요. 한 번 누르면 50mm씩 변해요.',
            teacher: '"빈 막대는 표의 어느 칸일까요?" 표의 달 이름과 막대 아래 글자를 맞춰 보게 한다. 눈금 한 칸이 50mm라서 25mm나 45mm는 눈금 사이에 걸친다고 알려 준다. 값이 큰 7월을 먼저 그리고 작은 달을 나중에 그리는 학생은 괜찮다고 말해 준다.',
            items: [
              { prompt: '표를 보고 9월과 11월 막대를 그려 보세요. 나머지는 그려 있어요.', toolOptions: { type: 'bar', title: '하늘고을 월별 강수량', data: RAIN, unit: 'mm', scale: 50, step: 5, xLabel: '달', yLabel: '강수량', given: [0, 1, 2, 3] }, target: { build: true }, difficulty: 0.25 },
              { prompt: '표를 보고 1월·3월·5월 막대를 그려 보세요.', toolOptions: { type: 'bar', title: '하늘고을 월별 강수량', data: RAIN, unit: 'mm', scale: 50, step: 5, xLabel: '달', yLabel: '강수량', given: [3, 4, 5] }, target: { build: true }, difficulty: 0.25 },
              { prompt: '7월 막대만 그려 보세요. 나머지는 그려 있어요.', toolOptions: { type: 'bar', title: '하늘고을 월별 강수량', data: RAIN, unit: 'mm', scale: 50, step: 10, xLabel: '달', yLabel: '강수량', given: [0, 1, 2, 4, 5] }, target: { build: true }, difficulty: 0.2 },
            ] },
          { title: '그래프 근거로 문장 쓰기', tool: 'mindmap',
            task: '문장과 알맞은 근거 자료를 이어요.',
            teacher: '"왜 여름에 비가 가장 많다고 말할 수 있나요?" 7월 330mm가 다른 달의 값보다 크다는 근거를 말로 듣는다. "겨울에는 비가 거의 안 와요"처럼 그래프에 1월 25mm만 있는 경우, 아주 적다는 말과 하나도 안 온다는 말이 다르다는 것을 짚는다.',
            items: [
              { prompt: '문장과 알맞은 근거를 이어 보세요.', toolOptions: { mode: 'match', topic: '문장과 근거', slots: [{ id: 'm1', label: '여름에 비가 집중해서 와요' }, { id: 'm2', label: '겨울에는 비가 적게 와요' }], cards: ['7월 330mm로 가장 많아요', '1월 25mm로 가장 적어요', '9월에도 비가 와요'] }, target: { match: { m1: '7월 330mm로 가장 많아요', m2: '1월 25mm로 가장 적어요' } }, difficulty: 0.2 },
              { prompt: '카드를 그래프로 알 수 있는 사실과 생각으로 나누어 보세요.', toolOptions: { topic: '강수량 그래프', slots: ['사실', '생각'], cards: ['7월 강수량이 가장 많아요', '3월보다 5월이 비가 많아요', '여름은 비가 와서 싫어요', '비 오는 날이 가장 신나요'] }, target: { sort: { 사실: ['7월 강수량이 가장 많아요', '3월보다 5월이 비가 많아요'], 생각: ['여름은 비가 와서 싫어요', '비 오는 날이 가장 신나요'] } }, difficulty: 0.2 },
              { prompt: '장마철에 대비해 하면 좋은 일만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '장마 대비', basket: '장마 대비', cards: ['우산과 비옷을 준비해요', '배수구의 낙엽을 치워요', '난방기를 점검해요', '눈삽을 준비해요', '빨래는 실내에서 말려요'] }, target: { pick: ['우산과 비옷을 준비해요', '배수구의 낙엽을 치워요', '빨래는 실내에서 말려요'] }, difficulty: 0.25 },
            ] },
        ],
        wrap: {
          teacher: '"우리나라는 1년 중 언제 비가 가장 많이 오나요? 그리고 그것을 어떻게 알 수 있나요?" 강수량 그래프에서 가장 긴 막대를 근거로 말하게 한다. 출구 1번을 9월이라고 답한 학생에게는 두 막대의 눈금을 나란히 읽게 한다.',
          exits: [
            { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '다른 마을 월별 강수량', data: [['2월', 30], ['4월', 70], ['6월', 180], ['8월', 300], ['10월', 80]], unit: 'mm', scale: 50, xLabel: '달', choices: ['4월', '6월', '8월'], why: ['4월 막대는 짧아요.', '8월 막대가 더 길어요.', null] }, prompt: '이 마을에서 강수량이 가장 많은 달을 고르세요.', target: { pick: 2 }, difficulty: 0.15 },
            { type: 'choice', prompt: '강수량 단위로 쓰는 것은 무엇인가요?', options: ['mm', '°C', '명'], answer: 0, difficulty: 0.1, explain: '비의 양은 mm로 나타내요.' },
            { type: 'choice', prompt: '비가 여름에 집중해서 내린다는 것을 알려 주는 자료는 어느 것인가요?', options: ['월별 강수량 그래프', '학급 키 그래프'], answer: 0, difficulty: 0.15, explain: '월별 강수량 그래프에서 어느 달에 비가 많이 오는지 볼 수 있어요.' },
            { type: 'mood', prompt: '오늘 그래프 읽기는 어땠나요?' },
          ],
        },
        ws: {
          title: '월별 강수량 자료 읽기',
          items: [
            { type: 'table', prompt: '하늘고을 월별 강수량 표를 완성하세요.', columns: ['달', '강수량(mm)'], cells: [['1월', '25'], ['5월', ''], ['7월', ''], ['9월', ''], ['11월', '']], answer: '5월 90, 7월 330, 9월 150, 11월 45' },
            { type: 'blank', prompt: '표를 보고 빈칸에 알맞은 말을 쓰세요.', text: '강수량이 가장 많은 달은 ___월이고, 가장 적은 달은 ___월이에요.', answer: '7, 1' },
            { type: 'blank', prompt: '7월과 9월의 강수량 차를 구하세요.', text: '330 − 150 = ___ (mm)', answer: '180' },
            { type: 'choice', prompt: '그래프로 알 수 있는 사실에 ○ 하세요.', options: ['7월에 비가 가장 많이 와요', '비가 오면 기분이 좋아요', '겨울에는 비가 한 방울도 안 와요'], answer: '7월에 비가 가장 많이 와요' },
            { type: 'short', prompt: '이 그래프에서 알 수 있는 우리나라 여름 비의 특징을 한 문장으로 쓰세요.' },
          ],
          easy: { note: '막대가 가장 긴 달이 비가 가장 많이 온 달이에요.', items: [
            { type: 'choice', prompt: '비가 가장 많은 달에 ○ 하세요.', options: ['1월', '7월'], answer: '7월' },
            { type: 'table', prompt: '표를 완성하세요.', columns: ['달', '강수량(mm)'], cells: [['3월', '50'], ['7월', ''], ['11월', '']], answer: '7월 330, 11월 45' },
            { type: 'blank', prompt: '알맞은 말을 쓰세요.', text: '비가 가장 적은 달은 ___월이에요.', answer: '1' },
            { type: 'short', prompt: '장마철에 챙기면 좋은 것을 한 가지 쓰세요.' },
          ] },
        },
        notes: '자주 보이는 어려움: ① 눈금 한 칸을 1로 읽는다 → 눈금 한 칸이 50mm라고 먼저 말하게 한다. ② 가장 많은 달이 아니라 마지막 달을 고른다 → 가장 긴 막대를 손가락으로 짚는다. ③ 비가 아주 적다는 것과 전혀 안 온다는 것을 구분하지 않는다 → 1월 25mm라는 값을 다시 읽게 한다. 값은 모두 지어낸 것이다.',
      }),
      // ───────────────────────── 6차시 ─────────────────────────
      mk(6, {
        title: '눈뫼마을과 햇볕마을 기온 견주어 비교 문장 쓰기',
        objective: '두 지역의 기온 자료를 견주어 차이를 숫자로 구하고 근거를 들어 비교하는 문장을 완성할 수 있다.',
        std: S1,
        ill: 'two small villages, one with snowy mountains and one beside a warm sunny sea, with a paper bar chart comparing temperatures between them',
        scene: '두 마을 기온을 견주어 봐요', more: [{ motif: 'mountain', x: 110, y: 214 }, { motif: 'snow', x: 110, y: 130 }, { motif: 'wave', x: 380, y: 232 }, { motif: 'house', x: 330, y: 222 }],
        intro: {
          teacher: '"북쪽 산 가까이 사는 친구와 남쪽 바닷가에 사는 친구의 겨울은 같을까요?" 짐작을 말해 본 뒤 눈뫼마을과 햇볕마을(지어낸 두 마을)의 1월·7월 기온 그래프로 확인한다고 알린다. 비교할 때는 "누가 더 크다"와 함께 "몇이 더 크다"를 숫자로 말하는 것이 근거 있는 말이라고 알려 준다. 두 마을 값은 지어낸 것이다.',
          student: '두 마을의 기온이 얼마나 다른지 숫자로 말해 봅시다.',
        },
        acts: [
          { title: '두 마을 막대 견주기', tool: 'chart',
            task: '막대그래프에 두 마을의 1월과 7월 기온이 있어요. 눈금 한 칸은 5°C예요. 읽고 답해요.',
            teacher: '"1월과 7월 가운데 두 마을의 기온 차가 더 큰 달은 언제일까요?" 막대 높이 차이를 눈으로 먼저 어림한 뒤 숫자로 확인하게 한다. 3번을 7월이라고 답한 학생에게는 1월과 7월의 차를 각각 빼 보게 하여 값을 읽다가 헷갈린 것이 아닌지 물어 본다.',
            items: [
              { prompt: '1월 기온이 더 낮은 마을을 골라 보세요.', toolOptions: { type: 'bar', mode: 'read', title: '눈뫼마을·햇볕마을 기온', data: TWO_T, unit: '°C', scale: 5, xLabel: '마을과 달', choices: ['눈뫼마을', '햇볕마을'], why: [null, '햇볕 1월 막대가 더 길어요.'] }, target: { pick: 0 }, difficulty: 0.1 },
              { prompt: '1월에 두 마을의 기온은 몇 °C 차이가 나는지 쓰세요.', toolOptions: { type: 'bar', mode: 'read', title: '눈뫼마을·햇볕마을 기온', data: TWO_T, unit: '°C', scale: 5, xLabel: '마을과 달', question: '1월 기온은 햇볕마을이 눈뫼마을보다 몇 °C 높은가요?' }, target: { value: 5 }, difficulty: 0.2 },
              { prompt: '두 마을의 기온 차가 더 큰 달을 골라 보세요.', toolOptions: { type: 'bar', mode: 'read', title: '눈뫼마을·햇볕마을 기온', data: TWO_T, unit: '°C', scale: 5, xLabel: '마을과 달', choices: ['1월', '7월'], why: [null, '7월 기온 차는 4°C예요.'] }, target: { pick: 0 }, difficulty: 0.3,
                conclude: '1월에는 5°C, 7월에는 4°C 차이라서 겨울에 두 마을의 차이가 더 커요.' },
            ] },
          { title: '비교 문장 빈칸 채우기', tool: 'mindmap',
            task: '문장의 빈칸에 알맞은 낱말·수 카드를 넣어요.',
            teacher: '"비교하는 문장에는 무엇이 꼭 들어가야 할까요?" 비교 대상, 기준(몇 월, 무엇), 차이의 크기 세 가지를 칠판에 정리한다. 2번에서 차이를 구하지 않고 두 값 중 하나를 그대로 쓰는 학생에게 "몇 °C 차이"는 빼서 구한다는 것을 다시 짚는다.',
            items: [
              { prompt: '그래프를 보고 문장의 빈칸에 알맞은 수를 넣어 보세요.', toolOptions: { mode: 'fill', topic: '비교 문장', slots: [{ id: 'f1', label: '1월에 눈뫼마을은 햇볕마을보다 ___°C 낮아요.' }], cards: ['4', '5', '6'] }, target: { fill: { f1: '5' } }, difficulty: 0.15 },
              { prompt: '7월 비교 문장의 빈칸 두 곳에 알맞은 카드를 넣어 보세요.', toolOptions: { mode: 'fill', topic: '7월 비교', slots: [{ id: 'f1', label: '7월에는 ___마을이 더 더워요.' }, { id: 'f2', label: '두 마을의 7월 기온 차는 ___°C예요.' }], cards: ['눈뫼', '햇볕', '4', '5'] }, target: { fill: { f1: '햇볕', f2: '4' } }, difficulty: 0.25 },
              { prompt: '그래프로 확인할 수 있는 문장만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '확인할 수 있는 문장', basket: '확인할 수 있어요', cards: ['눈뫼마을 1월 기온은 1°C예요', '햇볕마을 7월 기온은 26°C예요', '눈뫼마을이 더 살기 좋아요', '햇볕마을은 두 달 모두 5°C 높아요'] }, target: { pick: ['눈뫼마을 1월 기온은 1°C예요', '햇볕마을 7월 기온은 26°C예요'] }, difficulty: 0.25 },
            ] },
          { title: '기온 차의 까닭 짐작하기', tool: 'mindmap',
            task: '마을의 자리와 기온 모습을 이어 보며 까닭을 짐작해요.',
            teacher: '"산 가까이 있는 마을이 겨울에 더 추운 까닭은 무엇일까요?" 높은 곳일수록, 북쪽일수록 기온이 낮은 경향이 있다는 것을 다솜도 지도와 이어 말하게 한다. 이것은 짐작이며 더 알아보려면 다른 자료가 필요하다는 것을 알려 준다.',
            items: [
              { prompt: '마을의 자리와 기온의 모습을 이어 보세요.', toolOptions: { mode: 'match', topic: '자리와 기온', slots: [{ id: 'm1', label: '눈뫼마을 (북쪽, 산 가까이)' }, { id: 'm2', label: '햇볕마을 (남쪽, 바다 가까이)' }], cards: ['겨울에 더 춥고 여름에 덜 더워요', '겨울에도 덜 춥고 여름에 더 더워요', '두 달 모두 기온이 똑같아요'] }, target: { match: { m1: '겨울에 더 춥고 여름에 덜 더워요', m2: '겨울에도 덜 춥고 여름에 더 더워요' } }, difficulty: 0.2 },
              { prompt: '기온이 낮아지는 쪽의 땅 모습만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '더 추운 쪽', basket: '더 추워요', cards: ['북쪽으로 갈수록', '높은 산 가까이', '남쪽 바다 가까이', '낮고 평평한 해안'] }, target: { pick: ['북쪽으로 갈수록', '높은 산 가까이'] }, difficulty: 0.25 },
              { prompt: '짐작을 확인하려면 더 필요한 자료를 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '더 필요한 자료', basket: '더 필요해요', cards: ['여러 마을의 기온 자료', '마을의 땅 높이', '친구의 좋아하는 색', '급식 메뉴'] }, target: { pick: ['여러 마을의 기온 자료', '마을의 땅 높이'] }, difficulty: 0.3 },
            ] },
        ],
        wrap: {
          teacher: '"눈뫼마을이 햇볕마을보다 춥다고만 말하면 충분할까요?" 얼마나(몇 °C), 언제(몇 월)를 함께 말해야 근거 있는 문장이 된다고 다시 짚는다. 출구 1번에서 8월 차를 구하지 못한 학생에게는 큰 값에서 작은 값을 빼는 계산을 막대 눈금과 함께 다시 보여 준다.',
          exits: [
            { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '두 마을 8월 기온', data: [['눈뫼 8월', 21], ['햇볕 8월', 27]], unit: '°C', scale: 3, xLabel: '마을과 달', question: '8월에 햇볕마을은 눈뫼마을보다 몇 °C 더 높은가요?' }, prompt: '8월 그래프에서 두 마을의 기온 차를 쓰세요.', target: { value: 6 }, difficulty: 0.2 },
            { type: 'choice', prompt: '비교하는 문장에 꼭 들어가야 할 것으로 알맞은 것은?', options: ['무엇을, 언제, 얼마나 다른지', '좋아하는 마을', '마을 이름 글자 수'], answer: 0, difficulty: 0.1, explain: '비교 대상과 기준, 차이의 크기가 들어가야 근거 있는 문장이 돼요.' },
            { type: 'choice', prompt: '"햇볕마을은 눈뫼마을보다 1월에 5°C 높아요."는 어떤 말인가요?', options: ['자료로 확인한 사실', '사람마다 다른 생각'], answer: 0, difficulty: 0.15, explain: '그래프에서 구한 숫자라서 사실이에요.' },
            { type: 'mood', prompt: '오늘 비교하기는 어땠나요?' },
          ],
        },
        ws: {
          title: '두 마을 기온 견주기',
          items: [
            { type: 'table', prompt: '두 마을의 기온을 표에 쓰고 차를 구하세요.', columns: ['달', '눈뫼마을(°C)', '햇볕마을(°C)', '차(°C)'], cells: [['1월', '1', '6', ''], ['7월', '22', '26', '']], answer: '1월 차 5, 7월 차 4' },
            { type: 'blank', prompt: '비교하는 문장을 완성하세요.', text: '1월에 ___마을은 ___마을보다 5°C 더 낮아요.', answer: '눈뫼, 햇볕' },
            { type: 'choice', prompt: '두 마을의 기온 차가 더 큰 달에 ○ 하세요.', options: ['1월(5°C 차이)', '7월(4°C 차이)'], answer: '1월(5°C 차이)' },
            { type: 'choice', prompt: '자료로 알 수 있는 사실에 ○ 하세요.', options: ['햇볕마을은 두 달 모두 눈뫼마을보다 높아요', '눈뫼마을이 더 멋져요'], answer: '햇볕마을은 두 달 모두 눈뫼마을보다 높아요' },
            { type: 'short', prompt: '두 마을을 견주는 문장을 숫자를 넣어 한 줄로 써 보세요.' },
          ],
          easy: { note: '큰 값에서 작은 값을 빼면 차이가 나와요.', items: [
            { type: 'table', prompt: '표를 보고 차를 구하세요.', columns: ['달', '눈뫼마을(°C)', '햇볕마을(°C)', '차(°C)'], cells: [['1월', '1', '6', '']], answer: '5' },
            { type: 'choice', prompt: '1월에 더 추운 마을에 ○ 하세요.', options: ['눈뫼마을', '햇볕마을'], answer: '눈뫼마을' },
            { type: 'blank', prompt: '알맞은 수를 쓰세요.', text: '7월 기온 차: 26 − 22 = ___ (°C)', answer: '4' },
            { type: 'short', prompt: '두 마을 가운데 가 보고 싶은 곳과 까닭을 쓰세요.' },
          ] },
        },
        notes: '자주 보이는 어려움: ① 기온 차를 구하지 않고 두 값 중 하나를 쓴다 → 큰 수에서 작은 수를 빼는 계산을 막대 끝 눈금과 함께 한다. ② 1월과 7월의 차를 서로 바꿔 읽는다 → 표 안의 줄을 손가락으로 짚는다. ③ 까닭을 단정한다 → 이것은 자료로 한 짐작이며 더 많은 자료가 필요하다고 짚는다. 값은 모두 지어낸 것이다.',
      }),
      // ───────────────────────── 7차시 ─────────────────────────
      mk(7, {
        title: '기후변화 재해 이름과 피해·대비 잇기',
        objective: '폭염·집중호우·태풍·한파·대설 같은 기상 재해의 피해와 알맞은 대비 행동을 짝지어 설명할 수 있다.',
        std: S1,
        ill: 'a child pointing at illustrated disaster cards showing a blazing sun, heavy rain over a river, a typhoon swirl and a snowy road',
        scene: '재해가 닥치면 어떻게 할까요?', more: [{ motif: 'cloud', x: 330, y: 90 }, { motif: 'wave', x: 380, y: 232 }, { motif: 'house', x: 150, y: 222 }],
        intro: {
          teacher: '"올해 뉴스에서 폭염이나 집중호우라는 말을 들어 본 적이 있나요?" 학생이 아는 재해를 말해 보게 한다. 지구의 평균 기온이 오르는 기후변화 때문에 폭염이나 집중호우 같은 재해가 더 잦아지거나 강해질 수 있다고 알려 주고, 오늘은 재해마다 어떤 피해가 생기고 어떻게 대비하는지 짝지어 본다고 말한다. 시연 단추로 첫 문항의 짝이 이어지는 모습을 보인다.',
          student: '들어 본 적 있는 날씨 재해 이름과 무서웠던 경험을 하나 떠올려 봅시다.',
        },
        acts: [
          { title: '재해와 피해 잇기', tool: 'mindmap',
            task: '재해 이름과 그 재해로 생기는 피해를 이어요.',
            teacher: '"집중호우가 오면 어떤 일이 생길까요?" 학생이 떠올리는 피해를 먼저 말로 모은 뒤 카드와 이어 본다. 폭염 피해를 "눈이 쌓여 길이 막히는 일"로 잇는 학생에게는 폭염이 어느 계절에 일어나는지 다시 묻는다.',
            items: [
              { prompt: '재해와 알맞은 피해를 이어 보세요.', toolOptions: { mode: 'match', topic: '재해와 피해', slots: [{ id: 'm1', label: '폭염' }, { id: 'm2', label: '집중호우' }, { id: 'm3', label: '한파' }], cards: ['더위로 쓰러지는 사람이 생겨요', '하천이 넘치고 도로가 잠겨요', '수도관이 얼어 터져요'] }, target: { match: { m1: '더위로 쓰러지는 사람이 생겨요', m2: '하천이 넘치고 도로가 잠겨요', m3: '수도관이 얼어 터져요' } }, difficulty: 0.15 },
              { prompt: '또 다른 재해와 알맞은 피해를 이어 보세요.', toolOptions: { mode: 'match', topic: '재해와 피해', slots: [{ id: 'm1', label: '태풍' }, { id: 'm2', label: '대설' }, { id: 'm3', label: '가뭄' }], cards: ['강한 바람에 간판이 떨어져요', '눈길에 차가 미끄러져요', '논밭이 말라 농작물이 시들어요'] }, target: { match: { m1: '강한 바람에 간판이 떨어져요', m2: '눈길에 차가 미끄러져요', m3: '논밭이 말라 농작물이 시들어요' } }, difficulty: 0.2 },
              { prompt: '비 때문에 생길 수 있는 피해만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '비 피해', basket: '비 피해', cards: ['산비탈 흙이 무너져 내려요', '지하도가 물에 잠겨요', '논밭이 바싹 말라요', '강물이 불어 다리가 위험해요'] }, target: { pick: ['산비탈 흙이 무너져 내려요', '지하도가 물에 잠겨요', '강물이 불어 다리가 위험해요'] }, difficulty: 0.25 },
            ] },
          { title: '재해와 대비 잇기', tool: 'mindmap',
            task: '재해 이름과 알맞은 대비 행동을 이어요.',
            teacher: '"집중호우가 올 때 지하도 근처로 가도 될까요?" 대비 행동에는 이유가 있다는 것을 짚는다(물이 순식간에 차기 때문에). 한파 대비를 "물을 많이 마시기"로 잇는 학생에게 폭염과 한파 가운데 어느 쪽에 맞는 행동인지 되묻는다.',
            items: [
              { prompt: '재해와 알맞은 대비 행동을 이어 보세요.', toolOptions: { mode: 'match', topic: '재해와 대비', slots: [{ id: 'm1', label: '폭염' }, { id: 'm2', label: '집중호우' }, { id: 'm3', label: '태풍' }], cards: ['한낮에는 실내에서 쉬고 물을 마셔요', '지하도와 하천 근처에 가지 않아요', '창문을 단단히 닫고 외출을 줄여요'] }, target: { match: { m1: '한낮에는 실내에서 쉬고 물을 마셔요', m2: '지하도와 하천 근처에 가지 않아요', m3: '창문을 단단히 닫고 외출을 줄여요' } }, difficulty: 0.2 },
              { prompt: '한파에 알맞은 대비 행동만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '한파 대비', basket: '한파 대비', cards: ['수도관을 헌 옷으로 감싸요', '여러 겹의 옷을 입어요', '한낮에 땡볕 아래서 놀아요', '빙판길에서는 천천히 걸어요'] }, target: { pick: ['수도관을 헌 옷으로 감싸요', '여러 겹의 옷을 입어요', '빙판길에서는 천천히 걸어요'] }, difficulty: 0.2 },
              { prompt: '재해가 주로 일어나는 계절로 나누어 보세요.', toolOptions: { topic: '재해와 계절', slots: ['여름에 많은 재해', '겨울에 많은 재해'], cards: ['폭염', '집중호우', '한파', '대설'] }, target: { sort: { '여름에 많은 재해': ['폭염', '집중호우'], '겨울에 많은 재해': ['한파', '대설'] } }, difficulty: 0.25 },
            ] },
        ],
        wrap: {
          teacher: '"재해마다 대비하는 방법이 다른 까닭은 무엇일까요?" 일어나는 계절과 생기는 피해가 달라서 대비도 달라진다는 것을 말하게 한다. 출구 3번에서 모든 재해에 같은 대비를 하면 된다고 답한 학생에게는 폭염과 한파 대비를 나란히 견주게 한다.',
          exits: [
            { type: 'choice', prompt: '갑자기 많은 비가 쏟아질 때 가까이 가지 말아야 할 곳은 어디인가요?', options: ['지하도와 하천', '운동장 한가운데', '교실 안'], answer: 0, difficulty: 0.1, explain: '물이 순식간에 차오를 수 있는 곳은 피해야 해요.' },
            { type: 'choice', prompt: '기후변화로 지구의 평균 기온이 오르면 더 자주 일어날 수 있는 재해는?', options: ['폭염', '지진', '화산'], answer: 0, difficulty: 0.2, explain: '평균 기온이 오르면 폭염이 잦아지거나 강해질 수 있어요.' },
            { type: 'choice', prompt: '한파와 폭염의 대비 행동은 같을까요?', options: ['달라요. 피해가 서로 달라요', '같아요. 똑같이 하면 돼요'], answer: 0, difficulty: 0.2, explain: '추위와 더위는 피해가 달라서 따뜻하게 하거나 시원하게 쉬는 것처럼 대비도 달라요.' },
            { type: 'mood', prompt: '오늘 재해 공부는 어땠나요?' },
          ],
        },
        ws: {
          title: '재해와 대비 행동 짝짓기',
          items: [
            { type: 'table', prompt: '재해와 대비 행동을 하나씩 쓰세요.', columns: ['재해', '대비 행동'], cells: [['폭염', ''], ['집중호우', ''], ['한파', '']], answer: '폭염 물 마시기·실내 쉬기, 집중호우 지하도 피하기, 한파 수도관 감싸기·따뜻한 옷' },
            { type: 'choice', prompt: '여름에 많이 일어나는 재해에 ○ 하세요.', options: ['폭염', '한파', '대설'], answer: '폭염' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '기후변화로 지구의 평균 ___이 오르면 폭염이 더 잦아질 수 있어요.', answer: '기온' },
            { type: 'choice', prompt: '태풍이 올 때 알맞은 행동에 ○ 하세요.', options: ['창문을 닫고 외출을 줄여요', '바닷가에 구경하러 가요'], answer: '창문을 닫고 외출을 줄여요' },
            { type: 'short', prompt: '우리 가족이 한파나 폭염에 대비하려고 하는 일 하나를 쓰세요.' },
          ],
          easy: { note: '재해마다 피해와 대비가 달라요.', items: [
            { type: 'choice', prompt: '폭염에 알맞은 행동에 ○ 하세요.', options: ['물을 자주 마셔요', '난로를 켜요'], answer: '물을 자주 마셔요' },
            { type: 'choice', prompt: '집중호우 때 피할 곳에 ○ 하세요.', options: ['지하도', '교실'], answer: '지하도' },
            { type: 'blank', prompt: '알맞은 말을 쓰세요.', text: '눈이 많이 오는 재해는 ___이에요.', answer: '대설' },
            { type: 'short', prompt: '무서웠던 날씨 경험을 한 줄 쓰세요.' },
          ] },
        },
        notes: '자주 보이는 어려움: ① 재해마다 대비가 다른 까닭을 이해하지 못하고 한 가지로 묶는다 → 폭염·한파의 피해를 먼저 견준다. ② 기후변화를 오늘 날씨의 일로만 이해한다 → 지구의 평균 기온이 천천히 오르는 큰 변화라고 알려 준다. ③ 재해 장면을 지나치게 무섭게 받아들이는 학생이 있다 → 대비하면 피해를 줄일 수 있다는 점을 먼저 말한다.',
      }),
      // ───────────────────────── 8차시 ─────────────────────────
      mk(8, {
        title: '우리 학교 재해 대비 안내 카드 만들기',
        objective: '재해 상황에서 내가 할 일·학교가 할 일·지역 기관이 하는 일을 구분하고 믿을 수 있는 정보 출처를 골라 안내 카드를 만들 수 있다.',
        std: S1,
        ill: 'students gathered in a school hallway reading an emergency guide poster with icons of an umbrella, a bottle of water and a flashlight',
        scene: '우리가 할 수 있는 대비', more: [{ motif: 'house', x: 150, y: 222 }, { motif: 'tree', x: 330, y: 214 }, { motif: 'star', x: 400, y: 100 }],
        intro: {
          teacher: '"태풍 경보가 내려진 날 학교에서는 누가 무엇을 할까요?" 학생 혼자가 아니라 학교와 지역 기관이 함께 대비한다는 것을 짚는다. 시연 단추로 첫 문항의 카드가 알맞은 칸에 놓이는 모습을 보인다. 오늘은 내가 할 일, 학교가 하는 일, 지역 기관이 하는 일을 나누어 안내 카드로 정리한다고 알린다.',
          student: '태풍이나 폭염이 올 때 내가 스스로 할 수 있는 일을 한 가지 떠올려 봅시다.',
        },
        acts: [
          { title: '누가 하는 일일까', tool: 'mindmap',
            task: '재해 대비 행동 카드를 내가·학교가·지역 기관이 하는 일로 나누어요.',
            teacher: '"내가 할 일과 어른이 할 일은 어떻게 다를까요?" 스스로 할 수 있는 안전 행동과, 학교·기관이 맡는 큰일(대피 안내, 방송, 배수 시설 점검)을 구분하게 한다. "하천 물을 내가 막는다"는 카드를 내가 하는 일에 놓는 학생에게는 아이가 할 수 있는 일의 한계를 이야기한다.',
            items: [
              { prompt: '대비 행동을 누가 하는 일인지 나누어 보세요.', toolOptions: { topic: '재해 대비', slots: ['내가 하는 일', '학교가 하는 일', '지역 기관이 하는 일'], cards: ['물병과 손전등을 챙겨요', '대피 방송을 하고 운동장 수업을 멈춰요', '하천 둑과 배수 시설을 점검해요'] }, target: { sort: { '내가 하는 일': ['물병과 손전등을 챙겨요'], '학교가 하는 일': ['대피 방송을 하고 운동장 수업을 멈춰요'], '지역 기관이 하는 일': ['하천 둑과 배수 시설을 점검해요'] } }, difficulty: 0.2 },
              { prompt: '카드 여섯 장을 누가 하는 일인지 나누어 보세요.', toolOptions: { topic: '재해 대비', slots: ['내가 하는 일', '학교가 하는 일', '지역 기관이 하는 일'], cards: ['비 오는 날 하천 근처에 가지 않아요', '비상 연락망을 보호자에게 알려 줘요', '재난 문자를 보내요', '학생을 안전한 교실로 모아요', '대피소를 열고 물품을 준비해요', '더운 날 물을 자주 마셔요'] }, target: { sort: { '내가 하는 일': ['비 오는 날 하천 근처에 가지 않아요', '더운 날 물을 자주 마셔요'], '학교가 하는 일': ['비상 연락망을 보호자에게 알려 줘요', '학생을 안전한 교실로 모아요'], '지역 기관이 하는 일': ['재난 문자를 보내요', '대피소를 열고 물품을 준비해요'] } }, difficulty: 0.3 },
              { prompt: '내가 바로 할 수 있는 일만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '내가 할 수 있는 일', basket: '내가 할 수 있어요', cards: ['비상 연락처를 외워요', '일기예보를 가족과 함께 봐요', '둑을 직접 쌓아요', '대피 장소를 확인해요'] }, target: { pick: ['비상 연락처를 외워요', '일기예보를 가족과 함께 봐요', '대피 장소를 확인해요'] }, difficulty: 0.25 },
            ] },
          { title: '태풍 대비 순서와 믿을 정보', tool: 'mindmap',
            task: '태풍이 오기 전부터 지난 뒤까지 해야 할 일을 차례대로 놓고, 믿을 만한 정보를 골라요.',
            teacher: '"태풍이 지난 뒤에는 바로 밖으로 나가 구경해도 될까요?" 지난 뒤에도 위험(떨어진 전선, 약해진 길)이 남는다는 것을 짚는다. 정보 고르기에서는 누가 알려 주었는지 출처를 묻고, 누가 올렸는지 모르는 글을 믿고 퍼뜨리면 안 된다는 점을 이야기한다.',
            items: [
              { prompt: '태풍에 대비하는 차례대로 카드를 놓아 보세요.', toolOptions: { mode: 'order', topic: '태풍 대비 순서', slots: ['첫째', '둘째', '셋째', '넷째'], cards: ['기상 소식을 확인해요', '창문을 닫고 베란다 물건을 정리해요', '바람이 거셀 때는 실내에 머물러요', '지난 뒤에도 위험한 곳은 피해요'] }, target: { order: ['기상 소식을 확인해요', '창문을 닫고 베란다 물건을 정리해요', '바람이 거셀 때는 실내에 머물러요', '지난 뒤에도 위험한 곳은 피해요'] }, difficulty: 0.25 },
              { prompt: '믿을 수 있는 재난 정보만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '믿을 정보', basket: '믿을 정보', cards: ['기상청 누리집의 예보', '시청에서 보낸 재난 문자', '누가 썼는지 모르는 단체방 글', '출처 없이 돌아다니는 영상'] }, target: { pick: ['기상청 누리집의 예보', '시청에서 보낸 재난 문자'] }, difficulty: 0.2 },
              { prompt: '폭염에 대비하는 차례대로 카드를 놓아 보세요.', toolOptions: { mode: 'order', topic: '폭염 대비', slots: ['첫째', '둘째', '셋째'], cards: ['폭염 특보를 확인해요', '한낮 야외 활동을 줄이고 물을 마셔요', '어지러우면 시원한 곳에서 어른에게 알려요'] }, target: { order: ['폭염 특보를 확인해요', '한낮 야외 활동을 줄이고 물을 마셔요', '어지러우면 시원한 곳에서 어른에게 알려요'] }, difficulty: 0.25 },
            ] },
        ],
        wrap: {
          teacher: '"재해 대비는 혼자 하는 일일까요, 함께 하는 일일까요?" 내가 할 일, 학교가 할 일, 지역 기관이 할 일이 모두 맞물린다는 것을 정리한다. 출구 1번에서 출처를 가리지 못하는 학생에게는 누가 보낸 정보인지 먼저 확인하는 습관을 다시 짚는다.',
          exits: [
            { type: 'choice', prompt: '재난 문자는 누가 보내는 것이 알맞나요?', options: ['지방 정부나 기관', '출처를 알 수 없는 사람', '친구 모두'], answer: 0, difficulty: 0.1, explain: '지방 정부나 기관이 공식적으로 알려 주는 정보를 믿어요.' },
            { type: 'choice', prompt: '태풍이 지나간 뒤에 알맞은 행동은?', options: ['위험한 곳은 가까이 가지 않아요', '바로 바닷가에 가요', '떨어진 전선을 만져 봐요'], answer: 0, difficulty: 0.15, explain: '지난 뒤에도 전선이나 약해진 길이 위험할 수 있어요.' },
            { type: 'choice', prompt: '"대피소를 열고 물품을 준비하는 일"은 누가 하는 일인가요?', options: ['지역 기관', '나 혼자', '친구 한 명'], answer: 0, difficulty: 0.2, explain: '큰 시설을 준비하는 일은 지역 기관이 맡아요.' },
            { type: 'mood', prompt: '오늘 안내 카드 만들기는 어땠나요?' },
          ],
        },
        ws: {
          title: '우리 학교 재해 대비 안내 카드',
          items: [
            { type: 'table', prompt: '대비 행동을 누가 하는지 정리하세요.', columns: ['하는 사람', '대비 행동'], cells: [['나', ''], ['학교', ''], ['지역 기관', '']], answer: '나: 물병 챙기기, 학교: 대피 안내, 지역 기관: 재난 문자·대피소(예)' },
            { type: 'choice', prompt: '믿을 수 있는 정보에 ○ 하세요.', options: ['기상청 예보', '출처 없는 단체방 글'], answer: '기상청 예보' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '태풍이 오기 전에는 ___ 소식을 확인하고, 바람이 거센 때는 ___에 머물러요.', answer: '기상, 실내' },
            { type: 'choice', prompt: '내가 직접 할 수 있는 일에 ○ 하세요.', options: ['대피 장소 확인하기', '하천 둑 쌓기'], answer: '대피 장소 확인하기' },
            { type: 'short', prompt: '우리 반 친구에게 알려 주고 싶은 재해 대비 행동을 한 문장으로 쓰세요.' },
          ],
          easy: { note: '재해는 혼자 대비하지 않고 함께 대비해요.', items: [
            { type: 'choice', prompt: '재난 문자를 보내는 곳에 ○ 하세요.', options: ['지역 기관', '이웃 친구'], answer: '지역 기관' },
            { type: 'choice', prompt: '태풍이 올 때 알맞은 행동에 ○ 하세요.', options: ['창문 닫기', '바닷가 가기'], answer: '창문 닫기' },
            { type: 'blank', prompt: '알맞은 말을 쓰세요.', text: '비가 많이 올 때는 ___ 근처에 가지 않아요.', answer: '하천' },
            { type: 'short', prompt: '재해가 올 때 가장 먼저 할 일을 한 가지 쓰세요.' },
          ] },
        },
        notes: '자주 보이는 어려움: ① 내가 할 수 있는 일의 한계를 몰라 위험한 행동을 고른다 → 아이가 하면 안 되는 일(하천 구경, 전선 만지기)을 분명히 말한다. ② 재난 정보의 출처를 가리지 않는다 → 누가 알려 주었는지 먼저 묻는다. ③ 재해 장면이 무서워 활동을 꺼리는 학생이 있다 → 대비하는 행동을 중심으로 말한다. 이 차시의 안내 카드는 학교 안전 교육 자료를 대신하지 않는다.',
      }),
      // ───────────────────────── 9차시 ─────────────────────────
      mk(9, {
        title: '다솜도 인구 지도로 사람이 모인 곳 찾기',
        objective: '인구 단계구분도를 읽어 인구가 많이 모인 지역과 적은 지역을 찾고 인구 분포가 지역마다 다름을 말할 수 있다.',
        std: S2,
        ill: 'a child reading a shaded population map of a made-up province where one central city is the darkest color and tiny figures crowd around it',
        scene: '사람들은 어디에 모여 살까요?', more: [{ motif: 'house', x: 130, y: 222 }, { motif: 'house', x: 170, y: 224, color: 'sky', s: 0.8 }, { motif: 'house', x: 210, y: 222, color: 'peach', s: 0.9 }, { motif: 'tree', x: 350, y: 214 }],
        intro: {
          teacher: '"우리나라 어디에 가장 많은 사람이 살고 있을까요? 짐작이 아니라 어떻게 알 수 있을까요?" 사는 사람 수(인구)를 지도 색으로 나타낸 자료가 있다는 것을 알려 준다. 시연 단추로 가장 진한 지역에 핀이 꽂히는 모습을 보인다. 오늘 쓰는 다솜도 지도는 지어낸 도이고 숫자도 지어낸 값이며, 실제 우리나라 통계는 확인된 자료를 가져와서 쓴다고 말한다.',
          student: '색이 진한 곳과 옅은 곳은 사람이 사는 모습이 어떻게 다를지 생각해 봅시다.',
        },
        acts: [
          { title: '인구 지도 읽기', tool: 'map', options: MAP_POP,
            task: '색이 진할수록 인구가 많은 지역이에요. 핀을 꽂거나 읽고 보기를 골라요.',
            teacher: '"진한 색은 무엇이 많다는 뜻일까요?" 범례를 먼저 읽게 한다. 같은 모양의 칸이라도 사람 수는 다르다는 것을 지도 칸 수와 인구 값을 견주어 보인다. 4번은 160을 40으로 나누어 몇 배인지 묻는 문항이다. 곱셈 구구로 40 × 4 = 160을 떠올리게 한다.',
            items: [
              { prompt: '인구가 가장 많은 지역 안에 핀을 꽂아 보세요.', target: { most: true }, difficulty: 0.1 },
              { prompt: '인구가 가장 적은 지역 안에 핀을 꽂아 보세요.', toolOptions: { regionValues: true }, target: { least: true }, difficulty: 0.1 },
              { prompt: '인구가 50만 명보다 많은 지역은 몇 곳인가요?', toolOptions: { readOnly: true, regionValues: true, ask: { choices: ['1곳', '2곳', '3곳'], why: ['햇볕시 말고 한 곳이 더 있어요.', null, '새벌시는 40만 명이라 50만 명보다 적어요.'] } }, target: { pick: 1 }, difficulty: 0.2 },
              { prompt: '들빛시의 인구는 새벌시 인구의 몇 배인가요?', toolOptions: { readOnly: true, regionValues: true, ask: { choices: ['2배', '4배', '8배'], why: ['40의 2배는 80이에요.', null, '40의 8배는 320이에요.'] } }, target: { pick: 1 }, difficulty: 0.3 },
            ] },
          { title: '인구 분포 낱말 만들기', tool: 'mindmap',
            task: '카드를 읽고 인구 분포를 알맞게 나누거나 고르거나 이어요.',
            teacher: '"인구 분포란 무엇일까요?" 사람이 사는 모습이 땅 위에서 어디에 많고 어디에 적게 퍼져 있는지를 뜻한다고 정리한다. 2번에서 "인구가 많은 곳이 가장 좋다"는 카드를 고르는 학생에게는 지도에서 좋고 나쁨이 나와 있는지 묻는다.',
            items: [
              { prompt: '장소 카드를 사람이 많이 모인 곳과 적게 사는 곳으로 나누어 보세요.', toolOptions: { topic: '인구 분포', slots: ['사람이 많이 모인 곳', '사람이 적게 사는 곳'], cards: ['큰 도시의 중심', '넓은 평야에 있는 도시', '깊은 산골 마을', '외딴 작은 섬'] }, target: { sort: { '사람이 많이 모인 곳': ['큰 도시의 중심', '넓은 평야에 있는 도시'], '사람이 적게 사는 곳': ['깊은 산골 마을', '외딴 작은 섬'] } }, difficulty: 0.15 },
              { prompt: '지도로 확인할 수 있는 인구 분포 문장만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '지도로 확인', basket: '확인할 수 있어요', cards: ['들빛시에 160만 명이 모여 살아요', '산마루군에는 5만 명이 살아요', '들빛시 사람들은 모두 친절해요', '인구가 많은 곳이 가장 좋아요'] }, target: { pick: ['들빛시에 160만 명이 모여 살아요', '산마루군에는 5만 명이 살아요'] }, difficulty: 0.2 },
              { prompt: '낱말과 알맞은 뜻을 이어 보세요.', toolOptions: { mode: 'match', topic: '낱말과 뜻', slots: [{ id: 'm1', label: '인구 분포' }, { id: 'm2', label: '인구가 몰려 있는 곳' }], cards: ['사람이 사는 모습이 지역마다 어떻게 다른지', '인구가 많이 모여 사는 지역', '인구가 적게 흩어져 사는 지역'] }, target: { match: { m1: '사람이 사는 모습이 지역마다 어떻게 다른지', m2: '인구가 많이 모여 사는 지역' } }, difficulty: 0.25 },
            ] },
        ],
        wrap: {
          teacher: '"인구 분포는 왜 지역마다 다를까요?" 이 차시에서는 어디에 많고 적은지를 읽고, 까닭은 다음 차시에서 찾는다고 알려 준다. 출구 3번에서 들빛시 다음으로 새벌시를 고른 학생에게는 70과 40의 크기를 다시 견주게 한다.',
          exits: [
            { type: 'tool', tool: 'map', options: MAP_POP, prompt: '인구 지도에서 햇볕시가 있는 곳에 핀을 꽂으세요.', target: { region: '햇볕시' }, difficulty: 0.15 },
            { type: 'choice', prompt: '인구 지도에서 색이 진할수록 인구는 어떤가요?', options: ['많아요', '적어요', '같아요'], answer: 0, difficulty: 0.1, explain: '진한 색일수록 인구가 많은 지역이에요.' },
            { type: 'choice', prompt: '인구가 두 번째로 많은 지역은 어디인가요?', options: ['새벌시', '햇볕시', '물결군'], answer: 1, difficulty: 0.2, explain: '들빛시(160만 명) 다음으로 햇볕시(70만 명)가 많아요.' },
            { type: 'mood', prompt: '오늘 인구 지도 읽기는 어땠나요?' },
          ],
        },
        ws: {
          title: '다솜도 인구 분포 읽기',
          items: [
            { type: 'figure', wide: true, prompt: '인구 지도에서 가장 진한 지역과 가장 옅은 지역을 찾아 쓰세요.', tool: 'map', options: WS_POP, figures: [{ caption: '다솜도 지역별 인구(만 명, 색이 진할수록 많음)' }], answer: '가장 진한 곳 들빛시(160만 명), 가장 옅은 곳 산마루군(5만 명)' },
            { type: 'table', prompt: '표를 완성하세요.', columns: ['지역', '인구(만 명)', '많은 순서'], cells: [['들빛시', '160', ''], ['햇볕시', '70', ''], ['새벌시', '40', '']], answer: '1, 2, 3' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '사람이 사는 모습이 지역마다 어떻게 다른지를 나타낸 것을 ___라고 해요.', answer: '인구 분포' },
            { type: 'choice', prompt: '지도로 알 수 있는 사실에 ○ 하세요.', options: ['들빛시 인구가 가장 많아요', '들빛시가 가장 살기 좋아요'], answer: '들빛시 인구가 가장 많아요' },
            { type: 'short', prompt: '인구 지도를 보고 알게 된 것을 한 문장으로 쓰세요.' },
          ],
          easy: { note: '색이 진할수록 인구가 많아요.', items: [
            { type: 'figure', wide: true, prompt: '인구가 가장 많은 지역에 ○ 하세요.', tool: 'map', options: WS_POP, figures: [{ caption: '다솜도 지역별 인구(만 명)' }], answer: '들빛시' },
            { type: 'choice', prompt: '인구가 더 많은 곳에 ○ 하세요.', options: ['들빛시(160만)', '새벌시(40만)'], answer: '들빛시(160만)' },
            { type: 'blank', prompt: '알맞은 말을 쓰세요.', text: '인구가 가장 적은 지역은 ___이에요.', answer: '산마루군' },
            { type: 'short', prompt: '우리 반 친구들이 사는 동네를 지도에 그린다면 어디에 점이 많을까요?' },
          ] },
        },
        notes: '자주 보이는 어려움: ① 칸이 넓은 지역에 사람이 많다고 짐작한다 → 지도에는 값이 따로 있음을 읽게 한다. ② 인구가 많으면 더 좋은 곳이라고 말한다 → 지도에는 좋고 나쁨이 없다고 짚는다. ③ 몇 배를 덧셈으로 구한다 → 40을 몇 번 더해야 160이 되는지 곱셈으로 묻는다. 지도의 수는 모두 지어낸 것이다.',
      }),
      // ───────────────────────── 10차시 ─────────────────────────
      mk(10, {
        title: '사람이 많이 사는 곳과 적은 곳의 까닭 잇기',
        objective: '땅 모양·일자리·교통 같은 조건이 인구 분포에 영향을 준다는 것을 사례로 설명할 수 있다.',
        std: S2,
        ill: 'a wide plain city with roads and factories beside a quiet mountain village with a few houses and terraced fields',
        scene: '왜 이곳에 모여 살까요?', more: [{ motif: 'mountain', x: 110, y: 214 }, { motif: 'house', x: 330, y: 222 }, { motif: 'house', x: 380, y: 222, color: 'sky', s: 0.85 }],
        intro: {
          teacher: '"다솜도의 들빛시에는 160만 명이, 산마루군에는 5만 명이 살아요. 왜 이렇게 다를까요?" 학생이 떠올린 까닭을 칠판에 모은다. 시연 단추로 "넓고 평평한 땅"이 사람이 많은 곳 칸에 놓이는 모습을 보인다. 땅 모양, 일자리, 교통, 학교·병원 같은 것이 사람을 모이게 한다는 것을 사례로 찾아본다고 알린다.',
          student: '사람이 많이 모이는 곳에는 무엇이 있는지 우리 동네를 떠올려 봅시다.',
        },
        acts: [
          { title: '지역과 까닭 이어 보기', tool: 'mindmap',
            task: '지역 모습과 알맞은 인구 분포의 까닭을 이어요.',
            teacher: '"산이 높으면 왜 사는 사람이 적을까요?" 농사지을 땅과 일자리, 길을 내기 어려운 점을 이야기하게 한다. 물결군(바닷가)을 인구가 적은 까닭에 잇는 학생에게는 항구와 수산업 일자리가 있는 곳은 어떤지 되묻는다.',
            items: [
              { prompt: '지역과 알맞은 까닭을 이어 보세요.', toolOptions: { mode: 'match', topic: '지역과 까닭', slots: [{ id: 'm1', label: '들빛시 (넓은 평야, 교통 중심)' }, { id: 'm2', label: '산마루군 (높은 산지)' }, { id: 'm3', label: '물결군 (바닷가 항구)' }], cards: ['일자리와 학교·병원이 많아 사람이 모여요', '땅이 험해 집과 일자리가 적어요', '항구와 수산업 일자리가 있어요'] }, target: { match: { m1: '일자리와 학교·병원이 많아 사람이 모여요', m2: '땅이 험해 집과 일자리가 적어요', m3: '항구와 수산업 일자리가 있어요' } }, difficulty: 0.2 },
              { prompt: '평야 지역에 사람이 모이는 까닭으로 알맞은 것만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '평야에 모이는 까닭', basket: '까닭', cards: ['논밭과 집을 짓기 쉬워요', '길을 내기 쉬워요', '가파른 비탈이 많아요', '눈이 일 년 내내 쌓여요'] }, target: { pick: ['논밭과 집을 짓기 쉬워요', '길을 내기 쉬워요'] }, difficulty: 0.2 },
              { prompt: '산지에 사람이 적은 까닭으로 알맞은 것만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '산지에 적은 까닭', basket: '까닭', cards: ['평평한 땅이 적어요', '학교와 병원이 멀어요', '큰 공장이 많아요', '지하철이 촘촘히 놓여 있어요'] }, target: { pick: ['평평한 땅이 적어요', '학교와 병원이 멀어요'] }, difficulty: 0.25 },
            ] },
          { title: '사람을 모으는 조건 나누기', tool: 'mindmap',
            task: '조건 카드를 사람이 모이게 하는 것과 사람이 떠나게 하는 것으로 나누어요.',
            teacher: '"일자리가 많은 곳과 없는 곳, 어느 쪽에 가족이 살고 싶을까요?" 일자리·학교·병원·교통·문화시설 같은 조건을 이야기하게 한다. 2번 도전 문항에서 "눈이 많이 와요"를 무조건 모이게 하는 조건에 놓는 학생에게는 눈이 사람들의 생활에 주는 어려움을 물어 본다.',
            items: [
              { prompt: '조건 카드를 사람이 모이는 조건과 적어지는 조건으로 나누어 보세요.', toolOptions: { topic: '인구와 조건', slots: ['사람이 모이는 조건', '사람이 적어지는 조건'], cards: ['일자리가 많아요', '학교와 병원이 가까워요', '농사지을 땅이 거의 없어요', '길이 좁고 버스가 드물어요'] }, target: { sort: { '사람이 모이는 조건': ['일자리가 많아요', '학교와 병원이 가까워요'], '사람이 적어지는 조건': ['농사지을 땅이 거의 없어요', '길이 좁고 버스가 드물어요'] } }, difficulty: 0.15 },
              { prompt: '카드 여섯 장을 사람이 모이는 조건과 적어지는 조건으로 나누어 보세요.', toolOptions: { topic: '인구와 조건', slots: ['사람이 모이는 조건', '사람이 적어지는 조건'], cards: ['기차역과 버스터미널이 있어요', '큰 병원이 가까워요', '공장과 회사가 많아요', '일할 곳이 거의 없어요', '학교가 멀어 한 시간을 걸어요', '병원이 없어 아프면 먼 곳으로 가요'] }, target: { sort: { '사람이 모이는 조건': ['기차역과 버스터미널이 있어요', '큰 병원이 가까워요', '공장과 회사가 많아요'], '사람이 적어지는 조건': ['일할 곳이 거의 없어요', '학교가 멀어 한 시간을 걸어요', '병원이 없어 아프면 먼 곳으로 가요'] } }, difficulty: 0.25 },
              { prompt: '인구 분포에 영향을 주는 것만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '인구 분포의 영향', basket: '영향을 줘요', cards: ['땅의 모양', '일자리', '교통', '내가 좋아하는 색', '급식 메뉴'] }, target: { pick: ['땅의 모양', '일자리', '교통'] }, difficulty: 0.2 },
            ] },
        ],
        wrap: {
          teacher: '"사람이 많이 모이는 곳에는 어떤 공통점이 있었나요?" 일자리·교통·학교와 병원이 가까움 같은 조건을 되짚게 한다. 출구 1번에서 바닷가라서 사람이 적다고 답한 학생에게는 항구의 일자리를 다시 떠올리게 한다.',
          exits: [
            { type: 'choice', prompt: '항구가 있는 바닷가 지역에 사람이 사는 까닭으로 알맞은 것은?', options: ['항구와 수산업 일자리가 있어서', '눈이 많이 와서', '산이 높아서'], answer: 0, difficulty: 0.15, explain: '항구에서 일하고 물고기를 잡는 일 같은 일자리가 있어요.' },
            { type: 'choice', prompt: '인구가 많은 곳의 공통점으로 알맞은 것은?', options: ['일자리와 교통이 편리해요', '병원이 하나도 없어요', '집을 지을 땅이 없어요'], answer: 0, difficulty: 0.15, explain: '일자리·교통·학교·병원 같은 조건이 사람을 모이게 해요.' },
            { type: 'choice', prompt: '"산이 높으면 반드시 사람이 살 수 없다"는 알맞은 말일까요?', options: ['아니요, 적게 살 뿐 사는 곳도 있어요', '네, 아무도 살지 않아요'], answer: 0, difficulty: 0.25, explain: '산지에도 마을이 있고, 다만 평야보다 사람이 적게 살아요.' },
            { type: 'mood', prompt: '오늘 까닭 찾기는 어땠나요?' },
          ],
        },
        ws: {
          title: '인구 분포의 까닭 찾기',
          items: [
            { type: 'table', prompt: '지역과 사람이 많거나 적은 까닭을 쓰세요.', columns: ['지역', '사는 사람', '까닭'], cells: [['들빛시', '많아요', ''], ['산마루군', '적어요', '']], answer: '들빛시: 일자리·교통·학교·병원, 산마루군: 땅이 험하고 일자리와 시설이 적음' },
            { type: 'choice', prompt: '사람이 모이는 조건에 ○ 하세요.', options: ['일자리가 많아요', '병원이 멀어요'], answer: '일자리가 많아요' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '넓고 평평한 땅에서는 집과 ___을 짓기 쉬워서 사람이 모여요.', answer: '길' },
            { type: 'choice', prompt: '항구가 있는 지역의 일자리로 알맞은 것은?', options: ['수산업', '눈썰매 대여'], answer: '수산업' },
            { type: 'short', prompt: '우리 동네에 사람이 많이 사는 까닭을 한 가지 생각해 쓰세요.' },
          ],
          easy: { note: '일자리·교통·학교와 병원이 가까우면 사람이 모여요.', items: [
            { type: 'choice', prompt: '사람이 많이 사는 곳에 ○ 하세요.', options: ['일자리가 많은 곳', '일자리가 없는 곳'], answer: '일자리가 많은 곳' },
            { type: 'choice', prompt: '산지에 적은 것에 ○ 하세요.', options: ['평평한 땅', '높은 산'], answer: '평평한 땅' },
            { type: 'blank', prompt: '알맞은 말을 쓰세요.', text: '학교와 병원이 가까우면 사람이 ___ 사는 곳이 돼요.', answer: '많이' },
            { type: 'short', prompt: '내가 좋아하는 우리 동네 장소를 쓰세요.' },
          ] },
        },
        notes: '자주 보이는 어려움: ① 인구가 많고 적은 까닭을 한 가지로만 말한다 → 땅 모양, 일자리, 교통, 시설 네 가지를 함께 말하도록 한다. ② 산지에는 사람이 전혀 살지 않는다고 말한다 → 적게 사는 것이지 없는 것이 아니라고 짚는다. ③ 지어낸 다솜도의 사례를 우리나라 모든 지역에 그대로 적용한다 → 지어낸 사례에서 발견한 조건이 실제 지역에서도 맞는지 실제 자료로 확인해 보자고 말한다.',
      }),
      // ───────────────────────── 11차시 ─────────────────────────
      mk(11, {
        title: '도시로 가는 까닭과 촌락을 떠나는 까닭 나누기',
        objective: '인구 이동의 원인을 도시로 이끄는 까닭과 촌락을 떠나는 까닭으로 나누어 설명할 수 있다.',
        std: S2,
        ill: 'a family loading a moving truck in a quiet farming village while tall city buildings with lit windows glow in the distance',
        scene: '왜 도시로 이사 갈까요?', more: [{ motif: 'house', x: 110, y: 222 }, { motif: 'tree', x: 170, y: 214 }, { motif: 'house', x: 330, y: 220, color: 'sky' }, { motif: 'star', x: 400, y: 100 }],
        intro: {
          teacher: '"전학 온 친구나 이사 간 친구를 떠올려 보세요. 사람들은 왜 사는 곳을 옮길까요?" 학생의 경험을 모은 뒤, 사람들이 일자리나 학교, 병원을 찾아 옮겨 간다는 것을 정리한다. 시연 단추로 "일자리가 많아요" 카드가 도시로 이끄는 까닭 칸에 놓이는 모습을 보인다. 이렇게 사람이 사는 곳을 옮기는 것을 인구 이동이라고 부른다고 알려 준다.',
          student: '이사를 간 적이 있다면 그 까닭을, 없다면 이사를 가는 사람들의 까닭을 떠올려 봅시다.',
        },
        acts: [
          { title: '이끄는 까닭과 떠나는 까닭', tool: 'mindmap',
            task: '카드를 도시로 이끄는 까닭과 촌락을 떠나는 까닭으로 나누어요.',
            teacher: '"도시에 일자리가 많아서 가는 것과 촌락에 일자리가 없어서 떠나는 것은 같은 말일까요?" 두 까닭은 같은 일의 앞면과 뒷면처럼 이어져 있지만 따로 생각할 수 있음을 짚는다. "공기가 맑아요"를 도시로 이끄는 까닭에 놓는 학생에게는 도시와 촌락 가운데 어느 쪽 이야기인지 묻는다.',
            items: [
              { prompt: '카드를 도시로 이끄는 까닭과 촌락을 떠나는 까닭으로 나누어 보세요.', toolOptions: { topic: '인구 이동', slots: ['도시로 이끄는 까닭', '촌락을 떠나는 까닭'], cards: ['일자리가 많아요', '큰 병원과 학교가 있어요', '일할 곳이 부족해요', '병원이 멀어 불편해요'] }, target: { sort: { '도시로 이끄는 까닭': ['일자리가 많아요', '큰 병원과 학교가 있어요'], '촌락을 떠나는 까닭': ['일할 곳이 부족해요', '병원이 멀어 불편해요'] } }, difficulty: 0.15 },
              { prompt: '카드 여섯 장을 도시로 이끄는 까닭과 촌락을 떠나는 까닭으로 나누어 보세요.', toolOptions: { topic: '인구 이동', slots: ['도시로 이끄는 까닭', '촌락을 떠나는 까닭'], cards: ['문화 공연과 도서관이 많아요', '다양한 학원과 대학이 있어요', '버스가 하루에 몇 번뿐이에요', '같은 또래 친구가 적어요', '직장과 가게가 많아요', '농사일이 힘들어 일할 사람이 줄었어요'] }, target: { sort: { '도시로 이끄는 까닭': ['문화 공연과 도서관이 많아요', '다양한 학원과 대학이 있어요', '직장과 가게가 많아요'], '촌락을 떠나는 까닭': ['버스가 하루에 몇 번뿐이에요', '같은 또래 친구가 적어요', '농사일이 힘들어 일할 사람이 줄었어요'] } }, difficulty: 0.25 },
              { prompt: '도시로 이끄는 까닭만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '이끄는 까닭', basket: '이끄는 까닭', cards: ['다양한 일자리가 있어요', '교통이 편리해요', '병원이 하나도 없어요', '학교가 사라졌어요'] }, target: { pick: ['다양한 일자리가 있어요', '교통이 편리해요'] }, difficulty: 0.2 },
            ] },
          { title: '인구 이동이 가져온 모습 순서 놓기', tool: 'mindmap',
            task: '인구 이동이 일어난 뒤 도시와 촌락에서 이어지는 일을 차례대로 놓아요.',
            teacher: '"젊은 사람이 떠난 뒤 촌락에서는 무슨 일이 이어질까요?" 인구가 줄면 아이도 줄고, 학교와 가게가 줄어드는 연쇄를 말로 이어 보게 한다. 순서가 뒤바뀐 학생에게 "학교가 문을 닫기 전에 먼저 일어난 일은 무엇일까요?"라고 묻는다.',
            items: [
              { prompt: '촌락에서 이어지는 일을 차례대로 놓아 보세요.', toolOptions: { mode: 'order', topic: '촌락의 변화', slots: ['첫째', '둘째', '셋째', '넷째'], cards: ['일자리를 찾아 젊은 사람이 도시로 가요', '마을에 아이들이 줄어요', '학교의 학급 수가 줄어요', '가게와 병원이 문을 닫아요'] }, target: { order: ['일자리를 찾아 젊은 사람이 도시로 가요', '마을에 아이들이 줄어요', '학교의 학급 수가 줄어요', '가게와 병원이 문을 닫아요'] }, difficulty: 0.25 },
              { prompt: '도시에서 이어지는 일을 차례대로 놓아 보세요.', toolOptions: { mode: 'order', topic: '도시의 변화', slots: ['첫째', '둘째', '셋째'], cards: ['일자리를 찾아 많은 사람이 모여요', '집이 모자라 집값이 올라요', '길이 막히고 학교가 붐벼요'] }, target: { order: ['일자리를 찾아 많은 사람이 모여요', '집이 모자라 집값이 올라요', '길이 막히고 학교가 붐벼요'] }, difficulty: 0.25 },
              { prompt: '촌락의 인구가 줄면 생기는 일만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '촌락 변화', basket: '촌락 변화', cards: ['빈집이 늘어요', '농사지을 일손이 줄어요', '도로가 늘 막혀요', '아파트가 계속 늘어요'] }, target: { pick: ['빈집이 늘어요', '농사지을 일손이 줄어요'] }, difficulty: 0.25 },
            ] },
        ],
        wrap: {
          teacher: '"사람들이 사는 곳을 옮기면 도시와 촌락에는 각각 어떤 모습이 생기나요?" 도시는 사람이 모여 붐비는 모습, 촌락은 사람이 줄어 조용해지는 모습이라는 대비를 말하게 한다. 출구 3번을 헷갈린 학생에게는 일자리가 한쪽에 몰렸을 때 사람이 어느 쪽으로 움직이는지 다시 묻는다.',
          exits: [
            { type: 'choice', prompt: '"일자리가 많아요"는 어느 쪽 까닭인가요?', options: ['도시로 이끄는 까닭', '촌락을 떠나는 까닭'], answer: 0, difficulty: 0.1, explain: '일자리가 많은 도시로 사람들이 모여요.' },
            { type: 'choice', prompt: '촌락에서 학생이 줄면 이어서 생길 수 있는 일은?', options: ['학교의 학급 수가 줄어요', '학교가 더 커져요', '운동장이 더 붐벼요'], answer: 0, difficulty: 0.15, explain: '아이들이 줄면 학급 수도 줄고 학교가 문을 닫을 수 있어요.' },
            { type: 'choice', prompt: '사람이 사는 곳을 옮기는 것을 무엇이라고 하나요?', options: ['인구 이동', '인구 분포', '기후 변화'], answer: 0, difficulty: 0.2, explain: '사람들이 사는 곳을 옮기는 것을 인구 이동이라고 해요.' },
            { type: 'mood', prompt: '오늘 인구 이동 공부는 어땠나요?' },
          ],
        },
        ws: {
          title: '사람은 왜 사는 곳을 옮길까',
          items: [
            { type: 'table', prompt: '도시로 이끄는 까닭과 촌락을 떠나는 까닭을 한 가지씩 쓰세요.', columns: ['구분', '까닭'], cells: [['도시로 이끄는 까닭', ''], ['촌락을 떠나는 까닭', '']], answer: '도시: 일자리가 많아요, 촌락: 병원이 멀어요(예)' },
            { type: 'choice', prompt: '촌락을 떠나는 까닭에 ○ 하세요.', options: ['일할 곳이 부족해요', '일자리가 많아요'], answer: '일할 곳이 부족해요' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '사람들이 사는 곳을 옮기는 것을 ___ ___이라고 해요.', answer: '인구 이동' },
            { type: 'choice', prompt: '도시에 사람이 너무 많이 모이면 생길 수 있는 일은?', options: ['집이 모자라고 길이 막혀요', '학교가 문을 닫아요'], answer: '집이 모자라고 길이 막혀요' },
            { type: 'short', prompt: '내 주변에서 이사를 간 사람의 까닭을 생각해 쓰세요(이름은 쓰지 않아요).' },
          ],
          easy: { note: '일자리와 병원, 학교를 찾아 사람이 옮겨 가요.', items: [
            { type: 'choice', prompt: '도시로 이끄는 까닭에 ○ 하세요.', options: ['일자리가 많아요', '병원이 멀어요'], answer: '일자리가 많아요' },
            { type: 'choice', prompt: '촌락에서 학생이 줄면 학교는 어떻게 될까요?', options: ['학급 수가 줄어요', '더 커져요'], answer: '학급 수가 줄어요' },
            { type: 'blank', prompt: '알맞은 말을 쓰세요.', text: '사람이 많이 모인 곳은 ___가 붐벼요.', answer: '길' },
            { type: 'short', prompt: '이사를 간다면 가고 싶은 곳과 까닭을 쓰세요.' },
          ] },
        },
        notes: '자주 보이는 어려움: ① 인구 이동의 까닭을 한 사람의 취향으로만 설명한다 → 일자리·병원·학교 같은 조건을 먼저 짚는다. ② 도시와 촌락 가운데 한쪽만 나쁜 곳으로 말한다 → 도시에도 집값·교통 문제가 생긴다고 함께 이야기한다. ③ 개인 이사 사례를 말할 때 이름이나 사는 곳을 자세히 말한다 → 이름 없이 "한 가족" 정도로만 말한다.',
      }),
      // ───────────────────────── 12차시 ─────────────────────────
      mk(12, {
        title: '지역별 인구 그림그래프 그리고 읽기',
        objective: '지역별 인구 표를 그림그래프로 나타내고 그래프에서 인구가 많은 지역과 적은 지역을 찾아 사실 문장으로 말할 수 있다.',
        std: S2,
        ill: 'a large paper picture graph with rows of little person icons in different sizes next to a table of regional populations',
        scene: '사람 그림으로 인구를 나타내요', more: [{ motif: 'house', x: 130, y: 222 }, { motif: 'house', x: 200, y: 224, color: 'sky', s: 0.8 }, { motif: 'tree', x: 350, y: 214 }],
        intro: {
          teacher: '"숫자가 크면 한눈에 비교하기 어려운데, 어떻게 나타내면 좋을까요?" 사람 그림 하나가 여러 명을 뜻하는 그림그래프를 소개한다. 큰 그림은 50만 명, 중간 그림은 10만 명, 작은 그림은 5만 명이라는 약속을 먼저 읽게 한다. 시연 단추로 한 줄이 그려지는 모습을 보인다. 다솜도 자료는 지어낸 값이다.',
          student: '큰 그림, 중간 그림, 작은 그림이 각각 몇 만 명을 뜻하는지 먼저 읽어 봅시다.',
        },
        acts: [
          { title: '표를 그림그래프로 그리기', tool: 'chart',
            task: '큰 그림은 50만 명, 중간 그림은 10만 명, 작은 그림은 5만 명이에요. 표의 수만큼 그림을 늘려요.',
            teacher: '"160만 명은 큰 그림 몇 개와 중간 그림 몇 개일까요?" 큰 그림부터 채우고 남는 수를 중간·작은 그림으로 채우는 순서를 말하게 한다. 중간 그림을 50만 명으로 읽는 학생에게 범례의 그림 이름을 다시 읽게 한다.',
            items: [
              { prompt: '표를 보고 그림그래프를 완성해 보세요. 들빛시와 햇볕시는 이미 그려 있어요.', toolOptions: { type: 'picture', title: '다솜도 지역별 인구', data: POP_D, unit: '만 명', xLabel: '지역', icon: 'person', icons: [{ value: 50, name: '50만 명' }, { value: 10, name: '10만 명' }, { value: 5, name: '5만 명' }], given: [2, 4] }, target: { build: true }, difficulty: 0.25 },
              { prompt: '산마루군·새벌시·물결군의 그림을 그려 보세요. 나머지는 이미 그려 있어요.', toolOptions: { type: 'picture', title: '다솜도 지역별 인구', data: POP_D, unit: '만 명', xLabel: '지역', icon: 'person', icons: [{ value: 50, name: '50만 명' }, { value: 10, name: '10만 명' }, { value: 5, name: '5만 명' }], given: [2, 4, 5] }, target: { build: true }, difficulty: 0.25 },
              { prompt: '들빛시 그림 한 줄만 그려 보세요. 나머지는 이미 그려 있어요.', toolOptions: { type: 'picture', title: '다솜도 지역별 인구', data: POP_D, unit: '만 명', xLabel: '지역', icon: 'person', icons: [{ value: 50, name: '50만 명' }, { value: 10, name: '10만 명' }, { value: 5, name: '5만 명' }], given: [0, 1, 3, 4, 5] }, target: { build: true }, difficulty: 0.2 },
            ] },
          { title: '막대그래프로 읽기', tool: 'chart',
            task: '인구 막대그래프를 읽고 답해요. 눈금 한 칸은 20만 명이에요.',
            teacher: '"그림그래프와 막대그래프는 무엇이 다르고 무엇이 같을까요?" 값을 길이로 나타내는지 그림 개수로 나타내는지가 다르고, 두 그래프 모두 큰 값을 한눈에 찾기 쉽다는 점은 같다고 정리한다. 3번에서 두 지역의 합을 구하다가 한 값을 빠뜨리는 학생에게 두 막대를 번갈아 짚게 한다.',
            items: [
              { prompt: '인구가 가장 많은 지역을 골라 보세요.', toolOptions: { type: 'bar', mode: 'read', title: '다솜도 지역별 인구', data: POP_D, unit: '만 명', scale: 20, xLabel: '지역', choices: ['새벌시', '들빛시', '햇볕시'], why: ['새벌시보다 긴 막대가 있어요.', null, '햇볕시보다 긴 막대가 하나 더 있어요.'] }, target: { pick: 1 }, difficulty: 0.1 },
              { prompt: '물결군의 인구는 몇 만 명인지 쓰세요.', toolOptions: { type: 'bar', mode: 'read', title: '다솜도 지역별 인구', data: POP_D, unit: '만 명', scale: 5, xLabel: '지역', question: '물결군의 인구는 몇 만 명인가요?' }, target: { value: 15 }, difficulty: 0.25 },
              { prompt: '새벌시와 햇볕시의 인구를 합하면 몇 만 명인지 쓰세요.', toolOptions: { type: 'bar', mode: 'read', title: '다솜도 지역별 인구', data: POP_D, unit: '만 명', scale: 10, xLabel: '지역', question: '새벌시와 햇볕시의 인구를 합하면 몇 만 명인가요?' }, target: { value: 110 }, difficulty: 0.3 },
            ] },
          { title: '그래프로 알 수 있는 말 고르기', tool: 'mindmap',
            task: '그래프의 값으로 확인할 수 있는 말과 짐작을 나누어요.',
            teacher: '"들빛시에 사람이 많다는 것은 그래프로 알 수 있어요. 그런데 왜 많은지도 알 수 있을까요?" 그래프로는 많고 적음(사실)을 알 수 있고 까닭은 다른 자료가 더 필요한 짐작이라는 것을 짚는다. "공장이 많아서"를 사실 칸에 놓는 학생에게는 그래프 어디에 공장이 나오는지 묻는다.',
            items: [
              { prompt: '문장을 그래프로 알 수 있는 사실과 짐작으로 나누어 보세요.', toolOptions: { topic: '인구 그래프', slots: ['그래프로 알 수 있는 사실', '더 알아봐야 하는 짐작'], cards: ['들빛시 인구가 가장 많아요', '산마루군 인구가 가장 적어요', '들빛시에 큰 회사가 많을 거예요', '산마루군은 길이 좁아서 사람이 적을 거예요'] }, target: { sort: { '그래프로 알 수 있는 사실': ['들빛시 인구가 가장 많아요', '산마루군 인구가 가장 적어요'], '더 알아봐야 하는 짐작': ['들빛시에 큰 회사가 많을 거예요', '산마루군은 길이 좁아서 사람이 적을 거예요'] } }, difficulty: 0.2 },
              { prompt: '그래프로 확인할 수 있는 문장과 알맞은 근거를 이어 보세요.', toolOptions: { mode: 'match', topic: '문장과 근거', slots: [{ id: 'm1', label: '햇볕시는 새벌시보다 인구가 많아요' }, { id: 'm2', label: '들빛시는 산마루군의 32배예요' }], cards: ['햇볕시 70만 명, 새벌시 40만 명', '들빛시 160만 명, 산마루군 5만 명', '새벌시는 산 가까이 있어요'] }, target: { match: { m1: '햇볕시 70만 명, 새벌시 40만 명', m2: '들빛시 160만 명, 산마루군 5만 명' } }, difficulty: 0.3 },
              { prompt: '그래프로 확인할 수 있는 문장만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '확인할 수 있어요', basket: '확인할 수 있어요', cards: ['남바다군은 인구가 10만 명이에요', '물결군은 새벌시보다 인구가 적어요', '남바다군은 살기 좋아요', '산마루군에는 눈이 많이 와요'] }, target: { pick: ['남바다군은 인구가 10만 명이에요', '물결군은 새벌시보다 인구가 적어요'] }, difficulty: 0.25 },
            ] },
        ],
        wrap: {
          teacher: '"그림그래프에서 그림 하나가 몇 명을 뜻하는지 어디에서 알 수 있나요?" 그림 이름(범례)을 먼저 읽는 습관을 다시 말하게 한다. 출구 2번에서 값을 덧셈이 아니라 하나만 읽은 학생에게는 두 막대를 번갈아 짚으며 합을 구하게 한다.',
          exits: [
            { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '다솜도 지역별 인구', data: POP_D, unit: '만 명', scale: 20, xLabel: '지역', choices: ['물결군', '산마루군', '남바다군'], why: ['물결군보다 짧은 막대가 있어요.', null, '남바다군은 산마루군보다 길어요.'] }, prompt: '인구가 가장 적은 지역을 골라 보세요.', target: { pick: 1 }, difficulty: 0.15 },
            { type: 'choice', prompt: '큰 그림 3개와 중간 그림 1개는 몇 만 명인가요? (큰 그림 50만 명, 중간 그림 10만 명)', options: ['160만 명', '130만 명', '310만 명'], answer: 0, difficulty: 0.25, explain: '50 × 3 = 150에 10을 더해 160만 명이에요.' },
            { type: 'choice', prompt: '그래프로 알 수 있는 것은 무엇인가요?', options: ['어느 지역에 사람이 많고 적은지', '그 지역의 날씨', '지역의 이름이 지어진 까닭'], answer: 0, difficulty: 0.15, explain: '인구 그래프는 지역마다 사람 수가 얼마나 다른지 보여 줘요.' },
            { type: 'mood', prompt: '오늘 그래프 그리기는 어땠나요?' },
          ],
        },
        ws: {
          title: '다솜도 인구 자료 읽기',
          items: [
            { type: 'table', prompt: '인구 표를 완성하세요.', columns: ['지역', '인구(만 명)'], cells: [['산마루군', '5'], ['새벌시', ''], ['들빛시', ''], ['물결군', ''], ['햇볕시', ''], ['남바다군', '']], answer: '새벌시 40, 들빛시 160, 물결군 15, 햇볕시 70, 남바다군 10' },
            { type: 'blank', prompt: '표를 보고 빈칸에 알맞은 말을 쓰세요.', text: '인구가 가장 많은 지역은 ___이고, 가장 적은 지역은 ___이에요.', answer: '들빛시, 산마루군' },
            { type: 'blank', prompt: '두 지역의 인구를 합하세요.', text: '새벌시 40 + 물결군 15 = ___ (만 명)', answer: '55' },
            { type: 'choice', prompt: '그림그래프에서 큰 그림이 50만 명일 때 큰 그림 2개는 몇 만 명인가요?', options: ['100만 명', '52만 명', '25만 명'], answer: '100만 명' },
            { type: 'short', prompt: '이 자료로 다솜도의 인구 분포를 한 문장으로 설명해 쓰세요.' },
          ],
          easy: { note: '그림 하나가 몇 명을 뜻하는지 먼저 읽어요.', items: [
            { type: 'table', prompt: '표를 완성하세요.', columns: ['지역', '인구(만 명)'], cells: [['들빛시', '160'], ['햇볕시', ''], ['남바다군', '']], answer: '햇볕시 70, 남바다군 10' },
            { type: 'choice', prompt: '인구가 더 많은 곳에 ○ 하세요.', options: ['햇볕시', '남바다군'], answer: '햇볕시' },
            { type: 'blank', prompt: '알맞은 수를 쓰세요.', text: '50 + 50 = ___ (만 명)', answer: '100' },
            { type: 'short', prompt: '그래프에서 알게 된 것 한 가지를 쓰세요.' },
          ] },
        },
        notes: '자주 보이는 어려움: ① 그림 하나를 1명으로 읽는다 → 그림 이름(범례)을 먼저 읽게 한다. ② 중간 그림과 작은 그림의 크기를 헷갈린다 → 큰 그림부터 채우고 남는 수를 중간·작은 그림 순으로 채운다. ③ 그래프의 짐작을 사실로 말한다 → 그래프에 나온 숫자가 근거인지 묻는다. 값은 모두 지어낸 것이다.',
      }),
      // ───────────────────────── 13차시 ─────────────────────────
      mk(13, {
        title: '은행마을 인구 변화 꺾은선그래프 읽기',
        objective: '꺾은선그래프로 한 마을의 인구가 해마다 어떻게 변했는지 읽고 변화의 모습을 문장으로 말할 수 있다.',
        std: S2,
        ill: 'a line graph on a classroom board showing a steadily falling line, beside a small hillside village with ginkgo trees and fewer lit windows',
        scene: '은행마을 인구는 어떻게 변했을까요?', more: [{ motif: 'tree', x: 110, y: 214, color: 'buttercup' }, { motif: 'tree', x: 160, y: 218, color: 'buttercup', s: 0.85 }, { motif: 'house', x: 330, y: 222 }],
        intro: {
          teacher: '"우리 동네의 학생 수가 몇 년 전과 같을까요, 달라졌을까요?" 시간이 지나며 달라지는 수를 보여 줄 때는 점을 이은 꺾은선그래프가 알맞다고 알린다. 시연 단추로 점이 하나씩 찍히고 선이 이어지는 모습을 보인다. 은행마을(지어낸 산골 마을)의 인구 값은 모두 지어낸 것이라고 알린다.',
          student: '선이 오른쪽 아래로 내려가면 무엇이 줄어든다는 뜻일지 생각해 봅시다.',
        },
        acts: [
          { title: '꺾은선그래프 이어 그리기', tool: 'chart',
            task: '점에 Tab으로 가서 ↑·↓ 키로 높이를 맞춰요. 눈금 한 칸은 100명이에요.',
            teacher: '"점을 찍은 뒤 선은 어떻게 이을까요?" 점을 차례대로 잇는다고 알려 주고, 그린 점이 눈금의 어느 줄 사이에 놓이는지 읽게 한다. 2005년 380명을 400명 줄에 맞추는 학생에게는 400과 300 사이에서 어디쯤인지 눈금을 짚게 한다.',
            items: [
              { prompt: '표를 보고 꺾은선그래프를 완성해 보세요. 앞의 네 해는 이미 그려 있어요.', toolOptions: { type: 'line', title: '은행마을 인구', data: POP_YEAR, unit: '명', scale: 100, step: 10, xLabel: '해', yLabel: '인구', given: [0, 1, 2, 3] }, target: { build: true }, difficulty: 0.25 },
              { prompt: '표를 보고 2000년과 2025년의 점만 찍어 보세요. 나머지는 이미 그려 있어요.', toolOptions: { type: 'line', title: '은행마을 인구', data: POP_YEAR, unit: '명', scale: 100, step: 10, xLabel: '해', yLabel: '인구', given: [1, 2, 3, 4] }, target: { build: true }, difficulty: 0.25 },
              { prompt: '2010년과 2015년의 점을 찍어 보세요. 나머지는 이미 그려 있어요.', toolOptions: { type: 'line', title: '은행마을 인구', data: POP_YEAR, unit: '명', scale: 100, step: 10, xLabel: '해', yLabel: '인구', given: [0, 1, 4, 5] }, target: { build: true }, difficulty: 0.25 },
            ] },
          { title: '꺾은선그래프 읽기', tool: 'chart',
            task: '그래프의 점과 선을 보고 질문에 답해요.',
            teacher: '"선이 내려가는 곳은 무엇이 줄어드는 곳일까요?" 선의 기울기가 변화의 방향(줄어듦)을 보여 준다는 것을 짚는다. 3번에서 가장 큰 폭으로 줄어든 구간을 고르려는 학생이 있으면 구간별로 뺄셈을 해서 근거를 말하게 한다.',
            items: [
              { prompt: '인구가 가장 많았던 해를 골라 보세요.', toolOptions: { type: 'line', mode: 'read', title: '은행마을 인구', data: POP_YEAR, unit: '명', scale: 100, xLabel: '해', choices: ['2000년', '2010년', '2025년'], why: [null, '2010년보다 더 높은 점이 있어요.', '2025년은 가장 낮은 점이에요.'] }, target: { pick: 0 }, difficulty: 0.1 },
              { prompt: '2015년의 인구는 몇 명인지 쓰세요.', toolOptions: { type: 'line', mode: 'read', title: '은행마을 인구', data: POP_YEAR, unit: '명', scale: 10, xLabel: '해', question: '2015년의 인구는 몇 명인가요?' }, target: { value: 270 }, difficulty: 0.2 },
              { prompt: '인구가 처음으로 300명보다 적어진 해를 골라 보세요.', toolOptions: { type: 'line', mode: 'read', title: '은행마을 인구', data: POP_YEAR, unit: '명', scale: 50, xLabel: '해', choices: ['2010년', '2015년', '2020년'], why: ['2010년은 330명이라 300명보다 많아요.', null, '그보다 앞에 이미 300명보다 적어진 해가 있어요.'] }, target: { pick: 1 }, difficulty: 0.3 },
            ] },
          { title: '인구 변화가 가져오는 모습', tool: 'mindmap',
            task: '그래프의 사실과 짐작을 나누고, 인구 변화로 달라지는 모습을 이어요.',
            teacher: '"인구가 줄었다는 것은 그래프로 알 수 있어요. 그런데 왜 줄었는지도 알 수 있을까요?" 까닭은 그래프에 없어서 다른 자료(일자리, 학교, 병원)가 더 필요한 짐작이라는 것을 짚는다. 3번에서 "가게"와 "학교"를 바꿔 잇는 학생에게는 아이들이 줄면 먼저 어느 곳이 달라지는지 물어 본다.',
            items: [
              { prompt: '문장을 그래프로 알 수 있는 사실과 짐작으로 나누어 보세요.', toolOptions: { topic: '인구 변화', slots: ['그래프로 알 수 있는 사실', '더 알아봐야 하는 짐작'], cards: ['2025년 인구는 2000년의 절반보다 적어요', '인구는 계속 줄었어요', '일자리가 없어서 줄었을 거예요', '앞으로도 줄어들 거예요'] }, target: { sort: { '그래프로 알 수 있는 사실': ['2025년 인구는 2000년의 절반보다 적어요', '인구는 계속 줄었어요'], '더 알아봐야 하는 짐작': ['일자리가 없어서 줄었을 거예요', '앞으로도 줄어들 거예요'] } }, difficulty: 0.2 },
              { prompt: '인구가 줄 때 달라지는 곳과 알맞은 변화를 이어 보세요.', toolOptions: { mode: 'match', topic: '인구 감소와 변화', slots: [{ id: 'm1', label: '학교' }, { id: 'm2', label: '가게' }, { id: 'm3', label: '집' }], cards: ['학생이 줄어 학급 수가 줄어요', '손님이 줄어 문을 닫아요', '사는 사람이 없어 빈집이 늘어요'] }, target: { match: { m1: '학생이 줄어 학급 수가 줄어요', m2: '손님이 줄어 문을 닫아요', m3: '사는 사람이 없어 빈집이 늘어요' } }, difficulty: 0.2 },
              { prompt: '그래프의 점과 선으로 확인할 수 있는 문장만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '확인할 수 있어요', basket: '확인할 수 있어요', cards: ['2010년 인구는 330명이에요', '2020년 인구는 2015년보다 적어요', '마을 사람들은 도시를 좋아해요', '내년에는 150명이 될 거예요'] }, target: { pick: ['2010년 인구는 330명이에요', '2020년 인구는 2015년보다 적어요'] }, difficulty: 0.25 },
            ] },
        ],
        wrap: {
          teacher: '"시간에 따라 달라지는 수를 보여 줄 때 왜 꺾은선그래프를 쓰나요?" 점을 이은 선의 오르내림으로 변화의 모습이 한눈에 보인다고 말하게 한다. 출구 2번에서 변화를 "선이 올라갔다"고 말한 학생에게는 선이 오른쪽으로 갈수록 내려가는 것을 다시 짚는다.',
          exits: [
            { type: 'tool', tool: 'chart', options: { type: 'line', mode: 'read', title: '은행마을 인구', data: POP_YEAR, unit: '명', scale: 10, xLabel: '해', question: '2020년의 인구는 몇 명인가요?' }, prompt: '꺾은선그래프에서 2020년의 인구를 쓰세요.', target: { value: 210 }, difficulty: 0.25 },
            { type: 'choice', prompt: '꺾은선이 오른쪽 아래로 내려가면 무슨 뜻인가요?', options: ['값이 줄어들어요', '값이 늘어나요', '값이 그대로예요'], answer: 0, difficulty: 0.1, explain: '선이 내려가면 그 값이 시간이 지나며 줄어드는 거예요.' },
            { type: 'choice', prompt: '그래프로 알 수 있는 것은 어느 쪽인가요?', options: ['해마다 인구가 줄었다는 것', '마을이 줄어든 까닭이 무엇인지'], answer: 0, difficulty: 0.2, explain: '그래프는 변화의 모습을 보여 주고, 까닭은 다른 자료로 알아봐야 해요.' },
            { type: 'mood', prompt: '오늘 꺾은선그래프 읽기는 어땠나요?' },
          ],
        },
        ws: {
          title: '은행마을 인구 변화 읽기',
          items: [
            { type: 'table', prompt: '인구 표를 완성하세요.', columns: ['해', '인구(명)'], cells: [['2000년', '420'], ['2010년', ''], ['2020년', ''], ['2025년', '']], answer: '2010 330, 2020 210, 2025 170' },
            { type: 'blank', prompt: '표를 보고 빈칸에 알맞은 수를 쓰세요.', text: '2000년과 2025년의 인구 차: 420 − 170 = ___ (명)', answer: '250' },
            { type: 'choice', prompt: '선이 오른쪽으로 갈수록 내려가요. 마을 인구는 어떻게 변했나요?', options: ['줄었어요', '늘었어요'], answer: '줄었어요' },
            { type: 'choice', prompt: '그래프로 확인할 수 있는 말에 ○ 하세요.', options: ['2020년 인구는 2010년보다 적어요', '이 마을은 살기 힘든 곳이에요'], answer: '2020년 인구는 2010년보다 적어요' },
            { type: 'short', prompt: '인구가 줄 때 학교나 가게에서 일어날 수 있는 일을 한 가지 쓰세요.' },
          ],
          easy: { note: '선이 내려가면 값이 줄어든 거예요.', items: [
            { type: 'table', prompt: '표를 완성하세요.', columns: ['해', '인구(명)'], cells: [['2000년', '420'], ['2025년', '']], answer: '170' },
            { type: 'choice', prompt: '인구가 더 많았던 해에 ○ 하세요.', options: ['2000년', '2025년'], answer: '2000년' },
            { type: 'blank', prompt: '알맞은 말을 쓰세요.', text: '은행마을 인구는 계속 ___었어요.', answer: '줄' },
            { type: 'short', prompt: '그래프를 보고 알게 된 것을 한 줄 쓰세요.' },
          ] },
        },
        notes: '자주 보이는 어려움: ① 눈금 한 칸을 1명으로 읽는다 → 눈금 한 칸이 100명이라고 먼저 읽게 한다. ② 점을 이을 때 눈금 사이 값을 잘못 읽는다 → 두 눈금 사이 어디쯤인지 손가락으로 짚게 한다. ③ 인구가 줄어든 까닭을 그래프에서 읽었다고 말한다 → 그래프는 변화의 모습만 보여 준다고 짚는다. 값은 모두 지어낸 것이다.',
      }),
      // ───────────────────────── 14차시 ─────────────────────────
      mk(14, {
        title: '지역별 65세 이상 인구 비율 표와 그래프 풀어 읽기',
        objective: '표와 막대그래프를 함께 보며 지역별 65세 이상 인구 비율의 차이를 읽고 그 차이가 지역에 주는 영향을 생각해 말할 수 있다.',
        std: S2,
        ill: 'three paper-cut neighborhoods side by side, a busy downtown, a seaside village and a quiet mountain village, with bar charts of elderly share above them',
        scene: '지역마다 어르신 비율이 달라요', more: [{ motif: 'house', x: 110, y: 222 }, { motif: 'house', x: 250, y: 222, color: 'sky' }, { motif: 'mountain', x: 380, y: 214, s: 0.8 }],
        intro: {
          teacher: '"우리 동네에는 할머니·할아버지가 많이 사시나요? 다른 동네는 어떨까요?" 학생이 아는 경험을 가볍게 말한 뒤, 65세 이상 사람이 전체 인구에서 차지하는 몫을 비율(%)로 나타낸 자료를 본다고 알린다. 지어낸 세 지역의 값이며, 특정 연령 집단에 대한 편견 없이 숫자와 필요한 도움만 이야기하자고 약속한다.',
          student: '65세 이상 어르신이 많은 지역에서 필요한 것은 무엇일지 생각해 봅시다.',
        },
        acts: [
          { title: '비율 막대그래프 읽기', tool: 'chart',
            task: '막대는 65세 이상 사람의 비율(%)이에요. 눈금 한 칸은 10%예요.',
            teacher: '"41%는 어떤 뜻일까요?" 그 지역 사람 100명 가운데 약 41명이 65세 이상이라는 뜻이라고 쉽게 풀어 준다. 인구가 많은 곳에서 어르신도 가장 많다고 생각하는 학생에게는 그래프에 인구 수가 아니라 비율이 나와 있다는 점을 짚는다.',
            items: [
              { prompt: '65세 이상 인구 비율이 가장 높은 지역을 골라 보세요.', toolOptions: { type: 'bar', mode: 'read', title: '65세 이상 인구 비율', data: OLD, unit: '%', scale: 10, xLabel: '지역', choices: ['들빛시 도심', '물결군 바닷가', '산마루군 산골'], why: ['들빛시 도심은 가장 낮은 막대예요.', '물결군보다 더 긴 막대가 있어요.', null] }, target: { pick: 2 }, difficulty: 0.1 },
              { prompt: '물결군 바닷가의 65세 이상 인구 비율은 몇 %인지 쓰세요.', toolOptions: { type: 'bar', mode: 'read', title: '65세 이상 인구 비율', data: OLD, unit: '%', scale: 5, xLabel: '지역', question: '물결군 바닷가의 비율은 몇 %인가요?' }, target: { value: 29 }, difficulty: 0.25 },
              { prompt: '산마루군 산골의 비율은 들빛시 도심보다 몇 %p 높은지 쓰세요.', toolOptions: { type: 'bar', mode: 'read', title: '65세 이상 인구 비율', data: OLD, unit: '%', scale: 5, xLabel: '지역', question: '산마루군 산골은 들빛시 도심보다 몇 %p 더 높은가요?' }, target: { value: 27 }, difficulty: 0.3 },
            ] },
          { title: '표 빈칸을 그래프 보고 채우기', tool: 'chart',
            task: '막대그래프를 보고 표의 빈칸에 알맞은 수를 써요.',
            teacher: '"표와 그래프는 같은 자료를 어떻게 다르게 보여 줄까요?" 표는 정확한 수, 그래프는 크고 작음을 한눈에 보여 준다고 정리한다. 빈칸에 막대 눈금이 아니라 순서(1, 2, 3)를 쓰는 학생에게는 칸 제목이 무엇인지 다시 읽게 한다.',
            items: [
              { prompt: '그래프를 보고 표의 빈칸 두 곳을 채워 보세요.', toolOptions: { type: 'bar', mode: 'read', title: '65세 이상 인구 비율', data: OLD, unit: '%', scale: 5, xLabel: '지역', tableBlanks: [0, 2], showTable: true }, target: { table: true }, difficulty: 0.3 },
              { prompt: '그래프를 보고 표의 빈칸 한 곳을 채워 보세요.', toolOptions: { type: 'bar', mode: 'read', title: '65세 이상 인구 비율', data: OLD, unit: '%', scale: 5, xLabel: '지역', tableBlanks: [1], showTable: true }, target: { table: true }, difficulty: 0.25 },
              { prompt: '세 지역의 비율 가운데 가장 낮은 값을 쓰세요.', toolOptions: { type: 'bar', mode: 'read', title: '65세 이상 인구 비율', data: OLD, unit: '%', scale: 5, xLabel: '지역', question: '가장 낮은 비율은 몇 %인가요?' }, target: { value: 14 }, difficulty: 0.2 },
            ] },
          { title: '필요한 도움 생각하기', tool: 'mindmap',
            task: '카드를 읽고 어르신이 많은 지역과 어린이가 많은 지역에 필요한 것으로 나누어요.',
            teacher: '"어르신이 많은 지역에는 무엇이 더 필요할까요?" 병원 방문, 경로당, 이동 도움 같은 시설과 서비스를 이야기한다. 어르신 비율이 높은 것을 문제로만 말하는 학생에게는 그 지역이 겪는 어려움과 그곳 사람들이 가진 장점을 함께 말하게 한다.',
            items: [
              { prompt: '카드를 어르신이 많은 지역에 필요한 것과 어린이가 많은 지역에 필요한 것으로 나누어 보세요.', toolOptions: { topic: '필요한 시설', slots: ['어르신이 많은 지역에 필요해요', '어린이가 많은 지역에 필요해요'], cards: ['경로당', '병원 방문 서비스', '어린이집', '초등학교'] }, target: { sort: { '어르신이 많은 지역에 필요해요': ['경로당', '병원 방문 서비스'], '어린이가 많은 지역에 필요해요': ['어린이집', '초등학교'] } }, difficulty: 0.2 },
              { prompt: '비율이 높은 지역을 돕는 방법만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '돕는 방법', basket: '돕는 방법', cards: ['마을 버스를 늘려요', '찾아가는 건강 검진을 해요', '어르신을 이사 가라고 해요', '이웃과 함께 식사해요'] }, target: { pick: ['마을 버스를 늘려요', '찾아가는 건강 검진을 해요', '이웃과 함께 식사해요'] }, difficulty: 0.25 },
              { prompt: '자료와 알맞은 말을 이어 보세요.', toolOptions: { mode: 'match', topic: '자료와 말', slots: [{ id: 'm1', label: '산마루군 산골 41%' }, { id: 'm2', label: '들빛시 도심 14%' }], cards: ['10명 가운데 4명쯤이 65세 이상이에요', '10명 가운데 1명쯤이 65세 이상이에요', '10명 가운데 7명이 65세 이상이에요'] }, target: { match: { m1: '10명 가운데 4명쯤이 65세 이상이에요', m2: '10명 가운데 1명쯤이 65세 이상이에요' } }, difficulty: 0.3 },
            ] },
        ],
        wrap: {
          teacher: '"비율이 높다는 것과 사람 수가 많다는 것은 같은 말일까요?" 인구가 적은 산골도 비율은 높을 수 있다는 점을 다시 짚는다. 출구 2번에서 사람 수와 비율을 섞은 학생에게는 "100명 중 몇 명인가"로 바꾸어 말하게 한다.',
          exits: [
            { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '다른 세 지역 65세 이상 비율', data: [['가 지역', 12], ['나 지역', 25], ['다 지역', 38]], unit: '%', scale: 5, xLabel: '지역', choices: ['가 지역', '나 지역', '다 지역'], why: ['가 지역은 가장 낮아요.', '다 지역이 더 높아요.', null] }, prompt: '65세 이상 비율이 가장 높은 지역을 고르세요.', target: { pick: 2 }, difficulty: 0.15 },
            { type: 'choice', prompt: '비율 29%는 어떤 뜻인가요?', options: ['100명 가운데 약 29명', '29명 전체', '29만 명'], answer: 0, difficulty: 0.2, explain: '비율은 전체 100 가운데 얼마인지를 나타내요.' },
            { type: 'choice', prompt: '65세 이상이 많은 지역에 더 필요한 서비스는 무엇인가요?', options: ['병원 방문과 이동 도움', '학교 급식실 확장', '놀이터 늘리기'], answer: 0, difficulty: 0.2, explain: '어르신이 많은 지역은 건강 관리와 이동 도움이 더 필요해요.' },
            { type: 'mood', prompt: '오늘 비율 읽기는 어땠나요?' },
          ],
        },
        ws: {
          title: '65세 이상 인구 비율 읽기',
          items: [
            { type: 'table', prompt: '세 지역의 비율을 표에 쓰세요.', columns: ['지역', '65세 이상 비율(%)'], cells: [['들빛시 도심', ''], ['물결군 바닷가', '29'], ['산마루군 산골', '']], answer: '들빛시 도심 14, 산마루군 산골 41' },
            { type: 'blank', prompt: '표를 보고 빈칸을 채우세요.', text: '비율이 가장 높은 지역은 ___이고, 가장 낮은 지역은 ___이에요.', answer: '산마루군 산골, 들빛시 도심' },
            { type: 'blank', prompt: '두 지역의 비율 차를 구하세요.', text: '41 − 14 = ___ (%p)', answer: '27' },
            { type: 'choice', prompt: '비율이 높은 지역에 필요한 것에 ○ 하세요.', options: ['병원 방문 서비스', '놀이터 확장'], answer: '병원 방문 서비스' },
            { type: 'short', prompt: '어르신이 많은 지역을 돕는 방법을 한 가지 쓰세요.' },
          ],
          easy: { note: '비율은 전체 100 가운데 몇인지를 나타내요.', items: [
            { type: 'table', prompt: '표를 완성하세요.', columns: ['지역', '비율(%)'], cells: [['물결군 바닷가', '29'], ['산마루군 산골', '']], answer: '41' },
            { type: 'choice', prompt: '비율이 더 높은 곳에 ○ 하세요.', options: ['산마루군 산골', '들빛시 도심'], answer: '산마루군 산골' },
            { type: 'blank', prompt: '알맞은 말을 쓰세요.', text: '비율이 높은 지역에는 병원 ___ 서비스가 필요해요.', answer: '방문' },
            { type: 'short', prompt: '이웃 어르신께 드리고 싶은 말을 한 줄 쓰세요.' },
          ] },
        },
        notes: '자주 보이는 어려움: ① 비율과 사람 수를 섞는다 → 100명 중 몇 명인지로 바꾸어 말하게 한다. ② 연령 집단을 문제로만 여긴다 → 필요한 도움과 그분들의 경험·역할을 함께 말하게 한다. ③ %p와 %를 구분하지 않는다 → 두 비율의 차는 %p로 쓴다고 알려 준다. 값은 모두 지어낸 것이다.',
      }),
      // ───────────────────────── 15차시 ─────────────────────────
      mk(15, {
        title: '도시와 촌락의 인구 문제와 해결 방안 짝짓기',
        objective: '인구가 너무 모이거나 줄어서 생기는 문제를 찾고 알맞은 해결 방안을 짝지어 설명할 수 있다.',
        std: S2,
        ill: 'a crowded downtown street with tall apartment blocks on one side and a quiet village with an empty school on the other, joined by a paper bridge labeled with ideas',
        scene: '문제를 풀어 볼까요?', more: [{ motif: 'house', x: 110, y: 222 }, { motif: 'tree', x: 170, y: 214 }, { motif: 'house', x: 330, y: 222, color: 'sky' }, { motif: 'house', x: 380, y: 222, color: 'peach', s: 0.8 }],
        intro: {
          teacher: '"인구가 너무 많이 모인 곳과 너무 적어진 곳은 각각 어떤 어려움이 있을까요?" 학생이 떠올린 문제를 두 갈래로 모은다. 인구가 너무 많이 모이는 것을 과밀, 너무 적어지는 것을 과소라고 부른다고 낱말을 소개한다. 시연 단추로 첫 문항의 문제와 해결 방안이 이어지는 모습을 보인다.',
          student: '붐비는 곳과 한산한 곳에서 불편한 점을 하나씩 떠올려 봅시다.',
        },
        acts: [
          { title: '인구가 모인 곳의 문제와 방안', tool: 'mindmap',
            task: '인구가 너무 많이 모인 곳의 문제와 알맞은 해결 방안을 이어요.',
            teacher: '"차가 막힐 때 길을 더 넓히기만 하면 해결될까요?" 길만 넓히면 다시 차가 늘 수 있어 대중교통을 늘리는 방안도 함께 생각해야 한다는 이야기를 나눈다. 쓰레기가 늘어난 문제를 "집값을 내린다"는 방안으로 잇는 학생에게는 쓰레기 문제와 집값 문제가 같은 문제인지 묻는다.',
            items: [
              { prompt: '문제와 알맞은 해결 방안을 이어 보세요.', toolOptions: { mode: 'match', topic: '도시 문제', slots: [{ id: 'm1', label: '출퇴근 시간에 길이 막혀요' }, { id: 'm2', label: '살 집이 모자라 집값이 올라요' }, { id: 'm3', label: '쓰레기가 많이 나와요' }], cards: ['버스와 지하철을 늘려요', '공공 임대주택을 지어요', '분리배출을 하고 재활용을 늘려요'] }, target: { match: { m1: '버스와 지하철을 늘려요', m2: '공공 임대주택을 지어요', m3: '분리배출을 하고 재활용을 늘려요' } }, difficulty: 0.2 },
              { prompt: '도시의 인구가 지나치게 몰리는 것을 줄이는 방안만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '인구 분산', basket: '인구 분산', cards: ['다른 지역에도 일자리를 늘려요', '공공 기관을 다른 지역으로 옮겨요', '도시에 더 큰 건물만 지어요', '도시 일자리를 더 늘려요'] }, target: { pick: ['다른 지역에도 일자리를 늘려요', '공공 기관을 다른 지역으로 옮겨요'] }, difficulty: 0.3 },
              { prompt: '문제와 알맞은 해결 방안을 이어 보세요.', toolOptions: { mode: 'match', topic: '도시 문제', slots: [{ id: 'm1', label: '학교가 학생으로 붐벼요' }, { id: 'm2', label: '공원과 놀이터가 부족해요' }], cards: ['학교를 새로 짓거나 학급을 나눠요', '빈 땅에 공원을 만들어요', '도로를 넓혀요'] }, target: { match: { m1: '학교를 새로 짓거나 학급을 나눠요', m2: '빈 땅에 공원을 만들어요' } }, difficulty: 0.25 },
            ] },
          { title: '인구가 줄어든 곳의 문제와 방안', tool: 'mindmap',
            task: '인구가 너무 적어진 곳의 문제와 알맞은 해결 방안을 이어요.',
            teacher: '"학교가 문을 닫으면 아이들은 어디로 다닐까요?" 먼 곳으로 통학해야 하는 불편함과 함께 작은 학교를 지키는 방법(통학 버스, 함께 쓰는 학교)을 이야기한다. 빈집 문제를 "새 아파트를 짓는다"로 잇는 학생에게는 빈집이 많은데 새집이 필요한지 되묻는다.',
            items: [
              { prompt: '문제와 알맞은 해결 방안을 이어 보세요.', toolOptions: { mode: 'match', topic: '촌락 문제', slots: [{ id: 'm1', label: '학생이 줄어 학교가 문을 닫아요' }, { id: 'm2', label: '농사지을 일손이 부족해요' }, { id: 'm3', label: '빈집이 늘어요' }], cards: ['통학 버스를 운영하고 작은 학교를 함께 써요', '귀농·귀촌 지원으로 새 주민을 맞아요', '빈집을 고쳐 새 주민에게 빌려줘요'] }, target: { match: { m1: '통학 버스를 운영하고 작은 학교를 함께 써요', m2: '귀농·귀촌 지원으로 새 주민을 맞아요', m3: '빈집을 고쳐 새 주민에게 빌려줘요' } }, difficulty: 0.25 },
              { prompt: '촌락에 사람이 살기 좋게 하는 방안만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '촌락 지원', basket: '촌락 지원', cards: ['일자리를 만들고 인터넷을 놓아요', '마을 병원과 버스를 늘려요', '학교를 모두 닫아요', '농사짓는 사람에게 기계 지원을 줄여요'] }, target: { pick: ['일자리를 만들고 인터넷을 놓아요', '마을 병원과 버스를 늘려요'] }, difficulty: 0.25 },
              { prompt: '문제가 일어나는 곳을 인구가 너무 모인 곳과 너무 적어진 곳으로 나누어 보세요.', toolOptions: { topic: '문제의 자리', slots: ['인구가 너무 많이 모인 곳', '인구가 너무 적어진 곳'], cards: ['교통 혼잡', '빈집 증가', '주택 부족', '학교 폐교'] }, target: { sort: { '인구가 너무 많이 모인 곳': ['교통 혼잡', '주택 부족'], '인구가 너무 적어진 곳': ['빈집 증가', '학교 폐교'] } }, difficulty: 0.25 },
            ] },
        ],
        wrap: {
          teacher: '"인구가 너무 많아도 문제, 너무 적어도 문제인 까닭은 무엇일까요?" 사람 수와 시설이 맞지 않으면 어느 쪽이든 불편이 생긴다는 점을 말하게 한다. 출구 3번을 틀린 학생에게는 문제와 해결 방안이 같은 쪽의 이야기인지 확인하게 한다.',
          exits: [
            { type: 'choice', prompt: '사람이 너무 많이 모여 길이 막힐 때 알맞은 방안은?', options: ['대중교통을 늘려요', '학교를 닫아요', '빈집을 고쳐요'], answer: 0, difficulty: 0.15, explain: '버스와 지하철이 늘면 차가 줄어 길이 덜 막혀요.' },
            { type: 'choice', prompt: '학생 수가 줄어 학교 문을 닫을 위기에 있는 마을에 알맞은 방안은?', options: ['통학 버스를 운영해요', '도로를 더 넓혀요', '새 아파트를 더 지어요'], answer: 0, difficulty: 0.2, explain: '통학 버스처럼 아이들이 학교에 다닐 길을 지켜 주는 방안이 알맞아요.' },
            { type: 'choice', prompt: '"일자리가 부족해 젊은 사람이 떠나요"의 해결 방안으로 알맞은 것은?', options: ['그 지역에 일자리를 만들어요', '도시 일자리를 더 늘려요'], answer: 0, difficulty: 0.25, explain: '떠나는 까닭을 해결하려면 그 지역에 일자리를 만들어야 해요.' },
            { type: 'mood', prompt: '오늘 해결 방안 찾기는 어땠나요?' },
          ],
        },
        ws: {
          title: '인구 문제와 해결 방안 이어 보기',
          items: [
            { type: 'table', prompt: '문제와 해결 방안을 한 가지씩 쓰세요.', columns: ['곳', '문제', '해결 방안'], cells: [['도시', '길이 막혀요', ''], ['촌락', '학교가 문을 닫아요', '']], answer: '도시: 대중교통 늘리기, 촌락: 통학 버스·작은 학교 함께 쓰기(예)' },
            { type: 'choice', prompt: '인구가 너무 적어서 생기는 문제에 ○ 하세요.', options: ['빈집이 늘어요', '길이 막혀요'], answer: '빈집이 늘어요' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '인구가 너무 많이 모이는 것을 ___, 너무 적어지는 것을 ___라고 해요.', answer: '과밀, 과소' },
            { type: 'choice', prompt: '문제와 방안이 알맞게 이어진 것에 ○ 하세요.', options: ['집값 상승 – 공공 임대주택', '학교 폐교 – 도로 넓히기'], answer: '집값 상승 – 공공 임대주택' },
            { type: 'short', prompt: '내가 우리 동네 문제 하나를 해결한다면 어떤 방법을 쓸지 한 문장으로 쓰세요.' },
          ],
          easy: { note: '문제를 찾으면 알맞은 방안도 찾을 수 있어요.', items: [
            { type: 'choice', prompt: '길이 막힐 때 알맞은 방안에 ○ 하세요.', options: ['버스와 지하철 늘리기', '빈집 고치기'], answer: '버스와 지하철 늘리기' },
            { type: 'choice', prompt: '빈집이 늘 때 알맞은 방안에 ○ 하세요.', options: ['빈집을 고쳐 빌려주기', '길 넓히기'], answer: '빈집을 고쳐 빌려주기' },
            { type: 'blank', prompt: '알맞은 말을 쓰세요.', text: '학생 수가 줄면 ___ 버스를 운영하면 도움이 돼요.', answer: '통학' },
            { type: 'short', prompt: '우리 동네에서 불편한 점을 한 가지 쓰세요.' },
          ] },
        },
        notes: '자주 보이는 어려움: ① 문제와 상관없는 방안을 잇는다 → 문제의 원인이 무엇인지 먼저 말하게 한다. ② 한쪽 지역의 문제만 해결하면 다른 쪽이 좋아진다고 생각한다 → 인구 이동은 양쪽이 이어져 있음을 짚는다. ③ 방안이 현실적인지 따지지 않는다 → 누가 할 수 있는 일인지 함께 묻는다.',
      }),
      // ───────────────────────── 16차시 ─────────────────────────
      mk(16, {
        title: '다솜도 인구 문제 해결 방안 제안하고 단원 돌아보기',
        objective: '자료를 근거로 인구 문제 해결 방안을 제안하고 단원에서 배운 기후와 인구 낱말을 스스로 점검할 수 있다.',
        std: S2,
        ill: 'students presenting a paper proposal poster on an easel with a population map, a bar chart and sticky notes of ideas',
        scene: '우리의 제안을 발표해요', more: [{ motif: 'star', x: 90, y: 100 }, { motif: 'star', x: 400, y: 110, color: 'buttercup' }, { motif: 'house', x: 330, y: 222 }],
        intro: {
          teacher: '"근거 없이 \'이렇게 하면 좋겠어요\'라고만 말하면 설득이 될까요?" 제안에는 어떤 자료를 보고 어떤 문제를 찾았는지가 들어가야 한다고 알린다. 시연 단추로 인구가 가장 적은 지역에 핀이 꽂히는 모습을 보여 첫 활동의 지도를 소개한다. 오늘은 제안을 만들고, 이 단원에서 배운 낱말을 스스로 돌아본다고 말한다.',
          student: '자료를 근거로 말하면 왜 더 믿을 수 있는지 생각해 봅시다.',
        },
        acts: [
          { title: '근거 찾아 핀 꽂기', tool: 'map', options: MAP_POP,
            task: '제안의 근거가 되는 곳을 지도에서 찾아요. 핀을 꽂거나 읽고 보기를 골라요.',
            teacher: '"어느 지역을 먼저 도와야 할까요? 그렇게 생각한 근거는 지도 어디에 있나요?" 인구가 가장 적은 곳을 찾으라는 말에서 시작해 숫자로 차이를 계산하게 한다. 3번을 155가 아닌 값으로 구한 학생에게는 가장 큰 수에서 가장 작은 수를 빼는 계산을 다시 하게 한다.',
            items: [
              { prompt: '통학 버스가 가장 필요할 것 같은 곳으로 인구가 가장 적은 지역 안에 핀을 꽂아 보세요.', target: { least: true }, difficulty: 0.15 },
              { prompt: '대중교통을 가장 늘려야 할 곳으로 인구가 가장 많은 지역 안에 핀을 꽂아 보세요.', toolOptions: { regionValues: true }, target: { most: true }, difficulty: 0.15 },
              { prompt: '가장 많은 지역과 가장 적은 지역의 인구 차는 몇 만 명인가요?', toolOptions: { readOnly: true, regionValues: true, ask: { choices: ['145만 명', '155만 명', '165만 명'], why: ['160에서 5를 빼면 몇인지 다시 계산해 보세요.', null, '160에서 5를 더하지 않고 빼요.'] } }, target: { pick: 1 }, difficulty: 0.3 },
              { prompt: '들빛시와 햇볕시의 인구를 합하면 몇 만 명인가요?', toolOptions: { readOnly: true, regionValues: true, ask: { choices: ['210만 명', '230만 명', '250만 명'], why: ['160과 70을 더해 보세요.', null, '160과 70의 합보다 큰 값이에요.'] } }, target: { pick: 1 }, difficulty: 0.25 },
            ] },
          { title: '근거 있는 제안 고르기', tool: 'mindmap',
            task: '카드를 읽고 근거가 있는 제안과 근거가 없는 제안으로 나누거나 골라요.',
            teacher: '"어떤 제안이 더 설득력 있을까요?" 근거 자료(숫자, 그래프)와 알맞은 해결 방안이 함께 있는지 보게 한다. "그냥 모두 들빛시로 이사 가요"를 고르는 학생에게는 들빛시에서 이미 어떤 문제가 있었는지 물어 본다.',
            items: [
              { prompt: '제안 카드를 근거 있는 제안과 근거 없는 제안으로 나누어 보세요.', toolOptions: { topic: '제안 점검', slots: ['근거가 있어요', '근거가 없어요'], cards: ['산마루군 인구가 5만 명이라 통학 버스를 늘려요', '들빛시 인구가 160만 명이라 대중교통을 늘려요', '그냥 모두 들빛시로 이사 가요', '내가 좋아하는 곳에 사람이 모이면 좋겠어요'] }, target: { sort: { '근거가 있어요': ['산마루군 인구가 5만 명이라 통학 버스를 늘려요', '들빛시 인구가 160만 명이라 대중교통을 늘려요'], '근거가 없어요': ['그냥 모두 들빛시로 이사 가요', '내가 좋아하는 곳에 사람이 모이면 좋겠어요'] } }, difficulty: 0.2 },
              { prompt: '좋은 제안을 쓰는 순서대로 카드를 놓아 보세요.', toolOptions: { mode: 'order', topic: '제안하는 글', slots: ['첫째', '둘째', '셋째', '넷째'], cards: ['자료에서 문제를 찾아요', '문제의 까닭을 짐작해요', '알맞은 해결 방안을 정해요', '근거와 함께 제안해요'] }, target: { order: ['자료에서 문제를 찾아요', '문제의 까닭을 짐작해요', '알맞은 해결 방안을 정해요', '근거와 함께 제안해요'] }, difficulty: 0.25 },
              { prompt: '우리 단원에서 배운 낱말과 알맞은 뜻을 이어 보세요.', toolOptions: { mode: 'match', topic: '단원 낱말', slots: [{ id: 'm1', label: '기후' }, { id: 'm2', label: '인구 분포' }, { id: 'm3', label: '인구 이동' }], cards: ['여러 해 되풀이되는 그 지역의 날씨 모습', '사람이 사는 모습이 지역마다 어떻게 다른지', '사람들이 사는 곳을 옮기는 것'] }, target: { match: { m1: '여러 해 되풀이되는 그 지역의 날씨 모습', m2: '사람이 사는 모습이 지역마다 어떻게 다른지', m3: '사람들이 사는 곳을 옮기는 것' } }, difficulty: 0.2 },
            ] },
        ],
        wrap: {
          teacher: '"이 단원에서 가장 도움이 된 자료 읽기 방법은 무엇이었나요?" 지도의 색 읽기, 그래프의 눈금 읽기, 사실과 짐작 구분하기 가운데 스스로 고르게 하고 한 문장으로 말하게 한다. 출구 1번을 틀린 학생에게는 근거가 되는 자료가 무엇인지 다시 찾게 한다.',
          exits: [
            { type: 'choice', prompt: '제안이 더 믿음직해지려면 무엇이 필요한가요?', options: ['지도나 그래프 같은 근거 자료', '친구가 많이 찬성하는 것', '내가 좋아하는 것'], answer: 0, difficulty: 0.15, explain: '자료에서 찾은 숫자나 사실이 있어야 제안을 믿을 수 있어요.' },
            { type: 'choice', prompt: '"우리나라는 여름에 덥고 비가 많아요."는 날씨일까요, 기후일까요?', options: ['기후', '날씨'], answer: 0, difficulty: 0.15, explain: '해마다 되풀이되는 큰 경향이라 기후예요.' },
            { type: 'choice', prompt: '이 단원에서 배운 것을 스스로 점검했을 때 가장 알맞은 말은?', options: ['자료를 근거로 말할 수 있어요', '아직 아무것도 모르겠어요', '그래프는 그리지 않아도 돼요'], answer: 0, difficulty: 0.1, explain: '지도와 그래프를 읽고 근거를 들어 말하는 것이 단원 목표예요.' },
            { type: 'mood', prompt: '이 단원 공부는 어땠나요?' },
          ],
        },
        ws: {
          title: '단원 정리와 제안하는 글',
          items: [
            { type: 'figure', wide: true, prompt: '인구 지도에서 지원이 가장 필요해 보이는 지역에 ○ 하고 까닭을 쓰세요.', tool: 'map', options: WS_POP, figures: [{ caption: '다솜도 지역별 인구(만 명, 색이 진할수록 많음)' }], answer: '예: 산마루군(5만 명) – 학교가 문을 닫을 수 있어 통학 버스가 필요함' },
            { type: 'table', prompt: '제안하는 글을 정리하세요.', columns: ['항목', '내용'], cells: [['찾은 문제', ''], ['근거 자료', ''], ['해결 방안', '']], answer: '예: 학교 폐교 위기 / 산마루군 인구 5만 명 / 통학 버스 운영' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '그때그때의 하늘 모습은 ___, 오랫동안 되풀이되는 모습은 ___예요.', answer: '날씨, 기후' },
            { type: 'choice', prompt: '근거가 있는 제안에 ○ 하세요.', options: ['인구가 적어 통학 버스가 필요해요', '그냥 다 이사 가요'], answer: '인구가 적어 통학 버스가 필요해요' },
            { type: 'short', prompt: '이 단원에서 새로 알게 된 것 한 가지를 쓰세요.' },
          ],
          easy: { note: '제안에는 문제, 근거, 해결 방안이 있어요.', items: [
            { type: 'choice', prompt: '근거에 ○ 하세요.', options: ['지도의 숫자', '내 기분'], answer: '지도의 숫자' },
            { type: 'choice', prompt: '기후를 말한 문장에 ○ 하세요.', options: ['여름에는 해마다 비가 많이 와요', '오늘 비가 와요'], answer: '여름에는 해마다 비가 많이 와요' },
            { type: 'blank', prompt: '알맞은 말을 쓰세요.', text: '학생이 줄어든 마을에는 ___ 버스가 도움이 돼요.', answer: '통학' },
            { type: 'short', prompt: '내가 해 보고 싶은 제안 하나를 쓰세요.' },
          ] },
        },
        notes: '자주 보이는 어려움: ① 제안에 근거 자료를 넣지 않는다 → 문제·근거·방안 세 칸을 채우게 한다. ② 낱말(기후, 인구 분포, 인구 이동)의 뜻을 섞는다 → 이어 보기 문항으로 짝을 다시 확인한다. ③ 단원 정리 활동에서 다솜도와 실제 우리나라를 혼동한다 → 다솜도는 지어낸 도라고 다시 말해 준다. 이 단원의 수는 지어낸 것이므로 실제 우리나라 통계를 말할 때는 확인된 자료의 출처를 꼭 함께 쓴다.',
      }),
      // @@NEXT@@
    ],
  });
})();
