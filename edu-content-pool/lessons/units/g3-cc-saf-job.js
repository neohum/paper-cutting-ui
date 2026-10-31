/* 3학년 창체 안전교육 — 직업안전. 근거: 「학교 안전교육 실시 기준 등에 관한 고시」 별표 2 초등 직업안전.
 * (일터 안전의 중요성, 일터 안전시설 현장 체험하기) 장면·인물은 이 단원을 위해 지은 것이다(가명). */
(function () {
  const ID = 'g3-cc-saf-job';
  const UNIT = 'g3-창체-saf-job';
  const TITLE = '직업안전';
  const GRADE = 3;
  const two = (n) => String(n).padStart(2, '0');
  const base = (n) => ({
    id: `${ID}-${two(n)}`, schema: 'edu-lesson.v1', catalog: { unit: UNIT, lesson: n },
    grade: GRADE, subject: '창체', unitTitle: TITLE, standards: [], minutes: 40,
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
  const SO = (prompt, title, slots, cards, order, d, more) => ({ prompt, toolOptions: { title, slots, cards }, target: { order }, difficulty: d, ...more });
  const LV = { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } };
  const LVB = { easy: { showBack: true }, base: {}, challenge: {} };
  const DIFF = {
    easy: '카드를 놓거나 보기를 고르면 맞는지 바로 알려 주고, 갈림길 문항은 결과가 처음부터 보여요.',
    base: '모두 마친 뒤 확인을 눌러 스스로 고쳐요.',
    challenge: '카드 순서가 섞여 나오고, 그럴듯하지만 위험한 보기를 가려내요.',
  };
  // 도입 6 + 전개 27(14+13) + 정리 7 = 40분
  const LESSON = (n, o) => Object.assign(base(n), {
    title: o.title, objective: o.objective,
    illustration: { prompt: PROMPT(o.draw), scene: SCENE(o.banner, o.extra) },
    stages: [
      { id: 'intro', title: '도입', minutes: 6, teacher: o.intro.teacher, student: o.intro.student, demo: o.intro.demo },
      { id: 'main', title: '전개', minutes: 27, activities: o.acts.map((a, i) => ({ minutes: i === 0 ? 14 : 13, ...a })) },
      { id: 'wrapup', title: '정리', minutes: 7, teacher: o.wrap.teacher, exitTicket: o.wrap.exit },
    ],
    worksheet: { title: o.wsTitle, items: o.ws }, differentiation: o.diff || DIFF, teacherNotes: o.notes,
  });
  const MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };

  PaperLessons.registerUnit({
    id: ID, schema: 'edu-unit.v1', catalogUnit: UNIT,
    grade: GRADE, subject: '창체', unitTitle: TITLE,
    flow: '3학년 직업안전은 교실 1인 1역을 "우리 반이라는 일터의 일"로 보고 정리정돈으로 사고를 막는 법을 익힌 뒤, 일터에 있는 안전시설을 찾아보는 단원입니다. 1차시에는 역할마다 생길 수 있는 위험을 까닭과 함께 잇고, 정리정돈이 넘어짐·부딪힘·떨어짐을 막는다는 것을 확인합니다. 2차시에는 비상구·소화기·안전 난간·안전망·안전 펜스 같은 시설이 무엇을 막는지 잇고, 학교 안 안전시설을 찾아보는 체험으로 이어 갑니다. 고시의 "일터 안전시설 현장 체험하기"를 학교 둘레 체험으로 바꾸어 운영할 수 있습니다. 진로 연계 활동이나 학교 시설 둘러보기와 묶어 운영할 수 있습니다(시수 인정은 학교 결정).',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '1인 1역 위험 찾고 정리정돈으로 막기',
        objective: '교실 역할을 맡아 일할 때 생길 수 있는 위험을 찾고, 정리정돈으로 막는 방법을 말할 수 있다.',
        draw: 'children doing classroom jobs: one stacking books neatly on a low shelf, one pushing in chairs, one carrying a small paper bin with both hands',
        banner: '정리정돈이 안전이에요', extra: [{ motif: 'star', x: 300, y: 96, color: 'sky' }],
        intro: {
          teacher: '"교실 바닥에 가방 끈이 길게 나와 있어요. 우유 당번이 우유 상자를 들고 지나가면 어떻게 될까요?" 대답을 듣고(기다릴 반응: "걸려 넘어져요") "일터에서 가장 흔한 사고가 넘어짐이에요. 정리정돈으로 막을 수 있어요"라고 말한다. 시연 단추로 정리 카드가 나뉘는 모습을 보여 준다.',
          student: '내가 맡은 1인 1역을 하다 불편하거나 위험했던 때를 짝에게 말해 봐요.',
          demo: { tool: 'mindmap', options: { topic: '교실 바닥', slots: ['정리됐어요', '위험해요'], cards: ['가방을 고리에 걸어요', '가방 끈이 통로에 나와요'], shuffle: false }, sequence: [{ sort: { '정리됐어요': ['가방을 고리에 걸어요'], '위험해요': ['가방 끈이 통로에 나와요'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 역할마다 생기는 위험', tool: 'mindmap',
            teacher: '"이 역할을 하다 어떤 사고가 날 수 있을까요?" 역할과 위험을 이을 때 까닭을 한 문장씩 말하게 한다. 무거운 것을 혼자 들려는 학생에게 "무거운 것은 둘이 함께, 무릎을 굽혀 들어요"라고 짚는다. 높은 곳 물건을 의자에 올라가 꺼내는 습관도 짚는다.',
            task: '1인 1역과 생길 수 있는 위험, 막는 방법을 이어요.',
            levels: LV,
            items: [
              MM('역할과 생길 수 있는 위험을 이어요. 맞지 않는 카드는 남겨요.', '역할의 위험', [{ id: 'r1', label: '우유 당번' }, { id: 'r2', label: '책장 정리' }, { id: 'r3', label: '창문 담당' }], ['무거운 상자에 허리가 아파요', '높이 쌓은 책이 떨어져요', '창틀에 손이 끼어요', '노래가 너무 커요'], { r1: '무거운 상자에 허리가 아파요', r2: '높이 쌓은 책이 떨어져요', r3: '창틀에 손이 끼어요' }, 0.2),
              MM('위험과 막는 방법을 이어요. 맞지 않는 카드는 남겨요.', '막는 방법', [{ id: 'm1', label: '무거운 상자' }, { id: 'm2', label: '높이 쌓은 책' }, { id: 'm3', label: '창틀 끼임' }], ['둘이 함께 무릎 굽혀 들어요', '무거운 책은 아래 칸에', '손잡이를 잡고 천천히 닫아요', '빨리 끝내고 놀아요'], { m1: '둘이 함께 무릎 굽혀 들어요', m2: '무거운 책은 아래 칸에', m3: '손잡이를 잡고 천천히 닫아요' }, 0.25),
              MS('역할 하는 모습을 나누어 보세요.', '역할 하기', ['안전해요', '위험해요'], ['의자를 책상 안에 넣어요', '의자 위에 서서 꺼내요', '물 쏟은 곳을 바로 닦아요', '쓰레기통을 던져 비워요'], { '안전해요': ['의자를 책상 안에 넣어요', '물 쏟은 곳을 바로 닦아요'], '위험해요': ['의자 위에 서서 꺼내요', '쓰레기통을 던져 비워요'] }, 0.25,
                { conclude: '정리정돈과 바른 자세는 일터에서 넘어짐·떨어짐·끼임을 막는 첫걸음이에요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 정리정돈 점검', tool: 'mindmap',
            teacher: '"정리정돈은 왜 안전과 이어질까요?" 통로에 물건이 없으면 넘어지지 않고, 비상시 빨리 나갈 수 있다는 것을 짚는다. 활동 뒤 실제로 교실 통로와 사물함을 함께 점검한다.',
            task: '정리정돈 점검 카드를 나누고 고쳐야 할 것을 골라요.',
            levels: LV,
            items: [
              MP('지금 바로 고쳐야 할 교실 모습만 골라 담아요.', '바로 고쳐요', ['통로에 놓인 실내화', '제자리에 꽂힌 가위', '열린 채 튀어나온 서랍', '정리된 사물함'], ['통로에 놓인 실내화', '열린 채 튀어나온 서랍'], 0.2),
              MS('모습을 나누어 보세요.', '정리 점검', ['잘 정리됐어요', '고쳐요'], ['청소 도구가 제자리에', '전선이 바닥에 엉켜요', '비상구 앞이 비어 있어요', '사물함 위에 상자가 높아요'], { '잘 정리됐어요': ['청소 도구가 제자리에', '비상구 앞이 비어 있어요'], '고쳐요': ['전선이 바닥에 엉켜요', '사물함 위에 상자가 높아요'] }, 0.25),
              MM('정리 모습과 막아 주는 사고를 이어요. 맞지 않는 카드는 남겨요.', '무엇을 막을까', [{ id: 'p1', label: '통로를 비워요' }, { id: 'p2', label: '무거운 것은 아래에' }, { id: 'p3', label: '비상구 앞을 비워요' }], ['걸려 넘어지지 않아요', '떨어져 다치지 않아요', '빨리 나갈 수 있어요', '키가 커져요'], { p1: '걸려 넘어지지 않아요', p2: '떨어져 다치지 않아요', p3: '빨리 나갈 수 있어요' }, 0.3,
                { conclude: '정리정돈은 사고를 막고, 위급할 때 빨리 나갈 길도 지켜 줘요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘부터 내 역할에서 지킬 안전 약속 하나를 정해 볼까요?" 칠판에 역할별 약속을 적는다. 출구 1번에서 의자 위에 서는 보기를 고른 학생에게 다시 짚는다.',
          exit: [
            { type: 'choice', prompt: '높은 칸의 상자가 필요해요. 알맞은 행동은?', options: ['선생님께 부탁해요', '의자 위에 서요', '뛰어서 잡아요'], answer: 0, difficulty: 0.15, explain: '높은 곳 물건은 어른에게 부탁해요.' },
            { type: 'choice', prompt: '정리정돈이 막아 주는 가장 흔한 사고는?', options: ['걸려 넘어짐', '감기', '배탈'], answer: 0, difficulty: 0.15, explain: '통로가 깨끗하면 넘어지지 않아요.' },
            { type: 'short', prompt: '내 1인 1역과 그 역할에서 지킬 안전 약속을 쓰세요.' },
            MOOD,
          ],
        },
        wsTitle: '1인 1역 안전 점검',
        ws: [
          { type: 'table', prompt: '역할에서 조심할 것과 막는 방법을 쓰세요.', columns: ['역할', '조심할 것', '막는 방법'], cells: [['우유 당번', '', ''], ['책장 정리', '', ''], ['창문 담당', '', '']], answer: '예) 무거움-둘이 들기 / 떨어짐-무거운 책은 아래 / 끼임-천천히 닫기' },
          { type: 'check', prompt: '우리 교실 정리 상태에 ✔ 하세요.', options: ['통로가 비어 있어요', '비상구 앞이 비어 있어요', '전선이 정리돼 있어요', '무거운 것이 아래 칸에 있어요'] },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '무거운 것은 ___이 함께, 무릎을 굽혀 들어요.', answer: '둘' },
          { type: 'short', prompt: '정리정돈이 안전과 이어지는 까닭을 쓰세요.' },
        ],
        notes: '자주 보이는 어려움: ① 정리정돈을 깔끔함으로만 여긴다 → 넘어짐·떨어짐을 막는 안전 습관임을 짚는다. ② 무거운 것을 혼자 든다 → 둘이 함께, 무릎 굽혀 든다. ③ 의자에 올라가 높은 곳 물건을 꺼낸다 → 어른에게 부탁한다.',
      }),

      LESSON(2, {
        title: '일터 안전시설과 막는 사고 잇기',
        objective: '비상구·소화기·안전 난간·안전망 같은 일터 안전시설이 무엇을 막는지 말하고, 학교에서 찾을 수 있다.',
        draw: 'a paper building with a green exit sign, a red fire extinguisher, a safety railing on stairs, and a net around a construction scaffold',
        banner: '안전시설을 찾아라', extra: [{ motif: 'flower', x: 300, y: 222, color: 'rose' }],
        intro: {
          teacher: '"계단 옆 손잡이와 난간은 왜 있을까요?" 대답을 듣고(기다릴 반응: "떨어지지 않게요") "이렇게 사람을 지키려고 만든 것을 안전시설이라고 해요. 일터에는 안전시설이 많아요"라고 말한다. 시연 단추로 시설과 하는 일이 이어지는 모습을 보여 준다.',
          student: '학교에서 사람을 지켜 주는 시설을 하나 찾아 짝에게 말해 봐요.',
          demo: { tool: 'mindmap', options: { mode: 'match', topic: '안전시설', slots: [{ id: 'd1', label: '계단 난간' }], cards: ['떨어지지 않게 막아요', '그림을 걸어요'], shuffle: false }, sequence: [{ match: { d1: '떨어지지 않게 막아요' } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 안전시설이 하는 일', tool: 'mindmap',
            teacher: '"이 시설이 없으면 어떤 사고가 날 수 있을까요?" 시설과 하는 일을 잇게 한다. 공사장 안전망을 그냥 그물로 여기는 학생에게 "높은 곳에서 물건이나 사람이 떨어지는 것을 막아요"라고 짚는다. 소화기·비상벨은 장난으로 만지지 않는다는 것도 덧붙인다.',
            task: '안전시설과 하는 일을 이어요.',
            levels: LV,
            items: [
              MM('안전시설과 하는 일을 이어요. 맞지 않는 카드는 남겨요.', '시설이 하는 일', [{ id: 'f1', label: '비상구' }, { id: 'f2', label: '소화기' }, { id: 'f3', label: '안전 난간' }], ['위급할 때 나가는 길', '작은 불을 꺼요', '떨어지지 않게 막아요', '물을 마셔요'], { f1: '위급할 때 나가는 길', f2: '작은 불을 꺼요', f3: '떨어지지 않게 막아요' }, 0.15),
              MM('공사장 안전시설과 하는 일을 이어요. 맞지 않는 카드는 남겨요.', '공사장 시설', [{ id: 'c1', label: '안전망' }, { id: 'c2', label: '가림 울타리' }, { id: 'c3', label: '경광등' }], ['떨어지는 것을 받아요', '지나는 사람을 지켜요', '불빛으로 위험을 알려요', '꽃을 키워요'], { c1: '떨어지는 것을 받아요', c2: '지나는 사람을 지켜요', c3: '불빛으로 위험을 알려요' }, 0.25),
              MP('사람을 지키는 안전시설만 골라 담아요.', '안전시설', ['비상벨', '게시판 그림', '미끄럼 방지 띠', '화분'], ['비상벨', '미끄럼 방지 띠'], 0.2,
                { conclude: '안전시설은 넘어짐·떨어짐·불 같은 사고를 막으려고 일터마다 있어요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 안전시설 바르게 대하기', tool: 'mindmap',
            teacher: '"비상구 앞에 상자를 쌓아 두면 어떻게 될까요?" 안전시설을 막거나 망가뜨리면 사람을 지킬 수 없다는 것을 짚는다. 활동 뒤 모둠별로 학교 안 안전시설(비상구 표지·소화기·난간·비상벨)을 찾아 사진 대신 그림으로 기록하는 체험을 한다.',
            task: '안전시설을 대하는 모습을 나누고 이어요.',
            levels: LV,
            items: [
              MS('안전시설을 대하는 모습을 나누어 보세요.', '시설 대하기', ['바르게', '안 돼요'], ['비상구 앞을 비워 둬요', '소화기로 장난쳐요', '난간을 잡고 다녀요', '난간에 매달려요'], { '바르게': ['비상구 앞을 비워 둬요', '난간을 잡고 다녀요'], '안 돼요': ['소화기로 장난쳐요', '난간에 매달려요'] }, 0.2),
              MM('장소와 그곳에 꼭 필요한 시설을 이어요. 맞지 않는 카드는 남겨요.', '어디에 필요할까', [{ id: 'l1', label: '높은 계단' }, { id: 'l2', label: '부엌·급식실' }, { id: 'l3', label: '비가 오면 젖는 현관' }], ['손잡이와 난간', '소화기', '미끄럼 방지 매트', '텔레비전'], { l1: '손잡이와 난간', l2: '소화기', l3: '미끄럼 방지 매트' }, 0.25),
              MP('망가진 안전시설을 보았을 때 할 일만 골라 담아요.', '망가졌을 때', ['선생님께 알려요', '모른 척해요', '가까이 가지 않아요', '더 세게 흔들어요'], ['선생님께 알려요', '가까이 가지 않아요'], 0.2,
                { conclude: '안전시설은 비워 두고, 바르게 쓰고, 망가지면 바로 알려요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"우리 모둠이 찾은 안전시설 가운데 가장 중요하다고 생각한 것과 까닭을 말해 볼까요?" 출구 1번에서 시설과 하는 일을 헷갈린 학생에게 다시 묻는다.',
          exit: [
            { type: 'choice', prompt: '공사장 높은 곳에 그물을 쳐 두는 까닭은?', options: ['떨어지는 것을 받으려고', '새를 잡으려고', '꾸미려고'], answer: 0, difficulty: 0.15, explain: '안전망은 떨어지는 물건과 사람을 막아요.' },
            { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '비상구 지키기', basket: '비상구 지키기', cards: ['비상구 문 앞을 비워요', '비상구에 짐을 쌓아요', '초록 표지를 가리지 않아요', '비상구 문을 잠가 둬요'] }, state: { at: {} }, prompt: '비상구를 바르게 지키는 행동만 골라 담아요.', target: { pick: ['비상구 문 앞을 비워요', '초록 표지를 가리지 않아요'] }, difficulty: 0.2 },
            { type: 'short', prompt: '학교에서 찾은 안전시설 하나와 그것이 막는 사고를 쓰세요.' },
            MOOD,
          ],
        },
        wsTitle: '안전시설 찾기',
        ws: [
          { type: 'table', prompt: '안전시설이 하는 일을 쓰세요.', columns: ['시설', '하는 일'], cells: [['비상구', ''], ['소화기', ''], ['안전 난간', ''], ['안전망', '']], answer: '나가는 길 / 작은 불 끄기 / 떨어짐 막기 / 떨어지는 것 받기' },
          { type: 'check', prompt: '우리 학교에서 찾은 안전시설에 ✔ 하세요.', options: ['비상구 표지', '소화기', '계단 난간', '비상벨'] },
          { type: 'choice', prompt: '비상구 앞에 대해 바른 것에 ○ 하세요.', options: ['늘 비워 둬요', '짐을 쌓아요', '잠가 둬요'], answer: '늘 비워 둬요' },
          { type: 'draw', prompt: '학교에서 찾은 안전시설 하나를 그리고 이름을 쓰세요.' },
        ],
        notes: '자주 보이는 어려움: ① 안전시설을 장식으로 여긴다 → 무엇을 막는지 잇게 한다. ② 소화기·비상벨을 장난으로 만진다 → 위급할 때만 쓴다는 것을 짚는다. ③ 비상구 앞에 물건을 둔다 → 비상구는 늘 비워 둔다. 체험은 학교 시설 둘러보기로 하고 실제 공사장에는 가지 않는다.',
      }),
    ],
  });
})();
