/* 고1 창체 안전교육 — 응급처치 (차시 2개). 근거: 「학교 안전교육 실시 기준 등에 관한 고시」 별표 2 고등학교 응급처치 1·2항, 응급의료에 관한 법률 제5조의2. 절차는 대한심폐소생협회 일반인 과정 범위.
 * 장면·인물은 이 단원을 위해 직접 지은 것이다(가명). */
(function () {
  const G = 10; const CODE = 'saf-firstaid';
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
    flow: '고1 응급처치 단원은 중학교에서 익힌 가슴압박·자동심장충격기 순서를 "언제 시작하고, 언제 바꾸고, 언제 멈추는가"의 판단과 여러 사람이 함께하는 현장 대응으로 끌어올립니다. 1차시에는 사례를 읽고 심폐소생술을 시작·교대·중단하는 기준을 가르고, 응급의료법의 선의의 응급처치 면책 조항(이른바 선한 사마리아인 조항)을 조문으로 읽으며 "도왔다가 책임질까 봐"라는 망설임을 따져 봅니다. 2차시에는 체육 시간에 친구가 쓰러진 시나리오에서 신고·압박·자동심장충격기·구급대 안내 역할을 나누어 이어 하는 흐름을 익힙니다. 고2에서는 상황별 기도폐쇄와 갑작스러운 질환, 고3에서는 응급처치 원칙과 현장 지휘로 이어집니다. 고1 보건(health) 단원에 응급처치 차시가 있으면 학교 결정으로 연계해 운영할 수 있습니다.',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '사례로 가르는 압박 시작·교대·중단과 면책 조항 읽기',
        objective: '사례를 읽고 심폐소생술을 시작·교대·중단할 때를 판단하며, 응급의료법의 선의의 응급처치 면책 조항이 무엇을 보호하는지 설명할 수 있다.',
        draw: 'two students taking turns pressing on a paper mannequin chest while a paper clock shows two minutes and an open paper law book lies nearby',
        banner: '2분마다 교대, 멈추지 않게', extra: [{ motif: 'star', x: 300, y: 96, color: 'lavender' }],
        intro: {
          teacher: '"쓰러진 사람을 보고도 \'괜히 손댔다가 잘못되면 내 책임이 될까 봐\' 머뭇거린다는 말, 들어 본 적 있나요?" 의견을 몇 개 듣고(기다릴 반응: "소송당할까 봐요", "자신이 없어서요") 오늘은 판단 기준과 법 조항을 근거로 이 망설임을 따져 본다고 밝힌다. "어설프게 하느니 안 하는 게 낫다"는 주장이 나오면 심장이 멈춘 사람에게는 아무것도 하지 않는 것이 가장 위험하다는 점을 먼저 짚는다.',
          student: '쓰러진 사람을 보고 사람들이 머뭇거리는 까닭을 짝과 두 가지씩 말해 봅시다.',
          demo: { tool: 'mindmap', options: { topic: '가슴압박', slots: ['시작', '멈춤'], cards: ['반응 없고 숨이 이상해요', '구급대가 이어받았어요'], shuffle: false }, sequence: [{ sort: { '시작': ['반응 없고 숨이 이상해요'], '멈춤': ['구급대가 이어받았어요'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 시작·교대·중단 판단하기', minutes: 14, tool: 'mindmap',
            teacher: '"압박하는 사람이 지치면 어떻게 될까요?" 시간이 지나면 압박이 얕아지므로 2분쯤마다 교대하고, 교대할 때 멈추는 시간을 짧게 한다는 점을 짚는다. "구급대가 도착하면 바로 손을 뗀다"는 카드를 고르는 학생에게는 구급대원이 이어받을 준비가 될 때까지 계속한다고 고쳐 준다. 3번에서 갈비뼈가 부러진 느낌이 날 때 멈추는 보기를 고르는 학생이 있다 — 강하게 누르면 생길 수 있고 멈추는 것이 더 위험하다고 말해 준다.',
            task: '사례 카드를 가슴압박을 시작할 때·교대할 때·멈출 때로 나누고, 압박 중 생긴 일에 맞게 판단해요.',
            levels: LV,
            items: [
              MS('사례 카드를 세 칸으로 나누어 보세요.', '가슴압박 판단', ['시작해요', '교대해요', '멈춰요'], ['반응 없이 헐떡여요', '압박한 지 2분쯤 지났어요', '환자가 눈을 뜨고 움직여요', '구급대가 이어받았어요', '압박이 점점 얕아져요', '불러도 답이 없고 숨이 없어요'], { '시작해요': ['반응 없이 헐떡여요', '불러도 답이 없고 숨이 없어요'], '교대해요': ['압박한 지 2분쯤 지났어요', '압박이 점점 얕아져요'], '멈춰요': ['환자가 눈을 뜨고 움직여요', '구급대가 이어받았어요'] }, 0.35),
              EB('압박 중 "뚝" 하는 느낌이 났어요. 어떻게 할까요?', '쓰러진 어른의 가슴을 누르던 중 손 아래에서 뚝 하는 느낌이 났어요. 구급대는 아직 오지 않았어요.', [
                { id: 'go', text: '자세를 확인하고 압박을 이어 가요', result: '피가 계속 돌아 생명을 이어요.', mood: '안심' },
                { id: 'stop', text: '다칠까 봐 압박을 멈춰요', result: '피가 돌지 않아 더 위험해져요.', mood: '걱정', why: '세게 누르면 생길 수 있는 일이에요. 멈추는 것이 더 위험해요.' },
                { id: 'soft', text: '살살 눌러 아프지 않게 해요', result: '압박이 얕아 피가 잘 돌지 않아요.', mood: '불안', why: '약 5cm 깊이를 유지해야 효과가 있어요.' }], 'go', 0.35),
              MP('교대할 때 지킬 것만 골라 담으세요.', '교대 요령', ['교대할 사람을 미리 정해요', '"하나 둘 셋" 맞춰 바꿔요', '멈추는 시간을 짧게 해요', '쉬는 동안 환자를 흔들어요'], ['교대할 사람을 미리 정해요', '"하나 둘 셋" 맞춰 바꿔요', '멈추는 시간을 짧게 해요'], 0.25,
                { conclude: '교대는 미리 정하고 신호에 맞춰 빠르게 — 압박이 멈춘 시간이 짧을수록 좋아요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 선의의 응급처치 면책 조항 읽기', minutes: 13, tool: 'mindmap',
            teacher: '"이 조항은 모든 경우에 책임을 없애 줄까요?" 응급의료에 관한 법률 제5조의2는 생명이 위급한 사람에게 선의로 응급처치를 하다 생긴 손해에 대해 고의나 중대한 과실이 없으면 책임을 지지 않거나 줄여 준다는 취지라고 읽어 준다. "무조건 면책"으로 읽는 학생이 많다 — 고의·중대한 과실은 빠진다는 점과, 이 조항이 망설이는 일반인을 위해 만들어졌다는 점을 함께 짚는다. 2번은 사실(조문 내용)과 의견(평가)을 가르는 문항이다.',
            task: '선의의 응급처치 면책 조항이 보호하는 것과 보호하지 않는 것을 나누고, 이 조항에 관한 말을 사실과 의견으로 가려요.',
            levels: LV,
            items: [
              MS('면책 조항이 보호하는 경우와 아닌 경우를 나누어 보세요.', '선의 면책 조항', ['보호해요', '보호하지 않아요'], ['선의로 가슴압박을 했어요', '배운 대로 했지만 다쳤어요', '일부러 해를 끼쳤어요', '장난으로 함부로 했어요'], { '보호해요': ['선의로 가슴압박을 했어요', '배운 대로 했지만 다쳤어요'], '보호하지 않아요': ['일부러 해를 끼쳤어요', '장난으로 함부로 했어요'] }, 0.3),
              MS('조항에 관한 말을 사실과 의견으로 나누어 보세요.', '사실과 의견', ['사실', '의견'], ['응급의료법에 있는 조항이다', '고의·중대 과실은 빠진다', '더 널리 알려야 한다', '모든 학생이 꼭 배워야 한다'], { '사실': ['응급의료법에 있는 조항이다', '고의·중대 과실은 빠진다'], '의견': ['더 널리 알려야 한다', '모든 학생이 꼭 배워야 한다'] }, 0.25),
              TALK('모둠에서 "선의의 응급처치를 늘리려면 법 말고 무엇이 더 필요할까?"를 토의해 두 가지를 정하고 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 판단 기준 가운데 가장 헷갈렸던 것은 무엇인가요?" 출구 1번에서 구급대 도착 순간 바로 멈춘다고 답한 학생과 이어받기의 뜻을 다시 짚는다. 면책 조항은 망설임을 줄이려는 제도이지만, 가장 큰 힘은 배운 대로 할 수 있다는 자신감이라고 마무리한다.',
          exit: [
            XM('수영장 사례를 두 칸으로 나누어 보세요.', '수영장에서', ['계속해요', '멈춰도 돼요'], ['구급대가 장비를 펴고 있어요', '1분 지나 팔이 아파요', '구급대원이 이어받았어요', '환자가 기침하며 숨 쉬어요'], { '계속해요': ['구급대가 장비를 펴고 있어요', '1분 지나 팔이 아파요'], '멈춰도 돼요': ['구급대원이 이어받았어요', '환자가 기침하며 숨 쉬어요'] }, 0.3),
            CH('응급의료법의 선의의 응급처치 면책 조항에 대한 설명으로 옳은 것은?', ['어떤 경우에도 책임이 없다', '고의나 중대한 과실이 없으면 책임을 면하거나 줄인다', '의료인에게만 적용된다'], 1, '선의로 한 응급처치에서 고의·중대한 과실이 없으면 책임을 면하거나 줄여 줘요.', 0.3),
            SH('가슴압박을 2분쯤마다 교대하는 까닭을 한 문장으로 쓰세요.'),
          ],
        },
        ws: {
          title: '심폐소생술 판단과 법',
          items: [
            { type: 'table', prompt: '상황을 읽고 시작·교대·멈춤 중 하나를 쓰세요.', columns: ['상황', '판단'], cells: [['반응 없이 헐떡여요', ''], ['압박한 지 2분쯤 지났어요', ''], ['환자가 눈을 뜨고 움직여요', '']], answer: '시작, 교대, 멈춤' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '선의로 응급처치를 하다 생긴 손해라도 ___나 중대한 ___이 있으면 보호받지 못해요.', answer: '고의, 과실' },
            { type: 'choice', prompt: '압박 중 갈비뼈가 부러진 느낌이 들 때 알맞은 것에 ○ 하세요.', options: ['바로 멈춰요', '자세를 확인하고 계속해요', '살살 눌러요'], answer: '자세를 확인하고 계속해요' },
            { type: 'short', prompt: '"어설프게 할 바엔 안 하는 게 낫다"는 주장에 대해 오늘 배운 근거를 들어 반론을 쓰세요.' },
          ],
        },
        diff: DIFF('사실과 의견, 보호 범위처럼 조문을 꼼꼼히 읽어야 하는 카드를 가려요.'),
        notes: '자주 보이는 어려움: ① 면책 조항을 무조건 면책으로 읽는다 → 고의·중대 과실은 빠진다. ② 갈비뼈 손상이 걱정돼 멈춘다 → 멈추는 것이 더 위험하다. ③ 구급대가 보이면 바로 손을 뗀다 → 이어받을 때까지 계속한다. 조항은 법제처 국가법령정보센터의 현행 조문으로 한 번 더 확인해 읽어 준다.',
      }),

      LESSON(2, {
        title: '체육 시간에 쓰러진 친구, 역할 나눠 끝까지 잇기',
        objective: '쓰러진 사람이 생긴 현장에서 신고·가슴압박·자동심장충격기·구급대 안내 역할을 나누어 끊김 없이 이어 하는 흐름을 설명할 수 있다.',
        draw: 'students on a paper gymnasium floor, one pressing on a mannequin chest, one holding a phone, one running in with a heart-shaped defibrillator, one waving at the door',
        banner: '나는 신고, 너는 AED', extra: [{ motif: 'sun', x: 70, y: 110, color: 'buttercup', s: 0.6 }],
        intro: {
          teacher: '"체육관에 학생 스무 명이 있는데 한 명이 쓰러졌어요. 스무 명이 모두 한 사람 곁에 몰리면 어떻게 될까요?" 대답을 듣고(기다릴 반응: "다 같이 보고만 있어요", "누가 할지 몰라요") 사람이 많을수록 누군가 하겠지 하고 미루기 쉽다는 점을 짚는다. 오늘은 역할을 나누어 신고부터 구급대 인계까지 끊기지 않게 잇는 연습을 한다고 밝힌다.',
          student: '여럿이 함께 일할 때 역할을 미리 나누면 좋은 점을 짝과 말해 봅시다.',
          demo: { tool: 'story', options: { cards: [C('r1', '반응·호흡 확인', 'sun'), C('r2', '역할 지목하기', 'house')], slots: ['먼저', '다음'], shuffle: false }, sequence: [{ order: ['r1', 'r2'] }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 역할과 할 일 잇기', minutes: 13, tool: 'mindmap',
            teacher: '"구급차를 체육관 앞까지 안내하는 사람이 왜 필요할까요?" 학교는 건물이 여러 동이라 구급대가 길을 찾느라 시간을 잃을 수 있다는 점을 짚는다. 2번에서 휴대전화로 촬영하는 카드를 고른 학생에게는 환자의 사생활을 지키고 공간을 비워 주는 것도 돕는 일이라고 말해 준다.',
            task: '현장 역할과 그 역할이 할 일을 잇고, 주변 사람이 도울 일을 골라요.',
            levels: LV,
            items: [
              MM('역할과 할 일을 이어 보세요. 맞지 않는 카드는 남겨요.', '현장 역할', [{ id: 'j1', label: '압박하는 사람' }, { id: 'j2', label: '신고하는 사람' }, { id: 'j3', label: 'AED 가져올 사람' }, { id: 'j4', label: '안내하는 사람' }], ['쉬지 않고 가슴을 눌러요', '스피커로 119 안내를 전해요', '가장 가까운 기기를 가져와요', '정문에서 구급차를 맞아요', '모든 장면을 촬영해요'], { j1: '쉬지 않고 가슴을 눌러요', j2: '스피커로 119 안내를 전해요', j3: '가장 가까운 기기를 가져와요', j4: '정문에서 구급차를 맞아요' }, 0.3),
              MP('주변에 있는 학생이 할 일로 알맞은 것만 골라 담으세요.', '주변 사람의 도움', ['둘레를 비워 공간 만들기', '선생님을 불러오기', '교대할 준비 하기', '휴대전화로 촬영하기'], ['둘레를 비워 공간 만들기', '선생님을 불러오기', '교대할 준비 하기'], 0.25),
              EB('여러 명이 몰려 있는데 아무도 신고하지 않고 있어요. 어떻게 할까요?', '체육관에서 친구가 쓰러졌고 학생들이 둘러서서 웅성거리기만 해요.', [
                { id: 'name', text: '한 명씩 지목해 신고·AED를 맡겨요', result: '바로 신고와 기기 가져오기가 시작돼요.', mood: '안심' },
                { id: 'shout', text: '"누가 신고 좀 해!" 하고 외쳐요', result: '서로 쳐다보며 머뭇거려요.', mood: '걱정', why: '막연한 부탁은 "누군가 하겠지"로 이어지기 쉬워요.' },
                { id: 'wait', text: '선생님이 오실 때까지 기다려요', result: '귀한 몇 분이 흘러가요.', mood: '불안', why: '기다리는 동안에도 신고와 압박을 시작할 수 있어요.' }], 'name', 0.25),
            ],
          },
          {
            id: 'a2', title: '활동 2. 시나리오 끝까지 잇기', minutes: 14, tool: 'story',
            teacher: '"자동심장충격기가 도착하면 압박하던 사람은 손을 떼야 할까요?" 기기를 켜고 패드를 붙이는 동안 압박은 계속하고, 분석과 충격 때만 떨어진다는 점을 짚는다. 2번 뒤에는 모둠별로 역할 카드를 나누어 마네킹(없으면 방석)으로 시나리오를 처음부터 끝까지 한 번 해 보게 한다.',
            task: '체육 시간 시나리오의 흐름을 차례대로 놓고, 모둠별로 역할을 나누어 시연해요.',
            levels: LV,
            items: [
              SO('체육관 시나리오를 차례대로 놓아 보세요.', '체육관 시나리오', ['1', '2', '3', '4', '5', '6'], [C('t1', '반응과 호흡 확인', 'sun'), C('t2', '신고·AED 지목', 'house'), C('t3', '가슴압박 시작', 'star'), C('t4', 'AED 켜고 패드 부착', 'leaf'), C('t5', '분석·충격 뒤 압박', 'cloud'), C('t6', '구급대에 인계', 'flower')], ['t1', 't2', 't3', 't4', 't5', 't6'], 0.35),
              MM('구급대에 넘길 때 알릴 내용을 이어 보세요. 맞지 않는 카드는 남겨요.', '구급대 인계', [{ id: 'i1', label: '언제 쓰러졌나요?' }, { id: 'i2', label: '무엇을 했나요?' }, { id: 'i3', label: '충격은 몇 번?' }], ['달리기 중 약 5분 전', '바로 가슴압박 시작', 'AED 충격 1번', '이름과 반 번호'], { i1: '달리기 중 약 5분 전', i2: '바로 가슴압박 시작', i3: 'AED 충격 1번' }, 0.3),
              TALK('모둠별로 역할 카드를 나누어 쓰러짐 발견부터 구급대 인계까지 시연하고, 끊긴 곳이 없었는지 이야기한 뒤 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"우리 모둠 시연에서 압박이 멈춘 순간은 언제였나요?" 모둠마다 끊긴 순간 하나와 고칠 점 하나를 말하게 한다. 출구 1번 순서에서 자동심장충격기를 신고보다 앞에 둔 학생에게는 신고와 기기 요청을 동시에 지목한다는 점을 다시 확인하게 한다.',
          exit: [
            XO('운동장 축구 중 쓰러진 상황을 차례대로 놓으세요.', '운동장에서', ['1', '2', '3', '4'], [C('u1', '반응·호흡 확인', 'sun'), C('u2', '두 사람 지목해 요청', 'house'), C('u3', '압박 시작·AED 사용', 'star'), C('u4', '구급대에 상황 전달', 'flower')], ['u1', 'u2', 'u3', 'u4'], 0.25),
            CH('여러 사람이 있는 현장에서 도움을 요청하는 가장 좋은 방법은?', ['큰 소리로 "누가 좀!" 외치기', '사람을 지목해 할 일을 정해 주기', '선생님이 올 때까지 기다리기'], 1, '사람을 지목해 역할을 정해 주면 머뭇거림 없이 바로 움직여요.'),
            SH('오늘 시연에서 내가 맡은 역할과, 실제 상황에서 더 잘하려면 필요한 점을 쓰세요.'),
          ],
        },
        ws: {
          title: '현장 역할 나누기',
          items: [
            { type: 'table', prompt: '역할마다 할 일을 쓰세요.', columns: ['역할', '할 일'], cells: [['압박하는 사람', ''], ['신고하는 사람', ''], ['AED 가져올 사람', ''], ['안내하는 사람', '']], answer: '가슴압박 / 119 안내 전달 / 기기 가져오기 / 구급차 맞이' },
            { type: 'choice', prompt: '자동심장충격기를 켜고 패드를 붙이는 동안 압박은?', options: ['멈춰요', '가능한 한 계속해요', '살살 해요'], answer: '가능한 한 계속해요' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '구급대에는 쓰러진 ___, 한 처치, 충격 ___를 알려요.', answer: '때(시각), 횟수' },
            { type: 'short', prompt: '사람이 많을수록 도움이 늦어질 수 있는 까닭과 그것을 막는 방법을 쓰세요.' },
          ],
        },
        diff: DIFF('역할이 여럿인 긴 순서와 인계 내용을 정리해요.'),
        notes: '자주 보이는 어려움: ① 사람이 많으면 누군가 하겠지 하고 미룬다 → 지목해 역할을 정한다. ② 기기가 오면 압박을 멈춘다 → 분석·충격 때만 떨어진다. ③ 촬영을 돕는 일로 여긴다 → 공간을 비우고 사생활을 지킨다. 시연에서 실제 사람 가슴을 누르지 않는다.',
      }),
    ],
  });
})();
