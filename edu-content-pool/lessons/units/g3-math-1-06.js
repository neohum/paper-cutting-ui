/* 3학년 1학기 6. 분수와 소수 — 단위 파일(차시 11개 가운데 1차시는 기존 차시 g3-math-fraction).
 * 흐름: 똑같이 나누고 분수로 나타내기(1, 기존) → 단위분수가 모인 분수(2) → 1/10과 0.1(3) → 똑같이 나누어 분수 읽고 쓰기(4)
 *      → 그림·수직선·말로 분수 연결(5) → 생활 속 양을 분수로(6) → 1과 1보다 작은 분수(7) → 분모가 같은 분수 크기 견주기(8)
 *      → 단위분수 크기 견주기(9) → 수직선으로 크기 설명(10) → 0.1씩 세어 소수 한 자리 수(11).
 * 성취기준은 units-map 의 [4수01-09]~[4수01-12]. units-index plan 의 제목·topic 순서와 교과서식 순서가 어긋난다: plan 은 단위분수·진분수·가분수·대분수(2·7차시),
 *   소수(3·11차시), 분수 읽고 쓰기(4~6차시), 크기 비교(8~10차시)가 섞여 있다. 확인 필요: 사용자 지시(2학기 g3-math-2-04 분수와 겹치지 않게)에 따라
 *   가분수·대분수는 이 단원에서 다루지 않고 7차시에서 '1과 같은 분수, 1보다 작은 분수'까지만 한다(1보다 큰 분수는 2학기로 미룸). 소수는 0.1 단위(소수 한 자리)만.
 * 교구 메모: 기존 1차시(g3-math-fraction)가 쓴 피자·띠 똑같이 나누기·분수 쓰기·3/4·5/8·2/5·3/7·4/6 같은 값과 겹치지 않게 분모·분자·상황을 바꿨다.
 */
(function () {
const UID = 'g3-math-1-06', CU = 'g3-수학-1학기-6', UT = '6. 분수와 소수';
const BLANK = '______';
const two = (n) => String(n).padStart(2, '0');
const TAIL = ', with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.';
const ill = (desc, text, extra) => ({
  prompt: 'Layered paper-cut illustration of ' + desc + TAIL,
  scene: { viewBox: [480, 270], layers: [
    { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 110, y: 52 }, { motif: 'hills', y: 206 },
    extra || { motif: 'house', x: 120, y: 214 }, { motif: 'tree', x: 370, y: 216 },
    { motif: 'text', x: 240, y: 142, text, size: 22 },
  ] },
});
const mk = (n, std, o) => ({
  id: `${UID}-${two(n)}`, schema: 'edu-lesson.v1', catalog: { unit: CU, lesson: n },
  grade: 3, subject: '수학', unitTitle: UT, title: o.title, objective: o.objective, standards: std, minutes: 40,
  formats: ['chromebook', 'projector', 'print'], illustration: ill(o.ill, o.scene, o.extra),
  stages: [
    { id: 'intro', title: '도입', minutes: 7, teacher: o.introT, student: o.introS },
    { id: 'main', title: '전개', minutes: 26, activities: o.acts },
    { id: 'wrapup', title: '정리', minutes: 7, teacher: o.wrapT, exitTicket: o.exit.concat([{ type: 'mood', prompt: '오늘 공부는 어땠나요?' }]) },
  ],
  worksheet: o.ws, differentiation: o.diff, teacherNotes: o.notes,
});
// 분수 띠·피자 색칠 / 쓰기 / 칼집 옮기기 단계 옵션 (shape 는 문항마다)
const FR = { easy: { showTerms: true }, base: {}, challenge: { hideFraction: true } };
const FW = { easy: { write: true, showTerms: true }, base: { write: true }, challenge: { write: true } };
const FC = { easy: { freeCut: true }, base: { freeCut: true }, challenge: { freeCut: true, ticks: false } };
const FP = { easy: {}, base: {}, challenge: {} };
const col = (prompt, shape, den, num, extra) => Object.assign({ prompt, toolOptions: { shape }, target: { den, num } }, extra || {});
const wr = (prompt, shape, n, k, den, num, extra) => Object.assign({ prompt, state: { n, colored: Array.from({ length: k }, (_, i) => i) }, toolOptions: { shape, write: true }, target: { den, num } }, extra || {});
const cut = (prompt, shape, den, extra) => Object.assign({ prompt, toolOptions: { shape, freeCut: true, cutsCount: den - 1 }, target: { den } }, extra || {});
// 0~1 수직선(분수·소수): 쉬움은 모든 눈금 수, 기본·도전은 양 끝 수만
const NL = (mode, extra) => ({
  easy: Object.assign({ mode, min: 0, max: 1, step: 1, labels: 'all' }, extra),
  base: Object.assign({ mode, min: 0, max: 1, step: 1, labels: 'ends' }, extra),
  challenge: Object.assign({ mode, min: 0, max: 1, step: 1, labels: 'ends' }, extra),
});
const NLF = (mode, extra) => NL(mode, Object.assign({ format: 'frac' }, extra));
const NLD = (mode, extra) => NL(mode, Object.assign({ format: 'dec', sub: 10 }, extra));
const plF = (prompt, sub, points) => ({ prompt, toolOptions: { sub, count: points.length }, target: { points } });
const rdF = (prompt, sub, marks, choices, pick, extra) => Object.assign({ prompt, toolOptions: { sub, marks, choices, question: '알맞은 것을 고르세요.' }, target: { pick } }, extra || {});
const rdD = (prompt, marks, value, extra) => Object.assign({ prompt, toolOptions: { marks: [marks], question: '점이 나타내는 소수를 쓰세요.' }, target: { value, form: 'dec' } }, extra || {});
const fig = (shape, n, k, caption, extra) => Object.assign({ options: { shape, frame: true }, state: { n, colored: Array.from({ length: k }, (_, i) => i) }, caption }, extra || {});
PaperLessons.registerUnit({
  id: UID, schema: 'edu-unit.v1', catalogUnit: CU, grade: 3, subject: '수학', unitTitle: UT,
  flow: '1차시(기존 차시 g3-math-fraction)에서 전체를 똑같이 나누고 부분을 분수로 나타내는 것을 한 뒤, 2차시에서는 한 조각 1/n(단위분수)이 몇 개 모였는지 세어 분수를 만듭니다. 3차시에 전체를 10으로 나눈 한 칸 1/10을 0.1로 쓰는 소수를 처음 만나고, 4~6차시에서 칼집을 옮겨 똑같이 나누며 분수를 읽고 쓰고, 그림·수직선·말을 오가며 생활 속 양을 분수로 말합니다. 7차시는 분자와 분모가 같으면 1, 분자가 분모보다 작으면 1보다 작은 분수임을 알고, 8~10차시에서 분모가 같은 분수와 단위분수의 크기를 수직선으로 견주어 까닭을 말합니다. 11차시에서 0.1씩 세어 소수 한 자리 수를 읽고 쓰며 분수와 이어 단원을 정리합니다.',
  refs: { 1: 'g3-math-fraction' },
  lessons: [
    mk(2, ['[4수01-10]'], {
      title: '한 조각 단위분수가 몇 개 모였는지 세어 분수 만들기',
      objective: '전체를 똑같이 나눈 한 조각이 단위분수 1/n임을 알고, 단위분수가 몇 개 모였는지 세어 분수로 나타내며 분자가 분모보다 작은 분수는 1보다 작음을 말할 수 있다.',
      ill: 'a long paper ribbon cut into five equal pieces with three pieces tied together by a bow, ', scene: '단위분수가 모이면',
      extra: { motif: 'flower', x: 110, y: 214 },
      introT: '"리본을 똑같이 5도막으로 잘랐어요. 한 도막은 전체의 얼마일까요?" 하고 5분의 1이라고 말하게 한 뒤 "그 도막 세 개를 이어 붙이면 전체의 얼마일까요?" 하고 묻는다. 3을 분모에 써서 3분의 5라고 말하는 학생에게는 전체가 몇 도막으로 나뉘었는지부터 다시 세게 한다.',
      introS: '똑같이 5도막으로 자른 리본에서 한 도막, 두 도막, 세 도막이 각각 전체의 얼마일지 말해 봐요.',
      acts: [
        { id: 'a1', title: '활동 1. 한 조각을 여러 개 모아 분수 만들기', minutes: 9, tool: 'fraction',
          task: '단위분수 한 조각의 몇 배인지 세어서 색칠해요. 5분의 1이 3개면 5분의 3이에요.',
          teacher: '"5분의 1이 3개 모이면 어떻게 쓸까요?" 모인 조각 수가 분자가 되고 전체를 나눈 수가 분모가 된다고 말하게 한다. 분자와 분모를 바꾸어 3분의 5로 쓴 학생에게는 전체를 몇 조각으로 나눴는지부터 읽게 한다.',
          levels: FR,
          items: [
            col('종이띠를 똑같이 5조각으로 나누었어요. 5분의 1을 3개 모아 색칠해 보세요.', 'strip', 5, 3,
              { predict: { q: '5분의 1을 3개 모으면 어떤 분수가 될까요?', options: ['3분의 5', '5분의 3', '8분의 1'], answer: 1 }, conclude: '5분의 1이 3개 모이면 5분의 3이에요.' }),
            col('피자를 똑같이 8조각으로 나누었어요. 8분의 1을 3개 모아 색칠해 보세요.', 'pizza', 8, 3),
            col('종이띠를 똑같이 9조각으로 나누었어요. 9분의 1을 4개 모아 색칠해 보세요.', 'strip', 9, 4),
            col('더 해 보기: 피자를 똑같이 6조각으로 나누었어요. 6분의 1을 5개 모아 색칠해 보세요.', 'pizza', 6, 5, { extra: true }),
          ] },
        { id: 'a2', title: '활동 2. 한 조각만 색칠해 단위분수 만들기', minutes: 9, tool: 'fraction',
          task: '전체를 똑같이 나눈 조각 중 하나만 색칠하면 분자가 1인 단위분수가 돼요.',
          teacher: '"분수에서 분자가 1이면 한 조각이라는 뜻이에요. 전체를 4조각으로 나눈 한 조각은 어떻게 쓸까요?" 4분의 1이라고 말하게 한다. 조각 수와 분수를 헷갈려 4조각 중 1조각을 "1분의 4"라고 쓴 학생에게는 분모가 전체 조각 수임을 말로 정리한다.',
          levels: FR,
          items: [
            col('긴 빵을 똑같이 4조각으로 나누어 한 조각만 색칠해 보세요.', 'strip', 4, 1),
            col('케이크를 똑같이 7조각으로 나누어 한 조각만 색칠해 보세요.', 'pizza', 7, 1),
            col('리본을 똑같이 10도막으로 나누어 한 도막만 색칠해 보세요.', 'strip', 10, 1),
            col('더 해 보기: 둥근 쿠키를 똑같이 12조각으로 나누어 한 조각만 색칠해 보세요.', 'pizza', 12, 1, { extra: true }),
          ] },
        { id: 'a3', title: '활동 3. 색칠한 조각을 세어 분수로 쓰기', minutes: 8, tool: 'fraction',
          task: '색칠된 조각이 단위분수 몇 개인지 세어 분모와 분자를 정하고 분수로 써요.',
          teacher: '"색칠한 조각이 몇 개인가요? 전체는 몇 조각으로 나뉘었나요?" 두 수를 차례로 말하게 한 뒤 분수로 쓴다. 색칠하지 않은 조각 수를 분자로 쓴 학생에게는 "색칠한 부분을 나타내는 거예요"라고 짚는다.',
          levels: FW,
          items: [
            wr('색칠한 부분은 종이띠 전체의 몇 분의 몇인가요? 분자와 분모를 정해 보세요.', 'strip', 5, 4, 5, 4),
            wr('색칠한 피자 조각은 전체의 몇 분의 몇인지 분수로 써 보세요.', 'pizza', 9, 2, 9, 2),
            wr('색칠한 부분을 분수로 쓰세요. 단위분수가 몇 개인지 세어 봐요.', 'strip', 10, 7, 10, 7),
            wr('더 해 보기: 색칠한 쿠키는 전체의 몇 분의 몇인지 써 보세요.', 'pizza', 12, 5, 12, 5, { extra: true }),
          ] },
      ],
      wrapT: '"7분의 1이 4개 모이면 어떤 분수일까요? 그 분수는 1보다 클까요, 작을까요?" 하고 묻는다. 모인 조각 수가 전체 조각 수보다 적으면 1(전체)보다 작다는 말을 이끌어 낸다. 출구 1번에서 분자와 분모를 바꾼 학생은 다음 시간 도입에서 전체 조각 수부터 센다.',
      exit: [
        { type: 'choice', prompt: '8분의 1이 5개 모이면 어떤 분수가 될까요?', options: ['5분의 8', '8분의 5', '13분의 8'], answer: 1, explain: '전체를 8조각으로 나눈 것 중 5개가 모였으니 8분의 5예요.' },
        { type: 'choice', prompt: '3분의 2는 1(전체)보다 작을까요, 클까요?', options: ['1보다 작다', '1과 같다', '1보다 크다'], answer: 0, explain: '전체 3조각 중 2조각이라서 전체인 1보다 작아요.' },
        { type: 'tool', tool: 'fraction', options: { shape: 'pizza' }, prompt: '피자를 똑같이 6조각으로 나누어 한 조각만 색칠하세요.', target: { den: 6, num: 1 } },
      ],
      ws: { title: '단위분수가 모인 분수', items: [
        { type: 'figure', prompt: '색칠한 부분은 전체의 몇 분의 몇인지 오른쪽 틀에 분수로 쓰세요.', tool: 'fraction', figures: [
          fig('strip', 6, 4, '단위분수 ' + BLANK + '개'), fig('pizza', 7, 3, '단위분수 ' + BLANK + '개'), fig('strip', 9, 5, '단위분수 ' + BLANK + '개')], answer: '4/6, 3/7, 5/9' },
        { type: 'table', prompt: '단위분수가 모인 분수를 써서 빈칸을 채우세요.', columns: ['모은 것', '1/4이 3개', '1/6이 5개', '1/9이 2개'], cells: [['분수', '3/4', '', '']], answer: '5/6, 2/9' },
        { type: 'choice', prompt: '전체를 똑같이 7로 나눈 것 중 하나를 나타내는 분수에 ○ 하세요.', options: ['1/7', '7/1', '1/8'], answer: '1/7' },
        { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '9분의 1이 4개 모이면 ______분의 ______이에요.', answer: '9, 4' },
        { type: 'short', prompt: '5분의 3이 1보다 작은 까닭을 조각 수로 써 보세요.' },
      ], easy: { note: '분모는 전체를 나눈 조각 수, 분자는 모인 조각 수예요.', items: [
        { type: 'figure', prompt: '색칠한 부분을 분수로 쓰세요.', tool: 'fraction', figures: [
          fig('strip', 4, 3, BLANK + '분의 ' + BLANK), fig('pizza', 6, 5, BLANK + '분의 ' + BLANK)], answer: '3/4, 5/6' },
        { type: 'table', prompt: '빈칸에 알맞은 수를 쓰세요.', columns: ['모은 것', '1/5이 2개', '1/5이 4개'], cells: [['분수', '2/5', '']], answer: '4/5' },
        { type: 'choice', prompt: '8분의 1이 3개 모인 분수에 ○ 하세요.', options: ['3/8', '8/3'], answer: '3/8' },
        { type: 'draw', prompt: '종이띠를 똑같이 6칸으로 나누고 6분의 1을 4개 색칠한 뒤 분수로 써 보세요.' },
      ] } },
      diff: { easy: '분자·분모가 무엇인지 글자로 보이는 띠에서 색칠하고 세어요.', base: '분수가 보이는 띠와 피자에서 단위분수를 모으고 분수로 써요.', challenge: '분수 읽기가 숨겨진 띠에서 모은 조각 수를 직접 세어 분수를 만들어요.' },
      notes: '자주 보이는 어려움: ① 분자와 분모를 바꿔 쓴다(5분의 3을 3/5 대신 5/3으로) → 분모는 전체를 똑같이 나눈 조각 수. ② 모은 조각 수 대신 색칠하지 않은 조각 수를 분자로 쓴다 → 색칠한 부분이 분자. ③ 단위분수를 분자가 1인 분수로만 알고 "하나만 있는 조각"의 뜻을 놓친다 → 한 조각이 전체의 1/n임을 말로 확인한다.',
    }),
    mk(3, ['[4수01-12]'], {
      title: '10칸으로 나눈 한 칸 1/10을 0.1로 쓰기',
      objective: '전체를 똑같이 10으로 나눈 한 조각 1/10을 0.1로 쓰고, 십분의 몇인 분수를 소수 한 자리 수로 읽고 쓸 수 있다.',
      ill: 'a ten-section paper chocolate bar and a number line from zero to one with ten small marks, ', scene: '1/10은 0.1',
      extra: { motif: 'star', x: 120, y: 214 },
      introT: '"초콜릿 한 판을 똑같이 10칸으로 나누었어요. 한 칸은 전체의 얼마일까요?" 10분의 1이라고 답하면 "이 수를 소수로는 0.1이라고 써요. 영 점 일이라고 읽어요"라고 알려 준다. 0.1을 "영 일"이나 "공 점 일"로 읽는 학생에게는 점을 읽는 말(점)을 짚어 준다.',
      introS: '초콜릿 한 칸이 전체의 몇 분의 몇인지 말하고, 그 수를 점이 있는 수로도 쓸 수 있을지 생각해 봐요.',
      acts: [
        { id: 'a1', title: '활동 1. 수직선의 점을 소수로 읽기', minutes: 9, tool: 'numberline',
          task: '0부터 1까지를 10칸으로 나눈 수직선이에요. 점이 나타내는 수를 소수로 써요.',
          teacher: '"작은 눈금 한 칸은 얼마일까요? 0에서 세 번째 눈금이면 몇이에요?" 한 칸이 0.1이고 세 칸이면 0.3이라고 말하게 한다. 눈금 선의 개수를 세어 0.4를 "0.5"로 읽은 학생에게는 0에서 칸을 센다고 짚는다.',
          levels: NLD('read'),
          items: [
            rdD('1 m 리본에 표시한 점이에요. 점이 나타내는 수를 소수로 써 보세요.', 0.3, 0.3),
            rdD('물이 담긴 병의 눈금에 점을 찍었어요. 나타내는 수를 소수로 써 보세요.', 0.7, 0.7),
            rdD('0부터 1까지를 10칸으로 나눈 길에서 점이 찍힌 곳을 소수로 써 보세요.', 0.4, 0.4),
            rdD('더 해 보기: 막대 위의 점이 나타내는 소수를 써 보세요.', 0.9, 0.9, { extra: true }),
          ] },
        { id: 'a2', title: '활동 2. 소수만큼 칸을 색칠하기', minutes: 9, tool: 'fraction',
          task: '10칸으로 나눈 띠에서 소수가 나타내는 칸 수만큼 색칠해요. 0.6은 10분의 6이에요.',
          teacher: '"0.6은 0.1이 몇 개 모인 수일까요?" 6개라고 말하게 한 뒤 10칸 중 6칸을 색칠하게 하고 10분의 6과 같다고 읽는다. 0.6을 6칸이 아니라 0칸+6칸으로 센 학생에게는 0.1 한 칸이 1/10임을 다시 보여 준다.',
          levels: { easy: { shape: 'strip', min: 10, max: 10, startN: 10, showTerms: true }, base: { shape: 'strip', min: 10, max: 10, startN: 10 }, challenge: { shape: 'strip', min: 10, max: 10, startN: 10, hideFraction: true } },
          items: [
            col('0.6만큼 색칠해 보세요.', 'strip', 10, 6),
            col('물통에 0.2만큼 물이 차 있어요. 0.2만큼 색칠해 보세요.', 'strip', 10, 2),
            col('초콜릿을 0.8만큼 먹었어요. 먹은 양만큼 색칠해 보세요.', 'strip', 10, 8,
              { conclude: '0.8은 0.1이 8개 모인 수이고 10분의 8과 같아요.' }),
            col('더 해 보기: 색종이를 0.5만큼 칠했어요. 칠한 칸을 색칠해 보세요.', 'strip', 10, 5, { extra: true }),
          ] },
        { id: 'a3', title: '활동 3. 소수를 수직선에 놓기', minutes: 8, tool: 'numberline',
          task: '소수를 수직선 위에 점으로 놓아요. 작은 눈금 하나는 0.1이에요.',
          teacher: '"0.5는 0과 1 사이 어디에 놓을까요?" 한가운데라고 답하게 하고 작은 눈금 다섯 번째임을 센다. 0.1을 1 자리에 놓은 학생에게는 0과 1 사이를 10칸으로 나눈 한 칸이 0.1임을 짚는다.',
          levels: NLD('place'),
          items: [
            { prompt: '0.5가 되는 곳에 점을 놓아 보세요.', toolOptions: { count: 1 }, target: { points: [0.5] } },
            { prompt: '0.1이 되는 곳에 점을 놓아 보세요.', toolOptions: { count: 1 }, target: { points: [0.1] } },
            { prompt: '가는 0.3, 나는 0.8이 되는 곳에 놓아 보세요.', toolOptions: { count: 2 }, target: { points: [0.3, 0.8] } },
            { prompt: '더 해 보기: 가는 0.6, 나는 0.9가 되는 곳에 놓아 보세요.', toolOptions: { count: 2 }, target: { points: [0.6, 0.9] }, extra: true },
          ] },
      ],
      wrapT: '"10분의 7을 소수로 쓰면 어떻게 될까요? 어떻게 알았나요?" 0.1이 7개라서 0.7이라는 설명을 듣는다. 출구 1번에서 0.01을 고른 학생은 점 아래 첫째 자리가 10분의 1을 뜻함을 다음 시간에 수직선에서 다시 센다.',
      exit: [
        { type: 'choice', prompt: '1/10을 소수로 쓰면 어떻게 될까요?', options: ['0.01', '0.1', '1.0'], answer: 1, explain: '10분의 1은 0.1이라고 쓰고 영 점 일이라고 읽어요.' },
        { type: 'choice', prompt: '10분의 7을 소수로 쓰면 무엇일까요?', options: ['7.0', '0.7', '0.07'], answer: 1, explain: '10분의 7은 0.1이 7개라서 0.7이에요.' },
        { type: 'tool', tool: 'numberline', options: { mode: 'read', min: 0, max: 1, step: 1, sub: 10, format: 'dec', labels: 'ends', marks: [0.6], question: '점이 나타내는 소수를 쓰세요.' }, prompt: '수직선의 점이 나타내는 소수를 쓰세요.', target: { value: 0.6, form: 'dec' } },
      ],
      ws: { title: '1/10과 0.1', items: [
        { type: 'figure', prompt: '색칠한 부분을 분수와 소수로 쓰세요.', tool: 'fraction', figures: [
          fig('strip', 10, 3, BLANK + '/10 = 0.' + BLANK), fig('strip', 10, 7, BLANK + '/10 = 0.' + BLANK)], answer: '3/10 = 0.3, 7/10 = 0.7' },
        { type: 'table', prompt: '분수를 소수로 바꾸어 쓰세요.', columns: ['분수', '1/10', '3/10', '5/10', '9/10'], cells: [['소수', '0.1', '', '', '']], answer: '0.3, 0.5, 0.9' },
        { type: 'choice', prompt: '0.4를 읽은 것으로 알맞은 것에 ○ 하세요.', options: ['영 사', '영 점 사', '공 사'], answer: '영 점 사' },
        { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '1/10 = ______이고, 0.1이 6개 모이면 ______이에요.', answer: '0.1, 0.6' },
        { type: 'short', prompt: '0.1이 5개 모인 수를 분수로도 쓰고 까닭을 써 보세요.' },
      ], easy: { note: '작은 눈금 한 칸은 0.1이에요. 0에서 칸을 세어요.', items: [
        { type: 'figure', prompt: '색칠한 부분을 소수로 쓰세요.', tool: 'fraction', figures: [fig('strip', 10, 2, '0.' + BLANK)], answer: '0.2' },
        { type: 'table', prompt: '빈칸에 알맞은 소수를 쓰세요.', columns: ['분수', '1/10', '2/10', '4/10'], cells: [['소수', '0.1', '', '']], answer: '0.2, 0.4' },
        { type: 'choice', prompt: '10분의 1과 같은 수에 ○ 하세요.', options: ['0.1', '1.0'], answer: '0.1' },
        { type: 'draw', prompt: '10칸으로 나눈 띠를 그리고 0.7만큼 색칠해 보세요.' },
      ] } },
      diff: { easy: '수직선 눈금마다 0.1, 0.2…가 모두 적혀 있어서 세어 읽어요.', base: '양 끝 수 0과 1만 보이는 수직선에서 칸을 세어 소수를 읽어요.', challenge: '분수 읽기가 숨겨진 띠에서 소수가 몇 칸인지 스스로 정해 색칠해요.' },
      notes: '자주 보이는 어려움: ① 0.1을 영 일이나 공 점 일로 읽는다 → 점을 "점"이라고 읽는다. ② 0.3과 0.03을 헷갈린다 → 점 아래 첫째 자리는 10분의 1 칸. ③ 눈금 선을 세어 한 칸 더 많게 읽는다 → 0에서 칸을 센다. 이 차시는 0.1 단위(소수 한 자리)까지만 다룬다.',
    }),
    mk(4, ['[4수01-09]'], {
      title: '칼집을 옮겨 똑같이 나누고 분수로 읽고 쓰기',
      objective: '전체를 똑같이 나누도록 칼집을 옮기고, 나눈 것 중 일부를 몇 분의 몇으로 읽고 쓸 수 있다.',
      ill: 'a paper loaf of bread and a round pie cut with a knife into equal parts on a bakery table, ', scene: '똑같이 나누어 분수로',
      extra: { motif: 'house', x: 110, y: 214 },
      introT: '"긴 빵을 세 친구가 똑같이 나눠 먹으려 해요. 칼은 어디에 대야 할까요?" 하고 묻고 칼집이 고르지 않은 빵과 고른 빵을 보여 준다. 조각 수만 같으면 똑같이 나눈 것이라고 말하는 학생에게는 조각의 크기를 겹쳐 보게 한다.',
      introS: '조각 수는 같아도 크기가 다르면 똑같이 나눈 것이 아닐 수 있어요. 그 까닭을 짝에게 말해 봐요.',
      acts: [
        { id: 'a1', title: '활동 1. 칼집을 옮겨 똑같이 나누기', minutes: 9, tool: 'fraction',
          task: '칼집 손잡이를 옮겨 전체를 똑같이 나누어요. 조각의 크기가 모두 같아야 해요.',
          teacher: '"칼집이 3개면 몇 조각이 될까요?" 칼집 수보다 조각 수가 하나 많다는 것을 짚는다. 눈금을 세지 않고 눈으로만 맞추려는 학생에게는 조각마다 눈금이 몇 칸인지 세어 보게 한다.',
          levels: FC,
          items: [
            cut('긴 빵을 똑같이 6조각으로 나누어 보세요.', 'strip', 6),
            cut('둥근 파이를 똑같이 8조각으로 나누어 보세요.', 'pizza', 8),
            cut('종이띠를 똑같이 8조각으로 나누어 보세요. 칼집이 몇 개 필요할까요?', 'strip', 8),
            cut('더 해 보기: 둥근 쿠키를 똑같이 12조각으로 나누어 보세요.', 'pizza', 12, { extra: true }),
          ] },
        { id: 'a2', title: '활동 2. 읽은 분수대로 색칠하기', minutes: 9, tool: 'fraction',
          task: '몇 분의 몇이라고 말한 분수를 듣고, 전체를 그만큼으로 나누어 색칠해요.',
          teacher: '"7분의 3이라고 읽는 분수는 전체를 몇 조각으로 나눈 것 중 몇 조각일까요?" 분모 7이 나눈 수, 분자 3이 색칠한 수라고 말하게 한다. 3분의 7로 거꾸로 나눈 학생에게는 읽는 순서가 분모, 분자 순임을 짚는다.',
          levels: FR,
          items: [
            col('7분의 3만큼 색칠해 보세요.', 'strip', 7, 3),
            col('9분의 5만큼 색칠해 보세요.', 'pizza', 9, 5),
            col('10분의 9만큼 색칠해 보세요. 칠하지 않은 조각은 몇 개일까요?', 'strip', 10, 9),
            col('더 해 보기: 12분의 7만큼 색칠해 보세요.', 'pizza', 12, 7, { extra: true }),
          ] },
        { id: 'a3', title: '활동 3. 색칠한 부분을 분수로 쓰기', minutes: 8, tool: 'fraction',
          task: '이미 색칠된 그림에서 분모와 분자를 정해 분수로 써요.',
          teacher: '"전체는 몇 조각이고 색칠한 조각은 몇 조각일까요?" 먼저 분모를, 다음에 분자를 정하게 한다. 색칠하지 않은 조각까지 세어 분자로 쓴 학생에게는 "색칠한 부분만 분수로 나타내요"라고 짚는다.',
          levels: FW,
          items: [
            wr('색칠한 부분은 전체의 몇 분의 몇인가요? 분수로 써 보세요.', 'strip', 8, 6, 8, 6),
            wr('피자에서 색칠한 부분을 분수로 나타내 보세요.', 'pizza', 11, 4, 11, 4),
            wr('색칠한 한 조각을 분수로 나타내 보세요.', 'strip', 6, 1, 6, 1),
            wr('더 해 보기: 색칠한 부분을 분수로 써 보세요.', 'pizza', 10, 3, 10, 3, { extra: true }),
          ] },
      ],
      wrapT: '"똑같이 나눈 것 중의 몇 조각을 분수로 쓸 때 분모와 분자는 각각 무엇을 나타내나요?" 분모는 전체를 똑같이 나눈 수, 분자는 색칠한 수라는 말을 짝에게 하게 한다. 출구 3번에서 5를 고른 학생은 분모가 어느 수인지 다음 시간에 짚는다.',
      exit: [
        { type: 'choice', prompt: '전체를 똑같이 7로 나눈 것 중의 4를 분수로 쓰면 어떻게 될까요?', options: ['7분의 4', '4분의 7', '11분의 4'], answer: 0, explain: '나눈 수 7이 분모, 색칠한 수 4가 분자라서 7분의 4예요.' },
        { type: 'tool', tool: 'fraction', options: { shape: 'strip', judge: true }, state: { cuts: [0.25, 0.5, 0.75] }, prompt: '이 종이띠는 똑같이 나누었나요? 눈으로 보고 고르세요.', target: { equal: true } },
        { type: 'choice', prompt: '5분의 3에서 분모는 어느 수일까요?', options: ['3', '5', '8'], answer: 1, explain: '분모는 전체를 똑같이 나눈 수라서 5예요.' },
      ],
      ws: { title: '똑같이 나누어 분수 쓰기', items: [
        { type: 'figure', prompt: '색칠한 부분은 전체의 몇 분의 몇인지 오른쪽 틀에 분수로 쓰세요.', tool: 'fraction', figures: [
          fig('strip', 8, 5, BLANK + '분의 ' + BLANK), fig('pizza', 10, 7, BLANK + '분의 ' + BLANK), fig('strip', 6, 2, BLANK + '분의 ' + BLANK)], answer: '8분의 5, 10분의 7, 6분의 2' },
        { type: 'figure', prompt: '주어진 분수만큼 색칠하세요.', tool: 'fraction', figures: [
          fig('strip', 9, 0, '9분의 4'), fig('pizza', 7, 0, '7분의 6')], answer: '9칸 중 4칸, 7조각 중 6조각' },
        { type: 'choice', prompt: '똑같이 나눈 것에 ○ 하세요.', options: ['조각 크기가 모두 같다', '조각 수만 같다', '한쪽만 크다'], answer: '조각 크기가 모두 같다' },
        { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '9분의 5에서 분모는 ______, 분자는 ______이에요.', answer: '9, 5' },
        { type: 'short', prompt: '칼집이 4개이면 몇 조각으로 나뉘는지 쓰고 까닭을 써 보세요.' },
      ], easy: { note: '분모는 나눈 조각 수, 분자는 색칠한 조각 수예요.', items: [
        { type: 'figure', prompt: '색칠한 부분을 분수로 쓰세요.', tool: 'fraction', figures: [fig('strip', 5, 3, BLANK + '분의 ' + BLANK), fig('pizza', 6, 4, BLANK + '분의 ' + BLANK)], answer: '5분의 3, 6분의 4' },
        { type: 'table', prompt: '빈칸에 알맞은 수를 쓰세요.', columns: ['분수', '나눈 수(분모)', '색칠한 수(분자)'], cells: [['4분의 3', '4', ''], ['7분의 2', '', '']], answer: '3, 7, 2' },
        { type: 'choice', prompt: '분수에서 분모는 무엇을 나타낼까요?', options: ['색칠한 수', '전체를 똑같이 나눈 수'], answer: '전체를 똑같이 나눈 수' },
        { type: 'draw', prompt: '종이띠를 똑같이 5칸으로 나누고 5분의 2만큼 색칠해 보세요.' },
      ] } },
      diff: { easy: '분자·분모의 뜻이 글자로 보이는 그림에서 칼집을 옮기고 색칠해요.', base: '눈금 24칸이 보이는 그림에서 칼집을 옮겨 똑같이 나누고 분수를 써요.', challenge: '눈금이 없는 그림에서 어림해 똑같이 나누고 분수 읽기를 숨겨서 색칠해요.' },
      notes: '자주 보이는 어려움: ① 조각 수만 맞추고 크기가 다르게 나눈다 → 조각마다 눈금 칸 수를 센다. ② 칼집 수와 조각 수를 같게 본다(띠는 칼집이 조각 수보다 하나 적다) → 직접 칼집을 세어 본다. ③ 분모와 분자를 거꾸로 쓴다 → 분모가 먼저, 아래에.',
    }),
    mk(5, ['[4수01-09]'], {
      title: '그림 · 수직선 · 말로 같은 분수 나타내기',
      objective: '같은 분수를 띠 그림, 수직선의 점, 읽는 말로 나타내고 서로 알맞게 짝지을 수 있다.',
      ill: 'a paper number line from zero to one with small flags, a ribbon strip and a speech bubble showing the same fraction, ', scene: '그림·수직선·말',
      extra: { motif: 'mountain', x: 110, y: 214 },
      introT: '"6분의 4를 그림으로도, 수직선으로도, 말로도 나타낼 수 있어요. 수직선에서는 0과 1 사이를 몇 칸으로 나눠야 할까요?" 하고 묻는다. 수직선 칸 수를 세지 않고 6분의 4를 4 자리에 놓는 학생에게는 0과 1 사이가 6칸임을 세어 보게 한다.',
      introS: '0과 1 사이를 똑같이 6칸으로 나눈 수직선에서 6분의 4가 어디쯤일지 짝과 말해 봐요.',
      acts: [
        { id: 'a1', title: '활동 1. 수직선의 점을 분수로 읽기', minutes: 9, tool: 'numberline',
          task: '0과 1 사이를 똑같이 나눈 수직선이에요. 점이 나타내는 분수를 읽는 말로 골라요.',
          teacher: '"0과 1 사이를 몇 칸으로 나누었나요? 점은 0에서 몇 번째 눈금에 있나요?" 칸 수가 분모, 점의 번째가 분자라고 말하게 한다. "4분의 6"으로 거꾸로 읽은 학생에게는 분모가 나눈 칸 수임을 짚는다.',
          levels: NLF('read'),
          items: [
            rdF('수직선의 점이 나타내는 분수를 읽는 말로 골라 보세요.', 6, [4 / 6], ['6분의 4', '4분의 6', '10분의 4'], 0),
            rdF('도서관 가는 길을 8칸으로 나누고 표시한 점이에요. 알맞은 분수를 고르세요.', 8, [3 / 8], ['11분의 8', '8분의 3', '3분의 8'], 1),
            rdF('줄넘기 줄 9칸 중 점이 찍힌 곳이에요. 알맞은 분수를 고르세요.', 9, [5 / 9], ['5분의 9', '14분의 9', '9분의 5'], 2),
            rdF('더 해 보기: 5칸으로 나눈 수직선의 점이 나타내는 분수를 고르세요.', 5, [2 / 5], ['5분의 2', '2분의 5', '7분의 5'], 0, { extra: true }),
          ] },
        { id: 'a2', title: '활동 2. 분수를 수직선에 놓기', minutes: 9, tool: 'numberline',
          task: '말로 들은 분수를 수직선에 점으로 놓아요. 분모가 0과 1 사이를 나눈 칸 수예요.',
          teacher: '"4분의 3은 0과 1 사이를 4칸으로 나눈 것 중 몇 번째 눈금일까요?" 세 번째라고 말하게 한다. 점을 4번째 눈금에 놓은 학생에게는 0에서 몇 칸 간 곳인지 되묻는다.',
          levels: NLF('place'),
          items: [
            plF('4분의 3이 되는 곳에 점을 놓아 보세요.', 4, ['3/4']),
            plF('5분의 1이 되는 곳에 점을 놓아 보세요.', 5, ['1/5']),
            plF('8분의 5가 되는 곳에 점을 놓아 보세요.', 8, ['5/8']),
            Object.assign(plF('더 해 보기: 가는 6분의 1, 나는 6분의 5가 되는 곳에 놓아 보세요.', 6, ['1/6', '5/6']), { extra: true }),
          ] },
        { id: 'a3', title: '활동 3. 수직선에서 읽은 분수를 그림으로', minutes: 8, tool: 'fraction',
          task: '수직선에서 본 분수를 종이띠나 피자에 색칠해 같은 분수를 그림으로 나타내요.',
          teacher: '"수직선에서 6분의 4 지점이었어요. 그림에서는 6조각 중 몇 조각을 색칠할까요?" 4조각이라고 말하게 한다. 수직선 칸 수와 조각 수가 같은 것을 확인하고 그림에서는 칸이 조각, 점이 색칠의 끝임을 짚는다.',
          levels: FR,
          items: [
            col('수직선에서 6분의 4 지점이었어요. 종이띠에 같은 분수만큼 색칠해 보세요.', 'strip', 6, 4),
            col('수직선에서 8분의 7 지점이었어요. 피자에 같은 분수만큼 색칠해 보세요.', 'pizza', 8, 7),
            col('수직선에서 9분의 2 지점이었어요. 종이띠에 같은 분수만큼 색칠해 보세요.', 'strip', 9, 2),
            col('더 해 보기: 수직선에서 4분의 3 지점이었어요. 피자에 같은 분수만큼 색칠해 보세요.', 'pizza', 4, 3, { extra: true }),
          ] },
      ],
      wrapT: '"같은 분수를 그림, 수직선, 말로 나타낼 때 같은 점은 무엇이었나요?" 0과 1 사이(전체)를 똑같이 나눈 수가 분모로 같다는 말을 이끌어 낸다. 출구 2번에서 5분의 2를 5 자리에 놓은 학생은 0에서 몇 칸 간 곳인지 다음 시간에 센다.',
      exit: [
        { type: 'choice', prompt: '0과 1 사이를 똑같이 4칸으로 나눈 수직선에서 세 번째 눈금이 나타내는 분수는 무엇일까요?', options: ['4분의 3', '3분의 4', '3분의 1'], answer: 0, explain: '4칸으로 나눈 것 중 3칸이라서 4분의 3이에요.' },
        { type: 'tool', tool: 'numberline', options: { mode: 'place', min: 0, max: 1, step: 1, sub: 3, format: 'frac', labels: 'ends', count: 1 }, prompt: '3분의 2가 되는 곳에 점을 놓아 보세요.', target: { points: ['2/3'] } },
        { type: 'choice', prompt: '3/8에서 분모 8은 무엇을 나타낼까요?', options: ['색칠한 조각 수', '전체를 똑같이 나눈 수', '분수의 크기'], answer: 1, explain: '분모는 전체를 똑같이 나눈 조각 수예요.' },
      ],
      ws: { title: '분수를 여러 방법으로', items: [
        { type: 'figure', prompt: '점이 나타내는 분수를 쓰세요.', tool: 'numberline', wide: true, figures: [
          { options: { mode: 'read', min: 0, max: 1, step: 1, sub: 5, format: 'frac', labels: 'ends', marks: [3 / 5] }, caption: BLANK + '분의 ' + BLANK },
          { options: { mode: 'read', min: 0, max: 1, step: 1, sub: 8, format: 'frac', labels: 'ends', marks: [6 / 8] }, caption: BLANK + '분의 ' + BLANK }], answer: '5분의 3, 8분의 6' },
        { type: 'figure', prompt: '같은 분수를 색칠한 띠 그림과 원 그림으로 나타냈어요. 그림을 보고 분수를 쓰세요.', tool: 'fraction', figures: [
          fig('strip', 7, 4, BLANK + '분의 ' + BLANK), fig('pizza', 6, 5, BLANK + '분의 ' + BLANK)], answer: '7분의 4, 6분의 5' },
        { type: 'choice', prompt: '0과 1 사이를 5칸으로 나눈 수직선에서 두 번째 눈금의 분수에 ○ 하세요.', options: ['2분의 5', '5분의 2', '7분의 5'], answer: '5분의 2' },
        { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '0과 1 사이를 ______칸으로 똑같이 나누면 한 칸은 1/______이에요.', answer: '같은 수(예: 8, 8)' },
        { type: 'short', prompt: '같은 분수를 그림과 수직선으로 나타낼 때 달라지는 것과 같은 것을 써 보세요.' },
      ], easy: { note: '수직선의 칸 수가 분모, 0에서 센 칸 수가 분자예요.', items: [
        { type: 'figure', prompt: '점이 나타내는 분수를 쓰세요.', tool: 'numberline', wide: true, figures: [
          { options: { mode: 'read', min: 0, max: 1, step: 1, sub: 4, format: 'frac', labels: 'all', marks: [3 / 4] }, caption: BLANK + '분의 ' + BLANK }], answer: '4분의 3' },
        { type: 'table', prompt: '빈칸에 알맞은 분수를 쓰세요.', columns: ['눈금 번호', '1번째', '2번째', '3번째'], cells: [['5칸으로 나눈 분수', '1/5', '', '']], answer: '2/5, 3/5' },
        { type: 'choice', prompt: '0과 1 사이를 6칸으로 나눈 한 칸은 얼마일까요?', options: ['1/6', '6/1'], answer: '1/6' },
        { type: 'draw', prompt: '0과 1 사이를 4칸으로 나누어 수직선을 그리고 4분의 1 자리에 점을 찍어 보세요.' },
      ] } },
      diff: { easy: '수직선의 모든 눈금에 분수가 적혀 있어서 점의 분수를 읽기 쉬워요.', base: '양 끝 수 0과 1만 보이는 수직선에서 칸을 세어 분수를 읽어요.', challenge: '여러 분모의 수직선과 그림을 오가며 같은 분수를 나타내요.' },
      notes: '자주 보이는 어려움: ① 점의 번호를 분모로 읽는다(6칸 중 4번째를 4분의 6으로) → 칸 수가 분모. ② 눈금 선의 수를 세어 칸 수보다 하나 더 센다 → 칸을 센다. ③ 수직선과 그림이 같은 분수임을 연결하지 못한다 → 칸이 조각, 점이 색칠의 끝이라고 말한다.',
    }),
    mk(6, ['[4수01-09]'], {
      title: '리본·물통·거리를 분수로 말해 보기',
      objective: '리본 길이, 물통의 물, 가야 할 거리처럼 생활 속 양을 똑같이 나눈 것 중 일부로 보고 몇 분의 몇으로 나타낼 수 있다.',
      ill: 'a ribbon, a water jug with ten level marks and a short road with milestones arranged on a craft table, ', scene: '생활 속 분수',
      extra: { motif: 'flower', x: 110, y: 214 },
      introT: '"1 m 리본을 똑같이 8도막으로 나눠 3도막을 썼어요. 쓴 양은 전체의 얼마일까요?" 하고 묻고 8분의 3이라고 말하게 한다. "남은 리본은 얼마일까요?"로 이어 8분의 5를 말하게 하고, 3과 5를 더하면 전체 8조각이 된다는 것을 짚는다. 3분의 8로 거꾸로 쓰는 학생에게는 전체 도막 수가 아래에 온다고 짚는다.',
      introS: '리본을 똑같이 8도막으로 나눠 3도막을 썼을 때 쓴 양이 전체의 얼마인지 말해 봐요.',
      acts: [
        { id: 'a1', title: '활동 1. 쓴 양만큼 색칠하기', minutes: 9, tool: 'fraction',
          task: '리본, 물통, 케이크처럼 똑같이 나눈 것 중 쓴 양만큼 색칠해요.',
          teacher: '"리본을 8도막으로 똑같이 나눴으니 분모는 몇이지요? 쓴 도막은 몇 개지요?" 분모 8, 분자 3을 차례로 말하게 한다. 쓴 양과 남은 양을 섞어 5도막을 색칠한 학생에게는 문제에서 묻는 것이 쓴 양인지 남은 양인지 다시 읽게 한다.',
          levels: FR,
          items: [
            col('1 m 리본을 똑같이 8도막으로 나누어 3도막을 썼어요. 쓴 양만큼 색칠해 보세요.', 'strip', 8, 3),
            col('물통을 10칸으로 나누어 7칸까지 물이 찼어요. 찬 양만큼 색칠해 보세요.', 'strip', 10, 7),
            col('케이크를 똑같이 12조각으로 나누어 5조각을 먹었어요. 먹은 양만큼 색칠해 보세요.', 'pizza', 12, 5),
            col('더 해 보기: 밭을 똑같이 9칸으로 나누어 4칸에 감자를 심었어요. 감자를 심은 칸을 색칠해 보세요.', 'strip', 9, 4, { extra: true }),
          ] },
        { id: 'a2', title: '활동 2. 색칠된 그림에서 분수로 말하기', minutes: 9, tool: 'fraction',
          task: '생활 속 그림에서 색칠한 부분을 분모와 분자를 정해 분수로 써요.',
          teacher: '"색칠한 조각 수와 전체 조각 수를 먼저 세어 볼까요?" 세어 쓴 두 수를 분수로 말하게 한다. "남은 양"과 "먹은 양"을 구분하지 못하고 칠하지 않은 조각을 센 학생에게는 이야기에서 묻는 것이 어느 쪽인지 밑줄을 긋게 한다.',
          levels: FW,
          items: [
            wr('물통의 물이 찬 부분을 분수로 나타내 보세요.', 'strip', 10, 3, 10, 3),
            wr('색칠한 부분은 먹은 피자 양이에요. 분수로 써 보세요.', 'pizza', 6, 5, 6, 5),
            wr('리본에서 쓴 부분을 분수로 나타내 보세요.', 'strip', 7, 6, 7, 6),
            wr('더 해 보기: 먹은 케이크의 양을 분수로 써 보세요.', 'pizza', 12, 9, 12, 9, { extra: true }),
          ] },
        { id: 'a3', title: '활동 3. 거리를 분수로 수직선에 놓기', minutes: 8, tool: 'numberline',
          task: '집에서 학교까지를 1로 보고, 걸어간 거리를 분수로 수직선 위에 놓아요.',
          teacher: '"집에서 학교까지를 5칸으로 나누었어요. 3칸을 걸었다면 어디에 점을 놓을까요?" 0에서 세 번째 눈금에 놓는다고 말하게 한다. 남은 거리를 놓은 학생에게는 걸어간 거리가 어디에서 어디까지인지 손으로 짚게 한다.',
          levels: NLF('place'),
          items: [
            plF('집에서 학교까지 가는 길을 5칸으로 나눴어요. 3칸 걸은 곳에 점을 놓아 보세요.', 5, ['3/5']),
            plF('운동장 한 바퀴를 10칸으로 나눴어요. 7칸 달린 곳에 점을 놓아 보세요.', 10, ['7/10']),
            plF('가는 4분의 1, 나는 4분의 3만큼 걸어간 곳에 점을 놓아 보세요.', 4, ['1/4', '3/4']),
            Object.assign(plF('더 해 보기: 6칸으로 나눈 길에서 5칸 걸은 곳에 점을 놓아 보세요.', 6, ['5/6']), { extra: true }),
          ] },
      ],
      wrapT: '"리본을 8도막으로 나눠 3도막을 썼다면 남은 양은 얼마일까요?" 8분의 5라고 말하게 하고 쓴 양과 남은 양을 더하면 전체인 8분의 8이라는 점을 짚는다. 출구 1번에서 8분의 5를 고른 학생은 묻는 것이 쓴 양인지 남은 양인지 다음 시간에 다시 읽게 한다.',
      exit: [
        { type: 'choice', prompt: '피자를 똑같이 8조각으로 나눈 것 중 3조각을 먹었어요. 먹은 양은 전체의 얼마일까요?', options: ['3분의 8', '8분의 3', '5분의 8'], answer: 1, explain: '전체 8조각 중 먹은 3조각이라서 8분의 3이에요.' },
        { type: 'tool', tool: 'fraction', options: { shape: 'strip', write: true }, state: { n: 9, colored: [0, 1, 2, 3, 4] }, prompt: '물통의 색칠한 부분은 전체의 몇 분의 몇인가요?', target: { den: 9, num: 5 } },
        { type: 'choice', prompt: '8조각 중 3조각을 먹었어요. 남은 양은 전체의 얼마일까요?', options: ['8분의 5', '8분의 3', '5분의 3'], answer: 0, explain: '8조각 중 먹지 않은 5조각이 남았으니 8분의 5예요.' },
      ],
      ws: { title: '생활 속 분수', items: [
        { type: 'figure', prompt: '색칠한 부분은 쓴 양이에요. 전체의 몇 분의 몇인지 쓰세요.', tool: 'fraction', figures: [
          fig('strip', 10, 6, BLANK + '분의 ' + BLANK), fig('pizza', 8, 3, BLANK + '분의 ' + BLANK)], answer: '10분의 6, 8분의 3' },
        { type: 'table', prompt: '이야기를 읽고 분수를 쓰세요.', columns: ['이야기', '분수'], cells: [['끈을 똑같이 7도막으로 나누어 2도막 사용', ''], ['물병을 10칸으로 나눈 것 중 9칸이 참', ''], ['과자를 6조각으로 나눈 것 중 4조각 먹음', '']], answer: '7분의 2, 10분의 9, 6분의 4' },
        { type: 'choice', prompt: '12조각 중 5조각을 먹었어요. 남은 양에 ○ 하세요.', options: ['12분의 5', '12분의 7', '7분의 12'], answer: '12분의 7' },
        { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '8분의 3과 8분의 5를 합하면 전체인 ______분의 ______이에요.', answer: '8, 8' },
        { type: 'short', prompt: '리본 한 개를 똑같이 나누어 쓰는 장면을 생각해 분수 이야기를 하나 만들어 써 보세요.' },
      ], easy: { note: '분모는 전체를 똑같이 나눈 수, 분자는 문제에서 묻는 부분의 수예요.', items: [
        { type: 'figure', prompt: '색칠한 부분은 전체의 몇 분의 몇인지 쓰세요.', tool: 'fraction', figures: [fig('strip', 5, 2, BLANK + '분의 ' + BLANK), fig('pizza', 4, 3, BLANK + '분의 ' + BLANK)], answer: '5분의 2, 4분의 3' },
        { type: 'table', prompt: '이야기를 읽고 분수를 쓰세요.', columns: ['이야기', '분수'], cells: [['과자를 5조각으로 나눈 것 중 1조각 먹음', ''], ['끈을 4도막으로 나눈 것 중 3도막 사용', '']], answer: '5분의 1, 4분의 3' },
        { type: 'choice', prompt: '6조각 중 2조각을 먹었어요. 먹은 양에 ○ 하세요.', options: ['6분의 2', '2분의 6'], answer: '6분의 2' },
        { type: 'draw', prompt: '종이띠를 똑같이 8칸으로 나누고 8분의 3만큼 색칠해 보세요.' },
      ] } },
      diff: { easy: '분자·분모의 뜻이 글자로 보이는 그림에서 색칠하고 분수를 써요.', base: '이야기를 읽고 색칠하거나 분수로 나타내요.', challenge: '분수 읽기가 숨겨진 그림에서 이야기에 맞게 색칠하고 쓴 양과 남은 양을 구분해요.' },
      notes: '자주 보이는 어려움: ① 먹은 양과 남은 양을 헷갈린다 → 이야기에서 묻는 부분에 밑줄. ② 전체 조각 수를 빠뜨리고 색칠한 수만 쓴다 → 분모에 전체 조각 수. ③ 분수를 읽고 쓸 때 분모와 분자를 바꾼다 → 분모가 먼저, 아래에. 쓴 양과 남은 양을 더하면 전체(8분의 8)가 됨을 확인하며 7차시로 잇는다.',
    }),
    mk(7, ['[4수01-10]'], {
      title: '전체를 다 칠하면 1, 일부만 칠하면 1보다 작은 분수',
      objective: '분자와 분모가 같은 분수는 전체인 1과 같고, 분자가 분모보다 작은 분수는 1보다 작음을 그림과 수직선에서 설명할 수 있다.',
      ill: 'a fully colored paper pizza next to a partly colored pizza and a long number line with a flag at one, ', scene: '1과 1보다 작은 분수',
      extra: { motif: 'star', x: 110, y: 214 },
      introT: '"피자를 똑같이 4조각으로 나눈 것 중 4조각을 모두 먹으면 어떤 분수일까요?" 4분의 4라고 말하게 한 뒤 "피자 한 판을 다 먹었으니 1과 같을까요?" 하고 묻는다. 4분의 4를 "아무것도 아니다"라고 보는 학생에게는 전체를 다 칠한 그림을 보여 준다. 1보다 큰 분수는 2학기에 배우므로 이 시간에는 1과 같거나 작은 분수만 다룬다.',
      introS: '피자 4조각을 모두 먹으면 전체를 먹은 걸까요? 4분의 4가 어떤 수와 같을지 생각해 봐요.',
      acts: [
        { id: 'a1', title: '활동 1. 전체를 모두 색칠해 보기', minutes: 9, tool: 'fraction',
          task: '전체를 똑같이 나눈 조각을 모두 색칠하면 분자와 분모가 같은 분수가 돼요. 그 분수가 1인지 살펴봐요.',
          teacher: '"6조각 중 6조각을 색칠했어요. 전체와 비교하면 어떤가요?" 전체를 다 칠했으니 1과 같다고 말하게 한다. "6분의 6은 6이에요"라고 말하는 학생에게는 조각이 6개 있어도 하나의 전체를 나눈 것임을 겹쳐 보게 한다.',
          levels: FR,
          items: [
            col('종이띠를 똑같이 6조각으로 나누고 전체를 모두 색칠해 보세요.', 'strip', 6, 6,
              { predict: { q: '6조각을 모두 색칠하면 어떤 분수가 될까요?', options: ['6분의 6', '1분의 6', '6분의 1'], answer: 0 }, conclude: '6분의 6은 전체를 모두 칠한 것이라서 1과 같아요.' }),
            col('피자를 똑같이 4조각으로 나누고 4조각을 모두 먹었어요. 먹은 양을 모두 색칠해 보세요.', 'pizza', 4, 4),
            col('초콜릿을 똑같이 8칸으로 나누고 8칸을 모두 먹었어요. 먹은 양을 색칠해 보세요.', 'strip', 8, 8),
            col('더 해 보기: 쿠키를 똑같이 10조각으로 나누고 모두 색칠해 보세요.', 'pizza', 10, 10, { extra: true }),
          ] },
        { id: 'a2', title: '활동 2. 수직선에서 1과 견주기', minutes: 9, tool: 'numberline',
          task: '수직선에서 1은 전체를 나타내요. 점이 나타내는 분수를 1과 견주어 알맞은 말을 골라요.',
          teacher: '"점이 5분의 5에 있어요. 1과 어떻게 다른가요?" 같은 자리라서 1과 같다고 말하게 한다. 1보다 오른쪽에 있는 점에서 "작다"를 고른 학생에게는 오른쪽으로 갈수록 수가 커진다는 것을 짚는다. 1보다 큰 분수는 2학기에 자세히 배운다고 알려 준다.',
          levels: { easy: { mode: 'read', min: 0, max: 2, step: 1, sub: 5, format: 'frac', labels: 'major' }, base: { mode: 'read', min: 0, max: 2, step: 1, sub: 5, format: 'frac', labels: 'major' }, challenge: { mode: 'read', min: 0, max: 2, step: 1, sub: 5, format: 'frac', labels: 'major' } },
          items: [
            { prompt: '점이 5분의 5에 있어요. 이 분수는 1과 어떤 관계일까요?', toolOptions: { marks: [1], choices: ['1보다 작다', '1과 같다', '1보다 크다'], question: '알맞은 것을 고르세요.' }, target: { pick: 1 } },
            { prompt: '점이 5분의 3에 있어요. 이 분수는 1과 어떤 관계일까요?', toolOptions: { marks: [3 / 5], choices: ['1보다 작다', '1과 같다', '1보다 크다'], question: '알맞은 것을 고르세요.' }, target: { pick: 0 } },
            { prompt: '점이 5분의 7에 있어요. 1보다 오른쪽일까요, 왼쪽일까요?', toolOptions: { marks: [7 / 5], choices: ['1보다 왼쪽(작다)', '1과 같은 자리', '1보다 오른쪽(크다)'], question: '알맞은 것을 고르세요.' }, target: { pick: 2 } },
            { prompt: '더 해 보기: 점이 5분의 1에 있어요. 1과 어떤 관계일까요?', toolOptions: { marks: [1 / 5], choices: ['1보다 크다', '1과 같다', '1보다 작다'], question: '알맞은 것을 고르세요.' }, target: { pick: 2 }, extra: true },
          ] },
        { id: 'a3', title: '활동 3. 1보다 작은 분수 만들기', minutes: 8, tool: 'fraction', pair: true,
          task: '짝이 낸 조건에 맞게 분자가 분모보다 작은 분수를 만들어요. 조건이 둘이면 둘 다 지켜요.',
          teacher: '"분자가 분모보다 작으면 1보다 클까요, 작을까요?" 조각 수가 전체보다 적어서 1보다 작다고 말하게 한다. 분자와 분모를 같게 만들어 1이 된 학생에게는 조건이 "1보다 작은"이었음을 다시 읽게 한다.',
          levels: FP,
          items: [
            { prompt: '짝이 "분자가 3 이상인 1보다 작은 분수"를 말했어요. 그런 분수를 종이띠로 만들어 보세요.', toolOptions: { shape: 'strip' }, target: { proper: true, minNum: 3 } },
            { prompt: '분모가 9보다 크고 절반보다 적은 1보다 작은 분수를 피자로 만들어 보세요.', toolOptions: { shape: 'pizza' }, target: { proper: true, lessThanHalf: true, minDen: 10 } },
            { prompt: '짝이 낸 조건에 맞게, 절반보다 많고 1보다 작은 분수를 종이띠로 만들어 보세요.', toolOptions: { shape: 'strip' }, target: { proper: true, moreThanHalf: true } },
            { prompt: '더 해 보기: 분모가 8보다 크고 분자가 4 이상이면서 1보다 작은 분수를 피자로 만들어 보세요.', toolOptions: { shape: 'pizza' }, target: { proper: true, minDen: 9, minNum: 4 }, extra: true },
          ] },
      ],
      wrapT: '"4분의 4와 4분의 3 가운데 1과 같은 것은 어느 것일까요? 그 까닭은?" 전체를 모두 칠했는지 비교하게 한다. 출구 2번에서 4분의 5를 고른 학생은 분자가 분모보다 큰 분수가 2학기에 배우는 수임을 알려 주고 이번에는 분자와 분모의 크기만 견준다고 다시 말한다.',
      exit: [
        { type: 'choice', prompt: '5분의 5는 어떤 수와 같을까요?', options: ['0', '1', '5'], answer: 1, explain: '전체를 똑같이 5로 나눈 것 중 5조각이니 전체, 곧 1이에요.' },
        { type: 'choice', prompt: '4분의 3, 4분의 4, 4분의 5 가운데 1보다 작은 분수는 어느 것일까요?', options: ['4분의 3', '4분의 4', '4분의 5'], answer: 0, explain: '분자 3이 분모 4보다 작아서 전체 4조각보다 적게 칠한 분수예요.' },
        { type: 'tool', tool: 'fraction', options: { shape: 'strip' }, prompt: '종이띠를 똑같이 7조각으로 나누고 전체를 모두 색칠해 보세요.', target: { den: 7, num: 7 } },
      ],
      ws: { title: '1과 같은 분수, 1보다 작은 분수', items: [
        { type: 'figure', prompt: '색칠한 부분을 분수로 쓰고 1과 견주어 ○ 하세요.', tool: 'fraction', figures: [
          fig('strip', 5, 5, BLANK + '분의 ' + BLANK + ' (1보다 작다 / 1과 같다)'), fig('pizza', 6, 4, BLANK + '분의 ' + BLANK + ' (1보다 작다 / 1과 같다)')], answer: '5분의 5(1과 같다), 6분의 4(1보다 작다)' },
        { type: 'table', prompt: '1과 견주어 알맞은 말을 쓰세요.', columns: ['분수', '3/8', '8/8', '2/7', '7/7'], cells: [['1과 견주기', '', '', '', '']], answer: '1보다 작다, 1과 같다, 1보다 작다, 1과 같다' },
        { type: 'choice', prompt: '1과 같은 분수에 ○ 하세요.', options: ['6/7', '7/7', '1/7'], answer: '7/7' },
        { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '분자와 분모가 같은 분수는 ______과 같고, 분자가 분모보다 작은 분수는 1보다 ______.', answer: '1, 작다' },
        { type: 'short', prompt: '9분의 9가 왜 9가 아니라 1과 같은지 그림을 떠올려 써 보세요.' },
      ], easy: { note: '전체를 다 칠하면 1이에요. 분자가 분모보다 작으면 다 칠하지 않은 거예요.', items: [
        { type: 'figure', prompt: '색칠한 부분을 분수로 쓰세요.', tool: 'fraction', figures: [fig('strip', 4, 4, BLANK + '분의 ' + BLANK), fig('pizza', 5, 3, BLANK + '분의 ' + BLANK)], answer: '4분의 4, 5분의 3' },
        { type: 'table', prompt: '1과 견주어 알맞은 말에 ○ 하세요.', columns: ['분수', '2/6', '6/6'], cells: [['1과 견주기', '', '']], answer: '1보다 작다, 1과 같다' },
        { type: 'choice', prompt: '6/6과 같은 수에 ○ 하세요.', options: ['1', '6'], answer: '1' },
        { type: 'draw', prompt: '종이띠를 똑같이 3칸으로 나누고 3분의 3만큼 색칠한 뒤 1과 비교해 써 보세요.' },
      ] } },
      diff: { easy: '분자·분모 뜻이 보이는 그림에서 전체를 모두 칠하는지 확인해요.', base: '그림과 수직선에서 1과 견주어 알맞은 말을 골라요.', challenge: '조건이 두 개인 1보다 작은 분수를 짝과 함께 만들어요.' },
      notes: '자주 보이는 어려움: ① 4분의 4를 4처럼 큰 수로 본다 → 전체 한 판이라고 말한다. ② 분자가 클수록 항상 큰 수라고 생각한다 → 분모가 같은 분수 비교는 8차시에서 이어서 한다. ③ 1보다 큰 분수를 이 단원에서 모두 배우려 한다 → 가분수·대분수는 2학기(g3-math-2-04)에서 다룬다고 알려 준다.',
    }),
    mk(8, ['[4수01-11]'], {
      title: '분모가 같은 분수는 분자로 크기 견주기',
      objective: '분모가 같은 두 분수를 수직선에 놓아 크기를 견주고, 분모가 같으면 분자가 클수록 큰 분수임을 말할 수 있다.',
      ill: 'a paper number line with two flags of equal-size steps and two paper slices of the same cake, ', scene: '분모가 같은 분수',
      extra: { motif: 'bird', x: 120, y: 190 },
      introT: '"7조각으로 똑같이 나눈 케이크에서 민지는 3조각, 준호는 5조각을 먹었어요. 누가 더 많이 먹었을까요?" 하고 묻고 조각 크기가 같으니 조각 수가 많은 쪽이라고 말하게 한다. 분모끼리 비교하려는 학생에게는 두 분수의 분모가 같다는 것을 짚는다.',
      introS: '똑같은 케이크를 7조각으로 나눠 먹을 때 조각을 더 많이 먹은 사람이 누구일지 짝과 말해 봐요.',
      acts: [
        { id: 'a1', title: '활동 1. 분모가 같은 두 분수를 수직선에 놓기', minutes: 9, tool: 'numberline',
          task: '분모가 같은 두 분수를 수직선에 놓아요. 오른쪽에 놓인 분수가 더 큰 분수예요.',
          teacher: '"가는 7분의 3, 나는 7분의 5예요. 어느 점이 더 오른쪽일까요?" 점이 오른쪽에 있을수록 큰 수라고 말하게 한다. 분모 7로 나눈 칸의 크기가 같다는 것을 손으로 짚게 하고, 칸이 더 많이 간 쪽이 큰 수라고 정리한다.',
          levels: NLF('place'),
          items: [
            plF('가는 7분의 3, 나는 7분의 5가 되는 곳에 놓고 더 큰 분수를 찾아 보세요.', 7, ['3/7', '5/7']),
            plF('가는 9분의 2, 나는 9분의 7이 되는 곳에 놓아 보세요.', 9, ['2/9', '7/9']),
            plF('가는 8분의 6, 나는 8분의 1이 되는 곳에 놓아 보세요.', 8, ['6/8', '1/8']),
            Object.assign(plF('더 해 보기: 가는 6분의 4, 나는 6분의 5가 되는 곳에 놓아 보세요.', 6, ['4/6', '5/6']), { extra: true }),
          ] },
        { id: 'a2', title: '활동 2. 두 분수 중 더 큰 것 고르기', minutes: 9, tool: 'numberline',
          task: '수직선에 찍힌 두 점을 보고 더 큰 분수를 골라요. 분모가 같으니 분자를 견주어도 돼요.',
          teacher: '"가는 6분의 2, 나는 6분의 5예요. 수직선에서 더 오른쪽인 점은 어느 것일까요?" 6분의 5라고 말하게 하고 분자 5가 2보다 크다는 것과 연결한다. 분모가 같을 때 분자만 보면 된다는 규칙을 문장으로 말하게 한다.',
          levels: NLF('read'),
          items: [
            rdF('가는 6분의 2, 나는 6분의 5예요. 더 큰 분수를 고르세요.', 6, [2 / 6, 5 / 6], ['6분의 2가 더 크다', '6분의 5가 더 크다', '같다'], 1,
              { predict: { q: '분모가 같은 두 분수는 무엇을 견주면 크기를 알 수 있을까요?', options: ['분모', '분자'], answer: 1 }, conclude: '분모가 같으면 분자가 큰 분수가 더 커요.' }),
            rdF('가는 9분의 7, 나는 9분의 4예요. 더 큰 분수를 고르세요.', 9, [7 / 9, 4 / 9], ['9분의 4가 더 크다', '같다', '9분의 7이 더 크다'], 2),
            rdF('가는 8분의 3, 나는 8분의 6이에요. 더 작은 분수는 어느 것일까요?', 8, [3 / 8, 6 / 8], ['8분의 3이 더 작다', '8분의 6이 더 작다', '같다'], 0),
            rdF('더 해 보기: 가는 5분의 4, 나는 5분의 2예요. 더 큰 분수를 고르세요.', 5, [4 / 5, 2 / 5], ['5분의 2가 더 크다', '5분의 4가 더 크다', '같다'], 1, { extra: true }),
          ] },
        { id: 'a3', title: '활동 3. 세 분수 중 가장 큰 분수 찾기', minutes: 8, tool: 'numberline',
          task: '분모가 같은 세 분수가 수직선에 찍혀 있어요. 가장 큰 분수가 어느 점인지 골라요.',
          teacher: '"가, 나, 다 가운데 가장 오른쪽 점은 어느 것일까요?" 오른쪽에 있을수록 큰 수라고 말하게 한다. 점의 이름 순서(가, 나, 다)를 크기 순서로 착각해 다를 고른 학생에게는 이름은 구분하려는 것일 뿐임을 짚는다.',
          levels: NLF('read'),
          items: [
            rdF('가는 9분의 4, 나는 9분의 8, 다는 9분의 1이에요. 가장 큰 분수는 어느 점일까요?', 9, [4 / 9, 8 / 9, 1 / 9], ['가', '나', '다'], 1),
            rdF('가는 7분의 6, 나는 7분의 2, 다는 7분의 4예요. 가장 큰 분수는 어느 점일까요?', 7, [6 / 7, 2 / 7, 4 / 7], ['가', '나', '다'], 0),
            rdF('가는 10분의 3, 나는 10분의 9, 다는 10분의 5예요. 가장 작은 분수는 어느 점일까요?', 10, [3 / 10, 9 / 10, 5 / 10], ['가', '나', '다'], 0),
            rdF('더 해 보기: 가는 8분의 5, 나는 8분의 2, 다는 8분의 7이에요. 가장 큰 분수는 어느 점일까요?', 8, [5 / 8, 2 / 8, 7 / 8], ['가', '나', '다'], 2, { extra: true }),
          ] },
      ],
      wrapT: '"분모가 같은 두 분수는 어떻게 크기를 견주면 되나요?" 분자를 견주고 분자가 큰 분수가 더 크다는 말을 짝에게 하게 한다. 출구 2번에서 "분모"를 고른 학생은 분모가 같으니 조각 크기가 같다는 것을 그림으로 다시 본다.',
      exit: [
        { type: 'choice', prompt: '9분의 4와 9분의 7 가운데 더 큰 분수는 어느 것일까요?', options: ['9분의 4', '9분의 7'], answer: 1, explain: '분모가 같으니 분자가 더 큰 9분의 7이 더 커요.' },
        { type: 'choice', prompt: '분모가 같은 두 분수의 크기를 견줄 때 무엇을 보면 될까요?', options: ['분자', '분모', '둘 다 필요 없다'], answer: 0, explain: '분모가 같으면 조각 크기가 같아서 조각 수인 분자를 견주면 돼요.' },
        { type: 'tool', tool: 'numberline', options: { mode: 'place', min: 0, max: 1, step: 1, sub: 9, format: 'frac', labels: 'ends', count: 1 }, prompt: '9분의 5가 되는 곳에 점을 놓아 보세요.', target: { points: ['5/9'] } },
      ],
      ws: { title: '분모가 같은 분수 견주기', items: [
        { type: 'figure', prompt: '점이 나타내는 분수를 쓰고 더 큰 분수에 ○ 하세요.', tool: 'numberline', wide: true, figures: [
          { options: { mode: 'read', min: 0, max: 1, step: 1, sub: 8, format: 'frac', labels: 'ends', marks: [3 / 8] }, caption: BLANK + '분의 ' + BLANK },
          { options: { mode: 'read', min: 0, max: 1, step: 1, sub: 8, format: 'frac', labels: 'ends', marks: [7 / 8] }, caption: BLANK + '분의 ' + BLANK }], answer: '8분의 3, 8분의 7 — 8분의 7이 더 큼' },
        { type: 'table', prompt: '두 분수 중 더 큰 분수를 쓰세요.', columns: ['두 분수', '2/9, 5/9', '6/7, 4/7', '3/10, 8/10'], cells: [['더 큰 분수', '', '', '']], answer: '5/9, 6/7, 8/10' },
        { type: 'choice', prompt: '분모가 같은 분수에서 큰 분수에 ○ 하세요.', options: ['분자가 큰 분수', '분자가 작은 분수'], answer: '분자가 큰 분수' },
        { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요(○ 안은 <, >).', text: '4/9 ( ) 7/9, 8/10 ( ) 3/10', answer: '<, >' },
        { type: 'short', prompt: '분모가 같을 때 분자만 보고 크기를 견주어도 되는 까닭을 써 보세요.' },
      ], easy: { note: '분모가 같으면 조각 크기가 같아요. 조각이 많은 분수가 더 커요.', items: [
        { type: 'figure', prompt: '점이 나타내는 분수를 쓰세요.', tool: 'numberline', wide: true, figures: [
          { options: { mode: 'read', min: 0, max: 1, step: 1, sub: 5, format: 'frac', labels: 'all', marks: [2 / 5] }, caption: BLANK + '분의 ' + BLANK }], answer: '5분의 2' },
        { type: 'table', prompt: '두 분수 중 더 큰 분수를 쓰세요.', columns: ['두 분수', '1/6, 4/6', '3/5, 2/5'], cells: [['더 큰 분수', '', '']], answer: '4/6, 3/5' },
        { type: 'choice', prompt: '5분의 4와 5분의 1 중 더 큰 것에 ○ 하세요.', options: ['5분의 4', '5분의 1'], answer: '5분의 4' },
        { type: 'draw', prompt: '수직선을 8칸으로 나누고 8분의 2와 8분의 6을 놓은 뒤 더 큰 분수에 ○ 해 보세요.' },
      ] } },
      diff: { easy: '수직선의 모든 눈금에 분수가 적혀 있어서 오른쪽에 있는 분수를 찾기 쉬워요.', base: '양 끝 수만 보이는 수직선에서 점의 위치로 크기를 견줘요.', challenge: '세 개 이상의 분수를 한꺼번에 견주고 까닭을 말해요.' },
      notes: '자주 보이는 어려움: ① 분모끼리 견줘 분모가 큰 쪽을 더 큰 분수로 본다(9분의 4와 9분의 7이 분모가 같은데도) → 분모가 같음을 먼저 확인한다. ② 점의 이름(가나다)을 크기 순서로 읽는다 → 이름은 구분용. ③ 분자가 클수록 항상 큰 수라는 규칙을 분모가 다른 분수에도 쓴다 → 9차시에서 단위분수로 반례를 만난다.',
    }),
    mk(9, ['[4수01-11]'], {
      title: '조각이 많아질수록 한 조각이 작아지는 까닭 찾기',
      objective: '단위분수는 분모가 클수록 한 조각이 작아서 더 작은 분수임을 그림과 수직선으로 알고 설명할 수 있다.',
      ill: 'three round paper pizzas cut into two, three and six equal slices with one slice lifted from each, ', scene: '단위분수 크기',
      extra: { motif: 'leaf', x: 120, y: 214 },
      introT: '"같은 크기의 피자를 2조각, 6조각으로 나눈 한 조각을 들었어요. 어느 쪽 조각이 더 클까요?" 하고 묻는다. 6이 2보다 크니 6분의 1이 더 크다고 말하는 학생에게는 "여러 조각으로 나누면 한 조각이 어떻게 될까요?"라고 되묻고 그림으로 겹쳐 보게 한다.',
      introS: '같은 피자를 2조각과 6조각으로 나눌 때 한 조각의 크기가 어떻게 다를지 손으로 그려 보고 말해 봐요.',
      acts: [
        { id: 'a1', title: '활동 1. 같은 전체를 나눈 한 조각 견주기', minutes: 9, tool: 'fraction',
          task: '같은 크기의 피자를 여러 조각으로 나누어 한 조각만 색칠해요. 조각이 많아질수록 한 조각이 어떻게 되는지 봐요.',
          teacher: '"2조각으로 나눈 한 조각과 3조각으로 나눈 한 조각 가운데 어느 것이 더 클까요?" 조각 수가 적을수록 한 조각이 크다고 말하게 한다. 3조각이 더 크다고 한 학생에게는 두 피자를 겹쳐 놓고 색칠한 넓이를 견주게 한다.',
          levels: FR,
          items: [
            col('피자를 똑같이 2조각으로 나누어 한 조각만 색칠해 보세요.', 'pizza', 2, 1,
              { predict: { q: '2조각으로 나눈 한 조각과 6조각으로 나눈 한 조각 중 어느 것이 더 클까요?', options: ['2조각으로 나눈 한 조각', '6조각으로 나눈 한 조각'], answer: 0 }, conclude: '조각 수가 적을수록 한 조각이 커요.' }),
            col('피자를 똑같이 3조각으로 나누어 한 조각만 색칠해 보세요.', 'pizza', 3, 1),
            col('피자를 똑같이 6조각으로 나누어 한 조각만 색칠해 보세요. 3분의 1보다 작아졌나요?', 'pizza', 6, 1),
            col('더 해 보기: 피자를 똑같이 12조각으로 나누어 한 조각만 색칠해 보세요.', 'pizza', 12, 1, { extra: true }),
          ] },
        { id: 'a2', title: '활동 2. 단위분수를 수직선에 놓기', minutes: 9, tool: 'numberline',
          task: '분자가 1인 두 단위분수를 수직선에 놓아요. 0에 가까운 쪽이 더 작은 수예요.',
          teacher: '"가는 2분의 1, 나는 8분의 1이에요. 0에 더 가까운 점은 어느 것일까요?" 8분의 1이라고 말하게 하고 분모가 클수록 0에 가깝다고 정리한다. 두 점을 같은 자리에 놓은 학생에게는 0과 1 사이를 나눈 칸의 크기가 다름을 짚는다.',
          levels: NLF('place'),
          items: [
            plF('가는 2분의 1, 나는 8분의 1이 되는 곳에 놓아 보세요.', 8, ['1/2', '1/8']),
            plF('가는 3분의 1, 나는 6분의 1이 되는 곳에 놓아 보세요.', 6, ['1/3', '1/6']),
            plF('가는 2분의 1, 나는 5분의 1이 되는 곳에 놓아 보세요.', 10, ['1/2', '1/5']),
            Object.assign(plF('더 해 보기: 가는 4분의 1, 나는 12분의 1이 되는 곳에 놓아 보세요.', 12, ['1/4', '1/12']), { extra: true }),
          ] },
        { id: 'a3', title: '활동 3. 더 큰 단위분수 고르기', minutes: 8, tool: 'numberline',
          task: '수직선에 찍힌 두 단위분수 중 더 큰 것을 골라요. 분모가 다르니 한 조각의 크기를 떠올려요.',
          teacher: '"가는 3분의 1, 나는 6분의 1이에요. 분모는 6이 더 큰데 어느 분수가 더 클까요?" 3분의 1이라고 말하게 하고 까닭을 조각 크기로 말하게 한다. "분모가 크니까 큰 수"라고 한 학생에게는 활동 1의 피자를 다시 떠올리게 한다.',
          levels: NLF('read'),
          items: [
            rdF('가는 3분의 1, 나는 6분의 1이에요. 더 큰 분수를 고르세요.', 6, [1 / 3, 1 / 6], ['6분의 1이 더 크다', '3분의 1이 더 크다', '같다'], 1),
            rdF('가는 5분의 1, 나는 10분의 1이에요. 더 작은 분수를 고르세요.', 10, [1 / 5, 1 / 10], ['5분의 1이 더 작다', '같다', '10분의 1이 더 작다'], 2),
            rdF('가는 4분의 1, 나는 8분의 1이에요. 더 큰 분수를 고르세요.', 8, [1 / 4, 1 / 8], ['8분의 1이 더 크다', '4분의 1이 더 크다', '같다'], 1),
            rdF('더 해 보기: 가는 2분의 1, 나는 4분의 1이에요. 더 큰 분수를 고르세요.', 4, [1 / 2, 1 / 4], ['2분의 1이 더 크다', '4분의 1이 더 크다', '같다'], 0, { extra: true }),
          ] },
      ],
      wrapT: '"단위분수는 분모가 커질수록 어떻게 되나요? 왜 그럴까요?" 같은 전체를 더 많은 조각으로 나누면 한 조각이 작아진다는 말을 이끌어 낸다. 출구 1번에서 9분의 1을 고른 학생은 분모가 큰 쪽을 큰 분수로 본 것이므로 피자 그림을 다시 그리게 한다.',
      exit: [
        { type: 'choice', prompt: '4분의 1과 9분의 1 가운데 더 큰 분수는 어느 것일까요?', options: ['4분의 1', '9분의 1'], answer: 0, explain: '4조각으로 나눈 한 조각이 9조각으로 나눈 한 조각보다 커요.' },
        { type: 'choice', prompt: '단위분수는 분모가 커질수록 어떻게 될까요?', options: ['커진다', '작아진다', '같다'], answer: 1, explain: '같은 전체를 더 많은 조각으로 나누면 한 조각이 작아져요.' },
        { type: 'tool', tool: 'numberline', options: { mode: 'place', min: 0, max: 1, step: 1, sub: 6, format: 'frac', labels: 'ends', count: 1 }, prompt: '6분의 1이 되는 곳에 점을 놓아 보세요.', target: { points: ['1/6'] } },
      ],
      ws: { title: '단위분수의 크기', items: [
        { type: 'figure', prompt: '색칠한 한 조각이 전체의 얼마인지 분수로 쓰고 더 큰 분수에 ○ 하세요.', tool: 'fraction', figures: [
          fig('pizza', 3, 1, BLANK + '분의 ' + BLANK), fig('pizza', 6, 1, BLANK + '분의 ' + BLANK)], answer: '3분의 1, 6분의 1 — 3분의 1이 더 큼' },
        { type: 'table', prompt: '두 분수 중 더 큰 분수를 쓰세요.', columns: ['두 분수', '1/2, 1/5', '1/4, 1/8', '1/3, 1/10'], cells: [['더 큰 분수', '', '', '']], answer: '1/2, 1/4, 1/3' },
        { type: 'choice', prompt: '단위분수 중 가장 큰 분수에 ○ 하세요.', options: ['1/3', '1/5', '1/9'], answer: '1/3' },
        { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '단위분수는 분모가 클수록 한 조각이 ______.', answer: '작아요' },
        { type: 'short', prompt: '분모가 큰 단위분수가 더 작은 까닭을 피자 그림을 떠올려 써 보세요.' },
      ], easy: { note: '같은 전체를 더 많이 나누면 한 조각은 더 작아져요.', items: [
        { type: 'figure', prompt: '색칠한 한 조각이 전체의 얼마인지 분수로 쓰세요.', tool: 'fraction', figures: [fig('pizza', 2, 1, BLANK + '분의 ' + BLANK), fig('pizza', 4, 1, BLANK + '분의 ' + BLANK)], answer: '2분의 1, 4분의 1' },
        { type: 'table', prompt: '두 분수 중 더 큰 분수를 쓰세요.', columns: ['두 분수', '1/2, 1/3', '1/4, 1/5'], cells: [['더 큰 분수', '', '']], answer: '1/2, 1/4' },
        { type: 'choice', prompt: '1/3과 1/6 중 더 큰 것에 ○ 하세요.', options: ['1/3', '1/6'], answer: '1/3' },
        { type: 'draw', prompt: '같은 크기의 원 두 개를 그리고 하나는 2조각, 하나는 4조각으로 나눈 한 조각을 칠해 비교해 보세요.' },
      ] } },
      diff: { easy: '분수 읽기가 보이는 피자에서 한 조각의 크기를 견줘요.', base: '수직선에 놓은 두 단위분수 중 더 큰 것을 골라요.', challenge: '세 개 이상의 단위분수를 크기 순서대로 놓고 까닭을 말해요.' },
      notes: '자주 보이는 어려움: ① 분모가 큰 쪽이 큰 분수라고 생각한다(8차시의 분자 규칙을 거꾸로 확장) → 같은 전체를 나눈 한 조각 크기를 겹쳐 본다. ② 수직선에서 분모가 큰 점이 오른쪽에 있다고 읽는다 → 0에서 가까운 쪽이 작은 수. ③ 분자가 1이 아닌 분수 비교로 확대하려 한다 → 이번 시간은 단위분수 비교만 한다.',
    }),
    mk(10, ['[4수01-11]'], {
      title: '수직선으로 분수 크기를 견주어 까닭 말하기',
      objective: '분모가 같은 분수와 단위분수의 크기를 수직선과 조각 크기로 견주고, 크기를 말한 까닭을 설명할 수 있다.',
      ill: 'a long paper number line with colorful flags at different fractions and children comparing cake slices below it, ', scene: '분수 크기 설명',
      extra: { motif: 'flower', x: 110, y: 214 },
      introT: '"3분의 1과 9분의 4 가운데 어느 분수가 더 클까요? 그냥 보면 알 수 있을까요?" 하고 묻는다. 이번 시간에는 분모가 같은 분수와 단위분수를 따로 구분해 견주게 한다. "분모가 같을 때는 분자를, 분자가 1일 때는 분모를 봐요"라는 규칙이 맞는 경우를 가려내게 한다.',
      introS: '어떤 분수끼리는 분자로, 어떤 분수끼리는 분모로 크기를 견줄 수 있어요. 어떤 경우에 어느 쪽을 볼지 생각해 봐요.',
      acts: [
        { id: 'a1', title: '활동 1. 분수 세 개를 작은 것부터 놓기', minutes: 9, tool: 'numberline',
          task: '분모가 같은 세 분수를 수직선에 놓아요. 왼쪽부터 작은 분수가 놓여요.',
          teacher: '"가는 8분의 5, 나는 8분의 2, 다는 8분의 7이에요. 수직선에 놓으면 왼쪽부터 어떤 순서가 될까요?" 나, 가, 다 순서라고 말하게 한다. 이름 순서대로 가, 나, 다로 놓은 학생에게는 크기를 보고 놓는 것이지 이름 순서가 아님을 짚는다.',
          levels: NLF('place'),
          items: [
            plF('가는 8분의 5, 나는 8분의 2, 다는 8분의 7이에요. 수직선에 놓아 크기를 견주어 보세요.', 8, ['5/8', '2/8', '7/8']),
            plF('가는 10분의 1, 나는 10분의 6, 다는 10분의 9예요. 수직선에 놓아 보세요.', 10, ['1/10', '6/10', '9/10']),
            plF('가는 9분의 8, 나는 9분의 3, 다는 9분의 5예요. 수직선에 놓아 보세요.', 9, ['8/9', '3/9', '5/9']),
            Object.assign(plF('더 해 보기: 가는 12분의 7, 나는 12분의 10, 다는 12분의 4예요. 수직선에 놓아 보세요.', 12, ['7/12', '10/12', '4/12']), { extra: true }),
          ] },
        { id: 'a2', title: '활동 2. 단위분수 세 개 중 가장 큰 것 찾기', minutes: 9, tool: 'numberline',
          task: '분자가 1인 세 분수 가운데 가장 큰 분수가 어느 점인지 골라요. 한 조각의 크기를 떠올려요.',
          teacher: '"1/2, 1/3, 1/6 중 한 조각이 가장 큰 것은 어느 것일까요?" 분모가 가장 작은 1/2이라고 말하게 한다. 분모가 가장 큰 1/6을 가장 큰 분수로 고른 학생에게는 같은 피자를 6조각으로 나눈 한 조각을 떠올리게 한다.',
          levels: NLF('read'),
          items: [
            rdF('가는 4분의 1, 나는 2분의 1, 다는 8분의 1이에요. 가장 큰 분수는 어느 점일까요?', 8, [1 / 4, 1 / 2, 1 / 8], ['가', '나', '다'], 1),
            rdF('가는 6분의 1, 나는 3분의 1, 다는 2분의 1이에요. 가장 큰 분수는 어느 점일까요?', 6, [1 / 6, 1 / 3, 1 / 2], ['가', '나', '다'], 2),
            rdF('가는 10분의 1, 나는 5분의 1, 다는 2분의 1이에요. 가장 작은 분수는 어느 점일까요?', 10, [1 / 10, 1 / 5, 1 / 2], ['가', '나', '다'], 0),
            rdF('더 해 보기: 가는 12분의 1, 나는 4분의 1, 다는 6분의 1이에요. 가장 큰 분수는 어느 점일까요?', 12, [1 / 12, 1 / 4, 1 / 6], ['가', '나', '다'], 1, { extra: true }),
          ] },
        { id: 'a3', title: '활동 3. 더 많이 먹은 사람의 양 색칠하기', minutes: 8, tool: 'fraction',
          task: '두 사람이 먹은 양을 분수로 견주어 더 많이 먹은 사람의 양만큼 색칠해요. 분모가 같은지 단위분수인지 먼저 살펴요.',
          teacher: '"민지는 9분의 4, 준호는 9분의 7만큼 먹었어요. 분모가 같으니 무엇을 견주면 될까요?" 분자 4와 7을 견주어 준호가 더 많다고 말하게 한다. 단위분수끼리 견주는 문항에서는 "분자가 같을 때는 분모가 작은 쪽이 한 조각이 커요"라고 정리한다.',
          levels: FR,
          items: [
            col('민지는 9분의 4, 준호는 9분의 7만큼 먹었어요. 더 많이 먹은 사람의 양만큼 색칠해 보세요.', 'strip', 9, 7),
            col('가는 12분의 5, 나는 12분의 3만큼 칠했어요. 더 많이 칠한 쪽의 양만큼 색칠해 보세요.', 'pizza', 12, 5),
            col('리본 가는 전체의 3분의 1, 리본 나는 5분의 1만큼이에요. 더 긴 쪽의 양만큼 색칠해 보세요.', 'strip', 3, 1),
            col('더 해 보기: 물통에 4분의 1과 6분의 1만큼 물을 넣었어요. 더 많이 넣은 양만큼 색칠해 보세요.', 'pizza', 4, 1, { extra: true }),
          ] },
      ],
      wrapT: '"분모가 같은 분수와 분자가 1인 분수는 각각 어떻게 크기를 견주나요?" 분모가 같으면 분자가 큰 쪽, 분자가 1이면 분모가 작은 쪽이 크다는 두 규칙을 말하게 한다. 출구 3번에서 분모가 큰 쪽을 고른 학생은 단위분수 문제임을 알아차렸는지 확인하는 질문을 던진다.',
      exit: [
        { type: 'choice', prompt: '7분의 2와 7분의 5 가운데 더 큰 분수는 어느 것일까요?', options: ['7분의 2', '7분의 5'], answer: 1, explain: '분모가 같으니 분자가 큰 7분의 5가 더 커요.' },
        { type: 'choice', prompt: '5분의 3과 5분의 1을 견줄 때 알맞은 것은 무엇일까요?', options: ['5분의 3이 더 크다', '5분의 1이 더 크다', '같다'], answer: 0, explain: '분모가 같으면 분자가 큰 쪽이 더 큰 분수예요.' },
        { type: 'tool', tool: 'numberline', options: { mode: 'read', min: 0, max: 1, step: 1, sub: 6, format: 'frac', labels: 'ends', marks: [1 / 3, 1 / 6], choices: ['6분의 1', '3분의 1'], question: '가 점이 나타내는 분수를 고르세요.' }, prompt: '가 점이 나타내는 분수는 무엇일까요?', target: { pick: 1 } },
      ],
      ws: { title: '분수 크기를 견주어 설명하기', items: [
        { type: 'table', prompt: '두 분수 중 더 큰 분수를 쓰고 까닭을 골라 쓰세요.', columns: ['두 분수', '더 큰 분수', '까닭(분자/분모)'], cells: [['6/11, 9/11', '', ''], ['1/3, 1/7', '', ''], ['2/9, 7/9', '', '']], answer: '9/11(분자), 1/3(분모가 작은 쪽), 7/9(분자)' },
        { type: 'figure', prompt: '점이 나타내는 분수를 쓰고 가장 큰 분수에 ○ 하세요.', tool: 'numberline', wide: true, figures: [
          { options: { mode: 'read', min: 0, max: 1, step: 1, sub: 8, format: 'frac', labels: 'ends', marks: [5 / 8] }, caption: BLANK + '분의 ' + BLANK },
          { options: { mode: 'read', min: 0, max: 1, step: 1, sub: 8, format: 'frac', labels: 'ends', marks: [1 / 8] }, caption: BLANK + '분의 ' + BLANK }], answer: '8분의 5, 8분의 1 — 8분의 5가 더 큼' },
        { type: 'choice', prompt: '분자가 1인 분수 중 가장 큰 분수에 ○ 하세요.', options: ['1/10', '1/4', '1/7'], answer: '1/4' },
        { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '분모가 같은 분수는 ______가 클수록 크고, 분자가 1인 분수는 ______가 작을수록 커요.', answer: '분자, 분모' },
        { type: 'short', prompt: '5분의 2와 5분의 4를 견줄 때와 1/5과 1/9를 견줄 때 보는 곳이 다른 까닭을 써 보세요.' },
      ], easy: { note: '분모가 같으면 분자를, 분자가 1이면 분모를 보아요.', items: [
        { type: 'table', prompt: '두 분수 중 더 큰 분수를 쓰세요.', columns: ['두 분수', '2/7, 5/7', '1/3, 1/4'], cells: [['더 큰 분수', '', '']], answer: '5/7, 1/3' },
        { type: 'figure', prompt: '점이 나타내는 분수를 쓰세요.', tool: 'numberline', wide: true, figures: [
          { options: { mode: 'read', min: 0, max: 1, step: 1, sub: 6, format: 'frac', labels: 'all', marks: [4 / 6] }, caption: BLANK + '분의 ' + BLANK }], answer: '6분의 4' },
        { type: 'choice', prompt: '8분의 3과 8분의 6 중 더 큰 것에 ○ 하세요.', options: ['8분의 3', '8분의 6'], answer: '8분의 6' },
        { type: 'draw', prompt: '피자 두 개를 그리고 1/2과 1/6만큼 칠해 어느 쪽이 큰지 비교해 보세요.' },
      ] } },
      diff: { easy: '수직선의 모든 눈금 수가 보이는 판에서 점의 위치로 크기를 견줘요.', base: '양 끝 수만 보이는 판에서 분모가 같은 분수와 단위분수를 가려 견줘요.', challenge: '세 분수를 견주고 분자로 볼지 분모로 볼지 까닭을 글로 써요.' },
      notes: '자주 보이는 어려움: ① 규칙을 섞는다(1/3과 1/7에서 분자를 보거나, 4/9와 7/9에서 분모를 본다) → 문제를 읽고 분모가 같은지 분자가 1인지 먼저 묻는다. ② 분모가 다르고 분자도 다른 분수는 4학년에서 배우므로 이 단원에서는 다루지 않는다. ③ 수직선에서 이름 순서를 크기 순서로 읽는다 → 점의 위치로 판단한다.',
    }),
    mk(11, ['[4수01-12]'], {
      title: '0.1씩 세어 소수 한 자리 수 읽고 쓰기',
      objective: '0.1이 몇 개 모였는지 세어 소수 한 자리 수를 읽고 쓰며, 소수를 십분의 몇인 분수와 이어 말할 수 있다.',
      ill: 'a long paper ruler-like number line from zero to two with small flags every tenth and a measuring jug, ', scene: '0.1씩 세기',
      extra: { motif: 'sun', x: 110, y: 190 },
      introT: '"0.1이 3개 모이면 얼마일까요? 0.1이 10개 모이면 얼마일까요?" 하고 묻는다. 10개 모이면 1이라는 말이 나오면 수직선에서 1을 지나면 1.1, 1.2…가 된다고 알려 준다. 1.3을 "1점 삼"이 아니라 "일 점 삼"이라 읽도록 소리 내어 연습하고, 1.3을 13으로 읽는 학생에게는 점의 앞과 뒤를 구분하게 한다.',
      introS: '0.1이 10개 모이면 얼마가 되는지 수직선에서 세어 보고 그다음 수가 어떻게 이어지는지 말해 봐요.',
      acts: [
        { id: 'a1', title: '활동 1. 1보다 큰 소수 읽기', minutes: 9, tool: 'numberline',
          task: '0부터 2까지를 한 칸이 0.1이 되게 나눈 수직선이에요. 점이 나타내는 소수를 써요.',
          teacher: '"1에서 작은 눈금 세 칸 더 간 곳은 얼마일까요?" 1.3이라고 말하게 하고 "일 점 삼"으로 읽게 한다. 1.3을 "13"이나 "1.03"으로 쓴 학생에게는 1과 0.3을 따로 읽게 한 뒤 점 아래 첫째 자리가 0.1 칸의 수임을 짚는다.',
          levels: {
            easy: { mode: 'read', min: 0, max: 2, step: 1, sub: 10, format: 'dec', labels: 'major' },
            base: { mode: 'read', min: 0, max: 2, step: 1, sub: 10, format: 'dec', labels: 'major' },
            challenge: { mode: 'read', min: 0, max: 2, step: 1, sub: 10, format: 'dec', labels: 'ends' },
          },
          items: [
            rdD('키 재기 막대에 점을 찍었어요. 점이 나타내는 소수를 써 보세요.', 1.3, 1.3),
            rdD('물병 눈금 위의 점이에요. 점이 나타내는 소수를 써 보세요.', 1.8, 1.8),
            rdD('리본 길이 눈금 위의 점이 나타내는 수를 소수로 써 보세요.', 1.6, 1.6),
            rdD('더 해 보기: 줄자의 점이 나타내는 소수를 써 보세요.', 1.1, 1.1, { extra: true }),
          ] },
        { id: 'a2', title: '활동 2. 소수를 수직선에 놓기', minutes: 9, tool: 'numberline',
          task: '1보다 작은 소수와 1보다 큰 소수를 수직선에 놓아요. 0.1이 몇 개인지 세어요.',
          teacher: '"1.4는 0.1이 몇 개 모인 수일까요?" 14개라고 말하게 하고 1에서 0.4 더 간 곳이라고 말하게 한다. 1.4를 0.4 자리에 놓은 학생에게는 1을 먼저 건넜는지 되묻는다.',
          levels: {
            easy: { mode: 'place', min: 0, max: 2, step: 1, sub: 10, format: 'dec', labels: 'major' },
            base: { mode: 'place', min: 0, max: 2, step: 1, sub: 10, format: 'dec', labels: 'major' },
            challenge: { mode: 'place', min: 0, max: 2, step: 1, sub: 10, format: 'dec', labels: 'ends' },
          },
          items: [
            { prompt: '1.4가 되는 곳에 점을 놓아 보세요.', toolOptions: { count: 1 }, target: { points: [1.4] } },
            { prompt: '1.9가 되는 곳에 점을 놓아 보세요.', toolOptions: { count: 1 }, target: { points: [1.9] } },
            { prompt: '가는 0.5, 나는 1.2가 되는 곳에 놓아 보세요.', toolOptions: { count: 2 }, target: { points: [0.5, 1.2] } },
            { prompt: '더 해 보기: 가는 1.6, 나는 1.1이 되는 곳에 놓아 보세요.', toolOptions: { count: 2 }, target: { points: [1.6, 1.1] }, extra: true },
          ] },
        { id: 'a3', title: '활동 3. 소수와 십분의 몇 분수 이어 보기', minutes: 8, tool: 'numberline',
          task: '0부터 1까지의 수직선에서 소수로 쓴 점을 보고, 같은 수를 나타내는 분수를 골라요.',
          teacher: '"0.4는 0.1이 4개 모인 수예요. 분수로는 어떻게 쓸까요?" 10분의 4라고 말하게 한다. 4분의 10으로 거꾸로 쓴 학생에게는 전체를 10칸으로 나눈 것 중 4칸이라고 다시 읽게 한다.',
          levels: NLD('read'),
          items: [
            { prompt: '점이 0.4에 있어요. 같은 수를 나타내는 분수를 골라 보세요.', toolOptions: { marks: [0.4], choices: ['10분의 4', '4분의 10', '40분의 1'], question: '알맞은 분수를 고르세요.' }, target: { pick: 0 } },
            { prompt: '점이 0.9에 있어요. 같은 수를 나타내는 분수를 골라 보세요.', toolOptions: { marks: [0.9], choices: ['9분의 10', '10분의 9', '90분의 1'], question: '알맞은 분수를 고르세요.' }, target: { pick: 1 } },
            { prompt: '점이 0.6에 있어요. 같은 수를 나타내는 분수를 골라 보세요.', toolOptions: { marks: [0.6], choices: ['6분의 10', '60분의 1', '10분의 6'], question: '알맞은 분수를 고르세요.' }, target: { pick: 2 } },
            { prompt: '더 해 보기: 점이 0.1에 있어요. 같은 수를 나타내는 분수를 골라 보세요.', toolOptions: { marks: [0.1], choices: ['10분의 1', '1분의 10', '10분의 10'], question: '알맞은 분수를 고르세요.' }, target: { pick: 0 }, extra: true },
          ] },
      ],
      wrapT: '"0.1이 몇 개 모이면 0.7이고, 1.3은 0.1이 몇 개일까요?" 0.7은 7개, 1.3은 13개라고 말하게 한다. 이 단원에서 배운 분수와 소수를 "10분의 7 = 0.7"로 이어 쓰는 연습을 한다. 출구 1번에서 7.0을 고른 학생은 점 아래 수가 0.1의 개수임을 수직선에서 다시 센다.',
      exit: [
        { type: 'choice', prompt: '0.1이 7개 모이면 얼마일까요?', options: ['0.7', '7.0', '0.07'], answer: 0, explain: '0.1이 7개 모이면 0.7이에요.' },
        { type: 'choice', prompt: '1.5와 1.6 중 더 큰 수는 어느 것일까요?', options: ['1.5', '1.6'], answer: 1, explain: '점 아래 첫째 자리가 5보다 6이 커서 1.6이 더 커요.' },
        { type: 'tool', tool: 'numberline', options: { mode: 'read', min: 0, max: 2, step: 1, sub: 10, format: 'dec', labels: 'major', marks: [1.4], question: '점이 나타내는 소수를 쓰세요.' }, prompt: '수직선의 점이 나타내는 소수를 쓰세요.', target: { value: 1.4, form: 'dec' } },
      ],
      ws: { title: '소수 한 자리 수와 분수', items: [
        { type: 'figure', prompt: '점이 나타내는 소수를 쓰세요.', tool: 'numberline', wide: true, figures: [
          { options: { mode: 'read', min: 0, max: 2, step: 1, sub: 10, format: 'dec', labels: 'major', marks: [1.2] }, caption: BLANK },
          { options: { mode: 'read', min: 0, max: 2, step: 1, sub: 10, format: 'dec', labels: 'major', marks: [0.8] }, caption: BLANK }], answer: '1.2, 0.8' },
        { type: 'table', prompt: '빈칸에 알맞은 수를 쓰세요.', columns: ['분수', '2/10', '5/10', '10분의 9', '7/10'], cells: [['소수', '0.2', '', '', '']], answer: '0.5, 0.9, 0.7' },
        { type: 'choice', prompt: '0.3과 같은 분수에 ○ 하세요.', options: ['3/10', '10/3', '30/1'], answer: '3/10' },
        { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '0.1이 10개 모이면 ______이고, 1.3은 1과 0.______이에요.', answer: '1, 3' },
        { type: 'short', prompt: '1.3과 1.8 중 더 큰 수와 그렇게 생각한 까닭을 써 보세요.' },
      ], easy: { note: '작은 눈금 한 칸은 0.1이에요. 1을 지나면 1.1, 1.2…로 이어져요.', items: [
        { type: 'figure', prompt: '점이 나타내는 소수를 쓰세요.', tool: 'numberline', wide: true, figures: [
          { options: { mode: 'read', min: 0, max: 2, step: 1, sub: 10, format: 'dec', labels: 'major', marks: [1.5] }, caption: BLANK }], answer: '1.5' },
        { type: 'table', prompt: '빈칸에 알맞은 소수를 쓰세요.', columns: ['분수', '3/10', '6/10'], cells: [['소수', '0.3', '']], answer: '0.6' },
        { type: 'choice', prompt: '0.1이 4개 모인 수에 ○ 하세요.', options: ['0.4', '4.0'], answer: '0.4' },
        { type: 'draw', prompt: '0부터 2까지 수직선에 0.1씩 눈금을 그리고 1.4에 점을 찍어 보세요.' },
      ] } },
      diff: { easy: '수직선의 큰 눈금 수가 보이고 0.1 칸을 하나씩 세어 소수를 읽어요.', base: '1과 2만 보이는 수직선에서 0.1 칸 수를 세어 읽고 놓아요.', challenge: '눈금 수가 양 끝뿐인 수직선에서 소수를 읽고 분수와 이어 말해요.' },
      notes: '자주 보이는 어려움: ① 1.3을 13이나 1.03으로 쓴다 → 점 앞의 수는 1, 점 뒤의 수는 0.1이 몇 개인지. ② 0.4와 4/10을 다른 수로 본다 → 0.1이 4개 모인 수. ③ 1.5와 1.15처럼 소수 자릿수가 다른 수를 비교한다 → 이 단원은 소수 한 자리까지만 한다.',
    }),
  ],
});
})();
