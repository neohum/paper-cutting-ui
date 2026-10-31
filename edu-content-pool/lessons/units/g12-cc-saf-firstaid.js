/* 고3 창체 안전교육 — 응급처치 (차시 2개). 근거: 「학교 안전교육 실시 기준 등에 관한 고시」 별표 2 고등학교 응급처치 1~4항 종합. 절차는 대한심폐소생협회 일반인 과정 범위.
 * 장면·인물은 이 단원을 위해 직접 지은 것이다(가명). */
(function () {
  const G = 12; const CODE = 'saf-firstaid';
  const UNIT = `g${G}-창체-${CODE}`;
  const TITLE = '응급처치';
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
    flow: '고3 응급처치 단원은 학교를 떠나 성인으로서 현장의 첫 대응자가 될 학생들에게 응급처치를 하나의 원칙 체계로 묶어 줍니다. 1차시에는 현장 안전 확인·감염 예방·동의 구하기·약을 함부로 주지 않기 같은 응급처치의 일반 원칙을 도로·작업장·화상 현장 사례에 적용하고, 2차 사고를 막는 판단을 연습합니다. 2차시에는 심폐소생술·자동심장충격기·하임리히법·지혈·회복 자세를 상황에 맞게 고르는 종합 훈련을 하고, 주변 사람에게 역할을 지시하는 현장 지휘 말하기를 해 봅니다. 중1부터 6년 동안 배운 응급처치를 정리하는 단원입니다. 법령상 연계 대상 단원은 없지만 진로·보건 수업과 학교 결정으로 이어 운영할 수 있습니다.',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '내 안전 먼저, 동의 구하기, 원칙으로 현장 판단하기',
        objective: '응급처치의 일반 원칙(현장 안전, 감염 예방, 동의, 약 주지 않기)을 실제 사례에 적용해 2차 사고를 막는 판단을 할 수 있다.',
        draw: 'a student wearing paper gloves checking both sides of a paper road with a warning triangle before approaching a fallen cyclist',
        banner: '내 안전이 먼저예요', extra: [{ motif: 'cloud', x: 300, y: 96, color: 'sky' }],
        intro: {
          teacher: '"차도 한가운데 자전거를 타던 사람이 쓰러져 있어요. 곧장 뛰어들어야 할까요?" 대답을 듣고(기다릴 반응: "빨리 도와야죠", "차를 먼저 봐요") 구조자가 다치면 환자가 둘이 된다는 점을 짚는다. "돕는 사람은 위험을 감수해야 한다"는 의견이 나오면 응급처치의 첫 원칙은 구조자 자신의 안전 확인이라고 정리한다.',
          student: '응급처치를 하기 전에 "잠깐!" 하고 확인해야 할 것을 짝과 두 가지씩 말해 봅시다.',
          demo: { tool: 'story', options: { cards: [C('safe', '현장 안전 확인', 'sun'), C('ask', '"도와드릴까요?" 묻기', 'cloud')], slots: ['먼저', '다음'], shuffle: false }, sequence: [{ order: ['safe', 'ask'] }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 응급처치의 원칙 가려내기', minutes: 13, tool: 'mindmap',
            teacher: '"두통을 호소하는 사람에게 내가 가진 진통제를 주는 것은 도움일까요?" 일반인은 약을 함부로 주지 않는다는 원칙을 짚는다. 의식이 있는 사람에게는 처치 전에 "도와드려도 될까요?"라고 묻고, 의식이 없으면 도움을 원한다고 보고 처치한다는 점을 2번에서 확인하게 한다.',
            task: '응급처치 원칙에 맞는 행동과 어긋나는 행동을 나누고, 원칙과 그 까닭을 이어요.',
            levels: LV,
            items: [
              MS('행동 카드를 원칙에 맞는 것과 어긋나는 것으로 나누어 보세요.', '응급처치 원칙', ['맞아요', '어긋나요'], ['다가가기 전 둘레를 살펴요', '피를 만질 땐 장갑을 껴요', '내 진통제를 나눠 줘요', '의식 없는 사람에 물 먹여요'], { '맞아요': ['다가가기 전 둘레를 살펴요', '피를 만질 땐 장갑을 껴요'], '어긋나요': ['내 진통제를 나눠 줘요', '의식 없는 사람에 물 먹여요'] }, 0.25),
              MM('원칙과 그 까닭을 이어 보세요. 맞지 않는 카드는 남겨요.', '원칙의 까닭', [{ id: 'r1', label: '현장 안전 확인' }, { id: 'r2', label: '감염 예방' }, { id: 'r3', label: '의식 있으면 동의 구하기' }], ['구조자가 다치지 않게', '피·체액으로 옮지 않게', '그 사람의 뜻을 존중해', '시간을 아끼려고 생략'], { r1: '구조자가 다치지 않게', r2: '피·체액으로 옮지 않게', r3: '그 사람의 뜻을 존중해' }, 0.3),
              MP('2차 사고를 막는 행동만 골라 담으세요.', '2차 사고 막기', ['비상등·삼각대로 알려요', '전기 사고는 전원부터 차단', '가스 냄새 나면 불 켜지 않기', '차도 한가운데로 뛰어들기'], ['비상등·삼각대로 알려요', '전기 사고는 전원부터 차단', '가스 냄새 나면 불 켜지 않기'], 0.3,
                { conclude: '위험이 남은 현장은 먼저 위험을 없애거나 피한 뒤에 다가가요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 사례에 원칙 적용하기', minutes: 14, tool: 'emotion',
            teacher: '"감전된 사람을 맨손으로 떼어 내면 어떻게 될까요?" 전원을 먼저 끊거나 전기가 통하지 않는 마른 물건을 쓴다는 점을 짚는다. 화상 문항에서 옷이 피부에 들러붙었을 때 억지로 떼는 보기를 고르는 학생에게는 붙은 옷은 떼지 않고 그대로 식힌다고 고쳐 준다. 사례 뒤 모둠별로 각 사례에서 어떤 원칙을 썼는지 말하게 한다.',
            task: '도로·작업장·화상 사례에서 원칙에 맞는 행동을 고르고 결과를 살펴봐요.',
            levels: LVB,
            items: [
              EB('작업장에서 동료가 전선을 잡은 채 쓰러졌어요. 어떻게 할까요?', '아르바이트하는 가게 창고에서 동료가 벗겨진 전선을 잡은 채 쓰러져 있어요.', [
                { id: 'power', text: '차단기를 내리고 119에 알려요', result: '안전하게 다가가 도울 수 있어요.', mood: '안심' },
                { id: 'pull', text: '바로 팔을 잡아 떼어 내요', result: '나도 감전될 수 있어요.', mood: '불안', why: '전원을 끊기 전에는 맨손으로 만지지 않아요.' },
                { id: 'water', text: '물을 뿌려 정신 차리게 해요', result: '물을 따라 전기가 퍼질 수 있어요.', mood: '걱정', why: '전기 사고 현장에 물을 쓰면 더 위험해요.' }], 'power', 0.3),
              EB('끓는 기름에 데어 옷이 팔에 붙었어요. 어떻게 할까요?', '친구가 요리하다 기름이 튀어 팔을 데었어요. 소매가 피부에 붙어 있어요.', [
                { id: 'cool', text: '옷은 두고 흐르는 시원한 물로 식혀요', result: '화상이 깊어지는 것을 줄여요.', mood: '안심' },
                { id: 'peel', text: '붙은 소매를 떼어 내요', result: '피부가 함께 벗겨질 수 있어요.', mood: '걱정', why: '피부에 붙은 옷은 떼지 않고 그대로 식혀요.' },
                { id: 'paste', text: '치약이나 된장을 발라요', result: '열이 빠지지 않고 감염될 수 있어요.', mood: '불안', why: '민간요법은 화상 처치가 아니에요.' }], 'cool', 0.3),
              EB('길에 쓰러져 있던 어른이 깨어나 "괜찮다, 손대지 말라"고 해요. 어떻게 할까요?', '길에 쓰러졌던 어른이 정신을 차렸는데 도움을 거절하며 손대지 말라고 해요. 이마에 피가 조금 나요.', [
                { id: 'respect', text: '뜻을 존중하고 곁에서 119 권유', result: '상태를 지켜보며 필요할 때 도울 수 있어요.', mood: '안심' },
                { id: 'force', text: '거절해도 억지로 붕대를 감아요', result: '그 사람이 불쾌해하며 다툼이 생겨요.', mood: '화남', why: '의식이 있는 사람은 동의를 구하고 뜻을 존중해요.' },
                { id: 'go', text: '괜찮다니 그냥 자리를 떠나요', result: '상태가 나빠져도 아무도 몰라요.', mood: '걱정', why: '거절해도 곁에서 상태를 살피고 필요하면 119에 알려요.' }], 'respect', 0.35,
                { conclude: '의식이 있는 사람의 뜻은 존중하되, 곁을 지키며 위험하면 119에 알려요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 사례들에서 공통으로 맨 처음 한 일은 무엇이었나요?" (기다릴 반응: "위험부터 확인했어요") 출구 1번에서 의식 있는 사람에게 묻지 않고 처치하는 카드를 고른 학생과 동의의 뜻을 다시 이야기한다.',
          exit: [
            XM('공사장 사고 현장 행동을 두 칸으로 나누어 보세요.', '공사장 사고', ['맞아요', '어긋나요'], ['떨어질 물건이 없나 봐요', '"도와드릴까요?" 물어요', '안전모 없이 뛰어들어요', '피 나는 곳 맨손으로 눌러요'], { '맞아요': ['떨어질 물건이 없나 봐요', '"도와드릴까요?" 물어요'], '어긋나요': ['안전모 없이 뛰어들어요', '피 나는 곳 맨손으로 눌러요'] }, 0.3),
            CH('응급처치를 하기 전 가장 먼저 확인할 것은?', ['환자의 이름', '현장이 안전한지', '환자의 소지품'], 1, '구조자가 다치면 환자가 둘이 돼요. 현장 안전이 먼저예요.'),
            SH('오늘 배운 원칙 가운데 하나를 골라, 그 원칙을 지키지 않으면 생길 수 있는 일을 쓰세요.'),
          ],
        },
        ws: {
          title: '응급처치의 원칙',
          items: [
            { type: 'table', prompt: '원칙과 그 까닭을 쓰세요.', columns: ['원칙', '까닭'], cells: [['현장 안전 확인', ''], ['감염 예방', ''], ['동의 구하기', ''], ['약 주지 않기', '']], answer: '구조자 보호 / 피·체액 감염 막기 / 뜻 존중 / 부작용·알레르기 위험' },
            { type: 'choice', prompt: '감전 사고 현장에서 가장 먼저 할 일에 ○ 하세요.', options: ['손으로 떼어 내요', '전원을 끊어요', '물을 뿌려요'], answer: '전원을 끊어요' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '피부에 붙은 옷은 ___ 않고, 흐르는 시원한 ___로 식혀요.', answer: '떼지, 물' },
            { type: 'short', prompt: '도로에서 사고를 보았을 때 2차 사고를 막기 위해 할 일을 순서대로 쓰세요.' },
          ],
        },
        diff: DIFF('감전·화상·도움 거절처럼 원칙이 부딪히는 사례를 판단해요.'),
        notes: '자주 보이는 어려움: ① 위험한 현장에 바로 뛰어든다 → 안전 확인이 먼저. ② 약을 나눠 준다 → 일반인은 약을 주지 않는다. ③ 거절을 무시하거나 그냥 떠난다 → 뜻을 존중하며 곁을 지킨다. 화상·감전 사진처럼 자극적인 자료는 쓰지 않는다.',
      }),

      LESSON(2, {
        title: '상황 보고 처치 고르고 주변에 역할 지시하기',
        objective: '여러 응급상황에서 알맞은 처치(심폐소생술·자동심장충격기·하임리히법·지혈·회복 자세)를 고르고, 주변 사람에게 구체적으로 역할을 지시할 수 있다.',
        draw: 'a student in the center of a paper plaza pointing to different people while one runs with a defibrillator and another holds a phone, under bright paper bunting',
        banner: '당신은 119, 당신은 AED', extra: [{ motif: 'star', x: 70, y: 110, color: 'buttercup', s: 0.6 }],
        intro: {
          teacher: '"6년 동안 배운 응급처치 가운데 지금 바로 설명할 수 있는 것은 무엇인가요?" 몇 개 듣고 칠판에 모은 뒤, 오늘은 상황을 보고 그중 무엇을 꺼내 쓸지 고르고 주변 사람을 움직이는 말하기를 연습한다고 밝힌다. "모두 외우기 어렵다"는 말이 나오면 119 상담원이 안내를 도와주므로 순서의 큰 틀만 기억해도 된다고 안심시킨다.',
          student: '지금까지 배운 응급처치 가운데 가장 자신 있는 것과 가장 헷갈리는 것을 짝에게 하나씩 말해 봅시다.',
          demo: { tool: 'mindmap', options: { mode: 'match', topic: '상황과 처치', slots: [{ id: 'z1', label: '숨 없이 쓰러짐' }], cards: ['가슴압박', '복부 밀어내기'], shuffle: false }, sequence: [{ match: { z1: '가슴압박' } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 상황에 맞는 처치 고르기', minutes: 13, tool: 'mindmap',
            teacher: '"숨은 쉬지만 의식이 없는 사람은 가슴압박을 할까요?" 정상 호흡이 있으면 압박하지 않고 옆으로 눕혀 숨길을 지키며(회복 자세) 119를 기다린다고 짚는다. 1번에서 기침이 되는 사람에게 밀어내기를 잇는 학생에게는 중3 때 배운 판단 기준을 떠올리게 한다.',
            task: '응급상황과 알맞은 처치를 잇고, 우선할 일을 골라요.',
            levels: LV,
            items: [
              MM('상황과 알맞은 처치를 이어 보세요. 맞지 않는 카드는 남겨요.', '상황별 처치', [{ id: 'k1', label: '반응·정상 호흡 없음' }, { id: 'k2', label: '기침·말을 못 하고 목을 쥠' }, { id: 'k3', label: '팔에서 피가 계속 남' }, { id: 'k4', label: '의식 없지만 숨은 정상' }], ['가슴압박과 AED', '복부 밀어내기', '직접 눌러 지혈', '옆으로 눕혀 지켜보기', '등을 쓰다듬기'], { k1: '가슴압박과 AED', k2: '복부 밀어내기', k3: '직접 눌러 지혈', k4: '옆으로 눕혀 지켜보기' }, 0.35),
              MS('두 사람이 다쳤을 때 먼저 볼 사람을 나누어 보세요.', '누구부터', ['먼저 살펴요', '다음에 살펴요'], ['숨을 쉬지 않는 사람', '피가 솟는 사람', '울며 무릎이 까진 사람', '팔목이 조금 붓는 사람'], { '먼저 살펴요': ['숨을 쉬지 않는 사람', '피가 솟는 사람'], '다음에 살펴요': ['울며 무릎이 까진 사람', '팔목이 조금 붓는 사람'] }, 0.35,
                { conclude: '조용히 쓰러져 있는 사람이 가장 위급할 수 있어요. 숨과 큰 출혈부터 봐요.' }),
              MP('6년 동안 배운 공통 원칙만 골라 담으세요.', '공통 원칙', ['내 안전 먼저', '119에 빨리 알리기', '의식 없으면 먹이지 않기', '자신 없으면 모른 척하기'], ['내 안전 먼저', '119에 빨리 알리기', '의식 없으면 먹이지 않기'], 0.2),
            ],
          },
          {
            id: 'a2', title: '활동 2. 현장 지휘 말하기 훈련', minutes: 14, tool: 'story',
            teacher: '"지시는 누구에게, 무엇을, 어떻게를 담아야 해요." 1번 뒤 모둠별로 한 사람이 지휘자, 나머지가 신고·기기·안내·교대 역할을 맡아 축제 현장 시나리오를 시연한다. 지휘자가 압박까지 혼자 하려는 경우가 많다 — 지시를 마친 뒤 압박을 시작하거나 압박하며 지시해도 된다고 말해 준다. 시연 뒤 지시가 막연했던 순간을 서로 짚게 한다.',
            task: '축제 현장에서 지휘자가 할 말을 차례대로 놓고, 모둠별로 지휘 시연을 해요.',
            levels: LV,
            items: [
              SO('축제 현장에서 지휘자가 할 일을 차례대로 놓아 보세요.', '축제 현장 지휘', ['1', '2', '3', '4', '5'], [C('g1', '둘레 위험부터 살펴요', 'sun'), C('g2', '반응·호흡을 확인해요', 'cloud'), C('g3', '"빨간 옷 분 119!"', 'house'), C('g4', '"모자 쓴 분 AED!"', 'star'), C('g5', '압박하며 교대자 정해요', 'leaf')], ['g1', 'g2', 'g3', 'g4', 'g5'], 0.35),
              MP('효과적인 지시만 골라 담으세요.', '좋은 지시', ['"안경 쓴 분, 119 신고요"', '"두 분은 둘레를 비워 주세요"', '"누가 좀 도와주세요"', '"다들 알아서 해 주세요"'], ['"안경 쓴 분, 119 신고요"', '"두 분은 둘레를 비워 주세요"'], 0.25),
              TALK('모둠에서 지휘자 한 명을 정해 축제 현장 시나리오를 시연하고, 역할을 바꿔 한 번 더 한 뒤 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"졸업 뒤에 내가 응급상황의 첫 사람이 된다면 무엇을 가장 먼저 떠올릴까요?" 학생마다 한 문장씩 말하게 하고, 지역 소방서·적십자 등의 심폐소생술 교육으로 기술을 계속 새로 익힐 수 있다고 알린다. 출구 1번에서 숨은 쉬는데 가슴압박을 고른 학생과 회복 자세의 뜻을 다시 확인하게 한다.',
          exit: [
            XM('상황을 처치에 따라 나누어 보세요.', '어떤 처치일까', ['가슴압박', '회복 자세'], ['쓰러져 숨이 없어요', '반응 없이 헐떡여요', '의식 없고 숨은 고르게', '술 취해 잠들어 토할 듯'], { '가슴압박': ['쓰러져 숨이 없어요', '반응 없이 헐떡여요'], '회복 자세': ['의식 없고 숨은 고르게', '술 취해 잠들어 토할 듯'] }, 0.35),
            CH('여러 사람이 있는 현장에서 지시할 때 담아야 할 것은?', ['누구에게, 무엇을', '내 이름과 나이', '환자와의 관계'], 0, '사람을 지목하고 할 일을 분명히 말해야 바로 움직여요.'),
            SH('6년 동안 배운 응급처치 가운데 졸업 뒤에도 꼭 다시 익히고 싶은 것과 그 까닭을 쓰세요.'),
            MOOD,
          ],
        },
        ws: {
          title: '응급처치 종합',
          items: [
            { type: 'table', prompt: '상황에 알맞은 처치를 쓰세요.', columns: ['상황', '처치'], cells: [['반응·정상 호흡 없음', ''], ['기침 못 하고 목을 쥠', ''], ['피가 계속 남', ''], ['의식 없지만 숨은 정상', '']], answer: '가슴압박·AED / 복부 밀어내기 / 직접 압박 지혈 / 회복 자세' },
            { type: 'choice', prompt: '좋은 지시에 ○ 하세요.', options: ['"누가 좀 도와주세요"', '"파란 옷 분, AED 가져와 주세요"', '"다들 알아서 해요"'], answer: '"파란 옷 분, AED 가져와 주세요"' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '두 사람이 다쳤다면 소리 없이 쓰러진 사람의 ___과 큰 ___부터 살펴요.', answer: '호흡(숨), 출혈' },
            { type: 'short', prompt: '축제 현장에서 사람이 쓰러졌다고 가정하고, 지휘자로서 할 말을 세 문장으로 쓰세요.' },
          ],
        },
        diff: DIFF('여러 처치와 우선순위를 함께 판단해요.'),
        notes: '자주 보이는 어려움: ① 숨을 쉬는 의식 없는 사람에게도 압박한다 → 회복 자세로 지킨다. ② 시끄럽게 우는 사람부터 돕는다 → 숨·큰 출혈부터 본다. ③ 막연하게 지시한다 → 사람을 지목해 할 일을 말한다. 지역 심폐소생술 교육 기관 안내는 학교가 확인한 곳으로 한다.',
      }),
    ],
  });
})();
