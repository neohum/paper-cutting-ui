/* 고1 창체 계기교육 — 독도의 날(10월 25일) (차시 2개, g10 경로 확인용 예시 단원).
 * 근거: 교육부 독도교육 계기교육, 외교부 독도 누리집·동북아역사재단 독도 자료의 공식 사료. 사료 날짜·내용은 그 자료의 서술만 쓴다.
 * 정치적 중립: 정부의 공식 입장과 사료를 근거로 읽고 판별하는 데 그치며, 특정 국가의 국민 전체를 비난하는 표현은 쓰지 않는다. */
(function () {
  const UNIT = 'g10-창체-dokdo';
  const TITLE = '독도의 날 계기교육';
  const base = (n) => ({
    id: `g10-cc-dokdo-0${n}`, schema: 'edu-lesson.v1',
    catalog: { unit: UNIT, lesson: n },
    grade: 10, subject: '창체', unitTitle: TITLE,
    standards: [],
    minutes: 40,
    formats: ['chromebook', 'projector', 'print'],
  });
  const PROMPT = (what) => `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`;
  const SCENE = (text, extra = []) => ({ viewBox: [480, 270], layers: [
    { motif: 'sun', x: 410, y: 58, s: 0.8 }, { motif: 'cloud', x: 110, y: 52 }, { motif: 'wave', y: 220 },
    { motif: 'mountain', x: 200, y: 196, color: 'mint', s: 0.7 }, { motif: 'mountain', x: 290, y: 200, color: 'sky', s: 0.6 },
    { motif: 'bird', x: 340, y: 96 }, ...extra,
    { motif: 'text', x: 240, y: 132, text, size: 22 },
  ] });
  const TO = (prompt, cards, order, d, more) => ({ prompt, toolOptions: { cards, axis: ['옛날', '오늘날'] }, target: { order }, difficulty: d, ...more });
  const TM = (prompt, slots, cards, match, d, more) => ({ prompt, toolOptions: { mode: 'match', slots, cards, axis: ['옛날', '오늘날'] }, target: { match }, difficulty: d, ...more });
  const MS = (prompt, topic, slots, cards, sort, d, more) => ({ prompt, toolOptions: { topic, slots, cards }, target: { sort }, difficulty: d, ...more });
  const MM = (prompt, topic, slots, cards, match, d, more) => ({ prompt, toolOptions: { mode: 'match', topic, slots, cards }, target: { match }, difficulty: d, ...more });
  const MP = (prompt, topic, cards, pick, d, more) => ({ prompt, toolOptions: { mode: 'pick', topic, basket: topic, cards }, target: { pick }, difficulty: d, ...more });
  const EB = (prompt, situation, choices, choice, d, more) => ({ prompt, toolOptions: { mode: 'branch', situation, choices }, target: { choice }, difficulty: d, ...more });
  const LV = { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } };
  const LVB = { easy: { showBack: true }, base: {}, challenge: {} };
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

  // 사료 카드(외교부 독도 누리집·동북아역사재단 자료의 서술)
  const S = {
    sejong: { id: 'sejong', text: '세종실록 지리지: 두 섬이 서로 보임' },
    bakufu: { id: 'bakufu', text: '에도 막부의 울릉도 도해 금지' },
    dajokan: { id: 'dajokan', text: '태정관 지령: 한 섬은 일본과 무관' },
    edict: { id: 'edict', text: '대한제국 칙령 제41호: 석도 관할' },
    shimane: { id: 'shimane', text: '시마네현 고시 제40호: 편입 주장' },
    scapin: { id: 'scapin', text: '연합국 각서 제677호: 통치 범위서 제외' },
    peace: { id: 'peace', text: '평화선 선언(인접 해양 주권)' },
  };

  PaperLessons.registerUnit({
    id: 'g10-cc-dokdo', schema: 'edu-unit.v1', catalogUnit: UNIT,
    grade: 10, subject: '창체', unitTitle: TITLE,
    flow: '10월 25일 독도의 날에 맞춰 독도 영토 주권을 감정이 아니라 사료와 근거로 말하는 힘을 기르는 두 시간짜리 계기교육입니다. 1차시에는 조선 시대 관찬 기록부터 대한제국 칙령 제41호, 광복 이후 연합국 문서까지 공식 자료에 실린 사료를 시대 순으로 놓고, 사료마다 무엇을 보여 주는지 읽습니다. 2차시에는 독도에 관한 여러 주장을 사료로 확인되는 사실·의견·근거 없는 주장으로 가려내고, 온라인과 토의에서 왜곡을 만났을 때 공식 자료를 근거로 정중하게 대응하는 방법을 고릅니다. 정부의 공식 입장과 사료를 근거로 삼되, 특정 국가의 국민 전체를 비난하는 말은 쓰지 않도록 이끕니다.',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '독도 사료를 시대 순으로 놓고 무엇을 말하는지 읽기',
        objective: '독도 관련 주요 사료를 시대 순으로 정리하고, 각 사료가 영토 주권의 근거로 무엇을 보여 주는지 설명할 수 있다.',
        draw: 'two rocky islets rising from layered paper waves under a soft sky, with an old paper scroll and a stamped decree floating beside them',
        banner: '사료로 읽는 독도', extra: [{ motif: 'star', x: 70, y: 110, color: 'buttercup', s: 0.6 }],
        intro: {
          teacher: '"10월 25일이 왜 독도의 날일까요?" 몇 명의 대답을 듣고(기다릴 반응: "독도가 우리 땅이라서요", "모르겠어요") 1900년 10월 25일 대한제국이 칙령 제41호로 석도(독도)를 울도군 관할에 넣었다는 점을 알린다. "그냥 우리 땅이니까요"에서 멈추는 답이 나오면 "외국 친구가 근거를 물으면 무엇을 보여 줄 수 있을까요?"라고 되묻는다. 시연 단추로 사료 카드가 시간 띠에 놓이는 모습을 보여 주고, 오늘은 공식 자료의 사료를 차례대로 읽는다고 밝힌다.',
          student: '독도에 대해 알고 있는 것 한 가지와, 그것을 어디에서 알게 되었는지 짝에게 말해 봅시다.',
          demo: { tool: 'timeline', options: { cards: [S.sejong, S.edict], axis: ['옛날', '오늘날'], shuffle: false }, sequence: [{ order: ['sejong', 'edict'] }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 사료를 시간 띠에 차례대로 놓기', minutes: 14, tool: 'timeline',
            teacher: '"이 기록을 남긴 쪽은 누구이고, 언제쯤일까요?" 카드를 놓을 때마다 그 사료를 만든 주체(조선 왕조, 일본 정부, 대한제국, 연합국)를 소리 내어 말하게 한다. 1번에서 태정관 지령을 막부 도해 금지보다 앞에 두는 학생에게는 "태정관은 메이지 정부의 기관이에요. 막부가 먼저일까요, 메이지 정부가 먼저일까요?"라고 묻는다. 2번에서 시마네현 고시를 칙령 제41호보다 앞에 두는 학생이 많다 — 칙령이 5년 앞선다는 점이 왜 중요한지 3번을 마친 뒤 함께 짚는다.',
            task: '공식 자료에 실린 독도 사료 카드를 일어난 차례대로 시간 띠에 놓고, 연도와 사료를 이어요.',
            levels: LV,
            items: [
              TO('조선 시대와 일본 에도·메이지 시대 사료를 일어난 차례대로 놓아 보세요.', [S.dajokan, S.sejong, S.bakufu], ['sejong', 'bakufu', 'dajokan'], 0.2),
              TO('1900년 이후 사료를 일어난 차례대로 놓아 보세요.', [S.scapin, S.edict, S.peace, S.shimane], ['edict', 'shimane', 'scapin', 'peace'], 0.3),
              TM('연도와 그해의 사료를 이어 보세요. 맞지 않는 카드는 남겨요.', [{ id: 'y1454', label: '1454년' }, { id: 'y1900', label: '1900년' }, { id: 'y1946', label: '1946년' }], [S.sejong, S.edict, S.scapin, S.shimane], { y1454: 'sejong', y1900: 'edict', y1946: 'scapin' }, 0.35,
                { conclude: '대한제국 칙령 제41호(1900)는 시마네현 고시(1905)보다 5년 앞서 독도를 근대 법령으로 관할했어요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 사료가 보여 주는 것 읽기', minutes: 13, tool: 'mindmap',
            teacher: '"이 사료만으로 무엇을 말할 수 있고, 무엇은 말할 수 없을까요?" 1번에서 세종실록 지리지를 "독도에 사람이 살았다는 증거"로 잇는 학생에게는 원문이 말하는 것은 두 섬이 보인다는 지리 인식이라고 바로잡는다. 2번에서 연합국 문서를 한국 기록으로 넣는 학생에게는 "이 문서를 낸 기관은 어디인가요?"라고 묻는다. 사료를 과장하지 않는 것이 오히려 설득력을 높인다는 점을 강조한다.',
            task: '사료와 그 사료가 보여 주는 것을 잇고, 사료를 만든 주체에 따라 나누어요.',
            levels: LV,
            items: [
              MM('사료와 그 사료가 보여 주는 것을 이어 보세요. 맞지 않는 카드는 남겨요.', '사료가 말하는 것', [{ id: 'r1', label: '『세종실록』 「지리지」' }, { id: 'r2', label: '태정관 지령' }, { id: 'r3', label: '대한제국 칙령 제41호' }], ['맑은 날 독도가 보인다는 지리 인식', '일본 정부가 독도를 일본과 무관하다 판단', '독도를 근대 법령으로 행정구역에 편제', '독도에 큰 마을이 있었다는 기록'], { r1: '맑은 날 독도가 보인다는 지리 인식', r2: '일본 정부가 독도를 일본과 무관하다 판단', r3: '독도를 근대 법령으로 행정구역에 편제' }, 0.3),
              MS('사료를 만든 주체에 따라 나누어 보세요.', '누가 남긴 기록일까', ['한국(조선·대한제국·정부)', '일본 정부·관청', '연합국'], [S.sejong, S.edict, S.peace, S.dajokan, S.shimane, S.scapin], { '한국(조선·대한제국·정부)': ['sejong', 'edict', 'peace'], '일본 정부·관청': ['dajokan', 'shimane'], '연합국': ['scapin'] }, 0.3,
                { conclude: '상대국 정부의 기록과 제3자(연합국) 문서도 독도가 일본 영토가 아니었음을 보여 주는 근거가 돼요.' }),
              MP('10월 25일 독도의 날과 직접 관련 있는 것만 골라 담아 보세요.', '독도의 날', ['1900년 대한제국 칙령 제41호 반포', '울도군 설치와 석도 관할', '1945년 광복', '1905년 시마네현 고시'], ['1900년 대한제국 칙령 제41호 반포', '울도군 설치와 석도 관할'], 0.2),
            ],
          },
        ],
        wrap: {
          teacher: '"외국 친구가 독도가 왜 한국 땅이냐고 묻는다면, 오늘 본 사료 가운데 무엇을 먼저 보여 주겠어요?" 출구 1번에서 평화선을 칙령 제41호보다 앞에 두는 학생에게는 평화선이 광복 이후인 1952년의 선언임을 다시 짚는다. 2번에서 셋째 보기를 고른 학생에게는 "사료가 말하지 않는 것을 덧붙이면 상대가 그 부분을 반박해요"라고 말해 준다.',
          exit: [
            { type: 'tool', tool: 'timeline', options: { cards: [S.peace, S.bakufu, S.edict], axis: ['옛날', '오늘날'] }, state: { at: {} }, prompt: '세 사료를 일어난 차례대로 시간 띠에 놓아 보세요.', target: { order: ['bakufu', 'edict', 'peace'] }, difficulty: 0.2 },
            { type: 'choice', prompt: '사료를 근거로 독도를 설명하는 태도로 가장 알맞은 것은 무엇인가요?', options: ['사료를 만든 주체와 시기를 밝히고 그 사료가 말하는 만큼만 말한다', '설득력을 높이려고 사료에 없는 내용도 덧붙인다', '사료보다 큰 목소리로 주장하는 것이 중요하다'], answer: 0, difficulty: 0.15, explain: '주체·시기·내용을 정확히 밝힐 때 사료는 가장 힘 있는 근거가 돼요.' },
            { type: 'short', prompt: '오늘 본 사료 가운데 가장 설득력 있다고 생각한 것 하나와 그 까닭을 한 문장으로 쓰세요.' },
            { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' },
          ],
        },
        ws: {
          title: '사료로 읽는 독도',
          items: [
            { type: 'table', prompt: '사료의 연도·주체·내용을 정리하세요.', columns: ['사료', '연도', '만든 주체', '보여 주는 것'], cells: [['『세종실록』 「지리지」', '', '', ''], ['태정관 지령', '', '', ''], ['대한제국 칙령 제41호', '', '', ''], ['연합국 최고사령관 각서 제677호', '', '', '']], answer: '1454·조선·두 섬이 보이는 지리 인식 / 1877·일본 메이지 정부·일본과 관계없음 / 1900·대한제국·석도를 울도군 관할로 / 1946·연합국·일본 통치 범위에서 제외' },
            { type: 'choice', prompt: '독도의 날(10월 25일)의 유래가 된 사료에 ○ 하세요.', options: ['시마네현 고시 제40호', '대한제국 칙령 제41호', '평화선 선언'], answer: '대한제국 칙령 제41호' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '대한제국 칙령 제41호(___년)는 시마네현 고시(___년)보다 앞서 독도를 관할했다.', answer: '1900, 1905' },
            { type: 'short', prompt: '사료를 근거로 말할 때 조심해야 할 점을 한 가지 쓰세요.' },
          ],
          easy: {
            note: '사료 이름 옆의 연도부터 채운 뒤 차례를 정해 보세요.',
            items: [
              { type: 'table', prompt: '사료와 연도를 이으세요.', columns: ['사료', '연도'], cells: [['『세종실록』 「지리지」', ''], ['대한제국 칙령 제41호', ''], ['시마네현 고시 제40호', '']], answer: '1454, 1900, 1905' },
              { type: 'choice', prompt: '가장 먼저 나온 사료에 ○ 하세요.', options: ['태정관 지령', '『세종실록』 「지리지」'], answer: '『세종실록』 「지리지」' },
              { type: 'blank', prompt: '빈칸을 채우세요.', text: '독도의 날은 ___월 ___일이다.', answer: '10, 25' },
              { type: 'short', prompt: '오늘 새로 안 사료 이름을 하나 쓰세요.' },
            ],
          },
        },
        diff: {
          easy: '카드를 놓으면 맞는지 바로 알려 주고, 틀린 카드는 사료를 만든 주체를 떠올려 다시 놓아요.',
          base: '모든 카드를 놓은 뒤 확인을 눌러 스스로 고쳐요.',
          challenge: '카드 순서가 섞여 나오고, 사료가 말하지 않는 과장된 해석 카드가 함께 나와요.',
        },
        notes: '자주 보이는 어려움: ① "우리 땅이니까"에서 멈추고 근거를 대지 못한다 → 사료의 주체·시기·내용 세 가지로 말하게 한다. ② 사료를 과장한다(세종실록에 사람이 살았다고 적혀 있다 등) → 원문이 말하는 만큼만 쓰도록 바로잡는다. ③ 일본 정부의 주장과 일본 사람 전체를 같은 것으로 본다 → 주장과 사람을 나누어 말하게 한다.',
      }),

      LESSON(2, {
        title: '독도에 관한 주장을 사실·의견·왜곡으로 가려 대응하기',
        objective: '독도에 관한 주장을 공식 자료의 사료로 확인되는 사실·의견·근거 없는 주장으로 가려내고, 왜곡을 만났을 때 근거를 들어 정중하게 대응하는 방법을 고를 수 있다.',
        draw: 'a student at a paper laptop comparing a speech bubble with an official paper document and a magnifying glass, with layered waves and two islets in the background',
        banner: '근거로 말해요', extra: [{ motif: 'leaf', x: 80, y: 200, color: 'mint', s: 0.7 }],
        intro: {
          teacher: '"\'독도는 1905년 전에는 아무도 모르는 섬이었다\'는 글을 보았다면, 지난 시간 사료 가운데 무엇으로 답할 수 있을까요?" 대답을 듣고(기다릴 반응: "세종실록 지리지요", "칙령 제41호요") 시연 단추로 주장 카드가 두 칸으로 나뉘는 모습을 보여 준다. "그런 글은 무조건 욕해 줘야 해요"가 나오면 "욕설 댓글을 본 다른 나라 사람은 누구 말을 더 믿을까요?"라고 되묻고, 오늘은 주장을 가려내고 근거로 대응하는 방법을 익힌다고 밝힌다.',
          student: '인터넷에서 사실인지 헷갈리는 글을 본 경험을 떠올려, 어떻게 확인했는지 짝에게 말해 봅시다.',
          demo: { tool: 'mindmap', options: { topic: '독도에 관한 말', slots: ['사료로 확인돼요', '근거가 없어요'], cards: ['칙령 제41호는 1900년에 나왔다', '독도는 늘 주인 없는 섬이었다'], shuffle: false }, sequence: [{ sort: { '사료로 확인돼요': ['칙령 제41호는 1900년에 나왔다'], '근거가 없어요': ['독도는 늘 주인 없는 섬이었다'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 주장을 사실·의견·근거 없는 주장으로 가려내기', minutes: 14, tool: 'mindmap',
            teacher: '"이 문장은 사료로 확인할 수 있나요, 아니면 누군가의 판단인가요?" 1번에서 각서 제677호가 독도를 일본 통치 범위에 넣었다는 카드를 사실로 두는 학생에게는 지난 시간 표를 펴 보게 한다. 2번에서 "독도 교육은 고등학생에게 더 필요하다"를 사실로 두는 학생에게는 "이 말이 맞는지 틀리는지 사료로 가릴 수 있나요?"라고 묻는다. 3번에서 조회수가 많은 글을 믿을 만하다고 고르는 학생에게는 조회수는 많이 본 것이지 맞다는 뜻이 아님을 짚는다.',
            task: '독도에 관한 문장을 사료로 확인되는 사실과 근거 없는 주장, 의견으로 가려내고 믿을 만한 자료를 골라요.',
            levels: LV,
            items: [
              MS('독도에 관한 문장을 두 가지로 나누어 보세요.', '독도에 관한 말', ['사료로 확인돼요', '근거가 없어요'], ['칙령 제41호에 석도 관할이 적혀 있다', '태정관 지령은 독도를 일본과 무관하다 했다', '1905년 전 독도는 아무도 몰랐다', '각서 제677호가 독도를 일본에 넣었다'], { '사료로 확인돼요': ['칙령 제41호에 석도 관할이 적혀 있다', '태정관 지령은 독도를 일본과 무관하다 했다'], '근거가 없어요': ['1905년 전 독도는 아무도 몰랐다', '각서 제677호가 독도를 일본에 넣었다'] }, 0.3),
              MS('문장을 사실과 의견으로 나누어 보세요.', '사실일까 의견일까', ['사실', '의견'], ['시마네현 고시는 1905년에 나왔다', '독도는 동도·서도와 바위섬들로 되어 있다', '독도는 사료로 차분히 말해야 설득력 있다', '독도 교육은 고등학생에게 더 필요하다'], { '사실': ['시마네현 고시는 1905년에 나왔다', '독도는 동도·서도와 바위섬들로 되어 있다'], '의견': ['독도는 사료로 차분히 말해야 설득력 있다', '독도 교육은 고등학생에게 더 필요하다'] }, 0.25),
              MP('독도를 확인할 때 믿을 만한 공식 자료만 골라 담아 보세요.', '믿을 만한 자료', ['외교부 독도 누리집', '동북아역사재단 독도 자료', '출처가 없는 짧은 영상', '조회수가 많은 익명 게시글'], ['외교부 독도 누리집', '동북아역사재단 독도 자료'], 0.2,
                { conclude: '사실은 사료로 확인하고, 의견은 근거와 함께 말하며, 출처는 공식 기관에서 찾아요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 왜곡을 만났을 때 대응 방법 고르기', minutes: 13, tool: 'emotion',
            teacher: '"이렇게 대응하면 그 글을 읽는 다른 사람들은 어떻게 생각할까요?" 보기를 고를 때마다 결과 칸을 읽고 이유를 한 문장으로 말하게 한다. 1번에서 욕설 댓글을 고르는 학생에게는 근거 없는 글보다 욕설이 더 눈에 띄어 주장 전체의 신뢰를 떨어뜨린다는 점을 짚는다. 2번에서 친구의 말에 동조하는 보기를 고르는 학생이 있으면 "정부의 주장과 그 나라 사람 한 명 한 명은 같은가요?"라고 묻는다. 3번에서는 출처를 밝히는 습관이 발표 자료의 힘이라는 점을 강조한다.',
            task: '독도 왜곡을 만난 상황에서 어떻게 대응할지 고르고, 그 결과를 살펴봐요.',
            levels: LVB,
            items: [
              EB('외국어 누리 소통망(SNS)에서 "독도는 원래 주인 없는 섬"이라는 글을 보았어요. 어떻게 할지 골라 보세요.', '외국어로 된 게시글에 "독도는 1905년까지 주인 없는 섬이었다"고 적혀 있어요.', [
                { id: 'swear', text: '화가 나서 욕설 댓글을 달아요', result: '다른 사람들이 욕설만 기억하고 원래 글을 더 믿게 돼요.', mood: '화남', why: '욕설은 근거가 아니라서 내 주장의 신뢰를 떨어뜨려요.' },
                { id: 'source', text: '칙령 제41호와 외교부 누리집 주소를 들어 정중하게 반박해요', result: '읽는 사람들이 공식 자료를 직접 확인할 수 있어요.', mood: '뿌듯함' },
                { id: 'share', text: '놀라서 확인 없이 친구들에게 퍼뜨려요', result: '잘못된 주장이 더 많은 사람에게 퍼져요.', mood: '걱정', why: '확인 없이 퍼뜨리면 왜곡을 돕게 돼요.' }], 'source', 0.25),
              EB('모둠 토의 중 친구가 "그 나라 사람들은 다 나빠"라고 말해요. 어떻게 할지 골라 보세요.', '독도 토의를 하다가 친구가 화가 나서 특정 나라 사람 전체를 나쁘게 말해요.', [
                { id: 'agree', text: '"맞아, 다 똑같아"라고 맞장구쳐요', result: '토의가 사료 이야기에서 멀어지고 감정만 커져요.', mood: '짜증', why: '주장과 사람을 같은 것으로 보면 근거로 말할 수 없어요.' },
                { id: 'split', text: '"정부의 주장과 사람은 나누어 보고, 주장은 사료로 반박하자"고 말해요', result: '모둠이 다시 사료 표를 보며 근거를 정리해요.', mood: '편안함' },
                { id: 'silent', text: '불편하지만 아무 말도 하지 않아요', result: '토의가 같은 말만 되풀이하며 끝나요.', mood: '걱정', why: '말하지 않으면 토의가 근거로 돌아오지 못해요.' }], 'split', 0.3),
              EB('발표 자료에 넣을 독도 지도 그림의 출처를 모르겠어요. 어떻게 할지 골라 보세요.', '검색해서 찾은 지도 그림에 출처가 적혀 있지 않아요.', [
                { id: 'use', text: '보기 좋으니 그대로 넣어요', result: '질문을 받았을 때 그림의 근거를 설명하지 못해요.', mood: '불안', why: '출처를 모르는 자료는 근거로 쓸 수 없어요.' },
                { id: 'replace', text: '공식 기관이 낸 지도로 바꾸고 출처를 적어요', result: '듣는 사람이 출처를 확인하고 발표를 믿어요.', mood: '뿌듯함' },
                { id: 'vague', text: '출처 칸에 "인터넷"이라고만 적어요', result: '누구도 그 자료를 다시 찾을 수 없어요.', mood: '걱정', why: '출처는 다시 찾아갈 수 있게 기관과 자료 이름을 적어요.' }], 'replace', 0.2),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 배운 대응 방법을 한 문장으로 줄이면 무엇일까요?" 출구 1번에서 "평화선은 1952년에 선포되었다"를 근거 없는 쪽에 둔 학생은 지난 시간 시간 띠를 다시 보게 한다. 2번에서 첫째 보기를 고른 학생에게는 욕설이 주장의 신뢰를 떨어뜨린다는 점을, 셋째 보기를 고른 학생에게는 확인 없는 공유가 왜곡을 돕는다는 점을 짚는다.',
          exit: [
            { type: 'tool', tool: 'mindmap', options: { topic: '친구가 들은 말', slots: ['사료로 확인돼요', '근거가 없어요'], cards: ['평화선은 1952년에 선포되었다', '에도 막부는 울릉도 도해를 금지했다', '독도는 지도에 나온 적이 없다', '칙령 제41호에는 독도가 빠져 있다'] }, state: { at: {} }, prompt: '친구가 들은 말을 두 가지로 나누어 보세요.',
              target: { sort: { '사료로 확인돼요': ['평화선은 1952년에 선포되었다', '에도 막부는 울릉도 도해를 금지했다'], '근거가 없어요': ['독도는 지도에 나온 적이 없다', '칙령 제41호에는 독도가 빠져 있다'] } }, difficulty: 0.25 },
            { type: 'choice', prompt: '독도 왜곡 글에 대응하는 방법으로 가장 알맞은 것은 무엇인가요?', options: ['강한 말로 상대를 깎아내린다', '공식 자료의 사료와 출처를 들어 정중하게 바로잡는다', '확인하지 않고 빠르게 널리 퍼뜨린다'], answer: 1, difficulty: 0.1, explain: '근거와 출처가 있는 정중한 글이 읽는 사람을 설득해요.' },
            { type: 'short', prompt: '"독도는 주인 없는 섬이었다"는 글에 달 답글을 사료 하나를 들어 한 문장으로 쓰세요.' },
            { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' },
          ],
        },
        ws: {
          title: '근거로 대응하기',
          items: [
            { type: 'table', prompt: '주장을 읽고 사실·의견·근거 없는 주장 중 무엇인지 쓰고, 근거 없는 주장에는 반박할 사료를 쓰세요.', columns: ['주장', '종류', '반박할 사료'], cells: [['1905년 전 독도는 주인 없는 섬이었다', '', ''], ['칙령 제41호는 1900년에 나왔다', '', ''], ['독도 문제는 차분히 말해야 한다', '', '']], answer: '근거 없는 주장·칙령 제41호(1900) / 사실 / 의견' },
            { type: 'choice', prompt: '믿을 만한 자료에 ○ 하세요.', options: ['출처가 없는 짧은 영상', '외교부 독도 누리집', '익명 게시글'], answer: '외교부 독도 누리집' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '왜곡을 만나면 ___ 없이 퍼뜨리지 않고, 공식 자료의 ___를 들어 정중하게 바로잡는다.', answer: '확인, 사료(출처)' },
            { type: 'short', prompt: '정부의 주장과 그 나라 사람을 나누어 보아야 하는 까닭을 쓰세요.' },
          ],
          easy: {
            note: '"사료로 확인할 수 있을까?"를 먼저 물어 보세요.',
            items: [
              { type: 'table', prompt: '사실이면 ○, 의견이면 △를 쓰세요.', columns: ['문장', '○ / △'], cells: [['시마네현 고시는 1905년에 나왔다', ''], ['독도 공부는 재미있다', '']], answer: '○, △' },
              { type: 'choice', prompt: '정중한 대응에 ○ 하세요.', options: ['욕설 댓글 달기', '출처를 들어 바로잡기'], answer: '출처를 들어 바로잡기' },
              { type: 'blank', prompt: '빈칸을 채우세요.', text: '독도를 확인할 때는 ___ 기관의 자료를 본다.', answer: '공식' },
              { type: 'short', prompt: '왜곡 글을 보았을 때 내가 할 일을 한 문장 쓰세요.' },
            ],
          },
        },
        diff: {
          easy: '카드를 놓으면 맞는지 바로 알려 주고, 갈림길 문항은 결과 칸이 처음부터 보여요.',
          base: '모든 카드를 놓은 뒤 확인을 눌러 스스로 고쳐요.',
          challenge: '카드 순서가 섞여 나오고, 사실처럼 보이는 근거 없는 주장을 가려내요.',
        },
        notes: '자주 보이는 어려움: ① 강한 감정 표현을 대응으로 여긴다 → 제3자가 무엇을 믿게 되는지 결과로 보여 준다. ② 의견을 사실처럼 말한다 → "사료로 가릴 수 있나?"라는 질문을 습관으로 만든다. ③ 특정 국가의 국민 전체를 비난한다 → 정부의 주장과 사람을 나누고, 주장은 사료로 반박하게 한다.',
      }),
    ],
  });
})();
