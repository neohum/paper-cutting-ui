/* 5학년 창체 법정교육 — 장애인식개선 (2차시). 근거: 장애인복지법 제25조·시행령 제16조(매년 1회 이상·1시간 이상), 범교과 기준 연 2시간. 장면·인물은 가상(가명 한 글자), 장애 학생을 지목하지 않는다.
 */
(function () {
  const G = 5, CODE = 'disab';
  const UNIT = `g${G}-창체-${CODE}`;
  const TITLE = '장애인식개선';
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
    flow: '5학년 장애인식개선 단원은 말과 환경 두 갈래로 장애 차별을 살피는 2차시입니다. 1차시에는 일상에서 무심코 쓰는 장애 비하 표현(벙어리장갑, 결정장애, 정상인 등)을 찾아 바른 말로 바꾸고 내 말 습관을 점검합니다. 2차시에는 점자·점자블록·경사로·수어처럼 함께 살기 위한 편의시설과 소통 방법이 하는 일을 알고, 이를 막지 않는 약속을 정합니다. 4학년(장애는 다름, 돕기 전에 묻기)에서 나아가 "차별은 말과 환경에도 숨어 있다"를 다루고, 6학년(보편적 설계, 모두 참여하는 모둠)으로 이어집니다. 근거는 「장애인복지법」 제25조·같은 법 시행령 제16조(매년 1회 이상, 1시간 이상)와 범교과 기준 시수 연 2시간입니다.',
    refs: {},
    lessons: [
      // ───────────────────────────── 1차시
      LESSON(1, {
        title: '무심코 쓰는 장애 비하 표현을 바른 말로 고치기',
        objective: '일상에서 쓰는 장애 비하 표현을 찾아내고, 장애인을 존중하는 바른 말로 바꾸어 쓸 수 있다.',
        draw: 'paper speech bubbles being gently replaced by brighter paper speech bubbles held by children, with a paper mitten and a paper dictionary nearby',
        banner: '말에도 존중을 담아요', extra: [{ motif: 'star', x: 300, y: 96, color: 'buttercup' }],
        intro: {
          teacher: '"겨울에 끼는 엄지만 따로 있는 장갑을 뭐라고 부르나요?" 두세 명의 대답을 듣고(기다릴 반응: "벙어리장갑이요", "손모아장갑이요") 시연 단추로 비하 표현과 바른 말이 짝지어지는 모습을 보여 준다. "다들 쓰는 말인데 뭐가 문제예요?"가 나오면 "그 말을 듣는 장애인은 어떤 기분일까요?"라고 되묻는다. 오늘은 무심코 쓰던 말을 바른 말로 바꾼다고 밝힌다.',
          student: '듣고 기분이 상했던 별명이나 말투가 있다면 어떤 느낌이었을지 짝과 이야기해 봅시다(실제 별명은 말하지 않아요).',
          demo: { tool: 'mindmap', options: { mode: 'match', topic: '바꿔 말해요', slots: [{ id: 's1', label: '벙어리장갑' }], cards: ['손모아장갑', '털장갑'], shuffle: false }, sequence: [{ match: { s1: '손모아장갑' } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 비하 표현을 바른 말과 잇기', minutes: 14, tool: 'mindmap',
            teacher: '"이 말을 바꾸면 무엇이 달라질까요?" 1번에서 "정상인"을 고칠 말로 여기지 않는 학생에게 "장애인이 아닌 사람이 정상이라면 장애인은 무엇이 될까요?"라고 묻는다. 2번에서 "결정장애"처럼 장애를 부족함의 뜻으로 쓰는 말이 왜 문제인지 짚는다. 3번은 "장애우"보다 "장애인"이 공식적인 바른 말이라는 점을 말해 준다.',
            task: '장애를 낮추는 표현을 바른 말과 잇고, 고쳐야 할 말을 가려요.',
            levels: LV,
            items: [
              MM('고쳐야 할 말과 바른 말을 이어 보세요. 맞지 않는 카드는 남겨요.', '바꿔 말해요', [{ id: 's1', label: '벙어리장갑' }, { id: 's2', label: '정상인' }, { id: 's3', label: '결정장애' }], ['손모아장갑', '비장애인', '결정이 어려워요', '보통 사람'], { s1: '손모아장갑', s2: '비장애인', s3: '결정이 어려워요' }, 0.15),
              MS('장애를 낮추는 표현과 존중하는 표현으로 나누어 보세요.', '어떤 말일까', ['낮추는 표현', '존중하는 표현'], ['꿀 먹은 벙어리', '시각장애인', '눈먼 돈', '휠체어 이용자'], { '낮추는 표현': ['꿀 먹은 벙어리', '눈먼 돈'], '존중하는 표현': ['시각장애인', '휠체어 이용자'] }, 0.2),
              MP('장애인을 부를 때 알맞은 말만 골라 담아 보세요.', '알맞은 말', ['장애인', '청각장애인', '장애우', '불구자'], ['장애인', '청각장애인'], 0.25,
                { conclude: '장애를 부족함이나 놀림의 뜻으로 쓰지 않고, 바른 말로 부르는 것이 존중이에요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 말 습관 갈림길에서 존중하는 말 고르기', minutes: 13, tool: 'emotion',
            teacher: '"이 말을 들은 사람은 어떤 마음일까요?" 1번에서 "그냥 웃자고 한 말"을 고르는 학생에게 듣는 사람이 정한다는 점을 짚는다. 2번은 친구의 말 습관을 고쳐 줄 때 망신 주지 않고 조용히 알려 주는 방법을 알려 준다. 3번은 장애인 친구의 행동을 흉내 내는 놀이가 차별이라는 점을 분명히 말한다.',
            task: '말 습관이 드러나는 상황에서 어떻게 할지 고르고, 그 결과를 살펴봐요.',
            levels: LVB,
            items: [
              EB('준이가 우물쭈물하는 친구에게 "너 결정장애야?"라고 해요. 어떻게 할까요?', '점심 메뉴를 못 고르는 친구에게 준이가 웃으며 "너 결정장애야?"라고 말했어요.', [
                { id: 'fix', text: '"고르기 어렵구나"로 바꿔 말해요', result: '친구가 편하게 웃고 함께 메뉴를 골라요.', mood: '편안함' },
                { id: 'joke', text: '웃자고 한 말이라 넘겨요', result: '그 말이 반에 퍼져 자주 쓰여요.', mood: '걱정', why: '장애를 부족함의 뜻으로 쓰는 말은 상처가 돼요.' },
                { id: 'more', text: '더 재밌는 말을 붙여요', result: '놀림이 커지고 친구 얼굴이 굳어요.', mood: '속상함', why: '말을 보태면 차별이 더 커져요.' }], 'fix', 0.15),
              EB('짝이 "벙어리장갑"이라고 말해요. 하는 어떻게 알려 줄까요?', '미술 시간에 짝이 장갑 그림을 그리며 "벙어리장갑 완성!"이라고 했어요.', [
                { id: 'loud', text: '반 전체에 들리게 지적해요', result: '짝이 창피해서 화를 내요.', mood: '화남', why: '망신을 주면 바른 말을 배우기 어려워요.' },
                { id: 'quiet', text: '"손모아장갑이래" 하고 알려요', result: '짝이 고개를 끄덕이고 다음엔 바꿔 말해요.', mood: '뿌듯함' },
                { id: 'none', text: '모르는 척 넘어가요', result: '짝은 그 말이 문제인 줄 몰라요.', mood: '걱정', why: '부드럽게 알려 주면 함께 바뀔 수 있어요.' }], 'quiet', 0.2),
              EB('친구들이 다리가 불편한 사람의 걸음을 흉내 내며 놀아요. 어떻게 할까요?', '쉬는 시간에 몇몇 친구가 다리가 불편한 사람의 걸음을 흉내 내며 웃고 있어요.', [
                { id: 'laugh', text: '같이 따라 하며 웃어요', result: '흉내가 놀이처럼 굳어져요.', mood: '걱정', why: '장애를 흉내 내는 놀이는 차별이에요.' },
                { id: 'say', text: '"그건 놀림이야" 하고 멈춰요', result: '친구들이 멈추고 다른 놀이를 해요.', mood: '안심' },
                { id: 'walk', text: '못 본 척 자리를 떠요', result: '놀림이 계속 이어져요.', mood: '속상함', why: '멈추자는 한마디가 차별을 끊어요.' }], 'say', 0.25,
                { conclude: '바른 말은 서로 알려 주며 함께 익혀요. 흉내와 놀림은 멈춰요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 바꾸기로 한 말 하나를 소리 내어 말해 볼까요?" 출구 1번에서 "원래 쓰던 말"을 고른 학생에게 말은 시대와 함께 바뀌며 듣는 사람을 존중하는 쪽으로 고쳐 간다는 점을 짚는다. 2번에서 "장애우"를 고른 학생에게 "장애인"이 바른 공식 용어임을 다시 말해 준다.',
          exit: [
            { type: 'tool', tool: 'mindmap', options: { topic: '내 말 점검', slots: ['고칠 말', '괜찮은 말'], cards: ['외눈박이 생각', '비장애인', '절름발이 계획', '수어로 인사해요'] }, state: { at: {} }, prompt: '말 카드를 고칠 말과 괜찮은 말로 나누어 보세요.',
              target: { sort: { '고칠 말': ['외눈박이 생각', '절름발이 계획'], '괜찮은 말': ['비장애인', '수어로 인사해요'] } }, difficulty: 0.2 },
            { type: 'choice', prompt: '장애가 있는 사람을 부르는 바른 말은 무엇인가요?', options: ['장애우', '장애인', '불구자'], answer: 1, difficulty: 0.1, explain: '"장애인"이 바른 공식 용어예요.' },
            { type: 'short', prompt: '앞으로 바꾸어 쓸 말 하나와 그 까닭을 한 문장으로 쓰세요.' },
            MOOD,
          ],
        },
        ws: {
          title: '말에 담는 존중',
          items: [
            { type: 'table', prompt: '고쳐야 할 말을 바른 말로 바꾸어 쓰세요.', columns: ['고쳐야 할 말', '바른 말'], cells: [['벙어리장갑', ''], ['정상인', ''], ['결정장애', ''], ['장애우', '']], answer: '손모아장갑 / 비장애인 / 결정이 어려워요 / 장애인' },
            { type: 'choice', prompt: '친구의 말 습관을 알려 주는 알맞은 방법에 ○ 하세요.', options: ['모두 앞에서 크게 지적해요', '조용히 바른 말을 알려 줘요', '모른 척해요'], answer: '조용히 바른 말을 알려 줘요' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '장애를 부족함이나 ___의 뜻으로 쓰는 말은 고쳐 써요.', answer: '놀림' },
            { type: 'short', prompt: '장애를 흉내 내는 놀이를 보았을 때 할 말을 쓰세요.' },
          ],
          easy: {
            note: '"이 말을 듣는 사람 기분은 어떨까?"를 떠올려 보세요.',
            items: [
              { type: 'choice', prompt: '바른 말에 ○ 하세요.', options: ['손모아장갑', '벙어리장갑'], answer: '손모아장갑' },
              { type: 'table', prompt: '괜찮은 말이면 ○, 고칠 말이면 ×를 쓰세요.', columns: ['말', '○ / ×'], cells: [['장애인', ''], ['결정장애', ''], ['비장애인', '']], answer: '○, ×, ○' },
              { type: 'draw', prompt: '친구에게 바른 말을 알려 주는 모습을 그려 보세요.' },
              { type: 'short', prompt: '오늘 새로 배운 바른 말 하나를 쓰세요.' },
            ],
          },
        },
        diff: DIFF('카드는 맞는 칸에 놓으면 바로 알려 주고, 갈림길 결과가 처음부터 보여요.', '"장애우"처럼 좋은 뜻으로 보이지만 바꾸어 쓰는 말을 가려내고, 카드 순서가 섞여 나와요.'),
        notes: '자주 보이는 어려움: ① 오래 써 온 말이니 괜찮다고 여긴다 → 말은 듣는 사람을 존중하는 쪽으로 바뀌어 왔음을 짚는다. ② "장애우"가 더 다정한 말이라고 여긴다 → 공식 용어는 "장애인"이고, 장애인이 아닌 사람은 "비장애인"이라고 부른다고 알려 준다. ③ 바른 말을 알려 줄 때 망신을 준다 → 조용히 함께 고치는 방법을 연습한다. 비하 표현은 수업 안에서만 예로 들고, 장애 학생이 있는 학급이라면 그 학생을 지목하지 않는다.',
      }),

      // ───────────────────────────── 2차시
      LESSON(2, {
        title: '점자블록·경사로·수어가 하는 일 알고 지킬 약속 정하기',
        objective: '점자·점자블록·경사로·수어 같은 편의시설과 소통 방법이 누구를 어떻게 돕는지 알고, 이를 막지 않는 약속을 고를 수 있다.',
        draw: 'a paper street with yellow tactile paving tiles, a gentle paper ramp up to a door, and two paper figures greeting each other with sign language hands',
        banner: '함께 쓰는 길과 말', extra: [{ motif: 'flower', x: 300, y: 222, color: 'peach' }],
        intro: {
          teacher: '"길바닥의 울퉁불퉁한 노란 블록, 왜 있는 걸까요?" 두세 명의 대답을 듣고(기다릴 반응: "눈이 안 보이는 사람이 길을 찾으려고요") 시연 단추로 편의시설과 돕는 사람이 이어지는 모습을 보여 준다. "장애인만 쓰는 시설이에요"가 나오면 "유모차를 미는 사람은 경사로가 없으면 어떨까요?"라고 되묻는다. 오늘은 함께 쓰는 길과 말을 알아보고 지킬 약속을 정한다고 밝힌다.',
          student: '우리 학교나 동네에서 본 경사로·점자블록·점자 안내를 짝에게 하나 말해 봅시다.',
          demo: { tool: 'mindmap', options: { mode: 'match', topic: '누구를 도울까', slots: [{ id: 's1', label: '점자블록' }], cards: ['시각장애인의 길 찾기', '자동차 주차'], shuffle: false }, sequence: [{ match: { s1: '시각장애인의 길 찾기' } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 편의시설과 소통 방법이 하는 일 잇기', minutes: 13, tool: 'mindmap',
            teacher: '"이 시설이 없다면 누가 가장 불편할까요?" 1번에서 각 시설이 누구의 어떤 불편을 줄이는지 말하게 한다. 2번에서 수어를 "몸짓 놀이"로 여기는 학생에게 수어는 청각장애인이 쓰는 하나의 언어라는 점을 짚는다. 3번은 경사로·엘리베이터가 노인·유모차·짐 든 사람에게도 쓰인다는 점을 말해 준다.',
            task: '편의시설·소통 방법이 하는 일을 잇고, 함께 쓰는 사람을 찾아요.',
            levels: LV,
            items: [
              MM('편의시설과 하는 일을 이어 보세요. 맞지 않는 카드는 남겨요.', '하는 일', [{ id: 's1', label: '점자블록' }, { id: 's2', label: '경사로' }, { id: 's3', label: '엘리베이터 점자 단추' }], ['발로 느껴 길을 찾아요', '휠체어로 오르내려요', '손으로 층을 읽어요', '빨리 뛰어가요'], { s1: '발로 느껴 길을 찾아요', s2: '휠체어로 오르내려요', s3: '손으로 층을 읽어요' }, 0.15),
              MS('소통 방법을 주로 쓰는 사람에 따라 나누어 보세요.', '소통 방법', ['청각장애인', '시각장애인'], ['수어로 대화해요', '점자로 책을 읽어요', '자막으로 영상 봐요', '음성 안내를 들어요'], { '청각장애인': ['수어로 대화해요', '자막으로 영상 봐요'], '시각장애인': ['점자로 책을 읽어요', '음성 안내를 들어요'] }, 0.2),
              MP('경사로의 도움을 받는 사람만 골라 담아 보세요.', '경사로 이용', ['휠체어 이용자', '유모차를 민 보호자', '무거운 짐 든 사람', '아무도 없어요'], ['휠체어 이용자', '유모차를 민 보호자', '무거운 짐 든 사람'], 0.25,
                { conclude: '편의시설은 장애인을 돕고, 결국 우리 모두가 함께 쓰는 길이 돼요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 편의시설을 막지 않는 길 고르기', minutes: 14, tool: 'emotion',
            teacher: '"이렇게 하면 그 길을 쓰는 사람은 어떻게 될까요?" 1번에서 "잠깐이면 괜찮다"는 생각을 짚는다 — 잠깐 사이에도 시각장애인이 부딪힐 수 있다. 2번은 장애인 전용 주차 구역을 비워 두는 까닭을 말하게 한다. 3번에서 청각장애인 친구와 대화할 때 얼굴을 보고 천천히 말하거나 글로 쓰는 방법을 알려 준다.',
            task: '편의시설과 소통에 관한 상황에서 어떻게 할지 고르고, 그 결과를 살펴봐요.',
            levels: LVB,
            items: [
              EB('준이가 자전거를 세울 곳을 찾다 점자블록을 봤어요. 어떻게 할까요?', '학원 앞, 자전거 거치대가 꽉 차서 준이는 점자블록 위에라도 세우고 싶어요.', [
                { id: 'block', text: '잠깐이니 블록 위에 세워요', result: '지나던 시각장애인이 자전거에 부딪혀요.', mood: '걱정', why: '잠깐 사이에도 점자블록이 막히면 위험해요.' },
                { id: 'other', text: '블록을 피해 다른 곳에 세워요', result: '길이 비어 누구나 안전하게 지나가요.', mood: '안심' },
                { id: 'lean', text: '블록 옆 벽에 걸쳐 세워요', result: '자전거가 쓰러져 블록을 막아요.', mood: '속상함', why: '블록 가까이 둔 물건도 길을 막을 수 있어요.' }], 'other', 0.15),
              EB('주차장에 휠체어 그림이 있는 빈자리가 있어요. 하의 보호자가 대려 해요. 하는 어떻게 할까요?', '마트 주차장이 붐비는데, 문 가까이 휠체어 그림이 그려진 칸만 비어 있어요.', [
                { id: 'park', text: '"잠깐인데요" 하며 거기 대자고 해요', result: '휠체어 이용자가 먼 곳까지 가야 해요.', mood: '속상함', why: '그 칸은 꼭 필요한 사람을 위해 비워 둬요.' },
                { id: 'leave', text: '"그 칸은 비워 두어요" 말해요', result: '조금 걸었지만 필요한 사람이 그 칸을 써요.', mood: '뿌듯함' },
                { id: 'quiet', text: '모르는 척 가만히 있어요', result: '꼭 필요한 사람이 자리를 못 찾아요.', mood: '걱정', why: '작은 한마디로 바른 선택을 도울 수 있어요.' }], 'leave', 0.2),
              EB('청각장애가 있는 친구와 모둠 활동을 해요. 어떻게 소통할까요?', '새로 같은 모둠이 된 친구 도는 소리를 잘 듣지 못해 입 모양과 글을 함께 보며 이야기해요.', [
                { id: 'face', text: '얼굴 보며 천천히 말하고 써요', result: '도가 의견을 내고 활동에 함께해요.', mood: '편안함' },
                { id: 'shout', text: '귀에 대고 크게 소리쳐요', result: '도가 놀라고 불편해해요.', mood: '불안', why: '크게 말하기보다 얼굴을 보고 글을 함께 써요.' },
                { id: 'skip', text: '어려우니 말을 안 걸어요', result: '도가 모둠에서 혼자가 돼요.', mood: '외로움', why: '소통 방법을 바꾸면 함께할 수 있어요.' }], 'face', 0.25,
                { conclude: '편의시설을 막지 않고, 상대에게 맞는 소통 방법을 쓰면 모두 함께할 수 있어요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"우리 학교에서 오늘부터 지킬 약속 하나를 정해 볼까요?" 출구 1번에서 경사로 앞에 짐을 두는 보기를 고른 학생에게 휠체어가 지나가지 못하는 장면을 떠올리게 한다. 2번에서 "장애인만 쓴다"를 고른 학생에게 편의시설은 모두가 함께 쓴다는 점을 다시 짚는다.',
          exit: [
            { type: 'tool', tool: 'emotion', options: { mode: 'branch', situation: '학급 행사 준비물 상자가 많아서 복도 경사로 앞에 쌓아 두자는 말이 나왔어요.', choices: [
              { id: 'stack', text: '경사로 앞에 쌓아 둬요', result: '휠체어를 탄 친구가 교실에 들어오지 못해요.', mood: '속상함', why: '경사로는 늘 비워 두어야 해요.' },
              { id: 'move', text: '경사로를 피해 교실 뒤에 둬요', result: '경사로가 비어 누구나 오갈 수 있어요.', mood: '안심' },
              { id: 'half', text: '반만 막게 옆에 둬요', result: '길이 좁아져 지나가기 어려워요.', mood: '걱정', why: '반쯤 막아도 휠체어는 지나가기 힘들어요.' }] }, state: { choice: null }, prompt: '준비물 상자를 어디에 둘지 골라 보세요.', target: { choice: 'move' }, difficulty: 0.15 },
            { type: 'choice', prompt: '편의시설에 대한 설명으로 알맞은 것은 무엇인가요?', options: ['장애인만 쓰는 시설이에요', '장애인을 돕고 모두가 함께 써요', '없어도 아무도 불편하지 않아요'], answer: 1, difficulty: 0.1, explain: '경사로·엘리베이터처럼 많은 사람이 함께 써요.' },
            { type: 'short', prompt: '우리 학교 편의시설을 지키는 약속을 한 문장으로 쓰세요.' },
            MOOD,
          ],
        },
        ws: {
          title: '함께 쓰는 길과 말',
          items: [
            { type: 'table', prompt: '편의시설이 돕는 일을 쓰세요.', columns: ['편의시설·소통 방법', '돕는 일'], cells: [['점자블록', ''], ['경사로', ''], ['수어', ''], ['자막', '']], answer: '시각장애인의 길 찾기 / 휠체어·유모차 오르내리기 / 청각장애인의 대화 / 청각장애인이 영상 내용 알기' },
            { type: 'choice', prompt: '점자블록 앞에서 알맞은 행동에 ○ 하세요.', options: ['잠깐 자전거를 세워요', '블록 위를 비워 둬요', '짐을 올려 둬요'], answer: '블록 위를 비워 둬요' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '수어는 청각장애인이 쓰는 하나의 ___예요.', answer: '언어' },
            { type: 'short', prompt: '청각장애가 있는 친구와 이야기할 때 쓸 방법을 두 가지 쓰세요.' },
          ],
          easy: {
            note: '"이 시설이 없으면 누가 불편할까?"를 생각해 보세요.',
            items: [
              { type: 'choice', prompt: '경사로를 쓰는 사람에 ○ 하세요.', options: ['휠체어 이용자', '아무도 안 써요'], answer: '휠체어 이용자' },
              { type: 'table', prompt: '지키는 행동이면 ○, 막는 행동이면 ×를 쓰세요.', columns: ['행동', '○ / ×'], cells: [['점자블록 비워 두기', ''], ['경사로에 짐 쌓기', ''], ['전용 주차칸 비우기', '']], answer: '○, ×, ○' },
              { type: 'draw', prompt: '우리 동네에서 본 편의시설을 그려 보세요.' },
              { type: 'short', prompt: '점자블록이 하는 일을 쓰세요.' },
            ],
          },
        },
        diff: DIFF('카드는 맞는 칸에 놓으면 바로 알려 주고, 갈림길 결과가 처음부터 보여요.', '"반만 막아요"처럼 괜찮아 보이는 보기를 가려내고, 카드 순서가 섞여 나와요.'),
        notes: '자주 보이는 어려움: ① 편의시설은 장애인만 쓴다고 여긴다 → 노인·유모차·짐 든 사람도 함께 쓴다는 점을 짚는다. ② "잠깐"은 괜찮다고 여긴다 → 짧은 순간에도 부딪힘·막힘이 생긴다는 점을 말한다. ③ 수어를 몸짓 놀이로 여긴다 → 수어는 청각장애인의 언어임을 알려 준다. 장애인 친구를 소통의 "도움 대상"으로만 그리지 않고 함께 활동하는 친구로 다룬다. 6학년 보편적 설계 차시와 이어진다.',
      }),
    ],
  });
})();
