/* 5학년 1학기 사회 3. 법과 인권의 보장 — 단원 파일
 * 모든 사례·설문·인물은 지어낸 것이다(실제 사건·실명 없음). 법은 도로교통법·소비자기본법·아동복지법처럼 이름이 분명한 것과
 * 헌법의 기본권(평등권·자유권·참정권·사회권·청구권) 수준만 쓰고, 조항 번호는 인간의 존엄과 가치·행복추구권을 담은 헌법 제10조 한 곳만 교사 발문에 쓴다.
 * 설문 결과(우리 반·다솜마을·푸른학교)는 이 단원 안에서만 정한 값이다.
 */
(function () {
  const BASE = { schema: 'edu-lesson.v1', grade: 5, subject: '사회', unitTitle: '3. 법과 인권의 보장', minutes: 40, formats: ['chromebook', 'projector', 'print'] };
  const L = (n, o) => Object.assign({ id: `g5-soc-1-03-${String(n).padStart(2, '0')}`, catalog: { unit: 'g5-사회-1학기-3', lesson: n } }, BASE, o);
  const ILL = (what) => `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`;
  const S1 = ['[6사03-01]']; const S2 = ['[6사03-02]'];
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

  // 설문 자료(지어낸 값)
  const WANT = [['평등', 6], ['자유', 4], ['안전', 5], ['배울 권리', 7], ['쉴 권리', 2]];                 // 5학년 3반 24명이 가장 지켜지길 바라는 권리
  const WHY = [['모두 안전해서', 34], ['벌을 받을까 봐', 12], ['약속이니까', 20], ['잘 모르겠어요', 4]];     // 다솜마을 주민 70명이 법을 지키는 까닭
  const SEEN = [['본 적 있어요', 30], ['본 적 없어요', 62], ['잘 모르겠어요', 8]];                          // 푸른학교 학생 100명: 친구가 놀림당하는 모습을 본 적
  const HELP = [['담임 선생님께 말해요', 45], ['친구와 이야기해요', 30], ['상담실에 가요', 15], ['아무것도 안 해요', 10]]; // 푸른학교 학생 100명의 도움 요청 방법
  const KIND = [['말로 놀림', 38], ['물건 숨김', 17], ['따돌림', 25], ['허락 없이 사진 올림', 20]];      // 푸른학교 인권 침해 유형(100건)

  PaperLessons.registerUnit({
    id: 'g5-soc-1-03', schema: 'edu-unit.v1', catalogUnit: 'g5-사회-1학기-3',
    grade: 5, subject: '사회', unitTitle: '3. 법과 인권의 보장',
    flow: '1~3차시는 법이 없는 마을을 상상하며 법이 질서를 지키고 권리를 보호하고 다툼을 해결하는 일을 알아보고, 생활 속 법(도로교통법·소비자기본법·아동복지법)과 학급 약속을 구분하며, 헌법의 기본권 다섯 가지를 사례와 잇습니다. 4~5차시는 지어낸 학급·마을 설문을 그림그래프와 막대그래프로 그리고 읽으며 사실과 생각을 가릅니다. 6~8차시는 학교의 인권 사례를 기본권과 잇고 조사 방법·설문 문항을 고르고 보고서와 발표의 차례를 정리합니다. 9~10차시는 인권의 뜻과 침해 사례를 구분하고 침해된 권리를 찾아 존중하는 말로 바꿔 봅니다. 11~13차시는 설문과 유형별 자료를 그림그래프·막대그래프·표로 읽으며 개인을 탓하지 않는 해석을 연습하고, 14차시에 나·학교·국가기관이 하는 보호 활동과 도움 요청 순서를 계획하며, 15차시에 낱말을 정리하고 자료를 근거로 우리 반 인권 약속을 만듭니다. 모든 사례·설문·인물은 지어낸 것이며 실제 사건이나 실명을 쓰지 않습니다.',
    refs: {},
    lessons: [
      // ───────────────────────── 1차시 ─────────────────────────
      mk(1, {
        title: '법이 없는 마을을 상상하며 법의 역할 찾기',
        objective: '법이 질서를 지키고 권리를 보호하며 다툼을 해결하는 일을 한다는 것을 사례로 설명할 수 있다.',
        std: S1,
        ill: 'a paper-cut town square where traffic lights, a courthouse and a market stand in order, with a child holding a scale of justice',
        scene: '법은 무슨 일을 할까요?', more: [{ motif: 'house', x: 110, y: 222 }, { motif: 'house', x: 330, y: 222, color: 'sky' }, { motif: 'star', x: 400, y: 100 }],
        intro: {
          teacher: '"교실에 규칙이 하나도 없다면 오늘 하루는 어떻게 될까요?" 순서를 정하지 않고 다툼이 생기는 모습을 학생 입으로 말하게 한다. 마을에도 같은 어려움이 있어 사람들이 함께 지키기로 정한 약속이 법이라고 알려 준다. 시연 단추로 "질서를 지켜요" 카드가 법이 하는 일 바구니에 담기는 모습을 보인다. 오늘 쓰는 마을과 사례는 모두 지어낸 것이다.',
          student: '규칙이 없으면 어떤 일이 생길지 한 가지 말해 봅시다.',
        },
        acts: [
          { title: '법이 하는 일 고르기', tool: 'mindmap',
            task: '카드를 읽고 법이 하는 일만 골라 바구니에 담아요.',
            teacher: '"법은 사람들의 생각을 똑같이 만들려고 있는 걸까요?" 법은 서로 다른 생각을 가진 사람들이 함께 살 수 있게 최소한의 약속을 정하는 것이라고 짚는다. "물건 값을 마음대로 정해요"를 법이 하는 일로 고른 학생에게는 법이 누구를 위해 있는 것인지 물어 본다.',
            items: [
              { prompt: '법이 하는 일만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '법이 하는 일', basket: '법이 하는 일', cards: ['모두가 안전하게 살도록 질서를 지켜요', '사람들의 권리를 보호해요', '다툼이 생기면 공정하게 해결해요', '사람들의 생각을 똑같이 만들어요', '물건 값을 마음대로 정해요'] }, target: { pick: ['모두가 안전하게 살도록 질서를 지켜요', '사람들의 권리를 보호해요', '다툼이 생기면 공정하게 해결해요'] }, difficulty: 0.15 },
              { prompt: '법이 있는 마을에서 일어나는 일만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '법이 있을 때', basket: '법이 있을 때', cards: ['신호등을 지켜 차가 멈춰요', '억울한 일이 있으면 법원에 알릴 수 있어요', '힘센 사람 마음대로 정해요', '남의 물건을 가져가도 막을 수 없어요'] }, target: { pick: ['신호등을 지켜 차가 멈춰요', '억울한 일이 있으면 법원에 알릴 수 있어요'] }, difficulty: 0.2 },
              { prompt: '법이 없는 마을을 걱정하는 말만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '법이 없을 때', basket: '법이 없을 때', cards: ['싸움이 나도 해결할 방법이 없어요', '약한 사람의 권리를 지켜 줄 수 없어요', '모두가 안전하게 길을 건너요', '약속을 어겨도 아무 일도 없어요'] }, target: { pick: ['싸움이 나도 해결할 방법이 없어요', '약한 사람의 권리를 지켜 줄 수 없어요', '약속을 어겨도 아무 일도 없어요'] }, difficulty: 0.25 },
            ] },
          { title: '상황과 법의 역할 이어 보기', tool: 'mindmap',
            task: '상황 카드를 법이 하는 세 가지 일과 이어요.',
            teacher: '"횡단보도 신호를 지키는 일은 누구의 무엇을 지켜 줄까요?" 질서 유지(모두가 안전하게 건넘), 권리 보호(내 몫을 침해받지 않음), 다툼 해결(공정한 판단) 세 가지로 나누어 말해 본다. 2번에서 재판을 질서 유지로 잇는 학생에게는 다툼이 생긴 뒤에 하는 일이 무엇인지 묻는다.',
            items: [
              { prompt: '상황과 법의 역할을 이어 보세요.', toolOptions: { mode: 'match', topic: '상황과 역할', slots: [{ id: 'm1', label: '질서 유지' }, { id: 'm2', label: '권리 보호' }, { id: 'm3', label: '다툼 해결' }], cards: ['횡단보도에서 초록불에 건너요', '산 물건이 고장 나면 바꿔 받을 수 있어요', '이웃 사이의 다툼을 재판으로 가려요'] }, target: { match: { m1: '횡단보도에서 초록불에 건너요', m2: '산 물건이 고장 나면 바꿔 받을 수 있어요', m3: '이웃 사이의 다툼을 재판으로 가려요' } }, difficulty: 0.2 },
              { prompt: '다른 상황과 법의 역할을 이어 보세요.', toolOptions: { mode: 'match', topic: '상황과 역할', slots: [{ id: 'm1', label: '질서 유지' }, { id: 'm2', label: '권리 보호' }, { id: 'm3', label: '다툼 해결' }], cards: ['쓰레기는 정해진 곳에 버려요', '일한 만큼 돈을 받을 수 있어요', '약속을 어긴 사람에게 책임을 물어요'] }, target: { match: { m1: '쓰레기는 정해진 곳에 버려요', m2: '일한 만큼 돈을 받을 수 있어요', m3: '약속을 어긴 사람에게 책임을 물어요' } }, difficulty: 0.25 },
              { prompt: '법이 있는 마을과 없는 마을의 모습으로 나누어 보세요.', toolOptions: { topic: '법의 있고 없음', slots: ['법이 있는 마을', '법이 없는 마을'], cards: ['억울할 때 도움을 요청할 곳이 있어요', '모두가 같은 약속을 지켜요', '힘센 사람이 마음대로 정해요', '싸움이 나면 누구도 말릴 수 없어요'] }, target: { sort: { '법이 있는 마을': ['억울할 때 도움을 요청할 곳이 있어요', '모두가 같은 약속을 지켜요'], '법이 없는 마을': ['힘센 사람이 마음대로 정해요', '싸움이 나면 누구도 말릴 수 없어요'] } }, difficulty: 0.2 },
            ] },
        ],
        wrap: {
          teacher: '"법은 우리를 불편하게 하려고 있는 걸까요, 도와주려고 있는 걸까요?" 법은 서로의 안전과 권리를 지키기 위한 약속이라고 정리한다. 출구 3번에서 벌만 떠올리는 학생에게는 법이 보호해 주는 일도 있다고 다시 짚는다.',
          exits: [
            { type: 'choice', prompt: '법이 하는 일로 알맞지 않은 것은 무엇인가요?', options: ['사람들의 생각을 똑같이 만드는 일', '다툼을 공정하게 해결하는 일', '권리를 지켜 주는 일'], answer: 0, difficulty: 0.1, explain: '법은 생각을 똑같이 만들지 않고, 함께 살기 위한 최소한의 약속이에요.' },
            { type: 'choice', prompt: '"산 물건이 고장 나면 바꿔 받을 수 있다"는 법의 어떤 역할인가요?', options: ['권리 보호', '질서 유지', '벌 주기'], answer: 0, difficulty: 0.15, explain: '소비자가 가진 권리를 지켜 주는 역할이에요.' },
            { type: 'choice', prompt: '법이 있어서 좋은 점으로 가장 알맞은 것은?', options: ['모두의 안전과 권리를 지킬 수 있어요', '벌을 받아서 무서워요', '재판이 늘어나서 바빠요'], answer: 0, difficulty: 0.15, explain: '법은 모두를 위해 정한 약속이라서 안전과 권리를 지켜 줘요.' },
            { type: 'mood', prompt: '오늘 법의 역할 공부는 어땠나요?' },
          ],
        },
        ws: {
          title: '법이 하는 일',
          items: [
            { type: 'table', prompt: '법이 하는 일을 사례와 이어 쓰세요.', columns: ['법이 하는 일', '사례'], cells: [['질서 유지', ''], ['권리 보호', ''], ['다툼 해결', '']], answer: '질서: 신호 지키기, 권리: 환불, 다툼 해결: 재판(예)' },
            { type: 'choice', prompt: '법이 있는 마을의 모습에 ○ 하세요.', options: ['억울할 때 도움을 요청할 곳이 있어요', '힘센 사람이 마음대로 정해요'], answer: '억울할 때 도움을 요청할 곳이 있어요' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '법은 사람들이 함께 살기 위해 정한 ___이에요.', answer: '약속' },
            { type: 'choice', prompt: '법이 하는 일이 아닌 것에 ○ 하세요.', options: ['물건 값을 마음대로 정해요', '다툼을 공정하게 해결해요'], answer: '물건 값을 마음대로 정해요' },
            { type: 'short', prompt: '법이 없다면 우리 동네에서 가장 걱정되는 일 한 가지를 쓰세요.' },
          ],
          easy: { note: '법은 모두의 안전과 권리를 지키는 약속이에요.', items: [
            { type: 'choice', prompt: '법이 있어서 좋은 점에 ○ 하세요.', options: ['안전하게 살 수 있어요', '마음대로 할 수 있어요'], answer: '안전하게 살 수 있어요' },
            { type: 'choice', prompt: '횡단보도 신호 지키기는 어떤 역할인가요?', options: ['질서 유지', '다툼 해결'], answer: '질서 유지' },
            { type: 'blank', prompt: '알맞은 말을 쓰세요.', text: '법은 사람들의 안전과 ___을 지켜요.', answer: '권리' },
            { type: 'short', prompt: '우리 반이 정한 약속을 한 가지 쓰세요.' },
          ] },
        },
        notes: '자주 보이는 어려움: ① 법을 벌주는 것으로만 이해한다 → 권리를 지켜 주는 법 사례를 먼저 보여 준다. ② 법과 학급 규칙을 구분하지 않는다 → 다음 차시에서 나라가 정한 법과 우리 반 약속을 나눈다. ③ 법이 없으면 자유롭다고 말한다 → 약한 사람의 권리는 누가 지켜 주는지 되묻는다. 마을과 사례는 모두 지어낸 것이다.',
      }),
      // ───────────────────────── 2차시 ─────────────────────────
      mk(2, {
        title: '우리 생활 속 법 찾아 종류별로 나누기',
        objective: '생활 속에서 만나는 법을 찾아 안전·질서·권리 보호 가운데 어떤 일을 하는지 구분하고, 나라의 법과 학급 약속의 차이를 말할 수 있다.',
        std: S1,
        ill: 'a child walking on a crosswalk with a school bag past signs for a school zone speed limit, a recycling station and a store receipt',
        scene: '우리 생활 속 법 찾기', more: [{ motif: 'house', x: 110, y: 222 }, { motif: 'tree', x: 170, y: 214 }, { motif: 'star', x: 400, y: 100 }],
        intro: {
          teacher: '"오늘 아침 학교에 오면서 법을 지킨 순간이 있었나요?" 신호등을 지켜 길을 건넌 일, 어린이 보호구역에서 천천히 가는 자동차 같은 사례를 모은다. 시연 단추로 "횡단보도 신호 지키기"가 사회 질서 칸에 놓이는 모습을 보인다. 법 이름(도로교통법, 소비자기본법, 아동복지법)은 사례와 함께 가볍게 소개한다.',
          student: '오늘 아침부터 지금까지 내가 지킨 약속이나 법을 한 가지 떠올려 봅시다.',
        },
        acts: [
          { title: '생활 속 법 나누기', tool: 'mindmap',
            task: '생활 속 사례를 법이 하는 일에 맞게 나눠요.',
            teacher: '"어린이 보호구역에서 자동차 속도를 제한하는 것은 무엇을 지켜 줄까요?" 어린이의 안전을 지켜 주는 법이라는 것을 짚는다. 환불 사례를 질서 칸으로 놓는 학생에게는 내가 가진 권리가 지켜지는 일인지 되묻는다.',
            items: [
              { prompt: '생활 속 사례를 법이 지키는 것에 따라 나누어 보세요.', toolOptions: { topic: '생활 속 법', slots: ['사람의 안전을 지켜요', '사회 질서를 지켜요', '권리를 보호해요'], cards: ['어린이 보호구역에서는 천천히 달려요', '횡단보도 신호를 지켜요', '쓰레기는 정해진 곳에 버려요', '물건을 산 뒤 환불받을 수 있어요'] }, target: { sort: { '사람의 안전을 지켜요': ['어린이 보호구역에서는 천천히 달려요'], '사회 질서를 지켜요': ['횡단보도 신호를 지켜요', '쓰레기는 정해진 곳에 버려요'], '권리를 보호해요': ['물건을 산 뒤 환불받을 수 있어요'] } }, difficulty: 0.2 },
              { prompt: '나라의 법과 우리 반 약속으로 나누어 보세요.', toolOptions: { topic: '법과 약속', slots: ['나라가 정한 법', '우리 반이 정한 약속'], cards: ['빨간불에 길을 건너면 안 돼요', '복도에서는 걸어요', '남의 물건을 훔치면 안 돼요', '모둠 활동 뒤에는 의자를 정리해요'] }, target: { sort: { '나라가 정한 법': ['빨간불에 길을 건너면 안 돼요', '남의 물건을 훔치면 안 돼요'], '우리 반이 정한 약속': ['복도에서는 걸어요', '모둠 활동 뒤에는 의자를 정리해요'] } }, difficulty: 0.25 },
              { prompt: '법을 지키는 행동만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '법 지키기', basket: '법을 지켜요', cards: ['자전거를 탈 때 보호 장구를 써요', '쓰레기를 분리해서 버려요', '빨간불에 급히 건너요', '남의 자전거를 허락 없이 타요'] }, target: { pick: ['자전거를 탈 때 보호 장구를 써요', '쓰레기를 분리해서 버려요'] }, difficulty: 0.2 },
            ] },
          { title: '법 이름과 하는 일 이어 보기', tool: 'mindmap',
            task: '법 이름과 그 법이 지키는 것을 이어요.',
            teacher: '"도로교통법은 이름만 보아도 어떤 일을 하는 법일까요?" 이름에서 하는 일을 짐작해 보게 한다. 소비자기본법을 아동 보호로 잇는 학생에게는 소비자와 아동이 각각 누구인지 묻는다.',
            items: [
              { prompt: '법 이름과 지키는 것을 이어 보세요.', toolOptions: { mode: 'match', topic: '법과 하는 일', slots: [{ id: 'm1', label: '도로교통법' }, { id: 'm2', label: '소비자기본법' }, { id: 'm3', label: '아동복지법' }], cards: ['도로에서 사람의 안전과 질서를 지켜요', '물건을 사는 사람의 권리를 보호해요', '어린이가 건강하게 자라도록 보호해요'] }, target: { match: { m1: '도로에서 사람의 안전과 질서를 지켜요', m2: '물건을 사는 사람의 권리를 보호해요', m3: '어린이가 건강하게 자라도록 보호해요' } }, difficulty: 0.25 },
              { prompt: '소비자의 권리를 지켜 주는 일만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '소비자 권리', basket: '소비자 권리', cards: ['물건에 문제가 있으면 바꿔 받을 수 있어요', '물건의 가격과 정보를 정확히 알 수 있어요', '시끄럽게 소리를 질러도 돼요', '가게에서 마음대로 물건을 가져가요'] }, target: { pick: ['물건에 문제가 있으면 바꿔 받을 수 있어요', '물건의 가격과 정보를 정확히 알 수 있어요'] }, difficulty: 0.25 },
              { prompt: '어린이를 보호하는 일만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '어린이 보호', basket: '어린이 보호', cards: ['학교 앞에서 속도를 줄여요', '어린이에게 위험한 일을 시키지 않아요', '어린이를 때리거나 소리 질러도 돼요', '어린이는 아무 말도 하면 안 돼요'] }, target: { pick: ['학교 앞에서 속도를 줄여요', '어린이에게 위험한 일을 시키지 않아요'] }, difficulty: 0.25 },
            ] },
        ],
        wrap: {
          teacher: '"법은 먼 이야기가 아니라 우리 생활 곳곳에 있었나요?" 아침에 만난 법 사례를 한 가지씩 다시 말하게 한다. 출구 3번을 헷갈린 학생에게는 학급 약속이 나라의 법과 다른 점(누가 정했는지)을 되묻는다.',
          exits: [
            { type: 'choice', prompt: '도로에서 사람의 안전과 질서를 지켜 주는 법은 무엇인가요?', options: ['도로교통법', '소비자기본법', '아동복지법'], answer: 0, difficulty: 0.1, explain: '도로교통법은 도로에서 사람들의 안전과 질서를 지켜요.' },
            { type: 'choice', prompt: '"물건에 문제가 있으면 바꿔 받는다"는 어느 법이 지키는 일인가요?', options: ['소비자기본법', '도로교통법'], answer: 0, difficulty: 0.15, explain: '물건을 사는 사람의 권리를 보호하는 법이에요.' },
            { type: 'choice', prompt: '나라가 정한 법과 우리 반이 정한 약속의 다른 점은 무엇인가요?', options: ['법은 나라가 정하고 약속은 우리가 정해요', '둘은 완전히 같아요'], answer: 0, difficulty: 0.2, explain: '법은 나라가 정해 모두가 지키고, 반 약속은 우리 반이 정해요.' },
            { type: 'mood', prompt: '오늘 생활 속 법 찾기는 어땠나요?' },
          ],
        },
        ws: {
          title: '생활 속 법 찾기',
          items: [
            { type: 'table', prompt: '법 이름과 지키는 것을 이어서 쓰세요.', columns: ['법 이름', '지키는 것'], cells: [['도로교통법', ''], ['소비자기본법', ''], ['아동복지법', '']], answer: '도로 안전·질서, 소비자 권리, 어린이 보호' },
            { type: 'choice', prompt: '나라가 정한 법에 ○ 하세요.', options: ['남의 물건을 훔치면 안 돼요', '우리 반은 복도에서 걸어요'], answer: '남의 물건을 훔치면 안 돼요' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '어린이 보호구역에서 천천히 달리는 것은 어린이의 ___을 지켜 줘요.', answer: '안전' },
            { type: 'choice', prompt: '법을 지키는 행동에 ○ 하세요.', options: ['쓰레기를 분리해서 버려요', '빨간불에 급히 건너요'], answer: '쓰레기를 분리해서 버려요' },
            { type: 'short', prompt: '오늘 하루 내가 지킨 법을 한 가지 쓰세요.' },
          ],
          easy: { note: '법은 안전·질서·권리를 지켜요.', items: [
            { type: 'choice', prompt: '도로 안전을 지키는 법에 ○ 하세요.', options: ['도로교통법', '소비자기본법'], answer: '도로교통법' },
            { type: 'choice', prompt: '법을 지키는 행동에 ○ 하세요.', options: ['신호를 지켜요', '쓰레기를 아무 데나 버려요'], answer: '신호를 지켜요' },
            { type: 'blank', prompt: '알맞은 말을 쓰세요.', text: '소비자기본법은 물건을 사는 사람의 ___을 지켜요.', answer: '권리' },
            { type: 'short', prompt: '우리 반이 정한 약속 하나를 쓰세요.' },
          ] },
        },
        notes: '자주 보이는 어려움: ① 법 이름을 외우는 것으로 끝난다 → 이름에서 하는 일을 짐작해 보게 한다. ② 학급 약속도 법이라고 말한다 → 누가 정했는지로 구분한다. ③ 하지 말아야 할 행동 카드를 법 지키기로 고른다 → 문장의 앞뒤를 끝까지 읽게 한다. 법 이름은 실제 법률이며 구체적 조항 번호는 다루지 않는다.',
      }),
      // ───────────────────────── 3차시 ─────────────────────────
      mk(3, {
        title: '헌법이 보장하는 기본권 이름과 사례 이어 보기',
        objective: '헌법이 나라의 기본 틀이며 국민의 기본권을 보장한다는 것을 알고 평등권·자유권·참정권·사회권·청구권의 사례를 구분할 수 있다.',
        std: S1,
        ill: 'a large open book labeled as the constitution with five colorful ribbons rising from it, each tied to a small scene of a student voting, speaking, studying, being treated equally and asking for help',
        scene: '헌법이 지켜 주는 권리들', more: [{ motif: 'star', x: 90, y: 100 }, { motif: 'star', x: 400, y: 110, color: 'buttercup' }, { motif: 'flower', x: 150, y: 224 }],
        intro: {
          teacher: '"우리나라에서 가장 중요한 법은 무엇일까요?" 헌법이라는 낱말을 이끌어 낸 뒤, 헌법은 나라의 기본 틀과 국민의 기본 권리를 정한 가장 기본이 되는 법이라고 알려 준다. 헌법 제10조에는 모든 국민이 인간으로서 존엄과 가치를 가지며 행복을 추구할 권리가 있다는 내용이 있다고 한 줄로 소개한다. 시연 단추로 "투표로 대표를 뽑아요"가 참정권과 이어지는 모습을 보인다.',
          student: '헌법이 우리 모두의 권리를 지켜 준다면 어떤 권리일지 한 가지 떠올려 봅시다.',
        },
        acts: [
          { title: '기본권과 사례 잇기 (1)', tool: 'mindmap',
            task: '기본권 이름과 알맞은 사례를 이어요.',
            teacher: '"차별받지 않을 권리는 헌법의 어느 이름과 가까울까요?" 평등권·자유권·참정권의 뜻을 한 문장씩 정리한다. 자유권을 "마음대로 아무 일이나 해도 되는 권리"로 이해하는 학생에게는 다른 사람의 권리를 해치지 않는 범위에서 누린다는 점을 짚는다.',
            items: [
              { prompt: '기본권 이름과 알맞은 사례를 이어 보세요.', toolOptions: { mode: 'match', topic: '기본권 사례', slots: [{ id: 'm1', label: '평등권' }, { id: 'm2', label: '자유권' }, { id: 'm3', label: '참정권' }], cards: ['성별이나 장애 때문에 차별받지 않아요', '내 생각을 자유롭게 말하고 쓸 수 있어요', '투표로 대표를 뽑을 수 있어요'] }, target: { match: { m1: '성별이나 장애 때문에 차별받지 않아요', m2: '내 생각을 자유롭게 말하고 쓸 수 있어요', m3: '투표로 대표를 뽑을 수 있어요' } }, difficulty: 0.2 },
              { prompt: '평등권에 해당하는 사례만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '평등권 사례', basket: '평등권', cards: ['누구나 똑같이 법의 보호를 받아요', '외모나 출신 때문에 차별받지 않아요', '학교에서 마음껏 책을 읽을 수 있어요', '선거에서 후보를 뽑을 수 있어요'] }, target: { pick: ['누구나 똑같이 법의 보호를 받아요', '외모나 출신 때문에 차별받지 않아요'] }, difficulty: 0.25 },
              { prompt: '자유권에 해당하는 사례만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '자유권 사례', basket: '자유권', cards: ['종교를 스스로 정할 수 있어요', '자기 생각을 글로 써서 나눌 수 있어요', '아무 이유 없이 갇히지 않아요', '투표권이 있어요'] }, target: { pick: ['종교를 스스로 정할 수 있어요', '자기 생각을 글로 써서 나눌 수 있어요', '아무 이유 없이 갇히지 않아요'] }, difficulty: 0.3 },
            ] },
          { title: '기본권과 사례 잇기 (2)', tool: 'mindmap',
            task: '남은 두 기본권과 헌법·법률의 관계를 알아봐요.',
            teacher: '"헌법과 도로교통법 같은 법률 가운데 어느 쪽이 더 기본이 되는 법일까요?" 법률은 헌법에 어긋나서는 안 된다는 것을 짚는다. 청구권을 "무엇이든 요구할 수 있는 권리"로 말하는 학생에게는 억울한 일을 바로잡아 달라고 요청할 수 있는 권리라는 뜻을 다시 짚는다.',
            items: [
              { prompt: '사회권과 청구권의 사례를 이어 보세요.', toolOptions: { mode: 'match', topic: '기본권 사례', slots: [{ id: 'm1', label: '사회권' }, { id: 'm2', label: '청구권' }], cards: ['교육을 받고 건강하게 살 권리를 누려요', '억울할 때 재판을 받을 수 있어요', '선거에서 투표할 수 있어요'] }, target: { match: { m1: '교육을 받고 건강하게 살 권리를 누려요', m2: '억울할 때 재판을 받을 수 있어요' } }, difficulty: 0.25 },
              { prompt: '헌법에 담긴 것과 헌법에 어긋나면 안 되는 것으로 나누어 보세요.', toolOptions: { topic: '헌법과 법률', slots: ['헌법에 담긴 것', '헌법에 어긋나면 안 되는 것'], cards: ['국민의 기본권', '나라의 기본 틀', '도로교통법', '소비자기본법'] }, target: { sort: { '헌법에 담긴 것': ['국민의 기본권', '나라의 기본 틀'], '헌법에 어긋나면 안 되는 것': ['도로교통법', '소비자기본법'] } }, difficulty: 0.3 },
              { prompt: '기본권 다섯 가지의 이름만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '기본권 이름', basket: '기본권', cards: ['평등권', '자유권', '참정권', '사회권', '청구권', '반장권', '숙제권'] }, target: { pick: ['평등권', '자유권', '참정권', '사회권', '청구권'] }, difficulty: 0.2 },
            ] },
        ],
        wrap: {
          teacher: '"헌법이 우리에게 주는 가장 큰 선물은 무엇일까요?" 모든 국민이 사람답게 살 권리를 가진다는 것을 말하게 한다. 출구 2번을 틀린 학생에게는 법률과 헌법의 관계를 도로교통법을 예로 다시 짚는다.',
          exits: [
            { type: 'choice', prompt: '투표로 대표를 뽑을 수 있는 권리는 어느 기본권인가요?', options: ['참정권', '평등권', '청구권'], answer: 0, difficulty: 0.1, explain: '나라의 일에 참여하는 권리가 참정권이에요.' },
            { type: 'choice', prompt: '헌법과 법률의 관계로 알맞은 것은?', options: ['법률은 헌법에 어긋나서는 안 돼요', '법률이 헌법보다 더 기본이에요'], answer: 0, difficulty: 0.2, explain: '헌법은 가장 기본이 되는 법이라 법률이 어긋나면 안 돼요.' },
            { type: 'choice', prompt: '억울한 일을 당했을 때 재판을 받을 수 있는 권리는?', options: ['청구권', '자유권', '참정권'], answer: 0, difficulty: 0.15, explain: '국가에 바로잡아 달라고 요청할 수 있는 권리가 청구권이에요.' },
            { type: 'mood', prompt: '오늘 헌법 공부는 어땠나요?' },
          ],
        },
        ws: {
          title: '헌법과 기본권',
          items: [
            { type: 'table', prompt: '기본권과 사례를 이어서 쓰세요.', columns: ['기본권', '사례'], cells: [['평등권', ''], ['자유권', ''], ['참정권', ''], ['사회권', ''], ['청구권', '']], answer: '차별받지 않음 / 생각을 말함 / 투표 / 교육·건강 / 재판 청구' },
            { type: 'choice', prompt: '헌법에 대한 설명으로 알맞은 것에 ○ 하세요.', options: ['나라의 기본 틀과 국민의 기본권을 정한 가장 기본이 되는 법', '학교 규칙을 정한 법'], answer: '나라의 기본 틀과 국민의 기본권을 정한 가장 기본이 되는 법' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '법률은 ___에 어긋나서는 안 돼요.', answer: '헌법' },
            { type: 'choice', prompt: '자유권에 해당하는 사례에 ○ 하세요.', options: ['내 생각을 자유롭게 말해요', '투표로 대표를 뽑아요'], answer: '내 생각을 자유롭게 말해요' },
            { type: 'short', prompt: '내가 가장 소중하게 생각하는 기본권과 까닭을 한 문장으로 쓰세요.' },
          ],
          easy: { note: '헌법은 나라의 가장 기본이 되는 법이에요.', items: [
            { type: 'choice', prompt: '투표할 수 있는 권리에 ○ 하세요.', options: ['참정권', '자유권'], answer: '참정권' },
            { type: 'choice', prompt: '차별받지 않을 권리에 ○ 하세요.', options: ['평등권', '청구권'], answer: '평등권' },
            { type: 'blank', prompt: '알맞은 말을 쓰세요.', text: '가장 기본이 되는 법은 ___이에요.', answer: '헌법' },
            { type: 'short', prompt: '내가 누리고 있는 권리 하나를 쓰세요.' },
          ] },
        },
        notes: '자주 보이는 어려움: ① 자유권을 "마음대로 해도 되는 권리"로 이해한다 → 다른 사람의 권리를 해치지 않는 범위에서 누린다고 짚는다. ② 청구권과 참정권을 섞는다 → 투표(참여)와 재판 요청(바로잡기)을 구분한다. ③ 기본권 이름을 외우기만 한다 → 사례와 이어 말하게 한다. 헌법 조항 번호는 제10조 한 곳만 소개하고 외우게 하지 않는다.',
      }),
      // ───────────────────────── 4차시 ─────────────────────────
      mk(4, {
        title: '우리 반이 바라는 권리 설문 그림그래프 그리고 읽기',
        objective: '학급 설문 결과를 그림그래프로 나타내고 가장 많이 선택한 권리를 찾아 사실 문장으로 말할 수 있다.',
        std: S1,
        ill: 'a classroom bulletin board with a picture graph made of small paper people showing which rights classmates want most, with a voting box beside it',
        scene: '우리 반은 무엇을 바랄까요?', more: [{ motif: 'house', x: 110, y: 222 }, { motif: 'star', x: 400, y: 100 }, { motif: 'flower', x: 340, y: 224 }],
        intro: {
          teacher: '"우리 반 친구들이 가장 지켜지길 바라는 권리는 무엇일까요? 짐작이 아니라 어떻게 알 수 있을까요?" 설문으로 모은 숫자를 그래프에 담아 보면 한눈에 알 수 있다고 알려 준다. 시연 단추로 한 줄이 그려지는 모습을 보인다. 오늘의 5학년 3반(가상 학급 24명) 설문 결과는 지어낸 값이며, 개인의 이름은 쓰지 않는다.',
          student: '그림 하나가 몇 명을 뜻하는지 먼저 읽어 보며 설문 결과를 그래프로 옮겨 봅시다.',
        },
        acts: [
          { title: '설문 결과를 그림그래프로', tool: 'chart',
            task: '큰 그림은 5명, 작은 그림은 1명이에요. 표의 수만큼 그림을 늘려요.',
            teacher: '"7명은 큰 그림 몇 개와 작은 그림 몇 개일까요?" 큰 그림 하나가 5명이라는 약속을 먼저 읽게 한다. 작은 그림을 5명으로 읽는 학생에게 범례를 다시 짚게 한다.',
            items: [
              { prompt: '표를 보고 그림그래프를 완성해 보세요. 평등과 자유는 이미 그려 있어요.', toolOptions: { type: 'picture', title: '5학년 3반이 바라는 권리', data: WANT, unit: '명', xLabel: '권리', icon: 'person', icons: [{ value: 5, name: '5명' }, { value: 1, name: '1명' }], given: [0, 1] }, target: { build: true }, difficulty: 0.2 },
              { prompt: '안전과 쉴 권리의 그림을 그려 보세요. 나머지는 이미 그려 있어요.', toolOptions: { type: 'picture', title: '5학년 3반이 바라는 권리', data: WANT, unit: '명', xLabel: '권리', icon: 'person', icons: [{ value: 5, name: '5명' }, { value: 1, name: '1명' }], given: [0, 1, 3] }, target: { build: true }, difficulty: 0.2 },
              { prompt: '배울 권리의 그림만 그려 보세요. 나머지는 이미 그려 있어요.', toolOptions: { type: 'picture', title: '5학년 3반이 바라는 권리', data: WANT, unit: '명', xLabel: '권리', icon: 'person', icons: [{ value: 5, name: '5명' }, { value: 1, name: '1명' }], given: [0, 1, 2, 4] }, target: { build: true }, difficulty: 0.2 },
            ] },
          { title: '막대그래프로 읽기', tool: 'chart',
            task: '같은 설문을 막대그래프로 읽고 답해요. 눈금 한 칸은 1명이에요.',
            teacher: '"가장 많은 학생이 고른 권리는 무엇이고, 몇 명일까요?" 가장 긴 막대를 찾고 눈금을 읽게 한다. 2번에서 학생 수 총합 24명을 모르는 학생에게는 모든 막대의 합이 전체 학생 수라는 것을 알려 준다.',
            items: [
              { prompt: '가장 많은 친구가 고른 권리를 골라 보세요.', toolOptions: { type: 'bar', mode: 'read', title: '5학년 3반이 바라는 권리', data: WANT, unit: '명', scale: 1, xLabel: '권리', choices: ['평등', '배울 권리', '안전'], why: ['평등보다 긴 막대가 있어요.', null, '안전보다 긴 막대가 있어요.'] }, target: { pick: 1 }, difficulty: 0.1 },
              { prompt: '안전을 고른 친구는 몇 명인지 쓰세요.', toolOptions: { type: 'bar', mode: 'read', title: '5학년 3반이 바라는 권리', data: WANT, unit: '명', scale: 1, xLabel: '권리', question: '안전을 고른 친구는 몇 명인가요?' }, target: { value: 5 }, difficulty: 0.15 },
              { prompt: '평등과 자유를 고른 친구를 합하면 몇 명인지 쓰세요.', toolOptions: { type: 'bar', mode: 'read', title: '5학년 3반이 바라는 권리', data: WANT, unit: '명', scale: 1, xLabel: '권리', question: '평등과 자유를 고른 친구는 모두 몇 명인가요?' }, target: { value: 10 }, difficulty: 0.25 },
            ] },
          { title: '그래프로 알 수 있는 말 고르기', tool: 'mindmap',
            task: '그래프로 확인할 수 있는 문장과 그렇지 않은 문장으로 나누어요.',
            teacher: '"배울 권리를 가장 많이 골랐다는 것은 사실일까요, 생각일까요?" 그래프에 나온 수는 사실이고 "배울 권리가 가장 중요해요"는 생각이라는 것을 짚는다. 쉴 권리를 가장 적게 골랐으니 중요하지 않다고 말하는 학생에게는 선택한 수와 중요한 정도가 같은지 묻는다.',
            items: [
              { prompt: '문장을 그래프로 알 수 있는 사실과 생각으로 나누어 보세요.', toolOptions: { topic: '설문 결과', slots: ['그래프로 알 수 있는 사실', '사람마다 다른 생각'], cards: ['배울 권리를 고른 친구가 가장 많아요', '쉴 권리를 고른 친구는 2명이에요', '배울 권리가 가장 중요한 권리예요', '쉴 권리는 필요 없는 권리예요'] }, target: { sort: { '그래프로 알 수 있는 사실': ['배울 권리를 고른 친구가 가장 많아요', '쉴 권리를 고른 친구는 2명이에요'], '사람마다 다른 생각': ['배울 권리가 가장 중요한 권리예요', '쉴 권리는 필요 없는 권리예요'] } }, difficulty: 0.2 },
              { prompt: '그래프로 확인할 수 있는 문장과 알맞은 근거를 이어 보세요.', toolOptions: { mode: 'match', topic: '문장과 근거', slots: [{ id: 'm1', label: '자유보다 안전을 고른 친구가 더 많아요' }, { id: 'm2', label: '전체 친구는 24명이에요' }], cards: ['안전 5명, 자유 4명', '6 + 4 + 5 + 7 + 2 = 24', '배울 권리가 7명이에요'] }, target: { match: { m1: '안전 5명, 자유 4명', m2: '6 + 4 + 5 + 7 + 2 = 24' } }, difficulty: 0.3 },
              { prompt: '설문을 더 믿을 수 있게 하는 방법만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '믿을 수 있는 설문', basket: '믿을 수 있어요', cards: ['모든 친구에게 같은 질문을 해요', '이름을 쓰지 않고 답하게 해요', '인기 있는 친구의 답만 모아요', '답을 고르라고 강요해요'] }, target: { pick: ['모든 친구에게 같은 질문을 해요', '이름을 쓰지 않고 답하게 해요'] }, difficulty: 0.25 },
            ] },
        ],
        wrap: {
          teacher: '"그림그래프에서 그림 하나가 몇 명인지는 어디에서 알 수 있나요?" 범례를 먼저 읽는 습관을 다시 말하게 한다. 출구 3번을 틀린 학생에게는 선택한 수와 중요도가 같은 말인지 되묻는다.',
          exits: [
            { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '다른 반이 바라는 권리', data: [['평등', 5], ['자유', 8], ['안전', 6], ['쉴 권리', 3]], unit: '명', scale: 1, xLabel: '권리', choices: ['평등', '자유', '안전'], why: ['평등보다 긴 막대가 있어요.', null, '안전보다 긴 막대가 있어요.'] }, prompt: '다른 반 그래프에서 가장 많은 친구가 고른 권리를 고르세요.', target: { pick: 1 }, difficulty: 0.15 },
            { type: 'choice', prompt: '그림그래프에서 큰 그림이 5명, 작은 그림이 1명일 때 큰 그림 1개와 작은 그림 3개는 몇 명인가요?', options: ['8명', '4명', '15명'], answer: 0, difficulty: 0.2, explain: '5 + 3 = 8명이에요.' },
            { type: 'choice', prompt: '설문에서 한 가지를 가장 적게 고른 것은 중요하지 않다는 뜻일까요?', options: ['아니요, 적게 고른 것과 중요하지 않은 것은 달라요', '네, 중요하지 않아요'], answer: 0, difficulty: 0.25, explain: '선택한 사람 수와 중요한 정도는 같지 않아요. 사실과 생각을 나누어 보아야 해요.' },
            { type: 'mood', prompt: '오늘 그래프 읽기는 어땠나요?' },
          ],
        },
        ws: {
          title: '우리 반이 바라는 권리 읽기',
          items: [
            { type: 'table', prompt: '설문 표를 완성하세요.', columns: ['권리', '친구 수(명)'], cells: [['평등', '6'], ['자유', ''], ['안전', ''], ['배울 권리', ''], ['쉴 권리', '']], answer: '자유 4, 안전 5, 배울 권리 7, 쉴 권리 2' },
            { type: 'blank', prompt: '표를 보고 빈칸을 채우세요.', text: '가장 많이 고른 권리는 ___이고, 가장 적게 고른 권리는 ___이에요.', answer: '배울 권리, 쉴 권리' },
            { type: 'blank', prompt: '전체 친구 수를 구하세요.', text: '6 + 4 + 5 + 7 + 2 = ___ (명)', answer: '24' },
            { type: 'choice', prompt: '그래프로 알 수 있는 사실에 ○ 하세요.', options: ['안전을 고른 친구는 5명이에요', '쉴 권리는 필요 없는 권리예요'], answer: '안전을 고른 친구는 5명이에요' },
            { type: 'short', prompt: '이 설문을 보고 우리 반에서 더 알아보고 싶은 것을 한 문장으로 쓰세요.' },
          ],
          easy: { note: '그림 하나가 몇 명인지 먼저 읽어요.', items: [
            { type: 'table', prompt: '표를 완성하세요.', columns: ['권리', '친구 수(명)'], cells: [['평등', '6'], ['자유', ''], ['안전', '']], answer: '자유 4, 안전 5' },
            { type: 'choice', prompt: '더 많이 고른 권리에 ○ 하세요.', options: ['배울 권리(7명)', '쉴 권리(2명)'], answer: '배울 권리(7명)' },
            { type: 'blank', prompt: '알맞은 수를 쓰세요.', text: '5 + 2 = ___ (명)', answer: '7' },
            { type: 'short', prompt: '내가 가장 지켜지길 바라는 권리를 쓰세요.' },
          ] },
        },
        notes: '자주 보이는 어려움: ① 그림 하나를 1명으로 읽는다 → 범례를 먼저 읽는다. ② 선택한 수가 적으면 덜 중요한 권리라고 말한다 → 설문 결과는 사실일 뿐, 중요한 정도는 별개의 생각이라고 짚는다. ③ 설문에서 친구 이름이나 개인 의견을 말하게 한다 → 이름 없이 수로만 다룬다. 이 차시의 학급과 값은 모두 지어낸 것이다.',
      }),
      // ───────────────────────── 5차시 ─────────────────────────
      mk(5, {
        title: '다솜마을 주민 설문으로 법을 지키는 까닭 읽기',
        objective: '주민 설문 막대그래프를 읽고 사람들이 법을 지키는 까닭을 자료로 설명하며 사실과 생각을 구분할 수 있다.',
        std: S1,
        ill: 'villagers at a community hall filling out survey cards beside a bar chart titled with reasons for following the rules',
        scene: '왜 법을 지킬까요?', more: [{ motif: 'house', x: 110, y: 222 }, { motif: 'house', x: 170, y: 224, color: 'sky', s: 0.8 }, { motif: 'tree', x: 350, y: 214 }],
        intro: {
          teacher: '"법을 지키는 까닭은 무엇일까요? 사람마다 같을까요?" 학생이 말하는 까닭을 몇 가지 모은 뒤, 다솜마을(지어낸 마을) 주민 70명에게 물은 설문 결과를 보자고 한다. 시연 단추로 가장 긴 막대가 어느 것인지 짚어 보인다. 오늘 숫자는 모두 지어낸 값이며, 특정한 사람의 이름은 쓰지 않는다.',
          student: '법을 지키는 까닭으로 가장 많이 나올 말이 무엇일지 짐작해 봅시다.',
        },
        acts: [
          { title: '설문 막대그래프 읽기', tool: 'chart',
            task: '눈금 한 칸은 5명이에요. 막대를 읽고 질문에 답해요.',
            teacher: '"가장 긴 막대는 무엇을 말해 줄까요?" 가장 많은 주민이 고른 까닭이라는 것을 막대 끝 눈금으로 확인하게 한다. 3번에서 두 막대의 차를 구할 때 큰 수에서 작은 수를 빼는 것을 상기시킨다.',
            items: [
              { prompt: '가장 많은 주민이 고른 까닭을 골라 보세요.', toolOptions: { type: 'bar', mode: 'read', title: '다솜마을 주민이 법을 지키는 까닭', data: WHY, unit: '명', scale: 5, xLabel: '까닭', choices: ['모두 안전해서', '벌을 받을까 봐', '약속이니까'], why: [null, '벌을 받을까 봐는 12명이에요.', '약속이니까는 20명이에요.'] }, target: { pick: 0 }, difficulty: 0.1 },
              { prompt: '약속이니까를 고른 주민은 몇 명인지 쓰세요.', toolOptions: { type: 'bar', mode: 'read', title: '다솜마을 주민이 법을 지키는 까닭', data: WHY, unit: '명', scale: 5, xLabel: '까닭', question: '약속이니까를 고른 주민은 몇 명인가요?' }, target: { value: 20 }, difficulty: 0.15 },
              { prompt: '모두 안전해서와 벌을 받을까 봐의 차이는 몇 명인지 쓰세요.', toolOptions: { type: 'bar', mode: 'read', title: '다솜마을 주민이 법을 지키는 까닭', data: WHY, unit: '명', scale: 2, xLabel: '까닭', question: '두 막대는 몇 명 차이인가요?' }, target: { value: 22 }, difficulty: 0.3 },
            ] },
          { title: '표를 보고 막대 이어 그리기', tool: 'chart',
            task: '표의 수대로 막대를 올려요. 눈금 한 칸은 5명이고 한 번 누르면 1명씩 변해요.',
            teacher: '"표의 수는 막대의 어느 눈금에 닿아야 할까요?" 표와 그래프를 번갈아 짚으며 완성하게 한다. 34를 35로 맞추는 학생에게는 35 눈금 바로 아래라는 것을 눈금선으로 알려 준다.',
            items: [
              { prompt: '표를 보고 막대그래프를 완성해 보세요. 첫째 막대만 이미 그려 있어요.', toolOptions: { type: 'bar', title: '다솜마을 주민이 법을 지키는 까닭', data: WHY, unit: '명', scale: 5, step: 1, xLabel: '까닭', yLabel: '주민 수', given: [0] }, target: { build: true }, difficulty: 0.25 },
              { prompt: '벌을 받을까 봐와 잘 모르겠어요 막대를 그려 보세요. 나머지는 이미 그려 있어요.', toolOptions: { type: 'bar', title: '다솜마을 주민이 법을 지키는 까닭', data: WHY, unit: '명', scale: 5, step: 1, xLabel: '까닭', yLabel: '주민 수', given: [0, 2] }, target: { build: true }, difficulty: 0.25 },
              { prompt: '약속이니까 막대만 그려 보세요. 나머지는 이미 그려 있어요.', toolOptions: { type: 'bar', title: '다솜마을 주민이 법을 지키는 까닭', data: WHY, unit: '명', scale: 5, step: 1, xLabel: '까닭', yLabel: '주민 수', given: [0, 1, 3] }, target: { build: true }, difficulty: 0.2 },
            ] },
          { title: '그래프로 말할 수 있는 것', tool: 'mindmap',
            task: '그래프에서 알 수 있는 문장과 더 알아봐야 하는 문장으로 나누어요.',
            teacher: '"벌을 받을까 봐 지키는 사람이 12명이라는 것을 알았어요. 그 사람들은 정말 법을 존중하지 않는 걸까요?" 설문 한 문항으로는 사람의 마음 전체를 알 수 없다는 것을 짚는다. 모든 주민이 안전해서 지킨다고 일반화하는 학생에게는 숫자를 다시 읽게 한다.',
            items: [
              { prompt: '문장을 그래프로 알 수 있는 것과 더 알아봐야 하는 것으로 나누어 보세요.', toolOptions: { topic: '설문 해석', slots: ['그래프로 알 수 있어요', '더 알아봐야 해요'], cards: ['안전해서 지킨다는 주민이 가장 많아요', '벌 때문에 지키는 주민은 12명이에요', '벌을 받을까 봐 지키는 사람은 법을 싫어해요', '모두 약속이라서 지켜요'] }, target: { sort: { '그래프로 알 수 있어요': ['안전해서 지킨다는 주민이 가장 많아요', '벌 때문에 지키는 주민은 12명이에요'], '더 알아봐야 해요': ['벌을 받을까 봐 지키는 사람은 법을 싫어해요', '모두 약속이라서 지켜요'] } }, difficulty: 0.25 },
              { prompt: '법을 잘 지키는 사회에 도움이 되는 말만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '법을 지키는 사회', basket: '도움이 돼요', cards: ['이웃이 서로 안심하고 살 수 있어요', '약속을 어기면 책임을 져요', '아무도 법을 몰라도 돼요', '힘센 사람은 법을 안 지켜도 돼요'] }, target: { pick: ['이웃이 서로 안심하고 살 수 있어요', '약속을 어기면 책임을 져요'] }, difficulty: 0.2 },
              { prompt: '까닭 막대와 알맞은 뜻을 이어 보세요.', toolOptions: { mode: 'match', topic: '까닭과 뜻', slots: [{ id: 'm1', label: '모두 안전해서' }, { id: 'm2', label: '약속이니까' }], cards: ['법이 나와 이웃을 지켜 준다고 생각해요', '함께 정한 규칙을 존중해요', '벌이 무서워서 어쩔 수 없이 따라요'] }, target: { match: { m1: '법이 나와 이웃을 지켜 준다고 생각해요', m2: '함께 정한 규칙을 존중해요' } }, difficulty: 0.25 },
            ] },
        ],
        wrap: {
          teacher: '"설문 결과를 읽고 사람들이 법을 지키는 까닭이 한 가지라고 말할 수 있을까요?" 여러 까닭이 섞여 있다는 것을 막대 높이로 다시 확인하게 한다. 출구 2번에서 마음속 까닭을 단정한 학생에게는 그래프에 나온 숫자와 해석의 차이를 짚는다.',
          exits: [
            { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '다른 마을 설문', data: [['안전해서', 28], ['벌 때문에', 10], ['약속이라서', 16]], unit: '명', scale: 2, xLabel: '까닭', choices: ['안전해서', '벌 때문에', '약속이라서'], why: [null, '벌 때문에는 10명이에요.', '약속이라서는 16명이에요.'] }, prompt: '다른 마을 그래프에서 가장 많은 사람이 고른 까닭을 고르세요.', target: { pick: 0 }, difficulty: 0.15 },
            { type: 'choice', prompt: '"벌을 받을까 봐 지키는 사람은 법을 싫어한다"는 그래프로 알 수 있는 사실인가요?', options: ['아니요, 더 알아봐야 해요', '네, 그래프에 쓰여 있어요'], answer: 0, difficulty: 0.25, explain: '그래프에는 선택한 수만 나와 있고 마음속은 알 수 없어요.' },
            { type: 'choice', prompt: '설문 결과를 바르게 읽은 것은?', options: ['안전해서가 34명으로 가장 많아요', '모두 같은 까닭으로 지켜요'], answer: 0, difficulty: 0.15, explain: '막대 높이로 많고 적음을 읽을 수 있어요.' },
            { type: 'mood', prompt: '오늘 설문 읽기는 어땠나요?' },
          ],
        },
        ws: {
          title: '법을 지키는 까닭 설문 읽기',
          items: [
            { type: 'table', prompt: '설문 표를 완성하세요.', columns: ['까닭', '주민 수(명)'], cells: [['모두 안전해서', '34'], ['벌을 받을까 봐', ''], ['약속이니까', ''], ['잘 모르겠어요', '']], answer: '12, 20, 4' },
            { type: 'blank', prompt: '전체 주민 수를 구하세요.', text: '34 + 12 + 20 + 4 = ___ (명)', answer: '70' },
            { type: 'blank', prompt: '두 까닭의 차를 구하세요.', text: '34 − 12 = ___ (명)', answer: '22' },
            { type: 'choice', prompt: '설문으로 알 수 있는 사실에 ○ 하세요.', options: ['약속이니까를 고른 주민은 20명이에요', '벌을 받을까 봐 지키는 사람은 법을 싫어해요'], answer: '약속이니까를 고른 주민은 20명이에요' },
            { type: 'short', prompt: '내가 법을 지키는 까닭을 한 문장으로 쓰세요.' },
          ],
          easy: { note: '막대가 가장 긴 까닭이 가장 많은 사람이 고른 까닭이에요.', items: [
            { type: 'table', prompt: '표를 완성하세요.', columns: ['까닭', '주민 수(명)'], cells: [['모두 안전해서', '34'], ['약속이니까', '']], answer: '20' },
            { type: 'choice', prompt: '더 많이 고른 까닭에 ○ 하세요.', options: ['모두 안전해서', '벌을 받을까 봐'], answer: '모두 안전해서' },
            { type: 'blank', prompt: '알맞은 수를 쓰세요.', text: '12 + 4 = ___ (명)', answer: '16' },
            { type: 'short', prompt: '법을 지키면 좋은 점을 한 가지 쓰세요.' },
          ] },
        },
        notes: '자주 보이는 어려움: ① 그래프에 나온 숫자와 사람의 마음을 섞는다 → 선택한 수만 사실이고 마음속 까닭은 더 알아봐야 한다고 짚는다. ② 눈금 한 칸을 1로 읽는다 → 눈금선 옆 숫자를 먼저 읽게 한다. ③ 모든 주민의 까닭이 같다고 일반화한다 → 막대마다 서로 다른 까닭이 있다고 말한다. 이 차시의 마을과 값은 모두 지어낸 것이다.',
      }),
      // ───────────────────────── 6차시 ─────────────────────────
      mk(6, {
        title: '우리 학교에서 인권 사례 찾아 기본권에 맞추기',
        objective: '학교 생활 속에서 인권이 지켜지는 사례를 찾아 어떤 기본권과 이어지는지 말하고 조사 순서를 정할 수 있다.',
        std: S1,
        ill: 'children exploring a school with notebooks, spotting a wheelchair ramp, a library shelf and a lunch menu card with allergy symbols',
        scene: '우리 학교의 인권 사례 찾기', more: [{ motif: 'house', x: 150, y: 222 }, { motif: 'tree', x: 330, y: 214 }, { motif: 'flower', x: 400, y: 224 }],
        intro: {
          teacher: '"우리 학교에서 모든 친구가 편하게 지내도록 마련된 것이 무엇일까요?" 경사로, 점자 블록, 알레르기 식단 안내처럼 학생이 아는 사례를 모은다. 시연 단추로 "휠체어를 쓰는 학생도 경사로로 교실에 들어가요"가 평등권 칸에 놓이는 모습을 보인다. 오늘의 학교와 사례는 모두 지어낸 것이며, 특정 친구를 가리키지 않는다.',
          student: '우리 학교에서 모두가 함께 지내도록 마련된 것을 한 가지 떠올려 봅시다.',
        },
        acts: [
          { title: '사례를 기본권에 나누기', tool: 'mindmap',
            task: '생활 속 인권 사례를 알맞은 기본권 칸으로 나눠요.',
            teacher: '"경사로는 어떤 권리를 지켜 줄까요?" 장애가 있어도 똑같이 학교에 다닐 수 있게 하는 평등권과 연결한다. 급식을 자유권 칸에 놓는 학생에게는 건강하게 살아갈 수 있도록 국가가 마련해 주는 권리가 무엇이었는지 되묻는다.',
            items: [
              { prompt: '사례를 알맞은 기본권으로 나누어 보세요.', toolOptions: { topic: '학교 속 인권', slots: ['평등권', '자유권', '사회권'], cards: ['휠체어를 쓰는 학생도 경사로로 교실에 들어가요', '학교 신문에 학생이 자기 생각을 쓸 수 있어요', '학교에서 균형 잡힌 급식을 먹어요'] }, target: { sort: { 평등권: ['휠체어를 쓰는 학생도 경사로로 교실에 들어가요'], 자유권: ['학교 신문에 학생이 자기 생각을 쓸 수 있어요'], 사회권: ['학교에서 균형 잡힌 급식을 먹어요'] } }, difficulty: 0.2 },
              { prompt: '사례 여섯 장을 알맞은 기본권으로 나누어 보세요.', toolOptions: { topic: '학교 속 인권', slots: ['평등권', '자유권', '사회권'], cards: ['누구나 과학 동아리에 들어갈 수 있어요', '다문화 가정 친구도 같은 기회를 가져요', '독서 감상문을 내 생각대로 써요', '좋아하는 동아리를 스스로 골라요', '아플 때 보건실에서 도움을 받아요', '도서관에서 누구나 책을 빌려요'] }, target: { sort: { 평등권: ['누구나 과학 동아리에 들어갈 수 있어요', '다문화 가정 친구도 같은 기회를 가져요'], 자유권: ['독서 감상문을 내 생각대로 써요', '좋아하는 동아리를 스스로 골라요'], 사회권: ['아플 때 보건실에서 도움을 받아요', '도서관에서 누구나 책을 빌려요'] } }, difficulty: 0.3 },
              { prompt: '인권을 존중하는 사례만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '인권 존중', basket: '인권 존중', cards: ['모든 친구의 의견을 끝까지 들어요', '외모로 친구를 놀리지 않아요', '힘센 친구가 먼저 줄을 서요', '말 없는 친구는 빼고 정해요'] }, target: { pick: ['모든 친구의 의견을 끝까지 들어요', '외모로 친구를 놀리지 않아요'] }, difficulty: 0.2 },
            ] },
          { title: '조사 순서와 장소 정하기', tool: 'mindmap',
            task: '인권 사례를 조사하는 차례대로 놓고, 장소와 찾을 수 있는 것을 이어요.',
            teacher: '"조사를 시작하려면 가장 먼저 무엇을 해야 할까요?" 주제를 정하고 계획을 세운 뒤 자료를 모으고 정리한다는 순서를 말하게 한다. 조사할 때 친구 모르게 사진을 찍는 방법을 고르는 학생에게는 상대의 동의가 필요한 이유를 이야기한다.',
            items: [
              { prompt: '인권 사례 조사의 순서대로 카드를 놓아 보세요.', toolOptions: { mode: 'order', topic: '조사 순서', slots: ['첫째', '둘째', '셋째', '넷째'], cards: ['조사 주제를 정해요', '조사 계획을 세워요', '자료를 모아요', '결과를 정리하고 발표해요'] }, target: { order: ['조사 주제를 정해요', '조사 계획을 세워요', '자료를 모아요', '결과를 정리하고 발표해요'] }, difficulty: 0.2 },
              { prompt: '학교 장소와 그곳에서 찾을 수 있는 인권 사례를 이어 보세요.', toolOptions: { mode: 'match', topic: '장소와 사례', slots: [{ id: 'm1', label: '학교 현관' }, { id: 'm2', label: '급식실' }, { id: 'm3', label: '도서관' }], cards: ['휠체어가 다닐 경사로가 있어요', '알레르기를 고려한 식단 안내가 있어요', '누구나 책을 빌릴 수 있어요'] }, target: { match: { m1: '휠체어가 다닐 경사로가 있어요', m2: '알레르기를 고려한 식단 안내가 있어요', m3: '누구나 책을 빌릴 수 있어요' } }, difficulty: 0.25 },
              { prompt: '조사할 때 지켜야 할 점만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '조사 예절', basket: '지켜야 해요', cards: ['조사 대상에게 먼저 설명하고 동의를 얻어요', '이름이나 얼굴을 함부로 공개하지 않아요', '몰래 사진을 찍어요', '불편해하는 친구에게 계속 물어요'] }, target: { pick: ['조사 대상에게 먼저 설명하고 동의를 얻어요', '이름이나 얼굴을 함부로 공개하지 않아요'] }, difficulty: 0.25 },
            ] },
        ],
        wrap: {
          teacher: '"우리 학교에서 인권이 지켜지는 모습을 찾으면서 새로 알게 된 것은 무엇인가요?" 눈에 잘 띄지 않는 사례도 있다는 것을 나누게 한다. 출구 3번을 틀린 학생에게는 조사하는 사람이 지켜야 할 마음가짐을 다시 말하게 한다.',
          exits: [
            { type: 'choice', prompt: '경사로가 보장하는 기본권으로 가장 가까운 것은?', options: ['평등권', '참정권', '청구권'], answer: 0, difficulty: 0.15, explain: '장애와 관계없이 똑같이 학교에 다닐 수 있게 하는 권리예요.' },
            { type: 'choice', prompt: '인권 사례 조사에서 가장 먼저 할 일은 무엇인가요?', options: ['조사 주제를 정해요', '결과를 발표해요', '자료를 정리해요'], answer: 0, difficulty: 0.1, explain: '무엇을 조사할지 정한 뒤에 계획을 세워요.' },
            { type: 'choice', prompt: '조사할 때 친구의 얼굴이 나온 사진을 쓰려면 어떻게 해야 하나요?', options: ['먼저 동의를 구해요', '몰래 찍어서 써요', '이름을 크게 써요'], answer: 0, difficulty: 0.2, explain: '사진과 이름은 개인 정보이므로 동의를 구해야 해요.' },
            { type: 'mood', prompt: '오늘 인권 사례 찾기는 어땠나요?' },
          ],
        },
        ws: {
          title: '우리 학교 인권 사례 조사 계획',
          items: [
            { type: 'table', prompt: '학교 장소와 찾을 수 있는 인권 사례를 쓰세요.', columns: ['장소', '찾은 사례'], cells: [['학교 현관', ''], ['급식실', ''], ['도서관', '']], answer: '경사로, 알레르기 식단 안내, 누구나 책 빌리기(예)' },
            { type: 'choice', prompt: '조사의 첫 단계에 ○ 하세요.', options: ['조사 주제 정하기', '발표하기'], answer: '조사 주제 정하기' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '조사할 때는 상대에게 먼저 설명하고 ___를 얻어요.', answer: '동의' },
            { type: 'choice', prompt: '평등권 사례에 ○ 하세요.', options: ['누구나 같은 기회를 가져요', '투표로 대표를 뽑아요'], answer: '누구나 같은 기회를 가져요' },
            { type: 'short', prompt: '우리 학교에서 더 알아보고 싶은 인권 주제를 한 가지 쓰세요.' },
          ],
          easy: { note: '조사는 주제 정하기부터 시작해요.', items: [
            { type: 'choice', prompt: '경사로는 어느 기본권과 이어질까요?', options: ['평등권', '청구권'], answer: '평등권' },
            { type: 'choice', prompt: '조사할 때 지킬 점에 ○ 하세요.', options: ['동의를 구해요', '몰래 찍어요'], answer: '동의를 구해요' },
            { type: 'blank', prompt: '알맞은 말을 쓰세요.', text: '조사 순서: 주제 정하기 → 계획 세우기 → ___ 모으기', answer: '자료' },
            { type: 'short', prompt: '우리 학교에서 좋다고 생각한 시설 한 가지를 쓰세요.' },
          ] },
        },
        notes: '자주 보이는 어려움: ① 사례와 기본권 이름을 짝짓지 못한다 → 3차시 기본권 정리표를 함께 보며 이어 본다. ② 조사를 흥미 위주로만 정한다 → 조사 주제를 정할 때 "누구의 어떤 권리인가"를 묻는다. ③ 조사하면서 개인을 드러낸다 → 이름과 얼굴을 쓰지 않고 사례만 말한다. 학교와 사례는 모두 지어낸 것이다.',
      }),
      // ───────────────────────── 7차시 ─────────────────────────
      mk(7, {
        title: '조사 질문에 맞는 방법 고르고 설문 문항 다듬기',
        objective: '조사 질문에 알맞은 조사 방법(관찰·면담·설문·자료 검색)을 고르고 개인 정보를 지키는 설문 문항을 다듬을 수 있다.',
        std: S1,
        ill: 'children with clipboards observing a school hallway, interviewing a teacher and handing out anonymous survey cards in a paper-cut classroom',
        scene: '어떻게 조사할까요?', more: [{ motif: 'house', x: 110, y: 222 }, { motif: 'star', x: 400, y: 100 }, { motif: 'flower', x: 340, y: 224 }],
        intro: {
          teacher: '"우리 학교에 경사로가 몇 군데 있는지 알아보려면 어떻게 하면 될까요?" 학생들이 말하는 방법(직접 세기, 선생님께 여쭈기, 친구들에게 묻기, 책 찾기)을 모아 이름을 붙여 준다. 시연 단추로 첫 문항의 조사 방법이 질문과 이어지는 모습을 보인다. 질문에 따라 알맞은 방법이 다르다는 것이 오늘의 핵심이다.',
          student: '궁금한 것을 알아낼 때 내가 쓰는 방법을 두 가지 떠올려 봅시다.',
        },
        acts: [
          { title: '질문과 조사 방법 이어 보기', tool: 'mindmap',
            task: '조사 질문과 알맞은 조사 방법을 이어요.',
            teacher: '"우리 반 친구들이 바라는 권리를 알아보려면 어떤 방법이 좋을까요?" 여러 사람의 생각을 한꺼번에 모을 때는 설문이 알맞다고 짚는다. 면담과 설문을 구분하지 못하는 학생에게는 한 사람과 깊이 이야기하는 방법이 무엇인지 되묻는다.',
            items: [
              { prompt: '질문과 알맞은 조사 방법을 이어 보세요.', toolOptions: { mode: 'match', topic: '질문과 방법', slots: [{ id: 'm1', label: '직접 관찰하기' }, { id: 'm2', label: '면담하기' }, { id: 'm3', label: '설문하기' }], cards: ['우리 학교에 경사로가 몇 군데 있는지 세어요', '급식실 선생님께 알레르기 식단을 어떻게 준비하는지 여쭈어요', '우리 반 친구들이 바라는 권리를 물어요'] }, target: { match: { m1: '우리 학교에 경사로가 몇 군데 있는지 세어요', m2: '급식실 선생님께 알레르기 식단을 어떻게 준비하는지 여쭈어요', m3: '우리 반 친구들이 바라는 권리를 물어요' } }, difficulty: 0.2 },
              { prompt: '다른 질문과 알맞은 조사 방법을 이어 보세요.', toolOptions: { mode: 'match', topic: '질문과 방법', slots: [{ id: 'm1', label: '책이나 누리집 찾아보기' }, { id: 'm2', label: '면담하기' }, { id: 'm3', label: '관찰하기' }], cards: ['헌법의 기본권 내용을 찾아봐요', '도서관 사서 선생님께 이용 규칙을 여쭈어요', '복도의 점자 블록 위치를 살펴봐요'] }, target: { match: { m1: '헌법의 기본권 내용을 찾아봐요', m2: '도서관 사서 선생님께 이용 규칙을 여쭈어요', m3: '복도의 점자 블록 위치를 살펴봐요' } }, difficulty: 0.25 },
              { prompt: '설문이 알맞은 질문만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '설문이 알맞아요', basket: '설문', cards: ['우리 반 친구들이 가장 소중하게 여기는 권리는?', '우리 학교 경사로는 모두 몇 곳일까?', '헌법에는 어떤 내용이 있을까?', '급식 담당 선생님은 어떤 준비를 하실까?'] }, target: { pick: ['우리 반 친구들이 가장 소중하게 여기는 권리는?'] }, difficulty: 0.25 },
            ] },
          { title: '설문 문항 다듬기', tool: 'mindmap',
            task: '설문 문항을 읽고 알맞은 문항과 그렇지 않은 문항을 가려요.',
            teacher: '"설문 문항이 한쪽으로 몰아가는 말이면 어떻게 될까요?" 정답을 정해 놓은 질문은 결과를 믿을 수 없게 만든다는 것을 짚는다. 이름을 적게 하는 문항을 고르는 학생에게는 이름을 쓰면 솔직하게 대답하기 어려울 수 있다고 이야기한다.',
            items: [
              { prompt: '설문 문항을 알맞은 문항과 고쳐야 할 문항으로 나누어 보세요.', toolOptions: { topic: '설문 점검', slots: ['알맞아요', '고쳐야 해요'], cards: ['학교에서 가장 중요한 권리를 하나 골라 주세요', '당연히 평등이 가장 중요하죠?', '답하기 싫으면 건너뛰어도 돼요', '이름과 사는 곳을 모두 적어 주세요'] }, target: { sort: { 알맞아요: ['학교에서 가장 중요한 권리를 하나 골라 주세요', '답하기 싫으면 건너뛰어도 돼요'], '고쳐야 해요': ['당연히 평등이 가장 중요하죠?', '이름과 사는 곳을 모두 적어 주세요'] } }, difficulty: 0.25 },
              { prompt: '설문에서 개인 정보를 지키는 방법만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '개인 정보 지키기', basket: '지켜요', cards: ['이름 없이 답하게 해요', '결과는 숫자로만 보여 줘요', '답한 친구의 이름을 발표해요', '누가 무엇을 골랐는지 공개해요'] }, target: { pick: ['이름 없이 답하게 해요', '결과는 숫자로만 보여 줘요'] }, difficulty: 0.25 },
              { prompt: '고쳐 쓴 설문 문항과 까닭을 이어 보세요.', toolOptions: { mode: 'match', topic: '문항과 까닭', slots: [{ id: 'm1', label: '"가장 중요한 권리를 하나 골라 주세요"' }, { id: 'm2', label: '"당연히 평등이 가장 중요하죠?"' }], cards: ['특정한 답으로 몰아가지 않아요', '답을 정해 놓고 유도해요', '질문이 너무 길어서 지루해요'] }, target: { match: { m1: '특정한 답으로 몰아가지 않아요', m2: '답을 정해 놓고 유도해요' } }, difficulty: 0.3 },
            ] },
        ],
        wrap: {
          teacher: '"설문과 면담은 무엇이 다른가요?" 설문은 많은 사람의 생각을 한꺼번에, 면담은 한 사람의 이야기를 깊게 듣는 방법이라고 정리한다. 출구 2번을 틀린 학생에게는 질문이 답을 정해 놓았는지 다시 읽게 한다.',
          exits: [
            { type: 'choice', prompt: '우리 반 24명의 생각을 한꺼번에 알아보기에 알맞은 방법은?', options: ['설문', '관찰', '책 찾기'], answer: 0, difficulty: 0.1, explain: '많은 사람의 생각을 모을 때는 설문이 알맞아요.' },
            { type: 'choice', prompt: '설문 문항으로 알맞지 않은 것은?', options: ['당연히 우리 반이 가장 훌륭하죠?', '가장 마음에 드는 점 하나를 골라 주세요'], answer: 0, difficulty: 0.2, explain: '답을 정해 놓고 몰아가는 질문은 결과를 믿을 수 없게 해요.' },
            { type: 'choice', prompt: '설문에서 개인 정보를 지키는 방법은?', options: ['이름 없이 답하게 해요', '이름을 적게 해요'], answer: 0, difficulty: 0.15, explain: '이름을 쓰지 않아야 솔직하게 답할 수 있고 개인 정보도 지켜져요.' },
            { type: 'mood', prompt: '오늘 조사 방법 공부는 어땠나요?' },
          ],
        },
        ws: {
          title: '조사 방법과 설문 문항',
          items: [
            { type: 'table', prompt: '조사 방법과 알맞은 질문을 이어서 쓰세요.', columns: ['조사 방법', '알맞은 질문'], cells: [['관찰', ''], ['면담', ''], ['설문', '']], answer: '관찰: 경사로 수 세기, 면담: 급식 선생님께 여쭙기, 설문: 우리 반 생각 묻기(예)' },
            { type: 'choice', prompt: '여러 사람의 생각을 모을 때 알맞은 방법에 ○ 하세요.', options: ['설문', '혼자 생각'], answer: '설문' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '설문에서 개인 정보를 지키려면 ___ 없이 답하게 해요.', answer: '이름' },
            { type: 'choice', prompt: '알맞은 설문 문항에 ○ 하세요.', options: ['가장 소중한 권리를 하나 골라 주세요', '당연히 평등이 가장 중요하죠?'], answer: '가장 소중한 권리를 하나 골라 주세요' },
            { type: 'short', prompt: '내가 만든 설문 문항 한 가지를 써 보세요.' },
          ],
          easy: { note: '질문에 따라 알맞은 조사 방법이 달라요.', items: [
            { type: 'choice', prompt: '경사로가 몇 곳인지 알 때 알맞은 방법에 ○ 하세요.', options: ['직접 세기', '설문'], answer: '직접 세기' },
            { type: 'choice', prompt: '선생님께 직접 여쭙는 방법에 ○ 하세요.', options: ['면담', '관찰'], answer: '면담' },
            { type: 'blank', prompt: '알맞은 말을 쓰세요.', text: '많은 친구의 생각은 ___로 모아요.', answer: '설문' },
            { type: 'short', prompt: '우리 반에서 알고 싶은 것 한 가지를 쓰세요.' },
          ] },
        },
        notes: '자주 보이는 어려움: ① 조사 방법을 질문과 상관없이 고른다 → 질문이 "몇 개"인지, "누구의 생각"인지 먼저 묻는다. ② 설문 문항이 답을 정해 놓는다 → 문항을 소리 내어 읽고 한쪽으로 몰아가는 말이 있는지 찾는다. ③ 설문에 이름을 쓰게 한다 → 이름 없이 숫자로만 다룬다. 이 차시에서 만든 설문은 실제로 학생에게 시행하기 전에 교사가 문항을 점검한다.',
      }),
      // ───────────────────────── 8차시 ─────────────────────────
      mk(8, {
        title: '조사 결과를 보고서로 정리하고 발표 준비하기',
        objective: '조사로 알아낸 사실과 내 생각을 구분하고 보고서와 발표의 차례를 정리할 수 있다.',
        std: S1,
        ill: 'a child pinning a finished report with photos and charts on a display board while classmates take notes',
        scene: '조사 결과를 발표해요', more: [{ motif: 'star', x: 90, y: 100 }, { motif: 'star', x: 400, y: 110, color: 'buttercup' }, { motif: 'house', x: 330, y: 222 }],
        intro: {
          teacher: '"조사를 마쳤다면 결과를 어떻게 친구들에게 전할까요?" 보고서의 차례(조사 주제와 목적, 방법, 결과, 느낀 점과 제안)를 먼저 알려 준다. 시연 단추로 보고서 차례 카드가 순서대로 놓이는 모습을 보인다. 조사 결과에는 사실과 생각이 섞이지 않도록 나누어 쓰는 것이 중요하다고 알려 준다.',
          student: '보고서에 꼭 들어가야 할 것이 무엇일지 한 가지 말해 봅시다.',
        },
        acts: [
          { title: '보고서와 발표 차례 놓기', tool: 'mindmap',
            task: '보고서와 발표 준비의 차례대로 카드를 놓아요.',
            teacher: '"보고서 마지막에는 무엇이 들어가면 좋을까요?" 조사 결과를 바탕으로 한 제안과 느낀 점이라는 것을 짚는다. 결과를 방법보다 먼저 놓는 학생에게는 어떻게 알아냈는지가 먼저 있어야 결과를 믿을 수 있다고 이야기한다.',
            items: [
              { prompt: '보고서의 차례대로 카드를 놓아 보세요.', toolOptions: { mode: 'order', topic: '보고서 차례', slots: ['첫째', '둘째', '셋째', '넷째'], cards: ['조사 주제와 목적', '조사 방법', '조사 결과', '느낀 점과 제안'] }, target: { order: ['조사 주제와 목적', '조사 방법', '조사 결과', '느낀 점과 제안'] }, difficulty: 0.2 },
              { prompt: '발표 준비의 차례대로 카드를 놓아 보세요.', toolOptions: { mode: 'order', topic: '발표 준비', slots: ['첫째', '둘째', '셋째', '넷째'], cards: ['발표 내용을 정리해요', '발표 연습을 해요', '친구들 앞에서 발표해요', '질문에 답하고 고칠 점을 정리해요'] }, target: { order: ['발표 내용을 정리해요', '발표 연습을 해요', '친구들 앞에서 발표해요', '질문에 답하고 고칠 점을 정리해요'] }, difficulty: 0.25 },
              { prompt: '보고서의 조사 결과 부분에 들어갈 문장만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '조사 결과 문장', basket: '조사 결과', cards: ['복도에는 경사로가 두 곳 있어요', '설문에 응답한 24명 가운데 7명이 배울 권리를 골랐어요', '더 많은 시설이 있었으면 좋겠어요', '우리 학교가 제일 훌륭해요'] }, target: { pick: ['복도에는 경사로가 두 곳 있어요', '설문에 응답한 24명 가운데 7명이 배울 권리를 골랐어요'] }, difficulty: 0.25 },
            ] },
          { title: '사실과 내 생각 나누기', tool: 'mindmap',
            task: '문장을 조사로 알아낸 사실과 내 생각·제안으로 나누어요.',
            teacher: '"경사로가 두 곳이라는 것과 경사로를 더 늘리면 좋겠다는 것은 같은 종류의 말일까요?" 앞은 관찰로 알아낸 사실, 뒤는 내 생각이라는 것을 구분한다. 면담에서 들은 말을 내 생각 칸에 놓는 학생에게는 누가 한 말인지 묻고 출처를 적는 습관을 짚는다.',
            items: [
              { prompt: '문장을 조사로 알아낸 사실과 내 생각·제안으로 나누어 보세요.', toolOptions: { topic: '사실과 생각', slots: ['조사로 알아낸 사실', '내 생각과 제안'], cards: ['우리 학교 복도에는 경사로가 두 곳 있어요', '선생님은 알레르기 대체 식단을 준비한다고 하셨어요', '경사로를 더 늘리면 좋겠어요', '급식 안내판을 더 쉽게 바꿔야 해요'] }, target: { sort: { '조사로 알아낸 사실': ['우리 학교 복도에는 경사로가 두 곳 있어요', '선생님은 알레르기 대체 식단을 준비한다고 하셨어요'], '내 생각과 제안': ['경사로를 더 늘리면 좋겠어요', '급식 안내판을 더 쉽게 바꿔야 해요'] } }, difficulty: 0.25 },
              { prompt: '조사 결과를 바탕으로 한 알맞은 제안만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '알맞은 제안', basket: '알맞은 제안', cards: ['경사로가 없는 건물 입구에 경사로를 더해요', '급식 안내판에 알레르기 표시를 크게 해요', '조사하지 않은 일은 그냥 바꾸자고 해요', '친구 이름을 공개해서 알려요'] }, target: { pick: ['경사로가 없는 건물 입구에 경사로를 더해요', '급식 안내판에 알레르기 표시를 크게 해요'] }, difficulty: 0.25 },
              { prompt: '결과와 제안이 알맞게 이어진 짝을 골라 이어 보세요.', toolOptions: { mode: 'match', topic: '결과와 제안', slots: [{ id: 'm1', label: '점자 블록이 한 곳뿐이었어요' }, { id: 'm2', label: '설문에서 배울 권리를 고른 친구가 가장 많았어요' }], cards: ['점자 블록을 더 놓자고 제안해요', '도서관과 학습 도움 시간을 늘리자고 제안해요', '운동장을 더 크게 만들자고 제안해요'] }, target: { match: { m1: '점자 블록을 더 놓자고 제안해요', m2: '도서관과 학습 도움 시간을 늘리자고 제안해요' } }, difficulty: 0.3 },
            ] },
        ],
        wrap: {
          teacher: '"보고서에서 사실과 생각을 나누어 쓰는 까닭은 무엇일까요?" 읽는 사람이 어디까지가 조사로 알아낸 것인지 알 수 있게 하기 위해서라고 정리한다. 출구 3번을 틀린 학생에게는 조사 결과와 근거가 이어져 있는지 다시 살펴보게 한다.',
          exits: [
            { type: 'choice', prompt: '보고서에서 조사 방법은 어디에 들어가나요?', options: ['조사 주제 다음, 결과 앞', '맨 마지막'], answer: 0, difficulty: 0.15, explain: '어떻게 알아냈는지 먼저 보여 주어야 결과를 믿을 수 있어요.' },
            { type: 'choice', prompt: '"복도에는 경사로가 두 곳 있어요"는 어떤 말인가요?', options: ['조사로 알아낸 사실', '내 생각'], answer: 0, difficulty: 0.1, explain: '관찰로 확인한 것이라 사실이에요.' },
            { type: 'choice', prompt: '조사 결과와 알맞게 이어진 제안은?', options: ['점자 블록이 적으니 더 놓자고 해요', '운동장을 더 크게 만들자고 해요'], answer: 0, difficulty: 0.2, explain: '제안은 조사 결과에서 나온 문제와 이어져야 해요.' },
            { type: 'mood', prompt: '오늘 보고서 준비는 어땠나요?' },
          ],
        },
        ws: {
          title: '인권 조사 보고서 틀',
          items: [
            { type: 'table', prompt: '보고서의 각 부분에 들어갈 내용을 간단히 쓰세요.', columns: ['부분', '내용'], cells: [['조사 주제와 목적', ''], ['조사 방법', ''], ['조사 결과', ''], ['느낀 점과 제안', '']], answer: '예: 학교 경사로 조사 / 직접 관찰 / 경사로 두 곳 / 한 곳 더 늘리기' },
            { type: 'choice', prompt: '조사로 알아낸 사실에 ○ 하세요.', options: ['점자 블록이 한 곳 있어요', '점자 블록이 더 있으면 좋겠어요'], answer: '점자 블록이 한 곳 있어요' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '보고서의 마지막에는 느낀 점과 ___을 써요.', answer: '제안' },
            { type: 'choice', prompt: '조사 결과와 알맞게 이어진 제안에 ○ 하세요.', options: ['경사로가 없으니 만들자고 해요', '조사와 관계없는 건물을 지어요'], answer: '경사로가 없으니 만들자고 해요' },
            { type: 'short', prompt: '내가 발표할 때 가장 중요하게 말하고 싶은 것을 한 문장으로 쓰세요.' },
          ],
          easy: { note: '보고서에는 주제, 방법, 결과, 제안이 들어가요.', items: [
            { type: 'choice', prompt: '보고서의 첫 부분에 ○ 하세요.', options: ['조사 주제와 목적', '느낀 점'], answer: '조사 주제와 목적' },
            { type: 'choice', prompt: '내 생각에 ○ 하세요.', options: ['경사로를 늘리면 좋겠어요', '경사로가 두 곳 있어요'], answer: '경사로를 늘리면 좋겠어요' },
            { type: 'blank', prompt: '알맞은 말을 쓰세요.', text: '조사로 알아낸 것은 ___이에요.', answer: '사실' },
            { type: 'short', prompt: '내가 조사하고 싶은 인권 주제를 한 줄 쓰세요.' },
          ] },
        },
        notes: '자주 보이는 어려움: ① 사실과 제안·생각을 섞어 쓴다 → 두 칸으로 나누어 문장을 놓아 보게 한다. ② 조사 결과와 상관없는 제안을 한다 → 제안이 결과의 어떤 문제와 이어지는지 말하게 한다. ③ 발표 때 친구 이름이나 얼굴을 보인다 → 이름 없이 사례만 말한다. 이 단원의 학교와 사례는 지어낸 것이다.',
      }),
      // ───────────────────────── 9차시 ─────────────────────────
      mk(9, {
        title: '인권이 무엇인지 알고 침해 사례 구분하기',
        objective: '인권이 사람이라면 누구나 가지는 기본 권리임을 알고 가상 사례에서 인권을 해치는 일과 그렇지 않은 일을 구분할 수 있다.',
        std: S2,
        ill: 'a bright paper-cut scene of children of different backgrounds holding hands under a banner of rights while one stands alone and others reach out to include them',
        scene: '모두가 존중받아야 해요', more: [{ motif: 'star', x: 90, y: 100 }, { motif: 'star', x: 400, y: 110, color: 'buttercup' }, { motif: 'flower', x: 150, y: 224 }],
        intro: {
          teacher: '"사람이라면 누구나 소중하게 존중받아야 한다는 말을 들어 본 적이 있나요?" 인권의 뜻(사람이라면 누구나 태어날 때부터 가지는 기본 권리)을 알려 주고 헌법 제10조의 인간으로서의 존엄과 가치를 한 줄로 떠올리게 한다. 시연 단추로 "외모로 친구를 놀려요"가 인권을 해치는 일 칸에 놓이는 모습을 보인다. 오늘 사례는 모두 지어낸 것이며 실제 사건이나 사람과 관계가 없다.',
          student: '누가 나를 함부로 대해서 기분이 나빴던 때의 마음이 어땠는지 가만히 떠올려 봅시다.',
        },
        acts: [
          { title: '인권을 해치는 일 가리기', tool: 'mindmap',
            task: '가상 사례를 인권을 해치는 일과 해치지 않는 일로 나눠요.',
            teacher: '"교실에서 떠든 친구에게 조용히 하라고 말하는 것은 인권 침해일까요?" 모두가 수업을 잘 받을 권리를 위해 필요한 규칙을 말하는 것이라 침해가 아니라는 것을 짚는다. 청소 당번을 인권 침해로 고르는 학생에게는 모두가 똑같이 돌아가며 한다는 점을 다시 읽게 한다.',
            items: [
              { prompt: '가상 사례를 인권을 해치는 일과 해치지 않는 일로 나누어 보세요.', toolOptions: { topic: '인권 사례', slots: ['인권을 해치는 일', '인권을 해치지 않는 일'], cards: ['외모로 친구를 놀리며 모둠에서 빼요', '허락 없이 일기장을 읽고 소문을 내요', '떠든 친구에게 조용히 하라고 말해요', '청소 당번을 돌아가며 해요'] }, target: { sort: { '인권을 해치는 일': ['외모로 친구를 놀리며 모둠에서 빼요', '허락 없이 일기장을 읽고 소문을 내요'], '인권을 해치지 않는 일': ['떠든 친구에게 조용히 하라고 말해요', '청소 당번을 돌아가며 해요'] } }, difficulty: 0.2 },
              { prompt: '인권을 해치는 일만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '인권 침해', basket: '인권을 해쳐요', cards: ['말투를 흉내 내며 비웃어요', '다른 나라 출신이라고 같이 놀지 않아요', '모둠 활동에서 의견을 번갈아 말해요', '친구의 물건을 빌릴 때 먼저 허락을 구해요'] }, target: { pick: ['말투를 흉내 내며 비웃어요', '다른 나라 출신이라고 같이 놀지 않아요'] }, difficulty: 0.25 },
              { prompt: '인권을 존중하는 행동만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '인권 존중', basket: '인권 존중', cards: ['다른 의견도 끝까지 들어 줘요', '친구의 비밀은 지켜 줘요', '힘이 약하다고 무시해요', '내 마음에 안 든다고 따돌려요'] }, target: { pick: ['다른 의견도 끝까지 들어 줘요', '친구의 비밀은 지켜 줘요'] }, difficulty: 0.2 },
            ] },
          { title: '인권의 뜻 알아보기', tool: 'mindmap',
            task: '인권의 뜻을 바르게 설명한 문장을 고르고 이어요.',
            teacher: '"어른과 아이 가운데 누가 더 많은 인권을 가질까요?" 인권은 나이나 성별, 국적, 장애와 관계없이 누구나 똑같이 가진다는 것을 짚는다. "착한 사람만 인권이 있다"고 말하는 학생에게는 사람이라는 이유만으로 가지는 권리라는 뜻을 다시 읽게 한다.',
            items: [
              { prompt: '인권의 뜻을 바르게 설명한 문장만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '인권의 뜻', basket: '바른 설명', cards: ['사람이라면 누구나 가지는 기본 권리예요', '나이·성별·국적과 관계없이 똑같이 있어요', '어른만 가질 수 있어요', '착한 사람에게만 있어요'] }, target: { pick: ['사람이라면 누구나 가지는 기본 권리예요', '나이·성별·국적과 관계없이 똑같이 있어요'] }, difficulty: 0.2 },
              { prompt: '낱말과 알맞은 뜻을 이어 보세요.', toolOptions: { mode: 'match', topic: '낱말과 뜻', slots: [{ id: 'm1', label: '인권' }, { id: 'm2', label: '인권 침해' }], cards: ['사람이라면 누구나 가지는 기본 권리', '다른 사람의 권리를 함부로 해치는 일', '나라를 다스리는 일'] }, target: { match: { m1: '사람이라면 누구나 가지는 기본 권리', m2: '다른 사람의 권리를 함부로 해치는 일' } }, difficulty: 0.2 },
              { prompt: '친구가 인권을 존중받지 못할 때 알맞은 마음과 말을 골라 이어 보세요.', toolOptions: { mode: 'match', topic: '마음과 말', slots: [{ id: 'm1', label: '놀림을 받은 친구의 마음' }, { id: 'm2', label: '내가 해 줄 수 있는 말' }], cards: ['속상하고 외로워요', '괜찮니? 같이 놀자', '재미있으니 더 놀려도 돼'] }, target: { match: { m1: '속상하고 외로워요', m2: '괜찮니? 같이 놀자' } }, difficulty: 0.25 },
            ] },
        ],
        wrap: {
          teacher: '"인권은 누구에게 있는 권리일까요?" 모든 사람에게 똑같이 있다는 점을 한 번 더 말하게 한다. 출구 2번을 틀린 학생에게는 규칙을 지키게 하는 말과 사람을 업신여기는 말의 차이를 되묻는다.',
          exits: [
            { type: 'choice', prompt: '인권은 누구에게 있는 권리인가요?', options: ['사람이라면 누구에게나', '어른에게만', '공부를 잘하는 사람에게만'], answer: 0, difficulty: 0.1, explain: '인권은 사람이라는 이유만으로 누구나 가져요.' },
            { type: 'choice', prompt: '"떠든 친구에게 조용히 하라고 말하는 것"은 인권 침해인가요?', options: ['아니요, 모두의 수업을 위한 말이에요', '네, 항상 침해예요'], answer: 0, difficulty: 0.25, explain: '다른 사람을 업신여기는 말이 아니라 규칙을 지키게 하는 말이에요.' },
            { type: 'choice', prompt: '놀림을 받은 친구에게 해 줄 수 있는 알맞은 말은?', options: ['괜찮니? 도움이 필요하면 말해 줘', '그 정도는 참아'], answer: 0, difficulty: 0.15, explain: '친구의 마음을 먼저 살피는 말이 인권을 존중하는 말이에요.' },
            { type: 'mood', prompt: '오늘 인권 공부는 어땠나요?' },
          ],
        },
        ws: {
          title: '인권이란 무엇일까',
          items: [
            { type: 'table', prompt: '낱말과 뜻을 이어서 쓰세요.', columns: ['낱말', '뜻'], cells: [['인권', ''], ['인권 침해', '']], answer: '인권: 사람이라면 누구나 가지는 기본 권리, 인권 침해: 다른 사람의 권리를 함부로 해치는 일' },
            { type: 'choice', prompt: '인권을 해치는 일에 ○ 하세요.', options: ['허락 없이 일기장을 읽고 소문을 내요', '청소 당번을 돌아가며 해요'], answer: '허락 없이 일기장을 읽고 소문을 내요' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '인권은 나이·성별·국적과 관계없이 ___에게 있어요.', answer: '모든 사람' },
            { type: 'choice', prompt: '인권을 존중하는 행동에 ○ 하세요.', options: ['친구의 비밀을 지켜 줘요', '다르다고 놀려요'], answer: '친구의 비밀을 지켜 줘요' },
            { type: 'short', prompt: '친구의 인권을 존중하기 위해 내가 할 수 있는 말을 한 문장으로 쓰세요.' },
          ],
          easy: { note: '인권은 누구에게나 있는 소중한 권리예요.', items: [
            { type: 'choice', prompt: '인권을 존중하는 행동에 ○ 하세요.', options: ['친구 이야기를 끝까지 들어요', '비웃어요'], answer: '친구 이야기를 끝까지 들어요' },
            { type: 'choice', prompt: '인권이 있는 사람에 ○ 하세요.', options: ['모든 사람', '어른만'], answer: '모든 사람' },
            { type: 'blank', prompt: '알맞은 말을 쓰세요.', text: '친구가 속상할 때는 먼저 마음을 ___ 줘요.', answer: '살펴' },
            { type: 'short', prompt: '친구에게 해 주고 싶은 따뜻한 말을 쓰세요.' },
          ] },
        },
        notes: '자주 보이는 어려움: ① 규칙을 지키라는 말까지 인권 침해로 여긴다 → 사람을 업신여기는 말과 모두를 위해 필요한 규칙을 구분한다. ② 인권을 어른이나 착한 사람만 가진다고 생각한다 → 사람이라는 이유만으로 누구나 가진다고 짚는다. ③ 실제 사건이나 친구를 사례로 말한다 → 지어낸 사례만 쓰고 이름은 쓰지 않는다. 학생이 자신의 아픈 경험을 말하려 하면 교실 밖에서 따로 이야기를 듣는다.',
      }),
      // ───────────────────────── 10차시 ─────────────────────────
      mk(10, {
        title: '인권 침해 사례에서 다친 권리와 좋은 말 찾기',
        objective: '가상 사례에서 침해된 권리가 무엇인지 기본권 이름과 이어 설명하고 인권을 존중하는 말로 바꿔 말할 수 있다.',
        std: S2,
        ill: 'a speech bubble swapping scene where a harsh comment on one paper card is replaced by a kind comment, with five small rights icons around',
        scene: '말을 바꾸면 마음이 바뀌어요', more: [{ motif: 'star', x: 90, y: 100 }, { motif: 'flower', x: 150, y: 224 }, { motif: 'house', x: 330, y: 222, color: 'sky' }],
        intro: {
          teacher: '"같은 일도 어떤 말로 하느냐에 따라 상대의 마음이 달라지지 않을까요?" 사례에서 어떤 권리가 다쳤는지 기본권 이름으로 말해 본다고 알린다. 시연 단추로 첫 문항의 사례가 침해된 권리와 이어지는 모습을 보인다. 오늘 사례도 지어낸 것이며, 실제 친구를 가리켜 말하지 않는다.',
          student: '친구에게 힘이 되었던 말을 하나 떠올려 봅시다.',
        },
        acts: [
          { title: '다친 권리 찾기', tool: 'mindmap',
            task: '가상 사례와 침해된 권리를 이어요.',
            teacher: '"일기장을 허락 없이 읽는 일은 어떤 권리를 해칠까요?" 사생활의 비밀과 자유처럼 내 생각을 지킬 자유가 침해된다고 연결한다. 외모로 놀리는 사례를 참정권과 잇는 학생에게는 투표와 상관이 있는지 되묻는다.',
            items: [
              { prompt: '가상 사례와 침해된 권리를 이어 보세요.', toolOptions: { mode: 'match', topic: '사례와 침해된 권리', slots: [{ id: 'm1', label: '평등권' }, { id: 'm2', label: '자유권' }, { id: 'm3', label: '사회권' }], cards: ['성별 때문에 동아리에 못 들어가요', '허락 없이 일기장을 읽고 소문을 내요', '몸이 아파도 보건실을 쓰지 못하게 해요'] }, target: { match: { m1: '성별 때문에 동아리에 못 들어가요', m2: '허락 없이 일기장을 읽고 소문을 내요', m3: '몸이 아파도 보건실을 쓰지 못하게 해요' } }, difficulty: 0.3 },
              { prompt: '평등권이 침해된 사례만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '평등권 침해', basket: '평등권 침해', cards: ['출신 나라가 달라서 팀에서 빼요', '외모 때문에 앉는 자리를 정해요', '모든 친구가 돌아가며 발표해요', '차례를 정해 도서관을 써요'] }, target: { pick: ['출신 나라가 달라서 팀에서 빼요', '외모 때문에 앉는 자리를 정해요'] }, difficulty: 0.3 },
              { prompt: '자유권이 침해된 사례만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '자유권 침해', basket: '자유권 침해', cards: ['의견을 말하지 못하게 입을 막아요', '일기장을 몰래 찍어서 올려요', '순서를 지켜 발표해요', '의견이 다르면 이유를 들어 말해요'] }, target: { pick: ['의견을 말하지 못하게 입을 막아요', '일기장을 몰래 찍어서 올려요'] }, difficulty: 0.3 },
            ] },
          { title: '존중하는 말로 바꾸기', tool: 'mindmap',
            task: '인권을 해치는 말과 존중하는 말로 나누고, 바꿔 말하는 짝을 이어요.',
            teacher: '"다른 사람을 비웃는 말을 어떻게 바꾸면 존중하는 말이 될까요?" 비난 대신 도움을 청하거나 사실만 말하는 방법을 학생이 직접 말해 보게 한다. "장난이었어"라는 말로 넘기는 학생에게는 듣는 사람의 마음이 어땠을지 묻는다.',
            items: [
              { prompt: '말을 인권을 해치는 말과 존중하는 말로 나누어 보세요.', toolOptions: { topic: '말 바꾸기', slots: ['인권을 해치는 말', '인권을 존중하는 말'], cards: ['너는 못생겨서 안 껴 줄 거야', '네 생각을 더 들려줄래?', '또 틀렸네, 바보 같아', '같이 해 보자, 내가 도와줄게'] }, target: { sort: { '인권을 해치는 말': ['너는 못생겨서 안 껴 줄 거야', '또 틀렸네, 바보 같아'], '인권을 존중하는 말': ['네 생각을 더 들려줄래?', '같이 해 보자, 내가 도와줄게'] } }, difficulty: 0.2 },
              { prompt: '해치는 말과 알맞게 바꾼 말을 이어 보세요.', toolOptions: { mode: 'match', topic: '바꿔 말하기', slots: [{ id: 'm1', label: '"너는 느려서 안 돼"' }, { id: 'm2', label: '"넌 우리와 달라서 싫어"' }], cards: ['"천천히 해도 괜찮아, 같이 하자"', '"서로 달라서 더 배울 게 많아"', '"빨리 안 하면 다 망쳐"'] }, target: { match: { m1: '"천천히 해도 괜찮아, 같이 하자"', m2: '"서로 달라서 더 배울 게 많아"' } }, difficulty: 0.25 },
              { prompt: '친구가 놀림당하는 모습을 봤을 때 알맞은 행동만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '알맞은 행동', basket: '알맞은 행동', cards: ['놀림당한 친구 곁에 있어 줘요', '어른께 알려요', '같이 웃어요', '못 본 척해요'] }, target: { pick: ['놀림당한 친구 곁에 있어 줘요', '어른께 알려요'] }, difficulty: 0.2 },
            ] },
        ],
        wrap: {
          teacher: '"기본권 이름을 알면 어떤 점이 좋을까요?" 어떤 권리가 다쳤는지 정확하게 말할 수 있어 해결 방법도 찾기 쉽다고 정리한다. 출구 3번을 틀린 학생에게는 어른에게 알리는 것이 고자질이 아니라 도움을 청하는 일이라고 알려 준다.',
          exits: [
            { type: 'choice', prompt: '일기장을 몰래 찍어 올리는 것은 어떤 기본권과 가장 관련이 깊나요?', options: ['자유권', '참정권', '청구권'], answer: 0, difficulty: 0.25, explain: '사생활의 비밀과 자유는 자유권에 속해요.' },
            { type: 'choice', prompt: '존중하는 말로 알맞은 것은?', options: ['천천히 해도 괜찮아, 같이 하자', '느려서 우리 팀에서 빠져'], answer: 0, difficulty: 0.1, explain: '비난 대신 함께하자는 말이 존중하는 말이에요.' },
            { type: 'choice', prompt: '놀림당하는 친구를 봤을 때 알맞은 행동은?', options: ['곁에 있어 주고 어른께 알려요', '같이 웃어요'], answer: 0, difficulty: 0.15, explain: '곁에 있어 주고 어른께 알리는 것은 도움을 청하는 일이에요.' },
            { type: 'mood', prompt: '오늘 존중하는 말 공부는 어땠나요?' },
          ],
        },
        ws: {
          title: '다친 권리와 존중하는 말',
          items: [
            { type: 'table', prompt: '사례와 침해된 권리를 이어서 쓰세요.', columns: ['사례', '침해된 권리'], cells: [['성별 때문에 동아리에 못 들어가요', ''], ['의견을 말하지 못하게 입을 막아요', ''], ['아파도 보건실을 못 쓰게 해요', '']], answer: '평등권, 자유권, 사회권' },
            { type: 'choice', prompt: '존중하는 말에 ○ 하세요.', options: ['같이 해 보자, 내가 도와줄게', '또 틀렸네, 바보 같아'], answer: '같이 해 보자, 내가 도와줄게' },
            { type: 'blank', prompt: '해치는 말을 존중하는 말로 바꿔 쓰세요.', text: '"너는 느려서 안 돼" → "___"', answer: '천천히 해도 괜찮아, 같이 하자' },
            { type: 'choice', prompt: '놀림당하는 친구를 보았을 때 알맞은 행동에 ○ 하세요.', options: ['곁에 있어 주고 어른께 알려요', '못 본 척해요'], answer: '곁에 있어 주고 어른께 알려요' },
            { type: 'short', prompt: '내가 친구에게 해 주고 싶은 존중하는 말을 한 문장으로 쓰세요.' },
          ],
          easy: { note: '말을 바꾸면 친구의 마음도 달라져요.', items: [
            { type: 'choice', prompt: '존중하는 말에 ○ 하세요.', options: ['같이 하자', '너는 안 돼'], answer: '같이 하자' },
            { type: 'choice', prompt: '평등권 침해 사례에 ○ 하세요.', options: ['성별 때문에 동아리에 못 들어가요', '순서를 지켜 발표해요'], answer: '성별 때문에 동아리에 못 들어가요' },
            { type: 'blank', prompt: '알맞은 말을 쓰세요.', text: '놀림당하는 친구를 보면 ___ 곁에 있어 줘요.', answer: '친구' },
            { type: 'short', prompt: '친구를 기쁘게 한 말을 한 가지 쓰세요.' },
          ] },
        },
        notes: '자주 보이는 어려움: ① 사례와 기본권 이름을 잘못 짝짓는다 → 기본권 표를 칠판에 두고 사례의 낱말과 비교한다. ② 장난이라는 말로 놀림을 정당화한다 → 듣는 사람의 마음을 먼저 생각하게 한다. ③ 고자질과 도움 요청을 헷갈린다 → 위험하거나 힘든 일은 어른께 알리는 것이 도움을 청하는 일이라고 알려 준다. 지어낸 사례만 쓰고 이름은 쓰지 않는다.',
      }),
      // ───────────────────────── 11차시 ─────────────────────────
      mk(11, {
        title: '푸른학교 설문 그림그래프로 놀림 경험 읽기',
        objective: '학교 설문 결과를 그림그래프로 나타내고 그래프에서 알 수 있는 사실과 짐작을 구분해 말할 수 있다.',
        std: S2,
        ill: 'a bulletin board in a school hallway with a picture graph of small paper people in three colors and a sticky note reading kindness matters',
        scene: '설문 결과를 살펴봐요', more: [{ motif: 'house', x: 110, y: 222 }, { motif: 'star', x: 400, y: 100 }, { motif: 'flower', x: 340, y: 224 }],
        intro: {
          teacher: '"친구가 놀림을 받는 모습을 본 적이 있는 학생은 얼마나 될까요?" 학교에서 이런 일이 얼마나 자주 일어나는지는 설문으로 알아볼 수 있다고 알린다. 시연 단추로 그림 한 줄이 그려지는 모습을 보인다. 푸른학교(가상 학교) 학생 100명의 설문 결과는 지어낸 값이며, 개인 이름은 쓰지 않고 마음이 불편한 학생은 쉬어도 된다고 먼저 말해 준다.',
          student: '그림 하나가 몇 명을 뜻하는지 먼저 읽고 설문 결과를 그림그래프로 옮겨 봅시다.',
        },
        acts: [
          { title: '설문 결과를 그림그래프로', tool: 'chart',
            task: '큰 그림은 10명, 작은 그림은 1명이에요. 표의 수만큼 그림을 늘려요.',
            teacher: '"62명은 큰 그림 몇 개와 작은 그림 몇 개일까요?" 큰 그림 6개와 작은 그림 2개라는 것을 십의 자리와 일의 자리로 나누어 말하게 한다. 작은 그림을 10명으로 읽는 학생에게는 범례를 다시 읽게 한다.',
            items: [
              { prompt: '표를 보고 그림그래프를 완성해 보세요. 본 적 있어요만 이미 그려 있어요.', toolOptions: { type: 'picture', title: '친구가 놀림당하는 모습을 본 적', data: SEEN, unit: '명', xLabel: '답', icon: 'person', icons: [{ value: 10, name: '10명' }, { value: 1, name: '1명' }], given: [0] }, target: { build: true }, difficulty: 0.2 },
              { prompt: '본 적 없어요와 잘 모르겠어요 그림을 그려 보세요. 본 적 있어요는 이미 그려 있어요.', toolOptions: { type: 'picture', title: '친구가 놀림당하는 모습을 본 적', data: SEEN, unit: '명', xLabel: '답', icon: 'person', icons: [{ value: 10, name: '10명' }, { value: 1, name: '1명' }], given: [0] }, target: { build: [1, 2] }, difficulty: 0.25 },
              { prompt: '잘 모르겠어요 그림만 그려 보세요. 나머지는 이미 그려 있어요.', toolOptions: { type: 'picture', title: '친구가 놀림당하는 모습을 본 적', data: SEEN, unit: '명', xLabel: '답', icon: 'person', icons: [{ value: 10, name: '10명' }, { value: 1, name: '1명' }], given: [0, 1] }, target: { build: true }, difficulty: 0.2 },
            ] },
          { title: '막대그래프로 읽기', tool: 'chart',
            task: '같은 설문을 막대그래프로 읽고 답해요. 눈금 한 칸은 10명이에요.',
            teacher: '"본 적 있어요라고 답한 학생과 잘 모르겠어요라고 답한 학생을 합하면 몇 명일까요?" 두 막대를 합쳐 계산하게 한다. 3번에서 가장 많은 답만 고른 학생에게는 설문 전체 학생 수가 몇 명인지부터 확인하게 한다.',
            items: [
              { prompt: '가장 많은 학생이 한 답을 골라 보세요.', toolOptions: { type: 'bar', mode: 'read', title: '친구가 놀림당하는 모습을 본 적', data: SEEN, unit: '명', scale: 10, xLabel: '답', choices: ['본 적 있어요', '본 적 없어요', '잘 모르겠어요'], why: ['본 적 없어요 막대가 더 길어요.', null, '가장 짧은 막대예요.'] }, target: { pick: 1 }, difficulty: 0.1 },
              { prompt: '본 적 있다고 답한 학생은 몇 명인지 쓰세요.', toolOptions: { type: 'bar', mode: 'read', title: '친구가 놀림당하는 모습을 본 적', data: SEEN, unit: '명', scale: 10, xLabel: '답', question: '본 적 있다고 답한 학생은 몇 명인가요?' }, target: { value: 30 }, difficulty: 0.15 },
              { prompt: '본 적 있다고 답했거나 잘 모르겠다고 답한 학생은 모두 몇 명인지 쓰세요.', toolOptions: { type: 'bar', mode: 'read', title: '친구가 놀림당하는 모습을 본 적', data: SEEN, unit: '명', scale: 2, xLabel: '답', question: '두 답을 합하면 몇 명인가요?' }, target: { value: 38 }, difficulty: 0.3 },
            ] },
          { title: '사실과 짐작 나누기', tool: 'mindmap',
            task: '그래프로 알 수 있는 사실과 더 알아봐야 하는 짐작으로 나누어요.',
            teacher: '"30명이 본 적 있다고 답했어요. 이 일이 우리 학교에서 매일 일어나고 있다고 말할 수 있을까요?" 설문은 본 적 있는지만 물었을 뿐 얼마나 자주인지는 알 수 없다는 것을 짚는다. 특정한 친구가 가해자라고 짐작하는 학생에게는 설문에서 알 수 없다는 점과 사람을 함부로 지목하지 않는 태도를 이야기한다.',
            items: [
              { prompt: '문장을 그래프로 알 수 있는 사실과 더 알아봐야 하는 짐작으로 나누어 보세요.', toolOptions: { topic: '설문 해석', slots: ['그래프로 알 수 있는 사실', '더 알아봐야 하는 짐작'], cards: ['본 적 있다고 답한 학생이 30명이에요', '본 적 없다고 답한 학생이 가장 많아요', '매일 놀림이 일어나고 있어요', '특정한 학생이 놀리고 있어요'] }, target: { sort: { '그래프로 알 수 있는 사실': ['본 적 있다고 답한 학생이 30명이에요', '본 적 없다고 답한 학생이 가장 많아요'], '더 알아봐야 하는 짐작': ['매일 놀림이 일어나고 있어요', '특정한 학생이 놀리고 있어요'] } }, difficulty: 0.3 },
              { prompt: '이 설문으로 더 알아보고 싶은 것만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '더 알고 싶은 것', basket: '더 알고 싶어요', cards: ['어떤 말을 가장 불편해하는지', '도움을 청한 학생이 몇 명인지', '누가 놀렸는지 이름을 찾아내기', '가장 인기 있는 친구 뽑기'] }, target: { pick: ['어떤 말을 가장 불편해하는지', '도움을 청한 학생이 몇 명인지'] }, difficulty: 0.25 },
              { prompt: '문장과 알맞은 근거를 이어 보세요.', toolOptions: { mode: 'match', topic: '문장과 근거', slots: [{ id: 'm1', label: '잘 모르겠다는 학생도 있어요' }, { id: 'm2', label: '본 적 없는 학생이 본 적 있는 학생보다 많아요' }], cards: ['잘 모르겠어요 8명', '본 적 없어요 62명, 본 적 있어요 30명', '매일 일어나요'] }, target: { match: { m1: '잘 모르겠어요 8명', m2: '본 적 없어요 62명, 본 적 있어요 30명' } }, difficulty: 0.25 },
            ] },
        ],
        wrap: {
          teacher: '"설문 결과를 보고 누군가를 탓하는 것이 도움이 될까요?" 설문은 실태를 알리는 자료이지 개인을 지목하는 자료가 아니라는 것을 다시 말한다. 출구 3번에서 이름을 찾자고 한 학생에게는 해결을 위해 먼저 필요한 것이 무엇인지 되묻는다.',
          exits: [
            { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '다른 학교 설문', data: [['본 적 있어요', 24], ['본 적 없어요', 70], ['잘 모르겠어요', 6]], unit: '명', scale: 10, xLabel: '답', choices: ['본 적 있어요', '본 적 없어요', '잘 모르겠어요'], why: ['본 적 없어요 막대가 더 길어요.', null, '가장 짧은 막대예요.'] }, prompt: '다른 학교 그래프에서 가장 많은 학생이 한 답을 고르세요.', target: { pick: 1 }, difficulty: 0.15 },
            { type: 'choice', prompt: '그림그래프에서 큰 그림이 10명, 작은 그림이 1명일 때 큰 그림 3개와 작은 그림 5개는 몇 명인가요?', options: ['35명', '8명', '53명'], answer: 0, difficulty: 0.2, explain: '10 × 3 = 30에 5를 더해 35명이에요.' },
            { type: 'choice', prompt: '설문 결과를 본 뒤 알맞은 행동은 무엇인가요?', options: ['문제가 되는 상황을 어떻게 줄일지 함께 생각해요', '놀린 친구의 이름을 찾아 비난해요'], answer: 0, difficulty: 0.2, explain: '설문은 상황을 알려 주는 자료예요. 개인을 비난하지 않고 해결 방법을 찾는 데 써요.' },
            { type: 'mood', prompt: '오늘 설문 읽기는 어땠나요?' },
          ],
        },
        ws: {
          title: '푸른학교 설문 결과 읽기',
          items: [
            { type: 'table', prompt: '설문 표를 완성하세요.', columns: ['답', '학생 수(명)'], cells: [['본 적 있어요', '30'], ['본 적 없어요', ''], ['잘 모르겠어요', '']], answer: '62, 8' },
            { type: 'blank', prompt: '전체 학생 수를 구하세요.', text: '30 + 62 + 8 = ___ (명)', answer: '100' },
            { type: 'blank', prompt: '두 답의 학생 수를 합하세요.', text: '30 + 8 = ___ (명)', answer: '38' },
            { type: 'choice', prompt: '그래프로 알 수 있는 사실에 ○ 하세요.', options: ['본 적 없다는 학생이 가장 많아요', '특정한 학생이 계속 놀려요'], answer: '본 적 없다는 학생이 가장 많아요' },
            { type: 'short', prompt: '이 설문을 보고 학교에서 더 알아보고 싶은 것을 한 문장으로 쓰세요.' },
          ],
          easy: { note: '그림 하나가 몇 명인지 먼저 읽어요.', items: [
            { type: 'table', prompt: '표를 완성하세요.', columns: ['답', '학생 수(명)'], cells: [['본 적 있어요', '30'], ['잘 모르겠어요', '']], answer: '8' },
            { type: 'choice', prompt: '더 많은 답에 ○ 하세요.', options: ['본 적 없어요(62명)', '본 적 있어요(30명)'], answer: '본 적 없어요(62명)' },
            { type: 'blank', prompt: '알맞은 수를 쓰세요.', text: '30 + 8 = ___ (명)', answer: '38' },
            { type: 'short', prompt: '친구가 속상해 보일 때 내가 할 말을 쓰세요.' },
          ] },
        },
        notes: '자주 보이는 어려움: ① 그림 하나를 1명으로 읽는다 → 범례를 먼저 읽는다. ② 설문의 숫자를 실제 사건으로 단정한다 → 설문은 본 적이 있는지만 물었음을 짚는다. ③ 특정 학생을 지목하려 한다 → 개인을 지목하지 않고 해결 방법을 찾는 자료로 쓴다. 이 차시의 학교와 값은 모두 지어낸 것이며, 불편해하는 학생은 쉬게 한다.',
      }),
      // ───────────────────────── 12차시 ─────────────────────────
      mk(12, {
        title: '도움 요청 방법 설문 막대그래프 읽고 그리기',
        objective: '도움을 요청하는 방법에 대한 설문 결과를 막대그래프로 나타내고 읽어 도움 요청의 필요성을 말할 수 있다.',
        std: S2,
        ill: 'a child talking with a teacher at a school counseling room desk while a bar chart of ways to ask for help stands on an easel nearby',
        scene: '도움을 청하는 방법은?', more: [{ motif: 'house', x: 150, y: 222 }, { motif: 'star', x: 400, y: 100 }, { motif: 'tree', x: 340, y: 214 }],
        intro: {
          teacher: '"힘든 일이 생겼을 때 누구에게 가장 먼저 말하고 싶나요?" 학생이 답한 사람을 모은 뒤, 푸른학교(가상) 학생 100명이 어떤 방법을 고르는지 막대그래프로 본다고 알린다. 시연 단추로 가장 긴 막대가 어느 것인지 짚어 보인다. 아무것도 하지 않는 학생이 있다는 점에서 도움 요청이 얼마나 중요한지도 이야기해 본다.',
          student: '힘든 일을 혼자 참기보다 말하면 좋은 점을 한 가지 생각해 봅시다.',
        },
        acts: [
          { title: '도움 요청 설문 읽기', tool: 'chart',
            task: '눈금 한 칸은 5명이에요. 막대를 읽고 답해요.',
            teacher: '"아무것도 안 해요를 고른 학생은 몇 명일까요?" 10명이 도움을 요청하지 않는다는 사실을 눈금으로 읽게 한다. 3번에서 두 막대를 더할 때 단위(명)를 빼먹는 학생에게 단위를 함께 쓰게 한다.',
            items: [
              { prompt: '가장 많은 학생이 고른 도움 요청 방법을 골라 보세요.', toolOptions: { type: 'bar', mode: 'read', title: '도움 요청 방법', data: HELP, unit: '명', scale: 5, xLabel: '방법', choices: ['담임 선생님께 말해요', '친구와 이야기해요', '상담실에 가요'], why: [null, '친구와 이야기해요는 30명이에요.', '상담실에 가요는 15명이에요.'] }, target: { pick: 0 }, difficulty: 0.1 },
              { prompt: '상담실에 간다고 답한 학생은 몇 명인지 쓰세요.', toolOptions: { type: 'bar', mode: 'read', title: '도움 요청 방법', data: HELP, unit: '명', scale: 5, xLabel: '방법', question: '상담실에 간다고 답한 학생은 몇 명인가요?' }, target: { value: 15 }, difficulty: 0.15 },
              { prompt: '상담실에 가거나 아무것도 안 하는 학생을 합하면 몇 명인지 쓰세요.', toolOptions: { type: 'bar', mode: 'read', title: '도움 요청 방법', data: HELP, unit: '명', scale: 5, xLabel: '방법', question: '두 답을 합하면 몇 명인가요?' }, target: { value: 25 }, difficulty: 0.3 },
            ] },
          { title: '표를 보고 막대 그리기', tool: 'chart',
            task: '표의 수대로 막대를 올려요. 눈금 한 칸은 5명이고 한 번 누르면 1명씩 변해요.',
            teacher: '"담임 선생님께 말한다는 막대는 어디까지 올라가야 할까요?" 표의 값과 눈금을 번갈아 짚으며 맞추게 한다. 눈금 사이에 걸치는 값을 눈금 위로 맞추는 학생에게 눈금선을 손가락으로 따라가게 한다.',
            items: [
              { prompt: '도움 요청 표를 보고 막대그래프를 완성해 보세요. 첫째 막대만 이미 그려 있어요.', toolOptions: { type: 'bar', title: '도움 요청 방법', data: HELP, unit: '명', scale: 5, step: 1, xLabel: '방법', yLabel: '학생 수', given: [0] }, target: { build: true }, difficulty: 0.25 },
              { prompt: '친구와 이야기해요와 상담실에 가요 막대를 그려 보세요. 나머지는 이미 그려 있어요.', toolOptions: { type: 'bar', title: '도움 요청 방법', data: HELP, unit: '명', scale: 5, step: 1, xLabel: '방법', yLabel: '학생 수', given: [0, 3] }, target: { build: true }, difficulty: 0.25 },
              { prompt: '아무것도 안 해요 막대만 그려 보세요. 나머지는 이미 그려 있어요.', toolOptions: { type: 'bar', title: '도움 요청 방법', data: HELP, unit: '명', scale: 5, step: 1, xLabel: '방법', yLabel: '학생 수', given: [0, 1, 2] }, target: { build: true }, difficulty: 0.2 },
            ] },
          { title: '도움 요청의 까닭 짐작하기', tool: 'mindmap',
            task: '도움을 요청하는 방법과 알맞은 설명을 이어요.',
            teacher: '"아무것도 안 하는 친구는 왜 말하지 못할까요?" 두려움이나 어떻게 해야 할지 모르는 마음을 이야기하되 그 친구를 탓하지 않도록 한다. 도움 요청을 고자질로 여기는 학생에게는 안전과 권리를 지키기 위한 일이라는 점을 짚는다.',
            items: [
              { prompt: '도움 요청 방법과 알맞은 설명을 이어 보세요.', toolOptions: { mode: 'match', topic: '방법과 설명', slots: [{ id: 'm1', label: '담임 선생님께 말해요' }, { id: 'm2', label: '상담실에 가요' }, { id: 'm3', label: '친구와 이야기해요' }], cards: ['학교에서 바로 도움을 받을 수 있어요', '비밀을 지키며 상담받을 수 있어요', '마음을 나누고 함께 어른께 갈 수 있어요'] }, target: { match: { m1: '학교에서 바로 도움을 받을 수 있어요', m2: '비밀을 지키며 상담받을 수 있어요', m3: '마음을 나누고 함께 어른께 갈 수 있어요' } }, difficulty: 0.25 },
              { prompt: '도움을 청하는 일이 중요한 까닭만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '도움 요청의 까닭', basket: '중요한 까닭', cards: ['힘든 일을 더 크게 만들지 않아요', '나와 친구의 권리를 지킬 수 있어요', '말하면 고자질이라서 나빠요', '혼자 참으면 해결돼요'] }, target: { pick: ['힘든 일을 더 크게 만들지 않아요', '나와 친구의 권리를 지킬 수 있어요'] }, difficulty: 0.2 },
              { prompt: '문장을 그래프로 알 수 있는 사실과 더 알아봐야 하는 짐작으로 나누어 보세요.', toolOptions: { topic: '그래프 해석', slots: ['그래프로 알 수 있는 사실', '더 알아봐야 하는 짐작'], cards: ['담임 선생님께 말하는 학생이 가장 많아요', '아무것도 안 하는 학생이 10명이에요', '아무것도 안 하는 학생은 게을러요', '상담실은 아무도 믿지 않아요'] }, target: { sort: { '그래프로 알 수 있는 사실': ['담임 선생님께 말하는 학생이 가장 많아요', '아무것도 안 하는 학생이 10명이에요'], '더 알아봐야 하는 짐작': ['아무것도 안 하는 학생은 게을러요', '상담실은 아무도 믿지 않아요'] } }, difficulty: 0.3 },
            ] },
        ],
        wrap: {
          teacher: '"도움을 청하는 일은 용기가 있는 일일까요, 약한 일일까요?" 어려운 일은 함께 풀 수 있고 도움을 청하는 것이 용기라는 점을 정리한다. 출구 3번을 틀린 학생에게는 해결은 누가 같이할 수 있는지 되묻는다.',
          exits: [
            { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '다른 학교 도움 요청 방법', data: [['선생님께 말해요', 50], ['친구와 이야기해요', 25], ['상담실에 가요', 15], ['아무것도 안 해요', 10]], unit: '명', scale: 5, xLabel: '방법', choices: ['선생님께 말해요', '친구와 이야기해요', '상담실에 가요'], why: [null, '친구와 이야기해요는 25명이에요.', '상담실에 가요는 15명이에요.'] }, prompt: '다른 학교 그래프에서 가장 많은 학생이 고른 방법을 고르세요.', target: { pick: 0 }, difficulty: 0.15 },
            { type: 'choice', prompt: '힘든 일이 생겼을 때 알맞은 행동은?', options: ['믿는 어른께 사실대로 말해요', '아무에게도 말하지 않아요'], answer: 0, difficulty: 0.1, explain: '믿는 어른께 말하면 함께 해결 방법을 찾을 수 있어요.' },
            { type: 'choice', prompt: '"도움을 청하면 고자질이다"는 알맞은 말인가요?', options: ['아니요, 나와 친구의 안전을 지키는 일이에요', '네, 나쁜 일이에요'], answer: 0, difficulty: 0.2, explain: '도움을 청하는 것은 권리를 지키기 위한 용기 있는 행동이에요.' },
            { type: 'mood', prompt: '오늘 도움 요청 공부는 어땠나요?' },
          ],
        },
        ws: {
          title: '도움 요청 방법 설문 읽기',
          items: [
            { type: 'table', prompt: '설문 표를 완성하세요.', columns: ['방법', '학생 수(명)'], cells: [['담임 선생님께 말해요', '45'], ['친구와 이야기해요', ''], ['상담실에 가요', ''], ['아무것도 안 해요', '']], answer: '30, 15, 10' },
            { type: 'blank', prompt: '전체 학생 수를 구하세요.', text: '45 + 30 + 15 + 10 = ___ (명)', answer: '100' },
            { type: 'blank', prompt: '두 방법의 차를 구하세요.', text: '45 − 30 = ___ (명)', answer: '15' },
            { type: 'choice', prompt: '도움을 청하는 이유에 ○ 하세요.', options: ['나와 친구의 권리를 지킬 수 있어요', '고자질이라서 나빠요'], answer: '나와 친구의 권리를 지킬 수 있어요' },
            { type: 'short', prompt: '힘든 일이 생기면 내가 가장 먼저 말하고 싶은 사람과 까닭을 쓰세요.' },
          ],
          easy: { note: '힘든 일은 혼자 참지 말고 말해요.', items: [
            { type: 'table', prompt: '표를 완성하세요.', columns: ['방법', '학생 수(명)'], cells: [['담임 선생님께 말해요', '45'], ['상담실에 가요', '']], answer: '15' },
            { type: 'choice', prompt: '더 많은 학생이 고른 방법에 ○ 하세요.', options: ['담임 선생님께 말해요', '상담실에 가요'], answer: '담임 선생님께 말해요' },
            { type: 'blank', prompt: '알맞은 수를 쓰세요.', text: '15 + 10 = ___ (명)', answer: '25' },
            { type: 'short', prompt: '도움을 청한 친구에게 해 주고 싶은 말을 쓰세요.' },
          ] },
        },
        notes: '자주 보이는 어려움: ① 도움을 청하는 일을 고자질로 여긴다 → 안전과 권리를 지키는 일이라고 짚는다. ② 눈금 한 칸을 1명으로 읽는다 → 눈금선 옆 숫자를 먼저 읽게 한다. ③ 아무것도 안 하는 학생을 탓한다 → 말하기 어려운 마음을 헤아리고 도울 방법을 생각한다. 이 차시의 학교와 값은 모두 지어낸 것이다.',
      }),
      // ───────────────────────── 13차시 ─────────────────────────
      mk(13, {
        title: '인권 침해 유형 표와 그래프로 원인 풀어 읽기',
        objective: '인권 침해 유형별 건수를 표와 막대그래프로 함께 읽고 유형을 분류해 해결의 우선순위를 말할 수 있다.',
        std: S2,
        ill: 'a paper-cut analysis desk with a table and a bar chart of four kinds of rights violations and a magnifying glass over the tallest bar',
        scene: '유형별로 살펴봐요', more: [{ motif: 'star', x: 90, y: 100 }, { motif: 'house', x: 150, y: 222 }, { motif: 'flower', x: 340, y: 224 }],
        intro: {
          teacher: '"푸른학교(가상)에서 일어난 100건의 일을 유형별로 나눠 보면 무엇이 가장 많을까요?" 학생의 짐작을 먼저 들은 뒤, 표와 그래프로 확인한다고 알린다. 시연 단추로 가장 높은 막대를 짚어 보인다. 표는 정확한 값을, 그래프는 크기의 비교를 보여 준다는 점을 함께 정리한다.',
          student: '가장 많은 유형부터 해결을 시작하는 것이 왜 도움이 될지 생각해 봅시다.',
        },
        acts: [
          { title: '유형별 막대그래프 읽기', tool: 'chart',
            task: '눈금 한 칸은 5건이에요. 막대를 읽고 답해요.',
            teacher: '"가장 많은 유형과 가장 적은 유형은 무엇일까요?" 눈금을 읽어 38건과 17건이라는 값을 말하게 한다. 3번에서 두 유형의 합을 구할 때 하나를 빼먹는 학생에게 두 막대를 번갈아 짚게 한다.',
            items: [
              { prompt: '가장 많이 일어난 유형을 골라 보세요.', toolOptions: { type: 'bar', mode: 'read', title: '푸른학교 인권 침해 유형', data: KIND, unit: '건', scale: 5, xLabel: '유형', choices: ['말로 놀림', '따돌림', '허락 없이 사진 올림'], why: [null, '따돌림은 25건이에요.', '허락 없이 사진 올림은 20건이에요.'] }, target: { pick: 0 }, difficulty: 0.1 },
              { prompt: '따돌림은 몇 건인지 쓰세요.', toolOptions: { type: 'bar', mode: 'read', title: '푸른학교 인권 침해 유형', data: KIND, unit: '건', scale: 5, xLabel: '유형', question: '따돌림은 몇 건인가요?' }, target: { value: 25 }, difficulty: 0.15 },
              { prompt: '말로 놀림과 따돌림을 합하면 몇 건인지 쓰세요.', toolOptions: { type: 'bar', mode: 'read', title: '푸른학교 인권 침해 유형', data: KIND, unit: '건', scale: 5, xLabel: '유형', question: '두 유형을 합하면 몇 건인가요?' }, target: { value: 63 }, difficulty: 0.3 },
            ] },
          { title: '그래프를 보고 표 채우기', tool: 'chart',
            task: '막대그래프를 보고 표의 빈칸에 알맞은 수를 써요.',
            teacher: '"표의 빈칸은 그래프의 어느 막대를 읽으면 될까요?" 칸의 이름과 막대 아래 이름을 맞추게 한다. 빈칸에 막대의 순서를 쓰는 학생에게는 칸 제목이 무엇인지 다시 읽게 한다.',
            items: [
              { prompt: '그래프를 보고 표의 빈칸 두 곳을 채워 보세요.', toolOptions: { type: 'bar', mode: 'read', title: '푸른학교 인권 침해 유형', data: KIND, unit: '건', scale: 5, xLabel: '유형', tableBlanks: [0, 2], showTable: true }, target: { table: true }, difficulty: 0.3 },
              { prompt: '그래프를 보고 표의 빈칸 한 곳을 채워 보세요.', toolOptions: { type: 'bar', mode: 'read', title: '푸른학교 인권 침해 유형', data: KIND, unit: '건', scale: 5, xLabel: '유형', tableBlanks: [1], showTable: true }, target: { table: true }, difficulty: 0.25 },
              { prompt: '가장 적게 일어난 유형은 몇 건인지 쓰세요.', toolOptions: { type: 'bar', mode: 'read', title: '푸른학교 인권 침해 유형', data: KIND, unit: '건', scale: 5, xLabel: '유형', question: '가장 적게 일어난 유형은 몇 건인가요?' }, target: { value: 17 }, difficulty: 0.2 },
            ] },
          { title: '유형을 종류별로 묶기', tool: 'mindmap',
            task: '인권 침해 유형을 말·행동·인터넷 중 어디에서 일어나는지로 나눠요.',
            teacher: '"같은 놀림도 말로 하는 것과 사진을 올려서 하는 것은 해결 방법이 같을까요?" 말·행동·인터넷의 성질이 다르므로 대응도 달라진다는 점을 짚는다. 사진 올림을 행동 칸에 놓는 학생에게는 어디에서 일어난 일인지 되묻는다.',
            items: [
              { prompt: '유형을 일어나는 곳에 따라 나누어 보세요.', toolOptions: { topic: '침해 유형', slots: ['말로 하는 일', '행동으로 하는 일', '인터넷에서 일어나는 일'], cards: ['말로 놀림', '물건 숨김', '허락 없이 사진 올림'] }, target: { sort: { '말로 하는 일': ['말로 놀림'], '행동으로 하는 일': ['물건 숨김'], '인터넷에서 일어나는 일': ['허락 없이 사진 올림'] } }, difficulty: 0.25 },
              { prompt: '카드 여섯 장을 일어나는 곳에 따라 나누어 보세요.', toolOptions: { topic: '침해 유형', slots: ['말로 하는 일', '행동으로 하는 일', '인터넷에서 일어나는 일'], cards: ['외모를 흉보는 말', '밀치거나 가방을 던져요', '단체 대화방에서 따돌려요', '비웃는 별명을 불러요', '신발을 숨겨요', '창피한 사진을 허락 없이 올려요'] }, target: { sort: { '말로 하는 일': ['외모를 흉보는 말', '비웃는 별명을 불러요'], '행동으로 하는 일': ['밀치거나 가방을 던져요', '신발을 숨겨요'], '인터넷에서 일어나는 일': ['단체 대화방에서 따돌려요', '창피한 사진을 허락 없이 올려요'] } }, difficulty: 0.35 },
              { prompt: '그래프를 보고 가장 먼저 해결해야 할 일을 정할 때 알맞은 말만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '우선순위', basket: '알맞은 말', cards: ['가장 많은 유형부터 줄여요', '건수가 적어도 심각한 일은 따로 살펴요', '가장 적은 유형만 해결해요', '모든 일을 못 본 척해요'] }, target: { pick: ['가장 많은 유형부터 줄여요', '건수가 적어도 심각한 일은 따로 살펴요'] }, difficulty: 0.3 },
            ] },
        ],
        wrap: {
          teacher: '"가장 많은 유형만 해결하면 충분할까요?" 건수가 적어도 피해가 큰 일이 있을 수 있어 따로 살펴야 한다는 점을 말하게 한다. 출구 2번을 틀린 학생에게는 표와 그래프의 같은 값을 짚어 확인하게 한다.',
          exits: [
            { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '다른 학교 침해 유형', data: [['말로 놀림', 30], ['물건 숨김', 20], ['따돌림', 35], ['사진 올림', 15]], unit: '건', scale: 5, xLabel: '유형', choices: ['말로 놀림', '따돌림', '사진 올림'], why: ['따돌림 막대가 더 길어요.', null, '사진 올림은 가장 짧은 막대예요.'] }, prompt: '다른 학교 그래프에서 가장 많이 일어난 유형을 고르세요.', target: { pick: 1 }, difficulty: 0.15 },
            { type: 'choice', prompt: '표와 막대그래프의 차이로 알맞은 것은?', options: ['표는 정확한 수를, 그래프는 크기의 비교를 잘 보여 줘요', '둘은 완전히 같은 모습이에요'], answer: 0, difficulty: 0.2, explain: '표는 정확한 값, 그래프는 한눈에 비교하기 쉬워요.' },
            { type: 'choice', prompt: '건수가 적어도 따로 살펴야 하는 까닭은?', options: ['피해가 클 수 있어요', '중요하지 않아서요'], answer: 0, difficulty: 0.2, explain: '건수가 적어도 피해가 클 수 있어서 따로 살펴야 해요.' },
            { type: 'mood', prompt: '오늘 표와 그래프 읽기는 어땠나요?' },
          ],
        },
        ws: {
          title: '인권 침해 유형 자료 읽기',
          items: [
            { type: 'table', prompt: '표를 완성하세요.', columns: ['유형', '건수(건)'], cells: [['말로 놀림', '38'], ['물건 숨김', ''], ['따돌림', ''], ['허락 없이 사진 올림', '']], answer: '17, 25, 20' },
            { type: 'blank', prompt: '전체 건수를 구하세요.', text: '38 + 17 + 25 + 20 = ___ (건)', answer: '100' },
            { type: 'blank', prompt: '두 유형의 차를 구하세요.', text: '38 − 17 = ___ (건)', answer: '21' },
            { type: 'choice', prompt: '해결의 순서를 정할 때 알맞은 말에 ○ 하세요.', options: ['건수가 많아도 적어도 피해가 큰 일은 살펴요', '건수가 적으면 모두 무시해요'], answer: '건수가 많아도 적어도 피해가 큰 일은 살펴요' },
            { type: 'short', prompt: '이 자료를 보고 우리 학교에서 먼저 해야 할 일을 한 문장으로 쓰세요.' },
          ],
          easy: { note: '표는 정확한 값, 그래프는 비교를 보여 줘요.', items: [
            { type: 'table', prompt: '표를 완성하세요.', columns: ['유형', '건수(건)'], cells: [['말로 놀림', '38'], ['물건 숨김', '']], answer: '17' },
            { type: 'choice', prompt: '더 많이 일어난 유형에 ○ 하세요.', options: ['말로 놀림(38건)', '물건 숨김(17건)'], answer: '말로 놀림(38건)' },
            { type: 'blank', prompt: '알맞은 수를 쓰세요.', text: '17 + 20 = ___ (건)', answer: '37' },
            { type: 'short', prompt: '친구에게 힘이 되는 말을 한 줄 쓰세요.' },
          ] },
        },
        notes: '자주 보이는 어려움: ① 표와 그래프를 각각 따로 보고 같은 자료로 연결하지 못한다 → 같은 값을 표에서 그래프까지 손가락으로 따라가게 한다. ② 가장 많은 유형만 해결하면 된다고 생각한다 → 건수와 피해의 크기는 다를 수 있다고 알려 준다. ③ 유형 분류에서 인터넷과 행동을 혼동한다 → 어디에서 일어난 일인지 묻는다. 이 차시의 학교와 값은 모두 지어낸 것이다.',
      }),
      // ───────────────────────── 14차시 ─────────────────────────
      mk(14, {
        title: '인권 보호 활동 계획하고 도움 요청 순서 정하기',
        objective: '인권 침해를 줄이기 위해 내가·학교가·국가기관이 할 수 있는 일을 구분하고 보호 활동의 순서와 알맞은 문구를 정할 수 있다.',
        std: S2,
        ill: 'students making a poster for a human rights campaign with hand-drawn hearts and a hotline sign, and a teacher guiding the layout',
        scene: '인권을 지키는 활동 계획', more: [{ motif: 'star', x: 90, y: 100 }, { motif: 'star', x: 400, y: 110, color: 'buttercup' }, { motif: 'house', x: 330, y: 222 }],
        intro: {
          teacher: '"인권 침해를 줄이려면 누가 무엇을 할 수 있을까요?" 학생 혼자가 아니라 친구, 학교, 국가기관이 함께 한다는 것을 알려 준다. 국가인권위원회가 인권 침해에 대한 상담과 조사를 하는 국가기관이라고 한 줄로 소개한다. 시연 단추로 첫 문항의 카드가 알맞은 칸에 놓이는 모습을 보인다. 오늘의 사례는 지어낸 것이다.',
          student: '친구가 힘들어 보일 때 내가 바로 할 수 있는 일을 한 가지 생각해 봅시다.',
        },
        acts: [
          { title: '누가 할 수 있는 일일까', tool: 'mindmap',
            task: '인권 보호 활동을 누가 할 수 있는지 나눠요.',
            teacher: '"법원에서 재판으로 권리를 되찾는 일은 학생이 직접 할 수 있을까요?" 국가기관이 하는 일과 내가 할 수 있는 일의 차이를 짚는다. 국가인권위원회를 학교 안에 있는 기관으로 고르는 학생에게는 학교 밖에서 인권 상담과 조사를 하는 국가기관이라는 설명을 다시 한다.',
            items: [
              { prompt: '보호 활동을 누가 하는 일인지 나누어 보세요.', toolOptions: { topic: '인권 보호', slots: ['나와 친구가 할 수 있는 일', '학교·어른에게 도움을 청하기', '국가기관이 하는 일'], cards: ['피해 친구 곁에 있어 줘요', '담임 선생님께 알려요', '국가인권위원회에서 인권 상담과 조사를 해요'] }, target: { sort: { '나와 친구가 할 수 있는 일': ['피해 친구 곁에 있어 줘요'], '학교·어른에게 도움을 청하기': ['담임 선생님께 알려요'], '국가기관이 하는 일': ['국가인권위원회에서 인권 상담과 조사를 해요'] } }, difficulty: 0.2 },
              { prompt: '카드 여섯 장을 누가 할 수 있는 일인지 나누어 보세요.', toolOptions: { topic: '인권 보호', slots: ['나와 친구가 할 수 있는 일', '학교·어른에게 도움을 청하기', '국가기관이 하는 일'], cards: ['놀리는 말을 따라 하지 않아요', '존중하는 말을 먼저 건네요', '학교 상담실을 이용해요', '보호자께 도움을 청해요', '법원에서 재판으로 권리를 되찾도록 도와요', '인권 침해 신고를 접수하고 살펴봐요'] }, target: { sort: { '나와 친구가 할 수 있는 일': ['놀리는 말을 따라 하지 않아요', '존중하는 말을 먼저 건네요'], '학교·어른에게 도움을 청하기': ['학교 상담실을 이용해요', '보호자께 도움을 청해요'], '국가기관이 하는 일': ['법원에서 재판으로 권리를 되찾도록 도와요', '인권 침해 신고를 접수하고 살펴봐요'] } }, difficulty: 0.3 },
              { prompt: '내가 지금 바로 할 수 있는 보호 활동만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '내가 할 수 있는 일', basket: '내가 할 수 있어요', cards: ['놀림당하는 친구에게 괜찮은지 물어요', '다른 친구와 함께 어른께 알려요', '직접 재판을 열어요', '가해 친구를 혼내요'] }, target: { pick: ['놀림당하는 친구에게 괜찮은지 물어요', '다른 친구와 함께 어른께 알려요'] }, difficulty: 0.25 },
            ] },
          { title: '도움 요청 순서와 캠페인 계획', tool: 'mindmap',
            task: '도움을 요청하는 차례와 캠페인 준비의 차례를 놓고 알맞은 문구를 골라요.',
            teacher: '"어른께 말하기 전에 먼저 해 둘 일은 무엇일까요?" 언제 어디서 어떤 일이 있었는지를 사실대로 기억해 두는 것이 도움이 된다고 알려 준다. 문구를 고를 때 특정 친구를 비난하는 말은 인권을 존중하는 문구가 아니라는 점을 짚는다.',
            items: [
              { prompt: '도움을 요청하는 차례대로 카드를 놓아 보세요.', toolOptions: { mode: 'order', topic: '도움 요청 순서', slots: ['첫째', '둘째', '셋째', '넷째'], cards: ['일이 일어난 일을 사실대로 기억해요', '믿는 어른께 말해요', '도움을 받고 상황을 살펴봐요', '다시 일어나지 않게 약속을 만들어요'] }, target: { order: ['일이 일어난 일을 사실대로 기억해요', '믿는 어른께 말해요', '도움을 받고 상황을 살펴봐요', '다시 일어나지 않게 약속을 만들어요'] }, difficulty: 0.25 },
              { prompt: '인권 캠페인을 준비하는 차례대로 카드를 놓아 보세요.', toolOptions: { mode: 'order', topic: '캠페인 준비', slots: ['첫째', '둘째', '셋째', '넷째'], cards: ['알릴 주제를 정해요', '포스터와 문구를 만들어요', '교실 밖에서 알려요', '결과를 돌아보고 고쳐요'] }, target: { order: ['알릴 주제를 정해요', '포스터와 문구를 만들어요', '교실 밖에서 알려요', '결과를 돌아보고 고쳐요'] }, difficulty: 0.25 },
              { prompt: '인권을 존중하는 캠페인 문구만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '캠페인 문구', basket: '알맞은 문구', cards: ['서로 달라도 모두 소중해요', '놀리는 말 대신 응원의 말을 건네요', '놀리는 아이는 나쁜 아이예요', '약한 친구는 우리가 따돌려요'] }, target: { pick: ['서로 달라도 모두 소중해요', '놀리는 말 대신 응원의 말을 건네요'] }, difficulty: 0.2 },
            ] },
        ],
        wrap: {
          teacher: '"인권을 지키는 일은 혼자 할까요, 함께 할까요?" 나, 학교, 국가기관이 각자 맡은 일을 하면서 함께 지킨다는 것을 정리한다. 출구 2번을 틀린 학생에게는 학생이 직접 할 수 있는 일과 기관이 하는 일을 다시 나누어 보게 한다.',
          exits: [
            { type: 'choice', prompt: '인권 침해에 대한 상담과 조사를 하는 국가기관은 어디인가요?', options: ['국가인권위원회', '학교 급식실', '동네 도서관'], answer: 0, difficulty: 0.2, explain: '국가인권위원회는 인권 침해에 대한 상담과 조사를 하는 국가기관이에요.' },
            { type: 'choice', prompt: '도움을 요청할 때 가장 먼저 해 둘 일은?', options: ['일어난 일을 사실대로 기억해요', '가해자를 직접 혼내요'], answer: 0, difficulty: 0.15, explain: '언제 어디서 어떤 일이 있었는지 알아야 도움을 받기 쉬워요.' },
            { type: 'choice', prompt: '인권을 존중하는 캠페인 문구는?', options: ['서로 달라도 모두 소중해요', '약한 친구는 따돌려요'], answer: 0, difficulty: 0.1, explain: '모든 사람의 소중함을 알리는 문구가 인권을 존중하는 문구예요.' },
            { type: 'mood', prompt: '오늘 인권 보호 활동 계획은 어땠나요?' },
          ],
        },
        ws: {
          title: '우리의 인권 보호 활동 계획',
          items: [
            { type: 'table', prompt: '누가 할 수 있는 일인지 한 가지씩 쓰세요.', columns: ['누가', '할 수 있는 일'], cells: [['나와 친구', ''], ['학교·어른', ''], ['국가기관', '']], answer: '나와 친구: 곁에 있어 주기, 학교·어른: 상담, 국가기관: 상담·조사(예)' },
            { type: 'choice', prompt: '인권 상담과 조사를 하는 국가기관에 ○ 하세요.', options: ['국가인권위원회', '교실 청소 당번'], answer: '국가인권위원회' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '도움을 요청할 때는 일어난 일을 ___대로 말해요.', answer: '사실' },
            { type: 'choice', prompt: '알맞은 캠페인 문구에 ○ 하세요.', options: ['서로 달라도 모두 소중해요', '놀리는 아이는 나쁜 아이예요'], answer: '서로 달라도 모두 소중해요' },
            { type: 'short', prompt: '우리 반에서 하고 싶은 인권 캠페인 문구를 한 문장으로 써 보세요.' },
          ],
          easy: { note: '인권은 함께 지켜요.', items: [
            { type: 'choice', prompt: '내가 할 수 있는 일에 ○ 하세요.', options: ['친구 곁에 있어 줘요', '재판을 열어요'], answer: '친구 곁에 있어 줘요' },
            { type: 'choice', prompt: '도움을 청할 곳에 ○ 하세요.', options: ['담임 선생님', '모르는 사람'], answer: '담임 선생님' },
            { type: 'blank', prompt: '알맞은 말을 쓰세요.', text: '서로 달라도 모두 ___해요.', answer: '소중' },
            { type: 'short', prompt: '친구를 위한 응원의 말을 한 줄 쓰세요.' },
          ] },
        },
        notes: '자주 보이는 어려움: ① 학생이 직접 해결해야 한다고 생각해 위험한 행동을 고른다 → 어른과 기관에 도움을 청하는 것이 안전하다고 짚는다. ② 가해 친구를 비난하는 문구를 고른다 → 사람을 비난하지 않고 행동을 바꾸자는 말을 고른다. ③ 국가기관의 이름과 하는 일을 섞는다 → 이름과 하는 일을 한 줄로 짝지어 보여 준다. 사례는 지어낸 것이다.',
      }),
      // ───────────────────────── 15차시 ─────────────────────────
      mk(15, {
        title: '단원 낱말 이어 보고 우리 반 인권 약속 만들기',
        objective: '법과 인권의 낱말을 정리하고 조사와 설문 자료를 근거로 우리 반 인권 약속을 만들어 스스로 점검할 수 있다.',
        std: S2,
        ill: 'students signing a large paper-cut promise banner under a heart-shaped tree with words of respect written on its leaves',
        scene: '우리 반 인권 약속', more: [{ motif: 'tree', x: 240, y: 214 }, { motif: 'star', x: 90, y: 100 }, { motif: 'star', x: 400, y: 110, color: 'buttercup' }],
        intro: {
          teacher: '"이 단원에서 배운 낱말 가운데 하나를 친구에게 설명해 준다면 무엇을 고르고 싶나요?" 헌법, 기본권, 인권, 인권 침해 가운데 하나를 골라 간단히 말하게 한다. 시연 단추로 첫 문항의 낱말이 뜻과 이어지는 모습을 보인다. 오늘은 낱말을 정리하고 조사 자료를 근거로 우리 반 약속을 만든다.',
          student: '이 단원에서 가장 기억에 남는 낱말을 하나 골라 봅시다.',
        },
        acts: [
          { title: '낱말과 뜻 이어 보기', tool: 'mindmap',
            task: '단원에서 배운 낱말과 알맞은 뜻을 이어요.',
            teacher: '"헌법과 법률은 어떻게 다를까요?" 헌법은 가장 기본이 되는 법이고 법률은 헌법에 어긋날 수 없다는 점을 다시 말하게 한다. 인권과 기본권을 같은 말로 쓰는 학생에게는 기본권이 헌법에 적힌 권리라는 점을 짚는다.',
            items: [
              { prompt: '낱말과 알맞은 뜻을 이어 보세요.', toolOptions: { mode: 'match', topic: '단원 낱말', slots: [{ id: 'm1', label: '헌법' }, { id: 'm2', label: '기본권' }, { id: 'm3', label: '인권' }, { id: 'm4', label: '인권 침해' }], cards: ['나라의 기본 틀과 국민의 권리를 정한 가장 기본이 되는 법', '헌법이 보장하는 국민의 기본 권리', '사람이라면 누구나 가지는 기본 권리', '다른 사람의 권리를 함부로 해치는 일'] }, target: { match: { m1: '나라의 기본 틀과 국민의 권리를 정한 가장 기본이 되는 법', m2: '헌법이 보장하는 국민의 기본 권리', m3: '사람이라면 누구나 가지는 기본 권리', m4: '다른 사람의 권리를 함부로 해치는 일' } }, difficulty: 0.25 },
              { prompt: '법의 역할 세 가지를 모두 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '법의 역할', basket: '법의 역할', cards: ['질서를 지켜요', '권리를 보호해요', '다툼을 공정하게 해결해요', '생각을 똑같이 만들어요'] }, target: { pick: ['질서를 지켜요', '권리를 보호해요', '다툼을 공정하게 해결해요'] }, difficulty: 0.2 },
              { prompt: '기본권 다섯 가지 가운데 나라의 일에 참여하는 권리와 억울할 때 재판을 청구하는 권리를 이어 보세요.', toolOptions: { mode: 'match', topic: '기본권', slots: [{ id: 'm1', label: '나라의 일에 참여해요' }, { id: 'm2', label: '억울할 때 재판을 받아요' }], cards: ['참정권', '청구권', '자유권'] }, target: { match: { m1: '참정권', m2: '청구권' } }, difficulty: 0.25 },
            ] },
          { title: '자료를 근거로 약속 만들기', tool: 'mindmap',
            task: '설문과 조사 자료를 근거로 우리 반 약속 카드를 고르고 나눠요.',
            teacher: '"약속을 만들 때 어떤 근거가 필요할까요?" 설문이나 조사 자료에서 얻은 사실을 바탕으로 하면 모두가 납득하기 쉽다고 정리한다. 특정 친구를 지목하는 약속을 고르는 학생에게는 사람을 지목하지 않고 행동을 약속하는 이유를 이야기한다.',
            items: [
              { prompt: '약속 카드를 근거가 있는 약속과 근거가 없는 약속으로 나누어 보세요.', toolOptions: { topic: '약속 점검', slots: ['근거가 있어요', '근거가 없어요'], cards: ['설문에서 놀림을 본 학생이 30명이라 존중하는 말을 쓰기로 해요', '아무것도 안 하는 학생이 10명이라 도움 요청 방법을 안내해요', '누구든 말을 못 하게 해요', '마음에 안 드는 친구는 따돌려요'] }, target: { sort: { '근거가 있어요': ['설문에서 놀림을 본 학생이 30명이라 존중하는 말을 쓰기로 해요', '아무것도 안 하는 학생이 10명이라 도움 요청 방법을 안내해요'], '근거가 없어요': ['누구든 말을 못 하게 해요', '마음에 안 드는 친구는 따돌려요'] } }, difficulty: 0.3 },
              { prompt: '우리 반 인권 약속으로 알맞은 것만 골라 바구니에 넣어 보세요.', toolOptions: { mode: 'pick', topic: '인권 약속', basket: '우리 반 약속', cards: ['다른 사람의 이야기를 끝까지 들어요', '힘들면 믿는 어른께 말해요', '친구의 비밀은 공개하지 않아요', '장난이면 무엇이든 해도 돼요'] }, target: { pick: ['다른 사람의 이야기를 끝까지 들어요', '힘들면 믿는 어른께 말해요', '친구의 비밀은 공개하지 않아요'] }, difficulty: 0.2 },
              { prompt: '약속을 만드는 차례대로 카드를 놓아 보세요.', toolOptions: { mode: 'order', topic: '약속 만들기', slots: ['첫째', '둘째', '셋째', '넷째'], cards: ['자료를 보고 문제를 찾아요', '함께 이야기해 약속을 정해요', '약속을 눈에 띄게 붙여요', '일주일 뒤 잘 지켰는지 돌아봐요'] }, target: { order: ['자료를 보고 문제를 찾아요', '함께 이야기해 약속을 정해요', '약속을 눈에 띄게 붙여요', '일주일 뒤 잘 지켰는지 돌아봐요'] }, difficulty: 0.25 },
            ] },
        ],
        wrap: {
          teacher: '"이 단원에서 배운 것 가운데 앞으로 실천하고 싶은 것은 무엇인가요?" 스스로 고른 약속 한 가지를 한 문장으로 말하게 한다. 출구 2번을 틀린 학생에게는 약속이 누구를 위한 것인지 되묻는다.',
          exits: [
            { type: 'choice', prompt: '다음 가운데 인권을 가진 사람은 누구인가요?', options: ['나이·성별·국적과 관계없이 모든 사람', '어른만'], answer: 0, difficulty: 0.1, explain: '인권은 사람이라는 이유만으로 누구에게나 있어요.' },
            { type: 'choice', prompt: '우리 반 인권 약속을 만들 때 가장 알맞은 방법은?', options: ['함께 이야기하고 자료를 근거로 정해요', '한 사람이 마음대로 정해요'], answer: 0, difficulty: 0.2, explain: '함께 이야기하고 근거를 들어야 모두가 납득해요.' },
            { type: 'choice', prompt: '이 단원을 스스로 점검했을 때 알맞은 말은?', options: ['법과 인권의 뜻을 말하고 약속을 실천하고 싶어요', '아무것도 기억나지 않아요'], answer: 0, difficulty: 0.1, explain: '단원의 목표는 법과 인권을 이해하고 실천하는 것이에요.' },
            { type: 'mood', prompt: '이 단원 공부는 어땠나요?' },
          ],
        },
        ws: {
          title: '단원 정리와 우리 반 인권 약속',
          items: [
            { type: 'table', prompt: '낱말과 뜻을 이어서 쓰세요.', columns: ['낱말', '뜻'], cells: [['헌법', ''], ['기본권', ''], ['인권', '']], answer: '헌법: 가장 기본이 되는 법, 기본권: 헌법이 보장하는 권리, 인권: 사람이라면 누구나 가지는 권리' },
            { type: 'blank', prompt: '법의 역할에서 빈칸을 채우세요.', text: '법은 질서를 지키고 ___를 보호하며 다툼을 해결해요.', answer: '권리' },
            { type: 'table', prompt: '우리 반 인권 약속을 정리하세요.', columns: ['근거 자료', '약속'], cells: [['', ''], ['', '']], answer: '예: 설문에서 놀림을 본 학생이 30명 / 존중하는 말을 쓰자' },
            { type: 'choice', prompt: '알맞은 약속에 ○ 하세요.', options: ['다른 사람의 이야기를 끝까지 들어요', '장난이면 무엇이든 해도 돼요'], answer: '다른 사람의 이야기를 끝까지 들어요' },
            { type: 'short', prompt: '이 단원에서 새로 알게 된 것과 앞으로 실천하고 싶은 것을 한 문장으로 쓰세요.' },
          ],
          easy: { note: '약속에는 근거가 있어야 해요.', items: [
            { type: 'choice', prompt: '인권을 말한 것에 ○ 하세요.', options: ['사람이라면 누구나 가지는 권리', '어른만 가지는 권리'], answer: '사람이라면 누구나 가지는 권리' },
            { type: 'choice', prompt: '법이 하는 일에 ○ 하세요.', options: ['권리를 보호해요', '생각을 똑같이 만들어요'], answer: '권리를 보호해요' },
            { type: 'blank', prompt: '알맞은 말을 쓰세요.', text: '힘들면 믿는 ___께 말해요.', answer: '어른' },
            { type: 'short', prompt: '우리 반 약속 한 가지를 써 보세요.' },
          ] },
        },
        notes: '자주 보이는 어려움: ① 기본권과 인권을 같은 말로 쓴다 → 기본권은 헌법에 적힌 권리라고 짚는다. ② 약속에 근거를 넣지 않는다 → 설문 숫자를 한 문장에 함께 쓰게 한다. ③ 특정 친구를 지목하는 약속을 만든다 → 사람이 아니라 행동을 약속한다고 말한다. 이 단원의 사례·설문·학교는 모두 지어낸 것이다.',
      }),
      // @@NEXT@@
    ],
  });
})();
