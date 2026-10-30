/* 4학년 1학기 수학 2. 각도 — 단원 파일(차시 10개 가운데 3차시는 기존 차시 g4-math-angle).
 * 확인 필요: units-index 의 plan 은 '각의 크기 단위 도·각도기로 재고 어림하기'(1~4), '삼각형·사각형 내각의 합'(5~7), '직각을 기준으로 예각·둔각 가려내기'(8~10)를
 *   개념·표현·적용으로 반복하고, 기존 3차시(g4-math-angle)가 각도기로 재고 그리기·예각 직각 둔각 구분을 이미 다룬다. 기존 차시는 고치지 않고, 이 단원은
 *   1~2차시를 '도 단위와 눈금 읽기·각 견주기', 4차시를 '어림하고 재어 견주기(삼각자 각 포함)'로 지어 겹치지 않게 했다. 성취기준 [4수03-02] [4수03-24] [4수03-25]는
 *   units-map·units-index 와 같고, 차시마다 그 차시의 주제에 맞는 코드만 달았다. 학생 이름(민지·준호)은 가명이고 예문·수치는 이 단원을 위해 직접 지었다.
 *   각 계산(삼각형 180°, 사각형 360°, 나머지 각)은 모두 직접 계산해 정답을 정했다.
 * 흐름: 직각을 90°로 정하고 각의 크기 말하기(1) → 눈금 읽기와 변의 길이에 관계없는 각 견주기(2) → [기존 3: 각도기로 재고 그리기] → 어림하고 재어 견주기(4)
 *      → 삼각형 세 각의 합 180°(5) → 세 각을 모아 붙이고 사각형은 삼각형 둘로(6) → 나머지 각 구하기(7)
 *      → 직각과 견주어 예각·둔각 가려내기(8) → 예각·둔각 만들고 각의 부분 알기(9) → 생활 속 각 찾기·단원 정리(10).
 */
(function () {
const UID = 'g4-math-1-02', CU = 'g4-수학-1학기-2', UT = '2. 각도';
const S24 = ['[4수03-24]'], S25 = ['[4수03-25]'], S02 = ['[4수03-02]'], S0225 = ['[4수03-02]', '[4수03-25]'];
const BLANK = '(          )';
const two = (n) => String(n).padStart(2, '0');
const TAIL = ', with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.';
const ill = (desc, text, extra) => ({
  prompt: `Layered paper-cut illustration of ${desc}${TAIL}`,
  scene: { viewBox: [480, 270], layers: [
    { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 110, y: 52 }, { motif: 'hills', y: 206 },
    ...(extra || []), { motif: 'text', x: 240, y: 142, text, size: 22 },
  ] },
});
// 수업 하나의 공통 틀: 도입 7분 + 전개 26분 + 정리 7분 = 40분
const lesson = (n, d) => ({
  id: `${UID}-${two(n)}`, schema: 'edu-lesson.v1', catalog: { unit: CU, lesson: n },
  grade: 4, subject: '수학', unitTitle: UT,
  title: d.title, objective: d.objective, standards: d.std, minutes: 40, formats: ['chromebook', 'projector', 'print'],
  illustration: ill(d.desc, d.text, d.layers),
  stages: [
    Object.assign({ id: 'intro', title: '도입', minutes: 7, teacher: d.intro[0], student: d.intro[1] }, d.demo ? { demo: d.demo } : {}),
    { id: 'main', title: '전개', minutes: 26, activities: d.acts },
    { id: 'wrapup', title: '정리', minutes: 7, teacher: d.wrap[0], exitTicket: [...d.wrap[1], { type: 'mood', prompt: '오늘 공부는 어땠나요?' }] },
  ],
  worksheet: d.ws, differentiation: d.diff, teacherNotes: d.notes,
});
const num = (n) => ({ id: String(n), text: String(n), big: String(n) });
const nums = (...a) => a.map(num);
const cd = (v) => (typeof v === 'number' ? num(v) : typeof v === 'string' ? { id: v, text: v } : v);
const ML = (topic) => ({ easy: { topic, live: true }, base: { topic }, challenge: { topic } });
// 짝 잇기: pairs = [[칸 글, 정답 카드(수 또는 글)], …], cards = 보기 카드 전부
const mt = (prompt, topic, pairs, cards, d) => ({
  prompt, difficulty: d,
  toolOptions: { mode: 'match', topic, slots: pairs.map((p, i) => ({ id: `s${i + 1}`, label: p[0] })), cards: cards.map(cd) },
  target: { match: Object.fromEntries(pairs.map((p, i) => [`s${i + 1}`, String(p[1])])) },
});
// 고르기: 조건에 맞는 카드만 바구니에 담는다
const pk = (prompt, topic, list, answers, d, basket) => ({ prompt, difficulty: d, toolOptions: { mode: 'pick', topic, basket: basket || '고른 수', cards: list.map(cd) }, target: { pick: answers.map(String) } });
// 나누기: sortMap = { 칸 이름: [수…] }
const srt = (prompt, topic, sortMap, d) => ({ prompt, difficulty: d, toolOptions: { mode: 'sort', topic, slots: Object.keys(sortMap), cards: [].concat(...Object.values(sortMap)).map(cd) }, target: { sort: Object.fromEntries(Object.entries(sortMap).map(([k, v]) => [k, v.map(String)])) } });
// 차례 놓기: list 를 섞어 보여 주고 작은 수부터(desc 면 큰 수부터) 놓는다
const ordItem = (prompt, topic, list, d, desc) => ({ prompt, toolOptions: { mode: 'order', topic, cards: nums(...list) }, target: { order: [...list].sort((a, b) => (desc ? b - a : a - b)).map(String) }, difficulty: d });
// 말글 차례 놓기: ids 는 바른 차례, 보이는 순서는 교구가 섞는다
const ordWords = (prompt, topic, ids, d) => ({ prompt, toolOptions: { mode: 'order', topic, cards: ids.map(cd) }, target: { order: ids.map(String) }, difficulty: d });
// 말풍선 빈칸 채우기: rows = [[이름, 모티프, 글(___ 가 빈칸), 정답], …], extra = 함정 카드
const MOTIFS = ['sun', 'tree', 'flower', 'leaf', 'star', 'cloud'];
const fl = (prompt, rows, extra, d) => ({
  prompt, difficulty: d,
  toolOptions: { cards: [...rows.map((r) => r[3]), ...(extra || [])].map((n) => (typeof n === 'number' ? num(n) : { id: String(n), text: String(n) })), slots: rows.map((r, i) => ({ id: `b${i + 1}`, who: r[0], motif: r[1] || MOTIFS[i], label: r[2] })) },
  target: { fill: Object.fromEntries(rows.map((r, i) => [`b${i + 1}`, String(r[3])])) },
});
const LVF = { easy: { mode: 'fill', live: true }, base: { mode: 'fill' }, challenge: { mode: 'fill' } };
// 수 배열 빈칸: seq 의 null 자리에 들어갈 수를 차례로
const pt = (prompt, seq, fill, d) => ({ prompt, toolOptions: { seq }, target: { fill }, difficulty: d });
const LVP = { easy: { mode: 'fill' }, base: { mode: 'fill' }, challenge: { mode: 'fill' } };
// 수직선 뛰어 세기: min 에서 출발해 step 칸씩 뛴다
const JM = (min, max, step) => ({
  easy: { mode: 'jump', min, max, step, labels: 'major', fixedFrom: min, showValue: true },
  base: { mode: 'jump', min, max, step, labels: 'major', fixedFrom: min },
  challenge: { mode: 'jump', min, max, step, sub: step, labels: 'ends', fixedFrom: min },
});
const jc = (prompt, from, size, count, d) => ({ prompt, target: { from, size, count }, difficulty: d });
const je = (prompt, from, size, end, d) => ({ prompt, target: { from, size, end }, difficulty: d });
// 수직선에 점 놓기
const PLC = (min, max, step, sub) => ({
  easy: { mode: 'place', min, max, step, sub, labels: 'all', showValue: true },
  base: { mode: 'place', min, max, step, sub, labels: 'major' },
  challenge: { mode: 'place', min, max, step, sub, labels: 'ends' },
});
const pl = (prompt, points, d, x) => Object.assign({ prompt, target: { points }, difficulty: d }, x || {});
// 수직선 점 읽기: 보기를 고른다
const RD = (min, max, step, sub) => ({
  easy: { mode: 'read', min, max, step, sub, labels: 'all', showValue: true },
  base: { mode: 'read', min, max, step, sub, labels: 'major' },
  challenge: { mode: 'read', min, max, step, sub, labels: 'ends' },
});
const rd = (prompt, mark, choices, answer, d, why) => ({ prompt, toolOptions: Object.assign({ marks: [mark], choices: choices.map(String) }, why ? { why } : {}), target: { pick: answer }, difficulty: d });

// 각도기: 만들기(target.angle)·재기(measure, state.angle)·종류 만들기(target.kind)
const PLV = (base) => ({
  easy: { base, start: 15, step: 15, highlightScale: true, showHints: true },
  base: { base, start: 10, step: 5, showReadout: false, showKind: false },
  challenge: { base, start: 10, step: 1, showReadout: false, showKind: false },
});
const mk = (prompt, angle, d, x) => Object.assign({ prompt, target: { angle }, difficulty: d }, x || {});
const ms = (prompt, angle, d, to, x) => Object.assign({ prompt, toolOptions: Object.assign({ measure: true }, to || {}), state: { angle }, target: { angle }, difficulty: d }, x || {});
const mkKind = (prompt, kind, d, extra, x) => Object.assign({ prompt, target: Object.assign({ kind }, extra || {}), difficulty: d }, x || {});
// 종이 직각: 대 보고 고르기(judge)·견주기(compare)·부분 찾기(parts)
const RAL = (mode) => ({ easy: { mode }, base: { mode }, challenge: { mode } });
const jd = (prompt, angle, turn, judge, d, x) => Object.assign({ prompt, toolOptions: { mode: 'judge', turn }, state: { angle }, target: { judge }, difficulty: d }, x || {});
const cmp = (prompt, pair, bigger, d, x) => Object.assign({ prompt, toolOptions: { mode: 'compare', pair }, target: { bigger }, difficulty: d }, x || {});
const prt = (prompt, angle, part, d, x) => Object.assign({ prompt, toolOptions: { mode: 'parts' }, state: { angle }, target: { part }, difficulty: d }, x || {});
const ang = (...a) => a.map((v) => ({ id: `${v}°`, text: `${v}°` }));
const L = [];
// ───────────────────────────── 1차시 (intro · 도 단위) ─────────────────────────────
L.push(lesson(1, {
  std: S24,
  title: '직각을 90°로 정하고 각의 크기 말하기',
  objective: '각의 크기를 나타내는 단위 1도(1°)를 알고, 직각이 90°임을 이용해 45°·135°·180° 같은 각의 크기를 말할 수 있다.',
  desc: 'a paper fan opening in steps beside a classroom door and a small paper protractor on a desk',
  text: '직각은 90°예요',
  layers: [{ motif: 'house', x: 108, y: 214, s: 1.0 }, { motif: 'tree', x: 390, y: 216 }, { motif: 'flower', x: 250, y: 238 }, { motif: 'star', x: 334, y: 80, s: 0.6 }],
  intro: ['"문을 직각만큼 열었어요. 직각을 숫자로 말해야 한다면 어떻게 말하면 좋을까요?" 직각을 똑같이 90칸으로 나눈 한 칸을 1도(1°)로 약속했다고 알려 주고, 시연 단추로 종이 띠가 90°, 45°, 180°로 열리는 모습을 보여 준다. 변이 긴 각이 더 크다고 생각하는 학생이 있다 — 각의 크기는 변의 길이가 아니라 벌어진 정도라고 활동에서 짚는다.', '종이 띠를 직각만큼 벌려 보아요. 그 각의 크기를 어떻게 말할 수 있을까요?'],
  demo: { tool: 'protractor', options: { step: 15, highlightScale: true }, sequence: [{ angle: 45 }, { angle: 90 }, { angle: 180 }] },
  acts: [
    { id: 'a1', title: '활동 1. 직각을 기준으로 띠 벌리기', minutes: 10, tool: 'protractor',
      task: '직각은 90°예요. 직각을 기준으로 종이 띠를 벌려 각의 크기를 만들어 봐요.',
      teacher: '"직각은 몇 도일까요? 직각의 반은 몇 도일까요?" 종이를 직각으로 접었다가 반으로 접어 보이며 90을 둘로 똑같이 나누면 45가 된다고 말하게 한다. 직각의 반을 40°나 50°로 짐작하는 학생에게는 두 번 이으면 직각이 되는지 90°와 견주어 보게 한다.',
      levels: PLV('right'),
      items: [
        mk('문을 직각만큼 열어 보세요. 몇 도로 열었나요?', 90, 0.1),
        mk('부채를 직각의 반만큼 펴 보세요.', 45, 0.15),
        mk('직각과 직각의 반을 합친 만큼 문을 열어 보세요.', 135, 0.22),
        mk('직각 둘을 이은 만큼 활짝 열어 보세요. 두 변이 한 줄이 돼요.', 180, 0.2, { predict: { q: '직각 둘을 이으면 몇 도일까요?', options: ['90°', '180°', '360°'], answer: 1 }, conclude: '직각 둘을 이으면 180°이고, 두 변이 한 줄이 돼요.' }),
      ] },
    { id: 'a2', title: '활동 2. 각도 카드를 직각과 견주어 나누기', minutes: 8, tool: 'mindmap',
      task: '각도 카드를 90°와 견주어 직각보다 작은지, 같은지, 큰지 나누어요.',
      teacher: '"70°와 110°는 90°보다 작을까요, 클까요?" 90°를 기준으로 수의 크기를 견주게 한다. 100°를 직각보다 작다고 하는 학생에게는 100이 90보다 큰지 수직선으로 짚어 보게 한다. 직각은 정확히 90°뿐이라고 말해 준다.',
      levels: ML('직각과 견주기'),
      items: [
        srt('각도 카드를 직각과 견주어 나누어 보세요.', '직각과 견주기', { '직각보다 작아요': ['25°', '75°'], '직각이에요': ['90°'], '직각보다 커요': ['110°', '160°'] }, 0.15),
        srt('이번에는 90°에 아주 가까운 카드를 나누어 보세요.', '직각과 견주기', { '직각보다 작아요': ['30°', '60°', '89°'], '직각이에요': ['90°'], '직각보다 커요': ['91°'] }, 0.22),
        pk('직각보다 큰 각만 골라 보세요.', '직각과 견주기', ['95°', '45°', '120°', '90°', '179°'], ['95°', '120°', '179°'], 0.2, '직각보다 큰 각'),
      ] },
    { id: 'a3', title: '활동 3. 도 단위로 말하는 말풍선 채우기', minutes: 8, tool: 'story',
      task: '친구들의 말에서 빈칸에 알맞은 수를 찾아 넣어요.',
      teacher: '"1도는 직각을 똑같이 몇 칸으로 나눈 한 칸일까요?" 90칸이라고 말하게 하고 45°가 몇 칸인지 세어 보게 한다. 직각의 반 셋을 이으면 얼마인지 묻는데 45를 세 번 더하지 않고 90이나 180이라고 하는 학생에게는 직각의 반 둘이 직각이라는 것을 먼저 말하게 한다.',
      levels: LVF,
      items: [
        fl('말풍선의 빈칸에 알맞은 수를 넣어 보세요.', [['민지', 'sun', '직각은 ___°예요.', 90], ['준호', 'tree', '직각의 반은 ___°예요.', 45]], [9, 180], 0.12),
        fl('빈칸에 알맞은 수를 넣어 보세요.', [['민지', 'flower', '직각 둘을 이으면 ___°예요.', 180], ['준호', 'leaf', '직각과 직각의 반을 합치면 ___°예요.', 135]], [90, 270], 0.2),
        fl('1도와 직각의 관계를 빈칸에 넣어 보세요.', [['민지', 'star', '1°는 직각을 똑같이 ___칸으로 나눈 한 칸이에요.', 90], ['준호', 'cloud', '직각의 반 셋을 이으면 ___°예요.', 135]], [45, 180], 0.22),
      ] },
  ],
  wrap: ['"직각은 몇 도이고, 직각의 반은 몇 도인가요?" 짝에게 종이를 접어 가며 말하게 한다. 출구 2번을 틀린 학생은 직각의 몇 배인지 90에 곱하며 확인하게 하고 다음 시간 처음에 다시 묻는다.', [
    { type: 'choice', prompt: '직각의 크기는 몇 도인가요?', options: ['45°', '90°', '180°'], answer: 1, difficulty: 0.08, explain: '직각을 똑같이 90칸으로 나눈 한 칸이 1°라서 직각은 90°예요.' },
    { type: 'choice', prompt: '180°는 직각의 몇 배인가요?', options: ['2배', '3배', '4배'], answer: 0, difficulty: 0.15, explain: '직각 둘을 이으면 90° + 90° = 180°라서 2배예요.' },
    { type: 'tool', tool: 'protractor', options: { base: 'right', start: 15, step: 15 }, prompt: '종이 띠를 직각의 반만큼 벌려 보세요.', target: { angle: 45 }, difficulty: 0.15 },
  ]],
  ws: { title: '각의 크기와 도', items: [
    { type: 'figure', prompt: '직각을 기준으로 각의 크기를 어림해 쓰세요.', tool: 'protractor', wide: true, figures: [{ state: { angle: 90 }, caption: BLANK + '°' }, { state: { angle: 45 }, caption: BLANK + '°' }], answer: '90°, 45°' },
    { type: 'table', prompt: '직각을 기준으로 빈칸에 각의 크기를 쓰세요.', columns: ['직각의 몇 배', '직각의 반', '직각', '직각 둘'], cells: [['각의 크기', '', '90°', '']], answer: '45°, 180°' },
    { type: 'choice', prompt: '직각보다 큰 각에 ○ 하세요.', options: ['85°', '90°', '100°'], answer: '100°' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '1°는 직각을 똑같이 ______칸으로 나눈 한 칸이에요.', answer: '90' },
    { type: 'short', prompt: '변이 긴 각과 변이 짧은 각이 같은 만큼 벌어져 있으면 각의 크기는 어떻게 되는지 써 보세요.', answer: '같아요. 각의 크기는 변의 길이가 아니라 벌어진 정도예요.' },
  ], easy: { note: '직각은 90°예요. 직각의 반은 90을 반으로 나눈 45°예요.', items: [
    { type: 'table', prompt: '직각을 기준으로 빈칸에 각의 크기를 쓰세요.', columns: ['이름', '직각의 반', '직각'], cells: [['각의 크기', '', '90°']], answer: '45°' },
    { type: 'choice', prompt: '직각의 크기에 ○ 하세요.', options: ['90°', '45°'], answer: '90°' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '90° + 90° = ______°', answer: '180' },
    { type: 'draw', prompt: '직각을 하나 그리고 90°라고 써 보세요.' },
  ] } },
  diff: { easy: '각각의 띠가 열릴 때 지금의 각도 숫자와 각의 이름이 바로 보여요.', base: '숫자가 보이지 않아서 직각을 기준으로 스스로 가늠해 눈금에 맞춰요.', challenge: '눈금이 1°씩 움직여서 정확한 각도에 맞춰야 해요.' },
  notes: '자주 보이는 어려움: ① 직각의 반을 40°나 50°로 짐작한다 → 90을 똑같이 둘로 나누면 얼마인지 확인한다. ② 직각 둘을 이은 각을 180°가 아니라 100°나 360°라고 한다 → 90 + 90을 계산하고 두 변이 한 줄이 되는 것을 본다. ③ 변이 길면 각이 크다고 생각한다 → 같은 각에 띠 길이만 달리해 견주어 본다. 눈금 읽기는 2차시에서 이어서 한다.',
}));
// ───────────────────────────── 2차시 (practice · 눈금 읽기와 각 견주기) ─────────────────────────────
L.push(lesson(2, {
  std: S24,
  title: '변이 길어도 같은 각, 눈금을 읽어 각도 재기',
  objective: '각의 크기는 변의 길이와 관계없이 벌어진 정도로 정해짐을 알고, 각도기의 눈금을 읽어 각의 크기를 도 단위로 말할 수 있다.',
  desc: 'two paper umbrellas of different sizes opened the same amount next to a ruler and a half-circle protractor',
  text: '크기가 같은 각',
  layers: [{ motif: 'house', x: 108, y: 214, s: 1.0 }, { motif: 'tree', x: 392, y: 216 }, { motif: 'flower', x: 250, y: 238 }, { motif: 'cloud', x: 334, y: 80, s: 0.8 }],
  intro: ['"큰 우산과 작은 우산을 똑같은 정도로 펼쳤어요. 어느 우산이 더 크게 벌어졌을까요?" 시연 단추로 길이가 다른 두 띠가 같은 각을 이루는 모습을 보여 주며 "변의 길이가 달라도 각의 크기는 같을 수 있을까요?"라고 묻는다. 변이 긴 각을 더 큰 각이라고 하는 학생이 있다 — 겹쳐 보면 같다는 것을 직접 확인하게 한다.', '변의 길이가 다른 두 각을 겹쳐 놓으면 어느 쪽이 더 크게 벌어져 있을까요?'],
  acts: [
    { id: 'a1', title: '활동 1. 두 각을 겹쳐 더 큰 각 찾기', minutes: 11, tool: 'rightangle',
      task: '변의 길이가 다른 두 각을 겹쳐 보고, 더 크게 벌어진 각을 골라요.',
      teacher: '"가와 나 중에서 변이 더 긴 쪽은 어느 쪽인가요? 변이 길면 각도 더 클까요?" 겹쳐 보기 단추로 한 각을 다른 각 위에 올려 벌어진 정도만 견주게 한다. 변이 긴 각을 고르는 학생에게는 두 변이 꼭짓점에서 얼마나 벌어졌는지 손가락으로 벌려 보게 한다.',
      levels: RAL('compare'),
      items: [
        cmp('가와 나 중에서 더 큰 각을 골라 보세요.', [{ angle: 40, arm: 1.2 }, { angle: 65, arm: 0.7 }], '나', 0.15),
        cmp('두 각의 크기를 견주어 보세요. 변의 길이는 달라요.', [{ angle: 100, arm: 0.8 }, { angle: 100, arm: 1.2 }], 'same', 0.2),
        cmp('이번에는 변이 짧은 쪽이 더 크게 벌어져 있어요. 더 큰 각을 골라 보세요.', [{ angle: 130, arm: 0.6 }, { angle: 50, arm: 1.2 }], '가', 0.22),
      ] },
    { id: 'a2', title: '활동 2. 눈금을 읽어 각도 말하기', minutes: 15, tool: 'protractor',
      task: '각도기의 눈금을 읽어 각의 크기를 정해요. 고정 띠가 맞춰진 0에서 시작하는 눈금을 읽어요.',
      teacher: '"고정 띠가 맞춰진 0은 어느 줄의 0인가요? 그 줄의 눈금을 손가락으로 따라가 봐요." 먼저 직각보다 작은지 큰지 어림하고 눈금을 읽게 한다. 35°를 145°로 읽은 학생에게는 가위가 직각보다 작게 벌어져 있었다는 것을 떠올려 반대쪽 줄을 읽은 것인지 확인하게 한다.',
      levels: PLV('right'),
      items: [
        ms('가위가 벌어진 각을 재어 보세요. 눈금을 읽고 위의 단추로 각도를 정하세요.', 35, 0.18),
        ms('펼친 책이 만든 각을 재어 보세요. 고정 띠가 왼쪽에 있어요.', 125, 0.24, { base: 'left' }),
        ms('긴 막대로 만든 각을 재어 보세요. 막대가 길어도 같은 방법으로 재요.', 80, 0.22, { armLength: 1.2 }, { predict: { q: '막대가 길어지면 각의 크기가 달라질까요?', options: ['더 커져요', '그대로예요', '더 작아져요'], answer: 1 }, conclude: '변이 길어져도 벌어진 정도가 같으면 각의 크기는 그대로예요.' }),
        ms('우산을 활짝 편 각을 재어 보세요. 눈금을 끝까지 읽어요.', 155, 0.26, { armLength: 0.6 }),
      ] },
  ],
  wrap: ['"각의 크기는 무엇으로 정해질까요? 변의 길이일까요, 벌어진 정도일까요?" 짝에게 겹쳐 보는 방법으로 설명하게 한다. 출구 3번을 틀린 학생은 눈금을 읽는 줄이 맞는지 다음 시간 처음에 함께 살핀다.', [
    { type: 'choice', prompt: '변의 길이가 다른 두 각이 같은 정도로 벌어져 있어요. 각의 크기는 어떤가요?', options: ['변이 긴 쪽이 커요', '변이 짧은 쪽이 커요', '같아요'], answer: 2, difficulty: 0.15, explain: '각의 크기는 변의 길이가 아니라 벌어진 정도로 정해져서 같아요.' },
    { type: 'tool', tool: 'protractor', options: { measure: true, base: 'right', step: 5 }, state: { angle: 60 }, prompt: '띠가 만든 각을 재어 보세요. 눈금을 읽고 위의 단추로 각도를 정하세요.', target: { angle: 60 }, difficulty: 0.2 },
    { type: 'choice', prompt: '각도기로 각을 잴 때 가장 먼저 해야 할 일은 무엇인가요?', options: ['고정 띠가 맞춰진 0에서 시작하는 눈금을 찾아요', '두 눈금 중 아무거나 읽어요', '변의 길이를 재요'], answer: 0, difficulty: 0.18, explain: '고정 띠가 맞춰진 0에서부터 눈금을 읽어야 각도를 바르게 알 수 있어요.' },
  ]],
  ws: { title: '눈금을 읽어 각도 재기', items: [
    { type: 'figure', prompt: '각도기의 눈금을 읽어 각의 크기를 쓰세요.', tool: 'protractor', wide: true, options: { base: 'right' }, figures: [{ state: { angle: 50 }, caption: BLANK + '°' }, { state: { angle: 110 }, caption: BLANK + '°' }], answer: '50°, 110°' },
    { type: 'choice', prompt: '두 각 중 더 큰 각에 ○ 하세요. 변의 길이는 달라요.', options: ['변이 긴 30°', '변이 짧은 70°'], answer: '변이 짧은 70°' },
    { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '각의 크기는 변의 ______와 관계없이 벌어진 ______로 정해져요.', answer: '길이, 정도' },
    { type: 'table', prompt: '두 각을 견주어 표를 채우세요.', columns: ['각', '가', '나'], cells: [['변의 길이', '길어요', '짧아요'], ['각의 크기', '60°', '']], answer: '60°' },
    { type: 'short', prompt: '각도기로 각을 잴 때 반드시 확인해야 할 두 가지를 써 보세요.', answer: '각도기의 중심을 꼭짓점에 맞추고, 밑금을 한 변에 맞춰요.' },
  ], easy: { note: '각의 크기는 변의 길이가 아니라 벌어진 정도로 정해져요.', items: [
    { type: 'figure', prompt: '각도기의 눈금을 읽어 각의 크기를 쓰세요.', tool: 'protractor', wide: true, options: { base: 'right' }, figures: [{ state: { angle: 40 }, caption: BLANK + '°' }], answer: '40°' },
    { type: 'choice', prompt: '같은 정도로 벌어진 두 각은 크기가 어떤가요?', options: ['같아요', '달라요'], answer: '같아요' },
    { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '각의 크기는 변의 ______와 관계없어요.', answer: '길이' },
  ] } },
  diff: { easy: '두 각을 겹쳐 보면 어느 쪽이 큰지 겹친 부분이 보이고, 눈금이 반짝여 어디부터 읽을지 알려 줘요.', base: '겹쳐 보기와 눈금 읽기를 스스로 해요.', challenge: '변이 짧은 각이 더 큰 경우와 눈금을 1°씩 읽는 각이 있어요.' },
  notes: '자주 보이는 어려움: ① 변이 긴 각을 더 큰 각이라고 한다 → 겹쳐 보기로 벌어진 정도만 견주게 한다. ② 각도기의 두 눈금 중 반대쪽 줄을 읽는다(35°를 145°로) → 어림한 각의 종류와 읽은 값이 맞는지 따져 본다. ③ 고정 띠의 0을 찾지 않고 아무 눈금이나 읽는다 → 0에서부터 10씩 세어 읽게 한다. 어림하고 재어 견주는 활동은 4차시에서 이어서 한다.',
}));
// ───────────────────────────── 4차시 (core · 어림하고 재어 견주기) ─────────────────────────────
L.push(lesson(4, {
  std: S24,
  title: '각도를 어림해 보고 삼각자 각까지 재어 견주기',
  objective: '직각을 기준으로 각의 크기를 어림하고, 각도기로 잰 값과 견주어 어림이 얼마나 가까웠는지 말할 수 있다.',
  desc: 'a child guessing the size of an opened paper window with a glowing question mark above, next to a triangle ruler and a protractor',
  text: '어림하고 재어 견줘요',
  layers: [{ motif: 'house', x: 108, y: 214, s: 1.0 }, { motif: 'tree', x: 392, y: 216 }, { motif: 'flower', x: 250, y: 238 }, { motif: 'bird', x: 338, y: 84 }],
  intro: ['"이 각은 몇 도쯤 될까요? 재기 전에 직각과 견주어 어림해 봐요." 시연 단추로 띠를 벌려 직각보다 작은 각과 큰 각을 보이고 "직각의 반보다 클까요, 작을까요?"라고 묻는다. 어림이 정확하지 않으면 틀린 것이라고 생각해 어림을 망설이는 학생이 있다 — 어림은 재기 전에 대충 가늠하는 것이고 잰 값과 가까우면 잘한 것이라고 말해 준다.', '직각(90°)과 직각의 반(45°)을 떠올리며, 이 각은 어느 쪽에 가까운지 말해 봐요.'],
  acts: [
    { id: 'a1', title: '활동 1. 어림하고 재어 보기', minutes: 9, tool: 'protractor',
      task: '먼저 몇 도쯤 될지 어림해 고르고, 각도기로 재어 정확한 값을 알아봐요.',
      teacher: '"이 각은 직각보다 작아요. 직각의 반인 45°보다 클까요, 작을까요?" 어림은 직각과 직각의 반을 기준으로 한다고 말한다. 118°를 60°쯤으로 어림하는 학생에게는 직각보다 큰지 작은지 먼저 따져 보게 한다.',
      levels: PLV('right'),
      items: [
        ms('이 각은 몇 도쯤일까요? 어림한 뒤 각도기로 재어 보세요.', 62, 0.2, null, { predict: { q: '이 각은 몇 도에 가장 가까울까요?', options: ['30°', '60°', '100°'], answer: 1 }, conclude: '60°쯤으로 어림했고 잰 값은 62°예요. 두 값이 가까워요.' }),
        ms('이번 각도 어림한 뒤 재어 보세요.', 118, 0.24, null, { predict: { q: '이 각은 몇 도에 가장 가까울까요?', options: ['60°', '90°', '120°'], answer: 2 } }),
        ms('작은 각을 어림하고 재어 보세요.', 28, 0.22, null, { predict: { q: '이 각은 몇 도에 가장 가까울까요?', options: ['30°', '60°', '90°'], answer: 0 } }),
        ms('넓게 벌어진 각을 어림하고 재어 보세요.', 145, 0.26, { base: 'left' }, { predict: { q: '이 각은 몇 도에 가장 가까울까요?', options: ['90°', '120°', '150°'], answer: 2 } }),
      ] },
    { id: 'a2', title: '활동 2. 어림한 값과 잰 값 견주기', minutes: 8, tool: 'mindmap',
      task: '어림한 값과 잰 값의 차가 10° 안이면 "비슷해요", 더 크면 "많이 달라요"예요. 카드를 나누어요.',
      teacher: '"어림은 60°, 잰 값은 62°예요. 차이는 몇 도일까요?" 큰 수에서 작은 수를 빼서 차를 구하게 한다. 어림이 30°이고 잰 값이 55°이면 차이가 25°라서 많이 다르다고 하고 어림을 어떻게 고치면 좋을지 말하게 한다. 차를 구할 때 더하는 학생에게는 두 수 사이의 거리를 수직선에서 보게 한다.',
      levels: ML('어림과 잰 값'),
      items: [
        srt('어림한 값과 잰 값을 견주어 나누어 보세요.', '어림과 잰 값', { '비슷해요': ['어림 60°, 잰 값 62°', '어림 120°, 잰 값 118°'], '많이 달라요': ['어림 30°, 잰 값 55°', '어림 90°, 잰 값 135°'] }, 0.2),
        srt('이번에는 다른 카드를 견주어 나누어 보세요.', '어림과 잰 값', { '비슷해요': ['어림 45°, 잰 값 50°', '어림 150°, 잰 값 142°'], '많이 달라요': ['어림 90°, 잰 값 70°', '어림 20°, 잰 값 38°'] }, 0.26),
        pk('어림이 잰 값과 비슷한 카드만 골라 보세요.', '어림과 잰 값', ['어림 100°, 잰 값 95°', '어림 60°, 잰 값 85°', '어림 30°, 잰 값 36°', '어림 130°, 잰 값 105°'], ['어림 100°, 잰 값 95°', '어림 30°, 잰 값 36°'], 0.28, '비슷한 카드'),
      ] },
    { id: 'a3', title: '활동 3. 삼각자의 각 재어 보기', minutes: 9, tool: 'protractor',
      task: '삼각자의 각을 먼저 어림하고 각도기로 재어 보아요. 삼각자에는 90°가 하나씩 있어요.',
      teacher: '"삼각자의 가장 뾰족한 각은 직각의 반보다 클까요, 작을까요?" 삼각자를 직각에 대 보고 어림하게 한다. 30°와 60°를 구별하지 못하는 학생에게는 두 삼각자의 가장 작은 각끼리 겹쳐 견주어 보게 한다.',
      levels: PLV('left'),
      items: [
        ms('삼각자에서 가장 작은 각을 어림하고 재어 보세요.', 30, 0.16, null, { predict: { q: '가장 작은 각은 몇 도에 가까울까요?', options: ['15°', '30°', '60°'], answer: 1 } }),
        ms('같은 삼각자에서 나머지 뾰족한 각을 재어 보세요.', 60, 0.2),
        ms('다른 삼각자의 뾰족한 각을 어림하고 재어 보세요.', 45, 0.22, null, { predict: { q: '이 각은 직각의 반과 비교하면 어떨까요?', options: ['더 작아요', '거의 같아요', '더 커요'], answer: 1 } }),
      ] },
  ],
  wrap: ['"각도를 어림할 때 어떤 각을 기준으로 삼으면 좋을까요?" 짝에게 직각과 직각의 반을 기준으로 말하게 한다. 출구 2번을 틀린 학생은 차이를 구할 때 큰 수에서 작은 수를 빼는지 다음 시간 처음에 살핀다.', [
    { type: 'choice', prompt: '직각의 반보다 조금 큰 각을 어림했어요. 가장 알맞은 어림은 무엇인가요?', options: ['20°', '55°', '120°'], answer: 1, difficulty: 0.18, explain: '직각의 반은 45°예요. 그보다 조금 큰 각은 55°쯤이에요.' },
    { type: 'choice', prompt: '어림은 80°, 잰 값은 95°예요. 두 값의 차는 몇 도인가요?', options: ['15°', '25°', '175°'], answer: 0, difficulty: 0.2, explain: '큰 수에서 작은 수를 빼면 95 − 80 = 15이므로 15°예요.' },
    { type: 'tool', tool: 'protractor', options: { measure: true, base: 'right', step: 5 }, state: { angle: 105 }, prompt: '띠가 만든 각을 어림한 뒤 각도기로 재어 보세요.', target: { angle: 105 }, difficulty: 0.22 },
  ]],
  ws: { title: '어림하고 재어 견주기', items: [
    { type: 'figure', prompt: '각을 먼저 어림해 쓰고, 각도기로 재어 쓰세요.', tool: 'protractor', wide: true, options: { base: 'right' }, figures: [{ state: { angle: 70 }, caption: '어림 ___° 잰 값 ___°' }, { state: { angle: 130 }, caption: '어림 ___° 잰 값 ___°' }], answer: '70°, 130° (어림은 가까우면 정답)' },
    { type: 'table', prompt: '어림한 값과 잰 값의 차를 구해 쓰세요.', columns: ['어림한 값', '잰 값', '차'], cells: [['60°', '68°', ''], ['120°', '112°', '']], answer: '8°, 8°' },
    { type: 'choice', prompt: '삼각자에서 직각이 아닌 뾰족한 각에 ○ 하세요.', options: ['30°', '90°', '120°'], answer: '30°' },
    { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '각도를 어림할 때는 ______과 직각의 반을 기준으로 삼으면 좋아요.', answer: '직각' },
    { type: 'short', prompt: '각을 어림할 때 어떤 방법을 썼는지, 잰 값과 얼마나 달랐는지 써 보세요.', answer: '직각과 견주어 어림했고 잰 값과 10° 안으로 가까웠어요.' },
  ], easy: { note: '직각(90°)과 직각의 반(45°)을 기준으로 삼아 어림해요.', items: [
    { type: 'figure', prompt: '각도기로 재어 각의 크기를 쓰세요.', tool: 'protractor', wide: true, options: { base: 'right' }, figures: [{ state: { angle: 60 }, caption: BLANK + '°' }], answer: '60°' },
    { type: 'table', prompt: '어림한 값과 잰 값의 차를 쓰세요.', columns: ['어림한 값', '잰 값', '차'], cells: [['60°', '65°', '']], answer: '5°' },
    { type: 'choice', prompt: '45°에 가장 가까운 각에 ○ 하세요.', options: ['40°', '90°'], answer: '40°' },
  ] } },
  diff: { easy: '각도 숫자와 직각 표시가 보여 어림을 돕고, 어림과 잰 값이 얼마나 가까운지 바로 말해 줘요.', base: '숫자 없이 어림하고 각도기로 재어 견줘요.', challenge: '눈금이 1°씩 움직이고, 고정 띠가 왼쪽에 놓인 각도 재어 봐요.' },
  notes: '자주 보이는 어려움: ① 어림이 틀릴까 봐 어림하지 않고 바로 잰다 → 직각과 직각의 반을 기준으로 가늠하면 된다고 알려 준다. ② 어림과 잰 값의 차를 구할 때 더한다 → 큰 수에서 작은 수를 뺀다고 수직선으로 짚는다. ③ 삼각자의 30°와 60°를 헷갈린다 → 가장 작은 각끼리 겹쳐 견준다. 삼각형의 세 각의 합은 5차시에서 이어서 알아본다.',
}));
// ───────────────────────────── 5차시 (core · 삼각형 세 각의 합) ─────────────────────────────
L.push(lesson(5, {
  std: S25,
  title: '삼각형의 세 각을 재어 더해 보기',
  objective: '여러 삼각형의 세 각을 각도기로 재어 더해 보고, 삼각형의 세 각의 크기의 합이 180°임을 말할 수 있다.',
  desc: 'three different paper triangles on a desk with colored corner marks and a protractor lying beside a sheet of sums',
  text: '삼각형 세 각의 합은?',
  layers: [{ motif: 'house', x: 108, y: 214, s: 1.0 }, { motif: 'tree', x: 392, y: 216 }, { motif: 'flower', x: 250, y: 238 }, { motif: 'star', x: 334, y: 80, s: 0.6 }],
  intro: ['"크기가 다른 삼각형 세 개가 있어요. 세 각을 모두 더하면 같을까요, 다를까요?" 예상을 손들기로 모은 뒤, 같은 삼각형의 세 각을 각도기로 재어 더해 보자고 한다. 큰 삼각형이 세 각의 합도 더 크다고 생각하는 학생이 있다 — 각의 크기는 변의 길이와 관계없다는 앞 차시를 떠올리게 한다.', '크기가 다른 두 삼각형이 있어요. 세 각의 크기를 모두 더하면 어떻게 될지 예상해 보세요.'],
  acts: [
    { id: 'a1', title: '활동 1. 삼각형의 세 각을 각각 재기', minutes: 9, tool: 'protractor',
      task: '삼각형 가의 세 각과 삼각형 나의 가장 큰 각을 각도기로 재어 보아요.',
      teacher: '"삼각형 가의 세 각을 하나씩 재어 볼게요. 잰 값을 공책에 적어 두세요." 각마다 꼭짓점에 각도기의 중심을 맞추게 한다. 한 각을 재고 같은 방법으로 다른 각을 재지 않고 눈으로 어림해 적는 학생에게는 세 각 모두 각도기로 재어 적게 한다.',
      levels: PLV('right'),
      items: [
        ms('삼각형 가의 첫째 각을 재어 보세요.', 50, 0.18),
        ms('삼각형 가의 둘째 각을 재어 보세요.', 60, 0.18),
        ms('삼각형 가의 셋째 각을 재어 보세요.', 70, 0.18),
        ms('삼각형 나에서 가장 큰 각을 재어 보세요. 고정 띠가 왼쪽에 있어요.', 120, 0.24, { base: 'left' }),
      ] },
    { id: 'a2', title: '활동 2. 세 각의 합이 180°인 삼각형 가려내기', minutes: 9, tool: 'mindmap',
      task: '삼각형의 세 각을 잰 값이에요. 세 각의 합이 180°인 것과 아닌 것으로 나누어요.',
      teacher: '"50°, 60°, 70°를 모두 더하면 얼마일까요?" 두 각씩 먼저 더하고 나머지를 더하게 한다. 합이 170°나 190°인 카드는 각도기로 잘못 쟀거나 읽을 때 눈금을 잘못 읽었을 가능성이 있다고 말한다. 덧셈이 어려운 학생에게는 10° 단위로 묶어서 더하도록 한다.',
      levels: ML('세 각의 합'),
      items: [
        srt('삼각형의 세 각을 잰 값을 모두 더해서 나누어 보세요.', '세 각의 합', { '합이 180°예요': ['50°, 60°, 70°', '30°, 30°, 120°'], '합이 180°가 아니에요': ['50°, 50°, 70°', '60°, 60°, 70°'] }, 0.22),
        srt('다른 삼각형의 세 각도 더해서 나누어 보세요.', '세 각의 합', { '합이 180°예요': ['90°, 45°, 45°', '100°, 40°, 40°'], '합이 180°가 아니에요': ['100°, 40°, 30°', '80°, 70°, 40°'] }, 0.26),
        pk('세 각의 합이 180°인 삼각형만 골라 보세요.', '세 각의 합', ['20°, 60°, 100°', '45°, 55°, 70°', '90°, 60°, 30°', '35°, 35°, 120°'], ['20°, 60°, 100°', '90°, 60°, 30°'], 0.28, '합이 180°'),
      ] },
    { id: 'a3', title: '활동 3. 세 각의 합과 두 각의 합 구하기', minutes: 8, tool: 'story',
      task: '친구들의 말에서 빈칸에 알맞은 수를 찾아 넣어요.',
      teacher: '"50° + 60°는 얼마일까요? 거기에 70°를 더하면요?" 두 단계로 나누어 더하게 한다. 직각삼각형에서 직각이 아닌 두 각의 합을 구하는데 180°라고 답하는 학생에게는 세 각 가운데 직각 90°를 빼야 한다고 짚는다.',
      levels: LVF,
      items: [
        fl('빈칸에 알맞은 수를 넣어 보세요.', [['민지', 'sun', '50° + 60° + 70° = ___°예요.', 180], ['준호', 'tree', '50° + 60° = ___°예요.', 110]], [160, 120], 0.2),
        fl('세 각이 30°, 30°, 120°인 삼각형을 보고 빈칸에 넣어 보세요.', [['민지', 'flower', '두 각 30°, 30°의 합은 ___°예요.', 60], ['준호', 'leaf', '180° − 60° = ___°예요. 남은 각이에요.', 120]], [90, 150], 0.24),
        fl('직각삼각형을 보고 빈칸에 알맞은 수를 넣어 보세요.', [['민지', 'star', '직각삼각형에서 직각이 아닌 두 각의 합은 ___°예요.', 90], ['준호', 'cloud', '그 두 각이 같으면 한 각은 ___°예요.', 45]], [180, 30], 0.26),
      ] },
  ],
  wrap: ['"크기가 달라도 삼각형의 세 각의 합은 어떻게 되었나요?" 짝에게 세 각을 더한 과정을 말하게 한다. 출구 1번을 틀린 학생은 각을 잴 때 눈금을 읽는 줄이 맞았는지 다음 시간 처음에 살핀다.', [
    { type: 'choice', prompt: '삼각형의 세 각의 크기를 모두 더하면 얼마인가요?', options: ['90°', '180°', '360°'], answer: 1, difficulty: 0.15, explain: '어떤 삼각형이든 세 각의 합은 180°예요.' },
    { type: 'choice', prompt: '크기가 아주 큰 삼각형과 작은 삼각형의 세 각의 합은 어떻게 다른가요?', options: ['큰 삼각형이 더 커요', '작은 삼각형이 더 커요', '같아요'], answer: 2, difficulty: 0.2, explain: '세 각의 합은 삼각형의 크기와 관계없이 180°로 같아요.' },
    { type: 'tool', tool: 'protractor', options: { measure: true, base: 'right', step: 5 }, state: { angle: 40 }, prompt: '삼각형의 한 각을 재어 보세요. 눈금을 읽고 위의 단추로 각도를 정하세요.', target: { angle: 40 }, difficulty: 0.2 },
  ]],
  ws: { title: '삼각형 세 각의 합', items: [
    { type: 'table', prompt: '삼각형의 세 각을 잰 값이에요. 세 각의 합을 구해 쓰세요.', columns: ['삼각형', '세 각', '합'], cells: [['가', '50°, 60°, 70°', ''], ['나', '30°, 30°, 120°', ''], ['다', '90°, 20°, 70°', '']], answer: '180°, 180°, 180°' },
    { type: 'figure', prompt: '각도기로 삼각형의 한 각을 재어 쓰세요.', tool: 'protractor', wide: true, options: { base: 'right' }, figures: [{ state: { angle: 55 }, caption: BLANK + '°' }, { state: { angle: 95 }, caption: BLANK + '°' }], answer: '55°, 95°' },
    { type: 'choice', prompt: '세 각의 합이 180°인 것에 ○ 하세요.', options: ['40°, 60°, 70°', '40°, 60°, 80°', '40°, 70°, 80°'], answer: '40°, 60°, 80°' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '삼각형의 세 각의 크기의 합은 ______°예요.', answer: '180' },
    { type: 'short', prompt: '삼각형이 커지면 세 각의 합도 커지는지 까닭과 함께 써 보세요.', answer: '커지지 않아요. 크기와 관계없이 세 각의 합은 180°예요.' },
  ], easy: { note: '삼각형의 세 각을 더하면 늘 180°가 돼요. 두 각씩 먼저 더해 보세요.', items: [
    { type: 'table', prompt: '세 각의 합을 구해 쓰세요.', columns: ['삼각형', '세 각', '합'], cells: [['가', '60°, 60°, 60°', ''], ['나', '90°, 45°, 45°', '']], answer: '180°, 180°' },
    { type: 'choice', prompt: '삼각형 세 각의 합에 ○ 하세요.', options: ['180°', '360°'], answer: '180°' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '50° + 60° + 70° = ______°', answer: '180' },
  ] } },
  diff: { easy: '각도 숫자가 보이는 삼각형의 각을 재고, 합이 180°인 카드에 초록 테두리가 생겨요.', base: '세 각을 스스로 재고 합을 구해서 나누어요.', challenge: '눈금을 1°씩 읽고, 합이 비슷한 헷갈리는 카드까지 가려내요.' },
  notes: '자주 보이는 어려움: ① 큰 삼각형이 세 각의 합도 크다고 생각한다 → 크기가 다른 삼각형을 모두 재어 합이 같은 것을 확인한다. ② 세 각을 더하다 계산이 틀려 175°나 185°가 되면 이것을 새 발견으로 여긴다 → 각도기의 눈금을 읽는 오차와 계산 실수를 먼저 점검한다. ③ 직각삼각형에서 직각이 아닌 두 각의 합을 180°라고 한다 → 직각 90°를 빼야 한다고 짚는다. 합이 180°인 까닭은 6차시에서 알아본다.',
}));
// ───────────────────────────── 6차시 (core · 세 각을 모아 붙이고 사각형은 삼각형 둘로) ─────────────────────────────
L.push(lesson(6, {
  std: S25,
  title: '세 각을 모아 붙이고 사각형을 삼각형 둘로 나누기',
  objective: '삼각형의 세 각을 한 점에 모아 붙이면 일직선이 됨을 알고, 사각형을 삼각형 두 개로 나누어 네 각의 합이 360°임을 설명할 수 있다.',
  desc: 'paper triangle corners cut and arranged around one point to form a straight line, beside a paper square cut by a diagonal',
  text: '세 각을 모으면 일직선',
  layers: [{ motif: 'house', x: 108, y: 214, s: 1.0 }, { motif: 'tree', x: 392, y: 216 }, { motif: 'flower', x: 250, y: 238 }, { motif: 'bird', x: 338, y: 84 }],
  intro: ['"종이 삼각형의 세 각을 오려서 한 점에 모아 붙이면 어떤 모양이 될까요?" 시연 단추로 띠가 벌어져 일직선이 되는 모습을 보이며 이어 붙인 세 각의 합과 비교하게 한다. 각을 모아 붙일 때 꼭짓점을 맞추지 않고 틈이 생겨도 결론을 내리는 학생이 있다 — 꼭짓점을 한 점에 맞추고 틈 없이 붙여야 일직선이 되는지 알 수 있다고 짚는다.', '종이 삼각형의 세 각을 오려 한 점에 모아 붙이면 어떤 모양이 될까요?'],
  demo: { tool: 'protractor', options: { step: 15 }, sequence: [{ angle: 60 }, { angle: 120 }, { angle: 180 }] },
  acts: [
    { id: 'a1', title: '활동 1. 각을 이어 붙인 만큼 띠 벌리기', minutes: 9, tool: 'protractor',
      task: '삼각형의 각을 이어 붙인 만큼 종이 띠를 벌려 보아요. 두 각, 세 각을 차례로 붙여요.',
      teacher: '"두 각 50°와 70°를 이어 붙이면 몇 도만큼 벌어질까요?" 두 각을 더한 크기만큼 띠가 벌어진다고 말하게 한다. 세 각을 이어 붙인 크기를 360°라고 짐작하는 학생에게는 일직선이 되도록 벌린 각이 몇 도였는지 앞 차시 활동을 떠올리게 한다.',
      levels: PLV('right'),
      items: [
        mk('삼각형의 두 각 50°와 70°를 이어 붙인 만큼 띠를 벌려 보세요.', 120, 0.2),
        mk('삼각형의 두 각 35°와 55°를 이어 붙인 만큼 띠를 벌려 보세요.', 90, 0.2),
        mk('삼각형의 두 각 45°와 90°를 이어 붙인 만큼 띠를 벌려 보세요.', 135, 0.22),
        mk('세 각 40°, 60°, 80°를 한 점에 모아 이어 붙인 만큼 띠를 벌려 보세요.', 180, 0.26, { predict: { q: '세 각을 한 점에 모아 이어 붙이면 어떤 모양이 될까요?', options: ['직각', '일직선', '한 바퀴'], answer: 1 }, conclude: '세 각의 합이 180°라서 이어 붙이면 곧은 선이 돼요.' }),
      ] },
    { id: 'a2', title: '활동 2. 알아낸 과정을 차례로 놓기', minutes: 9, tool: 'mindmap',
      task: '각을 모아 붙이거나 사각형을 나누어 알아낸 과정을 알맞은 순서로 놓아요.',
      teacher: '"종이 삼각형으로 세 각의 합을 알아내려면 가장 먼저 무엇을 해야 할까요?" 각에 표시를 해 둔 뒤 오리는 순서를 말하게 한다. 사각형에서 두 삼각형으로 나누지 않고 바로 360°라고 말하는 학생에게는 삼각형 두 개가 되는 선을 먼저 그려 보게 한다.',
      levels: ML('알아낸 과정'),
      items: [
        ordWords('종이 삼각형의 세 각을 오려 붙이는 순서대로 놓아 보세요.', '오려 붙이기', ['세 각에 표시를 해요', '세 각을 오려 내요', '꼭짓점을 한 점에 모아요', '일직선이 되는지 봐요'], 0.22),
        ordWords('사각형의 네 각의 합을 알아내는 순서대로 놓아 보세요.', '사각형 나누기', ['사각형을 그려요', '한 꼭짓점에서 맞은편으로 선을 그어요', '삼각형 두 개가 생겨요', '네 각의 합을 구해요'], 0.26),
        ordWords('삼각형으로 알아낸 것이 이어지는 순서대로 놓아 보세요.', '추론', ['삼각형 세 각의 합은 180°예요', '사각형은 삼각형 두 개로 나뉘어요', '180° + 180° = 360°', '사각형 네 각의 합은 360°예요'], 0.3),
      ] },
    { id: 'a3', title: '활동 3. 도형과 각의 합 이어 보기', minutes: 8, tool: 'mindmap',
      task: '도형의 이름과 각의 합을 알맞게 이어요.',
      teacher: '"사각형의 네 각의 합은 삼각형 세 각의 합의 몇 배일까요?" 사각형이 삼각형 두 개로 나뉘므로 2배라고 말하게 한다. 직사각형의 한 각이 90°라서 네 각의 합을 90°라고 답하는 학생에게는 각이 네 개라는 것에 주목해 네 번 더하게 한다.',
      levels: ML('각의 합'),
      items: [
        mt('도형과 각의 합을 이어 보세요.', '각의 합', [['삼각형의 세 각의 합', '180°'], ['사각형의 네 각의 합', '360°'], ['직각삼각형에서 직각이 아닌 두 각의 합', '90°']], ['180°', '360°', '90°', '270°'], 0.2),
        mt('이번에는 다른 도형과 각의 합을 이어 보세요.', '각의 합', [['직사각형의 네 각의 합', '360°'], ['정삼각형의 한 각', '60°'], ['직각삼각형의 직각', '90°']], ['360°', '60°', '90°', '180°'], 0.24),
        mt('삼각형을 모아 만든 도형에서 각의 합을 이어 보세요.', '각의 합', [['삼각형 세 각의 합', '180°'], ['삼각형 두 개를 붙여 만든 사각형의 네 각의 합', '360°'], ['직각의 반 둘을 이은 각', '90°']], ['180°', '360°', '90°', '45°'], 0.28),
      ] },
  ],
  wrap: ['"사각형의 네 각의 합이 360°인 까닭을 삼각형으로 어떻게 설명할 수 있나요?" 짝에게 사각형에 선을 그어 보이며 말하게 한다. 출구 2번을 틀린 학생은 삼각형이 몇 개로 나뉘는지 다음 시간 처음에 다시 세어 보게 한다.', [
    { type: 'choice', prompt: '삼각형의 세 각을 오려 한 점에 모아 붙이면 어떤 모양이 되나요?', options: ['직각', '일직선', '한 바퀴'], answer: 1, difficulty: 0.18, explain: '세 각의 합이 180°라서 이어 붙이면 곧은 선이 돼요.' },
    { type: 'choice', prompt: '사각형을 삼각형 몇 개로 나눌 수 있나요?', options: ['1개', '2개', '3개'], answer: 1, difficulty: 0.2, explain: '한 꼭짓점에서 맞은편으로 선을 그으면 삼각형 2개가 생겨요.' },
    { type: 'tool', tool: 'protractor', options: { base: 'right', start: 15, step: 15 }, prompt: '삼각형의 두 각 30°와 60°를 이어 붙인 만큼 띠를 벌려 보세요.', target: { angle: 90 }, difficulty: 0.22 },
  ]],
  ws: { title: '각을 모으고 나누기', items: [
    { type: 'table', prompt: '삼각형의 세 각을 모아 붙인 크기와 사각형의 네 각의 합을 쓰세요.', columns: ['도형', '삼각형', '사각형'], cells: [['각의 합', '', '']], answer: '180°, 360°' },
    { type: 'choice', prompt: '사각형의 네 각의 합을 구하는 방법에 ○ 하세요.', options: ['삼각형 두 개로 나누어 각의 합을 두 번 더해요', '네 각 중 하나만 재어요'], answer: '삼각형 두 개로 나누어 각의 합을 두 번 더해요' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '180° + 180° = ______°이므로 사각형의 네 각의 합은 이 값이에요.', answer: '360' },
    { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '삼각형의 세 각을 한 점에 모아 붙이면 ______이 돼요.', answer: '일직선' },
    { type: 'draw', prompt: '사각형을 하나 그리고 한 꼭짓점에서 선을 그어 삼각형 두 개로 나누어 보세요.' },
  ], easy: { note: '삼각형 한 개의 세 각의 합은 180°예요. 사각형은 삼각형 두 개로 나뉘어요.', items: [
    { type: 'table', prompt: '빈칸에 각의 합을 쓰세요.', columns: ['도형', '삼각형', '사각형'], cells: [['각의 합', '180°', '']], answer: '360°' },
    { type: 'choice', prompt: '삼각형의 세 각을 모아 붙인 모양에 ○ 하세요.', options: ['일직선', '직각'], answer: '일직선' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '180° + 180° = ______°', answer: '360' },
  ] } },
  diff: { easy: '각을 붙인 만큼 띠가 벌어질 때 지금의 각도 숫자가 보여요.', base: '숫자 없이 각을 더해 띠를 벌려요.', challenge: '카드 순서가 섞이고 이유를 이어 가는 순서를 스스로 정해요.' },
  notes: '자주 보이는 어려움: ① 각을 모아 붙일 때 꼭짓점을 맞추지 않고 틈이 생겨도 그대로 결론을 내린다 → 한 점에 모아 틈이 없게 붙이도록 한다. ② 세 각을 붙인 모양을 직각이라고 한다 → 두 변이 한 줄이 되는 일직선이라고 짚는다. ③ 사각형이 삼각형 몇 개로 나뉘는지 헷갈린다 → 선을 하나만 그으면 삼각형 두 개가 된다고 직접 그려 본다. 구한 합을 이용해 나머지 각을 구하는 활동은 7차시에서 이어서 한다.',
}));
// ───────────────────────────── 7차시 (core · 나머지 각 구하기) ─────────────────────────────
L.push(lesson(7, {
  std: S25,
  title: '두 각을 알 때 나머지 한 각 구해 확인하기',
  objective: '삼각형의 두 각을 알 때 나머지 한 각을, 사각형의 세 각을 알 때 나머지 한 각을 구하고, 각도기로 재어 확인할 수 있다.',
  desc: 'a paper triangle with two corners labeled and one covered by a question flag, next to a protractor checking the hidden corner',
  text: '남은 한 각은 몇 도?',
  layers: [{ motif: 'house', x: 108, y: 214, s: 1.0 }, { motif: 'tree', x: 392, y: 216 }, { motif: 'flower', x: 250, y: 238 }, { motif: 'cloud', x: 334, y: 80, s: 0.8 }],
  intro: ['"삼각형의 두 각이 55°와 70°예요. 나머지 한 각은 몇 도일까요?" 삼각형 세 각의 합이 180°임을 떠올리게 하고 두 각을 더한 값을 180°에서 빼는 순서를 말하게 한다. 나머지 각을 구할 때 180°가 아니라 360°에서 빼는 학생이 있다 — 삼각형은 180°, 사각형은 360°라고 도형마다 합을 먼저 쓰게 한다.', '삼각형의 세 각의 합과 사각형의 네 각의 합은 각각 몇 도였나요? 두 각을 알면 나머지 한 각을 어떻게 구할까요?'],
  acts: [
    { id: 'a1', title: '활동 1. 나머지 한 각 계산하기', minutes: 9, tool: 'story',
      task: '삼각형이나 사각형의 알고 있는 각을 이용해 나머지 한 각을 구해요.',
      teacher: '"두 각이 55°, 70°이면 먼저 무엇을 구할까요?" 두 각의 합을 구한 뒤 180°에서 빼게 한다. 삼각형의 두 각이 90°, 40°인데 나머지 각을 130°라고 답하는 학생에게는 두 각을 더한 값이 나머지 각이 아니라는 것을 그림으로 짚어 준다.',
      levels: LVF,
      items: [
        fl('삼각형의 나머지 한 각을 구해 빈칸에 넣어 보세요.', [['민지', 'sun', '삼각형의 두 각이 55°, 70°예요. 나머지 한 각은 ___°예요.', 55], ['준호', 'tree', '삼각형의 두 각이 90°, 40°예요. 나머지 한 각은 ___°예요.', 50]], [125, 305], 0.22),
        fl('두 각이 같은 삼각형의 나머지 한 각을 구해 보세요.', [['민지', 'flower', '두 각이 80°, 80°인 삼각형의 나머지 한 각은 ___°예요.', 20], ['준호', 'leaf', '두 각이 60°, 60°인 삼각형의 나머지 한 각은 ___°예요.', 60]], [160, 100], 0.26),
        fl('사각형의 나머지 한 각을 구해 빈칸에 넣어 보세요.', [['민지', 'star', '사각형의 세 각이 90°, 100°, 70°예요. 나머지 한 각은 ___°예요.', 100], ['준호', 'cloud', '사각형의 세 각이 85°, 95°, 105°예요. 나머지 한 각은 ___°예요.', 75]], [80, 285], 0.3),
      ] },
    { id: 'a2', title: '활동 2. 구한 각을 각도기로 확인하기', minutes: 9, tool: 'protractor',
      task: '계산으로 구한 나머지 각을 각도기로 재어 맞는지 확인해요.',
      teacher: '"두 각이 40°, 75°인 삼각형이에요. 나머지 각을 구해서 예상한 뒤 각도기로 재어 확인해 봐요." 계산한 값과 잰 값이 같은지 견주게 한다. 두 값이 5°쯤 다르면 눈금을 잘못 읽었거나 계산이 틀렸는지 먼저 점검하게 한다.',
      levels: PLV('right'),
      items: [
        ms('두 각이 40°, 75°인 삼각형이에요. 구한 나머지 각을 각도기로 재어 확인해 보세요.', 65, 0.24, null, { predict: { q: '나머지 한 각은 몇 도일까요? 계산해서 예상해요.', options: ['55°', '65°', '75°'], answer: 1 }, conclude: '180° − 40° − 75° = 65°이고 각도기로 재어도 65°예요.' }),
        ms('두 각이 30°, 50°인 삼각형이에요. 나머지 각을 재어 확인해 보세요.', 100, 0.26, { base: 'left' }),
        ms('두 각이 90°, 45°인 삼각형이에요. 나머지 각을 재어 확인해 보세요.', 45, 0.22),
      ] },
    { id: 'a3', title: '활동 3. 계산식과 구한 각 이어 보기', minutes: 8, tool: 'mindmap',
      task: '나머지 각을 구하는 식과 구한 각의 크기를 알맞게 이어요.',
      teacher: '"180° − 50° − 60°는 얼마일까요?" 삼각형의 세 각 중 두 각을 알 때 쓰는 식임을 말하게 한다. 360°에서 세 각을 빼는 식은 사각형의 식이라고 구별하게 한다. 사각형의 식에 180°를 쓰는 학생에게는 도형의 각의 개수를 먼저 세어 보게 한다.',
      levels: ML('나머지 각 구하기'),
      items: [
        mt('나머지 각을 구하는 식과 구한 각을 이어 보세요.', '나머지 각 구하기', [['180° − 50° − 60°', '70°'], ['180° − 90° − 25°', '65°'], ['360° − 90° − 90° − 80°', '100°']], ['70°', '65°', '100°', '80°'], 0.24),
        mt('괄호가 있는 식과 구한 각을 이어 보세요.', '나머지 각 구하기', [['180° − (45° + 45°)', '90°'], ['180° − (30° + 100°)', '50°'], ['360° − (110° + 70° + 60°)', '120°']], ['90°', '50°', '120°', '130°'], 0.28),
        pk('네 각의 합이 360°인 사각형의 네 각만 골라 보세요.', '나머지 각 구하기', ['90°, 90°, 90°, 90°', '80°, 100°, 90°, 90°', '100°, 100°, 100°, 50°', '70°, 110°, 80°, 100°'], ['90°, 90°, 90°, 90°', '80°, 100°, 90°, 90°', '70°, 110°, 80°, 100°'], 0.3, '합이 360°'),
      ] },
  ],
  wrap: ['"삼각형의 두 각을 알 때 나머지 한 각은 어떻게 구하나요?" 짝에게 180°에서 두 각의 합을 빼는 순서를 말하게 한다. 출구 2번을 틀린 학생은 도형마다 각의 합이 다르다는 것을 다시 짚는다.', [
    { type: 'choice', prompt: '삼각형의 두 각이 60°, 70°예요. 나머지 한 각은 몇 도인가요?', options: ['50°', '60°', '130°'], answer: 0, difficulty: 0.2, explain: '180° − 60° − 70° = 50°예요.' },
    { type: 'choice', prompt: '사각형의 세 각이 100°, 90°, 60°예요. 나머지 한 각은 몇 도인가요?', options: ['110°', '130°', '250°'], answer: 0, difficulty: 0.26, explain: '네 각의 합 360°에서 세 각의 합 250°를 빼면 110°예요.' },
    { type: 'tool', tool: 'protractor', options: { measure: true, base: 'right', step: 5 }, state: { angle: 85 }, prompt: '두 각이 35°, 60°인 삼각형이에요. 나머지 각을 구해 각도기로 재어 확인해 보세요.', target: { angle: 85 }, difficulty: 0.26 },
  ]],
  ws: { title: '나머지 각 구하기', items: [
    { type: 'table', prompt: '삼각형의 두 각을 보고 나머지 한 각을 구해 쓰세요.', columns: ['두 각', '70°, 50°', '90°, 30°', '45°, 45°'], cells: [['나머지 한 각', '', '', '']], answer: '60°, 60°, 90°' },
    { type: 'blank', prompt: '사각형의 세 각을 보고 나머지 한 각을 구해 쓰세요.', text: '세 각이 80°, 100°, 120°이면 나머지 한 각은 ______°예요.', answer: '60' },
    { type: 'choice', prompt: '삼각형의 두 각이 50°, 90°일 때 나머지 한 각에 ○ 하세요.', options: ['30°', '40°', '140°'], answer: '40°' },
    { type: 'figure', prompt: '각도기로 재어 나머지 한 각의 크기를 쓰세요.', tool: 'protractor', wide: true, options: { base: 'right' }, figures: [{ state: { angle: 65 }, caption: BLANK + '°' }], answer: '65°' },
    { type: 'short', prompt: '삼각형의 두 각을 알 때 나머지 한 각을 구하는 방법을 순서대로 써 보세요.', answer: '두 각의 합을 구하고 180°에서 그 합을 빼요.' },
  ], easy: { note: '삼각형의 세 각의 합 180°에서 알고 있는 두 각의 합을 빼요.', items: [
    { type: 'table', prompt: '삼각형의 나머지 한 각을 구해 쓰세요.', columns: ['두 각', '60°, 60°', '90°, 40°'], cells: [['나머지 한 각', '', '']], answer: '60°, 50°' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '180° − 50° − 70° = ______°', answer: '60' },
    { type: 'choice', prompt: '삼각형의 세 각의 합에 ○ 하세요.', options: ['180°', '360°'], answer: '180°' },
  ] } },
  diff: { easy: '식의 빈칸에 알맞은 수를 골라 넣고, 각도기는 눈금이 반짝여 읽을 줄을 알려 줘요.', base: '식을 스스로 세워 구하고 각도기로 확인해요.', challenge: '사각형까지 넓혀 구하고, 괄호가 있는 식과 합이 비슷한 카드를 가려내요.' },
  notes: '자주 보이는 어려움: ① 삼각형의 나머지 각을 360°에서 뺀다 → 도형마다 각의 합을 먼저 쓰게 한다. ② 두 각을 더한 값을 그대로 나머지 각이라고 한다 → 두 각의 합을 180°에서 빼야 한다고 그림으로 짚는다. ③ 계산한 값과 잰 값이 조금 다르면 계산을 고치지 않고 잰 값을 믿는다 → 눈금을 읽을 때 반대쪽 줄을 읽지 않았는지, 계산이 맞는지 둘 다 점검한다. 직각을 기준으로 예각과 둔각을 가리는 활동은 8차시에서 이어서 한다.',
}));
// ───────────────────────────── 8차시 (core · 직각과 견주어 예각·둔각) ─────────────────────────────
L.push(lesson(8, {
  std: S02,
  title: '삼각자를 대 보고 직각보다 작은 각과 큰 각 가려내기',
  objective: '삼각자의 직각을 대어 각을 살펴, 직각보다 작은 각(예각)과 직각보다 큰 각(둔각)을 가려내고 까닭을 말할 수 있다.',
  desc: 'a child holding a paper set square against three differently opened paper corners on a classroom desk',
  text: '직각과 견주어 보아요',
  layers: [{ motif: 'house', x: 108, y: 214, s: 1.0 }, { motif: 'tree', x: 392, y: 216 }, { motif: 'flower', x: 250, y: 238 }, { motif: 'star', x: 334, y: 80, s: 0.6 }],
  intro: ['"교실 모서리에 삼각자의 직각을 대 보면 꼭 맞을까요? 어떤 각은 삼각자보다 좁고 어떤 각은 더 넓어요." 삼각자의 직각을 꼭짓점에 대고 한 변을 맞춘 뒤 다른 변과 견주는 방법을 보여 준다. 직각보다 조금 작은 각을 눈대중으로만 보고 직각이라고 하는 학생이 있다 — 반드시 삼각자를 대어 꼭 맞는지 확인하게 한다.', '교실에서 직각 모서리를 하나 찾고, 그보다 좁은 각과 넓은 각을 하나씩 찾아 짝에게 말해 봐요.'],
  acts: [
    { id: 'a1', title: '활동 1. 삼각자를 대고 각 가려내기', minutes: 10, tool: 'rightangle',
      task: '삼각자 대 보기를 눌러 직각과 견주어요. 직각보다 작은지, 직각인지, 큰지 골라요.',
      teacher: '"삼각자의 직각을 꼭짓점에 대고 한 변을 초록 띠에 맞춰 볼까요? 복숭아색 띠는 삼각자의 다른 변보다 안쪽일까요, 바깥쪽일까요?" 삼각자의 변과 꼭 맞으면 직각, 안쪽이면 직각보다 작은 각, 바깥쪽이면 직각보다 큰 각이라고 말하게 한다. 비스듬히 놓인 직각을 직각이 아니라고 하는 학생에게는 놓인 방향은 각의 크기와 관계없다고 짚는다.',
      levels: RAL('judge'),
      items: [
        jd('삼각자를 대 보고, 이 각이 직각과 어떻게 다른지 골라 보세요.', 40, 0, 'less', 0.15),
        jd('삼각자를 대 보고 골라 보세요. 각이 비스듬히 놓여 있어요.', 90, 35, 'right', 0.24),
        jd('삼각자를 대 보고 골라 보세요. 이 각은 직각보다 어떤가요?', 130, 15, 'more', 0.2),
        jd('삼각자를 대 보고 골라 보세요. 직각과 비슷해 보이는 각이에요.', 100, 0, 'more', 0.26),
      ] },
    { id: 'a2', title: '활동 2. 시계 바늘이 이룬 각 나누기', minutes: 8, tool: 'mindmap',
      task: '시계의 긴바늘이 12를 가리킬 때 짧은바늘과 이루는 각을 직각과 견주어 예각, 직각, 둔각으로 나누어요.',
      teacher: '"3시일 때 두 바늘은 어떤 각을 이룰까요? 1시와 5시는 3시와 견주어 어떨까요?" 3시를 직각의 기준으로 삼아 그보다 이른 시각은 좁고 늦은 시각은 넓다고 말하게 한다. 6시를 둔각이라고 하는 학생에게는 두 바늘이 한 줄이 되어 각이 아니라 일직선이라고 짚는다.',
      levels: ML('시계의 각'),
      items: [
        srt('긴바늘이 12를 가리킬 때 짧은바늘과 이룬 각을 예각, 직각, 둔각으로 나누어 보세요.', '시계의 각', { '예각': ['1시', '2시'], '직각': ['3시'], '둔각': ['4시', '5시'] }, 0.2),
        pk('정각 시계에서 두 바늘이 이룬 각이 둔각인 시각만 골라 보세요.', '시계의 각', ['2시', '4시', '5시', '3시', '1시'], ['4시', '5시'], 0.22, '둔각인 시각'),
        srt('이번에는 10시부터 7시까지 두 바늘이 이룬 각을 나누어 보세요.', '시계의 각', { '예각': ['10시', '11시'], '직각': ['9시'], '둔각': ['7시', '8시'] }, 0.26),
      ] },
    { id: 'a3', title: '활동 3. 각의 이름과 설명 이어 보기', minutes: 8, tool: 'mindmap',
      task: '예각, 직각, 둔각의 이름과 알맞은 설명을 이어요.',
      teacher: '"예각은 직각보다 작은 각이에요. 둔각은 직각보다 크고 어디까지일까요?" 둔각은 180°보다 작다는 것을 일직선과 견주어 말하게 한다. 180°인 각을 둔각 카드에 넣는 학생에게는 두 변이 한 줄이 되면 각이 아니라고 보여 준다.',
      levels: ML('각의 이름'),
      items: [
        mt('각의 이름과 알맞은 설명을 이어 보세요.', '각의 이름', [['예각', '직각보다 작은 각'], ['직각', '90°인 각'], ['둔각', '직각보다 크고 180°보다 작은 각']], ['직각보다 작은 각', '90°인 각', '직각보다 크고 180°보다 작은 각', '180°인 각'], 0.2),
        mt('각의 이름과 알맞은 각도를 이어 보세요.', '각의 이름', [['예각', '45°'], ['직각', '90°'], ['둔각', '135°']], ['45°', '90°', '135°', '180°'], 0.2),
        mt('생활 속 물건이나 모양과 각의 이름을 이어 보세요.', '각의 이름', [['예각', '삼각자의 뾰족한 모서리'], ['직각', '공책의 모서리'], ['둔각', '시계가 4시일 때의 두 바늘']], ['삼각자의 뾰족한 모서리', '공책의 모서리', '시계가 4시일 때의 두 바늘', '시계가 6시일 때의 두 바늘'], 0.26),
      ] },
  ],
  wrap: ['"각이 예각인지 둔각인지는 무엇과 견주면 알 수 있을까요?" 짝에게 삼각자의 직각을 대는 방법으로 말하게 한다. 출구 2번을 틀린 학생은 직각보다 작은 각과 큰 각을 다시 삼각자로 대어 보게 한다.', [
    { type: 'choice', prompt: '2시일 때 시계의 두 바늘이 이룬 각은 어떤 각인가요?', options: ['예각', '직각', '둔각'], answer: 0, difficulty: 0.18, explain: '2시는 직각인 3시보다 좁아서 직각보다 작은 예각이에요.' },
    { type: 'choice', prompt: '둔각은 직각보다 어떤 각인가요?', options: ['작아요', '같아요', '크지만 180°보다는 작아요'], answer: 2, difficulty: 0.22, explain: '둔각은 직각보다 크고 180°보다 작은 각이에요.' },
    { type: 'tool', tool: 'rightangle', options: { mode: 'judge', turn: 25 }, state: { angle: 120 }, prompt: '삼각자를 대 보고 이 각이 직각보다 작은지 큰지 골라 보세요.', target: { judge: 'more' }, difficulty: 0.22 },
  ]],
  ws: { title: '직각과 견주어 각 가려내기', items: [
    { type: 'figure', prompt: '각도기를 보고 각이 예각, 직각, 둔각 중 무엇인지 쓰세요.', tool: 'protractor', wide: true, options: { base: 'right' }, figures: [{ state: { angle: 35 }, caption: BLANK + '각' }, { state: { angle: 90 }, caption: BLANK + '각' }, { state: { angle: 140 }, caption: BLANK + '각' }], answer: '예각, 직각, 둔각' },
    { type: 'choice', prompt: '직각보다 작은 각에 ○ 하세요.', options: ['75°', '90°', '115°'], answer: '75°' },
    { type: 'table', prompt: '각의 이름을 쓰세요.', columns: ['각의 크기', '60°', '90°', '120°'], cells: [['각의 이름', '', '', '']], answer: '예각, 직각, 둔각' },
    { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '직각보다 작은 각은 ______, 직각보다 크고 180°보다 작은 각은 ______이에요.', answer: '예각, 둔각' },
    { type: 'short', prompt: '직각과 비슷해 보이는 각이 직각인지 아닌지 어떻게 알 수 있는지 써 보세요.', answer: '삼각자의 직각을 대어 꼭 맞는지 확인해요.' },
  ], easy: { note: '삼각자의 직각과 견주어요. 직각보다 작으면 예각, 직각보다 크면 둔각이에요.', items: [
    { type: 'figure', prompt: '각도기를 보고 예각, 직각, 둔각 중 무엇인지 쓰세요.', tool: 'protractor', wide: true, options: { base: 'right' }, figures: [{ state: { angle: 45 }, caption: BLANK + '각' }], answer: '예각' },
    { type: 'choice', prompt: '직각보다 큰 각에 ○ 하세요.', options: ['60°', '120°'], answer: '120°' },
    { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '90°인 각은 ______이에요.', answer: '직각' },
  ] } },
  diff: { easy: '삼각자를 대면 맞는 이름이 바로 말풍선으로 나타나고, 카드 짝에 초록 테두리가 생겨요.', base: '삼각자를 대어 보고 스스로 골라요.', challenge: '비스듬히 놓인 각과 직각에 아주 가까운 각이 나와요.' },
  notes: '자주 보이는 어려움: ① 직각보다 조금 작거나 큰 각을 눈대중으로 직각이라고 한다 → 삼각자를 꼭짓점에 대어 변이 꼭 맞는지 확인하게 한다. ② 비스듬히 놓인 직각을 직각이 아니라고 한다 → 놓인 방향은 각의 크기와 관계없다고 짚는다. ③ 180°를 둔각이라고 한다 → 두 변이 한 줄이면 각이 아니라 일직선이라고 말해 준다. 예각과 둔각을 직접 만들어 보는 활동은 9차시에서 이어서 한다.',
}));
// ───────────────────────────── 9차시 (core · 예각과 둔각 만들기) ─────────────────────────────
L.push(lesson(9, {
  std: S02,
  title: '예각과 둔각을 직접 만들고 각의 부분 말하기',
  objective: '삼각자의 직각과 견주어 예각·직각·둔각을 직접 만들고, 각의 꼭짓점과 변을 찾아 말할 수 있다.',
  desc: 'two paper strips pinned at one point forming small and wide angles with little flags labeling the corner point and the two sides',
  text: '예각과 둔각을 만들어요',
  layers: [{ motif: 'house', x: 108, y: 214, s: 1.0 }, { motif: 'tree', x: 392, y: 216 }, { motif: 'flower', x: 250, y: 238 }, { motif: 'cloud', x: 334, y: 80, s: 0.8 }],
  intro: ['"종이 띠 두 장을 한 점에서 이어 각을 만들어 볼까요? 이 점과 두 띠를 뭐라고 부를까요?" 시연 단추로 띠가 좁게도 넓게도 벌어지는 모습을 보여 주고 각의 꼭짓점과 변의 이름을 말한다. 각을 그릴 때 두 변이 꼭짓점에서 만나지 않고 떨어지게 그리는 학생이 있다 — 각은 한 점에서 그은 두 곧은 선으로 이루어진다고 짚는다.', '종이 띠 두 장을 한 점에서 이어 붙여 각을 만들어 보세요. 그 점은 무엇이라고 부를까요?'],
  demo: { tool: 'protractor', options: { step: 15 }, sequence: [{ angle: 45 }, { angle: 135 }] },
  acts: [
    { id: 'a1', title: '활동 1. 직각과 견주어 각 만들기', minutes: 10, tool: 'rightangle',
      task: '삼각자의 직각을 기준으로 종이 띠를 돌려 예각, 직각, 둔각을 만들어요.',
      teacher: '"예각은 직각보다 어떤 각일까요? 삼각자를 대면 복숭아색 띠가 삼각자 안쪽에 있어야 해요." 삼각자를 대 보며 띠를 돌리게 한다. 둔각을 만들다가 일직선이 되도록 벌리는 학생에게는 두 변이 한 줄이 되면 각이 아니라고 짚어 조금 좁히게 한다.',
      levels: { easy: { mode: 'make', showKind: true }, base: { mode: 'make' }, challenge: { mode: 'make', step: 5 } },
      items: [
        { prompt: '직각보다 작은 각(예각)을 하나 만들어 보세요.', toolOptions: { start: 120 }, target: { kind: 'less' }, difficulty: 0.12 },
        { prompt: '직각보다 큰 각(둔각)을 하나 만들어 보세요. 일직선이 되면 각이 아니에요.', toolOptions: { start: 30 }, target: { kind: 'more' }, difficulty: 0.14 },
        { prompt: '삼각자를 대어 직각을 하나 만들어 보세요.', toolOptions: { start: 60 }, target: { right: true }, difficulty: 0.16 },
        { prompt: '이번에는 더 좁은 예각을 만들어 보세요. 삼각자 안쪽에 오게 해요.', toolOptions: { start: 150 }, target: { kind: 'less' }, difficulty: 0.2 },
      ] },
    { id: 'a2', title: '활동 2. 각의 부분과 그리는 방법 이어 보기', minutes: 8, tool: 'mindmap',
      task: '각의 부분과 이름을 이어 보고, 각을 그릴 때 지켜야 할 것을 골라요.',
      teacher: '"각은 몇 개의 변과 몇 개의 꼭짓점으로 이루어질까요?" 한 점에서 두 곧은 선이 만난다고 말하게 한다. 각을 그릴 때 두 변이 떨어져 있어도 괜찮다고 하는 학생에게는 두 변이 꼭짓점에서 만나는지 손가락으로 따라가게 한다.',
      levels: ML('각의 부분'),
      items: [
        mt('각의 부분과 이름을 이어 보세요.', '각의 부분', [['두 변이 만나는 점', '꼭짓점'], ['꼭짓점에서 뻗어 나간 곧은 선', '변'], ['직각보다 작은 각', '예각']], ['꼭짓점', '변', '예각', '둔각'], 0.18),
        pk('각을 그릴 때 지켜야 할 것만 골라 보세요.', '각 그리기', ['두 변이 꼭짓점에서 만나요', '두 변이 떨어져 있어요', '꼭짓점이 두 개예요', '변이 두 개예요'], ['두 변이 꼭짓점에서 만나요', '변이 두 개예요'], 0.22, '지켜야 할 것'),
        mt('그린 각에 알맞은 이름을 이어 보세요.', '각의 이름', [['직각보다 크게 벌어진 각', '둔각'], ['직각보다 좁게 벌어진 각', '예각'], ['삼각자의 직각에 꼭 맞는 각', '직각']], ['예각', '직각', '둔각', '평각'], 0.2),
      ] },
    { id: 'a3', title: '활동 3. 각의 꼭짓점과 변 눌러 찾기', minutes: 8, tool: 'rightangle',
      task: '종이 띠로 만든 각에서 꼭짓점과 변을 눌러 찾아요.',
      teacher: '"두 띠가 만나는 점은 어디일까요? 그 점을 뭐라고 하나요?" 꼭짓점을 먼저 찾은 뒤 꼭짓점에서 뻗어 나간 띠를 변이라고 말하게 한다. 띠의 끝을 꼭짓점이라고 누르는 학생에게는 두 띠가 한 점에서 만나는 곳이 꼭짓점이라고 되짚는다.',
      levels: RAL('parts'),
      items: [
        prt('각의 꼭짓점을 눌러 보세요.', 60, 'vertex', 0.1),
        prt('이 각의 변을 눌러 보세요.', 120, 'side', 0.14),
        prt('둔각의 꼭짓점을 눌러 보세요.', 135, 'vertex', 0.16),
      ] },
  ],
  wrap: ['"예각과 둔각을 그릴 때 꼭짓점과 변은 어떻게 그려야 하나요?" 짝에게 한 점에서 두 곧은 선을 그어 보이며 말하게 한다. 출구 3번을 틀린 학생은 각의 부분 이름을 다시 짚는다.', [
    { type: 'choice', prompt: '각을 그릴 때 두 변은 어떻게 그려야 하나요?', options: ['꼭짓점에서 만나요', '서로 떨어져 있어요', '겹치지 않아요'], answer: 0, difficulty: 0.15, explain: '각은 한 점인 꼭짓점에서 두 곧은 선이 만나야 해요.' },
    { type: 'tool', tool: 'rightangle', options: { mode: 'make', start: 45 }, prompt: '종이 띠를 돌려 삼각자의 직각에 꼭 맞는 각을 만들어 보세요.', target: { right: true }, difficulty: 0.2 },
    { type: 'choice', prompt: '각에서 두 변이 만나는 점을 무엇이라고 하나요?', options: ['꼭짓점', '변', '직각'], answer: 0, difficulty: 0.12, explain: '두 변이 만나는 점이 꼭짓점이에요.' },
  ]],
  ws: { title: '예각과 둔각 그리기', items: [
    { type: 'draw', prompt: '점 ㄴ을 꼭짓점으로 하는 예각을 하나 그리고, 꼭짓점과 변에 이름을 써 넣으세요.' },
    { type: 'draw', prompt: '점 ㄴ을 꼭짓점으로 하는 둔각을 하나 그리고, 꼭짓점과 변에 이름을 써 넣으세요.' },
    { type: 'figure', prompt: '각도기를 보고 각이 예각인지 둔각인지 쓰세요.', tool: 'protractor', wide: true, options: { base: 'right' }, figures: [{ state: { angle: 55 }, caption: BLANK + '각' }, { state: { angle: 125 }, caption: BLANK + '각' }], answer: '예각, 둔각' },
    { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '각에서 두 변이 만나는 점을 ______이라고 해요.', answer: '꼭짓점' },
    { type: 'choice', prompt: '둔각을 바르게 그린 설명에 ○ 하세요.', options: ['직각보다 크고 180°보다 작게 벌렸어요', '두 변이 한 줄이 되도록 벌렸어요'], answer: '직각보다 크고 180°보다 작게 벌렸어요' },
  ], easy: { note: '꼭짓점에서 두 변이 만나게 그려요. 직각보다 좁게 벌리면 예각, 넓게 벌리면 둔각이에요.', items: [
    { type: 'draw', prompt: '점 ㄴ을 꼭짓점으로 하는 예각을 하나 그려 보세요.' },
    { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '각의 두 곧은 선을 ______이라고 해요.', answer: '변' },
    { type: 'choice', prompt: '직각보다 넓게 벌린 각에 ○ 하세요.', options: ['예각', '둔각'], answer: '둔각' },
  ] } },
  diff: { easy: '띠가 움직이는 동안 지금 각의 이름이 바로 보여요.', base: '각의 이름이 보이지 않아서 삼각자를 대어 스스로 가려요.', challenge: '띠가 5°씩 움직이고 직각에 아주 가까운 각을 만들어요.' },
  notes: '자주 보이는 어려움: ① 각을 그릴 때 두 변이 꼭짓점에서 만나지 않고 떨어지게 그린다 → 한 점에서 두 곧은 선을 긋는 것이라고 손가락으로 따라 그리게 한다. ② 둔각을 만들다 일직선까지 벌려 버린다 → 180°는 각이 아니라고 짚어 조금 좁히게 한다. ③ 꼭짓점을 변의 끝과 헷갈린다 → 두 변이 만나는 점이 꼭짓점이라고 되짚는다. 생활 속 각을 찾는 활동과 단원 정리는 10차시에서 이어서 한다.',
}));
// ───────────────────────────── 10차시 (wrap · 생활 속 각과 단원 정리) ─────────────────────────────
L.push(lesson(10, {
  std: S0225,
  title: '생활 속 각을 예각·직각·둔각으로 나누고 단원 정리하기',
  objective: '생활 속 각을 직각과 견주어 예각·직각·둔각으로 나누고, 삼각형과 사각형의 각의 합까지 단원에서 배운 것을 정리할 수 있다.',
  desc: 'a classroom scene with a clock a set square a book and a fan each showing an angle of a different kind with colored tags',
  text: '우리 주변의 각',
  layers: [{ motif: 'house', x: 108, y: 214, s: 1.0 }, { motif: 'tree', x: 392, y: 216 }, { motif: 'flower', x: 250, y: 238 }, { motif: 'star', x: 334, y: 80, s: 0.6 }],
  intro: ['"교실에서 직각, 직각보다 좁은 각, 직각보다 넓은 각을 하나씩 찾았나요? 각을 재어 이름을 붙여 볼게요." 이 단원에서 배운 각의 크기, 예각·직각·둔각, 삼각형과 사각형의 각의 합을 함께 떠올려 보자고 말한다. 둔각을 직각보다 큰 각이라고만 알고 일직선까지 둔각으로 아는 학생이 있다 — 180°는 둔각이 아니라고 짚는다.', '교실이나 집에서 찾은 각을 하나 떠올려 예각, 직각, 둔각 중 무엇인지 짝에게 말해 봐요.'],
  acts: [
    { id: 'a1', title: '활동 1. 생활 속 각 나누기', minutes: 9, tool: 'mindmap',
      task: '생활 속에서 찾은 각이나 각도 카드를 예각, 직각, 둔각으로 나누어요.',
      teacher: '"공책의 모서리와 시계 9시의 두 바늘은 같은 종류의 각일까요?" 직각과 견주는 방법을 함께 말하게 한다. 정육각형의 한 꼭짓점을 직각이라고 짐작하는 학생에게는 삼각자의 직각을 대어 보면 직각보다 벌어져 있다는 것을 보게 한다.',
      levels: ML('생활 속 각'),
      items: [
        srt('생활 속에서 찾은 각을 예각, 직각, 둔각으로 나누어 보세요.', '생활 속 각', { '예각': ['시계 2시의 두 바늘', '정삼각형의 한 꼭짓점'], '직각': ['공책의 모서리', '시계 9시의 두 바늘'], '둔각': ['시계 4시의 두 바늘', '정육각형의 한 꼭짓점'] }, 0.24),
        srt('각도 카드를 예각, 직각, 둔각으로 나누어 보세요.', '각도 카드', { '예각': ['35°', '88°', '5°'], '직각': ['90°'], '둔각': ['91°', '179°', '125°'] }, 0.22),
        pk('둔각인 것만 골라 보세요. 직각과 일직선은 둔각이 아니에요.', '둔각 찾기', ['100°', '90°', '180°', '170°', '45°'], ['100°', '170°'], 0.26, '둔각'),
      ] },
    { id: 'a2', title: '활동 2. 각을 재고 이름 붙이기', minutes: 9, tool: 'protractor',
      task: '물건이 만든 각을 먼저 예각, 직각, 둔각으로 예상하고 각도기로 재어 확인해요.',
      teacher: '"이 각은 직각보다 좁을까요, 넓을까요? 먼저 예상해 보고 재어 볼게요." 잰 값을 90°와 견주어 이름을 붙이게 한다. 각도기의 반대쪽 줄을 읽어 118°를 62°로 읽는 학생에게는 예상한 이름과 읽은 값이 맞는지 따져 보게 한다.',
      levels: PLV('right'),
      items: [
        ms('부채가 만든 각을 재어 보세요. 어떤 각인지도 생각해요.', 72, 0.2, null, { predict: { q: '이 각은 어떤 각일까요?', options: ['예각', '직각', '둔각'], answer: 0 }, conclude: '72°는 90°보다 작아서 예각이에요.' }),
        ms('펼친 노트북 화면의 각을 재어 보세요.', 118, 0.24, { base: 'left' }, { predict: { q: '이 각은 어떤 각일까요?', options: ['예각', '직각', '둔각'], answer: 2 }, conclude: '118°는 90°보다 크고 180°보다 작아서 둔각이에요.' }),
        ms('액자 모서리가 만든 각을 재어 보세요.', 90, 0.2, null, { predict: { q: '이 각은 어떤 각일까요?', options: ['예각', '직각', '둔각'], answer: 1 } }),
      ] },
    { id: 'a3', title: '활동 3. 단원에서 배운 것 말풍선 채우기', minutes: 8, tool: 'story',
      task: '이 단원에서 배운 것을 친구들의 말에서 빈칸을 채우며 정리해요.',
      teacher: '"한 각이 둔각인 삼각형에서 나머지 두 각은 어떻게 될까요?" 세 각의 합 180°에서 둔각을 빼면 90°보다 작아진다고 말하게 한다. 직각삼각형에서 나머지 두 각의 합을 180°라고 하는 학생에게는 직각 90°를 먼저 빼야 한다고 짚어 준다.',
      levels: LVF,
      items: [
        fl('각의 이름을 빈칸에 넣어 보세요.', [['민지', 'sun', '0°보다 크고 90°보다 작은 각을 ___이라고 해요.', '예각'], ['준호', 'tree', '90°보다 크고 180°보다 작은 각을 ___이라고 해요.', '둔각']], ['직각', '평각'], 0.2),
        fl('각의 합을 빈칸에 넣어 보세요.', [['민지', 'flower', '삼각형의 세 각의 합은 ___°예요.', 180], ['준호', 'leaf', '사각형의 네 각의 합은 ___°예요.', 360]], [90, 270], 0.22),
        fl('삼각형의 각을 살펴 빈칸에 넣어 보세요.', [['민지', 'star', '한 각이 둔각인 삼각형에서 나머지 두 각의 합은 90°보다 ___.', '작아요'], ['준호', 'cloud', '한 각이 직각인 삼각형에서 나머지 두 각의 합은 ___°예요.', 90]], ['커요', 180], 0.28),
      ] },
  ],
  wrap: ['"이 단원에서 알게 된 것 가운데 가장 신기했던 것은 무엇인가요?" 짝에게 한 가지만 골라 이유와 함께 말하게 한다. 출구 2번을 틀린 학생은 삼각형의 세 각의 합 180°에서 둔각을 빼 보며 다시 확인하게 한다.', [
    { type: 'choice', prompt: '95°인 각은 어떤 각인가요?', options: ['예각', '직각', '둔각'], answer: 2, difficulty: 0.15, explain: '95°는 직각 90°보다 크고 180°보다 작아서 둔각이에요.' },
    { type: 'choice', prompt: '한 각이 100°인 삼각형에서 나머지 두 각의 합은 몇 도인가요?', options: ['80°', '90°', '100°'], answer: 0, difficulty: 0.24, explain: '삼각형의 세 각의 합 180°에서 100°를 빼면 80°예요.' },
    { type: 'tool', tool: 'rightangle', options: { mode: 'make', start: 100 }, prompt: '종이 띠를 돌려 직각보다 작은 각을 만들어 보세요.', target: { kind: 'less' }, difficulty: 0.22 },
  ]],
  ws: { title: '각 정리하기', items: [
    { type: 'figure', prompt: '각도기를 보고 각의 이름과 크기를 쓰세요.', tool: 'protractor', wide: true, options: { base: 'right' }, figures: [{ state: { angle: 40 }, caption: BLANK + '°, ' + BLANK + '각' }, { state: { angle: 140 }, caption: BLANK + '°, ' + BLANK + '각' }], answer: '40°, 예각 / 140°, 둔각' },
    { type: 'table', prompt: '각을 알맞은 칸에 쓰세요. 예각, 직각, 둔각 중에서 골라요.', columns: ['각도', '30°', '90°', '100°'], cells: [['이름', '', '', '']], answer: '예각, 직각, 둔각' },
    { type: 'blank', prompt: '삼각형의 두 각이 50°, 60°일 때 나머지 한 각을 쓰세요.', text: '180° − 50° − 60° = ______°', answer: '70' },
    { type: 'blank', prompt: '사각형의 세 각이 90°, 90°, 60°일 때 나머지 한 각을 쓰세요.', text: '360° − 90° − 90° − 60° = ______°', answer: '120' },
    { type: 'short', prompt: '이 단원에서 배운 것 가운데 하나를 골라 친구에게 설명하는 말을 써 보세요.', answer: '예) 삼각형의 세 각의 합은 180°예요.' },
  ], easy: { note: '90°보다 작으면 예각, 90°이면 직각, 90°보다 크고 180°보다 작으면 둔각이에요.', items: [
    { type: 'table', prompt: '각의 이름을 써 보세요.', columns: ['각도', '45°', '90°', '120°'], cells: [['이름', '', '', '']], answer: '예각, 직각, 둔각' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '삼각형의 세 각의 합은 ______°예요.', answer: '180' },
    { type: 'choice', prompt: '직각보다 큰 각에 ○ 하세요.', options: ['예각', '둔각'], answer: '둔각' },
  ] } },
  diff: { easy: '각을 만들 때 숫자와 이름이 바로 보이고, 카드 짝에 초록 테두리가 생겨요.', base: '이름과 숫자 없이 스스로 가늠하고 재어 확인해요.', challenge: '범위가 정해진 각을 1°씩 맞추고, 헷갈리는 각도 카드를 가려내요.' },
  notes: '자주 보이는 어려움: ① 180°를 둔각이라고 한다 → 두 변이 한 줄이 되어 각이 아니라고 짚는다. ② 직각과 비슷한 각을 눈대중으로 직각이라고 한다 → 삼각자를 대어 꼭 맞는지 확인하게 한다. ③ 삼각형과 사각형의 각의 합을 헷갈린다 → 삼각형은 180°, 사각형은 삼각형 둘이라서 360°라고 도형마다 함께 쓰게 한다. 이 단원의 각도는 5학년 평면도형의 둘레와 넓이에서 다시 쓴다.',
}));
PaperLessons.registerUnit({
  id: UID, schema: 'edu-unit.v1', catalogUnit: CU,
  grade: 4, subject: '수학', unitTitle: UT,
  flow: '1~2차시에서는 직각을 90°로 정하고 직각의 반(45°)·직각 둘(180°)로 각의 크기를 말해 본 뒤, 변의 길이와 관계없이 벌어진 정도로 각을 견주고 각도기의 눈금을 읽어 봅니다. 3차시(기존 차시 g4-math-angle)에서 각도기로 각을 재고 그리며 예각·직각·둔각을 구분하고, 4차시에서는 각을 먼저 어림한 뒤 재어 견주고 삼각자의 각까지 재어 봅니다. 5~7차시는 삼각형 세 각을 재어 합이 180°임을 확인하고, 세 각을 오려 모아 일직선이 되는 것과 사각형을 삼각형 둘로 나누어 360°를 설명하며, 두 각을 알 때 나머지 각을 계산해 각도기로 확인합니다. 8~10차시는 직각과 견주어 예각·둔각을 가려내고 직접 만들어 보며, 생활 속 각을 분류하고 단원을 정리합니다.',
  refs: { 3: 'g4-math-angle' },
  lessons: L,
});
})();
