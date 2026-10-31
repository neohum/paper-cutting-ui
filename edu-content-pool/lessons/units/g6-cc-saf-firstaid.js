/* 6학년 창체 안전교육 — 응급처치. 근거: 「학교 안전교육 실시 기준 등에 관한 고시」 별표 2 초등 응급처치.
 * (응급처치의 의미·중요성, 심폐소생술 및 자동제세동기의 사용법 알기) 장면·인물은 이 단원을 위해 지은 것이다(가명). */
(function () {
  const ID = 'g6-cc-saf-firstaid';
  const UNIT = 'g6-창체-saf-firstaid';
  const TITLE = '응급처치';
  const GRADE = 6;
  const two = (n) => String(n).padStart(2, '0');
  const base = (n) => ({
    id: `${ID}-${two(n)}`, schema: 'edu-lesson.v1', catalog: { unit: UNIT, lesson: n },
    grade: GRADE, subject: '창체', unitTitle: TITLE, standards: [], minutes: 40,
    formats: ['chromebook', 'projector', 'print'],
  });
  const PROMPT = (what) => `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`;
  const SCENE = (text, extra = []) => ({ viewBox: [480, 270], layers: [
    { motif: 'sun', x: 410, y: 58, s: 0.8 }, { motif: 'cloud', x: 120, y: 52 }, { motif: 'hills', y: 204 },
    { motif: 'house', x: 96, y: 214, color: 'buttercup', s: 0.9 }, { motif: 'tree', x: 380, y: 214 }, ...extra,
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
    flow: '6학년 응급처치는 5학년에서 익힌 심폐소생술 단계를 바탕으로 가슴압박을 "제대로" 하는 조건과 여럿이 함께 돕는 역할 나누기를 익히는 단원입니다. 1차시에는 가슴압박의 위치·자세·깊이·빠르기·이완·교대를 바른 것과 고칠 것으로 나누고, 실습용 마네킹이나 흉내 동작으로 리듬을 맞춥니다. 2차시에는 쓰러진 사람을 본 장면에서 신고·가슴압박·자동심장충격기 가져오기·구급대 안내 역할을 나누고, 지도에서 가장 가까운 자동심장충격기를 찾습니다. 근거는 대한심폐소생협회 일반인 지침이며, 초등학생은 실제 사람에게 압박하지 않고 마네킹·흉내로만 연습합니다. 보건 수업이나 학교 심폐소생술 체험 교육과 묶어 운영할 수 있습니다(시수 인정은 학교 결정).',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '바른 가슴압박과 고칠 가슴압박 가려내기',
        objective: '가슴압박의 위치·자세·깊이·빠르기·이완·교대 조건을 말하고, 바른 압박과 고칠 압박을 가려낼 수 있다.',
        draw: 'two children taking turns pressing on a paper training manikin with straight arms, a paper metronome ticking beside them',
        banner: '세게, 빠르게, 멈추지 않게', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }],
        intro: {
          teacher: '"5학년 때 배운 심폐소생술 네 단계를 기억하나요?" 대답을 듣고(기다릴 반응: "반응 확인, 119, 호흡 확인, 가슴압박") "오늘은 그 가운데 가슴압박을 제대로 하는 방법을 익혀요"라고 말한다. 시연 단추로 압박 카드가 나뉘는 모습을 보여 준다. "살살 눌러야 안 다쳐요"가 나오면 "심장이 다시 피를 보내려면 얼마나 세게 눌러야 할까요?"라고 되묻는다.',
          student: '5학년 때 배운 심폐소생술 단계 가운데 기억나는 것을 짝에게 말해 봐요.',
          demo: { tool: 'mindmap', options: { topic: '가슴압박', slots: ['바르게', '고쳐요'], cards: ['팔을 곧게 펴요', '팔꿈치를 굽혀요'], shuffle: false }, sequence: [{ sort: { '바르게': ['팔을 곧게 펴요'], '고쳐요': ['팔꿈치를 굽혀요'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 가슴압박 조건 가려내기', tool: 'mindmap',
            teacher: '"성인 가슴압박은 가슴 가운데를 약 5cm 깊이로, 1분에 100~120번 빠르기로 눌러요." 위치를 배꼽 쪽으로 착각하는 학생에게 "가슴뼈 아래쪽 절반, 가슴 가운데예요"라고 짚는다. 누른 뒤 가슴이 완전히 올라오게 손을 떼지 않고 힘만 빼는 것(이완)을 모르는 학생이 많다 — "다 올라와야 심장에 피가 다시 차요"라고 말한다. 숫자는 근거 지침에 있는 값만 쓴다.',
            task: '가슴압박 카드를 바른 것과 고칠 것으로 나누어요.',
            levels: LV,
            items: [
              MS('위치와 자세 카드를 나누어 보세요.', '위치와 자세', ['바르게', '고쳐요'], ['가슴 가운데에 손을 둬요', '배꼽 위를 눌러요', '어깨가 손 바로 위에 와요', '한 손가락으로 눌러요'], { '바르게': ['가슴 가운데에 손을 둬요', '어깨가 손 바로 위에 와요'], '고쳐요': ['배꼽 위를 눌러요', '한 손가락으로 눌러요'] }, 0.2),
              MS('깊이와 빠르기 카드를 나누어 보세요.', '깊이와 빠르기', ['바르게', '고쳐요'], ['성인은 약 5cm 깊이', '1분에 100~120번', '살살 쓰다듬듯 눌러요', '1분에 30번 천천히'], { '바르게': ['성인은 약 5cm 깊이', '1분에 100~120번'], '고쳐요': ['살살 쓰다듬듯 눌러요', '1분에 30번 천천히'] }, 0.25),
              MM('조건과 까닭을 이어요. 맞지 않는 카드는 남겨요.', '왜 그럴까', [{ id: 'w1', label: '팔을 곧게 펴요' }, { id: 'w2', label: '가슴이 다 올라오게 해요' }, { id: 'w3', label: '지치면 교대해요' }], ['몸무게를 실어 세게 눌러요', '심장에 피가 다시 차요', '압박이 약해지지 않아요', '보기에 멋있어요'], { w1: '몸무게를 실어 세게 눌러요', w2: '심장에 피가 다시 차요', w3: '압박이 약해지지 않아요' }, 0.3,
                { conclude: '세게, 빠르게, 다 올라오게, 멈추지 않게 — 지치면 바꿔서 이어 가요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 마네킹 리듬 연습 돌아보기', tool: 'mindmap',
            teacher: '"짝이 압박하는 모습을 보며 무엇이 잘됐는지 말해 줄까요?" 실습용 마네킹이 있으면 모둠별로 돌아가며 리듬에 맞춰 눌러 보고, 없으면 쿠션·손바닥 흉내로 자세만 연습한다(친구 몸에 누르지 않는다). 압박을 멈추고 숨을 확인하러 자주 멈추는 학생에게 "구급대가 오거나 자동심장충격기가 분석할 때까지는 멈추지 않아요"라고 짚는다.',
            task: '연습 장면을 보고 잘한 점과 고칠 점을 나누고 골라요.',
            levels: LV,
            items: [
              MS('친구의 연습 장면을 나누어 보세요.', '연습 돌아보기', ['잘했어요', '고쳐요'], ['리듬에 맞춰 꾸준히 눌러요', '자꾸 멈추고 쉬어요', '깍지 낀 손바닥으로 눌러요', '손을 들어 가슴을 때려요'], { '잘했어요': ['리듬에 맞춰 꾸준히 눌러요', '깍지 낀 손바닥으로 눌러요'], '고쳐요': ['자꾸 멈추고 쉬어요', '손을 들어 가슴을 때려요'] }, 0.2),
              MP('가슴압박을 멈춰도 되는 때만 골라 담아요.', '멈춰도 될 때', ['구급대가 와서 이어받을 때', '팔이 조금 아플 때', '충격기가 분석할 때', '구경꾼이 많을 때'], ['구급대가 와서 이어받을 때', '충격기가 분석할 때'], 0.3),
              MM('상황과 할 일을 이어요. 맞지 않는 카드는 남겨요.', '이럴 땐', [{ id: 'q1', label: '압박하다 팔이 지쳐요' }, { id: 'q2', label: '숨을 쉬는지 모르겠어요' }, { id: 'q3', label: '어떻게 할지 기억 안 나요' }], ['옆 사람과 바꿔요', '없다고 보고 압박해요', '119 상담원 안내를 따라요', '그냥 기다려요'], { q1: '옆 사람과 바꿔요', q2: '없다고 보고 압박해요', q3: '119 상담원 안내를 따라요' }, 0.35,
                { conclude: '헷갈리면 119 상담원이 알려 주는 대로 하고, 지치면 바꿔서 멈추지 않아요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 배운 가슴압박 조건을 네 낱말로 말해 볼까요? 세게, 빠르게, 다 올라오게, 멈추지 않게." 출구 1번에서 깊이를 잘못 고른 학생이 있으면 성인 약 5cm를 다시 짚는다.',
          exit: [
            { type: 'choice', prompt: '성인 가슴압박의 빠르기로 알맞은 것은?', options: ['1분에 100~120번', '1분에 10번', '1분에 300번'], answer: 0, difficulty: 0.2, explain: '1분에 100~120번 빠르기로 눌러요.' },
            { type: 'tool', tool: 'mindmap', options: { topic: '압박할 때', slots: ['바르게', '고쳐요'], cards: ['누른 뒤 힘을 빼요', '손바닥을 가슴에서 떼고 때려요', '자세가 흐트러지면 바로잡아요', '살살 문질러요'] }, state: { at: {} }, prompt: '압박할 때 행동을 바른 것과 고칠 것으로 나누어요.', target: { sort: { '바르게': ['누른 뒤 힘을 빼요', '자세가 흐트러지면 바로잡아요'], '고쳐요': ['손바닥을 가슴에서 떼고 때려요', '살살 문질러요'] } }, difficulty: 0.25 },
            { type: 'short', prompt: '가슴압박을 하다 지쳤을 때 교대해야 하는 까닭을 한 문장으로 쓰세요.' },
            MOOD,
          ],
        },
        wsTitle: '바른 가슴압박',
        ws: [
          { type: 'table', prompt: '가슴압박 조건을 채우세요.', columns: ['조건', '바른 방법'], cells: [['위치', ''], ['자세', ''], ['깊이(성인)', ''], ['빠르기', '']], answer: '가슴 가운데 / 팔을 곧게 펴고 어깨가 손 위에 / 약 5cm / 1분에 100~120번' },
          { type: 'choice', prompt: '압박 뒤에 할 일에 ○ 하세요.', options: ['가슴이 다 올라오게 힘을 빼요', '손을 높이 들어요', '세게 문질러요'], answer: '가슴이 다 올라오게 힘을 빼요' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '압박하다 지치면 옆 사람과 ___해서 멈추지 않아요.', answer: '교대' },
          { type: 'short', prompt: '숨을 쉬는지 잘 모를 때 어떻게 하는지 쓰세요.' },
        ],
        notes: '근거: 대한심폐소생협회 일반인 심폐소생술 지침(가슴뼈 아래쪽 절반, 성인 약 5cm, 분당 100~120회, 완전 이완, 중단 최소화, 교대). 자주 보이는 어려움: ① 위치를 배 쪽으로 잡는다 → 가슴 가운데. ② 팔꿈치를 굽힌다 → 팔을 펴고 몸무게를 싣는다. ③ 자주 멈춘다 → 구급대 이어받기·자동심장충격기 분석 때만 멈춘다. 실습은 마네킹·쿠션·흉내로만 하고 친구 몸에 누르지 않는다.',
      }),

      LESSON(2, {
        title: '역할 나누고 가장 가까운 자동심장충격기 찾기',
        objective: '쓰러진 사람을 본 상황에서 돕는 역할을 나누고, 지도에서 가장 가까운 자동심장충격기를 찾을 수 있다.',
        draw: 'four children each doing a role around a paper manikin in a park: one calling, one pressing, one running with a green defibrillator box, one waving at an ambulance',
        banner: '함께하면 더 빨라요', extra: [{ motif: 'flower', x: 300, y: 222, color: 'lavender' }],
        intro: {
          teacher: '"혼자일 때와 여럿일 때 쓰러진 사람을 돕는 방법은 어떻게 달라질까요?" 대답을 듣고(기다릴 반응: "나눠서 해요") "여럿이면 신고하는 사람, 누르는 사람, 자동심장충격기를 가져오는 사람, 구급대를 안내하는 사람으로 나눌 수 있어요"라고 말한다. 시연 단추로 역할 카드가 이어지는 모습을 보여 준다. "다 같이 신고해요"가 나오면 "모두 전화하면 누르는 사람은 누가 될까요?"라고 되묻는다.',
          student: '여럿이 함께 도우면 무엇이 좋을지 짝에게 말해 봐요.',
          demo: { tool: 'mindmap', options: { mode: 'match', topic: '역할', slots: [{ id: 'r1', label: '신고 맡은 사람' }], cards: ['119에 전화해요', '구경해요'], shuffle: false }, sequence: [{ match: { r1: '119에 전화해요' } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 돕는 역할 나누기', tool: 'mindmap',
            teacher: '"이 역할을 맡은 사람은 무엇을 할까요?" 역할과 할 일을 잇게 한다. 혼자일 때는 119에 신고하고 스피커로 켠 채 가슴압박을 하며 상담원 안내를 따른다는 것을 짚는다. 구급대를 안내하는 역할이 왜 필요한지 묻고(기다릴 반응: "구급차가 빨리 찾아와요") 큰 건물·공원에서는 입구에서 손을 흔들어 안내한다고 말한다.',
            task: '역할과 할 일을 잇고, 상황에 맞게 나누어요.',
            levels: LV,
            items: [
              MM('역할과 할 일을 이어요. 맞지 않는 카드는 남겨요.', '역할 나누기', [{ id: 'r1', label: '신고 맡은 사람' }, { id: 'r2', label: '압박 맡은 사람' }, { id: 'r3', label: '안내 맡은 사람' }], ['119에 장소를 알려요', '쉬지 않고 가슴을 눌러요', '입구에서 구급대를 맞아요', '사진을 찍어 올려요'], { r1: '119에 장소를 알려요', r2: '쉬지 않고 가슴을 눌러요', r3: '입구에서 구급대를 맞아요' }, 0.2),
              MS('혼자일 때 할 일을 나누어 보세요.', '혼자일 때', ['해요', '안 해요'], ['119에 걸고 스피커를 켜요', '도와줄 사람을 찾아 떠나요', '상담원 안내대로 눌러요', '119가 올 때까지 지켜만 봐요'], { '해요': ['119에 걸고 스피커를 켜요', '상담원 안내대로 눌러요'], '안 해요': ['도와줄 사람을 찾아 떠나요', '119가 올 때까지 지켜만 봐요'] }, 0.3),
              MP('여럿일 때 서로 돕는 바른 행동만 골라 담아요.', '함께 돕기', ['한 사람씩 역할을 정해요', '모두 한꺼번에 전화해요', '지친 사람과 압박을 바꿔요', '둘러서서 구경해요'], ['한 사람씩 역할을 정해요', '지친 사람과 압박을 바꿔요'], 0.25,
                { conclude: '여럿이면 역할을 나누고, 혼자면 119를 스피커로 켜 두고 안내를 따르며 눌러요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 가장 가까운 자동심장충격기', tool: 'map',
            teacher: '"두 자동심장충격기 가운데 어느 쪽이 더 빨리 가져올 수 있을까요?" 쓰러진 곳에서 칸을 세어 비교하게 한다. 지도에서 \'충격기\'는 자동심장충격기를 줄인 말이라고 알려 준다. 가까운 곳이 잠겨 있는 건물 안이면 어떻게 할지 함께 생각해 보고, 실제 동네에서는 공공 기관의 위치 안내(응급의료 정보 누리집·앱)로 찾을 수 있다고 말한다. 활동 뒤 우리 학교와 학교 둘레 설치 위치를 교사가 알려 준다.',
            task: '지도에서 칸을 세어 가장 가까운 자동심장충격기를 찾아요.',
            levels: { easy: {}, base: {}, challenge: {} },
            items: [
              { prompt: '공원 그네 앞에서 사람이 쓰러졌어요. 가장 가까운 자동심장충격기(충격기)에 핀을 꽂아요.', toolOptions: { title: '동네 공원', places: [{ name: '그네', icon: 'park', at: [4, 2] }, { name: '충격기 가', icon: 'hospital', at: [0, 0] }, { name: '충격기 나', icon: 'hospital', at: [5, 3] }, { name: '도서관', icon: 'library', at: [2, 1] }] }, target: { place: '충격기 나' }, difficulty: 0.25 },
              { prompt: '체육관에서 사람이 쓰러졌어요. 가장 가까운 자동심장충격기(충격기)에 핀을 꽂아요.', toolOptions: { title: '우리 학교', places: [{ name: '체육관', icon: 'house', at: [1, 2] }, { name: '충격기 가', icon: 'hospital', at: [1, 0] }, { name: '충격기 나', icon: 'hospital', at: [5, 1] }, { name: '현관', icon: 'dot', at: [3, 3] }] }, target: { place: '충격기 가' }, difficulty: 0.3 },
              { prompt: '역 앞에서 사람이 쓰러졌어요. 지도를 보고 알맞은 것을 골라요.', toolOptions: { title: '역 둘레', readOnly: true, places: [{ name: '역 앞', icon: 'station', at: [2, 2] }, { name: '충격기 가', icon: 'hospital', at: [3, 2] }, { name: '충격기 나', icon: 'hospital', at: [5, 0] }, { name: '시장', icon: 'market', at: [0, 3] }], ask: { q: '자동심장충격기를 가지러 갈 곳과 까닭은?', choices: ['충격기 가 — 한 칸으로 가장 가까워요', '충격기 나 — 지도에서 더 위에 있어요', '시장 — 사람이 많아요'], why: [null, '칸을 세어 보면 충격기 나가 더 멀어요.', '시장에는 자동심장충격기가 없어요.'] } }, target: { pick: 0 }, difficulty: 0.3,
                conclude: '쓰러진 곳에서 가장 가까운 자동심장충격기를 가져와야 가슴압박과 함께 빨리 쓸 수 있어요.' },
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 집에 가는 길에 자동심장충격기 표시를 하나 찾아볼까요?" 다음 시간에 찾은 곳을 발표하게 한다(사진에 사람 얼굴이 나오지 않게). 출구 2번에서 "모두 전화해요"를 고른 학생에게 역할을 나누는 까닭을 다시 묻는다.',
          exit: [
            { type: 'tool', tool: 'map', options: { title: '쇼핑 거리', places: [{ name: '분수대', icon: 'park', at: [1, 1] }, { name: '충격기 가', icon: 'hospital', at: [2, 1] }, { name: '충격기 나', icon: 'hospital', at: [5, 3] }, { name: '우체국', icon: 'post', at: [4, 0] }] }, prompt: '분수대 앞에서 사람이 쓰러졌어요. 가장 가까운 충격기에 핀을 꽂아요.', target: { place: '충격기 가' }, difficulty: 0.2 },
            { type: 'choice', prompt: '여럿이 쓰러진 사람을 도울 때 알맞은 것은?', options: ['한 사람씩 역할을 정해요', '모두 119에 전화해요', '먼저 온 사람만 도와요'], answer: 0, difficulty: 0.2, explain: '역할을 나누면 신고·압박·충격기 가져오기를 함께 할 수 있어요.' },
            { type: 'short', prompt: '혼자일 때 119 전화를 스피커로 켜 두는 까닭을 쓰세요.' },
            MOOD,
          ],
        },
        wsTitle: '함께 돕기와 자동심장충격기',
        ws: [
          { type: 'table', prompt: '역할마다 할 일을 쓰세요.', columns: ['역할', '할 일'], cells: [['신고', ''], ['가슴압박', ''], ['충격기 가져오기', ''], ['구급대 안내', '']], answer: '예) 119에 장소를 알려요 / 쉬지 않고 눌러요 / 가까운 곳에서 가져와요 / 입구에서 맞이해요' },
          { type: 'choice', prompt: '가장 가까운 자동심장충격기를 고를 때 할 일에 ○ 하세요.', options: ['쓰러진 곳에서 거리를 견줘요', '가장 큰 건물로 가요', '아무 데나 가요'], answer: '쓰러진 곳에서 거리를 견줘요' },
          { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '혼자일 때는 119에 걸고 ___를 켠 채 안내대로 가슴압박을 해요.', answer: '스피커' },
          { type: 'short', prompt: '우리 학교나 동네에서 자동심장충격기가 있는 곳을 하나 쓰세요(사람 이름은 쓰지 않아요).' },
        ],
        notes: '근거: 대한심폐소생협회 일반인 지침(신고·자동심장충격기 요청을 특정인에게, 혼자일 때 스피커폰으로 상담원 안내를 받으며 가슴압박). 지도는 가상 장소이므로 활동 뒤 실제 학교·학교 둘레 설치 위치를 알려 준다. 자주 보이는 어려움: ① 모두가 신고만 한다 → 역할을 나눈다. ② 지도에서 위에 있는 것을 가깝다고 여긴다 → 칸을 세어 거리를 견준다. ③ 혼자일 때 도움을 찾아 자리를 뜬다 → 119를 스피커로 켜고 곁에서 압박한다.',
      }),
    ],
  });
})();
