/* 3학년 1학기 5. 길이와 시간 — 단원 파일(차시 10개, 기존 차시 없음).
 * 흐름: 1분=60초, 초바늘 읽기(1) → 초를 분·초로 바꾸기(2) → 시·분·초 시각 읽기(3) → 초 단위 시간 더하기(4) → 빼기(5)
 *      → 생활 속 시간 계산·시각 뒤로 가기(6) → mm 눈금 읽고 만들기·알맞은 단위(7) → km와 m(8) → 길이 어림(9) → 단위 관계 정리(10).
 * 성취기준은 units-index 의 [4수03-13]~[4수03-16]. units-index 의 plan 순서(초 읽기 → 초 계산 → mm·km → 관계 정리)를 그대로 따랐다.
 * 교구 메모: clock 은 시·분만 그려서 초는 numberline(초바늘 눈금을 펴 놓은 수직선)으로 다룬다. 교과서의 길이 단원 순서(길이 먼저)와
 *   plan 순서가 다르지만 plan 번호·성취기준 대응을 우선했다.
 */
(function () {
const UID = 'g3-math-1-05', CU = 'g3-수학-1학기-5', UT = '5. 길이와 시간';
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
// 초 수직선(0~60초, 초바늘 숫자 한 칸 = 5초) 읽기·뛰기용 단계 옵션
const SEC = (mode, extra) => ({
  easy: Object.assign({ mode, min: 0, max: 60, step: 5, sub: 1, labels: 'all' }, extra),
  base: Object.assign({ mode, min: 0, max: 60, step: 5, sub: 1, labels: 'major' }, extra),
  challenge: Object.assign({ mode, min: 0, max: 60, step: 5, sub: 5, labels: 'major' }, extra),
});
// 0~180초(분 눈금 60초) 수직선 단계 옵션: 쉬움은 5초 눈금, 기본 10초 눈금, 도전은 30초 눈금
const MIN3 = (mode, extra) => ({
  easy: Object.assign({ mode, min: 0, max: 180, step: 60, sub: 12, labels: 'major' }, extra),
  base: Object.assign({ mode, min: 0, max: 180, step: 60, sub: 6, labels: 'major' }, extra),
  challenge: Object.assign({ mode, min: 0, max: 180, step: 60, sub: 2, labels: 'major' }, extra),
});
// 길이(mm) 읽기용 단계 옵션 / 단위 고르기용 / km 수직선용 / 초 뛰기용
const RUL = (extra) => ({
  easy: Object.assign({ mode: 'ruler', max: 8, readOnly: true, guides: true }, extra),
  base: Object.assign({ mode: 'ruler', max: 8, readOnly: true }, extra),
  challenge: Object.assign({ mode: 'ruler', max: 10, readOnly: true }, extra),
});
const rulerMM = (prompt, name, len, start) => ({
  prompt, toolOptions: { object: Object.assign({ name, len }, start ? { start } : {}), askNum: { q: '길이는 몇 mm일까요?', unit: 'mm' } }, target: { num: Math.round(len * 10) },
});
const unitItem = (prompt, things, units) => ({ prompt, toolOptions: { things: things.map((t) => ({ name: t })) }, target: { units } });
const UNITS = { units: ['mm', 'cm', 'm', 'km'] };
const KM = (mode, extra) => ({
  easy: Object.assign({ mode, min: 0, max: 3000, step: 1000, sub: 4, labels: 'major' }, extra),
  base: Object.assign({ mode, min: 0, max: 3000, step: 1000, sub: 4, labels: 'major' }, extra),
  challenge: Object.assign({ mode, min: 0, max: 3000, step: 1000, sub: 2, labels: 'major' }, extra),
});
const pickKm = (v, prompt, choices, pick, extra) => Object.assign({ prompt, toolOptions: { marks: [v], choices, question: '점이 나타내는 거리를 고르세요.' }, target: { pick } }, extra || {});
const readSec = (v, question, tag) => ({ prompt: question, toolOptions: { marks: [v], question: tag || '점이 나타내는 시간은 몇 초일까요?' }, target: { value: v } });
const pickMin = (v, prompt, choices, pick, extra) => Object.assign({ prompt, toolOptions: { marks: [v], choices, question: '점이 나타내는 시간을 고르세요.' }, target: { pick } }, extra || {});

PaperLessons.registerUnit({
  id: UID, schema: 'edu-unit.v1', catalogUnit: CU, grade: 3, subject: '수학', unitTitle: UT,
  flow: '1분 = 60초임을 초바늘 한 바퀴로 확인하고(1차시), 초로 나타낸 시간을 몇 분 몇 초로 바꾸는 말을 익힌 뒤(2차시) 시·분·초 시각을 차례로 읽습니다(3차시). 4~6차시에서는 초끼리 더해 60이 넘으면 1분으로 받아올리고, 분 단위에서 빼야 하면 1분을 60초로 바꾸어 빼는 일을 수직선 화살표와 생활 기록으로 해 봅니다. 7~9차시는 1 cm = 10 mm를 자의 눈금에서 확인해 mm로 재고, 1 km = 1000 m를 수직선으로 익힌 뒤 알맞은 단위를 골라 길이를 어림합니다. 10차시에서 cm와 mm, km와 m 두 가지로 같은 길이를 다르게 쓰는 단원 정리를 합니다.',
  refs: {},
  lessons: [
    mk(1, ['[4수03-13]'], {
      title: '스톱워치로 1분이 몇 초인지 알아보기',
      objective: '초바늘이 한 바퀴 도는 시간이 60초이고 60초가 1분임을 알고, 초바늘이 가리키는 곳을 5초씩 세어 몇 초인지 말할 수 있다.',
      ill: 'a big round stopwatch with a long mint second hand beside a paper running track where children race, ', scene: '1분은 60초',
      introT: '"달리기 기록을 잴 때 쓰는 시계를 본 적 있나요? 분보다 짧은 시간은 무엇으로 말할까요?" 하고 묻고 스톱워치의 초바늘이 한 바퀴 도는 것을 보여 준다. "여기까지 오는 데 몇 분이 걸렸을까요?"에 학생들이 "1초, 2초…" 하고 1씩 세려 하면 숫자 하나가 5초임을 활동 1에서 짚는다.',
      introS: '스톱워치의 초바늘이 한 바퀴 도는 모습을 보고, 한 바퀴가 얼마나 걸리는지 짝에게 말해 봐요.',
      acts: [
        { id: 'a1', title: '활동 1. 초바늘이 가리키는 곳 읽기', minutes: 9, tool: 'numberline',
          task: '초바늘 한 바퀴를 길게 펴 놓은 수직선이에요. 큰 눈금 한 칸은 5초예요. 점이 가리키는 시간을 읽어요.',
          teacher: '"초바늘이 숫자 3에 있으면 몇 초일까요?" 숫자 3을 그대로 읽어 3초라고 말한 학생에게는 "큰 눈금 한 칸은 몇 초였지요? 0에서 눈금을 하나씩 세어 봐요"라고 되묻는다. 눈금 선을 세어 하나 더 많게 읽지 않도록 칸을 세게 한다.',
          levels: SEC('read'),
          items: [
            readSec(15, '달리기 선수가 결승선에 들어왔어요. 초시계 바늘이 가리키는 시간을 읽어 보세요.'),
            readSec(40, '라면이 익는 시간을 재고 있어요. 초바늘이 가리키는 곳은 몇 초일까요?'),
            readSec(55, '신호등이 바뀌기 직전이에요. 초바늘이 멈춘 곳을 읽어 보세요.'),
            Object.assign(readSec(25, '더 해 보기: 물이 끓는 데 걸린 시간을 초바늘로 읽어 보세요.'), { extra: true }),
          ] },
        { id: 'a2', title: '활동 2. 5초씩 뛰어 세기', minutes: 9, tool: 'numberline',
          task: '초바늘 숫자 한 칸은 5초예요. 5초씩 뛰어 세어 초바늘이 한 바퀴를 도는 데 몇 번 뛰는지 알아봐요.',
          teacher: '"초바늘이 12에서 숫자 4까지 갔어요. 몇 초가 지났을까요?" 4초라고 답하면 화살표를 4번 그리게 하고 5, 10, 15, 20으로 읽게 한다. 마지막 문항은 "5초씩 12번이면 한 바퀴"를 말로 정리해 1분과 연결한다.',
          levels: SEC('jump', { fixedFrom: 0, hopStep: 5 }),
          items: [
            { prompt: '초바늘이 12에서 숫자 4까지 갔어요. 5초씩 4번 뛰어 보세요.', target: { from: 0, size: 5, count: 4 },
              predict: { q: '초바늘이 숫자 4를 가리키면 몇 초일까요?', options: ['4초', '20초', '40초'], answer: 1 },
              conclude: '숫자 한 칸이 5초라서 숫자 4는 20초예요.' },
            { prompt: '초바늘이 숫자 9까지 갔어요. 5초씩 9번 뛰어 몇 초에 닿는지 보세요.', target: { from: 0, size: 5, count: 9 } },
            { prompt: '5초씩 뛰어 초바늘이 한 바퀴를 돌아 60초에 닿아 보세요.', target: { from: 0, size: 5, end: 60 },
              conclude: '5초씩 12번 뛰면 60초, 초바늘이 한 바퀴 돌아요.' },
            { prompt: '이번에는 10초씩 뛰어 60초에 닿아 보세요. 몇 번 뛰면 될까요?', toolOptions: { hopSize: 10 }, target: { from: 0, size: 10, end: 60 } },
          ] },
        { id: 'a3', title: '활동 3. 60초는 1분', minutes: 8, tool: 'numberline',
          task: '수직선에 분 눈금(60초)이 표시되어 있어요. 점이 나타내는 시간을 몇 분 또는 몇 분 몇 초로 읽어요.',
          teacher: '"초바늘이 한 바퀴를 돌면 몇 초가 지났지요? 그것을 다른 말로 하면?" 1분과 60초가 같은 시간임을 말하게 한다. 점이 60보다 30 더 간 곳에서 "1분 3초"를 고르는 학생에게는 60초가 이미 1분이 되었음을 큰 눈금으로 보여 준다.',
          levels: MIN3('read'),
          items: [
            pickMin(60, '수직선의 점이 60초에 있어요. 이 시간은 몇 분일까요?', ['1분', '6분', '60분'], 0, { conclude: '60초는 1분이에요.' }),
            pickMin(120, '점이 큰 눈금 둘째 칸 끝에 있어요. 몇 분일까요?', ['1분', '2분', '12분'], 1),
            pickMin(90, '점이 1분 눈금에서 30초 더 갔어요. 어떻게 읽을까요?', ['1분 3초', '1분 30초', '2분 30초'], 1),
            pickMin(150, '더 해 보기: 점이 2분 눈금에서 30초 더 갔어요. 읽어 보세요.', ['2분 30초', '1분 50초', '5분'], 0, { extra: true }),
          ] },
      ],
      wrapT: '"초바늘이 숫자 6에 있으면 6초라고 해도 될까요?" 하고 묻고 숫자 하나가 5초임을 다시 말하게 한다. 출구 2번을 5초 칸 대신 숫자 그대로 읽은 학생은 2차시 시작에 수직선을 5씩 세는 활동으로 다시 만난다.',
      exit: [
        { type: 'choice', prompt: '1분은 몇 초일까요?', options: ['10초', '60초', '100초'], answer: 1, explain: '초바늘이 한 바퀴 도는 시간이 60초이고, 1분과 같아요.' },
        { type: 'tool', tool: 'numberline', options: { mode: 'read', min: 0, max: 60, step: 5, sub: 1, labels: 'major', marks: [35], question: '점이 나타내는 시간은 몇 초일까요?' }, prompt: '초시계 바늘이 가리키는 곳을 읽어 보세요.', target: { value: 35 } },
        { type: 'choice', prompt: '2분은 몇 초일까요?', options: ['22초', '120초', '200초'], answer: 1, explain: '1분이 60초이니까 2분은 60 + 60 = 120초예요.' },
      ],
      ws: { title: '초바늘과 1분', items: [
        { type: 'figure', prompt: '점이 나타내는 시간을 쓰세요.', tool: 'numberline', wide: true, figures: [
          { options: { mode: 'read', min: 0, max: 60, step: 5, sub: 1, labels: 'major', marks: [20] }, caption: BLANK + '초' },
          { options: { mode: 'read', min: 0, max: 60, step: 5, sub: 1, labels: 'major', marks: [45] }, caption: BLANK + '초' }], answer: '20초, 45초' },
        { type: 'table', prompt: '빈칸에 알맞은 말을 쓰세요.', columns: ['시간', '60초', '120초', '150초'], cells: [['분과 초', '1분', '', '']], answer: '2분, 2분 30초' },
        { type: 'choice', prompt: '1분과 같은 시간에 ○ 하세요.', options: ['10초', '60초', '100초'], answer: '60초' },
        { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '초바늘이 한 바퀴 돌면 ______초가 지나고, 이것을 ______분이라고 해요.', answer: '60, 1' },
        { type: 'short', prompt: '초바늘이 숫자 6에 있을 때 6초가 아닌 까닭을 써 보세요.' },
      ], easy: { note: '초바늘 숫자 한 칸은 5초예요. 0에서부터 5, 10, 15… 하고 세어요.', items: [
        { type: 'figure', prompt: '점이 나타내는 시간을 쓰세요.', tool: 'numberline', wide: true, figures: [
          { options: { mode: 'read', min: 0, max: 60, step: 5, sub: 1, labels: 'all', marks: [30] }, caption: BLANK + '초' }], answer: '30초' },
        { type: 'table', prompt: '빈칸에 알맞은 수를 쓰세요.', columns: ['초바늘 숫자', '1', '2', '3'], cells: [['몇 초', '5초', '', '']], answer: '10초, 15초' },
        { type: 'choice', prompt: '초바늘이 한 바퀴 도는 시간에 ○ 하세요.', options: ['1분', '1초'], answer: '1분' },
        { type: 'draw', prompt: '둥근 시계를 그리고 초바늘이 한 바퀴 도는 길을 화살표로 그려 보세요.' },
      ] } },
      diff: { easy: '큰 눈금마다 수가 모두 적혀 있어서 점이 어느 칸인지 세어 읽어요.', base: '큰 눈금 5초 칸을 세어 읽어요.', challenge: '1초 눈금까지 있는 수직선에서 큰 눈금 사이를 한 칸씩 세어 읽어요.' },
      notes: '자주 보이는 어려움: ① 초바늘이 가리키는 숫자를 그대로 초로 읽는다(숫자 4 → 4초) → 숫자 한 칸은 5초, 수직선에서 5씩 세기. ② 1분 30초와 90초가 같은 시간임을 낯설어한다 → 2차시에서 수직선으로 다룬다. ③ 60초를 넘으면 다시 0부터 센다 → 큰 눈금 60에 닿으면 1분이 지났음을 말로 확인한다.',
    }),
    mk(2, ['[4수03-13]'], {
      title: '90초와 1분 30초가 같은 시간인 까닭 말하기',
      objective: '초로 나타낸 시간을 몇 분 몇 초로, 몇 분 몇 초를 초로 바꾸어 쓰고 그렇게 바꾸는 방법을 설명할 수 있다.',
      ill: 'a paper hourglass and a small kitchen timer on a table beside a measuring tape with minute marks, ', scene: '분과 초 바꾸기',
      extra: { motif: 'flower', x: 110, y: 214 },
      introT: '"스톱워치가 90초를 가리켰어요. 1분 30초라고 말하는 친구도 있고 90초라고 말하는 친구도 있어요. 누가 맞을까요?" 하고 묻는다. 둘 다 맞다는 답이 나오면 까닭을 말하게 하고, 틀렸다고 하는 학생에게는 활동 1의 수직선에서 같은 점을 두 가지로 읽게 한다.',
      introS: '90초와 1분 30초 가운데 어느 쪽이 더 긴 시간일지 생각해서 짝과 이야기해 봐요.',
      acts: [
        { id: 'a1', title: '활동 1. 초를 분과 초로 읽기', minutes: 9, tool: 'numberline',
          task: '점이 가리키는 시간을 몇 분 몇 초로 읽어요. 큰 눈금 하나는 60초, 곧 1분이에요.',
          teacher: '"점이 큰 눈금 1을 지나 15칸 더 갔어요. 몇 분 몇 초라고 읽을까요?" 75초를 "7분 5초"로 읽은 학생에게는 큰 눈금이 몇 번째인지 먼저 보게 하고, 60을 뺀 나머지가 초라는 순서를 말로 정리한다.',
          levels: MIN3('read'),
          items: [
            pickMin(75, '수직선의 점이 75초에 있어요. 몇 분 몇 초일까요?', ['7분 5초', '1분 15초', '1분 75초'], 1),
            pickMin(105, '점이 105초에 있어요. 몇 분 몇 초로 바꾸어 읽을까요?', ['1분 45초', '1분 5초', '10분 5초'], 0),
            pickMin(140, '점이 큰 눈금 둘째 칸을 지나 20초 더 갔어요. 몇 분 몇 초일까요?', ['1분 40초', '2분 20초', '2분 40초'], 1),
            pickMin(170, '더 해 보기: 점이 170초에 있어요. 몇 분 몇 초일까요?', ['2분 50초', '2분 10초', '1분 70초'], 0, { extra: true }),
          ] },
        { id: 'a2', title: '활동 2. 분과 초만큼 화살표 그리기', minutes: 9, tool: 'numberline',
          task: '몇 분 몇 초를 화살표로 나타내 봐요. 1분은 60초 화살표 한 번이에요.',
          teacher: '"1분 20초를 화살표로 그리려면 먼저 몇 초를 뛰어야 할까요?" 60초 먼저, 남은 20초 순서로 두 번에 나누어 뛰는 학생을 칭찬한다. 한 번에 80을 뛰어도 맞으므로 "같은 곳에 닿았나요?"로 두 방법이 같은 시간임을 짚는다.',
          levels: {
            easy: { mode: 'jump', min: 0, max: 180, step: 60, sub: 6, labels: 'major', fixedFrom: 0, hopStep: 10, hopSize: 60, showValue: true },
            base: { mode: 'jump', min: 0, max: 180, step: 60, sub: 6, labels: 'major', fixedFrom: 0, hopStep: 10, hopSize: 60 },
            challenge: { mode: 'jump', min: 0, max: 180, step: 60, sub: 2, labels: 'major', fixedFrom: 0, hopStep: 10, hopSize: 10 },
          },
          items: [
            { prompt: '1분 20초만큼 화살표를 그려 보세요. 닿은 곳은 몇 초일까요?', target: { from: 0, end: 80 } },
            { prompt: '1분 50초만큼 화살표로 나타내 보세요.', target: { from: 0, end: 110 } },
            { prompt: '2분 30초만큼 화살표를 이어서 그려 보세요.', target: { from: 0, end: 150 },
              conclude: '2분 30초는 60 + 60 + 30 = 150초예요.' },
            { prompt: '더 해 보기: 2분 50초만큼 화살표로 나타내 보세요.', target: { from: 0, end: 170 }, extra: true },
          ] },
        { id: 'a3', title: '활동 3. 수직선에 시간 놓기', minutes: 8, tool: 'numberline',
          task: '몇 분 몇 초를 수직선 위에 점으로 놓아요. 분은 60초로 바꾸어 생각해요.',
          teacher: '"1분 40초는 수직선 어디쯤일까요?" 큰 눈금 1과 2 사이에 놓는 것을 확인한다. 점을 40 자리에 놓은 학생에게는 "1분이 먼저 지났어요. 40초는 어디서부터 더 갔을까요?"라고 묻는다.',
          levels: MIN3('place'),
          items: [
            { prompt: '1분 40초가 되는 곳에 점을 놓아 보세요.', toolOptions: { count: 1 }, target: { points: [100] } },
            { prompt: '1분 10초가 되는 곳에 점을 놓아 보세요.', toolOptions: { count: 1 }, target: { points: [70] } },
            { prompt: '2분 30초가 되는 곳에 점을 놓아 보세요.', toolOptions: { count: 1 }, target: { points: [150] } },
            { prompt: '가는 1분 20초, 나는 2분 10초가 되는 곳에 놓아 보세요.', toolOptions: { count: 2 }, target: { points: [80, 130] } },
          ] },
      ],
      wrapT: '"3분 20초를 초로 바꾸려면 어떻게 계산했나요?" 3분을 먼저 60 × 3 = 180초로 바꾸고 20초를 더했다는 설명을 듣는다. 출구 1번에서 320초를 고른 학생은 분 옆에 초를 그대로 붙인 것이므로 수직선 한 칸이 60임을 다음 시간 도입에서 다시 짚는다.',
      exit: [
        { type: 'choice', prompt: '3분 20초는 몇 초일까요?', options: ['320초', '200초', '80초'], answer: 1, explain: '3분은 180초이고 거기에 20초를 더하면 200초예요.' },
        { type: 'choice', prompt: '90초를 몇 분 몇 초로 바꾸면 어떻게 될까요?', options: ['9분 0초', '1분 30초', '1분 90초'], answer: 1, explain: '90초에서 60초를 1분으로 바꾸면 1분 30초가 남아요.' },
        { type: 'tool', tool: 'numberline', options: { mode: 'read', min: 0, max: 180, step: 60, sub: 12, labels: 'major', marks: [125], choices: ['2분 5초', '1분 25초', '2분 25초'], question: '점이 나타내는 시간을 고르세요.' }, prompt: '점이 나타내는 시간을 몇 분 몇 초로 고르세요.', target: { pick: 0 } },
      ],
      ws: { title: '초와 분 바꾸기', items: [
        { type: 'table', prompt: '빈칸에 알맞은 시간을 쓰세요.', columns: ['초', '분과 초'], cells: [['80초', ''], ['', '2분 10초'], ['200초', ''], ['', '1분 5초']], answer: '1분 20초, 130초, 3분 20초, 65초' },
        { type: 'figure', prompt: '화살표를 보고 빈칸을 채우세요.', tool: 'numberline', wide: true, figures: [
          { options: { mode: 'jump', min: 0, max: 180, step: 60, sub: 6, fixedFrom: 0, labels: 'major' }, state: { from: 0, hops: [60, 30] }, caption: BLANK + '초 = ' + BLANK + '분 ' + BLANK + '초' }], answer: '90초 = 1분 30초' },
        { type: 'choice', prompt: '2분 15초와 같은 시간에 ○ 하세요.', options: ['215초', '135초', '75초'], answer: '135초' },
        { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '100초 = 60초 + 40초 = ______분 ______초', answer: '1, 40' },
        { type: 'short', prompt: '"150초는 1분 50초예요"라고 말한 친구에게 어떻게 알려 줄지 써 보세요.' },
      ], easy: { note: '큰 눈금 한 칸은 60초(1분)예요. 60을 넘으면 1분을 먼저 떼어 내요.', items: [
        { type: 'table', prompt: '빈칸에 알맞은 시간을 쓰세요.', columns: ['초', '분과 초'], cells: [['70초', ''], ['', '1분 20초']], answer: '1분 10초, 80초' },
        { type: 'figure', prompt: '점이 나타내는 시간을 몇 분 몇 초로 쓰세요.', tool: 'numberline', wide: true, figures: [
          { options: { mode: 'read', min: 0, max: 180, step: 60, sub: 6, labels: 'major', marks: [90] }, caption: BLANK + '분 ' + BLANK + '초' }], answer: '1분 30초' },
        { type: 'choice', prompt: '1분 10초와 같은 시간에 ○ 하세요.', options: ['70초', '110초'], answer: '70초' },
        { type: 'draw', prompt: '1분 15초를 수직선에 점으로 나타내 보세요.' },
      ] } },
      diff: { easy: '5초 눈금이 있는 수직선에서 점의 자리를 찾아요. 도착점의 수가 보여요.', base: '10초 눈금 수직선에서 큰 눈금 수를 보고 분을 먼저 떼어 내요.', challenge: '30초 눈금뿐인 수직선에서 눈금 사이의 시간을 어림해 읽고 점을 놓아요.' },
      notes: '자주 보이는 어려움: ① 몇 분 몇 초를 이어 써서 숫자 하나로 읽는다(1분 20초 → 120초) → 1분 = 60초라서 60 + 20으로 바꾼다. ② 75초를 7분 5초로 읽는다 → 60을 뺀 나머지가 초이고 뺀 60이 1분이다. ③ 분과 초 사이 단위를 지운다 → 읽은 뒤 단위를 소리 내어 말하게 한다.',
    }),
    mk(3, ['[4수03-13]'], {
      title: '짧은바늘·긴바늘·초바늘을 차례로 읽어 시각 말하기',
      objective: '시계에서 시, 분, 초를 차례로 읽어 "몇 시 몇 분 몇 초"로 말하고, 초바늘 숫자 하나가 5초임을 이용해 설명할 수 있다.',
      ill: 'a big wall clock with three hands, hour minute and thin red second hand, above a paper classroom board, ', scene: '몇 시 몇 분 몇 초',
      extra: { motif: 'star', x: 120, y: 214 },
      introT: '"시계에 바늘이 세 개 있어요. 가장 가늘고 빨리 도는 바늘은 무엇을 알려 줄까요?" 하고 묻고 시, 분, 초를 차례로 말하는 순서를 칠판에 쓴다. 초바늘이 7을 가리킬 때 "7초"라고 읽는 학생이 있으면 활동 2에서 5초씩 세어 다시 읽게 한다.',
      introS: '시계에서 가장 빨리 도는 바늘이 어느 것인지 찾고, 그 바늘이 한 바퀴 도는 시간을 말해 봐요.',
      acts: [
        { id: 'a1', title: '활동 1. 시와 분 먼저 읽기', minutes: 8, tool: 'clock',
          task: '초바늘은 잠시 두고 짧은바늘과 긴바늘을 보고 몇 시 몇 분인지 골라 보세요.',
          teacher: '"시와 분은 어느 바늘이 알려 주지요?" 짧은바늘이 두 숫자 사이일 때 앞 숫자를 읽는다고 짚는다. 8시 20분을 4시 8분으로 읽은 학생은 긴바늘 숫자 한 칸이 5분임을 떠올리게 한다.',
          levels: { easy: { hourZone: true, showMinuteNumbers: true }, base: { showMinuteNumbers: true }, challenge: { showMinuteMarks: false } },
          items: [
            { prompt: '시계를 보고 몇 시 몇 분인지 골라 보세요.', state: { h: 8, m: 20 }, toolOptions: { readOnly: true, choices: ['4시 8분', '8시 20분', '8시 4분'] }, target: { pick: 1, h: 8, m: 20 } },
            { prompt: '수업이 끝난 시각이에요. 시계를 읽어 보세요.', state: { h: 12, m: 50 }, toolOptions: { readOnly: true, choices: ['10시 12분', '12시 50분', '1시 50분'] }, target: { pick: 1, h: 12, m: 50 } },
            { prompt: '버스가 도착한 시각을 골라 보세요.', state: { h: 3, m: 35 }, toolOptions: { readOnly: true, choices: ['3시 35분', '7시 15분', '4시 35분'] }, target: { pick: 0, h: 3, m: 35 } },
            { prompt: '더 해 보기: 시계를 읽어 시각을 골라 보세요.', state: { h: 6, m: 5 }, toolOptions: { readOnly: true, choices: ['6시 1분', '6시 5분', '5시 5분'] }, target: { pick: 1, h: 6, m: 5 }, extra: true },
          ] },
        { id: 'a2', title: '활동 2. 초바늘 숫자를 초로 바꾸기', minutes: 9, tool: 'numberline',
          task: '초바늘이 가리키는 숫자에 5를 곱해 몇 초인지 알아요. 수직선에서 점을 읽고 확인해요.',
          teacher: '"초바늘이 숫자 7에 있으면 몇 초일까요?" 5씩 7번 세어 35초라고 말하게 한다. 숫자 7을 보고 7초라고 쓴 학생에게는 "초바늘이 한 바퀴 도는 데 60초인데 숫자는 12개예요. 한 칸은 몇 초일까요?"라고 묻는다.',
          levels: SEC('read'),
          items: [
            readSec(30, '초바늘이 숫자 6에 있어요. 수직선의 점을 읽어 몇 초인지 써 보세요.'),
            readSec(50, '초바늘이 숫자 10을 가리켜요. 몇 초인지 수직선에서 읽어 보세요.'),
            readSec(10, '초바늘이 숫자 2에 있어요. 수직선의 점이 나타내는 시간은 몇 초일까요?'),
            readSec(45, '초바늘이 숫자 9에 있어요. 수직선에서 읽어 몇 초인지 써 보세요.'),
          ] },
        { id: 'a3', title: '활동 3. 몇 시 몇 분 몇 초 말하기', minutes: 9, tool: 'clock',
          task: '짧은바늘, 긴바늘, 초바늘을 차례로 읽어 시각을 골라요. 초바늘 숫자는 5를 곱해요.',
          teacher: '"초바늘이 8을 가리켜요. 몇 초일까요?" 먼저 40초로 바꾸게 한 뒤 시, 분, 초 순서로 말하게 한다. 보기에서 "3시 10분 4초"를 고른 학생은 초바늘 숫자를 그대로 초로 읽은 것이다.',
          levels: { easy: { hourZone: true, showMinuteNumbers: true }, base: { showMinuteNumbers: true }, challenge: { showMinuteMarks: false } },
          items: [
            { prompt: '시계에는 짧은바늘과 긴바늘만 그려져 있어요. 짧은바늘은 3과 4 사이, 긴바늘은 2에 있고, 초바늘은 4를 가리켰다고 해요. 시각을 골라 보세요.', state: { h: 3, m: 10 }, toolOptions: { readOnly: true, choices: ['3시 10분 20초', '3시 10분 4초', '3시 2분 20초'] }, target: { pick: 0, h: 3, m: 10 } },
            { prompt: '시계에는 짧은바늘과 긴바늘만 그려져 있어요. 짧은바늘은 7과 8 사이, 긴바늘은 9에 있고, 초바늘은 11을 가리켰다고 해요. 시각을 골라 보세요.', state: { h: 7, m: 45 }, toolOptions: { readOnly: true, choices: ['7시 45분 11초', '7시 9분 55초', '7시 45분 55초'] }, target: { pick: 2, h: 7, m: 45 } },
            { prompt: '시계에는 짧은바늘과 긴바늘만 그려져 있어요. 짧은바늘은 9와 10 사이, 긴바늘은 6에 있고, 초바늘도 6을 가리켰다고 해요. 시각을 골라 보세요.', state: { h: 9, m: 30 }, toolOptions: { readOnly: true, choices: ['9시 30분 6초', '9시 6분 30초', '9시 30분 30초'] }, target: { pick: 2, h: 9, m: 30 } },
            { prompt: '더 해 보기: 시계에는 짧은바늘과 긴바늘만 그려져 있어요. 짧은바늘은 1과 2 사이, 긴바늘은 11에 있고, 초바늘은 3을 가리켰다고 해요. 시각을 골라 보세요.', state: { h: 1, m: 55 }, toolOptions: { readOnly: true, choices: ['1시 55분 15초', '2시 55분 15초', '1시 11분 3초'] }, target: { pick: 0, h: 1, m: 55 }, extra: true },
          ] },
      ],
      wrapT: '"시각을 말할 때 어느 바늘부터 읽으면 좋을까요? 초바늘은 어떻게 읽었나요?" 시, 분, 초 순서와 "숫자에 5를 곱한다"를 짝에게 설명하게 한다. 출구 2번을 틀린 학생은 짧은바늘이 두 숫자 사이일 때 어느 숫자를 읽는지 다음 시간에 다시 묻는다.',
      exit: [
        { type: 'choice', prompt: '초바늘이 숫자 9를 가리키면 몇 초일까요?', options: ['9초', '45초', '90초'], answer: 1, explain: '숫자 한 칸이 5초라서 5 × 9 = 45초예요.' },
        { type: 'tool', tool: 'clock', options: { readOnly: true, choices: ['2시 40분', '8시 10분', '2시 8분'] }, state: { h: 2, m: 40 }, prompt: '시계를 보고 몇 시 몇 분인지 고르세요.', target: { pick: 0, h: 2, m: 40 } },
        { type: 'choice', prompt: '"5시 12분 30초"에서 초를 나타내는 수는 얼마일까요?', options: ['5', '12', '30'], answer: 2, explain: '시, 분, 초 순서라서 마지막 수 30이 초예요.' },
      ],
      ws: { title: '시계의 시·분·초', items: [
        { type: 'figure', prompt: '시계를 보고 몇 시 몇 분인지 쓰세요.', tool: 'clock', figures: [
          { state: { h: 2, m: 35 }, caption: BLANK + '시 ' + BLANK + '분' }, { state: { h: 10, m: 50 }, caption: BLANK + '시 ' + BLANK + '분' }, { state: { h: 5, m: 15 }, caption: BLANK + '시 ' + BLANK + '분' }], answer: '2시 35분, 10시 50분, 5시 15분' },
        { type: 'table', prompt: '초바늘이 12에서 출발해 아래 숫자까지 도는 데 걸린 시간은 몇 초인지 쓰세요. 숫자 12는 한 바퀴를 다 돌아 온 때예요.', columns: ['초바늘 숫자', '1', '5', '8', '12'], cells: [['몇 초', '5초', '', '', '']], answer: '25초, 40초, 60초' },
        { type: 'choice', prompt: '초바늘이 4를 가리켜요. 몇 초일까요?', options: ['4초', '20초', '40초'], answer: '20초' },
        { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '시각은 시, 분, 초 순서로 읽고, 초바늘 숫자 한 칸은 ______초예요.', answer: '5' },
        { type: 'short', prompt: '초바늘이 숫자 3에 있는데 3초라고 쓴 친구에게 어떻게 말해 줄지 써 보세요.' },
      ], easy: { note: '초바늘 숫자 한 칸은 5초예요. 5, 10, 15… 하고 세어요.', items: [
        { type: 'figure', prompt: '시계를 보고 몇 시 몇 분인지 쓰세요.', tool: 'clock', options: { showMinuteNumbers: true }, figures: [
          { state: { h: 4, m: 15 }, caption: BLANK + '시 ' + BLANK + '분' }, { state: { h: 9, m: 40 }, caption: BLANK + '시 ' + BLANK + '분' }], answer: '4시 15분, 9시 40분' },
        { type: 'table', prompt: '빈칸에 몇 초인지 쓰세요.', columns: ['초바늘 숫자', '1', '2', '3'], cells: [['몇 초', '5초', '', '']], answer: '10초, 15초' },
        { type: 'choice', prompt: '초바늘이 가리키는 숫자가 6이면 몇 초일까요?', options: ['6초', '30초'], answer: '30초' },
        { type: 'draw', prompt: '우리 교실 시계를 그리고 세 바늘에 이름을 써 보세요.' },
      ] } },
      diff: { easy: '분 숫자가 시계 바깥에 보이고 짧은바늘이 있어야 할 자리가 칠해져 있어요.', base: '분 숫자가 보이는 시계에서 시, 분을 읽고 초바늘 숫자에 5를 곱해요.', challenge: '작은 눈금이 없는 시계에서 시각을 읽고 초까지 말해요.' },
      notes: '자주 보이는 어려움: ① 초바늘 숫자를 그대로 초로 읽는다 → 숫자 한 칸은 5초. ② 시와 분을 읽다가 두 바늘을 바꾼다 → 길이를 먼저 견준다. ③ 초를 읽을 때 분바늘 숫자를 같이 쓴다 → 바늘마다 읽는 단위가 다르다는 것을 소리 내어 말한다. 이 단원의 clock 교구는 초바늘을 그리지 않으므로 초는 5초 수직선으로 함께 확인한다.',
    }),
    mk(4, ['[4수03-14]'], {
      title: '달리기 기록 두 개를 더해 몇 분 몇 초로 쓰기',
      objective: '초 단위로 나타낸 두 시간을 더할 때 초끼리 더하고 60초가 넘으면 60초를 1분으로 받아올려 몇 분 몇 초로 나타낼 수 있다.',
      ill: 'two children running laps on a paper track while a teacher holds a stopwatch and a small notebook, ', scene: '초끼리 더하기',
      extra: { motif: 'bird', x: 120, y: 190 },
      introT: '"민지는 50초, 준호는 30초를 달렸어요. 둘이 달린 시간을 합하면 몇 초일까요?" 80초라는 답을 받은 뒤 "80초를 시계로 말하면 어떻게 말할까요?" 하고 묻는다. 50 + 30을 "80초"로 쓰고 끝내는 학생에게는 60초를 넘으면 1분으로 바꾸어 말할 수 있다는 것을 활동 2에서 보여 준다.',
      introS: '두 친구의 달리기 기록을 더하면 몇 초가 되는지 어림하고 짝에게 말해 봐요.',
      acts: [
        { id: 'a1', title: '활동 1. 합이 60초가 안 되는 기록 더하기', minutes: 8, tool: 'numberline',
          task: '출발점에서 더할 시간만큼 화살표를 그려 합을 구해요. 눈금 한 칸은 5초예요.',
          teacher: '"20초에 30초를 더하면 화살표는 어디까지 갈까요?" 큰 눈금 60에 닿기 전까지는 분이 바뀌지 않는다고 짚는다. 40초 + 20초에서 화살표가 큰 눈금 60에 닿으면 "이제 몇 분일까요?"라고 물어 1분을 말하게 한다.',
          levels: MIN3('jump', { hopStep: 5 }),
          items: [
            { prompt: '줄넘기를 20초 했고 30초 더 했어요. 20에서 30만큼 더 가 보세요.', toolOptions: { fixedFrom: 20, hopSize: 10 }, target: { from: 20, end: 50 } },
            { prompt: '숨을 참은 시간이 10초였는데 30초 더 참았어요. 10에서 얼마까지 갈까요?', toolOptions: { fixedFrom: 10, hopSize: 10 }, target: { from: 10, end: 40 } },
            { prompt: '40초 달린 뒤 20초 더 달렸어요. 도착점은 몇 초이고 몇 분일까요?', toolOptions: { fixedFrom: 40, hopSize: 10 }, target: { from: 40, end: 60 },
              conclude: '40초 + 20초 = 60초이고, 60초는 1분이에요.' },
            { prompt: '더 해 보기: 30초 쉬고 30초 더 쉬었어요. 쉰 시간을 화살표로 나타내 보세요.', toolOptions: { fixedFrom: 30, hopSize: 30 }, target: { from: 30, end: 60 }, extra: true },
          ] },
        { id: 'a2', title: '활동 2. 합이 60초를 넘으면 1분으로 받아올림', minutes: 9, tool: 'numberline',
          task: '두 시간의 합이 큰 눈금 60을 넘어가는 화살표를 그려요. 넘은 만큼이 남은 초예요.',
          teacher: '"50초에 30초를 더하면 60을 넘어요. 넘은 곳은 몇 초일까요?" 큰 눈금 60에서 20칸… 10초 더 간 곳이라고 말하게 하고 1분 20초로 읽는다. 80초를 "1분 80초"로 쓰는 학생에게는 60초가 1분으로 바뀐 것을 화살표로 다시 보게 한다.',
          levels: MIN3('jump', { hopStep: 5 }),
          items: [
            { prompt: '50초에 30초를 더해 보세요. 60초를 넘나요?', toolOptions: { fixedFrom: 50, hopSize: 10 }, target: { from: 50, end: 80 },
              predict: { q: '50초와 30초를 더하면 60초를 넘을까요?', options: ['넘어요', '넘지 않아요'], answer: 0 },
              conclude: '50 + 30 = 80초이고, 60을 1분으로 바꾸면 1분 20초예요.' },
            { prompt: '45초에 30초를 더하면 어디에 닿을까요? 화살표로 나타내 보세요.', toolOptions: { fixedFrom: 45, hopSize: 15 }, target: { from: 45, end: 75 } },
            { prompt: '35초와 55초를 더해 1분 30초에 닿아 보세요.', toolOptions: { fixedFrom: 35, hopSize: 5 }, target: { from: 35, end: 90 } },
            { prompt: '더 해 보기: 55초에 45초를 더한 곳에 닿아 보세요.', toolOptions: { fixedFrom: 55, hopSize: 15 }, target: { from: 55, end: 100 }, extra: true },
          ] },
        { id: 'a3', title: '활동 3. 합을 몇 분 몇 초로 말하기', minutes: 9, tool: 'numberline',
          task: '두 기록을 더한 시간이 점으로 찍혀 있어요. 몇 분 몇 초인지 알맞은 것을 골라요.',
          teacher: '"초끼리 더했더니 85초가 되었어요. 몇 분 몇 초일까요?" 60초를 1분으로 바꾸고 남은 25초를 더해 1분 25초라고 말하게 한다. 85분 0초나 "8분 5초"를 고른 학생에게는 큰 눈금 하나가 60초임을 점에서 다시 보게 한다.',
          levels: MIN3('read'),
          items: [
            pickMin(80, '민지가 50초, 준호가 30초 달렸어요. 두 기록의 합을 나타낸 점을 읽어 보세요.', ['80분', '1분 20초', '1분 80초'], 1),
            pickMin(85, '45초 동안 줄넘기를 하고 40초 동안 더 했어요. 모두 합한 시간을 골라 보세요.', ['1분 25초', '85분 0초', '1분 5초'], 0),
            pickMin(90, '55초 동안 청소를 하고 35초 동안 더 했어요. 합한 시간을 골라 보세요.', ['1분 30초', '2분 30초', '90분'], 0),
            pickMin(100, '더 해 보기: 50초씩 두 번 걸린 시간을 고르세요.', ['1분 40초', '10분 0초', '1분 0초'], 0, { extra: true }),
          ] },
      ],
      wrapT: '"초끼리 더했더니 60초가 넘었어요. 그다음에는 무엇을 하나요?" 60초를 1분으로 바꾸고 남은 초를 적는다는 말을 짝에게 하게 한다. 출구 1번에서 75분을 고른 학생은 큰 눈금의 단위가 분이 아니라 60초임을 5차시 도입에서 다시 만난다.',
      exit: [
        { type: 'choice', prompt: '40초와 35초를 더하면 몇 분 몇 초일까요?', options: ['75분', '1분 15초', '7분 5초'], answer: 1, explain: '40 + 35 = 75초이고 75초는 60초 + 15초라서 1분 15초예요.' },
        { type: 'choice', prompt: '초끼리 더한 값이 60보다 크면 어떻게 할까요?', options: ['그대로 초만 쓴다', '60초를 1분으로 바꾼다', '분을 지운다'], answer: 1, explain: '60초는 1분이라서 60을 1분으로 바꾸고 남은 초를 함께 써요.' },
        { type: 'tool', tool: 'numberline', options: { mode: 'jump', min: 0, max: 180, step: 60, sub: 6, labels: 'major', fixedFrom: 40, hopStep: 10, hopSize: 10 }, prompt: '40초에서 30초를 더 가는 화살표를 그려 보세요.', target: { from: 40, end: 70 } },
      ],
      ws: { title: '초 더하기', items: [
        { type: 'table', prompt: '두 시간을 더해 빈칸을 채우세요.', columns: ['덧셈', '합(초)', '분과 초'], cells: [['40초 + 35초', '75초', ''], ['50초 + 20초', '', ''], ['55초 + 25초', '', '']], answer: '1분 15초, 70초 = 1분 10초, 80초 = 1분 20초' },
        { type: 'figure', prompt: '화살표를 보고 빈칸을 채우세요.', tool: 'numberline', wide: true, figures: [
          { options: { mode: 'jump', min: 0, max: 180, step: 60, sub: 6, fixedFrom: 30, labels: 'major' }, state: { from: 30, hops: [40] }, caption: '30초 + 40초 = ' + BLANK + '초 = ' + BLANK + '분 ' + BLANK + '초' }], answer: '70초 = 1분 10초' },
        { type: 'choice', prompt: '25초 + 50초와 같은 시간에 ○ 하세요.', options: ['1분 15초', '7분 5초', '2분 15초'], answer: '1분 15초' },
        { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '초끼리 더해서 60이 넘으면 ______초를 ______분으로 바꿔요.', answer: '60, 1' },
        { type: 'short', prompt: '50초 + 30초는 "80초"라고도 하고 "1분 20초"라고도 해요. 두 말이 같은 까닭을 써 보세요.' },
      ], easy: { note: '60초가 넘으면 60초는 1분으로 바꾸고, 남은 초를 뒤에 써요.', items: [
        { type: 'table', prompt: '빈칸에 알맞은 시간을 쓰세요.', columns: ['덧셈', '합(초)', '분과 초'], cells: [['30초 + 50초', '80초', ''], ['45초 + 30초', '', '']], answer: '1분 20초, 75초 = 1분 15초' },
        { type: 'figure', prompt: '화살표를 보고 합을 쓰세요.', tool: 'numberline', wide: true, figures: [
          { options: { mode: 'jump', min: 0, max: 180, step: 60, sub: 6, fixedFrom: 50, labels: 'major' }, state: { from: 50, hops: [30] }, caption: '50초 + 30초 = ' + BLANK + '초' }], answer: '80초' },
        { type: 'choice', prompt: '60초와 같은 시간에 ○ 하세요.', options: ['1분', '6분'], answer: '1분' },
        { type: 'draw', prompt: '55초 + 15초를 수직선에 화살표로 그려 보세요.' },
      ] } },
      diff: { easy: '5초 눈금 수직선에서 도착점의 수가 보여요. 큰 눈금 60을 넘는지 확인해요.', base: '10초 눈금 수직선에서 화살표를 그려 합을 구하고 분과 초로 바꿔 써요.', challenge: '30초 눈금만 있는 수직선에서 눈금 사이를 어림해 합을 구해요.' },
      notes: '자주 보이는 어려움: ① 60을 넘었는데도 초만 더 쓴다(1분 80초) → 60초는 항상 1분으로 바꾼다. ② 분과 초를 한 줄에 놓고 더하려 한다(1분 20초 + 50초의 20 + 50) → 이 차시에서는 초끼리만 더한다. ③ 받아올림한 1분을 빠뜨린다 → 큰 눈금을 넘는 순간 화살표 아래에 1분을 적어 둔다.',
    }),
    mk(5, ['[4수03-14]'], {
      title: '1분을 60초로 바꾸어 시간 빼기',
      objective: '초 단위 시간에서 시간을 뺄 때 초끼리 뺄 수 없으면 1분을 60초로 바꾸어 계산하고, 수직선에서 뒤로 뛰어 확인할 수 있다.',
      ill: 'a paper countdown timer, an hourglass and a long ribbon being cut shorter on a craft table, ', scene: '시간 빼기',
      extra: { motif: 'leaf', x: 120, y: 214 },
      introT: '"1분짜리 노래 중에서 45초가 지났어요. 남은 시간은 몇 초일까요?" 하고 묻고 수직선 60에서 뒤로 45칸 가는 모습을 시연한다. 60 − 45를 15로 계산하는 학생은 맞다고 하되, "1분 10초에서 25초를 빼면?"으로 넘어가 10에서 25를 뺄 수 없음을 활동 2에서 만나게 한다.',
      introS: '남은 시간을 구할 때 수직선에서 앞으로 가야 할지 뒤로 가야 할지 생각해 봐요.',
      acts: [
        { id: 'a1', title: '활동 1. 1분 안에서 남은 시간 구하기', minutes: 8, tool: 'numberline',
          task: '출발점에서 뒤로 뛰어 남은 시간을 구해요. 뒤로 뛰기 단추로 뺄셈을 해요.',
          teacher: '"60초에서 45초를 빼려면 화살표는 어느 쪽으로 갈까요?" 왼쪽(뒤로)이라고 답하게 한다. 뒤로 가야 하는데 앞으로 그려 105에 닿은 학생에게는 "시간이 줄었나요, 늘었나요?"라고 되묻는다.',
          levels: MIN3('jump', { hopStep: 5 }),
          items: [
            { prompt: '50초짜리 영상을 30초 보았어요. 50에서 30만큼 뒤로 뛰어 남은 시간을 구해 보세요.', toolOptions: { fixedFrom: 50, hopSize: 10 }, target: { from: 50, end: 20 } },
            { prompt: '1분(60초) 동안 노래를 부르는데 45초가 지났어요. 남은 시간은 얼마일까요?', toolOptions: { fixedFrom: 60, hopSize: 15 }, target: { from: 60, end: 15 } },
            { prompt: '40초 동안 청소하기로 했는데 15초가 지났어요. 뒤로 뛰어 남은 시간을 구해 보세요.', toolOptions: { fixedFrom: 40, hopSize: 5 }, target: { from: 40, end: 25 } },
            { prompt: '더 해 보기: 55초에서 25초를 빼면 몇 초가 남을까요?', toolOptions: { fixedFrom: 55, hopSize: 5 }, target: { from: 55, end: 30 }, extra: true },
          ] },
        { id: 'a2', title: '활동 2. 큰 눈금 60을 건너 뒤로 가기', minutes: 9, tool: 'numberline',
          task: '1분이 넘는 시간에서 뒤로 뛰어요. 큰 눈금 60을 건너면 분이 하나 줄어요.',
          teacher: '"1분 10초에서 25초를 빼요. 10초에서 25초를 뺄 수 있나요?" 뺄 수 없다는 말을 듣고 "1분을 60초로 바꾸면 70초예요. 70에서 25를 빼면?" 하고 이어 간다. 25 − 10 = 15초로 거꾸로 빼는 학생에게는 수직선에서 어디에 닿는지 보여 준다.',
          levels: MIN3('jump', { hopStep: 5 }),
          items: [
            { prompt: '1분 10초에서 25초를 빼 보세요. 뒤로 뛰어 닿은 곳은 몇 초일까요?', toolOptions: { fixedFrom: 70, hopSize: 25 }, target: { from: 70, end: 45 },
              predict: { q: '1분 10초에서 25초를 뺄 때 먼저 어떻게 할까요?', options: ['10에서 25를 뺀다', '1분을 60초로 바꾼다'], answer: 1 },
              conclude: '1분 10초를 70초로 바꾸면 70 − 25 = 45초예요.' },
            { prompt: '2분짜리 영상에서 50초를 보았어요. 남은 시간을 수직선에서 구해 보세요.', toolOptions: { fixedFrom: 120, hopSize: 10 }, target: { from: 120, end: 70 } },
            { prompt: '1분 30초에서 55초를 빼면 몇 초가 남을까요?', toolOptions: { fixedFrom: 90, hopSize: 55 }, target: { from: 90, end: 35 } },
            { prompt: '더 해 보기: 1분 5초에서 15초를 빼 보세요.', toolOptions: { fixedFrom: 65, hopSize: 15 }, target: { from: 65, end: 50 }, extra: true },
          ] },
        { id: 'a3', title: '활동 3. 뺀 시간을 몇 분 몇 초로 말하기', minutes: 9, tool: 'numberline',
          task: '긴 시간에서 짧은 시간을 뺀 결과가 점으로 찍혀 있어요. 알맞은 시간을 골라요.',
          teacher: '"2분 15초에서 50초를 빼요. 15초에서 50초를 뺄 수 없으니 어떻게 하지요?" 2분을 1분과 60초로 나누어 1분 75초로 바꾼 뒤 빼는 과정을 말로 하게 한다. 보기 "2분 35초"를 고른 학생은 50 − 15를 한 것이므로 큰 수에서 작은 수를 빼는지 살핀다.',
          levels: MIN3('read'),
          items: [
            pickMin(85, '2분 15초에서 50초를 뺀 시간을 나타낸 점이에요. 알맞은 것을 고르세요.', ['1분 25초', '1분 65초', '2분 35초'], 0),
            pickMin(100, '3분에서 1분 20초를 뺀 시간을 나타낸 점이에요. 알맞은 것을 고르세요.', ['2분 40초', '1분 40초', '1분 80초'], 1),
            pickMin(45, '1분 40초에서 55초를 뺀 시간을 나타낸 점이에요. 알맞은 것을 고르세요.', ['45초', '1분 15초', '55초'], 0),
            pickMin(85, '더 해 보기: 2분 5초에서 40초를 뺀 시간을 나타낸 점이에요. 알맞은 것을 고르세요.', ['1분 25초', '1분 35초', '2분 35초'], 0, { extra: true }),
          ] },
      ],
      wrapT: '"초끼리 뺄 수 없을 때는 어떻게 했나요?" 1분을 60초로 바꾸어 빼는 과정을 한 번 말로 하게 한다. 출구 2번에서 "작은 수에서 큰 수를 뺀다"를 고른 학생은 어느 수에서 어느 수를 빼는지 수직선으로 다시 짚어 본다.',
      exit: [
        { type: 'choice', prompt: '1분 10초에서 30초를 빼면 몇 초가 남을까요?', options: ['40초', '80초', '1분 20초'], answer: 0, explain: '1분 10초는 70초이고 70 − 30 = 40초예요.' },
        { type: 'choice', prompt: '10초에서 25초를 뺄 수 없을 때는 어떻게 하나요?', options: ['작은 수에서 큰 수를 뺀다', '1분을 60초로 바꾸어 뺀다', '분을 더 한다'], answer: 1, explain: '1분을 60초로 바꾸면 70초에서 25초를 뺄 수 있어요.' },
        { type: 'tool', tool: 'numberline', options: { mode: 'jump', min: 0, max: 180, step: 60, sub: 12, labels: 'major', fixedFrom: 80, hopStep: 5, hopSize: 5 }, prompt: '1분 20초에서 25초를 빼는 화살표를 뒤로 그려 보세요.', target: { from: 80, end: 55 } },
      ],
      ws: { title: '초 빼기', items: [
        { type: 'table', prompt: '1분을 60초로 바꾸어 빼고 빈칸을 채우세요.', columns: ['뺄셈', '초로 바꾸기', '답'], cells: [['1분 20초 − 35초', '80 − 35', ''], ['1분 5초 − 30초', '', ''], ['2분 − 45초', '', '']], answer: '45초, 65 − 30 = 35초, 120 − 45 = 75초 = 1분 15초' },
        { type: 'figure', prompt: '화살표를 보고 빈칸을 채우세요.', tool: 'numberline', wide: true, figures: [
          { options: { mode: 'jump', min: 0, max: 180, step: 60, sub: 6, fixedFrom: 90, labels: 'major' }, state: { from: 90, hops: [-40] }, caption: '1분 30초 − 40초 = ' + BLANK + '초' }], answer: '50초' },
        { type: 'choice', prompt: '2분 − 20초와 같은 시간에 ○ 하세요.', options: ['1분 40초', '1분 80초', '2분 20초'], answer: '1분 40초' },
        { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '1분 10초에서 25초를 빼려면 1분을 ______초로 바꾸어 ______초에서 25초를 빼요.', answer: '60, 70' },
        { type: 'short', prompt: '1분 10초 − 25초를 10 − 25 = 15초로 계산한 친구에게 틀린 곳을 알려 주는 글을 써 보세요.' },
      ], easy: { note: '1분 = 60초예요. 초끼리 뺄 수 없으면 1분을 60초로 바꿔서 빼요.', items: [
        { type: 'table', prompt: '빈칸에 알맞은 수를 쓰세요.', columns: ['뺄셈', '초로 바꾸기', '답'], cells: [['1분 10초 − 20초', '70 − 20', ''], ['1분 30초 − 50초', '', '']], answer: '50초, 90 − 50 = 40초' },
        { type: 'figure', prompt: '화살표를 보고 남은 시간을 쓰세요.', tool: 'numberline', wide: true, figures: [
          { options: { mode: 'jump', min: 0, max: 180, step: 60, sub: 6, fixedFrom: 70, labels: 'major' }, state: { from: 70, hops: [-30] }, caption: '70초 − 30초 = ' + BLANK + '초' }], answer: '40초' },
        { type: 'choice', prompt: '1분을 바르게 바꾼 것에 ○ 하세요.', options: ['60초', '100초'], answer: '60초' },
        { type: 'draw', prompt: '1분 15초에서 20초를 빼는 화살표를 수직선에 그려 보세요.' },
      ] } },
      diff: { easy: '5초 눈금 수직선에서 뒤로 뛰기 칸 수가 보여요.', base: '10초 눈금 수직선에서 1분을 60초로 바꾸어 뺀 값을 확인해요.', challenge: '30초 눈금 수직선에서 뺀 시간을 어림하고 식으로 확인해요.' },
      notes: '자주 보이는 어려움: ① 초끼리 뺄 수 없을 때 큰 수에서 작은 수를 거꾸로 뺀다(10 − 25를 25 − 10으로) → 수직선에서 뒤로 가야 함을 보여 준다. ② 1분을 100초로 바꾼다 → 1분 = 60초. ③ 받아내림한 뒤 분을 줄이지 않는다 → 70초로 바꾸면 분이 0이 된다고 말한다.',
    }),
    mk(6, ['[4수03-14]'], {
      title: '이어달리기 기록 합치고 영화가 끝나는 시각 구하기',
      objective: '생활 속 문제에서 초 단위 시간을 더하거나 빼고, 시각에 걸린 시간을 더해 끝나는 시각을 구할 수 있다.',
      ill: 'a relay race baton passing on a paper track and a movie theater clock showing the ending time, ', scene: '기록 합치기',
      extra: { motif: 'flower', x: 110, y: 214 },
      introT: '"이어달리기에서 선수 세 명이 20초, 25초, 30초를 달렸어요. 팀 기록은 몇 분 몇 초일까요?" 하고 묻는다. 75초를 그대로 말하는 학생과 1분 15초라고 말하는 학생의 답을 모두 칠판에 적고 같은 시간인지 활동 1의 점에서 맞춰 본다.',
      introS: '이어달리기 기록을 합치려면 어떤 계산이 필요한지 말해 봐요.',
      acts: [
        { id: 'a1', title: '활동 1. 여러 기록 합치고 차이 구하기', minutes: 9, tool: 'numberline',
          task: '생활 속 기록을 더하거나 빼서 점으로 나타냈어요. 알맞은 시간을 골라요.',
          teacher: '"세 사람 기록 20초, 25초, 30초를 한꺼번에 더해 볼까요?" 두 개씩 차례로 더해도 된다고 허락한다. 두 기록의 차를 묻는 문항에서 합으로 계산해 "2분 25초"를 고른 학생에게는 "더 빠른 기록과 비교하는 거예요. 더할까요, 뺄까요?"라고 묻는다.',
          levels: MIN3('read'),
          items: [
            pickMin(75, '이어달리기 세 선수의 기록이 20초, 25초, 30초예요. 팀 기록을 나타낸 점을 고르세요.', ['75분', '1분 15초', '7분 5초'], 1),
            pickMin(35, '형은 1분 30초, 동생은 55초가 걸렸어요. 두 기록의 차를 나타낸 점을 고르세요.', ['35초', '2분 25초', '85초'], 0),
            pickMin(160, '네 명이 40초씩 이어서 달렸어요. 팀 기록을 나타낸 점을 고르세요.', ['2분 40초', '1분 60초', '4분'], 0),
            pickMin(15, '더 해 보기: 2분 목표에서 1분 45초가 지났어요. 남은 시간을 고르세요.', ['15초', '1분 15초', '45초'], 0, { extra: true }),
          ] },
        { id: 'a2', title: '활동 2. 끝나는 시각 구하기', minutes: 9, tool: 'clock',
          task: '시각에 걸린 시간을 더해 끝나는 시각을 시계에 만들어요. 60분이 되면 1시간이에요.',
          teacher: '"3시 40분에 시작해서 50분 뒤에 끝나요. 40분과 50분을 더하면 90분이에요. 90분은 몇 시간 몇 분일까요?" 1시간 30분으로 바꾸어 3시 40분에서 1시간을 먼저, 30분을 다음에 더하게 한다. 3시 90분으로 만든 학생에게는 긴바늘이 12를 지나면 짧은바늘이 한 칸 가는 것을 시연으로 보여 준다.',
          levels: { easy: { hourZone: true, showMinuteNumbers: true, minuteStep: 5 }, base: { minuteStep: 5 }, challenge: { minuteStep: 5, showMinuteMarks: false } },
          items: [
            { prompt: '영화가 3시 40분에 시작해서 50분 동안 해요. 끝나는 시각을 만들어 보세요.', state: { h: 12, m: 0 }, target: { h: 4, m: 30 } },
            { prompt: '5시 25분에 숙제를 시작해서 45분 뒤에 끝냈어요. 끝낸 시각을 만들어 보세요.', state: { h: 12, m: 0 }, target: { h: 6, m: 10 } },
            { prompt: '9시 50분에 출발한 버스가 25분 걸려 도착했어요. 도착한 시각을 만들어 보세요.', state: { h: 12, m: 0 }, target: { h: 10, m: 15 } },
            { prompt: '더 해 보기: 11시 35분에 점심을 먹기 시작해 40분 뒤에 마쳤어요. 마친 시각을 만들어 보세요.', state: { h: 6, m: 0 }, target: { h: 12, m: 15 }, extra: true },
          ] },
        { id: 'a3', title: '활동 3. 같은 시간을 여러 번 더하기', minutes: 8, tool: 'numberline',
          task: '같은 시간을 여러 번 더하는 화살표를 그려요. 합이 60초를 넘으면 몇 분 몇 초인지도 말해요.',
          teacher: '"20초씩 3번 하면 모두 몇 초일까요? 화살표가 어디에 닿았나요?" 60초에 닿으면 1분이라고 말하게 한다. 15초씩 5번이 75초일 때 "7분 5초"라고 읽는 학생에게는 큰 눈금 한 칸이 1분임을 다시 짚는다.',
          levels: MIN3('jump', { hopStep: 5, fixedFrom: 0 }),
          items: [
            { prompt: '한 번에 20초 걸리는 놀이를 3번 했어요. 걸린 시간만큼 화살표를 그려 보세요.', toolOptions: { hopSize: 20 }, target: { from: 0, size: 20, count: 3 },
              conclude: '20초씩 3번이면 60초, 곧 1분이에요.' },
            { prompt: '줄넘기를 15초씩 5번 했어요. 모두 합한 시간까지 화살표를 그려 보세요.', toolOptions: { hopSize: 15 }, target: { from: 0, size: 15, count: 5 } },
            { prompt: '한 구간을 30초에 달려요. 5구간을 달리면 어디에 닿을까요?', toolOptions: { hopSize: 30 }, target: { from: 0, size: 30, count: 5 } },
            { prompt: '더 해 보기: 40초씩 4번 쉬었어요. 쉰 시간만큼 화살표를 그려 보세요.', toolOptions: { hopSize: 40 }, target: { from: 0, size: 40, count: 4 }, extra: true },
          ] },
      ],
      wrapT: '"시각에 시간을 더할 때와 초끼리 더할 때 같은 점은 무엇이었나요?" 두 경우 모두 60이 넘으면 한 칸 위 단위(1시간, 1분)로 올린다는 말을 이끌어 낸다. 출구 1번에서 "1분 75초"를 고른 학생은 60을 1분으로 바꾸었는지 다음 시간에 점검한다.',
      exit: [
        { type: 'choice', prompt: '1분 20초와 55초를 더하면 얼마일까요?', options: ['1분 75초', '2분 15초', '2분 5초'], answer: 1, explain: '80 + 55 = 135초이고 135초는 2분 15초예요.' },
        { type: 'tool', tool: 'clock', options: { minuteStep: 5 }, state: { h: 12, m: 0 }, prompt: '7시 30분에 시작해 45분 뒤에 끝나는 시각을 시계로 만들어 보세요.', target: { h: 8, m: 15 } },
        { type: 'choice', prompt: '2분 10초에서 50초를 빼면 얼마일까요?', options: ['1분 20초', '1분 40초', '2분 40초'], answer: 0, explain: '2분 10초는 130초이고 130 − 50 = 80초, 곧 1분 20초예요.' },
      ],
      ws: { title: '기록과 끝나는 시각', items: [
        { type: 'table', prompt: '이어달리기 기록을 모두 더해 쓰세요.', columns: ['선수', '가', '나', '다', '합'], cells: [['기록', '25초', '30초', '20초', '']], answer: '75초 = 1분 15초' },
        { type: 'figure', prompt: '시계는 시작한 시각이에요. 40분 뒤 끝나는 시각을 쓰세요.', tool: 'clock', figures: [
          { state: { h: 2, m: 50 }, caption: '끝나는 시각 ' + BLANK + '시 ' + BLANK + '분' }, { state: { h: 6, m: 20 }, caption: '끝나는 시각 ' + BLANK + '시 ' + BLANK + '분' }], answer: '3시 30분, 7시 0분' },
        { type: 'choice', prompt: '55초 + 25초와 같은 시간에 ○ 하세요.', options: ['80분', '1분 20초', '5분 20초'], answer: '1분 20초' },
        { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '4시 45분에서 30분 뒤는 ______시 ______분이에요.', answer: '5, 15' },
        { type: 'short', prompt: '3시 40분에서 50분 뒤를 "3시 90분"이라고 쓰면 안 되는 까닭을 써 보세요.' },
      ], easy: { note: '60초는 1분, 60분은 1시간이에요. 60이 넘으면 위 단위로 올려요.', items: [
        { type: 'table', prompt: '빈칸에 알맞은 시간을 쓰세요.', columns: ['덧셈', '합(초)', '분과 초'], cells: [['30초 + 40초', '70초', ''], ['20초 + 20초 + 30초', '', '']], answer: '1분 10초, 70초 = 1분 10초' },
        { type: 'figure', prompt: '30분 뒤 끝나는 시각을 쓰세요.', tool: 'clock', options: { showMinuteNumbers: true }, figures: [
          { state: { h: 4, m: 45 }, caption: BLANK + '시 ' + BLANK + '분' }], answer: '5시 15분' },
        { type: 'choice', prompt: '60분과 같은 시간에 ○ 하세요.', options: ['1시간', '6시간'], answer: '1시간' },
        { type: 'draw', prompt: '오늘 하루 중 걸린 시간이 궁금한 일 하나를 정해 시계 그림으로 시작과 끝을 나타내 보세요.' },
      ] } },
      diff: { easy: '분 숫자가 보이는 시계와 5초 눈금 수직선으로 계산해요.', base: '60이 넘으면 위 단위로 올리는 것을 직접 말하며 계산해요.', challenge: '작은 눈금이 없는 시계와 30초 눈금 수직선에서 어림해 풀어요.' },
      notes: '자주 보이는 어려움: ① 시각 계산에서 60분을 넘겨 3시 90분처럼 쓴다 → 긴바늘이 12를 지나면 짧은바늘이 한 칸 간다. ② 기록의 합과 차를 헷갈린다 → "함께"는 더하고 "차이·남은"은 뺀다. ③ 초끼리 더한 뒤 분을 빠뜨린다 → 60초를 넘으면 1분을 적어 둔다.',
    }),
    mk(7, ['[4수03-15]'], {
      title: '자의 작은 눈금으로 1 mm까지 재어 보기',
      objective: '1 cm가 10 mm임을 알고, 자의 작은 눈금을 읽어 길이를 mm로 나타내고 mm 길이의 띠를 만들 수 있다.',
      ill: 'a paper ruler with tiny millimeter marks next to a magnifying circle and small craft objects like an eraser and a key, ', scene: '1 cm = 10 mm',
      extra: { motif: 'tree', x: 110, y: 216 },
      introT: '"지우개의 길이를 cm로만 말하면 4 cm보다 길고 5 cm보다 짧아요. 더 정확하게 말하려면 어떻게 할까요?" 하고 묻고 자의 작은 눈금을 크게 보여 준다. "작은 눈금 한 칸이 1 mm예요. 1 cm에는 몇 칸이 있을까요?" 하고 10칸을 세게 한다. 눈금 선을 세면 11개가 되므로 칸을 세라고 짚는다.',
      introS: '자의 작은 눈금 한 칸의 길이를 손가락으로 짚어 보고, 1 cm 안에 작은 칸이 몇 개인지 세어 봐요.',
      acts: [
        { id: 'a1', title: '활동 1. 작은 눈금을 읽어 mm로 쓰기', minutes: 9, tool: 'measure',
          task: '물건의 길이를 자에서 읽어 mm로 써요. 1 cm가 10 mm예요.',
          teacher: '"지우개 끝이 4 cm에서 작은 눈금 3칸 더 갔어요. 몇 mm일까요?" 4 cm는 40 mm이고 3 mm를 더해 43 mm라고 말하게 한다. 4 cm 3 mm를 "4.3 mm"나 "43 cm"로 쓴 학생에게는 단위를 소리 내어 읽게 하고 큰 눈금 하나가 10 mm임을 확인시킨다.',
          levels: RUL(),
          items: [
            rulerMM('지우개의 길이를 자에서 읽어 mm로 써 보세요.', '지우개', 4.3),
            rulerMM('열쇠의 길이를 mm로 써 보세요. 작은 눈금 한 칸이 1 mm예요.', '열쇠', 5.8),
            rulerMM('클립의 길이는 몇 mm일까요?', '클립', 2.7),
            Object.assign(rulerMM('더 해 보기: 풀잎의 길이를 mm로 써 보세요.', '풀잎', 6.4), { extra: true }),
          ] },
        { id: 'a2', title: '활동 2. 띠를 끌어 mm 길이 만들기', minutes: 9, tool: 'measure',
          task: '띠의 끝을 끌어 mm로 말한 길이를 만들어요. 35 mm는 3 cm와 작은 눈금 5칸이에요.',
          teacher: '"35 mm는 몇 cm 몇 mm일까요?" 10 mm가 1 cm이니 3 cm 5 mm라고 말하게 한 뒤 띠 끝을 3과 4 사이 가운데에 맞추게 한다. 35 mm를 큰 눈금 35에 맞추려는 학생에게는 자의 끝 눈금이 15까지임을 보여 준다.',
          levels: { easy: { mode: 'ruler', make: true, max: 8 }, base: { mode: 'ruler', make: true, max: 8 }, challenge: { mode: 'ruler', make: true, max: 10 } },
          items: [
            { prompt: '35 mm 길이의 띠를 만들어 보세요.', target: { make: 3.5 } },
            { prompt: '48 mm 길이의 띠를 만들어 보세요.', target: { make: 4.8 } },
            { prompt: '62 mm 길이의 띠를 만들어 보세요.', target: { make: 6.2 },
              conclude: '62 mm는 6 cm와 작은 눈금 2칸이에요.' },
            { prompt: '더 해 보기: 19 mm 길이의 띠를 만들어 보세요.', target: { make: 1.9 }, extra: true },
          ] },
        { id: 'a3', title: '활동 3. 알맞은 단위 고르기', minutes: 8, tool: 'measure',
          task: '물건 길이에 알맞은 단위를 mm, cm, m, km 중에서 골라요.',
          teacher: '"쌀알의 길이를 말할 때는 cm가 좋을까요, mm가 좋을까요?" 쌀알은 1 cm보다 짧아서 mm가 알맞다고 말하게 한다. "농구 골대 높이를 mm로 말하면 어떻게 될까요?" 3000 mm처럼 수가 너무 커진다는 것을 느끼게 한다.',
          levels: { easy: Object.assign({ mode: 'unit' }, UNITS), base: Object.assign({ mode: 'unit' }, UNITS), challenge: Object.assign({ mode: 'unit' }, UNITS) },
          items: [
            unitItem('연필심의 굵기와 운동장 한 바퀴 길이에 알맞은 단위를 각각 고르세요.', ['연필심의 굵기', '운동장 한 바퀴의 길이'], [0, 2]),
            unitItem('교과서 가로 길이와 서울에서 부산까지의 거리에 알맞은 단위를 각각 고르세요.', ['교과서 가로 길이', '서울에서 부산까지의 거리'], [1, 3]),
            unitItem('쌀알, 지우개, 농구 골대의 길이에 알맞은 단위를 각각 고르세요.', ['쌀알의 길이', '지우개의 길이', '농구 골대의 높이'], [0, 1, 2]),
            Object.assign(unitItem('더 해 보기: 자동차로 1시간 달린 거리와 새끼손톱의 폭에 알맞은 단위를 고르세요.', ['자동차로 1시간 달린 거리', '새끼손톱의 폭'], [3, 0]), { extra: true }),
          ] },
      ],
      wrapT: '"1 cm는 몇 mm일까요? 어떻게 알았나요?" 자의 작은 눈금 10칸을 센 경험을 말하게 한다. 출구 3번에서 70 mm를 7 mm로 쓴 학생은 1 cm = 10 mm에서 7 cm가 몇 칸인지 다음 시간에 다시 센다.',
      exit: [
        { type: 'choice', prompt: '1 cm는 몇 mm일까요?', options: ['1 mm', '10 mm', '100 mm'], answer: 1, explain: '자에서 1 cm 안에 작은 눈금 10칸이 있어서 10 mm예요.' },
        { type: 'tool', tool: 'measure', options: { mode: 'ruler', max: 8, readOnly: true, object: { name: '풀잎 한 장', len: 3.6 }, askNum: { q: '길이는 몇 mm일까요?', unit: 'mm' } }, prompt: '자를 보고 길이를 mm로 쓰세요.', target: { num: 36 } },
        { type: 'choice', prompt: '7 cm는 몇 mm일까요?', options: ['7 mm', '70 mm', '700 mm'], answer: 1, explain: '1 cm가 10 mm라서 7 cm는 70 mm예요.' },
      ],
      ws: { title: 'mm 알아보기', items: [
        { type: 'figure', prompt: '자를 보고 길이를 cm와 mm로 쓰세요.', tool: 'measure', wide: true, options: { mode: 'ruler', max: 8, readOnly: true }, figures: [
          { options: { object: { name: '지우개', len: 4.6 } }, caption: BLANK + ' cm ' + BLANK + ' mm' }, { options: { object: { name: '단추', len: 2.3 } }, caption: BLANK + ' cm ' + BLANK + ' mm' }], answer: '4 cm 6 mm, 2 cm 3 mm' },
        { type: 'table', prompt: '빈칸에 알맞은 길이를 쓰세요.', columns: ['cm', '1 cm', '3 cm', '5 cm', '8 cm'], cells: [['mm', '10 mm', '', '', '']], answer: '30 mm, 50 mm, 80 mm' },
        { type: 'choice', prompt: '쌀알의 길이를 나타내기에 가장 알맞은 단위에 ○ 하세요.', options: ['mm', 'm', 'km'], answer: 'mm' },
        { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '1 cm = ______ mm', answer: '10' },
        { type: 'short', prompt: '자에서 1 cm 안에 작은 눈금이 몇 칸인지 세는 방법을 써 보세요.' },
      ], easy: { note: '자의 작은 눈금 한 칸이 1 mm예요. 큰 눈금에서 작은 칸을 세요.', items: [
        { type: 'figure', prompt: '자를 보고 길이를 cm와 mm로 쓰세요.', tool: 'measure', wide: true, options: { mode: 'ruler', max: 8, readOnly: true }, figures: [
          { options: { object: { name: '연필 조각', len: 3.4 } }, caption: BLANK + ' cm ' + BLANK + ' mm' }], answer: '3 cm 4 mm' },
        { type: 'table', prompt: '빈칸에 알맞은 길이를 쓰세요.', columns: ['cm', '1 cm', '2 cm'], cells: [['mm', '10 mm', '']], answer: '20 mm' },
        { type: 'choice', prompt: '1 cm와 같은 길이에 ○ 하세요.', options: ['10 mm', '100 mm'], answer: '10 mm' },
        { type: 'draw', prompt: '자의 작은 눈금을 그리고 1 cm 안의 작은 칸에 1부터 10까지 번호를 써 보세요.' },
      ] } },
      diff: { easy: '자 아래에 물건 양 끝에서 눈금으로 내려오는 점선이 있어서 끝 눈금을 찾기 쉬워요.', base: '점선 없이 물건의 양 끝 눈금을 직접 찾아 mm로 읽어요.', challenge: '더 긴 자에서 mm로 읽고 mm로 말한 길이의 띠를 만들어요.' },
      notes: '자주 보이는 어려움: ① 작은 눈금 선을 세어 한 칸 더 많게 읽는다 → 선이 아니라 칸을 센다. ② cm와 mm를 섞어 쓴다(4 cm 3 mm를 43 cm로) → 단위를 소리 내어 읽는다. ③ 길이에 알맞은 단위를 고를 때 수가 너무 크거나 작지 않은지 살핀다.',
    }),
    mk(8, ['[4수03-15]'], {
      title: '수직선에서 1 km와 1000 m의 관계 찾기',
      objective: '1 km가 1000 m임을 알고, 수직선에서 거리를 몇 km 몇 m로 읽고 나타내며 m와 km 사이를 바꾸어 말할 수 있다.',
      ill: 'a long winding paper road with milestone signs between a school, a park and a library, ', scene: '1 km = 1000 m',
      extra: { motif: 'mountain', x: 110, y: 214 },
      introT: '"학교에서 도서관까지 가는 길이 1000 m래요. 이 거리를 다른 단위로 말할 수 있을까요?" 하고 묻고 길을 따라 이정표가 있는 수직선을 보여 준다. "먼 거리는 m로만 말하면 수가 커져요. 1 km는 몇 m일까요?"에 100 m나 10000 m로 답한 학생은 활동 1에서 큰 눈금 하나가 1000 m임을 다시 세게 한다.',
      introS: '집에서 학교까지의 거리를 어떤 단위로 말하면 좋을지 짝과 이야기해 봐요.',
      acts: [
        { id: 'a1', title: '활동 1. 수직선에서 거리 읽기', minutes: 9, tool: 'numberline',
          task: '수직선의 큰 눈금 하나가 1 km(1000 m)예요. 점이 나타내는 거리를 읽어요.',
          teacher: '"점이 큰 눈금 1을 지나서 작은 눈금 두 칸 더 갔어요. 작은 눈금 한 칸이 250 m예요. 몇 km 몇 m일까요?" 1 km 500 m라고 말하게 한다. 1500 m를 "15 km"로 읽은 학생에게는 큰 눈금 하나가 몇 m인지 되묻는다.',
          levels: KM('read'),
          items: [
            pickKm(1500, '집에서 도서관까지 가는 길이에요. 점이 나타내는 거리를 고르세요.', ['1 km 500 m', '15 km', '150 m'], 0),
            pickKm(2250, '공원 산책로에 점이 찍혀 있어요. 점이 나타내는 거리를 고르세요.', ['2 km 25 m', '2 km 250 m', '22 km 50 m'], 1),
            pickKm(750, '학교 앞 도로에서 점이 큰 눈금 1에 닿기 전이에요. 알맞은 거리를 고르세요.', ['1 km 750 m', '750 m', '7 km 500 m'], 1,
              { conclude: '큰 눈금 1(1 km)에 닿기 전이라서 750 m예요.' }),
            pickKm(2750, '더 해 보기: 자전거 길의 점이 나타내는 거리를 고르세요.', ['2 km 750 m', '27 km 50 m', '2 km 75 m'], 0, { extra: true }),
          ] },
        { id: 'a2', title: '활동 2. 거리 위에 점 놓기', minutes: 9, tool: 'numberline',
          task: '몇 km 몇 m 또는 몇 m를 수직선 위에 점으로 놓아요. 1 km는 1000 m로 바꾸어 생각해요.',
          teacher: '"1 km 250 m를 놓으려면 1 km 눈금에서 작은 눈금 몇 칸 더 가야 할까요?" 250 m가 작은 눈금 한 칸이라고 말하게 한다. 1 km 250 m를 125 m 자리에 놓은 학생에게는 1 km를 먼저 건넌 뒤인지 물어본다.',
          levels: KM('place'),
          items: [
            { prompt: '1 km 250 m가 되는 곳에 점을 놓아 보세요.', toolOptions: { count: 1 }, target: { points: [1250] } },
            { prompt: '2 km 500 m가 되는 곳에 점을 놓아 보세요.', toolOptions: { count: 1 }, target: { points: [2500] } },
            { prompt: '750 m가 되는 곳에 점을 놓아 보세요.', toolOptions: { count: 1 }, target: { points: [750] } },
            { prompt: '가는 500 m, 나는 2 km 750 m가 되는 곳에 놓아 보세요.', toolOptions: { count: 2 }, target: { points: [500, 2750] } },
          ] },
        { id: 'a3', title: '활동 3. 걸어서 이동한 거리 합치기', minutes: 8, tool: 'numberline',
          task: '같은 거리를 여러 번 걸은 화살표를 그려요. 1000 m가 되면 1 km예요.',
          teacher: '"500 m씩 4번 걸으면 모두 몇 m일까요? 몇 km일까요?" 2000 m가 2 km임을 수직선 큰 눈금에서 확인하게 한다. 250 m씩 6번이 1500 m일 때 "6 km 250 m"처럼 수를 이어 붙인 학생에게는 큰 눈금 1과 작은 눈금 둘의 자리를 보게 한다.',
          levels: KM('jump', { fixedFrom: 0, hopStep: 250 }),
          items: [
            { prompt: '하루에 500 m씩 걷는 산책을 4번 했어요. 모두 걸은 거리까지 화살표를 그려 보세요.', toolOptions: { hopSize: 500 }, target: { from: 0, size: 500, count: 4 },
              conclude: '500 m씩 4번이면 2000 m, 곧 2 km예요.' },
            { prompt: '250 m 길이의 복도를 6번 왕복하지 않고 한 방향으로 걸었어요. 거리를 화살표로 나타내 보세요.', toolOptions: { hopSize: 250 }, target: { from: 0, size: 250, count: 6 } },
            { prompt: '750 m씩 3번 걸었어요. 화살표가 닿은 곳은 몇 km 몇 m일까요?', toolOptions: { hopSize: 750 }, target: { from: 0, size: 750, count: 3 } },
            { prompt: '더 해 보기: 1000 m씩 2번 걸어 몇 km를 걸었는지 화살표로 나타내 보세요.', toolOptions: { hopSize: 1000 }, target: { from: 0, size: 1000, count: 2 }, extra: true },
          ] },
      ],
      wrapT: '"2 km는 몇 m일까요? 3500 m는 몇 km 몇 m일까요?" 큰 눈금 하나가 1000 m라는 말로 두 질문에 모두 답하게 한다. 출구 2번에서 "35 km 0 m"를 고른 학생은 3500을 3과 500으로 나누어 읽는 연습을 다음 시간에 다시 한다.',
      exit: [
        { type: 'choice', prompt: '2 km는 몇 m일까요?', options: ['20 m', '200 m', '2000 m'], answer: 2, explain: '1 km가 1000 m라서 2 km는 2000 m예요.' },
        { type: 'choice', prompt: '3500 m는 몇 km 몇 m일까요?', options: ['3 km 500 m', '35 km 0 m', '3 km 50 m'], answer: 0, explain: '3500 m에서 1000 m씩 3번이 3 km이고, 500 m가 남아요.' },
        { type: 'tool', tool: 'numberline', options: { mode: 'read', min: 0, max: 3000, step: 1000, sub: 4, labels: 'major', marks: [1750], choices: ['1 km 750 m', '17 km 50 m', '1 km 75 m'], question: '점이 나타내는 거리를 고르세요.' }, prompt: '점이 나타내는 거리를 읽어 보세요.', target: { pick: 0 } },
      ],
      ws: { title: 'km와 m', items: [
        { type: 'table', prompt: '빈칸에 알맞은 거리를 쓰세요.', columns: ['km', '1 km', '2 km', '5 km'], cells: [['m', '1000 m', '', '']], answer: '2000 m, 5000 m' },
        { type: 'figure', prompt: '점이 나타내는 거리를 쓰세요.', tool: 'numberline', wide: true, figures: [
          { options: { mode: 'read', min: 0, max: 3000, step: 1000, sub: 4, labels: 'major', marks: [1250] }, caption: BLANK + ' km ' + BLANK + ' m' }], answer: '1 km 250 m' },
        { type: 'choice', prompt: '1 km 500 m와 같은 거리에 ○ 하세요.', options: ['150 m', '1500 m', '15000 m'], answer: '1500 m' },
        { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '1 km = ______ m', answer: '1000' },
        { type: 'short', prompt: '학교에서 집까지 가는 길을 km와 m로 말하면 좋은 까닭을 써 보세요.' },
      ], easy: { note: '큰 눈금 하나가 1 km(1000 m)예요. 작은 눈금 하나는 250 m예요.', items: [
        { type: 'figure', prompt: '점이 나타내는 거리를 쓰세요.', tool: 'numberline', wide: true, figures: [
          { options: { mode: 'read', min: 0, max: 3000, step: 1000, sub: 4, labels: 'major', marks: [2000] }, caption: BLANK + ' km' }], answer: '2 km' },
        { type: 'table', prompt: '빈칸에 알맞은 거리를 쓰세요.', columns: ['km', '1 km', '3 km'], cells: [['m', '1000 m', '']], answer: '3000 m' },
        { type: 'choice', prompt: '1 km와 같은 거리에 ○ 하세요.', options: ['100 m', '1000 m'], answer: '1000 m' },
        { type: 'draw', prompt: '1 km를 나타내는 길을 그리고 이정표에 km를 써 보세요.' },
      ] } },
      diff: { easy: '작은 눈금마다 수가 보여서 점이 어느 눈금인지 세어 읽어요.', base: '큰 눈금 1 km와 작은 눈금 250 m를 이용해 읽어요.', challenge: '500 m 눈금만 있는 수직선에서 눈금 사이 거리를 어림해 읽어요.' },
      notes: '자주 보이는 어려움: ① 1 km를 100 m나 10000 m로 말한다 → 큰 눈금 하나 = 1000 m. ② 1500 m를 15 km로 읽는다 → km 눈금에 닿은 뒤 남은 m를 따로 센다. ③ 2 km 250 m를 2250 m로 바꾸면서 25를 빼먹는다 → 2000 + 250으로 쓴다.',
    }),
    mk(9, ['[4수03-15]'], {
      title: '시작 눈금이 0이 아닌 자로 재고 길이를 어림하기',
      objective: '시작 눈금이 0이 아닌 자로 길이를 mm로 재고, 주변 길이를 알맞은 단위로 어림해 보며 어림한 값과 잰 값을 견주어 설명할 수 있다.',
      ill: 'a broken paper ruler starting from two centimeters beside a toy bus, a notebook and a small map, ', scene: '재고 어림하기',
      extra: { motif: 'star', x: 120, y: 214 },
      introT: '"자의 끝이 닳아서 0이 아니라 2에서 시작해요. 막대 끝이 6.5라면 길이는 얼마일까요?" 하고 묻는다. 끝 눈금을 그대로 읽어 65 mm라고 말하는 학생이 많으므로 "막대가 어디서 시작했나요?"라고 되묻는다. 이어서 교실 안 물건의 길이를 단위를 골라 어림해 보게 한다.',
      introS: '막대가 자의 2에서 시작해요. 끝 눈금이 6.5일 때 길이가 얼마일지 짝과 이야기해 봐요.',
      acts: [
        { id: 'a1', title: '활동 1. 시작 눈금이 0이 아닌 자로 재기', minutes: 9, tool: 'measure',
          task: '물건이 자의 0이 아닌 눈금에서 시작해요. 시작 눈금부터 끝 눈금까지의 길이를 mm로 써요.',
          teacher: '"막대가 2 cm에서 시작해 6 cm 5 mm에서 끝나요. 길이는 얼마일까요?" 끝 눈금에서 시작 눈금을 빼서 45 mm라고 말하게 한다. 65 mm라고 답한 학생에게는 0부터 2 cm까지는 막대가 없다는 것을 손가락으로 가려 보여 준다.',
          levels: RUL(),
          items: [
            rulerMM('막대가 2 cm에서 시작해요. 길이를 mm로 써 보세요.', '막대', 4.5, 2),
            rulerMM('자의 1 cm 눈금에서 시작한 리본의 길이를 mm로 써 보세요.', '리본', 3.8, 1),
            rulerMM('종이띠가 3 cm 눈금에서 시작했어요. 길이는 몇 mm일까요?', '종이띠', 5.2, 3),
            Object.assign(rulerMM('더 해 보기: 4 cm에서 시작한 나뭇가지의 길이를 mm로 써 보세요.', '나뭇가지', 2.6, 4), { extra: true }),
          ] },
        { id: 'a2', title: '활동 2. 어림할 때 알맞은 단위 고르기', minutes: 9, tool: 'measure',
          task: '어림한 길이를 말할 때 알맞은 단위를 mm, cm, m, km 중에서 골라요.',
          teacher: '"버스 한 대의 길이를 cm로 말하면 1200 cm예요. m로 말하면?" 12 m가 더 읽기 쉽다는 것을 말하게 한다. "집에서 놀이공원까지 가는 길을 m로 말하면 수가 너무 커져요"라고 지적하며 먼 거리에는 km가 알맞음을 정리한다.',
          levels: { easy: Object.assign({ mode: 'unit' }, UNITS), base: Object.assign({ mode: 'unit' }, UNITS), challenge: Object.assign({ mode: 'unit' }, UNITS) },
          items: [
            unitItem('버스 한 대의 길이와 손가락 한 마디의 길이에 알맞은 단위를 각각 고르세요.', ['버스 한 대의 길이', '손가락 한 마디의 길이'], [2, 1]),
            unitItem('집에서 놀이공원까지 가는 길과 운동화 길이에 알맞은 단위를 각각 고르세요.', ['집에서 놀이공원까지 가는 길', '운동화의 길이'], [3, 1]),
            unitItem('교실 칠판 가로 길이와 연필심 굵기에 알맞은 단위를 각각 고르세요.', ['교실 칠판의 가로 길이', '연필심의 굵기'], [2, 0]),
            Object.assign(unitItem('더 해 보기: 비행기가 한 시간에 나는 거리와 공책의 두께에 알맞은 단위를 고르세요.', ['비행기가 한 시간에 나는 거리', '공책의 두께'], [3, 0]), { extra: true }),
          ] },
        { id: 'a3', title: '활동 3. 이동 거리 어림해 더하기', minutes: 8, tool: 'numberline',
          task: '집에서 학교, 도서관까지 간 거리를 화살표로 더해요. 1000 m가 되면 1 km예요.',
          teacher: '"집에서 학교까지 500 m, 학교에서 도서관까지 500 m예요. 집에서 도서관까지는 몇 km일까요?" 합이 1000 m라서 1 km임을 말하게 한다. 둘을 합해도 500 m라고 말하는 학생에게는 화살표를 두 번 그리게 해서 어디에 닿는지 확인하게 한다.',
          levels: KM('jump', { hopStep: 250 }),
          items: [
            { prompt: '집에서 학교까지 500 m를 갔고 도서관까지 500 m 더 갔어요. 500에서 500만큼 더 가 보세요.', toolOptions: { fixedFrom: 500, hopSize: 500 }, target: { from: 500, end: 1000 } },
            { prompt: '공원 입구가 1250 m 지점이에요. 750 m 더 걸어 닿는 곳까지 화살표를 그려 보세요.', toolOptions: { fixedFrom: 1250, hopSize: 250 }, target: { from: 1250, end: 2000 } },
            { prompt: '마트가 750 m 지점이에요. 여기서 750 m를 더 가면 몇 km 몇 m일까요?', toolOptions: { fixedFrom: 750, hopSize: 250 }, target: { from: 750, end: 1500 } },
            { prompt: '더 해 보기: 1000 m 지점에서 1250 m를 더 걸어 닿는 곳까지 화살표를 그려 보세요.', toolOptions: { fixedFrom: 1000, hopSize: 250 }, target: { from: 1000, end: 2250 }, extra: true },
          ] },
      ],
      wrapT: '"시작 눈금이 0이 아닐 때는 어떻게 길이를 구했나요? 어림할 때 단위는 어떻게 골랐나요?" 끝 눈금에서 시작 눈금을 뺀다는 말과 "수가 너무 크지도 작지도 않게"라는 말을 이끌어 낸다. 출구 1번에서 끝 눈금을 그대로 읽은 학생은 시작 눈금을 손가락으로 가리는 활동을 다음에 다시 한다.',
      exit: [
        { type: 'tool', tool: 'measure', options: { mode: 'ruler', max: 8, readOnly: true, object: { name: '색 막대', len: 3.1, start: 2 }, askNum: { q: '길이는 몇 mm일까요?', unit: 'mm' } }, prompt: '2 cm에서 시작한 색 막대의 길이를 mm로 쓰세요.', target: { num: 31 } },
        { type: 'choice', prompt: '지우개의 두께를 말할 때 가장 알맞은 단위는 무엇일까요?', options: ['mm', 'm', 'km'], answer: 0, explain: '지우개 두께는 1 cm쯤이라서 mm로 말하면 알맞아요.' },
        { type: 'choice', prompt: '서울에서 대전까지의 거리를 말할 때 가장 알맞은 단위는 무엇일까요?', options: ['cm', 'm', 'km'], answer: 2, explain: '아주 먼 거리는 km로 말하면 수가 작고 읽기 쉬워요.' },
      ],
      ws: { title: '재고 어림하기', items: [
        { type: 'figure', prompt: '물건이 시작한 눈금부터 끝까지의 길이를 mm로 쓰세요.', tool: 'measure', wide: true, options: { mode: 'ruler', max: 8, readOnly: true }, figures: [
          { options: { object: { name: '막대', len: 3.4, start: 1 } }, caption: BLANK + ' mm' }, { options: { object: { name: '연필', len: 5.6, start: 2 } }, caption: BLANK + ' mm' }], answer: '34 mm, 56 mm' },
        { type: 'table', prompt: '길이에 알맞은 단위를 mm, cm, m, km 중에서 골라 쓰세요.', columns: ['길이', '알맞은 단위'], cells: [['개미 몸길이', ''], ['교실 문의 높이', ''], ['부산까지 가는 길', ''], ['엄지손가락 너비', '']], answer: 'mm, m, km, cm' },
        { type: 'choice', prompt: '1 km 250 m를 m로 바르게 쓴 것에 ○ 하세요.', options: ['125 m', '1250 m', '12500 m'], answer: '1250 m' },
        { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '0이 아닌 눈금에서 시작한 길이는 ______ 눈금에서 ______ 눈금을 빼서 구해요.', answer: '끝, 시작' },
        { type: 'short', prompt: '우리 교실에서 길이를 어림해 볼 물건 하나와 알맞은 단위를 써 보세요.' },
      ], easy: { note: '시작 눈금이 0이 아니면 끝 눈금에서 시작 눈금을 빼요.', items: [
        { type: 'figure', prompt: '물건의 길이를 mm로 쓰세요.', tool: 'measure', wide: true, options: { mode: 'ruler', max: 8, readOnly: true }, figures: [
          { options: { object: { name: '리본', len: 2.5, start: 1 } }, caption: BLANK + ' mm' }], answer: '25 mm' },
        { type: 'table', prompt: '알맞은 단위를 골라 쓰세요.', columns: ['길이', '알맞은 단위'], cells: [['운동장 한 바퀴', ''], ['연필심 굵기', '']], answer: 'm, mm' },
        { type: 'choice', prompt: '1 km는 몇 m와 같을까요?', options: ['100 m', '1000 m'], answer: '1000 m' },
        { type: 'draw', prompt: '내 책상 위 물건 하나의 길이를 어림해 쓰고 자로 재어 비교해 보세요.' },
      ] } },
      diff: { easy: '물건 양 끝에서 눈금으로 내려오는 점선이 있어서 시작과 끝을 찾기 쉬워요.', base: '점선 없이 시작 눈금과 끝 눈금을 찾아 빼요.', challenge: '더 긴 자에서 시작 눈금을 찾아 mm로 읽고, 어림한 값과 비교해 설명해요.' },
      notes: '자주 보이는 어려움: ① 시작이 0이 아닐 때 끝 눈금을 그대로 길이로 읽는다(2 cm에서 시작해 6.5 cm면 65 mm) → 시작 눈금을 빼야 한다. ② 어림하면서 단위를 고르지 않고 숫자만 말한다 → 단위를 먼저 고르고 수를 말한다. ③ m와 km를 섞는다 → 1000 m가 1 km.',
    }),
    mk(10, ['[4수03-16]'], {
      title: 'cm·mm와 km·m로 같은 길이 두 가지로 쓰기',
      objective: '7 cm 5 mm = 75 mm, 2 km 300 m = 2300 m처럼 두 단위로 쓴 길이를 서로 바꾸어 쓰고 바꾸는 방법을 설명할 수 있다.',
      ill: 'a paper ruler and a long road sign placed side by side with arrows showing equal lengths in two units, ', scene: '길이 두 가지로 쓰기',
      extra: { motif: 'cloud', x: 120, y: 190 },
      introT: '"자로 연필을 재었더니 7 cm 5 mm예요. 이 길이를 mm로만 말하면 어떻게 될까요?" 7 cm가 70 mm라는 것을 떠올리게 하고 75 mm임을 확인한다. 7 cm 5 mm를 "75 cm"로 쓰는 학생에게는 단위가 다르다고 짚고 km와 m도 같은 방식으로 이어 가겠다고 알려 준다.',
      introS: '7 cm 5 mm를 mm로만 말하면 어떻게 될지 짝과 이야기해 봐요.',
      acts: [
        { id: 'a1', title: '활동 1. cm와 mm로 나누어 쓰기', minutes: 9, tool: 'measure',
          task: '자로 잰 길이를 몇 cm 몇 mm로 써요. 큰 눈금과 작은 눈금을 따로 세요.',
          teacher: '"큰 눈금 5까지가 5 cm이고 작은 눈금 3칸이 더 있어요. 길이는 얼마일까요?" 5 cm 3 mm라고 말하게 한다. 5.3 cm를 5 cm 3 mm와 같다고 연결해 주고, 53 cm로 쓴 학생에게는 단위를 하나씩 말하며 다시 읽게 한다.',
          levels: { easy: { mode: 'ruler', max: 10, split: true }, base: { mode: 'ruler', max: 12, split: true }, challenge: { mode: 'ruler', max: 15, split: true } },
          items: [
            { prompt: '연필의 길이를 몇 cm 몇 mm로 써 보세요.', toolOptions: { object: { name: '연필', len: 5.3 } }, target: { read: 5.3 } },
            { prompt: '리본의 길이를 몇 cm 몇 mm로 써 보세요.', toolOptions: { object: { name: '리본', len: 7.8 } }, target: { read: 7.8 } },
            { prompt: '단추의 지름을 몇 cm 몇 mm로 써 보세요.', toolOptions: { object: { name: '단추', len: 2.6 } }, target: { read: 2.6 } },
            { prompt: '더 해 보기: 나뭇잎의 길이를 몇 cm 몇 mm로 써 보세요.', toolOptions: { object: { name: '나뭇잎', len: 9.4 } }, target: { read: 9.4 }, extra: true },
          ] },
        { id: 'a2', title: '활동 2. km와 m를 m로만 말하기', minutes: 9, tool: 'numberline',
          task: '몇 km 몇 m로 표시한 점을 m로만 말해 보세요. 1 km는 1000 m예요.',
          teacher: '"점이 3 km 400 m에 있어요. 1 km는 몇 m였지요? 3 km는 몇 m일까요?" 3000 m에 400 m를 더해 3400 m라고 말하게 한다. 3 km 400 m를 "340 m"나 "3400 km"로 쓴 학생에게는 단위를 소리 내어 읽게 한다.',
          levels: {
            easy: { mode: 'read', min: 0, max: 4000, step: 1000, sub: 10, labels: 'major' },
            base: { mode: 'read', min: 0, max: 4000, step: 1000, sub: 5, labels: 'major' },
            challenge: { mode: 'read', min: 0, max: 4000, step: 1000, sub: 2, labels: 'major' },
          },
          items: [
            { prompt: '점이 3 km 400 m에 있어요. m로만 말하면 몇 m일까요?', toolOptions: { marks: [3400], question: '점이 나타내는 거리는 몇 m일까요?' }, target: { value: 3400 } },
            { prompt: '점이 1 km 800 m에 있어요. m로만 쓰면 몇 m일까요?', toolOptions: { marks: [1800], question: '점이 나타내는 거리는 몇 m일까요?' }, target: { value: 1800 } },
            { prompt: '점이 2 km 600 m에 있어요. m로 바꾸어 써 보세요.', toolOptions: { marks: [2600], question: '점이 나타내는 거리는 몇 m일까요?' }, target: { value: 2600 } },
            { prompt: '더 해 보기: 점이 3 km 900 m에 있어요. 몇 m일까요?', toolOptions: { marks: [3900], question: '점이 나타내는 거리는 몇 m일까요?' }, target: { value: 3900 }, extra: true },
          ] },
        { id: 'a3', title: '활동 3. 몇 cm 몇 mm를 mm로 바꾸기', minutes: 8, tool: 'measure',
          task: '자에 놓인 물건의 길이를 몇 cm 몇 mm로 보고, mm로만 바꾸어 써요.',
          teacher: '"7 cm 5 mm에서 7 cm는 몇 mm일까요? 거기에 5 mm를 더하면?" 70 + 5로 75 mm임을 말하게 한다. 7 cm 5 mm를 "705 mm"로 쓴 학생에게는 1 cm가 10 mm라서 7 cm는 70 mm임을 다시 세게 한다.',
          levels: RUL(),
          items: [
            rulerMM('자에 놓인 7 cm 5 mm 길이의 막대예요. mm로만 쓰면 몇 mm일까요?', '막대', 7.5),
            rulerMM('자 위의 3 cm 2 mm 길이의 클립을 mm로만 써 보세요.', '큰 클립', 3.2),
            rulerMM('12 cm 4 mm 길이의 색연필을 mm로만 써 보세요.', '색연필', 12.4),
            Object.assign(rulerMM('더 해 보기: 9 cm 1 mm 길이의 붓을 mm로만 써 보세요.', '붓', 9.1), { extra: true }),
          ] },
      ],
      wrapT: '"4 cm 6 mm를 mm로 바꿀 때와 3 km 50 m를 m로 바꿀 때 같은 점은 무엇이었나요?" 큰 단위를 작은 단위로 바꾼 뒤 남은 수를 더한다는 방법을 말하게 한다. 출구 2번에서 "350 m"를 고른 학생은 3 km가 몇 m인지부터 다시 묻는다.',
      exit: [
        { type: 'choice', prompt: '4 cm 6 mm는 몇 mm일까요?', options: ['46 mm', '406 mm', '460 mm'], answer: 0, explain: '4 cm는 40 mm이고 6 mm를 더하면 46 mm예요.' },
        { type: 'choice', prompt: '3 km 50 m는 몇 m일까요?', options: ['350 m', '3050 m', '3500 m'], answer: 1, explain: '3 km는 3000 m이고 50 m를 더하면 3050 m예요.' },
        { type: 'choice', prompt: '8500 m를 몇 km 몇 m로 바꾸면 어떻게 될까요?', options: ['85 km', '8 km 500 m', '8 km 50 m'], answer: 1, explain: '8500 m는 1000 m씩 8번인 8 km와 남은 500 m예요.' },
      ],
      ws: { title: '길이 바꾸어 쓰기', items: [
        { type: 'table', prompt: '빈칸에 알맞은 길이를 쓰세요.', columns: ['몇 cm 몇 mm', 'mm'], cells: [['7 cm 5 mm', '75 mm'], ['3 cm 2 mm', ''], ['', '124 mm'], ['9 cm 1 mm', '']], answer: '32 mm, 12 cm 4 mm, 91 mm' },
        { type: 'table', prompt: '빈칸에 알맞은 거리를 쓰세요.', columns: ['몇 km 몇 m', 'm'], cells: [['2 km 300 m', '2300 m'], ['1 km 800 m', ''], ['', '3050 m'], ['4 km 70 m', '']], answer: '1800 m, 3 km 50 m, 4070 m' },
        { type: 'figure', prompt: '자를 보고 길이를 몇 cm 몇 mm로 쓰고, mm로만도 쓰세요.', tool: 'measure', wide: true, options: { mode: 'ruler', max: 10, readOnly: true }, figures: [
          { options: { object: { name: '막대', len: 6.4 } }, caption: BLANK + ' cm ' + BLANK + ' mm = ' + BLANK + ' mm' }], answer: '6 cm 4 mm = 64 mm' },
        { type: 'choice', prompt: '5 km 20 m를 m로 바르게 쓴 것에 ○ 하세요.', options: ['520 m', '5020 m', '5200 m'], answer: '5020 m' },
        { type: 'short', prompt: '같은 길이를 두 가지 단위로 말할 수 있는 까닭과 두 말이 필요한 때를 써 보세요.' },
      ], easy: { note: '1 cm = 10 mm, 1 km = 1000 m예요. 큰 단위를 작은 단위로 바꾼 뒤 남은 수를 더해요.', items: [
        { type: 'table', prompt: '빈칸에 알맞은 길이를 쓰세요.', columns: ['몇 cm 몇 mm', 'mm'], cells: [['2 cm 5 mm', '25 mm'], ['4 cm 1 mm', '']], answer: '41 mm' },
        { type: 'table', prompt: '빈칸에 알맞은 거리를 쓰세요.', columns: ['몇 km 몇 m', 'm'], cells: [['1 km 500 m', '1500 m'], ['2 km 200 m', '']], answer: '2200 m' },
        { type: 'choice', prompt: '3 cm 4 mm와 같은 길이에 ○ 하세요.', options: ['34 mm', '304 mm'], answer: '34 mm' },
        { type: 'draw', prompt: '우리 반 친구의 필통 길이를 자로 재어 몇 cm 몇 mm로 쓰고 mm로도 써 보세요.' },
      ] } },
      diff: { easy: '큰 눈금과 작은 눈금이 어디까지인지 점선으로 보이는 자에서 읽고 바꿔요.', base: '단위 관계를 직접 말하며 cm와 mm, km와 m를 바꿔요.', challenge: '눈금 사이를 어림해 읽은 길이를 두 가지 단위로 써요.' },
      notes: '자주 보이는 어려움: ① cm와 mm 사이를 바꿀 때 0을 빼거나 더한다(7 cm 5 mm → 705 mm) → 7 cm = 70 mm에 5를 더한다. ② km와 m를 바꿀 때 천 단위를 빠뜨린다(3 km 50 m → 350 m) → 3 km = 3000 m에 50을 더한다. ③ 두 단위를 섞어 쓴 값을 한 단위로 바꾸는 순서를 헷갈린다 → 큰 단위를 먼저 바꾼다.',
    }),
  ],
});
})();
