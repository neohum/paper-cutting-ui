/* 4학년 창체 법정교육 — 다문화 이해 (2차시). 근거: 다문화가족지원법 제5조·시행령 제10조의2, 교육부 지침 연 2시간. 장면·인물은 가상(가명 한 글자), 다문화 배경 학생을 지목하거나 가정 이야기를 묻지 않는다.
 */
(function () {
  const G = 4, CODE = 'multi';
  const UNIT = `g${G}-창체-${CODE}`;
  const TITLE = '다문화 이해';
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
  const MS = (prompt, topic, slots, cards, sort, d, more) => ({ prompt, toolOptions: { topic, slots, cards }, target: { sort }, difficulty: d, ...more });
  const MM = (prompt, topic, slots, cards, match, d, more) => ({ prompt, toolOptions: { mode: 'match', topic, slots, cards }, target: { match }, difficulty: d, ...more });
  const MP = (prompt, topic, cards, pick, d, more) => ({ prompt, toolOptions: { mode: 'pick', topic, basket: topic, cards }, target: { pick }, difficulty: d, ...more });
  const EB = (prompt, situation, choices, choice, d, more) => ({ prompt, toolOptions: { mode: 'branch', situation, choices }, target: { choice }, difficulty: d, ...more });
  const EM = (prompt, slots, cards, match, d, more) => ({ prompt, toolOptions: { mode: 'match', slots, cards }, target: { match }, difficulty: d, ...more });
  const ES = (prompt, slots, cards, sort, d, more) => ({ prompt, toolOptions: { mode: 'sort', slots, cards, weather: false }, target: { sort }, difficulty: d, ...more });
  const EP = (prompt, basket, cards, pick, d, more) => ({ prompt, toolOptions: { mode: 'pick', basket, cards, weather: false }, target: { pick }, difficulty: d, ...more });
  const SO = (prompt, title, slots, cards, order, d, more) => ({ prompt, toolOptions: { title, slots, cards }, target: { order }, difficulty: d, ...more });
  const SF = (prompt, slots, cards, fill, d, more) => ({ prompt, toolOptions: { mode: 'fill', slots, cards }, target: { fill }, difficulty: d, ...more });
  const LV = { easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } };
  const LVB = { easy: { showBack: true }, base: {}, challenge: {} };
  const MOOD = { type: 'mood', prompt: '오늘 공부를 마친 내 마음은 어떤가요?' };
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
  const DIFF = (easy, challenge) => ({ easy, base: '모든 카드를 놓거나 보기를 고른 뒤 확인을 눌러 스스로 고쳐요.', challenge });

  PaperLessons.registerUnit({
    id: `g${G}-cc-${CODE}`, schema: 'edu-unit.v1', catalogUnit: UNIT,
    grade: G, subject: '창체', unitTitle: TITLE,
    flow: '4학년 다문화 이해 단원은 "다름은 틀림이 아니에요"를 생활 속에서 확인하는 2차시입니다. 1차시에는 문화마다 다른 인사·음식·놀이를 카드로 나누고 우리 문화도 다른 사람에게는 새로울 수 있음을 알아봅니다. 2차시에는 말투·생김새가 다른 친구를 놀리지 않고 함께 어울리는 갈림길과 말을 연습합니다. 특정 나라의 문화를 우열로 견주지 않고, 다문화 배경 학생을 지목하거나 가정 이야기를 묻지 않습니다. 근거는 다문화가족지원법 제5조·시행령 제10조의2와 교육부 지침 연 2시간입니다. 5학년(고정관념·편견 가려내기, 한국어가 서툰 친구와 소통), 6학년(우리 곁의 다양한 이웃, 차별 앞의 조력자)으로 이어집니다.',
    refs: {},
    lessons: [
      // ───────────────────────────── 1차시
      LESSON(1, {
        title: '세계의 인사와 음식 카드로 다름 알아보기',
        objective: '문화마다 인사·음식·놀이가 다름을 알고, 다른 문화를 틀린 것이 아니라 다른 것으로 존중하는 말을 할 수 있다.',
        draw: 'paper children from around the world greeting each other in different ways, bowing, waving and shaking hands, with paper plates of various foods on a picnic cloth',
        banner: '다름은 틀림이 아니에요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }],
        intro: {
          teacher: '"우리는 반가울 때 어떻게 인사하나요?" 두세 명의 대답을 듣고(기다릴 반응: "고개 숙여 인사해요", "손을 흔들어요") 시연 단추로 인사 카드가 나뉘는 모습을 보여 준다. "우리 인사가 제일 바른 인사예요"가 나오면 "다른 곳에 사는 친구도 자기 인사가 익숙하겠지요?"라고 되묻는다. 오늘은 문화마다 다른 모습을 알아보고 존중하는 말을 익힌다고 밝힌다.',
          student: '내가 좋아하는 음식 한 가지와 그 음식을 처음 먹어 본 사람이 어떤 느낌일지 짝에게 말해 봅시다.',
          demo: { tool: 'mindmap', options: { topic: '여러 가지 인사', slots: ['몸으로 하는 인사', '말로 하는 인사'], cards: ['고개를 숙여요', '"안녕하세요"'], shuffle: false }, sequence: [{ sort: { '몸으로 하는 인사': ['고개를 숙여요'], '말로 하는 인사': ['"안녕하세요"'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 문화마다 다른 모습 나누기', minutes: 13, tool: 'mindmap',
            teacher: '"이 카드는 무엇에 대한 이야기일까요?" 카드를 놓을 때마다 "처음 보면 어떤 느낌일까요?"라고 묻는다. 2번에서 손으로 먹는 식사를 "더럽다"고 말하는 학생에게 "손을 깨끗이 씻고 먹는 그곳의 식사 예절이에요"라고 짚는다. 3번은 다른 문화를 대하는 말 가운데 존중하는 말과 상처 주는 말을 가르게 한다.',
            task: '문화마다 다른 모습 카드를 알맞은 칸에 나누어요.',
            levels: LV,
            items: [
              MS('인사하는 모습과 식사하는 모습으로 나누어 보세요.', '인사와 식사', ['인사하는 모습', '식사하는 모습'], ['두 손을 모아 인사해요', '젓가락으로 먹어요', '악수를 해요', '손으로 먹어요'], { '인사하는 모습': ['두 손을 모아 인사해요', '악수를 해요'], '식사하는 모습': ['젓가락으로 먹어요', '손으로 먹어요'] }, 0.15),
              MS('다른 문화에 대한 생각을 존중하는 생각과 틀렸다는 생각으로 나누어 보세요.', '다른 문화에 대한 생각', ['존중하는 생각', '틀렸다는 생각'], ['손으로 먹으면 이상해', '그곳의 식사 예절이야', '우리 것만 맞아', '나도 해 보고 싶어'], { '존중하는 생각': ['그곳의 식사 예절이야', '나도 해 보고 싶어'], '틀렸다는 생각': ['손으로 먹으면 이상해', '우리 것만 맞아'] }, 0.2),
              MP('처음 보는 음식을 만났을 때 존중하는 말만 골라 담아 보세요.', '존중하는 말', ['어떤 맛인지 궁금해', '이름을 알려 줄래?', '냄새가 이상해', '그런 걸 왜 먹어?'], ['어떤 맛인지 궁금해', '이름을 알려 줄래?'], 0.25,
                { conclude: '문화는 저마다 다를 뿐 틀린 것이 아니에요. 궁금해하고 존중하는 말을 써요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 우리 문화도 누군가에겐 새로워요', minutes: 14, tool: 'mindmap',
            teacher: '"우리에게 익숙한 것을 처음 보는 사람은 어떤 느낌일까요?" 1번은 우리 문화와 그 설명을 이어 보게 한다. 2번에서 "신발을 벗고 들어가는 것"도 어떤 사람에게는 새로운 문화라는 점을 짚는다. 3번은 다른 문화의 친구에게 우리 문화를 소개할 때 상대 문화도 함께 묻는 것이 대화를 여는 방법임을 말해 준다.',
            task: '우리 문화를 설명과 잇고, 서로의 문화를 나누는 말을 골라요.',
            levels: LV,
            items: [
              MM('우리 생활 모습과 그 설명을 이어 보세요. 맞지 않는 카드는 남겨요.', '우리 문화 설명하기', [{ id: 's1', label: '설날에 웃어른께 세배해요.' }, { id: 's2', label: '집에 들어갈 때 신발을 벗어요.' }, { id: 's3', label: '숟가락과 젓가락을 함께 써요.' }], ['새해 인사 문화', '바닥 생활 문화', '수저 식사 문화', '모두 따라야 할 규칙'], { s1: '새해 인사 문화', s2: '바닥 생활 문화', s3: '수저 식사 문화' }, 0.2),
              MP('다른 나라에서 온 친구에게 우리 문화를 소개할 때 알맞은 말만 골라 담아 보세요.', '문화 소개하는 말', ['너희는 어떻게 해?', '같이 해 볼래?', '이게 제일 좋은 거야', '모르면 바보야'], ['너희는 어떻게 해?', '같이 해 볼래?'], 0.2),
              MS('서로의 문화를 나누는 행동과 무시하는 행동으로 나누어 보세요.', '문화를 나눌 때', ['서로 나눠요', '무시해요'], ['친구 나라 놀이를 배워요', '친구 말을 따라 웃어요', '인사말을 서로 알려 줘요', '음식을 보고 얼굴 찌푸려요'], { '서로 나눠요': ['친구 나라 놀이를 배워요', '인사말을 서로 알려 줘요'], '무시해요': ['친구 말을 따라 웃어요', '음식을 보고 얼굴 찌푸려요'] }, 0.25,
                { conclude: '내게 익숙한 것도 누군가에겐 새로워요. 서로의 문화를 묻고 나누면 더 가까워져요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 알게 된 다른 문화 가운데 해 보고 싶은 것이 있나요?" 두세 명의 대답을 듣는다. 출구 1번에서 "우리 인사만 바른 인사"를 존중하는 생각에 놓은 학생에게 다른 인사도 그곳에서는 바른 인사임을 짚는다. 2번에서 첫째 보기를 고른 학생에게는 "다르다"와 "틀리다"의 뜻을 다시 견주어 준다.',
          exit: [
            { type: 'tool', tool: 'mindmap', options: { topic: '어떤 말일까', slots: ['존중하는 말', '상처 주는 말'], cards: ['그 인사 멋지다', '우리 인사만 바른 인사', '나한테도 알려 줘', '말이 이상하게 들려'] }, state: { at: {} }, prompt: '다른 문화에 대한 말을 존중하는 말과 상처 주는 말로 나누어 보세요.',
              target: { sort: { '존중하는 말': ['그 인사 멋지다', '나한테도 알려 줘'], '상처 주는 말': ['우리 인사만 바른 인사', '말이 이상하게 들려'] } }, difficulty: 0.2 },
            { type: 'choice', prompt: '다른 문화를 대하는 마음으로 알맞은 것은 무엇인가요?', options: ['나와 다르면 틀린 거예요', '다를 뿐 틀린 것이 아니에요', '모두 우리 문화를 따라야 해요'], answer: 1, difficulty: 0.1, explain: '문화는 다를 뿐, 어느 쪽이 틀린 것이 아니에요.' },
            { type: 'short', prompt: '다른 나라 문화에 대해 친구에게 물어보고 싶은 것을 한 문장으로 쓰세요.' },
            MOOD,
          ],
        },
        ws: {
          title: '여러 가지 문화, 다름은 틀림이 아니에요',
          items: [
            { type: 'table', prompt: '존중하는 말이면 ○, 상처 주는 말이면 ×를 쓰세요.', columns: ['말', '○ / ×'], cells: [['어떤 맛인지 궁금해', ''], ['그런 걸 왜 먹어?', ''], ['같이 해 볼래?', ''], ['우리 것만 맞아', '']], answer: '○, ×, ○, ×' },
            { type: 'choice', prompt: '손으로 식사하는 문화를 보았을 때 알맞은 생각에 ○ 하세요.', options: ['더러워 보여요', '그곳의 식사 예절이에요', '따라 하면 안 돼요'], answer: '그곳의 식사 예절이에요' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '다른 문화는 ___ 것이 아니라 다른 것이에요.', answer: '틀린' },
            { type: 'short', prompt: '다른 나라 친구에게 소개하고 싶은 우리 문화를 하나 쓰세요.' },
          ],
          easy: {
            note: '"처음 보면 신기하지?"라는 마음으로 생각해 보세요.',
            items: [
              { type: 'choice', prompt: '존중하는 말에 ○ 하세요.', options: ['나도 알려 줘', '이상해'], answer: '나도 알려 줘' },
              { type: 'table', prompt: '인사면 ○, 식사면 △를 쓰세요.', columns: ['모습', '○ / △'], cells: [['악수를 해요', ''], ['젓가락으로 먹어요', ''], ['고개를 숙여요', '']], answer: '○, △, ○' },
              { type: 'draw', prompt: '여러 나라 친구들이 함께 인사하는 모습을 그려 보세요.' },
              { type: 'short', prompt: '내가 좋아하는 우리 음식을 쓰세요.' },
            ],
          },
        },
        diff: DIFF('카드는 맞는 칸에 놓으면 바로 알려 줘요. 인사 카드부터 함께 살펴봐요.', '"우리 것만 맞아"처럼 은근히 깎아내리는 말을 가려내고, 카드 순서가 섞여 나와요.'),
        notes: '자주 보이는 어려움: ① 익숙하지 않은 것을 "이상하다·틀리다"고 말한다 → "다르다"와 "틀리다"를 견주어 짚는다. ② 특정 나라를 우월하거나 뒤떨어진 곳으로 말한다 → 문화에는 높낮이가 없음을 말한다. ③ 반의 다문화 배경 학생에게 그 나라 이야기를 시키려 한다 → 학생을 대표로 지목하지 않고, 원하는 학생만 자연스럽게 나누게 한다.',
      }),

      // ───────────────────────────── 2차시
      LESSON(2, {
        title: '말투와 생김새를 놀리지 않고 함께 어울리기',
        objective: '말투·생김새·이름이 다르다는 이유로 놀리는 행동이 차별임을 알고, 다문화 배경 친구와 함께 어울리는 행동을 고를 수 있다.',
        draw: 'paper children of different appearances holding hands in a circle on a paper playground, with a paper kite flying above',
        banner: '우리는 함께 놀아요', extra: [{ motif: 'flower', x: 300, y: 222, color: 'rose' }],
        intro: {
          teacher: '"내 이름이나 말투를 친구들이 따라 하며 웃는다면 어떤 마음일까요?" 두세 명의 대답을 듣고(기다릴 반응: "부끄럽고 속상해요") 시연 단추로 함께 어울리는 행동과 놀리는 행동이 나뉘는 모습을 보여 준다. "재미있어서 따라 한 거예요"가 나오면 "따라 하는 소리를 듣는 친구도 재미있을까요?"라고 되묻는다. 오늘은 다름을 놀리지 않고 함께 어울리는 방법을 고른다고 밝힌다.',
          student: '새 친구가 우리 반에 오면 내가 먼저 건넬 수 있는 말을 짝에게 말해 봅시다.',
          demo: { tool: 'mindmap', options: { topic: '친구와 어울리기', slots: ['함께 어울려요', '놀려요'], cards: ['같이 놀자고 해요', '말투를 따라 해요'], shuffle: false }, sequence: [{ sort: { '함께 어울려요': ['같이 놀자고 해요'], '놀려요': ['말투를 따라 해요'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 다름 앞의 갈림길에서 고르기', minutes: 14, tool: 'emotion',
            teacher: '"이렇게 하면 친구의 마음은 어떻게 될까요?" 결과 칸을 소리 내어 읽게 한다. 1번에서 이름을 바꿔 부르는 보기를 "친해지려고"라 고르는 학생에게 "이름은 그 사람에게 소중한 것이에요"라고 짚는다. 2번에서 피부색으로 별명을 짓는 것은 차별이 된다는 점을 분명히 말한다. 3번은 놀이 규칙을 몰라 머뭇거리는 친구에게 알려 주는 것이 어울림의 시작임을 말해 준다.',
            task: '다문화 배경 친구와 지내는 상황에서 어떻게 할지 고르고, 그 결과를 살펴봐요.',
            levels: LVB,
            items: [
              EB('새로 온 친구의 이름이 낯설어요. 준이는 어떻게 할까요?', '전학 온 친구의 이름이 길고 낯설어서 몇몇이 마음대로 별명을 붙이려 해요.', [
                { id: 'ask', text: '이름을 어떻게 부르는지 물어요', result: '친구가 반갑게 이름을 알려 주고 웃어요.', mood: '기쁨' },
                { id: 'nick', text: '부르기 쉬운 별명을 붙여요', result: '친구는 자기 이름이 사라진 것 같아 서운해요.', mood: '서운함', why: '이름은 그 사람에게 소중해요. 원하는 이름으로 불러요.' },
                { id: 'avoid', text: '어려우니 말을 안 걸어요', result: '친구가 쉬는 시간마다 혼자 있어요.', mood: '외로움', why: '어려우면 물어보면 돼요.' }], 'ask', 0.15),
              EB('친구들이 피부색으로 별명을 지어 불러요. 하는 어떻게 할까요?', '체육 시간에 몇몇이 한 친구를 피부색에 빗댄 별명으로 부르며 웃어요.', [
                { id: 'laugh', text: '같이 웃으며 따라 불러요', result: '친구가 고개를 숙이고 체육 시간을 싫어하게 돼요.', mood: '슬픔', why: '생김새로 부르는 별명은 차별이고 폭력이 될 수 있어요.' },
                { id: 'stop', text: '"그렇게 부르지 마" 하고 말해요', result: '친구들이 멈추고 놀림받던 친구가 안심해요.', mood: '안심' },
                { id: 'quiet', text: '못 들은 척 공만 차요', result: '별명이 반 전체에 퍼져요.', mood: '걱정', why: '말리기 어렵다면 선생님께 알려요.' }], 'stop', 0.25),
              EB('다른 나라에서 온 친구가 놀이 규칙을 몰라 머뭇거려요. 어떻게 할까요?', '쉬는 시간 얼음땡 놀이에 끼고 싶은 친구가 규칙을 몰라 옆에서 머뭇거려요.', [
                { id: 'teach', text: '몸짓으로 규칙을 알려 주며 끼워요', result: '친구가 금방 익혀 함께 신나게 놀아요.', mood: '즐거움' },
                { id: 'later', text: '규칙 알면 오라고 해요', result: '친구는 끝내 놀이에 끼지 못해요.', mood: '외로움', why: '함께하며 알려 주면 금방 배워요.' },
                { id: 'tease', text: '규칙도 모른다고 놀려요', result: '친구가 부끄러워 다시는 다가오지 않아요.', mood: '부끄러움', why: '모르는 것은 놀릴 일이 아니라 알려 줄 일이에요.' }], 'teach', 0.2,
                { conclude: '다름은 놀림거리가 아니에요. 묻고, 알려 주고, 함께하면 친구가 돼요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 함께 어울리는 말 고르기', minutes: 13, tool: 'emotion',
            teacher: '"이 말을 들은 친구는 어떤 마음일까요?" 1번에서 "너희 나라로 가"라는 말을 "그냥 한 말"로 넘기는 학생에게 그 말이 친구가 우리 반에 속하지 않는다고 느끼게 한다는 점을 짚는다. 2번은 어울리는 말을 고르게 하고, 3번에서 다문화 배경 친구도 우리 반의 똑같은 친구라는 점을 정리한다.',
            task: '말과 그 말을 들은 친구의 마음을 잇고, 함께 어울리는 말을 골라요.',
            levels: LV,
            items: [
              EM('친구가 들은 말과 그때의 마음을 이어 보세요. 맞지 않는 카드는 남겨요.', [{ id: 's1', label: '"너희 나라로 가."' }, { id: 's2', label: '"우리 같이 놀자!"' }, { id: 's3', label: '"말이 이상해" 하고 웃어요.' }], ['슬픔', '기쁨', '부끄러움', '편안함'], { s1: '슬픔', s2: '기쁨', s3: '부끄러움' }, 0.2),
              EP('다문화 배경 친구와 어울릴 때 알맞은 말만 골라 담아 보세요.', '어울리는 말', ['너희 말로 안녕은 뭐야?', '우리 모둠에 들어와', '한국말 못 하면 빠져', '진짜 한국 사람 아니잖아'], ['너희 말로 안녕은 뭐야?', '우리 모둠에 들어와'], 0.2),
              ES('함께 어울리는 행동과 차별하는 행동으로 나누어 보세요.', ['어울려요', '차별해요'], ['짝 활동에 같이 해요', '피부색으로 별명 지어요', '서로 인사말을 배워요', '말투를 흉내 내요'], { '어울려요': ['짝 활동에 같이 해요', '서로 인사말을 배워요'], '차별해요': ['피부색으로 별명 지어요', '말투를 흉내 내요'] }, 0.25,
                { conclude: '다문화 배경 친구도 우리 반의 똑같은 친구예요. 함께 어울리는 말을 써요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"다름을 놀리는 모습을 보면 무엇을 할 수 있을까요?" 그만하라고 말하기, 선생님께 알리기를 칠판에 적는다. 출구 1번에서 사투리 흉내도 놀림이 될 수 있음을 짚는다. 2번에서 첫째 보기를 고른 학생에게는 생김새로 부르는 별명이 차별임을 다시 말해 준다.',
          exit: [
            { type: 'tool', tool: 'emotion', options: { mode: 'branch', situation: '모둠 발표 준비 중에 친구 말투가 조금 다르다며 한 친구가 계속 흉내를 내요.', choices: [
              { id: 'stop', text: '"흉내 내지 마" 하고 함께 준비해요', result: '흉내가 멈추고 모둠이 발표를 잘 마쳐요.', mood: '뿌듯함' },
              { id: 'join', text: '재밌어서 나도 따라 해요', result: '친구가 발표를 하지 않겠다고 해요.', mood: '슬픔', why: '말투 흉내는 친구를 부끄럽게 하는 놀림이에요.' },
              { id: 'ignore', text: '내 일이 아니라며 둬요', result: '흉내가 계속되고 모둠 분위기가 나빠져요.', mood: '걱정', why: '말리거나 선생님께 알릴 수 있어요.' }] }, state: { choice: null }, prompt: '친구 말투를 흉내 내는 모습을 볼 때 어떻게 할지 골라 보세요.', target: { choice: 'stop' }, difficulty: 0.15 },
            { type: 'choice', prompt: '친구를 생김새로 부르는 별명은 어떤 행동인가요?', options: ['친해지는 장난', '차별이 되는 행동', '칭찬하는 말'], answer: 1, difficulty: 0.1, explain: '생김새·말투·출신으로 놀리는 것은 차별이 돼요.' },
            { type: 'short', prompt: '새로 온 친구에게 건넬 반가운 말을 한 문장으로 쓰세요.' },
            MOOD,
          ],
        },
        ws: {
          title: '다름을 놀리지 않고 함께 어울려요',
          items: [
            { type: 'table', prompt: '어울리는 행동이면 ○, 차별하는 행동이면 ×를 쓰세요.', columns: ['행동', '○ / ×'], cells: [['이름 부르는 법을 물어요', ''], ['말투를 흉내 내요', ''], ['놀이 규칙을 알려 줘요', ''], ['피부색으로 별명 지어요', '']], answer: '○, ×, ○, ×' },
            { type: 'choice', prompt: '친구가 놀이 규칙을 몰라 머뭇거릴 때 알맞은 행동에 ○ 하세요.', options: ['규칙도 모른다고 놀려요', '알려 주며 함께 놀아요', '알면 오라고 해요'], answer: '알려 주며 함께 놀아요' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '생김새나 말투로 놀리는 것은 ___이에요.', answer: '차별' },
            { type: 'short', prompt: '다문화 배경 친구와 함께 해 보고 싶은 놀이를 쓰세요.' },
          ],
          easy: {
            note: '"내가 들으면 기분이 어떨까?"를 떠올려 보세요.',
            items: [
              { type: 'choice', prompt: '어울리는 말에 ○ 하세요.', options: ['같이 놀자', '저리 가'], answer: '같이 놀자' },
              { type: 'table', prompt: '좋은 행동이면 ○, 아니면 ×를 쓰세요.', columns: ['행동', '○ / ×'], cells: [['인사말 배우기', ''], ['말투 흉내', ''], ['함께 놀기', '']], answer: '○, ×, ○' },
              { type: 'draw', prompt: '친구들과 손잡고 노는 모습을 그려 보세요.' },
              { type: 'short', prompt: '친구에게 해 주고 싶은 말을 쓰세요.' },
            ],
          },
        },
        diff: DIFF('갈림길 결과가 처음부터 보이고, 카드는 맞는 칸에 놓으면 바로 알려 줘요.', '"부르기 쉬운 별명"처럼 친절해 보이는 차별을 가려내고, 카드 순서가 섞여 나와요.'),
        notes: '자주 보이는 어려움: ① 이름·말투 흉내를 친해지는 장난으로 여긴다 → 듣는 친구의 마음을 기준으로 삼게 한다. ② "너희 나라로 가" 같은 말을 가볍게 여긴다 → 소속을 부정하는 말이 주는 상처를 짚는다. ③ 다문화 배경 친구를 손님처럼 대한다 → 우리 반의 똑같은 친구임을 강조한다. 반의 다문화 배경 학생을 예로 들거나 가정 이야기를 묻지 않는다.',
      }),
    ],
  });
})();
