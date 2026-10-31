/* 중1 창체 법정교육 — 다문화 이해 (2차시). 근거: 다문화가족지원법 제5조·시행령 제10조의2, 교육부 지침 연 2시간.
 * 특정 국가·민족을 평가하는 문장은 쓰지 않고, 일반화의 구조만 다룬다. 통계 숫자는 쓰지 않는다. 장면·인물은 가명. */
(function () {
  const G = 7; const CODE = 'multi';
  const UNIT = `g${G}-창체-${CODE}`;
  const TITLE = '다문화 이해';
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
    flow: '중학교 첫 다문화 이해 수업입니다. 1차시에는 고정관념(생각)·편견(감정과 태도)·차별(행동)을 구별하고, 한 사람의 경험으로 한 나라 전체를 판단하는 일반화가 어떻게 차별로 이어지는지 사례로 봅니다. 2차시에는 다문화 가정 친구와 나누는 대화 장면에서 "어느 나라 사람이야?"를 되풀이하거나 외모·발음을 화제로 삼는 대신, 한 사람으로 대하는 말을 고릅니다. 다문화 가정 학생이 반에 있어도 그 학생을 예로 들거나 발표시키지 않습니다. 2학년(무심코 한 말, 문화 다양성과 인권), 3학년(혐오 표현과 세계시민 행동)으로 이어집니다.',
    refs: {},
    lessons: [
      LESSON(1, {
        title: '고정관념·편견·차별을 사례로 구별하기',
        objective: '고정관념·편견·차별의 차이를 말하고, 한 사람으로 한 나라를 판단하는 일반화의 문제를 사례에서 찾을 수 있다.',
        draw: 'many different paper-cut faces and flags of colorful patterns gathered around a big question mark, students thinking',
        banner: '한 사람은 한 사람', extra: [{ motif: 'star', x: 300, y: 96, color: 'lavender' }],
        intro: {
          teacher: '"우리 반 한 명이 지각했다고 \'이 반 학생들은 다 게으르다\'는 소문이 나면 어떨까요?" 대답을 듣고(기다릴 반응: "억울해요", "한 명만 그런 거예요") 시연으로 문장 카드를 나눈다. "어느 나라 사람은 원래 그래요"라는 말이 나오면 "그 나라 사람을 몇 명이나 만나 보고 한 말일까요?"라고 되묻는다. 오늘은 생각이 어떻게 행동으로 이어지는지 구별해 본다고 밝힌다.',
          student: '"○○는 다 그래"라는 말을 들었을 때 억울했던 가상의 장면을 떠올려 짝에게 말해 봅시다.',
          demo: DEMO('생각과 행동', ['고정관념', '차별'], ['그 나라 사람은 다 같아', '그 나라 출신이라 모둠에서 빼요'], { '고정관념': ['그 나라 사람은 다 같아'], '차별': ['그 나라 출신이라 모둠에서 빼요'] }),
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 고정관념·편견·차별 나누기', minutes: 14, tool: 'mindmap',
            teacher: '"이것은 머릿속 생각인가요, 싫은 마음인가요, 실제 행동인가요?" 고정관념은 집단에 대한 굳은 생각, 편견은 그 생각에 붙은 부정적 감정과 태도, 차별은 그것이 행동으로 나타나 기회를 빼앗는 것이라고 짚는다. "좋은 고정관념(○○ 사람은 다 수학을 잘해)은 괜찮아요"라는 말에는 "수학을 못하는 그 나라 친구는 어떤 부담을 느낄까요?"라고 되묻는다.',
            task: '문장 카드를 고정관념·편견·차별로 나누고 까닭을 말해요.',
            levels: LV,
            items: [
              MS('문장을 세 가지로 나누어 보세요.', '생각·마음·행동', ['고정관념', '편견', '차별'], ['그 나라 사람은 다 가난해', '그 나라 사람은 왠지 싫어', '출신 때문에 가입을 거절해요', '그 나라 사람은 다 수학을 잘해'], { '고정관념': ['그 나라 사람은 다 가난해', '그 나라 사람은 다 수학을 잘해'], '편견': ['그 나라 사람은 왠지 싫어'], '차별': ['출신 때문에 가입을 거절해요'] }, 0.25),
              MM('갈래와 뜻을 이어 보세요. 맞지 않는 카드는 남겨요.', '갈래의 뜻', [{ id: 'g1', label: '고정관념' }, { id: 'g2', label: '편견' }, { id: 'g3', label: '차별' }], ['집단에 대한 굳은 생각', '근거 없이 싫어하는 마음', '기회를 빼앗는 행동', '서로 다른 문화'], { g1: '집단에 대한 굳은 생각', g2: '근거 없이 싫어하는 마음', g3: '기회를 빼앗는 행동' }, 0.2),
              MP('일반화가 들어 있는 말만 골라 담아 보세요.', '일반화 찾기', ['한 명 보니 그 나라 사람은 다 그래', '피부색 보면 성격을 알아', '민이는 축구를 좋아해', '사람마다 생각이 달라'], ['한 명 보니 그 나라 사람은 다 그래', '피부색 보면 성격을 알아'], 0.3,
                { conclude: '생각(고정관념)이 마음(편견)을 만들고, 마음이 행동(차별)이 돼요. 시작은 "다 그래"라는 일반화예요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 일반화를 멈추는 말 고르기', minutes: 13, tool: 'mindmap',
            teacher: '"\'다 그래\'를 어떻게 바꾸면 사실에 가까워질까요?" "내가 만난 한 사람은", "사람마다 다르겠지만"처럼 범위를 좁히는 말을 짚는다. 미디어 속 한 장면만 보고 판단하는 습관도 일반화라는 점을 말해 준다. 3번은 짝과 말로 나눈다.',
            task: '일반화하는 말을 사실에 가까운 말로 바꾸고, 차별로 이어지는 행동을 멈추는 방법을 골라요.',
            levels: LV,
            items: [
              MM('일반화하는 말과 바꾼 말을 이어 보세요. 맞지 않는 카드는 남겨요.', '말 바꾸기', [{ id: 'c1', label: '그 나라 사람은 다 시끄러워' }, { id: 'c2', label: '다문화 친구는 한국말을 못해' }, { id: 'c3', label: '외국인은 다 영어를 해' }], ['그때 만난 사람이 시끄러웠어', '한국어가 편한 친구도 많아', '쓰는 말은 사람마다 달라', '역시 그렇구나'], { c1: '그때 만난 사람이 시끄러웠어', c2: '한국어가 편한 친구도 많아', c3: '쓰는 말은 사람마다 달라' }, 0.25),
              MS('행동을 두 가지로 나누어 보세요.', '일반화 앞에서', ['멈추는 행동', '키우는 행동'], ['"다는 아니지" 하고 말해요', '직접 알아보고 판단해요', '들은 소문을 그대로 옮겨요', '웃긴 영상으로 나라를 평가해요'], { '멈추는 행동': ['"다는 아니지" 하고 말해요', '직접 알아보고 판단해요'], '키우는 행동': ['들은 소문을 그대로 옮겨요', '웃긴 영상으로 나라를 평가해요'] }, 0.3,
                { conclude: '"다는 아니지" 한마디가 고정관념에서 차별로 가는 길을 끊어요.' }),
              TALK('짝과 "미디어에서 본 한 장면으로 어떤 나라를 판단할 뻔한 예"를 가상으로 하나 들고 바꾼 말을 정해 말하고 "다 했어요"를 누르세요.'),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘부터 \'다 그래\'라는 말이 나오면 어떻게 할 건가요?" 출구 1번에서 "좋은 고정관념"을 괜찮다고 둔 학생에게는 칭찬 같은 일반화도 한 사람을 집단에 가둔다는 점을 다시 짚는다.',
          exit: [
            XS('문장 카드를 나누어 보세요.', '무엇일까', ['고정관념', '차별'], ['그 나라 사람은 다 매운 걸 좋아해', '출신 국가로 자리를 따로 정해요', '그 나라 사람은 다 춤을 잘 춰', '사투리 쓴다고 발표를 빼요'], { '고정관념': ['그 나라 사람은 다 매운 걸 좋아해', '그 나라 사람은 다 춤을 잘 춰'], '차별': ['출신 국가로 자리를 따로 정해요', '사투리 쓴다고 발표를 빼요'] }),
            XC('고정관념·편견·차별 가운데 행동으로 나타나 기회를 빼앗는 것은 무엇인가요?', ['고정관념', '편견', '차별'], 2, '차별은 생각과 마음이 행동으로 나타나 기회를 빼앗는 거예요.'),
            XT('"그 나라 사람은 다 ○○해"를 사실에 가까운 말로 바꾸어 한 문장으로 쓰세요.'),
            MOOD,
          ],
        },
        ws: {
          title: '고정관념·편견·차별',
          items: [
            { type: 'table', prompt: '뜻을 쓰세요.', columns: ['낱말', '뜻'], cells: [['고정관념', ''], ['편견', ''], ['차별', '']], answer: '집단에 대한 굳은 생각, 근거 없이 싫어하는 마음·태도, 기회를 빼앗는 행동' },
            { type: 'choice', prompt: '일반화가 들어 있는 말에 ○ 하세요.', options: ['민이는 노래를 잘해', '그 나라 사람은 다 게을러', '사람마다 다르지'], answer: '그 나라 사람은 다 게을러' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '"___는 아니지"라는 말로 일반화를 멈출 수 있어요.', answer: '다' },
            { type: 'short', prompt: '"좋은 고정관념"도 문제가 될 수 있는 까닭을 두 문장으로 쓰세요.' },
          ],
        },
        notes: '자주 보이는 어려움: ① 칭찬하는 고정관념은 괜찮다고 여긴다 → 그 기대에 맞지 않는 사람이 받는 부담을 떠올리게 한다. ② 고정관념과 차별을 같은 것으로 본다 → 생각·마음·행동의 단계로 나눠 본다. ③ 특정 나라 이름을 넣어 평가하는 활동은 하지 않고, 반의 다문화 가정 학생을 예로 들지 않는다.',
      }),

      LESSON(2, {
        title: '다문화 가정 친구와 나누는 대화 장면 고르기',
        objective: '다문화 가정 친구와 대화하는 장면에서 출신·외모·발음을 화제로 삼는 말 대신 한 사람으로 존중하는 말을 고를 수 있다.',
        draw: 'two paper-cut middle schoolers laughing together over a shared comic book on a school bench, autumn leaves around',
        banner: '친구는 친구예요', extra: [{ motif: 'leaf', x: 300, y: 222 }],
        intro: {
          teacher: '"전학 온 첫날, 같은 질문을 스무 번 받는다면 어떤 기분일까요?" 대답을 듣고(기다릴 반응: "귀찮아요", "외계인 된 것 같아요") 시연으로 말 카드를 나눈다. "궁금해서 물어본 건데 뭐가 문제예요?"라는 말이 나오면 "궁금함이 그 친구를 \'다른 사람\'으로만 보게 만든다면요?"라고 되묻는다. 오늘은 다문화 가정 친구와의 대화 장면을 살펴본다고 밝힌다.',
          student: '새 친구와 처음 이야기할 때 내가 듣고 싶은 질문 하나를 짝에게 말해 봅시다.',
          demo: DEMO('첫 대화', ['존중하는 말', '불편한 말'], ['무슨 음악 좋아해?', '진짜 한국 사람 맞아?'], { '존중하는 말': ['무슨 음악 좋아해?'], '불편한 말': ['진짜 한국 사람 맞아?'] }),
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 대화 장면에서 선택하기', minutes: 14, tool: 'emotion',
            teacher: '"이 말을 들은 친구는 어떤 마음일까요?" 결과 칸을 읽게 한다. 다문화 가정 친구 가운데에는 한국에서 나고 자란 친구도 많다는 점을 짚는다(숫자는 말하지 않는다). "칭찬으로 한 말인데요"라는 학생에게는 칭찬도 "너는 우리와 다르다"는 뜻으로 들릴 수 있다는 점을 짚는다.',
            task: '다문화 가정 친구와 대화하는 장면에서 어떻게 할지 고르고 결과를 살펴봐요.',
            levels: LVB,
            items: [
              EB('새로 전학 온 친구 리아에게 말을 걸고 싶어요.', '엄마가 베트남 출신인 리아가 전학을 왔어요. 처음 말을 걸어 보려고 해요.', [
                { id: 'where', text: '"너 어느 나라 사람이야?" 하고 물어요', result: '리아는 "나 한국 사람인데…" 하며 머뭇거려요.', mood: '속상함', why: '출신부터 묻는 말은 친구를 "다른 사람"으로 보게 해요.' },
                { id: 'hobby', text: '"점심 같이 먹을래?" 하고 말해요', result: '리아와 좋아하는 웹툰 이야기로 금방 친해져요.', mood: '기쁨' },
                { id: 'stare', text: '멀리서 다른 친구들과 수군거려요', result: '리아는 첫날부터 외로움을 느껴요.', mood: '외로움', why: '수군거림은 친구를 반 밖으로 밀어내요.' }], 'hobby', 0.2),
              EB('국어 시간에 친구 하늘이 또박또박 발표를 잘했어요.', '아빠가 몽골 출신인 하늘이 국어 시간에 발표를 잘했어요.', [
                { id: 'wow', text: '"너 한국말 진짜 잘한다!" 하고 놀라요', result: '하늘은 "여기서 태어났는데…" 하며 씁쓸해해요.', mood: '속상함', why: '한국에서 자란 친구에게 그 말은 칭찬이 아니라 "넌 외국인"이라는 뜻으로 들려요.' },
                { id: 'content', text: '"발표 내용이 정말 좋았어" 하고 말해요', result: '하늘이 웃으며 다음 발표도 준비해요.', mood: '뿌듯함' },
                { id: 'none', text: '아무 말도 안 해요', result: '하늘은 잘한 걸 알아주는 친구가 없어 아쉬워요.', mood: '슬픔', why: '친구의 노력을 알아주는 말을 건넬 수 있어요.' }], 'content', 0.25),
              EB('친구가 도시락에 싸 온 음식을 보고 누가 냄새 난다고 해요.', '현장체험학습 날, 도가 싸 온 음식을 보고 누가 "이게 뭐야, 냄새 이상해"라고 해요.', [
                { id: 'laugh', text: '같이 웃으며 코를 막아요', result: '도는 다음부터 도시락을 숨기며 먹어요.', mood: '부끄러움', why: '음식 문화를 놀리는 것은 친구의 가족을 놀리는 것과 같아요.' },
                { id: 'curious', text: '"처음 보는데 무슨 음식이야?" 하고 관심을 보여요', result: '도가 웃으며 맛보라고 조금 나눠 줘요.', mood: '기쁨' },
                { id: 'move', text: '조용히 자리를 옮겨요', result: '도는 혼자 남아 점심을 먹어요.', mood: '외로움', why: '자리를 피하는 것도 친구에게는 거절로 느껴져요.' }], 'curious', 0.3,
                { conclude: '출신·외모·발음이 아니라 그 사람의 생각과 노력, 좋아하는 것에 관심을 두면 대화가 이어져요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 존중하는 말 모으기', minutes: 13, tool: 'emotion',
            teacher: '"같은 궁금함도 어떻게 물으면 존중이 될까요?" 친구가 먼저 이야기하고 싶어 할 때 들어 주는 것과, 내가 계속 캐묻는 것은 다르다는 점을 짚는다. 2번에서 "부모님 나라 말 한번 해 봐"를 고른 학생에게는 친구를 구경거리로 만들 수 있다는 점을 말해 준다.',
            task: '다문화 가정 친구에게 건네는 말을 존중하는 말과 불편한 말로 나누고, 바꾸어 말해요.',
            levels: LV,
            items: [
              { prompt: '말을 두 가지로 나누어 보세요.', toolOptions: { mode: 'sort', slots: ['존중하는 말', '불편한 말'], cards: ['주말에 뭐 했어?', '같이 조 할래?', '피부가 왜 그렇게 까매?', '진짜 한국 사람 맞아?'] }, target: { sort: { '존중하는 말': ['주말에 뭐 했어?', '같이 조 할래?'], '불편한 말': ['피부가 왜 그렇게 까매?', '진짜 한국 사람 맞아?'] } }, difficulty: 0.2 },
              { prompt: '친구를 구경거리로 만들 수 있는 말만 골라 담아 보세요.', toolOptions: { mode: 'pick', basket: '불편할 수 있는 말', cards: ['엄마 나라 말 한번 해 봐', '너희 나라 음식 다 먹어?', '이 문제 같이 풀래?', '너 생각은 어때?'] }, target: { pick: ['엄마 나라 말 한번 해 봐', '너희 나라 음식 다 먹어?'] }, difficulty: 0.25 },
              { prompt: '불편한 말과 바꾼 말을 이어 보세요. 맞지 않는 카드는 남겨요.', toolOptions: { mode: 'match', slots: [{ id: 'r1', label: '너 어느 나라 사람이야?' }, { id: 'r2', label: '한국말 잘하네!' }, { id: 'r3', label: '너희 나라에선 이거 먹어?' }], cards: ['요즘 뭐에 빠져 있어?', '발표 내용 좋았어', '좋아하는 음식이 뭐야?', '외국인이라 다르구나'] }, target: { match: { r1: '요즘 뭐에 빠져 있어?', r2: '발표 내용 좋았어', r3: '좋아하는 음식이 뭐야?' } }, difficulty: 0.3,
                conclude: '친구가 먼저 꺼내지 않은 출신 이야기보다, 지금 그 친구가 좋아하고 생각하는 것을 물어요.' },
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 바꾼 말 가운데 내일 바로 써 볼 말은 무엇인가요?" 출구 1번에서 "한국말 잘하네"를 존중하는 말로 고른 학생에게는 한국에서 자란 친구에게 어떻게 들리는지 다시 떠올리게 한다. 놀림을 보면 담임·상담 선생님께 알릴 수 있다고 덧붙인다.',
          exit: [
            XB('체육 시간 팀을 나누는데 누가 "외국인 팀 따로 해"라고 말해요. 어떻게 할까요?', '체육 시간, 누군가 다문화 가정 친구들을 가리키며 "외국인 팀 따로 해"라고 해요.', [
              { id: 'laugh', text: '웃으며 그냥 넘어가요', why: '웃어넘기면 차별이 당연한 것처럼 돼요.' },
              { id: 'say', text: '"우리 다 같은 반이야, 섞어서 하자"고 말해요' },
              { id: 'join', text: '재밌겠다며 맞장구쳐요', why: '출신으로 팀을 나누는 것은 차별이에요.' }], 'say'),
            XC('한국에서 태어나 자란 친구에게 "한국말 잘한다"는 말이 불편할 수 있는 까닭은 무엇인가요?', ['칭찬이 너무 짧아서', '"넌 외국인"이라는 뜻으로 들릴 수 있어서', '발음이 틀려서'], 1, '친구를 우리와 다른 사람으로 보는 말로 들릴 수 있어요.'),
            XT('새 친구에게 건네고 싶은 존중하는 첫마디를 한 문장으로 쓰세요.'),
          ],
        },
        ws: {
          title: '친구에게 건네는 말',
          items: [
            { type: 'table', prompt: '불편한 말을 존중하는 말로 바꾸어 쓰세요.', columns: ['불편한 말', '바꾼 말'], cells: [['너 어느 나라 사람이야?', ''], ['한국말 잘하네!', ''], ['너희 나라에선 이거 먹어?', '']], answer: '예) 요즘 뭐에 빠져 있어?, 발표 내용 좋았어, 좋아하는 음식이 뭐야?' },
            { type: 'choice', prompt: '존중하는 말에 ○ 하세요.', options: ['피부가 왜 그래?', '같이 조 할래?', '엄마 나라 말 해 봐'], answer: '같이 조 할래?' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '출신보다 그 친구가 지금 ___하는 것에 관심을 둬요.', answer: '좋아(생각)' },
            { type: 'short', prompt: '음식 문화를 놀리는 장면에서 내가 할 수 있는 행동을 두 문장으로 쓰세요.' },
          ],
        },
        notes: '자주 보이는 어려움: ① 궁금해서 묻는 것은 괜찮다고 여긴다 → 같은 질문이 되풀이될 때의 부담과, 친구가 먼저 꺼낸 이야기를 듣는 것의 차이를 짚는다. ② "한국말 잘하네"를 칭찬으로만 여긴다 → 한국에서 자란 친구에게 어떻게 들리는지 장면으로 보여 준다. ③ 반의 다문화 가정 학생에게 경험을 말하게 하거나 대표로 세우지 않는다.',
      }),
    ],
  });
})();
