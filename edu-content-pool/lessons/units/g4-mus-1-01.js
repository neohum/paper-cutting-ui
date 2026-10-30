/* 4학년 1학기 음악 1. 연주 — 신체표현·놀이로 음악 즐기기(1~12차시), 생활 속 연주 활동에 참여하기(13~23차시).
 * 노래·가락·리듬은 모두 이 단원을 위해 새로 지은 것이다. 놀이 이름으로만 나오는 '대문놀이'·'강강술래'는 저작권이 없는 전래 놀이·민요다(가사를 싣지 않는다).
 * 세마치장단(덩 - - 덩 - 덕 쿵 덕 -)은 전통 장단이다.
 */
(function () {
  const ILL = (what) => `Layered paper-cut illustration of ${what}, with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.`;
  const U = 'g4-음악-1학기-1';
  const head = (n, standards) => ({
    id: `g4-mus-1-01-${String(n).padStart(2, '0')}`, schema: 'edu-lesson.v1', catalog: { unit: U, lesson: n },
    grade: 4, subject: '음악', unitTitle: '1. 연주', standards, minutes: 40, formats: ['chromebook', 'projector', 'print'],
  });
  const S3 = ['[4음01-03]'];
  const S4 = ['[4음01-04]'];
  // 교구 단계 옵션(차시마다 새 객체)
  const mel = () => ({
    easy: { from: '도', to: '높은도', names: 'solfa', showWhileListening: true },
    base: { from: '도', to: '높은도', names: 'solfa' },
    challenge: { from: '도', to: '높은도', names: 'none', nameToggle: false, black: true },
  });
  const rhy = (meter, measures) => ({
    easy: { mode: 'rhythm', meter, measures, blocks: ['q', 'e', 'h', 'qr'], showBeats: true },
    base: { mode: 'rhythm', meter, measures, blocks: ['q', 'e', 'h', 'qr', 'dh'] },
    challenge: { mode: 'rhythm', meter, measures, blocks: ['q', 'e', 'h', 'qr', 'dh', 'er', 'hr'] },
  });
  const cardsLv = () => ({ easy: { live: true, instant: true }, base: {}, challenge: { shuffle: true } });
  const MOVE_SAFE = ['팔을 벌려 친구와 부딪히지 않을 만큼 떨어져 서요.', '뛰는 동작은 미끄럽지 않은 바닥에서 하고, 실내화를 바르게 신어요.'];

  const lessons = [];

  // ───────────────────────── 1차시 (도입) ─────────────────────────
  lessons.push(Object.assign(head(1, S3), {
    title: '손뼉으로 박 찾고 손으로 가락 높낮이 그리기',
    objective: '음악을 들으며 박이 짚이는 자리를 손뼉과 리듬 블록으로 나타내고, 가락이 오르내리는 흐름을 손 높이와 건반으로 따라 나타낼 수 있다.',
    illustration: {
      prompt: ILL('children clapping hands in a circle while musical notes rise and fall like a paper ribbon above them'),
      scene: { viewBox: [480, 270], layers: [
        { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 110, y: 52 }, { motif: 'hills', y: 206 },
        { motif: 'bird', x: 200, y: 90 }, { motif: 'bird', x: 260, y: 70 }, { motif: 'tree', x: 70, y: 214 }, { motif: 'flower', x: 400, y: 224 },
        { motif: 'text', x: 240, y: 150, text: '박은 손뼉, 높낮이는 손으로', size: 22 },
      ] },
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"이번 단원에서는 몸과 놀이로 음악을 즐겨요. 그 전에 3학년 때 배운 박이 무엇이었는지 말해 볼까요?" 시계 초침처럼 일정하게 뛰는 것이 박이라는 대답을 기다린다. 시연 단추로 네 박 리듬을 들려주며 함께 손뼉을 친다. 이어서 "몸을 크게 흔들기만 하면 음악에 맞춘 걸까요?" 하고 묻고, 박에 맞춰 움직여야 음악에 맞춘 것이라고 짚는다.',
        student: '들리는 음악에 맞춰 손뼉을 쳐 봅시다. 박이 어디에서 짚이나요?',
        demo: { tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 2 }, sequence: [{ rhythm: ['q', 'q', 'q', 'q'] }, { rhythm: ['q', 'q', 'q', 'q', 'q', 'q', 'q', 'q'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 박마다 손뼉 블록 놓기', minutes: 13, tool: 'keyboard',
            teacher: '"리듬 듣기를 누르고 먼저 손뼉으로 따라 쳐 본 다음 블록을 놓아요." 4분음표는 한 박, 2분음표는 두 박이다. 2분음표 자리에서 손뼉을 두 번 치는 학생에게 "소리는 한 번, 길게 두 박이에요"라고 짚는다. 쉼표 자리에서도 박은 흘러간다는 것을 손을 펴서 멈추는 동작으로 보여 준다.',
            task: '리듬 듣기를 누르고 손뼉으로 따라 친 뒤, 들은 리듬을 블록으로 놓아요. 한 마디는 4박이에요.',
            levels: rhy(4, 2),
            items: [
              { prompt: '리듬 듣기를 누르고, 박마다 한 번씩 치는 손뼉을 블록으로 놓아 보세요.', toolOptions: { pattern: ['q', 'q', 'q', 'q', 'q', 'q', 'q', 'q'] }, target: { rhythm: ['q', 'q', 'q', 'q', 'q', 'q', 'q', 'q'] }, difficulty: 0.05 },
              { prompt: '긴 손뼉과 짧은 손뼉이 섞인 리듬이에요. 듣고 블록으로 놓아 보세요.', toolOptions: { pattern: ['h', 'q', 'q', 'q', 'q', 'h'] }, target: { rhythm: ['h', 'q', 'q', 'q', 'q', 'h'] }, difficulty: 0.2 },
              { prompt: '쉬는 박이 있는 리듬이에요. 듣고 블록으로 놓아 보세요.', toolOptions: { pattern: ['q', 'q', 'qr', 'q', 'q', 'q', 'q', 'qr'] }, target: { rhythm: ['q', 'q', 'qr', 'q', 'q', 'q', 'q', 'qr'] }, difficulty: 0.25,
                predict: { q: '쉬는 박에서 손은 어떻게 할까요?', options: ['손뼉을 쳐요', '손을 멈춰요'], answer: 1 },
                conclude: '쉼표 자리에서도 박은 계속 흘러가요. 손을 멈추고 마음속으로 세어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 가락 길 따라 손 올리고 내리기', minutes: 13, tool: 'keyboard',
            teacher: '"가락이 올라가면 손도 올라가요. 소리를 들으며 손을 움직여 볼까요?" 손 높이로 먼저 나타낸 뒤 건반으로 친다. 건반은 오른쪽으로 갈수록 높은 소리다. 손을 마구 흔드는 학생에게는 "한 음에 한 번, 높이만큼만 움직여요"라고 말한다.',
            task: '가락 듣기를 누르고 손을 올리고 내리며 들은 뒤, 같은 가락을 건반으로 쳐요. 오른쪽 건반일수록 높은 소리예요.',
            levels: mel(),
            items: [
              { prompt: '가락 듣기를 누르고, 계단처럼 올라가는 가락을 따라 쳐 보세요.', toolOptions: { melody: ['도', '레', '미', '파', '솔'] }, target: { notes: ['도', '레', '미', '파', '솔'] }, difficulty: 0.1 },
              { prompt: '이번에는 내려오는 가락이에요. 손을 내리며 듣고 따라 쳐 보세요.', toolOptions: { melody: ['라', '솔', '파', '미', '레'] }, target: { notes: ['라', '솔', '파', '미', '레'] }, difficulty: 0.15 },
              { prompt: '올라갔다 내려오는 가락이에요. 손 높이로 따라가며 듣고 쳐 보세요.', toolOptions: { melody: ['도', '미', '솔', '미', '도'] }, target: { notes: ['도', '미', '솔', '미', '도'] }, reveal: 'after-check', difficulty: 0.3,
                conclude: '가락이 올라가면 손도 올라가고, 내려오면 손도 내려와요.' },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 손뼉은 무엇에 맞춰 쳤나요? 손 높이는 무엇을 따라갔나요?" 박과 가락 높낮이를 한 문장씩 말하게 한다. 출구 2번에서 \'크게 움직였으니까\'를 고른 학생에게는 다음 시간 첫머리에 박에 맞춰 걷기부터 다시 한다.',
        exitTicket: [
          { type: 'tool', tool: 'keyboard', options: { from: '도', to: '높은도', melody: ['미', '파', '솔', '파', '미'] }, prompt: '가락을 듣고 건반으로 따라 쳐 보세요.', target: { notes: ['미', '파', '솔', '파', '미'] }, difficulty: 0.25 },
          { type: 'choice', prompt: '박과 상관없이 몸을 크게 흔들었어요. 음악에 맞춘 걸까요?', options: ['네, 크게 움직였으니까요', '아니요, 박에 맞춰 움직여야 해요', '음악을 크게 틀면 맞아요'], answer: 1, difficulty: 0.15, explain: '움직임이 크고 작은 것보다 박에 맞추는 것이 음악에 맞춘 거예요.' },
          { type: 'mood', prompt: '손뼉과 손으로 음악을 나타내 보니 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '박과 가락 높낮이',
      items: [
        { type: 'figure', prompt: '마디마다 몇 박인지 세어 쓰세요.', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 2 }, figures: [{ state: { rhythm: ['h', 'q', 'q', 'q', 'qr', 'h'] }, caption: '첫째 마디 ___박, 둘째 마디 ___박' }], answer: '첫째 마디 4박, 둘째 마디 4박' },
        { type: 'choice', prompt: '쉼표 자리에서 하는 행동에 ○ 하세요.', options: ['손뼉을 두 번 쳐요', '손을 멈추고 마음속으로 박을 세어요', '박을 건너뛰고 다음 마디로 가요'], answer: '손을 멈추고 마음속으로 박을 세어요' },
        { type: 'table', prompt: '음표·쉼표마다 손뼉을 어떻게 치는지 쓰세요.', columns: ['음표·쉼표', '몇 박', '손뼉 치는 법'], cells: [['4분음표', '', ''], ['2분음표', '', ''], ['4분쉼표', '', '']] },
        { type: 'draw', prompt: '‘도 미 솔 미 도’ 가락이 오르내리는 모양을 선으로 그려 보세요.' },
        { type: 'short', prompt: '박에 맞춰 움직이는 것과 그냥 크게 움직이는 것은 어떻게 다른지 쓰세요.' },
      ],
      easy: {
        note: '4분음표는 손뼉 한 번(1박), 2분음표는 손뼉 한 번을 길게(2박), 쉼표는 손을 멈춰요.',
        items: [
          { type: 'figure', prompt: '마디마다 몇 박인지 세어 쓰세요.', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 1, showBeats: true }, figures: [{ state: { rhythm: ['q', 'q', 'h'] }, caption: '___박' }], answer: '4박' },
          { type: 'choice', prompt: '가락이 올라갈 때 손은 어떻게 할까요?', options: ['올려요', '내려요'], answer: '올려요' },
          { type: 'draw', prompt: '‘도 레 미 파 솔’ 가락을 계단 모양으로 그려 보세요.' },
          { type: 'short', prompt: '오늘 손뼉 친 리듬 가운데 재미있었던 것을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '리듬 블록 아래에 마디마다 지금 박 수가 보이고, 가락을 듣는 동안 건반이 빛나요.',
      base: '박 수를 스스로 세고, 계이름을 켜고 끌 수 있어요.',
      challenge: '8분쉼표·2분쉼표 블록이 더 나오고, 계이름 없이 검은건반까지 있는 건반에서 귀로만 찾아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 2분음표에서 손뼉을 두 번 친다 → 한 번 치고 손을 벌려 길게 끈다. ② 쉼표에서 박을 건너뛴다 → 손을 펴서 멈추며 "쉬고"라고 소리 없이 입 모양을 한다. ③ 몸을 크게 움직이면 음악에 맞춘 것이라 여긴다 → 박에 맞춘 작은 움직임과 박을 무시한 큰 움직임을 견주어 보인다. 소리는 학생이 누를 때만 난다.',
  }));

  // ───────────────────────── 2차시 (연습) ─────────────────────────
  lessons.push(Object.assign(head(2, S3), {
    title: '센박은 무릎, 여린박은 손뼉 — 몸 악기 무늬 만들기',
    objective: '2박·3박·4박 음악의 센박과 여린박을 무릎·발·손뼉으로 구별하여 몸 악기 무늬로 나타낼 수 있다.',
    illustration: {
      prompt: ILL('children sitting in a row patting their knees and clapping their hands, with paper hand and knee shapes repeating like a pattern'),
      scene: { viewBox: [480, 270], layers: [
        { motif: 'cloud', x: 120, y: 56 }, { motif: 'cloud', x: 360, y: 44, s: 0.8 }, { motif: 'hills', y: 208 },
        { motif: 'star', x: 90, y: 120, s: 0.6 }, { motif: 'star', x: 390, y: 120, s: 0.6 }, { motif: 'house', x: 420, y: 214 },
        { motif: 'text', x: 240, y: 150, text: '무릎 손뼉 손뼉', size: 24 },
      ] },
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"지난 시간에 박마다 손뼉을 쳤지요. 그런데 박마다 힘이 다 같았나요?" 교사가 첫 박만 무릎을 세게 치며 셋씩 세어 보인다. "하나 둘 셋, 하나 둘 셋 — 어느 박이 가장 세게 들리나요?" 첫 박이라는 대답을 기다린 뒤 이것이 센박이라고 이름 붙인다. 셋째 박을 세게 치는 학생에게는 박을 소리 내어 세며 다시 해 보게 한다.',
        student: '선생님을 따라 무릎과 손뼉으로 박을 세어 봅시다. 어느 박이 가장 센가요?',
        demo: { tool: 'pattern', options: { seq: ['무릎', '손뼉', '손뼉', '무릎', '손뼉', null], palette: ['무릎', '손뼉'] }, sequence: [{ fill: [1] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 몸 악기 무늬의 빈칸 채우기', minutes: 14, tool: 'pattern',
            teacher: '"센박은 무릎, 여린박은 손뼉이에요. 2박은 센–여린, 3박은 센–여린–여린, 4박은 센–여린–중간–여린이에요." 무늬를 소리 내어 읽으며 몸으로 쳐 본 뒤 빈칸을 채운다. 박자마다 묶음 길이가 다르다는 것을 놓치고 아무 데나 무릎을 넣는 학생에게 "몇 개씩 한 묶음인가요?"를 묻는다.',
            task: '몸 악기 무늬를 소리 내어 읽고 몸으로 쳐 본 뒤, 빈칸에 알맞은 조각을 넣어요.',
            levels: { easy: { perRow: 6 }, base: { perRow: 8 }, challenge: { perRow: 8, revealAfterCheck: true } },
            items: [
              { prompt: '3박 음악이에요. 무릎–손뼉–손뼉이 되풀이돼요. 빈칸을 채워 보세요.', toolOptions: { seq: ['무릎', '손뼉', '손뼉', '무릎', '손뼉', null, '무릎', null, '손뼉'], palette: ['무릎', '손뼉', '발'], perRow: 6 }, target: { fill: ['손뼉', '손뼉'] }, difficulty: 0.1 },
              { prompt: '2박 음악이에요. 발–손뼉이 되풀이돼요. 빈칸을 채워 보세요.', toolOptions: { seq: ['발', '손뼉', '발', null, '발', '손뼉', null, '손뼉'], palette: ['무릎', '손뼉', '발'] }, target: { fill: ['손뼉', '발'] }, difficulty: 0.15 },
              { prompt: '4박 음악이에요. 센박은 무릎, 중간 박은 발이에요. 빈칸을 채워 보세요.', toolOptions: { seq: ['무릎', '손뼉', '발', '손뼉', null, '손뼉', null, '손뼉'], palette: ['무릎', '손뼉', '발'] }, target: { fill: ['무릎', '발'] }, difficulty: 0.3,
                predict: { q: '4박 음악에서 다섯째 조각은 몇째 박일까요?', options: ['첫째 박', '둘째 박', '셋째 박'], answer: 0 },
                conclude: '4박 음악은 네 개씩 한 묶음이라 다섯째 조각에서 다시 센박이 와요.' },
              { prompt: '3박 무늬에서 규칙에 맞지 않는 조각을 하나 찾아 눌러 보세요.', toolOptions: { mode: 'odd', seq: ['무릎', '손뼉', '손뼉', '무릎', '손뼉', '손뼉', '손뼉', '손뼉', '손뼉'], perRow: 6 }, target: { odd: 6 }, difficulty: 0.25 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 3박 리듬 블록 놓기', minutes: 12, tool: 'keyboard',
            teacher: '"이번에는 한 마디가 3박이에요. 마디의 첫 박이 센박이지요." 리듬을 듣는 동안 첫 박에 무릎을 치게 한다. 2분음표가 2박이라 3박 마디에 4분음표 하나만 더 들어간다는 것을 손가락으로 세며 확인하게 한다.',
            task: '한 마디가 3박이에요. 리듬을 듣고 블록으로 놓거나, 마디마다 3박이 되게 채워요.',
            levels: rhy(3, 2),
            items: [
              { prompt: '3박 리듬을 듣고 블록으로 놓아 보세요. 첫 박에 무릎을 쳐요.', toolOptions: { pattern: ['q', 'q', 'q', 'h', 'q'] }, target: { rhythm: ['q', 'q', 'q', 'h', 'q'] }, difficulty: 0.2 },
              { prompt: '첫 박이 길게 울리는 3박 리듬이에요. 듣고 블록으로 놓아 보세요.', toolOptions: { pattern: ['h', 'q', 'h', 'q'] }, target: { rhythm: ['h', 'q', 'h', 'q'] }, difficulty: 0.25 },
              { prompt: '두 마디가 모두 3박이 되게 블록을 놓아요. 2분음표를 꼭 넣어요.', target: { beats: true, use: ['h'] }, reveal: 'after-check', difficulty: 0.3,
                conclude: '2분음표(2박)에 4분음표(1박)를 더하면 3박 한 마디가 돼요.' },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"2박, 3박, 4박 음악에서 센박은 늘 몇째 박이었나요?" 첫째 박이라는 대답을 확인한다. 출구 1번을 틀린 학생은 무늬를 소리 내어 읽으며 다시 쳐 보게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'pattern', options: { seq: ['무릎', '손뼉', '손뼉', '손뼉', '무릎', '손뼉', '손뼉', null], palette: ['무릎', '손뼉', '발'] }, prompt: '4박 무늬예요. 빈칸에 알맞은 조각을 넣으세요.', target: { fill: ['손뼉'] }, difficulty: 0.2 },
          { type: 'choice', prompt: '3박 음악에서 가장 세게 치는 박은 몇째 박인가요?', options: ['첫째 박', '둘째 박', '셋째 박'], answer: 0, difficulty: 0.1, explain: '3박 음악은 센–여린–여린이라 첫째 박이 센박이에요.' },
          { type: 'mood', prompt: '몸 악기로 박을 쳐 보니 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '센박과 여린박',
      items: [
        { type: 'figure', prompt: '무늬의 규칙을 찾아 빈칸에 알맞은 몸 악기 이름을 쓰세요.', tool: 'pattern', wide: true, figures: [{ options: { seq: ['무릎', '손뼉', '손뼉', '무릎', null, '손뼉', null, '손뼉', '손뼉'] }, caption: '' }], answer: '손뼉, 무릎' },
        { type: 'table', prompt: '박자마다 센박(센)과 여린박(여)을 차례로 쓰세요.', columns: ['박자', '박의 차례'], cells: [['2박', ''], ['3박', ''], ['4박', '']] },
        { type: 'choice', prompt: '3박 리듬 한 마디가 되는 것에 ○ 하세요.', options: ['2분음표 + 4분음표', '2분음표 + 2분음표', '4분음표 + 4분음표'], answer: '2분음표 + 4분음표' },
        { type: 'short', prompt: '내가 만든 3박 몸 악기 무늬를 써 보세요(예: 발–손뼉–손뼉).' },
      ],
      easy: {
        note: '센박은 마디의 첫째 박이에요. 2박은 둘씩, 3박은 셋씩 묶어 세어요.',
        items: [
          { type: 'figure', prompt: '빈칸에 알맞은 몸 악기 이름을 쓰세요.', tool: 'pattern', wide: true, figures: [{ options: { seq: ['무릎', '손뼉', '무릎', '손뼉', null, '손뼉'] }, caption: '' }], answer: '무릎' },
          { type: 'choice', prompt: '2박 음악의 센박은 몇째 박인가요?', options: ['첫째 박', '둘째 박'], answer: '첫째 박' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '3박 음악은 센–___–___ 차례예요.', answer: '여린, 여린' },
          { type: 'short', prompt: '무릎과 손뼉 가운데 센박에 친 것을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '무늬가 한 줄에 여섯 조각씩 놓여 묶음이 잘 보이고, 리듬 블록 아래에 마디마다 박 수가 보여요.',
      base: '무늬 여덟 조각을 한 줄로 보며 묶음을 스스로 찾아요.',
      challenge: '틀린 칸을 알려 주지 않고, 리듬 블록에 8분쉼표·2분쉼표가 더 나와요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 3박을 둘씩 묶는다 → 숫자를 소리 내어 "하나 둘 셋"으로 세며 친다. ② 4박의 셋째 박(중간 박)을 센박만큼 세게 친다 → 첫째 박보다 조금 약하게. ③ 2분음표를 3박 마디 끝에 놓아 마디줄을 넘긴다 → 교구가 그 마디를 빨갛게 알린다. 몸 악기 무늬는 짝과 마주 보고 따라 치게 하면 박을 놓친 학생이 금방 드러난다.',
  }));

  // ───────────────────────── 3차시 (확장) ─────────────────────────
  lessons.push(Object.assign(head(3, S3), {
    title: '차례로·뛰어 움직이는 가락 모양 찾기',
    objective: '가락이 차례로 오르내리는지, 뛰어 오르내리는지, 같은 음에 머무는지를 구별하여 손 높이와 건반으로 나타낼 수 있다.',
    illustration: {
      prompt: ILL('a paper staircase and a row of hopping frogs on stepping stones, showing melodies that step and leap up a hill'),
      scene: { viewBox: [480, 270], layers: [
        { motif: 'mountain', x: 330, y: 210, s: 1.1 }, { motif: 'sun', x: 410, y: 60, s: 0.7 }, { motif: 'hills', y: 214 },
        { motif: 'leaf', x: 90, y: 190, s: 0.6 }, { motif: 'leaf', x: 150, y: 160, s: 0.6 }, { motif: 'leaf', x: 230, y: 120, s: 0.6 },
        { motif: 'text', x: 200, y: 70, text: '차례로? 뛰어서?', size: 22 },
      ] },
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"계단을 한 칸씩 오르는 것과 징검다리를 훌쩍 건너뛰는 것은 어떻게 다른가요?" 두 움직임을 손으로 흉내 내게 한 뒤, 시연 단추로 \'도 레 미\'와 \'도 미 솔\'을 들려준다. "어느 쪽이 계단이고 어느 쪽이 징검다리 같나요?" 둘 다 올라가지만 움직이는 너비가 다르다는 것을 짚는다.',
        student: '두 가락을 듣고, 계단처럼 오르는 가락과 건너뛰듯 오르는 가락을 손으로 나타내 봅시다.',
        demo: { tool: 'keyboard', options: { from: '도', to: '높은도' }, sequence: [{ notes: ['도', '레', '미'] }, { notes: ['도', '미', '솔'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 계이름 줄을 보고 가락 모양 고르기', minutes: 13, tool: 'pattern',
            teacher: '"계이름 줄을 손가락으로 짚으며 손을 움직여 보세요. 한 칸씩인가요, 건너뛰나요, 그대로인가요?" 계이름 차례(도 레 미 파 솔 라 시 높은도)를 칠판에 세로로 적어 두고 짚게 한다. 같은 음이 이어지는 곳에서 손을 올리는 학생에게 "같은 음은 높이도 그대로예요"라고 말한다.',
            task: '계이름 줄을 읽고 손 높이로 따라가 본 뒤, 가락 모양에 맞는 말을 골라요.',
            levels: { easy: { perRow: 5 }, base: { perRow: 8 }, challenge: { perRow: 8, revealAfterCheck: true } },
            items: [
              { prompt: '이 가락은 어떻게 움직이나요? 손으로 따라가 보고 골라 보세요.', toolOptions: { mode: 'rule', seq: ['솔', '솔', '솔', '미', '도'], choices: ['같은 음에 머물다 내려가요', '점점 올라가요', '뛰어 올라가요'], why: ['', '첫 음과 마지막 음을 견주어 보세요.', '앞의 세 음은 높이가 같아요.'] }, target: { pick: 0 }, difficulty: 0.15,
                levels: { easy: { toolOptions: { choices: ['같은 음에 머물다 내려가요', '점점 올라가요'], why: ['', '첫 음과 마지막 음을 견주어 보세요.'] } } } },
              { prompt: '이 가락은 어떻게 움직이나요? 건반에서 몇 칸씩 움직이는지 보세요.', toolOptions: { mode: 'rule', seq: ['도', '솔', '도', '솔', '높은도'], choices: ['한 칸씩 차례로 올라가요', '뛰어 오르내려요', '같은 음만 나와요'], why: ['도에서 솔까지는 여러 칸을 건너요.', '', '음이 바뀌고 있어요.'] }, target: { pick: 1 }, difficulty: 0.25 },
              { prompt: '이 가락은 어떻게 움직이나요? 가운데 음이 가장 높은지 낮은지 보세요.', toolOptions: { mode: 'rule', seq: ['미', '레', '도', '레', '미'], choices: ['내려갔다 다시 올라가요', '올라갔다 다시 내려가요', '같은 음에 머물러요'], why: ['', '가운데 도가 가장 낮은 음이에요.', '음이 바뀌고 있어요.'] }, target: { pick: 0 }, difficulty: 0.3,
                levels: { challenge: { toolOptions: { seq: ['솔', '미', '도', '미', '솔', '높은도'] }, prompt: '이 가락은 어떻게 움직이나요? 마지막 음이 처음 음보다 높은지도 보세요.', target: { pick: 0 } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 뛰는 가락 따라 치고 지어 보기', minutes: 14, tool: 'keyboard',
            teacher: '"뛰어 오르는 가락은 손을 훌쩍, 차례로 오르는 가락은 손을 조금씩 올려요." 들은 뒤 손으로 먼저 나타내게 하고 건반으로 친다. 가락을 지을 때 \'뛰는 곳\'을 넣었는지 짝에게 쳐서 들려준 뒤에만 점검 목록을 표시하게 한다.',
            task: '가락을 듣고 손으로 나타낸 뒤 건반으로 따라 쳐요. 마지막에는 규칙에 맞게 내 가락을 지어요.',
            levels: mel(),
            items: [
              { prompt: '가락 듣기를 누르고, 뛰어 올라가는 가락을 따라 쳐 보세요.', toolOptions: { melody: ['도', '미', '솔', '높은도'] }, target: { notes: ['도', '미', '솔', '높은도'] }, difficulty: 0.2 },
              { prompt: '같은 음이 이어지다 차례로 내려오는 가락이에요. 듣고 따라 쳐 보세요.', toolOptions: { melody: ['솔', '솔', '솔', '파', '미', '레', '도'] }, target: { notes: ['솔', '솔', '솔', '파', '미', '레', '도'] }, reveal: 'after-check', difficulty: 0.3 },
              { prompt: '도로 시작해 도로 끝나는 여섯 음 가락을 지어요. 뛰어 오르는 곳을 한 번 넣어요.', target: { compose: { length: 6, startOn: '도', endOn: '도' }, selfCheck: ['가운데에 뛰어 오르는 곳이 있어요', '지은 가락을 손 높이로 나타내 보았어요'] }, difficulty: 0.3,
                conclude: '차례로 움직이는 곳과 뛰는 곳이 섞이면 가락이 더 재미있어져요.' },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"차례로 움직이는 가락과 뛰는 가락을 손으로 어떻게 다르게 나타냈나요?" 짝끼리 지은 가락을 쳐 주고 상대가 손으로 따라가게 한다. 출구 2번을 틀린 학생은 건반에서 칸 수를 세어 보게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'pattern', options: { mode: 'rule', seq: ['라', '솔', '미', '레', '도'], choices: ['내려가요', '올라가요', '같은 음에 머물러요'] }, prompt: '이 가락은 어떻게 움직이나요? 골라 보세요.', target: { pick: 0 }, difficulty: 0.15 },
          { type: 'choice', prompt: '‘도–솔’처럼 건반 여러 칸을 건너뛰는 가락은 손을 어떻게 움직일까요?', options: ['조금씩 천천히 올려요', '크게 훌쩍 올려요', '움직이지 않아요'], answer: 1, difficulty: 0.2, explain: '여러 칸을 건너뛰면 높이 차이가 커서 손도 크게 움직여요.' },
          { type: 'mood', prompt: '내가 지은 가락이 마음에 드나요?' },
        ],
      },
    ],
    worksheet: {
      title: '가락의 모양',
      items: [
        { type: 'table', prompt: '가락이 어떻게 움직이는지 ○ 하세요.', columns: ['가락', '차례로', '뛰어서', '같은 음'], cells: [['도 레 미 파', '', '', ''], ['도 미 솔 높은도', '', '', ''], ['솔 솔 솔 솔', '', '', '']] },
        { type: 'figure', prompt: '건반 아래 빈칸에 계이름을 쓰고, ‘도 미 솔’을 짚어 ○ 하세요.', tool: 'keyboard', options: { from: '도', to: '높은도' }, figures: [{ caption: '' }], answer: '도 레 미 파 솔 라 시 높은도 / 도·미·솔에 ○' },
        { type: 'choice', prompt: '‘미 레 도 레 미’ 가락의 모양에 ○ 하세요.', options: ['내려갔다 올라가요', '올라갔다 내려가요', '같은 음에 머물러요'], answer: '내려갔다 올라가요' },
        { type: 'draw', prompt: '내가 지은 여섯 음 가락을 계이름으로 쓰고, 그 아래에 가락선을 그리세요.' },
      ],
      easy: {
        note: '건반에서 바로 옆으로 가면 ‘차례로’, 몇 칸을 건너면 ‘뛰어서’예요.',
        items: [
          { type: 'figure', prompt: '건반 아래에 계이름을 따라 쓰세요.', tool: 'keyboard', options: { from: '도', to: '높은도', printNames: true }, figures: [{ caption: '' }] },
          { type: 'choice', prompt: '‘도 레 미’는 어떻게 움직이나요?', options: ['차례로 올라가요', '뛰어 올라가요'], answer: '차례로 올라가요' },
          { type: 'choice', prompt: '‘솔 솔 솔’은 어떻게 움직이나요?', options: ['같은 음에 머물러요', '내려가요'], answer: '같은 음에 머물러요' },
          { type: 'draw', prompt: '‘도 레 미 레 도’ 가락선을 그리세요.' },
        ],
      },
    },
    differentiation: {
      easy: '가락 모양 보기가 두 개만 나오고, 가락을 듣는 동안 건반이 빛나요.',
      base: '보기 세 개에서 고르고, 계이름을 켜고 끌 수 있어요.',
      challenge: '틀린 까닭을 확인 전에는 알려 주지 않고, 더 긴 가락에서 모양을 찾아요. 건반은 계이름 없이 귀로 찾아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 같은 음이 이어지는 곳에서도 손을 올린다 → 같은 음은 손을 그대로. ② 뛰는 가락과 차례로 오르는 가락을 구별하지 못한다 → 건반 칸 수를 세어 보게 한다. ③ 가락을 지으며 아무 음이나 누른다 → 시작과 끝 음(도)을 먼저 정하고 가운데를 채운다. 지은 가락은 짝이 손 높이로 따라가 보는 것으로 확인한다.',
  }));

  // ───────────────────────── 4차시 (확장) ─────────────────────────
  lessons.push(Object.assign(head(4, S3), {
    title: '세마치장단에 맞춰 무릎장단 치기',
    objective: '세마치장단을 듣고 덩·덕·쿵을 박 칸에 놓으며, 한 장단이 세 박으로 이루어져 있음을 무릎장단으로 나타낼 수 있다.',
    illustration: {
      prompt: ILL('a traditional Korean janggu drum on a paper mat with children tapping their knees in rhythm under a full moon'),
      scene: { viewBox: [480, 270], layers: [
        { motif: 'moon', x: 400, y: 60, s: 0.8 }, { motif: 'star', x: 100, y: 50, s: 0.5 }, { motif: 'star', x: 300, y: 40, s: 0.4 },
        { motif: 'mountain', x: 120, y: 206 }, { motif: 'hills', y: 214 }, { motif: 'house', x: 380, y: 216 },
        { motif: 'text', x: 240, y: 140, text: '덩 - - 덩 - 덕 쿵 덕 -', size: 22 },
      ] },
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"우리 음악에도 박을 세는 틀이 있어요. 장구로 치는 이 틀을 장단이라고 해요." 시연 단추로 세마치장단을 들려주며 교사가 무릎장단으로 친다. "덩은 두 무릎을 함께, 쿵은 왼 무릎, 덕은 오른 무릎이에요." 세마치는 한 박을 셋으로 나눈 칸이 세 묶음, 모두 아홉 칸이라는 것을 손가락 셋을 세 번 펴 보이며 짚는다.',
        student: '세마치장단을 들으며 선생님을 따라 무릎을 쳐 봅시다.',
        demo: { tool: 'keyboard', options: { mode: 'janggu', beats: 9, group: 3, jangdan: '세마치' }, sequence: [{ strokes: ['덩', '', '', '덩', '', '덕', '쿵', '덕', ''] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 세마치 칸에 구음 놓기', minutes: 14, tool: 'keyboard',
            teacher: '"굵은 금은 한 박이 시작되는 자리예요. 장단 듣기를 누르고 무릎으로 먼저 쳐 본 다음 칸에 구음을 넣어요." 덩(두 손)과 쿵(왼손 하나)을 헷갈리는 학생이 많다. "손이 몇 개 움직였나요?"를 묻는다. 한 칸씩 밀려 놓은 학생에게는 굵은 금마다 "하나, 둘, 셋" 박을 세게 한다.',
            task: '장단 듣기를 누르고 무릎장단으로 따라 친 뒤, 칸마다 구음을 넣어요. 굵은 금이 한 박의 시작이에요.',
            levels: {
              easy: { mode: 'janggu', beats: 9, group: 3, jangdan: '세마치', strokes: ['덩', '쿵', '덕'] },
              base: { mode: 'janggu', beats: 9, group: 3, jangdan: '세마치', strokes: ['덩', '쿵', '덕', '기덕'] },
              challenge: { mode: 'janggu', beats: 9, group: 3, jangdan: '세마치' },
            },
            items: [
              { prompt: '세 박의 첫 칸만 치는 장단이에요. 첫 박은 덩, 나머지는 쿵이에요. 듣고 놓아 보세요.', toolOptions: { pattern: ['덩', '', '', '쿵', '', '', '쿵', '', ''] }, target: { strokes: ['덩', '', '', '쿵', '', '', '쿵', '', ''] }, difficulty: 0.1 },
              { prompt: '세마치장단 한 장단을 듣고 아홉 칸에 구음을 넣어 보세요.', toolOptions: { pattern: ['덩', '', '', '덩', '', '덕', '쿵', '덕', ''] }, target: { strokes: ['덩', '', '', '덩', '', '덕', '쿵', '덕', ''] }, difficulty: 0.3,
                predict: { q: '세마치장단에서 덩은 몇 번 나올까요?', options: ['한 번', '두 번', '세 번'], answer: 1 },
                conclude: '세마치장단은 덩이 두 번, 덕이 두 번, 쿵이 한 번 나와요.' },
              { prompt: '둘째 박의 덩을 쿵으로 바꾼 장단이에요. 듣고 칸에 놓아 보세요.', toolOptions: { pattern: ['덩', '', '', '쿵', '', '덕', '쿵', '덕', ''] }, target: { strokes: ['덩', '', '', '쿵', '', '덕', '쿵', '덕', ''] }, reveal: 'after-check', difficulty: 0.35 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 구음과 치는 법 잇기', minutes: 12, tool: 'mindmap',
            teacher: '"구음은 장구 소리를 입으로 읽는 말이에요. 덩·쿵·덕을 들으면 손이 어떻게 움직여야 할까요?" 장구가 없으면 무릎으로 대신 친다는 것을 짚는다. 세 박의 차례를 놓을 때는 아홉 칸을 셋씩 끊어 읽게 한다.',
            task: '가운데 주제를 읽고, 구음에 맞는 치는 법과 박의 차례를 이어요.',
            levels: cardsLv(),
            items: [
              { prompt: '장구 구음과 치는 법을 이어 보세요.', toolOptions: { mode: 'match', topic: '장구 구음', slots: [{ id: 'k1', label: '덩' }, { id: 'k2', label: '쿵' }, { id: 'k3', label: '덕' }], cards: ['북편과 채편을 함께', '왼손으로 북편만', '오른손 채로 채편만'] }, target: { match: { k1: '북편과 채편을 함께', k2: '왼손으로 북편만', k3: '오른손 채로 채편만' } }, difficulty: 0.15,
                hints: ['덩·쿵·덕을 칠 때 손이 몇 개 움직이는지, 어느 쪽 손이 움직이는지 떠올려 이어요.'],
                levels: { challenge: { toolOptions: { cards: ['북편과 채편을 함께', '왼손으로 북편만', '오른손 채로 채편만', '채로 채편을 굴려요'] } } } },
              { prompt: '장구 대신 무릎으로 칠 때의 치는 법을 이어 보세요.', toolOptions: { mode: 'match', topic: '무릎장단', slots: [{ id: 'm1', label: '덩' }, { id: 'm2', label: '쿵' }, { id: 'm3', label: '덕' }], cards: ['두 무릎을 함께 쳐요', '왼 무릎만 쳐요', '오른 무릎만 쳐요'] }, target: { match: { m1: '두 무릎을 함께 쳐요', m2: '왼 무릎만 쳐요', m3: '오른 무릎만 쳐요' } }, difficulty: 0.15,
                hints: ['장구의 왼쪽 북편은 왼 무릎, 오른쪽 채편은 오른 무릎이 대신해요. 구음마다 장구 어느 쪽을 치는지 떠올려 이어요.'] },
              { prompt: '세마치장단을 세 박으로 끊었어요. 박의 차례대로 놓아 보세요.', toolOptions: { mode: 'order', topic: '세마치 한 장단', slots: ['첫째 박', '둘째 박', '셋째 박'], cards: ['쿵 덕 -', '덩 - -', '덩 - 덕'] }, target: { order: ['덩 - -', '덩 - 덕', '쿵 덕 -'] }, difficulty: 0.3 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"세마치장단 한 장단은 몇 박이었나요? 다 함께 무릎장단으로 세 번 이어 쳐 볼까요?" 장단을 이어 칠 때 장단 끝의 쉬는 칸을 건너뛰고 바로 덩을 치는 학생이 많다. 셋째 박 마지막 칸에서 "쉬고"를 입 모양으로 하게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'keyboard', options: { mode: 'janggu', beats: 9, group: 3, jangdan: '세마치', strokes: ['덩', '쿵', '덕'] }, prompt: '세 박의 첫 칸에 모두 덩을 넣은 장단을 만들어 보세요.', target: { strokes: ['덩', '', '', '덩', '', '', '덩', '', ''] }, difficulty: 0.15 },
          { type: 'choice', prompt: '세마치장단 한 장단은 몇 박인가요?', options: ['두 박', '세 박', '네 박'], answer: 1, difficulty: 0.15, explain: '세마치장단은 한 박을 셋으로 나눈 칸이 세 묶음, 모두 세 박이에요.' },
          { type: 'choice', prompt: '무릎장단에서 ‘쿵’은 어떻게 칠까요?', options: ['두 무릎을 함께', '왼 무릎만', '오른 무릎만'], answer: 1, difficulty: 0.2, explain: '쿵은 장구의 북편(왼손) 소리라 왼 무릎만 쳐요.' },
        ],
      },
    ],
    worksheet: {
      title: '세마치장단',
      items: [
        { type: 'figure', prompt: '빈칸에 들어갈 구음을 쓰세요.', tool: 'keyboard', wide: true, options: { mode: 'janggu', beats: 9, group: 3, jangdan: '세마치' }, figures: [{ state: { strokes: ['덩', '', '', '', '', '덕', '쿵', '', ''] }, caption: '넷째 칸 ___, 여덟째 칸 ___' }], answer: '넷째 칸 덩, 여덟째 칸 덕' },
        { type: 'table', prompt: '구음과 치는 법을 쓰세요.', columns: ['구음', '장구로 칠 때', '무릎으로 칠 때'], cells: [['덩', '', ''], ['쿵', '', ''], ['덕', '', '']] },
        { type: 'choice', prompt: '세마치장단 한 장단의 칸 수에 ○ 하세요.', options: ['6칸', '9칸', '12칸'], answer: '9칸' },
        { type: 'short', prompt: '세마치장단을 무릎으로 칠 때 가장 어려웠던 칸과 그 까닭을 쓰세요.' },
      ],
      easy: {
        note: '덩 = 두 무릎 함께, 쿵 = 왼 무릎, 덕 = 오른 무릎. 굵은 금마다 한 박이에요.',
        items: [
          { type: 'figure', prompt: '세마치장단을 손가락으로 짚으며 읽어 보세요.', tool: 'keyboard', wide: true, options: { mode: 'janggu', beats: 9, group: 3, jangdan: '세마치' }, figures: [{ state: { strokes: ['덩', '', '', '덩', '', '덕', '쿵', '덕', ''] }, caption: '덩은 몇 번? ___번' }], answer: '2번' },
          { type: 'choice', prompt: '두 무릎을 함께 치는 구음에 ○ 하세요.', options: ['덩', '덕'], answer: '덩' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '세마치장단은 ___박이에요.', answer: '세' },
          { type: 'short', prompt: '무릎장단을 쳐 본 느낌을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '구음 붓이 덩·쿵·덕 셋만 나오고, 잇기 활동에서 맞게 놓은 카드에 초록 테두리가 보여요.',
      base: '기덕 붓이 더 나오고, 카드 잇기는 스스로 확인해요.',
      challenge: '더러러까지 모든 붓이 나오고, 잇기 활동에 함정 카드가 하나 더 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 덩과 쿵을 헷갈린다 → 덩은 두 손, 쿵은 왼손 하나. ② 장단 끝의 쉬는 칸을 건너뛰어 다음 장단이 빨라진다 → "쉬고"를 입 모양으로. ③ 한 칸씩 밀려 놓는다 → 굵은 금마다 박을 센다. 장구가 있으면 모둠별로 한 사람씩 돌아가며 치고, 나머지는 무릎장단으로 함께 친다.',
  }));

  // ───────────────────────── 5차시 (핵심) ─────────────────────────
  lessons.push(Object.assign(head(5, S3), {
    title: '음악이 바뀌는 곳에 맞춰 모둠 동작 정하기',
    objective: '곡의 부분마다 빠르기·셈여림·가락의 움직임을 듣고 어울리는 동작을 골라, 음악이 바뀌는 차례대로 모둠 움직임을 정할 수 있다.',
    safety: MOVE_SAFE,
    illustration: {
      prompt: ILL('a small group of children moving together on a paper stage, some tiptoeing, some reaching up, some jumping as music flows past'),
      scene: { viewBox: [480, 270], layers: [
        { motif: 'sun', x: 404, y: 58, s: 0.8 }, { motif: 'cloud', x: 110, y: 56 }, { motif: 'hills', y: 208 },
        { motif: 'flower', x: 80, y: 222 }, { motif: 'flower', x: 400, y: 224 }, { motif: 'bird', x: 240, y: 88 },
        { motif: 'text', x: 240, y: 150, text: '음악이 바뀌면 동작도 바꿔요', size: 21 },
      ] },
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"선생님이 피아노를 여리게 치면 어떻게 움직이고 싶나요? 세게 치면요?" 교사가 같은 가락을 여리게, 세게 들려주고 학생들이 자리에서 손으로 움직이게 한다. 시연 단추로 음악 특징과 동작을 잇는 모습을 보여 준 뒤 "동작은 멋있는 것보다 음악과 맞는 것이 먼저예요"라고 짚는다.',
        student: '여리게, 세게 들리는 음악에 맞춰 손으로 움직여 봅시다.',
        demo: { tool: 'story', options: { mode: 'match', slots: [{ id: 'd1', label: '여리게' }, { id: 'd2', label: '세게' }], cards: ['살금살금 걸어요', '힘차게 발을 굴러요'], shuffle: false }, sequence: [{ match: { d1: '살금살금 걸어요', d2: '힘차게 발을 굴러요' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 음악 특징에 어울리는 동작 잇기', minutes: 12, tool: 'story',
            teacher: '"이 동작은 음악의 어떤 모습을 닮았나요?" 카드마다 몸으로 잠깐 해 보고 잇게 한다. 빠르다와 세다를 같은 것으로 여겨 \'빠르고 여리게\'에 힘찬 동작을 고르는 학생에게 "빠르지만 소리는 작아요. 발소리도 작게 해 볼까요?"라고 묻는다.',
            task: '왼쪽 음악의 특징을 읽고, 그 모습에 가장 어울리는 동작 카드를 이어요.',
            levels: cardsLv(),
            items: [
              { prompt: '음악의 특징과 어울리는 동작을 이어 보세요.', toolOptions: { mode: 'match', slots: [{ id: 'f1', label: '빠르고 세게' }, { id: 'f2', label: '느리고 여리게' }, { id: 'f3', label: '가락이 올라가요' }], cards: ['힘차게 뛰어요', '살금살금 걸어요', '팔을 위로 뻗어요'] }, target: { match: { f1: '힘차게 뛰어요', f2: '살금살금 걸어요', f3: '팔을 위로 뻗어요' } }, difficulty: 0.1,
                levels: { challenge: { toolOptions: { cards: ['힘차게 뛰어요', '살금살금 걸어요', '팔을 위로 뻗어요', '아무렇게나 빙빙 돌아요'] } } } },
              { prompt: '음악이 바뀌는 모습과 어울리는 동작을 이어 보세요.', toolOptions: { mode: 'match', slots: [{ id: 'g1', label: '쉼표에서 소리가 멈춰요' }, { id: 'g2', label: '점점 빨라져요' }, { id: 'g3', label: '점점 여려져요' }], cards: ['제자리에 멈춰요', '걸음을 점점 빨리해요', '몸을 점점 낮춰요'] }, target: { match: { g1: '제자리에 멈춰요', g2: '걸음을 점점 빨리해요', g3: '몸을 점점 낮춰요' } }, difficulty: 0.2 },
              { prompt: '빠르기와 셈여림을 따로 보고 어울리는 동작을 이어 보세요.', toolOptions: { mode: 'match', slots: [{ id: 'h1', label: '빠르고 여리게' }, { id: 'h2', label: '느리고 세게' }], cards: ['발끝으로 종종걸음', '무겁게 쿵쿵 걷기', '힘차게 뛰어요'] }, target: { match: { h1: '발끝으로 종종걸음', h2: '무겁게 쿵쿵 걷기' } }, difficulty: 0.35,
                predict: { q: '빠른 음악은 늘 세게 움직여야 할까요?', options: ['네, 늘 세게요', '아니요, 따로 봐요'], answer: 1 },
                conclude: '빠르기와 셈여림은 다른 요소라서, 빠르면서 여린 음악에는 가볍고 빠른 동작이 어울려요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 음악 흐름대로 모둠 동작 차례 세우기', minutes: 14, tool: 'timer',
            teacher: '"우리가 고른 동작을 음악이 흘러가는 차례대로 놓아야 해요. 음악이 바뀌는 곳에서 동작도 바뀌나요?" 활동하기 전에 안전 점검을 먼저 하게 한다. 동작 차례를 놓은 모둠은 교사가 치는 음악에 맞춰 한 번 해 보고, 바뀌는 곳이 어긋났으면 다시 놓게 한다.',
            task: '안전 점검을 하고, 음악이 흐르는 차례대로 동작 카드를 놓아요. 모둠이 함께 해 본 뒤 점검 목록을 표시해요.',
            levels: { easy: { title: '우리 모둠 움직임' }, base: { title: '우리 모둠 움직임' }, challenge: { title: '우리 모둠 움직임' } },
            items: [
              { prompt: '모둠 움직임을 하기 전에 안전 점검을 하나씩 확인하고 표시해요.', toolOptions: { safety: ['팔을 벌려도 친구와 닿지 않아요', '바닥에 가방이나 물기가 없어요', '실내화를 바르게 신었어요'] }, target: { safety: true }, difficulty: 0.05 },
              { prompt: '곡이 ‘여리게 시작 → 점점 세게 → 가장 세게 끝’이에요. 동작 카드를 음악 차례대로 놓아요.', toolOptions: { cards: ['힘차게 발 구르기', '살금살금 걷기', '팔 흔들며 걷기'] }, target: { order: ['살금살금 걷기', '팔 흔들며 걷기', '힘차게 발 구르기'] }, difficulty: 0.15,
                hints: ['곡이 어떻게 바뀌어 가는지 처음부터 차례로 읽고, 그 소리 크기를 닮은 동작을 하나씩 놓아요.', '소리가 작을 때는 작은 동작, 커질수록 큰 동작이에요. 지금 놓은 동작의 크기가 점점 커지는지 보세요.'],
                levels: { challenge: { toolOptions: { cards: ['힘차게 발 구르기', '살금살금 걷기', '팔 흔들며 걷기', '두 팔 높이 들고 멈추기'] }, prompt: '곡이 ‘여리게 → 점점 세게 → 가장 세게 → 쉼표로 끝’이에요. 동작 카드를 음악 차례대로 놓아요.', target: { order: ['살금살금 걷기', '팔 흔들며 걷기', '힘차게 발 구르기', '두 팔 높이 들고 멈추기'] } } } },
              { prompt: '곡이 ‘빠르게 → 소리 멈춤 → 느리게’ 흘러가요. 동작 카드를 음악 차례대로 놓아요.', toolOptions: { cards: ['느리게 팔 돌리기', '제자리 뛰기', '얼음처럼 멈추기'] }, target: { order: ['제자리 뛰기', '얼음처럼 멈추기', '느리게 팔 돌리기'] }, difficulty: 0.2,
                hints: ['곡이 흘러가는 차례를 앞에서부터 읽고, 그 부분의 빠르기와 소리가 있는지를 닮은 동작을 하나씩 찾아 놓아요.'] },
              { prompt: '모둠이 정한 동작으로 음악에 맞춰 해 본 뒤, 해낸 것을 표시해요.', target: { selfCheck: ['음악이 바뀌는 곳에서 동작을 바꾸었어요', '모두 박에 맞춰 발을 디뎠어요', '쉼표에서 다 같이 멈췄어요'] }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"다른 모둠의 움직임을 보고, 음악이 바뀌는 곳에서 동작도 바뀌었는지 손을 들어 알려 주세요." 두 모둠이 짧게 보여 준다. 출구 2번에서 \'빠르면 세게\'를 고른 학생은 빠르고 여린 음악을 한 번 더 들려주고 발끝 걸음을 해 보게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { mode: 'match', slots: [{ id: 'x1', label: '느리고 여리게' }, { id: 'x2', label: '가락이 내려가요' }], cards: ['천천히 몸을 숙여요', '팔을 아래로 내려요'] }, prompt: '음악의 특징에 어울리는 동작을 이어 보세요.', target: { match: { x1: '천천히 몸을 숙여요', x2: '팔을 아래로 내려요' } }, difficulty: 0.2 },
          { type: 'choice', prompt: '빠르지만 여린 음악에 가장 어울리는 동작은 무엇인가요?', options: ['쿵쿵 세게 뛰기', '발끝으로 가볍게 종종걸음', '가만히 앉아 있기'], answer: 1, difficulty: 0.25, explain: '빠르기는 걸음 빠르기로, 여린 소리는 가벼운 발소리로 나타내요.' },
          { type: 'mood', prompt: '모둠과 함께 움직여 보니 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '음악에 어울리는 동작',
      items: [
        { type: 'table', prompt: '음악의 특징에 어울리는 동작을 쓰세요.', columns: ['음악의 특징', '어울리는 동작'], cells: [['빠르고 세게', ''], ['느리고 여리게', ''], ['가락이 올라가요', ''], ['쉼표', '']] },
        { type: 'choice', prompt: '빠르기와 셈여림에 대한 바른 말에 ○ 하세요.', options: ['빠르면 늘 세게 들려요', '빠르기와 셈여림은 따로 바뀔 수 있어요', '느리면 늘 여리게 들려요'], answer: '빠르기와 셈여림은 따로 바뀔 수 있어요' },
        { type: 'draw', prompt: '우리 모둠 움직임의 차례를 그림 세 칸으로 그리고, 칸 아래에 음악의 특징을 쓰세요.' },
        { type: 'short', prompt: '우리 모둠 동작 가운데 음악과 가장 잘 맞은 것은 무엇이고, 왜 그런지 쓰세요.' },
      ],
      easy: {
        note: '세게 = 큰 동작·센 발소리, 여리게 = 작은 동작·가벼운 발소리, 쉼표 = 멈춤.',
        items: [
          { type: 'choice', prompt: '여리게 들리는 음악에 어울리는 동작에 ○ 하세요.', options: ['살금살금 걷기', '쿵쿵 발 구르기'], answer: '살금살금 걷기' },
          { type: 'choice', prompt: '쉼표에서는 어떻게 할까요?', options: ['멈춰요', '뛰어요'], answer: '멈춰요' },
          { type: 'table', prompt: '어울리는 동작을 쓰세요.', columns: ['음악', '동작'], cells: [['세게', ''], ['가락이 올라가요', '']] },
          { type: 'draw', prompt: '오늘 해 본 동작 하나를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞게 이은 카드에 초록 테두리가 보이고, 틀린 칸에 놓으면 까닭을 말해 주며 되돌아와요.',
      base: '카드를 모두 이은 뒤 스스로 확인해요.',
      challenge: '잇기에 함정 동작 카드가 하나 더 있고, 동작 차례는 네 장면으로 늘어나요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 빠르면 세게 움직인다 → 빠르고 여린 음악으로 발끝 종종걸음을 함께 해 본다. ② 멋있는 동작만 고르고 음악이 바뀌는 곳을 놓친다 → 음악이 바뀌는 곳에서 교사가 손을 들어 신호하고, 그때 동작이 바뀌는지 본다. ③ 움직임이 커져 부딪힌다 → 팔 간격을 먼저 재고 시작한다. 실제 움직임은 교실 앞 빈 공간에서 모둠별로 돌아가며 한다.',
  }));

  // ───────────────────────── 6차시 (연습) ─────────────────────────
  lessons.push(Object.assign(head(6, S3), {
    title: '노래가 끝날 때 문을 닫는 대문놀이 하기',
    objective: '전래 놀이인 대문놀이에서 노래의 박에 맞추어 걷고 노래가 끝나는 때에 문을 닫는 규칙을 지키며 놀이를 이어 갈 수 있다.',
    safety: ['문을 내릴 때 팔을 천천히 내려 친구 머리에 부딪히지 않게 해요.', '줄을 지어 걷고, 앞사람을 밀지 않아요.'],
    illustration: {
      prompt: ILL('children forming an arched gate with their raised arms while a line of classmates walks underneath, a traditional Korean gate roof in the background'),
      scene: { viewBox: [480, 270], layers: [
        { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 120, y: 50 }, { motif: 'mountain', x: 360, y: 206 },
        { motif: 'hills', y: 212 }, { motif: 'house', x: 110, y: 214 }, { motif: 'tree', x: 430, y: 216 },
        { motif: 'text', x: 240, y: 140, text: '노래가 끝나면 문을 닫아요', size: 21 },
      ] },
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"대문놀이를 해 본 적이 있나요? 두 사람이 팔로 문을 만들고, 나머지는 노래하며 그 밑을 지나가요." 교사가 대문놀이 노래(전래 동요)를 불러 주며 박마다 손뼉을 친다. "문은 언제 닫아야 할까요?" 노래가 끝날 때라는 대답을 기다린다. "빨리 잡고 싶어서 노래 중간에 닫으면 어떻게 될까요?" 하고 물어, 놀이도 음악과 맞아야 한다는 것을 짚는다.',
        student: '대문놀이 노래를 들으며 박에 맞춰 손뼉을 쳐 봅시다. 문은 언제 닫힐까요?',
        demo: { tool: 'timer', options: { cards: ['노래하며 문을 지나요', '두 사람이 문을 만들어요', '노래가 끝나면 문을 닫아요'] }, sequence: [{ order: ['두 사람이 문을 만들어요', '노래하며 문을 지나요', '노래가 끝나면 문을 닫아요'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 대문놀이 차례와 규칙 정하기', minutes: 12, tool: 'timer',
            teacher: '"놀이를 시작하기 전에 차례와 규칙을 함께 정해요. 이 규칙은 노래와 어떻게 이어져 있나요?" 차례를 놓은 뒤 교실 가운데에서 한 판을 해 본다. 문지기가 노래 중간에 문을 닫으면 멈추고 "노래가 아직 남았어요"라고 짚는다.',
            task: '안전 점검을 하고, 대문놀이의 차례 카드를 놓아요. 한 판 해 본 뒤 규칙을 지켰는지 점검해요.',
            levels: { easy: { title: '대문놀이' }, base: { title: '대문놀이' }, challenge: { title: '대문놀이' } },
            items: [
              { prompt: '대문놀이를 하기 전에 안전 점검을 하나씩 확인하고 표시해요.', toolOptions: { safety: ['줄 사이에 넉넉한 공간이 있어요', '문을 만드는 두 사람이 키가 비슷해요', '책상과 의자를 벽 쪽으로 옮겼어요'] }, target: { safety: true }, difficulty: 0.05 },
              { prompt: '대문놀이의 차례 카드를 놓아요.', toolOptions: { cards: ['노래가 끝나면 문을 닫아요', '두 사람이 손을 맞잡아 문을 만들어요', '모두 노래하며 박에 맞춰 문을 지나요'] }, target: { order: ['두 사람이 손을 맞잡아 문을 만들어요', '모두 노래하며 박에 맞춰 문을 지나요', '노래가 끝나면 문을 닫아요'] }, difficulty: 0.15,
                hints: ['놀이를 하려면 무엇이 먼저 있어야 하는지 떠올리고, 노래가 시작해서 끝날 때까지 일어나는 일을 차례로 놓아요.'],
                levels: { challenge: { toolOptions: { cards: ['노래가 끝나면 문을 닫아요', '갇힌 사람이 문지기와 바꾸어요', '두 사람이 손을 맞잡아 문을 만들어요', '모두 노래하며 박에 맞춰 문을 지나요'] }, prompt: '갇힌 사람이 문지기와 바꾸는 규칙까지 넣어 대문놀이 차례를 놓아요.', target: { order: ['두 사람이 손을 맞잡아 문을 만들어요', '모두 노래하며 박에 맞춰 문을 지나요', '노래가 끝나면 문을 닫아요', '갇힌 사람이 문지기와 바꾸어요'] } } } },
              { prompt: '한 판을 해 본 뒤 우리가 지킨 것을 표시해요.', target: { selfCheck: ['노래가 끝날 때까지 문을 닫지 않았어요', '박에 맞춰 한 걸음씩 걸었어요', '지나가는 사람도 함께 노래했어요'] }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 음악과 어긋난 장면 바로잡기', minutes: 14, tool: 'emotion',
            teacher: '"놀이하다 보면 이런 일이 생겨요. 음악과 맞게 놀려면 어떻게 해야 할까요?" 상황을 읽고 고르게 한 뒤, 고른 까닭을 한 사람씩 말하게 한다. \'먼저 잡으면 이긴다\'처럼 규칙만 보고 고르는 학생에게 "그러면 노래는 어떻게 되나요?"를 묻는다.',
            task: '놀이 중에 생긴 상황을 읽고, 음악과 맞게 놀이를 이어 가는 방법을 골라요.',
            levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
            items: [
              { prompt: '노래가 아직 남았는데 문지기가 문을 닫았어요. 어떻게 하면 좋을까요?', toolOptions: { mode: 'branch', situation: '노래가 반쯤 남았는데, 문지기가 빨리 잡고 싶어서 문을 내렸어요.', choices: [{ id: 'wait', text: '노래가 끝날 때까지 기다려요', result: '모두 노래에 맞춰 문을 지나고, 끝맺음에서 문이 닫혀요.', mood: '신남' }, { id: 'catch', text: '먼저 잡으면 이기니 괜찮아요', result: '노래가 끊기고 놀이가 음악과 따로 놀아요.', mood: '속상함' }] }, target: { choice: 'wait' }, difficulty: 0.1 },
              { prompt: '친구들이 노래는 하지 않고 뛰어서만 문을 지나요. 어떻게 하면 좋을까요?', toolOptions: { mode: 'branch', situation: '문에 갇히기 싫어서 친구들이 노래를 멈추고 뛰어서 지나가요.', choices: [{ id: 'run', text: '더 빨리 뛰어서 빠져나가요', result: '노래가 사라져 대문놀이가 술래잡기가 돼요.', mood: '걱정' }, { id: 'sing', text: '노래하며 박에 맞춰 걸어요', result: '노래와 걸음이 맞아 다 함께 즐거워요.', mood: '기쁨' }, { id: 'stop', text: '놀이를 그만해요', result: '아무도 놀이를 즐기지 못해요.', mood: '속상함' }] }, target: { choice: 'sing' }, difficulty: 0.2 },
              { prompt: '노래가 점점 빨라져 걸음이 엉켰어요. 어떻게 하면 좋을까요?', toolOptions: { mode: 'branch', situation: '신이 나서 노래가 점점 빨라지더니, 걸음이 엉켜 앞사람과 부딪힐 뻔했어요.', choices: [{ id: 'faster', text: '노래에 맞춰 더 빨리 뛰어요', result: '줄이 흐트러지고 다칠 수 있어요.', mood: '무서움' }, { id: 'tempo', text: '빠르기를 정해 다시 시작해요', result: '모두 같은 빠르기로 노래하며 걸음도 맞아요.', mood: '편안함' }] }, target: { choice: 'tempo' }, difficulty: 0.25,
                conclude: '놀이를 시작하기 전에 노래 빠르기를 함께 정하면 걸음과 노래가 맞아요.' },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 대문놀이에서 노래와 놀이가 가장 잘 맞았던 순간은 언제였나요?" 출구 2번을 틀린 학생에게는 노래 마지막 박에서 손을 내리는 동작을 한 번 더 해 보게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'timer', options: { cards: ['노래하며 박에 맞춰 걸어요', '문을 내려 닫아요', '노래의 마지막 박이 와요'] }, prompt: '문을 닫는 차례에 맞게 카드를 놓아 보세요.', target: { order: ['노래하며 박에 맞춰 걸어요', '노래의 마지막 박이 와요', '문을 내려 닫아요'] }, difficulty: 0.2 },
          { type: 'choice', prompt: '대문놀이에서 문지기가 문을 닫는 때는 언제인가요?', options: ['잡고 싶은 친구가 올 때', '노래가 끝날 때', '아무 때나'], answer: 1, difficulty: 0.1, explain: '노래가 끝날 때 문을 닫아야 놀이와 음악이 맞아요.' },
          { type: 'mood', prompt: '대문놀이를 해 보니 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '대문놀이',
      items: [
        { type: 'table', prompt: '대문놀이의 차례를 쓰세요.', columns: ['차례', '하는 일'], cells: [['1', ''], ['2', ''], ['3', '']] },
        { type: 'choice', prompt: '음악과 맞게 노는 모습에 ○ 하세요.', options: ['노래 중간에 문을 닫아요', '노래하며 박에 맞춰 걸어요', '노래를 멈추고 뛰어요'], answer: '노래하며 박에 맞춰 걸어요' },
        { type: 'blank', prompt: '빈칸을 채우세요.', text: '대문놀이에서 문은 노래가 ___ 닫아요. 걸음은 ___에 맞춰 걸어요.', answer: '끝날 때, 박' },
        { type: 'short', prompt: '우리 반 대문놀이에 새 규칙을 하나 더한다면 무엇을 넣고 싶은지 쓰세요. 그 규칙이 노래와 어떻게 이어지는지도 쓰세요.' },
      ],
      easy: {
        note: '노래가 끝나면 문을 닫아요. 걸을 때는 박에 맞춰 한 걸음씩.',
        items: [
          { type: 'choice', prompt: '문은 언제 닫을까요?', options: ['노래가 끝날 때', '노래가 시작할 때'], answer: '노래가 끝날 때' },
          { type: 'choice', prompt: '문을 지날 때는 어떻게 할까요?', options: ['노래하며 걸어요', '말없이 뛰어요'], answer: '노래하며 걸어요' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '두 사람이 ___로 문을 만들어요.', answer: '팔(손)' },
          { type: 'draw', prompt: '대문놀이를 하는 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '차례 카드가 세 장이고, 상황마다 고른 뒤 결과가 바로 보여요.',
      base: '차례 카드 세 장을 놓고, 상황마다 결과를 보며 고른 까닭을 말해요.',
      challenge: '차례에 바꾸기 규칙이 더해져 네 장이 되고, 상황의 결과는 맞게 고른 뒤에만 보여요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 이기고 싶어서 노래 중간에 문을 닫는다 → 규칙만 지키고 음악은 맞추지 않는 모습이다. "문은 노래가 닫아요"라고 정리한다. ② 갇히기 싫어 노래를 멈추고 뛴다 → 노래하는 사람만 지나갈 수 있다는 규칙을 더한다. ③ 노래가 점점 빨라진다 → 교사가 손뼉으로 빠르기를 먼저 정해 준다. 대문놀이 노래는 전래 동요이므로 학급에서 자유롭게 부를 수 있다.',
  }));

  // ───────────────────────── 7차시 (확장) ─────────────────────────
  lessons.push(Object.assign(head(7, S3), {
    title: '쉼표에서 얼음! 새 놀이 규칙과 리듬 악보 짓기',
    objective: '소리가 날 때 움직이고 쉼표에서 멈추는 새 놀이 규칙을 만들고, 그 규칙에 맞는 두 마디 리듬을 리듬 블록으로 지어 놀이할 수 있다.',
    safety: MOVE_SAFE,
    illustration: {
      prompt: ILL('children frozen in funny poses like ice statues while a big paper rest symbol floats above them'),
      scene: { viewBox: [480, 270], layers: [
        { motif: 'snow', x: 100, y: 60, s: 0.7 }, { motif: 'snow', x: 380, y: 70, s: 0.6 }, { motif: 'cloud', x: 240, y: 46 },
        { motif: 'hills', y: 210 }, { motif: 'tree', x: 70, y: 214 }, { motif: 'tree', x: 420, y: 216 },
        { motif: 'text', x: 240, y: 150, text: '쉼표에서 얼음!', size: 26 },
      ] },
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"선생님이 리듬을 치는 동안에는 걷고, 소리가 멈추면 얼음이 되어 보세요." 교사가 손뼉 리듬에 쉼표를 넣어 두세 번 해 본다. 쉼표인데 계속 걷는 학생, 소리가 나는데 멈춘 학생을 짚으며 "소리가 놀이의 신호예요"라고 말한다. 시연 단추로 쉼표가 들어간 리듬 블록을 보여 준다.',
        student: '선생님 손뼉이 멈추면 얼음! 소리를 잘 듣고 움직여 봅시다.',
        demo: { tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 2 }, sequence: [{ rhythm: ['q', 'q', 'q', 'qr'] }, { rhythm: ['q', 'q', 'q', 'qr', 'q', 'q', 'h'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 얼음 놀이 리듬 악보 짓기', minutes: 15, tool: 'keyboard',
            teacher: '"블록이 소리를 내는 곳은 움직이는 곳, 쉼표는 얼음이 되는 곳이에요." 악보를 짓기 전에 리듬을 손뼉으로 먼저 쳐 보게 한다. 쉼표를 넣고 싶어서 마디의 박을 넘기는 학생에게 쉼표도 박을 차지한다는 것을 짚는다. 다 지은 모둠은 그 악보로 놀이를 해 본다.',
            task: '리듬을 듣고 블록으로 놓거나, 규칙에 맞게 두 마디 얼음 놀이 악보를 지어요. 쉼표도 박을 차지해요.',
            levels: rhy(4, 2),
            items: [
              { prompt: '얼음 놀이 리듬을 듣고 블록으로 놓아 보세요. 쉼표에서 얼음이에요.', toolOptions: { pattern: ['q', 'q', 'q', 'qr', 'q', 'q', 'h'] }, target: { rhythm: ['q', 'q', 'q', 'qr', 'q', 'q', 'h'] }, difficulty: 0.15 },
              { prompt: '쉼표를 두 개 이상 넣어 두 마디를 4박씩 채운 얼음 놀이 악보를 지어요.', target: { beats: true, rests: 2 }, difficulty: 0.25,
                predict: { q: '4분쉼표 하나는 몇 박을 차지할까요?', options: ['0박', '1박', '2박'], answer: 1 },
                conclude: '쉼표는 소리가 없지만 박을 차지해서, 쉬는 동안에도 마음속으로 박을 세어요.' },
              { prompt: '잰걸음(8분음표)과 얼음(쉼표)을 꼭 넣어 두 마디를 4박씩 채워요.', target: { beats: true, use: ['e'], rests: 1 }, reveal: 'after-check', difficulty: 0.35 },
              { prompt: '내가 지은 악보로 모둠이 놀이해 보고, 해낸 것을 점검해요.', target: { beats: true, selfCheck: ['쉼표에서 모두 얼음이 되었어요', '소리가 날 때만 움직였어요', '두 번 이상 이어서 놀았어요'] }, difficulty: 0.15 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 음악과 이어진 규칙 고르기', minutes: 12, tool: 'mindmap',
            teacher: '"좋은 놀이 규칙은 음악을 잘 들어야 지킬 수 있는 규칙이에요." 규칙마다 \'이 규칙을 지키려면 음악을 들어야 하나요?\'를 묻는다. \'빨리 도착하면 이긴다\'처럼 음악과 상관없는 규칙을 고르는 학생에게 음악을 끄고도 지킬 수 있는지 해 보게 한다.',
            task: '규칙 카드를 읽고, 음악을 들어야 지킬 수 있는 규칙인지 따져 보며 고르거나 나누어요.',
            levels: cardsLv(),
            items: [
              { prompt: '음악을 들어야 지킬 수 있는 놀이 규칙만 골라 보세요.', toolOptions: { mode: 'pick', topic: '얼음 놀이 규칙', basket: '음악과 이어진 규칙', cards: ['쉼표에서 멈춰요', '센박에 발을 굴러요', '먼저 도착하면 이겨요', '아무 때나 뛰어요'] }, target: { pick: ['쉼표에서 멈춰요', '센박에 발을 굴러요'] }, difficulty: 0.15 },
              { prompt: '놀이 규칙을 음악과 이어진 규칙과 안전 규칙으로 나누어 보세요.', toolOptions: { mode: 'sort', topic: '우리 반 새 놀이', slots: ['음악 규칙', '안전 규칙'], cards: ['가락이 올라가면 팔을 들어요', '여리게 들리면 발끝으로 걸어요', '친구를 밀지 않아요', '뛸 때 앞을 봐요'] }, target: { sort: { '음악 규칙': ['가락이 올라가면 팔을 들어요', '여리게 들리면 발끝으로 걸어요'], '안전 규칙': ['친구를 밀지 않아요', '뛸 때 앞을 봐요'] } }, difficulty: 0.25 },
              { prompt: '음악 규칙에 맞는 동작을 이어 새 놀이를 완성해 보세요.', toolOptions: { mode: 'match', topic: '소리 따라 놀이', slots: [{ id: 'r1', label: '소리가 날 때' }, { id: 'r2', label: '쉼표일 때' }, { id: 'r3', label: '마지막 박' }], cards: ['박에 맞춰 걸어요', '얼음처럼 멈춰요', '짝과 손뼉을 마주쳐요'] }, target: { match: { r1: '박에 맞춰 걸어요', r2: '얼음처럼 멈춰요', r3: '짝과 손뼉을 마주쳐요' } }, difficulty: 0.2,
                hints: ['음악이 그렇게 될 때 몸이 무엇을 하면 소리와 닮아 보일지 떠올려 이어요. 소리가 있을 때와 없을 때를 먼저 가려요.'] },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"우리 모둠 규칙 가운데 음악을 가장 잘 들어야 하는 규칙은 무엇이었나요?" 모둠마다 한 가지씩 말한다. 출구 1번에서 박을 넘긴 학생은 "쉬고"도 한 박이라고 말하며 손가락으로 함께 센다.',
        exitTicket: [
          { type: 'tool', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 1, blocks: ['q', 'h', 'qr'] }, prompt: '쉼표를 하나 넣어 한 마디를 4박으로 채워 보세요.', target: { beats: true, rests: 1 }, difficulty: 0.2 },
          { type: 'choice', prompt: '음악과 이어진 놀이 규칙은 무엇인가요?', options: ['가위바위보로 술래를 정해요', '노래가 멈추면 제자리에 앉아요', '가장 빨리 뛴 사람이 이겨요'], answer: 1, difficulty: 0.2, explain: '노래가 멈추는 것을 들어야 지킬 수 있으니 음악과 이어진 규칙이에요.' },
          { type: 'mood', prompt: '우리가 만든 새 놀이는 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '얼음 놀이 악보',
      items: [
        { type: 'figure', prompt: '마디마다 몇 박인지 세어 쓰고, 얼음이 되는 곳에 ○ 하세요.', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 2 }, figures: [{ state: { rhythm: ['q', 'qr', 'q', 'q', 'h', 'qr', 'q'] }, caption: '첫째 마디 ___박, 둘째 마디 ___박' }], answer: '4박, 4박 / 쉼표 두 곳에 ○' },
        { type: 'table', prompt: '우리 모둠 새 놀이 규칙을 쓰세요.', columns: ['음악이 이럴 때', '우리는 이렇게'], cells: [['소리가 날 때', ''], ['쉼표일 때', ''], ['', '']] },
        { type: 'choice', prompt: '4분쉼표에 대한 바른 말에 ○ 하세요.', options: ['소리도 없고 박도 없어요', '소리는 없지만 1박을 차지해요', '2박을 차지해요'], answer: '소리는 없지만 1박을 차지해요' },
        { type: 'short', prompt: '우리 놀이 규칙 가운데 음악을 가장 잘 들어야 지킬 수 있는 규칙과 그 까닭을 쓰세요.' },
      ],
      easy: {
        note: '쉼표 = 얼음. 쉼표도 1박이에요(4분쉼표).',
        items: [
          { type: 'figure', prompt: '얼음이 되는 곳(쉼표)에 ○ 하세요.', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 1, showBeats: true }, figures: [{ state: { rhythm: ['q', 'q', 'qr', 'q'] }, caption: '' }], answer: '셋째 블록' },
          { type: 'choice', prompt: '음악과 이어진 규칙에 ○ 하세요.', options: ['쉼표에서 멈춰요', '먼저 도착하면 이겨요'], answer: '쉼표에서 멈춰요' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '소리가 날 때는 ___, 쉼표일 때는 ___.', answer: '움직여요, 멈춰요' },
          { type: 'draw', prompt: '얼음이 된 내 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '리듬 블록 아래 마디마다 박 수가 보이고, 규칙 카드는 맞게 놓으면 초록 테두리가 보여요.',
      base: '박 수를 스스로 세며 악보를 짓고, 규칙 카드를 스스로 확인해요.',
      challenge: '8분쉼표·2분쉼표까지 쓸 수 있어 더 다양한 얼음 악보를 지어요. 카드 순서도 섞여 나와요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 쉼표는 박이 없다고 여겨 마디를 넘친다 → 쉼표 자리에서 손을 펴고 "쉬고"를 세게 한다. ② 음악과 상관없는 규칙(빨리 도착하기)만 만든다 → 음악을 끄고도 지킬 수 있으면 음악 규칙이 아니라고 짚는다. ③ 얼음에서 넘어지거나 부딪힌다 → 뛰지 않고 걷는 놀이로 시작한다.',
  }));

  // ───────────────────────── 8차시 (확장) ─────────────────────────
  lessons.push(Object.assign(head(8, S3), {
    title: '점점 빨라지는 원 돌기 놀이에 걸음 맞추기',
    objective: '느린 걸음·보통 걸음·잰걸음을 음표의 길이로 나타내고, 강강술래처럼 점점 빨라지는 원 돌기 놀이에서 빠르기 변화에 걸음을 맞출 수 있다.',
    safety: ['빠르게 돌 때는 손을 놓지 말고 바깥쪽으로 당기지 않아요.', '어지러우면 손을 들고 원 밖으로 천천히 나와 쉬어요.'],
    illustration: {
      prompt: ILL('children holding hands and circling under a bright full moon on a harvest night, their steps getting faster like spinning paper petals'),
      scene: { viewBox: [480, 270], layers: [
        { motif: 'moon', x: 240, y: 62, s: 1 }, { motif: 'star', x: 90, y: 52, s: 0.5 }, { motif: 'star', x: 400, y: 46, s: 0.5 },
        { motif: 'mountain', x: 90, y: 208 }, { motif: 'hills', y: 214 }, { motif: 'leaf', x: 400, y: 200, s: 0.7 },
        { motif: 'text', x: 240, y: 160, text: '느리게 → 점점 빠르게', size: 22 },
      ] },
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"추석 밤에 손을 잡고 둥글게 돌며 노래하는 놀이를 본 적이 있나요? 강강술래예요. 처음에는 느리게 돌다가 점점 빨라져요." 교사가 손뼉 빠르기를 점점 빠르게 하며 학생들이 손으로 무릎을 따라 치게 한다. "빨라질 때 손뼉 소리도 점점 커졌나요?" 빠르기와 셈여림은 다르다는 것을 짚는다.',
        student: '선생님 손뼉이 점점 빨라져요. 무릎을 따라 치며 빠르기에 맞춰 봅시다.',
        demo: { tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 3 }, sequence: [{ rhythm: ['h', 'h'] }, { rhythm: ['h', 'h', 'q', 'q', 'q', 'q'] }, { rhythm: ['h', 'h', 'q', 'q', 'q', 'q', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 걸음 소리를 음표로 놓기', minutes: 13, tool: 'keyboard',
            teacher: '"박은 그대로인데 걸음이 잘게 나뉘면 더 빨리 걷는 것처럼 들려요. 2분음표는 두 박에 한 걸음, 4분음표는 한 박에 한 걸음, 8분음표는 한 박에 두 걸음이에요." 걸음을 제자리에서 해 보며 블록을 놓게 한다. 잰걸음 마디에서 8분음표를 네 개만 놓는 학생에게 박마다 두 걸음씩 세게 한다.',
            task: '걸음 소리 리듬을 듣고 제자리에서 걸어 본 뒤 블록으로 놓아요. 느린 걸음 = 2분음표, 보통 걸음 = 4분음표, 잰걸음 = 8분음표.',
            levels: rhy(4, 2),
            items: [
              { prompt: '느린 걸음 두 마디예요. 걸음 소리를 듣고 블록으로 놓아 보세요.', toolOptions: { pattern: ['h', 'h', 'h', 'h'] }, target: { rhythm: ['h', 'h', 'h', 'h'] }, difficulty: 0.1 },
              { prompt: '느린 걸음이 보통 걸음으로 바뀌어요. 듣고 블록으로 놓아 보세요.', toolOptions: { pattern: ['h', 'h', 'q', 'q', 'q', 'q'] }, target: { rhythm: ['h', 'h', 'q', 'q', 'q', 'q'] }, difficulty: 0.2 },
              { prompt: '보통 걸음이 잰걸음으로 바뀌어요. 듣고 블록으로 놓아 보세요.', toolOptions: { pattern: ['q', 'q', 'q', 'q', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'] }, target: { rhythm: ['q', 'q', 'q', 'q', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'] }, difficulty: 0.3,
                predict: { q: '잰걸음 마디에는 걸음이 몇 개 들어갈까요?', options: ['4개', '8개', '2개'], answer: 1 },
                conclude: '한 박에 두 걸음씩 걸으면 4박 한 마디에 여덟 걸음이 들어가요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 빠르기 따라 원 돌기 계획하기', minutes: 13, tool: 'timer',
            teacher: '"원 돌기 놀이를 빠르기 차례대로 계획해 볼까요? 빠르게 돌 때는 숨이 차니 쉬는 시간도 정해요." 차례 카드를 놓고 타이머를 맞춘 뒤 실제로 한 번 해 본다. 빨라질 때 노래를 소리 지르듯 크게 부르는 학생에게 "빠르기만 바꾸고 소리 크기는 그대로"라고 말한다.',
            task: '원 돌기 놀이의 빠르기 차례를 놓고, 빠르게 돌 때의 돌기·쉬기 시간을 맞춰요.',
            levels: { easy: { title: '원 돌기 놀이', workStep: 10, restStep: 10 }, base: { title: '원 돌기 놀이' }, challenge: { title: '원 돌기 놀이', showTotal: true } },
            items: [
              { prompt: '강강술래처럼 점점 빨라지는 원 돌기 놀이의 차례를 놓아요.', toolOptions: { cards: ['뛰듯이 빠르게 돌아요', '느리게 걸으며 돌아요', '조금 빨리 걸으며 돌아요'] }, target: { order: ['느리게 걸으며 돌아요', '조금 빨리 걸으며 돌아요', '뛰듯이 빠르게 돌아요'] }, difficulty: 0.1,
                hints: ['놀이의 빠르기가 처음부터 끝까지 어떻게 바뀌는지 떠올리고, 걸음 빠르기가 그 차례를 따라가게 놓아요.'] },
              { prompt: '빠르게 도는 부분은 20초 돌고 10초 쉬기를 3번 하도록 타이머를 맞춰요.', toolOptions: { plan: { work: 30, rest: 20, rounds: 2 } }, target: { plan: { work: 20, rest: 10, rounds: 3 } }, difficulty: 0.2 },
              { prompt: '느리게 도는 부분은 40초 돌고 쉬기 없이 한 번만 하도록 맞춰요. 쉬는 시간은 그대로 두어도 돼요.', toolOptions: { plan: { work: 20, rest: 10, rounds: 3 } }, target: { plan: { work: 40, rounds: 1 } }, difficulty: 0.25 },
              { prompt: '원 돌기를 해 본 뒤, 해낸 것을 점검 목록에 표시해요.', target: { selfCheck: ['빨라질 때 걸음도 함께 빨라졌어요', '빨라져도 노래 소리 크기는 그대로였어요', '손을 놓치지 않고 원을 지켰어요'] }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"빠르기가 바뀔 때 우리 몸은 무엇을 바꾸었나요? 소리 크기도 바꾸었나요?" 빠르기와 셈여림을 구별해 말하게 한다. 출구 2번을 틀린 학생에게는 빠르고 여린 손뼉을 함께 쳐 본다.',
        exitTicket: [
          { type: 'tool', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 2, blocks: ['q', 'e', 'h', 'qr'] }, prompt: '걸음 소리를 듣고 블록으로 놓아 보세요.', target: { rhythm: ['q', 'q', 'h', 'e', 'e', 'e', 'e', 'h'] }, difficulty: 0.3 },
          { type: 'choice', prompt: '원 돌기 놀이에서 걸음이 점점 빨라질 때 노래 소리는 어떻게 할까요?', options: ['저절로 점점 크게 불러요', '빠르기만 바꾸고 크기는 그대로 불러요', '노래를 멈춰요'], answer: 1, difficulty: 0.25, explain: '빠르기와 셈여림은 다른 요소라서 빨라진다고 저절로 세지지 않아요.' },
          { type: 'mood', prompt: '빨라지는 원 돌기를 해 보니 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '빠르기와 걸음',
      items: [
        { type: 'table', prompt: '걸음과 음표를 이어 쓰세요.', columns: ['걸음', '음표', '한 마디(4박)에 걸음 수'], cells: [['느린 걸음', '', ''], ['보통 걸음', '', ''], ['잰걸음', '', '']] },
        { type: 'figure', prompt: '어느 마디가 가장 빠른 걸음인지 ○ 하세요.', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 2 }, figures: [{ state: { rhythm: ['h', 'h', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e'] }, caption: '첫째 마디 / 둘째 마디' }], answer: '둘째 마디' },
        { type: 'choice', prompt: '빠르기와 셈여림에 대한 바른 말에 ○ 하세요.', options: ['빨라지면 저절로 세져요', '빠르기와 셈여림은 따로 바꿀 수 있어요'], answer: '빠르기와 셈여림은 따로 바꿀 수 있어요' },
        { type: 'short', prompt: '원 돌기 놀이에서 빠르기가 바뀔 때 몸을 어떻게 바꾸었는지 쓰세요.' },
      ],
      easy: {
        note: '2분음표 = 두 박에 한 걸음, 4분음표 = 한 박에 한 걸음, 8분음표 = 한 박에 두 걸음.',
        items: [
          { type: 'choice', prompt: '가장 빠른 걸음은 어느 음표인가요?', options: ['2분음표', '4분음표', '8분음표'], answer: '8분음표' },
          { type: 'figure', prompt: '걸음 수를 세어 쓰세요.', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 1, showBeats: true }, figures: [{ state: { rhythm: ['q', 'q', 'q', 'q'] }, caption: '___걸음' }], answer: '4걸음' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '강강술래는 처음에 ___ 돌다가 점점 ___ 돌아요.', answer: '느리게, 빠르게' },
          { type: 'draw', prompt: '원 돌기 놀이를 하는 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '리듬 블록 아래에 마디마다 박 수가 보이고, 타이머 수가 10초씩 바뀌어요.',
      base: '박 수를 스스로 세고, 타이머를 5초씩 맞춰요.',
      challenge: '쉼표 블록이 더 나오고, 타이머 전체 시간을 확인한 뒤에 볼 수 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 빨라지면 저절로 세게 부른다 → 빠르기와 셈여림을 따로 바꾸는 연습(빠르고 여리게)을 한다. ② 잰걸음을 한 박에 한 걸음으로 놓는다 → "따-따" 두 걸음이 한 박. ③ 빠르게 돌다 손을 놓쳐 넘어진다 → 빠른 부분은 짧게, 쉬는 시간을 꼭 둔다. 강강술래는 전래 민속놀이이며 노랫말은 학급에서 메기고 받는 말로 새로 지어도 된다.',
  }));

  // ───────────────────────── 9차시 (핵심) ─────────────────────────
  lessons.push(Object.assign(head(9, S3), {
    title: '음악과 맞은 장면, 어긋난 장면 가려내기',
    objective: '모둠 활동 장면을 되돌아보며 음악과 잘 맞은 장면과 어긋난 장면을 가려내고, 그 까닭을 박·리듬·빠르기·셈여림·가락으로 말할 수 있다.',
    illustration: {
      prompt: ILL('children sitting together watching a paper film strip of their own dance, pointing at frames with happy and puzzled faces'),
      scene: { viewBox: [480, 270], layers: [
        { motif: 'cloud', x: 100, y: 52 }, { motif: 'sun', x: 404, y: 58, s: 0.7 }, { motif: 'hills', y: 210 },
        { motif: 'star', x: 160, y: 120, s: 0.5 }, { motif: 'star', x: 320, y: 120, s: 0.5 }, { motif: 'house', x: 420, y: 214 },
        { motif: 'text', x: 240, y: 150, text: '음악과 맞았나요?', size: 24 },
      ] },
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"지난 시간 놀이, 재미있었나요? 그런데 재미있었으면 음악과도 잘 맞은 걸까요?" 손을 들게 한 뒤 촬영해 둔 모둠 활동 영상(없으면 교사가 두 장면을 재현)을 보여 준다. "이 장면에서 얼음 신호가 왔을 때 모두 굳었나요?" 재미와 음악과 맞음은 다르게 따져야 한다는 것을 짚는다.',
        student: '우리 모둠 활동 장면을 보며 음악과 맞았는지 살펴봅시다.',
        demo: { tool: 'mindmap', options: { topic: '우리 모둠 장면', slots: ['음악과 맞았어요', '어긋났어요'], cards: ['원이 느려질 때 걸음도 느려졌어요', '노래 중간에 뛰어나갔어요'], shuffle: false }, sequence: [{ sort: { '음악과 맞았어요': ['원이 느려질 때 걸음도 느려졌어요'], 어긋났어요: ['노래 중간에 뛰어나갔어요'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 장면을 맞음·어긋남으로 나누기', minutes: 13, tool: 'mindmap',
            teacher: '"장면마다 음악의 무엇과 견주어야 할까요? 박인가요, 빠르기인가요, 셈여림인가요?" 장면 카드를 소리 내어 읽고 음악 요소를 하나 말한 뒤 나누게 한다. \'재미있어서 웃었다\'를 \'맞았어요\'에 넣는 학생에게 "웃음은 음악의 어떤 요소와 견줄 수 있나요?"를 묻는다.',
            task: '장면 카드를 읽고, 음악과 맞았는지 어긋났는지 나누어요. 음악과 견줄 수 없는 카드는 남겨요.',
            levels: cardsLv(),
            items: [
              { prompt: '놀이 장면을 음악과 맞은 것과 어긋난 것으로 나누어 보세요.', toolOptions: { topic: '대문놀이·얼음 놀이', slots: ['맞았어요', '어긋났어요'], cards: ['얼음 신호에 모두 그 자리에서 굳었어요', '노래가 끝날 때 문을 닫았어요', '노래 중간에 뛰어나갔어요', '여린 곳에서 쿵쿵 뛰었어요'] }, target: { sort: { 맞았어요: ['얼음 신호에 모두 그 자리에서 굳었어요', '노래가 끝날 때 문을 닫았어요'], 어긋났어요: ['노래 중간에 뛰어나갔어요', '여린 곳에서 쿵쿵 뛰었어요'] } }, difficulty: 0.1 },
              { prompt: '움직임 장면을 음악과 맞은 것과 어긋난 것으로 나누어 보세요.', toolOptions: { topic: '모둠 움직임·원 돌기', slots: ['맞았어요', '어긋났어요'], cards: ['빨라질 때 걸음도 빨라졌어요', '센박에 발을 굴렀어요', '가락이 내려갈 때 팔을 들었어요', '박을 놓쳐 혼자 늦게 걸었어요'] }, target: { sort: { 맞았어요: ['빨라질 때 걸음도 빨라졌어요', '센박에 발을 굴렀어요'], 어긋났어요: ['가락이 내려갈 때 팔을 들었어요', '박을 놓쳐 혼자 늦게 걸었어요'] } }, difficulty: 0.2 },
              { prompt: '음악과 견줄 수 있는 장면만 나누어 넣어요. 음악과 상관없는 카드는 남겨요.', toolOptions: { topic: '몸 악기 놀이', slots: ['맞았어요', '어긋났어요'], cards: ['모두 박에 맞춰 손뼉을 쳤어요', '세지는 곳에서도 동작이 그대로였어요', '재미있어서 많이 웃었어요'] }, target: { sort: { 맞았어요: ['모두 박에 맞춰 손뼉을 쳤어요'], 어긋났어요: ['세지는 곳에서도 동작이 그대로였어요'] } }, difficulty: 0.3,
                predict: { q: '‘재미있어서 많이 웃었어요’는 어디에 넣을까요?', options: ['맞았어요', '어긋났어요', '넣지 않아요'], answer: 2 },
                conclude: '재미있었는지는 음악과 맞았는지를 알려 주지 않아요. 박·리듬·빠르기·셈여림·가락을 기준으로 따져요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 장면과 그 까닭 잇기', minutes: 13, tool: 'mindmap',
            teacher: '"맞았다, 어긋났다만 말하면 다음에 무엇을 고칠지 알 수 없어요. 음악의 무엇을 들었는지, 무엇을 놓쳤는지 이어 볼까요?" 짝과 번갈아 장면을 읽고 까닭을 말하게 한다. 까닭에 \'열심히 해서\'처럼 마음만 쓰는 학생에게 음악 요소 낱말 카드를 다시 보게 한다.',
            task: '장면 카드를 읽고, 그 장면이 음악과 맞거나 어긋난 까닭을 이어요.',
            levels: cardsLv(),
            items: [
              { prompt: '음악과 맞은 장면에 그 까닭을 이어 보세요.', toolOptions: { mode: 'match', topic: '맞은 까닭', slots: [{ id: 'w1', label: '원 돌기 끝 쉼표에서 모두 발을 멈췄어요' }, { id: 'w2', label: '빨라질 때 걸음도 빨라졌어요' }, { id: 'w3', label: '여린 곳에서 발끝으로 걸었어요' }], cards: ['리듬(쉼표)을 잘 들었어요', '빠르기를 잘 들었어요', '셈여림을 잘 들었어요'] }, target: { match: { w1: '리듬(쉼표)을 잘 들었어요', w2: '빠르기를 잘 들었어요', w3: '셈여림을 잘 들었어요' } }, difficulty: 0.15,
                hints: ['장면마다 동작이 음악의 어떤 요소를 따라갔는지(소리와 쉼의 길이, 빠르기, 소리 크기) 먼저 말해 보고 이어요.'],
                levels: { challenge: { toolOptions: { cards: ['리듬(쉼표)을 잘 들었어요', '빠르기를 잘 들었어요', '셈여림을 잘 들었어요', '열심히 해서 그래요'] } } } },
              { prompt: '어긋난 장면에 무엇을 놓쳤는지 이어 보세요.', toolOptions: { mode: 'match', topic: '놓친 것', slots: [{ id: 'v1', label: '노래 중간에 문을 닫았어요' }, { id: 'v2', label: '가락이 오르는데 팔을 내렸어요' }, { id: 'v3', label: '혼자 늦게 걸었어요' }], cards: ['노래의 끝맺음을 놓쳤어요', '가락의 오르내림을 놓쳤어요', '박을 놓쳤어요'] }, target: { match: { v1: '노래의 끝맺음을 놓쳤어요', v2: '가락의 오르내림을 놓쳤어요', v3: '박을 놓쳤어요' } }, difficulty: 0.25,
                hints: ['장면마다 그때 음악에서 무슨 일이 일어나고 있었는지 먼저 떠올리고, 동작이 그것을 따라가지 못한 까닭을 이어요.'] },
              { prompt: '활동을 되돌아볼 때 묻기 좋은 질문만 골라 보세요.', toolOptions: { mode: 'pick', topic: '되돌아보기 질문', basket: '좋은 질문', cards: ['음악이 바뀔 때 동작도 바뀌었나요?', '쉼표에서 멈췄나요?', '누가 가장 웃겼나요?', '몇 등을 했나요?'] }, target: { pick: ['음악이 바뀔 때 동작도 바뀌었나요?', '쉼표에서 멈췄나요?'] }, difficulty: 0.2 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"우리 모둠에서 가장 잘 맞은 장면 하나, 어긋난 장면 하나를 까닭과 함께 말해 볼까요?" 모둠마다 발표한다. 다음 시간에는 어긋난 장면을 고쳐 다시 해 본다고 알린다. 출구 2번에서 \'재미있었으니까\'를 고른 학생과는 음악 요소 낱말을 함께 다시 읽는다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '원 돌기 장면', slots: ['맞았어요', '어긋났어요'], cards: ['느린 부분에서 천천히 걸었어요', '빨라졌는데 걸음은 그대로였어요'] }, prompt: '장면을 음악과 맞은 것과 어긋난 것으로 나누어 보세요.', target: { sort: { 맞았어요: ['느린 부분에서 천천히 걸었어요'], 어긋났어요: ['빨라졌는데 걸음은 그대로였어요'] } }, difficulty: 0.15 },
          { type: 'choice', prompt: '활동이 음악과 잘 맞았는지 알려면 무엇을 봐야 하나요?', options: ['얼마나 재미있었는지', '동작이 박·빠르기·셈여림과 맞았는지', '누가 가장 크게 움직였는지'], answer: 1, difficulty: 0.15, explain: '음악과 맞았는지는 음악 요소와 동작을 견주어 알아요.' },
          { type: 'mood', prompt: '오늘 우리 활동을 되돌아보니 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '우리 활동 되돌아보기',
      items: [
        { type: 'table', prompt: '우리 모둠 활동에서 장면을 하나씩 골라 쓰세요.', columns: ['', '장면', '까닭(음악의 무엇)'], cells: [['잘 맞은 장면', '', ''], ['어긋난 장면', '', '']] },
        { type: 'choice', prompt: '음악과 견줄 수 없는 말에 ○ 하세요.', options: ['쉼표에서 멈췄어요', '재미있어서 웃었어요', '센박에 발을 굴렀어요'], answer: '재미있어서 웃었어요' },
        { type: 'blank', prompt: '빈칸을 채우세요.', text: '가락이 올라가는데 팔을 내렸다면 가락의 ___을 놓친 거예요.', answer: '오르내림' },
        { type: 'short', prompt: '‘재미있었다’와 ‘음악과 잘 맞았다’는 어떻게 다른지 쓰세요.' },
      ],
      easy: {
        note: '음악과 맞았는지는 박·리듬·빠르기·셈여림·가락과 동작을 견주어 알아요.',
        items: [
          { type: 'choice', prompt: '음악과 맞은 장면에 ○ 하세요.', options: ['쉼표에서 멈췄어요', '노래 중간에 뛰어나갔어요'], answer: '쉼표에서 멈췄어요' },
          { type: 'choice', prompt: '어긋난 장면에 ○ 하세요.', options: ['박에 맞춰 걸었어요', '혼자 늦게 걸었어요'], answer: '혼자 늦게 걸었어요' },
          { type: 'short', prompt: '우리 모둠이 가장 잘한 장면을 쓰세요.' },
          { type: 'draw', prompt: '그 장면을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞게 놓은 카드에 초록 테두리가 보이고, 틀리게 놓으면 까닭을 말해 주며 되돌아와요.',
      base: '카드를 모두 놓은 뒤 스스로 확인해요.',
      challenge: '카드 순서가 섞여 나오고, 까닭 잇기에 음악 요소가 아닌 함정 카드가 있어요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 재미있었으면 잘된 활동이라고 여긴다 → 재미와 음악과 맞음을 칠판 두 칸에 나누어 적는다. ② 어긋난 장면을 친구 탓으로 말한다 → 사람이 아니라 장면과 음악 요소를 말하게 한다. ③ 까닭을 \'열심히 해서\'처럼 마음으로만 쓴다 → 박·리듬·빠르기·셈여림·가락 낱말 카드를 칠판에 붙여 둔다. 쉼표에서 멈춘 장면은 \'리듬(소리와 쉼의 길이)\'을 들은 것이고, 쉼표에서도 박은 계속 흐른다는 것을 함께 짚는다. 영상을 찍었다면 학급 안에서만 보고 지운다.',
  }));

  // ───────────────────────── 10차시 (연습) ─────────────────────────
  lessons.push(Object.assign(head(10, S3), {
    title: '어긋난 장면을 고쳐 다시 해 보기',
    objective: '음악과 어긋난 장면의 리듬 악보와 동작 차례를 음악에 맞게 고치고, 고친 방법으로 다시 해 보며 나아진 점을 기록할 수 있다.',
    safety: MOVE_SAFE,
    illustration: {
      prompt: ILL('children fixing a paper rhythm chart with pencils and then dancing again in a bright classroom'),
      scene: { viewBox: [480, 270], layers: [
        { motif: 'sun', x: 406, y: 58, s: 0.7 }, { motif: 'cloud', x: 120, y: 50 }, { motif: 'hills', y: 210 },
        { motif: 'tree', x: 80, y: 214 }, { motif: 'flower', x: 380, y: 224 }, { motif: 'leaf', x: 300, y: 196, s: 0.6 },
        { motif: 'text', x: 240, y: 150, text: '고치고, 다시 해 봐요', size: 23 },
      ] },
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"지난 시간에 찾은 어긋난 장면을 기억하나요? 오늘은 고쳐서 다시 해 볼 거예요." 교사가 박을 넘긴 악보를 보여 주며 "이 악보대로 하면 둘째 마디에서 왜 동작이 밀릴까요?"를 묻는다. 마디의 박 수가 맞지 않으면 동작도 밀린다는 대답을 기다린다.',
        student: '지난 시간 우리 모둠이 어긋났던 장면을 떠올려 봅시다.',
        demo: { tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 2 }, sequence: [{ rhythm: ['q', 'q', 'q', 'q', 'h', 'q', 'q', 'q'] }, { rhythm: ['q', 'q', 'q', 'q', 'h', 'q', 'q'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 모둠 악보 고치기', minutes: 13, tool: 'keyboard',
            teacher: '"악보가 틀리면 동작도 따라 틀려요. 어디를 고쳐야 할까요?" 고치기 전에 지금 악보를 손뼉으로 쳐 보게 하여 어긋나는 곳을 귀로 먼저 찾게 한다. 블록을 모두 지우고 처음부터 다시 놓는 학생에게 "어긋난 곳만 고쳐 볼까요?"라고 말한다.',
            task: '모둠 악보를 손뼉으로 쳐 보고 어긋난 곳을 찾아 블록을 고쳐요. 놓인 블록은 Enter로 뺄 수 있어요.',
            levels: rhy(4, 2),
            items: [
              { prompt: '둘째 마디가 5박이라 동작이 밀렸어요. 블록을 고쳐 두 마디를 4박씩 맞춰요.', state: { rhythm: ['q', 'q', 'q', 'q', 'h', 'q', 'q', 'q'] }, target: { beats: true }, difficulty: 0.15 },
              { prompt: '들려 준 리듬과 모둠 악보가 한 곳 달라요. 리듬을 듣고 틀린 블록을 고쳐요.', state: { rhythm: ['q', 'q', 'h', 'q', 'q', 'q', 'q'] }, toolOptions: { pattern: ['q', 'q', 'h', 'q', 'qr', 'q', 'q'] }, target: { rhythm: ['q', 'q', 'h', 'q', 'qr', 'q', 'q'] }, difficulty: 0.25,
                predict: { q: '모둠이 이 악보로 놀았을 때 무엇이 어긋났을까요?', options: ['얼음이 되는 곳이 없었어요', '너무 느렸어요', '박이 넘쳤어요'], answer: 0 },
                conclude: '쉼표 하나가 빠지면 얼음 장면이 사라져요. 악보를 고치면 놀이도 고쳐져요.' },
              { prompt: '쉼표가 없어 얼음 장면이 사라졌어요. 쉼표를 두 개 이상 넣어 두 마디를 고쳐요.', state: { rhythm: ['q', 'q', 'q', 'q', 'q', 'q', 'q', 'q'] }, target: { beats: true, rests: 2 }, reveal: 'after-check', difficulty: 0.3 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 동작 차례 고치고 다시 해 보기', minutes: 14, tool: 'timer',
            teacher: '"동작 차례를 음악 차례에 맞게 고쳤으면 실제로 다시 해 봐야 알 수 있어요." 고치기 전과 고친 뒤에 박을 놓친 사람 수를 모둠끼리 세어 적게 한다. 수가 그대로인 모둠에게는 어느 장면에서 놓쳤는지 다시 찾게 한다.',
            task: '동작 카드를 음악 차례에 맞게 고쳐 놓고, 다시 해 본 뒤 고치기 전과 뒤를 견주어 적어요.',
            levels: { easy: { title: '고쳐서 다시', unit: '명' }, base: { title: '고쳐서 다시', unit: '명' }, challenge: { title: '고쳐서 다시', unit: '명' } },
            items: [
              { prompt: '음악은 ‘느리게 → 빠르게 → 멈춤’인데 동작 차례가 어긋났어요. 카드를 고쳐 놓아요.', toolOptions: { cards: ['얼음처럼 멈추기', '빠르게 뛰기', '천천히 걷기'] }, target: { order: ['천천히 걷기', '빠르게 뛰기', '얼음처럼 멈추기'] }, difficulty: 0.15,
                hints: ['문제에 적힌 음악의 차례를 하나씩 읽고, 그 부분의 빠르기와 소리 멈춤을 닮은 동작을 앞에서부터 놓아요.'] },
              { prompt: '가락은 ‘올라감 → 내려감 → 같은 음’ 차례예요. 동작 카드를 고쳐 놓아요.', toolOptions: { cards: ['제자리에 서 있기', '팔을 내리기', '팔을 올리기'] }, target: { order: ['팔을 올리기', '팔을 내리기', '제자리에 서 있기'] }, difficulty: 0.2,
                hints: ['가락이 높아지면 손도 높이, 낮아지면 손도 낮게, 높이가 그대로면 손도 그대로예요. 문제의 가락 차례를 따라 앞에서부터 놓아요.'],
                levels: { challenge: { toolOptions: { cards: ['제자리에 서 있기', '팔을 내리기', '팔을 올리기', '팔을 크게 올렸다 내리기'] }, prompt: '가락은 ‘올라감 → 내려감 → 같은 음 → 뛰어 올랐다 내려옴’ 차례예요. 동작 카드를 고쳐 놓아요.', target: { order: ['팔을 올리기', '팔을 내리기', '제자리에 서 있기', '팔을 크게 올렸다 내리기'] } } } },
              { prompt: '고치기 전과 고친 뒤에 박을 놓친 사람 수를 세어 적어요.', toolOptions: { fields: ['고치기 전', '고친 뒤'] }, target: { records: true }, difficulty: 0.1 },
              { prompt: '고친 방법으로 다시 해 본 뒤, 해낸 것을 표시해요.', target: { selfCheck: ['고친 장면에서 음악과 동작이 맞았어요', '모둠 모두 바뀐 차례를 알고 움직였어요', '나아진 점을 한 가지 말했어요'] }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"고친 뒤에 무엇이 나아졌나요? 숫자로 말해 볼까요?" 고치기 전과 뒤의 기록을 모둠마다 말한다. 출구 1번에서 처음부터 다시 놓은 학생에게는 바뀐 곳만 고치는 것이 왜 빠른지 이야기한다.',
        exitTicket: [
          { type: 'tool', tool: 'keyboard', options: { mode: 'rhythm', meter: 3, measures: 2, blocks: ['q', 'h', 'qr'] }, state: { rhythm: ['h', 'q', 'h', 'h'] }, prompt: '3박 악보의 둘째 마디가 넘쳤어요. 블록을 고쳐 두 마디를 3박씩 맞춰 보세요.', target: { beats: true }, difficulty: 0.25 },
          { type: 'choice', prompt: '어긋난 장면을 고친 뒤 꼭 해야 할 일은 무엇인가요?', options: ['고친 방법으로 다시 해 봐요', '고쳤으니 그만해요', '다른 모둠 탓을 해요'], answer: 0, difficulty: 0.1, explain: '다시 해 봐야 고친 방법이 음악과 맞는지 알 수 있어요.' },
          { type: 'mood', prompt: '고쳐서 다시 해 보니 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '고쳐서 다시 해 보기',
      items: [
        { type: 'figure', prompt: '박이 맞지 않는 마디에 ○ 하고, 어떻게 고칠지 쓰세요.', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 2 }, figures: [{ state: { rhythm: ['h', 'q', 'q', 'h', 'h', 'q'] }, caption: '고칠 방법: ________________' }], answer: '둘째 마디(5박)에 ○ / 마지막 4분음표를 뺀다' },
        { type: 'table', prompt: '고치기 전과 고친 뒤를 견주어 쓰세요.', columns: ['', '박을 놓친 사람 수', '어긋난 장면'], cells: [['고치기 전', '', ''], ['고친 뒤', '', '']] },
        { type: 'choice', prompt: '가락이 ‘올라감 → 내려감’일 때 알맞은 동작 차례에 ○ 하세요.', options: ['팔 올리기 → 팔 내리기', '팔 내리기 → 팔 올리기', '제자리 서기 → 제자리 서기'], answer: '팔 올리기 → 팔 내리기' },
        { type: 'short', prompt: '고친 뒤 나아진 점을 한 가지 쓰고, 아직 남은 고칠 점도 쓰세요.' },
      ],
      easy: {
        note: '한 마디 박을 손가락으로 세어 4가 되는지 봐요. 고친 뒤에는 꼭 다시 해 봐요.',
        items: [
          { type: 'figure', prompt: '박 수를 세어 쓰세요.', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 1, showBeats: true }, figures: [{ state: { rhythm: ['h', 'q', 'q', 'q'] }, caption: '___박 → 4박이 되려면 ___박을 빼요' }], answer: '5박, 1박' },
          { type: 'choice', prompt: '고친 뒤에는 무엇을 할까요?', options: ['다시 해 봐요', '그만해요'], answer: '다시 해 봐요' },
          { type: 'table', prompt: '박을 놓친 사람 수를 쓰세요.', columns: ['고치기 전', '고친 뒤'], cells: [['', '']] },
          { type: 'short', prompt: '고친 뒤 무엇이 좋아졌는지 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '리듬 블록 아래 마디마다 박 수가 보여 넘친 마디를 바로 찾을 수 있어요.',
      base: '박 수를 스스로 세어 어긋난 마디를 찾아요.',
      challenge: '고칠 블록에 8분쉼표·2분쉼표가 더 있고, 동작 차례가 네 장면으로 늘어나요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 어긋난 곳만 고치지 않고 처음부터 다시 만든다 → 손뼉으로 쳐 보며 어긋나는 곳에서 멈추게 한다. ② 고친 뒤 다시 해 보지 않는다 → 기록판에 고친 뒤 수를 적어야 끝난다. ③ 재미있었으니 고칠 것이 없다고 한다 → 지난 시간 \'어긋났어요\' 카드를 다시 보여 준다.',
  }));

  // ───────────────────────── 11차시 (확장) ─────────────────────────
  lessons.push(Object.assign(head(11, S3), {
    title: '친구 모둠 공연에 근거 들어 칭찬하고 제안하기',
    objective: '다른 모둠의 신체표현·놀이를 보고 음악과 잘 맞은 점과 고칠 점을 음악 요소를 근거로 들어 말하고, 받은 의견을 우리 모둠 활동에 반영할 수 있다.',
    illustration: {
      prompt: ILL('children giving each other paper speech bubbles with stars and hearts after a small performance in the classroom'),
      scene: { viewBox: [480, 270], layers: [
        { motif: 'cloud', x: 110, y: 58 }, { motif: 'cloud', x: 370, y: 48, s: 0.8 }, { motif: 'hills', y: 212 },
        { motif: 'star', x: 140, y: 120, s: 0.6 }, { motif: 'flower', x: 340, y: 222 }, { motif: 'bird', x: 250, y: 96 },
        { motif: 'text', x: 240, y: 158, text: '어디가, 왜 좋았나요?', size: 23 },
      ] },
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"친구가 \'잘했어!\'라고만 말하면 우리는 무엇을 더 잘할 수 있을까요?" 대답을 듣고 \'잘했어\'와 \'쉼표 자리에서 모두 얼음이 된 게 음악과 잘 맞았어\'를 칠판에 나란히 적는다. "둘 중 어느 말이 다음 연습에 도움이 될까요?" 근거가 있는 말이 도움이 된다는 것을 짚는다. 시연 단추로 빈칸 문장에 근거 낱말을 넣는 모습을 보여 준다.',
        student: '‘잘했어’와 ‘어디가 왜 좋았는지 말하기’는 어떻게 다른지 생각해 봅시다.',
        demo: { tool: 'story', options: { mode: 'fill', cards: ['쉼표', '빠르기'], slots: [{ id: 'q1', label: '___ 자리에서 모두 얼음이 된 게 좋았어.' }], shuffle: false }, sequence: [{ fill: { q1: '쉼표' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 친구 모둠 공연 보며 장면 세기', minutes: 9, tool: 'timer',
            teacher: '"두 모둠이 30초씩 얼음 놀이를 보여 줘요. 선생님이 쉼표가 두 번 든 손뼉 리듬을 칠 테니, 보는 사람은 쉼표에서 멈춘 사람 수를 세어요." 보는 모둠은 공연하는 친구를 한 사람씩 맡아 센다. 세다가 웃거나 떠드는 학생에게 "공연하는 친구도 마음속으로 박을 세고 있어요"라고 말한다. 센 수는 근거가 되므로 다음 활동의 칭찬·제안에 그대로 쓴다.',
            task: '친구 모둠 공연을 보고, 쉼표에서 멈춘 사람 수를 세어 적은 뒤 내가 한 것을 점검해요.',
            levels: { easy: { title: '친구 모둠 공연', unit: '명' }, base: { title: '친구 모둠 공연', unit: '명' }, challenge: { title: '친구 모둠 공연', unit: '명' } },
            items: [
              { prompt: '친구 공연을 보고 의견을 주기까지의 차례대로 카드를 놓아요.', toolOptions: { cards: ['근거를 넣어 말해요', '끝까지 조용히 봐요', '본 장면을 세어 적어요'] }, target: { order: ['끝까지 조용히 봐요', '본 장면을 세어 적어요', '근거를 넣어 말해요'] }, difficulty: 0.1,
                hints: ['의견은 본 것을 바탕으로 말해요. 무엇을 먼저 해야 말할 거리가 생기는지 떠올려 놓아요.'] },
              { prompt: '두 모둠 공연에서 쉼표마다 멈춘 사람 수를 모둠마다 적어요.', toolOptions: { fields: ['1모둠', '2모둠'] }, target: { records: true }, difficulty: 0.15,
                hints: ['쉼표 자리에서 움직이지 않은 친구만 손가락을 하나씩 접으며 세어요.'] },
              { prompt: '공연을 본 뒤, 내가 해낸 것을 점검 목록에 표시해요.', target: { selfCheck: ['끝까지 조용히 보았어요', '쉼표 장면을 세어 적었어요', '칭찬할 장면과 제안할 장면을 하나씩 골라 두었어요'] }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 근거 있는 칭찬과 제안 만들기', minutes: 9, tool: 'story',
            teacher: '"칭찬도 제안도 음악의 무엇 때문인지를 넣어 말해요. 방금 센 수도 근거가 돼요." 빈칸 문장을 채우게 한다. 제안을 \'못했어\'로만 말하는 학생에게 "어떻게 하면 더 맞을지 방법을 넣어 볼까요?"라고 말한다.',
            task: '친구 모둠 공연을 떠올리며 빈칸 문장에 음악 요소 낱말을 넣거나, 근거 있는 말만 골라 나누어요.',
            levels: cardsLv(),
            items: [
              { prompt: '칭찬 문장의 빈칸에 알맞은 낱말 카드를 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['쉼표', '박', '빠르기'], slots: [{ id: 'p1', label: '원 돌기에서 ___가 바뀌는 곳마다 걸음도 바꾸어서 좋았어.' }, { id: 'p2', label: '대문을 지나는 걸음이 ___에 딱 맞아서 줄이 흐트러지지 않았어.' }] }, target: { fill: { p1: '빠르기', p2: '박' } }, difficulty: 0.15,
                hints: ['문장을 소리 내어 읽고, 친구 모둠이 음악의 어떤 요소를 잘 지켰는지 떠올려 낱말을 넣어요.'] },
              { prompt: '제안 문장의 빈칸에 알맞은 낱말 카드를 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['셈여림', '가락', '끝맺음'], slots: [{ id: 's1', label: '여린 곳인데 동작이 커서 ___과 어긋났어. 작게 해 보면 어때?' }, { id: 's2', label: '노래 ___에 맞춰 문을 닫으면 더 좋겠어.' }] }, target: { fill: { s1: '셈여림', s2: '끝맺음' } }, difficulty: 0.25,
                hints: ['제안 문장마다 친구 동작이 음악의 무엇과 어긋났는지 찾아요. 소리 크기인지, 높낮이인지, 노래가 끝나는 곳인지 따져 넣어요.'] },
              { prompt: '근거가 있는 말만 칭찬과 제안으로 나누어 넣어요. 근거 없는 말은 남겨요.', toolOptions: { mode: 'sort', slots: ['칭찬', '제안'], cards: ['센박에 발 구르기가 딱 맞았어', '빨라질 때 걸음도 빨라지면 좋겠어', '그냥 잘했어', '재미없었어'] }, target: { sort: { 칭찬: ['센박에 발 구르기가 딱 맞았어'], 제안: ['빨라질 때 걸음도 빨라지면 좋겠어'] } }, difficulty: 0.3,
                predict: { q: '‘그냥 잘했어’는 어디에 넣을까요?', options: ['칭찬', '제안', '넣지 않아요'], answer: 2 },
                conclude: '근거가 없는 말은 기분은 전해도 무엇을 이어 가거나 고칠지는 알려 주지 않아요.' },
            ],
          },
          {
            id: 'a3', title: '활동 3. 의견을 주고받는 바른 태도 고르기', minutes: 8, tool: 'emotion',
            teacher: '"의견을 받았을 때, 줄 때 어떤 마음으로 하면 좋을까요?" 상황마다 고른 뒤 결과를 함께 읽는다. 제안을 받고 속상해하는 학생에게 "제안은 우리 모둠을 더 좋게 만드는 선물"이라고 말해 준다.',
            task: '의견을 주고받는 상황을 읽고, 다음 연습에 도움이 되는 행동을 골라요.',
            levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
            items: [
              { prompt: '친구가 우리 공연에 ‘잘했어’라고만 말했어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '공연이 끝나고 친구가 “잘했어!”라고만 말했어요.', choices: [{ id: 'ask', text: '어느 부분이 왜 좋았는지 물어봐요', result: '친구가 “센박에 발을 구른 게 좋았어”라고 알려 줘요.', mood: '뿌듯함' }, { id: 'thanks', text: '고맙다고만 하고 끝내요', result: '다음에 무엇을 이어 갈지 알 수 없어요.', mood: '걱정' }] }, target: { choice: 'ask' }, difficulty: 0.15 },
              { prompt: '“빨라질 때 걸음이 그대로였어”라는 제안을 받았어요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '다른 모둠이 “빨라지는 곳에서 걸음이 그대로였어”라고 말해 주었어요.', choices: [{ id: 'ignore', text: '속상하니 못 들은 척해요', result: '같은 장면이 다음에도 어긋나요.', mood: '속상함' }, { id: 'try', text: '그 장면만 다시 해 봐요', result: '빨라지는 곳에서 걸음도 빨라져 음악과 맞아요.', mood: '기쁨' }, { id: 'blame', text: '친구 모둠도 틀렸다고 말해요', result: '말다툼이 생기고 연습 시간이 줄어요.', mood: '화남' }] }, target: { choice: 'try' }, difficulty: 0.25 },
              { prompt: '친구 모둠이 쉼표에서 멈추지 못했어요. 어떻게 말할까요?', toolOptions: { mode: 'branch', situation: '친구 모둠이 쉼표에서 멈추지 못하고 계속 움직였어요.', choices: [{ id: 'laugh', text: '틀렸다고 크게 웃어요', result: '친구들이 부끄러워 다음 공연을 하기 싫어해요.', mood: '속상함' }, { id: 'kind', text: '쉼표 자리를 알려 주며 부드럽게 말해요', result: '친구 모둠이 쉼표에서 멈추는 연습을 해요.', mood: '고마움' }] }, target: { choice: 'kind' }, difficulty: 0.15 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"받은 의견 가운데 다음 시간에 꼭 고쳐 볼 것 하나를 모둠이 정해 볼까요?" 모둠마다 바꿀 장면 하나를 말하게 한다. 출구 2번에서 근거 없는 말을 고른 학생과는 \'어디가 + 왜\' 틀을 다시 말해 본다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { mode: 'fill', cards: ['가락', '박', '쉼표'], slots: [{ id: 'e1', label: '___이 올라갈 때 팔을 높이 든 것이 잘 어울렸어.' }] }, prompt: '칭찬 문장의 빈칸에 알맞은 낱말 카드를 넣어 보세요.', target: { fill: { e1: '가락' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '근거가 있는 칭찬은 무엇인가요?', options: ['너희 모둠 최고야', '여린 곳에서 발끝으로 걸은 게 음악과 맞았어', '재미있었어'], answer: 1, difficulty: 0.15, explain: '어디가(여린 곳) 왜(음악과 맞음) 좋았는지가 들어 있어요.' },
          { type: 'short', prompt: '우리 모둠이 받은 의견 가운데 다음에 바꿀 것을 한 문장으로 쓰세요.' },
        ],
      },
    ],
    worksheet: {
      title: '근거 있는 칭찬과 제안',
      items: [
        { type: 'table', prompt: '친구 모둠 공연을 보고 쓰세요.', columns: ['', '어디가(장면)', '왜(음악의 무엇)'], cells: [['칭찬', '', ''], ['제안', '', '']] },
        { type: 'choice', prompt: '근거가 있는 제안에 ○ 하세요.', options: ['다시 해', '쉼표에서 멈추면 더 음악과 맞겠어', '별로였어'], answer: '쉼표에서 멈추면 더 음악과 맞겠어' },
        { type: 'blank', prompt: '빈칸을 채우세요.', text: '빨라지는 곳에서 걸음이 그대로였으니 ___를 더 잘 들어 보자.', answer: '빠르기' },
        { type: 'short', prompt: '우리 모둠이 받은 의견과, 그 의견으로 바꿀 점을 쓰세요.' },
      ],
      easy: {
        note: '칭찬도 제안도 ‘어디가 + 왜’를 넣어 말해요.',
        items: [
          { type: 'choice', prompt: '도움이 되는 칭찬에 ○ 하세요.', options: ['잘했어', '얼음 놀이 쉼표에서 모두 굳은 게 좋았어'], answer: '얼음 놀이 쉼표에서 모두 굳은 게 좋았어' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '걸음이 ___에 맞아서 좋았어.', answer: '박' },
          { type: 'short', prompt: '친구 모둠에게 해 주고 싶은 칭찬을 한 문장으로 쓰세요.' },
          { type: 'draw', prompt: '친구 모둠에서 가장 좋았던 장면을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞게 넣은 낱말 카드에 초록 테두리가 보이고, 상황마다 결과가 바로 보여요.',
      base: '빈칸을 모두 채운 뒤 스스로 확인해요.',
      challenge: '카드 순서가 섞이고, 상황의 결과는 맞게 고른 뒤에만 보여요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 잘했다는 말만 주고받는다 → \'어디가 + 왜\' 틀을 칠판에 붙여 둔다. ② 제안을 흉보기로 받아들인다 → 제안은 장면에 대한 말이지 사람에 대한 말이 아니라고 짚는다. ③ 근거에 음악 요소 대신 \'열심히\'를 쓴다 → 음악 요소 낱말 카드에서 고르게 한다.',
  }));

  // ───────────────────────── 12차시 (확장) ─────────────────────────
  lessons.push(Object.assign(head(12, S3), {
    title: '우리 반 신체표현·놀이 점검표로 스스로 평가하기',
    objective: '박·리듬·빠르기·셈여림·가락에 따라 점검 질문을 묶어 우리 반 점검표를 만들고, 점검표를 보며 몸 악기 리듬을 다시 쳐 본 뒤 지금까지의 신체표현·놀이 활동을 스스로 평가할 수 있다.',
    illustration: {
      prompt: ILL('a large paper checklist pinned on a classroom wall with stars, musical notes and small dancing figures around it'),
      scene: { viewBox: [480, 270], layers: [
        { motif: 'sun', x: 404, y: 58, s: 0.7 }, { motif: 'cloud', x: 110, y: 52 }, { motif: 'hills', y: 212 },
        { motif: 'star', x: 120, y: 130, s: 0.6 }, { motif: 'star', x: 360, y: 130, s: 0.6 }, { motif: 'tree', x: 420, y: 216 },
        { motif: 'text', x: 240, y: 150, text: '우리 반 점검표', size: 26 },
      ] },
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"지금까지 몸 악기, 장단, 대문놀이, 얼음 놀이, 원 돌기를 했어요. 가장 음악과 잘 맞았던 활동은 무엇인가요?" 몇 명의 대답을 듣고 "어떻게 알 수 있나요? 우리 반이 함께 쓸 점검표를 만들어 봐요"라고 말한다. 시연 단추로 점검 질문이 음악 요소 가지에 묶이는 모습을 보여 준다.',
        student: '지금까지 한 신체표현과 놀이 가운데 가장 기억에 남는 것을 떠올려 봅시다.',
        demo: { tool: 'mindmap', options: { topic: '우리 반 점검표', slots: ['박', '가락'], cards: ['센박에 발을 굴렀나요?', '가락이 오를 때 팔을 들었나요?'], shuffle: false }, sequence: [{ sort: { 박: ['센박에 발을 굴렀나요?'], 가락: ['가락이 오를 때 팔을 들었나요?'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 점검 질문을 음악 요소로 묶기', minutes: 9, tool: 'mindmap',
            teacher: '"이 질문은 음악의 무엇을 보는 질문인가요?" 질문 카드를 읽고 가지를 고르게 한다. 쉼표 질문을 박에 넣는 학생에게 "박은 쉼표에서도 똑같이 흘러가요. 쉼표는 소리를 얼마나 쉬는지, 곧 소리와 쉼의 길이예요. 그 길이를 보는 요소는 무엇이었지요?"라고 물어 리듬을 끌어낸다. 음악 요소가 아닌 질문(몇 등을 했나요?)은 점검표에서 뺀다는 것을 짚는다.',
            task: '점검 질문 카드를 읽고, 그 질문이 보는 음악 요소 가지에 넣어요. 음악과 상관없는 질문은 남겨요.',
            levels: cardsLv(),
            items: [
              { prompt: '점검 질문을 박과 리듬 가지로 나누어 보세요.', toolOptions: { topic: '우리 반 점검표', slots: ['박', '리듬'], cards: ['센박에 발을 굴렀나요?', '쉼표에서 소리를 멈췄나요?', '박마다 한 걸음씩 걸었나요?', '긴 음표에서 소리를 길게 끌었나요?'] }, target: { sort: { 박: ['센박에 발을 굴렀나요?', '박마다 한 걸음씩 걸었나요?'], 리듬: ['쉼표에서 소리를 멈췄나요?', '긴 음표에서 소리를 길게 끌었나요?'] } }, difficulty: 0.15,
                hints: ['박은 시계 초침처럼 늘 고르게 흐르는 것, 리듬은 소리와 쉼이 얼마나 긴지예요. 질문이 어느 쪽을 보는지 따져 넣어요.'] },
              { prompt: '점검 질문을 빠르기·셈여림·가락 가지로 나누어 보세요.', toolOptions: { topic: '우리 반 점검표', slots: ['빠르기', '셈여림', '가락'], cards: ['빨라질 때 걸음도 빨라졌나요?', '느린 곳에서 천천히 움직였나요?', '여린 곳에서 동작이 작았나요?', '세지는 곳에서 동작이 커졌나요?', '가락이 오를 때 팔을 들었나요?', '같은 음에서 손 높이가 그대로였나요?'] }, target: { sort: { 빠르기: ['빨라질 때 걸음도 빨라졌나요?', '느린 곳에서 천천히 움직였나요?'], 셈여림: ['여린 곳에서 동작이 작았나요?', '세지는 곳에서 동작이 커졌나요?'], 가락: ['가락이 오를 때 팔을 들었나요?', '같은 음에서 손 높이가 그대로였나요?'] } }, difficulty: 0.2 },
              { prompt: '다섯 가지 요소에 질문을 하나씩 넣어 점검표를 완성해요. 상관없는 질문은 남겨요.', toolOptions: { topic: '우리 반 점검표', slots: ['박', '리듬', '빠르기', '셈여림', '가락'], cards: ['박에 맞춰 손뼉을 쳤나요?', '잰걸음 리듬을 두 걸음씩 걸었나요?', '점점 빨라질 때 따라갔나요?', '여려질 때 몸을 낮췄나요?', '가락이 내려갈 때 팔을 내렸나요?', '몇 등을 했나요?'] }, target: { sort: { 박: ['박에 맞춰 손뼉을 쳤나요?'], 리듬: ['잰걸음 리듬을 두 걸음씩 걸었나요?'], 빠르기: ['점점 빨라질 때 따라갔나요?'], 셈여림: ['여려질 때 몸을 낮췄나요?'], 가락: ['가락이 내려갈 때 팔을 내렸나요?'] } }, reveal: 'after-check', difficulty: 0.3 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 점검표를 보며 몸 악기 리듬 다시 치기', minutes: 9, tool: 'keyboard',
            teacher: '"점검표는 말로만 쓰는 것이 아니라 해 보며 쓰는 거예요. 점검표의 박·리듬 질문을 보며 몸 악기로 다시 쳐 볼까요?" 리듬을 듣고 무릎(센박)과 손뼉으로 먼저 친 뒤 블록으로 놓는다. 쉼표에서 손뼉을 치는 학생에게 "쉼표에서는 소리를 멈추되, 박은 마음속으로 계속 세어요"라고 말한다. 마지막 문항은 짝과 마주 보고 친 뒤에만 점검 목록을 표시하게 한다.',
            task: '몸 악기 리듬을 듣고 무릎과 손뼉으로 친 뒤 블록으로 놓아요. 마지막에는 점검표 질문대로 내 리듬을 지어 쳐 봐요.',
            levels: rhy(4, 2),
            items: [
              { prompt: '첫 박이 길게 울리는 몸 악기 리듬이에요. 듣고 무릎·손뼉으로 친 뒤 블록으로 놓아 보세요.', toolOptions: { pattern: ['h', 'q', 'q', 'qr', 'q', 'h'] }, target: { rhythm: ['h', 'q', 'q', 'qr', 'q', 'h'] }, difficulty: 0.2 },
              { prompt: '잰걸음과 쉼표가 든 몸 악기 리듬이에요. 듣고 쳐 본 뒤 블록으로 놓아 보세요.', toolOptions: { pattern: ['e', 'e', 'q', 'q', 'qr', 'h', 'q', 'q'] }, target: { rhythm: ['e', 'e', 'q', 'q', 'qr', 'h', 'q', 'q'] }, reveal: 'after-check', difficulty: 0.3,
                predict: { q: '쉼표 자리에서 박은 어떻게 될까요?', options: ['박도 멈춰요', '소리만 멈추고 박은 계속 흘러가요'], answer: 1 },
                conclude: '쉼표는 소리를 쉬는 길이예요. 소리가 멈춰도 박은 고르게 흘러가요.' },
              { prompt: '점검표의 박·리듬 질문을 지키며 두 마디 몸 악기 리듬을 지어 짝과 쳐 보고 점검해요.', target: { beats: true, rests: 1, selfCheck: ['센박에 무릎을 쳤어요', '쉼표에서 소리를 멈추고 박은 마음속으로 셌어요', '짝과 마주 보고 끝까지 함께 쳤어요'] }, difficulty: 0.25 },
            ],
          },
          {
            id: 'a3', title: '활동 3. 점검표로 나를 평가하기', minutes: 9, tool: 'timer',
            teacher: '"점검표로 내 활동마다 1점에서 3점을 매겨 보세요. 3점은 음악과 늘 맞았을 때, 1점은 자주 어긋났을 때예요." 모두 3점을 주는 학생에게 "그 활동에서 어긋난 장면이 하나도 없었나요?"라고 묻는다. 가장 낮은 활동 하나를 골라 다음에 바꿀 점을 정하게 한다.',
            task: '되돌아보기 차례를 놓고, 활동마다 나의 점수를 적은 뒤, 점검 목록에 표시해요.',
            levels: { easy: { title: '나를 돌아봐요', unit: '점' }, base: { title: '나를 돌아봐요', unit: '점' }, challenge: { title: '나를 돌아봐요', unit: '점' } },
            items: [
              { prompt: '활동을 되돌아보는 차례대로 카드를 놓아요.', toolOptions: { cards: ['다시 해 보기', '어긋난 장면 찾기', '고칠 방법 정하기', '잘 맞은 장면 찾기'] }, target: { order: ['잘 맞은 장면 찾기', '어긋난 장면 찾기', '고칠 방법 정하기', '다시 해 보기'] }, difficulty: 0.2,
                hints: ['고치려면 먼저 무엇을 알아야 하는지 떠올려 앞에서부터 놓아요. 고친 것이 맞는지는 언제 알 수 있을까요?'] },
              { prompt: '활동마다 음악과 얼마나 맞았는지 1~3점으로 적어요.', toolOptions: { fields: [{ label: '몸 악기', unit: '점', max: 3 }, { label: '대문놀이', unit: '점', max: 3 }, { label: '얼음 놀이', unit: '점', max: 3 }, { label: '원 돌기', unit: '점', max: 3 }] }, target: { records: true }, difficulty: 0.1,
                levels: { easy: { toolOptions: { fields: [{ label: '대문놀이', unit: '점', max: 3 }, { label: '얼음 놀이', unit: '점', max: 3 }] } } } },
              { prompt: '점검표로 나를 평가한 뒤, 해낸 것을 표시해요.', target: { selfCheck: ['점수마다 그렇게 매긴 장면을 떠올렸어요', '가장 낮은 활동을 하나 골랐어요', '다음에 바꿀 점을 한 가지 정했어요'] }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"점검표를 써 보니 재미만 볼 때와 무엇이 달랐나요?" 음악 요소를 하나씩 보게 되었다는 대답을 기다린다. 우리 반 점검표는 교실에 붙여 다음 단원 활동에도 쓴다고 알린다. 출구 2번을 틀린 학생과는 질문 카드를 다시 가지에 넣어 본다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '점검 질문', slots: ['셈여림', '빠르기'], cards: ['세지는 곳에서 발을 크게 굴렀나요?', '느려질 때 걸음도 느려졌나요?'] }, prompt: '점검 질문을 알맞은 가지에 넣어 보세요.', target: { sort: { 셈여림: ['세지는 곳에서 발을 크게 굴렀나요?'], 빠르기: ['느려질 때 걸음도 느려졌나요?'] } }, difficulty: 0.2 },
          { type: 'choice', prompt: '‘쉼표에서 소리를 멈췄나요?’는 어느 요소를 보는 질문인가요?', options: ['리듬', '셈여림', '가락'], answer: 0, difficulty: 0.25, explain: '쉼표는 소리와 쉼의 길이, 곧 리듬을 지켰는지 보는 질문이에요. 쉼표에서도 박은 계속 흘러가요.' },
          { type: 'short', prompt: '내가 가장 낮은 점수를 준 활동과, 다음에 바꿀 점을 쓰세요.' },
          { type: 'mood', prompt: '1~12차시 신체표현과 놀이 활동은 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '우리 반 점검표',
      items: [
        { type: 'table', prompt: '음악 요소마다 점검 질문을 하나씩 쓰세요.', columns: ['음악 요소', '점검 질문'], cells: [['박', ''], ['리듬', ''], ['빠르기', ''], ['셈여림', ''], ['가락', '']] },
        { type: 'table', prompt: '활동마다 나의 점수(1~3점)와 그 까닭을 쓰세요.', columns: ['활동', '점수', '까닭(장면)'], cells: [['몸 악기', '', ''], ['대문놀이', '', ''], ['얼음 놀이', '', ''], ['원 돌기', '', '']] },
        { type: 'choice', prompt: '점검표에 넣기에 알맞지 않은 질문에 ○ 하세요.', options: ['박에 맞춰 걸었나요?', '몇 등을 했나요?', '여린 곳에서 동작이 작았나요?'], answer: '몇 등을 했나요?' },
        { type: 'short', prompt: '다음에 신체표현이나 놀이를 할 때 바꿀 점을 한 가지 쓰세요.' },
      ],
      easy: {
        note: '박·리듬·빠르기·셈여림·가락 — 다섯 가지를 보며 점수를 매겨요. 쉼표는 리듬, 고르게 흐르는 것은 박이에요.',
        items: [
          { type: 'choice', prompt: '리듬을 보는 질문에 ○ 하세요.', options: ['쉼표에서 소리를 멈췄나요?', '가락이 오를 때 팔을 들었나요?'], answer: '쉼표에서 소리를 멈췄나요?' },
          { type: 'table', prompt: '나의 점수를 쓰세요(1~3점).', columns: ['활동', '점수'], cells: [['대문놀이', ''], ['얼음 놀이', '']] },
          { type: 'short', prompt: '가장 잘한 활동을 쓰세요.' },
          { type: 'short', prompt: '다음에 더 잘하고 싶은 것을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞게 넣은 질문 카드에 초록 테두리가 보이고, 리듬 블록 아래에 박 수가 보여요. 점수는 두 활동만 매겨요.',
      base: '네 활동에 점수를 매기고, 질문 카드와 리듬 박 수를 스스로 확인해요.',
      challenge: '다섯 가지 요소 점검표를 한 번에 완성하고 함정 질문을 가려내요. 맞게 넣기 전에는 테두리가 보이지 않고, 리듬 블록에 8분쉼표·2분쉼표가 더 나와요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 모든 활동에 3점을 준다 → 그 점수를 준 장면을 말하게 한다. ② 쉼표 질문을 박이나 셈여림에 넣는다 → 쉼표는 소리가 \'여린\' 것이 아니라 소리를 쉬는 길이이므로 리듬에 속한다. 박은 쉼표에서도 고르게 흐른다는 것을 손을 펴고 마음속으로 세며 보인다. ③ 점검표를 재미 점수로 바꾼다 → 점검 질문은 음악 요소로만 만든다. 만든 점검표는 교실 뒤에 붙여 두고 23차시 단원 정리에서 다시 쓴다.',
  }));

  // ───────────────────────── 13차시 (핵심) ─────────────────────────
  lessons.push(Object.assign(head(13, S4), {
    title: '집·학교·동네에서 들리는 음악 찾기',
    objective: '집·학교·동네에서 들리는 음악을 장소별로 찾아 나누고, 그 가운데 사람들이 함께 부르거나 연주하는 장면을 가려낼 수 있다.',
    illustration: {
      prompt: ILL('a cozy paper village with a house, a school and a small shop, with musical notes floating out of each window'),
      scene: { viewBox: [480, 270], layers: [
        { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 120, y: 52 }, { motif: 'hills', y: 212 },
        { motif: 'house', x: 100, y: 214 }, { motif: 'house', x: 240, y: 216, s: 1.2 }, { motif: 'house', x: 380, y: 214 },
        { motif: 'text', x: 240, y: 120, text: '우리 둘레의 음악', size: 24 },
      ] },
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"오늘 아침 일어나서 학교에 올 때까지 들은 음악이 있나요?" 몇 명의 대답을 칠판에 적는다. "연주는 무대에서만 하는 걸까요? 집에서 가족과 생일 노래를 부르는 것도 연주일까요?" 무대가 아니어도 여럿이 함께 부르거나 연주하면 생활 속 연주 활동이라는 것을 짚는다. 시연 단추로 장면 카드를 장소별로 나누는 모습을 보여 준다.',
        student: '오늘 아침부터 지금까지 어디에서 어떤 음악을 들었는지 떠올려 봅시다.',
        demo: { tool: 'mindmap', options: { topic: '내가 들은 음악', slots: ['집', '학교'], cards: ['설거지하며 흥얼거리는 노래', '아침 조회 때 부르는 교가'], shuffle: false }, sequence: [{ sort: { 집: ['설거지하며 흥얼거리는 노래'], 학교: ['아침 조회 때 부르는 교가'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 들리는 음악을 장소별로 나누기', minutes: 12, tool: 'mindmap',
            teacher: '"이 음악은 어디에서 들었을 것 같나요?" 장면 카드를 읽고 장소 가지에 넣게 한다. 카드마다 "여러분도 들어 본 적 있나요?"를 물어 자기 경험과 잇게 한다. 한 카드가 두 곳에 다 들어갈 수 있다고 하는 학생에게는 카드에 쓰인 단서(조회·놀이터·가게)를 찾게 한다.',
            task: '음악이 들리는 장면 카드를 읽고, 그 음악이 들리는 장소 가지에 넣어요.',
            levels: cardsLv(),
            items: [
              { prompt: '음악이 들리는 장면을 집과 학교로 나누어 보세요.', toolOptions: { topic: '생활 속 음악', slots: ['집', '학교'], cards: ['저녁에 가족이 생일 노래를 불러요', '점심시간 방송 음악이 나와요', '아침 조회 때 교가를 불러요', '동생에게 자장가를 불러 줘요'] }, target: { sort: { 집: ['저녁에 가족이 생일 노래를 불러요', '동생에게 자장가를 불러 줘요'], 학교: ['점심시간 방송 음악이 나와요', '아침 조회 때 교가를 불러요'] } }, difficulty: 0.1 },
              { prompt: '음악이 들리는 장면을 학교와 동네로 나누어 보세요.', toolOptions: { topic: '생활 속 음악', slots: ['학교', '동네'], cards: ['음악 시간에 리코더를 불어요', '가게에서 음악이 흘러나와요', '놀이터에서 놀이 노래를 불러요', '운동회 날 응원가를 불러요'] }, target: { sort: { 학교: ['음악 시간에 리코더를 불어요', '운동회 날 응원가를 불러요'], 동네: ['가게에서 음악이 흘러나와요', '놀이터에서 놀이 노래를 불러요'] } }, difficulty: 0.2 },
              { prompt: '음악이 들리는 장면을 집·학교·동네로 나누어 보세요.', toolOptions: { topic: '생활 속 음악', slots: ['집', '학교', '동네'], cards: ['할머니와 손뼉 치며 노래해요', '쉬는 시간 끝 알림 가락', '마을 축제에서 풍물을 쳐요', '형이 기타를 쳐요', '합창부가 연습해요', '버스킹 공연을 봐요'] }, target: { sort: { 집: ['할머니와 손뼉 치며 노래해요', '형이 기타를 쳐요'], 학교: ['쉬는 시간 끝 알림 가락', '합창부가 연습해요'], 동네: ['마을 축제에서 풍물을 쳐요', '버스킹 공연을 봐요'] } }, reveal: 'after-check', difficulty: 0.3 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 함께 부르거나 연주하는 장면 고르기', minutes: 14, tool: 'mindmap',
            teacher: '"이 가운데 사람들이 함께 부르거나 연주하는 장면은 무엇인가요?" 혼자 듣기만 하는 장면과 여럿이 소리를 내는 장면을 견주게 한다. 무대 공연만 고르는 학생에게 "놀이터에서 친구들과 노래하며 줄넘기하는 것은요?"라고 묻는다.',
            task: '장면 카드를 읽고, 사람들이 함께 부르거나 연주하는 장면만 바구니에 골라 넣어요.',
            levels: cardsLv(),
            items: [
              { prompt: '사람들이 함께 부르거나 연주하는 장면만 골라 보세요.', toolOptions: { mode: 'pick', topic: '함께하는 음악', basket: '함께하는 장면', cards: ['운동회에서 반 친구들과 응원가를 불러요', '혼자 이어폰으로 음악을 들어요', '가족이 함께 생일 노래를 불러요', '텔레비전에서 광고 음악이 나와요'] }, target: { pick: ['운동회에서 반 친구들과 응원가를 불러요', '가족이 함께 생일 노래를 불러요'] }, difficulty: 0.15 },
              { prompt: '함께 부르거나 연주하는 장면만 골라 보세요. 듣기만 하는 장면은 남겨요.', toolOptions: { mode: 'pick', topic: '함께하는 음악', basket: '함께하는 장면', cards: ['마을 축제에서 풍물패가 풍물을 쳐요', '엘리베이터에서 음악이 흘러요', '할머니와 손뼉 치며 노래해요', '휴대폰 알림 소리가 울려요'] }, target: { pick: ['마을 축제에서 풍물패가 풍물을 쳐요', '할머니와 손뼉 치며 노래해요'] }, difficulty: 0.2 },
              { prompt: '무대가 아닌 곳에서도 함께하는 장면이 있어요. 함께 부르거나 연주하는 장면을 모두 골라요.', toolOptions: { mode: 'pick', topic: '함께하는 음악', basket: '함께하는 장면', cards: ['무대에서 합창단이 공연해요', '친구들과 놀이 노래를 부르며 줄넘기해요', '혼자 라디오를 들어요'] }, target: { pick: ['무대에서 합창단이 공연해요', '친구들과 놀이 노래를 부르며 줄넘기해요'] }, difficulty: 0.3,
                predict: { q: '‘놀이 노래를 부르며 줄넘기’도 함께하는 음악 장면일까요?', options: ['네, 맞아요', '아니요, 무대가 아니에요'], answer: 0 },
                conclude: '무대가 아니어도 여럿이 함께 부르거나 연주하면 생활 속 연주 활동이에요.' },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘부터 사흘 동안 집과 학교에서 들리는 음악을 기록장에 적어 오세요. 곡 이름을 모르면 \'어떤 장면에서 들었는지\'만 적어도 돼요." 기록장 칸(날짜·장소·곡이나 장면·함께했나요?)을 함께 읽는다. 출구 2번에서 무대만 고른 학생에게는 오늘 고른 놀이 노래 카드를 다시 보여 준다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'pick', topic: '함께하는 음악', basket: '함께하는 장면', cards: ['친구 생일에 반 모두 노래해요', '혼자 휴대폰으로 노래를 들어요', '동네 어르신들이 장구를 함께 쳐요'] }, prompt: '함께 부르거나 연주하는 장면만 골라 보세요.', target: { pick: ['친구 생일에 반 모두 노래해요', '동네 어르신들이 장구를 함께 쳐요'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '생활 속 연주 활동에 대한 바른 말은 무엇인가요?', options: ['무대에서 하는 것만 연주예요', '집에서 가족과 함께 노래하는 것도 연주 활동이에요', '음악은 공연장에서만 들려요'], answer: 1, difficulty: 0.15, explain: '무대가 아니어도 여럿이 함께 부르거나 연주하면 생활 속 연주 활동이에요.' },
          { type: 'mood', prompt: '우리 둘레의 음악을 찾아보니 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '사흘 음악 기록장',
      items: [
        { type: 'table', prompt: '사흘 동안 들은 음악을 적고, 함께 부르거나 연주한 장면에는 ○ 하세요.', columns: ['날짜', '장소', '곡 이름이나 장면', '함께했나요?'], rows: 6 },
        { type: 'choice', prompt: '함께 부르거나 연주하는 장면에 ○ 하세요.', options: ['혼자 라디오를 들어요', '가족과 생일 노래를 불러요', '광고 음악이 나와요'], answer: '가족과 생일 노래를 불러요' },
        { type: 'blank', prompt: '빈칸을 채우세요.', text: '무대가 아니어도 여럿이 ___ 부르거나 연주하면 생활 속 연주 활동이에요.', answer: '함께' },
        { type: 'short', prompt: '오늘 찾은 장면 가운데 나도 해 보고 싶은 것을 쓰세요.' },
      ],
      easy: {
        note: '곡 이름을 몰라도 괜찮아요. 어디서, 어떤 장면이었는지 적어요.',
        items: [
          { type: 'table', prompt: '들은 음악을 적어요.', columns: ['장소', '어떤 장면'], rows: 4 },
          { type: 'choice', prompt: '함께하는 장면에 ○ 하세요.', options: ['반 친구들과 응원가를 불러요', '혼자 음악을 들어요'], answer: '반 친구들과 응원가를 불러요' },
          { type: 'short', prompt: '집에서 들은 음악을 하나 쓰세요.' },
          { type: 'draw', prompt: '가족이나 친구와 함께 노래하는 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞게 넣은 카드에 초록 테두리가 보이고, 틀린 곳에 넣으면 까닭을 말해 주며 되돌아와요.',
      base: '카드를 모두 넣은 뒤 스스로 확인해요.',
      challenge: '세 장소로 나누기는 맞게 넣기 전에 테두리가 보이지 않고, 카드 순서도 섞여 나와요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 무대 공연만 연주라고 여긴다 → 가족 생일 노래, 놀이 노래도 함께하는 연주 활동이다. ② 혼자 듣는 것과 함께 부르는 것을 구별하지 않는다 → \'소리를 내는 사람이 여럿인가?\'를 묻는다. ③ 곡 이름을 몰라 기록을 포기한다 → 장면만 적어도 된다고 미리 알린다. 기록장에는 가족이나 친구의 이름을 적지 않고 \'가족\', \'친구\'로만 쓰게 한다.',
  }));

  // ───────────────────────── 14차시 (연습) ─────────────────────────
  lessons.push(Object.assign(head(14, S4), {
    title: '음악 기록장 세어 그래프로 보고 함께 불러 보기',
    objective: '사흘 동안 기록한 생활 속 음악에서 함께한 장면을 세어 막대그래프로 나타내 어디에서 많았는지 말하고, 기록장에서 찾은 함께하는 노래 하나를 박을 세어 다 같이 시작해 부를 수 있다.',
    illustration: {
      prompt: ILL('a child holding a paper notebook full of musical notes beside a colorful paper bar chart shaped like little houses'),
      scene: { viewBox: [480, 270], layers: [
        { motif: 'cloud', x: 120, y: 54 }, { motif: 'sun', x: 404, y: 58, s: 0.7 }, { motif: 'hills', y: 212 },
        { motif: 'house', x: 90, y: 214 }, { motif: 'tree', x: 400, y: 214 }, { motif: 'star', x: 240, y: 96, s: 0.6 },
        { motif: 'text', x: 240, y: 152, text: '어디서 가장 많이 들었나요?', size: 21 },
      ] },
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"사흘 기록장을 펴 보세요. 몇 곡이나 적었나요? 그 가운데 함께 부르거나 연주한 장면은 몇 번이었나요?" 서너 명의 수를 듣는다. "곡 이름만 적은 친구도 있고 장면까지 적은 친구도 있네요. 장면을 적어야 함께했는지 알 수 있어요." 시연 단추로 기록을 막대로 옮기는 모습을 보여 준다.',
        student: '내 사흘 기록장에서 들은 음악의 수를 세어 봅시다.',
        demo: { tool: 'chart', options: { type: 'bar', title: '내가 들은 음악', data: [['집', 3], ['학교', 2]], unit: '곡', xLabel: '장소', yLabel: '음악 수' }, sequence: [{ values: [3, null] }, { values: [3, 2] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 기록장에서 함께한 장면 세기', minutes: 8, tool: 'timer',
            teacher: '"기록장에서 ○ 한 줄, 곧 함께 부르거나 연주한 장면만 날마다 세어요. 혼자 들은 줄은 세지 않아요." 보기 기록장을 칠판에 붙이고 한 줄씩 읽으며 "이 줄은 함께했나요?"를 묻는다. 기록장에 곡 이름만 있고 장면이 없는 줄에는 지금 기억나는 장면을 덧붙이게 한다. 기록이 적은 학생이 부끄러워하면 "들은 것을 찾아낸 것이 중요해요"라고 말해 준다.',
            task: '기록장에서 함께한 장면(○)만 골라 날마다 세어 적고, 기록을 잘 남겼는지 점검해요.',
            levels: { easy: { title: '함께한 장면', unit: '번' }, base: { title: '함께한 장면', unit: '번' }, challenge: { title: '함께한 장면', unit: '번' } },
            items: [
              { prompt: '내 기록장에서 함께한 장면(○)만 날마다 세어 적어요.', toolOptions: { fields: ['첫째 날', '둘째 날', '셋째 날'] }, target: { records: true }, difficulty: 0.1 },
              { prompt: '보기 기록장 — 첫째 날: 생일 노래○, 광고 음악, 줄넘기 노래○ / 둘째 날: 교가○, 라디오 / 셋째 날: 응원가○, 자장가○, 리코더 합주○, 이어폰 음악. ○만 날마다 세어 적어요.', toolOptions: { fields: ['첫째 날', '둘째 날', '셋째 날'] }, target: { records: [2, 1, 3] }, difficulty: 0.2,
                hints: ['○ 표시가 붙은 장면만 손가락으로 짚으며 세어요. ○가 없는 장면은 혼자 들은 것이라 세지 않아요.'] },
              { prompt: '내 기록장을 다시 읽고, 잘 남긴 것을 점검 목록에 표시해요.', target: { selfCheck: ['줄마다 장소를 적었어요', '곡 이름을 모르면 장면을 적었어요', '함께한 장면에 ○ 했어요'] }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 모둠 기록을 막대그래프로 나타내고 읽기', minutes: 10, tool: 'chart',
            teacher: '"모둠 네 명이 센 함께한 장면을 장소별로 더하면 이런 표가 돼요. 막대로 나타내면 무엇이 한눈에 보일까요?" 눈금 한 칸이 몇 번인지 먼저 읽게 한다. 막대를 그린 뒤에는 "함께한 장면이 가장 많은 곳은 왜 그곳일까요?"를 물어 생활과 잇는다.',
            task: '표를 보고 막대그래프를 완성하고, 그래프를 읽고 물음에 답해요. 눈금 한 칸의 크기를 먼저 보세요.',
            levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
            items: [
              { prompt: '모둠 표(집 4번, 학교 7번, 동네 2번)를 보고 장소별 함께한 장면 수를 막대그래프로 나타내요.', toolOptions: { type: 'bar', title: '장소별 함께한 장면', data: [['집', 4], ['학교', 7], ['동네', 2]], unit: '번', xLabel: '장소', yLabel: '장면 수', given: [0] }, target: { build: true }, difficulty: 0.15 },
              { prompt: '함께 부르거나 연주한 장면이 가장 많은 곳은 어디인가요?', toolOptions: { type: 'bar', mode: 'read', title: '장소별 함께한 장면', data: [['집', 4], ['학교', 7], ['동네', 2]], unit: '번', xLabel: '장소', choices: ['집', '학교', '동네'], why: ['집 막대는 학교 막대보다 낮아요.', '', '동네 막대가 가장 낮아요.'], explain: '학교 막대가 7번으로 가장 높아요.' }, target: { pick: 1 }, difficulty: 0.15,
                predict: { q: '함께 부르거나 연주하는 장면은 어디에서 가장 많을까요?', options: ['집', '학교', '동네'] },
                conclude: '학교는 여럿이 함께 노래하고 연주하는 시간이 많아서 함께한 장면이 많아요.' },
              { prompt: '집에서 함께 부르거나 연주한 장면은 몇 번인가요?', toolOptions: { type: 'bar', mode: 'read', title: '장소별 함께한 장면', data: [['집', 4], ['학교', 7], ['동네', 2]], unit: '번', xLabel: '장소', question: '집에서 함께한 장면은 몇 번인가요?' }, target: { value: 4 }, difficulty: 0.2 },
            ],
          },
          {
            id: 'a3', title: '활동 3. 기록장에서 찾은 노래 다 같이 시작해 부르기', minutes: 9, tool: 'keyboard',
            teacher: '"기록장에 가장 많이 나온 함께하는 노래는 무엇이었나요? 생일 노래, 교가, 대문놀이 노래 가운데 하나를 골라 지금 반이 함께 불러 봐요." 학급이 하나를 고르면 "여럿이 함께 부를 때는 첫 박을 같이 시작해야 해요. 4박 노래는 \'하나 둘 셋 넷\', 3박 노래는 \'하나 둘 셋\'을 세고 시작해요"라고 말하며 신호 손뼉을 쳐 준다. 신호를 기다리지 않고 먼저 부르는 학생에게 "마지막 박에 숨을 쉬고 같이 들어와요"라고 짚는다. 생일 노래는 3박 노래이므로 셋씩 센다.',
            task: '노래를 함께 시작하는 신호 손뼉을 듣고 블록으로 놓아요. 신호에 맞춰 반이 함께 노래를 부른 뒤 점검해요.',
            levels: rhy(4, 1),
            items: [
              { prompt: '교가처럼 4박 노래를 함께 시작하는 신호예요. 넷째 박은 쉬며 숨을 쉬어요. 듣고 블록으로 놓아 보세요.', toolOptions: { pattern: ['q', 'q', 'q', 'qr'] }, target: { rhythm: ['q', 'q', 'q', 'qr'] }, difficulty: 0.1 },
              { prompt: '생일 노래처럼 3박 노래를 시작하는 신호예요. 셋씩 두 번 세고, 마지막 박은 숨을 쉬어요. 듣고 블록으로 놓아 보세요.', toolOptions: { meter: 3, measures: 2, pattern: ['q', 'q', 'q', 'q', 'q', 'qr'] }, target: { rhythm: ['q', 'q', 'q', 'q', 'q', 'qr'] }, difficulty: 0.2,
                predict: { q: '3박 노래를 넷까지 세고 시작하면 어떻게 될까요?', options: ['첫 박이 어긋나요', '아무 일도 없어요'], answer: 0 },
                conclude: '노래가 몇 박인지에 맞춰 신호를 세야 모두 같은 첫 박에서 함께 시작할 수 있어요.' },
              { prompt: '신호에 맞춰 반이 함께 노래를 불러 본 뒤, 내가 해낸 것을 점검 목록에 표시해요.', target: { selfCheck: ['신호를 끝까지 기다렸다가 함께 시작했어요', '박에 맞춰 끝까지 불렀어요', '내 기록장에 오늘 함께한 장면을 ○로 더했어요'] }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"그래프를 보니 우리 둘레의 음악에서 무엇을 알게 되었나요?" 함께한 장면이 학교에서 많고 동네에서 적다는 말이 나오면 "동네에서는 어떤 함께하는 음악을 해 볼 수 있을까요?"로 다음 차시와 잇는다. 출구 1번에서 눈금을 잘못 읽은 학생은 한 칸이 몇인지 다시 센다.',
        exitTicket: [
          { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '요일별 함께한 장면', data: [['월', 2], ['화', 6], ['수', 3]], unit: '번', xLabel: '요일', choices: ['월', '화', '수'] }, prompt: '함께한 장면이 가장 많은 요일을 골라 보세요.', target: { pick: 1 }, difficulty: 0.15 },
          { type: 'choice', prompt: '기록장에 무엇을 적어야 함께 부르거나 연주했는지 알 수 있나요?', options: ['곡 이름만', '들은 장면과 함께했는지', '가수 이름만'], answer: 1, difficulty: 0.2, explain: '장면을 적어야 혼자 들었는지 함께 불렀는지 알 수 있어요.' },
          { type: 'mood', prompt: '내 기록을 그래프로 나타내 보니 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '음악 기록 정리',
      items: [
        { type: 'table', prompt: '내 사흘 기록을 표로 정리하세요.', columns: ['날', '들은 음악 수', '함께한 장면 수'], cells: [['첫째 날', '', ''], ['둘째 날', '', ''], ['셋째 날', '', ''], ['합계', '', '']] },
        { type: 'table', prompt: '표를 보고, 장소마다 곡 수만큼 칸에 ■ 를 그려 막대그래프를 완성하세요. (집 6곡, 학교 4곡, 동네 2곡 · 첫 줄은 해 놓았어요)', columns: ['장소', '1', '2', '3', '4', '5', '6'], cells: [['집', '■', '■', '■', '■', '■', '■'], ['학교', '', '', '', '', '', ''], ['동네', '', '', '', '', '', '']], answer: '학교 4칸, 동네 2칸' },
        { type: 'choice', prompt: '기록장을 잘 쓴 줄에 ○ 하세요.', options: ['아리랑', '학교 · 음악 시간 · 아리랑을 반 모두 불렀어요 · ○', '노래'], answer: '학교 · 음악 시간 · 아리랑을 반 모두 불렀어요 · ○' },
        { type: 'short', prompt: '내 그래프를 보고 알게 된 점을 한 문장으로 쓰세요.' },
      ],
      easy: {
        note: '막대그래프는 눈금 한 칸이 몇인지 먼저 봐요.',
        items: [
          { type: 'table', prompt: '들은 음악 수를 쓰세요.', columns: ['첫째 날', '둘째 날', '셋째 날'], cells: [['', '', '']] },
          { type: 'table', prompt: '막대(■)가 가장 긴 곳의 마지막 칸에 ○ 하세요.', columns: ['장소', '1', '2', '3', '4', '5', '○'], cells: [['집', '■', '■', '■', '■', '■', ''], ['학교', '■', '■', '■', '', '', '']], answer: '집' },
          { type: 'choice', prompt: '기록장에 꼭 적을 것은?', options: ['들은 장면', '가수 이름'], answer: '들은 장면' },
          { type: 'short', prompt: '가장 많이 들은 곳을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '막대 끝에 지금 값이 보이고, 리듬 블록 아래에 마디마다 박 수가 보여요.',
      base: '눈금을 스스로 읽으며 막대를 그리고, 신호 손뼉의 박 수를 스스로 세어요.',
      challenge: '막대 값이 확인한 뒤에야 보이고, 틀린 막대를 알려 주지 않아요. 리듬 블록에 8분쉼표·2분쉼표가 더 나와요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 기록장에 곡 이름만 적어 함께했는지 알 수 없다 → 장면을 덧붙이게 한다. ○가 없는 줄까지 세는 학생은 손가락으로 ○만 짚게 한다. ② 막대를 눈금보다 한 칸 높게 그린다 → 0에서부터 칸을 센다. ③ 함께 부를 때 신호보다 먼저 들어간다 → 마지막 신호 박에 다 같이 숨을 쉬게 한다. 3박 노래(생일 노래)와 4박 노래(교가)의 신호를 나누어 세어 본다. 기록 수가 적은 학생이 위축되면 수보다 찾아낸 장면을 칭찬한다. 노래는 가사를 화면에 띄우지 않고 학생들이 아는 대로 부른다. 그래프 자료는 모둠 기록을 더한 예시이므로, 학급 실제 기록으로 바꾸어 써도 된다.',
  }));

  // ───────────────────────── 15차시 (확장) ─────────────────────────
  lessons.push(Object.assign(head(15, S4), {
    title: '생활 속 알림 가락 따라 치고 쓰임 알아보기',
    objective: '생활 속에서 들리는 짧은 알림 가락을 듣고 따라 치며, 음악이 알림·축하·응원·편안함처럼 여러 쓰임으로 생활에 쓰인다는 것을 장면과 이어 말할 수 있다.',
    illustration: {
      prompt: ILL('a paper doorbell, a school bell and a birthday cake each sending out little ribbons of musical notes'),
      scene: { viewBox: [480, 270], layers: [
        { motif: 'cloud', x: 100, y: 52 }, { motif: 'sun', x: 410, y: 56, s: 0.7 }, { motif: 'hills', y: 212 },
        { motif: 'house', x: 110, y: 214 }, { motif: 'star', x: 260, y: 100, s: 0.6 }, { motif: 'flower', x: 380, y: 224 },
        { motif: 'text', x: 240, y: 150, text: '음악은 어디에 쓰일까요?', size: 22 },
      ] },
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"딩동— 이 소리를 들으면 무엇이 떠오르나요?" 교사가 건반으로 짧은 알림 가락을 쳐 준다. "말이 없는데도 우리는 무엇을 해야 할지 알아요. 음악이 알려 준 거예요." 알림 말고도 축하·응원·편안하게 하기처럼 음악이 생활에서 하는 일을 몇 가지 말해 보게 한다.',
        student: '선생님이 치는 짧은 가락을 듣고, 무엇을 알려 주는 소리 같은지 말해 봅시다.',
        demo: { tool: 'keyboard', options: { from: '도', to: '높은도' }, sequence: [{ notes: ['솔', '미'] }, { notes: ['솔', '미', '솔', '미'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 알림 가락 따라 치고 지어 보기', minutes: 14, tool: 'keyboard',
            teacher: '"알림 가락은 짧고 또렷해야 해요. 왜 그럴까요?" 바쁠 때도 금방 알아채야 하기 때문이라는 대답을 기다린다. 가락 듣기 뒤 손 높이로 먼저 나타내고 친다. 가락을 지을 때 너무 길게 짓는 학생에게 "세 걸음 걸을 동안 끝나야 알림 가락이에요"라고 말한다.',
            task: '알림 가락을 듣고 건반으로 따라 쳐요. 마지막에는 우리 반 알림 가락을 규칙에 맞게 지어요.',
            levels: mel(),
            items: [
              { prompt: '수업 시작을 알리는 가락이라고 생각하고 들어 보세요. 듣고 따라 쳐 보세요.', toolOptions: { melody: ['미', '솔', '높은도', '솔'] }, target: { notes: ['미', '솔', '높은도', '솔'] }, difficulty: 0.2 },
              { prompt: '요리가 다 되었다고 알리는 짧은 가락이에요. 듣고 따라 쳐 보세요.', toolOptions: { melody: ['높은도', '솔', '높은도'] }, target: { notes: ['높은도', '솔', '높은도'] }, difficulty: 0.2,
                predict: { q: '알림 가락은 왜 짧을까요?', options: ['금방 알아채려고', '외우기 어려우라고', '아무 까닭 없이'], answer: 0 },
                conclude: '알림 가락은 짧고 또렷해서 바쁠 때도 금방 알아챌 수 있어요.' },
              { prompt: '우리 반 쉬는 시간 끝 알림 가락을 지어요. 네 음으로, 솔로 시작해 도로 끝나게.', target: { compose: { length: 4, startOn: '솔', endOn: '도' }, selfCheck: ['짧고 또렷하게 들려요', '짝이 듣고 무엇을 알리는지 알아챘어요'] }, difficulty: 0.25 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 장면과 음악의 쓰임 잇기', minutes: 13, tool: 'mindmap',
            teacher: '"이 장면에서 음악은 어떤 일을 하나요? 알려 주나요, 축하하나요, 힘을 주나요?" 장면을 읽고 자기 경험을 하나씩 말하게 한 뒤 잇게 한다. 한 장면에 쓰임이 여럿이라고 하는 학생에게는 가장 큰 쓰임 하나를 고르게 한다.',
            task: '장면 카드를 읽고, 그 장면에서 음악이 하는 일(쓰임)을 이어요.',
            levels: cardsLv(),
            items: [
              { prompt: '장면과 음악의 쓰임을 이어 보세요.', toolOptions: { mode: 'match', topic: '음악의 쓰임', slots: [{ id: 'u1', label: '친구 생일에 노래를 불러요' }, { id: 'u2', label: '운동회에서 응원가를 불러요' }, { id: 'u3', label: '동생에게 자장가를 불러 줘요' }], cards: ['축하해요', '힘을 북돋워요', '편안하게 재워요'] }, target: { match: { u1: '축하해요', u2: '힘을 북돋워요', u3: '편안하게 재워요' } }, difficulty: 0.1,
                hints: ['그 노래를 들은 사람이 어떤 마음이 되거나 무엇을 하게 되는지 떠올려 이어요.'] },
              { prompt: '장면과 음악의 쓰임을 이어 보세요. 쓰임이 하나 남아요.', toolOptions: { mode: 'match', topic: '음악의 쓰임', slots: [{ id: 'v1', label: '쉬는 시간 끝 알림 가락' }, { id: 'v2', label: '추석 밤 강강술래' }, { id: 'v3', label: '졸업식에 함께 부르는 노래' }], cards: ['알려 줘요', '명절을 함께 즐겨요', '헤어짐을 기념해요', '물건을 팔아요'] }, target: { match: { v1: '알려 줘요', v2: '명절을 함께 즐겨요', v3: '헤어짐을 기념해요' } }, difficulty: 0.25,
                hints: ['장면마다 언제, 왜 그 음악이 들리는지 떠올려 이어요. 음악이 하는 일이 아닌 카드는 남겨요.'] },
              { prompt: '음악이 들리는 장면을 알림과 축하·응원으로 나누어 보세요.', toolOptions: { mode: 'sort', topic: '음악의 쓰임', slots: ['알림', '축하·응원'], cards: ['초인종 가락', '세탁기가 다 됐다는 가락', '생일 노래', '운동회 응원가'] }, target: { sort: { 알림: ['초인종 가락', '세탁기가 다 됐다는 가락'], '축하·응원': ['생일 노래', '운동회 응원가'] } }, reveal: 'after-check', difficulty: 0.2 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"오늘 지은 알림 가락을 하나 골라 내일 쉬는 시간 끝에 쳐 볼까요?" 두세 명의 가락을 듣고 학급이 하나를 고른다. 생활 속 음악이 하는 일을 하나씩 말하며 마친다. 출구 1번을 틀린 학생은 가락 듣기를 다시 누르고 손 높이로 따라가게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'keyboard', options: { from: '도', to: '높은도', melody: ['솔', '솔', '미', '도'] }, prompt: '알림 가락을 듣고 건반으로 따라 쳐 보세요.', target: { notes: ['솔', '솔', '미', '도'] }, difficulty: 0.25 },
          { type: 'choice', prompt: '운동회 응원가는 어떤 쓰임으로 부르나요?', options: ['무엇을 알려 주려고', '힘을 북돋우려고', '잠을 재우려고'], answer: 1, difficulty: 0.1, explain: '응원가는 함께 부르며 힘을 북돋워요.' },
          { type: 'mood', prompt: '내가 지은 알림 가락이 마음에 드나요?' },
        ],
      },
    ],
    worksheet: {
      title: '생활 속 음악의 쓰임',
      items: [
        { type: 'table', prompt: '생활 속 음악 장면과 그 쓰임을 쓰세요.', columns: ['장면', '음악이 하는 일(쓰임)'], cells: [['생일 노래', ''], ['초인종 가락', ''], ['자장가', ''], ['', '']] },
        { type: 'figure', prompt: '우리 반 알림 가락을 계이름으로 건반 아래에 쓰세요.', tool: 'keyboard', options: { from: '도', to: '높은도', printBoxes: 4 }, figures: [{ caption: '첫 음 솔, 끝 음 도' }], answer: '예: 솔 미 레 도' },
        { type: 'choice', prompt: '알림 가락이 짧은 까닭에 ○ 하세요.', options: ['금방 알아채려고', '오래 들으려고', '노래하기 어려우라고'], answer: '금방 알아채려고' },
        { type: 'short', prompt: '우리 집에서 들리는 알림 가락 하나를 찾아 무엇을 알려 주는지 쓰세요.' },
      ],
      easy: {
        note: '음악이 하는 일: 알려 줘요, 축하해요, 힘을 줘요, 편안하게 해요.',
        items: [
          { type: 'choice', prompt: '생일 노래는 어떤 쓰임인가요?', options: ['축하해요', '알려 줘요'], answer: '축하해요' },
          { type: 'choice', prompt: '초인종 가락은 어떤 쓰임인가요?', options: ['알려 줘요', '재워 줘요'], answer: '알려 줘요' },
          { type: 'short', prompt: '내가 지은 알림 가락의 계이름을 쓰세요.' },
          { type: 'draw', prompt: '알림 가락이 들리는 장면을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '가락을 듣는 동안 건반이 빛나고, 맞게 이은 카드에 초록 테두리가 보여요.',
      base: '계이름을 켜고 끌 수 있고, 카드를 스스로 확인해요.',
      challenge: '계이름 없이 검은건반까지 있는 건반에서 귀로 찾고, 카드 순서가 섞여 나와요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 알림 가락을 길게 지어 알림이 되지 않는다 → 네 음 안쪽으로. ② 음악의 쓰임을 \'좋아서\'로만 말한다 → 그 장면에서 사람들이 무엇을 하게 되는지 묻는다. ③ 생활 속 소리(초인종)를 음악이 아니라고 한다 → 높낮이가 있는 가락이면 음악이라고 짚는다. 실제 기기의 알림음을 녹음해 오지 않고 교사가 건반으로 비슷하게 지어 쳐 준다.',
  }));

  // ───────────────────────── 16차시 (확장) ─────────────────────────
  lessons.push(Object.assign(head(16, S4), {
    title: '명절과 행사 속 함께하는 음악 찾고 응원 박수 치기',
    objective: '명절·학교 행사·마을 축제에서 사람들이 함께 부르거나 연주하는 음악을 행사와 잇고, 행사에 어울리는 응원 박수 리듬을 함께 칠 수 있다.',
    illustration: {
      prompt: ILL('a lively village festival with paper lanterns, children clapping and a pungmul drum group parading under a full moon'),
      scene: { viewBox: [480, 270], layers: [
        { motif: 'moon', x: 400, y: 58, s: 0.8 }, { motif: 'star', x: 120, y: 48, s: 0.5 }, { motif: 'mountain', x: 110, y: 206 },
        { motif: 'hills', y: 214 }, { motif: 'house', x: 240, y: 216 }, { motif: 'tree', x: 420, y: 216 },
        { motif: 'text', x: 240, y: 130, text: '함께하면 더 신나요', size: 23 },
      ] },
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"추석, 정월 대보름, 운동회, 학예회 — 이런 날에는 어떤 음악이 들리나요?" 경험을 듣고 칠판에 행사 이름과 음악을 짝지어 적는다. "이 음악들은 구경만 하나요, 함께하나요?" 행사 음악은 여럿이 함께 부르고 치는 일이 많다는 것을 짚는다. 시연 단추로 교사가 응원 박수 리듬을 보여 주고 따라 치게 한다.',
        student: '명절이나 학교 행사에서 다 같이 노래하거나 손뼉 친 일을 떠올려 봅시다.',
        demo: { tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 2 }, sequence: [{ rhythm: ['q', 'q', 'e', 'e', 'q'] }, { rhythm: ['q', 'q', 'e', 'e', 'q', 'q', 'q', 'h'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 행사와 함께하는 음악 잇기', minutes: 12, tool: 'mindmap',
            teacher: '"정월 대보름에는 풍물패가 집집을 돌며 땅의 신을 달래는 지신밟기를 했어요. 추석 밤에는 손을 잡고 둥글게 돌며 강강술래를 했지요." 우리 전통 행사 음악을 짧게 소개한 뒤 잇게 한다. 학교 행사 음악은 자기 경험으로 말하게 하고, 무대 공연만 떠올리는 학생에게 응원가처럼 모두가 부르는 음악을 떠올리게 한다.',
            task: '행사 이름을 읽고, 그때 사람들이 함께 부르거나 연주하는 음악 카드를 이어요.',
            levels: cardsLv(),
            items: [
              { prompt: '명절과 날에 사람들이 함께하는 음악을 이어 보세요.', toolOptions: { mode: 'match', topic: '함께하는 음악', slots: [{ id: 'e1', label: '추석 밤' }, { id: 'e2', label: '정월 대보름' }, { id: 'e3', label: '생일' }], cards: ['손잡고 도는 강강술래', '풍물패의 지신밟기', '다 같이 부르는 생일 노래'] }, target: { match: { e1: '손잡고 도는 강강술래', e2: '풍물패의 지신밟기', e3: '다 같이 부르는 생일 노래' } }, difficulty: 0.2,
                hints: ['선생님이 소개한 명절 이야기를 떠올려요. 그날 밤이나 그날 사람들이 모여서 무엇을 하는지 생각하며 이어요.'] },
              { prompt: '학교 행사와 함께하는 음악을 이어 보세요.', toolOptions: { mode: 'match', topic: '함께하는 음악', slots: [{ id: 's1', label: '운동회' }, { id: 's2', label: '학예회' }, { id: 's3', label: '졸업식' }], cards: ['반 응원가와 응원 박수', '모둠 합주와 합창', '함께 부르는 졸업 노래'] }, target: { match: { s1: '반 응원가와 응원 박수', s2: '모둠 합주와 합창', s3: '함께 부르는 졸업 노래' } }, difficulty: 0.15,
                hints: ['학교 행사마다 모인 사람들이 무엇을 하려고 모였는지 떠올리고, 그 일에 어울리는 함께하는 음악을 이어요.'] },
              { prompt: '함께하는 음악을 명절 음악과 학교 행사 음악으로 나누어 보세요.', toolOptions: { mode: 'sort', topic: '함께하는 음악', slots: ['명절', '학교 행사'], cards: ['강강술래', '지신밟기', '운동회 응원가', '학예회 합주'] }, target: { sort: { 명절: ['강강술래', '지신밟기'], '학교 행사': ['운동회 응원가', '학예회 합주'] } }, difficulty: 0.2,
                levels: { challenge: { toolOptions: { slots: ['명절', '학교 행사'], cards: ['강강술래', '지신밟기', '운동회 응원가', '학예회 합주', '혼자 듣는 라디오'] }, prompt: '함께하는 음악만 명절과 학교 행사로 나누어요. 혼자 듣는 음악은 남겨요.', target: { sort: { 명절: ['강강술래', '지신밟기'], '학교 행사': ['운동회 응원가', '학예회 합주'] } } } } },
            ],
          },
          {
            id: 'a2', title: '활동 2. 행사 응원 박수 리듬 치고 짓기', minutes: 14, tool: 'keyboard',
            teacher: '"응원 박수는 모두가 같은 리듬으로 쳐야 힘이 나요. 먼저 선생님을 따라 쳐 볼까요?" 손뼉으로 익힌 뒤 블록으로 놓는다. 8분음표 둘을 한 박에 넣지 못하고 느리게 치는 학생에게 "짝짝이 한 박이에요"라고 말한다. 다 지은 응원 박수는 반 모두가 함께 쳐 본다.',
            task: '응원 박수 리듬을 듣고 손뼉으로 따라 친 뒤 블록으로 놓아요. 마지막에는 우리 반 응원 박수를 지어요.',
            levels: rhy(4, 2),
            items: [
              { prompt: '운동회 응원 박수 리듬을 듣고 블록으로 놓아 보세요.', toolOptions: { pattern: ['q', 'q', 'e', 'e', 'q', 'q', 'q', 'h'] }, target: { rhythm: ['q', 'q', 'e', 'e', 'q', 'q', 'q', 'h'] }, difficulty: 0.2 },
              { prompt: '쉼표에서 “영차!”를 외치는 응원 박수예요. 듣고 블록으로 놓아 보세요.', toolOptions: { pattern: ['e', 'e', 'e', 'e', 'q', 'qr', 'e', 'e', 'q', 'h'] }, target: { rhythm: ['e', 'e', 'e', 'e', 'q', 'qr', 'e', 'e', 'q', 'h'] }, reveal: 'after-check', difficulty: 0.35 },
              { prompt: '한 마디 2박, 네 마디 응원 박수를 지어요. 8분음표와 2분음표를 꼭 넣어요.', toolOptions: { meter: 2, measures: 4 }, target: { beats: true, use: ['e', 'h'], selfCheck: ['반 친구들과 함께 쳐 보았어요', '모두 같은 리듬으로 맞춰 쳤어요'] }, difficulty: 0.3,
                conclude: '여럿이 같은 리듬으로 함께 치면 응원 박수 소리가 하나로 모여 힘이 나요.' },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"우리 반이 행사에서 함께할 수 있는 음악은 무엇일까요?" 다음 시간부터 학급 행사(작은 음악회)를 준비한다고 알리고, 해 보고 싶은 곡이나 활동을 생각해 오게 한다. 출구 1번을 틀린 학생과는 8분음표 두 개를 \'짝짝\'으로 말하며 다시 쳐 본다.',
        exitTicket: [
          { type: 'tool', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 1, blocks: ['q', 'e', 'h', 'qr'] }, prompt: '응원 박수 리듬을 듣고 블록으로 놓아 보세요.', target: { rhythm: ['e', 'e', 'q', 'h'] }, difficulty: 0.2 },
          { type: 'choice', prompt: '추석 밤에 손을 잡고 둥글게 돌며 함께 노래하는 놀이는 무엇인가요?', options: ['강강술래', '지신밟기', '대문놀이'], answer: 0, difficulty: 0.15, explain: '강강술래는 추석 밤에 손을 잡고 둥글게 돌며 노래하는 놀이예요.' },
          { type: 'mood', prompt: '반 친구들과 응원 박수를 함께 쳐 보니 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '행사 속 함께하는 음악',
      items: [
        { type: 'table', prompt: '행사와 그때 함께하는 음악을 쓰세요.', columns: ['행사', '함께하는 음악', '내가 해 본 적 있나요?'], cells: [['추석', '', ''], ['운동회', '', ''], ['생일', '', ''], ['', '', '']] },
        { type: 'figure', prompt: '응원 박수 리듬을 손뼉으로 쳐 보고, 마디마다 박 수를 쓰세요.', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 2 }, figures: [{ state: { rhythm: ['q', 'q', 'e', 'e', 'q', 'q', 'qr', 'h'] }, caption: '첫째 마디 ___박, 둘째 마디 ___박' }], answer: '4박, 4박' },
        { type: 'choice', prompt: '정월 대보름에 풍물패가 집집을 돌며 하는 놀이에 ○ 하세요.', options: ['강강술래', '지신밟기', '대문놀이'], answer: '지신밟기' },
        { type: 'short', prompt: '우리 반 행사에서 다 함께 해 보고 싶은 음악 활동을 쓰세요.' },
      ],
      easy: {
        note: '8분음표 두 개 = 한 박(짝짝), 4분음표 = 한 박(짝), 2분음표 = 두 박(짜—악).',
        items: [
          { type: 'choice', prompt: '운동회에서 함께하는 음악에 ○ 하세요.', options: ['응원가', '자장가'], answer: '응원가' },
          { type: 'choice', prompt: '추석 밤에 하는 놀이에 ○ 하세요.', options: ['강강술래', '대문놀이'], answer: '강강술래' },
          { type: 'blank', prompt: '빈칸을 채우세요.', text: '8분음표 두 개는 ___ 박이에요.', answer: '한' },
          { type: 'draw', prompt: '행사에서 함께 노래하는 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞게 이은 카드에 초록 테두리가 보이고, 리듬 블록 아래에 마디마다 박 수가 보여요.',
      base: '카드와 리듬을 스스로 확인해요.',
      challenge: '나누기에 혼자 듣는 함정 카드가 더 있고, 리듬 블록에 8분쉼표·2분쉼표가 더 나와요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 행사 음악을 구경하는 것으로만 여긴다 → 응원 박수처럼 모두가 참여하는 음악을 먼저 해 본다. ② 지신밟기와 강강술래를 헷갈린다 → 정월 대보름 = 풍물·지신밟기, 추석 = 강강술래. ③ 8분음표 둘을 두 박으로 친다 → "짝짝"이 한 박. 지역마다 행사 음악이 다르므로 학생의 동네 행사 경험을 함께 듣는다.',
  }));

  // ───────────────────────── 17차시 (핵심) ─────────────────────────
  lessons.push(Object.assign(head(17, S4), {
    title: '작은 음악회에 어울리는 곡과 내 참여 방법 고르기',
    objective: '학급 행사의 성격에 어울리는 곡의 느낌을 고르고, 노래·리듬 악기·몸짓·진행 가운데 내가 참여할 방법을 정할 수 있다.',
    illustration: {
      prompt: ILL('a classroom turned into a tiny concert hall with paper bunting, a small stage and children holding tambourines, ribbons and song sheets'),
      scene: { viewBox: [480, 270], layers: [
        { motif: 'star', x: 90, y: 50, s: 0.5 }, { motif: 'star', x: 390, y: 46, s: 0.5 }, { motif: 'cloud', x: 240, y: 52 },
        { motif: 'hills', y: 214 }, { motif: 'flower', x: 80, y: 224 }, { motif: 'flower', x: 400, y: 224 },
        { motif: 'text', x: 240, y: 140, text: '우리 반 작은 음악회', size: 25 },
      ] },
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 6,
        teacher: '"우리 반 작은 음악회를 열어요. 누가 나가야 할까요?" 대답을 기다린다. \'노래 잘하는 사람\'이라는 대답이 나오면 "노래를 잘 못해도 함께할 방법은 없을까요?"라고 되묻고, 노래·리듬 악기·몸짓·진행처럼 몫이 여럿이라는 것을 칠판에 적는다. 시연 단추로 행사와 어울리는 곡의 느낌을 잇는 모습을 보여 준다.',
        student: '우리 반 작은 음악회에서 나는 어떤 몫을 맡고 싶은지 생각해 봅시다.',
        demo: { tool: 'mindmap', options: { mode: 'match', topic: '행사와 곡', slots: [{ id: 'd1', label: '친구 생일 축하' }], cards: ['밝고 신나는 곡', '느리고 슬픈 곡'], shuffle: false }, sequence: [{ match: { d1: '밝고 신나는 곡' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 26,
        activities: [
          {
            id: 'a1', title: '활동 1. 행사에 어울리는 곡의 느낌 고르기', minutes: 12, tool: 'mindmap',
            teacher: '"이 행사에 모인 사람들은 어떤 마음일까요? 그 마음에 맞는 곡은 빠르기와 셈여림이 어떨까요?" 행사의 마음을 먼저 말하게 한 뒤 곡의 느낌을 고르게 한다. \'신나는 곡이 늘 좋다\'고 하는 학생에게 마무리 인사 자리를 떠올리게 한다.',
            task: '행사를 읽고 모인 사람들의 마음을 떠올린 뒤, 어울리는 곡의 느낌을 잇거나 나누어요.',
            levels: cardsLv(),
            items: [
              { prompt: '학급 행사와 어울리는 곡의 느낌을 이어 보세요.', toolOptions: { mode: 'match', topic: '행사와 곡', slots: [{ id: 'm1', label: '친구 생일 축하' }, { id: 'm2', label: '아픈 친구 응원 영상' }, { id: 'm3', label: '학기 마무리 인사' }], cards: ['밝고 신나는 곡', '따뜻하게 힘을 주는 곡', '차분하고 정다운 곡'] }, target: { match: { m1: '밝고 신나는 곡', m2: '따뜻하게 힘을 주는 곡', m3: '차분하고 정다운 곡' } }, difficulty: 0.15,
                hints: ['행사에 모인 사람들의 마음을 먼저 한 낱말로 말해 보고, 그 마음과 닮은 빠르기·셈여림의 곡을 이어요.'] },
              { prompt: '곡의 특징을 신나는 행사와 차분한 행사에 어울리는 것으로 나누어 보세요.', toolOptions: { mode: 'sort', topic: '곡 고르기', slots: ['신나는 행사', '차분한 행사'], cards: ['빠르고 힘찬 곡', '통통 튀는 리듬의 곡', '느리고 부드러운 곡', '여리게 흐르는 곡'] }, target: { sort: { '신나는 행사': ['빠르고 힘찬 곡', '통통 튀는 리듬의 곡'], '차분한 행사': ['느리고 부드러운 곡', '여리게 흐르는 곡'] } }, difficulty: 0.2 },
              { prompt: '‘봄맞이 작은 음악회’에 알맞은 곡의 조건만 골라 보세요.', toolOptions: { mode: 'pick', topic: '봄맞이 작은 음악회', basket: '알맞은 조건', cards: ['우리 반 모두 부를 수 있어요', '3분 안쪽으로 짧아요', '어른만 부를 수 있어요', '외국어로만 불러요'] }, target: { pick: ['우리 반 모두 부를 수 있어요', '3분 안쪽으로 짧아요'] }, difficulty: 0.25,
                predict: { q: '학급 음악회 곡은 무엇을 먼저 따져야 할까요?', options: ['모두 함께할 수 있는지', '가장 어려운 곡인지'], answer: 0 },
                conclude: '학급 행사의 곡은 모두가 함께할 수 있고 행사 시간에 맞게 짧은 것이 좋아요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 모두가 참여하는 방법 고르기', minutes: 14, tool: 'emotion',
            teacher: '"음악회는 잘하는 몇 사람만의 무대가 아니에요. 모두가 맡을 몫이 있어요." 상황마다 고른 뒤, 고른 까닭을 말하게 한다. \'잘하는 사람만 나가요\'를 고른 학생에게 "그러면 나머지 친구들은 음악회에서 무엇을 하나요?"를 묻는다.',
            task: '음악회를 준비하며 생긴 상황을 읽고, 모두가 함께 참여할 수 있는 방법을 골라요.',
            levels: { easy: {}, base: {}, challenge: { revealAfterCheck: true } },
            items: [
              { prompt: '노래를 잘 못한다며 친구가 음악회에 안 나가겠대요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '민지가 “나는 노래를 잘 못하니까 음악회에 안 나갈래.”라고 말해요.', choices: [{ id: 'part', text: '리듬 악기나 몸짓으로 함께하자고 해요', result: '민지가 탬버린을 맡아 함께 무대에 서요.', mood: '기쁨' }, { id: 'best', text: '잘하는 사람만 나가는 게 맞아요', result: '민지는 음악회 내내 구경만 해요.', mood: '속상함' }] }, target: { choice: 'part' }, difficulty: 0.1 },
              { prompt: '악기를 다뤄 본 적이 없어 걱정돼요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '준호는 악기를 다뤄 본 적이 없어 음악회가 걱정돼요.', choices: [{ id: 'giveup', text: '아무것도 맡지 않아요', result: '준호는 음악회를 함께 즐기지 못해요.', mood: '걱정' }, { id: 'easy', text: '쉬운 리듬 하나를 맡아 연습해요', result: '준호가 캐스터네츠로 박을 맞춰 연주해요.', mood: '뿌듯함' }, { id: 'copy', text: '친구 악기를 몰래 가져가요', result: '친구가 속상해하고 다툼이 생겨요.', mood: '화남' }] }, target: { choice: 'easy' }, difficulty: 0.2 },
              { prompt: '한 친구가 노래도 악기도 혼자 다 하겠대요. 어떻게 할까요?', toolOptions: { mode: 'branch', situation: '노래를 잘하는 친구가 “다 내가 할게.”라며 모든 몫을 맡겠대요.', choices: [{ id: 'share', text: '몫을 나누어 모두가 하나씩 맡아요', result: '모두가 무대에서 자기 몫을 해요.', mood: '뿌듯함' }, { id: 'let', text: '잘하니까 혼자 다 하게 해요', result: '다른 친구들은 할 일이 없어 심심해해요.', mood: '서운함' }] }, target: { choice: 'share' }, difficulty: 0.15,
                conclude: '학급 행사는 잘하는 사람이 아니라 모두가 자기 몫으로 함께할 때 더 즐거워요.' },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"나는 음악회에서 어떤 몫을 맡고 싶나요? 노래, 리듬 악기, 몸짓, 진행 가운데 하나를 골라 이름표 붙임 쪽지에 적어 칠판에 붙여 볼까요?" 한 몫에 너무 몰리면 다음 시간에 조정한다고 알린다. 출구 2번을 틀린 학생과는 몫이 넷이라는 것을 다시 짚는다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { mode: 'match', topic: '행사와 곡', slots: [{ id: 'x1', label: '운동회 응원' }, { id: 'x2', label: '졸업하는 형님 배웅' }], cards: ['힘차고 빠른 곡', '정답고 차분한 곡'] }, prompt: '행사와 어울리는 곡의 느낌을 이어 보세요.', target: { match: { x1: '힘차고 빠른 곡', x2: '정답고 차분한 곡' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '노래를 잘 못하는 친구가 음악회에 참여하는 좋은 방법은 무엇인가요?', options: ['구경만 해요', '리듬 악기나 몸짓, 진행을 맡아요', '나가지 않아요'], answer: 1, difficulty: 0.1, explain: '음악회에는 노래 말고도 리듬 악기·몸짓·진행 같은 몫이 있어요.' },
          { type: 'short', prompt: '내가 음악회에서 맡고 싶은 몫과 그 까닭을 쓰세요.' },
        ],
      },
    ],
    worksheet: {
      title: '작은 음악회 준비 ①',
      items: [
        { type: 'table', prompt: '행사에 어울리는 곡의 느낌을 쓰세요.', columns: ['행사', '모인 사람들의 마음', '어울리는 곡의 느낌'], cells: [['친구 생일 축하', '', ''], ['학기 마무리 인사', '', '']] },
        { type: 'choice', prompt: '학급 음악회 곡으로 알맞은 것에 ○ 하세요.', options: ['10분이 넘는 긴 곡', '우리 반 모두 부를 수 있는 짧은 곡', '어른만 부를 수 있는 곡'], answer: '우리 반 모두 부를 수 있는 짧은 곡' },
        { type: 'table', prompt: '음악회의 몫마다 하는 일을 쓰고, 내가 맡을 몫에 ○ 하세요.', columns: ['몫', '하는 일', '나'], cells: [['노래', '', ''], ['리듬 악기', '', ''], ['몸짓', '', ''], ['진행', '', '']] },
        { type: 'short', prompt: '잘하는 사람만 음악회에 나가야 한다는 말에 대한 내 생각을 쓰세요.' },
      ],
      easy: {
        note: '음악회의 몫: 노래, 리듬 악기, 몸짓, 진행. 모두 하나씩 맡을 수 있어요.',
        items: [
          { type: 'choice', prompt: '친구 생일에 어울리는 곡에 ○ 하세요.', options: ['밝고 신나는 곡', '느리고 슬픈 곡'], answer: '밝고 신나는 곡' },
          { type: 'choice', prompt: '음악회에는 누가 나갈까요?', options: ['우리 반 모두', '노래 잘하는 사람만'], answer: '우리 반 모두' },
          { type: 'short', prompt: '내가 맡고 싶은 몫을 쓰세요.' },
          { type: 'draw', prompt: '음악회에서 내 몫을 하는 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞게 이은 카드에 초록 테두리가 보이고, 상황마다 결과가 바로 보여요.',
      base: '카드를 스스로 확인하고, 상황의 결과를 읽고 까닭을 말해요.',
      challenge: '카드 순서가 섞이고, 상황의 결과는 맞게 고른 뒤에만 보여요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 잘하는 사람만 나가야 한다고 여긴다 → 몫이 넷이라는 것을 보이고 모두가 하나씩 맡는다. ② 행사와 상관없이 좋아하는 곡만 고른다 → 모인 사람들의 마음을 먼저 말하게 한다. ③ 몫이 한쪽으로 몰린다 → 몫마다 인원을 정하고 다음 시간에 나눈다. 곡은 저작권이 끝난 전래 동요나 학급이 지은 노래(19차시 \'우리 반 노래\')로 고른다.',
  }));

  // ───────────────────────── 18차시 (연습) ─────────────────────────
  lessons.push(Object.assign(head(18, S4), {
    title: '음악회 차례·자리·준비물 계획 세우기',
    objective: '작은 음악회의 프로그램 차례와 준비 차례를 정하고, 맡은 몫에 맞게 자리와 준비물을 나누어 준비 계획을 세울 수 있다.',
    illustration: {
      prompt: ILL('children planning a class concert around a paper board with a program list, instrument icons and a seating chart'),
      scene: { viewBox: [480, 270], layers: [
        { motif: 'sun', x: 404, y: 58, s: 0.7 }, { motif: 'cloud', x: 110, y: 52 }, { motif: 'hills', y: 214 },
        { motif: 'house', x: 100, y: 214 }, { motif: 'leaf', x: 380, y: 200, s: 0.7 }, { motif: 'star', x: 250, y: 96, s: 0.6 },
        { motif: 'text', x: 240, y: 150, text: '차례 · 자리 · 준비물', size: 24 },
      ] },
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"음악회 날 아무 계획 없이 시작하면 어떤 일이 생길까요?" 누가 먼저 나가는지 몰라 우왕좌왕하는 장면을 떠올리게 한다. "차례, 자리, 준비물 — 세 가지를 오늘 정해요." 지난 시간 붙인 몫 쪽지를 보며 몫마다 인원을 고르게 나눈다.',
        student: '음악회 날을 떠올리며 무엇을 미리 정해야 할지 말해 봅시다.',
        demo: { tool: 'timer', options: { cards: ['연습하기', '곡 고르기', '몫 나누기'] }, sequence: [{ order: ['곡 고르기', '몫 나누기', '연습하기'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 음악회 차례 정하기', minutes: 13, tool: 'timer',
            teacher: '"관객이 처음 무엇을 들으면 좋을까요? 마지막은요?" 프로그램 차례에서 인사와 소개가 먼저, 다 함께하는 곡이 마지막이면 좋다는 생각을 끌어낸다. 준비 차례에서 리허설을 공연 바로 전에 두지 않는 학생에게 "리허설에서 고칠 시간이 있어야 해요"라고 말한다.',
            task: '음악회 프로그램 차례와 준비 차례를 카드로 놓고, 우리 반 계획을 점검해요.',
            levels: { easy: { title: '작은 음악회 계획' }, base: { title: '작은 음악회 계획' }, challenge: { title: '작은 음악회 계획' } },
            items: [
              { prompt: '작은 음악회 프로그램 차례를 놓아요. 다 함께하는 곡은 마지막이에요.', toolOptions: { cards: ['모둠 합주', '다 함께 응원 박수와 합창', '인사와 소개'] }, target: { order: ['인사와 소개', '모둠 합주', '다 함께 응원 박수와 합창'] }, difficulty: 0.15,
                hints: ['관객이 음악회에 들어와 처음 듣는 것과 마지막에 함께하는 것을 먼저 찾고, 남은 카드를 가운데에 놓아요.'] },
              { prompt: '음악회를 준비하는 차례를 놓아요.', toolOptions: { cards: ['리허설하기', '몫 나누기', '곡 고르기', '몫별로 연습하기'] }, target: { order: ['곡 고르기', '몫 나누기', '몫별로 연습하기', '리허설하기'] }, difficulty: 0.2,
                hints: ['어떤 일을 하려면 그 앞에 무엇이 정해져 있어야 하는지 따져 보세요. 정해야 할 것부터 놓고, 맞춰 보는 일은 뒤에 놓아요.'],
                levels: { challenge: { toolOptions: { cards: ['리허설하기', '몫 나누기', '곡 고르기', '몫별로 연습하기', '고칠 점 바로잡기'] }, prompt: '리허설 뒤 고칠 점 바로잡기까지 넣어 준비 차례를 놓아요.', target: { order: ['곡 고르기', '몫 나누기', '몫별로 연습하기', '리허설하기', '고칠 점 바로잡기'] } } } },
              { prompt: '우리 반 계획을 다시 읽고, 정한 것을 점검 목록에 표시해요.', target: { selfCheck: ['모두에게 몫이 하나씩 있어요', '몫마다 연습할 시간을 정했어요', '리허설 날짜를 정했어요'] }, difficulty: 0.1 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 몫마다 자리와 준비물 나누기', minutes: 14, tool: 'mindmap',
            teacher: '"몫마다 필요한 준비물이 달라요. 무엇을 누가 챙길까요?" 준비물을 몫 가지에 나누게 한다. 자리를 정할 때는 "몸짓 맡은 친구는 움직일 공간이 필요하지요?"처럼 까닭을 함께 말하게 한다.',
            task: '준비물 카드를 몫 가지에 나누고, 몫마다 알맞은 자리를 이어요.',
            levels: cardsLv(),
            items: [
              { prompt: '준비물을 노래와 리듬 악기 몫으로 나누어 보세요.', toolOptions: { topic: '음악회 준비물', slots: ['노래', '리듬 악기'], cards: ['가사를 적은 종이', '탬버린', '캐스터네츠', '목을 축일 물'] }, target: { sort: { 노래: ['가사를 적은 종이', '목을 축일 물'], '리듬 악기': ['탬버린', '캐스터네츠'] } }, difficulty: 0.15 },
              { prompt: '준비물을 몸짓과 진행 몫으로 나누어 보세요.', toolOptions: { topic: '음악회 준비물', slots: ['몸짓', '진행'], cards: ['리본 막대', '순서 안내 종이', '인사말 쪽지', '몸짓 차례 그림'] }, target: { sort: { 몸짓: ['리본 막대', '몸짓 차례 그림'], 진행: ['순서 안내 종이', '인사말 쪽지'] } }, difficulty: 0.2 },
              { prompt: '몫마다 알맞은 자리를 이어 보세요.', toolOptions: { mode: 'match', topic: '무대 자리', slots: [{ id: 'z1', label: '몸짓' }, { id: 'z2', label: '리듬 악기' }, { id: 'z3', label: '진행' }], cards: ['움직일 수 있는 앞쪽 빈 곳', '노래하는 줄 옆자리', '무대 옆 관객이 보이는 곳'] }, target: { match: { z1: '움직일 수 있는 앞쪽 빈 곳', z2: '노래하는 줄 옆자리', z3: '무대 옆 관객이 보이는 곳' } }, difficulty: 0.25,
                hints: ['몫마다 무대에서 무엇을 하는지 떠올리고, 그 일을 하는 데 무엇이 필요한지(공간·소리 맞추기·관객 보기) 따져 이어요.'],
                predict: { q: '리듬 악기는 왜 노래하는 줄 옆에 서면 좋을까요?', options: ['노래와 박을 맞추기 쉬워서', '눈에 띄지 않으려고'], answer: 0 },
                conclude: '자리는 몫이 하는 일에 맞게 정해요. 박을 맞춰야 하는 몫끼리는 가까이 서요.' },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"우리 반 계획표를 소리 내어 읽어 볼까요? 차례, 자리, 준비물 가운데 빠진 것이 있나요?" 준비물은 누가 챙길지 이름 대신 몫으로 적는다. 출구 1번을 틀린 학생과는 공연 날 무엇이 먼저 일어나는지 이야기로 말해 보게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'timer', options: { cards: ['노래 몫 연습', '음악회 공연', '리허설'] }, prompt: '준비부터 공연까지 차례대로 카드를 놓아 보세요.', target: { order: ['노래 몫 연습', '리허설', '음악회 공연'] }, difficulty: 0.15 },
          { type: 'choice', prompt: '몸짓을 맡은 사람에게 가장 알맞은 자리는 어디인가요?', options: ['좁은 책상 사이', '움직일 수 있는 앞쪽 빈 곳', '교실 밖'], answer: 1, difficulty: 0.1, explain: '몸짓은 움직일 공간이 있어야 다치지 않고 잘 보여요.' },
          { type: 'mood', prompt: '음악회 계획을 세워 보니 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '작은 음악회 준비 ②',
      items: [
        { type: 'table', prompt: '우리 반 음악회 프로그램 차례를 쓰세요.', columns: ['차례', '무엇을', '맡은 몫'], cells: [['1', '', ''], ['2', '', ''], ['3', '', '']] },
        { type: 'table', prompt: '몫마다 준비물과 자리를 쓰세요.', columns: ['몫', '준비물', '자리'], cells: [['노래', '', ''], ['리듬 악기', '', ''], ['몸짓', '', ''], ['진행', '', '']] },
        { type: 'choice', prompt: '리허설은 언제 하면 좋을까요?', options: ['공연이 끝난 뒤', '몫별 연습을 마치고 공연 전에', '곡을 고르기 전에'], answer: '몫별 연습을 마치고 공연 전에' },
        { type: 'draw', prompt: '무대 자리 그림을 그리고, 몫마다 서는 곳을 표시하세요.' },
      ],
      easy: {
        note: '준비 차례: 곡 고르기 → 몫 나누기 → 연습 → 리허설 → 공연.',
        items: [
          { type: 'choice', prompt: '탬버린은 어느 몫의 준비물인가요?', options: ['리듬 악기', '진행'], answer: '리듬 악기' },
          { type: 'choice', prompt: '음악회 처음에 할 일은?', options: ['인사와 소개', '다 함께 합창'], answer: '인사와 소개' },
          { type: 'short', prompt: '내 몫과 내가 챙길 준비물을 쓰세요.' },
          { type: 'draw', prompt: '내가 무대에서 설 자리를 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞게 놓은 준비물 카드에 초록 테두리가 보이고, 틀린 곳에 놓으면 되돌아와요.',
      base: '카드를 모두 놓은 뒤 스스로 확인해요.',
      challenge: '준비 차례에 \'고칠 점 바로잡기\'가 더해지고, 카드 순서가 섞여 나와요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 리허설 없이 바로 공연하려 한다 → 리허설에서 고칠 시간을 남긴다. ② 한 사람이 준비물을 다 챙긴다 → 몫마다 나누어 챙긴다. ③ 몸짓 자리를 좁게 잡는다 → 팔을 벌려 공간을 재어 본다. 계획표에는 학생 이름 대신 몫을 적어 교실에 붙인다.',
  }));

  // ───────────────────────── 19차시 (확장) ─────────────────────────
  lessons.push(Object.assign(head(19, S4), {
    title: '우리 반 노래에 리듬 몫을 더해 합주 만들기',
    objective: '학급이 함께 부를 짧은 가락을 익히고, 그 가락에 되풀이 리듬을 몫마다 정해 여러 몫이 함께하는 짧은 합주를 만들 수 있다.',
    illustration: {
      prompt: ILL('children in a circle playing tambourines, small drums and castanets together while others sing from a paper songbook'),
      scene: { viewBox: [480, 270], layers: [
        { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 110, y: 54 }, { motif: 'hills', y: 212 },
        { motif: 'tree', x: 70, y: 214 }, { motif: 'flower', x: 390, y: 224 }, { motif: 'bird', x: 250, y: 90 },
        { motif: 'text', x: 240, y: 150, text: '노래 + 리듬 = 합주', size: 24 },
      ] },
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"우리 반 노래를 들어 볼까요? 선생님이 지은 짧은 가락이에요." 시연 단추로 \'우리 반 노래\' 여덟 음을 들려주고 계이름으로 따라 부르게 한다. "이 노래에 탬버린, 작은북, 캐스터네츠가 같은 리듬을 되풀이해 함께하면 어떻게 들릴까요?" 되풀이 리듬이 노래를 받쳐 준다는 것을 짚는다.',
        student: '우리 반 노래를 듣고 계이름으로 따라 불러 봅시다.',
        demo: { tool: 'keyboard', options: { from: '도', to: '높은도' }, sequence: [{ notes: ['솔', '미', '솔', '라'] }, { notes: ['솔', '미', '솔', '라', '솔', '미', '레', '도'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 우리 반 노래 가락 익히기', minutes: 12, tool: 'keyboard',
            teacher: '"앞 네 음은 올라갔다가, 뒤 네 음은 계단처럼 내려와 도에서 끝나요." 손 높이로 가락선을 그리며 부른 뒤 친다. 넷째 음(라)에서 솔로 돌아가는 학생에게 "가장 높은 음이 어디였나요?"를 묻는다.',
            task: '우리 반 노래를 앞·뒤 네 음씩 듣고 따라 친 뒤, 처음부터 끝까지 쳐요.',
            levels: mel(),
            items: [
              { prompt: '우리 반 노래 앞 네 음을 듣고 따라 쳐 보세요.', toolOptions: { melody: ['솔', '미', '솔', '라'] }, target: { notes: ['솔', '미', '솔', '라'] }, difficulty: 0.15 },
              { prompt: '우리 반 노래 뒤 네 음을 듣고 따라 쳐 보세요. 도에서 끝나요.', toolOptions: { melody: ['솔', '미', '레', '도'] }, target: { notes: ['솔', '미', '레', '도'] }, difficulty: 0.15 },
              { prompt: '우리 반 노래 여덟 음을 처음부터 끝까지 듣고 쳐 보세요.', toolOptions: { melody: ['솔', '미', '솔', '라', '솔', '미', '레', '도'] }, target: { notes: ['솔', '미', '솔', '라', '솔', '미', '레', '도'] }, reveal: 'after-check', difficulty: 0.3,
                conclude: '앞부분은 올라가 라에서 가장 높고, 뒷부분은 차례로 내려와 도에서 끝나요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 몫마다 되풀이 리듬 정하기', minutes: 15, tool: 'keyboard',
            teacher: '"되풀이 리듬은 노래 내내 같은 리듬을 계속 치는 거예요. 한 마디를 정하면 그대로 이어 쳐요." 몫마다 리듬을 손뼉으로 먼저 치고 블록으로 놓는다. 캐스터네츠 몫을 지을 때 두 마디를 다르게 짓는 학생에게 "되풀이니까 둘째 마디도 첫째와 같게"라고 말한다. 다 정하면 노래 모둠과 함께 맞춰 본다.',
            task: '악기 몫의 되풀이 리듬을 듣고 블록으로 놓거나, 규칙에 맞게 지어요. 되풀이 리듬은 두 마디가 같아요.',
            levels: rhy(4, 2),
            items: [
              { prompt: '탬버린 몫이에요. 한 마디 리듬을 두 번 되풀이해요. 듣고 블록으로 놓아 보세요.', toolOptions: { pattern: ['q', 'q', 'h', 'q', 'q', 'h'] }, target: { rhythm: ['q', 'q', 'h', 'q', 'q', 'h'] }, difficulty: 0.15 },
              { prompt: '작은북 몫이에요. 치고 쉬기를 되풀이해요. 듣고 블록으로 놓아 보세요.', toolOptions: { pattern: ['q', 'qr', 'q', 'qr', 'q', 'qr', 'q', 'qr'] }, target: { rhythm: ['q', 'qr', 'q', 'qr', 'q', 'qr', 'q', 'qr'] }, difficulty: 0.2,
                predict: { q: '작은북이 쉬는 박에는 무엇이 들릴까요?', options: ['노래와 다른 악기', '아무 소리도 안 나요'], answer: 0 },
                conclude: '한 악기가 쉬는 박을 다른 몫이 채워 주면 합주가 고르게 들려요.' },
              { prompt: '캐스터네츠 몫 리듬을 지어요. 쉼표를 하나 이상 넣고, 두 마디를 같게 되풀이해요.', target: { beats: true, rests: 1, selfCheck: ['첫째 마디와 둘째 마디가 같아요', '노래 모둠과 함께 쳐 보았어요'] }, difficulty: 0.3 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"노래 모둠이 부르고, 탬버린·작은북·캐스터네츠가 함께 쳐 볼까요?" 처음에는 몫을 하나씩 더해 가며 합주를 쌓는다. 박이 흐트러지면 교사가 무릎으로 박을 짚어 준다. 출구 1번을 틀린 학생은 가락 듣기를 다시 누르고 손 높이로 따라가게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'keyboard', options: { from: '도', to: '높은도', melody: ['미', '솔', '라', '솔'] }, prompt: '우리 반 노래를 바꾼 가락이에요. 듣고 따라 쳐 보세요.', target: { notes: ['미', '솔', '라', '솔'] }, difficulty: 0.25 },
          { type: 'choice', prompt: '되풀이 리듬은 어떻게 치나요?', options: ['마디마다 다른 리듬을 쳐요', '정한 리듬을 노래 내내 계속 되풀이해요', '노래가 끝난 뒤에 쳐요'], answer: 1, difficulty: 0.15, explain: '되풀이 리듬은 정한 리듬을 계속 이어 쳐서 노래를 받쳐 줘요.' },
          { type: 'mood', prompt: '우리 반 합주를 해 보니 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '우리 반 합주',
      items: [
        { type: 'figure', prompt: '우리 반 노래 가락의 계이름을 건반 아래에 차례로 쓰세요.', tool: 'keyboard', options: { from: '도', to: '높은도', printBoxes: 8 }, figures: [{ caption: '여덟 음' }], answer: '솔 미 솔 라 솔 미 레 도' },
        { type: 'figure', prompt: '작은북 몫 리듬을 보고, 소리를 내는 박에 ○, 쉬는 박에 △ 하세요.', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 1 }, figures: [{ state: { rhythm: ['q', 'qr', 'q', 'qr'] }, caption: '1박 ___ 2박 ___ 3박 ___ 4박 ___' }], answer: '○ △ ○ △' },
        { type: 'table', prompt: '우리 반 합주의 몫마다 리듬을 쓰세요(예: 짝 짝 짜—악).', columns: ['몫', '되풀이 리듬'], cells: [['탬버린', ''], ['작은북', ''], ['캐스터네츠', '']] },
        { type: 'short', prompt: '합주에서 내 몫이 노래를 어떻게 받쳐 주었는지 쓰세요.' },
      ],
      easy: {
        note: '되풀이 리듬 = 같은 리듬을 계속 이어 치기.',
        items: [
          { type: 'figure', prompt: '건반 아래에 계이름을 따라 쓰세요.', tool: 'keyboard', options: { from: '도', to: '높은도', printNames: true }, figures: [{ caption: '' }] },
          { type: 'choice', prompt: '우리 반 노래는 어느 음으로 끝나나요?', options: ['도', '솔'], answer: '도' },
          { type: 'choice', prompt: '되풀이 리듬은?', options: ['같은 리듬을 계속 쳐요', '마디마다 바꿔요'], answer: '같은 리듬을 계속 쳐요' },
          { type: 'short', prompt: '내가 맡은 악기를 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '가락을 듣는 동안 건반이 빛나고, 리듬 블록 아래에 마디마다 박 수가 보여요.',
      base: '계이름을 켜고 끌 수 있고, 박 수를 스스로 세어요.',
      challenge: '계이름 없이 검은건반까지 있는 건반에서 귀로 찾고, 리듬 블록에 8분쉼표·2분쉼표가 더 나와요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 되풀이 리듬을 마디마다 바꾼다 → 한 마디를 정하면 그대로. ② 합주에서 악기 소리가 노래를 덮는다 → 리듬 악기는 여리게. ③ 쉬는 박에 습관처럼 친다 → 쉬는 박에 손을 펴 보이게 한다. \'우리 반 노래\' 가락은 이 단원을 위해 새로 지은 것이므로 노랫말은 학급이 함께 지어 붙인다.',
  }));

  // ───────────────────────── 20차시 (확장) ─────────────────────────
  lessons.push(Object.assign(head(20, S4), {
    title: '작은 음악회 리허설하고 무대에 서기',
    objective: '정한 차례·자리·몫대로 리허설을 한 번 하며 어긋난 곳을 적어 그 부분만 고쳐 맞추고, 작은 음악회에서 맡은 몫으로 끝까지 참여할 수 있다.',
    safety: ['악기는 정한 자리에 두고, 다니는 길에 놓지 않아요.', '무대에 오르내릴 때 차례대로 걷고 뛰지 않아요.'],
    illustration: {
      prompt: ILL('children bowing on a small paper stage after a class concert while classmates clap, with stars and ribbons above'),
      scene: { viewBox: [480, 270], layers: [
        { motif: 'star', x: 100, y: 50, s: 0.6 }, { motif: 'star', x: 240, y: 36, s: 0.5 }, { motif: 'star', x: 380, y: 50, s: 0.6 },
        { motif: 'hills', y: 214 }, { motif: 'flower', x: 90, y: 224 }, { motif: 'flower', x: 400, y: 224 },
        { motif: 'text', x: 240, y: 140, text: '모두가 무대의 주인공', size: 24 },
      ] },
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"오늘은 리허설을 한 번 하고, 어긋난 곳만 고쳐 맞춘 뒤 정리 시간에 진짜 음악회를 열어요. 리허설에서 틀리는 것은 괜찮아요. 고치려고 하는 연습이에요." 계획표(차례·자리·준비물)를 함께 읽는다. 음악회는 15분이라 프로그램을 인사와 소개 → 모둠 합주 → 다 같이 응원 박수와 합창, 세 순서로 짧게 한다고 알린다. 시연 단추로 무대에 들고 나는 차례를 보여 준다.',
        student: '우리 반 계획표를 보며 내 몫, 내 자리, 내 차례를 확인해 봅시다.',
        demo: { tool: 'timer', options: { cards: ['연주해요', '인사하고 자리에 서요', '무대 옆에서 기다려요'] }, sequence: [{ order: ['무대 옆에서 기다려요', '인사하고 자리에 서요', '연주해요'] }] },
      },
      {
        id: 'main', title: '전개', minutes: 20,
        activities: [
          {
            id: 'a1', title: '활동 1. 리허설 한 번 하고 어긋난 곳 적기', minutes: 10, tool: 'timer',
            teacher: '"리허설 전에 무대 안전부터 확인해요." 들고 나는 차례를 정한 뒤 처음부터 끝까지 리허설을 한 번 한다. 교사는 중간에 멈추지 않고 끝까지 진행하고, 몫마다 한 사람이 자기 몫에서 박이 어긋난 곳을 손가락으로 세어 둔다. 실수한 친구를 탓하는 말이 나오면 "어긋난 곳은 장면이지 사람이 아니에요"라고 짚는다.',
            task: '무대 안전을 점검하고, 들고 나는 차례를 정한 뒤, 리허설에서 몫마다 어긋난 곳 수를 적어요.',
            levels: { easy: { title: '리허설', unit: '곳' }, base: { title: '리허설', unit: '곳' }, challenge: { title: '리허설', unit: '곳' } },
            items: [
              { prompt: '리허설 전에 무대 안전 점검을 하나씩 확인하고 표시해요.', toolOptions: { safety: ['악기를 놓을 자리를 정해 두었어요', '다니는 길에 가방이 없어요', '몸짓 하는 곳이 넓게 비었어요'] }, target: { safety: true }, difficulty: 0.05 },
              { prompt: '무대에 들고 나는 차례대로 카드를 놓아요.', toolOptions: { cards: ['인사하고 자리에 서요', '연주해요', '인사하고 차례대로 들어가요', '무대 옆에서 차례를 기다려요'] }, target: { order: ['무대 옆에서 차례를 기다려요', '인사하고 자리에 서요', '연주해요', '인사하고 차례대로 들어가요'] }, difficulty: 0.15,
                hints: ['관객 앞에 나오기 전, 나와서 연주하기 전, 연주를 마친 뒤에 각각 무엇을 하는지 떠올려 차례로 놓아요.'] },
              { prompt: '리허설을 한 번 한 뒤, 몫마다 박이 어긋난 곳 수를 세어 적어요.', toolOptions: { fields: ['노래', '리듬 악기', '몸짓'] }, target: { records: true }, difficulty: 0.1,
                hints: ['리허설하는 동안 내 몫에서 박이 어긋날 때마다 손가락을 하나씩 접어 두었다가 그 수를 적어요.'] },
            ],
          },
          {
            id: 'a2', title: '활동 2. 어긋난 곳만 고쳐 맞추기', minutes: 10, tool: 'keyboard',
            teacher: '"리허설에서 어긋났던 곳만 다시 맞춰 봐요. 처음부터 다시 하지 않아요." 노래 몫은 음악회용 마침 가락을, 리듬 몫은 되풀이 리듬을 짧게 다시 해 본다. "2절은 같은 가락에 노랫말만 바꾼 것이에요. 이 마침 가락은 가락의 끝부분을 바꾼 것이라 2절이 아니에요"라고 짚는다. 끝 인사 가락은 음악회의 마침표이고, 도로 끝나야 끝난 느낌이 난다는 것을 말해 준다.',
            task: '마침 가락을 듣고 따라 치고, 리허설에서 어긋난 내 몫 리듬을 고쳐 맞추고, 음악회 끝 인사 가락을 지어요.',
            levels: mel(),
            items: [
              { prompt: '우리 반 노래의 끝부분을 바꾼 음악회용 마침 가락이에요. 듣고 따라 쳐 보세요.', toolOptions: { melody: ['솔', '미', '솔', '라', '솔', '레', '미', '도'] }, target: { notes: ['솔', '미', '솔', '라', '솔', '레', '미', '도'] }, reveal: 'after-check', difficulty: 0.3,
                predict: { q: '마침 가락의 마지막 음은 우리 반 노래와 같을까요?', options: ['같아요', '달라요'], answer: 0 },
                conclude: '가운데를 바꾸어도 도로 끝나면 노래가 마무리된 느낌이 나요.' },
              { prompt: '리허설에서 어긋난 내 몫 리듬을 노래와 함께 다시 맞춰 보고 점검해요. 두 마디를 4박씩 채워요.', toolOptions: { mode: 'rhythm', meter: 4, measures: 2 }, target: { beats: true, selfCheck: ['노래 모둠과 첫 박을 같이 시작했어요', '리허설에서 어긋난 곳을 고쳐 쳤어요'] }, difficulty: 0.2 },
              { prompt: '음악회 끝 인사 가락을 지어요. 세 음으로, 도로 끝나게 지어요.', target: { compose: { length: 3, endOn: '도' } }, difficulty: 0.15 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 15,
        teacher: '"이제 작은 음악회를 열어요. 진행 몫이 인사와 소개를 하면, 모둠 합주, 다 같이 응원 박수와 합창 차례로 해요." 정리 15분 가운데 10~12분을 공연에 쓴다(한 순서 3분 안쪽, 몫별로 함께 서서 들고 나는 시간을 줄인다). 교사는 무대 옆에서 무릎으로 박을 짚어 준다. 공연이 끝나면 "모두가 자기 몫을 해냈어요"라고 짚고, 출구 질문으로 스스로 점검하게 한다. 참여하지 못한 학생이 있으면 합창 순서에서 진행 몫으로 함께하게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'timer', options: { title: '음악회를 마치고' }, prompt: '음악회를 마친 뒤, 내가 해낸 것을 점검 목록에 표시해요.', target: { selfCheck: ['맡은 몫을 끝까지 했어요', '차례를 지켜 들어가고 나왔어요', '친구 몫이 끝날 때 박수를 쳤어요'] }, difficulty: 0.1 },
          { type: 'choice', prompt: '리허설을 하는 까닭은 무엇인가요?', options: ['틀린 사람을 찾으려고', '어긋난 곳을 공연 전에 바로잡으려고', '공연을 한 번 더 하려고'], answer: 1, difficulty: 0.15, explain: '리허설은 어긋난 곳을 찾아 공연 전에 고치는 연습이에요.' },
          { type: 'short', prompt: '리허설에서 고친 곳이 음악회에서 어떻게 되었는지 한 문장으로 쓰세요.' },
          { type: 'mood', prompt: '무대에서 내 몫을 해 보니 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '작은 음악회 날',
      items: [
        { type: 'table', prompt: '리허설 기록을 쓰세요.', columns: ['몫', '어긋난 곳 수', '어디가 어긋났나요', '어떻게 고쳤나요'], cells: [['노래', '', '', ''], ['리듬 악기', '', '', ''], ['몸짓', '', '', '']] },
        { type: 'choice', prompt: '무대에 들고 날 때 바른 모습에 ○ 하세요.', options: ['뛰어서 올라가요', '차례대로 걸어서 오르고 인사해요', '아무 때나 들어가요'], answer: '차례대로 걸어서 오르고 인사해요' },
        { type: 'figure', prompt: '음악회 끝 인사 가락을 계이름으로 쓰세요.', tool: 'keyboard', options: { from: '도', to: '높은도', printBoxes: 3 }, figures: [{ caption: '끝 음은 도' }], answer: '예: 미 레 도' },
        { type: 'short', prompt: '음악회에서 내가 해낸 것과 가장 기억에 남는 장면을 쓰세요.' },
      ],
      easy: {
        note: '리허설에서 어긋난 곳만 고치면 공연이 더 좋아져요.',
        items: [
          { type: 'choice', prompt: '리허설은 언제 하나요?', options: ['공연 전에', '공연 뒤에'], answer: '공연 전에' },
          { type: 'table', prompt: '내 몫과 리허설에서 어긋난 곳 수를 쓰세요.', columns: ['내 몫', '어긋난 곳 수'], cells: [['', '']] },
          { type: 'short', prompt: '음악회에서 내가 맡은 몫을 쓰세요.' },
          { type: 'draw', prompt: '음악회에서 내 모습을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '가락을 듣는 동안 건반이 빛나고, 기록판 칸은 몫마다 하나씩이에요.',
      base: '계이름을 켜고 끌 수 있어요.',
      challenge: '계이름 없이 검은건반까지 있는 건반에서 마침 가락을 귀로 찾아요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 리허설에서 틀린 친구를 탓한다 → 어긋난 곳은 장면으로 말한다. ② 긴장해서 무대에서 빨라진다 → 교사가 무릎으로 박을 짚어 준다. ③ 무대에 오르내리며 뛴다 → 들고 나는 차례를 미리 걸어 본다. ④ 가락이 바뀐 것을 2절이라 부른다 → 2절은 같은 가락에 노랫말만 바꾼 것이다. 이 차시는 리허설 한 번(10분)·고쳐 맞추기(10분)·공연(정리 15분)으로 짜여 있다. 26명 학급은 몫별로 함께 서서 세 순서로 하면 15분 안에 마칠 수 있고, 시간이 모자라면 합창 순서는 다음 음악 시간 첫머리에 이어서 연다. 공연을 촬영할 때는 학급 안에서만 보고, 학생 얼굴이 드러나는 영상은 밖으로 내보내지 않는다.',
  }));

  // ───────────────────────── 21차시 (핵심) ─────────────────────────
  lessons.push(Object.assign(head(21, S4), {
    title: '음악 생활 일지에 내가 한 일까지 적기',
    objective: '음악 활동에 참여한 뒤 언제·무엇을·내가 한 일·느낌을 음악 생활 일지에 빠짐없이 적어 남길 수 있다.',
    illustration: {
      prompt: ILL('an open paper diary decorated with musical notes, a tambourine and a pencil on a desk beside a window with morning light'),
      scene: { viewBox: [480, 270], layers: [
        { motif: 'sun', x: 404, y: 58, s: 0.8 }, { motif: 'cloud', x: 110, y: 50 }, { motif: 'hills', y: 214 },
        { motif: 'leaf', x: 90, y: 200, s: 0.6 }, { motif: 'flower', x: 390, y: 224 }, { motif: 'house', x: 240, y: 216 },
        { motif: 'text', x: 240, y: 132, text: '나의 음악 생활 일지', size: 24 },
      ] },
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"두 친구의 일지를 볼까요? 한 친구는 \'우리 반 노래\'라고만 썼고, 한 친구는 \'금요일 작은 음악회에서 작은북으로 쉬는 박을 지켰다. 뿌듯했다\'라고 썼어요." 칠판에 두 줄을 나란히 적는다. "한 달 뒤에 다시 읽으면 어느 일지가 나를 더 잘 기억하게 해 줄까요?" 곡 이름만으로는 내가 무엇을 했는지 남지 않는다는 것을 짚는다.',
        student: '두 친구의 일지를 견주어 보고, 무엇이 다른지 말해 봅시다.',
        demo: { tool: 'story', options: { mode: 'fill', cards: ['작은북', '아리랑'], slots: [{ id: 'q1', label: '음악회에서 나는 ___으로 쉬는 박을 지켰어요.' }], shuffle: false }, sequence: [{ fill: { q1: '작은북' } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 일지 문장 완성하고 고르기', minutes: 14, tool: 'story',
            teacher: '"일지에는 언제, 무엇을, 내가 한 일, 느낌 네 가지를 적어요. 그 가운데 가장 자주 빠지는 것은 무엇일까요?" 내가 한 일이라는 대답을 기다린다. 곡 이름이 있는 줄을 \'내가 한 일\'로 고르는 학생에게 "그 곡으로 내가 무엇을 했나요?"를 묻는다.',
            task: '일지 문장의 빈칸을 채우고, 일지 줄을 곡 정보와 내가 한 일로 나누거나 잘 쓴 줄을 골라요.',
            levels: cardsLv(),
            items: [
              { prompt: '음악 생활 일지 문장의 빈칸에 알맞은 낱말 카드를 넣어 보세요.', toolOptions: { mode: 'fill', cards: ['지난 금요일', '탬버린', '뿌듯했어요'], slots: [{ id: 'w1', label: '___ 학급 작은 음악회에 참여했어요.' }, { id: 'w2', label: '나는 ___ 몫으로 되풀이 리듬을 쳤어요.' }, { id: 'w3', label: '끝까지 해내서 ___.' }] }, target: { fill: { w1: '지난 금요일', w2: '탬버린', w3: '뿌듯했어요' } }, difficulty: 0.1,
                hints: ['일지 네 가지(언제·무엇을·내가 한 일·느낌) 가운데 빈칸마다 어느 것이 빠졌는지 먼저 찾아요.'] },
              { prompt: '일지 줄을 곡·행사 정보와 내가 한 일로 나누어 보세요.', toolOptions: { mode: 'sort', slots: ['곡·행사 정보', '내가 한 일'], cards: ['곡: 우리 반 노래', '행사: 작은 음악회', '작은북으로 쉬는 박을 지켰어요', '마침 가락을 건반으로 쳤어요'] }, target: { sort: { '곡·행사 정보': ['곡: 우리 반 노래', '행사: 작은 음악회'], '내가 한 일': ['작은북으로 쉬는 박을 지켰어요', '마침 가락을 건반으로 쳤어요'] } }, difficulty: 0.2 },
              { prompt: '내가 한 일이 들어 있는 일지 줄만 골라 보세요.', toolOptions: { mode: 'pick', basket: '잘 쓴 일지', cards: ['아리랑', '운동회 응원가를 반 친구들과 불렀어요', '생일 노래', '할머니와 손뼉 치며 노래했어요'] }, target: { pick: ['운동회 응원가를 반 친구들과 불렀어요', '할머니와 손뼉 치며 노래했어요'] }, difficulty: 0.25,
                predict: { q: '‘아리랑’이라고만 쓴 일지로 내가 무엇을 했는지 알 수 있을까요?', options: ['알 수 있어요', '알 수 없어요'], answer: 1 },
                conclude: '곡 이름만 쓰면 내가 불렀는지, 들었는지, 연주했는지 남지 않아요. 내가 한 일을 함께 적어요.' },
            ],
          },
          {
            id: 'a2', title: '활동 2. 이번 주 음악 활동 세어 적기', minutes: 13, tool: 'timer',
            teacher: '"이번 주에 내가 함께 노래한 것, 악기를 친 것, 몸으로 표현한 것은 몇 번이었나요? 일지를 보고 세어 봐요." 학교 밖 활동(가족과 노래하기)도 세게 한다. 일지를 다 쓴 뒤 네 가지가 모두 들어 있는지 짝과 바꾸어 점검하게 한다.',
            task: '일지를 보고 활동마다 참여한 횟수를 적고, 내 일지 한 줄에 빠진 것이 없는지 점검해요.',
            levels: { easy: { title: '이번 주 음악 활동', unit: '번' }, base: { title: '이번 주 음악 활동', unit: '번' }, challenge: { title: '이번 주 음악 활동', unit: '번' } },
            items: [
              { prompt: '내 일지를 보고 이번 주에 활동마다 참여한 횟수를 적어요.', toolOptions: { fields: ['함께 노래', '악기 연주', '몸으로 표현'] }, target: { records: true }, difficulty: 0.1 },
              { prompt: '보기 일지 — 월: 응원가를 불렀어요 / 화: 리코더를 불었어요 / 수: 생일 노래를 불렀어요 / 목: 탬버린을 쳤어요 / 금: 교가를 불렀어요 / 토: 얼음 놀이를 했어요. 활동마다 세어 적어요.', toolOptions: { fields: ['함께 노래', '악기 연주', '몸으로 표현'] }, target: { records: [3, 2, 1] }, difficulty: 0.2,
                hints: ['일지 줄마다 내가 한 일이 노래인지, 악기인지, 몸 표현인지 먼저 정하고, 하나씩 표시하며 세어요.'] },
              { prompt: '내 일지 한 줄을 쓴 뒤, 빠진 것이 없는지 점검 목록에 표시해요.', target: { selfCheck: ['언제를 적었어요', '무엇을 했는지 적었어요', '내가 한 일을 적었어요', '느낌을 적었어요'] }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"짝의 일지에서 \'내가 한 일\'을 찾아 소리 내어 읽어 주세요." 내가 한 일이 빠진 일지는 그 자리에서 한 줄 덧붙이게 한다. 오늘부터 일주일 동안 음악 생활 일지를 이어 쓰자고 알린다. 출구 2번을 틀린 학생과는 곡 이름 뒤에 \'나는 ~했다\'를 붙여 보게 한다.',
        exitTicket: [
          { type: 'tool', tool: 'story', options: { mode: 'fill', cards: ['리코더', '어제', '즐거웠어요'], slots: [{ id: 'e1', label: '___ 음악 시간에 우리 반 노래를 ___로 불었어요.' }] }, prompt: '일지 문장의 첫 빈칸에 알맞은 낱말 카드를 넣어 보세요.', target: { fill: { e1: '어제' } }, difficulty: 0.15 },
          { type: 'choice', prompt: '음악 생활 일지를 가장 잘 쓴 것은 무엇인가요?', options: ['강강술래', '추석에 사촌들과 손잡고 강강술래를 했어요. 빨라질 때 신났어요', '노래 들음'], answer: 1, difficulty: 0.15, explain: '언제·무엇을·내가 한 일·느낌이 모두 들어 있어요.' },
          { type: 'mood', prompt: '음악 생활 일지를 써 보니 어땠나요?' },
        ],
      },
    ],
    worksheet: {
      title: '음악 생활 일지',
      items: [
        { type: 'table', prompt: '이번 주 음악 생활 일지를 쓰세요.', columns: ['언제', '무엇을(곡·행사)', '내가 한 일', '느낌'], rows: 5 },
        { type: 'choice', prompt: '‘내가 한 일’이 들어 있는 줄에 ○ 하세요.', options: ['생일 노래', '동생 생일에 노래를 부르며 손뼉을 쳤어요', '노래'], answer: '동생 생일에 노래를 부르며 손뼉을 쳤어요' },
        { type: 'blank', prompt: '‘우리 반 노래’라고만 쓴 일지를 고쳐 쓰세요.', text: '___에 우리 반 노래를 ___.', answer: '예: 음악회 날, 탬버린을 치며 불렀어요' },
        { type: 'short', prompt: '일지에 ‘내가 한 일’을 적으면 무엇이 좋은지 쓰세요.' },
      ],
      easy: {
        note: '일지 네 가지: 언제, 무엇을, 내가 한 일, 느낌.',
        items: [
          { type: 'table', prompt: '오늘 한 음악 활동을 쓰세요.', columns: ['언제', '내가 한 일'], rows: 2 },
          { type: 'choice', prompt: '잘 쓴 일지에 ○ 하세요.', options: ['아리랑', '음악 시간에 아리랑을 불렀어요'], answer: '음악 시간에 아리랑을 불렀어요' },
          { type: 'short', prompt: '오늘 음악 활동의 느낌을 한 낱말로 쓰세요.' },
          { type: 'draw', prompt: '오늘 한 음악 활동을 그려 보세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞게 넣은 카드에 초록 테두리가 보이고, 틀린 곳에 넣으면 되돌아와요.',
      base: '카드를 모두 넣은 뒤 스스로 확인해요.',
      challenge: '카드 순서가 섞여 나오고, 일지 점검 목록이 네 가지예요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 일지에 곡 이름만 적는다 → \'나는 ~했다\'를 붙인다. ② 학교 밖 활동은 세지 않는다 → 가족과 노래하기, 놀이 노래도 음악 활동이다. ③ 느낌을 \'좋았다\'로만 쓴다 → 왜 좋았는지 음악 요소 하나를 넣게 한다. 일지에는 가족·친구의 이름을 적지 않고 \'동생\', \'친구\'처럼 쓴다.',
  }));

  // ───────────────────────── 22차시 (연습) ─────────────────────────
  lessons.push(Object.assign(head(22, S4), {
    title: '일지 그래프에서 적은 활동 찾아 컵 리듬으로 해 보기',
    objective: '음악 생활 일지 그래프에서 적게 한 활동을 찾아 늘릴 방법을 정하고, 그 방법 가운데 하나인 컵 리듬을 짝과 함께 지어 칠 수 있다.',
    illustration: {
      prompt: ILL('a child looking at a paper bar chart with bars shaped like a microphone, a drum, a dancing figure and an ear'),
      scene: { viewBox: [480, 270], layers: [
        { motif: 'cloud', x: 110, y: 54 }, { motif: 'sun', x: 404, y: 58, s: 0.7 }, { motif: 'hills', y: 214 },
        { motif: 'tree', x: 80, y: 214 }, { motif: 'star', x: 250, y: 100, s: 0.6 }, { motif: 'flower', x: 400, y: 224 },
        { motif: 'text', x: 240, y: 152, text: '나는 무엇을 많이 했을까?', size: 22 },
      ] },
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"일주일 일지를 펴 보세요. 함께 노래한 것, 악기를 친 것, 몸으로 표현한 것, 들은 것 — 무엇이 가장 많은가요?" 손을 들어 보게 한다. "그래프로 그리면 내 음악 생활이 한눈에 보여요. 많은 것도, 적은 것도요." 적게 한 활동은 부족한 것이 아니라 다음에 늘려 볼 것이라고 짚는다.',
        student: '내 일지에서 활동마다 몇 번씩 했는지 세어 봅시다.',
        demo: { tool: 'chart', options: { type: 'bar', title: '나의 음악 활동', data: [['노래', 4], ['악기', 2]], unit: '번', xLabel: '활동', yLabel: '횟수' }, sequence: [{ values: [4, null] }, { values: [4, 2] }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 일지 그래프에서 낮은 막대 찾기', minutes: 8, tool: 'chart',
            teacher: '"민지의 일지 그래프예요. 두 막대가 비어 있으니 표를 보고 채워 보세요." 그래프 그리기는 짧게 하고, "가장 낮은 막대는 무엇인가요? 그 활동은 민지가 못하는 걸까요, 덜 해 본 걸까요?"를 묻는다. 낮은 막대는 다음에 늘려 볼 활동이라는 대답을 기다린 뒤 활동 2와 잇는다.',
            task: '민지의 일지 그래프에서 빈 막대를 채우고, 가장 낮은 막대와 막대 사이의 차이를 읽어요.',
            levels: { easy: { showValues: true }, base: {}, challenge: { revealAfterCheck: true } },
            items: [
              { prompt: '민지의 2주 일지 표(함께 노래 6번, 악기 연주 3번, 몸 표현 2번, 듣기 8번)를 보고 빈 막대 두 개를 채우세요.', toolOptions: { type: 'bar', horizontal: true, title: '민지의 음악 활동', data: [['함께 노래', 6], ['악기 연주', 3], ['몸 표현', 2], ['듣기', 8]], unit: '번', xLabel: '활동', yLabel: '횟수', given: [0, 3] }, target: { build: true }, difficulty: 0.15 },
              { prompt: '민지가 가장 적게 한 음악 활동은 무엇인가요?', toolOptions: { type: 'bar', mode: 'read', horizontal: true, title: '민지의 음악 활동', data: [['함께 노래', 6], ['악기 연주', 3], ['몸 표현', 2], ['듣기', 8]], unit: '번', xLabel: '활동', choices: ['악기 연주', '몸 표현', '듣기'], why: ['악기 연주 막대보다 더 짧은 막대가 있어요.', '', '듣기 막대는 가장 길어요.'], explain: '몸 표현 막대가 2번으로 가장 짧아요.' }, target: { pick: 1 }, difficulty: 0.15,
                predict: { q: '듣기가 가장 많은 민지에게 늘리면 좋을 활동은 무엇일까요?', options: ['듣기를 더 늘려요', '함께하는 활동을 늘려요'], answer: 1 },
                conclude: '그래프에서 낮은 막대는 다음에 늘려 볼 활동을 알려 줘요.' },
              { prompt: '민지가 함께 노래한 것은 몸으로 표현한 것보다 몇 번 더 많은가요?', toolOptions: { type: 'bar', mode: 'read', horizontal: true, title: '민지의 음악 활동', data: [['함께 노래', 6], ['악기 연주', 3], ['몸 표현', 2], ['듣기', 8]], unit: '번', xLabel: '활동', question: '함께 노래는 몸 표현보다 몇 번 더 많은가요?' }, target: { value: 4 }, difficulty: 0.3 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 적게 한 활동을 늘릴 방법 찾기', minutes: 9, tool: 'mindmap',
            teacher: '"그래프에서 낮은 막대를 하나 골라 보세요. 집이나 학교에서 그 활동을 늘릴 방법은 무엇일까요?" 돈이나 특별한 악기가 없어도 할 수 있는 방법을 먼저 떠올리게 한다. 일지로 알 수 없는 것(음악을 잘하는지)을 고르는 학생에게 "일지에는 무엇이 적혀 있나요?"를 묻는다.',
            task: '적게 한 활동에 늘릴 방법을 잇고, 일지와 그래프로 알 수 있는 것을 골라요.',
            levels: cardsLv(),
            items: [
              { prompt: '적게 한 활동과 늘릴 방법을 이어 보세요.', toolOptions: { mode: 'match', topic: '늘릴 방법', slots: [{ id: 'g1', label: '몸 표현이 적어요' }, { id: 'g2', label: '악기 연주가 적어요' }, { id: 'g3', label: '함께 노래가 적어요' }], cards: ['쉬는 시간에 얼음 놀이를 해요', '컵과 젓가락으로 리듬을 쳐요', '가족과 생일 노래를 불러요'] }, target: { match: { g1: '쉬는 시간에 얼음 놀이를 해요', g2: '컵과 젓가락으로 리듬을 쳐요', g3: '가족과 생일 노래를 불러요' } }, difficulty: 0.15,
                hints: ['적게 한 활동마다 그 활동이 무엇을 하는 것인지(몸을 움직이기, 소리 내는 물건 치기, 여럿이 노래하기) 떠올리고, 그것을 하게 되는 방법을 이어요.'] },
              { prompt: '음악 활동을 혼자 하는 것과 함께하는 것으로 나누어 보세요.', toolOptions: { mode: 'sort', topic: '음악 활동', slots: ['혼자 해요', '함께해요'], cards: ['방에서 노래를 들어요', '건반으로 가락을 지어요', '친구와 대문놀이를 해요', '모둠 합주를 해요'] }, target: { sort: { '혼자 해요': ['방에서 노래를 들어요', '건반으로 가락을 지어요'], 함께해요: ['친구와 대문놀이를 해요', '모둠 합주를 해요'] } }, difficulty: 0.2 },
              { prompt: '일지와 그래프로 알 수 있는 것만 골라 보세요.', toolOptions: { mode: 'pick', topic: '일지 그래프', basket: '알 수 있는 것', cards: ['내가 가장 많이 한 활동', '다음에 늘릴 활동', '친구보다 음악을 잘하는지', '노래 실력 점수'] }, target: { pick: ['내가 가장 많이 한 활동', '다음에 늘릴 활동'] }, reveal: 'after-check', difficulty: 0.25 },
            ],
          },
          {
            id: 'a3', title: '활동 3. 컵 리듬 지어 짝과 치기', minutes: 10, tool: 'keyboard',
            teacher: '"악기 연주가 적다면 지금 바로 늘려 볼 수 있어요. 플라스틱 컵 하나만 있으면 돼요." 컵 바닥으로 책상을 치는 소리(4분음표), 손바닥으로 컵을 두 번 톡톡 치는 소리(8분음표 둘), 컵을 든 채 멈추는 쉼표를 보여 준다. 리듬을 듣고 컵으로 먼저 친 뒤 블록으로 놓는다. 컵을 세게 내리쳐 박이 빨라지는 학생에게 "소리는 작게, 박은 고르게"라고 말한다. 마지막 문항은 짝과 마주 보고 두 번 이어 친 뒤에만 점검 목록을 표시하게 한다.',
            task: '컵 리듬을 듣고 컵으로 쳐 본 뒤 블록으로 놓아요. 마지막에는 내 컵 리듬을 지어 짝과 함께 쳐요.',
            levels: rhy(4, 2),
            items: [
              { prompt: '컵 리듬을 듣고 컵으로 따라 친 뒤 블록으로 놓아 보세요. 쉼표에서는 컵을 든 채 멈춰요.', toolOptions: { pattern: ['q', 'q', 'e', 'e', 'q', 'q', 'qr', 'h'] }, target: { rhythm: ['q', 'q', 'e', 'e', 'q', 'q', 'qr', 'h'] }, difficulty: 0.2 },
              { prompt: '내 컵 리듬을 지어요. 두 마디를 4박씩 채우고, 8분음표·2분음표·쉼표를 모두 넣어요.', target: { beats: true, use: ['e', 'h'], rests: 1 }, reveal: 'after-check', difficulty: 0.3,
                conclude: '짧은 소리, 긴 소리, 쉼이 섞이면 컵 하나로도 재미있는 리듬이 돼요.' },
              { prompt: '지은 컵 리듬을 짝과 마주 보고 두 번 이어 친 뒤, 해낸 것을 점검해요.', target: { beats: true, selfCheck: ['짝과 첫 박을 같이 시작했어요', '쉼표에서 둘 다 컵을 든 채 멈췄어요', '오늘 한 컵 리듬을 일지에 적기로 했어요'] }, difficulty: 0.15 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"내 그래프에서 다음 주에 늘려 볼 활동 하나와 그 방법을 짝에게 말해 보세요." 몇 명이 발표한다. 다음 시간에는 단원을 정리하며 해 보고 싶은 음악 활동을 정한다고 알린다. 출구 1번에서 막대를 잘못 읽은 학생과는 막대 끝에서 눈금까지 손가락으로 따라가 본다.',
        exitTicket: [
          { type: 'tool', tool: 'chart', options: { type: 'bar', mode: 'read', title: '지우의 음악 활동', data: [['함께 노래', 5], ['악기 연주', 1], ['몸 표현', 3]], unit: '번', xLabel: '활동', choices: ['함께 노래', '악기 연주', '몸 표현'] }, prompt: '지우가 다음에 가장 늘리면 좋을 활동은 무엇인가요? 가장 적은 막대를 골라 보세요.', target: { pick: 1 }, difficulty: 0.2 },
          { type: 'choice', prompt: '그래프에서 가장 낮은 막대는 무엇을 알려 주나요?', options: ['내가 음악을 못한다는 것', '다음에 늘려 볼 활동', '아무것도 알려 주지 않아요'], answer: 1, difficulty: 0.15, explain: '낮은 막대는 적게 한 활동이라 다음에 늘려 볼 수 있어요.' },
          { type: 'short', prompt: '다음 주에 늘려 볼 음악 활동과 그 방법을 쓰세요.' },
        ],
      },
    ],
    worksheet: {
      title: '나의 음악 생활 그래프',
      items: [
        { type: 'table', prompt: '내 일지를 세어 표로 쓰세요.', columns: ['함께 노래', '악기 연주', '몸 표현', '듣기'], cells: [['', '', '', '']] },
        { type: 'table', prompt: '표를 보고, 활동마다 횟수만큼 칸에 ■ 를 그려 막대그래프를 완성하세요. (함께 노래 5번, 악기 연주 2번, 몸 표현 3번, 듣기 6번 · 첫 줄은 해 놓았어요)', columns: ['활동', '1', '2', '3', '4', '5', '6'], cells: [['함께 노래', '■', '■', '■', '■', '■', ''], ['악기 연주', '', '', '', '', '', ''], ['몸 표현', '', '', '', '', '', ''], ['듣기', '', '', '', '', '', '']], answer: '악기 2칸, 몸 표현 3칸, 듣기 6칸' },
        { type: 'choice', prompt: '그래프에서 가장 적게 한 활동은?', options: ['함께 노래', '악기 연주', '듣기'], answer: '악기 연주' },
        { type: 'short', prompt: '가장 적게 한 활동을 늘릴 방법을 쓰세요.' },
        { type: 'figure', prompt: '컵 리듬을 손으로 쳐 보고, 쉼표에 ○ 하고 마디마다 박 수를 쓰세요.', tool: 'keyboard', options: { mode: 'rhythm', meter: 4, measures: 2 }, figures: [{ state: { rhythm: ['q', 'e', 'e', 'qr', 'q', 'h', 'q', 'q'] }, caption: '첫째 마디 ___박, 둘째 마디 ___박' }], answer: '4박, 4박 / 첫째 마디 넷째 블록(쉼표)에 ○' },
      ],
      easy: {
        note: '높은 막대 = 많이 한 활동, 낮은 막대 = 늘려 볼 활동. 컵 리듬: 쿵(컵 내려놓기) = 1박, 톡톡 = 1박, 쉼표 = 컵 들고 멈추기.',
        items: [
          { type: 'table', prompt: '막대(■)가 가장 긴 활동의 마지막 칸에 ○ 하세요.', columns: ['활동', '1', '2', '3', '4', '○'], cells: [['노래', '■', '■', '■', '■', ''], ['악기', '■', '■', '', '', ''], ['몸 표현', '■', '', '', '', '']], answer: '노래' },
          { type: 'choice', prompt: '낮은 막대는 무엇을 알려 주나요?', options: ['늘려 볼 활동', '못하는 것'], answer: '늘려 볼 활동' },
          { type: 'choice', prompt: '컵 리듬의 쉼표에서는 어떻게 할까요?', options: ['컵을 든 채 멈춰요', '컵을 세게 쳐요'], answer: '컵을 든 채 멈춰요' },
          { type: 'short', prompt: '다음에 늘리고 싶은 활동을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '막대 끝에 지금 값이 보이고, 맞게 이은 카드에 초록 테두리가 보여요. 리듬 블록 아래에 마디마다 박 수가 보여요.',
      base: '눈금을 스스로 읽고, 카드와 리듬 박 수를 스스로 확인해요.',
      challenge: '막대 값이 확인한 뒤에야 보이고, 카드 순서가 섞여 나와요. 컵 리듬 블록에 8분쉼표·2분쉼표가 더 나와요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 낮은 막대를 \'못하는 것\'으로 여긴다 → 늘려 볼 활동이라고 바꾸어 말한다. ② 가로 막대그래프를 세로처럼 읽는다 → 막대 끝에서 아래 눈금으로 따라간다. ③ 늘릴 방법으로 비싼 악기를 사는 것만 떠올린다 → 컵·책상·손뼉처럼 둘레의 물건을 떠올리게 한다. ④ 컵 리듬이 점점 빨라지고 소리가 커진다 → 교사가 무릎으로 박을 짚고, 컵은 바닥에서 한 뼘 높이로만 든다. 컵은 깨지지 않는 플라스틱 컵을 쓰고, 없으면 손뼉·책상으로 대신한다. 그래프의 친구 이름(민지·지우)은 가명이다.',
  }));

  // ───────────────────────── 23차시 (단원 정리) ─────────────────────────
  lessons.push(Object.assign(head(23, S4), {
    title: '단원을 묶어 보고 다음 음악 활동 계획하기',
    objective: '단원에서 한 신체표현·놀이·생활 속 연주 활동과 그 안의 음악 개념을 묶어 정리하고, 스스로 평가한 뒤 다음에 해 보고 싶은 음악 활동을 정해 계획할 수 있다.',
    illustration: {
      prompt: ILL('a paper treasure map path winding past a drum, a gate made of arms, a dancing circle and a small stage toward a bright star'),
      scene: { viewBox: [480, 270], layers: [
        { motif: 'star', x: 420, y: 54, s: 0.9 }, { motif: 'cloud', x: 100, y: 52 }, { motif: 'mountain', x: 330, y: 206 },
        { motif: 'hills', y: 214 }, { motif: 'house', x: 90, y: 214 }, { motif: 'tree', x: 200, y: 216 },
        { motif: 'text', x: 220, y: 130, text: '내가 걸어온 음악 길', size: 23 },
      ] },
    },
    stages: [
      {
        id: 'intro', title: '도입', minutes: 5,
        teacher: '"이번 단원에서 우리가 한 일을 떠올려 볼까요? 몸 악기, 세마치 무릎장단, 대문놀이, 얼음 놀이, 원 돌기, 알림 가락, 응원 박수, 작은 음악회, 음악 생활 일지." 칠판에 차례로 적으며 가장 기억에 남는 것에 손을 들게 한다. "이것들을 세 묶음으로 나누면 어떻게 될까요?" 시연 단추로 활동을 묶는 모습을 보여 준다.',
        student: '이번 단원에서 한 활동 가운데 가장 기억에 남는 것을 떠올려 봅시다.',
        demo: { tool: 'mindmap', options: { topic: '1. 연주', slots: ['몸으로 표현', '생활 속 연주'], cards: ['무릎·손뼉 몸 악기', '작은 음악회'], shuffle: false }, sequence: [{ sort: { '몸으로 표현': ['무릎·손뼉 몸 악기'], '생활 속 연주': ['작은 음악회'] } }] },
      },
      {
        id: 'main', title: '전개', minutes: 27,
        activities: [
          {
            id: 'a1', title: '활동 1. 단원 활동과 생각 묶기', minutes: 10, tool: 'mindmap',
            teacher: '"이 활동은 몸으로 표현한 것인가요, 놀이였나요, 생활 속 연주였나요?" 묶은 뒤에는 단원에서 고친 생각을 맞는 말과 고칠 말로 나누게 한다. \'재미있었으면 음악과 맞은 것\'을 맞는 말로 두는 학생에게 9차시 장면 카드를 떠올리게 한다.',
            task: '단원 활동을 세 묶음으로 나누고, 단원에서 배운 생각이 맞는 말인지 고칠 말인지 나누어요.',
            levels: cardsLv(),
            items: [
              { prompt: '단원 활동을 세 묶음으로 나누어 보세요.', toolOptions: { topic: '1. 연주', slots: ['몸으로 표현', '놀이', '생활 속 연주'], cards: ['무릎·손뼉 몸 악기', '세마치 무릎장단', '대문놀이', '쉼표 얼음 놀이', '알림 가락 짓기', '작은 음악회'] }, target: { sort: { '몸으로 표현': ['무릎·손뼉 몸 악기', '세마치 무릎장단'], 놀이: ['대문놀이', '쉼표 얼음 놀이'], '생활 속 연주': ['알림 가락 짓기', '작은 음악회'] } }, difficulty: 0.2 },
              { prompt: '단원에서 배운 음악 낱말과 뜻을 이어 보세요.', toolOptions: { mode: 'match', topic: '음악 낱말', slots: [{ id: 'n1', label: '센박' }, { id: 'n2', label: '쉼표' }, { id: 'n3', label: '되풀이 리듬' }], cards: ['마디의 첫째 박', '소리 없이 박을 차지해요', '같은 리듬을 계속 쳐요'] }, target: { match: { n1: '마디의 첫째 박', n2: '소리 없이 박을 차지해요', n3: '같은 리듬을 계속 쳐요' } }, difficulty: 0.2,
                hints: ['낱말마다 단원에서 어떤 활동을 하며 배웠는지 떠올리고, 그때 몸이나 악기로 무엇을 했는지 생각하며 이어요.'] },
              { prompt: '단원에서 배운 생각을 맞는 말과 고칠 말로 나누어 보세요.', toolOptions: { topic: '단원 생각 정리', slots: ['맞는 말', '고칠 말'], cards: ['집에서 함께 불러도 연주 활동이에요', '잘하는 사람만 음악회에 나가요', '재미있었으면 음악과 맞은 거예요', '쉼표에서도 박은 흘러가요'] }, target: { sort: { '맞는 말': ['집에서 함께 불러도 연주 활동이에요', '쉼표에서도 박은 흘러가요'], '고칠 말': ['잘하는 사람만 음악회에 나가요', '재미있었으면 음악과 맞은 거예요'] } }, reveal: 'after-check', difficulty: 0.3 },
            ],
          },
          {
            id: 'a2', title: '활동 2. 박과 장단 다시 해 보기', minutes: 9, tool: 'keyboard',
            teacher: '"단원 처음에 했던 박과 장단을 지금은 얼마나 잘할 수 있을까요?" 듣기 없이 기억으로 먼저 해 보고, 어려우면 듣기를 누르게 한다. 3박 리듬에서 2분음표를 마디 끝에 놓아 넘기는 학생에게 2차시 몸 악기 무늬(무릎–손뼉–손뼉)를 떠올리게 한다.',
            task: '기억을 살려 세마치장단을 놓고, 3박 리듬을 지어요. 어려우면 듣기를 눌러도 돼요.',
            levels: {
              easy: { mode: 'janggu', beats: 9, group: 3, jangdan: '세마치', strokes: ['덩', '쿵', '덕'] },
              base: { mode: 'janggu', beats: 9, group: 3, jangdan: '세마치', strokes: ['덩', '쿵', '덕', '기덕'] },
              challenge: { mode: 'janggu', beats: 9, group: 3, jangdan: '세마치' },
            },
            items: [
              { prompt: '기억을 살려 세마치장단 한 장단을 아홉 칸에 놓아 보세요.', target: { strokes: ['덩', '', '', '덩', '', '덕', '쿵', '덕', ''] }, difficulty: 0.3 },
              { prompt: '쉼표와 2분음표를 넣어 한 마디 3박, 두 마디 리듬을 지어요.', toolOptions: { mode: 'rhythm', meter: 3, measures: 2, blocks: ['q', 'e', 'h', 'qr'] }, target: { beats: true, use: ['h'], rests: 1 }, difficulty: 0.3 },
              { prompt: '도로 시작해 도로 끝나는 다섯 음 가락을 지어, 다음 음악 활동에 쓸 가락으로 남겨요.', toolOptions: { mode: 'melody', from: '도', to: '높은도' }, target: { compose: { length: 5, startOn: '도', endOn: '도' }, selfCheck: ['지은 가락을 손 높이로 나타냈어요', '어디에 쓸지 정했어요'] }, difficulty: 0.25 },
            ],
          },
          {
            id: 'a3', title: '활동 3. 나를 평가하고 다음 활동 계획하기', minutes: 8, tool: 'timer',
            teacher: '"단원을 돌아보며 세 묶음마다 1점에서 3점으로 나를 평가해 보세요. 그리고 다음에 해 보고 싶은 음악 활동을 하나 정해요." 계획 차례를 놓은 뒤, 계획에 \'언제·어디서·누구와\'가 들어 있는지 짝과 확인하게 한다. 잘하는 것만 고르려는 학생에게 낮은 점수의 묶음도 해 볼 만하다고 말해 준다.',
            task: '묶음마다 나의 점수를 적고, 다음 음악 활동 계획 차례를 놓은 뒤 계획을 점검해요.',
            levels: { easy: { title: '다음 음악 활동', unit: '점' }, base: { title: '다음 음악 활동', unit: '점' }, challenge: { title: '다음 음악 활동', unit: '점' } },
            items: [
              { prompt: '단원 세 묶음마다 나를 1~3점으로 평가해 적어요.', toolOptions: { fields: [{ label: '몸으로 표현', unit: '점', max: 3 }, { label: '놀이', unit: '점', max: 3 }, { label: '생활 속 연주', unit: '점', max: 3 }] }, target: { records: true }, difficulty: 0.1 },
              { prompt: '다음 음악 활동을 계획하는 차례대로 카드를 놓아요.', toolOptions: { cards: ['해 보고 일지에 적기', '해 보고 싶은 활동 고르기', '함께할 사람 정하기', '언제·어디서 할지 정하기'] }, target: { order: ['해 보고 싶은 활동 고르기', '언제·어디서 할지 정하기', '함께할 사람 정하기', '해 보고 일지에 적기'] }, difficulty: 0.2,
                hints: ['계획은 무엇을 할지가 먼저 있어야 나머지를 정할 수 있어요. 실제로 해 본 뒤에 하는 일은 맨 뒤예요.'] },
              { prompt: '내 계획을 짝과 함께 읽고, 들어 있는 것을 점검 목록에 표시해요.', target: { selfCheck: ['해 보고 싶은 활동을 하나 정했어요', '언제·어디서 할지 적었어요', '함께할 사람을 정했어요', '해 본 뒤 일지에 적기로 했어요'] }, difficulty: 0.1 },
            ],
          },
        ],
      },
      {
        id: 'wrapup', title: '정리', minutes: 8,
        teacher: '"다음에 해 보고 싶은 음악 활동을 한 사람씩 한 문장으로 말해 볼까요? \'나는 다음 주 쉬는 시간에 친구들과 얼음 놀이를 하겠다\'처럼요." 모두의 계획을 듣고 교실 뒤 \'우리 반 음악 생활\' 판에 붙인다. 단원 점검표(12차시)를 다시 보며 처음보다 나아진 점을 하나씩 말하고 마친다.',
        exitTicket: [
          { type: 'tool', tool: 'mindmap', options: { topic: '1. 연주', slots: ['놀이', '생활 속 연주'], cards: ['원 돌기 놀이', '음악 생활 일지 쓰기', '응원 박수 짓기'] }, prompt: '단원 활동을 놀이와 생활 속 연주로 나누어 보세요.', target: { sort: { 놀이: ['원 돌기 놀이'], '생활 속 연주': ['음악 생활 일지 쓰기', '응원 박수 짓기'] } }, difficulty: 0.2 },
          { type: 'choice', prompt: '이 단원에서 배운 것으로 바른 것은 무엇인가요?', options: ['연주는 무대에서만 해요', '몸과 놀이, 생활 속에서도 음악을 함께 즐길 수 있어요', '음악은 잘하는 사람만 해요'], answer: 1, difficulty: 0.1, explain: '몸으로, 놀이로, 생활 속 행사에서 누구나 음악을 함께할 수 있어요.' },
          { type: 'short', prompt: '다음에 해 보고 싶은 음악 활동을 언제·어디서·누구와 할지 넣어 한 문장으로 쓰세요.' },
          { type: 'mood', prompt: '1단원 ‘연주’를 마친 내 마음은 어떤가요?' },
        ],
      },
    ],
    worksheet: {
      title: '1. 연주 단원 정리',
      items: [
        { type: 'table', prompt: '단원 활동을 묶음마다 하나씩 쓰고, 나를 1~3점으로 평가하세요.', columns: ['묶음', '내가 한 활동', '점수', '까닭'], cells: [['몸으로 표현', '', '', ''], ['놀이', '', '', ''], ['생활 속 연주', '', '', '']] },
        { type: 'figure', prompt: '세마치장단의 빈칸에 들어갈 구음을 쓰세요.', tool: 'keyboard', wide: true, options: { mode: 'janggu', beats: 9, group: 3, jangdan: '세마치' }, figures: [{ state: { strokes: ['덩', '', '', '덩', '', '', '쿵', '', ''] }, caption: '여섯째 칸 ___, 여덟째 칸 ___' }], answer: '여섯째 칸 덕, 여덟째 칸 덕' },
        { type: 'choice', prompt: '고칠 말에 ○ 하세요.', options: ['쉼표에서도 박은 흘러가요', '잘하는 사람만 음악회에 나가요', '가족과 함께 노래하는 것도 연주 활동이에요'], answer: '잘하는 사람만 음악회에 나가요' },
        { type: 'table', prompt: '다음 음악 활동 계획을 쓰세요.', columns: ['무엇을', '언제', '어디서', '누구와'], cells: [['', '', '', '']] },
        { type: 'short', prompt: '이 단원을 배우고 나서 음악에 대해 달라진 생각을 쓰세요.' },
      ],
      easy: {
        note: '세 묶음: 몸으로 표현(몸 악기·무릎장단), 놀이(대문놀이·얼음 놀이), 생활 속 연주(음악회·일지).',
        items: [
          { type: 'choice', prompt: '대문놀이는 어느 묶음인가요?', options: ['놀이', '생활 속 연주'], answer: '놀이' },
          { type: 'choice', prompt: '바른 말에 ○ 하세요.', options: ['모두 음악회에 함께해요', '잘하는 사람만 나가요'], answer: '모두 음악회에 함께해요' },
          { type: 'short', prompt: '가장 재미있었던 활동과, 그 활동에서 음악과 잘 맞았던 장면을 쓰세요.' },
          { type: 'short', prompt: '다음에 해 보고 싶은 음악 활동을 쓰세요.' },
        ],
      },
    },
    differentiation: {
      easy: '맞게 넣은 카드에 초록 테두리가 보이고, 장구 붓이 덩·쿵·덕 셋만 나와요.',
      base: '카드를 스스로 확인하고, 기덕 붓이 더 나와요.',
      challenge: '생각 나누기는 맞게 넣기 전에 테두리가 보이지 않고, 모든 장구 붓을 써요.',
    },
    teacherNotes: '자주 보이는 어려움: ① 단원 활동을 묶지 못하고 하나씩만 떠올린다 → 칠판 활동 목록을 보며 묶는다. ② 자기 평가를 모두 3점으로 한다 → 그 점수를 준 장면을 말하게 한다. ③ 다음 활동 계획이 \'음악을 열심히 하기\'처럼 막연하다 → 무엇을·언제·어디서·누구와 네 칸을 채우게 한다. 계획 판은 다음 단원 첫 시간에 다시 보며 실천했는지 묻는다.',
  }));

  PaperLessons.registerUnit({
    id: 'g4-mus-1-01', schema: 'edu-unit.v1', catalogUnit: U,
    grade: 4, subject: '음악', unitTitle: '1. 연주',
    flow: '앞의 열두 차시는 몸과 놀이로 음악을 즐깁니다: 박·센박·가락의 오르내림·세마치장단을 손뼉·무릎·손 높이로 나타내고(1~4차시), 곡의 흐름에 맞는 모둠 움직임과 전래·새 놀이 규칙을 만들어 놀며(5~8차시), 활동을 되돌아보아 음악과 맞은 장면과 어긋난 장면을 찾고, 고쳐 다시 하고, 친구 모둠 공연을 보며 근거를 들어 말하고, 박·리듬·빠르기·셈여림·가락 점검표를 들고 몸 악기로 다시 해 봅니다(9~12차시). 뒤의 열한 차시는 눈을 생활로 돌려, 집·학교·동네에서 들리는 음악과 함께 부르고 연주하는 장면을 찾아 기록하고 그 노래를 반이 함께 불러 봅니다(13~16차시). 이어서 학급 행사에 맞는 곡을 고르고 모두가 맡을 몫·차례·자리·준비물을 정해 리허설 뒤 작은 음악회로 실제로 참여합니다(17~20차시). 마지막에는 음악 생활 일지를 써서 내가 한 일을 남기고, 일지 그래프에서 적게 한 활동을 컵 리듬으로 해 본 뒤, 단원을 묶어 다음에 해 보고 싶은 음악 활동을 정합니다(21~23차시).',
    refs: {},
    lessons,
  });
})();
