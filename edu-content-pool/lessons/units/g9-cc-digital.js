/* 중3 창체 법정교육 — 인터넷·스마트폰 과의존 예방 (2차시). 근거: 지능정보화 기본법 제54조(학기별 1회 이상).
 * 안전교육 사이버 중독 예방(g9-cc-saf-cyber: 과의존의 세 신호·도박의 생각 함정·게임과 진로·도움 기관)과 겹치지 않게, 자기 조절 전략("만약 ~하면 ~한다" 계획)과 화면 밖 여가 설계만 다룬다. 연구 수치는 쓰지 않는다. 장면·인물은 가명. */
(function () {
  const G = 9; const CODE = 'digital';
  const UNIT = `g${G}-창체-${CODE}`;
  const TITLE = '인터넷·스마트폰 과의존 예방';
  const base = (n) => ({
    id: `g${G}-cc-${CODE}-${String(n).padStart(2, '0')}`, schema: 'edu-lesson.v1',
    catalog: { unit: UNIT, lesson: n },
    grade: G, subject: '창체', unitTitle: TITLE,
    standards: [],
    minutes: 40,
    formats: ['chromebook', 'projector', 'print'],
  });
  const PROMPT = (what) => `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`;
  const SCENE = (text, extra = []) => ({ viewBox: [480, 270], layers: [
    { motif: 'moon', x: 410, y: 58, s: 0.8 }, { motif: 'cloud', x: 120, y: 52 }, { motif: 'hills', y: 204 },
    { motif: 'house', x: 96, y: 214, color: 'lavender', s: 0.9 }, { motif: 'tree', x: 380, y: 214 }, ...extra,
    { motif: 'text', x: 240, y: 140, text, size: 22 },
  ] });
  // 활동 문항 — 한 활동은 교구 하나로만 돈다(mindmap: MS·MM·MP / emotion: EB·ES / story: SO)
  const MS = (prompt, topic, slots, cards, sort, d, more) => ({ prompt, toolOptions: { mode: 'sort', topic, slots, cards }, target: { sort }, difficulty: d, ...more });
  const MM = (prompt, topic, slots, cards, match, d, more) => ({ prompt, toolOptions: { mode: 'match', topic, slots, cards }, target: { match }, difficulty: d, ...more });
  const MP = (prompt, topic, cards, pick, d, more) => ({ prompt, toolOptions: { mode: 'pick', topic, basket: topic, cards }, target: { pick }, difficulty: d, ...more });
  const EB = (prompt, situation, choices, choice, d, more) => ({ prompt, toolOptions: { mode: 'branch', situation, choices }, target: { choice }, difficulty: d, ...more });
  const ES = (prompt, situation, feeling, level, d, more) => ({ prompt, toolOptions: { mode: 'scale', situation, feeling }, target: { level }, difficulty: d, ...more });
  const SO = (prompt, title, slots, cards, order, d, more) => ({ prompt, toolOptions: { mode: 'order', title, slots, cards }, target: { order }, difficulty: d, ...more });
  const C = (id, text, motif) => ({ id, text, motif });
  const TALK = (prompt) => ({ prompt, free: true, talk: true, difficulty: 0 });
  const LV = { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } };
  const LVB = { easy: { showBack: true }, base: {}, challenge: {} };
  // 출구 질문
  const XS = (prompt, topic, slots, cards, sort, d = 0.2) => ({ type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic, slots, cards }, state: { at: {} }, prompt, target: { sort }, difficulty: d });
  const XB = (prompt, situation, choices, choice, d = 0.2) => ({ type: 'tool', tool: 'emotion', options: { mode: 'branch', situation, choices }, state: { choice: null }, prompt, target: { choice }, difficulty: d });
  const XC = (prompt, options, answer, explain, d = 0.2) => ({ type: 'choice', prompt, options, answer, difficulty: d, explain });
  const XT = (prompt) => ({ type: 'short', prompt });
  const MOOD = { type: 'mood', prompt: '오늘 수업을 마친 내 마음은 어떤가요?' };
  // 도입 시연
  const DEMO = (topic, slots, cards, sort) => ({ tool: 'mindmap', options: { mode: 'sort', topic, slots, cards, shuffle: false }, sequence: [{ sort }] });
  const DIFF = {
    easy: '맞는 칸에 놓은 카드에 초록 테두리가 생기고, 갈림길 문항은 결과 칸이 처음부터 보여요.',
    base: '모든 카드를 놓은 뒤 확인을 눌러 스스로 고쳐요.',
    challenge: '카드 순서가 섞여 나오고, 그럴듯하지만 맞지 않는 보기를 근거를 들어 가려내요.',
  };
  // 도입 6 + 전개 27 + 정리 7 = 40분
  const LESSON = (n, o) => Object.assign(base(n), {
    title: o.title, objective: o.objective,
    illustration: { prompt: PROMPT(o.draw), scene: SCENE(o.banner, o.extra) },
    stages: [
      { id: 'intro', title: '도입', minutes: 6, teacher: o.intro.teacher, student: o.intro.student, demo: o.intro.demo },
      { id: 'main', title: '전개', minutes: 27, activities: o.acts },
      { id: 'wrapup', title: '정리', minutes: 7, teacher: o.wrap.teacher, exitTicket: o.wrap.exit },
    ],
    worksheet: o.ws, differentiation: o.diff || DIFF, teacherNotes: o.notes,
  });

  PaperLessons.registerUnit({
    id: `g${G}-cc-${CODE}`, schema: 'edu-unit.v1', catalogUnit: UNIT,
    grade: G, subject: '창체', unitTitle: TITLE,
    flow: '고등학교 진학을 앞둔 3학년이 스스로 사용을 조절하는 힘을 기르는 단원입니다. 1차시에는 사용이 길어지는 유혹 상황(지루할 때·공부 시작 전·잠들기 전)마다 "만약 ~하면 ~한다" 계획을 세워, 의지가 아니라 미리 정한 행동으로 조절하는 방법을 익힙니다. 2차시에는 스마트폰이 채워 주던 재미·연결·쉼을 화면 밖 활동으로도 얻을 수 있는지 따져 보고, 화면 밖 주말 계획을 세웁니다. 1·2학년(집중과 잠, SNS 비교와 단톡방 약속)을 자기 조절로 묶습니다. 안전교육 사이버 중독 예방(g9-cc-saf-cyber) 단원과 연계해 시수 인정 가능(학교 결정).',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '유혹 상황마다 만약-그러면 계획 세우기',
        objective: '스마트폰 사용이 길어지는 유혹 상황을 찾고, 상황마다 "만약 ~하면 ~한다" 계획을 세워 스스로 사용을 조절할 수 있다.',
        draw: 'a paper signpost at a fork with two arrows, one pointing to an endless scroll and one to a desk with books and a ball, a student choosing',
        banner: '미리 정하면 쉬워요', extra: [{ motif: 'star', x: 300, y: 96, color: 'lavender' }],
        intro: {
          teacher: '"\'오늘은 진짜 조금만 해야지\' 다짐이 잘 지켜지던가요?" 대답을 듣고(기다릴 반응: "아니요", "그때만요") 시연으로 계획 카드를 나눈다. "의지가 약해서 그래요"라는 말이 나오면 "의지가 강한 사람은 유혹 앞에서 매번 참는 걸까요, 유혹 앞에서 할 일을 미리 정해 둔 걸까요?"라고 되묻는다. 오늘은 "만약 ~하면 ~한다" 계획을 세운다고 밝힌다.',
          student: '스마트폰을 "잠깐만" 집어 들었다가 오래 쓰게 되는 순간 하나를 짝에게 말해 봅시다.',
          demo: DEMO('계획 고르기', ['만약-그러면 계획', '막연한 다짐'], ['만약 지루하면 산책 10분', '앞으로 덜 쓸게'], { '만약-그러면 계획': ['만약 지루하면 산책 10분'], '막연한 다짐': ['앞으로 덜 쓸게'] }),
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 유혹 상황 찾고 계획의 모양 알기', minutes: 13, tool: 'mindmap',
            teacher: '"\'덜 쓸게\'와 \'만약 공부를 시작하면 휴대전화를 거실에 둔다\'는 무엇이 다를까요?" 만약-그러면 계획은 언제(상황)와 무엇을(행동)이 분명해서 그 상황이 오면 바로 행동이 떠오른다는 점을 짚는다. 유혹 상황은 사람마다 다르니 내 상황을 찾는 것이 먼저라고 말해 준다.',
            task: '사용이 길어지는 유혹 상황을 찾고, 만약-그러면 계획과 막연한 다짐을 가려요.',
            levels: LV,
            items: [
              MS('다짐을 두 가지로 나누어 보세요.', '계획의 모양', ['만약-그러면 계획', '막연한 다짐'], ['만약 숙제 시작하면 폰을 거실에', '만약 11시가 되면 충전기에 꽂기', '스마트폰을 줄여야지', '이번엔 진짜 조금만'], { '만약-그러면 계획': ['만약 숙제 시작하면 폰을 거실에', '만약 11시가 되면 충전기에 꽂기'], '막연한 다짐': ['스마트폰을 줄여야지', '이번엔 진짜 조금만'] }, 0.2),
              MP('스마트폰 사용이 길어지기 쉬운 유혹 상황만 골라 담아 보세요.', '유혹 상황', ['지루하거나 할 일이 막힐 때', '잠들기 전 누워 있을 때', '공부를 시작하기 직전', '친구와 축구할 때'], ['지루하거나 할 일이 막힐 때', '잠들기 전 누워 있을 때', '공부를 시작하기 직전'], 0.25),
              MM('계획의 빈 부분과 알맞은 말을 이어 보세요. 맞지 않는 카드는 남겨요.', '계획 완성하기', [{ id: 'p1', label: '만약 영상이 끝나 다음이 뜨면' }, { id: 'p2', label: '만약 문제가 막혀 폰이 당기면' }, { id: 'p3', label: '만약 버스에서 심심하면' }], ['화면을 끄고 일어난다', '물 한 잔 마시고 다시 푼다', '음악만 듣고 창밖을 본다', '한 개만 더 본다'], { p1: '화면을 끄고 일어난다', p2: '물 한 잔 마시고 다시 푼다', p3: '음악만 듣고 창밖을 본다' }, 0.3,
                { conclude: '"만약(상황) → 그러면(행동)"으로 미리 정하면 유혹 앞에서 고민하지 않고 바로 움직일 수 있어요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 나의 만약-그러면 계획 다듬기', minutes: 14, tool: 'mindmap',
            teacher: '"좋은 계획은 어떤 조건을 갖췄을까요?" 상황이 구체적이고, 행동이 쉽고 작으며, 지금 당장 할 수 있어야 한다는 점을 짚는다. "만약 폰이 보고 싶으면 안 본다"처럼 행동이 없는 계획은 다시 다짐이 된다고 말해 준다. 계획이 지켜지지 않은 날은 실패가 아니라 계획을 고칠 정보라고 강조한다. 3번은 짝과 말로 나눈다.',
            task: '좋은 계획의 조건을 고르고, 계획이 지켜지지 않았을 때 다시 세우는 방법을 정해요.',
            levels: LV,
            items: [
              MS('계획을 두 가지로 나누어 보세요.', '계획 다듬기', ['잘 다듬은 계획', '다시 고칠 계획'], ['만약 밥 먹으면 폰은 방에 둔다', '만약 알림이 오면 공부 끝나고 본다', '만약 보고 싶으면 안 본다', '만약 심심하면 그냥 참는다'], { '잘 다듬은 계획': ['만약 밥 먹으면 폰은 방에 둔다', '만약 알림이 오면 공부 끝나고 본다'], '다시 고칠 계획': ['만약 보고 싶으면 안 본다', '만약 심심하면 그냥 참는다'] }, 0.25),
              MP('계획이 지켜지지 않은 날 알맞은 행동만 골라 담아 보세요.', '지켜지지 않은 날', ['어느 상황에서 무너졌는지 적어요', '더 쉬운 행동으로 바꿔요', '역시 나는 안 된다고 포기해요', '벌로 하루 종일 폰을 써요'], ['어느 상황에서 무너졌는지 적어요', '더 쉬운 행동으로 바꿔요'], 0.3,
                { conclude: '계획이 무너진 날은 실패가 아니라, 계획을 내게 맞게 고칠 정보를 얻은 날이에요.' }),
              TALK('짝과 "나의 가장 큰 유혹 상황"과 그때의 만약-그러면 계획 하나를 정해 말하고 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 세운 계획은 언제 처음 시험해 볼 수 있나요?" 출구 1번에서 막연한 다짐을 계획으로 둔 학생에게는 상황과 행동을 넣어 다시 써 보게 한다. 2학기에는 스마트폰이 채워 주던 것을 화면 밖에서 찾는다고 예고한다.',
          exit: [
            XS('다짐 카드를 나누어 보세요.', '어떤 다짐일까', ['만약-그러면 계획', '막연한 다짐'], ['만약 시험 기간이면 앱을 폴더로', '만약 누우면 폰을 책상에 둔다', '정신 차려야지', '내일부터 진짜 줄인다'], { '만약-그러면 계획': ['만약 시험 기간이면 앱을 폴더로', '만약 누우면 폰을 책상에 둔다'], '막연한 다짐': ['정신 차려야지', '내일부터 진짜 줄인다'] }),
            XC('잘 세운 만약-그러면 계획의 조건으로 알맞은 것은 무엇인가요?', ['상황과 행동이 분명하다', '아주 크고 어려운 목표다', '의지로 참겠다는 말이 들어 있다'], 0, '언제(상황)와 무엇을(행동)이 분명해야 바로 움직일 수 있어요.'),
            XT('나의 만약-그러면 계획 하나를 "만약 ~하면 ~한다"로 쓰세요.'),
            MOOD,
          ],
        },
        ws: {
          title: '만약-그러면 계획',
          items: [
            { type: 'table', prompt: '나의 유혹 상황과 계획을 쓰세요.', columns: ['만약(상황)', '그러면(행동)'], rows: 3 },
            { type: 'choice', prompt: '만약-그러면 계획에 ○ 하세요.', options: ['스마트폰을 줄여야지', '만약 숙제를 시작하면 폰을 거실에 둔다', '이번엔 진짜 조금만'], answer: '만약 숙제를 시작하면 폰을 거실에 둔다' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '계획이 무너진 날은 실패가 아니라 계획을 고칠 ___를 얻은 날이에요.', answer: '정보' },
            { type: 'short', prompt: '"만약 보고 싶으면 안 본다"를 잘 다듬은 계획으로 고쳐 쓰고 까닭을 쓰세요.' },
          ],
        },
        notes: '자주 보이는 어려움: ① 조절을 의지의 문제로만 본다 → 상황에 맞춘 행동을 미리 정하는 방법을 보여 준다. ② 행동이 빠진 계획(안 본다·참는다)을 세운다 → 대신 할 작은 행동을 넣게 한다. ③ 계획이 무너지면 자책한다 → 상황을 기록해 계획을 고치는 과정으로 다룬다. 과의존 신호 진단과 도움 기관은 안전교육 사이버 중독 예방 단원에서 다룬다.',
      }),

      LESSON(2, {
        title: '스마트폰이 채워 주던 것을 화면 밖에서 찾기',
        objective: '스마트폰이 채워 주던 재미·연결·쉼을 화면 밖 활동으로도 얻을 수 있음을 알고, 화면 밖 주말 계획을 세울 수 있다.',
        draw: 'paper-cut friends riding bicycles along a river on a weekend, a phone left in a backpack pocket, kites in the sky',
        banner: '화면 밖에도 재미가 있어요', extra: [{ motif: 'bird', x: 300, y: 96 }],
        intro: {
          teacher: '"스마트폰을 하루 못 쓴다면 가장 아쉬운 것은 무엇일까요?" 대답을 듣고(기다릴 반응: "친구랑 연락이요", "심심할 것 같아요") 시연으로 활동 카드를 나눈다. "스마트폰 없으면 할 게 없어요"라는 말이 나오면 "스마트폰이 생기기 전 사람들은 주말에 무엇을 했을까요?"라고 되묻는다. 오늘은 스마트폰이 채워 주던 것을 화면 밖에서 찾아본다고 밝힌다.',
          student: '휴대전화 없이 해 본 활동 가운데 시간 가는 줄 몰랐던 것 하나를 짝에게 말해 봅시다.',
          demo: DEMO('채워 주는 것', ['재미', '쉼'], ['친구와 보드게임', '공원 산책'], { '재미': ['친구와 보드게임'], '쉼': ['공원 산책'] }),
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 스마트폰이 채워 주던 것 찾기', minutes: 13, tool: 'mindmap',
            teacher: '"우리가 스마트폰을 집어 드는 까닭은 무엇일까요?" 재미·연결·쉼·정보처럼 스마트폰이 채워 주는 바람을 나누게 한다. 바람 자체는 자연스럽고, 그것을 채우는 방법이 한 가지뿐일 때 과의존으로 흐르기 쉽다는 점을 짚는다. "화면 밖 활동은 재미없어요"라는 말에는 처음엔 덜 자극적이어도 익숙해지면 다른 즐거움이 생긴다고 말해 준다.',
            task: '스마트폰이 채워 주는 바람을 찾고, 같은 바람을 채우는 화면 밖 활동을 잇고 나누어요.',
            levels: LV,
            items: [
              MS('화면 밖 활동을 채워 주는 것으로 나누어 보세요.', '채워 주는 것', ['재미', '연결', '쉼'], ['친구와 농구하기', '가족과 요리하기', '따뜻한 물로 씻고 쉬기', '조용히 산책하기'], { '재미': ['친구와 농구하기'], '연결': ['가족과 요리하기'], '쉼': ['조용히 산책하기', '따뜻한 물로 씻고 쉬기'] }, 0.25),
              MM('스마트폰 사용과 같은 바람을 채우는 화면 밖 활동을 이어 보세요. 맞지 않는 카드는 남겨요.', '바꾸어 채우기', [{ id: 'r1', label: '심심해서 짧은 영상' }, { id: 'r2', label: '외로워서 단톡방' }, { id: 'r3', label: '지쳐서 누워 화면 넘기기' }], ['동네 탁구장 가기', '친구와 만나 걷기', '눈 감고 음악 듣기', '영상 하나 더 보기'], { r1: '동네 탁구장 가기', r2: '친구와 만나 걷기', r3: '눈 감고 음악 듣기' }, 0.3,
                { conclude: '스마트폰이 채워 주던 재미·연결·쉼은 화면 밖에서도 채울 수 있어요. 방법이 여러 개일수록 조절이 쉬워요.' }),
              TALK('짝과 "요즘 나를 스마트폰으로 이끄는 가장 큰 바람(재미·연결·쉼 가운데)"을 말하고 "다 했어요"를 누르세요.'),
            ],
          },
          {
            id: 'a2', title: '활동 2. 화면 밖 주말 계획 세우기', minutes: 14, tool: 'mindmap',
            teacher: '"지킬 수 있는 주말 계획은 어떤 모습일까요?" 하루 종일 스마트폰 금지보다 시간대를 정해 화면 밖 활동을 넣는 계획이 오래간다는 점을 짚는다. 돈이 많이 드는 활동만 떠올리는 학생에게는 동네 도서관·공원·운동장처럼 가까운 곳을 함께 찾게 한다. 3번은 모둠에서 말로 나눈다.',
            task: '지킬 수 있는 화면 밖 주말 계획의 조건을 고르고, 나의 계획을 세워요.',
            levels: LV,
            items: [
              MS('주말 계획을 두 가지로 나누어 보세요.', '주말 계획', ['지킬 수 있어요', '지키기 어려워요'], ['토요일 오전은 도서관', '일요일 오후 친구와 자전거', '이틀 내내 폰 금지', '해외여행 가기'], { '지킬 수 있어요': ['토요일 오전은 도서관', '일요일 오후 친구와 자전거'], '지키기 어려워요': ['이틀 내내 폰 금지', '해외여행 가기'] }, 0.2),
              MP('화면 밖 주말 계획을 지키는 데 도움이 되는 것만 골라 담아 보세요.', '계획 지키기', ['함께할 친구·가족 정하기', '휴대전화는 가방 안에', '계획을 혼자만 알고 있기', '시작 시간 정하지 않기'], ['함께할 친구·가족 정하기', '휴대전화는 가방 안에'], 0.25,
                { conclude: '함께할 사람, 정한 시간, 가방 속 휴대전화 — 세 가지가 화면 밖 주말을 지켜 줘요.' }),
              TALK('모둠에서 각자 "이번 주말 화면 밖 시간 하나"를 언제·어디서·누구와로 정해 말하고 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"이번 주말 화면 밖 시간이 끝난 뒤 스스로에게 무엇을 물어볼까요?" 출구 1번에서 이틀 내내 금지를 지킬 수 있는 계획으로 둔 학생에게는 작게 시작하는 계획을 다시 권한다. 중학교 3년의 과의존 예방 수업(집중과 잠, SNS와 관계, 자기 조절과 여가)을 "내가 정하는 스마트폰"으로 묶는다.',
          exit: [
            XS('주말 계획 카드를 나누어 보세요.', '어떤 계획일까', ['지킬 수 있어요', '지키기 어려워요'], ['일요일 저녁 가족 산책', '토요일 오후 친구와 배드민턴', '주말 내내 폰을 숨겨 두기', '하루에 운동 다섯 가지'], { '지킬 수 있어요': ['일요일 저녁 가족 산책', '토요일 오후 친구와 배드민턴'], '지키기 어려워요': ['주말 내내 폰을 숨겨 두기', '하루에 운동 다섯 가지'] }),
            XC('스마트폰 사용 조절이 쉬워지는 까닭으로 알맞은 것은 무엇인가요?', ['재미를 채우는 방법이 여러 가지일 때', '스마트폰 화면이 클 때', '알림을 모두 켜 둘 때'], 0, '재미·연결·쉼을 채우는 방법이 여러 가지일수록 조절이 쉬워요.'),
            XT('이번 주말 화면 밖 시간 계획을 언제·어디서·누구와로 쓰세요.'),
          ],
        },
        ws: {
          title: '화면 밖 주말 설계',
          items: [
            { type: 'table', prompt: '스마트폰이 채워 주던 것을 화면 밖 활동으로 바꾸어 쓰세요.', columns: ['채워 주던 것', '화면 밖 활동'], cells: [['재미', ''], ['연결', ''], ['쉼', '']], answer: '예) 운동·보드게임, 친구 만나기·가족 요리, 산책·음악 듣기' },
            { type: 'choice', prompt: '지킬 수 있는 주말 계획에 ○ 하세요.', options: ['이틀 내내 폰 금지', '토요일 오전 도서관', '하루에 운동 다섯 가지'], answer: '토요일 오전 도서관' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '재미를 채우는 방법이 ___ 가지일수록 조절이 쉬워요.', answer: '여러' },
            { type: 'short', prompt: '중학교 3년 동안 배운 스마트폰 조절 방법 가운데 고등학교에 가져갈 것 두 가지를 쓰세요.' },
          ],
        },
        notes: '자주 보이는 어려움: ① 스마트폰을 쓰고 싶은 마음 자체를 나쁘다고 여긴다 → 바람은 자연스럽고 채우는 방법을 늘리는 것이 핵심임을 짚는다. ② 크고 비싼 계획만 떠올린다 → 가까운 곳의 작은 활동부터 고르게 한다. ③ 가정 형편이나 주말 사정을 드러내게 하지 않는다 — 계획은 각자 활동지에 쓰고 발표는 자원하는 학생만 한다.',
      }),
    ],
  });
})();
