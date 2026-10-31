/* 중1 창체 안전교육 — 직업안전 (차시 3개). 근거: 「학교 안전교육 실시 기준 등에 관한 고시」 별표 2 중학교 직업안전(직업 안전 문화의 필요성·산업 재해·안전장비).
 * 장면·인물은 이 단원을 위해 직접 지은 것이다(가명). */
(function () {
  const G = 7; const CODE = 'saf-job';
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
    flow: '중1 직업안전 단원은 "일하다 다치는 것은 운이 나빠서가 아니라 막을 수 있는 일"이라는 생각을 세우는 세 시간입니다. 1차시에는 산업재해의 뜻을 알고 공장·식당·건설 현장 장면에서 넘어짐·끼임·떨어짐 위험을 찾습니다. 2차시에는 안전모·안전화·보안경·귀마개·안전장갑 같은 보호구를 작업에 맞게 고르고, 학교 실습실에서도 같은 원리가 쓰인다는 것을 확인합니다. 3차시에는 위험을 보았을 때 멈추고 말하는 일터 안전 문화가 왜 필요한지 상황을 통해 판단합니다. 법령상 연계 대상 단원은 없지만 진로활동·생활안전(실험·실습) 단원과 학교 결정으로 이어 운영할 수 있습니다.',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '일터 장면에서 넘어짐·끼임·떨어짐 위험 찾기',
        objective: '산업재해의 뜻을 말하고, 일터 장면에서 넘어짐·끼임·떨어짐 위험을 찾아 막는 방법을 고를 수 있다.',
        draw: 'a paper factory floor with a worker in a hard hat stepping around a wet floor sign and a guarded machine with a yellow paper rail',
        banner: '일터의 위험, 미리 찾기', extra: [{ motif: 'house', x: 300, y: 214, color: 'buttercup', s: 0.6 }],
        intro: {
          teacher: '"가족이나 이웃이 일하러 나갈 때 \'오늘도 안전하게!\'라고 인사하는 까닭은 무엇일까요?" 대답을 듣고 일하다가 다치거나 병을 얻는 것을 산업재해라고 한다고 알린다. "조심성 없는 사람만 다친다"는 말이 나오면 미끄러운 바닥·덮개 없는 기계처럼 일터 자체가 위험하면 누구나 다칠 수 있다는 점을 짚는다.',
          student: '가족이나 이웃이 하는 일 가운데 다칠 위험이 있어 보이는 일을 짝과 하나씩 말해 봅시다(실제 사고 이야기는 하지 않아도 돼요).',
          demo: { tool: 'mindmap', options: { topic: '식당 주방', slots: ['위험해요', '안전해요'], cards: ['기름 묻은 바닥', '미끄럼 방지 신발'], shuffle: false }, sequence: [{ sort: { '위험해요': ['기름 묻은 바닥'], '안전해요': ['미끄럼 방지 신발'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 일터 위험을 유형으로 나누기', minutes: 13, tool: 'mindmap',
            teacher: '"이 장면에서 사람은 어떻게 다칠까요?" 카드마다 다치는 모습을 한 문장으로 말하게 한다. 사다리 장면을 넘어짐으로 놓는 학생에게 "높은 곳에서 아래로 가면 무엇이라고 할까요?"라고 되묻고, 기계 사이에 손이 들어가는 끼임은 장갑이 말려 들어가서도 생긴다는 점을 짚는다.',
            task: '일터 장면 카드를 넘어짐·끼임·떨어짐으로 나누고, 산업재해의 뜻을 확인해요.',
            levels: LV,
            items: [
              MS('일터 장면을 위험 유형으로 나누어 보세요.', '일터 위험', ['넘어짐', '끼임', '떨어짐'], ['물 묻은 주방 바닥', '바닥에 늘어진 전선', '돌아가는 롤러에 손', '문틈에 손가락', '사다리 꼭대기 작업', '난간 없는 2층 발판'], { '넘어짐': ['물 묻은 주방 바닥', '바닥에 늘어진 전선'], '끼임': ['돌아가는 롤러에 손', '문틈에 손가락'], '떨어짐': ['사다리 꼭대기 작업', '난간 없는 2층 발판'] }, 0.25),
              MP('산업재해에 해당하는 것만 골라 담으세요.', '산업재해', ['공장에서 기계에 다침', '배달 일 하다 넘어짐', '오래 소음에 귀가 나빠짐', '주말 등산하다 삐끗함'], ['공장에서 기계에 다침', '배달 일 하다 넘어짐', '오래 소음에 귀가 나빠짐'], 0.3,
                { predict: { q: '병도 재해?', options: ['예', '아니요'], answer: 0 }, conclude: '일 때문에 다치거나 병을 얻는 것 모두 산업재해예요.' }),
              MS('사고 원인을 두 칸으로 나누어 보세요.', '사고의 원인', ['일터 환경', '일하는 방법'], ['덮개 없는 기계', '어두운 계단', '서둘러 뛰어다님', '장갑 끼고 회전 기계'], { '일터 환경': ['덮개 없는 기계', '어두운 계단'], '일하는 방법': ['서둘러 뛰어다님', '장갑 끼고 회전 기계'] }, 0.3),
            ],
          },
          {
            id: 'a2', title: '활동 2. 위험과 막는 방법 잇기', minutes: 14, tool: 'mindmap',
            teacher: '"위험을 없애는 방법과 조심하는 방법 중 무엇이 더 확실할까요?" 미끄러운 바닥은 "조심해서 걷기"보다 "바로 닦고 표지 세우기"가 더 확실하다는 점을 짚는다. 3번 뒤 모둠별로 우리 학교에서 넘어짐·끼임·떨어짐 위험이 있는 곳을 하나씩 찾아 말하게 한다.',
            task: '일터의 위험과 그것을 막는 방법을 잇고, 우리 학교의 비슷한 위험을 찾아요.',
            levels: LV,
            items: [
              MM('위험과 막는 방법을 이어 보세요. 맞지 않는 카드는 남겨요.', '위험 막기', [{ id: 'h1', label: '물 묻은 바닥' }, { id: 'h2', label: '덮개 없는 기계' }, { id: 'h3', label: '난간 없는 발판' }], ['바로 닦고 표지 세우기', '덮개를 달고 끄고 정비', '난간 설치·안전대 걸기', '빨리 지나가기'], { h1: '바로 닦고 표지 세우기', h2: '덮개를 달고 끄고 정비', h3: '난간 설치·안전대 걸기' }, 0.3),
              MP('위험을 아예 없애는 방법만 골라 담으세요.', '위험 없애기', ['늘어진 전선 정리하기', '어두운 곳 조명 달기', '조심하라고 말만 하기', '다친 뒤 반창고 준비'], ['늘어진 전선 정리하기', '어두운 곳 조명 달기'], 0.25),
              TALK('모둠에서 우리 학교의 넘어짐·끼임·떨어짐 위험 장소를 하나씩 찾고 막는 방법을 정한 뒤 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 찾은 위험 가운데 가장 쉽게 없앨 수 있는 것은 무엇이었나요?" 출구 1번에서 "조심해서 걷기"를 가장 확실한 방법으로 고른 학생과 위험 없애기의 뜻을 다시 짚는다.',
          exit: [
            XM('물류 창고 장면을 위험 유형으로 나누어 보세요.', '물류 창고', ['넘어짐', '떨어짐'], ['바닥의 비닐 포장재', '젖은 하역장 바닥', '높은 선반 위 상자 정리', '지게차 위에 올라탐'], { '넘어짐': ['바닥의 비닐 포장재', '젖은 하역장 바닥'], '떨어짐': ['높은 선반 위 상자 정리', '지게차 위에 올라탐'] }, 0.25),
            CH('산업재해의 뜻으로 알맞은 것은?', ['일하다 다치거나 병을 얻는 것', '일터에서 일어난 다툼', '일을 그만두는 것'], 0, '일 때문에 생긴 부상과 질병을 모두 산업재해라고 해요.'),
            SH('가족이 일하러 갈 때 해 주고 싶은 안전 인사를 한 문장으로 쓰세요.'),
          ],
        },
        ws: {
          title: '일터의 위험 찾기',
          items: [
            { type: 'table', prompt: '장면이 어떤 위험인지 쓰세요(넘어짐·끼임·떨어짐).', columns: ['장면', '위험'], cells: [['물 묻은 주방 바닥', ''], ['돌아가는 롤러에 손', ''], ['난간 없는 발판', '']], answer: '넘어짐, 끼임, 떨어짐' },
            { type: 'choice', prompt: '산업재해에 해당하는 것에 ○ 하세요.', options: ['주말 운동하다 삐끗함', '배달 일 하다 넘어짐', '집에서 감기에 걸림'], answer: '배달 일 하다 넘어짐' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '미끄러운 바닥은 조심하는 것보다 바로 ___ 표지를 세워 위험을 ___ 것이 더 확실해요.', answer: '닦고, 없애는' },
            { type: 'short', prompt: '우리 학교에서 찾은 위험 장소 한 곳과 막는 방법을 쓰세요.' },
          ],
        },
        diff: DIFF('원인이 환경인지 방법인지 헷갈리는 카드를 가려요.'),
        notes: '자주 보이는 어려움: ① 조심성 없는 사람만 다친다고 여긴다 → 위험한 환경은 누구나 다치게 한다. ② 직업병은 산업재해가 아니라고 여긴다 → 병도 포함된다. ③ 조심하라는 말을 가장 좋은 대책으로 본다 → 위험 자체를 없애는 것이 먼저. 가족의 실제 사고 경험을 묻지 않는다.',
      }),

      LESSON(2, {
        title: '작업에 맞는 보호구 골라 몸 지키기',
        objective: '안전모·안전화·보안경·귀마개·안전장갑의 쓰임을 알고, 작업 상황에 맞는 보호구를 고를 수 있다.',
        draw: 'paper cutouts of a hard hat, safety boots, goggles, ear muffs and gloves arranged around a smiling worker silhouette',
        banner: '내 몸을 지키는 보호구', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }],
        intro: {
          teacher: '"공사장 옆을 지날 때 일하는 분들이 꼭 쓰고 있는 것은 무엇일까요?" 대답을 듣고(기다릴 반응: "헬멧이요", "안전모요") 보호구는 사고가 났을 때 몸에 오는 충격과 피해를 줄여 주는 마지막 방어막이라고 소개한다. "불편하면 안 써도 된다"는 말이 나오면 사고는 예고 없이 오기 때문에 늘 바르게 써야 한다는 점을 짚는다.',
          student: '학교 실습이나 체육 시간에 몸을 지키려고 쓰거나 입는 것을 짝과 떠올려 말해 봅시다.',
          demo: { tool: 'mindmap', options: { mode: 'match', topic: '보호구', slots: [{ id: 'd1', label: '떨어지는 물건' }], cards: ['안전모', '귀마개'], shuffle: false }, sequence: [{ match: { d1: '안전모' } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 보호구와 지키는 곳 잇기', minutes: 13, tool: 'mindmap',
            teacher: '"보안경은 무엇으로부터 눈을 지킬까요?" 튀는 쇳가루·약품 방울을 예로 든다. 1번에서 귀마개를 머리 보호로 잇는 학생은 드물지만 2번 작업 문항에서 소음 작업에 장갑을 고르는 학생이 있다 — 큰 소리가 오래 계속되면 귀가 서서히 나빠진다는 점을 짚는다.',
            task: '보호구와 그것이 지키는 몸의 부분·위험을 잇고, 작업마다 필요한 보호구를 골라요.',
            levels: LV,
            items: [
              MM('보호구와 막아 주는 위험을 이어 보세요. 맞지 않는 카드는 남겨요.', '보호구의 쓰임', [{ id: 'q1', label: '안전모' }, { id: 'q2', label: '보안경' }, { id: 'q3', label: '귀마개' }, { id: 'q4', label: '안전화' }], ['떨어지는 물건에서 머리', '튀는 조각에서 눈', '큰 소음에서 귀', '무거운 물건에서 발', '햇볕에서 얼굴'], { q1: '떨어지는 물건에서 머리', q2: '튀는 조각에서 눈', q3: '큰 소음에서 귀', q4: '무거운 물건에서 발' }, 0.2),
              MP('나무를 전기톱으로 자르는 작업에 필요한 보호구만 골라 담으세요.', '목공 작업', ['보안경', '귀마개', '안전화', '슬리퍼'], ['보안경', '귀마개', '안전화'], 0.3),
              MP('건물 공사장 2층 작업에 필요한 보호구만 골라 담으세요.', '공사장 작업', ['안전모', '안전대(벨트)', '안전화', '반바지'], ['안전모', '안전대(벨트)', '안전화'], 0.3,
                { conclude: '같은 일터라도 작업마다 필요한 보호구가 달라요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 바르게 쓰기와 틀리게 쓰기', minutes: 14, tool: 'mindmap',
            teacher: '"안전모를 썼는데 턱끈을 안 매면 어떻게 될까요?" 넘어지거나 부딪힐 때 벗겨져 소용이 없다는 점을 짚는다. 장갑 카드에서 "회전하는 기계에도 장갑"을 바른 쪽에 두는 학생이 많다 — 면장갑이 기계에 말려 들어가 손까지 끌려갈 수 있어 회전 기계에서는 장갑을 끼지 않는 경우가 있다는 점을 알려 준다(작업장 규칙을 따른다).',
            task: '보호구를 바르게 쓴 모습과 고쳐야 할 모습을 나누고, 학교 실습실 보호구를 점검해요.',
            levels: LV,
            items: [
              MS('보호구 착용 모습을 두 칸으로 나누어 보세요.', '보호구 착용', ['바르게 썼어요', '고쳐야 해요'], ['턱끈까지 맨 안전모', '깨끗한 보안경', '턱끈 풀린 안전모', '이마에 올린 보안경'], { '바르게 썼어요': ['턱끈까지 맨 안전모', '깨끗한 보안경'], '고쳐야 해요': ['턱끈 풀린 안전모', '이마에 올린 보안경'] }, 0.2),
              MS('장갑 사용을 두 칸으로 나누어 보세요.', '장갑 쓰기', ['알맞아요', '위험해요'], ['약품 다룰 때 고무장갑', '날카로운 판 옮길 때 장갑', '회전 드릴에 면장갑', '찢어진 장갑 계속 쓰기'], { '알맞아요': ['약품 다룰 때 고무장갑', '날카로운 판 옮길 때 장갑'], '위험해요': ['회전 드릴에 면장갑', '찢어진 장갑 계속 쓰기'] }, 0.35),
              TALK('모둠에서 학교 과학실·기술실에서 쓰는 보호구를 떠올려, 어떤 실습에 쓰는지 서로 설명한 뒤 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"보호구를 쓰면 위험한 작업도 마음 놓고 해도 될까요?" 보호구는 마지막 방어막이고 위험을 없애는 것이 먼저라는 1차시 내용과 이어 정리한다. 출구 1번에서 용접 작업에 귀마개만 고른 학생과 눈 보호를 다시 짚는다.',
          exit: [
            XM('작업과 보호구를 나누어 보세요.', '작업별 보호구', ['용접 작업', '소음 큰 공장'], ['보안면(눈 보호)', '불에 강한 장갑', '귀마개', '귀덮개'], { '용접 작업': ['보안면(눈 보호)', '불에 강한 장갑'], '소음 큰 공장': ['귀마개', '귀덮개'] }, 0.3),
            CH('보호구에 대한 설명으로 옳은 것은?', ['불편하면 벗어도 된다', '사고 때 피해를 줄이는 마지막 방어막이다', '쓰기만 하면 위험이 없어진다'], 1, '보호구는 피해를 줄여 주지만, 위험을 없애는 것이 먼저예요.'),
            SH('안전모 턱끈을 매야 하는 까닭을 한 문장으로 쓰세요.'),
          ],
        },
        ws: {
          title: '보호구 알기',
          items: [
            { type: 'table', prompt: '보호구가 지키는 몸의 부분을 쓰세요.', columns: ['보호구', '지키는 곳'], cells: [['안전모', ''], ['보안경', ''], ['귀마개', ''], ['안전화', '']], answer: '머리, 눈, 귀, 발' },
            { type: 'choice', prompt: '바르게 쓴 모습에 ○ 하세요.', options: ['턱끈 풀린 안전모', '이마에 올린 보안경', '턱끈까지 맨 안전모'], answer: '턱끈까지 맨 안전모' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '보호구는 사고 때 피해를 줄이는 마지막 ___이고, 위험을 ___ 것이 먼저예요.', answer: '방어막, 없애는' },
            { type: 'short', prompt: '학교 실습에서 보호구를 쓴 적이 있다면 무엇을 어떤 실습에 썼는지 쓰세요.' },
          ],
        },
        diff: DIFF('회전 기계의 장갑처럼 헷갈리는 사용법을 가려요.'),
        notes: '자주 보이는 어려움: ① 보호구만 쓰면 안전하다고 여긴다 → 위험 제거가 먼저. ② 턱끈·끈을 매지 않는다 → 벗겨지면 소용없다. ③ 모든 작업에 장갑이 좋다고 여긴다 → 회전 기계는 말려 들어갈 수 있다. 실제 보호구가 있으면 보여 주되 학생이 기계를 만지지 않게 한다.',
      }),

      LESSON(3, {
        title: '위험을 본 순간, 멈추고 말하는 쪽 고르기',
        objective: '직업 안전 문화가 필요한 까닭을 말하고, 일터에서 위험을 보았을 때 멈추고 알리는 행동을 고를 수 있다.',
        draw: 'a young paper worker raising a hand to stop a conveyor belt while a supervisor nods and points to a safety sign',
        banner: '멈추고, 말하고, 함께 고쳐요', extra: [{ motif: 'leaf', x: 300, y: 222, color: 'mint' }],
        intro: {
          teacher: '"새로 들어온 직원이 기계 덮개가 빠진 것을 봤는데, 선배들이 다 그냥 일하고 있어요. 말할 수 있을까요?" 의견을 듣고(기다릴 반응: "눈치 보여요", "말해야죠") 위험을 말하기 쉬운 일터 분위기를 안전 문화라고 한다고 알린다. "말해 봤자 안 바뀐다"는 말이 나오면 작은 말 한마디가 사고를 막은 장면을 오늘 활동에서 살펴보자고 한다.',
          student: '학교에서 위험한 것을 보고 선생님께 알린 적이 있다면 그때 어떤 마음이었는지 짝과 말해 봅시다.',
          demo: { tool: 'emotion', options: { mode: 'branch', situation: '바닥에 기름이 쏟아져 있어요.', choices: [{ id: 'tell', text: '알리고 표지를 세워요', result: '아무도 미끄러지지 않아요.', mood: '안심' }, { id: 'pass', text: '못 본 척 지나가요', result: '누군가 넘어져요.', mood: '걱정' }] }, sequence: [{ choice: 'tell' }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 일터 상황에서 행동 고르기', minutes: 14, tool: 'emotion',
            teacher: '"이렇게 하면 다음에 어떤 일이 생길까요?" 보기를 고를 때마다 결과를 소리 내어 읽게 한다. 2번에서 "시간이 없으니 덮개 없이 한다"를 고르는 학생에게는 바쁠수록 사고가 잦다는 점을 짚고, 3번에서 혼날까 봐 숨기는 보기를 고르면 작은 사고를 알려야 큰 사고를 막을 수 있다고 이야기한다.',
            task: '일터에서 위험을 보았을 때 어떻게 할지 고르고, 그 결과를 살펴봐요.',
            levels: LVB,
            items: [
              EB('식당 아르바이트 첫날, 주방 바닥에 기름이 흥건해요. 어떻게 할까요?', '식당 주방 바닥에 기름이 쏟아져 있는데 모두 바빠 그냥 지나다녀요.', [
                { id: 'tell', text: '매니저에게 알리고 바로 닦아요', result: '아무도 미끄러지지 않아요.', mood: '안심' },
                { id: 'avoid', text: '나만 피해서 다녀요', result: '다른 직원이 미끄러져 다쳐요.', mood: '속상함', why: '나만 피하면 다른 사람이 다칠 수 있어요.' },
                { id: 'later', text: '손님이 빠지면 나중에 닦아요', result: '그사이 누군가 넘어져요.', mood: '걱정', why: '위험은 보는 즉시 알리고 없애요.' }], 'tell', 0.2),
              EB('기계 덮개가 빠져 있는데 선배가 "바쁘니 그냥 해"라고 해요. 어떻게 할까요?', '공장 실습에서 돌아가는 기계의 덮개가 빠져 있어요. 선배는 바쁘다며 그냥 하라고 해요.', [
                { id: 'stop', text: '멈추고 관리자에게 알려요', result: '덮개를 달고 안전하게 다시 일해요.', mood: '안심' },
                { id: 'go', text: '선배 말대로 그냥 해요', result: '손이 기계에 끼일 뻔해요.', mood: '무서움', why: '덮개 없는 기계는 끼임 사고로 이어질 수 있어요.' },
                { id: 'quiet', text: '혼자 조심하며 해요', result: '피곤해진 오후에 사고가 나요.', mood: '걱정', why: '조심만으로는 끼임을 막기 어려워요.' }], 'stop', 0.3),
              EB('상자를 옮기다 발이 걸려 넘어질 뻔했어요. 다치지는 않았어요. 어떻게 할까요?', '창고에서 상자를 옮기다 바닥 전선에 발이 걸려 넘어질 뻔했어요.', [
                { id: 'report', text: '넘어질 뻔한 일을 알려요', result: '전선을 정리해 다음 사고를 막아요.', mood: '뿌듯함' },
                { id: 'hide', text: '창피해서 말하지 않아요', result: '다음 사람이 걸려 넘어져요.', mood: '미안함', why: '사고가 날 뻔한 일도 알려야 다음 사고를 막아요.' },
                { id: 'laugh', text: '웃고 넘겨요', result: '위험이 그대로 남아요.', mood: '걱정', why: '작은 신호를 놓치면 큰 사고가 돼요.' }], 'report', 0.3,
                { conclude: '위험을 말하는 것은 고자질이 아니라 모두를 지키는 일이에요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 안전 문화가 있는 일터', minutes: 13, tool: 'mindmap',
            teacher: '"안전 문화가 있는 일터는 어떤 모습일까요?" 1번을 마친 뒤 일하는 사람만이 아니라 사업주·관리자도 안전을 책임진다는 점을 짚는다. 3번 모둠 활동에서는 우리 반에서도 위험을 말하기 쉬운 분위기를 만들 약속을 정하게 한다.',
            task: '안전 문화가 있는 일터와 없는 일터의 모습을 나누고, 안전을 지키는 사람들의 역할을 이어요.',
            levels: LV,
            items: [
              MS('일터 모습을 두 칸으로 나누어 보세요.', '안전 문화', ['안전 문화 있음', '안전 문화 없음'], ['위험 말하면 고마워해요', '작업 전 함께 점검해요', '빨리만 하라고 다그쳐요', '다친 일을 숨기게 해요'], { '안전 문화 있음': ['위험 말하면 고마워해요', '작업 전 함께 점검해요'], '안전 문화 없음': ['빨리만 하라고 다그쳐요', '다친 일을 숨기게 해요'] }, 0.2),
              MM('사람과 안전을 위해 할 일을 이어 보세요. 맞지 않는 카드는 남겨요.', '안전 지킴이', [{ id: 'p1', label: '일하는 사람' }, { id: 'p2', label: '사업주·관리자' }, { id: 'p3', label: '처음 온 사람' }], ['수칙 지키고 위험 알리기', '안전 시설·교육 마련', '모르면 묻고 배우기', '위험해도 참고 일하기'], { p1: '수칙 지키고 위험 알리기', p2: '안전 시설·교육 마련', p3: '모르면 묻고 배우기' }, 0.3),
              TALK('모둠에서 우리 반에서도 위험을 편하게 말할 수 있게 하는 약속 한 가지를 정해 발표 준비를 한 뒤 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 세 시간 동안 배운 것을 한 문장으로 묶으면?" (기다릴 반응: "위험을 찾고, 보호구를 쓰고, 말한다") 출구 1번에서 숨기는 쪽을 고른 학생과 작은 사고를 알리는 까닭을 다시 짚으며 단원을 마친다.',
          exit: [
            XB('편의점에서 선반 위 상자가 떨어질 듯 흔들려요. 어떻게 할까요?', '편의점 창고 높은 선반의 무거운 상자가 반쯤 튀어나와 흔들려요.', [
              { id: 'tell', text: '점장님께 알리고 아래를 비워요', result: '상자를 안전하게 내려 정리해요.', mood: '안심' },
              { id: 'climb', text: '혼자 의자에 올라가 밀어 넣어요', result: '의자에서 떨어질 뻔해요.', mood: '무서움', why: '혼자 높은 곳에 오르면 떨어질 수 있어요.' },
              { id: 'pass', text: '내 일이 아니니 지나가요', result: '상자가 떨어져 누군가 다쳐요.', mood: '속상함', why: '위험은 보는 사람이 알려야 해요.' }], 'tell', 0.25),
            CH('직업 안전 문화에 대한 설명으로 옳은 것은?', ['위험을 말하면 눈치를 줘야 한다', '위험을 편하게 말하고 함께 고친다', '사고는 운이 나빠 생긴다'], 1, '위험을 말하기 쉽고 함께 고치는 분위기가 안전 문화예요.'),
            SH('이번 단원에서 배운 것 가운데 앞으로 일할 때 꼭 기억할 것을 한 문장으로 쓰세요.'),
            MOOD,
          ],
        },
        ws: {
          title: '직업 안전 문화',
          items: [
            { type: 'table', prompt: '안전 문화가 있는 일터면 ○, 없으면 ×를 쓰세요.', columns: ['모습', '○ / ×'], cells: [['위험을 말하면 고마워해요', ''], ['다친 일을 숨기게 해요', ''], ['작업 전 함께 점검해요', ''], ['빨리만 하라고 다그쳐요', '']], answer: '○, ×, ○, ×' },
            { type: 'choice', prompt: '넘어질 뻔했지만 다치지 않았을 때 할 일에 ○ 하세요.', options: ['창피하니 숨겨요', '관리자에게 알려요', '웃고 넘겨요'], answer: '관리자에게 알려요' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '위험을 보면 ___고, 관리자에게 ___고, 함께 고쳐요.', answer: '멈추, 알리' },
            { type: 'short', prompt: '우리 반에서 위험을 편하게 말할 수 있게 하는 약속을 한 가지 쓰세요.' },
          ],
        },
        diff: DIFF('선배·관리자의 말과 안전이 부딪히는 상황을 판단해요.'),
        notes: '자주 보이는 어려움: ① 위험을 말하는 것을 고자질로 여긴다 → 모두를 지키는 일. ② 다치지 않았으면 말할 필요 없다고 여긴다 → 날 뻔한 사고가 큰 사고의 신호. ③ 안전은 일하는 사람만의 책임이라고 여긴다 → 사업주·관리자도 책임진다.',
      }),
    ],
  });
})();
