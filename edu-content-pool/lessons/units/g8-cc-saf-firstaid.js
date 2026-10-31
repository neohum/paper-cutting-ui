/* 중2 창체 안전교육 — 응급처치 (차시 2개). 근거: 「학교 안전교육 실시 기준 등에 관한 고시」 별표 2 중학교 응급처치 2·3항. 절차는 대한심폐소생협회 일반인 과정 범위.
 * 장면·인물은 이 단원을 위해 직접 지은 것이다(가명). */
(function () {
  const G = 8; const CODE = 'saf-firstaid';
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
    flow: '중2 응급처치 단원은 1학년의 119 신고·가슴압박에 이어 "피가 날 때"와 "심장이 멈췄을 때 기계를 쓰는 법"을 다룹니다. 1차시에는 찰과상·베인 상처·코피·박힌 이물질처럼 상처 종류에 따라 처치가 다르다는 것을 가리고, 장갑을 끼고 깨끗한 거즈로 직접 눌러 지혈하는 요령을 익힙니다. 2차시에는 자동심장충격기를 켜고 패드를 붙이고 분석·충격 뒤 바로 가슴압박을 다시 하는 순서를 익히고, 학교와 동네에서 기기가 있는 곳을 찾아봅니다. 3학년에서는 하임리히법과 골절 응급처치로 이어집니다. 법령상 연계 대상 단원은 없지만 보건 수업의 응급처치 내용과 학교 결정으로 이어 운영할 수 있습니다.',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '상처마다 다른 처치 고르고 눌러서 피 멈추기',
        objective: '상처의 종류에 따라 알맞은 응급처치를 고르고, 직접 압박으로 지혈하는 요령을 설명할 수 있다.',
        draw: 'a student wearing paper gloves pressing a folded paper gauze on a friend\'s forearm beside a small paper first aid box',
        banner: '장갑 끼고, 꾹 누르고', extra: [{ motif: 'leaf', x: 300, y: 222, color: 'mint' }],
        intro: {
          teacher: '"친구가 미술 시간에 칼에 손가락을 베어 피가 많이 나요. 휴지로 닦아 내기만 하면 될까요?" 대답을 듣고(기다릴 반응: "누르면 돼요", "밴드 붙여요") 닦는 것과 눌러서 멈추는 것은 다르다고 짚는다. "피를 보면 무서워서 못 하겠다"는 말이 나오면 장갑을 끼고 깨끗한 천으로 누르기만 해도 큰 도움이 되고, 내 몸을 먼저 지키는 것도 응급처치의 원칙이라고 말해 준다.',
          student: '집이나 학교 구급상자에 무엇이 들어 있을지 짝과 세 가지씩 말해 봅시다.',
          demo: { tool: 'mindmap', options: { topic: '피가 날 때', slots: ['해요', '하지 않아요'], cards: ['깨끗한 거즈로 눌러요', '맨손으로 피를 만져요'], shuffle: false }, sequence: [{ sort: { '해요': ['깨끗한 거즈로 눌러요'], '하지 않아요': ['맨손으로 피를 만져요'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 상처 종류와 처치 잇기', minutes: 13, tool: 'mindmap',
            teacher: '"이 상처는 씻는 것이 먼저일까요, 누르는 것이 먼저일까요?" 코피 문항에서 고개를 뒤로 젖히는 카드를 고르는 학생이 많다 — "젖히면 피가 목으로 넘어가요. 고개를 약간 앞으로 숙이고 콧방울을 눌러요"라고 고쳐 준다. 박힌 유리 조각을 빼는 카드를 고르면 "빼는 순간 피가 더 쏟아질 수 있어요"라고 묻고 고정한 채 병원으로 간다는 점을 짚는다.',
            task: '상처의 종류와 알맞은 응급처치를 잇고, 하면 안 되는 처치를 가려요.',
            levels: LV,
            items: [
              MM('상처와 알맞은 처치를 이어 보세요. 맞지 않는 카드는 남겨요.', '상처별 처치', [{ id: 'w1', label: '넘어져 무릎이 까짐' }, { id: 'w2', label: '칼에 손가락을 벰' }, { id: 'w3', label: '코피가 남' }], ['흐르는 물로 씻고 덮어요', '거즈로 꾹 눌러요', '앞으로 숙여 콧방울 눌러요', '고개를 뒤로 젖혀요'], { w1: '흐르는 물로 씻고 덮어요', w2: '거즈로 꾹 눌러요', w3: '앞으로 숙여 콧방울 눌러요' }, 0.25),
              MS('처치 카드를 두 칸으로 나누어 보세요.', '박힌 조각·깊은 상처', ['해요', '하지 않아요'], ['박힌 조각은 그대로 고정', '119나 병원에 알려요', '박힌 조각을 바로 뽑아요', '상처에 입김을 불어요'], { '해요': ['박힌 조각은 그대로 고정', '119나 병원에 알려요'], '하지 않아요': ['박힌 조각을 바로 뽑아요', '상처에 입김을 불어요'] }, 0.3,
                { conclude: '깊이 박힌 조각은 빼지 않고 움직이지 않게 고정한 채 병원으로 가요.' }),
              MP('구급상자에서 상처 처치에 쓸 것만 골라 담으세요.', '상처 처치 준비물', ['일회용 장갑', '깨끗한 거즈', '압박 붕대', '머리빗'], ['일회용 장갑', '깨끗한 거즈', '압박 붕대'], 0.15),
            ],
          },
          {
            id: 'a2', title: '활동 2. 직접 압박 지혈 순서', minutes: 14, tool: 'story',
            teacher: '"거즈가 피로 젖었어요. 떼어 내고 새것으로 바꿀까요?" 많은 학생이 떼어 낸다고 답한다 — "떼면 겨우 엉긴 피가 다시 터져요. 그 위에 덧대고 계속 눌러요"라고 짚는다. 순서를 마친 뒤 짝과 거즈 대신 손수건으로 누르는 자세를 서로 보여 주게 한다.',
            task: '피가 많이 날 때 직접 눌러 지혈하는 순서를 놓고, 거즈가 젖었을 때 할 일을 골라요.',
            levels: LV,
            items: [
              SO('팔에서 피가 많이 날 때 할 일을 차례대로 놓아 보세요.', '직접 압박 지혈', ['1', '2', '3', '4'], [C('p1', '장갑을 껴요', 'leaf'), C('p2', '거즈를 상처에 대요', 'cloud'), C('p3', '손바닥으로 꾹 눌러요', 'sun'), C('p4', '붕대로 감아 고정해요', 'star')], ['p1', 'p2', 'p3', 'p4'], 0.2),
              EB('누르던 거즈가 피로 흠뻑 젖었어요. 어떻게 할까요?', '친구 팔을 거즈로 누르고 있는데 피가 배어 나와 거즈가 젖었어요.', [
                { id: 'add', text: '떼지 않고 새 거즈를 덧대 눌러요', result: '엉긴 피가 유지되어 피가 줄어요.', mood: '안심' },
                { id: 'swap', text: '젖은 거즈를 떼고 새것을 대요', result: '엉기던 피가 떨어져 다시 피가 나요.', mood: '걱정', why: '젖은 거즈를 떼면 엉긴 피가 다시 터져요.' },
                { id: 'stop', text: '누르기를 멈추고 기다려요', result: '피가 계속 흘러요.', mood: '불안', why: '피가 멈출 때까지 계속 눌러야 해요.' }], 'add', 0.3),
              TALK('짝과 손수건을 거즈 삼아 팔을 누르는 자세를 서로 보여 주고, 덧대는 방법까지 해 본 뒤 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 배운 지혈 요령을 세 낱말로 줄이면 무엇일까요?" (기다릴 반응: "장갑, 거즈, 누르기") 출구 1번에서 코피 처치를 헷갈린 학생에게 고개를 숙이는 까닭을 한 번 더 묻는다. 피가 멈추지 않으면 119에 알린다는 점으로 마무리한다.',
          exit: [
            XM('체육 시간 상처 처치를 두 칸으로 나누어 보세요.', '운동장 상처', ['해요', '하지 않아요'], ['까진 곳을 물로 씻어요', '코피 날 때 고개 숙여요', '코피 날 때 누워요', '모래 묻은 상처를 그냥 덮어요'], { '해요': ['까진 곳을 물로 씻어요', '코피 날 때 고개 숙여요'], '하지 않아요': ['코피 날 때 누워요', '모래 묻은 상처를 그냥 덮어요'] }, 0.2),
            CH('다른 사람의 상처를 처치할 때 장갑을 끼는 까닭은 무엇인가요?', ['손이 더러워 보여서', '피를 통한 감염을 막으려고', '상처를 세게 누르려고'], 1, '응급처치하는 사람도 피를 통한 감염으로부터 자신을 지켜야 해요.'),
            SH('누르던 거즈가 젖었을 때 할 일과 그 까닭을 한 문장으로 쓰세요.'),
          ],
        },
        ws: {
          title: '상처 처치와 지혈',
          items: [
            { type: 'table', prompt: '상처에 알맞은 처치를 쓰세요.', columns: ['상처', '처치'], cells: [['무릎이 까짐', ''], ['손가락을 벰', ''], ['코피', '']], answer: '흐르는 물로 씻고 덮기 / 거즈로 직접 누르기 / 고개를 숙이고 콧방울 누르기' },
            { type: 'choice', prompt: '코피가 날 때 바른 자세에 ○ 하세요.', options: ['고개를 뒤로 젖혀요', '고개를 약간 앞으로 숙여요', '누워서 쉬어요'], answer: '고개를 약간 앞으로 숙여요' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '거즈가 피로 젖으면 ___ 않고 그 위에 새 거즈를 ___ 눌러요.', answer: '떼지, 덧대' },
            { type: 'short', prompt: '박힌 유리 조각을 빼면 안 되는 까닭을 쓰세요.' },
          ],
        },
        diff: DIFF('코피·박힌 조각처럼 흔히 잘못 아는 처치를 가려내요.'),
        notes: '자주 보이는 어려움: ① 코피에 고개를 뒤로 젖힌다 → 앞으로 숙이고 콧방울을 누른다. ② 젖은 거즈를 바꾼다 → 덧대고 계속 누른다. ③ 박힌 이물질을 뽑는다 → 고정하고 병원으로 간다. 피를 무서워하는 학생은 순서 말하기 역할만 맡겨도 된다.',
      }),

      LESSON(2, {
        title: '자동심장충격기 켜고 패드 붙여 충격 뒤 압박 잇기',
        objective: '자동심장충격기의 사용 순서를 말하고, 분석·충격 때 안전하게 떨어져야 하는 까닭과 충격 뒤 가슴압박을 바로 이어야 함을 설명할 수 있다.',
        draw: 'a heart-shaped paper defibrillator box opened beside a training mannequin with two paper pads placed on its chest while students step back',
        banner: '켜고, 붙이고, 떨어지고', extra: [{ motif: 'star', x: 300, y: 96, color: 'rose' }],
        intro: {
          teacher: '"지하철역이나 학교 복도에서 하트 그림이 있는 상자를 본 적 있나요?" 대답을 듣고 그것이 자동심장충격기이며 전원을 켜면 기계가 음성으로 할 일을 알려 준다고 소개한다. "전문가만 쓸 수 있다"는 말이 나오면 일반인이 쓰도록 만든 기계이고, 기계가 심장 리듬을 분석해 필요할 때만 충격하도록 되어 있다고 짚는다.',
          student: '우리 학교나 동네에서 자동심장충격기를 본 곳이 있는지 짝과 떠올려 말해 봅시다.',
          demo: { tool: 'story', options: { cards: [C('on', '전원을 켜요', 'sun'), C('pad', '패드를 붙여요', 'leaf')], slots: ['먼저', '다음'], shuffle: false }, sequence: [{ order: ['on', 'pad'] }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 자동심장충격기 사용 순서', minutes: 14, tool: 'story',
            teacher: '"충격 버튼을 누르기 전에 꼭 해야 할 말은 무엇일까요?" (기다릴 반응: "모두 물러나세요") 1번에서 충격 뒤 기계를 떼고 기다리는 학생이 많다 — "충격 뒤에는 바로 가슴압박을 다시 해요. 패드는 붙인 채로 두고 기계가 2분마다 다시 분석해요"라고 짚는다. 패드 위치는 오른쪽 빗장뼈 아래, 왼쪽 젖꼭지 아래 옆구리라는 것을 그림으로 보여 준다.',
            task: '자동심장충격기 사용 순서를 놓고, 패드 위치와 분석·충격 때 할 일을 이어요.',
            levels: LV,
            items: [
              SO('자동심장충격기가 도착했어요. 할 일을 차례대로 놓아 보세요.', '자동심장충격기', ['1', '2', '3', '4', '5'], [C('d1', '전원을 켜요', 'sun'), C('d2', '패드 두 장을 붙여요', 'leaf'), C('d3', '분석 중엔 떨어져요', 'cloud'), C('d4', '물러나게 하고 충격', 'star'), C('d5', '바로 가슴압박 다시', 'house')], ['d1', 'd2', 'd3', 'd4', 'd5'], 0.3),
              MS('패드를 붙일 곳과 붙이지 않을 곳을 나누어 보세요.', '패드 위치', ['붙여요', '붙이지 않아요'], ['오른쪽 빗장뼈 아래', '왼쪽 젖꼭지 아래 옆구리', '배꼽 위', '목 옆'], { '붙여요': ['오른쪽 빗장뼈 아래', '왼쪽 젖꼭지 아래 옆구리'], '붙이지 않아요': ['배꼽 위', '목 옆'] }, 0.3),
              EB('기계가 "심장 리듬을 분석 중입니다"라고 말해요. 어떻게 할까요?', '패드를 붙이자 자동심장충격기가 분석을 시작했어요. 친구는 계속 가슴을 누르고 있어요.', [
                { id: 'off', text: '"모두 떨어지세요" 하고 손을 떼요', result: '기계가 정확히 분석해요.', mood: '안심' },
                { id: 'keep', text: '압박을 멈추지 않고 계속해요', result: '움직임 때문에 분석이 어긋날 수 있어요.', mood: '걱정', why: '분석 중에는 환자에게서 떨어져야 정확히 분석해요.' },
                { id: 'pull', text: '패드를 떼고 다시 붙여요', result: '분석이 처음부터 다시 시작돼요.', mood: '불안', why: '패드는 붙인 그대로 두고 기계 안내를 따라요.' }], 'off', 0.25,
                { conclude: '분석과 충격 때는 모두 떨어지고, 충격 뒤에는 곧바로 가슴압박을 다시 해요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 기기 찾기와 헷갈리는 상황', minutes: 13, tool: 'mindmap',
            teacher: '"가슴이 땀이나 물에 젖어 있으면 어떻게 할까요?" 젖은 가슴은 닦고 붙인다는 것, 기계가 "충격이 필요하지 않습니다"라고 해도 가슴압박은 계속한다는 것을 짚는다. 학교 안 자동심장충격기 위치를 함께 확인하고, 위치 표지가 있는 곳을 교실 지도에 표시하게 한다.',
            task: '자동심장충격기를 쓸 때 해야 할 일과 하지 말아야 할 일을 나누고, 학교에서 기기가 있을 만한 곳을 골라요.',
            levels: LV,
            items: [
              MS('헷갈리는 상황의 행동을 두 칸으로 나누어 보세요.', '이럴 땐 어떻게', ['해요', '하지 않아요'], ['젖은 가슴을 닦고 붙여요', '충격 불필요여도 압박 계속', '충격 때 환자 손을 잡아요', '구급대 오기 전 패드 떼요'], { '해요': ['젖은 가슴을 닦고 붙여요', '충격 불필요여도 압박 계속'], '하지 않아요': ['충격 때 환자 손을 잡아요', '구급대 오기 전 패드 떼요'] }, 0.3),
              MP('자동심장충격기를 쓰기 전에 알아 둘 것으로 옳은 것만 골라 담으세요.', '알아 둘 것', ['음성 안내를 따라 하면 돼요', '필요할 때만 충격해요', '의사만 쓸 수 있어요', '쓰면 가슴압박은 안 해요'], ['음성 안내를 따라 하면 돼요', '필요할 때만 충격해요'], 0.2),
              TALK('모둠별로 우리 학교에서 자동심장충격기가 있는 곳(또는 있을 만한 곳)을 찾아 말하고, 가장 빨리 가져올 길을 정한 뒤 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"자동심장충격기가 오면 가슴압박을 하던 사람은 무엇을 할까요?" 기계를 켜고 패드를 붙이는 동안에도 압박은 가능한 한 멈추지 않는다는 점, 분석과 충격 때만 잠깐 떨어진다는 점을 확인하며 1학년 가슴압박과 오늘 배운 기계 사용이 하나로 이어짐을 정리한다.',
          exit: [
            XO('역에서 쓰러진 사람에게 기기가 도착했어요. 차례대로 놓으세요.', '역 대합실', ['1', '2', '3', '4'], [C('x1', '전원 켜기', 'sun'), C('x2', '패드 붙이기', 'leaf'), C('x3', '떨어져 분석 기다리기', 'cloud'), C('x4', '충격 뒤 압박 다시', 'star')], ['x1', 'x2', 'x3', 'x4'], 0.25),
            CH('기계가 "충격이 필요하지 않습니다"라고 했어요. 어떻게 할까요?', ['기계를 끄고 기다려요', '가슴압박을 계속해요', '패드를 떼어 내요'], 1, '충격이 필요 없다고 해도 반응·정상 호흡이 없으면 가슴압박을 계속해요.'),
            SH('분석이나 충격 때 모두 환자에게서 떨어져야 하는 까닭을 쓰세요.'),
          ],
        },
        ws: {
          title: '자동심장충격기 사용',
          items: [
            { type: 'table', prompt: '자동심장충격기 사용 순서를 번호로 쓰세요.', columns: ['할 일', '차례'], cells: [['패드 붙이기', ''], ['가슴압박 다시', ''], ['전원 켜기', ''], ['충격 버튼', ''], ['분석 중 떨어지기', '']], answer: '2, 5, 1, 4, 3' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '패드는 오른쪽 ___ 아래와 왼쪽 젖꼭지 아래 ___에 붙여요.', answer: '빗장뼈, 옆구리' },
            { type: 'choice', prompt: '충격 뒤에 할 일에 ○ 하세요.', options: ['패드를 떼요', '바로 가슴압박을 다시 해요', '환자를 흔들어 깨워요'], answer: '바로 가슴압박을 다시 해요' },
            { type: 'short', prompt: '우리 학교에서 자동심장충격기가 있는 곳과, 그곳까지 가는 가장 빠른 길을 쓰세요.' },
          ],
        },
        diff: DIFF('젖은 가슴·충격 불필요처럼 헷갈리는 상황을 판단해요.'),
        notes: '자주 보이는 어려움: ① 충격 뒤 압박을 다시 하지 않는다 → 곧바로 압박을 다시 하고 기계가 2분마다 다시 분석한다. ② 분석 중에도 환자를 만진다 → 모두 떨어지라고 외친다. ③ 일반인은 쓰면 안 된다고 여긴다 → 음성 안내를 따르면 된다. 실습용 기기가 있으면 실제 충격이 나가지 않는 교육용 기기만 쓴다.',
      }),
    ],
  });
})();
