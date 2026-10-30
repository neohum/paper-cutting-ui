/* 4학년 2학기 6. 다각형 — 단원 파일(차시 9개).
 * 흐름: 곧은 선으로만 둘러싸인 도형 찾기(1) → 변과 꼭짓점 수로 이름 붙이기(2) → 변과 각이 모두 같은 정다각형(3)
 *      → 정다각형의 이름·변의 수·둘레(4) → 이웃하지 않은 꼭짓점을 잇는 대각선(5) → 칠교 조각 두 개로 모양 만들기(6)
 *      → 조각 세 개와 일곱 개로 모양 채우기·뒤집기(7) → 같은 두 조각으로 여러 모양·빈틈없이 채우기(8) → 단원 정리(9).
 * 성취기준 [4수03-11](다각형과 정다각형의 의미를 알고 대각선을 이해), [4수03-12](주어진 조각으로 모양을 만들거나 빈틈없이 채우기).
 * 활동지의 그림은 점판 그림(print)과 칠교 그림자만 쓰고, 나머지는 표·고르기·빈칸·draw 문항으로 둔다.
 * 확인 필요: units-index 의 차시 제목은 '변이 여럿인 도형과 정다각형이 뜻하는 바'(4수03-11, 1~5차시)와
 *   '주어진 조각으로 모양을 만들거나 빈틈없이 채우기'(4수03-12, 6~9차시) 두 묶음이라 그렇게 나눠 달았다. 대각선은 4수03-11 쪽(5차시)에 두었다.
 * 정답(꼭짓점·대각선 수 n(n-3)/2, 정다각형 둘레, 칠교 조각 수)은 모두 손으로 계산해 두었다.
 */
(function () {
const UID = 'g4-math-2-06', CU = 'g4-수학-2학기-6', UT = '6. 다각형';
const S1 = ['[4수03-11]'], S2 = ['[4수03-12]'];
const two = (n) => String(n).padStart(2, '0');
const TAIL = ', with overlapping shapes in soft pastel colors, handcrafted textures, subtle shadows between layers, clean vector edges, centered on a matte cream background, whimsical and modern visual storytelling.';
const ill = (desc, text, extra) => ({
  prompt: `Layered paper-cut illustration of ${desc}${TAIL}`,
  scene: { viewBox: [480, 270], layers: [
    { motif: 'sun', x: 410, y: 56, s: 0.8 }, { motif: 'cloud', x: 110, y: 52 }, { motif: 'hills', y: 206 },
    ...(extra || []), { motif: 'text', x: 240, y: 142, text, size: 22 },
  ] },
});
const lesson = (n, d) => ({
  id: `${UID}-${two(n)}`, schema: 'edu-lesson.v1', catalog: { unit: CU, lesson: n },
  grade: 4, subject: '수학', unitTitle: UT,
  title: d.title, objective: d.objective, standards: n <= 5 ? S1 : S2, minutes: 40, formats: ['chromebook', 'projector', 'print'],
  illustration: ill(d.desc, d.text, d.layers),
  stages: [
    Object.assign({ id: 'intro', title: '도입', minutes: 7, teacher: d.intro[0], student: d.intro[1] }, d.demo ? { demo: d.demo } : {}),
    { id: 'main', title: '전개', minutes: 26, activities: d.acts },
    { id: 'wrapup', title: '정리', minutes: 7, teacher: d.wrap[0], exitTicket: [...d.wrap[1], { type: 'mood', prompt: '오늘 공부는 어땠나요?' }] },
  ],
  worksheet: d.ws, differentiation: d.diff, teacherNotes: d.notes,
});
const act = (id, title, minutes, tool, task, teacher, levels, items) => ({ id, title, minutes, tool, task, teacher, levels, items });
// 단계 옵션 묶음
const CLS = { easy: { mode: 'classify' }, base: { mode: 'classify' }, challenge: { mode: 'classify' } };
const GB = (size) => ({ easy: { mode: 'geoboard', size: size || 5, showRight: true }, base: { mode: 'geoboard', size: size || 5 }, challenge: { mode: 'geoboard', size: (size || 5) + 1 } });
const GBR = { easy: { mode: 'geoboard', size: 5 }, base: { mode: 'geoboard', size: 5 }, challenge: { mode: 'geoboard', size: 5 } };
const TAN = { easy: { mode: 'tangram', lines: true }, base: { mode: 'tangram' }, challenge: { mode: 'tangram' } };
const MM = (mode, topic) => ({ easy: { mode, topic, live: true }, base: { mode, topic }, challenge: { mode, topic } });
// 정다각형 카드 모양(0~1 상자): 교구의 카드 그림과 같은 식
const r3 = (v) => Math.round(v * 1000) / 1000;
const reg = (n, rot) => Array.from({ length: n }, (_, i) => { const a = rot + (i * 2 * Math.PI) / n; return [r3(0.5 + 0.45 * Math.cos(a)), r3(0.52 + 0.45 * Math.sin(a))]; });
const EQTRI = [[0.5, 0.1], [0.9, 0.793], [0.1, 0.793]];
const LSHAPE = [[0.1, 0.1], [0.5, 0.1], [0.5, 0.5], [0.9, 0.5], [0.9, 0.9], [0.1, 0.9]];
const STAR4 = [[0.5, 0.04], [0.62, 0.38], [0.96, 0.5], [0.62, 0.62], [0.5, 0.96], [0.38, 0.62], [0.04, 0.5], [0.38, 0.38]];
const IRRPENT = [[0.1, 0.4], [0.5, 0.05], [0.95, 0.3], [0.8, 0.9], [0.2, 0.85]];
const IRRHEX = [[0.05, 0.5], [0.3, 0.1], [0.75, 0.15], [0.95, 0.55], [0.6, 0.9], [0.2, 0.8]];
const card = (id, shape, rot) => Object.assign({ id }, Array.isArray(shape) ? { pts: shape } : { shape }, rot ? { rot } : {});
// 점판 도형(열, 행) — 모두 볼록 도형이라 대각선 수가 n(n-3)/2 이다
const TRI = [[0, 3], [4, 3], [2, 0]];
const QUAD = [[0, 1], [3, 0], [4, 3], [1, 4]];
const RECT = [[0, 1], [4, 1], [4, 3], [0, 3]];
const PENT = [[1, 0], [3, 0], [4, 2], [2, 4], [0, 2]];
const PENT2 = [[0, 1], [2, 0], [4, 1], [3, 4], [1, 4]];
const HEX = [[1, 0], [3, 0], [4, 2], [3, 4], [1, 4], [0, 2]];
const OCT = [[1, 0], [2, 0], [3, 1], [3, 2], [2, 3], [1, 3], [0, 2], [0, 1]];
const SQ2 = [[1, 1], [3, 1], [3, 3], [1, 3]];
const RHOM = [[0, 0], [2, 1], [3, 3], [1, 2]];
// 문항 도우미
const gb = (prompt, target, d, extra) => Object.assign({ prompt, target, difficulty: d }, extra || {});
const rdn = (prompt, pts, q, unit, num, d, extra) => Object.assign({ prompt, state: { pts }, toolOptions: { readOnly: true, showCounts: false, askNum: { q, unit } }, target: { num }, difficulty: d }, extra || {});
const rdp = (prompt, pts, q, choices, k, d, extra) => Object.assign({ prompt, state: { pts }, toolOptions: { readOnly: true, showCounts: false, ask: { q, choices } }, target: { pick: k }, difficulty: d }, extra || {});
const cls = (prompt, cards, bins, map, d, extra) => Object.assign({ prompt, toolOptions: { mode: 'classify', cards, bins }, target: { bins: map }, difficulty: d }, extra || {});
const tn = (prompt, o, d, extra) => Object.assign({ prompt, toolOptions: o, target: { fit: true }, difficulty: d }, extra || {});
const L = [];
// ───────────────────────────── 1차시 (intro · concept) ─────────────────────────────
L.push(lesson(1, {
  title: '곧은 선으로만 둘러싸인 도형 찾기',
  objective: '곧은 선(선분)으로만 둘러싸인 도형을 다각형이라고 하며, 다각형인 도형과 아닌 도형을 가를 수 있다.',
  desc: 'a pegboard with rubber bands forming a triangle and a pentagon beside a round paper plate, and children sorting shape cards',
  text: '곧은 선으로만 둘러싸였나요?',
  layers: [{ motif: 'house', x: 120, y: 214 }, { motif: 'tree', x: 370, y: 216 }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"삼각형과 사각형 말고 변이 더 많은 도형을 본 적 있나요? 곧은 선으로만 둘러싸인 도형을 다각형이라고 해요. 원은 다각형일까요?" 시연으로 점판에 삼각형과 오각형이 만들어지는 모습을 보여 준다. 오목하게 들어간 도형이나 별 모양은 다각형이 아니라고 말하는 학생이 있다 — 곧은 선으로만 둘러싸였으면 모양이 어떻든 다각형이고, 굽은 선이 한 군데라도 있으면 아니라고 짚는다.', '교실에서 곧은 선으로만 둘러싸인 모양을 하나 찾아 말해 봐요.'],
  demo: { tool: 'shapes', options: { mode: 'geoboard', size: 5 }, sequence: [{ shape: 'triangle' }, { shape: 'pentagon' }] },
  acts: [
    act('a1', '활동 1. 다각형인 도형과 아닌 도형 나누기', 9, 'shapes', '도형 카드를 눌러 "다각형이에요"와 "다각형이 아니에요" 칸에 넣어요. 굽은 선이 있는지 살펴요.',
      '"이 도형은 곧은 선으로만 둘러싸여 있나요? 굽은 선이 있나요?" 도형 둘레를 손가락으로 따라가며 말하게 한다. 타원(길쭉한 원)을 "길쭉하니까 다각형"이라고 하는 학생에게는 둘레에 굽은 선이 있다는 것을 짚는다. 오목한 도형을 "들어갔으니까 아니다"라고 하는 학생에게는 곧은 선으로만 둘러싸였는지만 보게 한다.',
      CLS, [
        cls('도형 카드를 다각형인지 아닌지 나누어 보세요.', [card('t', 'triangle'), card('c', 'circle'), card('r', 'rectangle'), card('o', 'oval')], ['다각형이에요', '다각형이 아니에요'], { t: 0, c: 1, r: 0, o: 1 }, 0.08),
        cls('오각형과 육각형도 있어요. 다각형인지 아닌지 나누어 보세요.', [card('a', 'pentagon'), card('b', 'hexagon', 30), card('c', 'circle'), card('d', 'obtuse-triangle')], ['다각형이 아니에요', '다각형이에요'], { a: 1, b: 1, c: 0, d: 1 }, 0.12),
        cls('오목하게 들어간 도형도 있어요. 곧은 선으로만 둘러싸였는지 보고 나누어 보세요.', [card('l', LSHAPE), card('s', STAR4), card('c', 'circle'), card('z', 'trapezoid')], ['다각형이에요', '다각형이 아니에요'], { l: 0, s: 0, c: 1, z: 0 }, 0.2,
          { conclude: '모양이 오목하게 들어가도 곧은 선으로만 둘러싸였으면 다각형이에요.' }),
      ]),
    act('a2', '활동 2. 점판에 곧은 선으로 다각형 만들기', 9, 'shapes', '점판의 점을 차례로 눌러 곧은 선으로 둘러싸인 도형을 만들어요. 선의 수를 세어 보아요.',
      '"선 3개로 둘러싸인 도형은 무엇이에요? 4개는요?" 변의 수를 하나씩 세게 한다. 점을 세 개 이상 같은 줄에 찍고 변이 5개라고 세는 학생에게는 한 줄 위의 점은 꼭짓점이 아님을 보여 준다.',
      GB(5), [
        gb('점을 이어 곧은 선 3개로 둘러싸인 다각형을 만들어 보세요.', { shape: 'triangle' }, 0.06),
        gb('이번에는 곧은 선 4개로 둘러싸인 다각형을 만들어 보세요.', { shape: 'quadrilateral' }, 0.1),
        gb('곧은 선 5개로 둘러싸인 다각형을 만들어 보세요. 이름은 무엇일까요?', { sides: 5 }, 0.15, { reveal: 'after-check', conclude: '곧은 선 5개로 둘러싸인 다각형은 오각형이에요.' }),
      ]),
    act('a3', '활동 3. 다각형에 대한 바른 말 고르기', 8, 'mindmap', '다각형에 대한 말 카드 가운데 바른 말만 바구니에 담아요.',
      '"다각형은 선이 열려 있어도 될까요?" 선이 모두 이어져 닫혀 있어야 한다고 말하게 한다. 원을 "둥글어서 아주 많은 변이 있는 다각형"이라고 하는 학생에게는 변은 곧은 선이어야 한다고 말해 준다.',
      MM('pick', '다각형 설명'), [
        { prompt: '다각형에 대해 바르게 말한 카드를 모두 골라 보세요.', toolOptions: { basket: '바른 말', cards: [{ id: 'a', text: '곧은 선으로만 둘러싸여 있어요' }, { id: 'b', text: '굽은 선이 있어도 돼요', why: '굽은 선이 있으면 다각형이 아니에요.' }, { id: 'c', text: '선분들이 이어져 닫혀 있어요' }, { id: 'd', text: '선이 열려 있어도 돼요', why: '선이 모두 이어져 닫혀 있어야 해요.' }] }, target: { pick: ['a', 'c'] }, difficulty: 0.12 },
        { prompt: '도형 이름에 대해 바르게 말한 카드를 모두 골라 보세요.', toolOptions: { basket: '바른 말', cards: [{ id: 'a', text: '삼각형은 다각형이에요' }, { id: 'b', text: '원은 다각형이에요', why: '원은 굽은 선으로 둘러싸여 있어서 다각형이 아니에요.' }, { id: 'c', text: '사각형은 다각형이에요' }, { id: 'd', text: '변이 한 개만 있어도 다각형이에요', why: '변이 세 개 이상이어야 닫힌 도형이 돼요.' }] }, target: { pick: ['a', 'c'] }, difficulty: 0.15 },
        { prompt: '더 해 보기: 원이 다각형이 아닌 까닭을 바르게 말한 카드를 모두 골라 보세요.', toolOptions: { basket: '바른 까닭', cards: [{ id: 'a', text: '굽은 선이 있어요' }, { id: 'b', text: '곧은 선으로만 둘러싸이지 않았어요' }, { id: 'c', text: '너무 작아서 다각형이 아니에요', why: '크기는 상관없어요.' }, { id: 'd', text: '변이 4개라서 다각형이 아니에요', why: '원에는 변이 없어요.' }] }, target: { pick: ['a', 'b'] }, extra: true, difficulty: 0.2 },
      ]),
  ],
  wrap: ['"다각형은 어떤 도형이라고 했나요? 원이 다각형이 아닌 까닭도 말해 볼까요?" 곧은 선으로만 둘러싸였다는 말이 들어 있는지 듣는다. 출구 3번에서 원을 고르지 않은 학생은 2차시 처음에 굽은 선이 있는 도형을 다시 가른다.', [
    { type: 'choice', prompt: '다각형은 어떤 도형인가요?', options: ['곧은 선으로만 둘러싸인 도형', '굽은 선이 있는 도형', '선이 열려 있는 도형'], answer: 0, difficulty: 0.08, explain: '다각형은 곧은 선(선분)으로만 둘러싸인 닫힌 도형이에요.' },
    { type: 'tool', tool: 'shapes', options: { mode: 'classify', cards: [card('x', 'hexagon'), card('y', 'oval'), card('z', 'right-triangle')], bins: ['다각형이에요', '다각형이 아니에요'] }, state: {}, prompt: '도형 카드를 다각형인지 아닌지 나누세요.', target: { bins: { x: 0, y: 1, z: 0 } }, difficulty: 0.12 },
    { type: 'choice', prompt: '다각형이 아닌 도형은 무엇인가요?', options: ['삼각형', '원', '오각형'], answer: 1, difficulty: 0.1, explain: '원은 굽은 선으로 둘러싸여 있어서 다각형이 아니에요.' },
  ]],
  ws: { title: '다각형 찾기', items: [
    { type: 'figure', wide: true, prompt: '점판 도형을 곧은 선이 몇 개로 둘러싸고 있는지 세어 쓰세요.', tool: 'shapes', options: { mode: 'geoboard', size: 5 }, figures: [{ state: { pts: TRI }, caption: '곧은 선 ___개' }, { state: { pts: PENT }, caption: '곧은 선 ___개' }], answer: '3개, 5개' },
    { type: 'choice', prompt: '다각형이 아닌 도형에 ○ 하세요.', options: ['삼각형', '원', '육각형'], answer: '원' },
    { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '곧은 선(선분)으로만 둘러싸인 도형을 ______이라고 해요.', answer: '다각형' },
    { type: 'table', prompt: '다각형이면 ○, 아니면 ×를 쓰세요.', columns: ['도형', '삼각형', '원', '오각형', '타원'], cells: [['다각형인가요?', '○', '', '', '']], answer: '×, ○, ×' },
    { type: 'short', prompt: '다각형이 아닌 도형을 하나 정하고, 다각형이 아닌 까닭을 써 보세요.' },
  ], easy: { note: '곧은 선으로만 둘러싸여 있으면 다각형이에요. 굽은 선이 하나라도 있으면 아니에요.', items: [
    { type: 'figure', wide: true, prompt: '점판 도형의 곧은 선이 몇 개인지 세어 쓰세요.', tool: 'shapes', options: { mode: 'geoboard', size: 5 }, figures: [{ state: { pts: QUAD }, caption: '곧은 선 ___개' }], answer: '4개' },
    { type: 'choice', prompt: '다각형인 도형에 ○ 하세요.', options: ['삼각형', '원'], answer: '삼각형' },
    { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '다각형은 ______ 선으로만 둘러싸인 도형이에요.', answer: '곧은' },
    { type: 'draw', prompt: '곧은 선으로만 둘러싸인 도형을 하나 그리고 곧은 선이 몇 개인지 써 보세요.' },
  ] } },
  diff: { easy: '점판에 직각 표시가 보이고, 카드가 칸에 들어갈 때 바로 맞는지 알려 줘요.', base: '곧은 선의 수를 세어 다각형을 만들고 가려요.', challenge: '오목한 도형도 가려내고 확인 전에 변의 수가 보이지 않아요.' },
  notes: '자주 보이는 어려움: ① 오목하게 들어간 도형이나 별 모양을 다각형이 아니라고 한다 → 곧은 선으로만 둘러싸였는지만 본다. ② 원이나 타원을 다각형이라고 한다 → 굽은 선이 있으면 다각형이 아니다. ③ 한 줄 위에 있는 점도 꼭짓점으로 센다 → 꺾이는 곳만 꼭짓점이다. 변과 꼭짓점 수로 이름 붙이기는 2차시에서 한다.',
}));
// ───────────────────────────── 2차시 (practice · concept) ─────────────────────────────
L.push(lesson(2, {
  title: '변과 꼭짓점을 세어 다각형 이름 붙이기',
  objective: '다각형의 변, 꼭짓점, 각의 수가 모두 같음을 알고, 변의 수에 따라 삼각형부터 팔각형까지 이름을 붙일 수 있다.',
  desc: 'colorful paper polygons from three to eight sides pinned in a row on a wall with number tags under each',
  text: '변이 몇 개일까요?',
  layers: [{ motif: 'flower', x: 110, y: 232 }, { motif: 'house', x: 380, y: 216, color: 'buttercup' }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"변이 3개면 삼각형, 4개면 사각형이에요. 변이 5개이면 무슨 도형일까요? 8개이면요?" 다각형 이름이 변의 수에서 온다는 것을 보여 준다. 꼭짓점을 변과 따로 세다가 수가 다르다고 말하는 학생이 있다 — 다각형에서는 변, 꼭짓점, 각의 수가 모두 같다고 말해 준다.', '내가 아는 다각형 이름을 말하고 변이 몇 개인지 말해 봐요.'],
  acts: [
    act('a1', '활동 1. 꼭짓점과 변과 각의 수 세기', 9, 'shapes', '점판의 도형을 보고 꼭짓점, 변, 각이 각각 몇 개인지 세어 써요.',
      '"꺾이는 곳에 손가락을 대고 하나, 둘 세어 볼까요? 이번에는 변을 세어 봐요." 꼭짓점을 센 뒤 변을 세어 같음을 확인하게 한다. 꼭짓점이 6개인데 변은 7개라고 세는 학생에게는 처음 센 변을 표시하고 다시 세게 한다.',
      GBR, [
        rdn('점판 도형의 꼭짓점이 몇 개인지 세어 써 보세요.', HEX, '꼭짓점은 몇 개인가요?', '개', 6, 0.1),
        rdn('점판 도형의 변이 몇 개인지 세어 써 보세요.', PENT2, '변은 몇 개인가요?', '개', 5, 0.1),
        rdn('점판 도형의 각이 몇 개인지 세어 써 보세요. 꺾이는 곳마다 각이 하나 있어요.', OCT, '각은 몇 개인가요?', '개', 8, 0.18,
          { conclude: '꼭짓점, 변, 각의 수는 모두 같아요. 이 도형은 8개라서 팔각형이에요.' }),
      ]),
    act('a2', '활동 2. 점판에서 각의 수와 직각을 맞춰 만들기', 9, 'shapes', '각의 수와 직각의 수를 정해서 점판에 다각형을 만들어요.',
      '"각이 6개인 다각형은 꼭짓점도 몇 개일까요?" 꼭짓점의 수도 6개임을 말하게 한다. 한 줄 위에 점을 더 찍어 개수를 맞추는 학생에게는 꺾이지 않는 점은 꼭짓점이 아님을 보여 준다. 집 모양 오각형에서 직각이 몇 개인지 세게 하고 지붕 쪽 두 각은 직각이 아님을 짚는다.',
      GB(5), [
        gb('각이 6개인 다각형을 만들어 보세요. 꼭짓점은 몇 개일까요?', { shape: 'hexagon' }, 0.15, { reveal: 'after-check', conclude: '각이 6개이면 꼭짓점도 6개, 변도 6개인 육각형이에요.' }),
        gb('집 모양처럼 직각이 2개 있는 오각형을 만들어 보세요.', { sides: 5, rightAngles: 2 }, 0.22),
        gb('변이 4개이고 직각이 2개뿐인 다각형을 만들어 보세요.', { sides: 4, rightAngles: 2 }, 0.25),
      ]),
    act('a3', '활동 3. 변의 수에 따라 이름 칸에 넣기', 8, 'shapes', '도형 카드의 변을 세어 알맞은 이름 칸에 넣어요.',
      '"이 카드는 변이 몇 개예요? 그러면 무슨 도형이에요?" 모양이 비뚤어져 있어도 변의 수만 센다는 것을 말하게 한다. 모양이 둥글게 보인다고 육각형을 오각형으로 세는 학생에게는 꺾이는 곳마다 점을 찍으며 세게 한다.',
      CLS, [
        cls('도형 카드를 변의 수에 따라 이름 칸에 넣어 보세요.', [card('a', 'triangle'), card('b', 'rectangle'), card('c', 'pentagon'), card('d', 'hexagon')], ['삼각형', '사각형', '오각형', '육각형'], { a: 0, b: 1, c: 2, d: 3 }, 0.1),
        cls('돌려 놓은 카드도 있어요. 변의 수에 따라 이름 칸에 넣어 보세요.', [card('a', 'obtuse-triangle'), card('b', 'parallelogram'), card('c', 'hexagon', 30), card('d', 'pentagon', 40), card('e', 'trapezoid')], ['삼각형', '사각형', '오각형', '육각형'], { a: 0, b: 1, c: 3, d: 2, e: 1 }, 0.18),
        cls('모양이 제각각이에요. 변의 수를 세어 알맞은 칸에 넣어 보세요.', [card('p', LSHAPE), card('q', 'rhombus'), card('r', IRRPENT), card('s', IRRHEX)], ['변이 4개', '변이 5개', '변이 6개'], { p: 2, q: 0, r: 1, s: 2 }, 0.25,
          { conclude: '모양이 달라도 변이 6개이면 모두 육각형이에요.' }),
      ]),
  ],
  wrap: ['"변이 6개인 다각형은 무슨 도형이고, 꼭짓점과 각은 몇 개일까요?" 세 수가 모두 같다는 말이 나오는지 듣는다. 출구 2번을 틀린 학생은 3차시 처음에 꺾이는 곳에 점을 찍으며 다시 센다.', [
    { type: 'choice', prompt: '변이 6개인 다각형의 이름은 무엇인가요?', options: ['오각형', '육각형', '팔각형'], answer: 1, difficulty: 0.1, explain: '변이 6개인 다각형은 육각형이에요.' },
    { type: 'choice', prompt: '꼭짓점이 7개인 다각형의 이름은 무엇인가요?', options: ['칠각형', '육각형', '팔각형'], answer: 0, difficulty: 0.15, explain: '꼭짓점이 7개이면 변도 7개이니 칠각형이에요.' },
    { type: 'choice', prompt: '팔각형의 각은 모두 몇 개인가요?', options: ['6개', '7개', '8개'], answer: 2, difficulty: 0.12, explain: '다각형은 변, 꼭짓점, 각의 수가 모두 같아서 팔각형은 각이 8개예요.' },
  ]],
  ws: { title: '다각형의 변과 꼭짓점', items: [
    { type: 'table', prompt: '다각형의 변의 수와 꼭짓점의 수를 빈칸에 쓰세요.', columns: ['다각형', '삼각형', '사각형', '오각형', '육각형'], cells: [['변의 수(개)', '3', '', '', ''], ['꼭짓점의 수(개)', '3', '', '', '']], answer: '4, 5, 6 / 4, 5, 6' },
    { type: 'figure', wide: true, prompt: '점판 도형의 이름을 쓰세요.', tool: 'shapes', options: { mode: 'geoboard', size: 5 }, figures: [{ state: { pts: HEX }, caption: '___각형' }, { state: { pts: PENT2 }, caption: '___각형' }], answer: '육각형, 오각형' },
    { type: 'choice', prompt: '변이 8개인 다각형에 ○ 하세요.', options: ['칠각형', '팔각형', '구각형'], answer: '팔각형' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '오각형의 변은 ______개, 꼭짓점은 ______개, 각은 ______개예요.', answer: '5, 5, 5' },
    { type: 'draw', prompt: '변이 7개인 다각형을 하나 그리고 이름을 써 보세요.' },
  ], easy: { note: '다각형은 변, 꼭짓점, 각의 수가 모두 같아요. 꺾이는 곳마다 점을 찍으며 세요.', items: [
    { type: 'table', prompt: '다각형의 변의 수를 빈칸에 쓰세요.', columns: ['다각형', '삼각형', '사각형', '오각형'], cells: [['변의 수(개)', '3', '', '']], answer: '4, 5' },
    { type: 'choice', prompt: '변이 5개인 다각형에 ○ 하세요.', options: ['사각형', '오각형'], answer: '오각형' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '육각형의 꼭짓점은 ______개예요.', answer: '6' },
    { type: 'draw', prompt: '변이 4개인 다각형을 하나 그리고 이름을 써 보세요.' },
  ] } },
  diff: { easy: '점판에 직각 표시가 보이고 꼭짓점·변 수가 확인 뒤에 보여요.', base: '꼭짓점과 변을 직접 세어 이름을 붙여요.', challenge: '모양이 비뚤어진 카드도 변의 수만 세어 이름을 붙여요.' },
  notes: '자주 보이는 어려움: ① 변과 꼭짓점의 수가 다르다고 센다 → 처음 센 곳에 표시하고 다시 센다. ② 비뚤어진 도형은 이름이 다르다고 한다 → 모양이 아니라 변의 수가 이름을 정한다. ③ 칠각형·팔각형 이름이 헷갈린다 → 칠은 7, 팔은 8이라고 수 이름과 이어 말한다. 변과 각이 모두 같은 도형은 3차시에서 한다.',
}));
// ───────────────────────────── 3차시 (core · representation) ─────────────────────────────
L.push(lesson(3, {
  title: '변과 각이 모두 같은 정다각형 가려내기',
  objective: '변의 길이가 모두 같고 각의 크기도 모두 같은 다각형을 정다각형이라고 하며, 직사각형과 마름모가 정다각형이 아닌 까닭을 말할 수 있다.',
  desc: 'a paper square, a paper regular hexagon and a stretched paper rectangle on a table, with a child laying a ruler along each side',
  text: '변도 같고 각도 같아야 해요',
  layers: [{ motif: 'house', x: 110, y: 216 }, { motif: 'cloud', x: 330, y: 80 }, { motif: 'flower', x: 380, y: 234, color: 'rose' }],
  intro: ['"정사각형과 마름모는 네 변의 길이가 같아요. 둘 다 정다각형일까요?" 정사각형과 마름모, 직사각형을 나란히 놓고 변의 길이와 각의 크기를 견주어 보인다. 변의 길이만 같으면 정다각형이라고 말하는 학생이 많다 — 변도 같고 각도 같아야 정다각형이라고 말해 준다.', '정사각형과 마름모는 어디가 같고 어디가 다른지 말해 봐요.'],
  acts: [
    act('a1', '활동 1. 정다각형인 도형과 아닌 도형 나누기', 9, 'shapes', '변의 길이가 모두 같고 각의 크기도 모두 같은 도형을 "정다각형이에요" 칸에 넣어요.',
      '"이 도형은 변이 모두 같아요? 각도 모두 같아요?" 두 가지를 하나씩 확인하게 한다. 마름모를 "네 변이 같으니까 정다각형"이라고 하는 학생에게는 각의 크기가 서로 다르다는 것을 짚는다. 직사각형을 "각이 모두 직각이니까 정다각형"이라고 하는 학생에게는 변의 길이를 견주게 한다.',
      CLS, [
        cls('도형 카드를 정다각형인지 아닌지 나누어 보세요.', [card('a', 'square'), card('b', 'rectangle'), card('c', 'hexagon'), card('d', 'rhombus')], ['정다각형이에요', '정다각형이 아니에요'], { a: 0, b: 1, c: 0, d: 1 }, 0.12),
        cls('정삼각형도 있어요. 정다각형인지 아닌지 나누어 보세요.', [card('a', 'pentagon'), card('b', 'right-triangle'), card('c', EQTRI), card('d', 'obtuse-triangle')], ['정다각형이에요', '정다각형이 아니에요'], { a: 0, b: 1, c: 0, d: 1 }, 0.18),
        cls('변이 여덟 개인 도형도 있어요. 정다각형인지 아닌지 나누어 보세요.', [card('a', IRRPENT), card('b', reg(8, Math.PI / 8)), card('c', LSHAPE), card('d', 'square', 20)], ['정다각형이에요', '정다각형이 아니에요'], { a: 1, b: 0, c: 1, d: 0 }, 0.25,
          { conclude: '변의 길이도 같고 각의 크기도 같아야 정다각형이에요. 돌려 놓아도 정다각형은 그대로예요.' }),
      ]),
    act('a2', '활동 2. 점판에 정사각형 만들기', 9, 'shapes', '네 변의 길이가 같고 네 각이 모두 직각인 정사각형을 넓이에 맞게 만들어요.',
      '"넓이가 4칸인 정사각형은 한 변이 몇 칸이에요?" 2칸이라고 말하게 하고 네 변이 모두 2칸인지 확인한다. 넓이를 맞추려고 가로 4칸, 세로 1칸으로 만드는 학생에게는 네 변이 같지 않아서 정사각형이 아니라고 짚는다.',
      GB(5), [
        gb('넓이가 4칸인 정사각형을 만들어 보세요. 한 변은 몇 칸일까요?', { shape: 'square', area: 4 }, 0.1, { toolOptions: { showArea: true } }),
        gb('넓이가 9칸인 정사각형을 만들어 보세요.', { shape: 'square', area: 9 }, 0.15, { toolOptions: { showArea: true } }),
        gb('넓이가 16칸인 정사각형을 만들어 보세요. 한 변은 몇 칸일까요?', { shape: 'square', area: 16 }, 0.25, { toolOptions: { showArea: true }, reveal: 'after-check', conclude: '네 변이 모두 4칸이면 넓이는 16칸이에요. 가로와 세로가 같아야 정사각형이에요.' }),
      ]),
    act('a3', '활동 3. 정다각형에 대한 바른 말 고르기', 8, 'mindmap', '정다각형의 뜻을 바르게 말한 카드만 바구니에 담아요.',
      '"변의 길이만 같으면 정다각형일까요?" 마름모를 떠올려 아니라고 말하게 한다. 각의 크기만 같으면 된다고 하는 학생에게는 직사각형 그림을 보여 주며 변의 길이가 다름을 짚는다.',
      MM('pick', '정다각형 설명'), [
        { prompt: '정다각형이 되려면 꼭 필요한 것을 바르게 말한 카드를 모두 골라 보세요.', toolOptions: { basket: '꼭 필요한 것', cards: [{ id: 'a', text: '변의 길이가 모두 같아요' }, { id: 'b', text: '각의 크기가 모두 같아요' }, { id: 'c', text: '변의 길이만 같으면 돼요', why: '마름모는 변이 같아도 각의 크기가 달라서 정다각형이 아니에요.' }, { id: 'd', text: '각의 크기만 같으면 돼요', why: '직사각형은 각이 같아도 변의 길이가 달라서 정다각형이 아니에요.' }] }, target: { pick: ['a', 'b'] }, difficulty: 0.15 },
        { prompt: '정다각형인 도형 이름을 모두 골라 보세요.', toolOptions: { basket: '정다각형', cards: [{ id: 'a', text: '정삼각형' }, { id: 'b', text: '직사각형', why: '네 각은 같지만 변의 길이가 달라요.' }, { id: 'c', text: '정사각형' }, { id: 'd', text: '마름모', why: '네 변은 같지만 각의 크기가 달라요.' }, { id: 'e', text: '정오각형' }] }, target: { pick: ['a', 'c', 'e'] }, difficulty: 0.18 },
        { prompt: '더 해 보기: 마름모가 정다각형이 아닌 까닭을 바르게 말한 카드를 골라 보세요.', toolOptions: { basket: '바른 까닭', cards: [{ id: 'a', text: '네 변은 같지만 각의 크기가 달라요' }, { id: 'b', text: '각은 같지만 변의 길이가 달라요', why: '그것은 직사각형의 경우예요.' }, { id: 'c', text: '변이 5개예요', why: '마름모는 변이 4개예요.' }, { id: 'd', text: '곧은 선으로 둘러싸이지 않았어요', why: '마름모도 곧은 선으로 둘러싸인 다각형이에요.' }] }, target: { pick: ['a'] }, extra: true, difficulty: 0.25 },
      ]),
  ],
  wrap: ['"정다각형이 되려면 무엇이 같아야 할까요? 직사각형이 정다각형이 아닌 까닭도 말해 볼까요?" 변과 각 두 가지를 모두 말하는지 듣는다. 출구 1번에서 변의 길이만 고른 학생은 4차시 처음에 마름모와 정사각형을 다시 견준다.', [
    { type: 'choice', prompt: '정다각형이 되려면 어떤 조건이 필요한가요?', options: ['변의 길이도 같고 각의 크기도 같아야 해요', '변의 길이만 같으면 돼요', '각의 크기만 같으면 돼요'], answer: 0, difficulty: 0.12, explain: '정다각형은 변의 길이가 모두 같고 각의 크기도 모두 같은 다각형이에요.' },
    { type: 'tool', tool: 'shapes', options: { mode: 'classify', cards: [card('x', 'pentagon', 20), card('y', 'rectangle', 15)], bins: ['정다각형이에요', '정다각형이 아니에요'] }, state: {}, prompt: '도형 카드를 정다각형인지 아닌지 나누세요.', target: { bins: { x: 0, y: 1 } }, difficulty: 0.15 },
    { type: 'choice', prompt: '직사각형이 정다각형이 아닌 까닭은 무엇인가요?', options: ['네 변의 길이가 모두 같지 않아서', '각이 직각이 아니어서', '변이 4개가 아니어서'], answer: 0, difficulty: 0.2, explain: '직사각형은 네 각이 같지만 가로와 세로의 길이가 달라요.' },
  ]],
  ws: { title: '정다각형 가려내기', items: [
    { type: 'figure', wide: true, prompt: '점판 도형이 정다각형이면 ○, 아니면 ×를 쓰세요.', tool: 'shapes', options: { mode: 'geoboard', size: 5 }, figures: [{ state: { pts: SQ2 }, caption: '( )' }, { state: { pts: RECT }, caption: '( )' }], answer: '○, ×' },
    { type: 'table', prompt: '변의 길이와 각의 크기가 모두 같은지 ○, ×로 쓰세요.', columns: ['도형', '정삼각형', '직사각형', '마름모', '정사각형'], cells: [['변의 길이가 모두 같은가요?', '○', '×', '', ''], ['각의 크기가 모두 같은가요?', '○', '', '', '']], answer: '○, ○ / ○, ×, ○' },
    { type: 'choice', prompt: '정다각형에 ○ 하세요.', options: ['직사각형', '마름모', '정사각형'], answer: '정사각형' },
    { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '정다각형은 변의 길이가 모두 같고 ______의 크기도 모두 같은 다각형이에요.', answer: '각' },
    { type: 'short', prompt: '마름모가 정다각형이 아닌 까닭을 써 보세요.' },
  ], easy: { note: '정다각형은 변도 같고 각도 같아요. 두 가지를 하나씩 확인해요.', items: [
    { type: 'figure', wide: true, prompt: '점판 도형이 정다각형이면 ○, 아니면 ×를 쓰세요.', tool: 'shapes', options: { mode: 'geoboard', size: 5 }, figures: [{ state: { pts: SQ2 }, caption: '( )' }], answer: '○' },
    { type: 'choice', prompt: '변의 길이가 모두 같은 도형에 ○ 하세요.', options: ['정사각형', '직사각형'], answer: '정사각형' },
    { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '변과 ______이 모두 같은 다각형이 정다각형이에요.', answer: '각' },
    { type: 'draw', prompt: '정사각형을 하나 그리고 네 변의 길이를 같게 표시해 보세요.' },
  ] } },
  diff: { easy: '점판에 직각 표시가 보이고 카드가 칸에 들어갈 때 바로 맞는지 알려 줘요.', base: '변과 각 두 조건을 확인하며 가려요.', challenge: '돌려 놓은 카드와 변이 여덟 개인 카드도 가려내요.' },
  notes: '자주 보이는 어려움: ① 변의 길이만 같으면 정다각형이라고 한다(마름모) → 각의 크기도 견준다. ② 각이 같으면 정다각형이라고 한다(직사각형) → 변의 길이도 견준다. ③ 돌려 놓은 정다각형을 정다각형이 아니라고 한다 → 돌려도 변과 각은 그대로다. 정다각형의 이름과 둘레는 4차시에서 한다.',
}));

// ───────────────────────────── 4차시 (core · application) ─────────────────────────────
L.push(lesson(4, {
  title: '정삼각형부터 정팔각형까지 이름과 둘레 알아보기',
  objective: '변의 수에 따라 정다각형의 이름을 붙이고, 점판의 도형이 정다각형인지 가리며, 정다각형의 둘레를 변의 수와 한 변의 길이로 구할 수 있다.',
  desc: 'a row of paper regular polygons from a triangle to an octagon with a child wrapping a string around the hexagon to measure its edge',
  text: '정다각형의 이름은?',
  layers: [{ motif: 'house', x: 120, y: 214 }, { motif: 'flower', x: 380, y: 232 }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"변이 3개인 정다각형은 정삼각형, 4개는 정사각형이에요. 변이 5개인 정다각형은 뭐라고 부를까요?" 이름이 정과 변의 수에서 온다는 것을 보여 준다. 변이 같은 수라서 모양도 모두 같다고 말하는 학생이 있다 — 변이 6개이면 육각형이지만 변과 각이 모두 같아야 정육각형이라고 짚는다.', '내가 아는 정다각형 이름을 하나 말해 봐요.'],
  acts: [
    act('a1', '활동 1. 정다각형 이름과 변의 수 짝짓기', 9, 'mindmap', '변의 수와 변·각의 성질을 읽고 알맞은 정다각형 이름과 이어요.',
      '"변이 6개이고 변과 각이 모두 같으면 무슨 도형일까요?" 정육각형이라고 말하게 한다. 육각형이면 모두 정육각형이라고 말하는 학생에게는 변과 각이 모두 같아야 정다각형임을 다시 짚는다.',
      MM('match', '정다각형 이름'), [
        { prompt: '변의 수와 성질을 읽고 알맞은 정다각형 이름과 이어 보세요.', toolOptions: { slots: [{ id: 's3', label: '정삼각형' }, { id: 's4', label: '정사각형' }, { id: 's5', label: '정오각형' }], cards: [{ id: 'c3', text: '변 3개, 변과 각이 모두 같아요' }, { id: 'c4', text: '변 4개, 변과 각이 모두 같아요' }, { id: 'c5', text: '변 5개, 변과 각이 모두 같아요' }, { id: 'c6', text: '변 6개, 변의 길이만 같아요', why: '변과 각이 모두 같아야 정다각형이에요.' }] }, target: { match: { s3: 'c3', s4: 'c4', s5: 'c5' } }, difficulty: 0.1 },
        { prompt: '변의 수를 보고 알맞은 정다각형 이름과 이어 보세요.', toolOptions: { slots: [{ id: 't6', label: '변이 6개인 정다각형' }, { id: 't8', label: '변이 8개인 정다각형' }, { id: 't3', label: '변이 3개인 정다각형' }], cards: [{ id: 'd6', text: '정육각형' }, { id: 'd8', text: '정팔각형' }, { id: 'd3', text: '정삼각형' }, { id: 'd5', text: '정오각형', why: '정오각형은 변이 5개예요.' }] }, target: { match: { t6: 'd6', t8: 'd8', t3: 'd3' } }, difficulty: 0.15 },
        { prompt: '정다각형의 변·꼭짓점·각의 수를 알맞은 수 카드와 이어 보세요.', toolOptions: { slots: [{ id: 'e5', label: '정오각형의 각의 수' }, { id: 'e6', label: '정육각형의 꼭짓점의 수' }, { id: 'e8', label: '정팔각형의 변의 수' }], cards: [{ id: 'f5', text: '5개' }, { id: 'f6', text: '6개' }, { id: 'f8', text: '8개' }, { id: 'f7', text: '7개', why: '7개이면 칠각형이에요.' }] }, target: { match: { e5: 'f5', e6: 'f6', e8: 'f8' } }, difficulty: 0.18,
          conclude: '정다각형은 변, 꼭짓점, 각의 수가 모두 같아요.' },
      ]),
    act('a2', '활동 2. 점판 도형이 정다각형인지 가리기', 9, 'shapes', '점판의 도형이 변의 길이도 같고 각의 크기도 같은지 살펴 정다각형인지 골라요.',
      '"네 변이 모두 같아요. 각도 모두 같을까요?" 각의 크기를 견주어 보게 한다. 기울어져 있어서 정사각형이 아니라고 말하는 학생에게는 돌려 놓아도 변과 각은 그대로라고 말해 준다. 변이 6개라서 정육각형이라고 하는 학생에게는 변의 길이를 하나씩 견주게 한다.',
      GBR, [
        rdp('점판 도형이 정다각형인지 골라 보세요.', SQ2, '이 도형은 정다각형인가요?', ['정다각형이에요', '정다각형이 아니에요'], 0, 0.1),
        rdp('네 변의 길이가 모두 같은 도형이에요. 정다각형인지 골라 보세요.', RHOM, '이 도형은 정다각형인가요?', ['정다각형이에요', '정다각형이 아니에요'], 1, 0.2,
          { conclude: '변은 모두 같지만 각의 크기가 달라서 정다각형이 아니에요.' }),
        rdp('네 각이 모두 직각인 도형이에요. 정다각형인지 골라 보세요.', RECT, '이 도형은 정다각형인가요?', ['정다각형이에요', '정다각형이 아니에요'], 1, 0.15),
        rdp('더 해 보기: 변이 6개인 도형이에요. 정육각형인지 골라 보세요.', HEX, '이 도형은 정육각형인가요?', ['정육각형이에요', '정육각형이 아니에요'], 1, 0.22, { extra: true }),
      ]),
    act('a3', '활동 3. 정다각형의 둘레 구하기', 8, 'mindmap', '정다각형은 변의 길이가 모두 같아서 (한 변의 길이) × (변의 수)로 둘레를 구해요.',
      '"한 변이 7cm인 정삼각형은 변이 3개예요. 둘레는 어떻게 구할까요?" 7을 3번 더하거나 7 곱하기 3이라고 말하게 한다. 한 변의 길이만 답하는 학생에게는 둘레는 둘러싼 길이 전체라고 짚고, 변이 모두 같으니 같은 수를 변의 수만큼 더하면 된다고 말해 준다.',
      MM('match', '정다각형 둘레'), [
        { prompt: '정다각형의 둘레를 알맞은 길이 카드와 이어 보세요.', toolOptions: { slots: [{ id: 'p3', label: '한 변이 7cm인 정삼각형의 둘레' }, { id: 'p4', label: '한 변이 5cm인 정사각형의 둘레' }, { id: 'p5', label: '한 변이 3cm인 정오각형의 둘레' }], cards: [{ id: 'k21', text: '21 cm' }, { id: 'k20', text: '20 cm' }, { id: 'k15', text: '15 cm' }, { id: 'k18', text: '18 cm', why: '변의 수와 한 변의 길이를 곱해 보세요.' }] }, target: { match: { p3: 'k21', p4: 'k20', p5: 'k15' } }, difficulty: 0.18 },
        { prompt: '정다각형의 둘레를 알맞은 길이 카드와 이어 보세요.', toolOptions: { slots: [{ id: 'q6', label: '한 변이 4cm인 정육각형의 둘레' }, { id: 'q8', label: '한 변이 2cm인 정팔각형의 둘레' }, { id: 'q3', label: '한 변이 9cm인 정삼각형의 둘레' }], cards: [{ id: 'm24', text: '24 cm' }, { id: 'm16', text: '16 cm' }, { id: 'm27', text: '27 cm' }, { id: 'm18', text: '18 cm', why: '정삼각형은 변이 3개라서 9를 3번 더해요.' }] }, target: { match: { q6: 'm24', q8: 'm16', q3: 'm27' } }, difficulty: 0.22 },
        { prompt: '더 해 보기: 둘레를 보고 한 변의 길이를 알맞은 카드와 이어 보세요.', toolOptions: { slots: [{ id: 'r1', label: '둘레가 42cm인 정육각형의 한 변' }, { id: 'r2', label: '둘레가 36cm인 정사각형의 한 변' }, { id: 'r3', label: '둘레가 40cm인 정팔각형의 한 변' }], cards: [{ id: 'n7', text: '7 cm' }, { id: 'n9', text: '9 cm' }, { id: 'n5', text: '5 cm' }, { id: 'n6', text: '6 cm', why: '둘레를 변의 수로 나누어 보세요.' }] }, target: { match: { r1: 'n7', r2: 'n9', r3: 'n5' } }, extra: true, difficulty: 0.28 },
      ]),
  ],
  wrap: ['"정다각형의 둘레는 어떻게 구하나요? 정육각형이면 한 변을 몇 번 더할까요?" 변의 수만큼 더한다는 말이 나오는지 듣는다. 출구 3번에서 12 cm를 고른 학생은 변의 수 3을 곱하지 않고 2배만 한 것이므로 5차시 처음에 변을 하나씩 짚으며 더하게 한다.', [
    { type: 'choice', prompt: '변이 5개인 정다각형의 이름은 무엇인가요?', options: ['정오각형', '정육각형', '정사각형'], answer: 0, difficulty: 0.08, explain: '변이 5개이고 변과 각이 모두 같으면 정오각형이에요.' },
    { type: 'tool', tool: 'shapes', options: { mode: 'geoboard', size: 5, readOnly: true, showCounts: false, ask: { q: '이 도형은 정다각형인가요?', choices: ['정다각형이에요', '정다각형이 아니에요'] } }, state: { pts: QUAD }, prompt: '기울어져 있어도 변과 각이 모두 같은지 살펴 골라 보세요.', target: { pick: 0 }, difficulty: 0.2 },
    { type: 'choice', prompt: '한 변이 6cm인 정삼각형의 둘레는 몇 cm인가요?', options: ['9 cm', '12 cm', '18 cm'], answer: 2, difficulty: 0.15, explain: '변이 3개이고 모두 6cm라서 6 곱하기 3은 18이에요.' },
  ]],
  ws: { title: '정다각형의 이름과 둘레', items: [
    { type: 'table', prompt: '정다각형의 변의 수와 한 변이 2cm일 때의 둘레를 빈칸에 쓰세요.', columns: ['정다각형', '정삼각형', '정사각형', '정오각형', '정육각형'], cells: [['변의 수(개)', '3', '4', '', ''], ['둘레(cm)', '6', '', '', '']], answer: '5, 6 / 8, 10, 12' },
    { type: 'figure', wide: true, prompt: '점판 도형이 정다각형이면 ○, 아니면 ×를 쓰세요.', tool: 'shapes', options: { mode: 'geoboard', size: 5 }, figures: [{ state: { pts: RHOM }, caption: '( )' }, { state: { pts: QUAD }, caption: '( )' }], answer: '×, ○' },
    { type: 'choice', prompt: '변이 8개인 정다각형에 ○ 하세요.', options: ['정육각형', '정팔각형', '정오각형'], answer: '정팔각형' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '한 변이 4cm인 정오각형의 둘레는 ______cm예요.', answer: '20' },
    { type: 'draw', prompt: '한 변이 3cm인 정삼각형을 자로 재어 그려 보세요.' },
  ], easy: { note: '정다각형은 변의 길이가 모두 같아서 (한 변) × (변의 수)가 둘레예요.', items: [
    { type: 'table', prompt: '한 변이 2cm인 정삼각형의 둘레를 구해 쓰세요.', columns: ['변의 수(개)', '한 변(cm)', '둘레(cm)'], cells: [['3', '2', '']], answer: '6' },
    { type: 'choice', prompt: '변이 4개인 정다각형에 ○ 하세요.', options: ['정삼각형', '정사각형'], answer: '정사각형' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '한 변이 5cm인 정사각형의 둘레는 ______cm예요.', answer: '20' },
    { type: 'draw', prompt: '한 변이 2cm인 정사각형을 그려 보세요.' },
  ] } },
  diff: { easy: '점판에 직각 표시가 보이고 카드가 칸에 들어갈 때 바로 맞는지 알려 줘요.', base: '이름과 변의 수를 짝짓고 둘레를 구해요.', challenge: '둘레에서 거꾸로 한 변의 길이를 구해요.' },
  notes: '자주 보이는 어려움: ① 육각형이면 모두 정육각형이라고 한다 → 변과 각이 모두 같아야 정다각형. ② 기울어진 정사각형을 정사각형이 아니라고 한다 → 돌려 놓아도 그대로. ③ 둘레를 구할 때 변의 수를 빠뜨리고 한 변만 답한다 → 변을 하나씩 짚으며 더한다. 이웃하지 않는 꼭짓점을 잇는 대각선은 5차시에서 한다.',
}));
// ───────────────────────────── 5차시 (practice · application) ─────────────────────────────
L.push(lesson(5, {
  title: '이웃하지 않는 꼭짓점을 이은 대각선 세기',
  objective: '대각선이 이웃하지 않는 두 꼭짓점을 이은 선분임을 알고, 사각형·오각형·육각형의 대각선 수와 한 꼭짓점에서 그을 수 있는 대각선 수를 구할 수 있다.',
  desc: 'a paper pentagon on a table with colored ribbons stretched between its far corners, and a child counting the ribbons',
  text: '꼭짓점과 꼭짓점을 이어요',
  layers: [{ motif: 'flower', x: 110, y: 232 }, { motif: 'house', x: 380, y: 216, color: 'buttercup' }, { motif: 'star', x: 250, y: 84, s: 0.6 }],
  intro: ['"사각형의 꼭짓점 A와 C를 이은 선은 변일까요, 아닐까요?" 사각형 ABCD에 리본 두 개를 걸어 보인다. 이웃한 꼭짓점을 이은 선은 변이고 이웃하지 않는 두 꼭짓점을 이은 선분이 대각선이라고 말해 준다. 이웃한 꼭짓점을 이은 선도 대각선이라고 하는 학생이 많다 — 변을 먼저 지우고 남은 연결을 세게 한다.', '교실 바닥의 사각형 타일에서 마주 보는 모서리를 이어 보는 흉내를 내 봐요.'],
  acts: [
    act('a1', '활동 1. 다각형의 대각선이 모두 몇 개인지 세기', 9, 'shapes', '이웃하지 않는 두 꼭짓점을 이은 선분이 대각선이에요. 빠뜨리거나 겹치지 않게 세어 봐요.',
      '"꼭짓점 A에서 그을 수 있는 대각선을 먼저 모두 세고, 다음 꼭짓점으로 가 볼까요?" 한 꼭짓점씩 차례로 세게 한다. 같은 대각선을 두 번 세어 18개라고 하는 학생에게는 AC와 CA가 같은 선분임을 짚는다.',
      GBR, [
        rdn('이웃하지 않는 두 꼭짓점을 이은 선분이 대각선이에요. 이 사각형의 대각선은 모두 몇 개인가요?', RECT, '대각선은 모두 몇 개인가요?', '개', 2, 0.1),
        rdn('이 오각형의 대각선은 모두 몇 개인지 써 보세요.', PENT, '대각선은 모두 몇 개인가요?', '개', 5, 0.2),
        rdn('이 육각형의 대각선은 모두 몇 개인지 써 보세요. 같은 선분을 두 번 세지 않아요.', HEX, '대각선은 모두 몇 개인가요?', '개', 9, 0.3,
          { conclude: '한 꼭짓점에서 3개씩 6개의 꼭짓점이면 18개인데 같은 선분을 두 번 세었으니 반으로 나누어 9개예요.' }),
      ]),
    act('a2', '활동 2. 한 꼭짓점에서 그을 수 있는 대각선 수 알아보기', 9, 'shapes', '한 꼭짓점에서 자기 자신과 이웃한 두 꼭짓점을 빼고 나머지 꼭짓점으로 그을 수 있어요.',
      '"한 꼭짓점에서 선을 그을 수 없는 꼭짓점은 어디일까요?" 자기 자신과 양옆의 이웃한 꼭짓점이라고 말하게 한다. 꼭짓점이 5개이니 4개를 그을 수 있다고 하는 학생에게는 이웃한 두 꼭짓점은 변이라고 짚는다.',
      GBR, [
        rdn('이 오각형의 한 꼭짓점에서 그을 수 있는 대각선은 몇 개인지 써 보세요.', PENT2, '한 꼭짓점에서 대각선을 몇 개 그을 수 있나요?', '개', 2, 0.15),
        rdn('이 사각형의 한 꼭짓점에서 그을 수 있는 대각선은 몇 개인지 써 보세요.', QUAD, '한 꼭짓점에서 대각선을 몇 개 그을 수 있나요?', '개', 1, 0.1),
        rdn('이 팔각형의 한 꼭짓점에서 그을 수 있는 대각선은 몇 개인지 써 보세요.', OCT, '한 꼭짓점에서 대각선을 몇 개 그을 수 있나요?', '개', 5, 0.25,
          { conclude: '꼭짓점 8개에서 자기 자신과 이웃한 두 꼭짓점을 빼면 5개예요.' }),
      ]),
    act('a3', '활동 3. 대각선과 변 가르기', 8, 'mindmap', '선분의 이름을 보고 이웃한 꼭짓점을 이었으면 변, 이웃하지 않은 꼭짓점을 이었으면 대각선 칸에 넣어요.',
      '"사각형 ABCD에서 선분 AB와 선분 AC는 어떻게 다르지요?" B는 A의 이웃이고 C는 이웃이 아니라고 말하게 한다. 선분 AD를 대각선이라고 하는 학생에게는 처음과 끝 꼭짓점도 이웃임을 보여 준다.',
      MM('sort', '대각선과 변'), [
        { prompt: '사각형 ABCD의 선분을 대각선과 변으로 나누어 보세요. 꼭짓점은 A, B, C, D 순서예요.', toolOptions: { slots: [{ id: 'dg', label: '대각선' }, { id: 'sd', label: '변' }], cards: [{ id: 'a', text: '선분 AB' }, { id: 'b', text: '선분 AC' }, { id: 'c', text: '선분 BD' }, { id: 'd', text: '선분 CD' }] }, target: { sort: { dg: ['b', 'c'], sd: ['a', 'd'] } }, difficulty: 0.15 },
        { prompt: '오각형 ABCDE의 선분을 대각선과 변으로 나누어 보세요. 꼭짓점은 A부터 E까지 차례로 있어요.', toolOptions: { slots: [{ id: 'dg', label: '대각선' }, { id: 'sd', label: '변' }], cards: [{ id: 'a', text: '선분 AC' }, { id: 'b', text: '선분 DE' }, { id: 'c', text: '선분 BE' }, { id: 'd', text: '선분 EA' }] }, target: { sort: { dg: ['a', 'c'], sd: ['b', 'd'] } }, difficulty: 0.2 },
        { prompt: '육각형 ABCDEF의 선분을 대각선과 변으로 나누어 보세요. 꼭짓점은 A부터 F까지 차례로 있어요.', toolOptions: { slots: [{ id: 'dg', label: '대각선' }, { id: 'sd', label: '변' }], cards: [{ id: 'a', text: '선분 AD' }, { id: 'b', text: '선분 FA' }, { id: 'c', text: '선분 CE' }, { id: 'd', text: '선분 BC' }, { id: 'e', text: '선분 BF' }] }, target: { sort: { dg: ['a', 'c', 'e'], sd: ['b', 'd'] } }, difficulty: 0.28,
          conclude: '이웃한 꼭짓점을 이은 선분은 변이고, 이웃하지 않은 꼭짓점을 이은 선분이 대각선이에요.' },
      ]),
  ],
  wrap: ['"대각선은 어떤 선분일까요? 사각형에는 대각선이 몇 개 있을까요?" 이웃하지 않는 두 꼭짓점을 이은 선분이라는 말이 나오는지 듣는다. 출구 1번에서 4개를 고른 학생은 변을 센 것이므로 6차시 처음에 변과 대각선을 다시 가른다.', [
    { type: 'choice', prompt: '사각형의 대각선은 모두 몇 개인가요?', options: ['2개', '4개', '6개'], answer: 0, difficulty: 0.1, explain: '꼭짓점 4개 가운데 마주 보는 두 쌍을 이으면 대각선이 2개예요.' },
    { type: 'choice', prompt: '대각선은 어떤 선분인가요?', options: ['이웃하지 않는 두 꼭짓점을 이은 선분', '이웃한 두 꼭짓점을 이은 선분', '변의 가운데를 이은 선분'], answer: 0, difficulty: 0.1, explain: '이웃한 꼭짓점을 이으면 변이고, 이웃하지 않은 꼭짓점을 이으면 대각선이에요.' },
    { type: 'tool', tool: 'shapes', options: { mode: 'geoboard', size: 5, readOnly: true, showCounts: false, askNum: { q: '한 꼭짓점에서 대각선을 몇 개 그을 수 있나요?', unit: '개' } }, state: { pts: [[1, 0], [3, 0], [4, 1], [4, 3], [2, 4], [0, 3], [0, 1]] }, prompt: '칠각형의 한 꼭짓점에서 그을 수 있는 대각선은 몇 개인지 써 보세요.', target: { num: 4 }, difficulty: 0.25 },
  ]],
  ws: { title: '대각선 세기', items: [
    { type: 'table', prompt: '다각형의 꼭짓점 수와 한 꼭짓점에서 그을 수 있는 대각선 수를 빈칸에 쓰세요.', columns: ['다각형', '사각형', '오각형', '육각형'], cells: [['꼭짓점의 수(개)', '4', '', ''], ['한 꼭짓점의 대각선(개)', '1', '', '']], answer: '5, 6 / 2, 3' },
    { type: 'figure', wide: true, prompt: '점판 도형의 대각선은 모두 몇 개인지 세어 쓰세요.', tool: 'shapes', options: { mode: 'geoboard', size: 5 }, figures: [{ state: { pts: PENT }, caption: '대각선 ___개' }, { state: { pts: HEX }, caption: '대각선 ___개' }], answer: '5개, 9개' },
    { type: 'choice', prompt: '오각형 ABCDE에서 대각선에 ○ 하세요.', options: ['선분 AB', '선분 AC', '선분 DE'], answer: '선분 AC' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '육각형의 한 꼭짓점에서 그을 수 있는 대각선은 ______개예요.', answer: '3' },
    { type: 'draw', prompt: '사각형을 하나 그리고 대각선을 모두 그려 보세요. 대각선은 몇 개인가요?' },
  ], easy: { note: '이웃한 꼭짓점을 이으면 변, 이웃하지 않은 꼭짓점을 이으면 대각선이에요.', items: [
    { type: 'figure', wide: true, prompt: '점판 사각형의 대각선은 몇 개인지 세어 쓰세요.', tool: 'shapes', options: { mode: 'geoboard', size: 5 }, figures: [{ state: { pts: RECT }, caption: '대각선 ___개' }], answer: '2개' },
    { type: 'choice', prompt: '대각선에 ○ 하세요. 사각형 ABCD예요.', options: ['선분 AB', '선분 AC'], answer: '선분 AC' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '사각형의 한 꼭짓점에서 그을 수 있는 대각선은 ______개예요.', answer: '1' },
    { type: 'draw', prompt: '오각형을 하나 그리고 한 꼭짓점에서 그을 수 있는 대각선을 모두 그려 보세요.' },
  ] } },
  diff: { easy: '점판 도형의 꼭짓점이 보이고 한 꼭짓점씩 차례로 세요.', base: '대각선 수와 한 꼭짓점의 대각선 수를 구해요.', challenge: '변이 많은 도형에서 빠뜨리거나 겹치지 않게 세요.' },
  notes: '자주 보이는 어려움: ① 이웃한 꼭짓점을 이은 선도 대각선이라고 한다 → 변을 먼저 지운다. ② 같은 대각선을 두 번 센다(육각형에서 18개) → AC와 CA는 같은 선분. ③ 한 꼭짓점에서 모든 다른 꼭짓점으로 그을 수 있다고 한다(오각형에서 4개) → 이웃한 두 꼭짓점은 변이라서 뺀다. 칠교 조각으로 모양을 만드는 일은 6차시에서 한다.',
}));
// ───────────────────────────── 6차시 (core · concept) ─────────────────────────────
L.push(lesson(6, {
  title: '칠교 조각 두 개를 붙여 새 모양 만들기',
  objective: '같은 작은 삼각형 조각 두 개를 붙여 삼각형, 정사각형, 평행사변형을 만들고, 만들어진 모양의 이름을 말할 수 있다.',
  desc: 'two small paper triangles from a tangram being pushed together into a square, a triangle and a parallelogram on a desk',
  text: '두 조각을 붙이면?',
  layers: [{ motif: 'house', x: 120, y: 214 }, { motif: 'tree', x: 370, y: 216 }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"칠교 조각 가운데 작은 삼각형 두 개를 붙이면 어떤 모양이 될까요?" 조각 두 개를 붙여 삼각형이 되고, 방향을 바꿔 붙이면 정사각형이 되는 모습을 시연한다. 같은 조각이면 항상 같은 모양이 된다고 말하는 학생이 있다 — 붙이는 변이 다르면 모양이 달라진다고 짚는다.', '칠교 조각이나 종이 삼각형 두 개를 붙여 어떤 모양이 되는지 상상해 봐요.'],
  demo: { tool: 'shapes', options: { mode: 'tangram', figure: 'triangle2', lines: true }, sequence: [{ fit: true }] },
  acts: [
    act('a1', '활동 1. 작은 삼각형 두 개로 그림자 채우기', 9, 'shapes', '조각을 끌어 그림자 자리에 놓아요. 조각을 고른 뒤 돌리기(R)와 뒤집기(F)로 방향을 맞춰요.',
      '"같은 삼각형 조각 두 개인데 그림자 모양이 달라요. 어디가 다를까요?" 붙이는 변이 다르다고 말하게 한다. 조각을 맞추지 못하고 겹쳐 놓는 학생에게는 조각을 돌려 변의 길이가 같은 쪽끼리 맞대게 한다.',
      TAN, [
        tn('작은 삼각형 두 조각으로 큰 삼각형 자리를 채워 보세요.', { figure: 'triangle2' }, 0.1),
        tn('같은 두 조각으로 정사각형 자리를 채워 보세요.', { figure: 'square2' }, 0.15),
        tn('같은 두 조각으로 평행사변형 자리를 채워 보세요.', { figure: 'parallelogram2' }, 0.2, { conclude: '같은 조각 두 개라도 붙이는 변에 따라 삼각형, 정사각형, 평행사변형이 돼요.' }),
      ]),
    act('a2', '활동 2. 만든 모양의 이름 말하기', 9, 'shapes', '조각으로 그림자를 채운 뒤 만들어진 도형의 이름을 골라요.',
      '"이 모양은 변이 몇 개예요? 그러면 무슨 도형일까요?" 변을 세어 이름을 정하게 한다. 조각이 두 개이니 이름도 두 개짜리 도형이라고 하는 학생에게는 둘러싼 바깥 변만 세게 한다.',
      TAN, [
        tn('작은 삼각형 두 조각으로 큰 삼각형을 채운 뒤 모양의 이름을 골라 보세요.', { figure: 'triangle2', ask: { q: '채운 모양의 이름은?', choices: ['삼각형', '정사각형', '평행사변형'] } }, 0.12, { target: { fit: true, pick: 0 } }),
        tn('두 조각으로 정사각형을 채운 뒤 모양의 이름을 골라 보세요.', { figure: 'square2', ask: { q: '채운 모양의 이름은?', choices: ['삼각형', '정사각형', '평행사변형'] } }, 0.15, { target: { fit: true, pick: 1 } }),
        tn('두 조각으로 비스듬한 모양을 채운 뒤 이름을 골라 보세요.', { figure: 'parallelogram2', ask: { q: '채운 모양의 이름은?', choices: ['평행사변형', '정사각형', '삼각형'] } }, 0.2, { target: { fit: true, pick: 0 }, conclude: '바깥 변을 세어 보면 4개이고 마주 보는 변이 평행해서 평행사변형이에요.' }),
      ]),
    act('a3', '활동 3. 모양 카드를 변의 수로 나누기', 8, 'shapes', '조각으로 만든 모양과 비슷한 도형 카드를 변의 수에 따라 알맞은 칸에 넣어요.',
      '"삼각형 조각 두 개를 붙인 모양이 사각형이 될 때 변은 몇 개가 됐나요?" 붙인 변은 안으로 들어가 바깥 변은 4개가 된다고 말하게 한다. 조각이 많아질수록 변도 많아진다고 하는 학생에게는 바깥 둘레의 변만 센다고 말해 준다.',
      CLS, [
        cls('카드를 삼각형과 사각형으로 나누어 보세요.', [card('a', 'triangle'), card('b', 'square', 45), card('c', 'parallelogram'), card('d', 'right-triangle')], ['삼각형', '사각형'], { a: 0, b: 1, c: 1, d: 0 }, 0.1),
        cls('돌려 놓은 카드도 변의 수를 세어 삼각형과 사각형으로 나누어 보세요.', [card('a', 'trapezoid'), card('b', 'obtuse-triangle'), card('c', 'rhombus'), card('d', 'triangle', 60)], ['삼각형', '사각형'], { a: 1, b: 0, c: 1, d: 0 }, 0.15),
        cls('오각형 카드도 섞여 있어요. 변의 수로 알맞은 칸에 넣어 보세요.', [card('a', 'rectangle', 30), card('b', EQTRI), card('c', 'pentagon'), card('d', 'square')], ['삼각형', '사각형', '오각형'], { a: 1, b: 0, c: 2, d: 1 }, 0.2),
      ]),
  ],
  wrap: ['"작은 삼각형 두 개를 붙여 만들 수 있는 모양 세 가지를 말해 볼까요?" 삼각형, 정사각형, 평행사변형이 나오는지 듣는다. 출구 2번에서 모양이 하나뿐이라고 고른 학생은 7차시 처음에 같은 조각으로 세 가지 모양을 다시 만든다.', [
    { type: 'tool', tool: 'shapes', options: { mode: 'tangram', figure: 'square2', lines: true }, state: {}, prompt: '삼각형 조각 두 개로 정사각형 자리를 채워 보세요.', target: { fit: true }, difficulty: 0.12 },
    { type: 'choice', prompt: '같은 삼각형 조각 두 개로 만들 수 있는 모양은 무엇인가요?', options: ['정사각형', '원', '별 모양'], answer: 0, difficulty: 0.12, explain: '삼각형 조각 두 개를 알맞게 붙이면 삼각형, 정사각형, 평행사변형을 만들 수 있어요.' },
    { type: 'choice', prompt: '같은 조각으로 다른 모양이 되는 까닭은 무엇인가요?', options: ['붙이는 변이 다르기 때문이에요', '조각의 크기가 달라지기 때문이에요', '조각의 색이 다르기 때문이에요'], answer: 0, difficulty: 0.18, explain: '어느 변끼리 붙이느냐에 따라 바깥 모양이 달라져요.' },
  ]],
  ws: { title: '조각으로 모양 만들기', items: [
    { type: 'figure', wide: true, prompt: '작은 삼각형 두 조각으로 만든 모양의 이름을 쓰세요.', tool: 'shapes', options: { mode: 'tangram' }, figures: [{ options: { figure: 'triangle2' }, caption: '___' }, { options: { figure: 'square2' }, caption: '___' }], answer: '삼각형, 정사각형' },
    { type: 'choice', prompt: '작은 삼각형 두 개를 붙여 만들 수 없는 것에 ○ 하세요.', options: ['정사각형', '큰 삼각형', '원'], answer: '원' },
    { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '같은 조각도 붙이는 ______에 따라 다른 모양이 돼요.', answer: '변' },
    { type: 'draw', prompt: '종이 삼각형 두 개를 붙여 만들 수 있는 모양을 두 가지 그리고 이름을 써 보세요.' },
    { type: 'short', prompt: '조각 두 개로 평행사변형을 만들 때 어떻게 붙였는지 써 보세요.' },
  ], easy: { note: '같은 조각도 붙이는 변이 다르면 다른 모양이 돼요.', items: [
    { type: 'figure', wide: true, prompt: '작은 삼각형 두 조각으로 만든 모양의 이름을 쓰세요.', tool: 'shapes', options: { mode: 'tangram', lines: true }, figures: [{ options: { figure: 'square2' }, caption: '___' }], answer: '정사각형' },
    { type: 'choice', prompt: '삼각형 조각 두 개로 만들 수 있는 모양에 ○ 하세요.', options: ['정사각형', '원'], answer: '정사각형' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '삼각형 조각 ______개로 정사각형을 만들어요.', answer: '2' },
    { type: 'draw', prompt: '삼각형 두 개를 붙여 사각형 하나를 그려 보세요.' },
  ] } },
  diff: { easy: '그림자 안에 조각 경계선이 보여 어느 조각이 어디로 가는지 알기 쉬워요.', base: '조각을 돌리고 뒤집어 그림자를 채우고 이름을 말해요.', challenge: '변의 수를 세어 이름을 정하고 카드를 가려요.' },
  notes: '자주 보이는 어려움: ① 같은 조각이면 같은 모양이 된다고 한다 → 붙이는 변이 다르면 달라진다. ② 조각을 돌려 보지 않고 그림자에 겹쳐 놓는다 → 조각을 고른 뒤 돌리기와 뒤집기를 쓴다. ③ 조각 수와 변의 수를 헷갈린다 → 바깥 둘레의 변만 센다. 세 조각과 일곱 조각 채우기는 7차시에서 한다.',
}));

// 중간 삼각형 두 조각으로 만드는 세 모양(단위: 칠교 정사각형 한 변의 1/4)
const SQM = [{ k: 'M', pts: [[0, 0], [2, 0], [0, 2]] }, { k: 'M', pts: [[2, 0], [2, 2], [0, 2]] }];
const TRM = [{ k: 'M', pts: [[0, 2], [2, 0], [2, 2]] }, { k: 'M', pts: [[2, 0], [4, 2], [2, 2]] }];
const PGM = [{ k: 'M', pts: [[0, 0], [2, 0], [2, 2]] }, { k: 'M', pts: [[2, 0], [4, 2], [2, 2]] }];
// ───────────────────────────── 7차시 (core · representation) ─────────────────────────────
L.push(lesson(7, {
  title: '삼각형 세 조각과 일곱 조각으로 모양 채우기',
  objective: '중간 삼각형 1개와 작은 삼각형 2개로 정사각형과 삼각형을 채우고, 조각을 돌리거나 뒤집어 알맞은 자리에 놓을 수 있다.',
  desc: 'a medium paper triangle and two small paper triangles fitting into a square outline on a desk, with a child flipping one parallelogram piece',
  text: '돌리고 뒤집어서 딱 맞게',
  layers: [{ motif: 'flower', x: 110, y: 232 }, { motif: 'house', x: 380, y: 216, color: 'buttercup' }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"중간 삼각형 하나와 작은 삼각형 둘로 정사각형을 만들 수 있을까요?" 시연으로 중간 삼각형을 먼저 놓고 작은 삼각형을 나머지 자리에 돌려 넣는 모습을 보여 준다. 조각이 안 들어가면 크기가 다르다고 생각하는 학생이 있다 — 크기는 그대로이고 방향만 돌리거나 뒤집으면 된다고 짚는다.', '조각이 안 들어갈 때 어떻게 해 보면 좋을지 말해 봐요.'],
  demo: { tool: 'shapes', options: { mode: 'tangram', figure: 'square3', lines: true }, sequence: [{ fit: true }] },
  acts: [
    act('a1', '활동 1. 세 조각·일곱 조각으로 정사각형과 삼각형 만들기', 9, 'shapes', '큰 조각부터 놓고 작은 조각으로 남은 자리를 채워요. 돌리기(R)와 뒤집기(F)를 써요.',
      '"가장 큰 조각을 먼저 놓으면 남은 자리는 어떤 모양일까요?" 남은 자리를 보고 작은 조각을 고르게 한다. 작은 삼각형을 놓다가 안 들어가면 조각을 바꾸려는 학생에게는 같은 조각을 돌려서 다시 놓게 한다.',
      TAN, [
        tn('중간 삼각형 1개와 작은 삼각형 2개로 정사각형 자리를 채워 보세요.', { figure: 'square3' }, 0.18),
        tn('같은 세 조각으로 큰 삼각형 자리를 채워 보세요.', { figure: 'triangle3' }, 0.22),
        tn('일곱 조각을 모두 써서 큰 정사각형 자리를 채워 보세요. 큰 조각부터 놓아요.', { figure: 'square7' }, 0.4),
      ]),
    act('a2', '활동 2. 채운 모양의 이름과 조각 수 말하기', 9, 'shapes', '조각으로 채운 뒤 모양의 이름을 고르거나 쓴 조각의 수를 써요.',
      '"조각은 모두 몇 개를 썼어요? 그러면 이 모양은 조각 몇 개로 만든 걸까요?" 쓴 조각을 하나씩 세게 한다. 그림자의 안쪽 선을 변으로 세어 모양이 더 복잡하다고 말하는 학생에게는 바깥 둘레만 세게 한다.',
      TAN, [
        tn('세 조각으로 정사각형 자리를 채운 뒤 쓴 조각은 모두 몇 개인지 써 보세요.', { figure: 'square3', askNum: { q: '쓴 조각은 모두 몇 개인가요?', unit: '개' } }, 0.2, { target: { fit: true, num: 3 } }),
        tn('세 조각으로 큰 삼각형 자리를 채운 뒤 모양의 이름을 골라 보세요.', { figure: 'triangle3', ask: { q: '채운 모양의 이름은?', choices: ['삼각형', '사각형', '오각형'] } }, 0.22, { target: { fit: true, pick: 0 } }),
        tn('세 조각으로 만든 정사각형이에요. 이 모양의 변은 모두 몇 개인지 써 보세요.', { figure: 'square3', askNum: { q: '바깥 변은 모두 몇 개인가요?', unit: '개' } }, 0.25, { target: { fit: true, num: 4 }, conclude: '조각은 3개를 썼지만 바깥 변은 4개예요. 조각 수와 변의 수는 달라요.' }),
      ]),
    act('a3', '활동 3. 돌리고 뒤집어 한 조각 맞추기', 8, 'shapes', '조각이 그림자와 모양은 같은데 방향이 달라요. 돌리거나 뒤집어서 맞춰요.',
      '"조각을 뒤집으면 크기가 바뀔까요, 방향만 바뀔까요?" 방향만 바뀐다고 말하게 한다. 평행사변형 조각이 안 맞는다고 다른 조각을 찾는 학생에게는 뒤집기(F)를 눌러 보게 한다. 삼각형 조각은 돌리기만 해도 맞는지 먼저 살피게 한다.',
      TAN, [
        tn('평행사변형 조각 하나가 그림자와 방향이 반대예요. 뒤집어서 맞춰 보세요.', { slots: [{ k: 'P', pts: [[4, 4], [3, 3], [1, 3], [2, 4]] }], pieces: ['P'] }, 0.25, { reveal: 'after-check' }),
        tn('중간 삼각형 조각 하나를 돌려서 그림자 자리에 맞춰 보세요.', { slots: [{ k: 'M', pts: [[0, 0], [2, 0], [0, 2]] }], pieces: ['M'] }, 0.18),
        tn('더 해 보기: 작은 삼각형 조각 하나를 돌려서 그림자 자리에 맞춰 보세요.', { slots: [{ k: 'S', pts: [[0, 0], [2, 0], [1, 1]] }], pieces: ['S'] }, 0.2, { extra: true }),
      ]),
  ],
  wrap: ['"조각이 안 들어갈 때 어떻게 하면 될까요?" 돌리거나 뒤집어 본다는 말이 나오는지 듣는다. 출구 2번에서 크기가 달라진다고 고른 학생은 8차시 처음에 조각을 돌려 크기가 그대로임을 손으로 보여 준다.', [
    { type: 'choice', prompt: '중간 삼각형 1개와 작은 삼각형 2개로 만든 정사각형의 조각은 모두 몇 개인가요?', options: ['2개', '3개', '4개'], answer: 1, difficulty: 0.1, explain: '중간 삼각형 1개와 작은 삼각형 2개를 합하면 조각은 모두 3개예요.' },
    { type: 'choice', prompt: '조각을 뒤집으면 어떻게 되나요?', options: ['모양과 크기는 그대로이고 방향만 달라져요', '크기가 커져요', '넓이가 달라져요'], answer: 0, difficulty: 0.15, explain: '뒤집기와 돌리기는 방향만 바꾸고 크기와 모양은 그대로예요.' },
    { type: 'tool', tool: 'shapes', options: { mode: 'tangram', figure: 'triangle3', lines: true }, state: {}, prompt: '삼각형 조각 세 개로 큰 삼각형 자리를 채워 보세요.', target: { fit: true }, difficulty: 0.2 },
  ]],
  ws: { title: '세 조각과 일곱 조각', items: [
    { type: 'figure', wide: true, prompt: '세 조각으로 채워진 모양이에요. 쓰인 조각은 모두 몇 개인지 쓰세요.', tool: 'shapes', options: { mode: 'tangram' }, figures: [{ options: { figure: 'square3' }, caption: '조각 ___개' }, { options: { figure: 'triangle3' }, caption: '조각 ___개' }], answer: '3개, 3개' },
    { type: 'table', prompt: '정사각형을 채운 조각의 개수를 빈칸에 쓰세요.', columns: ['조각', '중간 삼각형', '작은 삼각형', '모두'], cells: [['개수(개)', '1', '', '']], answer: '2, 3' },
    { type: 'choice', prompt: '조각이 그림자와 맞지 않을 때 해 볼 일에 ○ 하세요.', options: ['돌리거나 뒤집어 본다', '조각을 자른다', '그림자를 바꾼다'], answer: '돌리거나 뒤집어 본다' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '칠교 조각은 모두 ______개이고, 일곱 조각으로 큰 정사각형을 만들 수 있어요.', answer: '7' },
    { type: 'draw', prompt: '삼각형 세 개로 큰 삼각형을 만들 때 조각의 경계선을 그려 보세요.' },
  ], easy: { note: '조각이 안 들어가면 돌리거나 뒤집어 봐요. 크기는 그대로예요.', items: [
    { type: 'figure', wide: true, prompt: '세 조각으로 채워진 모양이에요. 조각의 개수를 쓰세요.', tool: 'shapes', options: { mode: 'tangram', lines: true }, figures: [{ options: { figure: 'square3' }, caption: '조각 ___개' }], answer: '3개' },
    { type: 'choice', prompt: '조각을 돌리면 무엇이 바뀌나요?', options: ['방향', '크기'], answer: '방향' },
    { type: 'blank', prompt: '빈칸에 알맞은 수를 쓰세요.', text: '작은 삼각형 2개와 중간 삼각형 1개를 합하면 ______개예요.', answer: '3' },
    { type: 'draw', prompt: '삼각형 조각 두 개로 만든 정사각형의 경계선을 그려 보세요.' },
  ] } },
  diff: { easy: '그림자 안에 조각 경계선이 보여요.', base: '조각을 돌리고 뒤집어 세 조각을 채워요.', challenge: '안내선 없이 일곱 조각까지 채우고 돌리거나 뒤집을 때를 스스로 정해요.' },
  notes: '자주 보이는 어려움: ① 조각이 안 들어가면 조각 크기가 달라서라고 한다 → 크기는 그대로, 방향만 돌리거나 뒤집는다. ② 쓴 조각의 수와 바깥 변의 수를 헷갈린다(조각 3개, 변 4개) → 바깥 둘레만 센다. ③ 뒤집기를 써 보지 않고 포기한다 → 평행사변형 조각은 뒤집어야 맞는 경우가 있다. 같은 조각으로 여러 모양 만들기는 8차시에서 한다.',
}));
// ───────────────────────────── 8차시 (practice · representation) ─────────────────────────────
L.push(lesson(8, {
  title: '같은 두 조각으로 여러 모양 만들고 빈틈없이 채우기',
  objective: '중간 삼각형 두 개로 정사각형, 큰 삼각형, 평행사변형을 만들고, 정삼각형·정사각형·정육각형은 빈틈없이 채워지고 원·정오각형은 빈틈이 생김을 말할 수 있다.',
  desc: 'a floor covered with paper hexagon and square tiles without gaps beside a round plate that leaves empty corners',
  text: '빈틈없이 채워질까요?',
  layers: [{ motif: 'house', x: 110, y: 216 }, { motif: 'cloud', x: 330, y: 80 }, { motif: 'flower', x: 380, y: 234, color: 'rose' }],
  intro: ['"욕실 바닥 타일은 왜 대부분 사각형이나 육각형일까요? 동그란 타일로 바닥을 덮으면 어떻게 될까요?" 시연으로 사각형과 육각형이 빈틈없이 이어지는 모습과 원 사이의 빈틈을 보여 준다. 모양이 예쁘면 빈틈없이 채울 수 있다고 말하는 학생이 있다 — 겹치지 않으면서 빈틈이 없어야 채웠다고 말한다.', '집이나 학교 바닥에서 같은 모양이 반복된 곳을 떠올려 말해 봐요.'],
  acts: [
    act('a1', '활동 1. 중간 삼각형 두 개로 세 모양 만들기', 9, 'shapes', '같은 중간 삼각형 두 개를 이어 붙여 정사각형, 큰 삼각형, 평행사변형 자리를 각각 채워요.',
      '"같은 조각 두 개인데 세 가지 모양이 나왔어요. 어느 변끼리 붙였는지 말해 볼까요?" 짧은 변끼리 붙이면 삼각형, 긴 변끼리 붙이면 정사각형이 됨을 짚는다. 평행사변형을 못 만드는 학생에게는 두 조각의 직각이 서로 반대쪽에 오도록 한 조각을 돌려 보게 한다.',
      TAN, [
        tn('중간 삼각형 두 개로 정사각형 자리를 채워 보세요.', { slots: SQM, pieces: ['M', 'M'] }, 0.2),
        tn('같은 중간 삼각형 두 개로 큰 삼각형 자리를 채워 보세요.', { slots: TRM, pieces: ['M', 'M'] }, 0.22),
        tn('같은 두 조각으로 평행사변형 자리를 채워 보세요. 붙이는 변을 바꿔 봐요.', { slots: PGM, pieces: ['M', 'M'] }, 0.28, { conclude: '같은 중간 삼각형 두 개로 정사각형, 큰 삼각형, 평행사변형을 모두 만들 수 있어요.' }),
      ]),
    act('a2', '활동 2. 빈틈없이 채울 수 있는 도형 가리기', 9, 'shapes', '같은 모양을 겹치지 않게 이어 붙였을 때 빈틈없이 채워지는 도형과 빈틈이 생기는 도형으로 나누어요.',
      '"정삼각형을 여러 개 붙이면 모서리에서 틈이 생길까요?" 한 점에 여섯 개가 모여 딱 맞는다고 말하게 한다. 둥글면 빈틈이 있고 각진 도형은 모두 빈틈이 없다고 하는 학생에게는 정오각형을 붙여 모서리 사이의 틈을 보여 준다.',
      CLS, [
        cls('같은 모양을 겹치지 않게 이어 붙일 때 빈틈이 없는지 나누어 보세요.', [card('a', EQTRI), card('b', 'square'), card('c', 'circle'), card('d', 'pentagon')], ['빈틈없이 채워져요', '빈틈이 생겨요'], { a: 0, b: 0, c: 1, d: 1 }, 0.15),
        cls('이번에는 육각형과 팔각형도 있어요. 빈틈이 없는지 나누어 보세요.', [card('c', 'circle'), card('h', 'hexagon'), card('o', reg(8, Math.PI / 8)), card('r', 'rectangle')], ['빈틈없이 채워져요', '빈틈이 생겨요'], { c: 1, h: 0, o: 1, r: 0 }, 0.22),
        cls('변이 곧은 다각형만 모았어요. 빈틈이 없는지 나누어 보세요.', [card('a', 'parallelogram'), card('b', 'trapezoid'), card('c', STAR4), card('d', 'right-triangle')], ['빈틈없이 채워져요', '빈틈이 생겨요'], { a: 0, b: 0, c: 1, d: 0 }, 0.25,
          { conclude: '정삼각형·정사각형·정육각형은 빈틈없이 채워지지만 정오각형과 정팔각형, 원은 빈틈이 생겨요.' }),
      ]),
    act('a3', '활동 3. 조각이 몇 개 들어갔는지 세어 설명하기', 8, 'shapes', '조각으로 모양을 채운 뒤 쓴 조각의 수를 세어 써요.',
      '"조각이 몇 개 들어갔는지 어떻게 세었어요?" 조각마다 하나씩 짚으며 센다고 말하게 한다. 그림자 안의 선 수를 세어 조각 수로 쓰는 학생에게는 선이 아니라 조각 하나하나를 세게 한다.',
      TAN, [
        tn('작은 삼각형으로 큰 삼각형을 채운 뒤 쓴 조각은 몇 개인지 써 보세요.', { figure: 'triangle2', askNum: { q: '쓴 조각은 몇 개인가요?', unit: '개' } }, 0.15, { target: { fit: true, num: 2 } }),
        tn('정사각형 자리를 세 조각으로 채운 뒤 쓴 조각은 몇 개인지 써 보세요.', { figure: 'square3', askNum: { q: '쓴 조각은 몇 개인가요?', unit: '개' } }, 0.2, { target: { fit: true, num: 3 }, reveal: 'after-check' }),
        tn('더 해 보기: 칠교판의 일곱 조각으로 정사각형을 채운 뒤 쓴 조각의 수를 써 보세요.', { figure: 'square7', askNum: { q: '쓴 조각은 모두 몇 개인가요?', unit: '개' } }, 0.4, { target: { fit: true, num: 7 }, extra: true }),
      ]),
  ],
  wrap: ['"빈틈없이 채울 수 있는 정다각형과 채울 수 없는 도형을 하나씩 말해 볼까요?" 정육각형은 되고 원이나 정오각형은 안 된다는 말과 까닭이 나오는지 듣는다. 출구 1번에서 정오각형을 고른 학생은 9차시 처음에 정오각형을 이어 붙여 틈이 생기는 곳을 직접 짚어 본다.', [
    { type: 'choice', prompt: '같은 모양으로 빈틈없이 채울 수 있는 정다각형은 무엇인가요?', options: ['정육각형', '정오각형', '원'], answer: 0, difficulty: 0.15, explain: '정육각형은 한 점에 세 개가 딱 맞게 모여 빈틈이 없어요.' },
    { type: 'choice', prompt: '같은 중간 삼각형 두 개로 만들 수 없는 모양은 무엇인가요?', options: ['정사각형', '큰 삼각형', '원'], answer: 2, difficulty: 0.15, explain: '삼각형 두 개로는 곧은 변으로 둘러싸인 모양만 만들 수 있어요.' },
    { type: 'tool', tool: 'shapes', options: { mode: 'classify', cards: [card('x', 'square', 15), card('y', 'circle')], bins: ['빈틈없이 채워져요', '빈틈이 생겨요'] }, state: {}, prompt: '도형 카드를 빈틈이 없는지 나누세요.', target: { bins: { x: 0, y: 1 } }, difficulty: 0.12 },
  ]],
  ws: { title: '모양 만들기와 빈틈없이 채우기', items: [
    { type: 'figure', wide: true, prompt: '같은 두 조각으로 만든 모양의 이름을 쓰세요.', tool: 'shapes', options: { mode: 'tangram' }, figures: [{ options: { slots: SQM, pieces: ['M', 'M'] }, caption: '___' }, { options: { slots: TRM, pieces: ['M', 'M'] }, caption: '___' }], answer: '정사각형, 삼각형' },
    { type: 'table', prompt: '같은 모양으로 빈틈없이 채워지면 ○, 아니면 ×를 쓰세요.', columns: ['도형', '정삼각형', '정사각형', '정육각형', '원'], cells: [['빈틈없이 채워지나요?', '○', '', '', '']], answer: '○, ○, ×' },
    { type: 'choice', prompt: '빈틈이 생기는 도형에 ○ 하세요.', options: ['정사각형', '정오각형', '정삼각형'], answer: '정오각형' },
    { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '모양을 겹치지 않게 이어 붙였을 때 ______이 없으면 빈틈없이 채웠다고 해요.', answer: '빈틈' },
    { type: 'short', prompt: '원으로 바닥을 빈틈없이 채울 수 없는 까닭을 써 보세요.' },
  ], easy: { note: '겹치지 않으면서 빈틈이 없으면 채운 거예요. 둥근 모양은 사이에 빈틈이 생겨요.', items: [
    { type: 'figure', wide: true, prompt: '두 조각으로 만든 모양의 이름을 쓰세요.', tool: 'shapes', options: { mode: 'tangram', lines: true }, figures: [{ options: { slots: SQM, pieces: ['M', 'M'] }, caption: '___' }], answer: '정사각형' },
    { type: 'choice', prompt: '빈틈없이 채울 수 있는 도형에 ○ 하세요.', options: ['정사각형', '원'], answer: '정사각형' },
    { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '원은 이어 붙이면 사이에 ______이 생겨요.', answer: '빈틈' },
    { type: 'draw', prompt: '사각형 여섯 개를 빈틈없이 이어 붙인 모양을 그려 보세요.' },
  ] } },
  diff: { easy: '그림자 안에 조각 경계선이 보여 어느 조각이 어디로 가는지 알기 쉬워요.', base: '같은 조각으로 세 모양을 만들고 빈틈 여부를 가려요.', challenge: '일곱 조각으로 정사각형을 채우고 조각 수를 설명해요.' },
  notes: '자주 보이는 어려움: ① 각진 도형이면 모두 빈틈없이 채울 수 있다고 한다(정오각형) → 모서리가 모이는 곳의 틈을 확인한다. ② 같은 조각이면 한 가지 모양만 나온다고 한다 → 붙이는 변을 바꿔 세 모양을 만든다. ③ 그림자 안의 선 수를 조각 수로 센다 → 조각 하나씩 센다. 단원 정리는 9차시에서 한다.',
}));
// ───────────────────────────── 9차시 (wrap · application) ─────────────────────────────
L.push(lesson(9, {
  title: '다각형 이름과 대각선, 조각 모양을 한꺼번에 정리하기',
  objective: '정다각형을 가리고 이름과 변·꼭짓점·대각선의 수를 말하며, 조각으로 만든 모양이 정다각형인지 설명할 수 있다.',
  desc: 'a wall display of paper polygons labelled with their names and diagonal ribbons, and children building a parallelogram from two small triangles',
  text: '다각형 한 판 정리',
  layers: [{ motif: 'house', x: 110, y: 216 }, { motif: 'flower', x: 380, y: 232 }, { motif: 'bird', x: 250, y: 84 }],
  intro: ['"이번 단원에서 다각형에 대해 무엇을 알게 되었는지 말해 볼까요?" 다각형, 정다각형, 대각선, 조각으로 모양 만들기를 카드에 하나씩 적어 붙인다. 정다각형은 변만 같으면 된다고 말하는 학생에게는 3차시의 마름모를 떠올리게 한다. 오늘 문제 모두에서 이유를 한 문장으로 말하게 한다.', '이 단원에서 가장 기억에 남는 도형 하나를 골라 말해 봐요.'],
  acts: [
    act('a1', '활동 1. 정다각형·다른 다각형·다각형이 아닌 것으로 나누기', 9, 'shapes', '도형 카드를 세 칸으로 나누어요. 곧은 선으로만 둘러싸였는지, 변과 각이 모두 같은지 차례로 살펴요.',
      '"먼저 곧은 선으로만 둘러싸였나요? 그다음 변과 각이 모두 같나요?" 두 질문을 차례로 하게 한다. 원을 정다각형이라고 하는 학생에게는 곧은 선으로만 둘러싸이지 않았다는 첫 질문부터 다시 보게 한다.',
      CLS, [
        cls('도형 카드를 세 칸으로 나누어 보세요.', [card('a', 'square'), card('b', 'rectangle'), card('c', 'circle'), card('d', 'pentagon')], ['정다각형', '정다각형이 아닌 다각형', '다각형이 아니에요'], { a: 0, b: 1, c: 2, d: 0 }, 0.18),
        cls('이번에는 다른 카드예요. 세 칸으로 나누어 보세요.', [card('a', 'trapezoid'), card('b', 'oval'), card('c', EQTRI), card('d', 'rhombus')], ['정다각형', '정다각형이 아닌 다각형', '다각형이 아니에요'], { a: 1, b: 2, c: 0, d: 1 }, 0.22),
        cls('오목한 도형과 변이 여덟 개인 도형도 있어요. 세 칸으로 나누어 보세요.', [card('a', LSHAPE), card('b', reg(8, Math.PI / 8)), card('c', 'circle', 30), card('d', 'right-triangle')], ['정다각형', '정다각형이 아닌 다각형', '다각형이 아니에요'], { a: 1, b: 0, c: 2, d: 1 }, 0.28,
          { conclude: '곧은 선으로만 둘러싸이면 다각형, 그중 변과 각이 모두 같으면 정다각형이에요.' }),
      ]),
    act('a2', '활동 2. 점판 도형의 이름과 대각선 말하기', 9, 'shapes', '점판의 도형을 보고 이름, 꼭짓점의 수, 대각선의 수를 알맞게 말한 것을 골라요.',
      '"꼭짓점을 먼저 세고 이름을 붙인 뒤 대각선을 세어 볼까요?" 한 가지씩 차례로 말하게 한다. 이름을 변의 수가 아니라 모양으로 붙이는 학생에게는 꺾이는 곳마다 점을 찍으며 세게 한다.',
      GBR, [
        rdp('점판 도형의 이름으로 알맞은 것을 골라 보세요.', SQ2, '이 도형의 이름으로 알맞은 것은?', ['정사각형(정다각형)', '직사각형(정다각형이 아니에요)', '오각형'], 0, 0.12),
        rdp('점판 도형의 꼭짓점의 수와 이름으로 알맞은 것을 골라 보세요.', OCT, '꼭짓점의 수와 이름으로 알맞은 것은?', ['꼭짓점 6개, 육각형', '꼭짓점 8개, 팔각형', '꼭짓점 7개, 칠각형'], 1, 0.18),
        rdp('이 육각형의 한 꼭짓점에서 그을 수 있는 대각선은 몇 개인지 골라 보세요.', HEX, '한 꼭짓점에서 그을 수 있는 대각선은?', ['2개', '3개', '4개'], 1, 0.25,
          { conclude: '꼭짓점 6개에서 자기 자신과 이웃한 두 꼭짓점을 빼면 3개예요.' }),
      ]),
    act('a3', '활동 3. 조각으로 만든 모양이 정다각형인지 말하기', 8, 'shapes', '조각으로 모양을 채운 뒤 그 모양이 정다각형인지 변과 각을 보고 답해요.',
      '"이 모양은 변의 길이가 모두 같을까요? 각의 크기는요?" 두 조건을 모두 살피게 한다. 평행사변형을 모양이 반듯하다고 정다각형이라고 하는 학생에게는 마주 보는 변만 같다는 것을 짚는다.',
      TAN, [
        tn('작은 삼각형 두 조각으로 평행사변형을 채운 뒤 정다각형인지 골라 보세요.', { figure: 'parallelogram2', ask: { q: '이 모양은 정다각형인가요?', choices: ['정다각형이에요', '정다각형이 아니에요'] } }, 0.22, { target: { fit: true, pick: 1 } }),
        tn('작은 삼각형 두 조각으로 정사각형을 채운 뒤 정다각형인지 골라 보세요.', { figure: 'square2', ask: { q: '이 모양은 정다각형인가요?', choices: ['정다각형이에요', '정다각형이 아니에요'] } }, 0.22, { target: { fit: true, pick: 0 } }),
        tn('세 조각으로 큰 삼각형을 채운 뒤 바깥 변이 몇 개인지 써 보세요.', { figure: 'triangle3', askNum: { q: '바깥 변은 모두 몇 개인가요?', unit: '개' } }, 0.25, { target: { fit: true, num: 3 } }),
      ]),
  ],
  wrap: ['"이번 단원에서 정다각형을 어떻게 가려냈나요?" 변의 길이와 각의 크기를 모두 견준다는 말이 나오는지 듣는다. 출구 3번에서 3개를 고른 학생은 대각선과 변을 섞은 것이므로 5차시 활동지를 다시 풀게 한다.', [
    { type: 'choice', prompt: '정다각형이 되려면 꼭 필요한 조건은 무엇인가요?', options: ['변의 길이가 모두 같고 각의 크기도 모두 같다', '변의 길이만 같다', '변이 4개 이상이다'], answer: 0, difficulty: 0.12, explain: '변의 길이와 각의 크기가 모두 같아야 정다각형이에요.' },
    { type: 'tool', tool: 'shapes', options: { mode: 'geoboard', size: 5, readOnly: true, showCounts: false, askNum: { q: '꼭짓점은 몇 개인가요?', unit: '개' } }, state: { pts: [[1, 0], [3, 0], [4, 1], [4, 3], [2, 4], [0, 3], [0, 1]] }, prompt: '점판 도형의 꼭짓점은 몇 개인지 써 보세요.', target: { num: 7 }, difficulty: 0.15 },
    { type: 'choice', prompt: '오각형의 대각선은 모두 몇 개인가요?', options: ['3개', '5개', '10개'], answer: 1, difficulty: 0.2, explain: '한 꼭짓점에서 2개씩 5개의 꼭짓점이면 10개인데 같은 선분이 두 번 세어지니 반인 5개예요.' },
  ]],
  ws: { title: '다각형 단원 정리', items: [
    { type: 'table', prompt: '다각형의 대각선 수를 빈칸에 쓰세요.', columns: ['다각형', '사각형', '오각형', '육각형'], cells: [['대각선의 수(개)', '2', '', '']], answer: '5, 9' },
    { type: 'choice', prompt: '정다각형이 아닌 것에 ○ 하세요.', options: ['정삼각형', '직사각형', '정오각형'], answer: '직사각형' },
    { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '변이 8개이고 변과 각이 모두 같은 다각형은 ______이에요.', answer: '정팔각형' },
    { type: 'figure', wide: true, prompt: '조각으로 채운 모양에서 쓰인 조각의 개수를 쓰세요.', tool: 'shapes', options: { mode: 'tangram' }, figures: [{ options: { figure: 'triangle2' }, caption: '조각 ___개' }, { options: { figure: 'triangle3' }, caption: '조각 ___개' }], answer: '2개, 3개' },
    { type: 'short', prompt: '정다각형을 하나 골라 변·각·꼭짓점에 대해 알게 된 점을 두 문장으로 써 보세요.' },
  ], easy: { note: '곧은 선으로 둘러싸이면 다각형, 변과 각이 모두 같으면 정다각형이에요.', items: [
    { type: 'table', prompt: '사각형의 대각선은 2개예요. 오각형의 대각선은 몇 개인지 빈칸에 쓰세요.', columns: ['다각형', '사각형', '오각형'], cells: [['대각선의 수(개)', '2', '']], answer: '5' },
    { type: 'choice', prompt: '정다각형에 ○ 하세요.', options: ['정사각형', '직사각형'], answer: '정사각형' },
    { type: 'blank', prompt: '빈칸에 알맞은 말을 쓰세요.', text: '정다각형은 ______의 길이와 각의 크기가 모두 같아요.', answer: '변' },
    { type: 'draw', prompt: '정삼각형을 하나 그리고 꼭짓점의 수를 써 보세요.' },
  ] } },
  diff: { easy: '점판에 직각 표시가 보이고 카드가 칸에 들어갈 때 바로 맞는지 알려 줘요.', base: '다각형을 가리고 이름과 대각선을 말해요.', challenge: '조각으로 만든 모양이 정다각형인지 까닭과 함께 설명해요.' },
  notes: '자주 보이는 어려움: ① 변만 같으면 정다각형이라고 한다 → 각도 견준다. ② 이웃한 꼭짓점을 이은 선도 대각선이라고 한다 → 변을 먼저 지운다. ③ 조각 수와 바깥 변의 수를 헷갈린다 → 바깥 둘레만 센다. 출구 3번(대각선)을 틀린 학생은 5차시 활동지를 다시 풀게 한다.',
}));

// @@NEXT@@

PaperLessons.registerUnit({
  id: UID, schema: 'edu-unit.v1', catalogUnit: CU, grade: 4, subject: '수학', unitTitle: UT,
  flow: '1차시에서 곧은 선으로만 둘러싸인 도형을 다각형이라고 하며 원·타원·오목한 도형을 가리고, 2차시에서 변·꼭짓점·각의 수가 같음을 알고 삼각형부터 팔각형까지 이름을 붙입니다. 3~4차시에는 변의 길이와 각의 크기가 모두 같은 정다각형을 마름모·직사각형과 견주어 가리고, 정다각형의 이름과 (한 변)×(변의 수) 둘레를 구합니다. 5차시는 이웃하지 않는 두 꼭짓점을 이은 대각선을 사각형·오각형·육각형에서 세고 한 꼭짓점에서 그을 수 있는 대각선 수를 찾습니다. 6~8차시는 칠교 조각 두 개·세 개·일곱 개로 그림자를 채우며 돌리기와 뒤집기를 쓰고, 같은 조각으로 여러 모양을 만든 뒤 빈틈없이 채워지는 도형을 가립니다. 9차시에서 정다각형 가리기, 대각선, 조각으로 만든 모양의 설명을 정리합니다.',
  refs: {},
  lessons: L,
});
})();
