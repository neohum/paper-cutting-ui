/* 4학년 창체 법정교육 — 장애인식개선 (2차시). 근거: 장애인복지법 제25조·시행령 제16조(매년 1회 이상·1시간 이상), 범교과 기준 연 2시간. 장면·인물은 가상(가명 한 글자), 반의 특정 학생을 예로 들지 않는다.
 */
(function () {
  const G = 4, CODE = 'disab';
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
    flow: '4학년 장애인식개선 단원은 장애를 "생활의 불편함이자 다름"으로 이해하고 바른 배려 방법을 익히는 2차시입니다. 1차시에는 보는 것·듣는 것·움직이는 것·배우는 것이 불편한 여러 장애의 모습을 장면 카드로 알아보고, 불편함은 환경과 도움으로 줄어든다는 것을 확인합니다. 2차시에는 장애가 있는 친구를 도울 때 먼저 묻고 원하는 방법으로 돕는 갈림길을 연습합니다. 근거는 장애인복지법 제25조·시행령 제16조(매년 1회 이상·1시간 이상)와 범교과 기준 시수 연 2시간입니다. 5학년(차별하는 말 바꾸기·편의시설), 6학년(보편적 설계·통합학급 모둠 활동)으로 이어집니다.',
    refs: {},
    lessons: [
      // ───────────────────────────── 1차시
      LESSON(1, {
        title: '여러 장애의 모습과 줄일 수 있는 불편함 알기',
        objective: '여러 장애의 모습을 알고, 장애는 생활의 불편함이며 환경과 도움으로 그 불편함을 줄일 수 있음을 설명할 수 있다.',
        draw: 'a paper schoolyard where a child using a wheelchair, a child with a white cane and a child signing with hands play together with friends under a paper sun',
        banner: '장애는 다름이에요', extra: [{ motif: 'flower', x: 300, y: 222, color: 'peach' }],
        intro: {
          teacher: '"안경을 쓰는 친구는 무엇이 불편해서 안경을 쓸까요?" 두세 명의 대답을 듣고(기다릴 반응: "잘 안 보여서요") 안경이 불편함을 줄여 주듯 휠체어·보청기·점자도 그런 도구라는 것을 말한다. 시연 단추로 장면 카드가 불편한 점에 따라 나뉘는 모습을 보여 준다. "장애가 있으면 아무것도 못 해요"가 나오면 "도구와 도움이 있으면 무엇을 할 수 있을까요?"라고 되묻는다. 오늘은 여러 장애의 모습과 불편함을 줄이는 방법을 알아본다고 밝힌다.',
          student: '생활을 편하게 해 주는 도구(안경, 계단 손잡이 등)를 짝과 한 가지씩 말해 봅시다.',
          demo: { tool: 'mindmap', options: { topic: '어떤 불편함일까', slots: ['보는 것', '듣는 것'], cards: ['글자가 잘 안 보여요', '작은 소리가 안 들려요'], shuffle: false }, sequence: [{ sort: { '보는 것': ['글자가 잘 안 보여요'], '듣는 것': ['작은 소리가 안 들려요'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 불편한 점에 따라 장면 나누기', minutes: 13, tool: 'mindmap',
            teacher: '"이 친구는 생활에서 어떤 점이 불편할까요?" 카드를 놓을 때마다 불편함을 줄이는 도구나 도움을 함께 떠올리게 한다. 2번에서 "말을 이해하는 데 시간이 걸려요"를 "공부를 못하는 것"이라 말하는 학생에게 "속도가 다를 뿐, 배우는 방법이 다른 거예요"라고 짚는다. 3번은 장애는 아픈 것(병)과 같지 않으며 옮지 않는다는 오개념을 바로잡는다.',
            task: '장면 카드를 불편한 점에 따라 나누어요.',
            levels: LV,
            items: [
              MS('보는 것이 불편한 장면과 듣는 것이 불편한 장면으로 나누어 보세요.', '보는 것과 듣는 것', ['보는 것이 불편', '듣는 것이 불편'], ['흰 지팡이로 길을 찾아요', '수어로 이야기해요', '점자로 책을 읽어요', '보청기를 끼어요'], { '보는 것이 불편': ['흰 지팡이로 길을 찾아요', '점자로 책을 읽어요'], '듣는 것이 불편': ['수어로 이야기해요', '보청기를 끼어요'] }, 0.15),
              MS('움직이는 것이 불편한 장면과 배우는 속도가 다른 장면으로 나누어 보세요.', '움직임과 배움', ['움직임이 불편', '배우는 속도가 달라'], ['휠체어로 이동해요', '설명을 천천히 들어요', '경사로로 올라가요', '그림으로 차례를 봐요'], { '움직임이 불편': ['휠체어로 이동해요', '경사로로 올라가요'], '배우는 속도가 달라': ['설명을 천천히 들어요', '그림으로 차례를 봐요'] }, 0.2),
              MS('장애에 대한 바른 생각과 잘못된 생각으로 나누어 보세요.', '장애에 대한 생각', ['바른 생각', '잘못된 생각'], ['장애는 옮는 병이에요', '도구로 불편이 줄어요', '장애인은 다 못 해요', '잘하는 것이 저마다 달라요'], { '바른 생각': ['도구로 불편이 줄어요', '잘하는 것이 저마다 달라요'], '잘못된 생각': ['장애는 옮는 병이에요', '장애인은 다 못 해요'] }, 0.25,
                { conclude: '장애는 생활의 한 가지가 불편한 것이고, 도구와 도움으로 그 불편함을 줄일 수 있어요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 불편함을 줄이는 도구와 도움 잇기', minutes: 14, tool: 'mindmap',
            teacher: '"이 불편함은 무엇으로 줄일 수 있을까요?" 1번에서 잇기를 마친 뒤 "이 도구가 없다면 어떻게 될까요?"라고 물어 환경이 불편함의 크기를 바꾼다는 점을 짚는다. 2번에서 수어를 "손짓 놀이"로 여기는 학생에게 수어는 말과 같은 하나의 언어라는 점을 알려 준다. 3번은 우리 학교에서 함께할 수 있는 도움을 고르게 한다.',
            task: '불편함과 그것을 줄이는 도구를 잇고, 함께할 수 있는 도움을 골라요.',
            levels: LV,
            items: [
              MM('불편한 점과 도움이 되는 도구를 이어 보세요. 맞지 않는 카드는 남겨요.', '불편함과 도구', [{ id: 's1', label: '계단을 오르기 어려워요.' }, { id: 's2', label: '글자를 눈으로 읽기 어려워요.' }, { id: 's3', label: '방송 소리가 안 들려요.' }], ['경사로·엘리베이터', '점자·음성 안내', '자막·수어', '큰 소리로 부르기'], { s1: '경사로·엘리베이터', s2: '점자·음성 안내', s3: '자막·수어' }, 0.2),
              MP('듣는 것이 불편한 친구와 이야기할 때 도움이 되는 방법만 골라 담아 보세요.', '소통을 돕는 방법', ['얼굴을 보며 말해요', '글로 써서 보여 줘요', '등 뒤에서 크게 불러요', '입을 가리고 말해요'], ['얼굴을 보며 말해요', '글로 써서 보여 줘요'], 0.2),
              MP('우리 학교에서 장애가 있는 친구와 함께 지내는 데 도움이 되는 일만 골라 담아 보세요.', '함께 지내는 도움', ['복도에 물건 두지 않기', '모둠에 함께 끼워 주기', '대신 다 해 주기', '불쌍하다고 말하기'], ['복도에 물건 두지 않기', '모둠에 함께 끼워 주기'], 0.25,
                { conclude: '불편함을 줄이는 도구와 친구의 작은 배려가 모두 함께하는 학교를 만들어요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"오늘 알게 된 것 가운데 장애에 대한 생각이 바뀐 것이 있나요?" 출구 1번에서 "보는 것이 불편하면 책을 못 읽는다"를 바른 생각에 놓은 학생에게 점자·음성 도서를 다시 떠올리게 한다. 2번에서 "장애는 옮는다"를 고른 학생에게는 장애는 병처럼 옮지 않는다는 것을 분명히 말해 준다.',
          exit: [
            { type: 'tool', tool: 'mindmap', options: { topic: '맞는 생각일까', slots: ['맞아요', '틀려요'], cards: ['점자로 책을 읽을 수 있어요', '휠체어로 못 가는 곳은 없어요', '수어도 하나의 언어예요', '보는 게 불편하면 못 읽어요'] }, state: { at: {} }, prompt: '장애에 대한 생각을 맞는 것과 틀린 것으로 나누어 보세요.',
              target: { sort: { '맞아요': ['점자로 책을 읽을 수 있어요', '수어도 하나의 언어예요'], '틀려요': ['휠체어로 못 가는 곳은 없어요', '보는 게 불편하면 못 읽어요'] } }, difficulty: 0.25 },
            { type: 'choice', prompt: '장애에 대한 설명으로 알맞은 것은 무엇인가요?', options: ['장애는 옮을 수 있어요', '장애는 생활의 한 가지가 불편한 거예요', '장애가 있으면 아무것도 못 해요'], answer: 1, difficulty: 0.1, explain: '장애는 옮지 않으며, 도구와 도움으로 불편함을 줄일 수 있어요.' },
            { type: 'short', prompt: '장애가 있는 친구와 함께 지내기 위해 내가 할 수 있는 일을 한 문장으로 쓰세요.' },
            MOOD,
          ],
        },
        ws: {
          title: '여러 장애의 모습과 도움 도구',
          items: [
            { type: 'table', prompt: '불편한 점에 알맞은 도구나 도움을 쓰세요.', columns: ['불편한 점', '도구·도움'], cells: [['계단을 오르기 어려워요', ''], ['글자를 눈으로 읽기 어려워요', ''], ['소리가 잘 안 들려요', ''], ['설명이 빨라 어려워요', '']], answer: '경사로·엘리베이터 / 점자·음성 안내 / 보청기·자막·수어 / 천천히 그림과 함께 설명' },
            { type: 'choice', prompt: '바른 생각에 ○ 하세요.', options: ['장애는 옮는 병이에요', '도구와 도움으로 불편이 줄어요', '장애인은 혼자 아무것도 못 해요'], answer: '도구와 도움으로 불편이 줄어요' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '수어는 손과 표정으로 하는 하나의 ___예요.', answer: '언어' },
            { type: 'short', prompt: '우리 학교에 있으면 좋을 도움 시설이나 약속을 한 가지 쓰세요.' },
          ],
          easy: {
            note: '"이 도구는 어떤 불편함을 줄여 줄까?"를 떠올려 보세요.',
            items: [
              { type: 'choice', prompt: '듣는 것이 불편한 친구와 말할 때 좋은 방법에 ○ 하세요.', options: ['얼굴을 보며 말해요', '뒤에서 크게 불러요'], answer: '얼굴을 보며 말해요' },
              { type: 'table', prompt: '맞으면 ○, 틀리면 ×를 쓰세요.', columns: ['생각', '○ / ×'], cells: [['장애는 옮아요', ''], ['점자로 책을 읽어요', ''], ['휠체어는 이동을 도와요', '']], answer: '×, ○, ○' },
              { type: 'draw', prompt: '여러 친구가 함께 노는 모습을 그려 보세요.' },
              { type: 'short', prompt: '장애가 있는 친구에게 건넬 인사말을 쓰세요.' },
            ],
          },
        },
        diff: DIFF('카드는 맞는 칸에 놓으면 바로 알려 줘요. 도구 그림을 먼저 함께 살펴봐요.', '그럴듯한 잘못된 생각 카드를 가려내고, 카드 순서가 섞여 나와요.'),
        notes: '자주 보이는 어려움: ① 장애를 병처럼 옮는다고 여긴다 → 장애는 옮지 않는다는 점을 분명히 한다. ② 장애가 있으면 아무것도 못 한다고 여긴다 → 도구·환경이 갖춰지면 할 수 있는 일이 많다는 점을 사례로 보인다. ③ 수어를 몸짓 놀이로 여긴다 → 하나의 언어임을 알린다. 반에 장애가 있는 학생이 있다면 그 학생을 예로 들거나 지목하지 않는다.',
      }),

      // ───────────────────────────── 2차시
      LESSON(2, {
        title: '먼저 묻고 원하는 방법으로 돕기',
        objective: '장애가 있는 친구를 도울 때 먼저 묻고, 친구가 원하는 방법으로 돕는 행동을 고를 수 있다.',
        draw: 'a paper child kindly asking a friend in a wheelchair a question with a speech bubble, other children holding a door open in a paper hallway',
        banner: '도와줄까? 먼저 물어요', extra: [{ motif: 'leaf', x: 300, y: 222 }],
        intro: {
          teacher: '"내가 하려던 일을 친구가 묻지도 않고 대신 해 버리면 기분이 어떨까요?" 두세 명의 대답을 듣고(기다릴 반응: "내가 하고 싶었는데 속상해요") 시연 단추로 먼저 묻는 도움과 묻지 않는 도움이 나뉘는 모습을 보여 준다. "장애가 있으면 무조건 도와줘야 해요"가 나오면 "친구가 혼자 하고 싶을 때는 어떻게 할까요?"라고 되묻는다. 오늘은 먼저 묻고 원하는 방법으로 돕는 연습을 한다고 밝힌다.',
          student: '누군가 나를 도와줘서 고마웠던 때, 그 사람은 어떻게 도와주었는지 짝에게 말해 봅시다.',
          demo: { tool: 'mindmap', options: { topic: '어떤 도움일까', slots: ['먼저 묻는 도움', '묻지 않는 도움'], cards: ['"도와줄까?" 물어요', '휠체어를 그냥 밀어요'], shuffle: false }, sequence: [{ sort: { '먼저 묻는 도움': ['"도와줄까?" 물어요'], '묻지 않는 도움': ['휠체어를 그냥 밀어요'] } }] },
        },
        acts: [
          {
            id: 'a1', title: '활동 1. 도움의 갈림길에서 고르기', minutes: 14, tool: 'emotion',
            teacher: '"이렇게 도우면 친구의 마음은 어떨까요?" 결과 칸을 읽게 한다. 1번에서 휠체어를 그냥 미는 보기를 "착한 행동"이라고 고르는 학생에게 "갑자기 내 몸이 움직이면 어떤 느낌일까요?"라고 묻는다. 2번에서 시각장애가 있는 친구를 안내할 때 팔을 잡아끄는 대신 친구가 내 팔을 잡게 하는 방법이 있음을 짚는다. 3번은 친구가 "괜찮아, 혼자 할게"라고 하면 그 뜻을 존중하는 것도 배려임을 말해 준다.',
            task: '장애가 있는 친구를 도울 때 어떻게 할지 고르고, 그 결과를 살펴봐요.',
            levels: LVB,
            items: [
              EB('휠체어를 탄 친구 서가 문턱 앞에서 멈췄어요. 어떻게 할까요?', '교실 앞 작은 문턱에서 서의 휠체어가 잠깐 멈췄어요.', [
                { id: 'ask', text: '"도와줄까?" 하고 먼저 물어요', result: '서가 "뒤를 살짝 밀어 줘"라고 말해 함께 넘어가요.', mood: '고마움' },
                { id: 'push', text: '말없이 휠체어를 세게 밀어요', result: '서가 깜짝 놀라 몸이 앞으로 쏠려요.', mood: '놀람', why: '묻지 않은 도움은 친구를 놀라게 하거나 다치게 할 수 있어요.' },
                { id: 'stare', text: '멀리서 쳐다보기만 해요', result: '서는 혼자 애쓰며 시선이 불편해요.', mood: '속상함', why: '빤히 쳐다보기보다 필요한지 물어봐요.' }], 'ask', 0.15),
              EB('보는 것이 불편한 친구가 급식실 가는 길을 물어요. 어떻게 안내할까요?', '흰 지팡이를 짚은 친구가 "급식실이 어디야?"라고 물어요.', [
                { id: 'point', text: '"저쪽이야" 하고 손가락질해요', result: '친구는 저쪽이 어디인지 알 수 없어요.', mood: '걱정', why: '보이지 않으면 손짓 대신 말로 자세히 알려 줘야 해요.' },
                { id: 'arm', text: '"내 팔 잡을래?" 묻고 함께 걸어요', result: '친구가 팔을 잡고 편하게 급식실에 가요.', mood: '편안함' },
                { id: 'drag', text: '친구 팔을 잡아끌어요', result: '친구가 발을 헛디딜 뻔해요.', mood: '무서움', why: '잡아끌기보다 친구가 내 팔을 잡게 해요.' }], 'arm', 0.2),
              EB('도움을 권했더니 친구가 "괜찮아, 혼자 할게"라고 해요. 어떻게 할까요?', '사물함 정리를 도와주겠다고 하자 친구가 웃으며 "괜찮아, 혼자 할게"라고 했어요.', [
                { id: 'force', text: '그래도 내가 다 해 줘요', result: '친구가 스스로 할 기회를 잃어 속상해요.', mood: '속상함', why: '친구의 뜻을 존중하는 것도 배려예요.' },
                { id: 'respect', text: '"필요하면 말해" 하고 기다려요', result: '친구가 스스로 정리를 마치고 뿌듯해해요.', mood: '뿌듯함' },
                { id: 'sulk', text: '도와주려 했는데 서운해해요', result: '친구가 미안한 마음이 들어 불편해져요.', mood: '불편함', why: '거절은 나를 싫어해서가 아니라 혼자 할 수 있다는 뜻이에요.' }], 'respect', 0.25,
                { conclude: '도움은 먼저 묻고, 친구가 원하는 방법으로 해요. "괜찮아"라는 대답도 존중해요.' }),
            ],
          },
          {
            id: 'a2', title: '활동 2. 배려하는 말과 차례 익히기', minutes: 13, tool: 'story',
            teacher: '"도울 때 무엇을 먼저 할까요?" 1번에서 차례를 놓은 뒤 "묻기를 빼먹으면 어떻게 될까요?"라고 묻는다. 2번에서 "불쌍해"라는 말은 친구를 낮추어 보는 말이 될 수 있음을 짚고, 같은 친구로 대하는 말을 고르게 한다. 3번은 함께 놀이할 때 규칙을 조금 바꾸면 모두가 참여할 수 있다는 점을 말해 준다.',
            task: '도움을 주는 차례를 정하고, 배려하는 말을 말풍선에 채워요.',
            levels: LV,
            items: [
              SO('장애가 있는 친구를 도울 때의 차례를 놓아 보세요.', '도울 때', ['먼저', '다음', '마지막'], [{ id: 'q1', text: '도움이 필요한지 물어요', motif: 'sun' }, { id: 'q2', text: '원하는 방법을 들어요', motif: 'cloud' }, { id: 'q3', text: '들은 대로 함께해요', motif: 'flower' }], ['q1', 'q2', 'q3'], 0.15),
              SF('친구를 같은 친구로 대하는 말을 말풍선에 채워 보세요.', [{ id: 'b1', who: '하', motif: 'sun', label: '우리 같이 ___' }, { id: 'b2', who: '하', motif: 'flower', label: '필요하면 ___' }], ['놀자', '말해 줘', '너는 불쌍해', '저리 가'], { b1: '놀자', b2: '말해 줘' }, 0.2),
              SO('모두가 함께하는 피구 놀이를 만드는 차례를 놓아 보세요.', '함께하는 놀이', ['처음', '다음', '그다음', '끝'], [{ id: 'p1', text: '함께 놀자고 제안해요', motif: 'sun' }, { id: 'p2', text: '어려운 점을 물어요', motif: 'cloud' }, { id: 'p3', text: '공을 굴리게 규칙을 바꿔요', motif: 'leaf' }, { id: 'p4', text: '모두 함께 즐겨요', motif: 'star' }], ['p1', 'p2', 'p3', 'p4'], 0.25,
                { conclude: '묻고, 듣고, 함께 바꾸면 누구나 참여할 수 있어요.' }),
            ],
          },
        ],
        wrap: {
          teacher: '"도움을 줄 때 가장 먼저 할 일은 무엇일까요?" 모두 함께 "먼저 물어요"를 말하게 한다. 출구 1번에서 친구 대신 발표해 주는 보기를 고른 학생에게 친구가 스스로 할 수 있도록 기다리는 것도 배려임을 짚는다. 2번에서 "불쌍하니까 다 해 준다"를 고른 학생에게는 같은 친구로 대하는 마음을 다시 묻는다.',
          exit: [
            { type: 'tool', tool: 'emotion', options: { mode: 'branch', situation: '말이 조금 느린 친구가 발표를 하는데, 몇몇이 "답답해, 내가 대신 할게"라고 해요.', choices: [
              { id: 'wait', text: '끝까지 기다리며 들어요', result: '친구가 발표를 마치고 박수를 받아요.', mood: '뿌듯함' },
              { id: 'take', text: '친구 대신 발표해 줘요', result: '친구가 스스로 할 기회를 잃어요.', mood: '속상함', why: '친구의 속도를 기다려 주는 것이 배려예요.' },
              { id: 'sigh', text: '한숨 쉬며 재촉해요', result: '친구가 긴장해 말이 더 어려워져요.', mood: '불안', why: '재촉은 친구를 더 힘들게 해요.' }] }, state: { choice: null }, prompt: '친구가 천천히 발표할 때 어떻게 할지 골라 보세요.', target: { choice: 'wait' }, difficulty: 0.15 },
            { type: 'choice', prompt: '장애가 있는 친구를 도울 때 가장 먼저 할 일은 무엇인가요?', options: ['묻지 않고 바로 도와요', '도움이 필요한지 먼저 물어요', '불쌍하니까 다 해 줘요'], answer: 1, difficulty: 0.1, explain: '먼저 묻고, 친구가 원하는 방법으로 도와요.' },
            { type: 'short', prompt: '친구가 "괜찮아, 혼자 할게"라고 할 때 내가 할 말을 한 문장으로 쓰세요.' },
            MOOD,
          ],
        },
        ws: {
          title: '먼저 묻고 함께해요',
          items: [
            { type: 'table', prompt: '먼저 묻는 도움이면 ○, 아니면 ×를 쓰세요.', columns: ['행동', '○ / ×'], cells: [['"도와줄까?" 물어요', ''], ['휠체어를 그냥 밀어요', ''], ['"내 팔 잡을래?" 물어요', ''], ['팔을 잡아끌어요', '']], answer: '○, ×, ○, ×' },
            { type: 'choice', prompt: '보는 것이 불편한 친구에게 길을 알려 줄 때 알맞은 방법에 ○ 하세요.', options: ['"저쪽이야" 하고 손가락질해요', '내 팔을 잡게 하고 말로 알려 줘요', '팔을 잡아끌어요'], answer: '내 팔을 잡게 하고 말로 알려 줘요' },
            { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '도움은 먼저 ___고, 친구가 원하는 방법으로 해요.', answer: '묻' },
            { type: 'short', prompt: '모두가 함께할 수 있도록 바꾸고 싶은 놀이 규칙을 하나 쓰세요.' },
          ],
          easy: {
            note: '"친구라면 어떤 도움을 바랄까?"를 떠올려 보세요.',
            items: [
              { type: 'choice', prompt: '도울 때 먼저 하는 말에 ○ 하세요.', options: ['도와줄까?', '비켜 봐'], answer: '도와줄까?' },
              { type: 'table', prompt: '좋은 행동이면 ○, 아니면 ×를 쓰세요.', columns: ['행동', '○ / ×'], cells: [['함께 놀자고 해요', ''], ['불쌍하다고 해요', ''], ['끝까지 기다려요', '']], answer: '○, ×, ○' },
              { type: 'draw', prompt: '친구에게 "도와줄까?" 하고 묻는 모습을 그려 보세요.' },
              { type: 'short', prompt: '친구와 함께하고 싶은 놀이를 쓰세요.' },
            ],
          },
        },
        diff: DIFF('갈림길 결과가 처음부터 보이고, 차례 카드는 맞는 자리에 놓으면 바로 알려 줘요.', '"그래도 다 해 줘요"처럼 착해 보이는 보기를 가려내고, 카드 순서가 섞여 나와요.'),
        notes: '자주 보이는 어려움: ① 묻지 않고 대신 해 주는 것을 친절로 여긴다 → 친구의 몸과 뜻을 존중하는 것이 먼저임을 짚는다. ② 거절을 받으면 서운해한다 → "괜찮아"는 혼자 할 수 있다는 뜻임을 알린다. ③ "불쌍해"라는 말을 위로로 여긴다 → 같은 친구로 대하는 말로 바꾸게 한다. 반의 특정 학생을 예로 들지 않는다.',
      }),
    ],
  });
})();
