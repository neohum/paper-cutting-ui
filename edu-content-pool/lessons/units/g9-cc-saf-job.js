/* 중3 창체 안전교육 — 직업안전 (차시 3개). 근거: 「학교 안전교육 실시 기준 등에 관한 고시」 별표 2 중학교 직업안전, 근로기준법 제17·54·64·66·69·70조.
 * 장면·인물은 이 단원을 위해 직접 지은 것이다(가명). */
(function () {
  const G = 9; const CODE = 'saf-job';
  const UNIT = `g${G}-창체-${CODE}`;
  const TITLE = '직업안전';
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
  const MS = (prompt, topic, slots, cards, sort, d, more) => ({ prompt, toolOptions: { mode: 'sort', topic, slots, cards }, target: { sort }, difficulty: d, ...more });
  const MM = (prompt, topic, slots, cards, match, d, more) => ({ prompt, toolOptions: { mode: 'match', topic, slots, cards }, target: { match }, difficulty: d, ...more });
  const MP = (prompt, topic, cards, pick, d, more) => ({ prompt, toolOptions: { mode: 'pick', topic, basket: topic, cards }, target: { pick }, difficulty: d, ...more });
  const EB = (prompt, situation, choices, choice, d, more) => ({ prompt, toolOptions: { mode: 'branch', situation, choices }, target: { choice }, difficulty: d, ...more });
  const SO = (prompt, title, slots, cards, order, d, more) => ({ prompt, toolOptions: { mode: 'order', title, slots, cards }, target: { order }, difficulty: d, ...more });
  const LV = { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } };
  const LVB = { easy: { showBack: true }, base: {}, challenge: {} };
  const C = (id, text, motif) => ({ id, text, motif });
  const XM = (prompt, topic, slots, cards, sort, d) => ({ type: 'tool', tool: 'mindmap', options: { topic, slots, cards }, state: { at: {} }, prompt, target: { sort }, difficulty: d });
  const XO = (prompt, title, slots, cards, order, d) => ({ type: 'tool', tool: 'story', options: { title, slots, cards }, state: { at: {} }, prompt, target: { order }, difficulty: d });
  const XB = (prompt, situation, choices, choice, d) => ({ type: 'tool', tool: 'emotion', options: { mode: 'branch', situation, choices }, state: { choice: null }, prompt, target: { choice }, difficulty: d });
  const CH = (prompt, options, answer, explain, d = 0.2) => ({ type: 'choice', prompt, options, answer, difficulty: d, explain });
  const SH = (prompt) => ({ type: 'short', prompt });
  const MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };
  const TALK = (prompt) => ({ prompt, free: true, talk: true, difficulty: 0 });
  const DIFF = (hard) => ({
    easy: '맞는 칸에 놓은 카드에 초록 테두리가 생기고, 갈림길 문항은 결과 칸이 처음부터 보여요.',
    base: '모든 카드를 놓은 뒤 확인을 눌러 스스로 고쳐요.',
    challenge: `카드 순서가 섞여 나오고, ${hard}`,
  });
  // 도입 6 + 전개 27 + 정리 7 = 40분
  // 갈림길(branch)은 emotion 교구에만 있다 — 다른 교구 활동에 놓인 갈림길 문항은 '알맞은 행동 하나 고르기'(pick)로 바꾼다
  const FIX = (a) => (a.tool === 'emotion' ? a : Object.assign({}, a, { items: a.items.map((it) => {
    const o = it.toolOptions || {};
    if (o.mode !== 'branch') return it;
    const { toolOptions, target, ...rest } = it;
    return { ...rest, toolOptions: { mode: 'pick', topic: '알맞은 행동', basket: '고른 행동', cards: o.choices.map((c) => ({ id: c.id, text: c.text, why: c.why })) }, target: { pick: [target.choice] } };
  }) }));
  const LESSON = (n, o) => Object.assign(base(n), {
    title: o.title, objective: o.objective,
    illustration: { prompt: PROMPT(o.draw), scene: SCENE(o.banner, o.extra) },
    stages: [
      { id: 'intro', title: '도입', minutes: 6, teacher: o.intro.teacher, student: o.intro.student, demo: o.intro.demo },
      { id: 'main', title: '전개', minutes: 27, activities: o.acts.map(FIX) },
      { id: 'wrapup', title: '정리', minutes: 7, teacher: o.wrap.teacher, exitTicket: o.wrap.exit },
    ],
    worksheet: o.ws, differentiation: o.diff, teacherNotes: o.notes,
  });

  PaperLessons.registerUnit({
    id: `g${G}-cc-${CODE}`, schema: 'edu-unit.v1', catalogUnit: UNIT,
    grade: G, subject: '창체', unitTitle: TITLE,
    flow: '중3 직업안전 단원은 곧 아르바이트나 현장 체험을 시작할 수 있는 학생들이 "일터의 안전"을 자기 일로 받아들이게 합니다. 1차시에는 사고가 날 뻔한 일(아차사고)을 숨기지 않고 알리는 문화가 큰 사고를 막는다는 것을 사례로 판단합니다. 2차시에는 근로기준법이 정한 청소년 근로 보호 내용(근로계약서, 연소자 증명서류, 근로시간·야간근로 제한)을 확인합니다. 3차시에는 일터에서 위험하거나 부당한 일을 겪을 때 도움을 청하는 순서와 기관을 정리합니다. 법령상 연계 대상 단원은 없지만 진로활동 단원과 학교 결정으로 이어 운영할 수 있습니다.',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '날 뻔한 사고를 알릴지 숨길지 판단하기',
        objective: '아차사고의 뜻을 말하고, 사고가 날 뻔한 일을 알리는 것이 큰 사고를 막는 까닭을 사례로 설명할 수 있다.',
        draw: 'a paper notice board in a workshop where workers pin small paper notes about near misses, with one big paper warning cone in front',
        banner: '날 뻔한 일도 알려요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }],
        intro: {
          teacher: '"하마터면 넘어질 뻔했는데 다치지 않았다면, 그 일은 \'아무 일도 없었던 것\'일까요?" 의견을 듣고 다치지 않았지만 사고가 날 뻔한 일을 \'아차사고\'라고 부른다고 소개한다. 큰 사고 하나 뒤에는 작은 사고와 수많은 아차사고가 있다는 말이 일터에서 널리 쓰인다고 알린다(숫자 비율은 다루지 않는다). "다친 사람이 없으니 말할 필요 없다"는 생각이 나오면 오늘 사례로 함께 따져 본다.',
          student: '학교에서 "하마터면" 하고 놀랐던 장면(복도·계단·체육 시간)을 짝과 하나씩 말해 봅시다.',
          demo: { tool: 'emotion', options: { mode: 'branch', situation: '계단에서 미끄러질 뻔했어요.', choices: [{ id: 'tell', text: '선생님께 알려요', result: '미끄럼 방지 띠를 붙여요.', mood: '안심' }, { id: 'no', text: '그냥 넘어가요', result: '다른 친구가 넘어져요.', mood: '걱정' }] }, sequence: [{ choice: 'tell' }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 아차사고 앞에서 행동 고르기', minutes: 14, tool: 'emotion',
            teacher: '"말하지 않으면 그 위험은 어떻게 될까요?" 결과를 읽으며 위험이 그대로 남아 다음 사람에게 간다는 점을 짚는다. 2번에서 "혼날까 봐 숨긴다"를 고르는 학생에게는 아차사고 보고를 칭찬하는 일터가 안전한 일터라는 점을 이야기한다. 3번은 선배의 말과 안전이 부딪히는 상황이다.',
            task: '아차사고가 일어난 상황에서 어떻게 할지 고르고 그 결과를 살펴봐요.',
            levels: LVB,
            items: [
              EB('카페 아르바이트 중 젖은 바닥에서 미끄러질 뻔했어요. 어떻게 할까요?', '카페 계산대 뒤 바닥에 얼음물이 고여 있어 미끄러질 뻔했어요. 다치지는 않았어요.', [
                { id: 'tell', text: '바로 알리고 닦은 뒤 매트를 깔아요', result: '같은 자리에서 아무도 미끄러지지 않아요.', mood: '안심' },
                { id: 'self', text: '나만 조심하면 되니 말 안 해요', result: '다음 근무자가 넘어져 다쳐요.', mood: '속상함', why: '위험을 알리지 않으면 다음 사람에게 넘어가요.' }], 'tell', 0.2),
              EB('배달 상자를 옮기다 선반이 기우뚱했는데 실수로 건드린 것 같아요. 어떻게 할까요?', '창고에서 상자를 넣다 선반이 기우뚱 흔들렸어요. 내가 세게 밀어서 그런 것 같아 혼날까 걱정돼요.', [
                { id: 'hide', text: '혼날까 봐 숨겨요', result: '헐거운 선반이 나중에 무너져요.', mood: '무서움', why: '내 실수처럼 보여도 알려야 선반 결함을 찾아 고쳐요.' },
                { id: 'report', text: '있었던 대로 알려요', result: '선반 고정 나사가 풀린 것을 찾아 고쳐요.', mood: '뿌듯함' },
                { id: 'fix', text: '혼자 선반을 고쳐 보려 해요', result: '무거운 선반에 다칠 수 있어요.', mood: '걱정', why: '혼자 고치기보다 알리고 함께 점검해요.' }], 'report', 0.3),
              EB('선배가 "그 정도는 늘 있는 일이야, 보고하지 마"라고 해요. 어떻게 할까요?', '작업 중 공구가 높은 곳에서 떨어졌는데 아무도 다치지 않았어요. 선배는 보고하지 말라고 해요.', [
                { id: 'report', text: '관리자에게 정중히 알려요', result: '공구 걸이를 바꿔 다음 사고를 막아요.', mood: '안심' },
                { id: 'obey', text: '선배 말대로 넘어가요', result: '다음엔 사람이 맞을 수 있어요.', mood: '걱정', why: '늘 있는 일일수록 큰 사고의 신호예요.' }], 'report', 0.3,
                { conclude: '아차사고를 알리는 것은 누군가를 탓하는 일이 아니라 다음 사고를 막는 일이에요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 아차사고를 알리는 문화 만들기', minutes: 13, tool: 'mindmap',
            teacher: '"아차사고를 잘 알리는 일터는 무엇이 다를까요?" 1번에서 알린 사람을 탓하는 일터와 고맙다고 하는 일터를 견주게 한다. 2번 보고 내용에서 "누구 탓인지"를 넣는 학생에게는 무엇이, 어디서, 어떻게 일어났는지가 중요하다고 짚는다.',
            task: '아차사고를 알리기 쉬운 일터와 어려운 일터를 나누고, 보고에 담을 내용을 골라요.',
            levels: LV,
            items: [
              MS('일터의 모습을 두 칸으로 나누어 보세요.', '알리기 쉬운 일터', ['알리기 쉬워요', '알리기 어려워요'], ['알리면 고맙다고 해요', '보고한 내용을 고쳐 줘요', '알린 사람을 탓해요', '보고하면 일이 늘어요'], { '알리기 쉬워요': ['알리면 고맙다고 해요', '보고한 내용을 고쳐 줘요'], '알리기 어려워요': ['알린 사람을 탓해요', '보고하면 일이 늘어요'] }, 0.2),
              MP('아차사고 보고에 담을 내용만 골라 담으세요.', '보고 내용', ['언제·어디서', '무슨 일이 날 뻔했나', '어떻게 고치면 좋을까', '누구 탓인가'], ['언제·어디서', '무슨 일이 날 뻔했나', '어떻게 고치면 좋을까'], 0.25),
              TALK('모둠에서 우리 학교의 아차사고 하나를 가상으로 정해 보고문 세 줄(언제·어디서, 무슨 일, 고칠 점)을 말로 만든 뒤 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 배운 \'아차사고\'를 동생에게 설명한다면?" 한두 명이 설명하게 하고, 출구 1번에서 숨기는 보기를 고른 학생과 알려야 하는 까닭을 다시 짚는다.',
          exit: [
            XB('학교 실습실에서 드릴이 손에서 미끄러졌지만 다치지 않았어요. 어떻게 할까요?', '기술 실습 중 드릴이 손에서 미끄러져 책상에 떨어졌어요. 아무도 다치지 않았어요.', [
              { id: 'tell', text: '선생님께 알리고 잡는 법을 다시 배워요', result: '모두 드릴을 바르게 잡게 돼요.', mood: '안심' },
              { id: 'hide', text: '아무도 못 봤으니 넘어가요', result: '다음 시간에 누군가 다쳐요.', mood: '걱정', why: '날 뻔한 사고도 알려야 다음 사고를 막아요.' }], 'tell', 0.2),
            CH('아차사고 보고에 대한 설명으로 옳은 것은?', ['누구 탓인지 밝히려는 것이다', '다음 사고를 막으려는 것이다', '다친 사람이 있을 때만 한다'], 1, '다치지 않았어도 알려야 위험을 고쳐 다음 사고를 막아요.'),
            SH('아차사고를 알리기 쉬운 반 분위기를 만들려면 무엇이 필요할지 한 문장으로 쓰세요.'),
          ],
        },
        ws: {
          title: '아차사고 알리기',
          items: [
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '다치지 않았지만 사고가 날 ___ 일을 ___사고라고 해요.', answer: '뻔한, 아차' },
            { type: 'table', prompt: '알리기 쉬운 일터면 ○, 어려운 일터면 ×를 쓰세요.', columns: ['모습', '○ / ×'], cells: [['알린 사람을 탓해요', ''], ['알리면 고맙다고 해요', ''], ['보고한 내용을 고쳐 줘요', '']], answer: '×, ○, ○' },
            { type: 'choice', prompt: '아차사고 보고에 담지 않아도 되는 것에 ○ 하세요.', options: ['언제·어디서', '무슨 일이 날 뻔했나', '누구 탓인가'], answer: '누구 탓인가' },
            { type: 'short', prompt: '가상의 아차사고 하나를 정해 보고문을 세 줄로 쓰세요.' },
          ],
        },
        diff: DIFF('내 실수처럼 보이는 아차사고 상황을 판단해요.'),
        notes: '자주 보이는 어려움: ① 다치지 않았으면 알릴 필요 없다고 여긴다 → 위험은 그대로 남는다. ② 보고를 누구 탓을 밝히는 일로 여긴다 → 무엇을 고칠지가 핵심. ③ 선배·어른 말이 안전보다 앞선다고 여긴다 → 정중히 관리자에게 알린다. 학생의 실제 사고 경험은 묻지 않는다.',
      }),

      LESSON(2, {
        title: '아르바이트 전, 법이 지켜 주는 것 확인하기',
        objective: '청소년이 일하기 전에 확인할 근로계약서와 연소자 근로 보호 내용(증명서류, 근로시간·야간근로 제한)을 말할 수 있다.',
        draw: 'a teenager reading a paper contract at a cafe table with a paper clock showing night crossed out and a stamped paper document',
        banner: '쓰고, 받고, 확인하고', extra: [{ motif: 'leaf', x: 300, y: 222, color: 'sky' }],
        intro: {
          teacher: '"아르바이트를 구했는데 사장님이 \'계약서는 나중에 쓰자\'고 해요. 괜찮을까요?" 의견을 듣고(기다릴 반응: "믿으면 돼요", "써야 해요") 근로기준법은 일하기 전에 임금·근로시간 같은 근로조건을 글로 밝히고 근로자에게 계약서를 주도록 정한다고 알린다. "청소년은 법의 보호를 못 받는다"는 오해가 나오면 오히려 청소년을 더 보호하는 조항이 따로 있다고 짚는다.',
          student: '아르바이트를 한다면 일하기 전에 꼭 물어볼 것을 짝과 두 가지씩 말해 봅시다.',
          demo: { tool: 'mindmap', options: { topic: '근로계약서', slots: ['꼭 적어요', '적지 않아요'], cards: ['임금', '좋아하는 음식'], shuffle: false }, sequence: [{ sort: { '꼭 적어요': ['임금'], '적지 않아요': ['좋아하는 음식'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 일하기 전 확인할 서류와 내용', minutes: 13, tool: 'mindmap',
            teacher: '"18세 미만이 일할 때 사업장에 갖추어 두어야 하는 서류는 무엇일까요?" 근로기준법 제66조에 따라 가족관계증명서와 친권자(보호자) 동의서를 갖춘다고 짚는다. 15세 미만은 원칙적으로 일할 수 없고 고용노동부장관의 취직인허증이 있어야 한다는 점도 덧붙인다(제64조). "계약서는 사장님만 가지면 된다"는 학생에게는 근로자도 한 부를 받아야 한다고 고쳐 준다(제17조).',
            task: '일하기 전에 확인할 서류와 근로계약서에 적힐 내용을 골라요.',
            levels: LV,
            items: [
              MP('근로계약서에 꼭 적혀야 할 근로조건만 골라 담으세요.', '근로계약서', ['임금', '근로시간', '휴일', '사장님 취미'], ['임금', '근로시간', '휴일'], 0.2),
              MP('18세 미만이 일할 때 사업장에 갖출 서류만 골라 담으세요.', '청소년 서류', ['가족관계증명서', '친권자 동의서', '성적표', '봉사활동 확인서'], ['가족관계증명서', '친권자 동의서'], 0.3,
                { conclude: '18세 미만은 가족관계증명서와 친권자 동의서를 사업장에 갖춰 둬요(근로기준법 제66조).' }),
              MS('말이 맞는지 나누어 보세요.', '맞을까 틀릴까', ['맞아요', '틀려요'], ['계약서는 나도 한 부 받아요', '15세 미만은 취직인허증 필요', '청소년은 계약서 안 써도 돼요', '계약서는 일 끝나고 써요'], { '맞아요': ['계약서는 나도 한 부 받아요', '15세 미만은 취직인허증 필요'], '틀려요': ['청소년은 계약서 안 써도 돼요', '계약서는 일 끝나고 써요'] }, 0.3),
            ],
          },
          {
            id: 'a2', title: '활동 2. 청소년 근로시간과 야간근로', minutes: 14, tool: 'emotion',
            teacher: '"18세 미만은 하루에 몇 시간까지 일할 수 있을까요?" 근로기준법 제69조는 하루 7시간·한 주 35시간을 넘지 못하게 하고(당사자 합의로 하루 1시간·한 주 5시간까지 늘릴 수 있음), 제70조는 오후 10시부터 오전 6시까지의 야간근로와 휴일근로를 원칙적으로 금지한다고 읽어 준다(본인 동의와 고용노동부장관 인가가 있을 때만 예외). 휴게시간은 4시간에 30분 이상이라는 점(제54조)도 3번에서 함께 짚는다.',
            task: '청소년 근로시간·야간근로·휴게 규정에 비추어 상황마다 어떻게 할지 골라요.',
            levels: LVB,
            items: [
              EB('사장님이 밤 11시까지 마감 근무를 해 달래요. 나는 17살이에요. 어떻게 할까요?', '편의점 사장님이 17살인 나에게 밤 11시까지 마감을 맡아 달라고 해요.', [
                { id: 'say', text: '청소년 야간근로 제한을 말해요', result: '근무 시간을 오후 10시 전으로 조정해요.', mood: '안심' },
                { id: 'ok', text: '돈을 더 주니 그냥 해요', result: '법이 막는 시간에 혼자 일하게 돼요.', mood: '걱정', why: '18세 미만 야간근로는 원칙적으로 금지돼요.' }], 'say', 0.25),
              EB('하루 9시간씩 일해 달래요. 나는 16살이에요. 어떻게 할까요?', '식당에서 16살인 나에게 주말마다 하루 9시간씩 일해 달라고 해요.', [
                { id: 'ok', text: '돈이 필요하니 그대로 해요', result: '몸이 지치고 법정 한도를 넘어요.', mood: '걱정', why: '18세 미만은 하루 7시간이 원칙이고 늘려도 1시간까지예요.' },
                { id: 'limit', text: '법정 한도를 말하고 시간을 줄여요', result: '하루 근로시간을 한도 안으로 맞춰요.', mood: '안심' }], 'limit', 0.3),
              EB('4시간 넘게 일했는데 쉬는 시간이 없어요. 어떻게 할까요?', '카페에서 4시간 30분째 쉬지 않고 일하고 있어요. 휴게시간 이야기는 없었어요.', [
                { id: 'ask', text: '휴게시간을 달라고 요청해요', result: '30분 쉬고 다시 일해요.', mood: '편안함' },
                { id: 'skip', text: '눈치 보여 참고 일해요', result: '지쳐서 실수하고 다칠 수 있어요.', mood: '걱정', why: '4시간 일하면 30분 이상 쉬게 해야 해요(근로기준법 제54조).' }], 'ask', 0.25,
                { conclude: '청소년 근로시간·야간근로·휴게는 법이 정한 권리예요. 몰라서 놓치지 않게 미리 알아 둬요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 배운 조항 가운데 친구에게 꼭 알려 주고 싶은 것은?" 몇 명이 답하게 하고, 출구 1번에서 계약서를 나중에 써도 된다고 고른 학생과 근로조건을 글로 남기는 까닭을 다시 짚는다. 조항 숫자는 법제처 국가법령정보센터에서 현행 조문으로 확인할 수 있다고 알린다.',
          exit: [
            XM('아르바이트 상황을 두 칸으로 나누어 보세요.', '법에 맞을까', ['법에 맞아요', '법에 어긋나요'], ['일하기 전 계약서 작성', '16살, 저녁 8시 퇴근', '17살, 새벽 1시 마감', '계약서는 사장님만 보관'], { '법에 맞아요': ['일하기 전 계약서 작성', '16살, 저녁 8시 퇴근'], '법에 어긋나요': ['17살, 새벽 1시 마감', '계약서는 사장님만 보관'] }, 0.3),
            CH('18세 미만의 하루 근로시간 원칙은?', ['하루 5시간', '하루 7시간', '하루 10시간'], 1, '근로기준법 제69조: 18세 미만은 하루 7시간, 한 주 35시간을 넘지 못해요(합의로 하루 1시간까지 연장).', 0.3),
            SH('아르바이트를 시작하기 전 내가 확인할 것 세 가지를 쓰세요.'),
          ],
        },
        ws: {
          title: '청소년 근로 보호',
          items: [
            { type: 'table', prompt: '근로기준법이 청소년에게 정한 내용을 쓰세요.', columns: ['내용', '규정'], cells: [['하루·한 주 근로시간', ''], ['야간근로', ''], ['사업장에 갖출 서류', ''], ['4시간 일하면 휴게', '']], answer: '하루 7시간·한 주 35시간 / 오후 10시~오전 6시 원칙 금지 / 가족관계증명서·친권자 동의서 / 30분 이상' },
            { type: 'choice', prompt: '15세 미만이 일하려면 필요한 것에 ○ 하세요.', options: ['학교 성적표', '취직인허증', '아무것도 필요 없음'], answer: '취직인허증' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '근로계약서는 일하기 ___ 쓰고, 근로자도 ___ 부를 받아요.', answer: '전에, 한' },
            { type: 'short', prompt: '사장님이 "계약서는 나중에 쓰자"고 할 때 할 수 있는 말을 정중하게 한 문장으로 쓰세요.' },
          ],
        },
        diff: DIFF('근로시간·야간·휴게 숫자를 상황에 적용해요.'),
        notes: '자주 보이는 어려움: ① 청소년은 계약서가 필요 없다고 여긴다 → 반드시 쓰고 한 부 받는다. ② 동의만 하면 밤에도 일할 수 있다고 여긴다 → 본인 동의와 고용노동부장관 인가가 함께 있어야 하는 예외. ③ 휴게는 사장님 마음이라고 여긴다 → 법이 정한 권리. 조항 번호는 수업 전에 국가법령정보센터 현행 조문으로 확인한다. 최저임금 액수는 해마다 바뀌어 다루지 않는다.',
      }),

      LESSON(3, {
        title: '일터에서 위험하거나 부당할 때 도움 청하는 길',
        objective: '일터에서 위험하거나 부당한 일을 겪을 때 기록하고 알리고 도움을 청하는 순서를 정리하고, 도움 받을 곳을 말할 수 있다.',
        draw: 'a teenager holding a paper phone and a small paper notebook, with paper arrows pointing to a school, a family house and a government building',
        banner: '혼자 참지 말고 알려요', extra: [{ motif: 'house', x: 300, y: 214, color: 'peach', s: 0.6 }],
        intro: {
          teacher: '"아르바이트하다 다쳤는데 사장님이 \'네가 조심 안 해서 그래\'라고만 하면 어떻게 할까요?" 의견을 듣고 혼자 참거나 그만두는 것만이 답이 아니라 도움을 청하는 길이 있다고 알린다. 오늘은 가상 인물의 상황으로 순서와 도움 받을 곳을 정리한다고 밝힌다. 학생 자신이나 가족의 경험은 말하지 않아도 된다고 먼저 안내해 둔다.',
          student: '어려운 일이 생겼을 때 내가 믿고 이야기할 수 있는 어른이 누구인지 떠올려 봅시다(말하지 않아도 돼요).',
          demo: { tool: 'story', options: { cards: [C('rec', '있었던 일을 적어요', 'leaf'), C('tell', '믿는 어른에게 알려요', 'house')], slots: ['먼저', '다음'], shuffle: false }, sequence: [{ order: ['rec', 'tell'] }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 도움 청하는 순서', minutes: 14, tool: 'story',
            teacher: '"왜 기록이 먼저일까요?" 날짜·시간·있었던 일·들은 말을 적어 두면 나중에 상담할 때 근거가 된다고 짚는다. 다쳤다면 치료가 가장 먼저라는 점을 2번에서 확인하게 하고, 고용노동부 상담(국번 없이 1350)에서 근로 문제를 물을 수 있다고 알린다.',
            task: '가상 인물 "준"의 상황에서 도움을 청하는 순서를 놓아요.',
            levels: LV,
            items: [
              SO('임금을 덜 받은 "준"이 할 일을 차례대로 놓아 보세요.', '임금을 덜 받았을 때', ['1', '2', '3', '4'], [C('m1', '일한 날·시간을 적어요', 'leaf'), C('m2', '사장님께 정중히 물어요', 'cloud'), C('m3', '보호자·선생님께 알려요', 'house'), C('m4', '노동 상담에 물어봐요', 'star')], ['m1', 'm2', 'm3', 'm4'], 0.3),
              SO('일하다 손을 다친 "준"이 할 일을 차례대로 놓아 보세요.', '일하다 다쳤을 때', ['1', '2', '3', '4'], [C('i1', '먼저 치료를 받아요', 'flower'), C('i2', '사장님께 알려요', 'cloud'), C('i3', '다친 경위를 적어요', 'leaf'), C('i4', '보호자와 상담해요', 'house')], ['i1', 'i2', 'i3', 'i4'], 0.3,
                { conclude: '다쳤을 때는 치료가 가장 먼저이고, 그다음 알리고 기록해요.' }),
              MP('기록에 남길 내용만 골라 담으세요.', '기록하기', ['날짜와 시간', '있었던 일', '들은 말', '그날 점심 메뉴'], ['날짜와 시간', '있었던 일', '들은 말'], 0.2),
            ],
          },
          {
            id: 'a2', title: '활동 2. 상황과 도움 받을 곳', minutes: 13, tool: 'mindmap',
            teacher: '"학교 선생님은 아르바이트 문제도 도와줄 수 있을까요?" 담임·진로 선생님은 상담과 기관 연결을 도울 수 있다고 짚는다. 위험한 작업을 강요받는 상황은 그 자리에서 멈추고 나오는 것이 먼저라는 점을 2번에서 다시 묻는다.',
            task: '상황과 도움 받을 곳을 잇고, 위험한 지시를 받았을 때 할 일을 골라요.',
            levels: LV,
            items: [
              MM('상황과 먼저 도움 받을 곳을 이어 보세요. 맞지 않는 카드는 남겨요.', '도움 받을 곳', [{ id: 'e1', label: '일하다 크게 다침' }, { id: 'e2', label: '임금을 못 받음' }, { id: 'e3', label: '혼자 고민하기 어려움' }], ['119·병원', '고용노동부 상담 1350', '담임·진로 선생님', '혼자 참기'], { e1: '119·병원', e2: '고용노동부 상담 1350', e3: '담임·진로 선생님' }, 0.3),
              MP('위험한 작업을 지시받았을 때 할 일만 골라 담으세요.', '위험한 지시', ['일을 멈추고 위험을 말해요', '안전한 곳으로 피해요', '보호자·학교에 알려요', '시키니까 그냥 해요'], ['일을 멈추고 위험을 말해요', '안전한 곳으로 피해요', '보호자·학교에 알려요'], 0.25),
              TALK('짝과 "준"이 사장님께 임금을 정중히 묻는 말을 역할극으로 해 보고, 바꿔서 한 번 더 한 뒤 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 배운 순서를 세 낱말로 줄여 볼까요?" (기다릴 반응: "기록, 알리기, 상담") 출구 1번에서 다쳤을 때 기록을 치료보다 앞에 둔 학생과 순서를 다시 짚으며 단원을 마친다.',
          exit: [
            XO('주방에서 데인 "솔"이 할 일을 차례대로 놓으세요.', '주방에서 데었을 때', ['1', '2', '3'], [C('b1', '흐르는 물로 식히고 치료', 'flower'), C('b2', '매니저에게 알려요', 'cloud'), C('b3', '다친 경위를 적어 둬요', 'leaf')], ['b1', 'b2', 'b3'], 0.25),
            CH('일터에서 부당한 일을 겪었을 때 기록을 남기는 까닭은?', ['혼내려고', '상담할 때 근거가 되도록', '잊어버리려고'], 1, '날짜·시간·있었던 일을 적어 두면 상담과 해결의 근거가 돼요.'),
            SH('이번 단원에서 배운 것 가운데 아르바이트를 하는 친구에게 알려 주고 싶은 것을 쓰세요.'),
            MOOD,
          ],
        },
        ws: {
          title: '일터에서 도움 청하기',
          items: [
            { type: 'table', prompt: '상황에 따라 먼저 도움 받을 곳을 쓰세요.', columns: ['상황', '도움 받을 곳'], cells: [['일하다 크게 다침', ''], ['임금을 못 받음', ''], ['혼자 고민하기 어려움', '']], answer: '119·병원 / 고용노동부 상담(1350) / 담임·진로 선생님·보호자' },
            { type: 'choice', prompt: '일하다 다쳤을 때 가장 먼저 할 일에 ○ 하세요.', options: ['경위를 적어요', '치료를 받아요', '참고 계속 일해요'], answer: '치료를 받아요' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '부당한 일을 겪으면 날짜와 있었던 일을 ___하고, 믿는 어른에게 ___요.', answer: '기록, 알려' },
            { type: 'short', prompt: '"준"이 사장님께 임금을 정중히 물어보는 말을 한 문장으로 쓰세요.' },
          ],
        },
        diff: DIFF('다쳤을 때와 임금 문제의 순서 차이를 가려요.'),
        notes: '자주 보이는 어려움: ① 문제가 생기면 그만두는 것만 생각한다 → 기록·알리기·상담의 길이 있다. ② 다쳤을 때 기록부터 한다 → 치료가 먼저. ③ 학교는 아르바이트 문제를 모른다고 여긴다 → 상담과 기관 연결을 돕는다. 학생의 실제 근로 피해 경험을 말하게 하지 않는다. 상담 번호(1350)는 수업 전에 고용노동부 누리집에서 확인한다.',
      }),
    ],
  });
})();
