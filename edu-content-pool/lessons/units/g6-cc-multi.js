/* 6학년 창체 법정교육 — 다문화 이해 (2차시). 근거: 다문화가족지원법 제5조·시행령 제10조의2, 교육부 지침 연 2시간. 특정 나라·종교를 평가하지 않고 다문화 배경 학생을 지목하지 않는다. 장면·인물은 가상(가명 한 글자).
 */
(function () {
  const G = 6, CODE = 'multi';
  const UNIT = `g${G}-창체-${CODE}`;
  const TITLE = '다문화 이해';
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
    flow: '6학년 다문화 이해 단원은 우리 사회를 함께 이루는 다양한 이웃을 이해하고 차별 앞에서 조력자가 되는 2차시입니다. 1차시에는 일하러, 공부하러, 가족을 이루러 우리 사회에 온 이웃들의 삶을 사례 카드로 살피고, 이들이 지역 사회에서 함께 일하고 배우며 살아가는 모습을 정리합니다. 2차시에는 급식 식단·명절·말씨처럼 다문화 배경을 이유로 생기는 차별 상황에서 멈추게 하고 돕는 조력자의 선택을 연습합니다. 근거는 다문화가족지원법 제5조·시행령 제10조의2와 교육부 지침 연 2시간이며, 특정 나라·종교를 평가하지 않고 반의 다문화 배경 학생을 지목하지 않습니다. 4학년(다름은 틀림이 아님), 5학년(고정관념과 편견, 한국어가 서툰 친구와 소통)에서 이어지고, 같은 학년 학교폭력 예방(g6-cc-bully 3차시 차별하는 말)과 연계해 지도할 수 있습니다.',
    refs: {},
    lessons: [
      // ───────────────────────────── 1차시
      LESSON(1, {
        title: '이웃 사례 카드로 함께 사는 사회 그려 보기',
        objective: '일·공부·가족을 이유로 우리 사회에 온 다양한 이웃의 삶을 사례로 이해하고, 함께 사는 사회에서 서로에게 필요한 태도를 말할 수 있다.',
        draw: 'a paper neighborhood with a market, a factory, a university and houses, people of diverse backgrounds working, studying and chatting together under a paper sun',
        banner: '우리 곁의 다양한 이웃', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }],
        intro: {
          teacher: '"우리 동네 시장, 공장, 대학, 식당에서 일하거나 공부하는 사람들은 모두 같은 곳에서 태어났을까요?" 두세 명의 대답을 듣고(기다릴 반응: "다른 나라에서 온 분도 있어요") 시연 단추로 이웃 사례가 온 까닭에 따라 나뉘는 모습을 보여 준다. "외국 사람은 잠깐 있다 가는 손님이에요"가 나오면 "이곳에서 일하고 세금을 내고 아이를 키우는 이웃도 손님일까요?"라고 되묻는다. 오늘은 다양한 이웃의 삶을 사례로 살피고 함께 사는 사회를 그려 본다고 밝힌다.',
          student: '우리 생활에서 다른 문화에서 온 음식·물건·말을 짝과 한 가지씩 찾아 말해 봅시다.',
          demo: { tool: 'mindmap', options: { topic: '어떤 이웃일까', slots: ['일하러 왔어요', '공부하러 왔어요'], cards: ['공장에서 일하는 분', '대학에서 공부하는 학생'], shuffle: false }, sequence: [{ sort: { '일하러 왔어요': ['공장에서 일하는 분'], '공부하러 왔어요': ['대학에서 공부하는 학생'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 이웃 사례를 온 까닭으로 나누기', minutes: 13, tool: 'mindmap',
            teacher: '"이 이웃은 어떤 까닭으로 우리 사회에서 살게 되었을까요?" 1번에서 사례 카드마다 그 이웃이 지역에서 하는 일을 함께 말하게 한다. 2번에서 결혼으로 가족을 이룬 이웃과 그 자녀도 우리 사회의 구성원이라는 점을 짚는다. 3번은 다문화 배경 이웃을 대하는 생각 가운데 사실에 맞는 것을 고르게 한다.',
            task: '이웃 사례 카드를 온 까닭에 따라 나누고, 함께 사는 사회에 대한 바른 생각을 골라요.',
            levels: LV,
            items: [
              MS('이웃 사례를 일하러 온 경우와 공부하러 온 경우로 나누어 보세요.', '온 까닭 1', ['일하러 왔어요', '공부하러 왔어요'], ['농장에서 일하는 분', '대학원에서 연구하는 분', '배를 만드는 공장 기술자', '한국어를 배우는 유학생'], { '일하러 왔어요': ['농장에서 일하는 분', '배를 만드는 공장 기술자'], '공부하러 왔어요': ['대학원에서 연구하는 분', '한국어를 배우는 유학생'] }, 0.15),
              MS('이웃 사례를 가족을 이룬 경우와 일하러 온 경우로 나누어 보세요.', '온 까닭 2', ['가족을 이뤘어요', '일하러 왔어요'], ['결혼해 아이를 키우는 분', '식당 주방에서 일하는 분', '할머니와 사는 다문화 가정', '건설 현장 기술자'], { '가족을 이뤘어요': ['결혼해 아이를 키우는 분', '할머니와 사는 다문화 가정'], '일하러 왔어요': ['식당 주방에서 일하는 분', '건설 현장 기술자'] }, 0.2),
              MP('다양한 이웃과 함께 사는 사회에 대한 바른 생각만 골라 담아 보세요.', '바른 생각', ['함께 일하고 배우는 이웃', '저마다의 문화를 존중해요', '잠깐 있다 갈 손님', '우리 문화만 따라야 해요'], ['함께 일하고 배우는 이웃', '저마다의 문화를 존중해요'], 0.25,
                { conclude: '일·공부·가족을 이유로 온 이웃들도 우리 사회를 함께 이루는 구성원이에요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 이웃이 겪는 어려움과 함께 할 일 잇기', minutes: 14, tool: 'mindmap',
            teacher: '"낯선 나라에서 살면 어떤 점이 어려울까요?" 1번은 이웃이 겪는 어려움과 도움이 되는 일을 잇게 한다. 2번에서 "한국에 왔으니 한국말만 써야 한다"는 생각을 짚어, 두 언어를 쓰는 것은 힘이 될 수 있다는 점을 말한다. 3번은 우리 학교에서 할 수 있는 일을 고르게 하며, 도움을 주는 쪽과 받는 쪽으로 나누기보다 서로 배우는 관계라는 점을 강조한다.',
            task: '이웃이 겪는 어려움과 함께 할 일을 잇고, 서로 배우는 학교를 만드는 일을 골라요.',
            levels: LV,
            items: [
              MM('이웃이 겪는 어려움과 도움이 되는 일을 이어 보세요. 맞지 않는 카드는 남겨요.', '어려움과 함께 할 일', [{ id: 's1', label: '안내문이 한국어로만 나와요.' }, { id: 's2', label: '말씨가 다르다고 무시당해요.' }, { id: 's3', label: '명절에 고향 가족이 그리워요.' }], ['여러 언어 안내문', '말씨를 놀리지 않기', '서로의 명절 나누기', '한국말만 쓰게 하기'], { s1: '여러 언어 안내문', s2: '말씨를 놀리지 않기', s3: '서로의 명절 나누기' }, 0.2),
              MS('두 언어에 대한 생각을 존중하는 생각과 편견으로 나누어 보세요.', '두 언어를 쓰는 친구', ['존중하는 생각', '편견'], ['두 언어는 큰 힘이에요', '집에서 쓰는 말도 소중해요', '한국말만 써야 해요', '엄마 나라 말은 창피해'], { '존중하는 생각': ['두 언어는 큰 힘이에요', '집에서 쓰는 말도 소중해요'], '편견': ['한국말만 써야 해요', '엄마 나라 말은 창피해'] }, 0.25),
              MP('서로 배우는 학교를 만드는 일만 골라 담아 보세요.', '서로 배우는 학교', ['여러 나라 인사말 배우기', '세계 음식 주간 열기', '도와준다며 대신 하기', '출신 나라로 모둠 나누기'], ['여러 나라 인사말 배우기', '세계 음식 주간 열기'], 0.2,
                { conclude: '다양한 이웃과는 돕고 받는 사이가 아니라 서로 배우는 사이가 될 수 있어요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"우리 사회를 함께 이루는 이웃에게 필요한 태도 한 가지는 무엇일까요?" 두세 명의 생각을 칠판에 모은다. 출구 1번에서 "잠깐 있다 갈 손님"을 바른 생각에 놓은 학생에게 이곳에서 일하고 가족을 꾸리는 이웃을 다시 떠올리게 한다. 2번에서 "한국말만 써야 한다"를 고른 학생에게 두 언어가 힘이 된다는 점을 짚는다.',
          exit: [
            { type: 'tool', tool: 'mindmap', options: { topic: '함께 사는 사회', slots: ['바른 생각', '편견'], cards: ['함께 사는 구성원', '서로의 문화를 배워요', '우리 일자리를 뺏어요', '말씨가 다르면 무시'] }, state: { at: {} }, prompt: '다양한 이웃에 대한 생각을 바른 생각과 편견으로 나누어 보세요.',
              target: { sort: { '바른 생각': ['함께 사는 구성원', '서로의 문화를 배워요'], '편견': ['우리 일자리를 뺏어요', '말씨가 다르면 무시'] } }, difficulty: 0.25 },
            { type: 'choice', prompt: '두 언어를 쓰는 친구에 대한 생각으로 알맞은 것은 무엇인가요?', options: ['한국말만 써야 해요', '두 언어를 쓰는 것은 큰 힘이 될 수 있어요', '집에서 쓰는 말은 숨겨야 해요'], answer: 1, difficulty: 0.1, explain: '두 언어와 두 문화를 아는 것은 그 친구의 소중한 힘이에요.' },
            { type: 'short', prompt: '다양한 이웃과 함께 사는 우리 동네를 위해 내가 할 수 있는 일을 한 문장으로 쓰세요.' },
            MOOD,
          ],
        },
        ws: {
          title: '우리 곁의 다양한 이웃',
          items: [
            { type: 'table', prompt: '이웃이 겪는 어려움에 도움이 되는 일을 쓰세요.', columns: ['어려움', '함께 할 일'], cells: [['안내문이 한국어로만 나와요', ''], ['말씨 때문에 무시당해요', ''], ['고향 가족이 그리워요', ''], ['낯선 음식 문화', '']], answer: '여러 언어 안내문 / 말씨를 놀리지 않기 / 서로의 명절 나누기 / 서로의 음식 문화 배우기' },
            { type: 'choice', prompt: '바른 생각에 ○ 하세요.', options: ['잠깐 있다 갈 손님이에요', '함께 사는 우리 사회의 구성원이에요', '우리 문화만 따라야 해요'], answer: '함께 사는 우리 사회의 구성원이에요' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '다양한 이웃과 우리는 돕고 받는 사이가 아니라 서로 ___ 사이예요.', answer: '배우는' },
            { type: 'short', prompt: '우리 학교에서 열면 좋을 문화 나눔 행사를 하나 쓰세요.' },
          ],
          easy: {
            note: '"낯선 곳에서 살면 무엇이 어려울까?"를 떠올려 보세요.',
            items: [
              { type: 'choice', prompt: '함께 사는 태도에 ○ 하세요.', options: ['서로 배워요', '무시해요'], answer: '서로 배워요' },
              { type: 'table', prompt: '바른 생각이면 ○, 편견이면 ×를 쓰세요.', columns: ['생각', '○ / ×'], cells: [['두 언어는 힘이에요', ''], ['말씨를 놀려요', ''], ['명절을 나눠요', '']], answer: '○, ×, ○' },
              { type: 'draw', prompt: '여러 이웃이 함께 사는 우리 동네를 그려 보세요.' },
              { type: 'short', prompt: '배우고 싶은 다른 나라 인사말을 쓰세요.' },
            ],
          },
        },
        diff: DIFF('카드는 맞는 칸에 놓으면 바로 알려 줘요. 사례 카드를 먼저 함께 읽어요.', '"도와준다며 대신 하기"처럼 친절해 보이는 생각을 가려내고, 카드 순서가 섞여 나와요.'),
        notes: '자주 보이는 어려움: ① 다문화 배경 이웃을 잠깐 머무는 손님으로 여긴다 → 함께 일하고 가족을 이루는 구성원임을 짚는다. ② 한국어만 써야 한다고 여긴다 → 두 언어·두 문화가 힘이 된다는 점을 말한다. ③ 도움을 주는 쪽과 받는 쪽으로만 본다 → 서로 배우는 관계로 바라보게 한다. 이주·노동 관련 숫자(인구 수 등)는 이 차시에서 쓰지 않았다. 반의 다문화 배경 학생을 대표로 지목하거나 가정 이야기를 묻지 않는다.',
      }),

      // ───────────────────────────── 2차시
      LESSON(2, {
        title: '다문화 차별 장면에서 조력자의 선택하기',
        objective: '다문화 배경을 이유로 한 차별 상황을 알아보고, 차별을 멈추게 하고 친구를 돕는 조력자의 행동을 고를 수 있다.',
        draw: 'a paper school cafeteria where one child stands beside a classmate and gently raises a hand to stop teasing, other children turning to listen',
        banner: '곁에 서는 조력자', extra: [{ motif: 'flower', x: 300, y: 222, color: 'rose' }],
        intro: {
          teacher: '"차별을 당하는 친구 곁에 아무도 없을 때와 한 명이라도 서 있을 때, 그 친구의 마음은 어떻게 다를까요?" 두세 명의 대답을 듣고(기다릴 반응: "한 명만 있어도 힘이 나요") 시연 단추로 조력자의 행동과 방관자의 행동이 나뉘는 모습을 보여 준다. "나서면 나도 따돌림당해요"가 나오면 "혼자 맞서지 않고도 할 수 있는 일은 무엇일까요?"라고 되묻는다. 오늘은 다문화 배경을 이유로 한 차별 앞에서 조력자의 선택을 연습한다고 밝힌다.',
          student: '친구 곁에 서 주는 작은 행동을 짝과 한 가지씩 말해 봅시다.',
          demo: { tool: 'mindmap', options: { topic: '차별을 보았을 때', slots: ['조력자', '방관자'], cards: ['"그만해"라고 말해요', '못 본 척해요'], shuffle: false }, sequence: [{ sort: { '조력자': ['"그만해"라고 말해요'], '방관자': ['못 본 척해요'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 차별 장면의 갈림길에서 조력자 되기', minutes: 14, tool: 'emotion',
            teacher: '"이렇게 하면 차별받는 친구와 반 분위기는 어떻게 될까요?" 결과 칸을 읽고 까닭을 말하게 한다. 1번은 종교나 문화 때문에 특정 음식을 먹지 않는 친구를 놀리는 상황으로, 식습관은 존중할 문화라는 점을 짚는다. 2번에서 보호자의 출신 나라를 들먹이는 말은 친구 가족 전체를 깎아내리는 차별임을 분명히 말한다. 3번은 차별받은 친구를 나중에 찾아가 마음을 살피는 것도 조력자의 일이라는 점을 강조한다.',
            task: '다문화 배경을 이유로 한 차별 상황에서 어떻게 할지 고르고, 그 결과를 살펴봐요.',
            levels: LVB,
            items: [
              EB('급식 시간, 특정 음식을 먹지 않는 친구를 몇몇이 놀려요. 준이는 어떻게 할까요?', '급식 시간, 문화 때문에 고기 반찬 한 가지를 먹지 않는 친구에게 몇몇이 "편식쟁이"라며 놀려요.', [
                { id: 'stop', text: '"먹는 문화가 다를 뿐이야" 하고 말려요', result: '놀림이 멈추고 친구가 편하게 식사해요.', mood: '안심' },
                { id: 'laugh', text: '같이 웃으며 따라 놀려요', result: '친구가 급식 시간을 피하게 돼요.', mood: '슬픔', why: '식습관도 존중해야 할 문화예요.' },
                { id: 'quiet', text: '내 일 아니라며 밥만 먹어요', result: '놀림이 다음 날에도 이어져요.', mood: '걱정', why: '말리기 어렵다면 선생님께 알릴 수 있어요.' }], 'stop', 0.15),
              EB('다툼 중에 한 친구가 상대의 보호자 출신 나라를 들먹이며 놀려요. 하는 어떻게 할까요?', '모둠에서 의견 다툼이 생기자 한 친구가 상대에게 "너희 엄마 나라 사람들은 다 그래"라고 말했어요.', [
                { id: 'side', text: '다툼이니 끼지 않아요', result: '상처 주는 말이 그대로 남아 친구가 울먹여요.', mood: '슬픔', why: '출신을 들먹이는 말은 다툼이 아니라 차별이에요.' },
                { id: 'speak', text: '"그 말은 차별이야" 하고 선생님께 알려요', result: '선생님과 함께 사과하고 다툼을 다시 이야기해요.', mood: '안심' },
                { id: 'agree', text: '맞는 말이라며 거들어요', result: '차별이 반 분위기로 굳어져요.', mood: '불편함', why: '한 사람의 행동을 출신 전체로 묶는 것은 편견이에요.' }], 'speak', 0.25),
              EB('차별하는 말을 들은 친구가 수업 뒤 혼자 앉아 있어요. 서는 어떻게 할까요?', '오전에 말씨 때문에 놀림을 받은 친구가 쉬는 시간에 혼자 창밖만 보고 있어요.', [
                { id: 'leave', text: '혼자 있고 싶을 거라며 둬요', result: '친구는 아무도 자기편이 없다고 느껴요.', mood: '외로움', why: '곁에 다가가 마음을 묻는 것도 조력자의 일이에요.' },
                { id: 'visit', text: '곁에 가서 "네 잘못 아니야" 해요', result: '친구가 고개를 들고 고맙다고 말해요.', mood: '고마움' },
                { id: 'advice', text: '"말씨를 고치면 돼" 하고 조언해요', result: '친구는 자기가 잘못한 것처럼 느껴요.', mood: '속상함', why: '바뀌어야 할 것은 친구가 아니라 차별하는 말이에요.' }], 'visit', 0.2,
                { conclude: '조력자는 차별을 멈추게 하고, 어른에게 알리고, 차별받은 친구 곁에 서요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 조력자가 되는 차례와 말 익히기', minutes: 13, tool: 'story',
            teacher: '"혼자 맞서기 어려울 때도 조력자가 될 수 있을까요?" 1번에서 안전하게 돕는 차례(멈추는 말 → 친구 곁에 서기 → 어른에게 알리기)를 놓게 한다. 2번은 말풍선에 조력자의 말을 채워 실제로 소리 내어 말해 보게 한다. 3번은 우리 반이 차별 없는 반이 되어 가는 이야기로, 한 사람의 행동이 분위기를 바꾼다는 점을 정리한다.',
            task: '조력자가 되는 차례를 놓고, 조력자의 말을 말풍선에 채워요.',
            levels: LV,
            items: [
              SO('차별을 보았을 때 조력자가 되는 차례를 놓아 보세요.', '조력자의 차례', ['먼저', '다음', '마지막'], [{ id: 'a', text: '"그만해" 하고 말려요', motif: 'sun' }, { id: 'b', text: '친구 곁에 서요', motif: 'flower' }, { id: 'c', text: '선생님께 알려요', motif: 'house' }], ['a', 'b', 'c'], 0.15),
              SF('조력자의 말을 말풍선에 채워 보세요.', [{ id: 'b1', who: '도', motif: 'sun', label: '그 말은 ___' }, { id: 'b2', who: '도', motif: 'flower', label: '괜찮아? ___' }], ['차별이야', '네 잘못 아니야', '웃기다', '네가 참아'], { b1: '차별이야', b2: '네 잘못 아니야' }, 0.2),
              SO('우리 반이 차별 없는 반이 되어 간 이야기를 차례대로 놓아 보세요.', '달라진 우리 반', ['처음', '다음', '그다음', '끝'], [{ id: 'd', text: '말씨 흉내가 유행해요', motif: 'cloud' }, { id: 'e', text: '한 친구가 "그만"이라 해요', motif: 'sun' }, { id: 'f', text: '다른 친구들도 함께 말려요', motif: 'leaf' }, { id: 'g', text: '서로의 말을 배우는 반이 돼요', motif: 'star' }], ['d', 'e', 'f', 'g'], 0.25,
                { conclude: '한 사람의 "그만"이 더 많은 조력자를 만들고 반 분위기를 바꿔요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 배운 조력자의 말 가운데 꼭 기억할 한마디는 무엇인가요?" 다 함께 "그 말은 차별이야", "네 잘못 아니야"를 말해 본다. 출구 1번에서 "말씨를 고치라고 조언하기"를 고른 학생에게 바뀌어야 할 것은 차별하는 말이라는 점을 짚는다. 2번을 확인하며 혼자 맞서기 어려우면 어른에게 알리는 것도 용기라고 덧붙인다.',
          exit: [
            { type: 'tool', tool: 'emotion', options: { mode: 'branch', situation: '체육 시간 팀을 나누는데, 한 친구가 "쟤는 외국 애라 우리 팀 싫어"라고 말해요.', choices: [
              { id: 'include', text: '"우리 팀 하자" 하고 함께해요', result: '친구가 팀에 들어와 함께 경기를 즐겨요.', mood: '즐거움' },
              { id: 'agree', text: '말없이 그 의견에 따라요', result: '친구가 팀에 끼지 못하고 혼자 남아요.', mood: '외로움', why: '말없이 따르는 것도 차별에 힘을 실어요.' },
              { id: 'fix', text: '"한국말 잘하면 받아 줄게" 해요', result: '친구가 조건을 달린 것 같아 상처받아요.', mood: '속상함', why: '조건을 다는 것도 차별이에요.' }] }, state: { choice: null }, prompt: '팀을 나눌 때 차별하는 말을 들었다면 어떻게 할지 골라 보세요.', target: { choice: 'include' }, difficulty: 0.15 },
            { type: 'choice', prompt: '조력자의 행동으로 알맞지 않은 것은 무엇인가요?', options: ['차별하는 말을 멈추게 해요', '차별받은 친구에게 고치라고 해요', '어른에게 알려요'], answer: 1, difficulty: 0.15, explain: '바뀌어야 할 것은 차별받은 친구가 아니라 차별하는 말과 행동이에요.' },
            { type: 'short', prompt: '차별받은 친구에게 건넬 조력자의 말을 한 문장으로 쓰세요.' },
            MOOD,
          ],
        },
        ws: {
          title: '차별 앞에서 조력자 되기',
          items: [
            { type: 'table', prompt: '조력자의 행동이면 ○, 방관하거나 거드는 행동이면 ×를 쓰세요.', columns: ['행동', '○ / ×'], cells: [['"그 말은 차별이야"', ''], ['같이 웃으며 따라 하기', ''], ['친구 곁에 서기', ''], ['말없이 따르기', '']], answer: '○, ×, ○, ×' },
            { type: 'choice', prompt: '보호자의 출신 나라를 들먹이는 말을 들었을 때 알맞은 행동에 ○ 하세요.', options: ['다툼이니 끼지 않아요', '차별이라고 말하고 선생님께 알려요', '맞는 말이라며 거들어요'], answer: '차별이라고 말하고 선생님께 알려요' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '차별받은 친구에게 "네 ___ 아니야"라고 말해 줘요.', answer: '잘못' },
            { type: 'short', prompt: '우리 반을 차별 없는 반으로 만들기 위한 약속을 하나 쓰세요.' },
          ],
          easy: {
            note: '"친구 곁에 서면 친구는 어떤 마음일까?"를 떠올려 보세요.',
            items: [
              { type: 'choice', prompt: '조력자의 말에 ○ 하세요.', options: ['그만해', '웃기다'], answer: '그만해' },
              { type: 'table', prompt: '좋은 행동이면 ○, 아니면 ×를 쓰세요.', columns: ['행동', '○ / ×'], cells: [['곁에 서기', ''], ['따라 놀리기', ''], ['선생님께 알리기', '']], answer: '○, ×, ○' },
              { type: 'draw', prompt: '친구 곁에 서 주는 모습을 그려 보세요.' },
              { type: 'short', prompt: '친구에게 해 줄 응원의 말을 쓰세요.' },
            ],
          },
        },
        diff: DIFF('갈림길 결과가 처음부터 보이고, 차례 카드와 말풍선은 맞는 자리에 놓으면 바로 알려 줘요.', '"말씨를 고치면 돼"처럼 조언처럼 보이는 차별을 가려내고, 카드 순서가 섞여 나와요.'),
        notes: '자주 보이는 어려움: ① 출신을 들먹이는 말을 단순한 다툼으로 여긴다 → 개인을 출신 전체로 묶는 차별임을 짚는다. ② 차별받은 친구가 바뀌어야 한다고 여긴다(말씨 고치기 등) → 바뀌어야 할 것은 차별하는 말임을 분명히 한다. ③ 혼자 맞서야만 조력자라고 여긴다 → 곁에 서기·어른에게 알리기도 조력자의 행동임을 알린다. 특정 종교·나라를 평가하지 않고, 반의 다문화 배경 학생을 사례로 들지 않는다.',
      }),
    ],
  });
})();
