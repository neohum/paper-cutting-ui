/* 고1 창체 법정교육 — 인터넷·스마트폰 과의존 예방 (2차시). 근거: 지능정보화 기본법 제54조(학기별 1회 이상). 과의존의 세 신호(조절 실패·현저성·문제적 결과)와 주의를 붙잡는 설계를 다룬다. 고1 사이버 중독 예방(g10-cc-saf-cyber: 도박·사용 기록 규칙·숏폼)과 겹치지 않게 짰다.
 * 장면·인물은 이 단원을 위해 직접 지은 것이다(가명). 학생 자신의 경험을 털어놓게 하는 문항은 두지 않는다. */
(function () {
  const G = 10; const CODE = 'digital';
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
    { motif: 'sun', x: 410, y: 58, s: 0.8 }, { motif: 'cloud', x: 120, y: 52 }, { motif: 'hills', y: 204 },
    { motif: 'house', x: 96, y: 214, color: 'buttercup', s: 0.9 }, { motif: 'tree', x: 380, y: 214 }, ...extra,
    { motif: 'text', x: 240, y: 140, text, size: 22 },
  ] });
  // 활동 문항 — 한 활동은 교구 하나로만 돈다(mindmap: MS·MM·MP / emotion: EB·ES / story: SO)
  const MS = (prompt, topic, slots, cards, sort, d, more) => ({ prompt, toolOptions: { mode: 'sort', topic, slots, cards }, target: { sort }, difficulty: d, ...more });
  const MM = (prompt, topic, slots, cards, match, d, more) => ({ prompt, toolOptions: { mode: 'match', topic, slots, cards }, target: { match }, difficulty: d, ...more });
  const MP = (prompt, topic, cards, pick, d, more) => ({ prompt, toolOptions: { mode: 'pick', topic, basket: topic, cards }, target: { pick }, difficulty: d, ...more });
  const EB = (prompt, situation, choices, choice, d, more) => ({ prompt, toolOptions: { mode: 'branch', situation, choices }, target: { choice }, difficulty: d, ...more });
  const ES = (prompt, situation, feeling, level, d, more) => ({ prompt, toolOptions: { mode: 'scale', situation, feeling }, target: { level }, difficulty: d, ...more });
  const SO = (prompt, title, slots, cards, order, d, more) => ({ prompt, toolOptions: { mode: 'order', title, slots, cards }, target: { order }, difficulty: d, ...more });
  const SF = (prompt, title, slots, cards, fill, d, more) => ({ prompt, toolOptions: { mode: 'fill', title, slots, cards }, target: { fill }, difficulty: d, ...more });
  const C = (id, text, motif) => ({ id, text, motif });
  const TALK = (prompt) => ({ prompt, free: true, talk: true, difficulty: 0 });
  const LV = { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } };
  const LVB = { easy: { showBack: true }, base: {}, challenge: {} };
  // 출구 질문
  const XS = (prompt, topic, slots, cards, sort, d = 0.2) => ({ type: 'tool', tool: 'mindmap', options: { mode: 'sort', topic, slots, cards }, state: { at: {} }, prompt, target: { sort }, difficulty: d });
  const XB = (prompt, situation, choices, choice, d = 0.2) => ({ type: 'tool', tool: 'emotion', options: { mode: 'branch', situation, choices }, state: { choice: null }, prompt, target: { choice }, difficulty: d });
  const XM = (prompt, topic, slots, cards, match, d = 0.2) => ({ type: 'tool', tool: 'mindmap', options: { mode: 'match', topic, slots, cards }, state: { at: {} }, prompt, target: { match }, difficulty: d });
  const XO = (prompt, title, slots, cards, order, d = 0.2) => ({ type: 'tool', tool: 'story', options: { mode: 'order', title, slots, cards }, state: { at: {} }, prompt, target: { order }, difficulty: d });
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
    flow: '고1 과의존 예방 단원은 "많이 쓰면 과의존"이라는 막연한 생각을 넘어, 스마트폰 과의존을 조절 실패(스스로 사용을 줄이기 어려움)·현저성(생활에서 스마트폰이 가장 중요해짐)·문제적 결과(건강·관계·학업에 문제가 생겨도 계속 씀)의 세 신호로 나누어 봅니다(한국지능정보사회진흥원 스마트폰 과의존 척도의 세 요인). 2차시에는 자동 재생·무한 스크롤·알림 배지·연속 보상처럼 사용 시간을 늘리도록 만든 설계를 찾아내고, 그에 맞설 설정과 습관을 고릅니다. 고1 안전교육 사이버 중독 예방(도박·사용 기록 규칙·숏폼) 단원과 연계해 시수 인정 가능(학교 결정)하며, 차시 내용은 서로 겹치지 않게 짰습니다.',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '사례를 조절 실패·현저성·문제적 결과로 나누기',
        objective: '스마트폰 과의존의 세 신호(조절 실패·현저성·문제적 결과)를 설명하고, 가상 사례에 드러난 신호를 알맞게 분류할 수 있다.',
        draw: 'a teenager surrounded by paper-cut notification bubbles, with three labeled signposts leading in different directions',
        banner: '과의존의 세 신호', extra: [{ motif: 'star', x: 330, y: 100, color: 'buttercup', s: 0.6 }],
        intro: {
          teacher: '"하루 몇 시간 쓰면 과의존일까요?" 대답을 듣고(기다릴 반응: "다섯 시간이요", "잘 모르겠어요") 시간만으로 정하기 어렵다는 점을 짚는다. "공부로 오래 쓰는 것과, 그만두고 싶은데 못 그만두는 것은 같은 걸까요?"라고 되묻는다. 시연으로 사례 카드를 신호에 넣어 보이고, 오늘은 과의존을 세 가지 신호로 나누어 본다고 밝힌다.',
          student: '"그만 봐야지" 하고도 계속 보게 되는 상황을 가상의 친구 이야기로 짝에게 하나 말해 봅시다.',
          demo: DEMO('과의존의 신호', ['조절 실패', '문제적 결과'], ['줄이려 해도 못 줄여요', '늦잠으로 지각해요'], { '조절 실패': ['줄이려 해도 못 줄여요'], '문제적 결과': ['늦잠으로 지각해요'] }),
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 세 신호의 뜻 잇고 사례 나누기', minutes: 14, tool: 'mindmap',
            teacher: '"이 행동은 세 신호 가운데 어디에 가까울까요?" 조절 실패는 "줄이려 해도 안 된다", 현저성은 "스마트폰이 생활의 중심이 된다", 문제적 결과는 "문제가 생겨도 계속 쓴다"로 짧게 정리해 칠판에 둔다. 2번에서 "폰이 없으면 불안해요"를 문제적 결과에 넣는 학생에게 "그 마음은 스마트폰이 얼마나 중요해졌는지를 보여 주지 않을까요?"라고 묻는다. 세 신호는 겹칠 수 있고, 진단이 아니라 스스로 돌아보는 기준이라는 점을 짚는다.',
            task: '과의존의 세 신호와 뜻을 잇고, 가상 사례를 신호에 따라 나누어요.',
            levels: LV,
            items: [
              MM('신호와 그 뜻을 이어 보세요. 맞지 않는 카드는 남겨요.', '세 신호의 뜻', [{ id: 'f1', label: '조절 실패' }, { id: 'f2', label: '현저성' }, { id: 'f3', label: '문제적 결과' }], ['줄이려 해도 스스로 못 줄여요', '생활의 중심이 스마트폰이에요', '문제가 생겨도 계속 써요', '공부에 오래 써요'], { f1: '줄이려 해도 스스로 못 줄여요', f2: '생활의 중심이 스마트폰이에요', f3: '문제가 생겨도 계속 써요' }, 0.2),
              MS('가상 사례를 세 신호로 나누어 보세요.', '사례 속 신호', ['조절 실패', '현저성', '문제적 결과'], ['정한 시간을 매번 넘겨요', '끄고 다시 켜기를 반복', '폰 없으면 불안해요', '눈 뜨자마자 폰부터', '성적이 떨어져도 계속', '눈이 아파도 계속 봐요'], { '조절 실패': ['정한 시간을 매번 넘겨요', '끄고 다시 켜기를 반복'], '현저성': ['폰 없으면 불안해요', '눈 뜨자마자 폰부터'], '문제적 결과': ['성적이 떨어져도 계속', '눈이 아파도 계속 봐요'] }, 0.3),
              MP('과의존 신호가 아닌 사용만 골라 담아 보세요.', '과의존이 아닌 사용', ['과제 자료를 찾아요', '가족과 영상 통화해요', '정한 시간에 끄고 자요', '수업 중 몰래 게임해요'], ['과제 자료를 찾아요', '가족과 영상 통화해요', '정한 시간에 끄고 자요'], 0.25,
                { conclude: '과의존은 사용 시간보다 조절이 되는지, 생활의 중심이 되었는지, 문제가 생겨도 계속하는지로 살펴요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 신호에 맞는 대처 고르기', minutes: 13, tool: 'mindmap',
            teacher: '"신호마다 처방이 같을까요?" 조절 실패에는 환경을 바꾸는 장치, 현저성에는 대신할 활동, 문제적 결과에는 생활 회복과 도움 요청이 어울린다는 점을 짚는다. "의지만 있으면 돼요"라는 말에는 "의지에만 기대면 누구나 지쳐요. 환경을 바꾸는 쪽이 더 오래가지 않을까요?"라고 되묻는다. 3번은 짝과 말로 나눈다.',
            task: '세 신호에 어울리는 대처를 잇고, 도움을 청할 곳을 골라요.',
            levels: LV,
            items: [
              MM('신호와 어울리는 대처를 이어 보세요. 맞지 않는 카드는 남겨요.', '신호별 대처', [{ id: 'd1', label: '조절 실패' }, { id: 'd2', label: '현저성' }, { id: 'd3', label: '문제적 결과' }], ['잠금 앱·충전기 거실에', '운동·취미 시간 정하기', '생활 회복과 상담받기', '더 오래 참고 버티기'], { d1: '잠금 앱·충전기 거실에', d2: '운동·취미 시간 정하기', d3: '생활 회복과 상담받기' }, 0.3),
              MP('과의존이 걱정될 때 도움을 청할 곳만 골라 담아 보세요.', '도움받을 곳', ['스마트쉼센터', 'Wee클래스', '담임·상담 선생님', '같은 게임 커뮤니티'], ['스마트쉼센터', 'Wee클래스', '담임·상담 선생님'], 0.25,
                { conclude: '스스로 조절이 어렵다면 스마트쉼센터·Wee클래스 같은 전문 도움을 받을 수 있어요.' }),
              TALK('짝과 함께 세 신호 가운데 고등학생에게 가장 흔할 것 같은 신호와 그 대처를 하나 정해 말하고 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 배운 세 신호를 내 생활에 비춰 보면 어떤가요? 답은 마음속으로만 해도 돼요." 출구 1번에서 불안을 조절 실패에 넣은 학생에게는 현저성의 뜻을 다시 짚는다. 걱정되면 스마트쉼센터나 Wee클래스에 상담할 수 있다고 말해 준다.',
          exit: [
            XM('사례와 신호를 이어 보세요. 맞지 않는 카드는 남겨요.', '신호 다시 보기', [{ id: 'e1', label: '정한 시간을 자꾸 넘김' }, { id: 'e2', label: '수면이 줄어도 계속 씀' }], ['조절 실패', '문제적 결과', '건강한 사용'], { e1: '조절 실패', e2: '문제적 결과' }),
            XC('과의존을 살피는 기준으로 가장 알맞은 것은?', ['하루 사용 시간만 본다', '조절·생활의 중심·문제 발생 여부를 함께 본다', '친구보다 오래 쓰는지만 본다'], 1, '과의존은 시간보다 조절과 생활 영향을 함께 살펴요.'),
            XT('조절 실패 신호가 보일 때 바꿀 수 있는 환경 하나를 쓰세요.'),
          ],
        },
        ws: {
          title: '과의존의 세 신호',
          items: [
            { type: 'table', prompt: '세 신호의 뜻과 예를 쓰세요.', columns: ['신호', '뜻', '예'], cells: [['조절 실패', '', ''], ['현저성', '', ''], ['문제적 결과', '', '']], answer: '스스로 줄이기 어려움·정한 시간 넘김 / 생활의 중심이 됨·없으면 불안 / 문제가 생겨도 계속·성적 하락에도 사용' },
            { type: 'choice', prompt: '현저성에 해당하는 예에 ○ 하세요.', options: ['과제 검색', '눈 뜨자마자 폰부터 확인', '정한 시간에 끄기'], answer: '눈 뜨자마자 폰부터 확인' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '조절이 어려울 때는 의지보다 ___을 바꾸는 방법이 오래간다.', answer: '환경' },
            { type: 'short', prompt: '과의존이 걱정되는 친구에게 알려 줄 도움받을 곳을 두 곳 쓰세요.' },
          ],
        },
        notes: '자주 보이는 어려움: ① 사용 시간만으로 과의존을 판단한다 → 세 신호를 기준으로 보게 한다. ② 세 신호를 진단으로 여긴다 → 스스로 돌아보는 기준이며 진단은 전문가가 한다는 점을 짚는다. ③ 학생에게 자기 점수를 발표시키지 않는다 — 사례는 모두 가상이다.',
      }),
      LESSON(2, {
        title: '주의를 붙잡는 설계를 찾고 맞설 설정 고르기',
        objective: '자동 재생·무한 스크롤·알림 배지·연속 보상처럼 사용 시간을 늘리도록 만든 설계를 찾아내고, 그에 맞설 설정과 습관을 고를 수 있다.',
        draw: 'a paper-cut smartphone with an endless ribbon scrolling out of it and a hand holding scissors to cut the ribbon',
        banner: '설계를 알아차려요', extra: [{ motif: 'leaf', x: 330, y: 224, color: 'mint' }],
        intro: {
          teacher: '"영상 하나만 보려 했는데 한 시간이 지난 적, 왜 그럴까요?" 대답을 듣고(기다릴 반응: "재미있어서요", "제가 의지가 약해서요") "다음 영상이 저절로 시작되지 않았나요?"라고 묻는다. 많은 앱이 오래 머물도록 설계되어 있다는 점을 짚고, "내 탓만이 아니라 설계를 알면 맞설 수 있다"는 오늘의 초점을 밝힌다.',
          student: '앱을 쓰다 "어느새 오래 썼네" 했던 기능 하나를 짝과 말해 봅시다.',
          demo: DEMO('앱의 기능', ['오래 머물게 하는 설계', '스스로 정하는 설정'], ['다음 영상 자동 재생', '하루 사용 시간 제한'], { '오래 머물게 하는 설계': ['다음 영상 자동 재생'], '스스로 정하는 설정': ['하루 사용 시간 제한'] }),
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 설계와 그것이 노리는 마음 잇기', minutes: 13, tool: 'mindmap',
            teacher: '"이 기능은 내 어떤 마음을 건드릴까요?" 빨간 알림 배지는 확인하고 싶은 마음, 연속 출석 보상은 놓치기 싫은 마음을 건드린다는 식으로 정리한다. 2번에서 "추천 영상"을 나만을 위한 친절로만 보는 학생에게 "추천이 나를 위한 것만일까요, 앱에 오래 머물게 하기 위한 것이기도 할까요?"라고 묻는다. 앱을 쓰지 말자는 것이 아니라 알아차리자는 것임을 강조한다.',
            task: '주의를 붙잡는 설계를 찾아 그것이 건드리는 마음과 이어요.',
            levels: LV,
            items: [
              MM('설계와 그것이 건드리는 마음을 이어 보세요. 맞지 않는 카드는 남겨요.', '설계가 노리는 마음', [{ id: 'g1', label: '빨간 알림 배지' }, { id: 'g2', label: '연속 출석 보상' }, { id: 'g3', label: '무한 스크롤' }], ['당장 확인하고 싶은 마음', '기록을 놓치기 싫은 마음', '끝을 몰라 멈추기 어려움', '쉬고 싶은 마음'], { g1: '당장 확인하고 싶은 마음', g2: '기록을 놓치기 싫은 마음', g3: '끝을 몰라 멈추기 어려움' }, 0.25),
              MS('앱의 기능을 두 가지로 나누어 보세요.', '앱 기능 살피기', ['오래 머물게 하는 설계', '스스로 정하는 설정'], ['다음 영상 자동 재생', '좋아요 수 실시간 표시', '방해 금지 모드', '알림 요약 시간 지정'], { '오래 머물게 하는 설계': ['다음 영상 자동 재생', '좋아요 수 실시간 표시'], '스스로 정하는 설정': ['방해 금지 모드', '알림 요약 시간 지정'] }, 0.25),
              MP('사용 시간을 늘리도록 만든 설계만 골라 담아 보세요.', '시간을 늘리는 설계', ['끝없는 피드', '한정 시간 이벤트', '연속 접속 보상', '사용 시간 알림'], ['끝없는 피드', '한정 시간 이벤트', '연속 접속 보상'], 0.3,
                { conclude: '오래 쓰게 되는 것은 의지만의 문제가 아니라 설계 때문이기도 해요. 알아차리면 맞설 수 있어요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 설계에 맞설 설정과 습관 고르기', minutes: 14, tool: 'mindmap',
            teacher: '"설계가 나를 끌어당긴다면, 나는 무엇으로 균형을 맞출까요?" 설계마다 맞설 설정(자동 재생 끄기, 알림 끄기, 흑백 화면 등)과 습관(앱 위치 옮기기, 정해진 시간에만 확인)을 짝짓게 한다. "설정은 귀찮아서 안 해요"라는 말에는 "한 번 바꾸면 매일 참는 수고가 줄어들어요"라고 답한다. 3번은 짝과 말로 나눈다.',
            task: '주의를 붙잡는 설계와 그에 맞설 설정·습관을 이어요.',
            levels: LV,
            items: [
              MM('설계와 맞설 방법을 이어 보세요. 맞지 않는 카드는 남겨요.', '설계에 맞서기', [{ id: 'h1', label: '자동 재생' }, { id: 'h2', label: '알림 배지' }, { id: 'h3', label: '무한 스크롤' }], ['자동 재생 끄기', '앱 알림 끄기', '타이머 맞추고 보기', '알림 소리 키우기'], { h1: '자동 재생 끄기', h2: '앱 알림 끄기', h3: '타이머 맞추고 보기' }, 0.25),
              MP('공부 시간에 주의를 지키는 설정·습관만 골라 담아 보세요.', '공부 시간 지키기', ['폰을 다른 방에 두기', '방해 금지 모드 켜기', '첫 화면에서 SNS 빼기', '알림 미리보기 켜기'], ['폰을 다른 방에 두기', '방해 금지 모드 켜기', '첫 화면에서 SNS 빼기'], 0.25,
                { conclude: '설정 한 번과 작은 습관이 매일의 유혹을 줄여 줘요.' }),
              TALK('짝과 함께 오늘 바로 바꿀 설정 하나를 정하고 그 까닭을 말한 뒤 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 바꾸기로 한 설정은 무엇인가요? 일주일 뒤에 효과가 있었는지 스스로 돌아봐요." 출구 1번에서 방해 금지 모드를 설계에 넣은 학생에게는 내가 정하는 설정과 앱이 정한 설계의 차이를 다시 짚는다.',
          exit: [
            XS('기능을 두 가지로 나누어 보세요.', '설계일까 설정일까', ['오래 머물게 하는 설계', '스스로 정하는 설정'], ['연속 접속 보상', '끝없는 피드', '방해 금지 모드', '사용 시간 제한'], { '오래 머물게 하는 설계': ['연속 접속 보상', '끝없는 피드'], '스스로 정하는 설정': ['방해 금지 모드', '사용 시간 제한'] }),
            XC('자동 재생 때문에 영상을 오래 보게 될 때 가장 알맞은 대처는?', ['의지로만 참는다', '자동 재생을 끄고 타이머를 맞춘다', '더 재미있는 앱을 찾는다'], 1, '설계에는 설정으로 맞서는 것이 오래가요.'),
            XT('내가 자주 쓰는 앱에서 찾은 "오래 머물게 하는 설계" 하나와 맞설 방법을 쓰세요.'),
          ],
        },
        ws: {
          title: '주의를 붙잡는 설계와 맞설 설정',
          items: [
            { type: 'table', prompt: '설계와 맞설 방법을 쓰세요.', columns: ['설계', '노리는 마음', '맞설 방법'], cells: [['자동 재생', '', ''], ['알림 배지', '', ''], ['연속 출석 보상', '', '']], answer: '멈추기 어려움·자동 재생 끄기 / 확인하고 싶음·알림 끄기 / 놓치기 싫음·보상 신경 끄기' },
            { type: 'choice', prompt: '스스로 정하는 설정에 ○ 하세요.', options: ['끝없는 피드', '방해 금지 모드', '한정 시간 이벤트'], answer: '방해 금지 모드' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '오래 쓰게 되는 것은 의지만이 아니라 앱의 ___ 때문이기도 하다.', answer: '설계' },
            { type: 'short', prompt: '일주일 동안 지킬 나만의 설정·습관 두 가지를 쓰세요.' },
          ],
        },
        notes: '자주 보이는 어려움: ① 오래 쓰는 것을 모두 자기 탓으로만 여긴다 → 설계를 알아차리게 해 죄책감보다 대처로 이끈다. ② 앱을 쓰지 말라는 수업으로 받아들인다 → 알아차리고 조절하는 것이 목표임을 짚는다. ③ 특정 앱·기업 이름을 쓰지 않는다.',
      }),
    ],
  });
})();
